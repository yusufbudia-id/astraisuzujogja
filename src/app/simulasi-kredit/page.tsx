'use client';

import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/lib/products-data';
import { openWhatsApp } from '@/lib/whatsapp';
import { Calculator, Check, Copy, Info, MessageCircle, ShieldAlert } from 'lucide-react';

const money = (value: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
const thousands = (value: number) => new Intl.NumberFormat('id-ID').format(Math.round(value));
const parseMoney = (value: string) => Number(value.replace(/\D/g, '')) || 0;
const TENORS = [12, 24, 36, 48, 60];
const CARRY_ADJUSTMENT_PP = 2; // Adaptasi dari CreditSimulator.tsx: +0.02 terhadap rate bunga dasar.
const inputClass = 'mt-2 w-full min-w-0 border border-[#D8DEE4] bg-white px-4 py-3 text-sm font-semibold text-[#152230] outline-none transition focus:border-[#D71920]';

function AmountField({ label, value, onChange, hint }: { label: string; value: number; onChange: (n: number) => void; hint?: string }) {
  return <label className="block"><span className="text-[11px] font-black uppercase tracking-[.12em] text-[#556373]">{label}</span><div className="mt-2 flex items-center border border-[#D8DEE4] bg-white px-4 focus-within:border-[#D71920]"><span className="text-sm font-semibold text-[#7F8995]">Rp</span><input inputMode="numeric" aria-label={label} value={thousands(value)} onChange={e => onChange(parseMoney(e.target.value))} className="w-full min-w-0 bg-transparent px-3 py-3 text-base font-bold outline-none" /></div>{hint && <span className="mt-1 block text-[11px] leading-5 text-[#7F8995]">{hint}</span>}</label>;
}

export default function CreditSimulatorPage() {
  const [slug, setSlug] = useState(products[0]?.slug ?? 'isuzu-traga');
  const current = useMemo(() => products.find(p => p.slug === slug) ?? products[0], [slug]);
  const [variantName, setVariantName] = useState(products[0]?.variants[0]?.name ?? '');
  const [region, setRegion] = useState<'AB' | 'AA'>('AB');
  const [price, setPrice] = useState(0);
  const [dp, setDp] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tenor, setTenor] = useState(48);
  const [payment, setPayment] = useState<'ADDB' | 'ADDM'>('ADDB');
  const [baseRateInput, setBaseRateInput] = useState('');
  const [applyCarryMarkup, setApplyCarryMarkup] = useState(true);
  const [admin, setAdmin] = useState(0);
  const [fiducia, setFiducia] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [provisionInput, setProvisionInput] = useState('0');
  const [copied, setCopied] = useState(false);

  const baseRate = baseRateInput.trim() === '' ? NaN : Number(baseRateInput.replace(',', '.'));
  const provision = Number(provisionInput.replace(',', '.'));
  const validRate = Number.isFinite(baseRate) && baseRate >= 0 && baseRate <= 50;
  const validProvision = Number.isFinite(provision) && provision >= 0 && provision <= 25;
  const rate = validRate ? baseRate + (applyCarryMarkup ? CARRY_ADJUSTMENT_PP : 0) : NaN;
  const totalDp = dp + discount;
  const n = tenor / 12;
  const factor = validRate ? (1 + rate / 100 * n) / tenor : NaN;
  const fees = admin + fiducia + insurance;
  // Untuk ADDM, cicilan pertama diambil dari TDP. Penyelesaian aljabar menjaga
  // konsistensi antara angsuran pertama dan pokok yang dibiayai.
  const monthlyRaw = payment === 'ADDB'
    ? (price - totalDp + fees) * (1 + (validProvision ? provision / 100 : 0)) * factor
    : ((price - totalDp + fees) * (1 + (validProvision ? provision / 100 : 0)) * factor) / (1 - (1 + (validProvision ? provision / 100 : 0)) * factor);
  const installment = Number.isFinite(monthlyRaw) ? Math.round(monthlyRaw / 1000) * 1000 : NaN;
  const financed = price - totalDp + fees + (payment === 'ADDM' && Number.isFinite(installment) ? installment : 0);
  const valid = price > 0 && dp >= 0 && totalDp >= price * 0.15 && totalDp < price && validRate && validProvision && Number.isFinite(installment) && installment > 0 && financed > 0 && (payment !== 'ADDM' || totalDp >= installment);
  const reasons = [
    price <= 0 ? 'Masukkan harga OTR aktual terlebih dahulu.' : '',
    !validRate ? 'Masukkan bunga dasar Carry yang terverifikasi untuk tenor dan skema pilihan.' : '',
    !validProvision ? 'Provisi harus berupa persentase 0–25%.' : '',
    price > 0 && totalDp < price * .15 ? 'Total DP harus minimal 15% dari OTR (asumsi validasi dari komponen asal).' : '',
    price > 0 && totalDp >= price ? 'Total DP harus lebih kecil daripada OTR.' : '',
    validRate && payment === 'ADDM' && Number.isFinite(installment) && totalDp < installment ? 'ADDM memerlukan total DP yang cukup untuk angsuran pertama.' : '',
  ].filter(Boolean);
  const unitLabel = [current?.shortName, variantName].filter(Boolean).join(' — ');
  const summary = `SIMULASI KREDIT ISUZU (ESTIMASI, BUKAN PENAWARAN RESMI)\nUnit: ${unitLabel}\nWilayah: ${region}\nHarga OTR: ${money(price)}\nDP bayar: ${money(dp)}\nSubsidi/diskon DP: ${money(discount)}\nTotal DP: ${money(totalDp)}\nTenor: ${tenor} bulan\nSkema: ${payment}\nBunga dasar referensi Carry: ${baseRateInput}% flat/tahun\nPenyesuaian Carry: ${applyCarryMarkup ? '+2' : '0'} poin persentase\nBunga simulasi: ${rate.toFixed(2)}% flat/tahun\nBiaya adm/fidusia/asuransi: ${money(fees)}\nProvisi: ${provision}%\nEstimasi angsuran: ${money(installment)}/bulan\nMohon konfirmasi rate leasing Isuzu dan rincian penawaran aktual.`;

  const switchCar = (next: string) => {
    setSlug(next);
    setVariantName(products.find(p => p.slug === next)?.variants[0]?.name ?? '');
    setPrice(0); // Katalog proyek tidak memuat harga OTR terverifikasi.
  };
  const handleCopy = async () => { if (!valid) return; try { await navigator.clipboard.writeText(summary); setCopied(true); window.setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); } };

  return <div className="site-shell min-h-screen bg-[#F3F5F6] text-[#192431]"><Header /><main>
    <section className="bg-[#101B27] px-5 pb-14 pt-32 text-white sm:px-7 lg:px-10"><div className="mx-auto max-w-[1320px]">
      <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[.24em] text-[#FF545B]"><Calculator size={17} /> Astra Isuzu Jogja</div>
      <h1 className="mt-5 max-w-4xl text-[clamp(2.5rem,5.8vw,5.6rem)] font-black uppercase leading-[.99] tracking-[-.055em]">CREDIT <span className="text-white/50">SIMULATOR.</span></h1>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">Hitung estimasi pembiayaan kendaraan Isuzu dengan pendekatan bunga flat yang diadaptasi dari kalkulator Carry Pick Up. Rate dasar dan harga OTR harus diisi berdasarkan informasi terbaru dari leasing.</p>
    </div></section>
    <section className="mx-auto grid max-w-[1320px] gap-0 px-4 py-10 sm:px-7 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-16">
      <div className="border border-[#DBE0E4] bg-white p-5 sm:p-8 lg:p-10">
        <div className="mb-7 flex items-center justify-between gap-3 border-b border-[#E6E8EA] pb-5"><h2 className="text-xl font-black uppercase tracking-tight">Pengaturan Pembiayaan</h2><span className="bg-[#FCE9EB] px-3 py-2 text-[10px] font-black uppercase text-[#C51723]">Estimasi</span></div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block sm:col-span-2"><span className="text-[11px] font-black uppercase tracking-[.12em] text-[#556373]">Model kendaraan</span><select className={inputClass} value={slug} onChange={e => switchCar(e.target.value)}>{products.map(p => <option key={p.slug} value={p.slug}>{p.name}</option>)}</select></label>
          <label className="block"><span className="text-[11px] font-black uppercase tracking-[.12em] text-[#556373]">Varian</span><select className={inputClass} value={variantName} onChange={e => setVariantName(e.target.value)}>{current?.variants.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}</select></label>
          <label className="block"><span className="text-[11px] font-black uppercase tracking-[.12em] text-[#556373]">Wilayah OTR</span><select className={inputClass} value={region} onChange={e => setRegion(e.target.value as 'AB' | 'AA')}><option value="AB">AB — Yogyakarta</option><option value="AA">AA — Kedu/Magelang</option></select></label>
          <div className="sm:col-span-2"><AmountField label="Harga OTR (diisi manual)" value={price} onChange={setPrice} hint="Tidak mengambil harga otomatis: harga OTR tiap varian/wilayah perlu dikonfirmasi." /></div>
          <div className="sm:col-span-2 rounded-md border border-[#F2CAD0] bg-[#FFF5F5] p-5"><AmountField label="DP Bayar (uang yang disiapkan customer)" value={dp} onChange={setDp} /><input aria-label="Persentase total DP" type="range" min="15" max="90" step="1" value={price > 0 ? Math.max(15, Math.min(90, totalDp / price * 100)) : 15} onChange={e => setDp(Math.max(0, Math.round(price * Number(e.target.value) / 100 - discount)))} className="mt-4 w-full accent-[#D71920]" /><p className="mt-2 text-xs font-bold text-[#B7202C]">Total DP termasuk subsidi: {price ? (totalDp / price * 100).toFixed(1) : '—'}%</p></div>
          <AmountField label="Subsidi / diskon untuk DP" value={discount} onChange={setDiscount} hint="Bila tidak ada program terverifikasi, isi 0." />
          <label className="block"><span className="text-[11px] font-black uppercase tracking-[.12em] text-[#556373]">Skema pembayaran</span><select className={inputClass} value={payment} onChange={e => setPayment(e.target.value as 'ADDB' | 'ADDM')}><option value="ADDB">ADDB — Angsuran di belakang</option><option value="ADDM">ADDM — Angsuran di muka</option></select></label>
          <div className="sm:col-span-2"><span className="text-[11px] font-black uppercase tracking-[.12em] text-[#556373]">Tenor</span><div className="mt-2 grid grid-cols-5 gap-2">{TENORS.map(t => <button type="button" key={t} onClick={() => setTenor(t)} className={`border px-1 py-3 text-xs font-black ${tenor === t ? 'border-[#D71920] bg-[#D71920] text-white' : 'border-[#D8DEE4] bg-white text-[#5B6671]'}`}>{t / 12} TH</button>)}</div></div>
        </div>
        <div className="mt-8 border-t border-[#E6E8EA] pt-6"><h3 className="text-[12px] font-black uppercase tracking-[.12em]">Rate Carry Pick Up — Parameter Simulasi</h3><p className="mt-2 text-xs leading-6 text-[#637181]">Pada komponen referensi, rate Carry ditambahkan 2 poin persentase di atas rate dasar. Tabel dasar ADDM/ADDB berada di file lain yang belum tersedia, sehingga nilainya harus diisi manual. Ini bukan rate resmi Isuzu.</p>
          <div className="mt-4 grid gap-5 sm:grid-cols-2"><label className="block"><span className="text-[11px] font-black uppercase tracking-[.1em] text-[#556373]">Bunga dasar Carry (% flat/tahun)</span><input type="text" inputMode="decimal" placeholder="Masukkan rate leasing" className={inputClass} value={baseRateInput} onChange={e => setBaseRateInput(e.target.value)} /></label><div className="flex items-center gap-3"><input id="markup" type="checkbox" checked={applyCarryMarkup} onChange={e => setApplyCarryMarkup(e.target.checked)} className="h-4 w-4 accent-[#D71920]"/><label htmlFor="markup" className="text-sm font-semibold">Tambahkan +2 poin seperti file referensi</label></div></div>
          <div className="mt-4 grid gap-5 sm:grid-cols-3"><AmountField label="Admin" value={admin} onChange={setAdmin}/><AmountField label="Fidusia" value={fiducia} onChange={setFiducia}/><AmountField label="Asuransi total" value={insurance} onChange={setInsurance}/></div>
          <label className="mt-5 block max-w-[230px]"><span className="text-[11px] font-black uppercase tracking-[.1em] text-[#556373]">Provisi (%)</span><input type="text" inputMode="decimal" value={provisionInput} onChange={e => setProvisionInput(e.target.value)} className={inputClass}/></label>
        </div>
      </div>
      <aside className="border border-t-0 border-[#DBE0E4] bg-[#EAEFF2] p-5 sm:p-8 lg:sticky lg:top-24 lg:col-start-2 lg:row-start-1 lg:self-start lg:border-l-0 lg:border-t lg:p-9"><p className="text-[11px] font-black uppercase tracking-[.2em] text-[#6B7681]">Estimasi angsuran bulanan</p><div aria-live="polite" className="mt-3 break-words text-[clamp(2rem,3.2vw,3.4rem)] font-black tracking-[-.05em]">{valid ? money(installment) : '—'}</div><p className="mt-2 text-xs text-[#66727D]">{valid ? `${tenor} bulan · ${payment} · bunga ${rate.toFixed(2)}% flat/tahun` : 'Lengkapi harga OTR, DP, dan rate yang valid.'}</p>
        <div className="mt-8 space-y-0 border-t border-[#C9D2D9]">{[['Unit', unitLabel], ['OTR', price ? money(price) : 'Belum diisi'], ['DP bayar', money(dp)], ['Subsidi DP', money(discount)], ['Total DP', money(totalDp)], ['Biaya dibiayai', money(fees)], ['Rate simulasi', validRate ? `${rate.toFixed(2)}%` : 'Belum diisi'], ['Tenor', `${tenor} bulan`]].map(([label, value]) => <div key={label} className="flex items-start justify-between gap-4 border-b border-[#C9D2D9] py-3 text-xs"><span className="text-[#65737F]">{label}</span><strong className="max-w-[65%] text-right text-[#1A2836]">{value}</strong></div>)}</div>
        {reasons.length > 0 && <div className="mt-5 flex gap-3 border-l-4 border-[#D71920] bg-white p-4 text-xs leading-6 text-[#6F343A]"><ShieldAlert size={19} className="mt-1 shrink-0"/><div>{reasons.map(r => <p key={r}>{r}</p>)}</div></div>}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"><button type="button" disabled={!valid} onClick={handleCopy} className="flex items-center justify-center gap-2 border border-[#AEBAC4] px-5 py-4 text-xs font-black disabled:cursor-not-allowed disabled:opacity-40"><Copy size={16}/>{copied ? 'Tersalin' : 'Salin Hasil'}</button><button type="button" disabled={!valid} onClick={() => openWhatsApp(`Halo Mas Yusuf, saya ingin konsultasi:\n${summary}`)} className="flex flex-1 items-center justify-center gap-2 bg-[#D71920] px-5 py-4 text-xs font-black text-white transition hover:bg-[#B81016] disabled:cursor-not-allowed disabled:opacity-40"><MessageCircle size={16}/> Kirim ke WhatsApp</button></div>
        <div className="mt-6 flex gap-3 text-[11px] leading-6 text-[#62707C]"><Info size={18} className="mt-1 shrink-0"/><p>Perhitungan memakai pendekatan bunga flat, bukan quotation resmi atau persetujuan kredit. Harga, biaya, premi asuransi, rate leasing, TDP dan skema pelunasan bisa berbeda. Nilai yang belum diisi diasumsikan 0 untuk biaya, bukan berarti bebas biaya.</p></div>
        <div className="mt-5 flex gap-2 text-xs font-semibold text-[#6C7883]"><Check size={16} className="text-[#D71920]"/> Menggunakan katalog varian Isuzu yang sudah ada</div>
      </aside>
    </section>
  </main><Footer /></div>;
}
