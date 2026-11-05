// Hafta 5 etkileşimli şekilleri. Her şey tarayıcıda hesaplanır.

import { useState } from "react";
import { kisa } from "../gorseller/grafik";
import {
  DALGA_ADLARI, SARMA_ADLARI, cemberCiz, darbeCiz, katsayi, sarmaCiz, seriCiz, sinusCiz, sureCiz, toplamCiz, type Dalga, type SarmaSinyal,
} from "../gorseller/hafta-5";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { Cizim, Denetim, Kaydirici, Kaydiricilar, Olcumler, Secim } from "./ortak";

const v = (x: number, b = 2) => kisa(x, b);
const rad = (d: number) => (d * Math.PI) / 180;

// G-H5-01
export function Cember({ g }: { g: Gorsel }) {
  const [d, setD] = useState(60);
  const r = cemberCiz(rad(d));
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`θ = ${d}°: cos θ = ${v(r.cos)}, sin θ = ${v(r.sin)}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="θ" deger={d} min={0} max={720} adim={5} yaz={(x) => `${x}°`} degis={setD} />
        </Kaydiricilar>
        <Olcumler>
          <span>cos θ = {v(r.cos)} (yatay)</span>
          <span>sin θ = {v(r.sin)} (dikey)</span>
          <span>{d >= 360 ? "ikinci tur: değerler tekrar ediyor" : "birinci tur"}</span>
        </Olcumler>
      </Denetim>
    </>
  );
}

// G-H5-02
export function Sinus({ g }: { g: Gorsel }) {
  const [A, setA] = useState(1.5);
  const [f, setF] = useState(1);
  const [faz, setFaz] = useState(0);
  return (
    <>
      <Cizim g={g} html={sinusCiz(A, f, rad(faz))} etiket={`A = ${v(A)}, f = ${v(f)} Hz, φ = ${faz}°.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Genlik A" deger={A} min={0} max={2} adim={0.1} yaz={(x) => v(x, 1)} degis={setA} />
          <Kaydirici ad="Frekans f" deger={f} min={0.5} max={4} adim={0.5} yaz={(x) => `${v(x, 1)} Hz`} degis={setF} />
          <Kaydirici ad="Faz φ" deger={faz} min={-180} max={180} adim={15} yaz={(x) => `${x}°`} degis={setFaz} />
        </Kaydiricilar>
        <Olcumler>
          <span>periyot T = 1/f = {v(1 / f)} s</span>
          <span>açısal frekans ω = 2πf = {v(2 * Math.PI * f)} rad/s</span>
          <span>faz kayması zamanda {v(-faz / 360 / f, 3)} s</span>
        </Olcumler>
      </Denetim>
    </>
  );
}

// G-H5-03
export function SinusToplam({ g }: { g: Gorsel }) {
  const [A2, setA2] = useState(1);
  const [f2, setF2] = useState(1);
  const [faz2, setFaz2] = useState(90);
  const r = toplamCiz(A2, f2, rad(faz2));
  return (
    <>
      <Cizim g={g} html={r.s} etiket={f2 === 1 ? `Toplam bir sinüs: genlik ${v(r.genlik)}, faz ${r.faz}°.` : "Toplam sinüs değil, periyodu 1 s."} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="İkinci sinüsün genliği" deger={A2} min={0} max={2} adim={0.1} yaz={(x) => v(x, 1)} degis={setA2} />
          <Kaydirici ad="İkinci sinüsün frekansı" deger={f2} min={1} max={5} yaz={(x) => `${x} Hz`} degis={setF2} />
          <Kaydirici ad="İkinci sinüsün fazı" deger={faz2} min={-180} max={180} adim={15} yaz={(x) => `${x}°`} degis={setFaz2} />
        </Kaydiricilar>
        <p aria-live="polite">
          {f2 === 1
            ? `Frekanslar eşit: toplam yine 1 Hz'lik bir sinüs, genliği ${v(r.genlik)} ve fazı ${r.faz}°. Faz farkı 180° ve genlikler eşitse sinüsler birbirini yok eder.`
            : `Frekanslar farklı (1 Hz ve ${f2} Hz): toplam artık sinüs değil. Yine de her 1 saniyede kendini tekrar eder, çünkü iki sinüs de 1 saniyede tam sayıda devir yapar.`}
        </p>
      </Denetim>
    </>
  );
}

