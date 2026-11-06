-- Bu dosya scripts/sorular-sql.ts ile icerik/ayrik/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ay-u1', 'ayrik', '1.1 Önermeli Mantık', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ay-u2', 'ayrik', '1.2 Önermeli Mantık Uygulamaları', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ay-u3', 'ayrik', '1.3 Önerme Denklikleri', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ay-u4', 'ayrik', '1.4 Yüklemler ve Niceleyiciler', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ay-u5', 'ayrik', '1.5 İç İçe Niceleyiciler', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ay-u6', 'ayrik', '1.6 Çıkarım Kuralları', 6, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ay-u7', 'ayrik', '1.7 İspatlara Giriş', 7, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ay-u8', 'ayrik', '1.8 İspat Yöntemleri ve Stratejisi', 8, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ay-u9', 'ayrik', '2.1 Kümeler', 9, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ay-u10', 'ayrik', '2.2 Küme İşlemleri', 10, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ay-u11', 'ayrik', '2.3 Fonksiyonlar', 11, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c1', 'ayrik', 'ay-u1', 1, 'mcq', 'original', '"Ne zaman okula gitmezsem, zor bir konu işlenir" cümlesinin karşıtı aşağıdakilerden hangisidir?', '{"choices":["Ben okula gittiğimde, zor bir konu işlenmez","Ne zaman kolay bir konu işlenirse, ben okula giderim","Ben okula gittiğimde, zor bir konu işlenir","Ne zaman zor bir konu işlenirse, ben okula gitmem"]}', '{"index":3}', 'p: "okula giderim", q: "zor bir konu işlenir" olsun. Cümle ¬p → q biçimindedir. Karşıtta hipotez ile sonuç yer değiştirir: q → ¬p, yani zor bir konu işlenirse okula gitmem.', 2, 'Çıkmış soru 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c2', 'ayrik', 'ay-u1', 1, 'mcq', 'original', '"Ne zaman okula gitmezsem, zor bir konu işlenir" cümlesinin tersi aşağıdakilerden hangisidir?', '{"choices":["Ben okula gittiğimde, zor bir konu işlenmez","Ne zaman kolay bir konu işlenirse, ben okula giderim","Ben okula gittiğimde, zor bir konu işlenir","Ne zaman zor bir konu işlenirse, ben okula gitmem"]}', '{"index":0}', 'p: "okula giderim", q: "zor bir konu işlenir" olsun. Cümle ¬p → q biçimindedir. Ters, hipotezin ve sonucun değilini alır: ¬(¬p) → ¬q, yani okula gidersem zor bir konu işlenmez.', 2, 'Çıkmış soru 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c3', 'ayrik', 'ay-u1', 1, 'mcq', 'original', '"Ne zaman okula gitmezsem, zor bir konu işlenir" cümlesinin zıt pozitifi aşağıdakilerden hangisidir?', '{"choices":["Ben okula gittiğimde, zor bir konu işlenmez","Ne zaman kolay bir konu işlenirse, ben okula giderim","Ben okula gittiğimde, zor bir konu işlenir","Ne zaman zor bir konu işlenirse, ben okula gitmem"]}', '{"index":1}', 'p: "okula giderim", q: "zor bir konu işlenir" olsun. Cümle ¬p → q biçimindedir. Zıt-pozitif ¬q → ¬(¬p), yani ¬q → p''dir: zor bir konu işlenmezse (kolay bir konu işlenirse) okula giderim. Zıt-pozitif asıl ifadeyle denktir.', 2, 'Çıkmış soru 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c4', 'ayrik', 'ay-u1', 1, 'mcq', 'original', '"Eğer hava güzel olursa, yürüyüşe çıkarım" cümlesinin karşıtı aşağıdakilerden hangisidir?', '{"choices":["Eğer hava güzel olursa, yürüyüşe çıkmam","Yürüyüşe çıkarsam, hava yağmurludur.","Yürüyüşe çıkarsam, hava güzeldir","Yürüyüşe çıkmazsam, hava güzeldir"]}', '{"index":2}', 'p → q''nun karşıtı q → p''dir: yürüyüşe çıkarsam hava güzeldir.', 1, 'Çıkmış soru 4', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c5', 'ayrik', 'ay-u1', 1, 'mcq', 'original', '"Eğer hava güzel olursa, yürüyüşe çıkarım" cümlesinin tersi aşağıdakilerden hangisidir?', '{"choices":["Eğer hava yağmurluysa, yürüyüşe çıkmam","Yürüyüşe çıkmazsam, hava yağmurludur.","Yürüyüşe çıkmazsam, hava güzeldir","Yürüyüşe çıkarsam, hava güzeldir"]}', '{"index":0}', 'p → q''nun tersi ¬p → ¬q''dur. Soruda "hava güzel değil" yerine "hava yağmurlu" kullanılmış: hava yağmurluysa yürüyüşe çıkmam.', 1, 'Çıkmış soru 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c6', 'ayrik', 'ay-u1', 1, 'mcq', 'original', '"Eğer hava güzel olursa, yürüyüşe çıkarım" cümlesinin zıt pozitifi aşağıdakilerden hangisidir?', '{"choices":["Yürüyüşe çıkmazsam, hava güzeldir","Yürüyüşe çıkmazsam, hava yağmurludur.","Eğer hava güzel olursa, yürüyüşe çıkmam","Yürüyüşe çıkarsam, hava güzeldir"]}', '{"index":1}', 'p → q''nun zıt-pozitifi ¬q → ¬p''dir: yürüyüşe çıkmazsam hava güzel değildir (yağmurludur).', 1, 'Çıkmış soru 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c7', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'p→(q∧r) önermesi için oluşturulan doğruluk tablosunda sonuç sütununda kaç tane 1 vardır?', '{"choices":["7","5","1","3"]}', '{"index":1}', 'Şartlı ifade yalnız p = 1 ve q∧r = 0 iken 0 olur. p = 1 olan 4 satırın 3''ünde q∧r = 0''dır; 8 satırın 3''ü 0, 5''i 1''dir.', 2, 'Çıkmış soru 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c8', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'p→(q∧r) önermesi için oluşturulan doğruluk tablosunda sonuç sütununda kaç tane 0 vardır?', '{"choices":["7","1","3","5"]}', '{"index":2}', 'p = 1 iken q∧r yalnız q = r = 1 satırında 1''dir; p = 1 olan diğer 3 satırda sonuç 0 olur.', 2, 'Çıkmış soru 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c9', 'ayrik', 'ay-u1', 1, 'mcq', 'original', '(p∨¬q)→q önermesi için oluşturulan doğruluk tablosunda sonuç sütununda kaç tane 1 vardır?', '{"choices":["4","1","2","3"]}', '{"index":2}', 'q = 1 olan iki satırda sonuç 1''dir. q = 0 iken ¬q = 1 olduğu için p∨¬q = 1, sonuç 1 → 0 = 0 olur. Toplam 2 tane 1 vardır.', 2, 'Çıkmış soru 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c10', 'ayrik', 'ay-u1', 1, 'mcq', 'original', '(p∨¬q)→q önermesi için oluşturulan doğruluk tablosunda sonuç sütununda kaç tane 0 vardır?', '{"choices":["1","2","0","3"]}', '{"index":1}', 'q = 0 olan iki satırda hipotez p∨¬q = 1 ve sonuç q = 0 olduğundan ifade 0''dır.', 2, 'Çıkmış soru 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c11', 'ayrik', 'ay-u1', 1, 'mcq', 'original', '(p∨¬q)→q önermesi için oluşturulan doğruluk tablosunda kaç satır vardır?', '{"choices":["2","4","8","16"]}', '{"index":1}', 'İfadede iki farklı önerme değişkeni (p, q) var. n değişkenli tabloda 2ⁿ satır olur: 2² = 4.', 1, 'Çıkmış soru 11', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c12', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'p→(q∨r) önermesi için oluşturulan doğruluk tablosunda kaç satır vardır?', '{"choices":["4","8","16","2"]}', '{"index":1}', 'Üç değişken (p, q, r) olduğu için 2³ = 8 satır vardır.', 1, 'Çıkmış soru 12', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c13', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'p→(q∨r) önermesi için oluşturulan doğruluk tablosunda sonuç sütununda kaç tane 1 vardır?', '{"choices":["5","1","3","7"]}', '{"index":3}', 'İfade yalnız p = 1, q = 0, r = 0 satırında 0''dır; diğer 7 satır 1''dir.', 2, 'Çıkmış soru 13', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c14', 'ayrik', 'ay-u1', 1, 'mcq', 'original', '(p→q)∨r önermesi için oluşturulan doğruluk tablosunda sonuç sütununda kaç tane 1 vardır?', '{"choices":["5","3","1","7"]}', '{"index":3}', 'Veya yalnız iki taraf da 0 iken 0''dır: r = 0 ve p→q = 0 (p = 1, q = 0). Bu tek satır dışında 7 satır 1''dir.', 2, 'Çıkmış soru 14', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c15', 'ayrik', 'ay-u1', 1, 'mcq', 'original', '(p→q)∧r önermesi için oluşturulan doğruluk tablosunda sonuç sütununda kaç tane 1 vardır?', '{"choices":["7","1","3","5"]}', '{"index":2}', 'r = 1 olan 4 satırda sonuç p→q''ya eşittir; p→q bunların 3''ünde 1''dir (p = 1, q = 0 hariç).', 2, 'Çıkmış soru 15', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c16', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'Aşağıdakilerin hangisi "Benim bir arabam var" önermesinin değilidir?', '{"choices":["Benim arabam var mı?","Benim iki arabam var.","Benim arabam yok.","Benim çok arabam var."]}', '{"index":2}', 'Değil, önermenin doğruluk değerini tersine çevirir: "Benim arabam yok". Soru cümlesi önerme bile değildir.', 1, 'Çıkmış soru 16', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c17', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'Aşağıdakilerin hangisi "11''in karesi 121''dir" önermesinin değilidir?', '{"choices":["11''in karesi 121 değildir.","11''in kare kökü 121 değildir.","121''in kare kökü 11''dir.","121''in karesi 11''dir."]}', '{"index":0}', 'Değil, aynı iddianın yanlış olduğunu söyler: "11''in karesi 121 değildir". Başka bir iddia kurmak değil almak değildir.', 1, 'Çıkmış soru 17', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c18', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'Aşağıdakilerin hangisi "Konya karasal iklime sahiptir" önermesinin değilidir?', '{"choices":["Konya nemli iklime sahiptir.","Konya deniz iklimine sahip değildir.","Konya karasal iklime sahip değildir.","Konya tropikal iklime sahip değildir."]}', '{"index":2}', 'Değili "Konya karasal iklime sahip değildir" olur. Başka bir iklim söylemek değil almak değildir.', 1, 'Çıkmış soru 18', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c19', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'p ve q aşağıdaki önermeler olsun. p: "Saatte 90 km''nin üzerinde hız yaptınız" q: "Kırmızı ışıkta geçtiniz" p∧¬q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?', '{"choices":["Ne saatte 90 km''nin üzerinde hız yaptınız ne de kırmızı ışıkta geçtiniz.","Hem saatte 90 km''nin üzerinde hız yaptınız hem de kırmızı ışıkta geçtiniz.","Saatte 90 km''nin üzerinde hız yaptınız ama kırmızı ışıkta geçmediniz.","Hızınız normal ama kırmızı ışıkta geçtiniz."]}', '{"index":2}', 'p doğru, q''nun değili doğru: hız yaptınız ama kırmızı ışıkta geçmediniz. Türkçede "ama" da ve bağlacıdır.', 1, 'Çıkmış soru 19', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c20', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'p ve q aşağıdaki önermeler olsun. p: "Saatte 90 km''nin üzerinde hız yaptınız" q: "Kırmızı ışıkta geçtiniz" ¬p∧q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?', '{"choices":["Saatte 90 km''nin üzerinde hız yaptınız ama kırmızı ışıkta geçmediniz.","Ne saatte 90 km''nin üzerinde hız yaptınız ne de kırmızı ışıkta geçtiniz.","Hem saatte 90 km''nin üzerinde hız yaptınız hem de kırmızı ışıkta geçtiniz.","Hızınız saatte 90 km''nin üzerinde değil ama kırmızı ışıkta geçtiniz."]}', '{"index":3}', 'p''nin değili ve q: hızınız 90 km''nin üzerinde değil ama kırmızı ışıkta geçtiniz.', 1, 'Çıkmış soru 20', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c21', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'p ve q aşağıdaki önermeler olsun. p: "Saatte 90 km''nin üzerinde hız yaptınız" q: "Kırmızı ışıkta geçtiniz" ¬p∧¬q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?', '{"choices":["Hem saatte 90 km''nin üzerinde hız yaptınız hem de kırmızı ışıkta geçtiniz.","Hızınız saatte 90 km''nin üzerinde değil ama kırmızı ışıkta geçtiniz.","Saatte 90 km''nin üzerinde hız yaptınız ama kırmızı ışıkta geçmediniz.","Ne saatte 90 km''nin üzerinde hız yaptınız ne de kırmızı ışıkta geçtiniz."]}', '{"index":3}', 'İki önermenin de değili: ne hız yaptınız ne de kırmızı ışıkta geçtiniz.', 1, 'Çıkmış soru 21', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c22', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'p ve q aşağıdaki önermeler olsun. p: "Saatte 90 km''nin üzerinde hız yaptınız" q: "Kırmızı ışıkta geçtiniz" p∧q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?', '{"choices":["Saatte 90 km''nin üzerinde hız yaptınız ama kırmızı ışıkta geçmediniz.","Hem saatte 90 km''nin üzerinde hız yaptınız hem de kırmızı ışıkta geçtiniz.","Hızınız normal ama kırmızı ışıkta geçtiniz.","Ne saatte 90 km''nin üzerinde hız yaptınız ne de kırmızı ışıkta geçtiniz."]}', '{"index":1}', 'Ve bağlacı: hem hız yaptınız hem de kırmızı ışıkta geçtiniz.', 1, 'Çıkmış soru 22', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c23', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'p ve q aşağıdaki önermeler olsun. p: "Bu hafta piyango bileti aldım" q: "Bu hafta piyangodan tam ikramiye kazandım" p∧¬q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?', '{"choices":["Bu hafta ne piyango bileti aldım ne de tam ikramiye kazandım.","Bu hafta piyango bileti aldım, ama ikramiye kazanamadım.","Bu hafta piyango bileti aldım ve tam ikramiye kazandım.","Bu hafta piyango bileti almamama rağmen tam ikramiye kazandım."]}', '{"index":1}', 'Bilet aldım (p) ama ikramiye kazanamadım (¬q).', 1, 'Çıkmış soru 23', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c24', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'p ve q aşağıdaki önermeler olsun. p: "Bu hafta piyango bileti aldım" q: "Bu hafta piyangodan tam ikramiye kazandım" ¬p∧¬q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?', '{"choices":["Bu hafta ne piyango bileti aldım ne de tam ikramiye kazandım.","Bu hafta piyango bileti aldım, ama ikramiye kazanamadım.","Bu hafta piyango bileti aldım ve tam ikramiye kazandım.","Bu hafta piyango bileti almamama rağmen tam ikramiye kazandım."]}', '{"index":0}', 'İki önermenin de değili: ne bilet aldım ne de ikramiye kazandım.', 1, 'Çıkmış soru 24', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c25', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'p ve q aşağıdaki önermeler olsun. p: "Bu hafta piyango bileti aldım" q: "Bu hafta piyangodan tam ikramiye kazandım" p∧q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?', '{"choices":["Bu hafta piyango bileti aldım ve tam ikramiye kazandım.","Bu hafta piyango bileti aldım, ama ikramiye kazanamadım.","Bu hafta ne piyango bileti aldım ne de tam ikramiye kazandım.","Bu hafta piyango bileti almamama rağmen tam ikramiye kazandım."]}', '{"index":0}', 'Bilet aldım ve tam ikramiye kazandım.', 1, 'Çıkmış soru 25', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c26', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'Aşağıdaki cümlelerin kaç tanesi önermedir? "Konya Türkiye''nin en kalabalık ilidir."; "Adın ne?"; "Bu soru doğru mu?"; "3+2>4".', '{"choices":["3","4","2","1"]}', '{"index":2}', 'Önerme doğru ya da yanlış olan bildirme cümlesidir. "Konya en kalabalık ildir" (yanlış da olsa) ve "3+2>4" (doğru) önermedir; iki soru cümlesi önerme değildir.', 2, 'Çıkmış soru 26', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-c27', 'ayrik', 'ay-u1', 1, 'mcq', 'original', 'Aşağıdaki cümlelerin kaç tanesi önermedir? "Git buradan"; "Saat kaç?"; "4+x=7"; "5>9".', '{"choices":["2","4","3","1"]}', '{"index":3}', 'Yalnız "5>9" önermedir (yanlış). Emir ve soru cümleleri önerme değildir; "4+x=7" x''e değer verilmedikçe doğru ya da yanlış değildir.', 2, 'Çıkmış soru 27', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k1', 'ayrik', 'ay-u1', 1, 'yaz', 'original', 'Aşağıdaki cümlelerin hangileri önermedir? Önerme olanların doğruluk değerleri nelerdir?

a) Sofya, Bulgaristan''ın başkentidir.
b) Milano, İtalya''nın başkentidir.
c) 2 + 3 = 5.
d) 5 + 7 = 10.
e) x + 2 = 11.
f) Bu soruyu cevaplayınız.', '{}', '{}', 'a) Önerme, doğru.
b) Önerme, yanlış (başkent Roma).
c) Önerme, doğru.
d) Önerme, yanlış.
e) Önerme değil: doğruluğu x''in değerine bağlı.
f) Önerme değil: emir cümlesi.', 1, 'Rosen 1.1, alıştırma 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k3', 'ayrik', 'ay-u1', 1, 'yaz', 'original', 'Şıklardaki ifadelerin her birinin değilini yazınız.

a) Maya''nın bir MP3 çaları vardır.
b) İzmir''de hiç hava kirliliği yoktur.
c) 2 + 1 = 3.
d) Kars''ta yaz sıcak ve güneşlidir.', '{}', '{}', 'a) Maya''nın bir MP3 çaları yoktur.
b) İzmir''de hava kirliliği vardır.
c) 2 + 1 ≠ 3.
d) Kars''ta yaz sıcak değildir ya da güneşli değildir. ("sıcak ve güneşli"nin değili "sıcak değil veya güneşli değil"dir.)', 1, 'Rosen 1.1, alıştırma 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k7c', 'ayrik', 'ay-u1', 1, 'tf', 'original', 'Arkın Bilgisayar''ın senelik satışları 138, Nadir Yazılım''ın 87, Hızlı Yayıncılık''ın 111 milyon liradır; net karları sırasıyla 8, 5 ve 13 milyon liradır.

"Arkın Bilgisayar en fazla satış rakamını elde etmiştir veya Hızlı Yayıncılık en fazla satış rakamını elde etmiştir." önermesi doğrudur.', '{}', '{"value":true}', 'Doğru. En fazla satış Arkın''ın (138); veya bağlacında bir tarafın doğru olması yeter.', 1, 'Rosen 1.1, alıştırma 7c', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k7e', 'ayrik', 'ay-u1', 1, 'tf', 'original', 'Arkın Bilgisayar''ın senelik satışları 138, Nadir Yazılım''ın 87, Hızlı Yayıncılık''ın 111 milyon liradır; net karları sırasıyla 8, 5 ve 13 milyon liradır.

"Ancak ve ancak Arkın Bilgisayar''ın en fazla satış rakamını elde ettiği durumda Nadir Yazılım en düşük net karı elde etmiştir." önermesi doğrudur.', '{}', '{"value":true}', 'Doğru. İki taraf da doğru (Arkın en fazla satış, Nadir en düşük kar 5); çift şartlı ifade iki taraf aynı değerde iken doğrudur.', 2, 'Rosen 1.1, alıştırma 7e', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k9', 'ayrik', 'ay-u1', 1, 'yaz', 'original', 'p ve q sırasıyla "Mersin sahilinde yüzmeye izin verilmektedir." ve "Sahil yakınlarında köpekbalıklarına rastlanmıştır." önermeleri olsun. Aşağıdaki önermeleri birer Türkçe cümle olarak yazınız.

a) ¬q
b) p ∧ q
c) ¬p ∨ q
d) p → ¬q
e) ¬q → p
f) ¬p → ¬q
g) p ↔ ¬q
h) ¬p ∧ (p ∨ ¬q)', '{}', '{}', 'a) Sahil yakınlarında köpekbalıklarına rastlanmamıştır.
b) Mersin sahilinde yüzmeye izin verilmektedir ve sahil yakınlarında köpekbalıklarına rastlanmıştır.
c) Mersin sahilinde yüzmeye izin verilmemektedir veya köpekbalıklarına rastlanmıştır.
d) Yüzmeye izin veriliyorsa köpekbalıklarına rastlanmamıştır.
e) Köpekbalıklarına rastlanmadıysa yüzmeye izin verilmektedir.
f) Yüzmeye izin verilmiyorsa köpekbalıklarına rastlanmamıştır.
g) Yüzmeye ancak ve ancak köpekbalıklarına rastlanmadıysa izin verilmektedir.
h) Yüzmeye izin verilmemektedir ve ya yüzmeye izin verilmektedir ya da köpekbalıklarına rastlanmamıştır.', 2, 'Rosen 1.1, alıştırma 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k11', 'ayrik', 'ay-u1', 1, 'fill', 'original', 'p: "Şu anda sıcaklık donma derecesinin altındadır." q: "Kar yağmaktadır." Aşağıdakileri p, q ve mantıksal bağlayıcılarla yazınız.

a) Şu anda sıcaklık donma derecesinin altındadır fakat kar yağmamaktadır.
b) Şu anda sıcaklık donma derecesinin altında değildir ve kar yağmamaktadır.
c) Eğer şu anda sıcaklık donma derecesinin altında ise aynı zamanda kar yağmaktadır.

Boşluk 1: a), Boşluk 2: b), Boşluk 3: c)', '{"blanks":3,"semboller":true}', '{"blanks":[["p ∧ ¬q","¬q ∧ p"],["¬p ∧ ¬q","¬q ∧ ¬p"],["p → q"]]}', 'a) p ∧ ¬q ("fakat" ve demektir). b) ¬p ∧ ¬q. c) p → q.', 2, 'Rosen 1.1, alıştırma 11', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k13', 'ayrik', 'ay-u1', 1, 'fill', 'original', 'p: "Saatte 100 km''nin üzerinde hız yaptınız." q: "Aşırı hızdan ötürü trafik cezası aldınız." Aşağıdakileri p, q ve mantıksal bağlayıcılarla yazınız.

e) Saatte 100 km''nin üzerinde hız yapmanız aşırı hızdan ötürü trafik cezası almanız için yeterlidir.
f) Aşırı hızdan ötürü trafik cezası aldınız, fakat saatte 100 km''nin üzerinde hız yapmadınız.
g) Aşırı hızdan ötürü trafik cezası aldığınız her zaman saatte 100 km''nin üzerinde hız yapmıştınız.

Boşluk 1: e), Boşluk 2: f), Boşluk 3: g)', '{"blanks":3,"semboller":true}', '{"blanks":[["p → q"],["q ∧ ¬p","¬p ∧ q"],["q → p"]]}', 'e) "p, q için yeterlidir" p → q demektir. f) q ∧ ¬p. g) "q olduğu her zaman p" q → p demektir.', 2, 'Rosen 1.1, alıştırma 13', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k15e', 'ayrik', 'ay-u1', 1, 'fill', 'original', 'p: "Bu bölgede boz ayılara rastlanmıştır." q: "Patikada yürüyüş yapmak güvenlidir." r: "Patika boyunca taze böğürtlenler bulunmaktadır."

"Patikada yürüyüş yapmanın güvenli olması için, patika boyunca taze böğürtlenler bulunması ve bu bölgede boz ayılara rastlanmamış olması gereklidir, fakat yeterli değildir." önermesini p, q, r ile yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["(q → (¬p ∧ r)) ∧ ¬((¬p ∧ r) → q)","(q → (r ∧ ¬p)) ∧ ¬((r ∧ ¬p) → q)"]]}', '"A, q için gereklidir" q → A, "yeterli değildir" ¬(A → q) demektir. A = ¬p ∧ r olduğundan cevap (q → (¬p ∧ r)) ∧ ¬((¬p ∧ r) → q).', 3, 'Rosen 1.1, alıştırma 15e', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k17', 'ayrik', 'ay-u1', 1, 'fill', 'original', 'Aşağıdaki şartlı önermelerin doğru (D) mu yanlış (Y) mı olduklarını belirleyiniz.

a) Eğer 1 + 1 = 2 ise, 2 + 2 = 5.
b) Eğer 1 + 1 = 3 ise, 2 + 2 = 4.
c) Eğer 1 + 1 = 3 ise, 2 + 2 = 5.
d) Eğer maymunlar uçabilir ise, 1 + 1 = 3.

Boşluk 1: a), Boşluk 2: b), Boşluk 3: c), Boşluk 4: d)', '{"blanks":4}', '{"blanks":[["Y","yanlış"],["D","doğru"],["D","doğru"],["D","doğru"]]}', 'Şartlı ifade yalnız hipotez doğru, sonuç yanlış iken yanlıştır. Bu yalnız a)''da olur. b, c ve d''de hipotez yanlış olduğu için ifade doğrudur.', 2, 'Rosen 1.1, alıştırma 17', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k19', 'ayrik', 'ay-u1', 1, 'yaz', 'original', 'Aşağıdaki her cümle için içleyen veya ya da dışlayan veya kalıplarından hangisinin kullanıldığını belirtiniz. Cevabınızı açıklayınız.

a) Yemeğin yanında kahve ya da çay alabilirsiniz.
b) Kullanacağınız şifre en azından üç basamak içermeli veya en azından sekiz karakter uzunluğunda olmalı.
c) Bu dersin önkoşulu sayı teorisi veya kriptoloji üzerine bir derstir.
d) Ücreti Dolar veya Euro ile ödeyebilirsiniz.', '{}', '{}', 'a) Dışlayan veya: yemekle birlikte iki içecekten yalnız biri verilir.
b) İçleyen veya: şifre iki şartı birden sağlarsa da kabul edilir.
c) İçleyen veya: iki dersi de almış öğrenci önkoşulu sağlar.
d) Dışlayan veya: ödeme iki para birimiyle birden yapılmaz.', 2, 'Rosen 1.1, alıştırma 19', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k23', 'ayrik', 'ay-u1', 1, 'yaz', 'original', 'Aşağıdaki cümleleri "Eğer p ise q" biçiminde yazınız.

a) Rüzgar kuzeydoğudan estiği zaman kar yağar.
d) Erciyes dağının zirvesine ulaşmak için 8 km yürümek gerekmektedir.
e) Kadrolu profesör ünvanı kazanmak için dünya çapında olmak yeterlidir.
h) Can su çok soğuk değilse yüzmeye gidecek.', '{}', '{}', 'a) Eğer rüzgar kuzeydoğudan eserse kar yağar.
d) Eğer zirveye ulaştıysanız 8 km yürümüşsünüzdür. ("q için p gereklidir" → eğer q ise p.)
e) Eğer dünya çapındaysanız kadrolu profesör ünvanı kazanırsınız. ("p, q için yeterlidir" → eğer p ise q.)
h) Eğer su çok soğuk değilse Can yüzmeye gidecek.', 2, 'Rosen 1.1, alıştırma 23', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k27', 'ayrik', 'ay-u1', 1, 'yaz', 'original', 'Aşağıdaki şartlı cümlelerin karşıt, zıt-pozitif ve ters gösterimlerini belirtiniz.

