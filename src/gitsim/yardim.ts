// Komutların ortak yardımcıları: yol çözümleme, pathspec, tarih biçimi, mesaj
// temizliği ve commit özetindeki "2 files changed" satırları.
import { satirFarki, satirlar } from "./fark";
import { blobIcerigi, GitHatasi } from "./nesne";
import type { Depo, Ortam } from "./tipler";

// Sanal proje klasörünün mutlak yolu (çıktılarda görünür)
export const KOK = "/proje";

// Kabuğun bulunduğu klasöre göre verilen yolu depo köküne göre yola çevirir
export function yolCoz(o: Ortam, arg: string): string {
  const parcalar = (arg.startsWith("/") ? arg.replace(new RegExp(`^${KOK}/?`), "") : o.cwd ? `${o.cwd}/${arg}` : arg).split("/");
  const sonuc: string[] = [];
  for (const p of parcalar) {
    if (!p || p === ".") continue;
    if (p === "..") {
      if (!sonuc.length) throw new GitHatasi(`fatal: ${arg}: '${arg}' is outside repository at '${KOK}'`);
      sonuc.pop();
    } else sonuc.push(p);
  }
  return sonuc.join("/");
}

// Pathspec: "" (kök) her şeye, "a" a'ya ve a/ altındakilere, "*.txt" kalıba uyar
export function eslesir(yol: string, spec: string): boolean {
  if (spec === "") return true;
  if (/[*?]/.test(spec)) {
    const r = new RegExp("^" + spec.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".") + "(/.*)?$");
    return r.test(yol);
  }
  return yol === spec || yol.startsWith(spec + "/");
}

// Bir yolun kabuğun bulunduğu klasöre göre gösterimi (git status gibi)
export function goreli(o: Ortam, yol: string): string {
  if (!o.cwd) return yol;
  const a = o.cwd.split("/");
  const b = yol.split("/");
  let i = 0;
  while (i < a.length && i < b.length - 1 && a[i] === b[i]) i++;
  return [...a.slice(i).map(() => ".."), ...b.slice(i)].join("/");
}

const GUN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const AY = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const iki = (n: number) => String(n).padStart(2, "0");

// "Thu Jan 1 10:00:00 2026 +0000"
export function tarih(saniye: number): string {
  const t = new Date(saniye * 1000);
  return `${GUN[t.getUTCDay()]} ${AY[t.getUTCMonth()]} ${t.getUTCDate()} ${iki(t.getUTCHours())}:${iki(t.getUTCMinutes())}:${iki(t.getUTCSeconds())} ${t.getUTCFullYear()} +0000`;
}

// -m mesajlarının temizliği (cleanup=whitespace): satır sonu boşlukları, baştaki ve
// sondaki boş satırlar silinir, art arda boş satırlar teke iner, sona "\n" eklenir
export function mesajTemizle(m: string): string {
  const s = m.split("\n").map((x) => x.replace(/\s+$/, ""));
  const sonuc: string[] = [];
  for (const x of s) if (!(x === "" && (sonuc.length === 0 || sonuc[sonuc.length - 1] === ""))) sonuc.push(x);
  while (sonuc.length && sonuc[sonuc.length - 1] === "") sonuc.pop();
  return sonuc.length ? sonuc.join("\n") + "\n" : "";
}

export const ozetSatiri = (mesaj: string) => mesaj.split("\n")[0] ?? "";

const cogul = (n: number, tekil: string, cok: string) => `${n} ${n === 1 ? tekil : cok}`;

