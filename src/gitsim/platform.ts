// Sanal GitHub: dal korumaları, pull request'ler, onaylar ve basit bir CI. Uzak
// deponun (Depo.platform) parçasıdır, düz JSON'dur. Terminalde GitHub CLI'ın (gh)
// küçük bir alt kümesiyle kullanılır: gh pr create/list/view/checks/review/merge/close.
// gh'ın çıktıları gerçeğinin sadeleştirilmiş hâlidir; Git'in çıktıları gibi gerçek
// araçla karşılaştırılmaz.
import { agacaGec, ataMi, commitAgaci, commitOku, DAL, gecmis, headCommit, icerik } from "./depo";
import { merge, rebase } from "./dal";
import { GitHatasi, yaz } from "./nesne";
import type { CiAdimi, DalKorumasi, Depo, Ortam, Platform, PullRequest } from "./tipler";
import { adresAnahtari, nesneleriKopyala, uzakBul } from "./uzak";
import { ayir, ilk, var_ } from "./yardim";

const GITHUB = /^https:\/\/github\.com\/([^/]+\/[^/]+?)(\.git)?\/?$/;

export const githubAdi = (url: string) => GITHUB.exec(url)?.[1] ?? null;

// Uzak deponun platform durumu (yoksa açılır)
export function platformu(uzak: Depo, ad: string): Platform {
  return (uzak.platform ??= { ad, korumalar: {}, prler: [] });
}

// kur() için: "@platform <adres> <json>" ile korumalar ve CI tanımlanır
export function platformKur(o: Ortam, url: string, ayar: Partial<Platform>) {
  const uzak = uzakBul(o, url);
  if (!uzak) throw new Error(`uzak depo yok: ${url}`);
  const p = platformu(uzak, githubAdi(url) ?? adresAnahtari(url));
  if (ayar.korumalar) p.korumalar = { ...p.korumalar, ...ayar.korumalar };
  if (ayar.ci) p.ci = ayar.ci;
  if (ayar.gizliKoruma !== undefined) p.gizliKoruma = ayar.gizliKoruma;
  if (ayar.herkeseAcik !== undefined) p.herkeseAcik = ayar.herkeseAcik;
}

export const koruma = (uzak: Depo, dal: string): DalKorumasi | null => uzak.platform?.korumalar[dal] ?? null;

// Push sırasında korumalı dal denetimi: reddedilirse GitHub'ın remote satırları döner
export function pushKorumasi(uzak: Depo, ref: string, tur: "guncelle" | "zorla" | "sil"): string[] | null {
  if (!ref.startsWith(DAL)) return null;
  const k = koruma(uzak, ref.slice(DAL.length));
  if (!k) return null;
  const neden =
    tur === "sil" && !k.silmeSerbest ? "Cannot delete this branch"
    : tur === "zorla" && !k.zorlaSerbest ? "Cannot force-push to this branch"
    : k.prZorunlu ? "Changes must be made through a pull request."
    : null;
  if (!neden) return null;
  return [`remote: error: GH006: Protected branch update failed for ${ref}.`, `remote: error: ${neden}`];
}

// ---- CI ----

export interface CiSonucu {
  ad: string;
  gecti: boolean;
  mesaj?: string;
}

export function ciCalistir(uzak: Depo, commit: string, adimlar: CiAdimi[], pr?: PullRequest): CiSonucu[] {
  const agac = commitAgaci(uzak, commit);
  return adimlar.map((a) => {
    // Ortam dalları arasındaki PR'lar (ör. Release PR test → main) akış kuralına girmez
    if (a.akis && pr && uzak.platform?.korumalar[pr.kaynak]) return { ad: a.ad, gecti: true };
    if (a.akis && pr) {
      const hedefUc = uzak.refs[DAL + pr.hedef];
      const yabanci = gecmis(uzak, [commit], hedefUc ? [hedefUc] : []).filter((c) => {
        const n = commitOku(uzak, c);
        return n.ebeveynler.length > 1 || n.yazar.ad !== pr.yazar;
      });
      if (yabanci.length) return { ad: a.ad, gecti: false, mesaj: `${a.mesaj} (${yabanci.length} yabancı commit)` };
      return { ad: a.ad, gecti: true };
    }
    if (a.yasak) {
      const bulunan = Object.entries(agac).filter(([, h]) => icerik(uzak, h).includes(a.yasak!)).map(([y]) => y);
      if (bulunan.length) return { ad: a.ad, gecti: false, mesaj: `${a.mesaj} (${bulunan.join(", ")})` };
    }
    if (a.dosya && !(a.dosya in agac)) return { ad: a.ad, gecti: false, mesaj: a.mesaj };
    return { ad: a.ad, gecti: true };
  });
}

