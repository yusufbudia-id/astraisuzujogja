import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Promo Isuzu Jogja & Program Pembiayaan',
  description: 'Tanyakan promo Isuzu Jogja, harga OTR Yogyakarta dan simulasi pembiayaan terbaru untuk Traga, ELF, GIGA, D-MAX dan MU-X.',
  alternates: { canonical: '/promo' },
  openGraph: { title: 'Promo Isuzu Jogja & Program Pembiayaan', description: 'Informasi promo, harga dan pembiayaan Isuzu untuk wilayah Yogyakarta.', url: '/promo' },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }
