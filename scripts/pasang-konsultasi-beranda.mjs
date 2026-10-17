import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const homePath = 'src/app/HomeClient.tsx';
const headerPath = 'src/components/Header.tsx';
if (!existsSync(homePath) || !existsSync(headerPath)) {
  console.error('Jalankan script ini dari root proyek Isuzu. HomeClient.tsx atau Header.tsx tidak ditemukan.');
  process.exit(1);
}
let home = readFileSync(homePath, 'utf8');
if (!home.includes('ConsultationHomeSection')) {
  const importLine = "import ConsultationHomeSection from '@/components/ConsultationHomeSection';\n";
  if (!home.includes("import Header from '@/components/Header';")) {
    console.error('Format import Header tidak dikenali. Tidak ada file yang diubah.');
    process.exit(1);
  }
  if (!home.includes('id="home"')) {
    console.error('Penanda section hero tidak ditemukan. Tidak ada file yang diubah.');
    process.exit(1);
  }
  // Insert at the end of the hero section, before the next section.
  const heroPos = home.indexOf('id="home"');
  const nextSection = home.indexOf('</section>', heroPos);
  if (nextSection < 0) { console.error('Penutup section hero tidak ditemukan.'); process.exit(1); }
  const afterHero = nextSection + '</section>'.length;
  home = home.replace("import Header from '@/components/Header';", "import Header from '@/components/Header';\n" + importLine.trimEnd());
  home = home.slice(0, home.indexOf('</section>', home.indexOf('id="home"')) + '</section>'.length) + '\n\n        <ConsultationHomeSection />' + home.slice(home.indexOf('</section>', home.indexOf('id="home"')) + '</section>'.length);
}
let header = readFileSync(headerPath, 'utf8');
header = header.replace(/^\s*\['Konsultan Armada',\s*'\/konsultasi-armada'\],\s*\r?\n/m, '\n');
writeFileSync(homePath, home);
writeFileSync(headerPath, header);
console.log('Selesai: section konsultasi dipasang setelah hero dan menu Konsultan Armada dihapus dari header.');
