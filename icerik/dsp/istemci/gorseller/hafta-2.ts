// Hafta 2 ders şekilleri: vektör indeksleme, matrislerde doğrusal indeks,
// eleman bazında ve matris çarpımı, dizi birleştirme, istatistik
// fonksiyonlarının boyutu.

import { bitDizisi, kutu, ok, yazi } from "./cizim";
import type { Gorsel } from "../../../../src/gorseller/tip";

const sayi = (v: number) => (Number.isInteger(v) ? String(v) : v.toFixed(4).replace(/0+$/, "").replace(/\.$/, "")).replace("-", "−");

// ---- G-H2-01: Vektör indeksleme ----
export const VEKTOR = [2, 3.5, 6, 7, 8.2, -2, -5, 6];
export interface IndeksSecimi {
  ifade: string;
  // 1'den başlayan indisler, seçilme sırasıyla
  indisler: number[];
  aciklama: string;
}
const n = VEKTOR.length;
const sira = (a: number, d: number, b: number) => {
  const r: number[] = [];
  for (let k = a; d > 0 ? k <= b : k >= b; k += d) r.push(k);
  return r;
};
export const INDEKS_SECIMLERI: IndeksSecimi[] = [
  { ifade: "x(3)", indisler: [3], aciklama: "Tek bir indis: 3. eleman. MatStudio'da indisler 1'den başlar." },
  { ifade: "x(end)", indisler: [n], aciklama: "end, o boyuttaki son indistir; burada 8." },
  { ifade: "x(3:7)", indisler: sira(3, 1, 7), aciklama: "3:7 aralığı [3 4 5 6 7] indislerini üretir; beş eleman seçilir." },
  { ifade: "x(2:2:end)", indisler: sira(2, 2, n), aciklama: "2'den başla, 2'şer art, sona kadar: çift sıradaki elemanlar." },
  { ifade: "x(end:-1:1)", indisler: sira(n, -1, 1), aciklama: "Adım negatifse aralık geriye sayar: vektör ters çevrilir." },
  { ifade: "x([1 1 4])", indisler: [1, 1, 4], aciklama: "İndisler bir vektörle de verilebilir; aynı indis tekrar edebilir." },
  { ifade: "x(x > 3)", indisler: VEKTOR.map((v, i) => (v > 3 ? i + 1 : 0)).filter(Boolean), aciklama: "x > 3 her eleman için 1 ya da 0 olan mantıksal bir vektör verir; 1 olan konumlar seçilir." },
];

export function indekslemeCiz(secim: IndeksSecimi): string {
  const en = 66;
  const x0 = 50;
  let s = yazi(x0 - 12, 50, "x =", "g-kod g-kucuk", "end");
  s += bitDizisi(x0, 36, VEKTOR.map(sayi), { en, boy: 30, indisler: VEKTOR.map((_, i) => i + 1), vurgu: [...new Set(secim.indisler.map((i) => i - 1))] });
  s += yazi(x0 - 12, 82, "indis", "g-mini g-soluk", "end");
  // Sonuç
  s += yazi(x0 - 12, 150, "sonuç", "g-kod g-kucuk", "end");
  s += bitDizisi(x0, 136, secim.indisler.map((i) => sayi(VEKTOR[i - 1]!)), { en, boy: 30, cls: "g-dolu" });
  // Oklar sırayla farklı renkte: kesişen oklar (örneğin ters çevirmede) ayırt edilsin
  const tek = secim.indisler.length === 1;
  secim.indisler.forEach((i, k) => {
    const renk = tek ? "g-renk-a" : `g-ok-${k % 8}`;
    s += ok([[x0 + (i - 1) * en + en / 2, 84], [x0 + k * en + en / 2, 132]], `g-cizgi g-ince ${tek ? "g-renk-a-cizgi" : renk}`, renk);
  });
  s += yazi(330, 196, secim.ifade, "g-kod g-kalin");
  return s;
}

