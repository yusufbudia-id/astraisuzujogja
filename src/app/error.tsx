'use client';

import { useEffect } from 'react';
import { RotateCcw, Home } from 'lucide-react';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-[#20201E] px-5 text-white">
      <div className="w-full max-w-3xl border-y border-white/12 py-14 text-center sm:py-20">
        <p className="text-[10px] font-extrabold uppercase tracking-[.3em] text-[#EF2B31]">Terjadi kendala</p>
        <h1 className="mt-5 text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[.92] tracking-[-.06em]">Halaman belum bisa dimuat.</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/48">Coba muat ulang bagian ini. Jika masih terjadi, kembali ke beranda dan lanjutkan dari sana.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button onClick={reset} className="inline-flex items-center gap-2 bg-[#D71920] px-5 py-3.5 text-xs font-extrabold text-white"><RotateCcw size={15} /> Coba Lagi</button>
          <a href="/" className="inline-flex items-center gap-2 border border-white/18 px-5 py-3.5 text-xs font-extrabold text-white"><Home size={15} /> Beranda</a>
        </div>
      </div>
    </main>
  );
}
