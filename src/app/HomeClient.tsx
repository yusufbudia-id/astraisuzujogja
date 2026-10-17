'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import ConsultationHomeSection from '@/components/ConsultationHomeSection';
import Footer from '@/components/Footer';
import { productFamilies, products as modelProducts } from '@/lib/products-data';
import { articles } from '@/lib/articles-data';
import { openWhatsApp, WHATSAPP_DISPLAY } from '@/lib/whatsapp';
import { siteConfig } from '@/lib/site-config';
import { getProductPriceSummary } from '@/lib/pricing-data';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Gauge,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react';


// Homepage keeps the five broad families for hero/solution imagery, while
// the Our Lineup product stage exposes the model-level V14 catalog.
const products = productFamilies;
const lineupProducts = modelProducts;

const familySlugFor = (family: string) => {
  switch (family) {
    case 'ELF': return 'isuzu-elf';
    case 'GIGA': return 'isuzu-giga';
    case 'D-MAX': return 'isuzu-d-max';
    case 'MU-X': return 'isuzu-mu-x';
    default: return 'isuzu-traga';
  }
};

const representativeModelSlug = (familySlug: string) => {
  if (familySlug === 'isuzu-elf') return 'isuzu-elf-nlr';
  if (familySlug === 'isuzu-giga') return 'isuzu-giga-frr';
  return familySlug;
};

const needs = [
  {
    title: 'Distribusi & Logistik',
    kicker: 'Last-mile hingga antarkota',
    text: 'Untuk ritme kirim yang padat, volume muatan beragam, dan kebutuhan karoseri yang fleksibel.',
    productSlug: 'isuzu-traga',
    visualSlug: 'isuzu-elf-nlr',
    visualAlt: 'Isuzu ELF NLR untuk distribusi dan logistik',
    visualPosition: 'center 52%',
    sceneSrc: '/images/isuzu/solutions/contexts/logistics.png',
    sceneAlt: 'Ilustrasi gudang dan distribusi logistik',
    scenePosition: 'center center',
    models: ['isuzu-traga', 'isuzu-elf', 'isuzu-giga'],
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Konstruksi',
    kicker: 'Proyek & medan kerja',
    text: 'Kendaraan untuk kebutuhan material, proyek, dan operasional lapangan.',
    productSlug: 'isuzu-giga',
    visualSlug: 'isuzu-giga-fvz',
    visualAlt: 'Isuzu GIGA FVZ untuk konstruksi',
    visualPosition: 'center 58%',
    sceneSrc: '/images/isuzu/solutions/contexts/construction.png',
    sceneAlt: 'Ilustrasi proyek konstruksi dan alat berat',
    scenePosition: 'center center',
    models: ['isuzu-giga', 'isuzu-d-max'],
    span: '',
  },
  {
    title: 'Travel & Transportasi',
    kicker: 'Penumpang & shuttle',
    text: 'Pilihan untuk mobilitas penumpang, travel, shuttle, dan kendaraan operasional.',
    productSlug: 'isuzu-elf',
    visualSlug: 'isuzu-elf-microbus',
    visualAlt: 'Isuzu ELF Microbus untuk travel dan transportasi',
    visualPosition: 'center 56%',
    sceneSrc: '/images/isuzu/solutions/contexts/travel.png',
    sceneAlt: 'Ilustrasi terminal dan mobilitas penumpang',
    scenePosition: 'center center',
    models: ['isuzu-elf', 'isuzu-mu-x'],
    span: '',
  },
  {
    title: 'Retail & FMCG',
    kicker: 'Distribusi stok harian',
    text: 'Untuk toko, suplai harian, distribusi FMCG, dan operasional urban.',
    productSlug: 'isuzu-traga',
    visualSlug: 'isuzu-traga',
    visualAlt: 'Isuzu Traga untuk retail dan FMCG',
    visualPosition: 'center 60%',
    sceneSrc: '/images/isuzu/solutions/contexts/retail.png',
    sceneAlt: 'Ilustrasi toko retail dan distribusi stok',
    scenePosition: 'center center',
    models: ['isuzu-traga', 'isuzu-elf'],
    span: '',
  },
  {
    title: 'Pertanian & Perkebunan',
    kicker: 'Lapangan & hasil usaha',
    text: 'Mobilitas untuk hasil usaha, area kerja, dan rute dengan kebutuhan traksi lebih.',
    productSlug: 'isuzu-d-max',
    visualSlug: 'isuzu-d-max',
    visualAlt: 'Isuzu D-MAX untuk pertanian dan perkebunan',
    visualPosition: 'center 58%',
    sceneSrc: '/images/isuzu/solutions/contexts/agriculture.png',
    sceneAlt: 'Ilustrasi lahan pertanian dan perkebunan',
    scenePosition: 'center center',
    models: ['isuzu-traga', 'isuzu-d-max', 'isuzu-mu-x'],
    span: '',
  },
  {
    title: 'Fleet Perusahaan',
    kicker: 'Pengadaan & ekspansi armada',
    text: 'Mulai satu unit hingga kebutuhan operasional perusahaan dengan komposisi armada yang berbeda.',
    productSlug: 'isuzu-giga',
    visualSlug: 'isuzu-giga-fvr',
    visualAlt: 'Isuzu GIGA FVR untuk kebutuhan fleet perusahaan',
    visualPosition: 'center 56%',
    sceneSrc: '/images/isuzu/solutions/contexts/fleet.png',
    sceneAlt: 'Ilustrasi yard armada dan pengadaan fleet perusahaan',
    scenePosition: 'center center',
    models: products.map((product) => product.slug),
    span: 'lg:col-span-2',
  },
] as const;

const engineering = [
  { n: '01', title: 'Reliability', text: 'Kendaraan usaha harus siap digunakan ketika operasional membutuhkannya.', icon: ShieldCheck },
  { n: '02', title: 'Efficiency', text: 'Pilihan unit perlu mendukung produktivitas dan biaya operasi yang terukur.', icon: Gauge },
  { n: '03', title: 'Serviceability', text: 'Perawatan yang jelas membantu kendaraan kembali bekerja lebih cepat.', icon: Wrench },
  { n: '04', title: 'After Sales', text: 'Dukungan bengkel, suku cadang, dan layanan menjadi bagian dari keputusan pembelian.', icon: Check },
];

