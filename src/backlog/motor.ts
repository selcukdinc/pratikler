// Backlog Atölyesi'nin motoru (Backlog pratiği, /backlog/atolye). Saf TypeScript: backlog
// düz JSON'dur, adim(backlog, hamle, senaryo) yeni bir backlog döndürür ve girdiyi
// değiştirmez. Değerlendirme tamamen kurallıdır: yazılan metnin anlamına değil yapısına
// bakar (rol, fayda, dokunulan katmanlar, kabul kriterleri, tahmin). Planning Poker'daki
// kartlar tohumludur: aynı tohumla aynı kartlar açılır. Ürün, takım, kart havuzu ve gizli
// bilgiler veridir (icerik/backlog/istemci/atolye); sunucuya hiç istek atılmaz.
import { GENEL_ROLLER, gherkinDenetle, storyDenetle } from "./kurallar";

export type Tur = "epic" | "feature" | "story";
export type Katman = "ekran" | "servis" | "veri";
export const KATMANLAR: Katman[] = ["ekran", "servis", "veri"];
export const KATMAN_ADI: Record<Katman, string> = { ekran: "Ekran", servis: "Servis", veri: "Veri" };
export const PUANLAR = [1, 2, 3, 5, 8, 13, 21] as const;
// Bu puanın üstündeki story iki haftalık bir Sprint'e rahat sığmaz
export const SPRINT_SINIRI = 8;

export interface Kriter {
  given: string;
  when: string;
  then: string;
  // Olumsuz yol mu (kart reddedildi, bakiye yetmedi...)
  olumsuz: boolean;
}

export interface Wsjf {
  // İş değeri, zaman kritikliği, risk azaltma ya da fırsat: 1-10
  deger: number;
  zaman: number;
  risk: number;
}

export interface Oge {
  id: string;
  tur: Tur;
  ust: string | null;
  baslik: string;
  rol?: string;
  istek?: string;
  fayda?: string;
  // Story'nin dokunduğu katmanlar; üçü birden: dikey dilim
  katmanlar?: Katman[];
  kriterler?: Kriter[];
  puan?: number | null;
  // Havuzdan gelen kartın kimliği (kendi yazılan öğede yok)
  kart?: string;
  // Araştırma öğesi: çıktısı bilgidir, time-box'lıdır
  spike?: boolean;
  wsjf?: Wsjf;
}

export interface Bulgu {
  id: string;
  metin: string;
}

export interface Backlog {
  surum: 1;
  ogeler: Oge[];
  // Story'lerin sırası (en üstte en önemli)
  sira: string[];
  // Ortaya çıkan gizli bilgilerin kimlikleri
  bulunan: string[];
  onay: { tur: number; onaylandi: boolean; bulgular: Bulgu[] | null };
  tohum: number;
  sayac: number;
  mesaj?: string;
}

// Havuzdaki hazır kart: tur ve içerik; puan takımın gerçek tahminidir (oyuncu görmez)
export interface HavuzKarti {
  id: string;
  tur: Tur;
  baslik: string;
  rol?: string;
  istek?: string;
  fayda?: string;
  katmanlar?: Katman[];
  puan?: number;
  // Feature için: epic'in hedefine katkı yapıyor mu
  katki?: boolean;
  // Story için önerilen feature kartı
  ustKart?: string;
  // Örnek çözümde ve geri bildirimde kullanılan açıklama
  not: string;
}

export interface Karakter {
  id: string;
  ad: string;
  rol: string;
}

export interface GizliBilgi {
  id: string;
  kisi: string;
  // Bilginin ilgili olduğu story kartı
  kart: string;
  // Bilgi ortaya çıkmadan kişinin açtığı kart
  tahmin: number;
  metin: string;
  // Bilgi ortaya çıkınca takımın yeni tahmini, önerilen spike ya da eksik kabul kriteri
  sonuc: { puan?: number; spike?: string; kriter?: Kriter };
}

export interface Senaryo {
  istek: { kim: string; metin: string };
  takim: Karakter[];
  havuz: HavuzKarti[];
  gizli: GizliBilgi[];
}

