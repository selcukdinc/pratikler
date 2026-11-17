// Sprint simülatörünün motoru (Agile ve Scrum pratiği, /agile/sprint). Saf TypeScript:
// durum düz JSON'dur, adim(durum, hamle, senaryo) yeni bir durum döndürür ve girdiyi
// değiştirmez. Rastgelelik tohumludur (mulberry32): aynı tohumla aynı oyun tekrarlanır.
// Ürün, olaylar ve görevler veridir (icerik/agile/istemci/simulasyon); motor bunlara
// bağlı değildir, böylece Backlog ve Ölçekli Agile pratikleri aynı motoru kendi
// senaryolarıyla kullanabilir. Sunucuya hiç istek atılmaz.

export type Rol = "sm" | "po";
export type Uyum = "uygun" | "aykiri" | "notr";
export type Asama = "planning" | "gun" | "review" | "retro" | "bitti";

export interface Oge {
  id: string;
  ad: string;
  // Büyüklük (puan) ve paydaş için değeri (1-10)
  puan: number;
  deger: number;
  etiket: string;
  tur?: "ozellik" | "hata" | "teknik";
}

export interface Gostergeler {
  moral: number;
  odak: number;
  borc: number;
  guven: number;
}

export interface Ayarlar {
  // Aynı anda üzerinde çalışılan en fazla öğe; null: sınır yok (herkes her işe başlar)
  wip: number | null;
  // DoD'da otomatik test maddesi var mı (yoksa her biten öğe teknik borç ekler)
  dodTest: boolean;
  // Her Sprint kapasitenin bir kısmı teknik borca ayrılıyor mu
  borcPayi: boolean;
}

export interface Etki extends Partial<Gostergeler> {
  // Bu Sprint'in iş bütçesine eklenen (eksi: kaybedilen) puan
  puan?: number;
  // Sprint Backlog'a eklenen öğe
  ekle?: Oge;
  // Product Backlog'un başına eklenen öğe
  backlogaEkle?: Oge;
  // Sprint Goal'e katkısı olmayan son öğe PO ile konuşularak Product Backlog'a döner
  cikar?: boolean;
}

export interface Secenek {
  metin: string;
  etki: Etki;
  uyum: Uyum;
  aciklama: string;
}

export interface Olay {
  id: string;
  baslik: string;
  metin: string;
  // Yalnızca bu rolde gelir (verilmezse iki rolde de)
  rol?: Rol;
  // Rastgele çekilişte ağırlığı (durum ona göre değiştirebilir)
  agirlik?: (d: Durum) => number;
  secenekler: Secenek[];
}

export interface Hedef {
  id: string;
  metin: string;
  // Sprint Goal'e katkı veren öğelerin etiketleri
  etiketler: string[];
}

export interface Iyilestirme {
  id: string;
  ad: string;
  aciklama: string;
  etki: Etki;
  ayar?: Partial<Ayarlar>;
}

export interface GeriBildirim {
  kim: string;
  metin: string;
  oge?: Oge;
}

export interface Senaryo {
  // Takımın taban hızı (puan/Sprint) ve Sprint'in iş günü
  kapasite: number;
  gunSayisi: number;
  // Takımın son Sprint'lerde bitirdiği puanlar (Planning'de ipucu)
  gecmisHiz: number[];
  backlog: Oge[];
  hedefler: Hedef[];
  olaylar: Olay[];
  iyilestirmeler: Iyilestirme[];
  // Sprint numarası -> Review'da paydaşların geri bildirimi
  geriBildirim: Record<number, GeriBildirim[]>;
  baslangic: Gostergeler;
  ayarlar: Ayarlar;
}

export interface Kayit {
  sprint: number;
  gun: number;
  olay: string;
  secim: number;
  uyum: Uyum;
}

export interface SprintSonucu {
  no: number;
  hedef: string | null;
  hedefTuttu: boolean;
  biten: string[];
  donen: string[];
  deger: number;
  puan: number;
  secilenPuan: number;
  geriBildirim: GeriBildirim[];
}

export interface Durum {
  surum: 1;
  tohum: number;
  rng: number;
  rol: Rol;
  sprintSayisi: number;
  // "<sprint>-<gün>" -> olay kimliği (görevler için sabit olaylar)
  sabitOlaylar: Record<string, string>;
  rastgeleOlay: boolean;
  sprint: number;
  asama: Asama;
  gun: number;
  olay: string | null;
  backlog: Oge[];
  g: Gostergeler;
  ayarlar: Ayarlar;
  // Bu Sprint
  hedef: string | null;
  ogeler: Oge[];
  kalan: Record<string, number>;
  burndown: number[];
  ekIs: number;
  gorulenOlaylar: string[];
  // Bütün oyun
  gecmis: SprintSonucu[];
  kayit: Kayit[];
  iyilestirmeler: string[];
  teslim: number;
  mesaj: string | null;
}

