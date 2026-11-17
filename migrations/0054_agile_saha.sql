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
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-po-amac', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Rehber''e göre Product Owner neyden hesap verebilir (accountable)?', '{"choices":["Scrum Takımı''nın çalışmasından doğan ürün değerini en çoklamaktan","Developers''ın günlük görevlerini dağıtmaktan ve izlemekten","Scrum etkinliklerinin zamanında başlayıp bitmesini sağlamaktan","Takım üyelerinin performans değerlendirmesini yapmaktan"]}', '{"index":0}', 'Product Owner, Scrum Takımı''nın çalışmasından doğan **ürün değerini en çoklamaktan** hesap verebilir. Görev dağıtmak Scrum''da kimsenin işi değildir; etkinliklerin time-box içinde yapılmasını sağlamak Scrum Master''ın hesap verebilirliğine girer.', 1, '5. ünite · Product Owner: değeri en çoklamak ve Product Backlog yönetimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-po-pb-isleri', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Aşağıdakilerden hangisi Rehber''in saydığı, Product Owner''ın Product Backlog yönetimi işlerinden biri **değildir**?', '{"choices":["Sprint Backlog''daki görevleri saatlik olarak tahmin etmek","Product Goal''ü geliştirmek ve açıkça iletmek","Product Backlog öğelerini oluşturup açıkça iletmek","Product Backlog''un şeffaf, görünür ve anlaşılır olmasını sağlamak"]}', '{"index":0}', 'Rehber''e göre PO Product Backlog yönetiminde dört şeyden hesap verebilir: **Product Goal''ü geliştirmek ve iletmek**, **PB öğelerini oluşturup iletmek**, **öğeleri sıralamak** ve **PB''nin şeffaf, görünür ve anlaşılır olmasını sağlamak**. Sprint Backlog ve onun planı Developers''a aittir.', 2, '5. ünite · Product Owner: değeri en çoklamak ve Product Backlog yönetimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-po-siralama', 'agile', 'ag-u5', 5, 'fill', 'derived', 'Product Backlog öğelerinin sırasından Scrum Takımı''nda kim hesap verebilir?', '{"blanks":1}', '{"blanks":[["Product Owner","PO","ürün sahibi"]]}', 'Sıralama **Product Owner**''ın işidir. Takımdan ve paydaşlardan bilgi toplar, ama son sıra onun kararıdır.', 1, '5. ünite · Product Owner: değeri en çoklamak ve Product Backlog yönetimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-po-hikaye-onay', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Squad''da PO Elif, öğrenci temsilcisi Arda''nın yazdığı bir hikâyeyi backlog''a almadan önce Arda ile kabul ölçütlerini netleştiriyor. Bu, Rehber açısından nasıl değerlendirilir?', '{"choices":["Uygun: PO, PB öğelerini başkasına yazdırsa da onların anlaşılır olmasından hesap verebilir","Uygunsuz: Rehber''e göre Product Backlog öğelerini yalnızca Product Owner kendisi yazabilir","Uygunsuz: kabul ölçütlerini yalnızca Developers yazabilir","Uygunsuz: paydaşlar Product Backlog''a öğe öneremez, yalnızca Review''da izleyebilir"]}', '{"index":0}', 'Rehber PO''nun işleri başkalarına yaptırabileceğini, ama **hesap verebilirliğin PO''da kaldığını** söyler. Paydaşın yazdığı bir hikâyeyi netleştirip sıraya koymak tam olarak bu sorumluluktur.', 2, '5. ünite · Product Owner: değeri en çoklamak ve Product Backlog yönetimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-tek-kisi', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Rehber''e göre Product Owner kimdir?', '{"choices":["Tek bir kişidir, bir komite değildir","Paydaşlardan oluşan bir yönlendirme kuruludur","Developers arasından her Sprint seçilen bir temsilcidir","Yönetim tarafından atanan bir proje yönetim ofisidir"]}', '{"index":0}', 'Rehber açıkça yazar: Product Owner **tek bir kişidir, komite değildir**. Birçok paydaşın isteğini Product Backlog''da temsil edebilir, ama kararı veren tek kişidir.', 1, '5. ünite · Product Owner tek kişidir; kararlarına saygı ve devretme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-saygi', 'agile', 'ag-u5', 5, 'tf', 'derived', 'Rehber''e göre Product Owner''ın başarılı olması için bütün organizasyonun onun kararlarına saygı göstermesi gerekir.', '{}', '{"value":true}', 'Doğru. PO''nun kararları Product Backlog''un içeriğinde ve sırasında, Sprint Review''da incelenen Increment''te görünür. Organizasyon bu kararlara saygı göstermezse PO adı var kendi yok bir rol olur.', 1, '5. ünite · Product Owner tek kişidir; kararlarına saygı ve devretme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-ikna', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Bilgi işlem müdürü Sinan Bey, ödeme ekranının bir sonraki Sprint''te yapılmasını istiyor. Rehber''e göre doğru yol nedir?', '{"choices":["Product Owner Elif''i ikna etmeye çalışmak","Developers''a doğrudan görevi vermek","Scrum Master Burak''tan Sprint Backlog''a eklemesini istemek","Tech Lead Can''dan öğeyi listenin başına almasını istemek"]}', '{"index":0}', 'Rehber''e göre Product Backlog''da değişiklik isteyen biri bunu **Product Owner''ı ikna etmeye çalışarak** yapar. Takıma doğrudan iş vermek PO''nun kararını devre dışı bırakır ve Sprint''in odağını bozar.', 2, '5. ünite · Product Owner tek kişidir; kararlarına saygı ve devretme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-vekil', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Elif iki haftalık izne çıkıyor ve sıralamayı geçici olarak Tech Lead Can''a bırakıyor. Rehber açısından hangisi doğrudur?', '{"choices":["Devretmek mümkündür ama Product Owner hesap verebilir olmaya devam eder","Devretmek mümkün değildir; Sprint''ler izin bitene kadar durdurulur","Can bu süre için Product Owner olur ve Elif''in hesap verebilirliği biter","Sıralamayı bu süre boyunca bütün takım oylayarak yapmak zorundadır"]}', '{"index":0}', 'Rehber: PO bu işleri kendisi yapabilir ya da başkalarına **devredebilir**; her iki durumda da **hesap verebilir olan PO''dur**. Sahada büyük squad''larda PO''ya bir "proxy" ya da iş analisti yardım eder; sahiplik yine PO''dadır.', 3, '5. ünite · Product Owner tek kişidir; kararlarına saygı ve devretme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-sm-hesap', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Rehber''e göre Scrum Master neyden hesap verebilir?', '{"choices":["Scrum''un Rehber''de tanımlandığı gibi kurulmasından ve takımın etkinliğinden","Product Backlog''un sıralanmasından ve ürün değerinden","Her Sprint''te taahhüt edilen bütün işlerin bitirilmesinden","Takımın teknik mimarisinden ve kod kalitesinden"]}', '{"index":0}', 'Scrum Master, Scrum''un Rehber''de tanımlandığı gibi kurulmasından ve **Scrum Takımı''nın etkinliğinden** hesap verebilir. Herkesin Scrum teorisini ve uygulamasını anlamasına yardım eder.', 1, '5. ünite · Scrum Master''ın Scrum Takımı''na hizmeti', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-gercek-lider', 'agile', 'ag-u5', 5, 'tf', 'derived', 'Rehber Scrum Master''ı "takıma ve daha büyük organizasyona hizmet eden gerçek lider" olarak tanımlar.', '{}', '{"value":true}', 'Doğru. 2020 Rehberi "hizmetkâr lider" yerine "takıma ve organizasyona **hizmet eden gerçek lider**" ifadesini kullanır. Vurgu emir vermekte değil, takımın kendini yönetmesini sağlamaktadır.', 1, '5. ünite · Scrum Master''ın Scrum Takımı''na hizmeti', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-engel', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Test ortamı üç gündür çalışmıyor ve squad ilerleyemiyor. Rehber''e göre Scrum Master Burak''ın bu durumdaki rolü nedir?', '{"choices":["Engelin kaldırılmasına neden olmak; gerekirse doğru kişiyi harekete geçirmek","Ortamı bizzat onarmak; başkası bu işi yaparsa rolünü ihlal etmiş olur","Engeli Sprint Retrospective''e kadar not edip bekletmek","Sprint''i iptal ederek yeni bir Sprint başlatmak"]}', '{"index":0}', 'Rehber''in ifadesi dikkatlidir: Scrum Master **engellerin kaldırılmasına neden olur** (causing the removal). Engeli kendisi kaldırmak zorunda değildir; DevOps Kerem''i, bilgi işlemi ya da yönetimi harekete geçirebilir. Retro''yu beklemek akışı günlerce durdurur.', 2, '5. ünite · Scrum Master''ın Scrum Takımı''na hizmeti', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-sm-not', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Aşağıdakilerden hangisi Rehber''e göre Scrum Master''ın Scrum Takımı''na hizmet yollarından biri **değildir**?', '{"choices":["Her sabah Developers''a o günün görevlerini atamak","Takım üyelerine kendi kendini yönetme ve çapraz işlevlilikte koçluk etmek","Takımın Definition of Done''ı karşılayan değerli Increment''lere odaklanmasına yardım etmek","Bütün Scrum etkinliklerinin yapılmasını ve time-box içinde kalmasını sağlamak"]}', '{"index":0}', 'Rehber''deki dört madde: kendi kendini yönetme ve çapraz işlevlilikte **koçluk**, DoD''u karşılayan **Increment''lere odak**, **engellerin kaldırılmasına neden olmak**, etkinliklerin **yapılması ve time-box içinde, olumlu ve verimli** olması. Görev atamak takımın kendini yönetmesine aykırıdır.', 2, '5. ünite · Scrum Master''ın Scrum Takımı''na hizmeti', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-sm-po', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Scrum Master''ın Product Owner''a hizmet yollarından biri hangisidir?', '{"choices":["Etkili Product Goal tanımlama ve Product Backlog yönetimi tekniklerini bulmasına yardım etmek","Product Backlog''u Product Owner''ın yerine sıralayıp sonucu ona bildirmek","Paydaş isteklerini Product Owner''a ulaşmadan önce eleyip süzmek","Sprint Review''da Increment''i Product Owner''ın yerine kabul etmek"]}', '{"index":0}', 'Rehber''e göre SM, PO''ya etkili **Product Goal** tanımlama ve **PB yönetimi** tekniklerini bulmada, takıma açık ve kısa PB öğelerinin gerekliliğini anlatmada, **empirik ürün planlamasında** ve gerektiğinde **paydaş iş birliğini kolaylaştırmada** yardım eder. Sıralama PO''nundur.', 2, '5. ünite · Scrum Master''ın Product Owner''a ve organizasyona hizmeti', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-sm-org', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Scrum Master''ın organizasyona hizmet yollarından biri hangisidir?', '{"choices":["Organizasyonun Scrum''u benimsemesine öncülük etmek, eğitim ve koçluk vermek","Takımların aylık verim ve performans raporlarını hazırlayıp yönetime sunmak","Organizasyondaki bütün projelerin bütçesini onaylamak","Takımlar arasında kişi değişikliklerine karar vermek"]}', '{"index":0}', 'Rehber: SM organizasyona Scrum''u benimsemesinde **öncülük, eğitim ve koçlukla**, Scrum uygulamalarını **planlayıp önermekle**, çalışanların ve paydaşların empirik yaklaşımı anlamasına yardımla ve paydaşlarla takımlar arasındaki **engelleri kaldırmakla** hizmet eder.', 1, '5. ünite · Scrum Master''ın Product Owner''a ve organizasyona hizmeti', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-sm-yok', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Bazı ölçekli yapılarda squad''larda Scrum Master yoktur; agile coach birkaç takıma birden bakar. Bu durumda Rehber''deki hangi hesap verebilirliğin sahibi açıkça belirlenmelidir?', '{"choices":["Takımın etkinliğinin ve Scrum''un doğru kurulmasının","Product Backlog''un sıralanmasının","Sprint Backlog''daki planın","Increment''in Definition of Done''ı karşılamasının"]}', '{"index":0}', 'Scrum Master''ın hesap verebilirliği takımın **etkinliği** ve Scrum''un doğru **kurulmasıdır**. Rol kaldırılırsa bu sorumluluk kaybolmaz; birkaç takıma bakan bir agile coach''a ya da takımın içindeki birine bilinçli olarak verilmelidir. Aksi halde Retro''lar ve engel takibi kendiliğinden zayıflar (12. ünite).', 3, '5. ünite · Scrum Master''ın Product Owner''a ve organizasyona hizmeti', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-dev-tanim', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Rehber''de "Developers" kimlerdir?', '{"choices":["Her Sprint''te kullanılabilir bir Increment''in herhangi bir yönünü yaratmaya bağlı kişiler","Yalnızca kod yazan yazılım mühendisleri","Yazılım mühendisleri ve teknik lider; test uzmanları ayrı bir gruptur","Product Owner''ın seçtiği ve Sprint boyunca görev atadığı kişiler"]}', '{"index":0}', 'Developers, Rehber''de **unvana bakılmaksızın** her Sprint''te kullanılabilir Increment''in herhangi bir yönünü yaratmaya bağlı kişilerdir. Squad''da QA Deniz ve Tuba, DevOps Kerem ve Tech Lead Can da Developers''tır.', 1, '5. ünite · Developers: Sprint Backlog, kalite ve günlük uyarlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-dev-hesap', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Aşağıdakilerden hangisi Rehber''e göre Developers''ın hesap verebilir olduğu işlerden biri **değildir**?', '{"choices":["Product Backlog öğelerini değerine göre sıralamak","Sprint için bir plan, yani Sprint Backlog oluşturmak","Definition of Done''a uyarak kaliteyi işin içine yerleştirmek","Planlarını her gün Sprint Goal''e göre uyarlamak"]}', '{"index":0}', 'Developers dört şeyden hesap verebilir: **Sprint Backlog''u oluşturmak**, **DoD''a uyarak kaliteyi yerleştirmek**, **planı her gün Sprint Goal''e göre uyarlamak** ve **birbirlerini profesyonel olarak hesap verebilir tutmak**. Sıralama PO''nundur.', 2, '5. ünite · Developers: Sprint Backlog, kalite ve günlük uyarlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-unvan', 'agile', 'ag-u5', 5, 'tf', 'derived', 'Rehber''e göre squad''daki test uzmanları Developers sayılmaz; onlar ayrı bir "QA rolü"dür.', '{}', '{"value":false}', 'Yanlış. Rehber Scrum Takımı''nda **alt takım ya da hiyerarşi olmadığını** söyler. QA, DevOps, tasarım uzmanları Increment''e katkı verdikleri için Developers''tır. Şirket içindeki unvanları değişmez, ama Scrum''daki hesap verebilirlikleri aynıdır.', 1, '5. ünite · Developers: Sprint Backlog, kalite ve günlük uyarlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-capraz-tanim', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Rehber''e göre çapraz işlevli (cross-functional) takım ne demektir?', '{"choices":["Her Sprint''te değer yaratmak için gereken bütün becerilere takım olarak sahip olmak","Her üyenin her işi aynı ustalıkla yapabilmesi","Takımın birden çok ürüne aynı anda hizmet etmesi","Takımın her Sprint''te başka bir bölüme geçici olarak çalışması"]}', '{"index":0}', 'Çapraz işlevlilik, değer üretmek için gereken becerilerin **takımın bütününde** bulunmasıdır. Herkesin her işi yapması gerekmez; ama işin başka bir takıma devredilmeden bitirilebilmesi gerekir.', 1, '5. ünite · Çapraz işlevli takım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-t-sekil', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Squad''da test işleri sürekli QA Deniz ve Tuba''nın önünde birikiyor. Çapraz işlevliliği güçlendiren en uygun adım hangisidir?', '{"choices":["Geliştiricilerin test otomasyonu öğrenip testi paylaşması","Testi Sprint''in son iki gününe toplu olarak bırakmak","QA''yı squad''dan çıkarıp ayrı bir test ekibi kurmak","Testi bir sonraki Sprint''e devretmeyi kural haline getirmek"]}', '{"index":0}', 'Çapraz işlevlilik **T biçimli** becerilerle güçlenir: herkesin bir derin uzmanlığı vardır ama komşu işlere de yardım edebilir. Ayrı test ekibi bir devir teslim (israf) ekler; testi sonraki Sprint''e bırakmak Increment''in Done olmasını engeller.', 2, '5. ünite · Çapraz işlevli takım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-bagimlilik', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Squad, her veritabanı değişikliği için başka bir takımın onayını bekliyor ve bu yüzden Increment''ler Sprint sonunda Done olamıyor. Bu durum en çok neyi gösterir?', '{"choices":["Takımın tam çapraz işlevli olmadığını; bir dış bağımlılığın akışı kestiğini","Takımın kendi kendini yönetmekte ve bağımsız çalışmakta başarılı olduğunu","Sprint süresinin bir aydan uzun olması gerektiğini","Product Owner''ın Product Backlog''u yanlış ve tutarsız biçimde sıraladığını"]}', '{"index":0}', 'Rehber''e göre takım değer yaratmak için gereken becerilere sahip olmalıdır. Düzenli bir dış onay bekleme, çapraz işlevliliğin eksik olduğunu gösterir. Çözüm yetkiyi ya da beceriyi takıma taşımak ya da bağımlılığı görünür kılıp azaltmaktır.', 2, '5. ünite · Çapraz işlevli takım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-kendini-yoneten', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Rehber''e göre "kendi kendini yöneten" (self-managing) takım ne demektir?', '{"choices":["Kimin neyi, ne zaman ve nasıl yapacağına takımın kendi içinde karar vermesi","Takımın Product Goal''ü ve ürün yönünü kendisinin belirlemesi","Takımın hiçbir kurala ve standarda uymak zorunda olmaması","Takımın yönetim toplantılarına hiç katılmaması"]}', '{"index":0}', 'Kendi kendini yönetmek, **kimin neyi, ne zaman ve nasıl** yapacağına takımın içeride karar vermesidir. Ürünün yönünü PO belirler; organizasyonun DoD standardı gibi kurallar da geçerlidir.', 1, '5. ünite · Kendi kendini yöneten takım ve takımın sorumluluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-butun-takim', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Rehber''e göre değerli ve kullanışlı bir Increment yaratmak, Scrum Takımı''nda kimin sorumluluğudur?', '{"choices":["Bütün Scrum Takımı''nın","Yalnızca Developers''ın","Yalnızca Product Owner''ın","Yalnızca Scrum Master''ın"]}', '{"index":0}', 'Rehber: Scrum Takımı her Sprint''te değerli, kullanışlı bir Increment yaratmaktan **bütün takım olarak** sorumludur. Hesap verebilirlikler farklıdır ama sonuç ortaktır.', 2, '5. ünite · Kendi kendini yöneten takım ve takımın sorumluluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-hiyerarsi', 'agile', 'ag-u5', 5, 'tf', 'derived', 'Rehber''e göre Scrum Takımı''nda alt takımlar ya da hiyerarşiler yoktur.', '{}', '{"value":true}', 'Doğru. Scrum Takımı, tek bir hedefe (Product Goal) odaklanmış, **alt takımı ve hiyerarşisi olmayan** uyumlu bir profesyoneller birimidir. Squad''daki Tech Lead bir şirket unvanıdır, Scrum''da ayrı bir hesap verebilirlik değildir.', 1, '5. ünite · Kendi kendini yöneten takım ve takımın sorumluluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-on-kisi', 'agile', 'ag-u5', 5, 'num', 'derived', 'Rehber''e göre Scrum Takımı tipik olarak en fazla kaç kişidir?', '{"blanks":1}', '{"blanks":[["10±0"]]}', 'Rehber: Scrum Takımı çevik olacak kadar küçük, önemli bir iş çıkaracak kadar büyüktür; tipik olarak **10 ya da daha az** kişidir. Küçük takımlar daha iyi iletişim kurar ve daha üretkendir.', 1, '5. ünite · Takım büyüklüğü ve büyük squad''lar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-iletisim-yolu', 'agile', 'ag-u5', 5, 'num', 'derived', 'Squad''da 12 kişi var. Herkesin herkesle doğrudan konuşabileceği ikili iletişim yolu sayısı kaçtır? (n(n−1)/2)', '{"blanks":1}', '{"blanks":[["66±0"]]}', '12 × 11 / 2 = **66**. Takım 7 kişi olsaydı 21 yol olurdu. Kişi sayısı bir artınca yol sayısı kişi sayısı kadar artar; büyük takımlarda bilgi bu yüzden birkaç kişide toplanır.', 2, '5. ünite · Takım büyüklüğü ve büyük squad''lar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-bolme', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Rehber''e göre Scrum Takımı çok büyürse ne yapılması önerilir?', '{"choices":["Aynı Product Goal, Product Backlog ve Product Owner''ı paylaşan birkaç takıma bölünmesi","Her alt takıma ayrı bir Product Owner ve ayrı bir Product Backlog verilmesi","Takımın olduğu gibi kalıp Sprint süresinin iki aya çıkarılarak iletişime zaman açılması","Daily Scrum''ın kaldırılıp yerine haftalık durum raporu konması"]}', '{"index":0}', 'Rehber: takım çok büyürse, **aynı ürüne odaklı** birden çok uyumlu Scrum Takımı''na bölünmeyi düşünmelidir; bu takımlar **aynı Product Goal''ü, Product Backlog''u ve Product Owner''ı paylaşır**.', 2, '5. ünite · Takım büyüklüğü ve büyük squad''lar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-buyuk-squad', 'agile', 'ag-u5', 5, 'mcq', 'derived', '12 kişilik squad iki takıma bölünmeye karar verdi: "Sipariş" ve "Menü". Rehber''le uyumlu bölünme hangisidir?', '{"choices":["İki takım tek PO, tek Product Backlog ve tek Product Goal paylaşır; Sprint Backlog''ları ayrıdır","Her takımın ayrı PO''su, ayrı Product Backlog''u ve ayrı Product Goal''ü olur; ortak olan yalnızca SM''dir","Bir takım yalnızca geliştirme, öteki yalnızca test ve yayın yapar; iş aralarında devredilir","İki takım tek Sprint Backlog paylaşır ama ayrı Product Owner''ları olur"]}', '{"index":0}', 'Aynı ürün için bölünen takımlar **tek PO, tek PB ve tek Product Goal** paylaşır; her takım kendi Sprint Backlog''unu yapar. İşleve göre (geliştirme/test) bölmek çapraz işlevliliği bozar ve devir teslim israfı yaratır. Ölçekli yapılar (tribe, LeSS, Nexus) 3. pratikte ele alınır.', 3, '5. ünite · Takım büyüklüğü ve büyük squad''lar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-karar-sira', 'agile', 'ag-u5', 5, 'mcq', 'derived', '"Ödeme ekranı mı önce gelsin, alerjen etiketi mi?" sorusunun son kararı Scrum''da kimdedir?', '{"choices":["Product Owner","Scrum Master","Developers","Bilgi işlem müdürü"]}', '{"index":0}', 'Sıralama kararı **Product Owner**''ındır. Developers teknik riskleri, paydaşlar ihtiyaçlarını söyler; ama sırayı PO belirler.', 1, '5. ünite · Hangi karar kimin hesap verebilirliğinde?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-karar-nasil', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Seçilen bir öğenin nasıl tasarlanacağı ve hangi teknolojiyle yapılacağı kararı kimdedir?', '{"choices":["Developers","Product Owner","Scrum Master","Yemekhane müdürü"]}', '{"index":0}', 'Rehber: seçilen öğelerin Increment''e **nasıl** dönüştürüleceğine **yalnızca Developers** karar verir. PO bunu bilgiyle etkileyebilir ama dayatamaz.', 1, '5. ünite · Hangi karar kimin hesap verebilirliğinde?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-karar-kac-oge', 'agile', 'ag-u5', 5, 'fill', 'derived', 'Sprint Planning''de Sprint''e kaç öğe alınacağını kim seçer?', '{"blanks":1}', '{"blanks":[["Developers","geliştiriciler","developer","geliştirici"]]}', 'Rehber: Developers, Product Owner ile konuşarak Product Backlog''dan Sprint''e öğe **seçer**. Kapasiteyi en iyi bilen onlardır; PO "şu kadar sığdırın" diyemez.', 2, '5. ünite · Hangi karar kimin hesap verebilirliğinde?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u5-karar-sure', 'agile', 'ag-u5', 5, 'mcq', 'derived', 'Daily Scrum''ın her gün 15 dakikayı aşmasını engellemek Rehber''de kimin hesap verebilirliğiyle en doğrudan ilgilidir?', '{"choices":["Scrum Master","Product Owner","Developers","Paydaşlar"]}', '{"index":0}', 'Scrum Master etkinliklerin yapılmasını ve **time-box içinde** kalmasını sağlar. Daily''nin içeriği Developers''ındır; süreyi korumak SM''nin takıma hizmetidir.', 2, '5. ünite · Hangi karar kimin hesap verebilirliğinde?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-sprint-sure', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Rehber''e göre bir Sprint''in uzunluğu nasıldır?', '{"choices":["Bir ay ya da daha kısa ve sabit uzunlukta","Tam iki hafta; başka bir uzunluk Scrum değildir","İşin büyüklüğüne göre her seferinde yeniden belirlenir","En az bir ay, en fazla üç ay"]}', '{"index":0}', 'Sprint''ler **bir ay ya da daha kısa**, **sabit uzunluktaki** etkinliklerdir. İki hafta yaygın bir tercihtir ama Rehber''in kuralı değildir.', 1, '6. ünite · Sprint: bir ay ya da daha kısa, sabit uzunluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-kapsayici', 'agile', 'ag-u6', 6, 'tf', 'derived', 'Rehber''e göre Sprint, öteki bütün Scrum etkinliklerini kapsayan bir etkinliktir.', '{}', '{"value":true}', 'Doğru. Sprint bir kapsayıcıdır: Sprint Planning, Daily Scrum''lar, Sprint Review ve Sprint Retrospective **Sprint''in içinde** gerçekleşir. Fikri değere dönüştüren bütün iş de Sprint içinde yapılır.', 1, '6. ünite · Sprint: bir ay ya da daha kısa, sabit uzunluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-ard-arda', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Squad bir Sprint''i Cuma bitirdi. Rehber''e göre yeni Sprint ne zaman başlar?', '{"choices":["Önceki Sprint biter bitmez","Bir haftalık \"hazırlık Sprint''i\" bittikten sonra","Product Owner yeni Product Goal''ü yazınca","Sprint Review''daki bütün geri bildirimler uygulanınca"]}', '{"index":0}', 'Rehber: yeni Sprint, önceki Sprint''in bitişinin **hemen ardından** başlar. Sprint''ler arasında boşluk ya da "Sprint 0", "sertleştirme Sprint''i" gibi ara dönemler Rehber''de yoktur.', 2, '6. ünite · Sprint: bir ay ya da daha kısa, sabit uzunluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-uzun-risk', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Sprint''ler çok uzun tutulursa Rehber hangi riskten söz eder?', '{"choices":["Sprint Goal geçersizleşebilir, karmaşıklık ve risk artabilir","Takım çok fazla Increment üretir ve paydaşlar yetişemez","Daily Scrum''lar 15 dakikadan kısa sürmeye başlar","Product Owner''ın Product Backlog''u sıralamasına gerek kalmaz"]}', '{"index":0}', 'Rehber: Sprint''in ufku çok uzun olursa **Sprint Goal geçersiz hale gelebilir**, karmaşıklık ve **risk artabilir**. Kısa Sprint''ler daha sık öğrenme döngüsü üretir ve maliyet ile riski bir aylık süreyle sınırlar.', 2, '6. ünite · Sprint: bir ay ya da daha kısa, sabit uzunluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-kural-hedef', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Aşağıdakilerden hangisi Rehber''e göre Sprint boyunca geçerli kurallardan biri **değildir**?', '{"choices":["Sprint Backlog''a hiçbir koşulda yeni iş eklenemez","Sprint Goal''ü tehlikeye atacak değişiklik yapılmaz","Kalite düşmez","Product Backlog gerektikçe inceltilir"]}', '{"index":0}', 'Rehber''in kuralları: Sprint Goal''ü tehlikeye atacak **değişiklik yapılmaz**, **kalite düşmez**, Product Backlog **gerektikçe inceltilir**, daha çok şey öğrenildikçe **kapsam PO ile netleştirilip yeniden görüşülebilir**. Sprint Backlog Sprint boyunca değişebilir; yeter ki Sprint Goal korunsun.', 2, '6. ünite · Sprint boyunca değişmeyenler ve kapsamın netleşmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-kalite', 'agile', 'ag-u6', 6, 'tf', 'derived', 'Sprint''in sonu yaklaştığında, Sprint Goal''e yetişmek için testleri atlamak Rehber''e uygundur.', '{}', '{"value":false}', 'Yanlış. Rehber Sprint boyunca **kalitenin düşmeyeceğini** açıkça yazar. Testsiz iş Definition of Done''ı karşılamaz ve Increment sayılmaz; kapsam PO ile yeniden görüşülür, kalite değil.', 1, '6. ünite · Sprint boyunca değişmeyenler ve kapsamın netleşmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-acil-istek', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Sprint''in ortasında yemekhane müdürü Nurten Hanım yeni bir rapor ekranı istiyor; Sprint Goal "öğrenciler siparişini telefondan verebilsin". En uygun davranış hangisidir?', '{"choices":["İsteği PO Elif''e iletmek; Elif onu Product Backlog''a alıp sıralar","Rapor ekranını hemen Sprint Backlog''a eklemek ve Sprint Goal''ü değiştirmek","Bir geliştiriciyi Sprint''ten çekip rapora ayırmak","Sprint''i iptal edip rapor için yeni bir Sprint başlatmak"]}', '{"index":0}', 'Yeni istek **Product Backlog''a** girer; PO onu sıralar ve uygun bir sonraki Sprint''te ele alınır. Sprint Goal''ü tehlikeye atan değişiklik yapılmaz. Rapor ekranı Sprint Goal''ü geçersiz kılmadığı için iptal de gerekmez.', 3, '6. ünite · Sprint boyunca değişmeyenler ve kapsamın netleşmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-iptal-kim', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Rehber''e göre bir Sprint''i kim iptal edebilir?', '{"choices":["Yalnızca Product Owner","Scrum Master","Developers''ın oy çokluğu","Takımın bağlı olduğu yönetici"]}', '{"index":0}', 'Bir Sprint''i iptal etme yetkisi **yalnızca Product Owner**''dadır. Başkaları onu ikna etmeye çalışabilir.', 1, '6. ünite · Sprint''in iptali', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-iptal-ne-zaman', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Rehber''e göre bir Sprint hangi durumda iptal edilebilir?', '{"choices":["Sprint Goal geçersiz hale gelirse","Takım Sprint''in ilk haftasında planın gerisinde kalırsa","Bir takım üyesi hastalanırsa","Sprint Review''un tarihi paydaşlara uymazsa"]}', '{"index":0}', 'Rehber: Sprint, **Sprint Goal geçersiz (obsolete) hale gelirse** iptal edilebilir. Örneğin yemekhane ihalesi başka bir firmaya geçtiyse ve sipariş özelliği anlamsızlaştıysa. Gerideki bir plan iptal nedeni değildir; kapsam PO ile yeniden görüşülür.', 2, '6. ünite · Sprint''in iptali', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-iptal-nadir', 'agile', 'ag-u6', 6, 'tf', 'derived', 'Sprint iptali Scrum''da nadir ve maliyetli bir olaydır; sık iptal genellikle Sprint''lerin fazla uzun ya da hedeflerin belirsiz olduğuna işaret eder.', '{}', '{"value":true}', 'Doğru. İptal, planlama emeğini boşa harcar ve takımın ritmini bozar. Sık iptal ediliyorsa Sprint''i kısaltmak ya da Sprint Goal''ü daha odaklı yazmak çoğu zaman daha iyi bir çözümdür.', 2, '6. ünite · Sprint''in iptali', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-uc-konu', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Rehber''e göre Sprint Planning''in üç konusu hangileridir?', '{"choices":["Sprint neden değerli, bu Sprint''te ne yapılabilir, seçilen iş nasıl yapılacak","Kim hangi görevi yapacak, her görev kaç saat sürecek, ne zaman teslim edilecek","Dün ne yaptık, bugün ne yapacağız, engel var mı","Ne iyi gitti, ne kötü gitti, neyi değiştireceğiz"]}', '{"index":0}', 'Sprint Planning üç konuyu ele alır: **Neden** (Sprint Goal), **Ne** (seçilen öğeler) ve **Nasıl** (seçilen işi Done bir Increment''e dönüştürme planı). "Dün/bugün/engel" eski Daily kalıbıdır; "iyi/kötü/değiştir" bir Retro biçimidir.', 1, '6. ünite · Sprint Planning 1. konu: neden değerli, Sprint Goal', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-goal-kim', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Sprint Goal''ü Sprint Planning''de kim tanımlar?', '{"choices":["Bütün Scrum Takımı birlikte","Product Owner tek başına, toplantıdan önce","Scrum Master, takımın kapasitesine bakarak","Paydaşlar, Sprint Review''da"]}', '{"index":0}', 'PO, ürünün bu Sprint''te değerini nasıl artırabileceğini önerir; ama Sprint Goal''ü **bütün Scrum Takımı** birlikte tanımlar. Sprint Goal Sprint Planning''in sonunda kesinleşmiş olmalıdır.', 2, '6. ünite · Sprint Planning 1. konu: neden değerli, Sprint Goal', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-davet', 'agile', 'ag-u6', 6, 'tf', 'derived', 'Rehber''e göre Scrum Takımı, tavsiye almak için Sprint Planning''e başka kişileri de davet edebilir.', '{}', '{"value":true}', 'Doğru. Örneğin squad, ödeme entegrasyonunu planlarken bilgi işlemden Sinan Bey''i davet edebilir. Davetli tavsiye verir; seçim ve plan takımındır.', 1, '6. ünite · Sprint Planning 1. konu: neden değerli, Sprint Goal', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-ne-girdi', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Developers Sprint''e ne kadar iş alacaklarına karar verirken Rehber''e göre neleri dikkate alır?', '{"choices":["Geçmiş performanslarını, bu Sprint''teki kapasitelerini ve Definition of Done''ı","Yönetimin bu çeyrek için verdiği hedef rakamı","Product Owner''ın Sprint''e sığmasını istediği öğe sayısını","Bir önceki Sprint''te bitmeyen işlerin tamamını otomatik olarak"]}', '{"index":0}', 'Rehber: Developers ne kadar iş seçeceklerini tahmin ederken **geçmiş performanslarını**, **yaklaşan kapasitelerini** ve **Definition of Done''ı** ne kadar iyi bildiklerini dikkate alır. Ne kadar iyi tahmin ederlerse o kadar güvenle seçerler.', 2, '6. ünite · Sprint Planning 2. konu: ne yapılabilir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-kapasite-hesap', 'agile', 'ag-u6', 6, 'num', 'derived', 'Squad''ın son üç Sprint''te bitirdiği puanlar 38, 42 ve 40. Bu Sprint''te 12 kişiden 3''ü bir hafta izinde (iki haftalık Sprint, yani kapasite yaklaşık %87,5). Kaba bir tahminle kaç puan seçmek mantıklıdır? (Ortalama × 0,875, tam sayıya yuvarla)', '{"blanks":1}', '{"blanks":[["35±1"]]}', 'Ortalama (38 + 42 + 40) / 3 = 40.
---
12 kişi × 10 gün = 120 kişi-gün; 3 kişi × 5 gün = 15 kişi-gün eksik, kalan 105 / 120 = %87,5.
---
40 × 0,875 = **35** puan. Bu bir kaba tahmindir; seçim yine Developers''ındır.', 2, '6. ünite · Sprint Planning 2. konu: ne yapılabilir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-inceltme-planning', 'agile', 'ag-u6', 6, 'tf', 'derived', 'Sprint Planning sırasında seçilen öğeler daha da inceltilebilir; bu, Developers''ın kendilerine olan güvenini artırır.', '{}', '{"value":true}', 'Doğru. Rehber, Sprint Planning''de öğelerin inceltilebileceğini (refine) yazar. Ama çok fazla inceltme gerekiyorsa refinement''ın Sprint boyunca yeterince yapılmadığını gösterir (8. ünite).', 2, '6. ünite · Sprint Planning 2. konu: ne yapılabilir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-nasil-kim', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Seçilen Product Backlog öğelerinin Increment''e nasıl dönüştürüleceğine kim karar verir?', '{"choices":["Yalnızca Developers","Product Owner ve Scrum Master birlikte","Tech Lead tek başına","Bütün paydaşlar oylayarak"]}', '{"index":0}', 'Rehber: seçilen öğelerin değer üreten Increment''lere **nasıl** dönüştürüleceği **yalnızca Developers''ın takdirindedir**. Squad''da Tech Lead Can bir Developer''dır; onun görüşü önemlidir ama tek başına karar vermez.', 1, '6. ünite · Sprint Planning 3. konu: nasıl yapılacak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-bir-gun', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Rehber''e göre Developers seçilen işi planlarken öğeleri sıklıkla hangi büyüklükte işlere ayırır?', '{"choices":["Bir gün ya da daha kısa süren işlere","Tam olarak bir haftalık işlere","Sprint uzunluğu kadar süren tek bir işe","Her biri tam olarak dört saatlik görevlere"]}', '{"index":0}', 'Rehber bunu sık yapılan bir uygulama olarak anar: öğeler **bir gün ya da daha kısa** süren işlere ayrılır. Kural değildir; amaç ilerlemenin her gün görünür olmasıdır.', 2, '6. ünite · Sprint Planning 3. konu: nasıl yapılacak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-planning-sure', 'agile', 'ag-u6', 6, 'num', 'derived', 'Bir aylık Sprint için Sprint Planning''in time-box''ı en fazla kaç saattir?', '{"blanks":1}', '{"blanks":[["8±0"]]}', 'Rehber: bir aylık Sprint için Sprint Planning en fazla **8 saattir**. Daha kısa Sprint''lerde genellikle daha kısadır.', 1, '6. ünite · Sprint Planning 3. konu: nasıl yapılacak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-daily-amac', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Rehber''e göre Daily Scrum''ın amacı nedir?', '{"choices":["Sprint Goal''e doğru ilerlemeyi denetlemek ve Sprint Backlog''u gerektikçe uyarlamak","Her geliştiricinin yöneticisine o gün ne kadar çalıştığını anlatan durum raporu vermesi","Product Owner''ın yeni işleri Developers''a dağıtması","Bir önceki Sprint''te yaşanan sorunların kök nedenini birlikte bulmak"]}', '{"index":0}', 'Daily Scrum, **Sprint Goal''e doğru ilerlemeyi denetlemek** ve Sprint Backlog''u gerektikçe **uyarlamak** içindir. Bir durum raporu ya da iş dağıtma toplantısı değildir.', 1, '6. ünite · Daily Scrum: amaç, katılım ve yapı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-daily-kimin', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Daily Scrum kimin için yapılan bir etkinliktir?', '{"choices":["Developers için","Product Owner için","Scrum Master için","Paydaşlar ve yöneticiler için"]}', '{"index":0}', 'Daily Scrum **Developers için** bir etkinliktir. PO ve SM Sprint Backlog''daki öğeler üzerinde aktif olarak çalışıyorlarsa **Developers olarak** katılırlar.', 2, '6. ünite · Daily Scrum: amaç, katılım ve yapı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-uc-soru', 'agile', 'ag-u6', 6, 'tf', 'derived', '2020 Rehberi''ne göre Daily Scrum''da her Developer "dün ne yaptım, bugün ne yapacağım, önümde engel var mı" sorularını cevaplamak zorundadır.', '{}', '{"value":false}', 'Yanlış. Üç soru 2017 Rehberi''nde bir örnek olarak geçiyordu; 2020 Rehberi''nde çıkarıldı. Developers, Sprint Goal''e ilerlemeye odaklandığı ve uygulanabilir bir plan ürettiği sürece **istediği yapıyı ve teknikleri** seçebilir.', 2, '6. ünite · Daily Scrum: amaç, katılım ve yapı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-ayni-yer', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Rehber, karmaşıklığı azaltmak için Daily Scrum''ın her gün nasıl yapılmasını önerir?', '{"choices":["Aynı saatte ve aynı yerde","Her gün farklı bir yerde","Yalnızca çevrim içi","Sprint''in yalnızca ilk ve son gününde"]}', '{"index":0}', 'Rehber: karmaşıklığı azaltmak için Daily Scrum Sprint''in her iş günü **aynı saatte ve aynı yerde** yapılır.', 1, '6. ünite · Daily Scrum: amaç, katılım ve yapı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-tek-firsat-degil', 'agile', 'ag-u6', 6, 'tf', 'derived', 'Rehber''e göre Developers''ın planlarını yalnızca Daily Scrum''da uyarlaması gerekmez; gün içinde ayrıntılı tartışmalar için sık sık bir araya gelebilirler.', '{}', '{"value":true}', 'Doğru. Daily Scrum iletişimi iyileştirir ve öteki toplantıları azaltır; ama Developers''ın planı **yalnızca** orada uyarlayabileceği anlamına gelmez.', 2, '6. ünite · Daily Scrum: amaç, katılım ve yapı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-uzayan-daily', 'agile', 'ag-u6', 6, 'mcq', 'derived', '12 kişilik squad''ın Daily''si her gün 35 dakika sürüyor; herkes yaptığı işi tek tek anlatıyor. En uygun iyileştirme hangisidir?', '{"choices":["Panoyu sağdan sola, yani bitmeye en yakın işten başlayarak yürümek ve ayrıntıyı sonraya bırakmak","Daily''yi haftada bire indirip süresini bir saate çıkarmak ve herkesin ayrıntılı anlatmasını sağlamak","Daily''yi kaldırıp yerine yazılı durum raporu istemek","Herkesin konuşma süresini bir dakikaya indirip yine kişi kişi sırayla konuşmaya devam etmek"]}', '{"index":0}', 'Büyük squad''larda kişi kişi tur atmak süreyi uzatır ve odağı kişilere kaydırır. **Panoyu yürümek** (sağdan sola, Done''a en yakın işten) odağı Sprint Goal''e ve takılan işlere taşır. Ayrıntılı tartışmalar Daily''den sonra ilgili kişilerle yapılır.', 2, '6. ünite · Büyük squad''da Daily Scrum', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-parking-lot', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Daily''de iki geliştirici bir veritabanı tasarımını tartışmaya başladı. Kolaylaştırıcının en iyi hamlesi hangisidir?', '{"choices":["Konuyu \"sonra konuşulacaklar\" listesine alıp Daily''den sonra ilgili kişilerle sürdürmek","Tartışma bitene kadar Daily''yi uzatmak ve herkesin dinlemesini sağlamak","Konuyu Sprint Retrospective''e ertelemek ve o zamana kadar beklemek","Kararı hemen Product Owner''a bırakmak"]}', '{"index":0}', 'Daily 15 dakikalık bir **denetim ve uyarlama** noktasıdır. Ayrıntılı tartışma bir "park alanı"na (sonra konuşulacaklar) alınır ve Daily bitince gerekli kişilerle yapılır. Tasarım kararı Developers''ındır.', 2, '6. ünite · Büyük squad''da Daily Scrum', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-yonetici', 'agile', 'ag-u6', 6, 'mcq', 'derived', 'Bölüm yöneticisi her Daily''ye katılıp herkese "neden bu kadar sürdü?" diye soruyor ve Daily bir hesap verme toplantısına dönüşüyor. Rehber açısından en doğru değerlendirme hangisidir?', '{"choices":["Daily Developers içindir; Scrum Master yöneticiyle konuşup Daily''nin amacını korumalıdır","Yönetici bir paydaş olduğu için Daily''yi yönetme ve soru sorma hakkı vardır","Daily''nin amacı zaten yöneticiye hesap vermektir","Yönetici katılıyorsa Daily''nin süresi 30 dakikaya çıkarılmalı ve herkes ayrıntılı anlatmalıdır"]}', '{"index":0}', 'Daily **Developers''ın** Sprint Goal''e ilerlemeyi denetlediği etkinliktir. Scrum Master organizasyona hizmet ederek yöneticiye Scrum''u anlatır; yöneticinin ilgisi Sprint Review''a ya da bilgi radyatörlerine (pano, burndown) yönlendirilebilir.', 3, '6. ünite · Büyük squad''da Daily Scrum', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-daily-sure', 'agile', 'ag-u6', 6, 'num', 'derived', 'Daily Scrum''ın time-box''ı kaç dakikadır?', '{"blanks":1}', '{"blanks":[["15±0"]]}', 'Daily Scrum **15 dakikalık** bir etkinliktir ve Sprint''in uzunluğuna göre değişmez.', 1, '6. ünite · Etkinliklerin time-box''ları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-review-sure', 'agile', 'ag-u6', 6, 'num', 'derived', 'Bir aylık Sprint için Sprint Review''un time-box''ı en fazla kaç saattir?', '{"blanks":1}', '{"blanks":[["4±0"]]}', 'Bir aylık Sprint için Sprint Review en fazla **4 saattir**. Rehber''deki sıralama: Planning 8, Review 4, Retrospective 3 saat; Daily 15 dakika.', 1, '6. ünite · Etkinliklerin time-box''ları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-retro-sure', 'agile', 'ag-u6', 6, 'num', 'derived', 'Bir aylık Sprint için Sprint Retrospective''in time-box''ı en fazla kaç saattir?', '{"blanks":1}', '{"blanks":[["3±0"]]}', 'Bir aylık Sprint için Sprint Retrospective en fazla **3 saattir**.', 1, '6. ünite · Etkinliklerin time-box''ları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-oran', 'agile', 'ag-u6', 6, 'num', 'derived', 'İki haftalık Sprint''te squad, time-box''ları bir aylık değerlerle orantılı tutuyor. Sprint Planning en fazla kaç saat sürmelidir?', '{"blanks":1}', '{"blanks":[["4±0"]]}', 'Bir aylık (yaklaşık 4 haftalık) Sprint için 8 saat; iki hafta bunun yarısı, yani **4 saat**. Rehber yalnızca üst sınırı verir ve kısa Sprint''lerde etkinliklerin "genellikle daha kısa" olduğunu söyler; orantı sahada yaygın bir kuraldır.', 3, '6. ünite · Etkinliklerin time-box''ları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u6-ust-sinir', 'agile', 'ag-u6', 6, 'tf', 'derived', 'Time-box bir üst sınırdır; amacına ulaşan bir etkinlik süresi dolmadan bitebilir.', '{}', '{"value":true}', 'Doğru. Time-box en fazla süreyi belirler. Sprint Planning 2 saatte amacına ulaştıysa 4 saati doldurmak gerekmez. Sprint ise bunun istisnasıdır: sabit uzunluktadır.', 1, '6. ünite · Etkinliklerin time-box''ları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-review-amac', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Rehber''e göre Sprint Review''un amacı nedir?', '{"choices":["Sprint''in sonucunu denetlemek ve gelecekteki uyarlamaları belirlemek","Takımın Sprint boyunca nasıl çalıştığını iyileştirmek","Bir sonraki Sprint''in görevlerini saatlik olarak planlamak","Developers''ın bireysel performansını değerlendirmek"]}', '{"index":0}', 'Sprint Review, Sprint''in **sonucunu denetlemek** ve **gelecekteki uyarlamaları belirlemek** içindir. Takımın çalışma biçimini iyileştirmek Retrospective''in işidir.', 1, '7. ünite · Sprint Review: amaç, katılımcılar ve çıktı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-review-kim', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Sprint Review''a kimler katılır?', '{"choices":["Scrum Takımı ve davet edilen önemli paydaşlar","Yalnızca Product Owner ve üst yönetim temsilcileri","Yalnızca Developers","Yalnızca Scrum Master ve Product Owner"]}', '{"index":0}', 'Scrum Takımı çalışmasının sonuçlarını **önemli paydaşlara** sunar ve Product Goal''e doğru ilerleme tartışılır. Squad''da Nurten Hanım ve öğrenci temsilcisi Arda doğal katılımcılardır.', 2, '7. ünite · Sprint Review: amaç, katılımcılar ve çıktı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-review-cikti', 'agile', 'ag-u7', 7, 'fill', 'derived', 'Sprint Review''un sonucunda Rehber''e göre ne değişebilir?', '{"blanks":1}', '{"blanks":[["Product Backlog","ürün iş listesi","PB"]]}', 'Rehber: Sprint Review sırasında Product Backlog da yeni fırsatları karşılamak için **uyarlanabilir**. Paydaşların tepkileri sıralamayı ve içeriği değiştirir.', 2, '7. ünite · Sprint Review: amaç, katılımcılar ve çıktı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-review-sirasi', 'agile', 'ag-u7', 7, 'tf', 'derived', 'Sprint Review, Sprint''in sondan bir önceki etkinliğidir; ardından Sprint Retrospective gelir.', '{}', '{"value":true}', 'Doğru. Sıra: Sprint Review, ardından Sprint Retrospective; Retro Sprint''i kapatır. Böylece Retro, Review''da öğrenilenleri de değerlendirebilir.', 1, '7. ünite · Sprint Review: amaç, katılımcılar ve çıktı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-sunum-degil', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Rehber Sprint Review''u nasıl tanımlar?', '{"choices":["Bir çalışma oturumu; takım bunu bir sunuma indirgememelidir","Hazırlanmış slaytlarla yapılan resmi bir sunum","Increment''in yayına çıkması için gereken onay toplantısı","Takımın kendi içinde yaptığı bir kod incelemesi"]}', '{"index":0}', 'Rehber: Sprint Review bir **çalışma oturumudur** (working session) ve Scrum Takımı onu **bir sunuma indirgememelidir**. Paydaşlar ürünü kullanır, soru sorar, sonrasını birlikte konuşur.', 1, '7. ünite · Review bir sunum ya da onay kapısı değildir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-kapi-degil', 'agile', 'ag-u7', 7, 'tf', 'derived', 'Rehber''e göre bir Increment ancak Sprint Review''da paydaşlar onayladıktan sonra yayına çıkabilir.', '{}', '{"value":false}', 'Yanlış. Rehber, Sprint Review''un **değerin yayına çıkmasının önünde bir kapı olarak düşünülmemesi** gerektiğini yazar. Increment, DoD''u karşıladığı anda Sprint bitmeden de yayınlanabilir.', 2, '7. ünite · Review bir sunum ya da onay kapısı değildir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-iyi-review', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Squad''ın Review''u için hangisi Rehber''in ruhuna en uygundur?', '{"choices":["Öğrenciler telefondan sipariş verir, Nurten Hanım mutfak ekranını dener, sonrası konuşulur","Tech Lead Can 40 slaytlık mimari sunumu yapar, paydaşlar sonunda soru sorar","PO Elif tamamlanan hikâyelerin listesini okur ve paydaşlardan imza alır","Developers yalnızca bitmeyen işlerin nedenlerini tek tek açıklar ve özür diler"]}', '{"index":0}', 'İyi bir Review''da paydaşlar **çalışan Increment''i kendileri kullanır** ve ortaya çıkan bilgi Product Backlog''u besler. Slayt, liste okuma ya da imza almak bir çalışma oturumu değildir.', 2, '7. ünite · Review bir sunum ya da onay kapısı değildir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-retro-amac', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Rehber''e göre Sprint Retrospective''in amacı nedir?', '{"choices":["Kaliteyi ve etkinliği artırmanın yollarını planlamak","Paydaşlara Increment''i göstermek","Bir sonraki Sprint''in Sprint Goal''ünü belirlemek","Product Backlog''u yeniden sıralamak"]}', '{"index":0}', 'Sprint Retrospective''in amacı **kaliteyi ve etkinliği artırmanın yollarını planlamaktır**. Manifesto''nun 12. ilkesinin Scrum''daki karşılığıdır.', 1, '7. ünite · Sprint Retrospective: neyi denetler, ne üretir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-retro-kapsam', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Rehber''e göre Retrospective''te son Sprint''in nasıl geçtiği hangi açılardan denetlenir?', '{"choices":["Bireyler, etkileşimler, süreçler, araçlar ve DoD","Yalnızca teknik borç ve açık hata sayısı","Yalnızca takım üyelerinin kişisel performansı","Yalnızca paydaşların memnuniyet puanı"]}', '{"index":0}', 'Rehber: Scrum Takımı son Sprint''in **bireyler, etkileşimler, süreçler, araçlar ve Definition of Done** açısından nasıl geçtiğini denetler. Neyin iyi gittiğini, hangi sorunlarla karşılaşıldığını ve bunların nasıl çözüldüğünü ya da çözülmediğini konuşur.', 2, '7. ünite · Sprint Retrospective: neyi denetler, ne üretir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-retro-dod', 'agile', 'ag-u7', 7, 'tf', 'derived', 'Retrospective''te takım, kaliteyi artırmak için Definition of Done''ı güçlendirmeye karar verebilir.', '{}', '{"value":true}', 'Doğru. DoD Retro''nun denetlediği konulardan biridir. Örneğin squad, yayından sonra çıkan erişilebilirlik hataları yüzünden DoD''a "ekran okuyucuyla denendi" maddesini ekleyebilir.', 2, '7. ünite · Sprint Retrospective: neyi denetler, ne üretir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-retro-kim', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Sprint Retrospective''e kimler katılır?', '{"choices":["Bütün Scrum Takımı: PO, Scrum Master ve Developers","Yalnızca Developers","Yalnızca Scrum Master ve Developers; PO katılmaz","Scrum Takımı ve bütün paydaşlar"]}', '{"index":0}', 'Retrospective **bütün Scrum Takımı**nın etkinliğidir; PO da takımın bir üyesi olarak katılır. Paydaşlar Review''a katılır, Retro takımın kendi iç değerlendirmesidir.', 1, '7. ünite · Sprint Retrospective: neyi denetler, ne üretir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-sonraki-sprint', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Rehber''e göre Retro''da belirlenen en etkili iyileştirmeler ne zaman ele alınabilir?', '{"choices":["En kısa sürede; bir sonraki Sprint''in Sprint Backlog''una bile eklenebilir","Yalnızca çeyrek sonundaki büyük değerlendirme toplantısında","Yalnızca Product Owner onları Product Goal''e eklerse","Ancak üç Sprint art arda aynı sorun yeniden ortaya çıkarsa"]}', '{"index":0}', 'Rehber: Scrum Takımı etkinliği artıracak en yararlı değişiklikleri belirler ve en etkili olanlar **mümkün olan en kısa sürede** ele alınır; **bir sonraki Sprint''in Sprint Backlog''una** bile eklenebilir.', 2, '7. ünite · Retro''dan çıkan iyileştirmenin izlenmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-ayni-sorun', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Squad''ın son dört Retro''sunda "test ortamı yavaş" maddesi çıkıyor ama hiçbir şey değişmiyor. En yararlı adım hangisidir?', '{"choices":["Tek, küçük ve ölçülebilir bir iyileştirme seçip sahibiyle Sprint Backlog''a koymak","Retro''ları sorun çözülene kadar yapmamak, zamanı geliştirmeye ayırmak","Aynı maddeyi daha büyük harflerle yazmak","Sorunu bir sonraki çeyreğin bütçe planlamasına kadar görmezden gelmek"]}', '{"index":0}', 'Retro''nun çıktısı bir dilek listesi değil, **uygulanacak bir iyileştirmedir**. Küçük, sahibi belli ve Sprint Backlog''da görünür bir madde (ör. "Kerem test ortamına önbellek ekler, kurulum süresini ölçeriz") döngüyü kapatır.', 2, '7. ünite · Retro''dan çıkan iyileştirmenin izlenmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-smart', 'agile', 'ag-u7', 7, 'tf', 'derived', '"Daha iyi iletişim kuralım" gibi bir Retro maddesi, sahibi ve ölçüsü olmadığı için genellikle hiçbir değişiklik üretmez.', '{}', '{"value":true}', 'Doğru. İyi bir iyileştirme maddesi somut, küçük ve denetlenebilirdir: "Kod incelemesi 24 saatten uzun bekleyen çekme isteklerini Daily''de söyleyeceğiz" gibi. Bir sonraki Retro''da işe yarayıp yaramadığı konuşulur.', 1, '7. ünite · Retro''dan çıkan iyileştirmenin izlenmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-bes-asama', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Esther Derby ve Diana Larsen''in Retro''lar için önerdiği beş aşamanın doğru sırası hangisidir?', '{"choices":["Ortamı hazırla, veri topla, içgörü üret, karar ver, kapat","Karar ver, veri topla, ortamı hazırla, kapat, içgörü üret","Veri topla, karar ver, içgörü üret, ortamı hazırla, kapat","İçgörü üret, ortamı hazırla, karar ver, veri topla, kapat"]}', '{"index":0}', 'Derby ve Larsen''in "Agile Retrospectives" kitabındaki yapı: **ortamı hazırla** (set the stage), **veri topla**, **içgörü üret**, **ne yapacağına karar ver**, **kapat**. Rehber biçim dayatmaz; bu sahada en yaygın kalıptır.', 2, '7. ünite · Retro biçimleri ve kök neden teknikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-bes-neden', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Bir sorunun kök nedenine inmek için art arda "neden?" diye soran teknik hangisidir?', '{"choices":["5 Neden","Planning Poker","MoSCoW","Burndown"]}', '{"index":0}', '**5 Neden** (5 Whys) Toyota''dan gelir: sorunun belirtisinden başlayıp art arda "neden?" sorarak kök nedene inilir. Planning Poker tahmin, MoSCoW önceliklendirme, burndown ilerleme izleme aracıdır.', 1, '7. ünite · Retro biçimleri ve kök neden teknikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-balik-kilcigi', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Bir sorunun olası nedenlerini insanlar, süreç, araç, ortam gibi başlıklar altında gruplayan diyagramın adı nedir?', '{"choices":["Balık kılçığı diyagramı","Kümülatif akış diyagramı","Değer akışı haritası","Hikâye haritası"]}', '{"index":0}', '**Balık kılçığı** (Ishikawa) diyagramı nedenleri başlıklar altında toplar ve Retro''da "içgörü üret" aşamasında kullanılır. CFD akışı, değer akışı haritası beklemeleri, hikâye haritası kapsamı gösterir.', 2, '7. ünite · Retro biçimleri ve kök neden teknikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-guvenlik', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Squad''ın Retro''larında kimse sorun söylemiyor; her şey "iyi" görünüyor ama hatalar sürüyor. Önce neye bakmak gerekir?', '{"choices":["Psikolojik güvenliğe: sorun söyleyen suçlanacağını düşünüyor olabilir","Retro''nun süresini iki katına çıkarmaya","Retro''ya bölüm yöneticisinin de katılıp herkesi dinlemesini sağlamaya","Retro''yu kaldırıp yerine her Sprint sonunda isimli bir anket göndermeye"]}', '{"index":0}', 'Açıklık ve cesaret Scrum değerleridir. Sorun söylenmiyorsa **psikolojik güvenlik** zayıf olabilir. Kolaylaştırıcı, isimsiz veri toplama, "kimse suçlanmaz" ilkesi (Kerth''in temel yönergesi) ve küçük gruplarla başlayabilir.', 2, '7. ünite · Retro biçimleri ve kök neden teknikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-kolay-kim', 'agile', 'ag-u7', 7, 'tf', 'derived', 'Rehber''e göre Scrum etkinliklerini yalnızca Scrum Master kolaylaştırabilir.', '{}', '{"value":false}', 'Yanlış. Rehber Scrum Master''ın etkinliklerin **yapılmasını, olumlu, verimli ve time-box içinde** olmasını sağladığını söyler; kolaylaştırıcının kim olacağını dayatmaz. Birçok takımda kolaylaştırma sırayla döner.', 1, '7. ünite · Etkinlikleri kolaylaştırmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-sessiz', 'agile', 'ag-u7', 7, 'mcq', 'derived', '12 kişilik squad''ın Retro''sunda hep aynı üç kişi konuşuyor. Kolaylaştırıcının en etkili hamlesi hangisidir?', '{"choices":["Önce herkesin sessizce yapışkan nota yazdığı, sonra küçük gruplarda konuşulan bir yapı kurmak","Konuşanlardan daha az konuşmalarını rica edip sırayı yine serbest bırakmak","Retro''yu kısaltıp yalnızca konuşkan üç kişiyle yapmak","Sessiz kalanların fikrini yöneticilerine sormak"]}', '{"index":0}', 'Büyük gruplarda **sessiz yazma** (önce bireysel, sonra paylaşım) ve **1-2-4-hepsi** gibi küçük grup yapıları herkesin sesini duyurur. Kalabalık bir odada serbest konuşma çoğunlukla birkaç kişinin sesine dönüşür.', 2, '7. ünite · Etkinlikleri kolaylaştırmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u7-noktalama', 'agile', 'ag-u7', 7, 'mcq', 'derived', 'Retro''da 20 konu çıktı ve hepsini konuşmaya vakit yok. Hangisini konuşacağınızı seçmek için sık kullanılan yöntem hangisidir?', '{"choices":["Nokta oylaması: herkes birkaç noktayı konulara dağıtır","Konuları alfabetik sıraya koyup ilk üç konuyu almak","Product Owner''ın tek başına seçmesi","En son yazılan konudan başlamak"]}', '{"index":0}', '**Nokta oylaması** (dot voting) takımın enerjisini görünür kılar ve hızlıdır. Seçim takımındır; PO da bir takım üyesi olarak oy verir.', 2, '7. ünite · Etkinlikleri kolaylaştırmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-uc-artefakt', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Rehber''deki üç Scrum artefaktı hangileridir?', '{"choices":["Product Backlog, Sprint Backlog, Increment","Product Backlog, burndown grafiği, Definition of Done","Sprint Goal, Product Goal, Definition of Done","User story, epic, feature"]}', '{"index":0}', 'Üç artefakt: **Product Backlog**, **Sprint Backlog** ve **Increment**. Her birinin bir taahhüdü vardır: Product Goal, Sprint Goal ve Definition of Done. Burndown, user story ve epic Rehber''de geçmez.', 1, '8. ünite · Product Backlog: tek iş kaynağı ve sıralama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-tek-kaynak', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Rehber''e göre Product Backlog nedir?', '{"choices":["Ürün için gerekenlerin ortaya çıkan, sıralı listesi; takımın tek iş kaynağı","Proje başında bir kez yazılıp imzalanan ve dondurulan gereksinim belgesi","Her Developer''ın kendi tuttuğu kişisel yapılacaklar listesi","Yalnızca hataların tutulduğu bir kayıt sistemi"]}', '{"index":0}', 'Product Backlog, ürünü iyileştirmek için gerekenlerin **ortaya çıkan (emergent), sıralı** listesidir ve Scrum Takımı''nın üstlendiği işin **tek kaynağıdır**. Hatalar, iyileştirmeler ve yeni özellikler aynı listede sıralanır.', 2, '8. ünite · Product Backlog: tek iş kaynağı ve sıralama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-iki-backlog', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Squad''da özellikler bir araçta, hatalar başka bir araçta, teknik işler de Tech Lead''in kendi listesinde tutuluyor. Bu durum Rehber''in hangi ilkesiyle çelişir?', '{"choices":["Product Backlog''un takımın tek iş kaynağı olması","Sprint''in bir aydan kısa olması","Daily Scrum''ın 15 dakika sürmesi","Increment''in Sprint içinde yayınlanabilmesi"]}', '{"index":0}', 'Birden çok liste olunca kimse gerçek sırayı göremez ve işler birbiriyle yarışır. Rehber''e göre Product Backlog **tek iş kaynağıdır**; hatalar ve teknik işler de aynı listede PO tarafından sıralanır (teknik borç 11. ünitede).', 3, '8. ünite · Product Backlog: tek iş kaynağı ve sıralama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-pg-tanim', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Product Goal hangi artefaktın taahhüdüdür?', '{"choices":["Product Backlog","Sprint Backlog","Increment","Definition of Done"]}', '{"index":0}', 'Product Goal, **Product Backlog**''un taahhüdüdür. Ürünün gelecekteki durumunu tarif eder ve Scrum Takımı''nın planlaması için bir hedef olur.', 1, '8. ünite · Product Goal', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-pg-tek', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Rehber''e göre Scrum Takımı bir sonrakine geçmeden önce Product Goal''e ne olmalıdır?', '{"choices":["Ya gerçekleştirilmeli ya da bırakılmalı","Mutlaka gerçekleştirilmeli","Yönetim kurulu tarafından onaylanmalı","En az üç Sprint boyunca sürdürülmeli"]}', '{"index":0}', 'Rehber: takım bir seferde **tek bir Product Goal**''e odaklanır ve bir sonrakine geçmeden önce onu **ya gerçekleştirmeli ya da bırakmalıdır** (fulfill or abandon).', 2, '8. ünite · Product Goal', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-pg-ornek', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Squad için hangisi iyi bir Product Goal örneğidir?', '{"choices":["Dönem sonunda öğrencilerin yarısı yemeğini uygulamadan sipariş edip sırasız alsın","Bu Sprint''te sipariş ekranının arayüzünü bitirelim","Kod tabanını ve bütün kütüphaneleri en yeni çatı sürümüne yükseltelim","Her Sprint''te en az 40 puan bitirelim"]}', '{"index":0}', 'Product Goal ürünün **gelecekteki durumunu** ve kullanıcıya sağladığı değeri anlatır ve birkaç Sprint sürebilir. "Bu Sprint''te" bir Sprint Goal''dür; sürüm yükseltme bir iş kalemidir; puan hedefi bir çıktı ölçüsüdür, değer değil.', 2, '8. ünite · Product Goal', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-refinement-tanim', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Rehber''e göre Product Backlog refinement nedir?', '{"choices":["Öğeleri daha küçük ve kesin parçalara bölüp ayrıntı eklemeye devam eden sürekli bir etkinlik","Her Sprint''in başında yapılan zorunlu ve time-box''lı beşinci Scrum etkinliği","Product Owner''ın Sprint Review''dan sonra backlog''u tek başına silmesi","Developers''ın kodu davranışını değiştirmeden yeniden düzenlemesi"]}', '{"index":0}', 'Refinement, öğeleri **daha küçük ve kesin** parçalara bölme ve **açıklama, sıra, büyüklük** gibi ayrıntılar eklemeye devam etme işidir. Rehber''de **ayrı bir etkinlik değildir**; sürekli yapılan bir faaliyettir.', 1, '8. ünite · Backlog refinement ve büyüklük tahmini', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-kim-boyut', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Rehber''e göre Product Backlog öğelerinin büyüklüğünü kim tahmin eder?', '{"choices":["İşi yapacak olan Developers","Product Owner","Scrum Master","Bölüm yöneticisi"]}', '{"index":0}', 'Rehber: işi yapacak olan **Developers büyüklük tahmininden** sorumludur. PO, ödünleşimleri anlamalarına yardım eder ve onları etkileyebilir, ama tahmini yapan işi yapacak olanlardır.', 2, '8. ünite · Backlog refinement ve büyüklük tahmini', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-secime-hazir', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Rehber''e göre bir Sprint içinde Done yapılabilecek kadar netleşmiş Product Backlog öğeleri nasıl adlandırılır?', '{"choices":["Sprint Planning''de seçime hazır","Definition of Ready''den geçmiş","Onaylanmış gereksinim","Dondurulmuş kapsam"]}', '{"index":0}', 'Rehber yalnızca şunu söyler: bir Sprint içinde Done yapılabilecek öğeler Sprint Planning''de genellikle **seçime hazır** sayılır. "Definition of Ready" Rehber''de bir terim olarak geçmez.', 2, '8. ünite · Backlog refinement ve büyüklük tahmini', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-refinement-yuzde', 'agile', 'ag-u8', 8, 'num', 'derived', 'Squad iki haftalık (10 iş günü) Sprint''lerinde kapasitenin %10''unu refinement''a ayırıyor. 12 kişilik squad için bu Sprint başına kaç kişi-saat eder? (günde 8 saat)', '{"blanks":1}', '{"blanks":[["96±0"]]}', '12 kişi × 10 gün × 8 saat = 960 kişi-saat.
---
960 × 0,10 = **96 kişi-saat**. %10, Rehber''in eski sürümlerinde geçen ve sahada hâlâ kullanılan kaba bir üst sınırdır; 2020 Rehberi bir oran vermez.', 2, '8. ünite · Backlog refinement ve büyüklük tahmini', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-sb-ucu', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Rehber''e göre Sprint Backlog neden oluşur?', '{"choices":["Sprint Goal, seçilen öğeler ve Increment''i teslim etmenin uygulanabilir planı","Product Backlog''un tamamı ve Product Goal","Yalnızca seçilen Product Backlog öğeleri","Görevler ve her görevin sahibi olan kişinin adı ile tahmini saati"]}', '{"index":0}', 'Sprint Backlog üç parçadır: **neden** (Sprint Goal), **ne** (seçilen PB öğeleri) ve **nasıl** (Increment''i teslim etmek için uygulanabilir plan).', 1, '8. ünite · Sprint Backlog: neden, ne ve nasıl', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-sb-kimin', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Rehber''e göre Sprint Backlog kim tarafından ve kim için hazırlanır?', '{"choices":["Developers tarafından, Developers için","Product Owner tarafından, paydaşlar için","Scrum Master tarafından, yönetim için","Bütün takım tarafından, müşteri için"]}', '{"index":0}', 'Rehber: Sprint Backlog **Developers tarafından, Developers için** bir plandır. Developers''ın Sprint boyunca yapmayı planladığı işin oldukça görünür, gerçek zamanlı bir resmidir.', 2, '8. ünite · Sprint Backlog: neden, ne ve nasıl', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-sb-guncel', 'agile', 'ag-u8', 8, 'tf', 'derived', 'Sprint Backlog Sprint boyunca daha çok şey öğrenildikçe güncellenir.', '{}', '{"value":true}', 'Doğru. Rehber: Sprint Backlog daha çok şey öğrenildikçe Sprint boyunca güncellenir ve Daily Scrum''da ilerlemeyi denetlemeye yetecek ayrıntıda olmalıdır.', 1, '8. ünite · Sprint Backlog: neden, ne ve nasıl', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-sg-tanim', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Sprint Goal hangi artefaktın taahhüdüdür?', '{"choices":["Sprint Backlog","Product Backlog","Increment","Product Goal"]}', '{"index":0}', 'Sprint Goal, **Sprint Backlog**''un taahhüdüdür: Sprint''in tek hedefidir. Developers''a odak ve esneklik verir; iş beklenenden farklı çıkarsa kapsam PO ile yeniden görüşülür ama Sprint Goal korunur.', 1, '8. ünite · Sprint Goal ve kapsamın yeniden görüşülmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-sg-esneklik', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Sprint''in ortasında squad, "sipariş geçmişi" öğesinin tahmin edilenden çok daha büyük olduğunu anladı. Sprint Goal "öğrenciler siparişini telefondan verebilsin". Rehber''e uygun davranış hangisidir?', '{"choices":["Developers PO ile Sprint Backlog''un kapsamını yeniden görüşür; Sprint Goal korunur","Sprint Goal \"sipariş geçmişini bitirelim\" olarak değiştirilir","Takım fazla mesaiyle ve testleri kısaltarak bütün öğeleri yetiştirir","Sprint hemen iptal edilir ve yeniden planlanır"]}', '{"index":0}', 'Rehber: iş beklenenden farklı çıkarsa Developers, Sprint Goal''ü etkilemeden Sprint Backlog''un kapsamını **Product Owner ile yeniden görüşür**. Sipariş geçmişi hedef için şart değilse sonraki Sprint''e kalabilir. Kaliteyi düşürmek ya da iptal etmek gerekmez.', 3, '8. ünite · Sprint Goal ve kapsamın yeniden görüşülmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-sg-ornek', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Hangisi iyi bir Sprint Goal''dür?', '{"choices":["Öğrenciler menüdeki alerjen bilgisini görüp alerjenli yemekleri filtreleyebilsin","US-41, US-42, US-47 ve US-52 numaralı hikâyeleri bitirmek","Herkes Sprint boyunca tam kapasiteyle çalışsın","Bu Sprint''te yeni veritabanına geçiş yapılacak, ayrıntılar belli değil"]}', '{"index":0}', 'İyi bir Sprint Goal **tek, uyumlu bir amaçtır** ve kullanıcıya etkisini anlatır. Hikâye numaraları listesi bir amaç değildir ve esneklik bırakmaz; kapasite hedefi değer anlatmaz.', 2, '8. ünite · Sprint Goal ve kapsamın yeniden görüşülmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-inc-tanim', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Rehber''e göre Increment nedir?', '{"choices":["Product Goal''e somut bir basamak; öncekilere eklenir ve birlikte çalıştığı doğrulanır","Sprint boyunca yazılan bütün kodun, bitmiş olsun olmasın, depodaki toplamı","Sprint sonunda paydaşlara gösterilen slayt sunumu","Takımın Sprint''te bitirdiği puanların toplamı"]}', '{"index":0}', 'Increment, **Product Goal''e doğru somut bir basamaktır**. Her Increment öncekilere eklenir ve hepsinin birlikte çalıştığından emin olmak için **doğrulanır**. Değer sağlamak için kullanılabilir olmalıdır.', 1, '8. ünite · Increment: birikimli, doğrulanmış ve Sprint içinde yayınlanabilir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-coklu-inc', 'agile', 'ag-u8', 8, 'tf', 'derived', 'Rehber''e göre bir Sprint içinde birden çok Increment oluşturulabilir ve bunlar Sprint bitmeden paydaşlara teslim edilebilir.', '{}', '{"value":true}', 'Doğru. Rehber: bir Sprint''te birden çok Increment yaratılabilir; Review''da hepsi birlikte sunulur ama **Sprint bitmeden önce de teslim edilebilir**. Sürekli teslim yapan takımlar günde birkaç kez yayın yapar.', 2, '8. ünite · Increment: birikimli, doğrulanmış ve Sprint içinde yayınlanabilir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-yuzde-90', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Sprint sonunda bir öğe için "kod bitti, sadece test kaldı" deniyor. Rehber''e göre bu öğe Sprint Review''da nasıl ele alınır?', '{"choices":["Increment''in parçası sayılmaz, sunulamaz ve Product Backlog''a döner","Yüzde 90 bitmiş olarak sunulur ve puanın yüzde 90''ı sayılır","Increment''in parçası sayılır, test bir sonraki Sprint''te yapılır","Product Owner isterse Done kabul edebilir"]}', '{"index":0}', 'Rehber: bir öğe **ancak DoD''u karşıladığında** Increment''in parçası olur. Karşılamayan iş Review''da sunulamaz ve **Product Backlog''a döner**; ileride yeniden ele alınır.', 2, '8. ünite · Increment: birikimli, doğrulanmış ve Sprint içinde yayınlanabilir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-dod-tanim', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Definition of Done hangi artefaktın taahhüdüdür?', '{"choices":["Increment","Product Backlog","Sprint Backlog","Sprint Goal"]}', '{"index":0}', 'Definition of Done, **Increment**''in taahhüdüdür: Increment''in ürün için gereken kalite ölçülerini karşıladığı durumun resmi tarifidir.', 1, '8. ünite · Definition of Done', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-dod-seffaflik', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Definition of Done''ın en önemli katkısı hangisidir?', '{"choices":["İşin ne zaman bittiği konusunda herkese ortak bir anlayış ve şeffaflık sağlaması","Developers''ın her öğe için ne kadar saat harcayacağını önceden belirlemesi","Product Owner''ın öğeleri sıralamasını kolaylaştırması","Sprint''lerin uzunluğunu belirlemesi"]}', '{"index":0}', 'Rehber: DoD, iş tamamlandığında herkese **ortak bir anlayış** vererek **şeffaflık** yaratır. "Bitti" sözcüğünün herkes için aynı anlama gelmesini sağlar.', 2, '8. ünite · Definition of Done', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-dod-madde', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Aşağıdakilerden hangisi tipik bir Definition of Done maddesi **değildir**?', '{"choices":["Product Owner bu öğeyi Product Backlog''da ilk sıraya koydu","Kod incelemesinden geçti","Otomatik testler yazıldı ve hepsi geçiyor","Test ortamına kuruldu ve erişilebilirlik denetimi yapıldı"]}', '{"index":0}', 'DoD **kaliteyle** ilgilidir: inceleme, test, kurulum, belgeleme, erişilebilirlik. Bir öğenin sıradaki yeri DoD''un konusu değildir; sıralama PO''nun kararıdır ve öğe başına değişir.', 2, '8. ünite · Definition of Done', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-kabul-dod', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Kabul ölçütleri ile Definition of Done arasındaki fark nedir?', '{"choices":["Kabul ölçütleri öğeye özeldir; DoD bütün öğeler için ortak kalite çıtasıdır","İkisi aynı şeydir; farklı takımlar farklı ad kullanır","DoD öğeye özeldir; kabul ölçütleri bütün öğeler için ortaktır","Kabul ölçütleri Rehber''de tanımlıdır; DoD yalnızca sahada kullanılır"]}', '{"index":0}', '**Kabul ölçütleri** tek bir öğenin ne yapması gerektiğini söyler ("alerjenli yemek filtrelenince listeden çıkar"). **DoD** her öğe için geçerli ortak kalite çıtasıdır ("test edildi, incelendi, kuruldu"). Kabul ölçütleri Rehber''de geçmez; 2. pratikte (User Story) ayrıntılı ele alınır.', 3, '8. ünite · Definition of Done', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-org-standart', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Organizasyonun bir Definition of Done standardı varsa Rehber''e göre takım ne yapar?', '{"choices":["Bu standardı en az olarak izler; üstüne ürüne uygun maddeler ekleyebilir","Kendi DoD''unu yazar ve organizasyon standardını yok sayar","Organizasyon standardından istediği maddeleri çıkarabilir","DoD yazmaz; organizasyon her Sprint''te ona DoD verir"]}', '{"index":0}', 'Rehber: Increment''e ilişkin DoD organizasyonun standartlarının parçasıysa bütün Scrum Takımları onu **en az olarak** izler. Yoksa Scrum Takımı ürüne uygun bir DoD **oluşturmalıdır**.', 2, '8. ünite · Organizasyon standardı ve birden çok takımda DoD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-tek-dod', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Squad "Sipariş" ve "Menü" diye iki takıma bölündü; ikisi aynı ürün üzerinde çalışıyor. Rehber''e göre Definition of Done ne olmalıdır?', '{"choices":["İki takım ortak bir Definition of Done''ı birlikte tanımlayıp izler","Her takım birbirinden bağımsız kendi DoD''unu yazar","DoD''u yalnızca Product Owner yazar ve takımlara verir","Bölünen takımlarda DoD''a gerek kalmaz"]}', '{"index":0}', 'Rehber: aynı ürün üzerinde birden çok Scrum Takımı çalışıyorsa **ortak bir Definition of Done''ı birlikte tanımlayıp izlemelidir**. Aksi halde bir takımın "bitti" dediği iş, öteki takımın işiyle birleşince bozulabilir.', 3, '8. ünite · Organizasyon standardı ve birden çok takımda DoD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-dor-rehber', 'agile', 'ag-u8', 8, 'tf', 'derived', 'Definition of Ready (DoR), 2020 Scrum Rehberi''nde tanımlanmış bir taahhüttür.', '{}', '{"value":false}', 'Yanlış. Rehber''de üç taahhüt vardır: Product Goal, Sprint Goal ve Definition of Done. **DoR Rehber''de geçmez**; Rehber yalnızca Done yapılabilecek öğelerin "seçime hazır" sayıldığını söyler. DoR sahada yaygın bir eklentidir.', 1, '8. ünite · Definition of Ready ve öteki Rehber dışı eklentiler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-dor-risk', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Squad katı bir Definition of Ready uyguluyor: tasarım, bütün kabul ölçütleri ve onay tamamlanmadan hiçbir öğe Sprint''e alınmıyor. Bu yaklaşımın en büyük riski nedir?', '{"choices":["Ön aşama kapısı yaratıp Sprint''i küçük bir waterfall''a çevirmesi","Öğelerin fazla küçük kalması ve sayılarının artması","Daily Scrum''ların çok kısa sürmesi ve konuşacak konu kalmaması","Product Owner''ın backlog''u sıralayamaması"]}', '{"index":0}', 'DoR bir **kontrol listesi** olarak yardımcı olabilir; ama katı bir kapıya dönüşürse analiz ve tasarım Sprint''in dışına taşınır, iş birliği Sprint içinde değil önceden "teslim" ile yapılır. Bu, Manifesto''nun iş birliği ve değişime açıklık değerlerine ters düşen bir **ön aşama** yaratır.', 3, '8. ünite · Definition of Ready ve öteki Rehber dışı eklentiler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u8-rehber-disi', 'agile', 'ag-u8', 8, 'mcq', 'derived', 'Aşağıdakilerden hangisi 2020 Scrum Rehberi''nde **tanımlanmış** bir öğedir?', '{"choices":["Definition of Done","Definition of Ready","Story point","Burndown grafiği"]}', '{"index":0}', '**Definition of Done** Rehber''de Increment''in taahhüdüdür. DoR, story point ve burndown sahada yaygındır ama Rehber''de geçmez (4. ünitedeki "Rehber''de var mı?" alıştırması).', 2, '8. ünite · Definition of Ready ve öteki Rehber dışı eklentiler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-burndown-tanim', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Sprint burndown grafiği neyi gösterir?', '{"choices":["Sprint''te kalan işin günden güne nasıl azaldığını","Takımın her Sprint''te bitirdiği toplam puanı","Her geliştiricinin günlük çalışma saatini","Product Backlog''a eklenen öğelerin sayısını"]}', '{"index":0}', 'Sprint burndown, Sprint Backlog''da **kalan işi** (puan, saat ya da öğe sayısı) günlere göre çizer. Kesikli ideal çizgiyle karşılaştırılarak Sprint Goal''e ilerleme görünür kılınır. Takımın Sprint başına bitirdiği iş velocity''dir.', 1, '9. ünite · Burndown grafiği ve okunması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-rehberde', 'agile', 'ag-u9', 9, 'tf', 'derived', '2020 Scrum Rehberi her takımın burndown grafiği tutmasını zorunlu kılar.', '{}', '{"value":false}', 'Yanlış. Burndown eski Rehber''lerde geçiyordu, 2011''de zorunlu olmaktan çıktı ve 2020 Rehberi''nde hiç geçmez. Rehber yalnızca ilerlemenin denetlenmesini ister; burndown, burnup ve CFD bunun için yaygın araçlardır.', 1, '9. ünite · Burndown grafiği ve okunması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-ucurum', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Squad''ın burndown çizgisi Sprint''in ilk sekiz gününde neredeyse düz kalıyor, son iki günde birden sıfıra iniyor. En olası açıklama hangisidir?', '{"choices":["Öğeler büyük ve paralel yürüyor; hiçbiri sona kadar bitmiyor","Takım Sprint''in başında fazla hızlı çalışıp sonra yorulmuş","Product Owner Sprint ortasında Sprint Backlog''a kapsam eklemiş","Takım her gün kalan işi eksiksiz ve doğru biçimde güncellemiş"]}', '{"index":0}', '"Uçurum" deseni, işin **sona kadar bitmediğini** gösterir: öğeler büyüktür ya da herkes her işe aynı anda başlamıştır (WIP yüksek). Öğeleri küçültmek ve WIP''i sınırlamak çizgiyi ideal düşüşe yaklaştırır. Ayrıca son gün "bitti" denen işin gerçekten DoD''u karşılayıp karşılamadığına bakılmalıdır.', 2, '9. ünite · Burndown grafiği ve okunması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-yukari', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Burndown çizgisi Sprint''in ortasında yukarı çıkıyor. Bu en çok neyi gösterir?', '{"choices":["Sprint Backlog''a iş eklendi ya da bir öğe büyük çıktı","Takım o gün beklenenden çok daha fazla iş bitirdi","Sprint süresi Product Owner tarafından kısaltıldı","Definition of Done Sprint ortasında gevşetildi"]}', '{"index":0}', 'Kalan iş arttıysa ya Sprint Backlog''a yeni iş girmiştir ya da Developers bir öğenin daha büyük olduğunu öğrenmiştir. İkincisi doğaldır (Sprint Backlog öğrenildikçe güncellenir); birincisi sık oluyorsa Sprint Goal''ün korunup korunmadığına bakılır.', 2, '9. ünite · Burndown grafiği ve okunması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-duz', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Burndown çizgisi beş gündür hiç değişmiyor ama takım yoğun çalıştığını söylüyor. Önce neye bakmak gerekir?', '{"choices":["Grafiğin güncellenip güncellenmediğine ve takılan işlere","Takımın her gün fazla mesaiye kalıp kalmadığına","Product Owner''ın Product Backlog''u yeniden sıralamasına","Sprint''in hemen iptal edilip yeniden planlanmasına"]}', '{"index":0}', 'Düz çizgi ya şeffaflık sorunudur (pano güncellenmiyor) ya da bütün işler bir yerde bekliyordur (inceleme, test ortamı, dış onay). Önce gerçeği görünür kılmak gerekir; empirizmin ilk sütunu şeffaflıktır.', 2, '9. ünite · Burndown grafiği ve okunması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-burnup-fark', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Burnup grafiğinin burndown''a göre en önemli üstünlüğü nedir?', '{"choices":["Biten işi ve toplam kapsamı ayrı çizgilerde gösterir; kapsam değişimi görünür","Yalnızca biten işi gösterdiği için daha sade ve okunaklıdır","Takım üyelerinin bireysel katkısını ayrı ayrı çizgilerle gösterir","Sprint''in kaç gün süreceğini geçmiş veriden kendiliğinden hesaplar"]}', '{"index":0}', 'Burnup''ta bir çizgi **biten işi**, öteki **toplam kapsamı** gösterir. Burndown''da kapsam artınca çizgi "takım yavaşladı" gibi görünebilir; burnup''ta bunun kapsam artışı olduğu açıkça görülür. Sürüm ve Product Goal takibinde bu yüzden sık kullanılır.', 2, '9. ünite · Burnup grafiği ve kapsam değişikliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-burnup-kapsam', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Squad''ın sürüm burnup''ında biten iş çizgisi düzenli yükseliyor ama toplam kapsam çizgisi de aynı hızla yükseliyor. Bu ne anlama gelir?', '{"choices":["Takım ilerliyor ama kapsam aynı hızda büyüdüğü için hedef yaklaşmıyor","Takım hiç iş bitirmiyor","Product Backlog küçülüyor ve sürüm yakında biter","Grafik yanlış çizilmiş; iki çizgi hiçbir zaman birlikte yükselmez"]}', '{"index":0}', 'İki çizgi arasındaki mesafe kalan iştir. Mesafe kapanmıyorsa sorun hız değil **kapsam büyümesidir**. PO ile Product Goal ve sürüm kapsamı yeniden konuşulmalıdır.', 2, '9. ünite · Burnup grafiği ve kapsam değişikliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-kalan-burnup', 'agile', 'ag-u9', 9, 'num', 'derived', 'Burnup grafiğinde toplam kapsam 120 puan, biten iş 75 puan. Takımın son Sprint''lerdeki hızı Sprint başına yaklaşık 15 puansa ve kapsam değişmezse kaç Sprint daha gerekir?', '{"blanks":1}', '{"blanks":[["3±0"]]}', 'Kalan: 120 − 75 = 45 puan.
---
45 / 15 = **3 Sprint**. Bu tek sayılık bir tahmindir; gerçekte hız değişir, bu yüzden aralıkla vermek daha dürüsttür (Monte Carlo).', 2, '9. ünite · Burnup grafiği ve kapsam değişikliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-velocity-tanim', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Velocity nedir?', '{"choices":["Bir takımın bir Sprint''te Done yaptığı işin miktarı, genellikle puan olarak","Bir geliştiricinin bir günde yazdığı ortalama kod satırı sayısı","Product Backlog''daki bütün öğelerin toplam puanı","Bir öğenin başlangıçtan bitişe kadar geçen süresi"]}', '{"index":0}', 'Velocity, takımın Sprint başına **Done** yaptığı iştir (çoğunlukla story point). Yalnızca Done işler sayılır; yarım iş velocity''ye girmez. Bir öğenin süresi cycle time''dır.', 1, '9. ünite · Velocity: ne ölçer, nasıl kullanılır', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-velocity-hesap', 'agile', 'ag-u9', 9, 'num', 'derived', 'Squad''ın son dört Sprint''teki velocity''si 32, 40, 36 ve 36 puan. Ortalama velocity kaçtır?', '{"blanks":1}', '{"blanks":[["36±0"]]}', '(32 + 40 + 36 + 36) / 4 = 144 / 4 = **36** puan.', 1, '9. ünite · Velocity: ne ölçer, nasıl kullanılır', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-velocity-aralik', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Aynı verilerle (32, 40, 36, 36) bir sonraki Sprint için en dürüst tahmin hangisidir?', '{"choices":["Büyük olasılıkla 32 ile 40 puan arası","Tam olarak 36 puan","En az 40 puan, çünkü takım öğreniyor","Tahmin yapılamaz, velocity yalnızca geçmişi gösterir"]}', '{"index":0}', 'Velocity dalgalanır; tek bir ortalama sayı kesinlik izlenimi verir. **Aralık** vermek (gözlenen en düşük ve en yüksek, ya da yüzdelikler) belirsizliği dürüstçe gösterir. Geçmiş hız, kararlı bir takımda yakın gelecek için iyi bir ipucudur.', 2, '9. ünite · Velocity: ne ölçer, nasıl kullanılır', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-yarim-is', 'agile', 'ag-u9', 9, 'tf', 'derived', 'Sprint sonunda yüzde 80''i biten 8 puanlık bir öğe velocity''ye hiç sayılmaz.', '{}', '{"value":true}', 'Doğru. Velocity yalnızca DoD''u karşılayan işi sayar. Yarım öğe Product Backlog''a döner ve bittiği Sprint''te bütün puanıyla sayılır; "6,4 puan" diye kısmi sayım yapılmaz.', 1, '9. ünite · Velocity: ne ölçer, nasıl kullanılır', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-karsilastirma', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Bölüm yöneticisi iki squad''ı velocity''lerine göre karşılaştırıp "A takımı 60, B takımı 30 puan yapıyor, B yavaş" diyor. Bu karşılaştırmanın temel sorunu nedir?', '{"choices":["Story point her takımın kendi göreli ölçeğidir; karşılaştırılamaz","B takımındaki kişiler her zaman daha az saat çalışıyordur","Velocity yalnızca Product Owner''ın görebileceği gizli bir bilgidir","Karşılaştırma doğrudur ama Sprint uzunlukları da eşit olmalıdır"]}', '{"index":0}', 'Story point **göreli** bir ölçüdür: A takımının 5 puanı B takımının 2 puanına denk olabilir. Velocity bir takımın kendi planlaması için bir araçtır; takımlar arası karşılaştırma ve performans ölçüsü olarak kullanılamaz.', 2, '9. ünite · Velocity tuzakları: hedef, karşılaştırma, şişirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-sisirme', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Yönetim squad''a "velocity''nizi her Sprint yüzde 10 artırın" hedefi verdi. Üç Sprint sonra velocity arttı ama teslim edilen özellik sayısı değişmedi. En olası neden nedir?', '{"choices":["Takım tahminlerini şişirdi; aynı iş artık daha çok puan alıyor","Takım üç Sprint içinde gerçekten yüzde 30 hızlandı","Product Owner backlog''u yanlış ve tutarsız biçimde sıraladı","Sprint''ler kısaldığı için puanlar daha sık sayılmaya başladı"]}', '{"index":0}', 'Puanı takımın kendisi verdiği için hedeflenen velocity kolayca **şişer** (puan enflasyonu). Ölçü hedef olunca bozulur: Goodhart yasasının tipik örneğidir. Değer, ölçülmek istenen asıl şeydir.', 2, '9. ünite · Velocity tuzakları: hedef, karşılaştırma, şişirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-velocity-kapasite', 'agile', 'ag-u9', 9, 'tf', 'derived', 'Velocity bir taahhüttür: takım geçen Sprint 36 puan yaptıysa bu Sprint de en az 36 puan bitirmek zorundadır.', '{}', '{"value":false}', 'Yanlış. Velocity bir **planlama ipucudur**, taahhüt değildir. Rehber''deki taahhüt Sprint Goal''dür. Tatiller, hastalıklar ve belirsizlik velocity''yi değiştirir; Developers ne kadar iş alacağını bunları düşünerek seçer.', 2, '9. ünite · Velocity tuzakları: hedef, karşılaştırma, şişirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-cycle-time', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Kanban Rehberi''ne göre cycle time nedir?', '{"choices":["Bir iş öğesinin başladığı an ile bittiği an arasında geçen süre","Bir isteğin ilk yazıldığı andan müşteriye teslimine kadar geçen süre","Bir Sprint''in uzunluğu","Takımın bir günde bitirdiği öğe sayısı"]}', '{"index":0}', 'Kanban Rehberi cycle time''ı bir iş öğesinin **başlaması ile bitmesi** arasında geçen süre diye tanımlar. İsteğin yazılmasından teslimine kadar geçen daha uzun süreye sahada genellikle **lead time** denir.', 1, '9. ünite · Throughput, cycle time, lead time ve iş öğesi yaşı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-throughput', 'agile', 'ag-u9', 9, 'fill', 'derived', 'Belirli bir zaman diliminde biten iş öğesi sayısına ne denir?', '{"blanks":1}', '{"blanks":[["throughput","verim","çıktı hızı","akış hızı"]]}', '**Throughput** (verim), birim zamanda biten öğe sayısıdır: "haftada 9 öğe" gibi. Puan değil öğe sayar; bu yüzden tahmin tartışmasına girmeden ölçülebilir.', 1, '9. ünite · Throughput, cycle time, lead time ve iş öğesi yaşı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-yas', 'agile', 'ag-u9', 9, 'mcq', 'derived', '"İş öğesi yaşı" (work item age) neden faydalıdır?', '{"choices":["Bitmemiş işin ne kadar süredir sürdüğünü gösterip takılanı yakalatır","Bitmiş işlerin ortalama süresini haftalık olarak gösterir","Bir öğenin Product Backlog''da ne kadar beklediğini gösterir","Takım üyelerinin kıdemini ve deneyimini yıl olarak ölçer"]}', '{"index":0}', 'Cycle time ancak iş bitince ölçülür; **yaş** ise devam eden işe bakar. Yaşı takımın genelde gördüğü süreyi aşan bir kart, bitmeden önce fark edilir ve Daily''de konuşulur.', 2, '9. ünite · Throughput, cycle time, lead time ve iş öğesi yaşı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-little-akis', 'agile', 'ag-u9', 9, 'num', 'derived', 'Squad''ın panosunda ortalama 18 öğe devam ediyor ve squad günde ortalama 3 öğe bitiriyor. Little yasasına göre ortalama cycle time kaç gündür?', '{"blanks":1}', '{"blanks":[["6±0"]]}', 'Cycle time = WIP / throughput = 18 / 3 = **6 gün** (3. ünite). WIP 9''a inerse ve throughput aynı kalırsa cycle time 3 güne iner.', 2, '9. ünite · Throughput, cycle time, lead time ve iş öğesi yaşı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-cfd-tanim', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Kümülatif akış diyagramında (CFD) iki komşu çizgi arasındaki dikey uzaklık neyi gösterir?', '{"choices":["O gün o aşamada bulunan iş sayısını","O aşamadaki işlerin ortalama süresini","Takımın o günkü velocity''sini","Product Owner''ın o gün eklediği öğe sayısını"]}', '{"index":0}', 'CFD''de her bant bir aşamadır (Geliştirme, Test...). Bir gün için **dikey kalınlık o aşamadaki iş sayısını** (WIP), yatay uzaklık ise işin o aşamalardan geçmesi için geçen yaklaşık süreyi gösterir.', 2, '9. ünite · Kümülatif akış diyagramı (CFD)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-cfd-bant', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Squad''ın CFD''sinde "Test" bandı haftalar içinde sürekli kalınlaşıyor, "Bitti" bandı ise yavaş yükseliyor. Bu neyi gösterir?', '{"choices":["Test bir darboğaz; iş orada birikiyor","Test aşaması gereğinden hızlı çalışıyor","Takım çok az işe başlıyor","Sprint''ler fazla kısa"]}', '{"index":0}', 'Kalınlaşan bant, o aşamaya girenin çıkandan fazla olduğunu, yani işin **biriktiğini** gösterir. Darboğaz testtedir; geliştiricilerin test otomasyonuna yardım etmesi ve yeni işe başlamayı durdurmak (WIP sınırı) akışı düzeltir.', 2, '9. ünite · Kümülatif akış diyagramı (CFD)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-cfd-duz', 'agile', 'ag-u9', 9, 'tf', 'derived', 'Kararlı bir akışta CFD''nin bantları kabaca paralel yükselir.', '{}', '{"value":true}', 'Doğru. Giren ve çıkan iş dengedeyse her aşamanın kalınlığı sabit kalır ve bantlar paralel gider. Genişleyen bant birikmeyi, daralan bant aşamanın aç kaldığını gösterir.', 2, '9. ünite · Kümülatif akış diyagramı (CFD)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-goodhart', 'agile', 'ag-u9', 9, 'mcq', 'derived', '"Bir ölçü hedefe dönüşünce iyi bir ölçü olmaktan çıkar" düşüncesi hangi adla bilinir?', '{"choices":["Goodhart yasası","Little yasası","Parkinson yasası","Conway yasası"]}', '{"index":0}', '**Goodhart yasası** (Marilyn Strathern''in yaygınlaşan ifadesiyle): ölçü hedef olunca insanlar ölçüyü yükseltmenin yolunu bulur, ölçünün temsil ettiği asıl şeyi değil. Little yasası WIP ile süre ilişkisi, Parkinson "iş verilen süreyi doldurur", Conway sistemlerin organizasyon yapısını yansıttığıdır.', 1, '9. ünite · Goodhart yasası ve ölçüt tuzakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-hata-sayisi', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Yönetim QA ekibini "bulunan hata sayısı"na göre ödüllendirmeye başladı. Bunun olası yan etkisi hangisidir?', '{"choices":["Hatalar parçalara bölünerek sayı şişer; geliştiricilerle QA arasında gerilim artar","Ürünün kalitesi kendiliğinden ve kalıcı olarak artar","Hata sayısı azalır çünkü herkes kod yazarken daha dikkatli olur","Hiçbir etkisi olmaz; ölçüler insanların davranışını değiştirmez"]}', '{"index":0}', 'Ödüllendirilen ölçü davranışı biçimlendirir: aynı hata birkaç kayda bölünür, kalite birlikte üretilen bir şey olmaktan çıkar. Çapraz işlevli takımda kalite **bütün takımın** işidir.', 2, '9. ünite · Goodhart yasası ve ölçüt tuzakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-iyi-olcut', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Squad, ölçütlerin kötüye kullanılmasını önlemek için ne yapabilir?', '{"choices":["Ölçütleri takımın öğrenmesi için kullanmak, dengeleyen ölçülere bakmak","Tek bir ölçü seçip ona her Sprint artan bir hedef koymak ve izlemek","Hiçbir şey ölçmemek; çünkü ölçüm her durumda kötüye kullanılır","Ölçütleri yalnızca yönetime göstermek, takımdan tamamen saklamak"]}', '{"index":0}', 'İyi uygulama: ölçütleri **takımın denetim ve uyarlaması** için kullanmak, tek ölçüye hedef koymamak ve birbirini dengeleyen ölçülere (ör. throughput ile hata oranı ve cycle time) birlikte bakmak.', 2, '9. ünite · Goodhart yasası ve ölçüt tuzakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-mc-tanim', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Monte Carlo tahmininde "40 öğe ne zaman biter?" sorusu nasıl cevaplanır?', '{"choices":["Geçmiş günlük throughput''tan örnekler çekilip binlerce gelecek denenir","Takımın her üyesine tahmin sorulur ve cevapların ortalaması alınır","Toplam puan ortalama velocity''ye bölünür ve tek bir tarih verilir","Product Owner bir tarih belirler ve takım ona göre çalışır"]}', '{"index":0}', 'Monte Carlo, takımın **geçmiş verisinden** (ör. son 30 günün günlük throughput''u) rastgele seçerek binlerce senaryo üretir. Sonuç tek tarih değil bir dağılımdır: "%50 olasılıkla 12 günde, %85 olasılıkla 15 günde".', 2, '9. ünite · Tahmin aralıkları ve Monte Carlo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-yuzde-85', 'agile', 'ag-u9', 9, 'mcq', 'derived', 'Simülasyon "%85 olasılıkla 15 gün ya da daha kısa" sonucunu verdi. Bu ne demektir?', '{"choices":["Denenen senaryoların %85''inde iş 15 günde ya da daha kısa sürede bitti","İş kesinlikle 15. günde biter","İşin %85''i 15 günde biter, kalan %15''i daha sonra","Takım 15 gün boyunca kapasitesinin %85''iyle çalışmalıdır"]}', '{"index":0}', 'Yüzdelik, olasılık demektir: senaryoların %85''i bu süreyi aşmadı. Daha yüksek güven istenirse (%95) daha uzun bir süre söylenir. Kesinlik değil, riskin dürüst bir ifadesidir.', 2, '9. ünite · Tahmin aralıkları ve Monte Carlo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u9-mc-ortalama', 'agile', 'ag-u9', 9, 'num', 'derived', 'Squad son 5 günde sırasıyla 2, 0, 3, 1, 4 öğe bitirdi. Günlük ortalama throughput kaçtır?', '{"blanks":1}', '{"blanks":[["2±0"]]}', '(2 + 0 + 3 + 1 + 4) / 5 = 10 / 5 = **2 öğe/gün**. Monte Carlo bu ortalamayı değil günlerin kendisini örnekler; böylece 0 ve 4 gibi dalgalanmalar da sonuca yansır.', 1, '9. ünite · Tahmin aralıkları ve Monte Carlo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-kanban-tanim', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Kanban Rehberi Kanban''ı nasıl tanımlar?', '{"choices":["Görsel ve çekmeye dayalı bir sistemle değer akışını en iyileme stratejisi","Rolleri, etkinlikleri ve artefaktları olan sabit süreli bir çerçeve","Yalnızca yapılacaklar, yapılıyor ve bitti sütunlarından oluşan bir pano","Waterfall projelerinde ilerleme raporlama yöntemi"]}', '{"index":0}', 'Kanban Rehberi (2020): Kanban, **görsel, çekmeye dayalı** bir sistem kullanarak bir süreçteki **değer akışını en iyileme stratejisidir**. Pano bir araçtır, Kanban''ın kendisi değildir.', 1, '10. ünite · Kanban Rehberi: tanım ve üç pratik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-uc-pratik', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Aşağıdakilerden hangisi Kanban Rehberi''ndeki üç pratikten biri **değildir**?', '{"choices":["İki haftalık iterasyonlarla planlama yapmak","İş akışını tanımlamak ve görselleştirmek","İş akışındaki öğeleri aktif olarak yönetmek","İş akışını iyileştirmek"]}', '{"index":0}', 'Kanban''ın üç pratiği: **iş akışını tanımlamak ve görselleştirmek**, **akıştaki öğeleri aktif olarak yönetmek** ve **iş akışını iyileştirmek**. Kanban sabit süreli iterasyon dayatmaz.', 2, '10. ünite · Kanban Rehberi: tanım ve üç pratik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-rol-yok', 'agile', 'ag-u10', 10, 'tf', 'derived', 'Kanban Rehberi Scrum''daki gibi Product Owner ya da Scrum Master hesap verebilirlikleri tanımlamaz.', '{}', '{"value":true}', 'Doğru. Kanban mevcut rollerle ve süreçle başlar; yeni rol ya da etkinlik zorunlu kılmaz. Değişimi akışı görünür kılarak ve adım adım iyileştirerek yapar.', 1, '10. ünite · Kanban Rehberi: tanım ve üç pratik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-kanban-koken', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Yazılımdaki Kanban yönteminin adı ve fikri nereden gelir?', '{"choices":["Toyota Üretim Sistemi''nde çekmeyi sağlayan görsel kartlardan","Scrum Rehberi''nin 2020 sürümünde eklenen bir bölümden","Extreme Programming''in planlama oyunundaki kartlardan","Proje yönetimindeki Gantt şemalarının sadeleşmiş biçiminden"]}', '{"index":0}', '"Kanban" Japoncada görsel kart ya da işaret demektir. Toyota''da bir parça kullanılınca kartı önceki istasyona döner ve yalnızca o kadar üretilir (3. ünite). Yazılımdaki yöntem bu çekme fikrini iş akışına taşır.', 1, '10. ünite · Kanban Rehberi: tanım ve üç pratik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-dow-icerik', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Kanban Rehberi''ne göre iş akışının tanımı (Definition of Workflow) neleri içerir?', '{"choices":["İş öğesi, başlama ve bitme anı, aşamalar, WIP kontrolü, açık kurallar ve SLE","Takımdaki kişilerin unvanları, sorumlulukları ve maaş dereceleri","Yalnızca panodaki sütunların adları ve renkleri","Sprint uzunluğu ve etkinliklerin time-box''ları"]}', '{"index":0}', 'Rehber''e göre iş akışının tanımı: **değer birimi (iş öğesi)**, işin **ne zaman başladığı ve bittiği**, bir ya da daha çok **aşama**, **WIP''in nasıl kontrol edileceği**, **açık kurallar** ve bir **hizmet düzeyi beklentisi** (SLE).', 2, '10. ünite · İş akışının tanımı (Definition of Workflow) ve SLE', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-sle', 'agile', 'ag-u10', 10, 'fill', 'derived', '"Öğelerin %85''i başladıktan sonra 8 gün içinde biter" cümlesi Kanban''da neyin örneğidir?', '{"blanks":1}', '{"blanks":[["SLE","hizmet düzeyi beklentisi","service level expectation","hizmet seviyesi beklentisi"]]}', '**Hizmet düzeyi beklentisi** (SLE), tek bir öğenin akıştan ne kadar sürede geçeceğinin tahminidir ve iki parçadır: bir **süre** ve bir **olasılık**. Genellikle geçmiş cycle time''lardan çıkarılır.', 2, '10. ünite · İş akışının tanımı (Definition of Workflow) ve SLE', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-acik-kural', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Squad panosundaki "Test" sütununun üstüne şu yazıldı: "Buraya yalnızca kod incelemesinden geçmiş ve test ortamına kurulmuş işler girer." Bu, Kanban''da neyin örneğidir?', '{"choices":["Açık kural","Servis sınıfı","Hizmet düzeyi beklentisi","Definition of Ready"]}', '{"index":0}', '**Açık kurallar**, işin akışta nasıl ilerleyeceğini herkesin görebileceği biçimde yazar. Sütun geçiş koşulları, WIP sınırları ve hızlandırılmış işin nasıl ele alınacağı tipik örneklerdir.', 2, '10. ünite · İş akışının tanımı (Definition of Workflow) ve SLE', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-wip-amac', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'WIP sınırının temel amacı nedir?', '{"choices":["Başlanan iş sayısını sınırlayıp işi hızlandırmak ve darboğazı göstermek","Takımın daha az çalışmasını ve daha çok dinlenmesini sağlamak","Product Backlog''daki öğe sayısını belli bir sayıyla sınırlamak","Her geliştiriciye her gün eşit sayıda iş dağıtmak"]}', '{"index":0}', 'WIP sınırı **çekmeyi** zorunlu kılar: bir aşama doluysa yeni iş başlamaz. Böylece bağlam değiştirme azalır, cycle time kısalır (Little yasası) ve iş biriken yer görünür olur.', 1, '10. ünite · WIP sınırı ve çekme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-wip-dolu', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Squad panosunda "Test" sütununun WIP sınırı 3 ve sütun dolu. Ayşe geliştirmedeki işini bitirdi. Kanban''a uygun hamle hangisidir?', '{"choices":["Yeni işe başlamak yerine testteki işlerden birine yardım etmek","Hemen Product Backlog''dan yeni bir işe başlamak","Bitirdiği işi sınırı aşarak Test sütununa koymak","WIP sınırını o gün için 5''e çıkarmak"]}', '{"index":0}', '"Başlamayı bırak, bitirmeye başla": aşağı akıştaki dolu aşamaya yardım etmek akışı açar. Yeni işe başlamak WIP''i artırır, sınırı aşmak kuralı anlamsızlaştırır. Sınır kalıcı olarak yanlışsa Retro''da konuşulup değiştirilir, anlık değil.', 2, '10. ünite · WIP sınırı ve çekme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-wip-cok-dusuk', 'agile', 'ag-u10', 10, 'tf', 'derived', 'WIP sınırı çok düşük tutulursa kişiler sık sık boşta kalır; çok yüksek tutulursa sınırın hiçbir etkisi olmaz.', '{}', '{"value":true}', 'Doğru. İyi bir WIP sınırı, akışı **biraz zorlayacak** kadar düşüktür. Takımlar genellikle mevcut WIP''in biraz altından başlar ve gözlemleyerek ayarlar.', 2, '10. ünite · WIP sınırı ve çekme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-talep-fazla', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Squad''a gelen istek, squad''ın bitirebileceğinden sürekli fazla. WIP sınırı koyunca ne olur?', '{"choices":["Başlanan iş hızlı biter, fazla istek kuyrukta birikir ve sıralama kararı görünür","Takım kendiliğinden daha çok iş bitirir ve kuyruk tamamen yok olur","Hiçbir şey değişmez; WIP sınırı yalnızca panonun görünüşünü değiştirir","Bütün istekler aynı anda başlar ve hepsi birlikte gecikmeye başlar"]}', '{"index":0}', 'WIP sınırı kapasiteyi artırmaz; **bekleyen işi başlanmış işten ayırır**. Başlanan iş hızlı biter, fazla talep kuyrukta görünür olur ve "hangisi önce?" kararı Product Owner''ın masasına gelir. Sınırsız sistemde aynı fazla talep her şeyi yavaşlatır.', 3, '10. ünite · WIP sınırı ve çekme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-dort-olcut', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Kanban Rehberi''nin zorunlu saydığı dört akış ölçütü hangileridir?', '{"choices":["WIP, throughput, iş öğesi yaşı, cycle time","Velocity, story point, burndown, burnup","Lead time, maliyet, kapsam, kalite","Moral, odak, güven, teknik borç"]}', '{"index":0}', 'Kanban Rehberi dört ölçütü zorunlu sayar: **WIP** (başlanmış ama bitmemiş öğe sayısı), **throughput** (birim zamanda biten öğe), **iş öğesi yaşı** (başlayıp henüz bitmemiş öğenin süresi) ve **cycle time** (başlangıçtan bitişe süre).', 2, '10. ünite · Kanban''ın dört akış ölçütü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-little-kanban', 'agile', 'ag-u10', 10, 'num', 'derived', 'Kanban takımı haftada ortalama 10 öğe bitiriyor ve ortalama cycle time 1,5 hafta. Little yasasına göre ortalama WIP kaçtır?', '{"blanks":1}', '{"blanks":[["15±0"]]}', 'WIP = throughput × cycle time = 10 × 1,5 = **15** öğe.', 2, '10. ünite · Kanban''ın dört akış ölçütü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-puan-yok', 'agile', 'ag-u10', 10, 'tf', 'derived', 'Kanban''ın akış ölçütleri hesaplanırken story point gerekmez; öğeler sayılır.', '{}', '{"value":true}', 'Doğru. Throughput ve cycle time öğe sayısı ve takvim süresiyle ölçülür. Öğeleri benzer büyüklükte tutmak ("doğru boyutlandırmak") bu ölçüleri anlamlı kılar.', 1, '10. ünite · Kanban''ın dört akış ölçütü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-birlikte', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Scrum.org''un Scrum takımları için Kanban rehberine göre bir Scrum takımı Kanban''ı nasıl kullanır?', '{"choices":["Scrum''u bırakmadan iş akışını tanımlar, WIP''i sınırlar, akış ölçütlerini kullanır","Sprint''leri kaldırıp yalnızca Kanban panosuyla çalışmaya başlar","Scrum Master''ın yerine bir Kanban yöneticisi atar ve rolleri değiştirir","Kanban''ı yalnızca hata düzeltmeleri için ayrı bir takımda kullanır"]}', '{"index":0}', 'Kanban Scrum''un **yerine geçmez**, onu tamamlar. Scrum takımı kendi iş akışının tanımını yapar, WIP''i sınırlar; Sprint Planning''de throughput''a, Daily''de iş öğesi yaşına, Retro''da cycle time''a bakar. Rehber''deki roller, etkinlikler ve artefaktlar aynen kalır.', 2, '10. ünite · Scrum takımlarında Kanban', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-daily-yas', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Kanban kullanan bir Scrum takımı Daily Scrum''da hangi bilgiyi özellikle kullanır?', '{"choices":["Devam eden işlerin yaşını; SLE''yi aşmak üzere olanı önce konuşmak","Her geliştiricinin dün kaç saat çalıştığını tek tek","Product Backlog''un tamamının sırasını ve yeni öğeleri","Bir önceki Sprint''in velocity''sini ve ortalamasını"]}', '{"index":0}', 'İş öğesi yaşı, takılan işi bitmeden yakalatır. Daily''de panoyu sağdan sola yürüyüp **en yaşlı ve SLE''ye yaklaşan** işleri konuşmak Sprint Goal''e ilerlemeyi korur.', 2, '10. ünite · Scrum takımlarında Kanban', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-scrumban', 'agile', 'ag-u10', 10, 'fill', 'derived', 'Scrum ile Kanban öğelerini birleştiren ve sahada sık kullanılan karma yaklaşımın yaygın adı nedir?', '{"blanks":1}', '{"blanks":[["Scrumban"]]}', '**Scrumban** ilk olarak Corey Ladas''ın kitabıyla yaygınlaştı: Scrum''dan geçiş için ya da iki yaklaşımın parçalarını birleştirmek için kullanılır. Resmî bir rehberi yoktur; içeriği takımdan takıma değişir.', 1, '10. ünite · Scrum takımlarında Kanban', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-destek', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Kampüsün bilgi işlem destek ekibine gün boyu önceden bilinmeyen, küçük ve acil istekler geliyor. En uygun başlangıç hangisidir?', '{"choices":["Kanban: akışı görselleştirmek, WIP''i sınırlamak ve cycle time''ı izlemek","İki haftalık Sprint''ler; acil istekler Sprint bitene kadar bekler","Yıllık bir plan yapıp istekleri ona göre sıralamak","Hiçbir yöntem kullanmamak"]}', '{"index":0}', 'Öngörülemeyen ve sürekli gelen iş için **Kanban** doğal bir başlangıçtır: Sprint sınırı yoktur, iş geldiği gibi çekilir. Scrum, bir ürün hedefine doğru planlanabilir parçalarla ilerleyen işte daha güçlüdür.', 2, '10. ünite · Hangi işe Scrum, hangi işe Kanban?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-urun', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Squad yeni bir ürün geliştiriyor, belirsizlik yüksek ve paydaşlarla düzenli denetim gerekiyor. Hangisi en uygundur?', '{"choices":["Scrum; istenirse WIP sınırı ve cycle time gibi akış pratikleriyle","Yalnızca Kanban; Review ya da Retro gibi etkinlikler gerekmez","Waterfall; belirsizlik yüksekse önce her şey ayrıntılı planlanmalı","Hiçbir yöntem; takım her gün nasıl isterse öyle çalışır"]}', '{"index":0}', 'Kompleks ürün geliştirmede Scrum''un sabit ritmi, Sprint Goal''ü ve Review''u düzenli denetim ve uyarlama sağlar. Kanban''ın akış pratikleri bunun üstüne eklenebilir.', 2, '10. ünite · Hangi işe Scrum, hangi işe Kanban?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-rakip-degil', 'agile', 'ag-u10', 10, 'tf', 'derived', 'Scrum ile Kanban rakip yöntemlerdir; bir takım ikisinden yalnızca birini seçmek zorundadır.', '{}', '{"value":false}', 'Yanlış. Scrum.org ve Kanban Rehberi''nin yazarları Scrum takımları için Kanban rehberini birlikte yazdı: iki yaklaşım birlikte kullanılabilir.', 1, '10. ünite · Hangi işe Scrum, hangi işe Kanban?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-hizlandirilmis', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Kanban''da "hızlandırılmış" (expedite) servis sınıfı ne için kullanılır?', '{"choices":["Gecikmesi çok pahalı acil işin önce yapılması için; sayısı sıkı sınırlanır","Product Owner''ın istediği her işin sırayı atlayıp hızlıca bitirilmesi için","Kolay ve küçük işlerin öteki işlerden önce bitirilmesi için","Teknik borç işlerinin her zaman en sona bırakılması için"]}', '{"index":0}', 'Hızlandırılmış iş (ör. canlıdaki kritik hata) sırayı atlar ve gerekirse WIP sınırını aşar. Bu yüzden genellikle **aynı anda en fazla bir** hızlandırılmış işe izin verilir; yoksa her şey "acil" olur.', 2, '10. ünite · Servis sınıfları ve hızlandırılmış iş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-sabit-tarih', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Yeni yönetmelikle 1 Mart''tan itibaren menüde alerjen bilgisinin gösterilmesi zorunlu. Bu iş hangi servis sınıfına girer?', '{"choices":["Sabit tarihli","Hızlandırılmış","Standart","Ertelenebilir"]}', '{"index":0}', '**Sabit tarihli** işin gecikme maliyeti belli bir tarihten sonra birden yükselir. Erken başlatılır ama acil gibi öteki işlerin önüne her gün geçmez.', 2, '10. ünite · Servis sınıfları ve hızlandırılmış iş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u10-gecikme-maliyeti', 'agile', 'ag-u10', 10, 'mcq', 'derived', 'Servis sınıflarının dayandığı temel fikir hangisidir?', '{"choices":["Her işin gecikme maliyeti zamanla farklı biçimde değişir","Her iş aynı önceliğe sahiptir ve aynı biçimde ele alınır","En büyük iş her zaman öteki işlerden önce yapılır","İşler her durumda geliş sırasına göre yapılmalıdır"]}', '{"index":0}', 'Servis sınıfları **gecikme maliyetinin biçimine** dayanır: hızlandırılmışta hemen ve yüksek, sabit tarihlide belli bir tarihten sonra birden, standartta zamanla yavaş yavaş artar, ertelenebilirde neredeyse yoktur.', 3, '10. ünite · Servis sınıfları ve hızlandırılmış iş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-xp-kim', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Extreme Programming (XP) en çok kiminle özdeşleşmiştir?', '{"choices":["Kent Beck","Ken Schwaber","Taiichi Ohno","Eliyahu Goldratt"]}', '{"index":0}', 'XP''yi 1990''ların sonunda **Kent Beck** geliştirdi (*Extreme Programming Explained*, 1999). Schwaber Scrum''un, Ohno Toyota Üretim Sistemi''nin, Goldratt kısıtlar teorisinin adıyla anılır.', 1, '11. ünite · XP''nin değerleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-bes-deger', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Aşağıdakilerden hangisi XP''nin beş değerinden biri **değildir**?', '{"choices":["Hız","İletişim","Sadelik","Cesaret"]}', '{"index":0}', 'XP''nin değerleri: **iletişim, sadelik, geri bildirim, cesaret ve saygı** (saygı ikinci baskıda eklendi). Hız bir değer değildir; XP''nin amacı sürdürülebilir biçimde değer üretmektir.', 2, '11. ünite · XP''nin değerleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-cesaret', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'XP''de "cesaret" değerinin pratikteki karşılığı hangisidir?', '{"choices":["Testlerin güvencesiyle kodu yeniden düzenlemek, kötü haberi erken söylemek","Test yazmadan ve kimseye sormadan doğrudan canlıya yayın yapmak","Takımın ortak kararına karşı tek başına ve gizlice hareket etmek","Tahminleri her zaman iyimser verip sonra fazla mesaiyle yetiştirmek"]}', '{"index":0}', 'Cesaret, doğru olanı yapmaktır: bir tasarımın kötü olduğunu söylemek, gerekiyorsa kodu atıp yeniden yazmak, gecikmeyi erken bildirmek. Testler ve sürekli entegrasyon bu cesareti güvenli kılar.', 2, '11. ünite · XP''nin değerleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-kirmizi-yesil', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'TDD döngüsünün doğru sırası hangisidir?', '{"choices":["Başarısız test yaz, onu geçiren en basit kodu yaz, yeniden düzenle","Kodu yaz, kodu yeniden düzenle, en sonda da testleri yaz","Bütün testleri projenin en başında yaz, sonra bütün kodu yaz","Kodu yaz, canlıya al, kullanıcıdan hata gelirse test yaz"]}', '{"index":0}', 'TDD''nin döngüsü **kırmızı-yeşil-düzenle**: önce başarısız bir test (kırmızı), sonra testi geçiren en basit kod (yeşil), sonra testler yeşil kalırken tasarımı iyileştirme (düzenle). Döngü dakikalar sürer.', 1, '11. ünite · Testle yönlendirilen geliştirme (TDD)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-tdd-fayda', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'TDD''nin en önemli faydalarından biri hangisidir?', '{"choices":["Tasarımı test edilebilir parçalara iter ve değişiklik için güvenlik ağı kurar","Testçilere ve keşif testlerine duyulan ihtiyacı tamamen ortadan kaldırır","Kodun hiçbir koşulda hata içermemesini en baştan garanti eder","Kod yazma süresini her projede ve her durumda yarıya indirir"]}', '{"index":0}', 'Önce test yazmak, kodu **test edilebilir** ve gevşek bağlı yazmaya zorlar; biriken testler yeniden düzenleme ve değişiklik için bir **güvenlik ağı** olur. Hatasızlık garantisi değildir; keşif testlerine ve QA''nın bakışına yine ihtiyaç vardır.', 2, '11. ünite · Testle yönlendirilen geliştirme (TDD)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-kirmizi-once', 'agile', 'ag-u11', 11, 'tf', 'derived', 'TDD''de yeni testin önce başarısız olduğunu görmek önemlidir; çünkü bu, testin gerçekten bir şeyi sınadığını gösterir.', '{}', '{"value":true}', 'Doğru. Hiç kırmızı olmayan bir test her zaman geçiyor olabilir; yani hiçbir şeyi denetlemiyor olabilir. Kırmızıyı görmek testin kendisini sınar.', 2, '11. ünite · Testle yönlendirilen geliştirme (TDD)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-esli-tanim', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Eşli programlamada roller nasıl adlandırılır?', '{"choices":["Klavyeyi kullanan sürücü, yönü ve büyük resmi izleyen gözcü","Kodu yazan geliştirici, sonradan inceleyen denetçi","Kıdemli olan öğretmen, kıdemsiz olan öğrenci; roller değişmez","Biri kod yazar, öteki aynı anda başka bir işte çalışır"]}', '{"index":0}', 'Eşli programlamada bir kişi **sürücü** (driver) olarak yazar, öteki **gözcü** (navigator) olarak tasarımı ve sonraki adımı düşünür. Roller sık sık değişir; inceleme yazarken anında olur.', 1, '11. ünite · Eşli ve topluluk programlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-esli-fayda', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Squad''da ödeme modülünü yalnızca Hakan biliyor ve Hakan izne çıkınca iş duruyor. Hangi XP pratiği bu riski en doğrudan azaltır?', '{"choices":["Eşli programlama ve ortak kod sahipliği","Daha uzun Sprint''ler","Hakan''ın izinlerini Sprint sonuna denk getirmek","Ödeme modülü için ayrı bir takım kurmak"]}', '{"index":0}', 'Bilginin tek kişide toplanması bir risktir (sahada "otobüs faktörü" denir). **Eşli programlama** bilgiyi yayar, **ortak kod sahipliği** herkesin her yeri değiştirebilmesini sağlar.', 2, '11. ünite · Eşli ve topluluk programlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-topluluk', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Bütün takımın aynı anda, tek ekranda, tek bir iş üzerinde çalıştığı pratiğin adı nedir?', '{"choices":["Topluluk programlama","Eşli programlama","Kod incelemesi","Hackathon"]}', '{"index":0}', '**Topluluk programlama** (mob ya da ensemble programming), eşli programlamanın bütün takıma yayılmış biçimidir: bir sürücü, birçok gözcü. Zor sorunlarda ve bilgi yaymada güçlüdür; WIP''i doğal olarak 1''e indirir.', 2, '11. ünite · Eşli ve topluluk programlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-ci-tanim', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Sürekli entegrasyon (CI) ne demektir?', '{"choices":["Herkesin değişikliklerini günde en az bir kez ana dala birleştirmesi ve otomatik test","Kodun her Sprint sonunda bir kez ve elle birleştirilmesi","Her geliştiricinin haftalarca kendi dalında çalışıp sürüm öncesi birleştirmesi","Testlerin yalnızca sürümden önce bir test uzmanınca elle çalıştırılması"]}', '{"index":0}', 'Sürekli entegrasyonda değişiklikler **sık** ve **küçük** parçalar halinde ana dala birleşir ve her birleşme **otomatik** derlenip test edilir. Uzun yaşayan dallar birleşme çakışmasını ve sürprizleri büyütür.', 1, '11. ünite · Sürekli entegrasyon ve sürekli teslim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-kirik-derleme', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Squad''ın ana dalındaki otomatik testler kırıldı. Sürekli entegrasyon kültüründe ilk iş nedir?', '{"choices":["Kırığı hemen düzeltmek ya da geri almak; kırık dalın üstüne iş eklenmez","Kırılan testleri devre dışı bırakıp çalışmaya devam etmek","Kırığı Sprint sonuna bırakıp önce yeni özellikleri bitirmek","Kırığı yapan kişiyi Retro''da bulup herkesin önünde sorumlu tutmak"]}', '{"index":0}', 'Kırık ana dal herkesin işini riske atar. CI''da kural basittir: **önce kırığı düzelt** ya da değişikliği geri al. Testi devre dışı bırakmak sorunu saklar.', 2, '11. ünite · Sürekli entegrasyon ve sürekli teslim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-cd-fark', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Sürekli teslim (continuous delivery) ile sürekli dağıtım (continuous deployment) arasındaki fark nedir?', '{"choices":["Teslimde değişiklik yayına hazır tutulur, yayın karardır; dağıtımda kendiliğinden çıkar","İkisi aynı şeydir; farklı şirketler farklı adlar kullanır","Teslim yalnızca mobil uygulamalar, dağıtım yalnızca web uygulamaları içindir","Dağıtımda test yapılmaz, teslimde ise bütün testler elle çalıştırılır"]}', '{"index":0}', '**Sürekli teslim**: ana dal her an yayınlanabilir durumdadır, yayın bir düğmeyle yapılır. **Sürekli dağıtım**: otomatik testleri geçen her değişiklik insan onayı olmadan canlıya çıkar. İkisi de güçlü bir test otomasyonu gerektirir.', 2, '11. ünite · Sürekli entegrasyon ve sürekli teslim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-refactoring-tanim', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Yeniden düzenleme (refactoring) nedir?', '{"choices":["Kodun davranışını değiştirmeden iç yapısını iyileştirmek","Kullanıcıların istediği yeni özellikleri koda eklemek","Kullanıcıların bildirdiği hataları bulup düzeltmek","Kodu daha hızlı çalışan başka bir dile çevirmek"]}', '{"index":0}', 'Martin Fowler''ın tanımıyla yeniden düzenleme, kodun **davranışını değiştirmeden** iç yapısını iyileştirmektir: isimleri netleştirmek, tekrarları kaldırmak, büyük fonksiyonları bölmek. Testler davranışın değişmediğini doğrular.', 1, '11. ünite · Yeniden düzenleme ve basit tasarım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-basit-tasarim', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'XP''de "basit tasarım" ilkesine en uygun davranış hangisidir?', '{"choices":["Bugünkü ihtiyacı karşılayan en basit tasarımı yapıp ihtiyaç değişince yeniden düzenlemek","Gelecekte gerekebilecek her özellik için şimdiden genel bir altyapı kurmak","Tasarım yapmadan doğrudan kod yazmak","Bütün tasarımı projenin başında tamamlamak"]}', '{"index":0}', 'XP''nin kısaltmasıyla **YAGNI** ("buna ihtiyacın olmayacak"): bugün gerekmeyen genelleme yapılmaz. Basit tasarım ve yeniden düzenleme birlikte çalışır; ihtiyaç gelince tasarım güvenle değiştirilir. Bu, Manifesto''nun sadelik ilkesidir.', 2, '11. ünite · Yeniden düzenleme ve basit tasarım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-refactoring-sprint', 'agile', 'ag-u11', 11, 'tf', 'derived', 'Yeniden düzenleme en iyi, birkaç Sprint''te bir yapılan ayrı "temizlik Sprint''lerinde" yapılır.', '{}', '{"value":false}', 'Yanlış. XP''de yeniden düzenleme **sürekli** yapılır: TDD döngüsünün her turunda ve dokunulan her kodda ("izci kuralı": bulduğundan temiz bırak). Ayrı temizlik Sprint''leri genellikle borcun çok biriktiğini gösterir.', 2, '11. ünite · Yeniden düzenleme ve basit tasarım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-kucuk-surum', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'XP''nin "küçük sürümler" pratiği Agile Manifesto''nun hangi ilkesiyle en doğrudan ilişkilidir?', '{"choices":["Değerli yazılımı erken ve sürekli teslim etmek","Yüz yüze konuşmanın en etkili iletişim olması","Motive bireyler etrafında proje kurmak","Düzenli aralıklarla takımın kendini yansıtması"]}', '{"index":0}', 'Küçük ve sık sürümler, ilk ilkenin (**erken ve sürekli teslim**) ve üçüncü ilkenin (kısa aralıkla teslim) uygulamasıdır. Her sürüm geri bildirim getirir.', 2, '11. ünite · Öteki XP pratikleri: küçük sürümler, ortak sahiplik, sürdürülebilir hız', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-kirk-saat', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'XP''nin ilk baskısında "40 saatlik hafta" adıyla geçen pratiğin bugünkü adı ve amacı nedir?', '{"choices":["Sürdürülebilir hız: takımın yorulmadan aynı tempoyu koruması","Haftada tam 40 saat çalışmayı herkese zorunlu kılmak","Fazla mesainin ücretini her ay düzenli olarak ödemek","Bir haftalık kısa iterasyonlarla planlama yapmak"]}', '{"index":0}', 'Pratiğin adı **sürdürülebilir hız** oldu. Fikir saat sayısı değil, yorgunluğun hatayı ve kalitesiz kodu artırmasıdır. Manifesto''nun sekizinci ilkesiyle aynıdır.', 2, '11. ünite · Öteki XP pratikleri: küçük sürümler, ortak sahiplik, sürdürülebilir hız', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-ortak-sahiplik', 'agile', 'ag-u11', 11, 'fill', 'derived', 'XP''de herhangi bir geliştiricinin kod tabanının herhangi bir yerini değiştirebilmesine ne denir?', '{"blanks":1}', '{"blanks":[["ortak kod sahipliği","kolektif kod sahipliği","collective code ownership","ortak sahiplik"]]}', '**Ortak kod sahipliği**: kod kişilerin değil takımındır. Eşli programlama, kodlama standartları ve testler bunu güvenli kılar.', 1, '11. ünite · Öteki XP pratikleri: küçük sürümler, ortak sahiplik, sürdürülebilir hız', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-borc-tanim', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Teknik borç metaforunu ilk kim ortaya attı?', '{"choices":["Ward Cunningham","Kent Beck","Martin Fowler","Jeff Sutherland"]}', '{"index":0}', 'Metafor 1992''de **Ward Cunningham**''a aittir: bugün hızlı ama özensiz yazılan kod bir borçtur; borcun **faizi** sonraki her değişikliğin daha pahalı olmasıdır. Martin Fowler sonra borcu dört bölgeli bir tabloyla sınıflandırdı.', 1, '11. ünite · Teknik borç ve faizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-faiz', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Squad her Sprint test yazmayı atlayarak "hız kazanıyor". Bunun zamanla velocity''ye etkisi genellikle nasıldır?', '{"choices":["Kısa vadede artar, sonra düzeltmeler ve kırılgan kod yüzünden düşer","Sürekli ve kalıcı olarak artar, çünkü testlere zaman harcanmaz","Hiçbir etkisi olmaz, çünkü testler yalnızca belgeleme içindir","Hemen düşer, sonra takım alıştıkça kalıcı olarak artar"]}', '{"index":0}', 'Borç önce hız kazandırır, sonra **faiz** öder: her değişiklik daha çok hata, daha uzun test ve daha çok korku getirir. Hız eğrisi zamanla aşağı döner. Teknik borç faizi deneyinde bu eğriyi kendin çizebilirsin.', 2, '11. ünite · Teknik borç ve faizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-bilincli-borc', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Fowler''ın teknik borç tablosunda "Yayına yetişmek için bu kısayolu bilerek alıyoruz ve sonuçlarını biliyoruz" hangi bölgeye düşer?', '{"choices":["Bilinçli ve tedbirli","Bilinçli ve pervasız","Farkında olmadan ve tedbirli","Farkında olmadan ve pervasız"]}', '{"index":0}', 'Fowler borcu iki eksende sınıflar: **bilinçli/farkında olmadan** ve **tedbirli/pervasız**. Sonucunu bilip geri ödemeyi planlayarak alınan kısayol **bilinçli ve tedbirlidir**. "Tasarıma vaktimiz yok" diyerek alınan borç bilinçli ama pervasızdır.', 3, '11. ünite · Teknik borç ve faizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-borc-backlog', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Teknik borcu ödeme işleri Scrum''da nerede durmalıdır?', '{"choices":["Product Backlog''da, öteki işlerle birlikte görünür ve PO''nun sırasıyla","Yalnızca Tech Lead''in kendi tuttuğu kişisel listesinde","Hiçbir yerde; geliştiriciler boş zamanlarında sessizce halleder","Ayrı bir \"teknik backlog\"da, Product Owner''dan gizli tutularak"]}', '{"index":0}', 'Product Backlog takımın **tek iş kaynağıdır** (8. ünite). Borç işleri orada görünür olursa PO onların değerini ve riskini öteki işlerle tartabilir. Developers borcun maliyetini görünür kılmaktan sorumludur.', 2, '11. ünite · Teknik borç ve faizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-dora', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'DORA araştırmasının yazılım teslim performansı için yaygınlaştırdığı dört temel ölçüt hangileridir?', '{"choices":["Dağıtım sıklığı, teslim süresi, başarısızlık oranı, geri getirme süresi","Velocity, story point, burndown ve burnup grafikleri","Kod satırı sayısı, commit sayısı, toplantı süresi ve hata sayısı","Takım morali, odak, paydaş güveni ve teknik borç oranı"]}', '{"index":0}', 'DORA''nın dört anahtar ölçütü: **dağıtım sıklığı**, **değişiklikler için teslim süresi**, **değişiklik başarısızlık oranı** ve **hizmeti geri getirme süresi**. İkisi hızı, ikisi istikrarı ölçer; araştırma ikisinin birlikte iyileşebildiğini gösterdi.', 2, '11. ünite · DevOps ve DORA ölçütleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-devops-tanim', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'DevOps''un özü hangisidir?', '{"choices":["Geliştirme ile operasyonun duvarını kaldırıp otomasyonla sık teslim etmek","Yalnızca operasyon ekibine yeni ve daha modern bir unvan vermek","Geliştiricilerin sunuculara ve canlı ortama hiç dokunmaması","Yayınları riski azaltmak için yılda bir büyük sürüme toplamak"]}', '{"index":0}', 'DevOps bir unvan değil bir kültür ve pratikler bütünüdür: geliştirme ve operasyon **aynı hedefe** çalışır; derleme, test, kurulum ve izleme otomatikleştirilir. Squad''daki DevOps Kerem bir Developer''dır, ayrı bir duvarın arkasında değil.', 2, '11. ünite · DevOps ve DORA ölçütleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ag-u11-dod-teknik', 'agile', 'ag-u11', 11, 'mcq', 'derived', 'Squad''ın DoD''una aşağıdakilerden hangisini eklemek XP ve DevOps pratiklerini en doğrudan güçlendirir?', '{"choices":["Ana dala birleşti, testler geçiyor, otomatik hatla test ortamına kuruldu","Product Owner öğeyi Sprint Review''da gördü ve beğendi","Öğe için en az üç toplantı yapıldı ve tutanakları yazıldı","Tech Lead öğeyi inceledi ve kendi adına onayladı"]}', '{"index":0}', 'DoD''a **sürekli entegrasyon, otomatik test ve otomatik kurulum** maddeleri eklemek "bitti"yi teknik pratiklere bağlar. Böylece her Increment gerçekten yayınlanabilir olur (8. ünite).', 2, '11. ünite · DevOps ve DORA ölçütleri', 1)
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
UPDATE questions SET kavram = 'u5-po', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-po-amac';
UPDATE questions SET kavram = 'u5-po', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-po-pb-isleri';
UPDATE questions SET kavram = 'u5-po', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u5-po-siralama';
UPDATE questions SET kavram = 'u5-po', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u5-po-hikaye-onay';
UPDATE questions SET kavram = 'u5-po-tek', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-tek-kisi';
UPDATE questions SET kavram = 'u5-po-tek', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-saygi';
UPDATE questions SET kavram = 'u5-po-tek', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u5-ikna';
UPDATE questions SET kavram = 'u5-po-tek', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-vekil';
UPDATE questions SET kavram = 'u5-sm-takim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-sm-hesap';
UPDATE questions SET kavram = 'u5-sm-takim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-gercek-lider';
UPDATE questions SET kavram = 'u5-sm-takim', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u5-engel';
UPDATE questions SET kavram = 'u5-sm-takim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-sm-not';
UPDATE questions SET kavram = 'u5-sm-po-org', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-sm-po';
UPDATE questions SET kavram = 'u5-sm-po-org', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-sm-org';
UPDATE questions SET kavram = 'u5-sm-po-org', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u5-sm-yok';
UPDATE questions SET kavram = 'u5-developers', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-dev-tanim';
UPDATE questions SET kavram = 'u5-developers', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-dev-hesap';
UPDATE questions SET kavram = 'u5-developers', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-unvan';
UPDATE questions SET kavram = 'u5-capraz', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-capraz-tanim';
UPDATE questions SET kavram = 'u5-capraz', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u5-t-sekil';
UPDATE questions SET kavram = 'u5-capraz', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u5-bagimlilik';
UPDATE questions SET kavram = 'u5-kendini-yoneten', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-kendini-yoneten';
UPDATE questions SET kavram = 'u5-kendini-yoneten', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-butun-takim';
UPDATE questions SET kavram = 'u5-kendini-yoneten', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-hiyerarsi';
UPDATE questions SET kavram = 'u5-boyut', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-on-kisi';
UPDATE questions SET kavram = 'u5-boyut', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u5-iletisim-yolu';
UPDATE questions SET kavram = 'u5-boyut', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-bolme';
UPDATE questions SET kavram = 'u5-boyut', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u5-buyuk-squad';
UPDATE questions SET kavram = 'u5-kim-karar', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u5-karar-sira';
UPDATE questions SET kavram = 'u5-kim-karar', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-karar-nasil';
UPDATE questions SET kavram = 'u5-kim-karar', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u5-karar-kac-oge';
UPDATE questions SET kavram = 'u5-kim-karar', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u5-karar-sure';
UPDATE questions SET kavram = 'u6-sprint', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-sprint-sure';
UPDATE questions SET kavram = 'u6-sprint', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-kapsayici';
UPDATE questions SET kavram = 'u6-sprint', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-ard-arda';
UPDATE questions SET kavram = 'u6-sprint', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-uzun-risk';
UPDATE questions SET kavram = 'u6-sprint-kurallar', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-kural-hedef';
UPDATE questions SET kavram = 'u6-sprint-kurallar', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-kalite';
UPDATE questions SET kavram = 'u6-sprint-kurallar', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u6-acil-istek';
UPDATE questions SET kavram = 'u6-iptal', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-iptal-kim';
UPDATE questions SET kavram = 'u6-iptal', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-iptal-ne-zaman';
UPDATE questions SET kavram = 'u6-iptal', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u6-iptal-nadir';
UPDATE questions SET kavram = 'u6-planning-neden', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-uc-konu';
UPDATE questions SET kavram = 'u6-planning-neden', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-goal-kim';
UPDATE questions SET kavram = 'u6-planning-neden', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-davet';
UPDATE questions SET kavram = 'u6-planning-ne', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-ne-girdi';
UPDATE questions SET kavram = 'u6-planning-ne', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u6-kapasite-hesap';
UPDATE questions SET kavram = 'u6-planning-ne', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-inceltme-planning';
UPDATE questions SET kavram = 'u6-planning-nasil', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-nasil-kim';
UPDATE questions SET kavram = 'u6-planning-nasil', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-bir-gun';
UPDATE questions SET kavram = 'u6-planning-nasil', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-planning-sure';
UPDATE questions SET kavram = 'u6-daily', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-daily-amac';
UPDATE questions SET kavram = 'u6-daily', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-daily-kimin';
UPDATE questions SET kavram = 'u6-daily', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-uc-soru';
UPDATE questions SET kavram = 'u6-daily', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-ayni-yer';
UPDATE questions SET kavram = 'u6-daily', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-tek-firsat-degil';
UPDATE questions SET kavram = 'u6-daily-buyuk', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u6-uzayan-daily';
UPDATE questions SET kavram = 'u6-daily-buyuk', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u6-parking-lot';
UPDATE questions SET kavram = 'u6-daily-buyuk', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u6-yonetici';
UPDATE questions SET kavram = 'u6-timebox', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-daily-sure';
UPDATE questions SET kavram = 'u6-timebox', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-review-sure';
UPDATE questions SET kavram = 'u6-timebox', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u6-retro-sure';
UPDATE questions SET kavram = 'u6-timebox', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u6-oran';
UPDATE questions SET kavram = 'u6-timebox', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u6-ust-sinir';
UPDATE questions SET kavram = 'u7-review', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-review-amac';
UPDATE questions SET kavram = 'u7-review', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-review-kim';
UPDATE questions SET kavram = 'u7-review', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-review-cikti';
UPDATE questions SET kavram = 'u7-review', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-review-sirasi';
UPDATE questions SET kavram = 'u7-review-demo', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-sunum-degil';
UPDATE questions SET kavram = 'u7-review-demo', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-kapi-degil';
UPDATE questions SET kavram = 'u7-review-demo', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u7-iyi-review';
UPDATE questions SET kavram = 'u7-retro', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-retro-amac';
UPDATE questions SET kavram = 'u7-retro', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-retro-kapsam';
UPDATE questions SET kavram = 'u7-retro', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-retro-dod';
UPDATE questions SET kavram = 'u7-retro', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-retro-kim';
UPDATE questions SET kavram = 'u7-retro-cikti', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-sonraki-sprint';
UPDATE questions SET kavram = 'u7-retro-cikti', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u7-ayni-sorun';
UPDATE questions SET kavram = 'u7-retro-cikti', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u7-smart';
UPDATE questions SET kavram = 'u7-retro-bicim', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u7-bes-asama';
UPDATE questions SET kavram = 'u7-retro-bicim', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u7-bes-neden';
UPDATE questions SET kavram = 'u7-retro-bicim', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u7-balik-kilcigi';
UPDATE questions SET kavram = 'u7-retro-bicim', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u7-guvenlik';
UPDATE questions SET kavram = 'u7-kolaylastirma', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u7-kolay-kim';
UPDATE questions SET kavram = 'u7-kolaylastirma', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u7-sessiz';
UPDATE questions SET kavram = 'u7-kolaylastirma', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u7-noktalama';
UPDATE questions SET kavram = 'u8-pb', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-uc-artefakt';
UPDATE questions SET kavram = 'u8-pb', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-tek-kaynak';
UPDATE questions SET kavram = 'u8-pb', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u8-iki-backlog';
UPDATE questions SET kavram = 'u8-product-goal', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-pg-tanim';
UPDATE questions SET kavram = 'u8-product-goal', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-pg-tek';
UPDATE questions SET kavram = 'u8-product-goal', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u8-pg-ornek';
UPDATE questions SET kavram = 'u8-refinement', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-refinement-tanim';
UPDATE questions SET kavram = 'u8-refinement', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-kim-boyut';
UPDATE questions SET kavram = 'u8-refinement', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-secime-hazir';
UPDATE questions SET kavram = 'u8-refinement', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u8-refinement-yuzde';
UPDATE questions SET kavram = 'u8-sb', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-sb-ucu';
UPDATE questions SET kavram = 'u8-sb', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-sb-kimin';
UPDATE questions SET kavram = 'u8-sb', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-sb-guncel';
UPDATE questions SET kavram = 'u8-sprint-goal', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-sg-tanim';
UPDATE questions SET kavram = 'u8-sprint-goal', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u8-sg-esneklik';
UPDATE questions SET kavram = 'u8-sprint-goal', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u8-sg-ornek';
UPDATE questions SET kavram = 'u8-increment', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-inc-tanim';
UPDATE questions SET kavram = 'u8-increment', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-coklu-inc';
UPDATE questions SET kavram = 'u8-increment', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-yuzde-90';
UPDATE questions SET kavram = 'u8-dod', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-dod-tanim';
UPDATE questions SET kavram = 'u8-dod', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-dod-seffaflik';
UPDATE questions SET kavram = 'u8-dod', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u8-dod-madde';
UPDATE questions SET kavram = 'u8-dod', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u8-kabul-dod';
UPDATE questions SET kavram = 'u8-dod-coklu', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-org-standart';
UPDATE questions SET kavram = 'u8-dod-coklu', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u8-tek-dod';
UPDATE questions SET kavram = 'u8-dor', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-dor-rehber';
UPDATE questions SET kavram = 'u8-dor', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u8-dor-risk';
UPDATE questions SET kavram = 'u8-dor', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u8-rehber-disi';
UPDATE questions SET kavram = 'u9-burndown', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-burndown-tanim';
UPDATE questions SET kavram = 'u9-burndown', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u9-rehberde';
UPDATE questions SET kavram = 'u9-burndown', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u9-ucurum';
UPDATE questions SET kavram = 'u9-burndown', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-yukari';
UPDATE questions SET kavram = 'u9-burndown', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u9-duz';
UPDATE questions SET kavram = 'u9-burnup', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-burnup-fark';
UPDATE questions SET kavram = 'u9-burnup', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u9-burnup-kapsam';
UPDATE questions SET kavram = 'u9-burnup', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u9-kalan-burnup';
UPDATE questions SET kavram = 'u9-velocity', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-velocity-tanim';
UPDATE questions SET kavram = 'u9-velocity', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u9-velocity-hesap';
UPDATE questions SET kavram = 'u9-velocity', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-velocity-aralik';
UPDATE questions SET kavram = 'u9-velocity', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-yarim-is';
UPDATE questions SET kavram = 'u9-velocity-tuzak', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u9-karsilastirma';
UPDATE questions SET kavram = 'u9-velocity-tuzak', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u9-sisirme';
UPDATE questions SET kavram = 'u9-velocity-tuzak', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-velocity-kapasite';
UPDATE questions SET kavram = 'u9-akis-olcutleri', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u9-cycle-time';
UPDATE questions SET kavram = 'u9-akis-olcutleri', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-throughput';
UPDATE questions SET kavram = 'u9-akis-olcutleri', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-yas';
UPDATE questions SET kavram = 'u9-akis-olcutleri', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u9-little-akis';
UPDATE questions SET kavram = 'u9-cfd', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-cfd-tanim';
UPDATE questions SET kavram = 'u9-cfd', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u9-cfd-bant';
UPDATE questions SET kavram = 'u9-cfd', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-cfd-duz';
UPDATE questions SET kavram = 'u9-goodhart', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-goodhart';
UPDATE questions SET kavram = 'u9-goodhart', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u9-hata-sayisi';
UPDATE questions SET kavram = 'u9-goodhart', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u9-iyi-olcut';
UPDATE questions SET kavram = 'u9-monte-carlo', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-mc-tanim';
UPDATE questions SET kavram = 'u9-monte-carlo', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u9-yuzde-85';
UPDATE questions SET kavram = 'u9-monte-carlo', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u9-mc-ortalama';
UPDATE questions SET kavram = 'u10-kanban-tanim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u10-kanban-tanim';
UPDATE questions SET kavram = 'u10-kanban-tanim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u10-uc-pratik';
UPDATE questions SET kavram = 'u10-kanban-tanim', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u10-rol-yok';
UPDATE questions SET kavram = 'u10-kanban-tanim', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u10-kanban-koken';
UPDATE questions SET kavram = 'u10-dow', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u10-dow-icerik';
UPDATE questions SET kavram = 'u10-dow', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u10-sle';
UPDATE questions SET kavram = 'u10-dow', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u10-acik-kural';
UPDATE questions SET kavram = 'u10-wip-siniri', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u10-wip-amac';
UPDATE questions SET kavram = 'u10-wip-siniri', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u10-wip-dolu';
UPDATE questions SET kavram = 'u10-wip-siniri', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u10-wip-cok-dusuk';
UPDATE questions SET kavram = 'u10-wip-siniri', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u10-talep-fazla';
UPDATE questions SET kavram = 'u10-olcutler', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u10-dort-olcut';
UPDATE questions SET kavram = 'u10-olcutler', yedek = 0, etiketler = 'hesap' WHERE id = 'ag-u10-little-kanban';
UPDATE questions SET kavram = 'u10-olcutler', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u10-puan-yok';
UPDATE questions SET kavram = 'u10-scrum-kanban', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u10-birlikte';
UPDATE questions SET kavram = 'u10-scrum-kanban', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u10-daily-yas';
UPDATE questions SET kavram = 'u10-scrum-kanban', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u10-scrumban';
UPDATE questions SET kavram = 'u10-hangisi', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u10-destek';
UPDATE questions SET kavram = 'u10-hangisi', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u10-urun';
UPDATE questions SET kavram = 'u10-hangisi', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u10-rakip-degil';
UPDATE questions SET kavram = 'u10-servis', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u10-hizlandirilmis';
UPDATE questions SET kavram = 'u10-servis', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u10-sabit-tarih';
UPDATE questions SET kavram = 'u10-servis', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u10-gecikme-maliyeti';
UPDATE questions SET kavram = 'u11-xp-degerler', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-xp-kim';
UPDATE questions SET kavram = 'u11-xp-degerler', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-bes-deger';
UPDATE questions SET kavram = 'u11-xp-degerler', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-cesaret';
UPDATE questions SET kavram = 'u11-tdd', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-kirmizi-yesil';
UPDATE questions SET kavram = 'u11-tdd', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-tdd-fayda';
UPDATE questions SET kavram = 'u11-tdd', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-kirmizi-once';
UPDATE questions SET kavram = 'u11-esli', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-esli-tanim';
UPDATE questions SET kavram = 'u11-esli', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u11-esli-fayda';
UPDATE questions SET kavram = 'u11-esli', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-topluluk';
UPDATE questions SET kavram = 'u11-ci', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-ci-tanim';
UPDATE questions SET kavram = 'u11-ci', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u11-kirik-derleme';
UPDATE questions SET kavram = 'u11-ci', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-cd-fark';
UPDATE questions SET kavram = 'u11-refactoring', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-refactoring-tanim';
UPDATE questions SET kavram = 'u11-refactoring', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-basit-tasarim';
UPDATE questions SET kavram = 'u11-refactoring', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u11-refactoring-sprint';
UPDATE questions SET kavram = 'u11-xp-pratikler', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-kucuk-surum';
UPDATE questions SET kavram = 'u11-xp-pratikler', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-kirk-saat';
UPDATE questions SET kavram = 'u11-xp-pratikler', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-ortak-sahiplik';
UPDATE questions SET kavram = 'u11-teknik-borc', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-borc-tanim';
UPDATE questions SET kavram = 'u11-teknik-borc', yedek = 0, etiketler = 'senaryo' WHERE id = 'ag-u11-faiz';
UPDATE questions SET kavram = 'u11-teknik-borc', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-bilincli-borc';
UPDATE questions SET kavram = 'u11-teknik-borc', yedek = 0, etiketler = 'rehber' WHERE id = 'ag-u11-borc-backlog';
UPDATE questions SET kavram = 'u11-devops', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-dora';
UPDATE questions SET kavram = 'u11-devops', yedek = 0, etiketler = 'kavram' WHERE id = 'ag-u11-devops-tanim';
UPDATE questions SET kavram = 'u11-devops', yedek = 0, etiketler = 'sahada' WHERE id = 'ag-u11-dod-teknik';
