// Öğrenci soru havuzu: /api/havuzlar. Akademisyen sınavındaki (ya da seçtiği)
// soruları kısa bir kodla öğrencilere açar. Öğrencinin istemcisi kodu X-Havuz
// başlığıyla gönderir; havuzAyarla geçerli kodu c.var.havuz'a yazar ve soru
// listesi, cevaplama ve tekrar yalnızca havuzdaki sorularla çalışır.
// Havuz ucu cevap göndermez.

import { Hono, type MiddlewareHandler } from "hono";
import { HAVUZ_SORU_EN_COK, type HavuzBilgisi, type HavuzOzeti } from "../shared/sinav";
import { HAVUZ_KODU, havuzKosulu, pratikKosulu } from "./ortak";
import { pid } from "./pratik";
import type { Env } from "./session";
import { yetkisiVar } from "./yetki";

export const havuz = new Hono<Env>();

// Geçerli bir havuz kodu bu pratikte varsa istek o havuzla sınırlanır; yoksa yok sayılır
export const havuzAyarla: MiddlewareHandler<Env> = async (c, next) => {
  c.set("havuz", null);
  const kod = c.req.header("X-Havuz")?.toLowerCase();
  if (kod && HAVUZ_KODU.test(kod) && c.get("pratik")) {
    const var_ = await c.env.DB.prepare("SELECT 1 FROM havuzlar WHERE kod = ? AND practice_id = ?").bind(kod, pid(c)).first();
    if (var_) c.set("havuz", kod);
  }
  await next();
};

// Karışmayan harfler: 0/o, 1/l/i yok
const HARFLER = "abcdefghjkmnpqrstuvwxyz23456789";
const yeniKod = () => [...crypto.getRandomValues(new Uint8Array(6))].map((b) => HARFLER[b % HARFLER.length]).join("");

type Govde = { ad?: unknown; sonTarih?: unknown; sorular?: unknown; sinav?: unknown };
type Gecerli = { ad: string; sonTarih: string | null; sorular: string[]; sinav: string | null };

function denetle(b: Govde): Gecerli | string {
  const ad = typeof b.ad === "string" ? b.ad.trim() : "";
  if (!ad || ad.length > 120) return "Havuzun adı 1 ile 120 karakter arasında olmalı.";
  const sonTarih = b.sonTarih === null || b.sonTarih === undefined || b.sonTarih === "" ? null : b.sonTarih;
  if (sonTarih !== null && (typeof sonTarih !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(sonTarih))) return "Son tarih geçersiz.";
  if (!Array.isArray(b.sorular) || !b.sorular.every((x) => typeof x === "string" && x.length <= 80)) return "Soru listesi okunamadı.";
  const sorular = [...new Set(b.sorular as string[])];
  if (!sorular.length) return "Havuzda en az bir soru olmalı.";
  if (sorular.length > HAVUZ_SORU_EN_COK) return `Bir havuzda en çok ${HAVUZ_SORU_EN_COK} soru olabilir.`;
  const sinav = typeof b.sinav === "string" && b.sinav.length <= 40 ? b.sinav : null;
  return { ad, sonTarih, sorular, sinav };
}

// Soruları yazar: yalnızca bu pratikte yayında olanlar alınır
async function sorulariYaz(db: D1Database, pratik: string, kod: string, sorular: string[]) {
  const sorgular = [db.prepare("DELETE FROM havuz_sorulari WHERE kod = ?").bind(kod)];
  for (let i = 0; i < sorular.length; i += 90) {
    const parca = sorular.slice(i, i + 90);
    sorgular.push(db.prepare(
      `INSERT OR IGNORE INTO havuz_sorulari (kod, question_id)
       SELECT ?, q.id FROM questions q WHERE ${pratikKosulu(pratik)} AND q.active = 1 AND q.status = 'published'
         AND q.id IN (${parca.map(() => "?").join(", ")})`,
    ).bind(kod, ...parca));
  }
  await db.batch(sorgular);
}

const yetkili = (c: Parameters<MiddlewareHandler<Env>>[0]) => yetkisiVar(c.get("me"), "havuz.ac", pid(c));
const YETKI_YOK = { error: "Soru havuzu açmak için bu dersin alanında olan bir akademisyen hesabı gerekir." };

type Satir = { kod: string; ad: string; son_tarih: string | null; sinav_id: string | null; updated_at: number; soru_sayisi: number };
const ozet = (r: Satir): HavuzOzeti => ({ kod: r.kod, ad: r.ad, sonTarih: r.son_tarih, sinavId: r.sinav_id, soruSayisi: r.soru_sayisi, guncellendi: r.updated_at });
const OZET_SQL = `SELECT h.kod, h.ad, h.son_tarih, h.sinav_id, h.updated_at, (SELECT COUNT(*) FROM havuz_sorulari s WHERE s.kod = h.kod) AS soru_sayisi
                  FROM havuzlar h`;

