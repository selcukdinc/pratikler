import { describe, expect, it } from "vitest";
import { createElement, Fragment } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { inline } from "./Markdown";
import { sorular } from "../../content/sorular/index";
import { aciklamaMetni } from "../../content/sorular/tipler";

const html = (s: string) => renderToStaticMarkup(createElement(Fragment, null, ...inline(s)));
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
    for (const s of sorular) {
      const metinler = [s.soru, aciklamaMetni(s), ...(s.tip === "mcq" ? s.secenekler : [])];
      for (const m of metinler) {
        for (const satir of m.split(/\n\n---\n\n|\n\n/)) {
          expect(gorunur(html(satir)), `${s.id}: ${satir.slice(0, 60)}`).not.toContain("$");
        }
      }
    }
  });
});
