// Proje haftasının şekilleri: filtre şartnamesi, filtre ailelerinin
// karşılaştırması ve dalgacık ayrıştırma ağacı.

import { cizgi, kutu, ok, yazi } from "./cizim";
import { aralik, egri, eksen } from "./grafik";
import type { Gorsel } from "../../../../src/gorseller/tip";

// ---- G-H9-01: Alçak geçiren filtre şartnamesi ----
function sartname(): string {
  const e = eksen({ x: 70, y: 30, w: 500, h: 190, x0: 0, x1: 1, y0: 0, y1: 1.25, xTik: [0.3, 0.45, 1], xEtiket: (v) => (v === 0.3 ? "ωp" : v === 0.45 ? "ωs" : "π"), yTik: [0.1, 0.9, 1.1], yEtiket: (v) => (v === 0.1 ? "δs" : v === 0.9 ? "1 − δp" : "1 + δp"), sifirdan: true, xAd: "ω", yAd: "|H(e^jω)|" });
  let g = "";
  // İzin verilen bölgeler
  g += `<rect x="${e.X(0)}" y="${e.Y(1.1)}" width="${e.X(0.3) - e.X(0)}" height="${e.Y(0.9) - e.Y(1.1)}" class="g-bolge-a"/>`;
  g += `<rect x="${e.X(0.45)}" y="${e.Y(0.1)}" width="${e.X(1) - e.X(0.45)}" height="${e.Y(0) - e.Y(0.1)}" class="g-bolge-a"/>`;
  g += `<rect x="${e.X(0.3)}" y="${e.Y(1.25)}" width="${e.X(0.45) - e.X(0.3)}" height="${e.Y(0) - e.Y(1.25)}" class="g-bolge-b"/>`;
  g += e.s;
  for (const v of [0.1, 0.9, 1.1]) g += cizgi([[e.X(0), e.Y(v)], [e.X(1), e.Y(v)]], "g-kesik");
  // Örnek bir yanıt: geçiş bandında dalgalı, durdurma bandında küçük
  const ws = aralik(0, 0.002, 1);
  const H = ws.map((w) => {
    if (w <= 0.3) return 1 + 0.07 * Math.cos((w / 0.3) * 5 * Math.PI);
    if (w >= 0.45) return 0.05 + 0.04 * Math.abs(Math.cos(((w - 0.45) / 0.55) * 4 * Math.PI));
    const t = (w - 0.3) / 0.15;
    return 0.93 * (1 - t) + 0.09 * t;
  });
  g += egri(e, ws, H, "g-seri-a");
  g += yazi(e.X(0.15), e.Y(1.2), "geçiş bandı", "g-mini g-kalin") + yazi(e.X(0.375), e.Y(1.2) - 4, "geçiş", "g-mini g-kalin") + yazi(e.X(0.375), e.Y(1.2) + 10, "aralığı", "g-mini g-kalin") + yazi(e.X(0.72), e.Y(0.3), "durdurma bandı", "g-mini g-kalin");
  g += yazi(320, 262, "gölgeli kutular yanıtın kalması gereken bölgeler; ortadaki aralıkta yanıt serbesttir", "g-mini g-soluk");
  return g;
}

// ---- G-H9-02: Butterworth ve Chebyshev I karşılaştırması ----
const cheb = (N: number, x: number) => (Math.abs(x) <= 1 ? Math.cos(N * Math.acos(x)) : Math.cosh(N * Math.acosh(Math.abs(x))));
export function aileCiz(N: number) {
  const eps = Math.sqrt(10 ** 0.1 - 1); // 1 dB dalgalanma
  const ws = aralik(0, 0.005, 3);
  const db = (v: number) => Math.max(-80, 10 * Math.log10(v));
  const bw = ws.map((w) => db(1 / (1 + w ** (2 * N))));
  const ch = ws.map((w) => db(1 / (1 + eps * eps * cheb(N, w) ** 2)));
  const e = eksen({ x: 70, y: 24, w: 360, h: 180, x0: 0, x1: 3, y0: -80, y1: 5, xTik: [0.5, 1, 1.5, 2, 2.5, 3], yTik: [-80, -60, -40, -20, 0], sifirdan: true, izgara: true, xAd: "Ω/Ωc", yAd: "dB" });
  let g = e.s + egri(e, ws, bw, "g-seri-a") + egri(e, ws, ch, "g-seri-b");
  g += cizgi([[90, 236], [108, 236]], "g-seri-a") + yazi(114, 236, "Butterworth", "g-mini", "start");
  g += cizgi([[220, 236], [238, 236]], "g-seri-b") + yazi(244, 236, "Chebyshev I (1 dB)", "g-mini", "start");
  // Yakın görünüm: geçiş bandı
  const e2 = eksen({ x: 500, y: 24, w: 150, h: 180, x0: 0, x1: 1.2, y0: -4, y1: 0.5, xTik: [0.5, 1], yTik: [-3, -1, 0], izgara: true, xAd: "Ω/Ωc" });
  const yakin = aralik(0, 0.004, 1.2);
  g += e2.s + egri(e2, yakin, yakin.map((w) => db(1 / (1 + w ** (2 * N)))), "g-seri-a") + egri(e2, yakin, yakin.map((w) => db(1 / (1 + eps * eps * cheb(N, w) ** 2))), "g-seri-b");
  g += yazi(575, 236, "geçiş bandına yakından bakış", "g-mini g-soluk");
  const iki = (v: number[]) => v[Math.round(2 / 0.005)]!;
  return { s: g, bw2: iki(bw), ch2: iki(ch) };
}

