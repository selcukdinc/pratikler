// Ünitelerin konu anlatımları. Şu an hazırlanıyor ("Yakında"); ilk hedef
// kitabın ilk 7 ünitesinin bölüm sonu sorularının hepsinin sitede olması.

import type { Ders } from "./tipler";

export const DERSLER: Ders[] = [];

export const dersBul = (hafta: number) => DERSLER.find((d) => d.hafta === hafta);
