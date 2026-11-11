// Git soru yardımcıları. Bütün sorular kendi cümlelerimizle türetilmiştir
// (kaynak: derived). Konu kimliği gt-u<ünite>, soru kimliği gt-u<ünite>-<kısa ad>.
//
// Üç biçim var:
// - Çoktan seçmeli (secenekler): kavram sorusu; senaryo: true ise gerçek hayattan bir
//   durumda karar sorusu (etiket: senaryo). Doğru şık ilk sırada yazılır (dogru
//   verilmezse 0), şıklar ekranda karıştırılır.
// - Doğru/yanlış (dy).
// - Komut yazma (cevap): kabul edilen yazımlar. Karşılaştırmada büyük/küçük harf,
//   boşluk, tırnak ve nokta önemsizdir (shared/grade.ts normalize); bu yüzden cevabı
//   yalnızca noktayla ayrılan komutlar (~git add .~) bu biçimde sorulmaz. Cevaplarda
//   ~ ^ | -> yazılmaz: bunlar Ayrık'ın mantık sembolü kipini açar.
import { git } from "../meta.ts";
import { yardimcilar, type Soru } from "../../tipler.ts";

export type { Soru };

const { turet } = yardimcilar(git.kavramlar);
const kavramAdi = (k: string) => git.kavramlar[k]!.ad;

interface Ortak {
  // Kimliğin gt-u<ünite>- önekinden sonraki kısmı
  ad: string;
  soru: string;
  aciklama: string;
  zorluk?: 1 | 2 | 3;
}

export interface Secmeli extends Ortak {
  secenekler: string[];
  dogru?: number;
  // "Yalnız I", "I ve II" gibi şıklar yazıldığı sırada kalır
  sabit?: true;
  senaryo?: true;
}

export interface DogruYanlis extends Ortak {
  dy: boolean;
}

export interface Komut extends Ortak {
  cevap: string[];
}

export type Govde = Secmeli | DogruYanlis | Komut;

export function sorular(unite: number, kavram: string, liste: Govde[]): Soru[] {
  const ref = `${unite}. ünite · ${kavramAdi(kavram)}`;
  return liste.map((g) => {
    const ortak = { id: `gt-u${unite}-${g.ad}`, soru: g.soru, aciklama: g.aciklama, zorluk: g.zorluk ?? 1 };
    if ("dy" in g) {
      const [s] = turet(unite, `gt-u${unite}`, kavram, [{ ...ortak, tip: "tf", dogru: g.dy }], ref);
      return { ...s!, etiketler: ["kavram"] };
    }
    if ("cevap" in g) {
      const [s] = turet(unite, `gt-u${unite}`, kavram, [{ ...ortak, tip: "fill", bosluklar: [g.cevap] }], ref);
      return { ...s!, etiketler: ["komut"] };
    }
    const [s] = turet(
      unite,
      `gt-u${unite}`,
      kavram,
      [{ ...ortak, tip: "mcq", secenekler: g.secenekler, dogru: g.dogru ?? 0, ...(g.sabit ? { sabit: g.sabit } : {}) }],
      ref,
    );
    return { ...s!, etiketler: [g.senaryo ? "senaryo" : "kavram"] };
  });
}
