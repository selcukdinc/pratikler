// Yerleşik fonksiyonlar: matematik, dizi kurma, istatistik, sinyal işleme,
// metin ve çizim.

import {
  boyutDenetle, hata, mantik, mat, matris, metin, metinMi, metneCevir, numel, sayi, skaler, tamsayi, type Deger, type Fonk,
  type Matris, satirVektor, vektorMu, bos, boyutYazisi, sinifAdi,
} from "./deger";
import { devrik, dikeyBirlestir, elemanEleman, ikiliIslem, indeksle, matrisCarp, yatayBirlestir } from "./islem";
import { adliYaz, degerYaz, mat2str, num2str, sprintf, kacisCoz } from "./gosterim";
import { fftKarmasik } from "./fft";
import {
  aktifEksen, aktifSekil, altCizim, eksenTemizle, renkCoz, sekilAc, seriEkle, stilCoz, yeniCizim, type Seri, type SeriTuru,
} from "./cizim";
import type { Yorumlayici } from "./yorumla";

export type Yerlesik = (y: Yorumlayici, args: Deger[], nargout: number, kapsam: Map<string, Deger>) => Deger[];

const M = (d: Deger | undefined, ne = "Argüman"): Matris => {
  if (!d) return hata(`${ne} eksik.`);
  return matris(d, ne);
};

function enAz(args: Deger[], n: number, ad: string) {
  if (args.length < n) hata(`${ad} en az ${n} argüman ister.`);
}

// ---- Eleman bazında fonksiyonlar ----

function gercekHarita(f: (v: number) => number, mantiksal = false): Yerlesik {
  return (_y, args) => {
    const a = M(args[0]);
    return [mat(a.r, a.c, a.re.map(f), null, mantiksal ? "logical" : "double")];
  };
}

type KarmasikF = (re: number, im: number) => [number, number];
function karmasikHarita(gercek: (v: number) => number | null, karm: KarmasikF): Yerlesik {
  return (_y, args) => {
    const a = M(args[0]);
    const n = numel(a);
    const re = new Array<number>(n);
    let im: number[] | null = null;
    for (let k = 0; k < n; k++) {
      const ai = a.im?.[k] ?? 0;
      const g = ai === 0 ? gercek(a.re[k]!) : null;
      if (g !== null) {
        re[k] = g;
        if (im) im[k] = 0;
      } else {
        const [x, y] = karm(a.re[k]!, ai);
        re[k] = x;
        if (!im) im = new Array<number>(n).fill(0);
        im[k] = y;
      }
    }
    return [mat(a.r, a.c, re, im)];
  };
}

const kExp: KarmasikF = (a, b) => [Math.exp(a) * Math.cos(b), Math.exp(a) * Math.sin(b)];
const kLog: KarmasikF = (a, b) => [Math.log(Math.hypot(a, b)), Math.atan2(b, a)];
const kSqrt: KarmasikF = (a, b) => {
  const r = Math.hypot(a, b);
  const x = Math.sqrt((r + a) / 2);
  const y = Math.sign(b || 1) * Math.sqrt((r - a) / 2);
  return [x, y];
};
const kCos: KarmasikF = (a, b) => [Math.cos(a) * Math.cosh(b), -Math.sin(a) * Math.sinh(b)];
const kSin: KarmasikF = (a, b) => [Math.sin(a) * Math.cosh(b), Math.cos(a) * Math.sinh(b)];

function ikiliGercek(f: (a: number, b: number) => number, ad: string): Yerlesik {
  return (_y, args) => {
    enAz(args, 2, ad);
    const a = M(args[0]), b = M(args[1]);
    const r = elemanEleman("+", { ...a, im: null }, { ...b, im: null });
    const n = numel(r);
    const re = new Array<number>(n);
    const ar1 = a.r === 1, ac1 = a.c === 1, br1 = b.r === 1, bc1 = b.c === 1;
    for (let j = 0; j < r.c; j++)
      for (let i = 0; i < r.r; i++)
        re[j * r.r + i] = f(a.re[(ac1 ? 0 : j) * a.r + (ar1 ? 0 : i)]!, b.re[(bc1 ? 0 : j) * b.r + (br1 ? 0 : i)]!);
    return [mat(r.r, r.c, re)];
  };
}

// ---- İndirgeme (sum, mean, max ...) ----

// Varsayılan boyut: ilk 1'den büyük boyut (satır vektöründe 2)
// 0: 'all' (bütün elemanlar), 1: sütunlar, 2: satırlar
function boyutSec(a: Matris, args: Deger[], i: number): number {
  const secenekler = args.slice(1).filter((x) => metinMi(x)).map((x) => metneCevir(x).toLowerCase());
  if (secenekler.includes("omitnan")) hata("'omitnan' desteklenmiyor; NaN'ları önce ayıkla: x(~isnan(x)).");
  if (secenekler.includes("all")) return 0;
  if (args[i] !== undefined && !metinMi(args[i]!)) {
    const d = tamsayi(args[i]!, "Boyut");
    if (d !== 1 && d !== 2) hata("Boyut 1 ya da 2 olmalı.");
    return d;
  }
  return a.r === 1 ? 2 : 1;
}

// Her sütun (dim 1) ya da satır (dim 2) için f çağrılır
function indirge(a: Matris, dim: number, f: (re: number[], im: number[] | null) => [number, number]): Matris {
  if (dim === 0) {
    a = mat(numel(a), 1, a.re, a.im);
    dim = 1;
  }
  if (numel(a) === 0 && a.r === 0 && a.c === 0) {
    const [x, y] = f([], null);
    return mat(1, 1, [x], [y]);
  }
  const dilim = dim === 1 ? a.c : a.r;
  const boy = dim === 1 ? a.r : a.c;
  const re = new Array<number>(dilim), im = new Array<number>(dilim);
  for (let s = 0; s < dilim; s++) {
    const xr = new Array<number>(boy);
    const xi = a.im ? new Array<number>(boy) : null;
    for (let t = 0; t < boy; t++) {
      const k = dim === 1 ? s * a.r + t : t * a.r + s;
      xr[t] = a.re[k]!;
      if (xi) xi[t] = a.im![k]!;
    }
    [re[s], im[s]] = f(xr, xi);
  }
  return dim === 1 ? mat(1, dilim, re, im) : mat(dilim, 1, re, im);
}

const toplamF = (re: number[], im: number[] | null): [number, number] => [
  re.reduce((t, v) => t + v, 0),
  im ? im.reduce((t, v) => t + v, 0) : 0,
];

function indirgeyen(f: (re: number[], im: number[] | null) => [number, number]): Yerlesik {
  return (_y, args) => {
    const a = M(args[0]);
    return [indirge(a, boyutSec(a, args, 1), f)];
  };
}

function siraliMedyan(x: number[]): number {
  if (!x.length) return Number.NaN;
  const s = [...x].sort((p, q) => p - q);
  const o = Math.floor(s.length / 2);
  return s.length % 2 ? s[o]! : (s[o - 1]! + s[o]!) / 2;
}

function varyans(x: number[], w: number): number {
  const n = x.length;
  if (n === 0) return Number.NaN;
  if (n === 1) return 0;
  const m = x.reduce((t, v) => t + v, 0) / n;
  return x.reduce((t, v) => t + (v - m) ** 2, 0) / (w === 1 ? n : n - 1);
}

// max/min: tek argümanla [m, i]; iki argümanla eleman bazında
function enUc(buyuk: boolean): Yerlesik {
  return (_y, args, nargout) => {
    const a = M(args[0]);
    const kars = (p: number, q: number) => (buyuk ? p > q : p < q);
    if (args.length >= 2 && numel(M(args[1])) > 0) {
      const b = M(args[1]);
      const r = elemanEleman("+", { ...a, im: null }, { ...b, im: null });
      const re = r.re.map((_, k) => {
        const i = k % r.r, j = Math.floor(k / r.r);
        const p = a.re[(a.c === 1 ? 0 : j) * a.r + (a.r === 1 ? 0 : i)]!;
        const q = b.re[(b.c === 1 ? 0 : j) * b.r + (b.r === 1 ? 0 : i)]!;
        return Number.isNaN(p) ? q : Number.isNaN(q) ? p : kars(p, q) || p === q ? p : q;
      });
      return [mat(r.r, r.c, re)];
    }
    if (numel(a) === 0) return [bos(), bos()];
    const dim = boyutSec(a, args, 2);
    const anahtar = (re: number, im: number) => (a.im ? Math.hypot(re, im) : re);
    const indisler: number[] = [];
    const sonuc = indirge(a, dim, (re, im) => {
      let en = -1;
      for (let k = 0; k < re.length; k++) {
        if (Number.isNaN(re[k]!)) continue;
        if (en < 0 || kars(anahtar(re[k]!, im?.[k] ?? 0), anahtar(re[en]!, im?.[en] ?? 0))) en = k;
      }
      indisler.push(en < 0 ? 1 : en + 1);
      return en < 0 ? [Number.NaN, 0] : [re[en]!, im?.[en] ?? 0];
    });
    const out: Deger[] = [sonuc];
    if (nargout > 1) out.push(mat(sonuc.r, sonuc.c, indisler));
    return out;
  };
}

