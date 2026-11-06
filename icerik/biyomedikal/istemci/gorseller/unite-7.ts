// 7. ünite şekilleri: zaman ve frekans ortamı (FFT örneği), Fourier serisiyle
// kare dalga yaklaşımı, genlik ve faz, görüntülerin 2B spektrumu.
import type { Gorsel } from "../../../../src/gorseller/tip";
import { cizgi, eksen, fonksiyon, gosterge, izgara, ok, satirlar, stem, yazi, yol } from "./ortak";

// ---- G-H7-01: Zaman ortamından frekans ortamına ----
function zamanFrekans(): string {
  const S = (t: number) => 0.7 * Math.sin(2 * Math.PI * 50 * t) + Math.sin(2 * Math.PI * 120 * t);
  const e1 = eksen({ x: 50, y: 30, w: 580, h: 120, x0: 0, x1: 0.05, y0: -1.8, y1: 1.8, xTik: [0, 0.01, 0.02, 0.03, 0.04, 0.05], xEtiket: (v) => `${Math.round(v * 1000)}`, xAd: "t (ms)", yAd: "S(t)", sifirdan: true });
  let s = e1.s + fonksiyon(e1, S, "g-seri-a g-ince", 800);
  s += yazi(640, 30, "zaman ortamı", "g-mini g-kalin", "end");
  s += ok([[340, 178], [340, 205]]) + yazi(350, 192, "FFT", "g-kucuk g-kalin", "start");
  const e2 = eksen({ x: 50, y: 225, w: 580, h: 110, x0: 0, x1: 200, y0: 0, y1: 1.15, xTik: [0, 50, 100, 120, 150, 200], yTik: [0.7, 1], izgara: true, xAd: "f (Hz)", yAd: "|P1(f)|" });
  s += e2.s + stem(e2, [50, 120], [0.7, 1], "b", 5);
  s += yazi(e2.X(50), e2.Y(0.7) - 14, "0,7", "g-mini g-kalin") + yazi(e2.X(120), e2.Y(1) - 14, "1", "g-mini g-kalin");
  s += yazi(640, 225, "frekans ortamı (spektrum)", "g-mini g-kalin", "end");
  return s;
}

// ---- G-H7-02: Fourier serisiyle kare dalga ----
function kareDalga(): string {
  const kare = (t: number) => (Math.sin(2 * Math.PI * t) >= 0 ? 1 : -1);
  const kismi = (N: number) => (t: number) => {
    let v = 0;
    for (let k = 1; k <= N; k += 2) v += (4 / Math.PI) * Math.sin(2 * Math.PI * k * t) / k;
    return v;
  };
  const e = eksen({ x: 40, y: 30, w: 580, h: 180, x0: 0, x1: 2, y0: -1.5, y1: 1.5, xTik: [0, 0.5, 1, 1.5, 2], xAd: "t", sifirdan: true });
  let s = e.s;
  s += fonksiyon(e, kare, "g-cizgi g-ince", 800);
  s += fonksiyon(e, kismi(1), "g-seri-c g-ince", 600);
  s += fonksiyon(e, kismi(3), "g-seri-d g-ince", 600);
  s += fonksiyon(e, kismi(15), "g-seri-b g-ince", 900);
  s += gosterge(50, 240, [["g-cizgi", "kare dalga"], ["g-seri-c", "1 terim"], ["g-seri-d", "2 terim (1., 3. harmonik)"], ["g-seri-b", "8 terim"]], 150);
  s += yazi(40, 266, "Terim sayısı arttıkça seri fonksiyona yaklaşır; tam gösterim için sonsuz terim gerekir.", "g-mini g-soluk", "start");
  return s;
}

// ---- G-H7-03: Genlik ve faz ----
function genlikFaz(): string {
  const e = eksen({ x: 40, y: 30, w: 260, h: 230, x0: -0.5, x1: 5, y0: -0.5, y1: 5, xTik: [1, 2, 3, 4], yTik: [1, 2, 3, 4], xAd: "a (gerçel)", yAd: "b (sanal)", sifirdan: true, izgara: true });
  let s = e.s;
  s += ok([[e.X(0), e.Y(0)], [e.X(3), e.Y(4)]], "g-seri-b", "g-renk-b");
  s += cizgi([[e.X(3), e.Y(0)], [e.X(3), e.Y(4)]], "g-kesik");
  s += yol(`M${e.X(1.1)},${e.Y(0)} A${e.X(1.1) - e.X(0)},${e.X(1.1) - e.X(0)} 0 0 0 ${e.X(0.66)},${e.Y(0.88)}`, "g-cizgi g-renk-a-cizgi");
  s += yazi(e.X(1.25), e.Y(0.45), "φ", "g-kalin g-renk-a", "start");
  s += yazi(e.X(1.2), e.Y(2.4), "|F| = 5", "g-kucuk g-kalin g-renk-b", "end");
  s += yazi(e.X(3) + 6, e.Y(4), "F = 3 + 4i", "g-kucuk g-kalin", "start");
  s += satirlar(340, 60, [
    "F(ω) = a(ω) + i b(ω)",
    "",
    "Genlik: |F| = √(a² + b²) = √(9 + 16) = 5",
    "ω frekansındaki bileşenin büyüklüğü",
    "",
    "Faz: φ = arctan(b / a) = arctan(4/3) ≈ 53°",
    "bileşenin zaman eksenine göre kayması",
    "",
    "Güç spektrumu: |F|² = 25",
  ], "g-mini", "start", 18);
  return s;
}

