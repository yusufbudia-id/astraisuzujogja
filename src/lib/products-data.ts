export interface ProductVariant {
  name: string;
  engine: string;
  power: string;
  grossWeight?: string;
  cabinToEnd?: string;
  seating?: string;
}

export interface ProductType {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  segment: 'Light Commercial Vehicle' | 'Commercial Vehicle';
  description: string;
  useCases: string[];
  image: string;
  imageAlt: string;
  variants: ProductVariant[];
  family?: 'TRAGA' | 'ELF' | 'GIGA' | 'D-MAX' | 'MU-X';
  catalogGroup?: 'Pick Up' | 'ELF' | 'GIGA' | '4x4 & SUV';
}

export const officialCatalogUrl = 'https://astraisuzu.co.id/product/';
export const otoTruckCatalogUrl = 'https://www.oto.com/truk-baru/isuzu';

export const officialProductImages = {
  // Official Isuzu EURO4/2026 assets sourced from the user-shared Isuzu Drive folder,
  // optimized locally to WebP for fast web delivery.
  traga: '/images/isuzu/models/traga.webp',
  elf: '/images/isuzu/models/elf-nmr.webp',
  giga: '/images/isuzu/models/giga-fvz.webp',
  dmax: '/images/isuzu/models/d-max.webp',
  mux: '/images/isuzu/models/mu-x.webp',
  elfNlr: '/images/isuzu/models/elf-nlr.webp',
  elfNmr: '/images/isuzu/models/elf-nmr.webp',
  elfNps: '/images/isuzu/models/elf-nps.webp',
  elfNqr: '/images/isuzu/models/elf-nqr.webp',
  elfMicrobus: '/images/isuzu/models/elf-microbus.webp',
  gigaFrr: '/images/isuzu/models/giga-frr.webp',
  gigaFtr: '/images/isuzu/models/giga-ftr.webp',
  gigaFvr: '/images/isuzu/models/giga-fvr.webp',
  gigaFvm: '/images/isuzu/models/giga-fvm.webp',
  gigaFvz: '/images/isuzu/models/giga-fvz.webp',
  gigaGxz: '/images/isuzu/models/giga-gxz.webp',
} as const;

const tragaVariants: ProductVariant[] = [
  { name: 'TRAGA BLIND VAN', engine: '2,499 cc', power: '80 PS / 3.500 rpm', grossWeight: '2.950 kg' },
  { name: 'TRAGA-BOX', engine: '2,499 cc', power: '80 PS / 3.800 rpm', grossWeight: '2.950 kg', cabinToEnd: '2.745 mm' },
  { name: 'TRAGA-CHASSIS NON BLOWER', engine: '2,499 cc', power: '80 PS / 2.600 rpm', grossWeight: '2.950 kg' },
  { name: 'TRAGA-PICK UP FD', engine: '2,499 cc', power: '80 PS / 3.800 rpm', grossWeight: '2.950 kg' },
];

