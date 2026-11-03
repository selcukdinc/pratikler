// content/sorular altındaki soruları D1 için SQL'e çevirir.
// Kullanım: npm run sorular:sql -- migrations/0002_sorular.sql
// Upsert kullanır: aynı kimlikli soru varsa günceller, eski denemeler korunur.
// Yönetim panelinde değiştirilmiş sorulara (updated_at dolu) dokunulmaz.
import { writeFileSync } from "node:fs";
import { konular, sorular } from "../content/sorular/index.ts";
import { KAVRAMLAR } from "../shared/kavramlar.ts";
import type { Soru } from "../content/sorular/tipler.ts";

const hedef = process.argv[2];
if (!hedef) {
  console.error("hedef dosya verilmedi");
  process.exit(1);
}

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

// Temel denetimler: hatalı bir soru veritabanına girmesin
const kimlikler = new Set<string>();
const konuKimlik = new Set(konular.map((k) => k.id));
for (const s of sorular) {
  if (kimlikler.has(s.id)) throw new Error(`tekrarlanan soru kimliği: ${s.id}`);
  kimlikler.add(s.id);
  if (!konuKimlik.has(s.konu)) throw new Error(`${s.id}: bilinmeyen konu ${s.konu}`);
  const konu = konular.find((k) => k.id === s.konu)!;
  if (konu.hafta !== s.hafta) throw new Error(`${s.id}: hafta konuyla uyuşmuyor`);
  if (s.tip === "mcq" && !(s.dogru >= 0 && s.dogru < s.secenekler.length)) throw new Error(`${s.id}: geçersiz doğru şık`);
  if (s.tip === "fill" && s.bosluklar.some((b) => b.length === 0)) throw new Error(`${s.id}: boş cevap listesi`);
  if (!KAVRAMLAR[s.kavram]) throw new Error(`${s.id}: kavramı yok (shared/kavramlar.ts)`);
  if (!s.etiketler.length) throw new Error(`${s.id}: etiketi yok`);
}

const satirlar: string[] = [
  "-- Bu dosya scripts/sorular-sql.ts ile content/sorular'dan üretildi, elle düzenlemeyin.",
  "",
];
for (const k of konular) {
  satirlar.push(
    `INSERT INTO topics (id, title, week, sort) VALUES (${q(k.id)}, ${q(k.baslik)}, ${k.hafta}, ${k.sira})\n` +
      `  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;`,
  );
}
satirlar.push("");
for (const s of sorular) {
  satirlar.push(
    "INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)\n" +
      `VALUES (${q(s.id)}, ${q(s.konu)}, ${s.hafta}, ${q(s.tip)}, ${q(s.kaynak)}, ${q(md(s.soru))}, ` +
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
const say = (f: (s: Soru) => boolean) => sorular.filter(f).length;
console.log(
  `${hedef}: ${konular.length} konu, ${sorular.length} soru ` +
    `(GES ${say((s) => s.etiketler.includes("ges"))}, çıkmış ${say((s) => s.etiketler.includes("cikmis"))}, ` +
    `türetilmiş ${say((s) => s.kaynak === "derived")}, yedek ${say((s) => !!s.yedek)})`,
);