// ---- G-H2-02: Matrislerde satır, sütun ve doğrusal indeks ----
export const MATRIS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
export interface MatrisSecimi {
  ifade: string;
  // [satır, sütun] 1'den, seçilme sırasıyla
  konumlar: [number, number][];
  aciklama: string;
}
const tum = (f: (i: number, j: number) => boolean) => {
  const r: [number, number][] = [];
  for (let j = 1; j <= 3; j++) for (let i = 1; i <= 3; i++) if (f(i, j)) r.push([i, j]);
  return r;
};
export const MATRIS_SECIMLERI: MatrisSecimi[] = [
  { ifade: "A(2, 3)", konumlar: [[2, 3]], aciklama: "Önce satır, sonra sütun: 2. satır, 3. sütun." },
  { ifade: "A(3, :)", konumlar: tum((i) => i === 3), aciklama: "İki nokta üst üste o boyutun tamamı demektir: 3. satırın bütün sütunları." },
  { ifade: "A(:, 3)", konumlar: tum((_, j) => j === 3), aciklama: "3. sütunun bütün satırları; sonuç bir sütun vektörüdür." },
  { ifade: "A(6)", konumlar: [[3, 2]], aciklama: "Tek indis doğrusal indekstir. MatStudio elemanları sütun sırasıyla saklar: 6. eleman 2. sütunun en altıdır." },
  { ifade: "A(:)", konumlar: tum(() => true), aciklama: "Bütün elemanlar sütun sırasıyla tek bir sütun vektörüne dizilir." },
  { ifade: "find(A > 5)", konumlar: tum((i, j) => MATRIS[i - 1]![j - 1]! > 5), aciklama: "find koşulu sağlayan elemanların doğrusal indekslerini döndürür: [3; 6; 8; 9]." },
];

export function matrisCiz(secim: MatrisSecimi): string {
  const h = 52;
  const x0 = 60;
  const y0 = 40;
  const secili = new Set(secim.konumlar.map(([i, j]) => `${i},${j}`));
  let s = yazi(x0 - 14, y0 + 1.5 * h, "A =", "g-kod g-kucuk", "end");
  for (let i = 1; i <= 3; i++)
    for (let j = 1; j <= 3; j++) {
      const x = x0 + (j - 1) * h;
      const y = y0 + (i - 1) * h;
      s += kutu(x, y, h, h, secili.has(`${i},${j}`) ? "g-dolu g-secili" : "g-kutu");
      s += yazi(x + h / 2, y + h / 2 - 4, String(MATRIS[i - 1]![j - 1]), "g-kod g-kalin");
      s += yazi(x + h - 5, y + h - 9, String((j - 1) * 3 + i), "g-mini g-soluk", "end");
    }
  for (let j = 1; j <= 3; j++) s += yazi(x0 + (j - 0.5) * h, y0 - 12, `sütun ${j}`, "g-mini g-soluk");
  for (let i = 1; i <= 3; i++) s += yazi(x0 + 3 * h + 8, y0 + (i - 0.5) * h, `satır ${i}`, "g-mini g-soluk", "start");
  s += yazi(x0 + 1.5 * h, y0 + 3 * h + 16, "küçük sayılar: doğrusal indeks", "g-mini g-soluk");
  // Sonuç
  const sonuc = secim.konumlar.map(([i, j]) => MATRIS[i - 1]![j - 1]!);
  const satir = secim.ifade.includes(", :)");
  const rx = 400;
  s += yazi(rx, 26, secim.ifade, "g-kod g-kalin", "start");
  if (secim.ifade.startsWith("find")) {
    const idx = secim.konumlar.map(([i, j]) => (j - 1) * 3 + i);
    s += yazi(rx, 52, "doğrusal indeksler:", "g-mini g-soluk", "start");
    idx.forEach((v, k) => (s += kutu(rx, 62 + k * 22, 44, 22, "g-dolu") + yazi(rx + 22, 73 + k * 22, String(v), "g-kod g-kucuk")));
  } else if (satir) {
    sonuc.forEach((v, k) => (s += kutu(rx + k * 44, 50, 44, 30, "g-dolu") + yazi(rx + 22 + k * 44, 65, String(v), "g-kod")));
  } else {
    const yuk = Math.min(22, 180 / sonuc.length);
    sonuc.forEach((v, k) => (s += kutu(rx, 50 + k * yuk, 44, yuk, "g-dolu") + yazi(rx + 22, 50 + k * yuk + yuk / 2, String(v), "g-kod g-kucuk")));
  }
  return s;
}

