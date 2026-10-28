import Image from 'next/image';

const units = [
  {
    src: '/images/isuzu/karoseri/dump-elf-nmr-hd65.webp',
    alt: 'Foto materi Isuzu EURO4: Isuzu ELF NMR HD 6.5 dengan karoseri dump',
    name: 'Isuzu ELF NMR HD 6.5 Dump',
    description: 'Contoh aplikasi bak dump pada keluarga ELF NMR HD. Pertimbangkan jenis material, berat karoseri, kapasitas sumbu, dan kondisi proyek sebelum menentukan spesifikasi.',
  },
  {
    src: '/images/isuzu/karoseri/dump-giga-fvz.webp',
    alt: 'Foto materi Isuzu EURO4: Isuzu GIGA FVZ dengan karoseri dump',
    name: 'Isuzu GIGA FVZ Dump',
    description: 'Contoh aplikasi dump pada GIGA FVZ untuk evaluasi kebutuhan angkutan lebih berat. Kapasitas aktual harus ditentukan berdasarkan spesifikasi varian dan konfigurasi karoseri.',
  },
];

export default function DumpTruckVisualGallery() {
  return (
    <section className="bg-[#F3F5F7] px-5 py-12 sm:px-8 sm:py-16" aria-label="Galeri dump truck Isuzu">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#D71920]">FOTO APLIKASI KAROSERI ISUZU</p>
        <h2 className="mt-2 text-2xl font-black text-[#15202B] md:text-3xl">Contoh Dump Truck ELF & GIGA</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">Foto aplikasi dari materi Isuzu EURO4. Foto merupakan contoh konfigurasi karoseri, bukan jaminan ketersediaan unit atau spesifikasi akhir pesanan.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {units.map((unit) => (
            <article key={unit.src} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative flex aspect-[4/3] items-center justify-center bg-white p-3 sm:p-5">
                <Image src={unit.src} alt={unit.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain p-3 sm:p-5" />
              </div>
              <div className="border-t border-slate-100 px-5 py-5 sm:px-6">
                <h3 className="text-lg font-black text-[#15202B]">{unit.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{unit.description}</p>
                <p className="mt-3 text-xs text-slate-500">Sumber gambar: materi foto unit Isuzu EURO4.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
