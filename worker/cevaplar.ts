// Cevapların kaydı. Tarayıcı cevabı kendisi değerlendirir ve cevapları biriktirip toplu
// gönderir (src/lib/kuyruk.ts); burada her cevap sunucudaki anahtarla yeniden puanlanır,
// deneme, tekrar kutusu ve soru sayaçları tek bir batch'te yazılır. Bir toplu istek,
// cevap sayısı kaç olursa olsun birkaç sorgu ve tek bir Worker isteğidir.

import type { Context } from "hono";
import { grade, type Answer, type QuestionType } from "../shared/grade";
import type { KuyrukCevabi } from "../shared/api";
import { GUN_MS, SIK_SAYACLARI, bugunBasi, gorunurKosul, pratikKosulu } from "./ortak";
import { pid } from "./pratik";
import type { Env } from "./session";
import { tekrarAdimi, type TekrarSatiri } from "./tekrar";
import type { GunlukDurum } from "../shared/motivasyon";

export type SoruSatiri = { id: string; type: QuestionType; source: string; payload: string; answer: string; explanation: string | null };

const OZLER = new Set(["dogru", "kismen", "yanlis"]);

// Sorunun türüne uymayan ya da bozuk cevap null döner
export function cevabiDuzelt(type: QuestionType, answer: unknown): Answer | null {
  if (!answer || typeof answer !== "object") return null;
  const a = answer as Record<string, unknown>;
  switch (type) {
    case "tf":
      return typeof a.value === "boolean" ? { value: a.value } : null;
    case "mcq":
      return Number.isInteger(a.index) && (a.index as number) >= 0 && (a.index as number) < 100 ? { index: a.index as number } : null;
    case "fill":
    case "num":
      return Array.isArray(a.blanks) && a.blanks.length <= 50 && a.blanks.every((b) => typeof b === "string" && b.length <= 500)
        ? { blanks: a.blanks as string[] }
        : null;
    case "yaz":
      return typeof a.oz === "string" && OZLER.has(a.oz)
        ? { oz: a.oz as "dogru", ...(typeof a.yazi === "string" ? { yazi: a.yazi.slice(0, 4000) } : {}) }
        : null;
    default:
      // code ve wave bu yoldan cevaplanmaz
      return null;
  }
}

// Sitede görünen (yayında, gizli değil, haftası gelmiş) sorular; havuzdaki soru, ünitesi
// açılmamış ya da kitap sorusu olsa da cevaplanabilir
export async function yayindakiSorular(c: Context<Env>, kimlikler: string[]): Promise<{ sorular: Map<string, SoruSatiri>; gorunur: string }> {
  const db = c.env.DB;
  const gorunur = await gorunurKosul(db, pid(c));
  const kod = c.get("havuz");
  const kosul = kod ? `((${gorunur}) OR (${await gorunurKosul(db, pid(c), kod)}))` : `(${gorunur})`;
  const tekil = [...new Set(kimlikler)];
  if (tekil.length === 0) return { sorular: new Map(), gorunur };
  const { results } = await db.prepare(
    `SELECT q.id, q.type, q.source, q.payload, q.answer, q.explanation FROM questions q
     WHERE q.id IN (${tekil.map(() => "?").join(", ")}) AND ${kosul}`,
  ).bind(...tekil).all<SoruSatiri>();
  return { sorular: new Map(results.map((r) => [r.id, r])), gorunur };
}

// Doğru bir cevaptan sonra bugünkü doğru sayısı; istemci hedefe ulaşıldıysa kutlar.
// Günlük hedef pratik başınadır: yalnızca bu pratiğin sorularındaki doğrular sayılır.
export async function gunlukDurum(db: D1Database, pratik: string, userId: string, hedef: number): Promise<GunlukDurum> {
  const r = await db.prepare(
    `SELECT COALESCE(SUM(a.correct), 0) AS dogru FROM attempts a JOIN questions q ON q.id = a.question_id
     WHERE a.user_id = ? AND a.created_at >= ? AND ${pratikKosulu(pratik)}`,
  )
    .bind(userId, bugunBasi())
    .first<{ dogru: number }>();
  return { dogru: r?.dogru ?? 0, hedef };
}

