# Audit Project Terakhir — V25P

## Temuan utama

1. Project production memuat scaffold UI yang tidak dipakai (`src/components/ui`) dengan puluhan import Radix/shadcn yang tidak terdaftar di dependency. Ini yang menghasilkan rangkaian `Module not found` saat TypeScript memeriksa seluruh source.
2. Folder `examples/websocket` ikut masuk pola `**/*.ts` / `**/*.tsx`, sehingga TypeScript meminta `socket.io` dan `socket.io-client` walaupun fitur tersebut bukan bagian website.
3. API artikel Prisma/SQLite (`src/app/api/articles`, `src/lib/db.ts`, `prisma/schema.prisma`) tidak dipakai oleh halaman artikel production. Halaman artikel membaca `src/lib/articles-data.ts`. Scaffold Prisma ini menambah dependency, postinstall, dan potensi masalah SQLite pada Vercel tanpa memberi fungsi ke UI saat ini.
4. Dynamic API route Next.js 16 membutuhkan `params: Promise<{ slug: string }>` dan source terakhir sudah diarahkan ke bentuk tersebut sebelum scaffold API dihapus.
5. `HeroVideo` memiliki fallback timer yang sebelumnya terkena narrowing TypeScript. Scheduling disederhanakan agar kompatibel dengan DOM typings baru.
6. `tsconfig` sebelumnya terlalu lebar (`**/*.ts`, `**/*.tsx`) dan kemudian ditambal dengan banyak exclude. Config sekarang hanya menargetkan source production `src/**` dan generated Next types.
7. Versi dependency inti memakai caret sehingga build baru dapat mengambil Next/React yang lebih baru dari versi awal project. Runtime inti sekarang dipin ke versi yang sudah tercatat dalam lockfile terbaru.

## Perubahan production cleanup

- Hapus `src/components/ui/**` (tidak dipakai oleh halaman production).
- Hapus `src/hooks/**` dan `src/components/client-body-provider.tsx` yang hanya bergantung pada scaffold UI tersebut.
- Hapus `src/lib/utils.ts` karena hanya dipakai scaffold UI.
- Hapus `examples/**` dari project production.
- Hapus Prisma/SQLite article API scaffold dan dependency Prisma karena artikel production bersumber dari `src/lib/articles-data.ts`.
- Hapus `postinstall: prisma generate`.
- Batasi TypeScript ke `src/**/*.ts`, `src/**/*.tsx`, dan Next generated types.
- Pin Next 16.3.2, React/React DOM 19.2.8, Sharp 0.34.5, dan dependency build sesuai lockfile.
- Deklarasikan Node 22.x untuk Vercel.
- Asset literal `/images/...` yang dirujuk source diperiksa: tidak ada path literal yang hilang.
- Import package eksternal pada source production diperiksa: hanya `next`, `react`, dan `lucide-react`, semuanya tersedia.
- Lockfile diperiksa: semua dependency/optional dependency yang tersisa memiliki resolusi di lockfile.

## Catatan arsitektur

Jika nanti ingin CMS artikel dinamis, jangan mengembalikan SQLite lokal ke Vercel. Tambahkan database persisten (mis. PostgreSQL) dan API/admin sebagai fitur tersendiri. Untuk website saat ini, artikel bersifat static-data dan tidak membutuhkan database.
