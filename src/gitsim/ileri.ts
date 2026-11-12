// İleri araçlar: git bisect (ikili arama) ve git blame (satırın kaynağı). Çıktılar
// git 2.43 ile karşılaştırılır (gitsim.test.ts). Bisect'in seçimi Git'in algoritmasını
// izler: adaylar yeniden eskiye dizilir, ağırlık (adayın kendisi dahil aday atası sayısı)
// tur tur yayılır ve ilk "yarı yolda" olan seçilir; bulunamazsa en dengeli aday.
import { agacaGec, coz, commitAgaci, commitOku, DAL, dalAdi, depoGerekli, gecerliDal, gecmis, headCommit, icerik, kisa, reflogYaz } from "./depo";
import { eslesmeler, satirlar } from "./fark";
import { GitHatasi } from "./nesne";
import { bisectGosterimi } from "./temel";
import type { Depo, Ortam } from "./tipler";
import { ayir, ilk, ozetSatiri, yolCoz } from "./yardim";

const BISECT = "refs/bisect/";

interface BisectDurumu {
  // Başlandığı dal (ya da kopuk HEAD'in commit'i)
  baslangic: string;
  log: string[];
}

function durumu(d: Depo): BisectDurumu | null {
  return d.bisect ?? null;
}

const kotu = (d: Depo) => d.refs[BISECT + "bad"] ?? null;
const iyiler = (d: Depo) => Object.entries(d.refs).filter(([r]) => r.startsWith(BISECT + "good-")).map(([, h]) => h);

function adimTahmini(n: number): number {
  if (n < 3) return 0;
  const k = Math.floor(Math.log2(n));
  const e = 2 ** k;
  return e < 3 * (n - e) ? k : k - 1;
}

// Sıradaki commit'i seçer; aday kalmadıysa null
function sec(d: Depo, bad: string, goods: string[]): { secilen: string; kalan: number; adim: number } | { ilkKotu: string } {
  const adaylar = gecmis(d, [bad], goods);
  const n = adaylar.length;
  if (n <= 1) return { ilkKotu: bad };
  const kume = new Set(adaylar);
  const agirlik = new Map<string, number>();
  const ebeveyn = (h: string) => commitOku(d, h).ebeveynler.filter((p) => kume.has(p));
  for (const h of adaylar) if (!ebeveyn(h).length) agirlik.set(h, 1);
  const yariYol = (w: number) => Math.abs(2 * w - n) <= 1;
  // Birleştirme commit'lerinin ağırlığı ata sayımıyla hesaplanır
  const atalarSayisi = (h: string) => gecmis(d, [h], goods).filter((x) => kume.has(x)).length;
  let degisti = true;
  while (degisti && agirlik.size < n) {
    degisti = false;
    for (const h of adaylar) {
      if (agirlik.has(h)) continue;
      const e = ebeveyn(h);
      let w: number | null = null;
      if (e.length === 1 && agirlik.has(e[0]!)) w = agirlik.get(e[0]!)! + 1;
      else if (e.length > 1 && e.every((p) => agirlik.has(p))) w = atalarSayisi(h);
      if (w === null) continue;
      agirlik.set(h, w);
      degisti = true;
      if (yariYol(w)) return { secilen: h, kalan: n - w - 1, adim: adimTahmini(n) };
    }
  }
  let en = adaylar[0]!;
  let enUzaklik = -1;
  for (const h of adaylar) {
    const w = agirlik.get(h) ?? atalarSayisi(h);
    const u = Math.min(w, n - w);
    if (u > enUzaklik) {
      en = h;
      enUzaklik = u;
    }
  }
  if (en === bad) return { ilkKotu: bad };
  return { secilen: en, kalan: n - (agirlik.get(en) ?? atalarSayisi(en)) - 1, adim: adimTahmini(n) };
}

