// Matris işlemleri: eleman bazında işlemler (genişletmeyle), matris çarpımı,
// birleştirme, indeksleme ve indisli atama.

import { boyutDenetle, hata, mat, numel, skalerMi, type Matris, type Sinif } from "./deger";

type Ikili = (ar: number, ai: number, br: number, bi: number) => [number, number];

// Karmaşık kuvvet: gerçek taban negatif ve üs kesirliyse sonuç karmaşık olur
export function kuvvet(ar: number, ai: number, br: number, bi: number): [number, number] {
  if (ai === 0 && bi === 0 && (ar >= 0 || Number.isInteger(br))) return [ar ** br, 0];
  if (ar === 0 && ai === 0) return br === 0 && bi === 0 ? [1, 0] : [0, 0];
  const r = Math.hypot(ar, ai);
  const t = Math.atan2(ai, ar);
  const lr = Math.log(r);
  const yr = Math.exp(br * lr - bi * t);
  const yt = bi * lr + br * t;
  return [yr * Math.cos(yt), yr * Math.sin(yt)];
}

export const ISLEMLER: Record<string, Ikili> = {
  "+": (a, b, c, d) => [a + c, b + d],
  "-": (a, b, c, d) => [a - c, b - d],
  ".*": (a, b, c, d) => [a * c - b * d, a * d + b * c],
  "./": (a, b, c, d) => {
    if (b === 0 && d === 0) return [a / c, 0];
    const p = c * c + d * d;
    return [(a * c + b * d) / p, (b * c - a * d) / p];
  },
  ".\\": (a, b, c, d) => ISLEMLER["./"]!(c, d, a, b),
  ".^": kuvvet,
};

const KARSILASTIRMA: Record<string, (a: number, b: number) => boolean> = {
  "==": (a, b) => a === b,
  "~=": (a, b) => a !== b,
  "<": (a, b) => a < b,
  "<=": (a, b) => a <= b,
  ">": (a, b) => a > b,
  ">=": (a, b) => a >= b,
  "&": (a, b) => a !== 0 && b !== 0,
  "|": (a, b) => a !== 0 || b !== 0,
};

// İki boyut uyumlu mu: eşit ya da biri 1 (örtük genişletme)
function genisBoyut(a: number, b: number, op: string, A: Matris, B: Matris): number {
  if (a === b) return a;
  if (a === 1) return b;
  if (b === 1) return a;
  return hata(
    `Boyutlar uyuşmuyor: ${A.r}×${A.c} ile ${B.r}×${B.c} arasında '${op}' yapılamaz.` +
      (op === ".*" || op === "./" || op === "+" || op === "-" ? " İki vektörün uzunluğu aynı olmalı." : ""),
  );
}

export function elemanEleman(op: string, A: Matris, B: Matris): Matris {
  const r = genisBoyut(A.r, B.r, op, A, B);
  const c = genisBoyut(A.c, B.c, op, A, B);
  boyutDenetle(r, c);
  const n = r * c;
  const re = new Array<number>(n);
  const kars = KARSILASTIRMA[op] as ((a: number, b: number) => boolean) | undefined;
  const karmasik = A.im !== null || B.im !== null;
  const im = karmasik && !kars ? new Array<number>(n) : null;
  const f = ISLEMLER[op];
  const ar1 = A.r === 1, ac1 = A.c === 1, br1 = B.r === 1, bc1 = B.c === 1;
  for (let j = 0; j < c; j++)
    for (let i = 0; i < r; i++) {
      const ka = (ac1 ? 0 : j) * A.r + (ar1 ? 0 : i);
      const kb = (bc1 ? 0 : j) * B.r + (br1 ? 0 : i);
      const k = j * r + i;
      if (kars) {
        re[k] = kars(A.re[ka]!, B.re[kb]!) ? 1 : 0;
      } else if (!karmasik) {
        const a = A.re[ka]!, b = B.re[kb]!;
        switch (op) {
          case "+": re[k] = a + b; break;
          case "-": re[k] = a - b; break;
          case ".*": re[k] = a * b; break;
          case "./": re[k] = a / b; break;
          case ".\\": re[k] = b / a; break;
          default: {
            if (a < 0 && !Number.isInteger(b)) {
              const [x, y] = kuvvet(a, 0, b, 0);
              re[k] = x;
              if (!sanalKuvvet) sanalKuvvet = new Array<number>(n).fill(0);
              sanalKuvvet[k] = y;
            } else re[k] = a ** b;
          }
        }
      } else {
        const [x, y] = f!(A.re[ka]!, A.im?.[ka] ?? 0, B.re[kb]!, B.im?.[kb] ?? 0);
        re[k] = x;
        im![k] = y;
      }
    }
  const sonuc = mat(r, c, re, im ?? sanalKuvvet, kars ? "logical" : "double");
  sanalKuvvet = null;
  return sonuc;
}
let sanalKuvvet: number[] | null = null;

