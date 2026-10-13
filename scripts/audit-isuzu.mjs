import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root,p),'utf8');
const exists = (p) => fs.existsSync(path.join(root,p));
const tests = [];
const assert = (title, condition, detail='') => tests.push({title,pass:Boolean(condition),detail});
const homePath='src/app/HomeClient.tsx';
const home = exists(homePath) ? read(homePath) : '';
assert('Halaman beranda tersedia',Boolean(home));
assert('Hero menggunakan gambar branding Isuzu',home.includes('/images/isuzu/hero/isuzu-city-lineup.png') && exists('public/images/isuzu/hero/isuzu-city-lineup.png'));
assert('Hero bukan video',!/<HeroVideo\s*\/?\s*>/.test(home));
assert('Tulisan hero berada di kode', /Real Partner/i.test(home)&&/Real Journey/i.test(home)&&/Lihat Produk/i.test(home));
for(const id of ['models','solutions','services','promo']) assert(`Bagian #${id} ada`,new RegExp(`id=["']${id}["']`).test(home));
for(const p of ['src/app/produk/page.tsx','src/app/simulasi-kredit/page.tsx','src/app/kontak/page.tsx','src/app/tentang-kami/page.tsx']) assert(`Halaman ${p} tersedia`,exists(p));
const checkFiles=[homePath,'src/app/simulasi-kredit/page.tsx','src/app/kontak/page.tsx','src/app/tentang-kami/page.tsx'];
let total=0;
for(const file of checkFiles){
 if(!exists(file))continue;
 const src=read(file);
 for(const match of src.matchAll(/(?:src|sceneSrc)\s*[:=]\s*[\{\s]*["'](\/images\/[^"']+)["']/g)){
  total++;const asset='public'+match[1];assert(`Aset ${match[1]}`,exists(asset),`dipakai pada ${file}`);
 }
}
const fails=tests.filter(x=>!x.pass);
console.log(`Audit Isuzu: ${tests.length-fails.length}/${tests.length} pemeriksaan lolos; ${total} referensi gambar dicek.`);
for(const t of tests) console.log(`${t.pass?'PASS':'FAIL'} ${t.title}${t.detail?' — '+t.detail:''}`);
console.log('\nCatatan: audit ini statis; lanjutkan dengan npm run typecheck, npm run lint dan npm run build.');
process.exitCode=fails.length?1:0;
