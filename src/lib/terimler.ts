// Kitapta geçen girişimcilik terimleri: Türkçe, İngilizce ve kısa anlam.
// Terimler sayfası bu listeden çizilir. satirIci işaretli terimlerin
// İngilizcesi ders ve soru metinlerinde parantez içinde de gösterilir; soru
// metinleri kitaptaki gibi kalsın diye şu an hiçbir terim işaretli değil.

import type { Terim } from "../../icerik/tipler";
import { PRATIK } from "./pratik";

export type { Terim };

export const TERIMLER: Terim[] = PRATIK.terimler;

export type Parca = string | { metin: string; en: string };

const kacir = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const HARF = "a-zçğıöşüâîû";

// Uzun terimler önce denenir ("ÖZEL VEYA", "VEYA"dan önce). Küçük harfli terimler
// cümle başında büyük harfle de eşleşir ve Türkçe ekleri kapsar (sentezlenir,
// kapısı). Büyük harfli terimler kesme işaretli ekleri kapsar (VE'leri).
// Hemen ardından "(" gelen kullanım zaten açıklanmış sayılır.
function desen(liste: Terim[]): RegExp | null {
  if (!liste.length) return null;
  return new RegExp(
    liste
      .map((t) => {
        if (t.buyuk) return `(${kacir(t.tr)}(?:'[${HARF}]+)?)`;
        const ilk = t.tr[0]!;
        return `([${ilk}${ilk.toLocaleUpperCase("tr")}]${kacir(t.tr.slice(1))}[${HARF}]*)`;
      })
      .map((g) => `(?<![\\p{L}\\d_])${g}(?![\\p{L}\\d_])(?!\\s*\\()`)
      .join("|"),
    "gu",
  );
}

const onbellek = new Map<Terim[], { sirali: Terim[]; re: RegExp | null }>();
const SATIR_ICI = TERIMLER.filter((t) => t.satirIci);

export function terimleriAyir(metin: string, liste: Terim[] = SATIR_ICI): Parca[] {
  let d = onbellek.get(liste);
  if (!d) {
    const sirali = [...liste].sort((a, b) => b.tr.length - a.tr.length);
    d = { sirali, re: desen(sirali) };
    onbellek.set(liste, d);
  }
  if (!d.re) return [metin];
  const out: Parca[] = [];
  let son = 0;
  for (const m of metin.matchAll(d.re)) {
    const i = m.slice(1).findIndex((g) => g !== undefined);
    const terim = d.sirali[i]!;
    if (m.index! > son) out.push(metin.slice(son, m.index));
    out.push({ metin: m[0], en: terim.en });
    son = m.index! + m[0].length;
  }
  if (son < metin.length) out.push(metin.slice(son));
  return out;
}
