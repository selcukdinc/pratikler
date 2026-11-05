// Hafta 6 etkileşimli şekilleri. Her şey tarayıcıda hesaplanır.

import { useState } from "react";
import { kisa } from "../gorseller/grafik";
import {
  FAZ_SISTEMLERI, SISTEMLER_6, baglantiCiz, dikdortgenDtftCiz, fazCiz, konvTeoremCiz, modulasyonCiz, ozfonksiyonCiz, yanitCiz,
} from "../gorseller/hafta-6";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { Cizim, Denetim, Kaydirici, Kaydiricilar, Olcumler, Secim } from "./ortak";

const v = (x: number, b = 2) => kisa(x, b);
const PI = Math.PI;
const piYaz = (k: number, payda: number) => (k === 0 ? "0" : k === payda ? "π" : `${k}π/${payda}`);

// G-H6-01
export function Ozfonksiyon({ g }: { g: Gorsel }) {
  const [k, setK] = useState(3);
  const w0 = (k * PI) / 12;
  const r = ozfonksiyonCiz(w0);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`ω₀ = ${piYaz(k, 12)}: |H| = ${v(r.A)}, ∠H = ${v(r.faz)} rad.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Giriş frekansı ω₀" deger={k} min={0} max={12} yaz={(x) => piYaz(x, 12)} degis={setK} />
        </Kaydiricilar>
        <Olcumler>
          <span>|H(e^jω₀)| = {v(r.A, 3)} ({v(20 * Math.log10(Math.max(r.A, 1e-6)), 1)} dB)</span>
          <span>∠H(e^jω₀) = {v(r.faz, 3)} rad = −ω₀ (1 örnek gecikme)</span>
        </Olcumler>
        <p>
          Çıkış girişle aynı frekansta bir kosinüstür. 3 noktalı ortalama düşük frekansları geçirir; ω₀ = 2π/3'te büyüklük sıfırdır ve o frekanstaki kosinüs tamamen silinir.
        </p>
      </Denetim>
    </>
  );
}

// G-H6-02
export function FrekansYaniti({ g }: { g: Gorsel }) {
  const [i, setI] = useState(1);
  const r = yanitCiz(i);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`${r.ad}: |H(0)| = ${v(r.H0)}, |H(π)| = ${v(r.Hpi)}.`} />
      <Denetim>
        <Secim ad="Sistem" secenekler={SISTEMLER_6.map((s, k) => [k, s.ad])} deger={i} degis={setI} />
        <Olcumler>
          <span>|H(e^j0)| = {v(r.H0, 3)}</span>
          <span>|H(e^jπ)| = {v(r.Hpi, 3)}</span>
          <span>{r.H0 > r.Hpi ? "alçak frekansları geçiriyor" : "yüksek frekansları geçiriyor"}</span>
        </Olcumler>
        <p>dB ölçeğinde 0 dB büyüklük 1, −20 dB büyüklük 0,1, +6 dB yaklaşık 2 demektir. Logaritma küçük değerleri açtığı için durdurma bandının ayrıntısı dB grafiğinde daha iyi görünür.</p>
      </Denetim>
    </>
  );
}

// G-H6-05
export function DogrusalFaz({ g }: { g: Gorsel }) {
  const [i, setI] = useState(0);
  const r = fazCiz(i);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`${r.ad}: grup gecikmesi ${r.sabitMi ? `sabit, ${v(r.gd0)} örnek` : "frekansla değişiyor"}.`} />
      <Denetim>
        <Secim ad="Sistem" secenekler={FAZ_SISTEMLERI.map((s, k) => [k, s.ad])} deger={i} degis={setI} />
        <Olcumler>
          <span>grup gecikmesi: {r.sabitMi ? `sabit, ${v(r.gd0)} örnek (doğrusal faz)` : `ω = 0'da ${v(r.gd0)} örnek, frekansla değişiyor`}</span>
          <span>{r.magSabit ? "büyüklük her frekansta 1: tam geçiren" : "büyüklük frekansla değişiyor"}</span>
        </Olcumler>
        <p>
          Doğrusal fazlı bir filtre bütün frekansları aynı süre geciktirir; dalga biçimi bozulmaz. Tam geçiren filtre hiçbir frekansın genliğini değiştirmez, yalnızca fazı (gecikmeyi) frekansa göre değiştirir.
        </p>
      </Denetim>
    </>
  );
}

