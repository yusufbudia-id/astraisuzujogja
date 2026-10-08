export type PriceScope = 'OTR' | 'LOCO_MALANG';

export interface ProductPriceEntry {
  label: string;
  otr: number;
  scope?: PriceScope;
  note?: string;
}

export interface ProductPriceSummary {
  amount: number;
  scope: PriceScope;
  label: string;
}

export const priceSource = {
  title: 'NIK 2026 — SPPH Agustus 2026',
  note: 'Harga bersumber dari tabel pricelist yang diberikan pengguna. Harga, program, BBN, dan ketersediaan dapat berubah; konfirmasi sebelum transaksi.',
} as const;

export const productPriceEntries: Record<string, ProductPriceEntry[]> = {
  'isuzu-traga': [
    { label: 'TRAGA PU E4 (PICK UP)', otr: 298_000_000 },
    { label: 'TRAGA PU E4 (BOX)', otr: 298_000_000 },
    { label: 'TRAGA BLACK PU E4 (PICK UP)', otr: 300_000_000 },
    { label: 'TRAGA BLACK PU E4 (BOX)', otr: 300_000_000 },
    { label: 'TRAGA RTU BOX SEMI ALUMUNIUM', otr: 342_000_000 },
    { label: 'TRAGA PU FD (AC)', otr: 307_000_000 },
    { label: 'TRAGA PU BLACK PREMIUM (AC)', otr: 309_000_000 },
  ],
  'isuzu-elf-nlr': [
    { label: 'NLR T E4 (BAK BESI, BOX)', otr: 435_000_000 },
    { label: 'NLR T LONG E4 (BAK BESI, BOX)', otr: 455_000_000 },
  ],
  'isuzu-elf-nmr': [
    { label: 'NMR E4 (BAK KAYU)', otr: 512_000_000 },
    { label: 'NMR E4 (BAK BESI)', otr: 512_000_000 },
    { label: 'NMR E4 (BOX)', otr: 512_000_000 },
    { label: 'NMR E4 (REFRIGERATOR)', otr: 512_000_000 },
    { label: 'NMR LONG E4 (BAK KAYU)', otr: 523_000_000 },
    { label: 'NMR LONG E4 (BAK BESI)', otr: 523_000_000 },
    { label: 'NMR LONG E4 (BOX)', otr: 523_000_000 },
    { label: 'NMR LONG E4 (CAR CARIER)', otr: 523_000_000 },
    { label: 'NMR HD 5.8 E4 (BAK KAYU)', otr: 523_000_000 },
    { label: 'NMR HD 5.8 E4 (BAK BESI)', otr: 523_000_000 },
    { label: 'NMR HD 5.8 E4 (BOX)', otr: 523_000_000 },
    { label: 'NMR HD 5.8 E4 (REFRIGERATOR)', otr: 523_000_000 },
    { label: 'NMR HD 5.8 E4 (DUMP)', otr: 523_000_000 },
    { label: 'NMR HD 6.5 (DUMP)', otr: 534_000_000 },
  ],
  'isuzu-elf-microbus': [
    { label: 'NLR BL (MIKROBUS, LOCO MALANG)', otr: 456_000_000, scope: 'LOCO_MALANG', note: 'Referensi Loco Malang, bukan OTR Yogyakarta.' },
  ],
  'isuzu-elf-nqr': [
    { label: 'NQR B (MEDIUM BUS, LOCO MALANG)', otr: 529_000_000, scope: 'LOCO_MALANG', note: 'Referensi Loco Malang, bukan OTR Yogyakarta.' },
  ],
};

export const formatRupiah = (amount: number) => `Rp${new Intl.NumberFormat('id-ID').format(amount)}`;

export const formatCompactPrice = (amount: number) => {
  const juta = amount / 1_000_000;
  return `Rp${new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 }).format(juta)} jt`;
};

export const getProductPriceEntries = (slug: string) => productPriceEntries[slug] ?? [];

export const getProductPriceSummary = (slug: string): ProductPriceSummary | null => {
  const entries = getProductPriceEntries(slug);
  if (!entries.length) return null;

  const otrEntries = entries.filter((entry) => (entry.scope ?? 'OTR') === 'OTR');
  if (otrEntries.length) {
    const amount = Math.min(...otrEntries.map((entry) => entry.otr));
    return { amount, scope: 'OTR', label: `Mulai ${formatCompactPrice(amount)}` };
  }

  const amount = Math.min(...entries.map((entry) => entry.otr));
  return { amount, scope: 'LOCO_MALANG', label: `Referensi ${formatCompactPrice(amount)}` };
};