// ---- G-H2-03: Eleman bazında ve matris çarpımı ----
function carpimlar(): string {
  const A = [[1, 2], [3, 4]];
  const B = [[5, 6], [7, 8]];
  const mini = (x: number, y: number, M: number[][], vurgu: (i: number, j: number) => string = () => "g-kutu") => {
    let s = "";
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) s += kutu(x + j * 34, y + i * 30, 34, 30, vurgu(i, j)) + yazi(x + j * 34 + 17, y + i * 30 + 15, String(M[i]![j]), "g-kod g-kucuk");
    return s;
  };
  let s = yazi(160, 20, "A .* B  (eleman bazında)", "g-kucuk g-kalin");
  s += mini(30, 40, A, (i, j) => (i === 0 && j === 1 ? "g-dolu g-secili" : "g-kutu")) + yazi(115, 70, ".*", "g-kod g-kalin");
  s += mini(130, 40, B, (i, j) => (i === 0 && j === 1 ? "g-dolu g-secili" : "g-kutu")) + yazi(215, 70, "=", "g-kod g-kalin");
  s += mini(230, 40, [[5, 12], [21, 32]], (i, j) => (i === 0 && j === 1 ? "g-dolu g-secili" : "g-kutu"));
  s += yazi(160, 124, "aynı konumdakiler çarpılır: 2 · 6 = 12", "g-mini");
  s += yazi(160, 142, "boyutlar aynı olmalı (ya da biri skaler)", "g-mini g-soluk");
  s += yazi(500, 20, "A * B  (matris çarpımı)", "g-kucuk g-kalin");
  s += mini(370, 40, A, (i) => (i === 0 ? "g-dolu g-secili" : "g-kutu")) + yazi(455, 70, "*", "g-kod g-kalin");
  s += mini(470, 40, B, (_, j) => (j === 1 ? "g-dolu g-secili" : "g-kutu")) + yazi(555, 70, "=", "g-kod g-kalin");
  s += mini(570, 40, [[19, 22], [43, 50]], (i, j) => (i === 0 && j === 1 ? "g-dolu g-secili" : "g-kutu"));
  s += yazi(500, 124, "satır · sütun: 1·6 + 2·8 = 22", "g-mini");
  s += yazi(500, 142, "A'nın sütun sayısı = B'nin satır sayısı", "g-mini g-soluk");
  return s;
}

// ---- G-H2-04: Yatay ve dikey birleştirme ----
function birlestirme(): string {
  const blok = (x: number, y: number, r: number, c: number, cls: string, ad: string) =>
    kutu(x, y, c * 26, r * 22, cls) + yazi(x + (c * 26) / 2, y + (r * 22) / 2, ad, "g-kod g-kucuk g-kalin");
  let s = yazi(150, 18, "[A, B]  ya da  horzcat(A, B)  ya da  cat(2, A, B)", "g-mini g-kalin");
  s += blok(40, 40, 2, 2, "g-dolu", "A 2×2") + blok(100, 40, 2, 3, "g-ton1", "B 2×3");
  s += ok([[190, 62], [215, 62]]) + blok(225, 40, 2, 2, "g-dolu", "A") + blok(277, 40, 2, 3, "g-ton1", "B");
  s += yazi(150, 106, "satır sayıları aynı olmalı → 2×5", "g-mini g-soluk");
  s += yazi(480, 18, "[A; B]  ya da  vertcat(A, B)  ya da  cat(1, A, B)", "g-mini g-kalin");
  s += blok(380, 40, 2, 3, "g-dolu", "A 2×3") + blok(380, 90, 1, 3, "g-ton1", "B 1×3");
  s += ok([[470, 74], [495, 74]]) + blok(505, 40, 2, 3, "g-dolu", "A") + blok(505, 84, 1, 3, "g-ton1", "B");
  s += yazi(480, 132, "sütun sayıları aynı olmalı → 3×3", "g-mini g-soluk");
  return s;
}

