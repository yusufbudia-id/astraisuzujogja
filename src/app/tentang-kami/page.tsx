'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Building2, CheckCircle2, Handshake, MessageCircle, Truck, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { openWhatsApp } from '@/lib/whatsapp';

const benefits = [
  { icon: Truck, number: '01', title: 'Pilihan kendaraan', copy: 'Jelajahi keluarga kendaraan Isuzu dan model yang dapat disesuaikan dengan pekerjaan Anda.' },
  { icon: Handshake, number: '02', title: 'Konsultasi pembelian', copy: 'Diskusikan kebutuhan unit, opsi pembiayaan, dan rencana pengadaan kendaraan usaha.' },
  { icon: Wrench, number: '03', title: 'Pertimbangan purnajual', copy: 'Pertimbangkan kebutuhan perawatan serta dukungan servis dan suku cadang sebelum memilih kendaraan.' },
];

export default function About() {
  return (
    <div className="site-shell min-h-screen bg-[#F5F6F7] text-[#18212C]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#101923] px-5 pb-20 pt-32 text-white sm:px-7 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="pointer-events-none absolute -right-20 -top-24 h-[480px] w-[480px] rounded-full bg-[#D71920]/15 blur-[110px]" />
          <div className="relative mx-auto max-w-[1440px]">
            <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[.2em] text-[#FF5A61]"><span className="h-[3px] w-9 bg-[#FF5A61]" /> Tentang kami</p>
            <h1 className="mt-7 max-w-[1000px] text-[clamp(2.7rem,6vw,6rem)] font-black uppercase leading-[1.01] tracking-[-.06em]">PARTNER UNTUK<br /><span className="text-[#FF5A61]">PERJALANAN BISNIS.</span></h1>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">Media informasi kendaraan Isuzu dan layanan konsultasi penjualan bersama Yusuf untuk wilayah Yogyakarta dan sekitarnya.</p>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-7 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div><p className="text-[11px] font-black uppercase tracking-[.2em] text-[#D71920]">Pendekatan kami</p><h2 className="mt-4 text-[clamp(2.5rem,4vw,4.5rem)] font-black uppercase leading-[1.05] tracking-[-.05em]">Bukan sekadar memilih truk.</h2></div>
              <p className="max-w-2xl text-sm leading-8 text-[#62707D] sm:text-base">Setiap usaha memiliki kebutuhan muatan, medan, rute, serta anggaran yang berbeda. Website ini membantu Anda meninjau alternatif kendaraan sebelum berkonsultasi mengenai spesifikasi, harga dan ketersediaan aktual.</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {benefits.map(({ icon: Icon, number, title, copy }) => (
                <article key={number} className="group border border-[#E1E5E9] bg-white p-7 shadow-[0_16px_35px_rgba(12,25,40,.035)] transition hover:border-[#D71920]/35 sm:p-8">
                  <div className="flex items-start justify-between"><Icon size={29} strokeWidth={1.7} className="text-[#D71920]" /><span className="text-sm font-black text-[#BCC4CB]">{number}</span></div>
                  <h3 className="mt-12 text-2xl font-black uppercase tracking-[-.035em]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#64717C]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-7 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden bg-[#101923] lg:grid-cols-[.83fr_1.17fr]">
            <div className="relative min-h-[430px] overflow-hidden bg-[#D71920] lg:min-h-[550px]">
              <Image src="/images/profile/yusuf-profile.webp" alt="Yusuf, konsultan penjualan Isuzu Yogyakarta" fill sizes="(min-width:1024px) 42vw,100vw" className="object-cover object-[50%_18%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1119]/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10"><p className="text-[11px] font-black uppercase tracking-[.2em] text-[#FF6268]">Kenali konsultan Anda</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em]">Yusuf</h2><p className="mt-2 text-sm text-white/75">Konsultan penjualan Isuzu Yogyakarta</p></div>
            </div>
            <div className="flex flex-col justify-center p-7 text-white sm:p-12 lg:p-14">
              <p className="text-[11px] font-black uppercase tracking-[.2em] text-[#FF6268]">Konsultasi langsung</p>
              <h2 className="mt-5 text-[clamp(2.3rem,4vw,4.5rem)] font-black uppercase leading-[1.08] tracking-[-.05em]">Rencanakan unit.<br />Bangun armada.</h2>
              <p className="mt-6 max-w-xl text-sm leading-8 text-white/70">Dapatkan bantuan awal untuk membandingkan keluarga kendaraan, mengidentifikasi kebutuhan operasional, dan meminta informasi penawaran yang relevan.</p>
              <div className="mt-7 space-y-3 text-sm text-white/80"><div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#FF6268]" /> Konsultasi pilihan unit dan varian</div><div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#FF6268]" /> Informasi harga, promo dan pembiayaan</div><div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#FF6268]" /> Perencanaan kebutuhan fleet</div></div>
              <div className="mt-9 flex flex-wrap gap-3"><button type="button" onClick={() => openWhatsApp('Halo Mas Yusuf, saya ingin konsultasi mengenai pilihan kendaraan Isuzu.')} className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#D71920] px-6 py-3 text-xs font-black uppercase tracking-[.06em] text-white transition hover:bg-[#B81016]"><MessageCircle size={17} /> Chat Yusuf <ArrowUpRight size={17} /></button><Link href="/produk" className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/40 px-6 py-3 text-xs font-black uppercase tracking-[.06em] text-white transition hover:bg-white/10">Lihat produk <ArrowRight size={17} /></Link></div>
            </div>
          </div>
          <div className="mx-auto mt-7 flex max-w-[1440px] items-start gap-3 text-xs leading-6 text-[#77838E]"><Building2 size={18} className="mt-0.5 shrink-0 text-[#D71920]" /><p>Informasi pada situs bersifat referensi penjualan. Harga, promo, ketersediaan kendaraan, dan dukungan layanan harus dikonfirmasi langsung. Situs ini tidak dengan sendirinya menyatakan status sebagai situs resmi prinsipal.</p></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
