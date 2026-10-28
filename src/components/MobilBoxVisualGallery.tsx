import Image from 'next/image';

const vehicles = [
  {
    src: '/images/isuzu/karoseri/mobil-box-traga-aluminium.webp',
    name: 'Isuzu TRAGA Box Aluminium',
    type: '01 / NIAGA RINGAN',
    description: 'Contoh konfigurasi TRAGA dengan karoseri box aluminium untuk kebutuhan distribusi barang tertutup.',
    alt: 'Foto materi Isuzu EURO4: TRAGA putih dengan karoseri box aluminium',
  },
  {
    src: '/images/isuzu/karoseri/mobil-box-elf-nlr-aluminium.webp',
    name: 'Isuzu ELF NLR Box Aluminium',
    type: '02 / ELF NLR',
    description: 'Contoh ELF NLR dengan karoseri box aluminium. Sesuaikan dimensi, volume, dan bobot barang dengan varian yang dipilih.',
    alt: 'Foto materi Isuzu EURO4: ELF NLR putih berkaroseri box aluminium',
  },
  {
    src: '/images/isuzu/karoseri/mobil-box-elf-nmr-besi.webp',
    name: 'Isuzu ELF NMR Box Besi',
    type: '03 / ELF NMR',
    description: 'Contoh ELF NMR dengan karoseri box besi. Berat karoseri perlu diperhitungkan sebelum menentukan kapasitas muatan.',
    alt: 'Foto materi Isuzu EURO4: ELF NMR putih berkaroseri box besi',
  },
] as const;

export default function MobilBoxVisualGallery() {
  return (
    <section className="bg-[#F3F5F7] px-5 py-14 text-[#15202B] sm:px-8 sm:py-20" aria-labelledby="mobil-box-gallery-heading">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#D71920]">GALERI KAROSERI MOBIL BOX</p>
        <h2 id="mobil-box-gallery-heading" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Lihat bentuk unit box yang sebenarnya</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">Contoh aplikasi karoseri dari materi foto Isuzu EURO4. Bandingkan TRAGA, ELF NLR, dan ELF NMR sebelum memilih konfigurasi sesuai kebutuhan usaha.</p>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {vehicles.map((v) => (
            <figure key={v.src} className="overflow-hidden border border-[#dfe4e8] bg-white shadow-[0_12px_30px_rgba(16,24,40,.06)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(150deg,#ffffff,#e9edf0)]">
                <Image src={v.src} alt={v.alt} fill sizes="(max-width:1023px) 100vw, 33vw" className="object-contain p-2 sm:p-3" quality={90} />
              </div>
              <figcaption className="border-t border-[#e5e9ed] p-5 sm:p-6">
                <p className="text-[11px] font-black tracking-[.17em] text-[#D71920]">{v.type}</p>
                <h3 className="mt-2 text-xl font-black leading-snug">{v.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{v.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-slate-500">Sumber gambar: materi foto Isuzu EURO4, arsip 2022. Foto merupakan contoh aplikasi produk, bukan jaminan stok, harga, spesifikasi karoseri, atau ketersediaan unit di Jogja. Konfigurasi dan daya angkut harus diverifikasi sebelum pemesanan.</p>
      </div>
    </section>
  );
}
