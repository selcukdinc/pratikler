// Hafta 2 etkileşimli şekilleri. Her şey tarayıcıda hesaplanır.

import { useState } from "react";
import {
  INDEKS_SECIMLERI, MATRIS_SECIMLERI, indekslemeCiz, istatCiz, istatIfade, istatSonuc, matrisCiz, type IstatBoyut, type IstatFonk,
} from "../gorseller/hafta-2";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { Cizim, Denetim, Olcumler, Secim } from "./ortak";

// G-H2-01
export function Indeksleme({ g }: { g: Gorsel }) {
  const [i, setI] = useState(2);
  const s = INDEKS_SECIMLERI[i]!;
  return (
    <>
      <Cizim g={g} html={indekslemeCiz(s)} etiket={`${s.ifade}: indisler ${s.indisler.join(", ")}.`} />
      <Denetim>
        <Secim ad="İfade" secenekler={INDEKS_SECIMLERI.map((x, k) => [k, x.ifade])} deger={i} degis={setI} />
        <p aria-live="polite">{s.aciklama}</p>
      </Denetim>
    </>
  );
}

// G-H2-02
export function MatrisIndeks({ g }: { g: Gorsel }) {
  const [i, setI] = useState(3);
  const s = MATRIS_SECIMLERI[i]!;
  return (
    <>
      <Cizim g={g} html={matrisCiz(s)} etiket={`${s.ifade}. ${s.aciklama}`} />
      <Denetim>
        <Secim ad="İfade" secenekler={MATRIS_SECIMLERI.map((x, k) => [k, x.ifade])} deger={i} degis={setI} />
        <p aria-live="polite">{s.aciklama}</p>
      </Denetim>
    </>
  );
}

// G-H2-05
export function IstatBoyutu({ g }: { g: Gorsel }) {
  const [f, setF] = useState<IstatFonk>("mean");
  const [b, setB] = useState<IstatBoyut>(1);
  const [w, setW] = useState<0 | 1>(0);
  const sonuc = istatSonuc(f, b, w).map((v) => v.toFixed(4).replace(".", ","));
  return (
    <>
      <Cizim g={g} html={istatCiz(f, b, w)} etiket={`${istatIfade(f, b, w)} = ${sonuc.join("; ")}.`} />
      <Denetim>
        <Secim ad="Fonksiyon" secenekler={[["mean", "mean"], ["median", "median"], ["std", "std"], ["var", "var"]]} deger={f} degis={setF} />
        <Secim ad="Boyut" secenekler={[[1, "boyut 1 (sütunlar)"], [2, "boyut 2 (satırlar)"], ["all", "'all'"]]} deger={b} degis={setB} />
        {(f === "std" || f === "var") && <Secim ad="Ağırlık" secenekler={[[0, "w = 0 (N − 1)"], [1, "w = 1 (N)"]]} deger={w} degis={setW} />}
        <Olcumler>
          <span>
            {istatIfade(f, b, w)} = {sonuc.length > 1 ? `[${sonuc.join("  ")}]` : sonuc[0]}
          </span>
        </Olcumler>
        <p>std ve var'da ikinci argüman ağırlıktır, boyut üçüncü argümandır. mean ve median'da boyut ikinci argümandır.</p>
      </Denetim>
    </>
  );
}
