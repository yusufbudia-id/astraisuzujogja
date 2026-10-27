'use client';

import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ChevronDown, ChevronRight, Menu, MessageCircle, X } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

// Konsultasi Armada tetap berada di section beranda, bukan menu header.
const navigation = [
  { label: 'Beranda', href: '/' },
  { label: 'Produk', href: '/produk' },
  { label: 'Promo', href: '/promo' },
  { label: 'Layanan', href: '/#services' },
  { label: 'Kontak', href: '/kontak' },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); setSolutionsOpen(false); }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  const solutionItems = [
    { label: 'Logistik & Distribusi', href: '/#solutions' },
    { label: 'Konstruksi', href: '/#solutions' },
    { label: 'Pertanian & Perkebunan', href: '/#solutions' },
    { label: 'Retail & FMCG', href: '/#solutions' },
    { label: 'Transportasi Penumpang', href: '/#solutions' },
  ];
  const karoseriItems = [
    { label: 'Mobil Towing', href: '/karoseri/towing-jogja' },
    { label: 'Dump Truck', href: '/karoseri/dump-truck-jogja' },
    { label: 'Mobil Box', href: '/karoseri/mobil-box-jogja' },
    { label: 'Bak Terbuka & Flatbed', href: '/karoseri/bak-terbuka-flatbed-jogja' },
    { label: 'Truk Tangki', href: null },
  ];

  const askPrice = () => {
    setMenuOpen(false);
    openWhatsApp('Halo Mas Yusuf, saya ingin informasi harga OTR, promo, dan rekomendasi unit Isuzu sesuai kebutuhan usaha saya.');
  };

  // Transparent only over the homepage hero; other pages keep an opaque header.
  const transparent = pathname === '/' && !scrolled && !menuOpen;

  const isActive = (href: string) => href === '/' ? pathname === '/' : !href.includes('#') && pathname === href;

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${transparent ? 'border-white/20 bg-[#0B1420]/35 text-white backdrop-blur-md' : 'border-[#E7E9EC] bg-white/95 text-[#17212D] shadow-[0_12px_35px_rgba(12,27,41,.10)] backdrop-blur-xl'}`}>
        <div className="h-[3px] w-full bg-[#D71920]" />
        <div className={`hidden border-b md:block ${transparent ? 'border-white/15 bg-[#07111C]/35' : 'border-[#ECEEF0] bg-[#F8F9FA]'}`}>
          <div className={`mx-auto flex h-8 max-w-[1440px] items-center justify-between px-5 text-[10px] font-bold tracking-[.12em] sm:px-7 lg:px-10 ${transparent ? 'text-white/80' : 'text-[#616D79]'}`}>
            <span className="uppercase">ISUZU JOGJA <span className={`mx-2 ${transparent ? 'text-white/40' : 'text-[#C8CED5]'}`}>/</span> SOLUSI KENDARAAN NIAGA</span>
            <span className="uppercase">REAL PARTNER. REAL JOURNEY.</span>
          </div>
        </div>

        <div className={`mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 transition-[height] duration-300 sm:px-7 lg:px-10 ${scrolled ? 'h-[68px] md:h-[74px]' : 'h-[72px] md:h-[82px]'}`}>
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex min-w-0 shrink-0 items-center" aria-label="Isuzu Jogja - Beranda">
            <Image
              src={transparent ? "/images/brand/isuzu-jogja-commercial-logo-dark-hero.png" : "/images/brand/isuzu-jogja-commercial-logo.png"}
              alt="Isuzu Jogja"
              width={1364}
              height={504}
              priority
              className="h-11 w-auto max-w-[174px] object-contain sm:h-[53px] sm:max-w-[200px]"
            />
          </Link>

          <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
            {navigation.map(({ label, href }) => (
              <Fragment key={href}><Link
                key={href}
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                className={`group relative whitespace-nowrap px-2.5 py-3 text-[11px] font-extrabold uppercase tracking-[.075em] transition-colors xl:px-3 xl:text-xs ${isActive(href) ? (transparent ? 'text-white' : 'text-[#D71920]') : (transparent ? 'text-white/85 hover:text-white' : 'text-[#3E4854] hover:text-[#D71920]')}`}
              >
                {label}
                <span className={`absolute bottom-1 left-2.5 right-2.5 h-[2px] origin-left bg-[#D71920] transition-transform duration-200 xl:left-3 xl:right-3 ${isActive(href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>{href === '/produk' && (<div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
              <button type="button" aria-expanded={solutionsOpen} aria-controls="solusi-bisnis-desktop" onClick={() => setSolutionsOpen((v) => !v)} className={`inline-flex items-center gap-1 whitespace-nowrap px-2.5 py-3 text-[11px] font-extrabold uppercase tracking-[.075em] transition-colors xl:px-3 xl:text-xs ${transparent ? 'text-white/85 hover:text-white' : 'text-[#3E4854] hover:text-[#D71920]'}`}>
                Solusi Bisnis <ChevronDown size={14} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div id="solusi-bisnis-desktop" className="absolute right-0 top-full z-50 w-[560px] border border-[#E7E9EC] bg-white p-6 text-[#17212D] shadow-[0_20px_55px_rgba(0,0,0,.20)]" onKeyDown={(event) => { if (event.key === 'Escape') setSolutionsOpen(false); }}>
                  <div className="grid grid-cols-2 gap-8">
                    <div><p className="mb-3 text-[10px] font-black uppercase tracking-[.15em] text-[#D71920]">Berdasarkan Industri</p>
                      {solutionItems.map(item => <Link key={item.label} href={item.href} onClick={() => setSolutionsOpen(false)} className="block rounded-sm py-2 text-[13px] font-semibold text-[#344252] hover:text-[#D71920]">{item.label}</Link>)}
                    </div>
                    <div><p className="mb-3 text-[10px] font-black uppercase tracking-[.15em] text-[#D71920]">Berdasarkan Karoseri</p>
                      {karoseriItems.map(item => item.href ? <Link key={item.label} href={item.href} onClick={() => setSolutionsOpen(false)} className="block rounded-sm py-2 text-[13px] font-semibold text-[#344252] hover:text-[#D71920]">{item.label}</Link> : <span key={item.label} className="block py-2 text-[13px] text-[#99A2AC]" title="Halaman sedang disiapkan">{item.label} <span className="text-[10px]">(segera)</span></span>)}
                      <Link href="/karoseri" onClick={() => setSolutionsOpen(false)} className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-[#D71920] hover:underline">Lihat Semua Karoseri <ArrowUpRight size={14}/></Link>
                    </div>
                  </div>
                </div>
              )}
            </div>)}
              </Fragment>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={askPrice}
              className="hidden min-h-11 items-center justify-center gap-2 bg-[#D71920] px-4 text-[11px] font-extrabold uppercase tracking-[.065em] text-white shadow-[0_8px_20px_rgba(215,25,32,.17)] transition-colors hover:bg-[#B9141B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D71920] sm:inline-flex xl:px-5"
            >
              <MessageCircle size={16} aria-hidden="true" /> Tanya Harga
              <ArrowUpRight size={15} aria-hidden="true" className="hidden xl:block" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="isuzu-mobile-navigation"
              aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              className={`grid h-11 w-11 place-items-center border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D71920] lg:hidden ${transparent ? 'border-white/40 bg-white/10 text-white hover:bg-white/20' : 'border-[#DFE3E7] bg-white text-[#182330] hover:border-[#D71920] hover:text-[#D71920]'}`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="isuzu-mobile-navigation" aria-label="Navigasi mobile" className="max-h-[calc(100dvh-82px)] overflow-y-auto border-t border-[#E7E9EC] bg-white px-5 pb-6 pt-3 shadow-[0_16px_35px_rgba(12,27,41,.12)] sm:px-7 lg:hidden">
            <p className="pb-3 pt-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#D71920]">Jelajahi Isuzu Jogja</p>
            {navigation.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(href) ? 'page' : undefined}
                className={`flex min-h-12 items-center justify-between border-b border-[#EDF0F2] py-3 text-sm font-bold ${isActive(href) ? 'text-[#D71920]' : 'text-[#27323F]'}`}
              >
                {label} <ChevronRight size={16} className="text-[#9BA6B1]" aria-hidden="true" />
              </Link>
            ))}
            <div className="border-b border-[#EDF0F2]">
              <button type="button" aria-expanded={mobileSolutionsOpen} aria-controls="solusi-bisnis-mobile" onClick={() => setMobileSolutionsOpen(v => !v)} className="flex min-h-12 w-full items-center justify-between py-3 text-left text-sm font-bold text-[#27323F]">
                Solusi Bisnis <ChevronDown size={17} className={`text-[#D71920] transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`}/>
              </button>
              {mobileSolutionsOpen && <div id="solusi-bisnis-mobile" className="pb-4 pl-3">
                <p className="py-2 text-[10px] font-extrabold uppercase tracking-[.1em] text-[#D71920]">Berdasarkan Industri</p>
                {solutionItems.map(item => <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-[#344252]">{item.label}</Link>)}
                <p className="pb-2 pt-4 text-[10px] font-extrabold uppercase tracking-[.1em] text-[#D71920]">Berdasarkan Karoseri</p>
                {karoseriItems.map(item => item.href ? <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-[#344252]">{item.label}</Link> : <span key={item.label} className="block py-2 text-sm text-[#9CA5AF]">{item.label} (segera)</span>)}
                <Link href="/karoseri" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center gap-1 py-2 text-sm font-bold text-[#D71920]">Lihat Semua Karoseri <ArrowUpRight size={15}/></Link>
              </div>}
            </div>
            <div className="mt-5 border-l-[3px] border-[#D71920] bg-[#F4F6F8] p-4">
              <p className="text-xs font-black uppercase text-[#17212D]">Perlu rekomendasi kendaraan?</p>
              <p className="mt-1 text-xs leading-5 text-[#67727E]">Temukan pilihan sesuai kebutuhan usaha dari section konsultasi di beranda.</p>
              <Link href="/#konsultasi-armada" onClick={() => setMenuOpen(false)} className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-[#D71920]">Lihat Konsultasi <ChevronRight size={15} /></Link>
            </div>
            <button onClick={askPrice} className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 bg-[#D71920] px-4 text-xs font-extrabold uppercase tracking-[.08em] text-white">
              <MessageCircle size={17} /> Tanya Harga via WhatsApp
            </button>
          </nav>
        )}
      </header>

      {/* CTA bottom tetap ada untuk akses WhatsApp dari ponsel. */}
      <div className="fixed bottom-3 left-3 right-3 z-40 flex items-center gap-2 border border-[#E3E7EA] bg-white/95 p-1.5 shadow-[0_12px_35px_rgba(12,27,41,.16)] backdrop-blur-xl md:hidden">
        <Link href="/produk" className="flex min-h-11 flex-1 items-center justify-center px-2 text-xs font-extrabold text-[#24313D]">Lihat Produk</Link>
        <button type="button" onClick={askPrice} className="flex min-h-11 flex-[1.2] items-center justify-center gap-2 bg-[#D71920] px-3 text-xs font-extrabold text-white">
          <MessageCircle size={16} /> Tanya Harga
        </button>
      </div>
    </>
  );
}
