// Bir pratiğin sorularını (icerik/<pratik>/sorular) D1 için SQL'e çevirir.
// Kullanım: npm run sorular:sql -- <pratik> <hedef>
//   örnek:  npm run sorular:sql -- tip-elektronigi migrations/0002_tip_elektronigi.sql
// Upsert kullanır: aynı kimlikli soru varsa günceller, eski denemeler korunur.
// Yönetim panelinde değiştirilmiş sorulara (updated_at dolu) dokunulmaz.
import { writeFileSync } from "node:fs";
import { PRATIKLER, pratikBul } from "../icerik/index.ts";
import { SORULAR } from "../icerik/sorular.ts";
import type { Soru } from "../icerik/tipler.ts";

const [pratikId, hedef] = process.argv.slice(2);
const pratik = pratikId ? pratikBul(pratikId) : undefined;
if (!pratik || !hedef) {
  console.error(`kullanım: npm run sorular:sql -- <${PRATIKLER.map((p) => p.id).join("|")}> <hedef dosya>`);
  process.exit(1);
}
const { konular, sorular } = SORULAR[pratik.id]!;

const md = (s: string) => s.replace(/~/g, "`");
const q = (s: string | null) => (s === null ? "NULL" : `'${s.replace(/'/g, "''")}'`);

function payload(s: Soru): object {
  if (s.tip === "mcq") return { choices: s.secenekler.map(md), ...(s.sabit ? { sabit: true } : {}) };
  if (s.tip === "fill") return { blanks: s.bosluklar.length };
  return {};
}

function cevap(s: Soru): object {
  if (s.tip === "tf") return { value: s.dogru };
  if (s.tip === "mcq") return { index: s.dogru };
  return { blanks: s.bosluklar };
}

// Kimlikler bütün pratiklerde tek olmalı (topics ve questions tek tablo)
const baskaKimlikler = new Map<string, string>();
for (const [id, p] of Object.entries(SORULAR)) {
  if (id === pratik.id) continue;
  for (const k of p.konular) baskaKimlikler.set(k.id, id);
  for (const s of p.sorular) baskaKimlikler.set(s.id, id);
}

// Temel denetimler: hatalı bir soru veritabanına girmesin
const etiketler = new Set(pratik.etiketler.map((e) => e.id));
const kimlikler = new Set<string>();
for (const k of konular) {
  if (baskaKimlikler.has(k.id)) throw new Error(`konu kimliği ${k.id} ${baskaKimlikler.get(k.id)} pratiğinde de var`);
}
const konuKimlik = new Set(konular.map((k) => k.id));
for (const s of sorular) {
  if (kimlikler.has(s.id)) throw new Error(`tekrarlanan soru kimliği: ${s.id}`);
  if (baskaKimlikler.has(s.id)) throw new Error(`soru kimliği ${s.id} ${baskaKimlikler.get(s.id)} pratiğinde de var`);
  kimlikler.add(s.id);
  if (!konuKimlik.has(s.konu)) throw new Error(`${s.id}: bilinmeyen konu ${s.konu}`);
  const konu = konular.find((k) => k.id === s.konu)!;
  if (konu.hafta !== s.hafta) throw new Error(`${s.id}: hafta konuyla uyuşmuyor`);
  if (s.tip === "mcq" && !(s.dogru >= 0 && s.dogru < s.secenekler.length)) throw new Error(`${s.id}: geçersiz doğru şık`);
  if (s.tip === "fill" && s.bosluklar.some((b) => b.length === 0)) throw new Error(`${s.id}: boş cevap listesi`);
  if (!pratik.kavramlar[s.kavram]) throw new Error(`${s.id}: kavramı yok (icerik/${pratik.id}/meta.ts)`);
  if (!s.etiketler.length) throw new Error(`${s.id}: etiketi yok`);
  for (const e of s.etiketler) if (!etiketler.has(e)) throw new Error(`${s.id}: bilinmeyen etiket ${e}`);
}

const p = q(pratik.id);
const satirlar: string[] = [
  `-- Bu dosya scripts/sorular-sql.ts ile icerik/${pratik.id}/sorular'dan üretildi, elle düzenlemeyin.`,
  "",
];
for (const k of konular) {
  satirlar.push(
    `INSERT INTO topics (id, practice_id, title, week, sort) VALUES (${q(k.id)}, ${p}, ${q(k.baslik)}, ${k.hafta}, ${k.sira})\n` +
      `  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;`,
  );
}
satirlar.push("");
for (const s of sorular) {
  satirlar.push(
    "INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)\n" +
      `VALUES (${q(s.id)}, ${p}, ${q(s.konu)}, ${s.hafta}, ${q(s.tip)}, ${q(s.kaynak)}, ${q(md(s.soru))}, ` +
      `${q(JSON.stringify(payload(s)))}, ${q(JSON.stringify(cevap(s)))}, ${q(md(s.aciklama))}, ${s.zorluk}, ${q(s.ref)}, 1)\n` +
      "  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,\n" +
      "    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,\n" +
      "    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1\n" +
      "  WHERE questions.updated_at IS NULL;",
  );
}

// Kavram, yedek ve etiketler panelden düzenlenmez; panelde değiştirilmiş sorularda da güncellenir
satirlar.push("");
for (const s of sorular) {
  satirlar.push(
    `UPDATE questions SET kavram = ${q(s.kavram)}, yedek = ${s.yedek ? 1 : 0}, etiketler = ${q(s.etiketler.join(","))} WHERE id = ${q(s.id)};`,
  );
}

writeFileSync(hedef, satirlar.join("\n") + "\n");
const sayim = pratik.etiketler.map((e) => `${e.ad} ${sorular.filter((s) => s.etiketler.includes(e.id)).length}`).join(", ");
console.log(`${hedef}: ${pratik.ad}, ${konular.length} konu, ${sorular.length} soru (${sayim}, yedek ${sorular.filter((s) => s.yedek).length})`);
