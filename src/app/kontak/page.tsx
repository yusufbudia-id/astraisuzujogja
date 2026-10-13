'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, MessageCircle, Phone, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { openWhatsApp, WHATSAPP_DISPLAY } from '@/lib/whatsapp';
import { siteConfig } from '@/lib/site-config';

const topics = ['Harga & ketersediaan unit', 'Simulasi kredit', 'Rekomendasi kendaraan', 'Pengadaan armada', 'Lainnya'];

export default function Contact() {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState('');
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openWhatsApp(`Halo Mas Yusuf, saya ${name.trim() || 'calon pelanggan'}. Saya ingin konsultasi mengenai ${topic.toLowerCase()}.${message.trim() ? `\n\nKebutuhan saya: ${message.trim()}` : ''}`);
  };

  return (
    <div className="site-shell min-h-screen bg-[#F5F6F7] text-[#18212C]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#101923] px-5 pb-16 pt-32 text-white sm:px-7 lg:px-10 lg:pb-20 lg:pt-40">
          <div className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-[#D71920]/15 blur-[95px]" />
          <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[.22em] text-[#FF5A61]"><span className="h-[3px] w-9 bg-[#FF5A61]" /> Hubungi konsultan</p>
              <h1 className="mt-6 max-w-[900px] text-[clamp(2.7rem,5.4vw,5.5rem)] font-black uppercase leading-[1.01] tracking-[-.055em]">ARMADA TEPAT.<br /><span className="text-[#FF5A61]">BISNIS MELAJU.</span></h1>
            </div>
            <p className="max-w-md text-sm leading-8 text-white/70 sm:text-base">Diskusikan pilihan kendaraan Isuzu, harga, pembiayaan, hingga kebutuhan armada perusahaan bersama Yusuf di Yogyakarta.</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-6 px-5 py-14 sm:px-7 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-20">
          <div className="border border-[#E1E5E9] bg-white p-6 shadow-[0_22px_55px_rgba(12,25,40,.045)] sm:p-9 lg:p-11">
            <p className="text-[11px] font-black uppercase tracking-[.2em] text-[#D71920]">Formulir konsultasi</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[-.045em] sm:text-4xl">Ceritakan kebutuhan Anda.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#64717C]">Informasi yang diisi akan disusun menjadi pesan WhatsApp. Tidak ada data yang dikirim sampai Anda mengonfirmasi pengiriman di WhatsApp.</p>
            <form onSubmit={submit} className="mt-9 space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-extrabold text-[#293644]">Nama Anda</label>
                <input id="contact-name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full border border-[#D9DEE4] bg-[#F8F9FA] px-4 py-3.5 text-sm outline-none transition focus:border-[#D71920] focus:ring-2 focus:ring-[#D71920]/10" placeholder="Masukkan nama" />
              </div>
              <div>
                <label htmlFor="contact-topic" className="block text-xs font-extrabold text-[#293644]">Saya membutuhkan</label>
                <select id="contact-topic" value={topic} onChange={(e) => setTopic(e.target.value)} className="mt-2 w-full border border-[#D9DEE4] bg-[#F8F9FA] px-4 py-3.5 text-sm outline-none transition focus:border-[#D71920] focus:ring-2 focus:ring-[#D71920]/10">
                  {topics.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-extrabold text-[#293644]">Detail kebutuhan <span className="font-normal text-[#86929D]">(opsional)</span></label>
                <textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="mt-2 w-full resize-y border border-[#D9DEE4] bg-[#F8F9FA] px-4 py-3.5 text-sm outline-none transition focus:border-[#D71920] focus:ring-2 focus:ring-[#D71920]/10" placeholder="Contoh: Saya butuh 2 unit truk untuk distribusi antar kota..." />
              </div>
              <button type="submit" className="inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#D71920] px-6 py-4 text-sm font-black uppercase tracking-[.07em] text-white transition hover:bg-[#B81016] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D71920]">Konsultasi melalui WhatsApp <ArrowUpRight size={19} /></button>
              <p className="flex items-start gap-2 text-xs leading-5 text-[#77838E]"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D71920]" /> Harga, promo, dan stok akhir perlu dikonfirmasi langsung saat konsultasi.</p>
            </form>
          </div>
          <aside className="flex flex-col gap-5">
            <div className="relative overflow-hidden bg-[#172430] p-7 text-white sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D71920]/20 blur-3xl" />
              <div className="relative flex items-center gap-5">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-[3px] border-[#D71920] bg-[#D71920]"><Image src="/images/profile/yusuf-profile.webp" alt="Yusuf, konsultan penjualan Isuzu Yogyakarta" fill sizes="96px" className="object-cover object-[50%_18%]" /></div>
                <div><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#FF6268]">Sales consultant</p><h2 className="mt-2 text-2xl font-black tracking-[-.04em]">Yusuf</h2><p className="mt-1 text-xs text-white/65">Isuzu Yogyakarta</p></div>
              </div>
              <p className="relative mt-7 text-sm leading-7 text-white/75">Diskusi langsung untuk membantu menentukan unit yang sesuai dengan aktivitas dan rencana bisnis Anda.</p>
              <div className="relative mt-8 border-t border-white/15 pt-6">
                <div className="flex items-start gap-3"><Phone size={19} className="mt-0.5 shrink-0 text-[#FF6268]" /><div><p className="text-[10px] font-black uppercase tracking-[.15em] text-white/45">WhatsApp</p><p className="mt-1 font-semibold">{WHATSAPP_DISPLAY}</p></div></div>
                <div className="mt-6 flex items-start gap-3"><MapPin size={19} className="mt-0.5 shrink-0 text-[#FF6268]" /><div><p className="text-[10px] font-black uppercase tracking-[.15em] text-white/45">Area showroom</p><p className="mt-1 text-sm leading-6 text-white/80">{siteConfig.showroomShort}</p></div></div>
              </div>
              <button type="button" onClick={() => openWhatsApp('Halo Mas Yusuf, saya ingin bertanya tentang kendaraan Isuzu.')} className="relative mt-8 flex min-h-12 w-full items-center justify-center gap-2 border border-white/35 px-5 py-3 text-xs font-extrabold uppercase tracking-[.08em] transition hover:bg-white/10"><MessageCircle size={17} /> Chat langsung <ArrowRight size={16} /></button>
            </div>
            <Link href="/produk" className="group flex items-center justify-between gap-4 border border-[#E1E5E9] bg-white p-6 transition hover:border-[#D71920]"><span className="flex items-center gap-3"><Truck size={22} className="text-[#D71920]" /><span className="text-sm font-extrabold">Lihat katalog kendaraan</span></span><ArrowUpRight size={19} className="text-[#D71920] transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
          </aside>
        </section>

        <section className="bg-white px-5 pb-20 pt-6 sm:px-7 lg:px-10 lg:pb-24">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden border border-[#E1E5E9] bg-[#F6F7F8] lg:grid-cols-[.72fr_1.28fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-[11px] font-black uppercase tracking-[.2em] text-[#D71920]">Kunjungi lokasi</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-[-.045em] sm:text-4xl">Temukan showroom.</h2>
              <p className="mt-5 text-sm leading-7 text-[#64717C]">{siteConfig.showroomFull}</p>
              <a href={siteConfig.mapSearchUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 text-xs font-black uppercase tracking-[.08em] text-[#D71920] hover:underline">Buka Google Maps <ArrowUpRight size={17} /></a>
            </div>
            <div className="min-h-[360px] lg:min-h-[450px]"><iframe title="Peta lokasi Isuzu Yogyakarta" src={siteConfig.mapEmbedUrl} className="h-full min-h-[360px] w-full border-0 lg:min-h-[450px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
