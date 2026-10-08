'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BadgePercent, Calculator, Car, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

const items = [
  { icon: Car, title: 'Harga OTR Yogyakarta', copy: 'Konfirmasi harga sesuai unit, varian, domisili, dan program penjualan yang berlaku.' },
  { icon: BadgePercent, title: 'Program pembelian', copy: 'Tanyakan promo dan program yang sedang tersedia tanpa mengandalkan angka promo yang sudah kedaluwarsa.' },
  { icon: Calculator, title: 'Simulasi pembiayaan', copy: 'Diskusikan rencana DP, tenor, leasing, asuransi, dan kebutuhan karoseri bila diperlukan.' },
];

export default function Promo() {
  return (
    <div className="min-h-screen bg-[#F3F0EA] text-[#202225]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#D71920] px-5 pb-16 pt-32 text-white sm:px-7 lg:px-10 lg:pb-20">
          <div className="absolute -right-20 -top-20 text-[18rem] font-black leading-none tracking-[-.1em] text-white/[.06]">ISUZU</div>
          <div className="relative mx-auto max-w-[1440px]">
            <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-white/62">Promo & pembiayaan</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-7xl">Minta penawaran berdasarkan kondisi aktual.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72">Program pembelian dapat berubah mengikuti periode dan kebijakan yang berlaku. Konfirmasi langsung diperlukan untuk mendapatkan informasi promo, harga, dan pembiayaan terbaru.</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-7 lg:px-10 lg:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {items.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="border border-[#202225]/12 bg-[#EEEAE2] p-7 sm:p-8">
                <Icon className="text-[#D71920]" size={25} />
                <h2 className="mt-8 text-2xl font-semibold tracking-[-.03em]">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#202225]/56">{copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid overflow-hidden border border-[#202225]/12 bg-[#20201E] text-white lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-8 sm:p-10">
              <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#D71920]">Quotation terbaru</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em]">Sebutkan unit dan rencana pembelian Anda.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/48">Yusuf dapat membantu menyiapkan informasi yang lebih relevan berdasarkan model, varian, domisili, dan kebutuhan operasional.</p>
            </div>
            <div className="p-8 pt-0 sm:p-10 sm:pt-0 lg:pt-10">
              <button onClick={() => openWhatsApp('Halo Mas Yusuf, saya ingin mengetahui promo, harga OTR, dan program pembelian Isuzu terbaru untuk Yogyakarta.')} className="inline-flex items-center gap-2 bg-[#D71920] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#B81016]"><MessageCircle size={17} /> Tanya Promo</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
