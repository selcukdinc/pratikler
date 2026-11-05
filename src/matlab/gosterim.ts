// Değerlerin komut penceresinde MatStudio'nun "format short" görünümüne yakın
// yazılması ve num2str/sprintf biçimlendirmesi.

import { metneCevir, numel, type Deger, type Matris } from "./deger";

export type Bicim = "short" | "long";

const tamMi = (v: number) => Number.isInteger(v) && Math.abs(v) < 1e10;

function ozel(v: number): string | null {
  if (Number.isNaN(v)) return "NaN";
  if (v === Infinity) return "Inf";
  if (v === -Infinity) return "-Inf";
  return null;
}

// Tek sayı, örneğin 3.1416, 1.2346e+05
export function sayiYaz(v: number, bicim: Bicim = "short"): string {
  const o = ozel(v);
  if (o) return o;
  if (tamMi(v)) return String(v);
  const b = bicim === "long" ? 15 : 4;
  const a = Math.abs(v);
  if (a >= 1e-3 && a < 1e5) return v.toFixed(b);
  return v.toExponential(b).replace(/e([+-])(\d)$/, "e$10$2");
}

function karmasikYaz(re: number, im: number, bicim: Bicim): string {
  const r = sayiYaz(re, bicim);
  const i = sayiYaz(Math.abs(im), bicim);
  return `${r} ${im < 0 || Object.is(im, -0) ? "-" : "+"} ${i}i`;
}

const EN_FAZLA = 400;

// Matrisin satırları; sütunlar sağa hizalanır
function matrisSatirlari(m: Matris, bicim: Bicim): string[] {
  const n = numel(m);
  if (m.sinif === "char") {
    const out: string[] = [];
    for (let i = 0; i < m.r; i++) {
      let s = "";
      for (let j = 0; j < m.c; j++) s += String.fromCodePoint(Math.max(0, m.re[j * m.r + i]!));
      out.push(s);
    }
    return out;
  }
  const hepsiTam = m.re.every((v) => tamMi(v) || !Number.isFinite(v)) && (!m.im || m.im.every((v) => tamMi(v) || !Number.isFinite(v)));
  const yaz = (k: number) => {
    if (m.im) {
      if (hepsiTam) return `${m.re[k]} ${m.im[k]! < 0 ? "-" : "+"} ${Math.abs(m.im[k]!)}i`;
      return karmasikYaz(m.re[k]!, m.im[k]!, bicim);
    }
    const v = m.re[k]!;
    if (m.sinif === "logical") return String(v);
    if (hepsiTam) return ozel(v) ?? String(v);
    return sayiYaz(v, bicim) === String(v) && Number.isInteger(v) ? (ozel(v) ?? (v === 0 ? "0" : v.toFixed(bicim === "long" ? 15 : 4))) : sayiYaz(v, bicim);
  };
  const sinirli = Math.min(n, EN_FAZLA);
  const hucreler: string[] = [];
  for (let k = 0; k < sinirli; k++) hucreler.push(yaz(k));
  const genislik = Math.max(...hucreler.map((h) => h.length));
  const bosluk = m.sinif === "logical" ? 2 : hepsiTam ? 3 : 4;
  const out: string[] = [];
  const satirSiniri = Math.min(m.r, Math.ceil(sinirli / Math.max(1, m.c)));
  for (let i = 0; i < satirSiniri; i++) {
    let s = "";
    for (let j = 0; j < m.c; j++) {
      const k = j * m.r + i;
      if (k >= sinirli) break;
      s += hepsiTam && !m.im && m.sinif !== "logical" ? hucreler[k]!.padStart(Math.max(6, genislik + 3)) : " ".repeat(bosluk) + hucreler[k]!.padStart(genislik);
    }
    out.push(s);
  }
  if (n > sinirli) out.push(`   ... (${m.r}×${m.c}; ilk ${sinirli} eleman gösterildi)`);
  return out;
}

export function degerYaz(d: Deger, bicim: Bicim = "short"): string {
  if (d.tur === "fonk") return `    ${d.metin}`;
  if (numel(d) === 0) return d.sinif === "char" ? "    ''" : "     []";
  if (d.sinif === "char" && d.r === 1) return `    '${metneCevir(d)}'`;
  return matrisSatirlari(d, bicim).join("\n");
}

