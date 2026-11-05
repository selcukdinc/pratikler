// Hafta 4 etkileşimli şekilleri. Her şey tarayıcıda hesaplanır.

import { useState } from "react";
import {
  GRAFIK_ORNEKLERI, KK_H, KK_X, SUP_H, SUP_X, dogrudanCiz, grafikCiz, hareketliOrtalamaCiz, kaydirmaCiz, korelasyonCiz, superpozisyon, tabloCiz, zarCiz, type ZarTuru,
} from "../gorseller/hafta-4";
import { kisa } from "../gorseller/grafik";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { Cizim, Denetim, Kaydirici, Kaydiricilar, Olcumler, Secim } from "./ortak";

const v = (x: number, b = 2) => kisa(x, b);
const dizi = (d: number[]) => d.map((x) => kisa(x)).join(", ");

// G-H4-01
export function Superpozisyon({ g }: { g: Gorsel }) {
  const [adet, setAdet] = useState(1);
  const r = superpozisyon(adet);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`İlk ${adet} katkı toplandı: ${dizi(r.y.slice(1, 6))}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Toplanan katkı sayısı" deger={adet} min={1} max={3} degis={setAdet} />
        </Kaydiricilar>
        <p aria-live="polite">
          Giriş x = {dizi(SUP_X)} ve dürtü yanıtı h = {dizi(SUP_H)} (ikisi de n = 0'dan başlıyor). k. giriş örneği x(k)·h(n − k) katkısını üretir.{" "}
          {adet === 3 ? `Üç katkı toplanınca y(n) = ${dizi(r.y.slice(1, 6))} (n = 0..4) çıkar; bu, x * h'nin kendisidir.` : "Kaydırıcıyı artırıp katkıları sırayla ekle."}
        </p>
      </Denetim>
    </>
  );
}

// G-H4-03
export function Dogrudan({ g }: { g: Gorsel }) {
  const [a, setA] = useState(0.8);
  const r = dogrudanCiz(a);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`a = ${v(a)}; y(n) 1/(1 − a) = ${v(r.limit)} değerine yaklaşır.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="a" deger={a} min={0.1} max={0.95} adim={0.05} yaz={(x) => v(x)} degis={setA} />
        </Kaydiricilar>
        <Olcumler>
          <span>y(0) = 1</span>
          <span>y(1) = 1 + a = {v(1 + a)}</span>
          <span>n → ∞: y → 1/(1 − a) = {v(r.limit)}</span>
        </Olcumler>
        <p>y(n) = Σₖ₌₀ⁿ aᵏ: geometrik serinin ilk n + 1 terimi. a 1'e yaklaştıkça son değer büyür ve ona daha geç ulaşılır.</p>
      </Denetim>
    </>
  );
}

// G-H4-04
export function GrafikYontem({ g }: { g: Gorsel }) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(1);
  const r = grafikCiz(i, n);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`n = ${n}: y(${n}) = ${kisa(r.toplam)}.`} />
      <Denetim>
        <Secim ad="Örnek" secenekler={GRAFIK_ORNEKLERI.map((o, k) => [k, o.ad])} deger={i} degis={setI} />
        <Kaydiricilar>
          <Kaydirici ad="Kaydırma n" deger={n} min={-4} max={8} degis={setN} />
        </Kaydiricilar>
        <Olcumler>
          <span>
            y({n}) = {r.carpimlar.length ? `${r.carpimlar.join(" + ")} = ${kisa(r.toplam)}` : "0 (örtüşme yok)"}
          </span>
          <span>
            y(n) sıfırdan farklı olabilir: n = {r.yBas}..{r.ySon} (uzunluk {r.uzunluk})
          </span>
        </Olcumler>
        <p>h(k)'yi ters çevir (h(−k)), n kadar kaydır (h(n − k)); n &gt; 0 sağa, n &lt; 0 sola. x(k) ile örnek bazında çarp ve topla. Diziler örtüşmüyorsa y(n) = 0'dır.</p>
      </Denetim>
    </>
  );
}

// G-H4-05
export function Kaydirma({ g }: { g: Gorsel }) {
  const [n, setN] = useState(1);
  const r = kaydirmaCiz(n);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`y(${n}) = ${r.toplam}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="n" deger={n} min={0} max={KK_X.length + KK_H.length - 2} degis={setN} />
        </Kaydiricilar>
        <p aria-live="polite">
          Alt şeritte h ters sırada yazılır ({[...KK_H].reverse().join(", ")}). n = 0'da yalnızca x(0) ile h(0) üst üste gelir; her adımda alt şerit bir sağa kayar. Son değer n = {KK_X.length + KK_H.length - 2}'te, uzunluk {KK_X.length} + {KK_H.length} − 1 = {KK_X.length + KK_H.length - 1}.
        </p>
      </Denetim>
    </>
  );
}

