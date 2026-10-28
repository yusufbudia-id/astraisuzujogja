import Image from 'next/image';

type GalleryKind = 'overview' | 'towing' | 'dump' | 'box' | 'bak' | 'tangki' | 'panduan';

const galleries: Record<GalleryKind, {heading:string;intro:string;items:{src:string;title:string;caption:string}[]}> = {
 overview: {heading:'Kenali kendaraan sebelum memilih bentuk karoseri',intro:'Foto unit dasar dan lingkungan kerja membantu memperjelas skala kendaraan. Bentuk akhir karoseri harus dikonfirmasi sesuai pesanan.',items:[
  {src:'/images/isuzu/models/traga.webp',title:'Isuzu TRAGA',caption:'Contoh unit dasar untuk kebutuhan niaga ringan'},
  {src:'/images/isuzu/models/elf-nlr.webp',title:'Isuzu ELF',caption:'Contoh chassis untuk konfigurasi komersial'},
  {src:'/images/isuzu/models/giga-fvr.webp',title:'Isuzu GIGA',caption:'Contoh kendaraan niaga untuk kebutuhan lebih besar'}]},
 towing: {heading:'Contoh karoseri towing Isuzu ELF NMR',intro:'Ilustrasi visual truk Isuzu ELF NMR dengan platform flatbed untuk mengangkut kendaraan. Bentuk platform, winch, dan kelayakan muatan harus disesuaikan dengan spesifikasi chassis serta rancangan karoseri.',items:[
  {src:'/images/isuzu/karoseri/towing-elf-nmr-ilustrasi.webp',title:'Ilustrasi Isuzu ELF NMR — Flatbed Towing',caption:'Ilustrasi konsep (AI), bukan foto produk resmi atau bukti unit tersedia. Kapasitas angkut, panjang platform, sistem winch, dan rancangan karoseri wajib dikonfirmasi.'}]},
 dump: {heading:'Contoh unit dan lingkungan kerja dump truck',intro:'Foto di bawah adalah referensi kendaraan dan lokasi konstruksi, bukan klaim konfigurasi dump siap jual.',items:[
  {src:'/images/isuzu/models/giga-fvz.webp',title:'GIGA FVZ',caption:'Contoh kendaraan niaga berat; spesifikasi varian perlu diverifikasi'},
  {src:'/images/isuzu/solutions/contexts/construction.png',title:'Area konstruksi',caption:'Contoh lingkungan kerja dan kondisi akses jalan'}]},
 box: {heading:'Pilihan kendaraan dasar untuk mobil box',intro:'Perhatikan volume muatan, bobot dan akses bongkar muat. Bentuk box akhirnya bergantung pada spesifikasi pesanan karoseri.',items:[
  {src:'/images/isuzu/models/traga.webp',title:'TRAGA',caption:'Referensi unit niaga ringan untuk evaluasi karoseri box'},
  {src:'/images/isuzu/models/elf-nlr.webp',title:'ELF NLR',caption:'Referensi chassis untuk meninjau pilihan box'},
  {src:'/images/isuzu/solutions/contexts/logistics.png',title:'Aktivitas logistik',caption:'Contoh lingkungan distribusi barang'}]},
 bak: {heading:'Visual bak terbuka dan referensi flatbed',intro:'Kenali ukuran kendaraan dan cara penanganan barang. Pilihan struktur bak dan pengikatan muatan harus dirancang sesuai kebutuhan.',items:[
  {src:'/images/isuzu/brochure/traga/cargo.webp',title:'Area muat TRAGA',caption:'Referensi area kargo; sesuaikan konfigurasi dengan varian'},
  {src:'/images/isuzu/models/elf-nlr.webp',title:'ELF NLR',caption:'Contoh chassis untuk konsultasi bak / platform'},
  {src:'/images/isuzu/models/giga-fvr.webp',title:'GIGA FVR',caption:'Contoh kendaraan dasar untuk diskusi flatbed'}]},
 tangki: {heading:'Unit dasar untuk pertimbangan karoseri tangki',intro:'Foto berikut bukan tangki air siap pakai. Tangki, sekat dan peralatan harus diperhitungkan bersama berat cairan dan batas chassis.',items:[
  {src:'/images/isuzu/models/elf-nmr.webp',title:'ELF NMR',caption:'Referensi chassis; perlu pemeriksaan berat cairan dan tangki'},
  {src:'/images/isuzu/models/giga-fvr.webp',title:'GIGA FVR',caption:'Contoh chassis untuk kebutuhan yang perlu evaluasi lebih lanjut'}]},
 panduan: {heading:'Bandingkan skala unit secara visual',intro:'Sebelum memilih karoseri, kenali keluarga kendaraan Isuzu. Foto unit tidak menggantikan pemeriksaan spesifikasi teknis.',items:[
  {src:'/images/isuzu/models/traga.webp',title:'TRAGA',caption:'Kendaraan niaga ringan'},
  {src:'/images/isuzu/models/elf-nlr.webp',title:'ELF',caption:'Keluarga kendaraan niaga'},
  {src:'/images/isuzu/models/giga-fvr.webp',title:'GIGA',caption:'Keluarga kendaraan niaga berat'}]},
};

export default function KaroseriVisualGallery({kind}:{kind:GalleryKind}) {
 const gallery=galleries[kind];
 return <section className="bg-[#F3F5F7] px-5 py-12 sm:px-8 sm:py-16" aria-label="Galeri referensi kendaraan"><div className="mx-auto max-w-6xl">
  <div className="mb-7 max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#D71920]">REFERENSI VISUAL ISUZU</p><h2 className="mt-2 text-2xl font-black leading-tight text-[#15202B] md:text-3xl">{gallery.heading}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{gallery.intro}</p></div>
  <div className={kind === 'towing' ? "grid gap-4 md:grid-cols-1" : "grid gap-4 md:grid-cols-3"}>{gallery.items.map((item)=><figure key={item.src} className="overflow-hidden border border-slate-200 bg-white shadow-sm"><div className={kind === 'towing' ? "relative aspect-[16/10] w-full bg-[#edf0f2] sm:aspect-[16/9]" : "relative h-52 bg-[#edf0f2] sm:h-60"}><Image src={item.src} alt={item.title + ' sebagai ilustrasi referensi kendaraan Isuzu'} fill sizes="(max-width: 768px) 100vw, 33vw" className={kind === 'towing' ? "object-cover object-center" : "object-contain p-3"} /></div><figcaption className="border-t border-slate-100 p-5"><strong className="text-lg font-black text-[#15202B]">{item.title}</strong><p className="mt-2 text-sm leading-6 text-slate-600">{item.caption}</p></figcaption></figure>)}</div>
  <p className="mt-5 text-xs leading-5 text-slate-500">{kind === 'towing' ? "Ilustrasi towing dibuat untuk membantu membayangkan bentuk karoseri. Bukan foto unit asli, spesifikasi final, atau penawaran resmi. Pastikan desain karoseri dan batas teknis kendaraan sebelum pemesanan." : "Foto unit merupakan referensi visual dari katalog/aset website, bukan bukti tersedianya konfigurasi karoseri tertentu. Konfirmasi tipe, harga, ketersediaan, dan legalitas konfigurasi kepada sales dan pihak karoseri."}</p>
 </div></section>;
}
