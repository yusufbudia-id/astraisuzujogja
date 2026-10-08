import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Astra Isuzu Yogyakarta | Produk, Promo & Konsultasi Yusuf',
  description: 'Temukan Isuzu Traga, ELF, GIGA, D-Max dan MU-X untuk kebutuhan bisnis. Konsultasi produk, promo, pembiayaan dan fleet bersama Yusuf Astra Isuzu Yogyakarta.',
  keywords: ['Astra Isuzu Yogyakarta', 'Isuzu Jogja', 'Isuzu Yogyakarta', 'harga Isuzu Jogja', 'Isuzu Traga Jogja', 'Isuzu ELF Jogja', 'Isuzu GIGA Jogja', 'Yusuf Isuzu'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Astra Isuzu Yogyakarta | Yusuf',
    description: 'Solusi kendaraan Isuzu untuk bisnis, operasional, dan kebutuhan fleet di Yogyakarta.',
    url: '/', siteName: 'Astra Isuzu Yogyakarta', locale: 'id_ID', type: 'website'
  }
};

export default function Page() { return <HomeClient />; }
