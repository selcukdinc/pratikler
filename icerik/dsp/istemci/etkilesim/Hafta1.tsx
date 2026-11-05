// Hafta 1 etkileşimli şekilleri. Her şey tarayıcıda hesaplanır.

import { useMemo, useState } from "react";
import {
  ADC_BITLER, ADC_FS, DALGA_ADLARI, HIST_N, KUTU_SAYILARI, adcCiz, kutulamaCiz, gaussCiz, histogramCiz, istatistikCiz, rndToplamCiz, type DalgaTuru,
} from "../gorseller/hafta-1";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { Cizim, Denetim, Kaydirici, Kaydiricilar, Olcumler, Secim } from "./ortak";

const v = (x: number, b = 2) => x.toFixed(b).replace(".", ",");

// G-H1-01
export function Adc({ g }: { g: Gorsel }) {
  const [bit, setBit] = useState(3);
  const [fs, setFs] = useState(20);
  const L = 2 ** bit;
  return (
    <>
      <Cizim g={g} html={adcCiz(bit, fs)} etiket={`${bit} bit, ${L} seviye, fs = ${fs} Hz.`} />
      <Denetim>
        <Secim ad="Bit sayısı" secenekler={ADC_BITLER.map((b) => [b, `${b} bit`])} deger={bit} degis={setBit} />
        <Secim ad="Örnekleme hızı" secenekler={ADC_FS.map((f) => [f, `fs = ${f} Hz`])} deger={fs} degis={setFs} />
        <Olcumler>
          <span>seviye = 2^{bit} = {L}</span>
          <span>adım ≈ 1 V / {L} = {v(1000 / L, 1)} mV</span>
          <span>Ts = 1/fs = {v(1000 / fs, 0)} ms</span>
        </Olcumler>
        <p>Bit sayısı genliği, örnekleme hızı zamanı nicemler. Bir bit eklemek seviye sayısını iki katına çıkarır; fs'yi iki katına çıkarmak örnekler arasındaki süreyi yarıya indirir.</p>
      </Denetim>
    </>
  );
}

// G-H1-03
export function Istatistik({ g }: { g: Gorsel }) {
  const [tur, setTur] = useState<DalgaTuru>("sinus");
  const [tepe, setTepe] = useState(1);
  const [dc, setDc] = useState(0);
  return (
    <>
      <Cizim g={g} html={istatistikCiz(tur, tepe, dc)} etiket={`${tur}, tepe ${tepe}, DC ${dc}.`} />
      <Denetim>
        <Secim ad="Dalga biçimi" secenekler={DALGA_ADLARI} deger={tur} degis={setTur} />
        <Kaydiricilar>
          <Kaydirici ad="Tepe genliği" deger={tepe} min={0} max={2} adim={0.1} yaz={(x) => v(x, 1)} degis={setTepe} />
          <Kaydirici ad="DC (ortalama)" deger={dc} min={-1} max={1} adim={0.1} yaz={(x) => v(x, 1)} degis={setDc} />
        </Kaydiricilar>
        <p>DC'yi değiştirince yalnızca μ ve rms değişir, σ aynı kalır: σ yalnızca AC kısmı ölçer. DC sıfırken rms ile σ neredeyse eşittir. Vpp/σ oranı dalga biçimine bağlıdır, genliğe bağlı değildir.</p>
      </Denetim>
    </>
  );
}

// G-H1-05
export function Histogram({ g }: { g: Gorsel }) {
  const [N, setN] = useState(1024);
  const [pmf, setPmf] = useState(false);
  const h = useMemo(() => histogramCiz(N, pmf), [N, pmf]);
  return (
    <>
      <Cizim g={g} html={h.s} etiket={`N = ${N}, ${pmf ? "pmf" : "histogram"}.`} />
      <Denetim>
        <Secim ad="Örnek sayısı" secenekler={HIST_N.map((n) => [n, `N = ${n}`])} deger={N} degis={setN} />
        <Secim ad="Gösterim" secenekler={[[0, "histogram Hᵢ"], [1, "pmf = Hᵢ / N"]]} deger={pmf ? 1 : 0} degis={(x) => setPmf(x === 1)} />
        <Olcumler>
          <span>Σ = {pmf ? "1" : N}</span>
          <span>histogramdan μ = {v(h.mu)}</span>
          <span>histogramdan σ = {v(h.sigma)}</span>
        </Olcumler>
        <p>Örnekler ortalaması 128, standart sapması 18 olan bir dağılımdan geliyor. N büyüdükçe histogramdan bulunan μ ve σ bu değerlere yaklaşır ve çubuklar eğriye oturur. pmf'e geçince biçim aynı kalır, yalnızca dikey eksen N'ye bölünür.</p>
      </Denetim>
    </>
  );
}