const elfVariants: ProductVariant[] = [
  { name: 'ELF-NPS', engine: '4,778 cc', power: '150 PS / 2.600 rpm', cabinToEnd: '4.192 mm' },
  { name: 'ELF-NMR L', engine: '4,778 cc', power: '150 PS / 2.600 rpm', grossWeight: '8.250 kg', cabinToEnd: '4.287 mm' },
  { name: 'ELF-NMR HD 6.5', engine: '4,778 cc', power: '150 PS / 2.600 rpm', grossWeight: '8.250 kg', cabinToEnd: '4.530 mm' },
  { name: 'ELF-NMR HD 5.8', engine: '4,778 cc', power: '150 PS / 2.600 rpm', grossWeight: '8.250 kg', cabinToEnd: '4.530 mm' },
  { name: 'ELF-NMR L BOX', engine: '4,570 cc', power: '125 PS / 2.900 rpm', grossWeight: '8.000 kg', cabinToEnd: '5.302 mm' },
  { name: 'ELF-NQR B', engine: '4,570 cc', power: '125 PS / 2.900 rpm', grossWeight: '5.100 kg', seating: '20 orang' },
  { name: 'ELF-NLR B L Microbus (RTU)', engine: '2,999 cc', power: '125 PS / 2.900 rpm', grossWeight: '5.100 kg', seating: '20 orang' },
  { name: 'ELF-NLR B L Cabin Chassis', engine: '2,999 cc', power: '120 PS / 2.600 rpm', grossWeight: '5.100 kg', seating: '20 orang' },
  { name: 'ELF-NLR 55B LX Microbus KCB (AC)', engine: '2,771 cc', power: '100 PS / 3.400 rpm', grossWeight: '5.100 kg', seating: '20 orang' },
  { name: 'ELF-NLR 55B Microbus KCB (AC)', engine: '2,771 cc', power: '100 PS / 3.400 rpm', grossWeight: '5.100 kg', seating: '16 orang' },
  { name: 'ELF-NLR B Microbus (RTU)', engine: '2,999 cc', power: '120 PS / 2.600 rpm', grossWeight: '5.100 kg', seating: '16 orang' },
  { name: 'ELF-NLR B Cabin Chassis', engine: '2,999 cc', power: '120 PS / 2.600 rpm', grossWeight: '5.100 kg', seating: '16 orang' },
  { name: 'ELF-NLR L', engine: '2,999 cc', power: '120 PS / 2.600 rpm', grossWeight: '5.100 kg', cabinToEnd: '4.897 mm' },
  { name: 'ELF-NLR 71T', engine: '4,570 cc', power: '125 PS / 2.900 rpm', grossWeight: '5.100 kg', cabinToEnd: '2.987 mm' },
  { name: 'ELF-NLR 55T LX', engine: '2,771 cc', power: '100 PS / 3.400 rpm', grossWeight: '5.100 kg', cabinToEnd: '4.287 mm' },
  { name: 'ELF-NLR 55T X', engine: '2,771 cc', power: '100 PS / 3.400 rpm', grossWeight: '5.100 kg', cabinToEnd: '2.987 mm' },
  { name: 'ELF-NLR', engine: '2,999 cc', power: '120 PS / 2.600 rpm', grossWeight: '5.100 kg', cabinToEnd: '3.127 mm' },
  { name: 'ELF-NMR', engine: '4,778 cc', power: '150 PS / 2.600 rpm', grossWeight: '8.250 kg', cabinToEnd: '4.830 mm' },
];