export type Hamle =
  | { tur: "kartEkle"; kart: string; ust: string | null }
  | { tur: "yaz"; oge: Omit<Oge, "id"> }
  | { tur: "guncelle"; id: string; alanlar: Partial<Omit<Oge, "id" | "tur">> }
  | { tur: "sil"; id: string }
  | { tur: "tasi"; id: string; yon: -1 | 1 }
  | { tur: "siraKur"; sira: string[] }
  | { tur: "sor"; id: string; kisi: string }
  | { tur: "onayaGonder" };

const ONEK: Record<Tur, string> = { epic: "E", feature: "F", story: "ST" };

export function baslat(ogeler: Oge[] = [], tohum = 1): Backlog {
  const sayac = ogeler.reduce((m, o) => Math.max(m, Number(o.id.split("-")[1]) || 0), 0);
  return {
    surum: 1,
    ogeler: ogeler.map((o) => ({ ...o })),
    sira: ogeler.filter((o) => o.tur === "story").map((o) => o.id),
    bulunan: [],
    onay: { tur: 0, onaylandi: false, bulgular: null },
    tohum,
    sayac,
  };
}

export const ogeBul = (b: Backlog, id: string | null | undefined) => b.ogeler.find((o) => o.id === id);
export const altlar = (b: Backlog, id: string | null) => b.ogeler.filter((o) => o.ust === id);
export const storyler = (b: Backlog) => b.sira.map((id) => ogeBul(b, id)).filter((o): o is Oge => !!o);

export function dikeyMi(o: Oge): boolean {
  return KATMANLAR.every((k) => o.katmanlar?.includes(k));
}

function torunlar(b: Backlog, id: string): string[] {
  const sonuc: string[] = [];
  for (const c of altlar(b, id)) sonuc.push(c.id, ...torunlar(b, c.id));
  return sonuc;
}

// Story'nin INVEST göstergesi: her harf için kurallı bir yargı
export interface Harf {
  harf: "I" | "N" | "V" | "E" | "S" | "T";
  tamam: boolean;
  neden: string;
}

const DIKTE = /(?<!\p{L})(excel\p{L}*|pdf|punto|mavi|kırmızı|yeşil|buton\p{L}*|açılır liste\p{L}*|a4)(?!\p{L})/iu;

export function invest(o: Oge, b: Backlog, s: Senaryo): Harf[] {
  if (o.spike) {
    return [
      { harf: "I", tamam: true, neden: "Spike tek başına yapılabilir." },
      { harf: "N", tamam: true, neden: "Soru konuşmaya açık." },
      { harf: "V", tamam: true, neden: "Değeri bilgidir: bir karar ya da tahmin." },
      { harf: "E", tamam: true, neden: "Time-box'lıdır; tahmin yerine süre yazılır." },
      { harf: "S", tamam: true, neden: "Birkaç günü geçmez." },
      { harf: "T", tamam: !!o.baslik.trim(), neden: o.baslik.trim() ? "Cevaplanacak soru belli." : "Spike'ın sorusu yazılmamış." },
    ];
  }
  const sd = storyDenetle(o.rol ?? "", o.istek ?? "", o.fayda ?? "");
  const genelRol = GENEL_ROLLER.test((o.rol ?? "").trim());
  const kriterler = o.kriterler ?? [];
  const kotuKriter = kriterler.find((k) => !gherkinDenetle(k.given, k.when, k.then).iyi);
  const gizli = s.gizli.find((g) => g.kart === o.kart && !b.bulunan.includes(g.id));
  const coklu = sd.uyarilar.some((u) => u.startsWith("İstek birden çok"));
  return [
    {
      harf: "I",
      tamam: !coklu,
      neden: coklu ? "İstek birden çok şeyi birbirine bağlıyor." : "Tek bir isteği anlatıyor.",
    },
    {
      harf: "N",
      tamam: !DIKTE.test(o.istek ?? ""),
      neden: DIKTE.test(o.istek ?? "") ? "İstek çözümü dikte ediyor (biçim, renk, düğme)." : "Ayrıntılar konuşmaya açık.",
    },
    {
      harf: "V",
      tamam: !genelRol && !!o.fayda?.trim() && dikeyMi(o),
      neden: !dikeyMi(o)
        ? "Yatay dilim: bütün katmanlara dokunmadığı için kullanıcı bir şey alamaz."
        : genelRol
          ? "Rol gerçek bir kullanıcıyı anlatmıyor."
          : !o.fayda?.trim()
            ? "Fayda yazılmamış."
            : "Kullanıcıya uçtan uca çalışan bir şey veriyor.",
    },
    {
      harf: "E",
      tamam: o.puan != null && !gizli,
      neden: o.puan == null ? "Henüz tahmin edilmedi." : gizli ? "Tahmin var ama takımda konuşulmamış bir bilgi olabilir." : `Tahmin: ${o.puan} puan.`,
    },
    {
      harf: "S",
      tamam: o.puan != null && o.puan <= SPRINT_SINIRI,
      neden: o.puan == null ? "Büyüklük bilinmiyor." : o.puan > SPRINT_SINIRI ? `${o.puan} puan Sprint'e rahat sığmaz; böl.` : "Sprint'te birkaç günde biter.",
    },
    {
      harf: "T",
      tamam: kriterler.length > 0 && !kotuKriter,
      neden: kriterler.length === 0 ? "Kabul kriteri yok." : kotuKriter ? "Bir kabul kriteri test edilemiyor." : `${kriterler.length} test edilebilir kabul kriteri.`,
    },
  ];
}

