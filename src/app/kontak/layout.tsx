import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Kontak Sales Isuzu Jogja - Yusuf',
  description: 'Hubungi Yusuf untuk konsultasi Isuzu Jogja, harga OTR Yogyakarta, promo, kredit, fleet, karoseri dan ketersediaan unit.',
  alternates: { canonical: '/kontak' },
  openGraph: { title: 'Kontak Sales Isuzu Jogja - Yusuf', description: 'Konsultasi produk dan kebutuhan kendaraan Isuzu di Yogyakarta.', url: '/kontak' },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }
