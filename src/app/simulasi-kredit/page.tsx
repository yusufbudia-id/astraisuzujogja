'use client';

import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/lib/products-data';
import { getProductPriceEntries } from '@/lib/pricing-data';
import { openWhatsApp } from '@/lib/whatsapp';
import leasingData from '@/data/leasingData.json';
import { Calculator, MessageCircle, Info, Copy, Check } from 'lucide-react';

type PaymentType = 'ADDM' | 'ADDB';
type Option = { name: string; price: number | null; note?: string };
const money = (n: number) => `Rp${new Intl.NumberFormat('id-ID').format(Math.round(n))}`;
const digits = (n: number) => n > 0 ? new Intl.NumberFormat('id-ID').format(n) : '';
const numberInput = (s: string) => Number(s.replace(/[^0-9]/g, '')) || 0;

// Same OJK Region 3 combination-insurance calculation as the Suzuki source.
function hitungAsuransiKombi(otr: number, tahun: number): number {
  let total = 0;
  const depreciation = leasingData.depreciation as Record<string, number>;
  for (let i = 1; i <= tahun; i++) {
    const nilai = otr * (depreciation[String(i)] || 0.5);
    const rate = leasingData.ojkWil3.find(r => nilai > r.minOtr && nilai <= r.maxOtr);
    if (rate) total += nilai * (i === 1 ? rate.allRisk : rate.tlo);
  }
  return total + leasingData.flatFeePerYear * tahun;
}


// Katalog varian dan daftar harga adalah data yang berbeda. Jangan menganggap
// varian katalog berharga sama hanya karena nama keluarga produknya sama.
function optionsFor(slug: string): Option[] {
  const product = products.find(p => p.slug === slug);
  const priceEntries = getProductPriceEntries(slug);
  const priced = priceEntries.map(p => ({
    name: p.label,
    // Harga Loco Malang bukan harga OTR Jogja: jangan isi otomatis.
    price: (p.scope ?? 'OTR') === 'OTR' ? p.otr : null,
    note: p.scope === 'LOCO_MALANG' ? 'Referensi Loco Malang tersedia, tetapi OTR Yogyakarta harus diisi manual.' : p.note,
  }));
  const names = new Set(priced.map(p => p.name.toUpperCase()));
  const others = (product?.variants ?? [])
    .filter(v => !names.has(v.name.toUpperCase()))
    .map(v => ({ name: v.name, price: null }));
  return [...priced, ...others].length ? [...priced, ...others] : [{ name: product?.name ?? 'Unit Isuzu', price: null }];
}