// "x = 5" ya da çok satırlı gösterim
export function adliYaz(ad: string, d: Deger, bicim: Bicim = "short"): string {
  if (d.tur === "fonk") return `${ad} =\n\n  function_handle with value:\n\n${degerYaz(d)}\n`;
  if (numel(d) === 1 && d.sinif !== "char") {
    const v = d.im ? karmasikYaz(d.re[0]!, d.im[0]!, bicim) : d.sinif === "logical" ? String(d.re[0]) : sayiYaz(d.re[0]!, bicim);
    return `${ad} = ${v}\n`;
  }
  if (d.sinif === "char" && d.r === 1) return `${ad} = '${metneCevir(d)}'\n`;
  if (numel(d) === 0) return `${ad} =\n\n     []\n`;
  return `${ad} =\n\n${degerYaz(d, bicim)}\n\n`;
}

// Çalışma alanı panelindeki kısa değer: "5", "[1 2 3]", "1×200 double"
export function kisaDeger(d: Deger): string {
  if (d.tur === "fonk") return d.metin;
  const n = numel(d);
  if (d.sinif === "char" && d.r <= 1) return `'${metneCevir(d)}'`.slice(0, 60);
  if (n === 0) return "[]";
  if (n === 1) return d.im ? karmasikYaz(d.re[0]!, d.im[0]!, "short") : sayiYaz(d.re[0]!);
  if (n <= 10 && (d.r === 1 || d.c === 1) && !d.im) {
    const ic = d.re.map((v) => sayiYaz(v)).join(d.r === 1 ? " " : ";");
    if (ic.length <= 60) return `[${ic}]`;
  }
  return `${d.r}×${d.c} ${d.sinif}${d.im ? " (karmaşık)" : ""}`;
}

// ---- num2str ve mat2str ----

export function num2str(m: Matris, hassasiyet?: number | string): string {
  if (m.sinif === "char") return metneCevir(m);
  const tek = (v: number, im?: number) => {
    const f = (x: number) => {
      const o = ozel(x);
      if (o) return o;
      if (typeof hassasiyet === "string") return sprintf(hassasiyet, [x]);
      if (hassasiyet !== undefined) return String(Number(x.toPrecision(hassasiyet)));
      if (tamMi(x)) return String(x);
      const basamak = Math.max(Math.floor(Math.log10(Math.abs(x))) + 5, 5);
      return String(Number(x.toPrecision(Math.min(basamak, 16))));
    };
    if (im === undefined || im === 0) return f(v);
    return `${f(v)}${im < 0 ? "-" : "+"}${f(Math.abs(im))}i`;
  };
  const satirlar: string[] = [];
  for (let i = 0; i < m.r; i++) {
    const h: string[] = [];
    for (let j = 0; j < m.c; j++) h.push(tek(m.re[j * m.r + i]!, m.im?.[j * m.r + i]));
    satirlar.push(h.join("  "));
  }
  return satirlar.join("\n");
}

export function mat2str(m: Matris, hassasiyet = 15): string {
  if (m.sinif === "char") return `'${metneCevir(m)}'`;
  const tek = (k: number) => {
    const f = (x: number) => ozel(x) ?? (m.sinif === "logical" ? (x ? "true" : "false") : String(Number(x.toPrecision(hassasiyet))));
    const im = m.im?.[k] ?? 0;
    return im ? `${f(m.re[k]!)}${im < 0 ? "-" : "+"}${f(Math.abs(im))}i` : f(m.re[k]!);
  };
  if (numel(m) === 1) return tek(0);
  const satirlar: string[] = [];
  for (let i = 0; i < m.r; i++) {
    const h: string[] = [];
    for (let j = 0; j < m.c; j++) h.push(tek(j * m.r + i));
    satirlar.push(h.join(" "));
  }
  return `[${satirlar.join(";")}]`;
}

// ---- sprintf / fprintf ----

