// Tarayıcıda çalışan Git modeli (Git ve GitHub pratiğinin sandbox'ı ve derslerdeki
// mini terminaller). Ortam düz JSON'dur; calistir() ortamın kopyası üzerinde çalışır,
// böylece her adımın anlık görüntüsü geri alma için saklanabilir.
import { COMMIT_MESAJI, REBASE_TODO, satirCalistir, type KabukSonucu } from "./kabuk";
import { rebaseEditorKapandi } from "./dal";
import { GitHatasi } from "./nesne";
import type { Ortam } from "./tipler";
import { uzakOlustur } from "./uzak";
import { platformKur } from "./platform";
import { anahtarEkle } from "./gizli";

export type { Ortam, Depo, Commit, Nesne } from "./tipler";
export type { KabukSonucu } from "./kabuk";
export { COMMIT_MESAJI, GIT_KOMUTLARI, REBASE_TODO } from "./kabuk";
export { KOK } from "./yardim";

// Sandbox'ın varsayılan saati: 1 Ocak 2026 09:00 UTC
export const BASLANGIC_SAATI = 1767258000;

export interface OrtamSecenek {
  dosyalar?: Record<string, string>;
  globalConfig?: Record<string, string>;
  saat?: number;
}

export function yeniOrtam(s: OrtamSecenek = {}): Ortam {
  return {
    dosyalar: { ...(s.dosyalar ?? {}) },
    klasorler: [],
    cwd: "",
    depo: null,
    // Git ayar adlarında büyük-küçük harf önemsizdir; model küçük harfle saklar
    globalConfig: Object.fromEntries(Object.entries(s.globalConfig ?? {}).map(([k, v]) => [k.toLowerCase(), v])),
    saat: s.saat ?? BASLANGIC_SAATI,
  };
}

export const kopya = (o: Ortam): Ortam => structuredClone(o);

// Bir komut satırını ortamın kopyasında çalıştırır
export function calistir(o: Ortam, satir: string): { ortam: Ortam; sonuc: KabukSonucu } {
  const yeni = kopya(o);
  const sonuc = satirCalistir(yeni, satir);
  return { ortam: yeni, sonuc };
}

// Komutları sırayla çalıştırır (görevlerin başlangıç durumunu kurmak için);
// başarısız komutta durur ve hatayı fırlatır. "! " ile başlayan komutun başarısız
// olması beklenir (ör. çakışmayla duran bir birleştirme)
// "@uzak <adres>" boş bir uzak depo açar, "@platform <adres> <json>" GitHub'daki dal
// korumalarını ve CI adımlarını tanımlar (platform.ts), "@ayse <komut>" komutu ekip arkadaşının
// bilgisayarında çalıştırır, "@anahtar <ad> <değer>" sanal ödeme hizmetinde (KafePay)
// etkin bir anahtar açar (ilk komutu genellikle git clone olur).
export function kur(o: Ortam, satirlar: string[]): Ortam {
  let x = o;
  for (const satir of satirlar) {
    const hataBekleniyor = satir.startsWith("! ");
    let s = hataBekleniyor ? satir.slice(2) : satir;
    const pl = /^@platform (\S+) (.*)$/.exec(s);
    if (pl) {
      x = kopya(x);
      platformKur(x, pl[1]!, JSON.parse(pl[2]!));
      continue;
    }
    const an = /^@anahtar (\S+) (\S+)$/.exec(s);
    if (an) {
      x = kopya(x);
      anahtarEkle(x, an[1]!, an[2]!);
      continue;
    }
    if (s.startsWith("@uzak ")) {
      x = kopya(x);
      uzakOlustur(x, s.slice(6).trim());
      continue;
    }
    const ekip = /^@(\w+) (.*)$/.exec(s);
    if (ekip) s = ekip[2]!;
    const r = ekip ? ekipCalistir(x, ekip[1]!, s) : calistir(x, s);
    if ((r.sonuc.kod !== 0) !== hataBekleniyor) throw new Error(`kurulum komutu ${hataBekleniyor ? "başarılı oldu" : "başarısız"}: ${s}\n${r.sonuc.cikti}`);
    x = r.ortam;
  }
  return x;
}

// Sanal ekip arkadaşları: her birinin kendi ortamı vardır, uzak depolar ve saat ortaktır
export const EKIP_KIMLIKLERI: Record<string, { ad: string; eposta: string }> = {
  ayse: { ad: "Ayşe Yılmaz", eposta: "ayse@ornek.dev" },
  mert: { ad: "Mert Can", eposta: "mert@ornek.dev" },
  zeynep: { ad: "Zeynep Arslan", eposta: "zeynep@ornek.dev" },
};

export function ekipCalistir(o: Ortam, ad: string, satir: string, kimlik?: Record<string, string>): { ortam: Ortam; sonuc: KabukSonucu } {
  const k = EKIP_KIMLIKLERI[ad];
  const onceki = o.ekip?.[ad] ?? yeniOrtam({ globalConfig: kimlik ?? (k ? { "user.name": k.ad, "user.email": k.eposta, "init.defaultBranch": "main" } : o.globalConfig) });
  const r = calistir({ ...onceki, uzaklar: o.uzaklar, saat: o.saat }, satir);
  const yeni = kopya(o);
  yeni.uzaklar = r.ortam.uzaklar;
  yeni.saat = r.ortam.saat;
  yeni.ekip = { ...(yeni.ekip ?? {}), [ad]: { ...r.ortam, uzaklar: undefined } };
  return { ortam: yeni, sonuc: r.sonuc };
}

// Editörde açılacak metin: çalışma dizinindeki dosya ya da Git'in beklettiği metin
export function editorIcerigi(o: Ortam, yol: string): string {
  const islem = o.depo?.islem;
  if ((yol === REBASE_TODO || yol === COMMIT_MESAJI) && islem?.tur === "rebase") return islem.editorMetni ?? "";
  return o.dosyalar[yol] ?? "";
}

// Editör kaydedip kapatıldı. Git'in beklettiği bir metinse işlem kaldığı yerden sürer
// (yeni bir editör isteği gelebilir); değilse dosya yazılır.
export function editorKaydet(o: Ortam, yol: string, metin: string): { ortam: Ortam; sonuc: KabukSonucu } {
  const yeni = kopya(o);
  const islem = yeni.depo?.islem;
  if ((yol === REBASE_TODO || yol === COMMIT_MESAJI) && islem?.tur === "rebase" && islem.editor) {
    try {
      const cikti = rebaseEditorKapandi(yeni, metin);
      const sonraki = yeni.depo?.islem;
      const editor = sonraki?.tur === "rebase" && sonraki.editor ? (sonraki.editor === "todo" ? REBASE_TODO : COMMIT_MESAJI) : undefined;
      return { ortam: yeni, sonuc: { cikti, kod: 0, ...(editor ? { editor } : {}) } };
    } catch (e) {
      if (e instanceof GitHatasi) return { ortam: yeni, sonuc: { cikti: e.message, kod: e.kod } };
      throw e;
    }
  }
  yeni.dosyalar[yol] = metin;
  return { ortam: yeni, sonuc: { cikti: "", kod: 0 } };
}
