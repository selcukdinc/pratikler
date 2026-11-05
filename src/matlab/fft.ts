// Ayrık Fourier dönüşümü. Uzunluk 2'nin kuvvetiyse radix-2, değilse
// Bluestein yöntemiyle hesaplanır.

export function fftKarmasik(re: number[], im: number[], ters = false): [number[], number[]] {
  const n = re.length;
  if (n <= 1) return [[...re], [...im]];
  if ((n & (n - 1)) === 0) return radix2(re, im, ters);
  return bluestein(re, im, ters);
}

function radix2(re0: number[], im0: number[], ters: boolean): [number[], number[]] {
  const n = re0.length;
  const re = [...re0];
  const im = [...im0];
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      [re[i], re[j]] = [re[j]!, re[i]!];
      [im[i], im[j]] = [im[j]!, im[i]!];
    }
  }
  for (let boy = 2; boy <= n; boy <<= 1) {
    const aci = ((ters ? 2 : -2) * Math.PI) / boy;
    const wr = Math.cos(aci), wi = Math.sin(aci);
    for (let i = 0; i < n; i += boy) {
      let cr = 1, ci = 0;
      for (let k = 0; k < boy / 2; k++) {
        const a = i + k, b = i + k + boy / 2;
        const tr = re[b]! * cr - im[b]! * ci;
        const ti = re[b]! * ci + im[b]! * cr;
        re[b] = re[a]! - tr;
        im[b] = im[a]! - ti;
        re[a] = re[a]! + tr;
        im[a] = im[a]! + ti;
        const ncr = cr * wr - ci * wi;
        ci = cr * wi + ci * wr;
        cr = ncr;
      }
    }
  }
  return [re, im];
}

function bluestein(re: number[], im: number[], ters: boolean): [number[], number[]] {
  const n = re.length;
  let m = 1;
  while (m < 2 * n - 1) m <<= 1;
  const isaret = ters ? 1 : -1;
  const cr = new Array<number>(n), ci = new Array<number>(n);
  for (let k = 0; k < n; k++) {
    const a = (isaret * Math.PI * ((k * k) % (2 * n))) / n;
    cr[k] = Math.cos(a);
    ci[k] = Math.sin(a);
  }
  const ar = new Array<number>(m).fill(0), ai = new Array<number>(m).fill(0);
  for (let k = 0; k < n; k++) {
    ar[k] = re[k]! * cr[k]! - im[k]! * ci[k]!;
    ai[k] = re[k]! * ci[k]! + im[k]! * cr[k]!;
  }
  const br = new Array<number>(m).fill(0), bi = new Array<number>(m).fill(0);
  br[0] = cr[0]!;
  bi[0] = -ci[0]!;
  for (let k = 1; k < n; k++) {
    br[k] = br[m - k] = cr[k]!;
    bi[k] = bi[m - k] = -ci[k]!;
  }
  const [Ar, Ai] = radix2(ar, ai, false);
  const [Br, Bi] = radix2(br, bi, false);
  const pr = Ar.map((v, k) => v * Br[k]! - Ai[k]! * Bi[k]!);
  const pi = Ar.map((v, k) => v * Bi[k]! + Ai[k]! * Br[k]!);
  const [cr2, ci2] = radix2(pr, pi, true);
  const outR = new Array<number>(n), outI = new Array<number>(n);
  for (let k = 0; k < n; k++) {
    const xr = cr2[k]! / m, xi = ci2[k]! / m;
    outR[k] = xr * cr[k]! - xi * ci[k]!;
    outI[k] = xr * ci[k]! + xi * cr[k]!;
  }
  return [outR, outI];
}
