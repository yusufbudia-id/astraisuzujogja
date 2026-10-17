import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardList, Lightbulb, Truck } from 'lucide-react';

export default function ConsultationHomeSection() {
  return (
    <section id="konsultasi-armada" aria-labelledby="konsultasi-armada-title" className="relative overflow-hidden bg-[#f2f4f6] px-5 py-16 text-[#17202b] sm:px-7 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 overflow-hidden rounded-[4px] bg-white shadow-[0_24px_60px_rgba(18,27,39,.08)] lg:grid-cols-[1.1fr_.9fr]">
        <div className="px-6 pb-2 pt-9 sm:px-10 lg:py-14 lg:pl-14">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-black uppercase tracking-[.22em] text-[#d71920]"><span className="h-[3px] w-9 bg-[#d71920]" /> KONSULTAN ARMADA</p>
          <h2 id="konsultasi-armada-title" className="max-w-2xl text-[clamp(2rem,4.5vw,4.5rem)] font-black uppercase leading-[1.04] tracking-[-.045em]">Bingung memilih <span className="text-[#d71920]">truk untuk usaha?</span></h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#52606e] sm:text-base">Jawab beberapa pertanyaan singkat tentang kebutuhan muatan, medan jalan, dan jenis usaha. Dapatkan rekomendasi pilihan Isuzu beserta alasan yang bisa kamu pertimbangkan.</p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[#344353]">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-[#d71920]" /> Tanpa biaya</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-[#d71920]" /> Rekomendasi disertai alasan</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-[#d71920]" /> Bisa lanjut konsultasi sales</span>
          </div>
          <Link href="/konsultasi-armada" className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-[#d71920] px-7 py-3 text-xs font-black uppercase tracking-[.08em] text-white transition hover:bg-[#ac1219] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d71920]">Cari kendaraan yang cocok <ArrowRight size={18} /></Link>
        </div>
        <div className="relative flex h-full min-h-[330px] flex-col justify-center gap-4 bg-[#101b29] px-6 py-9 text-white sm:px-10 lg:min-h-[460px] lg:px-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 right-2 h-72 w-72 rounded-full border border-white/10" />
          <p className="relative text-xs font-extrabold uppercase tracking-[.2em] text-[#ff6b71]">Bagaimana cara kerjanya?</p>
          {[{num:'01',icon:ClipboardList,title:'Ceritakan kebutuhan',desc:'Jenis usaha, muatan, kondisi jalan, dan anggaran.'},{num:'02',icon:Truck,title:'Bandingkan pilihan',desc:'Lihat hingga tiga rekomendasi kendaraan Isuzu.'},{num:'03',icon:Lightbulb,title:'Pahami alasannya',desc:'Ketahui pertimbangan dan lanjutkan diskusi dengan sales.'}].map((step) => (
            <div key={step.num} className="relative flex items-start gap-4 border-b border-white/15 py-3 last:border-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 bg-white/10"><step.icon size={20} className="text-[#ff757a]" /></div>
              <div><div className="mb-1 text-[10px] font-black tracking-[.18em] text-[#ff757a]">{step.num}</div><h3 className="text-sm font-extrabold">{step.title}</h3><p className="mt-1 text-xs leading-5 text-white/65">{step.desc}</p></div>
            </div>
          ))}
          <p className="relative pt-2 text-[11px] leading-5 text-white/55">Rekomendasi awal bukan pengganti verifikasi daya angkut, dimensi karoseri, dan spesifikasi resmi unit.</p>
        </div>
      </div>
    </section>
  );
}
