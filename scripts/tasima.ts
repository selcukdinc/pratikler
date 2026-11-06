// Faz 3 taşıma planı: eski bir pratik sitesinin veritabanı dökümünden (wrangler
// d1 export) çatı veritabanına yazılacak SQL'i ve okunabilir bir rapor üretir.
// Komut satırı scripts/tasi.ts'tedir; burası saf hesaptır (testi tasima.test.ts).
//
// Kurallar:
// - Eski soru ve konu kimlikleri pratiğin önekini alır (kimya: "u1-x" -> "km-u1-x").
// - Üyeler e-postayla (büyük/küçük harf yok sayılarak) ya da eşleme dosyasındaki
//   satırla çatıdaki hesaba bağlanır; bağlanmayan üye yeni hesap olur. Kullanıcı adı
//   çatıda başka birindeyse sonuna sayı eklenir ve raporda yazılır.
// - Parola özetleri, oturumlar ve misafir hesaplar olduğu gibi taşınır: herkes eski
//   parolasıyla girer, açık oturumlar eski çerezle sürer (worker/session.ts ESKI_COOKIE).
// - Denemeler, aralıklı tekrar kutuları, yöneticiyle yazışmalar ve öneriler taşınır.
//   Üretilen SQL tekrar çalıştırılabilir: aynı satır ikinci kez eklenmez.
// - Eski sitede panelden değiştirilmiş sorular (updated_at dolu) çatıda da aynı
//   haliyle kalır; kaynaktan silinmiş eski sorular denemeleri korunsun diye pasif eklenir.

export type Satir = Record<string, unknown>;

export interface Tablolar {
  users: Satir[];
  sessions: Satir[];
  attempts: Satir[];
  tekrarlar: Satir[];
  threads: Satir[];
  thread_messages: Satir[];
  suggestions: Satir[];
  questions: Satir[];
  topics: Satir[];
  settings: Satir[];
}

export const TABLOLAR: (keyof Tablolar)[] = [
  "users", "sessions", "attempts", "tekrarlar", "threads", "thread_messages", "suggestions", "questions", "topics", "settings",
];

export interface TasimaAyari {
  // Çatıdaki pratik kimliği (icerik/<pratik>)
  pratik: string;
  // Soru ve konu kimliklerine eklenecek önek ("km-")
  onek: string;
  // Eski kullanıcı adı ya da e-posta -> çatıdaki kullanıcı adı ya da e-posta.
  // Aynı kişinin farklı sitelerdeki hesaplarını tek hesapta toplar.
  hesaplar?: Record<string, string>;
  // Eski "source" alanına göre etiket (çatıdaki questions.etiketler); eski sorunun
  // kendi etiketler sütunu varsa (girişimcilik) o kullanılır
  etiketler?: { original: string; derived: string };
}

export interface PratikBilgisi {
  // Çatıdaki soru havuzunun kimlikleri (icerik/<pratik>/sorular)
  sorular: Set<string>;
  konular: Set<string>;
  kavramlar: Set<string>;
}

export interface Plan {
  sql: string;
  rapor: string[];
  sayilar: Record<string, number>;
  // Eski kullanıcı kimliği -> çatıdaki kimlik
  kisiler: Map<string, string>;
}

const PANEL_TURLERI = new Set(["tf", "mcq", "fill", "code"]);
const SORU_TURLERI = new Set(["tf", "mcq", "fill", "num", "code", "wave"]);
const KULLANICI_ADI = /^[a-z0-9_]{3,20}$/;

export function q(v: unknown): string {
  if (v === null || v === undefined) return "NULL";
  if (typeof v === "number" || typeof v === "bigint") return String(v);
  if (typeof v === "boolean") return v ? "1" : "0";
  return `'${String(v).replace(/'/g, "''")}'`;
}

const kucuk = (v: unknown) => (typeof v === "string" ? v.trim().toLowerCase() : "");

function ekle(tablo: string, s: Satir, { veyaGec = false } = {}): string {
  const k = Object.keys(s);
  return `INSERT ${veyaGec ? "OR IGNORE " : ""}INTO ${tablo} (${k.join(", ")}) VALUES (${k.map((x) => q(s[x])).join(", ")});`;
}

// Satırı tekrar eklememek için: aynı anahtar alanları taşıyan satır yoksa ekle
function yoksaEkle(tablo: string, s: Satir, anahtar: string[]): string {
  const k = Object.keys(s);
  const kosul = anahtar.map((a) => (s[a] === null || s[a] === undefined ? `${a} IS NULL` : `${a} = ${q(s[a])}`)).join(" AND ");
  return `INSERT INTO ${tablo} (${k.join(", ")}) SELECT ${k.map((x) => q(s[x])).join(", ")} WHERE NOT EXISTS (SELECT 1 FROM ${tablo} WHERE ${kosul});`;
}