const gigaVariants: ProductVariant[] = [
  { name: 'GIGA-FTR P', engine: '5,193 cc', power: '210 PS / 2.600 rpm', grossWeight: '14.000 kg', cabinToEnd: '6.440 mm' },
  { name: 'GIGA-GXZ K ABS', engine: '7,790 cc', power: '350 PS / 2.000 rpm', grossWeight: '46.100 kg' },
  { name: 'GIGA-GVZ K HP ABS', engine: '7,790 cc', power: '285 PS / 2.400 rpm', grossWeight: '38.100 kg' },
  { name: 'GIGA-GVR J HP ABS', engine: '7,790 cc', power: '285 PS / 2.400 rpm', grossWeight: '38.100 kg' },
  { name: 'GIGA-FVZ U HP', engine: '7,790 cc', power: '285 PS / 2.400 rpm', grossWeight: '26.000 kg', cabinToEnd: '9.840 mm' },
  { name: 'GIGA-FVZ N HP', engine: '7,790 cc', power: '285 PS / 2.400 rpm', grossWeight: '26.000 kg', cabinToEnd: '5.460 mm' },
  { name: 'GIGA-FVZ L HP MX', engine: '7,790 cc', power: '285 PS / 2.400 rpm', grossWeight: '26.000 kg', cabinToEnd: '6.545 mm' },
  { name: 'GIGA-FVM N HP ABS', engine: '7,790 cc', power: '285 PS / 2.400 rpm', grossWeight: '26.000 kg', cabinToEnd: '6.545 mm' },
  { name: 'GIGA-FVM U HP', engine: '7,790 cc', power: '285 PS / 2.400 rpm', grossWeight: '26.000 kg', cabinToEnd: '9.840 mm' },
  { name: 'GIGA-FVM U', engine: '7,790 cc', power: '245 PS / 2.400 rpm', grossWeight: '26.000 kg', cabinToEnd: '9.840 mm' },
  { name: 'GIGA-FVM N', engine: '7,790 cc', power: '245 PS / 2.400 rpm', grossWeight: '26.000 kg', cabinToEnd: '6.840 mm' },
  { name: 'GIGA-FVR U', engine: '7,790 cc', power: '245 PS / 2.400 rpm', grossWeight: '16.000 kg', cabinToEnd: '9.839 mm' },
  { name: 'GIGA-FVR Q', engine: '7,790 cc', power: '245 PS / 2.400 rpm', grossWeight: '16.000 kg', cabinToEnd: '7.589 mm' },
  { name: 'GIGA-FVR S', engine: '7,790 cc', power: '245 PS / 2.400 rpm', grossWeight: '16.000 kg', cabinToEnd: '8.540 mm' },
  { name: 'GIGA-FVR P', engine: '7,790 cc', power: '245 PS / 2.400 rpm', grossWeight: '16.000 kg', cabinToEnd: '6.740 mm' },
  { name: 'GIGA-FVR 34 P', engine: '7,790 cc', power: '245 PS / 2.400 rpm', grossWeight: '16.000 kg', cabinToEnd: '6.740 mm' },
  { name: 'GIGA-FVR L D', engine: '7,790 cc', power: '245 PS / 2.400 rpm', grossWeight: '16.000 kg', cabinToEnd: '5.490 mm' },
  { name: 'GIGA-FTR T', engine: '5,193 cc', power: '210 PS / 2.600 rpm', grossWeight: '14.000 kg', cabinToEnd: '8.790 mm' },
  { name: 'GIGA-FRR Q', engine: '5,193 cc', power: '190 PS / 2.600 rpm', grossWeight: '10.000 kg', cabinToEnd: '6.900 mm' },
  { name: 'GIGA-FTR S', engine: '5,193 cc', power: '210 PS / 2.600 rpm', grossWeight: '14.000 kg', cabinToEnd: '7.940 mm' },
  { name: 'GIGA-FVR 34 P HP', engine: '7,790 cc', power: '245 PS / 2.400 rpm', grossWeight: '16.000 kg', cabinToEnd: '6.740 mm' },
];

const dmaxVariants: ProductVariant[] = [
  { name: 'Isuzu D-MAX DC', engine: '1,898 cc', power: '150 PS / 3.600 rpm', seating: '5 orang' },
  { name: 'Isuzu D-MAX RODEO M/T', engine: '1,898 cc', power: '150 PS / 3.600 rpm', seating: '5 orang' },
  { name: 'Isuzu D-MAX SC', engine: '1,898 cc', power: '150 PS / 3.600 rpm', seating: '2 orang' },
];

const muxVariants: ProductVariant[] = [
  { name: 'Isuzu MU-X – 4X4', engine: '1,898 cc', power: '150 PS / 3.600 rpm', seating: '7 orang' },
];

const startsWith = (prefix: string) => (variant: ProductVariant) => variant.name.startsWith(prefix);
const contains = (text: string) => (variant: ProductVariant) => variant.name.includes(text);
const elfMicrobus = elfVariants.filter(contains('Microbus'));
const elfNlr = elfVariants.filter((v) => startsWith('ELF-NLR')(v) && !v.name.includes('Microbus'));
const elfNmr = elfVariants.filter(startsWith('ELF-NMR'));
const elfNps = elfVariants.filter(startsWith('ELF-NPS'));
const elfNqr = elfVariants.filter(startsWith('ELF-NQR'));
const gigaFrr = gigaVariants.filter(startsWith('GIGA-FRR'));
const gigaFtr = gigaVariants.filter(startsWith('GIGA-FTR'));
const gigaFvr = gigaVariants.filter(startsWith('GIGA-FVR'));
const gigaFvm = gigaVariants.filter(startsWith('GIGA-FVM'));
const gigaFvz = gigaVariants.filter(startsWith('GIGA-FVZ'));
const gigaGxz = gigaVariants.filter(startsWith('GIGA-GXZ'));

