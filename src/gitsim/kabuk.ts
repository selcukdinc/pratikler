// Sanal kabuk: komut satırını ayrıştırır (tırnaklar, &&, ;, > ve >>), basit kabuk
// komutlarını (ls, cat, echo, touch, rm, mkdir, cd, pwd, mv, cp) çalıştırır ve
// git komutlarını ilgili işleve yönlendirir.
import * as dal from "./dal";
import * as ileri from "./ileri";
import { GitHatasi } from "./nesne";
import { gh } from "./platform";
import { kafepay } from "./gizli";
import { glab } from "./gitlab";
import * as temel from "./temel";
import * as uzak from "./uzak";
import type { Ortam } from "./tipler";
import { KOK, yolCoz } from "./yardim";

export interface KabukSonucu {
  cikti: string;
  kod: number;
  // Arayüzün yapması gerekenler: ekranı temizle, dosyayı editörde aç
  temizle?: boolean;
  editor?: string;
}

type Belirtec = { tur: "kelime"; deger: string; tirnakli: boolean } | { tur: "isleç"; deger: "&&" | ";" | ">" | ">>" | "||" | "|" };

export function belirtecle(satir: string): Belirtec[] {
  const sonuc: Belirtec[] = [];
  let i = 0;
  while (i < satir.length) {
    const c = satir[i]!;
    if (c === " " || c === "\t") {
      i++;
      continue;
    }
    if (c === "#") break;
    const iki = satir.slice(i, i + 2);
    if (iki === "&&" || iki === ">>" || iki === "||") {
      sonuc.push({ tur: "isleç", deger: iki });
      i += 2;
      continue;
    }
    if (c === ";" || c === ">" || c === "|") {
      sonuc.push({ tur: "isleç", deger: c });
      i++;
      continue;
    }
    let kelime = "";
    let tirnakli = false;
    while (i < satir.length && !" \t;>|".includes(satir[i]!) && satir.slice(i, i + 2) !== "&&") {
      const x = satir[i]!;
      if (x === "'") {
        tirnakli = true;
        const son = satir.indexOf("'", i + 1);
        if (son < 0) throw new GitHatasi("bash: unexpected EOF while looking for matching `''", 2);
        kelime += satir.slice(i + 1, son);
        i = son + 1;
      } else if (x === '"') {
        tirnakli = true;
        i++;
        while (i < satir.length && satir[i] !== '"') {
          if (satir[i] === "\\" && i + 1 < satir.length && '"\\$`'.includes(satir[i + 1]!)) i++;
          kelime += satir[i];
          i++;
        }
        if (i >= satir.length) throw new GitHatasi('bash: unexpected EOF while looking for matching `"\'', 2);
        i++;
      } else if (x === "\\" && i + 1 < satir.length) {
        kelime += satir[i + 1];
        i += 2;
      } else {
        kelime += x;
        i++;
      }
    }
    sonuc.push({ tur: "kelime", deger: kelime, tirnakli });
  }
  return sonuc;
}

// Bir satırı çalıştırır (ortamı yerinde değiştirir). Her git komutundan sonra saat
// bir dakika ilerler; böylece commit'lerin zamanları sıralı ve tekrarlanabilir olur.
export function satirCalistir(o: Ortam, satir: string): KabukSonucu {
  let belirtecler: Belirtec[];
  try {
    belirtecler = belirtecle(satir);
  } catch (e) {
    return { cikti: (e as Error).message, kod: 2 };
  }
  const ciktilar: string[] = [];
  let kod = 0;
  let temizle = false;
  let editor: string | undefined;
  let i = 0;
  let oncekiIslec: string | null = null;
  while (i < belirtecler.length) {
    const parca: Belirtec[] = [];
    while (i < belirtecler.length && !(belirtecler[i]!.tur === "isleç" && ["&&", ";", "||"].includes(belirtecler[i]!.deger))) parca.push(belirtecler[i++]!);
    const islec = i < belirtecler.length ? belirtecler[i++]!.deger : null;
    const atla = (oncekiIslec === "&&" && kod !== 0) || (oncekiIslec === "||" && kod === 0);
    oncekiIslec = islec;
    if (atla || !parca.length) continue;
    const r = komutCalistir(o, parca);
    if (r.cikti) ciktilar.push(r.cikti);
    kod = r.kod;
    temizle ||= !!r.temizle;
    editor = r.editor ?? editor;
  }
  return { cikti: ciktilar.join("\n"), kod, ...(temizle ? { temizle } : {}), ...(editor ? { editor } : {}) };
}

