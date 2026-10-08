import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const articles = [
  {
    "title": "Mengenal LEPAS L8: Premium Super Hybrid SUV untuk Mobilitas Modern",
    "slug": "mengenal-lepas-l8-premium-super-hybrid-suv",
    "thumbnail": "/images/lepas-l8-hero.svg",
    "content": "LEPAS L8 menjadi model perdana LEPAS yang dipasarkan di Indonesia. SUV premium 5-seater ini menggunakan teknologi Plug-in Hybrid Electric Vehicle (PHEV) dan membawa filosofi desain Leopard Aesthetics.",
    "excerpt": "Ringkasan teknologi PHEV, performa, jarak tempuh, dan fitur unggulan LEPAS L8.",
    "category": "Produk",
    "tags": "LEPAS L8,PHEV,SUV",
    "author": "LEPAS Jogja"
  },
  {
    "title": "PHEV Itu Apa? Cara Kerja Teknologi Hybrid pada LEPAS L8",
    "slug": "pahami-phev-lepas-l8",
    "thumbnail": "/images/lepas-l8-interior.svg",
    "content": "Plug-in Hybrid Electric Vehicle atau PHEV menggunakan mesin bensin dan motor listrik. Baterai PHEV dapat diisi dari sumber listrik eksternal sehingga pengguna memiliki fleksibilitas untuk perjalanan harian dan perjalanan jauh.",
    "excerpt": "PHEV menggabungkan mesin bensin dan motor listrik serta dapat diisi dari sumber listrik eksternal.",
    "category": "Teknologi",
    "tags": "PHEV,Hybrid,Teknologi",
    "author": "LEPAS Jogja"
  },
  {
    "title": "Leopard Aesthetics: Filosofi Desain di Balik Mobil LEPAS",
    "slug": "leopard-aesthetics-filosofi-desain-lepas",
    "thumbnail": "/images/lepas-brand.svg",
    "content": "Nama LEPAS mengambil inspirasi dari Leopard dan Passion. Filosofi Leopard Aesthetics menerjemahkan karakter lincah, kuat, dan elegan ke dalam identitas kendaraan LEPAS.",
    "excerpt": "Mengenal inspirasi leopard yang menjadi identitas desain dan karakter brand LEPAS.",
    "category": "Brand",
    "tags": "LEPAS,Leopard Aesthetics,Design",
    "author": "LEPAS Jogja"
  },
  {
    "title": "LEPAS E4 dan Arah Mobilitas Listrik LEPAS di Indonesia",
    "slug": "lepas-e4-mobilitas-listrik-indonesia",
    "thumbnail": "/images/lepas-e4-hero.svg",
    "content": "Selain LEPAS L8 PHEV, LEPAS Indonesia juga telah memperkenalkan LEPAS E4 sebagai model Battery Electric Vehicle (BEV), memperluas pilihan teknologi energi baru LEPAS.",
    "excerpt": "LEPAS E4 memperluas pilihan energi baru LEPAS dari PHEV menuju Battery Electric Vehicle.",
    "category": "Produk",
    "tags": "LEPAS E4,BEV,EV",
    "author": "LEPAS Jogja"
  }
] as const;

async function main() {
  await prisma.article.deleteMany();
  for (const article of articles) {
    await prisma.article.create({ data: article });
  }
  console.log(`Seeded ${articles.length} LEPAS articles.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
