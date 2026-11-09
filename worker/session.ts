// Oturum: tek bir zorunlu, HttpOnly çerez. Takip ya da analitik çerezi yok.

import type { Context } from "hono";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import type { Me } from "../shared/api";
import type { PratikMeta } from "../icerik/tipler";
import type { EpostaEnv } from "./eposta";
import type { AccessEnv } from "./access";
import { VARSAYILAN_HEDEF } from "../shared/motivasyon";

// Çerez adı mevcut sitelerin "fp_oturum" çerezinden farklıdır: platform çerezi bütün
// *.selcukdinc.dev alt alanlarına gider; aynı adı taşısaydı henüz taşınmamış sitelere
// (girisimcilik, fpga...) yabancı bir oturum çerezi gönderilmiş olurdu.
export const COOKIE = "pratikler_oturum";
// Taşınan eski sitelerin (kimya, fpga...) oturum çerezi. Alan adı çatıya alınınca
// tarayıcı bu çerezi göndermeye devam eder; oturum tablosu da taşındığı için
// (scripts/tasi.ts) kişi yeniden giriş yapmaz: aynı belirteç platform çerezine
// aktarılır ve eski çerez silinir.
export const ESKI_COOKIE = "fp_oturum";

// Canlıda COOKIE_DOMAIN=".selcukdinc.dev": tek oturum bütün pratiklerde geçer.
// Çerez yalnızca istek o alan adının altından geldiyse paylaşılır; yerelde ve
// workers.dev'de host'a özgü kalır (tarayıcı başka alana yazılan çerezi reddeder)
export function cerezAlani(c: Context<Env>): string | undefined {
  const alan = c.env.COOKIE_DOMAIN;
  if (!alan) return undefined;
  const host = new URL(c.req.url).hostname;
  return host === alan.replace(/^\./, "") || host.endsWith(alan.startsWith(".") ? alan : `.${alan}`) ? alan : undefined;
}
const MAX_AGE_S = 60 * 60 * 24 * 180;

export type Env = {
  Bindings: EpostaEnv & AccessEnv & { DB: D1Database; PBKDF2_ITER?: string; COOKIE_DOMAIN?: string; AJAN_TOKEN?: string };
  // pratik: isteğin geldiği pratik (worker/pratik.ts); çatı sitesinde null
  // havuz: X-Havuz başlığıyla seçilmiş öğrenci soru havuzunun kodu (worker/havuz.ts)
  Variables: { me: Me | null; pratik: PratikMeta | null; havuz: string | null };
};

export async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function randomToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...bytes)).replace(/[+/=]/g, (c) => ({ "+": "-", "/": "_", "=": "" })[c]!);
}

const ME_SQL = `SELECT u.id, u.kind, u.display_name, u.username, u.email, u.avatar, u.avatar_bg, u.role,
                       u.public_profile, u.username_changed_at, u.notify_email, u.muted_until, u.gunluk_hedef, u.gunluk_hedefler,
                       u.yazi_olcek, u.gunluk_tekrar,
                       (SELECT group_concat(practice_id) FROM akademisyen_alanlari aa WHERE aa.user_id = u.id) AS alanlar
                FROM users u`;

type MeRow = {
  id: string; kind: "guest" | "member"; display_name: string | null; username: string | null;
  email: string | null; avatar: string | null; avatar_bg: string | null; role: string;
  public_profile: number; username_changed_at: number | null; notify_email: number; muted_until: number | null;
  gunluk_hedef: number; gunluk_hedefler: string | null; yazi_olcek: number | null; gunluk_tekrar: number | null;
  alanlar: string | null;
};

// Günlük hedef pratik başınadır: gunluk_hedefler {"<pratik>": n}; bir pratikte
// hedef seçilmediyse gunluk_hedef (çatıda seçilen ya da varsayılan) geçerlidir
export function pratikHedefi(r: { gunluk_hedef: number; gunluk_hedefler: string | null }, pratik?: string | null): number {
  if (!pratik || !r.gunluk_hedefler) return r.gunluk_hedef;
  try {
    const n = (JSON.parse(r.gunluk_hedefler) as Record<string, unknown>)[pratik];
    return typeof n === "number" ? n : r.gunluk_hedef;
  } catch {
    return r.gunluk_hedef;
  }
}

