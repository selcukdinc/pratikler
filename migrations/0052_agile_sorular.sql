-- Bu dosya scripts/sorular-sql.ts ile icerik/agile/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u1', 'agile', 'Neden Agile?', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u2', 'agile', 'Agile Manifesto ve 12 İlke', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u3', 'agile', 'Lean ve Akış Düşüncesi', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u4', 'agile', 'Scrum''a Giriş', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u5', 'agile', 'Scrum Takımı', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u6', 'agile', 'Sprint, Sprint Planning ve Daily Scrum', 6, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u7', 'agile', 'Sprint Review ve Sprint Retrospective', 7, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u8', 'agile', 'Artefaktlar ve Taahhütleri', 8, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u9', 'agile', 'Görünürlük ve Ölçüm', 9, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u10', 'agile', 'Kanban ve Scrum', 10, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u11', 'agile', 'XP ve Teknik Mükemmellik', 11, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u12', 'agile', 'Anti-pattern''ler ve Zor Durumlar', 12, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ag-u13', 'agile', 'Takımdan Organizasyona', 13, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-empirik-tanim', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Deneysel (empirik) süreç kontrolünde kararlar neye dayanır?', '{"choices":["Gözleme ve deneyimle öğrenilene","Baştan yapılmış ayrıntılı plana","Yöneticinin sezgisine","Sektördeki en iyi uygulamalara"]}', '{"index":0}', 'Empirizm, bilginin deneyimden geldiğini ve kararların **bilinenlere, gözlenene** göre verilmesi gerektiğini söyler. Çok şeyin baştan bilinmediği işlerde kısa döngülerle sonuç üretilir, sonuca bakılır, plan ayarlanır. Scrum bu yaklaşımın üstüne kuruludur (4. ünite).', 1, '1. ünite · Tahmine dayalı ve deneysel (empirik) süreç kontrolü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-tahmine-uygun', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Aşağıdaki işlerden hangisi tahmine dayalı (önceden ayrıntılı planlanan) bir süreçle en rahat yürütülür?', '{"choices":["Aynı tip yüz sunucuya bilinen bir yamayı kurmak","Öğrencilerin ne isteyeceği belli olmayan yeni bir uygulama","Daha önce hiç denenmemiş bir yapay zekâ özelliği","Rakibin hamlesine göre değişecek bir kampanya sitesi"]}', '{"index":0}', 'Girdileri, adımları ve sonucu baştan bilinen, **tekrarlanan** bir iş tahmine dayalı planlamaya uygundur: yüz sunucuya aynı yamayı kurmanın kaç saat süreceği öncekilere bakarak hesaplanabilir. Öteki üç işte gereksinim ya da teknoloji belirsiz; plan ancak yapılırken öğrenilenle netleşir.', 2, '1. ünite · Tahmine dayalı ve deneysel (empirik) süreç kontrolü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-neden-dogdu', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Agile yaklaşımların yaygınlaşmasının temel nedeni hangisidir?', '{"choices":["Yazılımda gereksinimlerin yapılırken değişmesi ve öğrenilmesi","Yazılımcıların dokümantasyon yazmaktan hoşlanmaması","Bilgisayarların 1990''larda daha ucuzlaması","Proje yöneticisi bulmanın zorlaşması"]}', '{"index":0}', 'Yazılım projelerinin çoğunda müşteri ne istediğini ürünü gördükçe anlar, teknoloji de yapılırken sürprizler çıkarır. Baştan dondurulan planlar bu yüzden sık sık tutmaz. Agile yaklaşımlar belirsizliği yok saymak yerine **kısa döngüler ve geri bildirimle** yönetmeyi önerir.', 2, '1. ünite · Tahmine dayalı ve deneysel (empirik) süreç kontrolü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-kontrol-dongusu', 'agile', 'ag-u1', 1, 'tf', 'derived', 'Deneysel süreç kontrolünde plan yapılır; ama plan, sonuçlar gözlendikçe değişebilecek bir varsayım olarak görülür.', '{}', '{"value":true}', 'Doğru. Agile "plansızlık" değildir; plan sık yapılır ve her döngüde gerçek sonuçlara göre güncellenir. Scrum''da Sprint Planning, Daily Scrum ve Sprint Review bu güncellemenin yerleridir.', 1, '1. ünite · Tahmine dayalı ve deneysel (empirik) süreç kontrolü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-asamalar', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Waterfall (şelale) modelinin temel özelliği hangisidir?', '{"choices":["Aşamaların sırayla ve her birinin bir kez yapılması","Her iki haftada bir çalışan ürün teslim edilmesi","Gereksinimlerin her sprintte yeniden sıralanması","Test ve kodlamanın aynı anda yürümesi"]}', '{"index":0}', 'Waterfall''da analiz, tasarım, kodlama, test ve teslim **sırayla**, her biri bir öncekinin bitmesini bekleyerek ve genellikle birer kez yapılır. Müşteri çalışan ürünü çoğu zaman en sonda görür.', 1, '1. ünite · Waterfall, V-model ve Royce''un 1970 makalesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-royce', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Waterfall''un kaynağı sayılan Winston Royce''un 1970 tarihli makalesi tek geçişli sıralı süreç için ne söyler?', '{"choices":["Riskli olduğunu ve geri bildirimle tekrar gerektiğini","Bütün yazılım projeleri için en iyi yol olduğunu","Yalnızca küçük takımlarda işe yarayacağını","Test aşamasının atlanabileceğini"]}', '{"index":0}', 'Royce makalesinde sıralı aşamaları çizer ama hemen ardından bu basit hâlin **riskli ve hataya açık** olduğunu söyler; aşamalar arasında geri dönüş, prototip ("işi iki kez yap") ve müşteri katılımı önerir. "Waterfall" adı makalede geçmez; model sonradan en basit çizimiyle yaygınlaştı.', 3, '1. ünite · Waterfall, V-model ve Royce''un 1970 makalesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-gec-geri-bildirim', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Waterfall''da bir gereksinimin yanlış anlaşıldığı en sık ne zaman ortaya çıkar?', '{"choices":["Kabul testinde ya da teslimden sonra","Analiz aşamasının ilk haftasında","Tasarım belgesi yazılırken","Kod gözden geçirmesinde"]}', '{"index":0}', 'Müşteri çalışan ürünü en sonda gördüğü için yanlış anlaşılan bir gereksinim çoğunlukla **kabul testinde ya da teslimden sonra** fark edilir. O noktada düzeltmenin maliyeti en yüksektir; agile''ın erken ve sık teslim ısrarı bu riski küçültmek içindir.', 2, '1. ünite · Waterfall, V-model ve Royce''un 1970 makalesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-v-model', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'V-model, waterfall''a göre neyi daha belirgin yapar?', '{"choices":["Her geliştirme aşamasının karşılığı olan test seviyesini","Ürünün iki haftalık iterasyonlarla büyümesini","Müşterinin her gün takımla birlikte çalışmasını","Gereksinimlerin proje boyunca değişebilmesini"]}', '{"index":0}', 'V-model sol kolda gereksinim, sistem tasarımı, ayrıntılı tasarım ve kodlamayı; sağ kolda bunların her birine **karşılık gelen test seviyesini** (birim, entegrasyon, sistem, kabul testi) koyar. Yine de sıralı ve tahmine dayalı bir modeldir.', 2, '1. ünite · Waterfall, V-model ve Royce''un 1970 makalesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-waterfall-uygun', 'agile', 'ag-u1', 1, 'tf', 'derived', 'Gereksinimleri yasal olarak sabit ve teknolojisi iyi bilinen bir işte sıralı (waterfall benzeri) bir plan makul bir seçim olabilir.', '{}', '{"value":true}', 'Doğru. Agile her iş için tek doğru değildir. Belirsizlik düşükse ayrıntılı plan işe yarar; agile''ın üstünlüğü belirsizlik arttıkça ortaya çıkar. Yine de yasal gereksinimli işlerde bile ara teslimler riskleri erken gösterir.', 2, '1. ünite · Waterfall, V-model ve Royce''un 1970 makalesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-stacey-eksen', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Stacey matrisi işleri hangi iki eksene göre sınıflandırır?', '{"choices":["Gereksinim uzlaşması ve teknoloji kesinliği","Proje bütçesi ve takımın büyüklüğü","Proje süresi ve hedeflenen müşteri sayısı","Yazılan kod satırı ve bulunan hata sayısı"]}', '{"index":0}', 'Agile dünyasında kullanılan uyarlamasıyla Stacey matrisi bir eksende **ne istendiği konusunda ne kadar uzlaşıldığını**, öbür eksende **nasıl yapılacağının ne kadar kesin** bilindiğini gösterir. İkisi de netse iş basit, ikisi de belirsizse kaotiktir; aradaki geniş bölge kompleks işlerdir.', 1, '1. ünite · Gereksinim ve teknoloji belirsizliği: Stacey matrisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-stacey-kompleks', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Ne istediği tam belli olmayan bir müşteri için yeni bir teknolojiyle ürün geliştirmek Stacey matrisinde genellikle hangi bölgeye düşer?', '{"choices":["Kompleks","Basit","Karmaşık ama bilinebilir","Tamamen sıradan"]}', '{"index":0}', 'Gereksinim de teknoloji de kısmen belirsiz olduğunda iş **kompleks** bölgededir. Scrum Rehberi Scrum''u tam bu tür "kompleks problemler" için tanımlar.', 2, '1. ünite · Gereksinim ve teknoloji belirsizliği: Stacey matrisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-iki-belirsizlik', 'agile', 'ag-u1', 1, 'tf', 'derived', 'Yazılımda tek belirsizlik kaynağı müşterinin ne istediğidir; teknoloji tarafı hep önceden bilinir.', '{}', '{"value":false}', 'Yanlış. Ne yapılacağı (gereksinim) kadar **nasıl yapılacağı** da belirsiz olabilir: yeni bir kütüphane, beklenmedik performans sorunu, entegre olunacak eski bir sistem. Stacey matrisinin iki ekseni bu yüzden vardır.', 1, '1. ünite · Gereksinim ve teknoloji belirsizliği: Stacey matrisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-kompleks-yaklasim', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Cynefin modelinde kompleks (complex) alan için önerilen yaklaşım hangisidir?', '{"choices":["Dene, gözle, karşılık ver (probe-sense-respond)","Algıla, sınıflandır, karşılık ver (sense-categorize-respond)","Algıla, analiz et, karşılık ver (sense-analyze-respond)","Harekete geç, algıla, karşılık ver (act-sense-respond)"]}', '{"index":0}', 'Kompleks alanda neden-sonuç ilişkisi ancak geriye bakınca görülür; bu yüzden küçük, güvenli **deneyler** yapılır, sonuç gözlenir ve ona göre ilerlenir. Açık alanda sınıflandırma, karmaşık alanda uzman analizi, kaotik alanda önce harekete geçmek önerilir.', 1, '1. ünite · Cynefin: açık, karmaşık, kompleks ve kaotik alanlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-karmasik', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Bir veritabanının neden yavaşladığını bulmak için uzman bir mühendisin sorgu planlarını incelemesi Cynefin''de hangi alana örnektir?', '{"choices":["Karmaşık (complicated)","Açık (clear)","Kompleks (complex)","Kaotik (chaotic)"]}', '{"index":0}', 'Neden-sonuç ilişkisi vardır ama görmek için **uzmanlık ve analiz** gerekir: bu karmaşık (complicated) alandır. Burada birden çok iyi uygulama olabilir; uzman bunlar arasından seçer.', 2, '1. ünite · Cynefin: açık, karmaşık, kompleks ve kaotik alanlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-kaotik', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Canlı sistem çöktü ve yemekhane kuyruğunda yüzlerce öğrenci bekliyor. Cynefin''e göre ilk adım ne olmalı?', '{"choices":["Önce sistemi ayağa kaldırmak için hemen harekete geçmek","Kök neden analizi için bir toplantı planlamak","Konuyu bir sonraki sprintin backlog''una yazmak","Benzer olayların istatistiğini çıkarmak"]}', '{"index":0}', 'Kaotik alanda neden-sonuç ilişkisi o an görülemez; önce **dengeyi sağlamak için harekete geçilir** (act), sonra durum algılanır ve kompleks alana taşınarak öğrenilir. Kök neden analizi kriz geçtikten sonraki iştir.', 2, '1. ünite · Cynefin: açık, karmaşık, kompleks ve kaotik alanlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-acik-alan', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Cynefin''in açık (clear) alanında neden-sonuç ilişkisi nasıldır?', '{"choices":["Herkes için apaçıktır","Yalnızca uzmanlar analizle görebilir","Ancak geriye bakınca anlaşılır","O an hiç görülemez"]}', '{"index":0}', 'Açık alanda (eski adlarıyla simple ya da obvious) neden-sonuç ilişkisi herkesin görebileceği kadar nettir; bilinen **en iyi uygulama** uygulanır. Bu alanda ayrıntılı prosedür ve kontrol listeleri iyi çalışır.', 1, '1. ünite · Cynefin: açık, karmaşık, kompleks ve kaotik alanlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-cynefin-scrum', 'agile', 'ag-u1', 1, 'tf', 'derived', 'Scrum''un kısa döngülerle deneme yapıp sonucu denetleme yapısı en çok Cynefin''in kompleks alanındaki işlere uyar.', '{}', '{"value":true}', 'Doğru. Her Sprint bir deneydir: hedef konur, Increment üretilir, Sprint Review''da sonuç gözlenir ve backlog uyarlanır. Bu, kompleks alanın "dene, gözle, karşılık ver" önerisinin bir biçimidir.', 2, '1. ünite · Cynefin: açık, karmaşık, kompleks ve kaotik alanlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-iteratif-artimli', 'agile', 'ag-u1', 1, 'mcq', 'derived', '"Artımlı" (incremental) ve "iteratif" (iterative) geliştirme arasındaki fark hangi seçenekte doğru verilmiştir?', '{"choices":["Artımlı parça ekler, iteratif aynı parçayı tekrar ele alıp iyileştirir","Artımlı daha hızlıdır, iteratif daha yavaştır","Artımlı yalnızca testte, iteratif yalnızca analizde kullanılır","İkisi aynı şeyin farklı adlarıdır"]}', '{"index":0}', '**Artımlı** geliştirmede ürün kullanılabilir parçalar eklenerek büyür (önce menü, sonra sipariş, sonra ödeme). **İteratif** geliştirmede aynı şey tekrar tekrar ele alınıp iyileştirilir (menü ekranının üçüncü sürümü). Agile ikisini birlikte kullanır: her döngüde hem yeni parça eklenir hem eskisi geri bildirimle düzeltilir.', 2, '1. ünite · İteratif ve artımlı geliştirme, erken geri bildirim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-deger-erken', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Kampüs Yemekhanesi uygulaması 12 ayda bir kerede teslim edilmek yerine her iki haftada kullanılabilir bir parça teslim edilirse en önemli kazanç hangisidir?', '{"choices":["Erken geri bildirim ve değerin erken gelmesi","Toplam işin kesinlikle azalması","Dokümantasyona gerek kalmaması","Paydaşların toplantılara gelmek zorunda olmaması"]}', '{"index":0}', 'Sık teslim, yanlış giden şeyi haftalar içinde gösterir ve öğrenciler ilk özelliklerden aylarca önce yararlanmaya başlar. Toplam iş kendiliğinden azalmaz; ama **gereksiz ya da yanlış işe harcanan emek** erken fark edildiği için genellikle azalır.', 2, '1. ünite · İteratif ve artımlı geliştirme, erken geri bildirim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-geri-bildirim-sayisi', 'agile', 'ag-u1', 1, 'num', 'derived', '52 haftalık bir projede her iki haftada bir paydaşlara çalışan ürün gösteriliyorsa, proje boyunca kaç geri bildirim fırsatı olur?', '{"blanks":1}', '{"blanks":[["26±0"]]}', '52 / 2 = **26**. Aynı projede ürün yalnızca sonda gösterilseydi tek bir fırsat olurdu ve o da düzeltme için en pahalı an olurdu.', 1, '1. ünite · İteratif ve artımlı geliştirme, erken geri bildirim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-kaykay', 'agile', 'ag-u1', 1, 'mcq', 'derived', '"Önce tekerlek, sonra şasi, sonra motor, en son araba" yerine "önce kaykay, sonra bisiklet, sonra motosiklet, sonra araba" teslim etmek hangi fikri anlatır?', '{"choices":["Her adımda kullanılabilir bir ürünle öğrenmeyi","Bileşenlerin ayrı takımlarca yapılmasını","Projeyi en ucuz malzemeyle başlatmayı","Müşteriden gereksinimleri en sonda almayı"]}', '{"index":0}', 'Henrik Kniberg''in bilinen çizimi: tekerlek tek başına kimsenin işine yaramaz, kaykay ise yaramaz ama "bir yerden bir yere gitme" ihtiyacını kısmen karşılar ve **geri bildirim üretir**. Her adım kullanılabilir olunca müşteri belki arabaya hiç ihtiyacı olmadığını da söyleyebilir.', 2, '1. ünite · İteratif ve artımlı geliştirme, erken geri bildirim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-ters-ucgen', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Agile''ın "ters üçgen" yaklaşımında genellikle hangisi sabit tutulur, hangisi esnetilir?', '{"choices":["Zaman ve maliyet sabit, kapsam esnek","Kapsam sabit, zaman ve maliyet esnek","Hepsi sabit, kalite esnek","Kapsam ve maliyet sabit, zaman esnek"]}', '{"index":0}', 'Geleneksel planlamada kapsam baştan sabitlenir, zaman ve maliyet ondan tahmin edilir. Agile''da takım ve döngü süresi (dolayısıyla **zaman ve maliyet**) sabittir; **kapsam** değere göre sıralanır ve en değerliden başlanır. Kalite pazarlık konusu değildir.', 2, '1. ünite · Demir üçgen ve agile''ın ters üçgeni', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-kalite-esnemez', 'agile', 'ag-u1', 1, 'tf', 'derived', 'Agile''da teslim tarihi yaklaşınca kaliteden kısıp kapsamı korumak kabul gören bir uygulamadır.', '{}', '{"value":false}', 'Yanlış. Scrum Rehberi Sprint boyunca kalitenin düşürülmeyeceğini açıkça söyler. Esneyen şey kapsamdır: daha az şey, ama Definition of Done''ı karşılayarak teslim edilir. Kalitesiz iş teknik borç olarak geri döner.', 1, '1. ünite · Demir üçgen ve agile''ın ters üçgeni', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-snowbird', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Agile Manifesto ne zaman ve nerede yazıldı?', '{"choices":["Şubat 2001, Snowbird, Utah","Mart 1995, Austin, Teksas","Ekim 1986, Tokyo, Japonya","Kasım 2020, Amsterdam, Hollanda"]}', '{"index":0}', 'Manifesto **Şubat 2001''de Utah''taki Snowbird** kayak merkezinde 17 yazılımcının buluşmasında yazıldı. Aralarında Scrum''un (Schwaber, Sutherland), XP''nin (Beck), Crystal''ın (Cockburn) ve başka "hafif" yöntemlerin temsilcileri vardı.', 1, '1. ünite · Agile''a giden yol: Lean, XP, Scrum ve Snowbird', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u1-once-gelenler', 'agile', 'ag-u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi Agile Manifesto''dan **önce** ortaya çıkmış bir yaklaşım değildir?', '{"choices":["SAFe","Scrum","Extreme Programming (XP)","Toyota Üretim Sistemi"]}', '{"index":0}', 'Toyota Üretim Sistemi 1950''lerden, Scrum 1995''ten, XP 1990''ların sonundan gelir; hepsi Manifesto''yu besledi. **SAFe** (Scaled Agile Framework) ise 2011''de yayımlandı; Epic ve Feature terimlerinin yaygınlaşmasında payı büyüktür (13. ünite ve Backlog pratiği).', 2, '1. ünite · Agile''a giden yol: Lean, XP, Scrum ve Snowbird', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-bireyler', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Agile Manifesto''ya göre "bireyler ve etkileşimler" neyin önünde tutulur?', '{"choices":["Süreçler ve araçlar","Kapsamlı dokümantasyon","Sözleşme pazarlığı","Bir planı takip etmek"]}', '{"index":0}', 'Dört değer cümlesi: **bireyler ve etkileşimler** > süreçler ve araçlar; **çalışan yazılım** > kapsamlı dokümantasyon; **müşteriyle iş birliği** > sözleşme pazarlığı; **değişime karşılık vermek** > bir planı takip etmek.', 1, '2. ünite · Manifesto''nun dört değer cümlesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-calisan-yazilim', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Manifesto''da "çalışan yazılım" hangisinin önünde tutulur?', '{"choices":["Kapsamlı dokümantasyon","Süreçler ve araçlar","Sözleşme pazarlığı","Bir planı takip etmek"]}', '{"index":0}', '"Çalışan yazılımı kapsamlı dokümantasyona" tercih ederiz. Dokümantasyon yasak değildir; ama ilerlemenin kanıtı belge değil, kullanılabilen üründür.', 1, '2. ünite · Manifesto''nun dört değer cümlesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-musteri', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Manifesto''da "sözleşme pazarlığı"nın karşısına konan değer hangisidir?', '{"choices":["Müşteriyle iş birliği","Değişime karşılık vermek","Bireyler ve etkileşimler","Çalışan yazılım"]}', '{"index":0}', '"Müşteriyle iş birliğini sözleşme pazarlığına" tercih ederiz. Sözleşme yine vardır; ama ilişki "madde madde hak arama" yerine birlikte doğru ürünü bulma üzerine kurulur.', 1, '2. ünite · Manifesto''nun dört değer cümlesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-degisim', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Manifesto''nun dördüncü değer cümlesinde "bir planı takip etmek" neyin arkasında kalır?', '{"choices":["Değişime karşılık vermek","Müşteriyle iş birliği","Çalışan yazılım","Süreçler ve araçlar"]}', '{"index":0}', '"Değişime karşılık vermeyi bir planı takip etmeye" tercih ederiz. Plan yapılır; ama yeni bilgi geldiğinde planı korumak için gerçeği görmezden gelmek yerine plan değiştirilir.', 1, '2. ünite · Manifesto''nun dört değer cümlesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-deger-sayisi', 'agile', 'ag-u2', 2, 'num', 'derived', 'Agile Manifesto kaç değer cümlesi ve kaç ilkeden oluşur? (İlke sayısını yaz.)', '{"blanks":1}', '{"blanks":[["12±0"]]}', 'Manifesto **4 değer cümlesi** ve onu açıklayan **12 ilkeden** oluşur. İlkeler Manifesto''nun ikinci sayfasında "Agile Manifesto''nun arkasındaki ilkeler" başlığıyla yer alır.', 1, '2. ünite · Manifesto''nun dört değer cümlesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-terazi-arac', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Squad yeni bir proje yönetim aracına geçiyor. Tech Lead Can, "Önce araçtaki bütün alanları ve iş akışlarını tanımlayalım, sonra kim kiminle konuşur ona bakarız" diyor. Bu yaklaşım Manifesto''nun hangi değeriyle en çok çelişir?', '{"choices":["Bireyler ve etkileşimler","Çalışan yazılım","Müşteriyle iş birliği","Değişime karşılık vermek"]}', '{"index":0}', 'Önce aracı ve süreci tasarlayıp insanların etkileşimini ona uydurmak, "süreçler ve araçlar"ı **bireyler ve etkileşimlerin** önüne koymaktır. Agile yaklaşım önce takımın nasıl çalıştığına bakar, aracı ona hizmet edecek kadar kurar.', 2, '2. ünite · Manifesto''nun dört değer cümlesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-sag-deger', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Manifesto''daki "sağdaki maddelerin de değeri olmakla birlikte, soldakilere daha çok değer veririz" cümlesi ne anlatır?', '{"choices":["Sağdakiler gereklidir ama öncelik soldakilerdedir","Sağdaki maddeler tamamen bırakılmalıdır","Sağdaki ve soldaki maddeler eşit önemdedir","Sağdaki maddeler yalnızca büyük şirketler içindir"]}', '{"index":0}', 'Manifesto bir tercih sıralamasıdır, yasak listesi değil. Süreç, araç, dokümantasyon, sözleşme ve plan **değerlidir**; çatıştıklarında soldaki madde öne geçer.', 1, '2. ünite · "Sağdakilerin de değeri var": değerlerin doğru okunması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-dokuman-yok', 'agile', 'ag-u2', 2, 'tf', 'derived', 'Agile Manifesto''ya göre agile bir takım dokümantasyon yazmaz.', '{}', '{"value":false}', 'Yanlış. Manifesto çalışan yazılımı **kapsamlı** dokümantasyona tercih eder ve sağdaki maddelerin de değeri olduğunu açıkça söyler. Yeterli ve işe yarayan dokümantasyon (API belgesi, mimari karar kaydı, kullanım kılavuzu) yazılır.', 1, '2. ünite · "Sağdakilerin de değeri var": değerlerin doğru okunması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-plan-yok', 'agile', 'ag-u2', 2, 'tf', 'derived', 'Manifesto''da "değişime karşılık vermek" değeri olduğu için agile takımlar plan yapmaz.', '{}', '{"value":false}', 'Yanlış. Plan da değerlidir; agile takımlar sık plan yapar (Scrum''da her Sprint Planning, her Daily Scrum). Fark, planın değişmez bir sözleşme değil, yeni bilgiyle güncellenen bir araç olmasıdır.', 1, '2. ünite · "Sağdakilerin de değeri var": değerlerin doğru okunması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-en-yuksek-oncelik', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Manifesto''nun ilk ilkesine göre en yüksek öncelik nedir?', '{"choices":["Değerli yazılımı erken ve sürekli teslim etmek","Bütün gereksinimleri baştan eksiksiz toplamak","Takımın her sprintte daha fazla iş bitirmesi","Sözleşmedeki tarihlere eksiksiz uymak"]}', '{"index":0}', 'İlk ilke: en yüksek önceliğimiz, **değerli yazılımı erken ve sürekli teslim ederek** müşteriyi memnun etmektir.', 1, '2. ünite · İlkeler 1-3: müşteri memnuniyeti, değişime açıklık, sık teslim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-gec-degisiklik', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'İkinci ilke, geliştirmenin geç aşamalarında gelen gereksinim değişiklikleri için ne der?', '{"choices":["Geç de olsa memnuniyetle karşılanır","Bir sonraki projeye ertelenir","Ancak sözleşme değişirse kabul edilir","Takımın onayı olmadan kabul edilemez"]}', '{"index":0}', 'İkinci ilke: değişen gereksinimleri, geliştirmenin geç aşamalarında bile **memnuniyetle karşılarız**; agile süreçler değişimi müşterinin rekabet avantajı için kullanır. Scrum''da bu karşılama Product Backlog üzerinden yapılır; çalışan Sprint''in hedefi korunur (6. ünite).', 2, '2. ünite · İlkeler 1-3: müşteri memnuniyeti, değişime açıklık, sık teslim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-teslim-araligi', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Üçüncü ilke çalışan yazılımın ne sıklıkta teslim edilmesini önerir?', '{"choices":["Birkaç haftadan birkaç aya, kısa olanı tercih ederek","Her gün en az bir kez","Yılda bir, büyük sürümlerle","Müşteri istediğinde, belirli bir aralık olmadan"]}', '{"index":0}', 'Üçüncü ilke: çalışan yazılımı **birkaç haftadan birkaç aya** uzanan aralıklarla, **kısa olanı tercih ederek** sık sık teslim edin. Bugün sürekli teslim (continuous delivery) yapan takımlar bunu günlere hatta saatlere indirir.', 1, '2. ünite · İlkeler 1-3: müşteri memnuniyeti, değişime açıklık, sık teslim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-her-gun', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Dördüncü ilkeye göre iş tarafındaki kişiler ve geliştiriciler ne sıklıkla birlikte çalışmalıdır?', '{"choices":["Proje boyunca her gün","Yalnızca proje başında ve sonunda","Ayda bir toplantıda","Yalnızca sorun çıktığında"]}', '{"index":0}', 'Dördüncü ilke: iş insanları ve geliştiriciler proje boyunca **her gün** birlikte çalışmalıdır. Kampüs Yemekhanesi''nde Nurten Hanım''ın ya da Elif''in squad''a her gün ulaşılabilir olması bu ilkenin uygulamasıdır.', 1, '2. ünite · İlkeler 4-6: iş birliği, motive bireyler, yüz yüze iletişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-motive', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Beşinci ilke projelerin neyin etrafında kurulmasını önerir?', '{"choices":["Motive bireylerin; onlara ortam, destek ve güven verilerek","Ayrıntılı iş tanımlarının; herkes kendi tanımına göre çalışarak","Sıkı denetimin; her iş saatlik raporlanarak","En deneyimli uzmanın; diğerleri onun kararına uyarak"]}', '{"index":0}', 'Beşinci ilke: projeleri **motive bireylerin** etrafında kurun; ihtiyaç duydukları ortamı ve desteği verin, işi bitireceklerine **güvenin**.', 2, '2. ünite · İlkeler 4-6: iş birliği, motive bireyler, yüz yüze iletişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-yuz-yuze', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Altıncı ilkeye göre bir geliştirme takımına ve takım içinde bilgi aktarmanın en verimli ve etkili yolu hangisidir?', '{"choices":["Yüz yüze konuşma","Ayrıntılı e-posta","Proje yönetim aracındaki yorumlar","Haftalık durum raporu"]}', '{"index":0}', 'Altıncı ilke **yüz yüze konuşmayı** en verimli yol sayar. Uzaktan çalışan takımlar bunu görüntülü görüşmeyle yaklaşık olarak sağlar; önemli olan yazılı kanalların konuşmanın yerine geçmemesidir.', 2, '2. ünite · İlkeler 4-6: iş birliği, motive bireyler, yüz yüze iletişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-ilerleme-olcusu', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Yedinci ilkeye göre ilerlemenin birincil ölçüsü nedir?', '{"choices":["Çalışan yazılım","Biten görev sayısı","Harcanan saat","Tamamlanan belge sayısı"]}', '{"index":0}', 'Yedinci ilke: **çalışan yazılım** ilerlemenin birincil ölçüsüdür. "Yüzde 90 bitti" diyen ama hiçbir parçası kullanılamayan bir iş, agile gözüyle henüz değer üretmemiştir.', 1, '2. ünite · İlkeler 7-10: çalışan yazılım, sürdürülebilir hız, teknik mükemmellik, sadelik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-surdurulebilir', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Squad son üç sprinttir hafta sonları da çalışarak hedefleri tutturuyor ve yönetim bunu "bağlılık" diye övüyor. Bu durum en çok hangi ilkeyle çelişir?', '{"choices":["Sürdürülebilir geliştirme ve sabit hız","Sık teslim","Yüz yüze iletişim","Müşteriyle her gün çalışma"]}', '{"index":0}', 'Sekizinci ilke: agile süreçler **sürdürülebilir geliştirmeyi** destekler; sponsorlar, geliştiriciler ve kullanıcılar **sabit bir hızı süresiz** koruyabilmelidir. Fazla mesaiyle tutturulan hedef, yorgunluk ve hata olarak geri döner ve gerçek kapasiteyi gizler.', 2, '2. ünite · İlkeler 7-10: çalışan yazılım, sürdürülebilir hız, teknik mükemmellik, sadelik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-teknik-mukemmellik', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Dokuzuncu ilkeye göre çevikliği ne artırır?', '{"choices":["Teknik mükemmelliğe ve iyi tasarıma sürekli özen","Daha uzun sprintler ve daha az toplantı","Daha çok yönetim katmanı ve onay adımı","Test aşamasını en sona bırakıp hızlanmak"]}', '{"index":0}', 'Dokuzuncu ilke: **teknik mükemmelliğe ve iyi tasarıma sürekli özen** çevikliği artırır. Kötü kod değişimi pahalılaştırır; değişimi ucuz tutan şey temiz tasarım, test ve sürekli entegrasyondur (11. ünite).', 1, '2. ünite · İlkeler 7-10: çalışan yazılım, sürdürülebilir hız, teknik mükemmellik, sadelik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-sadelik', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Onuncu ilke sadeliği nasıl tanımlar?', '{"choices":["Yapılmayan işin miktarını en çoklama sanatı","Kodun olabildiğince az satırla yazılması","Takımın olabildiğince az kişiyle kurulması","Toplantıların ve belgelerin kaldırılması"]}', '{"index":0}', 'Onuncu ilke: **sadelik, yapılmayan işin miktarını en çoklama sanatıdır** ve vazgeçilmezdir. Kimsenin kullanmayacağı bir özelliği yapmamak, en verimli iştir.', 2, '2. ünite · İlkeler 7-10: çalışan yazılım, sürdürülebilir hız, teknik mükemmellik, sadelik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-kendini-orgutleyen', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'On birinci ilkeye göre en iyi mimariler, gereksinimler ve tasarımlar nereden ortaya çıkar?', '{"choices":["Kendi kendini örgütleyen takımlardan","Mimari kuruldan","Müşterinin teknik ekibinden","Proje başındaki analiz belgesinden"]}', '{"index":0}', 'On birinci ilke: en iyi mimariler, gereksinimler ve tasarımlar **kendi kendini örgütleyen takımlardan** doğar. Scrum Rehberi 2020 bunu bir adım ileri götürüp "kendi kendini yöneten" takımdan söz eder (4. ünite).', 1, '2. ünite · İlkeler 11-12: kendi kendini örgütleyen takım ve düzenli yansıtma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-yansitma', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'On ikinci ilke takımın düzenli aralıklarla ne yapmasını ister?', '{"choices":["Nasıl daha etkili olacağını düşünüp davranışını ayarlamasını","Bütün proje belgelerini baştan gözden geçirip yeniden yazmasını","Yöneticisine kişi kişi ayrıntılı performans raporu vermesini","Gelecek yılın bütün işlerini ayrıntılı olarak planlamasını"]}', '{"index":0}', 'On ikinci ilke: takım düzenli aralıklarla **nasıl daha etkili olabileceği üzerine düşünür** ve davranışını buna göre ayarlar. Scrum''daki karşılığı Sprint Retrospective''dir (7. ünite).', 1, '2. ünite · İlkeler 11-12: kendi kendini örgütleyen takım ve düzenli yansıtma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-agile-scrum', 'agile', 'ag-u2', 2, 'tf', 'derived', 'Agile ve Scrum aynı şeyin iki adıdır.', '{}', '{"value":false}', 'Yanlış. Agile bir değerler ve ilkeler bütünüdür; Scrum bu değerlerle uyumlu **çerçevelerden biridir**. Kanban, XP, Crystal ve başkaları da agile sayılır. Scrum Rehberi''nde "agile" kelimesi bile geçmez.', 1, '2. ünite · Agile hakkında yaygın yanılgılar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-agile-hizli', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Yönetim, "Agile''a geçersek aynı işi yarı sürede bitiririz" diyor. Bu beklentinin sorunu nedir?', '{"choices":["Agile''ın vaadi hız değil, belirsizlikte doğru şeyi erken öğrenmektir","Agile ancak en az iki yıl sonra hızlandırır","Agile yalnızca küçük projelerde işe yarar","Agile''da süre ölçülmez, bu yüzden karşılaştırılamaz"]}', '{"index":0}', 'Agile aynı kapsamı sihirli biçimde hızlandırmaz. Kazanç, değerli olanın **erken** teslim edilmesi, yanlış yönün **erken** fark edilmesi ve gereksiz işin hiç yapılmamasıdır. Hız artışı görülürse bu çoğunlukla daha az israfın sonucudur.', 2, '2. ünite · Agile hakkında yaygın yanılgılar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u2-agile-ilke-mi', 'agile', 'ag-u2', 2, 'mcq', 'derived', 'Aşağıdakilerden hangisi Agile Manifesto''nun 12 ilkesinden biri **değildir**?', '{"choices":["Her ekip iki haftalık sprintlerle çalışmalıdır","Çalışan yazılım ilerlemenin birincil ölçüsüdür","Sadelik vazgeçilmezdir","Takım düzenli aralıklarla nasıl daha etkili olacağını düşünür"]}', '{"index":0}', 'Manifesto belirli bir döngü süresi (iki hafta), toplantı ya da rol dayatmaz; yalnızca kısa aralıkları tercih eder. "Sprint" kelimesi Scrum''dan gelir ve Manifesto''da geçmez.', 2, '2. ünite · Agile hakkında yaygın yanılgılar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-koken', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Lean düşüncenin kökeni hangisidir?', '{"choices":["Toyota Üretim Sistemi","NASA''nın Apollo programı","Snowbird toplantısı","ISO 9001 standardı"]}', '{"index":0}', 'Lean, Taiichi Ohno ve arkadaşlarının 1950''lerden itibaren geliştirdiği **Toyota Üretim Sistemi**nden doğdu; "lean" adı 1990''larda Batı''daki araştırmalarla yaygınlaştı. Mary ve Tom Poppendieck 2003''te bu ilkeleri yazılıma uyarladı.', 1, '3. ünite · Toyota Üretim Sistemi ve Lean yazılım ilkeleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-ilkeler', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Aşağıdakilerden hangisi Poppendieck''lerin Lean yazılım geliştirme ilkelerinden biri **değildir**?', '{"choices":["Kararları olabildiğince erken ve kesin ver","İsrafı ortadan kaldır ve akışı hızlandır","Öğrenmeyi güçlendir ve sık geri bildirim al","Parçaları değil bütünü en iyile"]}', '{"index":0}', 'Yedi ilke: israfı ortadan kaldır, öğrenmeyi güçlendir, **kararı olabildiğince geç ver**, olabildiğince hızlı teslim et, takımı güçlendir, bütünlüğü içeriden kur, bütünü gör. Geri dönülmesi zor kararları son sorumlu ana kadar ertelemek, belirsizlik altında daha çok bilgiyle karar vermeyi sağlar.', 2, '3. ünite · Toyota Üretim Sistemi ve Lean yazılım ilkeleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-muda-mura-muri', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Lean''de "muri" neyi anlatır?', '{"choices":["Aşırı yüklenme","Değer katmayan iş","Düzensizlik ve dalgalanma","Sürekli iyileştirme"]}', '{"index":0}', 'Lean üç M''den söz eder: **muda** israf, **mura** düzensizlik (iş yükünün dalgalanması), **muri** aşırı yüklenme (insanı ya da makineyi kapasitesinin üstünde zorlamak). Sürekli iyileştirmenin adı ise kaizen''dir.', 3, '3. ünite · Toyota Üretim Sistemi ve Lean yazılım ilkeleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-kaizen', 'agile', 'ag-u3', 3, 'tf', 'derived', 'Scrum''daki Sprint Retrospective, Lean''deki sürekli iyileştirme (kaizen) fikrinin bir uygulaması sayılabilir.', '{}', '{"value":true}', 'Doğru. Her Sprint sonunda takım süreçlerini, araçlarını ve ilişkilerini inceleyip küçük bir iyileştirme seçer. Scrum Rehberi de Scrum''un empirizmin yanında **lean düşünceye** dayandığını söyler.', 1, '3. ünite · Toyota Üretim Sistemi ve Lean yazılım ilkeleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-yedi-israf', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Aşağıdakilerden hangisi Toyota Üretim Sistemi''nin klasik yedi israfından biri **değildir**?', '{"choices":["Toplantı","Bekleme","Fazla üretim","Hatalar"]}', '{"index":0}', 'Ohno''nun yedi israfı: **fazla üretim, bekleme, taşıma, fazla işleme, stok, gereksiz hareket ve hatalar**. Sonradan sekizinci olarak kullanılmayan yetenek eklendi. Toplantı kendi başına israf sayılmaz; değer üretmeyen toplantı ise "fazla işleme" ya da "bekleme" kılığında israftır.', 1, '3. ünite · İsraf türleri ve yazılımdaki karşılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-fazla-ozellik', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Fabrikadaki "fazla üretim" israfının yazılımdaki en yakın karşılığı hangisidir?', '{"choices":["Kimsenin kullanmadığı ek özellikler","Yarım kalmış işler","Takımlar arası devir teslim","Hata ayıklama"]}', '{"index":0}', 'Poppendieck''lerin uyarlamasında fazla üretim **ek özelliklere** karşılık gelir: kimsenin istemediği ya da kullanmadığı özellik hem yapılırken hem bakımı sürerken emek yer. Stoğun karşılığı yarım kalmış iş, taşımanın karşılığı devir teslimdir.', 2, '3. ünite · İsraf türleri ve yazılımdaki karşılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-yarim-is', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Squad''da birleşmeyi bekleyen 9 dal ve test edilmeyi bekleyen 14 özellik var. Lean gözüyle bu en çok hangi israf türüdür?', '{"choices":["Yarım kalmış iş","Fazla özellik","Gereksiz hareket","Yeniden öğrenme"]}', '{"index":0}', 'Başlanmış ama müşteriye ulaşmamış her iş fabrikadaki **stok** gibidir: değer üretmez, eskir, birleştirme çakışması ve unutulma riski taşır. Çözüm daha çok işe başlamak değil, başlanmış işleri bitirmektir (WIP sınırı).', 2, '3. ünite · İsraf türleri ve yazılımdaki karşılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-devir-teslim', 'agile', 'ag-u3', 3, 'tf', 'derived', 'Bir işin analistten tasarımcıya, tasarımcıdan geliştiriciye, geliştiriciden test ekibine geçtiği her devirde bilgi kaybolur; Lean bunu israf sayar.', '{}', '{"value":true}', 'Doğru. Her devir teslim (handoff) bekleme yaratır ve örtük bilginin bir kısmı aktarılamaz. Çapraz işlevli takımlar ve "aynı kişilerin işi baştan sona taşıması" bu israfı azaltır.', 2, '3. ünite · İsraf türleri ve yazılımdaki karşılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-cekme-tanim', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Çekme (pull) sisteminde yeni bir işe ne zaman başlanır?', '{"choices":["Sonraki adımda kapasite boşalınca","Yönetici yeni bir iş atadığında","Önceki adım işi bitirip ittiğinde","Planlanan başlangıç tarihi geldiğinde"]}', '{"index":0}', 'Çekme sisteminde iş, **kapasitesi boşalan adım tarafından çekilir**; böylece hiçbir adım kaldırabileceğinden fazlasını almaz. İtme sisteminde ise iş, sonraki adımın durumuna bakılmadan plana göre ileri itilir ve kuyruklar birikir.', 1, '3. ünite · Çekme (pull) ve itme (push) sistemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-kanban-kart', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Toyota''daki kanban kartının asıl işlevi neydi?', '{"choices":["Önceki istasyona ne kadar üreteceğini söyleyen çekme sinyali olmak","İşçilerin istasyon başına performansını ölçüp raporlamak","Müşteri siparişlerini fabrika arşivinde saklamak","Kalite kontrolde bozuk parçaları ayırıp işaretlemek"]}', '{"index":0}', 'Kanban (Japonca "görsel kart") bir **çekme sinyalidir**: parça kullanıldıkça kart önceki istasyona döner ve yalnızca o kadar parça üretilir. Yazılımdaki Kanban yöntemi bu fikri iş akışına taşır (10. ünite).', 2, '3. ünite · Çekme (pull) ve itme (push) sistemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-sprint-cekme', 'agile', 'ag-u3', 3, 'tf', 'derived', 'Scrum''da Developers''ın Sprint Planning''de Product Backlog''dan iş seçmesi, yöneticinin iş ataması yerine bir çekme davranışıdır.', '{}', '{"value":true}', 'Doğru. Rehber''e göre Sprint''e kaç öğe alınacağını **Developers** belirler, çünkü kendi kapasitelerini en iyi onlar bilir. Sprint içinde de kişiler işi kendileri çeker; kimse onlara görev atamaz.', 1, '3. ünite · Çekme (pull) ve itme (push) sistemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-parti-20', 'agile', 'ag-u3', 3, 'num', 'derived', 'Dört istasyonlu bir hatta her istasyon bir parçayı 1 dakikada işliyor. 20 parça, 20''lik tek parti hâlinde istasyondan istasyona geçirilirse (parti bitmeden sonraki istasyona geçmez) bütün partinin işi kaç dakikada biter?', '{"blanks":1}', '{"blanks":[["80±0"]]}', 'Her istasyon 20 parçayı bitirip partiyi bir sonrakine verir: 4 × 20 = **80 dakika**. İlk parça da müşteriye ancak 80. dakikada (partiyle birlikte) ulaşır.', 2, '3. ünite · Parti büyüklüğü ve tek parça akış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-parti-1', 'agile', 'ag-u3', 3, 'num', 'derived', 'Aynı hatta (dört istasyon, parça başına 1 dakika) 20 parça tek parça akışıyla geçirilirse, yani her parça bitince hemen sonraki istasyona geçerse, son parça kaçıncı dakikada biter?', '{"blanks":1}', '{"blanks":[["23±0"]]}', 'İlk parça 4. dakikada çıkar; ardından hat doludur ve her dakika bir parça çıkar. Son parça 4 + 19 = **23. dakikada** biter. Parti büyüklüğünü küçültmek hem ilk teslimi (80 → 4 dakika) hem toplam süreyi kısaltır.', 3, '3. ünite · Parti büyüklüğü ve tek parça akış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-kucuk-parti-yazilim', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Yazılımda "parti büyüklüğünü küçültmenin" karşılığı hangisidir?', '{"choices":["Küçük değişiklikleri sık sık birleştirip yayınlamak","Altı ayda bir büyük sürüm çıkarmak","Bütün testleri sürüm öncesine toplamak","Daha uzun sprintlerle çalışmak"]}', '{"index":0}', 'Küçük ve sık birleştirme, küçük çekme istekleri ve sık yayın yazılımdaki küçük partilerdir. Geri bildirim hızlanır, hatanın kaynağı kolay bulunur, birleştirme çakışmaları küçülür.', 2, '3. ünite · Parti büyüklüğü ve tek parça akış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-wip-tanim', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'WIP (work in progress) neyi ölçer?', '{"choices":["Başlanmış ama bitmemiş iş sayısını","Bir günde biten iş sayısını","Backlog''daki toplam iş sayısını","Takımdaki kişi sayısını"]}', '{"index":0}', 'WIP, sistemde aynı anda **başlanmış ama bitmemiş** işlerin sayısıdır. Biten iş sayısı verim (throughput), backlog''daki iş ise henüz başlanmamış iştir.', 1, '3. ünite · Devam eden iş (WIP) ve bağlam değiştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-baglam', 'agile', 'ag-u3', 3, 'num', 'derived', 'Gerald Weinberg''in bilinen yaklaşık tablosuna göre bir kişi aynı anda üç projede çalışırsa zamanının yaklaşık yüzde kaçı bağlam değiştirmeye gider?', '{"blanks":1}', '{"blanks":[["40±0"]]}', 'Weinberg''in kaba tahmini: tek projede kayıp yok, iki projede yaklaşık %20, **üç projede yaklaşık %40**, dörtte %60. Sayılar kesin ölçüm değil, bir sezgidir; ama çoklu görevin bedava olmadığını iyi anlatır.', 2, '3. ünite · Devam eden iş (WIP) ve bağlam değiştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-daha-az-basla', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Ece aynı anda dört işe başlamış, hiçbiri bitmemiş. Scrum Master Burak''ın Lean''e en uygun önerisi hangisidir?', '{"choices":["Yeni işe başlamadan önce başlanmış işleri bitirmesi","Dört işi de aynı hızda ilerletmesi","Bir beşinci işe başlayıp ilerlemeyi hızlandırması","İşleri bölmeden daha uzun saatler çalışması"]}', '{"index":0}', '"Başlamayı bırak, bitirmeye başla" (stop starting, start finishing). WIP''i azaltmak her işin çevrim süresini kısaltır ve bağlam değiştirme kaybını azaltır. Gerekirse takım arkadaşları bitmemiş işlere yardım eder.', 2, '3. ünite · Devam eden iş (WIP) ve bağlam değiştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-little-1', 'agile', 'ag-u3', 3, 'num', 'derived', 'Squad''ın panosunda ortalama 12 iş devam ediyor ve squad haftada ortalama 4 iş bitiriyor. Little yasasına göre bir işin ortalama çevrim süresi kaç haftadır?', '{"blanks":1}', '{"blanks":[["3±0"]]}', 'Little yasası: WIP = verim × çevrim süresi. Çevrim süresi = 12 / 4 = **3 hafta**.', 1, '3. ünite · Little yasası: WIP, verim ve çevrim süresi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-little-2', 'agile', 'ag-u3', 3, 'num', 'derived', 'Günde ortalama 2 iş biten ve bir işin ortalama çevrim süresi 5 gün olan bir takımda ortalama kaç iş devam ediyordur?', '{"blanks":1}', '{"blanks":[["10±0"]]}', 'WIP = verim × çevrim süresi = 2 × 5 = **10** iş.', 1, '3. ünite · Little yasası: WIP, verim ve çevrim süresi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-little-3', 'agile', 'ag-u3', 3, 'num', 'derived', 'Haftada 5 iş bitiren bir takım WIP''i 30''dan 15''e indiriyor; verim değişmiyor. Ortalama çevrim süresi kaç haftaya iner?', '{"blanks":1}', '{"blanks":[["3±0"]]}', 'Önce 30 / 5 = 6 hafta, sonra 15 / 5 = **3 hafta**. Aynı verimle WIP''i yarıya indirmek çevrim süresini yarıya indirir: müşteri işini iki kat çabuk alır.', 2, '3. ünite · Little yasası: WIP, verim ve çevrim süresi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-little-kosul', 'agile', 'ag-u3', 3, 'tf', 'derived', 'Little yasası uzun dönem ortalamaları için geçerlidir; sisteme giren ve çıkan iş miktarı kabaca dengeli olmalıdır.', '{}', '{"value":true}', 'Doğru. John Little''ın 1961''de kanıtladığı eşitlik kararlı bir sistemin ortalamaları içindir. Sisteme sürekli çıktığından fazla iş giriyorsa WIP büyür ve kısa dönem hesapları yanıltır; bu yüzden Kanban''da WIP sınırı konur.', 3, '3. ünite · Little yasası: WIP, verim ve çevrim süresi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-darbogaz-verim', 'agile', 'ag-u3', 3, 'num', 'derived', 'Bir işin geçtiği üç adımın günlük kapasiteleri sırasıyla 10, 6 ve 8 iş. Sistemin günlük verimi en fazla kaç iş olabilir?', '{"blanks":1}', '{"blanks":[["6±0"]]}', 'Zincir en zayıf halkası kadar güçlüdür: sistem **darboğaz** olan ikinci adımın kapasitesinden (6) hızlı akamaz. Birinci adımı hızlandırmak yalnızca ikinci adımın önündeki kuyruğu büyütür.', 1, '3. ünite · Darboğaz ve kısıtlar teorisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-darbogaz-yeri', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Squad''ın panosunda "Test bekliyor" sütununda iş birikiyor, "Geliştirmede" sütunu ise sürekli boşalıyor. Darboğaz büyük olasılıkla nerededir?', '{"choices":["Test adımında","Geliştirme adımında","Backlog''da","Canlıya alma adımında"]}', '{"index":0}', 'İşin **önünde biriktiği** adım darboğazdır: geliştirme hızlı bitiriyor ama test yetişemiyor. Kısıtlar teorisine göre önce darboğaz tam verimle çalıştırılır, diğer adımlar ona göre ayarlanır (geliştiriciler test otomasyonuna yardım eder), gerekirse kapasitesi artırılır.', 2, '3. ünite · Darboğaz ve kısıtlar teorisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-goldratt', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Kısıtlar teorisine göre darboğaz olmayan bir adımı hızlandırmak genellikle ne sağlar?', '{"choices":["Bütün sistemde anlamlı bir hız artışı sağlamaz","Sistemin verimini kesinlikle artırır","Darboğazı ortadan kaldırır","Çevrim süresini sıfıra indirir"]}', '{"index":0}', 'Eliyahu Goldratt''ın kısıtlar teorisi (The Goal, 1984): sistemin çıktısını kısıt belirler. Kısıt dışındaki adımı hızlandırmak çoğunlukla yalnızca **kuyrukları büyütür**. Beş adım: kısıtı bul, en iyi kullan, diğerlerini ona uydur, kapasitesini artır, yeni kısıta geç.', 2, '3. ünite · Darboğaz ve kısıtlar teorisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-akis-verimi', 'agile', 'ag-u3', 3, 'num', 'derived', 'Bir özellik istendiği günden teslim edildiği güne kadar 20 gün geçiyor; bunun yalnızca 2 gününde biri gerçekten üzerinde çalışıyor. Akış verimliliği yüzde kaçtır?', '{"blanks":1}', '{"blanks":[["10±0"]]}', 'Akış verimliliği = aktif çalışma süresi / toplam teslim süresi = 2 / 20 = **%10**. Yazılım işlerinde %15''in altı sık görülür: işin çoğu zamanı onay, test, inceleme ya da birleştirme beklemekle geçer.', 2, '3. ünite · Değer akışı haritası ve akış verimliliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-harita-amac', 'agile', 'ag-u3', 3, 'mcq', 'derived', 'Değer akışı haritasının asıl amacı nedir?', '{"choices":["İşin istekten teslime kadar nerede beklediğini görmek","Her çalışanın gün içinde neye kaç saat harcadığını kaydetmek","Ekiplerin bağlı olduğu organizasyon şemasını çizmek","Ürünün bileşenlerini ve mimarisini belgelemek"]}', '{"index":0}', 'Değer akışı haritası istekten teslime kadarki adımları **çalışma ve bekleme süreleriyle** gösterir. Genellikle en büyük kazanç insanları hızlandırmaktan değil, beklemeleri kısaltmaktan gelir.', 1, '3. ünite · Değer akışı haritası ve akış verimliliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u3-kaynak-verimi', 'agile', 'ag-u3', 3, 'mcq', 'derived', '"Herkesin her an meşgul olması" hedefi Lean gözüyle neden sorunludur?', '{"choices":["Kuyruk büyür; işler bekler ve teslim süresi uzar","Çalışanlar yeni şeyler öğrenmeye vakit bulamaz","Maliyetler hesaplanamaz hâle gelir","Koordinasyon toplantılarının sayısı artar"]}', '{"index":0}', 'Kapasite kullanımı %100''e yaklaştıkça kuyruklar hızla büyür (kuyruk teorisi): yeni gelen her iş beklemek zorunda kalır. Lean, kişilerin değil **işin** akışını en iyilemeyi önerir; biraz boşluk, akışı hızlandırır.', 3, '3. ünite · Değer akışı haritası ve akış verimliliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-tanim', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Scrum Rehberi Scrum''u nasıl tanımlar?', '{"choices":["Kompleks problemlere uyarlanabilir çözümlerle değer üretmeye yardım eden hafif bir çerçeve","Yazılım projelerinin bütün adımlarını tanımlayan ayrıntılı bir metodoloji","Proje yöneticilerinin takımları denetlemesi için bir raporlama sistemi","Waterfall''un kısa sürelere bölünmüş ve hızlandırılmış bir biçimi"]}', '{"index":0}', 'Rehber''e göre Scrum, kişilerin, takımların ve organizasyonların **kompleks problemler** için **uyarlanabilir çözümlerle değer üretmesine** yardım eden **hafif bir çerçevedir** (lightweight framework). Bir metodoloji gibi her adımı tarif etmez.', 1, '4. ünite · Scrum''un tanımı: hafif ve bilerek eksik bırakılmış bir çerçeve', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-eksik', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Rehber, Scrum çerçevesinin "bilerek eksik bırakıldığını" söyler. Bunun anlamı nedir?', '{"choices":["Yalnızca Scrum teorisi için gereken parçaları tanımlar, gerisini takıma bırakır","Rehber''in sonraki sürümlerde tamamlanacak bölümleri vardır","Scrum''un yalnızca küçük projelerde kullanılabileceğini","Takımın Scrum''un istediği parçasını dilediği zaman atlayabileceğini"]}', '{"index":0}', 'Scrum yalnızca teorisini uygulamak için **gereken** parçaları (takım, etkinlikler, artefaktlar, kurallar) tanımlar; işin nasıl yapılacağını, hangi tekniklerin kullanılacağını takımın kolektif zekâsına bırakır. Bu "istediğin parçayı atla" demek değildir.', 2, '4. ünite · Scrum''un tanımı: hafif ve bilerek eksik bırakılmış bir çerçeve', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-parcali', 'agile', 'ag-u4', 4, 'tf', 'derived', 'Rehber''e göre bir takım Scrum''un yalnızca işine yarayan parçalarını uygulasa da yaptığı şey yine Scrum''dur.', '{}', '{"value":false}', 'Yanlış. Rehber, Scrum''un parçalarının değişmez olduğunu söyler: yalnızca bazı parçaları uygulamak mümkündür ama **sonuç Scrum değildir**. Bir parçayı atlamak çoğunlukla bir sorunu örter (ör. Retrospective''i kaldırmak, iyileşmeyi durdurur).', 2, '4. ünite · Scrum''un tanımı: hafif ve bilerek eksik bırakılmış bir çerçeve', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-dongu', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Rehber''deki kısa özete göre Scrum''da Product Owner kompleks bir problemin işini nereye sıralar?', '{"choices":["Product Backlog''a","Sprint Backlog''a","Increment''e","Definition of Done''a"]}', '{"index":0}', 'Rehber''in özeti: Product Owner kompleks bir problemin işini **Product Backlog''a** sıralar; Scrum Takımı Sprint boyunca bir seçkiyi değerli bir Increment''e dönüştürür; takım ve paydaşlar sonucu denetleyip bir sonraki Sprint için uyarlar; bu tekrarlanır.', 2, '4. ünite · Scrum''un tanımı: hafif ve bilerek eksik bırakılmış bir çerçeve', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-uc-sutun', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Scrum''daki empirizmin üç sütunu hangileridir?', '{"choices":["Şeffaflık, denetim, uyarlama","Planlama, uygulama, raporlama","Odak, açıklık, cesaret","Kapsam, zaman, maliyet"]}', '{"index":0}', 'Rehber''e göre empirizmin üç sütunu **şeffaflık (transparency), denetim (inspection) ve uyarlama (adaptation)**dır. Odak, açıklık ve cesaret ise beş Scrum değerinden üçüdür.', 1, '4. ünite · Empirizmin üç sütunu: şeffaflık, denetim, uyarlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-seffaflik-yoksa', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Rehber''e göre şeffaflık olmadan yapılan denetim nasıldır?', '{"choices":["Yanıltıcı ve israftır","Daha hızlıdır","Yalnızca Scrum Master için geçerlidir","Uyarlamayı gereksiz kılar"]}', '{"index":0}', 'Rehber: şeffaflık denetimi mümkün kılar; **şeffaflık olmadan denetim yanıltıcı ve israftır**. Daily Scrum''da herkes "her şey yolunda" deyip sorunları saklarsa takım yanlış bilgiyle karar verir.', 2, '4. ünite · Empirizmin üç sütunu: şeffaflık, denetim, uyarlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-uyarlamasiz', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Squad her Retrospective''de aynı üç sorunu yazıyor ama hiçbiri için bir şey değiştirmiyor. Hangi sütun çöküyor?', '{"choices":["Uyarlama","Şeffaflık","Denetim","Hiçbiri; sorunları yazmak yeterlidir"]}', '{"index":0}', 'Sorunlar görünür (şeffaflık) ve konuşuluyor (denetim) ama hiçbir şey değişmiyor: **uyarlama** yok. Rehber, uyarlamaya dönüşmeyen denetimi anlamsız sayar. Retro''dan en az bir somut iyileştirme çıkmalıdır.', 2, '4. ünite · Empirizmin üç sütunu: şeffaflık, denetim, uyarlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-uyarlama-zaman', 'agile', 'ag-u4', 4, 'tf', 'derived', 'Rehber''e göre denetimde süreç ya da ürün kabul edilemez ölçüde sapmışsa ayarlama olabildiğince çabuk yapılmalıdır.', '{}', '{"value":true}', 'Doğru. Rehber, sapma görüldüğünde daha fazla sapmayı önlemek için ayarlamanın **olabildiğince çabuk** yapılmasını ister. Kişiler yetkisizse ya da kendi kendini yönetmiyorsa uyarlama zorlaşır.', 2, '4. ünite · Empirizmin üç sütunu: şeffaflık, denetim, uyarlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-bes-deger', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Aşağıdakilerden hangisi beş Scrum değerinden biri **değildir**?', '{"choices":["Hız","Bağlılık","Saygı","Cesaret"]}', '{"index":0}', 'Beş Scrum değeri: **bağlılık (commitment), odak (focus), açıklık (openness), saygı (respect) ve cesaret (courage)**. Hız bir değer değil, çoğu zaman yanlış ölçülen bir sonuçtur.', 1, '4. ünite · Beş Scrum değeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-cesaret', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'QA''dan Tuba, Sprint Review''dan bir gün önce ödeme özelliğinde ciddi bir hata buluyor ve bunu toplantıda paydaşlara açıkça söylüyor. En çok hangi iki değeri gösteriyor?', '{"choices":["Açıklık ve cesaret","Odak ve bağlılık","Saygı ve odak","Bağlılık ve saygı"]}', '{"index":0}', 'Zor bir gerçeği saklamadan paylaşmak **açıklık**, bunu paydaşların önünde söyleyebilmek **cesarettir**. Rehber, takımın doğru olanı yapmak ve zor problemler üzerinde çalışmak için cesaretli olmasını ister.', 2, '4. ünite · Beş Scrum değeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-odak', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Rehber''e göre Scrum Takımı''nın odağı öncelikle neyin üzerindedir?', '{"choices":["Sprint''in işi ve hedeflerine en iyi ilerleme","Her bireyin kendi görev listesi ve kişisel hedefleri","Yönetime gönderilecek haftalık ilerleme raporları","Bir sonraki çeyreğin bütçesi ve kaynak planı"]}', '{"index":0}', 'Rehber: Scrum Takımı''nın birincil odağı, bu hedeflere doğru en iyi ilerlemeyi sağlamak için **Sprint''in işidir**. Sprint Goal bu odağı ortak hale getirir.', 2, '4. ünite · Beş Scrum değeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-etkinlik-sayisi', 'agile', 'ag-u4', 4, 'num', 'derived', 'Scrum Rehberi 2020''de kaç resmi etkinlik (event) vardır? (Sprint''in kendisi de sayılır.)', '{"blanks":1}', '{"blanks":[["5±0"]]}', 'Beş etkinlik: **Sprint** (diğerlerini içeren kap), **Sprint Planning, Daily Scrum, Sprint Review ve Sprint Retrospective**. Backlog refinement sürekli bir faaliyettir, resmi etkinlik sayılmaz.', 1, '4. ünite · Scrum''un yapısı: takım, etkinlikler, artefaktlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-artefaktlar', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Scrum''un üç artefaktı hangileridir?', '{"choices":["Product Backlog, Sprint Backlog, Increment","Product Backlog, burndown grafiği, Definition of Done","Sprint Goal, Product Goal, Definition of Done","User story, epic, feature"]}', '{"index":0}', 'Üç artefakt: **Product Backlog, Sprint Backlog ve Increment**. Her birinin bir taahhüdü vardır: sırasıyla Product Goal, Sprint Goal ve Definition of Done (8. ünite). Burndown, user story, epic ve feature Rehber''de geçmez.', 1, '4. ünite · Scrum''un yapısı: takım, etkinlikler, artefaktlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-uc-hesap', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Scrum Takımı''ndaki üç hesap verebilirlik (accountability) hangileridir?', '{"choices":["Product Owner, Scrum Master, Developers","Product Owner, Tech Lead, Developers","Proje yöneticisi, Scrum Master, test ekibi","Product Owner, Scrum Master, paydaşlar"]}', '{"index":0}', 'Scrum Takımı **bir Scrum Master, bir Product Owner ve Developers**''tan oluşur. Tech Lead, proje yöneticisi ya da test ekibi Rehber''de ayrı bir hesap verebilirlik değildir; paydaşlar Scrum Takımı''nın dışındadır.', 1, '4. ünite · Scrum''un yapısı: takım, etkinlikler, artefaktlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-alt-takim', 'agile', 'ag-u4', 4, 'tf', 'derived', 'Rehber''e göre bir Scrum Takımı''nda "test alt takımı" ya da "backend alt takımı" gibi alt takımlar kurulabilir.', '{}', '{"value":false}', 'Yanlış. Rehber açıkça söyler: Scrum Takımı içinde **alt takım ya da hiyerarşi yoktur**; takım bir hedefe, Product Goal''e odaklı tek bir birimdir. Büyük squad''larda bu kuralın baskı altında kalması 5. ünitenin konusudur.', 2, '4. ünite · Scrum''un yapısı: takım, etkinlikler, artefaktlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-developers', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Scrum Rehberi 2020''de "Development Team" kavramının yerine ne geldi?', '{"choices":["Tek bir Scrum Takımı içinde \"Developers\" hesap verebilirliği","Ayrı bir \"Engineering Team\" ve onun Tech Lead''i","Squad ve squad''ı oluşturan chapter''lar","Teknik Liderlik ve ona bağlı geliştirme ekipleri"]}', '{"index":0}', '2020 sürümü takım içinde takım fikrini kaldırdı: artık **tek bir Scrum Takımı** var ve işi yapanlar **Developers** diye anılıyor. Amaç PO ile geliştiriciler arasındaki "biz ve onlar" ayrımını ortadan kaldırmaktı.', 2, '4. ünite · Scrum Rehberi 2020''deki değişiklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-product-goal', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Scrum Rehberi 2020 ile eklenen ve Product Backlog''un taahhüdü olan kavram hangisidir?', '{"choices":["Product Goal","Sprint Goal","Definition of Ready","Release Plan"]}', '{"index":0}', '**Product Goal** 2020''de eklendi: ürünün gelecekteki istenen durumunu anlatır ve Scrum Takımı''nın uzun vadeli hedefidir. Sprint Goal daha önce de vardı; Definition of Ready ve Release Plan Rehber''de yok.', 1, '4. ünite · Scrum Rehberi 2020''deki değişiklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-kendini-yoneten', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Rehber 2020 "kendi kendini örgütleyen" (self-organizing) yerine hangi ifadeyi kullanır?', '{"choices":["Kendi kendini yöneten (self-managing)","Lider odaklı (leader-driven)","Süreç güdümlü (process-driven)","Yönetici destekli (manager-supported)"]}', '{"index":0}', '2020''de takımlar **kendi kendini yöneten** (self-managing) diye tanımlandı: yalnızca işi nasıl yapacaklarına değil, **kimin neyi, nasıl yapacağına** da kendileri karar verirler.', 2, '4. ünite · Scrum Rehberi 2020''deki değişiklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-uc-soru', 'agile', 'ag-u4', 4, 'tf', 'derived', 'Scrum Rehberi 2020''ye göre Daily Scrum''da her geliştirici "Dün ne yaptım, bugün ne yapacağım, önümde engel var mı?" sorularını cevaplamak zorundadır.', '{}', '{"value":false}', 'Yanlış. Üç soru eski sürümlerde önerilen bir biçimdi; 2020''de Rehber''den çıkarıldı. Developers, Sprint Goal''e ilerlemeyi denetlemeye yarayan **istedikleri yapıyı** seçebilir (6. ünite).', 2, '4. ünite · Scrum Rehberi 2020''deki değişiklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-neden-konusu', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Rehber 2020 Sprint Planning''e hangi konuyu ekledi?', '{"choices":["Bu Sprint neden değerli?","Bu Sprint''te kim hangi görevi alacak?","Bu Sprint için kaç story point taahhüt ediliyor?","Bu Sprint''in bütçesi ne kadar?"]}', '{"index":0}', '2020''de Sprint Planning üç konuya çıktı: **Neden** (bu Sprint neden değerli, Sprint Goal), **Ne** (bu Sprint''te ne yapılabilir) ve **Nasıl** (seçilen iş nasıl yapılacak). Story point ve görev ataması Rehber''de yok.', 3, '4. ünite · Scrum Rehberi 2020''deki değişiklikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-rehberde-var', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Aşağıdakilerden hangisi Scrum Rehberi 2020''de **geçer**?', '{"choices":["Sprint Goal","Story point","Definition of Ready","Burndown grafiği"]}', '{"index":0}', '**Sprint Goal** Rehber''de Sprint Backlog''un taahhüdüdür. Story point, Definition of Ready ve burndown grafiği yaygın ama Rehber dışı uygulamalardır; takım isterse kullanır, Scrum bunları şart koşmaz.', 2, '4. ünite · Rehber''de olmayan ama yaygın uygulamalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-sprint-sifir', 'agile', 'ag-u4', 4, 'tf', 'derived', 'Scrum Rehberi, ürün geliştirmeye başlamadan önce altyapı kurmak için bir "Sprint 0" yapılmasını önerir.', '{}', '{"value":false}', 'Yanlış. Rehber''de Sprint 0 yoktur; her Sprint değerli ve kullanılabilir bir Increment üretmeyi hedefler. Altyapı işleri, ilk Sprint''lerde küçük ama gerçek bir değerle birlikte yapılabilir (12. ünite).', 2, '4. ünite · Rehber''de olmayan ama yaygın uygulamalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-user-story', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Scrum Rehberi Product Backlog öğelerinin hangi biçimde yazılmasını şart koşar?', '{"choices":["Hiçbir biçimi şart koşmaz","\"... olarak, ... istiyorum, böylece ...\" kalıbında user story","Given/When/Then kabul kriterleriyle","Epic, feature ve story hiyerarşisinde"]}', '{"index":0}', 'Rehber Product Backlog öğelerine yalnızca açıklama, sıra, büyüklük ve değer gibi niteliklerin eklendiğini söyler; **biçim şart koşmaz**. User story, kabul kriterleri ve epic-feature-story hiyerarşisi yaygın tekniklerdir; Backlog pratiğinde ayrıntılı işlenir.', 2, '4. ünite · Rehber''de olmayan ama yaygın uygulamalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-kullanmak-yasak-mi', 'agile', 'ag-u4', 4, 'tf', 'derived', 'Rehber''de geçmediği için bir Scrum takımının story point ya da burndown grafiği kullanması Scrum''a aykırıdır.', '{}', '{"value":false}', 'Yanlış. Scrum bilerek eksik bırakılmış bir çerçevedir; Rehber''in çelişmediği teknikler eklenebilir. Önemli olan, eklenen tekniğin Scrum''un kurallarını bozmaması ve "Rehber''in parçası" sanılmamasıdır.', 1, '4. ünite · Rehber''de olmayan ama yaygın uygulamalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-squad-koken', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Tribe, squad, chapter ve guild terimleri hangi kaynaktan yaygınlaştı?', '{"choices":["Spotify modeli (2012)","Scrum Rehberi","Agile Manifesto","Kanban Rehberi"]}', '{"index":0}', 'Bu terimler Henrik Kniberg ile Anders Ivarsson''un 2012''de yayımladığı "Scaling Agile @ Spotify" makalesinden yaygınlaştı. Scrum Rehberi''nde yalnızca Scrum Takımı vardır. Spotify modeli Ölçekli Agile pratiğinde ayrıntılı işlenir.', 1, '4. ünite · Terim haritası: Scrum, Spotify modeli, SAFe ve araçların dili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-squad-karsilik', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Spotify modelindeki squad, Scrum Rehberi''ndeki hangi kavrama en yakındır?', '{"choices":["Scrum Takımı","Product Backlog","Developers''ın bir alt takımı","Paydaşlar grubu"]}', '{"index":0}', 'Squad, kendi kendini yöneten, uzun ömürlü, çapraz işlevli bir ürün takımıdır; bu yüzden kabaca bir **Scrum Takımı**na karşılık gelir. Spotify squad''lara Scrum, Kanban ya da başka bir yöntemi seçme serbestliği tanıyordu.', 2, '4. ünite · Terim haritası: Scrum, Spotify modeli, SAFe ve araçların dili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-chapter', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Bir organizasyonda QA chapter''ındaki Deniz ve Tuba squad''da test yazıyor. Scrum Rehberi''ne göre Scrum Takımı içinde hangi hesap verebilirliğe girerler?', '{"choices":["Developers","Product Owner","Scrum Master","Hiçbirine; takımın dışındadırlar"]}', '{"index":0}', 'Rehber''e göre Increment''in **herhangi bir parçasını** oluşturan herkes **Developers**''tır: testçi, DevOps mühendisi, tasarımcı, analist. Chapter ise Spotify modelinde aynı uzmanlıktaki kişilerin squad''lar arası grubudur; Scrum''un değil organizasyonun yapısıdır.', 2, '4. ünite · Terim haritası: Scrum, Spotify modeli, SAFe ve araçların dili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-epic-koken', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Epic ve feature terimleri için hangisi doğrudur?', '{"choices":["Rehber''de geçmez; SAFe ve iş takip araçlarından yaygınlaştı","Rehber''de Product Backlog''un iki zorunlu seviyesidir","Spotify modelinde tribe ve squad''ın diğer adlarıdır","Agile Manifesto''nun ilkelerinde tanımlanır"]}', '{"index":0}', 'Epic → Feature → Story → Task hiyerarşisi Scrum Rehberi''nde yoktur; SAFe ve Jira, ClickUp gibi araçlar yaygınlaştırdı. Backlog pratiğinde bu hiyerarşi baştan sona işlenir.', 2, '4. ünite · Terim haritası: Scrum, Spotify modeli, SAFe ve araçların dili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-tech-lead', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Squad''daki "Tech Lead" unvanı için hangisi doğrudur?', '{"choices":["Rehber''de böyle bir hesap verebilirlik yoktur; şirketlerin kendi rolüdür","Scrum Master''ın Rehber''deki diğer adıdır","Rehber''e göre her Scrum Takımı''nda bir tane bulunmalıdır","Product Owner''ın teknik işlerdeki yardımcısıdır"]}', '{"index":0}', 'Rehber''de unvan yoktur; Increment''i oluşturanların hepsi Developers''tır. Tech Lead pek çok şirkette kullanılan bir roldür ve teknik yönlendirme yapabilir. Rehber açısından önemli olan, bu rolün takımın kendi kendini yönetmesini ve Developers''ın Sprint Backlog''daki sahipliğini ortadan kaldırmamasıdır.', 2, '4. ünite · Terim haritası: Scrum, Spotify modeli, SAFe ve araçların dili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-buyuk-squad', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Organizasyon şemasındaki bir squad 14 kişi. Rehber bu büyüklük için ne der?', '{"choices":["Genelde 10 ve altı; büyüyen takım bölünmeyi düşünmeli","Takımın kaç kişi olacağı hakkında hiçbir şey söylemez","En az 15 kişi olmadıkça Scrum uygulanamaz","Takım tam 7 kişi artı ya da eksi 2 olmak zorundadır"]}', '{"index":0}', 'Rehber 2020: Scrum Takımı çevik kalacak kadar küçük, anlamlı iş yapacak kadar büyük olmalı, **tipik olarak 10 kişi ya da daha az**. Takım fazla büyürse aynı ürüne odaklı, **aynı Product Goal, Product Backlog ve Product Owner''ı paylaşan** birden çok takıma bölünmeyi düşünmelidir. Eski sürümlerdeki "3-9 geliştirici" ifadesi 2020''de kaldırıldı.', 2, '4. ünite · Terim haritası: Scrum, Spotify modeli, SAFe ve araçların dili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-iletisim-yolu', 'agile', 'ag-u4', 4, 'num', 'derived', 'n kişilik bir takımda ikili iletişim yolu sayısı n(n-1)/2''dir. 14 kişilik bir squad''da kaç iletişim yolu vardır?', '{"blanks":1}', '{"blanks":[["91±0"]]}', '14 × 13 / 2 = **91**. Yedi kişilik bir takımda bu sayı 21''dir: kişi sayısı iki katına çıkınca iletişim yolları dört katından fazla artar. Büyük squad''larda Daily''nin uzaması ve bilginin herkese ulaşmaması bu yüzden sık görülür.', 2, '4. ünite · Terim haritası: Scrum, Spotify modeli, SAFe ve araçların dili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-sm-yok', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Bir organizasyonun squad şemasında Product Owner ve Tech Lead var ama Scrum Master yok. Rehber açısından doğru değerlendirme hangisidir?', '{"choices":["Scrum Master hesap verebilirliği eksiktir; birinin üstlenmesi gerekir","Tech Lead varsa Scrum Master''a gerek kalmaz","Scrum Master yalnızca 10 kişiden küçük takımlarda gerekir","Scrum Master''ın işini Product Owner kendiliğinden üstlenir"]}', '{"index":0}', 'Rehber''e göre her Scrum Takımı''nda **bir Scrum Master** vardır ve Scrum''un yerleşmesinden, takımın etkinliğinden hesap verir. Bu hesap verebilirlik bir unvanla değil, birinin üstlenmesiyle karşılanır; kimse üstlenmiyorsa Scrum''un en sık bozulan parçaları (Retro, engel kaldırma, organizasyona koçluk) sahipsiz kalır. Spotify modelinde bu işi "agile coach" görüyordu.', 2, '4. ünite · Terim haritası: Scrum, Spotify modeli, SAFe ve araçların dili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-po-onay', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Rehber''e göre Product Backlog''da bir değişiklik isteyen biri ne yapmalıdır?', '{"choices":["Product Owner''ı ikna etmeye çalışır","Teknik Liderliğin onayını alır","Scrum Master''dan sırayı değiştirmesini ister","Developers''ın oylamasıyla değiştirir"]}', '{"index":0}', 'Rehber: Product Owner''ın başarılı olması için bütün organizasyonun onun kararlarına saygı göstermesi gerekir; Product Backlog''u değiştirmek isteyen, **Product Owner''ı ikna etmeye** çalışır. Story''lerin ya da sıranın Teknik Liderliğin onayına bağlandığı yapılarda teknik görüş almak yerindedir; ama Product Backlog''dan kimin hesap verdiği bulanıklaşır.', 2, '4. ünite · Terim haritası: Scrum, Spotify modeli, SAFe ve araçların dili', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-rugby', 'agile', 'ag-u4', 4, 'mcq', 'derived', '"Scrum" adının kaynağı hangisidir?', '{"choices":["1986''da ürün geliştirmeyi rugby''ye benzeten bir makale","Bir yazılım şirketinin ürün adı","Agile Manifesto''nun yazıldığı odanın adı","Toyota''daki bir üretim hattının adı"]}', '{"index":0}', 'Hirotaka Takeuchi ve Ikujiro Nonaka 1986''da Harvard Business Review''daki "The New New Product Development Game" makalesinde, aşamaları sırayla devreden bayrak yarışı yerine **topu birlikte ileri taşıyan rugby takımına** benzeyen ürün geliştirmeyi anlattı; scrum, rugby''de iki takımın kenetlendiği andır.', 2, '4. ünite · Scrum''un tarihçesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-oopsla', 'agile', 'ag-u4', 4, 'num', 'derived', 'Ken Schwaber ve Jeff Sutherland Scrum''u ilk kez hangi yıl bir konferansta ortak olarak sundular?', '{"blanks":1}', '{"blanks":[["1995±0"]]}', 'Schwaber ve Sutherland Scrum''u **1995**''te OOPSLA konferansında sundu. İlk Scrum Rehberi 2010''da yayımlandı; en son sürüm Kasım 2020 tarihlidir.', 3, '4. ünite · Scrum''un tarihçesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u4-rehber-yazarlar', 'agile', 'ag-u4', 4, 'mcq', 'derived', 'Scrum Rehberi''nin yazarları kimlerdir?', '{"choices":["Ken Schwaber ve Jeff Sutherland","Kent Beck ve Martin Fowler","Henrik Kniberg ve Anders Ivarsson","Mary ve Tom Poppendieck"]}', '{"index":0}', 'Rehber''i **Ken Schwaber ve Jeff Sutherland** yazar. Kent Beck XP''nin, Kniberg ve Ivarsson Spotify modeli makalesinin, Poppendieck''ler Lean yazılım geliştirmenin yazarlarıdır.', 1, '4. ünite · Scrum''un tarihçesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-tahmin-empirik', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-empirik-tanim';
UPDATE questions SET kavram = 'u1-tahmin-empirik', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-tahmine-uygun';
UPDATE questions SET kavram = 'u1-tahmin-empirik', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-neden-dogdu';
UPDATE questions SET kavram = 'u1-tahmin-empirik', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-kontrol-dongusu';
UPDATE questions SET kavram = 'u1-waterfall', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-asamalar';
UPDATE questions SET kavram = 'u1-waterfall', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-royce';
UPDATE questions SET kavram = 'u1-waterfall', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-gec-geri-bildirim';
UPDATE questions SET kavram = 'u1-waterfall', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-v-model';
UPDATE questions SET kavram = 'u1-waterfall', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-waterfall-uygun';
UPDATE questions SET kavram = 'u1-belirsizlik', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-stacey-eksen';
UPDATE questions SET kavram = 'u1-belirsizlik', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-stacey-kompleks';
UPDATE questions SET kavram = 'u1-belirsizlik', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-iki-belirsizlik';
UPDATE questions SET kavram = 'u1-cynefin', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-kompleks-yaklasim';
UPDATE questions SET kavram = 'u1-cynefin', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-karmasik';
UPDATE questions SET kavram = 'u1-cynefin', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u1-kaotik';
UPDATE questions SET kavram = 'u1-cynefin', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-acik-alan';
UPDATE questions SET kavram = 'u1-cynefin', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-cynefin-scrum';
UPDATE questions SET kavram = 'u1-iteratif', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-iteratif-artimli';
UPDATE questions SET kavram = 'u1-iteratif', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u1-deger-erken';
UPDATE questions SET kavram = 'u1-iteratif', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u1-geri-bildirim-sayisi';
UPDATE questions SET kavram = 'u1-iteratif', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-kaykay';
UPDATE questions SET kavram = 'u1-ucgen', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-ters-ucgen';
UPDATE questions SET kavram = 'u1-ucgen', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-kalite-esnemez';
UPDATE questions SET kavram = 'u1-tarihce', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u1-snowbird';
UPDATE questions SET kavram = 'u1-tarihce', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u1-once-gelenler';
UPDATE questions SET kavram = 'u2-degerler', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-bireyler';
UPDATE questions SET kavram = 'u2-degerler', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-calisan-yazilim';
UPDATE questions SET kavram = 'u2-degerler', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-musteri';
UPDATE questions SET kavram = 'u2-degerler', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-degisim';
UPDATE questions SET kavram = 'u2-degerler', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-deger-sayisi';
UPDATE questions SET kavram = 'u2-degerler', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u2-terazi-arac';
UPDATE questions SET kavram = 'u2-sagdakiler', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-sag-deger';
UPDATE questions SET kavram = 'u2-sagdakiler', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-dokuman-yok';
UPDATE questions SET kavram = 'u2-sagdakiler', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u2-plan-yok';
UPDATE questions SET kavram = 'u2-ilke-teslim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-en-yuksek-oncelik';
UPDATE questions SET kavram = 'u2-ilke-teslim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-gec-degisiklik';
UPDATE questions SET kavram = 'u2-ilke-teslim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-teslim-araligi';
UPDATE questions SET kavram = 'u2-ilke-insan', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-her-gun';
UPDATE questions SET kavram = 'u2-ilke-insan', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-motive';
UPDATE questions SET kavram = 'u2-ilke-insan', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-yuz-yuze';
UPDATE questions SET kavram = 'u2-ilke-ilerleme', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-ilerleme-olcusu';
UPDATE questions SET kavram = 'u2-ilke-ilerleme', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u2-surdurulebilir';
UPDATE questions SET kavram = 'u2-ilke-ilerleme', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-teknik-mukemmellik';
UPDATE questions SET kavram = 'u2-ilke-ilerleme', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-sadelik';
UPDATE questions SET kavram = 'u2-ilke-takim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-kendini-orgutleyen';
UPDATE questions SET kavram = 'u2-ilke-takim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-yansitma';
UPDATE questions SET kavram = 'u2-yanilgilar', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u2-agile-scrum';
UPDATE questions SET kavram = 'u2-yanilgilar', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u2-agile-hizli';
UPDATE questions SET kavram = 'u2-yanilgilar', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u2-agile-ilke-mi';
UPDATE questions SET kavram = 'u3-lean', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-koken';
UPDATE questions SET kavram = 'u3-lean', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-ilkeler';
UPDATE questions SET kavram = 'u3-lean', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-muda-mura-muri';
UPDATE questions SET kavram = 'u3-lean', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-kaizen';
UPDATE questions SET kavram = 'u3-israf', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-yedi-israf';
UPDATE questions SET kavram = 'u3-israf', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-fazla-ozellik';
UPDATE questions SET kavram = 'u3-israf', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u3-yarim-is';
UPDATE questions SET kavram = 'u3-israf', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-devir-teslim';
UPDATE questions SET kavram = 'u3-cekme', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-cekme-tanim';
UPDATE questions SET kavram = 'u3-cekme', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-kanban-kart';
UPDATE questions SET kavram = 'u3-cekme', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u3-sprint-cekme';
UPDATE questions SET kavram = 'u3-parti', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u3-parti-20';
UPDATE questions SET kavram = 'u3-parti', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u3-parti-1';
UPDATE questions SET kavram = 'u3-parti', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-kucuk-parti-yazilim';
UPDATE questions SET kavram = 'u3-wip', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-wip-tanim';
UPDATE questions SET kavram = 'u3-wip', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u3-baglam';
UPDATE questions SET kavram = 'u3-wip', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u3-daha-az-basla';
UPDATE questions SET kavram = 'u3-little', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u3-little-1';
UPDATE questions SET kavram = 'u3-little', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u3-little-2';
UPDATE questions SET kavram = 'u3-little', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u3-little-3';
UPDATE questions SET kavram = 'u3-little', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-little-kosul';
UPDATE questions SET kavram = 'u3-darbogaz', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u3-darbogaz-verim';
UPDATE questions SET kavram = 'u3-darbogaz', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u3-darbogaz-yeri';
UPDATE questions SET kavram = 'u3-darbogaz', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-goldratt';
UPDATE questions SET kavram = 'u3-deger-akisi', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u3-akis-verimi';
UPDATE questions SET kavram = 'u3-deger-akisi', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-harita-amac';
UPDATE questions SET kavram = 'u3-deger-akisi', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u3-kaynak-verimi';
UPDATE questions SET kavram = 'u4-tanim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-tanim';
UPDATE questions SET kavram = 'u4-tanim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-eksik';
UPDATE questions SET kavram = 'u4-tanim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-parcali';
UPDATE questions SET kavram = 'u4-tanim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-dongu';
UPDATE questions SET kavram = 'u4-sutunlar', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-uc-sutun';
UPDATE questions SET kavram = 'u4-sutunlar', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-seffaflik-yoksa';
UPDATE questions SET kavram = 'u4-sutunlar', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u4-uyarlamasiz';
UPDATE questions SET kavram = 'u4-sutunlar', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-uyarlama-zaman';
UPDATE questions SET kavram = 'u4-degerler', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-bes-deger';
UPDATE questions SET kavram = 'u4-degerler', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u4-cesaret';
UPDATE questions SET kavram = 'u4-degerler', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-odak';
UPDATE questions SET kavram = 'u4-yapi', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-etkinlik-sayisi';
UPDATE questions SET kavram = 'u4-yapi', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-artefaktlar';
UPDATE questions SET kavram = 'u4-yapi', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-uc-hesap';
UPDATE questions SET kavram = 'u4-yapi', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-alt-takim';
UPDATE questions SET kavram = 'u4-2020', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-developers';
UPDATE questions SET kavram = 'u4-2020', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-product-goal';
UPDATE questions SET kavram = 'u4-2020', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-kendini-yoneten';
UPDATE questions SET kavram = 'u4-2020', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-uc-soru';
UPDATE questions SET kavram = 'u4-2020', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-neden-konusu';
UPDATE questions SET kavram = 'u4-rehberde-yok', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-rehberde-var';
UPDATE questions SET kavram = 'u4-rehberde-yok', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-sprint-sifir';
UPDATE questions SET kavram = 'u4-rehberde-yok', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-user-story';
UPDATE questions SET kavram = 'u4-rehberde-yok', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u4-kullanmak-yasak-mi';
UPDATE questions SET kavram = 'u4-terim-haritasi', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u4-squad-koken';
UPDATE questions SET kavram = 'u4-terim-haritasi', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u4-squad-karsilik';
UPDATE questions SET kavram = 'u4-terim-haritasi', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u4-chapter';
UPDATE questions SET kavram = 'u4-terim-haritasi', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u4-epic-koken';
UPDATE questions SET kavram = 'u4-terim-haritasi', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u4-tech-lead';
UPDATE questions SET kavram = 'u4-terim-haritasi', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-buyuk-squad';
UPDATE questions SET kavram = 'u4-terim-haritasi', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u4-iletisim-yolu';
UPDATE questions SET kavram = 'u4-terim-haritasi', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u4-sm-yok';
UPDATE questions SET kavram = 'u4-terim-haritasi', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-po-onay';
UPDATE questions SET kavram = 'u4-tarihce', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u4-rugby';
UPDATE questions SET kavram = 'u4-tarihce', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u4-oopsla';
UPDATE questions SET kavram = 'u4-tarihce', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u4-rehber-yazarlar';