// Five broad families remain the homepage navigation layer and preserve the
// complete Astra Isuzu variant catalog already collected for this project.
export const productFamilies: ProductType[] = [
  {
    id: 1, slug: 'isuzu-traga', name: 'ISUZU TRAGA', shortName: 'TRAGA', category: 'Pick Up',
    segment: 'Light Commercial Vehicle', family: 'TRAGA', catalogGroup: 'Pick Up',
    description: 'Keluarga kendaraan niaga ringan untuk distribusi, retail, logistik harian, dan beragam kebutuhan karoseri.',
    useCases: ['Distribusi & logistik', 'Retail & FMCG', 'Usaha harian'], image: officialProductImages.traga,
    imageAlt: 'Isuzu Traga Pick Up', variants: tragaVariants,
  },
  {
    id: 2, slug: 'isuzu-elf', name: 'ISUZU ELF', shortName: 'ELF', category: 'Light Truck & Mobil MPV',
    segment: 'Commercial Vehicle', family: 'ELF', catalogGroup: 'ELF',
    description: 'Lineup light truck dan kendaraan penumpang dengan pilihan chassis, box, microbus, dan konfigurasi operasional yang luas.',
    useCases: ['Distribusi', 'Travel & transportasi', 'Angkutan barang'], image: officialProductImages.elf,
    imageAlt: 'Isuzu ELF', variants: elfVariants,
  },
  {
    id: 3, slug: 'isuzu-giga', name: 'ISUZU GIGA', shortName: 'GIGA', category: 'Medium Truck & Tractor Head',
    segment: 'Commercial Vehicle', family: 'GIGA', catalogGroup: 'GIGA',
    description: 'Lineup medium duty dan heavy-duty Isuzu untuk logistik, konstruksi, distribusi berat, serta kebutuhan tractor head.',
    useCases: ['Logistik berat', 'Konstruksi', 'Fleet perusahaan'], image: officialProductImages.giga,
    imageAlt: 'Isuzu GIGA', variants: gigaVariants,
  },
  {
    id: 4, slug: 'isuzu-d-max', name: 'ISUZU D-MAX', shortName: 'D-MAX', category: 'Pick Up 4x4',
    segment: 'Light Commercial Vehicle', family: 'D-MAX', catalogGroup: '4x4 & SUV',
    description: 'Pick up 4x4 Isuzu untuk kebutuhan kerja lapangan, operasional perusahaan, perkebunan, dan medan yang menuntut traksi lebih.',
    useCases: ['Operasional lapangan', 'Pertanian & perkebunan', 'Fleet perusahaan'], image: officialProductImages.dmax,
    imageAlt: 'Isuzu D-MAX', variants: dmaxVariants,
  },
  {
    id: 5, slug: 'isuzu-mu-x', name: 'ISUZU MU-X', shortName: 'MU-X', category: 'Mobil SUV',
    segment: 'Light Commercial Vehicle', family: 'MU-X', catalogGroup: '4x4 & SUV',
    description: 'SUV 4x4 Isuzu untuk mobilitas profesional dan kebutuhan operasional yang membutuhkan kabin penumpang serta kapabilitas lebih.',
    useCases: ['Mobilitas profesional', 'Operasional lapangan', 'Perjalanan bisnis'], image: officialProductImages.mux,
    imageAlt: 'Isuzu MU-X 4x4', variants: muxVariants,
  },
];