const meFromRow = (r: MeRow, pratik?: string | null): Me => ({
  id: r.id,
  kind: r.kind,
  displayName: r.display_name ?? r.username,
  username: r.username,
  email: r.email,
  avatar: r.avatar,
  avatarBg: r.avatar_bg,
  role: r.role,
  publicProfile: r.public_profile === 1,
  usernameChangedAt: r.username_changed_at,
  notifyEmail: r.notify_email === 1,
  mutedUntil: r.muted_until,
  gunlukHedef: pratikHedefi(r, pratik),
  yaziOlcek: r.yazi_olcek,
  gunlukTekrar: r.gunluk_tekrar,
  alanlar: r.alanlar ? r.alanlar.split(",").sort() : [],
});

export async function loadUser(db: D1Database, id: string, pratik?: string | null): Promise<Me | null> {
  const row = await db.prepare(`${ME_SQL} WHERE u.id = ?`).bind(id).first<MeRow>();
  return row ? meFromRow(row, pratik) : null;
}

export async function loadMe(c: Context<Env>): Promise<Me | null> {
  const token = getCookie(c, COOKIE);
  const eski = token ? undefined : getCookie(c, ESKI_COOKIE);
  if (!token && !eski) return null;
  const row = await c.env.DB.prepare(
    `${ME_SQL} JOIN sessions s ON u.id = s.user_id WHERE s.token_hash = ? AND s.expires_at > ?`,
  )
    .bind(await sha256((token ?? eski)!), Date.now())
    .first<MeRow>();
  if (eski) {
    // Eski siteden gelen oturum: belirteç platform çerezine geçer, eski çerez silinir
    deleteCookie(c, ESKI_COOKIE, { path: "/", secure: true });
    if (row) {
      setCookie(c, COOKIE, eski, {
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
        path: "/",
        maxAge: MAX_AGE_S,
        domain: cerezAlani(c),
      });
    }
  }
  return row ? meFromRow(row, c.get("pratik")?.id) : null;
}

// Yeni oturum açar; varsa eski oturum belirteci silinir (girişte oturum sabitleme olmasın)
export async function startSession(c: Context<Env>, userId: string, extra: D1PreparedStatement[] = []): Promise<void> {
  const token = randomToken();
  const now = Date.now();
  const old = getCookie(c, COOKIE);
  await c.env.DB.batch([
    ...extra,
    ...(old ? [c.env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(await sha256(old))] : []),
    c.env.DB.prepare(
      "INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)",
    ).bind(await sha256(token), userId, now, now + MAX_AGE_S * 1000),
  ]);
  setCookie(c, COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "Lax",
    path: "/",
    maxAge: MAX_AGE_S,
    domain: cerezAlani(c),
  });
}

export async function endSession(c: Context<Env>): Promise<void> {
  const token = getCookie(c, COOKIE);
  if (token) await c.env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(await sha256(token)).run();
  deleteCookie(c, COOKIE, { path: "/", secure: true, domain: cerezAlani(c) });
}

// Geçerli oturum dışındaki tüm oturumları kapatır
export async function otherSessionsQuery(c: Context<Env>, userId: string): Promise<D1PreparedStatement> {
  const token = getCookie(c, COOKIE) ?? "";
  return c.env.DB.prepare("DELETE FROM sessions WHERE user_id = ? AND token_hash != ?").bind(userId, await sha256(token));
}

// İlk cevapta misafir kullanıcı açılır; o ana kadar hiçbir çerez yazılmaz
export async function ensureGuest(c: Context<Env>): Promise<Me> {
  const existing = c.get("me");
  if (existing) return existing;

  const id = crypto.randomUUID();
  await startSession(c, id, [
    c.env.DB.prepare("INSERT INTO users (id, kind, created_at) VALUES (?, 'guest', ?)").bind(id, Date.now()),
  ]);
  const me: Me = {
    id, kind: "guest", displayName: null, username: null, email: null, avatar: null, avatarBg: null,
    role: "user", publicProfile: false, usernameChangedAt: null, notifyEmail: true, mutedUntil: null,
    gunlukHedef: VARSAYILAN_HEDEF, yaziOlcek: null, gunlukTekrar: null, alanlar: [],
  };
  c.set("me", me);
  return me;
}
