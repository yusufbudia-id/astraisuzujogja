export interface Article {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Cara Memilih Kendaraan Isuzu Sesuai Kebutuhan Usaha',
    slug: 'cara-memilih-kendaraan-isuzu-sesuai-kebutuhan-usaha',
    thumbnail: '/images/isuzu/models/traga.webp',
    excerpt: 'Mulai dari jenis muatan, rute operasional, hingga kebutuhan karoseri sebelum menentukan keluarga kendaraan yang tepat.',
    content: `<p>Memilih kendaraan niaga sebaiknya dimulai dari kebutuhan kerja, bukan hanya dari nama model. Pertimbangkan jenis muatan, volume dan berat barang, rute harian, kondisi jalan, kebutuhan karoseri, serta jumlah perjalanan dalam satu hari.</p>
    <h3>Mulai dari pola operasional</h3><p>Untuk distribusi ringan dan aktivitas usaha harian, keluarga Traga dapat menjadi titik awal untuk dibandingkan. Saat kebutuhan kapasitas, panjang chassis, atau konfigurasi meningkat, keluarga ELF dan GIGA menyediakan pilihan varian yang lebih luas.</p>
    <h3>Jangan berhenti pada spesifikasi</h3><p>Kecocokan unit juga dipengaruhi konfigurasi akhir kendaraan, kebutuhan pembiayaan, dan jenis pekerjaan. Karena itu, shortlist awal sebaiknya dilanjutkan dengan konsultasi unit sebelum menentukan varian.</p>`,
    category: 'Panduan',
    tags: ['Isuzu', 'Kendaraan Niaga', 'Bisnis'],
    author: 'Yusuf Astra Isuzu Yogyakarta',
    date: '2026-09-24',
  },
  {
    id: 2,
    title: 'Traga, ELF, atau GIGA: Mulai Membandingkan dari Mana?',
    slug: 'traga-elf-giga-mulai-membandingkan-dari-mana',
    thumbnail: '/images/isuzu/models/elf-nmr.webp',
    excerpt: 'Tiga keluarga kendaraan niaga Isuzu melayani skala kebutuhan yang berbeda. Ini cara membaca perbedaannya secara sederhana.',
    content: `<p>Traga, ELF, dan GIGA sama-sama digunakan untuk kebutuhan bisnis, tetapi skala operasional dan pilihan konfigurasinya berbeda. Traga berada pada kebutuhan niaga ringan, ELF menawarkan banyak pilihan light truck dan kendaraan penumpang, sementara GIGA ditujukan untuk kebutuhan medium hingga heavy duty.</p>
    <h3>Lihat kebutuhan, bukan hanya ukuran kendaraan</h3><p>Jenis muatan, tonase, panjang aplikasi, frekuensi perjalanan, dan kondisi rute akan memengaruhi pilihan. Untuk kendaraan yang akan menggunakan karoseri tertentu, ruang aplikasi chassis juga menjadi pertimbangan penting.</p>
    <h3>Gunakan katalog sebagai shortlist</h3><p>Gunakan katalog produk untuk mempersempit pilihan keluarga dan varian Isuzu. Sebelum pembelian, konfirmasikan kembali spesifikasi, harga, dan ketersediaan unit.</p>`,
    category: 'Produk',
    tags: ['Traga', 'ELF', 'GIGA'],
    author: 'Yusuf Astra Isuzu Yogyakarta',
    date: '2026-09-18',
  },
  {
    id: 3,
    title: 'Apa yang Perlu Disiapkan Sebelum Meminta Simulasi Kredit Kendaraan Usaha?',
    slug: 'persiapan-simulasi-kredit-kendaraan-usaha',
    thumbnail: '/images/isuzu/models/d-max.webp',
    excerpt: 'Supaya simulasi lebih relevan, siapkan pilihan unit, rencana DP, tenor, dan gambaran penggunaan kendaraan.',
    content: `<p>Simulasi kredit kendaraan usaha tidak cukup hanya memasukkan harga kendaraan. Nilai uang muka, tenor, asuransi, program leasing, domisili, dan konfigurasi kendaraan dapat membuat hasil akhirnya berbeda.</p>
    <h3>Informasi awal yang membantu</h3><p>Siapkan keluarga produk atau varian yang diminati, kisaran uang muka, tenor yang diinginkan, serta penggunaan kendaraan. Jika kendaraan membutuhkan karoseri, sampaikan kebutuhan tersebut sejak awal.</p>
    <h3>Minta quotation yang sesuai kondisi aktual</h3><p>Gunakan simulasi sebagai perkiraan awal. Perhitungan final sebaiknya dikonfirmasi agar mengikuti harga unit, uang muka, tenor, dan program pembiayaan yang berlaku saat pengajuan.</p>`,
    category: 'Pembiayaan',
    tags: ['Kredit', 'Pembiayaan', 'Isuzu'],
    author: 'Yusuf Astra Isuzu Yogyakarta',
    date: '2026-09-12',
  },
  {
    id: 4,
    title: 'D-MAX dan MU-X untuk Operasional Lapangan: Apa yang Perlu Dipertimbangkan?',
    slug: 'd-max-mu-x-operasional-lapangan',
    thumbnail: '/images/isuzu/models/mu-x.webp',
    excerpt: 'Pickup 4x4 dan SUV 4x4 menjawab kebutuhan yang berbeda antara membawa barang, kru, dan mobilitas profesional.',
    content: `<p>D-MAX dan MU-X sama-sama menawarkan konfigurasi 4x4 pada lineup yang ditampilkan Astra Isuzu, tetapi kebutuhan penggunaannya berbeda. Pickup lebih berorientasi pada fleksibilitas area bak dan pekerjaan lapangan, sedangkan SUV menyediakan kabin penumpang tertutup untuk mobilitas profesional.</p>
    <h3>Perhatikan jenis pekerjaan</h3><p>Jumlah penumpang, kebutuhan membawa perlengkapan, rute, kondisi medan, dan pola penggunaan harian perlu dipetakan terlebih dahulu. Kebutuhan fleet perusahaan juga dapat berbeda dengan pembelian satu unit untuk penggunaan operasional.</p>
    <p>Diskusikan kebutuhan aktual sebelum menentukan varian agar pilihan kendaraan tidak hanya berdasarkan tampilan atau satu spesifikasi.</p>`,
    category: 'Produk',
    tags: ['D-MAX', 'MU-X', '4x4'],
    author: 'Yusuf Astra Isuzu Yogyakarta',
    date: '2026-09-05',
  },
];

export const getArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
export const getAllCategories = () => Array.from(new Set(articles.map((article) => article.category)));
