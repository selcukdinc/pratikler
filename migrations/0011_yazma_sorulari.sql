-- Yazma (yaz) soruları (Ayrık): öğrenci cevabını yazar, örnek çözümle karşılaştırıp
-- kendini değerlendirir. CHECK kısıtı için questions tablosu 0005'teki gibi yeniden
-- kurulur (bağlı attempts ve suggestions satırları yedeklenip geri yazılır).
PRAGMA defer_foreign_keys = true;

CREATE TABLE attempts_yedek AS SELECT * FROM attempts;
DELETE FROM attempts;
CREATE TABLE suggestions_yedek AS SELECT * FROM suggestions WHERE question_id IS NOT NULL;
DELETE FROM suggestions WHERE question_id IS NOT NULL;

CREATE TABLE questions_yeni (
  id          TEXT PRIMARY KEY,
  practice_id TEXT NOT NULL,
  topic_id    TEXT NOT NULL REFERENCES topics(id),
  week        INTEGER NOT NULL,
  type        TEXT NOT NULL CHECK (type IN ('tf', 'mcq', 'fill', 'num', 'yaz', 'code', 'wave')),
  source      TEXT NOT NULL CHECK (source IN ('original', 'derived')),
  prompt      TEXT NOT NULL,
  payload     TEXT NOT NULL DEFAULT '{}',
  answer      TEXT NOT NULL,
  explanation TEXT,
  active      INTEGER NOT NULL DEFAULT 1,
  difficulty  INTEGER NOT NULL DEFAULT 1,
  source_ref  TEXT,
  created_by  TEXT REFERENCES users(id) ON DELETE SET NULL,
  status      TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published')),
  updated_at  INTEGER,
  updated_by  TEXT REFERENCES users(id) ON DELETE SET NULL,
  suggested_by TEXT REFERENCES users(id),
  kavram      TEXT,
  yedek       INTEGER NOT NULL DEFAULT 0,
  etiketler   TEXT NOT NULL DEFAULT ''
);
INSERT INTO questions_yeni SELECT id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation,
  active, difficulty, source_ref, created_by, status, updated_at, updated_by, suggested_by, kavram, yedek, etiketler FROM questions;
DROP TABLE questions;
ALTER TABLE questions_yeni RENAME TO questions;
CREATE INDEX questions_week ON questions(practice_id, week, active);

INSERT INTO attempts SELECT * FROM attempts_yedek;
DROP TABLE attempts_yedek;
INSERT INTO suggestions SELECT * FROM suggestions_yedek;
DROP TABLE suggestions_yedek;
