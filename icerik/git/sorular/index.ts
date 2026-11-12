import type { Konu, Soru } from "../../tipler.ts";
import { git } from "../meta.ts";
import { unite1 } from "./unite-1.ts";
import { unite2 } from "./unite-2.ts";
import { unite3 } from "./unite-3.ts";
import { unite4 } from "./unite-4.ts";
import { unite5 } from "./unite-5.ts";

// Her ünite tek konu; konu kimliği gt-u<ünite>. Soruları henüz yazılmamış
// ünitelerin konuları da şimdiden açılır (soru havuzunda boş görünür).
export const konular: Konu[] = git.uniteler.map((u) => ({ id: `gt-u${u.no}`, baslik: u.baslik, hafta: u.no, sira: 1 }));

export const sorular: Soru[] = [...unite1, ...unite2, ...unite3, ...unite4, ...unite5];
