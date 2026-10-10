import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getArticleBySlug, articles } from '@/lib/articles-data';
import Link from 'next/link';
import Image from 'next/image';
import { getSiteUrl } from '@/lib/site-url';


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: 'Artikel Isuzu Jogja', robots: { index: false, follow: false } };
  }

  const canonical = `/artikel/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author }],
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: canonical,
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
      images: [{ url: article.thumbnail, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.thumbnail],
    },
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
    return null;
  }

  const baseUrl = getSiteUrl();
  const articleUrl = `${baseUrl}/artikel/${article.slug}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${articleUrl}#article`,
        headline: article.title,
        description: article.excerpt,
        image: [`${baseUrl}${article.thumbnail}`],
        datePublished: article.date,
        dateModified: article.date,
        author: { '@type': 'Person', name: 'Yusuf', url: `${baseUrl}/kontak` },
        publisher: { '@type': 'Organization', name: 'Isuzu Jogja', url: baseUrl },
        mainEntityOfPage: articleUrl,
        inLanguage: 'id-ID',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${baseUrl}/artikel` },
          { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <div className="min-h-screen bg-[#F7F7F5] text-[#202225]">
      <Header />
      <main>
        <article>
          <section className="relative overflow-hidden bg-[#24211E] px-5 pb-16 pt-32 text-white sm:px-7 lg:px-10 lg:pb-20">
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
            <div className="relative mx-auto max-w-4xl">
              <Link href="/artikel" className="text-sm font-semibold text-white/50 transition hover:text-white">← Semua artikel</Link>
              <div className="mt-8 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#EF2B31]">{article.category} • {new Date(article.date).toLocaleDateString('id-ID', { dateStyle: 'long' })}</div>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-5xl lg:text-6xl">{article.title}</h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/62">{article.excerpt}</p>
            </div>
          </section>

          <div className="mx-auto max-w-4xl px-5 py-12 sm:px-7 lg:py-16">
            <div className="relative mb-12 aspect-[16/9] overflow-hidden border border-[#202225]/12 bg-[#F1F2EF]">
              <Image src={article.thumbnail} alt={article.title} fill sizes="896px" className="object-contain p-8" priority />
            </div>
            <div className="article-content text-base leading-8 text-[#202225]/72" dangerouslySetInnerHTML={{ __html: article.content }} />
            <div className="mt-12 border-t border-[#202225]/10 pt-7 text-xs leading-6 text-[#202225]/45">Ditulis oleh {article.author}. Informasi harga, promo, spesifikasi, dan ketersediaan unit dapat berubah dan perlu dikonfirmasi kembali sebelum transaksi.</div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
    </>
  );
}
