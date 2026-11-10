-- Soru başına anonim toplamlar: kaç kişi denedi, kaçı ilk denemede doğru yaptı ve
-- çoktan seçmelide ilk denemelerde her şık kaç kez seçildi. Eskiden her cevaptan sonra
-- bütün denemeler taranıyordu; artık kişi soruyu ilk kez cevapladığında bu satır artar
-- (worker/cevaplar.ts) ve soru listesiyle birlikte okunur.
CREATE TABLE soru_sayaclari (
  question_id TEXT PRIMARY KEY REFERENCES questions(id),
  kisi        INTEGER NOT NULL DEFAULT 0,
  ilk_dogru   INTEGER NOT NULL DEFAULT 0,
  s0 INTEGER NOT NULL DEFAULT 0,
  s1 INTEGER NOT NULL DEFAULT 0,
  s2 INTEGER NOT NULL DEFAULT 0,
  s3 INTEGER NOT NULL DEFAULT 0,
  s4 INTEGER NOT NULL DEFAULT 0,
  s5 INTEGER NOT NULL DEFAULT 0,
  s6 INTEGER NOT NULL DEFAULT 0,
  s7 INTEGER NOT NULL DEFAULT 0
);

-- Mevcut denemelerden doldur: her kişinin her sorudaki ilk denemesi sayılır
INSERT INTO soru_sayaclari (question_id, kisi, ilk_dogru, s0, s1, s2, s3, s4, s5, s6, s7)
SELECT a.question_id, COUNT(*), COALESCE(SUM(a.correct), 0),
  COALESCE(SUM(json_extract(a.answer, '$.index') = 0), 0),
  COALESCE(SUM(json_extract(a.answer, '$.index') = 1), 0),
  COALESCE(SUM(json_extract(a.answer, '$.index') = 2), 0),
  COALESCE(SUM(json_extract(a.answer, '$.index') = 3), 0),
  COALESCE(SUM(json_extract(a.answer, '$.index') = 4), 0),
  COALESCE(SUM(json_extract(a.answer, '$.index') = 5), 0),
  COALESCE(SUM(json_extract(a.answer, '$.index') = 6), 0),
  COALESCE(SUM(json_extract(a.answer, '$.index') = 7), 0)
FROM attempts a
WHERE a.id = (SELECT MIN(b.id) FROM attempts b WHERE b.question_id = a.question_id AND b.user_id = a.user_id)
GROUP BY a.question_id;
