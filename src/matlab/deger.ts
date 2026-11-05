// MatStudio yorumlayıcısının değer türleri. Matrisler MatStudio'daki gibi sütun
// sırasıyla (column-major) saklanır: (i, j) elemanı re[j * r + i].

export class MatlabHatasi extends Error {
  satir: number | null;
  constructor(mesaj: string, satir: number | null = null) {
    super(mesaj);
    this.satir = satir;
  }
}

export type Sinif = "double" | "logical" | "char";

export interface Matris {
  tur: "matris";
  r: number;
  c: number;
  re: number[];
  // Sanal kısım; hepsi sıfırsa null
  im: number[] | null;
  sinif: Sinif;
}

export interface Fonk {
  tur: "fonk";
  // Adlandırılmış fonksiyona tutamak (@sin) ya da anonim fonksiyon (@(x) x.^2)
  ad?: string;
  params?: string[];
  govde?: unknown;
  kapanis?: Map<string, Deger>;
  metin: string;
}

export type Deger = Matris | Fonk;

export const hata = (m: string): never => {
  throw new MatlabHatasi(m);
};

export function mat(r: number, c: number, re: number[], im: number[] | null = null, sinif: Sinif = "double"): Matris {
  if (im && im.every((v) => v === 0)) im = null;
  return { tur: "matris", r, c, re, im, sinif };
}

export const sayi = (v: number): Matris => mat(1, 1, [v]);
export const karmasik = (re: number, im: number): Matris => mat(1, 1, [re], [im]);
export const mantik = (v: boolean): Matris => mat(1, 1, [v ? 1 : 0], null, "logical");
export const bos = (): Matris => mat(0, 0, []);
export const satirVektor = (v: number[], im: number[] | null = null): Matris => mat(v.length ? 1 : 1, v.length, v, im);
export const sutunVektor = (v: number[], im: number[] | null = null): Matris => mat(v.length, 1, v, im);
export const metin = (s: string): Matris => mat(s.length ? 1 : 0, s.length, [...s].map((k) => k.codePointAt(0)!), null, "char");

export function matrisMi(d: Deger): d is Matris {
  return d.tur === "matris";
}

export function matris(d: Deger, ne = "Bu işlem"): Matris {
  if (d.tur !== "matris") hata(`${ne} bir fonksiyon tutamağıyla yapılamaz.`);
  return d as Matris;
}

export const numel = (m: Matris) => m.r * m.c;
export const skalerMi = (m: Matris) => m.r === 1 && m.c === 1;
export const vektorMu = (m: Matris) => (m.r === 1 || m.c === 1) && numel(m) > 0;
export const bosMu = (m: Matris) => numel(m) === 0;

export function skaler(d: Deger, ne: string): number {
  const m = matris(d, ne);
  if (numel(m) < 1) hata(`${ne} için bir sayı gerekiyor, boş matris verildi.`);
  return m.re[0]!;
}

export function tamsayi(d: Deger, ne: string): number {
  const v = skaler(d, ne);
  if (!Number.isInteger(v)) hata(`${ne} tam sayı olmalı (verilen: ${v}).`);
  return v;
}

export function metinMi(d: Deger): boolean {
  return d.tur === "matris" && d.sinif === "char";
}

export function metneCevir(d: Deger): string {
  const m = matris(d);
  return String.fromCodePoint(...m.re.map((k) => Math.max(0, Math.round(k))));
}

export function dogruMu(d: Deger): boolean {
  const m = matris(d, "Koşul");
  if (bosMu(m)) return false;
  for (const v of m.re) if (v === 0 || Number.isNaN(v)) return false;
  return true;
}

export function boyutYazisi(d: Deger): string {
  if (d.tur === "fonk") return "1×1";
  return `${d.r}×${d.c}`;
}

export function sinifAdi(d: Deger): string {
  if (d.tur === "fonk") return "function_handle";
  return d.sinif;
}

export const EN_FAZLA_ELEMAN = 5_000_000;
export function boyutDenetle(r: number, c: number) {
  if (!Number.isFinite(r) || !Number.isFinite(c) || r < 0 || c < 0) hata("Boyutlar negatif olmayan sonlu sayılar olmalı.");
  if (r * c > EN_FAZLA_ELEMAN) hata(`Matris çok büyük (${r}×${c}). Tarayıcıda en fazla ${EN_FAZLA_ELEMAN.toLocaleString("tr-TR")} eleman kullanılabilir.`);
}
