// Sanal GitHub: korumalı dal, PR, onay, CI ve sunucuda birleştirme
import { describe, expect, it } from "vitest";
import { calistir, ekipCalistir, kur, yeniOrtam, type Ortam } from "./index";
import { VARSAYILAN_KIMLIK } from "./gorev";
import { uzakBul } from "./uzak";

const URL = "https://github.com/kafe-mavi/siparis.git";
const AYAR = {
  korumalar: { main: { prZorunlu: true, onay: 1, ci: true }, dev: { prZorunlu: true } },
  ci: [{ ad: "lint", yasak: "console.log", mesaj: "console.log kaldı" }],
};

function ortam(): Ortam {
  return kur(yeniOrtam({ globalConfig: VARSAYILAN_KIMLIK }), [
    `@uzak ${URL}`,
    `@ayse git clone ${URL}`,
    '@ayse echo "kahve 40" > menu.txt',
    "@ayse git add .",
    '@ayse git commit -m "Menü"',
    "@ayse git push",
    "@ayse git switch -c dev",
    "@ayse git push -u origin dev",
    `@platform ${URL} ${JSON.stringify(AYAR)}`,
    `git clone ${URL}`,
  ]);
}

function sirayla(o: Ortam, satirlar: string[]) {
  let x = o;
  const sonuclar: { kod: number; cikti: string }[] = [];
  for (const s of satirlar) {
    const r = calistir(x, s);
    x = r.ortam;
    sonuclar.push(r.sonuc);
  }
  return { o: x, sonuclar };
}

describe("sanal GitHub", () => {
  it("korumalı dala doğrudan push, force push ve silme reddedilir", () => {
    const { o, sonuclar } = sirayla(ortam(), ['echo "su 10" >> menu.txt', 'git commit -am "Su"', "git push", "git push origin --delete main", "git push origin --delete dev"]);
    expect(sonuclar[2]!.kod).toBe(1);
    expect(sonuclar[2]!.cikti).toContain("GH006: Protected branch update failed for refs/heads/main.");
    expect(sonuclar[2]!.cikti).toContain(" ! [remote rejected] main -> main (protected branch hook declined)");
    expect(sonuclar[3]!.cikti).toContain("Cannot delete this branch");
    expect(sonuclar[4]!.cikti).toContain("Cannot delete this branch");
    expect(o.depo!.refs["refs/remotes/origin/main"]).toBe(uzakBul(o, URL)!.refs["refs/heads/main"]);
  });

  it("PR: CI ve onay olmadan birleşmez, kendi PR'ını onaylayamazsın", () => {
    let { o, sonuclar } = sirayla(ortam(), [
      "git switch -c ozellik",
      'echo "console.log(1)" > a.js',
      "git add a.js",
      'git commit -m "A"',
      "git push -u origin ozellik",
      'gh pr create --base main --title "A"',
      "gh pr checks",
      "gh pr merge --merge",
      "gh pr review --approve",
    ]);
    expect(sonuclar[5]!.cikti).toContain("https://github.com/kafe-mavi/siparis/pull/1");
    expect(sonuclar[6]!.kod).toBe(1);
    expect(sonuclar[6]!.cikti).toContain("console.log kaldı (a.js)");
    expect(sonuclar[7]!.cikti).toContain("At least 1 approving review is required");
    expect(sonuclar[7]!.cikti).toContain('Required status check "lint" is failing.');
    expect(sonuclar[8]!.cikti).toContain("Can not approve your own pull request");

    ({ o, sonuclar } = sirayla(o, ['echo "a" > a.js', 'git commit -am "log yok"', "git push"]));
    o = ekipCalistir(o, "ayse", "gh pr review ozellik --approve").ortam;
    ({ o, sonuclar } = sirayla(o, ["gh pr checks", "gh pr merge 1 --merge --delete-branch", "gh pr list"]));
    expect(sonuclar[0]!.kod).toBe(0);
    expect(sonuclar[1]!.cikti).toBe("✓ Merged pull request #1 (A)\n✓ Deleted remote branch ozellik");
    expect(sonuclar[2]!.cikti).toBe("no open pull requests in kafe-mavi/siparis");
    const u = uzakBul(o, URL)!;
    const uc = u.refs["refs/heads/main"]!;
    const c = u.nesneler[uc];
    expect(c?.tur === "commit" && c.ebeveynler.length).toBe(2);
    expect(c?.tur === "commit" && c.mesaj).toBe("Merge pull request #1 from kafe-mavi/ozellik\n\nA\n");
    expect(u.refs["refs/heads/ozellik"]).toBeUndefined();
  });

  it("squash tek commit yazar; çakışan PR birleşmez", () => {
    let { o, sonuclar } = sirayla(ortam(), [
      "git switch -c ozellik origin/dev",
      'echo "kahve 45" > menu.txt',
      'git commit -am "Zam 1"',
      'echo "kahve 50" > menu.txt',
      'git commit -am "Zam 2"',
      "git push -u origin ozellik",
      'gh pr create --base dev --title "Zam"',
    ]);
    // Ayşe aynı satırı başka bir dalda değiştirip dev'e PR açmış olsun
    o = ekipCalistir(o, "ayse", "git switch -c cakisan").ortam;
    o = ekipCalistir(o, "ayse", 'echo "kahve 99" > menu.txt').ortam;
    o = ekipCalistir(o, "ayse", 'git commit -am "Başka zam"').ortam;
    o = ekipCalistir(o, "ayse", "git push -u origin cakisan").ortam;
    ({ o, sonuclar } = sirayla(o, ['gh pr create --base dev --head cakisan --title "Başka"', "gh pr merge ozellik --squash"]));
    expect(sonuclar[1]!.cikti).toBe("✓ Squashed and merged pull request #1 (Zam)");
    const u = uzakBul(o, URL)!;
    const c = u.nesneler[u.refs["refs/heads/dev"]!];
    expect(c?.tur === "commit" && c.mesaj).toBe("Zam (#1)\n");
    expect(c?.tur === "commit" && c.ebeveynler.length).toBe(1);
    ({ sonuclar } = sirayla(o, ["gh pr merge 2 --merge"]));
    expect(sonuclar[0]!.kod).toBe(1);
    expect(sonuclar[0]!.cikti).toContain("the merge commit cannot be cleanly created");
  });

  it("akış kuralı başkasının commit'ini taşıyan PR'ı yakalar", () => {
    const o0 = kur(ortam(), [
      `@platform ${URL} ${JSON.stringify({ ci: [{ ad: "akış", akis: true, mesaj: "yabancı commit" }] })}`,
      "@mert git clone " + URL,
      "@mert git switch dev",
      '@mert echo "yarım" > odeme.js',
      "@mert git add .",
      '@mert git commit -m "Yarım"',
    ]);
    // Mert dev'e doğrudan push edemez; dalını açıp gönderir, sen o daldan açarsın
    const o = ekipCalistir(o0, "mert", "git push origin dev:mert-dal").ortam;
    const { sonuclar } = sirayla(o, [
      "git fetch",
      "git switch -c benim origin/mert-dal",
      'echo "x" > x.txt',
      "git add .",
      'git commit -m "Benim"',
      "git push -u origin benim",
      'gh pr create --base main --title "Benim"',
      "gh pr checks",
    ]);
    expect(sonuclar[7]!.kod).toBe(1);
    expect(sonuclar[7]!.cikti).toContain("yabancı commit (1 yabancı commit)");
  });
});
