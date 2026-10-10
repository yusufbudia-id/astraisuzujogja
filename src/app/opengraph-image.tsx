import { ImageResponse } from 'next/og';

export const alt = 'Isuzu Jogja - Yusuf Astra Isuzu Yogyakarta';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F7F7F5',
          color: '#202225',
          padding: '72px 78px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 82, height: 12, background: '#D71920' }} />
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 4 }}>ISUZU JOGJA</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 68, lineHeight: 1.02, fontWeight: 800, letterSpacing: -3 }}>
            Harga & Pilihan Isuzu di Yogyakarta
          </div>
          <div style={{ fontSize: 30, color: '#5A5C5F' }}>Traga • ELF • GIGA • D-MAX • MU-X</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 24 }}>
          <span>Yusuf • Konsultasi kendaraan Isuzu</span>
          <span style={{ color: '#D71920', fontWeight: 700 }}>astraisuzujogja.com</span>
        </div>
      </div>
    ),
    size,
  );
}
