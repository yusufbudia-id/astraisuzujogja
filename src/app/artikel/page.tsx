import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/lib/articles-data';
import { ArrowRight } from 'lucide-react';

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

export default function Articles() {
  const [lead, ...rest] = articles;

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#202225]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#24211E] px-5 pb-16 pt-32 text-white sm:px-7 lg:px-10 lg:pb-20">
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
          <div className="relative mx-auto max-w-[1440px]">
            <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#EF2B31]">Insight Astra Isuzu Yogyakarta</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-7xl">Panduan kendaraan untuk keputusan bisnis yang lebih terarah.</h1>
              <p className="max-w-xl text-sm leading-7 text-white/62 lg:justify-self-end">Artikel seputar pemilihan unit, operasional kendaraan, pembiayaan, dan lineup Isuzu untuk membantu tahap awal sebelum konsultasi.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-7 lg:px-10 lg:py-16">
          {lead && (
            <Link href={`/artikel/${lead.slug}`} className="group grid overflow-hidden border border-[#202225]/12 bg-[#F1F2EF] lg:grid-cols-[1.05fr_.95fr]">
              <div className="relative min-h-[320px] bg-[#EEEFEA] lg:min-h-[430px]">
                <Image src={lead.thumbnail} alt={lead.title} fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-contain p-7 transition duration-500 group-hover:scale-[1.02]" priority />
              </div>
              <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-11">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#D71920]"><span>{lead.category}</span><span className="text-[#202225]/20">•</span><span>{formatDate(lead.date)}</span></div>
                  <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-.04em] sm:text-4xl">{lead.title}</h2>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#202225]/58">{lead.excerpt}</p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold">Baca artikel <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></div>
              </div>
            </Link>
          )}

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {rest.map((article) => (
              <Link key={article.id} href={`/artikel/${article.slug}`} className="group overflow-hidden border border-[#202225]/12 bg-[#F1F2EF] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(11,28,44,.08)]">
                <div className="relative aspect-[4/3] bg-[#EEEFEA]"><Image src={article.thumbnail} alt={article.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain p-6 transition duration-500 group-hover:scale-[1.025]" /></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[.17em] text-[#D71920]"><span>{article.category}</span><span className="text-[#202225]/20">•</span><span>{formatDate(article.date)}</span></div>
                  <h2 className="mt-3 text-xl font-semibold leading-snug tracking-[-.025em]">{article.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#202225]/56">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
