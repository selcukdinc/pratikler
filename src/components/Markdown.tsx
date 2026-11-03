import { Fragment, type ReactNode } from "react";
import { terimleriAyir } from "../lib/terimler";
import { SEKIL_DESENI } from "../gorseller";
import { Sekil } from "./Sekil";
import { matematikHtml, satirSonlari } from "../lib/matematik";
import "katex/dist/katex.min.css";

// Düz metindeki terimlerin ardına İngilizce karşılıklarını ekler: "VE (AND)"
function terimli(metin: string): ReactNode {
  const parcalar = terimleriAyir(metin);
  if (parcalar.length === 1 && typeof parcalar[0] === "string") return metin;
  return parcalar.map((p, i) =>
    typeof p === "string" ? (
      <Fragment key={i}>{p}</Fragment>
    ) : (
      <Fragment key={i}>
        {p.metin}
        <span className="terim-en" lang="en"> ({p.en})</span>
      </Fragment>
    ),
  );
}

// Fizik gösterimi: harften sonra gelen _x ya da _{xy} alt indis, ^2 ya da ^{-1} üst indis olur
// ("A_x", "v_{0y}", "m/s^2"). Harf olmadan yazılan alt çizgiler (boşluk "____") dokunulmaz.
const INDIS = /(?<=[0-9A-Za-zα-ωΑ-Ωçğıöşüθ)])([_^])(?:\{([^}]+)\}|([0-9A-Za-zçğıöşü]+|-?\d+))/g;
export function indisli(metin: string): ReactNode {
  if (!/[_^]/.test(metin)) return metin;
  const parcalar: ReactNode[] = [];
  let son = 0;
  for (const m of metin.matchAll(INDIS)) {
    if (m.index! > son) parcalar.push(metin.slice(son, m.index));
    const ic = m[2] ?? m[3]!;
    parcalar.push(m[1] === "_" ? <sub key={m.index}>{ic}</sub> : <sup key={m.index}>{ic}</sup>);
    son = m.index! + m[0].length;
  }
  if (!parcalar.length) return metin;
  if (son < metin.length) parcalar.push(metin.slice(son));
  return <>{parcalar}</>;
}

// Soru ve ders metinleri için küçük bir alt küme: ``` kod blokları, `satır içi kod`,
// **kalın**, $formül$ ve $$ayrı satırda formül$$ (KaTeX, src/lib/matematik.ts), "- " ile başlayan satırlardan madde listesi, "1. " ile başlayan
// satırlardan sıralı liste, "|" ile başlayan satırlardan tablo, "> " ile başlayan
// satırlardan not kutusu ve tek başına [[G-H1-01]] yazılan paragraflardan şekil.
// terim: ders ve soru metinlerinde terimlerin İngilizcesi gösterilir; kod
// parçalarına dokunulmaz.
export function inline(text: string, terim = false): ReactNode[] {
  const duz = (s: string) => (/[_^]/.test(s) ? indisli(s) : terim ? terimli(s) : s);
  return text.split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|`[^`]+`|\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.length > 2 && part.startsWith("$") && part.endsWith("$")) {
      const { html, blok } = matematikHtml(part);
      return <span key={i} className={blok ? "mat-blok" : "mat"} dangerouslySetInnerHTML={{ __html: html }} />;
    }
    if (part.startsWith("`") && part.endsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
    if (part.startsWith("**") && part.endsWith("**")) {
      const ic = part.slice(2, -2);
      // "**$F_x$:**" gibi etiketlerde formül kalın yazının içinde de dizilsin
      return <strong key={i}>{ic.includes("$") ? inline(ic, terim) : duz(ic)}</strong>;
    }
    return <Fragment key={i}>{duz(part)}</Fragment>;
  });
}

// Not kutusunun türü ilk kalın sözcükten anlaşılır: "> **Dikkat:** ..."
const NOT_TURLERI: [RegExp, string][] = [
  [/^\*\*Sık (yapılan )?hata/i, "hata"],
  [/^\*\*Dikkat/i, "dikkat"],
  [/^\*\*İpucu/i, "ipucu"],
  [/^\*\*(Çözümlü )?örnek/i, "ornek"],
];

const hucreler = (satir: string) => satir.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((h) => h.trim());

function blok(p: string, key: string, terim: boolean): ReactNode {
  const sekil = SEKIL_DESENI.exec(p);
  if (sekil) return <Sekil key={key} kod={sekil[1]!} />;
  const satirlar = p.split("\n");
  if (satirlar.every((l) => l.startsWith(">"))) {
    const ic = satirlar.map((l) => l.replace(/^> ?/, "")).join("\n");
    const tur = NOT_TURLERI.find(([d]) => d.test(ic))?.[1] ?? "bilgi";
    return (
      <aside key={key} className={`not not-${tur}`}>
        {bloklar(ic, key, terim)}
      </aside>
    );
  }
  if (satirlar.length >= 2 && satirlar.every((l) => l.startsWith("|")) && /^\|[\s:|-]+\|?$/.test(satirlar[1]!)) {
    const [bas, , ...govde] = satirlar;
    return (
      <div key={key} className="md-tablo">
        <table>
          <thead><tr>{hucreler(bas!).map((h, k) => <th key={k}>{inline(h, terim)}</th>)}</tr></thead>
          <tbody>
            {govde.map((r, k) => (
              <tr key={k}>{hucreler(r).map((h, m) => <td key={m}>{inline(h, terim)}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  // Bir giriş cümlesi ve hemen altında liste: "Şunlar vardır:\n- a\n- b"
  const ilkListe = satirlar.findIndex((l) => /^(- |\d+\. )/.test(l));
  if (ilkListe > 0 && satirlar.slice(ilkListe).every((l) => /^(- |\d+\. )/.test(l))) {
    return [
      <p key={`${key}-g`}>{inline(satirlar.slice(0, ilkListe).join("\n"), terim)}</p>,
      blok(satirlar.slice(ilkListe).join("\n"), `${key}-l`, terim),
    ];
  }
  if (satirlar.every((l) => l.startsWith("- "))) {
    return <ul key={key}>{satirlar.map((l, k) => <li key={k}>{inline(l.slice(2), terim)}</li>)}</ul>;
  }
  if (satirlar.every((l) => /^\d+\. /.test(l))) {
    return <ol key={key}>{satirlar.map((l, k) => <li key={k}>{inline(l.replace(/^\d+\. /, ""), terim)}</li>)}</ol>;
  }
  return <p key={key}>{inline(p, terim)}</p>;
}

function bloklar(text: string, key: string, terim: boolean): ReactNode[] {
  return text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p, j) => blok(p, `${key}-${j}`, terim));
}

export function Markdown({ text, terim = false }: { text: string; terim?: boolean }) {
  const blocks = satirSonlari(text).split(/```(?:vhdl)?\n?([\s\S]*?)```/g);
  return (
    <div className="md">
      {blocks.map((b, i) =>
        i % 2 === 1 ? <pre key={i} className="code">{b.trimEnd()}</pre> : bloklar(b, String(i), terim),
      )}
    </div>
  );
}