// ---- Dizi kurma ----

function boyutlar(args: Deger[], ad: string): [number, number] {
  const sayisal = args.filter((a) => !metinMi(a));
  if (sayisal.length === 0) return [1, 1];
  if (sayisal.length === 1) {
    const a = M(sayisal[0]);
    if (numel(a) === 1) return [a.re[0]!, a.re[0]!].map((v) => Math.max(0, Math.floor(v))) as [number, number];
    if (numel(a) >= 2) return [Math.max(0, Math.floor(a.re[0]!)), Math.max(0, Math.floor(a.re[1]!))];
    return hata(`${ad}: boyut boş olamaz.`);
  }
  const r = skaler(sayisal[0]!, `${ad} satır sayısı`), c = skaler(sayisal[1]!, `${ad} sütun sayısı`);
  return [Math.max(0, Math.floor(r)), Math.max(0, Math.floor(c))];
}

function doldur(f: (y: Yorumlayici, k: number) => number, ad: string): Yerlesik {
  return (y, args) => {
    const [r, c] = boyutlar(args, ad);
    boyutDenetle(r, c);
    const re = new Array<number>(r * c);
    for (let k = 0; k < r * c; k++) re[k] = f(y, k);
    return [mat(r, c, re)];
  };
}

const vektor = (a: Matris) => ({ re: a.re, im: a.im });
const ayniYon = (a: Matris, re: number[], im: number[] | null = null) => (a.c === 1 && a.r > 1 ? mat(re.length, 1, re, im) : mat(1, re.length, re, im));

// ---- Sinyal işleme ----

function konvolusyon(a: Matris, b: Matris, bicim = "full"): Matris {
  const na = numel(a), nb = numel(b);
  if (!na || !nb) return mat(1, 0, []);
  const n = na + nb - 1;
  const re = new Array<number>(n).fill(0);
  const karm = a.im || b.im;
  const im = karm ? new Array<number>(n).fill(0) : null;
  for (let i = 0; i < na; i++)
    for (let j = 0; j < nb; j++) {
      const ar = a.re[i]!, ai = a.im?.[i] ?? 0, br = b.re[j]!, bi = b.im?.[j] ?? 0;
      re[i + j] += ar * br - ai * bi;
      if (im) im[i + j] += ar * bi + ai * br;
    }
  let bas = 0, boy = n;
  if (bicim === "same") {
    bas = Math.floor((nb - 1) / 2) + ((nb - 1) % 2 ? 1 : 0) - ((nb - 1) % 2 ? 1 : 0);
    bas = Math.ceil((nb - 1) / 2);
    boy = na;
  } else if (bicim === "valid") {
    bas = nb - 1;
    boy = Math.max(0, na - nb + 1);
  } else if (bicim !== "full") hata("conv biçimi 'full', 'same' ya da 'valid' olmalı.");
  const r2 = re.slice(bas, bas + boy), i2 = im ? im.slice(bas, bas + boy) : null;
  // Sonuç, iki vektör de sütunsa sütun; değilse satır
  return a.c === 1 && a.r > 1 && (b.c === 1 || numel(b) === 1) ? mat(r2.length, 1, r2, i2) : mat(1, r2.length, r2, i2);
}

function fftArgs(args: Deger[], ters: boolean): Matris {
  const a = M(args[0]);
  let n = numel(a);
  const sutunlar = a.r > 1 && a.c > 1;
  if (args[1] !== undefined && numel(M(args[1])) > 0) n = tamsayi(args[1], "FFT uzunluğu");
  if (n < 0) hata("FFT uzunluğu negatif olamaz.");
  const tekVektor = (re: number[], im: number[]) => {
    const r = re.slice(0, n), i = im.slice(0, n);
    while (r.length < n) {
      r.push(0);
      i.push(0);
    }
    const [x, y] = fftKarmasik(r, i, ters);
    if (ters) return [x.map((v) => v / n), y.map((v) => v / n)];
    return [x, y];
  };
  if (!sutunlar) {
    const [x, y] = tekVektor(a.re, a.im ?? new Array<number>(numel(a)).fill(0));
    return a.r === 1 ? mat(1, n, x!, y!) : mat(n, 1, x!, y!);
  }
  const re: number[] = [], im: number[] = [];
  for (let j = 0; j < a.c; j++) {
    const [x, y] = tekVektor(a.re.slice(j * a.r, (j + 1) * a.r), a.im ? a.im.slice(j * a.r, (j + 1) * a.r) : new Array<number>(a.r).fill(0));
    re.push(...x!);
    im.push(...y!);
  }
  return mat(n, a.c, re, im);
}

function kaydir(a: Matris, k: number): Matris {
  const n = numel(a);
  if (!n) return a;
  const s = ((k % n) + n) % n;
  const re = a.re.map((_, i) => a.re[(i - s + n) % n]!);
  const im = a.im ? a.im.map((_, i) => a.im![(i - s + n) % n]!) : null;
  return mat(a.r, a.c, re, im, a.sinif);
}

function filtre(b: Matris, a: Matris, x: Matris): Matris {
  if (!numel(a) || a.re[0] === 0) hata("filter: a(1) sıfır olamaz.");
  const a0 = a.re[0]!;
  const bb = b.re.map((v) => v / a0), aa = a.re.map((v) => v / a0);
  const n = numel(x);
  const y = new Array<number>(n).fill(0);
  for (let k = 0; k < n; k++) {
    let t = 0;
    for (let i = 0; i < bb.length; i++) if (k - i >= 0) t += bb[i]! * x.re[k - i]!;
    for (let i = 1; i < aa.length; i++) if (k - i >= 0) t -= aa[i]! * y[k - i]!;
    y[k] = t;
  }
  return ayniYon(x, y);
}

// ---- Metin ----

function metinArg(d: Deger | undefined, ad: string): string {
  if (!d || !metinMi(d)) return hata(`${ad} bir metin olmalı (tırnak içinde).`);
  return metneCevir(d);
}

function bicimDegerleri(args: Deger[]): (number | string)[] {
  const out: (number | string)[] = [];
  for (const a of args) {
    const m = M(a);
    if (m.sinif === "char") out.push(metneCevir(m));
    else for (const v of m.re) out.push(v);
  }
  return out;
}

// ---- Çizim ----

