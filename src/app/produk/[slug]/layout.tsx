import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { allProductPages, getProductBySlug } from '@/lib/products-data';
import { getProductPriceEntries } from '@/lib/pricing-data';
import { getSiteUrl } from '@/lib/site-url';

const localIntentKeywords: Record<string, string[]> = {
  'isuzu-traga': [
    'harga isuzu traga jogja', 'isuzu traga jogja', 'harga traga jogja', 'pickup isuzu jogja',
    'pickup diesel jogja', 'pickup bak jogja', 'pickup box jogja', 'mobil niaga jogja', 'mobil usaha jogja',
  ],
  'isuzu-elf-nlr': [
    'truk engkel jogja', 'truk ringan jogja', 'truk box jogja', 'truk bak jogja', 'harga truk jogja',
  ],
  'isuzu-elf-nmr': [
    'truk double engkel jogja', 'truk 6 roda jogja', 'truk box jogja', 'truk bak jogja', 'truk untuk distribusi jogja',
  ],
  'isuzu-giga-frr': ['truk medium jogja', 'truk untuk distribusi jogja', 'truk box jogja'],
  'isuzu-giga-ftr': ['truk medium jogja', 'truk untuk distribusi jogja', 'truk untuk usaha jogja'],
  'isuzu-giga-fvr': ['truk medium jogja', 'truk untuk distribusi jogja', 'truk untuk usaha jogja'],
  'isuzu-giga-fvm': ['truk 10 roda jogja', 'truk medium jogja', 'truk untuk konstruksi jogja'],
  'isuzu-giga-fvz': ['truk 10 roda jogja', 'truk untuk konstruksi jogja', 'truk medium jogja'],
};

export function generateStaticParams() {
  return allProductPages.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Produk Isuzu Jogja',
      robots: { index: false, follow: false },
    };
  }

  const canonical = `/produk/${product.slug}`;
  const title = `${product.shortName} Jogja: Harga & Spesifikasi`;
  const description = `${product.description} Cek varian, spesifikasi dan informasi harga ${product.shortName} untuk Yogyakarta bersama Yusuf Isuzu Jogja.`;

  return {
    title,
    description,
    keywords: [
      `${product.shortName} Jogja`,
      `harga ${product.shortName} Jogja`,
      `${product.shortName} Yogyakarta`,
      `spesifikasi ${product.shortName}`,
      product.name,
      ...(localIntentKeywords[product.slug] ?? []),
    ],
    alternates: { canonical },
    openGraph: {
      type: 'website',
      title,
      description,
      url: canonical,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return children;

  const baseUrl = getSiteUrl();
  const productUrl = `${baseUrl}/produk/${product.slug}`;
  const prices = getProductPriceEntries(product.slug).filter((entry) => (entry.scope ?? 'OTR') === 'OTR');
  const lowPrice = prices.length ? Math.min(...prices.map((entry) => entry.otr)) : undefined;
  const highPrice = prices.length ? Math.max(...prices.map((entry) => entry.otr)) : undefined;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${productUrl}#product`,
        name: product.name,
        description: product.description,
        image: [`${baseUrl}${product.image}`],
        url: productUrl,
        brand: { '@type': 'Brand', name: 'Isuzu' },
        category: product.category,
        model: product.shortName,
        ...(lowPrice !== undefined
          ? {
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'IDR',
                lowPrice,
                highPrice,
                offerCount: prices.length,
                availability: 'https://schema.org/InStock',
                url: productUrl,
              },
            }
          : {}),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${productUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Produk Isuzu', item: `${baseUrl}/produk` },
          { '@type': 'ListItem', position: 3, name: product.shortName, item: productUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      {children}
    </>
  );
}
