import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Tentang Yusuf - Sales Isuzu Jogja',
  description: 'Kenali layanan konsultasi Yusuf untuk pemilihan kendaraan Isuzu, harga, pembiayaan, karoseri dan kebutuhan fleet di Yogyakarta.',
  alternates: { canonical: '/tentang-kami' },
  openGraph: { title: 'Tentang Yusuf - Sales Isuzu Jogja', description: 'Konsultasi kendaraan Isuzu untuk kebutuhan bisnis dan operasional di Yogyakarta.', url: '/tentang-kami' },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }
