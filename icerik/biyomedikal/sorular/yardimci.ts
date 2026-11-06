// Biyomedikal soru yardımcıları. Bütün sorular ders sunumlarındaki bilgiden
// türetilmiştir (kaynak: derived, etiket: sunum). Konu kimliği bm-u<ünite>.
import { biyomedikal } from "../meta.ts";
import { yardimcilar, type Soru, type TuretilmisGovde } from "../../tipler.ts";

export type { Soru };

const { turet } = yardimcilar(biyomedikal.kavramlar);
const kavramAdi = (k: string) => biyomedikal.kavramlar[k]!.ad;

// Ünitenin dayandığı sunum
const SUNUM: Record<number, string> = {
  1: "Biyomedikal Sinyaller 1",
  2: "Biyomedikal Sinyaller 1",
  3: "Biyomedikal Sinyaller 1-2",
  4: "Biyomedikal Sinyaller 2",
  5: "Önişlemler 1",
  6: "Önişlemler 2",
  7: "Fourier Dönüşümü",
  8: "Dalgacık Dönüşümü",
};

export function sunum(unite: number, kavram: string, liste: TuretilmisGovde[]): Soru[] {
  return turet(unite, `bm-u${unite}`, kavram, liste, `${SUNUM[unite]} sunumu · ${kavramAdi(kavram)}`)
    .map((s) => ({ ...s, etiketler: ["sunum"] }));
}
