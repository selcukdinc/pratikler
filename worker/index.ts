import { Hono, type Context } from "hono";
import { boslukSonuclari, type Answer } from "../shared/grade";
import {
  TOPLU_CEVAP_SINIRI,
  type AnswerResult, type Baslangic, type IlerlemeAyrintisi, type KuyrukCevabi, type Profil, type ProfilSon, type Question, type SoruDurumlari,
  type Topic, type TopicProgress, type TopluCevapSonucu,
} from "../shared/api";
import { ensureGuest, loadMe, type Env } from "./session";
import { hesap } from "./hesap";
import { epostaAcik } from "./eposta";
import { yonetim } from "./yonetim";
import { sosyal } from "./sosyal";
import { gunlukSecimi, tekrar, tekrarIsle, tekrarSayisi } from "./tekrar";
import { cevaplariKaydet, denemeEkle, denenenler, gunlukDurum, sayacArtir, yayindakiSorular, type SoruSatiri } from "./cevaplar";
import { okunmamisSayilari } from "./sosyal";
import { DAKIKA, SAAT, sinirAsildi } from "./sinir";
import { COZUMLU_SUTUNLAR, GUN_MS, TR_FARK, bugunBasi, cozumluSoru, currentWeek, gorunurKosul, havuzKosulu, istatistikCoz, pratikKosulu, setting, showOriginal, type CozumluSatir } from "./ortak";
import { pid, pratikAyarla, pratikGerekli } from "./pratik";
import { katalog } from "./katalog";
import { sinav } from "./sinav";
import { havuz, havuzAyarla } from "./havuz";
import { ajan } from "./claude";
import { IZ_SINIRI, TB_ADI, testbenchUret, type KodBilgisi, type KodSonucu, type Sinama, type Vektor } from "../shared/kod";
import { MODELLER, degerlendir, vektorUret } from "./modeller";
import { gunlukGecerli } from "../shared/tekrar";
import { ALEV, VARSAYILAN_HEDEF, seriler, type GunlukDurum } from "../shared/motivasyon";

const app = new Hono<Env>().basePath("/api");

// Durum değiştiren isteklerde başka bir siteden gelen formlar reddedilir (CSRF).
// Tarayıcılar fetch POST isteklerinde Origin başlığını her zaman gönderir.
app.use("*", async (c, next) => {
  if (c.req.method !== "GET" && c.req.method !== "HEAD") {
    const origin = c.req.header("Origin");
    if (origin && origin !== new URL(c.req.url).origin) return c.json({ error: "izin verilmeyen kaynak" }, 403);
  }
  await next();
});

// Pratik önce belirlenir: oturumdaki kişinin günlük hedefi o pratiğe göre yüklenir
app.use("*", pratikAyarla);
app.use("*", async (c, next) => {
  c.set("me", await loadMe(c));
  await next();
});
app.use("*", havuzAyarla);

// Çatı uçları (her alan adında çalışır): katalog ve bütün pratiklerdeki ilerleme
app.route("/katalog", katalog);
// Yerel ajan (Faz 2): AJAN_TOKEN ile korunur, oturum ve pratik gerektirmez
app.route("/ajan", ajan);

// Bundan sonraki uçlar bir pratiğe aittir; hesap uçları ortaktır
// Hesap, mesajlar, kullanıcılar, işlem kaydı, pratikler tablosu ve Claude/ajan uçları
// çatı adresinde de çalışır; soru, ilerleme, öneri ve pratik ayarları pratik ister.
const PRATIGE_OZGU = [
  "/topics", "/questions", "/questions/*", "/cevaplar", "/sinama/*", "/progress", "/progress/*", "/profil/*", "/tekrar", "/tekrar/*",
  "/uye/oneriler", "/uye/oneriler/*", "/hesap/ayarlar/ders-ilerleme",
  "/yonetim/ozet", "/yonetim/pano", "/yonetim/ayarlar", "/yonetim/konular", "/yonetim/sorular", "/yonetim/sorular/*",
  "/yonetim/oneriler", "/yonetim/oneriler/*", "/sinavlar", "/sinavlar/*", "/havuzlar", "/havuzlar/*",
];
for (const yol of PRATIGE_OZGU) {
  app.use(yol, pratikGerekli);
}

