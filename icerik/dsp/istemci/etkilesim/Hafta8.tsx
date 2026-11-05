// Hafta 8 etkileşimli şekilleri. Her şey tarayıcıda hesaplanır.

import { useState } from "react";
import { kisa } from "../gorseller/grafik";
import { AKIS_GIRISLERI, KARMA_SECENEKLERI, akisCiz, islemCiz, kYaz, karmaCiz, kelebekCiz, spektrumCiz, type C } from "../gorseller/hafta-8";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { Cizim, Denetim, Kaydirici, Kaydiricilar, Olcumler, Secim } from "./ortak";

// G-H8-01
export function FftIslem({ g }: { g: Gorsel }) {
  const [v, setV] = useState(10);
  const r = islemCiz(v);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`N = ${r.N}: DFT ${r.dft} çarpma, FFT ${r.ff} çarpma.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="N = 2^v" deger={v} min={1} max={12} yaz={(k) => `${2 ** k}`} degis={setV} />
        </Kaydiricilar>
        <Olcumler>
          <span>N² = {r.dft.toLocaleString("tr-TR")}</span>
          <span>(N/2)·log₂N = {r.ff.toLocaleString("tr-TR")}</span>
          <span>oran: {kisa(r.dft / r.ff, 1)}</span>
        </Olcumler>
        <p>Bir karmaşık çarpma 1 µs sürseydi N = {r.N} için doğrudan DFT {kisa(r.dft / 1e6, 3)} s, FFT {kisa(r.ff / 1e3, 3)} ms sürerdi.</p>
      </Denetim>
    </>
  );
}

// G-H8-03
const GIRDILER: { ad: string; a: C; b: C }[] = [
  { ad: "a = 1, b = 1", a: [1, 0], b: [1, 0] },
  { ad: "a = 2, b = 1", a: [2, 0], b: [1, 0] },
  { ad: "a = 1, b = j", a: [1, 0], b: [0, 1] },
];
export function Kelebek({ g }: { g: Gorsel }) {
  const [r, setR] = useState(1);
  const [i, setI] = useState(0);
  const d = GIRDILER[i]!;
  const k = kelebekCiz(8, r, d.a, d.b);
  return (
    <>
      <Cizim g={g} html={k.s} etiket={`W₈ üssü ${r}: A = ${kYaz(k.A)}, B = ${kYaz(k.B)}.`} />
      <Denetim>
        <Secim ad="Girdiler" secenekler={GIRDILER.map((x, j) => [j, x.ad])} deger={i} degis={setI} />
        <Kaydiricilar>
          <Kaydirici ad="Bölüm çarpanı üssü r" deger={r} min={0} max={7} degis={setR} />
        </Kaydiricilar>
        <Olcumler>
          <span>W₈^r = {kYaz(k.w)}</span>
          <span>A = {kYaz(k.A)}</span>
          <span>B = {kYaz(k.B)}</span>
        </Olcumler>
        <p>Tek bir çarpma (W·b) iki çıkışa da yeter: biri toplam, öbürü fark. r = 0'da W = 1 ve kelebek 2 noktalı DFT olur.</p>
      </Denetim>
    </>
  );
}

// G-H8-04
export function FftAkis({ g }: { g: Gorsel }) {
  const [i, setI] = useState(2);
  const [asama, setAsama] = useState(3);
  const r = akisCiz(i, asama);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`${AKIS_GIRISLERI[i]!.ad}, ${asama}. aşamaya kadar.`} />
      <Denetim>
        <Secim ad="Giriş" secenekler={AKIS_GIRISLERI.map((x, j) => [j, x.ad])} deger={i} degis={setI} />
        <Kaydiricilar>
          <Kaydirici ad="Gösterilen aşama" deger={asama} min={0} max={3} degis={setAsama} />
        </Kaydiricilar>
        <Olcumler>
          <span>X(k): {r.X.map((c) => kYaz(c, 1)).join(" | ")}</span>
        </Olcumler>
        <p>Her aşama bir önceki aşamanın değerlerinden yalnızca kelebeklerle yeni değerler üretir: log₂8 = 3 aşama, her birinde 4 kelebek.</p>
      </Denetim>
    </>
  );
}

// G-H8-06
export function KarmaN({ g }: { g: Gorsel }) {
  const [i, setI] = useState(1);
  const [N1, N2] = KARMA_SECENEKLERI[i]!;
  const r = karmaCiz(N1, N2);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`N = ${r.N} = ${N1} × ${N2}.`} />
      <Denetim>
        <Secim ad="N₁ × N₂" secenekler={KARMA_SECENEKLERI.map(([a, b], j) => [j, `${a} × ${b} = ${a * b}`])} deger={i} degis={setI} />
        <p>Giriş tablosu sütunlara göre okunduğunda x(n) doğal sırada gelir; çıkış tablosu satırlara göre okunduğunda X(k) doğal sırada gelir.</p>
      </Denetim>
    </>
  );
}

// G-H8-07
export function Spektrum({ g }: { g: Gorsel }) {
  const [f1, setF1] = useState(80);
  const [v, setV] = useState(8);
  const N = 2 ** v;
  const r = spektrumCiz(f1, N);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`f₁ = ${f1} Hz, N = ${N}: en yüksek tepe ${kisa(r.tepe, 1)} Hz.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Birinci sinüsün frekansı f₁ (Hz)" deger={f1} min={20} max={480} adim={5} degis={setF1} />
          <Kaydirici ad="FFT uzunluğu N" deger={v} min={5} max={10} yaz={(k) => `${2 ** k}`} degis={setV} />
        </Kaydiricilar>
        <Olcumler>
          <span>en yüksek tepe: {kisa(r.tepe, 1)} Hz</span>
          <span>Δf = fs/N = {kisa(r.df, 2)} Hz</span>
        </Olcumler>
        <p>İkinci sinüs 220 Hz'de ve yarım genlikte. f₁'i 220 Hz'e yaklaştır: iki tepeyi ayırmak için N'nin ne kadar büyük olması gerekiyor?</p>
      </Denetim>
    </>
  );
}
