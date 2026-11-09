// Sınav kağıdının soru seçicisi: süzme, sıralama, ünite başına rastgele seçim ve ünitenin
// sorularını değiştirme. Saf fonksiyonlar; bileşen src/pages/SinavKagidi.tsx'te.

import type { SinavOgesi, SinavSorusu } from "../../shared/sinav";

export type Secim = "" | "secili" | "secilmemis";
export type Kullanim = "" | "kullanilmamis" | "kullanilmis";
// Öğrencilerin ilk denemedeki başarısı: kolay %70 ve üstü, zor %40'ın altı; veri az: 5 kişiden az
export type Basari = "" | "kolay" | "orta" | "zor" | "veriyok";
export type Var = "" | "var" | "yok";
export type Siralama = "unite" | "zorluk" | "basari" | "uzunluk" | "rastgele";

export interface Suzgec {
  uniteler: number[];
  konu: string;
  kavram: string;
  turler: string[];
  zorMin: number;
  zorMax: number;
  etiket: string;
  sekil: Var;
  formul: Var;
  secim: Secim;
  kullanim: Kullanim;
  basari: Basari;
  ara: string;
  siralama: Siralama;
}

export const BOS_SUZGEC: Suzgec = {
  uniteler: [], konu: "", kavram: "", turler: [], zorMin: 1, zorMax: 5, etiket: "",
  sekil: "", formul: "", secim: "", kullanim: "", basari: "", ara: "", siralama: "unite",
};

export const BASARI_ESIGI = 5;
export const basariOrani = (q: SinavSorusu) => (q.basari && q.basari.kisi >= BASARI_ESIGI ? q.basari.dogru / q.basari.kisi : null);
export function basariSinifi(q: SinavSorusu): Exclude<Basari, ""> {
  const o = basariOrani(q);
  if (o === null) return "veriyok";
  return o >= 0.7 ? "kolay" : o < 0.4 ? "zor" : "orta";
}

export const sekilliMi = (q: SinavSorusu) => /\[\[[^\]]+\]\]/.test(q.prompt) || (q.payload.choices ?? []).some((c) => /\[\[[^\]]+\]\]/.test(c));
export const formulluMu = (q: SinavSorusu) => /\$[^$]+\$/.test(q.prompt) || (q.payload.choices ?? []).some((c) => /\$[^$]+\$/.test(c));

const kucuk = (s: string) => s.toLocaleLowerCase("tr-TR");

// "bir iki" → iki kelime de geçmeli; "tam ifade" tırnakla
export function aramaParcalari(ara: string): string[] {
  const out: string[] = [];
  const re = /"([^"]+)"|(\S+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(ara))) out.push(kucuk((m[1] ?? m[2])!.trim()));
  return out.filter(Boolean);
}

export function suz(sorular: SinavSorusu[], s: Suzgec, secili: Set<string>): SinavSorusu[] {
  const parcalar = aramaParcalari(s.ara);
  return sorular.filter((q) => {
    if (s.uniteler.length && !s.uniteler.includes(q.week)) return false;
    if (s.konu && q.topicId !== s.konu) return false;
    if (s.kavram && q.kavram !== s.kavram) return false;
    if (s.turler.length && !s.turler.includes(q.type)) return false;
    if (q.difficulty < s.zorMin || q.difficulty > s.zorMax) return false;
    if (s.etiket && !q.etiketler.includes(s.etiket)) return false;
    if (s.sekil && sekilliMi(q) !== (s.sekil === "var")) return false;
    if (s.formul && formulluMu(q) !== (s.formul === "var")) return false;
    if (s.secim && secili.has(q.id) !== (s.secim === "secili")) return false;
    if (s.kullanim) {
      // Şu anki kağıtta olması "kullanılmış" saymaz
      const baska = (q.kullanim ?? 0) - (secili.has(q.id) ? 1 : 0);
      if ((baska > 0) !== (s.kullanim === "kullanilmis")) return false;
    }
    if (s.basari && basariSinifi(q) !== s.basari) return false;
    if (parcalar.length) {
      const metin = kucuk([q.id, q.prompt, ...(q.payload.choices ?? []), q.sourceRef ?? ""].join(" \u0001 "));
      if (!parcalar.every((p) => metin.includes(p))) return false;
    }
    return true;
  });
}

