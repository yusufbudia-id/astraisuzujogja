# Tahap 1 — Desain beranda Isuzu Jogja

Perubahan hanya pada `src/app/HomeClient.tsx`, khusus area hero.

- Headline baru: **Mitra Tangguh Bisnis Anda.**
- Penjelasan kebutuhan bisnis yang lebih spesifik.
- CTA merah ke bagian katalog produk (`#models`).
- CTA konsultasi WhatsApp melalui fungsi existing.
- Tiga poin layanan dan perbaikan keterbacaan hero pada video.

Bagian lain, termasuk Header, Footer, HeroVideo, katalog interaktif, route, data produk, WhatsApp config, dan SEO tidak diubah.

## Menjalankan

1. `npm ci`
2. `npm run dev`
3. Akses `http://localhost:3000`
4. Verifikasi responsivitas hero, CTA katalog, dan tombol WhatsApp.

Catatan: pemeriksaan otomatis belum berhasil diselesaikan di lingkungan penyusunan patch. Jalankan `npm run typecheck` dan `npm run build` di komputer Anda sebelum deployment.
