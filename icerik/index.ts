// Bütün pratiklerin meta bilgisi. İstemci, Worker ve betikler buradan okur;
// sorular ayrı (icerik/sorular.ts) çünkü istemci paketine girmez.
import type { PratikMeta } from "./tipler.ts";
import { girisimcilik } from "./girisimcilik/meta.ts";
import { kimya } from "./kimya/meta.ts";
import { dsp } from "./dsp/meta.ts";
import { fizik } from "./fizik/meta.ts";
import { ayrik } from "./ayrik/meta.ts";
import { fpga } from "./fpga/meta.ts";
import { tipElektronigi } from "./tip-elektronigi/meta.ts";
import { isIngilizcesi } from "./is-ingilizcesi/meta.ts";
import { biyomedikal } from "./biyomedikal/meta.ts";
import { sinif6Turkce } from "./sinif6-turkce/meta.ts";
import { isletme } from "./isletme/meta.ts";
import { git } from "./git/meta.ts";

export type { PratikMeta } from "./tipler.ts";

export const PRATIKLER: PratikMeta[] = [tipElektronigi, biyomedikal, isIngilizcesi, isletme, kimya, dsp, fizik, ayrik, fpga, girisimcilik, sinif6Turkce, git];

// Çatı sitesinin alt alan adı (katalog, tek hesap)
export const CATI_ALT = "pratikler";
export const ANA_ALAN = "selcukdinc.dev";
export const catiAdresi = `https://${CATI_ALT}.${ANA_ALAN}`;

export const pratikBul = (id: string | null | undefined) => PRATIKLER.find((p) => p.id === id) ?? null;

// Bir host adından pratiği bulur: "tipelektronigi.selcukdinc.dev" -> Tıp Elektroniği.
// Çatı sitesi ya da tanınmayan host için null. Pratikler artık çatı adresinin yolunda
// açılır (meta.yol); alan adı yalnızca hiç yolu olmayan ya da eski alan adı yönlendirme
// için duran (meta.eskiAlan) pratikte tanınır.
export function hosttanPratik(host: string): PratikMeta | null {
  const alt = host.toLowerCase().split(":")[0]!.split(".")[0]!;
  return PRATIKLER.find((p) => (!p.yol || p.eskiAlan) && p.alt === alt) ?? null;
}

// Eski alan adındaki bir adresin yoldaki karşılığı:
// girisimcilik.selcukdinc.dev/sorular?hafta=2 -> pratikler.selcukdinc.dev/girisimcilik/sorular?hafta=2
// Eski alan adı değilse null.
export function eskiAdresinYenisi(host: string, yol = "/", ek = ""): string | null {
  const p = hosttanPratik(host);
  if (!p?.yol) return null;
  const temiz = "/" + yol.replace(/^\/+/, "");
  return `${catiAdresi}/${p.yol}${temiz === "/" ? "" : temiz}${ek}`;
}

// Kademeler (sınıflar): çatı adresinde /<kimlik> sayfası o kademenin derslerini listeler.
// Alt alan adı açılmaz (Cloudflare'in custom domain sınırı); dersler /<kademe>/<ders>
// yolunda açılır ve pratiğin meta.yol alanında yazılır.
export interface Kademe {
  id: string;
  ad: string;
  // Katalog kartında ve kademe sayfasının başında
  aciklama: string;
}

export const KADEMELER: Kademe[] = [
  { id: "sinif6", ad: "6. Sınıf", aciklama: "Ortaokul 6. sınıf dersleri: MEB öğretim programına ve ortak yazılı sınavların kapsamına göre sorular." },
];

export const kademeBul = (id: string | null | undefined) => KADEMELER.find((k) => k.id === id) ?? null;
// Pratiğin kademesi; kademe dersi değilse (yolu "girisimcilik" gibi tek başınaysa) null
export const pratiginKademesi = (p: PratikMeta) => kademeBul(p.yol?.split("/")[0]);
export const kademeninPratikleri = (id: string) => PRATIKLER.filter((p) => p.yol?.split("/")[0] === id);

// Bir yoldan pratiği bulur: "/sinif6/turkce/sorular" -> 6. sınıf Türkçe
export function yoldanPratik(yol: string): PratikMeta | null {
  const temiz = "/" + yol.replace(/^\/+/, "");
  return PRATIKLER.find((p) => p.yol && (temiz === `/${p.yol}` || temiz.startsWith(`/${p.yol}/`))) ?? null;
}

export const pratikAdresi = (p: PratikMeta) => (p.yol ? `${catiAdresi}/${p.yol}` : `https://${p.alt}.${ANA_ALAN}`);