app.route("/hesap", hesap);
app.route("/yonetim", yonetim);
app.route("/uye", sosyal);
app.route("/tekrar", tekrar);
app.route("/sinavlar", sinav);
app.route("/havuzlar", havuz);

app.get("/me", (c) => {
  const me = c.get("me");
  return c.json(me ? { ...me, epostaAcik: epostaAcik(c.env) } : { epostaAcik: epostaAcik(c.env) });
});

type KonuCevabi = { currentWeek: number; topics: Topic[]; announcement: string | null };

async function konular(c: Context<Env>): Promise<KonuCevabi> {
  const kod = c.get("havuz");
  if (kod) {
    // Havuzda yalnızca havuz sorularının konuları; ünite sınırı yok
    const { results } = await c.env.DB.prepare(
      `SELECT t.id, t.title, t.week FROM topics t WHERE ${pratikKosulu(pid(c), "t")}
       AND EXISTS (SELECT 1 FROM questions q WHERE q.topic_id = t.id AND ${havuzKosulu(kod)}) ORDER BY t.week, t.sort`,
    ).all<Topic>();
    return { currentWeek: Math.max(1, ...results.map((t) => t.week)), topics: results, announcement: null };
  }
  const week = await currentWeek(c.env.DB, pid(c));
  const { results } = await c.env.DB.prepare(
    "SELECT id, title, week FROM topics WHERE practice_id = ? AND week <= ? ORDER BY week, sort",
  )
    .bind(pid(c), week)
    .all<Topic>();
  return { currentWeek: week, topics: results, announcement: (await setting(c.env.DB, pid(c), "announcement")) || null };
}

app.get("/topics", async (c) => c.json(await konular(c)));

async function soruDurumlari(c: Context<Env>, userId: string): Promise<SoruDurumlari> {
  const { results } = await c.env.DB.prepare(
    `SELECT a.question_id AS id, MAX(a.correct) AS dogru FROM attempts a JOIN questions q ON q.id = a.question_id
     WHERE a.user_id = ? AND ${pratikKosulu(pid(c))} GROUP BY a.question_id`,
  ).bind(userId).all<{ id: string; dogru: number }>();
  return Object.fromEntries(results.map((r) => [r.id, r.dogru ? "dogru" : "yanlis"]));
}

// Sayfa açılışında gerekenlerin hepsi tek istekte: oturum, okunmamış sayıları ve pratikte
// konular, kişinin soru durumları, bugünkü tekrar sayısı ve günlük hedef durumu.
// Çatı adresinde (pratik yokken) yalnızca oturum ve okunmamışlar döner.
app.get("/baslangic", async (c) => {
  const me = c.get("me");
  const cevap: Baslangic = {
    me: me ? { ...me, epostaAcik: epostaAcik(c.env) } : { epostaAcik: epostaAcik(c.env) },
    okunmamis: me?.kind === "member" ? await okunmamisSayilari(c.env.DB, me.id) : { mesaj: 0, oneri: 0 },
  };
  if (c.get("pratik")) {
    // Üyenin günlük tekrar sınırı hesabındadır; misafirinki tarayıcıdan gelir
    const tekrarGunluk = me?.kind === "member" && gunlukGecerli(me.gunlukTekrar) ? me.gunlukTekrar : gunlukSecimi(c.req.query("gunluk"));
    const [k, durumlar, sayi, gunluk] = await Promise.all([
      konular(c),
      me ? soruDurumlari(c, me.id) : {},
      me ? tekrarSayisi(c.env.DB, pid(c), c.get("havuz"), me.id, tekrarGunluk) : 0,
      me ? gunlukDurum(c.env.DB, pid(c), me.id, me.gunlukHedef) : { dogru: 0, hedef: VARSAYILAN_HEDEF },
    ]);
    cevap.pratik = { ...k, durumlar, tekrarSayisi: sayi, tekrarGunluk, gunluk };
  }
  return c.json(cevap);
});