// İki ağaç arasındaki değişikliğin özeti (commit, merge ve reset çıktıları)
export function degisimOzeti(d: Depo, eski: Record<string, string>, yeni: Record<string, string>, modlar = true): string {
  let dosya = 0;
  let ekle = 0;
  let sil = 0;
  const olusan: string[] = [];
  const silinen: string[] = [];
  for (const yol of [...new Set([...Object.keys(eski), ...Object.keys(yeni)])].sort()) {
    if (eski[yol] === yeni[yol]) continue;
    dosya++;
    const f = satirFarki(satirlar(eski[yol] ? blobIcerigi(d, eski[yol]!) : ""), satirlar(yeni[yol] ? blobIcerigi(d, yeni[yol]!) : ""));
    ekle += f.filter((x) => x.tur === "+").length;
    sil += f.filter((x) => x.tur === "-").length;
    if (!eski[yol]) olusan.push(yol);
    if (!yeni[yol]) silinen.push(yol);
  }
  if (!dosya) return "";
  // Aynı içerikle silinip oluşan dosya yeniden adlandırmadır
  const adlar: string[] = [];
  for (const s of [...silinen]) {
    const o = olusan.find((y) => yeni[y] === eski[s]);
    if (o) {
      adlar.push(` rename ${s} => ${o} (100%)`);
      silinen.splice(silinen.indexOf(s), 1);
      olusan.splice(olusan.indexOf(o), 1);
      dosya--;
    }
  }
  const parcalar = [cogul(dosya, "file changed", "files changed")];
  if (ekle || !sil) parcalar.push(cogul(ekle, "insertion(+)", "insertions(+)"));
  if (sil || !ekle) parcalar.push(cogul(sil, "deletion(-)", "deletions(-)"));
  const satirlar_ = [" " + parcalar.join(", ")];
  if (modlar) {
    const hepsi = [...olusan.map((y) => [y, ` create mode 100644 ${y}`]), ...silinen.map((y) => [y, ` delete mode 100644 ${y}`]), ...adlar.map((a) => [a.slice(8), a])];
    hepsi.sort((a, b) => (a[0]! < b[0]! ? -1 : 1));
    satirlar_.push(...hepsi.map((x) => x[1]!));
  }
  return satirlar_.join("\n");
}

// Basit argüman ayırıcı: tanınan bayraklar, değer alan seçenekler ve kalanlar
export interface Argumanlar {
  bayrak: Set<string>;
  deger: Map<string, string[]>;
  kalan: string[];
  // "--" sonrasındaki yollar
  yollar: string[] | null;
}

export function ayir(args: string[], degerli: string[] = [], komut = "git"): Argumanlar {
  const bayrak = new Set<string>();
  const deger = new Map<string, string[]>();
  const kalan: string[] = [];
  let yollar: string[] | null = null;
  for (let i = 0; i < args.length; i++) {
    const a = args[i]!;
    if (yollar) {
      yollar.push(a);
      continue;
    }
    if (a === "--") {
      yollar = [];
      continue;
    }
    if (a.startsWith("--") && a.includes("=")) {
      const [k, ...v] = a.split("=");
      ekle(deger, k!, v.join("="));
    } else if (degerli.includes(a)) {
      const v = args[++i];
      if (v === undefined) throw new GitHatasi(`error: switch \`${a.replace(/^-+/, "")}' requires a value`, 129);
      ekle(deger, a, v);
    } else if (/^-[a-zA-Z]{2,}$/.test(a) && !degerli.includes(a)) {
      // Birleşik kısa bayraklar: -am "mesaj" -> -a -m "mesaj"
      const harfler = a.slice(1).split("");
      for (let j = 0; j < harfler.length; j++) {
        const h = "-" + harfler[j];
        if (degerli.includes(h)) {
          const kalanHarf = harfler.slice(j + 1).join("");
          const v = kalanHarf || args[++i];
          if (v === undefined) throw new GitHatasi(`error: switch \`${harfler[j]}' requires a value`, 129);
          ekle(deger, h, v);
          break;
        }
        bayrak.add(h);
      }
    } else if (/^-\d+$/.test(a)) ekle(deger, "-n", a.slice(1));
    else if (a.startsWith("-") && a !== "-") bayrak.add(a);
    else kalan.push(a);
  }
  void komut;
  return { bayrak, deger, kalan, yollar };
}

function ekle(m: Map<string, string[]>, k: string, v: string) {
  if (!m.has(k)) m.set(k, []);
  m.get(k)!.push(v);
}

export const ilk = (a: Argumanlar, ...adlar: string[]): string | undefined => {
  for (const ad of adlar) {
    const v = a.deger.get(ad);
    if (v?.length) return v[v.length - 1];
  }
  return undefined;
};

export const var_ = (a: Argumanlar, ...adlar: string[]) => adlar.some((x) => a.bayrak.has(x));
