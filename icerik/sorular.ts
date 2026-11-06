// Pratiklerin soru havuzları (yalnızca betikler ve testler kullanır; istemciye girmez)
import type { PratikSorulari } from "./tipler.ts";
import * as dsp from "./dsp/sorular/index.ts";
import * as fizik from "./fizik/sorular/index.ts";
import * as ayrik from "./ayrik/sorular/index.ts";
import * as fpga from "./fpga/sorular/index.ts";
import * as girisimcilik from "./girisimcilik/sorular/index.ts";
import * as kimya from "./kimya/sorular/index.ts";
import * as tipElektronigi from "./tip-elektronigi/sorular/index.ts";

export const SORULAR: Record<string, PratikSorulari> = {
  "tip-elektronigi": tipElektronigi,
  kimya,
  dsp,
  fizik,
  ayrik,
  fpga,
  girisimcilik,
};