export function matrisCarp(A: Matris, B: Matris): Matris {
  if (skalerMi(A) || skalerMi(B)) return elemanEleman(".*", A, B);
  if (A.c !== B.r)
    hata(
      `Matris çarpımında iç boyutlar uyuşmuyor: ${A.r}×${A.c} * ${B.r}×${B.c}. Eleman bazında çarpım için .* kullan.`,
    );
  boyutDenetle(A.r, B.c);
  const r = A.r, c = B.c, k = A.c;
  const re = new Array<number>(r * c).fill(0);
  const karm = A.im !== null || B.im !== null;
  const im = karm ? new Array<number>(r * c).fill(0) : null;
  for (let j = 0; j < c; j++)
    for (let t = 0; t < k; t++) {
      const br = B.re[j * k + t]!, bi = B.im?.[j * k + t] ?? 0;
      if (br === 0 && bi === 0) continue;
      for (let i = 0; i < r; i++) {
        const ar = A.re[t * r + i]!, ai = A.im?.[t * r + i] ?? 0;
        re[j * r + i] += ar * br - ai * bi;
        if (im) im[j * r + i] += ar * bi + ai * br;
      }
    }
  return mat(r, c, re, im);
}

export function devrik(A: Matris, eslenik: boolean): Matris {
  const re = new Array<number>(numel(A));
  const im = A.im ? new Array<number>(numel(A)) : null;
  for (let i = 0; i < A.r; i++)
    for (let j = 0; j < A.c; j++) {
      re[i * A.c + j] = A.re[j * A.r + i]!;
      if (im) im[i * A.c + j] = (eslenik ? -1 : 1) * A.im![j * A.r + i]!;
    }
  return mat(A.c, A.r, re, im, A.sinif);
}

// Kare matrisin tersiyle çözüm (Gauss eliminasyonu, gerçek sayılar)
function coz(A: Matris, B: Matris): Matris {
  if (A.r !== A.c) hata("Matris bölmesi yalnızca kare matrislerle desteklenir. Eleman bazında bölme için ./ kullan.");
  if (A.im || B.im) hata("Karmaşık matris bölmesi desteklenmiyor.");
  const n = A.r;
  if (B.r !== n) hata(`Boyutlar uyuşmuyor: ${A.r}×${A.c} \\ ${B.r}×${B.c}.`);
  const m = B.c;
  const a = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => A.re[j * n + i]!));
  const b = Array.from({ length: n }, (_, i) => Array.from({ length: m }, (_, j) => B.re[j * n + i]!));
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(a[i]![k]!) > Math.abs(a[p]![k]!)) p = i;
    if (Math.abs(a[p]![k]!) < 1e-14) hata("Matris tekil (tersi yok).");
    [a[k], a[p]] = [a[p]!, a[k]!];
    [b[k], b[p]] = [b[p]!, b[k]!];
    for (let i = k + 1; i < n; i++) {
      const f = a[i]![k]! / a[k]![k]!;
      for (let j = k; j < n; j++) a[i]![j]! -= f * a[k]![j]!;
      for (let j = 0; j < m; j++) b[i]![j]! -= f * b[k]![j]!;
    }
  }
  const x = Array.from({ length: n }, () => new Array<number>(m).fill(0));
  for (let i = n - 1; i >= 0; i--)
    for (let j = 0; j < m; j++) {
      let t = b[i]![j]!;
      for (let k = i + 1; k < n; k++) t -= a[i]![k]! * x[k]![j]!;
      x[i]![j] = t / a[i]![i]!;
    }
  const re: number[] = [];
  for (let j = 0; j < m; j++) for (let i = 0; i < n; i++) re.push(x[i]![j]!);
  return mat(n, m, re);
}

