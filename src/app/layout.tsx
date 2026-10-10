import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import { getSiteUrl } from '@/lib/site-url';
import { siteConfig } from '@/lib/site-config';

const font = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const baseUrl = getSiteUrl();

export const viewport: Viewport = { themeColor: '#D71920' };

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Isuzu Jogja | Harga Truk, ELF, GIGA & Traga Yogyakarta',
    template: '%s | Isuzu Jogja',
  },
  description:
    'Informasi harga dan pilihan Isuzu Jogja untuk Traga, ELF, GIGA, D-MAX dan MU-X. Konsultasi unit, karoseri, pembiayaan dan kebutuhan fleet bersama Yusuf di Yogyakarta.',
  applicationName: 'Isuzu Jogja',
  authors: [{ name: 'Yusuf Astra Isuzu Yogyakarta', url: baseUrl }],
  creator: 'Yusuf Astra Isuzu Yogyakarta',
  publisher: 'Yusuf Astra Isuzu Yogyakarta',
  category: 'Automotive',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Isuzu Jogja',
    url: baseUrl,
    title: 'Isuzu Jogja | Harga Truk, ELF, GIGA & Traga Yogyakarta',
    description: 'Informasi produk, harga, pembiayaan dan konsultasi kendaraan Isuzu untuk Yogyakarta dan sekitarnya.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isuzu Jogja | Harga Truk, ELF, GIGA & Traga Yogyakarta',
    description: 'Informasi produk, harga, pembiayaan dan konsultasi kendaraan Isuzu untuk Yogyakarta dan sekitarnya.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Isuzu Jogja',
        alternateName: 'Yusuf Astra Isuzu Yogyakarta',
        inLanguage: 'id-ID',
      },
      {
        '@type': 'AutoDealer',
        '@id': `${baseUrl}/#dealer`,
        name: 'Astra Isuzu Yogyakarta',
        url: baseUrl,
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'D.I. Yogyakarta' },
          { '@type': 'City', name: 'Yogyakarta' },
          { '@type': 'AdministrativeArea', name: 'Sleman' },
          { '@type': 'AdministrativeArea', name: 'Bantul' },
          { '@type': 'AdministrativeArea', name: 'Kulon Progo' },
          { '@type': 'AdministrativeArea', name: 'Gunungkidul' },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Ringroad Selatan No.100, Glugo, Panggungharjo, Kec. Sewon',
          addressLocality: 'Bantul',
          addressRegion: 'D.I. Yogyakarta',
          postalCode: '55188',
          addressCountry: 'ID',
        },
        telephone: '+62 821-7463-5218',
        image: `${baseUrl}/opengraph-image`,
        description: 'Informasi dan konsultasi penjualan kendaraan Isuzu di Yogyakarta bersama Yusuf.',
      },
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#yusuf`,
        name: 'Yusuf',
        jobTitle: 'Sales Consultant Isuzu Yogyakarta',
        telephone: '+62 821-7463-5218',
        url: `${baseUrl}/kontak`,
        worksFor: { '@id': `${baseUrl}/#dealer` },
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.showroomShort,
          addressRegion: 'D.I. Yogyakarta',
          addressCountry: 'ID',
        },
      },
    ],
  };

  return (
    <html lang="id" className={font.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