// Teknik Liderlik'in kurallı incelemesi: boş liste onaydır
export function onayIncele(b: Backlog, s: Senaryo): Bulgu[] {
  const bulgular: Bulgu[] = [];
  const ekle = (o: Oge, metin: string) => bulgular.push({ id: o.id, metin });
  const story = b.ogeler.filter((o) => o.tur === "story");
  if (story.length === 0) bulgular.push({ id: "", metin: "Backlog'da incelenecek story yok." });
  for (const o of b.ogeler) {
    const ust = ogeBul(b, o.ust);
    if (o.tur === "feature") {
      const kart = s.havuz.find((k) => k.id === o.kart);
      if (kart?.katki === false) ekle(o, "Bu feature epic'in hedefine katkı yapmıyor; başka bir epic'e ya da çıkar.");
      if (!altlar(b, o.id).some((c) => c.tur === "story")) ekle(o, "Feature'ın story'si yok.");
      continue;
    }
    if (o.tur !== "story") continue;
    if (!ust || ust.tur !== "feature") ekle(o, "Hangi feature'a ait olduğu belli değil.");
    if (o.spike) {
      if (!o.baslik.trim()) ekle(o, "Spike'ın cevaplayacağı soru yazılmamış.");
      continue;
    }
    const sd = storyDenetle(o.rol ?? "", o.istek ?? "", o.fayda ?? "");
    if (sd.uyarilar[0]) ekle(o, sd.uyarilar[0]);
    if (!dikeyMi(o)) {
      const k = KATMANLAR.filter((x) => o.katmanlar?.includes(x)).map((x) => KATMAN_ADI[x].toLocaleLowerCase("tr"));
      ekle(o, `Yatay dilim${k.length ? ` (yalnızca ${k.join(", ")})` : ""}: tek başına kullanıcıya bir şey vermiyor.`);
    }
    const kriterler = o.kriterler ?? [];
    if (kriterler.length === 0) ekle(o, "Kabul kriteri yok; ne zaman bittiği belli değil.");
    else {
      const kotu = kriterler.map((k) => gherkinDenetle(k.given, k.when, k.then)).find((d) => !d.iyi);
      if (kotu) ekle(o, `Kabul kriteri test edilemez: ${kotu.uyarilar[0]}`);
      if (!kriterler.some((k) => k.olumsuz)) ekle(o, "Olumsuz yol yok: ne bozulabilir?");
    }
    if (o.puan == null) ekle(o, "Tahmin edilmemiş.");
    else if (o.puan > SPRINT_SINIRI) ekle(o, `${o.puan} puan Sprint'e sığmaz; bölünmeli.`);
    if (s.gizli.some((g) => g.kart === o.kart && !b.bulunan.includes(g.id))) {
      ekle(o, "Planning Poker'daki farklı kartın nedeni konuşulmamış; takımda bilinmeyen bir risk var gibi.");
    }
  }
  return bulgular;
}