export function ikiliIslem(op: string, A: Matris, B: Matris): Matris {
  switch (op) {
    case "*":
      return matrisCarp(A, B);
    case "/":
      if (skalerMi(B)) return elemanEleman("./", A, B);
      return devrik(coz(devrik(B, false), devrik(A, false)), false);
    case "\\":
      if (skalerMi(A)) return elemanEleman(".\\", A, B);
      return coz(A, B);
    case "^": {
      if (skalerMi(A) && skalerMi(B)) return elemanEleman(".^", A, B);
      if (A.r === A.c && skalerMi(B) && Number.isInteger(B.re[0]) && B.re[0]! >= 0 && !B.im) {
        let s = mat(A.r, A.r, Array.from({ length: A.r * A.r }, (_, k) => (k % (A.r + 1) === 0 ? 1 : 0)));
        for (let k = 0; k < B.re[0]!; k++) s = matrisCarp(s, A);
        return s;
      }
      return hata("'^' matris kuvvetidir; eleman bazında kuvvet için .^ kullan (ör. x.^2).");
    }
    default:
      return elemanEleman(op, A, B);
  }
}

// ---- Birleştirme ----

function birlesikSinif(parcalar: Matris[]): Sinif {
  if (parcalar.some((p) => p.sinif === "char")) return "char";
  if (parcalar.length && parcalar.every((p) => p.sinif === "logical")) return "logical";
  return "double";
}

export function yatayBirlestir(parcalar: Matris[]): Matris {
  const dolu = parcalar.filter((p) => numel(p) > 0);
  const sinif = birlesikSinif(parcalar);
  if (!dolu.length) return mat(parcalar.some((p) => p.r === 1 && p.sinif === "char") ? 1 : 0, 0, [], null, sinif);
  const r = dolu[0]!.r;
  for (const p of dolu)
    if (p.r !== r) hata(`Yan yana birleştirilen parçaların satır sayısı aynı olmalı (${r} ve ${p.r}). [a, b] yerine [a; b] mi demek istedin?`);
  const re: number[] = [];
  const karm = dolu.some((p) => p.im);
  const im: number[] | null = karm ? [] : null;
  let c = 0;
  for (const p of dolu) {
    for (const v of p.re) re.push(v);
    if (im) for (let k = 0; k < numel(p); k++) im.push(p.im?.[k] ?? 0);
    c += p.c;
  }
  return mat(r, c, re, im, sinif);
}

export function dikeyBirlestir(parcalar: Matris[]): Matris {
  const dolu = parcalar.filter((p) => numel(p) > 0);
  const sinif = birlesikSinif(parcalar);
  if (!dolu.length) return mat(0, 0, [], null, sinif);
  const c = dolu[0]!.c;
  for (const p of dolu)
    if (p.c !== c) hata(`Alt alta birleştirilen satırların uzunluğu aynı olmalı (${c} ve ${p.c}).`);
  const r = dolu.reduce((t, p) => t + p.r, 0);
  const re = new Array<number>(r * c);
  const karm = dolu.some((p) => p.im);
  const im = karm ? new Array<number>(r * c).fill(0) : null;
  let s0 = 0;
  for (const p of dolu) {
    for (let j = 0; j < c; j++)
      for (let i = 0; i < p.r; i++) {
        re[j * r + s0 + i] = p.re[j * p.r + i]!;
        if (im) im[j * r + s0 + i] = p.im?.[j * p.r + i] ?? 0;
      }
    s0 += p.r;
  }
  return mat(r, c, re, im, sinif);
}

