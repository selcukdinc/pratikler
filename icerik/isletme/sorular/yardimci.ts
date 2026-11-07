// İşletme soru yardımcıları. Bütün sorular ders özetinden türetilmiş çoktan
// seçmeli sorulardır (kaynak: derived, etiket: ozet). Konu kimliği ib-u<ünite>,
// soru kimliği ib-u<ünite>-<kısa ad>.
import { isletme } from "../meta.ts";
import { yardimcilar, type Soru } from "../../tipler.ts";

export type { Soru };

const { turet } = yardimcilar(isletme.kavramlar);
const kavramAdi = (k: string) => isletme.kavramlar[k]!.ad;

export interface Coktan {
  // Kimliğin ib-u<ünite>- önekinden sonraki kısmı
  ad: string;
  soru: string;
  secenekler: string[];
  aciklama: string;
  // Varsayılan 0: doğru şık ilk sırada yazılır, şıklar ekranda karıştırılır
  dogru?: number;
  zorluk?: 1 | 2 | 3;
  // "Yalnız I", "I ve II" gibi şıklar yazıldığı sırada kalır
  sabit?: true;
}

export function ozet(unite: number, kavram: string, liste: Coktan[]): Soru[] {
  return turet(
    unite,
    `ib-u${unite}`,
    kavram,
    liste.map(({ ad, dogru, zorluk, sabit, ...s }) => ({
      ...s,
      id: `ib-u${unite}-${ad}`,
      tip: "mcq" as const,
      zorluk: zorluk ?? 1,
      dogru: dogru ?? 0,
      ...(sabit ? { sabit } : {}),
    })),
    `Sınav özeti, ${unite}. başlık · ${kavramAdi(kavram)}`,
  ).map((s) => ({ ...s, etiketler: ["ozet"] }));
}
