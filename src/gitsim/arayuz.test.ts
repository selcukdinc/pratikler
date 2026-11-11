// Sandbox arayüzünün kullandığı yardımcılar: commit grafiği ve Türkçe açıklamalar
import { describe, expect, it } from "vitest";
import { calistir, kur, yeniOrtam } from "./index";
import { grafikKur } from "./grafik";
import { aciklama } from "./aciklama";

const KIMLIK = { "user.name": "Ada", "user.email": "ada@ornek.dev", "init.defaultBranch": "main" };

describe("commit grafiği", () => {
  it("dallanıp birleşen geçmişi iki şeride yerleştirir", () => {
    const o = kur(yeniOrtam({ globalConfig: KIMLIK }), [
      "git init",
      "echo a > a.txt",
      "git add .",
      "git commit -m A",
      "git switch -c ozellik",
      "echo b > b.txt",
      "git add .",
      "git commit -m B",
      "git switch main",
      "echo c > c.txt",
      "git add .",
      "git commit -m C",
      "git merge ozellik -m M",
      "git tag v1",
    ]);
    const g = grafikKur(o.depo!);
    expect(g.dugumler.map((n) => n.ozet)).toEqual(["M", "C", "B", "A"]);
    const [m, c, b, a] = g.dugumler;
    expect(m!.serit).toBe(0);
    expect(c!.serit).toBe(0);
    expect(b!.serit).toBe(1);
    expect(a!.serit).toBe(0);
    expect(g.seritSayisi).toBe(2);
    expect(m!.etiketler.map((e) => `${e.tur}:${e.ad}${e.etkin ? "*" : ""}`)).toEqual(["dal:main*", "etiket:v1"]);
    expect(b!.etiketler.map((e) => e.ad)).toEqual(["ozellik"]);
  });

  it("kopuk HEAD'i ayrı bir etiketle gösterir", () => {
    const o = kur(yeniOrtam({ globalConfig: KIMLIK }), ["git init", "echo a > a", "git add .", "git commit -m A", "echo b > b", "git add .", "git commit -m B", "git checkout HEAD~1"]);
    const g = grafikKur(o.depo!);
    expect(g.dugumler[1]!.etiketler).toEqual([{ ad: "HEAD", tur: "head" }]);
  });
});

describe("Türkçe açıklamalar", () => {
  const dene = (o: ReturnType<typeof yeniOrtam>, satir: string) => {
    const r = calistir(o, satir);
    return aciklama(satir, r.sonuc, o, r.ortam);
  };

  it("depo yokken git init'i önerir", () => {
    expect(dene(yeniOrtam(), "git status")).toMatch(/git init/);
  });

  it("kimlik yokken git config'i önerir", () => {
    const o = kur(yeniOrtam({ dosyalar: { a: "1\n" } }), ["git init", "git add ."]);
    expect(dene(o, 'git commit -m "ilk"')).toMatch(/user\.name/);
  });

  it("commit'in kimliğini ve dalı söyler", () => {
    const o = kur(yeniOrtam({ dosyalar: { a: "1\n" }, globalConfig: KIMLIK }), ["git init", "git add ."]);
    expect(dene(o, 'git commit -m "ilk"')).toMatch(/'main' dalı/);
  });

  it("izlenmeyen dosya varken add'i hatırlatır", () => {
    const o = kur(yeniOrtam({ dosyalar: { a: "1\n" }, globalConfig: KIMLIK }), ["git init"]);
    expect(dene(o, 'git commit -m "ilk"')).toMatch(/git add/);
  });
});
