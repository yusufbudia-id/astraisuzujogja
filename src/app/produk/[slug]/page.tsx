'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProductBySlug, getProductShowroomGallery, officialCatalogUrl, products } from '@/lib/products-data';
import { ArrowLeft, ArrowRight, ExternalLink, MessageCircle, Search } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { getProductBrochureContent } from '@/lib/brochure-data';
import { getProductTechnicalSpecs } from '@/lib/technical-specs';
import { formatRupiah, getProductPriceEntries, getProductPriceSummary, priceSource } from '@/lib/pricing-data';

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);
  const [query, setQuery] = useState('');
  const [activeShowroomIndex, setActiveShowroomIndex] = useState(0);

  const visibleVariants = useMemo(() => {
    if (!product) return [];
    const normalized = query.trim().toLowerCase();
    if (!normalized) return product.variants;
    return product.variants.filter((variant) => variant.name.toLowerCase().includes(normalized));
  }, [product, query]);

  const relatedProducts = useMemo(
    () => (product ? products.filter((item) => item.slug !== product.slug).slice(0, 2) : []),
    [product]
  );

  const showroomGallery = useMemo(() => (product ? getProductShowroomGallery(product) : []), [product]);
  const activeShowroomItem = showroomGallery[activeShowroomIndex] ?? null;
  const brochureContent = product ? getProductBrochureContent(product.slug) : undefined;
  const technicalSpecs = product ? getProductTechnicalSpecs(product.slug) : undefined;
  const priceEntries = product ? getProductPriceEntries(product.slug) : [];
  const priceSummary = product ? getProductPriceSummary(product.slug) : null;

  useEffect(() => {
    setActiveShowroomIndex(0);
  }, [product?.slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F7F7F5] text-[#202225]">
        <Header />
        <main className="mx-auto max-w-4xl px-5 pb-24 pt-36 text-center">
          <h1 className="text-4xl font-semibold">Produk tidak ditemukan.</h1>
          <Link href="/produk" className="mt-7 inline-flex items-center gap-2 bg-[#D71920] px-5 py-3 text-sm font-extrabold text-white">
            <ArrowLeft size={16} /> Kembali ke produk
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const askFamily = () =>
    openWhatsApp(`Halo Mas Yusuf, saya ingin konsultasi mengenai ${product.name}. Mohon bantu pilih varian yang sesuai dengan kebutuhan saya.`);

  const askUseCase = (useCase: string) =>
    openWhatsApp(`Halo Mas Yusuf, saya mempertimbangkan ${product.name} untuk kebutuhan ${useCase.toLowerCase()}. Mohon rekomendasikan varian yang paling sesuai dan informasi harga OTR Yogyakarta.`);

  const askVariant = (variantName: string) =>
    openWhatsApp(`Halo Mas Yusuf, saya tertarik dengan ${variantName}. Mohon informasi harga OTR Yogyakarta, ketersediaan unit, promo, serta kecocokannya untuk kebutuhan saya.`);

  const askShowroom = (imageTitle: string) =>
    openWhatsApp(`Halo Mas Yusuf, saya tertarik dengan ${product.name} (${imageTitle}). Mohon kirimkan foto tambahan, brosur, informasi harga OTR Yogyakarta, dan ketersediaan unit.`);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#202225]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-white px-5 pb-14 pt-28 text-[#202225] sm:px-7 lg:px-10 lg:pb-20">
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#202225]/10" />
          <div className="relative mx-auto max-w-[1440px]">
            <Link href="/produk" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.18em] text-[#202225]/50 transition hover:text-[#D71920]">
              <ArrowLeft size={14} /> Semua produk
            </Link>

            <div className="mt-7 grid gap-7 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.26em] text-[#EF2B31]">{product.category}</p>
                <h1 className="mt-4 text-5xl font-semibold leading-[.92] tracking-[-.05em] sm:text-6xl lg:text-7xl">{product.name}</h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#202225]/58">{product.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {product.useCases.map((useCase) => (
                    <span key={useCase} className="border border-[#202225]/12 px-3 py-2 text-[11px] font-bold text-[#202225]/62">{useCase}</span>
                  ))}
                </div>
                <div className="mt-7 border-y border-[#202225]/10 py-4">
                  <p className="text-[9px] font-extrabold uppercase tracking-[.2em] text-[#202225]/38">Harga</p>
                  <div className="mt-1 flex flex-wrap items-end gap-x-3 gap-y-1">
                    <p className="text-2xl font-semibold tracking-[-.035em] text-[#D71920]">{priceSummary ? priceSummary.label : 'Hubungi Yusuf'}</p>
                    {priceSummary?.scope === 'LOCO_MALANG' && <span className="pb-1 text-[10px] font-bold uppercase tracking-[.14em] text-[#202225]/45">Loco Malang</span>}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button onClick={askFamily} className="inline-flex items-center gap-2 bg-[#D71920] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#B81016]">
                    <MessageCircle size={17} /> Konsultasi {product.shortName}
                  </button>
                  <a href="#variants" className="inline-flex items-center gap-2 border border-[#202225]/18 px-6 py-3.5 text-sm font-extrabold text-[#202225] transition hover:border-[#D71920] hover:text-[#D71920]">
                    Lihat {product.variants.length} varian <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="relative min-h-[300px] overflow-hidden border border-[#202225]/10 bg-[#F0F1EE] sm:min-h-[430px]">
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#d71920]/12 to-transparent" />
                <Image src={product.image} alt={product.imageAlt} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-contain p-7 sm:p-10" />
                <div className="absolute bottom-5 right-5 bg-[#D71920] px-4 py-3 text-xs font-extrabold text-white shadow-sm">{product.variants.length} unit / varian</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#202225]/10 bg-[#EEEFEA] px-5 py-8 sm:px-7 lg:px-10">
          <div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-3">
            <InfoBlock label="Kategori" value={product.category} />
            <InfoBlock label="Segmentasi" value={product.segment} />
            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[.2em] text-[#D71920]">Katalog</p>
              <a href={officialCatalogUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold transition hover:text-[#D71920]">
                Astra Isuzu <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        <section id="prices" className="border-b border-[#202225]/10 bg-[#F7F7F5] px-5 py-10 sm:px-7 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#D71920]">Harga OTR</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">{priceEntries.length ? 'Pricelist yang tersedia untuk model ini.' : 'Konfirmasi harga terbaru.'}</h2>
              </div>
              <div className="max-w-2xl lg:justify-self-end">
                <p className="text-sm leading-7 text-[#202225]/56">Sumber: {priceSource.title}. {priceEntries.length ? 'Harga di bawah mengikuti tabel sumber yang diberikan.' : 'Model ini tidak tercantum pada tabel harga yang diberikan, jadi harga tidak diisi secara asumsi.'}</p>
              </div>
            </div>

            {priceEntries.length ? (
              <div className="mt-7 overflow-hidden border border-[#202225]/10 bg-white">
                <div className="hidden grid-cols-[1fr_220px_170px] border-b border-[#202225]/10 bg-[#EEEFEA] px-5 py-3 text-[9px] font-extrabold uppercase tracking-[.18em] text-[#202225]/46 sm:grid">
                  <span>Tipe / konfigurasi</span><span>Harga</span><span>Keterangan</span>
                </div>
                {priceEntries.map((entry) => (
                  <div key={entry.label} className="grid gap-3 border-b border-[#202225]/8 px-5 py-4 last:border-b-0 sm:grid-cols-[1fr_220px_170px] sm:items-center">
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[.16em] text-[#D71920] sm:hidden">Tipe / konfigurasi</p>
                      <p className="mt-1 font-semibold tracking-[-.015em] sm:mt-0">{entry.label}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[.16em] text-[#D71920] sm:hidden">Harga</p>
                      <p className="mt-1 text-lg font-semibold tracking-[-.02em] sm:mt-0">{formatRupiah(entry.otr)}</p>
                    </div>
                    <div className="text-xs leading-5 text-[#202225]/48">{(entry.scope ?? 'OTR') === 'LOCO_MALANG' ? 'Loco Malang' : 'Pricelist OTR'}{entry.note ? ` · ${entry.note}` : ''}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-7 flex flex-col gap-4 border border-[#202225]/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold">Harga belum tersedia di tabel sumber.</p>
                  <p className="mt-2 text-sm leading-6 text-[#202225]/54">Hubungi Yusuf untuk harga OTR, promo, dan ketersediaan unit terbaru.</p>
                </div>
                <button onClick={askFamily} className="inline-flex items-center justify-center gap-2 bg-[#D71920] px-5 py-3 text-xs font-extrabold text-white transition hover:bg-[#B81016]">
                  <MessageCircle size={15} /> Tanya harga
                </button>
              </div>
            )}

            <p className="mt-4 max-w-4xl text-[11px] leading-5 text-[#202225]/38">{priceSource.note} Dua entri bus yang pada sumber tertulis "Loco Malang" ditampilkan sebagai referensi Loco Malang, bukan OTR Yogyakarta.</p>
          </div>
        </section>

        <section className="bg-white px-5 py-12 sm:px-7 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-6 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#D71920]">Galeri produk</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Lihat lebih dekat setiap pilihan dan konfigurasi unit.</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-[#202225]/56 lg:justify-self-end">
                Jelajahi beberapa tampilan dan konfigurasi yang tersedia untuk membantu Anda memahami karakter unit sebelum menentukan varian yang sesuai.
              </p>
            </div>

            <div className="mt-7 grid gap-4 xl:grid-cols-[1.18fr_.82fr]">
              <div className="overflow-hidden border border-[#202225]/10 bg-white shadow-[0_20px_55px_rgba(11,28,44,.08)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[linear-gradient(180deg,#f8f9f7_0%,#e9ebe7_100%)]">
                  {activeShowroomItem && (
                    <Image
                      src={activeShowroomItem.src}
                      alt={activeShowroomItem.title}
                      fill
                      sizes="(min-width: 1280px) 55vw, 100vw"
                      className="object-contain p-6 sm:p-10"
                    />
                  )}
                  <div className="absolute left-5 top-5 bg-[#D71920] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-white">
                    Galeri produk
                  </div>
                </div>
                {activeShowroomItem && (
                  <div className="grid gap-5 border-t border-[#202225]/8 px-6 py-6 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#D71920]">{product.shortName}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-.03em]">{activeShowroomItem.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#202225]/58">{activeShowroomItem.caption}</p>
                    </div>
                    <button
                      onClick={() => askShowroom(activeShowroomItem.title)}
                      className="inline-flex items-center justify-center gap-2 bg-[#D71920] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#B81016]"
                    >
                      Minta brosur & foto <MessageCircle size={16} />
                    </button>
                  </div>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
                {showroomGallery.map((item, index) => {
                  const active = index === activeShowroomIndex;
                  return (
                    <button
                      key={`${item.src}-${index}`}
                      type="button"
                      onClick={() => setActiveShowroomIndex(index)}
                      className={`grid overflow-hidden border text-left transition sm:grid-cols-[180px_1fr] ${
                        active
                          ? 'border-[#D71920] bg-[#FFF5F1] shadow-[0_14px_34px_rgba(215,25,32,.10)]'
                          : 'border-[#202225]/10 bg-[#F1F2EF] hover:border-[#202225]/24 hover:bg-white'
                      }`}
                    >
                      <div className="relative min-h-[150px] bg-[linear-gradient(180deg,#f8f9f7_0%,#e9ebe7_100%)]">
                        <Image src={item.src} alt={item.title} fill sizes="180px" className="object-contain p-4" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[9px] font-extrabold uppercase tracking-[.18em] text-[#D71920]">Galeri {String(index + 1).padStart(2, '0')}</p>
                            <h3 className="mt-2 text-lg font-semibold tracking-[-.02em]">{item.title}</h3>
                          </div>
                          <ArrowRight size={16} className={`mt-1 shrink-0 ${active ? 'text-[#D71920]' : 'text-[#202225]/30'}`} />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[#202225]/52">{item.caption}</p>
                      </div>
                    </button>
                  );
                })}

                <div className="border border-[#202225]/10 bg-[#F1F2EF] p-6 xl:p-7">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#D71920]">Butuh informasi lebih lengkap?</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-.03em]">Minta foto, brosur, dan detail unit langsung dari Yusuf.</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-[#202225]/58">
                    <li>• Foto tambahan dari sudut lain sesuai unit yang tersedia.</li>
                    <li>• Detail kabin, interior, chassis, atau konfigurasi karoseri.</li>
                    <li>• Informasi harga OTR Yogyakarta, promo, stok, dan pembiayaan.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {brochureContent && (brochureContent.features?.length || brochureContent.brochures?.length) && (
          <section className="border-y border-[#202225]/8 bg-[#F1F2EF] px-5 py-12 sm:px-7 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-[1440px]">
              <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#D71920]">{brochureContent.eyebrow ?? 'Fitur & detail unit'}</p>
                  <h2 className="mt-3 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">{brochureContent.title ?? 'Kenali fitur dan karakter unit lebih dekat.'}</h2>
                </div>
                <div className="lg:justify-self-end">
                  {brochureContent.intro && (
                    <p className="max-w-2xl text-sm leading-7 text-[#202225]/58">{brochureContent.intro}</p>
                  )}
                  {brochureContent.brochures?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {brochureContent.brochures.map((brochure) => (
                        <a
                          key={brochure.url}
                          href={brochure.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 border border-[#202225]/14 bg-white px-4 py-3 text-xs font-extrabold transition hover:border-[#D71920] hover:text-[#D71920]"
                        >
                          {brochure.label} <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>

              {brochureContent.features?.length ? (
                <div className="mt-7 grid gap-4 lg:grid-cols-3">
                  {brochureContent.features.map((feature) => (
                    <article key={feature.title} className="overflow-hidden border border-[#202225]/10 bg-white">
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#ECEEEA]">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 30vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold tracking-[-.025em]">{feature.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[#202225]/58">{feature.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ) : null}

              {brochureContent.applications?.length ? (
                <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-[#202225]/10 pt-6">
                  <span className="mr-2 text-[9px] font-extrabold uppercase tracking-[.2em] text-[#D71920]">Aplikasi</span>
                  {brochureContent.applications.map((application) => (
                    <span key={application} className="border border-[#202225]/10 bg-white/70 px-3 py-2 text-[11px] font-bold text-[#202225]/68">{application}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        )}

        {technicalSpecs && (
          <section id="specifications" className="scroll-mt-24 bg-[#20201E] px-5 py-12 text-white sm:px-7 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-[1440px]">
              <div className="grid gap-6 border-b border-white/10 pb-7 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#EF2B31]">Spesifikasi teknis</p>
                  <h2 className="mt-3 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Detail penting untuk membandingkan kemampuan unit.</h2>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-white/48 lg:justify-self-end">{technicalSpecs.note}</p>
              </div>

              <div className={`mt-7 grid gap-4 ${technicalSpecs.groups.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
                {technicalSpecs.groups.map((group, groupIndex) => (
                  <article key={group.title} className="border border-white/10 bg-[#292927] p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-semibold tracking-[-.025em]">{group.title}</h3>
                      <span className="text-[10px] font-extrabold tracking-[.18em] text-[#EF2B31]">0{groupIndex + 1}</span>
                    </div>
                    <div className="mt-6 divide-y divide-white/8 border-t border-white/8">
                      {group.items.map((item) => (
                        <div key={`${group.title}-${item.label}`} className="grid grid-cols-[.9fr_1.1fr] gap-4 py-3.5">
                          <span className="text-[11px] font-bold uppercase tracking-[.08em] text-white/34">{item.label}</span>
                          <span className="text-right text-sm font-semibold leading-6 text-white/82">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <p className="max-w-3xl text-[11px] leading-5 text-white/32">Spesifikasi dapat berbeda menurut varian, tahun produksi, konfigurasi karoseri, dan pembaruan produk. Konfirmasi detail akhir sebelum pemesanan.</p>
                <button onClick={askFamily} className="inline-flex items-center gap-2 bg-[#D71920] px-5 py-3 text-xs font-extrabold text-white transition hover:bg-[#B81016]">
                  <MessageCircle size={15} /> Konfirmasi spesifikasi
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="bg-[#F7F7F5] px-5 py-12 sm:px-7 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#D71920]">Cocok untuk</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Mulai dari pekerjaan, bukan kode chassis.</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-[#202225]/56 lg:justify-self-end">
                Ceritakan kebutuhan operasional Anda. Yusuf dapat membantu mempersempit pilihan varian sebelum masuk ke harga, karoseri, pembiayaan, dan ketersediaan unit.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {product.useCases.map((useCase, index) => (
                <button
                  key={useCase}
                  onClick={() => askUseCase(useCase)}
                  className="group border border-[#202225]/12 bg-[#F1F2EF] p-6 text-left transition hover:-translate-y-1 hover:border-[#202225]/28 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#D71920]">0{index + 1}</span>
                    <ArrowRight size={16} className="text-[#202225]/30 transition group-hover:translate-x-1 group-hover:text-[#D71920]" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-.025em]">{useCase}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#202225]/50">Bahas kebutuhan ini dan minta rekomendasi varian {product.shortName} yang paling relevan.</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="variants" className="scroll-mt-20 bg-[#20201E] px-5 py-12 text-white sm:px-7 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#EF2B31]">Daftar varian</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Pilih unit yang paling dekat dengan kebutuhan Anda.</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-self-end">
                <label className="relative block w-full min-w-0 sm:w-[320px]">
                  <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={`Cari varian ${product.shortName}...`}
                    className="w-full border border-white/12 bg-white/[.06] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#D71920]"
                  />
                </label>
                <button onClick={askFamily} className="inline-flex shrink-0 items-center justify-center gap-2 border border-white/12 bg-white/[.06] px-5 py-3.5 text-xs font-extrabold transition hover:border-[#D71920] hover:text-[#EF2B31]">
                  <MessageCircle size={15} /> Minta rekomendasi
                </button>
              </div>
            </div>

            <div className="mt-7 overflow-hidden border border-white/10 bg-[#2A2926]">
              <div className="hidden grid-cols-[1.5fr_.72fr_.9fr_.72fr_.72fr_auto] gap-4 border-b border-[#202225]/10 bg-[#34312D] px-5 py-4 text-[9px] font-extrabold uppercase tracking-[.16em] text-white/58 lg:grid">
                <span>Unit / Varian</span><span>Mesin</span><span>Tenaga</span><span>GVW/Tonase</span><span>Cabin-to-End / Kursi</span><span>Aksi</span>
              </div>
              {visibleVariants.map((variant) => (
                <div key={variant.name} className="grid gap-5 border-b border-white/8 px-5 py-6 last:border-b-0 sm:grid-cols-2 lg:grid-cols-[1.5fr_.72fr_.9fr_.72fr_.72fr_auto] lg:items-center lg:gap-4">
                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[.16em] text-[#EF2B31] lg:hidden">Unit / Varian</p>
                    <h3 className="mt-1 font-semibold tracking-[-.015em] lg:mt-0">{variant.name}</h3>
                  </div>
                  <SpecMobile label="Mesin" value={variant.engine} />
                  <SpecMobile label="Tenaga" value={variant.power} />
                  <SpecMobile label="GVW / Tonase" value={variant.grossWeight ?? '—'} />
                  <SpecMobile label={variant.seating ? 'Kursi' : 'Cabin-to-End'} value={variant.seating ?? variant.cabinToEnd ?? '—'} />
                  <button
                    onClick={() => askVariant(variant.name)}
                    className="inline-flex w-full items-center justify-center gap-2 bg-[#D71920] px-4 py-3 text-xs font-extrabold text-white transition hover:bg-[#B81016] sm:w-fit"
                  >
                    Tanya <MessageCircle size={14} />
                  </button>
                </div>
              ))}
            </div>

            {visibleVariants.length === 0 && (
              <div className="mt-5 border border-white/10 bg-[#2A2926] p-7 text-sm text-white/48">Tidak ada varian yang cocok dengan pencarian tersebut.</div>
            )}

            <p className="mt-6 max-w-4xl text-[11px] leading-5 text-white/32">
              Data unit, kapasitas mesin, tenaga, tonase/GVW, dan Cabin-to-End pada halaman ini disusun dari katalog produk Astra Isuzu yang diakses pada September 2026. Spesifikasi, nama varian, harga, dan ketersediaan dapat berubah; konfirmasi final sebelum transaksi.
            </p>
          </div>
        </section>

        <section className="bg-[#F7F7F5] px-5 py-12 sm:px-7 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#EF2B31]">Lineup lain</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-.045em]">Bandingkan keluarga Isuzu lainnya.</h2>
              </div>
              <Link href="/produk" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#EF2B31]">Semua produk <ArrowRight size={16} /></Link>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {relatedProducts.map((item) => (
                <Link key={item.slug} href={`/produk/${item.slug}`} className="group grid min-h-[250px] overflow-hidden border border-[#202225]/12 bg-[#F1F2EF] sm:grid-cols-[.95fr_1.05fr]">
                  <div className="relative min-h-[220px] overflow-hidden bg-[#EEEFEA]">
                    <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 32vw, 100vw" className="object-contain p-6 transition duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[.18em] text-[#EF2B31]">{item.category}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-.035em]">{item.name}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#202225]/50">{item.variants.length} varian untuk kebutuhan {item.useCases.slice(0, 2).join(' dan ').toLowerCase()}.</p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold">Lihat produk <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] font-extrabold uppercase tracking-[.2em] text-[#EF2B31]">{label}</p>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}

function SpecMobile({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] font-extrabold uppercase tracking-[.16em] text-white/35 lg:hidden">{label}</p>
      <p className="mt-1 text-sm font-medium text-white/72 lg:mt-0">{value}</p>
    </div>
  );
}