a) Eğer bugün kar yağarsa, yarın kayağa gideceğim.
b) Ne zaman kısa sınav yapılıyor olsa hep sınıfa gelirim.', '{}', '{}', 'a) Karşıt: Yarın kayağa gidersem bugün kar yağmıştır. Zıt-pozitif: Yarın kayağa gitmezsem bugün kar yağmamıştır. Ters: Bugün kar yağmazsa yarın kayağa gitmeyeceğim.
b) (p: kısa sınav var, q: sınıfa gelirim, p → q.) Karşıt: Sınıfa geldiğimde kısa sınav vardır. Zıt-pozitif: Sınıfa gelmezsem kısa sınav yoktur. Ters: Kısa sınav yoksa sınıfa gelmem.', 2, 'Rosen 1.1, alıştırma 27', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k29', 'ayrik', 'ay-u1', 1, 'fill', 'original', 'Aşağıdaki bileşik önermelerin her biri için oluşturulan doğruluk tablosunda kaç satır yer alacaktır?

a) p → ¬p
b) (p ∨ ¬r) ∧ (q ∨ ¬s)
c) q ∨ p ∨ ¬s ∨ ¬r ∨ ¬t ∨ u
d) (p ∧ r ∧ t) ↔ (q ∧ t)

Boşluk 1: a), Boşluk 2: b), Boşluk 3: c), Boşluk 4: d)', '{"blanks":4}', '{"blanks":[["2"],["16"],["64"],["16"]]}', 'Satır sayısı 2^(farklı değişken sayısı)''dır. a) 1 değişken: 2. b) p, q, r, s: 16. c) 6 değişken: 64. d) p, q, r, t: 16.', 1, 'Rosen 1.1, alıştırma 29', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k31c', 'ayrik', 'ay-u1', 1, 'fill', 'original', '(p ∨ ¬q) → q önermesinin doğruluk tablosunu oluşturunuz. Satırlar sırasıyla (p, q) = (D, D), (D, Y), (Y, D), (Y, Y) iken sonuç sütununu D/Y olarak yazınız.

Boşluk 1: (D, D), Boşluk 2: (D, Y), Boşluk 3: (Y, D), Boşluk 4: (Y, Y)', '{"blanks":4}', '{"blanks":[["D","1","doğru"],["Y","0","yanlış"],["D","1","doğru"],["Y","0","yanlış"]]}', 'q doğruyken şartlı ifade doğrudur. q yanlışken ¬q doğru, hipotez p ∨ ¬q doğru, sonuç yanlış olduğundan ifade yanlıştır. Sonuç sütunu q ile aynıdır.', 2, 'Rosen 1.1, alıştırma 31c', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k31f', 'ayrik', 'ay-u1', 1, 'yaz', 'original', '(p → q) → (q → p) önermesi için bir doğruluk tablosu oluşturunuz.', '{}', '{}', '| p | q | p → q | q → p | (p → q) → (q → p) |
|---|---|---|---|---|
| D | D | D | D | D |
| D | Y | Y | D | D |
| Y | D | D | Y | Y |
| Y | Y | D | D | D |

İfade yalnız p yanlış, q doğru iken yanlıştır.', 2, 'Rosen 1.1, alıştırma 31f', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-k37a', 'ayrik', 'ay-u1', 1, 'yaz', 'original', 'p → (¬q ∨ r) önermesi için bir doğruluk tablosu oluşturunuz.', '{}', '{}', '| p | q | r | ¬q ∨ r | p → (¬q ∨ r) |
|---|---|---|---|---|
| D | D | D | D | D |
| D | D | Y | Y | Y |
| D | Y | D | D | D |
| D | Y | Y | D | D |
| Y | D | D | D | D |
| Y | D | Y | Y | D |
| Y | Y | D | D | D |
| Y | Y | Y | D | D |

Yalnız p = D, q = D, r = Y satırı yanlıştır.', 2, 'Rosen 1.1, alıştırma 37a', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-onerme-tanim', 'ayrik', 'ay-u1', 1, 'fill', 'derived', 'Doğru ya da yanlış olan, ama ikisi birden olmayan bildirme cümlesine ____ denir.', '{"blanks":1}', '{"blanks":[["önerme"]]}', 'Kitaptaki tanım: önerme, ya doğru ya da yanlış olan bildirme cümlesidir.', 1, '1. ünite, Önerme ve doğruluk değeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-x-arti', 'ayrik', 'ay-u1', 1, 'tf', 'derived', '"x + 1 = 2" cümlesi bir önermedir.', '{}', '{"value":false}', 'Yanlış. x''e değer verilmedikçe cümle ne doğru ne yanlıştır; bu yüzden önerme değildir.', 1, '1. ünite, Önerme ve doğruluk değeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-bilesik', 'ayrik', 'ay-u1', 1, 'mcq', 'derived', 'Var olan önermelerden mantık operatörleriyle oluşturulan yeni önermelere ne ad verilir?', '{"choices":["Bileşik önerme","Atomik önerme","Yüklem","Aksiyom"]}', '{"index":0}', 'Mantık operatörleriyle birleştirilerek kurulan önermeler bileşik önermedir; daha basit önermelerle ifade edilemeyenler atomik önermedir.', 1, '1. ünite, Önerme ve doğruluk değeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-ve-dogru', 'ayrik', 'ay-u1', 1, 'mcq', 'derived', 'p ∧ q bileşik önermesi ne zaman doğrudur?', '{"choices":["p ve q''nun ikisi de doğru olduğunda","p ya da q''dan en az biri doğru olduğunda","p ve q''dan tam biri doğru olduğunda","p ve q''nun ikisi de yanlış olduğunda"]}', '{"index":0}', 'Birleşme (ve) yalnızca iki önerme de doğruyken doğrudur.', 1, '1. ünite, Değil, ve, veya, dışlayıcı veya', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-veya-yanlis', 'ayrik', 'ay-u1', 1, 'mcq', 'derived', 'p ∨ q bileşik önermesi ne zaman yanlıştır?', '{"choices":["p ve q''nun ikisi de yanlış olduğunda","p ve q''nun ikisi de doğru olduğunda","p doğru ve q yanlış olduğunda","p ve q''dan tam biri doğru olduğunda"]}', '{"index":0}', 'Ayrılma (veya) yalnızca iki önerme de yanlışken yanlıştır.', 1, '1. ünite, Değil, ve, veya, dışlayıcı veya', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-xor', 'ayrik', 'ay-u1', 1, 'fill', 'derived', 'p ⊕ q (dışlayıcı veya) yalnızca p ve q''dan ____ doğru olduğunda doğrudur. (bir sayı yazınız)

Boşluk 1: kaç tanesi', '{"blanks":1}', '{"blanks":[["1","bir","tam bir","biri"]]}', 'Dışlayıcı veya, önermelerden tam biri doğruyken doğrudur; ikisi birden doğruysa yanlıştır.', 2, '1. ünite, Değil, ve, veya, dışlayıcı veya', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-xor-tf', 'ayrik', 'ay-u1', 1, 'tf', 'derived', 'p ve q''nun ikisi de doğru ise p ⊕ q doğrudur.', '{}', '{"value":false}', 'Yanlış. Dışlayıcı veya iki önerme de doğruyken yanlıştır; içleyen veya (∨) ise bu durumda doğrudur.', 1, '1. ünite, Değil, ve, veya, dışlayıcı veya', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-ama', 'ayrik', 'ay-u1', 1, 'tf', 'derived', 'Mantıkta "fakat" ve "ama" bağlaçları ve (∧) ile gösterilir.', '{}', '{"value":true}', 'Doğru. "Güneş parlıyor fakat yağmur yağıyor" p ∧ q ile yazılır.', 1, '1. ünite, Değil, ve, veya, dışlayıcı veya', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-degil-sembol', 'ayrik', 'ay-u1', 1, 'fill', 'derived', 'p önermesinin değili hangi sembolle yazılır? ("p" ile birlikte yazınız)', '{"blanks":1,"semboller":true}', '{"blanks":[["¬p","p̄"]]}', 'Değil ¬p (bazen p üzerine çizgi) ile gösterilir; "p değildir" diye okunur.', 1, '1. ünite, Değil, ve, veya, dışlayıcı veya', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-sartli-yanlis', 'ayrik', 'ay-u1', 1, 'mcq', 'derived', 'p → q şartlı ifadesi hangi durumda yanlıştır?', '{"choices":["p doğru, q yanlış","p yanlış, q doğru","p yanlış, q yanlış","p doğru, q doğru"]}', '{"index":0}', 'Şartlı ifade yalnızca hipotez doğru ve sonuç yanlışken yanlıştır.', 1, '1. ünite, Şartlı ifade ve çift şartlı ifade', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-hipotez', 'ayrik', 'ay-u1', 1, 'fill', 'derived', 'p → q şartlı ifadesinde p''ye ____, q''ya ise sonuç denir.', '{"blanks":1}', '{"blanks":[["hipotez","öncül","önerme hipotezi"]]}', 'p hipotez (öncül), q sonuçtur.', 1, '1. ünite, Şartlı ifade ve çift şartlı ifade', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-sadece-ise', 'ayrik', 'ay-u1', 1, 'mcq', 'derived', '"p sadece q ise" ifadesi aşağıdakilerden hangisine karşılık gelir?', '{"choices":["p → q","q → p","p ↔ q","¬p → q"]}', '{"index":0}', '"p sadece q ise" p''nin q olmadan doğru olamayacağını söyler: p → q. Sık yapılan hata bunu q → p sanmaktır.', 2, '1. ünite, Şartlı ifade ve çift şartlı ifade', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-gerekli', 'ayrik', 'ay-u1', 1, 'mcq', 'derived', '"q, p için gereklidir" ifadesi hangi şartlı ifadeye karşılık gelir?', '{"choices":["p → q","q → p","¬p → ¬q","p ∧ q"]}', '{"index":0}', 'p doğruysa q''nun da doğru olması gerekir: p → q. "p, q için yeterlidir" de aynı ifadedir.', 2, '1. ünite, Şartlı ifade ve çift şartlı ifade', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-cift-sartli', 'ayrik', 'ay-u1', 1, 'mcq', 'derived', 'p ↔ q çift şartlı ifadesi ne zaman doğrudur?', '{"choices":["p ve q aynı doğruluk değerine sahipken","p ve q farklı doğruluk değerine sahipken","Yalnızca p doğruyken","Yalnızca q yanlışken"]}', '{"index":0}', 'Çift şartlı ifade iki tarafın değeri aynıyken doğrudur; (p → q) ∧ (q → p) ile aynı değeri taşır.', 1, '1. ünite, Şartlı ifade ve çift şartlı ifade', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-hipotez-yanlis', 'ayrik', 'ay-u1', 1, 'tf', 'derived', '"Eğer 2 + 2 = 5 ise, Ay peynirden yapılmıştır." önermesi doğrudur.', '{}', '{"value":true}', 'Doğru. Hipotez yanlış olduğu için şartlı ifade sonucun değerinden bağımsız olarak doğrudur. Matematiksel şartlı ifadede hipotez ile sonuç arasında anlam bağı aranmaz.', 2, '1. ünite, Şartlı ifade ve çift şartlı ifade', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-yazilim-if', 'ayrik', 'ay-u1', 1, 'fill', 'derived', 'x = 2 iken "if 2 + 2 = 4 then x := x + 1" ifadesi çalıştıktan sonra x''in değeri kaçtır?', '{"blanks":1}', '{"blanks":[["3"]]}', '2 + 2 = 4 doğru olduğu için atama yapılır: x = 3.', 2, '1. ünite, Şartlı ifade ve çift şartlı ifade', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-zit-denk', 'ayrik', 'ay-u1', 1, 'mcq', 'derived', 'p → q ile her zaman aynı doğruluk değerine sahip olan (denk olan) ifade hangisidir?', '{"choices":["Zıt-pozitifi ¬q → ¬p","Karşıtı q → p","Tersi ¬p → ¬q","Çift şartlısı p ↔ q"]}', '{"index":0}', 'Bir şartlı ifade yalnızca zıt-pozitifine denktir. Karşıt ve ters birbirine denktir ama asıl ifadeye denk değildir.', 1, '1. ünite, Karşıt, ters ve zıt-pozitif', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-karsit-ters', 'ayrik', 'ay-u1', 1, 'tf', 'derived', 'Bir şartlı ifadenin karşıtı ile tersi birbirine denktir.', '{}', '{"value":true}', 'Doğru. Tersi ¬p → ¬q, karşıtın (q → p) zıt-pozitifidir; bu yüzden ikisi denktir.', 2, '1. ünite, Karşıt, ters ve zıt-pozitif', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-ters-sembol', 'ayrik', 'ay-u1', 1, 'fill', 'derived', 'p → q şartlı ifadesinin karşıtı, zıt-pozitifi ve tersi nedir?

Boşluk 1: karşıt, Boşluk 2: zıt-pozitif, Boşluk 3: ters', '{"blanks":3,"semboller":true}', '{"blanks":[["q → p"],["¬q → ¬p"],["¬p → ¬q"]]}', 'Karşıt q → p, zıt-pozitif ¬q → ¬p, ters ¬p → ¬q''dur.', 1, '1. ünite, Karşıt, ters ve zıt-pozitif', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-takim', 'ayrik', 'ay-u1', 1, 'yaz', 'derived', '"Takım kazanırsa, yağmur yağıyordur" ifadesinin karşıtını, zıt-pozitifini ve tersini yazınız. Hangisi asıl ifadeyle denktir?', '{}', '{}', 'Karşıt: Yağmur yağıyorsa takım kazanır.
Zıt-pozitif: Yağmur yağmıyorsa takım kazanmaz.
Ters: Takım kazanmazsa yağmur yağmıyordur.
Yalnız zıt-pozitif asıl ifadeyle denktir.', 2, '1. ünite, Karşıt, ters ve zıt-pozitif', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-oncelik', 'ayrik', 'ay-u1', 1, 'mcq', 'derived', 'Mantık operatörlerinin öncelik sırası (en yüksekten en düşüğe) hangisidir?', '{"choices":["¬, ∧, ∨, →, ↔","∧, ∨, ¬, →, ↔","¬, ∨, ∧, ↔, →","→, ↔, ¬, ∧, ∨"]}', '{"index":0}', 'Önce değil, sonra ve, sonra veya, en son şartlı ve çift şartlı işlenir.', 2, '1. ünite, Doğruluk tabloları ve işlem önceliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-oncelik-ornek', 'ayrik', 'ay-u1', 1, 'fill', 'derived', 'Öncelik kurallarına göre p ∨ q → ¬r ifadesi parantezlerle nasıl yazılır?', '{"blanks":1,"semboller":true}', '{"blanks":[["(p ∨ q) → ¬r"]]}', '∨, →''den önce işlenir: (p ∨ q) → ¬r.', 2, '1. ünite, Doğruluk tabloları ve işlem önceliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-satir-n', 'ayrik', 'ay-u1', 1, 'fill', 'derived', 'n farklı önerme değişkeni içeren bir bileşik önermenin doğruluk tablosunda kaç satır vardır? (n ile yazınız)', '{"blanks":1}', '{"blanks":[["2^n","2ⁿ","2 üzeri n"]]}', 'Her değişken iki değer aldığı için 2ⁿ satır olur.', 1, '1. ünite, Doğruluk tabloları ve işlem önceliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-tablo-ornek', 'ayrik', 'ay-u1', 1, 'yaz', 'derived', '(p ∨ ¬q) → (p ∧ q) bileşik önermesinin doğruluk tablosunu oluşturunuz.', '{}', '{}', '| p | q | ¬q | p ∨ ¬q | p ∧ q | (p ∨ ¬q) → (p ∧ q) |
|---|---|---|---|---|---|
| D | D | Y | D | D | D |
| D | Y | D | D | Y | Y |
| Y | D | Y | Y | Y | D |
| Y | Y | D | D | Y | Y |', 2, '1. ünite, Doğruluk tabloları ve işlem önceliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-bit-ve', 'ayrik', 'ay-u1', 1, 'fill', 'derived', '01 1011 0110 ve 11 0001 1101 bit dizileri için bit düzeyinde VE (AND) sonucu nedir? (boşluksuz yazabilirsiniz)', '{"blanks":1}', '{"blanks":[["0100010100","01 0001 0100"]]}', 'Her basamakta iki bit de 1 ise 1 yazılır: 01 0001 0100.', 2, '1. ünite, Bit işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-bit-veya', 'ayrik', 'ay-u1', 1, 'fill', 'derived', '01 1011 0110 ve 11 0001 1101 bit dizileri için bit düzeyinde VEYA (OR) sonucu nedir?', '{"blanks":1}', '{"blanks":[["1110111111","11 1011 1111"]]}', 'Her basamakta en az bir bit 1 ise 1 yazılır: 11 1011 1111.', 2, '1. ünite, Bit işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-bit-xor', 'ayrik', 'ay-u1', 1, 'fill', 'derived', '01 1011 0110 ve 11 0001 1101 bit dizileri için bit düzeyinde XOR sonucu nedir?', '{"blanks":1}', '{"blanks":[["1010101011","10 1010 1011"]]}', 'Bitler farklıysa 1, aynıysa 0 yazılır: 10 1010 1011.', 2, '1. ünite, Bit işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u1-t-bit-tanim', 'ayrik', 'ay-u1', 1, 'tf', 'derived', 'Bilgisayarlarda 1 biti doğru (D), 0 biti yanlış (Y) değerini temsil eder.', '{}', '{"value":true}', 'Doğru. Bit, doğruluk değerlerini göstermek için kullanılır: 1 doğru, 0 yanlış.', 1, '1. ünite, Bit işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-k1', 'ayrik', 'ay-u2', 2, 'fill', 'original', '"Eğer bir yönetici değilseniz korunumlu Wikipedia alanlarını güncelleyemezsiniz." cümlesini e: "Bir Wikipedia alanını güncelleyebilirsiniz" ve a: "Siz bir yöneticisiniz" önermeleriyle yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["¬a → ¬e","e → a"]]}', 'Hipotez "yönetici değilsiniz" (¬a), sonuç "güncelleyemezsiniz" (¬e): ¬a → ¬e. Zıt-pozitifi e → a da aynı anlamdadır.', 2, 'Rosen 1.2, alıştırma 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-k3', 'ayrik', 'ay-u2', 2, 'fill', 'original', '"Mezun olabilmeniz için müfredatın tüm gereksinimlerini tamamlamış olmanız, üniversiteye herhangi bir borcunuz olmaması ve kütüphaneden almış olduğunuz tüm kitapların iade edilmiş olması gerekmektedir."

g: "Mezun olabilirsiniz", m: "Üniversiteye borcunuz var", r: "Müfredatın tüm gereksinimlerini tamamlamış durumdasınız", b: "Kütüphaneye iade etmemiş olduğunuz en az bir kitap bulunmaktadır" önermeleriyle yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["g → (r ∧ ¬m ∧ ¬b)","g → (r ∧ ¬b ∧ ¬m)","g → (¬m ∧ r ∧ ¬b)"]]}', '"Mezun olmak için ... gereklidir" g → (şartlar) demektir: g → (r ∧ ¬m ∧ ¬b).', 3, 'Rosen 1.2, alıştırma 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-k7', 'ayrik', 'ay-u2', 2, 'fill', 'original', 'p: "Mesaj virüslere karşı taranır", q: "Mesaj bilinmeyen bir sistemden gönderildi" olsun.

a) Mesaj bilinmeyen bir sistemden gönderildiği zaman virüsler için taranır.
b) Mesaj bilinmeyen bir sistemden gönderildi ancak virüs taramasından geçmedi.
d) Bir mesaj bilinmeyen bir sistemden gönderilmediği zaman virüs taraması yapılmaz.

Boşluk 1: a), Boşluk 2: b), Boşluk 3: d)', '{"blanks":3,"semboller":true}', '{"blanks":[["q → p"],["q ∧ ¬p","¬p ∧ q"],["¬q → ¬p"]]}', 'a) q → p. b) q ∧ ¬p ("ancak" ve demektir). d) ¬q → ¬p.', 2, 'Rosen 1.2, alıştırma 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-k9', 'ayrik', 'ay-u2', 2, 'tf', 'original', '"Sistem ancak ve ancak normal çalışıyorsa çok kullanıcılı durumda olabilir. Sistem normal olarak çalışıyorsa, çekirdek çalışıyor demektir. Çekirdek çalışmıyor veya sistem kesme modunda. Sistem çok kullanıcılı durumda değilse, o zaman kesme modundadır. Sistem kesme modunda değildir."

Bu sistem özellikleri tutarlıdır.', '{}', '{"value":false}', 'Yanlış, tutarsızdır. Son özellikten sistem kesme modunda değil. "Çekirdek çalışmıyor veya kesme modunda" için çekirdek çalışmıyor olmalı; o zaman sistem normal çalışmıyor, dolayısıyla çok kullanıcılı da değil. Bu durumda "çok kullanıcılı değilse kesme modundadır" özelliği kesme modunu gerektirir; çelişki.', 3, 'Rosen 1.2, alıştırma 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-k11', 'ayrik', 'ay-u2', 2, 'yaz', 'original', 'Bu sistem özellikleri tutarlı mı? "Eğer yönlendirici yeni adres alanını destekliyorsa komşu sisteme paketlerini gönderebilir. Yönlendiricinin yeni adres alanını desteklemek için üzerinde son yazılım sürümünün yüklü olması gereklidir. Yönlendiricide en son yazılım sürümü yüklü ise yönlendirici komşu sisteme paketlerini gönderebilir. Yönlendirici yeni adres alanını desteklemiyor."', '{}', '{}', 'a: yeni adres alanını destekler, p: paket gönderebilir, s: son sürüm yüklü olsun. Özellikler: a → p, a → s, s → p, ¬a.

a yanlış olmalı. a yanlışken ilk iki şartlı ifade doğrudur. s → p için örneğin s ve p''yi doğru (ya da ikisini de yanlış) seçmek yeter.

Örnek: a = Y, s = D, p = D bütün özellikleri doğru yapar; özellikler tutarlıdır.', 3, 'Rosen 1.2, alıştırma 11', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-k13', 'ayrik', 'ay-u2', 2, 'yaz', 'original', 'New Jersey plajları hakkındaki Web sayfalarını aramak için hangi Boole aramasını kullanırsınız? İngiliz Kanalı üzerinde bulunan Jersey adası üzerindeki plajlar hakkındaki Web sayfalarını bulmak isterseniz ne yaparsınız?', '{}', '{}', 'New Jersey plajları için: NEW AND JERSEY AND BEACHES (Türkçe: YENİ AND JERSEY AND PLAJ).

Jersey adasındaki plajlar için New Jersey sayfalarını dışlamak gerekir: (JERSEY AND BEACHES) NOT NEW.', 2, 'Rosen 1.2, alıştırma 13', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-k19', 'ayrik', 'ay-u2', 2, 'mcq', 'original', 'Şövalyeler her zaman doğruyu, sahtekarlar her zaman yalan söyler. A "En az birimiz sahtekardır" diyor ve B hiçbir şey söylemiyor. A ve B hangi türdendir?', '{"choices":["A şövalye, B sahtekar","A sahtekar, B şövalye","İkisi de şövalye","İkisi de sahtekar"]}', '{"index":0}', 'A sahtekar olsaydı söylediği yanlış olurdu, yani ikisi de şövalye olurdu; bu A''nın sahtekar olmasıyla çelişir. Demek A şövalye, söylediği doğru, B sahtekardır.', 2, 'Rosen 1.2, alıştırma 19', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-k21', 'ayrik', 'ay-u2', 2, 'mcq', 'original', 'Şövalyeler her zaman doğruyu, sahtekarlar her zaman yalan söyler. A "Ben bir sahtekarım veya B bir şövalyedir" diyor ve B hiçbir şey söylemiyor. A ve B hangi türdendir?', '{"choices":["İkisi de şövalye","A şövalye, B sahtekar","A sahtekar, B şövalye","İkisi de sahtekar"]}', '{"index":0}', 'A sahtekar olsaydı "ben sahtekarım" kısmı doğru olur, cümle doğru olurdu; çelişki. A şövalyedir; o zaman "ben sahtekarım" yanlış olduğundan "B şövalyedir" doğru olmalıdır.', 2, 'Rosen 1.2, alıştırma 21', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-k25', 'ayrik', 'ay-u2', 2, 'yaz', 'original', 'Bir adada her zaman doğruyu söyleyen şövalyeler, her zaman yalan söyleyen sahtekarlar ve doğruyu da yalanı da söyleyebilen casuslar yaşıyor. A, B ve C''den biri şövalye, biri sahtekar, biri casustur. A "Ben şövalyeyim", B "Ben sahtekarım", C "B şövalyedir" diyor. Kim hangi türdendir?', '{}', '{}', 'B şövalye olamaz ("sahtekarım" derse yalan söylemiş olur), sahtekar da olamaz (doğru söylemiş olur). B casustur.

C''nin "B şövalyedir" sözü yanlıştır, yani C şövalye değildir; geriye sahtekar kalır.

A şövalyedir; "Ben şövalyeyim" sözü de doğrudur. Tek çözüm: A şövalye, B casus, C sahtekar.', 3, 'Rosen 1.2, alıştırma 25', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-k37', 'ayrik', 'ay-u2', 2, 'mcq', 'original', 'Birinci kapıdaki tabelada "Bu odada bir kız bulunmaktadır, diğer odada da bir kaplan bulunmaktadır." yazıyor; ikinci kapıdaki tabelada "Odalardan birinde bir kız, diğerinde de bir kaplan vardır." yazıyor. Tabelalardan biri doğru, diğeri yanlıştır. Kız hangi odadadır?', '{"choices":["İkinci odada","Birinci odada","İki odada da","Hiçbir odada"]}', '{"index":0}', 'Birinci tabela doğru olsaydı ikinci tabela da doğru olurdu; ikisi birden doğru olamaz. O halde ikinci tabela doğru, birinci yanlıştır: bir odada kız, diğerinde kaplan var ve kız birinci odada değil. Kız ikinci odadadır.', 3, 'Rosen 1.2, alıştırma 37', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-k42', 'ayrik', 'ay-u2', 2, 'yaz', 'original', 'Tersleyiciler, VEYA kapıları ve VE kapılarını kullanarak p, q ve r bitleri girdi olarak verildiğinde (p ∧ ¬r) ∨ (¬q ∧ r) çıktısı üreten bileşik devreyi tarif ediniz.', '{}', '{}', '1. r''yi bir tersleyiciden geçir: ¬r. p ile ¬r''yi bir VE kapısına ver: p ∧ ¬r.
2. q''yu bir tersleyiciden geçir: ¬q. ¬q ile r''yi ikinci bir VE kapısına ver: ¬q ∧ r.
3. İki VE kapısının çıktısını bir VEYA kapısına ver: (p ∧ ¬r) ∨ (¬q ∧ r).

