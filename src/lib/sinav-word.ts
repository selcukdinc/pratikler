// Sınav kağıdını Word (.docx) dosyasına çevirir: her grup ayrı bölümde (başlık tek
// sütun, sorular kağıttaki sütun sayısıyla), en sonda cevap anahtarı. Tarayıcıda çalışır
// ve yalnızca "Word indir"e basılınca yüklenir. Formüller Word'de düz metin olarak
// yazılır (üst ve alt simgeler korunur); şekiller yerine "[Şekil]" yazılır, şekilli
// kağıtlar için PDF önerilir.

import {
  AlignmentType, BorderStyle, Document, Footer, PageNumber, Packer, Paragraph, SectionType, Table, TableCell, TableRow, TabStopType,
  TextRun, WidthType, type ISectionOptions, type ParagraphChild,
} from "docx";
import {
  GRUP_ADLARI, SIK_HARFLERI, cevapYazisi, kagitMm, toplamPuan,
  type GrupOgesi, type GrupSorusu, type SinavAyari, type SinavBelgesi,
} from "../../shared/sinav";

// 1 mm = 56.7 twip; yazı boyutu yarım punto
const TWIP_MM = 56.6929;
const tw = (mm: number) => Math.round(mm * TWIP_MM);
const YAZI = "Times New Roman";

// ---- LaTeX → düz metin parçaları ----

const SEMBOL: Record<string, string> = {
  alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", varepsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", lambda: "λ",
  mu: "μ", nu: "ν", xi: "ξ", pi: "π", rho: "ρ", sigma: "σ", tau: "τ", phi: "φ", varphi: "φ", chi: "χ", psi: "ψ", omega: "ω",
  Gamma: "Γ", Delta: "Δ", Theta: "Θ", Lambda: "Λ", Pi: "Π", Sigma: "Σ", Phi: "Φ", Psi: "Ψ", Omega: "Ω",
  cdot: "·", times: "×", div: "÷", pm: "±", mp: "∓", le: "≤", leq: "≤", ge: "≥", geq: "≥", neq: "≠", ne: "≠", approx: "≈",
  sim: "∼", equiv: "≡", infty: "∞", partial: "∂", nabla: "∇", sum: "Σ", prod: "Π", int: "∫", circ: "°", degree: "°",
  to: "→", rightarrow: "→", leftarrow: "←", Rightarrow: "⇒", Leftrightarrow: "⇔", leftrightarrow: "↔", angle: "∠",
  ldots: "…", cdots: "⋯", dots: "…", propto: "∝", in: "∈", forall: "∀", exists: "∃", cup: "∪", cap: "∩", neg: "¬",
  land: "∧", lor: "∨", oplus: "⊕", ohm: "Ω", quad: "  ", qquad: "    ", ",": " ", ";": " ", ":": " ", "!": "", " ": " ",
  "%": "%", "$": "$", "{": "{", "}": "}", "_": "_", "#": "#", "&": "&", log: "log", ln: "ln", sin: "sin", cos: "cos",
  tan: "tan", exp: "exp", max: "max", min: "min", lim: "lim",
};
const SARMAL = new Set(["text", "mathrm", "mathbf", "mathit", "operatorname", "textrm", "textbf", "mbox", "boldsymbol", "vec", "hat", "bar", "overline", "underline", "mathsf", "mathcal"]);
const ATLA = new Set(["left", "right", "big", "Big", "bigg", "Bigg", "displaystyle", "limits", "nolimits"]);

export interface Parca { t: string; ust?: boolean; alt?: boolean; kalin?: boolean; egik?: boolean }

