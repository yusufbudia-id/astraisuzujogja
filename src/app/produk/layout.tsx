import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Produk Isuzu Yogyakarta',
  description: 'Jelajahi lineup Isuzu Traga, ELF, GIGA, D-MAX, dan MU-X beserta varian yang tampil pada katalog Astra Isuzu.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
