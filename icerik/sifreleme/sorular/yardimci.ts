// Şifreleme soru yardımcıları. Bütün sorular kendi cümlelerimizle türetilmiştir
// (kaynak: derived). Konu kimliği sf-u<ünite>, soru kimliği sf-u<ünite>-<kısa ad>.
//
// Dört biçim var:
// - Çoktan seçmeli (secenekler): doğru şık ilk sırada yazılır (dogru verilmezse 0),
//   şıklar ekranda karıştırılır. Varsayılan etiket kavram; hata-bul ya da ctf verilebilir.
// - Doğru/yanlış (dy).
// - Yazma (cevap): kabul edilen yazımlar; büyük/küçük harf, boşluk, noktalama ve Türkçe
//   karakterler önemsizdir (shared/grade.ts normalize). Varsayılan etiket hesap; şifre
//   kırma sorularında ctf. Base64 gibi harf büyüklüğü önemli cevaplar böyle sorulmaz.
// - Sayısal (sayi): cevap belirtimleri (shared/grade.ts). Tam sayı cevaplar kendiliğinden
//   ±0 alır (modüler hesapta yakın değer yanlıştır). Etiket hesap.
//
// Açıklamada \n---\n adımları ayırır ("Sonraki adım"). latex: true; $...$ içinde ters
// bölü iki kez yazılır. Şifreli metinler ve hesapların cevapları sorular.test.ts'te
// oyuncak uygulamalarla (src/kripto/oyuncak) sınanır.
import { sifreleme } from "../meta.ts";
import { yardimcilar, type Soru } from "../../tipler.ts";

export type { Soru };

const { turet } = yardimcilar(sifreleme.kavramlar);
const kavramAdi = (k: string) => sifreleme.kavramlar[k]!.ad;

type Etiket = "kavram" | "hesap" | "ctf" | "hata-bul";

interface Ortak {
  // Kimliğin sf-u<ünite>- önekinden sonraki kısmı
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
  const konu = `sf-u${unite}`;
  return liste.map((g) => {
    const ortak = { id: `sf-u${unite}-${g.ad}`, soru: g.soru, aciklama: g.aciklama, zorluk: g.zorluk ?? 1 };
    let s: Soru;
    let etiket: Etiket;
    if ("dy" in g) {
      [s] = turet(unite, konu, kavram, [{ ...ortak, tip: "tf", dogru: g.dy }], ref) as [Soru];
      etiket = g.etiket ?? "kavram";
    } else if ("cevap" in g) {
      [s] = turet(unite, konu, kavram, [{ ...ortak, tip: "fill", bosluklar: [g.cevap] }], ref) as [Soru];
      etiket = g.etiket ?? "hesap";
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
