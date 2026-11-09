-- Akademisyenin sorumlu olduğu alanlar (pratikler). Akademisyen yalnızca alanındaki
-- pratiklerde sınav hazırlar ve öğrencilere soru havuzu açar; yönetici her yerde.
-- Alanları yönetim panelinin Kullanıcılar sekmesinden yönetici atar.
CREATE TABLE akademisyen_alanlari (
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  practice_id TEXT NOT NULL,
  -- Atayan yöneticinin kimliği; göçle atananlarda boş
  atayan      TEXT,
  created_at  INTEGER NOT NULL,
  PRIMARY KEY (user_id, practice_id)
);

-- Var olan akademisyenlerin işi yarıda kalmasın: daha önce sınav hazırladıkları ya da
-- havuz açtıkları pratikler alanları olarak atanır.
INSERT OR IGNORE INTO akademisyen_alanlari (user_id, practice_id, atayan, created_at)
SELECT DISTINCT s.sahip, s.practice_id, NULL, CAST(strftime('%s', 'now') AS INTEGER) * 1000
FROM sinavlar s JOIN users u ON u.id = s.sahip
WHERE u.role = 'akademisyen';

INSERT OR IGNORE INTO akademisyen_alanlari (user_id, practice_id, atayan, created_at)
SELECT DISTINCT h.sahip, h.practice_id, NULL, CAST(strftime('%s', 'now') AS INTEGER) * 1000
FROM havuzlar h JOIN users u ON u.id = h.sahip
WHERE u.role = 'akademisyen';