app.get("/questions", async (c) => {
  const kod = c.get("havuz");
  if (kod) {
    const topic = c.req.query("topic");
    const stmt = c.env.DB.prepare(
      `SELECT ${COZUMLU_SUTUNLAR}
       FROM questions q JOIN topics t ON t.id = q.topic_id LEFT JOIN users u ON u.id = q.suggested_by
       WHERE ${await gorunurKosul(c.env.DB, pid(c), kod)}${topic ? " AND q.topic_id = ?" : ""}
       ORDER BY q.week, t.sort, q.difficulty, q.rowid`,
    );
    const { results } = await (topic ? stmt.bind(topic) : stmt).all<CozumluSatir>();
    return c.json<Question[]>(results.map(cozumluSoru));
  }
  const week = await currentWeek(c.env.DB, pid(c));
  const original = await showOriginal(c.env.DB, pid(c));
  const topic = c.req.query("topic");
  // Cevap anahtarı perdelenmiş olarak gider (shared/perde.ts): cevap tarayıcıda değerlendirilir
  const sql = `SELECT ${COZUMLU_SUTUNLAR}
               FROM questions q JOIN topics t ON t.id = q.topic_id LEFT JOIN users u ON u.id = q.suggested_by
               WHERE ${pratikKosulu(pid(c))} AND q.active = 1 AND q.status = 'published' AND q.yedek = 0 AND q.week <= ?${original ? "" : " AND q.source = 'derived'"}${topic ? " AND q.topic_id = ?" : ""}
               ORDER BY q.week, t.sort, q.difficulty, q.rowid`;
  const stmt = c.env.DB.prepare(sql);
  const { results } = await (topic ? stmt.bind(week, topic) : stmt.bind(week)).all<CozumluSatir>();
  return c.json<Question[]>(results.map(cozumluSoru));
});

// Sitede görünen (yayında, gizli değil, haftası gelmiş) bir soruyu getirir
async function yayindakiSoru(c: Context<Env>, id: string): Promise<SoruSatiri | null> {
  return (await yayindakiSorular(c, [id])).sorular.get(id) ?? null;
}

// Yazma (klasik) sorusunun örnek çözümü: öğrenci cevabını yazdıktan sonra
// kendini değerlendirmek için görür. Yeni istemci çözümü soru listesinden okur.
app.get("/questions/:id/cozum", async (c) => {
  const q = await yayindakiSoru(c, c.req.param("id"));
  if (!q || q.type !== "yaz") return c.json({ error: "soru bulunamadı" }, 404);
  return c.json({ cozum: q.explanation ?? "" });
});

// Toplu cevap: tarayıcının biriktirdiği cevaplar tek istekte kaydedilir
app.post("/cevaplar", async (c) => {
  const body = await c.req.json<{ cevaplar?: unknown }>().catch(() => null);
  const liste = body?.cevaplar;
  if (!Array.isArray(liste) || liste.length === 0 || liste.length > TOPLU_CEVAP_SINIRI
    || !liste.every((x) => x && typeof x === "object" && typeof (x as KuyrukCevabi).id === "string" && (x as KuyrukCevabi).id.length <= 80)) {
    return c.json({ error: "geçersiz cevap listesi" }, 400);
  }
  const me = await ensureGuest(c);
  const islenen = await cevaplariKaydet(c, me.id, liste as KuyrukCevabi[]);
  const [gunluk, sayi] = await Promise.all([
    gunlukDurum(c.env.DB, pid(c), me.id, me.gunlukHedef),
    c.req.query("gunluk") === undefined ? 0 : tekrarSayisi(c.env.DB, pid(c), c.get("havuz"), me.id, gunlukSecimi(c.req.query("gunluk"))),
  ]);
  return c.json<TopluCevapSonucu>({ kaydedilen: islenen.length, gunluk, tekrarSayisi: sayi });
});