function komutCalistir(o: Ortam, parca: Belirtec[]): KabukSonucu {
  // Yönlendirme: echo ... > dosya
  let hedef: { yol: string; ekle: boolean } | null = null;
  const kelimeler: string[] = [];
  for (let j = 0; j < parca.length; j++) {
    const b = parca[j]!;
    if (b.tur === "isleç" && (b.deger === ">" || b.deger === ">>")) {
      const sonraki = parca[j + 1];
      if (!sonraki || sonraki.tur !== "kelime") return { cikti: "bash: syntax error near unexpected token `newline'", kod: 2 };
      hedef = { yol: sonraki.deger, ekle: b.deger === ">>" };
      j++;
    } else if (b.tur === "isleç" && b.deger === "|") return { cikti: "bash: bu sandbox'ta boru (|) desteklenmiyor", kod: 2 };
    else if (b.tur === "kelime") kelimeler.push(...genislet(o, b.deger, b.tirnakli));
  }
  const [ad, ...args] = kelimeler;
  if (!ad) return { cikti: "", kod: 0 };
  try {
    const r = calistir(o, ad, args);
    if (hedef) {
      const yol = yolCoz(o, hedef.yol);
      if (klasorVar(o, yol)) return { cikti: `bash: ${hedef.yol}: Is a directory`, kod: 1 };
      const metin = r.cikti === "" && ad !== "echo" ? "" : r.cikti + (r.yeniSatirsiz ? "" : "\n");
      o.dosyalar[yol] = hedef.ekle ? (o.dosyalar[yol] ?? "") + metin : metin;
      return { cikti: "", kod: r.kod };
    }
    return { cikti: r.cikti, kod: r.kod, ...(r.temizle ? { temizle: true } : {}), ...(r.editor ? { editor: r.editor } : {}) };
  } catch (e) {
    if (e instanceof GitHatasi) return { cikti: e.message, kod: e.kod };
    throw e;
  } finally {
    if (ad === "git" || ad === "gh" || ad === "glab" || ad === "kafepay") o.saat += 60;
  }
}

// Tırnaksız * ve ? kalıplarını bulunduğun klasördeki adlarla genişletir (bash gibi)
function genislet(o: Ortam, kelime: string, tirnakli: boolean): string[] {
  if (tirnakli || !/[*?]/.test(kelime) || kelime.includes("/")) return [kelime];
  const r = new RegExp("^" + kelime.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".") + "$");
  const adlar = klasorIcerigi(o, o.cwd).filter((x) => !x.startsWith(".") && r.test(x));
  return adlar.length ? adlar : [kelime];
}

function klasorIcerigi(o: Ortam, klasor: string): string[] {
  const onek = klasor ? klasor + "/" : "";
  const adlar = new Set<string>();
  for (const y of [...Object.keys(o.dosyalar), ...o.klasorler]) {
    if (!y.startsWith(onek) || y === klasor) continue;
    adlar.add(y.slice(onek.length).split("/")[0]!);
  }
  return [...adlar].sort();
}

function klasorVar(o: Ortam, yol: string): boolean {
  if (yol === "") return true;
  return o.klasorler.includes(yol) || Object.keys(o.dosyalar).some((y) => y.startsWith(yol + "/"));
}

interface IcSonuc {
  cikti: string;
  kod: number;
  yeniSatirsiz?: boolean;
  temizle?: boolean;
  editor?: string;
}

const tamam = (cikti = ""): IcSonuc => ({ cikti, kod: 0 });

