// 6. ünite şekilleri: gri seviyeye dönüştürme, 3×3 ortalama ve medyan filtre,
// histogram eşitleme, eşikleme, geometrik dönüşümler.
import type { Gorsel } from "../../../../src/gorseller/tip";
import { cizgi, izgara, kutu, ok, piksel, rastgele, satirlar, sayiIzgarasi, yazi, yol } from "./ortak";

// ---- G-H6-01: Gri seviyeye dönüştürme ----
function griDonusum(): string {
  const [R, G, B] = [100, 200, 50];
  let s = "";
  s += `<rect x="20" y="40" width="90" height="90" rx="4" class="g-bag" style="fill:rgb(${R},${G},${B})"/>`;
  s += satirlar(65, 150, [`R = ${R}`, `G = ${G}`, `B = ${B}`], "g-mini", "middle", 15);
  const yontem: [string, string, number][] = [
    ["Ağırlıklı (luminosity)", "0,299R + 0,587G + 0,114B", 0.299 * R + 0.587 * G + 0.114 * B],
    ["Düz ortalama", "(R + G + B) / 3", (R + G + B) / 3],
    ["Açıklık (lightness)", "(max + min) / 2", (Math.max(R, G, B) + Math.min(R, G, B)) / 2],
  ];
  yontem.forEach(([ad, formul, v], i) => {
    const y = 20 + i * 70;
    s += ok([[120, 85], [200, y + 30]], "g-cizgi g-ince");
    s += kutu(205, y + 5, 270, 50, "g-kutu") + satirlar(340, y + 21, [ad, formul], "g-mini", "middle", 16);
    s += ok([[475, y + 30], [505, y + 30]]);
    s += piksel(510, y + 8, 44, v);
    s += yazi(565, y + 30, `≈ ${Math.round(v)}`, "g-kucuk g-kalin", "start");
  });
  s += yazi(20, 235, "Göz yeşile en duyarlı, maviye en az duyarlı olduğu için G'nin ağırlığı en büyüktür.", "g-mini g-soluk", "start");
  return s;
}

// ---- G-H6-02: 3×3 ortalama ve medyan filtre ----
function komsuluk(): string {
  const m = [
    [10, 10, 10],
    [10, 255, 10],
    [10, 10, 10],
  ];
  let s = "";
  s += sayiIzgarasi(30, 50, 46, m, [1, 1]);
  s += yazi(99, 30, "3×3 komşuluk (tuz gürültüsü)", "g-mini g-kalin");
  s += ok([[180, 95], [250, 60]]) + ok([[180, 125], [250, 165]]);
  s += kutu(255, 35, 260, 50, "g-kutu") + satirlar(385, 51, ["Ortalama: (8 × 10 + 255) / 9", "≈ 37 (gürültü komşulara yayılır)"], "g-mini", "middle", 16);
  s += kutu(255, 140, 260, 50, "g-dolu") + satirlar(385, 156, ["Medyan: sırala → 10 10 10 10 10 10 10 10 255", "5. değer = 10 (gürültü silinir)"], "g-mini", "middle", 16);
  s += piksel(540, 38, 44, 37, true) + piksel(540, 143, 44, 10, true);
  return s;
}

// ---- G-H6-03: Histogram eşitleme ----
function histogramEsitleme(): string {
  const r = rastgele(4);
  // Karanlık görüntü: değerler 10..70 civarında yığılmış
  const karanlik = Array.from({ length: 64 }, () => 10 + 60 * ((r() + r() + r()) / 3));
  const sirali = [...karanlik].sort((a, b) => a - b);
  // Eşitleme: her pikselin sırası (birikimli dağılım) 0..255'e yayılır
  const esit = karanlik.map((v) => (255 * sirali.indexOf(v)) / (karanlik.length - 1));
  const kare = (dizi: number[]) => Array.from({ length: 8 }, (_, i) => dizi.slice(i * 8, i * 8 + 8));
  const histo = (x: number, y: number, dizi: number[], cls: string) => {
    const kova = new Array(16).fill(0) as number[];
    dizi.forEach((v) => kova[Math.min(15, Math.floor(v / 16))]!++);
    const enCok = Math.max(...kova);
    let t = cizgi([[x, y + 100], [x + 256, y + 100]], "g-cizgi g-eksen");
    kova.forEach((k, i) => {
      const h = (k / enCok) * 90;
      t += `<rect x="${x + i * 16 + 1}" y="${(y + 100 - h).toFixed(1)}" width="14" height="${h.toFixed(1)}" class="${cls}"/>`;
    });
    t += yazi(x, y + 114, "0", "g-mini g-soluk") + yazi(x + 256, y + 114, "255", "g-mini g-soluk");
    return t;
  };
  let s = "";
  s += yazi(20, 20, "Önce: karanlık, düşük kontrast", "g-kucuk g-kalin", "start");
  s += izgara(20, 35, 14, kare(karanlik));
  s += histo(160, 25, karanlik, "g-cubuk-b");
  s += ok([[300, 160], [300, 190]]);
  s += yazi(310, 175, "histogram eşitleme (doğrusal olmayan)", "g-mini g-kalin", "start");
  s += yazi(20, 205, "Sonra: tonlar bütün aralığa yayıldı", "g-kucuk g-kalin", "start");
  s += izgara(20, 220, 14, kare(esit));
  s += histo(160, 210, esit, "g-cubuk-a");
  s += satirlar(440, 240, ["Yatay eksen: ton (0 siyah, 255 beyaz)", "Dikey eksen: o tondaki piksel sayısı"], "g-mini g-soluk", "start", 15);
  return s;
}