function ilerle(o: Ortam, d: Depo): string {
  const bad = kotu(d);
  const goods = iyiler(d);
  const b = durumu(d)!;
  if (!bad && !goods.length) return "status: waiting for both good and bad commits";
  if (!bad) return `status: waiting for bad commit, ${goods.length} good commit${goods.length === 1 ? "" : "s"} known`;
  if (!goods.length) return "status: waiting for good commit(s), bad commit known";
  const s = sec(d, bad, goods);
  if ("ilkKotu" in s) {
    const h = s.ilkKotu;
    b.log.push(`# first bad commit: [${h}] ${ozetSatiri(commitOku(d, h).mesaj)}`);
    return `${h} is the first bad commit\n${bisectGosterimi(d, h)}`;
  }
  const h = s.secilen;
  const once = gecerliDal(d);
  agacaGec(o, d, h);
  const oncekiAd = once ? dalAdi(once) : kisa(headCommit(d) ?? "");
  d.head = { tur: "kopuk", hash: h };
  reflogYaz(d, h, `checkout: moving from ${oncekiAd} to ${h}`, null);
  const r = s.kalan === 1 ? "revision" : "revisions";
  const a = s.adim === 1 ? "step" : "steps";
  return `Bisecting: ${s.kalan} ${r} left to test after this (roughly ${s.adim} ${a})\n[${h}] ${ozetSatiri(commitOku(d, h).mesaj)}`;
}

function isaretle(d: Depo, tur: "good" | "bad", rev: string | undefined): string {
  const h = coz(d, rev ?? "HEAD");
  const b = durumu(d)!;
  b.log.push(`# ${tur}: [${h}] ${ozetSatiri(commitOku(d, h).mesaj)}`, `git bisect ${tur} ${h}`);
  if (tur === "bad") d.refs[BISECT + "bad"] = h;
  else d.refs[BISECT + "good-" + h] = h;
  return h;
}

export function bisect(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const [alt, ...kalan] = args;
  const b = durumu(d);
  switch (alt) {
    case "start": {
      if (b) bitir(o, d);
      const dal = gecerliDal(d);
      d.bisect = { baslangic: dal ? dalAdi(dal) : headCommit(d)!, log: ["git bisect start"] };
      const revler = ayir(kalan).kalan;
      if (!revler.length) {
        d.bisect.log.push("# status: waiting for both good and bad commits");
        return "status: waiting for both good and bad commits";
      }
      const [k, ...ii] = revler;
      isaretle(d, "bad", k);
      for (const g of ii) isaretle(d, "good", g);
      if (!ii.length) return ilerle(o, d);
      d.bisect.log = [`# bad: [${kotu(d)}] ${ozetSatiri(commitOku(d, kotu(d)!).mesaj)}`, ...ii.flatMap((g) => { const h = coz(d, g); return [`# good: [${h}] ${ozetSatiri(commitOku(d, h).mesaj)}`]; }), `git bisect start '${k}' ${ii.map((x) => `'${x}'`).join(" ")}`];
      return ilerle(o, d);
    }
    case "good":
    case "bad":
    case "new":
    case "old": {
      if (!b) throw new GitHatasi("You need to start by \"git bisect start\"\n\nDo you want me to do it for you [Y/n]? ", 1);
      const tur = alt === "good" || alt === "old" ? "good" : "bad";
      const revler = ayir(kalan).kalan;
      const bitti = b.log.some((x) => x.startsWith("# first bad commit"));
      if (bitti) {
        const h = coz(d, revler[0] ?? "HEAD");
        isaretle(d, tur, revler[0]);
        throw new GitHatasi(`${h} was both good and bad`, 1);
      }
      if (tur === "bad") isaretle(d, "bad", revler[0]);
      else for (const r of revler.length ? revler : [undefined]) isaretle(d, "good", r);
      const sonuc = ilerle(o, d);
      if (sonuc.startsWith("status:")) b.log.push(`# ${sonuc}`);
      return sonuc;
    }
    case "reset": {
      if (!b) return "We are not bisecting.";
      return bitir(o, d);
    }
    case "log": {
      if (!b) throw new GitHatasi("We are not bisecting.", 1);
      return b.log.join("\n");
    }
    default:
      throw new GitHatasi(`usage: git bisect [help|start|bad|good|new|old|terms|skip|next|reset|visualize|view|replay|log|run]`, 1);
  }
}

function bitir(o: Ortam, d: Depo): string {
  const b = d.bisect!;
  for (const r of Object.keys(d.refs)) if (r.startsWith(BISECT)) delete d.refs[r];
  delete d.bisect;
  const ref = DAL + b.baslangic;
  if (d.refs[ref] === undefined) {
    const h = b.baslangic;
    if (headCommit(d) === h) return "";
    agacaGec(o, d, h);
    d.head = { tur: "kopuk", hash: h };
    return `HEAD is now at ${kisa(h)} ${ozetSatiri(commitOku(d, h).mesaj)}`;
  }
  const eski = headCommit(d);
  const yeni = d.refs[ref]!;
  const onceki = d.head.tur === "kopuk" && eski && eski !== yeni ? `Previous HEAD position was ${kisa(eski)} ${ozetSatiri(commitOku(d, eski).mesaj)}\n` : "";
  if (d.head.tur === "ref" && d.head.ref === ref) return `Already on '${b.baslangic}'`;
  const oncekiAd = d.head.tur === "ref" ? dalAdi(d.head.ref) : kisa(eski ?? "");
  agacaGec(o, d, yeni);
  d.head = { tur: "ref", ref };
  reflogYaz(d, yeni, `checkout: moving from ${oncekiAd} to ${b.baslangic}`, null);
  return `${onceki}Switched to branch '${b.baslangic}'`;
}