export function kacisCoz(s: string): string {
  return s.replace(/\\(n|t|r|\\|a|')/g, (_, k: string) => ({ n: "\n", t: "\t", r: "\r", "\\": "\\", a: "", "'": "'" })[k] ?? k);
}

// Biçim dizgisini değerlerle doldurur; değerler bitene kadar biçim yeniden
// kullanılır (MatStudio'daki gibi). Değerler biçimin ortasında biterse çıktı
// orada kesilir.
type Parca = string | { bayrak: string; gen?: string; has?: string; tur: string };

function parcala(f: string): Parca[] {
  const desen = /%([-+ 0#]*)(\d+|\*)?(?:\.(\d+|\*))?([diouxXfeEgGcs%])/g;
  const out: Parca[] = [];
  let son = 0;
  for (const m of f.matchAll(desen)) {
    if (m.index! > son) out.push(f.slice(son, m.index));
    if (m[4] === "%") out.push("%");
    else out.push({ bayrak: m[1]!, gen: m[2], has: m[3], tur: m[4]! });
    son = m.index! + m[0].length;
  }
  if (son < f.length) out.push(f.slice(son));
  return out;
}

function tekBicim(p: Exclude<Parca, string>, v: number | string, gen?: string, has?: string): string {
  const n = typeof v === "number" ? v : Number.NaN;
  const us = (x: string) => x.replace(/e([+-])(\d)$/, "e$10$2");
  let s: string;
  switch (p.tur) {
    case "d":
    case "i":
    case "u":
      if (typeof v === "string") s = v;
      else if (!Number.isInteger(n)) s = ozel(n) ?? us(n.toExponential(has ? Number(has) : 6));
      else s = String(n);
      break;
    case "f":
      s = typeof v === "string" ? v : (ozel(n) ?? n.toFixed(has ? Number(has) : 6));
      break;
    case "e":
    case "E":
      s = typeof v === "string" ? v : (ozel(n) ?? us(n.toExponential(has ? Number(has) : 6)));
      if (p.tur === "E") s = s.toUpperCase();
      break;
    case "g":
    case "G": {
      if (typeof v === "string") s = v;
      else {
        const k = has ? Math.max(1, Number(has)) : 6;
        s = ozel(n) ?? (n === 0 ? "0" : (() => {
          const u = Math.floor(Math.log10(Math.abs(n)));
          if (u < -4 || u >= k) return us(n.toExponential(k - 1).replace(/\.?0+e/, "e"));
          return String(Number(n.toPrecision(k)));
        })());
      }
      break;
    }
    case "x":
      s = typeof v === "string" ? v : Math.trunc(n).toString(16);
      break;
    case "X":
      s = typeof v === "string" ? v : Math.trunc(n).toString(16).toUpperCase();
      break;
    case "o":
      s = typeof v === "string" ? v : Math.trunc(n).toString(8);
      break;
    case "c":
      s = typeof v === "string" ? v : String.fromCodePoint(Math.max(0, Math.trunc(n)));
      break;
    default:
      s = typeof v === "string" ? v : num2str({ tur: "matris", r: 1, c: 1, re: [n], im: null, sinif: "double" });
      if (has && typeof v === "string") s = s.slice(0, Number(has));
  }
  if (p.bayrak.includes("+") && typeof v === "number" && n >= 0 && "difeEgG".includes(p.tur)) s = "+" + s;
  const g = gen ? Number(gen) : 0;
  if (s.length < g) {
    if (p.bayrak.includes("-")) s = s.padEnd(g);
    else if (p.bayrak.includes("0") && typeof v === "number") s = s.startsWith("-") ? "-" + s.slice(1).padStart(g - 1, "0") : s.padStart(g, "0");
    else s = s.padStart(g);
  }
  return s;
}

export function sprintf(bicim: string, degerler: (number | string)[]): string {
  const parcalar = parcala(kacisCoz(bicim));
  const belirtec = parcalar.filter((p) => typeof p !== "string").length;
  if (belirtec === 0 || degerler.length === 0) return parcalar.map((p) => (typeof p === "string" ? p : "")).join("");
  let k = 0;
  let out = "";
  do {
    for (const p of parcalar) {
      if (typeof p === "string") {
        out += p;
        continue;
      }
      let gen = p.gen;
      let has = p.has;
      if (gen === "*") gen = String(degerler[k++] ?? "");
      if (has === "*") has = String(degerler[k++] ?? "");
      if (k >= degerler.length) return out;
      out += tekBicim(p, degerler[k++]!, gen, has);
    }
  } while (k < degerler.length);
  return out;
}
