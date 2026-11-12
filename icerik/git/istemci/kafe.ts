// Kafe Mavi'nin sanal GitHub deposu: derslerdeki ve sandbox'taki uzak depo
// alıştırmalarının ortak kurulumu ve hedef yardımcıları.
import { commitAgaci, commitOku, gecmis, icerik } from "../../../src/gitsim/depo";
import type { Ortam, Platform, PullRequest } from "../../../src/gitsim/tipler";
import { uzakBul, uzakDalUcu } from "../../../src/gitsim/uzak";

export const KAFE = "https://github.com/kafe-mavi/siparis.git";

// Ayşe depoyu açar, ilk sürümü gönderir
export const KAFE_TEMEL = [
  `@uzak ${KAFE}`,
  `@ayse git clone ${KAFE}`,
  '@ayse echo "kahve 40" > menu.txt',
  '@ayse echo "# Kafe Mavi sipariş" > README.md',
  "@ayse git add .",
  '@ayse git commit -m "İlk sürüm"',
  "@ayse git push",
];

export const platform = (ayar: Partial<Platform>) => `@platform ${KAFE} ${JSON.stringify(ayar)}`;

export const CI_LINT = { ad: "lint", yasak: "console.log", mesaj: "Kodda console.log kaldı" };
export const CI_AKIS = { ad: "akış kuralı", akis: true, mesaj: "PR'da başkasının commit'i ya da birleştirme commit'i var: dal test'ten açılmalı, dev toptan taşınmaz" };

// Üç ortamlı akış: main, test, dev korumalı; dev'de Mert'in yarım işi var
export const UC_ORTAM = [
  ...KAFE_TEMEL,
  "@ayse git switch -c test",
  "@ayse git push -u origin test",
  "@ayse git switch -c dev",
  "@ayse git push -u origin dev",
  `@mert git clone ${KAFE}`,
  "@mert git switch dev",
  '@mert echo "export function ode() { /* yarım */ }" > odeme.js',
  "@mert git add odeme.js",
  '@mert git commit -m "Ödeme (yarım)"',
  "@mert git push",
  platform({
    korumalar: { main: { prZorunlu: true, onay: 1, ci: true }, test: { prZorunlu: true, ci: true }, dev: { prZorunlu: true, onay: 1, ci: true } },
    ci: [CI_LINT, CI_AKIS],
  }),
  `git clone ${KAFE}`,
];

export const uzakUc = (o: Ortam, dal: string) => uzakDalUcu(o, KAFE, dal);

// GitHub'daki dalın son commit'inde dosya (yoksa null)
export function uzakDosya(o: Ortam, dal: string, yol: string): string | null {
  const u = uzakBul(o, KAFE);
  const h = uzakUc(o, dal);
  if (!u || !h) return null;
  const b = commitAgaci(u, h)[yol];
  return b ? icerik(u, b) : null;
}

export function uzakMesajlar(o: Ortam, dal: string): string[] {
  const u = uzakBul(o, KAFE);
  const h = uzakUc(o, dal);
  return u && h ? gecmis(u, [h]).map((c) => commitOku(u, c).mesaj.trim()) : [];
}

export const prler = (o: Ortam): PullRequest[] => uzakBul(o, KAFE)?.platform?.prler ?? [];
export const prVar = (o: Ortam, f: (p: PullRequest) => boolean) => prler(o).some(f);
