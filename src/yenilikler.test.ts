import { execSync } from "node:child_process";
import { describe, expect, it } from "vitest";
import { YENILIKLER } from "./yenilikler";
import { gorulmemisSayisi, gorunurYenilikler } from "./lib/yenilik";

// Her PR yenilikler.ts'in en üstüne bir kayıt ekler. Bu test kayıtların
// sırasını ve biçimini korur.
describe("yenilikler", () => {
  it("PR numaraları tekil ve en yenisi en üstte", () => {
    const prler = YENILIKLER.map((y) => y.pr);
    expect(prler).toEqual([...new Set(prler)].sort((a, b) => b - a));
  });

  it("tarihler geçerli ve yeniden eskiye", () => {
    for (const y of YENILIKLER) {
      expect(y.tarih, `#${y.pr}`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(y.tarih)), `#${y.pr}`).toBe(false);
    }
    const tarihler = YENILIKLER.map((y) => y.tarih);
    expect(tarihler).toEqual([...tarihler].sort().reverse());
  });

  it("her kaydın başlığı ve en az bir maddesi var", () => {
    for (const y of YENILIKLER) {
      expect(y.baslik.trim(), `#${y.pr}`).not.toBe("");
      expect(y.maddeler.length, `#${y.pr}`).toBeGreaterThan(0);
      for (const m of y.maddeler) expect((typeof m === "string" ? m : m.metin).trim(), `#${y.pr}`).not.toBe("");
    }
  });

  it("kitleler geçerli; maddeye ayrıca yazılan kitle kaydınkinden geniş değil", () => {
    const sira = { herkes: 0, akademisyen: 1, yonetici: 2 } as const;
    for (const y of YENILIKLER) {
      const k = y.kitle ?? "herkes";
      expect(Object.keys(sira), `#${y.pr}`).toContain(k);
      for (const m of y.maddeler) {
        if (typeof m === "string") continue;
        expect(Object.keys(sira), `#${y.pr}`).toContain(m.kitle);
        expect(sira[m.kitle], `#${y.pr}: madde kaydın kitlesinden daha geniş`).toBeGreaterThanOrEqual(sira[k]);
      }
    }
  });

  it("yönetim paneli, Claude ve yerel ajan maddeleri herkese görünmez", () => {
    const herkes = gorunurYenilikler(null).flatMap((y) => y.maddeler.map((m) => m.metin));
    for (const m of herkes) expect(m, m.slice(0, 80)).not.toMatch(/Claude|yerel ajan|Yönetim panelinin|Ajan /);
  });

  it("rol bazında görünürlük", () => {
    const sayi = (rol: string | null) => gorunurYenilikler(rol).reduce((t, y) => t + y.maddeler.length, 0);
    expect(sayi(null)).toBeLessThan(sayi("akademisyen"));
    expect(sayi("akademisyen")).toBeLessThan(sayi("admin"));
    expect(sayi("admin")).toBe(YENILIKLER.reduce((t, y) => t + y.maddeler.length, 0));
    expect(sayi("user")).toBe(sayi(null));
    // Görünür maddesi kalmayan kayıt listeye girmez
    expect(gorunurYenilikler(null).every((y) => y.maddeler.length > 0)).toBe(true);
    expect(gorunurYenilikler(null).some((y) => y.pr === 17)).toBe(false);
    expect(gorulmemisSayisi(0, null)).toBe(gorunurYenilikler(null).length);
  });
});

// Dalda kod değiştiyse yenilikler.ts de değişmiş olmalı. Ana daldan ayrılma
// noktası bulunamazsa (ör. sığ klon) ya da ana daldaysak denetim atlanır.
describe("bu daldaki değişiklik", () => {
  const git = (komut: string) => {
    try {
      return execSync(`git ${komut}`, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    } catch {
      return null;
    }
  };
  const taban = git("merge-base HEAD origin/main");
  const bas = git("rev-parse HEAD");
  const dosyalar = taban && taban !== bas ? (git(`diff --name-only ${taban}`) ?? "").split("\n").filter(Boolean) : [];
  const kodDegisti = dosyalar.some((d) => /^(src|worker|shared|content|migrations)\//.test(d) && !d.endsWith(".test.ts"));

  it.skipIf(!kodDegisti)("yenilikler.ts'e bir kayıt eklemiş", () => {
    expect(dosyalar, "Bu PR kullanıcıya görünen bir şey değiştiriyor: src/yenilikler.ts'in en üstüne kayıt ekle").toContain("src/yenilikler.ts");
  });
});
