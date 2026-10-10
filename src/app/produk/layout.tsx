import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Daftar Produk Isuzu Jogja: Traga, ELF, GIGA, D-MAX & MU-X',
  description:
    'Lihat lineup Isuzu Jogja lengkap: Traga, ELF NLR/NMR/NPS/NQR, GIGA FRR/FTR/FVR/FVM/FVZ/GXZ, D-MAX dan MU-X beserta varian dan spesifikasinya.',
  alternates: { canonical: '/produk' },
  openGraph: {
    title: 'Daftar Produk Isuzu Jogja',
    description: 'Bandingkan model Isuzu untuk kebutuhan distribusi, logistik, konstruksi, travel dan operasional perusahaan.',
    url: '/produk',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
