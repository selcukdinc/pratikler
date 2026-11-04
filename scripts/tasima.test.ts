import { describe, expect, it } from "vitest";
import { tasimaPlani, type Tablolar } from "./tasima";

const bos = (): Tablolar => ({
  users: [], sessions: [], attempts: [], tekrarlar: [], threads: [], thread_messages: [], suggestions: [], questions: [], topics: [], settings: [],
});
const uye = (id: string, username: string, email: string) => ({
  id, kind: "member", username, email, password_hash: "h", pass_salt: "s", pass_iter: 1, created_at: 1, role: "user", display_name: null, ders_ilerleme: null,
});
const pratik = { sorular: new Set(["km-u1-a", "km-u1-b"]), konular: new Set(["km-k1"]), kavramlar: new Set(["u1-madde"]) };
const ayar = { pratik: "kimya", onek: "km-" };

describe("taşıma planı", () => {
  it("aynı e-postalı üye çatıdaki hesaba bağlanır, denemeleri önekli soruya gider", () => {
    const eski = bos();
    eski.users.push(uye("e1", "selcuk_k", "S@Example.com"));
    eski.attempts.push({ id: 1, user_id: "e1", question_id: "u1-a", correct: 1, answer: "{}", created_at: 5 });
    const hedef = bos();
    hedef.users.push(uye("h1", "selcuk", "s@example.com"));
    const p = tasimaPlani(eski, hedef, ayar, pratik);
    expect(p.kisiler.get("e1")).toBe("h1");
    expect(p.sql).not.toMatch(/INSERT OR IGNORE INTO users/);
    expect(p.sql).toMatch(/INSERT INTO attempts \(user_id, question_id, correct, answer, created_at\) SELECT 'h1', 'km-u1-a', 1, '\{\}', 5 WHERE NOT EXISTS/);
    expect(p.sayilar["birleşen hesap"]).toBe(1);
  });

  it("eşleme dosyası farklı e-postalı hesabı da bağlar; çatıda olmayan hedef hata verir", () => {
    const eski = bos();
    eski.users.push(uye("e1", "selcukdinc", "baska@hotmail.com"));
    const hedef = bos();
    hedef.users.push(uye("h1", "selcuk", "s@example.com"));
    expect(tasimaPlani(eski, hedef, { ...ayar, hesaplar: { "baska@hotmail.com": "selcuk" } }, pratik).kisiler.get("e1")).toBe("h1");
    expect(() => tasimaPlani(eski, hedef, { ...ayar, hesaplar: { selcukdinc: "yok" } }, pratik)).toThrow(/çatıda/);
  });

  it("başkasının kullandığı ad sayı alır; misafir ve oturum olduğu gibi taşınır", () => {
    const eski = bos();
    eski.users.push(uye("e1", "ali", "ali@a.com"), { id: "g1", kind: "guest", created_at: 1, role: "user" });
    eski.sessions.push({ token_hash: "t", user_id: "g1", created_at: 1, expires_at: Date.now() + 1e6 }, { token_hash: "eski", user_id: "e1", created_at: 1, expires_at: 2 });
    const hedef = bos();
    hedef.users.push(uye("h1", "ali", "baska@a.com"));
    const p = tasimaPlani(eski, hedef, ayar, pratik);
    expect(p.sql).toContain("'ali_2'");
    expect(p.rapor.some((r) => r.includes("ali -> ali_2"))).toBe(true);
    expect(p.sql).toMatch(/INSERT OR IGNORE INTO sessions \(token_hash, user_id, created_at, expires_at\) VALUES \('t', 'g1'/);
    expect(p.sql).not.toContain("'eski'");
  });

  it("panelde değişmiş soru güncellenir, kaynakta olmayan soru pasif eklenir, ayarlar pratiğe yazılır", () => {
    const eski = bos();
    eski.topics.push({ id: "k9", title: "Eski konu", week: 1, sort: 1 });
    eski.questions.push(
      { id: "u1-a", topic_id: "k1", week: 1, type: "mcq", source: "derived", prompt: "Yeni metin", payload: "{}", answer: "{}", updated_at: 9, difficulty: 1, active: 1, status: "published" },
      { id: "eski-x", topic_id: "k9", week: 1, type: "num", source: "original", prompt: "p", payload: "{}", answer: "{}", kavram: "madde", active: 1 },
    );
    eski.settings.push({ key: "current_week", value: "4" }, { key: "show_original", value: "1" });
    const p = tasimaPlani(eski, bos(), ayar, pratik);
    expect(p.sql).toMatch(/UPDATE questions SET prompt = 'Yeni metin'.* WHERE id = 'km-u1-a';/);
    expect(p.sql).toMatch(/INSERT OR IGNORE INTO topics .*'km-k9'/);
    expect(p.sql).toMatch(/'km-eski-x', 'kimya', 'km-k9', 1, 'num', 'original'.*, 0, 1,.*'u1-madde', 0, 'cikmis'\);/);
    expect(p.sql).toContain("INSERT INTO settings (key, value) VALUES ('kimya:current_week', '4')");
  });

  it("ders ilerlemesi pratiğin anahtarına yazılır", () => {
    const eski = bos();
    eski.users.push({ ...uye("e1", "ali", "ali@a.com"), ders_ilerleme: '{"bitenler":{"1":[0]},"son":null}' });
    const p = tasimaPlani(eski, bos(), ayar, pratik);
    expect(p.sql).toContain(`json_insert(`);
    expect(p.sql).toContain(`'$."kimya"', json('{"bitenler":{"1":[0]},"son":null}'))`);
  });

  it("ikinci çalıştırma önceden taşınan hesapları yeniden eklemez", () => {
    const eski = bos();
    eski.users.push(uye("e1", "ali", "ali@a.com"), { id: "g1", kind: "guest", created_at: 1, role: "user" });
    eski.attempts.push({ id: 1, user_id: "g1", question_id: "u1-a", correct: 1, answer: "{}", created_at: 5 });
    const hedef = bos();
    hedef.users.push(uye("e1", "ali", "ali@a.com"), { id: "g1", kind: "guest", created_at: 1, role: "user" });
    const p = tasimaPlani(eski, hedef, ayar, pratik);
    expect(p.sql).not.toMatch(/INTO users/);
    expect(p.sayilar["önceden taşınmış hesap"]).toBe(2);
    expect(p.sql).toMatch(/SELECT 'g1', 'km-u1-a'/);
  });
});