export const prCi = (uzak: Depo, pr: PullRequest): CiSonucu[] => {
  const uc = uzak.refs[DAL + pr.kaynak];
  return uc && uzak.platform?.ci?.length ? ciCalistir(uzak, uc, uzak.platform.ci, pr) : [];
};

// ---- Birleştirme (sunucuda, geçici bir çalışma kopyasında) ----

function geciciOrtam(uzak: Depo, ad: string, eposta: string, saat: number): Ortam {
  const d: Depo = structuredClone(uzak);
  delete d.platform;
  d.index = {};
  d.catisma = {};
  d.islem = null;
  d.stash = [];
  d.reflog = [];
  d.dalReflog = {};
  return { dosyalar: {}, klasorler: [], cwd: "", depo: d, globalConfig: { "user.name": ad, "user.email": eposta }, saat };
}

// Birleştirmeyi dener; çakışırsa null. Başarılıysa hedef dalın yeni ucu.
function sunucudaBirlestir(o: Ortam, uzak: Depo, pr: PullRequest, yontem: "merge" | "squash" | "rebase", ben: { ad: string; eposta: string }): string | null {
  const kaynakUc = uzak.refs[DAL + pr.kaynak]!;
  const hedefUc = uzak.refs[DAL + pr.hedef]!;
  const t = geciciOrtam(uzak, ben.ad, ben.eposta, o.saat);
  const d = t.depo!;
  try {
    if (yontem === "rebase") {
      d.head = { tur: "kopuk", hash: kaynakUc };
      agacaGec(t, d, kaynakUc, true);
      rebase(t, [hedefUc]);
      if (d.islem) return null;
    } else {
      d.head = { tur: "ref", ref: DAL + pr.hedef };
      agacaGec(t, d, hedefUc, true);
      const sahip = (uzak.platform?.ad ?? "").split("/")[0];
      merge(t, ["--no-ff", "-m", `Merge pull request #${pr.no} from ${sahip}/${pr.kaynak}\n\n${pr.baslik}`, kaynakUc]);
      if (d.islem) return null;
    }
  } catch (e) {
    if (e instanceof GitHatasi) return null;
    throw e;
  }
  let uc = headCommit(d)!;
  if (yontem === "squash") {
    const zaman = { ad: ben.ad, eposta: ben.eposta, zaman: o.saat };
    uc = yaz(d, { tur: "commit", agac: commitOku(d, uc).agac, ebeveynler: [hedefUc], yazar: zaman, isleyen: zaman, mesaj: `${pr.baslik} (#${pr.no})\n` });
  }
  nesneleriKopyala(d, uzak, [uc]);
  return uc;
}

// PR'ın birleşmesini engelleyenler (GitHub'ın diliyle)
export function engeller(uzak: Depo, pr: PullRequest): string[] {
  const k = koruma(uzak, pr.hedef);
  const e: string[] = [];
  if (!k) return e;
  const onay = pr.onaylar.filter((x) => x !== pr.yazar).length;
  if (pr.degisiklik.length) e.push(`Changes requested by ${pr.degisiklik.join(", ")}.`);
  else if ((k.onay ?? 0) > onay) e.push(`At least ${k.onay} approving review${k.onay! > 1 ? "s are" : " is"} required by reviewers with write access.`);
  if (k.ci) for (const c of prCi(uzak, pr)) if (!c.gecti) e.push(`Required status check "${c.ad}" is failing.`);
  return e;
}

// ---- gh ----

