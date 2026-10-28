import Image from "next/image";

const unitBak = [
  {src:"/images/isuzu/karoseri/bak-traga-pickup.webp",name:"Isuzu TRAGA Pick Up",kind:"Bak terbuka bawaan kendaraan",description:"Contoh kendaraan niaga ringan dengan bak terbuka. Cocok dipertimbangkan untuk distribusi barang yang tidak memerlukan ruang tertutup, setelah mempertimbangkan berat dan dimensi barang."},
  {src:"/images/isuzu/karoseri/bak-elf-nlr-besi.webp",name:"Isuzu ELF NLR",kind:"Contoh karoseri bak besi",description:"Foto kendaraan dengan bak besi berpagar. Ukuran dan struktur bak perlu disesuaikan dengan varian chassis serta cara bongkar muat."},
  {src:"/images/isuzu/karoseri/bak-elf-nmr-hd-besi.webp",name:"Isuzu ELF NMR HD 5.8",kind:"Contoh karoseri bak besi",description:"Referensi visual bak besi pada ELF NMR HD. Kecocokan untuk muatan tertentu bergantung pada GVW/JBB, bobot bak, distribusi beban, dan kondisi operasi."},
  {src:"/images/isuzu/karoseri/bak-giga-fvr-besi.webp",name:"Isuzu GIGA FVR",kind:"Contoh karoseri bak besi",description:"Pilihan visual kelas kendaraan lebih besar dengan bak besi. Foto ini bukan contoh flatbed tanpa pagar; konfigurasi flatbed harus dirancang dan diverifikasi tersendiri."},
];

export default function BakTerbukaVisualGallery() {
  return <section className="bg-[#F3F5F7] px-5 py-14 sm:px-8" aria-label="Galeri bak terbuka dan bak besi Isuzu">
    <div className="mx-auto max-w-6xl">
      <p className="text-xs font-black uppercase tracking-[.18em] text-[#D71920]">FOTO REFERENSI KAROSERI ISUZU EURO4</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-[#15202B]">Lihat bentuk bak terbuka yang sebenarnya</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">Foto dari materi produk Isuzu menunjukkan bentuk bak pada empat unit berbeda. Pilih model berdasarkan kebutuhan barang dan rute; bukan hanya ukuran bak yang terlihat di foto.</p>
      <div className="mt-9 grid gap-6 md:grid-cols-2">
        {unitBak.map((item) => <figure key={item.name} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/10] bg-[#F0F2F4]">
            <Image src={item.src} alt={`${item.name} dengan ${item.kind.toLowerCase()}, referensi foto Isuzu EURO4`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px" className="object-contain p-3 sm:p-5" quality={90} />
          </div>
          <figcaption className="border-t border-slate-100 p-6">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#D71920]">{item.kind}</p>
            <h3 className="mt-2 text-xl font-black text-[#15202B]">{item.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </figcaption>
        </figure>)}
      </div>
      <div className="mt-7 border-l-4 border-[#D71920] bg-white p-6 text-sm leading-7 text-slate-600">
        <strong className="text-[#15202B]">Bagaimana dengan flatbed?</strong> Foto di atas menunjukkan bak terbuka/bak besi, bukan platform flatbed tanpa pagar. Flatbed dipilih berdasarkan bentuk muatan, titik ikat, distribusi beban, dimensi, dan persetujuan desain karoseri. Kami belum menampilkan foto flatbed resmi yang terverifikasi.
      </div>
      <p className="mt-5 text-xs leading-6 text-slate-500">Sumber foto: materi Isuzu Indonesia EURO4 yang disediakan melalui Google Drive. Foto merupakan contoh aplikasi, bukan jaminan ketersediaan unit, spesifikasi final, atau harga OTR saat ini. Penggunaan publik aset mengikuti izin dan pedoman merek.</p>
    </div>
  </section>;
}
