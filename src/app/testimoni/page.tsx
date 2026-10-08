import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#202225]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#24211E] px-5 pb-16 pt-32 text-white sm:px-7 lg:px-10 lg:pb-20">
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
          <div className="relative mx-auto max-w-[1440px]">
            <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#EF2B31]">Customer stories</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-.05em] sm:text-6xl lg:text-7xl">Pengalaman pelanggan.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/62">Halaman ini hanya akan memuat testimoni pelanggan yang sudah memberikan izin publikasi.</p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-7 lg:py-20">
          <div className="border border-[#202225]/12 bg-[#F1F2EF] p-9 text-center sm:p-12">
            <Quote className="mx-auto text-[#D71920]" />
            <h2 className="mt-6 text-3xl font-semibold tracking-[-.035em]">Belum ada testimoni yang dipublikasikan.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#202225]/55">Kami tidak menggunakan testimoni dummy. Konten akan ditambahkan setelah ada pelanggan Astra Isuzu Yogyakarta yang memberikan persetujuan untuk dipublikasikan.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
