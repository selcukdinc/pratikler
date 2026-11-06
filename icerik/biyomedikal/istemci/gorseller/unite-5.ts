// 5. ünite şekilleri: çarpıklık, basıklık, kutu grafiği ve IQR, eksik veri
// tamamlama, hareketli ortalama ve medyan filtre, frekans alanı filtreleri.
import type { Gorsel } from "../../../../src/gorseller/tip";
import { aralikOku, cizgi, dolgu, eksen, fonksiyon, gosterge, kutu, nokta, rastgele, satirlar, stem, yazi, egri } from "./ortak";

// ---- G-H5-01: Çarpıklık ----
function carpiklik(): string {
  let s = "";
  // Gamma benzeri yoğunluk: k = 3, ölçek 1 (mod 2, medyan ~2,67, ortalama 3)
  const g = (x: number) => (x <= 0 ? 0 : (x * x * Math.exp(-x)) / 2);
  const panel = (x: number, baslik: string, f: (v: number) => number, isaret: [number, string, string][]) => {
    const e = eksen({ x, y: 40, w: 190, h: 140, x0: 0, x1: 10, y0: 0, y1: 0.42 });
    let t = e.s;
    const xs: number[] = [];
    const ys: number[] = [];
    for (let i = 0; i <= 200; i++) {
      xs.push(i / 20);
      ys.push(f(i / 20));
    }
    t += dolgu(e, xs, ys, "g-dolgu-a") + egri(e, xs, ys, "g-seri-a");
    isaret.forEach(([v, ad, cls], k) => {
      t += cizgi([[e.X(v), e.Y(0)], [e.X(v), e.Y(0.4) + k * 14]], cls);
      t += yazi(e.X(v), e.Y(0) + 14 + k * 12, ad, "g-mini");
    });
    t += yazi(x + 95, 22, baslik, "g-kucuk g-kalin");
    return t;
  };
  const sol = (v: number) => g(10 - v);
  s += panel(20, "Negatif çarpık", sol, [[7, "ortalama", "g-kesik"], [7.33, "medyan", "g-cizgi g-renk-c-cizgi"], [8, "mod", "g-cizgi g-renk-b-cizgi"]]);
  const normal = (v: number) => 0.4 * Math.exp(-(((v - 5) / 1.4) ** 2) / 2);
  s += panel(245, "Normal (simetrik)", normal, [[5, "ortalama = medyan = mod", "g-cizgi g-renk-b-cizgi"]]);
  s += panel(470, "Pozitif çarpık", g, [[2, "mod", "g-cizgi g-renk-b-cizgi"], [2.67, "medyan", "g-cizgi g-renk-c-cizgi"], [3, "ortalama", "g-kesik"]]);
  s += satirlar(20, 236, ["Pozitif çarpıkta skorların çoğu ortalamanın solunda toplanır, uzun kuyruk sağdadır; negatif çarpıkta tersi."], "g-mini g-soluk", "start");
  return s;
}

// ---- G-H5-02: Basıklık (kurtosis) ----
function basiklik(): string {
  const e = eksen({ x: 40, y: 30, w: 440, h: 170, x0: -4, x1: 4, y0: 0, y1: 0.62, xTik: [-3, -2, -1, 0, 1, 2, 3] });
  let s = e.s;
  s += fonksiyon(e, (x) => 0.6 * Math.exp(-((x / 0.65) ** 2) / 2), "g-seri-b");
  s += fonksiyon(e, (x) => 0.4 * Math.exp(-(x ** 2) / 2), "g-seri-a");
  s += fonksiyon(e, (x) => 0.24 * Math.exp(-((x / 2.1) ** 4) / 2), "g-seri-c");
  s += satirlar(500, 50, ["Leptokurtik", "ortada çok örnek", "kurtosis > 0"], "g-mini g-renk-b", "start", 14);
  s += satirlar(500, 110, ["Mezokurtik (normal)", "kurtosis = 0"], "g-mini g-renk-a", "start", 14);
  s += satirlar(500, 160, ["Platikurtik", "ortada az örnek", "kurtosis < 0"], "g-mini g-renk-c", "start", 14);
  return s;
}

