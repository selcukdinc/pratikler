-- Claude işlerine tür ve "tamam" durumu eklenir (SQLite CHECK kısıtını değiştiremediği
-- için tablo yeniden kurulur).
-- tur: is (bir pratikte değişiklik), pratik (çatı panelinden yeni pratik açma),
--      test (ajanı dene: Claude çalıştırılmaz, ajan makinesinin durumunu bildirir)
-- practice_id: işin pratiği; çatı panelinden verilen işlerde '*'
-- durum: tamam = test işi cevaplandı
CREATE TABLE claude_isleri_yeni (
  id          TEXT PRIMARY KEY,
  practice_id TEXT NOT NULL,
  tur         TEXT NOT NULL DEFAULT 'is' CHECK (tur IN ('is', 'pratik', 'test')),
  istek       TEXT NOT NULL,
  durum       TEXT NOT NULL DEFAULT 'bekliyor' CHECK (durum IN ('bekliyor', 'calisiyor', 'pr', 'tamam', 'hata', 'iptal')),
  sonuc       TEXT,
  pr_url      TEXT,
  created_by  TEXT REFERENCES users(id) ON DELETE SET NULL,
  created_at  INTEGER NOT NULL,
  updated_at  INTEGER NOT NULL
);
INSERT INTO claude_isleri_yeni (id, practice_id, istek, durum, sonuc, pr_url, created_by, created_at, updated_at)
  SELECT id, practice_id, istek, durum, sonuc, pr_url, created_by, created_at, updated_at FROM claude_isleri;
DROP TABLE claude_isleri;
ALTER TABLE claude_isleri_yeni RENAME TO claude_isleri;
CREATE INDEX claude_isleri_durum ON claude_isleri(durum, created_at);