// ---- G-H6-04: Eşikleme ----
function esikleme(): string {
  const T = 128;
  const m = Array.from({ length: 8 }, (_, i) =>
    Array.from({ length: 8 }, (_, j) => {
      const d = Math.hypot(i - 3.5, j - 3.5);
      return Math.round(Math.max(20, Math.min(235, 235 - d * 48 + ((i * 7 + j * 3) % 5) * 6)));
    }),
  );
  let s = "";
  s += yazi(108, 22, "Gri görüntü", "g-kucuk g-kalin");
  s += izgara(20, 35, 22, m);
  s += ok([[205, 123], [265, 123]]);
  s += satirlar(235, 92, [`T = ${T}`], "g-mini g-kalin");
  s += satirlar(235, 150, ["≥ T → 255", "< T → 0"], "g-mini", "middle", 14);
  s += yazi(363, 22, "İkili (binary) görüntü", "g-kucuk g-kalin");
  s += izgara(275, 35, 22, m.map((r) => r.map((v) => (v >= T ? 255 : 0))));
  s += satirlar(470, 60, ["Global: tek eşik", "Uyarlamalı: eşik yerel", "çevreye göre değişir", "Otsu: eşik histogramdan", "otomatik bulunur"], "g-mini", "start", 17);
  return s;
}

// ---- G-H6-05: Geometrik dönüşümler ----
function geometrik(): string {
  // L biçimi, (0,0) sol alt köşe, birim 20 px
  const L: [number, number][] = [[0, 0], [3, 0], [3, 1], [1, 1], [1, 3], [0, 3]];
  const ciz = (ox: number, oy: number, f: (p: [number, number]) => [number, number], cls: string) =>
    yol("M" + L.map((p) => f(p)).map(([x, y]) => `${ox + x * 20},${oy - y * 20}`).join(" L") + " Z", cls);
  let s = "";
  const panel = (x: number, baslik: string, alt: string) => {
    s += kutu(x, 30, 150, 150, "g-cerceve") + yazi(x + 75, 18, baslik, "g-kucuk g-kalin") + yazi(x + 75, 196, alt, "g-mini g-soluk");
  };
  panel(10, "Özgün", "");
  s += ciz(50, 140, (p) => p, "g-dolu");
  panel(175, "Öteleme", "biçim ve yön aynı");
  s += ciz(205, 160, (p) => p, "g-cerceve") + ciz(205, 160, ([x, y]) => [x + 2, y + 2], "g-dolu");
  panel(340, "Dönme (+90°)", "saat yönünün tersi +");
  s += ciz(415, 130, ([x, y]) => [-y, x], "g-dolu") + `<circle cx="415" cy="130" r="3" class="g-uc"/>`;
  panel(505, "Yansıma", "y eksenine göre");
  s += cizgi([[580, 35], [580, 175]], "g-kesik");
  s += ciz(580, 140, (p) => p, "g-cerceve") + ciz(580, 140, ([x, y]) => [-x, y], "g-dolu");
  return s;
}

export const UNITE_6_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H6-01",
    baslik: "Gri seviyeye dönüştürmenin üç yolu",
    aciklama: "R = 100, G = 200, B = 50 olan yeşilimsi bir piksel. Ağırlıklı ortalama yaklaşık 153, düz ortalama yaklaşık 117, açıklık yöntemi 125 gri değeri verir.",
    en: 640, boy: 245, icerik: griDonusum(),
  },
  {
    kod: "G-H6-02",
    baslik: "3×3 ortalama ve medyan filtre",
    aciklama: "Ortasında 255 değerli bir tuz gürültüsü olan, gerisi 10 olan 3×3 komşuluk. Ortalama filtre merkez için yaklaşık 37 verir ve gürültüyü yayar; medyan filtre 10 verir ve gürültüyü siler.",
    en: 600, boy: 210, icerik: komsuluk(),
  },
  {
    kod: "G-H6-03",
    baslik: "Histogram eşitleme",
    aciklama: "Tonları 10–70 arasına yığılmış karanlık bir görüntü ve histogramı. Eşitlemeden sonra tonlar 0–255 aralığına yayılır, histogram düzleşir ve kontrast artar.",
    en: 680, boy: 345, icerik: histogramEsitleme(),
  },
  {
    kod: "G-H6-04",
    baslik: "Eşikleme ile ikili görüntü",
    aciklama: "Ortası parlak, kenarları koyu 8×8 gri bir görüntü T = 128 eşiğiyle ikili görüntüye çevrilir: eşikten büyük ya da eşit pikseller beyaz, küçükler siyah olur.",
    en: 650, boy: 220, icerik: esikleme(),
  },
  {
    kod: "G-H6-05",
    baslik: "Geometrik dönüşümler: öteleme, dönme, yansıma",
    aciklama: "L biçimli bir şekil ötelemede biçimi ve yönü değişmeden kayar, +90° dönmede saat yönünün tersine döner, yansımada simetri eksenine göre ters çevrilir. Üçünde de boyut değişmez.",
    en: 670, boy: 205, icerik: geometrik(),
  },
];