// G-H6-06
export function Baglanti({ g }: { g: Gorsel }) {
  const [k1, setK1] = useState(3);
  const [k2, setK2] = useState(7);
  return (
    <>
      <Cizim g={g} html={baglantiCiz((k1 * PI) / 10, (k2 * PI) / 10)} etiket={`ω₁ = ${k1}π/10, ω₂ = ${k2}π/10.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="ω₁" deger={k1} min={1} max={9} yaz={(x) => `${x}π/10`} degis={setK1} />
          <Kaydirici ad="ω₂" deger={k2} min={1} max={9} yaz={(x) => `${x}π/10`} degis={setK2} />
        </Kaydiricilar>
        <p aria-live="polite">
          Kaskat bağlantıda frekans yanıtları çarpılır: bir frekansın geçmesi için iki filtreden de geçmesi gerekir. Paralel bağlantıda yanıtlar toplanır: iki filtreden birinden geçen frekans çıkışa ulaşır.{" "}
          {k1 >= k2 ? "ω₁ ≥ ω₂ olunca bant kapanır; tasarımda ω₁ < ω₂ seçilir." : ""}
        </p>
      </Denetim>
    </>
  );
}

// G-H6-07
export function DikdortgenDtft({ g }: { g: Gorsel }) {
  const [N, setN] = useState(8);
  const r = dikdortgenDtftCiz(N);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`N = ${N}: tepe ${N}, ilk sıfır 2π/${N}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Uzunluk N" deger={N} min={1} max={16} degis={setN} />
        </Kaydiricilar>
        <Olcumler>
          <span>X(e^j0) = Σ x(n) = {N}</span>
          <span>ilk sıfır ω = 2π/N = {v(r.sifir, 3)} rad</span>
        </Olcumler>
      </Denetim>
    </>
  );
}

// G-H6-08
export function Modulasyon({ g }: { g: Gorsel }) {
  const [k, setK] = useState(4);
  return (
    <>
      <Cizim g={g} html={modulasyonCiz((k * PI) / 8)} etiket={`ω₀ = ${k}π/8.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="ω₀" deger={k} min={0} max={8} yaz={(x) => piYaz(x, 8)} degis={setK} />
        </Kaydiricilar>
        <p>cos(ω₀n) = [e^jω₀n + e^−jω₀n]/2: spektrumun iki kopyası ±ω₀'a taşınır ve her birinin yüksekliği yarıya iner. ω₀ = 0'da kosinüs 1'dir ve spektrum değişmez.</p>
      </Denetim>
    </>
  );
}

// G-H6-09
export function KonvTeorem({ g }: { g: Gorsel }) {
  const [i, setI] = useState(0);
  return (
    <>
      <Cizim g={g} html={konvTeoremCiz(i)} etiket={i === 0 ? "Alçak geçiren: yüksek frekanslı bileşen bastırılır." : "Fark filtresi: alçak frekanslı bileşen bastırılır."} />
      <Denetim>
        <Secim ad="Filtre" secenekler={[[0, "5 noktalı ortalama (alçak geçiren)"], [1, "yarım fark: [δ(n) − δ(n − 1)]/2"]]} deger={i} degis={setI} />
        <p>Giriş 0,15π ve 0,75π frekanslı iki kosinüsün toplamı. y = x * h olduğu için Y(e^jω) = X(e^jω)·H(e^jω): filtrenin sıfıra yakın olduğu frekanslardaki bileşen çıkışta kaybolur.</p>
      </Denetim>
    </>
  );
}
