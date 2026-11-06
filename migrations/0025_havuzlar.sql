-- Öğrenci soru havuzu: akademisyen seçtiği soruları kısa bir bağlantıyla
-- öğrencilere açar (/havuz/<kod>). Bağlantıyı açan öğrenci için soru listesi,
-- karma ve tekrar yalnızca bu sorularla çalışır (X-Havuz başlığı).
CREATE TABLE havuzlar (
  kod         TEXT PRIMARY KEY,
  practice_id TEXT NOT NULL,
  sahip       TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  ad          TEXT NOT NULL,
  -- YYYY-AA-GG ya da NULL; yalnızca gösterilir, süre geçince havuz kapanmaz
  son_tarih   TEXT,
  -- Havuz bir sınavdan açıldıysa o sınav (sınav güncellenince havuz da güncellenebilir)
  sinav_id    TEXT,
  created_at  INTEGER NOT NULL,
  updated_at  INTEGER NOT NULL
);
CREATE INDEX havuzlar_sahip ON havuzlar (sahip, practice_id);

CREATE TABLE havuz_sorulari (
  kod         TEXT NOT NULL REFERENCES havuzlar(kod) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  PRIMARY KEY (kod, question_id)
);
