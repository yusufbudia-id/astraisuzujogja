'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { productFamilies } from '@/lib/products-data';
import { formatCompactPrice, getProductPriceSummary } from '@/lib/pricing-data';
import { openWhatsApp } from '@/lib/whatsapp';
import { ArrowRight, ArrowLeft, CheckCircle2, ClipboardList, MessageCircle, ShieldAlert, Truck } from 'lucide-react';

type Usage = 'distribusi' | 'konstruksi' | 'lapangan' | 'penumpang' | 'berat';
type Load = 'ringan' | 'sedang' | 'besar' | 'belum';
type Road = 'kota' | 'campuran' | 'sulit';
type Body = 'pickup' | 'box' | 'dump' | 'bus' | 'fleksibel';
type Budget = 'under350' | '350to550' | 'above550' | 'belum';
type Answers = { usage: Usage | ''; load: Load | ''; road: Road | ''; body: Body | ''; budget: Budget | ''; notes: string };

type Choice = { value: string; label: string; description?: string };
const questions: {key: keyof Omit<Answers, 'notes'>; heading: string; detail: string; options: Choice[]}[] = [
  { key:'usage', heading:'Kendaraan dipakai untuk bisnis apa?', detail:'Kebutuhan operasional adalah titik awal memilih jenis kendaraan.', options:[
    {value:'distribusi',label:'Distribusi & pengiriman',description:'Retail, sembako, ekspedisi, atau logistik harian'},
    {value:'konstruksi',label:'Konstruksi & material',description:'Pasir, batu, bahan bangunan, proyek'},
    {value:'lapangan',label:'Perkebunan & operasional lapangan',description:'Rute tanah, medan sulit, lokasi kerja'},
    {value:'penumpang',label:'Travel & antar-jemput',description:'Mengangkut penumpang secara rutin'},
    {value:'berat',label:'Logistik & angkutan berat',description:'Pengiriman antarkota, armada besar'}] },
  { key:'load', heading:'Seberapa besar kebutuhan muatannya?', detail:'Ini kategori awal, bukan persetujuan kapasitas angkut. Perlu cek berat aktual, karoseri dan aturan operasional.', options:[
    {value:'ringan',label:'Ringan / usaha harian'}, {value:'sedang',label:'Sedang / distribusi berkembang'},
    {value:'besar',label:'Besar / pengiriman berat'}, {value:'belum',label:'Belum tahu, perlu dihitung'}] },
  { key:'road', heading:'Seperti apa rute yang paling sering dilalui?', detail:'Kondisi jalan, lebar akses, dan kebutuhan traksi memengaruhi pilihan sasis.', options:[
    {value:'kota',label:'Perkotaan & akses sempit'}, {value:'campuran',label:'Campuran kota dan antarkota'},
    {value:'sulit',label:'Perkebunan / jalan tidak rata'}] },
  { key:'body', heading:'Bentuk kendaraan atau karoseri yang dibutuhkan?', detail:'Pilih kebutuhan awal; kecocokan dimensi dan legalitas karoseri perlu diperiksa setelahnya.', options:[
    {value:'pickup',label:'Bak terbuka / pick up'}, {value:'box',label:'Box tertutup'},
    {value:'dump',label:'Dump / material'}, {value:'bus',label:'Bus / penumpang'},
    {value:'fleksibel',label:'Belum yakin / ingin dibantu'}] },
  { key:'budget', heading:'Berapa anggaran pembelian yang direncanakan?', detail:'Harga hanya filter awal. Tidak semua model memiliki harga OTR Yogyakarta di daftar proyek.', options:[
    {value:'under350',label:'Di bawah Rp350 juta'}, {value:'350to550',label:'Rp350–550 juta'},
    {value:'above550',label:'Di atas Rp550 juta'}, {value:'belum',label:'Belum menentukan anggaran'}] },
];