function baglam(o: Ortam): { uzak: Depo; p: Platform; url: string } {
  const d = o.depo;
  if (!d) throw new GitHatasi("failed to run git: fatal: not a git repository (or any of the parent directories): .git", 1);
  const url = d.config["remote.origin.url"];
  const ad = url ? githubAdi(url) : null;
  if (!url || !ad) throw new GitHatasi("none of the git remotes configured for this repository point to a known GitHub host. To tell gh about a new GitHub host, please use `gh auth login`", 1);
  const uzak = uzakBul(o, url);
  if (!uzak) throw new GitHatasi(`GraphQL: Could not resolve to a Repository with the name '${ad}'. (repository)`, 1);
  return { uzak, p: platformu(uzak, ad), url: `https://github.com/${ad}` };
}

const kim = (o: Ortam) => ({ ad: o.depo?.config["user.name"] ?? o.globalConfig["user.name"] ?? "sen", eposta: o.depo?.config["user.email"] ?? o.globalConfig["user.email"] ?? "" });

// "1", "#1" ya da dal adı; verilmezse bulunduğun dalın açık PR'ı
function prBul(o: Ortam, p: Platform, secici: string | undefined): PullRequest {
  const d = o.depo!;
  const dal = secici ?? (d.head.tur === "ref" ? d.head.ref.slice(DAL.length) : null);
  if (!dal) throw new GitHatasi("could not determine current branch: not on any branch", 1);
  const no = /^#?(\d+)$/.exec(dal)?.[1];
  const pr = no ? p.prler.find((x) => x.no === Number(no)) : [...p.prler].reverse().find((x) => x.kaynak === dal && x.durum === "acik") ?? [...p.prler].reverse().find((x) => x.kaynak === dal);
  if (!pr) throw new GitHatasi(no ? `GraphQL: Could not resolve to a PullRequest with the number of ${no}. (repository.pullRequest)` : `no pull requests found for branch "${dal}"`, 1);
  return pr;
}

const DURUM: Record<PullRequest["durum"], string> = { acik: "Open", birlesti: "Merged", kapali: "Closed" };

function ciOzeti(uzak: Depo, pr: PullRequest): string {
  const c = prCi(uzak, pr);
  if (!c.length) return "No checks";
  return c.every((x) => x.gecti) ? "✓ Checks passing" : `× ${c.filter((x) => !x.gecti).length}/${c.length} checks failing`;
}

const YARDIM = `Work seamlessly with GitHub from the command line.

Bu sandbox'taki gh komutları:
  gh pr create --base <dal> --title "<başlık>" [--head <dal>]
  gh pr list
  gh pr view [<no> | <dal>]
  gh pr checks [<no> | <dal>]
  gh pr review [<no> | <dal>] --approve | --request-changes
  gh pr merge [<no> | <dal>] --merge | --squash | --rebase [--delete-branch]
  gh pr close [<no> | <dal>]`;

