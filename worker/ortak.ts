import type { Etiket, Question, SoruIstatistigi } from "../shared/api";
import { perdele } from "../shared/perde";
import type { QuestionType } from "../shared/grade";

// Worker modüllerinin paylaştığı küçük yardımcılar: ayarlar, görünür soru koşulu, gün sınırları

export const GUN_MS = 86_400_000;
export const TR_FARK = 3 * 3_600_000;
// Türkiye saatine göre bugünün başlangıcı (ms)
export const bugunBasi = () => Math.floor((Date.now() + TR_FARK) / GUN_MS) * GUN_MS - TR_FARK;

// Ayarlar pratik başına tutulur: settings.key = "<pratik>:<ad>" (ör. "tip-elektronigi:current_week")
export async function setting(db: D1Database, pratik: string, key: string): Promise<string | null> {
  const row = await db.prepare("SELECT value FROM settings WHERE key = ?").bind(`${pratik}:${key}`).first<{ value: string }>();
  return row?.value ?? null;
}

export async function currentWeek(db: D1Database, pratik: string): Promise<number> {
  return Number((await setting(db, pratik, "current_week")) ?? 1);
}

// show_original = '0' iken kaynaktan ve çıkmışlardan gelen sorular hiçbir yerde gösterilmez
export async function showOriginal(db: D1Database, pratik: string): Promise<boolean> {
  return (await setting(db, pratik, "show_original")) !== "0";
}

// Pratik kimliği SQL'e gömülür; yalnızca icerik/index.ts'deki kimlikler kabul edilir
const KIMLIK = /^[a-z0-9-]+$/;
export function pratikKosulu(pratik: string, tablo = "q"): string {
  if (!KIMLIK.test(pratik)) throw new Error(`geçersiz pratik kimliği: ${pratik}`);
  return `${tablo}.practice_id = '${pratik}'`;
}

// Öğrenci soru havuzunun kodu (worker/havuz.ts); SQL'e gömüldüğü için biçimi sınırlıdır
export const HAVUZ_KODU = /^[a-z0-9]{6,12}$/;
export function havuzKosulu(kod: string, tablo = "q"): string {
  if (!HAVUZ_KODU.test(kod)) throw new Error(`geçersiz havuz kodu: ${kod}`);
  return `${tablo}.id IN (SELECT question_id FROM havuz_sorulari WHERE kod = '${kod}')`;
}

// Sitede görünen soruların koşulu; sorguda questions tablosu q diye anılmalı.
// Havuz açıksa yalnızca havuzdaki sorular görünür; hocanın seçtiği soru, ünitesi
// açılmamış ya da yedekte olsa da görünür.
export async function gorunurKosul(db: D1Database, pratik: string, havuz?: string | null): Promise<string> {
  const original = await showOriginal(db, pratik);
  // Kitap soruları sitede gizliyse havuzda da gizlidir
  if (havuz) return `${pratikKosulu(pratik)} AND q.active = 1 AND q.status = 'published' AND ${havuzKosulu(havuz)}${original ? "" : " AND q.source = 'derived'"}`;
  return `${pratikKosulu(pratik)} AND q.active = 1 AND q.status = 'published' AND q.week <= ${await currentWeek(db, pratik)}${original ? "" : " AND q.source = 'derived'"}`;
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

// Öğrenciye giden soru listeleri: cevap anahtarı ve açıklama perdelenmiş olarak, anonim
// toplamlar sayaç satırından eklenir. Cevap tarayıcıda değerlendirilir, böylece her cevap
// için sunucuya istek atılmaz (worker/cevaplar.ts toplu gelenleri yeniden puanlar).
export const SIK_SAYACLARI = 8;
const SAYAC_SUTUNLARI = ["kisi", "ilk_dogru", ...Array.from({ length: SIK_SAYACLARI }, (_, i) => `s${i}`)];
export const COZUMLU_SUTUNLAR = `${SORU_SUTUNLARI}, q.answer AS c_answer, q.explanation AS c_explanation,
  (SELECT json_array(${SAYAC_SUTUNLARI.map((s) => `y.${s}`).join(", ")}) FROM soru_sayaclari y WHERE y.question_id = q.id) AS c_sayac`;

export type CozumluSatir = SoruListeSatiri & { c_answer: string; c_explanation: string | null; c_sayac: string | null };

export function istatistikCoz(sayac: string | null, type: QuestionType, payload: string): SoruIstatistigi {
  const s = sayac ? (JSON.parse(sayac) as number[]) : [];
  const ist: SoruIstatistigi = { kisi: s[0] ?? 0, ilkDogru: s[1] ?? 0 };
  if (type === "mcq") {
    const sikSayisi = ((JSON.parse(payload) as { choices?: string[] }).choices ?? []).length;
    ist.siklar = Array.from({ length: sikSayisi }, (_, i) => s[2 + i] ?? 0);
  }
  return ist;
}

export const cozumluSoru = (r: CozumluSatir): Question => ({
  ...soruyaCevir(r),
  // Kod soruları sunucuda sınanır; anahtarları (referans model) istemciye gitmez
  ...(r.type === "code" || r.type === "wave"
    ? {}
    : { cozum: perdele(r.id, JSON.stringify({ a: JSON.parse(r.c_answer), e: r.c_explanation })) }),
  ist: istatistikCoz(r.c_sayac, r.type, r.payload),
});

// "ges,cikmis" biçimindeki sütunu listeye çevirir; boşsa kaynaktan tahmin eder
export function etiketleriAyir(s: string | null, source: "original" | "derived"): Etiket[] {
  const liste = (s ?? "").split(",").map((x) => x.trim()).filter(Boolean);
  if (liste.length) return liste;
  return [source === "derived" ? "turetilmis" : "kitap"];
}
