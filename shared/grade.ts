// Kapalı uçlu soruların puanlaması. Sunucuda çalışır; doğru cevaplar
// istemciye hiç gönderilmez.

export type QuestionType = "tf" | "mcq" | "fill" | "num" | "code" | "wave";

export type Answer =
  | { value: boolean }
  | { index: number }
  | { blanks: string[] };

// fill ve num sorularında her boşluk için kabul edilen yazımlar. num
// sorularında her yazım bir sayı belirtimidir (bkz. sayiBelirtimi).
type Expected =
  | { value: boolean }
  | { index: number }
  | { blanks: string[][] };

// Büyük/küçük harf, boşluklar, noktalama ve Türkçe karakterler önemsizdir
// (Türkçe klavyesi olmayan da "ozyeterlilik" yazabilsin)
const TR: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", â: "a", î: "i", û: "u" };
export function normalize(s: string): string {
  return s
    .toLocaleLowerCase("tr-TR")
    .replace(/[çğıöşüâîû]/g, (c) => TR[c] ?? c)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\s.,;:!?'"’()]+/g, "");
}

// ---- Sayısal cevaplar ----
//
// Bir num boşluğunun kabul ettiği her yazım şu biçimlerden biridir:
//   "1.48"          tek değer; varsayılan tolerans %0,5 (en az 1e-9)
//   "1.48±0.01"     tek değer ve mutlak tolerans ("+-" de yazılabilir)
//   "[1 2 -1]"      dizi; her eleman varsayılan toleransla karşılaştırılır
//   "[0.5 0.25]±0.01" dizi ve her eleman için mutlak tolerans
//
// Öğrenci tek değerde ondalık için virgül ya da nokta, kesir (3/4), pi ve
// karekök (sqrt(2)) yazabilir. Dizilerde elemanlar boşlukla, noktalı virgülle
// ya da virgülle ayrılır (MATLAB ve Octave yazımı gibi); bu yüzden dizide ondalık için
// nokta kullanılır. Köşeli parantez isteğe bağlıdır.

export interface SayiBelirtimi {
  degerler: number[];
  dizi: boolean;
  tolerans: number | null;
}

export function sayiBelirtimi(s: string): SayiBelirtimi | null {
  const [govde, tol] = s.split(/±|\+-/).map((x) => x.trim());
  if (govde === undefined) return null;
  const tolerans = tol === undefined ? null : sayiOku(tol);
  if (tol !== undefined && (tolerans === null || tolerans < 0)) return null;
  const dizi = govde.startsWith("[");
  const degerler = dizi ? diziOku(govde) : [sayiOku(govde)];
  if (!degerler || degerler.some((d) => d === null)) return null;
  return { degerler: degerler as number[], dizi, tolerans };
}

// Tek sayı: -1,5 · 2.25 · 3/4 · -pi/2 · 2pi · sqrt(2)/2 · 1e-3 · 0.5^2
export function sayiOku(s: string): number | null {
  const t = s.trim().replace(/\s+/g, "").replace(/π/g, "pi").replace(/√\(?([0-9.]+)\)?/g, "sqrt($1)");
  if (!t) return null;
  // Virgüllü ondalık (yalnızca tek sayıda): "1,5" -> "1.5"
  const n = /^[-+]?\d+,\d+$/.test(t) ? t.replace(",", ".") : t;
  if (!/^[-+*/^().\deE0-9pisqrt]+$/i.test(n)) return null;
  try {
    const v = ifade(n.toLowerCase());
    return Number.isFinite(v) ? v : null;
  } catch {
    return null;
  }
}

function diziOku(s: string): (number | null)[] | null {
  const ic = s.trim().replace(/^\[/, "").replace(/\]$/, "").trim();
  if (!ic) return [];
  return ic.split(/[\s,;]+/).filter(Boolean).map(sayiOku);
}

// Küçük bir özyinelemeli ifade çözümleyici: + - * / ^, parantez, pi, sqrt(),
// sayının hemen ardından gelen pi ("2pi") çarpma sayılır.
function ifade(s: string): number {
  let i = 0;
  const bak = () => s[i];
  const toplam = (): number => {
    let v = carpim();
    while (bak() === "+" || bak() === "-") v = s[i++] === "+" ? v + carpim() : v - carpim();
    return v;
  };
  const carpim = (): number => {
    let v = us();
    for (;;) {
      if (bak() === "*") { i++; v *= us(); }
      else if (bak() === "/") { i++; v /= us(); }
      else if (bak() === "p" || bak() === "s" || bak() === "(") v *= us();
      else return v;
    }
  };
  const us = (): number => {
    const v = birli();
    if (bak() === "^") { i++; return v ** us(); }
    return v;
  };
  const birli = (): number => {
    if (bak() === "-") { i++; return -birli(); }
    if (bak() === "+") { i++; return birli(); }
    return temel();
  };
  const temel = (): number => {
    if (s.startsWith("pi", i)) { i += 2; return Math.PI; }
    if (s.startsWith("sqrt(", i)) {
      i += 5;
      const v = toplam();
      if (s[i++] !== ")") throw new Error(")");
      return Math.sqrt(v);
    }
    if (bak() === "(") {
      i++;
      const v = toplam();
      if (s[i++] !== ")") throw new Error(")");
      return v;
    }
    const m = /^(\d+\.?\d*|\.\d+)(e[-+]?\d+)?/.exec(s.slice(i));
    if (!m) throw new Error("sayı");
    i += m[0].length;
    return Number(m[0]);
  };
  const v = toplam();
  if (i !== s.length) throw new Error("fazla");
  return v;
}

const yakin = (a: number, b: number, tol: number | null) =>
  Math.abs(a - b) <= (tol ?? Math.max(1e-9, Math.abs(b) * 0.005));

// Öğrencinin yazdığı metin beklenen belirtime uyuyor mu
export function sayiEslesir(beklenen: string, yazilan: string): boolean {
  const b = sayiBelirtimi(beklenen);
  if (!b) return false;
  if (b.dizi) {
    const y = diziOku(yazilan);
    return !!y && y.length === b.degerler.length && y.every((v, k) => v !== null && yakin(v, b.degerler[k]!, b.tolerans));
  }
  const v = sayiOku(yazilan);
  return v !== null && yakin(v, b.degerler[0]!, b.tolerans);
}

// fill ve num sorularında her boşluğun ayrıca doğru olup olmadığı; öğrenci
// yalnızca yanlış boşluğa odaklanabilsin. Boşluk sayısı tutmazsa null.
export function boslukSonuclari(expected: Expected, answer: Answer, tur: QuestionType = "fill"): boolean[] | null {
  if (!("blanks" in expected) || !("blanks" in answer)) return null;
  const want = expected.blanks as string[][];
  const got = answer.blanks as string[];
  if (!Array.isArray(got) || got.length !== want.length) return null;
  const esit = tur === "num" ? sayiEslesir : (o: string, y: string) => normalize(o) === normalize(y);
  return want.map((options, i) => options.some((o) => esit(o, String(got[i] ?? ""))));
}

export function grade(type: QuestionType, expected: Expected, answer: Answer): boolean {
  switch (type) {
    case "tf":
      return "value" in expected && "value" in answer && expected.value === answer.value;
    case "mcq":
      return "index" in expected && "index" in answer && expected.index === answer.index;
    case "fill":
    case "num":
      return boslukSonuclari(expected, answer, type)?.every(Boolean) ?? false;
    default:
      // code ve wave soruları tohumlu iz karşılaştırmasıyla puanlanacak
      return false;
  }
}
