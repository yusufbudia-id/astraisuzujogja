import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Jual Dump Truck Isuzu Jogja | Panduan Chassis & Karoseri',
  description: 'Cari dump truck Isuzu di Jogja? Kenali dump belakang dan dump samping, kebutuhan material, pemilihan chassis, batas muatan, karoseri, serta konsultasi pembelian.',
  alternates: { canonical: '/karoseri/dump-truck-jogja' },
  openGraph: {
    title: 'Dump Truck Isuzu Jogja | Panduan Pemilihan untuk Usaha',
    description: 'Panduan memilih chassis dan karoseri dump truck untuk pasir, tanah, batu, dan operasional proyek di Yogyakarta.',
    url: '/karoseri/dump-truck-jogja',
    type: 'article',
  },
};

const message = encodeURIComponent('Halo Mas Yusuf, saya ingin konsultasi dump truck Isuzu di Jogja. Material: ...; estimasi berat per rit: ...; volume bak yang diinginkan: ...; medan/rute: ...; frekuensi rit: ...; lokasi: ...; anggaran: ... . Mohon dibantu pilihan chassis serta estimasi karoserinya.');
const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

const requirements = [
  { n: '01', title: 'Jenis dan berat material', desc: 'Pasir basah, tanah, batu, dan material campuran punya massa jenis berbeda. Volume bak sama tidak berarti berat muatan sama.' },
  { n: '02', title: 'Medan dan rute harian', desc: 'Perhatikan kondisi jalan proyek, tanjakan, permukaan licin, akses sempit, dan jarak angkut. Semua itu memengaruhi konfigurasi kendaraan.' },
  { n: '03', title: 'Volume bak dan dimensi', desc: 'Volume bak harus disesuaikan dengan berat material, dimensi chassis, distribusi beban, dan batas muatan yang berlaku.' },
  { n: '04', title: 'Siklus kerja & bongkar muat', desc: 'Frekuensi rit, waktu antrean, ruang untuk mengangkat bak, serta lokasi pembuangan menentukan kebutuhan hidrolik dan desain karoseri.' },
];
const faqs = [
  { q: 'Apakah Isuzu ELF cocok menjadi dump truck?', a: 'Beberapa chassis pada keluarga ELF dapat dievaluasi untuk konfigurasi dump ringan, tetapi kecocokan varian tertentu harus dikonfirmasi menggunakan spesifikasi chassis, berat karoseri, distribusi beban dan batas legal kendaraan.' },
  { q: 'Kapan perlu mempertimbangkan Isuzu GIGA?', a: 'Kebutuhan operasional dengan beban dan intensitas lebih tinggi dapat menjadi alasan mengevaluasi keluarga GIGA. Pilihan akhir tetap bergantung pada tipe, konfigurasi sumbu, medan dan ketentuan muatan.' },
  { q: 'Apakah harga dump truck sudah termasuk karoseri?', a: 'Tidak selalu. Mintalah rincian terpisah untuk chassis, bak dump, sistem hidrolik, kelengkapan, pengurusan dokumen yang diperlukan, dan pekerjaan pemasangan.' },
  { q: 'Apa bedanya kapasitas bak dan kapasitas angkut?', a: 'Kapasitas bak menjelaskan ruang/volume, sementara kapasitas angkut dibatasi berat muatan dan batas legal serta teknis kendaraan. Bak berukuran besar tidak otomatis aman untuk material yang berat.' },
  { q: 'Bisakah memilih dump hanya berdasarkan ukuran bak?', a: 'Tidak disarankan. Selain dimensi bak, perlu mengecek berat kosong chassis, bobot karoseri, kapasitas sumbu, posisi titik berat, stabilitas saat dumping, dan akses lokasi kerja.' },
];