const initial: Answers = {usage:'',load:'',road:'',body:'',budget:'',notes:''};
const familySlugs = ['isuzu-traga','isuzu-elf','isuzu-giga','isuzu-d-max','isuzu-mu-x'] as const;
const reasons: Record<string,string> = {
  'isuzu-traga':'Pick up niaga ringan untuk distribusi dan aktivitas usaha harian.',
  'isuzu-elf':'Pilihan light truck dan microbus; memiliki konfigurasi chassis dan karoseri beragam.',
  'isuzu-giga':'Lini medium/heavy truck untuk kebutuhan logistik dan operasional berat.',
  'isuzu-d-max':'Pick up 4x4 untuk operasional lapangan dan rute yang membutuhkan traksi.',
  'isuzu-mu-x':'SUV operasional penumpang; bukan pilihan utama untuk angkutan barang niaga.',
};
function score(slug:string,a:Answers) {
  let n=0; const why:string[]=[];
  const add=(points:number,reason:string)=>{n+=points;why.push(reason);};
  if(a.usage==='distribusi') {if(slug==='isuzu-traga') add(5,'Cocok untuk distribusi harian');if(slug==='isuzu-elf') add(4,'Tersedia pilihan truk distribusi');if(slug==='isuzu-giga') add(1,'Alternatif bila skala muatan besar');}
  if(a.usage==='konstruksi'){if(slug==='isuzu-elf') add(4,'Tersedia chassis truk untuk berbagai kebutuhan proyek');if(slug==='isuzu-giga') add(5,'Alternatif untuk operasional material skala berat');if(slug==='isuzu-traga') add(1,'Untuk kebutuhan material ringan');}
  if(a.usage==='lapangan'){if(slug==='isuzu-d-max') add(7,'Pilihan pick up 4x4 untuk operasional lapangan');if(slug==='isuzu-elf') add(2,'Tersedia pilihan chassis untuk berbagai kebutuhan');}
  if(a.usage==='penumpang'){if(slug==='isuzu-elf') add(8,'Katalog mencakup varian microbus');if(slug==='isuzu-mu-x') add(2,'Alternatif kendaraan penumpang skala kecil');}
  if(a.usage==='berat'){if(slug==='isuzu-giga') add(9,'Lini kendaraan niaga untuk skala besar');if(slug==='isuzu-elf') add(2,'Alternatif untuk skala di bawah truk berat');}
  if(a.load==='ringan' && slug==='isuzu-traga') add(3,'Sejalan dengan kebutuhan usaha ringan');
  if(a.load==='sedang' && slug==='isuzu-elf') add(3,'Lini light truck untuk distribusi berkembang');
  if(a.load==='besar' && slug==='isuzu-giga') add(4,'Lini kendaraan untuk aplikasi berat');
  if(a.road==='sulit' && slug==='isuzu-d-max') add(5,'Sistem 4x4 dapat relevan di medan menantang');
  if(a.road==='kota' && slug==='isuzu-traga') add(2,'Pilihan kendaraan niaga ringan untuk rute perkotaan');
  if(a.body==='pickup' && ['isuzu-traga','isuzu-d-max'].includes(slug)) add(4,'Sejalan dengan kebutuhan bak terbuka');
  if(a.body==='box' && ['isuzu-traga','isuzu-elf','isuzu-giga'].includes(slug)) add(3,'Ada opsi aplikasi box yang dapat dikonsultasikan');
  if(a.body==='dump' && ['isuzu-elf','isuzu-giga'].includes(slug)) add(4,'Dapat ditinjau untuk aplikasi material/dump');
  if(a.body==='bus' && slug==='isuzu-elf') add(6,'Tersedia varian microbus pada katalog');
  const price=getProductPriceSummary(slug);
  if(price?.scope==='OTR') {
    if(a.budget==='under350' && price.amount<=350_000_000) add(2,'Harga awal tercantum dalam kisaran anggaran');
    if(a.budget==='350to550' && price.amount>=350_000_000 && price.amount<=550_000_000) add(2,'Harga awal tercantum dalam kisaran anggaran');
  }
  return {slug,score:n,why:why.slice(0,3)};
}

