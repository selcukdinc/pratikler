import type { Konu, Soru } from "../../tipler.ts";
import { unite1 } from "./unite-1.ts";
import { unite2 } from "./unite-2.ts";
import { unite3 } from "./unite-3.ts";
import { unite4 } from "./unite-4.ts";
import { unite5 } from "./unite-5.ts";

// Her ünite tek konu; konu kimliği ie-u<ünite>
export const konular: Konu[] = [
  { id: "ie-u1", baslik: "Electric Motors & Motor Drives", hafta: 1, sira: 1 },
  { id: "ie-u2", baslik: "Electric Vehicles & Charging Systems", hafta: 2, sira: 1 },
  { id: "ie-u3", baslik: "Embedded Systems & IoT", hafta: 3, sira: 1 },
  { id: "ie-u4", baslik: "Solar Energy Systems", hafta: 4, sira: 1 },
  { id: "ie-u5", baslik: "Job Ads & Applications", hafta: 5, sira: 1 },
];

export const sorular: Soru[] = [...unite1, ...unite2, ...unite3, ...unite4, ...unite5];