function cizgiCiz(tur: SeriTuru): Yerlesik {
  return (y, args) => {
    const e = aktifEksen(y.cizim);
    const kalan = [...args];
    // Sondaki ad-değer çiftleri ('LineWidth', 2, 'Color', 'r', 'filled')
    let kalinlik = tur === "stem" ? 1.2 : 1.5;
    let renk: string | null = null;
    let dolu = false;
    let gosterge: string | null = null;
    let isaretAyar: string | null = null;
    const gruplar: { x: Matris | null; y: Matris; stil: ReturnType<typeof stilCoz> }[] = [];
    let i = 0;
    while (i < kalan.length) {
      const a = kalan[i]!;
      if (metinMi(a)) {
        const s = metneCevir(a);
        const st = stilCoz(s);
        if (st && gruplar.length && !gruplar.at(-1)!.stil) {
          gruplar.at(-1)!.stil = st;
          i++;
          continue;
        }
        const ad = s.toLowerCase();
        if (ad === "filled") {
          dolu = true;
          i++;
          continue;
        }
        const deger = kalan[i + 1];
        if (deger === undefined) hata(`'${s}' için bir değer bekleniyordu.`);
        if (ad === "linewidth") kalinlik = skaler(deger!, "LineWidth");
        else if (ad === "color") renk = metinMi(deger!) ? renkCoz(metneCevir(deger!)) : renkCoz(M(deger).re);
        else if (ad === "displayname") gosterge = metneCevir(deger!);
        else if (ad === "marker") isaretAyar = metneCevir(deger!);
        else if (ad === "markerfacecolor") dolu = true;
        else if (!["markersize", "linestyle", "basevalue", "facecolor", "edgecolor", "facealpha", "barwidth", "normalization", "binwidth", "numbins"].includes(ad))
          hata(`Bilinmeyen çizim seçeneği: '${s}'.`);
        i += 2;
        continue;
      }
      const ilk = M(a);
      const ikinci = kalan[i + 1];
      if (ikinci !== undefined && !metinMi(ikinci)) {
        gruplar.push({ x: ilk, y: M(ikinci), stil: null });
        i += 2;
      } else {
        gruplar.push({ x: null, y: ilk, stil: null });
        i += 1;
      }
    }
    if (!gruplar.length) hata(`${tur} çizilecek veri ister, ör. ${tur}(x, y).`);
    // hold off iken önceki seriler silinir; bu çağrıdaki seriler birlikte kalır
    const eskiTut = e.tut;
    if (!eskiTut) eksenTemizle2(e);
    e.tut = true;
    for (const g of gruplar) {
      const yv = g.y;
      // Matris: her sütun ayrı seri
      const sutunlar: number[][] = [];
      if (yv.r > 1 && yv.c > 1) {
        const uzun = g.x && numel(g.x) === yv.c && numel(g.x) !== yv.r;
        if (uzun) for (let r = 0; r < yv.r; r++) sutunlar.push(Array.from({ length: yv.c }, (_, c) => yv.re[c * yv.r + r]!));
        else for (let c = 0; c < yv.c; c++) sutunlar.push(yv.re.slice(c * yv.r, (c + 1) * yv.r));
      } else sutunlar.push([...yv.re]);
      for (const ys of sutunlar) {
        const xs = g.x ? [...g.x.re] : ys.map((_, k) => k + 1);
        if (xs.length !== ys.length)
          hata(`${tur}: x ve y aynı uzunlukta olmalı (x: ${xs.length}, y: ${ys.length} eleman).`);
        const st = g.stil;
        let isaret = st?.isaret ?? isaretAyar;
        if (isaret === "none") isaret = null;
        if (tur === "stem" && !isaret) isaret = "o";
        if (tur === "scatter" && !isaret) isaret = "o";
        const cizgi = st?.cizgi ?? (st?.isaret && tur === "plot" ? "none" : "-");
        seriEkle(e, { tur, x: xs, y: ys, renk: renk ?? st?.renk ?? null, cizgi, isaret, dolu, kalinlik });
        if (gosterge) e.gosterge = [...(e.gosterge ?? []), gosterge];
      }
    }
    e.tut = eskiTut;
    return [];
  };
}

function histogramHesap(veri: number[], args: Deger[]): { kenarlar: number[]; sayilar: number[] } {
  const x = veri.filter((v) => Number.isFinite(v));
  let kenarlar: number[];
  const b = args[0] && !metinMi(args[0]) ? M(args[0]) : null;
  if (b && numel(b) > 1) kenarlar = [...b.re];
  else {
    const min = x.length ? Math.min(...x) : 0;
    const max = x.length ? Math.max(...x) : 1;
    let n = b && numel(b) === 1 ? Math.max(1, Math.round(b.re[0]!)) : 0;
    if (!n) {
      // Otomatik kutu sayısı: Scott kuralına yakın
      const s = Math.sqrt(varyans(x, 0));
      const g = s > 0 ? 3.5 * s / Math.cbrt(x.length) : 1;
      n = Math.min(100, Math.max(1, Math.ceil((max - min) / g)));
    }
    if (max === min) kenarlar = Array.from({ length: n + 1 }, (_, k) => min - 0.5 + k / n);
    else kenarlar = Array.from({ length: n + 1 }, (_, k) => (k === n ? max : min + ((max - min) * k) / n));
  }
  const sayilar = new Array<number>(kenarlar.length - 1).fill(0);
  for (const v of x) {
    if (v < kenarlar[0]! || v > kenarlar.at(-1)!) continue;
    let lo = 0, hi = kenarlar.length - 2;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (v >= kenarlar[mid]!) lo = mid;
      else hi = mid - 1;
    }
    sayilar[lo]!++;
  }
  return { kenarlar, sayilar };
}

function normalizeEt(sayilar: number[], kenarlar: number[], args: Deger[], toplam: number): number[] {
  const i = args.findIndex((a) => metinMi(a) && metneCevir(a).toLowerCase() === "normalization");
  if (i < 0) return sayilar;
  const tur = metneCevir(args[i + 1] ?? metin("count")).toLowerCase();
  if (tur === "probability") return sayilar.map((v) => v / toplam);
  if (tur === "pdf") return sayilar.map((v, k) => v / toplam / (kenarlar[k + 1]! - kenarlar[k]!));
  if (tur === "count") return sayilar;
  if (tur === "cdf") {
    let t = 0;
    return sayilar.map((v) => (t += v) / toplam);
  }
  return hata(`Normalization '${tur}' desteklenmiyor (count, probability, pdf ya da cdf kullan).`);
}

function eksenMetni(alan: "baslik" | "xEtiket" | "yEtiket"): Yerlesik {
  return (y, args) => {
    const e = aktifEksen(y.cizim);
    e[alan] = args[0] ? (metinMi(args[0]) ? metneCevir(args[0]) : num2str(M(args[0]))) : "";
    return [];
  };
}

function acKapa(alan: "tut" | "izgara"): Yerlesik {
  return (y, args) => {
    const e = aktifEksen(y.cizim);
    const s = args[0] ? metneCevir(args[0]).toLowerCase() : "";
    e[alan] = s === "on" ? true : s === "off" ? false : s === "minor" ? true : !e[alan];
    return [];
  };
}

function sinir(alan: "xSinir" | "ySinir"): Yerlesik {
  return (y, args) => {
    const e = aktifEksen(y.cizim);
    if (args[0] && metinMi(args[0])) {
      e[alan] = null;
      return [];
    }
    const a = M(args[0], "Sınır");
    if (numel(a) !== 2 || !(a.re[0]! < a.re[1]!)) hata("Sınır [alt üst] biçiminde ve alt < üst olmalı.");
    e[alan] = [a.re[0]!, a.re[1]!];
    return [];
  };
}

// ---- Tablo ----

