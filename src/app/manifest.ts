import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Astra Isuzu Yogyakarta | Yusuf',
    short_name: 'Isuzu Jogja',
    description: 'Informasi produk, konsultasi, promo, pembiayaan, dan kebutuhan fleet Isuzu bersama Yusuf di Yogyakarta.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F3F0EA',
    theme_color: '#D71920',
    icons: [
      { src: '/icon.png', sizes: '64x64', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
