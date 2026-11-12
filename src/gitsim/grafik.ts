// Commit grafiğinin yerleşimi: her commit bir satır (en yeni üstte) ve bir şerit
// (sütun) alır. Şerit ataması git log --graph'ınkine benzer: bir commit kendisini
// bekleyen ilk şeride oturur, ilk ebeveyni aynı şeritte devam eder, diğer
// ebeveynler boş bir şerit açar.
import { commitOku, DAL, dalAdi, ETIKET, gecerliDal, gecmis, headCommit, soy, UZAK } from "./depo";
import type { Depo } from "./tipler";

export interface Etiketcik {
  ad: string;
  tur: "head" | "dal" | "uzak" | "etiket";
  // HEAD bu dalı gösteriyor
  etkin?: boolean;
}

export interface GrafikDugumu {
  hash: string;
  satir: number;
  serit: number;
  ebeveynler: string[];
  ozet: string;
  yazar: string;
  zaman: number;
  etiketler: Etiketcik[];
}

export interface Grafik {
  dugumler: GrafikDugumu[];
  seritSayisi: number;
}

export function grafikKur(d: Depo): Grafik {
  const head = headCommit(d);
  const baslar = new Set<string>();
  if (head) baslar.add(head);
  for (const [r, h] of Object.entries(d.refs)) {
    if (r === "refs/stash") continue;
    const c = soy(d, h);
    if (d.nesneler[c]?.tur === "commit") baslar.add(c);
  }
  const sira = gecmis(d, [...baslar]);
  const etiketler = new Map<string, Etiketcik[]>();
  const ekle = (h: string, e: Etiketcik) => etiketler.set(h, [...(etiketler.get(h) ?? []), e]);
  const dal = gecerliDal(d);
  if (head && !dal) ekle(head, { ad: "HEAD", tur: "head" });
  for (const r of Object.keys(d.refs).sort()) {
    const h = soy(d, d.refs[r]!);
    if (r.startsWith(DAL)) ekle(h, { ad: dalAdi(r), tur: "dal", etkin: r === dal });
    else if (r.startsWith(UZAK)) ekle(h, { ad: dalAdi(r), tur: "uzak" });
    else if (r.startsWith(ETIKET)) ekle(h, { ad: dalAdi(r), tur: "etiket" });
  }
  // HEAD'in gösterdiği dal öne
  for (const [h, l] of etiketler) etiketler.set(h, [...l].sort((a, b) => Number(!!b.etkin) - Number(!!a.etkin)));

  const seritler: (string | null)[] = [];
  const dugumler: GrafikDugumu[] = [];
  sira.forEach((h, satir) => {
    let serit = seritler.indexOf(h);
    if (serit < 0) {
      serit = seritler.indexOf(null);
      if (serit < 0) serit = seritler.length;
    }
    // Bu commit'i bekleyen diğer şeritler burada birleşir
    for (let i = 0; i < seritler.length; i++) if (i !== serit && seritler[i] === h) seritler[i] = null;
    const c = commitOku(d, h);
    seritler[serit] = c.ebeveynler[0] ?? null;
    for (const p of c.ebeveynler.slice(1)) {
      if (seritler.includes(p)) continue;
      let bos = seritler.indexOf(null);
      if (bos < 0) bos = seritler.length;
      seritler[bos] = p;
    }
    while (seritler.length && seritler[seritler.length - 1] === null) seritler.pop();
    dugumler.push({
      hash: h,
      satir,
      serit,
      ebeveynler: c.ebeveynler,
      ozet: c.mesaj.split("\n")[0] ?? "",
      yazar: c.yazar.ad,
      zaman: c.yazar.zaman,
      etiketler: etiketler.get(h) ?? [],
    });
  });
  return { dugumler, seritSayisi: Math.max(1, ...dugumler.map((x) => x.serit + 1)) };
}