// Tek cevap: toplu gönderime geçmeden önce yüklenmiş (önbellekteki) istemciler için kalır
app.post("/questions/:id/answer", async (c) => {
  const body = await c.req.json<{ answer: Answer }>().catch(() => null);
  if (!body?.answer || typeof body.answer !== "object") return c.json({ error: "geçersiz cevap" }, 400);
  const id = c.req.param("id");
  const q = await yayindakiSoru(c, id);
  if (!q) return c.json({ error: "soru bulunamadı" }, 404);
  if (q.type === "code" || q.type === "wave") return c.json({ error: "bu soru tipi bu yoldan cevaplanmaz" }, 400);

  const me = await ensureGuest(c);
  const [k] = await cevaplariKaydet(c, me.id, [{ id, answer: body.answer, at: Date.now() }]);
  if (!k) return c.json({ error: "geçersiz cevap" }, 400);
  const sayac = await c.env.DB.prepare(
    "SELECT json_array(kisi, ilk_dogru, s0, s1, s2, s3, s4, s5, s6, s7) AS s FROM soru_sayaclari WHERE question_id = ?",
  ).bind(id).first<{ s: string }>();
  const result: AnswerResult = { correct: k.dogru, explanation: q.explanation, istatistik: istatistikCoz(sayac?.s ?? null, q.type, q.payload) };
  if (q.type === "fill" || q.type === "num") result.bosluklar = boslukSonuclari(JSON.parse(q.answer), k.answer, q.type) ?? undefined;
  if (k.dogru) result.gunluk = await gunlukDurum(c.env.DB, pid(c), me.id, me.gunlukHedef);
  return c.json(result);
});

// ---- Kod soruları (FPGA) ----
//
// Sunucu her denemede rastgele giriş vektörleri seçip tek kullanımlık bir sınama
// açar ve bu vektörleri içeren testbench'i döner. Tarayıcı öğrencinin tasarımını
// testbench'le NVC'de çalıştırır, yalnızca testbench'in bastığı çıkışları (iz)
// geri yollar; beklenen çıkışlar worker/modeller.ts'den hesaplanır ve istemciye gitmez.

const SINAMA_OMRU_MS = 30 * DAKIKA;

const kodModeli = (id: string, q: SoruSatiri) => {
  const bilgi = (JSON.parse(q.payload) as { kod?: KodBilgisi }).kod;
  const model = MODELLER[(JSON.parse(q.answer) as { model?: string }).model ?? id];
  return bilgi && model ? { bilgi, model } : null;
};

app.post("/questions/:id/sinama", async (c) => {
  const id = c.req.param("id");
  const q = await yayindakiSoru(c, id);
  const km = q?.type === "code" ? kodModeli(id, q) : null;
  if (!q || !km) return c.json({ error: "soru bulunamadı" }, 404);

  const me = await ensureGuest(c);
  if (await sinirAsildi(c.env.DB, `sinama:${me.id}`, 120, SAAT)) {
    return c.json({ error: "Bir saatte çok fazla deneme yaptın. Biraz ara verip tekrar dene." }, 429);
  }
  const rastgele = () => crypto.getRandomValues(new Uint32Array(1))[0]! / 2 ** 32;
  const vektorler = vektorUret(km.bilgi, km.model, rastgele);
  const tb = testbenchUret(km.bilgi, vektorler);
  const simdi = Date.now();
  const sinamaId = crypto.randomUUID();
  await c.env.DB.batch([
    c.env.DB.prepare("DELETE FROM sinamalar WHERE expires_at < ?").bind(simdi),
    c.env.DB.prepare(
      "INSERT INTO sinamalar (id, user_id, question_id, vectors, created_at, expires_at) VALUES (?, ?, ?, ?, ?, ?)",
    ).bind(sinamaId, me.id, id, JSON.stringify(vektorler), simdi, simdi + SINAMA_OMRU_MS),
  ]);
  return c.json<Sinama>({
    id: sinamaId, testbench: tb.metin, top: TB_ADI, stopTime: tb.stopTime, adet: vektorler.length, bitis: simdi + SINAMA_OMRU_MS,
  });
});

