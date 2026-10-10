import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Testimoni Pelanggan Isuzu Jogja',
  description: 'Testimoni pelanggan yang telah memberikan izin publikasi.',
  alternates: { canonical: '/testimoni' },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }
