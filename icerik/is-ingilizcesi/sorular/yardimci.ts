// İş İngilizcesi soru yardımcıları. Konu kimliği ie-u<ünite>.
// quiz(): 26.10.2026 quizinin (Grup A/B) soruları, metin ve şıklar quizdeki gibi,
// cevap quizin cevap anahtarından. turet(): hedef kelimelerden quiz kalıbıyla
// türetilmiş sorular.
import { isIngilizcesi } from "../meta.ts";
import { yardimcilar, type Soru, type TuretilmisGovde } from "../../tipler.ts";

export type { Soru };

const { turet: turetHam } = yardimcilar(isIngilizcesi.kavramlar);

// Quizin beş bölüm başlığı; soru metninin başına yazılır
export const KALIP = {
  anlam: "**Choose the correct meaning.**",
  kelime: "**Choose the word that completes the sentence.**",
  paragraf: "**Choose the sentence that does not fit the paragraph.**",
  tr: "**Choose the correct Turkish translation.**",
  en: "**Choose the correct English translation.**",
} as const;

export const k = (kalip: keyof typeof KALIP, metin: string) => `${KALIP[kalip]}\n\n${metin}`;

export interface QuizGovde {
  grup: "A" | "B";
  no: number;
  kavram: string;
  soru: string;
  secenekler: string[];
  dogru: number;
  aciklama: string;
}

export function quiz(unite: number, liste: QuizGovde[]): Soru[] {
  return liste.map(({ grup, no, ...s }) => {
    if (!isIngilizcesi.kavramlar[s.kavram]) throw new Error(`bilinmeyen kavram: ${s.kavram}`);
    return {
      ...s,
      id: `ie-q${grup.toLowerCase()}${String(no).padStart(2, "0")}`,
      tip: "mcq",
      zorluk: 1,
      hafta: unite,
      konu: `ie-u${unite}`,
      kaynak: "original",
      etiketler: ["cikmis"],
      ref: `Quiz (26.10.2026), Grup ${grup}, soru ${no}`,
    } as Soru;
  });
}

export function turet(unite: number, kavram: string, liste: TuretilmisGovde[]): Soru[] {
  return turetHam(unite, `ie-u${unite}`, kavram, liste);
}
