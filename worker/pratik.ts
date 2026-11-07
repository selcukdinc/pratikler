// İsteğin hangi pratiğe ait olduğu. Canlıda alt alan adından (kimya.selcukdinc.dev);
// yerelde ve workers.dev adresinde istemcinin gönderdiği X-Pratik başlığından.
// pratikler.selcukdinc.dev (çatı) için null: yalnızca hesap ve katalog uçları çalışır.
// Yol tabanlı pratikler (pratikler.selcukdinc.dev/sinif6/turkce) çatı adresinde açılır;
// istemci onları da X-Pratik başlığıyla bildirir ve başlık yalnızca bu pratikler için
// kabul edilir, böylece çatıdan alt alan adlı bir pratiğin verisine istek atılamaz.
import type { Context, Next } from "hono";
import { hosttanPratik, pratikBul, type PratikMeta } from "../icerik/index";
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

// Bağlantıların kökü: alan adı, yol tabanlı pratikte yolu da (".../sinif6/turkce")
export const pratikKoku = (c: Context<Env>) => {
  const yol = c.get("pratik")?.yol;
  return `${new URL(c.req.url).origin}${yol ? `/${yol}` : ""}`;
};