export const YERLESIKLER: Record<string, Yerlesik> = {
  // Sabitler
  pi: () => [sayi(Math.PI)],
  eps: () => [sayi(Number.EPSILON)],
  Inf: (_y, a) => [doldurSabit(a, Infinity)],
  inf: (_y, a) => [doldurSabit(a, Infinity)],
  NaN: (_y, a) => [doldurSabit(a, Number.NaN)],
  nan: (_y, a) => [doldurSabit(a, Number.NaN)],
  i: () => [mat(1, 1, [0], [1])],
  j: () => [mat(1, 1, [0], [1])],
  true: (_y, a) => [{ ...doldurSabit(a, 1), sinif: "logical" }],
  false: (_y, a) => [{ ...doldurSabit(a, 0), sinif: "logical" }],

  // Temel matematik
  abs: (_y, args) => {
    const a = M(args[0]);
    return [mat(a.r, a.c, a.re.map((v, k) => (a.im ? Math.hypot(v, a.im[k]!) : Math.abs(v))))];
  },
  sqrt: karmasikHarita((v) => (v >= 0 ? Math.sqrt(v) : null), kSqrt),
  exp: karmasikHarita((v) => Math.exp(v), kExp),
  log: karmasikHarita((v) => (v >= 0 ? Math.log(v) : null), kLog),
  log10: karmasikHarita((v) => (v >= 0 ? Math.log10(v) : null), (a, b) => { const [x, y] = kLog(a, b); return [x / Math.LN10, y / Math.LN10]; }),
  log2: karmasikHarita((v) => (v >= 0 ? Math.log2(v) : null), (a, b) => { const [x, y] = kLog(a, b); return [x / Math.LN2, y / Math.LN2]; }),
  sin: karmasikHarita(Math.sin, kSin),
  cos: karmasikHarita(Math.cos, kCos),
  tan: gercekHarita(Math.tan),
  asin: gercekHarita(Math.asin),
  acos: gercekHarita(Math.acos),
  atan: gercekHarita(Math.atan),
  sinh: gercekHarita(Math.sinh),
  cosh: gercekHarita(Math.cosh),
  tanh: gercekHarita(Math.tanh),
  atan2: ikiliGercek(Math.atan2, "atan2"),
  hypot: ikiliGercek(Math.hypot, "hypot"),
  round: (_y, args) => {
    const a = M(args[0]);
    const n = args[1] ? tamsayi(args[1], "Basamak") : 0;
    const f = (v: number) => { const p = 10 ** n; return (Math.sign(v) * Math.round(Math.abs(v) * p)) / p; };
    return [mat(a.r, a.c, a.re.map(f), a.im ? a.im.map(f) : null)];
  },
  floor: gercekHarita(Math.floor),
  ceil: gercekHarita(Math.ceil),
  fix: gercekHarita(Math.trunc),
  sign: gercekHarita(Math.sign),
  mod: ikiliGercek((a, b) => (b === 0 ? a : a - Math.floor(a / b) * b), "mod"),
  rem: ikiliGercek((a, b) => (b === 0 ? a : a - Math.trunc(a / b) * b), "rem"),
  real: (_y, args) => { const a = M(args[0]); return [mat(a.r, a.c, [...a.re])]; },
  imag: (_y, args) => { const a = M(args[0]); return [mat(a.r, a.c, a.im ? [...a.im] : new Array<number>(numel(a)).fill(0))]; },
  conj: (_y, args) => { const a = M(args[0]); return [mat(a.r, a.c, [...a.re], a.im ? a.im.map((v) => -v) : null)]; },
  angle: (_y, args) => { const a = M(args[0]); return [mat(a.r, a.c, a.re.map((v, k) => Math.atan2(a.im?.[k] ?? 0, v)))]; },
  isreal: (_y, args) => [mantik(!M(args[0]).im)],
  factorial: gercekHarita((n) => { let t = 1; for (let k = 2; k <= n; k++) t *= k; return t; }),
  nchoosek: (_y, args) => {
    const n = tamsayi(args[0]!, "n"), k = tamsayi(args[1]!, "k");
    let t = 1;
    for (let i = 1; i <= k; i++) t = (t * (n - k + i)) / i;
    return [sayi(Math.round(t))];
  },
  power: (_y, args) => [elemanEleman(".^", M(args[0]), M(args[1]))],
  times: (_y, args) => [elemanEleman(".*", M(args[0]), M(args[1]))],
  plus: (_y, args) => [elemanEleman("+", M(args[0]), M(args[1]))],
  minus: (_y, args) => [elemanEleman("-", M(args[0]), M(args[1]))],
  mtimes: (_y, args) => [matrisCarp(M(args[0]), M(args[1]))],
  isnan: gercekHarita((v) => (Number.isNaN(v) ? 1 : 0), true),
  isinf: gercekHarita((v) => (v === Infinity || v === -Infinity ? 1 : 0), true),
  isfinite: gercekHarita((v) => (Number.isFinite(v) ? 1 : 0), true),
  db: gercekHarita((v) => 20 * Math.log10(Math.abs(v))),
  mag2db: gercekHarita((v) => 20 * Math.log10(v)),
  db2mag: gercekHarita((v) => 10 ** (v / 20)),
  pow2db: gercekHarita((v) => 10 * Math.log10(v)),
  db2pow: gercekHarita((v) => 10 ** (v / 10)),
  sinc: gercekHarita((v) => (v === 0 ? 1 : Math.sin(Math.PI * v) / (Math.PI * v))),
  nextpow2: gercekHarita((v) => (v === 0 ? 0 : Math.ceil(Math.log2(Math.abs(v))))),
  deg2rad: gercekHarita((v) => (v * Math.PI) / 180),
  rad2deg: gercekHarita((v) => (v * 180) / Math.PI),
  square: (_y, args) => {
    const a = M(args[0]);
    const duty = args[1] ? skaler(args[1], "Doluluk oranı") / 100 : 0.5;
    return [mat(a.r, a.c, a.re.map((t) => { const f = (((t / (2 * Math.PI)) % 1) + 1) % 1; return f < duty ? 1 : -1; }))];
  },
  sawtooth: (_y, args) => {
    const a = M(args[0]);
    const w = args[1] ? skaler(args[1], "Genişlik") : 1;
    return [mat(a.r, a.c, a.re.map((t) => {
      const f = (((t / (2 * Math.PI)) % 1) + 1) % 1;
      if (w === 1) return 2 * f - 1;
      if (w === 0) return 1 - 2 * f;
      return f < w ? -1 + (2 * f) / w : 1 - (2 * (f - w)) / (1 - w);
    }))];
  },
  rectpuls: (_y, args) => {
    const a = M(args[0]);
    const w = args[1] ? skaler(args[1], "Genişlik") : 1;
    return [mat(a.r, a.c, a.re.map((t) => (Math.abs(t) < w / 2 || t === -w / 2 ? 1 : 0)))];
  },
  heaviside: gercekHarita((v) => (v > 0 ? 1 : v === 0 ? 0.5 : 0)),

  // Dizi kurma
  zeros: doldur(() => 0, "zeros"),
  ones: doldur(() => 1, "ones"),
  rand: doldur((y) => y.rastgele(), "rand"),
  randn: doldur((y) => y.normal(), "randn"),
  randperm: (y, args) => {
    const n = tamsayi(args[0]!, "randperm n");
    const k = args[1] ? tamsayi(args[1], "randperm k") : n;
    if (n < 0 || k < 0 || k > n) hata("randperm(n, k): 0 ≤ k ≤ n olmalı.");
    boyutDenetle(1, n);
    const d = Array.from({ length: n }, (_, i) => i + 1);
    for (let i = 0; i < k; i++) {
      const j = i + Math.floor(y.rastgele() * (n - i));
      [d[i], d[j]] = [d[j]!, d[i]!];
    }
    return [mat(1, k, d.slice(0, k))];
  },
  randi: (y, args) => {
    const s = M(args[0], "randi üst sınırı");
    const [lo, hi] = numel(s) >= 2 ? [s.re[0]!, s.re[1]!] : [1, s.re[0]!];
    const [r, c] = boyutlar(args.slice(1), "randi");
    boyutDenetle(r, c);
    return [mat(r, c, Array.from({ length: r * c }, () => lo + Math.floor(y.rastgele() * (hi - lo + 1))))];
  },
  eye: (_y, args) => {
    const [r, c] = boyutlar(args, "eye");
    boyutDenetle(r, c);
    return [mat(r, c, Array.from({ length: r * c }, (_, k) => (k % r === Math.floor(k / r) ? 1 : 0)))];
  },
  linspace: (_y, args) => {
    enAz(args, 2, "linspace");
    const a = skaler(args[0]!, "linspace başlangıcı"), b = skaler(args[1]!, "linspace sonu");
    const n = args[2] ? Math.floor(skaler(args[2], "linspace eleman sayısı")) : 100;
    boyutDenetle(1, n);
    if (n === 1) return [sayi(b)];
    return [satirVektor(Array.from({ length: Math.max(0, n) }, (_, k) => (k === n - 1 ? b : a + ((b - a) * k) / (n - 1))))];
  },
  logspace: (_y, args) => {
    const a = skaler(args[0]!, "a"), b = skaler(args[1]!, "b");
    const n = args[2] ? Math.floor(skaler(args[2], "n")) : 50;
    return [satirVektor(Array.from({ length: n }, (_, k) => 10 ** (n === 1 ? b : a + ((b - a) * k) / (n - 1))))];
  },
  colon: (_y, args) => {
    const a = skaler(args[0]!, "a");
    const [d, b] = args.length > 2 ? [skaler(args[1]!, "adım"), skaler(args[2]!, "b")] : [1, skaler(args[1]!, "b")];
    const n = d === 0 || (b - a) / d < 0 ? 0 : Math.floor((b - a) / d + 1e-10) + 1;
    return [satirVektor(Array.from({ length: n }, (_, k) => a + k * d))];
  },
  repmat: (_y, args) => {
    const a = M(args[0]);
    const [m, n] = boyutlar(args.slice(1), "repmat");
    boyutDenetle(a.r * m, a.c * n);
    const r = a.r * m, c = a.c * n;
    const re = new Array<number>(r * c);
    const im = a.im ? new Array<number>(r * c) : null;
    for (let j = 0; j < c; j++)
      for (let i = 0; i < r; i++) {
        const k = (j % a.c) * a.r + (i % a.r);
        re[j * r + i] = a.re[k]!;
        if (im) im[j * r + i] = a.im![k]!;
      }
    return [mat(r, c, re, im, a.sinif)];
  },
  reshape: (_y, args) => {
    const a = M(args[0]);
    let r: number, c: number;
    if (args.length === 2) [r, c] = boyutlar([args[1]!], "reshape");
    else {
      const ra = M(args[1]), ca = M(args[2]);
      r = numel(ra) ? ra.re[0]! : numel(a) / ca.re[0]!;
      c = numel(ca) ? ca.re[0]! : numel(a) / r;
    }
    if (r * c !== numel(a)) hata(`reshape: ${numel(a)} eleman ${r}×${c} boyutuna sığmaz.`);
    return [mat(r, c, [...a.re], a.im ? [...a.im] : null, a.sinif)];
  },
  meshgrid: (_y, args, nargout) => {
    const x = M(args[0]), yv = args[1] ? M(args[1]) : x;
    const r = numel(yv), c = numel(x);
    boyutDenetle(r, c);
    const X = mat(r, c, Array.from({ length: r * c }, (_, k) => x.re[Math.floor(k / r)]!));
    const Y = mat(r, c, Array.from({ length: r * c }, (_, k) => yv.re[k % r]!));
    return nargout > 1 ? [X, Y] : [X];
  },

  // Boyut bilgisi
  size: (_y, args, nargout) => {
    const a = args[0]!;
    const [r, c] = a.tur === "fonk" ? [1, 1] : [a.r, a.c];
    if (args[1]) {
      const d = tamsayi(args[1], "Boyut");
      return [sayi(d === 1 ? r : d === 2 ? c : 1)];
    }
    if (nargout >= 2) return [sayi(r), sayi(c)];
    return [satirVektor([r, c])];
  },
  length: (_y, args) => { const a = M(args[0]); return [sayi(numel(a) === 0 ? 0 : Math.max(a.r, a.c))]; },
  numel: (_y, args) => [sayi(numel(M(args[0])))],
  ndims: () => [sayi(2)],
  isempty: (_y, args) => [mantik(numel(M(args[0])) === 0)],
  isscalar: (_y, args) => [mantik(numel(M(args[0])) === 1)],
  isvector: (_y, args) => [mantik(vektorMu(M(args[0])))],
  isrow: (_y, args) => [mantik(M(args[0]).r === 1)],
  iscolumn: (_y, args) => [mantik(M(args[0]).c === 1)],
  ischar: (_y, args) => [mantik(metinMi(args[0]!))],
  isnumeric: (_y, args) => [mantik(args[0]!.tur === "matris" && args[0]!.sinif === "double")],
  islogical: (_y, args) => [mantik(args[0]!.tur === "matris" && args[0]!.sinif === "logical")],
  isequal: (_y, args) => {
    const a = M(args[0]), b = M(args[1]);
    return [mantik(a.r === b.r && a.c === b.c && a.re.every((v, k) => v === b.re[k]) && (a.im ?? []).every((v, k) => v === (b.im?.[k] ?? 0)))];
  },
  class: (_y, args) => [metin(args[0]!.tur === "fonk" ? "function_handle" : args[0]!.sinif)],
  double: (_y, args) => { const a = M(args[0]); return [{ ...a, sinif: "double" }]; },
  logical: (_y, args) => { const a = M(args[0]); return [mat(a.r, a.c, a.re.map((v) => (v ? 1 : 0)), null, "logical")]; },
  char: (_y, args) => { const a = M(args[0]); return [{ ...a, sinif: "char" }]; },

  // Dizi işlemleri
  sum: indirgeyen(toplamF),
  prod: indirgeyen((re, im) => {
    let pr = 1, pi = 0;
    re.forEach((v, k) => { const w = im?.[k] ?? 0; [pr, pi] = [pr * v - pi * w, pr * w + pi * v]; });
    return [pr, pi];
  }),
  mean: indirgeyen((re, im) => { const [a, b] = toplamF(re, im); return [a / re.length, b / re.length]; }),
  median: indirgeyen((re) => [siraliMedyan(re), 0]),
  mode: indirgeyen((re) => {
    const say = new Map<number, number>();
    for (const v of re) say.set(v, (say.get(v) ?? 0) + 1);
    let en = Number.NaN, n = 0;
    for (const [v, k] of say) if (k > n || (k === n && v < en)) [en, n] = [v, k];
    return [en, 0];
  }),
  std: (_y, args) => {
    const a = M(args[0]);
    const w = args[1] && numel(M(args[1])) ? skaler(args[1], "w") : 0;
    return [indirge(a, boyutSec(a, args, 2), (re) => [Math.sqrt(varyans(re, w)), 0])];
  },
  var: (_y, args) => {
    const a = M(args[0]);
    const w = args[1] && numel(M(args[1])) ? skaler(args[1], "w") : 0;
    return [indirge(a, boyutSec(a, args, 2), (re) => [varyans(re, w), 0])];
  },
  rms: indirgeyen((re, im) => [Math.sqrt(re.reduce((t, v, k) => t + v * v + (im?.[k] ?? 0) ** 2, 0) / re.length), 0]),
  max: enUc(true),
  min: enUc(false),
  cumsum: (_y, args) => {
    const a = M(args[0]);
    const dim = boyutSec(a, args, 1);
    const re = [...a.re];
    if (dim === 1) for (let j = 0; j < a.c; j++) for (let i = 1; i < a.r; i++) re[j * a.r + i]! += re[j * a.r + i - 1]!;
    else for (let i = 0; i < a.r; i++) for (let j = 1; j < a.c; j++) re[j * a.r + i]! += re[(j - 1) * a.r + i]!;
    return [mat(a.r, a.c, re)];
  },
  cumprod: (_y, args) => {
    const a = M(args[0]);
    const re = [...a.re];
    if (a.r === 1 || a.c === 1) for (let k = 1; k < re.length; k++) re[k]! *= re[k - 1]!;
    else for (let j = 0; j < a.c; j++) for (let i = 1; i < a.r; i++) re[j * a.r + i]! *= re[j * a.r + i - 1]!;
    return [mat(a.r, a.c, re)];
  },
  diff: (_y, args) => {
    let a = M(args[0]);
    const n = args[1] ? tamsayi(args[1], "Fark derecesi") : 1;
    for (let t = 0; t < n; t++) {
      if (a.r === 1 || a.c === 1) {
        const re = a.re.slice(1).map((v, k) => v - a.re[k]!);
        a = a.c === 1 && a.r > 1 ? mat(re.length, 1, re) : mat(1, re.length, re);
      } else {
        const re: number[] = [];
        for (let j = 0; j < a.c; j++) for (let i = 1; i < a.r; i++) re.push(a.re[j * a.r + i]! - a.re[j * a.r + i - 1]!);
        a = mat(a.r - 1, a.c, re);
      }
    }
    return [a];
  },
  sort: (_y, args, nargout) => {
    const a = M(args[0]);
    const azalan = args.some((x) => metinMi(x) && metneCevir(x).toLowerCase() === "descend");
    const sirala = (re: number[]) => {
      const ix = re.map((_, k) => k);
      ix.sort((p, q) => (azalan ? re[q]! - re[p]! : re[p]! - re[q]!) || p - q);
      return ix;
    };
    if (a.r === 1 || a.c === 1) {
      const ix = sirala(a.re);
      const out: Deger[] = [mat(a.r, a.c, ix.map((k) => a.re[k]!), a.im ? ix.map((k) => a.im![k]!) : null, a.sinif)];
      if (nargout > 1) out.push(mat(a.r, a.c, ix.map((k) => k + 1)));
      return out;
    }
    const re: number[] = [], ixs: number[] = [];
    for (let j = 0; j < a.c; j++) {
      const s = a.re.slice(j * a.r, (j + 1) * a.r);
      const ix = sirala(s);
      re.push(...ix.map((k) => s[k]!));
      ixs.push(...ix.map((k) => k + 1));
    }
    return nargout > 1 ? [mat(a.r, a.c, re), mat(a.r, a.c, ixs)] : [mat(a.r, a.c, re)];
  },
  find: (_y, args, nargout) => {
    const a = M(args[0]);
    const sinir = args[1] ? tamsayi(args[1], "find sınırı") : Infinity;
    const out: number[] = [];
    for (let k = 0; k < numel(a) && out.length < sinir; k++) if (a.re[k] !== 0 || (a.im?.[k] ?? 0) !== 0) out.push(k);
    if (nargout >= 2) {
      const sat = out.map((k) => (k % a.r) + 1), sut = out.map((k) => Math.floor(k / a.r) + 1);
      return [mat(out.length, 1, sat), mat(out.length, 1, sut)];
    }
    const re = out.map((k) => k + 1);
    return [a.r === 1 ? mat(1, re.length, re) : mat(re.length, 1, re)];
  },
  any: indirgeyen((re, im) => [re.some((v, k) => v !== 0 || (im?.[k] ?? 0) !== 0) ? 1 : 0, 0]),
  all: indirgeyen((re, im) => [re.every((v, k) => v !== 0 || (im?.[k] ?? 0) !== 0) ? 1 : 0, 0]),
  nnz: (_y, args) => [sayi(M(args[0]).re.filter((v) => v !== 0).length)],
  fliplr: (_y, args) => {
    const a = M(args[0]);
    return [indeksle(a, [":", satirVektor(Array.from({ length: a.c }, (_, k) => a.c - k))])];
  },
  flipud: (_y, args) => {
    const a = M(args[0]);
    return [indeksle(a, [satirVektor(Array.from({ length: a.r }, (_, k) => a.r - k)), ":"])];
  },
  flip: (_y, args) => {
    const a = M(args[0]);
    if (a.r === 1) return [indeksle(a, [":", satirVektor(Array.from({ length: a.c }, (_, k) => a.c - k))])];
    return [indeksle(a, [satirVektor(Array.from({ length: a.r }, (_, k) => a.r - k)), ":"])];
  },
  circshift: (_y, args) => {
    const a = M(args[0]);
    const k = tamsayi(args[1]!, "Kaydırma miktarı");
    if (a.r === 1 || a.c === 1) return [kaydir(a, k)];
    const re: number[] = [];
    for (let j = 0; j < a.c; j++) re.push(...kaydir(mat(a.r, 1, a.re.slice(j * a.r, (j + 1) * a.r)), k).re);
    return [mat(a.r, a.c, re)];
  },
  dot: (_y, args) => {
    const a = M(args[0]), b = M(args[1]);
    if (numel(a) !== numel(b)) hata("dot: vektörlerin uzunluğu aynı olmalı.");
    return [sayi(a.re.reduce((t, v, k) => t + v * b.re[k]!, 0))];
  },
  norm: (_y, args) => {
    const a = M(args[0]);
    const p = args[1] ? skaler(args[1], "p") : 2;
    if (p === Infinity) return [sayi(Math.max(...a.re.map(Math.abs)))];
    return [sayi(a.re.reduce((t, v, k) => t + Math.hypot(v, a.im?.[k] ?? 0) ** p, 0) ** (1 / p))];
  },
  trapz: (_y, args) => {
    const [x, yv] = args.length > 1 ? [M(args[0]), M(args[1])] : [null, M(args[0])];
    let t = 0;
    for (let k = 1; k < numel(yv); k++) t += ((x ? x.re[k]! - x.re[k - 1]! : 1) * (yv.re[k]! + yv.re[k - 1]!)) / 2;
    return [sayi(t)];
  },
  polyval: (_y, args) => {
    const p = M(args[0]), x = M(args[1]);
    return [mat(x.r, x.c, x.re.map((v) => p.re.reduce((t, c) => t * v + c, 0)))];
  },
  kron: (_y, args) => {
    const a = M(args[0]), b = M(args[1]);
    const r = a.r * b.r, c = a.c * b.c;
    const re = new Array<number>(r * c);
    for (let j = 0; j < c; j++) for (let i = 0; i < r; i++) re[j * r + i] = a.re[Math.floor(j / b.c) * a.r + Math.floor(i / b.r)]! * b.re[(j % b.c) * b.r + (i % b.r)]!;
    return [mat(r, c, re)];
  },
  inv: (_y, args) => {
    const a = M(args[0]);
    if (a.r !== a.c) hata("inv yalnızca kare matrisler için.");
    const I = mat(a.r, a.r, Array.from({ length: a.r * a.r }, (_, k) => (k % (a.r + 1) === 0 ? 1 : 0)));
    return [ikiliIslem("\\", a, I)];
  },
  det: (_y, args) => {
    const a = M(args[0]);
    if (a.r !== a.c) hata("det yalnızca kare matrisler için.");
    const n = a.r;
    const m = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => a.re[j * n + i]!));
    let d = 1;
    for (let k = 0; k < n; k++) {
      let p = k;
      for (let i = k + 1; i < n; i++) if (Math.abs(m[i]![k]!) > Math.abs(m[p]![k]!)) p = i;
      if (m[p]![k] === 0) return [sayi(0)];
      if (p !== k) { [m[k], m[p]] = [m[p]!, m[k]!]; d = -d; }
      d *= m[k]![k]!;
      for (let i = k + 1; i < n; i++) { const f = m[i]![k]! / m[k]![k]!; for (let j = k; j < n; j++) m[i]![j]! -= f * m[k]![j]!; }
    }
    return [sayi(d)];
  },
  transpose: (_y, args) => [devrik(M(args[0]), false)],
  horzcat: (_y, args) => [yatayBirlestir(args.map((a) => M(a)))],
  vertcat: (_y, args) => [dikeyBirlestir(args.map((a) => M(a)))],
  cat: (_y, args) => {
    const d = tamsayi(args[0]!, "cat boyutu");
    if (d !== 1 && d !== 2) hata("cat yalnızca 1 (dikey) ve 2 (yatay) boyutunu destekler.");
    const parcalar = args.slice(1).map((a) => M(a));
    return [d === 1 ? dikeyBirlestir(parcalar) : yatayBirlestir(parcalar)];
  },
  corrcoef: (_y, args) => {
    // Her sütun bir değişken; iki argümanda ikisi de tek sütuna açılır
    let a = M(args[0], "corrcoef verisi");
    if (args[1]) {
      const b = M(args[1], "corrcoef verisi");
      if (numel(a) !== numel(b)) hata("corrcoef: iki verinin eleman sayısı aynı olmalı.");
      a = mat(numel(a), 2, [...a.re, ...b.re]);
    } else if (a.r === 1) a = mat(a.c, 1, a.re);
    const n = a.r, k = a.c;
    const sut = Array.from({ length: k }, (_, j) => a.re.slice(j * n, j * n + n));
    const ort = sut.map((x) => x.reduce((t, v) => t + v, 0) / n);
    const kov = (i: number, j: number) => sut[i]!.reduce((t, v, m) => t + (v - ort[i]!) * (sut[j]![m]! - ort[j]!), 0);
    const re = new Array<number>(k * k);
    for (let i = 0; i < k; i++) for (let j = 0; j < k; j++) re[j * k + i] = i === j ? 1 : kov(i, j) / Math.sqrt(kov(i, i) * kov(j, j));
    return [mat(k, k, re)];
  },

  // Sinyal işleme
  conv: (_y, args) => {
    enAz(args, 2, "conv");
    return [konvolusyon(M(args[0]), M(args[1]), args[2] ? metinArg(args[2], "conv biçimi") : "full")];
  },
  filter: (_y, args) => {
    enAz(args, 3, "filter");
    return [filtre(M(args[0]), M(args[1]), M(args[2]))];
  },
  fft: (_y, args) => [fftArgs(args, false)],
  ifft: (_y, args) => {
    const r = fftArgs(args, true);
    // Simetrik girişte sanal kısım yuvarlama artığıdır
    if (r.im && r.im.every((v) => Math.abs(v) < 1e-10 * Math.max(1, ...r.re.map(Math.abs)))) return [mat(r.r, r.c, r.re)];
    return [r];
  },
  fftshift: (_y, args) => { const a = M(args[0]); return [kaydir(a, Math.floor(numel(a) / 2))]; },
  ifftshift: (_y, args) => { const a = M(args[0]); return [kaydir(a, -Math.floor(numel(a) / 2))]; },
  freqz: (_y, args, nargout) => {
    const b = M(args[0]);
    const a = args[1] ? M(args[1]) : sayi(1);
    const n = args[2] ? tamsayi(args[2], "Nokta sayısı") : 512;
    const w = Array.from({ length: n }, (_, k) => (Math.PI * k) / n);
    const deger = (p: Matris, om: number): [number, number] => {
      let r = 0, i = 0;
      p.re.forEach((c, k) => { r += c * Math.cos(-om * k); i += c * Math.sin(-om * k); });
      return [r, i];
    };
    const hr: number[] = [], hi: number[] = [];
    for (const om of w) {
      const [br, bi] = deger(b, om), [ar, ai] = deger(a, om);
      const p = ar * ar + ai * ai;
      hr.push((br * ar + bi * ai) / p);
      hi.push((bi * ar - br * ai) / p);
    }
    const H = mat(n, 1, hr, hi);
    return nargout > 1 ? [H, mat(n, 1, w)] : [H];
  },
  upsample: (_y, args) => {
    const a = M(args[0]);
    const n = tamsayi(args[1]!, "Kat");
    const re = new Array<number>(numel(a) * n).fill(0);
    a.re.forEach((v, k) => (re[k * n] = v));
    return [ayniYon(a, re)];
  },
  downsample: (_y, args) => {
    const a = M(args[0]);
    const n = tamsayi(args[1]!, "Kat");
    return [ayniYon(a, a.re.filter((_, k) => k % n === 0))];
  },
  xcorr: (_y, args, nargout) => {
    const x = M(args[0]);
    const yv = args[1] && !metinMi(args[1]) ? M(args[1]) : x;
    const n = Math.max(numel(x), numel(yv));
    const re: number[] = [];
    for (let l = -(n - 1); l <= n - 1; l++) {
      let t = 0;
      for (let k = 0; k < numel(x); k++) { const m = k - l; if (m >= 0 && m < numel(yv)) t += x.re[k]! * yv.re[m]!; }
      re.push(t);
    }
    const out: Deger[] = [ayniYon(x, re)];
    if (nargout > 1) out.push(ayniYon(x, re.map((_, k) => k - (n - 1))));
    return out;
  },
  hamming: (_y, args) => { const n = tamsayi(args[0]!, "Uzunluk"); return [mat(n, 1, Array.from({ length: n }, (_, k) => (n === 1 ? 1 : 0.54 - 0.46 * Math.cos((2 * Math.PI * k) / (n - 1)))))]; },
  hann: (_y, args) => { const n = tamsayi(args[0]!, "Uzunluk"); return [mat(n, 1, Array.from({ length: n }, (_, k) => (n === 1 ? 1 : 0.5 - 0.5 * Math.cos((2 * Math.PI * k) / (n - 1)))))]; },
  hanning: (_y, args) => { const n = tamsayi(args[0]!, "Uzunluk"); return [mat(n, 1, Array.from({ length: n }, (_, k) => 0.5 - 0.5 * Math.cos((2 * Math.PI * (k + 1)) / (n + 1))))]; },
  rectwin: (_y, args) => { const n = tamsayi(args[0]!, "Uzunluk"); return [mat(n, 1, new Array<number>(n).fill(1))]; },
  awgn: (y, args) => {
    const x = M(args[0]);
    const snr = skaler(args[1]!, "SNR (dB)");
    const olcum = args[2] && metinMi(args[2]) && metneCevir(args[2]) === "measured";
    const guc = olcum ? x.re.reduce((t, v) => t + v * v, 0) / numel(x) : 1;
    const s = Math.sqrt(guc / 10 ** (snr / 10));
    return [mat(x.r, x.c, x.re.map((v) => v + s * y.normal()))];
  },

  // Rastgele sayı üreteci
  rng: (y, args) => {
    const a = args[0];
    if (!a || metinMi(a)) y.tohumla(metinMi(a ?? metin("")) && metneCevir(a!) === "shuffle" ? Date.now() : 0);
    else y.tohumla(tamsayi(a, "Tohum"));
    return [];
  },

  // Metin ve çıktı
  disp: (y, args) => {
    const a = args[0];
    if (!a) return [];
    if (a.tur === "matris" && numel(a) === 0) return [];
    const s = metinMi(a) ? metneCevir(a) : degerYaz(a, y.bicim).replace(/^ {4}/, a.tur === "matris" && numel(a) === 1 ? "" : "    ");
    y.yaz((a.tur === "matris" && numel(a) === 1 && !metinMi(a) ? s.trim() : s) + "\n");
    return [];
  },
  display: (y, args) => {
    y.yaz(adliYaz("ans", args[0]!, y.bicim));
    return [];
  },
  fprintf: (y, args) => {
    if (!args.length) return [];
    let bas = 0;
    // fprintf(1, ...) ilk argüman dosya kimliği olabilir
    if (!metinMi(args[0]!) && args.length > 1 && metinMi(args[1]!)) bas = 1;
    if (!metinMi(args[bas]!)) {
      y.yaz(num2str(M(args[bas])) + "\n");
      return [];
    }
    y.yaz(sprintf(metneCevir(args[bas]!), bicimDegerleri(args.slice(bas + 1))));
    return [];
  },
  sprintf: (_y, args) => [metin(sprintf(metinArg(args[0], "Biçim"), bicimDegerleri(args.slice(1))))],
  num2str: (_y, args) => [metin(num2str(M(args[0]), args[1] ? (metinMi(args[1]) ? metneCevir(args[1]) : skaler(args[1], "Hassasiyet")) : undefined))],
  int2str: (_y, args) => { const a = M(args[0]); return [metin(num2str(mat(a.r, a.c, a.re.map(Math.round))))]; },
  mat2str: (_y, args) => [metin(mat2str(M(args[0]), args[1] ? tamsayi(args[1], "Hassasiyet") : 15))],
  str2num: (y, args) => {
    const s = metinArg(args[0], "str2num");
    if (!/^[\d\s.,;:+\-*/^eE[\]()pi]*$/.test(s)) return [bos()];
    const alt = new (y.constructor as new () => Yorumlayici)();
    alt.calistir(`ans__ = [${s}];`);
    return [alt.degiskenler.get("ans__") ?? bos()];
  },
  str2double: (_y, args) => { const v = Number(metinArg(args[0], "str2double").replace(",", ".")); return [sayi(Number.isNaN(v) ? Number.NaN : v)]; },
  strcat: (_y, args) => [metin(args.map((a) => metneCevir(a).replace(/\s+$/, "")).join(""))],
  upper: (_y, args) => [metin(metinArg(args[0], "upper").toUpperCase())],
  lower: (_y, args) => [metin(metinArg(args[0], "lower").toLowerCase())],
  strtrim: (_y, args) => [metin(metinArg(args[0], "strtrim").trim())],
  strcmp: (_y, args) => [mantik(metinMi(args[0]!) && metinMi(args[1]!) && metneCevir(args[0]!) === metneCevir(args[1]!))],
  strcmpi: (_y, args) => [mantik(metinMi(args[0]!) && metinMi(args[1]!) && metneCevir(args[0]!).toLowerCase() === metneCevir(args[1]!).toLowerCase())],
  strrep: (_y, args) => [metin(metinArg(args[0], "strrep").split(metinArg(args[1], "strrep")).join(metinArg(args[2], "strrep")))],
  blanks: (_y, args) => [metin(" ".repeat(tamsayi(args[0]!, "n")))],
  newline: () => [metin("\n")],
  error: (_y, args) => {
    const s = args.length ? sprintf(metinArg(args[0], "Hata mesajı"), bicimDegerleri(args.slice(1))) : "Hata";
    return hata(s);
  },
  warning: (y, args) => {
    if (!args.length) return [];
    const s = metneCevir(args[0]!);
    if (s === "off" || s === "on") return [];
    y.yaz(`Uyarı: ${sprintf(s, bicimDegerleri(args.slice(1)))}\n`);
    return [];
  },
  format: (y, args) => {
    const s = args[0] ? metneCevir(args[0]).toLowerCase() : "short";
    if (s === "long" || s === "short") y.bicim = s;
    else if (s !== "compact" && s !== "loose") hata("format short ya da format long kullan.");
    return [];
  },
  tic: (y) => {
    y.ticZamani = performance.now();
    return [];
  },
  toc: (y, _a, nargout) => {
    const s = (performance.now() - y.ticZamani) / 1000;
    if (nargout > 0) return [sayi(s)];
    y.yaz(`Geçen süre: ${s.toFixed(6)} saniye.\n`);
    return [];
  },
  pause: () => [],
  drawnow: () => [],
  beep: () => [],
  more: () => [],
  pkg: () => [],
  input: () => hata("input desteklenmiyor: tarayıcıdaki MatStudio kullanıcıdan girdi bekleyemez. Değeri doğrudan bir değişkene ata."),
  sound: (y) => {
    y.yaz("Uyarı: sound MatStudio'da ses çalmaz; sinyali plot ile çizebilirsin.\n");
    return [];
  },
  soundsc: (y) => {
    y.yaz("Uyarı: soundsc MatStudio'da ses çalmaz; sinyali plot ile çizebilirsin.\n");
    return [];
  },
  clc: (y) => {
    y.cikti = "";
    y.clc = true;
    return [];
  },
  clear: (y, args, _n, kapsam) => {
    const adlar = args.map((a) => metneCevir(a));
    if (!adlar.length || adlar.includes("all") || adlar.includes("variables")) kapsam.clear();
    else for (const a of adlar) kapsam.delete(a);
    return [];
  },
  who: (y, _args, _n, kapsam) => {
    const adlar = [...kapsam.keys()].filter((a) => a !== "ans" || kapsam.has("ans")).sort();
    y.cikti += adlar.length ? `Değişkenler:\n\n${adlar.join("  ")}\n\n` : "";
    return [];
  },
  whos: (y, _args, _n, kapsam) => {
    const adlar = [...kapsam.keys()].sort();
    if (!adlar.length) return [];
    const en = Math.max(4, ...adlar.map((a) => a.length));
    y.cikti += `  ${"Ad".padEnd(en)}  ${"Boyut".padEnd(9)}  Sınıf\n\n`;
    for (const a of adlar) y.cikti += `  ${a.padEnd(en)}  ${boyutYazisi(kapsam.get(a)!).padEnd(9)}  ${sinifAdi(kapsam.get(a)!)}\n`;
    y.cikti += "\n";
    return [];
  },
  exist: (y, args, _n, kapsam) => {
    const ad = metinArg(args[0], "exist");
    return [sayi(kapsam.has(ad) ? 1 : YERLESIKLER[ad] || y.fonksiyonlar.has(ad) ? 5 : 0)];
  },
  isvarname: (_y, args) => [mantik(/^[A-Za-z]\w*$/.test(metinArg(args[0], "isvarname")))],
  feval: (y, args, nargout) => {
    const f = args[0]!;
    if (f.tur === "fonk") return y.tutamakCagir(f, args.slice(1), nargout);
    return y.fonksiyonCagir(metinArg(f, "feval"), args.slice(1), nargout);
  },
  arrayfun: (y, args) => {
    const f = args[0] as Fonk;
    if (f?.tur !== "fonk") hata("arrayfun'un ilk argümanı bir fonksiyon tutamağı olmalı (ör. @(x) x^2).");
    const a = M(args[1]);
    const re = a.re.map((v) => skaler(y.tutamakCagir(f, [sayi(v)])[0]!, "arrayfun sonucu"));
    return [mat(a.r, a.c, re)];
  },
  func2str: (_y, args) => [metin((args[0] as Fonk).metin)],

  // Çizim
  figure: (y, args) => {
    const no = args[0] && !metinMi(args[0]) ? tamsayi(args[0], "Şekil numarası") : undefined;
    const s = sekilAc(y.cizim, no);
    const ad = args.findIndex((a) => metinMi(a) && metneCevir(a).toLowerCase() === "name");
    if (ad >= 0 && args[ad + 1]) s.ad = metneCevir(args[ad + 1]!);
    return [];
  },
  clf: (y) => {
    const s = aktifSekil(y.cizim);
    s.eksenler = [];
    s.aktif = -1;
    return [];
  },
  cla: (y) => {
    eksenTemizle(aktifEksen(y.cizim));
    return [];
  },
  close: (y, args) => {
    const s = args[0] ? (metinMi(args[0]) ? metneCevir(args[0]) : String(skaler(args[0], "Şekil"))) : "";
    if (!s || s === "all") y.cizim = yeniCizim();
    else {
      y.cizim.sekiller = y.cizim.sekiller.filter((f) => String(f.no) !== s);
      y.cizim.aktif = y.cizim.sekiller.length - 1;
    }
    return [];
  },
  subplot: (y, args) => {
    let m: number, n: number, p: number[];
    if (args.length === 1) {
      const k = tamsayi(args[0]!, "subplot");
      [m, n, p] = [Math.floor(k / 100), Math.floor(k / 10) % 10, [k % 10]];
    } else {
      enAz(args, 3, "subplot");
      m = tamsayi(args[0]!, "subplot satır sayısı");
      n = tamsayi(args[1]!, "subplot sütun sayısı");
      p = M(args[2]).re;
    }
    altCizim(y.cizim, m, n, p);
    return [];
  },
  plot: cizgiCiz("plot"),
  stem: cizgiCiz("stem"),
  stairs: cizgiCiz("stairs"),
  scatter: cizgiCiz("scatter"),
  area: cizgiCiz("area"),
  bar: (y, args) => {
    const sayisal = args.filter((a) => !metinMi(a));
    const [x, yv] = sayisal.length >= 2 ? [M(sayisal[0]), M(sayisal[1])] : [null, M(sayisal[0])];
    const xs = x ? [...x.re] : yv.re.map((_, k) => k + 1);
    if (xs.length !== numel(yv)) hata("bar: x ve y aynı uzunlukta olmalı.");
    const stil = args.find((a) => metinMi(a) && stilCoz(metneCevir(a)));
    const e = aktifEksen(y.cizim);
    seriEkle(e, { tur: "bar", x: xs, y: [...yv.re], renk: stil ? stilCoz(metneCevir(stil))!.renk : null, cizgi: "-", isaret: null, kalinlik: 1, genislik: 0.8 });
    return [];
  },
  histogram: (y, args) => {
    const x = M(args[0], "histogram verisi");
    const { kenarlar, sayilar } = histogramHesap(x.re, args.slice(1));
    const yv = normalizeEt(sayilar, kenarlar, args, x.re.filter(Number.isFinite).length);
    const e = aktifEksen(y.cizim);
    const merkez = kenarlar.slice(0, -1).map((k, i) => (k + kenarlar[i + 1]!) / 2);
    seriEkle(e, { tur: "hist", x: merkez, y: yv, renk: null, cizgi: "-", isaret: null, kalinlik: 1, kenarlar });
    return [];
  },
  hist: (y, args, nargout) => {
    const x = M(args[0], "hist verisi");
    const b = args[1] ? M(args[1]) : sayi(10);
    let kenarlar: number[];
    let sayilar: number[];
    if (numel(b) > 1) {
      // Kutu merkezleri verilmiş
      const c = b.re;
      kenarlar = [c[0]! - (c[1]! - c[0]!) / 2, ...c.slice(1).map((v, k) => (v + c[k]!) / 2), c.at(-1)! + (c.at(-1)! - c.at(-2)!) / 2];
      kenarlar[0] = -Infinity;
      kenarlar[kenarlar.length - 1] = Infinity;
      sayilar = new Array<number>(c.length).fill(0);
      for (const v of x.re) {
        let k = 0;
        while (k < c.length - 1 && v >= kenarlar[k + 1]!) k++;
        sayilar[k]!++;
      }
      kenarlar = [c[0]! - (c[1]! - c[0]!) / 2, ...c.slice(1).map((v, k) => (v + c[k]!) / 2), c.at(-1)! + (c.at(-1)! - c.at(-2)!) / 2];
    } else ({ kenarlar, sayilar } = histogramHesap(x.re, [b]));
    const merkez = kenarlar.slice(0, -1).map((k, i) => (k + kenarlar[i + 1]!) / 2);
    if (nargout > 0) return [satirVektor(sayilar), satirVektor(merkez)];
    const e = aktifEksen(y.cizim);
    seriEkle(e, { tur: "hist", x: merkez, y: sayilar, renk: null, cizgi: "-", isaret: null, kalinlik: 1, kenarlar });
    return [];
  },
  histcounts: (_y, args, nargout) => {
    const x = M(args[0], "histcounts verisi");
    const { kenarlar, sayilar } = histogramHesap(x.re, args.slice(1));
    const yv = normalizeEt(sayilar, kenarlar, args, x.re.filter(Number.isFinite).length);
    return nargout > 1 ? [satirVektor(yv), satirVektor(kenarlar)] : [satirVektor(yv)];
  },
  title: eksenMetni("baslik"),
  xlabel: eksenMetni("xEtiket"),
  ylabel: eksenMetni("yEtiket"),
  sgtitle: (y, args) => {
    aktifSekil(y.cizim).ad = args[0] ? metneCevir(args[0]) : "";
    return [];
  },
  legend: (y, args) => {
    const e = aktifEksen(y.cizim);
    const adlar = args.filter((a) => metinMi(a)).map((a) => metneCevir(a));
    if (adlar.length === 1 && (adlar[0] === "off" || adlar[0] === "hide")) e.gosterge = null;
    else if (adlar.length && !["show", "boxoff", "boxon"].includes(adlar[0]!)) {
      const konum = adlar.findIndex((s) => s.toLowerCase() === "location");
      e.gosterge = konum >= 0 ? adlar.slice(0, konum) : adlar;
    } else if (!adlar.length || adlar[0] === "show") e.gosterge = e.seriler.map((_, k) => `data${k + 1}`);
    return [];
  },
  text: (y, args) => {
    const e = aktifEksen(y.cizim);
    e.metinler.push({ x: skaler(args[0]!, "x"), y: skaler(args[1]!, "y"), s: metneCevir(args[2]!) });
    return [];
  },
  hold: acKapa("tut"),
  grid: acKapa("izgara"),
  box: () => [],
  axis: (y, args) => {
    const e = aktifEksen(y.cizim);
    if (!args.length) return [];
    if (metinMi(args[0]!)) {
      const s = metneCevir(args[0]!).toLowerCase();
      if (s === "tight" || s === "auto") e.xSinir = e.ySinir = null;
      if (s === "tight") (e as { siki?: boolean }).siki = true;
      return [];
    }
    const a = M(args[0]);
    if (numel(a) < 4) hata("axis([xmin xmax ymin ymax]) dört değer ister.");
    e.xSinir = [a.re[0]!, a.re[1]!];
    e.ySinir = [a.re[2]!, a.re[3]!];
    return [];
  },
  xlim: sinir("xSinir"),
  ylim: sinir("ySinir"),
};

function doldurSabit(args: Deger[], v: number): Matris {
  const [r, c] = boyutlar(args, "sabit");
  boyutDenetle(r, c);
  return mat(r, c, new Array<number>(r * c).fill(v));
}

function eksenTemizle2(e: ReturnType<typeof aktifEksen>) {
  e.seriler = [];
  e.renkSirasi = 0;
  e.gosterge = null;
  e.metinler = [];
}

export type { Seri, Fonk };
export { kacisCoz, vektor };
