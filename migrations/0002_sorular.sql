-- Bu dosya scripts/sorular-sql.ts ile content/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, title, week, sort) VALUES ('u1', 'Girişimciliğin Temel Kavramları', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('u2', 'Girişim Fırsatlarını Görme ve Fikir Yaratma/Geliştirme', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('u3', 'Yapılabilirlik Analizi', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('u4', 'İş Modelleri, Müşteriler, Değer Önerileri ve Gelir Kaynakları', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('u5', 'Ekonomi, Endüstri, Rekabet ve Müşteri Analizi', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('u6', 'Hukuki Altyapı', 6, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('u7', 'Girişimin Etik Temelleri', 7, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('u8', 'Pazarlama İlkeleri ve Yönetimi', 8, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-k01', 'u1', 1, 'mcq', 'original', 'Bir ürün/hizmet üretmek için gerek duyduğu kaynakları en yüksek değeri yaratacak şekilde bir araya getirerek değer yaratan kişiye ne ad verilir?', '{"choices":["Yönetici","Lider","Girişimci","Çalışan","Tedarikçi"]}', '{"index":2}', 'Kitabın kısa tanımı: **girişimci**, ürün ya da hizmet için gereken kaynakları en yüksek değeri yaratacak şekilde bir araya getirip paydaşları için değer yaratan kişidir.', 1, 'Kitap, 1. ünite, soru 1 · Çıkmış soru 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-k02', 'u1', 1, 'mcq', 'original', 'I. Kâr elde etme
II. Sosyal fayda yaratmak
III. Büyüme
IV. Hayatta kalma
V. Vergi vermek

Yukarıdakilerden hangisi ticari amaçla kurulan girişimlerin içsel amaçları arasında yer almaz?', '{"choices":["I - V","II - IV","I - III","II - V","III - IV"]}', '{"index":3}', 'Ticari girişimin üç içsel amacı **kâr, hayatta kalma (sürdürülebilirlik) ve büyüme**dir. Sosyal fayda belediye işletmeleri gibi ticari olmayan işletmelerin amacıdır; vergi ise devletin beklentisidir.', 2, 'Kitap, 1. ünite, soru 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-k03', 'u1', 1, 'mcq', 'original', 'Aşağıdakilerden hangisi yönetim fonksiyonlarından biri değildir?', '{"choices":["Programlama","Kontrol","Örgütleme","Planlama","Yürütme"]}', '{"index":0}', 'Dört yönetim fonksiyonu: **planlama, örgütleme, yürütme (yöneltme) ve kontrol**. Programlama bunlardan biri değildir.', 1, 'Kitap, 1. ünite, soru 3 · Çıkmış soru 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-k04', 'u1', 1, 'mcq', 'original', 'Aşağıdakilerden hangisi başarılı bir girişimcinin sahip olması gereken en temel özelliklerinden biri değildir?', '{"choices":["Liderlik","Stres","Risk alma","Öz-yeterlilik","Yenilikçilik"]}', '{"index":1}', 'Kitap dört temel özellik sayar: **öz yeterlilik, yenilikçilik, risk alma ve liderlik**. Stres bir özellik değil, girişimcilikteki engellerden biridir.', 1, 'Kitap, 1. ünite, soru 4', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-k05', 'u1', 1, 'mcq', 'original', 'Yönetici ve lider ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?', '{"choices":["Yöneticinin bir görev tanımı vardır, liderin ise bir görev tanımı yoktur.","Yönetici, işleri doğru yapan, lider ise doğru işleri yapan kişidir.","Yönetici, sahip olduğu makama verilen yetkileri kullanarak iş yaptırır.","Liderlik, çoğu zaman bir yönetsel makamı ifade etmektedir.","Liderlik, insanları etkileme ve harekete geçirme faaliyetleridir."]}', '{"index":3}', 'Yönetsel makamı (genel müdür, şef…) ifade eden **yöneticiliktir**. Liderlik makamdan kaynaklanmayan kişisel özellikler bütünüdür.', 2, 'Kitap, 1. ünite, soru 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-k06', 'u1', 1, 'mcq', 'original', 'Kişinin kendisinin ve ailesinin geleceğini güvence altına almak amacıyla girişimci olmaya karar vermesi hangi tür girişimcilik motivasyonunun kapsamına girmektedir?', '{"choices":["Maddi (Dışsal) motivasyonlar","Bağımsızlığa yönelik motivasyonlar","Bireysel (İçsel) motivasyonlar","Çevresel motivasyonlar","Güvenliğe yönelik motivasyonlar"]}', '{"index":4}', 'Kendinin ve ailesinin geleceğini güvenceye almak **güvenliğe yönelik** motivasyondur (emeklilikte rahat etmek, çocukların geleceği gibi).', 1, 'Kitap, 1. ünite, soru 6 · Çıkmış soru 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-k07', 'u1', 1, 'mcq', 'original', 'Aşağıdakilerden hangisi girişimcilik sürecinin aşamaları arasında yer almamaktadır?', '{"choices":["Kaynakların bulunması","İş planının oluşturulması","Örgütleme","Fırsatların tespiti","Büyüme ve çıkış"]}', '{"index":2}', 'Girişimcilik süreci: **fırsatların tespiti → iş modeli ve iş planı → kaynakların bulunması → büyüme ve çıkış**. Örgütleme bir yönetim fonksiyonudur.', 1, 'Kitap, 1. ünite, soru 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-k08', 'u1', 1, 'mcq', 'original', '45 çalışanı ve 20 milyon TL ciroya sahip olan bir işletmenin büyüklüğü, mevcut yasalarımızda ne şekilde tanımlanmıştır?', '{"choices":["Mikro İşletme","Küçük işletme","Orta büyüklükte işletme","KOBİ","Büyük işletme"]}', '{"index":1}', 'Küçük işletme: **50 kişiden az** çalışan ve ciro ya da bilançosu **25 milyon TL**''yi aşmayan işletme. 45 kişi ve 20 milyon TL bu sınırların içindedir.', 2, 'Kitap, 1. ünite, soru 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-k09', 'u1', 1, 'mcq', 'original', 'Aşağıdakilerden hangisi KOBİ’lerin avantajlarından biri değildir?', '{"choices":["Yenilik fırsatlarını daha iyi saptayıp değerlendirebilme","Teşvikli fonlardan daha fazla yararlanabilme","Karar almada tek yöneticiye bağımlı olma","Teknolojik yeniliklerde daha verimli olabilme","Pazar ve müşteriye yakınlıklarının daha fazla olması"]}', '{"index":2}', 'Karar almada tek yöneticiye bağımlı olmak KOBİ''lerin **dezavantajları** arasında sayılır.', 1, 'Kitap, 1. ünite, soru 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-k10', 'u1', 1, 'mcq', 'original', 'Aşağıdakilerden hangisi girişimcilik ile ilgili doğru bilinen yanlışlardan biri değildir?', '{"choices":["İş fikri çok karmaşık ise başarı garantidir","Başarısız girişimciye güvenilmez","Girişimciler risk almayı sever","Ne kadar kıymetli olursa olsun tek başına iş fikrinin herhangi bir değeri yoktur","Girişimcilik parası olanların işidir"]}', '{"index":3}', '"Tek başına iş fikrinin değeri yoktur" bir efsane değil, kitabın vardığı doğru sonuçtur: kişiyi girişimci yapan, fikri kaynakları bir araya getirip değere dönüştürmesidir.', 2, 'Kitap, 1. ünite, soru 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-c04', 'u1', 1, 'mcq', 'original', 'Bir işletmenin müşterilerin beklentilerini karşılarken işbirliği yaptığı (hissedar, çalışan, tedarikçi, dağıtıcı, devlet vb.) bir takım kişi ve kurumlara genel olarak ne ad verilir?', '{"choices":["Sermaye","Müşteri","Girişimci","Paydaş","Yatırımcı"]}', '{"index":3}', 'Girişimin **paydaşları**: hissedar, çalışan, tedarikçi, dağıtıcı, devlet ve doğa. Paydaşlar olmadan hiçbir işletme müşterisinin beklentisini karşılayamaz.', 1, 'Çıkmış soru 4', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-c13', 'u1', 1, 'mcq', 'original', 'Genellikle başka imkânı olmadığı için girişimciliğe yönelenlerden oluşur ve bu şekilde kurulan işlerin hayatta kalsa bile genellikle fazla büyüme ihtimalleri yoktur. Aşağıdakilerden hangisi yukarıda anlatılan girişimcilik türünden biridir?', '{"choices":["Fırsat Temelli Girişimcilik","İstek Temelli Girişimcilik","Heves Temelli Girişimcilik","Trend Temelli Girişimcilik","Zorunluluk Temelli Girişimcilik"]}', '{"index":4}', 'Başka iş imkânı olmadığı için kurulan işler **zorunluluk temelli** girişimciliktir; fırsat temelli girişimcilik ise pazarda görülen bir fırsatı değerlendirmek için kurulur ve büyüme potansiyeli daha yüksektir.', 2, 'Çıkmış soru 13', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-icsel-amac', 'u1', 1, 'mcq', 'derived', 'Kitaba göre ticari amaçla kurulan bir girişimin üç içsel amacı hangi seçenekte doğru verilmiştir?', '{"choices":["Kâr, hayatta kalma ve büyüme","Kâr, vergi ve istihdam","Büyüme, sosyal fayda ve ihracat","Hayatta kalma, reklam ve marka"]}', '{"index":0}', 'Girişimin içsel amaçları **kâr, hayatta kalma (sürdürülebilirlik) ve büyüme**dir.', 1, '1. ünite, Girişimcilikte değer yaratma ve paydaşlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-paydas-beklenti', 'u1', 1, 'mcq', 'derived', 'Paydaşların girişimden beklentileriyle ilgili eşleştirmelerden hangisi **yanlıştır**?', '{"choices":["Çalışan: iyi maaş ve çalışma koşulları","Devlet: vergi ve kurallara uyum","Doğa: gelecek nesillere aktarım","Tedarikçi: yüksek parasal değerli ürün"]}', '{"index":3}', 'Tedarikçi ve dağıtıcı girişimden **kârlı ilişkiler** bekler. Yüksek parasal değer müşterinin beklentisidir.', 2, '1. ünite, Girişimcilikte değer yaratma ve paydaşlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-iyi-kotu', 'u1', 1, 'tf', 'derived', 'Kitaba göre iyi ve kötü girişimciyi ayıran en temel fark, paydaşların beklentilerinin ne ölçüde karşılandığıdır.', '{}', '{"value":true}', 'Doğru. Girişimcinin temel görevi, birbiriyle çatışan beklentilere sahip paydaşları dengeli biçimde tatmin etmektir; bunun tek yolu da yenilik yapmaktır.', 1, '1. ünite, Girişimcilikte değer yaratma ve paydaşlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-en-onemli-sorumluluk', 'u1', 1, 'fill', 'derived', 'Kitaba göre girişimcinin işletmesini başarıya ulaştırmasında en önemli sorumluluğu ____ yapmaktır.', '{"blanks":1}', '{"blanks":[["yenilik","inovasyon"]]}', 'Girişimin değerini büyütmenin yolu rakiplerden farklı ürün ve hizmet ortaya koyan **yenilikler**dir.', 2, '1. ünite, Girişimcilikte değer yaratma ve paydaşlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-paydas-sayisi', 'u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi kitapta sayılan girişim paydaşları arasında **yer almaz**?', '{"choices":["Doğa","Dağıtıcı","Rakip firma","Devlet"]}', '{"index":2}', 'Paydaşlar: hissedar (sermayedar), çalışan, tedarikçi, dağıtıcı, devlet ve doğa. Rakipler paydaş değildir.', 2, '1. ünite, Girişimcilikte değer yaratma ve paydaşlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-cantillon', 'u1', 1, 'mcq', 'derived', 'Girişimcilik kavramını Fransızca literatürde ilk kez kullanan ve girişimciyi daha çok belirsizlik ve risk boyutuyla ele alan düşünür kimdir?', '{"choices":["Joseph A. Schumpeter","Richard Cantillon","Jean Baptiste Say","Peter Drucker"]}', '{"index":1}', '**Cantillon** (1730''lar) girişimciyi henüz belirginleşmemiş bir fiyatla satmak üzere girdileri satın alan, belirsiz bir gelirle yaşayan kişi olarak tanımlar.', 2, '1. ünite, Girişimcilik tanımlarının gelişimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-say', 'u1', 1, 'mcq', 'derived', 'Girişimciyi, emek, doğal kaynaklar ve sermayeden oluşan üretim faktörlerini bir araya getirme sorumluluğu olan kişi olarak tanımlayan ve yönetimsel sorumluluğu öne çıkaran düşünür kimdir?', '{"choices":["Jean Baptiste Say","Richard Cantillon","Joseph A. Schumpeter","Oktay Alpugan"]}', '{"index":0}', '**J. B. Say** (1845) girişimciliğe bütüncül bir yaklaşım getirip girişimcinin yönetimsel sorumluluklarını öne çıkarmıştır.', 2, '1. ünite, Girişimcilik tanımlarının gelişimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-schumpeter', 'u1', 1, 'mcq', 'derived', 'Girişimcinin temel sorumluluğunun değişik türlerde yenilikler çıkararak toplumun refahını artırmak olduğunu vurgulayan iktisatçı kimdir?', '{"choices":["Richard Cantillon","Peter Drucker","Joseph A. Schumpeter","Jean Baptiste Say"]}', '{"index":2}', '**Schumpeter** girişimciliği yenilik ve değer oluşturma faaliyeti olarak tanımlamıştır.', 2, '1. ünite, Girişimcilik tanımlarının gelişimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-sermaye-sahipligi', 'u1', 1, 'tf', 'derived', 'Kitaba göre girişimcinin vazgeçilmez özelliği, kurduğu işletmenin sermayesine sahip olmasıdır.', '{}', '{"value":false}', 'Yanlış. Girişimcinin temel fonksiyonu sermaye sahipliği değil; iş fikri geliştirip gerekli kaynakları bir araya getirerek **değer oluşturmaktır**. Ortaklık payı düşük olan kişi de girişimci olabilir.', 1, '1. ünite, Girişimcilik tanımlarının gelişimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-isletme-ogeler', 'u1', 1, 'mcq', 'derived', 'İşletme tanımında vurgulanan üç temel öğe hangisinde birlikte verilmiştir?', '{"choices":["Amaç, ürün, istek/ihtiyaç","Sermaye, emek, doğa","Planlama, örgütleme, kontrol","Kâr, büyüme, vergi"]}', '{"index":0}', 'İşletme, belirli **amaçlar** doğrultusunda **ürün** ve hizmet üretip pazarlayarak insanların **istek ve ihtiyaçlarını** karşılayan ekonomik birimdir.', 2, '1. ünite, İşletme ve girişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-girisim-isletme', 'u1', 1, 'mcq', 'derived', 'Arçelik A.Ş. ile onun Ankara''daki bulaşık makinesi fabrikası örneğinde hangi ayrım anlatılmaktadır?', '{"choices":["Girişim, işletme kavramını içine alan daha geniş bir kavramdır","Fabrika girişim, şirket ise işletmedir","İki kavram büyük şirketlerde de tamamen aynıdır","İşletme yalnızca kamu kuruluşları için kullanılır"]}', '{"index":0}', 'Büyüyen yapılarda **girişim** (Arçelik A.Ş.) daha geniş bir kavramdır; ona bağlı fabrikalar birer **işletme**dir. Küçük işletmelerde iki kavram arasında fark yoktur.', 2, '1. ünite, İşletme ve girişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-belediye', 'u1', 1, 'tf', 'derived', 'Belediyenin halka hizmet için kurduğu ekmek fabrikasının ana amacı kâr elde etmek değil sosyal fayda sağlamaktır.', '{}', '{"value":true}', 'Doğru. Ticari beklentisi olmayan iktisadi işletmelerin faaliyetleri vergilerle karşılanır; ana amaçları sosyal faydadır.', 1, '1. ünite, İşletme ve girişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-planlama-sorular', 'u1', 1, 'mcq', 'derived', '"Ne, ne zaman yapılacak; kim hangi kaynakları kullanarak, hangi amaçla yapacak?" sorularına cevap aranan yönetim fonksiyonu hangisidir?', '{"choices":["Planlama","Örgütleme","Yürütme","Kontrol"]}', '{"index":0}', 'Bu sorular **planlama** aşamasında sorulur; yönetici amaçlara nasıl ulaşılacağını net biçimde ortaya koyar.', 1, '1. ünite, Yönetim fonksiyonları, yönetici ve lider', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-orgutleme', 'u1', 1, 'mcq', 'derived', 'Sonunda işletmenin organizasyon şemasının ve yetki-sorumluluk dağılımının ortaya çıktığı yönetim fonksiyonu hangisidir?', '{"choices":["Kontrol","Planlama","Örgütleme","Yöneltme"]}', '{"index":2}', '**Örgütleme**de hangi işlerin kimler tarafından nasıl bir yapıyla yapılacağı belirlenir; çıktısı organizasyon şeması ve yetki-sorumluluk dağılımıdır.', 2, '1. ünite, Yönetim fonksiyonları, yönetici ve lider', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-kontrol', 'u1', 1, 'mcq', 'derived', 'Hedeflenen sonuçlara ulaşılıp ulaşılmadığını karşılaştıran, sapmanın nedenini bulup yeni planlamaya geri bildirim veren yönetim fonksiyonu hangisidir?', '{"choices":["Yürütme","Kontrol","Örgütleme","Koordinasyon"]}', '{"index":1}', '**Kontrol**, karşılaştırma ve düzeltici önlemlerin belirlendiği fonksiyondur.', 2, '1. ünite, Yönetim fonksiyonları, yönetici ve lider', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-yurutme', 'u1', 1, 'mcq', 'derived', 'Çalışanlar arasında amaç birliği sağlamak için motivasyon, liderlik ve iletişim kanallarının öne çıktığı yönetim fonksiyonu hangisidir?', '{"choices":["Yürütme","Planlama","Kontrol","Örgütleme"]}', '{"index":0}', '**Yöneltme veya yürütme** fonksiyonunda çalışanlar belirli bir amaç doğrultusunda harekete geçirilir.', 2, '1. ünite, Yönetim fonksiyonları, yönetici ve lider', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-yonetici-risk', 'u1', 1, 'mcq', 'derived', 'Kitaba göre girişimci ile profesyonel yönetici arasındaki en temel fark hangisidir?', '{"choices":["Yönetici maaş alır, kâr/zarar riskini üstlenmez","Yönetici işletmede hiçbir zaman karar vermez","Girişimci kaynakları yönetmez, yalnızca fikir üretir","Yönetici işletmenin sermayesinin tamamına sahiptir"]}', '{"index":0}', 'Profesyonel yönetici işletmenin çalışanıdır; maaş alır, **kâr/zarar riskini girişimci üstlenir**.', 2, '1. ünite, Yönetim fonksiyonları, yönetici ve lider', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-lider-yonetici-tf', 'u1', 1, 'tf', 'derived', 'Kitaba göre yönetici olmak için lider olmak şart değildir, ancak iyi ve başarılı bir yöneticilik için liderlik özellikleri zorunludur.', '{}', '{"value":true}', 'Doğru. Liderlik ve yöneticilik eş anlamlı değildir; liderlik özelliği olmayan yöneticiler de vardır ama ideal değildir.', 1, '1. ünite, Yönetim fonksiyonları, yönetici ve lider', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-lider-hedef', 'u1', 1, 'mcq', 'derived', 'Yöneticilik ve liderlik karşılaştırmasında hangisi **liderliğe** aittir?', '{"choices":["Hedeflerin ve yapılacak işlerin belirlenmesiyle ilgilidir","Bir organizasyon yapısı içinde gerçekleşir","Makama verilen yetkileri kullanarak iş yaptırır","Bir görev tanımı vardır"]}', '{"index":0}', 'Yöneticilik tanımlı hedeflere ulaştıracak işlerin etkin yapılmasıyla, **liderlik** ise hedeflerin ve yapılacak işlerin belirlenmesiyle ilgilidir.', 2, '1. ünite, Yönetim fonksiyonları, yönetici ve lider', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-lider-temel', 'u1', 1, 'mcq', 'derived', 'Kitaba göre çalışanları bir amaç doğrultusunda harekete geçirebilmenin, yani başarılı liderliğin temelinde ne bulunur?', '{"choices":["Güven","Makam","Ceza sistemi","Sermaye"]}', '{"index":0}', 'Liderliğin temelinde **güven** vardır; çalışanlarda güven duygusu yaratamayan girişimcinin lider olması beklenemez.', 1, '1. ünite, Yönetim fonksiyonları, yönetici ve lider', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-mikro', 'u1', 1, 'mcq', 'derived', '8 çalışanı ve 2 milyon TL yıllık net satış hasılatı olan bağımsız bir işletme kitaptaki tanıma göre hangi sınıftadır?', '{"choices":["Mikro işletme","Küçük işletme","Orta büyüklükte işletme","Büyük işletme"]}', '{"index":0}', 'Mikro işletme: **10 kişiden az** çalışan ve ciro ya da bilançosu **3 milyon TL**''yi aşmayan işletme.', 2, '1. ünite, KOBİ tanımı, avantaj ve dezavantajları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-orta', 'u1', 1, 'mcq', 'derived', '180 çalışanı ve 90 milyon TL cirosu olan bağımsız bir işletme kitaptaki tanıma göre hangi sınıftadır?', '{"choices":["Küçük işletme","Orta büyüklükte işletme","Mikro işletme","Büyük işletme"]}', '{"index":1}', 'Orta büyüklükteki işletme: **250 kişiden az** çalışan ve ciro ya da bilançosu **125 milyon TL**''yi aşmayan işletme. 50 kişi ve 25 milyon TL küçük işletme sınırını aştığı için orta sınıftadır.', 2, '1. ünite, KOBİ tanımı, avantaj ve dezavantajları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-bagimsizlik', 'u1', 1, 'fill', 'derived', 'Ortakları arasında hisse oranı %____''ten fazla olan büyük bir işletme bulunan firma, bağımsızlık şartını sağlamadığı için KOBİ sayılmaz.', '{"blanks":1}', '{"blanks":[["25","yirmi beş","yirmibeş"]]}', 'Bağımsızlık şartı: ortaklar arasında **%25**''ten fazla hisseye sahip büyük işletme olmamalıdır.', 3, '1. ünite, KOBİ tanımı, avantaj ve dezavantajları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-kobi-oran', 'u1', 1, 'mcq', 'derived', 'Kitaba göre ülkemizdeki girişimlerin yaklaşık yüzde kaçı küçük ve orta ölçekli işletmedir?', '{"choices":["%99,5","%73,5","%62","%55"]}', '{"index":0}', 'Girişimlerin büyük çoğunluğu (**%99,5**) KOBİ''dir. %73,5 istihdam, %62 ciro, %55 ihracat payıdır.', 2, '1. ünite, KOBİ tanımı, avantaj ve dezavantajları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-kobi-dezavantaj', 'u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi KOBİ''lerin **dezavantajlarından** biridir?', '{"choices":["Satış dalgalanmalarının yüksek olması","Daha az bürokrasi","Pazar ve müşteriye yakınlık","Büyük işletmelerin tamamlayıcısı olmaları"]}', '{"index":0}', 'Dezavantajlar: tecrübeli personel eksikliği, düşük miktarlı tedarik yüzünden yüksek maliyet, fiyat rekabetine dayanıksızlık, **satış dalgalanmaları** ve tek yöneticiye bağımlılık.', 1, '1. ünite, KOBİ tanımı, avantaj ve dezavantajları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-kobi-kopya', 'u1', 1, 'tf', 'derived', 'KOBİ''ler büyük işletmelerin küçük birer kopyasıdır; bu yüzden büyük işletmelerin hareket tarzını taklit etmeleri olumlu sonuç verir.', '{}', '{"value":false}', 'Yanlış. KOBİ''ler büyük işletmelerden çok farklı iş modellerine, ürünlere ve pazarlara sahiptir; büyük işletme gibi davranmaları gerekmez.', 1, '1. ünite, KOBİ tanımı, avantaj ve dezavantajları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-ozyeterlilik', 'u1', 1, 'mcq', 'derived', 'Kişinin istenen bir sonuca ulaşmada sergileyebileceği bilgi ve yeteneklerine olan inancına ne ad verilir?', '{"choices":["Öz yeterlilik","Risk alma","Yenilikçilik","Liderlik"]}', '{"index":0}', '**Öz yeterlilik**; yüksek olan kişiler kendilerine yüksek hedef koyar, zorluklara gönüllü olarak mücadele eder.', 1, '1. ünite, Başarılı girişimcinin nitelikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-dogustan', 'u1', 1, 'tf', 'derived', 'Kitaba göre girişimcilik doğuştan gelen kişilik özelliklerine bağlıdır; bu özelliklere sahip olmayan biri girişimci olamaz.', '{}', '{"value":false}', 'Yanlış. Girişimcilik başarısı doğuştan gelen özelliklerle açıklanmaz; gerekli nitelikler çalışarak kazanılabilir, **herkes girişimci olabilir**.', 1, '1. ünite, Başarılı girişimcinin nitelikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-drucker-risk', 'u1', 1, 'mcq', 'derived', 'Peter Drucker''a göre çevresindeki değişimi doğru okuyup buna uygun hareket eden yenilikçi girişimciler aslında ne yapmaktadır?', '{"choices":["Riski minimize etmeye çalışır","Kumarbaz gibi yüksek risk alır","Riskten tamamen kaçınır","Riski devlete devreder"]}', '{"index":0}', 'Drucker''a göre bu girişimciler risk alan değil **riski minimize etmeye çalışan** kişilerdir; en büyük risk değişime uyum sağlamamaktır.', 2, '1. ünite, Başarılı girişimcinin nitelikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-yenilik-kapsam', 'u1', 1, 'mcq', 'derived', 'Kitapta girişimcinin yenilikçilik özelliğinden söz edilirken yeniliğin kapsamı için hangisi söylenir?', '{"choices":["Ürün, hizmet, yeni pazar, dağıtım kanalı ve süreçleri kapsar","Yalnızca daha önce olmayan bir ürünü icat etmektir","Yalnızca Ar-Ge bölümünün yaptığı işleri kapsar","Yalnızca teknoloji firmaları için geçerli bir kavramdır"]}', '{"index":0}', 'Yenilik (inovasyon) geniş anlamda ürün, hizmet, yeni pazar, yeni dağıtım kanalı ve süreç farklılaştırmayı kapsar.', 2, '1. ünite, Başarılı girişimcinin nitelikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-bagimsizlik-mot', 'u1', 1, 'mcq', 'derived', 'Kendi işinin patronu olmak, kendi kararlarını verebilmek ve kişisel özgürlüğünü korumak hangi tür girişimcilik motivasyonudur?', '{"choices":["Bağımsızlığa yönelik","Güvenliğe yönelik","Maddi","Bireysel"]}', '{"index":0}', 'Bunlar **bağımsızlığa yönelik** motivasyonlardır; kitap bunları kişiyi girişimciliğe iten en önemli nedenler arasında sayar.', 1, '1. ünite, Girişimcilik motivasyonları ve engelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-icsel-mot', 'u1', 1, 'mcq', 'derived', 'Bir şeyleri yapabileceğini kanıtlamak, kamuoyunda tanınmak ve zor bir işi başarma duygusu hangi motivasyon grubundadır?', '{"choices":["Bireysel","Maddi","Bağımsızlığa yönelik","Güvenliğe yönelik"]}', '{"index":0}', 'Kişinin duygusal beklentilerini karşılayan gerekçeler **bireysel (içsel)** motivasyonlardır.', 1, '1. ünite, Girişimcilik motivasyonları ve engelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-maddi-mot', 'u1', 1, 'mcq', 'derived', 'İyi bir yaşam standardına sahip olmak ve daha fazla para kazanmak isteği hangi motivasyon grubuna girer?', '{"choices":["Maddi","Bireysel","Güvenliğe yönelik","Çevresel"]}', '{"index":0}', 'Girişimciliğin getirebileceği refah **maddi (dışsal)** motivasyondur.', 1, '1. ünite, Girişimcilik motivasyonları ve engelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-ulke-mot', 'u1', 1, 'tf', 'derived', 'Kitaba göre gelir ve refah seviyesinin düşük olduğu ülkelerde güvenlikle ilgili motivasyonlar, gelişmiş ülkelerde ise bağımsızlık ve otonomiye yönelik motivasyonlar daha ön plandadır.', '{}', '{"value":true}', 'Doğru. Motivasyonlar ülkeye ve zamana göre değişir.', 2, '1. ünite, Girişimcilik motivasyonları ve engelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-engeller', 'u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi kitapta girişimcilikte en çok karşılaşılan engeller arasında **sayılmaz**?', '{"choices":["Düzenli ve yüksek maaş","Uzun çalışma saatleri","Düzensiz gelir","Stresli bir yaşam"]}', '{"index":0}', 'Engeller: **uzun çalışma saatleri, düzensiz gelir ve stresli yaşam**. Düzenli gelir bir engel değil, tam tersine girişimcinin genellikle sahip olmadığı şeydir.', 1, '1. ünite, Girişimcilik motivasyonları ve engelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-en-zor-donem', 'u1', 1, 'mcq', 'derived', 'Kitaba göre girişimcilik serüveninin en zor dönemleri hangileridir?', '{"choices":["Kuruluş öncesi ve kuruluş aşamaları","Büyüme ve çıkış aşamaları","Olgunluk aşaması","Halka arz sonrası"]}', '{"index":0}', '**Kuruluş öncesi ve kuruluş** aşamalarında ekip kurma, finansman, üretim, kalite ve rekabet sorunları yoğundur.', 1, '1. ünite, Girişimcilik motivasyonları ve engelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-olum-vadisi', 'u1', 1, 'mcq', 'derived', 'Girişimcinin henüz pazara girmeden yaptığı yatırımlar ile bu yatırımlardan gelir elde etmeye başladığı süre arasında kalan, finansmanı biterse işletmenin kapandığı döneme ne ad verilir?', '{"choices":["Ölüm vadisi","Başabaş noktası","Nakit akışı","Çıkış stratejisi"]}', '{"index":0}', 'Bu döneme **ölüm vadisi** denir; bu sırada finansman biterse işletme kapanır.', 1, '1. ünite, Başarısızlık faktörleri ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-nakit-yakma', 'u1', 1, 'fill', 'derived', 'İşletmenin ürün satışından gelir elde etmeden elindeki nakit sermayeyi harcamasına "nakit ____" (cash burn) denir.', '{"blanks":1}', '{"blanks":[["yakma"]]}', 'Buna **nakit yakma** (cash burn) denir.', 2, '1. ünite, Başarısızlık faktörleri ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-finansal-sonuc', 'u1', 1, 'tf', 'derived', 'Kitaba göre finansal kaynak yetersizliği başarısızlığın çoğu zaman bir sebebi değil sonucudur; asıl üzerinde durulması gereken ona yol açan nedenlerdir.', '{}', '{"value":true}', 'Doğru. Her iflasın finansal bir yüzü vardır ama ona yol açan temel neden farklıdır.', 2, '1. ünite, Başarısızlık faktörleri ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-nakit-en-cok', 'u1', 1, 'mcq', 'derived', 'Ölüm vadisi eğrisinde işletmenin nakde en çok ihtiyaç duyduğu aşama hangisidir?', '{"choices":["Pazara sunuş aşaması","Araştırma aşaması","İşletme başarısı sonrası","Fikir aşaması"]}', '{"index":0}', 'Tanıtım ve dağıtım kanallarına girme gibi harcamalar yüzünden nakde en çok **pazara sunuş** aşamasında ihtiyaç duyulur.', 2, '1. ünite, Başarısızlık faktörleri ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-kapanis-orani', 'u1', 1, 'mcq', 'derived', 'Kitaptaki sekiz yıllık verilere göre küçük işletmelerin tercih ettiği gerçek kişi işletmelerinde kapanış oranı yaklaşık yüzde kaçtır?', '{"choices":["%85","%56","%40","%25"]}', '{"index":0}', 'Gerçek kişi işletmelerinde kapanış oranı **%85**, şirket ve kooperatiflerde %56''dır; yani küçük işletmelerde başarısızlık daha fazladır.', 3, '1. ünite, Başarısızlık faktörleri ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-iki-yil', 'u1', 1, 'mcq', 'derived', 'Kitapta aktarılan verilere göre kurulan işletmelerin yüzde kaçı ilk iki yıl içinde faaliyetine devam edebilmektedir?', '{"choices":["%40","%60","%85","%99,5"]}', '{"index":0}', 'İşletmelerin yalnızca **%40**''ı ilk iki yılı çıkarır, %60''ı faaliyetine son verir.', 2, '1. ünite, Başarısızlık faktörleri ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-olcusuz-buyume', 'u1', 1, 'mcq', 'derived', 'Ölçüm yapmadan yeni dağıtım kanalına girmek, kapasite yatırımı yapmak gibi plansız hamleler hangi başarısızlık nedenine örnektir?', '{"choices":["Ölçüsüz büyüme","Çevresel nedenler","Kuruluş öncesi araştırma eksikliği","Düzensiz gelir"]}', '{"index":0}', '**Ölçüsüz büyüme** küçük işletmeleri olduğu kadar büyük işletmeleri de iflasa sürükleyebilir.', 2, '1. ünite, Başarısızlık faktörleri ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-surec-sira', 'u1', 1, 'mcq', 'derived', 'Girişimcilik sürecinin aşamaları hangi seçenekte doğru sırayla verilmiştir?', '{"choices":["Fırsatların tespiti → İş modeli ve iş planı → Kaynakların bulunması → Büyüme ve çıkış","İş planı → Fırsatların tespiti → Büyüme ve çıkış → Kaynakların bulunması","Kaynakların bulunması → Fırsatların tespiti → İş planı → Büyüme ve çıkış","Fırsatların tespiti → Kaynakların bulunması → Büyüme ve çıkış → İş modeli ve iş planı"]}', '{"index":0}', 'Doğru sıra: fırsatların tespiti, iş modeli ve iş planı geliştirme, kaynakların bulunması ve kuruluş, büyüme ve çıkış.', 2, '1. ünite, Girişimcilik süreci', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-firsat-kaynak', 'u1', 1, 'mcq', 'derived', 'Nüfusun yaşlanmasıyla yaşlı bakım hizmetlerine talebin artması, fırsat kaynaklarından hangisine örnektir?', '{"choices":["Demografik eğilimlerdeki değişimler","Teknolojik değişimler","Yasal çevredeki değişimler","Ekonomik faktörlerdeki değişimler"]}', '{"index":0}', 'Nüfus yapısıyla ilgili değişimler **demografik** eğilimlerdir.', 2, '1. ünite, Girişimcilik süreci', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-melek', 'u1', 1, 'mcq', 'derived', 'Kitaba göre melek yatırımcıların bir girişimde ilk inceledikleri konu nedir?', '{"choices":["Girişimci ve kurduğu ekip","Ürünün patenti","İş fikrinin karmaşıklığı","Şirketin kuruluş yeri"]}', '{"index":0}', 'Melek yatırımcılar ilk olarak iş fikrine değil, **girişimciye ve ekibine** bakar.', 2, '1. ünite, Girişimcilik süreci', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-cikis-stratejisi', 'u1', 1, 'mcq', 'derived', 'Hızlı büyüme sonrası girişimcinin işletmesini büyük sermaye gruplarına satıp elde ettiği nakdi yeni girişimlere aktarmasına ne ad verilir?', '{"choices":["Çıkış stratejisi","Ölçüsüz büyüme","Nakit yakma","Ortaklıktan çıkarılma"]}', '{"index":0}', 'Bu yenilik odaklı girişimcilerin tercih edebildiği **çıkış stratejisi**dir.', 2, '1. ünite, Girişimcilik süreci', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-is-modeli-tanim', 'u1', 1, 'mcq', 'derived', '"İşletmenin nasıl değer yaratacağının, bu değeri müşteriye nasıl ulaştıracağının ve nasıl gelir elde edeceğinin kısa açıklaması" neyin tanımıdır?', '{"choices":["İş modeli","İş planı","Fizibilite raporu","Organizasyon şeması"]}', '{"index":0}', 'Bu **iş modeli**nin tanımıdır; iş planı ise teknik, ekonomik ve finansal fizibiliteyi içeren daha kapsamlı bir belgedir.', 2, '1. ünite, Girişimcilik süreci', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-sermaye-kaynaklari', 'u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi kitapta kuruluş aşamasında sermaye bulunabilecek kaynaklar arasında **sayılmaz**?', '{"choices":["Müşterilerden alınan kişisel itibar","Arkadaşlar ve aile","Melek yatırımcılar","Kamu fonları"]}', '{"index":0}', 'Sermaye kaynakları: öz sermaye, arkadaşlar ve aile, melek yatırımcılar, banka kredileri ve kamu fonları (KOSGEB, TÜBİTAK).', 1, '1. ünite, Girişimcilik süreci', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-ozkaynak-plan', 'u1', 1, 'tf', 'derived', 'İşletme tamamen özkaynakla kurulacaksa iş planı hazırlamaya gerek yoktur.', '{}', '{"value":false}', 'Yanlış; bu bir efsanedir. İş planı işin tüm yönlerini ortaya koyup riskleri azaltır; kendi paramızı kullanırken de aynı hassasiyet gösterilmelidir.', 1, '1. ünite, Girişimcilik efsaneleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-ilk-olmak', 'u1', 1, 'mcq', 'derived', '"Ürün kimsede yoksa başarı garantidir" efsanesine karşı kitapta hangi örnek verilir?', '{"choices":["Amazon, Apple ve Tesla pazarda ilk olmadıkları halde başarılı olmuştur","Starbucks kahveyi icat ettiği için başarılı olmuştur","Dropbox karmaşık bir iş fikri sayesinde büyümüştür","Yemeksepeti rakibi olmadığı için hiç zorlanmamıştır"]}', '{"index":0}', 'Pazarda ilk olmak başarıyı garanti etmez; **Amazon, Apple, Tesla** ilk olmadan yenilikçi uygulamalarıyla başarılı olmuştur.', 2, '1. ünite, Girişimcilik efsaneleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-fikir-paylas', 'u1', 1, 'tf', 'derived', 'Kitaba göre iş fikri, çalınmasın diye ürün pazara çıkana kadar kimseyle paylaşılmamalıdır.', '{}', '{"value":false}', 'Yanlış; bu bir efsanedir. Paylaşılan fikirler ortak akılla gelişir; kuluçka merkezleri de bu mantıkla çalışır. Yalnızca ticari sır niteliğindeki özellikler saklanmalıdır.', 1, '1. ünite, Girişimcilik efsaneleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u1-t-basit-fikir', 'u1', 1, 'mcq', 'derived', 'Kitaba göre başarılı iş fikirlerinin ortak özelliği hangisidir?', '{"choices":["Basit ve kolay anlaşılır olmaları","Çok karmaşık olmaları","Daha önce hiç denenmemiş olmaları","Yalnızca teknoloji içermeleri"]}', '{"index":0}', 'İş fikri **basit ve anlaşılır** olduğu ölçüde değer kazanır; Dropbox, Instagram, Yemeksepeti örnekleri böyledir.', 1, '1. ünite, Girişimcilik efsaneleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-k01', 'u2', 2, 'mcq', 'original', 'Fırsat hangisiyle ilgilidir?', '{"choices":["Uygun şartların oluşması","Fikir bulma","Problem bulma","Yetiştirecek tohum bulma","Tohum ekecek aletleri bulma"]}', '{"index":0}', 'Fırsat çevresel ve içsel faktörlerin yarattığı ortamla ilgilidir: uygun pazar şartları, ürünü yapacak ortam, doğru zaman ve finansal destek, yani **uygun şartların oluşması**.', 1, 'Kitap, 2. ünite, soru 1 · Çıkmış soru 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-k02', 'u2', 2, 'mcq', 'original', 'Aşağıdakilerden hangisi yanlıştır?', '{"choices":["Dünyada çözülmeyi bekleyen binlerce problem var.","Bulunacak her türlü icat bulundu","Fikir uygun ortamda büyür.","Problem çözmek girişimcinin önceliğidir.","Probleme çözüm üretmek girişimciliğin sadece ilk adımıdır."]}', '{"index":1}', 'Etrafımızda çözülmesi gereken on binlerce problem vardır; problemleri kanıksamak inovasyonun en büyük düşmanıdır. "Her icat bulundu" yanlıştır.', 1, 'Kitap, 2. ünite, soru 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-k03', 'u2', 2, 'mcq', 'original', 'Müşteri keşfi sırasında aşağıdakilerden hangisi asla sorulmaz?', '{"choices":["Köpeğinizle yaşamanın ne gibi sıkıntıları var?","Köpeğiniz olması nasıl bir duygu?","Köpeğiniz kötü kokuyorsa ne yapıyorsunuz?","Köpeğinizin kötü kokmaması için şampuan çıkardık, alır mıydınız?","Köpeğiniz tüy döküyor mu?"]}', '{"index":3}', 'Müşteri keşfinin ilk kuralı: "Şöyle bir ürünümüz var, kullanır mısınız?" diye **doğrudan sormayın**. Kişi sizi kırmamak için evet der ve hiçbir şey öğrenmezsiniz.', 1, 'Kitap, 2. ünite, soru 3 · Çıkmış soru 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-k04', 'u2', 2, 'mcq', 'original', 'Aşağıdakilerden hangisi müşterilerin “Yapılacak İşler Yönetimine” uygundur?', '{"choices":["Müzik dinlemek","MP3 dinlemek","CD dinlemek","Radyo dinlemek","Mobil uygulamadan şarkı dinlemek"]}', '{"index":0}', 'Yapılacak işler (jobs to be done) yöntemi araçlara değil yapılmak istenen işe odaklanır. MP3, CD, radyo birer araçtır; asıl iş **müzik dinlemek**tir.', 1, 'Kitap, 2. ünite, soru 4', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-k05', 'u2', 2, 'mcq', 'original', 'Aşağıdakilerden hangisi temel bir inovasyon kaynağı değildir?', '{"choices":["Müşteri","Teknoloji","Pazar Trendleri","Regülasyonlar","Aileniz"]}', '{"index":4}', 'İnovasyonun üç ana kaynağı müşteri, teknoloji ve pazar trendleridir; regülasyonlar da fırsat doğurur. **Aileniz** bir inovasyon kaynağı değildir.', 1, 'Kitap, 2. ünite, soru 5 · Çıkmış soru 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-k06', 'u2', 2, 'mcq', 'original', 'Aşağıdakilerden hangisi inovasyon çeşidi değildir?', '{"choices":["İş Modeli","Organizasyonel","Satış Kanalı","Müşteri Deneyimi","Fiyat Değişikliği"]}', '{"index":4}', 'İnovasyon iş modeli, organizasyonel, iş ağı, ürün performansı, satış kanalı, müşteri deneyimi ve ürün sunumu alanlarında yapılabilir. Tek başına **fiyat değişikliği** bir inovasyon çeşidi değildir.', 1, 'Kitap, 2. ünite, soru 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-k07', 'u2', 2, 'mcq', 'original', 'Aşağıdakilerden hangisi yanlıştır?', '{"choices":["Bir çok başarılı girişim ilk günkü halini korumuştur.","İyi bir fikir bulduysak öncelikle test etmeliyiz.","Fırsatlar imkanlarla ve çevre şartlarıyla ilgilidir.","Problem keşfetmek ve çözüm üretmek girişimcinin ilk adımıdır.","Bir çok başarısız girişim ihtiyaç olmadığından değil parasızlıktan kapanmıştır."]}', '{"index":0}', 'Birçok girişim ilk gününe göre büyük evrim geçirmiştir; Facebook örneğinde olduğu gibi. "İlk günkü halini korumuştur" yanlıştır.', 2, 'Kitap, 2. ünite, soru 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-k08', 'u2', 2, 'mcq', 'original', 'Aşağıdakilerden hangisi girişimci için bir fırsat olabilir?', '{"choices":["Güneş enerjisi cihaz maliyetlerinin düşmesi","İyi bir fikir bulmak","İyi bir ihtiyaç görmek","İyi bir ortak bulmak","İyi bir girişim adı bulmak"]}', '{"index":0}', 'Güneş panellerinin 1970''lere göre yaklaşık 100 kat ucuzlaması, maliyetini zor çıkaran bir teknolojiyi kârlı hale getirdiği için bir **fırsat**tır. Fikir ve ihtiyaç fırsatla aynı şey değildir.', 1, 'Kitap, 2. ünite, soru 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-k09', 'u2', 2, 'mcq', 'original', 'Aşağıdakilerden hangisi doğrudur?', '{"choices":["Girişimcinin bulduğu fikir iyiyse zaten başarılı olur.","Girişimcilik tamamen finansman bulmakla ilgilidir.","Girişimcilikte başarısızlığın ana sebebi iyi bir ürün yapamamakla ilgilidir.","Girişimcilikte ilk adım böyle bir ihtiyaç ve pazar olup olmadığını test etmektir.","Girişimcinin kendisi iyiyse girişim zaten başarılı olur."]}', '{"index":3}', 'İlk adım, böyle bir **ihtiyaç ve pazar olup olmadığını test etmek**tir; müşteri keşfi bunun için yapılır.', 1, 'Kitap, 2. ünite, soru 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-k10', 'u2', 2, 'mcq', 'original', 'Aşağıdakilerden hangisi teknolojinin gelişmesi ile ortaya çıkmış bir inovasyondur?', '{"choices":["3 boyutlu yazıcılar","Sosyal ağlar","Arama motorları","Haber siteleri","Teknoloji siteleri"]}', '{"index":0}', 'Kitap teknolojik gelişmeleri takip etme başlığında **üç boyutlu yazıcıları** örnek verir: kırılan parçayı bir ay beklemek yerine birkaç saatte basmak mümkün olur.', 1, 'Kitap, 2. ünite, soru 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-fikir-tohum', 'u2', 2, 'mcq', 'derived', 'Kitapta "bir ürüne ya da hizmete dönüşeceği öngörülen tohum" olarak tanımlanan kavram hangisidir?', '{"choices":["Fikir","Fırsat","Problem","İhtiyaç"]}', '{"index":0}', '**Fikir** bir tohumdur; sebzeye, ağaca dönüşmediği sürece anlam ifade etmez.', 1, '2. ünite, Fikir, fırsat, problem ve ihtiyaç', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-problem-tanim', 'u2', 2, 'mcq', 'derived', 'Potansiyel bir müşterinin ya da müşteri grubunun yaşadığı sıkıntıya ne ad verilir?', '{"choices":["Problem","Fırsat","Talep","Trend"]}', '{"index":0}', 'Bu, **problem**in tanımıdır; örneğin akıllı telefon şarjının çabuk bitmesi.', 1, '2. ünite, Fikir, fırsat, problem ve ihtiyaç', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-ihtiyac-tanim', 'u2', 2, 'fill', 'derived', 'Bir kişinin eksikliğini hissettiği şeye ____ denir.', '{"blanks":1}', '{"blanks":[["ihtiyaç","ihtiyac","gereksinim"]]}', '**İhtiyaç** kişinin eksikliğini hissettiği şeydir; ancak doğrudan ihtiyacı karşılamaya çalışmak girişimciyi yanlış yola götürebilir.', 1, '2. ünite, Fikir, fırsat, problem ve ihtiyaç', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-problemi-sabit', 'u2', 2, 'mcq', 'derived', 'Uzmanların "problemi sabit tutup çözüm seçeneklerinin üstünden geçin" önerisi ne anlatır?', '{"choices":["Tek bir çözüme takılmak yerine aynı probleme farklı çözümler aranmalıdır","Problem hiç değiştirilmemeli, ilk çözüm uygulanmalıdır","Önce çözüm bulunur, sonra ona uygun problem aranır","Problemler çözülmeden bırakılmalıdır"]}', '{"index":0}', 'Problemle (ör. şarjın çabuk bitmesi) ilgilenirsen yeni pil teknolojisi ya da taşınabilir batarya gibi **farklı çözümler** arasında rahat ilerlersin.', 2, '2. ünite, Fikir, fırsat, problem ve ihtiyaç', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-orijinal-fikir', 'u2', 2, 'tf', 'derived', 'Kitaba göre bir fikrin başarılı olması için daha önce hiç düşünülmemiş, tamamen orijinal olması şarttır.', '{}', '{"value":false}', 'Yanlış. Fikrin daha önce düşünülüp düşünülmediğinin önemi yoktur; önemli olan onu doğru zamanda, doğru yerde, doğru şekilde hayata geçirmektir.', 1, '2. ünite, Fikir, fırsat, problem ve ihtiyaç', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-vale', 'u2', 2, 'mcq', 'derived', 'Alışveriş merkezlerinin vale hizmeti sunmaya başlaması kitapta hangi gözleme dayanan bir fırsat örneğidir?', '{"choices":["Çalışan kesimin zaman problemi olduğunun fark edilmesi","Otopark yönetmeliğinin yeni bir yasayla değişmesi","Elektrikli araçların şehirlerde hızla yaygınlaşması","Akaryakıt fiyatlarının uzun süre düşük kalması"]}', '{"index":0}', 'Çalışanların her şeye vakit bulamaması zamanı değerli kılmıştır; vale hizmeti bu **zaman problemi**nin fırsata çevrilmesidir.', 2, '2. ünite, Fikir, fırsat, problem ve ihtiyaç', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-uber', 'u2', 2, 'mcq', 'derived', 'Kitabın girişinde Uber ve Airbnb örnekleriyle vurgulanan düşünce hangisidir?', '{"choices":["Doğru problemi bulup iyi çözdükçe, varlığa sahip olmadan da büyük girişimler kurulabilir","Büyük girişim kurmak için önce çok sayıda araç ya da bina satın almak gerekir","Ulaşım ve konaklama sektörlerinde fırsat kalmamıştır","Yalnızca mucitler girişimci olabilir"]}', '{"index":0}', 'Uber''in arabası, Airbnb''nin oteli yoktur; iki tarafı buluşturarak **problemi çözerler**. Girişimci olmak için mucit olmak gerekmez.', 2, '2. ünite, Fikir, fırsat, problem ve ihtiyaç', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-kesif-tanim', 'u2', 2, 'mcq', 'derived', 'Müşterilerin doğru ihtiyaçlarını, en çok acısını hissettikleri problemi bulma sürecine ne ad verilir?', '{"choices":["Müşteri keşfi","Pazar bölümlendirme","Tasarımsal düşünme","Talep tahmini"]}', '{"index":0}', 'Bu sürece **müşteri keşfi** denir; müşterinin acılarını bulmak girişimin başarısı için kritiktir.', 1, '2. ünite, Müşteri keşfi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-kesif-kural', 'u2', 2, 'mcq', 'derived', 'Aşağıdakilerden hangisi müşteri keşfi görüşmelerinde önerilen davranışlardan **değildir**?', '{"choices":["Görüşmede ürünü uzun uzun anlatıp karşı tarafı ikna etmek","Karşı tarafı konuşturmak","Söylediklerinden çok yaptıklarıyla ilgilenmek","Olabildiğince çok kişiyle görüşmek"]}', '{"index":0}', 'Görüşmede **siz çok konuşmamalısınız**; karşı tarafı konuşturmalı, hikâyelerini dinlemelisiniz.', 2, '2. ünite, Müşteri keşfi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-hikaye', 'u2', 2, 'tf', 'derived', 'Müşteri keşfinde kişinin yaşadığı olayları anlattığı somut hikâyeler (ör. tasmanın elinden kayması), genel cevaplardan daha değerlidir.', '{}', '{"value":true}', 'Doğru. Hikâyeler yeni problemleri ve fırsatları (ör. kayan tasma tutacakları) ortaya çıkarabilir.', 1, '2. ünite, Müşteri keşfi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-cevabi-belli', 'u2', 2, 'mcq', 'derived', '"Köpeğinizin kötü kokmasını istemezsiniz, değil mi?" sorusu müşteri keşfinde neden sorulmamalıdır?', '{"choices":["Cevabı zaten belli olduğu için hiçbir şey öğretmez","Fazla kişisel bir soru olduğu için","Yasal olarak yasak olduğu için","Köpek sahipleri bu konuyu bilmediği için"]}', '{"index":0}', 'Kural: **cevabını az çok bildiğiniz sorular sormayın.** Kimse "arada kötü koksa iyi olur" demez.', 2, '2. ünite, Müşteri keşfi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-tasarimsal-sira', 'u2', 2, 'mcq', 'derived', 'Tasarımsal düşünme yönteminin adımları hangi sırayla ilerler?', '{"choices":["Empati → Problem → Fikir → Prototip ve test","Prototip → Empati → Fikir → Problem ve test","Fikir → Prototip → Empati → Problem tanımı","Problem → Satış → Empati → Prototip ve test"]}', '{"index":0}', 'Önce **empati** kurulur, sonra problemlere odaklanılır, fikir geliştirilir ve **prototip**le ihtiyacın karşılanıp karşılanmadığı test edilir.', 2, '2. ünite, Tasarımsal düşünme ve yapılacak işler yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-cekic', 'u2', 2, 'mcq', 'derived', '"Duvara fotoğraf asmak isteyen için çekiç almaya değil duvarda delik açmaya odaklanılmalıdır" örneği hangi yöntemi anlatır?', '{"choices":["Yapılacak işler","Tasarımsal düşünme","Müşteri keşfi","Paylaşım ekonomisi"]}', '{"index":0}', '**Yapılacak işler** yöntemi araçlara değil yapılmak istenen işe odaklanır.', 2, '2. ünite, Tasarımsal düşünme ve yapılacak işler yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-ulasim-is', 'u2', 2, 'mcq', 'derived', 'Yapılacak işler yöntemine göre Uber ve Lyft gibi firmaların odaklandığı asıl ihtiyaç hangisidir?', '{"choices":["Bir yerden bir yere gitmek","Daha çok araç satın almak","Lüks otomobile sahip olmak","Akaryakıt tasarrufu"]}', '{"index":0}', 'Otomotiv sektörü daha çok araç satmaya odaklanırken bu firmalar asıl işin **bir yerden bir yere gitmek** olduğunu görmüştür.', 2, '2. ünite, Tasarımsal düşünme ve yapılacak işler yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-kuafor', 'u2', 2, 'tf', 'derived', 'Kadınların asıl motivasyonunun saçını güzel kestirmek olduğunu fark edip eve kuaför hizmeti sunan bir uygulama yapmak, yapılacak işler yöntemine uygun bir düşüncedir.', '{}', '{"value":true}', 'Doğru. İhtiyaç kuaför salonu değil, saçın güzel kesilmesidir; araç değişebilir.', 1, '2. ünite, Tasarımsal düşünme ve yapılacak işler yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-inovasyon-tanim', 'u2', 2, 'fill', 'derived', 'Kitaba göre inovasyon "işe ____ yenilik" demektir.', '{"blanks":1}', '{"blanks":[["yarar"]]}', 'İnovasyon **işe yarar** yeniliktir; her yenilik inovasyon değildir.', 1, '2. ünite, İnovasyon çeşitleri ve kaynakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-starbucks', 'u2', 2, 'mcq', 'derived', 'Starbucks''ın şubelerini ev ortamına benzeterek farklı bir hizmet sunması hangi inovasyon çeşidine örnektir?', '{"choices":["Müşteri deneyimi","Satış kanalı","Organizasyonel","İş ağı"]}', '{"index":0}', 'Bu **müşteri deneyimi** inovasyonudur.', 2, '2. ünite, İnovasyon çeşitleri ve kaynakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-acik-kaynak', 'u2', 2, 'mcq', 'derived', 'Temel özellikleri ücretsiz sunup ekstra özellikleri ücretlendirmek ya da açık kaynak ürün geliştirip danışmanlıktan gelir elde etmek hangi inovasyon çeşidine örnektir?', '{"choices":["İş modeli","Müşteri deneyimi","Ürün performansı","Satış kanalı"]}', '{"index":0}', 'Bunlar **iş modeli** inovasyonudur.', 2, '2. ünite, İnovasyon çeşitleri ve kaynakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-dis-kaynak', 'u2', 2, 'mcq', 'derived', 'Dış kaynak kullanımı ve dijital araçların daha çok kullanılmasıyla pazarda avantaj sağlamak hangi inovasyon çeşidindedir?', '{"choices":["Organizasyonel","Satış kanalı","Ürün sunumu","İş modeli"]}', '{"index":0}', 'Bu **organizasyonel** inovasyondur.', 2, '2. ünite, İnovasyon çeşitleri ve kaynakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-hibrit', 'u2', 2, 'mcq', 'derived', 'Kitaba göre en uzun vadede işe yarayan inovasyon kaynağı hangisidir?', '{"choices":["Kopyalanması zor hibrit kaynaklı inovasyonlar","Yalnızca müşteri kaynaklı inovasyonlar","Yalnızca pazar trendi kaynaklı inovasyonlar","Global projelerin birebir kopyası"]}', '{"index":0}', 'Müşteri odaklı inovasyon önde görünse de **kopyalanması zor hibrit** inovasyonlar (ör. iPhone: teknoloji + müşteri sorunu + trend) en uzun vadede işe yarar.', 3, '2. ünite, İnovasyon çeşitleri ve kaynakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-yerel-versiyon', 'u2', 2, 'mcq', 'derived', 'Global projelerin (birebir kopyası değil) yerel versiyonlarını yapmak hangi inovasyon kaynağına örnektir?', '{"choices":["Pazar trendleri","Teknoloji","Müşteri","Regülasyon"]}', '{"index":0}', 'Bu **pazar trendleri** kaynaklı inovasyonun en büyük örneğidir.', 2, '2. ünite, İnovasyon çeşitleri ve kaynakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-ford', 'u2', 2, 'mcq', 'derived', '"Müşterilere ne istediklerini sorsaydım daha hızlı bir at isterlerdi" sözü inovasyonla ilgili hangi dersi verir?', '{"choices":["Müşterinin çözümüne değil ihtiyacına odaklanılmalı","Müşteri hiç dinlenmemeli, sezgiye güvenilmeli","At yetiştiriciliği hâlâ büyük bir pazar fırsatıdır","Teknoloji müşterinin ilgisini çekmeyen bir konudur"]}', '{"index":0}', 'Müşteri ihtiyacını yanlış tanımlayabilir; inovasyon için müşterinin **çözümlerine değil ihtiyaç ve sorunlarına** odaklanılır.', 2, '2. ünite, İnovasyon çeşitleri ve kaynakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-paylasim', 'u2', 2, 'mcq', 'derived', 'Sahibinin yüzde yüz kullanmadığı her şeyin başkaları tarafından da kullanılabilir hale getirilmesine dayanan pazar trendi hangisidir?', '{"choices":["Paylaşım ekonomisi","Jenerasyon takibi","Regülasyon","Nanoteknoloji"]}', '{"index":0}', '**Paylaşım ekonomisi**: ev, araba, depo, ofis odası paylaşmak gibi.', 1, '2. ünite, Trendleri takip etme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-odeme-lisans', 'u2', 2, 'mcq', 'derived', 'BDDK''nın Ödeme Kuruluşları lisansıyla faturaların bakkaldan da ödenebilir hale gelmesi hangi trend başlığına örnektir?', '{"choices":["Regülasyonları takip etme","Jenerasyonları takip etme","Teknolojik gelişmeleri takip etme","Paylaşım ekonomisi"]}', '{"index":0}', 'Devletin çıkardığı düzenlemeler fırsat doğurur; bu **regülasyon** kaynaklı bir fırsattır.', 2, '2. ünite, Trendleri takip etme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-jenerasyon', 'u2', 2, 'mcq', 'derived', 'Yeni nesil bankaların gençlerin sosyal medya alışkanlıklarını inceleyip daha görsel ve sosyal uygulamalar çıkarması hangi başlıkla ilgilidir?', '{"choices":["Jenerasyonları takip etme","Regülasyonları takip etme","Paylaşım ekonomisi","Müşteri deneyimi inovasyonu değil, maliyet düşürme"]}', '{"index":0}', 'Bu, **jenerasyonları** anlamanın iş geliştirmedeki önemine örnektir.', 2, '2. ünite, Trendleri takip etme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u2-t-teknoloji-problem', 'u2', 2, 'tf', 'derived', 'Kitaba göre teknolojik gelişmelerle gözlemlenen problemleri buluşturmak girişimcinin görevidir.', '{}', '{"value":true}', 'Doğru. Örneğin nesne tanıyan telefon kamerasıyla görme engelliler için yol gösteren bir uygulama geliştirilebilir.', 1, '2. ünite, Trendleri takip etme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-k01', 'u3', 3, 'mcq', 'original', 'Aşağıdakilerden hangisi iş fikrinin başarısız olmasının sebeplerinden biri değildir?', '{"choices":["Rekabetçi bir iş modeli kurgulamamak","Gereğinden fazla sermayeyi işe yatırmak","Hedef müşteri kitlesini çok geniş tutmak","Doğru ekibi kuramamak","Kaynak eksikliğine rağmen harekete geçmek"]}', '{"index":4}', 'Girişimci kaynakları kısıtlı olsa da harekete geçen kişidir. Rekabetçi olmayan iş modeli, aşırı sermaye, çok geniş hedef kitle ve yanlış ekip ise başarısızlık sebepleridir.', 2, 'Kitap, 3. ünite, soru 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-k02', 'u3', 3, 'mcq', 'original', 'Hangisi yapılabilirlik analizinin bileşenlerinden değildir?', '{"choices":["Pazardaki ihtiyaçları tespit etmek","Pazardaki talebi tespit etmek","Ekip üyelerinin hobilerine zaman ayırması","Kurucu takımın geçmişi","Yatırımın geri dönüşünü hesaplamak"]}', '{"index":2}', 'Yapılabilirlik analizi fikir-kurucu uyumu (ekibin geçmişi), finansal değerlendirme (geri dönüş) ve pazar (ihtiyaç, talep) başlıklarından oluşur. **Hobilere zaman ayırmak** bunlardan biri değildir.', 1, 'Kitap, 3. ünite, soru 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-k03', 'u3', 3, 'mcq', 'original', 'Hangisi vizyoner kişilerin en belirgin ortak özelliğidir?', '{"choices":["Planlı olmaları","Akla yatan projeler ve fikirler üretmeleri","Deli, çatlak veya çılgın olarak nitelendirilmeleri","İyi bir finansal geliri ne pahasına olsun reddetmemeleri","Vizyona nasıl ulaşacaklarına dair somut bir planlarının olması"]}', '{"index":2}', 'Vizyoner kişiler başkalarının göremediğini gördükleri için çevreleri tarafından **deli, çatlak ya da çılgın** olarak görülür. Linda Rottenberg''in deyişiyle "delilik bir iltifattır".', 1, 'Kitap, 3. ünite, soru 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-k04', 'u3', 3, 'mcq', 'original', '"Müşteriler, bir ürünü satın almazlar, ancak o ürünün sağladığı faydayı satın alırlar." Değer yaratmanın ve pazarlama bakışının temelini oluşturan bu görüşün eksikliğine ne isim verilir?', '{"choices":["Ürün geliştirme","Pazarlama körlüğü","Ürün körlüğü","Müşteri değeri","Üretim körlüğü"]}', '{"index":1}', 'Theodore Levitt''in 1960''ta tanımladığı **pazarlama körlüğü (miyopluğu)**: ürüne odaklanıp müşterinin aldığı faydayı görememek. Matkap alan kişi aslında duvarda bir delik ister.', 1, 'Kitap, 3. ünite, soru 4', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-k05', 'u3', 3, 'mcq', 'original', 'Hangisi iş fikrinin finansal olarak değerlendirilmesi ile ilgili söylenemez?', '{"choices":["Gelir gider tablosu geleceğe dair varsayımlardan oluşur","Başabaş noktası gelirlerin giderlere eşit olması için gereken noktayı ifade eder","Yatırım geri dönüş süreci, ilk yatırım tutarının ne zaman yatırılacağını ifade eder","İlk yatırım tutarına aynı zamanda başlangıç sermayesi adı verilir.","Yatırım geri dönüş süresi, elde edilen net kârın ilk yatırım tutarını ne zaman karşılayacağını ifade eder"]}', '{"index":3}', 'Kitabın cevap anahtarı **D** şıkkını verir. Gelir gider tablosu varsayımlara dayanır, başabaş noktası gelirin gideri karşıladığı noktadır, geri dönüş süresi net kârın ilk yatırımı ne zaman karşılayacağını gösterir.', 3, 'Kitap, 3. ünite, soru 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-k06', 'u3', 3, 'mcq', 'original', 'Girişimcilerin ilk heyecan aşamasından sonra vardıkları yerin adı hangisidir?', '{"choices":["Heyecan vadisi","Başarı platosu","Umutsuzluk köprüsü","Yenilik çeşmesi","Ölüm vadisi"]}', '{"index":4}', 'İlk heyecandan sonra gelirler giderleri karşılamadan önce nakdin eridiği döneme **ölüm vadisi** denir; girişimlerin yarısından fazlası burada kapanır.', 1, 'Kitap, 3. ünite, soru 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-k07', 'u3', 3, 'mcq', 'original', 'Henüz hayata geçmemiş bir iş fikri için pazar tiplerinden hangisinin ilk olarak hedeflenmesi gerekir?', '{"choices":["Toplam mevcut pazar","Erişilebilir mevcut pazar","İlk hedef pazar","Yeni pazar","Yeniden incelenmiş pazar"]}', '{"index":2}', 'Girişim önce gerçekten ulaşabileceği küçük bir dilimi, yani **ilk hedef pazarı (İHP)** hedeflemelidir. TMP ve EMP daha geniş, sonraki hedeflerdir.', 1, 'Kitap, 3. ünite, soru 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-k08', 'u3', 3, 'mcq', 'original', 'Çoğunluk müşterileri ilk müşterilerden ayıran en önemli fark hangisidir?', '{"choices":["Sürüyü takip etmeleri","Yenilikçi olmaları","Sürünün önünde gitmeleri","Sadece gerekli olduğunda hareket etmeleri","Kuşkucu olmaları"]}', '{"index":0}', 'İlk müşteriler (yenilikçiler, erken benimseyenler) sürünün önünde gitmek ister. Erken çoğunluk ise pragmatisttir: "sürüden ayrılmayalım" der, yani **sürüyü takip eder**.', 1, 'Kitap, 3. ünite, soru 8 · Çıkmış soru 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-k09', 'u3', 3, 'mcq', 'original', 'İhtiyaç tiplerinden hangisi yenilikçi ürünler geliştirmek için en büyük fırsatı sunar?', '{"choices":["Doğrusal ihtiyaçlar","Sabit ihtiyaçlar","Zorunlu ihtiyaçlar","Gizli ihtiyaçlar","Olsa iyi olur ihtiyaçlar"]}', '{"index":3}', '**Gizli ihtiyaçları** bulmak zordur ama keşfedildiğinde rekabeti anlamsız kılar ve müşteri memnuniyeti çok yüksek olur.', 1, 'Kitap, 3. ünite, soru 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-k10', 'u3', 3, 'mcq', 'original', 'Gelecek trendlerinin zamana göre talebi nasıl değişir?', '{"choices":["Bir anda talep artar sonra birden düşer","Talep hızlı artar, yavaş düşer","Talep önce hiç yoktur, sonra biraz olur ve orada kalır","Talep yavaş yavaş ve zamana yayılarak artar","Talep yavaş artar, hızlı düşer"]}', '{"index":3}', 'Hevesin talebi birden yükselip birden düşer, modanın döngüsü belirsizdir. **Trendlerde talep yavaş yavaş ve zamana yayılarak artar**, bu yüzden öngörülebilirdir.', 1, 'Kitap, 3. ünite, soru 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-c09', 'u3', 3, 'mcq', 'original', 'Aşağıdakilerden hangisi girişimcinin hangi ayda, ne kadar kişiye, ne kadar ciro ile ulaşırsa yatırdığı parayı çıkarabileceğini gösterir?', '{"choices":["Aktif noktası","Şirket noktası","Net kâr noktası","Şirket değer noktası","Başabaş noktası"]}', '{"index":4}', '**Başabaş noktası**, gelirlerin giderleri karşıladığı noktadır; girişimcinin hangi ayda, kaç müşteri ve ne kadar ciroyla parasını çıkaracağını gösterir.', 1, 'Çıkmış soru 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-risk-azalt', 'u3', 3, 'tf', 'derived', 'Kitaba göre iyi girişimciler riski seven ve riski büyüten kişilerdir.', '{}', '{"value":false}', 'Yanlış. İyi girişimciler riski **en aza indirmeye** çalışır; yapılabilirlik analizi de bunun aracıdır.', 1, '3. ünite, Yapılabilirlik analizi ve başarısızlık sebepleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-analiz-amac', 'u3', 3, 'mcq', 'derived', 'Yapılabilirlik analizinin temel amacı hangisidir?', '{"choices":["Fikri hayata geçirmeden önce başarı şansını ve risklerini değerlendirmek","İşletmenin yıllık vergi beyannamesini hazırlamak","Şirketin ticaret siciline kaydını eksiksiz biçimde tamamlamak","Ürünün ilk yıl reklam bütçesini ayrıntılı olarak kesinleştirmek"]}', '{"index":0}', 'Yapılabilirlik analizi fikrin ekip, finans ve pazar açısından **yapılabilir olup olmadığını** önceden sınar ve riski azaltır.', 1, '3. ünite, Yapılabilirlik analizi ve başarısızlık sebepleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-uc-baslik', 'u3', 3, 'mcq', 'derived', 'Kitapta yapılabilirlik analizi hangi üç ana başlık altında ele alınır?', '{"choices":["Fikir-kurucu uyumu, finansal değerlendirme, pazar","Üretim planı, lojistik ve insan kaynakları","Vergi, sosyal sigorta ve muhasebe kayıtları","Reklam, ambalaj tasarımı ve dağıtım"]}', '{"index":0}', 'Kitap analizi **fikir-kurucu uyumu**, **finansal değerlendirme** ve **pazar** (ihtiyaç, talep, trend, teknoloji) başlıklarıyla anlatır.', 2, '3. ünite, Yapılabilirlik analizi ve başarısızlık sebepleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-uyum-basliklar', 'u3', 3, 'mcq', 'derived', 'Fikir-kurucu uyumu değerlendirilirken kitapta ele alınan dört başlıktan biri değildir?', '{"choices":["Kurucuların hobileri","Kurucuların geçmişi","Vizyon","İş bölümü"]}', '{"index":0}', 'Dört başlık **geçmiş, vizyon, iş bölümü ve ortaklık**tır. Hobiler bu başlıklardan biri değildir.', 2, '3. ünite, Fikir-kurucu uyumu, vizyon ve ortaklık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-ideal-ekip', 'u3', 3, 'mcq', 'derived', 'Kitapta (Butigo örneğiyle) ideal kurucu ekip hangi üç rolün birleşimi olarak anlatılır?', '{"choices":["Mühendis, yönetici ve tasarımcı","Avukat, muhasebeci ve bankacı","Satıcı, depocu ve kurye","Yatırımcı, danışman ve mentor"]}', '{"index":0}', 'Ürünü yapan bir **mühendis**, işi yöneten bir **yönetici** ve ürünü kullanıcıya uygun hale getiren bir **tasarımcı** dengeli bir ekip oluşturur.', 2, '3. ünite, Fikir-kurucu uyumu, vizyon ve ortaklık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-hisse-katki', 'u3', 3, 'mcq', 'derived', 'Kitaba göre kurucular arasında hisse dağıtımı neye göre yapılmalıdır?', '{"choices":["Her kurucunun işe kattığı değer ve üstlendiği riske göre","Kurucuların yaşına ve kıdemine göre","Her kurucuya her durumda eşit pay verilerek","Fikri ilk kimin söylediğine göre"]}', '{"index":0}', 'Ortaklıkta paylar her kurucunun **katkısı ve üstlendiği risk** oranında belirlenmelidir; bunu baştan konuşmak ileride çıkacak anlaşmazlıkları önler.', 2, '3. ünite, Fikir-kurucu uyumu, vizyon ve ortaklık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-arkadas-ortak', 'u3', 3, 'tf', 'derived', 'Kitaba göre yakın arkadaşlarla ortaklık kurmak hiçbir risk taşımaz.', '{}', '{"value":false}', 'Yanlış. Arkadaşlıkla ortaklık farklıdır; arkadaşla ortaklık kurmak hem işi hem arkadaşlığı riske atabilir.', 1, '3. ünite, Fikir-kurucu uyumu, vizyon ve ortaklık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-levitt', 'u3', 3, 'mcq', 'derived', '"Matkap alan kişi aslında matkap değil, duvarda bir delik ister." Bu örnek hangi kavramı açıklar?', '{"choices":["Pazarlama körlüğü","Ölüm vadisi","Başabaş noktası","İlk hedef pazar"]}', '{"index":0}', 'Bu, **pazarlama körlüğü (miyopluğu)** kavramının klasik örneğidir: müşteri ürünü değil, sağladığı faydayı satın alır.', 2, '3. ünite, Fikir-kurucu uyumu, vizyon ve ortaklık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-vizyon-yol', 'u3', 3, 'mcq', 'derived', 'Kitapta Chobani''nin kurucusu Hamdi Ulukaya''ya ait olarak verilen ve vizyonu anlatan söz hangisidir?', '{"choices":["Yürümeye başladığınızda yol görünür.","Delilik bir iltifattır.","Önce plan, sonra eylem gelir.","Riski olmayan işe girilmez."]}', '{"index":0}', 'Ulukaya''nın sözü "**Yürümeye başladığınızda yol görünür**"dür. "Delilik bir iltifattır" sözü ise Linda Rottenberg''e aittir.', 2, '3. ünite, Fikir-kurucu uyumu, vizyon ve ortaklık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-basabas-tanim', 'u3', 3, 'fill', 'derived', 'Gelirlerin giderlere eşit olduğu, girişimin ne kâr ne zarar ettiği noktaya ____ noktası denir.', '{"blanks":1}', '{"blanks":[["başabaş","basabas","başa baş","basa bas"]]}', '**Başabaş noktası**: gelir = gider. Bu noktadan sonra girişim kâr etmeye başlar.', 1, '3. ünite, Finansal değerlendirme, başabaş ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-geri-odeme', 'u3', 3, 'mcq', 'derived', '120 bin TL ile kurulan bir girişim 4. aydan itibaren her ay 8 bin TL net kâr ediyor. İlk 3 ay kâr yoksa ilk yatırım kaçıncı ayın sonunda geri döner?', '{"choices":["18. ay","15. ay","12. ay","20. ay"]}', '{"index":0}', '120 / 8 = 15 ay kâr gerekir; kâr 4. ayda başladığı için 3 + 15 = **18. ayın** sonunda yatırım geri döner.', 3, '3. ünite, Finansal değerlendirme, başabaş ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-senaryo', 'u3', 3, 'mcq', 'derived', 'Kitaba göre gelir gider tablosu hazırlanırken hangi üç senaryo düşünülmelidir?', '{"choices":["Kötümser, gerçekçi ve iyimser","Kısa, orta ve uzun vadeli","Yerel, ulusal ve uluslararası","Sabit, değişken ve karma"]}', '{"index":0}', 'Varsayımlar belirsiz olduğu için tablo **kötümser, gerçekçi ve iyimser** senaryolarla hazırlanır.', 2, '3. ünite, Finansal değerlendirme, başabaş ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-bes-yil', 'u3', 3, 'mcq', 'derived', 'Kitaba göre yatırımcılar genellikle gelir gider tablosunu hangi süre ve ayrıntıda görmek ister?', '{"choices":["5 yıllık, ilk yılı aylık","1 yıllık, yalnız yıl sonu toplamı","10 yıllık, yalnız yıllık","Sadece ilk ayın tahmini"]}', '{"index":0}', 'Yatırımcılar **5 yıllık** bir tablo, ilk yıl için de **aylık** kırılım bekler.', 2, '3. ünite, Finansal değerlendirme, başabaş ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-hisse-sermaye', 'u3', 3, 'tf', 'derived', 'Kitaba göre girişimcinin sermaye bulmasının en etkili yollarından biri yatırımcıya hisse vermektir.', '{}', '{"value":true}', 'Doğru. Hisse karşılığı yatırım almak sermaye bulmanın en etkili yollarındandır; bunun için girişimin değerlemesi yapılır.', 2, '3. ünite, Finansal değerlendirme, başabaş ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-olum-orani', 'u3', 3, 'mcq', 'derived', 'Kitaba göre girişimlerin ne kadarı ölüm vadisinde kapanır?', '{"choices":["Yarısından fazlası","Yüzde birinden azı","Yaklaşık onda biri","Hiçbiri, ölüm vadisi bir efsanedir"]}', '{"index":0}', 'Girişimlerin **yarısından fazlası** nakdin eridiği ölüm vadisi döneminde kapanır.', 2, '3. ünite, Finansal değerlendirme, başabaş ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-cember', 'u3', 3, 'mcq', 'derived', 'Kitapta değerleme örneği olarak verilen cember.net hangi şirkete satılmıştır?', '{"choices":["Xing","LinkedIn","Facebook","Yahoo"]}', '{"index":0}', 'Türk iş ağı cember.net, Alman **Xing** şirketine yaklaşık 5 milyon avroya satılmıştır.', 3, '3. ünite, Finansal değerlendirme, başabaş ve ölüm vadisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-pazar-sira', 'u3', 3, 'mcq', 'derived', 'Pazar tiplerinin büyükten küçüğe doğru sıralaması hangisidir?', '{"choices":["Toplam mevcut pazar, erişilebilir mevcut pazar, ilk hedef pazar","İlk hedef pazar, toplam mevcut pazar, erişilebilir mevcut pazar","Erişilebilir mevcut pazar, ilk hedef pazar, toplam mevcut pazar","İlk hedef pazar, erişilebilir mevcut pazar, toplam mevcut pazar"]}', '{"index":0}', '**TMP** en geniştir; içinde girişimin ulaşabileceği **EMP**, onun içinde de ilk hedeflenen **İHP** yer alır.', 2, '3. ünite, Pazar tipleri (TMP, EMP, İHP)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-tmp', 'u3', 3, 'mcq', 'derived', 'Bir ürünün hitap edebileceği tüm potansiyel müşterilerin oluşturduğu pazar hangisidir?', '{"choices":["Toplam mevcut pazar","Erişilebilir mevcut pazar","İlk hedef pazar","Niş pazar"]}', '{"index":0}', '**Toplam mevcut pazar (TMP)** ürünün çözdüğü problemi yaşayan herkesi kapsar.', 2, '3. ünite, Pazar tipleri (TMP, EMP, İHP)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-otel', 'u3', 3, 'mcq', 'derived', 'Kitaptaki İstanbul otel örneğinde 535 otel hangi pazarı gösterir?', '{"choices":["Toplam mevcut pazar","Erişilebilir mevcut pazar","İlk hedef pazar","Yeni pazar"]}', '{"index":0}', '535 otel **TMP**''dir; ulaşılabilir 247 otel EMP, ilk hedeflenen yaklaşık 120 otel İHP''dir.', 3, '3. ünite, Pazar tipleri (TMP, EMP, İHP)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-pazaryeri', 'u3', 3, 'mcq', 'derived', 'Alıcı ve satıcıyı bir araya getirip aracıları ortadan kaldıran platformlara verilen genel ad hangisidir?', '{"choices":["Pazaryeri","Franchise","Toptancı","Bayi ağı"]}', '{"index":0}', '**Pazaryeri** iş modeli aracıları kaldırarak erişilebilirliği ve bulunabilirliği artırır; gelirini genellikle komisyondan elde eder.', 1, '3. ünite, Pazar tipleri (TMP, EMP, İHP)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-erken-benimseyen', 'u3', 3, 'mcq', 'derived', '"Sürünün önünde gidelim" diyen, vizyoner olarak tanımlanan müşteri grubu hangisidir?', '{"choices":["Erken benimseyenler","Erken çoğunluk","Geç çoğunluk","Geriden gelenler"]}', '{"index":0}', '**Erken benimseyenler** vizyonerdir ve sürünün önünde olmak ister.', 2, '3. ünite, Yeniliklerin benimsenmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-gec-cogunluk', 'u3', 3, 'mcq', 'derived', 'Yeniliği "sadece gerekli olduğunda" benimseyen, kitapta "neme lazımcılar" olarak anılan grup hangisidir?', '{"choices":["Geç çoğunluk","Yenilikçiler","Erken benimseyenler","Erken çoğunluk"]}', '{"index":0}', '**Geç çoğunluk** yeniliği ancak gerekli olduğunda kullanır.', 2, '3. ünite, Yeniliklerin benimsenmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-kuskucu', 'u3', 3, 'mcq', 'derived', '"İmkânı yok" diyerek yeniliğe en son katılan kuşkucu grup hangisidir?', '{"choices":["Geriden gelenler","Erken çoğunluk","Erken benimseyenler","Yenilikçiler"]}', '{"index":0}', '**Geriden gelenler** (kuşkucular) yeniliği en son benimser.', 1, '3. ünite, Yeniliklerin benimsenmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-ucurum', 'u3', 3, 'mcq', 'derived', 'Moore''a göre büyük uçurum hangi iki grup arasında yer alır?', '{"choices":["Erken benimseyenler ile erken çoğunluk","Yenilikçiler ile erken benimseyenler","Erken çoğunluk ile geç çoğunluk","Geç çoğunluk ile geriden gelenler"]}', '{"index":0}', '**Büyük uçurum** vizyoner erken benimseyenler ile pragmatist erken çoğunluk arasındadır; birçok girişim bu geçişi yapamaz.', 3, '3. ünite, Yeniliklerin benimsenmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-pragmatist', 'u3', 3, 'tf', 'derived', 'Erken çoğunluk, kitapta pragmatistler olarak tanımlanır.', '{}', '{"value":true}', 'Doğru. Erken çoğunluk pragmatisttir ve "sürüden ayrılmayalım" der.', 2, '3. ünite, Yeniliklerin benimsenmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-istek-talep', 'u3', 3, 'mcq', 'derived', 'Bir ürünü isteyen ama satın alma gücü yetmeyen kişinin durumu kitaba göre nasıl adlandırılır?', '{"choices":["İstek","Talep","Zorunlu ihtiyaç","Gizli ihtiyaç"]}', '{"index":0}', 'Satın alma gücüyle desteklenmeyen arzu **istek**tir; alım gücü eklenince **talep** olur.', 2, '3. ünite, İhtiyaç tipleri, trend ve teknoloji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-sabit', 'u3', 3, 'mcq', 'derived', 'Karşılandığı sürece nasıl karşılandığının önemi olmayan ihtiyaç tipi hangisidir? (Henry Ford''un siyah araba sözü örneği)', '{"choices":["Sabit ihtiyaç","Doğrusal ihtiyaç","Zorunlu ihtiyaç","Gizli ihtiyaç"]}', '{"index":0}', '**Sabit ihtiyaçta** arz talepten azdır; müşteri ürünü elde etmekle ilgilenir, rengi önemli değildir.', 2, '3. ünite, İhtiyaç tipleri, trend ve teknoloji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-dogrusal', 'u3', 3, 'mcq', 'derived', 'Daha ucuz, daha hızlı, daha iyi olma yarışına dayanan ihtiyaç tipi hangisidir?', '{"choices":["Doğrusal ihtiyaç","Sabit ihtiyaç","Gizli ihtiyaç","Zorunlu ihtiyaç"]}', '{"index":0}', '**Doğrusal ihtiyaçlarda** rekabet belirleyicidir; aynı bölgedeki iki restoranın müşteri savaşı örnektir.', 2, '3. ünite, İhtiyaç tipleri, trend ve teknoloji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-hijyen', 'u3', 3, 'mcq', 'derived', 'Karşılanınca ekstra memnuniyet yaratmayan ama eksikliği büyük memnuniyetsizlik doğuran, hijyen faktörü de denen ihtiyaç tipi hangisidir?', '{"choices":["Zorunlu ihtiyaç","Gizli ihtiyaç","Doğrusal ihtiyaç","Sabit ihtiyaç"]}', '{"index":0}', '**Zorunlu ihtiyaç**: havayolunun güvenli, okulun temiz olması gibi endüstri standardı haline gelmiş beklentiler.', 2, '3. ünite, İhtiyaç tipleri, trend ve teknoloji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-heves', 'u3', 3, 'mcq', 'derived', 'Talebi bir anda çok hızlı artıp yine bir anda kaybolan ürünlere ne ad verilir?', '{"choices":["Heves","Trend","Megatrend","Sabit ürün"]}', '{"index":0}', 'Ahizeli telefon kulaklığı gibi ürünler **heves (fad)** olarak adlandırılır.', 2, '3. ünite, İhtiyaç tipleri, trend ve teknoloji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-megatrend', 'u3', 3, 'mcq', 'derived', 'Tüm dünyayı etkileyen ve toplumsal değişikliklere yol açan gelişmelere ne ad verilir?', '{"choices":["Megatrend","Heves","Moda","Hijyen faktörü"]}', '{"index":0}', '**Megatrend**: sağlıklı ve sürdürülebilir ürünler, paylaşım ekonomisi gibi küresel eğilimler.', 2, '3. ünite, İhtiyaç tipleri, trend ve teknoloji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-moore', 'u3', 3, 'mcq', 'derived', 'Moore Kanunu teknolojinin gelişimini nasıl tarif eder?', '{"choices":["Katlamalı biçimde","Doğrusal biçimde","Döngüsel biçimde","Durağan biçimde"]}', '{"index":0}', 'Mikroçiplerdeki transistör sayısı yaklaşık iki yılda bir ikiye katlanır: gelişim **katlamalıdır**, ama insan zihni doğrusal düşünmeye meyillidir.', 2, '3. ünite, İhtiyaç tipleri, trend ve teknoloji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u3-t-turkcell', 'u3', 3, 'tf', 'derived', 'Kitaba göre bazı büyük holdingler GSM fırsatını, baz istasyonu yatırımının kısa vadede geri dönmeyeceği endişesiyle kaçırmıştır.', '{}', '{"value":true}', 'Doğru. Turkcell örneğinde geri dönüşün belirsizliği nedeniyle bazı holdingler trendi göremedi; fırsatı Mehmet Emin Karamehmet değerlendirdi.', 2, '3. ünite, İhtiyaç tipleri, trend ve teknoloji', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-k01', 'u4', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi Kanvas İş Modelinin yapıtaşlarından değildir?', '{"choices":["Müşteri Kesitleri","Müşteri Kârlılığı","Müşteri İlişkileri","Değer Önerileri","Kanallar"]}', '{"index":1}', 'Kanvas''ın dokuz yapı taşı: müşteri kesitleri, değer önerileri, kanallar, müşteri ilişkileri, gelir kaynakları, kilit kaynaklar, kilit etkinlikler, kilit ortaklıklar ve maliyet yapısı. **Müşteri kârlılığı** bunlardan biri değildir.', 1, 'Kitap, 4. ünite, soru 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-k02', 'u4', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi Kanvas İş Modelinin yapıtaşlarından değildir?', '{"choices":["Kilit Etkinlikler","Kilit Kaynaklar","Pazarlama Yapısı","Gelir Kaynakları","Maliyet Yapısı"]}', '{"index":2}', 'Kilit etkinlikler, kilit kaynaklar, gelir kaynakları ve maliyet yapısı Kanvas''ın yapı taşlarıdır. **Pazarlama yapısı** değildir.', 1, 'Kitap, 4. ünite, soru 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-k03', 'u4', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi Müşteri Kesitleri tanımlamak için yaygın olarak kullanılan kriterlerden değildir?', '{"choices":["Coğrafi","Demografik","Psikografik","Bilişsel","Davranışsal"]}', '{"index":3}', 'Yaygın kesitleme kriterleri coğrafi, demografik, psikografik ve davranışsaldır. **Bilişsel** bunlardan biri değildir.', 1, 'Kitap, 4. ünite, soru 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-k04', 'u4', 4, 'mcq', 'original', 'Kişilik, İlgi alanları, Hobiler, Değerler gibi özelliklere göre yapılan müşteri kesitlerine ayırma aşağıdakilerden hangisine göre yapılmıştır?', '{"choices":["Coğrafi","Demografik","Psikografik","Bilişsel","Davranışsal"]}', '{"index":2}', 'Kişilik, ilgi alanı, hobi, değer ve yaşam tarzı **psikografik** kesitleme ölçütleridir. Yaş, gelir, cinsiyet ise demografiktir.', 1, 'Kitap, 4. ünite, soru 4 · Çıkmış soru 11', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-k05', 'u4', 4, 'mcq', 'original', 'Satın alma süreci, özellikle kurumsal müşterilerde oldukça karmaşıktır. Aşağıdakilerden hangisi bu süreçte rastlanan rollerden değildir?', '{"choices":["Güç simsarları","Son kullanıcılar","Karar vericiler","Etkileyenler","Faturayı ödeyenler"]}', '{"index":0}', 'Satın alma sürecindeki roller: etkileyenler, faturayı ödeyenler, karar vericiler, son kullanıcılar ve sabotajcılar. **Güç simsarları** diye bir rol yoktur.', 1, 'Kitap, 4. ünite, soru 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-k06', 'u4', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi iş modelleri kullanmanın faydalarından değildir?', '{"choices":["Havada uçuşan iş fikirlerinin kağıda dökülmesini sağlamak.","İş fikirlerinin önemli noktalar atlanmadan detaylandırılması.","Uzun vadeli, kapsamlı ve detaylı bir plan hazırlanması.","İş fikrinin başarılı olabilmesi için gerekli olan varsayımların belirlenmesi.","İş fikrinin ne tür alternatifleri olabileceğini görebilmek."]}', '{"index":2}', 'İş modeli fikri tek sayfada hızla kağıda döker, varsayımları ve alternatifleri görünür kılar. **Uzun ve ayrıntılı bir plan** ise iş planının işidir, iş modelinin değil.', 2, 'Kitap, 4. ünite, soru 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-k07', 'u4', 4, 'mcq', 'original', '“Alıcı ve satıcıları bir araya getirerek gerçekleşen işlemlerden komisyon almak.” Aşağıdakilerden hangisi yukarıda anlatılan fikrin gelir modelidir?', '{"choices":["Bedelsiz ve Primli","Hizmet Olarak Yazılım (SaaS)","Pazar yeri","Yem ve Olta","Doğrudan satış"]}', '{"index":2}', '**Pazar yerleri** alıcıyla satıcıyı buluşturup genellikle komisyon alır; Yemeksepeti, Armut.com örnekleridir.', 1, 'Kitap, 4. ünite, soru 7 · Çıkmış soru 12', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-k08', 'u4', 4, 'mcq', 'original', 'Kullanıcılardan ücret almak yerine onlara ürünlerini tanıtmak isteyen başkalarından gelir elde etmek. Aşağıdakilerden hangisi yukarıda anlatılan fikrin gelir modelidir?', '{"choices":["Bedelsiz ve Primli","Hizmet Olarak Yazılım (SaaS)","Reklam Destekli","Pazar yeri","Yem ve Olta"]}', '{"index":2}', '**Reklam destekli** modelde kullanıcı ücretsiz yararlanır; asıl müşteri reklam verendir (Google, Facebook, ücretsiz gazeteler).', 1, 'Kitap, 4. ünite, soru 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-k09', 'u4', 4, 'mcq', 'original', 'Bir ürünü ucuza satarak başka bir ürünün düzenli olarak kullanılmasını ve oradan gelir elde edilmesini sağlamak. Aşağıdakilerden hangisi yukarıda anlatılan fikrin gelir modelidir?', '{"choices":["Bedelsiz ve Primli","Hizmet Olarak Yazılım (SaaS)","Reklam Destekli","Pazar yeri","Yem ve Olta"]}', '{"index":4}', '**Yem ve olta** (tıraş bıçağı modeli): Gillette sapı ucuza satar, bıçaklardan kazanır. Kartuşlu kahve makineleri ve mürekkep püskürtmeli yazıcılar da böyledir.', 1, 'Kitap, 4. ünite, soru 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-k10', 'u4', 4, 'mcq', 'original', 'Kullanıcılara temel bir ürünü karşılıksız olarak vererek daha özellikli bir ürüne bazı müşterileri yönlendirmek ve oradan para kazanmak. Aşağıdakilerden hangisi yukarıda anlatılan fikrin gelir modelidir?', '{"choices":["Bedelsiz ve Primli","Hizmet Olarak Yazılım (SaaS)","Reklam Destekli","Pazar yeri","Yem ve Olta"]}', '{"index":0}', '**Bedelsiz ve primli (freemium)**: temel sürüm ücretsiz, gelişmiş sürüm ücretli. Dropbox ve Skype örnekleridir.', 1, 'Kitap, 4. ünite, soru 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-c08', 'u4', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi alıcı ile satıcıları birleştiren ve aracıları ortadan kaldırarak erişilebilirliği ve bulunabilirliği artıran platformların genel adıdır?', '{"choices":["Pazaryeri iş modeli","AVM iş modeli","Market iş modeli","Bazaar iş modeli","MALL iş modeli"]}', '{"index":0}', 'Alıcıyla satıcıyı aracısız buluşturan platformlar **pazaryeri iş modeli**dir; sahibinden.com, letgo, Alibaba gibi.', 1, 'Çıkmış soru 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-osterwalder', 'u4', 4, 'mcq', 'derived', 'Kanvas İş Modelini geliştiren kişi kimdir?', '{"choices":["Alexander Osterwalder","Theodore Levitt","Gordon Moore","Chris Anderson"]}', '{"index":0}', 'Kanvas İş Modeli **Alexander Osterwalder** tarafından geliştirilmiştir ve iş fikrini 9 yapı taşına ayırır.', 1, '4. ünite, Kanvas iş modeli ve yapı taşları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-dokuz', 'u4', 4, 'fill', 'derived', 'Kanvas İş Modeli bir iş fikrini ____ yapı taşına ayırır. (rakamla yazın)', '{"blanks":1}', '{"blanks":[["9","dokuz"]]}', 'Kanvas **9** yapı taşından oluşur.', 1, '4. ünite, Kanvas iş modeli ve yapı taşları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-kalp', 'u4', 4, 'mcq', 'derived', 'Kitaba göre Kanvas''ta ilk incelenip kesinleştirilmesi gereken, modelin kalbi olan iki yapı taşı hangisidir?', '{"choices":["Müşteri kesitleri ve değer önerileri","Kilit kaynaklar ve kilit etkinlikler","Maliyet yapısı ve gelir kaynakları","Kanallar ve kilit ortaklıklar"]}', '{"index":0}', 'Modelin kalbi **müşteri kesitleri ve değer önerileri**dir; aralarındaki ürün/pazar uyumu kritik önemdedir.', 2, '4. ünite, Kanvas iş modeli ve yapı taşları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-urun-pazar', 'u4', 4, 'tf', 'derived', 'Kitaba göre müşteri kesitleri ile değer önerileri arasında ürün/pazar uyumu yoksa model değiştirilmeli ya da fikir terk edilmelidir.', '{}', '{"value":true}', 'Doğru. Uyum varsa fikir geliştirilir; yoksa başarı şansı olan bir model aranır ya da fikir bırakılır.', 2, '4. ünite, Kanvas iş modeli ve yapı taşları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-cac-ltv', 'u4', 4, 'mcq', 'derived', 'Kitaba göre bir iş modelinin değer yaratabildiğini gösteren ilişki hangisidir?', '{"choices":["CAC < LTV","CAC > LTV","CAC = 0","LTV = 0"]}', '{"index":0}', 'Müşteri elde etme maliyeti (**CAC**) müşterinin ömür boyu değerinden (**LTV**) küçükse model değer yaratabilir.', 2, '4. ünite, Kanvas iş modeli ve yapı taşları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-ltv', 'u4', 4, 'mcq', 'derived', 'Kitaba göre LTV (ömür boyu değer) nasıl hesaplanır?', '{"choices":["Birim başına ücret × müşterinin sizinle kalma süresi","Toplam reklam bütçesi ÷ toplam müşteri sayısı","Toplam üretim maliyeti − toplam satış geliri","İlk yatırım tutarı ÷ ortalama aylık net kâr"]}', '{"index":0}', 'LTV = **birim başına ücret × kalma süresi**. Müşteriyi memnun tutmak süreyi uzatarak LTV''yi artırır.', 2, '4. ünite, Kanvas iş modeli ve yapı taşları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-kilit-kaynak', 'u4', 4, 'mcq', 'derived', 'Kitaba göre kilit kaynaklar hangi türlerde olabilir?', '{"choices":["Fiziksel, finansal, fikri ve beşeri","Yalnızca finansal","Yalnızca fiziksel ve finansal","Yalnızca beşeri"]}', '{"index":0}', 'Kilit kaynaklar **fiziksel, finansal, fikri veya beşeri** olabilir: patent, e-posta listesi, iyi bir yazılımcı, değerli bir tesis gibi.', 2, '4. ünite, Kanvas iş modeli ve yapı taşları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-olagan-etkinlik', 'u4', 4, 'tf', 'derived', 'Yapılması zorunlu olan ama çok olağan ve kolay yapılabilen işler de kilit etkinlik sayılır.', '{}', '{"value":false}', 'Yanlış. Kilit etkinlikler **zor veya pahalı** olanlardır; olağan işler zorunlu olsa bile kilit etkinlik değildir.', 2, '4. ünite, Kanvas iş modeli ve yapı taşları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-segmentasyon', 'u4', 4, 'mcq', 'derived', 'Müşterileri kendi içinde benzer, diğerlerinden farklı alt gruplara ayırmaya ne ad verilir?', '{"choices":["Segmentasyon","Değerleme","Tescil","Konumlandırma"]}', '{"index":0}', 'Bu işleme **kesitlere ayırma, bölümleme ya da segmentasyon** denir.', 1, '4. ünite, Müşteri kesitleri, işler, acılar ve kazanımlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-demografik', 'u4', 4, 'mcq', 'derived', 'Yaş, gelir seviyesi ve medeni duruma göre yapılan kesitleme hangi türdür?', '{"choices":["Demografik","Psikografik","Davranışsal","Coğrafi"]}', '{"index":0}', 'Yaş, cinsiyet, gelir, medeni durum **demografik** ölçütlerdir.', 1, '4. ünite, Müşteri kesitleri, işler, acılar ve kazanımlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-kullanici-musteri', 'u4', 4, 'mcq', 'derived', 'Reklam destekli ücretsiz bir gazetede asıl müşteri kimdir?', '{"choices":["Reklam verenler","Okuyucular","Gazeteyi dağıtanlar","Matbaa"]}', '{"index":0}', 'Okuyucular **kullanıcı**dır; parayı ödeyen asıl **müşteri reklam verenlerdir**. Yine de okuyucular olmazsa reklam verenler de gelmez.', 2, '4. ünite, Müşteri kesitleri, işler, acılar ve kazanımlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-is-aci', 'u4', 4, 'mcq', 'derived', 'Değer önerisi tasarımında müşterinin işlerini yaparken karşılaştığı sıkıntılara ne ad verilir?', '{"choices":["Acılar","Kazanımlar","Kanallar","Kilit etkinlikler"]}', '{"index":0}', 'Müşteri **acıları** işlerini zorlaştıran ya da engelleyen şeylerdir; **kazanımlar** ise sağlanan faydalardır.', 2, '4. ünite, Müşteri kesitleri, işler, acılar ve kazanımlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-sabotajci', 'u4', 4, 'mcq', 'derived', 'Kurumsal satın alma sürecinde satın almayı engellemeye çalışan role ne ad verilir?', '{"choices":["Sabotajcılar","Etkileyenler","Karar vericiler","Son kullanıcılar"]}', '{"index":0}', '**Sabotajcılar** satın alma sürecini kesintiye uğratmaya veya engellemeye çalışan kişilerdir.', 2, '4. ünite, Satın alma sürecindeki roller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-faturayi-odeyen', 'u4', 4, 'mcq', 'derived', 'Kurum bütçesini kontrol eden, gerektiğinde karar vericilerin kararını veto edebilen rol hangisidir?', '{"choices":["Faturayı ödeyenler","Etkileyenler","Son kullanıcılar","Sabotajcılar"]}', '{"index":0}', '**Faturayı ödeyenler (economic buyers)** bütçeyi kontrol eder ve kararları değiştirebilir.', 2, '4. ünite, Satın alma sürecindeki roller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-etkileyen', 'u4', 4, 'tf', 'derived', 'Etkileyenler satın alma kararını doğrudan vermez ama görüşleri son kararda etkilidir.', '{}', '{"value":true}', 'Doğru. **Etkileyenler (influencers)** kararı vermez, kararı etkiler.', 1, '4. ünite, Satın alma sürecindeki roller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-en-eski', 'u4', 4, 'mcq', 'derived', 'Kitaba göre gelir kaynakları arasında en eski olanı hangisidir?', '{"choices":["Ürün veya hizmet satışı","Abonelik","Reklam destekli","Bedelsiz ve primli"]}', '{"index":0}', '**Satış** ticaretin para karşılığı yapılmaya başlamasından beri var olan en eski gelir kaynağıdır.', 1, '4. ünite, Gelir kaynakları ve modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-taban-tavan', 'u4', 4, 'mcq', 'derived', 'Kitaba göre fiyatlamada üretim maliyeti ile müşterinin elde ettiği faydanın parasal değeri neyi oluşturur?', '{"choices":["Maliyet tabanı, fayda ise tavanı","Maliyet tavanı, fayda ise tabanı","İkisi birlikte başabaş noktasını","İkisi birlikte değerlemeyi"]}', '{"index":0}', 'Maliyet altına inilmemesi gereken **taban**, faydanın değeri üstüne çıkılmaması gereken **tavan**dır; denge pazarlık güçlerine göre oluşur.', 3, '4. ünite, Gelir kaynakları ve modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-xerox', 'u4', 4, 'mcq', 'derived', 'Xerox''un pahalı fotokopi makinesini başarılı kılan gelir modeli hangisidir?', '{"choices":["Kullandıkça öde","Doğrudan satış","Yem ve olta","Reklam destekli"]}', '{"index":0}', 'Makineyi satmak yerine **kullandıkça öde** modeliyle pazarlamak, riske girmek istemeyen yöneticileri ikna etti.', 2, '4. ünite, Gelir kaynakları ve modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-abonelik', 'u4', 4, 'mcq', 'derived', 'Netflix, spor salonları ve kablo TV''nin ortak gelir modeli hangisidir?', '{"choices":["Abonelik","Kiralama","Pazar yeri","Yem ve olta"]}', '{"index":0}', 'Belirli süre için erişim hakkı satan model **abonelik**tir; ilk kullananlar gazete ve dergilerdir.', 1, '4. ünite, Gelir kaynakları ve modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-dogrudan', 'u4', 4, 'mcq', 'derived', '"Kapıdan kapıya satış" olarak da bilinen gelir modeli hangisidir?', '{"choices":["Doğrudan satış","Kullandıkça öde","SaaS","Abonelik"]}', '{"index":0}', '**Doğrudan satış**: Avon, Tupperware, Amway örnekleri. Yüz yüze satış etkilidir ama pahalıdır.', 1, '4. ünite, Gelir kaynakları ve modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-saas', 'u4', 4, 'mcq', 'derived', 'Yazılımı bilgisayara kurmak yerine bulut üzerinden abonelikle kullanmaya dayanan model hangisidir?', '{"choices":["Hizmet olarak yazılım (SaaS)","Yem ve olta (tıraş bıçağı)","Doğrudan satış (kapıdan kapıya)","Kiralama (süreli kullanım)"]}', '{"index":0}', '**SaaS**: Office 365, Google Apps, Paraşüt örnekleri. Düzenli gelir akışı sağladığı için sevilir.', 2, '4. ünite, Gelir kaynakları ve modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-c2c', 'u4', 4, 'mcq', 'derived', 'sahibinden.com ve letgo gibi pazar yerleri ağırlıklı olarak hangi tipte çalışır?', '{"choices":["C2C (tüketiciden tüketiciye)","B2B (şirketten şirkete)","B2C (şirketten tüketiciye)","B2G (şirketten devlete)"]}', '{"index":0}', 'Bu platformlar **C2C** çalışır. Yemeksepeti B2C, Alibaba ise B2B örneğidir.', 2, '4. ünite, Gelir kaynakları ve modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u4-t-freemium-oran', 'u4', 4, 'mcq', 'derived', 'Chris Anderson''a göre bedelsiz ve primli modelde kullanıcıların yaklaşık ne kadarı ücretli sürüme geçerse model kârlı olabilir?', '{"choices":["Yüzde 5-10","Yüzde 50-60","Yüzde 90","Yüzde 100"]}', '{"index":0}', 'Dijital ürünlerin marjinal maliyeti sıfıra yakın olduğu için kullanıcıların **%5-10''u** ödese bile model kârlı olabilir.', 3, '4. ünite, Gelir kaynakları ve modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-k01', 'u5', 5, 'mcq', 'original', 'Ekonomik koşulların iş girişimlerinin başarısı üzerindeki etkisi aşağıdaki hangi süreçlerle ilgilidir?', '{"choices":["Hammadde maliyetleri","Talep miktarı","Müşterilerde fiyat duyarlılığı","Kredi ve benzer kaynaklara ulaşımda kısıtlar","Hepsi"],"sabit":true}', '{"index":4}', 'Ekonomik koşullar talebi, kaynak maliyetlerini (hammadde, enerji, finansman) ve kaynaklara erişimi etkiler. Cevap **hepsi**dir.', 1, 'Kitap, 5. ünite, soru 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-k02', 'u5', 5, 'mcq', 'original', 'Yüksek döviz kurları ile ilgili olarak hangi ifade yanlıştır?', '{"choices":["Döviz üzerinden satış yapan sektörler ilk aşamada olumlu etkilenir.","Döviz borcu olan işletmeler sıkıntı yaşar.","Girdileri döviz üzerinden olan sektörler olumsuz etkilenir.","İthalat artış eğilimi gösterir.","İhracat artış eğilimi gösterir."]}', '{"index":3}', 'Kur yükselince ithal ürünler pahalılaşır, **ithalat azalma** eğilimi gösterir; ihracat ise rekabetçi hale gelip artar.', 2, 'Kitap, 5. ünite, soru 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-k03', 'u5', 5, 'mcq', 'original', 'Rekabetle ilgili hangi ifade yanlıştır?', '{"choices":["Özünde bir öğrenme sürecidir.","Daha yüksek müşteri değeri sunan firmalar avantajlıdır.","Daha etkin operasyonel süreçleri olan firmalar avantajlıdır.","En önemlisi sürdürülebilir avantalara sahip olmaktır.","Fırsatçı ve uyanık davranan girişimciler her zaman kazanırlar."]}', '{"index":4}', 'Rekabet bir öğrenme sürecidir ve asıl önemli olan sürdürülebilir avantajdır. Fırsatçılıkla **her zaman kazanılmaz**.', 1, 'Kitap, 5. ünite, soru 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-k04', 'u5', 5, 'mcq', 'original', 'Endüstri analizinde hangisi beş önemli analiz unsurundan biri değildir?', '{"choices":["Çalışanlar","Rakipler","Tedarikçiler","Müşteriler","Dağıtım kanalı elemanları"]}', '{"index":0}', 'Kitabın cevap anahtarı **çalışanlar** şıkkını verir. Endüstri analizi firmanın dışındaki aktörlere (müşteriler, rakipler, tedarikçiler, kanal üyeleri, ikame ve yeni girenler) bakar; çalışanlar firmanın içindedir.', 1, 'Kitap, 5. ünite, soru 4', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-k05', 'u5', 5, 'mcq', 'original', 'Hangisi müşteriler nezdinde pazarlık gücünü artırabilir?', '{"choices":["Emsali olmayan ürünler sunmak","Yüksek kaliteli ürünler sunmak.","Müşterilerin tedarikçi değiştirme maliyetlerini artırmak.","Müşterilerin rekabet gücünü artıracak ürün ve hizmetler sunmak.","Hepsi."],"sabit":true}', '{"index":4}', 'Kimsede olmayan, farklılaşmış, kaliteli ürünler ve müşteriye geçiş maliyeti yaratmak pazarlık gücünü artırır. Cevap **hepsi**dir.', 1, 'Kitap, 5. ünite, soru 5 · Çıkmış soru 14', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-k06', 'u5', 5, 'mcq', 'original', 'Sektörler arası farklar incelenirken hangileri daha önemlidir?', '{"choices":["Beklenen teknolojik ilerlemeler.","Sektörün ortalama stok miktarı","Müşterilerin fiyat duyarlılıkları.","Sektörün faaliyet dışı kârları","a ve c."],"sabit":true}', '{"index":4}', 'Sektörleri karşılaştırırken teknolojik değişim beklentisi ve müşterilerin fiyat duyarlılığı belirleyicidir: **a ve c**.', 2, 'Kitap, 5. ünite, soru 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-k07', 'u5', 5, 'mcq', 'original', 'Girişimciler için en az güvenilir veri kaynağı hangisi olacaktır?', '{"choices":["Özgün pazar araştırmaları.","Bankaların sektör raporları.","Sektör aktörleriyle yapılan görüşmeler.","Diğer firmaların yaptırdıkları pazar araştırmaları.","Müşterilerle yapılan görüşmeler."]}', '{"index":3}', 'Başka firmaların kendi amaçları için yaptırdığı araştırmalar girişimcinin sorusuna göre tasarlanmamıştır; **en az güvenilir** kaynak budur.', 1, 'Kitap, 5. ünite, soru 7 · Çıkmış soru 15', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-k08', 'u5', 5, 'mcq', 'original', 'Hangisi güvenilir talep tahmini için yanlış bir yaklaşımdır?', '{"choices":["Toplam müşteri sayısı tespit edilmelidir.","Geçmiş talep verileri hiçbir şekilde dikkate alınmamalıdır.","Benzer ürünlerin talepleri dikkate alınabilir.","İstatistiksel tahmin yöntemlerine başvurulabilir.","Sektör uzmanlarının görüşlerine başvurulabilir."]}', '{"index":1}', 'Geçmiş talep verileri, yeni koşullar da hesaba katılarak, zaman serisi analizleriyle kullanılabilir. "**Hiçbir şekilde dikkate alınmamalı**" yanlıştır.', 1, 'Kitap, 5. ünite, soru 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-k09', 'u5', 5, 'mcq', 'original', 'Hangisi müşteriyi anlama yönünde en önemli beş temel sorudan biri değildir?', '{"choices":["Kim satın alıyor, kim kullanıyor?","Başka neler alıyorlar?","Seçim kriterleri neler?","Ne zaman satın alıyorlar, ne zaman kullanıyorlar?","Nereden ve nasıl satın alıyorlar?"]}', '{"index":1}', 'Beş temel soru: kim alıyor/kullanıyor, seçim kriterleri, ne zaman, nereden ve nasıl, neden alıp nasıl kullanıyor. "**Başka neler alıyorlar**" bunlardan biri değildir.', 1, 'Kitap, 5. ünite, soru 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-k10', 'u5', 5, 'mcq', 'original', 'Hangi sektör döviz kurlarındaki artıştan nispeten olumlu etkilenebilir?', '{"choices":["Otomotiv","Havacılık","Turizm","Gıda","İnşaat"]}', '{"index":2}', 'Geliri döviz olan **turizm**, kur artışında daha rekabetçi ve kârlı hale gelir.', 1, 'Kitap, 5. ünite, soru 10 · Çıkmış soru 16', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-c24', 'u5', 5, 'mcq', 'original', 'Döviz kurları, faiz, kredi, enflasyon oranları, büyüme verileri gibi makroekonomik göstergeler hangi çevre faktörünün kapsamına girmektedir?', '{"choices":["Politik faktörler","Ürün faktörü","Ekonomik faktörler","Teknolojik faktörler","Sosyal faktörler"]}', '{"index":2}', 'Büyüme hızı, faiz, döviz kuru, işsizlik ve enflasyon **ekonomik faktörler**dir; kitapta ekonomik koşulların temel göstergeleri olarak geçer.', 1, 'Çıkmış soru 24', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-gostergeler', 'u5', 5, 'mcq', 'derived', 'Kitaba göre ekonomik koşulları anlamak için kullanılan en önemli göstergelerden biri değildir?', '{"choices":["Şirketin logo rengi","Büyüme hızı","Faiz oranları","İşsizlik oranları"]}', '{"index":0}', 'Temel göstergeler büyüme hızı, faiz, döviz kuru, işsizlik ve enflasyondur. Logo rengi ekonomik gösterge değildir.', 1, '5. ünite, Ekonomik göstergeler: büyüme, faiz, döviz, iş gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-tuik', 'u5', 5, 'mcq', 'derived', 'Kitaba göre temel ekonomik göstergelere hangi kurumun sitesinden ulaşılabilir?', '{"choices":["TÜİK","TPMK","SGK","KOSGEB"]}', '{"index":0}', 'Temel göstergelerin verileri **Türkiye İstatistik Kurumu (TÜİK)** sitesinde yayımlanır.', 1, '5. ünite, Ekonomik göstergeler: büyüme, faiz, döviz, iş gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-buyume', 'u5', 5, 'mcq', 'derived', 'Ekonomik büyüme neyin uzun dönemli artışını ifade eder?', '{"choices":["Reel milli gelirin, yani toplam üretimin","Yalnızca döviz rezervlerinin","Yalnızca nüfusun","Yalnızca faiz oranlarının"]}', '{"index":0}', 'Büyüme, **reel milli gelirin (toplam üretimin)** uzun dönemli artışıdır (GSYH büyüme hızı).', 2, '5. ünite, Ekonomik göstergeler: büyüme, faiz, döviz, iş gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-faiz-konut', 'u5', 5, 'mcq', 'derived', 'Kitaba göre faiz oranları çok yükseldiğinde hangi sektörde tüketici talebi ciddi derecede azalır?', '{"choices":["Konut","Turizm","Yazılım ihracatı","Temel gıda"]}', '{"index":0}', 'Yüksek faiz kredi maliyetini artırır; **konut** talebi düşer ve inşaata girdi sağlayan sektörler de etkilenir.', 2, '5. ünite, Ekonomik göstergeler: büyüme, faiz, döviz, iş gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-faiz-yatirim', 'u5', 5, 'tf', 'derived', 'Faiz oranlarının çok yüksek olduğu bir ekonomide yatırımlar kısıtlanır.', '{}', '{"value":true}', 'Doğru. Faiz, özsermaye dışındaki fonların maliyetidir; yükselince yatırımların maliyeti artar.', 1, '5. ünite, Ekonomik göstergeler: büyüme, faiz, döviz, iş gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-kalifiye', 'u5', 5, 'tf', 'derived', 'Kitaba göre maliyeti düşürmek için kalifiye iş gücü yerine her zaman vasıfsız iş gücü tercih edilmelidir.', '{}', '{"value":false}', 'Yanlış. Kalifiye iş gücü eksikliği iş süreçlerinin kalitesini düşürür; doğru nitelikte çalışana yatırım yapmak gerekir.', 2, '5. ünite, Ekonomik göstergeler: büyüme, faiz, döviz, iş gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-porter', 'u5', 5, 'mcq', 'derived', 'Endüstri analizindeki beş faktörü sınıflandıran Harvard öğretim üyesi kimdir?', '{"choices":["Michael Porter","Alexander Osterwalder","Theodore Levitt","Peter Drucker"]}', '{"index":0}', 'Beş Faktör Analizi **Michael Porter**''a aittir.', 1, '5. ünite, Endüstrinin beş faktör analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-bes-aktor', 'u5', 5, 'mcq', 'derived', 'Hangisi Porter''ın beş faktöründe yer alan aktörlerden biridir?', '{"choices":["İkame ürünlerin üreticileri","Çalışanlar","Hissedarlar","Bankalar"]}', '{"index":0}', 'Beş aktör: müşteriler, rakipler, tedarikçiler, **ikame ürün üreticileri** ve pazara girebilecek yeni firmalar.', 2, '5. ünite, Endüstrinin beş faktör analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-ikame', 'u5', 5, 'mcq', 'derived', 'Kitapta otobüs şirketleri için havayolunun oluşturduğu tehdit, beş faktörden hangisine örnektir?', '{"choices":["İkame ürün tehdidi","Tedarikçilerin pazarlık gücü","Müşterilerin pazarlık gücü","Yeni girenlerin tehdidi"]}', '{"index":0}', 'Aynı ihtiyacı (seyahat) karşılayan havayolu, otobüs için bir **ikame üründür**; 400 km üzerinde değer önerisi çok daha güçlüdür.', 2, '5. ünite, Endüstrinin beş faktör analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-tedarikci', 'u5', 5, 'tf', 'derived', 'Yerine başkası konulamayan bir tedarikçiye bağımlı olmak, tedarikçinin pazarlık gücünü artırır.', '{}', '{"value":true}', 'Doğru. İkame edilemeyen tedarikçi fiyat ve koşulları dikte edebilir.', 2, '5. ünite, Endüstrinin beş faktör analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-olcek', 'u5', 5, 'mcq', 'derived', 'Rekabetçi olmak için ölçek ekonomisi gereken sektörlerde yeni girişimciler için ne söylenebilir?', '{"choices":["Giriş engeli yüksektir, küçük girişimler zorlanır","Giriş engeli yoktur, isteyen herkes kolayca girer","Ölçek önemsizdir, yalnızca fikrin kalitesi önemlidir","Bu sektörlerde fiyat rekabeti hiç yaşanmaz"]}', '{"index":0}', 'Ölçek ekonomisi gerektiren pazarlar, düşük hacimle başlayan girişimler için bir **giriş engelidir**.', 2, '5. ünite, Endüstrinin beş faktör analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-ogrenme', 'u5', 5, 'fill', 'derived', 'Kitaba göre rekabet özünde bir ____ sürecidir.', '{"blanks":1}', '{"blanks":[["öğrenme","ogrenme"]]}', 'Rekabet bir **öğrenme** sürecidir; firmalar konumlarını sürekli adapte etmek zorundadır.', 1, '5. ünite, Rekabet ve sektörler arası farklar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-sabit-varsayim', 'u5', 5, 'tf', 'derived', 'Kitaba göre girişimcilerin sık yaptığı hatalardan biri teknolojinin ve müşteri tercihlerinin sabit kalacağını varsaymaktır.', '{}', '{"value":true}', 'Doğru. Teknoloji ve tercihler hızla değişir; yeni iş modelleri beklenmedik rekabet tehditleri doğurabilir.', 2, '5. ünite, Rekabet ve sektörler arası farklar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-potansiyel', 'u5', 5, 'mcq', 'derived', 'Kitaba göre potansiyel pazar parasal olarak nasıl hesaplanır?', '{"choices":["Toplam müşteri sayısı × ortalama harcama","Rakip firma sayısı × ortalama ürün fiyatı","Çalışan sayısı × ortalama aylık maaş","İlk yatırım tutarı ÷ ortalama aylık kâr"]}', '{"index":0}', '**Toplam müşteri sayısı** belirli bir zamandaki **ortalama harcama** ile çarpılır; ardından hedeflenen pay belirlenir.', 2, '5. ünite, Talep tahmini ve veri kaynakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-ilk-adim', 'u5', 5, 'mcq', 'derived', 'Kitaba göre talep tahmininde ilk adım hangisidir?', '{"choices":["Ulaşılabilecek en geniş coğrafi pazarı belirlemek","Kampanya için uygun bir reklam ajansı seçmek","Ürünün satış fiyatını kesin olarak belirlemek","Kurulacak şirketin türünü seçip tescil etmek"]}', '{"index":0}', 'Önce ulaşılabilecek **maksimum coğrafi pazar** belirlenir, sonra oradaki müşteri sayısı ve ortalama tüketim ortaya konur.', 2, '5. ünite, Talep tahmini ve veri kaynakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-ilintili', 'u5', 5, 'mcq', 'derived', 'Telefon kılıfı satacak bir girişimci kendi ürünü için hiç veri bulamıyorsa kitaba göre ne yapabilir?', '{"choices":["Satılan telefon sayısı gibi ilintili veriden tahmin yapar","Talep tahmini yapmaktan tamamen vazgeçmelidir","Tahmin yerine rastgele bir satış hedefi seçmelidir","Yalnızca rakibe sorup onun verdiği sayıyı kullanmalıdır"]}', '{"index":0}', 'Kendi ürününe veri yoksa **ilintili ürün grubundaki** talep verisi (ör. satılan telefon sayısı) kullanılabilir.', 2, '5. ünite, Talep tahmini ve veri kaynakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-gecmis-varsayim', 'u5', 5, 'mcq', 'derived', 'Geçmiş verilere dayalı zaman serisi analizlerinin genel sorunu nedir?', '{"choices":["Geçmişteki koşulların değişmeyeceğini varsaymaları","Hiç sayısal veri kullanmamaları","Yalnızca küçük işletmelerde çalışmaları","Sonuçlarının her zaman yanlış olması"]}', '{"index":0}', 'Bu analizler **geçmiş talebi oluşturan koşulların değişmeyeceği** varsayımına dayanır; yeni koşulların etkisi ayrıca düşünülmelidir.', 3, '5. ünite, Talep tahmini ve veri kaynakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-bes-soru', 'u5', 5, 'mcq', 'derived', 'Hangisi müşteriyi anlamaya yönelik beş temel sorudan biridir?', '{"choices":["Neden satın alıyorlar ve nasıl kullanıyorlar?","Rakipler hangi logoyu ve renkleri kullanıyor?","Çalışanlar haftada kaç saat çalışıyor?","Şirket ilk olarak hangi şehirde kuruldu?"]}', '{"index":0}', 'Beşinci temel soru "**neden satın alıyorlar ve nasıl kullanıyorlar**"dır.', 2, '5. ünite, Müşteriyi anlamada beş temel soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u5-t-alan-kullanan', 'u5', 5, 'tf', 'derived', 'Bir ürünü satın alan kişi ile kullanan kişi her zaman aynıdır.', '{}', '{"value":false}', 'Yanlış. Örneğin çocuk ürünlerini ebeveynler alır, çocuklar kullanır; bu yüzden "kim alıyor, kim kullanıyor" ayrı sorulur.', 1, '5. ünite, Müşteriyi anlamada beş temel soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-k01', 'u6', 6, 'mcq', 'original', 'Aşağıdakilerden hangisi girişimci değildir?', '{"choices":["Esnaf","Sanatkar","Tacir","Tüccar","Memur"]}', '{"index":4}', 'İşletme biliminin girişimci dediği kişi hukukta esnaf, sanatkâr, tacir, tüccar veya şirket ortağı olarak geçer. **Memur** bir işletme işletmez.', 1, 'Kitap, 6. ünite, soru 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-k02', 'u6', 6, 'mcq', 'original', 'Aşağıdaki teşebbüslerden hangisini gerçek kişi tacirler kuramaz?', '{"choices":["Faaliyet konusu maden işletmesi olan firma","Faaliyet konusu ithalat olan firma","Faaliyet konusu bankacılık olan firma","Faaliyet konusu hayvan yetiştiriciliği olan firma","Faaliyet konusu su ticareti olan firma"]}', '{"index":2}', '**Bankacılık** ve sigortacılık gibi faaliyetleri yalnızca ruhsat almış anonim şirketler veya kooperatifler yapabilir.', 2, 'Kitap, 6. ünite, soru 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-k03', 'u6', 6, 'mcq', 'original', 'Aşağıdakilerden hangisi sermaye olarak konulamaz?', '{"choices":["Marka","Para","Kişisel itibar","Araba","El arabası"]}', '{"index":2}', 'Para, alacak, fikrî mülkiyet hakları (marka, patent), taşınır ve taşınmazlar sermaye olabilir. **Kişisel itibar** sermaye olarak konulamaz.', 1, 'Kitap, 6. ünite, soru 3 · Çıkmış soru 17', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-k04', 'u6', 6, 'mcq', 'original', 'Aşağıdakilerden hangisinde ortağın sorumluluğu sınırlıdır?', '{"choices":["Gerçek kişi tacir","Limited şirket","Kollektif şirket","Komandit şirket","Adi ortaklık"]}', '{"index":1}', '**Limited şirkette** ortak, taahhüt ettiği sermaye ile sınırlı sorumludur. Gerçek kişi tacir, kollektif ortak ve adi ortaklık ortakları sınırsız sorumludur.', 1, 'Kitap, 6. ünite, soru 4', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-k05', 'u6', 6, 'mcq', 'original', 'Aşağıdakilerden hangisi KOBİ olabilir?', '{"choices":["Gerçek kişi tacir","Esnaf","Anonim şirket","Limited şirket","Hepsi"],"sabit":true}', '{"index":4}', 'KOBİ tanımı hukuki türe değil çalışan sayısı ve ciro/bilançoya bakar; bu yüzden **hepsi** KOBİ olabilir.', 1, 'Kitap, 6. ünite, soru 5 · Çıkmış soru 18', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-k06', 'u6', 6, 'mcq', 'original', 'Tüzel kişilik hangi anda kazanılır?', '{"choices":["Şirket sözleşmesi imzalandığında","Sözleşmedeki imzaların noterde tasdik edildiği anda","Ticaret Müdürülüğüne tescil edildiği anda","Türkiye Ticaret Sicili Gazetesinde ilan edildiği anda","Hiçbiri"]}', '{"index":2}', 'Kitap açıkça belirtir: **tescil ile tüzel kişilik kazanılır**.', 1, 'Kitap, 6. ünite, soru 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-k07', 'u6', 6, 'mcq', 'original', 'Limited şirkette yönetim ve temsil yetkisi kime aittir?', '{"choices":["Müdüre","Muhasebeciye","Avukata","Ortaklara","Hepsine"]}', '{"index":0}', 'Limited şirkette yönetim ve temsil, şirket sözleşmesiyle **müdür** sıfatı taşıyan kişilere verilir.', 1, 'Kitap, 6. ünite, soru 7 · Çıkmış soru 19', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-k08', 'u6', 6, 'mcq', 'original', 'Sermayenin taahhüt edilmesinden aşağıdakilerden hangisi anlaşılmaz?', '{"choices":["Taahütle sorumluluk sona erer","sorumluluk miktarı taahhüt edilen miktarkadardır","taahhüt edilenin ödenmemesi çıkma nedeni olabilir","sermayenin tamamının taahhüt edilmesi gerekir","maddi varlıklarla taahhüt yerine getirilebilir"]}', '{"index":3}', 'Kitabın cevap anahtarı **D** şıkkını verir. Asgari sermaye öngörülen hallerde taahhüdün ¼''ü peşin, kalanı üç yıl içinde ödenir.', 3, 'Kitap, 6. ünite, soru 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-k09', 'u6', 6, 'mcq', 'original', 'Aşağıdakilerden hangisi “basiretli davranma” kavramına en yakındır?', '{"choices":["Gereksiz yere risk alan","Gerekli yere risk alan","Tutum ve davranışında ölçülü olan","Cesur olan","Girişimci"]}', '{"index":2}', 'Basiretli tacir, işlerinde **ölçülü, dikkatli ve öngörülü** davranan tacirdir.', 1, 'Kitap, 6. ünite, soru 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-k10', 'u6', 6, 'mcq', 'original', 'Aşağıdakilerden hangisi marka olabilir?', '{"choices":["Şekiller","Sözcükler","Renkler","Sayılar","Hepsi"],"sabit":true}', '{"index":4}', 'Malları ve hizmetleri ayırt etmeye yarayan her işaret (sözcük, şekil, renk, harf, sayı) marka olabilir: **hepsi**.', 1, 'Kitap, 6. ünite, soru 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-ayrim-olcut', 'u6', 6, 'mcq', 'derived', 'Kitaba göre bir kişinin esnaf mı tacir mi olduğunu belirleyen temel ölçüt hangisidir?', '{"choices":["Elde etmesi öngörülen gelir miktarı","Kişinin yaşı","İşyerinin bulunduğu şehir","Kişinin eğitim düzeyi"]}', '{"index":0}', 'Esnaf ile tacir arasındaki sınırı **öngörülen gelir miktarı** belirler; sınır Cumhurbaşkanlığı Kararnamesi ile tespit edilir.', 2, '6. ünite, Esnaf-tacir ayrımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-esnaf-beden', 'u6', 6, 'mcq', 'derived', 'Ekonomik faaliyetini sermayesiyle birlikte bedenî çalışmasına dayandıran ve kazancı tacir niteliği kazandırmayan kişiye ne denir?', '{"choices":["Esnaf","Tacir","Anonim şirket","Müdür"]}', '{"index":0}', 'Bu, 5362 sayılı Kanun''daki **esnaf** tanımıdır.', 2, '6. ünite, Esnaf-tacir ayrımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-tacir-defter', 'u6', 6, 'tf', 'derived', 'Kitaba göre tacirler vergiden muaf olabilir ve ticari defter tutmak zorunda değildir.', '{}', '{"value":false}', 'Yanlış. Bu özellikler esnaf için söz konusu olabilir; **tacirler vergiden muaf olamaz ve defter tutmak zorundadır**.', 2, '6. ünite, Esnaf-tacir ayrımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-tacir-iflas', 'u6', 6, 'mcq', 'derived', 'Kitaba göre tacirin yükümlülüklerinden biri değildir?', '{"choices":["Gelir vergisinden muaf tutulmak","Bir ticaret unvanı seçmek","İşletmesini ticaret siciline tescil ettirmek","Gerekli ticari defterleri tutmak"]}', '{"index":0}', 'Tacir her borcu için iflasa tabidir; unvan seçmek, tescil ettirmek ve defter tutmakla yükümlüdür. **Vergi muafiyeti** tacirin değil, bazı esnafın durumudur.', 2, '6. ünite, Esnaf-tacir ayrımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-tescil-tacir', 'u6', 6, 'tf', 'derived', 'Ticari işletmesini tescil ettirip ilan eden kişi, fiilen işletmeye başlamamış olsa bile tacir sayılır.', '{}', '{"value":true}', 'Doğru. Tescil ettirip durumu ilan eden kişi fiilen başlamasa da tacir sayılır.', 2, '6. ünite, Esnaf-tacir ayrımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-ayni', 'u6', 6, 'mcq', 'derived', 'Nakit ve kişisel emek dışındaki değerlerin (ayni sermaye) şirkete konulmasından önce ne yapılmalıdır?', '{"choices":["Değeri mahkeme aracılığıyla belirlenmelidir","Noter onayı yeterlidir","Hiçbir işlem gerekmez","Ortaklar kendi aralarında fiyat yazar"]}', '{"index":0}', 'Ayni sermayenin **değeri mahkeme aracılığıyla** tespit ettirilmelidir.', 3, '6. ünite, Sermaye ve sermaye taahhüdü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-ceyrek', 'u6', 6, 'mcq', 'derived', 'Asgari sermaye öngörülen hallerde taahhüt edilen sermaye nasıl ödenir?', '{"choices":["Dörtte biri peşin, kalanı üç yıl içinde","Tamamı kuruluşta peşin","Yarısı peşin, kalanı on yıl içinde","Hiç ödenmesi gerekmez"]}', '{"index":0}', 'Taahhüt edilen sermayenin **¼''ü peşin**, kalanı **üç yıl içinde** şirkete ödenir.', 3, '6. ünite, Sermaye ve sermaye taahhüdü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-fikri-sermaye', 'u6', 6, 'tf', 'derived', 'Patent ve marka gibi fikrî mülkiyet hakları şirkete sermaye olarak konulabilir.', '{}', '{"value":true}', 'Doğru. TTK m. 127''ye göre fikrî mülkiyet hakları sermaye olarak konulabilir.', 1, '6. ünite, Sermaye ve sermaye taahhüdü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-sahis', 'u6', 6, 'mcq', 'derived', 'TTK''ya göre hangileri şahıs şirketidir?', '{"choices":["Kollektif ve komandit şirket","Anonim ve limited şirket","Limited şirket ve kooperatif","Yalnızca anonim şirket"]}', '{"index":0}', '**Kollektif ve komandit** şirket şahıs şirketidir; anonim, limited ve sermayesi paylara bölünmüş komandit şirket sermaye şirketidir.', 2, '6. ünite, İşletme ve şirket türleri, sorumluluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-sermaye-sirketi', 'u6', 6, 'mcq', 'derived', 'Hangisi sermaye şirketidir?', '{"choices":["Anonim şirket","Kollektif şirket","Adi ortaklık","Gerçek kişi tacir"]}', '{"index":0}', '**Anonim şirket** sermaye şirketidir; ortakların kişiliğinden çok koydukları sermaye önemlidir.', 2, '6. ünite, İşletme ve şirket türleri, sorumluluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-tuzel-yok', 'u6', 6, 'mcq', 'derived', 'Kitaba göre hangisinin ortaklarından ayrı bir tüzel kişiliği yoktur?', '{"choices":["Adi şirket","Anonim şirket","Limited şirket","Kooperatif"]}', '{"index":0}', 'Esnaf ve tacir işletmesi ile **adi şirketlerin** ayrı tüzel kişiliği yoktur; sermaye şirketleri ve kooperatiflerin vardır.', 2, '6. ünite, İşletme ve şirket türleri, sorumluluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-ttk-turler', 'u6', 6, 'mcq', 'derived', 'Hangisi Türk Ticaret Kanunu''na göre kurulabilecek ticaret şirketlerinden biri değildir?', '{"choices":["Adi ortaklık","Kollektif şirket","Anonim şirket","Kooperatif"]}', '{"index":0}', 'TTK''daki ticaret şirketleri kollektif, komandit, anonim, limited ve kooperatiftir. **Adi ortaklık** Borçlar Kanunu''na göre kurulur.', 2, '6. ünite, İşletme ve şirket türleri, sorumluluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-ana-sozlesme', 'u6', 6, 'tf', 'derived', 'Ana sözleşme, tek kişi tarafından kurulan ticaret şirketleri için de zorunludur.', '{}', '{"value":true}', 'Doğru. Ana sözleşme teşebbüsün kuruluş sözleşmesidir ve tek kişilik ticaret şirketleri için de zorunludur.', 2, '6. ünite, Kuruluş, ana sözleşme ve tüzel kişilik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-eksik-sozlesme', 'u6', 6, 'mcq', 'derived', 'Şirket sözleşmesinde eksiklik varsa ne olur?', '{"choices":["Tescil, sözleşme düzeltildikten sonra yapılabilir","Şirket yine de hemen tescil edilir","Eksiklik tescilden sonra kendiliğinden giderilir","Şirket kurulamaz ve tüm başvuru kalıcı olarak reddedilir"]}', '{"index":0}', 'Eksiklik halinde **tescil, gerekli tadilattan sonra** yapılır; bu da emek, zaman ve para kaybıdır.', 2, '6. ünite, Kuruluş, ana sözleşme ve tüzel kişilik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-mudur-degisim', 'u6', 6, 'mcq', 'derived', 'Ana sözleşmede aksi yoksa limited şirket sözleşmesi hangi oyla değiştirilebilir?', '{"choices":["Esas sermayenin üçte ikisini temsil eden ortakların oyuyla","Herhangi bir ortağın tek başına vereceği kararla","Yalnızca ticaret mahkemesinin vereceği kararla","Şirket müdürünün tek başına alacağı kararla"]}', '{"index":0}', 'TTK m. 589''a göre şirket sözleşmesi **esas sermayenin üçte ikisini** temsil eden ortakların kararıyla değiştirilebilir.', 3, '6. ünite, Yönetim ve temsil', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-en-az-bir', 'u6', 6, 'tf', 'derived', 'Limited şirkette en az bir ortağın yönetim hakkı ve temsil yetkisi bulunmalıdır.', '{}', '{"value":true}', 'Doğru. Yönetim üçüncü kişilere de verilebilir ama en az bir ortağın yönetim ve temsil yetkisi bulunmalıdır.', 2, '6. ünite, Yönetim ve temsil', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-kayitdisi', 'u6', 6, 'mcq', 'derived', 'Kitaba göre aşağıdakilerden hangisi haksız rekabettir?', '{"choices":["Kayıt dışı işçi çalıştırmak","Ürün kalitesini artırmak","Fiyatları maliyete göre belirlemek","Yeni bir şube açmak"]}', '{"index":0}', '**Kayıt dışı işçi çalıştırmak** haksız rekabettir; başkasının markasını kullanmak da basiretli tacirle bağdaşmaz.', 2, '6. ünite, Basiretli tacir ve rekabet yasakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-isci-rekabet', 'u6', 6, 'mcq', 'derived', 'İşçinin iş sözleşmesi bittikten sonra işverenle rekabet etmeme taahhüdü hangi şekilde geçerli olur?', '{"choices":["Yazılı olarak üstlenilmesi gerekir","Sözlü olması yeterlidir","Kendiliğinden her işçi için geçerlidir","Hiçbir şekilde geçerli olmaz"]}', '{"index":0}', 'İşçi rekabet yasağını **yazılı olarak** üstlenebilir; işçinin müşteri çevresi veya üretim sırlarına erişimi olmalıdır.', 3, '6. ünite, Basiretli tacir ve rekabet yasakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-marka-amac', 'u6', 6, 'mcq', 'derived', 'Kitaba göre markanın temel işlevi nedir?', '{"choices":["Bir teşebbüsün mal ve hizmetlerini diğerlerinden ayırmak","Şirketin vergi numarasını müşterilere duyurmak","Ortakların şirket borçlarındaki sorumluluğunu sınırlamak","İşçilerin aylık ücretini ve haklarını belirlemek"]}', '{"index":0}', 'Marka mal ve hizmetleri **ayırt etmeye** yarar. Unvan tacirleri, işletme adı işletmeleri, marka ise ürünleri ayırır.', 1, '6. ünite, Marka, unvan ve işletme adı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-bes-yil', 'u6', 6, 'mcq', 'derived', 'Türkiye''de ciddi biçimde kullanılmayan ya da kullanımına kaç yıl kesintisiz ara verilen markanın iptaline karar verilir?', '{"choices":["5 yıl","1 yıl","10 yıl","20 yıl"]}', '{"index":0}', '6769 sayılı Kanun''a göre **beş yıl** kesintisiz kullanılmayan marka iptal edilebilir.', 3, '6. ünite, Marka, unvan ve işletme adı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-unvan', 'u6', 6, 'mcq', 'derived', 'Tacirleri birbirinden ayıran ve kullanılması zorunlu olan ad hangisidir?', '{"choices":["Ticaret unvanı","İşletme adı","Marka","Alan adı"]}', '{"index":0}', '**Ticaret unvanı** zorunludur ve taciri ayırt eder. İşletme adı isteğe bağlıdır.', 2, '6. ünite, Marka, unvan ve işletme adı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u6-t-isg', 'u6', 6, 'tf', 'derived', 'Çalışanların iş sağlığı ve güvenliği yükümlülükleri işverenin sorumluluğunu ortadan kaldırır.', '{}', '{"value":false}', 'Yanlış. Çalışanların yükümlülükleri **işverenin sorumluluklarını etkilemez**; önlem almak işverenin görevidir.', 2, '6. ünite, İş sağlığı ve güvenliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-k01', 'u7', 7, 'mcq', 'original', 'Aşağıdakilerden hangisi bireysel ve toplumsal anlamda gündelik yaşamın düzenlenmesine yönelik kurallara işaret etmektedir?', '{"choices":["Ahlak","Gelenek","İnanç","Etik","Değer"]}', '{"index":0}', '**Ahlak**, hayatın doğal akışında insanın insanla ve eşyayla ilişkilerine rehberlik eden yazılı olmayan kurallar setidir.', 1, 'Kitap, 7. ünite, soru 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-k02', 'u7', 7, 'mcq', 'original', 'Ahlaki problemler ve bunlara ilişkin yargıların yorumlanmasına yönelik felsefi alan aşağıdakilerden hangisidir?', '{"choices":["Gelenek","Etik","Ahlak","Örf","İnanç"]}', '{"index":1}', '**Etik**, ahlaki kurallara ilişkin felsefi değerlendirmeleri yapan felsefe dalıdır. Yaşanan olgu ahlak, onun araştırılması etiktir.', 1, 'Kitap, 7. ünite, soru 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-k03', 'u7', 7, 'mcq', 'original', 'Girişimlerin kendi çalışma konularına yönelik ürün geliştirme, üretim, tedarik pazarlama ve satış sonrası hizmetleri hangi sorumluluk alanı içerisinde yer almaktadır?', '{"choices":["Sosyal sorumluluklar","Örnek olma sorumluluğu","Bireysel sorumluluklar","Ahlaki sorumluluklar","Yasal sorumluluklar"]}', '{"index":2}', 'Girişimin kendi işini (ürün, üretim, tedarik, pazarlama, satış sonrası) doğru yapması **bireysel sorumluluk** alanıdır.', 1, 'Kitap, 7. ünite, soru 3 · Çıkmış soru 20', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-k04', 'u7', 7, 'mcq', 'original', 'Girişimlerin bireysel sorumluluğunu yerine getirmemesiyle birlikte ortaya çıkan toplumsal ve sosyal maliyetler aşağıdaki sorumluluk alanlarından hangisiyle ilgilidir?', '{"choices":["Bireysel sorumluluklar","Örnek olma sorumluluğu","Ahlaki sorumluluklar","Sosyal sorumluluklar","Yasal sorumluluklar"]}', '{"index":3}', 'Bireysel sorumluluğun ihmal edilmesinin topluma yüklediği maliyetler **sosyal sorumluluk** alanına girer.', 1, 'Kitap, 7. ünite, soru 4', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-k05', 'u7', 7, 'mcq', 'original', 'Aşağıdakilerden hangisinde girişimin etik temellerini oluşturan unsurlar bir arada verilmiştir?', '{"choices":["Ahlaki değerler ve bireysel sorumluluklar","Hukuk normları ve sosyal sorumluluklar","Ahlaki sorumluluklar ve sosyal sorumluluklar","Bireysel sorumluluklar ve yasal sorumluluklar","Ahlaki değerler ve hukuk normları"]}', '{"index":4}', 'Girişimin etik temelleri **ahlaki değerler ve hukuk normları**dır.', 1, 'Kitap, 7. ünite, soru 5 · Çıkmış soru 21', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-k06', 'u7', 7, 'mcq', 'original', '“Girişimcinin öngörülebilir olması” aşağıdaki etik ilkelerden hangisiyle açıklanmaktadır?', '{"choices":["Güvenilirlik","Dürüstlük","Sorumluluk bilinci","Adil olma","Kaynakları etkin kullanma"]}', '{"index":0}', '**Güvenilirlik**, girişimcinin öngörülebilir olmasıdır; bu, yenilik yapmayacağı anlamına gelmez.', 1, 'Kitap, 7. ünite, soru 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-k07', 'u7', 7, 'mcq', 'original', '“Bir girişimci çabası olmaksızın marka, ambalaj, reklam ve benzeri yollarla haksız rekabete yol açacak eylemlere girişebilir.” ifadesi aşağıdaki etik ilkelerden hangisine ters düşmektedir?', '{"choices":["Sorumluluk bilinci","Dürüstlük","Kaynakları etkin kullanma","Güvenilirlik","Adil olma"]}', '{"index":1}', 'Emek vermeden marka, ambalaj ya da reklamla haksız rekabete girişmek **dürüstlükten** uzaklaşmaktır.', 1, 'Kitap, 7. ünite, soru 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-k08', 'u7', 7, 'mcq', 'original', 'Girişimcinin tedarikçisine ve çalışanına emeğinin karşılığını zamanında ödeme sorumluluğu aşağıdaki etik ilkelerden hangisiyle açıklanmaktadır?', '{"choices":["Güvenilirlik","Sorumluluk bilinci","Adil olma","Dürüstlük","Kaynakları etkin kullanma"]}', '{"index":2}', 'Emeğin karşılığını zamanında ödemek **adil olma** ilkesidir.', 1, 'Kitap, 7. ünite, soru 8 · Çıkmış soru 22', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-k09', 'u7', 7, 'mcq', 'original', 'Her türlü girdi özelliği olan hammadde, mamul, yarı mamul, insan kaynağı ve zamanın verimli kullanılması aşağıdaki etik ilkelerden hangisinin kapsamındadır?', '{"choices":["Adil olma","Güvenilirlik","Sorumluluk bilinci","Kaynakları etkin kullanma","Dürüstlük"]}', '{"index":3}', 'Girdilerin ve zamanın verimli kullanılması **kaynakları etkin kullanma** ilkesidir.', 1, 'Kitap, 7. ünite, soru 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-k10', 'u7', 7, 'mcq', 'original', 'Etik öğrenmenin bir parçası olan, işletme içi ve dışına yönelik her türlü ilişkiye yol göstermesi beklenen rehbere ne ad verilir?', '{"choices":["Örgüt kültürü","Sosyal sorumluluk","Ahlaki bilinç","İşletme kuralları","Etik rehber"]}', '{"index":4}', 'İşletme içi ve dışı ilişkilere yol gösteren yazılı rehber **etik rehber**dir.', 1, 'Kitap, 7. ünite, soru 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-ethos', 'u7', 7, 'mcq', 'derived', '"Etik" kelimesi hangi Grekçe kelimeden türetilmiştir?', '{"choices":["Ethos","Mos","Logos","Pathos"]}', '{"index":0}', 'Etik, karakter ve alışkanlık anlamına gelen Grekçe **ethos**tan; moral ise Latince **mos**tan türetilmiştir.', 2, '7. ünite, Etik ve ahlak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-mos', 'u7', 7, 'mcq', 'derived', 'Latince "moral" kelimesinin kökü olan ve adet, alışkanlık, karakter anlamına gelen kelime hangisidir?', '{"choices":["Mos","Ethos","Logos","Polis"]}', '{"index":0}', 'Moral, Latince **mos** kelimesinden gelir.', 2, '7. ünite, Etik ve ahlak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-olgu', 'u7', 7, 'tf', 'derived', 'Kitaba göre olgusal olarak yaşanan şey "etik", bu olgunun araştırılması ise "ahlak" olarak adlandırılır.', '{}', '{"value":false}', 'Yanlış, tersidir: yaşanan olgu **ahlak**, onun araştırılması **etik**tir.', 2, '7. ünite, Etik ve ahlak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-ayni-anlam', 'u7', 7, 'tf', 'derived', 'Kitaba göre etik ve ahlak birbirinin yerine kullanılsa da farklı içeriğe sahip kavramlardır.', '{}', '{"value":true}', 'Doğru. Günlük hayatta eş anlamlı kullanılsalar da içerikleri farklıdır.', 1, '7. ünite, Etik ve ahlak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-yazili', 'u7', 7, 'mcq', 'derived', 'Kitaptaki özete göre ahlak nasıl bir kurallar setidir?', '{"choices":["Yazılı olmayan kurallar seti","Yalnızca kanunlarla yazılmış kurallar","Yalnızca şirket yönetmelikleri","Uluslararası ticaret anlaşmaları"]}', '{"index":0}', 'Ahlak, insan ilişkilerine rehberlik eden **yazılı olmayan** kurallar setidir; etik bunlara ilişkin değerlendirmelerin sözlü ve yazılı hale gelmesidir.', 2, '7. ünite, Etik ve ahlak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-uc-sorumluluk', 'u7', 7, 'mcq', 'derived', 'Kitapta girişimcinin sorumlulukları hangi üç başlıkta ele alınır?', '{"choices":["Bireysel, sosyal ve örnek olma sorumluluğu","Vergi, sigorta ve muhasebe sorumluluğu","Üretim, satış ve pazarlama sorumluluğu","Yerel, ulusal ve küresel sorumluluk"]}', '{"index":0}', 'Üç başlık: **bireysel sorumluluklar, sosyal sorumluluklar ve örnek olma sorumluluğu**.', 2, '7. ünite, Bireysel, sosyal ve örnek olma sorumluluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-ongorulebilir', 'u7', 7, 'tf', 'derived', 'Kitaba göre bireysel sorumluluklara farkındalık güçlü olduğunda toplumsal hayat daha öngörülebilir hale gelir.', '{}', '{"value":true}', 'Doğru. Herkes bireysel sorumluluğunu yerine getirince grup ve toplum içindeki ilişkiler öngörülebilir olur.', 2, '7. ünite, Bireysel, sosyal ve örnek olma sorumluluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-ahilik', 'u7', 7, 'mcq', 'derived', 'Kitaba göre ülkemizde girişimcinin örnek olma sorumluluğunu daha da önemli kılan tarihi birikim hangisidir?', '{"choices":["Ahilik örgütlenmesi","Lonca sistemi","Kapitülasyonlar","Tımar sistemi"]}', '{"index":0}', 'Kitap **ahilik** örgütlenmesi birikimini, örnek olma sorumluluğunu güçlendiren bir zemin olarak anar.', 2, '7. ünite, Bireysel, sosyal ve örnek olma sorumluluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-kar-amaci', 'u7', 7, 'tf', 'derived', 'Kitaba göre girişimin sorumluluklarıyla ilgili açıklamalar yalnızca kâr amaçlı girişimler için geçerlidir.', '{}', '{"value":false}', 'Yanlış. Her girişim bir kaynak kullanımı olduğu için açıklamalar kâr amacı olmayan girişimler için de geçerlidir.', 2, '7. ünite, Bireysel, sosyal ve örnek olma sorumluluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-bes-ilke', 'u7', 7, 'mcq', 'derived', 'Hangisi kitapta sayılan girişimcinin beş etik ilkesinden biri değildir?', '{"choices":["Kâr maksimizasyonu","Güvenilirlik","Dürüstlük","Adil olma"]}', '{"index":0}', 'Beş ilke: güvenilirlik, dürüstlük, sorumluluk bilinci, adil olma, kaynakları etkin kullanma. **Kâr maksimizasyonu** bir etik ilke değildir.', 2, '7. ünite, Girişimcinin etik ilkeleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-en-onemli', 'u7', 7, 'mcq', 'derived', 'Kitaba göre girişimcinin en önemli etik ilkelerinin başında hangisi gelir?', '{"choices":["Güvenilirlik","Kaynakları etkin kullanma","Sorumluluk bilinci","Adil olma"]}', '{"index":0}', 'Kitap **güvenilir olmayı** en önemli ilkelerin başında sayar; esnaf ve tüccarımızın "emin" olma özelliği buna örnektir.', 2, '7. ünite, Girişimcinin etik ilkeleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-tekel', 'u7', 7, 'tf', 'derived', 'Kitaba göre girişimcinin pazarında tekel olması, dürüstlükten taviz vermesi için geçerli bir gerekçedir.', '{}', '{"value":false}', 'Yanlış. Doğal veya hukuki tekel olmak bile **dürüstlükten taviz vermenin gerekçesi olamaz**.', 2, '7. ünite, Girişimcinin etik ilkeleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-guven-yenilik', 'u7', 7, 'tf', 'derived', 'Güvenilir olmak, girişimcinin ürün veya sunum biçiminde yenilik yapmaması anlamına gelir.', '{}', '{"value":false}', 'Yanlış. Güvenilir girişimci de yenilik yapabilir, rakiplerini şaşırtabilir; güvenilirlik öngörülebilir değerlere bağlı kalmaktır.', 2, '7. ünite, Girişimcinin etik ilkeleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-vergi', 'u7', 7, 'mcq', 'derived', 'Vergi vermek ve çalışanlarla tedarikçilerin ödemelerini zamanında yapmak en çok hangi etik ilkeyle ilişkilidir?', '{"choices":["Adil olma","Güvenilirlik","Kaynakları etkin kullanma","Dürüstlük"]}', '{"index":0}', 'Kitap bu yükümlülükleri **adil olma** ilkesi altında anlatır.', 2, '7. ünite, Girişimcinin etik ilkeleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-etik-lider', 'u7', 7, 'mcq', 'derived', 'Örnek olma sorumluluğunu işletmesinde ve sektöründe liderlikle taçlandıran girişimci nasıl anılır?', '{"choices":["Etik lider","Seri girişimci","Sosyal girişimci","Melek yatırımcı"]}', '{"index":0}', 'Örnek olma sorumluluğu liderlikle taçlanınca girişimci **etik lider** olarak anılır.', 2, '7. ünite, Etik liderlik ve etik öğrenme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-davranis', 'u7', 7, 'mcq', 'derived', 'Kitaba göre etik liderlikte en çok neye vurgu yapılmalıdır?', '{"choices":["Tutum ve davranışlara","Yazılı yönetmeliklere","Ceza sistemlerine","Reklam kampanyalarına"]}', '{"index":0}', 'Etik liderlikte sözlü veya yazılı kurallardan çok **tutum ve davranışlar** önemlidir; girişimci önce davranışlarıyla liderlik eder.', 2, '7. ünite, Etik liderlik ve etik öğrenme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u7-t-bulasma', 'u7', 7, 'tf', 'derived', 'Kitaba göre küçük etik ihlaller önemsizdir ve başkalarının davranışını etkilemez.', '{}', '{"value":false}', 'Yanlış. Sahtekârlık sosyal bulaşma yoluyla yayılabilir; küçük ihlaller daha büyük kötü davranışların kabul edilebilir olduğu sinyalini verebilir.', 2, '7. ünite, Etik liderlik ve etik öğrenme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-c23', 'u8', 8, 'mcq', 'original', 'Bir ürünü kullanan veya tüketen kişi ......, satın alma kararını veren kişi ......, satın alma gücü ile desteklediği isteği ise ...... olarak ifade edilir. Boşluklara sırasıyla hangi kavramlar gelmelidir?', '{"choices":["Tüketici - Girişimci - İhtiyaç","Tüketici - Müşteri - Talep","Müşteri - Tüketici - Talep","Tüketici - Girişimci - Tatmin","Müşteri - Tüketici - İhtiyaç"],"sabit":true}', '{"index":1}', 'Kullanan/tüketen **tüketici**, satın alma kararını veren **müşteri**, satın alma gücüyle desteklenen istek **talep**tir.', 1, 'Çıkmış soru 23', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-c25', 'u8', 8, 'mcq', 'original', 'Aşağıdakilerden hangisi pazarlama karması bileşenlerinden biri değildir?', '{"choices":["Tutundurma","Fiyat","Ürün","Dağıtım","Ambalaj"]}', '{"index":4}', 'Pazarlama karması **ürün, fiyat, dağıtım ve tutundurma**dır (4P). Ambalaj ürünün bir parçasıdır, ayrı bir bileşen değildir.', 1, 'Çıkmış soru 25', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-t-tuketici', 'u8', 8, 'mcq', 'derived', 'Pazarlamada bir ürünü kullanan veya tüketen kişi ya da örgütsel birime ne ad verilir?', '{"choices":["Tüketici","Müşteri","Tedarikçi","Paydaş"]}', '{"index":0}', '**Tüketici** ürünü kullanan veya tüketendir; bireyleri ve işletme gibi tüzel kişileri kapsar.', 1, '8. ünite, Tüketici, müşteri, ihtiyaç, istek ve talep', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-t-apple', 'u8', 8, 'mcq', 'derived', 'Kitaptaki örnekte cep telefonu kullanan kişi tüketicidir. Apple marka telefon satın alan kişi ise Apple için nedir?', '{"choices":["Müşteri","Tedarikçi","Rakip","Bayi"]}', '{"index":0}', 'Satın alma kararını fiilen veren kişi o markanın **müşterisi**dir.', 2, '8. ünite, Tüketici, müşteri, ihtiyaç, istek ve talep', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-t-istek-talep', 'u8', 8, 'fill', 'derived', 'Tüketicinin satın alma gücüyle desteklediği isteğe ____ denir.', '{"blanks":1}', '{"blanks":[["talep"]]}', 'Satın alma gücüyle desteklenen istek **talep**tir.', 2, '8. ünite, Tüketici, müşteri, ihtiyaç, istek ve talep', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-t-ihtiyac-tanim', 'u8', 8, 'mcq', 'derived', 'Kitapta ihtiyaç en özet biçimde nasıl tanımlanır?', '{"choices":["Tatmin edilmemiş dürtüler","Lüks ürünlere duyulan arzu","Satın alma gücüyle desteklenen istek","Reklamla yaratılan beklenti"]}', '{"index":0}', 'İhtiyaç **tatmin edilmemiş dürtüler**dir. İhtiyaçları zorunlu, istekleri lüks diye ayırmak hatalıdır.', 2, '8. ünite, Tüketici, müşteri, ihtiyaç, istek ve talep', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-t-istek-sinirsiz', 'u8', 8, 'tf', 'derived', 'Kitaba göre ihtiyaçlar belirli gruplarda toplanabilecek kadar sınırlıyken istekler sınırsız sayıda olabilir.', '{}', '{"value":true}', 'Doğru. İstekler, ihtiyaçların kültür, kişilik ve çevreyle aldığı şekildir; bu yüzden sayısızdır.', 2, '8. ünite, Tüketici, müşteri, ihtiyaç, istek ve talep', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-t-maslow-alt', 'u8', 8, 'mcq', 'derived', 'Maslow''un ihtiyaçlar hiyerarşisinin en altında hangi ihtiyaçlar yer alır?', '{"choices":["Fizyolojik ihtiyaçlar","Kendini gerçekleştirme","Saygı görme","Ait olma ve sevilme"]}', '{"index":0}', 'En altta yaşamak için gereken **fizyolojik ihtiyaçlar**, sonra güvenlik, ait olma, saygı ve kendini gerçekleştirme gelir.', 1, '8. ünite, Tüketici, müşteri, ihtiyaç, istek ve talep', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-t-4p', 'u8', 8, 'mcq', 'derived', 'Pazarlama karmasının bileşenleri hangi seçenekte doğru verilmiştir?', '{"choices":["Ürün, fiyat, dağıtım, tutundurma","Ürün, ambalaj, reklam, satış","Fiyat, kalite, hizmet, marka","Üretim, finans, insan, bilgi"]}', '{"index":0}', 'Pazarlama karması (4P): **ürün, fiyat, dağıtım, tutundurma**.', 1, '8. ünite, Pazarlama karması ve müşteri değeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-t-deger-uclusu', 'u8', 8, 'mcq', 'derived', 'Kitaba göre müşteri değer üçlüsü hangi unsurların birleşiminden oluşur?', '{"choices":["Kalite, hizmet ve fiyat","Ürün, fiyat ve dağıtım","Marka, ambalaj ve reklam","Müşteri, tüketici ve talep"]}', '{"index":0}', 'Müşteri için yaratılan değer **kalite, hizmet ve fiyatın** birleşimidir.', 2, '8. ünite, Pazarlama karması ve müşteri değeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-t-tatmin', 'u8', 8, 'mcq', 'derived', 'Ürünün performansı müşterinin beklentisinin altında kalırsa ne olur?', '{"choices":["Müşteri tatmin olmaz","Müşteri her durumda tatmin olur","Talep kendiliğinden artar","Müşteri tüketiciye dönüşür"]}', '{"index":0}', 'Performans beklentinin altında kalırsa **tatmin olmaz**; karşılarsa tatmin olur.', 2, '8. ünite, Pazarlama karması ve müşteri değeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('u8-t-pazarlama-kapsam', 'u8', 8, 'tf', 'derived', 'Kitaba göre pazarlama yalnızca ürünün tanıtımı ve satışından ibarettir.', '{}', '{"value":false}', 'Yanlış. Pazarlama ürün geliştirme, fiyatlama, dağıtım ve tutundurmayı da içine alan faaliyetler bütünüdür.', 1, '8. ünite, Pazarlama karması ve müşteri değeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-deger', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u1-k01';
UPDATE questions SET kavram = 'u1-deger', yedek = 0, etiketler = 'ges' WHERE id = 'u1-k02';
UPDATE questions SET kavram = 'u1-yonetim', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u1-k03';
UPDATE questions SET kavram = 'u1-nitelik', yedek = 0, etiketler = 'ges' WHERE id = 'u1-k04';
UPDATE questions SET kavram = 'u1-yonetim', yedek = 0, etiketler = 'ges' WHERE id = 'u1-k05';
UPDATE questions SET kavram = 'u1-motivasyon', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u1-k06';
UPDATE questions SET kavram = 'u1-surec', yedek = 0, etiketler = 'ges' WHERE id = 'u1-k07';
UPDATE questions SET kavram = 'u1-kobi', yedek = 0, etiketler = 'ges' WHERE id = 'u1-k08';
UPDATE questions SET kavram = 'u1-kobi', yedek = 0, etiketler = 'ges' WHERE id = 'u1-k09';
UPDATE questions SET kavram = 'u1-efsane', yedek = 0, etiketler = 'ges' WHERE id = 'u1-k10';
UPDATE questions SET kavram = 'u1-deger', yedek = 0, etiketler = 'cikmis' WHERE id = 'u1-c04';
UPDATE questions SET kavram = 'u1-tur', yedek = 0, etiketler = 'cikmis' WHERE id = 'u1-c13';
UPDATE questions SET kavram = 'u1-deger', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-icsel-amac';
UPDATE questions SET kavram = 'u1-deger', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-paydas-beklenti';
UPDATE questions SET kavram = 'u1-deger', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-iyi-kotu';
UPDATE questions SET kavram = 'u1-deger', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-en-onemli-sorumluluk';
UPDATE questions SET kavram = 'u1-deger', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-paydas-sayisi';
UPDATE questions SET kavram = 'u1-tanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-cantillon';
UPDATE questions SET kavram = 'u1-tanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-say';
UPDATE questions SET kavram = 'u1-tanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-schumpeter';
UPDATE questions SET kavram = 'u1-tanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-sermaye-sahipligi';
UPDATE questions SET kavram = 'u1-isletme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-isletme-ogeler';
UPDATE questions SET kavram = 'u1-isletme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-girisim-isletme';
UPDATE questions SET kavram = 'u1-isletme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-belediye';
UPDATE questions SET kavram = 'u1-yonetim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-planlama-sorular';
UPDATE questions SET kavram = 'u1-yonetim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-orgutleme';
UPDATE questions SET kavram = 'u1-yonetim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-kontrol';
UPDATE questions SET kavram = 'u1-yonetim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-yurutme';
UPDATE questions SET kavram = 'u1-yonetim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-yonetici-risk';
UPDATE questions SET kavram = 'u1-yonetim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-lider-yonetici-tf';
UPDATE questions SET kavram = 'u1-yonetim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-lider-hedef';
UPDATE questions SET kavram = 'u1-yonetim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-lider-temel';
UPDATE questions SET kavram = 'u1-kobi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-mikro';
UPDATE questions SET kavram = 'u1-kobi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-orta';
UPDATE questions SET kavram = 'u1-kobi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-bagimsizlik';
UPDATE questions SET kavram = 'u1-kobi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-kobi-oran';
UPDATE questions SET kavram = 'u1-kobi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-kobi-dezavantaj';
UPDATE questions SET kavram = 'u1-kobi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-kobi-kopya';
UPDATE questions SET kavram = 'u1-nitelik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-ozyeterlilik';
UPDATE questions SET kavram = 'u1-nitelik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-dogustan';
UPDATE questions SET kavram = 'u1-nitelik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-drucker-risk';
UPDATE questions SET kavram = 'u1-nitelik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-yenilik-kapsam';
UPDATE questions SET kavram = 'u1-motivasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-bagimsizlik-mot';
UPDATE questions SET kavram = 'u1-motivasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-icsel-mot';
UPDATE questions SET kavram = 'u1-motivasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-maddi-mot';
UPDATE questions SET kavram = 'u1-motivasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-ulke-mot';
UPDATE questions SET kavram = 'u1-motivasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-engeller';
UPDATE questions SET kavram = 'u1-motivasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-en-zor-donem';
UPDATE questions SET kavram = 'u1-basarisizlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-olum-vadisi';
UPDATE questions SET kavram = 'u1-basarisizlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-nakit-yakma';
UPDATE questions SET kavram = 'u1-basarisizlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-finansal-sonuc';
UPDATE questions SET kavram = 'u1-basarisizlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-nakit-en-cok';
UPDATE questions SET kavram = 'u1-basarisizlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-kapanis-orani';
UPDATE questions SET kavram = 'u1-basarisizlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-iki-yil';
UPDATE questions SET kavram = 'u1-basarisizlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-olcusuz-buyume';
UPDATE questions SET kavram = 'u1-surec', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-surec-sira';
UPDATE questions SET kavram = 'u1-surec', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-firsat-kaynak';
UPDATE questions SET kavram = 'u1-surec', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-melek';
UPDATE questions SET kavram = 'u1-surec', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-cikis-stratejisi';
UPDATE questions SET kavram = 'u1-surec', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-is-modeli-tanim';
UPDATE questions SET kavram = 'u1-surec', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-sermaye-kaynaklari';
UPDATE questions SET kavram = 'u1-efsane', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-ozkaynak-plan';
UPDATE questions SET kavram = 'u1-efsane', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-ilk-olmak';
UPDATE questions SET kavram = 'u1-efsane', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-fikir-paylas';
UPDATE questions SET kavram = 'u1-efsane', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u1-t-basit-fikir';
UPDATE questions SET kavram = 'u2-kavramlar', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u2-k01';
UPDATE questions SET kavram = 'u2-kavramlar', yedek = 0, etiketler = 'ges' WHERE id = 'u2-k02';
UPDATE questions SET kavram = 'u2-musteri-kesfi', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u2-k03';
UPDATE questions SET kavram = 'u2-dusunme', yedek = 0, etiketler = 'ges' WHERE id = 'u2-k04';
UPDATE questions SET kavram = 'u2-inovasyon', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u2-k05';
UPDATE questions SET kavram = 'u2-inovasyon', yedek = 0, etiketler = 'ges' WHERE id = 'u2-k06';
UPDATE questions SET kavram = 'u2-kavramlar', yedek = 0, etiketler = 'ges' WHERE id = 'u2-k07';
UPDATE questions SET kavram = 'u2-kavramlar', yedek = 0, etiketler = 'ges' WHERE id = 'u2-k08';
UPDATE questions SET kavram = 'u2-musteri-kesfi', yedek = 0, etiketler = 'ges' WHERE id = 'u2-k09';
UPDATE questions SET kavram = 'u2-trend', yedek = 0, etiketler = 'ges' WHERE id = 'u2-k10';
UPDATE questions SET kavram = 'u2-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-fikir-tohum';
UPDATE questions SET kavram = 'u2-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-problem-tanim';
UPDATE questions SET kavram = 'u2-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-ihtiyac-tanim';
UPDATE questions SET kavram = 'u2-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-problemi-sabit';
UPDATE questions SET kavram = 'u2-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-orijinal-fikir';
UPDATE questions SET kavram = 'u2-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-vale';
UPDATE questions SET kavram = 'u2-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-uber';
UPDATE questions SET kavram = 'u2-musteri-kesfi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-kesif-tanim';
UPDATE questions SET kavram = 'u2-musteri-kesfi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-kesif-kural';
UPDATE questions SET kavram = 'u2-musteri-kesfi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-hikaye';
UPDATE questions SET kavram = 'u2-musteri-kesfi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-cevabi-belli';
UPDATE questions SET kavram = 'u2-dusunme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-tasarimsal-sira';
UPDATE questions SET kavram = 'u2-dusunme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-cekic';
UPDATE questions SET kavram = 'u2-dusunme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-ulasim-is';
UPDATE questions SET kavram = 'u2-dusunme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-kuafor';
UPDATE questions SET kavram = 'u2-inovasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-inovasyon-tanim';
UPDATE questions SET kavram = 'u2-inovasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-starbucks';
UPDATE questions SET kavram = 'u2-inovasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-acik-kaynak';
UPDATE questions SET kavram = 'u2-inovasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-dis-kaynak';
UPDATE questions SET kavram = 'u2-inovasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-hibrit';
UPDATE questions SET kavram = 'u2-inovasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-yerel-versiyon';
UPDATE questions SET kavram = 'u2-inovasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-ford';
UPDATE questions SET kavram = 'u2-trend', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-paylasim';
UPDATE questions SET kavram = 'u2-trend', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-odeme-lisans';
UPDATE questions SET kavram = 'u2-trend', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-jenerasyon';
UPDATE questions SET kavram = 'u2-trend', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u2-t-teknoloji-problem';
UPDATE questions SET kavram = 'u3-risk', yedek = 0, etiketler = 'ges' WHERE id = 'u3-k01';
UPDATE questions SET kavram = 'u3-risk', yedek = 0, etiketler = 'ges' WHERE id = 'u3-k02';
UPDATE questions SET kavram = 'u3-ekip', yedek = 0, etiketler = 'ges' WHERE id = 'u3-k03';
UPDATE questions SET kavram = 'u3-ekip', yedek = 0, etiketler = 'ges' WHERE id = 'u3-k04';
UPDATE questions SET kavram = 'u3-finans', yedek = 0, etiketler = 'ges' WHERE id = 'u3-k05';
UPDATE questions SET kavram = 'u3-finans', yedek = 0, etiketler = 'ges' WHERE id = 'u3-k06';
UPDATE questions SET kavram = 'u3-pazar', yedek = 0, etiketler = 'ges' WHERE id = 'u3-k07';
UPDATE questions SET kavram = 'u3-benimseme', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u3-k08';
UPDATE questions SET kavram = 'u3-ihtiyac', yedek = 0, etiketler = 'ges' WHERE id = 'u3-k09';
UPDATE questions SET kavram = 'u3-ihtiyac', yedek = 0, etiketler = 'ges' WHERE id = 'u3-k10';
UPDATE questions SET kavram = 'u3-finans', yedek = 0, etiketler = 'cikmis' WHERE id = 'u3-c09';
UPDATE questions SET kavram = 'u3-risk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-risk-azalt';
UPDATE questions SET kavram = 'u3-risk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-analiz-amac';
UPDATE questions SET kavram = 'u3-risk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-uc-baslik';
UPDATE questions SET kavram = 'u3-ekip', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-uyum-basliklar';
UPDATE questions SET kavram = 'u3-ekip', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-ideal-ekip';
UPDATE questions SET kavram = 'u3-ekip', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-hisse-katki';
UPDATE questions SET kavram = 'u3-ekip', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-arkadas-ortak';
UPDATE questions SET kavram = 'u3-ekip', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-levitt';
UPDATE questions SET kavram = 'u3-ekip', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-vizyon-yol';
UPDATE questions SET kavram = 'u3-finans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-basabas-tanim';
UPDATE questions SET kavram = 'u3-finans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-geri-odeme';
UPDATE questions SET kavram = 'u3-finans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-senaryo';
UPDATE questions SET kavram = 'u3-finans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-bes-yil';
UPDATE questions SET kavram = 'u3-finans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-hisse-sermaye';
UPDATE questions SET kavram = 'u3-finans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-olum-orani';
UPDATE questions SET kavram = 'u3-finans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-cember';
UPDATE questions SET kavram = 'u3-pazar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-pazar-sira';
UPDATE questions SET kavram = 'u3-pazar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-tmp';
UPDATE questions SET kavram = 'u3-pazar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-otel';
UPDATE questions SET kavram = 'u3-pazar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-pazaryeri';
UPDATE questions SET kavram = 'u3-benimseme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-erken-benimseyen';
UPDATE questions SET kavram = 'u3-benimseme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-gec-cogunluk';
UPDATE questions SET kavram = 'u3-benimseme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-kuskucu';
UPDATE questions SET kavram = 'u3-benimseme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-ucurum';
UPDATE questions SET kavram = 'u3-benimseme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-pragmatist';
UPDATE questions SET kavram = 'u3-ihtiyac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-istek-talep';
UPDATE questions SET kavram = 'u3-ihtiyac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-sabit';
UPDATE questions SET kavram = 'u3-ihtiyac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-dogrusal';
UPDATE questions SET kavram = 'u3-ihtiyac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-hijyen';
UPDATE questions SET kavram = 'u3-ihtiyac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-heves';
UPDATE questions SET kavram = 'u3-ihtiyac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-megatrend';
UPDATE questions SET kavram = 'u3-ihtiyac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-moore';
UPDATE questions SET kavram = 'u3-ihtiyac', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u3-t-turkcell';
UPDATE questions SET kavram = 'u4-kanvas', yedek = 0, etiketler = 'ges' WHERE id = 'u4-k01';
UPDATE questions SET kavram = 'u4-kanvas', yedek = 0, etiketler = 'ges' WHERE id = 'u4-k02';
UPDATE questions SET kavram = 'u4-kesit', yedek = 0, etiketler = 'ges' WHERE id = 'u4-k03';
UPDATE questions SET kavram = 'u4-kesit', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u4-k04';
UPDATE questions SET kavram = 'u4-satin-alma', yedek = 0, etiketler = 'ges' WHERE id = 'u4-k05';
UPDATE questions SET kavram = 'u4-kanvas', yedek = 0, etiketler = 'ges' WHERE id = 'u4-k06';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u4-k07';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'ges' WHERE id = 'u4-k08';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'ges' WHERE id = 'u4-k09';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'ges' WHERE id = 'u4-k10';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'cikmis' WHERE id = 'u4-c08';
UPDATE questions SET kavram = 'u4-kanvas', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-osterwalder';
UPDATE questions SET kavram = 'u4-kanvas', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-dokuz';
UPDATE questions SET kavram = 'u4-kanvas', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-kalp';
UPDATE questions SET kavram = 'u4-kanvas', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-urun-pazar';
UPDATE questions SET kavram = 'u4-kanvas', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-cac-ltv';
UPDATE questions SET kavram = 'u4-kanvas', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-ltv';
UPDATE questions SET kavram = 'u4-kanvas', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-kilit-kaynak';
UPDATE questions SET kavram = 'u4-kanvas', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-olagan-etkinlik';
UPDATE questions SET kavram = 'u4-kesit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-segmentasyon';
UPDATE questions SET kavram = 'u4-kesit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-demografik';
UPDATE questions SET kavram = 'u4-kesit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-kullanici-musteri';
UPDATE questions SET kavram = 'u4-kesit', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-is-aci';
UPDATE questions SET kavram = 'u4-satin-alma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-sabotajci';
UPDATE questions SET kavram = 'u4-satin-alma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-faturayi-odeyen';
UPDATE questions SET kavram = 'u4-satin-alma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-etkileyen';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-en-eski';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-taban-tavan';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-xerox';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-abonelik';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-dogrudan';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-saas';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-c2c';
UPDATE questions SET kavram = 'u4-gelir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u4-t-freemium-oran';
UPDATE questions SET kavram = 'u5-ekonomi', yedek = 0, etiketler = 'ges' WHERE id = 'u5-k01';
UPDATE questions SET kavram = 'u5-ekonomi', yedek = 0, etiketler = 'ges' WHERE id = 'u5-k02';
UPDATE questions SET kavram = 'u5-rekabet', yedek = 0, etiketler = 'ges' WHERE id = 'u5-k03';
UPDATE questions SET kavram = 'u5-bes-faktor', yedek = 0, etiketler = 'ges' WHERE id = 'u5-k04';
UPDATE questions SET kavram = 'u5-bes-faktor', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u5-k05';
UPDATE questions SET kavram = 'u5-rekabet', yedek = 0, etiketler = 'ges' WHERE id = 'u5-k06';
UPDATE questions SET kavram = 'u5-talep', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u5-k07';
UPDATE questions SET kavram = 'u5-talep', yedek = 0, etiketler = 'ges' WHERE id = 'u5-k08';
UPDATE questions SET kavram = 'u5-musteri', yedek = 0, etiketler = 'ges' WHERE id = 'u5-k09';
UPDATE questions SET kavram = 'u5-ekonomi', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u5-k10';
UPDATE questions SET kavram = 'u5-ekonomi', yedek = 0, etiketler = 'cikmis' WHERE id = 'u5-c24';
UPDATE questions SET kavram = 'u5-ekonomi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-gostergeler';
UPDATE questions SET kavram = 'u5-ekonomi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-tuik';
UPDATE questions SET kavram = 'u5-ekonomi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-buyume';
UPDATE questions SET kavram = 'u5-ekonomi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-faiz-konut';
UPDATE questions SET kavram = 'u5-ekonomi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-faiz-yatirim';
UPDATE questions SET kavram = 'u5-ekonomi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-kalifiye';
UPDATE questions SET kavram = 'u5-bes-faktor', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-porter';
UPDATE questions SET kavram = 'u5-bes-faktor', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-bes-aktor';
UPDATE questions SET kavram = 'u5-bes-faktor', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-ikame';
UPDATE questions SET kavram = 'u5-bes-faktor', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-tedarikci';
UPDATE questions SET kavram = 'u5-bes-faktor', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-olcek';
UPDATE questions SET kavram = 'u5-rekabet', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-ogrenme';
UPDATE questions SET kavram = 'u5-rekabet', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-sabit-varsayim';
UPDATE questions SET kavram = 'u5-talep', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-potansiyel';
UPDATE questions SET kavram = 'u5-talep', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-ilk-adim';
UPDATE questions SET kavram = 'u5-talep', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-ilintili';
UPDATE questions SET kavram = 'u5-talep', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-gecmis-varsayim';
UPDATE questions SET kavram = 'u5-musteri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-bes-soru';
UPDATE questions SET kavram = 'u5-musteri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u5-t-alan-kullanan';
UPDATE questions SET kavram = 'u6-esnaf-tacir', yedek = 0, etiketler = 'ges' WHERE id = 'u6-k01';
UPDATE questions SET kavram = 'u6-esnaf-tacir', yedek = 0, etiketler = 'ges' WHERE id = 'u6-k02';
UPDATE questions SET kavram = 'u6-sermaye', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u6-k03';
UPDATE questions SET kavram = 'u6-sirket', yedek = 0, etiketler = 'ges' WHERE id = 'u6-k04';
UPDATE questions SET kavram = 'u6-sirket', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u6-k05';
UPDATE questions SET kavram = 'u6-kurulus', yedek = 0, etiketler = 'ges' WHERE id = 'u6-k06';
UPDATE questions SET kavram = 'u6-yonetim', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u6-k07';
UPDATE questions SET kavram = 'u6-sermaye', yedek = 0, etiketler = 'ges' WHERE id = 'u6-k08';
UPDATE questions SET kavram = 'u6-rekabet', yedek = 0, etiketler = 'ges' WHERE id = 'u6-k09';
UPDATE questions SET kavram = 'u6-marka', yedek = 0, etiketler = 'ges' WHERE id = 'u6-k10';
UPDATE questions SET kavram = 'u6-esnaf-tacir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-ayrim-olcut';
UPDATE questions SET kavram = 'u6-esnaf-tacir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-esnaf-beden';
UPDATE questions SET kavram = 'u6-esnaf-tacir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-tacir-defter';
UPDATE questions SET kavram = 'u6-esnaf-tacir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-tacir-iflas';
UPDATE questions SET kavram = 'u6-esnaf-tacir', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-tescil-tacir';
UPDATE questions SET kavram = 'u6-sermaye', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-ayni';
UPDATE questions SET kavram = 'u6-sermaye', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-ceyrek';
UPDATE questions SET kavram = 'u6-sermaye', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-fikri-sermaye';
UPDATE questions SET kavram = 'u6-sirket', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-sahis';
UPDATE questions SET kavram = 'u6-sirket', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-sermaye-sirketi';
UPDATE questions SET kavram = 'u6-sirket', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-tuzel-yok';
UPDATE questions SET kavram = 'u6-sirket', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-ttk-turler';
UPDATE questions SET kavram = 'u6-kurulus', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-ana-sozlesme';
UPDATE questions SET kavram = 'u6-kurulus', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-eksik-sozlesme';
UPDATE questions SET kavram = 'u6-yonetim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-mudur-degisim';
UPDATE questions SET kavram = 'u6-yonetim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-en-az-bir';
UPDATE questions SET kavram = 'u6-rekabet', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-kayitdisi';
UPDATE questions SET kavram = 'u6-rekabet', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-isci-rekabet';
UPDATE questions SET kavram = 'u6-marka', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-marka-amac';
UPDATE questions SET kavram = 'u6-marka', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-bes-yil';
UPDATE questions SET kavram = 'u6-marka', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-unvan';
UPDATE questions SET kavram = 'u6-isg', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u6-t-isg';
UPDATE questions SET kavram = 'u7-etik-ahlak', yedek = 0, etiketler = 'ges' WHERE id = 'u7-k01';
UPDATE questions SET kavram = 'u7-etik-ahlak', yedek = 0, etiketler = 'ges' WHERE id = 'u7-k02';
UPDATE questions SET kavram = 'u7-sorumluluk', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u7-k03';
UPDATE questions SET kavram = 'u7-sorumluluk', yedek = 0, etiketler = 'ges' WHERE id = 'u7-k04';
UPDATE questions SET kavram = 'u7-ilkeler', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u7-k05';
UPDATE questions SET kavram = 'u7-ilkeler', yedek = 0, etiketler = 'ges' WHERE id = 'u7-k06';
UPDATE questions SET kavram = 'u7-ilkeler', yedek = 0, etiketler = 'ges' WHERE id = 'u7-k07';
UPDATE questions SET kavram = 'u7-ilkeler', yedek = 0, etiketler = 'ges,cikmis' WHERE id = 'u7-k08';
UPDATE questions SET kavram = 'u7-ilkeler', yedek = 0, etiketler = 'ges' WHERE id = 'u7-k09';
UPDATE questions SET kavram = 'u7-liderlik', yedek = 0, etiketler = 'ges' WHERE id = 'u7-k10';
UPDATE questions SET kavram = 'u7-etik-ahlak', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-ethos';
UPDATE questions SET kavram = 'u7-etik-ahlak', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-mos';
UPDATE questions SET kavram = 'u7-etik-ahlak', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-olgu';
UPDATE questions SET kavram = 'u7-etik-ahlak', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-ayni-anlam';
UPDATE questions SET kavram = 'u7-etik-ahlak', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-yazili';
UPDATE questions SET kavram = 'u7-sorumluluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-uc-sorumluluk';
UPDATE questions SET kavram = 'u7-sorumluluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-ongorulebilir';
UPDATE questions SET kavram = 'u7-sorumluluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-ahilik';
UPDATE questions SET kavram = 'u7-sorumluluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-kar-amaci';
UPDATE questions SET kavram = 'u7-ilkeler', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-bes-ilke';
UPDATE questions SET kavram = 'u7-ilkeler', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-en-onemli';
UPDATE questions SET kavram = 'u7-ilkeler', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-tekel';
UPDATE questions SET kavram = 'u7-ilkeler', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-guven-yenilik';
UPDATE questions SET kavram = 'u7-ilkeler', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-vergi';
UPDATE questions SET kavram = 'u7-liderlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-etik-lider';
UPDATE questions SET kavram = 'u7-liderlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-davranis';
UPDATE questions SET kavram = 'u7-liderlik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u7-t-bulasma';
UPDATE questions SET kavram = 'u8-kavramlar', yedek = 0, etiketler = 'cikmis' WHERE id = 'u8-c23';
UPDATE questions SET kavram = 'u8-karma', yedek = 0, etiketler = 'cikmis' WHERE id = 'u8-c25';
UPDATE questions SET kavram = 'u8-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u8-t-tuketici';
UPDATE questions SET kavram = 'u8-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u8-t-apple';
UPDATE questions SET kavram = 'u8-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u8-t-istek-talep';
UPDATE questions SET kavram = 'u8-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u8-t-ihtiyac-tanim';
UPDATE questions SET kavram = 'u8-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u8-t-istek-sinirsiz';
UPDATE questions SET kavram = 'u8-kavramlar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u8-t-maslow-alt';
UPDATE questions SET kavram = 'u8-karma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u8-t-4p';
UPDATE questions SET kavram = 'u8-karma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u8-t-deger-uclusu';
UPDATE questions SET kavram = 'u8-karma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u8-t-tatmin';
UPDATE questions SET kavram = 'u8-karma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'u8-t-pazarlama-kapsam';