export type Hamle =
  | { tur: "hedef"; id: string }
  | { tur: "sec"; id: string }
  | { tur: "birak"; id: string }
  | { tur: "planlaBitir" }
  | { tur: "ilerle" }
  | { tur: "olay"; secim: number }
  | { tur: "reviewBitir" }
  | { tur: "iyilestir"; id: string };

export interface Ayar {
  tohum?: number;
  rol?: Rol;
  sprintSayisi?: number;
  sabitOlaylar?: Record<string, string>;
  rastgeleOlay?: boolean;
}

// ---------------- yardımcılar ----------------

// mulberry32: durumda yalnızca 32 bitlik sayı tutulur
function rastgele(d: Durum): number {
  let t = (d.rng = (d.rng + 0x6d2b79f5) | 0);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

const sinirla = (x: number) => Math.max(0, Math.min(100, Math.round(x)));

// Takımın verimini belirleyen çarpan; senaryonun başlangıç göstergelerinde 1 olur
function carpan(g: Gostergeler): number {
  return (0.55 + 0.45 * (g.odak / 100)) * (0.75 + 0.25 * (g.moral / 100)) * (1 - g.borc / 200);
}

export const kalanToplam = (d: Durum) => d.ogeler.reduce((t, o) => t + (d.kalan[o.id] ?? 0), 0);
export const secilenPuan = (d: Durum) => d.ogeler.reduce((t, o) => t + o.puan, 0);
export const bittiMi = (d: Durum, id: string) => (d.kalan[id] ?? 0) <= 1e-9;

export function hedefOgeleri(d: Durum, s: Senaryo): Oge[] {
  const h = s.hedefler.find((x) => x.id === d.hedef);
  return h ? d.ogeler.filter((o) => h.etiketler.includes(o.etiket)) : [];
}

// Planning'de takımın tahmini: geçmiş Sprint'lerin ortalaması (yoksa senaryonun geçmişi)
export function tahminiHiz(d: Durum, s: Senaryo): number {
  const son = [...s.gecmisHiz, ...d.gecmis.map((x) => x.puan)].slice(-3);
  return Math.round(son.reduce((a, b) => a + b, 0) / son.length);
}

function etkiUygula(d: Durum, e: Etki, s: Senaryo) {
  for (const k of ["moral", "odak", "borc", "guven"] as const) if (e[k]) d.g[k] = sinirla(d.g[k] + e[k]!);
  if (e.puan) d.ekIs += e.puan;
  if (e.ekle && !d.ogeler.some((o) => o.id === e.ekle!.id)) {
    d.ogeler.push({ ...e.ekle });
    d.kalan[e.ekle.id] = e.ekle.puan;
  }
  if (e.backlogaEkle && !d.backlog.some((o) => o.id === e.backlogaEkle!.id) && !d.ogeler.some((o) => o.id === e.backlogaEkle!.id))
    d.backlog.unshift({ ...e.backlogaEkle });
  if (e.cikar) {
    const hedef = new Set(hedefOgeleri(d, s).map((o) => o.id));
    const aday = [...d.ogeler].reverse().find((o) => !hedef.has(o.id) && !bittiMi(d, o.id));
    if (aday) {
      d.ogeler = d.ogeler.filter((o) => o.id !== aday.id);
      d.backlog.unshift({ ...aday, puan: Math.ceil(d.kalan[aday.id]!) });
      delete d.kalan[aday.id];
    }
  }
}

function olayCek(d: Durum, s: Senaryo): string | null {
  const sabit = d.sabitOlaylar[`${d.sprint}-${d.gun}`];
  if (sabit) return sabit;
  if (!d.rastgeleOlay || d.gun < 2 || d.gun >= s.gunSayisi) return null;
  if (rastgele(d) >= 0.45) return null;
  const adaylar = s.olaylar
    .filter((o) => (!o.rol || o.rol === d.rol) && !d.gorulenOlaylar.includes(o.id))
    .map((o) => [o, o.agirlik ? o.agirlik(d) : 1] as const)
    .filter(([, a]) => a > 0);
  const toplam = adaylar.reduce((t, [, a]) => t + a, 0);
  if (!toplam) return null;
  let r = rastgele(d) * toplam;
  for (const [o, a] of adaylar) if ((r -= a) <= 0) return o.id;
  return adaylar[adaylar.length - 1]![0].id;
}

// Bir günlük iş: bütçe Sprint Backlog'un sırasıyla dağıtılır. WIP sınırı varsa takım ilk
// birkaç öğeye yığılır ve onları bitirir; yoksa herkes her öğeye başlar, iş eşit bölünür
// ve bağlam değiştirme verimi düşürür.
function gunCalis(d: Durum, s: Senaryo) {
  let butce = (s.kapasite / s.gunSayisi) * (carpan(d.g) / carpan(s.baslangic));
  if (d.ayarlar.dodTest) butce *= 0.95;
  if (d.ayarlar.borcPayi) butce *= 0.9;
  butce += d.ekIs;
  d.ekIs = 0;
  const acik = d.ogeler.filter((o) => !bittiMi(d, o.id));
  const aktif = d.ayarlar.wip ? acik.slice(0, d.ayarlar.wip) : acik;
  butce *= Math.max(0.6, 1 - 0.03 * Math.max(0, aktif.length - 3));
  if (butce < 0) {
    // Kaybedilen iş ertesi güne taşınır
    d.ekIs = butce;
    butce = 0;
  }
  const once = new Set(acik.map((o) => o.id));
  if (d.ayarlar.wip) {
    for (const o of acik) {
      if (butce <= 0) break;
      const al = Math.min(butce, d.kalan[o.id]!);
      d.kalan[o.id]! -= al;
      butce -= al;
    }
  } else {
    // Eşit paylaşım; biten öğeden artan pay ötekilere geçer
    let kalanlar = aktif.filter((o) => d.kalan[o.id]! > 0);
    while (butce > 1e-9 && kalanlar.length) {
      const pay = butce / kalanlar.length;
      for (const o of kalanlar) {
        const al = Math.min(pay, d.kalan[o.id]!);
        d.kalan[o.id]! -= al;
        butce -= al;
      }
      kalanlar = kalanlar.filter((o) => d.kalan[o.id]! > 1e-9);
    }
  }
  for (const o of d.ogeler) {
    if (d.kalan[o.id]! <= 1e-9) d.kalan[o.id] = 0;
    // Zayıf DoD: test edilmeden "bitti" denen her öğe teknik borç bırakır
    if (once.has(o.id) && bittiMi(d, o.id) && !d.ayarlar.dodTest) d.g.borc = sinirla(d.g.borc + 2);
  }
  // Teknik borç yüksekse odak her gün biraz düşer
  if (d.g.borc > 60) d.g.odak = sinirla(d.g.odak - 1);
  d.burndown.push(Math.round(kalanToplam(d) * 10) / 10);
}

function sprintBaslat(d: Durum) {
  d.asama = "planning";
  d.gun = 0;
  d.olay = null;
  d.hedef = null;
  d.ogeler = [];
  d.kalan = {};
  d.burndown = [];
  d.ekIs = 0;
  d.gorulenOlaylar = [];
}

function review(d: Durum, s: Senaryo) {
  const hedefler = hedefOgeleri(d, s);
  const hedefTuttu = !!d.hedef && hedefler.length > 0 && hedefler.every((o) => bittiMi(d, o.id));
  const biten = d.ogeler.filter((o) => bittiMi(d, o.id));
  const donen = d.ogeler.filter((o) => !bittiMi(d, o.id));
  const deger = biten.reduce((t, o) => t + o.deger, 0);
  const puan = biten.reduce((t, o) => t + o.puan, 0);
  const sp = secilenPuan(d);
  d.g.guven = sinirla(d.g.guven + (hedefTuttu ? 8 : -8) + Math.min(4, Math.round(deger / 6)));
  // Sürekli aşırı yükleme: bitmeyen iş ve fazla mesai moral bozar
  if (sp > tahminiHiz(d, s) * 1.25 && donen.length) d.g.moral = sinirla(d.g.moral - 8);
  // DONE olmayan iş Increment'e girmez ve Product Backlog'a döner
  d.backlog.unshift(...donen.map((o) => ({ ...o, puan: Math.ceil(d.kalan[o.id]!) })));
  const geriBildirim = s.geriBildirim[d.sprint] ?? [];
  for (const gb of geriBildirim) if (gb.oge && !d.backlog.some((o) => o.id === gb.oge!.id)) d.backlog.splice(Math.min(2, d.backlog.length), 0, { ...gb.oge });
  d.teslim += deger;
  d.gecmis.push({
    no: d.sprint,
    hedef: d.hedef,
    hedefTuttu,
    biten: biten.map((o) => o.id),
    donen: donen.map((o) => o.id),
    deger,
    puan,
    secilenPuan: sp,
    geriBildirim,
  });
  d.asama = "review";
  d.olay = null;
}

// ---------------- dış arayüz ----------------

export function baslat(s: Senaryo, a: Ayar = {}): Durum {
  const tohum = (a.tohum ?? 1) >>> 0;
  const d: Durum = {
    surum: 1,
    tohum,
    rng: tohum,
    rol: a.rol ?? "sm",
    sprintSayisi: a.sprintSayisi ?? 4,
    sabitOlaylar: a.sabitOlaylar ?? {},
    rastgeleOlay: a.rastgeleOlay ?? true,
    sprint: 1,
    asama: "planning",
    gun: 0,
    olay: null,
    backlog: s.backlog.map((o) => ({ ...o })),
    g: { ...s.baslangic },
    ayarlar: { ...s.ayarlar },
    hedef: null,
    ogeler: [],
    kalan: {},
    burndown: [],
    ekIs: 0,
    gorulenOlaylar: [],
    gecmis: [],
    kayit: [],
    iyilestirmeler: [],
    teslim: 0,
    mesaj: null,
  };
  return d;
}

export function adim(onceki: Durum, h: Hamle, s: Senaryo): Durum {
  const d: Durum = structuredClone(onceki);
  d.mesaj = null;
  const hata = (m: string) => ({ ...onceki, mesaj: m });
  switch (h.tur) {
    case "hedef":
      if (d.asama !== "planning") return hata("Sprint Goal yalnızca Sprint Planning'de seçilir.");
      if (!s.hedefler.some((x) => x.id === h.id)) return hata("Böyle bir hedef yok.");
      d.hedef = h.id;
      return d;
    case "sec": {
      if (d.asama !== "planning") return hata("Öğeler Sprint Planning'de seçilir.");
      const o = d.backlog.find((x) => x.id === h.id);
      if (!o) return hata("Bu öğe Product Backlog'da yok.");
      d.backlog = d.backlog.filter((x) => x.id !== h.id);
      d.ogeler.push(o);
      d.kalan[o.id] = o.puan;
      return d;
    }
    case "birak": {
      if (d.asama !== "planning") return hata("Planning bittikten sonra kapsam Product Owner ile görüşülerek değişir.");
      const o = d.ogeler.find((x) => x.id === h.id);
      if (!o) return hata("Bu öğe Sprint Backlog'da yok.");
      d.ogeler = d.ogeler.filter((x) => x.id !== h.id);
      delete d.kalan[o.id];
      d.backlog.unshift(o);
      return d;
    }
    case "planlaBitir":
      if (d.asama !== "planning") return hata("Sprint zaten başladı.");
      if (!d.hedef) return hata("Önce bir Sprint Goal seç: Sprint Planning'in ilk konusu bu Sprint'in neden değerli olduğudur.");
      if (!d.ogeler.length) return hata("Sprint Backlog boş: Product Backlog'dan öğe seç.");
      if (!hedefOgeleri(d, s).length) return hata("Seçtiğin öğelerin hiçbiri Sprint Goal'e katkı vermiyor. Hedefe uyan öğeler seç ya da hedefi değiştir.");
      d.asama = "gun";
      d.gun = 1;
      d.burndown = [secilenPuan(d)];
      d.olay = olayCek(d, s);
      if (d.olay) d.gorulenOlaylar.push(d.olay);
      return d;
    case "olay":
    case "ilerle": {
      if (d.asama !== "gun") return hata("Sprint günleri bitti.");
      if (h.tur === "ilerle" && d.olay) return hata("Önce bugünkü olaya karşılık ver.");
      if (h.tur === "olay") {
        const olay = s.olaylar.find((o) => o.id === d.olay);
        const sec = olay?.secenekler[h.secim];
        if (!olay || !sec) return hata("Bugün karşılık verilecek bir olay yok.");
        etkiUygula(d, sec.etki, s);
        d.kayit.push({ sprint: d.sprint, gun: d.gun, olay: olay.id, secim: h.secim, uyum: sec.uyum });
      }
      gunCalis(d, s);
      if (d.gun >= s.gunSayisi || kalanToplam(d) <= 1e-9) {
        // İş erken biterse kalan günler boş geçer (burndown sıfırda kalır)
        while (d.burndown.length <= s.gunSayisi) d.burndown.push(0);
        review(d, s);
        return d;
      }
      d.gun += 1;
      d.olay = olayCek(d, s);
      if (d.olay) d.gorulenOlaylar.push(d.olay);
      return d;
    }
    case "reviewBitir":
      if (d.asama !== "review") return hata("Sprint Review henüz gelmedi.");
      d.asama = "retro";
      return d;
    case "iyilestir": {
      if (d.asama !== "retro") return hata("İyileştirme Sprint Retrospective'te seçilir.");
      const iy = s.iyilestirmeler.find((x) => x.id === h.id);
      if (!iy) return hata("Böyle bir iyileştirme yok.");
      etkiUygula(d, iy.etki, s);
      Object.assign(d.ayarlar, iy.ayar ?? {});
      d.iyilestirmeler.push(iy.id);
      // Sprint'ler arasında takım biraz dinlenir; borç payı varsa borç azalır
      d.g.moral = sinirla(d.g.moral + 3);
      if (d.ayarlar.borcPayi) d.g.borc = sinirla(d.g.borc - 8);
      if (d.sprint >= d.sprintSayisi) {
        d.asama = "bitti";
        return d;
      }
      d.sprint += 1;
      sprintBaslat(d);
      return d;
    }
  }
}

export interface Karne {
  teslim: number;
  hedefSayisi: number;
  sprintSayisi: number;
  uygun: number;
  aykiri: number;
  notr: number;
  g: Gostergeler;
  // 0-100 arası özet puan
  puan: number;
}

export function karne(d: Durum): Karne {
  const say = (u: Uyum) => d.kayit.filter((k) => k.uyum === u).length;
  const hedefSayisi = d.gecmis.filter((x) => x.hedefTuttu).length;
  const n = Math.max(1, d.gecmis.length);
  const kararlar = Math.max(1, d.kayit.length);
  const puan = Math.round(
    30 * (hedefSayisi / n) + 25 * (say("uygun") / kararlar) + 15 * (d.g.moral / 100) + 15 * (d.g.guven / 100) + 15 * (1 - d.g.borc / 100),
  );
  return { teslim: d.teslim, hedefSayisi, sprintSayisi: d.gecmis.length, uygun: say("uygun"), aykiri: say("aykiri"), notr: say("notr"), g: d.g, puan };
}

// Görevlerin ve testlerin kullandığı örnek oyuncu: verilen hedefi ve öğeleri seçer, her
// olayda Rehber'e uygun ilk seçeneği alır, Retro'da verilen iyileştirmeyi seçer. Hedef ve
// öğeler verilmezse (ya da tükenirse) öğesi kalan ilk hedefi seçer ve tahmini hızın
// yaklaşık %85'i kadar iş alır, önce hedefe katkı verenleri.
export function ornekOyuncu(p: { hedef?: string; sec?: string[]; iyilestirme: string }, s: Senaryo): (d: Durum) => Hamle {
  return (d) => {
    if (d.asama === "planning") {
      const verilen = (p.sec ?? []).filter((id) => d.backlog.some((o) => o.id === id));
      const elle = d.sprint === 1 && p.hedef && p.sec;
      const hedef = elle ? p.hedef! : s.hedefler.find((h) => d.backlog.some((o) => h.etiketler.includes(o.etiket)))!.id;
      if (d.hedef !== hedef) return { tur: "hedef", id: hedef };
      if (elle) return verilen.length ? { tur: "sec", id: verilen[0]! } : { tur: "planlaBitir" };
      const h = s.hedefler.find((x) => x.id === hedef)!;
      const sinir = tahminiHiz(d, s) * 0.85;
      const sirali = [...d.backlog.filter((o) => h.etiketler.includes(o.etiket)), ...d.backlog.filter((o) => !h.etiketler.includes(o.etiket))];
      const aday = sirali.find((o) => secilenPuan(d) + o.puan <= sinir);
      return aday ? { tur: "sec", id: aday.id } : d.ogeler.length ? { tur: "planlaBitir" } : { tur: "sec", id: sirali[0]!.id };
    }
    if (d.asama === "gun") {
      if (!d.olay) return { tur: "ilerle" };
      const o = s.olaylar.find((x) => x.id === d.olay)!;
      return { tur: "olay", secim: Math.max(0, o.secenekler.findIndex((x) => x.uyum === "uygun")) };
    }
    if (d.asama === "review") return { tur: "reviewBitir" };
    return { tur: "iyilestir", id: p.iyilestirme };
  };
}

export function oyna(d: Durum, s: Senaryo, oyuncu: (d: Durum) => Hamle, sinir = 500): Durum {
  for (let i = 0; i < sinir && d.asama !== "bitti"; i++) {
    const y = adim(d, oyuncu(d), s);
    if (y.mesaj) throw new Error(y.mesaj);
    d = y;
  }
  return d;
}
