// Tıp Elektroniği soru yardımcıları. Bütün sorular türetilmiştir (kaynak: derived):
// ders(): ders notundaki bilgiden, kitaptan(): dersin kaynak kitaplarından.
// Konu kimliği te-u<ünite>; ünite 1 = 1-2. hafta, ünite 2 = 3. hafta, ünite 3 = 4. hafta notu.
import { tipElektronigi } from "../meta.ts";
import { yardimcilar, type Soru, type TuretilmisGovde } from "../../tipler.ts";

export type { Soru };

const { turet } = yardimcilar(tipElektronigi.kavramlar);
const HAFTA: Record<number, string> = { 1: "1-2", 2: "3", 3: "4" };
const kavramAdi = (k: string) => tipElektronigi.kavramlar[k]!.ad;

export function ders(unite: number, kavram: string, liste: TuretilmisGovde[]): Soru[] {
  return turet(unite, `te-u${unite}`, kavram, liste, `Ders notu, ${HAFTA[unite]}. hafta · ${kavramAdi(kavram)}`)
    .map((s) => ({ ...s, etiketler: ["ders"] }));
}

export const KITAPLAR = {
  semmlow: "Semmlow, Biosignal and Biomedical Image Processing, 1. bölüm",
  subasi: "Subasi, Practical Guide for Biomedical Signals Analysis, 2. bölüm",
} as const;

export function kitaptan(unite: number, kavram: string, kitap: keyof typeof KITAPLAR, liste: TuretilmisGovde[]): Soru[] {
  return turet(unite, `te-u${unite}`, kavram, liste, `${KITAPLAR[kitap]} · ${kavramAdi(kavram)}`)
    .map((s) => ({ ...s, etiketler: ["kitap"] }));
}
