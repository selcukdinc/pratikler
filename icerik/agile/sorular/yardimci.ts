// Agile ve Scrum soru yardımcıları. Bütün sorular kendi cümlelerimizle türetilmiştir
// (kaynak: derived). Konu kimliği ag-u<ünite>, soru kimliği ag-u<ünite>-<kısa ad>.
//
// Dört biçim var:
// - Çoktan seçmeli (secenekler): doğru şık ilk sırada yazılır (dogru verilmezse 0),
//   şıklar ekranda karıştırılır. Varsayılan etiket kavram.
// - Doğru/yanlış (dy). Varsayılan etiket kavram.
// - Yazma (cevap): kabul edilen yazımlar; büyük/küçük harf, boşluk, noktalama ve Türkçe
//   karakterler önemsizdir (shared/grade.ts normalize). Varsayılan etiket kavram.
// - Sayısal (sayi): cevap belirtimleri (shared/grade.ts). Tam sayı cevaplar kendiliğinden
//   ±0 alır. Etiket hesap.
//
// Etiketler: rehber (cevap Rehber'in ya da Manifesto'nun metnine dayanır), kavram, sahada
// (yaygın uygulama ve yanılgı), senaryo (kurgusal squad'da bir durum), hesap.
// Açıklamada \n---\n adımları ayırır ("Sonraki adım"). Açıklamalar doğru şıkkı harfle anmaz.
import { agile } from "../meta.ts";
import { yardimcilar, type Soru } from "../../tipler.ts";

export type { Soru };

const { turet } = yardimcilar(agile.kavramlar);
const kavramAdi = (k: string) => agile.kavramlar[k]!.ad;

type Etiket = "rehber" | "kavram" | "sahada" | "senaryo" | "hesap";

interface Ortak {
  // Kimliğin ag-u<ünite>- önekinden sonraki kısmı
  ad: string;
  soru: string;
  aciklama: string;
  zorluk?: 1 | 2 | 3;
  etiket?: Etiket;
}

export interface Secmeli extends Ortak {
  secenekler: string[];
  dogru?: number;
  // "Yalnız I", "I ve II" gibi şıklar yazıldığı sırada kalır
  sabit?: true;
}

export interface DogruYanlis extends Ortak {
  dy: boolean;
}

export interface Yazma extends Ortak {
  cevap: string[];
}

export interface Sayi extends Ortak {
  sayi: (string | number)[];
}

export type Govde = Secmeli | DogruYanlis | Yazma | Sayi;

const belirtim = (x: string | number) => (typeof x === "number" ? (Number.isInteger(x) ? `${x}±0` : String(x)) : x);

export function sorular(unite: number, kavram: string, liste: Govde[]): Soru[] {
  const ref = `${unite}. ünite · ${kavramAdi(kavram)}`;
  const konu = `ag-u${unite}`;
  return liste.map((g) => {
    const ortak = { id: `ag-u${unite}-${g.ad}`, soru: g.soru, aciklama: g.aciklama, zorluk: g.zorluk ?? 1 };
    let s: Soru;
    let etiket: Etiket;
    if ("dy" in g) {
      [s] = turet(unite, konu, kavram, [{ ...ortak, tip: "tf", dogru: g.dy }], ref) as [Soru];
      etiket = g.etiket ?? "kavram";
    } else if ("cevap" in g) {
      [s] = turet(unite, konu, kavram, [{ ...ortak, tip: "fill", bosluklar: [g.cevap] }], ref) as [Soru];
      etiket = g.etiket ?? "kavram";
    } else if ("sayi" in g) {
      [s] = turet(unite, konu, kavram, [{ ...ortak, tip: "num", bosluklar: [g.sayi.map(belirtim)] }], ref) as [Soru];
      etiket = g.etiket ?? "hesap";
    } else {
      [s] = turet(
        unite,
        konu,
        kavram,
        [{ ...ortak, tip: "mcq", secenekler: g.secenekler, dogru: g.dogru ?? 0, ...(g.sabit ? { sabit: g.sabit } : {}) }],
        ref,
      ) as [Soru];
      etiket = g.etiket ?? "kavram";
    }
    return { ...s, etiketler: [etiket] };
  });
}
