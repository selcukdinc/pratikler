-- Yönetim panelinden Claude'a verilen işler. Yerel ajan (ajan/pratikler-ajan.mjs)
-- kuyruğu /api/ajan uçlarından yoklar, işi yöneticinin bilgisayarında `claude -p`
-- ile yapar, yerel denetimlerden geçerse PR açar. Birleştirme her zaman yöneticidedir.
-- durum: bekliyor -> calisiyor -> pr (PR açıldı) | hata | iptal
CREATE TABLE claude_isleri (
  id          TEXT PRIMARY KEY,
  practice_id TEXT NOT NULL,
  istek       TEXT NOT NULL,
  durum       TEXT NOT NULL DEFAULT 'bekliyor' CHECK (durum IN ('bekliyor', 'calisiyor', 'pr', 'hata', 'iptal')),
  sonuc       TEXT,
  pr_url      TEXT,
  created_by  TEXT REFERENCES users(id) ON DELETE SET NULL,
  created_at  INTEGER NOT NULL,
  updated_at  INTEGER NOT NULL
);
CREATE INDEX claude_isleri_durum ON claude_isleri(durum, created_at);
