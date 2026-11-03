import { yardimcilar, type Soru } from "../../tipler.ts";
import { girisimcilik } from "../meta.ts";

export type { Soru };
export const { kitap, cikmis, turet } = yardimcilar(girisimcilik.kavramlar, "ges");