// ---- G-H7-04: Görüntülerin 2B spektrumu ----
function spektrum2B(): string {
  const N = 9;
  const b = 13;
  const goruntu = [
    { ad: "Yumuşak, geniş şekil", f: (i: number, j: number) => 255 * Math.exp(-(((i - 4) ** 2 + (j - 4) ** 2) / 10)), tepe: [[0, 0, 255], [1, 0, 120], [-1, 0, 120], [0, 1, 120], [0, -1, 120]] },
    { ad: "Dikey çizgiler", f: (_i: number, j: number) => (j % 3 === 0 ? 240 : 30), tepe: [[0, 0, 200], [3, 0, 255], [-3, 0, 255]] },
    { ad: "Yatay çizgiler", f: (i: number) => (i % 3 === 0 ? 240 : 30), tepe: [[0, 0, 200], [0, 3, 255], [0, -3, 255]] },
    { ad: "Dama tahtası", f: (i: number, j: number) => ((i + j) % 2 ? 240 : 30), tepe: [[0, 0, 200], [4, 4, 255], [-4, -4, 255], [4, -4, 255], [-4, 4, 255]] },
  ];
  let s = "";
  goruntu.forEach((g, k) => {
    const x = 20 + k * 160;
    s += yazi(x + (N * b) / 2, 18, g.ad, "g-mini g-kalin");
    s += izgara(x, 28, b, Array.from({ length: N }, (_, i) => Array.from({ length: N }, (_, j) => g.f(i, j))));
    s += ok([[x + (N * b) / 2, 150], [x + (N * b) / 2, 172]]);
    const sp = Array.from({ length: N }, () => new Array(N).fill(15) as number[]);
    for (const [u, v, d] of g.tepe) sp[4 - v!]![4 + u!] = d!;
    s += izgara(x, 180, b, sp);
    s += cizgi([[x, 180 + 4.5 * b], [x + N * b, 180 + 4.5 * b]], "g-kesik") + cizgi([[x + 4.5 * b, 180], [x + 4.5 * b, 180 + N * b]], "g-kesik");
  });
  s += yazi(20, 322, "Üstte görüntü, altta genlik spektrumu (merkez: sıfır frekans). Keskin ve sık desenler merkezden uzağa düşer.", "g-mini g-soluk", "start");
  return s;
}

export const UNITE_7_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H7-01",
    baslik: "Zaman ortamından frekans ortamına: FFT",
    aciklama: "50 Hz'lik 0,7 genlikli ve 120 Hz'lik 1 genlikli iki sinüsün toplamı zamanda karmaşık görünür. Tek taraflı genlik spektrumunda 50 Hz'de 0,7, 120 Hz'de 1 yüksekliğinde iki tepe olarak ayrışır.",
    en: 680, boy: 360, icerik: zamanFrekans(),
  },
  {
    kod: "G-H7-02",
    baslik: "Fourier serisiyle kare dalga yaklaşımı",
    aciklama: "Kare dalga, tek harmoniklerin (1., 3., 5., ...) sinüslerinin toplamıyla gösterilir. Bir terim yalnızca temel sinüstür; terim sayısı arttıkça toplam kare dalgaya yaklaşır.",
    en: 660, boy: 280, icerik: kareDalga(),
  },
  {
    kod: "G-H7-03",
    baslik: "Genlik ve faz: karmaşık düzlemde F = 3 + 4i",
    aciklama: "Bir frekanstaki Fourier katsayısı karmaşık düzlemde bir vektördür. Uzunluğu genliktir: √(3² + 4²) = 5. Gerçel eksenle yaptığı açı fazdır: arctan(4/3) ≈ 53°. Genliğin karesi güç spektrumunu verir.",
    en: 680, boy: 290, icerik: genlikFaz(),
  },
  {
    kod: "G-H7-04",
    baslik: "Görüntülerin 2B Fourier spektrumu",
    aciklama: "Yumuşak geniş bir şeklin enerjisi spektrumun merkezinde, düşük frekanslardadır. Dikey çizgilerde değişim x yönündedir, tepeler yatay eksende çıkar; yatay çizgilerde dikey eksende. Dama tahtası köşegen yönlerde, merkezden uzak yüksek frekanslı tepeler verir.",
    en: 660, boy: 330, icerik: spektrum2B(),
  },
];
