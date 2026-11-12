// Sanal GitLab: aynı platform katmanı (dal korumaları, onay, CI) GitLab'ın diliyle.
// Pull request'in adı burada merge request'tir ve !N diye yazılır; terminalde GitLab
// CLI'ın (glab) küçük bir alt kümesi: glab mr create/list/view/approve/merge/close ve
// glab ci status. Çıktılar sadeleştirilmiştir, gerçek araçla karşılaştırılmaz.
import { ataMi, DAL, gecmis } from "./depo";
import { GitHatasi } from "./nesne";
import { gitlabAdi, kim, koruma, platformu, prBul, prCi, pushKorumasi, sunucudaBirlestir } from "./platform";
import type { Depo, Ortam, Platform, PullRequest } from "./tipler";
import { uzakBul } from "./uzak";
import { ayir, ilk, var_ } from "./yardim";

function baglam(o: Ortam): { uzak: Depo; p: Platform; url: string } {
  const d = o.depo;
  if (!d) throw new GitHatasi("fatal: not a git repository (or any of the parent directories): .git", 1);
  const url = d.config["remote.origin.url"];
  const ad = url ? gitlabAdi(url) : null;
  if (!url || !ad) throw new GitHatasi("none of the git remotes configured for this repository points to a known GitLab host. Please use `glab auth login` to authenticate and configure a new host for glab", 1);
  const uzak = uzakBul(o, url);
  if (!uzak) throw new GitHatasi("404 Project Not Found", 1);
  const p = platformu(uzak, ad);
  p.tur = "gitlab";
  return { uzak, p, url: `https://gitlab.com/${ad}` };
}

const DURUM: Record<PullRequest["durum"], string> = { acik: "open", birlesti: "merged", kapali: "closed" };

// Birleşmeyi engelleyenler (GitLab'ın diliyle)
export function mrEngelleri(uzak: Depo, mr: PullRequest): string[] {
  const k = koruma(uzak, mr.hedef);
  const e: string[] = [];
  if (!k) return e;
  const onay = mr.onaylar.filter((x) => x !== mr.yazar).length;
  if ((k.onay ?? 0) > onay) e.push(`Requires ${k.onay} approval${k.onay! > 1 ? "s" : ""} from eligible users (${onay} given).`);
  if (k.ci && prCi(uzak, mr).some((c) => !c.gecti)) e.push("Pipeline must succeed: the latest pipeline failed.");
  return e;
}

function pipeline(uzak: Depo, mr: PullRequest): string {
  const c = prCi(uzak, mr);
  if (!c.length) return "no pipeline";
  return c.every((x) => x.gecti) ? "passed" : "failed";
}

const YARDIM = `Work seamlessly with GitLab from the command line.

Bu sandbox'taki glab komutları:
  glab mr create --target-branch <dal> --title "<başlık>" [--source-branch <dal>]
  glab mr list
  glab mr view [<no> | <dal>]
  glab mr approve [<no> | <dal>]
  glab mr merge [<no> | <dal>] [--squash] [--rebase] [--remove-source-branch]
  glab mr close [<no> | <dal>]
  glab ci status`;

