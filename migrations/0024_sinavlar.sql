-- Akademisyenin sınav kağıtları. Belge (shared/sinav.ts SinavBelgesi) tek JSON olarak
-- saklanır: kağıt ayarları, başlık bilgileri ve sınava özel düzenlenmiş sorular.
-- Sorular asıl haliyle questions tablosunda kalır. users.role = 'akademisyen' sınav
-- hazırlayabilir, yönetim paneline giremez.
CREATE TABLE sinavlar (
  id           TEXT PRIMARY KEY,
  practice_id  TEXT NOT NULL,
  sahip        TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  ad           TEXT NOT NULL,
  belge        TEXT NOT NULL,
  soru_sayisi  INTEGER NOT NULL DEFAULT 0,
  created_at   INTEGER NOT NULL,
  updated_at   INTEGER NOT NULL
);
CREATE INDEX sinavlar_sahip ON sinavlar(sahip, practice_id, updated_at);