// ---- G-H9-03: Dalgacık ayrıştırma ağacı ----
function dalgacikAgaci(): string {
  const k = (x: number, y: number, s: string, cls = "g-kutu") => kutu(x, y, 70, 30, cls) + yazi(x + 35, y + 20, s, "g-mini g-kalin");
  let g = k(40, 20, "x(n)");
  g += ok([[110, 35], [150, 35]]) + k(150, 20, "A1") + ok([[110, 35], [150, 80]]) + k(150, 65, "D1", "g-ton2");
  g += ok([[220, 35], [260, 35]]) + k(260, 20, "A2") + ok([[220, 35], [260, 80]]) + k(260, 65, "D2", "g-ton2");
  g += ok([[330, 35], [370, 35]]) + k(370, 20, "A3", "g-ton1") + ok([[330, 35], [370, 80]]) + k(370, 65, "D3", "g-ton2");
  g += yazi(130, 128, "alçak geçiren + 2'ye seyreltme → yaklaşıklık (A)", "g-mini g-soluk", "start");
  g += yazi(130, 144, "yüksek geçiren + 2'ye seyreltme → ayrıntı (D)", "g-mini g-soluk", "start");
  // Frekans bantları
  const x0 = 470;
  const w = 170;
  const bant = (a: number, b: number, s: string, cls: string, y: number) =>
    `<rect x="${x0 + a * w}" y="${y}" width="${(b - a) * w}" height="26" class="${cls}"/>` + yazi(x0 + ((a + b) / 2) * w, y + 17, s, "g-mini g-kalin");
  g += yazi(x0 + w / 2, 14, "frekans ekseni: 0 … fs/2", "g-mini g-soluk");
  g += bant(0, 0.125, "A3", "g-ton1", 24) + bant(0.125, 0.25, "D3", "g-ton2", 24) + bant(0.25, 0.5, "D2", "g-ton2", 24) + bant(0.5, 1, "D1", "g-ton2", 24);
  g += cizgi([[x0, 56], [x0 + w, 56]], "g-cizgi g-eksen") + yazi(x0, 70, "0", "g-mini g-soluk") + yazi(x0 + w, 70, "fs/2", "g-mini g-soluk");
  g += yazi(x0 + w / 2, 100, "gürültü çoğunlukla ayrıntı", "g-mini") + yazi(x0 + w / 2, 114, "katsayılarına düşer: onlar", "g-mini") + yazi(x0 + w / 2, 128, "eşiklenir, sonra geri çatılır", "g-mini");
  return g;
}

export const PROJE_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H9-01",
    baslik: "Alçak geçiren filtre şartnamesi",
    aciklama: "Büyüklük yanıtının geçiş bandında 1'in çevresindeki dar bir aralıkta, durdurma bandında küçük bir sınırın altında kalması istenir. Geçiş bandı kenarı ωp ile durdurma bandı kenarı ωs arasındaki geçiş aralığında yanıt serbesttir.",
    en: 640, boy: 272, icerik: sartname(),
  },
  {
    kod: "G-H9-02",
    baslik: "Butterworth ve Chebyshev I filtrelerin büyüklük yanıtı",
    aciklama: "Aynı dereceden Butterworth ve 1 dB dalgalanmalı Chebyshev I alçak geçiren filtrelerin desibel cinsinden büyüklük yanıtı. Chebyshev geçiş bandında dalgalanır ama kesimden sonra daha hızlı düşer; sağdaki yakın görünüm geçiş bandını gösterir.",
    en: 680, boy: 248, icerik: aileCiz(4).s, etkilesim: "filtreailesi",
  },
  {
    kod: "G-H9-03",
    baslik: "Dalgacık ayrıştırma ağacı ve frekans bantları",
    aciklama: "Sinyal her seviyede alçak geçiren ve yüksek geçiren filtrelerle yaklaşıklık ve ayrıntı katsayılarına ayrılır; yaklaşıklık bir sonraki seviyede yeniden ayrılır. Sağda üç seviyenin frekans eksenini nasıl paylaştığı.",
    en: 660, boy: 156, icerik: dalgacikAgaci(),
  },
];
