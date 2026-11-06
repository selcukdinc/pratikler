-- Claude işlerinin canlı günlüğü: yerel ajan `claude -p --output-format stream-json`
-- çıktısını sadeleştirip saniyede bir toplu olarak yollar; panel yeni olayları
-- kısa aralıklarla çeker. İş bittikten 30 gün sonra olaylar silinir.
-- tur: asama (worktree, claude, denetle, pr), metin (Claude'un yazdığı), arac (araç
--      çağrısı), sonuc (araç sonucu), cikti (komut çıktısı), bilgi (süre, maliyet), hata
CREATE TABLE claude_is_olaylari (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  is_id  TEXT NOT NULL REFERENCES claude_isleri(id) ON DELETE CASCADE,
  tur    TEXT NOT NULL,
  metin  TEXT NOT NULL,
  zaman  INTEGER NOT NULL
);
CREATE INDEX claude_is_olaylari_is ON claude_is_olaylari(is_id, id);

-- Panelden çalışan bir işi durdurma isteği; ajan bir sonraki olay gönderiminde görür
ALTER TABLE claude_isleri ADD COLUMN iptal_istendi INTEGER NOT NULL DEFAULT 0;
