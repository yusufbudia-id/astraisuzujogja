import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Mobil Box Isuzu Jogja | TRAGA, ELF & Panduan Karoseri',
  description: 'Cari mobil box Isuzu di Jogja? Pahami jenis box aluminium, besi dan pendingin, pemilihan TRAGA atau ELF, dimensi muatan, rincian harga dan konsultasi karoseri.',
  alternates: { canonical: '/karoseri/mobil-box-jogja' },
  openGraph: {
    title: 'Mobil Box Isuzu Jogja | Pilih Karoseri Sesuai Barang',
    description: 'Panduan mobil box untuk distribusi, logistik dan usaha di Yogyakarta: TRAGA, ELF, material box, dimensi kargo dan kebutuhan operasional.',
    url: '/karoseri/mobil-box-jogja',
    type: 'article',
  },
};

const requirements = [
  { n: '01', title: 'Barang yang diangkut', text: 'Catat jenis produk, berat per kemasan, jumlah per perjalanan, apakah mudah pecah, dan apakah perlu perlindungan suhu.' },
  { n: '02', title: 'Ukuran dan pola penataan', text: 'Hitung dimensi kardus atau palet, jumlah susunan, kebutuhan ruang untuk akses pintu, serta tinggi saat bongkar muat.' },
  { n: '03', title: 'Rute dan akses lokasi', text: 'Periksa lebar jalan, batas ketinggian, jembatan, halaman gudang, tanjakan, dan frekuensi berhenti di area perkotaan.' },
  { n: '04', title: 'Berat karoseri dan batas kendaraan', text: 'Volume ruang kargo bukan kapasitas muatan. Berat box, rak, pendingin dan barang harus dihitung terhadap berat serta batas sumbu kendaraan.' },
];
const types = [
  { tag:'01 / Kering', title:'Box Aluminium', text:'Sering dipertimbangkan untuk distribusi barang kering karena perlindungan dari cuaca dan variasi konstruksi yang relatif ringan. Detail ketebalan panel, rangka dan lantai perlu disepakati dengan karoseri.', fit:'Distribusi paket, perlengkapan toko dan barang kemasan' },
  { tag:'02 / Kering', title:'Box Besi / Baja', text:'Alternatif konstruksi yang dipilih berdasarkan kekuatan dan kebutuhan operasional tertentu. Berat struktur, risiko korosi serta perawatannya harus diperhitungkan sebelum menentukan chassis.', fit:'Barang industri atau kebutuhan body dengan penguatan tertentu' },
  { tag:'03 / Suhu', title:'Box Pendingin / Refrigerated', text:'Untuk produk yang mensyaratkan suhu terkontrol. Selain box berinsulasi, perlu meninjau unit pendingin, daya, target suhu, lama perjalanan, dan prosedur bongkar muat.', fit:'Produk makanan atau produk lain dengan syarat suhu khusus' },
];
const faqs = [
  { q:'Apakah Isuzu TRAGA bisa digunakan sebagai mobil box?', a:'Ada konfigurasi TRAGA BOX dalam katalog Astra Isuzu. Namun ukuran ruang barang, berat total kendaraan, dan beban yang boleh dibawa harus mengacu pada spesifikasi varian serta konfigurasi akhir.' },
  { q:'Kapan harus mempertimbangkan Isuzu ELF?', a:'ELF dapat dievaluasi ketika kebutuhan ruang, konfigurasi dan kelas kendaraan melampaui pilihan yang sesuai pada TRAGA. Pemilihan NLR atau NMR harus memeriksa dimensi chassis, berat karoseri, distribusi beban dan batas legal.' },
  { q:'Mana yang lebih cocok, box aluminium atau besi?', a:'Tidak ada yang otomatis paling baik. Tentukan dari jenis barang, bobot kosong karoseri, kebutuhan kekuatan, risiko korosi, perawatan dan anggaran.' },
  { q:'Apakah harga mobil box sudah termasuk box?', a:'Belum tentu. Minta penawaran tertulis yang memisahkan harga chassis dan biaya box, lantai, pintu, aksesoris, pendingin bila ada, pengurusan serta kelengkapan legal.' },
  { q:'Bolehkah membuat box setinggi atau sepanjang mungkin?', a:'Tidak. Ukuran akhir harus sesuai ketentuan dimensi kendaraan, desain teknis, distribusi berat, daya dukung chassis, dan persyaratan administrasi/pengujian yang berlaku.' },
];
const waText = encodeURIComponent('Halo Mas Yusuf, saya sedang mencari mobil box Isuzu di Jogja. Jenis usaha/barang: ...; berat total per perjalanan: ... kg; ukuran barang/palet: ...; butuh pendingin: ya/tidak; rute: ...; akses jalan: ...; perkiraan budget: ... . Mohon konsultasi pilihan TRAGA/ELF, ukuran box dan estimasi penawaran chassis + karoseri.');
const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

