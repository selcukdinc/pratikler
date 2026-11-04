// Kimya soru dosyalarının yardımcıları (kimya-pratik deposundaki biçimin aynısı):
// turet() aynı kavramdan türetilmiş soruları, cikmisSorular() çıkmış sınav
// sorularını ortak alanlarla doldurur. Kimlikler dosyalarda km- önekiyle yazılır.

import type { Soru } from "../../tipler.ts";
import { kimya } from "../meta.ts";

// Birleşim tipinden alan çıkarır (Omit birleşimin her üyesine ayrı uygulanmaz)
type Cikar<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
export type TuretilmisGovde = Cikar<Soru, "konu" | "hafta" | "kaynak" | "etiketler" | "ref" | "kavram">;

const kavramAdi = (k: string) => {
  const v = kimya.kavramlar[k];
  if (!v) throw new Error(`bilinmeyen kavram: ${k}`);
  return v.ad;
};

// Aynı kavramdan türetilmiş sorular; ref "Ünite <n>, <kavram adı>"
export function turet(hafta: number, konu: string, kavram: string, liste: TuretilmisGovde[]): Soru[] {
  const ad = kavramAdi(kavram);
  return liste.map((s) => ({ ...s, hafta, konu, kavram, kaynak: "derived", etiketler: ["turetilmis"], ref: `Ünite ${hafta}, ${ad}` }) as Soru);
}

type CikmisGovde = {
  sira: number;
  hafta: number;
  konu: string;
  kavram: string;
  zorluk?: 1 | 2 | 3;
  soru: string;
  secenekler: string[];
  dogru: number;
  aciklama: string;
  // Şıklar birbirine atıf yapıyorsa ("Hepsi", "I ve III") ya da açıklama şıkkı
  // harfle anıyorsa şıklar kâğıttaki sırada kalır
  sabit?: true;
};

// Çıkmış sınav soruları: metin ve cevap anahtarı sınavdaki gibi. Anahtar
// tartışmalıysa doğru bilgi açıklamada "Not:" ile verilir. Sınavın künyesi
// yazılmaz; ref yalnızca "2024 vize, 7. soru" gibi kısa bir yer bilgisidir.
// on: kimlik öneki (ör. "km-v24"), refAdi: "2024 vize"
export function cikmisSorular(on: string, refAdi: string, liste: CikmisGovde[]): Soru[] {
  return liste.map((g) => {
    kavramAdi(g.kavram);
    return {
      id: `${on}-${String(g.sira).padStart(2, "0")}`,
      tip: "mcq",
      kaynak: "original",
      etiketler: ["cikmis"],
      hafta: g.hafta,
      konu: g.konu,
      kavram: g.kavram,
      zorluk: g.zorluk ?? 1,
      ref: `${refAdi}, ${g.sira}. soru`,
      soru: g.soru,
      secenekler: g.secenekler,
      dogru: g.dogru,
      aciklama: g.aciklama,
      ...(g.sabit ? { sabit: true as const } : {}),
    };
  });
}
