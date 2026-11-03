// Soru havuzunun kaynak biçimi. `npm run sorular:sql` bu dosyalardan
// migrations/ altındaki SQL'i üretir.
//
// Metinlerde ` yerine ~ yazılır (TypeScript şablon dizgilerinde ters tırnak
// kaçış gerektirdiği için). Üretici ~ karakterlerini ` ile değiştirir.

import { KAVRAMLAR } from "../../shared/kavramlar.ts";
import type { Etiket } from "../../shared/api.ts";

export interface Konu {
  id: string;
  baslik: string;
  // Kitabın ünite numarası (veritabanında week)
  hafta: number;
  sira: number;
}

interface Ortak {
  id: string;
  konu: string;
  hafta: number;
  // original: kitabın bölüm sonu sorusu ya da çıkmış sınav sorusu (metni aynen korunur)
  // derived: kitaptaki bilgiden türetilen yeni soru
  kaynak: "original" | "derived";
  // ges: Girişimcilik El Kitabı "Kendimizi Sınayalım" sorusu, cikmis: çıkmış sınav sorusu
  // Hem kitapta hem sınavda geçen soru tek kez yazılır, iki etiketi birden taşır.
  etiketler: Etiket[];
  zorluk: 1 | 2 | 3;
  // Kaynaktaki yer, örneğin "Kitap, 1. ünite, soru 3"
  ref: string;
  soru: string;
  aciklama: string;
  // shared/kavramlar.ts'deki kavram (kitaptaki alt başlık)
  kavram: string;
  // Yedek havuz: soru havuzunda görünmez, yalnızca aralıklı tekrarda gelir
  yedek?: true;
  // Şıklar birbirine harfle atıf yapıyorsa ("a ve c") şıklar karıştırılmaz
  sabit?: true;
}

export type Soru =
  | (Ortak & { tip: "tf"; dogru: boolean })
  | (Ortak & { tip: "mcq"; secenekler: string[]; dogru: number })
  | (Ortak & { tip: "fill"; bosluklar: string[][] });

// Birleşim tipinden alan çıkarır (Omit birleşimin her üyesine ayrı uygulanmaz)
type Cikar<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
export interface KitapGovde {
  id: string;
  // Kaynaktaki soru numarası
  no: number;
  soru: string;
  secenekler: string[];
  dogru: number;
  aciklama: string;
  kavram: string;
  // Aynı soru çıkmış sınavda da sorulduysa çıkmış listesindeki numarası
  cikmis?: number;
  // Şıklar birbirine harfle atıf yapıyorsa ("a ve c") karıştırılmaz
  sabit?: true;
  zorluk?: 1 | 2 | 3;
}

// Kitabın "Kendimizi Sınayalım" sorusu: metin ve şıklar aynen, cevap anahtarı kitaptan
export function kitap(hafta: number, konu: string, liste: KitapGovde[]): Soru[] {
  return liste.map(({ no, cikmis, zorluk, ...s }) => {
    if (!KAVRAMLAR[s.kavram]) throw new Error(`bilinmeyen kavram: ${s.kavram}`);
    return {
      ...s,
      tip: "mcq",
      zorluk: zorluk ?? 1,
      hafta,
      konu,
      kaynak: "original",
      etiketler: cikmis ? ["ges", "cikmis"] : ["ges"],
      ref: `Kitap, ${hafta}. ünite, soru ${no}` + (cikmis ? ` · Çıkmış soru ${cikmis}` : ""),
    } as Soru;
  });
}

export type CikmisGovde = Omit<KitapGovde, "cikmis">;


// Çıkmış sınav sorusu (kitapta birebir karşılığı olmayan)
export function cikmis(hafta: number, konu: string, liste: CikmisGovde[]): Soru[] {
  return liste.map(({ no, zorluk, ...s }) => {
    if (!KAVRAMLAR[s.kavram]) throw new Error(`bilinmeyen kavram: ${s.kavram}`);
    return {
      ...s, tip: "mcq", zorluk: zorluk ?? 1, hafta, konu, kaynak: "original", etiketler: ["cikmis"], ref: `Çıkmış soru ${no}`,
    } as Soru;
  });
}

export type TuretilmisGovde = Cikar<Soru, "konu" | "hafta" | "kaynak" | "etiketler" | "ref" | "kavram">;

// Aynı kavramdan türetilmiş soruları ortak alanlarla doldurur
export function turet(hafta: number, konu: string, kavram: string, liste: TuretilmisGovde[]): Soru[] {
  const k = KAVRAMLAR[kavram];
  if (!k) throw new Error(`bilinmeyen kavram: ${kavram}`);
  return liste.map((s) => ({ ...s, hafta, konu, kavram, kaynak: "derived", etiketler: ["turetilmis"], ref: `${hafta}. ünite, ${k.ad}` }) as Soru);
}
