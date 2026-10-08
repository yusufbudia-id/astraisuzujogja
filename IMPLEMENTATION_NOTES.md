# Implementation Notes — Astra Isuzu Yogyakarta

## Current architecture
- Homepage dan global identity sudah menggunakan visual merah, putih, dan charcoal.
- Product catalog memakai satu dataset di `src/lib/products-data.ts`.
- Homepage, katalog, detail produk, dan simulasi pembiayaan membaca dataset yang sama.
- Artikel memakai satu sumber data statis di `src/lib/articles-data.ts`.
- Kontak dan map mengarah ke Astra Isuzu Yogyakarta Ringroad Selatan.

## Asset policy
- Product/article artwork menggunakan file lokal di `public/images/isuzu/`.
- Tidak ada hotlink gambar kendaraan di source.
- Hero video masih berupa YouTube embed dengan poster fallback lokal.
- Local product SVG adalah representative artwork; ganti dengan foto resmi/approved sebelum publikasi final bila tersedia.

## Technical hardening
- `typescript.ignoreBuildErrors` sudah dihapus dari `next.config.ts`.
- Navigasi header/footer memakai absolute home anchors sehingga tetap bekerja dari sub-route.
- Sitemap memuat route produk dan artikel yang aktif.
