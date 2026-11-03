// Pratiklerin soru havuzları (yalnızca betikler ve testler kullanır; istemciye girmez)
import type { PratikSorulari } from "./tipler.ts";
import * as girisimcilik from "./girisimcilik/sorular/index.ts";
import * as tipElektronigi from "./tip-elektronigi/sorular/index.ts";

export const SORULAR: Record<string, PratikSorulari> = {
  "tip-elektronigi": tipElektronigi,
  girisimcilik,
};
