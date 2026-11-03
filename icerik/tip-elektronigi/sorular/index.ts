import type { Konu, Soru } from "../../tipler.ts";
import { unite1 } from "./unite-1.ts";
import { unite2 } from "./unite-2.ts";
import { unite3 } from "./unite-3.ts";

// Her ünite tek konu; konu kimliği te-u<ünite>
export const konular: Konu[] = [
  { id: "te-u1", baslik: "Fizyolojik Sinyaller ve Biyomedikal Ölçüm Sistemleri", hafta: 1, sira: 1 },
  { id: "te-u2", baslik: "Biyosinyaller: EKG, EEG ve EMG", hafta: 2, sira: 1 },
  { id: "te-u3", baslik: "Biyomedikal Sensörler ve Dönüştürücüler", hafta: 3, sira: 1 },
];

export const sorular: Soru[] = [...unite1, ...unite2, ...unite3];
