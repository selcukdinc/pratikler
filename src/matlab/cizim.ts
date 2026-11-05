// Şekil (figure) modeli: plot, stem, histogram gibi çağrılar buraya seri
// ekler; çizimi src/components/MatlabSekil.tsx yapar.

import { hata } from "./deger";

export type SeriTuru = "plot" | "stem" | "bar" | "stairs" | "hist" | "scatter" | "area";

export interface Seri {
  tur: SeriTuru;
  x: number[];
  y: number[];
  renk: string;
  cizgi: "-" | "--" | ":" | "-." | "none";
  isaret: string | null;
  dolu?: boolean;
  kalinlik: number;
  // hist: kutu kenarları (x.length + 1); bar: çubuk genişliği oranı
  kenarlar?: number[];
  genislik?: number;
}

export interface Eksen {
  // subplot(m, n, p): kapladığı hücreler (1 tabanlı)
  m: number;
  n: number;
  p: number[];
  seriler: Seri[];
  baslik: string;
  xEtiket: string;
  yEtiket: string;
  izgara: boolean;
  xSinir: [number, number] | null;
  ySinir: [number, number] | null;
  tut: boolean;
  gosterge: string[] | null;
  renkSirasi: number;
  metinler: { x: number; y: number; s: string }[];
}

export interface Sekil {
  no: number;
  eksenler: Eksen[];
  aktif: number;
  ad: string;
}

export interface Cizim {
  sekiller: Sekil[];
  aktif: number;
}

// MatStudio'nun varsayılan renk sırası
export const RENKLER = ["#0072BD", "#D95319", "#EDB120", "#7E2F8E", "#77AC30", "#4DBEEE", "#A2142F"];
const HARF_RENK: Record<string, string> = {
  r: "#FF0000", g: "#00A000", b: "#0000FF", c: "#00BFBF", m: "#BF00BF", y: "#D4C000", k: "#000000", w: "#FFFFFF",
};
const ADLI_RENK: Record<string, string> = {
  red: "r", green: "g", blue: "b", cyan: "c", magenta: "m", yellow: "y", black: "k", white: "w",
};

export const yeniCizim = (): Cizim => ({ sekiller: [], aktif: -1 });

function yeniEksen(m = 1, n = 1, p = [1]): Eksen {
  return {
    m, n, p, seriler: [], baslik: "", xEtiket: "", yEtiket: "", izgara: false, xSinir: null, ySinir: null,
    tut: false, gosterge: null, renkSirasi: 0, metinler: [],
  };
}

export function sekilAc(c: Cizim, no?: number): Sekil {
  if (no !== undefined) {
    const i = c.sekiller.findIndex((s) => s.no === no);
    if (i >= 0) {
      c.aktif = i;
      return c.sekiller[i]!;
    }
  }
  const yeniNo = no ?? (c.sekiller.reduce((m, s) => Math.max(m, s.no), 0) + 1);
  const s: Sekil = { no: yeniNo, eksenler: [], aktif: -1, ad: "" };
  c.sekiller.push(s);
  c.aktif = c.sekiller.length - 1;
  return s;
}

export function aktifSekil(c: Cizim): Sekil {
  return c.sekiller[c.aktif] ?? sekilAc(c);
}

export function aktifEksen(c: Cizim): Eksen {
  const s = aktifSekil(c);
  if (s.aktif < 0 || !s.eksenler[s.aktif]) {
    s.eksenler.push(yeniEksen());
    s.aktif = s.eksenler.length - 1;
  }
  return s.eksenler[s.aktif]!;
}

export function altCizim(c: Cizim, m: number, n: number, p: number[]) {
  if (!(m >= 1 && n >= 1 && m * n <= 64)) hata("subplot(m, n, p): m ve n pozitif olmalı (en fazla 64 alt çizim).");
  for (const k of p) if (!Number.isInteger(k) || k < 1 || k > m * n) hata(`subplot: p, 1 ile ${m * n} arasında olmalı (verilen ${k}).`);
  const s = aktifSekil(c);
  const anahtar = p.join(",");
  let i = s.eksenler.findIndex((e) => e.m === m && e.n === n && e.p.join(",") === anahtar);
  if (i < 0) {
    // Tek, boş varsayılan eksen (subplot'tan önce figure) yerine geçer; çakışan eksenler silinir
    const hucre = (e: Eksen) => {
      const out = new Set<string>();
      for (const q of e.p) {
        const sat = Math.floor((q - 1) / e.n), sut = (q - 1) % e.n;
        for (let a = 0; a < 12; a++)
          for (let b = 0; b < 12; b++) {
            const y0 = sat / e.m, y1 = (sat + 1) / e.m, x0 = sut / e.n, x1 = (sut + 1) / e.n;
            const y = (a + 0.5) / 12, x = (b + 0.5) / 12;
            if (y >= y0 && y < y1 && x >= x0 && x < x1) out.add(`${a},${b}`);
          }
      }
      return out;
    };
    const yeni = yeniEksen(m, n, p);
    const yh = hucre(yeni);
    s.eksenler = s.eksenler.filter((e) => ![...hucre(e)].some((h) => yh.has(h)));
    s.eksenler.push(yeni);
    i = s.eksenler.length - 1;
  }
  s.aktif = i;
}

export interface Stil {
  renk: string | null;
  cizgi: Seri["cizgi"] | null;
  isaret: string | null;
}

// 'r--o', 'k.', ':' gibi çizgi belirtimleri
export function stilCoz(s: string): Stil | null {
  let kalan = s.trim();
  if (!kalan || kalan.length > 4) return null;
  const st: Stil = { renk: null, cizgi: null, isaret: null };
  for (const c of ["--", "-.", "-", ":"] as const) {
    if (kalan.includes(c)) {
      st.cizgi = c;
      kalan = kalan.replace(c, "");
      break;
    }
  }
  for (const ch of kalan) {
    if (HARF_RENK[ch] && !st.renk) st.renk = HARF_RENK[ch]!;
    else if ("o+*.xsd^v<>ph".includes(ch) && !st.isaret) st.isaret = ch;
    else return null;
  }
  return st;
}

export function renkCoz(v: string | number[]): string | null {
  if (Array.isArray(v)) {
    if (v.length !== 3) return null;
    const h = v.map((x) => Math.round(Math.max(0, Math.min(1, x)) * 255).toString(16).padStart(2, "0")).join("");
    return `#${h}`;
  }
  const k = ADLI_RENK[v.toLowerCase()] ?? v;
  return HARF_RENK[k] ?? (/^#[0-9a-f]{6}$/i.test(v) ? v : null);
}

export function seriEkle(e: Eksen, seri: Omit<Seri, "renk"> & { renk: string | null }) {
  if (!e.tut) {
    e.seriler = [];
    e.renkSirasi = 0;
    e.gosterge = null;
    e.metinler = [];
  }
  const renk = seri.renk ?? RENKLER[e.renkSirasi++ % RENKLER.length]!;
  e.seriler.push({ ...seri, renk });
}

export function eksenTemizle(e: Eksen) {
  Object.assign(e, yeniEksen(e.m, e.n, e.p));
}