// Model-level catalog follows the naming users commonly encounter on Oto's
// Isuzu truck catalog, while its variant/spec data is kept from Astra Isuzu.
export const products: ProductType[] = [
  productFamilies[0],
  {
    id: 101, slug: 'isuzu-elf-nlr', name: 'ISUZU ELF NLR', shortName: 'ELF NLR', category: 'Light Truck 4 Ban',
    segment: 'Commercial Vehicle', family: 'ELF', catalogGroup: 'ELF',
    description: 'Light truck ELF untuk distribusi ringan, chassis usaha, dan kebutuhan angkut harian dengan beberapa pilihan panjang chassis.',
    useCases: ['Distribusi ringan', 'Chassis usaha', 'Retail & FMCG'], image: officialProductImages.elfNlr, imageAlt: 'Isuzu ELF NLR', variants: elfNlr,
  },
  {
    id: 102, slug: 'isuzu-elf-nmr', name: 'ISUZU ELF NMR', shortName: 'ELF NMR', category: 'Light Truck 6 Ban',
    segment: 'Commercial Vehicle', family: 'ELF', catalogGroup: 'ELF',
    description: 'ELF 6 ban untuk angkutan barang dan distribusi dengan pilihan chassis serta konfigurasi heavy duty.',
    useCases: ['Distribusi', 'Box & cargo', 'Operasional usaha'], image: officialProductImages.elfNmr, imageAlt: 'Isuzu ELF NMR', variants: elfNmr,
  },
  {
    id: 103, slug: 'isuzu-elf-nps', name: 'ISUZU ELF NPS', shortName: 'ELF NPS', category: 'Light Truck 4x4',
    segment: 'Commercial Vehicle', family: 'ELF', catalogGroup: 'ELF',
    description: 'ELF untuk kebutuhan operasional yang memerlukan kemampuan kerja di medan dan kondisi jalan yang lebih menantang.',
    useCases: ['Konstruksi ringan', 'Perkebunan', 'Operasional lapangan'], image: officialProductImages.elfNps, imageAlt: 'Isuzu ELF NPS', variants: elfNps,
  },
  {
    id: 104, slug: 'isuzu-elf-nqr', name: 'ISUZU ELF NQR', shortName: 'ELF NQR', category: 'Bus',
    segment: 'Commercial Vehicle', family: 'ELF', catalogGroup: 'ELF',
    description: 'Platform ELF untuk kebutuhan angkutan penumpang dan konfigurasi bus.',
    useCases: ['Bus', 'Travel', 'Angkutan penumpang'], image: officialProductImages.elfNqr, imageAlt: 'Isuzu ELF NQR', variants: elfNqr,
  },
  {
    id: 105, slug: 'isuzu-elf-microbus', name: 'ISUZU ELF MICROBUS', shortName: 'ELF MICROBUS', category: 'Microbus',
    segment: 'Commercial Vehicle', family: 'ELF', catalogGroup: 'ELF',
    description: 'Pilihan microbus ELF untuk travel, shuttle, pariwisata, dan kebutuhan transportasi penumpang.',
    useCases: ['Travel', 'Shuttle', 'Pariwisata'], image: officialProductImages.elfMicrobus, imageAlt: 'Isuzu ELF Microbus', variants: elfMicrobus,
  },
  {
    id: 201, slug: 'isuzu-giga-frr', name: 'ISUZU GIGA FRR', shortName: 'GIGA FRR', category: 'Medium Truck',
    segment: 'Commercial Vehicle', family: 'GIGA', catalogGroup: 'GIGA',
    description: 'Medium truck GIGA untuk distribusi antarkota dan kebutuhan body cargo/box.',
    useCases: ['Distribusi antarkota', 'Box', 'Logistik'], image: officialProductImages.gigaFrr, imageAlt: 'Isuzu GIGA FRR', variants: gigaFrr,
  },
  {
    id: 202, slug: 'isuzu-giga-ftr', name: 'ISUZU GIGA FTR', shortName: 'GIGA FTR', category: 'Medium Truck',
    segment: 'Commercial Vehicle', family: 'GIGA', catalogGroup: 'GIGA',
    description: 'Medium truck 4x2 untuk distribusi berat dengan beberapa pilihan wheelbase/cabin-to-end.',
    useCases: ['Distribusi berat', 'Wing box', 'Logistik'], image: officialProductImages.gigaFtr, imageAlt: 'Isuzu GIGA FTR', variants: gigaFtr,
  },
  {
    id: 203, slug: 'isuzu-giga-fvr', name: 'ISUZU GIGA FVR', shortName: 'GIGA FVR', category: 'Medium Truck',
    segment: 'Commercial Vehicle', family: 'GIGA', catalogGroup: 'GIGA',
    description: 'Platform GIGA dengan pilihan chassis yang luas untuk kebutuhan cargo dan body usaha skala besar.',
    useCases: ['Cargo', 'Fleet', 'Distribusi berat'], image: officialProductImages.gigaFvr, imageAlt: 'Isuzu GIGA FVR', variants: gigaFvr,
  },
  {
    id: 204, slug: 'isuzu-giga-fvm', name: 'ISUZU GIGA FVM', shortName: 'GIGA FVM', category: 'Medium Truck 6x2',
    segment: 'Commercial Vehicle', family: 'GIGA', catalogGroup: 'GIGA',
    description: 'GIGA 6x2 untuk kebutuhan angkut berat, fleet logistik, dan konfigurasi body berdimensi besar.',
    useCases: ['Fleet logistik', 'Angkut berat', 'Long haul'], image: officialProductImages.gigaFvm, imageAlt: 'Isuzu GIGA FVM', variants: gigaFvm,
  },
  {
    id: 205, slug: 'isuzu-giga-fvz', name: 'ISUZU GIGA FVZ', shortName: 'GIGA FVZ', category: 'Medium Truck 6x4',
    segment: 'Commercial Vehicle', family: 'GIGA', catalogGroup: 'GIGA',
    description: 'GIGA 6x4 untuk pekerjaan berat, konstruksi, dan kebutuhan operasional dengan tonase besar.',
    useCases: ['Konstruksi', 'Tipper', 'Heavy duty'], image: officialProductImages.gigaFvz, imageAlt: 'Isuzu GIGA FVZ', variants: gigaFvz,
  },
  {
    id: 206, slug: 'isuzu-giga-gxz', name: 'ISUZU GIGA GXZ', shortName: 'GIGA GXZ', category: 'Tractor Head',
    segment: 'Commercial Vehicle', family: 'GIGA', catalogGroup: 'GIGA',
    description: 'Tractor head Isuzu untuk kebutuhan trailer dan operasi logistik berat.',
    useCases: ['Tractor head', 'Trailer', 'Logistik berat'], image: officialProductImages.gigaGxz, imageAlt: 'Isuzu GIGA GXZ', variants: gigaGxz,
  },
  productFamilies[3],
  productFamilies[4],
];