// Kişinin bir sorudaki ilk denemesi anonim toplamlara eklenir
export function sayacArtir(db: D1Database, soruId: string, dogru: boolean, answer: unknown): D1PreparedStatement {
  const i = (answer as { index?: unknown } | null)?.index;
  const sik = typeof i === "number" && Number.isInteger(i) && i >= 0 && i < SIK_SAYACLARI ? `s${i}` : null;
  return db.prepare(
    `INSERT INTO soru_sayaclari (question_id, kisi, ilk_dogru${sik ? `, ${sik}` : ""}) VALUES (?1, 1, ?2${sik ? ", 1" : ""})
     ON CONFLICT(question_id) DO UPDATE SET kisi = kisi + 1, ilk_dogru = ilk_dogru + ?2${sik ? `, ${sik} = ${sik} + 1` : ""}`,
  ).bind(soruId, dogru ? 1 : 0);
}

export const denemeEkle = (db: D1Database, userId: string, soruId: string, dogru: boolean, answer: unknown, at: number) =>
  db.prepare("INSERT INTO attempts (user_id, question_id, correct, answer, created_at) VALUES (?, ?, ?, ?, ?)")
    .bind(userId, soruId, dogru ? 1 : 0, JSON.stringify(answer), at);

// Kişinin bu sorulardan daha önce denedikleri
export async function denenenler(db: D1Database, userId: string, kimlikler: string[]): Promise<Set<string>> {
  if (kimlikler.length === 0) return new Set();
  const { results } = await db.prepare(
    `SELECT DISTINCT question_id AS id FROM attempts WHERE user_id = ? AND question_id IN (${kimlikler.map(() => "?").join(", ")})`,
  ).bind(userId, ...kimlikler).all<{ id: string }>();
  return new Set(results.map((r) => r.id));
}

// Eski cevaplar en çok bu kadar geriye yazılır (çevrimdışı kalan tarayıcı sonradan gönderebilir)
const EN_ESKI_MS = 7 * GUN_MS;

export interface IslenenCevap {
  id: string;
  soru: SoruSatiri;
  answer: Answer;
  dogru: boolean;
}

// Cevapları sırayla puanlar ve kaydeder. Görünmeyen soruların ya da bozuk cevapların
// kaydı atlanır (istemci kuyruğu takılmasın diye hata verilmez).
export async function cevaplariKaydet(c: Context<Env>, userId: string, cevaplar: KuyrukCevabi[]): Promise<IslenenCevap[]> {
  const db = c.env.DB;
  const { sorular, gorunur } = await yayindakiSorular(c, cevaplar.map((x) => x.id));
  const kimlikler = [...sorular.keys()];
  if (kimlikler.length === 0) return [];

  const [denenen, tekrarSatirlari] = await Promise.all([
    denenenler(db, userId, kimlikler),
    db.prepare(
      `SELECT question_id, kutu, sonraki, kaynak, son_tekrar FROM tekrarlar WHERE user_id = ? AND question_id IN (${kimlikler.map(() => "?").join(", ")})`,
    ).bind(userId, ...kimlikler).all<TekrarSatiri & { question_id: string }>(),
  ]);
  const kutular = new Map<string, TekrarSatiri | null>(tekrarSatirlari.results.map(({ question_id, ...r }) => [question_id, r]));

  const simdi = Date.now();
  const bugun = bugunBasi();
  const sorgular: D1PreparedStatement[] = [];
  const islenen: IslenenCevap[] = [];
  for (const x of cevaplar) {
    const soru = sorular.get(x.id);
    const answer = soru && cevabiDuzelt(soru.type, x.answer);
    if (!soru || !answer) continue;
    const dogru = grade(soru.type, JSON.parse(soru.answer), answer);
    const at = typeof x.at === "number" && Number.isFinite(x.at) ? Math.min(simdi, Math.max(simdi - EN_ESKI_MS, Math.floor(x.at))) : simdi;
    sorgular.push(denemeEkle(db, userId, x.id, dogru, answer, at));
    if (!denenen.has(x.id)) {
      denenen.add(x.id);
      sorgular.push(sayacArtir(db, x.id, dogru, answer));
    }
    const adim = tekrarAdimi(db, gorunur, userId, x.id, dogru, kutular.get(x.id) ?? null, simdi, bugun);
    sorgular.push(...adim.sorgular);
    kutular.set(x.id, adim.yeni);
    islenen.push({ id: x.id, soru, answer, dogru });
  }
  if (sorgular.length) await db.batch(sorgular);
  return islenen;
}