// ---- G-H2-05: İstatistik fonksiyonları ve boyut ----
export const ISTAT_A = [
  [0, 1, 1],
  [2, 3, 2],
  [1, 3, 2],
  [4, 2, 2],
];
export type IstatFonk = "mean" | "median" | "std" | "var";
export type IstatBoyut = 1 | 2 | "all";

function istatHesap(x: number[], f: IstatFonk, w: 0 | 1): number {
  const N = x.length;
  const m = x.reduce((a, b) => a + b, 0) / N;
  if (f === "mean") return m;
  if (f === "median") {
    const s = [...x].sort((a, b) => a - b);
    return N % 2 ? s[(N - 1) / 2]! : (s[N / 2 - 1]! + s[N / 2]!) / 2;
  }
  const v = x.reduce((a, b) => a + (b - m) ** 2, 0) / (w ? N : N - 1);
  return f === "var" ? v : Math.sqrt(v);
}

export function istatSonuc(f: IstatFonk, boyut: IstatBoyut, w: 0 | 1): number[] {
  const A = ISTAT_A;
  if (boyut === "all") return [istatHesap(A.flat(), f, w)];
  if (boyut === 1) return [0, 1, 2].map((j) => istatHesap(A.map((r) => r[j]!), f, w));
  return A.map((r) => istatHesap(r, f, w));
}

export function istatIfade(f: IstatFonk, boyut: IstatBoyut, w: 0 | 1) {
  const b = boyut === "all" ? "'all'" : String(boyut);
  return f === "mean" || f === "median" ? `${f}(A, ${b})` : `${f}(A, ${w}, ${b})`;
}

