// Soru havuzunun kaynak biçimi. `npm run sorular:sql` bu dosyalardan
// migrations/ altındaki SQL'i üretir.
//
// Metinlerde ` yerine ~ yazılır (TypeScript şablon dizgilerinde ters tırnak
// kaçış gerektirdiği için). Üretici ~ karakterlerini ` ile değiştirir; MatStudio'nun
// ~ işleci (~=, ~x) için ¬ yazılır.

import { KAVRAMLAR } from "./kavramlar.ts";

export interface Konu {
  id: string;
  baslik: string;
  hafta: number;
  sira: number;
}

interface Ortak {
  id: string;
  konu: string;
  hafta: number;
  // original: sunumdaki örnek, alıştırma ya da ödevin yeniden yazılmış hali
  // derived: aynı konudan esinlenen yeni soru
  kaynak: "original" | "derived";
  zorluk: 1 | 2 | 3;
  // Sunumdaki yer, örneğin "Hafta 4, Konvolüsyon"
  ref: string;
  soru: string;
  aciklama: string;
  // shared/kavramlar.ts'deki kavram
  kavram: string;
  // Yedek havuz: soru havuzunda görünmez, yalnızca aralıklı tekrarda "görülmemiş soru" olarak gelir
  yedek?: true;
}

// num sorularında her boşluğun kabul ettiği sayı belirtimleri (shared/grade.ts):
// "1.48", "1.48±0.01", "[1 2 -1]", "[0.5 0.25]±0.01"
export type Soru =
  | (Ortak & { tip: "tf"; dogru: boolean })
  | (Ortak & { tip: "mcq"; secenekler: string[]; dogru: number })
  | (Ortak & { tip: "fill"; bosluklar: string[][] })
  | (Ortak & { tip: "num"; bosluklar: string[][] });

// Birleşim tipinden alan çıkarır (Omit birleşimin her üyesine ayrı uygulanmaz)
type Cikar<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
export type TuretilmisGovde = Cikar<Soru, "konu" | "hafta" | "kaynak" | "ref" | "kavram">;

// Aynı kavramdan türetilmiş soruları ortak alanlarla doldurur
export function turet(hafta: number, konu: string, kavram: string, liste: TuretilmisGovde[]): Soru[] {
  const k = KAVRAMLAR[kavram];
  if (!k) throw new Error(`bilinmeyen kavram: ${kavram}`);
  return liste.map((s) => ({ ...s, hafta, konu, kavram, kaynak: "derived", ref: `Hafta ${hafta}, ${k.ad}` }) as Soru);
}

// Bir konunun ve kavramın soruları; ref sunumdaki yerdir (ör. "Hafta 1, Histogram").
// Sunumdaki bir örnekten yeniden yazılan sorular kaynak: "original" alır.
export function grupla(
  hafta: number,
  konu: string,
  kavram: string,
  ref: string,
  liste: (TuretilmisGovde & { kaynak?: "original" | "derived" })[],
): Soru[] {
  if (!KAVRAMLAR[kavram]) throw new Error(`bilinmeyen kavram: ${kavram}`);
  return liste.map((s) => ({ kaynak: "derived", ...s, hafta, konu, kavram, ref }) as Soru);
}
