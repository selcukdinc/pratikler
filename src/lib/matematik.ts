// Formüller LaTeX olarak yazılır ve KaTeX ile çizilir:
//   $v = v_0 + at$        satır içi
//   $$x = \frac{1}{2}at^2$$  ayrı satırda, ortalanmış
// Ondalık virgül `{,}` ile yazılır (3{,}5); `~` kullanılmaz (soru üreticisi ~ işaretini
// ters tırnağa çevirir), boşluk için `\,` ya da `\ ` yazılır.
import katex from "katex";

export const MATEMATIK = /\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g;

// Veritabanından "\n" (ters bölü + n) olarak gelen satır sonlarını gerçek satır sonuna
// çevirir; formüllerin içindeki \nu, \neq gibi komutlara dokunmaz.
export function satirSonlari(metin: string): string {
  if (!metin.includes("\\n")) return metin;
  let out = "";
  let son = 0;
  for (const m of metin.matchAll(MATEMATIK)) {
    out += metin.slice(son, m.index).replace(/\\n/g, "\n") + m[0];
    son = m.index! + m[0].length;
  }
  return out + metin.slice(son).replace(/\\n/g, "\n");
}

const onbellek = new Map<string, string>();
export function matematikHtml(kaynak: string): { html: string; blok: boolean } {
  const blok = kaynak.startsWith("$$");
  const tex = kaynak.slice(blok ? 2 : 1, blok ? -2 : -1).trim();
  const anahtar = (blok ? "B" : "S") + tex;
  let html = onbellek.get(anahtar);
  if (html === undefined) {
    html = katex.renderToString(tex, { displayMode: blok, throwOnError: false, output: "htmlAndMathml", strict: "ignore" });
    onbellek.set(anahtar, html);
  }
  return { html, blok };
}

// Formüllerin ekranda kabaca kapladığı metin: komutlar ve süslü parantezler atılır.
// Şık uzunluğu ve parantez denetimi (sik-denetimi.ts) formülün kaynağına değil buna bakar.
export function gorunurMetin(s: string): string {
  return s.replace(MATEMATIK, (m) =>
    m
      .replace(/^\$+|\$+$/g, "")
      .replace(/\\(?:left|right|,|;|!|quad|qquad)/g, "")
      .replace(/\\(?:text|mathrm|mathbf|vec|hat|bar|overline)\s*/g, "")
      .replace(/\\([a-zA-Z]+)/g, "$1")
      .replace(/[{}]/g, ""),
  );
}

// Formül hatalı mı (testler için): KaTeX'in hata işaretini arar
export function matematikHatasi(s: string): string | null {
  for (const m of s.matchAll(MATEMATIK)) {
    const blok = m[0].startsWith("$$");
    const tex = m[0].slice(blok ? 2 : 1, blok ? -2 : -1);
    try {
      katex.renderToString(tex, { displayMode: blok, throwOnError: true, strict: "ignore" });
    } catch (e) {
      return `${m[0]}: ${(e as Error).message}`;
    }
  }
  return null;
}

// Liste ve özetlerde soru metninin kısası: şekil kodları ve kod blokları atılır,
// ayrı satır formüller satır içine alınır, kesme noktası bir formülün ortasına düşmez.
export function ozetMetin(metin: string, uzunluk: number): string {
  const s = satirSonlari(metin)
    .replace(/```[\s\S]*?```/g, "[kod]")
    .replace(/\[\[G-[A-Z]\d+-\d+\]\]/g, "")
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, t: string) => `$${t.trim()}$`)
    .replace(/\s+/g, " ")
    .trim();
  if (s.length <= uzunluk) return s;
  let kes = uzunluk - 1;
  for (const m of s.matchAll(MATEMATIK)) {
    if (m.index! < kes && m.index! + m[0].length > kes) kes = m.index!;
  }
  return `${s.slice(0, kes).trimEnd()}…`;
}
