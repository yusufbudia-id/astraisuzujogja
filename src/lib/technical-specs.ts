export interface TechnicalSpecItem {
  label: string;
  value: string;
}

export interface TechnicalSpecGroup {
  title: string;
  items: TechnicalSpecItem[];
}

export interface ProductTechnicalSpecs {
  note: string;
  groups: TechnicalSpecGroup[];
}

const euro4 = 'EURO4';

export const productTechnicalSpecs: Record<string, ProductTechnicalSpecs> = {
  'isuzu-traga': {
    note: 'Ringkasan teknis mengacu pada brosur TRAGA EURO4 dan data varian yang digunakan di katalog project.',
    groups: [
      {
        title: 'Mesin & performa',
        items: [
          { label: 'Model mesin', value: '4JA1-CR Common Rail' },
          { label: 'Isi silinder', value: '2.499 cc' },
          { label: 'Tenaga maksimum', value: '80 PS' },
          { label: 'Torsi maksimum', value: '19,5 kg.m / 1.800–2.400 rpm' },
          { label: 'Emisi', value: euro4 },
        ],
      },
      {
        title: 'Kapasitas & aplikasi',
        items: [
          { label: 'GVW', value: '2.950 kg' },
          { label: 'Dimensi bak Pick Up', value: '± 2,8 m × 1,6 m' },
          { label: 'Pilihan utama', value: 'Pick Up FD / Box / Chassis / Blind Van' },
          { label: 'Karakter penggunaan', value: 'Distribusi harian & usaha niaga ringan' },
        ],
      },
    ],
  },

  'isuzu-elf': {
    note: 'Keluarga ELF mencakup beberapa model dengan konfigurasi berbeda. Nilai di bawah adalah rentang dari lineup yang tampil di website.',
    groups: [
      {
        title: 'Rentang powertrain',
        items: [
          { label: 'Isi silinder', value: '2.771–4.778 cc' },
          { label: 'Tenaga', value: '100–150 PS' },
          { label: 'Pilihan penggerak', value: '4x2 / 4x4 (NPS)' },
          { label: 'Standar emisi', value: euro4 },
        ],
      },
      {
        title: 'Rentang kapasitas',
        items: [
          { label: 'GVW', value: '5.100–8.250 kg' },
          { label: 'Kapasitas penumpang', value: 'Hingga 20 orang pada model bus/microbus' },
          { label: 'Pilihan penggunaan', value: 'Cargo, box, bus, microbus, operasional 4x4' },
        ],
      },
    ],
  },

  'isuzu-elf-nlr': {
    note: 'Spesifikasi model NLR pada brosur resmi Isuzu ELF NLR EURO4.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Model mesin', value: '4JJ1-TCC' },
          { label: 'Isi silinder', value: '2.999 cc' },
          { label: 'Tenaga maksimum', value: '120 PS / 2.600 rpm' },
          { label: 'Torsi maksimum', value: '36 kg.m / 1.500–2.600 rpm' },
          { label: 'Transmisi', value: 'MYY6S, 6 percepatan' },
          { label: 'Emisi', value: 'EURO4 dengan EGR & DOC' },
        ],
      },
      {
        title: 'Dimensi & kapasitas',
        items: [
          { label: 'P × L × T', value: '4.700 × 1.835 × 2.205 mm' },
          { label: 'Wheelbase', value: '2.490 mm' },
          { label: 'Ground clearance', value: '220 mm' },
          { label: 'Cabin-to-End', value: '3.127 mm' },
          { label: 'GVW', value: '5.100 kg' },
          { label: 'Tangki bahan bakar', value: '75 liter' },
        ],
      },
      {
        title: 'Kaki-kaki & operasional',
        items: [
          { label: 'Ban', value: '7.50-15-12PR' },
          { label: 'Radius putar minimum', value: '5,7 m' },
          { label: 'Daya tanjak maksimum', value: '44%' },
          { label: 'Kecepatan maksimum', value: '120 km/jam' },
        ],
      },
    ],
  },

  'isuzu-elf-nmr': {
    note: 'Spesifikasi NMR dan NMR L pada brosur resmi Isuzu ELF 2025. Dimensi dapat berbeda antar varian.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Model mesin', value: '4HL1-TCS' },
          { label: 'Isi silinder', value: '4.778 cc' },
          { label: 'Tenaga maksimum', value: '150 PS / 2.600 rpm' },
          { label: 'Torsi maksimum', value: '41 kg.m / 1.400–2.600 rpm' },
          { label: 'Transmisi', value: 'MYY6S, 6 percepatan' },
          { label: 'Emisi', value: 'EURO4 dengan EGR & DOC' },
        ],
      },
      {
        title: 'Dimensi & kapasitas',
        items: [
          { label: 'Panjang', value: '6.435–7.545 mm' },
          { label: 'Wheelbase', value: '3.360–4.175 mm' },
          { label: 'Ground clearance', value: '220 mm' },
          { label: 'Cabin-to-End', value: '4.830–5.930 mm' },
          { label: 'GVW', value: '8.250 kg' },
          { label: 'Tangki bahan bakar', value: '100 liter' },
        ],
      },
      {
        title: 'Kaki-kaki & operasional',
        items: [
          { label: 'Ban', value: '7.50-16-14PR' },
          { label: 'Radius putar', value: '7,3–8,5 m' },
          { label: 'Daya tanjak maksimum', value: '39%' },
          { label: 'Kecepatan maksimum', value: '106 km/jam' },
        ],
      },
    ],
  },

  'isuzu-elf-nps': {
    note: 'Spesifikasi NPS 4x4 pada brosur resmi Isuzu ELF NPS EURO4.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Model mesin', value: '4HL1-TCS' },
          { label: 'Isi silinder', value: '4.778 cc' },
          { label: 'Tenaga maksimum', value: '150 PS / 2.600 rpm' },
          { label: 'Torsi maksimum', value: '41 kg.m / 1.400–2.600 rpm' },
          { label: 'Transmisi', value: 'MYY5T, 5 percepatan' },
          { label: 'Penggerak', value: '4x4 OEM, mode 2H / 4L' },
        ],
      },
      {
        title: 'Dimensi & kapasitas',
        items: [
          { label: 'P × L × T', value: '6.035 × 2.100 × 2.465 mm' },
          { label: 'Wheelbase', value: '3.395 mm' },
          { label: 'Ground clearance', value: '215 mm' },
          { label: 'Cabin-to-End', value: '4.192 mm' },
          { label: 'GVW', value: '6.000 kg' },
          { label: 'Tangki bahan bakar', value: '100 liter' },
        ],
      },
      {
        title: 'Kaki-kaki & operasional',
        items: [
          { label: 'Ban', value: '7.50-16-14PR' },
          { label: 'Radius putar minimum', value: '6,9 m' },
          { label: 'Daya tanjak maksimum', value: '47%' },
          { label: 'Kecepatan maksimum', value: '112 km/jam' },
        ],
      },
    ],
  },

  'isuzu-elf-nqr': {
    note: 'Spesifikasi NQR Bus dirangkum dari halaman resmi Isuzu dan data katalog project.',
    groups: [
      {
        title: 'Mesin & kapasitas',
        items: [
          { label: 'Model mesin', value: '4HG1-T' },
          { label: 'Isi silinder', value: '4.570 cc' },
          { label: 'Tenaga maksimum', value: '125 PS' },
          { label: 'Kapasitas penumpang', value: 'Hingga 20 orang (konfigurasi project)' },
          { label: 'GVW', value: '8.000 kg' },
        ],
      },
      {
        title: 'Dimensi',
        items: [
          { label: 'P × L × T', value: '7.465 × 2.100 × 2.050 mm' },
          { label: 'Wheelbase', value: '4.175 mm' },
          { label: 'Ground clearance', value: '210 mm' },
          { label: 'Front / rear tread', value: '1.680 / 1.650 mm' },
        ],
      },
    ],
  },

  'isuzu-elf-microbus': {
    note: 'Spesifikasi utama mengikuti ELF NLR B Microbus EURO4. Beberapa varian lama/karoseri dapat memiliki angka berbeda.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Model mesin', value: '4JJ1-TCC Common Rail' },
          { label: 'Isi silinder', value: '2.999 cc' },
          { label: 'Tenaga maksimum', value: '120 PS / 2.600 rpm' },
          { label: 'Torsi maksimum', value: '36 kg.m / 1.500–2.600 rpm' },
          { label: 'Transmisi', value: 'MYY6S, 6 percepatan' },
          { label: 'Emisi', value: euro4 },
        ],
      },
      {
        title: 'Penumpang & penggunaan',
        items: [
          { label: 'Kapasitas', value: '16–20 orang tergantung konfigurasi' },
          { label: 'GVW', value: '5.100 kg pada lineup project' },
          { label: 'Penggunaan', value: 'Travel, shuttle, pariwisata, antar-jemput' },
        ],
      },
    ],
  },

  'isuzu-giga': {
    note: 'Keluarga GIGA mencakup konfigurasi 4x2, 6x2, 6x4, dan tractor head. Angka di bawah adalah rentang model yang tampil di website.',
    groups: [
      {
        title: 'Rentang powertrain',
        items: [
          { label: 'Isi silinder', value: '5.193–7.790 cc' },
          { label: 'Tenaga', value: '190–350 PS' },
          { label: 'Penggerak', value: '4x2 / 6x2 / 6x4' },
          { label: 'Transmisi', value: '6–9 percepatan tergantung model' },
        ],
      },
      {
        title: 'Rentang kapasitas',
        items: [
          { label: 'GVW / GCW', value: '10.000–46.100 kg' },
          { label: 'Cabin-to-End', value: '5.460–9.840 mm pada model cargo' },
          { label: 'Aplikasi', value: 'Box, wing box, tangki, dump, trailer' },
        ],
      },
    ],
  },

  'isuzu-giga-frr': {
    note: 'Spesifikasi GIGA FRR Q pada brosur resmi Isuzu GIGA EURO4.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Model mesin', value: '4HK1-TCC' },
          { label: 'Isi silinder', value: '5.193 cc' },
          { label: 'Tenaga maksimum', value: '190 PS / 2.600 rpm' },
          { label: 'Torsi maksimum', value: '52 kg.m / 1.600–2.600 rpm' },
          { label: 'Transmisi', value: 'MZZ6W, 6 percepatan' },
          { label: 'Penggerak', value: '4x2' },
        ],
      },
      {
        title: 'Dimensi & kapasitas',
        items: [
          { label: 'Wheelbase', value: '5.320 mm' },
          { label: 'Cabin-to-End', value: '6.900 mm' },
          { label: 'GVW', value: '10.000 kg' },
          { label: 'Tangki bahan bakar', value: '200 liter' },
          { label: 'Ban', value: '8.25-16-14PR' },
        ],
      },
    ],
  },

  'isuzu-giga-ftr': {
    note: 'Spesifikasi GIGA FTR P/S/T pada brosur resmi Isuzu GIGA EURO4.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Model mesin', value: '4HK1-TCS' },
          { label: 'Isi silinder', value: '5.193 cc' },
          { label: 'Tenaga maksimum', value: '210 PS / 2.600 rpm' },
          { label: 'Torsi maksimum', value: '72 kg.m / 1.600–2.600 rpm' },
          { label: 'Transmisi', value: 'MZW6P, 6 percepatan' },
          { label: 'Penggerak', value: '4x2' },
        ],
      },
      {
        title: 'Dimensi & kapasitas',
        items: [
          { label: 'Wheelbase', value: '5.050 / 6.050 / 6.500 mm' },
          { label: 'Cabin-to-End', value: '6.440 / 7.940 / 8.790 mm' },
          { label: 'GVW', value: '14.000 kg' },
          { label: 'Tangki bahan bakar', value: '200 liter' },
          { label: 'Ban', value: '9.00-20-14PR' },
        ],
      },
    ],
  },

  'isuzu-giga-fvr': {
    note: 'Spesifikasi GIGA FVR pada brosur resmi Isuzu GIGA EURO4. Wheelbase dan Cabin-to-End berbeda antar varian.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Model mesin', value: '6HK1-TCN' },
          { label: 'Isi silinder', value: '7.790 cc' },
          { label: 'Tenaga maksimum', value: '245 PS / 2.400 rpm' },
          { label: 'Torsi maksimum', value: '80,5 kg.m / 1.450–2.400 rpm' },
          { label: 'Transmisi', value: 'ES9306A, 6 percepatan' },
          { label: 'Penggerak', value: '4x2' },
        ],
      },
      {
        title: 'Dimensi & kapasitas',
        items: [
          { label: 'Wheelbase', value: '4.300–6.600 mm' },
          { label: 'Cabin-to-End', value: '5.490–9.840 mm' },
          { label: 'GVW', value: '16.000 kg' },
          { label: 'Tangki bahan bakar', value: '200 liter' },
          { label: 'Ban', value: '10.00-20-16PR' },
          { label: 'Sistem rem', value: 'Full Air Brake' },
        ],
      },
    ],
  },

  'isuzu-giga-fvm': {
    note: 'Spesifikasi GIGA FVM tersedia dalam versi standar dan High Power; nilai powertrain dapat berbeda antar varian.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Model mesin', value: '6HK1-TCN / 6HK1-TCS' },
          { label: 'Isi silinder', value: '7.790 cc' },
          { label: 'Tenaga maksimum', value: '245 / 285 PS' },
          { label: 'Torsi maksimum', value: '80,5 / 90 kg.m' },
          { label: 'Transmisi', value: 'ES9306A 6-speed / ES11109DD 9-speed' },
          { label: 'Penggerak', value: '6x2' },
        ],
      },
      {
        title: 'Dimensi & kapasitas',
        items: [
          { label: 'Wheelbase', value: '4.115+1.370 hingga 5.825+1.370 mm' },
          { label: 'Cabin-to-End', value: '6.535–9.840 mm' },
          { label: 'GVW', value: '26.000 kg' },
          { label: 'Tangki bahan bakar', value: '200 liter' },
          { label: 'Ban', value: '11.00-20-16PR' },
        ],
      },
    ],
  },

  'isuzu-giga-fvz': {
    note: 'Spesifikasi GIGA FVZ pada brosur resmi Isuzu GIGA EURO4.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Model mesin', value: '6HK1-TCS' },
          { label: 'Isi silinder', value: '7.790 cc' },
          { label: 'Tenaga maksimum', value: '285 PS / 2.400 rpm' },
          { label: 'Torsi maksimum', value: '90 kg.m / 1.450–2.400 rpm' },
          { label: 'Transmisi', value: 'ES11109DD, 9 percepatan' },
          { label: 'Penggerak', value: '6x4' },
        ],
      },
      {
        title: 'Dimensi & kapasitas',
        items: [
          { label: 'Wheelbase', value: '3.565+1.370 hingga 5.825+1.370 mm' },
          { label: 'Cabin-to-End', value: '5.460–9.840 mm' },
          { label: 'GVW', value: '26.000 kg' },
          { label: 'Tangki bahan bakar', value: '200 liter' },
          { label: 'Ban', value: '11.00-20-16PR' },
        ],
      },
    ],
  },

  'isuzu-giga-gxz': {
    note: 'Spesifikasi GXZ K ABS pada brosur resmi GIGA Tractor Head EURO4.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Model mesin', value: '6NX1-TCS' },
          { label: 'Isi silinder', value: '7.790 cc' },
          { label: 'Tenaga maksimum', value: '350 PS / 2.000 rpm' },
          { label: 'Torsi maksimum', value: '135 kg.m / 1.300–1.700 rpm' },
          { label: 'Transmisi', value: 'MEB9, 9 percepatan' },
          { label: 'Penggerak', value: '6x4' },
        ],
      },
      {
        title: 'Kapasitas & operasional',
        items: [
          { label: 'GCW', value: '46.100 kg' },
          { label: 'Tangki bahan bakar', value: '200 liter' },
          { label: 'Ban', value: '295/80R22.5' },
          { label: 'Sistem rem', value: 'Full Air Brake + ABS' },
          { label: 'Daya tanjak maksimum', value: '30%' },
          { label: 'Kecepatan maksimum', value: '107 km/jam' },
        ],
      },
    ],
  },

  'isuzu-d-max': {
    note: 'Spesifikasi utama dirangkum dari brosur D-MAX 2026 dan halaman resmi Isuzu.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Model mesin', value: 'RZ4E-TC 1.9 L Common Rail' },
          { label: 'Isi silinder', value: '1.898 cc' },
          { label: 'Tenaga maksimum', value: '150 PS / 3.600 rpm' },
          { label: 'Torsi maksimum', value: '35,7 kg.m' },
          { label: 'Transmisi', value: 'Manual 6 percepatan' },
          { label: 'Mode 4x4', value: '4H / 4L + Rear Differential Lock' },
        ],
      },
      {
        title: 'Operasional',
        items: [
          { label: 'Kapasitas tangki', value: '76 liter' },
          { label: 'Water wading depth', value: '800 mm' },
          { label: 'Kapasitas penumpang', value: '2–5 orang tergantung varian' },
          { label: 'Fitur keselamatan', value: 'ABS, EBD, BA, ESC, TCS, HSA, HDC' },
        ],
      },
    ],
  },

  'isuzu-mu-x': {
    note: 'Spesifikasi utama dirangkum dari halaman resmi Isuzu MU-X 4x4 dan brosur yang tersedia di folder Drive.',
    groups: [
      {
        title: 'Mesin & drivetrain',
        items: [
          { label: 'Mesin', value: 'RZ4E 1.9 L Turbo-Diesel' },
          { label: 'Tenaga maksimum', value: '150 PS' },
          { label: 'Torsi maksimum', value: '350 Nm / 1.800–2.600 rpm' },
          { label: 'Transmisi', value: '6-Speed Tiptronic Automatic' },
          { label: 'Penggerak', value: '4WD Shift-on-the-Fly' },
          { label: 'Off-road support', value: 'Rough Terrain Mode + Rear Differential Lock' },
        ],
      },
      {
        title: 'Dimensi & kapasitas',
        items: [
          { label: 'P × L × T', value: '4.850 × 1.870 × 1.815 mm' },
          { label: 'Wheelbase', value: '2.855 mm' },
          { label: 'Kapasitas penumpang', value: '7 orang' },
          { label: 'GVW', value: '2.800 kg' },
          { label: 'Tangki bahan bakar', value: '80 liter' },
        ],
      },
    ],
  },
};

export const getProductTechnicalSpecs = (slug: string) => productTechnicalSpecs[slug];
