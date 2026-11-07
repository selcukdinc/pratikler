-- Bu dosya scripts/sorular-sql.ts ile icerik/isletme/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ib-u1', 'isletme', 'İnsan İhtiyaçları ve Ekonomik Faaliyetler', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ib-u2', 'isletme', 'Üretim Faktörleri ve İşletme Kavramı', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ib-u3', 'isletme', 'İşletmenin Amaçları ve Performans İlkeleri', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ib-u4', 'isletme', 'İşletmenin Çevresi', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ib-u5', 'isletme', 'İşletmelerin Sınıflandırılması', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ib-u6', 'isletme', 'Hukuki Yapılarına Göre İşletmeler', 6, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ib-u7', 'isletme', 'Büyüme Olgusu ve Stratejileri', 7, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ib-u8', 'isletme', 'İşletmeler Arası Anlaşmalar ve Birlikler', 8, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ib-u9', 'isletme', 'Kuruluş Çalışmaları, Kapasite ve Başabaş Noktası', 9, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ib-u10', 'isletme', 'Kuruluş Yeri Seçimi', 10, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-ihtiyac-tanim', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Doğuştan var olan ya da sonradan ortaya çıkan, karşılandığında haz ve tatmin, karşılanmadığında acı ve üzüntü veren eksiklik duygusuna ne ad verilir?', '{"choices":["İhtiyaç","Fayda","Talep","Tüketim","Üretim"]}', '{"index":0}', 'Tanım **ihtiyaç** kavramına aittir. Fayda, mal ve hizmetlerin ihtiyacı gidermesiyle doğan tatmindir; talep ise satın alma gücüyle desteklenmiş istektir.', 1, 'Sınav özeti, 1. başlık · İhtiyaç kavramı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-itici-guc', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'İnsanları ekonomik faaliyetlerde bulunmaya yönelten en temel itici güç aşağıdakilerden hangisidir?', '{"choices":["İhtiyaçlar","Devlet teşvikleri","Rekabet","Teknolojik gelişmeler","Vergi yükümlülükleri"]}', '{"index":0}', 'Özete göre insanları ekonomik faaliyete yönelten en temel güç **ihtiyaçlardır**; üretim de tüketim de ihtiyaçları karşılamak için yapılır.', 1, 'Sınav özeti, 1. başlık · İhtiyaç kavramı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-ihtiyac-sonuc', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'İhtiyaç kavramına göre bir ihtiyaç karşılanmadığında birey ne hisseder?', '{"choices":["Acı, üzüntü ve ızdırap","Haz ve mutluluk","Tatmin ve doyum","Kayıtsızlık","Güven ve huzur"]}', '{"index":0}', 'Karşılanan ihtiyaç haz ve mutluluk (tatmin) verir; **karşılanmayan** ihtiyaç ise acı, üzüntü ve ızdırap verir.', 1, 'Sınav özeti, 1. başlık · İhtiyaç kavramı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-maslow-en-alt', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Maslow''un ihtiyaçlar hiyerarşisinde piramidin en alt basamağında hangi ihtiyaçlar yer alır?', '{"choices":["Fizyolojik ihtiyaçlar","Güvenlik ihtiyaçları","Sosyal ihtiyaçlar","Saygı ihtiyacı","Kendini gerçekleştirme ihtiyacı"]}', '{"index":0}', 'Yeme, içme, uyuma, nefes alma ve barınma gibi biyolojik olarak hayatta kalmayı sağlayan **fizyolojik ihtiyaçlar** piramidin en alt basamağıdır.', 1, 'Sınav özeti, 1. başlık · Maslow''un ihtiyaçlar hiyerarşisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-maslow-en-ust', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Bireyin potansiyelini tam anlamıyla ortaya koyması, yaratıcılığını kullanması ve ideallerine ulaşması Maslow''un hangi basamağıdır?', '{"choices":["Kendini gerçekleştirme","Saygı","Sosyal","Güvenlik","Fizyolojik"]}', '{"index":0}', 'Piramidin en üstündeki **kendini gerçekleştirme** basamağı, potansiyeli tam olarak ortaya koymayı ve ideallere ulaşmayı anlatır.', 1, 'Sınav özeti, 1. başlık · Maslow''un ihtiyaçlar hiyerarşisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-maslow-sira', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Maslow''un hiyerarşisinde basamakların alttan üste doğru sıralaması hangisinde doğru verilmiştir?', '{"choices":["Fizyolojik → Güvenlik → Sosyal → Saygı → Kendini gerçekleştirme","Fizyolojik → Sosyal → Güvenlik → Saygı → Kendini gerçekleştirme","Güvenlik → Fizyolojik → Sosyal → Saygı → Kendini gerçekleştirme","Fizyolojik → Güvenlik → Saygı → Sosyal → Kendini gerçekleştirme","Sosyal → Güvenlik → Fizyolojik → Saygı → Kendini gerçekleştirme"]}', '{"index":0}', 'Maslow (1943) beş basamağı alttan üste şöyle sıralar: **fizyolojik, güvenlik, sosyal (sevgi ve aidiyet), saygı (itibar), kendini gerçekleştirme**.', 2, 'Sınav özeti, 1. başlık · Maslow''un ihtiyaçlar hiyerarşisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-maslow-guvenlik', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'İş güvencesi, emeklilik ve sağlık güvencesi isteği Maslow''un hangi basamağına örnektir?', '{"choices":["Güvenlik ihtiyaçları","Fizyolojik ihtiyaçlar","Sosyal ihtiyaçlar","Saygı ihtiyacı","Kendini gerçekleştirme ihtiyacı"]}', '{"index":0}', 'Can ve mal güvenliği, iş güvencesi, emeklilik ve sağlık güvencesi gibi geleceğe güvenle bakabilme arzuları **güvenlik ihtiyaçlarıdır**.', 1, 'Sınav özeti, 1. başlık · Maslow''un ihtiyaçlar hiyerarşisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-maslow-sosyal', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Bir gruba mensup olma, arkadaşlık kurma ve toplum tarafından kabul görme isteği Maslow''un hangi basamağındadır?', '{"choices":["Sosyal ihtiyaçlar","Saygı ihtiyacı","Güvenlik ihtiyaçları","Fizyolojik ihtiyaçlar","Kendini gerçekleştirme ihtiyacı"]}', '{"index":0}', 'Sevgi ve aidiyet olarak da anılan **sosyal ihtiyaçlar**; gruba ait olmayı, sevmeyi, sevilmeyi ve toplumca kabul görmeyi kapsar.', 1, 'Sınav özeti, 1. başlık · Maslow''un ihtiyaçlar hiyerarşisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-maslow-saygi', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Başarı, statü, tanınma ve başkaları tarafından takdir edilme isteği Maslow''un hangi basamağındadır?', '{"choices":["Saygı ihtiyacı","Sosyal ihtiyaçlar","Güvenlik ihtiyaçları","Kendini gerçekleştirme ihtiyacı","Fizyolojik ihtiyaçlar"]}', '{"index":0}', 'Başarı, statü, tanınma, kendine güven ve takdir görme **saygı (itibar)** ihtiyacının parçalarıdır; sosyal basamağın bir üstündedir.', 1, 'Sınav özeti, 1. başlık · Maslow''un ihtiyaçlar hiyerarşisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-maslow-ilke', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Maslow''un hiyerarşisinin temel varsayımı aşağıdakilerden hangisidir?', '{"choices":["Alt basamak belirli bir doyuma ulaşmadan üst basamağa yönelinmez","Bütün basamaklardaki ihtiyaçlar aynı anda ve eşit şiddette hissedilir","Üst basamaktaki ihtiyaçlar karşılanınca alt basamaklar ortadan kalkar","İnsan önce kendini gerçekleştirme ihtiyacını karşılamaya çalışır","Basamakların sırası kişiden kişiye rastgele değişir"]}', '{"index":0}', 'Maslow''a göre birey, **alt basamaktaki ihtiyaçlarını belirli bir doyuma ulaştırmadan** bir üst basamaktaki ihtiyacın tatminine yönelmez.', 2, 'Sınav özeti, 1. başlık · Maslow''un ihtiyaçlar hiyerarşisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-maslow-yil', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'İnsan ihtiyaçlarını beş kademeli bir piramit şeklinde sıralayan Abraham H. Maslow bu sınıflandırmayı hangi yıl ortaya koymuştur?', '{"choices":["1943","1911","1959","1969","1987"]}', '{"index":0}', 'Özete göre Abraham H. Maslow ihtiyaçlar hiyerarşisini **1943** yılında ortaya koymuştur.', 1, 'Sınav özeti, 1. başlık · Maslow''un ihtiyaçlar hiyerarşisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-sonsuzluk', 'isletme', 'ib-u1', 1, 'mcq', 'derived', '"Bir ihtiyaç karşılandığında yerine yenisi ortaya çıkar." ifadesi ihtiyaçların hangi özelliğini anlatır?', '{"choices":["Sonsuzluk ve çeşitlilik","İkame edilebilirlik","Şiddet derecesi","Tekrarlanma","Azalan marjinal fayda"]}', '{"index":0}', 'İnsan ihtiyaçları sayıca sınırsızdır; biri karşılanınca yenisi doğar. Bu, **sonsuzluk ve çeşitlilik** özelliğidir.', 1, 'Sınav özeti, 1. başlık · İhtiyaçların özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-ikame', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Çay içmek isteyen birinin çay yerine kahve içmesi ihtiyaçların hangi özelliğine örnektir?', '{"choices":["İkame edilebilirlik","Tekrarlanma","Şiddet derecesi","Sonsuzluk","Kendini gerçekleştirme"]}', '{"index":0}', 'Bir ihtiyacın farklı mal ya da hizmetlerle giderilebilmesi **ikame edilebilirliktir**; özetteki örnek de çay yerine kahvedir.', 1, 'Sınav özeti, 1. başlık · İhtiyaçların özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-marjinal', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Susamış bir kişinin içtiği her yeni bardak suyun ona verdiği tatminin giderek azalması hangi kavramla açıklanır?', '{"choices":["Azalan marjinal fayda","İkame edilebilirlik","Tekrarlanma","Sonsuzluk ve çeşitlilik","Ölçek ekonomisi"]}', '{"index":0}', 'İhtiyaç karşılandıkça şiddeti azalır; bu, şiddet derecesi özelliğinin sonucu olan **azalan marjinal fayda**dır.', 2, 'Sınav özeti, 1. başlık · İhtiyaçların özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-tekrarlanma', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Öğle yemeği yiyen birinin akşam yeniden acıkması ihtiyaçların hangi özelliğine örnektir?', '{"choices":["Tekrarlanma","İkame edilebilirlik","Sonsuzluk ve çeşitlilik","Azalan marjinal fayda","Kıtlık"]}', '{"index":0}', 'Karşılanan ihtiyaçlar, özellikle fizyolojik olanlar, belirli aralıklarla yeniden ortaya çıkar: **tekrarlanma**.', 1, 'Sınav özeti, 1. başlık · İhtiyaçların özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-siddet', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'İhtiyaçların şiddet derecesi özelliğine göre aşağıdakilerden hangisi doğrudur?', '{"choices":["Açlık ve susuzluk gibi zorunlu ihtiyaçların şiddeti daha yüksektir","Bütün ihtiyaçlar aynı şiddette hissedilir","İhtiyaç karşılandıkça şiddeti artar","Lüks ihtiyaçların şiddeti zorunlu ihtiyaçlardan yüksektir","Şiddet derecesi yalnızca hizmetler için geçerlidir"]}', '{"index":0}', 'Her ihtiyacın hissedilme şiddeti farklıdır; **zorunlu ihtiyaçların** (açlık, susuzluk) şiddeti daha yüksektir ve ihtiyaç karşılandıkça şiddet azalır.', 1, 'Sınav özeti, 1. başlık · İhtiyaçların özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-fayda', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Mal ve hizmetlerin ihtiyaçları gidermesiyle sağlanan tatmin duygusuna ne ad verilir?', '{"choices":["Fayda","Kâr","Verimlilik","Talep","Değer"]}', '{"index":0}', 'İhtiyaçları giderme özelliğine sahip mal ve hizmetlerin sağladığı tatmin duygusu **fayda** (utility) olarak adlandırılır.', 1, 'Sınav özeti, 1. başlık · Fayda, mallar ve hizmetler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-serbest-mal', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Doğada bol bulunan, elde edilmesi çaba ve bedel gerektirmeyen hava ve güneş ışığı gibi mallara ne ad verilir?', '{"choices":["Serbest mallar","Ekonomik mallar","Tüketim malları","Sermaye malları","Dayanıklı mallar"]}', '{"index":0}', 'Elde edilişine göre mallar ikiye ayrılır: bol ve bedelsiz olanlar **serbest mallar**, çaba ve bedel gerektiren kıt olanlar ekonomik mallardır.', 1, 'Sınav özeti, 1. başlık · Fayda, mallar ve hizmetler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-ekonomik-mal', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Elde edilmesi için çaba, üretim ve bedel ödenmesi gereken kıt mallar hangisidir?', '{"choices":["Ekonomik mallar","Serbest mallar","Kamusal hizmetler","Soyut araçlar","Doğal mallar"]}', '{"index":0}', 'Kıt oldukları için üretilmesi ve bedel ödenmesi gereken mallar **ekonomik mallardır**; ekonominin konusu da bu kıt mallardır.', 1, 'Sınav özeti, 1. başlık · Fayda, mallar ve hizmetler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-sermaye-mali', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Bir mobilya fabrikasının kullandığı kesim makinesi kullanım amacına göre hangi mal grubuna girer?', '{"choices":["Sermaye malı","Tüketim malı","Serbest mal","Dayanıksız tüketim malı","Hizmet"]}', '{"index":0}', 'Başka malların üretiminde kullanılan makine, teçhizat ve hammadde **üretim (sermaye) mallarıdır**; nihai tüketicinin ihtiyacını doğrudan karşılayan mallar ise tüketim mallarıdır.', 1, 'Sınav özeti, 1. başlık · Fayda, mallar ve hizmetler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-hizmet-ozellik', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi hizmetlerin özelliklerinden biri değildir?', '{"choices":["Stoklanabilir olmaları","Fiziksel varlıklarının olmaması","Üretildikleri anda tüketilmeleri","Mülkiyet devrinin söz konusu olmaması","Soyut araçlar olmaları"]}', '{"index":0}', 'Hizmetler soyuttur, fiziksel varlıkları yoktur, üretildikleri anda tüketilir, mülkiyetleri devredilmez ve **depolanamaz (stoklanamaz)**. Stoklanabilirlik mallara özgüdür.', 2, 'Sınav özeti, 1. başlık · Fayda, mallar ve hizmetler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-mal-ozellik', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Fiziksel varlığı olan, dokunulabilen ve stoklanabilen, ihtiyaç karşılayan araçlara ne ad verilir?', '{"choices":["Mal","Hizmet","Fayda","Emek","Girişim"]}', '{"index":0}', 'İhtiyacı karşılayan somut araçlar **mallardır**: fiziksel varlıkları vardır, dokunulabilir ve stoklanabilirler. Hizmetler ise soyut araçlardır.', 1, 'Sınav özeti, 1. başlık · Fayda, mallar ve hizmetler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u1-hizmet-ornek', 'isletme', 'ib-u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi bir hizmettir?', '{"choices":["Bankacılık","Ekmek","Buzdolabı","Pamuk ipliği","Torna tezgâhı"]}', '{"index":0}', 'Özetteki hizmet örnekleri eğitim, sağlık, ulaşım, **bankacılık** ve turizmdir. Diğerleri fiziksel varlığı olan mallardır.', 1, 'Sınav özeti, 1. başlık · Fayda, mallar ve hizmetler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-ekonomi-tanim', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Sınırsız insan ihtiyaçlarının kıt kaynaklarla nasıl en etkin biçimde karşılanacağını inceleyen bilim dalı hangisidir?', '{"choices":["Ekonomi","Sosyoloji","Hukuk","Psikoloji","İstatistik"]}', '{"index":0}', '**Ekonomi**, sınırsız ihtiyaçlar ile kıt kaynaklar arasındaki dengeyi, yani kaynakların en etkin kullanımını inceler.', 1, 'Sınav özeti, 2. başlık · Ekonomi, üretim ve fayda türleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-uretim-tanim', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Kıt kaynakları kullanarak insan ihtiyaçlarını karşılayacak mal ve hizmetleri meydana getirme ve fayda yaratma faaliyetine ne ad verilir?', '{"choices":["Üretim","Tüketim","Dağıtım","Yatırım","Tasarruf"]}', '{"index":0}', 'Özete göre **üretim**, kıt kaynaklarla mal ve hizmet meydana getirerek fayda yaratma faaliyetidir.', 1, 'Sınav özeti, 2. başlık · Ekonomi, üretim ve fayda türleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-fayda-turleri', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Özete göre üretim faaliyetiyle yaratılan fayda türleri aşağıdakilerin hangisinde doğru verilmiştir?', '{"choices":["Şekil, yer, zaman ve mülkiyet faydası","Şekil, fiyat, kalite ve marka faydası","Yer, kalite, hız ve maliyet faydası","Zaman, ücret, faiz ve rant faydası","Mülkiyet, vergi, kâr ve sermaye faydası"]}', '{"index":0}', 'Üretim dört tür fayda yaratır: **şekil, yer, zaman ve mülkiyet** faydası. Hammaddeyi mamule çevirmek şekil, mamulü tüketiciye taşımak yer faydasıdır.', 2, 'Sınav özeti, 2. başlık · Ekonomi, üretim ve fayda türleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-faktorler', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Aşağıdakilerden hangisi dört temel üretim faktöründen biri değildir?', '{"choices":["Teknoloji","Emek","Sermaye","Doğa","Girişimci"]}', '{"index":0}', 'Özetteki dört üretim faktörü **emek, sermaye, doğa ve girişimcidir**. Teknoloji bu tabloda ayrı bir faktör olarak yer almaz.', 1, 'Sınav özeti, 2. başlık · Üretim faktörleri ve getirileri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-emek-getiri', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Emek (işgücü) üretim faktörünün ekonomik getirisi (karşılığı) hangisidir?', '{"choices":["Ücret","Faiz","Rant","Kâr","Temettü"]}', '{"index":0}', 'Getiriler: emek → **ücret**, sermaye → faiz, doğa → rant (kira), girişimci → kâr.', 1, 'Sınav özeti, 2. başlık · Üretim faktörleri ve getirileri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-sermaye-getiri', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Sermaye (kapital) üretim faktörünün ekonomik getirisi hangisidir?', '{"choices":["Faiz","Ücret","Rant","Kâr","Prim"]}', '{"index":0}', 'Makine, bina, hammadde ve parasal fonlardan oluşan sermayenin karşılığı **faizdir**.', 1, 'Sınav özeti, 2. başlık · Üretim faktörleri ve getirileri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-doga-getiri', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Toprak, madenler, ormanlar ve su kaynaklarından oluşan doğa faktörünün getirisi hangisidir?', '{"choices":["Rant","Faiz","Ücret","Kâr","Vergi"]}', '{"index":0}', 'Doğa (tabiat) faktörünün ekonomik karşılığı **rant**, yani kiradır.', 1, 'Sınav özeti, 2. başlık · Üretim faktörleri ve getirileri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-girisimci-getiri', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Diğer üç üretim faktörünü bir araya getirip kâr-zarar riskini üstlenen girişimcinin getirisi hangisidir?', '{"choices":["Kâr","Ücret","Faiz","Rant","Maaş"]}', '{"index":0}', 'Riski üstlenen **girişimcinin** getirisi **kârdır**; kâr aynı zamanda girişimcinin risk primidir.', 1, 'Sınav özeti, 2. başlık · Üretim faktörleri ve getirileri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-emek-tanim', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Üretim sürecine katılan insanların bedensel ve zihinsel çabalarının bütününe ne ad verilir?', '{"choices":["Emek","Sermaye","Girişim","Teknoloji","Doğa"]}', '{"index":0}', '**Emek (işgücü)**, üretime katılan insanların hem fiziksel hem fikri çabalarını kapsar.', 1, 'Sınav özeti, 2. başlık · Üretim faktörleri ve getirileri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-mali-sermaye', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Özete göre sermaye üretim faktörü hangi iki öğeden oluşur?', '{"choices":["Fiziki sermaye ve mali sermaye","Emek ve doğal kaynaklar","Öz sermaye ve kâr","Ücret ve faiz","Toprak ve madenler"]}', '{"index":0}', 'Makine, bina, araç-gereç ve hammadde **fiziki sermaye**, parasal fonlar ise **mali sermayedir**.', 2, 'Sınav özeti, 2. başlık · Üretim faktörleri ve getirileri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-faktor-eslesme', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Üretim faktörü ile getirisinin eşleştirmelerinden hangisi yanlıştır?', '{"choices":["Doğa → Faiz","Emek → Ücret","Sermaye → Faiz","Girişimci → Kâr","Doğa → Rant"]}', '{"index":0}', 'Doğanın getirisi faiz değil **rant (kira)**dır; faiz sermayenin getirisidir.', 2, 'Sınav özeti, 2. başlık · Üretim faktörleri ve getirileri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-isletme-tanim', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'İnsan ihtiyaçlarını karşılamak için üretim faktörlerini planlı ve sistemli biçimde bir araya getirerek mal ya da hizmet üreten ve pazarlayan iktisadi, teknik ve sosyal birim hangisidir?', '{"choices":["İşletme","Piyasa","Sendika","Kooperatif birliği","Sektör"]}', '{"index":0}', 'Bu, özetteki **işletme** tanımıdır: üretim faktörlerini bir araya getiren iktisadi, teknik ve sosyal birim.', 1, 'Sınav özeti, 2. başlık · İşletme, girişim, girişimci ve profesyonel yönetici', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-girisim-isletme', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Girişim (teşebbüs) ile işletme arasındaki ilişki hangisinde doğru verilmiştir?', '{"choices":["Girişim karar bağımsızlığı olan üst mülkiyet birimi, işletme ise üretimin yapıldığı teknik alt birimdir","İşletme hukuki bağımsızlığı olan üst birim, girişim ise onun teknik alt birimidir","Girişim ile işletme her bakımdan aynı anlama gelir","Girişim yalnızca kamu kuruluşları, işletme yalnızca özel kuruluşlar için kullanılır","İşletme risk üstlenen birim, girişim ise yalnızca üretim yapan fabrikadır"]}', '{"index":0}', 'Özete göre **girişim**, hukuki ve iktisadi açıdan karar bağımsızlığına sahip, risk üstlenen üst mülkiyet birimidir; **işletme** ise girişimin üretim yapılan teknik alt birimidir.', 2, 'Sınav özeti, 2. başlık · İşletme, girişim, girişimci ve profesyonel yönetici', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-yonetici', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'İşletmenin sahibi olması gerekmeyen, uzmanlığıyla işletmeyi girişimci adına yöneten ve karşılığında maaş alan kişi kimdir?', '{"choices":["Profesyonel yönetici","Girişimci","Komanditer ortak","Pay sahibi","Tedarikçi"]}', '{"index":0}', '**Profesyonel yönetici** mülkiyete sahip olmak zorunda değildir; yönetim bilgisini kullanır ve **ücret** alır. Riski üstlenen ise girişimcidir.', 1, 'Sınav özeti, 2. başlık · İşletme, girişim, girişimci ve profesyonel yönetici', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-girisimci-risk', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Girişimciyi profesyonel yöneticiden ayıran temel özellik hangisidir?', '{"choices":["Sermayesini ortaya koyarak ekonomik riski üstlenmesi","Yönetim bilgisine ve uzmanlığa sahip olması","Karşılığında aylık ücret alması","İşletmeyi bir başkası adına yönetmesi","Yalnızca büyük işletmelerde bulunması"]}', '{"index":0}', 'Girişimci sermayesini koyar ve **kâr-zarar riskini üstlenir**; yönetici ise girişimci adına çalışıp ücret alır.', 1, 'Sınav özeti, 2. başlık · İşletme, girişim, girişimci ve profesyonel yönetici', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-davranis', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Çalışanların motivasyonu, iş tatmini, liderlik ve tüketici davranışlarının anlaşılmasında işletme bilimi en çok hangi disiplinden yararlanır?', '{"choices":["Davranış bilimleri","Hukuk","Matematik ve istatistik","Mühendislik","İktisat"]}', '{"index":0}', 'Motivasyon, liderlik, örgütsel davranış ve tüketici davranışı **davranış bilimlerinin** (psikoloji ve sosyoloji) konusudur.', 1, 'Sınav özeti, 2. başlık · İşletme biliminin diğer disiplinlerle ilişkisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-istatistik', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Yöneylem araştırması, talep tahmini ve stok kontrolü gibi kantitatif karar modelleri işletme biliminin hangi disiplinle ilişkisine örnektir?', '{"choices":["Matematik ve istatistik","Hukuk","Sosyoloji","Psikoloji","Tarih"]}', '{"index":0}', 'Talep tahmini, stok kontrolü, finansal analiz ve yöneylem araştırması **matematik ve istatistik** yöntemleriyle yapılır.', 1, 'Sınav özeti, 2. başlık · İşletme biliminin diğer disiplinlerle ilişkisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-hukuk', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Şirket sözleşmeleri, vergi yükümlülükleri ve işçi-işveren ilişkilerinin yasal zeminde yürütülmesi işletmenin hangi disiplinle ilişkisini gösterir?', '{"choices":["Hukuk","İktisat","Davranış bilimleri","Mühendislik","İstatistik"]}', '{"index":0}', 'Kuruluş, şirket sözleşmeleri, vergi, ticaret hukuku ve iş hukuku **hukuk** disiplininin alanıdır.', 1, 'Sınav özeti, 2. başlık · İşletme biliminin diğer disiplinlerle ilişkisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-muhendislik', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Fabrika yerleşimi, otomasyon, kalite kontrol ve yönetim bilişim sistemlerinin (MIS) kurulması hangi disiplinle ilgilidir?', '{"choices":["Mühendislik ve bilişim teknolojileri","Hukuk","Sosyoloji","İktisat","Psikoloji"]}', '{"index":0}', 'Üretim süreçlerinin tasarımı, fabrika yerleşimi, otomasyon ve MIS **mühendislik ve bilişim teknolojilerinin** katkısıdır.', 1, 'Sınav özeti, 2. başlık · İşletme biliminin diğer disiplinlerle ilişkisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-iktisat', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'Arz-talep, fiyat oluşumu, enflasyon ve piyasa yapıları konularında işletmeye makro ve mikro çerçeve sunan disiplin hangisidir?', '{"choices":["İktisat","Hukuk","Mühendislik","Psikoloji","İstatistik"]}', '{"index":0}', 'Kıtlık, kaynak dağılımı, arz-talep, fiyat ve enflasyon **iktisadın (ekonominin)** konusudur.', 1, 'Sınav özeti, 2. başlık · İşletme biliminin diğer disiplinlerle ilişkisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u2-disiplinlerarasi', 'isletme', 'ib-u2', 2, 'mcq', 'derived', 'İşletme biliminin karar süreçlerinde iktisat, hukuk, psikoloji ve mühendislik gibi alanlardan doğrudan yararlanması onun hangi niteliğini gösterir?', '{"choices":["Disiplinlerarası olmasını","Kâr amacı gütmesini","Kapalı bir sistem olmasını","Yalnızca uygulamalı olmasını","Kamu yararını gözetmesini"]}', '{"index":0}', 'Özete göre işletme bilimi **disiplinlerarası** bir nitelik taşır; karar alırken birçok bilim dalından yararlanır.', 1, 'Sınav özeti, 2. başlık · İşletme biliminin diğer disiplinlerle ilişkisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-kar-tanim', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Kâr nasıl tanımlanır?', '{"choices":["Toplam gelirler ile toplam giderler arasındaki olumlu fark","Toplam satışların toplam sermayeye oranı","Çıktı miktarının girdi miktarına oranı","Satış tutarının üretim maliyetine oranı","Sabit maliyetler ile değişken maliyetlerin toplamı"]}', '{"index":0}', 'Kâr = Toplam Gelir − Toplam Maliyet; yani gelirler ile giderler arasındaki **olumlu farktır**. Diğer oranlar verimlilik, iktisadilik ve rantabiliteye aittir.', 1, 'Sınav özeti, 3. başlık · İşletmenin amaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-uzun-donem', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Modern işletmecilikte kâr amacıyla ilgili hangi yaklaşım benimsenir?', '{"choices":["Uzun dönemli tatminkâr kâr","Kısa vadede olabildiğince yüksek vurgun kârı","Kâr yerine yalnızca pazar payı","Her dönem sıfır kârla çalışmak","Kârın tamamını vergi olarak ödemek"]}', '{"index":0}', 'Özete göre kısa vadeli vurgun kârı yerine işletmenin geleceğini güvenceye alan **uzun dönemli tatminkâr (optimal) kâr** hedeflenir.', 2, 'Sınav özeti, 3. başlık · İşletmenin amaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-kar-islev', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Özete göre kâr aşağıdakilerden hangisi değildir?', '{"choices":["Emeğin getirisi","Girişimcinin risk primi","Büyümenin finansman kaynağı","Başarı ölçütü","Özel işletmelerin temel kuruluş güdüsü"]}', '{"index":0}', 'Kâr; girişimcinin risk primi, büyümenin finansman kaynağı ve başarı ölçütüdür. Emeğin getirisi kâr değil **ücrettir**.', 2, 'Sınav özeti, 3. başlık · İşletmenin amaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-sosyal-sorumluluk', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'İşletmenin istihdam yaratması, vergi ödemesi, çevreyi koruması ve iş ahlakına uygun davranması hangi amacının kapsamındadır?', '{"choices":["Topluma hizmet ve sosyal sorumluluk","Uzun dönemde kâr elde etme","Varlığını sürdürme ve büyüme","Verimlilik","Rantabilite"]}', '{"index":0}', 'Kaliteli ve ucuz mal sunmak, istihdam, vergi, çevreyi koruma ve etik davranış **topluma hizmet ve sosyal sorumluluk** amacıdır.', 1, 'Sınav özeti, 3. başlık · İşletmenin amaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-yasama', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Yoğun rekabet ortamında piyasadan silinmemek, pazar payını korumak ve ölçeğini büyüterek süreklilik kazanmak işletmenin hangi amacıdır?', '{"choices":["Varlığını sürdürme ve büyüme","Topluma hizmet","Kısa vadede kâr","İktisadilik","Sosyal sorumluluk"]}', '{"index":0}', 'Rekabette ayakta kalmak, pazar payını korumak ve büyümek **varlığını sürdürme (yaşama) ve büyüme** amacıdır.', 1, 'Sınav özeti, 3. başlık · İşletmenin amaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-ozel-guduu', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Özel işletmelerin en temel kuruluş güdüsü hangisidir?', '{"choices":["Uzun dönemde kâr elde etmek","Vergi ödemek","İstihdam yaratmak","Çevreyi korumak","Tekel kurmak"]}', '{"index":0}', 'Özete göre **uzun dönemde kâr elde etme**, özel işletmelerin en temel kuruluş güdüsüdür; diğer amaçlar bunu tamamlar.', 1, 'Sınav özeti, 3. başlık · İşletmenin amaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-verimlilik-formul', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Verimlilik (prodüktivite) hangi oranla hesaplanır?', '{"choices":["Çıktı / Girdi","Satış tutarı / Üretim maliyeti","Net kâr / Öz sermaye","Girdi / Çıktı","Fiili kapasite / Pratik kapasite"]}', '{"index":0}', 'Verimlilik, elde edilen **çıktının** kullanılan **girdiye** oranıdır: Verimlilik = Çıktı / Girdi.', 1, 'Sınav özeti, 3. başlık · Verimlilik (prodüktivite)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-verimlilik-hesap', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Bir atölyede 8 işçi bir günde 400 sandalye üretmektedir. İşçi başına günlük emek verimliliği kaçtır?', '{"choices":["50 sandalye","40 sandalye","80 sandalye","3200 sandalye","0,02 sandalye"]}', '{"index":0}', 'Verimlilik = Çıktı / Girdi = 400 / 8 = **50** sandalye/işçi. 3200 çarpımdır, 0,02 ise ters orandır.', 2, 'Sınav özeti, 3. başlık · Verimlilik (prodüktivite)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-verimlilik-artis', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Aşağıdakilerden hangisi verimliliğin arttığını gösterir?', '{"choices":["Aynı girdiyle daha fazla çıktı elde edilmesi","Aynı çıktı için daha fazla girdi kullanılması","Girdinin ve çıktının aynı oranda azalması","Satış fiyatının artırılması","Öz sermayenin artırılması"]}', '{"index":0}', 'Verimlilik, **aynı girdiyle daha fazla çıktı** ya da aynı çıktıyı daha az girdiyle üretmektir. Aynı oranda değişim oranı değiştirmez.', 1, 'Sınav özeti, 3. başlık · Verimlilik (prodüktivite)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-verimlilik-karsilastir', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'A işletmesi 20 makineyle 1000 birim, B işletmesi 25 makineyle 1100 birim üretiyor. Makine verimliliği için hangisi doğrudur?', '{"choices":["A''nın verimliliği 50, B''ninki 44 birimdir; A daha verimlidir","A''nın verimliliği 44, B''ninki 50 birimdir; B daha verimlidir","İkisinin verimliliği de 50 birimdir","B daha çok ürettiği için daha verimlidir","A''nın verimliliği 0,02, B''ninki 0,023''tür; B daha verimlidir"]}', '{"index":0}', 'A: 1000 / 20 = **50**, B: 1100 / 25 = **44** birim/makine. B daha çok üretse de girdi başına çıktısı düşüktür; A daha verimlidir.', 3, 'Sınav özeti, 3. başlık · Verimlilik (prodüktivite)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-verimlilik-tur', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Özete göre verimlilik girdi ile çıktı arasındaki nasıl bir orandır?', '{"choices":["Fiziksel ya da parasal oran","Yalnızca parasal oran","Yalnızca sermayeye dayalı oran","Kâra dayalı oran","Vergiye dayalı oran"]}', '{"index":0}', 'Verimlilik, üretimde kullanılan girdiler ile elde edilen çıktılar arasındaki **fiziksel ya da parasal** orandır.', 1, 'Sınav özeti, 3. başlık · Verimlilik (prodüktivite)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-iktisadilik-formul', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'İktisadilik (ekonomiklik) hangi oranla ölçülür?', '{"choices":["Satış tutarı / Üretim maliyetleri","Çıktı / Girdi","Net kâr / Toplam sermaye","Fiili kapasite / Pratik kapasite","Sabit maliyet / Katkı payı"]}', '{"index":0}', 'İktisadilik = Üretilen mal ya da hizmetin **satış tutarı / üretim maliyetleri tutarı**. Tasarruf ilkesini, yani en düşük maliyetle üretmeyi ölçer.', 1, 'Sınav özeti, 3. başlık · İktisadilik (ekonomiklik)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-iktisadilik-hesap', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Bir işletmenin yıllık satış tutarı 900.000 TL, üretim maliyetleri 600.000 TL''dir. İktisadilik oranı kaçtır?', '{"choices":["1,5","0,67","300.000","1,2","2,5"]}', '{"index":0}', 'İktisadilik = 900.000 / 600.000 = **1,5**. Oran 1''den büyük olduğu için üretim iktisadidir. 0,67 ters oran, 300.000 ise farktır.', 2, 'Sınav özeti, 3. başlık · İktisadilik (ekonomiklik)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-iktisadilik-bir', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'İktisadilik oranının hangi değeri alması istenir?', '{"choices":["1''den büyük","Tam olarak 0","1''den küçük","Negatif","Tam olarak 1"]}', '{"index":0}', 'Satış tutarı maliyeti aşmalıdır; bu yüzden iktisadilik oranının **1''den büyük** olması istenir. 1''in altı, maliyetin satışları aştığını gösterir.', 1, 'Sınav özeti, 3. başlık · İktisadilik (ekonomiklik)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-iktisadilik-ilke', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Üretim faaliyetlerinin en düşük maliyetle, tasarruf ilkesiyle gerçekleştirilmesi hangi kavramla anlatılır?', '{"choices":["İktisadilik","Verimlilik","Rantabilite","Kapasite kullanımı","Başabaş"]}', '{"index":0}', '**İktisadilik (ekonomiklik)**, en düşük maliyetle (tasarruf ilkesiyle) üretimi ifade eder.', 1, 'Sınav özeti, 3. başlık · İktisadilik (ekonomiklik)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-rantabilite-tanim', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Belirli bir dönemde elde edilen net kârın, o kârı elde etmek için kullanılan sermayeye oranına ne ad verilir?', '{"choices":["Rantabilite","Verimlilik","İktisadilik","Kapasite kullanım oranı","Katkı payı"]}', '{"index":0}', 'Net kârın kullanılan sermayeye oranı **kârlılık (rantabilite)** olarak adlandırılır.', 1, 'Sınav özeti, 3. başlık · Kârlılık (rantabilite)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-mali-rantabilite', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Öz sermayesi 500.000 TL olan bir işletme yıl sonunda 75.000 TL net kâr elde etmiştir. Mali rantabilite yüzde kaçtır?', '{"choices":["%15","%7,5","%20","%66","%1,5"]}', '{"index":0}', 'Mali rantabilite = Net kâr / Öz sermaye = 75.000 / 500.000 = 0,15 = **%15**.', 2, 'Sınav özeti, 3. başlık · Kârlılık (rantabilite)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-ekonomik-rantabilite', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Net kârı 60.000 TL, faiz gideri 40.000 TL olan bir işletmenin öz sermayesi 300.000 TL, yabancı sermayesi 200.000 TL''dir. Ekonomik rantabilite yüzde kaçtır?', '{"choices":["%20","%12","%33","%50","%8"]}', '{"index":0}', 'Ekonomik rantabilite = (Net kâr + Faiz giderleri) / Toplam sermaye = (60.000 + 40.000) / (300.000 + 200.000) = 100.000 / 500.000 = **%20**. %12 faizi eklemeden, %33 öz sermayeye bölerek bulunur.', 3, 'Sınav özeti, 3. başlık · Kârlılık (rantabilite)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-ekonomik-formul', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Ekonomik rantabilitenin formülü hangisidir?', '{"choices":["Faiz giderleri eklenmiş net kârın toplam sermayeye oranı","Net kârın öz sermayeye oranı","Faiz giderleri düşülmüş net kârın yabancı sermayeye oranı","Satış tutarının üretim maliyetlerine oranı","Faiz giderleri eklenmiş net kârın öz sermayeye oranı"]}', '{"index":0}', 'Ekonomik rantabilite, faiz giderleri eklenmiş net kârı **toplam sermayeye** (öz + yabancı) böler. Net kâr / Öz sermaye ise mali rantabilitedir.', 2, 'Sınav özeti, 3. başlık · Kârlılık (rantabilite)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-mali-formul', 'isletme', 'ib-u3', 3, 'mcq', 'derived', 'Öz sermaye kârlılığı olarak da bilinen mali rantabilite nasıl hesaplanır?', '{"choices":["Net kâr / Öz sermaye","Net kâr / Toplam sermaye","Faiz giderleri / Öz sermaye","Çıktı / Girdi","Öz sermaye / Net kâr"]}', '{"index":0}', 'Mali rantabilite (öz sermaye kârlılığı) = **Net kâr / Öz sermaye**.', 1, 'Sınav özeti, 3. başlık · Kârlılık (rantabilite)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u3-ilke-ayirt', 'isletme', 'ib-u3', 3, 'mcq', 'derived', '"Bu yıl aynı sayıda işçiyle geçen yıldan %10 daha fazla ürün ürettik." diyen bir yönetici hangi performans ilkesindeki gelişmeden söz etmektedir?', '{"choices":["Verimlilik","İktisadilik","Mali rantabilite","Ekonomik rantabilite","Kapasite kullanım oranı"]}', '{"index":0}', 'Aynı girdiyle (işçi sayısı) daha çok çıktı, **verimlilik** artışıdır. Para cinsinden satış/maliyet ya da kâr/sermaye oranı söz konusu değildir.', 2, 'Sınav özeti, 3. başlık · Kârlılık (rantabilite)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-acik-sistem', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'İşletmenin çevresiyle sürekli girdi-çıktı alışverişinde bulunması onun nasıl bir sistem olduğunu gösterir?', '{"choices":["Açık sistem","Kapalı sistem","Mekanik sistem","Statik sistem","Bağımsız sistem"]}', '{"index":0}', 'Özete göre işletme kapalı bir kutu değil, çevresiyle sürekli girdi-çıktı alışverişi yapan **açık bir sistemdir**.', 1, 'Sınav özeti, 4. başlık · Açık sistem olarak işletme ve çevre katmanları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-kademe-olcut', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Özette işletmenin çevresi hangi ölçütlere göre kademelendirilir?', '{"choices":["Kontrol edilebilirlik ve etkileşim yakınlığı","Çalışan sayısı ve yıllık satış hasılatı","Hukuki yapı ve kullanılan sermaye miktarı","Kâr oranı ve sektördeki pazar payı","Coğrafi uzaklık ve bölgenin nüfusu"]}', '{"index":0}', 'Çevre katmanları **kontrol edilebilirlik ve etkileşim yakınlığına** göre ayrılır: iç, yakın, uzak ve uluslararası çevre.', 2, 'Sınav özeti, 4. başlık · Açık sistem olarak işletme ve çevre katmanları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-ic-cevre', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Aşağıdakilerden hangisi işletmenin iç çevresinde yer alır?', '{"choices":["Örgüt kültürü","Tedarikçiler","Enflasyon oranı","Rakip işletmeler","Uluslararası Para Fonu"]}', '{"index":0}', 'İç çevre; işletme sahipleri ve ortaklar, yöneticiler, çalışanlar, **örgüt kültürü** ve yapısından oluşur. Tedarikçi ve rakip yakın, enflasyon uzak, IMF uluslararası çevrededir.', 1, 'Sınav özeti, 4. başlık · Açık sistem olarak işletme ve çevre katmanları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-ic-cevre-calisan', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'İşletmenin yöneticileri ve çalışanları hangi çevre katmanındadır?', '{"choices":["İç çevre","Yakın çevre","Uzak çevre","Uluslararası çevre","Makro çevre"]}', '{"index":0}', 'Sahipler, yöneticiler ve çalışanlar işletmenin **iç çevresidir**; işletmenin en çok kontrol edebildiği katmandır.', 1, 'Sınav özeti, 4. başlık · Açık sistem olarak işletme ve çevre katmanları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-musteri', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Özete göre işletmenin varlık nedeni olan yakın çevre unsuru hangisidir?', '{"choices":["Müşteriler","Tedarikçiler","Rakipler","Sendikalar","Finans kurumları"]}', '{"index":0}', 'Ürettiği mal ve hizmetleri satın alan **müşteriler** işletmenin varlık nedenidir.', 1, 'Sınav özeti, 4. başlık · Yakın (sektörel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-tedarikci', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'İşletmeye üretim için gerekli hammadde, yarı mamul, enerji ve makine sağlayan işletmelere ne ad verilir?', '{"choices":["Tedarikçiler","Müşteriler","Rakipler","Aracı kurumlar","Sendikalar"]}', '{"index":0}', 'Girdileri sağlayan işletmeler **tedarikçilerdir**; yakın (sektörel) çevrenin parçasıdırlar.', 1, 'Sınav özeti, 4. başlık · Yakın (sektörel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-finans', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Leasing ve faktoring kuruluşları işletmenin hangi yakın çevre unsuruna girer?', '{"choices":["Finans kurumları","Tedarikçiler","Rakipler","Müşteriler","Sendikalar"]}', '{"index":0}', 'Bankalar, sigorta şirketleri, finansal kiralama (leasing) ve faktoring kuruluşları işletmenin fon ihtiyacını karşılayan **finans kurumlarıdır**.', 1, 'Sınav özeti, 4. başlık · Yakın (sektörel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-rakip', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Aynı pazarda benzer mal ve hizmetleri üreterek aynı müşteri kitlesine hitap eden işletmeler hangisidir?', '{"choices":["Rakipler","Tedarikçiler","Ortak girişimler","Bağlı ortaklıklar","Bayiler"]}', '{"index":0}', 'Aynı müşteri kitlesine benzer ürünlerle hitap eden diğer işletmeler **rakiplerdir**.', 1, 'Sınav özeti, 4. başlık · Yakın (sektörel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-yakin-olmayan', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Aşağıdakilerden hangisi işletmenin yakın (sektörel) çevresinde yer almaz?', '{"choices":["Döviz kurları","Müşteriler","Tedarikçiler","İşçi sendikaları","Bankalar"]}', '{"index":0}', 'Döviz kurları milli gelir ve enflasyon gibi **uzak çevrenin** (ekonomik çevre) göstergesidir. Diğerleri işletmeyle doğrudan temas halindeki yakın çevre unsurlarıdır.', 2, 'Sınav özeti, 4. başlık · Yakın (sektörel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-isgucu', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Üniversiteler, iş kurumu ve işçi sendikaları işletmenin hangi yakın çevre unsuruyla ilgilidir?', '{"choices":["İşgücü piyasası ve sendikalar","Finans kurumları","Tedarikçiler","Müşteriler","Teknolojik çevre"]}', '{"index":0}', 'Nitelikli emek sağlayan çevre (üniversiteler, iş kurumu) ve çalışanların haklarını koruyan sendikalar **işgücü piyasası ve sendikalar** başlığındadır.', 1, 'Sınav özeti, 4. başlık · Yakın (sektörel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-uzak-tanim', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'İşletmenin tek başına kontrol edemediği ancak uyum sağlamak zorunda olduğu genel koşullar hangi çevreyi oluşturur?', '{"choices":["Uzak çevre","İç çevre","Yakın çevre","Örgüt kültürü","Sektörel çevre"]}', '{"index":0}', 'Ekonomik, politik-yasal, sosyo-kültürel, teknolojik ve doğal koşullar işletmenin **uzak (genel, makro) çevresidir**.', 1, 'Sınav özeti, 4. başlık · Uzak (genel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-ekonomik-cevre', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Faiz oranları, işsizlik oranı ve gelir dağılımı uzak çevrenin hangi boyutuna aittir?', '{"choices":["Ekonomik çevre","Politik ve yasal çevre","Sosyo-kültürel çevre","Teknolojik çevre","Doğal çevre"]}', '{"index":0}', 'Milli gelir, enflasyon, faiz, döviz kuru, işsizlik, vergi oranları ve gelir dağılımı **ekonomik çevrenin** göstergeleridir.', 1, 'Sınav özeti, 4. başlık · Uzak (genel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-demografik', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Nüfusun yaş ve cinsiyet yapısı, eğitim düzeyi ve kentleşme oranı uzak çevrenin hangi boyutundadır?', '{"choices":["Sosyo-kültürel ve demografik çevre","Ekonomik çevre","Teknolojik çevre","Politik ve yasal çevre","Doğal çevre"]}', '{"index":0}', 'Nüfusun büyüklüğü, yaş ve cinsiyet yapısı, eğitim ve kentleşme **demografik**; değer yargıları, gelenekler ve yaşam tarzı kültürel öğelerdir.', 1, 'Sınav özeti, 4. başlık · Uzak (genel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-politik', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Siyasi istikrar, hükümet politikaları ve rekabet kanunları uzak çevrenin hangi boyutundadır?', '{"choices":["Politik ve yasal çevre","Ekonomik çevre","Sosyo-kültürel çevre","Teknolojik çevre","Uluslararası çevre"]}', '{"index":0}', 'Devletin yönetim biçimi, hükümet politikaları, siyasi istikrar ve ticaret, iş, vergi ve rekabet kanunları **politik ve yasal çevredir**.', 1, 'Sınav özeti, 4. başlık · Uzak (genel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-teknolojik', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Ar-Ge faaliyetleri, üretimde otomasyon ve dijitalleşme gelişmeleri hangi çevre boyutuna girer?', '{"choices":["Teknolojik çevre","Doğal çevre","Ekonomik çevre","Yakın çevre","Politik çevre"]}', '{"index":0}', 'Yeni buluşlar, Ar-Ge, otomasyon ve dijitalleşme **teknolojik çevrenin** konusudur.', 1, 'Sınav özeti, 4. başlık · Uzak (genel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-dogal', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'İklim koşulları, doğal kaynakların bulunabilirliği ve sürdürülebilirlik düzenlemeleri hangi çevreyle ilgilidir?', '{"choices":["Doğal çevre","Teknolojik çevre","Sosyo-kültürel çevre","İç çevre","Uluslararası çevre"]}', '{"index":0}', 'İklim, doğal kaynaklar, çevre kirliliği ve sürdürülebilirlik **doğal (ekolojik) çevredir**.', 1, 'Sınav özeti, 4. başlık · Uzak (genel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-kulturel', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Toplumun değer yargıları, inançları ve yaşam tarzındaki değişim bir gıda şirketinin ürün yelpazesini değiştirmesine yol açmıştır. Bu etki hangi çevreden gelmektedir?', '{"choices":["Sosyo-kültürel çevre","Ekonomik çevre","Yakın çevre","Teknolojik çevre","İç çevre"]}', '{"index":0}', 'Değer yargıları, inançlar, gelenekler ve yaşam tarzı uzak çevrenin **sosyo-kültürel** boyutudur.', 2, 'Sınav özeti, 4. başlık · Uzak (genel) çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-imf', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'IMF ve Dünya Bankası gibi küresel finans kuruluşları işletmenin hangi çevresinde yer alır?', '{"choices":["Uluslararası çevre","Yakın çevre","İç çevre","Uzak çevrenin ekonomik boyutu","Sektörel çevre"]}', '{"index":0}', 'Çok uluslu şirketler, uluslararası hukuk ve anlaşmalar, ekonomik birlikler (AB, NAFTA) ve **küresel finans kuruluşları** (IMF, Dünya Bankası) uluslararası çevredir.', 1, 'Sınav özeti, 4. başlık · Uluslararası çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-ab', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Avrupa Birliği gibi ekonomik birlikler özette hangi çevre katmanında yer alır?', '{"choices":["Uluslararası çevre","Uzak çevre","Yakın çevre","İç çevre","Görev çevresi"]}', '{"index":0}', 'AB ve NAFTA gibi **ekonomik birlikler** uluslararası (küresel) çevrenin unsurlarıdır.', 1, 'Sınav özeti, 4. başlık · Uluslararası çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u4-eslestirme', 'isletme', 'ib-u4', 4, 'mcq', 'derived', 'Aşağıdaki çevre unsurlarından hangileri uzak (genel) çevreye aittir?

I. Enflasyon
II. Tedarikçiler
III. Kentleşme oranı
IV. Çalışanlar', '{"choices":["Yalnız I","I ve III","II ve IV","I, II ve III","II, III ve IV"],"sabit":true}', '{"index":1}', '**Enflasyon** (ekonomik çevre) ve **kentleşme oranı** (demografik çevre) uzak çevrededir. Tedarikçiler yakın, çalışanlar iç çevrededir.', 3, 'Sınav özeti, 4. başlık · Uluslararası çevre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-sanayi', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Hammadde ve yarı mamullerin fiziksel ya da kimyasal niteliklerini değiştirerek yeni bir mal üreten işletmeler hangisidir?', '{"choices":["Sanayi işletmeleri","Ticaret işletmeleri","Hizmet işletmeleri","Kamu işletmeleri","Karma işletmeler"]}', '{"index":0}', 'Otomotiv, tekstil, gıda, demir-çelik, madencilik ve inşaat gibi malın niteliğini değiştiren işletmeler **sanayi (endüstri) işletmeleridir**.', 1, 'Sınav özeti, 5. başlık · Faaliyet konusuna göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-ticaret', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Mallar üzerinde fiziksel değişiklik yapmadan onları üreticiden alıp tüketiciye ulaştıran toptancı ve perakendeciler hangi gruptadır?', '{"choices":["Ticaret işletmeleri","Sanayi işletmeleri","Hizmet işletmeleri","Üretim malı işletmeleri","Emek yoğun işletmeler"]}', '{"index":0}', '**Ticaret işletmeleri** malın şeklini değiştirmez; yer, zaman ve mülkiyet faydası yaratır.', 1, 'Sınav özeti, 5. başlık · Faaliyet konusuna göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-ticaret-fayda', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Ticaret işletmeleri hangi fayda türünü yaratmaz?', '{"choices":["Şekil faydası","Yer faydası","Zaman faydası","Mülkiyet faydası","Hiçbiri, hepsini yaratır"],"sabit":true}', '{"index":0}', 'Ticaret işletmeleri malda fiziksel değişiklik yapmadığı için **şekil faydası** yaratmaz; yer, zaman ve mülkiyet faydası yaratır.', 2, 'Sınav özeti, 5. başlık · Faaliyet konusuna göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-hizmet', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Aşağıdakilerden hangisi faaliyet konusuna göre bir hizmet işletmesidir?', '{"choices":["Sigorta şirketi","Çimento fabrikası","Toptan gıda satıcısı","Maden ocağı","İnşaat şirketi"]}', '{"index":0}', 'Bankacılık, **sigortacılık**, ulaşım, haberleşme, turizm, eğitim, sağlık ve danışmanlık soyut fayda üreten hizmet işletmeleridir. Özete göre inşaat ve madencilik sanayi işletmesidir.', 1, 'Sınav özeti, 5. başlık · Faaliyet konusuna göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-insaat', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Özete göre madencilik ve inşaat işletmeleri faaliyet konusuna göre hangi gruba girer?', '{"choices":["Sanayi işletmeleri","Hizmet işletmeleri","Ticaret işletmeleri","Karma işletmeler","Kamu işletmeleri"]}', '{"index":0}', 'Özet, madencilik ve inşaat işletmelerini **sanayi (endüstri)** işletmeleri arasında sayar.', 2, 'Sınav özeti, 5. başlık · Faaliyet konusuna göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-dayaniksiz', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Bir ya da birkaç kullanımda tükenen gıda, temizlik ürünü ve içecek gibi mallar hangi gruptadır?', '{"choices":["Dayanıksız tüketim malları","Dayanıklı tüketim malları","Sermaye malları","Ara mallar","Serbest mallar"]}', '{"index":0}', 'Bir ya da birkaç kullanımda tükenen mallar **dayanıksız tüketim mallarıdır**.', 1, 'Sınav özeti, 5. başlık · Üretilen mal türüne göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-dayanikli', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Aşağıdakilerden hangisi dayanıklı tüketim malıdır?', '{"choices":["Buzdolabı","Deterjan","Meyve suyu","Ekmek","Endüstriyel robot"]}', '{"index":0}', 'Beyaz eşya, mobilya, otomobil ve televizyon gibi uzun süre kullanılan mallar **dayanıklı tüketim malıdır**. Endüstriyel robot ise yatırım (sermaye) malıdır.', 1, 'Sınav özeti, 5. başlık · Üretilen mal türüne göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-yatirim-mali', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Makine, tezgâh ve endüstriyel robot üreten bir işletme ürettiği mal türüne göre nasıl sınıflandırılır?', '{"choices":["Üretim malı üreten işletme","Dayanıklı tüketim malı üreten işletme","Dayanıksız tüketim malı üreten işletme","Hizmet işletmesi","Ticaret işletmesi"]}', '{"index":0}', 'Başka bir malın üretiminde kullanılan makine, tezgâh, robot, hammadde ve ara malı üretenler **üretim (yatırım, sermaye) malı** üreten işletmelerdir.', 1, 'Sınav özeti, 5. başlık · Üretilen mal türüne göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-emek-yogun', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Toplam maliyetler içinde işçilik giderlerinin ağırlıkta olduğu işletmelere ne ad verilir?', '{"choices":["Emek yoğun işletme","Sermaye yoğun işletme","Teknoloji yoğun işletme","Holding","Kamu işletmesi"]}', '{"index":0}', 'İnsan gücünün ve işçilik giderlerinin payı yüksek olan işletmeler **emek yoğun** işletmelerdir.', 1, 'Sınav özeti, 5. başlık · Emek yoğun ve sermaye yoğun işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-emek-ornek', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Aşağıdakilerden hangisi emek yoğun işletmeye örnektir?', '{"choices":["Halı dokumacılığı","Petro-kimya tesisi","Demir-çelik fabrikası","Enerji santrali","Otomotiv fabrikası"]}', '{"index":0}', 'Özetteki emek yoğun örnekler **halı dokumacılığı**, tarım, geleneksel tekstil ve konaklamadır. Diğerleri sermaye (teknoloji) yoğundur.', 1, 'Sınav özeti, 5. başlık · Emek yoğun ve sermaye yoğun işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-sermaye-yogun', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Sermaye (teknoloji) yoğun işletmeler için aşağıdakilerden hangisi doğrudur?', '{"choices":["Sabit sermaye yatırımları yüksektir","İşçilik giderleri maliyetlerin çoğunu oluşturur","Otomasyon kullanımı düşüktür","Genellikle halı dokumacılığı gibi el işçiliğine dayanır","Makine ve teçhizata ihtiyaç duymaz"]}', '{"index":0}', 'Sermaye yoğun işletmelerde makine, teçhizat, otomasyon ve ileri teknoloji ağırlıktadır; **sabit sermaye yatırımları yüksektir** (petro-kimya, demir-çelik, otomotiv, enerji).', 2, 'Sınav özeti, 5. başlık · Emek yoğun ve sermaye yoğun işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-nicel', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Aşağıdakilerden hangisi işletme büyüklüğünü ölçmede kullanılan nitel (kalitatif) bir ölçüttür?', '{"choices":["Yönetimin uzmanlaşma derecesi","Çalışan sayısı","Yıllık satış hasılatı","Bilançodaki aktif toplamı","Sermaye miktarı"]}', '{"index":0}', 'Çalışan sayısı, satış hasılatı, aktif toplamı, makine parkı ve sermaye **nicel** ölçütlerdir. **Yönetimin uzmanlaşma derecesi**, pazar payı ve hukuki yapı nitel ölçütlerdir.', 2, 'Sınav özeti, 5. başlık · Büyüklük ölçütleri, KOBİ''ler ve çok uluslu işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-mikro', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Türkiye''deki KOBİ sınıflandırmasına göre 1-9 kişi çalıştıran işletme hangi ölçektedir?', '{"choices":["Mikro işletme","Küçük işletme","Orta büyüklükteki işletme","Büyük ölçekli işletme","Çok uluslu işletme"]}', '{"index":0}', '10 kişiden az (1-9) çalışanı olan işletme **mikro işletmedir**; genellikle tek kişi ya da aile işletmesidir.', 1, 'Sınav özeti, 5. başlık · Büyüklük ölçütleri, KOBİ''ler ve çok uluslu işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-kucuk', 'isletme', 'ib-u5', 5, 'mcq', 'derived', '35 kişi çalıştıran bir işletme KOBİ sınıflandırmasında hangi ölçektedir?', '{"choices":["Küçük işletme","Mikro işletme","Orta büyüklükteki işletme","Büyük ölçekli işletme","Kamu işletmesi"]}', '{"index":0}', '10-49 kişi çalıştıran işletmeler **küçük işletmedir**. 35 bu aralıktadır.', 1, 'Sınav özeti, 5. başlık · Büyüklük ölçütleri, KOBİ''ler ve çok uluslu işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-orta', 'isletme', 'ib-u5', 5, 'mcq', 'derived', '180 kişi çalıştıran bir işletme KOBİ sınıflandırmasında hangi ölçektedir?', '{"choices":["Orta büyüklükteki işletme","Küçük işletme","Büyük ölçekli işletme","Mikro işletme","Çok uluslu işletme"]}', '{"index":0}', '50-249 kişi çalıştıranlar **orta büyüklükteki işletmedir**; bu ölçekte departmanlaşma başlar ve profesyonel yönetici istihdam edilir.', 1, 'Sınav özeti, 5. başlık · Büyüklük ölçütleri, KOBİ''ler ve çok uluslu işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-buyuk', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Türkiye''deki sınıflandırmaya göre bir işletmenin büyük ölçekli sayılması için en az kaç kişi çalıştırması gerekir?', '{"choices":["250","50","100","200","500"]}', '{"index":0}', '**250 ve daha fazla** kişi çalıştıranlar büyük ölçekli işletmedir; 250''den az çalışanı olanlar KOBİ''dir.', 2, 'Sınav özeti, 5. başlık · Büyüklük ölçütleri, KOBİ''ler ve çok uluslu işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-orta-ozellik', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Bölümlere ayrılmanın (departmanlaşmanın) başladığı ve profesyonel yöneticilerin istihdam edildiği ölçek hangisidir?', '{"choices":["Orta büyüklükteki işletme","Mikro işletme","Küçük işletme","Tek kişi işletmesi","Aile işletmesi"]}', '{"index":0}', 'Özetteki tabloya göre departmanlaşma ve profesyonel yönetici **orta büyüklükteki işletmenin** (50-249 kişi) özelliğidir.', 2, 'Sınav özeti, 5. başlık · Büyüklük ölçütleri, KOBİ''ler ve çok uluslu işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-kucuk-ozellik', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Esnek üretim yapısına sahip olan, pazar koşullarına hızlı uyum sağlayan ve kararları hızlı alan ölçek özette hangisidir?', '{"choices":["Küçük işletme","Büyük ölçekli işletme","Orta büyüklükteki işletme","Çok uluslu işletme","Holding"]}', '{"index":0}', 'Esneklik ve hızlı karar alma **küçük işletmelerin** (10-49 kişi) özelliği olarak verilir.', 1, 'Sınav özeti, 5. başlık · Büyüklük ölçütleri, KOBİ''ler ve çok uluslu işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-buyuk-ozellik', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Kitle üretimi yapan, ölçek ekonomilerinden yararlanan ve Ar-Ge gücü yüksek olan işletmeler hangi ölçektedir?', '{"choices":["Büyük ölçekli işletme","Küçük işletme","Mikro işletme","Orta büyüklükteki işletme","Tek kişi işletmesi"]}', '{"index":0}', 'Kitle üretimi, ölçek ekonomileri, yüksek Ar-Ge gücü ve sermaye piyasalarına açıklık **büyük ölçekli işletmelerin** özellikleridir.', 1, 'Sınav özeti, 5. başlık · Büyüklük ölçütleri, KOBİ''ler ve çok uluslu işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-cok-uluslu', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Merkezi bir ülkede bulunup birden fazla yabancı ülkede doğrudan yatırımla şube, fabrika ya da bağlı ortaklık aracılığıyla faaliyet gösteren işletmeler hangisidir?', '{"choices":["Çok uluslu işletmeler","Karma işletmeler","Kooperatifler","Konsorsiyumlar","Kamu işletmeleri"]}', '{"index":0}', 'Ana ülkedeki merkezden birden fazla ev sahibi ülkede doğrudan yatırımla üretim ve pazarlama yapan işletmeler **çok uluslu (ulusötesi, küresel)** işletmelerdir.', 1, 'Sınav özeti, 5. başlık · Büyüklük ölçütleri, KOBİ''ler ve çok uluslu işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-kamu', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Sermayesinin yarıdan fazlası devlete, belediyelere ya da kamu tüzel kişilerine ait olan işletmeler hangisidir?', '{"choices":["Kamu işletmeleri","Özel işletmeler","Karma işletmeler","Yabancı sermayeli işletmeler","Kooperatifler"]}', '{"index":0}', 'Sermayesinin tamamı ya da **%50''den fazlası** kamuya ait olanlar **kamu işletmeleridir**.', 1, 'Sınav özeti, 5. başlık · Mülkiyet yapısına göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-karma', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Sermayesi özel sektör ve kamu kesimi tarafından ortaklaşa sağlanan işletmelere ne ad verilir?', '{"choices":["Karma işletmeler","Kamu işletmeleri","Özel işletmeler","Ortak girişimler","Çok uluslu işletmeler"]}', '{"index":0}', 'Sermayesi kamu ile özel sektörden birlikte gelen işletmeler **karma işletmelerdir**.', 1, 'Sınav özeti, 5. başlık · Mülkiyet yapısına göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-idt', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Türkiye''de sermayesinin tamamı devlete ait olup ticari esaslara göre çalışan kamu kuruluşlarına ne ad verilir?', '{"choices":["İktisadi Devlet Teşekkülü","Kamu İktisadi Kuruluşu","Karma işletme","Organize sanayi bölgesi","Kooperatif"]}', '{"index":0}', '**İDT** ticari esaslara göre çalışır; **KİK** ise tekel niteliğindeki kamusal mal ve hizmetleri kamu yararını gözeterek üretir. İkisi KİT (Kamu İktisadi Teşebbüsü) çatısındadır.', 3, 'Sınav özeti, 5. başlık · Mülkiyet yapısına göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-kik', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Tekel niteliğindeki kamusal mal ve hizmetleri kamu yararı gözeterek üreten kuruluşlar hangisidir?', '{"choices":["Kamu İktisadi Kuruluşu","İktisadi Devlet Teşekkülü","Holding","Karma işletme","Konsern"]}', '{"index":0}', 'Kamu yararını gözeterek tekel niteliğindeki mal ve hizmetleri üretenler **KİK**''tir; ticari esasla çalışanlar İDT''dir.', 3, 'Sınav özeti, 5. başlık · Mülkiyet yapısına göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-kit-cati', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'İDT ve KİK hangi çatı kavram altında toplanır?', '{"choices":["Kamu İktisadi Teşebbüsü","Küçük ve Orta Büyüklükteki İşletme","Organize Sanayi Bölgesi","Sermaye Piyasası Kurulu","Kooperatif Birliği"]}', '{"index":0}', 'İktisadi Devlet Teşekkülleri ve Kamu İktisadi Kuruluşları **KİT (Kamu İktisadi Teşebbüsü)** çatısı altında toplanır.', 2, 'Sınav özeti, 5. başlık · Mülkiyet yapısına göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-ozel', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Sermayesinin tamamı ya da çoğunluğu gerçek ya da özel hukuk tüzel kişilerine ait olan ve temel amacı kâr olan işletmeler hangisidir?', '{"choices":["Özel işletmeler","Kamu işletmeleri","Karma işletmeler","Kooperatifler","Konsorsiyumlar"]}', '{"index":0}', 'Sermayesi özel kişilere ait ve kâr amaçlı olanlar **özel işletmelerdir**.', 1, 'Sınav özeti, 5. başlık · Mülkiyet yapısına göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u5-yabanci', 'isletme', 'ib-u5', 5, 'mcq', 'derived', 'Sermayesinin tamamı ya da bir kısmı yabancı yatırımcılara ait olan ve ulusal kanunlar çerçevesinde kurulan işletmeler hangisidir?', '{"choices":["Yabancı sermayeli işletmeler","Kamu işletmeleri","Karma işletmeler","Tek kişi işletmeleri","Kooperatifler"]}', '{"index":0}', 'Bunlar **yabancı sermayeli işletmelerdir**; ulusal kanunlara göre kurulurlar.', 1, 'Sınav özeti, 5. başlık · Mülkiyet yapısına göre işletmeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-sorumluluk', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Tek kişi işletmesinin sahibi işletmenin borçlarından dolayı alacaklılara karşı nasıl sorumludur?', '{"choices":["Bütün kişisel malvarlığıyla sınırsız","Yalnızca koyduğu sermaye kadar","Hiçbir şekilde sorumlu değildir","Yalnızca işletmenin kârı kadar","Yalnızca kamu borçlarından"]}', '{"index":0}', 'Tek kişi işletmesinin sahibi kârın tamamına sahiptir ama borçlardan **bütün kişisel malvarlığıyla sınırsız** sorumludur.', 1, 'Sınav özeti, 6. başlık · Tek kişi işletmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-ozellik', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Aşağıdakilerden hangisi tek kişi işletmesinin özelliklerinden biri değildir?', '{"choices":["Kuruluş için asgari sermaye şartı aranması","Kuruluşunun ve sona erdirilmesinin kolay olması","Kararların tek başına alınması","Kârın tamamının işletme sahibine ait olması","Sahibinin tek bir gerçek kişi olması"]}', '{"index":0}', 'Tek kişi işletmesinde **sermaye alt sınırı yoktur**. Kuruluşu ve kapanışı kolaydır, kararları ve kârı sahibine aittir.', 2, 'Sınav özeti, 6. başlık · Tek kişi işletmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-uce-ayrim', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Özel işletmeler hukuki statülerine göre hangi üç gruba ayrılır?', '{"choices":["Tek kişi işletmeleri, şirketler ve kooperatifler","Mikro, küçük ve orta işletmeler","Sanayi, ticaret ve hizmet işletmeleri","Kamu, özel ve karma işletmeler","Kartel, tröst ve holding"]}', '{"index":0}', 'Hukuki yapıya göre özel işletmeler **tek kişi işletmeleri, şirketler (ortaklıklar) ve kooperatifler** olarak üçe ayrılır.', 1, 'Sınav özeti, 6. başlık · Adi şirket, şahıs şirketleri ve sermaye şirketleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-adi-sirket', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Borçlar Kanunu''na tabi olan, tüzel kişiliği bulunmayan ve ticaret unvanı kullanamayan ortaklık türü hangisidir?', '{"choices":["Adi şirket","Kolektif şirket","Limited şirket","Anonim şirket","Kooperatif"]}', '{"index":0}', '**Adi şirket** Borçlar Kanunu''na tabidir, tüzel kişiliği yoktur ve ticaret unvanı kullanamaz. Ticaret şirketlerinin hepsi tüzel kişiliğe sahiptir.', 1, 'Sınav özeti, 6. başlık · Adi şirket, şahıs şirketleri ve sermaye şirketleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-adi-sorumluluk', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Özete göre adi şirkette ortaklar şirket borçlarından nasıl sorumludur?', '{"choices":["Birinci dereceden, sınırsız ve müteselsilen","İkinci dereceden, sınırsız ve müteselsilen","Yalnızca taahhüt ettikleri sermaye kadar","Yalnızca şirketin malvarlığıyla","Hiçbir şekilde sorumlu değillerdir"]}', '{"index":0}', 'Adi şirkette ortaklar **birinci dereceden**, sınırsız ve zincirleme sorumludur; kolektif şirkette ise sorumluluk ikinci derecedendir.', 2, 'Sınav özeti, 6. başlık · Adi şirket, şahıs şirketleri ve sermaye şirketleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-dayanak', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Şahıs şirketlerinde temel dayanak nedir?', '{"choices":["Ortakların kişisel itibarı, güveni ve emeği","Şirkete getirilen sermaye payının büyüklüğü","Halka arz edilen hisse senetleri","Devletin sağladığı vergi teşvikleri","Profesyonel yönetim organlarının yapısı"]}', '{"index":0}', 'Şahıs şirketlerinde **ortakların kişisel itibarı, güveni ve emeği** ön plandadır; sermaye şirketlerinde ise getirilen sermaye payı ön plandadır.', 1, 'Sınav özeti, 6. başlık · Adi şirket, şahıs şirketleri ve sermaye şirketleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-pay-devri', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Şahıs şirketleri ile sermaye şirketlerinin pay devri açısından karşılaştırması hangisinde doğrudur?', '{"choices":["Şahıs şirketlerinde oybirliği gerektiği için zor, sermaye şirketlerinde serbest ve kolaydır","Her ikisinde de pay devri serbest ve kolaydır","Şahıs şirketlerinde kolay, sermaye şirketlerinde oybirliği gerektiği için zordur","Her ikisinde de pay devri yasaktır","Yalnızca kooperatiflerde pay devri yapılabilir"]}', '{"index":0}', 'Şahıs şirketlerinde payın devri **bütün ortakların oybirliğine** bağlıdır; sermaye şirketlerinde, özellikle A.Ş.''de hisse devri **serbesttir**.', 2, 'Sınav özeti, 6. başlık · Adi şirket, şahıs şirketleri ve sermaye şirketleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-sureklilik', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Bir ortağın ölümü ya da iflası hangi şirket grubunu sona erdirebilir?', '{"choices":["Şahıs şirketlerini","Sermaye şirketlerini","Anonim şirketleri","Limited şirketleri","Holdingleri"]}', '{"index":0}', '**Şahıs şirketlerinde** bir ortağın ölümü ya da iflası şirketi sona erdirebilir; sermaye şirketlerinde ise kurumsal süreklilik vardır.', 1, 'Sınav özeti, 6. başlık · Adi şirket, şahıs şirketleri ve sermaye şirketleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-sermaye-sorumluluk', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Sermaye şirketlerinde ortaklar şirket borçlarından nasıl sorumludur?', '{"choices":["Yalnızca taahhüt ettikleri sermaye payıyla sınırlı","Bütün kişisel malvarlıklarıyla sınırsız","Birinci dereceden ve müteselsilen","Şirket yöneticileriyle birlikte zincirleme","Yalnızca kâr payları kadar ve süresiz"]}', '{"index":0}', 'Sermaye şirketlerinde ortaklar **yalnızca taahhüt ettikleri sermaye payıyla sınırlı** sorumludur; kişisel malvarlıklarına gidilemez.', 1, 'Sınav özeti, 6. başlık · Adi şirket, şahıs şirketleri ve sermaye şirketleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-turler', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Aşağıdakilerden hangisi bir şahıs şirketidir?', '{"choices":["Kolektif şirket","Anonim şirket","Limited şirket","Sermayesi paylara bölünmüş komandit şirket","Kooperatif"]}', '{"index":0}', 'Şahıs şirketleri **kolektif** ve adi komandit şirkettir. Anonim, limited ve SPKŞ sermaye şirketidir; kooperatif ayrı bir hukuki yapıdır.', 2, 'Sınav özeti, 6. başlık · Adi şirket, şahıs şirketleri ve sermaye şirketleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-kolektif-ortak', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Kolektif şirketin ortakları kimlerden oluşabilir?', '{"choices":["Yalnızca gerçek kişiler","Yalnızca tüzel kişiler","Gerçek ve tüzel kişiler","Yalnızca kamu kuruluşları","Yalnızca yabancı yatırımcılar"]}', '{"index":0}', 'Kolektif şirket **yalnızca gerçek kişiler** arasında kurulur; tüzel kişiler ortak olamaz.', 1, 'Sınav özeti, 6. başlık · Kolektif ve komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-kolektif-sorumluluk', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Özete göre kolektif şirkette ortakların şirket borçlarından sorumluluğu nasıldır?', '{"choices":["İkinci dereceden, sınırsız ve müteselsil","Birinci dereceden ve sınırlı","Yalnızca koydukları sermaye kadar","Hiçbir sorumlulukları yoktur","Yalnızca kamu borçlarından sınırlı"]}', '{"index":0}', 'Kolektif şirkette ortakların tamamı **ikinci dereceden, sınırsız ve müteselsilen** sorumludur: alacaklı önce şirkete başvurur.', 2, 'Sınav özeti, 6. başlık · Kolektif ve komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-komandite', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Komandit şirkette sorumluluğu sınırsız olan, şirketi yöneten ve temsil eden ortak hangisidir?', '{"choices":["Komandite ortak","Komanditer ortak","Pay sahibi","Müdür","Denetçi"]}', '{"index":0}', '**Komandite ortak** sınırsız sorumludur, şirketi yönetir ve temsil eder; yalnızca gerçek kişi olabilir.', 1, 'Sınav özeti, 6. başlık · Kolektif ve komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-komanditer', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Komanditer ortak için aşağıdakilerden hangisi doğrudur?', '{"choices":["Sorumluluğu koyduğu sermayeyle sınırlıdır ve yönetime katılamaz","Sorumluluğu sınırsızdır ve şirketi temsil eder","Yalnızca gerçek kişi olabilir ve şirketi yönetir","Şirket borçlarından birinci dereceden sorumludur","Ortaklık payını oybirliği olmadan devredebilir"]}', '{"index":0}', '**Komanditer ortak** sermayesiyle sınırlı sorumludur, gerçek ya da tüzel kişi olabilir ve **yönetime katılamaz**.', 2, 'Sınav özeti, 6. başlık · Kolektif ve komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-komandite-kisi', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Komandit şirkette tüzel kişiler hangi tür ortak olabilir?', '{"choices":["Yalnızca komanditer ortak","Yalnızca komandite ortak","Hem komandite hem komanditer ortak","Hiçbir tür ortak olamaz","Yalnızca yönetici ortak"]}', '{"index":0}', 'Komandite ortak **yalnızca gerçek kişi** olabilir; tüzel kişiler ancak **komanditer** (sınırlı sorumlu) ortak olabilir.', 2, 'Sınav özeti, 6. başlık · Kolektif ve komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-kolektif-sermaye', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Kolektif şirket kurulurken asgari sermaye şartı için hangisi doğrudur?', '{"choices":["Asgari sermaye şartı yoktur","En az 50.000 TL gerekir","Sermaye paylara bölünmelidir","Sermayenin yarısı kamuya ait olmalıdır","Sermaye halka arz edilmelidir"]}', '{"index":0}', 'Özete göre kolektif şirkette **asgari sermaye şartı yoktur**.', 1, 'Sınav özeti, 6. başlık · Kolektif ve komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-as-tanim', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Sermayesi belirli ve paylara bölünmüş olan, borçlarından yalnız malvarlığıyla sorumlu şirket hangisidir?', '{"choices":["Anonim şirket","Kolektif şirket","Adi şirket","Komandit şirket","Kooperatif"]}', '{"index":0}', '**Anonim şirket**, sermayesi paylara (hisse senetlerine) bölünmüş ve borçlarından yalnız kendi malvarlığıyla sorumlu sermaye şirketidir.', 1, 'Sınav özeti, 6. başlık · Anonim, limited ve sermayesi paylara bölünmüş komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-as-organ', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Anonim şirketin zorunlu organları hangileridir?', '{"choices":["Genel kurul ve yönetim kurulu","Genel kurul ve müdürler","Yönetim kurulu ve denetim kurulu","Genel kurul, yönetim kurulu ve denetim kurulu","Müdürler kurulu ve denetçi"]}', '{"index":0}', 'A.Ş.''nin zorunlu organları **genel kurul** (karar) ve **yönetim kuruludur** (yürütme ve temsil). Müdürler limited şirkete, denetim kurulu kooperatife özgüdür.', 1, 'Sınav özeti, 6. başlık · Anonim, limited ve sermayesi paylara bölünmüş komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-ltd-ortak', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Limited şirkette ortak sayısı için hangisi doğrudur?', '{"choices":["En az 1, en fazla 50","En az 2, en fazla 20","En az 7, üst sınır yok","En az 5, en fazla 100","Yalnızca 1"]}', '{"index":0}', 'Limited şirket bir ya da daha çok gerçek ya da tüzel kişiyle kurulur; ortak sayısı **en az 1, en fazla 50**''dir.', 1, 'Sınav özeti, 6. başlık · Anonim, limited ve sermayesi paylara bölünmüş komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-ltd-yasak', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Aşağıdakilerden hangisi limited şirketin yapamayacağı faaliyetlerden biridir?', '{"choices":["Bankacılık yapmak","Ticaret unvanı kullanmak","Tüzel kişiyi ortak almak","Tek ortakla kurulmak","Genel kurul toplamak"]}', '{"index":0}', 'Limited şirketler **bankacılık ve sigortacılık yapamaz** ve halka açılamaz. Ticaret unvanı kullanabilir, tek ortakla ve tüzel kişi ortakla kurulabilir.', 2, 'Sınav özeti, 6. başlık · Anonim, limited ve sermayesi paylara bölünmüş komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-ltd-organ', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Limited şirketin zorunlu organları hangileridir?', '{"choices":["Genel kurul ve müdürler","Genel kurul ve yönetim kurulu","Yönetim kurulu ve denetim kurulu","Komandite ortaklar","Denetim kurulu ve müdürler"]}', '{"index":0}', 'Limited şirketin zorunlu organları **genel kurul ve müdürler** (müdürler kurulu) olarak verilir.', 1, 'Sınav özeti, 6. başlık · Anonim, limited ve sermayesi paylara bölünmüş komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-ltd-sorumluluk', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Limited şirket ortaklarının sorumluluğu için özetteki ifade hangisidir?', '{"choices":["Kamu borçları dışında şirket borçlarından sorumlu değildir, yalnızca esas sermaye payını öder","Şirket borçlarından bütün malvarlığıyla sınırsız sorumludur","Şirket borçlarından birinci dereceden müteselsil sorumludur","Yalnızca kamu borçlarından muaftır, diğer borçlardan sınırsız sorumludur","Ortak sayısı arttıkça sorumluluğu da sınırsız hale gelir"]}', '{"index":0}', 'Limited şirket ortakları şirket borçlarından sorumlu değildir, **kamu borçları hariç**; yalnızca taahhüt ettikleri esas sermaye payını ödemekle yükümlüdür.', 2, 'Sınav özeti, 6. başlık · Anonim, limited ve sermayesi paylara bölünmüş komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-as-tek-ortak', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Anonim şirket için aşağıdakilerden hangisi yanlıştır?', '{"choices":["En az iki ortakla kurulabilir","Halka açılabilir","Hisse senedi ve tahvil ihraç edebilir","Ortakları yalnızca taahhüt ettikleri payla sorumludur","Tüzel kişi ortak olabilir"]}', '{"index":0}', 'Özete göre A.Ş. **tek ortakla** (gerçek ya da tüzel kişi) kurulabilir; iki ortak şartı yoktur. Halka açılabilir, hisse senedi ve tahvil ihraç edebilir.', 1, 'Sınav özeti, 6. başlık · Anonim, limited ve sermayesi paylara bölünmüş komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-halka-acik', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Halka açılarak hisse senedi ve tahvil ihraç edebilen şirket türü hangisidir?', '{"choices":["Anonim şirket","Limited şirket","Kolektif şirket","Adi şirket","Tek kişi işletmesi"]}', '{"index":0}', '**Anonim şirket** halka açılabilir, hisse senedi ve tahvil ihraç edebilir; limited şirket halka açılamaz.', 1, 'Sınav özeti, 6. başlık · Anonim, limited ve sermayesi paylara bölünmüş komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-spks', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Sermayesi paylara bölünen, ortaklarından bir ya da birkaçının kolektif şirket ortağı gibi sınırsız, diğerlerinin anonim şirket pay sahibi gibi sınırlı sorumlu olduğu şirket hangisidir?', '{"choices":["Sermayesi paylara bölünmüş komandit şirket","Adi komandit şirket","Kolektif şirket","Limited şirket","Paylara bölünmüş sermayeli kolektif şirket"]}', '{"index":0}', 'Bu, sermaye şirketleri arasında sayılan **sermayesi paylara bölünmüş komandit şirkettir** (SPKŞ). Adi komandit şirketin sermayesi paylara bölünmez ve şahıs şirketidir.', 3, 'Sınav özeti, 6. başlık · Anonim, limited ve sermayesi paylara bölünmüş komandit şirket', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-kanun', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Türkiye''de kooperatifler hangi kanunla düzenlenmiştir?', '{"choices":["1163 sayılı Kooperatifler Kanunu","Türk Ticaret Kanunu","Borçlar Kanunu","İş Kanunu","Rekabet Kanunu"]}', '{"index":0}', 'Kooperatifler 24.04.1969 tarihli ve **1163 sayılı Kooperatifler Kanunu** ile düzenlenmiştir.', 2, 'Sınav özeti, 6. başlık · Kooperatifler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-ortak-sayi', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Bir kooperatif en az kaç ortakla kurulur?', '{"choices":["7","1","2","5","50"]}', '{"index":0}', 'Kooperatifler **en az 7 ortakla** kurulur.', 1, 'Sınav özeti, 6. başlık · Kooperatifler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-amac', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Kooperatiflerin temel amacı hangisidir?', '{"choices":["Ortaklarına maliyetine mal ve hizmet sunmak","Kârı en yüksek düzeye çıkarmak","Piyasada tekel kurmak","Hisse senedi ihraç ederek büyümek","Rakip işletmeleri satın almak"]}', '{"index":0}', 'Kooperatifin amacı kâr maksimizasyonu değil, karşılıklı yardım ve dayanışmayla **ortaklarına maliyetine mal ve hizmet sunmaktır**.', 1, 'Sınav özeti, 6. başlık · Kooperatifler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-organ', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Kooperatiflerin zorunlu organları hangileridir?', '{"choices":["Genel kurul, yönetim kurulu ve denetim kurulu","Genel kurul ve müdürler","Genel kurul ve yönetim kurulu","Yönetim kurulu ve komandite ortaklar","Müdürler kurulu ve denetim kurulu"]}', '{"index":0}', 'Kooperatifin üç zorunlu organı vardır: **genel kurul, yönetim kurulu ve denetim kurulu**.', 2, 'Sınav özeti, 6. başlık · Kooperatifler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u6-degisir', 'isletme', 'ib-u6', 6, 'mcq', 'derived', 'Kooperatiflerin ortaklık ve sermaye yapısı için özette hangi ifade kullanılır?', '{"choices":["Değişir ortaklı ve değişir sermayeli","Sabit ortaklı ve sabit sermayeli","Tek ortaklı ve paylara bölünmüş sermayeli","Sınırsız sorumlu ortaklı","Kamu sermayeli"]}', '{"index":0}', 'Kooperatifler tüzel kişiliğe sahip, **değişir ortaklı ve değişir sermayeli** ortaklıklardır.', 1, 'Sınav özeti, 6. başlık · Kooperatifler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-ic-buyume', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'İşletmenin dağıtılmayan kârları, sermaye artırımı ya da borçlanmayla kendi bünyesinde yeni yatırımlar yaparak kapasitesini artırmasına ne ad verilir?', '{"choices":["İç büyüme","Dış büyüme","Birleşme","Devralma","Ortak girişim"]}', '{"index":0}', 'Kendi kaynaklarıyla kendi bünyesinde büyümek **iç (organik) büyümedir**. Başka işletmelerle birleşme ya da satın alma dış büyümedir.', 1, 'Sınav özeti, 7. başlık · Büyüme, iç ve dış büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-dis-buyume', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'İşletmenin başka işletmelerle birleşmesi, onları satın alması ya da stratejik ortaklıklar kurmasıyla hızlı büyümesine ne ad verilir?', '{"choices":["Dış büyüme","İç büyüme","Yatay büyüme","Pazara nüfuz etme","Ürün farklılaştırma"]}', '{"index":0}', 'Başka işletmelerle birleşme, satın alma ya da ortaklık yoluyla büyüme **dış (inorganik) büyümedir**.', 1, 'Sınav özeti, 7. başlık · Büyüme, iç ve dış büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-inorganik', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Özete göre "organik büyüme" ve "inorganik büyüme" sırasıyla hangi büyüme şekillerinin diğer adlarıdır?', '{"choices":["İç büyüme ve dış büyüme","Dış büyüme ve iç büyüme","Yatay büyüme ve dikey büyüme","Dikey büyüme ve çapraz büyüme","Çapraz büyüme ve yatay büyüme"]}', '{"index":0}', 'İç büyüme **organik**, birleşme ve satın almalarla olan dış büyüme **inorganik** büyüme olarak da anılır.', 2, 'Sınav özeti, 7. başlık · Büyüme, iç ve dış büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-yatay-tanim', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'İşletmenin aynı sektörde ve aynı üretim aşamasında kalarak kapasitesini ve satışlarını artırmasına ne ad verilir?', '{"choices":["Yatay büyüme","Dikey büyüme","Çapraz büyüme","Geriye doğru bütünleşme","Konglomera büyüme"]}', '{"index":0}', 'Mevcut faaliyet alanında, aynı aşamada kalarak büyümek **yatay büyümedir**.', 1, 'Sınav özeti, 7. başlık · Yatay büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-nufuz', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Mevcut ürünün mevcut pazarda tutundurma ve fiyat çabalarıyla daha fazla satılması hangi yatay büyüme yoludur?', '{"choices":["Pazara nüfuz etme","Pazar geliştirme","Ürün farklılaştırma","Çapraz büyüme","İleriye doğru büyüme"]}', '{"index":0}', 'Aynı ürünü aynı pazarda daha çok satmak **pazara nüfuz etme (derinleşme)** yoludur.', 1, 'Sınav özeti, 7. başlık · Yatay büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-pazar-gelistirme', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Bir süt ürünleri şirketinin mevcut yoğurdunu ilk kez başka bir bölgede satmaya başlaması özete göre hangi yatay büyüme yoludur?', '{"choices":["Pazar geliştirme","Pazara nüfuz etme","Ürün farklılaştırma","Geriye doğru dikey büyüme","Çapraz büyüme"]}', '{"index":0}', 'Mevcut ürünü **yeni coğrafi bölgelere** ya da yeni müşteri gruplarına satmak **pazar geliştirmedir**.', 1, 'Sınav özeti, 7. başlık · Yatay büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-urun-farklilastirma', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Bir telefon üreticisinin mevcut müşterilerine aynı ürünün farklı renk ve kalitede yeni modellerini sunması hangi yatay büyüme yoludur?', '{"choices":["Ürün farklılaştırma","Pazar geliştirme","Pazara nüfuz etme","İleriye doğru dikey büyüme","Ortak girişim"]}', '{"index":0}', 'Mevcut pazara mevcut ürünün yeni modellerini ve çeşitlerini sunmak **ürün farklılaştırma (geliştirme)** yoludur.', 1, 'Sınav özeti, 7. başlık · Yatay büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-uc-yol', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Aşağıdakilerden hangisi özette yatay büyümenin üç yolundan biri değildir?', '{"choices":["Geriye doğru bütünleşme","Pazara nüfuz etme","Ürün farklılaştırma","Pazar geliştirme","Hiçbiri, hepsi yatay büyüme yoludur"],"sabit":true}', '{"index":0}', 'Yatay büyümenin üç yolu pazara nüfuz etme, ürün farklılaştırma ve pazar geliştirmedir. **Geriye doğru bütünleşme** dikey büyümedir.', 2, 'Sınav özeti, 7. başlık · Yatay büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-geriye', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Bir salça fabrikasının kendi domates tarlalarını kurması hangi büyüme türüdür?', '{"choices":["Geriye doğru dikey büyüme","İleriye doğru dikey büyüme","Yatay büyüme","Çapraz büyüme","Pazar geliştirme"]}', '{"index":0}', 'Girdiyi (hammaddeyi) tedarikçiden almak yerine kendisi üretmek **geriye doğru dikey büyümedir**.', 1, 'Sınav özeti, 7. başlık · Geriye ve ileriye doğru dikey büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-ileriye', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Bir giyim üreticisinin ürünlerini aracılara vermek yerine kendi perakende mağazalarını açması hangi büyüme türüdür?', '{"choices":["İleriye doğru dikey büyüme","Geriye doğru dikey büyüme","Yatay büyüme","Çapraz büyüme","Franchising"]}', '{"index":0}', 'Dağıtım ve satış aşamasını bünyeye katarak nihai tüketiciye doğrudan ulaşmak **ileriye doğru dikey büyümedir**.', 1, 'Sınav özeti, 7. başlık · Geriye ve ileriye doğru dikey büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-geriye-amac', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Geriye doğru dikey büyümenin temel amacı hangisidir?', '{"choices":["Hammadde tedarikini güvenceye almak ve girdi maliyetlerini düşürmek","Dağıtım kanallarını ve satış fiyatlarını kontrol etmek","Riski ilgisiz sektörlere yaymak","Mevcut ürünü yeni bölgelerde satmak","Rakiplerle fiyat anlaşması yapmak"]}', '{"index":0}', 'Geriye doğru büyüme **hammadde tedarikini güvenceye almayı ve girdi maliyetlerini düşürmeyi**, ileriye doğru büyüme ise dağıtım kanallarını kontrol etmeyi amaçlar.', 2, 'Sınav özeti, 7. başlık · Geriye ve ileriye doğru dikey büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-ileriye-amac', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'İleriye doğru dikey büyümenin temel amacı hangisidir?', '{"choices":["Dağıtım kanallarını ve satış fiyatlarını kontrol etmek","Hammadde tedarikini güvenceye almak","Girdi maliyetlerini olabildiğince düşürmek","Riski ilgisiz sektörlere yayarak dağıtmak","Ortaklarla yeni bir tüzel kişilik kurmak"]}', '{"index":0}', 'Kendi mağaza ve dağıtım ağını kurmak **dağıtım kanallarını ve satış fiyatlarını kontrol etmeyi** sağlar.', 2, 'Sınav özeti, 7. başlık · Geriye ve ileriye doğru dikey büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-tekstil', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Bir tekstil fabrikasının kendi iplik fabrikasını kurması hangi büyüme türüne örnektir?', '{"choices":["Geriye doğru dikey büyüme","İleriye doğru dikey büyüme","Pazar geliştirme","Çapraz büyüme","Stratejik ittifak"]}', '{"index":0}', 'İplik, tekstil fabrikasının girdisidir; girdiyi kendisi üretmeye başlamak **geriye doğru** dikey büyümedir.', 2, 'Sınav özeti, 7. başlık · Geriye ve ileriye doğru dikey büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-capraz-tanim', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'İşletmenin mevcut faaliyet alanından tamamen farklı ve onunla ilişkisi olmayan sektörlere girmesi hangi büyüme türüdür?', '{"choices":["Çapraz büyüme","Yatay büyüme","Dikey büyüme","Pazara nüfuz etme","Ürün farklılaştırma"]}', '{"index":0}', 'İlgisiz yeni sektörlere girmek **çapraz (çok yönlü, konglomera, çeşitlendirme)** büyümedir.', 1, 'Sınav özeti, 7. başlık · Çapraz (konglomera) büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-amac', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Çapraz büyümenin temel amacı hangisidir?', '{"choices":["Riski farklı sektörlere yayarak dağıtmak","Hammadde tedarikini güvenceye almak","Dağıtım kanallarını kontrol etmek","Aynı pazarda daha fazla satmak","Rakipler arasındaki rekabeti kaldırmak"]}', '{"index":0}', 'Çapraz büyümenin amacı **riski farklı sektörlere yayarak dağıtmak** ve kârlı yatırım fırsatlarını değerlendirmektir.', 1, 'Sınav özeti, 7. başlık · Çapraz (konglomera) büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-ornek', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Bir beyaz eşya üreticisinin bir otel zinciri satın alması ya da kurması hangi büyüme türüne örnektir?', '{"choices":["Çapraz büyüme","Geriye doğru dikey büyüme","İleriye doğru dikey büyüme","Yatay büyüme","Pazar geliştirme"]}', '{"index":0}', 'Beyaz eşya ile otelcilik arasında üretim zinciri ilişkisi yoktur; ilgisiz bir sektöre girmek **çapraz (konglomera)** büyümedir.', 2, 'Sınav özeti, 7. başlık · Çapraz (konglomera) büyüme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-merger', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'İki ya da daha fazla işletmenin hukuki ve ekonomik bağımsızlıklarını kaybederek tek bir yeni şirket çatısı altında birleşmesine ne ad verilir?', '{"choices":["Tam birleşme","Stratejik ittifak","Ortak girişim","Konsorsiyum","Lisans anlaşması"]}', '{"index":0}', 'Bağımsızlıkların kaybedilip tek bir yeni şirkette toplanılması **tam birleşmedir** (merger, yeni kuruluş).', 1, 'Sınav özeti, 7. başlık · Birleşme, devralma, ortak girişim ve stratejik ittifak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-devralma', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Güçlü bir işletmenin başka bir işletmeyi satın alarak kendi bünyesine katmasına ne ad verilir?', '{"choices":["Devralma","Ortak girişim","Franchising","Stratejik ittifak","Centilmenlik anlaşması"]}', '{"index":0}', 'Bir işletmenin diğerini satın alıp bünyesine katması **devralmadır** (acquisition, katılma).', 1, 'Sınav özeti, 7. başlık · Birleşme, devralma, ortak girişim ve stratejik ittifak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-joint-venture', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'İki bağımsız işletmenin belirli bir yatırım için sermaye ve teknolojilerini birleştirerek yeni ve ayrı tüzel kişilikli bir şirket kurmasına ne ad verilir?', '{"choices":["Ortak girişim","Stratejik ittifak","Devralma","Tam birleşme","Kartel"]}', '{"index":0}', 'Yeni ve ayrı bir tüzel kişilik kurulup risk ve kârın paylaşılması **ortak girişimdir** (joint venture).', 1, 'Sınav özeti, 7. başlık · Birleşme, devralma, ortak girişim ve stratejik ittifak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-ittifak', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Stratejik ittifakı ortak girişimden ayıran temel özellik hangisidir?', '{"choices":["Yeni bir tüzel kişilik kurulmaması","Risk ve kârın paylaşılması","Birden fazla işletmenin işbirliği yapması","Ar-Ge projelerinde kullanılabilmesi","İşletmelerin bağımsız kalması"]}', '{"index":0}', 'İkisinde de işletmeler bağımsızdır ve işbirliği yapar; ancak ortak girişimde **yeni bir tüzel kişilik kurulur**, stratejik ittifakta kurulmaz.', 2, 'Sınav özeti, 7. başlık · Birleşme, devralma, ortak girişim ve stratejik ittifak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-ittifak-tanim', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'İşletmelerin hukuki bağımsızlıklarını koruyarak ve yeni tüzel kişilik kurmadan Ar-Ge, üretim ya da pazarlamada işbirliği yapmasına ne ad verilir?', '{"choices":["Stratejik ittifak","Ortak girişim","Tröst","Tam birleşme","Devralma"]}', '{"index":0}', 'Bağımsızlığın korunduğu, yeni tüzel kişiliğin kurulmadığı işbirliği **stratejik ittifaktır**.', 1, 'Sınav özeti, 7. başlık · Birleşme, devralma, ortak girişim ve stratejik ittifak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-lisans', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Bir işletmenin patentini, ticari markasını ya da üretim tekniğini (know-how) belirli bir ücret karşılığında başka bir işletmeye kullandırmasına ne ad verilir?', '{"choices":["Lisans anlaşması","Franchising","Ortak girişim","Konsorsiyum","Holding"]}', '{"index":0}', 'Patent, marka ya da know-how''ın ücret karşılığı kullandırılması **lisans anlaşmasıdır**.', 1, 'Sınav özeti, 7. başlık · Lisans anlaşması ve franchising', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-royalty', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Lisans anlaşmasında kullanım hakkı karşılığında ödenen ücrete ne ad verilir?', '{"choices":["Royalty","Rant","Temettü","Faiz","Prim"]}', '{"index":0}', 'Lisans karşılığında ödenen bedele **royalty** denir.', 1, 'Sınav özeti, 7. başlık · Lisans anlaşması ve franchising', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-franchising', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Tanınmış bir markanın sahibi ana işletmenin, bedel karşılığında bağımsız yatırımcılara markasını, iş görme yöntemini ve kalite standartlarını kullanma hakkı vermesine ne ad verilir?', '{"choices":["Franchising","Lisans anlaşması","Stratejik ittifak","Devralma","Konsern"]}', '{"index":0}', 'Markayla birlikte **bütün işletme sisteminin** (iş yöntemi, kalite standartları) kullandırılması **franchising (imtiyaz verme)**dir. Fast-food zincirleri tipik örnektir.', 1, 'Sınav özeti, 7. başlık · Lisans anlaşması ve franchising', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u7-franchisor', 'isletme', 'ib-u7', 7, 'mcq', 'derived', 'Franchising sisteminde markayı ve işletme sistemini kullandıran ana işletmeye ne ad verilir?', '{"choices":["Franchisor","Franchisee","Lisans alan","Komanditer","Konsorsiyum lideri"]}', '{"index":0}', 'Hakkı veren ana işletme **franchisor**, hakkı satın alan bağımsız yatırımcı **franchisee**dir.', 2, 'Sınav özeti, 7. başlık · Lisans anlaşması ve franchising', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-centilmenlik-tanim', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Aynı iş kolundaki işletmelerin fiyat, bölge ya da kota konusunda yaptığı, hukuki yaptırımı olmayan ve karşılıklı güvene dayanan sözlü anlaşmalara ne ad verilir?', '{"choices":["Centilmenlik anlaşması","Kartel","Konsern","Tröst","Konsorsiyum"]}', '{"index":0}', 'Sözlü, gayriresmi ve yaptırımı olmayan anlaşmalar **centilmenlik anlaşmasıdır**. Kartel ise yazılı sözleşmeye dayanır.', 1, 'Sınav özeti, 8. başlık · Centilmenlik anlaşması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-yaptirim', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Centilmenlik anlaşmasını karteldan ayıran temel özellik hangisidir?', '{"choices":["Sözlü ve gayriresmi olup hukuki yaptırımının bulunmaması","Aynı iş kolundaki işletmeler arasında yapılması","Fiyat ve bölge konularını kapsaması","İşletmelerin hukuki kişiliklerinin sürmesi","Rekabeti azaltmaya yönelmesi"]}', '{"index":0}', 'İkisi de aynı iş kolunda fiyat, bölge ya da kota üzerine yapılabilir ve hukuki kişilik sürer. Fark, centilmenlik anlaşmasının **sözlü ve yaptırımsız**, kartelin ise **yazılı sözleşme** olmasıdır.', 2, 'Sınav özeti, 8. başlık · Centilmenlik anlaşması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-kartel-tanim', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Aynı üretim dalındaki rakip işletmelerin aralarındaki rekabeti kaldırmak ve tekel gücü kurmak için yaptıkları yazılı sözleşmelere ne ad verilir?', '{"choices":["Kartel","Centilmenlik anlaşması","Konsern","Holding","Ortak girişim"]}', '{"index":0}', 'Rekabeti kaldırıp tekel gücü kurmayı amaçlayan yazılı sözleşmeler **karteldir**; fiyat, miktar (kota) ve bölge kartelleri olabilir.', 1, 'Sınav özeti, 8. başlık · Kartel', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-yatay', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Kartel hangi işletmeler arasında kurulur?', '{"choices":["Aynı üretim dalındaki rakip işletmeler","Farklı sektörlerdeki ilgisiz işletmeler","Tedarikçi ile alıcı işletmeler","Ana şirket ile bağlı ortaklıkları","Kamu ile özel sektör işletmeleri"]}', '{"index":0}', 'Kartel **yatay** bir birliktir: aynı üretim dalındaki **rakipler** arasında kurulur.', 1, 'Sınav özeti, 8. başlık · Kartel', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-kartel-bagimsizlik', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Kartele giren işletmelerin bağımsızlığı için hangisi doğrudur?', '{"choices":["Hukuki kişilik sürer, ekonomik serbesti anlaşma konusuyla sınırlanır","Hukuki ve ekonomik bağımsızlıklarını tamamen kaybederler","Hukuki kişilikleri sona erer, ekonomik bağımsızlıkları sürer","Hukuki ve ekonomik bağımsızlıklarında hiçbir kayıp yaşamazlar","Tek bir merkezi yönetim altında toplanıp ekonomik bağımsızlığı yitirirler"]}', '{"index":0}', 'Kartelde **hukuki kişilik sürer**; ekonomik karar serbestisi ise anlaşmanın konusu (fiyat, kota, bölge) ile **sınırlanır**.', 2, 'Sınav özeti, 8. başlık · Kartel', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-turler', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Aşağıdakilerden hangisi özette sayılan kartel türlerinden biri değildir?', '{"choices":["Ar-Ge karteli","Fiyat karteli","Kota karteli","Bölge karteli","Miktar karteli"]}', '{"index":0}', 'Özet kartel türlerini **fiyat, miktar (kota) ve bölge** kartelleri olarak sayar.', 1, 'Sınav özeti, 8. başlık · Kartel', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-konsern-tanim', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Aynı ya da farklı iş kolundaki işletmelerin maliyetleri düşürmek ve teknik-finansal verimliliği artırmak için tek bir merkezi yönetim altında toplanmasına ne ad verilir?', '{"choices":["Konsern","Kartel","Tröst","Konsorsiyum","Centilmenlik anlaşması"]}', '{"index":0}', 'Rasyonalizasyon amacıyla tek merkezi yönetimde toplanma **konserndir**.', 1, 'Sınav özeti, 8. başlık · Konsern', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-kartelden-fark', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Konserni kartelden ayıran temel fark hangisidir?', '{"choices":["Amacının tekel değil üretim ve yönetim rasyonalizasyonu olması","İşletmelerin hukuki kişiliklerini kaybetmesi","Yalnızca aynı iş kolundaki işletmelerle kurulması","Sözlü ve gayriresmi, yaptırımı olmayan bir anlaşma olması","Proje süresiyle sınırlı, geçici bir iş ortaklığı olması"]}', '{"index":0}', 'Özete göre konsernin kartelden farkı, amacının **tekel kurmak değil üretim ve yönetim rasyonalizasyonu** olmasıdır. Konsernde de hukuki kişilik sürer.', 2, 'Sınav özeti, 8. başlık · Konsern', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-trost-tanim', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'İşletmelerin hem hukuki hem ekonomik bağımsızlıklarını tamamen kaybederek tek dev bir yönetim altında birleşmesi ve piyasada mutlak tekel oluşturmasına ne ad verilir?', '{"choices":["Tröst","Kartel","Holding","Konsern","Konsorsiyum"]}', '{"index":0}', 'İki bağımsızlığın da kaybedildiği ve mutlak tekelin (monopol) oluştuğu birlik **tröstür**.', 1, 'Sınav özeti, 8. başlık · Tröst', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-yasak', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Rekabeti yok ettiği için anti-tröst yasalarıyla yasaklanmış olan birlik türü hangisidir?', '{"choices":["Tröst","Konsorsiyum","Holding","Stratejik ittifak","Ortak girişim"]}', '{"index":0}', 'Mutlak tekel kuran **tröst**, rekabeti yok ettiği için anti-tröst yasalarıyla yasaklanmıştır.', 1, 'Sınav özeti, 8. başlık · Tröst', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-holding-tanim', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Kendisi doğrudan mal ya da hizmet üretmeyen, diğer şirketlerin hisse senetlerinin çoğunluğunu elinde tutarak onların yönetim ve denetimini sağlayan ana şirkete ne ad verilir?', '{"choices":["Holding","Tröst","Konsern","Kartel","Kooperatif"]}', '{"index":0}', 'Hisse çoğunluğu (%50+1 ya da kontrol payı) ile yavru şirketleri yöneten finansal çatı **holdingdir**.', 1, 'Sınav özeti, 8. başlık · Holding', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-holding-bagimsizlik', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Holdinge bağlı yavru şirketlerin bağımsızlığı için hangisi doğrudur?', '{"choices":["Tüzel kişilikleri sürer, ekonomik bağımsızlıkları yoktur","Tüzel kişilikleri sona erer, ekonomik bağımsızlıkları sürer","Hem hukuki hem ekonomik bağımsızlıkları sürer","Hem hukuki hem ekonomik bağımsızlıklarını kaybederler","Yalnızca proje süresince bağımsızlıklarını kaybederler"]}', '{"index":0}', 'Holdingde yavru şirketlerin **tüzel kişiliği sürer**, ancak onları ana şirket yönettiği için **ekonomik bağımsızlıkları yoktur**.', 2, 'Sınav özeti, 8. başlık · Holding', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-kontrol-payi', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Özete göre holding, yavru şirketleri hangi yolla kontrol eder?', '{"choices":["Hisse senetlerinin çoğunluğunu elinde bulundurarak","Onlarla sözlü fiyat anlaşması yaparak","Onların tüzel kişiliğini sona erdirerek","Onlara marka kullandırarak","Onlarla geçici iş ortaklığı kurarak"]}', '{"index":0}', 'Holding, yavru şirketlerin **hisse senetlerinin çoğunluğunu** (%50+1 ya da kontrol payı) elinde tutarak yönetimi ve denetimi sağlar.', 1, 'Sınav özeti, 8. başlık · Holding', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-konsorsiyum-tanim', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Tek bir işletmenin gücünü aşan köprü, baraj ya da tünel gibi büyük projeler için birden fazla işletmenin proje süresiyle sınırlı kurduğu geçici iş ortaklığı hangisidir?', '{"choices":["Konsorsiyum","Kartel","Tröst","Holding","Konsern"]}', '{"index":0}', 'Büyük bir proje için kurulan, **proje süresiyle sınırlı geçici** ortaklık **konsorsiyumdur**.', 1, 'Sınav özeti, 8. başlık · Konsorsiyum', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-gecici', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Konsorsiyumu diğer işletme birliklerinden ayıran temel özellik hangisidir?', '{"choices":["Proje süresiyle sınırlı ve geçici olması","Piyasada mutlak tekel kurması","İşletmelerin hukuki kişiliğini sona erdirmesi","Sözlü ve yaptırımsız olması","Hisse çoğunluğuna dayanması"]}', '{"index":0}', 'Konsorsiyum **geçicidir**: proje bitince sona erer. Üyeler hem hukuki hem ekonomik bağımsızlıklarını korur.', 2, 'Sınav özeti, 8. başlık · Konsorsiyum', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-ikisi-yok', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Aşağıdaki birliklerden hangisinde işletmeler hem hukuki hem ekonomik bağımsızlıklarını kaybeder?', '{"choices":["Tröst","Kartel","Konsern","Holding","Konsorsiyum"]}', '{"index":0}', 'Özetteki tabloda hukuki ve ekonomik bağımsızlığın ikisinin de **yok** olduğu tek birlik **tröstür**.', 1, 'Sınav özeti, 8. başlık · Birliklerde hukuki ve ekonomik bağımsızlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-ikisi-var', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Özetteki tabloya göre aşağıdaki birliklerin hangisinde hem hukuki hem ekonomik bağımsızlık korunur?', '{"choices":["Konsorsiyum","Tröst","Holding","Konsern","Kartel"]}', '{"index":0}', 'Hukuki ve ekonomik bağımsızlığın ikisinin de korunduğu birlikler **centilmenlik anlaşması** ve **konsorsiyumdur**. Konsern ve holdingde ekonomik bağımsızlık yoktur, kartelde kısıtlanır.', 2, 'Sınav özeti, 8. başlık · Birliklerde hukuki ve ekonomik bağımsızlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-hukuki-var-ekonomik-yok', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Aşağıdaki birliklerden hangilerinde işletmelerin hukuki kişiliği sürdüğü hâlde ekonomik bağımsızlıkları yoktur?

I. Konsern
II. Tröst
III. Holding
IV. Konsorsiyum', '{"choices":["Yalnız I","I ve III","II ve III","I, III ve IV","II ve IV"],"sabit":true}', '{"index":1}', 'Özetteki tabloda **konsern** ve **holding** hukuki bağımsızlık "var", ekonomik bağımsızlık "yok" olarak verilir. Tröstte ikisi de yoktur, konsorsiyumda ikisi de vardır.', 3, 'Sınav özeti, 8. başlık · Birliklerde hukuki ve ekonomik bağımsızlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u8-tekel-amac', 'isletme', 'ib-u8', 8, 'mcq', 'derived', 'Aşağıdaki birliklerden hangilerinin amacı rekabeti kaldırarak piyasada tekel gücü kurmaktır?

I. Kartel
II. Konsern
III. Tröst
IV. Konsorsiyum', '{"choices":["Yalnız I","I ve III","II ve IV","I, II ve III","III ve IV"],"sabit":true}', '{"index":1}', '**Kartel** rekabeti kaldırıp tekel gücü, **tröst** mutlak tekel kurmayı amaçlar. Konsernin amacı rasyonalizasyon, konsorsiyumunki büyük bir projeyi gerçekleştirmektir.', 2, 'Sınav özeti, 8. başlık · Birliklerde hukuki ve ekonomik bağımsızlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-kurulus-tanim', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Bir işletmenin yatırım fikri olarak doğmasından fiilen kurulup üretime geçmesine kadar geçen araştırma, planlama ve uygulama aşamalarının bütününe ne ad verilir?', '{"choices":["Kuruluş çalışmaları","Kapasite planlaması","Başabaş analizi","Dikey büyüme","Rasyonalizasyon"]}', '{"index":0}', 'Bu sürecin bütünü **kuruluş çalışmaları** (fizibilite, yapılabilirlik süreci) olarak adlandırılır.', 1, 'Sınav özeti, 9. başlık · Kuruluş sürecinin aşamaları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-sira', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Kuruluş sürecinin aşamaları hangi sırayla gerçekleşir?', '{"choices":["Yatırım fikri → Ön araştırmalar → Yatırım kararı → Uygulama → Normal üretime geçiş","Ön araştırmalar → Yatırım fikri → Uygulama → Yatırım kararı → Normal üretime geçiş","Yatırım fikri → Yatırım kararı → Ön araştırmalar → Uygulama → Normal üretime geçiş","Yatırım kararı → Yatırım fikri → Ön araştırmalar → Normal üretime geçiş → Uygulama","Yatırım fikri → Uygulama → Ön araştırmalar → Yatırım kararı → Normal üretime geçiş"]}', '{"index":0}', 'Önce **yatırım fikri** doğar, **ön araştırmalarla** (fizibilite) incelenir, olumluysa **yatırım kararı** alınır, **uygulama** yapılır ve sonunda **normal üretime** geçilir.', 2, 'Sınav özeti, 9. başlık · Kuruluş sürecinin aşamaları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-deneme-uretim', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Deneme üretimi kuruluş sürecinin hangi aşamasında yapılır?', '{"choices":["Uygulama","Yatırım fikrinin doğuşu","Ön araştırmalar","Değerlendirme ve yatırım kararı","Normal üretime geçiş"]}', '{"index":0}', 'Arazinin alınması, inşaat, makinelerin montajı, personelin işe alınması ve **deneme üretimi** **uygulama** aşamasındadır.', 1, 'Sınav özeti, 9. başlık · Kuruluş sürecinin aşamaları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-fikir', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Girişimcinin pazardaki karşılanmamış bir ihtiyacı ya da talep boşluğunu fark etmesi kuruluş sürecinin hangi aşamasıdır?', '{"choices":["Yatırım fikrinin doğuşu","Ön araştırmalar","Uygulama","Yatırım kararı","Normal üretime geçiş"]}', '{"index":0}', 'Karşılanmamış ihtiyacı, talep boşluğunu ya da teknolojik yeniliği fark etmek **yatırım fikrinin doğuşudur**.', 1, 'Sınav özeti, 9. başlık · Kuruluş sürecinin aşamaları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-ilk-adim', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Talep tahmini, pazar büyüklüğü, rakip analizi, kapasite ve kuruluş yerinin belirlendiği, fizibilitenin en kritik ve ilk adımı olan araştırma hangisidir?', '{"choices":["Ekonomik araştırma","Teknik araştırma","Finansal araştırma","Hukuki araştırma","Örgütsel araştırma"]}', '{"index":0}', 'Özete göre fizibilitenin en kritik ve ilk adımı **ekonomik (pazar) araştırmadır**.', 1, 'Sınav özeti, 9. başlık · Fizibilite: ekonomik, teknik, finansal ve hukuki araştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-teknik', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Üretim teknolojisinin seçimi, makine ve teçhizatın belirlenmesi ve fabrika bina planı fizibilitenin hangi bölümünde incelenir?', '{"choices":["Teknik araştırma","Ekonomik araştırma","Finansal araştırma","Hukuki araştırma","Pazar araştırması"]}', '{"index":0}', 'Teknoloji, makine, bina planı, iş akışı, hammadde ve enerji gereksinimi mühendislik açısından **teknik araştırmada** incelenir.', 1, 'Sınav özeti, 9. başlık · Fizibilite: ekonomik, teknik, finansal ve hukuki araştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-finansal', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Sabit sermaye ve işletme sermayesi tutarının hesaplandığı, başabaş noktasının ve net bugünkü değerin analiz edildiği araştırma hangisidir?', '{"choices":["Finansal araştırma","Teknik araştırma","Ekonomik araştırma","Hukuki araştırma","Örgütsel araştırma"]}', '{"index":0}', 'Sermaye ihtiyacı, finansman kaynakları, bütçeler, başabaş noktası ve kârlılık ölçüleri (NBD, İVO, geri ödeme süresi) **finansal araştırmanın** konusudur.', 1, 'Sınav özeti, 9. başlık · Fizibilite: ekonomik, teknik, finansal ve hukuki araştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-hukuki', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'İşletmenin hukuki statüsü, ruhsatlar, ÇED raporu ve teşvik belgeleri fizibilitenin hangi bölümünde belirlenir?', '{"choices":["Hukuki ve örgütsel araştırma","Teknik araştırma","Ekonomik araştırma","Finansal araştırma","Pazar araştırması"]}', '{"index":0}', 'Hukuki statü (A.Ş., Ltd.), izinler, ruhsatlar, ÇED raporu, teşvik belgeleri ve organizasyon şeması **hukuki (yasal) ve örgütsel araştırmadadır**.', 1, 'Sınav özeti, 9. başlık · Fizibilite: ekonomik, teknik, finansal ve hukuki araştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-sabit-isletme', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Finansal araştırmada aşağıdakilerden hangisi işletme (çalışma) sermayesine girer?', '{"choices":["Hammadde","Arazi","Fabrika binası","Makine","Teçhizat"]}', '{"index":0}', 'Arazi, bina ve makine **sabit sermayedir**; hammadde, işçilik ve nakit ise **işletme (çalışma) sermayesidir**.', 2, 'Sınav özeti, 9. başlık · Fizibilite: ekonomik, teknik, finansal ve hukuki araştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-yatirim-olcut', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Aşağıdakilerden hangisi finansal araştırmada yatırımın kârlılığını analiz etmek için kullanılan ölçütlerden biri değildir?', '{"choices":["Kapasite kullanım oranı","Net bugünkü değer","İç verim oranı","Geri ödeme süresi","Başabaş noktası"]}', '{"index":0}', 'Özet finansal araştırmada başabaş noktası, **net bugünkü değer, iç verim oranı ve geri ödeme süresini** sayar. Kapasite kullanım oranı, kurulmuş bir işletmenin fiili kullanımını ölçer.', 2, 'Sınav özeti, 9. başlık · Fizibilite: ekonomik, teknik, finansal ve hukuki araştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-kapasite-tanim', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Bir işletmenin elindeki üretim faktörleriyle belirli bir zaman diliminde gerçekleştirebileceği üretim miktarına ne ad verilir?', '{"choices":["Kapasite","Verimlilik","Başabaş noktası","Rantabilite","Katkı payı"]}', '{"index":0}', 'Belirli bir dönemde (genellikle 1 yıl) gerçekleştirilebilecek üretim miktarı **kapasitedir**.', 1, 'Sınav özeti, 9. başlık · Kapasite türleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-teorik', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Makine ve tesislerin hiç duraklamadan, yılda 365 gün 24 saat tam verimle çalışması durumunda ulaşılabilecek, pratikte imkânsız kapasite hangisidir?', '{"choices":["Teorik kapasite","Pratik kapasite","Fiili kapasite","Optimum kapasite","Atıl kapasite"]}', '{"index":0}', 'Kağıt üzerindeki en yüksek üretim miktarı **teorik (maksimum, tasarım) kapasitedir**; pratikte ulaşılamaz.', 1, 'Sınav özeti, 9. başlık · Kapasite türleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-pratik', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Teorik kapasiteden zorunlu bakım-onarım, resmi tatil, vardiya değişimi ve normal fireler düşüldükten sonra kalan kapasite hangisidir?', '{"choices":["Pratik kapasite","Fiili kapasite","Atıl kapasite","Aşırı kapasite","Teorik kapasite"]}', '{"index":0}', 'Kaçınılmaz kesintiler düşüldükten sonra normal şartlarda ulaşılabilecek en yüksek kapasite **pratik (normal) kapasitedir**.', 1, 'Sınav özeti, 9. başlık · Kapasite türleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-fiili', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'İşletmenin bir dönemde talep yetersizliği, hammadde sıkıntısı ya da grev gibi nedenlerle gerçekten ürettiği miktar hangisidir?', '{"choices":["Fiili kapasite","Pratik kapasite","Teorik kapasite","Optimum kapasite","Tasarım kapasitesi"]}', '{"index":0}', 'Gerçekte üretilen miktar **fiili (gerçekleşen, aktüel) kapasitedir**.', 1, 'Sınav özeti, 9. başlık · Kapasite türleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-asiri', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Olağanüstü talep artışında fazla mesai yapılarak ya da bakım süreleri kısaltılarak pratik kapasitenin üzerinde üretim yapılmasına ne ad verilir?', '{"choices":["Aşırı kapasite","Atıl kapasite","Optimum kapasite","Teorik kapasite","Fiili kapasite"]}', '{"index":0}', 'Fiili kapasitenin pratik kapasiteyi aştığı durum **aşırı (fazla) kapasitedir**.', 2, 'Sınav özeti, 9. başlık · Kapasite türleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-optimum', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Birim başına düşen ortalama maliyetin en düşük olduğu üretim düzeyine ne ad verilir?', '{"choices":["Optimum kapasite","Teorik kapasite","Başabaş noktası","Atıl kapasite","Aşırı kapasite"]}', '{"index":0}', 'Ortalama maliyetin (Toplam maliyet / Üretim miktarı) **en düşük** olduğu düzey **optimum kapasitedir**; normal şartlarda pratik kapasiteye karşılık gelir.', 2, 'Sınav özeti, 9. başlık · Kapasite türleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-optimum-pratik', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Özete göre optimum kapasite normal şartlarda hangi kapasiteye karşılık gelir?', '{"choices":["Pratik kapasite","Teorik kapasite","Fiili kapasite","Atıl kapasite","Aşırı kapasite"]}', '{"index":0}', 'Optimum kapasite normal şartlarda **pratik (normal) kapasiteye** karşılık gelir.', 3, 'Sınav özeti, 9. başlık · Kapasite türleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-siralama', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Talebin yetersiz olduğu bir yılda bir işletmenin kapasiteleri için hangi sıralama doğrudur?', '{"choices":["Teorik > Pratik > Fiili","Fiili > Pratik > Teorik","Pratik > Teorik > Fiili","Teorik > Fiili > Pratik","Fiili > Teorik > Pratik"]}', '{"index":0}', 'Teorik kapasite kesintisiz çalışma varsayar, pratik kapasite ondan kaçınılmaz kesintiler düşülerek bulunur. Talep yetersizse fiili üretim pratik kapasitenin de altında kalır: **Teorik > Pratik > Fiili**.', 3, 'Sınav özeti, 9. başlık · Kapasite türleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-atil-formul', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Atıl (boş) kapasite nasıl hesaplanır?', '{"choices":["Pratik kapasite − Fiili kapasite","Teorik kapasite − Pratik kapasite","Fiili kapasite − Pratik kapasite","Teorik kapasite − Fiili kapasite","Fiili kapasite / Pratik kapasite"]}', '{"index":0}', 'Atıl kapasite, pratik (normal) kapasitenin kullanılmayan kısmıdır: **Pratik kapasite − Fiili kapasite**.', 1, 'Sınav özeti, 9. başlık · Kapasite kullanım oranı ve atıl kapasite', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-kko-formul', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Kapasite kullanım oranı (KKO) nasıl hesaplanır?', '{"choices":["(Fiili kapasite / Pratik kapasite) × 100","(Pratik kapasite / Teorik kapasite) × 100","(Teorik kapasite / Fiili kapasite) × 100","(Pratik kapasite − Fiili kapasite) × 100","(Fiili kapasite / Teorik kapasite) × 100"]}', '{"index":0}', 'KKO, normal kapasitenin yüzde kaçının fiilen kullanıldığını gösterir: **(Fiili / Pratik) × 100**.', 1, 'Sınav özeti, 9. başlık · Kapasite kullanım oranı ve atıl kapasite', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-kko-hesap', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Pratik kapasitesi yılda 50.000 birim olan bir işletme bu yıl 40.000 birim üretmiştir. Kapasite kullanım oranı yüzde kaçtır?', '{"choices":["%80","%125","%20","%40","%90"]}', '{"index":0}', 'KKO = (40.000 / 50.000) × 100 = **%80**. %125 ters orandır, %20 ise atıl kapasitenin payıdır.', 2, 'Sınav özeti, 9. başlık · Kapasite kullanım oranı ve atıl kapasite', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-atil-hesap', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Teorik kapasitesi 120.000, pratik kapasitesi 100.000 birim olan bir işletme yılda 70.000 birim üretmektedir. Atıl kapasite kaç birimdir?', '{"choices":["30.000","50.000","20.000","70.000","100.000"]}', '{"index":0}', 'Atıl kapasite = Pratik − Fiili = 100.000 − 70.000 = **30.000** birim. Teorik kapasite bu hesapta kullanılmaz; 50.000 teorikten çıkarılarak bulunan yanlış sonuçtur.', 2, 'Sınav özeti, 9. başlık · Kapasite kullanım oranı ve atıl kapasite', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-kko-tersten', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Pratik kapasitesi 80.000 birim olan bir işletmenin kapasite kullanım oranı %75''tir. Bu işletmenin atıl kapasitesi kaç birimdir?', '{"choices":["20.000","60.000","75.000","5.000","40.000"]}', '{"index":0}', 'Fiili kapasite = 80.000 × 0,75 = 60.000 birim; atıl kapasite = 80.000 − 60.000 = **20.000** birim.', 3, 'Sınav özeti, 9. başlık · Kapasite kullanım oranı ve atıl kapasite', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-kko-asiri', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Kapasite kullanım oranı %110 olarak hesaplanan bir işletme için hangisi söylenebilir?', '{"choices":["Aşırı kapasiteyle çalışmaktadır","Atıl kapasitesi vardır","Teorik kapasitesine ulaşmıştır","Başabaş noktasının altındadır","Optimum kapasitede çalışmaktadır"]}', '{"index":0}', 'KKO %100''ü aşıyorsa fiili kapasite pratik kapasiteden büyüktür; bu **aşırı (fazla) kapasitedir**.', 2, 'Sınav özeti, 9. başlık · Kapasite kullanım oranı ve atıl kapasite', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-tanim', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Toplam gelirlerin toplam giderlere tam olarak eşit olduğu, işletmenin ne kâr ne zarar ettiği üretim ve satış düzeyine ne ad verilir?', '{"choices":["Başabaş noktası","Optimum kapasite","Pratik kapasite","Katkı payı","Atıl kapasite"]}', '{"index":0}', 'Kârın sıfır olduğu düzey **başabaş noktasıdır** (sıfır kâr, ölü nokta).', 1, 'Sınav özeti, 9. başlık · Başabaş noktası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-formul', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'TSM toplam sabit maliyeti, F birim satış fiyatını, BDM birim değişken maliyeti gösteriyor. Başabaş noktasındaki üretim miktarı hangi formülle bulunur?', '{"choices":["TSM / (F − BDM)","(F − BDM) / TSM","TSM × (F − BDM)","(TSM − BDM) / F","TSM / (BDM − F)"]}', '{"index":0}', 'Q(BBN) = **TSM / (F − BDM)**. Paydadaki F − BDM birim katkı payıdır.', 1, 'Sınav özeti, 9. başlık · Başabaş noktası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-hesap', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Toplam sabit maliyetleri 240.000 TL olan bir işletme ürününü 50 TL''ye satmakta, birim değişken maliyeti 30 TL''dir. Başabaş noktası kaç birimdir?', '{"choices":["12.000","4.800","8.000","3.000","6.000"]}', '{"index":0}', 'Birim katkı payı = 50 − 30 = 20 TL. Q(BBN) = 240.000 / 20 = **12.000** birim. 4.800 fiyata, 8.000 değişken maliyete bölünerek bulunan yanlış sonuçlardır.', 2, 'Sınav özeti, 9. başlık · Başabaş noktası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-katki-payi', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Birim satış fiyatı ile birim değişken maliyet arasındaki farka ne ad verilir?', '{"choices":["Birim katkı payı","Birim sabit maliyet","Ortalama maliyet","Net kâr","Rant"]}', '{"index":0}', 'Başabaş formülünün paydasındaki **F − BDM** ifadesine **birim katkı payı** denir.', 1, 'Sınav özeti, 9. başlık · Başabaş noktası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-sabit-degisken', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Aşağıdakilerden hangisi değişken maliyettir?', '{"choices":["Direkt işçilik","Kira","Amortisman","Yönetici maaşları","Sigorta primi"]}', '{"index":0}', 'Hammadde ve **direkt işçilik** üretim miktarıyla doğru orantılı arttığı için değişken maliyettir. Kira, amortisman ve yönetici maaşları üretimden bağımsız sabit maliyettir.', 2, 'Sınav özeti, 9. başlık · Başabaş noktası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-alti', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Üretim ve satış başabaş noktasının altında kalırsa işletme için ne olur?', '{"choices":["Zarar eder","Kâr eder","Ne kâr ne zarar eder","Atıl kapasitesi sıfırlanır","Optimum kapasiteye ulaşır"]}', '{"index":0}', 'Başabaş noktasının **altında** işletme zarar eder, **üstünde** kâr etmeye başlar.', 1, 'Sınav özeti, 9. başlık · Başabaş noktası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-fiyat-artis', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Sabit maliyetler ve birim değişken maliyet değişmeden birim satış fiyatı artırılırsa başabaş noktası nasıl değişir?', '{"choices":["Azalır","Artar","Değişmez","Sıfır olur","Sabit maliyete eşit olur"]}', '{"index":0}', 'Fiyat artınca birim katkı payı (F − BDM) büyür; sabit maliyet daha büyük bir sayıya bölündüğü için başabaş miktarı **azalır**.', 3, 'Sınav özeti, 9. başlık · Başabaş noktası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u9-kar-hesap', 'isletme', 'ib-u9', 9, 'mcq', 'derived', 'Sabit maliyetleri 100.000 TL, birim fiyatı 25 TL ve birim değişken maliyeti 15 TL olan bir işletme 15.000 birim satarsa kârı ne olur?', '{"choices":["50.000 TL","150.000 TL","100.000 TL","10.000 TL","Zarar eder"]}', '{"index":0}', 'Katkı payı 10 TL, başabaş 100.000 / 10 = 10.000 birim. 15.000 birimde toplam katkı 15.000 × 10 = 150.000 TL; kâr = 150.000 − 100.000 = **50.000 TL**.', 3, 'Sınav özeti, 9. başlık · Başabaş noktası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-tanim', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'İşletmenin kuruluş ve faaliyet maliyetlerinin en düşük, satış gelirleri ile uzun dönemli kârlılığının en yüksek olduğu coğrafi yere ne ad verilir?', '{"choices":["Optimal kuruluş yeri","Organize sanayi bölgesi","Serbest bölge","Optimum kapasite","Başabaş noktası"]}', '{"index":0}', 'Maliyetleri en aza, uzun dönemli kârlılığı en yükseğe çıkaran yer **optimal kuruluş yeridir**.', 1, 'Sınav özeti, 10. başlık · Optimal kuruluş yeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-stratejik', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Kuruluş yeri kararı için özette hangi niteleme yapılır?', '{"choices":["Uzun vadeli ve geri dönüşü çok maliyetli stratejik bir karardır","Kısa vadeli ve kolayca değiştirilebilen bir karardır","Yalnızca hizmet işletmeleri için önemli bir karardır","Yalnızca devletin aldığı bir karardır","Kuruluştan sonra her yıl yeniden alınan bir karardır"]}', '{"index":0}', 'Kuruluş yeri seçimi **uzun vadeli, geri dönüşü çok maliyetli stratejik** bir karardır.', 2, 'Sınav özeti, 10. başlık · Optimal kuruluş yeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-agirlik-kaybi', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Hammaddesi üretim sırasında büyük ölçüde ağırlık ya da hacim kaybeden şeker fabrikası gibi işletmeler nereye yakın kurulmalıdır?', '{"choices":["Hammadde kaynağına","Pazara","Limana","Üniversitelere","Büyük şehirlere"]}', '{"index":0}', 'Hammadde işlenirken çok ağırlık kaybediyorsa ağır hammaddeyi taşımak pahalıdır; işletme **hammadde kaynağına** yakın kurulur (demir-çelik, bakır izabe, şeker, kereste, kağıt).', 1, 'Sınav özeti, 10. başlık · Hammadde kaynağına yakınlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-bozulabilir', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Çay fabrikaları, süt ve balık işleme tesisleri hangi nedenle hammadde kaynağına yakın kurulur?', '{"choices":["Hammaddenin çabuk bozulabilir olması","Mamulün çabuk kırılabilir olması","Nitelikli işgücüne ihtiyaç duyulması","Mamulün üretimde ağırlık kazanması","Müşteriyle yüz yüze temas gerekmesi"]}', '{"index":0}', 'Hammadde (yaş çay yaprağı, çiğ süt, balık) **çabuk bozulabildiği** için tesis hammadde kaynağına yakın kurulur.', 1, 'Sınav özeti, 10. başlık · Hammadde kaynağına yakınlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-cimento', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Özete göre çimento ve tuğla fabrikalarının hammadde kaynağına yakın kurulmasının nedeni hangisidir?', '{"choices":["Hammaddeyi taşımanın mamulü taşımaktan çok daha pahalı olması","Mamulün çabuk bozulan ve kırılan bir ürün olması","Üretimde bol ve kaliteli suya ihtiyaç duyulması","Üretim için nemli bir havaya ihtiyaç duyulması","Müşteriyle sürekli yüz yüze temas gerekmesi"]}', '{"index":0}', 'Çimento ve tuğlada **hammaddenin taşıma maliyeti mamulünkinden çok daha yüksektir**; bu yüzden tesisler hammaddeye yakın kurulur.', 2, 'Sınav özeti, 10. başlık · Hammadde kaynağına yakınlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-ornek', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Aşağıdaki işletmelerden hangisinin hammadde kaynağına yakın kurulması beklenir?', '{"choices":["Demir-çelik fabrikası","Ekmek fırını","Gazlı içecek fabrikası","Banka şubesi","Alışveriş merkezi"]}', '{"index":0}', '**Demir-çelik** üretiminde hammadde büyük ölçüde ağırlık kaybeder; tesis hammaddeye yakın kurulur. Diğerleri pazara yakın kurulan işletmelerdir.', 1, 'Sınav özeti, 10. başlık · Hammadde kaynağına yakınlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-firin', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Ekmek fırınları ve pastaneler hangi nedenle pazara yakın kurulur?', '{"choices":["Mamulün çabuk bozulabilir olması","Hammaddenin çabuk bozulabilir olması","Hammaddenin ağırlık kaybetmesi","Bol enerji gerektirmesi","Devlet teşviklerinden yararlanmak"]}', '{"index":0}', '**Mamul** (ekmek, pasta, günlük süt) çabuk bozulduğu ya da kırıldığı için işletme tüketiciye, yani **pazara** yakın kurulur.', 1, 'Sınav özeti, 10. başlık · Pazara yakınlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-mesrubat', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Meşrubat ve bira fabrikalarının pazara yakın kurulmasının nedeni hangisidir?', '{"choices":["Üretimde su katıldığı için mamulün ağırlık ve hacminin artması","Hammaddenin üretim sırasında ağırlık kaybetmesi","Hammaddenin çabuk bozulması","Çok yüksek miktarda elektrik tüketmeleri","Nitelikli mühendislere ihtiyaç duymaları"]}', '{"index":0}', 'Üretimde **su katıldığı** için mamul hammaddeden ağırdır; mamulü taşımak daha pahalı olduğundan tesis pazara yakın kurulur.', 2, 'Sınav özeti, 10. başlık · Pazara yakınlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-hizmet', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Bankalar, oteller ve hastaneler kuruluş yeri seçiminde hangi faktörü öne çıkarır?', '{"choices":["Pazara yakınlık","Hammadde kaynağına yakınlık","Enerji kaynağına yakınlık","Su kaynağına yakınlık","Nemli iklim"]}', '{"index":0}', 'Müşteriyle **yüz yüze temas** gerektiren hizmet ve perakende işletmeleri **pazara (tüketim merkezlerine)** yakın kurulur.', 1, 'Sınav özeti, 10. başlık · Pazara yakınlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-karsilastirma', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Aşağıdaki işletmelerden hangilerinin pazara yakın kurulması beklenir?

I. Gazlı içecek fabrikası
II. Bakır izabe tesisi
III. Pastane
IV. Kağıt fabrikası', '{"choices":["Yalnız III","I ve III","II ve IV","I, III ve IV","II, III ve IV"],"sabit":true}', '{"index":1}', '**Gazlı içecek** üretimde ağırlık kazanır, **pastane** çabuk bozulan mamul üretir; ikisi pazara yakın kurulur. Bakır izabe ve kağıt fabrikası hammaddeye yakın kurulur.', 3, 'Sınav özeti, 10. başlık · Pazara yakınlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-denizyolu', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Özete göre en ucuz taşıma türü hangisidir?', '{"choices":["Denizyolu","Demiryolu","Karayolu","Havayolu","Boru hattı"]}', '{"index":0}', 'Özet, **denizyolunu** en ucuz taşıma türü olarak verir; limanlara ve kavşak noktalarına yakınlık tedariki ve dağıtımı ucuzlatır.', 1, 'Sınav özeti, 10. başlık · Ulaştırma, enerji, işgücü, iklim ve devlet teşvikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-enerji', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Alüminyum ve seramik gibi çok yüksek miktarda elektrik ya da doğalgaz tüketen işletmeler kuruluş yeri seçiminde hangi faktörü öne çıkarır?', '{"choices":["Enerji kaynaklarına yakınlık","Pazara yakınlık","Ucuz işgücü","Nemli iklim","Üniversitelere yakınlık"]}', '{"index":0}', 'Yüksek enerji tüketen işletmeler (alüminyum, demir-çelik, seramik) **enerji kaynaklarına** yakın kurulur.', 1, 'Sınav özeti, 10. başlık · Ulaştırma, enerji, işgücü, iklim ve devlet teşvikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-su', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Soğutma ya da yıkama için bol ve kaliteli suya ihtiyaç duyan işletmelere hangisi örnektir?', '{"choices":["Tekstil boyama tesisi","Ekmek fırını","Banka","Alışveriş merkezi","Halı dokuma atölyesi"]}', '{"index":0}', 'Kağıt, **tekstil boyama**, kimya ve nükleer ya da termik santraller bol suya ihtiyaç duyduğu için su kaynaklarına yakın kurulur.', 1, 'Sınav özeti, 10. başlık · Ulaştırma, enerji, işgücü, iklim ve devlet teşvikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-isgucu', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'İleri teknoloji kullanan bir yazılım ve elektronik işletmesi işgücü faktörü açısından nereyi tercih eder?', '{"choices":["Nitelikli işgücünün yoğun olduğu büyük şehirleri","Ucuz ve bol işgücünün bulunduğu kırsal bölgeleri","Hammadde kaynaklarının bulunduğu bölgeleri","Nemli iklime sahip kıyı bölgelerini","Enerji santrallerine yakın sanayi bölgelerini"]}', '{"index":0}', 'Emek yoğun işletmeler ucuz ve bol işgücünü, **ileri teknoloji** kullananlar ise **nitelikli işgücünün** yoğun olduğu büyük şehirleri ve üniversite çevrelerini tercih eder.', 2, 'Sınav özeti, 10. başlık · Ulaştırma, enerji, işgücü, iklim ve devlet teşvikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-iklim', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Özete göre pamuklu dokuma işletmeleri iklim açısından hangi koşulu arar?', '{"choices":["Nemli hava","Kuru hava","Soğuk iklim","Yüksek rakım","Bol güneş"]}', '{"index":0}', 'Özetteki örneğe göre pamuklu dokuma için **nemli hava** gerekir.', 1, 'Sınav özeti, 10. başlık · Ulaştırma, enerji, işgücü, iklim ve devlet teşvikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-tesvik', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Vergi indirimi, ucuz arsa tahsisi, gümrük muafiyeti ve hazır altyapı sunan organize sanayi bölgeleri kuruluş yeri seçiminde hangi faktörün kapsamındadır?', '{"choices":["Devlet teşvikleri","Pazara yakınlık","Hammaddeye yakınlık","İklim ve doğa koşulları","Ulaştırma olanakları"]}', '{"index":0}', 'Bölgeler arası gelişmişlik farkını azaltmak için sunulan bu imkânlar **devlet teşvikleri ve organize sanayi bölgeleri (OSB)** faktörüdür.', 1, 'Sınav özeti, 10. başlık · Ulaştırma, enerji, işgücü, iklim ve devlet teşvikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-tesvik-amac', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Devletin kuruluş yeri teşvikleri vermesinin temel amacı özete göre hangisidir?', '{"choices":["Bölgeler arası gelişmişlik farklarını azaltmak","Büyük şehirlerdeki nüfusu artırmak","İşletmelerin hammadde maliyetini artırmak","Yabancı işletmelerin girişini engellemek","İşletmeleri pazara yaklaştırmak"]}', '{"index":0}', 'Teşviklerin amacı **bölgeler arası gelişmişlik farklarını azaltmaktır**.', 2, 'Sınav özeti, 10. başlık · Ulaştırma, enerji, işgücü, iklim ve devlet teşvikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ib-u10-emek-yogun', 'isletme', 'ib-u10', 10, 'mcq', 'derived', 'Emek yoğun bir hazır giyim atölyesi işgücü açısından nasıl bir bölgeyi tercih eder?', '{"choices":["Ucuz ve bol işgücünün bulunduğu bölgeyi","Nitelikli mühendislerin yoğun olduğu bölgeyi","Enerji santrallerine yakın bölgeyi","Hammadde kaynağına yakın bölgeyi","Limanlara yakın bölgeyi"]}', '{"index":0}', 'Emek yoğun işletmeler maliyetlerinin çoğu işçilik olduğu için **ucuz ve bol işgücünün** bulunduğu bölgeleri tercih eder.', 1, 'Sınav özeti, 10. başlık · Ulaştırma, enerji, işgücü, iklim ve devlet teşvikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-ihtiyac', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-ihtiyac-tanim';
UPDATE questions SET kavram = 'u1-ihtiyac', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-itici-guc';
UPDATE questions SET kavram = 'u1-ihtiyac', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-ihtiyac-sonuc';
UPDATE questions SET kavram = 'u1-maslow', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-maslow-en-alt';
UPDATE questions SET kavram = 'u1-maslow', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-maslow-en-ust';
UPDATE questions SET kavram = 'u1-maslow', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-maslow-sira';
UPDATE questions SET kavram = 'u1-maslow', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-maslow-guvenlik';
UPDATE questions SET kavram = 'u1-maslow', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-maslow-sosyal';
UPDATE questions SET kavram = 'u1-maslow', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-maslow-saygi';
UPDATE questions SET kavram = 'u1-maslow', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-maslow-ilke';
UPDATE questions SET kavram = 'u1-maslow', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-maslow-yil';
UPDATE questions SET kavram = 'u1-ozellik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-sonsuzluk';
UPDATE questions SET kavram = 'u1-ozellik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-ikame';
UPDATE questions SET kavram = 'u1-ozellik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-marjinal';
UPDATE questions SET kavram = 'u1-ozellik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-tekrarlanma';
UPDATE questions SET kavram = 'u1-ozellik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-siddet';
UPDATE questions SET kavram = 'u1-mal-hizmet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-fayda';
UPDATE questions SET kavram = 'u1-mal-hizmet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-serbest-mal';
UPDATE questions SET kavram = 'u1-mal-hizmet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-ekonomik-mal';
UPDATE questions SET kavram = 'u1-mal-hizmet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-sermaye-mali';
UPDATE questions SET kavram = 'u1-mal-hizmet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-hizmet-ozellik';
UPDATE questions SET kavram = 'u1-mal-hizmet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-mal-ozellik';
UPDATE questions SET kavram = 'u1-mal-hizmet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u1-hizmet-ornek';
UPDATE questions SET kavram = 'u2-ekonomi-uretim', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-ekonomi-tanim';
UPDATE questions SET kavram = 'u2-ekonomi-uretim', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-uretim-tanim';
UPDATE questions SET kavram = 'u2-ekonomi-uretim', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-fayda-turleri';
UPDATE questions SET kavram = 'u2-faktor', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-faktorler';
UPDATE questions SET kavram = 'u2-faktor', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-emek-getiri';
UPDATE questions SET kavram = 'u2-faktor', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-sermaye-getiri';
UPDATE questions SET kavram = 'u2-faktor', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-doga-getiri';
UPDATE questions SET kavram = 'u2-faktor', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-girisimci-getiri';
UPDATE questions SET kavram = 'u2-faktor', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-emek-tanim';
UPDATE questions SET kavram = 'u2-faktor', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-mali-sermaye';
UPDATE questions SET kavram = 'u2-faktor', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-faktor-eslesme';
UPDATE questions SET kavram = 'u2-isletme-girisim', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-isletme-tanim';
UPDATE questions SET kavram = 'u2-isletme-girisim', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-girisim-isletme';
UPDATE questions SET kavram = 'u2-isletme-girisim', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-yonetici';
UPDATE questions SET kavram = 'u2-isletme-girisim', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-girisimci-risk';
UPDATE questions SET kavram = 'u2-disiplin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-davranis';
UPDATE questions SET kavram = 'u2-disiplin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-istatistik';
UPDATE questions SET kavram = 'u2-disiplin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-hukuk';
UPDATE questions SET kavram = 'u2-disiplin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-muhendislik';
UPDATE questions SET kavram = 'u2-disiplin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-iktisat';
UPDATE questions SET kavram = 'u2-disiplin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u2-disiplinlerarasi';
UPDATE questions SET kavram = 'u3-amac', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-kar-tanim';
UPDATE questions SET kavram = 'u3-amac', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-uzun-donem';
UPDATE questions SET kavram = 'u3-amac', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-kar-islev';
UPDATE questions SET kavram = 'u3-amac', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-sosyal-sorumluluk';
UPDATE questions SET kavram = 'u3-amac', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-yasama';
UPDATE questions SET kavram = 'u3-amac', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-ozel-guduu';
UPDATE questions SET kavram = 'u3-verimlilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-verimlilik-formul';
UPDATE questions SET kavram = 'u3-verimlilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-verimlilik-hesap';
UPDATE questions SET kavram = 'u3-verimlilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-verimlilik-artis';
UPDATE questions SET kavram = 'u3-verimlilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-verimlilik-karsilastir';
UPDATE questions SET kavram = 'u3-verimlilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-verimlilik-tur';
UPDATE questions SET kavram = 'u3-iktisadilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-iktisadilik-formul';
UPDATE questions SET kavram = 'u3-iktisadilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-iktisadilik-hesap';
UPDATE questions SET kavram = 'u3-iktisadilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-iktisadilik-bir';
UPDATE questions SET kavram = 'u3-iktisadilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-iktisadilik-ilke';
UPDATE questions SET kavram = 'u3-karlilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-rantabilite-tanim';
UPDATE questions SET kavram = 'u3-karlilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-mali-rantabilite';
UPDATE questions SET kavram = 'u3-karlilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-ekonomik-rantabilite';
UPDATE questions SET kavram = 'u3-karlilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-ekonomik-formul';
UPDATE questions SET kavram = 'u3-karlilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-mali-formul';
UPDATE questions SET kavram = 'u3-karlilik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u3-ilke-ayirt';
UPDATE questions SET kavram = 'u4-katman', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-acik-sistem';
UPDATE questions SET kavram = 'u4-katman', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-kademe-olcut';
UPDATE questions SET kavram = 'u4-katman', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-ic-cevre';
UPDATE questions SET kavram = 'u4-katman', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-ic-cevre-calisan';
UPDATE questions SET kavram = 'u4-yakin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-musteri';
UPDATE questions SET kavram = 'u4-yakin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-tedarikci';
UPDATE questions SET kavram = 'u4-yakin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-finans';
UPDATE questions SET kavram = 'u4-yakin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-rakip';
UPDATE questions SET kavram = 'u4-yakin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-yakin-olmayan';
UPDATE questions SET kavram = 'u4-yakin', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-isgucu';
UPDATE questions SET kavram = 'u4-uzak', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-uzak-tanim';
UPDATE questions SET kavram = 'u4-uzak', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-ekonomik-cevre';
UPDATE questions SET kavram = 'u4-uzak', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-demografik';
UPDATE questions SET kavram = 'u4-uzak', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-politik';
UPDATE questions SET kavram = 'u4-uzak', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-teknolojik';
UPDATE questions SET kavram = 'u4-uzak', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-dogal';
UPDATE questions SET kavram = 'u4-uzak', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-kulturel';
UPDATE questions SET kavram = 'u4-uluslararasi', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-imf';
UPDATE questions SET kavram = 'u4-uluslararasi', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-ab';
UPDATE questions SET kavram = 'u4-uluslararasi', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u4-eslestirme';
UPDATE questions SET kavram = 'u5-faaliyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-sanayi';
UPDATE questions SET kavram = 'u5-faaliyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-ticaret';
UPDATE questions SET kavram = 'u5-faaliyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-ticaret-fayda';
UPDATE questions SET kavram = 'u5-faaliyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-hizmet';
UPDATE questions SET kavram = 'u5-faaliyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-insaat';
UPDATE questions SET kavram = 'u5-mal-turu', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-dayaniksiz';
UPDATE questions SET kavram = 'u5-mal-turu', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-dayanikli';
UPDATE questions SET kavram = 'u5-mal-turu', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-yatirim-mali';
UPDATE questions SET kavram = 'u5-yogunluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-emek-yogun';
UPDATE questions SET kavram = 'u5-yogunluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-emek-ornek';
UPDATE questions SET kavram = 'u5-yogunluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-sermaye-yogun';
UPDATE questions SET kavram = 'u5-buyukluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-nicel';
UPDATE questions SET kavram = 'u5-buyukluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-mikro';
UPDATE questions SET kavram = 'u5-buyukluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-kucuk';
UPDATE questions SET kavram = 'u5-buyukluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-orta';
UPDATE questions SET kavram = 'u5-buyukluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-buyuk';
UPDATE questions SET kavram = 'u5-buyukluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-orta-ozellik';
UPDATE questions SET kavram = 'u5-buyukluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-kucuk-ozellik';
UPDATE questions SET kavram = 'u5-buyukluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-buyuk-ozellik';
UPDATE questions SET kavram = 'u5-buyukluk', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-cok-uluslu';
UPDATE questions SET kavram = 'u5-mulkiyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-kamu';
UPDATE questions SET kavram = 'u5-mulkiyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-karma';
UPDATE questions SET kavram = 'u5-mulkiyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-idt';
UPDATE questions SET kavram = 'u5-mulkiyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-kik';
UPDATE questions SET kavram = 'u5-mulkiyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-kit-cati';
UPDATE questions SET kavram = 'u5-mulkiyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-ozel';
UPDATE questions SET kavram = 'u5-mulkiyet', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u5-yabanci';
UPDATE questions SET kavram = 'u6-tek-kisi', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-sorumluluk';
UPDATE questions SET kavram = 'u6-tek-kisi', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-ozellik';
UPDATE questions SET kavram = 'u6-sahis-sermaye', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-uce-ayrim';
UPDATE questions SET kavram = 'u6-sahis-sermaye', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-adi-sirket';
UPDATE questions SET kavram = 'u6-sahis-sermaye', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-adi-sorumluluk';
UPDATE questions SET kavram = 'u6-sahis-sermaye', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-dayanak';
UPDATE questions SET kavram = 'u6-sahis-sermaye', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-pay-devri';
UPDATE questions SET kavram = 'u6-sahis-sermaye', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-sureklilik';
UPDATE questions SET kavram = 'u6-sahis-sermaye', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-sermaye-sorumluluk';
UPDATE questions SET kavram = 'u6-sahis-sermaye', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-turler';
UPDATE questions SET kavram = 'u6-kolektif-komandit', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-kolektif-ortak';
UPDATE questions SET kavram = 'u6-kolektif-komandit', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-kolektif-sorumluluk';
UPDATE questions SET kavram = 'u6-kolektif-komandit', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-komandite';
UPDATE questions SET kavram = 'u6-kolektif-komandit', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-komanditer';
UPDATE questions SET kavram = 'u6-kolektif-komandit', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-komandite-kisi';
UPDATE questions SET kavram = 'u6-kolektif-komandit', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-kolektif-sermaye';
UPDATE questions SET kavram = 'u6-as-ltd', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-as-tanim';
UPDATE questions SET kavram = 'u6-as-ltd', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-as-organ';
UPDATE questions SET kavram = 'u6-as-ltd', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-ltd-ortak';
UPDATE questions SET kavram = 'u6-as-ltd', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-ltd-yasak';
UPDATE questions SET kavram = 'u6-as-ltd', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-ltd-organ';
UPDATE questions SET kavram = 'u6-as-ltd', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-ltd-sorumluluk';
UPDATE questions SET kavram = 'u6-as-ltd', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-as-tek-ortak';
UPDATE questions SET kavram = 'u6-as-ltd', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-halka-acik';
UPDATE questions SET kavram = 'u6-as-ltd', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-spks';
UPDATE questions SET kavram = 'u6-kooperatif', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-kanun';
UPDATE questions SET kavram = 'u6-kooperatif', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-ortak-sayi';
UPDATE questions SET kavram = 'u6-kooperatif', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-amac';
UPDATE questions SET kavram = 'u6-kooperatif', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-organ';
UPDATE questions SET kavram = 'u6-kooperatif', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u6-degisir';
UPDATE questions SET kavram = 'u7-ic-dis', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-ic-buyume';
UPDATE questions SET kavram = 'u7-ic-dis', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-dis-buyume';
UPDATE questions SET kavram = 'u7-ic-dis', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-inorganik';
UPDATE questions SET kavram = 'u7-yatay', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-yatay-tanim';
UPDATE questions SET kavram = 'u7-yatay', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-nufuz';
UPDATE questions SET kavram = 'u7-yatay', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-pazar-gelistirme';
UPDATE questions SET kavram = 'u7-yatay', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-urun-farklilastirma';
UPDATE questions SET kavram = 'u7-yatay', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-uc-yol';
UPDATE questions SET kavram = 'u7-dikey', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-geriye';
UPDATE questions SET kavram = 'u7-dikey', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-ileriye';
UPDATE questions SET kavram = 'u7-dikey', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-geriye-amac';
UPDATE questions SET kavram = 'u7-dikey', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-ileriye-amac';
UPDATE questions SET kavram = 'u7-dikey', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-tekstil';
UPDATE questions SET kavram = 'u7-capraz', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-capraz-tanim';
UPDATE questions SET kavram = 'u7-capraz', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-amac';
UPDATE questions SET kavram = 'u7-capraz', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-ornek';
UPDATE questions SET kavram = 'u7-birlesme', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-merger';
UPDATE questions SET kavram = 'u7-birlesme', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-devralma';
UPDATE questions SET kavram = 'u7-birlesme', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-joint-venture';
UPDATE questions SET kavram = 'u7-birlesme', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-ittifak';
UPDATE questions SET kavram = 'u7-birlesme', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-ittifak-tanim';
UPDATE questions SET kavram = 'u7-lisans', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-lisans';
UPDATE questions SET kavram = 'u7-lisans', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-royalty';
UPDATE questions SET kavram = 'u7-lisans', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-franchising';
UPDATE questions SET kavram = 'u7-lisans', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u7-franchisor';
UPDATE questions SET kavram = 'u8-centilmenlik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-centilmenlik-tanim';
UPDATE questions SET kavram = 'u8-centilmenlik', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-yaptirim';
UPDATE questions SET kavram = 'u8-kartel', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-kartel-tanim';
UPDATE questions SET kavram = 'u8-kartel', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-yatay';
UPDATE questions SET kavram = 'u8-kartel', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-kartel-bagimsizlik';
UPDATE questions SET kavram = 'u8-kartel', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-turler';
UPDATE questions SET kavram = 'u8-konsern', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-konsern-tanim';
UPDATE questions SET kavram = 'u8-konsern', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-kartelden-fark';
UPDATE questions SET kavram = 'u8-trost', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-trost-tanim';
UPDATE questions SET kavram = 'u8-trost', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-yasak';
UPDATE questions SET kavram = 'u8-holding', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-holding-tanim';
UPDATE questions SET kavram = 'u8-holding', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-holding-bagimsizlik';
UPDATE questions SET kavram = 'u8-holding', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-kontrol-payi';
UPDATE questions SET kavram = 'u8-konsorsiyum', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-konsorsiyum-tanim';
UPDATE questions SET kavram = 'u8-konsorsiyum', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-gecici';
UPDATE questions SET kavram = 'u8-karsilastirma', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-ikisi-yok';
UPDATE questions SET kavram = 'u8-karsilastirma', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-ikisi-var';
UPDATE questions SET kavram = 'u8-karsilastirma', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-hukuki-var-ekonomik-yok';
UPDATE questions SET kavram = 'u8-karsilastirma', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u8-tekel-amac';
UPDATE questions SET kavram = 'u9-asamalar', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-kurulus-tanim';
UPDATE questions SET kavram = 'u9-asamalar', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-sira';
UPDATE questions SET kavram = 'u9-asamalar', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-deneme-uretim';
UPDATE questions SET kavram = 'u9-asamalar', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-fikir';
UPDATE questions SET kavram = 'u9-fizibilite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-ilk-adim';
UPDATE questions SET kavram = 'u9-fizibilite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-teknik';
UPDATE questions SET kavram = 'u9-fizibilite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-finansal';
UPDATE questions SET kavram = 'u9-fizibilite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-hukuki';
UPDATE questions SET kavram = 'u9-fizibilite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-sabit-isletme';
UPDATE questions SET kavram = 'u9-fizibilite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-yatirim-olcut';
UPDATE questions SET kavram = 'u9-kapasite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-kapasite-tanim';
UPDATE questions SET kavram = 'u9-kapasite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-teorik';
UPDATE questions SET kavram = 'u9-kapasite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-pratik';
UPDATE questions SET kavram = 'u9-kapasite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-fiili';
UPDATE questions SET kavram = 'u9-kapasite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-asiri';
UPDATE questions SET kavram = 'u9-kapasite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-optimum';
UPDATE questions SET kavram = 'u9-kapasite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-optimum-pratik';
UPDATE questions SET kavram = 'u9-kapasite', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-siralama';
UPDATE questions SET kavram = 'u9-kko', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-atil-formul';
UPDATE questions SET kavram = 'u9-kko', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-kko-formul';
UPDATE questions SET kavram = 'u9-kko', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-kko-hesap';
UPDATE questions SET kavram = 'u9-kko', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-atil-hesap';
UPDATE questions SET kavram = 'u9-kko', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-kko-tersten';
UPDATE questions SET kavram = 'u9-kko', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-kko-asiri';
UPDATE questions SET kavram = 'u9-bbn', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-tanim';
UPDATE questions SET kavram = 'u9-bbn', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-formul';
UPDATE questions SET kavram = 'u9-bbn', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-hesap';
UPDATE questions SET kavram = 'u9-bbn', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-katki-payi';
UPDATE questions SET kavram = 'u9-bbn', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-sabit-degisken';
UPDATE questions SET kavram = 'u9-bbn', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-alti';
UPDATE questions SET kavram = 'u9-bbn', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-fiyat-artis';
UPDATE questions SET kavram = 'u9-bbn', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u9-kar-hesap';
UPDATE questions SET kavram = 'u10-optimal', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-tanim';
UPDATE questions SET kavram = 'u10-optimal', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-stratejik';
UPDATE questions SET kavram = 'u10-hammadde', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-agirlik-kaybi';
UPDATE questions SET kavram = 'u10-hammadde', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-bozulabilir';
UPDATE questions SET kavram = 'u10-hammadde', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-cimento';
UPDATE questions SET kavram = 'u10-hammadde', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-ornek';
UPDATE questions SET kavram = 'u10-pazar', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-firin';
UPDATE questions SET kavram = 'u10-pazar', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-mesrubat';
UPDATE questions SET kavram = 'u10-pazar', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-hizmet';
UPDATE questions SET kavram = 'u10-pazar', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-karsilastirma';
UPDATE questions SET kavram = 'u10-diger', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-denizyolu';
UPDATE questions SET kavram = 'u10-diger', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-enerji';
UPDATE questions SET kavram = 'u10-diger', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-su';
UPDATE questions SET kavram = 'u10-diger', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-isgucu';
UPDATE questions SET kavram = 'u10-diger', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-iklim';
UPDATE questions SET kavram = 'u10-diger', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-tesvik';
UPDATE questions SET kavram = 'u10-diger', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-tesvik-amac';
UPDATE questions SET kavram = 'u10-diger', yedek = 0, etiketler = 'ozet' WHERE id = 'ib-u10-emek-yogun';
