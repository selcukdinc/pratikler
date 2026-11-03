// Çatı sitesi (pratikler.selcukdinc.dev) uçları; her alan adından çağrılabilir.
// /api/katalog: yayındaki pratikler ve soru sayıları
// /api/katalog/ilerleme: oturumdaki kişinin her pratikteki ilerlemesi
import { Hono } from "hono";
import { PRATIKLER } from "../icerik/index";
import type { KatalogPratik, PratikIlerlemesi } from "../shared/api";
import type { Env } from "./session";
import { SON_KUTU } from "../shared/tekrar";

export const katalog = new Hono<Env>();

const yayinda = () => PRATIKLER.filter((p) => p.yayinda);

katalog.get("/", async (c) => {
  const { results } = await c.env.DB.prepare(
    `SELECT q.practice_id AS id, COUNT(*) AS soru
     FROM questions q
     WHERE q.active = 1 AND q.status = 'published' AND q.yedek = 0
       AND q.week <= COALESCE((SELECT CAST(value AS INTEGER) FROM settings WHERE key = q.practice_id || ':current_week'), 1)
     GROUP BY q.practice_id`,
  ).all<{ id: string; soru: number }>();
  const sayi = new Map(results.map((r) => [r.id, r.soru]));
  return c.json<KatalogPratik[]>(
    yayinda().map((p) => ({ id: p.id, alt: p.alt, ad: p.ad, alan: p.alan, aciklama: p.aciklama, unite: p.uniteler.length, soru: sayi.get(p.id) ?? 0 })),
  );
});

katalog.get("/ilerleme", async (c) => {
  const me = c.get("me");
  if (!me) return c.json<PratikIlerlemesi[]>([]);
  const db = c.env.DB;
  const [d, t] = await db.batch([
    db.prepare(
      `SELECT q.practice_id AS id, COUNT(DISTINCT a.question_id) AS denenen,
              COUNT(DISTINCT CASE WHEN a.correct = 1 THEN a.question_id END) AS dogru,
              MAX(a.created_at) AS son
       FROM attempts a JOIN questions q ON q.id = a.question_id
       WHERE a.user_id = ? GROUP BY q.practice_id`,
    ).bind(me.id),
    db.prepare(
      `SELECT q.practice_id AS id, COUNT(*) AS bekleyen
       FROM tekrarlar t JOIN questions q ON q.id = t.question_id
       WHERE t.user_id = ? AND t.kutu <= ${SON_KUTU} AND t.sonraki <= ? GROUP BY q.practice_id`,
    ).bind(me.id, Date.now()),
  ]);
  const bekleyen = new Map((t!.results as { id: string; bekleyen: number }[]).map((r) => [r.id, r.bekleyen]));
  const ids = new Set(yayinda().map((p) => p.id));
  return c.json<PratikIlerlemesi[]>(
    (d!.results as { id: string; denenen: number; dogru: number; son: number }[])
      .filter((r) => ids.has(r.id))
      .map((r) => ({ ...r, bekleyen: bekleyen.get(r.id) ?? 0 }))
      .sort((a, b) => b.son - a.son),
  );
});