Toplam: 2 tersleyici, 2 VE kapısı, 1 VEYA kapısı.', 2, 'Rosen 1.2, alıştırma 42', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-film', 'ayrik', 'ay-u2', 2, 'fill', 'derived', '"Filmi sadece 18 yaşından büyükseniz veya anne/babanızdan izin aldıysanız izleyebilirsiniz." cümlesini m: "Filmi izleyebilirsiniz", e: "18 yaşından büyüksünüz", p: "Anne/babanızdan izin aldınız" ile yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["m → (e ∨ p)","m → (p ∨ e)"]]}', '"m sadece A ise" m → A demektir: m → (e ∨ p).', 2, '2. ünite, Cümleleri mantık ifadesine çevirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-hata', 'ayrik', 'ay-u2', 2, 'mcq', 'derived', '"Boyunuz 1,2 metreden kısaysa, 16 yaşından büyük değilseniz hız trenine binemezsiniz." cümlesi q: "Hız trenine binebilirsiniz", r: "Boyunuz 1,2 metreden kısa", s: "16 yaşından büyüksünüz" ile nasıl yazılır?', '{"choices":["(r ∧ ¬s) → ¬q","(r ∨ ¬s) → ¬q","q → (r ∧ ¬s)","(r ∧ s) → q"]}', '{"index":0}', 'Kitaptaki örnek: iki şart birlikte (boy kısa ve 16''dan büyük değil) gerçekleşince binemezsiniz: (r ∧ ¬s) → ¬q.', 2, '2. ünite, Cümleleri mantık ifadesine çevirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-belirsiz', 'ayrik', 'ay-u2', 2, 'tf', 'derived', 'Doğal dildeki cümleler bazen belirsiz olduğundan, onları mantık ifadesine çevirirken cümlenin anlamı hakkında makul varsayımlar yapmak gerekebilir.', '{}', '{"value":true}', 'Doğru. Kitap, çeviride belirsizliği gidermek için anlam üzerine varsayım yapmak gerektiğini vurgular.', 1, '2. ünite, Cümleleri mantık ifadesine çevirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-tutarli-tanim', 'ayrik', 'ay-u2', 2, 'mcq', 'derived', 'Sistem özellikleri hangi durumda tutarlıdır?', '{"choices":["Hepsini aynı anda doğru yapan bir atama varsa","Özelliklerin hepsi şartlı ifade biçimindeyse","Her bir özellik tek başına bir totolojiyse","Hiçbir özellikte değil bağlacı kullanılmıyorsa"]}', '{"index":0}', 'Özellikler, hepsini birden doğru yapan en az bir değer ataması varsa tutarlıdır.', 1, '2. ünite, Sistem özellikleri ve tutarlılık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-tutarsiz', 'ayrik', 'ay-u2', 2, 'tf', 'derived', '"p ∨ q", "¬p" ve "¬q" özelliklerinden oluşan sistem tutarlıdır.', '{}', '{"value":false}', 'Yanlış. ¬p ve ¬q doğru olmak için p ve q yanlış olmalı; o zaman p ∨ q yanlış olur. Hepsini doğru yapan atama yoktur.', 2, '2. ünite, Sistem özellikleri ve tutarlılık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-tutarli-ekle', 'ayrik', 'ay-u2', 2, 'yaz', 'derived', '"Tanılama mesajı tampona kaydedilir veya yeniden gönderilir.", "Tanılama mesajı tampona kaydedilmez.", "Tanılama mesajı tampona kaydedilirse yeniden gönderilir." özellikleri tutarlı mıdır? Sisteme "Tanılama mesajı yeniden gönderilmez." eklenirse ne olur?', '{}', '{}', 'p: tampona kaydedilir, q: yeniden gönderilir. Özellikler: p ∨ q, ¬p, p → q.

¬p için p = Y. O zaman p ∨ q için q = D. p → q de doğrudur. Atama p = Y, q = D tek çözümdür; özellikler tutarlıdır.

¬q eklenirse q = Y olmak zorunda kalır ve p ∨ q yanlış olur. Yeni sistem tutarsızdır.', 3, '2. ünite, Sistem özellikleri ve tutarlılık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-and', 'ayrik', 'ay-u2', 2, 'mcq', 'derived', 'Boolean aramada iki terimi de içeren sayfaları bulmak için hangi bağlaç kullanılır?', '{"choices":["AND","OR","NOT","XOR"]}', '{"index":0}', 'AND (ve) iki terimi birlikte içeren kayıtları getirir; OR en az birini, NOT ise bir terimi dışlar.', 1, '2. ünite, Boolean aramalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-not', 'ayrik', 'ay-u2', 2, 'fill', 'derived', '"Anadolu''daki yürüyüş parkurları" sayfalarını isteyip Batı Anadolu''dakileri dışlamak için arama: (ANADOLU AND YÜRÜYÜŞ AND PARKUR) ____ BATI. Boşluğa hangi Boolean bağlaç gelir?', '{"blanks":1}', '{"blanks":[["NOT","DEĞİL","AND NOT"]]}', 'Bir terimi içeren sayfaları dışlamak için NOT kullanılır.', 2, '2. ünite, Boolean aramalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-ikisi-sovalye', 'ayrik', 'ay-u2', 2, 'mcq', 'derived', 'Şövalyeler her zaman doğruyu, sahtekarlar her zaman yalan söyler. A "B bir şövalyedir" diyor, B "İkimiz farklı türdeniz" diyor. A ve B hangi türdendir?', '{"choices":["İkisi de sahtekar","İkisi de şövalye","A şövalye, B sahtekar","A sahtekar, B şövalye"]}', '{"index":0}', 'Kitaptaki örnek. A şövalye olsaydı B de şövalye olurdu; ama B''nin "farklı türdeniz" sözü yalan olurdu. A sahtekarsa B sahtekardır ve B''nin sözü yalan olur; tutarlı. İkisi de sahtekardır.', 2, '2. ünite, Mantık bulmacaları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-camur', 'ayrik', 'ay-u2', 2, 'yaz', 'derived', 'İki çocuğun alnı çamurlanmıştır; her çocuk diğerinin alnını görür ama kendininkini göremez. Baba "En az biriniz çamurlu" der ve iki kez "Alnınız çamurlu mu?" diye sorar. İlk soruda ikisi de "Bilmiyorum" der. İkinci soruda ne derler, neden?', '{}', '{}', 'İkisi de "Evet" der.

Bir çocuk yalnız kendisi temiz olsaydı, diğer çocuk tek çamurlu kişinin kendisi olduğunu ilk soruda anlardı. İlk soruda ikisi de "bilmiyorum" dediği için, her çocuk diğerinin de kendisini çamurlu gördüğü sonucuna varır.', 3, '2. ünite, Mantık bulmacaları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-tersleyici', 'ayrik', 'ay-u2', 2, 'mcq', 'derived', 'Girdi olarak aldığı bitin değilini üreten mantık kapısı hangisidir?', '{"choices":["Tersleyici","VE kapısı","VEYA kapısı","Dışlayıcı VEYA kapısı"]}', '{"index":0}', 'Tersleyici (DEĞİL kapısı) p girdisinden ¬p çıktısını üretir.', 1, '2. ünite, Mantık devreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-devre-cikti', 'ayrik', 'ay-u2', 2, 'fill', 'derived', 'p ve ¬q bir VE kapısına, çıkan sonuç ile r bir VEYA kapısına giriyor. Devrenin çıktısını yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["(p ∧ ¬q) ∨ r","r ∨ (p ∧ ¬q)"]]}', 'VE kapısı p ∧ ¬q üretir; VEYA kapısı bunu r ile birleştirir: (p ∧ ¬q) ∨ r.', 2, '2. ünite, Mantık devreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u2-t-devre-deger', 'ayrik', 'ay-u2', 2, 'fill', 'derived', '(p ∧ ¬r) ∨ (¬q ∧ r) devresine p = 1, q = 0, r = 1 verilirse çıktı kaç olur?', '{"blanks":1}', '{"blanks":[["1"]]}', 'p ∧ ¬r = 1 ∧ 0 = 0; ¬q ∧ r = 1 ∧ 1 = 1; 0 ∨ 1 = 1.', 2, '2. ünite, Mantık devreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-k7', 'ayrik', 'ay-u3', 3, 'yaz', 'original', 'Aşağıdaki ifadelerden her birinin değilini bulmak için De Morgan kanunlarını kullanınız.

a) Can zengin ve mutlu.
b) Kemal yarın bisiklete binecek veya koşacak.
c) Maya derse gitmek için yürür veya otobüse biner.
d) İbrahim çalışkan ve akıllıdır.', '{}', '{}', '¬(p ∧ q) ≡ ¬p ∨ ¬q ve ¬(p ∨ q) ≡ ¬p ∧ ¬q kullanılır.

a) Can zengin değil veya mutlu değil.
b) Kemal yarın bisiklete binmeyecek ve koşmayacak.
c) Maya derse gitmek için yürümez ve otobüse binmez.
d) İbrahim çalışkan değil veya akıllı değil.', 1, 'Rosen 1.3, alıştırma 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-k9e', 'ayrik', 'ay-u3', 3, 'yaz', 'original', 'Doğruluk tablosu kullanarak ¬(p → q) → p şartlı cümlesinin bir totoloji olduğunu gösteriniz.', '{}', '{}', '| p | q | p → q | ¬(p → q) | ¬(p → q) → p |
|---|---|---|---|---|
| D | D | D | Y | D |
| D | Y | Y | D | D |
| Y | D | D | Y | D |
| Y | Y | D | Y | D |

Son sütun her satırda D olduğu için ifade bir totolojidir. (¬(p → q) yalnız p doğru, q yanlışken doğrudur; o satırda p de doğrudur.)', 2, 'Rosen 1.3, alıştırma 9e', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-k11c', 'ayrik', 'ay-u3', 3, 'yaz', 'original', '¬p → (p → q) şartlı cümlesinin totoloji olduğunu doğruluk tablosu kullanmadan, mantıksal denklikler ile gösteriniz.', '{}', '{}', '¬p → (p → q)
≡ ¬(¬p) ∨ (p → q)   (şartlı ifade: a → b ≡ ¬a ∨ b)
≡ p ∨ (¬p ∨ q)   (çift değil, şartlı ifade)
≡ (p ∨ ¬p) ∨ q   (birleşme)
≡ D ∨ q   (değilleme kuralı)
≡ D   (baskınlık kuralı)', 3, 'Rosen 1.3, alıştırma 11c', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-k14', 'ayrik', 'ay-u3', 3, 'tf', 'original', '(¬p ∧ (p → q)) → ¬q önermesi bir totolojidir.', '{}', '{"value":false}', 'Yanlış. p yanlış, q doğru iken ¬p ∧ (p → q) doğru, ¬q yanlış olur; şartlı ifade yanlış çıkar.', 2, 'Rosen 1.3, alıştırma 14', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-k15', 'ayrik', 'ay-u3', 3, 'tf', 'original', '(¬q ∧ (p → q)) → ¬p önermesi bir totolojidir.', '{}', '{"value":true}', 'Doğru. Hipotez doğruysa q yanlış ve p → q doğrudur; bu yalnız p yanlışken mümkündür, yani ¬p doğrudur. (Bu, ret kuralının (modus tollens) totolojisidir.)', 2, 'Rosen 1.3, alıştırma 15', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-k17', 'ayrik', 'ay-u3', 3, 'yaz', 'original', '¬(p ↔ q) ve p ↔ ¬q ifadelerinin denk olduğunu gösteriniz.', '{}', '{}', '¬(p ↔ q) yalnız p ile q farklı değerdeyken doğrudur.

p ↔ ¬q, p ile ¬q aynı değerdeyken doğrudur; bu da p ile q''nun farklı olması demektir.

İki ifade tam olarak aynı satırlarda (p ≠ q) doğru olduğu için denktir.', 2, 'Rosen 1.3, alıştırma 17', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-k23', 'ayrik', 'ay-u3', 3, 'fill', 'original', '(p → r) ∧ (q → r) ifadesi hangi tek şartlı ifadeye denktir? (p, q ve r kullanınız)', '{"blanks":1,"semboller":true}', '{"blanks":[["(p ∨ q) → r","(q ∨ p) → r"]]}', '(p → r) ∧ (q → r) ≡ (p ∨ q) → r. p ya da q''dan biri doğruysa r doğru olmalıdır.', 2, 'Rosen 1.3, alıştırma 23', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-k31', 'ayrik', 'ay-u3', 3, 'yaz', 'original', '(p → q) → r ve p → (q → r) ifadelerinin mantıksal olarak denk olmadıklarını gösteriniz.', '{}', '{}', 'Bir karşı örnek yeter: p = Y, q = Y, r = Y alalım.

(p → q) → r: p → q = D, D → Y = Y.
p → (q → r): p yanlış olduğundan ifade D.

İki ifade bu satırda farklı değer aldığı için denk değildir.', 2, 'Rosen 1.3, alıştırma 31', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-totoloji-tanim', 'ayrik', 'ay-u3', 3, 'fill', 'derived', 'İçindeki önerme değişkenlerinin doğruluk değerleri ne olursa olsun her zaman doğru olan bileşik önermeye ____ denir.', '{"blanks":1}', '{"blanks":[["totoloji"]]}', 'Her zaman doğru olan bileşik önerme totolojidir; örnek p ∨ ¬p.', 1, '3. ünite, Totoloji, çelişki ve olumsallık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-celiski', 'ayrik', 'ay-u3', 3, 'mcq', 'derived', 'p ∧ ¬p bileşik önermesi aşağıdakilerden hangisidir?', '{"choices":["Çelişki","Totoloji","Olumsallık","Çift şartlı ifade"]}', '{"index":0}', 'p ∧ ¬p her zaman yanlıştır; her zaman yanlış olan önerme çelişkidir.', 1, '3. ünite, Totoloji, çelişki ve olumsallık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-olumsallik', 'ayrik', 'ay-u3', 3, 'mcq', 'derived', 'Ne totoloji ne de çelişki olan bileşik önermeye ne ad verilir?', '{"choices":["Olumsallık","Denklik","Sağlanabilirlik","Dışlayıcı veya"]}', '{"index":0}', 'Bazı değerlerde doğru, bazılarında yanlış olan önerme olumsallıktır; örnek p → q.', 1, '3. ünite, Totoloji, çelişki ve olumsallık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-tur-sec', 'ayrik', 'ay-u3', 3, 'mcq', 'derived', '(p ∧ q) → p bileşik önermesi aşağıdakilerden hangisidir?', '{"choices":["Totoloji","Çelişki","Olumsallık","Önerme değildir"]}', '{"index":0}', 'p ∧ q doğruysa p de doğrudur; şartlı ifade hiçbir satırda yanlış olamaz. Bu bir totolojidir.', 2, '3. ünite, Totoloji, çelişki ve olumsallık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-denk-tanim', 'ayrik', 'ay-u3', 3, 'mcq', 'derived', 'p ve q bileşik önermeleri hangi durumda mantıksal olarak denktir?', '{"choices":["p ↔ q bir totoloji ise","p → q bir olumsallık ise","p ∧ q bir çelişki ise","p ve q aynı değişkenleri içeriyorsa"]}', '{"index":0}', 'p ↔ q totoloji ise p ve q denktir; p ≡ q yazılır.', 1, '3. ünite, Mantıksal denklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-sartli-denk', 'ayrik', 'ay-u3', 3, 'fill', 'derived', 'p → q ifadesi yalnız ¬ ve ∨ kullanılarak nasıl yazılır?', '{"blanks":1,"semboller":true}', '{"blanks":[["¬p ∨ q","q ∨ ¬p"]]}', 'p → q ≡ ¬p ∨ q. Şartlı ifadeyle ilgili en çok kullanılan denkliktir.', 1, '3. ünite, Mantıksal denklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-dagilma', 'ayrik', 'ay-u3', 3, 'fill', 'derived', 'Dağılma kuralına göre p ∨ (q ∧ r) ifadesi neye denktir?', '{"blanks":1,"semboller":true}', '{"blanks":[["(p ∨ q) ∧ (p ∨ r)","(p ∨ r) ∧ (p ∨ q)"]]}', 'Veya, ve üzerine dağılır: p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r).', 2, '3. ünite, Mantıksal denklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-yutma', 'ayrik', 'ay-u3', 3, 'mcq', 'derived', 'Yutma kuralına göre p ∨ (p ∧ q) ifadesi neye denktir?', '{"choices":["p","q","p ∧ q","p ∨ q"]}', '{"index":0}', 'p ∨ (p ∧ q) ≡ p ve p ∧ (p ∨ q) ≡ p yutma kurallarıdır.', 2, '3. ünite, Mantıksal denklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-baskinlik', 'ayrik', 'ay-u3', 3, 'mcq', 'derived', 'D (her zaman doğru) ve Y (her zaman yanlış) için p ∨ D ifadesi neye denktir?', '{"choices":["D","p","Y","¬p"]}', '{"index":0}', 'Baskınlık kuralı: p ∨ D ≡ D ve p ∧ Y ≡ Y. Etkisizlik kuralı ise p ∧ D ≡ p, p ∨ Y ≡ p''dir.', 1, '3. ünite, Mantıksal denklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-sadelestir', 'ayrik', 'ay-u3', 3, 'yaz', 'derived', '¬(p ∨ (¬p ∧ q)) ve ¬p ∧ ¬q ifadelerinin denk olduğunu mantıksal denklikler kullanarak gösteriniz.', '{}', '{}', '¬(p ∨ (¬p ∧ q))
≡ ¬p ∧ ¬(¬p ∧ q)   (ikinci De Morgan kuralı)
≡ ¬p ∧ (p ∨ ¬q)   (birinci De Morgan ve çift değil)
≡ (¬p ∧ p) ∨ (¬p ∧ ¬q)   (dağılma)
≡ Y ∨ (¬p ∧ ¬q)   (değilleme kuralı)
≡ ¬p ∧ ¬q   (etkisizlik)', 3, '3. ünite, Mantıksal denklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-cift-sartli', 'ayrik', 'ay-u3', 3, 'tf', 'derived', 'p ↔ q ifadesi (p → q) ∧ (q → p) ifadesine denktir.', '{}', '{"value":true}', 'Doğru. Çift şartlı ifade iki yönlü şartlı ifadenin birleşmesidir.', 2, '3. ünite, Mantıksal denklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-dm1', 'ayrik', 'ay-u3', 3, 'fill', 'derived', 'De Morgan kuralına göre ¬(p ∧ q) neye denktir?', '{"blanks":1,"semboller":true}', '{"blanks":[["¬p ∨ ¬q","¬q ∨ ¬p"]]}', '¬(p ∧ q) ≡ ¬p ∨ ¬q.', 1, '3. ünite, De Morgan kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-dm2', 'ayrik', 'ay-u3', 3, 'fill', 'derived', 'De Morgan kuralına göre ¬(p ∨ q) neye denktir?', '{"blanks":1,"semboller":true}', '{"blanks":[["¬p ∧ ¬q","¬q ∧ ¬p"]]}', '¬(p ∨ q) ≡ ¬p ∧ ¬q.', 1, '3. ünite, De Morgan kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-dm-cumle', 'ayrik', 'ay-u3', 3, 'mcq', 'derived', '"Mehmet''in bir cep telefonu ve dizüstü bilgisayarı var" cümlesinin değili hangisidir?', '{"choices":["Mehmet''in cep telefonu yok veya dizüstü bilgisayarı yok.","Mehmet''in cep telefonu yok ve dizüstü bilgisayarı yok.","Mehmet''in cep telefonu var ama dizüstü bilgisayarı yok.","Mehmet''in ne cep telefonu ne de bilgisayarı var."]}', '{"index":0}', '¬(p ∧ q) ≡ ¬p ∨ ¬q: telefonu yok veya bilgisayarı yok. "Ne... ne de" ise ¬p ∧ ¬q''dur, daha güçlü bir iddiadır.', 2, '3. ünite, De Morgan kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-dm-genel', 'ayrik', 'ay-u3', 3, 'tf', 'derived', '¬(p₁ ∨ p₂ ∨ ... ∨ pₙ) ≡ ¬p₁ ∧ ¬p₂ ∧ ... ∧ ¬pₙ eşitliği De Morgan kuralının n önermeye genişletilmiş halidir.', '{}', '{"value":true}', 'Doğru. De Morgan kuralları n tane önerme için de geçerlidir.', 2, '3. ünite, De Morgan kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-sat-tanim', 'ayrik', 'ay-u3', 3, 'mcq', 'derived', 'Bir bileşik önerme hangi durumda sağlanabilirdir?', '{"choices":["Onu doğru yapan en az bir değer ataması varsa","Her değer atamasında doğruysa","Hiçbir değer atamasında doğru değilse","Yalnız iki değişken içeriyorsa"]}', '{"index":0}', 'En az bir atamada doğru olan önerme sağlanabilirdir. Hiçbir atamada doğru değilse sağlanamaz, yani değili bir totolojidir.', 1, '3. ünite, Sağlanabilirlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-sat-ornek', 'ayrik', 'ay-u3', 3, 'tf', 'derived', '(p ∨ ¬q) ∧ (q ∨ ¬r) ∧ (r ∨ ¬p) bileşik önermesi sağlanabilirdir.', '{}', '{"value":true}', 'Doğru. Kitaptaki örnek: p, q ve r''nin üçü de doğru (ya da üçü de yanlış) iken önerme doğrudur.', 2, '3. ünite, Sağlanabilirlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-sat-degil', 'ayrik', 'ay-u3', 3, 'tf', 'derived', 'Bir bileşik önerme sağlanamazsa, değili bir totolojidir.', '{}', '{"value":true}', 'Doğru. Önerme her atamada yanlışsa değili her atamada doğrudur.', 2, '3. ünite, Sağlanabilirlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u3-t-sudoku', 'ayrik', 'ay-u3', 3, 'mcq', 'derived', 'Kitapta bir Sudoku bulmacasının çözümü hangi problemle ilişkilendirilir?', '{"choices":["Bir bileşik önermenin sağlanabilirliği","Bir argümanın geçerliliği","Bir fonksiyonun tersinin bulunması","Bir kümenin kuvvet kümesi"]}', '{"index":0}', 'Sudoku kuralları bir bileşik önermeyle yazılır; bulmacanın çözümü bu önermeyi doğru yapan değer atamasıdır.', 2, '3. ünite, Sağlanabilirlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-c28', 'ayrik', 'ay-u4', 4, 'mcq', 'original', '"x+5<2x" ifadesini P(x) ile gösterelim. Aşağıdakilerin kaç tanesinin doğruluk değeri "doğru"dur? P(0);P(5);P(10);P(15)', '{"choices":["1","3","2","4"]}', '{"index":2}', 'x + 5 < 2x, x > 5 demektir. P(0): 5 < 0 yanlış; P(5): 10 < 10 yanlış; P(10): 15 < 20 doğru; P(15): 20 < 30 doğru. İki tanesi doğrudur.', 2, 'Çıkmış soru 28', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-c29', 'ayrik', 'ay-u4', 4, 'mcq', 'original', '"x+5<2x" ifadesini P(x) ile gösterelim. Aşağıdakilerin kaç tanesinin doğruluk değeri "yanlış"tır? P(0);P(5);P(10);P(15)', '{"choices":["4","1","3","2"]}', '{"index":3}', 'x + 5 < 2x yalnız x > 5 iken doğrudur. P(0) ve P(5) yanlıştır (P(5)''te 10 < 10 sağlanmaz); iki tane.', 2, 'Çıkmış soru 29', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-c30', 'ayrik', 'ay-u4', 4, 'mcq', 'original', '"x<25" ifadesini P(x) ile gösterelim. Aşağıdakilerin kaç tanesinin doğruluk değeri "yanlış"tır? P(0);P(10);P(20);P(30)', '{"choices":["1","5","7","3"]}', '{"index":0}', 'Yalnız P(30) yanlıştır (30 < 25 değil). 0, 10 ve 20 için ifade doğrudur.', 1, 'Çıkmış soru 30', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-c31', 'ayrik', 'ay-u4', 4, 'mcq', 'original', '"x<25" ifadesini P(x) ile gösterelim. Aşağıdakilerin kaç tanesinin doğruluk değeri "doğru"dur? P(0);P(10);P(20);P(30)', '{"choices":["7","1","5","3"]}', '{"index":3}', 'P(0), P(10) ve P(20) doğrudur; P(30) yanlıştır. Üç tane.', 1, 'Çıkmış soru 31', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-k1', 'ayrik', 'ay-u4', 4, 'fill', 'original', '"x ≤ 4" ifadesini P(x) ile gösterelim. Aşağıdakilerin doğruluk değeri (D/Y) nedir?

Boşluk 1: P(0), Boşluk 2: P(4), Boşluk 3: P(6)', '{"blanks":3}', '{"blanks":[["D","doğru"],["D","doğru"],["Y","yanlış"]]}', '0 ≤ 4 ve 4 ≤ 4 doğru, 6 ≤ 4 yanlıştır.', 1, 'Rosen 1.4, alıştırma 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-k3', 'ayrik', 'ay-u4', 4, 'fill', 'original', '"y''nin başkenti x''tir" ifadesini Q(x, y) ile gösterelim. Aşağıdakilerin doğruluk değeri (D/Y) nedir?

Boşluk 1: Q(Atina, Yunanistan), Boşluk 2: Q(Tahran, İran), Boşluk 3: Q(Rusya, Moskova), Boşluk 4: Q(Barcelona, İspanya)', '{"blanks":4}', '{"blanks":[["D","doğru"],["D","doğru"],["Y","yanlış"],["Y","yanlış"]]}', 'Değişkenlerin sırası önemlidir. Q(Rusya, Moskova) "Moskova''nın başkenti Rusya''dır" der; yanlıştır. İspanya''nın başkenti Madrid''dir.', 1, 'Rosen 1.4, alıştırma 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-k5', 'ayrik', 'ay-u4', 4, 'yaz', 'original', 'x''in tanım kümesi bütün öğrencilerden oluşmak üzere P(x), "x derste her hafta sonu beş saatten fazla zaman geçirir" ifadesini göstersin. Aşağıdakileri Türkçe olarak açıklayınız.

a) ∃xP(x)
b) ∀xP(x)
c) ∃x ¬P(x)
d) ∀x ¬P(x)', '{}', '{}', 'a) Derste her hafta sonu beş saatten fazla zaman geçiren bir öğrenci vardır.
b) Her öğrenci derste her hafta sonu beş saatten fazla zaman geçirir.
c) Derste her hafta sonu beş saatten fazla zaman geçirmeyen bir öğrenci vardır.
d) Hiçbir öğrenci derste her hafta sonu beş saatten fazla zaman geçirmez.', 1, 'Rosen 1.4, alıştırma 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-k7', 'ayrik', 'ay-u4', 4, 'yaz', 'original', 'Tanım kümesi bütün insanlar, C(x) "x bir komedyendir" ve F(x) "x eğlencelidir" olmak üzere aşağıdakileri Türkçeye çeviriniz.

a) ∀x(C(x) → F(x))
b) ∀x(C(x) ∧ F(x))
c) ∃x(C(x) → F(x))
d) ∃x(C(x) ∧ F(x))', '{}', '{}', 'a) Her komedyen eğlencelidir.
b) Herkes eğlenceli bir komedyendir.
c) Komedyense eğlenceli olan bir kişi vardır. (Komedyen olmayan biri bunu zaten sağlar.)
d) Bazı komedyenler eğlencelidir.', 2, 'Rosen 1.4, alıştırma 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-k9', 'ayrik', 'ay-u4', 4, 'fill', 'original', 'P(x) "x Rusça konuşabilir", Q(x) "x C++ bilgisayar dilini bilir" olsun. Tanım kümesi okulunuzdaki öğrenciler.

a) Rusça konuşabilen ve C++ bilen bir öğrenci vardır.
b) Rusça konuşabilen fakat C++ bilmeyen bir öğrenci vardır.
c) Her öğrenci ya Rusça konuşabilmekte ya da C++ bilmektedir.
d) Rusça konuşabilen ya da C++ bilen hiçbir öğrenci yoktur.

Boşluk 1: a), Boşluk 2: b), Boşluk 3: c), Boşluk 4: d)', '{"blanks":4,"semboller":true}', '{"blanks":[["∃x(P(x) ∧ Q(x))"],["∃x(P(x) ∧ ¬Q(x))"],["∀x(P(x) ∨ Q(x))"],["∀x¬(P(x) ∨ Q(x))","¬∃x(P(x) ∨ Q(x))","∀x(¬P(x) ∧ ¬Q(x))"]]}', 'a) ∃x(P(x) ∧ Q(x)). b) ∃x(P(x) ∧ ¬Q(x)). c) ∀x(P(x) ∨ Q(x)). d) ∀x¬(P(x) ∨ Q(x)), yani ¬∃x(P(x) ∨ Q(x)).', 2, 'Rosen 1.4, alıştırma 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-k11', 'ayrik', 'ay-u4', 4, 'fill', 'original', 'P(x), "x = x²" ifadesi olsun. Tanım kümesi tam sayılar ise aşağıdakilerin doğruluk değeri (D/Y) nedir?

