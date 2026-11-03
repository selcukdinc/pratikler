-- Girişimcilik Pratik veritabanı şeması (fpga-pratik'in son şemasından, topluluk ve kod tabloları olmadan)

CREATE TABLE users (
  id            TEXT PRIMARY KEY,
  kind          TEXT NOT NULL CHECK (kind IN ('guest', 'member')),
  email         TEXT UNIQUE,
  password_hash TEXT,
  display_name  TEXT,
  created_at    INTEGER NOT NULL,
  username TEXT,
  email_verified INTEGER NOT NULL DEFAULT 0,
  pass_salt TEXT,
  pass_iter INTEGER,
  avatar TEXT,
  avatar_bg TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  public_profile INTEGER NOT NULL DEFAULT 0,
  username_changed_at INTEGER,
  muted_until INTEGER,
  notify_email INTEGER NOT NULL DEFAULT 1,
  sim_duzenleri TEXT,
  gunluk_hedef INTEGER NOT NULL DEFAULT 10,
  yazi_olcek INTEGER,
  ders_ilerleme TEXT,
  gunluk_tekrar INTEGER
);
CREATE UNIQUE INDEX users_username ON users(username);

CREATE TABLE sessions (
  token_hash TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE INDEX sessions_user ON sessions(user_id);

CREATE TABLE settings (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

-- week: kitabın ünite numarası
CREATE TABLE topics (
  id    TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  week  INTEGER NOT NULL,
  sort  INTEGER NOT NULL DEFAULT 0
);

-- source: original (kitabın bölüm sonu sorusu ya da çıkmış soru), derived (türetilmiş)
-- etiketler: virgülle ayrılmış ges, cikmis, turetilmis
CREATE TABLE questions (
  id          TEXT PRIMARY KEY,
  topic_id    TEXT NOT NULL REFERENCES topics(id),
  week        INTEGER NOT NULL,
  type        TEXT NOT NULL CHECK (type IN ('tf', 'mcq', 'fill', 'code', 'wave')),
  source      TEXT NOT NULL CHECK (source IN ('original', 'derived')),
  prompt      TEXT NOT NULL,
  payload     TEXT NOT NULL DEFAULT '{}',
  answer      TEXT NOT NULL,
  explanation TEXT,
  active      INTEGER NOT NULL DEFAULT 1,
  difficulty INTEGER NOT NULL DEFAULT 1,
  source_ref TEXT,
  created_by TEXT REFERENCES users(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published')),
  updated_at INTEGER,
  updated_by TEXT REFERENCES users(id) ON DELETE SET NULL,
  suggested_by TEXT REFERENCES users(id),
  kavram TEXT,
  yedek INTEGER NOT NULL DEFAULT 0,
  etiketler TEXT NOT NULL DEFAULT ''
);
CREATE INDEX questions_week ON questions(week, active);

CREATE TABLE attempts (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL REFERENCES questions(id),
  correct     INTEGER NOT NULL,
  answer      TEXT NOT NULL,
  created_at  INTEGER NOT NULL
);
CREATE INDEX attempts_user ON attempts(user_id, question_id);
CREATE INDEX attempts_soru ON attempts(question_id, user_id, id);

CREATE TABLE pending_signups (
  id         TEXT PRIMARY KEY,
  username   TEXT NOT NULL,
  email      TEXT NOT NULL,
  pass_hash  TEXT NOT NULL,
  pass_salt  TEXT NOT NULL,
  pass_iter  INTEGER NOT NULL,
  code_hash  TEXT NOT NULL,
  attempts   INTEGER NOT NULL DEFAULT 0,
  sent_at    INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE INDEX pending_signups_username ON pending_signups(username);
CREATE INDEX pending_signups_email ON pending_signups(email);

CREATE TABLE email_codes (
  id         TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  purpose    TEXT NOT NULL CHECK (purpose IN ('reset', 'email')),
  new_email  TEXT,
  code_hash  TEXT NOT NULL,
  attempts   INTEGER NOT NULL DEFAULT 0,
  sent_at    INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE INDEX email_codes_user ON email_codes(user_id, purpose);

CREATE TABLE rate_limits (
  key          TEXT PRIMARY KEY,
  window_start INTEGER NOT NULL,
  count        INTEGER NOT NULL
);

CREATE TABLE admin_log (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    TEXT REFERENCES users(id) ON DELETE SET NULL,
  action     TEXT NOT NULL,
  target     TEXT,
  detail     TEXT,
  created_at INTEGER NOT NULL
);
CREATE INDEX admin_log_time ON admin_log(created_at);

CREATE TABLE suggestions (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  topic_id    TEXT NOT NULL REFERENCES topics(id),
  type        TEXT NOT NULL CHECK (type IN ('tf', 'mcq', 'fill', 'code')),
  prompt      TEXT NOT NULL,
  payload     TEXT NOT NULL DEFAULT '{}',
  answer      TEXT NOT NULL DEFAULT '{}',
  explanation TEXT NOT NULL,
  show_name   INTEGER NOT NULL DEFAULT 1,
  status      TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  admin_note  TEXT,
  question_id TEXT REFERENCES questions(id),
  created_at  INTEGER NOT NULL,
  decided_at  INTEGER,
  user_unread INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX suggestions_user ON suggestions(user_id, created_at);
CREATE INDEX suggestions_status ON suggestions(status, created_at);

CREATE TABLE threads (
  id           TEXT PRIMARY KEY,
  user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subject      TEXT NOT NULL,
  status       TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'closed')),
  created_at   INTEGER NOT NULL,
  updated_at   INTEGER NOT NULL,
  user_unread  INTEGER NOT NULL DEFAULT 0,
  admin_unread INTEGER NOT NULL DEFAULT 1
);
CREATE INDEX threads_user ON threads(user_id, updated_at);
CREATE INDEX threads_admin ON threads(admin_unread, updated_at);

CREATE TABLE thread_messages (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  thread_id  TEXT NOT NULL REFERENCES threads(id) ON DELETE CASCADE,
  from_admin INTEGER NOT NULL DEFAULT 0,
  admin_id   TEXT REFERENCES users(id),
  body       TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX thread_messages_thread ON thread_messages(thread_id, id);

CREATE TABLE tekrarlar (
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  kutu        INTEGER NOT NULL,
  sonraki     INTEGER NOT NULL,
  kaynak      TEXT NOT NULL CHECK (kaynak IN ('yanlis', 'iliskili')),
  eklendi     INTEGER NOT NULL,
  son_tekrar  INTEGER,
  PRIMARY KEY (user_id, question_id)
);
CREATE INDEX tekrarlar_vade ON tekrarlar(user_id, kutu, sonraki);

-- current_week: kaçıncı üniteye kadar soruların görüneceği
INSERT INTO settings (key, value) VALUES ('current_week', '8'), ('show_original', '1'), ('announcement', '');