export default function CreditSimulatorPage() {
  const [selectedSlug, setSelectedSlug] = useState(products[0]?.slug ?? 'isuzu-traga');
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [paymentType, setPaymentType] = useState<PaymentType>('ADDB');
  const [hargaMobil, setHargaMobil] = useState(0);
  const [dpBayar, setDpBayar] = useState(0);
  const diskon = 0;
  const uping = 1;
  const [tenor, setTenor] = useState(60);
  const biayaFidusia = 503000;
  const biayaAdminPH = 6300000;
  const provisiPct = 1;
  const [isCopied, setIsCopied] = useState(false);

  const currentCar = products.find(c => c.slug === selectedSlug) ?? products[0];
  const currentVariants = useMemo(() => optionsFor(selectedSlug), [selectedSlug]);
  const currentVariant = currentVariants[selectedVariantIndex] ?? currentVariants[0];

  // Jangan timpa harga manual saat user mengubah nilai DP atau tenor.
  // Reset hanya ketika unit/varian berubah.
  useEffect(() => {
    setHargaMobil(currentVariant?.price ?? 0);
    setDpBayar(currentVariant?.price ? Math.round(currentVariant.price * 0.2) : 0);
  }, [selectedSlug, selectedVariantIndex, currentVariant?.price]);

  const years = tenor / 12;
  const rates = leasingData.interestRates as Record<string, Record<string, number>>;
  const rateKey = paymentType === 'ADDM' ? 'PASS_DP_RINGAN_ADDM' : 'PASS_DP_RINGAN_ADDB';
  const rateDasar = rates[rateKey]?.[String(years)];
  // Suzuki's Carry branch: base PASS rate + 2 percentage points.
  const effectiveRate = rateDasar === undefined ? null : rateDasar + 2 + uping;
  const asuransi = hargaMobil > 0 ? hitungAsuransiKombi(hargaMobil, years) : 0;
  const dpGross = dpBayar + diskon;
  const dpPct = hargaMobil > 0 ? dpGross / hargaMobil * 100 : 0;
  const valid = hargaMobil > 0 && effectiveRate !== null && dpGross >= hargaMobil * 0.15
    && dpGross < hargaMobil && biayaFidusia >= 0 && biayaAdminPH >= 0;

  const result = useMemo(() => {
    if (!valid || effectiveRate === null) return null;
    const years = tenor / 12;
    const provisi = provisiPct / 100;
    const interestFactor = 1 + (effectiveRate / 100) * years;
    let installment = 0;
    if (paymentType === 'ADDB') {
      const downPaymentNet = dpGross - biayaFidusia;
      const loanPrincipal = hargaMobil - downPaymentNet;
      const financed = loanPrincipal * (1 + provisi) + asuransi + biayaAdminPH;
      installment = financed * interestFactor / tenor;
    } else {
      // Mengikuti formula ADDM pada komponen yang diberikan pengguna.
      const C = ((1 + provisi) * interestFactor) / tenor;
      const denominator = 1 - C;
      if (denominator <= 0) return null;
      installment = (((hargaMobil - dpGross + biayaFidusia) * (1 + provisi) + asuransi + biayaAdminPH) * interestFactor / tenor) / denominator;
    }
    if (!Number.isFinite(installment) || installment <= 0) return null;
    const cicilan = Math.round(installment / 1000) * 1000;
    const uangMukaAsli = dpGross - biayaFidusia - (paymentType === 'ADDM' ? cicilan : 0);
    const pokok = hargaMobil - uangMukaAsli;
    return { cicilan, uangMukaAsli, pokokUtang: pokok * (1 + provisi) + asuransi + biayaAdminPH, tdpKotor: dpGross };
  }, [valid, effectiveRate, hargaMobil, dpGross, tenor, paymentType, provisiPct, asuransi, biayaAdminPH, biayaFidusia]);

  const summary = `SIMULASI KREDIT ISUZU (ESTIMASI)\nUnit: ${currentCar?.name ?? 'Isuzu'}\nVarian: ${currentVariant?.name ?? '-'}\nHarga OTR: ${hargaMobil ? money(hargaMobil) : 'Belum diisi'}\nDP Bayar: ${money(dpBayar)}\nSubsidi: ${money(diskon)}\nSkema: ${paymentType}\nTenor: ${tenor} bulan\nBunga dasar PASS: ${rateDasar === undefined ? '-' : `${rateDasar}%`}\nRate Suzuki Carry (+2 pp), upping ${uping}%\nEstimasi Angsuran: ${result ? `${money(result.cicilan)}/bulan` : 'Belum dapat dihitung'}\nCatatan: hitungan indikatif, bukan penawaran final leasing. Mohon konfirmasi rate, OTR, asuransi, dan biaya.`;

  async function copy() {
    try { await navigator.clipboard.writeText(summary); setIsCopied(true); window.setTimeout(() => setIsCopied(false), 2000); }
    catch { setIsCopied(false); }
  }

  const inputClass = 'w-full border-b-2 border-gray-200 bg-transparent py-2 text-base font-black text-gray-900 outline-none focus:border-gray-900';
  const labelClass = 'mb-2 block text-[10px] font-black uppercase tracking-[.18em] text-gray-400';
  return (
    <div className="site-shell min-h-screen bg-[#f3f4f6] text-[#202225]">
      <Header />
      <main className="mx-auto max-w-[1440px] px-5 pb-20 pt-32 sm:px-7 lg:px-10">
        <div className="mb-9">
          <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#D71920]">Astra Isuzu Jogja / Pembiayaan</p>
          <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-gray-900 sm:text-5xl">Simulasi Kredit Isuzu</h1>
          <p className="mt-3 max-w-3xl text-sm text-gray-500">Tampilan mengikuti simulator contoh. Harga otomatis hanya untuk unit yang ada di pricelist proyek; unit lainnya dapat diisi manual.</p>
        </div>
        <div className="overflow-hidden border border-gray-200 bg-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col border-b border-gray-100 p-6 md:p-10 lg:col-span-7 lg:border-b-0 lg:border-r">
              <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-gray-900 text-white"><Calculator size={24} strokeWidth={1.5}/></div>
                  <div><h2 className="text-xl font-black uppercase tracking-tighter text-gray-900">Simulasi Kredit</h2><p className="text-xs font-bold uppercase tracking-widest text-gray-400">Asumsi Rate Carry Pick Up</p></div>
                </div>
                <div className="flex rounded-md bg-gray-100 p-1">
                  {(['ADDM','ADDB'] as const).map(type => <button type="button" key={type} onClick={() => setPaymentType(type)} className={`rounded-sm px-4 py-1.5 text-[10px] font-black uppercase tracking-wider ${paymentType === type ? 'bg-white text-gray-900 shadow' : 'text-gray-400'}`}>{type}</button>)}
                </div>
              </div>
              <div className="space-y-7">
                <div><label className={labelClass}>Unit Kendaraan</label><select className={inputClass} value={selectedSlug} onChange={e => {setSelectedSlug(e.target.value); setSelectedVariantIndex(0);}}>{products.map(p => <option value={p.slug} key={p.slug}>{p.name}</option>)}</select></div>
                <div><label className={labelClass}>Tipe / Varian</label><select className={inputClass} value={selectedVariantIndex} onChange={e => setSelectedVariantIndex(Number(e.target.value))}>{currentVariants.map((v,i) => <option key={`${v.name}-${i}`} value={i}>{v.name}</option>)}</select></div>
                <div><label className={labelClass}>Harga OTR {currentVariant?.price ? '(dari pricelist)' : '(isi manual)'}</label><div className="flex items-center border-b-2 border-gray-200 focus-within:border-gray-900"><span className="mr-2 text-sm font-bold text-gray-400">Rp</span><input type="text" inputMode="numeric" className="w-full bg-transparent py-2 text-lg font-black text-gray-900 outline-none" placeholder="Masukkan harga OTR" value={digits(hargaMobil)} onChange={e => setHargaMobil(numberInput(e.target.value))}/></div>{!currentVariant?.price && <p className="mt-2 text-xs text-amber-700">Harga OTR belum tercantum untuk pilihan ini. Isi berdasarkan penawaran aktual.</p>}{currentVariant?.note && <p className="mt-2 text-xs text-amber-700">{currentVariant.note}</p>}</div>
                <div className="rounded-lg border-2 border-red-100 bg-red-50/50 p-4 md:p-6">
                  <div className="mb-2 flex flex-wrap items-end justify-between gap-2"><label className="text-sm font-black uppercase tracking-[.16em] text-red-600">Masukkan DP</label><span className="bg-red-100 px-2 py-1 text-[10px] font-black text-red-900">Total DP (TDP): {dpPct.toFixed(2)}%</span></div>
                  <div className="flex items-center border-b-2 border-red-200 focus-within:border-red-600"><span className="mr-3 text-2xl font-bold text-red-400">Rp</span><input type="text" inputMode="numeric" placeholder="0" value={digits(dpBayar)} onChange={e => setDpBayar(numberInput(e.target.value))} className="w-full bg-transparent py-2 text-2xl font-black text-red-600 outline-none md:text-4xl"/></div>
                  <input aria-label="Persentase total DP" type="range" min={15} max={90} step={1} value={Math.max(15,Math.min(90,dpPct))} onChange={e => setDpBayar(Math.max(0, Math.round(hargaMobil * Number(e.target.value)/100 - diskon)))} disabled={!hargaMobil} className="mt-6 w-full accent-red-600"/>
                  {hargaMobil > 0 && dpGross < hargaMobil * .15 && <p className="mt-2 text-xs font-bold text-red-700">Minimal TDP yang diasumsikan dalam kalkulator adalah 15% dari OTR.</p>}
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-gray-50 p-6 md:p-10 lg:col-span-5">
              <div className="mb-6"><p className={labelClass}>Estimasi Angsuran</p><p className="break-words text-3xl font-black tracking-tighter text-gray-900 md:text-4xl xl:text-5xl">{result ? money(result.cicilan) : '—'}<span className="ml-1 text-sm font-bold text-gray-400">/BLN</span></p></div>
              <div className="mb-6 space-y-2">
                {([['Harga OTR', money(hargaMobil)],['DP Bayar',money(dpBayar)],['+ Subsidi Dealer',money(diskon)],['= Total DP (TDP)',money(dpGross)],['Pokok Utang + Biaya',result ? money(result.pokokUtang) : '—']] as const).map(([label,value]) => <div key={label} className="flex justify-between gap-3 border-b border-gray-200 py-2"><span className={`text-[10px] font-bold uppercase tracking-wider ${label === 'DP Bayar' ? 'text-red-600' : 'text-gray-500'}`}>{label}</span><span className="text-right text-xs font-black text-gray-900">{value}</span></div>)}
              </div>
              <div className="mb-6"><label className={`${labelClass} mb-4`}>Jangka Waktu</label><div className="grid grid-cols-5 gap-2">{[12,24,36,48,60].map(t => <button key={t} type="button" onClick={() => setTenor(t)} className={`border py-3 text-xs font-black ${tenor === t ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 bg-white text-gray-500'}`}>{t/12} THN</button>)}</div></div>
              <div className="mb-6 border-l-4 border-red-600 bg-red-50 p-4 text-xs font-semibold leading-5 text-gray-700">
                Skema rate Suzuki Carry: {rateDasar?.toFixed(2) ?? '—'}% + 2 poin Carry + {uping.toFixed(1)}% upping = <strong>{effectiveRate?.toFixed(2) ?? '—'}% flat/tahun</strong>.
                Asuransi kombinasi otomatis {money(asuransi)}.
              </div>
              <div className="mt-auto"><div className="mb-6 flex gap-3 border-l-4 border-gray-900 bg-gray-200/50 p-4 text-gray-600"><Info size={16} className="mt-0.5 shrink-0"/><p className="text-[10px] font-bold leading-relaxed">Hitungan estimasi, bukan penawaran leasing. Rate Suzuki Carry dihitung otomatis dari tabel sumber dengan +2 poin; tarif aktual dari leasing dapat berbeda. {paymentType === 'ADDM' ? 'Skema ADDM memasukkan angsuran pertama dalam DP.' : 'Skema ADDB menggunakan angsuran dibayar di belakang.'}</p></div><div className="flex gap-3"><button type="button" onClick={copy} className="flex items-center justify-center gap-2 border-2 border-gray-200 px-5 py-4 text-xs font-black uppercase text-gray-700"><span>{isCopied ? <Check size={18}/> : <Copy size={18}/>}</span><span className="hidden sm:inline">{isCopied ? 'Tersalin':'Salin'}</span></button><button type="button" onClick={() => openWhatsApp(`Halo Mas Yusuf, saya ingin konsultasi pembiayaan Isuzu:\n${summary}`)} className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] px-4 py-4 text-xs font-black uppercase tracking-wider text-white hover:bg-[#1ebe5d]"><MessageCircle size={18}/> Kirim ke WhatsApp</button></div></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
