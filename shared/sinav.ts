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
  // Sayfanın altında ortada sayfa numarası, her grupta 1'den (önizleme, PDF ve Word'de aynı); varsayılan yok
  sayfaNo?: boolean;
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

// A-B-C-D grupları. "karisik": aynı sorular, soru sırası ve şıklar karışık.
// "benzer": her soru yerine aynı kavramdan ve türden başka bir soru gelir, sonra karıştırılır.
// A grubu kağıttaki soru sırasıyla basılır (şıkları sikKaristir ile karışır); tohum değişince yeniden karışır.
export type GrupKipi = "karisik" | "benzer";
export interface GrupAyari {
  sayi: 1 | 2 | 3 | 4;
  kip: GrupKipi;
  tohum: number;
  // Şıklar A grubunda da karışsın mı (yoksa doğru cevaplar sitedeki sırayla yığılabilir); varsayılan evet
  sikKaristir?: boolean;
  // Grup başına seçilen karıştırma denemesi (0: tohumun kendisi). Bir grup A'dan fazla sayfa
  // tutunca motor başka denemeleri sınar ve sığanı burada saklar; PDF ve Word aynı kağıdı basar.
  denemeler?: number[];
}

export interface SinavBelgesi {
  ad: string;
  ayar: SinavAyari;
  ogeler: SinavOgesi[];
  gruplar?: GrupAyari;
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

// Öğrenci soru havuzu (/havuz/<kod>)
export interface HavuzOzeti {
  kod: string;
  ad: string;
  sonTarih: string | null;
  sinavId: string | null;
  soruSayisi: number;
  guncellendi: number;
}
// Bağlantıyı açan herkese giden bilgi (cevapsız); cozulen yalnızca üyeye
export interface HavuzBilgisi {
  kod: string;
  ad: string;
  hoca: string | null;
  sonTarih: string | null;
  soruSayisi: number;
  cozulen: number | null;
}
export const HAVUZ_SORU_EN_COK = 2000;

// Sınav hazırlarken soru havuzu: cevap ve açıklamayla (yalnızca yetkili kişiye gider)
export interface SinavSorusu extends Question {
  answer: unknown;
  explanation: string | null;
  // Seçicide süzmek için: konunun adı, ilk denemelerin toplamı (kişi, doğru) ve
  // hocanın bu pratikteki kaç sınavında kullanıldığı (şu anki sınav dahil)
  konu?: string;
  basari?: { kisi: number; dogru: number };
  kullanim?: number;
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
    sayfaNo: false,
    // Önceki sınavdan yalnızca kişiye ait başlık bilgileri ve kağıt düzeni gelir
    ...(onceki
      ? {
          boyut: onceki.boyut ?? "A4", yon: onceki.yon ?? "dikey", sutun: onceki.sutun ?? 2, yazi: onceki.yazi ?? 11,
          kenar: onceki.kenar ?? 15, sikSayisi: onceki.sikSayisi ?? 5, universite: onceki.universite ?? "",
          fakulte: onceki.fakulte ?? "", ders: onceki.ders ?? "", sure: onceki.sure ?? 0,
          adSoyad: onceki.adSoyad ?? true, numara: onceki.numara ?? true, imza: onceki.imza ?? false,
          puanGoster: onceki.puanGoster ?? true, yonerge: onceki.yonerge ?? "", sayfaNo: onceki.sayfaNo ?? false,
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
  if (ayar.sayfaNo !== undefined && typeof ayar.sayfaNo !== "boolean") return "Sayfa numarası ayarı geçersiz.";
  if (!(Number.isInteger(ayar.sure) && ayar.sure >= 0 && ayar.sure <= 600)) return "Süre 0 ile 600 dakika arasında olmalı.";
  const g = (b as Partial<SinavBelgesi>).gruplar;
  if (g !== undefined) {
    if (!g || typeof g !== "object" || ![1, 2, 3, 4].includes(g.sayi) || (g.kip !== "karisik" && g.kip !== "benzer") || !Number.isInteger(g.tohum) || (g.sikKaristir !== undefined && typeof g.sikKaristir !== "boolean")) {
      return "Grup ayarları geçersiz.";
    }
    if (g.denemeler !== undefined && (!Array.isArray(g.denemeler) || g.denemeler.length > 4 || !g.denemeler.every((d) => Number.isInteger(d) && d >= 0 && d <= SIGDIRMA_DENEME))) {
      return "Grup ayarları geçersiz.";
    }
  }
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

// Sayfa sayısını aşan grup için denenecek en çok karıştırma
export const SIGDIRMA_DENEME = 40;

// Ölçü anahtarı: bir öğenin kağıttaki yüksekliği şık sırasına bağlı değildir (şıklar alt alta),
// yalnızca hangi metnin basıldığına bağlıdır. A'daki düzenlemeyle basılan soru öğeye, sitedeki
// haliyle basılan soru sorunun kendisine bağlanır; böylece bir kez ölçülen yükseklik bütün
// gruplarda ve denemelerde kullanılır.
export const olcuAnahtari = (o: GrupOgesi) => (o.tur === "metin" ? `m:${o.ogeId}` : o.duzenli ? `a:${o.ogeId}` : `s:${o.soru.id}`);

// Grubu A'nın sayfa sayısına sığdıran denemeyi bulur. sayfaSayisi verilen öğelerin kaç sayfa
// tuttuğunu söyler (ölçülemeyen öğe varsa null). Önce şu anki deneme, sonra 0, 1, 2... sınanır;
// sığan yoksa en az sayfa tutan seçilir (eşitlikte şu anki korunur, kağıt boşuna değişmez).
export function sigdir(
  belge: SinavBelgesi, sorular: Map<string, SinavSorusu>, grup: number, hedef: number,
  sayfaSayisi: (ogeler: GrupOgesi[]) => number | null,
): { deneme: number; sayfa: number } | null {
  const simdiki = belge.gruplar?.denemeler?.[grup] ?? 0;
  const sira = [simdiki, ...Array.from({ length: SIGDIRMA_DENEME + 1 }, (_, i) => i).filter((i) => i !== simdiki)];
  let en: { deneme: number; sayfa: number } | null = null;
  for (const d of sira) {
    const s = sayfaSayisi(grupKagidi(belge, sorular, grup, d));
    if (s === null) return null;
    if (s <= hedef) return { deneme: d, sayfa: s };
    if (!en || s < en.sayfa) en = { deneme: d, sayfa: s };
  }
  return en;
}

// Kağıdın mm cinsinden boyutu (yön dahil)
export function kagitMm(a: Pick<SinavAyari, "boyut" | "yon">): { en: number; boy: number } {
  const k = KAGIT_MM[a.boyut];
  return a.yon === "dikey" ? k : { en: k.boy, boy: k.en };
}

// ---- Gruplar ----

export const GRUP_ADLARI = ["A", "B", "C", "D"] as const;
export const varsayilanGruplar = (): GrupAyari => ({ sayi: 1, kip: "karisik", tohum: 1 });

// Tohumlu, her yerde aynı sonucu veren rastgele sayı üreteci (mulberry32)
export function rastgele(tohum: number): () => number {
  let a = tohum >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function karistir<T>(l: T[], r: () => number): T[] {
  const k = [...l];
  for (let i = k.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [k[i], k[j]] = [k[j]!, k[i]!];
  }
  return k;
}

// Kağıda basılacak hali hesaplanmış soru: metin, şıklar ve doğru şıkkın yeri
export interface GrupSorusu {
  tur: "soru";
  id: string;
  // Kağıttaki öğe (A grubundaki karşılığı); benzer kipte soru değişmiş olabilir
  ogeId: string;
  soru: SinavSorusu;
  metin: string;
  siklar: string[];
  // siklar[i], kağıttaki (indirilmiş) şık listesinin sira[i]. elemanıdır; yerinde düzenlemede kullanılır
  sira: number[];
  dogru: number | null;
  puan?: number;
  // Soru, kağıttaki düzenlemeyle mi basılıyor (A'daki metin ve şıklar)
  duzenli: boolean;
}
export type GrupOgesi = GrupSorusu | { tur: "metin"; id: string; ogeId: string; metin: string };

// Bir sorunun kağıttaki şıkları ve doğru şıkkı (şık sayısına indirilmiş, düzenlemeler uygulanmış)
export function soruSiklari(o: { siklar?: string[] } | null, q: SinavSorusu, n: number): { siklar: string[]; dogru: number | null } {
  if (q.type !== "mcq") return { siklar: [], dogru: null };
  const asil = q.payload.choices ?? [];
  const dogru = (q.answer as { index?: number } | null)?.index ?? null;
  const ind = sikIndir(asil, dogru, n, q.payload.sabit);
  return o?.siklar ? { siklar: o.siklar, dogru: ind.dogru } : ind;
}

// Benzer soru: aynı kavram ve türden, yoksa aynı konu ve türden; bu grupta henüz kullanılmamış
function benzerSoru(q: SinavSorusu, havuz: SinavSorusu[], kullanilan: Set<string>, r: () => number): SinavSorusu {
  const uygun = (f: (x: SinavSorusu) => boolean) => havuz.filter((x) => x.type === q.type && !kullanilan.has(x.id) && f(x));
  let aday = q.kavram ? uygun((x) => x.kavram === q.kavram) : [];
  if (!aday.length) aday = uygun((x) => x.topicId === q.topicId);
  return aday.length ? aday[Math.floor(r() * aday.length)]! : q;
}

// Grubun kağıdı. Ortak metinler yerinde kalır; aralarındaki sorular kendi içinde karışır
// (böylece "1-5. soruları parçaya göre" gibi yönergeler yine doğru sorulara düşer).
// deneme: verilmezse belgede bu grup için saklanan deneme (yoksa 0). 0. deneme eski sürümlerle aynı kağıdı verir.
export function grupKagidi(belge: SinavBelgesi, sorular: Map<string, SinavSorusu>, grup: number, deneme?: number): GrupOgesi[] {
  const g = belge.gruplar ?? varsayilanGruplar();
  const n = belge.ayar.sikSayisi;
  const d = grup === 0 ? 0 : deneme ?? g.denemeler?.[grup] ?? 0;
  const r = rastgele(g.tohum * 7919 + grup * 104729 + d * 15485863);
  const havuz = [...sorular.values()];
  // Benzer kipte kağıttaki bütün sorular diğer gruplarda tekrar seçilmesin diye dışarıda tutulur
  const kagittakiler = new Set(belge.ogeler.flatMap((o) => (o.tur === "soru" ? [o.soruId] : [])));
  const kullanilan = new Set(kagittakiler);

  const cevir = (o: Extract<SinavOgesi, { tur: "soru" }>): GrupSorusu | null => {
    const asil = sorular.get(o.soruId);
    if (!asil) return null;
    const q = grup > 0 && g.kip === "benzer" ? benzerSoru(asil, havuz, kullanilan, r) : asil;
    kullanilan.add(q.id);
    const duzenli = q === asil;
    let { siklar, dogru } = soruSiklari(duzenli ? o : null, q, n);
    let sira = siklar.map((_, i) => i);
    if ((grup > 0 || g.sikKaristir !== false) && !q.payload.sabit && siklar.length > 1) {
      sira = karistir(sira, r);
      const eski = siklar;
      siklar = sira.map((i) => eski[i]!);
      dogru = dogru === null ? null : sira.indexOf(dogru);
    }
    return { tur: "soru", id: `${o.id}-${grup}`, ogeId: o.id, soru: q, metin: (duzenli ? o.metin : undefined) ?? q.prompt, siklar, sira, dogru, puan: o.puan, duzenli };
  };

  const sonuc: GrupOgesi[] = [];
  let parca: GrupSorusu[] = [];
  const bosalt = () => {
    sonuc.push(...(grup > 0 ? karistir(parca, r) : parca));
    parca = [];
  };
  for (const o of belge.ogeler) {
    if (o.tur === "metin") {
      bosalt();
      sonuc.push({ tur: "metin", id: `${o.id}-${grup}`, ogeId: o.id, metin: o.metin });
    } else {
      const c = cevir(o);
      if (c) parca.push(c);
    }
  }
  bosalt();
  return sonuc;
}

// Cevap anahtarı satırı: "C", "D" / "Y", boşluk cevapları ya da yazılı soru için "—"
export function cevapYazisi(s: GrupSorusu): string {
  const a = s.soru.answer as { index?: number; value?: boolean; blanks?: string[][] } | null;
  switch (s.soru.type) {
    case "mcq": return s.dogru === null ? "—" : SIK_HARFLERI[s.dogru]!;
    case "tf": return a?.value === undefined ? "—" : a.value ? "D" : "Y";
    case "fill":
    case "num": return a?.blanks?.map((b) => b[0] ?? "").join("; ") || "—";
    default: return "—";
  }
}