// ---- G-H5-03: Kutu grafiği ve IQR ----
function kutuGrafigi(): string {
  const veri = [2, 4, 5, 7, 8, 10, 12, 30];
  const X = (v: number) => 40 + (v + 8) * 15;
  let s = "";
  s += cizgi([[X(-8), 170], [X(32), 170]], "g-cizgi g-eksen");
  for (let v = -5; v <= 30; v += 5) s += cizgi([[X(v), 166], [X(v), 174]], "g-cizgi g-eksen") + yazi(X(v), 186, String(v), "g-mini g-soluk");
  // Sınırlar
  s += cizgi([[X(-5.25), 40], [X(-5.25), 160]], "g-kesik") + yazi(X(-5.25), 30, "alt sınır −5,25", "g-mini");
  s += cizgi([[X(20.75), 40], [X(20.75), 160]], "g-kesik") + yazi(X(20.75), 30, "üst sınır 20,75", "g-mini");
  // Kutu ve bıyıklar (bıyıklar sınırların içindeki en uç verilere kadar)
  s += kutu(X(4.5), 80, X(11) - X(4.5), 50, "g-dolu");
  s += cizgi([[X(7.5), 80], [X(7.5), 130]], "g-cizgi g-renk-b-cizgi");
  s += cizgi([[X(2), 105], [X(4.5), 105]]) + cizgi([[X(2), 92], [X(2), 118]]);
  s += cizgi([[X(11), 105], [X(12), 105]]) + cizgi([[X(12), 92], [X(12), 118]]);
  s += `<circle cx="${X(30)}" cy="105" r="6" class="g-hata"/>` + yazi(X(30), 80, "30: aykırı", "g-mini g-kalin g-renk-b");
  s += yazi(X(4.5), 142, "Q1 = 4,5", "g-mini");
  s += yazi(X(7.5), 66, "medyan 7,5", "g-mini g-renk-b");
  s += yazi(X(11), 142, "Q3 = 11", "g-mini");
  veri.forEach((v) => (s += nokta(X(v), 158, "g-renk-a")));
  s += satirlar(40, 210, ["Veri: 2, 4, 5, 7, 8, 10, 12, 30 · IQR = Q3 − Q1 = 6,5 · 1,5 × IQR = 9,75", "Alt sınır Q1 − 9,75 = −5,25 · Üst sınır Q3 + 9,75 = 20,75"], "g-mini", "start", 16);
  return s;
}

// ---- G-H5-04: Eksik veri tamamlama ----
function eksikVeri(): string {
  const t = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const y = [3, 4, 6, NaN, NaN, NaN, 10, 9, 8];
  const e = eksen({ x: 40, y: 30, w: 560, h: 180, x0: -0.5, x1: 8.5, y0: 0, y1: 12, xTik: t, yTik: [0, 4, 8, 12], izgara: true, xAd: "t", yAd: "değer" });
  let s = e.s;
  s += `<rect x="${e.X(2.5)}" y="30" width="${e.X(5.5) - e.X(2.5)}" height="180" class="g-bolge-b"/>`;
  s += yazi(e.X(4), 44, "eksik", "g-mini g-kalin");
  // İleriye doldurma: 6, 6, 6
  s += egri(e, [2, 3, 4, 5, 6], [6, 6, 6, 6, 10], "g-seri-b");
  // Doğrusal interpolasyon: 7, 8, 9
  s += egri(e, [2, 3, 4, 5, 6], [6, 7, 8, 9, 10], "g-seri-c");
  s += stem(e, [3, 4, 5], [6, 6, 6], "b", 4);
  s += stem(e, [3, 4, 5], [7, 8, 9], "c", 4);
  s += stem(e, t.filter((i) => !Number.isNaN(y[i]!)), y.filter((v) => !Number.isNaN(v)), "a", 4.5);
  s += gosterge(60, 245, [["g-seri-b", "ileriye doldurma (6, 6, 6)"], ["g-seri-c", "doğrusal interpolasyon (7, 8, 9)"]], 240);
  return s;
}

// ---- G-H5-05: Hareketli ortalama ve medyan filtre ----
function yumusatma(): string {
  const r = rastgele(21);
  const N = 60;
  const temiz = Array.from({ length: N }, (_, i) => 2 + 1.2 * Math.sin((2 * Math.PI * i) / 30));
  const x = temiz.map((v) => v + (r() - 0.5) * 0.5);
  for (const i of [12, 31, 44]) x[i]! += 3.2;
  const pencere = 5;
  const k = (pencere - 1) / 2;
  const ort: number[] = [];
  const med: number[] = [];
  for (let i = 0; i < N; i++) {
    const p = x.slice(Math.max(0, i - k), Math.min(N, i + k + 1));
    ort.push(p.reduce((a, b) => a + b, 0) / p.length);
    med.push([...p].sort((a, b) => a - b)[Math.floor(p.length / 2)]!);
  }
  const n = Array.from({ length: N }, (_, i) => i);
  const e = eksen({ x: 40, y: 30, w: 580, h: 190, x0: 0, x1: N - 1, y0: 0, y1: 6.5, xAd: "n" });
  let s = e.s;
  s += egri(e, n, x, "g-cizgi g-ince");
  s += egri(e, n, ort, "g-seri-b");
  s += egri(e, n, med, "g-seri-c");
  for (const i of [12, 31, 44]) s += `<circle cx="${e.X(i).toFixed(1)}" cy="${e.Y(x[i]!).toFixed(1)}" r="5" class="g-uyari"/>`;
  s += gosterge(50, 250, [["g-cizgi", "ham sinyal (3 ani sıçrama)"], ["g-seri-b", "5'lik hareketli ortalama"], ["g-seri-c", "5'lik medyan filtre"]], 195);
  return s;
}

