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
// Çatı sitesi ya da tanınmayan host için null.
export function hosttanPratik(host: string): PratikMeta | null {
  const alt = host.toLowerCase().split(":")[0]!.split(".")[0]!;
  return PRATIKLER.find((p) => p.alt === alt) ?? null;
}

export const pratikAdresi = (p: PratikMeta) => `https://${p.alt}.${ANA_ALAN}`;
export const catiAdresi = `https://${CATI_ALT}.${ANA_ALAN}`;
