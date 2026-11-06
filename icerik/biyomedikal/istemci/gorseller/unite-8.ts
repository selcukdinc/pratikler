// 8. ünite şekilleri: STFT ve dalgacık zaman-frekans döşemesi, ana dalgacığın
// ölçeklenmesi ve ötelenmesi, Mallat filtre bankası, 2B dalgacık alt bantları.
import type { Gorsel } from "../../../../src/gorseller/tip";
import { cizgi, eksen, fonksiyon, gosterge, kutu, ok, satirlar, yazi } from "./ortak";

// ---- G-H8-01: Zaman-frekans döşemesi ----
function doseme(): string {
  let s = "";
  const panel = (x: number, baslik: string, kutular: [number, number, number, number][]) => {
    const w = 260;
    const h = 196;
    s += yazi(x + w / 2 + 20, 12, baslik, "g-kucuk g-kalin");
    kutular.forEach(([a, b, c, d], i) => (s += kutu(x + a * w, 36 + (1 - d) * h, (b - a) * w, (d - c) * h, i % 2 ? "g-bant-2" : "g-bant-3")));
    s += ok([[x, 36 + h], [x + w + 12, 36 + h]], "g-cizgi g-eksen") + ok([[x, 36 + h], [x, 28]], "g-cizgi g-eksen");
    s += yazi(x + w + 10, 36 + h + 14, "zaman", "g-mini g-soluk", "end") + yazi(x + 8, 27, "frekans", "g-mini g-soluk", "start");
  };
  // STFT: her yerde aynı pencere
  const stft: [number, number, number, number][] = [];
  for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) stft.push([i / 6, (i + 1) / 6, j / 4, (j + 1) / 4]);
  panel(30, "STFT: sabit pencere", stft);
  // Dalgacık: düşük frekansta geniş, yüksek frekansta dar pencere
  const dd: [number, number, number, number][] = [];
  const bant: [number, number, number][] = [[0, 0.125, 1], [0.125, 0.25, 2], [0.25, 0.5, 4], [0.5, 1, 8]];
  for (const [c, d, k] of bant) for (let i = 0; i < k; i++) dd.push([i / k, (i + 1) / k, c, d]);
  panel(370, "Dalgacık: ölçekle değişen pencere", dd);
  s += satirlar(370, 262, ["Yüksek frekans: iyi zaman çözünürlüğü", "Düşük frekans: iyi frekans çözünürlüğü"], "g-mini g-soluk", "start", 15);
  s += satirlar(30, 262, ["Pencere bütün frekanslarda aynı büyüklükte:", "çözünürlük her yerde sınırlı"], "g-mini g-soluk", "start", 15);
  return s;
}

// ---- G-H8-02: Ana dalgacık, skala ve öteleme ----
function skalaOteleme(): string {
  const psi = (t: number) => Math.cos(5 * t) * Math.exp(-(t * t) / 2);
  const e = eksen({ x: 40, y: 30, w: 600, h: 190, x0: -4, x1: 12, y0: -1.2, y1: 1.2, xTik: [-4, 0, 4, 8, 12], xAd: "t", sifirdan: true });
  let s = e.s;
  s += fonksiyon(e, (t) => 0.9 * Math.sin(2.5 * t), "g-izgara", 600);
  s += fonksiyon(e, psi, "g-seri-a", 800);
  s += fonksiyon(e, (t) => psi((t - 5) / 2), "g-seri-b", 800);
  s += fonksiyon(e, (t) => psi((t - 10) / 0.5), "g-seri-c", 800);
  s += gosterge(50, 250, [["g-seri-a", "ana dalgacık ψ(t)"], ["g-seri-b", "τ = 5, s = 2: ötelenmiş, genişlemiş"], ["g-seri-c", "τ = 10, s = 0,5: sıkışmış"]], 205);
  s += yazi(40, 276, "Arkadaki soluk sinüs sonsuza dek sürer; dalgacık sınırlı uzunluktadır ve ortalaması sıfırdır.", "g-mini g-soluk", "start");
  return s;
}

// ---- G-H8-03: Mallat filtre bankası ----
function mallat(): string {
  let s = "";
  const blok = (x: number, y: number, ad: string, cls = "g-kutu") => kutu(x, y, 44, 28, cls) + yazi(x + 22, y + 14, ad, "g-mini g-kalin");
  const asagi = (x: number, y: number) => `<circle cx="${x + 15}" cy="${y + 14}" r="14" class="g-kutu"/>` + yazi(x + 15, y + 14, "↓2", "g-mini g-kalin");
  s += kutu(10, 90, 80, 34, "g-dolu") + satirlar(50, 101, ["x[n]", "N örnek"], "g-mini", "middle", 13);
  let x = 90;
  let y = 107;
  const seviye: [string, string, string][] = [["A1", "D1", "N/2"], ["A2", "D2", "N/4"], ["A3", "D3", "N/8"]];
  seviye.forEach(([A, D, sayi], i) => {
    const yu = y - 50;
    const ya = y + 22;
    s += cizgi([[x, y], [x + 14, y]]) + cizgi([[x + 14, yu + 14], [x + 14, ya + 14]]);
    s += ok([[x + 14, yu + 14], [x + 24, yu + 14]]) + ok([[x + 14, ya + 14], [x + 24, ya + 14]]);
    s += blok(x + 24, yu, "HP", "g-bant-2") + blok(x + 24, ya, "LP", "g-bant-3");
    s += ok([[x + 68, yu + 14], [x + 78, yu + 14]]) + ok([[x + 68, ya + 14], [x + 78, ya + 14]]);
    s += asagi(x + 78, yu) + asagi(x + 78, ya);
    s += ok([[x + 108, yu + 14], [x + 122, yu + 14]]);
    s += kutu(x + 122, yu, 52, 28, "g-ton2") + yazi(x + 148, yu + 14, D, "g-mini g-kalin");
    s += yazi(x + 148, yu - 9, `${sayi} katsayı`, "g-mini g-soluk");
    s += ok([[x + 108, ya + 14], [x + 122, ya + 14]]);
    s += kutu(x + 122, ya, 52, 28, "g-ton1") + yazi(x + 148, ya + 14, A, "g-mini g-kalin");
    if (i === 2) s += yazi(x + 148, ya + 42, `${sayi} katsayı`, "g-mini g-soluk");
    x += 174;
    y = ya + 14;
  });
  s += satirlar(10, 262, ["HP: yüksek geçiren → detay (D) · LP: alçak geçiren → yaklaşım (A) · ↓2: aşağı örnekleme", "Her seviyede yalnızca bir önceki yaklaşım (A) yeniden ayrıştırılır. Toplam katsayı: N/2 + N/4 + N/8 + N/8 = N"], "g-mini", "start", 16);
  return s;
}

