// Soru havuzunun kaynak biçimi. `npm run sorular:sql` bu dosyalardan
// migrations/ altındaki SQL'i üretir.
//
// Metinlerde ` yerine ~ yazılır (TypeScript şablon dizgilerinde ters tırnak
// kaçış gerektirdiği için). Üretici ~ karakterlerini ` ile değiştirir.

import { KAVRAMLAR } from "./kavramlar.ts";
type Etiket = "rosen" | "cikmis" | "turetilmis";

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
  // original: kitabın alıştırması ya da çıkmış sınav sorusu
  // derived: kitaptaki bilgiden türetilen yeni soru
  kaynak: "original" | "derived";
  // rosen: Rosen, Ayrık Matematik ve Uygulamaları alıştırması; cikmis: çıkmış sınav sorusu
  // Hem kitapta hem sınavda geçen soru tek kez yazılır, iki etiketi birden taşır.
  etiketler: Etiket[];
  zorluk: 1 | 2 | 3;
  // Kaynaktaki yer, örneğin "Rosen 1.1, alıştırma 8a"
  ref: string;
  soru: string;
  // Kapalı uçlu sorularda kısa açıklama; yazma (yaz) sorularında örnek çözüm
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
  // semboller: cevap kutusunun altında mantık/küme sembol klavyesi çıkar
  | (Ortak & { tip: "fill"; bosluklar: string[][]; semboller?: true })
  // Yazma (klasik): öğrenci cevabını yazar, aciklama'daki örnek çözümle karşılaştırıp kendini değerlendirir
  | (Ortak & { tip: "yaz" });

// Birleşim tipinden alan çıkarır (Omit birleşimin her üyesine ayrı uygulanmaz)
type Cikar<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;

type Govde = Cikar<Soru, "konu" | "hafta" | "kaynak" | "etiketler" | "ref" | "zorluk"> & { zorluk?: 1 | 2 | 3 };

function kavramVar(k: string) {
  if (!KAVRAMLAR[k]) throw new Error(`bilinmeyen kavram: ${k}`);
}

export type KitapGovde = Govde & {
  // Kitaptaki alıştırma numarası, şıkkıyla (ör. "8a")
  no: string;
  // Aynı soru çıkmış sınavda da sorulduysa çıkmış listesindeki numarası
  cikmis?: number;
};

// Kitabın bölüm sonu alıştırması. Kitaptaki alıştırmalar açık uçlu olduğu için
// soru tipi alıştırmanın yapısına göre seçilir (yaz, fill, tf ya da mcq);
// cevap kitabın "Tek Numaralı Alıştırmaların Cevapları" kısmından alınır.
export function kitap(hafta: number, konu: string, bolum: string, liste: KitapGovde[]): Soru[] {
  return liste.map(({ no, cikmis, zorluk, ...s }) => {
    kavramVar(s.kavram);
    return {
      ...s,
      zorluk: zorluk ?? 1,
      hafta,
      konu,
      kaynak: "original",
      etiketler: cikmis ? ["rosen", "cikmis"] : ["rosen"],
      ref: `Rosen ${bolum}, alıştırma ${no}` + (cikmis ? ` · Çıkmış soru ${cikmis}` : ""),
    } as Soru;
  });
}

export type CikmisGovde = Govde & { no: number };

// Çıkmış sınav sorusu: metin ve şıklar sınavdaki gibi. Sınav görüntülerinde
// cevap anahtarı olmadığı için cevaplar çözülerek belirlendi.
export function cikmis(hafta: number, konu: string, liste: CikmisGovde[]): Soru[] {
  return liste.map(({ no, zorluk, ...s }) => {
    kavramVar(s.kavram);
    return { ...s, zorluk: zorluk ?? 1, hafta, konu, kaynak: "original", etiketler: ["cikmis"], ref: `Çıkmış soru ${no}` } as Soru;
  });
}

export type TuretilmisGovde = Cikar<Soru, "konu" | "hafta" | "kaynak" | "etiketler" | "ref" | "kavram">;

// Aynı kavramdan türetilmiş soruları ortak alanlarla doldurur
export function turet(hafta: number, konu: string, kavram: string, liste: TuretilmisGovde[]): Soru[] {
  const k = KAVRAMLAR[kavram];
  if (!k) throw new Error(`bilinmeyen kavram: ${kavram}`);
  return liste.map((s) => ({ ...s, hafta, konu, kavram, kaynak: "derived", etiketler: ["turetilmis"], ref: `${hafta}. ünite, ${k.ad}` }) as Soru);
}
