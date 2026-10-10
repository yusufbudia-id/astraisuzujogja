import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Artikel Isuzu Jogja: Produk, Bisnis & Pembiayaan',
  description:
    'Baca panduan memilih kendaraan Isuzu, perbandingan Traga, ELF dan GIGA, pembiayaan, serta tips operasional kendaraan usaha di Yogyakarta.',
  alternates: { canonical: '/artikel' },
  openGraph: {
    title: 'Artikel Isuzu Jogja: Produk, Bisnis & Pembiayaan',
    description: 'Panduan kendaraan Isuzu untuk membantu memilih unit sesuai kebutuhan usaha dan operasional.',
    url: '/artikel',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
