'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FormEvent, ReactNode, useState } from 'react';
import { ArrowRight, MapPin, MessageCircle, Phone } from 'lucide-react';
import { openWhatsApp, WHATSAPP_DISPLAY } from '@/lib/whatsapp';
import { siteConfig } from '@/lib/site-config';


export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event: FormEvent) => {
    event.preventDefault();
    openWhatsApp(`Halo Mas Yusuf, saya ${name || 'calon pelanggan'}. ${message || 'Saya ingin informasi kendaraan Isuzu, harga OTR Yogyakarta, promo, dan ketersediaan unit.'}`);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#202225]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#24211E] px-5 pb-16 pt-32 text-white sm:px-7 lg:px-10 lg:pb-20">
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
          <div className="relative mx-auto max-w-[1440px]">
            <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#EF2B31]">Kontak</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-7xl">Mulai dari kebutuhan kendaraan Anda.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/62">Tanyakan unit, harga OTR, promo, simulasi pembiayaan, kebutuhan fleet, atau rencana kunjungan ke Astra Isuzu Yogyakarta.</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-6 px-5 py-16 sm:px-7 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-16">
          <form onSubmit={submit} className="border border-[#202225]/12 bg-[#F1F2EF] p-7 sm:p-9">
            <label className="text-xs font-extrabold uppercase tracking-[.16em] text-[#202225]/48" htmlFor="name">Nama</label>
            <input id="name" value={name} onChange={(event) => setName(event.target.value)} className="mt-3 w-full border border-[#202225]/12 bg-[#FBF8F3] px-4 py-4 outline-none transition focus:border-[#D71920]" placeholder="Nama Anda" />
            <label className="mt-6 block text-xs font-extrabold uppercase tracking-[.16em] text-[#202225]/48" htmlFor="message">Pesan</label>
            <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} rows={6} className="mt-3 w-full border border-[#202225]/12 bg-[#FBF8F3] px-4 py-4 outline-none transition focus:border-[#D71920]" placeholder="Contoh: Saya membutuhkan kendaraan untuk distribusi barang dan ingin rekomendasi unit." />
            <button className="mt-6 inline-flex items-center gap-2 bg-[#D71920] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#B81016]">Kirim ke WhatsApp <ArrowRight size={17} /></button>
          </form>

          <aside className="bg-[#20201E] p-8 text-white sm:p-10">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#D71920] bg-[#D71920]">
                <Image src="/images/profile/yusuf-profile.webp" alt="Yusuf Isuzu Yogyakarta" fill sizes="80px" className="object-cover object-[50%_18%]" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-[#EF2B31]">Yusuf Astra Isuzu Yogyakarta</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-.035em]">Informasi kontak</h2>
              </div>
            </div>
            <div className="mt-9 grid gap-7">
              <Info icon={<Phone size={19} />} label="WhatsApp" value={WHATSAPP_DISPLAY} />
              <Info icon={<MapPin size={19} />} label="Showroom" value={siteConfig.showroomShort} />
              <Info icon={<MessageCircle size={19} />} label="Layanan" value="Produk • Harga • Promo • Kredit • Fleet" />
            </div>
            <button onClick={() => openWhatsApp('Halo Mas Yusuf, saya ingin konsultasi kendaraan Isuzu.')} className="mt-10 w-full bg-[#D71920] px-5 py-4 text-sm font-extrabold text-white transition hover:bg-[#B81016]">Chat Yusuf</button>
          </aside>
        </section>

        <section className="bg-[#F7F7F5] px-5 pb-24 sm:px-7 lg:px-10">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden border border-[#202225]/12 bg-[#F1F2EF] lg:grid-cols-[.72fr_1.28fr]">
            <div className="flex flex-col justify-between p-8 sm:p-10">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-[#D71920]">Dealer & lokasi</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em]">Astra Isuzu Yogyakarta</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-[#202225]/58">{siteConfig.showroomFull}</p>
              </div>
              <a href={siteConfig.mapSearchUrl} target="_blank" rel="noreferrer" className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-[#D71920]">Buka Google Maps <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
            </div>
            <div className="min-h-[420px] bg-[#EEEFEA] lg:min-h-[520px]"><iframe title="Lokasi Astra Isuzu Yogyakarta" src={siteConfig.mapEmbedUrl} className="h-full min-h-[420px] w-full border-0 lg:min-h-[520px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Info({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="flex gap-4"><div className="mt-1 text-[#EF2B31]">{icon}</div><div><div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-white/35">{label}</div><div className="mt-1.5 text-sm font-semibold leading-6 text-white/80">{value}</div></div></div>;
}
