import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Isuzu Jogja | Harga Isuzu ELF, GIGA & Traga Yogyakarta',
  description:
    'Cari harga dan pilihan Isuzu Jogja: Traga, ELF, GIGA, D-MAX dan MU-X. Konsultasi unit, karoseri, kredit dan kebutuhan fleet bersama Yusuf di Yogyakarta.',
  keywords: [
    'Isuzu Jogja',
    'Isuzu Yogyakarta',
    'harga Isuzu Jogja',
    'Isuzu Traga Jogja',
    'Isuzu ELF Jogja',
    'Isuzu GIGA Jogja',
    'sales Isuzu Jogja',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Isuzu Jogja | Harga Isuzu ELF, GIGA & Traga Yogyakarta',
    description: 'Pilihan unit, harga, pembiayaan dan konsultasi kendaraan Isuzu untuk Yogyakarta dan sekitarnya.',
    url: '/',
    siteName: 'Isuzu Jogja',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function Page() {
  return <HomeClient />;
}
