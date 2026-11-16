// 17. ünitenin oyuncak saldırıları: padding oracle (oyuncak AES-CBC), erken çıkan karşılaştırma
// ile zamanlama saldırısı ve AES'in ilk turunun S-kutusu çıkışına benzetilmiş güç izleriyle
// korelasyon güç analizi (CPA). Ölçümler gerçek donanımdan değil, tohumlu bir modelden gelir.
import { S_KUTUSU } from "./aes";
import { cbcCoz, dolguyuKaldir } from "./modlar";
import type { Durum } from "./aes";

// ---------------- Ortak: tohumlu rastgele sayılar ----------------

// mulberry32: [0, 1) aralığında tekrarlanabilir sayılar
export function tohumlu(tohum: number) {
  let a = tohum >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Box-Muller ile standart normal
export function normal(r: () => number) {
  const u = Math.max(r(), 1e-12);
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r());
}

// ---------------- Padding oracle ----------------

// Sunucu yalnız "dolgu doğru mu" der. Oyuncak AES-CBC ile.
export function dolguKahini(k: Durum[]) {
  return (iv: Uint8Array, blok: Uint8Array): boolean => {
    try {
      dolguyuKaldir(cbcCoz(blok, k, iv));
      return true;
    } catch {
      return false;
    }
  };
}

export interface KahinAdimi {
  // Çözülen baytın konumu (15'ten 0'a)
  konum: number;
  // Bu bayt için yapılan sorgu sayısı
  deneme: number;
  // Blok şifre çözücüsünün ara çıktısı D(C)[konum]
  ara: number;
  // Açık metin baytı: ara ⊕ önceki blok (IV)
  acik: number;
}

// Bir bloğun açık metnini, önceki bloğu (iv) değiştirerek bayt bayt bulur. Her bayt en çok 256 sorgu.
export function* kahinSaldirisi(iv: Uint8Array, blok: Uint8Array, kahin: (iv: Uint8Array, blok: Uint8Array) => boolean): Generator<KahinAdimi> {
  const ara = new Uint8Array(16);
  for (let konum = 15; konum >= 0; konum--) {
    const dolgu = 16 - konum;
    let deneme = 0;
    let bulundu = -1;
    for (let g = 0; g < 256; g++) {
      const sahte = new Uint8Array(16);
      for (let j = konum + 1; j < 16; j++) sahte[j] = ara[j]! ^ dolgu;
      sahte[konum] = g;
      deneme++;
      if (!kahin(sahte, blok)) continue;
      // Son baytta 0x02 0x02 gibi rastlantısal geçerli dolguyu ele: bir önceki baytı bozup yeniden sor
      if (konum === 15) {
        const kontrol = sahte.slice();
        kontrol[14] ^= 1;
        deneme++;
        if (!kahin(kontrol, blok)) continue;
      }
      bulundu = g;
      break;
    }
    if (bulundu < 0) throw new Error("kâhin bir cevap vermedi");
    ara[konum] = bulundu ^ dolgu;
    yield { konum, deneme, ara: ara[konum]!, acik: ara[konum]! ^ iv[konum]! };
  }
}

// ---------------- Zamanlama saldırısı ----------------

// Erken çıkan karşılaştırma: ilk farklı karakterde durur. Döndürdüğü "süre", karşılaştırılan
// karakter sayısıdır (gerçekte nanosaniyeler).
export function erkenKarsilastir(gizli: string, tahmin: string): { esit: boolean; adim: number } {
  const n = Math.min(gizli.length, tahmin.length);
  for (let i = 0; i < n; i++) if (gizli[i] !== tahmin[i]) return { esit: false, adim: i + 1 };
  return { esit: gizli.length === tahmin.length, adim: n + 1 };
}

// Sabit zamanlı karşılaştırma: farkları XOR'la toplar, hep bütün uzunluğu dolaşır
export function sabitKarsilastir(gizli: string, tahmin: string): { esit: boolean; adim: number } {
  let fark = gizli.length ^ tahmin.length;
  for (let i = 0; i < gizli.length; i++) fark |= gizli.charCodeAt(i) ^ (tahmin.charCodeAt(i) || 0);
  return { esit: fark === 0, adim: gizli.length };
}

// Gürültülü ölçüm: taban + adım başına süre + normal gürültü; ortalaması alınan tekrar sayısı
export function olc(adim: number, gurultu: number, tekrar: number, r: () => number): number {
  let t = 0;
  for (let i = 0; i < tekrar; i++) t += 50 + adim * 4 + gurultu * normal(r);
  return t / tekrar;
}

// Saldırgan bilinen önekin arkasına her karakteri dener, en uzun süreyi seçer
export function sonrakiKarakter(gizli: string, onek: string, alfabe: string, sabit: boolean, gurultu: number, tekrar: number, r: () => number) {
  const kars = sabit ? sabitKarsilastir : erkenKarsilastir;
  const doldur = "#".repeat(Math.max(0, gizli.length - onek.length - 1));
  const sureler = [...alfabe].map((c) => ({ c, sure: olc(kars(gizli, onek + c + doldur).adim, gurultu, tekrar, r) }));
  const en = sureler.reduce((a, b) => (b.sure > a.sure ? b : a));
  return { sureler, tahmin: en.c };
}

// ---------------- Güç analizi (CPA) ----------------

export const hamming = (x: number) => {
  let n = 0;
  for (let v = x; v; v >>= 1) n += v & 1;
  return n;
};

export interface Izler {
  duz: Uint8Array;
  // Her izin S-kutusu çıkışının işlendiği andaki güç ölçümü
  olcum: Float64Array;
}

// Güç ≈ HW(S(p ⊕ k)) + gürültü. Maskelemede S-kutusu çıkışı her çalışmada yeni bir rastgele
// maskeyle XOR'lanmış işlenir; sızan değer artık anahtar tahminine bağlı değildir.
export function izUret(anahtar: number, n: number, gurultu: number, maskeli: boolean, r: () => number): Izler {
  const duz = new Uint8Array(n);
  const olcum = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    duz[i] = Math.floor(r() * 256);
    const ara = S_KUTUSU[duz[i]! ^ anahtar]!;
    const islenen = maskeli ? ara ^ Math.floor(r() * 256) : ara;
    olcum[i] = hamming(islenen) + gurultu * normal(r);
  }
  return { duz, olcum };
}

// Pearson korelasyonu
export function korelasyon(x: ArrayLike<number>, y: ArrayLike<number>): number {
  const n = x.length;
  let mx = 0;
  let my = 0;
  for (let i = 0; i < n; i++) {
    mx += x[i]!;
    my += y[i]!;
  }
  mx /= n;
  my /= n;
  let sxy = 0;
  let sxx = 0;
  let syy = 0;
  for (let i = 0; i < n; i++) {
    const a = x[i]! - mx;
    const b = y[i]! - my;
    sxy += a * b;
    sxx += a * a;
    syy += b * b;
  }
  return sxx && syy ? sxy / Math.sqrt(sxx * syy) : 0;
}

// 256 anahtar tahmininin her biri için tahmini sızıntı ile ölçüm arasındaki korelasyon
export function cpa(iz: Izler): Float64Array {
  const y = new Float64Array(256);
  const tahmin = new Float64Array(iz.duz.length);
  for (let k = 0; k < 256; k++) {
    for (let i = 0; i < iz.duz.length; i++) tahmin[i] = hamming(S_KUTUSU[iz.duz[i]! ^ k]!);
    y[k] = korelasyon(tahmin, iz.olcum);
  }
  return y;
}
