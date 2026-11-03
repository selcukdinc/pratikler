import { describe, expect, it } from "vitest";
import { createElement, Fragment } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { inline } from "./Markdown";
import { SORULAR } from "../../icerik/sorular";
import { pratikBul } from "../../icerik/index";
import { aciklamaMetni } from "../../icerik/tipler";

const html = (s: string, latex = true) => renderToStaticMarkup(createElement(Fragment, null, ...inline(s, false, latex)));
// KaTeX çıktısındaki MathML'in içindeki kaynak (annotation) dolar içermez; görünür metinde $ kalmamalı
const gorunur = (h: string) => h.replace(/<annotation[\s\S]*?<\/annotation>/g, "").replace(/<[^>]+>/g, "");

describe("formüller", () => {
  it("kalın etiketin içindeki formül de dizilir", () => {
    const h = html("**$F_x$:** $$F_x = 15$$");
    expect(h).toContain("<strong>");
    expect(h).toContain("katex");
    expect(gorunur(h)).not.toContain("$");
  });
  it("hiçbir soruda, şıkta ya da çözümde dolar işareti açıkta kalmaz", () => {
    for (const [id, p] of Object.entries(SORULAR)) for (const s of p.sorular) {
      const latex = pratikBul(id)!.latex;
      const metinler = [s.soru, aciklamaMetni(s), ...(s.tip === "mcq" ? s.secenekler : [])];
      for (const m of metinler) {
        for (const satir of m.split(/\n\n---\n\n|\n\n/)) {
          expect(gorunur(html(satir, latex)), `${s.id}: ${satir.slice(0, 60)}`).not.toContain("$");
        }
      }
    }
  });
});