// Tarayıcıdaki benzetimin izini alır, referans modelle karşılaştırır. Sınama bir kez kullanılır.
app.post("/sinama/:id", async (c) => {
  const body = await c.req.json<{ iz?: unknown }>().catch(() => null);
  const iz = body?.iz;
  if (!Array.isArray(iz) || iz.length > IZ_SINIRI || !iz.every((x) => typeof x === "string" && x.length <= 200)) {
    return c.json({ error: "geçersiz iz" }, 400);
  }
  const me = c.get("me");
  const s = me
    ? await c.env.DB.prepare("SELECT question_id, vectors, expires_at FROM sinamalar WHERE id = ? AND user_id = ?")
        .bind(c.req.param("id"), me.id)
        .first<{ question_id: string; vectors: string; expires_at: number }>()
    : null;
  if (!me || !s || s.expires_at < Date.now()) return c.json({ error: "Bu sınama artık geçerli değil (süresi dolmuş ya da kullanılmış). Yeniden sına." }, 410);

  const q = await yayindakiSoru(c, s.question_id);
  const km = q && kodModeli(s.question_id, q);
  if (!q || !km) return c.json({ error: "soru bulunamadı" }, 404);

  const vektorler = JSON.parse(s.vectors) as Vektor[];
  const d = degerlendir(km.bilgi, km.model, vektorler, iz as string[]);
  const correct = d.gecen === d.toplam;
  const ilk = !(await denenenler(c.env.DB, me.id, [s.question_id])).has(s.question_id);
  const kayit = { gecen: d.gecen, toplam: d.toplam, ilkHata: d.ilkHata };
  await c.env.DB.batch([
    c.env.DB.prepare("DELETE FROM sinamalar WHERE id = ?").bind(c.req.param("id")),
    denemeEkle(c.env.DB, me.id, s.question_id, correct, kayit, Date.now()),
    ...(ilk ? [sayacArtir(c.env.DB, s.question_id, correct, kayit)] : []),
  ]);
  await tekrarIsle(c.env.DB, pid(c), me.id, s.question_id, correct);
  return c.json<KodSonucu>({
    correct, gecen: d.gecen, toplam: d.toplam, rapor: d.rapor, ipucu: d.ipucu,
    explanation: correct ? q.explanation : null,
    gunluk: correct ? await gunlukDurum(c.env.DB, pid(c), me.id, me.gunlukHedef) : undefined,
  });
});

// Konu bazlı ilerleme: sadece sunucudaki deneme kayıtlarından hesaplanır
export async function konuIlerlemesi(db: D1Database, pratik: string, userId: string): Promise<TopicProgress[]> {
  const week = await currentWeek(db, pratik);
  const original = await showOriginal(db, pratik);
  const { results } = await db.prepare(
    `SELECT t.id AS topicId, t.title, t.week,
            COUNT(DISTINCT q.id) AS total,
            COUNT(DISTINCT a.question_id) AS attempted,
            COUNT(DISTINCT CASE WHEN a.correct = 1 THEN a.question_id END) AS correct
     FROM topics t
     LEFT JOIN questions q ON q.topic_id = t.id AND q.active = 1 AND q.status = 'published' AND q.yedek = 0 AND q.week <= ?${original ? "" : " AND q.source = 'derived'"}
     LEFT JOIN attempts a ON a.question_id = q.id AND a.user_id = ?
     WHERE ${pratikKosulu(pratik, "t")} AND t.week <= ?
     GROUP BY t.id ORDER BY t.week, t.sort`,
  )
    .bind(week, userId, week)
    .all<TopicProgress>();
  return results;
}

app.get("/progress", async (c) => c.json(await konuIlerlemesi(c.env.DB, pid(c), c.get("me")?.id ?? "")));

app.get("/questions/durum", async (c) => {
  const me = c.get("me");
  return c.json<SoruDurumlari>(me ? await soruDurumlari(c, me.id) : {});
});

