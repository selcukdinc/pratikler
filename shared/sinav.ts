// Akademisyenin sınav kağıdı: sitedeki sorulardan seçilir, kağıt üzerinde düzenlenir,
// tarayıcıdan PDF olarak basılır. Belge tek bir JSON olarak saklanır (sinavlar.belge);
// soruların asıl metni değişmez, sınava özel düzenlemeler öğede durur.
// Sunucu ve istemci ortak kullanır; sayfalama ve şık indirme saf fonksiyonlardır.

import type { Question } from "./api";

export type KagitBoyutu = "A4" | "A3";
export type KagitYonu = "dikey" | "yatay";

// Kağıt boyutları, mm (dikey)
export const KAGIT_MM: Record<KagitBoyutu, { en: number; boy: number }> = {
  A4: { en: 210, boy: 297 },
  A3: { en: 297, boy: 420 },
};

export interface SinavAyari {
  boyut: KagitBoyutu;
  yon: KagitYonu;
  sutun: 1 | 2 | 3;
  // Yazı boyutu, punto
  yazi: number;
  // Kenar boşluğu, mm
  kenar: number;
  // Çoktan seçmeli sorularda şık sayısı: 4 (A-D) ya da 5 (A-E)
  sikSayisi: 4 | 5;
  // Başlık bilgileri: hoca bir kez yazar, yeni sınavlarda önceki sınavdan gelir
  universite: string;
  fakulte: string;
  ders: string;
  // "2025-2026 Güz Yarıyılı Vize Sınavı" gibi
  sinavAdi: string;
  // YYYY-AA-GG ya da boş
  tarih: string;
  // Dakika; 0 gösterilmez
  sure: number;
  adSoyad: boolean;
  numara: boolean;
  imza: boolean;
  puanGoster: boolean;
  yonerge: string;
}

export type SinavOgesi =
  | {
      tur: "soru";
      // Öğenin kimliği (aynı soru bir kez eklenir ama kimlik sıralama için ayrıdır)
      id: string;
      soruId: string;
      // Yalnızca bu sınav için değiştirilmiş metin ve şıklar; yoksa sorunun kendisi
      metin?: string;
      siklar?: string[];
      puan?: number;
    }
  | {
      tur: "metin";
      id: string;
      // Ortak metin ya da yönerge: "1 ve 2. soruları aşağıdaki parçaya göre cevaplayınız."
      metin: string;
    };

export interface SinavBelgesi {
  ad: string;
  ayar: SinavAyari;
  ogeler: SinavOgesi[];
}

export interface SinavOzeti {
  id: string;
  ad: string;
  soruSayisi: number;
  olusturuldu: number;
  guncellendi: number;
}

export interface Sinav extends SinavOzeti {
  belge: SinavBelgesi;
}

// Sınav hazırlarken soru havuzu: cevap ve açıklamayla (yalnızca yetkili kişiye gider)
export interface SinavSorusu extends Question {
  answer: unknown;
  explanation: string | null;
}

export const SINAV_BELGE_EN_BUYUK = 300_000;
export const SINAV_OGE_EN_COK = 300;

export function varsayilanAyar(onceki?: Partial<SinavAyari>): SinavAyari {
  return {
    boyut: "A4",
    yon: "dikey",
    sutun: 2,
    yazi: 11,
    kenar: 15,
    sikSayisi: 5,
    universite: "",
    fakulte: "",
    ders: "",
    sinavAdi: "",
    tarih: "",
    sure: 0,
    adSoyad: true,
    numara: true,
    imza: false,
    puanGoster: true,
    yonerge: "Süreniz bitmeden cevaplarınızı kontrol ediniz. Başarılar dilerim.",
    // Önceki sınavdan yalnızca kişiye ait başlık bilgileri ve kağıt düzeni gelir
    ...(onceki
      ? {
          boyut: onceki.boyut ?? "A4", yon: onceki.yon ?? "dikey", sutun: onceki.sutun ?? 2, yazi: onceki.yazi ?? 11,
          kenar: onceki.kenar ?? 15, sikSayisi: onceki.sikSayisi ?? 5, universite: onceki.universite ?? "",
          fakulte: onceki.fakulte ?? "", ders: onceki.ders ?? "", sure: onceki.sure ?? 0,
          adSoyad: onceki.adSoyad ?? true, numara: onceki.numara ?? true, imza: onceki.imza ?? false,
          puanGoster: onceki.puanGoster ?? true, yonerge: onceki.yonerge ?? "",
        }
      : {}),
  };
}

const metinMi = (x: unknown, en = 2000) => typeof x === "string" && x.length <= en;