// G-H1-10
export function Kutulama({ g }: { g: Gorsel }) {
  const [M, setM] = useState(20);
  const [x, setX] = useState(3.14);
  const [yog, setYog] = useState(false);
  const h = useMemo(() => kutulamaCiz(M, x, yog), [M, x, yog]);
  const b = h.w < 0.1 ? 3 : 2;
  return (
    <>
      <Cizim g={g} html={h.s} etiket={`${M} kutu, kutu genişliği ${v(h.w, b)}; ${v(x)} değeri kutu ${h.k}'e düşer.`} />
      <Denetim>
        <Secim ad="Kutu sayısı" secenekler={KUTU_SAYILARI.map((m) => [m, `M = ${m}`])} deger={M} degis={setM} />
        <Secim ad="Gösterim" secenekler={[[0, "adet Hₖ"], [1, "yoğunluk Hₖ / (N·w)"]]} deger={yog ? 1 : 0} degis={(k) => setYog(k === 1)} />
        <Kaydiricilar>
          <Kaydirici ad="Örnek değer x" deger={x} min={0} max={10} adim={0.01} yaz={(t) => v(t)} degis={setX} />
        </Kaydiricilar>
        <Olcumler>
          <span>w = (10 − 0) / {M} = {v(h.w, b)}</span>
          <span>k = ⌊{v(x)} / {v(h.w, b)}⌋ = {h.k}</span>
          <span>kutu {h.k}: [{v(h.alt, b)}, {v(h.ust, b)})</span>
          <span>Hₖ = {h.Hk}</span>
          <span>boş kutu: {h.bos} / {M}</span>
        </Olcumler>
        <p>Az kutuda iki tepe tek bir yığına karışır; çok kutuda her kutuya birkaç örnek düşer, histogram pürüzlenir ve boş kutular çoğalır. Yoğunluk gösteriminde dikey eksen N·w'ye bölünür: kutu sayısı değişse de çubuklar aynı pdf eğrisinin çevresinde kalır.</p>
      </Denetim>
    </>
  );
}

// G-H1-07
export function Gauss({ g }: { g: Gorsel }) {
  const [mu, setMu] = useState(0);
  const [sigma, setSigma] = useState(1);
  const [k, setK] = useState(1);
  const r = gaussCiz(mu, sigma, k);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`μ = ${mu}, σ = ${sigma}, ±${k}σ alanı yüzde ${v(100 * r.alan, 1)}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="μ" deger={mu} min={-3} max={3} adim={0.5} yaz={(x) => v(x, 1)} degis={setMu} />
          <Kaydirici ad="σ" deger={sigma} min={0.5} max={2.5} adim={0.25} yaz={(x) => v(x, 2)} degis={setSigma} />
        </Kaydiricilar>
        <Secim ad="Boyalı aralık" secenekler={[[1, "μ ± 1σ"], [2, "μ ± 2σ"], [3, "μ ± 3σ"]]} deger={k} degis={setK} />
        <Olcumler>
          <span>boyalı alan = %{v(100 * r.alan, 1)}</span>
          <span>tepe = 1/(√(2π)σ) = {v(r.tepe, 3)}</span>
        </Olcumler>
        <p>σ büyüyünce eğri yayılır ve tepesi alçalır, çünkü toplam alan her zaman 1'dir. Boyalı alanın yüzdesi μ ve σ'dan bağımsızdır: yalnızca k'ye bağlıdır.</p>
      </Denetim>
    </>
  );
}

// G-H1-08
export function RndToplam({ g }: { g: Gorsel }) {
  const [k, setK] = useState(2);
  const r = useMemo(() => rndToplamCiz(k), [k]);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`${k} rastgele sayının toplamı.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Toplanan rastgele sayı (k)" deger={k} min={1} max={12} degis={setK} />
        </Kaydiricilar>
        <Olcumler>
          <span>ölçülen μ = {v(r.mu)} · kuram k/2 = {v(r.kuramMu)}</span>
          <span>ölçülen σ = {v(r.sigma)} · kuram √(k/12) = {v(r.kuramSigma)}</span>
        </Olcumler>
        <p>Her rastgele sayı 0 ile 1 arasında düzgün dağılır. Toplamın ortalaması k/2, varyansı k/12 olur. k arttıkça biçim çana döner: merkezi limit teoremi. k = 12'de σ tam 1 olduğu için 6 çıkarınca standart Gauss gürültü elde edilir.</p>
      </Denetim>
    </>
  );
}
