import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site-url';
import { allProductPages } from '@/lib/products-data';
import { articles } from '@/lib/articles-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();

  const staticPages = [
    ['', 'weekly', 1],
    ['/produk', 'weekly', 0.9],
    ['/simulasi-kredit', 'monthly', 0.75],
    ['/promo', 'weekly', 0.75],
    ['/artikel', 'weekly', 0.7],
    ['/kontak', 'monthly', 0.7],
    ['/tentang-kami', 'monthly', 0.55],
  ] as const;

  return [
    ...staticPages.map(([path, changeFrequency, priority]) => ({ url: `${baseUrl}${path}`, lastModified: now, changeFrequency, priority })),
    ...allProductPages.map((product) => ({ url: `${baseUrl}/produk/${product.slug}`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${baseUrl}/artikel/${article.slug}`, lastModified: new Date(article.date), changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