// Belgenin biçimini denetler; sorun varsa Türkçe bir açıklama döner
export function sinavBelgesiHatasi(b: unknown): string | null {
  if (!b || typeof b !== "object") return "Sınav belgesi okunamadı.";
  const { ad, ayar, ogeler } = b as Partial<SinavBelgesi>;
  if (!metinMi(ad, 120)) return "Sınavın adı en fazla 120 karakter olabilir.";
  if (!ayar || typeof ayar !== "object") return "Kağıt ayarları eksik.";
  if (!(ayar.boyut in KAGIT_MM)) return "Kağıt boyutu A4 ya da A3 olmalı.";
  if (ayar.yon !== "dikey" && ayar.yon !== "yatay") return "Kağıt yönü geçersiz.";
  if (![1, 2, 3].includes(ayar.sutun)) return "Sütun sayısı 1, 2 ya da 3 olmalı.";
  if (!(ayar.yazi >= 8 && ayar.yazi <= 16)) return "Yazı boyutu 8 ile 16 punto arasında olmalı.";
  if (!(ayar.kenar >= 5 && ayar.kenar <= 30)) return "Kenar boşluğu 5 ile 30 mm arasında olmalı.";
  if (ayar.sikSayisi !== 4 && ayar.sikSayisi !== 5) return "Şık sayısı 4 ya da 5 olmalı.";
  for (const k of ["universite", "fakulte", "ders", "sinavAdi", "tarih"] as const) if (!metinMi(ayar[k], 200)) return "Başlık bilgileri en fazla 200 karakter olabilir.";
  if (!metinMi(ayar.yonerge, 2000)) return "Yönerge en fazla 2000 karakter olabilir.";
  if (!(Number.isInteger(ayar.sure) && ayar.sure >= 0 && ayar.sure <= 600)) return "Süre 0 ile 600 dakika arasında olmalı.";
  if (!Array.isArray(ogeler) || ogeler.length > SINAV_OGE_EN_COK) return `Bir sınavda en çok ${SINAV_OGE_EN_COK} öğe olabilir.`;
  for (const o of ogeler) {
    if (!o || typeof o !== "object" || !metinMi(o.id, 40)) return "Sınav öğesi okunamadı.";
    if (o.tur === "metin") {
      if (!metinMi(o.metin, 8000)) return "Ortak metin en fazla 8000 karakter olabilir.";
    } else if (o.tur === "soru") {
      if (!metinMi(o.soruId, 80)) return "Sınav sorusu okunamadı.";
      if (o.metin !== undefined && !metinMi(o.metin, 8000)) return "Soru metni en fazla 8000 karakter olabilir.";
      if (o.siklar !== undefined && (!Array.isArray(o.siklar) || o.siklar.length > 8 || !o.siklar.every((s) => metinMi(s, 2000)))) return "Şıklar okunamadı.";
      if (o.puan !== undefined && !(typeof o.puan === "number" && o.puan >= 0 && o.puan <= 100)) return "Puan 0 ile 100 arasında olmalı.";
    } else return "Bilinmeyen sınav öğesi.";
  }
  return null;
}

// Çoktan seçmeli sorunun şıklarını istenen sayıya indirir. Doğru şık hiçbir zaman
// atılmaz; atılacak yanlış şıklar sondan seçilir (çoğu zaman en zayıf çeldirici).
// "sabit" sorularda (başka şıklara harfle atıf, "Hepsi") şıklara dokunulmaz.
export function sikIndir(siklar: string[], dogru: number | null, n: number, sabit = false): { siklar: string[]; dogru: number | null } {
  if (sabit || siklar.length <= n) return { siklar, dogru };
  const kalan = siklar.map((s, i) => ({ s, i }));
  for (let j = kalan.length - 1; j >= 0 && kalan.length > n; j--) {
    if (kalan[j]!.i !== dogru) kalan.splice(j, 1);
  }
  return { siklar: kalan.map((k) => k.s), dogru: dogru === null ? null : kalan.findIndex((k) => k.i === dogru) };
}

export const SIK_HARFLERI = "ABCDEFGH";

// Toplam puan (puanı yazılmamış sorular sayılmaz)
export const toplamPuan = (b: SinavBelgesi) => b.ogeler.reduce((t, o) => t + (o.tur === "soru" ? o.puan ?? 0 : 0), 0);

// Soru öğeleri sırayla 1'den numaralanır; ortak metinler numara almaz
export function numaralar(ogeler: SinavOgesi[]): Map<string, number> {
  const m = new Map<string, number>();
  let n = 0;
  for (const o of ogeler) if (o.tur === "soru") m.set(o.id, ++n);
  return m;
}

// Sayfalama: öğe yükseklikleri (aynı birimde) sütunlara ve sayfalara yerleştirilir.
// İlk sayfada başlık yer kaplar. Sütundan uzun bir öğe kendi sütununa tek başına konur.
export interface SayfaDuzeni {
  sayfalar: string[][][]; // sayfa -> sütun -> öğe kimlikleri
}
export function sayfala(
  ogeler: { id: string; yukseklik: number }[],
  { sutunYuksekligi, ilkSayfaBaslik, sutun, aralik = 0 }: { sutunYuksekligi: number; ilkSayfaBaslik: number; sutun: number; aralik?: number },
): SayfaDuzeni {
  const sayfalar: string[][][] = [];
  let sayfa: string[][] = [[]];
  let dolu = 0;
  const kapasite = () => sutunYuksekligi - (sayfalar.length === 0 ? ilkSayfaBaslik : 0);
  const yeniSutun = () => {
    if (sayfa.length < sutun) sayfa.push([]);
    else {
      sayfalar.push(sayfa);
      sayfa = [[]];
    }
    dolu = 0;
  };
  for (const o of ogeler) {
    const gereken = o.yukseklik + (dolu > 0 ? aralik : 0);
    if (dolu > 0 && dolu + gereken > kapasite()) yeniSutun();
    sayfa[sayfa.length - 1]!.push(o.id);
    dolu += o.yukseklik + (dolu > 0 ? aralik : 0);
  }
  sayfalar.push(sayfa);
  return { sayfalar };
}

// Kağıdın mm cinsinden boyutu (yön dahil)
export function kagitMm(a: Pick<SinavAyari, "boyut" | "yon">): { en: number; boy: number } {
  const k = KAGIT_MM[a.boyut];
  return a.yon === "dikey" ? k : { en: k.boy, boy: k.en };
}
