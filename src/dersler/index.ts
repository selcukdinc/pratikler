// Pratiğin ders sayfaları. Liste açılışta src/lib/icerik.ts tarafından
// icerik/<pratik>/istemci'den doldurulur; dersi olmayan pratikte boştur ve
// /ders sayfası pratiğin ünitelerini "Yakında" diye gösterir.

import type { Ders, Donem } from "./tipler";

export const DERSLER: Ders[] = [];

export const dersBul = (hafta: number) => DERSLER.find((d) => d.hafta === hafta);

// Ünitelerin bir sınav dönemi var mı (vize/final grupları gösterilir mi)
export const donemliMi = () => DERSLER.some((d) => d.donem);

// Bir ünitenin dönemi; bilinmeyen ünite vizeye sayılır
export const doneminiBul = (hafta: number): Donem => dersBul(hafta)?.donem ?? "vize";