function calistir(o: Ortam, ad: string, args: string[]): IcSonuc {
  switch (ad) {
    case "git":
      return gitCalistir(o, args);
    case "gh":
      return gh(o, args);
    case "glab":
      return glab(o, args);
    case "kafepay":
      return kafepay(o, args);
    case "pwd":
      return tamam(`${o.kokAd ? `/${o.kokAd}` : KOK}${o.cwd ? `/${o.cwd}` : ""}`);
    case "cd": {
      // git clone ile açılan klasör: depo zaten onun içinde açılır
      if (o.kokAd && !o.cwd && args[0]?.replace(/\/$/, "") === o.kokAd && !klasorVar(o, o.kokAd)) return tamam();
      const hedef = args[0] === undefined || args[0] === "~" ? "" : yolCoz(o, args[0]);
      if (!klasorVar(o, hedef)) return { cikti: `bash: cd: ${args[0]}: No such file or directory`, kod: 1 };
      o.cwd = hedef;
      return tamam();
    }
    case "ls": {
      const hepsi = args.includes("-a") || args.includes("-la") || args.includes("-al");
      const yolArg = args.find((x) => !x.startsWith("-"));
      const yol = yolArg ? yolCoz(o, yolArg) : o.cwd;
      if (yolArg && yol in o.dosyalar) return tamam(yolArg);
      if (!klasorVar(o, yol)) return { cikti: `ls: cannot access '${yolArg}': No such file or directory`, kod: 2 };
      let adlar = klasorIcerigi(o, yol);
      if (hepsi) {
        if (yol === "" && o.depo) adlar = [...adlar, ".git"].sort();
        adlar = [".", "..", ...adlar];
      } else adlar = adlar.filter((x) => !x.startsWith("."));
      return tamam(adlar.join("  "));
    }
    case "cat": {
      const c: string[] = [];
      for (const a of args) {
        const y = yolCoz(o, a);
        if (klasorVar(o, y) && !(y in o.dosyalar)) return { cikti: `cat: ${a}: Is a directory`, kod: 1 };
        if (!(y in o.dosyalar)) return { cikti: `cat: ${a}: No such file or directory`, kod: 1 };
        c.push(o.dosyalar[y]!);
      }
      const metin = c.join("");
      return { cikti: metin.replace(/\n$/, ""), kod: 0, yeniSatirsiz: !metin.endsWith("\n") };
    }
    case "echo": {
      let yeniSatir = true;
      let kacis = false;
      let i = 0;
      while (args[i] === "-n" || args[i] === "-e") {
        if (args[i] === "-n") yeniSatir = false;
        else kacis = true;
        i++;
      }
      let metin = args.slice(i).join(" ");
      if (kacis) metin = metin.replace(/\\n/g, "\n").replace(/\\t/g, "\t");
      return { cikti: metin, kod: 0, yeniSatirsiz: !yeniSatir };
    }
    case "printf": {
      const [bicim = "", ...degerler] = args;
      let i = 0;
      const metin = bicim
        .replace(/%s/g, () => degerler[i++] ?? "")
        .replace(/\\n/g, "\n")
        .replace(/\\t/g, "\t")
        .replace(/\\\\/g, "\\");
      return { cikti: metin.replace(/\n$/, ""), kod: 0, yeniSatirsiz: !metin.endsWith("\n") };
    }
    case "touch":
      for (const a of args) {
        const y = yolCoz(o, a);
        if (!(y in o.dosyalar)) o.dosyalar[y] = "";
      }
      return tamam();
    case "mkdir":
      for (const a of args.filter((x) => !x.startsWith("-"))) {
        const y = yolCoz(o, a);
        if (klasorVar(o, y) && !args.includes("-p")) return { cikti: `mkdir: cannot create directory '${a}': File exists`, kod: 1 };
        const p = y.split("/");
        for (let k = 1; k <= p.length; k++) {
          const ara = p.slice(0, k).join("/");
          if (!o.klasorler.includes(ara)) o.klasorler.push(ara);
        }
      }
      return tamam();
    case "rm": {
      const ozyineli = args.some((x) => /^-[a-z]*r/i.test(x));
      const zorla = args.some((x) => /^-[a-z]*f/.test(x));
      for (const a of args.filter((x) => !x.startsWith("-"))) {
        const y = yolCoz(o, a);
        if (y === "" || y === ".git") return { cikti: `rm: refusing to remove '${a}'`, kod: 1 };
        if (y in o.dosyalar) delete o.dosyalar[y];
        else if (klasorVar(o, y)) {
          if (!ozyineli) return { cikti: `rm: cannot remove '${a}': Is a directory`, kod: 1 };
          for (const k of Object.keys(o.dosyalar)) if (k.startsWith(y + "/")) delete o.dosyalar[k];
          o.klasorler = o.klasorler.filter((k) => k !== y && !k.startsWith(y + "/"));
          if (o.cwd === y || o.cwd.startsWith(y + "/")) o.cwd = "";
        } else if (a === ".git" && o.depo) {
          o.depo = null;
        } else if (!zorla) return { cikti: `rm: cannot remove '${a}': No such file or directory`, kod: 1 };
      }
      return tamam();
    }
    case "mv":
    case "cp": {
      const [x, y] = args.filter((a) => !a.startsWith("-"));
      if (!x || !y) return { cikti: `${ad}: missing file operand`, kod: 1 };
      const k = yolCoz(o, x);
      let h = yolCoz(o, y);
      if (!(k in o.dosyalar)) return { cikti: `${ad}: cannot stat '${x}': No such file or directory`, kod: 1 };
      if (klasorVar(o, h)) h = (h ? h + "/" : "") + k.split("/").pop();
      o.dosyalar[h] = o.dosyalar[k]!;
      if (ad === "mv") delete o.dosyalar[k];
      return tamam();
    }
    case "clear":
      return { cikti: "", kod: 0, temizle: true };
    case "nano":
    case "vim":
    case "vi":
    case "code": {
      if (!args[0]) return { cikti: `${ad}: dosya adı ver (ör. ${ad} README.md)`, kod: 1 };
      const y = yolCoz(o, args[0]);
      if (!(y in o.dosyalar)) o.dosyalar[y] = "";
      return { cikti: "", kod: 0, editor: y };
    }
    default:
      return { cikti: `bash: ${ad}: command not found`, kod: 127 };
  }
}

