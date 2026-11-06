// Soru havuzu: kaynak/ klasörü ayrik-pratik deposundaki content/sorular'ın aynısıdır.
// Soru ve konu kimlikleri burada "ay-" önekini alır (kavramlar zaten u<ünite>- biçiminde).
import type { Konu, Soru } from "../../tipler.ts";
import { konular as eskiKonular, sorular as eskiSorular } from "./kaynak/index.ts";

export const ONEK = "ay-";

export const konular: Konu[] = eskiKonular.map((k) => ({ ...k, id: ONEK + k.id }));

export const sorular: Soru[] = eskiSorular.map((s) => ({ ...s, id: ONEK + s.id, konu: ONEK + s.konu }) as Soru);