function sec(s: Satir, sutunlar: string[]): Satir {
  const o: Satir = {};
  for (const c of sutunlar) if (c in s) o[c] = s[c];
  return o;
}

const KULLANICI_SUTUNLARI = [
  "id", "kind", "email", "password_hash", "display_name", "created_at", "username", "email_verified", "pass_salt", "pass_iter",
  "avatar", "avatar_bg", "role", "public_profile", "username_changed_at", "muted_until", "notify_email", "gunluk_hedef",
  "yazi_olcek", "gunluk_tekrar",
];

export function tasimaPlani(eski: Tablolar, hedef: Tablolar, ayar: TasimaAyari, pratik: PratikBilgisi): Plan {
  const rapor: string[] = [];
  const sayilar: Record<string, number> = {};
  const say = (k: string, n = 1) => (sayilar[k] = (sayilar[k] ?? 0) + n);
  const sql: string[] = [
    `-- Taşıma: ${ayar.pratik} (scripts/tasi.ts ile üretildi). Kişisel veri içerir; depoya eklemeyin.`,
    "PRAGMA defer_foreign_keys = true;",
  ];
  const etiket = ayar.etiketler ?? { original: "cikmis", derived: "turetilmis" };
  const yeniSoru = (id: unknown) => `${ayar.onek}${id}`;
  const yeniKonu = (id: unknown) => `${ayar.onek}${id}`;

  // ---- Kişiler ----
  const hedefKimlik = new Set(hedef.users.map((u) => String(u.id)));
  const hedefEposta = new Map(hedef.users.filter((u) => u.email).map((u) => [kucuk(u.email), u]));
  const hedefAd = new Map(hedef.users.filter((u) => u.username).map((u) => [kucuk(u.username), u]));
  const alinmisAd = new Set(hedefAd.keys());
  const alinmisEposta = new Set(hedefEposta.keys());
  const eslemeler = new Map(Object.entries(ayar.hesaplar ?? {}).map(([a, b]) => [kucuk(a), kucuk(b)]));
  const kisiler = new Map<string, string>();
  const dersIlerlemesi: [string, string, boolean][] = [];
  const hedefler: [string, unknown][] = [];
  const kullanilanEslemeler = new Set<string>();

  for (const u of eski.users) {
    const eskiId = String(u.id);
    // Önceki bir çalıştırmada taşınmış (kimlikler UUID, çakışma pratikte olmaz)
    if (hedefKimlik.has(eskiId)) {
      kisiler.set(eskiId, eskiId);
      say("önceden taşınmış hesap");
      continue;
    }
    if (u.kind === "member") {
      const anahtar = [kucuk(u.username), kucuk(u.email)].find((a) => a && eslemeler.has(a));
      let hedefU: Satir | undefined;
      if (anahtar) {
        kullanilanEslemeler.add(anahtar);
        const h = eslemeler.get(anahtar)!;
        hedefU = hedefAd.get(h) ?? hedefEposta.get(h);
        if (!hedefU) throw new Error(`eşleme dosyası: "${anahtar}" için çatıda "${h}" adlı ya da e-postalı bir hesap yok`);
      } else if (u.email && hedefEposta.has(kucuk(u.email))) {
        hedefU = hedefEposta.get(kucuk(u.email));
      }
      if (hedefU) {
        kisiler.set(eskiId, String(hedefU.id));
        say("birleşen hesap");
        rapor.push(`Hesap birleşti: ${u.username} <${u.email}> -> ${hedefU.username} <${hedefU.email}>${anahtar ? " (eşleme dosyası)" : " (aynı e-posta)"}`);
        if (u.ders_ilerleme) dersIlerlemesi.push([String(hedefU.id), String(u.ders_ilerleme), true]);
        hedefler.push([String(hedefU.id), u.gunluk_hedef]);
        continue;
      }
    }
    // Yeni hesap (üye ya da misafir)
    const id = eskiId;
    hedefKimlik.add(id);
    kisiler.set(eskiId, id);
    const satir = sec(u, KULLANICI_SUTUNLARI);
    satir.id = id;
    if (u.kind === "member") {
      let ad = kucuk(u.username);
      if (!KULLANICI_ADI.test(ad)) ad = "uye";
      if (alinmisAd.has(ad)) {
        let n = 2;
        const kok = ad.slice(0, 17);
        while (alinmisAd.has(`${kok}_${n}`)) n++;
        rapor.push(`Kullanıcı adı çatıda başkasında: ${u.username} -> ${kok}_${n} <${u.email}>`);
        say("adı değişen hesap");
        ad = `${kok}_${n}`;
      }
      alinmisAd.add(ad);
      satir.username = ad;
      if (u.email) alinmisEposta.add(kucuk(u.email));
      if (u.role && u.role !== "user") rapor.push(`Dikkat: ${ad} eski sitede "${u.role}" rolündeydi; rol olduğu gibi taşındı.`);
      say("yeni üye");
      rapor.push(`Yeni hesap: ${ad} <${u.email}>`);
    } else {
      say("misafir");
    }
    sql.push(ekle("users", satir, { veyaGec: true }));
    if (u.ders_ilerleme) dersIlerlemesi.push([id, String(u.ders_ilerleme), false]);
    hedefler.push([id, u.gunluk_hedef]);
  }
  for (const a of eslemeler.keys()) if (!kullanilanEslemeler.has(a)) rapor.push(`Uyarı: eşleme dosyasındaki "${a}" eski sitede bulunamadı.`);
  const kisi = (id: unknown) => (id === null || id === undefined ? null : (kisiler.get(String(id)) ?? null));

  // Ders ilerlemesi pratik başına: users.ders_ilerleme = { "<pratik>": ... }. Çatıda
  // bu pratik için ilerleme zaten varsa (tekrar çalıştırma) üzerine yazılmaz.
  for (const [id, deger, birlesen] of dersIlerlemesi) {
    let json: unknown;
    try {
      json = JSON.parse(deger);
    } catch {
      continue;
    }
    sql.push(
      `UPDATE users SET ders_ilerleme = json_insert(CASE WHEN json_valid(ders_ilerleme) THEN ders_ilerleme ELSE '{}' END, '$."${ayar.pratik}"', json(${q(JSON.stringify(json))})) WHERE id = ${q(id)};`,
    );
    if (birlesen) say("birleşen ders ilerlemesi");
  }

  // Günlük hedef de pratik başınadır: eski sitedeki hedef bu pratiğin hedefi olur.
  // Çatıda bu pratik için hedef zaten seçilmişse (tekrar çalıştırma) üzerine yazılmaz.
  for (const [id, h] of hedefler) {
    if (typeof h !== "number" || !Number.isInteger(h)) continue;
    sql.push(
      `UPDATE users SET gunluk_hedefler = json_insert(CASE WHEN json_valid(gunluk_hedefler) THEN gunluk_hedefler ELSE '{}' END, '$."${ayar.pratik}"', ${h}) WHERE id = ${q(id)};`,
    );
  }

  // ---- Konular ve sorular ----
  const eskiKonu = new Map(eski.topics.map((t) => [String(t.id), t]));
  const eklenenKonu = new Set<string>();
  const konuyuGaranti = (eskiId: unknown) => {
    const yeni = yeniKonu(eskiId);
    if (pratik.konular.has(yeni) || eklenenKonu.has(yeni)) return yeni;
    const t = eskiKonu.get(String(eskiId));
    if (!t) throw new Error(`eski konu bulunamadı: ${eskiId}`);
    sql.push(ekle("topics", { id: yeni, practice_id: ayar.pratik, title: t.title, week: t.week, sort: t.sort ?? 0 }, { veyaGec: true }));
    eklenenKonu.add(yeni);
    rapor.push(`Kaynakta olmayan konu eklendi: ${yeni} (${t.title})`);
    return yeni;
  };
  const kavram = (k: unknown, hafta: unknown) => {
    if (typeof k !== "string" || !k) return null;
    if (pratik.kavramlar.has(`u${hafta}-${k}`)) return `u${hafta}-${k}`;
    return pratik.kavramlar.has(k) ? k : null;
  };
  const tasinanSoru = new Set<string>();
  for (const s of eski.questions) {
    const yeni = yeniSoru(s.id);
    if (pratik.sorular.has(yeni)) {
      tasinanSoru.add(yeni);
      if (s.updated_at) {
        // Panelde değiştirilmiş soru: çatıda da bu hali kalır (sorular:sql üstüne yazmaz)
        const alanlar: Satir = {
          prompt: s.prompt, payload: s.payload, answer: s.answer, explanation: s.explanation, difficulty: s.difficulty,
          source_ref: s.source_ref, active: s.active, status: s.status, updated_at: s.updated_at, updated_by: kisi(s.updated_by),
        };
        sql.push(`UPDATE questions SET ${Object.entries(alanlar).map(([k, v]) => `${k} = ${q(v)}`).join(", ")} WHERE id = ${q(yeni)};`);
        say("panelde değişmiş soru");
      }
      continue;
    }
    if (!SORU_TURLERI.has(String(s.type))) {
      rapor.push(`Atlandı: ${s.id} soru türü (${s.type}) çatıda yok`);
      continue;
    }
    // Panelden eklenmiş ya da kaynaktan silinmiş soru: denemeleri korunsun diye eklenir
    const panelden = !!(s.created_by || s.suggested_by);
    sql.push(
      ekle("questions", {
        id: yeni, practice_id: ayar.pratik, topic_id: konuyuGaranti(s.topic_id), week: s.week, type: s.type, source: s.source,
        prompt: s.prompt, payload: s.payload, answer: s.answer, explanation: s.explanation, active: panelden ? s.active : 0,
        difficulty: s.difficulty ?? 1, source_ref: s.source_ref, created_by: kisi(s.created_by), status: s.status ?? "published",
        updated_at: s.updated_at ?? null, updated_by: kisi(s.updated_by), suggested_by: kisi(s.suggested_by),
        kavram: kavram(s.kavram, s.week), yedek: s.yedek ?? 0, etiketler: typeof s.etiketler === "string" && s.etiketler ? s.etiketler : s.source === "original" ? etiket.original : etiket.derived,
      }, { veyaGec: true }),
    );
    tasinanSoru.add(yeni);
    say(panelden ? "panelden eklenmiş soru" : "kaynakta olmayan eski soru (pasif)");
    rapor.push(`${panelden ? "Panelden eklenmiş soru taşındı" : "Kaynakta olmayan eski soru pasif eklendi"}: ${yeni}`);
  }
  const soru = (id: unknown) => {
    const y = yeniSoru(id);
    return tasinanSoru.has(y) || pratik.sorular.has(y) ? y : null;
  };

  // ---- Denemeler, tekrar kutuları, oturumlar ----
  for (const a of eski.attempts) {
    const u = kisi(a.user_id);
    const s = soru(a.question_id);
    if (!u || !s) {
      say("atlanan deneme");
      continue;
    }
    sql.push(yoksaEkle("attempts", { user_id: u, question_id: s, correct: a.correct, answer: a.answer, created_at: a.created_at }, ["user_id", "question_id", "created_at"]));
    say("deneme");
  }
  for (const t of eski.tekrarlar) {
    const u = kisi(t.user_id);
    const s = soru(t.question_id);
    if (!u || !s) continue;
    sql.push(ekle("tekrarlar", { ...sec(t, ["kutu", "sonraki", "kaynak", "eklendi", "son_tekrar"]), user_id: u, question_id: s }, { veyaGec: true }));
    say("tekrar kutusu");
  }
  const simdi = Date.now();
  for (const o of eski.sessions) {
    const u = kisi(o.user_id);
    if (!u || Number(o.expires_at) <= simdi) continue;
    sql.push(ekle("sessions", { token_hash: o.token_hash, user_id: u, created_at: o.created_at, expires_at: o.expires_at }, { veyaGec: true }));
    say("açık oturum");
  }

  // ---- Yazışmalar ve öneriler ----
  const tasinanKonu = new Set(eski.threads.map((t) => String(t.id)));
  for (const t of eski.threads) {
    const u = kisi(t.user_id);
    if (!u) continue;
    sql.push(ekle("threads", { ...sec(t, ["id", "subject", "status", "created_at", "updated_at", "user_unread", "admin_unread"]), user_id: u }, { veyaGec: true }));
    say("yazışma");
  }
  for (const m of eski.thread_messages) {
    if (!tasinanKonu.has(String(m.thread_id))) continue;
    sql.push(yoksaEkle("thread_messages", { thread_id: m.thread_id, from_admin: m.from_admin, admin_id: kisi(m.admin_id), body: m.body, created_at: m.created_at }, ["thread_id", "created_at", "body"]));
    say("mesaj");
  }
  for (const o of eski.suggestions) {
    const u = kisi(o.user_id);
    if (!u) continue;
    if (!PANEL_TURLERI.has(String(o.type))) {
      rapor.push(`Atlandı: öneri ${o.id} (${o.type} türü öneriler çatıda yok)`);
      continue;
    }
    sql.push(ekle("suggestions", {
      ...sec(o, ["id", "type", "prompt", "payload", "answer", "explanation", "show_name", "status", "admin_note", "created_at", "decided_at", "user_unread"]),
      user_id: u, topic_id: konuyuGaranti(o.topic_id), question_id: o.question_id ? soru(o.question_id) : null,
    }, { veyaGec: true }));
    say("öneri");
  }

  // ---- Ayarlar ----
  for (const s of eski.settings) {
    if (!["current_week", "show_original", "announcement"].includes(String(s.key))) continue;
    sql.push(`INSERT INTO settings (key, value) VALUES (${q(`${ayar.pratik}:${s.key}`)}, ${q(s.value)}) ON CONFLICT(key) DO UPDATE SET value = excluded.value;`);
    say("ayar");
  }

  return { sql: sql.join("\n") + "\n", rapor, sayilar, kisiler };
}
