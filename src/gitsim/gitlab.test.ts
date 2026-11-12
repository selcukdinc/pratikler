// Sanal GitLab: korumalı dal reddi, merge request, onay, pipeline ve birleştirme
import { describe, expect, it } from "vitest";
import { calistir, ekipCalistir, kur, yeniOrtam, type Ortam } from "./index";
import { VARSAYILAN_KIMLIK } from "./gorev";
import { uzakBul } from "./uzak";

const URL = "https://gitlab.com/kafe-mavi/siparis.git";

function ortam(): Ortam {
  return kur(yeniOrtam({ globalConfig: VARSAYILAN_KIMLIK }), [
    `@uzak ${URL}`,
    `@ayse git clone ${URL}`,
    '@ayse echo "kahve 40" > menu.txt',
    "@ayse git add .",
    '@ayse git commit -m "Menü"',
    "@ayse git push",
    `@platform ${URL} ${JSON.stringify({ korumalar: { main: { prZorunlu: true, onay: 1, ci: true } }, ci: [{ ad: "lint", yasak: "console.log", mesaj: "console.log kaldı" }] })}`,
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

describe("sanal GitLab", () => {
  it("korumalı dala push GitLab'ın diliyle reddedilir", () => {
    const { sonuclar } = sirayla(ortam(), ['echo "su 10" >> menu.txt', 'git commit -am "Su"', "git push"]);
    expect(sonuclar[2]!.kod).toBe(1);
    expect(sonuclar[2]!.cikti).toContain("remote: GitLab: You are not allowed to push code to protected branches on this project.");
    expect(sonuclar[2]!.cikti).toContain(" ! [remote rejected] main -> main (pre-receive hook declined)");
  });

  it("merge request: pipeline ve onay olmadan birleşmez, birleşince GitLab mesajı yazılır", () => {
    let { o, sonuclar } = sirayla(ortam(), [
      "git switch -c feature/su",
      'echo "console.log(1)" > a.js',
      "git add .",
      'git commit -m "Su"',
      "git push -u origin feature/su",
      'glab mr create --target-branch main --title "Su eklendi"',
      "glab mr merge",
      "glab mr approve",
      "glab ci status",
    ]);
    expect(sonuclar[4]!.cikti).toContain("remote: To create a merge request for feature/su, visit:");
    expect(sonuclar[4]!.cikti).toContain("https://gitlab.com/kafe-mavi/siparis/-/merge_requests/new?merge_request%5Bsource_branch%5D=feature%2Fsu");
    expect(sonuclar[5]!.cikti).toContain("!1 Su eklendi (feature/su)");
    expect(sonuclar[6]!.cikti).toContain("Requires 1 approval");
    expect(sonuclar[6]!.cikti).toContain("Pipeline must succeed");
    expect(sonuclar[7]!.kod).toBe(1);
    expect(sonuclar[8]!.kod).toBe(1);
    ({ o, sonuclar } = sirayla(o, ['echo "a" > a.js', 'git commit -am "log yok"', "git push"]));
    o = ekipCalistir(o, "ayse", "glab mr approve !1").ortam;
    ({ o, sonuclar } = sirayla(o, ["glab mr view", "glab mr merge !1 --remove-source-branch", "glab mr list"]));
    expect(sonuclar[0]!.cikti).toContain("Ready to merge!");
    expect(sonuclar[1]!.cikti).toBe("✓ Merged merge request !1\n✓ Removed source branch feature/su");
    expect(sonuclar[2]!.cikti).toContain("No open merge requests");
    const u = uzakBul(o, URL)!;
    const c = u.nesneler[u.refs["refs/heads/main"]!];
    expect(c?.tur === "commit" && c.mesaj).toBe("Merge branch 'feature/su' into 'main'\n\nSu eklendi\n\nSee merge request kafe-mavi/siparis!1\n");
  });
});
