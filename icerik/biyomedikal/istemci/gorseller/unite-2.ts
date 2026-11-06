// 2. ünite şekilleri: EEG frekans bantları, gözlerin açılmasıyla alfa-beta
// değişimi, bir gecelik uyku döngüleri (hipnogram).
import type { Gorsel } from "../../../../src/gorseller/tip";
import { cizgi, eksen, fonksiyon, kutu, rastgele, satirlar, yazi } from "./ortak";

// Tohumlu fazlarla düzensiz görünen ritmik dalga: f0 çevresinde üç bileşen
function ritim(f0: number, tohum: number) {
  const r = rastgele(tohum);
  const bilesen = [0.85, 1, 1.18].map((k) => ({ f: f0 * k, a: 0.6 + 0.4 * r(), p: 2 * Math.PI * r() }));
  const top = bilesen.reduce((t, b) => t + b.a, 0);
  return (t: number) => bilesen.reduce((s, b) => s + b.a * Math.sin(2 * Math.PI * b.f * t + b.p), 0) / top;
}

// ---- G-H2-01: EEG frekans bantları ----
function bantlar(): string {
  const satir = [
    { ad: "Delta", hz: "0,5–4 Hz", durum: "derin uyku", f: 2, a: 1, cls: "g-seri-a" },
    { ad: "Teta", hz: "4–8 Hz", durum: "hafif uyku, meditasyon", f: 6, a: 0.8, cls: "g-seri-c" },
    { ad: "Alfa", hz: "8–13 Hz", durum: "gözler kapalı, sakin", f: 10, a: 0.65, cls: "g-seri-d" },
    { ad: "Beta", hz: "13–30 Hz", durum: "dikkat, aktif düşünce", f: 20, a: 0.4, cls: "g-seri-b" },
    { ad: "Gama", hz: "30–100+ Hz", durum: "üst düzey bilişsel işlev", f: 40, a: 0.28, cls: "g-seri-a" },
  ];
  let s = "";
  satir.forEach((b, i) => {
    const y = 20 + i * 66;
    s += satirlar(14, y + 18, [b.ad, b.hz], "g-mini", "start", 14).replace("g-mini", "g-kucuk g-kalin");
    s += yazi(14, y + 48, b.durum, "g-mini g-soluk", "start");
    const e = { x: 170, y, w: 500, h: 56 };
    const f = ritim(b.f, 11 + i);
    const ex = eksen({ ...e, x0: 0, x1: 1, y0: -1.1, y1: 1.1 });
    s += cizgi([[e.x, y + 28], [e.x + e.w, y + 28]], "g-izgara");
    s += fonksiyon(ex, (t) => b.a * f(t), `${b.cls} g-ince`, 700).replace(/<polyline[^>]*g-eksen[^>]*\/>/g, "");
  });
  s += cizgi([[170, 352], [670, 352]], "g-cizgi g-eksen") + yazi(170, 366, "0", "g-mini g-soluk") + yazi(670, 366, "1 s", "g-mini g-soluk");
  s += yazi(420, 366, "Frekans arttıkça genlik azalır", "g-mini g-kalin");
  return s;
}

// ---- G-H2-02: Gözlerin açılmasıyla alfa yerine beta ----
function gozAcik(): string {
  const alfa = ritim(10, 3);
  const beta = ritim(22, 7);
  const f = (t: number) => (t < 1 || t > 2 ? 0.9 * alfa(t) : 0.3 * beta(t));
  const e = eksen({ x: 40, y: 40, w: 600, h: 120, x0: 0, x1: 3, y0: -1.1, y1: 1.1, xTik: [0, 1, 2, 3], xAd: "t (s)" });
  let s = e.s;
  s += `<rect x="${e.X(1)}" y="34" width="${e.X(2) - e.X(1)}" height="132" class="g-bolge-b"/>`;
  s += fonksiyon(e, f, "g-seri-a g-ince", 1200);
  s += yazi(e.X(0.5), 26, "Gözler kapalı: alfa", "g-mini g-kalin");
  s += yazi(e.X(1.5), 26, "Gözler açık: beta", "g-mini g-kalin g-renk-b");
  s += yazi(e.X(2.5), 26, "Gözler kapalı: alfa", "g-mini g-kalin");
  s += satirlar(40, 200, ["Beynin aktivite düzeyi yükselince EEG'nin frekansı artar, genliği azalır."], "g-mini g-soluk", "start");
  return s;
}