Boşluk 1: P(0), Boşluk 2: P(2), Boşluk 3: P(−1), Boşluk 4: ∃xP(x), Boşluk 5: ∀xP(x)', '{"blanks":5}', '{"blanks":[["D","doğru"],["Y","yanlış"],["Y","yanlış"],["D","doğru"],["Y","yanlış"]]}', 'x = x² yalnız x = 0 ve x = 1 için doğrudur. (−1)² = 1 ≠ −1. Doğru yapan değer olduğundan ∃xP(x) doğru, x = 2 karşı örnek olduğundan ∀xP(x) yanlıştır.', 2, 'Rosen 1.4, alıştırma 11', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-k13', 'ayrik', 'ay-u4', 4, 'mcq', 'original', 'Tanım kümesi tam sayılar olsun. Aşağıdakilerden hangisi yanlıştır?', '{"choices":["∀n(3n ≤ 4n)","∀n(n + 1 > n)","∃n(2n = 3n)","∃n(n = −n)"]}', '{"index":0}', '∀n(3n ≤ 4n) negatif n için sağlanmaz (n = −1: −3 ≤ −4 yanlış). ∃n(2n = 3n) ve ∃n(n = −n) için n = 0 yeter. (Kitabın cevap anahtarı ∀n(3n ≤ 4n) için "doğru" der; bu yalnız n ≥ 0 için geçerlidir.)', 2, 'Rosen 1.4, alıştırma 13', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-k15', 'ayrik', 'ay-u4', 4, 'fill', 'original', 'Tanım kümesi tam sayılar olsun. Doğruluk değerlerini (D/Y) yazınız.

Boşluk 1: ∀n(n² ≥ 0), Boşluk 2: ∃n(n² = 2), Boşluk 3: ∀n(n² ≥ n), Boşluk 4: ∃n(n² < 0)', '{"blanks":4}', '{"blanks":[["D","doğru"],["Y","yanlış"],["D","doğru"],["Y","yanlış"]]}', 'Kare negatif olamaz. √2 tam sayı olmadığından n² = 2 sağlanmaz. Tam sayılarda n² ≥ n her zaman doğrudur (n ≤ 0 ise sağ taraf negatif ya da 0, n ≥ 1 ise n² ≥ n).', 2, 'Rosen 1.4, alıştırma 15', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-k17', 'ayrik', 'ay-u4', 4, 'fill', 'original', 'P(x)''in tanım bölgesi 0, 1, 2, 3, 4 olsun. Niceleyici kullanmadan, bağlaçlarla yazınız.

Boşluk 1: ∃xP(x), Boşluk 2: ∀xP(x)', '{"blanks":2,"semboller":true}', '{"blanks":[["P(0) ∨ P(1) ∨ P(2) ∨ P(3) ∨ P(4)"],["P(0) ∧ P(1) ∧ P(2) ∧ P(3) ∧ P(4)"]]}', 'Sonlu tanım kümesinde varoluşsal niceleme bir ayrılmaya (∨), evrensel niceleme bir birleşmeye (∧) dönüşür.', 2, 'Rosen 1.4, alıştırma 17', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-onerme-fonk', 'ayrik', 'ay-u4', 4, 'tf', 'derived', 'P(x) önerme fonksiyonu, x''e tanım kümesinden bir değer verildiğinde bir önerme olur ve bir doğruluk değeri kazanır.', '{}', '{"value":true}', 'Doğru. P(x) tek başına önerme değildir; P(3) gibi bir değer verilince önerme olur.', 1, '4. ünite, Yüklemler ve önerme fonksiyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-yuklem-ad', 'ayrik', 'ay-u4', 4, 'mcq', 'derived', '"x, 3''ten büyüktür" cümlesinde "3''ten büyüktür" kısmına ne ad verilir?', '{"choices":["Yüklem","Niceleyici","Tanım kümesi","Bağlı değişken"]}', '{"index":0}', 'Cümlenin öznesi x, "3''ten büyüktür" ise öznenin sahip olabileceği bir özelliği bildiren yüklemdir.', 1, '4. ünite, Yüklemler ve önerme fonksiyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-onkosul', 'ayrik', 'ay-u4', 4, 'mcq', 'derived', 'Bir programın girdilerinin sağlaması gereken koşulları belirten ifadeye ne denir?', '{"choices":["Ön koşul","Son koşul","Niceleyici","Totoloji"]}', '{"index":0}', 'Girdiye ait koşullar ön koşul, programın çıktısının sağlaması gerekenler son koşuldur.', 2, '4. ünite, Yüklemler ve önerme fonksiyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-evrensel', 'ayrik', 'ay-u4', 4, 'mcq', 'derived', '∀xP(x) ifadesi ne zaman doğrudur?', '{"choices":["Tanım kümesindeki her x için P(x) doğruysa","P(x)''i doğru yapan en az bir x varsa","P(x)''i yanlış yapan bir x varsa","Tanım kümesi boş değilse"]}', '{"index":0}', 'Evrensel niceleme, P(x)''in tanım kümesinin tüm elemanları için doğru olduğunu söyler.', 1, '4. ünite, Evrensel ve varlıksal niceleyici', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-karsi-ornek', 'ayrik', 'ay-u4', 4, 'fill', 'derived', '∀xP(x) ifadesini yanlış yapan, yani P(x)''i yanlış yapan bir elemana ____ denir.', '{"blanks":1}', '{"blanks":[["karşı örnek","karsi ornek"]]}', 'Tek bir karşı örnek, evrensel niceleme ifadesinin yanlış olduğunu göstermeye yeter.', 1, '4. ünite, Evrensel ve varlıksal niceleyici', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-varolussal', 'ayrik', 'ay-u4', 4, 'mcq', 'derived', 'Tanım kümesi boş olmayan sonlu bir küme ise ∃xP(x) ifadesi ne zaman yanlıştır?', '{"choices":["Her x için P(x) yanlışsa","En az bir x için P(x) yanlışsa","Her x için P(x) doğruysa","Tam bir x için P(x) doğruysa"]}', '{"index":0}', 'Varoluşsal niceleme, P(x)''i doğru yapan hiçbir x yoksa yanlıştır.', 1, '4. ünite, Evrensel ve varlıksal niceleyici', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-tek', 'ayrik', 'ay-u4', 4, 'fill', 'derived', '"P(x)''i doğru yapan tek bir x vardır" ifadesi hangi sembolle gösterilir? (∃ ile başlayan sembolü yazınız)', '{"blanks":1,"semboller":true}', '{"blanks":[["∃!","∃1","∃! x","∃!x"]]}', 'Teklik niceleyicisi ∃! (ya da ∃₁) ile gösterilir: ∃!xP(x).', 2, '4. ünite, Evrensel ve varlıksal niceleyici', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-oncelik', 'ayrik', 'ay-u4', 4, 'tf', 'derived', '∀xP(x) ∨ Q(x) ifadesi ∀x(P(x) ∨ Q(x)) anlamına gelir.', '{}', '{"value":false}', 'Yanlış. Niceleyicilerin önceliği tüm bağlaçlardan yüksektir; ifade (∀xP(x)) ∨ Q(x) demektir.', 2, '4. ünite, Evrensel ve varlıksal niceleyici', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-bagli', 'ayrik', 'ay-u4', 4, 'mcq', 'derived', '∃x(x + y = 1) ifadesinde x ve y değişkenleri nasıldır?', '{"choices":["x bağlı, y serbest","x serbest, y bağlı","İkisi de bağlı","İkisi de serbest"]}', '{"index":0}', 'x varoluşsal niceleyiciyle bağlanmıştır; y''ye ne değer verilmiş ne de niceleyici uygulanmıştır, serbesttir.', 2, '4. ünite, Evrensel ve varlıksal niceleyici', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-sonlu', 'ayrik', 'ay-u4', 4, 'fill', 'derived', 'Tanım kümesi {1, 2, 3, 4} olmak üzere ∀x(x² < 10) ifadesinin doğruluk değeri nedir? (D/Y)', '{"blanks":1}', '{"blanks":[["Y","yanlış"]]}', '4² = 16 < 10 sağlanmaz; x = 4 karşı örnektir.', 2, '4. ünite, Evrensel ve varlıksal niceleyici', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-degil-evrensel', 'ayrik', 'ay-u4', 4, 'fill', 'derived', 'De Morgan kuralına göre ¬∀xP(x) ifadesi neye denktir?', '{"blanks":1,"semboller":true}', '{"blanks":[["∃x¬P(x)","∃x ¬P(x)"]]}', '"Her x için P(x)" yanlışsa P(x)''in yanlış olduğu bir x vardır: ¬∀xP(x) ≡ ∃x¬P(x).', 1, '4. ünite, Niceleyicili ifadelerin değili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-degil-var', 'ayrik', 'ay-u4', 4, 'fill', 'derived', '¬∃xQ(x) ifadesi neye denktir?', '{"blanks":1,"semboller":true}', '{"blanks":[["∀x¬Q(x)","∀x ¬Q(x)"]]}', 'Q(x)''i doğru yapan bir x yoksa her x için Q(x) yanlıştır: ¬∃xQ(x) ≡ ∀x¬Q(x).', 1, '4. ünite, Niceleyicili ifadelerin değili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-degil-cumle', 'ayrik', 'ay-u4', 4, 'mcq', 'derived', '"Sınıftaki her öğrenci kalkülüs dersi almıştır" ifadesinin değili hangisidir?', '{"choices":["Sınıfta kalkülüs dersi almamış bir öğrenci vardır.","Sınıftaki hiçbir öğrenci kalkülüs dersi almamıştır.","Sınıftaki her öğrenci kalkülüs dersi almamıştır.","Sınıfta kalkülüs dersi almış bir öğrenci vardır."]}', '{"index":0}', '¬∀xP(x) ≡ ∃x¬P(x): kalkülüs almamış en az bir öğrenci vardır. "Hiçbiri almamıştır" daha güçlü bir iddiadır.', 2, '4. ünite, Niceleyicili ifadelerin değili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-degil-yaz', 'ayrik', 'ay-u4', 4, 'yaz', 'derived', '∀x(x² > x) ve ∃x(x² = 2) ifadelerinin değillerini, değil işaretini niceleyicinin içine taşıyarak yazınız.', '{}', '{}', '¬∀x(x² > x) ≡ ∃x¬(x² > x) ≡ ∃x(x² ≤ x).

¬∃x(x² = 2) ≡ ∀x¬(x² = 2) ≡ ∀x(x² ≠ 2).', 2, '4. ünite, Niceleyicili ifadelerin değili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-her-ogrenci', 'ayrik', 'ay-u4', 4, 'mcq', 'derived', 'Tanım kümesi tüm insanlar, S(x) "x bu sınıftadır", C(x) "x kalkülüs çalışmıştır" olsun. "Bu sınıftaki her öğrenci kalkülüs çalışmıştır" nasıl yazılır?', '{"choices":["∀x(S(x) → C(x))","∀x(S(x) ∧ C(x))","∃x(S(x) ∧ C(x))","∃x(S(x) → C(x))"]}', '{"index":0}', 'Evrensel niceleyiciyle şartlı ifade kullanılır. ∀x(S(x) ∧ C(x)) herkesin bu sınıfta olduğunu da iddia eder, yanlış çeviridir.', 2, '4. ünite, Cümleleri niceleyicilerle yazma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-bazi', 'ayrik', 'ay-u4', 4, 'mcq', 'derived', 'Aynı tanımlarla "Bu sınıftaki bazı öğrenciler kalkülüs çalışmıştır" nasıl yazılır?', '{"choices":["∃x(S(x) ∧ C(x))","∃x(S(x) → C(x))","∀x(S(x) → C(x))","∀x(S(x) ∧ C(x))"]}', '{"index":0}', 'Varoluşsal niceleyiciyle ve bağlacı kullanılır. ∃x(S(x) → C(x)) bu sınıfta olmayan biri için de doğru olur, yanlış çeviridir.', 2, '4. ünite, Cümleleri niceleyicilerle yazma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u4-t-aslan', 'ayrik', 'ay-u4', 4, 'fill', 'derived', 'Tanım kümesi tüm canlılar; P(x) "x bir aslandır", Q(x) "x yırtıcıdır" olsun. "Bütün aslanlar yırtıcıdır" önermesini yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["∀x(P(x) → Q(x))"]]}', 'Kitaptaki Lewis Carroll örneği: ∀x(P(x) → Q(x)).', 3, '4. ünite, Cümleleri niceleyicilerle yazma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-k1', 'ayrik', 'ay-u5', 5, 'yaz', 'original', 'Aşağıdaki ifadeleri Türkçeye tercüme ediniz. (Her değişkenin tanım bölgesi tüm reel sayılar kümesidir.)

a) ∀x∃y(x < y)
b) ∀x∀y(((x ≥ 0) ∧ (y ≥ 0)) → (xy ≥ 0))
c) ∀x∀y∃z(xy = z)', '{}', '{}', 'a) Her x reel sayısı için x''ten büyük bir y reel sayısı vardır.
b) Her x ve y reel sayısı için x ve y negatif değilse çarpımları da negatif değildir.
c) Her x ve y reel sayısı için xy = z olacak şekilde bir z reel sayısı vardır.', 2, 'Rosen 1.5, alıştırma 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-k3', 'ayrik', 'ay-u5', 5, 'yaz', 'original', 'Q(x, y) "x, y''ye bir mesaj göndermiştir" olsun; x ve y''nin tanım kümesi sınıfınızdaki öğrencilerdir. Aşağıdakileri Türkçeye çeviriniz.

b) ∃x∀yQ(x, y)
c) ∀x∃yQ(x, y)
d) ∃y∀xQ(x, y)
e) ∀y∃xQ(x, y)', '{}', '{}', 'b) Sınıfta, sınıftaki her öğrenciye mesaj göndermiş bir öğrenci vardır.
c) Sınıftaki her öğrenci sınıftan en az bir öğrenciye mesaj göndermiştir.
d) Sınıfta, sınıftaki her öğrencinin mesaj gönderdiği bir öğrenci vardır.
e) Sınıftaki her öğrenciye sınıftan en az bir öğrenci mesaj göndermiştir.', 2, 'Rosen 1.5, alıştırma 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-k9', 'ayrik', 'ay-u5', 5, 'fill', 'original', 'L(x, y) "x, y''yi sever" olsun; tanım kümesi dünyadaki tüm insanlardır.

b) Herkes birilerini sever.
c) Herkesin sevdiği biri vardır.
d) Hiç kimse herkesi sevmez.

Boşluk 1: b), Boşluk 2: c), Boşluk 3: d)', '{"blanks":3,"semboller":true}', '{"blanks":[["∀x∃yL(x, y)"],["∃y∀xL(x, y)"],["∀x∃y¬L(x, y)","¬∃x∀yL(x, y)"]]}', 'b) ∀x∃yL(x, y). c) ∃y∀xL(x, y): tek bir y herkes tarafından sevilir. d) "Herkesi seven biri yoktur": ¬∃x∀yL(x, y) ≡ ∀x∃y¬L(x, y).', 2, 'Rosen 1.5, alıştırma 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-k15', 'ayrik', 'ay-u5', 5, 'fill', 'original', 'P(x, y) "x, y dersini almıştır" olsun; x''in tanım kümesi bu sınıftaki öğrenciler, y''ninki bilgisayar bilimleri dersleridir. "Bu sınıftaki her öğrenci en az bir bilgisayar bilimleri dersi almıştır" ifadesini yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["∀x∃yP(x, y)"]]}', 'Her x için (en az) bir y vardır: ∀x∃yP(x, y).', 2, 'Rosen 1.5, alıştırma 15', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-tamsayi-dyy', 'ayrik', 'ay-u5', 5, 'fill', 'derived', 'Tanım kümesi tam sayılar olsun. Aşağıdakilerin doğruluk değerlerini (D/Y) yazınız.

Boşluk 1: ∀x∃y(x + y = 0), Boşluk 2: ∃y∀x(x + y = 0), Boşluk 3: ∃x∀y(xy = 0), Boşluk 4: ∀x∃y(x + y = 1)', '{"blanks":4}', '{"blanks":[["D","doğru"],["Y","yanlış"],["D","doğru"],["D","doğru"]]}', '1) Her x için y = −x seçilir. 2) Her x için aynı y işe yaramaz. 3) x = 0 her y için xy = 0 yapar. 4) Her x için y = 1 − x seçilir.', 2, '5. ünite, Niceleyicilerin sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-sira-onemli', 'ayrik', 'ay-u5', 5, 'tf', 'derived', '∀x∃yP(x, y) ve ∃y∀xP(x, y) ifadeleri her zaman aynı anlamdadır.', '{}', '{"value":false}', 'Yanlış. Birincisinde y, x''e göre değişebilir; ikincisinde tek bir y bütün x''ler için çalışmalıdır. Farklı niceleyicilerde sıra önemlidir.', 1, '5. ünite, Niceleyicilerin sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-ayni-niceleyici', 'ayrik', 'ay-u5', 5, 'tf', 'derived', '∀x∀yP(x, y) ile ∀y∀xP(x, y) aynı doğruluk değerine sahiptir.', '{}', '{"value":true}', 'Doğru. Niceleyicilerin hepsi evrensel (ya da hepsi varoluşsal) ise sıranın önemi yoktur.', 1, '5. ünite, Niceleyicilerin sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-gerektirir', 'ayrik', 'ay-u5', 5, 'mcq', 'derived', 'Aşağıdaki gerektirmelerden hangisi her zaman doğrudur?', '{"choices":["∃y∀xP(x, y) → ∀x∃yP(x, y)","∀x∃yP(x, y) → ∃y∀xP(x, y)","∃x∃yP(x, y) → ∀x∀yP(x, y)","∀x∃yP(x, y) → ∀x∀yP(x, y)"]}', '{"index":0}', 'Tüm x''ler için çalışan bir y varsa, her x için o y seçilebilir. Ters yön genelde doğru değildir (ör. x + y = 0).', 2, '5. ünite, Niceleyicilerin sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-xy-carpim', 'ayrik', 'ay-u5', 5, 'mcq', 'derived', 'Tanım kümesi reel sayılar olsun. Aşağıdakilerden hangisi doğrudur?', '{"choices":["∀x∃y(xy = 0)","∀x∃y(xy = 1)","∃y∀x(x + y > x²)","∀x∀y(x + y = y + 1)"]}', '{"index":0}', 'Her x için y = 0 seçilirse xy = 0 olur. ∀x∃y(xy = 1) x = 0 için sağlanmaz.', 2, '5. ünite, Niceleyicilerin sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-dongu', 'ayrik', 'ay-u5', 5, 'mcq', 'derived', 'Kitapta iç içe niceleyiciler hangi programlama yapısına benzetilir?', '{"choices":["İç içe döngüler","Özyinelemeli fonksiyonlar","Koşullu dallanmalar","Diziler"]}', '{"index":0}', '∀x∀y için dış döngü x''ler, iç döngü y''ler üzerinde dolaşır; ∀x∃y için iç döngüde bir y bulunca durulur.', 2, '5. ünite, Niceleyicilerin sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-toplam', 'ayrik', 'ay-u5', 5, 'fill', 'derived', 'Tanım kümesi reel sayılar olmak üzere ∃x∀y(x + y = y) ifadesinin doğruluk değeri nedir? (D/Y)', '{"blanks":1}', '{"blanks":[["D","doğru"]]}', 'x = 0 her y için 0 + y = y yapar; ifade doğrudur.', 2, '5. ünite, Niceleyicilerin sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-toplam-degisme', 'ayrik', 'ay-u5', 5, 'fill', 'derived', 'Tanım kümesi tüm reel sayılar olsun. "İki reel sayının toplamı değişme özelliğine sahiptir" ifadesini iç içe niceleyicilerle yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["∀x∀y(x + y = y + x)"]]}', '∀x∀y(x + y = y + x).', 2, '5. ünite, İç içe niceleyicilerle çeviri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-toplamsal-ters', 'ayrik', 'ay-u5', 5, 'fill', 'derived', 'Tanım kümesi tüm reel sayılar olsun. "Her reel sayının bir toplamsal tersi vardır" ifadesini yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["∀x∃y(x + y = 0)"]]}', 'Her x için x + y = 0 yapan bir y vardır: ∀x∃y(x + y = 0).', 2, '5. ünite, İç içe niceleyicilerle çeviri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-iki-negatif', 'ayrik', 'ay-u5', 5, 'mcq', 'derived', 'Tanım kümesi reel sayılar olmak üzere ∀x∀y((x < 0) ∧ (y < 0) → (xy > 0)) ifadesi Türkçede ne der?', '{"choices":["İki negatif reel sayının çarpımı pozitiftir.","Bazı negatif reel sayıların çarpımı pozitiftir.","Çarpımı pozitif olan iki sayı negatiftir.","Her reel sayının negatif bir çarpanı vardır."]}', '{"index":0}', 'Her x ve y için, ikisi de negatifse çarpım pozitiftir.', 2, '5. ünite, İç içe niceleyicilerle çeviri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-anne', 'ayrik', 'ay-u5', 5, 'fill', 'derived', 'M(x, y) "x, y''nin annesidir" olsun; tanım kümesi tüm insanlar. "Herkesin tam bir annesi vardır" ifadesini yazınız. (Teklik niceleyicisi ∃! kullanabilirsiniz.)', '{"blanks":1,"semboller":true}', '{"blanks":[["∀y∃!xM(x, y)","∀y∃!x M(x, y)"]]}', 'Her y için annesi olan tek bir x vardır: ∀y∃!xM(x, y).', 3, '5. ünite, İç içe niceleyicilerle çeviri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-degil-ic', 'ayrik', 'ay-u5', 5, 'yaz', 'derived', 'Değil işaretlerini niceleyicilerin içine taşıyarak (tüm değil işaretleri yüklemin hemen önünde olacak şekilde) aşağıdakilerin değilini yazınız.

a) ∀x∃yP(x, y)
b) ∀y∃xP(x, y)
c) ∃y∃x(P(x, y) ∧ Q(x, y))', '{}', '{}', 'Her adımda ¬∀ ≡ ∃¬ ve ¬∃ ≡ ∀¬ uygulanır.

a) ¬∀x∃yP(x, y) ≡ ∃x∀y¬P(x, y)
b) ¬∀y∃xP(x, y) ≡ ∃y∀x¬P(x, y)
c) ¬∃y∃x(P ∧ Q) ≡ ∀y∀x¬(P(x, y) ∧ Q(x, y)) ≡ ∀y∀x(¬P(x, y) ∨ ¬Q(x, y))', 2, '5. ünite, İç içe niceleyicilerin değili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-degil-1', 'ayrik', 'ay-u5', 5, 'fill', 'derived', '¬∀x∃y(xy = 1) ifadesini, değil işareti niceleyicilerden geçirilmiş biçimde yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["∃x∀y(xy ≠ 1)","∃x∀y¬(xy = 1)"]]}', '¬∀x∃y ≡ ∃x∀y¬: ∃x∀y(xy ≠ 1). Bu reel sayılarda doğrudur (x = 0).', 2, '5. ünite, İç içe niceleyicilerin değili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-degil-2', 'ayrik', 'ay-u5', 5, 'mcq', 'derived', '"Dünyadaki her havayolunda uçmuş bir kadın yoktur" ifadesi ¬∃w∀a∃f(P(w, f) ∧ Q(f, a)) ile yazılır. Değil işareti içeri taşınınca hangi ifade elde edilir?', '{"choices":["∀w∃a∀f(¬P(w, f) ∨ ¬Q(f, a))","∀w∀a∀f(¬P(w, f) ∧ ¬Q(f, a))","∃w∃a∃f(¬P(w, f) ∨ ¬Q(f, a))","∀w∃a∃f(¬P(w, f) ∧ Q(f, a))"]}', '{"index":0}', 'Her niceleyici tersine döner (∃→∀, ∀→∃), sonra De Morgan ile ¬(P ∧ Q) ≡ ¬P ∨ ¬Q.', 2, '5. ünite, İç içe niceleyicilerin değili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u5-t-limit', 'ayrik', 'ay-u5', 5, 'yaz', 'derived', '"Her x için x''ten büyük bir y vardır" ifadesini (tanım kümesi reel sayılar) niceleyicilerle yazın, değilini alın ve değilin anlamını Türkçe söyleyin. Hangisi doğrudur?', '{}', '{}', 'İfade: ∀x∃y(y > x).
Değili: ∃x∀y(y ≤ x), yani "Bütün reel sayılardan büyük ya da eşit olan bir x vardır" (en büyük reel sayı vardır).
Reel sayılarda en büyük sayı olmadığı için asıl ifade doğru, değili yanlıştır.', 3, '5. ünite, İç içe niceleyicilerin değili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k1', 'ayrik', 'ay-u6', 6, 'mcq', 'original', '"Sokrates insansa, Sokrates ölümlüdür. Sokrates insandır. ∴ Sokrates ölümlüdür." ifadesinin formu nedir ve geçerli midir?', '{"choices":["Modus ponens; geçerlidir, ön koşullar doğru olduğundan sonuç da doğrudur.","Modus tollens; geçerlidir ama sonuç yanlış olabilir.","Sonucu teyit eden yanıltmaca; geçersizdir.","Hipotezi inkar eden yanıltmaca; geçersizdir."]}', '{"index":0}', 'Form: p → q, p ∴ q. Bu modus ponenstir ve geçerlidir; ön koşullar doğru olduğu için sonuç doğrudur.', 1, 'Rosen 1.6, alıştırma 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k3a', 'ayrik', 'ay-u6', 6, 'mcq', 'original', '"Ayşe matematik öğrencisidir. Bundan dolayı, Ayşe ya matematik öğrencisidir ya da bilgisayar bilimi öğrencisidir." ifadesinde hangi çıkarım kuralı kullanılır?', '{"choices":["Modus ponens","Modus tollens","Varsayıma dayalı kıyas","Ayırıcı kıyas","Toplama","Sadeleştirme"]}', '{"index":4}', 'p ∴ p ∨ q formu toplamadır.', 1, 'Rosen 1.6, alıştırma 3a', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k3b', 'ayrik', 'ay-u6', 6, 'mcq', 'original', '"Ersin matematik ve bilgisayar bilimi öğrencisidir. Bundan dolayı, Ersin matematik öğrencisidir." ifadesinde hangi çıkarım kuralı kullanılır?', '{"choices":["Modus ponens","Modus tollens","Varsayıma dayalı kıyas","Ayırıcı kıyas","Toplama","Sadeleştirme"]}', '{"index":5}', 'p ∧ q ∴ p formu sadeleştirmedir.', 1, 'Rosen 1.6, alıştırma 3b', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k3d', 'ayrik', 'ay-u6', 6, 'mcq', 'original', '"Bugün kar yağarsa, üniversite kapanacak. Bugün üniversite kapalı değil. Bundan dolayı, bugün kar yağmadı." ifadesinde hangi çıkarım kuralı kullanılır?', '{"choices":["Modus ponens","Modus tollens","Varsayıma dayalı kıyas","Ayırıcı kıyas","Toplama","Sadeleştirme"]}', '{"index":1}', 'p → q, ¬q ∴ ¬p formu modus tollenstir.', 1, 'Rosen 1.6, alıştırma 3d', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k3e', 'ayrik', 'ay-u6', 6, 'mcq', 'original', '"Yüzmeye gidersem, güneşte uzun süre kalacağım. Uzun süre güneşte kalırsam, güneş yanığım olacak. Bundan dolayı, yüzmeye gidersem güneş yanığım olacak." ifadesinde hangi çıkarım kuralı kullanılır?', '{"choices":["Modus ponens","Modus tollens","Varsayıma dayalı kıyas","Ayırıcı kıyas","Toplama","Sadeleştirme"]}', '{"index":2}', 'p → q, q → r ∴ p → r formu varsayıma dayalı kıyastır.', 1, 'Rosen 1.6, alıştırma 3e', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k5', 'ayrik', 'ay-u6', 6, 'yaz', 'original', 'Çıkarım kurallarını kullanarak "Remzi çok çalışır", "Remzi çok çalışırsa, aptal bir çocuktur" ve "Remzi aptal bir çocuksa, işe giremeyecek" hipotezlerinin "Remzi işe giremeyecek" sonucunu verdiğini gösteriniz.', '{}', '{}', 'w: Remzi çok çalışır, d: Remzi aptal bir çocuktur, j: Remzi işe girer.