// ---- G-H8-04: 2B dalgacık alt bantları ----
function altBantlar(): string {
  const x = 30;
  const y = 20;
  const L = 240;
  let s = "";
  s += kutu(x, y, L, L, "g-kutu");
  s += kutu(x + L / 2, y, L / 2, L / 2, "g-bant-2") + yazi(x + (3 * L) / 4, y + L / 4, "HL1", "g-kucuk g-kalin");
  s += kutu(x, y + L / 2, L / 2, L / 2, "g-bant-2") + yazi(x + L / 4, y + (3 * L) / 4, "LH1", "g-kucuk g-kalin");
  s += kutu(x + L / 2, y + L / 2, L / 2, L / 2, "g-ton2") + yazi(x + (3 * L) / 4, y + (3 * L) / 4, "HH1", "g-kucuk g-kalin");
  const l = L / 2;
  s += kutu(x, y, l / 2, l / 2, "g-ton1") + yazi(x + l / 4, y + l / 4, "LL2", "g-mini g-kalin");
  s += kutu(x + l / 2, y, l / 2, l / 2, "g-bant-2") + yazi(x + (3 * l) / 4, y + l / 4, "HL2", "g-mini");
  s += kutu(x, y + l / 2, l / 2, l / 2, "g-bant-2") + yazi(x + l / 4, y + (3 * l) / 4, "LH2", "g-mini");
  s += kutu(x + l / 2, y + l / 2, l / 2, l / 2, "g-ton2") + yazi(x + (3 * l) / 4, y + (3 * l) / 4, "HH2", "g-mini");
  s += satirlar(300, 40, [
    "LL: yaklaşım; düşük frekanslı, kaba yapı.",
    "    Bir sonraki seviye LL'ye uygulanır.",
    "LH ve HL: yatay ve dikey yönlü kenarlar",
    "    (hangi harfin hangi yön olduğu",
    "    kaynaklara göre değişebilir).",
    "HH: köşegen, çapraz detaylar.",
    "",
    "Satırlara, sonra sütunlara 1B filtre",
    "bankası uygulanır (ayrılabilir dönüşüm).",
    "",
    "Gürültü giderme: detay katsayılarına",
    "eşik uygulanır, ters dönüşüm alınır.",
  ], "g-mini", "start", 17);
  return s;
}

export const UNITE_8_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H8-01",
    baslik: "Zaman-frekans döşemesi: STFT ve dalgacık",
    aciklama: "STFT'de pencere bütün frekanslarda aynıdır, zaman-frekans düzlemi eş dikdörtgenlere bölünür. Dalgacık dönüşümünde yüksek frekanslarda dar zaman pencereleri, düşük frekanslarda geniş zaman pencereleri kullanılır.",
    en: 680, boy: 300, icerik: doseme(),
  },
  {
    kod: "G-H8-02",
    baslik: "Ana dalgacık, skala ve öteleme",
    aciklama: "Ana dalgacık ψ(t) sınırlı uzunlukta bir salınımdır. τ = 5, s = 2 ile hem 5 birim kaydırılmış hem de iki kat genişlemiş; τ = 10, s = 0,5 ile sıkışmış ve daha yüksek frekanslı hale gelmiştir.",
    en: 680, boy: 290, icerik: skalaOteleme(),
  },
  {
    kod: "G-H8-03",
    baslik: "Ayrık dalgacık dönüşümü: Mallat filtre bankası",
    aciklama: "x[n] yüksek ve alçak geçiren filtrelerden geçirilip 2 ile aşağı örneklenir: D1 ve A1, her biri N/2 katsayı. A1 aynı biçimde A2 ve D2'ye (N/4), A2 de A3 ve D3'e (N/8) ayrılır. Toplam katsayı sayısı N kalır.",
    en: 640, boy: 295, icerik: mallat(),
  },
  {
    kod: "G-H8-04",
    baslik: "2B dalgacık dönüşümünün alt bantları",
    aciklama: "Bir seviyede görüntü dört alt banda ayrılır: LL yaklaşım, LH ve HL yatay ve dikey kenarlar, HH köşegen detaylar. İkinci seviye LL bandına uygulanır ve onu yeniden dörde böler.",
    en: 640, boy: 280, icerik: altBantlar(),
  },
];