const KOMUTLAR: Record<string, (o: Ortam, a: string[]) => string> = {
  init: temel.init,
  config: temel.config,
  status: temel.status,
  add: temel.add,
  rm: temel.rm,
  mv: temel.mv,
  restore: temel.restore,
  commit: temel.commit,
  log: temel.log,
  diff: temel.diff,
  show: temel.show,
  "ls-files": temel.lsFiles,
  "cat-file": temel.catFile,
  "hash-object": temel.hashObject,
  "rev-parse": temel.revParse,
  "show-ref": temel.showRef,
  branch: dal.branch,
  switch: dal.switchKomutu,
  checkout: dal.checkout,
  merge: dal.merge,
  reset: dal.reset,
  revert: dal.revert,
  "cherry-pick": dal.cherryPick,
  rebase: dal.rebase,
  stash: dal.stash,
  tag: dal.tag,
  reflog: dal.reflog,
  bisect: ileri.bisect,
  blame: ileri.blame,
  clone: uzak.clone,
  remote: uzak.remote,
  fetch: uzak.fetch,
  pull: uzak.pull,
  push: uzak.push,
};

// Sandbox'ın tanıdığı git komutları (otomatik tamamlama ve yardım için)
export const GIT_KOMUTLARI = Object.keys(KOMUTLAR).sort();

function gitCalistir(o: Ortam, args: string[]): IcSonuc {
  // git -c anahtar=değer <komut>: ayar yalnızca bu komut için geçerli
  if (args[0] === "-c" && args[1]?.includes("=")) {
    const [k, ...v] = args[1].split("=");
    const anahtar = k!.toLowerCase();
    const eski = o.globalConfig[anahtar];
    const depoEski = o.depo?.config[anahtar];
    if (o.depo) delete o.depo.config[anahtar];
    o.globalConfig[anahtar] = v.join("=");
    if (o.globalConfig[anahtar] === "") delete o.globalConfig[anahtar];
    try {
      return gitCalistir(o, args.slice(2));
    } finally {
      if (eski === undefined) delete o.globalConfig[anahtar];
      else o.globalConfig[anahtar] = eski;
      if (o.depo && depoEski !== undefined) o.depo.config[anahtar] = depoEski;
    }
  }
  const [alt, ...kalan] = args;
  if (!alt || alt === "--help" || alt === "help") return tamam(`usage: git <command> [<args>]\n\nBu sandbox'taki komutlar:\n   ${GIT_KOMUTLARI.join(", ")}`);
  if (alt === "--version" || alt === "version") return tamam("git version 2.43.0 (sandbox)");
  const f = KOMUTLAR[alt];
  if (!f) {
    const benzer = GIT_KOMUTLARI.filter((k) => yakin(k, alt));
    return {
      cikti: `git: '${alt}' is not a git command. See 'git --help'.${benzer.length ? `\n\nThe most similar command${benzer.length > 1 ? "s are" : " is"}\n${benzer.map((k) => "\t" + k).join("\n")}` : ""}`,
      kod: 1,
    };
  }
  const cikti = f(o, kalan);
  // Etkileşimli rebase editör bekliyor: arayüz yapılacaklar listesini ya da mesajı açar
  const islem = o.depo?.islem;
  if (islem?.tur === "rebase" && islem.editor) return { cikti, kod: 0, editor: islem.editor === "todo" ? REBASE_TODO : COMMIT_MESAJI };
  return tamam(cikti);
}

// Git'in kendi dosyaları: editörde açılır ama çalışma dizininde durmaz
export const REBASE_TODO = ".git/rebase-merge/git-rebase-todo";
export const COMMIT_MESAJI = ".git/COMMIT_EDITMSG";

// İki komut adı birbirine yakın mı (yazım hatası önerisi)
function yakin(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 2) return false;
  const t: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i, ...new Array<number>(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) t[0]![j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++) t[i]![j] = Math.min(t[i - 1]![j]! + 1, t[i]![j - 1]! + 1, t[i - 1]![j - 1]! + (a[i - 1] === b[j - 1] ? 0 : 1));
  return t[a.length]![b.length]! <= 2;
}