1. w (hipotez)
2. w → d (hipotez)
3. d (1 ve 2''den modus ponens)
4. d → ¬j (hipotez)
5. ¬j (3 ve 4''ten modus ponens)', 2, 'Rosen 1.6, alıştırma 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k7', 'ayrik', 'ay-u6', 6, 'yaz', 'original', '"Bütün insanlar ölümlüdür. Sokrates bir insandır. Bundan dolayı, Sokrates ölümlüdür." ifadesinde hangi çıkarım kuralları kullanılmıştır?', '{}', '{}', '1. ∀x(İ(x) → Ö(x)) ön koşulundan evrensel özelleme ile İ(Sokrates) → Ö(Sokrates).
2. İ(Sokrates) ön koşulu ile modus ponens: Ö(Sokrates).

Bu iki kuralın birlikte kullanımına evrensel modus ponens de denir.', 2, 'Rosen 1.6, alıştırma 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k9c', 'ayrik', 'ay-u6', 6, 'fill', 'original', '"Ya zekiyim ya da şanslıyım." "Şanslı değilim." "Şanslıysam, piyango kazanacağım." ön koşullarından hangi sonuç çıkar? (Kısa bir cümleyle yazınız: "... zekiyim")', '{"blanks":1}', '{"blanks":[["zekiyim","ben zekiyim"]]}', 'z ∨ ş ve ¬ş ön koşullarından ayırıcı kıyasla z: "Zekiyim." Üçüncü ön koşul, ş yanlış olduğu için bir şey vermez.', 2, 'Rosen 1.6, alıştırma 9c', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k15b', 'ayrik', 'ay-u6', 6, 'tf', 'original', '"Her bilgisayar bilimi öğrencisi ayrık matematik alır. Ayşe ayrık matematik alıyor. Bundan dolayı, Ayşe bilgisayar bilimi öğrencisidir." çıkarımı geçerlidir.', '{}', '{"value":false}', 'Yanlış. Bu sonucu teyit eden yanıltmacadır: p → q ve q''dan p çıkmaz. Ayşe başka bir bölümden olup ayrık matematik alıyor olabilir.', 2, 'Rosen 1.6, alıştırma 15b', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k15c', 'ayrik', 'ay-u6', 6, 'tf', 'original', '"Bütün papağanlar meyve sever. Evcil kuşum papağan değildir. Bundan dolayı, evcil kuşum meyve sevmez." çıkarımı geçerlidir.', '{}', '{"value":false}', 'Yanlış. Bu hipotezi inkar eden yanıltmacadır: p → q ve ¬p''den ¬q çıkmaz.', 2, 'Rosen 1.6, alıştırma 15c', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k15d', 'ayrik', 'ay-u6', 6, 'tf', 'original', '"Her gün granola yiyen kişi sağlıklıdır. Lara sağlıksızdır. Bundan dolayı, Lara her gün granola yemez." çıkarımı geçerlidir.', '{}', '{"value":true}', 'Doğru. Evrensel özelleme ve modus tollens (evrensel modus tollens) kullanılır.', 2, 'Rosen 1.6, alıştırma 15d', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-k19', 'ayrik', 'ay-u6', 6, 'yaz', 'original', 'Aşağıdaki ifadelerin geçerli olup olmadığını belirleyiniz. Geçerliyse hangi çıkarım kuralı kullanılmıştır? Değilse ne tür mantıksal hata vardır?

a) n reel bir sayı ve n > 1 ise n² > 1''dir. Farz edelim ki n² > 1. O zaman, n > 1''dir.
b) n reel bir sayı ve n > 3 ise n² > 9. Farz edelim ki n² ≤ 9. O zaman, n ≤ 3.
c) n reel bir sayı ve n > 2 ise n² > 4. Farz edelim ki n ≤ 2. O zaman, n² ≤ 4.', '{}', '{}', 'a) Geçersiz: sonucu teyit eden yanıltmaca. (n = −2 için n² > 1 ama n > 1 değil.)
b) Geçerli: modus tollens (p → q, ¬q ∴ ¬p).
c) Geçersiz: hipotezi inkar eden yanıltmaca. (n = −3 için n ≤ 2 ama n² = 9 > 4.)', 3, 'Rosen 1.6, alıştırma 19', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-gecerli-tanim', 'ayrik', 'ay-u6', 6, 'mcq', 'derived', 'Bir argüman (ifade formu) ne zaman geçerlidir?', '{"choices":["Ön koşulların hepsi doğruyken sonucun da doğru olması gerekiyorsa","Sonuç her zaman doğruysa","Ön koşullardan en az biri doğruysa","Ön koşullar ve sonuç aynı değişkenleri içeriyorsa"]}', '{"index":0}', 'Geçerlilik, (p₁ ∧ p₂ ∧ ... ∧ pₙ) → q''nun totoloji olması demektir.', 1, '6. ünite, Geçerli argüman', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-gecerli-yanlis', 'ayrik', 'ay-u6', 6, 'tf', 'derived', 'Geçerli bir argümanın sonucu yanlış olabilir.', '{}', '{"value":true}', 'Doğru. Ön koşullardan biri yanlışsa geçerli bir argüman yanlış bir sonuç verebilir. Kitaptaki örnek: √2 > 3/2 ise (√2)² > (3/2)² argümanı geçerlidir ama ön koşul yanlıştır.', 2, '6. ünite, Geçerli argüman', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-arguman-sonuc', 'ayrik', 'ay-u6', 6, 'fill', 'derived', 'Bir argümanda son önermeye sonuç, diğer önermelere ise ____ denir.', '{"blanks":1}', '{"blanks":[["ön koşul","öncül","hipotez","ön koşullar","öncüller"]]}', 'Sonuçtan önceki önermeler ön koşullardır (öncüller).', 1, '6. ünite, Geçerli argüman', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-mp', 'ayrik', 'ay-u6', 6, 'fill', 'derived', 'Modus ponens''in totolojisini yazınız: (p ∧ (p → q)) → ____', '{"blanks":1,"semboller":true}', '{"blanks":[["q"]]}', 'Modus ponens: (p ∧ (p → q)) → q.', 1, '6. ünite, Önermeli mantıkta çıkarım kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-ayirici', 'ayrik', 'ay-u6', 6, 'mcq', 'derived', 'p ∨ q ve ¬p ön koşullarından q sonucunu çıkaran kural hangisidir?', '{"choices":["Ayırıcı kıyas","Varsayıma dayalı kıyas","Toplama","Modus tollens"]}', '{"index":0}', 'Ayırıcı kıyas: (p ∨ q) ∧ ¬p → q.', 1, '6. ünite, Önermeli mantıkta çıkarım kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-birlestirme', 'ayrik', 'ay-u6', 6, 'mcq', 'derived', 'p ve q ön koşullarından p ∧ q sonucunu çıkaran kural hangisidir?', '{"choices":["Birleştirme","Sadeleştirme","Toplama","Ayırıcı kıyas"]}', '{"index":0}', 'Birleştirme: ((p) ∧ (q)) → (p ∧ q).', 1, '6. ünite, Önermeli mantıkta çıkarım kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-yelken', 'ayrik', 'ay-u6', 6, 'yaz', 'derived', '"Yağmur yağmazsa veya hava sisli değilse, yelken yarışı yapılacak ve hayat kurtarma gösterisi devam edecek", "Yelken yarışı yapılırsa, kupa verilecek" ve "Kupa verilmedi" hipotezlerinden "Yağmur yağdı" sonucunu çıkarım kurallarıyla elde ediniz.', '{}', '{}', 'r: yağmur yağar, f: sisli, s: yarış yapılır, l: gösteri devam eder, t: kupa verilir.

1. ¬t (hipotez)
2. s → t (hipotez)
3. ¬s (1, 2 modus tollens)
4. (¬r ∨ ¬f) → (s ∧ l) (hipotez)
5. ¬(s ∧ l) → ¬(¬r ∨ ¬f) (4''ün zıt-pozitifi)
6. ¬s ∨ ¬l (3''ten toplama), yani ¬(s ∧ l)
7. ¬(¬r ∨ ¬f) (5, 6 modus ponens), yani r ∧ f
8. r (sadeleştirme)', 3, '6. ünite, Önermeli mantıkta çıkarım kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-cozum-kurali', 'ayrik', 'ay-u6', 6, 'tf', 'derived', 'p ∨ q ve ¬p ∨ r ön koşullarından q ∨ r sonucu çıkarılabilir.', '{}', '{"value":true}', 'Doğru. Bu, ((p ∨ q) ∧ (¬p ∨ r)) → (q ∨ r) totolojisine dayanan kuraldır (resolution). p doğruysa r, yanlışsa q doğru olmalıdır.', 2, '6. ünite, Önermeli mantıkta çıkarım kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-teyit', 'ayrik', 'ay-u6', 6, 'mcq', 'derived', 'p → q ve q ön koşullarından p sonucunu çıkarmak hangi hatadır?', '{"choices":["Sonucu teyit eden yanıltmaca","Hipotezi inkar eden yanıltmaca","Modus tollens","Ayırıcı kıyas"]}', '{"index":0}', '((p → q) ∧ q) → p bir totoloji değildir (p yanlış, q doğru iken yanlıştır). Bu hata sonucu teyit eden yanıltmacadır.', 2, '6. ünite, Safsatalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-inkar', 'ayrik', 'ay-u6', 6, 'mcq', 'derived', 'p → q ve ¬p ön koşullarından ¬q sonucunu çıkarmak hangi hatadır?', '{"choices":["Hipotezi inkar eden yanıltmaca","Sonucu teyit eden yanıltmaca","Modus ponens","Varsayıma dayalı kıyas"]}', '{"index":0}', '((p → q) ∧ ¬p) → ¬q totoloji değildir; bu hata hipotezi inkar eden yanıltmacadır.', 2, '6. ünite, Safsatalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-kitap-problem', 'ayrik', 'ay-u6', 6, 'tf', 'derived', '"Bu kitaptaki her problemi yaparsanız ayrık matematiği öğrenirsiniz. Ayrık matematiği öğrendiniz. Öyleyse kitaptaki her problemi yaptınız." argümanı geçerlidir.', '{}', '{"value":false}', 'Yanlış. Kitaptaki örnek: bu, sonucu teyit eden yanıltmacadır. Ayrık matematik başka yollarla da öğrenilebilir.', 2, '6. ünite, Safsatalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-evrensel-ozelleme', 'ayrik', 'ay-u6', 6, 'mcq', 'derived', '∀xP(x) ön koşulundan, tanım kümesinin belirli bir c elemanı için P(c) sonucunu çıkaran kural hangisidir?', '{"choices":["Evrensel özelleme","Evrensel genelleme","Varoluşsal özelleme","Varoluşsal genelleme"]}', '{"index":0}', 'Evrensel özelleme: ∀xP(x) ∴ P(c). Örnek: "Bütün kadınlar bilgedir" → "Nisa bilgedir".', 1, '6. ünite, Niceleyicili ifadeler için çıkarım kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-varolussal-genelleme', 'ayrik', 'ay-u6', 6, 'mcq', 'derived', 'P(c)''nin belirli bir c için doğru olduğu biliniyorsa ∃xP(x) sonucunu çıkaran kural hangisidir?', '{"choices":["Varoluşsal genelleme","Varoluşsal özelleme","Evrensel genelleme","Evrensel özelleme"]}', '{"index":0}', 'Tek bir örnek, varlık iddiası için yeterlidir: P(c) ∴ ∃xP(x).', 2, '6. ünite, Niceleyicili ifadeler için çıkarım kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-evrensel-genelleme', 'ayrik', 'ay-u6', 6, 'tf', 'derived', 'Evrensel genellemeyle ∀xP(x) sonucuna varmak için c''nin rastgele (keyfi) seçilmiş bir eleman olması ve P(c)''nin bu c için gösterilmesi gerekir.', '{}', '{"value":true}', 'Doğru. c özel bir eleman değil, tanım kümesinden keyfi bir eleman olmalıdır.', 2, '6. ünite, Niceleyicili ifadeler için çıkarım kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u6-t-ferda', 'ayrik', 'ay-u6', 6, 'yaz', 'derived', 'H(x) "x mutludur" olsun. "∃xH(x) verilmiş olsun, H(Ferda) sonucuna varırız. Bundan dolayı, Ferda mutludur." çıkarımında ne yanlıştır?', '{}', '{}', 'Varoluşsal özelleme, ∃xH(x)''ten H(c) çıkarmaya izin verir ama c''nin kim olduğunu bilmeyiz; c belirli bir kişi (Ferda) olarak seçilemez. Mutlu olan biri vardır, ama bu kişinin Ferda olduğu sonucu çıkmaz.', 3, '6. ünite, Niceleyicili ifadeler için çıkarım kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-k2', 'ayrik', 'ay-u7', 7, 'yaz', 'original', 'İki çift tam sayının toplamının çift olduğunu doğrudan ispat kullanarak gösteriniz.', '{}', '{}', 'm ve n çift olsun. O halde m = 2k ve n = 2l olacak şekilde k ve l tam sayıları vardır.

m + n = 2k + 2l = 2(k + l).

k + l bir tam sayı olduğundan m + n, 2''nin bir katıdır; yani çifttir. ∎', 1, 'Rosen 1.7, alıştırma 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-k6', 'ayrik', 'ay-u7', 7, 'yaz', 'original', 'İki tek tam sayının çarpımının tek olduğunu doğrudan ispat kullanarak gösteriniz.', '{}', '{}', 'm = 2k + 1 ve n = 2l + 1 olsun.

mn = (2k + 1)(2l + 1) = 4kl + 2k + 2l + 1 = 2(2kl + k + l) + 1.

2kl + k + l bir tam sayı olduğundan mn tektir. ∎', 2, 'Rosen 1.7, alıştırma 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-k9', 'ayrik', 'ay-u7', 7, 'yaz', 'original', 'İrrasyonel ve rasyonel sayının toplamının irrasyonel olduğunu çelişki ile ispat kullanarak gösteriniz.', '{}', '{}', 'r rasyonel, i irrasyonel olsun ve r + i''nin rasyonel olduğunu varsayalım (çelişki varsayımı).

r = a/b ve r + i = c/d (a, b, c, d tam sayı, b, d ≠ 0) yazılabilir. O zaman

i = (r + i) − r = c/d − a/b = (bc − ad)/(bd).

bc − ad ve bd tam sayıdır, bd ≠ 0; yani i rasyoneldir. Bu, i''nin irrasyonel olmasıyla çelişir. Demek ki r + i irrasyoneldir. ∎', 2, 'Rosen 1.7, alıştırma 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-k11', 'ayrik', 'ay-u7', 7, 'mcq', 'original', '"İki irrasyonel sayının çarpımı her zaman irrasyoneldir" iddiası için hangisi doğrudur?', '{"choices":["Yanlıştır; √2 · √2 = 2 bir karşı örnektir.","Doğrudur; çelişki ile ispatlanır.","Doğrudur; doğrudan ispatla gösterilir.","Ne doğru ne yanlış olduğu bilinmemektedir."]}', '{"index":0}', '√2 irrasyoneldir ama √2 · √2 = 2 rasyoneldir. Tek bir karşı örnek iddiayı çürütür.', 2, 'Rosen 1.7, alıştırma 11', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-k16', 'ayrik', 'ay-u7', 7, 'yaz', 'original', 'Eğer m ve n tam sayılar ve mn çift ise, o zaman ya m çift ya da n çifttir. İspatlayınız.', '{}', '{}', 'Zıt-pozitif ile ispat: m ve n''nin ikisi de tek ise mn''nin tek olduğunu gösterelim.

m = 2k + 1, n = 2l + 1 ise mn = 2(2kl + k + l) + 1, yani tektir.

Zıt-pozitif doğru olduğu için asıl ifade de doğrudur: mn çift ise m veya n çifttir. ∎', 2, 'Rosen 1.7, alıştırma 16', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-k18', 'ayrik', 'ay-u7', 7, 'yaz', 'original', 'Eğer n tam sayı ve 3n + 2 çift ise, o zaman n''nin çift olduğunu a) zıt-pozitif ile ispat, b) çelişki ile ispat kullanarak gösteriniz.', '{}', '{}', 'a) Zıt-pozitif: n tek ise 3n + 2 tektir. n = 2k + 1 ise 3n + 2 = 6k + 5 = 2(3k + 2) + 1, tektir. ∎

b) Çelişki: 3n + 2 çift ve n tek olsun. n = 2k + 1 için 3n + 2 = 2(3k + 2) + 1 tek olur; 3n + 2''nin çift olmasıyla çelişir. O halde n çifttir. ∎', 2, 'Rosen 1.7, alıştırma 18', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-k19', 'ayrik', 'ay-u7', 7, 'mcq', 'original', 'P(n): "Eğer n > 1 pozitif tam sayı ise, o zaman n² > n" olsun. P(0) önermesini ispatlamak için hangi tür ispat kullanılır?', '{"choices":["İçi boş ispat","Aşikar ispat","Çelişki ile ispat","Karşı örnek"]}', '{"index":0}', 'n = 0 için hipotez "0 > 1" yanlıştır; şartlı ifade hipotez yanlış olduğundan doğrudur. Buna içi boş ispat denir.', 2, 'Rosen 1.7, alıştırma 19', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-k22', 'ayrik', 'ay-u7', 7, 'yaz', 'original', 'Sadece mavi ve siyah çorapların olduğu bir çekmeceden 3 çorap seçilirse, bunlardan en az ikisinin aynı renkte olacağını ispatlayınız.', '{}', '{}', 'Çelişki ile ispat: Seçilen 3 çoraptan hiçbir ikisinin aynı renkte olmadığını varsayalım. O zaman en fazla bir mavi ve en fazla bir siyah çorap vardır; toplam en fazla 2 çorap eder. Bu, 3 çorap seçilmesiyle çelişir. ∎', 2, 'Rosen 1.7, alıştırma 22', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-k26', 'ayrik', 'ay-u7', 7, 'yaz', 'original', 'n pozitif tam sayı ise, n''nin ancak ve ancak 7n + 4 çift ise çift olduğunu ispatlayınız.', '{}', '{}', 'Çift şartlı ifade için iki yön ispatlanır.

(→) n = 2k ise 7n + 4 = 14k + 4 = 2(7k + 2), çifttir.

(←) Zıt-pozitif: n = 2k + 1 tek ise 7n + 4 = 14k + 11 = 2(7k + 5) + 1, tektir. Yani 7n + 4 çift ise n çifttir. ∎', 2, 'Rosen 1.7, alıştırma 26', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-k35', 'ayrik', 'ay-u7', 7, 'yaz', 'original', '√(x + 3) = 3 − x denkleminin çözümlerini bulmak için şu adımlar atılıyor:

(1) √(x + 3) = 3 − x verilmiş olsun.
(2) İki tarafın karesi alınarak x + 3 = x² − 6x + 9 elde edilir.
(3) İki taraftan x + 3 çıkarılarak 0 = x² − 7x + 6 elde edilir.
(4) Çarpanlara ayırarak 0 = (x − 1)(x − 6) elde edilir.
(5) x = 1 veya x = 6.

Adımlar doğru mudur? Bulunan değerlerin hepsi çözüm müdür?', '{}', '{}', 'Her adım bir sonrakini gerektirir ama (2) adımı geri döndürülemez: kare almak, 3 − x''in negatif olduğu durumları da ekler. Bu yüzden bulunan değerler kontrol edilmelidir.

x = 1: √4 = 2 ve 3 − 1 = 2, çözümdür.
x = 6: √9 = 3 ama 3 − 6 = −3, çözüm değildir.

Denklemin tek çözümü x = 1''dir.', 3, 'Rosen 1.7, alıştırma 35', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-teorem', 'ayrik', 'ay-u7', 7, 'mcq', 'derived', 'Doğruluğu ispatlanabilen bir ifadeye ne ad verilir?', '{"choices":["Teorem","Aksiyom","Hipotez","Sanı"]}', '{"index":0}', 'Teorem, doğru olduğu gösterilebilen ifadedir. Daha az önemli teoremlere önerme de denir.', 1, '7. ünite, Teorem, aksiyom, lem ve sonuç', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-aksiyom', 'ayrik', 'ay-u7', 7, 'fill', 'derived', 'İspat yapılmadan doğru olduğu kabul edilen ifadelere ____ (veya postülat) denir.', '{"blanks":1}', '{"blanks":[["aksiyom","aksiyomlar","belit"]]}', 'Aksiyomlar ispatsız doğru kabul edilir; ispatlar aksiyomları ve daha önce ispatlanmış teoremleri kullanır.', 1, '7. ünite, Teorem, aksiyom, lem ve sonuç', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-lem', 'ayrik', 'ay-u7', 7, 'mcq', 'derived', 'Diğer teoremleri ispatlamakta yardımcı olan, kendi başına çok önemli olmayan teoreme ne denir?', '{"choices":["Lem","Sonuç","Sanı","Aksiyom"]}', '{"index":0}', 'Lem yardımcı teoremdir. Bir teoremden doğrudan çıkan sonuçlara ise sonuç (corollary) denir.', 1, '7. ünite, Teorem, aksiyom, lem ve sonuç', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-sani', 'ayrik', 'ay-u7', 7, 'tf', 'derived', 'Sanı (conjecture), doğru olduğu önerilen ama henüz ispatlanmamış bir ifadedir; ispatlanırsa teorem olur.', '{}', '{"value":true}', 'Doğru. Sanı ispatlanırsa teorem olur, yanlış olduğu gösterilirse çürür.', 1, '7. ünite, Teorem, aksiyom, lem ve sonuç', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-dogrudan-tanim', 'ayrik', 'ay-u7', 7, 'mcq', 'derived', 'p → q''nun doğrudan ispatında ne yapılır?', '{"choices":["p''nin doğru olduğu varsayılır ve q''nun doğru olması gerektiği gösterilir.","q''nun yanlış olduğu varsayılır ve p''nin yanlış olduğu gösterilir.","p ve ¬q birlikte varsayılıp çelişki elde edilir.","q''nun doğru olduğu gösterilir; p''ye bakılmaz."]}', '{"index":0}', 'Doğrudan ispatta hipotez doğru kabul edilip çıkarım kurallarıyla sonucun doğruluğu gösterilir.', 1, '7. ünite, Doğrudan ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-cift-tanim', 'ayrik', 'ay-u7', 7, 'fill', 'derived', 'n tam sayısı, n = 2k olacak şekilde bir k tam sayısı varsa çifttir; n = ____ olacak şekilde bir k tam sayısı varsa tektir.', '{"blanks":1}', '{"blanks":[["2k + 1","2k+1"]]}', 'Tek tam sayı n = 2k + 1 biçimindedir. Bir tam sayı ya çifttir ya tektir, ikisi birden olamaz.', 1, '7. ünite, Doğrudan ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-kare', 'ayrik', 'ay-u7', 7, 'yaz', 'derived', 'n tek tam sayı ise n²''nin de tek olduğunu doğrudan ispatla gösteriniz.', '{}', '{}', 'n = 2k + 1 olsun. n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1. 2k² + 2k tam sayı olduğundan n² tektir. ∎', 2, '7. ünite, Doğrudan ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-basit', 'ayrik', 'ay-u7', 7, 'tf', 'derived', 'p → q ifadesinde q''nun doğru olduğu gösterilirse, p → q de doğru olur; buna aşikar ispat denir.', '{}', '{"value":true}', 'Doğru. Sonuç doğruysa şartlı ifade doğrudur; bu yolla yapılan ispata aşikar ispat denir.', 2, '7. ünite, Doğrudan ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-zp-tanim', 'ayrik', 'ay-u7', 7, 'mcq', 'derived', 'p → q''yu zıt-pozitif ile ispatlarken hangi ifade ispatlanır?', '{"choices":["¬q → ¬p","q → p","¬p → ¬q","p ∧ ¬q"]}', '{"index":0}', 'p → q ≡ ¬q → ¬p olduğu için zıt-pozitif ispatlanır. Bu dolaylı ispatın bir türüdür.', 1, '7. ünite, Zıt-pozitif ile ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-zp-ornek', 'ayrik', 'ay-u7', 7, 'yaz', 'derived', 'n tam sayı olmak üzere "n² çift ise n çifttir" ifadesini zıt-pozitif ile ispatlayınız.', '{}', '{}', 'Zıt-pozitif: n tek ise n² tektir.
n = 2k + 1 için n² = 2(2k² + 2k) + 1 tektir.
Zıt-pozitif doğru olduğundan asıl ifade de doğrudur. ∎', 2, '7. ünite, Zıt-pozitif ile ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-ab-n', 'ayrik', 'ay-u7', 7, 'yaz', 'derived', 'n = ab (a, b pozitif tam sayılar) ise a ≤ √n veya b ≤ √n olduğunu ispatlayınız.', '{}', '{}', 'Zıt-pozitif: a > √n ve b > √n olduğunu varsayalım. O zaman ab > √n · √n = n olur, yani ab ≠ n. Zıt-pozitif doğru olduğundan asıl ifade de doğrudur. ∎', 3, '7. ünite, Zıt-pozitif ile ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-celiski-tanim', 'ayrik', 'ay-u7', 7, 'mcq', 'derived', 'p''yi çelişki ile ispatlarken hangi adım atılır?', '{"choices":["¬p doğru varsayılır ve bir çelişkiye ulaşılır.","p doğru varsayılır ve buradan q gösterilir.","¬q doğru varsayılır ve buradan ¬p gösterilir.","p için tek bir örnek bulunup gösterilir."]}', '{"index":0}', '¬p → (r ∧ ¬r) doğruysa ¬p yanlıştır, yani p doğrudur.', 1, '7. ünite, Çelişki ile ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-kok2', 'ayrik', 'ay-u7', 7, 'yaz', 'derived', '√2''nin irrasyonel olduğunu çelişki ile ispatlayınız.', '{}', '{}', '√2''nin rasyonel olduğunu varsayalım: √2 = a/b, a ve b ortak çarpanı olmayan tam sayılar, b ≠ 0.

2 = a²/b², yani a² = 2b². a² çift olduğundan a çifttir: a = 2c. O zaman 4c² = 2b², yani b² = 2c²; b² çift olduğundan b de çifttir.

a ve b''nin ikisi de 2''ye bölünür; bu, ortak çarpanları olmamasıyla çelişir. Demek ki √2 irrasyoneldir. ∎', 3, '7. ünite, Çelişki ile ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-gun', 'ayrik', 'ay-u7', 7, 'fill', 'derived', 'Herhangi 22 gün seçildiğinde, en az kaç tanesinin haftanın aynı gününe düştüğü çelişki ile ispatlanabilir?', '{"blanks":1}', '{"blanks":[["4","dört"]]}', 'Kitaptaki örnek: her güne en fazla 3 gün düşseydi toplam en fazla 7 · 3 = 21 gün olurdu; 22 ile çelişir. En az 4 gün aynı haftanın gününe düşer.', 2, '7. ünite, Çelişki ile ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-cift-yon', 'ayrik', 'ay-u7', 7, 'mcq', 'derived', 'p ↔ q biçimindeki bir teoremi ispatlamak için ne gösterilmelidir?', '{"choices":["p → q ve q → p","Yalnız p → q","p ∧ q","¬p → ¬q ve ¬q → ¬p''den yalnız biri"]}', '{"index":0}', 'p ↔ q ≡ (p → q) ∧ (q → p); iki yön ayrı ayrı ispatlanır.', 1, '7. ünite, Çift şartlı ifadelerin ispatı ve hatalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-hata-bolme', 'ayrik', 'ay-u7', 7, 'yaz', 'derived', 'Aşağıdaki "ispat"ta 1 = 2 elde ediliyor. Hangi adım hatalıdır?

1. a = b
2. a² = ab
3. a² − b² = ab − b²
4. (a − b)(a + b) = b(a − b)
5. a + b = b
6. 2b = b
7. 2 = 1', '{}', '{}', '5. adım hatalıdır. 4. adımdan 5. adıma geçerken iki taraf (a − b)''ye bölünmüştür; ama a = b olduğundan a − b = 0''dır ve sıfıra bölme yapılamaz.', 3, '7. ünite, Çift şartlı ifadelerin ispatı ve hatalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u7-t-dongusel', 'ayrik', 'ay-u7', 7, 'tf', 'derived', 'İspatlanmak istenen ifadeye denk bir ifadeyi ispatın bir adımında kullanmak, "döngüsel mantık" (soruyu soru ile cevaplamak) denilen bir hatadır.', '{}', '{"value":true}', 'Doğru. Bu hata, ispatlanacak şeyin doğru olduğunu baştan varsaymaktır.', 2, '7. ünite, Çift şartlı ifadelerin ispatı ve hatalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-k1', 'ayrik', 'ay-u8', 8, 'yaz', 'original', 'n pozitif tam sayı, 1 ≤ n ≤ 4 olmak üzere n² + 1 ≥ 2ⁿ olduğunu ispatlayınız.', '{}', '{}', 'Tükenmeli ispat (dört durum):

