import type { Metadata } from 'next';
import { getProductBySlug } from '@/lib/products-data';
import type { ReactNode } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  return product
    ? {
        title: `${product.name} Yogyakarta`,
        description: `${product.description} Lihat ${product.variants.length} varian dan konsultasikan kebutuhan unit bersama Yusuf Astra Isuzu Yogyakarta.`,
        alternates: { canonical: `${baseUrl}/produk/${product.slug}` },
      }
    : { title: 'Produk Isuzu Yogyakarta' };
}

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
