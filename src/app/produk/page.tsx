'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products, totalOfficialVariants, officialCatalogUrl, otoTruckCatalogUrl, truckModelCount } from '@/lib/products-data';
import { ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { getProductPriceSummary } from '@/lib/pricing-data';

const filters = ['Semua', 'Pick Up', 'ELF', 'GIGA', '4x4 & SUV'] as const;

export default function ProdukPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Semua');
  const visible = useMemo(
    () => (filter === 'Semua' ? products : products.filter((product) => product.catalogGroup === filter)),
    [filter]
  );

  const chat = (name: string) =>
    openWhatsApp(`Halo Mas Yusuf, saya tertarik dengan ${name}. Mohon informasi varian yang sesuai, harga OTR Yogyakarta, promo, dan ketersediaan unit terbaru.`);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#202225]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-white px-5 pb-16 pt-32 text-[#202225] sm:px-7 lg:px-10 lg:pb-20">
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#202225]/10" />
          <div className="relative mx-auto max-w-[1440px]">
            <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#EF2B31]">Model Isuzu</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-semibold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
                  Cari langsung berdasarkan model yang Anda kenal.
                </h1>
                <div className="mt-7 flex flex-wrap gap-3 text-xs font-bold text-[#202225]/62">
                  <span className="border border-[#202225]/12 px-3 py-2">{truckModelCount} model truk utama</span>
                  <span className="border border-[#202225]/12 px-3 py-2">+ D-MAX & MU-X</span>
                  <span className="border border-[#202225]/12 px-3 py-2">{totalOfficialVariants} varian katalog Astra</span>
                </div>
              </div>
              <div className="max-w-xl lg:justify-self-end">
                <p className="text-sm leading-7 text-[#202225]/56">
                  Nama model dibuat lebih spesifik seperti ELF NLR/NMR dan GIGA FRR/FTR/FVR agar lebih mudah dicari. Varian dan spesifikasi tetap mengacu pada data katalog Astra Isuzu yang sudah dikumpulkan di project.
                </p>
                <div className="mt-5 flex flex-wrap gap-5">
                  <a href={officialCatalogUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-extrabold text-[#202225]/70 transition hover:text-[#D71920]">
                    Katalog Astra Isuzu <ExternalLink size={14} />
                  </a>
                  <a href={otoTruckCatalogUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-extrabold text-[#202225]/48 transition hover:text-[#D71920]">
                    Referensi grouping Oto <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#202225]/10 bg-[#EEEFEA] px-5 sm:px-7 lg:px-10">
          <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto py-5">
            {filters.map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`shrink-0 px-4 py-2.5 text-xs font-extrabold transition ${filter === item ? 'bg-[#D71920] text-white' : 'border border-[#202225]/12 bg-[#F7F7F5] text-[#202225]/65 hover:border-[#D71920] hover:text-[#D71920]'}`}>
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F7F7F5] px-5 py-12 sm:px-7 lg:px-10 lg:py-16">
          <div className="pointer-events-none absolute right-0 top-0 text-[clamp(7rem,18vw,16rem)] font-black leading-none tracking-[-.1em] text-[#D71920]/[.055]">ISUZU</div>
          <div className="relative mx-auto grid max-w-[1440px] gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((product) => {
              const priceSummary = getProductPriceSummary(product.slug);
              return (
              <article key={product.id} className="group relative overflow-hidden border border-[#202225]/10 bg-white shadow-[0_18px_55px_rgba(20,22,24,.045)] transition duration-500 hover:-translate-y-1 hover:border-[#D71920]/30 hover:shadow-[0_24px_70px_rgba(150,12,18,.11)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,25,32,.18)_0%,rgba(215,25,32,.12)_22%,transparent_50%)] opacity-100" />
                <div className="pointer-events-none absolute right-[-20%] top-[-18%] h-44 w-44 rounded-full bg-[#D71920]/[.18] blur-3xl transition duration-500 group-hover:bg-[#D71920]/[.26]" />
                <div className="absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-0 bg-[#D71920] transition-transform duration-500 group-hover:scale-x-100" />
                <Link href={`/produk/${product.slug}`} className="relative block min-h-[245px] overflow-hidden bg-[linear-gradient(145deg,#ffffff_0%,#eceeea_100%)] sm:min-h-[285px]">
                  <div className="pointer-events-none absolute left-[-18%] top-[-22%] h-[118%] w-[78%] rounded-br-[9rem] bg-[#D71920]/[.30]" />
                  <div className="pointer-events-none absolute inset-x-[-8%] bottom-[-10%] h-[40%] -skew-x-[18deg] bg-[linear-gradient(90deg,rgba(215,25,32,.34)_0%,rgba(215,25,32,.20)_44%,rgba(215,25,32,0)_78%)]" />
                  <div className="pointer-events-none absolute -bottom-16 -left-14 h-56 w-56 rounded-full bg-[#D71920]/[.16] blur-2xl" />
                  <div className="pointer-events-none absolute bottom-6 left-0 h-14 w-[72%] bg-[linear-gradient(90deg,rgba(215,25,32,.30)_0%,rgba(215,25,32,.12)_52%,rgba(215,25,32,0)_100%)]" />
                  <Image src={product.image} alt={product.imageAlt} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-contain p-7 transition duration-700 group-hover:scale-[1.05]" />
                  <div className="absolute left-5 top-5 border border-[#202225]/10 bg-white/92 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[.18em] text-[#D71920] backdrop-blur">
                    {product.category}
                  </div>
                </Link>

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[.22em] text-[#202225]/40">{product.family ?? product.segment}</p>
                      <h2 className="mt-2 text-[1.65rem] font-semibold leading-none tracking-[-.04em]">{product.name}</h2>
                    </div>
                    <span className="shrink-0 border border-[#D71920]/15 bg-[#fff0f1] px-2.5 py-2 text-[11px] font-extrabold text-[#a91117]">{product.variants.length} varian</span>
                  </div>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#202225]/56">{product.description}</p>

                  <div className="mt-4 flex items-end justify-between gap-4 border-y border-[#202225]/8 py-3">
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[.18em] text-[#202225]/38">Harga</p>
                      <p className="mt-1 text-lg font-semibold tracking-[-.025em] text-[#202225]">{priceSummary ? priceSummary.label : 'Hubungi Yusuf'}</p>
                    </div>
                    {priceSummary?.scope === 'LOCO_MALANG' && <span className="text-right text-[9px] font-bold uppercase tracking-[.12em] text-[#D71920]">Loco Malang</span>}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.useCases.slice(0, 3).map((useCase) => <span key={useCase} className="border border-[#202225]/10 px-2.5 py-1.5 text-[10px] font-bold text-[#202225]/58">{useCase}</span>)}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-2 border-t border-[#202225]/10 pt-5">
                    <Link href={`/produk/${product.slug}`} className="group/button inline-flex items-center justify-center gap-2 bg-[#D71920] px-3 py-3 text-[11px] font-extrabold text-white transition hover:bg-[#B81016]">
                      Detail <ArrowRight size={14} className="transition-transform group-hover/button:translate-x-1" />
                    </Link>
                    <button onClick={() => chat(product.name)} className="inline-flex items-center justify-center gap-2 border border-[#202225]/16 bg-[#F7F7F5] px-3 py-3 text-[11px] font-extrabold text-[#9f151a] transition hover:border-[#D71920] hover:bg-white">
                      <MessageCircle size={14} /> Tanya
                    </button>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