n = 1: 1 + 1 = 2 ≥ 2¹ = 2.
n = 2: 4 + 1 = 5 ≥ 2² = 4.
n = 3: 9 + 1 = 10 ≥ 2³ = 8.
n = 4: 16 + 1 = 17 ≥ 2⁴ = 16.

Dört durumda da eşitsizlik sağlanır. ∎', 1, 'Rosen 1.8, alıştırma 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-k3', 'ayrik', 'ay-u8', 8, 'yaz', 'original', 'x ve y iki reel sayı ise max(x, y) + min(x, y) = x + y olduğunu ispatlayınız. (İpucu: x ≥ y ve x < y durumlarını ayrı inceleyiniz.)', '{}', '{}', 'Durum 1: x ≥ y. max(x, y) = x, min(x, y) = y; toplam x + y.
Durum 2: x < y. max(x, y) = y, min(x, y) = x; toplam y + x = x + y.

İki durumda da eşitlik sağlanır. ∎', 2, 'Rosen 1.8, alıştırma 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-k6', 'ayrik', 'ay-u8', 8, 'yaz', 'original', 'x ve y farklı paritede (biri tek, biri çift) tam sayılar olmak üzere, genelliği bozmadan 5x + 5y''nin tek olduğunu ispatlayınız.', '{}', '{}', 'Genelliği bozmadan x çift, y tek olsun (diğer durum x ile y''nin yer değiştirmesiyle aynıdır). x = 2m, y = 2n + 1.

5x + 5y = 10m + 10n + 5 = 2(5m + 5n + 2) + 1, tektir. ∎', 2, 'Rosen 1.8, alıştırma 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-k7', 'ayrik', 'ay-u8', 8, 'yaz', 'original', 'x ve y reel sayılar olmak üzere |x| + |y| ≥ |x + y| üçgen eşitsizliğini ispatlayınız.', '{}', '{}', 'Durumlara göre ispat.

1) x ≥ 0, y ≥ 0: |x| + |y| = x + y = |x + y|.
2) x < 0, y < 0: |x| + |y| = −x − y = −(x + y) = |x + y|.
3) x ≥ 0, y < 0 (diğer karışık durum simetriktir): |x| + |y| = x − y. Bir yandan x + y < x ≤ x − y, öbür yandan −(x + y) = −x − y ≤ −y ≤ x − y. |x + y| bu iki sayıdan biri olduğu için |x + y| ≤ x − y.

Her durumda |x| + |y| ≥ |x + y|. ∎', 3, 'Rosen 1.8, alıştırma 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-k8', 'ayrik', 'ay-u8', 8, 'mcq', 'original', '"Kendisini geçmeyen pozitif tam sayıların toplamına eşit olan bir pozitif tam sayı vardır" ifadesini ispatlamanın yolu ve türü hangisidir?', '{"choices":["n = 1 örneğini göstermek; yapıcı ispat","Çelişki ile ispat; yapıcı olmayan ispat","Tükenmeli ispat; yapıcı olmayan ispat","Karşı örnek; ifade yanlıştır"]}', '{"index":0}', '1''i geçmeyen pozitif tam sayıların toplamı 1''dir. Somut bir örnek gösterildiği için ispat yapıcıdır.', 2, 'Rosen 1.8, alıştırma 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-k13', 'ayrik', 'ay-u8', 8, 'yaz', 'original', 'x bir rasyonel sayı ve y bir irrasyonel sayı olsun. xy''nin irrasyonel olduğunu ispatlayınız ya da aksini gösteriniz.', '{}', '{}', 'İfade genel olarak yanlıştır. Karşı örnek: x = 0 rasyoneldir, y = √2 irrasyoneldir ama xy = 0 rasyoneldir.

(x ≠ 0 eklenirse ifade doğru olur: xy = r rasyonel olsaydı y = r/x rasyonel olurdu.)', 2, 'Rosen 1.8, alıştırma 13', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-k16', 'ayrik', 'ay-u8', 8, 'yaz', 'original', 'a, b ve c reel sayılar ve a ≠ 0 ise ax + b = c eşitliğinin tek bir çözümü olduğunu gösteriniz.', '{}', '{}', 'Varlık: x = (c − b)/a için a · (c − b)/a + b = c − b + b = c. Bir çözüm vardır.

Teklik: x ve y iki çözüm olsun: ax + b = c ve ay + b = c. Çıkarırsak a(x − y) = 0. a ≠ 0 olduğundan x = y. Çözüm tektir. ∎', 2, 'Rosen 1.8, alıştırma 16', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-k19', 'ayrik', 'ay-u8', 8, 'yaz', 'original', 'n bir tek tam sayı olsun. k − 2 ve k + 3''ün toplamı n olacak şekilde tek bir k tam sayısı olduğunu gösteriniz.', '{}', '{}', '(k − 2) + (k + 3) = 2k + 1 = n, yani k = (n − 1)/2.

Varlık: n tek olduğundan n − 1 çifttir, k = (n − 1)/2 bir tam sayıdır ve denklemi sağlar.
Teklik: 2k + 1 = n denkleminden k tek türlü belirlenir. ∎', 2, 'Rosen 1.8, alıştırma 19', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-tukenmeli', 'ayrik', 'ay-u8', 8, 'mcq', 'derived', 'Az sayıda örnek üzerinde tek tek kontrol yaparak bir teoremi ispatlamaya ne denir?', '{"choices":["Tükenmeli ispat","Yapıcı olmayan ispat","Zıt-pozitif ile ispat","İçi boş ispat"]}', '{"index":0}', 'Tüm olasılıklar tek tek denenerek yapılan ispat tükenmeli ispattır; durumlara göre ispatın özel bir halidir.', 1, '8. ünite, Durumlara göre ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-durum-mantik', 'ayrik', 'ay-u8', 8, 'fill', 'derived', 'Durumlara göre ispat hangi totolojiye dayanır? (p₁ ∨ p₂) → q ≡ (p₁ → q) ____ (p₂ → q). Boşluğa hangi bağlaç gelir?', '{"blanks":1,"semboller":true}', '{"blanks":[["∧","ve"]]}', '(p₁ ∨ p₂ ∨ ... ∨ pₙ) → q ≡ (p₁ → q) ∧ (p₂ → q) ∧ ... ∧ (pₙ → q). Her durum ayrı ispatlanır.', 2, '8. ünite, Durumlara göre ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-kare-son', 'ayrik', 'ay-u8', 8, 'yaz', 'derived', 'Bir tam sayının karesinin son basamağının 0, 1, 4, 5, 6 veya 9 olduğunu durumlara göre ispatla gösteriniz.', '{}', '{}', 'n²''nin son basamağı yalnız n''nin son basamağına bağlıdır. n''nin son basamağı d için d² ''nin son basamağı:

d = 0 → 0, 1 → 1, 2 → 4, 3 → 9, 4 → 6, 5 → 5, 6 → 6, 7 → 9, 8 → 4, 9 → 1.

On durumun hepsinde son basamak {0, 1, 4, 5, 6, 9} içindedir. ∎', 2, '8. ünite, Durumlara göre ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-genellik', 'ayrik', 'ay-u8', 8, 'tf', 'derived', '"Genelliği bozmadan" ifadesi, bir durum ispatlanınca diğer durumların da aynı biçimde (ör. değişkenlerin yer değiştirmesiyle) ispatlanacağını belirtmek için kullanılır.', '{}', '{"value":true}', 'Doğru. Örneğin x ve y simetrikse x ≥ y durumunu ispatlamak yeterlidir.', 2, '8. ünite, Durumlara göre ispat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-yapici', 'ayrik', 'ay-u8', 8, 'mcq', 'derived', '∃xP(x) ifadesinin, P(a)''yı doğru yapan belirli bir a elemanı bularak yapılan ispatına ne denir?', '{"choices":["Yapıcı varlık ispatı","Yapıcı olmayan varlık ispatı","Teklik ispatı","Tükenmeli ispat"]}', '{"index":0}', 'Bir tanık (örnek) gösterildiğinde ispat yapıcıdır.', 1, '8. ünite, Varlık ispatları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-ramanujan', 'ayrik', 'ay-u8', 8, 'fill', 'derived', 'İki farklı biçimde iki pozitif tam sayının küplerinin toplamı olarak yazılabilen kitaptaki pozitif tam sayı kaçtır? (1729 = 10³ + 9³ = 12³ + 1³)', '{"blanks":1}', '{"blanks":[["1729"]]}', '1729 = 10³ + 9³ = 12³ + 1³. Bu bir yapıcı varlık ispatıdır.', 2, '8. ünite, Varlık ispatları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-irrasyonel-us', 'ayrik', 'ay-u8', 8, 'yaz', 'derived', 'x ve y irrasyonel olmak üzere xʸ''nin rasyonel olabileceğini yapıcı olmayan bir ispatla gösteriniz.', '{}', '{}', '√2^√2 sayısını düşünelim.

Durum 1: √2^√2 rasyonel ise x = y = √2 ile işimiz biter.
Durum 2: √2^√2 irrasyonel ise x = √2^√2, y = √2 alalım: (√2^√2)^√2 = √2^(√2·√2) = √2² = 2, rasyoneldir.

İki durumdan birinde istenen x, y vardır; ama hangisi olduğunu bilmeyiz. Bu yüzden ispat yapıcı değildir. ∎', 3, '8. ünite, Varlık ispatları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-teklik-iki', 'ayrik', 'ay-u8', 8, 'mcq', 'derived', 'Teklik ispatı hangi iki parçadan oluşur?', '{"choices":["Varlık ve teklik","Hipotez ve sonuç","Durum 1 ve durum 2","Karşıt ve ters"]}', '{"index":0}', 'Önce istenen özellikte bir x''in var olduğu, sonra y ≠ x ise y''nin bu özelliği taşımadığı gösterilir.', 1, '8. ünite, Teklik ispatları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-teklik-mantik', 'ayrik', 'ay-u8', 8, 'fill', 'derived', '∃!xP(x) ifadesi, ∃x(P(x) ∧ ∀y(y ≠ x → ____)) biçiminde yazılır. Boşluğu doldurunuz.', '{"blanks":1,"semboller":true}', '{"blanks":[["¬P(y)"]]}', 'x dışındaki her y için P(y) yanlış olmalıdır: ∃x(P(x) ∧ ∀y(y ≠ x → ¬P(y))).', 2, '8. ünite, Teklik ispatları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-karsi-ornek', 'ayrik', 'ay-u8', 8, 'mcq', 'derived', '"Her pozitif tam sayı iki tam karenin toplamıdır" ifadesini çürütmek için hangisi yeterlidir?', '{"choices":["3''ün iki tam karenin toplamı olmadığını göstermek","1 = 1² + 0² eşitliğinin doğru olduğunu göstermek","Önce ifadenin değilini varsayıp çelişki aramak","Bütün pozitif tam sayıları tek tek denemek"]}', '{"index":0}', '3''ten küçük kareler 0 ve 1''dir; bunlarla 3 elde edilemez. Tek bir karşı örnek evrensel ifadeyi çürütür.', 1, '8. ünite, Karşı örnek ve strateji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-ileri-geri', 'ayrik', 'ay-u8', 8, 'mcq', 'derived', 'Kanıtlanacak q ifadesinden başlayıp, q''yu gerektiren p ifadesine ulaşmaya çalışan strateji hangisidir?', '{"choices":["Geriye doğru akıl yürütme","İleri doğru akıl yürütme","Tükenmeli ispat","Durumlara göre ispat"]}', '{"index":0}', 'Geriye doğru akıl yürütmede sonuçtan başlanır, ona götüren ifadeler aranır. Bulunduktan sonra ispat ileri yönde yazılır.', 2, '8. ünite, Karşı örnek ve strateji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-ortalama', 'ayrik', 'ay-u8', 8, 'yaz', 'derived', 'x ve y farklı pozitif reel sayılar ise aritmetik ortalamanın geometrik ortalamadan büyük olduğunu, yani (x + y)/2 > √(xy) olduğunu ispatlayınız.', '{}', '{}', 'Geriye doğru akıl yürütme ile ispat kurulur, sonra ileri yazılır:

x ≠ y olduğundan (x − y)² > 0, yani x² − 2xy + y² > 0.
İki tarafa 4xy eklenirse x² + 2xy + y² > 4xy, yani (x + y)² > 4xy.
x + y > 0 ve √(xy) > 0 olduğundan karekök alınabilir: x + y > 2√(xy).
İkiye bölünce (x + y)/2 > √(xy). ∎', 3, '8. ünite, Karşı örnek ve strateji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u8-t-sani', 'ayrik', 'ay-u8', 8, 'tf', 'derived', 'Fermat''ın son teoremi, uzun yıllar sanı olarak kaldıktan sonra Andrew Wiles tarafından ispatlanmıştır.', '{}', '{"value":true}', 'Doğru. xⁿ + yⁿ = zⁿ''nin n > 2 için pozitif tam sayı çözümü olmadığı 1990''larda Wiles tarafından ispatlanmıştır.', 1, '8. ünite, Karşı örnek ve strateji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-c36', 'ayrik', 'ay-u9', 9, 'mcq', 'original', 'A''nın m, B''nin n ve C''nin p elemanı varsa, AxBxC''nin kaç elemanı vardır?', '{"choices":["m(n+p)","mnp","m+n+p","(m+n)p"]}', '{"index":1}', 'A × B × C''nin elemanları (a, b, c) sıralı üçlüleridir. a için m, b için n, c için p seçenek olduğundan |A × B × C| = m · n · p.', 1, 'Çıkmış soru 36', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-k1', 'ayrik', 'ay-u9', 9, 'fill', 'original', 'Aşağıdaki kümelerin elemanlarını listeleyiniz.

a) {x | x, x² = 1 olacak şekildeki bir reel sayı}
d) {x | x, x² = 2 olacak şekildeki bir tam sayı}

Boşluk 1: a), Boşluk 2: d)', '{"blanks":2}', '{"blanks":[["{−1, 1}","{-1, 1}","{1, −1}","{1, -1}"],["∅","{}","boş küme"]]}', 'a) x² = 1''in reel çözümleri −1 ve 1''dir. d) x² = 2''nin tam sayı çözümü yoktur; küme boştur.', 1, 'Rosen 2.1, alıştırma 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-k5', 'ayrik', 'ay-u9', 9, 'fill', 'original', 'Aşağıdaki küme ikililerinin eşit olup olmadıklarını (evet/hayır) belirleyiniz.

a) {1, 3, 3, 3, 5, 5, 5, 5, 5}, {5, 3, 1}
b) {{1}}, {1, {1}}
c) ∅, {∅}

Boşluk 1: a), Boşluk 2: b), Boşluk 3: c)', '{"blanks":3}', '{"blanks":[["evet","eşit"],["hayır","eşit değil"],["hayır","eşit değil"]]}', 'a) Tekrar ve sıra önemsizdir, iki küme de {1, 3, 5}''tir. b) İkinci kümede 1 elemanı var, birincide yok. c) ∅''nin elemanı yoktur, {∅}''nin bir elemanı (∅) vardır.', 1, 'Rosen 2.1, alıştırma 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-k6', 'ayrik', 'ay-u9', 9, 'mcq', 'original', 'A={2, 4, 6}, B={2, 6}, C={4, 6}, D={4, 6, 8} olsun. Aşağıdakilerden kaç tanesi doğrudur? A kümesi B''nin alt kümesidir. B kümesi A''nın alt kümesidir. C kümesi A''nın alt kümesidir. C kümesi B''nin alt kümesidir.', '{"choices":["2","4","3","1"]}', '{"index":0}', 'B ⊆ A ve C ⊆ A doğrudur. A ⊆ B yanlıştır (4 ∉ B), C ⊆ B yanlıştır (4 ∉ B). İki tanesi doğrudur. (Kitapta ayrıca C ⊆ D olduğu da sorulur.)', 2, 'Rosen 2.1, alıştırma 6 · Çıkmış soru 35', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-k9', 'ayrik', 'ay-u9', 9, 'fill', 'original', 'Aşağıdaki önermelerin doğru (D) ya da yanlış (Y) olduğunu belirleyiniz.

Boşluk 1: 0 ∈ ∅, Boşluk 2: ∅ ∈ {0}, Boşluk 3: ∅ ⊂ {0}, Boşluk 4: {0} ∈ {0}, Boşluk 5: {∅} ⊆ {∅}', '{"blanks":5}', '{"blanks":[["Y","yanlış"],["Y","yanlış"],["D","doğru"],["Y","yanlış"],["D","doğru"]]}', 'Boş kümenin elemanı yoktur. {0}''ın tek elemanı 0''dır; ∅ ve {0} onun elemanı değildir. Boş küme her kümenin alt kümesidir ve {0}''dan farklı olduğu için öz alt kümesidir. Her küme kendisinin alt kümesidir.', 2, 'Rosen 2.1, alıştırma 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-k11', 'ayrik', 'ay-u9', 9, 'fill', 'original', 'Aşağıdaki önermelerin doğru (D) ya da yanlış (Y) olduğunu belirleyiniz.

Boşluk 1: x ∈ {x}, Boşluk 2: {x} ⊆ {x}, Boşluk 3: {x} ∈ {x}, Boşluk 4: {x} ∈ {{x}}, Boşluk 5: ∅ ⊆ {x}, Boşluk 6: ∅ ∈ {x}', '{"blanks":6}', '{"blanks":[["D","doğru"],["D","doğru"],["Y","yanlış"],["D","doğru"],["D","doğru"],["Y","yanlış"]]}', '{x}''in tek elemanı x''tir; {x} ve ∅ onun elemanı değildir. {{x}}''in tek elemanı {x}''tir. ∅ ve küme kendisi, her kümenin alt kümesidir.', 2, 'Rosen 2.1, alıştırma 11', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-k19', 'ayrik', 'ay-u9', 9, 'fill', 'original', 'Aşağıdaki kümelerin niceliklerini bulunuz.

Boşluk 1: {a}, Boşluk 2: {{a}}, Boşluk 3: {a, {a}}, Boşluk 4: {a, {a}, {a, {a}}}', '{"blanks":4}', '{"blanks":[["1"],["1"],["2"],["3"]]}', 'Nicelik, farklı eleman sayısıdır. {{a}}''nın tek elemanı {a}''dır. {a, {a}}''nın elemanları a ve {a}''dır.', 2, 'Rosen 2.1, alıştırma 19', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-k21', 'ayrik', 'ay-u9', 9, 'fill', 'original', 'a ve b farklı elemanlar olmak üzere {a, b} kümesinin kuvvet kümesini yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["{∅, {a}, {b}, {a, b}}","{∅, {b}, {a}, {a, b}}","{∅, {a}, {b}, {b, a}}"]]}', 'Tüm alt kümeler: ∅, {a}, {b}, {a, b}. 2² = 4 eleman.', 2, 'Rosen 2.1, alıştırma 21', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-k23', 'ayrik', 'ay-u9', 9, 'fill', 'original', 'a ve b farklı elemanlar olmak üzere, aşağıdaki kümelerin kaç elemanı vardır?

Boşluk 1: P({a, b, {a, b}}), Boşluk 2: P(P(∅))', '{"blanks":2}', '{"blanks":[["8"],["2"]]}', '{a, b, {a, b}} üç elemanlıdır: 2³ = 8. P(∅) = {∅} bir elemanlıdır, bu yüzden P(P(∅)) = {∅, {∅}} 2¹ = 2 elemanlıdır.', 2, 'Rosen 2.1, alıştırma 23', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-k27', 'ayrik', 'ay-u9', 9, 'fill', 'original', 'A = {a, b, c, d} ve B = {y, z} olsun. A × B kümesinin kaç elemanı vardır ve (y, a) bu kümenin elemanı mıdır (evet/hayır)?

Boşluk 1: |A × B|, Boşluk 2: (y, a) ∈ A × B', '{"blanks":2}', '{"blanks":[["8"],["hayır"]]}', '|A × B| = 4 · 2 = 8. Sıralı ikililerde ilk bileşen A''dan gelir; (y, a) ∈ B × A''dır, A × B''de değildir.', 1, 'Rosen 2.1, alıştırma 27', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-kume-tanim', 'ayrik', 'ay-u9', 9, 'fill', 'derived', 'Bir kümedeki nesnelere kümenin ____ denir; a''nın A kümesinde olduğu a ∈ A ile gösterilir.', '{"blanks":1}', '{"blanks":[["eleman","elemanları","elemanı","üye","üyeleri"]]}', 'Küme, sırasız nesneler topluluğudur; bu nesneler kümenin elemanlarıdır (üyeleri).', 1, '9. ünite, Küme gösterimi ve eleman olma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-kurma', 'ayrik', 'ay-u9', 9, 'mcq', 'derived', '{x | x, 10''dan küçük pozitif tek tam sayıdır} kümesi hangisidir?', '{"choices":["{1, 3, 5, 7, 9}","{1, 3, 5, 7, 9, 11}","{0, 2, 4, 6, 8}","{3, 5, 7, 9}"]}', '{"index":0}', '10''dan küçük pozitif tek tam sayılar 1, 3, 5, 7, 9''dur. Bu, küme kurma gösterimidir.', 1, '9. ünite, Küme gösterimi ve eleman olma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-sayi-kumeleri', 'ayrik', 'ay-u9', 9, 'mcq', 'derived', 'Kitapta N, Z, Q ve R sembolleri sırasıyla hangi kümeleri gösterir?', '{"choices":["Doğal sayılar, tam sayılar, rasyonel sayılar, reel sayılar","Tam sayılar, doğal sayılar, reel sayılar, rasyonel sayılar","Doğal sayılar, rasyonel sayılar, tam sayılar, reel sayılar","Pozitif tam sayılar, tam sayılar, karmaşık sayılar, reel sayılar"]}', '{"index":0}', 'N = {0, 1, 2, ...}, Z tam sayılar, Q rasyonel sayılar, R reel sayılar. Z⁺ pozitif tam sayılar, C karmaşık sayılardır.', 1, '9. ünite, Küme gösterimi ve eleman olma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-bos-kume', 'ayrik', 'ay-u9', 9, 'tf', 'derived', '∅ ve {∅} aynı kümedir.', '{}', '{"value":false}', 'Yanlış. ∅''nin hiç elemanı yoktur; {∅} ise tek elemanlı bir kümedir (elemanı boş kümedir).', 2, '9. ünite, Küme gösterimi ve eleman olma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-aralik', 'ayrik', 'ay-u9', 9, 'mcq', 'derived', 'a < b reel sayılar için [a, b) aralığı hangi kümedir?', '{"choices":["{x | a ≤ x < b}","{x | a < x ≤ b}","{x | a < x < b}","{x | a ≤ x ≤ b}"]}', '{"index":0}', 'Köşeli parantez uç noktanın dahil olduğunu, yuvarlak parantez dahil olmadığını gösterir.', 2, '9. ünite, Küme gösterimi ve eleman olma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-altkume-tanim', 'ayrik', 'ay-u9', 9, 'fill', 'derived', 'A ⊆ B olması, ∀x(x ∈ A → ____) demektir.', '{"blanks":1,"semboller":true}', '{"blanks":[["x ∈ B"]]}', 'A''nın her elemanı B''nin de elemanıysa A, B''nin alt kümesidir.', 1, '9. ünite, Alt küme ve eşit kümeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-bos-alt', 'ayrik', 'ay-u9', 9, 'tf', 'derived', 'Boş küme her kümenin alt kümesidir.', '{}', '{"value":true}', 'Doğru. x ∈ ∅ her zaman yanlış olduğundan x ∈ ∅ → x ∈ S şartlı ifadesi içi boş biçimde doğrudur.', 1, '9. ünite, Alt küme ve eşit kümeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-esit', 'ayrik', 'ay-u9', 9, 'mcq', 'derived', 'İki kümenin eşit olduğunu göstermenin yolu hangisidir?', '{"choices":["A ⊆ B ve B ⊆ A olduğunu göstermek","|A| = |B| olduğunu göstermek","A ∩ B ≠ ∅ olduğunu göstermek","A''nın bir elemanının B''de olduğunu göstermek"]}', '{"index":0}', 'A = B ancak ve ancak A ⊆ B ve B ⊆ A ise. Eleman sayılarının eşit olması yetmez.', 2, '9. ünite, Alt küme ve eşit kümeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-oz-alt', 'ayrik', 'ay-u9', 9, 'mcq', 'derived', 'A ⊂ B (öz alt küme) ne demektir?', '{"choices":["A ⊆ B ve A ≠ B","A ⊆ B ve A = B","A ∩ B = ∅","B ⊆ A"]}', '{"index":0}', 'A, B''nin alt kümesidir ve B''de A''da olmayan en az bir eleman vardır.', 2, '9. ünite, Alt küme ve eşit kümeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-nicelik-tanim', 'ayrik', 'ay-u9', 9, 'fill', 'derived', 'Sonlu bir S kümesindeki farklı elemanların sayısına S''nin ____ denir ve |S| ile gösterilir.', '{"blanks":1}', '{"blanks":[["niceliği","nicelik","kardinalitesi","eleman sayısı"]]}', '|S|, S''nin niceliğidir (kardinalitesi).', 1, '9. ünite, Kümenin büyüklüğü (niceliği)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-nicelik-harf', 'ayrik', 'ay-u9', 9, 'fill', 'derived', 'A, İngiliz alfabesindeki harflerin kümesi ise |A| kaçtır?', '{"blanks":1}', '{"blanks":[["26"]]}', 'İngiliz alfabesinde 26 harf vardır.', 1, '9. ünite, Kümenin büyüklüğü (niceliği)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-sonsuz', 'ayrik', 'ay-u9', 9, 'tf', 'derived', 'Pozitif tam sayılar kümesi sonlu bir kümedir.', '{}', '{"value":false}', 'Yanlış. Sonlu olmayan kümelere sonsuz küme denir; Z⁺ sonsuzdur.', 1, '9. ünite, Kümenin büyüklüğü (niceliği)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-kuvvet-sayi', 'ayrik', 'ay-u9', 9, 'fill', 'derived', 'n elemanlı bir kümenin kuvvet kümesinin kaç elemanı vardır? (n ile yazınız)', '{"blanks":1}', '{"blanks":[["2^n","2ⁿ"]]}', 'Her eleman bir alt kümede ya vardır ya yoktur: 2ⁿ alt küme.', 1, '9. ünite, Kuvvet kümesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-kuvvet-bos', 'ayrik', 'ay-u9', 9, 'mcq', 'derived', 'P(∅) hangisidir?', '{"choices":["{∅}","∅","{∅, {∅}}","{0}"]}', '{"index":0}', 'Boş kümenin tek alt kümesi kendisidir: P(∅) = {∅}.', 2, '9. ünite, Kuvvet kümesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-kuvvet-yaz', 'ayrik', 'ay-u9', 9, 'yaz', 'derived', '{0, 1, 2} kümesinin kuvvet kümesini yazınız. Kaç elemanı vardır?', '{}', '{}', 'P({0, 1, 2}) = {∅, {0}, {1}, {2}, {0, 1}, {0, 2}, {1, 2}, {0, 1, 2}}.