// ---- İndeksleme ----

export type Indis = Matris | ":";

const INDIS_IPUCU = " MatStudio'da indisler 1'den başlar: x(0) yoktur, ilk eleman x(1)'dir.";

// İndisi 0 tabanlı konum listesine çevirir
export function konumlar(ix: Indis, uzunluk: number, buyuyebilir = false): number[] {
  if (ix === ":") return Array.from({ length: uzunluk }, (_, k) => k);
  if (ix.sinif === "logical") {
    if (numel(ix) > uzunluk && ix.re.slice(uzunluk).some((v) => v)) hata("Mantıksal indis dizinin dışına taşıyor.");
    const out: number[] = [];
    ix.re.forEach((v, k) => v && out.push(k));
    return out;
  }
  return ix.re.map((v) => {
    if (!Number.isInteger(v) || v < 1) {
      hata(`Geçersiz indis: ${Number.isInteger(v) ? v : v.toPrecision(4)}. İndisler pozitif tam sayı olmalı.` + (v === 0 || !Number.isInteger(v) ? INDIS_IPUCU : ""));
    }
    if (!buyuyebilir && v > uzunluk) hata(`İndis dizinin dışında: ${v}. Dizide ${uzunluk} eleman var.`);
    return v - 1;
  });
}

export function indeksle(A: Matris, ix: Indis[]): Matris {
  if (ix.length === 0) return A;
  if (ix.length === 1) {
    const n = numel(A);
    const k = konumlar(ix[0]!, n);
    const re = k.map((t) => A.re[t]!);
    const im = A.im ? k.map((t) => A.im![t]!) : null;
    const i0 = ix[0]!;
    let r: number, c: number;
    if (i0 === ":") [r, c] = [k.length, 1];
    else if ((A.r === 1 || A.c === 1) && n > 0 && !(i0.r > 1 && i0.c > 1)) [r, c] = A.r === 1 ? [1, k.length] : [k.length, 1];
    else if (i0.sinif === "logical") [r, c] = i0.r === 1 ? [1, k.length] : [k.length, 1];
    else [r, c] = [i0.r, i0.c];
    return mat(r, c, re, im, A.sinif);
  }
  if (ix.length > 2) {
    for (const e of ix.slice(2)) if (e !== ":" && !(numel(e) === 1 && e.re[0] === 1)) hata("Üç ve daha fazla boyutlu diziler desteklenmiyor.");
  }
  const sat = konumlar(ix[0]!, A.r);
  const sut = konumlar(ix[1]!, A.c);
  const re = new Array<number>(sat.length * sut.length);
  const im = A.im ? new Array<number>(sat.length * sut.length) : null;
  sut.forEach((j, b) =>
    sat.forEach((i, a) => {
      re[b * sat.length + a] = A.re[j * A.r + i]!;
      if (im) im[b * sat.length + a] = A.im![j * A.r + i]!;
    }),
  );
  return mat(sat.length, sut.length, re, im, A.sinif);
}

function yenidenBoyutla(A: Matris, r: number, c: number): Matris {
  if (r === A.r && c === A.c) return { ...A, re: [...A.re], im: A.im ? [...A.im] : null };
  boyutDenetle(r, c);
  const re = new Array<number>(r * c).fill(0);
  const im = A.im ? new Array<number>(r * c).fill(0) : null;
  for (let j = 0; j < A.c; j++)
    for (let i = 0; i < A.r; i++) {
      re[j * r + i] = A.re[j * A.r + i]!;
      if (im) im[j * r + i] = A.im![j * A.r + i]!;
    }
  return { tur: "matris", r, c, re, im, sinif: A.sinif };
}

