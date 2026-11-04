// Faz 3: eski bir pratik sitesinin verisini çatıya taşıyan SQL'i üretir.
// Kullanım (docs/tasima.md):
//   npx wrangler d1 export <eski-veritabani> --remote --output tasima/<pratik>-eski.sql
//   npx wrangler d1 export pratikler --remote --output tasima/pratikler.sql
//   npm run tasi -- tasima/<pratik>.json tasima/<pratik>-eski.sql tasima/pratikler.sql
// Çıktı: tasima/<pratik>-tasima.sql (kişisel veri içerir, .gitignore'da) ve ekranda rapor.
// Dökümler yalnızca okunur; hiçbir veritabanına yazılmaz.
import { readFileSync, writeFileSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";
import { pratikBul } from "../icerik/index.ts";
import { SORULAR } from "../icerik/sorular.ts";
import { TABLOLAR, tasimaPlani, type Tablolar, type TasimaAyari } from "./tasima.ts";

const [ayarYolu, eskiYolu, hedefYolu] = process.argv.slice(2);
if (!ayarYolu || !eskiYolu) {
  console.error("kullanım: npm run tasi -- <ayar.json> <eski döküm.sql> [çatı dökümü.sql]");
  process.exit(1);
}
const ayar = JSON.parse(readFileSync(ayarYolu, "utf8")) as TasimaAyari;
const meta = pratikBul(ayar.pratik);
if (!meta || !SORULAR[meta.id]) throw new Error(`bilinmeyen pratik: ${ayar.pratik} (icerik/index.ts)`);

function oku(yol: string | undefined): Tablolar {
  // Dökümde tablolar alfabetik sırada gelir; yabancı anahtar denetimi kapalı okunur
  const db = new DatabaseSync(":memory:", { enableForeignKeyConstraints: false });
  if (yol) db.exec(readFileSync(yol, "utf8"));
  const var_ = new Set((db.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all() as { name: string }[]).map((r) => r.name));
  const t = {} as Tablolar;
  for (const ad of TABLOLAR) t[ad] = var_.has(ad) ? (db.prepare(`SELECT * FROM ${ad}`).all() as Tablolar[typeof ad]) : [];
  db.close();
  return t;
}

const { konular, sorular } = SORULAR[meta.id]!;
const plan = tasimaPlani(oku(eskiYolu), oku(hedefYolu), ayar, {
  sorular: new Set(sorular.map((s) => s.id)),
  konular: new Set(konular.map((k) => k.id)),
  kavramlar: new Set(Object.keys(meta.kavramlar)),
});
if (!hedefYolu) plan.rapor.unshift("Uyarı: çatı dökümü verilmedi; hesaplar boş bir çatıya göre eşlendi (aynı e-posta birleşmesi yapılmadı).");

const cikti = ayarYolu.replace(/\.json$/, "-tasima.sql");
writeFileSync(cikti, plan.sql);
console.log(`${meta.ad} taşıma planı -> ${cikti}\n`);
for (const [k, n] of Object.entries(plan.sayilar)) console.log(`  ${k}: ${n}`);
if (plan.rapor.length) console.log("\n" + plan.rapor.map((r) => `- ${r}`).join("\n"));
console.log(`\nUygula: npx wrangler d1 execute pratikler --remote --file ${cikti}`);