export function glab(o: Ortam, args: string[]): { cikti: string; kod: number } {
  const [grup, alt, ...kalan] = args;
  if (!grup || grup === "help" || grup === "--help") return { cikti: YARDIM, kod: 0 };
  if (grup === "ci" && alt === "status") return ciDurumu(o);
  if (grup !== "mr") throw new GitHatasi(`Error: unknown command "${grup}" for "glab"\n\n${YARDIM}`, 1);
  const { uzak, p, url } = baglam(o);
  const d = o.depo!;
  // gh'ın PR bulucusu "#1" ve "1" kabul eder; GitLab'da "!1" yazılır
  const sec = (x: string | undefined) => prBul(o, p, x?.replace(/^!/, ""));
  switch (alt) {
    case "create": {
      const a = ayir(kalan, ["--target-branch", "-b", "--source-branch", "-s", "--title", "-t", "--description", "-d"]);
      const hedef = ilk(a, "--target-branch", "-b") ?? (uzak.head.tur === "ref" ? uzak.head.ref.slice(DAL.length) : "main");
      const kaynak = ilk(a, "--source-branch", "-s") ?? (d.head.tur === "ref" ? d.head.ref.slice(DAL.length) : null);
      if (!kaynak) throw new GitHatasi("could not determine source branch", 1);
      const baslik = ilk(a, "--title", "-t");
      if (!baslik) throw new GitHatasi("--title or --fill required for non-interactive mode", 1);
      if (uzak.refs[DAL + hedef] === undefined) throw new GitHatasi(`target branch "${hedef}" does not exist on ${p.ad}`, 1);
      const kUc = uzak.refs[DAL + kaynak];
      if (kUc === undefined) throw new GitHatasi(`source branch "${kaynak}" is not pushed: run git push -u origin ${kaynak}`, 1);
      if (kaynak === hedef) throw new GitHatasi("source branch and target branch must be different", 1);
      if (ataMi(uzak, kUc, uzak.refs[DAL + hedef]!)) throw new GitHatasi(`no commits between ${hedef} and ${kaynak}`, 1);
      const var_olan = p.prler.find((x) => x.kaynak === kaynak && x.hedef === hedef && x.durum === "acik");
      if (var_olan) throw new GitHatasi(`Another open merge request already exists for this source branch: !${var_olan.no}`, 1);
      const no = Math.max(0, ...p.prler.map((x) => x.no)) + 1;
      p.prler.push({ no, baslik, kaynak, hedef, yazar: kim(o).ad, durum: "acik", onaylar: [], degisiklik: [] });
      return { cikti: `\nCreating merge request for ${kaynak} into ${hedef} in ${p.ad}\n\n!${no} ${baslik} (${kaynak})\n ${url}/-/merge_requests/${no}`, kod: 0 };
    }
    case "list": {
      const acik = p.prler.filter((x) => x.durum === "acik").reverse();
      if (!acik.length) return { cikti: `No open merge requests match your search in ${p.ad}.`, kod: 0 };
      const satir = acik.map((x) => `!${x.no}\t${p.ad}!${x.no}\t${x.baslik}\t(${x.hedef}) ← (${x.kaynak})`);
      return { cikti: `Showing ${acik.length} open merge request${acik.length > 1 ? "s" : ""} on ${p.ad}.\n\n${satir.join("\n")}`, kod: 0 };
    }
    case "view": {
      const mr = sec(ayir(kalan).kalan[0]);
      const kUc = uzak.refs[DAL + mr.kaynak];
      const hUc = uzak.refs[DAL + mr.hedef];
      const sayi = kUc && hUc ? gecmis(uzak, [kUc], [hUc]).length : 0;
      const e = mr.durum === "acik" ? mrEngelleri(uzak, mr) : [];
      return {
        cikti: [
          `title:\t${mr.baslik}`,
          `state:\t${DURUM[mr.durum]}`,
          `author:\t${mr.yazar}`,
          `branches:\t${mr.kaynak} → ${mr.hedef} (${sayi} commit${sayi === 1 ? "" : "s"})`,
          `approved by:\t${mr.onaylar.length ? mr.onaylar.join(", ") : "nobody"}`,
          `pipeline:\t${pipeline(uzak, mr)}`,
          ...(mr.durum === "acik" ? (e.length ? ["", "Merge blocked:", ...e.map((x) => `  - ${x}`)] : ["", "Ready to merge!"]) : []),
          "",
          `View this merge request on GitLab: ${url}/-/merge_requests/${mr.no}`,
        ].join("\n"),
        kod: 0,
      };
    }
    case "approve": {
      const mr = sec(ayir(kalan).kalan[0]);
      const ben = kim(o).ad;
      if (mr.durum !== "acik") throw new GitHatasi(`merge request !${mr.no} is ${DURUM[mr.durum]}`, 1);
      if (ben === mr.yazar) throw new GitHatasi("401 Unauthorized: merge request authors cannot approve their own merge requests in this project", 1);
      if (!mr.onaylar.includes(ben)) mr.onaylar.push(ben);
      return { cikti: `✓ Approved merge request !${mr.no}`, kod: 0 };
    }
    case "merge": {
      const a = ayir(kalan);
      const mr = sec(a.kalan[0]);
      if (mr.durum !== "acik") throw new GitHatasi(`x merge request !${mr.no} is already ${DURUM[mr.durum]}`, 1);
      if (uzak.refs[DAL + mr.kaynak] === undefined) throw new GitHatasi(`x merge request !${mr.no}: source branch ${mr.kaynak} was deleted`, 1);
      const e = mrEngelleri(uzak, mr);
      if (e.length) throw new GitHatasi([`x Merge request !${mr.no} cannot be merged:`, ...e.map((x) => `  - ${x}`)].join("\n"), 1);
      const yontem = var_(a, "--squash") ? "squash" : var_(a, "--rebase") ? "rebase" : "merge";
      const uc = sunucudaBirlestir(o, uzak, mr, yontem, kim(o));
      if (!uc) throw new GitHatasi(`x Merge request !${mr.no} cannot be merged: merge conflicts must be resolved.\nÇakışmayı kendi dalında çöz (hedef dalı dalına merge ya da rebase et), push et ve yeniden dene.`, 1);
      uzak.refs[DAL + mr.hedef] = uc;
      mr.durum = "birlesti";
      mr.yontem = yontem;
      mr.birlesmeCommit = uc;
      const satir = [`✓ Merged merge request !${mr.no}`];
      if (var_(a, "--remove-source-branch", "-d")) {
        if (pushKorumasi(uzak, DAL + mr.kaynak, "sil")) satir.push(`x Could not remove source branch ${mr.kaynak}: protected branch`);
        else {
          delete uzak.refs[DAL + mr.kaynak];
          satir.push(`✓ Removed source branch ${mr.kaynak}`);
        }
      }
      return { cikti: satir.join("\n"), kod: 0 };
    }
    case "close": {
      const mr = sec(ayir(kalan).kalan[0]);
      if (mr.durum !== "acik") throw new GitHatasi(`merge request !${mr.no} is already ${DURUM[mr.durum]}`, 1);
      mr.durum = "kapali";
      return { cikti: `✓ Closed merge request !${mr.no}`, kod: 0 };
    }
    default:
      throw new GitHatasi(`Error: unknown command "${alt ?? ""}" for "glab mr"\n\n${YARDIM}`, 1);
  }
}

// Bulunduğun dalın açık MR'ının pipeline'ı
function ciDurumu(o: Ortam): { cikti: string; kod: number } {
  const { uzak, p } = baglam(o);
  const mr = prBul(o, p, undefined);
  const c = prCi(uzak, mr);
  if (!c.length) return { cikti: `No pipelines running or available on branch: ${mr.kaynak}`, kod: 0 };
  const basarisiz = c.some((x) => !x.gecti);
  const satir = c.map((x) => `(${x.gecti ? "success" : "failed"}) • ${x.ad}${x.gecti ? "" : `\t${x.mesaj ?? ""}`}`);
  return { cikti: [...satir, "", `Pipeline state: ${basarisiz ? "failed" : "success"}`].join("\n"), kod: basarisiz ? 1 : 0 };
}
