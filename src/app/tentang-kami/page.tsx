import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Building2, Handshake, Wrench } from 'lucide-react';

const values = [
  { icon: Building2, title: 'Solusi kendaraan', copy: 'Membantu memilih keluarga dan varian Isuzu berdasarkan kebutuhan operasional, bukan sekadar tampilan.' },
  { icon: Handshake, title: 'Konsultasi pembelian', copy: 'Informasi unit, program pembelian, pembiayaan, dan kebutuhan fleet diarahkan ke konsultasi yang relevan.' },
  { icon: Wrench, title: 'Dukungan purna jual', copy: 'Pembelian kendaraan usaha perlu mempertimbangkan service, spare part, dan kesiapan kendaraan untuk terus bekerja.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#202225]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#24211E] px-5 pb-16 pt-32 text-white sm:px-7 lg:px-10 lg:pb-20">
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
          <div className="relative mx-auto max-w-[1440px]">
            <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#EF2B31]">Tentang situs ini</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-7xl">Informasi Astra Isuzu Yogyakarta yang berorientasi pada kebutuhan bisnis.</h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/62">Temukan lineup Isuzu, bandingkan kebutuhan kendaraan, dan konsultasikan pilihan unit bersama Yusuf untuk wilayah Yogyakarta dan sekitarnya.</p>
          </div>
        </section>

        <section className="bg-[#F7F7F5] px-5 py-12 sm:px-7 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-5 md:grid-cols-3">
              {values.map(({ icon: Icon, title, copy }) => (
                <article key={title} className="border border-[#202225]/12 bg-[#F1F2EF] p-7 sm:p-8">
                  <Icon className="text-[#D71920]" size={26} strokeWidth={1.7} />
                  <h2 className="mt-8 text-2xl font-semibold tracking-[-.03em]">{title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#202225]/56">{copy}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid overflow-hidden border border-[#202225]/12 bg-[#F1F2EF] lg:grid-cols-[.72fr_1.28fr]">
              <div className="relative min-h-[420px] overflow-hidden bg-[#D71920]">
                <Image
                  src="/images/profile/yusuf-profile.webp"
                  alt="Yusuf, konsultan penjualan Isuzu Yogyakarta"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover object-[50%_18%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20201E]/78 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-white/62">Sales consultant</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em]">Yusuf Astra Isuzu Yogyakarta</h2>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-[#D71920]">Konsultasi langsung</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-.04em]">Satu kontak untuk pemilihan unit sampai kebutuhan fleet.</h3>
                <p className="mt-6 max-w-3xl text-base leading-8 text-[#202225]/60">Informasi produk membantu Anda mengenali pilihan awal kendaraan. Harga, promo, spesifikasi, ketersediaan unit, pembiayaan, dan konfigurasi akhir tetap perlu dikonfirmasi karena dapat berubah mengikuti kebijakan dan kondisi aktual.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
