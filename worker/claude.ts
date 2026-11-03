// Faz 2: yönetim panelinden Claude'a iş verme. Panel /api/yonetim/claude ile işi
// kuyruğa (claude_isleri) yazar; yöneticinin bilgisayarındaki yerel ajan
// (ajan/pratikler-ajan.mjs) /api/ajan uçlarından işi alır ve sonucunu bildirir.
// Ajan uçları oturumla değil AJAN_TOKEN gizli anahtarıyla korunur; anahtar
// tanımlı değilse bu uçlar kapalıdır.
import { Hono } from "hono";
import type { ClaudeIsDurumu, ClaudeIsi } from "../shared/yonetim";
import type { Env } from "./session";

type Satir = {
  id: string; practice_id: string; istek: string; durum: ClaudeIsDurumu; sonuc: string | null; pr_url: string | null;
  olusturan: string | null; created_at: number; updated_at: number;
};
export const IS_SQL = `SELECT i.*, u.username AS olusturan FROM claude_isleri i LEFT JOIN users u ON u.id = i.created_by`;
export const isSatiri = (r: Satir): ClaudeIsi => ({
  id: r.id, pratik: r.practice_id, istek: r.istek, durum: r.durum, sonuc: r.sonuc, prUrl: r.pr_url,
  olusturan: r.olusturan, olusturuldu: r.created_at, guncellendi: r.updated_at,
});

// Sabit zamanlı karşılaştırma: anahtarın ne kadarının doğru olduğu süreden anlaşılmasın
export function anahtarDogru(beklenen: string | undefined, gelen: string | undefined): boolean {
  if (!beklenen || !gelen) return false;
  const a = new TextEncoder().encode(beklenen);
  const b = new TextEncoder().encode(gelen);
  let fark = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) fark |= (a[i % a.length] ?? 0) ^ (b[i % (b.length || 1)] ?? 0);
  return fark === 0;
}

export const ajan = new Hono<Env>();

ajan.use("*", async (c, next) => {
  const env = c.env;
  if (!env.AJAN_TOKEN) return c.json({ error: "Ajan kapalı (AJAN_TOKEN tanımlı değil)." }, 404);
  const gelen = c.req.header("Authorization")?.replace(/^Bearer\s+/i, "");
  if (!anahtarDogru(env.AJAN_TOKEN, gelen)) return c.json({ error: "Geçersiz ajan anahtarı." }, 401);
  await next();
});

// Sıradaki bekleyen işi alır ve "calisiyor" yapar; iş yoksa null
ajan.post("/sonraki", async (c) => {
  const db = c.env.DB;
  const simdi = Date.now();
  const r = await db.prepare(
    `UPDATE claude_isleri SET durum = 'calisiyor', updated_at = ?
     WHERE id = (SELECT id FROM claude_isleri WHERE durum = 'bekliyor' ORDER BY created_at LIMIT 1) AND durum = 'bekliyor'
     RETURNING id`,
  ).bind(simdi).first<{ id: string }>();
  if (!r) return c.json(null);
  const is = await db.prepare(`${IS_SQL} WHERE i.id = ?`).bind(r.id).first<Satir>();
  return c.json(is ? isSatiri(is) : null);
});

// Ajan sonucu bildirir: pr (pr_url ile), hata ya da yeniden bekliyor
ajan.post("/isler/:id", async (c) => {
  const b = await c.req.json<{ durum?: string; sonuc?: string; prUrl?: string }>().catch(() => ({}) as Record<string, string>);
  const durumlar: ClaudeIsDurumu[] = ["bekliyor", "pr", "hata"];
  if (!durumlar.includes(b.durum as ClaudeIsDurumu)) return c.json({ error: "durum bekliyor, pr ya da hata olmalı" }, 400);
  if (b.prUrl && !/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/pull\/\d+$/.test(b.prUrl)) return c.json({ error: "geçersiz PR adresi" }, 400);
  const r = await c.env.DB.prepare(
    "UPDATE claude_isleri SET durum = ?, sonuc = ?, pr_url = COALESCE(?, pr_url), updated_at = ? WHERE id = ? AND durum = 'calisiyor'",
  ).bind(b.durum, (b.sonuc ?? "").slice(0, 8000) || null, b.prUrl ?? null, Date.now(), c.req.param("id")).run();
  if (!r.meta.changes) return c.json({ error: "Çalışan böyle bir iş yok." }, 404);
  return c.json({ ok: true });
});