export function latexParcalari(s: string, kip: { ust?: boolean; alt?: boolean } = {}): Parca[] {
  const out: Parca[] = [];
  const yaz = (t: string, k = kip) => {
    if (!t) return;
    const son = out[out.length - 1];
    if (son && !!son.ust === !!k.ust && !!son.alt === !!k.alt) son.t += t;
    else out.push({ t, ...(k.ust ? { ust: true } : {}), ...(k.alt ? { alt: true } : {}) });
  };
  let i = 0;
  // {…} grubunu ya da tek simgeyi okur
  const arguman = (): string => {
    while (s[i] === " ") i++;
    if (s[i] === "{") {
      let d = 1;
      const bas = ++i;
      while (i < s.length && d > 0) {
        if (s[i] === "\\") i++;
        else if (s[i] === "{") d++;
        else if (s[i] === "}") d--;
        i++;
      }
      return s.slice(bas, i - 1);
    }
    if (s[i] === "\\") {
      const m = /^\\([a-zA-Z]+|.)/.exec(s.slice(i))!;
      i += m[0].length;
      return m[0];
    }
    return s[i++] ?? "";
  };
  const duz = (x: string) => latexParcalari(x).map((p) => p.t).join("");
  while (i < s.length) {
    const c = s[i]!;
    if (c === "\\") {
      const m = /^\\([a-zA-Z]+|.)/.exec(s.slice(i));
      if (!m) { i++; continue; }
      i += m[0].length;
      const ad = m[1]!;
      // Harfli komuttan sonraki boşluk komutun parçasıdır (\cdot x → ·x)
      if (/^[a-zA-Z]/.test(ad)) while (s[i] === " ") i++;
      if (ad === "frac" || ad === "dfrac" || ad === "tfrac") {
        // Pay işlem içeriyorsa, payda birden çok simgeyse ayraç içine alınır: (a+b)/(2πRC)
        const parca = (x: string, payda: boolean) => {
          const l = latexParcalari(x, kip);
          const d = duz(x);
          const ayrac = d.length > 1 && (payda || /[+\-−·×/ ]/.test(d));
          if (ayrac) yaz("(");
          for (const p of l) yaz(p.t, p);
          if (ayrac) yaz(")");
        };
        parca(arguman(), false);
        yaz("/");
        parca(arguman(), true);
      } else if (ad === "sqrt") {
        let derece = "";
        if (s[i] === "[") {
          const son = s.indexOf("]", i);
          derece = s.slice(i + 1, son);
          i = son + 1;
        }
        const x = arguman();
        const ayrac = duz(x).length > 1;
        yaz(`${derece === "3" ? "∛" : derece ? `${derece}√` : "√"}${ayrac ? "(" : ""}`);
        for (const p of latexParcalari(x, kip)) yaz(p.t, p);
        if (ayrac) yaz(")");
      } else if (SARMAL.has(ad)) {
        for (const p of latexParcalari(arguman(), kip)) yaz(p.t, p);
      } else if (ATLA.has(ad)) {
        // \left( gibi: ardındaki ayraç olduğu gibi yazılır
      } else yaz(SEMBOL[ad] ?? ad);
    } else if (c === "^" || c === "_") {
      i++;
      const k = c === "^" ? { ust: true } : { alt: true };
      for (const p of latexParcalari(arguman(), k)) yaz(p.t, k);
    } else if (c === "{" || c === "}") i++;
    else if (c === "~") { yaz(" "); i++; }
    else { yaz(c); i++; }
  }
  return out;
}

