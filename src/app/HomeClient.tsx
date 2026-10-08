'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroVideo from '@/components/HeroVideo';
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
        .filter((product) => selectedFamilies.has(product.slug) || selectedFamilies.has(familySlugFor(product.family)))
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
    <div className="min-h-screen bg-[#F7F7F5] text-[#202225]">
      <Header />

      <main>
        <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-[#111214] text-white">
          <Image src="/images/isuzu/hero/hero-poster.svg" alt="" fill sizes="100vw" unoptimized className="object-cover object-center" aria-hidden="true" />
          <HeroVideo />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,9,10,.68)_0%,rgba(8,9,10,.34)_30%,rgba(8,9,10,.04)_62%,rgba(8,9,10,.02)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(8,9,10,.66)_0%,rgba(8,9,10,.01)_48%,rgba(8,9,10,.12)_100%)]" />

          <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] items-end px-5 pb-20 pt-24 sm:px-7 lg:px-10 lg:pb-24">
            <div className="max-w-[680px]">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.3em] text-white/58">
                <span className="h-px w-9 bg-[#D71920]" /> Astra Isuzu Yogyakarta
              </div>
              <h1 className="text-[clamp(3.2rem,7vw,7.4rem)] font-semibold leading-[.86] tracking-[-.065em]">
                Built for<br />
                <span className="text-white/45">Business.</span>
              </h1>
              <div className="mt-7 grid max-w-2xl gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  Isuzu untuk bisnis yang terus bergerak—dari distribusi harian sampai kebutuhan fleet dan operasional perusahaan.
                </p>
                <div className="flex flex-wrap gap-2.5 sm:justify-end">
                  <a href="#models" className="inline-flex items-center gap-2 bg-white px-5 py-3 text-xs font-extrabold text-[#202225] transition hover:bg-[#F3F0EA]">
                    Explore Lineup <ArrowRight size={15} />
                  </a>
                  <button onClick={() => chat('saya ingin konsultasi kendaraan Isuzu untuk kebutuhan usaha saya.')} className="inline-flex items-center gap-2 border border-white/28 bg-white/[.06] px-5 py-3 text-xs font-extrabold text-white backdrop-blur transition hover:bg-white/[.12]">
                    <MessageCircle size={15} /> Konsultasi Yusuf
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 border-t border-white/12 bg-[#111214]/54 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1440px] overflow-x-auto px-5 sm:px-7 lg:px-10">
              {products.map((product) => (
                <button
                  key={product.slug}
                  onClick={() => {
                    setActiveSlug(representativeModelSlug(product.slug));
                    setActiveNeed(null);
                    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="min-w-fit border-r border-white/10 px-5 py-4 text-left first:border-l sm:px-7"
                >
                  <span className="block text-[9px] font-bold uppercase tracking-[.22em] text-white/35">{product.category}</span>
                  <span className="mt-1 block text-xs font-extrabold tracking-[.06em] text-white/82">{product.shortName}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="models" className="scroll-mt-16 bg-[#F7F7F5] px-5 py-5 sm:px-7 sm:py-6 lg:px-10 lg:py-6">
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

            <div className="overflow-hidden border border-[#202225]/10 bg-white shadow-[0_18px_48px_rgba(20,22,24,.045)]">
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

        <section id="solutions" className="scroll-mt-16 bg-[#F1F2EF] px-5 py-5 text-[#202225] sm:px-7 sm:py-6 lg:px-10 lg:py-6">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-6 lg:grid-cols-[1fr_.78fr] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.3em] text-[#EF2B31]">Business Solutions</p>
                <h2 className="mt-4 max-w-4xl text-[clamp(2.8rem,6vw,6.4rem)] font-semibold leading-[.9] tracking-[-.06em]">Apa yang bisnis<br /><span className="text-[#202225]/34">Anda butuhkan?</span></h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#202225]/56 lg:justify-self-end">Mulai dari aktivitas kerja, bukan nama model. Pilih kebutuhan bisnis Anda untuk menemukan keluarga kendaraan Isuzu yang paling relevan untuk dibandingkan.</p>
            </div>

            <div className="mt-4 grid auto-rows-[220px] gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[210px]">
              {needs.map((need, index) => {
                const product = products.find((item) => item.slug === need.productSlug) ?? products[0];
                const visualProduct = lineupProducts.find((item) => item.slug === need.visualSlug)
                  ?? products.find((item) => item.slug === need.productSlug)
                  ?? products[0];
                const isFeatureCard = need.span.includes('row-span-2');
                const isWideCard = !isFeatureCard && need.span.includes('col-span-2');
                const copyWidthClass = isFeatureCard
                  ? 'max-w-[52%] sm:max-w-[50%]'
                  : isWideCard
                    ? 'max-w-[56%] sm:max-w-[58%]'
                    : 'max-w-[60%] sm:max-w-[58%]';
                const visualShellClass = isFeatureCard
                  ? 'h-[180px] w-[48%] min-w-[220px] sm:h-[220px]'
                  : isWideCard
                    ? 'h-[145px] w-[34%] min-w-[165px]'
                    : 'h-[115px] w-[44%] min-w-[120px] sm:h-[126px]';
                const visualInsetClass = isFeatureCard
                  ? 'right-4 bottom-4 sm:right-6 sm:bottom-6'
                  : 'right-3 bottom-3 sm:right-4 sm:bottom-4';

                return (
                  <button
                    key={need.title}
                    onClick={() => chooseNeed(need.title, need.productSlug)}
                    className={`group relative overflow-hidden border border-[#202225]/10 bg-[#F3F4F1] text-left text-[#202225] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(24,24,24,.08)] ${need.span}`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f8f8f5_0%,#f2f3ef_100%)]" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[44%] overflow-hidden">
                      <Image
                        src={need.sceneSrc}
                        alt={need.sceneAlt}
                        fill
                        sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover opacity-[.98] transition duration-700 group-hover:scale-[1.04]"
                        style={{ objectPosition: need.scenePosition }}
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,22,24,.18)_0%,rgba(20,22,24,.06)_34%,rgba(243,244,241,.18)_100%)]" />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 top-[44%] h-px bg-[#202225]/8" />
                    <div className="pointer-events-none absolute right-[-3%] top-[28%] h-24 w-24 rounded-full bg-[#D71920]/[.14] blur-3xl" />
                    <div className="pointer-events-none absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[8px] font-extrabold uppercase tracking-[.16em] text-[#202225]/60 backdrop-blur-sm sm:left-5 sm:top-5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D71920]" />
                      {need.kicker}
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[linear-gradient(180deg,rgba(243,244,241,.06)_0%,rgba(243,244,241,.84)_18%,rgba(243,244,241,.98)_42%,rgba(243,244,241,1)_100%)]" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,#D71920_0%,#EF2B31_45%,rgba(239,43,49,.14)_100%)] opacity-90" />

                    <div className={`pointer-events-none absolute z-10 ${visualInsetClass} ${visualShellClass}`}>
                      <div className="absolute inset-x-[12%] bottom-1 h-5 rounded-[50%] bg-[#202225]/18 blur-2xl sm:h-6" />
                      <div className="absolute inset-x-0 bottom-0 top-[14%] rounded-[1.8rem] border border-white/55 bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,.98)_0%,rgba(255,255,255,.86)_56%,rgba(255,255,255,.18)_100%)] shadow-[0_18px_32px_rgba(20,22,24,.08)] backdrop-blur-[2px]" />
                      <div className="absolute -right-4 top-3 h-20 w-20 rounded-full bg-[#D71920]/[.12] blur-3xl" />
                      <Image
                        src={visualProduct.image}
                        alt={need.visualAlt}
                        fill
                        sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                        className="object-contain drop-shadow-[0_22px_28px_rgba(20,22,24,.2)] transition duration-700 group-hover:translate-y-[-3px] group-hover:scale-[1.045]"
                        style={{ objectPosition: need.visualPosition }}
                      />
                    </div>

                    <div className="relative z-20 flex h-full flex-col justify-between p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-[9px] font-extrabold uppercase tracking-[.22em] text-[#202225]/34">0{index + 1}</span>
                        <ArrowUpRight size={18} className="text-[#202225]/32 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D71920]" />
                      </div>
                      <div className={`mt-auto ${copyWidthClass}`}>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#202225]/10 bg-white/92 px-3 py-1 text-[8px] font-extrabold uppercase tracking-[.16em] text-[#202225]/60 backdrop-blur-sm shadow-[0_6px_16px_rgba(20,22,24,.05)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#D71920]" />
                          {visualProduct.shortName}
                        </div>
                        <h3 className={`font-semibold leading-[.95] tracking-[-.04em] ${isFeatureCard ? 'text-[clamp(2.1rem,4vw,3.4rem)]' : 'text-xl sm:text-[1.7rem]'}`}>{need.title}</h3>
                        <p className="mt-3 max-w-md text-xs leading-6 text-[#202225]/56 sm:text-[13px]">{need.text}</p>
                        <p className="mt-4 text-[10px] font-bold uppercase tracking-[.16em] text-[#202225]/38">Rekomendasi: {product.shortName}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-16 overflow-hidden bg-[#20201E] px-5 py-5 text-white sm:px-7 sm:py-6 lg:px-10 lg:py-6">
          <div className="mx-auto grid max-w-[1440px] gap-7 lg:grid-cols-[1.04fr_.96fr] lg:gap-10">
            <div className="relative min-h-[440px] overflow-hidden border border-white/8 bg-[#292825] sm:min-h-[520px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_42%,rgba(255,255,255,.09),transparent_33%),linear-gradient(145deg,#292825_0%,#151513_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-[65%] bg-[linear-gradient(0deg,rgba(215,25,32,.12),transparent)]" />
              <div className="relative h-full min-h-[440px] sm:min-h-[520px]">
                <Image src={products.find((p) => p.slug === 'isuzu-giga')?.image ?? products[0].image} alt="Isuzu GIGA" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-contain p-7 sm:p-10" />
                <div className="absolute bottom-7 left-7 right-7 border-t border-white/12 pt-5 sm:bottom-9 sm:left-9 sm:right-9">
                  <span className="text-[9px] font-extrabold uppercase tracking-[.22em] text-white/32">Engineering in motion</span>
                  <p className="mt-2 max-w-md text-sm leading-7 text-white/48">Kendaraan kerja dinilai bukan saat diam di showroom, tetapi saat ia terus bergerak bersama operasional.</p>
                </div>
              </div>
            </div>

            <div className="lg:py-4">
              <p className="text-[10px] font-extrabold uppercase tracking-[.3em] text-[#EF2B31]">Why Isuzu</p>
              <h2 className="mt-4 max-w-2xl text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[.92] tracking-[-.06em]">Built to keep<br /><span className="text-white/26">business moving.</span></h2>
              <div className="mt-7 border-t border-white/10">
                {engineering.map(({ n, title, text, icon: Icon }) => (
                  <div key={n} className="group grid grid-cols-[44px_1fr_auto] gap-4 border-b border-white/10 py-4 sm:grid-cols-[56px_1fr_auto] sm:py-5">
                    <span className="pt-1 text-sm font-semibold text-[#EF2B31]">{n}</span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-.03em] sm:text-2xl">{title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-white/42">{text}</p>
                    </div>
                    <Icon size={22} strokeWidth={1.35} className="mt-1 text-white/18 transition group-hover:text-[#D71920]/45" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#F7F7F5] px-5 py-5 sm:px-7 sm:py-6 lg:px-10 lg:py-6">
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

              <div className="relative min-h-[440px] bg-white lg:min-h-[520px]">
                <div className="absolute right-4 top-5 text-[clamp(8rem,18vw,17rem)] font-black leading-none tracking-[-.1em] text-[#D71920]/[.085]">6×4</div>
                <Image src={lineupProducts.find((p) => p.slug === 'isuzu-giga-fvz')?.image ?? products[0].image} alt="Isuzu GIGA FVZ" fill sizes="(min-width:1024px) 65vw, 100vw" className="object-contain px-5 pb-20 pt-6 sm:px-9 lg:px-10" />
                <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-[#202225]/10 bg-white/94 backdrop-blur-sm">
                  {[
                    ['285 PS', 'Tenaga'],
                    ['26 TON', 'GVW'],
                    ['6×4', 'Drivetrain'],
                  ].map(([value, label]) => (
                    <div key={label} className="border-r border-[#202225]/10 px-4 py-4 last:border-r-0 sm:px-6 sm:py-5">
                      <strong className="block text-xl font-semibold tracking-[-.04em] text-[#202225] sm:text-3xl">{value}</strong>
                      <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[.2em] text-[#202225]/36">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="fleet" className="scroll-mt-16 bg-white px-5 py-5 sm:px-7 sm:py-6 lg:px-10 lg:py-6">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid overflow-hidden border border-[#202225]/10 bg-[#F1F2EF] lg:grid-cols-[1.12fr_.88fr]">
              <div className="relative min-h-[360px] overflow-hidden border-b border-[#202225]/10 lg:min-h-[500px] lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,#ffffff_0%,#e9ebe7_100%)]" />
                <div className="pointer-events-none absolute left-[-16%] top-[-24%] h-[116%] w-[70%] rounded-br-[11rem] bg-[#D71920]/[.28]" />
                <div className="pointer-events-none absolute inset-x-[-6%] bottom-[-10%] h-[36%] -skew-x-[18deg] bg-[linear-gradient(90deg,rgba(215,25,32,.32)_0%,rgba(215,25,32,.18)_45%,rgba(215,25,32,0)_78%)]" />
                <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#D71920]/[.16] blur-3xl" />
                <div className="absolute -right-10 top-8 text-[clamp(7rem,16vw,14rem)] font-black leading-none tracking-[-.1em] text-[#D71920]/[.18]">FLEET</div>
                <Image src={products.find((p) => p.slug === 'isuzu-elf')?.image ?? products[0].image} alt="Isuzu ELF untuk fleet" fill sizes="(min-width:1024px) 58vw, 100vw" className="object-contain p-7 sm:p-10 lg:p-12" />
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

        <section id="promo" className="scroll-mt-16 overflow-hidden bg-[#D71920] text-white">
          <div className="mx-auto grid min-h-[220px] max-w-[1440px] lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="px-5 py-5 sm:px-7 sm:py-6 lg:px-10 lg:py-6">
              <p className="text-[10px] font-extrabold uppercase tracking-[.3em] text-white/58">Program Pembelian Isuzu</p>
              <h2 className="mt-4 max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[.9] tracking-[-.06em]">Rencanakan kendaraan.<br /><span className="text-white/48">Bukan sekadar cicilan.</span></h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/67">Tanyakan harga OTR, DP, tenor, program penjualan, dan skenario pembiayaan berdasarkan unit yang benar-benar Anda butuhkan.</p>
            </div>
            <div className="flex gap-2 px-5 pb-5 sm:px-7 lg:flex-col lg:px-10 lg:pb-0">
              <button onClick={() => chat('saya ingin cek promo Isuzu terbaru dan harga OTR Yogyakarta.')} className="inline-flex min-w-[170px] items-center justify-between gap-4 bg-white px-5 py-4 text-xs font-extrabold text-[#B81016] transition hover:bg-[#F3F0EA]">Cek Program <ArrowRight size={15} /></button>
              <Link href="/simulasi-kredit" className="inline-flex min-w-[170px] items-center justify-between gap-4 border border-white/42 px-5 py-4 text-xs font-extrabold text-white transition hover:bg-white/10">Simulasi <ArrowRight size={15} /></Link>
            </div>
          </div>
        </section>

        <section id="yusuf" className="scroll-mt-16 bg-[#F1F2EF] px-5 py-5 text-[#202225] sm:px-7 sm:py-6 lg:px-10 lg:py-6">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden border border-[#202225]/10 lg:grid-cols-[.86fr_1.14fr]">
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
                <Link key={article.slug} href={`/artikel/${article.slug}`} className={`group relative min-h-[220px] overflow-hidden bg-[#F1F2EF] ${index === 0 ? 'lg:row-span-2 lg:min-h-[430px]' : 'lg:min-h-0'}`}>
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
            <div className="pointer-events-auto max-w-xl bg-white p-6 text-[#202225] shadow-[0_30px_80px_rgba(0,0,0,.22)] sm:p-8 lg:p-9">
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
