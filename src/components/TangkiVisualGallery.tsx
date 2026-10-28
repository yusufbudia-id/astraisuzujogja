import Image from 'next/image';

export default function TangkiVisualGallery() {
  return (
    <section className="bg-[#F3F5F7] px-5 py-14 text-[#15202B] sm:px-8 sm:py-20" aria-labelledby="tangki-visual-heading">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#D71920]">CONTOH BENTUK KAROSERI</p>
        <h2 id="tangki-visual-heading" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Isuzu ELF NMR — Ilustrasi tangki air</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">Gambaran konsep truk dengan tangki silinder, perlengkapan pipa dan dudukan karoseri. Untuk air non-B3, ukuran tangki, material, sistem pompa, kapasitas legal, dan pilihan chassis harus dihitung menurut kebutuhan.</p>
        <figure className="mt-8 overflow-hidden border border-[#dfe4e8] bg-white shadow-[0_12px_30px_rgba(16,24,40,.06)]">
          <div className="relative aspect-[3/2] w-full bg-[#e8edf1] sm:aspect-[16/10]">
            <Image
              src="/images/isuzu/karoseri/tangki-air-elf-nmr-ilustrasi.webp"
              alt="Ilustrasi konsep Isuzu ELF NMR putih dengan karoseri tangki silinder untuk pengangkutan air"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
              quality={90}
              className="object-contain"
            />
          </div>
          <figcaption className="border-t border-[#e5e9ed] px-5 py-5 text-sm leading-7 text-slate-600 sm:px-7">
            <strong className="text-[#15202B]">Ilustrasi AI — bukan foto unit resmi.</strong> Gambar hanya membantu membayangkan bentuk kendaraan tangki air berbasis ELF. Tidak menggambarkan ukuran, kapasitas, kelengkapan, kesiapan jual, atau spesifikasi yang sudah disetujui Isuzu/karoseri.
          </figcaption>
        </figure>
        <p className="mt-5 text-sm leading-7 text-slate-600">Untuk tangki bahan bakar, bahan kimia, atau cairan berbahaya, desain dan persyaratan keselamatan berbeda; jangan menggunakan ilustrasi tangki air ini sebagai contoh kelayakan pengangkutannya.</p>
      </div>
    </section>
  );
}
