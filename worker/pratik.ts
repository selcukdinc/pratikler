// İsteğin hangi pratiğe ait olduğu. Canlıda alt alan adından (kimya.selcukdinc.dev);
// yerelde ve workers.dev adresinde istemcinin gönderdiği X-Pratik başlığından.
// pratikler.selcukdinc.dev (çatı) için null: yalnızca hesap ve katalog uçları çalışır.
import type { Context, Next } from "hono";
import { hosttanPratik, pratikBul, type PratikMeta } from "../icerik/index";
import type { Env } from "./session";

export function istekPratigi(c: Context<Env>): PratikMeta | null {
  const host = new URL(c.req.url).hostname;
  // Yayında olmayan pratiğin alan adı çatı gibi davranır (istemcideki src/lib/pratik.ts ile aynı)
  const p = hosttanPratik(host);
  if (p) return p.yayinda ? p : null;
  const yerel = host === "localhost" || host === "127.0.0.1" || host.endsWith(".workers.dev");
  return yerel ? pratikBul(c.req.header("X-Pratik")) : null;
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
