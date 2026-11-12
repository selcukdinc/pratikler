// git filter-repo'nun sade karşılığı: gerçek araçla karşılaştırılmaz (ayrı bir araçtır),
// davranışı burada sınanır. Diğer iç komutlar gitsim.test.ts'te gerçek git ile sınanır.
import { describe, expect, it } from "vitest";
import { calistir, kur, yeniOrtam, type Ortam } from "./index";
import { VARSAYILAN_KIMLIK } from "./gorev";
import { commitAgaci, commitOku, gecmis } from "./depo";
import { gecmisteVar } from "./gizli";

const URL = "https://github.com/sen/kafe.git";

function ortam(): Ortam {
  return kur(yeniOrtam({ globalConfig: VARSAYILAN_KIMLIK }), [
    `@uzak ${URL}`,
    `@ayse git clone ${URL}`,
    '@ayse echo "# Kafe" > README.md',
    "@ayse git add .",
    '@ayse git commit -m "İlk"',
    '@ayse echo "[300 MB video]" > tanitim.mp4',
    "@ayse git add .",
    '@ayse git commit -m "Tanıtım videosu"',
    '@ayse echo "parola=gizli123" > ayar.txt',
    "@ayse git add .",
    '@ayse git commit -m "Ayar"',
    "@ayse git tag -a v1 -m v1",
    "@ayse git push --tags",
    "@ayse git push",
    "@ayse git switch -c dev",
    '@ayse echo "x" > dev.txt',
    "@ayse git add .",
    '@ayse git commit -m "Dev"',
    "@ayse git push -u origin dev",
    `git clone ${URL}`,
  ]);
}

function sirayla(o: Ortam, satirlar: string[]) {
  let x = o;
  const s: { kod: number; cikti: string }[] = [];
  for (const k of satirlar) {
    const r = calistir(x, k);
    x = r.ortam;
    s.push(r.sonuc);
  }
  return { o: x, s };
}

describe("git filter-repo", () => {
  it("dosyayı bütün geçmişten ve dallardan siler, boşalan commit'i atar, origin'i kaldırır", () => {
    const { o, s } = sirayla(ortam(), ["git filter-repo --path tanitim.mp4 --invert-paths"]);
    expect(s[0]!.kod).toBe(0);
    expect(s[0]!.cikti).toContain("NOTICE: Removing 'origin' remote");
    const d = o.depo!;
    expect(d.config["remote.origin.url"]).toBeUndefined();
    expect(Object.keys(d.refs).some((r) => r.startsWith("refs/remotes/"))).toBe(false);
    // origin/dev yerel dala çevrildi
    expect(d.refs["refs/heads/dev"]).toBeTruthy();
    for (const dal of ["refs/heads/main", "refs/heads/dev"]) {
      const g = gecmis(d, [d.refs[dal]!]);
      expect(g.every((c) => !("tanitim.mp4" in commitAgaci(d, c)))).toBe(true);
      expect(g.map((c) => commitOku(d, c).mesaj.trim())).not.toContain("Tanıtım videosu");
    }
    // Etiket yeni commit'i gösterir
    const etiket = d.nesneler[d.refs["refs/tags/v1"]!];
    expect(etiket?.tur === "tag" && etiket.nesne).toBe(d.refs["refs/heads/main"]);
    expect(o.dosyalar["tanitim.mp4"]).toBeUndefined();
    expect(Object.values(d.nesneler).some((n) => n.tur === "blob" && n.icerik.includes("300 MB"))).toBe(false);
  });

  it("--replace-text metni değiştirir; taze clone değilse --force ister", () => {
    let { o, s } = sirayla(ortam(), ['echo "gizli123" > sil.txt', "git switch dev", "git switch main", "git filter-repo --replace-text sil.txt"]);
    expect(s[3]!.kod).not.toBe(0);
    expect(s[3]!.cikti).toContain("--force");
    ({ o, s } = sirayla(o, ["git filter-repo --replace-text sil.txt --force"]));
    expect(s[0]!.kod).toBe(0);
    expect(gecmisteVar(o.depo!, "gizli123")).toBe(false);
    expect(o.dosyalar["ayar.txt"]).toBe("parola=***REMOVED***\n");
  });
});
