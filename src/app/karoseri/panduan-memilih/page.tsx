import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Panduan Memilih Chassis & Karoseri Isuzu Jogja | Checklist Pembeli',
  description: 'Checklist memilih chassis dan karoseri truk Isuzu di Jogja berdasarkan berat serta dimensi muatan, rute, kebutuhan bongkar muat, biaya, dan legalitas.',
  alternates: { canonical: '/karoseri/panduan-memilih' },
};

const langkah = [
  {no:'01',judul:'Kenali barang dan fungsi utama',isi:'Tuliskan jenis barang, bentuk, volume atau jumlah per perjalanan, serta apakah perlu perlindungan cuaca, pendinginan, atau alat bongkar muat.'},
  {no:'02',judul:'Hitung bobot sebenarnya',isi:'Perkirakan berat barang terberat per perjalanan, bobot karoseri dan perlengkapannya, pengemudi serta penumpang. Jangan menyamakan kapasitas bak (m³) dengan kapasitas angkut (kg).'},
  {no:'03',judul:'Ukur dimensi dan akses',isi:'Catat panjang, lebar, tinggi barang terbesar; lebar jalan, tinggi gerbang, radius putar, kemiringan akses, dan batas jalan/jembatan yang akan dilalui.'},
  {no:'04',judul:'Pilih konsep karoseri',isi:'Towing untuk angkut kendaraan; dump untuk material curah; box untuk barang terlindung; bak/flatbed untuk barang terbuka atau tidak beraturan; tangki untuk cairan sesuai persyaratannya.'},
  {no:'05',judul:'Cocokkan dengan chassis',isi:'Bandingkan dimensi chassis, wheelbase, GVW/JBB, daya dukung gandar dan rekomendasi pemasangan karoseri. Pastikan bobot total serta beban per gandar tidak melampaui batas.'},
  {no:'06',judul:'Periksa biaya dan dokumen',isi:'Minta rincian harga chassis, biaya pembuatan karoseri, aksesori, pajak, pengurusan dokumen, waktu pengerjaan, garansi, dan pemeriksaan kelayakan konfigurasi.'},
];
const compare=[
 {name:'Towing / Angkut kendaraan',href:'/karoseri/towing-jogja',note:'Berat dan dimensi kendaraan yang diangkut, panjang platform, winch, distribusi beban'},
 {name:'Dump Truck',href:'/karoseri/dump-truck-jogja',note:'Jenis material, densitas, volume bak, kerja hidrolik, medan dan stabilitas'},
 {name:'Mobil Box',href:'/karoseri/mobil-box-jogja',note:'Volume & berat barang, tinggi box, akses pintu, isolasi/pendinginan'},
 {name:'Bak Terbuka & Flatbed',href:'/karoseri/bak-terbuka-flatbed-jogja',note:'Dimensi muatan, titik pengikatan, akses forklift dan keamanan barang'},
 {name:'Truk Tangki',href:'/karoseri/truk-tangki-jogja',note:'Jenis cairan, berat jenis, sekat, pompa, stabilitas dan izin khusus'},
];
const pertanyaan = [
 'Barang atau kendaraan apa yang akan diangkut?',
 'Berapa berat maksimal per perjalanan (kg/ton)?',
 'Berapa ukuran atau volume muatan, dan seberapa sering perjalanan dilakukan?',
 'Di mana rute operasinya dan bagaimana kondisi akses jalan?',
 'Karoseri atau alat bongkar muat seperti apa yang dibutuhkan?',
 'Apakah ada batas anggaran serta target waktu penggunaan?',
];
export default function PanduanMemilihKaroseri() {
 return <div className="min-h-screen bg-white text-[#15202B]"><Header/><main>
  <section className="bg-[#111B28] px-5 pb-16 pt-36 text-white sm:px-8"><div className="mx-auto max-w-6xl"><Link href="/karoseri" className="text-sm text-white/70 hover:text-white">← Pusat Karoseri</Link><p className="mt-8 text-xs font-black uppercase tracking-[.22em] text-[#FF686E]">PANDUAN PEMBELI · ISUZU JOGJA</p><h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">Pilih kendaraan berdasarkan pekerjaan, bukan sekadar model.</h1><p className="mt-6 max-w-3xl text-base leading-8 text-white/75">Gunakan panduan ini sebelum meminta penawaran truk atau pick up beserta karoserinya. Informasi ini membantu menyusun kebutuhan awal, bukan pengesahan kelayakan teknik.</p></div></section>
  <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><h2 className="text-3xl font-black">Enam langkah sebelum membeli</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{langkah.map(item=><article key={item.no} className="border border-slate-200 p-7"><span className="text-sm font-black text-[#D71920]">{item.no}</span><h3 className="mt-3 text-xl font-black">{item.judul}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.isi}</p></article>)}</div></section>
  <section className="bg-[#F3F5F7] px-5 py-16 sm:px-8"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-black">Karoseri mana yang ingin Anda pelajari?</h2><p className="mt-3 max-w-3xl leading-7 text-slate-600">Setiap bentuk karoseri memerlukan pemeriksaan teknis berbeda. Baca kategorinya sebelum memutuskan model Isuzu.</p><div className="mt-8 grid gap-4 md:grid-cols-2">{compare.map(item=><Link key={item.href} href={item.href} className="group border border-slate-200 bg-white p-6 transition hover:border-[#D71920]"><h3 className="text-xl font-black group-hover:text-[#D71920]">{item.name} ↗</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.note}</p></Link>)}</div></div></section>
  <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><h2 className="text-3xl font-black">Checklist untuk dikirim kepada sales</h2><p className="mt-3 leading-7 text-slate-600">Siapkan jawaban berikut agar konsultasi lebih terarah dan penawaran lebih sesuai.</p><ol className="mt-7 space-y-3">{pertanyaan.map((q,i)=><li key={q} className="border-l-4 border-[#D71920] bg-[#F8F9FA] p-4 text-sm font-medium">{i+1}. {q}</li>)}</ol><div className="mt-8 border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-slate-800"><strong>Hal penting:</strong> Kapasitas muatan aman tidak ditentukan dari volume bak saja. Konfigurasi chassis dan karoseri harus divalidasi terhadap bobot kendaraan, beban gandar, batas dimensi, dan ketentuan yang berlaku. Untuk cairan atau muatan berbahaya, dibutuhkan pemeriksaan persyaratan khusus.</div></section>
  <section className="bg-[#111B28] px-5 py-14 text-white sm:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><h2 className="text-3xl font-black">Sudah punya kebutuhan usahanya?</h2><p className="mt-3 max-w-2xl leading-7 text-white/70">Lanjutkan ke konsultasi armada. Siapkan detail barang, berat, rute, dan anggaran untuk pembahasan unit.</p></div><Link href="/konsultasi-armada" className="shrink-0 bg-[#D71920] px-6 py-4 text-center text-sm font-black text-white hover:bg-[#B81016]">Mulai konsultasi armada →</Link></div></section>
 </main><Footer/></div>;
}
