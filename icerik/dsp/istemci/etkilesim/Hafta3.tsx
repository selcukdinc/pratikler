// Hafta 3 etkileşimli şekilleri. Her şey tarayıcıda hesaplanır.

import { useState } from "react";
import { OZELLIK_ADLARI, SISTEMLER, donusumCiz, karmasikUstelCiz, sistemCiz, temelDizi, ustelCiz, type TemelDizi } from "../gorseller/hafta-3";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { Cizim, Denetim, Kaydirici, Kaydiricilar, Olcumler, Secim } from "./ortak";

const v = (x: number, b = 2) => x.toFixed(b).replace(".", ",").replace("-", "−");

// G-H3-01
export function TemelDiziler({ g }: { g: Gorsel }) {
  const [tur, setTur] = useState<TemelDizi>("durtu");
  const [n0, setN0] = useState(0);
  const r = temelDizi(tur, n0);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={r.ifade} />
      <Denetim>
        <Secim ad="Dizi" secenekler={[["durtu", "birim dürtü δ"], ["basamak", "birim basamak u"], ["rampa", "birim rampa uᵣ"]]} deger={tur} degis={setTur} />
        <Kaydiricilar>
          <Kaydirici ad="Kaydırma n₀" deger={n0} min={-5} max={5} degis={setN0} />
        </Kaydiricilar>
        <p>
          <code>{r.ifade}</code>: n₀ pozitifken dizi sağa kayar (gecikme), negatifken sola kayar (ilerleme). Dizinin "başladığı" yer n = n₀'dır.
        </p>
      </Denetim>
    </>
  );
}

// G-H3-02
export function Ustel({ g }: { g: Gorsel }) {
  const [a, setA] = useState(0.8);
  const durum = a === 1 ? "sabit" : Math.abs(a) < 1 ? "söner" : Math.abs(a) === 1 ? "genliği sabit kalır" : "büyür";
  return (
    <>
      <Cizim g={g} html={ustelCiz(a)} etiket={`a = ${a}: dizi ${durum}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="a" deger={a} min={-1.3} max={1.3} adim={0.05} yaz={(x) => v(x)} degis={setA} />
        </Kaydiricilar>
        <Olcumler>
          <span>|a| {Math.abs(a) < 1 ? "< 1: dizi söner" : Math.abs(a) > 1 ? "> 1: dizi büyür" : "= 1: genlik sabit"}</span>
          <span>{a < 0 ? "a < 0: işaret her örnekte değişir" : "a > 0: işaret değişmez"}</span>
        </Olcumler>
      </Denetim>
    </>
  );
}

// G-H3-03
export function KarmasikUstel({ g }: { g: Gorsel }) {
  const [sigma, setSigma] = useState(-0.1);
  const [k, setK] = useState(2);
  const w0 = (k * Math.PI) / 12;
  return (
    <>
      <Cizim g={g} html={karmasikUstelCiz(sigma, w0)} etiket={`σ = ${sigma}, ω₀ = ${k}π/12.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="σ (sönüm)" deger={sigma} min={-0.3} max={0.15} adim={0.05} yaz={(x) => v(x)} degis={setSigma} />
          <Kaydirici ad="ω₀" deger={k} min={0} max={12} yaz={(x) => `${x}π/12`} degis={setK} />
        </Kaydiricilar>
        <Olcumler>
          <span>|x(n)| = e^(σn): σ {sigma < 0 ? "< 0 sönüm" : sigma > 0 ? "> 0 büyüme" : "= 0 sabit genlik"}</span>
          <span>periyot N = 2π/ω₀ = {k === 0 ? "∞ (salınım yok)" : v(24 / k, 1)}</span>
        </Olcumler>
        <p>Gerçel kısım e^(σn)·cos(ω₀n), sanal kısım e^(σn)·sin(ω₀n)'dir. ω₀ = π en hızlı salınımdır: işaret her örnekte değişir.</p>
      </Denetim>
    </>
  );
}

// G-H3-05
export function Donusum({ g }: { g: Gorsel }) {
  const [k, setK] = useState(1);
  const [n0, setN0] = useState(2);
  const r = donusumCiz(k, n0);
  const not =
    k === 1 ? (n0 > 0 ? `x(n − ${n0}): dizi ${n0} örnek sağa kaydı (gecikme).` : n0 < 0 ? `x(n + ${-n0}): dizi ${-n0} örnek sola kaydı (ilerleme).` : "Değişiklik yok.")
    : k === -1 ? "Önce kaydırılır sonra n'nin işareti değiştirilir: x(−n − n₀) dizisinin ağırlık merkezi −n₀'a taşınır. y(n)'nin n konumundaki değeri x(−n − n₀)'dır."
    : `k = ${k}: y(n) = x(${k}n − n₀) yalnızca bazı örnekleri alır (seyreltme); bazı örnekler kaybolur.`;
  return (
    <>
      <Cizim g={g} html={r.s} etiket={r.ifade} />
      <Denetim>
        <Secim ad="k" secenekler={[[1, "k = 1"], [-1, "k = −1 (ters çevir)"], [2, "k = 2 (seyrelt)"], [-2, "k = −2"]]} deger={k} degis={setK} />
        <Kaydiricilar>
          <Kaydirici ad="n₀" deger={n0} min={-4} max={4} degis={setN0} />
        </Kaydiricilar>
        <p aria-live="polite">{not} Değeri bulmak için her n'de parantezin içini hesapla: y(n) = x(kn − n₀).</p>
      </Denetim>
    </>
  );
}

// G-H3-08
export function Sistem({ g }: { g: Gorsel }) {
  const [i, setI] = useState(1);
  const s = SISTEMLER[i]!;
  return (
    <>
      <Cizim g={g} html={sistemCiz(i)} etiket={`${s.ifade}: ${OZELLIK_ADLARI.map((a, k) => `${a} ${s.ozellik[k] ? "evet" : "hayır"}`).join(", ")}.`} />
      <Denetim>
        <Secim ad="Sistem" secenekler={SISTEMLER.map((x, k) => [k, x.ifade])} deger={i} degis={setI} />
        <p aria-live="polite">{s.neden}</p>
      </Denetim>
    </>
  );
}
