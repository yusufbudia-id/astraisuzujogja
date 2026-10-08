'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FormEvent, useMemo, useState } from 'react';
import { products } from '@/lib/products-data';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

const dpOptions = ['20%', '25%', '30%', '40%', '50%'];
const tenorOptions = ['1 tahun', '2 tahun', '3 tahun', '4 tahun', '5 tahun'];

export default function Credit() {
  const [productSlug, setProductSlug] = useState(products[0]?.slug ?? 'isuzu-traga');
  const selectedProduct = useMemo(() => products.find((product) => product.slug === productSlug) ?? products[0], [productSlug]);
  const [variant, setVariant] = useState(products[0]?.variants[0]?.name ?? '');
  const [dp, setDp] = useState('20%');
  const [tenor, setTenor] = useState('5 tahun');

  const changeProduct = (slug: string) => {
    setProductSlug(slug);
    const nextProduct = products.find((product) => product.slug === slug);
    setVariant(nextProduct?.variants[0]?.name ?? '');
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    openWhatsApp(
      `Halo Mas Yusuf, saya ingin simulasi pembiayaan ${variant || selectedProduct?.name}. Rencana DP ${dp}, tenor ${tenor}. Mohon rincian estimasi angsuran, biaya awal, harga OTR Yogyakarta, dan program leasing terbaru.`
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#202225]">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[#24211E] px-5 pb-14 pt-32 text-white sm:px-7 lg:px-10 lg:pb-18">
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
          <div className="relative mx-auto max-w-[1440px]">
            <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#EF2B31]">Simulasi Pembiayaan</p>
            <div className="mt-5 grid gap-7 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[.96] tracking-[-.05em] sm:text-6xl">Mulai dari unit yang benar-benar Anda butuhkan.</h1>
              <p className="max-w-xl text-sm leading-7 text-white/60 lg:justify-self-end">
                Pilih keluarga produk, varian, rencana uang muka, dan tenor. Yusuf akan menyiapkan simulasi berdasarkan program leasing dan harga yang berlaku saat pengajuan.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-6 px-5 py-12 sm:px-7 lg:grid-cols-[.72fr_1.28fr] lg:px-10 lg:py-16">
          <div className="lg:pr-8">
            <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-[#D71920]">Cara kerja</p>
            <h2 className="mt-3 max-w-md text-4xl font-semibold leading-[1.02] tracking-[-.04em]">Pilih unit. Tentukan rencana. Minta quotation.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#202225]/58">
              Angka cicilan tidak dibuat secara generik karena harga unit, karoseri, bunga, asuransi, biaya administrasi, dan program leasing dapat berbeda.
            </p>

            <div className="mt-8 border-t border-[#202225]/12">
              {[
                ['01', 'Pilih keluarga produk', 'Mulai dari Traga, ELF, GIGA, D-MAX, atau MU-X.'],
                ['02', 'Pilih varian', 'Pilih varian berdasarkan katalog produk Astra Isuzu yang tersedia.'],
                ['03', 'DP & tenor', 'Masukkan preferensi awal agar simulasi yang diberikan lebih relevan.'],
              ].map(([num, title, copy]) => (
                <div key={num} className="grid grid-cols-[44px_1fr] gap-4 border-b border-[#202225]/10 py-5">
                  <div className="text-[10px] font-extrabold tracking-[.18em] text-[#D71920]">{num}</div>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <p className="mt-1.5 text-sm leading-6 text-[#202225]/55">{copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 text-xs leading-6 text-[#202225]/55">
              <Check size={16} className="mt-1 shrink-0 text-[#D71920]" />
              <span>Persetujuan akhir tetap mengikuti kebijakan leasing, verifikasi dokumen, harga unit, asuransi, dan program yang berlaku.</span>
            </div>
          </div>

          <form onSubmit={submit} className="border border-[#202225]/12 bg-[#F1F2EF] p-6 shadow-[0_24px_70px_rgba(11,28,44,.06)] sm:p-8 lg:p-9">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#D71920]">01 / Keluarga Produk</div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => {
                  const active = product.slug === productSlug;
                  return (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => changeProduct(product.slug)}
                      className={`border px-4 py-4 text-left transition ${active ? 'border-[#D71920] bg-[#D71920] text-white' : 'border-[#202225]/12 bg-[#FBF8F3] hover:border-[#D71920]'}`}
                    >
                      <div className={`text-[9px] font-extrabold uppercase tracking-[.16em] ${active ? 'text-[#EF2B31]' : 'text-[#D71920]'}`}>{product.category}</div>
                      <div className="mt-1 text-lg font-semibold">{product.shortName}</div>
                      <div className={`mt-1 text-[11px] ${active ? 'text-white/55' : 'text-[#202225]/45'}`}>{product.variants.length} varian</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <label className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#D71920]" htmlFor="variant">02 / Varian</label>
              <select
                id="variant"
                value={variant}
                onChange={(event) => setVariant(event.target.value)}
                className="mt-3 w-full border border-[#202225]/12 bg-[#FBF8F3] px-4 py-4 text-sm font-semibold outline-none transition focus:border-[#D71920]"
              >
                {selectedProduct?.variants.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
              </select>
            </div>

            <ChoiceGroup label="03 / Rencana DP" options={dpOptions} value={dp} onChange={setDp} />
            <ChoiceGroup label="04 / Tenor" options={tenorOptions} value={tenor} onChange={setTenor} />

            <div className="mt-8 border-t border-[#202225]/12 pt-6">
              <div className="grid gap-3 sm:grid-cols-3">
                <Summary label="Unit" value={variant || selectedProduct?.shortName || '-'} />
                <Summary label="DP" value={dp} />
                <Summary label="Tenor" value={tenor.replace(' tahun', ' th')} />
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 bg-[#D71920] px-6 py-4 text-sm font-black text-white transition hover:bg-[#B81016]">
                <MessageCircle size={18} /> Minta Simulasi via WhatsApp <ArrowRight size={16} />
              </button>
              <p className="mt-4 text-center text-[11px] leading-5 text-[#202225]/45">Tidak ada biaya untuk meminta simulasi awal. Nilai final mengikuti quotation leasing.</p>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ChoiceGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <div className="mt-8">
      <div className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#D71920]">{label}</div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {options.map((option) => (
          <button key={option} type="button" onClick={() => onChange(option)} className={`border px-3 py-3 text-sm font-bold transition ${value === option ? 'border-[#D71920] bg-[#D71920] text-white' : 'border-[#202225]/12 bg-[#FBF8F3] hover:border-[#D71920]'}`}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[#202225]/10 bg-[#F1F2EF] p-3">
      <div className="text-[9px] font-extrabold uppercase tracking-[.14em] text-[#202225]/35">{label}</div>
      <div className="mt-1 truncate text-sm font-semibold">{value}</div>
    </div>
  );
}
