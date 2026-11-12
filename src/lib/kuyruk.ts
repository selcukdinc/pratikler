// Cevapların tarayıcıda değerlendirilmesi ve sunucuya toplu gönderilmesi.
//
// Eskiden her cevap sunucuya ayrı bir istekti. Artık cevap anahtarı soru listesiyle
// (perdelenmiş olarak) gelir: cevap burada puanlanır, sonuç anında gösterilir ve cevap
// bir kuyruğa girer. Kuyruk ESIK cevapta, BEKLEME_MS sonra, sayfa değişirken (api.ts) ya da
// sekme kapanırken tek istekte gönderilir; sunucu cevapları kendi anahtarıyla yeniden
// puanlayıp kaydeder. Kuyruk localStorage'da durur: sekme kapansa da cevap kaybolmaz,
// bir sonraki ziyarette gönderilir.

import { TOPLU_CEVAP_SINIRI, type AnswerResult, type KuyrukCevabi, type Question, type SoruDurumlari, type SoruIstatistigi, type TopluCevapSonucu } from "../../shared/api";
import { boslukSonuclari, grade, type Answer } from "../../shared/grade";
import type { GunlukDurum } from "../../shared/motivasyon";
import { perdeAc } from "../../shared/perde";

export const ESIK = 10;
export const BEKLEME_MS = 90_000;

// dogru yalnızca burada kullanılır (bekleyen cevapların durumu); sunucu kendi puanlar
type Bekleyen = KuyrukCevabi & { dogru: boolean };

// "tamam": kaydedildi; "red": sunucu listeyi kabul etmedi (yeniden denemek boşuna);
// "hata": ulaşılamadı, sonra yeniden denenir
export type GonderimSonucu = { durum: "tamam"; sonuc: TopluCevapSonucu } | { durum: "red" } | { durum: "hata" };

interface Kurulum {
  // localStorage anahtarı; pratik başına ayrı kuyruk
  anahtar: string;
  gonder: (cevaplar: KuyrukCevabi[], kapanirken: boolean) => Promise<GonderimSonucu>;
  // Gönderimden sonra sunucunun bildirdiği tekrar sayısı
  tekrarSayisi?: (n: number) => void;
}

let kurulum: Kurulum | null = null;
// Depolama kapalıysa (gizli sekme, kota) kuyruk yalnızca bellekte durur
let bellek: Bekleyen[] = [];
let zamanlayici: ReturnType<typeof setTimeout> | null = null;
let sira: Promise<void> = Promise.resolve();

// Kişinin sorulardaki durumu ve bugünkü doğru sayısı: açılışta sunucudan gelir,
// cevap verdikçe burada güncellenir
let durumlar: SoruDurumlari = {};
let gunluk: GunlukDurum | null = null;
let gunlukGunu = 0;

const GUN_MS = 86_400_000;
const TR_FARK = 3 * 3_600_000;
// Türkiye saatine göre günün başlangıcı (sunucudaki bugunBasi ile aynı)
const gunBasi = (an: number) => Math.floor((an + TR_FARK) / GUN_MS) * GUN_MS - TR_FARK;

function oku(): Bekleyen[] {
  if (!kurulum) return bellek;
  try {
    const l = JSON.parse(localStorage.getItem(kurulum.anahtar) ?? "[]") as unknown;
    return Array.isArray(l) ? (l as Bekleyen[]).filter((x) => x && typeof x.id === "string" && typeof x.at === "number") : [];
  } catch {
    return bellek;
  }
}

function yaz(l: Bekleyen[]) {
  bellek = l;
  try {
    if (!kurulum) return;
    if (l.length) localStorage.setItem(kurulum.anahtar, JSON.stringify(l));
    else localStorage.removeItem(kurulum.anahtar);
  } catch {
    // depolama kapalı: kuyruk bu sayfa açık kaldıkça bellekte
  }
}

export function kuyruguKur(k: Kurulum) {
  kurulum = k;
  if (oku().length) zamanla();
}

export const bekleyenSayisi = () => oku().length;

// Açılışta sunucudan gelen durumlar; henüz gönderilmemiş cevaplar üstüne işlenir
export function durumlariKur(d: SoruDurumlari, g: GunlukDurum | null) {
  durumlar = { ...d };
  const bekleyen = oku();
  for (const b of bekleyen) durumIsle(b.id, b.dogru);
  const bugun = gunBasi(Date.now());
  gunlukGunu = bugun;
  gunluk = g && { hedef: g.hedef, dogru: g.dogru + bekleyen.filter((b) => b.dogru && b.at >= bugun).length };
}

export const yerelDurumlar = (): SoruDurumlari => ({ ...durumlar });

export function hedefDegisti(hedef: number) {
  if (gunluk) gunluk = { ...gunluk, hedef };
}

// Sunucunun bildirdiği günlük durum (kod sorularında ve gönderimden sonra)
export function gunlukEsitle(g: GunlukDurum | undefined) {
  if (!g) return;
  gunlukGunu = gunBasi(Date.now());
  gunluk = { ...g };
}

// Sunucuda puanlanan cevaplar (kod soruları) da buradan işlenir
export function durumIsle(id: string, dogru: boolean) {
  durumlar[id] = dogru || durumlar[id] === "dogru" ? "dogru" : "yanlis";
}