// ---- G-H5-06: Frekans alanı filtreleri ----
function filtreler(): string {
  const fc = 0.5;
  const tur: [string, (f: number) => number][] = [
    ["Alçak geçiren", (f) => 1 / Math.sqrt(1 + (f / 0.35) ** 8)],
    ["Yüksek geçiren", (f) => 1 / Math.sqrt(1 + (0.35 / Math.max(f, 1e-6)) ** 8)],
    ["Bant geçiren", (f) => 1 / Math.sqrt(1 + ((f - fc) / 0.12) ** 8)],
    ["Bant söndüren (notch)", (f) => 1 - 1 / Math.sqrt(1 + ((f - fc) / 0.05) ** 8)],
  ];
  let s = "";
  tur.forEach(([ad, H], i) => {
    const x = 20 + (i % 2) * 330;
    const y = 30 + Math.floor(i / 2) * 150;
    const e = eksen({ x: x + 20, y, w: 260, h: 90, x0: 0, x1: 1, y0: 0, y1: 1.15, yTik: [1], xAd: "f", yAd: "|H|" });
    s += e.s + fonksiyon(e, H, "g-seri-a", 300);
    s += yazi(x + 150, y + 116, ad, "g-kucuk g-kalin");
  });
  s += satirlar(20, 322, ["fc: kesim frekansı. Bant geçiren örnek: EEG'den 8–12 Hz alfa. Bant söndüren örnek: 50 Hz şebeke gürültüsü."], "g-mini g-soluk", "start");
  return s;
}

export const UNITE_5_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H5-01",
    baslik: "Çarpıklık: negatif, simetrik ve pozitif",
    aciklama: "Normal dağılımda ortalama, medyan ve mod çakışır. Pozitif çarpık dağılımda skorlar solda toplanır, kuyruk sağa uzar; mod medyandan, medyan ortalamadan küçüktür. Negatif çarpıkta sıra tersine döner.",
    en: 680, boy: 250, icerik: carpiklik(),
  },
  {
    kod: "G-H5-02",
    baslik: "Basıklık: leptokurtik, mezokurtik, platikurtik",
    aciklama: "Ortasında çok örnek yığılan dar dağılım leptokurtiktir ve kurtosis değeri pozitiftir. Normal dağılım mezokurtiktir, kurtosis sıfırdır. Ortasında az örnek olan düz dağılım platikurtiktir, kurtosis negatiftir.",
    en: 640, boy: 230, icerik: basiklik(),
  },
  {
    kod: "G-H5-03",
    baslik: "Kutu grafiği ve IQR ile aykırı değer",
    aciklama: "2, 4, 5, 7, 8, 10, 12, 30 verisinde Q1 = 4,5, Q3 = 11, IQR = 6,5. Alt sınır −5,25, üst sınır 20,75'tir; 30 üst sınırın dışında kaldığı için aykırı değerdir.",
    en: 660, boy: 245, icerik: kutuGrafigi(),
  },
  {
    kod: "G-H5-04",
    baslik: "Eksik veri: ileriye doldurma ve doğrusal interpolasyon",
    aciklama: "t = 3, 4, 5'teki değerler eksik. İleriye doldurma her birine son geçerli değeri (6) yazar. Doğrusal interpolasyon 6 ile 10 arasına doğru çeker ve 7, 8, 9 değerlerini verir.",
    en: 640, boy: 265, icerik: eksikVeri(),
  },
  {
    kod: "G-H5-05",
    baslik: "Ani sıçramalarda hareketli ortalama ve medyan filtre",
    aciklama: "Üç ani sıçrama içeren gürültülü bir sinyal. Beş örneklik hareketli ortalama sıçramaları komşularına yayar ve tümsekler bırakır. Beş örneklik medyan filtre sıçramaları neredeyse tamamen siler ve dalga biçimini korur.",
    en: 660, boy: 270, icerik: yumusatma(),
  },
  {
    kod: "G-H5-06",
    baslik: "Frekans alanı filtrelerinin genlik yanıtları",
    aciklama: "Alçak geçiren filtre kesim frekansının altını, yüksek geçiren üstünü geçirir. Bant geçiren yalnızca bir aralığı geçirir, bant söndüren (notch) yalnızca dar bir aralığı söndürür.",
    en: 680, boy: 335, icerik: filtreler(),
  },
];
