'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, MessageCircle, X } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

const nav = [
  ['Produk', '/produk'],
  ['Solusi Bisnis', '/#solutions'],
  ['Promo', '/promo'],
  ['Layanan', '/#services'],
  ['Kontak', '/kontak'],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const consult = () => openWhatsApp('Halo Mas Yusuf, saya ingin konsultasi kendaraan Isuzu. Mohon bantu rekomendasikan unit yang sesuai dengan kebutuhan saya.');
  const priceInfo = () => openWhatsApp('Halo Mas Yusuf, saya ingin informasi harga OTR, promo, dan rekomendasi unit Isuzu yang sesuai kebutuhan saya.');

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-[#202225]/10 bg-[#F8F4EC]/92 text-[#202225] backdrop-blur-xl transition-all duration-300 ${scrolled ? 'shadow-[0_14px_40px_rgba(20,22,24,.08)]' : 'shadow-[0_10px_28px_rgba(20,22,24,.04)]'}`}>
        <div className="h-[3px] bg-[#D71920]" />
        <div className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all duration-300 sm:px-7 lg:px-10 ${scrolled ? 'h-[76px]' : 'h-[84px]'}`}>
          <a href="/" className="flex min-w-0 items-center gap-3" aria-label="Isuzu Jogja Commercial Vehicle Sales">
            <Image
              src="/images/brand/isuzu-jogja-commercial-logo.png"
              alt="Isuzu Jogja Commercial Vehicle Sales"
              width={1364}
              height={504}
              priority
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-11 sm:h-12' : 'h-12 sm:h-14'}`}
            />
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-[11px] font-extrabold uppercase tracking-[.14em] text-[#202225]/62 transition hover:text-[#D71920]">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="hidden xl:block text-right">
              <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#D71920]">Yogyakarta • Konsultasi Cepat</p>
              <p className="mt-1 text-xs text-[#202225]/54">Unit usaha, fleet, promo, dan harga OTR.</p>
            </div>
            <button onClick={consult} className="rounded-full border border-[#202225]/12 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#202225] transition hover:border-[#D71920] hover:text-[#D71920]">Chat Yusuf</button>
            <button onClick={priceInfo} className="rounded-full bg-[#D71920] px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-[.12em] text-white transition hover:bg-[#B81016]">Tanya Harga</button>
          </div>

          <button className="grid h-10 w-10 place-items-center rounded-full border border-[#202225]/10 bg-white/70 lg:hidden" onClick={() => setOpen(!open)} aria-label="Buka menu">
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[#202225]/10 bg-[#F8F4EC] px-5 pb-5 pt-3 text-[#202225] sm:px-7 lg:hidden">
            <div className="mb-4 rounded-2xl border border-[#202225]/10 bg-white/80 p-4">
              <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#D71920]">Konsultasi Cepat</p>
              <p className="mt-1 text-sm text-[#202225]/64">Butuh harga OTR, promo, atau rekomendasi unit? Chat Yusuf langsung.</p>
            </div>
            <div className="grid">
              {nav.map(([label, href]) => (
                <a onClick={() => setOpen(false)} key={href} href={href} className="border-b border-[#202225]/10 py-4 text-sm font-bold">
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-4 grid gap-2">
              <button onClick={priceInfo} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D71920] px-4 py-3.5 text-sm font-extrabold text-white">
                <MessageCircle size={16} /> Tanya Harga & Promo
              </button>
              <button onClick={consult} className="flex w-full items-center justify-center gap-2 rounded-full border border-[#202225]/12 bg-white px-4 py-3.5 text-sm font-extrabold text-[#202225]">
                <MessageCircle size={16} /> Konsultasi dengan Yusuf
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="fixed bottom-4 left-4 right-4 z-40 flex items-center gap-2 rounded-[22px] border border-[#202225]/10 bg-white/96 p-1.5 shadow-[0_14px_45px_rgba(11,28,44,.18)] backdrop-blur-xl md:hidden">
        <a href="/produk" className="flex-1 rounded-2xl px-3 py-3 text-center text-xs font-extrabold text-[#202225]">Lihat Produk</a>
        <button onClick={priceInfo} className="flex flex-[1.25] items-center justify-center gap-2 rounded-2xl bg-[#D71920] px-3 py-3 text-xs font-extrabold text-white"><MessageCircle size={15} /> Tanya Harga</button>
      </div>
    </>
  );
}
