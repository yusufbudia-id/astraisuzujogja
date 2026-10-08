import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import { getSiteUrl } from '@/lib/site-url';

const font = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const baseUrl = getSiteUrl();

export const viewport: Viewport = { themeColor: '#D71920' };

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: 'Astra Isuzu Yogyakarta | Yusuf', template: '%s | Astra Isuzu Yogyakarta' },
  description: 'Informasi produk Isuzu, konsultasi kendaraan usaha, promo, pembiayaan dan kebutuhan fleet bersama Yusuf Astra Isuzu Yogyakarta.',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website', locale: 'id_ID', siteName: 'Astra Isuzu Yogyakarta', url: baseUrl,
    title: 'Astra Isuzu Yogyakarta | Yusuf',
    description: 'Konsultasi produk Isuzu dan solusi kendaraan untuk kebutuhan bisnis di Yogyakarta.',
    images: [{ url: '/images/brand/og-astra-isuzu-jogja.png', width: 1200, height: 630, alt: 'Astra Isuzu Jogja - Yusuf' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astra Isuzu Yogyakarta | Yusuf',
    description: 'Konsultasi produk Isuzu dan solusi kendaraan untuk kebutuhan bisnis di Yogyakarta.',
    images: ['/images/brand/og-astra-isuzu-jogja.png']
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Astra Isuzu Yogyakarta',
    url: baseUrl,
    areaServed: 'D.I. Yogyakarta',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Ringroad Selatan No.100, Glugo, Panggungharjo, Kec. Sewon',
      addressLocality: 'Bantul',
      addressRegion: 'D.I. Yogyakarta',
      postalCode: '55188',
      addressCountry: 'ID'
    },
    telephone: '+62 821-7463-5218',
    image: `${baseUrl}/images/brand/isuzu-jogja-commercial-logo.png`,
    description: 'Informasi dan konsultasi penjualan kendaraan Isuzu di Yogyakarta bersama Yusuf.'
  };

  return (
    <html lang="id" className={font.variable}>
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
