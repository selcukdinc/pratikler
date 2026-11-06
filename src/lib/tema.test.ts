import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { TEMA_ADI, TEMA_SIRASI, temaDegeri } from "./tema";

const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
const html = readFileSync(new URL("../../index.html", import.meta.url), "utf8");

// Bir tema bloğundaki --ad: #rrggbb değişkenleri
function renkler(secici: string): Record<string, string> {
  const blok = css.match(new RegExp(`${secici.replace(/[[\]"]/g, "\\$&")}\\s*\\{([^}]*)\\}`))?.[1] ?? "";
  const uzun = (h: string) => (h.length === 4 ? `#${[...h.slice(1)].map((c) => c + c).join("")}` : h);
  return Object.fromEntries([...blok.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6}|#[0-9a-f]{3})\b/gi)].map((m) => [m[1]!, uzun(m[2]!)]));
}

// WCAG göreli parlaklık ve kontrast oranı
const parlaklik = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
};
const kontrast = (a: string, b: string) => {
  const [x, y] = [parlaklik(a), parlaklik(b)].sort((p, q) => q - p);
  return (x! + 0.05) / (y! + 0.05);
};

describe("temalar", () => {
  it("dört seçenek, her birinin adı var", () => {
    expect(TEMA_SIRASI).toEqual(["sistem", "acik", "koyu", "kahve"]);
    for (const t of TEMA_SIRASI) expect(TEMA_ADI[t]).toBeTruthy();
  });

  it("data-theme değeri: kahve sistem ayarından bağımsızdır", () => {
    expect(temaDegeri("kahve", true)).toBe("kahve");
    expect(temaDegeri("kahve", false)).toBe("kahve");
    expect(temaDegeri("sistem", true)).toBe("dark");
    expect(temaDegeri("sistem", false)).toBe("light");
    expect(temaDegeri("acik", true)).toBe("light");
    expect(temaDegeri("koyu", false)).toBe("dark");
  });

  it("index.html'deki ön betik kahveyi tanır (ilk çizimde parlama olmasın)", () => {
    expect(html).toContain('t === "kahve" ? "kahve"');
  });

  for (const [ad, secici] of [["aydınlık", ":root"], ["karanlık", ':root[data-theme="dark"]'], ["kahve", ':root[data-theme="kahve"]']] as const) {
    it(`${ad}: metin, soluk metin ve bağlantı zeminde okunur (en az 4.5:1)`, () => {
      const r = { ...renkler(":root"), ...renkler(secici) };
      for (const on of ["text", "muted", "link", "section-text"]) {
        for (const zemin of ["panel", "window"]) {
          expect(kontrast(r[on]!, r[zemin]!), `${on} / ${zemin}`).toBeGreaterThanOrEqual(4.5);
        }
      }
    });
  }
});