// Feature'ın WSJF puanı: gecikme maliyeti (değer + zaman + risk) / iş büyüklüğü
export function wsjf(f: Oge, b: Backlog): number | null {
  if (!f.wsjf) return null;
  const buyukluk = torunlar(b, f.id)
    .map((id) => ogeBul(b, id))
    .reduce((t, o) => t + (o?.tur === "story" ? (o.puan ?? 0) : 0), 0);
  if (buyukluk <= 0) return null;
  return Math.round(((f.wsjf.deger + f.wsjf.zaman + f.wsjf.risk) / buyukluk) * 10) / 10;
}

// mulberry32'nin tek adımı: tohum, story ve kişiden aynı sayıyı üretir
function zar(...parcalar: (string | number)[]): number {
  let h = 2166136261;
  for (const c of parcalar.join("|")) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  let t = (h += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

// Planning Poker: takımın her üyesinin açtığı kart
export function poker(o: Oge, b: Backlog, s: Senaryo): { kisi: Karakter; kart: number; bilgi: GizliBilgi | null }[] {
  const kart = s.havuz.find((k) => k.id === o.kart);
  const bulunan = s.gizli.filter((g) => g.kart === o.kart && b.bulunan.includes(g.id));
  const temel = bulunan.find((g) => g.sonuc.puan)?.sonuc.puan ?? kart?.puan ?? 3;
  const i = PUANLAR.indexOf(temel as (typeof PUANLAR)[number]);
  return s.takim.map((kisi) => {
    const g = s.gizli.find((x) => x.kart === o.kart && x.kisi === kisi.id) ?? null;
    if (g && !b.bulunan.includes(g.id)) return { kisi, kart: g.tahmin, bilgi: g };
    // Bilgisi olmayanlar çoğunlukla temel tahmini, bazen bir yanındakini açar
    const r = zar(b.tohum, o.id, kisi.id);
    const j = bulunan.length ? i : r < 0.2 ? i - 1 : r > 0.85 ? i + 1 : i;
    return { kisi, kart: PUANLAR[Math.min(PUANLAR.length - 1, Math.max(0, j))] ?? temel, bilgi: g };
  });
}

// Bir gizli bilgi ortaya çıkınca onu uygulayan hamleler (arayüzdeki "Öneriyi uygula")
export function oneriHamleleri(g: GizliBilgi, o: Oge): Hamle[] {
  const h: Hamle[] = [];
  if (g.sonuc.spike) h.push({ tur: "yaz", oge: { tur: "story", ust: o.ust, baslik: g.sonuc.spike, spike: true } });
  if (g.sonuc.puan) h.push({ tur: "guncelle", id: o.id, alanlar: { puan: g.sonuc.puan } });
  if (g.sonuc.kriter) h.push({ tur: "guncelle", id: o.id, alanlar: { kriterler: [...(o.kriterler ?? []), g.sonuc.kriter] } });
  return h;
}

export function adim(b: Backlog, h: Hamle, s: Senaryo): Backlog {
  const y: Backlog = { ...b, mesaj: undefined };
  const yeniId = (tur: Tur) => `${ONEK[tur]}-${(y.sayac += 1)}`;
  const ekle = (o: Oge) => {
    y.ogeler = [...y.ogeler, o];
    if (o.tur === "story") {
      // Spike ilgili story'lerden önce yapılır: kendi feature'ının ilk story'sinin önüne girer
      const ilk = o.spike ? y.sira.findIndex((id) => ogeBul(y, id)?.ust === o.ust) : -1;
      y.sira = ilk >= 0 ? [...y.sira.slice(0, ilk), o.id, ...y.sira.slice(ilk)] : [...y.sira, o.id];
    }
  };
  switch (h.tur) {
    case "kartEkle": {
      const k = s.havuz.find((x) => x.id === h.kart);
      if (!k) return { ...y, mesaj: "Kart bulunamadı." };
      if (y.ogeler.some((o) => o.kart === k.id)) return { ...y, mesaj: "Bu kart zaten backlog'da." };
      const { ustKart: _u, katki: _k, not: _n, puan: _p, ...icerik } = k;
      ekle({
        ...icerik,
        id: yeniId(k.tur),
        ust: h.ust,
        kart: k.id,
        katmanlar: k.katmanlar ? [...k.katmanlar] : undefined,
        kriterler: k.tur === "story" ? [] : undefined,
        puan: k.tur === "story" ? null : undefined,
      });
      return y;
    }
    case "yaz":
      ekle({ ...h.oge, id: yeniId(h.oge.tur) });
      return y;
    case "guncelle": {
      if (!ogeBul(y, h.id)) return { ...y, mesaj: "Öğe bulunamadı." };
      y.ogeler = y.ogeler.map((o) => (o.id === h.id ? { ...o, ...h.alanlar } : o));
      return y;
    }
    case "sil": {
      const giden = new Set([h.id, ...torunlar(y, h.id)]);
      y.ogeler = y.ogeler.filter((o) => !giden.has(o.id));
      y.sira = y.sira.filter((id) => !giden.has(id));
      return y;
    }
    case "tasi": {
      const i = y.sira.indexOf(h.id);
      const j = i + h.yon;
      if (i < 0 || j < 0 || j >= y.sira.length) return y;
      const sira = [...y.sira];
      [sira[i], sira[j]] = [sira[j]!, sira[i]!];
      y.sira = sira;
      return y;
    }
    case "siraKur": {
      const kalan = y.sira.filter((id) => !h.sira.includes(id));
      y.sira = [...h.sira.filter((id) => y.sira.includes(id)), ...kalan];
      return y;
    }
    case "sor": {
      const o = ogeBul(y, h.id);
      const g = s.gizli.find((x) => x.kart === o?.kart && x.kisi === h.kisi);
      const kisi = s.takim.find((k) => k.id === h.kisi);
      if (!o || !kisi) return { ...y, mesaj: "Öğe ya da kişi bulunamadı." };
      if (!g) return { ...y, mesaj: `${kisi.ad}: "Benim bildiğim ek bir şey yok; tahminim takımınkine yakın."` };
      if (!y.bulunan.includes(g.id)) y.bulunan = [...y.bulunan, g.id];
      return y;
    }
    case "onayaGonder": {
      const bulgular = onayIncele(y, s);
      y.onay = { tur: y.onay.tur + 1, onaylandi: bulgular.length === 0, bulgular };
      return y;
    }
  }
}

export function oyna(b: Backlog, hamleler: Hamle[], s: Senaryo): Backlog {
  return hamleler.reduce((d, h) => adim(d, h, s), b);
}

// Karne: DEEP ve INVEST özetleri, gizli bilgiler ve onay turu
export interface Karne {
  investYuzde: number;
  // DEEP: üstteki story'ler ayrıntılı mı, story'ler tahminli mi, sıra var mı
  ayrintili: boolean;
  tahminYuzde: number;
  gizliBulunan: number;
  gizliToplam: number;
  onayTuru: number;
  onaylandi: boolean;
}

export function karne(b: Backlog, s: Senaryo): Karne {
  const st = storyler(b).filter((o) => !o.spike);
  const harfler = st.flatMap((o) => invest(o, b, s));
  const kartlar = new Set(st.map((o) => o.kart));
  const gizli = s.gizli.filter((g) => kartlar.has(g.kart));
  return {
    investYuzde: harfler.length ? Math.round((harfler.filter((h) => h.tamam).length / harfler.length) * 100) : 0,
    ayrintili: st.length > 0 && st.slice(0, 3).every((o) => (o.kriterler ?? []).length > 0 && dikeyMi(o)),
    tahminYuzde: st.length ? Math.round((st.filter((o) => o.puan != null).length / st.length) * 100) : 0,
    gizliBulunan: gizli.filter((g) => b.bulunan.includes(g.id)).length,
    gizliToplam: gizli.length,
    onayTuru: b.onay.tur,
    onaylandi: b.onay.onaylandi,
  };
}
