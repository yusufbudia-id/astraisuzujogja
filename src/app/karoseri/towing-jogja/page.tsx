import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Jual Mobil Towing Jogja | Konsultasi Chassis Isuzu & Karoseri',
  description: 'Cari mobil towing di Jogja? Pelajari jenis towing angkut kendaraan, pilihan platform dan pertimbangan chassis Isuzu sebelum meminta penawaran karoseri.',
  alternates: { canonical: '/karoseri/towing-jogja' },
  openGraph: {
    title: 'Mobil Towing Jogja | Konsultasi Chassis Isuzu & Karoseri',
    description: 'Panduan memilih chassis dan karoseri towing angkut kendaraan sesuai kebutuhan usaha di Yogyakarta.',
    url: '/karoseri/towing-jogja',
    type: 'article',
  },
};

const waText = encodeURIComponent('Halo Mas Yusuf, saya mencari mobil towing / angkut kendaraan di Jogja. Saya ingin konsultasi chassis Isuzu dan karoseri yang sesuai. Jenis kendaraan yang akan diangkut: ...; berat/dimensi: ...; jumlah unit sekali jalan: ...; rute: ...; anggaran: ...');
const items = [
  ['Apa yang akan diangkut?', 'Mobil penumpang, kendaraan niaga ringan, atau kendaraan lain memiliki dimensi, berat, dan kebutuhan pengikatan yang berbeda.'],
  ['Berapa berat dan dimensinya?', 'Perhitungkan berat kendaraan yang diangkut, berat platform, kelengkapan towing, dan kapasitas serta batas legal chassis.'],
  ['Bagaimana proses naik-turun?', 'Pertimbangkan ramp manual/hidrolik, winch, kemiringan platform, ground clearance, dan keamanan saat loading.'],
  ['Rute dan frekuensi operasi?', 'Jalan kota, akses gudang, jalan menanjak, jarak antarkota, dan frekuensi perjalanan memengaruhi pemilihan konfigurasi.'],
];

export default function TowingJogjaPage() {
 return <div className="min-h-screen bg-[#F6F7F8] text-[#182330]"><Header />
  <main>
    <section className="bg-[#121C29] px-5 pb-20 pt-36 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-white/60"><Link href="/">Beranda</Link> / <Link href="/karoseri">Karoseri</Link> / Towing Jogja</nav>
        <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#FF5A61]">Panduan karoseri · Yogyakarta</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[1.08] sm:text-6xl">Mobil Towing Jogja: Pilih Chassis & Karoseri Sesuai Kebutuhan</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">Mencari kendaraan towing untuk usaha angkut mobil, pengiriman kendaraan, atau operasional bengkel? Mulailah dari muatan dan cara pengangkutannya, bukan hanya nama model truk.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="bg-[#D71920] px-7 py-4 text-sm font-extrabold text-white hover:bg-[#BA121A]">Konsultasi Towing via WhatsApp ↗</a><Link href="/produk" className="border border-white/35 px-7 py-4 text-sm font-extrabold text-white hover:bg-white/10">Lihat Chassis Isuzu</Link></div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div><h2 className="text-3xl font-black">Towing angkut kendaraan berbeda dengan mobil derek</h2>
          <p className="mt-5 leading-8 text-slate-600">Dalam percakapan sehari-hari, “towing” sering dipakai untuk kendaraan yang mengangkut mobil di atas platform. Mobil derek dapat memakai perangkat penarik atau pengangkat, dengan konfigurasi teknis berbeda. Jelaskan kebutuhan Anda sejak awal agar rancangan kendaraan tidak salah sasaran.</p>
          <p className="mt-4 leading-8 text-slate-600">Untuk towing platform, pemilihan chassis baru dapat dipastikan setelah diketahui target muatan, dimensi platform, posisi pusat berat, spesifikasi gardan, konfigurasi roda, dan rekomendasi pembuat karoseri. Karena itu, halaman ini tidak mengklaim semua tipe Isuzu cocok untuk setiap kebutuhan towing.</p>
        </div>
        <aside className="border-t-4 border-[#D71920] bg-white p-6 shadow-sm"><h3 className="text-lg font-black">Contoh kebutuhan calon pembeli</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600"><li>• Usaha angkut satu mobil penumpang</li><li>• Pengiriman kendaraan dari showroom</li><li>• Angkut kendaraan mogok ke bengkel</li><li>• Kebutuhan fleet pengiriman kendaraan</li></ul><p className="mt-4 text-xs leading-6 text-slate-500">Setiap contoh memerlukan pemeriksaan teknis yang berbeda.</p></aside>
      </div>
    </section>
    <section className="bg-white px-5 py-16 sm:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-black uppercase tracking-widest text-[#D71920]">Sebelum membeli</p><h2 className="mt-3 text-3xl font-black">Empat hal yang menentukan pilihan towing</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">{items.map(([title,description],i)=><article key={title} className="border border-slate-200 p-6"><span className="text-xs font-black text-[#D71920]">0{i+1}</span><h3 className="mt-2 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></article>)}</div></div>
    </section>
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><h2 className="text-3xl font-black">Bagaimana dengan chassis Isuzu?</h2><p className="mt-5 max-w-4xl leading-8 text-slate-600">Keluarga kendaraan Isuzu meliputi beberapa kelas kendaraan niaga. Konsultan dapat membantu membuat daftar varian yang layak ditinjau, tetapi kecocokan final untuk towing harus mengikuti data chassis, berat kosong kendaraan dan karoseri, kapasitas yang diizinkan, serta gambar rancangan dari karoseri. Harga kendaraan dasar dan biaya pembuatan towing adalah dua komponen penawaran yang perlu dibedakan.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link href="/produk" className="bg-[#182330] px-6 py-3 text-sm font-bold text-white">Lihat pilihan kendaraan Isuzu →</Link><Link href="/karoseri" className="border border-slate-300 px-6 py-3 text-sm font-bold">Jenis karoseri lain</Link></div>
    </section>
    <section className="bg-[#121C29] px-5 py-16 text-white sm:px-8"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-black">Konsultasi mobil towing di Jogja</h2><p className="mt-4 max-w-3xl leading-8 text-white/70">Sampaikan jenis kendaraan yang akan diangkut, perkiraan berat, rute operasional, serta anggaran. Kami bantu membahas opsi chassis dan kebutuhan koordinasi karoseri, sebelum ada penawaran harga.</p><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="mt-7 inline-block bg-[#D71920] px-7 py-4 text-sm font-extrabold hover:bg-[#BA121A]">Diskusikan Kebutuhan Towing ↗</a><p className="mt-4 text-xs text-white/50">Belum termasuk penawaran resmi, persetujuan teknis, atau jaminan ketersediaan karoseri.</p></div></section>
  
    <section aria-label="Panduan memilih chassis dan karoseri" className="bg-[#f1f4f7] px-5 py-10 sm:px-8"><div className="mx-auto max-w-6xl flex flex-col gap-5 border-l-4 border-[#D71920] bg-white p-7 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#D71920]">Panduan pembeli</p><h2 className="mt-2 text-xl font-black text-[#15202B]">Sudah cocok dengan kebutuhan muatan dan rute?</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Gunakan checklist sebelum meminta penawaran chassis dan karoseri agar spesifikasi serta biaya lebih mudah dibandingkan.</p></div><Link href="/karoseri/panduan-memilih" className="shrink-0 bg-[#D71920] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#B81016]">Buka panduan pembeli →</Link></div></section>
</main><Footer /></div>;
}
