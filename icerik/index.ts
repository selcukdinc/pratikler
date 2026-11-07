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

export type { PratikMeta } from "./tipler.ts";

export const PRATIKLER: PratikMeta[] = [tipElektronigi, biyomedikal, isIngilizcesi, kimya, dsp, fizik, ayrik, fpga, girisimcilik];

// Çatı sitesinin alt alan adı (katalog, tek hesap)
export const CATI_ALT = "pratikler";
export const ANA_ALAN = "selcukdinc.dev";

export const pratikBul = (id: string | null | undefined) => PRATIKLER.find((p) => p.id === id) ?? null;

// Bir host adından pratiği bulur: "tipelektronigi.selcukdinc.dev" -> Tıp Elektroniği.
// Çatı sitesi ya da tanınmayan host için null. Yol tabanlı pratiklerin alan adı yoktur.
export function hosttanPratik(host: string): PratikMeta | null {
  const alt = host.toLowerCase().split(":")[0]!.split(".")[0]!;
  return PRATIKLER.find((p) => !p.yol && p.alt === alt) ?? null;
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
export const kademeninPratikleri = (id: string) => PRATIKLER.filter((p) => p.yol?.split("/")[0] === id);

// Bir yoldan pratiği bulur: "/sinif6/turkce/sorular" -> 6. sınıf Türkçe
export function yoldanPratik(yol: string): PratikMeta | null {
  const temiz = "/" + yol.replace(/^\/+/, "");
  return PRATIKLER.find((p) => p.yol && (temiz === `/${p.yol}` || temiz.startsWith(`/${p.yol}/`))) ?? null;
}

export const catiAdresi = `https://${CATI_ALT}.${ANA_ALAN}`;
export const pratikAdresi = (p: PratikMeta) => (p.yol ? `${catiAdresi}/${p.yol}` : `https://${p.alt}.${ANA_ALAN}`);
