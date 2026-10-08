'use client';

import { ArrowUpRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { openWhatsApp, WHATSAPP_DISPLAY } from '@/lib/whatsapp';
import { siteConfig } from '@/lib/site-config';

export default function Footer() {
  const chat = () => openWhatsApp('Halo Mas Yusuf, saya ingin mendapatkan informasi kendaraan Isuzu, promo, dan program pembelian terbaru.');
  return (
    <footer className="bg-[#1B1D1F] text-white">
      <div className="h-[3px] bg-[#D71920]" />
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-7 lg:px-10 lg:py-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.3fr_.65fr_.95fr] lg:gap-16">
          <div>
            <div className="inline-flex rounded-[28px] bg-[#F6F2EA] px-5 py-4 shadow-[0_16px_35px_rgba(0,0,0,.12)]">
              <Image src="/images/brand/isuzu-jogja-commercial-logo.png" alt="Isuzu Jogja Commercial Vehicle Sales" width={1364} height={504} className="h-12 w-auto md:h-14" />
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/42">Informasi kendaraan niaga, kebutuhan operasional, program pembelian, dan konsultasi penjualan Isuzu bersama Yusuf di Yogyakarta.</p>
          </div>

          <div>
            <h3 className="text-[9px] font-extrabold uppercase tracking-[.24em] text-white/28">Explore</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/56">
              <a href="/produk" className="transition hover:text-white">Produk</a>
              <a href="/#solutions" className="transition hover:text-white">Solusi Bisnis</a>
              <a href="/promo" className="transition hover:text-white">Promo</a>
              <a href="/#services" className="transition hover:text-white">Layanan</a>
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-extrabold uppercase tracking-[.24em] text-white/28">Yusuf Astra Isuzu Yogyakarta</h3>
            <button onClick={chat} className="mt-5 flex items-center gap-2 text-sm font-semibold text-white"><MessageCircle size={16} className="text-[#EF2B31]" />{WHATSAPP_DISPLAY}</button>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/42">{siteConfig.brandName}, {siteConfig.showroomShort}.</p>
            <a className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-white/48 transition hover:text-white" href="https://isuzu-astra.com" target="_blank" rel="noopener noreferrer">Isuzu Indonesia <ArrowUpRight size={14} /></a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-[10px] uppercase tracking-[.08em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Yusuf Astra Isuzu Yogyakarta.</span>
          <span>Informasi produk dan program dapat berubah mengikuti kebijakan Isuzu dan dealer.</span>
        </div>
      </div>
    </footer>
  );
}
