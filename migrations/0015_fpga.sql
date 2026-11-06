-- FPGA Pratik (Faz 3, veri taşınmadan): kod sorularının sınamaları, VHDL
-- ve ayarlar.

-- Kod yazma soruları için tek kullanımlık sınamalar. Her denemede sunucu
-- rastgele giriş vektörleri seçer; beklenen çıkışlar burada saklanmaz,
-- gönderimde referans modelden (worker/modeller.ts) yeniden hesaplanır.
CREATE TABLE sinamalar (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL REFERENCES questions(id),
  vectors     TEXT NOT NULL,
  created_at  INTEGER NOT NULL,
  expires_at  INTEGER NOT NULL
);
CREATE INDEX sinamalar_user ON sinamalar(user_id);
CREATE INDEX sinamalar_expires ON sinamalar(expires_at);

-- VHDL simülasyon alanının düzenleri users.sim_duzenleri'nde tutulur (0001'de var;
-- MatStudio'nunkiler lab_duzenleri'nde)

INSERT OR IGNORE INTO settings (key, value) VALUES
  ('fpga:current_week', '6'), ('fpga:show_original', '1'), ('fpga:announcement', '');
