import type { Etiket, Question } from "../shared/api";
import type { QuestionType } from "../shared/grade";

// Worker modüllerinin paylaştığı küçük yardımcılar: ayarlar, görünür soru koşulu, gün sınırları

export const GUN_MS = 86_400_000;
export const TR_FARK = 3 * 3_600_000;
// Türkiye saatine göre bugünün başlangıcı (ms)
export const bugunBasi = () => Math.floor((Date.now() + TR_FARK) / GUN_MS) * GUN_MS - TR_FARK;

export async function setting(db: D1Database, key: string): Promise<string | null> {
  const row = await db.prepare("SELECT value FROM settings WHERE key = ?").bind(key).first<{ value: string }>();
  return row?.value ?? null;
}

export async function currentWeek(db: D1Database): Promise<number> {
  return Number((await setting(db, "current_week")) ?? 1);
}

// show_original = '0' iken kitaptan ve çıkmışlardan gelen sorular hiçbir yerde gösterilmez
export async function showOriginal(db: D1Database): Promise<boolean> {
  return (await setting(db, "show_original")) !== "0";
}

// Sitede görünen soruların koşulu; sorguda questions tablosu q diye anılmalı
export async function gorunurKosul(db: D1Database): Promise<string> {
  const original = await showOriginal(db);
  return `q.active = 1 AND q.status = 'published' AND q.week <= ${await currentWeek(db)}${original ? "" : " AND q.source = 'derived'"}`;
}

// Soru listelerinde istemciye giden sütunlar; answer bilinçli olarak seçilmez.
// Sorguda questions q, önerenin users satırı u diye anılmalı.
export const SORU_SUTUNLARI = `q.id, q.topic_id, q.week, q.type, q.source, q.prompt, q.payload, q.difficulty, q.source_ref,
                      q.kavram, q.etiketler, u.username AS oneren`;

export type SoruListeSatiri = {
  id: string; topic_id: string; week: number; type: QuestionType;
  source: "original" | "derived"; prompt: string; payload: string;
  difficulty: number; source_ref: string | null; kavram: string | null; etiketler: string | null; oneren: string | null;
};

export const soruyaCevir = (r: SoruListeSatiri): Question => ({
  id: r.id,
  topicId: r.topic_id,
  week: r.week,
  type: r.type,
  source: r.source,
  prompt: r.prompt,
  payload: JSON.parse(r.payload),
  difficulty: r.difficulty,
  sourceRef: r.source_ref,
  kavram: r.kavram,
  etiketler: etiketleriAyir(r.etiketler, r.source),
  ...(r.oneren ? { oneren: r.oneren } : {}),
});

const ETIKETLER: Etiket[] = ["ges", "cikmis", "turetilmis"];

// "ges,cikmis" biçimindeki sütunu listeye çevirir; boşsa kaynaktan tahmin eder
export function etiketleriAyir(s: string | null, source: "original" | "derived"): Etiket[] {
  const liste = (s ?? "").split(",").map((x) => x.trim()).filter((x): x is Etiket => ETIKETLER.includes(x as Etiket));
  if (liste.length) return liste;
  return [source === "derived" ? "turetilmis" : "ges"];
}