// Soru metni: **kalın**, *eğik*, `kod`, $formül$, [[şekil]]; satırlar paragraflara bölünür
export function metinParcalari(satir: string): Parca[] {
  const out: Parca[] = [];
  const re = /\$\$([^$]+)\$\$|\$([^$]+)\$|\*\*([^*]+)\*\*|\*([^*\s][^*]*)\*|`([^`]+)`|\[\[[^\]]+\]\]/g;
  let son = 0;
  for (const m of satir.matchAll(re)) {
    if (m.index! > son) out.push({ t: satir.slice(son, m.index) });
    if (m[1] ?? m[2]) out.push(...latexParcalari((m[1] ?? m[2])!));
    else if (m[3]) out.push({ t: m[3], kalin: true });
    else if (m[4]) out.push({ t: m[4], egik: true });
    else if (m[5]) out.push({ t: m[5] });
    else out.push({ t: "[Şekil]", egik: true });
    son = m.index! + m[0].length;
  }
  if (son < satir.length) out.push({ t: satir.slice(son) });
  return out;
}

const kosu = (p: Parca, boy: number, ek: { kalin?: boolean; egik?: boolean } = {}) =>
  new TextRun({
    text: p.t, font: YAZI, size: boy, bold: p.kalin || ek.kalin, italics: p.egik || ek.egik,
    superScript: p.ust, subScript: p.alt,
  });

// Markdown benzeri metni paragraflara çevirir; ilk paragrafın başına ön ek konabilir
function paragraflar(metin: string, boy: number, { on = [] as ParagraphChild[], girinti = 0, asilGirinti = 0, sonra = 0 } = {}): Paragraph[] {
  const satirlar = metin.replace(/\r/g, "").split(/\n+/).map((x) => x.replace(/^\s*[-*]\s+/, "• ")).filter((x) => x.trim());
  if (!satirlar.length) satirlar.push("");
  return satirlar.map((x, i) => new Paragraph({
    children: [...(i === 0 ? on : []), ...metinParcalari(x).map((p) => kosu(p, boy))],
    indent: { left: tw(girinti), hanging: i === 0 && asilGirinti ? tw(asilGirinti) : undefined },
    spacing: { after: i === satirlar.length - 1 ? sonra : 40 },
  }));
}

// ---- Bölümler ----

// Sade başlık: çerçevesiz, sola dayalı; kurum ve sınav bilgisi aynı satırda (sağa sekme),
// ders ve sınav adı kalın, grup sağda; kimlik alanları tek satırda; altında ince çizgi.
function sadeBaslik(ayar: SinavAyari, toplam: number, grup: string | undefined, boy: number, icEn: number): Paragraph[] {
  const sag = [{ type: TabStopType.RIGHT, position: tw(icEn) }];
  const tarih = ayar.tarih ? new Date(`${ayar.tarih}T12:00:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }) : "";
  const bilgi = [tarih && `Tarih: ${tarih}`, ayar.sure > 0 && `Süre: ${ayar.sure} dakika`, ayar.puanGoster && toplam > 0 && `Toplam: ${toplam} puan`].filter(Boolean).join("   ·   ");
  const kurum = [ayar.universite, ayar.fakulte].filter(Boolean).join(" · ").toLocaleUpperCase("tr-TR");
  const ad = [ayar.ders, ayar.sinavAdi].filter(Boolean).join(" — ");
  const out: Paragraph[] = [];
  if (kurum || bilgi) {
    out.push(new Paragraph({ tabStops: sag, spacing: { after: 20 }, children: [new TextRun({ text: `${kurum}${bilgi ? `\t${bilgi}` : ""}`, font: YAZI, size: boy - 3 })] }));
  }
  if (ad || grup) {
    out.push(new Paragraph({
      tabStops: sag, spacing: { after: 40 },
      children: [new TextRun({ text: ad, font: YAZI, size: boy + 1, bold: true }), ...(grup ? [new TextRun({ text: `\tGrup ${grup}`, font: YAZI, size: boy + 1, bold: true })] : [])],
    }));
  }
  const kimlik = [ayar.adSoyad && "Adı Soyadı:", ayar.numara && "Numarası:", ayar.imza && "İmza:"].filter((x): x is string => !!x);
  if (kimlik.length) {
    // Alanlar satırı eşit bölüşür: her alanın sonunda noktalı sekme
    const parca = icEn / kimlik.length;
    out.push(new Paragraph({
      spacing: { before: 60, after: 40 },
      tabStops: kimlik.map((_, i) => ({ type: TabStopType.RIGHT, position: tw(parca * (i + 1) - 4), leader: "dot" as const })),
      children: kimlik.map((k, i) => new TextRun({ text: `${i ? "    " : ""}${k}\t`, font: YAZI, size: boy })),
    }));
  }
  if (ayar.yonerge.trim()) out.push(...paragraflar(ayar.yonerge, boy - 2));
  // Başlığın altındaki ince çizgi
  out.push(new Paragraph({ children: [], border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "111111", space: 1 } }, spacing: { after: 120 } }));
  return out;
}