// Sorunun cevabını burada değerlendirir ve kuyruğa ekler. Soru cevap anahtarı
// taşımıyorsa (kod sorusu ya da eski sunucu) null döner; çağıran sunucuya sorar.
export function yerelCevapla(q: Question, answer: Answer): AnswerResult | null {
  if (!q.cozum) return null;
  let anahtar: { a: Parameters<typeof grade>[1]; e: string | null };
  try {
    anahtar = JSON.parse(perdeAc(q.id, q.cozum)) as typeof anahtar;
  } catch {
    return null;
  }
  const correct = grade(q.type, anahtar.a, answer);
  const sonuc: AnswerResult = { correct, explanation: anahtar.e };
  if (q.type === "fill" || q.type === "num") sonuc.bosluklar = boslukSonuclari(anahtar.a, answer, q.type) ?? undefined;

  // Toplamlar herkesin ilk denemesini sayar: bu kişinin ilk denemesiyse kendi cevabı eklenir.
  // Sayı sorunun üstüne yazılır ki aynı soru yeniden gösterildiğinde tutarlı kalsın.
  if (q.ist) {
    if (durumlar[q.id] === undefined) q.ist = kendiCevabiniEkle(q.ist, correct, answer);
    sonuc.istatistik = q.ist;
  }
  durumIsle(q.id, correct);

  const simdi = Date.now();
  if (correct && gunluk) {
    if (gunBasi(simdi) !== gunlukGunu) {
      gunlukGunu = gunBasi(simdi);
      gunluk = { ...gunluk, dogru: 0 };
    }
    gunluk = { ...gunluk, dogru: gunluk.dogru + 1 };
    sonuc.gunluk = gunluk;
  }

  const l = oku();
  l.push({ id: q.id, answer, at: simdi, dogru: correct });
  yaz(l);
  if (l.length >= ESIK) void kuyruguGonder();
  else zamanla();
  return sonuc;
}

export function kendiCevabiniEkle(ist: SoruIstatistigi, dogru: boolean, answer: Answer): SoruIstatistigi {
  const yeni: SoruIstatistigi = { kisi: ist.kisi + 1, ilkDogru: ist.ilkDogru + (dogru ? 1 : 0) };
  if (ist.siklar) {
    const i = "index" in answer ? answer.index : -1;
    yeni.siklar = ist.siklar.map((n, j) => n + (j === i ? 1 : 0));
  }
  return yeni;
}

// Yazma sorusunun örnek çözümü (soruyla birlikte gelen açıklama)
export function yerelCozum(q: Question): string | null {
  if (!q.cozum) return null;
  try {
    return (JSON.parse(perdeAc(q.id, q.cozum)) as { e: string | null }).e ?? "";
  } catch {
    return null;
  }
}

function zamanla() {
  if (zamanlayici !== null || typeof setTimeout === "undefined") return;
  zamanlayici = setTimeout(() => {
    zamanlayici = null;
    void kuyruguGonder();
  }, BEKLEME_MS);
}

// Aynı anda birden çok sekme aynı kuyruğu göndermesin
async function kilitle(is: () => Promise<void>): Promise<void> {
  const kilitler = typeof navigator !== "undefined" ? navigator.locks : undefined;
  if (kilitler && kurulum) await kilitler.request(`kilit:${kurulum.anahtar}`, is);
  else await is();
}

async function gonder(kapanirken: boolean) {
  if (!kurulum) return;
  for (;;) {
    const l = oku();
    if (l.length === 0) return;
    const parti = l.slice(0, TOPLU_CEVAP_SINIRI);
    const r = await kurulum.gonder(parti.map(({ id, answer, at }) => ({ id, answer, at })), kapanirken);
    if (r.durum === "hata") {
      zamanla();
      return;
    }
    // Gönderilenler kuyruktan çıkar; bu sırada eklenen yeni cevaplar kalır
    const giden = new Set(parti.map((x) => `${x.id}:${x.at}`));
    const kalan = oku().filter((x) => !giden.has(`${x.id}:${x.at}`));
    yaz(kalan);
    if (r.durum === "tamam") {
      // Sunucunun sayısı kesindir; bekleyen cevap kalmadıysa yereldeki ona eşitlenir
      if (kalan.length === 0) gunlukEsitle(r.sonuc.gunluk);
      kurulum.tekrarSayisi?.(r.sonuc.tekrarSayisi);
    }
  }
}

// Bekleyen cevapları gönderir; gönderim bitince çözülür. İlerleme, tekrar gibi
// sunucudaki denemelere bakan istekler önce bunu bekler.
export function kuyruguGonder(kapanirken = false): Promise<void> {
  if (zamanlayici !== null) {
    clearTimeout(zamanlayici);
    zamanlayici = null;
  }
  if (oku().length === 0) return sira;
  sira = sira.then(() => kilitle(() => gonder(kapanirken))).catch(() => {});
  return sira;
}

// Sekme arka plana geçince ya da kapanırken bekleyenler gönderilir
export function kapanisiDinle() {
  if (typeof document === "undefined") return;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") void kuyruguGonder(true);
  });
  window.addEventListener("pagehide", () => void kuyruguGonder(true));
}

// Testler için
export function sifirla() {
  kurulum = null;
  bellek = [];
  durumlar = {};
  gunluk = null;
  if (zamanlayici !== null) clearTimeout(zamanlayici);
  zamanlayici = null;
  sira = Promise.resolve();
}
