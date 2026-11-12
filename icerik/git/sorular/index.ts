import type { Konu, Soru } from "../../tipler.ts";
import { git } from "../meta.ts";
import { unite1 } from "./unite-1.ts";
import { unite2 } from "./unite-2.ts";
import { unite3 } from "./unite-3.ts";
import { unite4 } from "./unite-4.ts";
import { unite5 } from "./unite-5.ts";
import { unite6 } from "./unite-6.ts";
import { unite7 } from "./unite-7.ts";
import { unite8 } from "./unite-8.ts";
import { unite9 } from "./unite-9.ts";
import { unite10 } from "./unite-10.ts";
import { unite11 } from "./unite-11.ts";
import { unite12 } from "./unite-12.ts";
import { unite13 } from "./unite-13.ts";
import { unite14 } from "./unite-14.ts";
import { unite15 } from "./unite-15.ts";
import { unite16 } from "./unite-16.ts";

// Her ünite tek konu; konu kimliği gt-u<ünite>. Soruları henüz yazılmamış
// ünitelerin konuları da şimdiden açılır (soru havuzunda boş görünür).
export const konular: Konu[] = git.uniteler.map((u) => ({ id: `gt-u${u.no}`, baslik: u.baslik, hafta: u.no, sira: 1 }));

export const sorular: Soru[] = [...unite1, ...unite2, ...unite3, ...unite4, ...unite5, ...unite6, ...unite7, ...unite8, ...unite9, ...unite10, ...unite11, ...unite12, ...unite13, ...unite14, ...unite15, ...unite16];
