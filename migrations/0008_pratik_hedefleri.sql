-- Günlük hedef pratik başına: {"<pratik>": doğru sayısı}. Bir pratikte seçilmediyse
-- users.gunluk_hedef geçerlidir.
ALTER TABLE users ADD COLUMN gunluk_hedefler TEXT;