export function istatCiz(f: IstatFonk, boyut: IstatBoyut, w: 0 | 1): string {
  const x0 = 60;
  const y0 = 50;
  const c = 50;
  const r = 34;
  let s = yazi(x0 - 14, y0 + 2 * r, "A =", "g-kod g-kucuk", "end");
  for (let i = 0; i < 4; i++)
    for (let j = 0; j < 3; j++) s += kutu(x0 + j * c, y0 + i * r, c, r, boyut === "all" ? "g-dolu" : "g-kutu") + yazi(x0 + j * c + c / 2, y0 + i * r + r / 2, String(ISTAT_A[i]![j]), "g-kod");
  const sonuc = istatSonuc(f, boyut, w).map((v) => sayi(Number(v.toFixed(4))));
  if (boyut === 1) {
    for (let j = 0; j < 3; j++) s += ok([[x0 + j * c + c - 9, y0 - 2], [x0 + j * c + c - 9, y0 + 4 * r + 14]], "g-cizgi g-renk-a-cizgi", "g-renk-a");
    sonuc.forEach((v, j) => (s += kutu(x0 + j * c, y0 + 4 * r + 18, c, 28, "g-dolu g-secili") + yazi(x0 + j * c + c / 2, y0 + 4 * r + 32, v, "g-kod g-mini")));
    s += yazi(x0 + 1.5 * c, 26, "boyut 1: her sütun aşağı doğru → satır vektörü", "g-mini g-kalin");
  } else if (boyut === 2) {
    for (let i = 0; i < 4; i++) s += ok([[x0 - 4, y0 + i * r + r - 7], [x0 + 3 * c + 16, y0 + i * r + r - 7]], "g-cizgi g-renk-a-cizgi", "g-renk-a");
    sonuc.forEach((v, i) => (s += kutu(x0 + 3 * c + 20, y0 + i * r, 64, r, "g-dolu g-secili") + yazi(x0 + 3 * c + 52, y0 + i * r + r / 2, v, "g-kod g-mini")));
    s += yazi(x0 + 1.5 * c, 26, "boyut 2: her satır sağa doğru → sütun vektörü", "g-mini g-kalin");
  } else {
    s += kutu(x0 + 3 * c + 30, y0 + 2 * r - 15, 70, 30, "g-dolu g-secili") + yazi(x0 + 3 * c + 65, y0 + 2 * r, sonuc[0]!, "g-kod g-mini");
    s += ok([[x0 + 3 * c + 4, y0 + 2 * r], [x0 + 3 * c + 28, y0 + 2 * r]], "g-cizgi g-renk-a-cizgi", "g-renk-a");
    s += yazi(x0 + 1.5 * c, 26, "'all': on iki elemanın hepsi tek sayıya", "g-mini g-kalin");
  }
  s += yazi(420, 70, istatIfade(f, boyut, w), "g-kod g-kalin", "start");
  if (f === "std" || f === "var") s += yazi(420, 96, w ? "w = 1: N'ye böler" : "w = 0: N − 1'e böler", "g-mini g-soluk", "start");
  return s;
}

export const HAFTA_2_GORSELLERI: Gorsel[] = [
  {
    kod: "G-H2-01",
    baslik: "Vektör indeksleme",
    aciklama: "Sekiz elemanlı bir x vektörü ve seçilen indeksleme ifadesinin hangi elemanları hangi sırayla aldığı. Seçilen kutular vurgulanır, oklar sonuç vektöründeki yerlerini gösterir.",
    en: 640, boy: 210, icerik: indekslemeCiz(INDEKS_SECIMLERI[2]!), etkilesim: "indeksleme",
  },
  {
    kod: "G-H2-02",
    baslik: "Matrislerde satır-sütun ve doğrusal indeks",
    aciklama: "Üçe üçlük bir matris; her kutunun köşesinde sütun sırasıyla sayılan doğrusal indeksi yazar. Seçilen ifadenin aldığı elemanlar vurgulanır ve sonuç yanda gösterilir.",
    en: 640, boy: 250, icerik: matrisCiz(MATRIS_SECIMLERI[3]!), etkilesim: "matrisindeks",
  },
  {
    kod: "G-H2-03",
    baslik: "Eleman bazında çarpım ve matris çarpımı",
    aciklama: "Solda .* aynı konumdaki elemanları çarpar. Sağda * birinci matrisin satırıyla ikincinin sütununu çarpıp toplar.",
    en: 660, boy: 160, icerik: carpimlar(),
  },
  {
    kod: "G-H2-04",
    baslik: "Yatay ve dikey birleştirme",
    aciklama: "Virgülle ya da horzcat ile matrisler yan yana, noktalı virgülle ya da vertcat ile alt alta birleştirilir. Yan yana birleştirmede satır sayıları, alt alta birleştirmede sütun sayıları aynı olmalıdır.",
    en: 640, boy: 145, icerik: birlestirme(),
  },
  {
    kod: "G-H2-05",
    baslik: "İstatistik fonksiyonlarında boyut",
    aciklama: "Dörde üçlük bir matris. Boyut 1'de her sütun, boyut 2'de her satır, 'all' seçeneğinde bütün elemanlar tek bir değere indirgenir.",
    en: 640, boy: 260, icerik: istatCiz("mean", 1, 0), etkilesim: "istatboyut",
  },
];
