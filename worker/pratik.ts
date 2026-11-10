// İsteğin hangi pratiğe ait olduğu. Pratikler çatı adresinin yolunda açılır
// (pratikler.selcukdinc.dev/girisimcilik); istemci pratiği X-Pratik başlığıyla bildirir.
// Başlık yoksa istek çatınındır (null): yalnızca hesap ve katalog uçları çalışır.
// Eski alan adları (girisimcilik.selcukdinc.dev) sayfayı yeni adrese yönlendirir
// (src/lib/eskiAdres.ts); o sırada açık kalmış sekmelerin API istekleri kırılmasın diye
// alan adından da pratik tanınır.
import type { Context, Next } from "hono";
import { catiAdresi, hosttanPratik, pratikBul, type PratikMeta } from "../icerik/index";
import type { Env } from "./session";

export function istekPratigi(c: Context<Env>): PratikMeta | null {
  const host = new URL(c.req.url).hostname;
  // Yayında olmayan pratiğin alan adı çatı gibi davranır (istemcideki src/lib/pratik.ts ile aynı)
  const p = hosttanPratik(host);
  if (p) return p.yayinda ? p : null;
  const yerel = host === "localhost" || host === "127.0.0.1" || host.endsWith(".workers.dev");
  const baslik = pratikBul(c.req.header("X-Pratik"));
  if (yerel) return baslik;
  return baslik?.yol && baslik.yayinda ? baslik : null;
}

export async function pratikAyarla(c: Context<Env>, next: Next) {
  c.set("pratik", istekPratigi(c));
  await next();
}

// Pratiğe özgü uçlarda kullanılır; çatı sitesinden gelen istek 404 alır
export async function pratikGerekli(c: Context<Env>, next: Next) {
  if (!c.get("pratik")) return c.json({ error: "Bu adreste bir pratik yok." }, 404);
  await next();
}

// Kimliği SQL'e gömülürken kullanılır; kimlikler icerik/index.ts'den gelir, dışarıdan değil
export const pid = (c: Context<Env>) => c.get("pratik")!.id;

// Bağlantıların kökü: alan adı ve pratiğin yolu (".../girisimcilik"). Eski alan adından
// gelen istekte de bağlantı yeni adresle yazılır.
export const pratikKoku = (c: Context<Env>) => {
  const yol = c.get("pratik")?.yol;
  const url = new URL(c.req.url);
  const kok = hosttanPratik(url.hostname)?.yol ? catiAdresi : url.origin;
  return `${kok}${yol ? `/${yol}` : ""}`;
};
