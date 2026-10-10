import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { seoLandingPageMap, seoLandingPages } from '@/lib/seo-landing-data';
import { getSiteUrl } from '@/lib/site-url';

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ seoSlug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ seoSlug: string }> }): Promise<Metadata> {
  const { seoSlug } = await params;
  const page = seoLandingPageMap[seoSlug];
  if (!page) return { title: 'Halaman tidak ditemukan', robots: { index: false, follow: false } };
  const canonical = `/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical },
    openGraph: { type: 'website', title: page.title, description: page.description, url: canonical },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description },
  };
}

export default async function SeoLandingPageRoute({ params }: { params: Promise<{ seoSlug: string }> }) {
  const { seoSlug } = await params;
  const page = seoLandingPageMap[seoSlug];
  if (!page) notFound();

  const baseUrl = getSiteUrl();
  const pageUrl = `${baseUrl}/${page.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.title,
        description: page.description,
        inLanguage: 'id-ID',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: page.eyebrow, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#202225]">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <section className="border-b border-[#202225]/10 bg-white px-5 pb-12 pt-28 sm:px-7 lg:px-10 lg:pb-16">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#D71920]">{page.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-[clamp(3rem,7vw,6.7rem)] font-semibold leading-[.9] tracking-[-.065em]">{page.h1}</h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#202225]/58">{page.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/6282174635218?text=Halo%20Mas%20Yusuf%2C%20saya%20ingin%20konsultasi%20kendaraan%20Isuzu%20untuk%20kebutuhan%20usaha%20di%20Yogyakarta." className="inline-flex items-center gap-2 bg-[#D71920] px-5 py-3.5 text-sm font-extrabold text-white">
                <MessageCircle size={17} /> Konsultasi kebutuhan
              </a>
              <Link href="/produk" className="inline-flex items-center gap-2 border border-[#202225]/16 px-5 py-3.5 text-sm font-extrabold">Lihat semua produk <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="border-b border-[#202225]/10 bg-[#EEEFEA] px-5 py-10 sm:px-7 lg:px-10 lg:py-14">
          <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#D71920]">Panduan memilih</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Sesuaikan unit dengan operasi, bukan sekadar nama kelas.</h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#202225]/60">{page.intro}</p>
              <div className="mt-6 grid gap-2">
                {page.bullets.map((bullet) => (
                  <div key={bullet} className="border border-[#202225]/10 bg-white px-4 py-4 text-sm leading-6 text-[#202225]/68">{bullet}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-10 sm:px-7 lg:px-10 lg:py-14">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex items-end justify-between gap-6 border-b border-[#202225]/10 pb-4">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#D71920]">Pilihan terkait</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-.05em]">Lanjut ke model atau panduan yang relevan.</h2>
              </div>
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {page.productLinks.map((item) => (
                <Link key={item.href} href={item.href} className="group border border-[#202225]/10 bg-[#F7F7F5] p-5 transition hover:border-[#D71920]/40 hover:bg-white">
                  <div className="flex items-start justify-between gap-5">
                    <div><h3 className="text-xl font-semibold tracking-[-.03em]">{item.label}</h3><p className="mt-2 text-sm leading-6 text-[#202225]/54">{item.description}</p></div>
                    <ArrowRight size={18} className="mt-1 shrink-0 text-[#D71920] transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#202225]/10 bg-[#EEEFEA] px-5 py-8 sm:px-7 lg:px-10 lg:py-10">
          <div className="mx-auto grid max-w-[1200px] gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#D71920]">Area layanan</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.045em] sm:text-4xl">Yogyakarta dan sekitarnya.</h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#202225]/58">Konsultasi unit dan kebutuhan usaha melayani area Kota Yogyakarta, Sleman, Bantul, Kulon Progo, dan Gunungkidul. Ketersediaan unit, karoseri, harga, dan proses pengiriman tetap dikonfirmasi sesuai kebutuhan transaksi.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Kota Yogyakarta', 'Sleman', 'Bantul', 'Kulon Progo', 'Gunungkidul'].map((area) => (
                  <span key={area} className="border border-[#202225]/10 bg-white px-3 py-2 text-xs font-semibold text-[#202225]/60">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#202225]/10 bg-[#F7F7F5] px-5 py-10 sm:px-7 lg:px-10 lg:py-14">
          <div className="mx-auto max-w-[1000px]">
            <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#D71920]">FAQ</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-.05em]">Pertanyaan yang sering muncul.</h2>
            <div className="mt-6 divide-y divide-[#202225]/10 border-y border-[#202225]/10">
              {page.faq.map((item) => (
                <div key={item.question} className="py-5">
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#202225]/58">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