export default function KonsultasiArmadaPage(){
  const [answers,setAnswers]=useState<Answers>(initial);
  const [step,setStep]=useState(0);
  const [finished,setFinished]=useState(false);
  const question=questions[step];
  const selected=question ? answers[question.key]:'';
  const ranked=useMemo(()=>familySlugs.map(s=>score(s,answers)).sort((a,b)=>b.score-a.score).slice(0,3),[answers]);
  const submitWhatsapp=()=>{
    const selections=questions.map(q=>`${q.heading}\n${q.options.find(o=>o.value===answers[q.key])?.label??'Belum diisi'}`).join('\n\n');
    const picks=ranked.map((r,i)=>`${i+1}. ${productFamilies.find(p=>p.slug===r.slug)?.name??r.slug}`).join(', ');
    openWhatsApp(`Halo Mas Yusuf, saya sudah mengisi Konsultan Armada di website Isuzu Jogja. Mohon bantu verifikasi rekomendasi berikut:\n\n${selections}\n\nCatatan: ${answers.notes||'-'}\n\nRekomendasi awal: ${picks}\n\nMohon konsultasi kecocokan spesifikasi, karoseri, legalitas muatan, harga OTR, dan pembiayaan.`);
  };
  return <div className="min-h-screen bg-[#F6F7F8] text-[#18212C]"><Header/><main className="pt-28 sm:pt-32">
    <section className="bg-[#111820] px-5 py-14 text-white sm:px-8 lg:py-20"><div className="mx-auto max-w-[1160px]">
      <span className="text-xs font-black uppercase tracking-[.25em] text-[#FF5961]">Konsultan Armada Isuzu Jogja</span>
      <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Bukan sekadar beli truk.<br/><span className="text-[#FF5961]">Pilih yang sesuai usaha.</span></h1>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">Jawab lima pertanyaan singkat. Kami bantu menyaring pilihan kendaraan berdasarkan kebutuhan, memberikan alasan rekomendasi, dan menyiapkan pertanyaan penting sebelum membeli.</p>
    </div></section>
    <section className="mx-auto max-w-[1160px] px-5 py-10 sm:px-8 lg:py-16">
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_330px]">
        <div className="border border-[#DFE3E7] bg-white p-5 shadow-[0_20px_70px_rgba(15,25,35,.06)] sm:p-9">
          {!finished ? <>
            <div className="flex items-center justify-between gap-3"><span className="text-xs font-black uppercase tracking-widest text-[#D71920]">Tahap {step+1} dari {questions.length}</span><span className="text-xs text-slate-500">{Math.round(step/questions.length*100)}% selesai</span></div>
            <div className="mt-4 h-1.5 w-full bg-[#E9ECEF]"><div className="h-full bg-[#D71920] transition-all" style={{width:`${(step+1)/questions.length*100}%`}}/></div>
            <h2 className="mt-8 text-2xl font-black tracking-tight sm:text-3xl">{question.heading}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{question.detail}</p>
            <div className="mt-7 grid gap-3">{question.options.map(option=><button key={option.value} type="button" aria-pressed={selected===option.value} onClick={()=>setAnswers(v=>({...v,[question.key]:option.value}))} className={`flex w-full items-center justify-between gap-3 border p-4 text-left transition sm:p-5 ${selected===option.value?'border-[#D71920] bg-red-50 text-[#97141A]':'border-[#E1E5E9] bg-white hover:border-[#D71920]/60'}`}><span><strong className="block text-sm font-bold">{option.label}</strong>{option.description&&<span className="mt-1 block text-xs text-slate-500">{option.description}</span>}</span>{selected===option.value&&<CheckCircle2 size={20} className="shrink-0 text-[#D71920]"/>}</button>)}</div>
            <div className="mt-8 flex justify-between gap-3"><button type="button" disabled={step===0} onClick={()=>setStep(i=>Math.max(0,i-1))} className="inline-flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-500 disabled:opacity-30"><ArrowLeft size={17}/> Kembali</button><button type="button" disabled={!selected} onClick={()=>step===questions.length-1?setFinished(true):setStep(i=>i+1)} className="inline-flex items-center gap-2 bg-[#D71920] px-6 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">{step===questions.length-1?'Lihat rekomendasi':'Lanjut'} <ArrowRight size={17}/></button></div>
          </>:<>
            <span className="text-xs font-black uppercase tracking-[.2em] text-[#D71920]">Hasil penyaringan awal</span><h2 className="mt-3 text-3xl font-black uppercase">Rekomendasi untuk kebutuhanmu</h2><p className="mt-3 text-sm leading-7 text-slate-600">Urutan berikut merupakan kecocokan kategori berdasarkan jawaban, <strong>bukan jaminan kapasitas muatan, spesifikasi teknis, atau persetujuan pembiayaan.</strong></p>
            <div className="mt-8 space-y-4">{ranked.map((r,i)=>{const p=productFamilies.find(item=>item.slug===r.slug);const price=getProductPriceSummary(r.slug);if(!p)return null;return <article key={r.slug} className="grid gap-4 border border-[#E2E5E9] p-4 sm:grid-cols-[140px_1fr] sm:p-5"><div className="relative h-36 bg-[#F3F5F6] sm:h-auto"><Image src={p.image} alt={p.imageAlt} fill sizes="140px" className="object-contain p-2"/></div><div><div className="text-xs font-black uppercase tracking-widest text-[#D71920]">Pilihan {i+1}</div><h3 className="mt-1 text-xl font-black">{p.name}</h3><p className="mt-2 text-xs leading-6 text-slate-600">{reasons[r.slug]}</p><ul className="mt-2 list-disc pl-4 text-xs leading-6 text-slate-700">{r.why.map(x=><li key={x}>{x}</li>)}</ul><p className="mt-3 text-xs font-bold text-slate-500">{price?.scope==='OTR'?`Referensi harga mulai ${formatCompactPrice(price.amount)} (konfirmasi OTR)`:'Harga OTR: konsultasikan terlebih dahulu'}</p><Link href={`/produk`} className="mt-2 inline-flex items-center gap-1 text-xs font-black text-[#D71920]">Lihat katalog <ArrowRight size={14}/></Link></div></article>})}</div>
            <label htmlFor="consultNotes" className="mt-7 block text-sm font-bold">Catatan tambahan (opsional)</label><textarea id="consultNotes" value={answers.notes} onChange={e=>setAnswers(v=>({...v,notes:e.target.value}))} rows={3} maxLength={700} placeholder="Contoh: jenis barang, berat per perjalanan, ukuran box, rute, medan tanjakan, jumlah perjalanan per hari..." className="mt-2 w-full border border-slate-300 p-3 text-sm outline-none focus:border-[#D71920]"/>
            <div className="mt-5 flex flex-wrap gap-3"><button onClick={submitWhatsapp} className="inline-flex items-center gap-2 bg-[#D71920] px-6 py-4 text-sm font-bold text-white"><MessageCircle size={17}/> Konsultasikan hasil ke Yusuf</button><button onClick={()=>{setStep(0);setFinished(false)}} className="border border-slate-300 px-5 py-4 text-sm font-bold">Ubah jawaban</button></div>
          </>}
        </div>
        <aside className="space-y-5"><div className="border-t-4 border-[#D71920] bg-white p-6 shadow-sm"><Truck className="text-[#D71920]" size={26}/><h3 className="mt-4 text-lg font-black">Apa yang akan kamu dapat?</h3><p className="mt-3 text-sm leading-7 text-slate-600">Pilihan awal kendaraan, alasan kecocokan, dan ringkasan kebutuhan yang bisa dikirim ke konsultan sales.</p></div>
          <div className="bg-[#19232D] p-6 text-white"><ClipboardList size={25} className="text-[#FF5860]"/><h3 className="mt-4 font-black">Data yang perlu disiapkan</h3><p className="mt-3 text-sm leading-7 text-white/70">Berat muatan riil, dimensi barang, jenis karoseri, jumlah penumpang (jika ada), rute, kondisi jalan, dan anggaran.</p></div>
          <div className="border border-amber-200 bg-amber-50 p-5"><ShieldAlert className="text-amber-800" size={22}/><p className="mt-3 text-xs leading-6 text-amber-950"><strong>Catatan penting:</strong> Berat total kendaraan (GVW) bukan kapasitas muatan bersih. Kecocokan unit wajib dicek terhadap berat kosong kendaraan, karoseri, konfigurasi, dan ketentuan operasional yang berlaku.</p></div></aside>
      </div>
    </section></main><Footer/></div>;
}