app.get("/progress/ayrinti", async (c) => {
  const me = c.get("me");
  const bugun = bugunBasi();
  const bas = bugun - 83 * GUN_MS;
  const gunler = Array.from({ length: 84 }, (_, i) => new Date(bas + i * GUN_MS + TR_FARK).toISOString().slice(0, 10));
  if (!me) {
    return c.json<IlerlemeAyrintisi>({
      takvim: gunler.map((gun) => ({ gun, deneme: 0, dogru: 0 })), yanlislar: [],
      hedef: VARSAYILAN_HEDEF, seri: { simdi: 0, enUzun: 0 }, alevGunleri: 0, hedefGunleri: 0,
    });
  }

  const db = c.env.DB;
  // Bütün günler: takvim son 84 günü, seri ve rozetler hepsini kullanır
  const [g, y] = await db.batch([
    db.prepare(
      `SELECT date((a.created_at + ?) / 1000, 'unixepoch') AS gun, COUNT(*) AS deneme, SUM(a.correct) AS dogru
       FROM attempts a JOIN questions q ON q.id = a.question_id
       WHERE a.user_id = ? AND ${pratikKosulu(pid(c))} GROUP BY gun`,
    ).bind(TR_FARK, me.id),
    db.prepare(
      `SELECT q.id, q.topic_id AS topicId, t.title AS topicTitle, q.week, q.prompt, COUNT(*) AS deneme, MAX(a.created_at) AS son
       FROM attempts a JOIN questions q ON q.id = a.question_id JOIN topics t ON t.id = q.topic_id
       WHERE a.user_id = ? AND ${await gorunurKosul(db, pid(c))} AND q.yedek = 0
       GROUP BY q.id HAVING MAX(a.correct) = 0 ORDER BY son DESC LIMIT 50`,
    ).bind(me.id),
  ]);
  const tumGunler = g!.results as { gun: string; deneme: number; dogru: number }[];
  const sayilar = new Map(tumGunler.map((r) => [r.gun, r]));
  const hedef = me.gunlukHedef;
  return c.json<IlerlemeAyrintisi>({
    takvim: gunler.map((gun) => ({ gun, deneme: sayilar.get(gun)?.deneme ?? 0, dogru: sayilar.get(gun)?.dogru ?? 0 })),
    yanlislar: (y!.results as (IlerlemeAyrintisi["yanlislar"][number] & { prompt: string })[]).map(({ prompt, ...r }) => ({
      ...r,
      ozet: ozet(prompt),
    })),
    hedef,
    seri: seriler(tumGunler.map((r) => r.gun), gunler[gunler.length - 1]!),
    alevGunleri: tumGunler.filter((r) => r.dogru >= ALEV).length,
    hedefGunleri: hedef > 0 ? tumGunler.filter((r) => r.dogru >= hedef).length : 0,
  });
});

// Sorunun ilk satırından Markdown işaretleri atılmış kısa bir özet
function ozet(prompt: string): string {
  const satir = prompt.replace(/```[\s\S]*?```/g, " ").replace(/[`*_#>]/g, "").replace(/\s+/g, " ").trim();
  return satir.length > 90 ? `${satir.slice(0, 89)}…` : satir;
}

app.get("/profil/:ad", async (c) => {
  const ad = c.req.param("ad").toLowerCase();
  const u = await c.env.DB.prepare(
    "SELECT id, username, avatar, avatar_bg, public_profile, created_at FROM users WHERE username = ? AND kind = 'member'",
  )
    .bind(ad)
    .first<{ id: string; username: string; avatar: string | null; avatar_bg: string | null; public_profile: number; created_at: number }>();
  if (!u) return c.json({ error: "böyle bir kullanıcı yok" }, 404);

  const kendisi = c.get("me")?.id === u.id;
  if (!u.public_profile && !kendisi) return c.json<Profil>({ gizli: true, username: u.username });

  const original = await showOriginal(c.env.DB, pid(c));
  const { results } = await c.env.DB.prepare(
    `SELECT q.id AS questionId, t.title AS topicTitle, q.week, q.prompt, MAX(a.created_at) AS at
     FROM attempts a JOIN questions q ON q.id = a.question_id JOIN topics t ON t.id = q.topic_id
     WHERE a.user_id = ? AND a.correct = 1 AND ${pratikKosulu(pid(c))} AND q.active = 1 AND q.status = 'published'${original ? "" : " AND q.source = 'derived'"}
     GROUP BY q.id ORDER BY at DESC LIMIT 10`,
  )
    .bind(u.id)
    .all<ProfilSon>();

  return c.json<Profil>({
    gizli: false,
    username: u.username,
    avatar: u.avatar,
    avatarBg: u.avatar_bg,
    joinedAt: u.created_at,
    publicProfile: u.public_profile === 1,
    kendisi,
    konular: await konuIlerlemesi(c.env.DB, pid(c), u.id),
    son: results.map((r) => ({ ...r, prompt: ozet(r.prompt) })),
  });
});

export default app;
