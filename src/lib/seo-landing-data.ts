export interface SeoLandingLink {
  href: string;
  label: string;
  description: string;
}

export interface SeoLandingPage {
  slug: string;
  title: string;
  eyebrow: string;
  h1: string;
  description: string;
  keywords: string[];
  intro: string;
  bullets: string[];
  productLinks: SeoLandingLink[];
  faq: { question: string; answer: string }[];
}

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: 'truk-jogja',
    title: 'Truk Jogja | Pilihan Isuzu untuk Usaha & Fleet',
    eyebrow: 'Panduan Truk Jogja',
    h1: 'Truk Jogja untuk distribusi, usaha, dan kebutuhan fleet.',
    description:
      'Cari truk Jogja untuk distribusi, usaha, konstruksi atau fleet. Lihat pilihan Isuzu ELF dan GIGA serta konsultasikan kebutuhan karoseri dan harga OTR Yogyakarta.',
    keywords: ['truk jogja', 'harga truk jogja', 'truk untuk usaha jogja', 'harga isuzu truk jogja', 'dealer truk isuzu jogja'],
    intro:
      'Pemilihan truk sebaiknya dimulai dari jenis muatan, rute, kapasitas, ukuran body, dan pola operasional. Isuzu memiliki pilihan light truck hingga medium/heavy duty yang dapat disesuaikan untuk distribusi harian, pengiriman antarkota, konstruksi, dan kebutuhan armada perusahaan.',
    bullets: [
      'ELF NLR untuk kebutuhan light truck 4 ban dan distribusi ringan.',
      'ELF NMR untuk light truck 6 ban, box, bak, dan kebutuhan usaha yang lebih berat.',
      'GIGA untuk distribusi medium, angkut berat, konstruksi, dan fleet.',
      'Traga untuk pickup niaga ringan, bak, dan box.',
    ],
    productLinks: [
      { href: '/produk/isuzu-elf-nlr', label: 'Isuzu ELF NLR', description: 'Light truck 4 ban untuk distribusi ringan dan chassis usaha.' },
      { href: '/produk/isuzu-elf-nmr', label: 'Isuzu ELF NMR', description: 'Light truck 6 ban untuk box, bak, cargo, dan distribusi.' },
      { href: '/produk/isuzu-giga-fvz', label: 'Isuzu GIGA FVZ', description: 'Pilihan 6x4 untuk kebutuhan kerja berat dan konstruksi.' },
      { href: '/produk/isuzu-traga', label: 'Isuzu Traga', description: 'Pickup niaga ringan untuk usaha, retail, bak, dan box.' },
    ],
    faq: [
      { question: 'Truk Isuzu apa yang cocok untuk usaha di Jogja?', answer: 'Pilihan tergantung jenis muatan, volume, rute, body, dan kapasitas yang dibutuhkan. ELF NLR, ELF NMR, GIGA, dan Traga melayani kelas kebutuhan yang berbeda.' },
      { question: 'Apakah harga truk Jogja sama untuk semua body?', answer: 'Tidak. Harga dapat berbeda menurut model, chassis, karoseri, program penjualan, dan komponen lain. Gunakan harga yang tersedia sebagai referensi lalu konfirmasi harga terbaru sebelum transaksi.' },
    ],
  },
  {
    slug: 'harga-truk-jogja',
    title: 'Harga Truk Jogja | Isuzu ELF, GIGA & Traga',
    eyebrow: 'Harga Truk Yogyakarta',
    h1: 'Harga truk Jogja: mulai dari kebutuhan, lalu pilih unit yang tepat.',
    description:
      'Informasi harga truk Jogja untuk Isuzu ELF, GIGA dan Traga. Cek model yang memiliki pricelist OTR Yogyakarta dan konsultasikan body, kredit, serta kebutuhan usaha.',
    keywords: ['harga truk jogja', 'harga isuzu truk jogja', 'truk jogja', 'dealer truk isuzu jogja', 'truk untuk usaha jogja'],
    intro:
      'Harga kendaraan niaga tidak cukup dibandingkan dari angka pembelian saja. Model chassis, konfigurasi body, kapasitas angkut, rute, dan pola kerja ikut menentukan pilihan yang lebih efisien untuk usaha. Pada model yang sudah memiliki sumber pricelist, harga ditampilkan tanpa menebak model yang belum tersedia datanya.',
    bullets: [
      'Traga memiliki referensi harga OTR untuk beberapa konfigurasi pickup dan box.',
      'ELF NLR memiliki referensi OTR untuk konfigurasi bak besi dan box.',
      'ELF NMR memiliki referensi OTR untuk bak, box, refrigerator, car carrier, dan dump tertentu.',
      'Model lain tetap dapat dikonsultasikan tanpa menampilkan harga asumsi.',
    ],
    productLinks: [
      { href: '/produk/isuzu-traga', label: 'Harga Isuzu Traga', description: 'Lihat referensi harga pickup, box, dan varian Traga yang tersedia.' },
      { href: '/produk/isuzu-elf-nlr', label: 'Harga Isuzu ELF NLR', description: 'Lihat harga NLR untuk kebutuhan bak besi dan box.' },
      { href: '/produk/isuzu-elf-nmr', label: 'Harga Isuzu ELF NMR', description: 'Lihat harga NMR untuk beberapa pilihan body dan chassis.' },
      { href: '/produk', label: 'Semua Produk Isuzu', description: 'Bandingkan model sebelum menentukan kebutuhan body dan pembiayaan.' },
    ],
    faq: [
      { question: 'Berapa harga truk Isuzu di Jogja?', answer: 'Harga berbeda menurut tipe, chassis, body, program penjualan, dan periode. Halaman produk menampilkan harga hanya ketika ada data pricelist yang tersedia.' },
      { question: 'Bisa minta simulasi kredit truk Isuzu?', answer: 'Bisa. Setelah menentukan unit dan kebutuhan body, simulasi dapat disesuaikan dengan DP, tenor, dan program pembiayaan yang tersedia.' },
    ],
  },
  {
    slug: 'truk-engkel-jogja',
    title: 'Truk Engkel Jogja | Isuzu ELF NLR 4 Ban',
    eyebrow: 'Light Truck 4 Ban',
    h1: 'Truk engkel Jogja untuk distribusi ringan dan usaha harian.',
    description:
      'Cari truk engkel Jogja? Lihat Isuzu ELF NLR light truck 4 ban untuk distribusi, box, bak dan kebutuhan usaha di Yogyakarta.',
    keywords: ['truk engkel jogja', 'truk ringan jogja', 'truk colt diesel jogja', 'truk box jogja', 'truk bak jogja'],
    intro:
      'Untuk kebutuhan distribusi ringan, light truck 4 ban seperti Isuzu ELF NLR dapat dipertimbangkan karena tersedia dalam beberapa pilihan chassis. Di pasar, pencarian “truk colt diesel” juga sering dipakai sebagai istilah umum oleh pembeli yang sedang mencari kelas light truck, namun Isuzu ELF adalah lini Isuzu dan bukan Mitsubishi Colt Diesel.',
    bullets: [
      'Cocok untuk distribusi retail, barang konsumsi, dan operasional usaha.',
      'Dapat dipertimbangkan untuk body box atau bak sesuai kebutuhan aplikasi.',
      'Pilihan chassis perlu disesuaikan dengan dimensi body dan pola muatan.',
      'Harga OTR tersedia untuk beberapa konfigurasi NLR pada pricelist sumber.',
    ],
    productLinks: [
      { href: '/produk/isuzu-elf-nlr', label: 'Isuzu ELF NLR', description: 'Model utama untuk pencarian light truck 4 ban / truk engkel.' },
      { href: '/truk-box-jogja', label: 'Truk Box Jogja', description: 'Panduan memilih chassis untuk kebutuhan body box dan distribusi.' },
      { href: '/harga-truk-jogja', label: 'Harga Truk Jogja', description: 'Lihat model yang memiliki referensi pricelist OTR.' },
    ],
    faq: [
      { question: 'Apa pilihan Isuzu untuk truk engkel 4 ban?', answer: 'Isuzu ELF NLR merupakan light truck 4 ban dalam lineup yang tersedia di situs ini.' },
      { question: 'Apakah ELF NLR bisa dibuat box?', answer: 'ELF NLR dapat dipertimbangkan untuk body box. Penentuan dimensi dan spesifikasi body perlu disesuaikan dengan chassis dan kebutuhan muatan.' },
    ],
  },
  {
    slug: 'truk-double-engkel-jogja',
    title: 'Truk Double Engkel Jogja | Isuzu ELF NMR 6 Ban',
    eyebrow: 'Light Truck 6 Ban',
    h1: 'Truk double engkel Jogja untuk box, bak, cargo, dan distribusi.',
    description:
      'Cari truk double engkel Jogja? Isuzu ELF NMR 6 ban tersedia untuk kebutuhan box, bak, refrigerator, dump tertentu dan operasional usaha.',
    keywords: ['truk double engkel jogja', 'truk 6 roda jogja', 'truk ringan jogja', 'truk medium jogja', 'truk box jogja'],
    intro:
      'Untuk kebutuhan yang lebih berat dibanding light truck 4 ban, Isuzu ELF NMR hadir sebagai light truck 6 ban dengan beberapa pilihan chassis. Model ini relevan untuk usaha distribusi, box, bak, cargo, refrigerator, dan aplikasi tertentu yang tercantum pada sumber pricelist.',
    bullets: [
      'Pilihan NMR reguler, long, dan heavy duty tersedia pada katalog model.',
      'Referensi harga tersedia untuk beberapa body: bak kayu, bak besi, box, refrigerator, car carrier, dan dump.',
      'Pemilihan chassis harus mempertimbangkan jenis muatan dan dimensi body.',
      'Untuk kebutuhan di atas kelas NMR, bandingkan dengan lineup GIGA.',
    ],
    productLinks: [
      { href: '/produk/isuzu-elf-nmr', label: 'Isuzu ELF NMR', description: 'Light truck 6 ban untuk distribusi dan berbagai kebutuhan body.' },
      { href: '/produk/isuzu-giga-frr', label: 'Isuzu GIGA FRR', description: 'Alternatif kelas lebih besar untuk distribusi antarkota dan logistik.' },
      { href: '/truk-box-jogja', label: 'Truk Box Jogja', description: 'Panduan kebutuhan box dan distribusi.' },
    ],
    faq: [
      { question: 'Isuzu ELF NMR termasuk truk double engkel?', answer: 'ELF NMR di situs ini dikategorikan sebagai light truck 6 ban dan relevan untuk pencarian pasar “double engkel”.' },
      { question: 'Body apa saja yang tersedia pada referensi harga NMR?', answer: 'Pricelist sumber mencantumkan beberapa konfigurasi seperti bak kayu, bak besi, box, refrigerator, car carrier, dan dump pada tipe tertentu.' },
    ],
  },
  {
    slug: 'truk-box-jogja',
    title: 'Truk Box Jogja | Isuzu untuk Distribusi & Usaha',
    eyebrow: 'Box & Distribusi',
    h1: 'Truk box Jogja untuk distribusi, retail, dan operasional usaha.',
    description:
      'Pilihan truk box Jogja dari Isuzu Traga, ELF NLR dan ELF NMR untuk distribusi, retail, logistik dan kebutuhan usaha di Yogyakarta.',
    keywords: ['truk box jogja', 'truk bak jogja', 'truk untuk distribusi jogja', 'truk untuk usaha jogja', 'pickup box jogja'],
    intro:
      'Body box banyak digunakan untuk distribusi karena muatan lebih terlindungi dan ruang angkut dapat disesuaikan dengan kebutuhan usaha. Pilihan chassis tidak boleh hanya berdasarkan ukuran box; beban, rute, frekuensi perjalanan, dan proses bongkar-muat juga perlu diperhitungkan.',
    bullets: [
      'Traga untuk kebutuhan pickup box dan distribusi ringan.',
      'ELF NLR untuk light truck box 4 ban.',
      'ELF NMR untuk light truck 6 ban dengan kebutuhan kapasitas lebih besar.',
      'Untuk muatan dan rute lebih berat, bandingkan dengan lineup GIGA.',
    ],
    productLinks: [
      { href: '/produk/isuzu-traga', label: 'Traga Box', description: 'Pickup niaga ringan dengan referensi harga konfigurasi box.' },
      { href: '/produk/isuzu-elf-nlr', label: 'ELF NLR Box', description: 'Light truck 4 ban dengan referensi harga body box.' },
      { href: '/produk/isuzu-elf-nmr', label: 'ELF NMR Box', description: 'Light truck 6 ban untuk kebutuhan box dan distribusi.' },
    ],
    faq: [
      { question: 'Truk Isuzu apa yang cocok untuk box?', answer: 'Traga, ELF NLR, dan ELF NMR dapat dipertimbangkan sesuai volume muatan, berat, dimensi body, rute, dan frekuensi operasional.' },
      { question: 'Apakah harga sudah termasuk body box?', answer: 'Tergantung entri pricelist dan konfigurasi yang dipilih. Selalu konfirmasi kembali detail chassis, body, dan komponen harga sebelum transaksi.' },
    ],
  },
  {
    slug: 'truk-konstruksi-jogja',
    title: 'Truk Konstruksi Jogja | Isuzu GIGA untuk Kerja Berat',
    eyebrow: 'Konstruksi & Heavy Duty',
    h1: 'Truk untuk konstruksi Jogja dan kebutuhan kerja berat.',
    description:
      'Pilihan truk untuk konstruksi Jogja dari lineup Isuzu GIGA, termasuk model 6x4 untuk pekerjaan berat, tipper, dan kebutuhan operasional proyek.',
    keywords: ['truk untuk konstruksi jogja', 'truk medium jogja', 'truk 6 roda jogja', 'truk 10 roda jogja', 'truk jogja'],
    intro:
      'Aplikasi konstruksi membutuhkan pemilihan chassis yang mempertimbangkan medan, bobot muatan, konfigurasi axle, jenis body, dan pola operasi. Lineup Isuzu GIGA menyediakan beberapa kelas medium dan heavy duty untuk kebutuhan logistik berat maupun pekerjaan proyek.',
    bullets: [
      'GIGA FVZ 6x4 untuk kebutuhan heavy duty dan konstruksi.',
      'GIGA FVM 6x2 untuk angkut berat dan fleet logistik.',
      'GIGA FVR dan FTR untuk berbagai kebutuhan distribusi medium.',
      'GIGA GXZ untuk kebutuhan tractor head dan trailer.',
    ],
    productLinks: [
      { href: '/produk/isuzu-giga-fvz', label: 'Isuzu GIGA FVZ', description: '6x4 untuk konstruksi, tipper, dan pekerjaan berat.' },
      { href: '/produk/isuzu-giga-fvm', label: 'Isuzu GIGA FVM', description: '6x2 untuk angkut berat dan fleet.' },
      { href: '/produk/isuzu-giga-fvr', label: 'Isuzu GIGA FVR', description: 'Medium truck untuk cargo dan distribusi berat.' },
      { href: '/produk/isuzu-giga-gxz', label: 'Isuzu GIGA GXZ', description: 'Tractor head untuk trailer dan logistik berat.' },
    ],
    faq: [
      { question: 'Apa Isuzu yang cocok untuk konstruksi?', answer: 'Untuk pekerjaan berat, GIGA FVZ 6x4 dapat dipertimbangkan. Pemilihan final tetap harus menyesuaikan tonase, body, medan, dan pola kerja proyek.' },
      { question: 'Apakah semua GIGA punya harga di situs?', answer: 'Tidak. Situs hanya menampilkan harga ketika ada sumber pricelist yang tersedia; model tanpa data harga tidak diisi dengan asumsi.' },
    ],
  },
  {
    slug: 'isuzu-traga-jogja',
    title: 'Isuzu Traga Jogja | Harga Pickup & Box untuk Usaha',
    eyebrow: 'Traga & Pickup Niaga',
    h1: 'Isuzu Traga Jogja untuk pickup, box, distribusi, dan usaha harian.',
    description:
      'Cek Isuzu Traga Jogja, harga Traga pickup dan box, serta pilihan kendaraan niaga untuk distribusi, retail dan usaha di Yogyakarta.',
    keywords: [
      'harga isuzu traga jogja', 'isuzu traga jogja', 'harga traga jogja', 'pickup isuzu jogja', 'pickup diesel jogja',
      'pickup bak jogja', 'pickup box jogja', 'mobil niaga jogja', 'mobil usaha jogja', 'pickup untuk usaha jogja',
      'pickup untuk distribusi jogja', 'traga box jogja', 'traga pickup jogja',
    ],
    intro:
      'Isuzu Traga berada di kelas kendaraan niaga ringan untuk kebutuhan usaha harian. Pilihan pickup dan box membuatnya relevan untuk retail, distribusi, pengiriman barang, dan operasional bisnis yang membutuhkan kendaraan komersial dengan ukuran lebih ringkas dibanding light truck.',
    bullets: [
      'Tersedia referensi harga untuk Traga pickup, box, Black, RTU Box Semi Aluminium, dan beberapa varian AC pada pricelist sumber.',
      'Cocok dipertimbangkan untuk distribusi ringan, retail, FMCG, dan usaha harian.',
      'Pilihan pickup bak dan box dapat disesuaikan dengan jenis muatan dan operasional.',
      'Jika kebutuhan kapasitas lebih besar, bandingkan dengan ELF NLR.',
    ],
    productLinks: [
      { href: '/produk/isuzu-traga', label: 'Lihat Isuzu Traga', description: 'Varian, spesifikasi, dan harga Traga yang tersedia.' },
      { href: '/produk/isuzu-elf-nlr', label: 'Bandingkan dengan ELF NLR', description: 'Naik ke kelas light truck 4 ban untuk kebutuhan yang lebih besar.' },
      { href: '/truk-box-jogja', label: 'Pickup & Truk Box Jogja', description: 'Panduan memilih kendaraan untuk kebutuhan box dan distribusi.' },
      { href: '/harga-truk-jogja', label: 'Harga Kendaraan Niaga Jogja', description: 'Lihat model yang memiliki referensi harga OTR.' },
    ],
    faq: [
      { question: 'Berapa harga Isuzu Traga Jogja?', answer: 'Pada pricelist sumber yang digunakan situs ini, beberapa varian Traga memiliki referensi harga OTR. Harga terbaru tetap perlu dikonfirmasi karena program dan komponen harga dapat berubah.' },
      { question: 'Apakah Traga ada versi box?', answer: 'Ya. Data produk dan pricelist yang digunakan situs ini mencantumkan konfigurasi Traga Box serta RTU Box Semi Aluminium.' },
      { question: 'Traga cocok untuk usaha apa?', answer: 'Traga relevan untuk distribusi ringan, retail, FMCG, pengiriman barang, dan usaha harian, dengan pemilihan body sesuai kebutuhan muatan.' },
    ],
  },

  {
    slug: 'truk-bak-jogja',
    title: 'Truk Bak Jogja | Isuzu untuk Usaha & Distribusi',
    eyebrow: 'Bak & Operasional Usaha',
    h1: 'Truk bak Jogja untuk usaha, distribusi, dan angkut harian.',
    description:
      'Pilihan truk bak Jogja dari Isuzu Traga, ELF NLR dan ELF NMR untuk usaha, distribusi, retail, material ringan dan operasional harian di Yogyakarta.',
    keywords: ['truk bak jogja', 'truk untuk usaha jogja', 'truk untuk distribusi jogja', 'pickup bak jogja', 'mobil usaha jogja'],
    intro:
      'Body bak cocok untuk usaha yang membutuhkan proses muat-bongkar cepat dan fleksibel. Pemilihan chassis tetap perlu mempertimbangkan berat muatan, panjang body, rute, kondisi jalan, dan frekuensi perjalanan agar unit tidak hanya muat, tetapi juga sesuai pola kerja usaha.',
    bullets: [
      'Traga untuk kebutuhan pickup bak dan distribusi ringan.',
      'ELF NLR untuk light truck 4 ban dengan kapasitas dan dimensi body lebih besar.',
      'ELF NMR untuk light truck 6 ban saat kebutuhan muatan meningkat.',
      'Konsultasikan dimensi body dan aplikasi sebelum menentukan chassis akhir.',
    ],
    productLinks: [
      { href: '/produk/isuzu-traga', label: 'Isuzu Traga Pickup', description: 'Pickup niaga ringan untuk usaha dan distribusi harian.' },
      { href: '/produk/isuzu-elf-nlr', label: 'Isuzu ELF NLR', description: 'Light truck 4 ban untuk bak dan kebutuhan distribusi ringan.' },
      { href: '/produk/isuzu-elf-nmr', label: 'Isuzu ELF NMR', description: 'Light truck 6 ban untuk kapasitas dan kebutuhan body lebih besar.' },
      { href: '/harga-truk-jogja', label: 'Harga Truk Jogja', description: 'Lihat model yang memiliki referensi harga OTR Yogyakarta.' },
    ],
    faq: [
      { question: 'Truk Isuzu apa yang cocok untuk body bak?', answer: 'Traga, ELF NLR, dan ELF NMR dapat dipertimbangkan sesuai volume, berat muatan, ukuran body, rute, dan pola operasional.' },
      { question: 'Apakah harga truk bak sama dengan chassis?', answer: 'Tidak selalu. Harga dapat berbeda menurut chassis, body, spesifikasi karoseri, dan program penjualan. Detail final perlu dikonfirmasi sebelum transaksi.' },
    ],
  },
  {
    slug: 'truk-distribusi-jogja',
    title: 'Truk Distribusi Jogja | Isuzu untuk Logistik & Retail',
    eyebrow: 'Distribusi & Logistik',
    h1: 'Truk distribusi Jogja untuk retail, logistik, dan fleet.',
    description:
      'Cari truk untuk distribusi Jogja? Bandingkan Isuzu Traga, ELF dan GIGA untuk retail, logistik, box, cargo dan kebutuhan fleet di Yogyakarta.',
    keywords: ['truk untuk distribusi jogja', 'truk box jogja', 'truk untuk usaha jogja', 'pickup untuk distribusi jogja', 'truk medium jogja'],
    intro:
      'Kebutuhan distribusi berbeda antara rute dalam kota, antarkota, retail, FMCG, dan fleet. Pemilihan kendaraan perlu menyesuaikan volume muatan, bobot, ritase, jarak tempuh, akses jalan, serta jenis body agar biaya operasional tetap proporsional.',
    bullets: [
      'Traga untuk distribusi ringan dan pengiriman last-mile.',
      'ELF NLR dan NMR untuk box, bak, cargo, dan distribusi harian.',
      'GIGA FRR, FTR, dan FVR untuk distribusi medium dan antarkota.',
      'Pilih chassis berdasarkan pola operasi, bukan hanya ukuran body.',
    ],
    productLinks: [
      { href: '/produk/isuzu-traga', label: 'Isuzu Traga', description: 'Pickup dan box untuk distribusi ringan serta retail.' },
      { href: '/produk/isuzu-elf-nmr', label: 'Isuzu ELF NMR', description: 'Light truck 6 ban untuk box, cargo, dan distribusi.' },
      { href: '/produk/isuzu-giga-frr', label: 'Isuzu GIGA FRR', description: 'Medium truck untuk distribusi antarkota dan logistik.' },
      { href: '/truk-box-jogja', label: 'Truk Box Jogja', description: 'Panduan memilih kendaraan untuk body box dan distribusi.' },
    ],
    faq: [
      { question: 'Unit Isuzu apa yang cocok untuk distribusi dalam kota?', answer: 'Traga, ELF NLR, atau ELF NMR dapat dipertimbangkan tergantung volume, bobot muatan, dimensi body, akses jalan, dan ritase.' },
      { question: 'Bagaimana memilih truk untuk distribusi antarkota?', answer: 'Pertimbangkan muatan, jarak, frekuensi perjalanan, kebutuhan body, dan kapasitas chassis. Untuk kelas lebih besar, lineup GIGA dapat dibandingkan dengan ELF.' },
    ],
  },
  {
    slug: 'truk-medium-jogja',
    title: 'Truk Medium Jogja | Isuzu GIGA untuk Logistik & Fleet',
    eyebrow: 'Medium Truck',
    h1: 'Truk medium Jogja untuk logistik, fleet, dan angkut berat.',
    description:
      'Pilihan truk medium Jogja dari Isuzu GIGA untuk distribusi berat, logistik, fleet, 6x2, 6x4, cargo dan kebutuhan operasional perusahaan.',
    keywords: ['truk medium jogja', 'truk 6 roda jogja', 'truk 10 roda jogja', 'truk untuk distribusi jogja', 'truk untuk konstruksi jogja'],
    intro:
      'Ketika kebutuhan operasi sudah melampaui kelas light truck, Isuzu GIGA menyediakan pilihan medium truck dengan konfigurasi chassis yang berbeda. Jumlah roda atau axle bukan satu-satunya pertimbangan; bobot muatan, jenis body, medan, rute, dan pola kerja juga perlu dihitung.',
    bullets: [
      'GIGA FRR, FTR, dan FVR untuk cargo, box, distribusi dan fleet.',
      'GIGA FVM 6x2 untuk kebutuhan angkut berat dan long haul.',
      'GIGA FVZ 6x4 untuk konstruksi dan pekerjaan heavy duty.',
      'GIGA GXZ untuk kebutuhan tractor head dan trailer.',
    ],
    productLinks: [
      { href: '/produk/isuzu-giga-frr', label: 'Isuzu GIGA FRR', description: 'Medium truck untuk distribusi dan logistik.' },
      { href: '/produk/isuzu-giga-fvr', label: 'Isuzu GIGA FVR', description: 'Pilihan medium truck untuk cargo dan fleet.' },
      { href: '/produk/isuzu-giga-fvm', label: 'Isuzu GIGA FVM', description: 'Konfigurasi 6x2 untuk angkut berat dan long haul.' },
      { href: '/produk/isuzu-giga-fvz', label: 'Isuzu GIGA FVZ', description: 'Konfigurasi 6x4 untuk konstruksi dan heavy duty.' },
    ],
    faq: [
      { question: 'Apa yang dimaksud truk medium pada lineup Isuzu?', answer: 'Pada situs ini, lini GIGA menjadi rujukan utama untuk kelas medium truck dan kebutuhan operasional yang lebih berat dibanding ELF.' },
      { question: 'Apa beda kebutuhan truk 6 roda dan 10 roda?', answer: 'Istilah pasar tersebut perlu diterjemahkan ke konfigurasi chassis, axle, kapasitas, body, dan aplikasi. Pemilihan tidak sebaiknya dilakukan hanya dari jumlah roda.' },
    ],
  },
  {
    slug: 'pickup-isuzu-jogja',
    title: 'Pickup Isuzu Jogja | Traga untuk Usaha & Distribusi',
    eyebrow: 'Pickup Niaga',
    h1: 'Pickup Isuzu Jogja untuk bak, box, dan kebutuhan usaha.',
    description:
      'Cari pickup Isuzu Jogja? Lihat Isuzu Traga untuk pickup bak, box, distribusi ringan, retail, FMCG dan mobil usaha di Yogyakarta.',
    keywords: ['pickup isuzu jogja', 'pickup diesel jogja', 'pickup bak jogja', 'pickup box jogja', 'pickup untuk usaha jogja', 'pickup untuk distribusi jogja', 'mobil niaga jogja', 'mobil usaha jogja'],
    intro:
      'Pickup niaga cocok untuk usaha yang membutuhkan kendaraan lebih ringkas untuk pengiriman harian, retail, distribusi ringan, dan akses jalan yang lebih terbatas. Isuzu Traga menjadi pilihan utama pada cluster pickup niaga di situs ini.',
    bullets: [
      'Traga pickup untuk kebutuhan bak dan angkut harian.',
      'Traga box untuk muatan yang memerlukan ruang tertutup.',
      'Relevan untuk retail, FMCG, distribusi ringan, dan operasional usaha.',
      'Jika kebutuhan kapasitas meningkat, bandingkan dengan ELF NLR.',
    ],
    productLinks: [
      { href: '/produk/isuzu-traga', label: 'Isuzu Traga', description: 'Lihat varian, spesifikasi, dan harga yang tersedia.' },
      { href: '/isuzu-traga-jogja', label: 'Harga Isuzu Traga Jogja', description: 'Panduan lokal Traga untuk pickup dan box.' },
      { href: '/truk-bak-jogja', label: 'Truk Bak Jogja', description: 'Bandingkan pickup bak dengan light truck untuk kebutuhan usaha.' },
      { href: '/produk/isuzu-elf-nlr', label: 'Isuzu ELF NLR', description: 'Alternatif kelas light truck ketika kebutuhan kapasitas lebih besar.' },
    ],
    faq: [
      { question: 'Pickup Isuzu apa yang tersedia untuk kebutuhan niaga?', answer: 'Isuzu Traga menjadi pilihan pickup niaga utama di situs ini untuk kebutuhan bak, box, distribusi ringan, dan usaha harian.' },
      { question: 'Apakah Traga tersedia untuk body box?', answer: 'Ya. Data produk dan pricelist yang digunakan situs ini mencantumkan konfigurasi Traga Box dan RTU Box Semi Aluminium.' },
    ],
  },
];

export const seoLandingPageMap = Object.fromEntries(seoLandingPages.map((page) => [page.slug, page])) as Record<string, SeoLandingPage>;