export function sirala(l: SinavSorusu[], s: Siralama, r: () => number = Math.random): SinavSorusu[] {
  const k = [...l];
  switch (s) {
    case "zorluk": return k.sort((a, b) => a.difficulty - b.difficulty || a.week - b.week);
    case "basari": return k.sort((a, b) => (basariOrani(a) ?? 2) - (basariOrani(b) ?? 2));
    case "uzunluk": return k.sort((a, b) => uzunluk(a) - uzunluk(b));
    case "rastgele": return karistir(k, r);
    default: return k;
  }
}
const uzunluk = (q: SinavSorusu) => q.prompt.length + (q.payload.choices ?? []).reduce((t, c) => t + c.length, 0);

function karistir<T>(l: T[], r: () => number): T[] {
  const k = [...l];
  for (let i = k.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [k[i], k[j]] = [k[j]!, k[i]!];
  }
  return k;
}

// Adaylardan n soru: kavramlar sırayla dolaşılır (önce her kavramdan bir), kavram içinde rastgele
export function rastgeleSec(adaylar: SinavSorusu[], n: number, r: () => number = Math.random): SinavSorusu[] {
  const gruplar = new Map<string, SinavSorusu[]>();
  for (const q of karistir(adaylar, r)) {
    const k = q.kavram ?? `konu:${q.topicId}`;
    gruplar.set(k, [...(gruplar.get(k) ?? []), q]);
  }
  const kuyruklar = karistir([...gruplar.values()], r);
  const out: SinavSorusu[] = [];
  while (out.length < n && kuyruklar.some((k) => k.length)) {
    for (const k of kuyruklar) {
      const q = k.shift();
      if (q && out.length < n) out.push(q);
    }
  }
  return out;
}

// Kağıttaki bir ünitenin sorularını aynı kavram ve türden (yoksa aynı konu ve türden) başka
// sorularla değiştirir. Öğe kimliği, yeri ve puanı kalır; sınava özel düzenlemeler (yeni soruya
// ait olmadığı için) bırakılır. Yerine konacak soru bulunamazsa soru kalır.
export function uniteyiDegistir(
  ogeler: SinavOgesi[], sorular: Map<string, SinavSorusu>, unite: number, r: () => number = Math.random,
): { ogeler: SinavOgesi[]; degisen: number } {
  const kullanilan = new Set(ogeler.flatMap((o) => (o.tur === "soru" ? [o.soruId] : [])));
  const havuz = karistir([...sorular.values()], r);
  let degisen = 0;
  const yeni = ogeler.map((o) => {
    if (o.tur !== "soru") return o;
    const q = sorular.get(o.soruId);
    if (!q || q.week !== unite) return o;
    const uygun = (f: (x: SinavSorusu) => boolean) => havuz.find((x) => x.type === q.type && x.week === unite && !kullanilan.has(x.id) && f(x));
    const b = (q.kavram ? uygun((x) => x.kavram === q.kavram) : undefined) ?? uygun((x) => x.topicId === q.topicId);
    if (!b) return o;
    kullanilan.add(b.id);
    degisen++;
    return { tur: "soru" as const, id: o.id, soruId: b.id, ...(o.puan !== undefined ? { puan: o.puan } : {}) };
  });
  return { ogeler: yeni, degisen };
}

// Etkin süzgeç sayısı (sıralama sayılmaz)
export function etkinSayisi(s: Suzgec): number {
  return [
    s.uniteler.length > 0, !!s.konu, !!s.kavram, s.turler.length > 0, s.zorMin > 1 || s.zorMax < 5, !!s.etiket,
    !!s.sekil, !!s.formul, !!s.secim, !!s.kullanim, !!s.basari, !!s.ara.trim(),
  ].filter(Boolean).length;
}
