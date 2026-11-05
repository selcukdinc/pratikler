// Hafta 7 etkileşimli şekilleri. Her şey tarayıcıda hesaplanır.

import { useState } from "react";
import { kisa } from "../gorseller/grafik";
import { SIMETRI_DIZILERI, daireselDogrusalCiz, daireselKaydirCiz, daireselKonvCiz, dftOrnekCiz, simetriCiz, tabanCiz } from "../gorseller/hafta-7";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { Cizim, Denetim, Kaydirici, Kaydiricilar, Olcumler, Secim } from "./ortak";

const v = (x: number, b = 2) => kisa(x, b);
const karmasik = (re: number, im: number) => {
  const r = v(re, 2);
  if (Math.abs(im) < 1e-9) return r;
  const i = v(Math.abs(im), 2);
  return Math.abs(re) < 1e-9 ? `${im < 0 ? "−" : ""}${i}j` : `${r} ${im < 0 ? "−" : "+"} ${i}j`;
};

// G-H7-02
export function DftOrnek({ g }: { g: Gorsel }) {
  const [N, setN] = useState(6);
  const r = dftOrnekCiz(N);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`${N} noktalı DFT, frekans aralığı 2π/${N} = ${v(r.adim, 3)} rad.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="DFT uzunluğu N" deger={N} min={6} max={32} degis={setN} />
        </Kaydiricilar>
        <Olcumler>
          <span>örnek sayısı: {N}</span>
          <span>aralık: 2π/{N} = {v(r.adim, 3)} rad</span>
        </Olcumler>
        <p>Sıfır eklemek dizinin DTFT'sini (kesikli eğri) değiştirmez; yalnızca o eğriden daha sık örnek alır. Eğrideki ayrıntı dizinin kendi uzunluğuyla belirlenir.</p>
      </Denetim>
    </>
  );
}

// G-H7-03
export function DftTaban({ g }: { g: Gorsel }) {
  const [N, setN] = useState(8);
  const [k, setK] = useState(1);
  const kk = Math.min(k, N - 1);
  const r = tabanCiz(N, kk);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`N = ${N}, k = ${kk}: toplam = ${karmasik(r.toplam[0], r.toplam[1])}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="N" deger={N} min={2} max={16} degis={setN} />
          <Kaydirici ad="k" deger={kk} min={0} max={N - 1} degis={setK} />
        </Kaydiricilar>
        <Olcumler>
          <span>Σ e^(j2πkn/N) = {karmasik(r.toplam[0], r.toplam[1])}</span>
          <span>{kk === 0 ? "k = 0: bütün noktalar 1'de, toplam N" : "noktalar çembere eşit dağılmış, toplam 0"}</span>
        </Olcumler>
        <p>k ve N'nin ortak böleni varsa noktalar üst üste biner; yine de çember üzerinde eşit aralıklıdır ve toplamları sıfırdır. Bu diklik, ters DFT formülünün çalışmasını sağlar.</p>
      </Denetim>
    </>
  );
}

// G-H7-04
export function DftSimetri({ g }: { g: Gorsel }) {
  const [i, setI] = useState(0);
  const r = simetriCiz(i);
  const [a, b] = [r.X[1]!, r.X[7]!];
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`${r.ad}: X(1) = ${karmasik(a[0], a[1])}, X(7) = ${karmasik(b[0], b[1])}.`} />
      <Denetim>
        <Secim ad="Dizi" secenekler={SIMETRI_DIZILERI.map((d, k) => [k, d.ad])} deger={i} degis={setI} />
        <Olcumler>
          <span>X(1) = {karmasik(a[0], a[1])}</span>
          <span>X(7) = {karmasik(b[0], b[1])}</span>
          <span>X(4) = {karmasik(r.X[4]![0], r.X[4]![1])}</span>
        </Olcumler>
        <p>
          {i === 2
            ? "Saf sanal dizide X(N − k) = −X*(k): gerçel kısım ters işaretli, sanal kısım aynı aynalanır (eşlenik antisimetri)."
            : i === 1
              ? "Gerçel ve çift dizide sanal kısım her yerde sıfırdır: DFT gerçeldir ve k = N/2'ye göre aynalıdır."
              : "Gerçel dizide X(N − k) = X*(k): N noktanın yalnızca yarısı yeni bilgi taşır. X(0) ve X(N/2) gerçeldir."}
        </p>
      </Denetim>
    </>
  );
}

// G-H7-05
export function DaireselKaydirma({ g }: { g: Gorsel }) {
  const [n0, setN0] = useState(2);
  const r = daireselKaydirCiz(n0);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`n₀ = ${n0}: kaydırılmış dizi ${r.y.map((x) => v(x, 1)).join(", ")}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Kaydırma n₀" deger={n0} min={0} max={8} degis={setN0} />
        </Kaydiricilar>
        <p>Sağa n₀ kadar dairesel kaydırma, sondaki n₀ örneği başa taşır. n₀ = N olunca dizi eski haline döner. DFT'nin büyüklüğü değişmez; yalnızca X(k), e^(−j2πkn₀/N) ile çarpılır.</p>
      </Denetim>
    </>
  );
}

// G-H7-06
export function DaireselKonv({ g }: { g: Gorsel }) {
  const [n, setN] = useState(0);
  const r = daireselKonvCiz(n);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`y(${n}) = ${r.terimler.join(" + ")} = ${v(r.y)}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Çıkış indisi n" deger={n} min={0} max={3} degis={setN} />
        </Kaydiricilar>
        <Olcumler>
          <span>y({n}) = {v(r.y)}</span>
        </Olcumler>
        <p>İç çember her adımda bir konum döner. Doğrusal konvolüsyonda kayan dizi uçtan çıkar; burada çıkan örnek öbür uçtan geri girer.</p>
      </Denetim>
    </>
  );
}

// G-H7-07
export function DaireselDogrusal({ g }: { g: Gorsel }) {
  const [N, setN] = useState(4);
  const r = daireselDogrusalCiz(N);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`N = ${N}: ${r.esit ? "dairesel sonuç doğrusalla aynı" : "zamanda örtüşme var"}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Dairesel konvolüsyon uzunluğu N" deger={N} min={3} max={9} degis={setN} />
        </Kaydiricilar>
        <Olcumler>
          <span>doğrusal uzunluk N₁ + N₂ − 1 = {r.L}</span>
          <span>dairesel: {r.yc.map((x) => v(x)).join(", ")}</span>
          <span>{r.esit ? "eşit" : "eşit değil"}</span>
        </Olcumler>
      </Denetim>
    </>
  );
}