export function gh(o: Ortam, args: string[]): { cikti: string; kod: number } {
  const [grup, alt, ...kalan] = args;
  if (!grup || grup === "help" || grup === "--help") return { cikti: YARDIM, kod: 0 };
  if (grup !== "pr") throw new GitHatasi(`unknown command "${grup}" for "gh"\n\n${YARDIM}`, 1);
  const { uzak, p, url } = baglam(o);
  const d = o.depo!;
  switch (alt) {
    case "create": {
      const a = ayir(kalan, ["--base", "-B", "--head", "-H", "--title", "-t", "--body", "-b"]);
      const hedef = ilk(a, "--base", "-B") ?? (uzak.head.tur === "ref" ? uzak.head.ref.slice(DAL.length) : "main");
      const kaynak = ilk(a, "--head", "-H") ?? (d.head.tur === "ref" ? d.head.ref.slice(DAL.length) : null);
      if (!kaynak) throw new GitHatasi("could not determine the current branch: not on any branch", 1);
      const baslik = ilk(a, "--title", "-t");
      if (!baslik) throw new GitHatasi("must provide `--title` and `--body` (or `--fill`) when not running interactively", 1);
      if (uzak.refs[DAL + hedef] === undefined) throw new GitHatasi(`GraphQL: Base ref must be a branch (createPullRequest)\nbase branch "${hedef}" not found on ${p.ad}`, 1);
      const kUc = uzak.refs[DAL + kaynak];
      if (kUc === undefined) throw new GitHatasi(`aborted: you must first push the current branch to a remote, or use the --head flag`, 1);
      if (kaynak === hedef) throw new GitHatasi(`GraphQL: Head ref must be different from base ref (createPullRequest)`, 1);
      if (ataMi(uzak, kUc, uzak.refs[DAL + hedef]!)) throw new GitHatasi(`GraphQL: No commits between ${hedef} and ${kaynak} (createPullRequest)`, 1);
      const var_olan = p.prler.find((x) => x.kaynak === kaynak && x.hedef === hedef && x.durum === "acik");
      if (var_olan) throw new GitHatasi(`a pull request for branch "${kaynak}" into branch "${hedef}" already exists:\n${url}/pull/${var_olan.no}`, 1);
      const no = Math.max(0, ...p.prler.map((x) => x.no)) + 1;
      p.prler.push({ no, baslik, kaynak, hedef, yazar: kim(o).ad, durum: "acik", onaylar: [], degisiklik: [] });
      const yerel = d.refs[DAL + kaynak];
      const uyari = yerel && yerel !== kUc ? `Warning: the local branch "${kaynak}" has commits that are not pushed yet\n` : "";
      return { cikti: `${uyari}\nCreating pull request for ${kaynak} into ${hedef} in ${p.ad}\n\n${url}/pull/${no}`, kod: 0 };
    }
    case "list": {
      const acik = p.prler.filter((x) => x.durum === "acik").reverse();
      if (!acik.length) return { cikti: `no open pull requests in ${p.ad}`, kod: 0 };
      const satir = acik.map((x) => `#${x.no}\t${x.baslik}\t${x.kaynak} → ${x.hedef}\t${ciOzeti(uzak, x)}`);
      return { cikti: `\nShowing ${acik.length} of ${acik.length} open pull request${acik.length > 1 ? "s" : ""} in ${p.ad}\n\n${satir.join("\n")}`, kod: 0 };
    }
    case "view": {
      const pr = prBul(o, p, ayir(kalan).kalan[0]);
      const kUc = uzak.refs[DAL + pr.kaynak];
      const hUc = uzak.refs[DAL + pr.hedef];
      const sayi = kUc && hUc ? gecmis(uzak, [kUc], [hUc]).length : 0;
      const inceleme = [...pr.onaylar.map((x) => `${x} (Approved)`), ...pr.degisiklik.map((x) => `${x} (Changes requested)`)];
      const e = pr.durum === "acik" ? engeller(uzak, pr) : [];
      return {
        cikti: [
          `${pr.baslik} #${pr.no}`,
          `${DURUM[pr.durum]} • ${pr.yazar} wants to merge ${sayi} commit${sayi === 1 ? "" : "s"} into ${pr.hedef} from ${pr.kaynak}`,
          ciOzeti(uzak, pr),
          `Reviewers: ${inceleme.length ? inceleme.join(", ") : "none"}`,
          ...(pr.durum === "acik" ? (e.length ? ["", "Merging is blocked", ...e.map((x) => `  - ${x}`)] : ["", "Ready to merge"]) : []),
          "",
          `View this pull request on GitHub: ${url}/pull/${pr.no}`,
        ].join("\n"),
        kod: 0,
      };
    }
    case "checks": {
      const pr = prBul(o, p, ayir(kalan).kalan[0]);
      const c = prCi(uzak, pr);
      if (!c.length) throw new GitHatasi(`no checks reported on the '${pr.kaynak}' branch`, 1);
      const kalan_ = c.filter((x) => !x.gecti).length;
      const satir = c.map((x) => (x.gecti ? `✓  ${x.ad}` : `X  ${x.ad}\t${x.mesaj ?? ""}`));
      return {
        cikti: [kalan_ ? "Some checks were not successful" : "All checks were successful", `${kalan_} failing, ${c.length - kalan_} successful, and 0 pending checks`, "", ...satir].join("\n"),
        kod: kalan_ ? 1 : 0,
      };
    }
    case "review": {
      const a = ayir(kalan, ["--body", "-b"]);
      const pr = prBul(o, p, a.kalan[0]);
      const ben = kim(o).ad;
      if (pr.durum !== "acik") throw new GitHatasi(`Pull request #${pr.no} is ${DURUM[pr.durum].toLowerCase()}`, 1);
      if (var_(a, "--approve", "-a")) {
        if (ben === pr.yazar) throw new GitHatasi("failed to create review: GraphQL: Can not approve your own pull request (addPullRequestReview)", 1);
        pr.degisiklik = pr.degisiklik.filter((x) => x !== ben);
        if (!pr.onaylar.includes(ben)) pr.onaylar.push(ben);
        return { cikti: `✓ Approved pull request #${pr.no}`, kod: 0 };
      }
      if (var_(a, "--request-changes", "-r")) {
        if (ben === pr.yazar) throw new GitHatasi("failed to create review: GraphQL: Can not request changes on your own pull request (addPullRequestReview)", 1);
        pr.onaylar = pr.onaylar.filter((x) => x !== ben);
        if (!pr.degisiklik.includes(ben)) pr.degisiklik.push(ben);
        return { cikti: `+ Requested changes to pull request #${pr.no}`, kod: 0 };
      }
      throw new GitHatasi("--approve, --request-changes, or --comment required when not running interactively", 1);
    }
    case "merge": {
      const a = ayir(kalan);
      const pr = prBul(o, p, a.kalan[0]);
      const yontem = var_(a, "--squash", "-s") ? "squash" : var_(a, "--rebase", "-r") ? "rebase" : var_(a, "--merge", "-m") ? "merge" : null;
      if (!yontem) throw new GitHatasi("--merge, --rebase, or --squash required when not running interactively", 1);
      if (pr.durum !== "acik") throw new GitHatasi(`X Pull request #${pr.no} was already ${pr.durum === "birlesti" ? "merged" : "closed"}`, 1);
      if (uzak.refs[DAL + pr.kaynak] === undefined) throw new GitHatasi(`X Pull request #${pr.no}: head branch ${pr.kaynak} was deleted`, 1);
      const e = engeller(uzak, pr);
      if (e.length)
        throw new GitHatasi([`X Pull request #${pr.no} is not mergeable: the base branch policy prohibits the merge.`, ...e.map((x) => `  - ${x}`)].join("\n"), 1);
      const uc = sunucudaBirlestir(o, uzak, pr, yontem, kim(o));
      if (!uc) throw new GitHatasi(`X Pull request #${pr.no} is not mergeable: the merge commit cannot be cleanly created.\nÇakışmayı kendi dalında çöz (hedef dalı dalına merge ya da rebase et), push et ve yeniden dene.`, 1);
      uzak.refs[DAL + pr.hedef] = uc;
      pr.durum = "birlesti";
      pr.yontem = yontem;
      pr.birlesmeCommit = uc;
      const satir = [`✓ ${yontem === "squash" ? "Squashed and merged" : yontem === "rebase" ? "Rebased and merged" : "Merged"} pull request #${pr.no} (${pr.baslik})`];
      if (var_(a, "--delete-branch", "-d")) {
        const red = pushKorumasi(uzak, DAL + pr.kaynak, "sil");
        if (red) satir.push(`X Could not delete remote branch ${pr.kaynak}: protected branch`);
        else {
          delete uzak.refs[DAL + pr.kaynak];
          satir.push(`✓ Deleted remote branch ${pr.kaynak}`);
        }
      }
      return { cikti: satir.join("\n"), kod: 0 };
    }
    case "close": {
      const pr = prBul(o, p, ayir(kalan).kalan[0]);
      if (pr.durum !== "acik") throw new GitHatasi(`! Pull request #${pr.no} (${pr.baslik}) is already ${pr.durum === "birlesti" ? "merged" : "closed"}`, 1);
      pr.durum = "kapali";
      return { cikti: `✓ Closed pull request #${pr.no} (${pr.baslik})`, kod: 0 };
    }
    default:
      throw new GitHatasi(`unknown command "${alt ?? ""}" for "gh pr"\n\n${YARDIM}`, 1);
  }
}