// ---- G-H2-03: Bir gecelik uyku (hipnogram) ----
function hipnogram(): string {
  const seviyeler = ["Uyanık", "REM", "Evre 1", "Evre 2", "Evre 3", "Evre 4"];
  const Y = (k: number) => 40 + k * 34;
  const X = (saat: number) => 90 + saat * 72;
  // [saat, seviye] adımları: ilk döngülerde derin NREM uzun, sabaha doğru REM uzar
  const adim: [number, number][] = [
    [0, 0], [0.15, 2], [0.35, 3], [0.6, 4], [0.85, 5], [1.35, 4], [1.5, 3], [1.6, 1], [1.75, 3],
    [2.0, 4], [2.2, 5], [2.55, 4], [2.7, 3], [2.95, 1], [3.2, 3],
    [3.5, 4], [3.75, 3], [4.25, 1], [4.65, 3],
    [5.2, 2], [5.4, 1], [5.95, 3], [6.4, 2], [6.55, 1], [7.4, 0], [7.6, 0],
  ];
  let s = "";
  seviyeler.forEach((ad, k) => {
    s += cizgi([[X(0), Y(k)], [X(7.6), Y(k)]], "g-izgara");
    s += yazi(80, Y(k), ad, `g-mini${ad === "REM" ? " g-kalin g-renk-b" : ""}`, "end");
  });
  const p: [number, number][] = [];
  adim.forEach(([t, k], i) => {
    if (i > 0) p.push([X(t), Y(adim[i - 1]![1])]);
    p.push([X(t), Y(k)]);
  });
  s += cizgi(p, "g-seri-a");
  // REM dönemlerini vurgula
  adim.forEach(([t, k], i) => {
    const son = adim[i + 1];
    if (k === 1 && son) s += cizgi([[X(t), Y(1)], [X(son[0]), Y(1)]], "g-seri-b");
  });
  for (let h = 0; h <= 7; h++) s += yazi(X(h), Y(5) + 22, `${h}`, "g-mini g-soluk");
  s += yazi(X(7.6), Y(5) + 22, "saat", "g-mini g-soluk", "start");
  s += kutu(X(0.55), Y(5) + 34, 150, 22, "g-bolge-a") + yazi(X(0.55) + 75, Y(5) + 45, "gecenin başı: derin NREM", "g-mini");
  s += kutu(X(4.9), Y(5) + 34, 170, 22, "g-bolge-b") + yazi(X(4.9) + 85, Y(5) + 45, "sabaha doğru: REM uzar", "g-mini");
  return s;
}

export const UNITE_2_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H2-01",
    baslik: "EEG frekans bantları",
    aciklama: "Delta (0,5–4 Hz) derin uykuda, teta (4–8 Hz) hafif uyku ve meditasyonda, alfa (8–13 Hz) gözler kapalı sakin dinlenmede, beta (13–30 Hz) dikkat ve aktif düşüncede, gama (30–100+ Hz) üst düzey bilişsel işlevlerde baskındır. Frekans arttıkça genlik azalır.",
    en: 690, boy: 375, icerik: bantlar(),
  },
  {
    kod: "G-H2-02",
    baslik: "Gözler açılınca alfanın yerini beta alır",
    aciklama: "Gözler kapalıyken büyük genlikli 10 Hz civarında alfa ritmi görülür. Gözler açılınca daha hızlı ve daha küçük genlikli beta ritmi gelir; gözler yeniden kapanınca alfa döner.",
    en: 680, boy: 215, icerik: gozAcik(),
  },
  {
    kod: "G-H2-03",
    baslik: "Bir gecelik uyku döngüleri (hipnogram)",
    aciklama: "Uyku uyanıklıktan Evre 1-4'e iner, ardından REM gelir; bir gecede 4-5 döngü olur. Gecenin başında derin NREM (Evre 3-4) uzundur, sabaha doğru NREM kısalır ve REM dönemleri uzar.",
    en: 680, boy: 310, icerik: hipnogram(),
  },
];
