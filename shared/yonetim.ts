// Yönetim paneli ile Worker arasındaki tipler ve soru girdisi denetimi.
// Panel cevapları da görür; bu tipler sadece /api/yonetim altında kullanılır.

export type PanelSoruTipi = "tf" | "mcq" | "fill" | "num";

import { sayiBelirtimi } from "./grade";

export type Beklenen = { value: boolean } | { index: number } | { blanks: string[][] };

export interface SoruGirdi {
  topicId: string;
  type: PanelSoruTipi;
  source: "original" | "derived";
  difficulty: number;
  sourceRef: string;
  prompt: string;
  explanation: string;
  choices: string[]; // sadece mcq
  answer: Beklenen;
  status: "draft" | "published";
  active: boolean;
}

// Kod soruları depodaki içerikten gelir (referans modeli worker/modeller.ts'de);
// panelde yalnızca durumları değiştirilebilir.
export interface PanelSoru extends Omit<SoruGirdi, "type"> {
  type: PanelSoruTipi | "code";
  id: string;
  week: number;
  updatedAt: number | null;
  // Yedek havuzda: soru listesinde görünmez, yalnızca aralıklı tekrarda gelir
  yedek: boolean;
  deneme: number;
  dogru: number;
}

export interface PanelAyarlar {
  showOriginal: boolean;
  currentWeek: number;
  announcement: string;
}

export interface PanelOzet extends PanelAyarlar {
  soru: { toplam: number; yayinda: number; taslak: number; gizli: number; orijinal: number };
  // Sekmelerdeki sayaçlar
  bekleyenOneri: number;
  okunmamisMesaj: number;
  uye: number;
  misafir: number;
  deneme: number;
}

// Soru listesinin üstündeki pano
export interface PanelPano {
  // Son 7 gün, Türkiye saatine göre, eskiden yeniye
  gunluk: { gun: string; deneme: number; dogru: number }[];
  // En az 3 denemesi olan, doğru oranı en düşük sorular
  enCokYanlis: { id: string; prompt: string; type: string; deneme: number; yanlis: number }[];
}

export interface PanelKullanici {
  id: string;
  username: string;
  email: string | null;
  role: string;
  publicProfile: boolean;
  createdAt: number;
  deneme: number;
  mutedUntil: number | null;
  // Akademisyenin alanları (pratik kimlikleri)
  alanlar: string[];
}

export interface PanelKayit {
  id: number;
  username: string | null;
  action: string;
  target: string | null;
  detail: string | null;
  createdAt: number;
}

const metin = (v: unknown, en: number) => typeof v === "string" && v.trim().length > 0 && v.length <= en;

// Hata yoksa null döner
export function soruGirdisiHatasi(g: Partial<SoruGirdi>): string | null {
  if (!metin(g.topicId, 100)) return "Konu seçilmeli.";
  if (g.type !== "tf" && g.type !== "mcq" && g.type !== "fill" && g.type !== "num") return "Soru türü geçersiz.";
  if (g.source !== "original" && g.source !== "derived") return "Kaynak türü geçersiz.";
  if (![1, 2, 3].includes(g.difficulty as number)) return "Zorluk 1, 2 ya da 3 olmalı.";
  if (typeof g.sourceRef !== "string" || g.sourceRef.length > 200) return "Kaynak notu en fazla 200 karakter olabilir.";
  if (!metin(g.prompt, 4000)) return "Soru metni boş olamaz (en fazla 4000 karakter).";
  if (!metin(g.explanation, 4000)) return "Açıklama boş olamaz (en fazla 4000 karakter).";
  if (g.status !== "draft" && g.status !== "published") return "Durum geçersiz.";
  if (typeof g.active !== "boolean") return "Görünürlük geçersiz.";

  const a = g.answer as Record<string, unknown> | undefined;
  if (!a || typeof a !== "object") return "Doğru cevap seçilmeli.";
  switch (g.type) {
    case "tf":
      if (typeof a.value !== "boolean") return "Doğru ya da yanlış seçilmeli.";
      break;
    case "mcq": {
      const c = g.choices;
      if (!Array.isArray(c) || c.length < 2 || c.length > 6) return "2 ile 6 arasında şık olmalı.";
      if (!c.every((x) => metin(x, 500))) return "Şıklar boş olamaz (en fazla 500 karakter).";
      if (new Set(c.map((x) => x.trim())).size !== c.length) return "Aynı şık iki kez yazılmış.";
      if (!Number.isInteger(a.index) || (a.index as number) < 0 || (a.index as number) >= c.length) return "Doğru şık seçilmeli.";
      break;
    }
    case "fill":
    case "num": {
      const b = a.blanks;
      if (!Array.isArray(b) || b.length < 1 || b.length > 6) return "1 ile 6 arasında boşluk olmalı.";
      for (const [i, kabul] of b.entries()) {
        if (!Array.isArray(kabul) || kabul.length < 1 || kabul.length > 10 || !kabul.every((x) => metin(x, 200))) {
          return `Boşluk ${i + 1} için en az bir kabul edilen cevap yazılmalı.`;
        }
        if (g.type === "num" && !kabul.every((x: string) => sayiBelirtimi(x))) {
          return `Boşluk ${i + 1}: sayısal cevap 1.5, 1.5±0.01 ya da [1 2 -1] biçiminde yazılmalı.`;
        }
      }
      break;
    }
  }
  return null;
}

