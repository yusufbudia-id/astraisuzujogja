import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Simulasi Kredit Isuzu Jogja',
  description: 'Hitung perkiraan pembiayaan dan konsultasikan DP, tenor, leasing serta kebutuhan karoseri untuk pembelian Isuzu di Yogyakarta.',
  alternates: { canonical: '/simulasi-kredit' },
  openGraph: { title: 'Simulasi Kredit Isuzu Jogja', description: 'Perkirakan skema pembiayaan kendaraan Isuzu sebelum meminta quotation terbaru.', url: '/simulasi-kredit' },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }
