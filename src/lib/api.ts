import type { AnswerResult, ApiHata, Baslangic, IlerlemeAyrintisi, KuyrukCevabi, Me, Profil, Question, SoruDurumlari, Topic, TopicProgress, TopluCevapSonucu } from "../../shared/api";
import type { DersIlerleme } from "../../shared/dersIlerleme";
import type { DuzenAlaniAdi, KayitliDuzen } from "../../shared/duzen";
import type { Answer } from "../../shared/grade";
import type { KodSonucu, Sinama } from "../../shared/kod";
import type { Okunmamis, Oneri, OneriGirdi, PanelOneri, Yazisma, YazismaOzeti } from "../../shared/sosyal";
import type { AjanDurumu, ClaudeIsi, ClaudeIsGunlugu, YeniPratikGirdi, PanelPratik, PanelAyarlar, PanelKayit, PanelKullanici, PanelOzet, PanelPano, PanelSoru, SoruGirdi } from "../../shared/yonetim";
import { kutlamaBildir } from "./kutlama";
import type { TekrarCevabi } from "../../shared/tekrar";
import type { KatalogPratik, PratikIlerlemesi } from "../../shared/api";
import { PRATIK_YA_DA_KATALOG } from "./pratik";
import type { HavuzBilgisi, HavuzOzeti, Sinav, SinavBelgesi, SinavOzeti, SinavSorusu } from "../../shared/sinav";
import { havuzBasligi } from "./havuz";
import {
  durumlariKur, gunlukEsitle, hedefDegisti, kapanisiDinle, kuyruguGonder, kuyruguKur, yerelCevapla, yerelCozum, yerelDurumlar,
  type GonderimSonucu,
} from "./kuyruk";
import { GUNLUK_TEKRAR, gunlukGecerli } from "../../shared/tekrar";

// Canlıda pratik alan adından anlaşılır; yerelde ve workers.dev'de bu başlıkla bildirilir
// Öğrenci bir soru havuzundaysa X-Havuz başlığı da eklenir (src/lib/havuz.ts)
const PRATIK_BASLIGI: Record<string, string> = { ...(PRATIK_YA_DA_KATALOG ? { "X-Pratik": PRATIK_YA_DA_KATALOG.id } : {}), ...havuzBasligi() };

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`/api${path}`, { credentials: "same-origin", headers: PRATIK_BASLIGI });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return res.json() as Promise<T>;
}

// Form istekleri: hata da bir sonuç olarak döner, böylece alanın altında gösterilebilir
export type Sonuc<T> = { ok: true; data: T } | { ok: false; hata: ApiHata };

async function post<T>(path: string, body: unknown = {}, method = "POST"): Promise<Sonuc<T>> {
  try {
    const res = await fetch(`/api${path}`, {
      method,
      credentials: "same-origin",
      headers: { "Content-Type": "application/json", ...PRATIK_BASLIGI },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => null);
    if (res.ok) return { ok: true, data: data as T };
    return { ok: false, hata: data?.error ? (data as ApiHata) : { error: `Sunucu hatası (${res.status})` } };
  } catch {
    return { ok: false, hata: { error: "Sunucuya ulaşılamadı. Bağlantını kontrol et." } };
  }
}

export type MeYaniti = (Me & { epostaAcik: boolean }) | { epostaAcik: boolean; id?: undefined };
type Kod = { id: string; tekrarSaniye: number };

// ---- İstek tasarrufu ----
//
// Cloudflare'in günlük istek sınırını yalnızca /api çağrıları harcar (site dosyaları
// sayılmaz). Bu yüzden: açılışta gerekenler tek istekte gelir (/baslangic), soru listesi
// sayfalar arasında bellekte tutulur, cevaplar tarayıcıda değerlendirilip toplu gönderilir
// (kuyruk.ts) ve menüdeki sayılar her sayfa değişiminde yeniden sorulmaz.

const PRATIK_ID = PRATIK_YA_DA_KATALOG?.id ?? null;

// Misafirin bu tarayıcıdaki günlük tekrar sınırı (tekrarAyar.ts ile aynı anahtar)
function yerelGunlukTekrar(): number {
  try {
    const d = localStorage.getItem("pratik:gunluk-tekrar");
    return d !== null && gunlukGecerli(Number(d)) ? Number(d) : GUNLUK_TEKRAR;
  } catch {
    return GUNLUK_TEKRAR;
  }
}

let bas: Promise<Baslangic> | null = null;
// Açılış paketi bu kadar süre taze sayılır; sonraki api.me() (oturumu yenile) paketi tazeler
let basAn = 0;
const BASLANGIC_OMRU_MS = 10_000;
let tekrar: { gunluk: number; n: number; kirli: boolean } | null = null;
let okunmamis: { deger: Okunmamis; an: number } | null = null;
const OKUNMAMIS_OMRU_MS = 5 * 60_000;

function baslangic(): Promise<Baslangic> {
  if (!bas) basAn = Date.now();
  bas ??= get<Baslangic>(`/baslangic${PRATIK_ID ? `?gunluk=${yerelGunlukTekrar()}` : ""}`).then((b) => {
    okunmamis = { deger: b.okunmamis, an: Date.now() };
    if (b.pratik) {
      durumlariKur(b.pratik.durumlar, b.pratik.gunluk);
      tekrar = { gunluk: b.pratik.tekrarGunluk, n: b.pratik.tekrarSayisi, kirli: false };
    }
    return b;
  });
  bas.catch(() => (bas = null));
  return bas;
}

// Oturum değişince (giriş, çıkış, hesap silme) kişiye özel her şey yeniden alınır
function oturumDegisti() {
  bas = null;
  tekrar = null;
  okunmamis = null;
}

// Soru listesi: pratiğin bütün görünen soruları bir kez alınır, konu süzgeci burada uygulanır
let sorular: { liste: Promise<Question[]>; an: number } | null = null;
const SORU_OMRU_MS = 10 * 60_000;

function tumSorular(): Promise<Question[]> {
  if (!sorular || Date.now() - sorular.an > SORU_OMRU_MS) {
    const liste = get<Question[]>("/questions");
    sorular = { liste, an: Date.now() };
    liste.catch(() => sorular?.liste === liste && (sorular = null));
  }
  return sorular.liste;
}

async function cevaplariGonder(cevaplar: KuyrukCevabi[], kapanirken: boolean): Promise<GonderimSonucu> {
  try {
    const govde = JSON.stringify({ cevaplar });
    const res = await fetch(`/api/cevaplar?gunluk=${tekrar?.gunluk ?? yerelGunlukTekrar()}`, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json", ...PRATIK_BASLIGI },
      body: govde,
      // Sekme kapanırken istek yarıda kalmasın (tarayıcı sınırı 64 KB)
      keepalive: kapanirken && govde.length < 60_000,
    });
    if (res.ok) return { durum: "tamam", sonuc: (await res.json()) as TopluCevapSonucu };
    return res.status >= 400 && res.status < 500 && res.status !== 429 ? { durum: "red" } : { durum: "hata" };
  } catch {
    return { durum: "hata" };
  }
}

if (PRATIK_ID) {
  kuyruguKur({
    anahtar: `pratik:${PRATIK_ID}:cevap-kuyrugu`,
    gonder: cevaplariGonder,
    tekrarSayisi: (n) => {
      if (tekrar) tekrar = { ...tekrar, n, kirli: false };
    },
  });
  kapanisiDinle();
}

// Oturumu değiştiren istekler: önce bekleyen cevaplar eski oturumla gönderilir (misafirin
// denemeleri girişte hesaba aktarılır), sonra kişiye özel bellek boşaltılır
async function oturumIstegi<T>(path: string, body: unknown = {}): Promise<Sonuc<T>> {
  await kuyruguGonder();
  const r = await post<T>(path, body);
  if (r.ok) oturumDegisti();
  return r;
}

// Sunucudaki denemelere bakan istekler: önce bekleyen cevaplar gönderilir
async function guncelGet<T>(path: string): Promise<T> {
  await kuyruguGonder();
  return get<T>(path);
}

export const api = {
  async me(): Promise<MeYaniti> {
    if (bas && Date.now() - basAn > BASLANGIC_OMRU_MS) oturumDegisti();
    return (await baslangic()).me;
  },
  katalog: () => get<KatalogPratik[]>("/katalog"),
  katalogIlerleme: () => guncelGet<PratikIlerlemesi[]>("/katalog/ilerleme"),
  async topics(): Promise<{ currentWeek: number; topics: Topic[]; announcement: string | null }> {
    const p = (await baslangic()).pratik;
    if (!p) throw new Error("pratik yok");
    return { currentWeek: p.currentWeek, topics: p.topics, announcement: p.announcement };
  },
  // Yazma sorusunun örnek çözümü soruyla birlikte gelir; yoksa sunucudan istenir
  async cozum(q: Question): Promise<{ cozum: string }> {
    const yerel = yerelCozum(q);
    return yerel !== null ? { cozum: yerel } : get<{ cozum: string }>(`/questions/${encodeURIComponent(q.id)}/cozum`);
  },
  // Kod soruları (FPGA): tek kullanımlık sınama ve tarayıcıdaki benzetimin izi
  sinama: (id: string) => post<Sinama>(`/questions/${encodeURIComponent(id)}/sinama`),
  async sinamaGonder(id: string, iz: string[]) {
    const r = await post<KodSonucu>(`/sinama/${encodeURIComponent(id)}`, { iz });
    if (r.ok) {
      gunlukEsitle(r.data.gunluk);
      kutlamaBildir(r.data.gunluk);
      if (tekrar) tekrar.kirli = true;
    }
    return r;
  },
  async questions(topic?: string): Promise<Question[]> {
    const liste = await tumSorular();
    return topic ? liste.filter((q) => q.topicId === topic) : liste;
  },
  progress: () => guncelGet<TopicProgress[]>("/progress"),
  ilerlemeAyrintisi: () => guncelGet<IlerlemeAyrintisi>("/progress/ayrinti"),
  tekrar: (s: { gunluk: number; ek: number; hafta: number | null; yanlis: boolean }) =>
    guncelGet<TekrarCevabi>(`/tekrar?gunluk=${s.gunluk}&ek=${s.ek}${s.hafta ? `&hafta=${s.hafta}` : ""}${s.yanlis ? "&yanlis=1" : ""}`),
  // Menüdeki sayı her sayfa değişiminde sorulur: bekleyen cevap varsa onların gönderimi
  // sayıyı da getirir; değişiklik yoksa bellekteki sayı döner
  async tekrarSayisi(gunluk: number): Promise<{ n: number }> {
    await baslangic().catch(() => null);
    await kuyruguGonder();
    if (tekrar && tekrar.gunluk === gunluk && !tekrar.kirli) return { n: tekrar.n };
    const r = await get<{ n: number }>(`/tekrar/sayi?gunluk=${gunluk}`);
    tekrar = { gunluk, n: r.n, kirli: false };
    return r;
  },
  async tekrarBiliyorum(id: string) {
    await kuyruguGonder();
    if (tekrar) tekrar.kirli = true;
    return post<{ ok: true }>(`/tekrar/${encodeURIComponent(id)}/biliyorum`);
  },
  async tekrarSifirla() {
    await kuyruguGonder();
    if (tekrar) tekrar.kirli = true;
    return post<{ ok: true }>("/tekrar/sifirla");
  },
  // Açılışta bir kez gelir, cevap verdikçe tarayıcıda güncellenir
  async soruDurumlari(): Promise<SoruDurumlari> {
    await baslangic();
    return yerelDurumlar();
  },
  profil: (ad: string) => guncelGet<Profil>(`/profil/${encodeURIComponent(ad)}`),
  // Cevap tarayıcıda değerlendirilir ve toplu gönderilmek üzere kuyruğa girer (kuyruk.ts);
  // soru cevap anahtarı taşımıyorsa sunucuya sorulur
  async answer(q: Question, answer: Answer): Promise<AnswerResult> {
    await baslangic().catch(() => null);
    const yerel = yerelCevapla(q, answer);
    if (yerel) {
      kutlamaBildir(yerel.gunluk);
      return yerel;
    }
    const r = await post<AnswerResult>(`/questions/${encodeURIComponent(q.id)}/answer`, { answer });
    if (!r.ok) throw new Error(r.hata.error);
    gunlukEsitle(r.data.gunluk);
    kutlamaBildir(r.data.gunluk);
    return r.data;
  },
  sinav: {
    liste: () => get<SinavOzeti[]>("/sinavlar"),
    sorular: () => get<SinavSorusu[]>("/sinavlar/sorular"),
    al: (id: string) => get<Sinav>(`/sinavlar/${encodeURIComponent(id)}`),
    yeni: (kopya?: string) => post<{ id: string }>("/sinavlar", kopya ? { kopya } : {}),
    kaydet: (id: string, belge: SinavBelgesi, onceki: number) => post<{ guncellendi: number }>(`/sinavlar/${encodeURIComponent(id)}`, { belge, onceki }, "PUT"),
    sil: (id: string) => post<{ ok: true }>(`/sinavlar/${encodeURIComponent(id)}`, {}, "DELETE"),
  },
  havuz: {
    bilgi: (kod: string) => get<HavuzBilgisi>(`/havuzlar/${encodeURIComponent(kod)}`),
    liste: () => get<HavuzOzeti[]>("/havuzlar"),
    ac: (g: { ad: string; sonTarih: string | null; sorular: string[]; sinav?: string }) => post<HavuzOzeti>("/havuzlar", g),
    sil: (kod: string) => post<{ ok: true }>(`/havuzlar/${encodeURIComponent(kod)}`, {}, "DELETE"),
  },
  uye: {
    oneriler: () => get<Oneri[]>("/uye/oneriler"),
    oneriOkundu: () => (okunmamis = null, post<{ ok: true }>("/uye/oneriler/okundu")),
    oner: (g: OneriGirdi) => post<{ id: string }>("/uye/oneriler", g),
    yazismalar: () => get<YazismaOzeti[]>("/uye/yazismalar"),
    yazisma: (id: string) => (okunmamis = null, get<Yazisma>(`/uye/yazismalar/${encodeURIComponent(id)}`)),
    yeniYazisma: (subject: string, body: string) => post<{ id: string }>("/uye/yazismalar", { subject, body }),
    yaz: (id: string, body: string) => post<{ ok: true }>(`/uye/yazismalar/${encodeURIComponent(id)}`, { body }),
    // Menüdeki sayaç her sayfa değişiminde sorulur; birkaç dakika bellekten cevaplanır
    async okunmamis(): Promise<Okunmamis> {
      await baslangic().catch(() => null);
      if (okunmamis && Date.now() - okunmamis.an < OKUNMAMIS_OMRU_MS) return okunmamis.deger;
      const deger = await get<Okunmamis>("/uye/okunmamis");
      okunmamis = { deger, an: Date.now() };
      return deger;
    },
  },
  hesap: {
    adUygun: (ad: string) => get<{ uygun: boolean; sebep: string | null }>(`/hesap/kullanici-adi/${encodeURIComponent(ad)}`),
    kayit: (b: { username: string; password: string; email: string }) => post<Kod>("/hesap/kayit", b),
    kayitYeniden: (id: string) => post<{ tekrarSaniye: number }>("/hesap/kayit/yeniden", { id }),
    kayitDogrula: (id: string, kod: string) => oturumIstegi<Me>("/hesap/kayit/dogrula", { id, kod }),
    giris: (kimlik: string, parola: string) => oturumIstegi<Me>("/hesap/giris", { kimlik, parola }),
    cikis: () => oturumIstegi<{ ok: true }>("/hesap/cikis"),
    sifreIste: (kimlik: string) => post<Kod>("/hesap/sifre/iste", { kimlik }),
    sifreDogrula: (id: string, kod: string, parola: string) => oturumIstegi<Me>("/hesap/sifre/dogrula", { id, kod, parola }),
  },
  ayarlar: {
    profil: (b: { publicProfile?: boolean; avatar?: string; avatarBg?: string | null; notifyEmail?: boolean; gunlukHedef?: number }) =>
      post<Me>("/hesap/ayarlar/profil", b).then((r) => (r.ok && hedefDegisti(r.data.gunlukHedef), r)),
    parola: (mevcut: string, yeni: string) => post<{ ok: true }>("/hesap/ayarlar/parola", { mevcut, yeni }),
    kullaniciAdi: (yeni: string) => post<Me>("/hesap/ayarlar/kullanici-adi", { yeni }),
    eposta: (yeni: string, parola: string) => post<Kod>("/hesap/ayarlar/eposta", { yeni, parola }),
    epostaDogrula: (id: string, kod: string) => post<Me>("/hesap/ayarlar/eposta/dogrula", { id, kod }),
    oturumlariKapat: () => post<{ ok: true }>("/hesap/ayarlar/oturumlari-kapat"),
    hesabiSil: (parola: string) => oturumIstegi<{ ok: true }>("/hesap/ayarlar/hesabi-sil", { parola }),
    gorunum: (yaziOlcek: number | null) => post<Me>("/hesap/ayarlar/gorunum", { yaziOlcek }, "PUT"),
    gunlukTekrar: (gunlukTekrar: number | null) => post<Me>("/hesap/ayarlar/gunluk-tekrar", { gunlukTekrar }, "PUT"),
    yenilik: (pr: number) => post<{ yenilikGoruldu: number }>("/hesap/ayarlar/yenilik", { pr }, "PUT"),
    duzenler: (alan: DuzenAlaniAdi = "matstudio") => get<KayitliDuzen[]>(`/hesap/ayarlar/duzenler?alan=${alan}`),
    duzenleriKaydet: (duzenler: KayitliDuzen[], alan: DuzenAlaniAdi = "matstudio") =>
      post<KayitliDuzen[]>(`/hesap/ayarlar/duzenler?alan=${alan}`, { duzenler }, "PUT"),
    dersIlerleme: () => get<DersIlerleme>("/hesap/ayarlar/ders-ilerleme"),
    dersIlerlemeKaydet: (ilerleme: DersIlerleme) => post<DersIlerleme>("/hesap/ayarlar/ders-ilerleme", { ilerleme }, "PUT"),
  },
  yonetim: {
    ozet: () => get<PanelOzet>("/yonetim/ozet"),
    pano: () => get<PanelPano>("/yonetim/pano"),
    pratikler: () => get<PanelPratik[]>("/yonetim/pratikler"),
    claudeIsleri: () => get<ClaudeIsi[]>("/yonetim/claude"),
    claudeIsiVer: (istek: string) => post<{ id: string }>("/yonetim/claude", { istek }),
    claudePratik: (g: YeniPratikGirdi) => post<{ id: string }>("/yonetim/claude/pratik", g),
    claudeTest: () => post<{ id: string }>("/yonetim/claude/test"),
    ajan: () => get<AjanDurumu>("/yonetim/ajan"),
    claudeIptal: (id: string) => post<{ ok: true }>(`/yonetim/claude/${encodeURIComponent(id)}/iptal`),
    claudeGunluk: (id: string, sonra: number) => get<ClaudeIsGunlugu>(`/yonetim/claude/${encodeURIComponent(id)}/olaylar?sonra=${sonra}`),
    ayarlar: (b: Partial<PanelAyarlar>) => (sorular = null, post<PanelAyarlar>("/yonetim/ayarlar", b)),
    konular: () => get<Topic[]>("/yonetim/konular"),
    sorular: (f: Record<string, string>) => {
      const q = new URLSearchParams(Object.entries(f).filter(([, v]) => v)).toString();
      return get<PanelSoru[]>(`/yonetim/sorular${q ? `?${q}` : ""}`);
    },
    soru: (id: string) => get<PanelSoru>(`/yonetim/sorular/${encodeURIComponent(id)}`),
    soruEkle: (g: SoruGirdi) => (sorular = null, post<{ id: string }>("/yonetim/sorular", g)),
    soruKaydet: (id: string, g: SoruGirdi) => (sorular = null, post<{ id: string }>(`/yonetim/sorular/${encodeURIComponent(id)}`, g, "PUT")),
    soruDurum: (id: string, b: { active?: boolean; status?: "draft" | "published" }) =>
      (sorular = null, post<{ ok: true }>(`/yonetim/sorular/${encodeURIComponent(id)}/durum`, b)),
    kullanicilar: (ara: string) => get<PanelKullanici[]>(`/yonetim/kullanicilar${ara ? `?ara=${encodeURIComponent(ara)}` : ""}`),
    sustur: (id: string, gun: number) => post<{ mutedUntil: number | null }>(`/yonetim/kullanicilar/${encodeURIComponent(id)}/sustur`, { gun }),
    oneriler: (durum: string) => get<PanelOneri[]>(`/yonetim/oneriler${durum ? `?durum=${durum}` : ""}`),
    oneri: (id: string) => get<PanelOneri>(`/yonetim/oneriler/${encodeURIComponent(id)}`),
    oneriKabul: (id: string, not: string) => post<{ questionId: string | null }>(`/yonetim/oneriler/${encodeURIComponent(id)}/kabul`, { not }),
    oneriRed: (id: string, not: string) => post<{ ok: true }>(`/yonetim/oneriler/${encodeURIComponent(id)}/red`, { not }),
    yazismalar: (durum: string) => get<YazismaOzeti[]>(`/yonetim/yazismalar${durum ? `?durum=${durum}` : ""}`),
    yazisma: (id: string) => get<Yazisma>(`/yonetim/yazismalar/${encodeURIComponent(id)}`),
    cevapla: (id: string, body: string) => post<{ ok: true }>(`/yonetim/yazismalar/${encodeURIComponent(id)}`, { body }),
    yazismaDurum: (id: string, status: "open" | "closed") =>
      post<{ ok: true }>(`/yonetim/yazismalar/${encodeURIComponent(id)}/durum`, { status }),
    rol: (id: string, role: string) => post<{ ok: true }>(`/yonetim/kullanicilar/${encodeURIComponent(id)}/rol`, { role }),
    alanlar: (id: string, alanlar: string[]) => post<{ alanlar: string[] }>(`/yonetim/kullanicilar/${encodeURIComponent(id)}/alanlar`, { alanlar }, "PUT"),
    kayit: () => get<PanelKayit[]>("/yonetim/kayit"),
  },
};

export const REPO_URL = "https://github.com/selcukdinc/pratikler";