// ---- blame ----

function iso(t: number): string {
  return new Date(t * 1000).toISOString().replace("T", " ").slice(0, 19) + " +0000";
}

export function blame(o: Ortam, args: string[]): string {
  const d = depoGerekli(o);
  const a = ayir(args, ["-L"]);
  const [ilkArg, ikinci] = a.kalan;
  const yolArg = a.yollar?.[0] ?? ikinci ?? ilkArg;
  const revArg = ikinci || a.yollar?.length ? ilkArg : undefined;
  if (!yolArg) throw new GitHatasi("usage: git blame [<options>] [<rev-opts>] [<rev>] [--] <file>", 129);
  const yol = yolCoz(o, yolArg);
  const bas = revArg ? coz(d, revArg) : headCommit(d);
  if (!bas) throw new GitHatasi("fatal: no such ref: HEAD", 128);
  const agac = commitAgaci(d, bas);
  if (!(yol in agac)) throw new GitHatasi(`fatal: no such path '${yolArg}' in ${revArg ?? "HEAD"}`, 128);
  const metin = icerik(d, agac[yol]!);
  const s = satirlar(metin);
  // Her satırın sahibi: önce baştaki commit; ebeveynde aynı kalan satırlar ebeveyne geçer
  const sahip: string[] = new Array(s.length).fill("");
  let bekleyen: { commit: string; satirlar: { asil: number; konum: number }[] }[] = [{ commit: bas, satirlar: s.map((_, i) => ({ asil: i, konum: i })) }];
  while (bekleyen.length) {
    const yeni: typeof bekleyen = [];
    for (const { commit, satirlar: liste } of bekleyen) {
      const cm = commitOku(d, commit);
      const buMetin = satirlar(icerik(d, commitAgaci(d, commit)[yol]!));
      let kalan = liste;
      for (const p of cm.ebeveynler) {
        if (!kalan.length) break;
        const pb = commitAgaci(d, p)[yol];
        if (!pb) continue;
        const eskiMetin = satirlar(icerik(d, pb));
        const esle = new Map(eslesmeler(eskiMetin, buMetin).map(([x, y]) => [y, x]));
        const gecen = kalan.filter((x) => esle.has(x.konum)).map((x) => ({ asil: x.asil, konum: esle.get(x.konum)! }));
        if (gecen.length) yeni.push({ commit: p, satirlar: gecen });
        kalan = kalan.filter((x) => !esle.has(x.konum));
      }
      for (const x of kalan) sahip[x.asil] = commit;
    }
    // Aynı commit'e birden çok yoldan gelen satırları birleştir
    const birlesik = new Map<string, { asil: number; konum: number }[]>();
    for (const b of yeni) birlesik.set(b.commit, [...(birlesik.get(b.commit) ?? []), ...b.satirlar.filter((x) => !(birlesik.get(b.commit) ?? []).some((y) => y.asil === x.asil))]);
    bekleyen = [...birlesik].map(([commit, satirlar]) => ({ commit, satirlar }));
  }
  const adlar = sahip.map((h) => commitOku(d, h).yazar.ad);
  const gen = Math.max(...adlar.map((x) => x.length));
  const noGen = String(s.length).length;
  const aralik = ilk(a, "-L")?.split(",").map(Number);
  return s
    .map((satir, i) => [satir, i] as const)
    .filter(([, i]) => !aralik || (i + 1 >= aralik[0]! && i + 1 <= (aralik[1] ?? s.length)))
    .map(([satir, i]) => {
      const h = sahip[i]!;
      const cm = commitOku(d, h);
      const kimlik = cm.ebeveynler.length ? h.slice(0, 8) : "^" + h.slice(0, 7);
      return `${kimlik} (${adlar[i]!.padEnd(gen)} ${iso(cm.yazar.zaman)} ${String(i + 1).padStart(noGen)}) ${satir.replace(/\n$/, "")}`;
    })
    .join("\n");
}
