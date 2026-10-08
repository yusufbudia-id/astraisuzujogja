import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F3F0EA] text-[#202225]">
      <Header />
      <main className="flex min-h-[78svh] items-center px-5 pb-20 pt-28 sm:px-7 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 border-y border-[#202225]/12 py-14 lg:grid-cols-[.7fr_1.3fr] lg:items-end lg:py-20">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[.3em] text-[#D71920]">404 / Halaman tidak ditemukan</p>
            <div className="mt-5 text-[clamp(6rem,18vw,14rem)] font-semibold leading-[.72] tracking-[-.09em] text-[#202225]/10">404</div>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[.9] tracking-[-.06em]">Rutenya tidak ada.<br /><span className="text-[#202225]/28">Kendaraannya tetap ada.</span></h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#202225]/55">Kembali ke beranda atau lihat seluruh lineup Isuzu yang tersedia.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Link href="/" className="inline-flex items-center gap-2 bg-[#D71920] px-5 py-3.5 text-xs font-extrabold text-white"><ArrowLeft size={15} /> Beranda</Link>
              <Link href="/produk" className="inline-flex items-center gap-2 border border-[#202225]/16 px-5 py-3.5 text-xs font-extrabold">Lihat Produk <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