export default function DumpTruckJogjaPage() {
  return <div className="min-h-screen bg-[#F6F7F8] text-[#182330]"><Header />
    <main>
      <section className="bg-[#111B28] px-5 pb-20 pt-36 text-white sm:px-8">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-white/65"><Link href="/" className="hover:text-white">Beranda</Link> <span className="px-2">/</span><Link href="/karoseri" className="hover:text-white">Karoseri</Link><span className="px-2">/</span>Dump Truck Jogja</nav>
          <p className="text-xs font-black uppercase tracking-[.24em] text-[#FF6067]">Solusi karoseri untuk material & proyek</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-black uppercase leading-[1.08] sm:text-6xl">Dump Truck Isuzu Jogja: Pilih Sesuai Material, Muatan, dan Medan</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">Sedang mencari dump truck untuk usaha pasir, batu, tanah, atau konstruksi? Pahami kebutuhan pengangkutan terlebih dahulu sebelum menentukan tipe chassis dan rancangan bak dump.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#D71920] px-7 py-4 text-sm font-extrabold text-white hover:bg-[#B81118]">Konsultasi Dump Truck ↗</a><Link href="/produk" className="border border-white/35 px-7 py-4 text-sm font-extrabold hover:bg-white/10">Lihat Katalog Isuzu</Link></div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-xs font-black uppercase tracking-widest text-[#D71920]">Mengenal karoseri dump</p>
        <h2 className="mt-3 text-3xl font-black">Apa itu dump truck, dan apa saja jenisnya?</h2>
        <p className="mt-5 max-w-4xl leading-8 text-slate-600">Dump truck adalah kendaraan pengangkut material curah yang mempunyai bak dengan mekanisme pengangkatan untuk mempermudah pembongkaran. Pilihan desain perlu memperhatikan jenis material, stabilitas saat pembuangan, kondisi permukaan dan ruang kerja.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="border border-slate-200 bg-white p-7 shadow-sm"><p className="text-xs font-bold uppercase tracking-widest text-[#D71920]">Tipe umum 01</p><h3 className="mt-3 text-2xl font-black">Rear Dump (Bak Jungkit Belakang)</h3><p className="mt-4 text-sm leading-7 text-slate-600">Bak terangkat dari bagian depan sehingga material keluar melalui pintu belakang. Banyak digunakan untuk material lepas pada proyek, dengan syarat lokasi pembuangan aman dan ruang angkat memadai.</p><p className="mt-4 border-l-2 border-[#D71920] pl-3 text-xs leading-6 text-slate-500">Periksa kestabilan tanah, kemiringan lokasi, dan hambatan di atas kendaraan sebelum mengangkat bak.</p></article>
          <article className="border border-slate-200 bg-white p-7 shadow-sm"><p className="text-xs font-bold uppercase tracking-widest text-[#D71920]">Tipe umum 02</p><h3 className="mt-3 text-2xl font-black">Side Dump (Bak Jungkit Samping)</h3><p className="mt-4 text-sm leading-7 text-slate-600">Karoseri tertentu membongkar material ke samping. Kebutuhannya lebih khusus dan harus disesuaikan dengan lokasi pembuangan, batas lebar, serta pemeriksaan stabilitas dan desain hidrolik.</p><p className="mt-4 border-l-2 border-[#D71920] pl-3 text-xs leading-6 text-slate-500">Tidak semua chassis atau konfigurasi cocok untuk side dump; perlu persetujuan rancangan teknis.</p></article>
        </div>
      </section>
      <section className="bg-white px-5 py-16 sm:px-8"><div className="mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-widest text-[#D71920]">Panduan sebelum membeli</p><h2 className="mt-3 max-w-4xl text-3xl font-black">Empat hal yang wajib dibahas sebelum memilih unit</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">{requirements.map((item) => <article key={item.n} className="border border-slate-200 p-7"><span className="text-xs font-black text-[#D71920]">{item.n}</span><h3 className="mt-2 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p></article>)}</div>
      </div></section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><h2 className="text-3xl font-black">ELF atau GIGA untuk dump truck?</h2><p className="mt-5 max-w-4xl leading-8 text-slate-600">Kedua keluarga kendaraan dapat menjadi titik awal konsultasi, tetapi tidak otomatis cocok untuk setiap ukuran bak atau berat material. Perlu pemeriksaan varian, batas berat yang diizinkan, sumbu kendaraan, wheelbase, berat karoseri dan ketentuan operasional. Kami tidak mencantumkan klaim kapasitas tonase tertentu tanpa data spesifikasi yang terverifikasi.</p>
        <div className="mt-7 grid gap-4 md:grid-cols-2"><div className="border-l-4 border-[#D71920] bg-white p-6"><h3 className="text-xl font-black">Isuzu ELF</h3><p className="mt-3 text-sm leading-7 text-slate-600">Pertimbangkan saat mencari opsi kendaraan niaga di kelas lebih ringan, terutama bila ruang manuver menjadi prioritas. Kesesuaian dump harus dihitung per varian.</p><Link href="/produk" className="mt-4 inline-block text-sm font-bold text-[#D71920] hover:underline">Lihat model ELF →</Link></div><div className="border-l-4 border-[#D71920] bg-white p-6"><h3 className="text-xl font-black">Isuzu GIGA</h3><p className="mt-3 text-sm leading-7 text-slate-600">Layak dievaluasi untuk kebutuhan truk kelas lebih berat dan operasional intensif. Pilihan konfigurasi chassis dan sumbu menentukan kemampuannya.</p><Link href="/produk" className="mt-4 inline-block text-sm font-bold text-[#D71920] hover:underline">Lihat model GIGA →</Link></div></div>
        <div className="mt-8 bg-[#FFF4F4] p-6 text-sm leading-7 text-[#65404A]"><strong>Catatan keselamatan:</strong> kapasitas volume bak (m³) bukan kapasitas angkut (kg/ton). Perhitungan muatan harus memperhitungkan berat jenis material, berat chassis serta karoseri, batas sumbu dan ketentuan legal kendaraan. Operasi dumping juga memerlukan pemeriksaan permukaan dan stabilitas.</div>
      </section>
      <section className="bg-[#F0F2F4] px-5 py-16 sm:px-8"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-black">Apa yang memengaruhi harga dump truck?</h2><p className="mt-5 max-w-4xl leading-8 text-slate-600">Penawaran biasanya perlu dirinci agar pembeli tidak menyamakan harga kendaraan dasar dengan harga unit siap operasi. Perhatikan biaya chassis, material dan dimensi bak, sistem hidrolik, kelengkapan keselamatan, pemasangan, serta dokumen dan pengujian yang diwajibkan.</p><div className="mt-7 grid gap-3 md:grid-cols-3">{['Harga chassis Isuzu', 'Biaya bak & hidrolik', 'Pemasangan, perlengkapan & dokumen'].map((item,i)=><div key={item} className="bg-white p-5 text-sm font-bold"><span className="mr-2 text-[#D71920]">0{i+1}</span>{item}</div>)}</div></div></section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><h2 className="text-3xl font-black">Pertanyaan yang sering diajukan</h2><div className="mt-7 space-y-3">{faqs.map(item=><details key={item.q} className="group border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-bold marker:text-[#D71920]">{item.q}</summary><p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p></details>)}</div><p className="mt-7 text-sm leading-7 text-slate-600">Baca juga: <Link href="/karoseri/towing-jogja" className="font-bold text-[#D71920] hover:underline">panduan mobil towing Jogja</Link> atau <Link href="/karoseri" className="font-bold text-[#D71920] hover:underline">jenis karoseri Isuzu lainnya</Link>.</p></section>
      <section className="bg-[#111B28] px-5 py-16 text-white sm:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-black uppercase tracking-widest text-[#FF656B]">Konsultasi pemilihan kendaraan</p><h2 className="mt-3 text-3xl font-black">Butuh dump truck di Jogja?</h2><p className="mt-4 max-w-3xl leading-8 text-white/70">Ceritakan material yang dibawa, estimasi tonase per rit, kondisi rute, kebutuhan bak, dan anggaran. Kami bantu menyusun opsi unit untuk diverifikasi bersama pihak karoseri sebelum penawaran final.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-7 inline-block bg-[#D71920] px-7 py-4 text-sm font-extrabold hover:bg-[#B81118]">Tanya Pilihan Dump Truck via WhatsApp ↗</a><p className="mt-4 text-xs text-white/50">Informasi bersifat panduan awal; bukan spesifikasi teknis final, jaminan ketersediaan, atau penawaran resmi.</p></div></section>
    
    <section aria-label="Panduan memilih chassis dan karoseri" className="bg-[#f1f4f7] px-5 py-10 sm:px-8"><div className="mx-auto max-w-6xl flex flex-col gap-5 border-l-4 border-[#D71920] bg-white p-7 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#D71920]">Panduan pembeli</p><h2 className="mt-2 text-xl font-black text-[#15202B]">Sudah cocok dengan kebutuhan muatan dan rute?</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Gunakan checklist sebelum meminta penawaran chassis dan karoseri agar spesifikasi serta biaya lebih mudah dibandingkan.</p></div><Link href="/karoseri/panduan-memilih" className="shrink-0 bg-[#D71920] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#B81016]">Buka panduan pembeli →</Link></div></section>
</main><Footer /></div>;
}