// G-H4-06
export function Tablo({ g }: { g: Gorsel }) {
  const [n, setN] = useState(2);
  const r = tabloCiz(n);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`y(${n}) = ${r.terimler.join(" + ")} = ${r.toplam}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="n (köşegen)" deger={n} min={0} max={4} degis={setN} />
        </Kaydiricilar>
        <p>Hücre (i, j), x(i)·h(j) çarpımıdır ve y(i + j)'ye eklenir. Polinomlarda da zⁱ·zʲ = zⁱ⁺ʲ olduğu için aynı terimler aynı kuvvette toplanır.</p>
      </Denetim>
    </>
  );
}

// G-H4-07
export function Zar({ g }: { g: Gorsel }) {
  const [tur, setTur] = useState<ZarTuru>("adil");
  const [adet, setAdet] = useState(2);
  const r = zarCiz(tur, adet);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`${adet} zar: en olası toplam ${r.enOlasi}, olasılığı ${v(r.enOlasiP, 3)}.`} />
      <Denetim>
        <Secim ad="Zar" secenekler={[["adil", "adil zar"], ["hileli", "hileli zar (6 gelme olasılığı 0,5)"]]} deger={tur} degis={setTur} />
        <Kaydiricilar>
          <Kaydirici ad="Zar sayısı" deger={adet} min={1} max={5} degis={setAdet} />
        </Kaydiricilar>
        <Olcumler>
          <span>en olası toplam: {r.enOlasi} (P = {v(r.enOlasiP, 3)})</span>
          <span>ortalama: {v(r.ortalama)}</span>
          <span>olası toplamlar: {adet}..{6 * adet}</span>
        </Olcumler>
        <p>Her yeni zar, dağılımı bir kez daha zarın pmf'siyle konvolüsyona sokar. Hileli zarla bile birkaç zarın toplamı çan biçimine yaklaşır (1. haftadaki merkezi limit gözlemi).</p>
      </Denetim>
    </>
  );
}

// G-H4-08
export function HareketliOrtalama({ g }: { g: Gorsel }) {
  const [M, setM] = useState(5);
  const r = hareketliOrtalamaCiz(M);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`M = ${M}; gecikme ${v(r.gecikme, 1)} örnek.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="Pencere uzunluğu M" deger={M} min={1} max={25} degis={setM} />
        </Kaydiricilar>
        <Olcumler>
          <span>h(n) = 1/M = {v(1 / M, 3)}, n = 0..{M - 1}</span>
          <span>gecikme (M − 1)/2 = {v(r.gecikme, 1)} örnek</span>
          <span>gürültüsüz sinyalden rms sapma: {v(r.rmsHata, 3)}</span>
        </Olcumler>
        <p>Katsayıların toplamı 1 olduğu için sabit bir sinyal değişmeden geçer. M çok büyürse gürültüyle birlikte sinyalin hızlı kısmı da silinir ve sapma yeniden artar.</p>
      </Denetim>
    </>
  );
}

// G-H4-09
export function Korelasyon({ g }: { g: Gorsel }) {
  const [a, setA] = useState(0.7);
  const r = korelasyonCiz(a);
  return (
    <>
      <Cizim g={g} html={r.s} etiket={`a = ${v(a)}; rₓₓ(0) = ${v(r.r0)}.`} />
      <Denetim>
        <Kaydiricilar>
          <Kaydirici ad="a" deger={a} min={0.1} max={0.9} adim={0.05} yaz={(x) => v(x)} degis={setA} />
        </Kaydiricilar>
        <Olcumler>
          <span>rₓₓ(0) = 1/(1 − a²) = {v(r.r0)} (enerji)</span>
          <span>rₓₓ(n) = a^|n| / (1 − a²)</span>
        </Olcumler>
      </Denetim>
    </>
  );
}