2³ = 8 elemanı vardır.', 2, '9. ünite, Kuvvet kümesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-sirali', 'ayrik', 'ay-u9', 9, 'tf', 'derived', '(a, b) = (c, d) olması için a = c ve b = d olması gerekir; bu yüzden a ≠ b ise (a, b) ≠ (b, a)''dır.', '{}', '{"value":true}', 'Doğru. Sıralı ikilide sıra önemlidir.', 1, '9. ünite, Kartezyen çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-axb', 'ayrik', 'ay-u9', 9, 'fill', 'derived', 'A = {1, 2} ve B = {a, b, c} ise A × B''yi yazınız.', '{"blanks":1,"semboller":true}', '{"blanks":[["{(1, a), (1, b), (1, c), (2, a), (2, b), (2, c)}"]]}', 'A × B = {(a, b) | a ∈ A ∧ b ∈ B}: 2 · 3 = 6 sıralı ikili.', 2, '9. ünite, Kartezyen çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-degisme', 'ayrik', 'ay-u9', 9, 'tf', 'derived', 'A ve B boş olmayan kümeler ve A ≠ B ise A × B = B × A''dır.', '{}', '{"value":false}', 'Yanlış. Kartezyen çarpım değişmeli değildir; A ≠ B ve ikisi de boş değilse A × B ≠ B × A.', 2, '9. ünite, Kartezyen çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-bagint', 'ayrik', 'ay-u9', 9, 'mcq', 'derived', 'A × B kartezyen çarpımının bir R alt kümesine ne ad verilir?', '{"choices":["A''dan B''ye bir bağıntı","A''dan B''ye bir fonksiyon","A''nın kuvvet kümesi","B''nin tümleyeni"]}', '{"index":0}', 'A × B''nin herhangi bir alt kümesi A''dan B''ye bir bağıntıdır.', 2, '9. ünite, Kartezyen çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u9-t-dogruluk-kumesi', 'ayrik', 'ay-u9', 9, 'fill', 'derived', 'Tanım kümesi tam sayılar olmak üzere P(x): "x² = 1" yükleminin doğruluk kümesi nedir?', '{"blanks":1}', '{"blanks":[["{−1, 1}","{-1, 1}","{1, −1}","{1, -1}"]]}', 'Doğruluk kümesi, P(x)''i doğru yapan elemanlar kümesidir: {x ∈ Z | x² = 1} = {−1, 1}.', 2, '9. ünite, Kartezyen çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-c32', 'ayrik', 'ay-u10', 10, 'mcq', 'original', 'A={1, 2, 3, 4, 5}, B={2, 4} ise A ve B kümelerinin birleşimi aşağıdakilerden hangisidir?', '{"choices":["{1, 2, 3, 5}","{2, 4}","{1, 3, 5}","{1, 2, 3, 4, 5}"]}', '{"index":3}', 'B ⊆ A olduğu için A ∪ B = A = {1, 2, 3, 4, 5}.', 1, 'Çıkmış soru 32', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-c33', 'ayrik', 'ay-u10', 10, 'mcq', 'original', 'A={1, 2, 3, 4, 5}, B={2, 4} ise A-B aşağıdakilerden hangisidir?', '{"choices":["{1, 2, 3, 5}","{2, 4}","{1, 3, 5}","{1, 2, 3, 4, 5}"]}', '{"index":2}', 'A − B, A''da olup B''de olmayan elemanlardır: {1, 3, 5}.', 1, 'Çıkmış soru 33', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-c34', 'ayrik', 'ay-u10', 10, 'mcq', 'original', 'A={1, 2, 3, 4, 5}, B={2, 4} ise A ve B kümelerinin kesişimi aşağıdakilerden hangisidir?', '{"choices":["{2, 4}","{1, 3, 5}","{1, 2, 3, 4, 5}","{1, 2, 3, 5}"]}', '{"index":0}', 'İki kümede ortak olan elemanlar 2 ve 4''tür: A ∩ B = {2, 4}.', 1, 'Çıkmış soru 34', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-k3', 'ayrik', 'ay-u10', 10, 'fill', 'original', 'A = {1, 2, 3, 4, 5} ve B = {0, 3, 6} olsun. Aşağıdakileri bulunuz.

Boşluk 1: A ∪ B, Boşluk 2: A ∩ B, Boşluk 3: A − B, Boşluk 4: B − A', '{"blanks":4}', '{"blanks":[["{0, 1, 2, 3, 4, 5, 6}"],["{3}"],["{1, 2, 4, 5}"],["{0, 6}","{6, 0}"]]}', 'Birleşim tüm elemanları, kesişim ortak elemanı (3), farklar ise yalnız bir kümede olanları verir. Elemanları küçükten büyüğe yazınız.', 1, 'Rosen 2.2, alıştırma 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-k15', 'ayrik', 'ay-u10', 10, 'yaz', 'original', 'İkinci De Morgan kuralını, yani A ∪ B''nin tümleyeninin Ā ∩ B̄ olduğunu a) iki kümenin birbirinin alt kümesi olduğunu göstererek, b) üyelik tablosu kullanarak ispatlayınız.', '{}', '{}', 'a) x ∈ (A ∪ B)ᶜ ⇔ x ∉ A ∪ B ⇔ ¬(x ∈ A ∨ x ∈ B) ⇔ (x ∉ A) ∧ (x ∉ B) ⇔ x ∈ Ā ∧ x ∈ B̄ ⇔ x ∈ Ā ∩ B̄. Her iki yön de geçerli olduğundan iki küme birbirinin alt kümesidir, yani eşittir.

b) Üyelik tablosu:

| A | B | A ∪ B | (A ∪ B)ᶜ | Ā | B̄ | Ā ∩ B̄ |
|---|---|---|---|---|---|---|
| 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 0 | 0 | 0 | 1 | 1 | 1 | 1 |

(A ∪ B)ᶜ ve Ā ∩ B̄ sütunları aynıdır.', 3, 'Rosen 2.2, alıştırma 15', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-birlesim-tanim', 'ayrik', 'ay-u10', 10, 'fill', 'derived', 'A ∪ B = {x | x ∈ A ____ x ∈ B}. Boşluğa hangi mantık bağlacı gelir?', '{"blanks":1,"semboller":true}', '{"blanks":[["∨","veya"]]}', 'Birleşim, A''da veya B''de (ya da ikisinde) olan elemanlardır.', 1, '10. ünite, Birleşim, kesişim, fark ve tümleyen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-ayrik', 'ayrik', 'ay-u10', 10, 'mcq', 'derived', 'A ∩ B = ∅ olan iki kümeye ne ad verilir?', '{"choices":["Ayrık kümeler","Eşit kümeler","Tümleyen kümeler","Kuvvet kümeleri"]}', '{"index":0}', 'Kesişimi boş olan kümeler ayrıktır.', 1, '10. ünite, Birleşim, kesişim, fark ve tümleyen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-ic-dis', 'ayrik', 'ay-u10', 10, 'fill', 'derived', '|A| = 10, |B| = 7 ve |A ∩ B| = 3 ise |A ∪ B| kaçtır?', '{"blanks":1}', '{"blanks":[["14"]]}', 'İçerme-dışarma ilkesi: |A ∪ B| = |A| + |B| − |A ∩ B| = 10 + 7 − 3 = 14.', 2, '10. ünite, Birleşim, kesişim, fark ve tümleyen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-tumleyen', 'ayrik', 'ay-u10', 10, 'fill', 'derived', 'Evrensel küme U = {1, 2, ..., 10} ve A = {1, 3, 5, 7, 9} ise Ā (A''nın tümleyeni) nedir?', '{"blanks":1}', '{"blanks":[["{2, 4, 6, 8, 10}"]]}', 'Ā = U − A, U''da olup A''da olmayan elemanlardır.', 1, '10. ünite, Birleşim, kesişim, fark ve tümleyen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-fark-tumleyen', 'ayrik', 'ay-u10', 10, 'mcq', 'derived', 'A − B kümesi aşağıdakilerden hangisine eşittir?', '{"choices":["A ∩ B̄","A ∪ B̄","Ā ∩ B","Ā ∪ B"]}', '{"index":0}', 'A − B, A''da olup B''de olmayanlardır; yani A ile B''nin tümleyeninin kesişimi: A − B = A ∩ B̄.', 2, '10. ünite, Birleşim, kesişim, fark ve tümleyen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-simetrik', 'ayrik', 'ay-u10', 10, 'fill', 'derived', 'A ⊕ B (simetrik fark), A''da veya B''de olup ikisinde birden olmayan elemanlardır. A = {1, 2, 3, 4, 5}, B = {4, 5, 6, 7, 8} ise A ⊕ B nedir?', '{"blanks":1}', '{"blanks":[["{1, 2, 3, 6, 7, 8}"]]}', 'Ortak elemanlar 4 ve 5 çıkarılır: {1, 2, 3, 6, 7, 8}.', 2, '10. ünite, Birleşim, kesişim, fark ve tümleyen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-demorgan', 'ayrik', 'ay-u10', 10, 'mcq', 'derived', 'Kümelerde birinci De Morgan kuralına göre A ∩ B''nin tümleyeni neye eşittir?', '{"choices":["Ā ∪ B̄","Ā ∩ B̄","A ∪ B","A − B"]}', '{"index":0}', '(A ∩ B)ᶜ = Ā ∪ B̄. Kümeler için özdeşlikler, mantıktaki denkliklerin karşılığıdır.', 1, '10. ünite, Küme özdeşlikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-yutma', 'ayrik', 'ay-u10', 10, 'mcq', 'derived', 'A ∪ (A ∩ B) kümesi neye eşittir?', '{"choices":["A","B","A ∩ B","A ∪ B"]}', '{"index":0}', 'Yutma özdeşliği: A ∪ (A ∩ B) = A ve A ∩ (A ∪ B) = A.', 2, '10. ünite, Küme özdeşlikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-dagilma', 'ayrik', 'ay-u10', 10, 'fill', 'derived', 'Dağılma özdeşliğine göre A ∩ (B ∪ C) neye eşittir?', '{"blanks":1,"semboller":true}', '{"blanks":[["(A ∩ B) ∪ (A ∩ C)","(A ∩ C) ∪ (A ∩ B)"]]}', 'A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).', 2, '10. ünite, Küme özdeşlikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-uyelik', 'ayrik', 'ay-u10', 10, 'tf', 'derived', 'Üyelik tablosunda bir elemanın kümede olduğu 1, olmadığı 0 ile gösterilir; iki ifadenin sütunları aynıysa kümeler eşittir.', '{}', '{"value":true}', 'Doğru. Üyelik tablosu, mantıktaki doğruluk tablosunun kümelerdeki karşılığıdır.', 1, '10. ünite, Küme özdeşlikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-ozdeslik-yaz', 'ayrik', 'ay-u10', 10, 'yaz', 'derived', '(A ∪ (B ∩ C))ᶜ = (Cᶜ ∪ Bᶜ) ∩ Aᶜ olduğunu küme özdeşlikleriyle gösteriniz.', '{}', '{}', '(A ∪ (B ∩ C))ᶜ
= Aᶜ ∩ (B ∩ C)ᶜ   (De Morgan)
= Aᶜ ∩ (Bᶜ ∪ Cᶜ)   (De Morgan)
= (Bᶜ ∪ Cᶜ) ∩ Aᶜ   (değişme)
= (Cᶜ ∪ Bᶜ) ∩ Aᶜ   (değişme)', 3, '10. ünite, Küme özdeşlikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-genel-birlesim', 'ayrik', 'ay-u10', 10, 'fill', 'derived', 'A = {0, 2, 4, 6, 8}, B = {0, 1, 2, 3, 4} ve C = {0, 3, 6, 9} ise A ∩ B ∩ C nedir?', '{"blanks":1}', '{"blanks":[["{0}"]]}', 'Üç kümenin ortak tek elemanı 0''dır.', 2, '10. ünite, Genelleştirilmiş birleşim ve kesişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-genel-birlesim2', 'ayrik', 'ay-u10', 10, 'fill', 'derived', 'Aynı kümeler için (A = {0, 2, 4, 6, 8}, B = {0, 1, 2, 3, 4}, C = {0, 3, 6, 9}) A ∪ B ∪ C nedir?', '{"blanks":1}', '{"blanks":[["{0, 1, 2, 3, 4, 6, 8, 9}"]]}', 'En az bir kümede olan tüm elemanlar: {0, 1, 2, 3, 4, 6, 8, 9}.', 2, '10. ünite, Genelleştirilmiş birleşim ve kesişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-ai', 'ayrik', 'ay-u10', 10, 'mcq', 'derived', 'i = 1, 2, 3, ... için Aᵢ = {1, 2, ..., i} olsun. ⋃ Aᵢ (i = 1''den ∞''a) ve ⋂ Aᵢ nedir?', '{"choices":["Birleşim Z⁺, kesişim {1}","Birleşim {1}, kesişim Z⁺","Birleşim Z⁺, kesişim ∅","Birleşim N, kesişim {0, 1}"]}', '{"index":0}', 'Her pozitif tam sayı bir Aᵢ''de vardır, birleşim Z⁺''dır. 1 her Aᵢ''de vardır ve başka ortak eleman yoktur, kesişim {1}''dir.', 3, '10. ünite, Genelleştirilmiş birleşim ve kesişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-bit-gosterim', 'ayrik', 'ay-u10', 10, 'fill', 'derived', 'U = {1, 2, 3, ..., 10} ve elemanlar artan sırada olsun. U''daki tek sayıların kümesi {1, 3, 5, 7, 9} hangi bit dizisiyle gösterilir? (boşluksuz yazınız)', '{"blanks":1}', '{"blanks":[["1010101010","10 1010 1010"]]}', 'i. bit, i kümede ise 1''dir: 1010101010.', 2, '10. ünite, Kümelerin bit dizisiyle gösterimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-bit-birlesim', 'ayrik', 'ay-u10', 10, 'mcq', 'derived', 'Bit dizisi gösteriminde iki kümenin birleşimi hangi bit işlemiyle bulunur?', '{"choices":["Bit düzeyinde VEYA","Bit düzeyinde VE","Bit düzeyinde XOR","Her bitin tersi"]}', '{"index":0}', 'Birleşim VEYA, kesişim VE, tümleyen her bitin tersiyle bulunur.', 2, '10. ünite, Kümelerin bit dizisiyle gösterimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u10-t-bit-kesisim', 'ayrik', 'ay-u10', 10, 'fill', 'derived', '11 1110 0000 ile 10 1010 1010 bit dizileriyle gösterilen kümelerin kesişiminin bit dizisi nedir?', '{"blanks":1}', '{"blanks":[["1010100000","10 1010 0000"]]}', 'Bit düzeyinde VE: 10 1010 0000, yani {1, 3, 5}.', 2, '10. ünite, Kümelerin bit dizisiyle gösterimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-k1', 'ayrik', 'ay-u11', 11, 'yaz', 'original', 'Aşağıdakilerin neden R''den R''ye birer fonksiyon olmadığını açıklayınız.

a) f(x) = 1/x
b) f(x) = √x
c) f(x) = ±√(x² + 1)', '{}', '{}', 'a) f(0) tanımlı değildir; tanım kümesinin her elemanına bir değer atanmalıdır.
b) x < 0 için f(x) reel sayı olarak tanımlı değildir.
c) Her x''e iki farklı değer atanır; fonksiyon her elemana tam bir değer atar.', 2, 'Rosen 2.3, alıştırma 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-k9', 'ayrik', 'ay-u11', 11, 'fill', 'original', 'Aşağıdaki değerleri bulunuz.

Boşluk 1: ⌈3/4⌉, Boşluk 2: ⌊7/8⌋, Boşluk 3: ⌈−3/4⌉, Boşluk 4: ⌊−7/8⌋, Boşluk 5: ⌊1/2 + ⌈3/2⌉⌋, Boşluk 6: ⌊1/2 · ⌊5/2⌋⌋', '{"blanks":6}', '{"blanks":[["1"],["0"],["0","-0","−0"],["-1","−1"],["2"],["1"]]}', 'Tavan en küçük üst tam sayı, taban en büyük alt tam sayıdır. ⌈−3/4⌉ = 0, ⌊−7/8⌋ = −1. ⌈3/2⌉ = 2, ⌊2,5⌋ = 2. ⌊5/2⌋ = 2, ⌊1⌋ = 1.', 2, 'Rosen 2.3, alıştırma 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-k13', 'ayrik', 'ay-u11', 11, 'fill', 'original', 'Z''den Z''ye tanımlı aşağıdaki fonksiyonlar örten midir? (evet/hayır)

Boşluk 1: f(n) = n − 1, Boşluk 2: f(n) = n² + 1, Boşluk 3: f(n) = n³, Boşluk 4: f(n) = ⌈n/2⌉', '{"blanks":4}', '{"blanks":[["evet"],["hayır"],["hayır"],["evet"]]}', 'n − 1: her m için n = m + 1. n² + 1: 0 ve negatifler değer olarak alınmaz. n³: 2 bir tam sayının küpü değildir. ⌈n/2⌉: her m için n = 2m alınabilir.', 2, 'Rosen 2.3, alıştırma 13', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-k15', 'ayrik', 'ay-u11', 11, 'fill', 'original', 'Z × Z''den Z''ye tanımlı aşağıdaki fonksiyonlar örten midir? (evet/hayır)

Boşluk 1: f(m, n) = m + n, Boşluk 2: f(m, n) = m² + n², Boşluk 3: f(m, n) = m, Boşluk 4: f(m, n) = |n|, Boşluk 5: f(m, n) = m − n', '{"blanks":5}', '{"blanks":[["evet"],["hayır"],["evet"],["hayır"],["evet"]]}', 'm + n, m ve m − n her tam sayıyı alır (ör. n = 0). m² + n² ve |n| negatif değer alamaz.', 3, 'Rosen 2.3, alıştırma 15', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-k23', 'ayrik', 'ay-u11', 11, 'fill', 'original', 'R''den R''ye tanımlı aşağıdaki fonksiyonlar bire-bir eşleşme midir? (evet/hayır)

Boşluk 1: f(x) = 2x + 1, Boşluk 2: f(x) = x² + 1, Boşluk 3: f(x) = x³, Boşluk 4: f(x) = (x² + 1)/(x² + 2)', '{"blanks":4}', '{"blanks":[["evet"],["hayır"],["evet"],["hayır"]]}', '2x + 1 ve x³ hem bire-bir hem örtendir. x² + 1 bire-bir değildir (f(1) = f(−1)) ve 1''den küçük değer almaz. (x² + 1)/(x² + 2) çift fonksiyondur, bire-bir değildir.', 2, 'Rosen 2.3, alıştırma 23', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-k31', 'ayrik', 'ay-u11', 11, 'fill', 'original', 'f: R → R, f(x) = ⌊x²/3⌋ olsun. S = {−2, −1, 0, 1, 2, 3} için f(S) görüntüsünü bulunuz.', '{"blanks":1}', '{"blanks":[["{0, 1, 3}","{0,1,3}"]]}', 'x² değerleri 4, 1, 0, 1, 4, 9; üçe bölüp taban alınca 1, 0, 0, 0, 1, 3. Görüntü {0, 1, 3}.', 2, 'Rosen 2.3, alıştırma 31', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-k39', 'ayrik', 'ay-u11', 11, 'yaz', 'original', 'a ve b sabitler, a ≠ 0 olmak üzere R''den R''ye f(x) = ax + b fonksiyonunun tersi alınabilir olduğunu gösteriniz ve tersini bulunuz.', '{}', '{}', 'Bire-bir: ax + b = ay + b ise a(x − y) = 0, a ≠ 0 olduğundan x = y.
Örten: her y için x = (y − b)/a alınırsa f(x) = y.
Bire-bir eşleşme olduğundan tersi alınabilir.

y = ax + b''den x = (y − b)/a, yani f⁻¹(y) = (y − b)/a.', 2, 'Rosen 2.3, alıştırma 39', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-tanim', 'ayrik', 'ay-u11', 11, 'mcq', 'derived', 'A''dan B''ye bir f fonksiyonu nedir?', '{"choices":["A''nın her elemanına B''nin tam olarak bir elemanını atayan kural","A''nın bazı elemanlarına B''nin elemanlarını atayan kural","B''nin her elemanına A''dan bir eleman atayan kural","A''nın her elemanına B''nin en az bir elemanını atayan kural"]}', '{"index":0}', 'Fonksiyon, tanım kümesinin her elemanına değer kümesinden tam bir eleman atar.', 1, '11. ünite, Fonksiyon, tanım ve değer kümesi, görüntü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-goruntu', 'ayrik', 'ay-u11', 11, 'fill', 'derived', 'f: A → B ve f(a) = b ise, b''ye a''nın ____ , a''ya ise b''nin ön görüntüsü denir.', '{"blanks":1}', '{"blanks":[["görüntüsü","görüntü"]]}', 'b, a''nın görüntüsü; a, b''nin ön görüntüsüdür. f''nin tüm görüntülerinin kümesine görüntü kümesi (range) denir.', 1, '11. ünite, Fonksiyon, tanım ve değer kümesi, görüntü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-deger-goruntu', 'ayrik', 'ay-u11', 11, 'tf', 'derived', 'Bir fonksiyonun görüntü kümesi her zaman değer kümesine eşittir.', '{}', '{"value":false}', 'Yanlış. Görüntü kümesi değer kümesinin bir alt kümesidir; ancak fonksiyon örtense eşittir. Ör. f: Z → Z, f(x) = x²''nin görüntüsü {0, 1, 4, ...}''tür.', 2, '11. ünite, Fonksiyon, tanım ve değer kümesi, görüntü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-kesirsiz', 'ayrik', 'ay-u11', 11, 'mcq', 'derived', 'Bir bit dizisini, içindeki 1''lerin sayısına götüren fonksiyonun tanım ve görüntü kümeleri hangisidir?', '{"choices":["Tanım: bit dizileri, görüntü: negatif olmayan tam sayılar","Tanım: tam sayılar, görüntü: bit dizileri","Tanım: bit dizileri, görüntü: {0, 1}","Tanım: pozitif tam sayılar, görüntü: bit dizileri"]}', '{"index":0}', 'Her bit dizisinin 1 sayısı 0, 1, 2, ... olabilir; görüntü N''dir.', 2, '11. ünite, Fonksiyon, tanım ve değer kümesi, görüntü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-birebir-tanim', 'ayrik', 'ay-u11', 11, 'fill', 'derived', 'f''nin bire-bir (injektif) olması: ∀a∀b(f(a) = f(b) → ____).', '{"blanks":1,"semboller":true}', '{"blanks":[["a = b"]]}', 'Aynı görüntüye giden iki farklı eleman yoktur. Denk olarak a ≠ b → f(a) ≠ f(b).', 1, '11. ünite, Bire-bir fonksiyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-x2', 'ayrik', 'ay-u11', 11, 'tf', 'derived', 'Z''den Z''ye f(x) = x² fonksiyonu bire-birdir.', '{}', '{"value":false}', 'Yanlış. f(1) = f(−1) = 1. (Pozitif tam sayılarda tanımlı olsaydı bire-bir olurdu.)', 1, '11. ünite, Bire-bir fonksiyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-artan', 'ayrik', 'ay-u11', 11, 'mcq', 'derived', 'Kesin artan bir f: R → R fonksiyonu için hangisi her zaman doğrudur?', '{"choices":["f bire-birdir.","f örtendir.","f bire-bir eşleşmedir.","f''nin tersi yoktur."]}', '{"index":0}', 'x < y ise f(x) < f(y), dolayısıyla x ≠ y ise f(x) ≠ f(y). Örten olmayabilir (ör. eˣ).', 2, '11. ünite, Bire-bir fonksiyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-birebir-ispat', 'ayrik', 'ay-u11', 11, 'yaz', 'derived', 'Z''den Z''ye f(x) = 3x + 5 fonksiyonunun bire-bir olduğunu, ama örten olmadığını gösteriniz.', '{}', '{}', 'Bire-bir: 3a + 5 = 3b + 5 ise 3a = 3b, yani a = b.

Örten değil: f(x) = 6 için 3x = 1, x = 1/3 tam sayı değildir. 6''nın ön görüntüsü yoktur.', 2, '11. ünite, Bire-bir fonksiyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-orten-tanim', 'ayrik', 'ay-u11', 11, 'mcq', 'derived', 'f: A → B fonksiyonu ne zaman örtendir (sürjektif)?', '{"choices":["B''nin her b elemanı için f(a) = b olan bir a ∈ A varsa","A''nın her elemanının farklı bir görüntüsü varsa","A ile B aynı kümeyse","f''nin tersi B''den A''ya tanımlıysa ve A = B ise"]}', '{"index":0}', 'Değer kümesinin her elemanı en az bir elemanın görüntüsüdür: ∀y∃x(f(x) = y).', 1, '11. ünite, Örten fonksiyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-orten-ornek', 'ayrik', 'ay-u11', 11, 'fill', 'derived', '{a, b, c, d}''den {1, 2, 3}''e tanımlı f(a) = 3, f(b) = 2, f(c) = 1, f(d) = 3 fonksiyonu örten midir? (evet/hayır)', '{"blanks":1}', '{"blanks":[["evet"]]}', '1, 2 ve 3''ün her biri bir elemanın görüntüsüdür. (Bire-bir değildir: f(a) = f(d).)', 2, '11. ünite, Örten fonksiyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-eslesme-tanim', 'ayrik', 'ay-u11', 11, 'mcq', 'derived', 'Hem bire-bir hem örten olan fonksiyona ne ad verilir?', '{"choices":["Bire-bir eşleşme","Birim fonksiyon","Taban fonksiyonu","Kısmi fonksiyon"]}', '{"index":0}', 'Bire-bir ve örten fonksiyon bire-bir eşleşmedir (bijeksiyon).', 1, '11. ünite, Bire-bir eşleşme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-birim', 'ayrik', 'ay-u11', 11, 'tf', 'derived', 'A kümesi üzerinde ι_A(x) = x birim fonksiyonu bir bire-bir eşleşmedir.', '{}', '{"value":true}', 'Doğru. Birim fonksiyon her elemanı kendisine götürür; hem bire-bir hem örtendir.', 1, '11. ünite, Bire-bir eşleşme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-sonlu', 'ayrik', 'ay-u11', 11, 'tf', 'derived', 'A sonlu bir küme ise A''dan A''ya bir fonksiyon ancak ve ancak örten ise bire-birdir.', '{}', '{"value":true}', 'Doğru. Sonlu ve eşit büyüklükteki kümeler arasında bire-bir fonksiyon örtendir, örten fonksiyon bire-birdir. Sonsuz kümelerde bu geçerli değildir.', 2, '11. ünite, Bire-bir eşleşme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-nasil-gosterilir', 'ayrik', 'ay-u11', 11, 'yaz', 'derived', 'f: A → B''nin bire-bir ve örten olduğunu göstermek için sırasıyla ne yapılır? Özetleyiniz.', '{}', '{}', 'Bire-bir: Keyfi x, y ∈ A için f(x) = f(y) varsayılıp x = y gösterilir.
Bire-bir değil: f(x) = f(y) olan x ≠ y bulunur.
Örten: Keyfi y ∈ B için f(x) = y olan x ∈ A bulunur.
Örten değil: Hiçbir x için f(x) = y olmayan bir y ∈ B bulunur.', 2, '11. ünite, Bire-bir eşleşme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-ters-kosul', 'ayrik', 'ay-u11', 11, 'mcq', 'derived', 'Bir f: A → B fonksiyonunun tersinin tanımlanabilmesi (tersi alınabilir olması) için gereken koşul nedir?', '{"choices":["f bir bire-bir eşleşme olmalı","f yalnız bire-bir olmalı","f yalnız örten olmalı","A ve B sonsuz olmalı"]}', '{"index":0}', 'Bire-bir değilse bir b''nin iki ön görüntüsü olur; örten değilse bazı b''lerin ön görüntüsü olmaz. İki durumda da ters tanımlanamaz.', 1, '11. ünite, Ters fonksiyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-ters-ornek', 'ayrik', 'ay-u11', 11, 'fill', 'derived', 'f, {a, b, c}''den {1, 2, 3}''e f(a) = 2, f(b) = 3, f(c) = 1 fonksiyonu olsun. f⁻¹(3) ve f⁻¹(1) nedir?