export const totalOfficialVariants = productFamilies.reduce((sum, product) => sum + product.variants.length, 0);
export const truckModelCount = 12;

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug) ?? productFamilies.find((product) => product.slug === slug);

export const allProductPages = [
  ...products,
  ...productFamilies.filter((family) => !products.some((product) => product.slug === family.slug)),
];

export interface ShowroomGalleryItem {
  src: string;
  title: string;
  caption: string;
}

const showroomGalleryBySlug: Record<string, ShowroomGalleryItem[]> = {
  'isuzu-traga': [
    { src: officialProductImages.traga, title: 'Traga Pick Up', caption: 'Tampilan utama untuk kebutuhan distribusi harian dan usaha niaga ringan.' },
    { src: '/images/isuzu/showroom/traga-black-premium.png', title: 'Traga Black Premium', caption: 'Tampilan Traga Black Premium dengan karakter yang lebih eksklusif.' },
  ],
  'isuzu-elf': [
    { src: officialProductImages.elfNlr, title: 'ELF NLR', caption: 'Konfigurasi light truck 4 ban untuk distribusi ringan dan chassis usaha.' },
    { src: officialProductImages.elfNmr, title: 'ELF NMR', caption: 'Pilihan 6 ban untuk box, cargo, dan operasional distribusi yang lebih berat.' },
    { src: officialProductImages.elfNps, title: 'ELF NPS 4x4', caption: 'Unit operasional untuk medan kerja yang lebih menantang.' },
    { src: officialProductImages.elfNqr, title: 'ELF NQR Bus', caption: 'Platform bus untuk kebutuhan travel dan angkutan penumpang.' },
    { src: officialProductImages.elfMicrobus, title: 'ELF Microbus', caption: 'Cocok untuk shuttle, travel, dan kebutuhan transportasi penumpang.' },
    { src: '/images/isuzu/showroom/elf-nlr-rtu.png', title: 'ELF NLR RTU', caption: 'Konfigurasi RTU untuk melihat alternatif penggunaan keluarga ELF NLR.' },
  ],
  'isuzu-elf-nlr': [
    { src: officialProductImages.elfNlr, title: 'ELF NLR', caption: 'Foto utama unit NLR untuk halaman detail produk.' },
    { src: '/images/isuzu/showroom/elf-nlr-rtu.png', title: 'ELF NLR RTU', caption: 'Konfigurasi RTU sebagai alternatif pada keluarga ELF NLR.' },
    { src: officialProductImages.elfMicrobus, title: 'ELF Microbus', caption: 'Inspirasi turunan bodi ELF untuk transportasi penumpang.' },
  ],
  'isuzu-elf-nmr': [
    { src: officialProductImages.elfNmr, title: 'ELF NMR', caption: 'ELF NMR untuk kebutuhan distribusi dan angkutan barang.' },
    { src: officialProductImages.elfNps, title: 'ELF NPS 4x4', caption: 'Pilihan keluarga ELF untuk kebutuhan operasional lapangan.' },
    { src: officialProductImages.elfNlr, title: 'ELF NLR', caption: 'Referensi keluarga ELF lain untuk membandingkan ukuran dan segmen.' },
  ],
  'isuzu-elf-nps': [
    { src: officialProductImages.elfNps, title: 'ELF NPS 4x4', caption: 'Unit 4x4 untuk medan berat dan operasional lapangan.' },
    { src: officialProductImages.elfNmr, title: 'ELF NMR', caption: 'Perbandingan dengan varian ELF untuk kebutuhan distribusi umum.' },
    { src: officialProductImages.elfNlr, title: 'ELF NLR', caption: 'Referensi keluarga ELF yang lebih ringan dan ekonomis.' },
  ],
  'isuzu-elf-nqr': [
    { src: officialProductImages.elfNqr, title: 'ELF NQR Bus', caption: 'Visual bus ELF untuk travel dan angkutan penumpang.' },
    { src: officialProductImages.elfMicrobus, title: 'ELF Microbus', caption: 'Alternatif kelas penumpang yang tetap terasa seperti halaman brosur.' },
    { src: '/images/isuzu/showroom/elf-nlr-rtu.png', title: 'ELF NLR RTU', caption: 'Referensi konfigurasi lain dalam keluarga kendaraan penumpang ELF.' },
  ],
  'isuzu-elf-microbus': [
    { src: officialProductImages.elfMicrobus, title: 'ELF Microbus', caption: 'Tampilan utama microbus untuk shuttle, travel, dan pariwisata.' },
    { src: officialProductImages.elfNqr, title: 'ELF NQR Bus', caption: 'Pembanding alternatif angkutan penumpang dalam keluarga ELF.' },
    { src: '/images/isuzu/showroom/elf-nlr-rtu.png', title: 'ELF NLR RTU', caption: 'Konfigurasi tambahan untuk membandingkan pilihan dalam keluarga ELF.' },
  ],
  'isuzu-giga': [
    { src: officialProductImages.gigaFrr, title: 'GIGA FRR', caption: 'Pilihan medium truck untuk distribusi antarkota dan logistik box.' },
    { src: officialProductImages.gigaFtr, title: 'GIGA FTR', caption: 'Medium truck 4x2 untuk kebutuhan distribusi berat.' },
    { src: officialProductImages.gigaFvr, title: 'GIGA FVR', caption: 'Platform cargo dan fleet dengan konfigurasi chassis luas.' },
    { src: officialProductImages.gigaFvm, title: 'GIGA FVM', caption: 'Konfigurasi 6x2 untuk angkut berat dan dimensi body besar.' },
    { src: officialProductImages.gigaFvz, title: 'GIGA FVZ', caption: 'Tampilan heavy duty untuk konstruksi dan pekerjaan berat.' },
    { src: officialProductImages.gigaGxz, title: 'GIGA GXZ', caption: 'Tractor head untuk trailer dan logistik berat.' },
  ],
  'isuzu-giga-frr': [
    { src: officialProductImages.gigaFrr, title: 'GIGA FRR', caption: 'Unit utama FRR untuk kebutuhan box dan logistik.' },
    { src: officialProductImages.gigaFtr, title: 'GIGA FTR', caption: 'Pembanding lini GIGA pada segmen distribusi berat.' },
    { src: officialProductImages.gigaFvr, title: 'GIGA FVR', caption: 'Opsi lain dalam keluarga GIGA untuk kapasitas lebih besar.' },
  ],
  'isuzu-giga-ftr': [
    { src: officialProductImages.gigaFtr, title: 'GIGA FTR', caption: 'GIGA FTR untuk distribusi berat dan kebutuhan wing box.' },
    { src: officialProductImages.gigaFrr, title: 'GIGA FRR', caption: 'Perbandingan dengan FRR pada keluarga GIGA.' },
    { src: officialProductImages.gigaFvm, title: 'GIGA FVM', caption: 'Alternatif kapasitas lebih besar untuk fleet logistik.' },
  ],
  'isuzu-giga-fvr': [
    { src: officialProductImages.gigaFvr, title: 'GIGA FVR', caption: 'Tampilan utama FVR untuk fleet dan body usaha skala besar.' },
    { src: officialProductImages.gigaFvm, title: 'GIGA FVM', caption: 'Pembanding lini GIGA pada konfigurasi 6x2.' },
    { src: officialProductImages.gigaFvz, title: 'GIGA FVZ', caption: 'Alternatif heavy duty untuk pekerjaan lebih berat.' },
  ],
  'isuzu-giga-fvm': [
    { src: officialProductImages.gigaFvm, title: 'GIGA FVM', caption: 'Konfigurasi 6x2 untuk dimensi body dan muatan besar.' },
    { src: officialProductImages.gigaFvr, title: 'GIGA FVR', caption: 'Perbandingan dengan varian cargo/fleet di keluarga GIGA.' },
    { src: officialProductImages.gigaGxz, title: 'GIGA GXZ', caption: 'Referensi tractor head untuk operasional logistik berat.' },
  ],
  'isuzu-giga-fvz': [
    { src: officialProductImages.gigaFvz, title: 'GIGA FVZ', caption: 'GIGA FVZ untuk kebutuhan tipper, konstruksi, dan pekerjaan heavy duty.' },
    { src: officialProductImages.gigaFvr, title: 'GIGA FVR', caption: 'Perbandingan dengan lini GIGA untuk distribusi umum.' },
    { src: officialProductImages.gigaGxz, title: 'GIGA GXZ', caption: 'Pilihan lain dalam keluarga heavy-duty GIGA.' },
  ],
  'isuzu-giga-gxz': [
    { src: officialProductImages.gigaGxz, title: 'GIGA GXZ', caption: 'Tractor head untuk kebutuhan trailer dan angkutan berat.' },
    { src: officialProductImages.gigaFvz, title: 'GIGA FVZ', caption: 'Pembanding heavy-duty dalam keluarga GIGA.' },
    { src: officialProductImages.gigaFvm, title: 'GIGA FVM', caption: 'Alternatif fleet logistik dengan konfigurasi muatan besar.' },
  ],
  'isuzu-d-max': [
    { src: officialProductImages.dmax, title: 'D-MAX', caption: 'Pick up 4x4 untuk pekerjaan lapangan dan operasional perusahaan.' },
    { src: officialProductImages.mux, title: 'MU-X', caption: 'Saudara satu keluarga 4x4 & SUV untuk mobilitas profesional.' },
  ],
  'isuzu-mu-x': [
    { src: officialProductImages.mux, title: 'MU-X', caption: 'SUV 4x4 untuk mobilitas profesional dan perjalanan bisnis.' },
    { src: officialProductImages.dmax, title: 'D-MAX', caption: 'Alternatif kendaraan kerja di keluarga 4x4 Isuzu.' },
  ],
};

export const getProductShowroomGallery = (product: ProductType): ShowroomGalleryItem[] => {
  const directGallery = showroomGalleryBySlug[product.slug];
  if (directGallery?.length) return directGallery;

  const family = product.family;
  const familyGallery = family
    ? Object.entries(showroomGalleryBySlug).find(([slug]) => slug === `isuzu-${family.toLowerCase()}`)?.[1]
    : undefined;

  return familyGallery?.length
    ? familyGallery
    : [{ src: product.image, title: product.name, caption: 'Foto utama unit untuk membantu Anda mengenali model yang dipilih.' }];
};
