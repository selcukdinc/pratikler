// MatStudio kaynak kodunu sözcüklere ayırır. Köşeli parantez içinde boşlukla
// ayrılan elemanlar için virgül, satır sonu için noktalı virgül eklenir:
// [1 -2 3] üç elemanlı, [1 - 2] tek elemanlıdır.

import { MatlabHatasi } from "./deger";

export type SozcukTuru = "sayi" | "ad" | "metin" | "op" | "anahtar" | "yeni" | "son";

export interface Sozcuk {
  t: SozcukTuru;
  v: string;
  satir: number;
  // Sayılar için değer; sanal sayılarda (3i) im true
  n?: number;
  im?: boolean;
  // Önünde boşluk var mı (komut sözdizimi ve x (1) ayrımı için)
  bosluklu?: boolean;
}

export const ANAHTARLAR = new Set([
  "if", "elseif", "else", "end", "for", "while", "break", "continue", "return", "function", "switch", "case", "otherwise",
]);

const OPLAR2 = [".*", "./", ".\\", ".^", ".'", "==", "~=", "!=", "<=", ">=", "&&", "||"];
const OPLAR1 = "+-*/\\^'<>=&|~!(),;:[]{}@.";

export function sozcukle(kaynak: string): Sozcuk[] {
  const out: Sozcuk[] = [];
  const yigin: string[] = [];
  const n = kaynak.length;
  let i = 0;
  let satir = 1;
  let bosluk = false;
  const icerde = () => yigin.at(-1) === "[" || yigin.at(-1) === "{";
  const ekle = (t: SozcukTuru, v: string, ek: Partial<Sozcuk> = {}) => {
    out.push({ t, v, satir, bosluklu: bosluk, ...ek });
    bosluk = false;
  };
  const degerSonu = () => {
    const s = out.at(-1);
    if (!s) return false;
    if (s.t === "sayi" || s.t === "ad" || s.t === "metin") return true;
    if (s.t === "op") return s.v === ")" || s.v === "]" || s.v === "}" || s.v === "'" || s.v === ".'";
    return s.t === "anahtar" && s.v === "end";
  };

  // Satır başındaki %{ ... %} blok yorumları
  const satirBasi = (k: number) => {
    let j = k - 1;
    while (j >= 0 && (kaynak[j] === " " || kaynak[j] === "\t")) j--;
    return j < 0 || kaynak[j] === "\n";
  };

  while (i < n) {
    const ch = kaynak[i]!;

    if (kaynak.startsWith("...", i)) {
      while (i < n && kaynak[i] !== "\n") i++;
      i++;
      satir++;
      bosluk = true;
      continue;
    }
    if (ch === "%" || (ch === "#" && satirBasi(i))) {
      if (kaynak.startsWith("%{", i) && satirBasi(i) && /^%\{[ \t]*(\r?\n|$)/.test(kaynak.slice(i, i + 4))) {
        const son = kaynak.slice(i).search(/\n[ \t]*%\}/);
        const bitis = son < 0 ? n : i + son + kaynak.slice(i + son).indexOf("%}") + 2;
        satir += (kaynak.slice(i, bitis).match(/\n/g) ?? []).length;
        i = bitis;
        continue;
      }
      while (i < n && kaynak[i] !== "\n") i++;
      continue;
    }
    if (ch === "\n") {
      if (icerde()) {
        const s = out.at(-1);
        if (s && !(s.t === "op" && (s.v === ";" || s.v === "[" || s.v === "{"))) ekle("op", ";");
      } else if (yigin.length === 0) {
        ekle("yeni", "\n");
      }
      satir++;
      i++;
      bosluk = false;
      continue;
    }
    if (ch === " " || ch === "\t" || ch === "\r") {
      let j = i;
      while (j < n && (kaynak[j] === " " || kaynak[j] === "\t" || kaynak[j] === "\r")) j++;
      if (icerde() && degerSonu()) {
        const a = kaynak[j] ?? "";
        const b = kaynak[j + 1] ?? "";
        let ayir = false;
        if (/[0-9A-Za-z_(['"@]/.test(a)) ayir = true;
        else if (a === "." && /[0-9]/.test(b)) ayir = true;
        else if ((a === "+" || a === "-") && b && !/[\s=]/.test(b)) ayir = true;
        else if ((a === "~" || a === "!") && b !== "=") ayir = true;
        if (ayir) ekle("op", ",");
      }
      i = j;
      bosluk = true;
      continue;
    }

    // Sayı: 3, 3.5, .5, 1e-3, 2i. "1./x" içindeki nokta sayıya katılmaz.
    const sm = /^(?:\d+(?:\.(?![*/\\^'])\d*)?|\.\d+)(?:[eE][-+]?\d+)?/.exec(kaynak.slice(i, i + 64));
    if (sm && (/\d/.test(ch) || (ch === "." && /\d/.test(kaynak[i + 1] ?? "")))) {
      let v = sm[0];
      let im = false;
      const sonra = kaynak[i + v.length] ?? "";
      if ((sonra === "i" || sonra === "j") && !/[A-Za-z0-9_]/.test(kaynak[i + v.length + 1] ?? "")) im = true;
      ekle("sayi", v, { n: Number(v), im });
      i += v.length + (im ? 1 : 0);
      continue;
    }

    if (/[A-Za-z_]/.test(ch)) {
      let j = i + 1;
      while (j < n && /[A-Za-z0-9_]/.test(kaynak[j]!)) j++;
      const ad = kaynak.slice(i, j);
      ekle(ANAHTARLAR.has(ad) ? "anahtar" : "ad", ad);
      i = j;
      continue;
    }

    // Tek tırnak: değerin hemen ardındaysa devrik, değilse metin
    if (ch === "'" && !(degerSonu() && !bosluk)) {
      let j = i + 1;
      let s = "";
      for (;;) {
        if (j >= n || kaynak[j] === "\n") throw new MatlabHatasi("Metin kapanmamış: tek tırnağı (') kapatmayı unutma.", satir);
        if (kaynak[j] === "'") {
          if (kaynak[j + 1] === "'") {
            s += "'";
            j += 2;
            continue;
          }
          break;
        }
        s += kaynak[j++];
      }
      ekle("metin", s);
      i = j + 1;
      continue;
    }
    if (ch === '"') {
      let j = i + 1;
      let s = "";
      for (;;) {
        if (j >= n || kaynak[j] === "\n") throw new MatlabHatasi('Metin kapanmamış: çift tırnağı (") kapatmayı unutma.', satir);
        if (kaynak[j] === '"') {
          if (kaynak[j + 1] === '"') {
            s += '"';
            j += 2;
            continue;
          }
          break;
        }
        s += kaynak[j++];
      }
      ekle("metin", s);
      i = j + 1;
      continue;
    }

    const iki = kaynak.slice(i, i + 2);
    if (OPLAR2.includes(iki)) {
      ekle("op", iki === "!=" ? "~=" : iki);
      i += 2;
      continue;
    }
    if (OPLAR1.includes(ch)) {
      if (ch === "(" || ch === "[" || ch === "{") yigin.push(ch);
      else if (ch === ")" || ch === "]" || ch === "}") {
        const bek = ch === ")" ? "(" : ch === "]" ? "[" : "{";
        if (yigin.at(-1) !== bek) throw new MatlabHatasi(`Eşleşmeyen '${ch}'. Parantezleri kontrol et.`, satir);
        yigin.pop();
        // "[1 2 ]" gibi kapanıştan önceki fazladan ayırıcıları sil
        if (ch === "]" || ch === "}") while (out.at(-1)?.t === "op" && (out.at(-1)!.v === "," || out.at(-1)!.v === ";") && out.at(-2)?.v !== "[") out.pop();
      }
      ekle("op", ch === "!" ? "~" : ch);
      i++;
      continue;
    }
    throw new MatlabHatasi(`Beklenmeyen karakter: '${ch}'`, satir);
  }
  if (yigin.length) throw new MatlabHatasi(`Kapanmamış '${yigin.at(-1)}'. Parantezleri kontrol et.`, satir);
  out.push({ t: "son", v: "", satir });
  return out;
}
