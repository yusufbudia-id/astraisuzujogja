export interface BrochureLink {
  label: string;
  url: string;
}

export interface BrochureFeature {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ProductBrochureContent {
  brochures?: BrochureLink[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  features?: BrochureFeature[];
  applications?: string[];
}

const brochureLinks = {
  traga: 'https://drive.google.com/file/d/1DQBPXc12lBbrA6dcutjgt6KsqHvJWUnf/view?usp=drivesdk',
  elfNlr: 'https://drive.google.com/file/d/17-N7P-68zHThhfL53r_hq-sZcoxmwWt8/view?usp=drivesdk',
  elfNmr: 'https://drive.google.com/file/d/11x6mz5mldC8ZHoRUB--eZqdyGDVif44S/view?usp=drivesdk',
  elfNps: 'https://drive.google.com/file/d/1y601m3lrezKXBiSGMuCA5oB-7YNGflae/view?usp=drivesdk',
  gigaFrr: 'https://drive.google.com/file/d/1GqgHP8zkevb72aA6bSzXtKSWWL8OUr6I/view?usp=drivesdk',
  gigaFtr: 'https://drive.google.com/file/d/1GyeiYyWopFoVKJA0El-nkQnJmJNu0HkJ/view?usp=drivesdk',
  gigaFvr: 'https://drive.google.com/file/d/1iHYpxnWxUthOEPt4g6PIuUZAdtACya01/view?usp=drivesdk',
  gigaFvm: 'https://drive.google.com/file/d/1Qzc4WYp-KVMUk8eNlMFR79porz0xpBem/view?usp=drivesdk',
  gigaFvz: 'https://drive.google.com/file/d/1KRTLdN5geQPntaa3Ozbl47PkmISWR4k1/view?usp=drivesdk',
  gigaGxz: 'https://drive.google.com/file/d/1f-MEnevM5cnCvz6Y3_TWhjRWnEGPRCBx/view?usp=drivesdk',
  dmax: 'https://drive.google.com/file/d/15paqN44oHy0CTRvyJuCcTiYuRRKaX5xh/view?usp=drivesdk',
  mux: 'https://drive.google.com/file/d/1JNW-jaU_Jm6mObq2Vnn-sq3QomnI8mbe/view?usp=drivesdk',
} as const;

const commonElfFeatures: BrochureFeature[] = [
  {
    title: 'Kabin dengan visibilitas luas',
    description: 'Kaca depan yang tegak dan bidang pandang yang luas membantu pengemudi bekerja lebih nyaman sekaligus memantau kondisi jalan dengan lebih baik.',
    image: '/images/isuzu/brochure/elf-nlr/cabin.webp',
    imageAlt: 'Interior kabin Isuzu ELF',
  },
  {
    title: 'Mesin Common Rail EURO4',
    description: 'Teknologi Common Rail dengan sistem kontrol emisi EURO4 dirancang untuk menjaga tenaga, efisiensi, dan keandalan dalam penggunaan operasional.',
    image: '/images/isuzu/brochure/elf-nmr/engine.webp',
    imageAlt: 'Mesin Common Rail Isuzu ELF',
  },
  {
    title: 'Fitur kabin yang fungsional',
    description: 'USB charger dan fitur keselamatan pendukung membantu membuat penggunaan kendaraan lebih praktis untuk aktivitas kerja sehari-hari.',
    image: '/images/isuzu/brochure/elf-nlr/usb.webp',
    imageAlt: 'USB charger pada kabin Isuzu ELF',
  },
];

const commonGigaFeatures: BrochureFeature[] = [
  {
    title: 'Mesin Heavy Duty Common Rail',
    description: 'Mesin Common Rail Isuzu GIGA dirancang untuk kebutuhan kerja berat dengan fokus pada performa, efisiensi, dan ketahanan operasional.',
    image: '/images/isuzu/brochure/giga-frr/engine.webp',
    imageAlt: 'Mesin Isuzu GIGA',
  },
  {
    title: 'Chassis untuk kebutuhan body besar',
    description: 'Pilihan chassis dan wheelbase pada lini GIGA memberikan fleksibilitas untuk berbagai aplikasi karoseri dan kebutuhan fleet.',
    image: '/images/isuzu/brochure/giga-fvm/chassis.webp',
    imageAlt: 'Chassis Isuzu GIGA',
  },
  {
    title: 'Siap untuk operasi logistik berat',
    description: 'Mulai dari distribusi antarkota hingga tractor head, konfigurasi GIGA dapat disesuaikan dengan kebutuhan angkutan dan operasional bisnis.',
    image: '/images/isuzu/brochure/giga-gxz/port.webp',
    imageAlt: 'Isuzu GIGA dalam operasi logistik',
  },
];

export const productBrochureContent: Record<string, ProductBrochureContent> = {
  'isuzu-traga': {
    brochures: [{ label: 'Brosur Isuzu Traga', url: brochureLinks.traga }],
    eyebrow: 'Fitur utama',
    title: 'Dirancang untuk mendukung ritme usaha sehari-hari.',
    intro: 'Traga menggabungkan mesin diesel Common Rail dengan area angkut yang luas dan pilihan konfigurasi yang siap disesuaikan untuk kebutuhan bisnis.',
    applications: ['Pick Up FD', 'Box', 'Distribusi harian'],
    features: [
      {
        title: 'Mesin 4JA1-CR Common Rail',
        description: 'Mesin 2.499 cc berstandar EURO4 menghasilkan tenaga 80 PS dengan karakter torsi yang sesuai untuk aktivitas angkut dan distribusi harian.',
        image: '/images/isuzu/brochure/traga/engine.webp',
        imageAlt: 'Mesin Isuzu Traga 4JA1-CR',
      },
      {
        title: 'Area kargo yang luas',
        description: 'Bak Traga Pick Up dirancang untuk memaksimalkan ruang muatan sehingga cocok untuk distribusi barang, retail, dan kebutuhan usaha harian.',
        image: '/images/isuzu/brochure/traga/cargo.webp',
        imageAlt: 'Bak kargo Isuzu Traga',
      },
      {
        title: 'Pilihan konfigurasi usaha',
        description: 'Tersedia pilihan Pick Up dan Box untuk membantu menyesuaikan kendaraan dengan jenis muatan dan aktivitas operasional.',
        image: '/images/isuzu/brochure/traga/lineup.webp',
        imageAlt: 'Lineup Isuzu Traga',
      },
    ],
  },

  'isuzu-elf': {
    brochures: [
      { label: 'Brosur ELF NLR', url: brochureLinks.elfNlr },
      { label: 'Brosur ELF NMR', url: brochureLinks.elfNmr },
      { label: 'Brosur ELF NPS 4x4', url: brochureLinks.elfNps },
    ],
    eyebrow: 'Fitur & teknologi',
    title: 'Kabin fungsional dan pilihan konfigurasi untuk berbagai kebutuhan.',
    intro: 'Keluarga ELF memiliki pilihan light truck, 4x4, serta kendaraan penumpang dengan karakter penggunaan yang berbeda-beda.',
    applications: ['Box aluminium', 'Bak besi', 'Travel & shuttle', 'Operasional 4x4'],
    features: commonElfFeatures,
  },

  'isuzu-elf-nlr': {
    brochures: [{ label: 'Brosur ELF NLR', url: brochureLinks.elfNlr }],
    eyebrow: 'Fitur utama ELF NLR',
    title: 'Nyaman untuk pengemudi, efisien untuk distribusi perkotaan.',
    intro: 'ELF NLR memadukan kabin dengan visibilitas luas, transmisi 6 percepatan, dan fitur-fitur praktis untuk mendukung operasional harian.',
    applications: ['Box aluminium', 'Bak besi', 'Refrigerated box'],
    features: [
      {
        title: 'Interior & jarak pandang luas',
        description: 'Kaca depan yang lebih tegak dan besar memberikan bidang pandang yang luas serta membantu kenyamanan pengemudi.',
        image: '/images/isuzu/brochure/elf-nlr/cabin.webp',
        imageAlt: 'Interior kabin Isuzu ELF NLR',
      },
      {
        title: 'Mesin 4JJ1-TCC Common Rail',
        description: 'Mesin 2.999 cc menghasilkan tenaga 120 PS dan dipadukan dengan transmisi 6 percepatan untuk mendukung efisiensi operasional.',
        image: '/images/isuzu/brochure/elf-nlr/engine.webp',
        imageAlt: 'Mesin Isuzu ELF NLR',
      },
      {
        title: 'USB charger di kabin',
        description: 'Fitur pengisian daya membantu kebutuhan perangkat pengemudi selama perjalanan dan aktivitas kerja sepanjang hari.',
        image: '/images/isuzu/brochure/elf-nlr/usb.webp',
        imageAlt: 'USB charger Isuzu ELF NLR',
      },
    ],
  },

  'isuzu-elf-nmr': {
    brochures: [{ label: 'Brosur ELF NMR & NMR L', url: brochureLinks.elfNmr }],
    eyebrow: 'Fitur utama ELF NMR',
    title: 'Kapasitas lebih besar dengan kabin yang tetap fungsional.',
    intro: 'NMR dan NMR L dirancang untuk angkutan 6 ban dengan chassis yang kokoh, pilihan wheelbase, serta fitur kabin yang mendukung ritase harian.',
    applications: ['Bak kayu', 'Bak besi', 'Box aluminium'],
    features: [
      {
        title: 'Kabin dengan visibilitas luas',
        description: 'Bidang kaca depan yang luas membantu pengemudi mendapatkan pandangan yang lebih baik saat berkendara dan bermanuver.',
        image: '/images/isuzu/brochure/elf-nmr/cabin.webp',
        imageAlt: 'Interior kabin Isuzu ELF NMR',
      },
      {
        title: 'Mesin 4HL1-TCS 150 PS',
        description: 'Mesin Common Rail 4.778 cc menghasilkan tenaga 150 PS dan torsi 41 kg.m untuk mendukung kebutuhan distribusi dan angkutan barang.',
        image: '/images/isuzu/brochure/elf-nmr/engine.webp',
        imageAlt: 'Mesin Isuzu ELF NMR',
      },
      {
        title: 'USB charger & fitur kabin',
        description: 'USB charger, fan blower, cabin lock warning buzzer, dan kamera mundur membantu meningkatkan kenyamanan serta keamanan operasional.',
        image: '/images/isuzu/brochure/elf-nmr/usb.webp',
        imageAlt: 'USB charger pada Isuzu ELF NMR',
      },
    ],
  },

  'isuzu-elf-nps': {
    brochures: [{ label: 'Brosur ELF NPS 4x4', url: brochureLinks.elfNps }],
    eyebrow: 'Fitur utama ELF NPS',
    title: 'Sistem 4x4 untuk kebutuhan kerja di medan yang lebih menantang.',
    intro: 'NPS 4x4 memadukan mesin 150 PS dengan sistem penggerak 4x4 OEM dan pilihan mode untuk kondisi jalan yang berbeda.',
    applications: ['Perkebunan', 'Pertambangan', 'Kendaraan khusus'],
    features: [
      {
        title: 'Kabin dengan pandangan luas',
        description: 'Desain kaca depan membantu visibilitas pengemudi saat bekerja di jalan raya maupun area operasional.',
        image: '/images/isuzu/brochure/elf-nps/cabin.webp',
        imageAlt: 'Interior kabin Isuzu ELF NPS',
      },
      {
        title: 'Mesin 4HL1-TCS Common Rail',
        description: 'Mesin 4.778 cc menghasilkan tenaga 150 PS dan torsi 41 kg.m untuk mendukung kebutuhan kerja di berbagai kondisi medan.',
        image: '/images/isuzu/brochure/elf-nps/engine.webp',
        imageAlt: 'Mesin Isuzu ELF NPS',
      },
      {
        title: '4x4 Wheel Drive System OEM',
        description: 'Mode penggerak dapat dipilih sesuai kondisi jalan, termasuk penggunaan di area ekstrem dan berlumpur.',
        image: '/images/isuzu/brochure/elf-nps/four-wheel-drive.webp',
        imageAlt: 'Kontrol sistem 4x4 Isuzu ELF NPS',
      },
    ],
  },

  'isuzu-elf-nqr': {
    eyebrow: 'Fitur keluarga ELF',
    title: 'Dibangun dari platform ELF yang telah teruji untuk kebutuhan penumpang.',
    intro: 'NQR berada dalam keluarga ELF dengan pendekatan kabin fungsional, mesin diesel Isuzu, dan dukungan purna jual untuk penggunaan operasional.',
    applications: ['Bus', 'Travel', 'Angkutan penumpang'],
    features: commonElfFeatures,
  },

  'isuzu-elf-microbus': {
    eyebrow: 'Fitur keluarga ELF',
    title: 'Kenyamanan pengemudi dan fleksibilitas untuk transportasi penumpang.',
    intro: 'ELF Microbus membawa basis ELF ke kebutuhan shuttle, travel, dan pariwisata dengan fokus pada utilisasi harian.',
    applications: ['Shuttle', 'Travel', 'Pariwisata'],
    features: commonElfFeatures,
  },

  'isuzu-giga': {
    brochures: [
      { label: 'Brosur GIGA FRR', url: brochureLinks.gigaFrr },
      { label: 'Brosur GIGA FTR', url: brochureLinks.gigaFtr },
      { label: 'Brosur GIGA FVR', url: brochureLinks.gigaFvr },
      { label: 'Brosur GIGA FVM', url: brochureLinks.gigaFvm },
      { label: 'Brosur GIGA FVZ', url: brochureLinks.gigaFvz },
      { label: 'Brosur Tractor Head', url: brochureLinks.gigaGxz },
    ],
    eyebrow: 'Heavy duty solutions',
    title: 'Pilihan chassis dan konfigurasi untuk pekerjaan yang lebih berat.',
    intro: 'Keluarga GIGA tersedia dalam beragam konfigurasi untuk distribusi, long haul, konstruksi, serta kebutuhan trailer dan tractor head.',
    applications: ['Wing box', 'Flat bed', 'Tangki', 'Dump', 'Trailer'],
    features: commonGigaFeatures,
  },

  'isuzu-giga-frr': {
    brochures: [{ label: 'Brosur GIGA FRR', url: brochureLinks.gigaFrr }],
    eyebrow: 'Fitur utama GIGA FRR',
    title: 'Medium truck untuk volume besar dan distribusi antarkota.',
    intro: 'FRR memadukan mesin 190 PS, cabin-to-end yang panjang, serta kabin dengan fitur fungsional untuk mendukung operasional distribusi.',
    applications: ['Box aluminium', 'Wing box', 'Distribusi antarkota'],
    features: [
      {
        title: 'Mesin 4HK1-TCC 190 PS',
        description: 'Mesin Heavy Duty Common Rail 5.193 cc menghasilkan tenaga 190 PS untuk mendukung distribusi dengan GVW 10 ton.',
        image: '/images/isuzu/brochure/giga-frr/engine.webp',
        imageAlt: 'Mesin Isuzu GIGA FRR',
      },
      {
        title: 'USB charger di kabin',
        description: 'Fitur pengisian daya mendukung kebutuhan perangkat pengemudi selama perjalanan dan ritase panjang.',
        image: '/images/isuzu/brochure/giga-frr/usb.webp',
        imageAlt: 'USB charger pada Isuzu GIGA FRR',
      },
      {
        title: 'Cocok untuk body bervolume besar',
        description: 'Cabin-to-end FRR Q mencapai 6,9 meter dan sesuai untuk aplikasi wing box, bak besi, maupun box aluminium.',
        image: '/images/isuzu/brochure/giga-frr/wingbox.webp',
        imageAlt: 'Aplikasi wing box Isuzu GIGA FRR',
      },
    ],
  },

  'isuzu-giga-ftr': {
    brochures: [{ label: 'Brosur GIGA FTR', url: brochureLinks.gigaFtr }],
    eyebrow: 'Fitur utama GIGA FTR',
    title: 'Dibuat untuk distribusi berat dengan pilihan body yang fleksibel.',
    intro: 'FTR membawa mesin 210 PS dan pilihan wheelbase untuk kebutuhan distribusi, wing box, box aluminium, maupun angkutan khusus.',
    applications: ['Wing box', 'Box aluminium', 'Angkutan motor'],
    features: [
      {
        title: 'Mesin Common Rail 210 PS',
        description: 'Mesin 5.193 cc dirancang untuk kebutuhan distribusi berat dengan fokus pada tenaga dan efisiensi operasional.',
        image: '/images/isuzu/brochure/giga-ftr/engine.webp',
        imageAlt: 'Mesin Isuzu GIGA FTR',
      },
      {
        title: 'USB charger',
        description: 'Fitur kabin yang praktis membantu pengemudi menjaga perangkat tetap aktif selama perjalanan operasional.',
        image: '/images/isuzu/brochure/giga-ftr/usb.webp',
        imageAlt: 'USB charger Isuzu GIGA FTR',
      },
      {
        title: 'Siap untuk wing box',
        description: 'Konfigurasi chassis FTR dapat disesuaikan untuk kebutuhan wing box dan beragam body distribusi lainnya.',
        image: '/images/isuzu/brochure/giga-ftr/wingbox.webp',
        imageAlt: 'Aplikasi wing box Isuzu GIGA FTR',
      },
    ],
  },

  'isuzu-giga-fvr': {
    brochures: [{ label: 'Brosur GIGA FVR', url: brochureLinks.gigaFvr }],
    eyebrow: 'Fitur utama GIGA FVR',
    title: 'Platform panjang untuk fleet dan body usaha skala besar.',
    intro: 'FVR tersedia dalam beberapa pilihan wheelbase dan aplikasi, mulai dari bak terbuka hingga refrigerated box dan wing box.',
    applications: ['Bak terbuka', 'Flat bed', 'Refrigerated box', 'Wing box'],
    features: [
      {
        title: 'Powertrain untuk kerja berat',
        description: 'Konfigurasi powertrain GIGA FVR dirancang untuk mendukung muatan dan perjalanan operasional dengan tuntutan tinggi.',
        image: '/images/isuzu/brochure/giga-fvr/powertrain.webp',
        imageAlt: 'Powertrain Isuzu GIGA FVR',
      },
      {
        title: 'USB charger',
        description: 'Fitur pengisian daya menambah kepraktisan kabin bagi pengemudi selama perjalanan antarkota maupun operasi fleet.',
        image: '/images/isuzu/brochure/giga-fvr/usb.webp',
        imageAlt: 'USB charger pada Isuzu GIGA FVR',
      },
      {
        title: 'Fleksibel untuk beragam aplikasi',
        description: 'FVR dapat digunakan untuk tangki, dump, bak terbuka, flat bed, refrigerated box, angkutan motor, hingga wing box.',
        image: '/images/isuzu/brochure/giga-fvr/operation.webp',
        imageAlt: 'Isuzu GIGA FVR untuk kebutuhan fleet',
      },
    ],
  },

  'isuzu-giga-fvm': {
    brochures: [{ label: 'Brosur GIGA FVM', url: brochureLinks.gigaFvm }],
    eyebrow: 'Fitur utama GIGA FVM',
    title: 'Konfigurasi 6x2 untuk muatan dan dimensi body yang lebih besar.',
    intro: 'FVM dirancang untuk kebutuhan fleet logistik dengan pilihan body seperti box, wing box, flat bed, dan tangki.',
    applications: ['Box', 'Wing box', 'Flat bed', 'Tangki'],
    features: [
      {
        title: 'Mesin untuk operasi heavy duty',
        description: 'Mesin GIGA FVM dirancang untuk menjaga performa saat kendaraan digunakan untuk perjalanan dan muatan berat.',
        image: '/images/isuzu/brochure/giga-fvm/engine.webp',
        imageAlt: 'Mesin Isuzu GIGA FVM',
      },
      {
        title: 'Konfigurasi axle 6x2',
        description: 'Sistem axle mendukung distribusi beban untuk aplikasi body berukuran besar dan kebutuhan armada logistik.',
        image: '/images/isuzu/brochure/giga-fvm/axle.webp',
        imageAlt: 'Axle Isuzu GIGA FVM',
      },
      {
        title: 'Chassis panjang dan fleksibel',
        description: 'Pilihan chassis memungkinkan penggunaan body besar sesuai kebutuhan logistik, distribusi, dan fleet perusahaan.',
        image: '/images/isuzu/brochure/giga-fvm/chassis.webp',
        imageAlt: 'Chassis Isuzu GIGA FVM',
      },
    ],
  },

  'isuzu-giga-fvz': {
    brochures: [{ label: 'Brosur GIGA FVZ', url: brochureLinks.gigaFvz }],
    eyebrow: 'Fitur utama GIGA FVZ',
    title: 'Heavy duty 6x4 untuk pekerjaan konstruksi dan muatan berat.',
    intro: 'FVZ ditujukan untuk aplikasi kerja berat seperti dump, flat bed, tangki, dan mixer dengan chassis yang disiapkan untuk beban tinggi.',
    applications: ['Dump', 'Flat bed', 'Tangki', 'Mixer'],
    features: [
      {
        title: 'Mesin heavy duty',
        description: 'Mesin GIGA FVZ dipadukan dengan konfigurasi 6x4 untuk mendukung penggunaan pada pekerjaan dan muatan berat.',
        image: '/images/isuzu/brochure/giga-fvz/engine.webp',
        imageAlt: 'Mesin Isuzu GIGA FVZ',
      },
      {
        title: 'Dibuat untuk lokasi kerja',
        description: 'Karakter heavy duty FVZ sesuai untuk proyek konstruksi, area kerja, dan kebutuhan operasional yang menuntut ketahanan tinggi.',
        image: '/images/isuzu/brochure/giga-fvz/worksite.webp',
        imageAlt: 'Isuzu GIGA FVZ di area kerja',
      },
      {
        title: 'Chassis untuk aplikasi berat',
        description: 'Layout chassis dirancang untuk mendukung aplikasi dump, flat bed, tangki, maupun mixer sesuai kebutuhan karoseri.',
        image: '/images/isuzu/brochure/giga-fvz/chassis.webp',
        imageAlt: 'Chassis Isuzu GIGA FVZ',
      },
    ],
  },

  'isuzu-giga-gxz': {
    brochures: [{ label: 'Brosur GIGA Tractor Head', url: brochureLinks.gigaGxz }],
    eyebrow: 'Fitur utama GIGA GXZ',
    title: 'Tractor head untuk trailer dan logistik berat.',
    intro: 'GXZ hadir untuk kebutuhan trailer dengan konfigurasi yang mendukung container, flat bed, low bed, dan tangki trailer.',
    applications: ['Container 40 ft', 'Flat bed trailer', 'Low bed trailer', 'Tangki trailer'],
    features: [
      {
        title: 'Mesin heavy duty untuk tractor head',
        description: 'Powertrain GIGA tractor head dirancang untuk kebutuhan angkutan berat dan perjalanan logistik jarak jauh.',
        image: '/images/isuzu/brochure/giga-gxz/engine.webp',
        imageAlt: 'Mesin Isuzu GIGA GXZ',
      },
      {
        title: 'Siap untuk operasional trailer',
        description: 'GXZ mendukung aplikasi container dan trailer untuk kebutuhan pelabuhan, logistik, maupun distribusi berat.',
        image: '/images/isuzu/brochure/giga-gxz/port.webp',
        imageAlt: 'Isuzu GIGA GXZ di area pelabuhan',
      },
      {
        title: 'Axle untuk kebutuhan berat',
        description: 'Konfigurasi axle mendukung traksi dan beban kerja pada operasional tractor head serta trailer.',
        image: '/images/isuzu/brochure/giga-gxz/axle.webp',
        imageAlt: 'Axle Isuzu GIGA GXZ',
      },
    ],
  },

  'isuzu-d-max': {
    brochures: [{ label: 'Brosur Isuzu D-MAX 2026', url: brochureLinks.dmax }],
    eyebrow: 'Brosur resmi',
    title: 'Informasi lengkap Isuzu D-MAX.',
    intro: 'Lihat detail fitur, spesifikasi, dan informasi produk D-MAX pada brosur resmi Isuzu.',
  },

  'isuzu-mu-x': {
    brochures: [{ label: 'Brosur Isuzu MU-X', url: brochureLinks.mux }],
    eyebrow: 'Brosur resmi',
    title: 'Informasi lengkap Isuzu MU-X.',
    intro: 'Lihat detail fitur, spesifikasi, dan informasi produk MU-X pada brosur resmi Isuzu.',
  },
};

export const getProductBrochureContent = (slug: string) => productBrochureContent[slug];
