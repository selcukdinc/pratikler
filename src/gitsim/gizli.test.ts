// Gizli bilgi: push protection, public depoyu tarayan bot ve sanal ödeme hizmeti
import { describe, expect, it } from "vitest";
import { calistir, kur, yeniOrtam, type Ortam } from "./index";
import { VARSAYILAN_KIMLIK } from "./gorev";
import { gecmisteVar, metindeGizli } from "./gizli";
import { uzakBul } from "./uzak";

const URL = "https://github.com/sen/kafe-odeme.git";
// Hayali sağlayıcının biçiminde, parçalardan birleştirilen örnek değer
const ANAHTAR = ["kp", "live", "Q7mZ2xR9tLw4Hc8Ny3Vb6Kd1"].join("_");

function ortam(ayar: object): Ortam {
  return kur(yeniOrtam({ globalConfig: VARSAYILAN_KIMLIK }), [
    `@uzak ${URL}`,
    `@anahtar live ${ANAHTAR}`,
    `git clone ${URL}`,
    'echo "# Kafe" > README.md',
    "git add .",
    'git commit -m "Başlangıç"',
    "git push",
    `@platform ${URL} ${JSON.stringify(ayar)}`,
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

describe("gizli bilgi", () => {
  it("biçimleri tanır, örnek .env değerini tanımaz", () => {
    expect(metindeGizli(`const k = "${ANAHTAR}";`)).toHaveLength(1);
    expect(metindeGizli("KAFEPAY_KEY=kp_live_xxxxxxxx")).toHaveLength(0);
  });

  it("push protection gizli bilgili push'u reddeder; anahtar çıkarılınca geçer", () => {
    let { o, sonuclar } = sirayla(ortam({ gizliKoruma: true }), [
      `echo 'const anahtar = "${ANAHTAR}";' > odeme.js`,
      "git add .",
      'git commit -m "Ödeme"',
      "git push",
    ]);
    expect(sonuclar[3]!.kod).toBe(1);
    expect(sonuclar[3]!.cikti).toContain("GH013: Repository rule violations found for refs/heads/main.");
    expect(sonuclar[3]!.cikti).toContain("path: odeme.js:1");
    expect(sonuclar[3]!.cikti).toContain(" ! [remote rejected] main -> main (push declined due to repository rule violations)");
    expect(gecmisteVar(uzakBul(o, URL)!, ANAHTAR)).toBe(false);
    ({ o, sonuclar } = sirayla(o, [
      `echo "KAFEPAY_KEY=${ANAHTAR}" > .env`,
      'echo ".env" > .gitignore',
      "echo 'const anahtar = process.env.KAFEPAY_KEY;' > odeme.js",
      "git add .",
      "git commit --amend --no-edit",
      "git push",
    ]));
    expect(sonuclar[5]!.kod).toBe(0);
    expect(gecmisteVar(uzakBul(o, URL)!, ANAHTAR)).toBe(false);
    expect(o.bulut!.anahtarlar[0]!.sizdi).toBeUndefined();
  });

  it("public depoda bot anahtarı bulur; roll iptal eder, temizlik geçmişten siler", () => {
    let { o, sonuclar } = sirayla(ortam({ herkeseAcik: true }), [
      `echo "KAFEPAY_KEY=${ANAHTAR}" > .env`,
      "git add .",
      'git commit -m "Ayarlar"',
      "git push",
      "kafepay logs",
    ]);
    expect(sonuclar[3]!.kod).toBe(0);
    expect(o.bulut!.anahtarlar[0]!.sizdi).toBeDefined();
    expect(sonuclar[4]!.cikti).toContain("POST /v1/payouts");
    ({ o, sonuclar } = sirayla(o, [
      "kafepay keys roll > .env",
      "kafepay keys list",
      "git rm --cached .env",
      'echo ".env" > .gitignore',
      "git add .gitignore",
      "git commit --amend --no-edit",
      "git push --force",
    ]));
    expect(o.dosyalar[".env"]).toMatch(/^KAFEPAY_KEY=kp_live_[A-Za-z0-9]{24}\n$/);
    expect(o.dosyalar[".env"]).not.toContain(ANAHTAR);
    expect(sonuclar[1]!.cikti).toContain("revoked");
    expect(sonuclar[1]!.cikti).toContain("active");
    expect(sonuclar[6]!.kod).toBe(0);
    const u = uzakBul(o, URL)!;
    expect(gecmisteVar(u, ANAHTAR)).toBe(false);
    // Yeni anahtar sızmadı: bot yalnızca eskisini kullandı
    expect(o.bulut!.anahtarlar.filter((a) => a.sizdi !== undefined)).toHaveLength(1);
  });
});
