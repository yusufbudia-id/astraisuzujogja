# Astra Isuzu Yogyakarta — Yusuf

Website Next.js untuk informasi lineup Isuzu, kebutuhan bisnis, program pembelian, pembiayaan, dan konsultasi penjualan bersama Yusuf di Yogyakarta.

## Stack
- Next.js 16 App Router
- React 19
- Tailwind CSS 4

## Route utama
- `/` — homepage
- `/produk` — keluarga produk Isuzu
- `/produk/[slug]` — varian per keluarga produk
- `/simulasi-kredit` — form kebutuhan pembiayaan
- `/promo` — jalur permintaan promo/quotation
- `/artikel` — insight dan panduan
- `/kontak` — kontak Yusuf dan lokasi dealer
- `/tentang-kami` — penjelasan website dan layanan

## Data produk
Dataset utama ada di `src/lib/products-data.ts`. Lineup disusun dari katalog Astra Isuzu dan saat ini dikelompokkan menjadi Traga, ELF, GIGA, D-MAX, dan MU-X. Harga dan program pembelian tidak di-hardcode sebagai nilai final karena dapat berubah.

## Aset
Logo, favicon, hero poster, dan seluruh aset kendaraan katalog tersimpan lokal di `public/`. Aset kendaraan utama berasal dari folder Google Drive resmi Isuzu yang dibagikan pengguna, kemudian dioptimalkan menjadi WebP untuk website. Hero tetap menggunakan video YouTube yang dipilih dengan poster fallback lokal.

## Environment
Set `NEXT_PUBLIC_BASE_URL` untuk canonical URL dan sitemap produksi.

## Development
```bash
npm ci
npm run dev
```

## Production checks
```bash
npm run check:deploy
```

Sebelum deploy, pastikan nomor WhatsApp Yusuf, domain produksi, materi foto resmi yang diizinkan, dan informasi dealer sudah diverifikasi.

## Production configuration

Before deployment, copy `.env.example` to `.env.local` if you want environment-specific overrides. Yusuf's confirmed WhatsApp is configured as `6282174635218` (display: `0821 7463 5218`). `NEXT_PUBLIC_WHATSAPP_NUMBER` must contain digits only.


## Deploy / production check

1. Copy `.env.example` to `.env.local` for local testing.
2. Set the final `NEXT_PUBLIC_BASE_URL` after the custom domain is known.
3. Run `npm ci`.
4. Run `npm run check:deploy`.
5. Follow `DEPLOY_CHECKLIST.md` before publishing.

Vercel deployments can fall back to `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` when `NEXT_PUBLIC_BASE_URL` is not set.

## V11 — Industrial Executive Homepage
Homepage utama telah didesain ulang dengan pendekatan Industrial Executive: Deep Navy + Warm Ivory + Graphite dengan Isuzu Red sebagai signal color. Struktur baru mencakup cinematic hero, interactive product stage, business-solution mosaic, engineering section, fleet section, promo strip, Yusuf consultant profile, editorial insights, dan full-width dealer map.


## V12 — Production QA & Performance
Hero video sekarang dimuat setelah page load/idle agar poster tampil lebih cepat dan tidak membebani render awal. Build juga memiliki manifest, social preview image, custom 404/error state, security headers, dan image optimization AVIF/WebP.


## V13 — Theme consistency
Seluruh halaman sekunder sekarang mengikuti visual system Industrial Executive yang sama dengan homepage: Deep Navy, Warm Ivory, Graphite, dan Isuzu Red sebagai aksen. Halaman yang diselaraskan: produk, detail produk, promo, simulasi kredit, artikel, detail artikel, kontak, tentang, testimoni, 404, dan error state.


## Product catalog structure (V14)

The public `/produk` catalog now uses model-level names familiar to buyers: Traga; ELF NLR, NMR, NPS, NQR, Microbus; GIGA FRR, FTR, FVR, FVM, FVZ, GXZ; plus D-MAX and MU-X.

Homepage navigation intentionally remains grouped into five broad families (Traga / ELF / GIGA / D-MAX / MU-X), while family pages `/produk/isuzu-elf` and `/produk/isuzu-giga` preserve the complete Astra variant dataset already collected.


## V15 official model assets
HomeClient Our Lineup now uses distinct full-size Astra Isuzu PNG assets for all 14 model-level entries. See `ASSET_SOURCES.md`.


## V16 local vehicle assets
All catalog/product visuals now use local optimized WebP assets sourced from the shared official Isuzu media Drive. No product model currently relies on a remote image fallback.

## Brochure integration

Product detail pages include brochure-sourced feature imagery, product highlights, body/application references, and direct links to the corresponding brochure where available.