// Veritabanındaki payload / answer sütunları
export function soruSutunlari(g: SoruGirdi): { payload: string; answer: string } {
  if (g.type === "mcq") {
    return { payload: JSON.stringify({ choices: g.choices.map((c) => c.trim()) }), answer: JSON.stringify(g.answer) };
  }
  if (g.type === "fill" || g.type === "num") {
    const blanks = (g.answer as { blanks: string[][] }).blanks.map((b) => b.map((x) => x.trim()));
    return { payload: JSON.stringify({ blanks: blanks.length }), answer: JSON.stringify({ blanks }) };
  }
  return { payload: "{}", answer: JSON.stringify(g.answer) };
}

// Panelin "Pratikler" bölümü: bütün pratiklerin yan yana durumu (Faz 1)
export interface PanelPratik {
  id: string;
  ad: string;
  alt: string;
  yayinda: boolean;
  acikUnite: number;
  uniteSayisi: number;
  // Yayında ve açık ünitelerdeki soru sayısı
  soru: number;
  taslak: number;
  // Son 7 gün
  deneme7: number;
  kisi7: number;
  // Bu pratikte en az bir soru denemiş kişi
  kisi: number;
  bekleyenOneri: number;
}

// Yönetim panelinden Claude'a verilen iş (Faz 2, yerel ajan)
export type ClaudeIsDurumu = "bekliyor" | "calisiyor" | "pr" | "tamam" | "hata" | "iptal";
// is: bir pratikte değişiklik; pratik: çatı panelinden yeni pratik; test: ajanı dene
export type ClaudeIsTuru = "is" | "pratik" | "test";
export interface ClaudeIsi {
  id: string;
  // Pratik kimliği; çatı panelinden verilen işlerde "*"
  pratik: string;
  tur: ClaudeIsTuru;
  istek: string;
  durum: ClaudeIsDurumu;
  sonuc: string | null;
  prUrl: string | null;
  olusturan: string | null;
  olusturuldu: number;
  guncellendi: number;
}
export const CLAUDE_ISTEK_EN_UZUN = 4000;

// Bir işin canlı günlüğündeki tek satır (ajan/olaylar.mjs üretir)
export type ClaudeOlayTuru = "asama" | "metin" | "arac" | "sonuc" | "cikti" | "bilgi" | "hata";
export const CLAUDE_OLAY_TURLERI: ClaudeOlayTuru[] = ["asama", "metin", "arac", "sonuc", "cikti", "bilgi", "hata"];
export interface ClaudeOlayi {
  id: number;
  tur: ClaudeOlayTuru;
  metin: string;
  zaman: number;
}
// Panelin canlı günlük isteğinin cevabı: işin son hali ve "sonra"dan sonraki olaylar
export interface ClaudeIsGunlugu {
  is: ClaudeIsi;
  iptalIstendi: boolean;
  olaylar: ClaudeOlayi[];
}
// Sınırlar: bir gönderimde en çok 50 olay, olay başına 4000 karakter, iş başına 3000 olay
export const OLAY_GONDERIM = 50;
export const OLAY_UZUNLUK = 4000;
export const IS_BASINA_OLAY = 3000;

// Yeni pratik isteği (çatı paneli). Ajan bunu Claude'a ayrıntılı bir isteğe çevirir.
export interface YeniPratikGirdi {
  ad: string;
  id: string;
  alt: string;
  onek: string;
  alan: string;
  // Kaynak .md dosyalarının yöneticinin bilgisayarındaki klasörü
  kaynakKlasoru: string;
  notlar: string;
}
const KIMLIK = /^[a-z][a-z0-9-]{1,30}$/;
const ALT = /^[a-z][a-z0-9]{1,30}$/;
const ONEK = /^[a-z]{2,4}$/;

export function yeniPratikHatasi(g: Partial<YeniPratikGirdi>, mevcut: { id: string; alt: string }[]): string | null {
  if (!g.ad?.trim() || g.ad.trim().length > 60) return "Pratiğin adını yaz (en fazla 60 karakter).";
  if (!g.id || !KIMLIK.test(g.id)) return "Kimlik küçük harf, rakam ve tireden oluşmalı (ör. tip-elektronigi).";
  if (!g.alt || !ALT.test(g.alt)) return "Alt alan adı küçük harf ve rakamdan oluşmalı, tire içermemeli (ör. tipelektronigi).";
  if (!g.onek || !ONEK.test(g.onek)) return "Soru öneki 2-4 küçük harf olmalı (ör. te).";
  if (["pratikler", "www", "fpga", "dsp", "girisimcilik", "kimya", "fizik", "ayrik"].includes(g.alt)) return "Bu alt alan adı başka bir sitede kullanılıyor.";
  if (mevcut.some((p) => p.id === g.id || p.alt === g.alt)) return "Bu kimlik ya da alt alan adıyla bir pratik zaten var.";
  if (!g.alan?.trim()) return "Katalogdaki alanı yaz (ör. Mühendislik).";
  if (!g.kaynakKlasoru?.trim().startsWith("/") && !g.kaynakKlasoru?.trim().startsWith("~/")) return "Kaynak klasörünü bilgisayarındaki tam yoluyla yaz (ör. ~/Belgeler/dersler/devreler).";
  if ((g.notlar ?? "").length > 2000) return "Notlar en fazla 2000 karakter olabilir.";
  return null;
}

// Yerel ajanın son yoklaması (her döngüde /api/ajan/nabiz ile bildirilir)
export interface AjanNabzi {
  zaman: number;
  makine: string;
  depo: string;
  surum: string;
  node: string;
  claude: string | null;
  gh: string | null;
  aralikSn: number;
}
export interface AjanDurumu {
  // Worker'da AJAN_TOKEN tanımlı mı
  anahtarTanimli: boolean;
  nabiz: AjanNabzi | null;
}