// x(ix) = deger. Gerekirse dizi büyür (boşluklar 0 ile dolar). Boş matris
// atanırsa elemanlar silinir.
export function indisliAta(A: Matris | null, ix: Indis[], V: Matris, silme: boolean): Matris {
  const eski = A ?? mat(0, 0, []);
  if (silme) return sil(eski, ix);
  let B: Matris;
  let hedef: number[];
  if (ix.length === 1) {
    const n = numel(eski);
    const k = konumlar(ix[0]!, n, true);
    const enBuyuk = k.length ? Math.max(...k) + 1 : 0;
    if (enBuyuk > n) {
      if (eski.r <= 1) B = yenidenBoyutla(eski, 1, enBuyuk);
      else if (eski.c === 1) B = yenidenBoyutla(eski, enBuyuk, 1);
      else return hata(`Matrisin dışına doğrusal indisle yazılamaz (${eski.r}×${eski.c}). x(satır, sütun) kullan.`);
    } else B = yenidenBoyutla(eski, eski.r, eski.c);
    hedef = k;
  } else {
    const sat = konumlar(ix[0]!, eski.r, true);
    const sut = konumlar(ix[1]!, eski.c, true);
    const r = Math.max(eski.r, sat.length ? Math.max(...sat) + 1 : 0, ix[0] === ":" && eski.r === 0 ? V.r : 0);
    const c = Math.max(eski.c, sut.length ? Math.max(...sut) + 1 : 0, ix[1] === ":" && eski.c === 0 ? V.c : 0);
    B = yenidenBoyutla(eski, r, c);
    const s2 = ix[0] === ":" ? Array.from({ length: r }, (_, k) => k) : sat;
    const t2 = ix[1] === ":" ? Array.from({ length: c }, (_, k) => k) : sut;
    hedef = [];
    for (const j of t2) for (const i of s2) hedef.push(j * r + i);
  }
  if (numel(V) !== 1 && numel(V) !== hedef.length)
    hata(`Atamada eleman sayıları uyuşmuyor: sol tarafta ${hedef.length}, sağ tarafta ${numel(V)} eleman var.`);
  if (V.im && !B.im) B.im = new Array<number>(numel(B)).fill(0);
  hedef.forEach((t, k) => {
    const s = numel(V) === 1 ? 0 : k;
    B.re[t] = V.re[s]!;
    if (B.im) B.im[t] = V.im?.[s] ?? 0;
  });
  if (A === null || numel(eski) === 0) B.sinif = V.sinif;
  else if (B.sinif === "logical" && V.sinif !== "logical") B.sinif = "double";
  if (B.im && B.im.every((v) => v === 0)) B.im = null;
  return B;
}

function sil(A: Matris, ix: Indis[]): Matris {
  if (ix.length === 1) {
    const sil = new Set(konumlar(ix[0]!, numel(A)));
    const kalan = A.re.map((_, k) => k).filter((k) => !sil.has(k));
    const re = kalan.map((k) => A.re[k]!);
    const im = A.im ? kalan.map((k) => A.im![k]!) : null;
    return A.c === 1 && A.r > 1 ? mat(re.length, 1, re, im, A.sinif) : mat(re.length ? 1 : (A.r === 1 ? 1 : 0), re.length, re, im, A.sinif);
  }
  if (ix[0] === ":" || konumlar(ix[0]!, A.r).length === A.r) {
    const sil = new Set(konumlar(ix[1]!, A.c));
    const sut = Array.from({ length: A.c }, (_, j) => j).filter((j) => !sil.has(j));
    return indeksle(A, [":", mat(1, sut.length, sut.map((j) => j + 1))]);
  }
  if (ix[1] === ":" || konumlar(ix[1]!, A.c).length === A.c) {
    const sil = new Set(konumlar(ix[0]!, A.r));
    const sat = Array.from({ length: A.r }, (_, i) => i).filter((i) => !sil.has(i));
    return indeksle(A, [mat(1, sat.length, sat.map((i) => i + 1)), ":"]);
  }
  return hata("Bir matristen yalnızca tam satır ya da tam sütun silinebilir.");
}