Boşluk 1: f⁻¹(3), Boşluk 2: f⁻¹(1)', '{"blanks":2}', '{"blanks":[["b"],["c"]]}', 'Kitaptaki örnek: f bire-bir eşleşmedir; f⁻¹ görüntüleri ters çevirir: f⁻¹(1) = c, f⁻¹(2) = a, f⁻¹(3) = b.', 2, '11. ünite, Ters fonksiyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-ters-dogru', 'ayrik', 'ay-u11', 11, 'fill', 'derived', 'Z''den Z''ye f(x) = x + 1 fonksiyonunun tersi f⁻¹(y) = ? (y cinsinden yazınız)', '{"blanks":1}', '{"blanks":[["y − 1","y - 1","y-1"]]}', 'y = x + 1''den x = y − 1. f bire-bir eşleşme olduğu için f⁻¹(y) = y − 1.', 2, '11. ünite, Ters fonksiyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-x2-ters', 'ayrik', 'ay-u11', 11, 'tf', 'derived', 'Z''den Z''ye f(x) = x² fonksiyonunun tersi alınabilir.', '{}', '{"value":false}', 'Yanlış. f(−2) = f(2) = 4 olduğu için bire-bir değildir; ters fonksiyon tanımlanamaz. (Negatif olmayan reel sayılara kısıtlanırsa tersi √x olur.)', 2, '11. ünite, Ters fonksiyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-ters-isaret', 'ayrik', 'ay-u11', 11, 'tf', 'derived', 'f⁻¹ ters fonksiyonu ile 1/f fonksiyonu aynı şeydir.', '{}', '{"value":false}', 'Yanlış. f⁻¹ ters fonksiyondur, 1/f ise değerlerin çarpmaya göre tersidir; karıştırılmamalıdır.', 2, '11. ünite, Ters fonksiyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-bileske-tanim', 'ayrik', 'ay-u11', 11, 'fill', 'derived', '(f ∘ g)(a) = f(____). Boşluğu doldurunuz.', '{"blanks":1}', '{"blanks":[["g(a)"]]}', 'Bileşkede önce g, sonra f uygulanır: (f ∘ g)(a) = f(g(a)).', 1, '11. ünite, Fonksiyonların bileşkesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-bileske-hesap', 'ayrik', 'ay-u11', 11, 'fill', 'derived', 'Z''den Z''ye f(x) = 2x + 3 ve g(x) = 3x + 2 olsun. f ∘ g ve g ∘ f nedir?

Boşluk 1: (f ∘ g)(x), Boşluk 2: (g ∘ f)(x)', '{"blanks":2}', '{"blanks":[["6x + 7","6x+7"],["6x + 11","6x+11"]]}', 'f(g(x)) = 2(3x + 2) + 3 = 6x + 7. g(f(x)) = 3(2x + 3) + 2 = 6x + 11. Bileşke değişmeli değildir.', 2, '11. ünite, Fonksiyonların bileşkesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-bileske-ters', 'ayrik', 'ay-u11', 11, 'mcq', 'derived', 'f: A → B bire-bir eşleşme ise f⁻¹ ∘ f ve f ∘ f⁻¹ nedir?', '{"choices":["Sırasıyla ι_A ve ι_B birim fonksiyonları","Sırasıyla f ve f⁻¹ fonksiyonları","İkisi de f⁻¹ fonksiyonudur","İki bileşke de tanımsızdır"]}', '{"index":0}', '(f⁻¹ ∘ f)(a) = a ve (f ∘ f⁻¹)(b) = b; yani ι_A ve ι_B.', 2, '11. ünite, Fonksiyonların bileşkesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-bileske-tanimli', 'ayrik', 'ay-u11', 11, 'tf', 'derived', 'f ∘ g bileşkesinin tanımlı olması için g''nin görüntü kümesi f''nin tanım kümesinin alt kümesi olmalıdır.', '{}', '{"value":true}', 'Doğru. g''nin çıktıları f''ye girdi olarak verilebilmelidir.', 2, '11. ünite, Fonksiyonların bileşkesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-bileske-kume', 'ayrik', 'ay-u11', 11, 'fill', 'derived', 'g: {a, b, c} → {a, b, c}, g(a) = b, g(b) = c, g(c) = a ve f: {a, b, c} → {1, 2, 3}, f(a) = 3, f(b) = 2, f(c) = 1 olsun. (f ∘ g)(a), (f ∘ g)(b), (f ∘ g)(c) nedir?

Boşluk 1: (f ∘ g)(a), Boşluk 2: (f ∘ g)(b), Boşluk 3: (f ∘ g)(c)', '{"blanks":3}', '{"blanks":[["2"],["1"],["3"]]}', 'Kitaptaki örnek: f(g(a)) = f(b) = 2, f(g(b)) = f(c) = 1, f(g(c)) = f(a) = 3. g ∘ f tanımlı değildir; f''nin görüntüsü g''nin tanım kümesinde değildir.', 2, '11. ünite, Fonksiyonların bileşkesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-bileske-birebir', 'ayrik', 'ay-u11', 11, 'yaz', 'derived', 'g: A → B ve f: B → C bire-bir ise f ∘ g''nin de bire-bir olduğunu ispatlayınız.', '{}', '{}', '(f ∘ g)(x) = (f ∘ g)(y) olsun: f(g(x)) = f(g(y)).
f bire-bir olduğundan g(x) = g(y).
g bire-bir olduğundan x = y.
Demek ki f ∘ g bire-birdir. ∎', 3, '11. ünite, Fonksiyonların bileşkesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-taban-tanim', 'ayrik', 'ay-u11', 11, 'mcq', 'derived', 'Taban fonksiyonu ⌊x⌋ neyi verir?', '{"choices":["x''ten küçük ya da eşit en büyük tam sayıyı","x''ten büyük ya da eşit en küçük tam sayıyı","x''e en yakın tam sayıyı","x''in kesirli kısmını"]}', '{"index":0}', '⌊x⌋ aşağı yuvarlar; ⌈x⌉ (tavan) yukarı yuvarlar.', 1, '11. ünite, Taban ve tavan fonksiyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-taban-deger', 'ayrik', 'ay-u11', 11, 'fill', 'derived', 'Değerleri bulunuz.

Boşluk 1: ⌊−0,5⌋, Boşluk 2: ⌈−0,5⌉, Boşluk 3: ⌊3,1⌋, Boşluk 4: ⌈3,1⌉', '{"blanks":4}', '{"blanks":[["-1","−1"],["0","-0","−0"],["3"],["4"]]}', '⌊−0,5⌋ = −1, ⌈−0,5⌉ = 0, ⌊3,1⌋ = 3, ⌈3,1⌉ = 4.', 1, '11. ünite, Taban ve tavan fonksiyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-bayt', 'ayrik', 'ay-u11', 11, 'fill', 'derived', '100 bitlik veriyi kodlamak için kaç bayt (8 bit) gerekir?', '{"blanks":1}', '{"blanks":[["13"]]}', '⌈100/8⌉ = ⌈12,5⌉ = 13 bayt.', 2, '11. ünite, Taban ve tavan fonksiyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ay-u11-t-taban-ozellik', 'ayrik', 'ay-u11', 11, 'tf', 'derived', 'Her x reel sayısı ve n tam sayısı için ⌊x + n⌋ = ⌊x⌋ + n''dir.', '{}', '{"value":true}', 'Doğru. Bir tam sayı eklemek tabanı aynı miktarda kaydırır. Ancak ⌊x + y⌋ = ⌊x⌋ + ⌊y⌋ genelde doğru değildir.', 2, '11. ünite, Taban ve tavan fonksiyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-karsit', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c1';
UPDATE questions SET kavram = 'u1-karsit', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c2';
UPDATE questions SET kavram = 'u1-karsit', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c3';
UPDATE questions SET kavram = 'u1-karsit', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c4';
UPDATE questions SET kavram = 'u1-karsit', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c5';
UPDATE questions SET kavram = 'u1-karsit', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c6';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c7';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c8';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c9';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c10';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c11';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c12';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c13';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c14';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c15';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c16';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c17';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c18';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c19';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c20';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c21';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c22';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c23';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c24';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c25';
UPDATE questions SET kavram = 'u1-onerme', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c26';
UPDATE questions SET kavram = 'u1-onerme', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u1-c27';
UPDATE questions SET kavram = 'u1-onerme', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k1';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k3';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k7c';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k7e';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k9';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k11';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k13';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k15e';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k17';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k19';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k23';
UPDATE questions SET kavram = 'u1-karsit', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k27';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k29';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k31c';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k31f';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u1-k37a';
UPDATE questions SET kavram = 'u1-onerme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-onerme-tanim';
UPDATE questions SET kavram = 'u1-onerme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-x-arti';
UPDATE questions SET kavram = 'u1-onerme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-bilesik';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-ve-dogru';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-veya-yanlis';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-xor';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-xor-tf';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-ama';
UPDATE questions SET kavram = 'u1-baglac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-degil-sembol';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-sartli-yanlis';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-hipotez';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-sadece-ise';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-gerekli';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-cift-sartli';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-hipotez-yanlis';
UPDATE questions SET kavram = 'u1-sartli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-yazilim-if';
UPDATE questions SET kavram = 'u1-karsit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-zit-denk';
UPDATE questions SET kavram = 'u1-karsit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-karsit-ters';
UPDATE questions SET kavram = 'u1-karsit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-ters-sembol';
UPDATE questions SET kavram = 'u1-karsit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-takim';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-oncelik';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-oncelik-ornek';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-satir-n';
UPDATE questions SET kavram = 'u1-tablo', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-tablo-ornek';
UPDATE questions SET kavram = 'u1-bit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-bit-ve';
UPDATE questions SET kavram = 'u1-bit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-bit-veya';
UPDATE questions SET kavram = 'u1-bit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-bit-xor';
UPDATE questions SET kavram = 'u1-bit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u1-t-bit-tanim';
UPDATE questions SET kavram = 'u2-ceviri', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u2-k1';
UPDATE questions SET kavram = 'u2-ceviri', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u2-k3';
UPDATE questions SET kavram = 'u2-sistem', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u2-k7';
UPDATE questions SET kavram = 'u2-sistem', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u2-k9';
UPDATE questions SET kavram = 'u2-sistem', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u2-k11';
UPDATE questions SET kavram = 'u2-arama', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u2-k13';
UPDATE questions SET kavram = 'u2-bulmaca', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u2-k19';
UPDATE questions SET kavram = 'u2-bulmaca', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u2-k21';
UPDATE questions SET kavram = 'u2-bulmaca', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u2-k25';
UPDATE questions SET kavram = 'u2-bulmaca', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u2-k37';
UPDATE questions SET kavram = 'u2-devre', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u2-k42';
UPDATE questions SET kavram = 'u2-ceviri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-film';
UPDATE questions SET kavram = 'u2-ceviri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-hata';
UPDATE questions SET kavram = 'u2-ceviri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-belirsiz';
UPDATE questions SET kavram = 'u2-sistem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-tutarli-tanim';
UPDATE questions SET kavram = 'u2-sistem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-tutarsiz';
UPDATE questions SET kavram = 'u2-sistem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-tutarli-ekle';
UPDATE questions SET kavram = 'u2-arama', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-and';
UPDATE questions SET kavram = 'u2-arama', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-not';
UPDATE questions SET kavram = 'u2-bulmaca', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-ikisi-sovalye';
UPDATE questions SET kavram = 'u2-bulmaca', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-camur';
UPDATE questions SET kavram = 'u2-devre', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-tersleyici';
UPDATE questions SET kavram = 'u2-devre', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-devre-cikti';
UPDATE questions SET kavram = 'u2-devre', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u2-t-devre-deger';
UPDATE questions SET kavram = 'u3-demorgan', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u3-k7';
UPDATE questions SET kavram = 'u3-totoloji', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u3-k9e';
UPDATE questions SET kavram = 'u3-denklik', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u3-k11c';
UPDATE questions SET kavram = 'u3-totoloji', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u3-k14';
UPDATE questions SET kavram = 'u3-totoloji', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u3-k15';
UPDATE questions SET kavram = 'u3-denklik', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u3-k17';
UPDATE questions SET kavram = 'u3-denklik', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u3-k23';
UPDATE questions SET kavram = 'u3-denklik', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u3-k31';
UPDATE questions SET kavram = 'u3-totoloji', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-totoloji-tanim';
UPDATE questions SET kavram = 'u3-totoloji', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-celiski';
UPDATE questions SET kavram = 'u3-totoloji', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-olumsallik';
UPDATE questions SET kavram = 'u3-totoloji', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-tur-sec';
UPDATE questions SET kavram = 'u3-denklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-denk-tanim';
UPDATE questions SET kavram = 'u3-denklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-sartli-denk';
UPDATE questions SET kavram = 'u3-denklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-dagilma';
UPDATE questions SET kavram = 'u3-denklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-yutma';
UPDATE questions SET kavram = 'u3-denklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-baskinlik';
UPDATE questions SET kavram = 'u3-denklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-sadelestir';
UPDATE questions SET kavram = 'u3-denklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-cift-sartli';
UPDATE questions SET kavram = 'u3-demorgan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-dm1';
UPDATE questions SET kavram = 'u3-demorgan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-dm2';
UPDATE questions SET kavram = 'u3-demorgan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-dm-cumle';
UPDATE questions SET kavram = 'u3-demorgan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-dm-genel';
UPDATE questions SET kavram = 'u3-sat', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-sat-tanim';
UPDATE questions SET kavram = 'u3-sat', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-sat-ornek';
UPDATE questions SET kavram = 'u3-sat', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-sat-degil';
UPDATE questions SET kavram = 'u3-sat', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u3-t-sudoku';
UPDATE questions SET kavram = 'u4-yuklem', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u4-c28';
UPDATE questions SET kavram = 'u4-yuklem', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u4-c29';
UPDATE questions SET kavram = 'u4-yuklem', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u4-c30';
UPDATE questions SET kavram = 'u4-yuklem', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u4-c31';
UPDATE questions SET kavram = 'u4-yuklem', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u4-k1';
UPDATE questions SET kavram = 'u4-yuklem', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u4-k3';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u4-k5';
UPDATE questions SET kavram = 'u4-ceviri', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u4-k7';
UPDATE questions SET kavram = 'u4-ceviri', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u4-k9';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u4-k11';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u4-k13';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u4-k15';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u4-k17';
UPDATE questions SET kavram = 'u4-yuklem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-onerme-fonk';
UPDATE questions SET kavram = 'u4-yuklem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-yuklem-ad';
UPDATE questions SET kavram = 'u4-yuklem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-onkosul';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-evrensel';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-karsi-ornek';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-varolussal';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-tek';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-oncelik';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-bagli';
UPDATE questions SET kavram = 'u4-niceleyici', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-sonlu';
UPDATE questions SET kavram = 'u4-degil', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-degil-evrensel';
UPDATE questions SET kavram = 'u4-degil', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-degil-var';
UPDATE questions SET kavram = 'u4-degil', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-degil-cumle';
UPDATE questions SET kavram = 'u4-degil', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-degil-yaz';
UPDATE questions SET kavram = 'u4-ceviri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-her-ogrenci';
UPDATE questions SET kavram = 'u4-ceviri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-bazi';
UPDATE questions SET kavram = 'u4-ceviri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u4-t-aslan';
UPDATE questions SET kavram = 'u5-ceviri', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u5-k1';
UPDATE questions SET kavram = 'u5-ceviri', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u5-k3';
UPDATE questions SET kavram = 'u5-ceviri', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u5-k9';
UPDATE questions SET kavram = 'u5-ceviri', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u5-k15';
UPDATE questions SET kavram = 'u5-sira', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-tamsayi-dyy';
UPDATE questions SET kavram = 'u5-sira', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-sira-onemli';
UPDATE questions SET kavram = 'u5-sira', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-ayni-niceleyici';
UPDATE questions SET kavram = 'u5-sira', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-gerektirir';
UPDATE questions SET kavram = 'u5-sira', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-xy-carpim';
UPDATE questions SET kavram = 'u5-sira', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-dongu';
UPDATE questions SET kavram = 'u5-sira', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-toplam';
UPDATE questions SET kavram = 'u5-ceviri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-toplam-degisme';
UPDATE questions SET kavram = 'u5-ceviri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-toplamsal-ters';
UPDATE questions SET kavram = 'u5-ceviri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-iki-negatif';
UPDATE questions SET kavram = 'u5-ceviri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-anne';
UPDATE questions SET kavram = 'u5-degil', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-degil-ic';
UPDATE questions SET kavram = 'u5-degil', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-degil-1';
UPDATE questions SET kavram = 'u5-degil', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-degil-2';
UPDATE questions SET kavram = 'u5-degil', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u5-t-limit';
UPDATE questions SET kavram = 'u6-gecerli', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k1';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k3a';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k3b';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k3d';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k3e';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k5';
UPDATE questions SET kavram = 'u6-nicel', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k7';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k9c';
UPDATE questions SET kavram = 'u6-yanilgi', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k15b';
UPDATE questions SET kavram = 'u6-yanilgi', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k15c';
UPDATE questions SET kavram = 'u6-nicel', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k15d';
UPDATE questions SET kavram = 'u6-yanilgi', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u6-k19';
UPDATE questions SET kavram = 'u6-gecerli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-gecerli-tanim';
UPDATE questions SET kavram = 'u6-gecerli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-gecerli-yanlis';
UPDATE questions SET kavram = 'u6-gecerli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-arguman-sonuc';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-mp';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-ayirici';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-birlestirme';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-yelken';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-cozum-kurali';
UPDATE questions SET kavram = 'u6-yanilgi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-teyit';
UPDATE questions SET kavram = 'u6-yanilgi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-inkar';
UPDATE questions SET kavram = 'u6-yanilgi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-kitap-problem';
UPDATE questions SET kavram = 'u6-nicel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-evrensel-ozelleme';
UPDATE questions SET kavram = 'u6-nicel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-varolussal-genelleme';
UPDATE questions SET kavram = 'u6-nicel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-evrensel-genelleme';
UPDATE questions SET kavram = 'u6-nicel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u6-t-ferda';
UPDATE questions SET kavram = 'u7-dogrudan', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u7-k2';
UPDATE questions SET kavram = 'u7-dogrudan', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u7-k6';
UPDATE questions SET kavram = 'u7-celiski', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u7-k9';
UPDATE questions SET kavram = 'u7-terim', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u7-k11';
UPDATE questions SET kavram = 'u7-zitpozitif', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u7-k16';
UPDATE questions SET kavram = 'u7-zitpozitif', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u7-k18';
UPDATE questions SET kavram = 'u7-dogrudan', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u7-k19';
UPDATE questions SET kavram = 'u7-celiski', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u7-k22';
UPDATE questions SET kavram = 'u7-cift', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u7-k26';
UPDATE questions SET kavram = 'u7-cift', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u7-k35';
UPDATE questions SET kavram = 'u7-terim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-teorem';
UPDATE questions SET kavram = 'u7-terim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-aksiyom';
UPDATE questions SET kavram = 'u7-terim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-lem';
UPDATE questions SET kavram = 'u7-terim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-sani';
UPDATE questions SET kavram = 'u7-dogrudan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-dogrudan-tanim';
UPDATE questions SET kavram = 'u7-dogrudan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-cift-tanim';
UPDATE questions SET kavram = 'u7-dogrudan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-kare';
UPDATE questions SET kavram = 'u7-dogrudan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-basit';
UPDATE questions SET kavram = 'u7-zitpozitif', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-zp-tanim';
UPDATE questions SET kavram = 'u7-zitpozitif', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-zp-ornek';
UPDATE questions SET kavram = 'u7-zitpozitif', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-ab-n';
UPDATE questions SET kavram = 'u7-celiski', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-celiski-tanim';
UPDATE questions SET kavram = 'u7-celiski', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-kok2';
UPDATE questions SET kavram = 'u7-celiski', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-gun';
UPDATE questions SET kavram = 'u7-cift', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-cift-yon';
UPDATE questions SET kavram = 'u7-cift', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-hata-bolme';
UPDATE questions SET kavram = 'u7-cift', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u7-t-dongusel';
UPDATE questions SET kavram = 'u8-durum', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u8-k1';
UPDATE questions SET kavram = 'u8-durum', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u8-k3';
UPDATE questions SET kavram = 'u8-durum', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u8-k6';
UPDATE questions SET kavram = 'u8-durum', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u8-k7';
UPDATE questions SET kavram = 'u8-varlik', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u8-k8';
UPDATE questions SET kavram = 'u8-karsi', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u8-k13';
UPDATE questions SET kavram = 'u8-teklik', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u8-k16';
UPDATE questions SET kavram = 'u8-teklik', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u8-k19';
UPDATE questions SET kavram = 'u8-durum', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-tukenmeli';
UPDATE questions SET kavram = 'u8-durum', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-durum-mantik';
UPDATE questions SET kavram = 'u8-durum', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-kare-son';
UPDATE questions SET kavram = 'u8-durum', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-genellik';
UPDATE questions SET kavram = 'u8-varlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-yapici';
UPDATE questions SET kavram = 'u8-varlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-ramanujan';
UPDATE questions SET kavram = 'u8-varlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-irrasyonel-us';
UPDATE questions SET kavram = 'u8-teklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-teklik-iki';
UPDATE questions SET kavram = 'u8-teklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-teklik-mantik';
UPDATE questions SET kavram = 'u8-karsi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-karsi-ornek';
UPDATE questions SET kavram = 'u8-karsi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-ileri-geri';
UPDATE questions SET kavram = 'u8-karsi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-ortalama';
UPDATE questions SET kavram = 'u8-karsi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u8-t-sani';
UPDATE questions SET kavram = 'u9-kartezyen', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u9-c36';
UPDATE questions SET kavram = 'u9-gosterim', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u9-k1';
UPDATE questions SET kavram = 'u9-altkume', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u9-k5';
UPDATE questions SET kavram = 'u9-altkume', yedek = 0, etiketler = 'rosen,cikmis' WHERE id = 'ay-u9-k6';
UPDATE questions SET kavram = 'u9-gosterim', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u9-k9';
UPDATE questions SET kavram = 'u9-gosterim', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u9-k11';
UPDATE questions SET kavram = 'u9-nicelik', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u9-k19';
UPDATE questions SET kavram = 'u9-kuvvet', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u9-k21';
UPDATE questions SET kavram = 'u9-kuvvet', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u9-k23';
UPDATE questions SET kavram = 'u9-kartezyen', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u9-k27';
UPDATE questions SET kavram = 'u9-gosterim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-kume-tanim';
UPDATE questions SET kavram = 'u9-gosterim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-kurma';
UPDATE questions SET kavram = 'u9-gosterim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-sayi-kumeleri';
UPDATE questions SET kavram = 'u9-gosterim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-bos-kume';
UPDATE questions SET kavram = 'u9-gosterim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-aralik';
UPDATE questions SET kavram = 'u9-altkume', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-altkume-tanim';
UPDATE questions SET kavram = 'u9-altkume', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-bos-alt';
UPDATE questions SET kavram = 'u9-altkume', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-esit';
UPDATE questions SET kavram = 'u9-altkume', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-oz-alt';
UPDATE questions SET kavram = 'u9-nicelik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-nicelik-tanim';
UPDATE questions SET kavram = 'u9-nicelik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-nicelik-harf';
UPDATE questions SET kavram = 'u9-nicelik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-sonsuz';
UPDATE questions SET kavram = 'u9-kuvvet', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-kuvvet-sayi';
UPDATE questions SET kavram = 'u9-kuvvet', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-kuvvet-bos';
UPDATE questions SET kavram = 'u9-kuvvet', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-kuvvet-yaz';
UPDATE questions SET kavram = 'u9-kartezyen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-sirali';
UPDATE questions SET kavram = 'u9-kartezyen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-axb';
UPDATE questions SET kavram = 'u9-kartezyen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-degisme';
UPDATE questions SET kavram = 'u9-kartezyen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-bagint';
UPDATE questions SET kavram = 'u9-kartezyen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u9-t-dogruluk-kumesi';
UPDATE questions SET kavram = 'u10-islem', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u10-c32';
UPDATE questions SET kavram = 'u10-islem', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u10-c33';
UPDATE questions SET kavram = 'u10-islem', yedek = 0, etiketler = 'cikmis' WHERE id = 'ay-u10-c34';
UPDATE questions SET kavram = 'u10-islem', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u10-k3';
UPDATE questions SET kavram = 'u10-ozdeslik', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u10-k15';
UPDATE questions SET kavram = 'u10-islem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-birlesim-tanim';
UPDATE questions SET kavram = 'u10-islem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-ayrik';
UPDATE questions SET kavram = 'u10-islem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-ic-dis';
UPDATE questions SET kavram = 'u10-islem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-tumleyen';
UPDATE questions SET kavram = 'u10-islem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-fark-tumleyen';
UPDATE questions SET kavram = 'u10-islem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-simetrik';
UPDATE questions SET kavram = 'u10-ozdeslik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-demorgan';
UPDATE questions SET kavram = 'u10-ozdeslik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-yutma';
UPDATE questions SET kavram = 'u10-ozdeslik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-dagilma';
UPDATE questions SET kavram = 'u10-ozdeslik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-uyelik';
UPDATE questions SET kavram = 'u10-ozdeslik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-ozdeslik-yaz';
UPDATE questions SET kavram = 'u10-genel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-genel-birlesim';
UPDATE questions SET kavram = 'u10-genel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-genel-birlesim2';
UPDATE questions SET kavram = 'u10-genel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-ai';
UPDATE questions SET kavram = 'u10-bit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-bit-gosterim';
UPDATE questions SET kavram = 'u10-bit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-bit-birlesim';
UPDATE questions SET kavram = 'u10-bit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u10-t-bit-kesisim';
UPDATE questions SET kavram = 'u11-tanim', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u11-k1';
UPDATE questions SET kavram = 'u11-taban', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u11-k9';
UPDATE questions SET kavram = 'u11-orten', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u11-k13';
UPDATE questions SET kavram = 'u11-orten', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u11-k15';
UPDATE questions SET kavram = 'u11-eslesme', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u11-k23';
UPDATE questions SET kavram = 'u11-tanim', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u11-k31';
UPDATE questions SET kavram = 'u11-ters', yedek = 0, etiketler = 'rosen' WHERE id = 'ay-u11-k39';
UPDATE questions SET kavram = 'u11-tanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-tanim';
UPDATE questions SET kavram = 'u11-tanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-goruntu';
UPDATE questions SET kavram = 'u11-tanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-deger-goruntu';
UPDATE questions SET kavram = 'u11-tanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-kesirsiz';
UPDATE questions SET kavram = 'u11-birebir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-birebir-tanim';
UPDATE questions SET kavram = 'u11-birebir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-x2';
UPDATE questions SET kavram = 'u11-birebir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-artan';
UPDATE questions SET kavram = 'u11-birebir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-birebir-ispat';
UPDATE questions SET kavram = 'u11-orten', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-orten-tanim';
UPDATE questions SET kavram = 'u11-orten', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-orten-ornek';
UPDATE questions SET kavram = 'u11-eslesme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-eslesme-tanim';
UPDATE questions SET kavram = 'u11-eslesme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-birim';
UPDATE questions SET kavram = 'u11-eslesme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-sonlu';
UPDATE questions SET kavram = 'u11-eslesme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-nasil-gosterilir';
UPDATE questions SET kavram = 'u11-ters', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-ters-kosul';
UPDATE questions SET kavram = 'u11-ters', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-ters-ornek';
UPDATE questions SET kavram = 'u11-ters', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-ters-dogru';
UPDATE questions SET kavram = 'u11-ters', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-x2-ters';
UPDATE questions SET kavram = 'u11-ters', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-ters-isaret';
UPDATE questions SET kavram = 'u11-bileske', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-bileske-tanim';
UPDATE questions SET kavram = 'u11-bileske', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-bileske-hesap';
UPDATE questions SET kavram = 'u11-bileske', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-bileske-ters';
UPDATE questions SET kavram = 'u11-bileske', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-bileske-tanimli';
UPDATE questions SET kavram = 'u11-bileske', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-bileske-kume';
UPDATE questions SET kavram = 'u11-bileske', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-bileske-birebir';
UPDATE questions SET kavram = 'u11-taban', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-taban-tanim';
UPDATE questions SET kavram = 'u11-taban', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-taban-deger';
UPDATE questions SET kavram = 'u11-taban', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-bayt';
UPDATE questions SET kavram = 'u11-taban', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ay-u11-t-taban-ozellik';
