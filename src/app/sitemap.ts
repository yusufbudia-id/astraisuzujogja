import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site-url';
import { allProductPages } from '@/lib/products-data';
import { articles } from '@/lib/articles-data';
import { seoLandingPages } from '@/lib/seo-landing-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const staticPages = [
    ['', 'weekly', 1],
    ['/produk', 'weekly', 0.95],
    ['/simulasi-kredit', 'monthly', 0.75],
    ['/promo', 'weekly', 0.8],
    ['/artikel', 'weekly', 0.75],
    ['/kontak', 'monthly', 0.75],
    ['/tentang-kami', 'monthly', 0.6],
  ] as const;

  return [
    ...staticPages.map(([path, changeFrequency, priority]) => ({
      url: `${baseUrl}${path}`,
      changeFrequency,
      priority,
    })),
    ...seoLandingPages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...allProductPages.map((product) => ({
      url: `${baseUrl}/produk/${product.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/artikel/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),
  ];
}
