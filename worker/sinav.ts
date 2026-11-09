// Akademisyenin sınav kağıtları: /api/sinavlar. Pratiğe özgüdür; yalnızca
// "sinav.hazirla" izni olan (yönetici ya da akademisyen) kullanabilir. Herkes yalnızca
// kendi sınavlarını görür. Belgenin biçimi shared/sinav.ts'te denetlenir.

import { Hono, type Context } from "hono";
import {
  SINAV_BELGE_EN_BUYUK, sinavBelgesiHatasi, varsayilanAyar,
  type Sinav, type SinavBelgesi, type SinavOzeti, type SinavSorusu,
} from "../shared/sinav";
import { SORU_SUTUNLARI, pratikKosulu, soruyaCevir, type SoruListeSatiri } from "./ortak";
import { pid } from "./pratik";
import type { Env } from "./session";
import { yetkisiVar } from "./yetki";

type C = Context<Env>;
export const sinav = new Hono<Env>();

sinav.use("*", async (c, next) => {
  const me = c.get("me");
  if (!yetkisiVar(me, "sinav.hazirla", pid(c))) {
    return c.json({ error: me?.role === "akademisyen" ? "Bu ders senin alanında değil; alanlarına eklenmesi için yöneticiye yaz." : "Sınav hazırlamak için akademisyen hesabı gerekir." }, 403);
  }
  await next();
});

type Satir = { id: string; ad: string; belge: string; soru_sayisi: number; created_at: number; updated_at: number };
const ozet = (r: Satir): SinavOzeti => ({ id: r.id, ad: r.ad, soruSayisi: r.soru_sayisi, olusturuldu: r.created_at, guncellendi: r.updated_at });
const soruSayisi = (b: SinavBelgesi) => b.ogeler.filter((o) => o.tur === "soru").length;

async function kendi(c: C): Promise<Satir | null> {
  return c.env.DB.prepare("SELECT * FROM sinavlar WHERE id = ? AND sahip = ? AND practice_id = ?")
    .bind(c.req.param("id"), c.get("me")!.id, pid(c))
    .first<Satir>();
}

// Sınava eklenebilecek sorular: yayındaki bütün sorular (ünite açılmamış olsa da),
// cevap ve açıklamayla birlikte. Kod soruları kağıda basılamadığı için gelmez.
// Seçicide süzmek için konu adı, ilk deneme başarısı (her kişinin ilk denemesi, anonim
// toplam) ve kişinin bu pratikteki sınavlarında kaç kez kullanıldığı da gelir.
sinav.get("/sorular", async (c) => {
  const db = c.env.DB;
  const kosul = `${pratikKosulu(pid(c))} AND q.active = 1 AND q.status = 'published' AND q.type NOT IN ('code', 'wave')`;
  const [sorular, basari, sinavlar] = await db.batch([
    db.prepare(
      `SELECT ${SORU_SUTUNLARI}, q.answer, q.explanation, t.title AS konu
       FROM questions q JOIN topics t ON t.id = q.topic_id LEFT JOIN users u ON u.id = q.suggested_by
       WHERE ${kosul}
       ORDER BY q.week, t.sort, q.difficulty, q.rowid`,
    ),
    db.prepare(
      `SELECT a.question_id AS id, COUNT(*) AS kisi, COALESCE(SUM(a.correct), 0) AS dogru
       FROM attempts a JOIN (
         SELECT MIN(b.id) AS ilk FROM attempts b JOIN questions q ON q.id = b.question_id
         WHERE ${kosul} GROUP BY b.question_id, b.user_id
       ) f ON f.ilk = a.id
       GROUP BY a.question_id`,
    ),
    db.prepare("SELECT belge FROM sinavlar WHERE sahip = ? AND practice_id = ?").bind(c.get("me")!.id, pid(c)),
  ]);
  const b = new Map((basari!.results as { id: string; kisi: number; dogru: number }[]).map((r) => [r.id, { kisi: r.kisi, dogru: r.dogru }]));
  const kullanim = new Map<string, number>();
  for (const r of sinavlar!.results as { belge: string }[]) {
    try {
      const kimlikler = new Set((JSON.parse(r.belge) as SinavBelgesi).ogeler.flatMap((o) => (o.tur === "soru" ? [o.soruId] : [])));
      for (const k of kimlikler) kullanim.set(k, (kullanim.get(k) ?? 0) + 1);
    } catch {
      // bozuk belge sayılmaz
    }
  }
  type Satir = SoruListeSatiri & { answer: string; explanation: string | null; konu: string };
  return c.json<SinavSorusu[]>((sorular!.results as Satir[]).map((r) => ({
    ...soruyaCevir(r), answer: JSON.parse(r.answer), explanation: r.explanation, konu: r.konu,
    basari: b.get(r.id) ?? { kisi: 0, dogru: 0 }, kullanim: kullanim.get(r.id) ?? 0,
  })));
});