function baslik(ayar: SinavAyari, toplam: number, grup: string | undefined, boy: number, icEn: number): (Paragraph | Table)[] {
  if (ayar.baslik === "sade") return sadeBaslik(ayar, toplam, grup, boy, icEn);
  const ortala = (metin: string, ek: { kalin?: boolean; buyuk?: boolean; egik?: boolean } = {}) =>
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: ek.buyuk ? metin.toLocaleUpperCase("tr-TR") : metin, font: YAZI, size: boy, bold: ek.kalin, italics: ek.egik })],
    });
  const satirlar: Paragraph[] = [];
  if (grup) satirlar.push(new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: `${grup} GRUBU`, font: YAZI, size: boy + 6, bold: true })] }));
  for (const k of ["universite", "fakulte"] as const) if (ayar[k]) satirlar.push(ortala(ayar[k], { kalin: true, buyuk: true }));
  for (const k of ["ders", "sinavAdi"] as const) if (ayar[k]) satirlar.push(ortala(ayar[k], { kalin: true }));
  const tarih = ayar.tarih ? new Date(`${ayar.tarih}T12:00:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }) : "";
  const bilgi = [tarih && `Tarih: ${tarih}`, ayar.sure > 0 && `Süre: ${ayar.sure} dakika`, ayar.puanGoster && toplam > 0 && `Toplam: ${toplam} puan`].filter(Boolean);
  if (bilgi.length) satirlar.push(ortala(bilgi.join("     ")));
  const kimlik = [ayar.adSoyad && "Adı Soyadı:", ayar.numara && "Numarası:", ayar.imza && "İmza:"].filter((x): x is string => !!x);
  for (const k of kimlik) {
    satirlar.push(new Paragraph({
      spacing: { before: 120 },
      tabStops: [{ type: TabStopType.RIGHT, position: tw(icEn - 6), leader: "dot" }],
      children: [new TextRun({ text: `${k}\t`, font: YAZI, size: boy })],
    }));
  }
  if (ayar.yonerge.trim()) satirlar.push(...paragraflar(ayar.yonerge, boy - 2).map((p) => p));
  const cizgi = { style: BorderStyle.SINGLE, size: 8, color: "111111" };
  return [
    new Table({
      width: { size: tw(icEn), type: WidthType.DXA },
      columnWidths: [tw(icEn)],
      rows: [new TableRow({ children: [new TableCell({ children: satirlar, borders: { top: cizgi, bottom: cizgi, left: cizgi, right: cizgi }, margins: { top: 80, bottom: 80, left: 120, right: 120 } })] })],
    }),
    new Paragraph({ children: [], spacing: { after: 120 } }),
  ];
}

function sorular(ogeler: GrupOgesi[], ayar: SinavAyari, boy: number): Paragraph[] {
  const out: Paragraph[] = [];
  let no = 0;
  for (const o of ogeler) {
    if (o.tur === "metin") {
      out.push(...paragraflar(o.metin, boy, { sonra: 120 }).map((p) => p));
      continue;
    }
    no++;
    const on: ParagraphChild[] = [new TextRun({ text: `${no}.\t`, font: YAZI, size: boy, bold: true })];
    if (o.soru.type === "tf") on.push(new TextRun({ text: "(     ) ", font: YAZI, size: boy, bold: true }));
    const govde = paragraflar(o.metin, boy, { on, girinti: 6, asilGirinti: 6, sonra: 60 });
    if (ayar.puanGoster && o.puan) {
      govde[govde.length - 1]!.addChildElement(new TextRun({ text: ` (${o.puan} puan)`, font: YAZI, size: boy - 4, italics: true }));
    }
    out.push(...govde);
    o.siklar.forEach((s, i) => {
      out.push(...paragraflar(s, boy, {
        on: [new TextRun({ text: `${SIK_HARFLERI[i]})\t`, font: YAZI, size: boy, bold: true })],
        girinti: 12, asilGirinti: 6, sonra: i === o.siklar.length - 1 ? 0 : 20,
      }));
    });
    const bos = o.soru.type === "yaz" ? 8 : o.soru.type === "num" ? 2 : 0;
    for (let k = 0; k < bos; k++) out.push(new Paragraph({ children: [] }));
    out.push(new Paragraph({ children: [], spacing: { after: 160 } }));
  }
  return out;
}

function anahtar(belge: SinavBelgesi, gruplar: GrupOgesi[][]): (Paragraph | Table)[] {
  const ls = gruplar.map((g) => g.filter((o): o is GrupSorusu => o.tur === "soru"));
  // Sütunlar: soru numarası dar, her grup eşit genişlikte (en çok 40 mm)
  const grupEn = Math.min(40, (210 - 2 * belge.ayar.kenar - 18) / ls.length);
  const enler = [tw(18), ...ls.map(() => tw(grupEn))];
  const n = Math.max(0, ...ls.map((l) => l.length));
  const hucre = (t: string, kalin = false) => new TableCell({
    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: YAZI, size: 22, bold: kalin })] })],
    margins: { top: 40, bottom: 40, left: 80, right: 80 },
  });
  return [
    new Paragraph({ children: [new TextRun({ text: "Cevap anahtarı", font: YAZI, size: 32, bold: true })], spacing: { after: 80 } }),
    new Paragraph({ children: [new TextRun({ text: [belge.ayar.ders, belge.ayar.sinavAdi, belge.ad].filter(Boolean).join(" · "), font: YAZI, size: 22 })], spacing: { after: 200 } }),
    new Table({
      width: { size: enler.reduce((t, x) => t + x, 0), type: WidthType.DXA },
      columnWidths: enler,
      rows: [
        new TableRow({ tableHeader: true, children: [hucre("Soru", true), ...ls.map((_, g) => hucre(ls.length > 1 ? `${GRUP_ADLARI[g]} grubu` : "Cevap", true))] }),
        ...Array.from({ length: n }, (_, i) => new TableRow({ children: [hucre(String(i + 1)), ...ls.map((l) => hucre(l[i] ? cevapYazisi(l[i]!) : ""))] })),
      ],
    }),
  ];
}

export async function sinaviWordeCevir(belge: SinavBelgesi, gruplar: GrupOgesi[][]): Promise<Blob> {
  const { ayar } = belge;
  const mm = kagitMm(ayar);
  const boy = ayar.yazi * 2;
  const icEn = mm.en - 2 * ayar.kenar;
  const sayfa = {
    size: { width: tw(mm.en), height: tw(mm.boy), orientation: ayar.yon === "yatay" ? ("landscape" as const) : ("portrait" as const) },
    margin: { top: tw(ayar.kenar), bottom: tw(ayar.kenar), left: tw(ayar.kenar), right: tw(ayar.kenar) },
  };
  // docx yatay kağıtta eni ve boyu kendisi çevirir; boyutlar dikey olarak verilir
  if (ayar.yon === "yatay") sayfa.size = { ...sayfa.size, width: tw(mm.boy), height: tw(mm.en) };
  const toplam = toplamPuan(belge);
  // Önizlemedeki gibi: alt bilgi yalnızca sayfa numarası istenirse, altta ortada, her grupta 1'den
  const altBilgi = ayar.sayfaNo
    ? { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], font: YAZI, size: 18 })] })] }) }
    : { default: new Footer({ children: [] }) };
  const bolumler: ISectionOptions[] = [];
  gruplar.forEach((g, i) => {
    const grup = gruplar.length > 1 ? GRUP_ADLARI[i] : undefined;
    bolumler.push({
      properties: { page: { ...sayfa, pageNumbers: { start: 1 } }, type: SectionType.NEXT_PAGE },
      footers: altBilgi,
      children: baslik(ayar, toplam, grup, boy, icEn),
    });
    bolumler.push({
      properties: { page: sayfa, type: SectionType.CONTINUOUS, column: { count: ayar.sutun, space: tw(8), separate: ayar.sutun > 1 } },
      footers: altBilgi,
      children: sorular(g, ayar, boy),
    });
  });
  bolumler.push({
    properties: { page: { ...sayfa, size: { width: tw(210), height: tw(297), orientation: "portrait" } }, type: SectionType.NEXT_PAGE },
    footers: { default: new Footer({ children: [] }) },
    children: anahtar(belge, gruplar),
  });
  const doc = new Document({
    creator: "pratikler.selcukdinc.dev",
    title: belge.ad,
    styles: { default: { document: { run: { font: YAZI, size: boy } } } },
    sections: bolumler,
  });
  return Packer.toBlob(doc);
}
