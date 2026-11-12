// Tarayıcıda çalışan Git modeli (Git ve GitHub pratiğinin sandbox'ı ve derslerdeki
// mini terminaller). Ortam düz JSON'dur; calistir() ortamın kopyası üzerinde çalışır,
// böylece her adımın anlık görüntüsü geri alma için saklanabilir.
import { satirCalistir, type KabukSonucu } from "./kabuk";
import type { Ortam } from "./tipler";

export type { Ortam, Depo, Commit, Nesne } from "./tipler";
export type { KabukSonucu } from "./kabuk";
export { GIT_KOMUTLARI } from "./kabuk";
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
export function kur(o: Ortam, satirlar: string[]): Ortam {
  let x = o;
  for (const satir of satirlar) {
    const hataBekleniyor = satir.startsWith("! ");
    const s = hataBekleniyor ? satir.slice(2) : satir;
    const r = calistir(x, s);
    if ((r.sonuc.kod !== 0) !== hataBekleniyor) throw new Error(`kurulum komutu ${hataBekleniyor ? "başarılı oldu" : "başarısız"}: ${s}\n${r.sonuc.cikti}`);
    x = r.ortam;
  }
  return x;
}