const chat = (message: string) => openWhatsApp(`Halo Mas Yusuf, ${message}`);

export default function HomeClient() {
  const [activeSlug, setActiveSlug] = useState(lineupProducts[0]?.slug ?? 'isuzu-traga');
  const [activeNeed, setActiveNeed] = useState<string | null>(null);

  const activeProduct = lineupProducts.find((product) => product.slug === activeSlug) ?? lineupProducts[0];
  const activePriceSummary = getProductPriceSummary(activeProduct.slug);
  const recommendedSlugs = useMemo(() => {
    if (!activeNeed) return new Set(lineupProducts.map((product) => product.slug));
    const need = needs.find((item) => item.title === activeNeed);
    const selectedFamilies = new Set(need?.models ?? products.map((product) => product.slug));
    return new Set(
      lineupProducts
        .filter((product) => selectedFamilies.has(product.slug) || selectedFamilies.has(familySlugFor(product.family ?? '')))
        .map((product) => product.slug),
    );
  }, [activeNeed]);

  const chooseNeed = (title: string, productSlug: string) => {
    setActiveNeed(title);
    setActiveSlug(representativeModelSlug(productSlug));
    window.setTimeout(() => {
      document.getElementById('models')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  return (
    <div className="site-shell min-h-screen text-[#202225]">
      <Header />

      <main>
        {/* Tahap 8: on small screens display the whole truck image separately from the text. */}
        <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#0b1726] text-white lg:min-h-[740px]">
          {/* Mobile: no image cropping; desktop: full-bleed photographic background. */}
          <div className="relative mt-[87px] aspect-[16/9] w-full overflow-hidden sm:mt-[87px] lg:absolute lg:inset-0 lg:mt-0 lg:aspect-auto">
            <Image
              src="/images/isuzu/hero/isuzu-city-lineup.png"
              alt="Tiga kendaraan Isuzu dengan tulisan ELF, GIGA, dan TRAGA di depan gedung kota saat senja"
              fill
              priority
              quality={85}
              sizes="100vw"
              className="object-contain object-center lg:object-cover lg:object-center"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(8,19,35,.9)_0%,rgba(8,19,35,.76)_26%,rgba(8,19,35,.2)_56%,transparent_82%)] lg:block" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-[#081323]/75 to-transparent lg:block" />

          <div className="relative mx-auto flex max-w-[1440px] items-center px-5 pb-10 pt-8 sm:px-8 sm:pb-12 lg:min-h-[740px] lg:px-12 lg:pb-32 lg:pt-36">
            <div className="w-full max-w-[570px]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-white/85 sm:text-sm lg:mb-5 lg:text-base">Astra Isuzu Jogja</p>
              <h1 id="hero-title" className="text-[clamp(2.35rem,9.5vw,4rem)] font-black uppercase leading-[1.02] tracking-[-.045em] drop-shadow-[0_3px_18px_rgba(0,0,0,.2)] sm:text-6xl lg:text-[clamp(3.3rem,5.2vw,5.7rem)] lg:leading-[.99]">
                Real Partner<br />Real Journey
              </h1>
              <div className="mt-5 h-[3px] w-16 bg-[#ed1c24] lg:mt-6 lg:w-20" />
              <p className="mt-5 max-w-[450px] text-sm leading-6 text-white/90 sm:text-base sm:leading-7 lg:mt-6 lg:text-lg lg:leading-8">
                Solusi kendaraan niaga yang tangguh, andal, dan siap mendukung setiap perjalanan bisnis Anda.
              </p>
              <a href="#models" className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-[#e50914] px-6 py-3 text-sm font-extrabold uppercase tracking-[.03em] text-white shadow-[0_14px_32px_rgba(0,0,0,.18)] transition hover:bg-[#bd0710] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:mt-8 lg:px-7 lg:py-4">
                Lihat Produk <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative border-t border-white/20 bg-[#081323] lg:absolute lg:inset-x-0 lg:bottom-0 lg:bg-[#081323]/60 lg:backdrop-blur-sm">
            <div className="mx-auto flex max-w-[1440px] overflow-x-auto px-5 sm:px-8 lg:px-12" aria-label="Pilih keluarga kendaraan Isuzu">
              {products.map((product) => (
                <button
                  key={product.slug}
                  type="button"
                  onClick={() => {
                    setActiveSlug(representativeModelSlug(product.slug));
                    setActiveNeed(null);
                    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="min-w-fit border-r border-white/15 px-5 py-4 text-left first:border-l sm:px-7"
                >
                  <span className="block text-[9px] font-bold uppercase tracking-[.22em] text-white/60">{product.category}</span>
                  <span className="mt-1 block text-xs font-extrabold tracking-[.06em] text-white">{product.shortName}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <ConsultationHomeSection />

        {/* Tahap 2: curated four-family lineup, connected to the existing model selector below. */}
        <section aria-labelledby="featured-lineup-title" className="relative bg-[#f3f4f5] px-5 py-16 text-[#161c25] sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[#cfd3d8] pb-9 lg:flex-row lg:items-end">
              <div>
                <p className="mb-4 flex items-center gap-3 text-[11px] font-black uppercase tracking-[.25em] text-[#D71920]"><span className="h-[3px] w-10 bg-[#D71920]" /> OUR LINEUP</p>
                <h2 id="featured-lineup-title" className="text-[clamp(2.7rem,5.4vw,5.6rem)] font-black uppercase leading-[.94] tracking-[-.055em]">Dibuat untuk<br /><span className="text-[#D71920]">bisnis bergerak.</span></h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[#58616c]">Jelajahi keluarga kendaraan Isuzu, mulai dari kebutuhan niaga harian hingga operasional armada besar. Pilih untuk melihat model dan variannya.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {(['isuzu-elf', 'isuzu-giga', 'isuzu-traga', 'isuzu-d-max'] as const).map((slug, index) => {
                const family = products.find((item) => item.slug === slug);
                const vehicle = lineupProducts.find((item) => item.slug === representativeModelSlug(slug)) ?? lineupProducts.find((item) => item.slug === slug) ?? lineupProducts[0];
                const labels = [
                  { headline: 'Fleksibel untuk distribusi', tag: 'LIGHT DUTY' },
                  { headline: 'Siap untuk muatan besar', tag: 'HEAVY DUTY' },
                  { headline: 'Andalan usaha harian', tag: 'PICKUP' },
                  { headline: 'Tangguh di berbagai medan', tag: 'PICKUP 4x4' },
                ];
                const label = labels[index];
                return (
                  <button key={slug} type="button" aria-label={`Lihat pilihan model ${family?.shortName ?? vehicle.shortName}`} onClick={() => {
                    setActiveSlug(vehicle.slug);
                    setActiveNeed(null);
                    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }} className="group flex min-w-0 flex-col overflow-hidden rounded-[3px] border border-[#dfe2e6] bg-white text-left shadow-[0_10px_28px_rgba(12,22,35,.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d71920]/50 hover:shadow-[0_22px_50px_rgba(12,22,35,.13)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D71920]">
                    <div className="relative flex h-[250px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_80%,#dfe3e7_0%,#f6f7f8_66%)] sm:h-[275px]">
                      <span className="absolute left-6 top-5 z-10 text-[11px] font-black tracking-[.22em] text-[#7f8b96]">0{index + 1}</span>
                      <span className="absolute right-5 top-5 z-10 border border-[#d7dce1] bg-white/75 px-2.5 py-1.5 text-[9px] font-black tracking-[.12em] text-[#4e5a66]">{label.tag}</span>
                      <Image src={vehicle.image} alt={vehicle.imageAlt} fill sizes="(min-width:1280px) 25vw, (min-width:640px) 50vw, 100vw" className="object-contain p-5 pt-10 drop-shadow-[0_21px_13px_rgba(23,32,44,.14)] transition-transform duration-500 group-hover:scale-110" />
                      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#D71920] transition-transform duration-300 group-hover:scale-x-100" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#D71920]">ISUZU {family?.shortName ?? vehicle.shortName}</p>
                      <h3 className="mt-2 text-[23px] font-black leading-tight tracking-[-.035em]">{label.headline}</h3>
                      <p className="mt-3 flex-1 text-[12px] leading-6 text-[#69737e]">{family?.description ?? vehicle.description}</p>
                      <span className="mt-6 flex items-center justify-between border-t border-[#e6e8eb] pt-4 text-[11px] font-extrabold uppercase tracking-[.1em] text-[#1d2835]">Lihat model &amp; varian <ArrowUpRight size={18} className="text-[#D71920] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col justify-between gap-5 border-l-[4px] border-[#D71920] bg-[#18232f] px-7 py-6 text-white sm:flex-row sm:items-center">
              <div><p className="text-base font-bold">Butuh rekomendasi kendaraan untuk usaha Anda?</p><p className="mt-1 text-xs leading-5 text-white/65">Konsultasikan kebutuhan muatan, rute, dan anggaran sebelum memilih unit.</p></div>
              <button type="button" onClick={() => chat('saya ingin rekomendasi kendaraan Isuzu yang sesuai kebutuhan bisnis saya.')} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#D71920] px-6 py-3 text-xs font-black uppercase tracking-[.07em] text-white transition hover:bg-[#b7141b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><MessageCircle size={17} /> Konsultasi WhatsApp <ArrowRight size={16} /></button>
            </div>
          </div>
        </section>

        <section id="models" className="section-glow scroll-mt-16 bg-[radial-gradient(circle_at_84%_18%,rgba(215,25,32,.055),transparent_22rem),linear-gradient(180deg,#fafaf7,#f5f5f1)] px-5 py-5 sm:px-7 sm:py-6 lg:px-10 lg:py-6">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-4 flex flex-col gap-3 border-b border-[#202225]/12 pb-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.3em] text-[#D71920]">Our Lineup</p>
                <h2 className="mt-3 max-w-3xl text-[clamp(2.55rem,5.5vw,5.8rem)] font-semibold leading-[.9] tracking-[-.06em] text-[#202225]">
                  Satu kebutuhan.<br /><span className="text-[#202225]/28">Platform yang tepat.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#202225]/58">
                {activeNeed ? `Rekomendasi awal untuk ${activeNeed.toLowerCase()}. Anda tetap bisa membandingkan keluarga Isuzu lainnya.` : 'Pilih model Isuzu untuk melihat karakter, varian, dan penggunaan utamanya.'}
              </p>
            </div>

            <div className="premium-panel overflow-hidden border border-[#202225]/10 bg-white shadow-[0_18px_48px_rgba(20,22,24,.045)]">
              <div className="border-b border-[#202225]/10 bg-[#EEEFEA]">
                <div className="flex overflow-x-auto lg:grid lg:grid-cols-7 lg:overflow-visible">
                  {lineupProducts.map((product, index) => {
                    const active = product.slug === activeProduct.slug;
                    const recommended = recommendedSlugs.has(product.slug);
                    const priceSummary = getProductPriceSummary(product.slug);
                    const thumbnail = product.image
                      .replace('/images/isuzu/models/', '/images/isuzu/models-mobile/')
                      .replace('.webp', '.png');

                    return (
                      <button
                        key={product.slug}
                        onClick={() => setActiveSlug(product.slug)}
                        className={`group relative min-h-[156px] min-w-[168px] overflow-hidden border-r border-[#202225]/10 px-4 pb-4 pt-3 text-left transition last:border-r-0 lg:min-h-[176px] lg:min-w-0 lg:px-5 ${active ? 'bg-white text-[#B7151B] shadow-[inset_0_3px_0_#D71920]' : 'text-[#202225] hover:bg-white/72'}`}
                      >
                        <div className="relative z-20 flex items-center justify-between gap-3">
                          <span className={`text-[9px] font-extrabold tracking-[.18em] ${active ? 'text-[#B7151B]/52' : 'text-[#202225]/34'}`}>{String(index + 1).padStart(2, '0')}</span>
                          {activeNeed && recommended && <span className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-[#D71920]' : 'bg-[#D71920]/45'}`} />}
                        </div>

                        <div className="relative z-10 mt-1.5 h-[66px] w-full lg:h-[78px]">
                          <div className={`pointer-events-none absolute inset-x-[18%] bottom-1 h-4 rounded-[50%] blur-xl transition ${active ? 'bg-[#D71920]/20' : 'bg-[#202225]/8 group-hover:bg-[#D71920]/12'}`} />
                          <div
                            role="img"
                            aria-label={`Thumbnail ${product.imageAlt}`}
                            className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition duration-300 ${active ? 'scale-[1.04] opacity-100' : 'opacity-[.84] group-hover:scale-[1.03] group-hover:opacity-100'}`}
                            style={{ backgroundImage: `url(${thumbnail})` }}
                          />
                        </div>

                        <div className="relative z-20 mt-1">
                          <span className="block text-[17px] font-semibold leading-tight tracking-[-.035em] lg:text-[19px]">{product.shortName}</span>
                          <span className={`mt-1 block text-[10px] leading-5 transition ${active ? 'text-[#B7151B]/58' : 'text-[#202225]/45'}`}>{product.variants.length} varian</span>
                          <span className={`mt-0.5 block text-[9px] font-bold ${active ? 'text-[#B7151B]/72' : 'text-[#202225]/50'}`}>{priceSummary ? priceSummary.label : 'Harga: hubungi Yusuf'}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="relative overflow-hidden bg-[linear-gradient(145deg,#ffffff_0%,#f2f3ef_62%,#e6e8e4_100%)]">
                <div className="grid lg:grid-cols-[.82fr_1.18fr] lg:items-stretch">
                  <div className="relative z-20 flex flex-col justify-between border-b border-[#202225]/10 p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#D71920]">{activeProduct.category}</p>
                      <h3 className="mt-3 text-4xl font-semibold tracking-[-.055em] text-[#202225] sm:text-5xl">{activeProduct.name}</h3>
                      <div className="mt-5 flex flex-wrap gap-7">
                        <div>
                          <span className="block text-2xl font-semibold text-[#202225]">{activeProduct.variants.length}</span>
                          <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#202225]/38">Varian</span>
                        </div>
                        <div>
                          <span className="block text-sm font-semibold text-[#202225]">{activeProduct.segment === 'Commercial Vehicle' ? 'CV' : 'LCV'}</span>
                          <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#202225]/38">Segment</span>
                        </div>
                        <div>
                          <span className="block text-lg font-semibold text-[#D71920]">{activePriceSummary ? activePriceSummary.label : 'Hubungi Yusuf'}</span>
                          <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#202225]/38">Harga</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7">
                      <p className="text-sm leading-7 text-[#202225]/58">{activeProduct.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {activeProduct.useCases.map((item) => (
                          <span key={item} className="border border-[#202225]/10 bg-white/88 px-3 py-2 text-[10px] font-bold uppercase tracking-[.08em] text-[#202225]/62">{item}</span>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Link href={`/produk/${activeProduct.slug}`} className="inline-flex items-center gap-2 bg-[#D71920] px-5 py-3 text-xs font-extrabold text-white transition hover:bg-[#B81016]">
                          Detail {activeProduct.shortName} <ArrowRight size={15} />
                        </Link>
                        <button onClick={() => chat(`saya ingin konsultasi ${activeProduct.name} dan memilih varian yang sesuai kebutuhan saya.`)} className="inline-flex items-center gap-2 border border-[#202225]/16 bg-white/90 px-5 py-3 text-xs font-extrabold text-[#202225] transition hover:bg-white">
                          <MessageCircle size={15} /> Tanya Yusuf
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="relative min-h-[330px] overflow-hidden sm:min-h-[420px] lg:min-h-[520px]">
                    <div className="pointer-events-none absolute -right-6 top-4 z-0 select-none text-[clamp(5.8rem,19vw,15rem)] font-black leading-none tracking-[-.1em] text-[#D71920]/[.30]">
                      {activeProduct.shortName}
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,rgba(215,25,32,0)_0%,rgba(215,25,32,.10)_100%)]" />
                    <div
                      key={`lineup-bg-${activeProduct.slug}`}
                      role="img"
                      aria-label={activeProduct.imageAlt}
                      className="absolute inset-4 z-10 bg-contain bg-center bg-no-repeat sm:inset-7 lg:inset-10"
                      style={{
                        backgroundImage: `url(${activeProduct.image.replace('/images/isuzu/models/', '/images/isuzu/models-mobile/').replace('.webp', '.png')})`,
                      }}
                    />
                    <div className="absolute bottom-4 left-5 z-20 rounded-full border border-[#202225]/10 bg-white/90 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[.18em] text-[#202225]/48 backdrop-blur sm:left-7 lg:left-10">
                      {activeProduct.shortName} • {activeProduct.variants.length} varian
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="scroll-mt-20 bg-[#f6f7f8] px-5 py-20 text-[#18212c] sm:px-7 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,.65fr)] lg:items-end">
              <div>
                <p className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[.24em] text-[#D71920]"><span className="h-[3px] w-10 bg-[#D71920]" /> SOLUSI BISNIS</p>
                <h2 className="mt-5 max-w-4xl text-[clamp(2.5rem,5.2vw,5.5rem)] font-black uppercase leading-[.98] tracking-[-.055em]">Armada tepat untuk <span className="text-[#D71920]">setiap industri.</span></h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-[#65717b]">Setiap usaha punya kebutuhan berbeda. Pilih industri Anda, lalu lihat pilihan kendaraan Isuzu yang sesuai untuk dibandingkan.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {needs.map((need, index) => {
                const product = products.find((item) => item.slug === need.productSlug) ?? products[0];
                return (
                  <button
                    key={need.title}
                    type="button"
                    onClick={() => chooseNeed(need.title, need.productSlug)}
                    aria-label={`Lihat rekomendasi Isuzu untuk ${need.title}`}
                    className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[3px] bg-[#1c2732] text-left text-white shadow-[0_12px_26px_rgba(18,32,46,.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(18,32,46,.20)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#D71920] sm:min-h-[350px]"
                  >
                    <Image
                      src={need.sceneSrc}
                      alt=""
                      fill
                      sizes="(min-width:1280px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                      style={{ objectPosition: need.scenePosition }}
                      aria-hidden="true"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,19,29,.24)_0%,rgba(10,19,29,.10)_30%,rgba(10,19,29,.87)_100%)]" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#D71920] transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="absolute left-6 top-6 flex items-center gap-2 border border-white/25 bg-black/25 px-3 py-2 text-[10px] font-bold uppercase tracking-[.13em] backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F02A32]" /> {need.kicker}
                    </div>
                    <div className="absolute right-6 top-6 text-[11px] font-black tracking-[.2em] text-white/70">0{index + 1}</div>
                    <div className="relative z-10 p-6 sm:p-7">
                      <h3 className="max-w-[95%] text-[clamp(1.65rem,2.5vw,2.3rem)] font-black uppercase leading-[1.04] tracking-[-.035em]">{need.title}</h3>
                      <p className="mt-3 max-w-sm text-[13px] leading-6 text-white/85">{need.text}</p>
                      <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/30 pt-4">
                        <span className="text-[10px] font-bold uppercase tracking-[.13em] text-white/85">Rekomendasi: {product.shortName}</span>
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-white/45 bg-white/10 transition-colors group-hover:border-[#D71920] group-hover:bg-[#D71920]"><ArrowUpRight size={18} /></span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-l-4 border-[#D71920] bg-white px-6 py-5 shadow-[0_9px_24px_rgba(18,32,46,.04)] sm:px-8">
              <p className="max-w-xl text-sm leading-6 text-[#56616c]">Belum yakin memilih armada? Konsultasikan rute, muatan, dan kebutuhan operasional bersama tim penjualan.</p>
              <button type="button" onClick={() => chat('saya ingin konsultasi pilihan kendaraan Isuzu untuk kebutuhan bisnis saya.')} className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#D71920] px-6 py-3 text-xs font-extrabold uppercase tracking-[.08em] text-white transition hover:bg-[#B81016] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D71920]"><MessageCircle size={17} /> Konsultasi Armada <ArrowRight size={16} /></button>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 overflow-hidden bg-[#101821] px-5 py-20 text-white sm:px-7 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-9 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:items-end">
              <div>
                <p className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[.23em] text-[#FF5358]"><span className="h-[3px] w-10 bg-[#EF2B31]" /> KEUNGGULAN & DUKUNGAN</p>
                <h2 className="mt-5 max-w-3xl text-[clamp(2.7rem,5.4vw,5.8rem)] font-black uppercase leading-[.98] tracking-[-.052em]">Partner bisnis.<br /><span className="text-white/40">Dalam setiap perjalanan.</span></h2>
              </div>
              <div className="max-w-lg lg:justify-self-end">
                <p className="text-sm leading-7 text-white/65">Memilih kendaraan usaha bukan hanya soal unit. Pertimbangkan kebutuhan operasional, kemudahan perawatan, ketersediaan suku cadang, dan dukungan setelah pembelian.</p>
                <button type="button" onClick={() => chat('saya ingin bertanya tentang dukungan perawatan dan layanan purnajual kendaraan Isuzu.')} className="mt-6 inline-flex min-h-12 items-center gap-3 bg-[#D71920] px-6 py-3 text-xs font-extrabold uppercase tracking-[.08em] text-white transition hover:bg-[#B81016] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Konsultasi Layanan <ArrowUpRight size={17} /></button>
              </div>
            </div>

            <div className="mt-11 grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
              <div className="relative flex min-h-[370px] flex-col justify-end overflow-hidden bg-[#242d35] sm:min-h-[460px]">
                <Image src={products.find((p) => p.slug === 'isuzu-giga')?.image ?? products[0].image} alt="Kendaraan Isuzu GIGA untuk mendukung kebutuhan usaha" fill sizes="(min-width:1024px) 58vw, 100vw" className="object-contain px-6 pb-20 pt-2 sm:px-10 sm:pb-20" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(6,11,17,.93)_0%,rgba(6,11,17,.35)_38%,transparent_72%)]" />
                <div className="relative z-10 p-6 sm:p-9">
                  <span className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#FF5358]">ISUZU FOR BUSINESS</span>
                  <h3 className="mt-2 max-w-lg text-2xl font-black uppercase leading-tight tracking-[-.035em] sm:text-3xl">Kendaraan yang tepat untuk pekerjaan yang tepat.</h3>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {engineering.map(({ n, title, text, icon: Icon }) => (
                  <div key={n} className="group flex min-h-[210px] flex-col justify-between border border-white/10 bg-[#1b2631] p-6 transition-colors hover:border-[#EF2B31]/60 hover:bg-[#243240] sm:p-7">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center border border-[#EF2B31]/40 bg-[#EF2B31]/10 text-[#FF5358]"><Icon size={23} strokeWidth={1.6} /></div>
                      <span className="text-[10px] font-black tracking-[.2em] text-white/30">{n}</span>
                    </div>
                    <div className="mt-7">
                      <h3 className="text-lg font-bold tracking-[-.025em]">{title}</h3>
                      <p className="mt-2 text-xs leading-6 text-white/55">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-white/15 pt-9">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#FF5358]">SETELAH PEMBELIAN</p>
                  <h3 className="mt-2 text-2xl font-black uppercase tracking-[-.04em] sm:text-3xl">Kenali dukungan purnajual.</h3>
                </div>
                <p className="max-w-md text-xs leading-6 text-white/50">Ketersediaan layanan, lokasi, dan ketentuan servis perlu dikonfirmasi sesuai unit serta wilayah Anda.</p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  { title: 'Servis & Perawatan', desc: 'Diskusikan kebutuhan perawatan berkala dan informasi layanan bengkel yang sesuai.', Icon: Wrench, message: 'saya ingin informasi servis dan perawatan kendaraan Isuzu.' },
                  { title: 'Suku Cadang', desc: 'Tanyakan jalur informasi suku cadang sesuai model dan kebutuhan kendaraan.', Icon: ShieldCheck, message: 'saya ingin informasi suku cadang untuk kendaraan Isuzu.' },
                  { title: 'Konsultasi Unit & Armada', desc: 'Dapatkan arahan pemilihan unit untuk rencana usaha maupun pengadaan armada.', Icon: MessageCircle, message: 'saya ingin konsultasi kebutuhan unit dan armada Isuzu.' },
                ].map(({ title, desc, Icon, message }) => (
                  <button key={title} type="button" onClick={() => chat(message)} className="group flex flex-col justify-between gap-8 border border-white/15 bg-white/[.055] p-6 text-left transition hover:border-[#EF2B31]/70 hover:bg-white/[.09] sm:p-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    <div>
                      <Icon size={25} strokeWidth={1.6} className="text-[#FF5358]" />
                      <h4 className="mt-5 text-lg font-bold tracking-[-.02em]">{title}</h4>
                      <p className="mt-2 max-w-sm text-xs leading-6 text-white/55">{desc}</p>
                    </div>
                    <span className="inline-flex items-center justify-between border-t border-white/15 pt-4 text-[11px] font-extrabold uppercase tracking-[.1em] text-white/85">Tanya via WhatsApp <ArrowUpRight size={17} className="text-[#FF5358] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[linear-gradient(180deg,#fafaf7,#f4f4f0)] px-5 py-5 sm:px-7 sm:py-6 lg:px-10 lg:py-6">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-stretch border-y border-[#202225]/10 lg:grid-cols-[.82fr_1.18fr]">
              <div className="flex flex-col justify-between border-b border-[#202225]/10 py-7 lg:border-b-0 lg:border-r lg:py-9 lg:pr-10">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[.32em] text-[#D71920]">Model Spotlight</p>
                  <h2 className="mt-5 text-[clamp(3.2rem,6vw,6.8rem)] font-semibold leading-[.86] tracking-[-.07em] text-[#202225]">GIGA<br />FVZ.</h2>
                  <p className="mt-7 max-w-md text-sm leading-7 text-[#202225]/56">Heavy-duty 6x4 untuk pekerjaan dengan tuntutan muatan dan medan yang lebih berat.</p>
                </div>
                <Link href="/produk/isuzu-giga-fvz" className="mt-9 inline-flex w-fit items-center gap-2 border-b border-[#D71920] pb-2 text-xs font-extrabold uppercase tracking-[.12em] text-[#202225] transition hover:text-[#D71920]">Lihat detail FVZ <ArrowRight size={15} /></Link>
              </div>

              <div className="relative min-h-[440px] overflow-hidden bg-white lg:min-h-[520px]">
                <div className="red-orbit -right-16 top-10 h-64 w-64" />
                <div className="red-orbit -left-20 bottom-10 h-48 w-48 opacity-40" />
                <div className="absolute right-4 top-5 text-[clamp(8rem,18vw,17rem)] font-black leading-none tracking-[-.1em] text-[#D71920]/[.085]">6×4</div>
                <Image src={lineupProducts.find((p) => p.slug === 'isuzu-giga-fvz')?.image ?? products[0].image} alt="Isuzu GIGA FVZ" fill sizes="(min-width:1024px) 65vw, 100vw" className="vehicle-float object-contain px-5 pb-20 pt-6 sm:px-9 lg:px-10" />
                <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-[#202225]/10 bg-white/94 backdrop-blur-sm">
                  {[
                    ['285 PS', 'Tenaga'],
                    ['26 TON', 'GVW'],
                    ['6×4', 'Drivetrain'],
                  ].map(([value, label]) => (
                    <div key={label} className="metric-cell border-r border-[#202225]/10 px-4 py-4 last:border-r-0 sm:px-6 sm:py-5">
                      <strong className="block text-xl font-semibold tracking-[-.04em] text-[#202225] sm:text-3xl">{value}</strong>
                      <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[.2em] text-[#202225]/36">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="fleet" className="scroll-mt-16 bg-[radial-gradient(circle_at_90%_20%,rgba(215,25,32,.04),transparent_24rem),#fff] px-5 py-5 sm:px-7 sm:py-6 lg:px-10 lg:py-6">
          <div className="mx-auto max-w-[1440px]">
            <div className="premium-panel grid overflow-hidden border border-[#202225]/10 bg-[#F1F2EF] lg:grid-cols-[1.12fr_.88fr]">
              <div className="relative min-h-[360px] overflow-hidden border-b border-[#202225]/10 lg:min-h-[500px] lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,#ffffff_0%,#e9ebe7_100%)]" />
                <div className="pointer-events-none absolute left-[-16%] top-[-24%] h-[116%] w-[70%] rounded-br-[11rem] bg-[#D71920]/[.28]" />
                <div className="pointer-events-none absolute inset-x-[-6%] bottom-[-10%] h-[36%] -skew-x-[18deg] bg-[linear-gradient(90deg,rgba(215,25,32,.32)_0%,rgba(215,25,32,.18)_45%,rgba(215,25,32,0)_78%)]" />
                <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#D71920]/[.16] blur-3xl" />
                <div className="absolute -right-10 top-8 text-[clamp(7rem,16vw,14rem)] font-black leading-none tracking-[-.1em] text-[#D71920]/[.18]">FLEET</div>
                <Image src={products.find((p) => p.slug === 'isuzu-elf')?.image ?? products[0].image} alt="Isuzu ELF untuk fleet" fill sizes="(min-width:1024px) 58vw, 100vw" className="vehicle-float object-contain p-7 sm:p-10 lg:p-12" />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                <p className="text-[10px] font-extrabold uppercase tracking-[.3em] text-[#D71920]">Fleet & Corporate</p>
                <h2 className="mt-4 text-[clamp(2.6rem,4.8vw,5rem)] font-semibold leading-[.92] tracking-[-.06em] text-[#202225]">Satu unit.<br />Atau satu armada.</h2>
                <p className="mt-6 max-w-xl text-sm leading-7 text-[#202225]/58">Dari kendaraan pertama untuk usaha sampai pengadaan armada perusahaan, diskusi dimulai dari pola operasi, jenis muatan, rute, dan kebutuhan aplikasi.</p>

                <div className="mt-6 border-t border-[#202225]/10">
                  {[
                    ['01', 'Individual Business', 'Unit operasional untuk kebutuhan usaha harian.'],
                    ['02', 'Growing Fleet', 'Ketika bisnis mulai menambah kendaraan dan fungsi.'],
                    ['03', 'Corporate Procurement', 'Kebutuhan fleet, unit kerja, dan proses pengadaan perusahaan.'],
                  ].map(([n, title, text]) => (
                    <div key={title} className="grid grid-cols-[38px_1fr] gap-4 border-b border-[#202225]/10 py-4">
                      <span className="text-xs font-bold text-[#D71920]">{n}</span>
                      <div><h3 className="font-semibold tracking-[-.02em] text-[#202225]">{title}</h3><p className="mt-1 text-xs leading-6 text-[#202225]/48">{text}</p></div>
                    </div>
                  ))}
                </div>

                <button onClick={() => chat('saya ingin membahas kebutuhan fleet/perusahaan dan pilihan unit Isuzu yang sesuai.')} className="mt-6 inline-flex w-fit items-center gap-2 bg-[#D71920] px-5 py-3.5 text-xs font-extrabold text-white transition hover:bg-[#B81016]">Diskusikan kebutuhan fleet <ArrowRight size={15} /></button>
              </div>
            </div>
          </div>
        </section>

        <section id="promo" className="relative scroll-mt-20 overflow-hidden bg-[#111b27] px-5 py-20 text-white sm:px-7 lg:px-10 lg:py-24">
          <div className="pointer-events-none absolute -right-28 -top-40 h-[520px] w-[520px] rounded-full border-[100px] border-[#D71920]/10" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[3px] w-1/3 bg-[#D71920]" />
          <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[.24em] text-[#FF6A70]"><span className="h-[3px] w-10 bg-[#D71920]" /> PROGRAM PEMBELIAN ISUZU</p>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.8rem,5.1vw,5.6rem)] font-black uppercase leading-[.98] tracking-[-.05em]">Rencanakan armada.<br /><span className="text-white/45">Sesuaikan anggaran.</span></h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">Cari unit yang cocok, diskusikan harga OTR Yogyakarta, dan ajukan simulasi pembiayaan sesuai kebutuhan bisnis. Penawaran mengikuti ketersediaan dan ketentuan yang berlaku.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/simulasi-kredit" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#D71920] px-6 py-3 text-xs font-extrabold uppercase tracking-[.07em] text-white transition hover:bg-[#B81016] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Simulasi Pembiayaan <ArrowUpRight size={17} /></Link>
                <button type="button" onClick={() => chat('saya ingin mengetahui harga OTR dan program pembelian Isuzu terbaru di Yogyakarta.')} className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/35 px-6 py-3 text-xs font-extrabold uppercase tracking-[.07em] text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><MessageCircle size={17} /> Tanya Promo</button>
              </div>
            </div>
            <div className="border border-white/10 bg-white/[.055] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/15 pb-5"><p className="text-[11px] font-black uppercase tracking-[.18em] text-white/80">Alur Pembelian</p><span className="text-[10px] font-bold text-[#FF6A70]">01 — 03</span></div>
              {([
                ['01', 'Pilih kendaraan', 'Bandingkan unit dan varian sesuai kebutuhan operasional.'],
                ['02', 'Tentukan rencana', 'Pilih preferensi DP dan tenor untuk permintaan simulasi.'],
                ['03', 'Terima penawaran', 'Konsultasikan harga, promo, dan rincian leasing melalui WhatsApp.'],
              ] as const).map(([number, title, description]) => (
                <div key={number} className="grid grid-cols-[44px_1fr] gap-3 border-b border-white/10 py-5 last:border-0 last:pb-0">
                  <span className="text-lg font-black text-[#FF6A70]">{number}</span>
                  <div><h3 className="text-base font-extrabold">{title}</h3><p className="mt-1.5 text-xs leading-6 text-white/55">{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="yusuf" className="scroll-mt-16 bg-[#F1F2EF] px-5 py-5 text-[#202225] sm:px-7 sm:py-6 lg:px-10 lg:py-6">
          <div className="premium-panel mx-auto grid max-w-[1440px] overflow-hidden border border-[#202225]/10 lg:grid-cols-[.86fr_1.14fr]">
            <div className="relative min-h-[360px] overflow-hidden border-b border-[#202225]/10 bg-[#D71920] sm:min-h-[430px] lg:min-h-[520px] lg:border-b-0 lg:border-r">
              <Image
                src="/images/profile/yusuf-profile.webp"
                alt="Yusuf, konsultan penjualan Isuzu Yogyakarta"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[50%_18%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_42%,rgba(20,22,24,.18)_67%,rgba(20,22,24,.82)_100%)]" />
              <div className="absolute left-5 top-5 bg-[#D71920] px-3 py-2 text-[9px] font-extrabold uppercase tracking-[.18em] text-white sm:left-6 sm:top-6">Yusuf • Isuzu Yogyakarta</div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7 lg:p-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-white/58">Your Isuzu Consultant</p>
                <div className="mt-3 text-[clamp(3rem,6vw,5.6rem)] font-semibold leading-none tracking-[-.065em]">Yusuf.</div>
                <div className="mt-4 flex items-center gap-3 text-[11px] font-bold tracking-[.12em] text-white/70"><span className="h-px w-8 bg-[#EF2B31]" /> YOGYAKARTA</div>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-white p-6 text-[#202225] sm:p-7 lg:p-8 xl:p-9">
              <p className="text-[10px] font-extrabold uppercase tracking-[.3em] text-[#D71920]">One contact. End-to-end consultation.</p>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[.92] tracking-[-.06em]">Dari pemilihan unit<br /><span className="text-[#202225]/28">sampai kebutuhan fleet.</span></h2>
              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#202225]/56">Konsultasikan spesifikasi unit, kebutuhan aplikasi, simulasi pembiayaan, program terbaru, dan rencana pengadaan kendaraan secara langsung.</p>

              <div className="mt-7 grid gap-px bg-[#1E2A30]/10 sm:grid-cols-3">
                {['Konsultasi Unit', 'Pembiayaan', 'Fleet & Corporate'].map((item) => <div key={item} className="bg-[#F1F2EF] px-4 py-5 text-[11px] font-bold text-[#202225]/65">{item}</div>)}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button onClick={() => chat('saya ingin konsultasi langsung mengenai kendaraan Isuzu.')} className="inline-flex items-center gap-2 bg-[#D71920] px-5 py-3.5 text-xs font-extrabold text-white transition hover:bg-[#B81016]"><MessageCircle size={15} /> Chat Yusuf <ArrowRight size={15} /></button>
                <span className="text-sm font-semibold text-[#202225]/52">{WHATSAPP_DISPLAY}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="panduan-truk-jogja" className="border-y border-[#202225]/10 bg-[#EEEFEA] px-5 py-6 text-[#202225] sm:px-7 lg:px-10 lg:py-8">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.3em] text-[#D71920]">Panduan Truk Jogja</p>
                <h2 className="mt-4 text-[clamp(2.6rem,4.6vw,4.8rem)] font-semibold leading-[.92] tracking-[-.06em]">Cari berdasarkan<br /><span className="text-[#202225]/28">kebutuhan usaha.</span></h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-[#202225]/56 lg:justify-self-end">Panduan lokal untuk membandingkan harga truk Jogja, engkel, double engkel, box, bak, distribusi, medium truck, konstruksi, sampai pickup Isuzu Traga.</p>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['/harga-truk-jogja', 'Harga Truk Jogja', 'Referensi harga dan model yang punya data OTR.'],
                ['/truk-engkel-jogja', 'Truk Engkel Jogja', 'ELF NLR 4 ban untuk distribusi ringan.'],
                ['/truk-double-engkel-jogja', 'Double Engkel Jogja', 'ELF NMR 6 ban untuk box, bak, dan cargo.'],
                ['/truk-box-jogja', 'Truk Box Jogja', 'Traga, NLR, dan NMR untuk distribusi.'],
                ['/truk-bak-jogja', 'Truk Bak Jogja', 'Traga, NLR, dan NMR untuk bak dan usaha.'],
                ['/truk-distribusi-jogja', 'Truk Distribusi Jogja', 'Pilihan unit untuk retail, logistik, dan fleet.'],
                ['/truk-medium-jogja', 'Truk Medium Jogja', 'GIGA untuk logistik, fleet, dan angkut berat.'],
                ['/truk-konstruksi-jogja', 'Truk Konstruksi Jogja', 'GIGA untuk kebutuhan kerja berat dan proyek.'],
                ['/pickup-isuzu-jogja', 'Pickup Isuzu Jogja', 'Traga untuk bak, box, dan usaha harian.'],
                ['/isuzu-traga-jogja', 'Isuzu Traga Jogja', 'Harga, pickup, dan box untuk usaha.'],
                ['/truk-jogja', 'Truk Jogja', 'Hub pilihan truk Isuzu untuk usaha dan fleet.'],
              ].map(([href, title, text]) => (
                <Link key={href} href={href} className="soft-card group border border-[#202225]/10 bg-white p-4 transition hover:border-[#D71920]/45">
                  <div className="flex items-start justify-between gap-3">
                    <div><h3 className="text-sm font-semibold tracking-[-.02em]">{title}</h3><p className="mt-2 text-xs leading-5 text-[#202225]/48">{text}</p></div>
                    <ArrowRight size={15} className="mt-1 shrink-0 text-[#D71920] transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="bg-white px-5 py-5 sm:px-7 sm:py-6 lg:px-10 lg:py-6">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col gap-6 border-b border-[#202225]/12 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.3em] text-[#D71920]">Insights</p>
                <h2 className="mt-4 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[.92] tracking-[-.06em] text-[#202225]">Untuk keputusan<br /><span className="text-[#202225]/28">yang lebih matang.</span></h2>
              </div>
              <Link href="/artikel" className="inline-flex items-center gap-2 text-xs font-extrabold text-[#202225]">Lihat semua artikel <ArrowRight size={15} /></Link>
            </div>

            <div className="mt-4 grid gap-2 lg:grid-cols-[1.3fr_.7fr] lg:grid-rows-2">
              {articles.slice(0, 3).map((article, index) => (
                <Link key={article.slug} href={`/artikel/${article.slug}`} className={`soft-card sheen-card group relative min-h-[220px] overflow-hidden bg-[#F1F2EF] ${index === 0 ? 'lg:row-span-2 lg:min-h-[430px]' : 'lg:min-h-0'}`}>
                  <Image src={article.thumbnail} alt={article.title} fill sizes={index === 0 ? '(min-width:1024px) 65vw, 100vw' : '(min-width:1024px) 35vw, 100vw'} className="object-contain p-6 opacity-95 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,.98)_0%,rgba(255,255,255,.70)_44%,rgba(255,255,255,.02)_100%)]" />
                  <div className="relative flex h-full min-h-[220px] flex-col justify-between p-6 sm:p-8 lg:min-h-full">
                    <div className="flex items-start justify-between"><span className="text-[9px] font-extrabold uppercase tracking-[.2em] text-[#EF2B31]">{article.category}</span><ArrowUpRight size={18} className="text-[#202225]/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D71920]" /></div>
                    <div><h3 className={`${index === 0 ? 'max-w-2xl text-3xl sm:text-4xl lg:text-5xl' : 'max-w-xl text-2xl'} font-semibold leading-tight tracking-[-.04em] text-[#202225]`}>{article.title}</h3><p className="mt-3 max-w-xl text-xs leading-6 text-[#202225]/52">{article.excerpt}</p></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="relative min-h-[380px] overflow-hidden bg-[#E7E8E5] lg:min-h-[420px]">
          <iframe title="Lokasi Astra Isuzu Yogyakarta" className="absolute inset-0 h-full w-full border-0 grayscale-[.15]" src={siteConfig.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(32,32,30,.24)_0%,transparent_48%)]" />
          <div className="relative mx-auto flex min-h-[380px] max-w-[1440px] items-end px-5 py-5 sm:px-7 lg:min-h-[420px] lg:px-10 lg:py-6">
            <div className="glass-map-card pointer-events-auto max-w-xl p-6 text-[#202225] sm:p-8 lg:p-9">
              <p className="text-[10px] font-extrabold uppercase tracking-[.3em] text-[#EF2B31]">Visit Us</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.055em] sm:text-5xl">Astra Isuzu<br />Yogyakarta</h2>
              <div className="mt-7 border-t border-[#202225]/10 pt-6">
                <div className="flex gap-4"><MapPin size={18} className="mt-1 shrink-0 text-[#EF2B31]" /><p className="text-sm leading-7 text-[#202225]/52">{siteConfig.showroomFull}</p></div>
                <div className="mt-5 flex gap-4"><Phone size={17} className="mt-1 shrink-0 text-[#EF2B31]" /><div><p className="text-sm font-semibold">Konsultasi penjualan bersama Yusuf</p><button onClick={() => chat('saya ingin berkunjung ke showroom. Mohon info waktu yang tepat.')} className="mt-1 text-xs font-bold text-[#202225]/48 transition hover:text-[#D71920]">Atur kunjungan via WhatsApp →</button></div></div>
              </div>
              <a href={siteConfig.mapSearchUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 border border-[#202225]/16 px-4 py-3 text-xs font-extrabold text-[#202225] transition hover:border-[#D71920] hover:text-[#D71920]">Buka Google Maps <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