sinav.get("/", async (c) => {
  const { results } = await c.env.DB.prepare("SELECT * FROM sinavlar WHERE sahip = ? AND practice_id = ? ORDER BY updated_at DESC LIMIT 200")
    .bind(c.get("me")!.id, pid(c))
    .all<Satir>();
  return c.json<SinavOzeti[]>(results.map(ozet));
});

// Yeni sınav: kağıt düzeni ve başlık bilgileri kişinin son sınavından gelir.
// kopya: var olan bir sınavın kopyası
sinav.post("/", async (c) => {
  const db = c.env.DB;
  const me = c.get("me")!;
  const b = await c.req.json<{ kopya?: string }>().catch(() => ({}) as { kopya?: string });
  let belge: SinavBelgesi;
  if (b.kopya) {
    const k = await db.prepare("SELECT belge FROM sinavlar WHERE id = ? AND sahip = ?").bind(b.kopya, me.id).first<{ belge: string }>();
    if (!k) return c.json({ error: "sınav bulunamadı" }, 404);
    belge = JSON.parse(k.belge) as SinavBelgesi;
    belge.ad = `${belge.ad} (kopya)`.slice(0, 120);
  } else {
    const son = await db.prepare("SELECT belge FROM sinavlar WHERE sahip = ? ORDER BY updated_at DESC LIMIT 1").bind(me.id).first<{ belge: string }>();
    belge = { ad: "Yeni sınav", ayar: varsayilanAyar(son ? (JSON.parse(son.belge) as SinavBelgesi).ayar : undefined), ogeler: [] };
  }
  const id = crypto.randomUUID();
  const simdi = Date.now();
  await db.prepare("INSERT INTO sinavlar (id, practice_id, sahip, ad, belge, soru_sayisi, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
    .bind(id, pid(c), me.id, belge.ad, JSON.stringify(belge), soruSayisi(belge), simdi, simdi)
    .run();
  return c.json({ id });
});

sinav.get("/:id", async (c) => {
  const r = await kendi(c);
  if (!r) return c.json({ error: "sınav bulunamadı" }, 404);
  return c.json<Sinav>({ ...ozet(r), belge: JSON.parse(r.belge) as SinavBelgesi });
});

// Otomatik kayıt: belgenin tamamı yazılır. onceki: istemcinin bildiği son güncelleme
// zamanı; başka bir cihazda daha yeni bir kayıt varsa 409 döner, üzerine yazılmaz.
sinav.put("/:id", async (c) => {
  const metin = await c.req.text();
  if (metin.length > SINAV_BELGE_EN_BUYUK) return c.json({ error: "Sınav çok büyük; bazı soruları çıkar." }, 413);
  let g: { belge?: unknown; onceki?: number };
  try {
    g = JSON.parse(metin) as typeof g;
  } catch {
    return c.json({ error: "Sınav belgesi okunamadı." }, 400);
  }
  const h = sinavBelgesiHatasi(g.belge);
  if (h) return c.json({ error: h }, 400);
  const belge = g.belge as SinavBelgesi;
  const r = await kendi(c);
  if (!r) return c.json({ error: "sınav bulunamadı" }, 404);
  if (typeof g.onceki === "number" && r.updated_at > g.onceki) {
    return c.json({ error: "Bu sınav başka bir yerde değiştirildi. Sayfayı yenileyip son halinden devam et.", guncellendi: r.updated_at }, 409);
  }
  const simdi = Math.max(Date.now(), r.updated_at + 1);
  await c.env.DB.prepare("UPDATE sinavlar SET ad = ?, belge = ?, soru_sayisi = ?, updated_at = ? WHERE id = ?")
    .bind(belge.ad, JSON.stringify(belge), soruSayisi(belge), simdi, r.id)
    .run();
  return c.json({ guncellendi: simdi });
});

sinav.delete("/:id", async (c) => {
  const r = await c.env.DB.prepare("DELETE FROM sinavlar WHERE id = ? AND sahip = ? AND practice_id = ?")
    .bind(c.req.param("id"), c.get("me")!.id, pid(c))
    .run();
  if (!r.meta.changes) return c.json({ error: "sınav bulunamadı" }, 404);
  return c.json({ ok: true });
});
