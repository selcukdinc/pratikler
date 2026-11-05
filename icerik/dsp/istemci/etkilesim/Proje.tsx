// Proje haftasının etkileşimli şekilleri.

import { useState } from "react";
import { kisa } from "../gorseller/grafik";
import { aileCiz } from "../gorseller/proje";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { Cizim, Denetim, Kaydirici, Kaydiricilar, Olcumler } from "./ortak";

// G-H9-02
export function FiltreAilesi({ g }: { g: Gorsel }) {
  const [N, setN] = useState(4);
  const r = aileCiz(N);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`Derece ${N}: Ω = 2Ωc'de Butterworth ${kisa(r.bw2, 1)} dB, Chebyshev I ${kisa(r.ch2, 1)} dB.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Filtre derecesi N" deger={N} min={1} max={10} degis={setN} />
        </Kaydiricilar>
        <Olcumler>
          <span>Ω = 2Ωc'de Butterworth: {kisa(r.bw2, 1)} dB</span>
          <span>Chebyshev I: {kisa(r.ch2, 1)} dB</span>
        </Olcumler>
        <p>Aynı sönümü Chebyshev daha düşük dereceyle sağlar; bedeli geçiş bandındaki dalgalanmadır. Eliptik filtre iki bantta da dalgalanmaya izin verip en dik geçişi en düşük dereceyle elde eder.</p>
      </Denetim>
    </>
  );
}
