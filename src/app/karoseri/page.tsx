import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Panduan Karoseri Truk Isuzu Jogja | Towing, Box, Dump',
  description: 'Kenali jenis karoseri kendaraan niaga di Yogyakarta: towing, box, dump truck, bak terbuka dan lainnya. Konsultasi pemilihan chassis Isuzu sesuai kebutuhan usaha.',
  alternates: { canonical: '/karoseri' },
};

const kategori = [
  { title: 'Towing / Angkut Kendaraan', desc: 'Mengenal kendaraan pengangkut mobil dan pertimbangan memilih platform serta chassis.', href: '/karoseri/towing-jogja', active: true },
  { title: 'Mobil Box', desc: 'Untuk barang terlindung dari hujan, debu, dan kondisi perjalanan.', href: '', active: false },
  { title: 'Dump Truck', desc: 'Untuk kebutuhan material curah dengan bak yang dapat ditumpahkan.', href: '', active: false },
  { title: 'Bak Terbuka', desc: 'Untuk muatan yang membutuhkan akses bongkar muat terbuka.', href: '', active: false },
  { title: 'Tangki / Pendingin / Khusus', desc: 'Karoseri khusus untuk kebutuhan operasional tertentu.', href: '', active: false },
];

export default function KaroseriPage() {
  return <div className="min-h-screen bg-[#F5F6F7] text-[#17202B]"><Header />
    <main>
      <section className="bg-[#121C29] px-5 pb-20 pt-36 text-white sm:px-8">
        <div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#FF646A]">Pusat informasi kendaraan niaga</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight sm:text-6xl">Pilih Karoseri Sesuai Kebutuhan Usaha</h1>
          <p className="mt-5 max-w-3xl leading-8 text-white/75">Tidak semua truk mempunyai fungsi yang sama. Kenali bentuk dan kegunaan karoseri sebelum memilih chassis, varian, serta anggaran kendaraan Isuzu di Yogyakarta.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="text-2xl font-extrabold">Jelajahi jenis karoseri</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kategori.map((item) => <article key={item.title} className="flex flex-col border border-slate-200 bg-white p-7 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D71920]">{item.active ? 'Panduan tersedia' : 'Panduan menyusul'}</span>
            <h3 className="mt-4 text-xl font-black">{item.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.desc}</p>
            {item.active ? <Link href={item.href} className="mt-7 inline-block font-bold text-[#D71920] hover:underline">Baca panduan →</Link> : <span className="mt-7 text-sm text-slate-400">Sedang dipersiapkan</span>}
          </article>)}
        </div>
        <div className="mt-12 border-l-4 border-[#D71920] bg-white p-6 text-sm leading-7 text-slate-600">Kecocokan kendaraan ditentukan oleh muatan nyata, berat karoseri, dimensi, batas berat yang diizinkan, kondisi rute, dan spesifikasi chassis. Halaman ini merupakan informasi awal, bukan persetujuan teknis untuk konfigurasi tertentu.</div>
      </section>
    </main><Footer /></div>;
}