// G-H5-04
export function FourierSerisi({ g }: { g: Gorsel }) {
  const [d, setD] = useState<Dalga>("kare");
  const [N, setN] = useState(3);
  const r = seriCiz(d, N);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`${DALGA_ADLARI[d]}, ilk ${N} harmonik: ${r.ks.join(", ")}.`} />
      <Denetim>
        <Secim ad="Dalga" secenekler={(Object.keys(DALGA_ADLARI) as Dalga[]).map((k) => [k, DALGA_ADLARI[k]])} deger={d} degis={setD} />
        <Kaydiricilar>
          <Kaydirici ad="Harmonik sayısı N" deger={N} min={1} max={25} degis={setN} />
        </Kaydiricilar>
        <Olcumler>
          <span>kullanılan harmonikler: {r.ks.length > 8 ? `${r.ks.slice(0, 8).join(", ")}, ...` : r.ks.join(", ")}</span>
          <span>b₁ = {v(katsayi(d, 1), 3)}</span>
          {d === "kare" && <span>kısmi toplamın tepesi: {v(r.tepe, 3)} (Gibbs aşımı)</span>}
        </Olcumler>
        <p>
          {d === "kare"
            ? "Kare dalgada yalnızca tek harmonikler var ve genlikleri 4/(πk). N arttıkça eğri kareye yaklaşır ama sıçramaların yanında yaklaşık %9'luk bir aşım hep kalır."
            : d === "ucgen"
              ? "Üçgen dalgada yine yalnızca tek harmonikler var, ama genlikler 1/k² ile çok hızlı azalır; birkaç terim bile yeterince iyi bir üçgen verir."
              : "Testere dişinde bütün harmonikler var ve genlikler 2/(πk) ile azalır; işaretleri sırayla değişir."}
        </p>
      </Denetim>
    </>
  );
}

// G-H5-05
export function Darbe({ g }: { g: Gorsel }) {
  const [tau, setTau] = useState(1);
  const r = darbeCiz(tau);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`τ = ${v(tau)} s; ilk sıfır ${v(r.sifir)} Hz.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Darbe süresi τ" deger={tau} min={0.25} max={2} adim={0.25} yaz={(x) => `${v(x)} s`} degis={setTau} />
        </Kaydiricilar>
        <Olcumler>
          <span>X(0) = τ = {v(tau)}</span>
          <span>ilk sıfır: f = 1/τ = {v(r.sifir)} Hz</span>
        </Olcumler>
        <p>Darbe kısaldıkça spektrum yayılır, uzadıkça daralır: zamanda kısa olan, frekansta geniştir.</p>
      </Denetim>
    </>
  );
}

// G-H5-06
export function Sarma({ g }: { g: Gorsel }) {
  const [tur, setTur] = useState<SarmaSinyal>("kayik");
  const [f, setF] = useState(3);
  const r = sarmaCiz(tur, f);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`Sarma frekansı ${v(f)}; kütle merkezi (${v(r.km[0])}; ${v(r.km[1])}).`} />
      <Denetim>
        <Secim ad="Sinyal" secenekler={SARMA_ADLARI} deger={tur} degis={setTur} />
        <Kaydiricilar>
          <Kaydirici ad="Sarma frekansı f" deger={f} min={0} max={5} adim={0.05} yaz={(x) => `${v(x)} devir/s`} degis={setF} />
        </Kaydiricilar>
        <Olcumler>
          <span>kütle merkezi: ({v(r.km[0])}; {v(r.km[1])})</span>
        </Olcumler>
        <p>
          Sarma frekansı sinyalin frekansına eşit olunca tepeler hep çemberin aynı yanına düşer ve kütle merkezi merkezden uzaklaşır. Başka frekanslarda eğri çemberin her yanına
          dağılır ve kütle merkezi sıfıra yakın kalır. Kaymasız sinyalde f = 0'daki tepe kaybolur; iki frekanslı sinyalde iki ayrı tepe görülür.
        </p>
      </Denetim>
    </>
  );
}

// G-H5-08
export function Sure({ g }: { g: Gorsel }) {
  const [T, setT] = useState(2);
  const r = sureCiz(T);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`T = ${T} s; 3 Hz'deki tepe ${v(r.tepe)}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Gözlem süresi T" deger={T} min={1} max={8} adim={0.5} yaz={(x) => `${v(x, 1)} s`} degis={setT} />
        </Kaydiricilar>
        <Olcumler>
          <span>3 Hz'de |ĝ| = {v(r.tepe)} ≈ T/2</span>
          <span>tepenin genişliği ≈ 2/T = {v(r.genislik)} Hz</span>
        </Olcumler>
        <p>Gerçek Fourier dönüşümü süreye bölmez: süre uzadıkça sinyalin frekansındaki değer büyür, diğer frekanslardaki katkılar birbirini götürmeye devam eder.</p>
      </Denetim>
    </>
  );
}