// Kişinin bu pratikteki havuzları
havuz.get("/", async (c) => {
  if (!yetkili(c)) return c.json(YETKI_YOK, 403);
  const { results } = await c.env.DB.prepare(`${OZET_SQL} WHERE h.sahip = ? AND h.practice_id = ? ORDER BY h.updated_at DESC LIMIT 200`)
    .bind(c.get("me")!.id, pid(c)).all<Satir>();
  return c.json<HavuzOzeti[]>(results.map(ozet));
});

// Yeni havuz. Aynı sınavdan daha önce açılmış bir havuz varsa o güncellenir (kod değişmez)
havuz.post("/", async (c) => {
  if (!yetkili(c)) return c.json(YETKI_YOK, 403);
  const g = denetle(await c.req.json<Govde>().catch(() => ({})));
  if (typeof g === "string") return c.json({ error: g }, 400);
  const db = c.env.DB;
  const me = c.get("me")!;
  const simdi = Date.now();
  const eski = g.sinav
    ? await db.prepare("SELECT kod FROM havuzlar WHERE sinav_id = ? AND sahip = ? AND practice_id = ?").bind(g.sinav, me.id, pid(c)).first<{ kod: string }>()
    : null;
  let kod = eski?.kod;
  if (kod) {
    await db.prepare("UPDATE havuzlar SET ad = ?, son_tarih = ?, updated_at = ? WHERE kod = ?").bind(g.ad, g.sonTarih, simdi, kod).run();
  } else {
    for (let i = 0; i < 5 && !kod; i++) {
      const aday = yeniKod();
      const r = await db.prepare(
        "INSERT OR IGNORE INTO havuzlar (kod, practice_id, sahip, ad, son_tarih, sinav_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      ).bind(aday, pid(c), me.id, g.ad, g.sonTarih, g.sinav, simdi, simdi).run();
      if (r.meta.changes) kod = aday;
    }
    if (!kod) return c.json({ error: "Havuz kodu üretilemedi; yeniden dene." }, 500);
  }
  await sorulariYaz(db, pid(c), kod, g.sorular);
  const r = await db.prepare(`${OZET_SQL} WHERE h.kod = ?`).bind(kod).first<Satir>();
  return c.json<HavuzOzeti>(ozet(r!));
});

havuz.delete("/:kod", async (c) => {
  if (!yetkili(c)) return c.json(YETKI_YOK, 403);
  const kod = c.req.param("kod");
  const db = c.env.DB;
  const r = await db.prepare("DELETE FROM havuzlar WHERE kod = ? AND sahip = ? AND practice_id = ?").bind(kod, c.get("me")!.id, pid(c)).run();
  if (!r.meta.changes) return c.json({ error: "havuz bulunamadı" }, 404);
  await db.prepare("DELETE FROM havuz_sorulari WHERE kod = ?").bind(kod).run();
  return c.json({ ok: true });
});

// Bağlantıyı açan herkes için havuz bilgisi; üyeye havuzdan kaç soruyu doğru çözdüğü de gider
havuz.get("/:kod", async (c) => {
  const kod = c.req.param("kod").toLowerCase();
  if (!HAVUZ_KODU.test(kod)) return c.json({ error: "havuz bulunamadı" }, 404);
  const db = c.env.DB;
  const h = await db.prepare(
    `SELECT h.kod, h.ad, h.son_tarih, COALESCE(u.display_name, u.username) AS hoca,
            (SELECT COUNT(*) FROM havuz_sorulari s WHERE s.kod = h.kod) AS soru_sayisi
     FROM havuzlar h LEFT JOIN users u ON u.id = h.sahip WHERE h.kod = ? AND h.practice_id = ?`,
  ).bind(kod, pid(c)).first<{ kod: string; ad: string; son_tarih: string | null; hoca: string | null; soru_sayisi: number }>();
  if (!h) return c.json({ error: "havuz bulunamadı" }, 404);
  const me = c.get("me");
  let cozulen: number | null = null;
  if (me) {
    const r = await db.prepare(
      `SELECT COUNT(DISTINCT a.question_id) AS n FROM attempts a JOIN questions q ON q.id = a.question_id
       WHERE a.user_id = ? AND a.correct = 1 AND ${havuzKosulu(kod)}`,
    ).bind(me.id).first<{ n: number }>();
    cozulen = r?.n ?? 0;
  }
  return c.json<HavuzBilgisi>({ kod: h.kod, ad: h.ad, hoca: h.hoca, sonTarih: h.son_tarih, soruSayisi: h.soru_sayisi, cozulen });
});
