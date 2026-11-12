// Git nesnelerinin baytları ve kimlikleri: gerçek Git'in biçimiyle aynı
// ("<tür> <uzunluk>\0<gövde>"), böylece kimlikler birebir tutar.
import { baytlar, birlestir, hexBaytlar, sha1 } from "./sha1";
import type { Agac, AgacGirdisi, Commit, Depo, Etiket, Kisi, Nesne } from "./tipler";

const kisiSatiri = (k: Kisi) => `${k.ad} <${k.eposta}> ${k.zaman} +0000`;

export function govde(n: Nesne): Uint8Array {
  switch (n.tur) {
    case "blob":
      return baytlar(n.icerik);
    case "tree":
      return birlestir(n.girdiler.flatMap((g) => [baytlar(`${g.mod} ${g.ad}\0`), hexBaytlar(g.hash)]));
    case "commit":
      return baytlar(
        [`tree ${n.agac}`, ...n.ebeveynler.map((p) => `parent ${p}`), `author ${kisiSatiri(n.yazar)}`, `committer ${kisiSatiri(n.isleyen)}`].join("\n") +
          "\n\n" +
          n.mesaj,
      );
    case "tag":
      return baytlar(`object ${n.nesne}\ntype ${n.nesneTuru}\ntag ${n.ad}\ntagger ${kisiSatiri(n.etiketleyen)}\n\n${n.mesaj}`);
  }
}

export function nesneKimligi(n: Nesne): string {
  const g = govde(n);
  return sha1(birlestir([baytlar(`${n.tur} ${g.length}\0`), g]));
}

export function yaz(d: Depo, n: Nesne): string {
  const h = nesneKimligi(n);
  if (!d.nesneler[h]) d.nesneler[h] = n;
  return h;
}

export const blobYaz = (d: Depo, icerik: string) => yaz(d, { tur: "blob", icerik });

export function oku<T extends Nesne["tur"]>(d: Depo, h: string, tur: T): Extract<Nesne, { tur: T }> {
  const n = d.nesneler[h];
  if (!n || n.tur !== tur) throw new GitHatasi(`fatal: bad object ${h}`);
  return n as Extract<Nesne, { tur: T }>;
}

export const commitOku = (d: Depo, h: string): Commit => oku(d, h, "commit");
export const blobIcerigi = (d: Depo, h: string): string => oku(d, h, "blob").icerik;

// Git'in ağaç sıralaması: klasörler adlarının sonunda "/" varmış gibi karşılaştırılır
function agacSirasi(a: AgacGirdisi, b: AgacGirdisi): number {
  const x = a.mod === "40000" ? a.ad + "/" : a.ad;
  const y = b.mod === "40000" ? b.ad + "/" : b.ad;
  return x < y ? -1 : x > y ? 1 : 0;
}

// Düz yol -> blob haritasından iç içe ağaç nesneleri yazar, kök ağacın kimliğini verir
export function agacYaz(d: Depo, duz: Record<string, string>): string {
  const dosyalar: AgacGirdisi[] = [];
  const altlar = new Map<string, Record<string, string>>();
  for (const [yol, h] of Object.entries(duz)) {
    const i = yol.indexOf("/");
    if (i < 0) dosyalar.push({ ad: yol, mod: "100644", hash: h });
    else {
      const ad = yol.slice(0, i);
      if (!altlar.has(ad)) altlar.set(ad, {});
      altlar.get(ad)![yol.slice(i + 1)] = h;
    }
  }
  const girdiler = [...dosyalar, ...[...altlar].map(([ad, ic]) => ({ ad, mod: "40000" as const, hash: agacYaz(d, ic) }))];
  girdiler.sort(agacSirasi);
  return yaz(d, { tur: "tree", girdiler } satisfies Agac);
}

// Ağacı düz yol -> blob haritasına açar
export function agacAc(d: Depo, h: string, onek = "", sonuc: Record<string, string> = {}): Record<string, string> {
  for (const g of oku(d, h, "tree").girdiler) {
    if (g.mod === "40000") agacAc(d, g.hash, `${onek}${g.ad}/`, sonuc);
    else sonuc[onek + g.ad] = g.hash;
  }
  return sonuc;
}

export const commitAgaci = (d: Depo, commit: string | null): Record<string, string> => (commit ? agacAc(d, commitOku(d, commit).agac) : {});

export function etiketYaz(d: Depo, e: Etiket): string {
  return yaz(d, e);
}

// Git'in "fatal: ..." ya da "error: ..." ile biten durumları
export class GitHatasi extends Error {
  constructor(
    mesaj: string,
    public kod = 128,
  ) {
    super(mesaj);
  }
}
