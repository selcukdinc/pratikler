// Soru havuzunun kaynak biçimi. `npm run sorular:sql` bu dosyalardan
// migrations/ altındaki SQL'i üretir.
//
// Metinlerde ` yerine ~ yazılır (TypeScript şablon dizgilerinde ters tırnak
// kaçış gerektirdiği için). Üretici ~ karakterlerini ` ile değiştirir.
//
// Şekil: soru metninde ya da bir çözüm adımında tek başına bir paragraf olarak
// [[G-S5-01]] yazılır (src/gorseller/sorular.ts).

import { KAVRAMLAR } from "./kavramlar.ts";
type Etiket = "sunu" | "turetilmis";

export interface Konu {
  id: string;
  baslik: string;
  // Sunudaki bölüm numarası (veritabanında week)
  hafta: number;
  sira: number;
}

interface Ortak {
  id: string;
  konu: string;
  hafta: number;
  // original: ders sunusundaki çözümlü örnek (metni sunudaki gibi)
  // derived: sunudaki kalıptan ya da konudan türetilen yeni soru
  kaynak: "original" | "derived";
  // sunu: sunudaki örnek, turetilmis: türetilmiş soru
  etiketler: Etiket[];
  zorluk: 1 | 2 | 3;
  // Kaynaktaki yer, örneğin "Sunu, Bölüm 3, Örnek 2 (c)"
  ref: string;
  soru: string;
  // Çözümün fikri: hangi yasa ya da formül, neden. Cevabı ekranda adımlardan önce görünür.
  aciklama: string;
  // Adım adım çözüm. Her adım bir kart olur; öğrenci adımları tek tek açar.
  // Son adım sonucu söyler.
  adimlar?: string[];
  // shared/kavramlar.ts'deki kavram
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

export interface SunuGovde {
  id: string;
  // Sunudaki örnek numarası; numarası tekrarlanan örnekte sayfa da yazılır ("13, s. 32")
  ornek: number | string;
  // Çok parçalı örnekte hangi parça ("a", "b"…)
  parca?: string;
  soru: string;
  // Sunudaki örnekler açık uçludur; şıklar bizimdir
  secenekler: string[];
  dogru: number;
  aciklama: string;
  adimlar: string[];
  kavram: string;
  sabit?: true;
  zorluk?: 1 | 2 | 3;
}

// Ders sunusundaki çözümlü örnek: metin sunudaki gibi, şıklar ve adımlar bizim
export function sunu(hafta: number, konu: string, liste: SunuGovde[]): Soru[] {
  return liste.map(({ ornek, parca, zorluk, ...s }) => {
    if (!KAVRAMLAR[s.kavram]) throw new Error(`bilinmeyen kavram: ${s.kavram}`);
    return {
      ...s,
      tip: "mcq",
      zorluk: zorluk ?? 2,
      hafta,
      konu,
      kaynak: "original",
      etiketler: ["sunu"],
      ref: `Sunu, Bölüm ${hafta}, Örnek ${ornek}` + (parca ? ` (${parca})` : ""),
    } as Soru;
  });
}

// zorluk verilmezse 2 (orta)
export type TuretilmisGovde = Cikar<Soru, "konu" | "hafta" | "kaynak" | "etiketler" | "ref" | "kavram" | "zorluk"> & { zorluk?: 1 | 2 | 3 };

// Aynı kavramdan türetilmiş soruları ortak alanlarla doldurur
export function turet(hafta: number, konu: string, kavram: string, liste: TuretilmisGovde[]): Soru[] {
  const k = KAVRAMLAR[kavram];
  if (!k) throw new Error(`bilinmeyen kavram: ${kavram}`);
  return liste.map((s) => ({ ...s, zorluk: s.zorluk ?? 2, hafta, konu, kavram, kaynak: "derived", etiketler: ["turetilmis"], ref: `${hafta}. bölüm, ${k.ad}` }) as Soru);
}

// Adımlar veritabanında açıklamanın devamına "---" satırlarıyla ayrılarak yazılır;
// arayüz (src/components/Cozum.tsx) aynı ayırıcıyla böler.
export const ADIM_AYIRICI = "\n\n---\n\n";
export const aciklamaMetni = (s: Pick<Soru, "aciklama" | "adimlar">) => [s.aciklama, ...(s.adimlar ?? [])].map((x) => x.trim()).join(ADIM_AYIRICI);