export default function MobilBoxJogjaPage() {
  return <div className="min-h-screen bg-[#F6F7F8] text-[#182330]"><Header />
    <main>
      <section className="bg-[#111B28] px-5 pb-20 pt-36 text-white sm:px-8">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-white/60"><Link href="/" className="hover:text-white">Beranda</Link><span className="px-2">/</span><Link href="/karoseri" className="hover:text-white">Karoseri</Link><span className="px-2">/</span>Mobil Box Jogja</nav>
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#FF666B]">Panduan karoseri untuk distribusi & logistik</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-black uppercase leading-[1.08] sm:text-6xl">Mobil Box Isuzu Jogja: Sesuaikan dengan Barang & Rute Anda</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">Mencari mobil box untuk pengiriman paket, distribusi toko, atau produk yang memerlukan suhu khusus? Pilih dulu spesifikasi ruang barang dan kebutuhan operasional, baru tentukan chassis yang tepat.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#D71920] px-7 py-4 text-sm font-extrabold hover:bg-[#B81016]">Konsultasi Mobil Box ↗</a><Link href="/produk" className="border border-white/35 px-7 py-4 text-sm font-extrabold hover:bg-white/10">Lihat Produk Isuzu</Link></div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-xs font-black uppercase tracking-widest text-[#D71920]">Kenali ragam karoseri</p><h2 className="mt-3 text-3xl font-black">Pilih jenis box sesuai karakter barang</h2>
        <p className="mt-4 max-w-4xl leading-8 text-slate-600">Mobil box dirancang untuk melindungi barang di ruang kargo tertutup. Namun, material, rangka, insulasi dan peralatan tambahan memengaruhi berat kosong serta kebutuhan perawatannya.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">{types.map(item=><article key={item.title} className="flex flex-col border border-slate-200 bg-white p-7 shadow-sm"><p className="text-xs font-bold uppercase tracking-widest text-[#D71920]">{item.tag}</p><h3 className="mt-4 text-xl font-black">{item.title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{item.text}</p><div className="mt-5 border-t border-slate-100 pt-4 text-xs leading-6 text-slate-500"><strong>Contoh penggunaan:</strong> {item.fit}</div></article>)}</div>
      </section>
      <section className="bg-white px-5 py-16 sm:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-black uppercase tracking-widest text-[#D71920]">Sebelum menentukan chassis</p><h2 className="mt-3 text-3xl font-black">Empat hal yang wajib dihitung</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{requirements.map(item=><article key={item.n} className="border border-slate-200 p-7"><span className="text-xs font-black text-[#D71920]">{item.n}</span><h3 className="mt-3 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p></article>)}</div></div></section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><p className="text-xs font-black uppercase tracking-widest text-[#D71920]">Memilih kendaraan dasar</p><h2 className="mt-3 text-3xl font-black">TRAGA atau ELF untuk mobil box?</h2><p className="mt-5 max-w-4xl leading-8 text-slate-600">TRAGA BOX tercantum dalam katalog Astra Isuzu dan dapat menjadi titik awal kebutuhan distribusi ringan. Untuk kebutuhan ruang atau konfigurasi lebih besar, keluarga ELF NLR dan NMR layak dievaluasi. Kesimpulan akhir membutuhkan pemeriksaan detail varian, wheelbase, berat box, muatan dan ketentuan legal.</p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <article className="border-l-4 border-[#D71920] bg-white p-6"><h3 className="text-xl font-black">Isuzu TRAGA BOX</h3><p className="mt-3 text-sm leading-7 text-slate-600">Alternatif yang patut dilihat untuk distribusi dalam kota dan barang kemasan. Tanyakan dimensi ruang box dan bobot muatan final.</p><a href="https://astraisuzu.co.id/product/traga-box/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-bold text-[#D71920] hover:underline">Referensi resmi TRAGA BOX ↗</a></article>
          <article className="border-l-4 border-[#D71920] bg-white p-6"><h3 className="text-xl font-black">Isuzu ELF NLR</h3><p className="mt-3 text-sm leading-7 text-slate-600">Pertimbangkan kelas chassis ELF saat kebutuhan ruang dan pengangkutan perlu ditinjau lebih lanjut. Aplikasi box ditampilkan dalam brosur resmi NLR.</p><a href="https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur-4-halaman_NLR-_Feb.pdf" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-bold text-[#D71920] hover:underline">Lihat brosur NLR ↗</a></article>
          <article className="border-l-4 border-[#D71920] bg-white p-6"><h3 className="text-xl font-black">Isuzu ELF NMR</h3><p className="mt-3 text-sm leading-7 text-slate-600">Tinjau ketika konfigurasi chassis dan ruang kargo memerlukan opsi berbeda. Dimensi dan varian NMR perlu diverifikasi satu per satu.</p><a href="https://isuzu-astra.com/elf-nmr/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-bold text-[#D71920] hover:underline">Referensi resmi NMR ↗</a></article>
        </div>
        <div className="mt-8 border-l-4 border-[#D71920] bg-[#FFF4F4] p-6 text-sm leading-7 text-[#67434A]"><strong>Penting:</strong> box yang lebih besar tidak otomatis boleh memuat lebih berat. Hitung berat kosong kendaraan, berat karoseri, peralatan tambahan, beban aktual, beban per sumbu, dan persyaratan dokumen teknis.</div>
      </section>
      <section className="bg-[#F0F2F4] px-5 py-16 sm:px-8"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-black">Berapa harga mobil box Isuzu di Jogja?</h2><p className="mt-5 max-w-4xl leading-8 text-slate-600">Harga satu unit siap operasi tidak selalu sama dengan harga chassis dasar. Minta penawaran yang memisahkan unit kendaraan, pembuatan box, pintu dan lantai, tambahan pendingin bila diperlukan, serta kelengkapan dokumen.</p><div className="mt-7 grid gap-3 md:grid-cols-3">{['Harga chassis/varian Isuzu','Pembuatan box, rangka & pintu','Aksesori, instalasi & dokumen'].map((item,i)=><div key={item} className="bg-white p-5 text-sm font-bold"><span className="mr-2 text-[#D71920]">0{i+1}</span>{item}</div>)}</div><p className="mt-6 text-sm leading-7 text-slate-500">Harga final tergantung varian, konfigurasi karoseri, wilayah, pajak, dan penawaran saat transaksi. Halaman ini tidak menampilkan harga total yang belum diverifikasi.</p></div></section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><h2 className="text-3xl font-black">FAQ mobil box Isuzu</h2><div className="mt-7 space-y-3">{faqs.map(item=><details key={item.q} className="border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-bold marker:text-[#D71920]">{item.q}</summary><p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p></details>)}</div><p className="mt-7 text-sm leading-7 text-slate-600">Panduan lainnya: <Link href="/karoseri/towing-jogja" className="font-bold text-[#D71920] hover:underline">Mobil Towing Jogja</Link>, <Link href="/karoseri/dump-truck-jogja" className="font-bold text-[#D71920] hover:underline">Dump Truck Jogja</Link>, atau <Link href="/karoseri" className="font-bold text-[#D71920] hover:underline">semua jenis karoseri</Link>.</p></section>
      <section className="bg-[#111B28] px-5 py-16 text-white sm:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-black uppercase tracking-widest text-[#FF656B]">Konsultasi pembelian Isuzu</p><h2 className="mt-3 text-3xl font-black">Butuh mobil box untuk bisnis Anda?</h2><p className="mt-4 max-w-3xl leading-8 text-white/70">Sampaikan produk yang diangkut, ukuran kardus atau palet, berat muatan per perjalanan, kondisi rute, dan kebutuhan suhu. Kami bantu menyusun opsi kendaraan yang kemudian diverifikasi bersama pihak karoseri.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-7 inline-block bg-[#D71920] px-7 py-4 text-sm font-extrabold hover:bg-[#B81016]">Konsultasi Mobil Box via WhatsApp ↗</a><p className="mt-4 text-xs text-white/55">Panduan awal; bukan persetujuan teknis atau jaminan harga, spesifikasi, dan ketersediaan.</p></div></section>
    
    <section aria-label="Panduan memilih chassis dan karoseri" className="bg-[#f1f4f7] px-5 py-10 sm:px-8"><div className="mx-auto max-w-6xl flex flex-col gap-5 border-l-4 border-[#D71920] bg-white p-7 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#D71920]">Panduan pembeli</p><h2 className="mt-2 text-xl font-black text-[#15202B]">Sudah cocok dengan kebutuhan muatan dan rute?</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Gunakan checklist sebelum meminta penawaran chassis dan karoseri agar spesifikasi serta biaya lebih mudah dibandingkan.</p></div><Link href="/karoseri/panduan-memilih" className="shrink-0 bg-[#D71920] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#B81016]">Buka panduan pembeli →</Link></div></section>
</main><Footer /></div>;
}
