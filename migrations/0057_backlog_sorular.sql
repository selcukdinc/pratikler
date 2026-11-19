-- Bu dosya scripts/sorular-sql.ts ile icerik/backlog/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u1', 'backlog', 'Product Backlog''a Yakından Bakış', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u2', 'backlog', 'İş Hiyerarşisi: Theme, Epic, Feature, Story, Task', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u3', 'backlog', 'Vizyondan Backlog''a', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u4', 'backlog', 'User Story Nedir?', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u5', 'backlog', 'INVEST', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u6', 'backlog', 'Kabul Kriterleri', 6, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u7', 'backlog', 'Story Bölme', 7, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u8', 'backlog', 'Story Olmayan İşler', 8, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u9', 'backlog', 'Tahmin', 9, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u10', 'backlog', 'Sıralama ve Önceliklendirme', 10, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u11', 'backlog', 'Refinement ve Hazır Olma', 11, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bl-u12', 'backlog', 'Sürüm Planlama ve Yol Haritası', 12, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-tanim', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Scrum Rehberi 2020 Product Backlog''u nasıl tanımlar?', '{"choices":["Ürünü iyileştirmek için gerekenlerin sıralı ve sürekli gelişen listesi","Bir projenin baştan onaylanmış ve değişmeyen gereksinim listesi","Geliştiricilerin Sprint boyunca yaptıkları teknik görevlerin listesi","Paydaşların istediği bütün özelliklerin öncelik puanlarıyla dökümü"]}', '{"index":0}', 'Rehber''e göre Product Backlog, ürünü iyileştirmek için gerekenlerin **gelişen** (emergent) ve **sıralı** (ordered) listesidir. Baştan dondurulmuş bir gereksinim dokümanı değildir; ürün ve ortam değiştikçe değişir.', 1, '1. ünite · Rehber''de Product Backlog: tek kaynak, sıralı, sürekli gelişen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-tek-kaynak', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Rehber''e göre Scrum Takımı''nın üstlendiği işin tek kaynağı nedir?', '{"choices":["Product Backlog","Sprint Backlog","Paydaşların e-postaları","Teknik Liderlik''in yol haritası"]}', '{"index":0}', 'Rehber Product Backlog''u Scrum Takımı''nın üstlendiği **işin tek kaynağı** olarak tanımlar. Bir işin takıma "yan kapıdan" (e-posta, koridor sohbeti) değil Product Backlog''dan girmesi şeffaflığın ön koşuludur.', 1, '1. ünite · Rehber''de Product Backlog: tek kaynak, sıralı, sürekli gelişen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-sirali', 'backlog', 'bl-u1', 1, 'tf', 'derived', 'Rehber''e göre Product Backlog öğelerine yüksek, orta ve düşük öncelik etiketi verilmesi yeterlidir; tam bir sıra gerekmez.', '{}', '{"value":false}', 'Yanlış. Rehber "önceliklendirilmiş" değil **sıralı** (ordered) liste der. Üç öncelik kovası birçok öğeyi eşit bırakır; sıra ise hangisinin önce yapılacağını her öğe için söyler. 2011 sürümünden beri Rehber bu kelimeyi bilerek kullanır.', 2, '1. ünite · Rehber''de Product Backlog: tek kaynak, sıralı, sürekli gelişen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-hazir', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Rehber''e göre bir Product Backlog öğesi ne zaman Sprint Planning''de seçilmeye hazır sayılır?', '{"choices":["Scrum Takımı onu bir Sprint içinde Done yapabilecek durumdaysa","Teknik Liderlik onu imzalayıp onayladığında","Definition of Ready''deki bütün maddeler işaretlendiğinde","Öğenin story point tahmini 8 ya da daha az olduğunda"]}', '{"index":0}', 'Rehber: Scrum Takımı''nın bir Sprint içinde Done yapabileceği öğeler Sprint Planning''de seçilmeye hazır sayılır; bu şeffaflığa genelde refinement ile ulaşılır. Definition of Ready ve onay adımları Rehber''de yoktur (11. ünite).', 2, '1. ünite · Rehber''de Product Backlog: tek kaynak, sıralı, sürekli gelişen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-refinement', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Rehber''e göre Product Backlog refinement nedir?', '{"choices":["Öğeleri küçük ve kesin parçalara bölüp açıklama, sıra, büyüklük ekleme","Sprint sonunda biten öğeleri Product Backlog''dan silme toplantısı","Product Owner''ın paydaşlardan yeni istek topladığı üç aylık oturum","Developers''ın story''leri task''lara böldüğü Sprint Planning bölümü"]}', '{"index":0}', 'Rehber refinement''ı öğeleri **daha küçük ve kesin** parçalara bölme ve onlara açıklama, sıra, büyüklük gibi ayrıntılar ekleme olarak tanımlar. Niteliklerin iş alanına göre değiştiğini de söyler.', 1, '1. ünite · Rehber''de Product Backlog: tek kaynak, sıralı, sürekli gelişen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-surekli', 'backlog', 'bl-u1', 1, 'tf', 'derived', 'Rehber''e göre refinement süren (ongoing) bir etkinliktir; Scrum''un beş etkinliğinden biri sayılmaz.', '{}', '{"value":true}', 'Doğru. Scrum''un etkinlikleri Sprint, Sprint Planning, Daily Scrum, Sprint Review ve Sprint Retrospective''dir. Refinement Rehber''de "süren bir etkinlik" olarak anılır ama ayrı bir time-box''lı etkinlik değildir. Takımlar çoğu zaman yine de düzenli bir refinement oturumu yapar.', 1, '1. ünite · Rehber''de Product Backlog: tek kaynak, sıralı, sürekli gelişen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-yuzde-on', 'backlog', 'bl-u1', 1, 'mcq', 'derived', '"Refinement, Developers''ın kapasitesinin en fazla %10''unu kullanır" cümlesi için hangisi doğrudur?', '{"choices":["2017 Rehberi''nde vardı, 2020 Rehberi''nden çıkarıldı","2020 Rehberi''nde kesin bir kural olarak yazar","Rehber''de hiç geçmedi; SAFe''in kuralıdır ve orada kalır","Kanban Rehberi''nin WIP kuralıdır"]}', '{"index":0}', '2017 Rehberi refinement''ın "genelde Developers''ın kapasitesinin %10''undan fazlasını kullanmadığını" söylüyordu. 2020 Rehberi bu sayıyı çıkardı; sahada hâlâ yaygın bir başlangıç ölçüsüdür.', 3, '1. ünite · Rehber''de Product Backlog: tek kaynak, sıralı, sürekli gelişen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-hesap-veren', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Rehber''e göre Product Backlog''un etkili yönetiminden kim hesap verir?', '{"choices":["Product Owner","Scrum Master","Developers","Tech Lead"]}', '{"index":0}', 'Rehber Product Owner''ı etkili Product Backlog yönetiminden **hesap veren** kişi olarak tanımlar: Product Goal''ü geliştirip iletmek, öğeleri oluşturup açıkça iletmek, sıralamak, backlog''un şeffaf, görünür ve anlaşılır olmasını sağlamak.', 1, '1. ünite · Product Backlog''un sahibi: kim hesap verir, kim ekler, kim tahmin eder', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-devretme', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Elif story yazma işinin bir kısmını Tech Lead Can''a bırakmak istiyor. Rehber''e göre hangisi doğrudur?', '{"choices":["Bırakabilir, ama Product Backlog''dan hesap veren yine Elif''tir","Bırakamaz; story''leri yalnızca Product Owner yazabilir","Bırakırsa hesap verebilirlik de Can''a geçer","Yalnızca Scrum Master''ın onayıyla bırakabilir"]}', '{"index":0}', 'Rehber: Product Owner bu işleri kendisi yapabilir ya da başkalarına bırakabilir; her durumda **hesap veren Product Owner olarak kalır**. Yani Can ya da Teknik Liderlik story yazabilir, ama sıra ve içerik üzerindeki son söz Elif''indir.', 2, '1. ünite · Product Backlog''un sahibi: kim hesap verir, kim ekler, kim tahmin eder', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-buyukluk', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Rehber''e göre Product Backlog öğelerinin büyüklüğünü (sizing) kim verir?', '{"choices":["İşi yapacak olan Developers","Product Owner","Scrum Master","Teknik Liderlik"]}', '{"index":0}', 'Rehber: büyüklükten **işi yapacak Developers** sorumludur. Product Owner ödünleşimleri anlamalarına ve seçmelerine yardım ederek onları etkileyebilir ama tahmini kendisi vermez.', 2, '1. ünite · Product Backlog''un sahibi: kim hesap verir, kim ekler, kim tahmin eder', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-degistirmek', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Yemekhane müdürü Nurten Hanım backlog''daki sırayı değiştirmek istiyor. Rehber''e göre doğru yol hangisi?', '{"choices":["Product Owner''ı ikna etmeye çalışmak","Sırayı araçta kendisi değiştirmek","Developers''a doğrudan Sprint''e almalarını söylemek","Scrum Master''dan sırayı değiştirmesini istemek"]}', '{"index":0}', 'Rehber: Product Owner''ın başarılı olması için bütün organizasyon onun kararlarına saygı göstermelidir; Product Backlog''u değiştirmek isteyenler bunu **Product Owner''ı ikna etmeye çalışarak** yapar.', 1, '1. ünite · Product Backlog''un sahibi: kim hesap verir, kim ekler, kim tahmin eder', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-komite', 'backlog', 'bl-u1', 1, 'tf', 'derived', 'Rehber''e göre büyük bir üründe Product Owner rolü üç kişilik bir komiteye verilebilir.', '{}', '{"value":false}', 'Yanlış. Rehber Product Owner''ın **bir kişi, komite değil** olduğunu açıkça söyler. Product Owner birçok paydaşın ihtiyacını backlog''da temsil edebilir ama son karar tek kişidedir.', 1, '1. ünite · Product Backlog''un sahibi: kim hesap verir, kim ekler, kim tahmin eder', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-rehber-nitelikleri', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Rehber refinement sırasında öğelere eklenen ayrıntılara hangi örnekleri verir?', '{"choices":["Açıklama, sıra ve büyüklük","Story point, kabul kriteri ve persona","Epic, feature ve task","Sorumlu kişi, bitiş tarihi ve saat tahmini"]}', '{"index":0}', 'Rehber refinement''ta eklenen ayrıntılara **açıklama, sıra ve büyüklük** örneklerini verir ve niteliklerin iş alanına göre değiştiğini söyler. Story point, kabul kriteri ya da epic gibi biçimler yaygındır ama Rehber''de şart değildir.', 1, '1. ünite · Product Backlog öğesinin nitelikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-bicim', 'backlog', 'bl-u1', 1, 'tf', 'derived', 'Rehber''e göre her Product Backlog öğesi "Bir ... olarak ... istiyorum" kalıbıyla yazılmış bir user story olmalıdır.', '{}', '{"value":false}', 'Yanlış. Rehber öğelerin biçimini şart koşmaz; user story Rehber''de geçmez. Bir hata kaydı, bir deney, bir teknik iyileştirme de Product Backlog öğesi olabilir. User story en yaygın biçimdir (4. ünite).', 1, '1. ünite · Product Backlog öğesinin nitelikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-turler', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Kampüs Yemekhanesi''nin backlog''undaki hangi öğe bir Product Backlog öğesi olamaz?', '{"choices":["Hiçbiri; üçü de Product Backlog öğesi olabilir","Bakiye ekranında kuruşların yanlış yuvarlanması hatası","Ödeme kütüphanesini yeni sürüme geçirme işi","Kuyruk tahminini iki yemekhanede deneme"],"sabit":true}', '{"index":0}', 'Product Backlog "ürünü iyileştirmek için gereken" her şeyi içerebilir: yeni özellik, hata, teknik iş, deney, bilgi toplama. Biçim ve tür serbesttir; önemli olan öğenin sıralı ve şeffaf olmasıdır.', 2, '1. ünite · Product Backlog öğesinin nitelikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-alana-gore', 'backlog', 'bl-u1', 1, 'tf', 'derived', 'Rehber''e göre Product Backlog öğelerinin nitelikleri iş alanına göre değişebilir.', '{}', '{"value":true}', 'Doğru. Rehber açıklama, sıra ve büyüklüğü örnek verir ve niteliklerin **iş alanına göre sıklıkla değiştiğini** söyler. Bir mobil uygulama takımı ile bir donanım takımı öğelerini farklı alanlarla tutabilir.', 1, '1. ünite · Product Backlog öğesinin nitelikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-taahhut', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Rehber''de Product Backlog''un taahhüdü (commitment) hangisidir?', '{"choices":["Product Goal","Sprint Goal","Definition of Done","Definition of Ready"]}', '{"index":0}', 'Her artefaktın bir taahhüdü vardır: Product Backlog ↔ **Product Goal**, Sprint Backlog ↔ Sprint Goal, Increment ↔ Definition of Done. Definition of Ready Rehber''de yoktur.', 1, '1. ünite · Product Goal ve backlog''un yönü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-nerede', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Rehber''e göre Product Goal nerede durur?', '{"choices":["Product Backlog''un içinde; geri kalan öğeler onu gerçekleştirmek için gelişir","Sprint Backlog''un başında; her Sprint Planning''de yeniden yazılır","Ayrı bir strateji belgesinde; Product Backlog''la bir bağı yoktur","Definition of Done''ın son maddesinde; ürünün kalite hedefidir"]}', '{"index":0}', 'Rehber: Product Goal **Product Backlog''un içindedir**; backlog''un geri kalanı Product Goal''ü gerçekleştirecek "ne"yi tanımlamak için ortaya çıkar. Bu yüzden her öğe için "bu bizi Product Goal''e yaklaştırıyor mu?" diye sorulabilir.', 2, '1. ünite · Product Goal ve backlog''un yönü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-bir-anda', 'backlog', 'bl-u1', 1, 'tf', 'derived', 'Rehber''e göre Scrum Takımı bir Product Goal''ü gerçekleştirmeden ya da bırakmadan bir sonrakine geçmez.', '{}', '{"value":true}', 'Doğru. Rehber: Product Goal takımın uzun vadeli hedefidir; takım bir sonrakini üstlenmeden önce birini **gerçekleştirmeli ya da bırakmalıdır**. Aynı anda birden çok Product Goal yoktur.', 2, '1. ünite · Product Goal ve backlog''un yönü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-yemekhane-hedefi', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Kampüs Yemekhanesi için hangisi iyi bir Product Goal''e en yakındır?', '{"choices":["Öğle saatinde sırada bekleme süresini yarıya indirmek","Uygulamaya on iki yeni ekran eklemek","Mart sonuna kadar backlog''daki bütün story''leri bitirmek","Ödeme modülünü yeni çatıya taşımak"]}', '{"index":0}', 'Product Goal ürünün **gelecekteki istenen durumunu** anlatır; bir çıktı listesi (on iki ekran) ya da bir teknik iş değil, kullanıcı için bir sonuçtur. "Sırada bekleme yarıya insin" hedefi, hangi öğenin backlog''un üstüne çıkacağına karar vermeyi kolaylaştırır (3. ünite, OKR).', 2, '1. ünite · Product Goal ve backlog''un yönü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-ust-alt', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Backlog buzdağı benzetmesine göre öğelerin ayrıntı düzeyi nasıl dağılır?', '{"choices":["Üstteki yakında yapılacak öğeler ince ve ayrıntılı, alttakiler büyük ve kaba","Bütün öğeler aynı ayrıntıda yazılır; yoksa tahmin yapılamaz","Alttaki öğeler en ayrıntılıdır, çünkü en uzun süre beklerler","Ayrıntı düzeyi öğenin kim tarafından yazıldığına bağlıdır"]}', '{"index":0}', 'Buzdağının görünen ucu yakın Sprint''lerin işidir: küçük, ayrıntılı, tahminli. Aşağı indikçe öğeler büyür ve kabalaşır (feature, epic). Uzak bir öğeyi bugün ayrıntılandırmak, o gün gelene kadar değişeceği için çoğu zaman israftır.', 1, '1. ünite · Backlog buzdağı: üstte ince, altta kaba öğeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-erken-ayrinti', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Elif altı ay sonra yapılacak "yemek değerlendirme" epic''inin 40 story''sini bütün kabul kriterleriyle bugün yazmak istiyor. En önemli sakıncası nedir?', '{"choices":["O güne kadar çoğu değişeceği için emeğin büyük kısmı boşa gider","Story sayısı fazla olunca araç yavaşlar","Rehber altı aydan uzun vadeli öğe yazmayı yasaklar","Developers bu story''lere tahmin vermeyi reddedebilir"]}', '{"index":0}', 'Lean''in israf türlerinden "fazla işleme" ve "stok": uzak öğeleri erken ayrıntılandırmak, öğrenme geldikçe yeniden yazmayı gerektirir. Buzdağı yaklaşımında ayrıntı **son sorumlu anda** (last responsible moment) eklenir.', 2, '1. ünite · Backlog buzdağı: üstte ince, altta kaba öğeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-kac-sprint', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Sahada yaygın bir ölçüye göre backlog''un üst kısmında kaç Sprint''lik iş Sprint''e hazır (ince ve anlaşılmış) tutulur?', '{"choices":["Genelde bir iki Sprint''lik","Bütün sürümün işi","Yalnızca bu Sprint''in işi","En az altı Sprint''lik"]}', '{"index":0}', 'Yaygın ölçü bir iki Sprint''liktir: Sprint Planning''de seçim yapacak kadar seçenek olur, ama değişecek uzak işler için emek harcanmaz. Rehber''de böyle bir sayı yoktur; takım kendi ritmine göre ayarlar.', 2, '1. ünite · Backlog buzdağı: üstte ince, altta kaba öğeler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-harfler', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'DEEP kısaltması iyi bir Product Backlog''un hangi dört özelliğini anlatır?', '{"choices":["Uygun ayrıntıda, tahminli, gelişen, sıralı","Ayrıntılı, kesin, eksiksiz, onaylı","Bağımsız, konuşulabilir, değerli, küçük","Tanımlı, test edilmiş, belgelenmiş, yayınlanmış"]}', '{"index":0}', 'DEEP (Roman Pichler ve Mike Cohn): Detailed appropriately (uygun ayrıntıda), Estimated (tahminli), Emergent (gelişen), Prioritized (sıralı). "Bağımsız, konuşulabilir, değerli, küçük" tek bir story için INVEST''in harfleridir (5. ünite).', 1, '1. ünite · DEEP: uygun ayrıntı, tahmin, gelişme, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-uygun-ayrinti', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'DEEP''teki "uygun ayrıntıda" (Detailed appropriately) ne demektir?', '{"choices":["Yakında yapılacak öğe ayrıntılı, uzaktaki öğe kaba olur","Her öğe en az bir sayfa açıklama içerir","Ayrıntıyı yalnızca Product Owner yazar","Öğeler kabul kriteri olmadan backlog''a giremez"]}', '{"index":0}', '"Uygun" kelimesi önemlidir: ayrıntı öğenin sırasıyla orantılıdır. Bu, buzdağı benzetmesinin DEEP''teki karşılığıdır.', 2, '1. ünite · DEEP: uygun ayrıntı, tahmin, gelişme, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-emergent', 'backlog', 'bl-u1', 1, 'tf', 'derived', 'DEEP''e göre iyi bir backlog''un içeriği sürüm başında dondurulur; "gelişen" (emergent) yalnızca yeni öğe eklenebileceği anlamına gelir.', '{}', '{"value":false}', 'Yanlış. Emergent; öğelerin eklenebileceği, çıkarılabileceği, bölünebileceği, sırasının değişebileceği anlamına gelir. Rehber de Product Backlog''u "gelişen" liste diye tanımlar.', 1, '1. ünite · DEEP: uygun ayrıntı, tahmin, gelişme, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-tahmin-hepsi', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'DEEP''teki "tahminli" (Estimated) özelliği için hangisi doğrudur?', '{"choices":["Üstteki öğelerin tahmini daha kesin, alttakilerinki kaba olabilir","Her öğenin saat cinsinden kesin tahmini olmalıdır","Tahmini Product Owner verir, Developers onaylar","Yalnızca epic''ler tahmin edilir, story''ler edilmez"]}', '{"index":0}', 'Alttaki büyük öğeler T-shirt boyu ya da kaba bir puanla, üstteki story''ler daha kesin puanla tahmin edilir. Amaç sıralama ve sürüm planı için yeterli bilgiye sahip olmaktır (9. ünite).', 2, '1. ünite · DEEP: uygun ayrıntı, tahmin, gelişme, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-mezarlik', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Squad''ın backlog''unda 640 öğe var ve en eskisi üç yıllık. Bu koku en iyi hangi adla anılır?', '{"choices":["Backlog mezarlığı","Yürüyen iskelet","Story map","Teknik borç"]}', '{"index":0}', 'Hiç yapılmayacak öğelerin biriktiği, kimsenin okumadığı backlog''a mezarlık denir. Şeffaflığı azaltır: önemli olan kalabalıkta kaybolur. Çare, belli bir yaştan büyük ve sırası hiç gelmeyen öğeleri düzenli olarak silmektir; gerçekten önemliyse yeniden gelir.', 1, '1. ünite · Backlog kokuları: mezarlık, kopya öğeler, "bir gün" listesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-silmek', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Elif bir yıldır hiç sıranın üstüne çıkmamış 200 öğeyi silmeyi düşünüyor. Hangisi en iyi gerekçedir?', '{"choices":["Önemli olan yeniden gelir; kalabalık asıl işi görünmez kılar","Rehber bir yıldan eski öğelerin silinmesini zorunlu kılar","Silinen öğeler takımın velocity''sini artırır","Öğe sayısı azalınca Product Goal kendiliğinden gerçekleşir"]}', '{"index":0}', 'Silmek bir kayıp değildir: önemli bir ihtiyaç tekrar dile getirilir. 640 öğelik bir liste ise şeffaflığı düşürür ve refinement''ı yavaşlatır. Silmeden önce paydaşlara haber vermek ya da bir arşiv etiketi kullanmak sahada yaygındır.', 2, '1. ünite · Backlog kokuları: mezarlık, kopya öğeler, "bir gün" listesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-kopya', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Aynı ihtiyacın backlog''da üç farklı cümleyle üç kez yazılmış olması hangi DEEP özelliğini en çok zedeler?', '{"choices":["Sıralı olmayı","Tahminli olmayı","Gelişen olmayı","Hiçbirini"]}', '{"index":0}', 'Kopya öğeler sırayı bulandırır: biri üstte, biri altta durur, hangisinin geçerli olduğu belli olmaz. Ayrıca tahmin ve iş iki kez sayılabilir. Refinement''ta kopyaları birleştirmek temel temizlik işidir.', 1, '1. ünite · Backlog kokuları: mezarlık, kopya öğeler, "bir gün" listesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u1-yan-kapi', 'backlog', 'bl-u1', 1, 'mcq', 'derived', 'Bilgi işlem müdürü Sinan Bey işleri backlog''a girmeden doğrudan Mert''e mesajla yolluyor. En çok hangisi zarar görür?', '{"choices":["Backlog''un işin tek kaynağı olması ve şeffaflık","Daily Scrum''un on beş dakikalık time-box''ı","Definition of Done''ın kalite ölçütleri","Sprint Review''un paydaş listesi"]}', '{"index":0}', 'Backlog dışından gelen işler görünmez kalır: Product Owner sırayı, takım kapasitesini, paydaşlar ilerlemeyi göremez. Çare Sinan Bey''in isteğini Elif''e yönlendirmek ve backlog''a öğe olarak yazmaktır.', 2, '1. ünite · Backlog kokuları: mezarlık, kopya öğeler, "bir gün" listesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-rehberde-mi', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Epic → Feature → Story → Task hiyerarşisi için hangisi doğrudur?', '{"choices":["Scrum Rehberi''nde yoktur; SAFe ve iş takip araçları yaygınlaştırdı","Scrum Rehberi 2020''nin Product Backlog bölümünde tanımlıdır","Agile Manifesto''nun 12 ilkesinden biridir","Kanban Rehberi''nin iş akışı tanımının parçasıdır"]}', '{"index":0}', 'Rehber yalnızca "Product Backlog öğesi" der. Epic, feature, story ve task seviyeleri XP''den (story), Mike Cohn''un yazılarından (epic, theme), SAFe''ten ve Jira, Azure Boards, ClickUp gibi araçlardan gelir. Faydalıdır ama Scrum''un kuralı değildir.', 1, '2. ünite · Theme, epic, feature, story ve task: seviyelerin amacı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-buyukten', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Hangi sıra en büyükten en küçüğe doğru yaygın hiyerarşiyi verir?', '{"choices":["Theme → Epic → Feature → Story → Task","Epic → Theme → Story → Feature → Task","Feature → Epic → Task → Story → Theme","Story → Feature → Epic → Theme → Task"]}', '{"index":0}', 'En geniş seviye theme (odak alanı), sonra birden çok Sprint süren epic, kullanıcıya görünen yetenek olarak feature, bir Sprint''e sığan story ve story''yi bitirmek için teknik adım olan task.', 1, '2. ünite · Theme, epic, feature, story ve task: seviyelerin amacı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-theme', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Kampüs Yemekhanesi''nin backlog''unda "Erişilebilirlik" etiketi hem menü ekranındaki hem ödeme ekranındaki öğelere konmuş. Bu en iyi hangi seviyeye karşılık gelir?', '{"choices":["Theme","Epic","Feature","Task"]}', '{"index":0}', 'Theme, farklı epic ve story''leri kesen ortak bir odak alanıdır. Mike Cohn theme''i "ilgili story''lerin topluluğu" diye tanımlar; çoğu araçta bir etiketle izlenir.', 2, '2. ünite · Theme, epic, feature, story ve task: seviyelerin amacı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-seviye-bul-1', 'backlog', 'bl-u2', 2, 'mcq', 'derived', '"Öğrenciler yemekhane bakiyelerini uygulamadan yükleyip harcayabilsin" (birkaç ay sürecek, ödeme, bakiye, iade gibi parçaları var). Bu hangi seviyededir?', '{"choices":["Epic","Story","Task","Theme"]}', '{"index":0}', 'Birkaç ay sürecek, içinde birden çok yetenek (bakiye yükleme, harcama, iade) olan bir hedef epic''tir. Önce feature''lara, sonra story''lere bölünür.', 1, '2. ünite · Theme, epic, feature, story ve task: seviyelerin amacı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-seviye-bul-2', 'backlog', 'bl-u2', 2, 'mcq', 'derived', '"Öğrenci olarak bakiyemi kartla 50 TL yükleyebilmek istiyorum, böylece kasada nakit aramam" hangi seviyededir?', '{"choices":["Story","Epic","Theme","Task"]}', '{"index":0}', 'Bir kullanıcının tek bir ihtiyacını faydasıyla anlatan, bir Sprint''e sığabilecek öğe story''dir. "Bakiye yükleme" feature''ının bir parçasıdır.', 1, '2. ünite · Theme, epic, feature, story ve task: seviyelerin amacı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-seviye-bul-3', 'backlog', 'bl-u2', 2, 'mcq', 'derived', '"Ödeme sağlayıcısının test anahtarlarını DevOps kasasına ekle" hangi seviyededir?', '{"choices":["Task","Feature","Epic","Story"]}', '{"index":0}', 'Kullanıcıya doğrudan değer söylemeyen, bir story''yi bitirmek için gereken teknik adım task''tır. Story''nin altında, Sprint Backlog''daki planın parçası olarak durur.', 1, '2. ünite · Theme, epic, feature, story ve task: seviyelerin amacı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-cohn', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Mike Cohn''un tanımında epic nedir?', '{"choices":["Bir Sprint''e sığmayacak kadar büyük user story","Ancak yatırım kurulunun onayladığı stratejik girişim","Bir story''nin altındaki teknik görevlerin listesi","Bir sürümdeki bütün hataların toplandığı öğe"]}', '{"index":0}', 'Mike Cohn epic''i **büyük bir user story** olarak tanımlar: bölünmesi gereken, tek Sprint''e sığmayan story. SAFe''te ise epic, yatırım kararı gerektiren büyük bir girişimdir (aşağıdaki soru). Aynı kelimenin iki farklı ağırlığı vardır.', 2, '2. ünite · Epic: büyük, birden çok Sprint süren hedef', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-safe-epic', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'SAFe''te bir epic''i diğer seviyelerden ayıran nedir?', '{"choices":["Portföy düzeyinde bir iş gerekçesiyle değerlendirilip onaylanması","Bir ekibin tek iterasyonda bitirebilecek kadar küçük olması","Yalnızca teknik altyapı işlerini kapsaması","Scrum Master tarafından yazılması"]}', '{"index":0}', 'SAFe''te epic büyük bir çözüm geliştirme girişimidir; portföy Kanban''ında ilerler ve **Lean iş gerekçesiyle** (Lean business case) değerlendirilip onaylanır. Ayrıntısı 3. pratikte (Ölçekli Agile).', 3, '2. ünite · Epic: büyük, birden çok Sprint süren hedef', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-bitmeyen', 'backlog', 'bl-u2', 2, 'mcq', 'derived', '"Uygulama iyileştirmeleri" adlı epic iki yıldır açık ve altına sürekli yeni story ekleniyor. Sorun nedir?', '{"choices":["Bir sonucu ve bitiş koşulu olmadığı için epic değil bir kova olmuş","Epic''lerin en fazla bir Sprint sürmesi gerekir","Epic''in altına story değil yalnızca task eklenebilir","Epic''leri yalnızca Scrum Master kapatabilir"]}', '{"index":0}', 'İyi bir epic bir hedef taşır ve biter (ör. "öğle saatinde kuyruk süresini 10 dakikanın altına indir"). Bitiş koşulu olmayan epic bir klasöre döner; ilerlemeyi ve değeri ölçmek imkânsızlaşır.', 2, '2. ünite · Epic: büyük, birden çok Sprint süren hedef', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-hipotez', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Teknik Liderlik bir epic yazarken hangisini eklerse epic''in değeri en iyi sınanır?', '{"choices":["Beklenen sonucu ve bunun nasıl ölçüleceğini","Epic''in altındaki bütün story''lerin saat tahminini","Epic''i hangi geliştiricilerin yapacağını","Epic''in kaç ekran içereceğini"]}', '{"index":0}', 'Epic bir yatırımdır; "Bunu yaparsak şu ölçü şu kadar değişir" biçiminde bir hipotez, epic''i yarıda bırakma ya da devam etme kararını mümkün kılar. SAFe de epic için hipotez ifadesi ve ön koşul ölçütleri ister.', 2, '2. ünite · Epic: büyük, birden çok Sprint süren hedef', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-tanim', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Feature için en iyi açıklama hangisidir?', '{"choices":["Kullanıcıya görünen, birkaç story''den oluşan bir yetenek","Bir story''yi bitirmek için yapılan tek bir teknik adım","Birden çok yıl süren stratejik hedef","Bir hatanın düzeltilmesini anlatan kayıt"]}', '{"index":0}', 'Feature, ürünün kullanıcıya sunduğu bir yetenektir (ör. "bakiye yükleme", "menü bildirimleri"). Epic''ten küçük, story''den büyüktür; genelde birkaç Sprint içinde biter.', 1, '2. ünite · Feature: kullanıcıya görünen yetenek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-safe-feature', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'SAFe''te bir feature''ın büyüklüğü için hangisi beklenir?', '{"choices":["Bir Agile Release Train''in bir PI içinde teslim edebileceği kadar","Tek bir geliştiricinin bir günde bitirebileceği kadar","Bütün portföyün bir yılda bitirebileceği kadar","Bir Sprint Review''da gösterilebilecek tek bir ekran kadar"]}', '{"index":0}', 'SAFe''te feature, bir Agile Release Train''in **bir PI** (Program Increment, genelde 8-12 hafta) içinde teslim edebileceği büyüklüktedir; story ise ekibin bir iterasyonuna sığar.', 3, '2. ünite · Feature: kullanıcıya görünen yetenek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-fayda', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'SAFe''in feature yazımında önerdiği ikili hangisidir?', '{"choices":["Fayda hipotezi ve kabul kriterleri","Saat tahmini ve sorumlu kişi","Persona ve ekran tasarımı","Teknik mimari ve veri tabanı şeması"]}', '{"index":0}', 'SAFe feature''ı kısa bir açıklama, bir **fayda hipotezi** (benefit hypothesis) ve **kabul kriterleriyle** yazmayı önerir. Böylece feature''ın neden yapıldığı ve ne zaman tamam sayılacağı baştan bellidir.', 2, '2. ünite · Feature: kullanıcıya görünen yetenek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-bilesen', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Hangisi feature değil, bir bileşen ya da katman işidir?', '{"choices":["Ödeme servisinin veri tabanı tablolarını hazırlamak","Öğrencilerin menüyü bir gün önceden görebilmesi","Yemek bitince bekleyenlere bildirim gitmesi","Bakiyenin kartla yüklenebilmesi"]}', '{"index":0}', 'Feature kullanıcının gözünden bir yetenektir. "Veri tabanı tablolarını hazırla" tek başına kullanıcıya bir şey sunmaz; bir feature''ın ya da story''nin içindeki teknik iştir. Katman katman bölmenin zararı 7. ünitede.', 2, '2. ünite · Feature: kullanıcıya görünen yetenek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-story-task', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Story ile task arasındaki temel fark nedir?', '{"choices":["Story kullanıcı değerini anlatır, task onu üreten teknik adımdır","Story''yi Developers, task''ı Product Owner yazar","Story saatle, task story point ile tahmin edilir","Story Sprint Backlog''da, task Product Backlog''da durur"]}', '{"index":0}', 'Story "ne ve neden"i kullanıcının dilinde anlatır; task "nasıl"ın bir parçasıdır (API ucunu yaz, testi ekle). Task''lar genelde Sprint Planning''de ya da Sprint içinde Developers tarafından çıkarılır.', 1, '2. ünite · Task: story''nin teknik adımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-bir-gun', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Rehber Sprint Planning''deki "Nasıl?" konusunda öğelerin sıklıkla neye bölündüğünü söyler?', '{"choices":["Bir gün ya da daha kısa sürecek daha küçük iş öğelerine","En fazla 13 puanlık story''lere","Bir haftalık feature''lara","Her geliştiriciye bir tane düşecek kadar parçaya"]}', '{"index":0}', 'Rehber: Developers seçilen öğeleri Done bir Increment''e dönüştürmeyi planlar; bu sıklıkla öğeleri **bir gün ya da daha kısa** sürecek iş öğelerine bölerek yapılır. Rehber bu parçalara "task" demez ama sahada çoğunlukla task''tır.', 2, '2. ünite · Task: story''nin teknik adımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-task-backlog', 'backlog', 'bl-u2', 2, 'tf', 'derived', 'Bir story''nin bütün task''ları Sprint başlamadan önce Product Owner tarafından yazılmalıdır.', '{}', '{"value":false}', 'Yanlış. Task''lar "nasıl"ın parçasıdır ve Developers''a aittir; Sprint Planning''de ya da Sprint içinde, iş ilerledikçe çıkarılır. Sprint Backlog Developers''ın planıdır ve Sprint boyunca güncellenir.', 2, '2. ünite · Task: story''nin teknik adımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-alt-gorev', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Sprint ortasında Ayşe bir story için yeni bir teknik adım fark ediyor. Ne yapması en doğrudur?', '{"choices":["Story''nin altına yeni bir task ekleyip planı güncellemek","Bir sonraki Sprint Planning''i beklemek","Product Owner''dan yeni bir story yazmasını istemek","Teknik Liderlik''in onayını almak"]}', '{"index":0}', 'Sprint Backlog Sprint boyunca Developers tarafından güncellenir; yeni bir teknik adım task olarak eklenir. Story''nin kapsamı değişmiyorsa Product Owner''a ya da onaya gerek yoktur.', 1, '2. ünite · Task: story''nin teknik adımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-azure', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Azure Boards''un Agile süreç şablonunda hiyerarşi nasıldır?', '{"choices":["Epic → Feature → User Story → Task","Theme → Epic → Sub-task","Initiative → Story → Bug","Portfolio → Capability → Task"]}', '{"index":0}', 'Azure Boards''un Agile şablonu Epic → Feature → User Story → Task düzenini kullanır; Scrum şablonunda User Story yerine "Product Backlog Item" geçer. Seviyeler aynı kalır, adlar değişir.', 2, '2. ünite · Çerçevelerde ve araçlarda hiyerarşi: SAFe, Jira, Azure Boards, ClickUp', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-jira', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Jira''nın varsayılan düzeninde hiyerarşi nasıldır?', '{"choices":["Epic → Story, Task ya da Bug → Sub-task","Feature → Epic → Story → Task","Theme → Feature → Capability","Product Goal → Sprint Goal → Task"]}', '{"index":0}', 'Jira''nın varsayılan düzeninde epic''in altında story, task ve bug aynı seviyededir; onların altında sub-task vardır. Feature ya da initiative gibi ek seviyeler ücretli planlarda ya da özel ayarla eklenir.', 2, '2. ünite · Çerçevelerde ve araçlarda hiyerarşi: SAFe, Jira, Azure Boards, ClickUp', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-safe-sira', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'SAFe''in büyük çözümler için kullandığı tam hiyerarşi hangisidir?', '{"choices":["Epic → Capability → Feature → Story","Theme → Feature → Epic → Story","Initiative → Epic → Sub-task","Epic → Story → Feature → Task"]}', '{"index":0}', 'SAFe''te portföy epic''leri büyük çözümlerde önce **capability**''lere (birden çok Agile Release Train''e yayılan yetenek), sonra feature''lara, en son story''lere bölünür. Tek bir ART''ta capability seviyesi atlanır.', 3, '2. ünite · Çerçevelerde ve araçlarda hiyerarşi: SAFe, Jira, Azure Boards, ClickUp', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-clickup', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'ClickUp''ta epic ve feature seviyeleri en sık nasıl kurulur?', '{"choices":["Özel görev türleri ya da klasör ve listelerle, ilişkilerle bağlanarak","Yalnızca etiketlerle; başka yolu yoktur","Sprint Backlog''un sütunları olarak","Ayrı bir hesapta, her seviyeye bir çalışma alanı açılarak"]}', '{"index":0}', 'ClickUp''ın kendi düzeni Space → Folder → List → Task → Subtask''tır; epic ve feature gibi seviyeler genelde **özel görev türleri** (custom task types) ya da klasör ve listelerle kurulur, görevler arası ilişkilerle bağlanır. Aracın adları farklı olsa da hiyerarşinin mantığı aynıdır.', 2, '2. ünite · Çerçevelerde ve araçlarda hiyerarşi: SAFe, Jira, Azure Boards, ClickUp', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-ayni-mantik', 'backlog', 'bl-u2', 2, 'tf', 'derived', 'Farklı araçlarda seviyelerin adı değişse de (User Story, Product Backlog Item, Task) asıl önemli olan her seviyenin amacının takımda ortak anlaşılmasıdır.', '{}', '{"value":true}', 'Doğru. Bir takımda "feature" bir ekran, öbüründe bir çeyreklik hedef olabilir. Takımın ve Teknik Liderlik''in her seviyenin ne anlama geldiğini, büyüklüğünü ve kimin yazdığını açıkça yazması karışıklığı önler.', 1, '2. ünite · Çerçevelerde ve araçlarda hiyerarşi: SAFe, Jira, Azure Boards, ClickUp', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-teknik-liderlik', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Squad''da Teknik Liderlik epic ve feature yazıyor, Elif story yazıp onaya götürüyor. Rehber''le en çok hangi noktada gerilim olur?', '{"choices":["Hesap veren Product Owner''ın kararlarının başkasına bağlanması","Epic ve feature kelimelerinin Rehber''de geçmemesi","Story''lerin Developers yerine Product Owner tarafından yazılması","Teknik Liderlik''in Sprint Review''a katılması"]}', '{"index":0}', 'Rehber''e göre Product Owner işi başkalarına bırakabilir ama **hesap veren o kalır** ve organizasyon onun kararlarına saygı göstermelidir. Onay adımı Product Owner''ın kararını fiilen başkasına bağlarsa hesap verebilirlik bulanıklaşır. Faydaları ve riskleri 11. ünitede.', 2, '2. ünite · Hiyerarşide kim yazar, kim onaylar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-herkes-yazabilir', 'backlog', 'bl-u2', 2, 'tf', 'derived', 'Sahada Product Backlog''a öğeyi yalnızca Product Owner değil Developers ve paydaşlar da önerebilir; sıralama kararı Product Owner''dadır.', '{}', '{"value":true}', 'Doğru. İyi bir story çoğu zaman bir geliştiricinin ya da paydaşın fark ettiği bir ihtiyaçtan doğar. Rehber kimin yazdığını değil, kimin hesap verdiğini tanımlar: Product Owner.', 1, '2. ünite · Hiyerarşide kim yazar, kim onaylar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-birlikte', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Teknik Liderlik''in yazdığı "Kuyruk tahmini" feature''ını story''lere bölmenin en iyi yolu hangisidir?', '{"choices":["Elif, Can ve birkaç geliştiricinin birlikte bölmesi","Elif''in tek başına bölüp takıma vermesi","Teknik Liderlik''in bütün story''leri yazıp takıma göndermesi","Her geliştiricinin kendi parçasını ayrı ayrı yazması"]}', '{"index":0}', 'Bölme bir iş birliği işidir: Product Owner değeri ve önceliği, Developers teknik riski ve bağımlılıkları bilir. Birlikte bölünen story''ler hem değerli hem yapılabilir olur (7. ünite).', 2, '2. ünite · Hiyerarşide kim yazar, kim onaylar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-kucuk-urun', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Üç kişilik bir takımın iki aylık küçük bir iç aracı için dört seviyeli (epic, feature, story, task) hiyerarşi kurması hakkında en iyi değerlendirme hangisidir?', '{"choices":["Muhtemelen gereksiz; düz bir sıralı story listesi yeter","Zorunludur; seviye olmadan Scrum uygulanamaz","Yararlıdır, ne kadar çok seviye o kadar şeffaflık","Yalnızca epic seviyesi atlanırsa kabul edilebilir"]}', '{"index":0}', 'Hiyerarşi bir araçtır; her seviye bakım ister (bağlantılar, durumlar, raporlar). Küçük bir üründe sıralı bir liste daha şeffaftır. Seviyeler, büyük bir ürünü ya da birden çok takımı izlemek gerektiğinde değer katar.', 2, '2. ünite · Hiyerarşi ne zaman gereksiz ya da zararlı?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u2-rapor-icin', 'backlog', 'bl-u2', 2, 'mcq', 'derived', 'Hangisi hiyerarşinin zarar vermeye başladığının işaretidir?', '{"choices":["Takım vaktinin çoğunu öğeleri seviyelere bağlamaya harcıyor","Her story bir feature''a, her feature bir epic''e bağlı","Epic''lerin ölçülebilir bir bitiş koşulu var","Task''ları Sprint içinde Developers kendileri ekliyor"]}', '{"index":0}', 'Hiyerarşi rapor üretmek için büyüdüğünde bakımı takımın işine dönüşür: "Bu story hangi feature''a ait?" tartışması değer üretmez. Ölçü, hiyerarşinin karar vermeye yardım edip etmediğidir.', 2, '2. ünite · Hiyerarşi ne zaman gereksiz ya da zararlı?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-vizyon-goal', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Ürün vizyonu ile Product Goal arasındaki ilişki en iyi hangisiyle anlatılır?', '{"choices":["Vizyon uzun vadeli yöndür, Product Goal o yolda somut bir hedef","İkisi aynı şeydir; Rehber vizyona Product Goal der","Product Goal vizyondan daha geniş ve uzun vadelidir","Vizyon Sprint''e, Product Goal bütün ürüne aittir"]}', '{"index":0}', 'Vizyon ürünün neden var olduğunu ve uzun vadede kime ne vaat ettiğini söyler; Rehber''de geçmez. Product Goal ürünün gelecekteki istenen durumudur ve bir sonrakine geçmeden önce gerçekleştirilir; vizyona giden yolun bir durağıdır.', 2, '3. ünite · Ürün vizyonu ve Product Goal', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-asansor', 'backlog', 'bl-u3', 3, 'mcq', 'derived', '"... için, ... ihtiyacı olan, [ürün] bir ...''dır ve ... sağlar. ...''dan farklı olarak ..." vizyon kalıbı hangi kaynaktan yaygınlaştı?', '{"choices":["Geoffrey Moore''un Crossing the Chasm kitabından","Scrum Rehberi''nin Product Goal bölümünden","Agile Manifesto''nun 12 ilkesinden","Kanban Rehberi''nin iş akışı tanımından"]}', '{"index":0}', 'Bu "asansör konuşması" kalıbı Geoffrey Moore''un *Crossing the Chasm* (1991) kitabından gelir: hedef müşteri, ihtiyaç, ürün kategorisi, ana fayda ve rakipten fark. Product Owner''lar vizyonu tek cümlede sınamak için kullanır.', 2, '3. ünite · Ürün vizyonu ve Product Goal', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-vision-board', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Roman Pichler''in Product Vision Board''unda vizyonun altında hangi dört alan bulunur?', '{"choices":["Hedef kitle, ihtiyaçlar, ürün, iş hedefleri","Epic, feature, story, task","Kapsam, zaman, maliyet, kalite","Şeffaflık, denetim, uyarlama, cesaret"]}', '{"index":0}', 'Product Vision Board vizyon cümlesinin altında **hedef kitle** (kim), **ihtiyaçlar** (hangi sorun), **ürün** (öne çıkan özellikler) ve **iş hedefleri** (şirkete faydası) alanlarını tek sayfada toplar.', 2, '3. ünite · Ürün vizyonu ve Product Goal', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-yemekhane-vizyon', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Kampüs Yemekhanesi için hangisi bir vizyon cümlesine en yakındır?', '{"choices":["Kampüste herkes yemeğini sıra beklemeden ve israfsız yesin","Uygulamanın ilk sürümü Mart ayında yayına girsin","Ödeme ekranı baştan sona yeniden tasarlansın","Squad her Sprint en az 40 puan teslim etsin"]}', '{"index":0}', 'Vizyon kullanıcı için uzun vadeli bir değişimi anlatır. Tarih, ekran ya da hız hedefleri vizyon değil plan ya da ölçüdür; vizyon bunlardan hangisinin anlamlı olduğuna karar vermeye yardım eder.', 1, '3. ünite · Ürün vizyonu ve Product Goal', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-sonuc-cikti', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Hangisi bir çıktı (output) değil bir sonuçtur (outcome)?', '{"choices":["Öğle saatinde ortalama beklemenin 18 dakikadan 8''e düşmesi","Bakiye yükleme ekranının tasarlanıp yayına alınması","Son Sprint''te on iki story''nin bitmesi","Menü bildirim servisinin yazılıp kurulması"]}', '{"index":0}', 'Çıktı yaptığımız şeydir (ekran, servis, story); sonuç kullanıcıların davranışında ya da deneyimindeki değişimdir. Backlog çıktılardan oluşur ama başarı sonuçla ölçülür.', 1, '3. ünite · OKR, sonuç ve çıktı farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-okr-tanim', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'OKR''de "Key Result" için en iyi tanım hangisidir?', '{"choices":["Hedefe ulaşıldığını gösteren ölçülebilir sonuç","Hedefe ulaşmak için yapılacak işlerin listesi","Takımın Sprint''te bitirdiği story sayısı","Product Owner''ın kişisel performans puanı"]}', '{"index":0}', 'OKR bir hedef (Objective, ilham veren ve niteliksel) ve ona ulaşıldığını gösteren 2-5 ölçülebilir **anahtar sonuçtan** (Key Results) oluşur. Andy Grove Intel''de geliştirdi, John Doerr Google''a taşıdı. Anahtar sonuç bir iş listesi değildir.', 1, '3. ünite · OKR, sonuç ve çıktı farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-kr-yanlis', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Sinan Bey''in yazdığı "KR: Menü bildirim özelliğini Nisan''da yayınla" anahtar sonucundaki sorun nedir?', '{"choices":["Bir sonucu değil bir çıktıyı ölçüyor","Bir tarih içeriyor","Bir sayı içermiyor, bu yüzden ölçülemez","Anahtar sonuçları yalnızca Product Owner yazabilir"]}', '{"index":0}', '"Yayınla" bir çıktıdır: özellik yayına girer ama kimse kullanmazsa KR yine tamamlanmış görünür. Sonuç biçiminde: "Öğrencilerin %40''ı menü bildirimini açsın" ya da "atılan yemek %20 azalsın".', 2, '3. ünite · OKR, sonuç ve çıktı farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-goal-okr', 'backlog', 'bl-u3', 3, 'tf', 'derived', 'Product Goal ile bir çeyreklik OKR uyumlu olabilir: OKR''nin anahtar sonuçları Product Goal''e ilerlemeyi ölçmek için kullanılabilir.', '{}', '{"value":true}', 'Doğru. Rehber Product Goal''ün nasıl ölçüleceğini söylemez. Birçok organizasyon Product Goal''ü bir Objective, ilerlemesini anahtar sonuçlar olarak yazar. Önemli olan ikisinin çelişmemesi ve backlog sırasını beslemesidir.', 2, '3. ünite · OKR, sonuç ve çıktı farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-tanim', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Persona nedir?', '{"choices":["Araştırmaya dayanan, adı ve ihtiyaçları olan kurgusal kullanıcı","Uygulamanın gerçek bir kullanıcısının kişisel verileri","Story''yi yazan kişinin adı","Bir story''nin kabul kriterlerini onaylayan paydaş"]}', '{"index":0}', 'Persona, gerçek kullanıcı gözlemlerinden derlenen, adı, bağlamı, hedefleri ve sıkıntıları olan **kurgusal** bir kullanıcıdır. Alan Cooper yazılım tasarımına taşıdı (1999). Story''lerdeki "Bir öğrenci olarak" yerine "Bir yurt öğrencisi olarak (Zehra)" daha somut bir konuşma başlatır.', 1, '3. ünite · Persona ve kullanıcı rolleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-uydurma', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Elif hiç kullanıcı görüşmesi yapmadan, masa başında beş persona yazdı. En büyük risk nedir?', '{"choices":["Personaların takımın varsayımlarını kullanıcı gerçeği gibi göstermesi","Beş personanın Rehber''deki sınırı aşması","Personaların story point tahminlerini bozması","Personaların Teknik Liderlik onayı olmadan geçersiz sayılması"]}', '{"index":0}', 'Araştırmaya dayanmayan persona bir varsayım listesidir, ama gerçek bir insan gibi göründüğü için sorgulanmaz. En azından varsayım olduğu yazılmalı ve birkaç kullanıcı görüşmesiyle sınanmalıdır.', 2, '3. ünite · Persona ve kullanıcı rolleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-kullanici-rolu', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Mike Cohn''un önerdiği "kullanıcı rolü modelleme"nin amacı nedir?', '{"choices":["Story yazmadan önce ürünü kimlerin, neden kullanacağını bulmak","Her kullanıcıya bir yetki seviyesi atamak","Story''lerin hangi geliştiriciye verileceğine karar vermek","Kullanıcıları ödeme gücüne göre sınıflandırmak"]}', '{"index":0}', '*User Stories Applied*''da Cohn, story yazmadan önce kullanıcı rollerini (yurt öğrencisi, gündüzlü öğrenci, akademisyen, yemekhane görevlisi) çıkarıp gruplamayı önerir. Tek bir "kullanıcı" yerine farklı rollerin ihtiyaçları görünür olur.', 2, '3. ünite · Persona ve kullanıcı rolleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-seviyeler', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Impact mapping''in dört seviyesi hangi soruları sırayla sorar?', '{"choices":["Neden? Kim? Nasıl? Ne?","Ne? Ne zaman? Kim? Kaça?","Kim? Ne? Nerede? Neden?","Nasıl? Ne? Neden? Kim?"]}', '{"index":0}', 'Gojko Adzic''in impact mapping''i (2012) bir **hedeften** (neden) başlar, bu hedefi etkileyebilecek **aktörlere** (kim), onların davranışında istenen **etkilere** (nasıl) ve en son bu etkileri sağlayacak **teslimatlara** (ne) iner. Teslimatlar backlog öğesi olur.', 1, '3. ünite · Impact mapping: neden, kim, nasıl, ne', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-etki-ne', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Impact mapping''te "etki" (impact) seviyesine ne yazılır?', '{"choices":["Aktörün davranışında istenen değişim","Geliştirilecek özelliğin adı","Özelliğin maliyeti","Projenin bitiş tarihi"]}', '{"index":0}', 'Etki, aktörün davranışında hedefe hizmet eden bir değişimdir: "Öğrenciler yemeği önceden ayırtsın", "Görevliler bitecek yemeği erken görsün". Özellik (ne) bu değişimi sağlamanın yollarından biridir; aynı etki için birden çok özellik düşünülebilir.', 2, '3. ünite · Impact mapping: neden, kim, nasıl, ne', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-harita-oku', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Hedef: "Atılan yemek %20 azalsın." Aktör: "Yemekhane görevlileri." Hangisi bu aktör için bir etkidir?', '{"choices":["Tahmini porsiyona göre pişirmeleri","Görevli ekranına grafik eklenmesi","Öğrencilerin menüyü oylaması","Mutfak kamerasının kurulması"]}', '{"index":0}', 'Etki aktörün yapacağı farklı bir şeydir: görevlilerin tahmine göre pişirmesi. Grafik ekranı ve kamera teslimattır (ne); öğrencilerin oylaması başka bir aktörün etkisidir.', 2, '3. ünite · Impact mapping: neden, kim, nasıl, ne', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-neden-faydali', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Impact mapping''in backlog''a en önemli katkısı nedir?', '{"choices":["Her teslimatın hangi hedefe hizmet ettiğini göstermesi","Story point tahminini tamamen gereksiz kılması","Kabul kriterlerini kendiliğinden üretmesi","Sıralama kararında Product Owner''ın yerini alması"]}', '{"index":0}', 'Haritada bir hedefe bağlanmayan özellik hemen göze çarpar. Ayrıca bir etkiye ulaşan en ucuz teslimat seçilebilir; hedefe ulaşılınca kalan dallar yapılmayabilir.', 2, '3. ünite · Impact mapping: neden, kim, nasıl, ne', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-kim', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'User story mapping''i bir teknik olarak yaygınlaştıran kimdir?', '{"choices":["Jeff Patton","Ken Schwaber","Bill Wake","Taiichi Ohno"]}', '{"index":0}', 'Jeff Patton 2005''teki yazılarıyla başladı, 2014''te *User Story Mapping* kitabını yazdı. Ken Schwaber Scrum''un, Bill Wake INVEST''in, Taiichi Ohno Toyota Üretim Sistemi''nin adıdır.', 1, '3. ünite · User story mapping: omurga ve kullanıcı yolculuğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-eksenler', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Bir story map''te yatay ve dikey eksenler neyi gösterir?', '{"choices":["Yatay: yolculuğun adımları; dikey: adımların ayrıntısı ve önceliği","Yatay: zaman çizelgesi; dikey: geliştiricilerin adları","Yatay: story point; dikey: iş değeri","Yatay: epic''ler; dikey: task''lar"]}', '{"index":0}', 'Üstteki yatay sıra (omurga) kullanıcının yaptığı ana etkinlikleri yolculuk sırasıyla dizer: menüye bak, yemek seç, öde, teslim al. Her etkinliğin altına daha ayrıntılı story''ler, önemliden önemsize doğru dikey dizilir.', 2, '3. ünite · User story mapping: omurga ve kullanıcı yolculuğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-duz-liste', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Patton''a göre düz, sıralı bir backlog listesinin story map''e göre en büyük eksiği nedir?', '{"choices":["Bütünün resmini ve story''lerin yolculuktaki yerini göstermemesi","Story''lerin tahminini ve büyüklüğünü tutamaması","Product Owner''ın sıralama yapmasına izin vermemesi","Bir Sprint''ten uzun olamaması"]}', '{"index":0}', 'Patton düz listeyi "bir kitabın sayfalarını tek tek okumaya ama hikâyeyi görmemeye" benzetir. Story map ürünün bütün yolculuğunu gösterir; hangi adımın eksik ya da gereğinden kalın olduğu görünür.', 2, '3. ünite · User story mapping: omurga ve kullanıcı yolculuğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-ortak-anlayis', 'backlog', 'bl-u3', 3, 'tf', 'derived', 'Story mapping''in asıl çıktısı duvardaki kartlar değil, harita kurulurken takımda oluşan ortak anlayıştır.', '{}', '{"value":true}', 'Doğru. Patton''un sık tekrarladığı fikir: paylaşılan doküman paylaşılan anlayış değildir. Haritayı birlikte kurmak, "peki sonra ne olur?" sorusuyla eksik adımları ortaya çıkarır.', 1, '3. ünite · User story mapping: omurga ve kullanıcı yolculuğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-eksik-adim', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Squad yemekhane story map''inin omurgasını "menüye bak → yemek seç → öde" diye kurdu. Arda "yemeği nasıl alacağım?" diye soruyor. Bu ne gösterir?', '{"choices":["Omurgada kullanıcı yolculuğunun teslim alma adımı eksik","Arda''nın isteği ayrı bir epic olarak yazılmalı","Story map''e paydaşların katılmaması gerekir","Omurga doğru; teslim alma bir task''tır"]}', '{"index":0}', 'Story map''in gücü, yolculuğu uçtan uca yürüyünce boşlukları göstermesidir. Teslim alma (sıra numarası, hazır bildirimi) olmadan ödeme yapılmış ama yemek alınamamış olur.', 2, '3. ünite · User story mapping: omurga ve kullanıcı yolculuğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-iskelet', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Yürüyen iskelet (walking skeleton) nedir?', '{"choices":["Uçtan uca çalışan, her adımın en ince hâlinden oluşan ilk sürüm","Kullanıcı arayüzü olmayan, yalnızca veri tabanından oluşan ilk sürüm","Bütün ekranların tıklanabilir ama çalışmayan taslağı","Yalnızca en değerli feature''ın tam hâli"]}', '{"index":0}', 'Alistair Cockburn''ün terimi: sistemin uçtan uca, bütün parçalarını birbirine bağlayan **en ince** çalışan hâli. Story map''te her omurga adımının altındaki en basit story''lerden oluşan ilk yatay dilimdir.', 1, '3. ünite · Yürüyen iskelet ve sürüm dilimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-yatay-dilim', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Story map''te sürümler nasıl gösterilir?', '{"choices":["Haritayı yatay çizgilerle dilimleyerek; her dilim her adımdan bir parça içerir","Haritayı dikey sütunlara bölerek; her sürüm bir omurga adımını tamamlar","Her story''ye ayrı bir sürüm numarası yazarak","Sürümler story map''te gösterilmez"]}', '{"index":0}', 'Yatay dilim, kullanıcının yolculuğunu baştan sona yürüyebileceği bir sürüm üretir. Dikey sütunları tek tek tamamlamak (önce bütün menü, sonra bütün ödeme) kullanıcıya uzun süre çalışan bir yolculuk vermez.', 2, '3. ünite · Yürüyen iskelet ve sürüm dilimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-ilk-dilim', 'backlog', 'bl-u3', 3, 'mcq', 'derived', 'Squad''ın ilk sürüm dilimi için hangisi en uygun seçimdir?', '{"choices":["Günün menüsünü görme, tek yemek seçme, kartla ödeme, sıra numarası alma","Bütün menü özellikleri: filtreler, alerjen bilgisi, besin değerleri, fotoğraflar","Ödeme altyapısının bütün yöntemleri: kart, havale, bakiye, kupon","Yönetim paneli ve raporlar"]}', '{"index":0}', 'İlk dilim yolculuğun her adımından en ince parçayı alır; böylece öğrenciler ilk sürümde yemeğini baştan sona alabilir ve geri bildirim gelir. Tek bir adımı derinleştiren seçenekler uçtan uca bir değer üretmez.', 2, '3. ünite · Yürüyen iskelet ve sürüm dilimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u3-mvp-ile', 'backlog', 'bl-u3', 3, 'tf', 'derived', 'Yürüyen iskelet ile MVP her zaman aynı şeydir.', '{}', '{"value":false}', 'Yanlış. Yürüyen iskelet teknik bir kavramdır: mimarinin uçtan uca çalıştığını gösterir ve kullanıcıya açılmayabilir. MVP (12. ünite) bir öğrenme aracıdır: bir varsayımı en az emekle gerçek kullanıcıyla sınar. Bazen örtüşürler.', 2, '3. ünite · Yürüyen iskelet ve sürüm dilimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-koken', 'backlog', 'bl-u4', 4, 'mcq', 'derived', '"Story" kavramı yazılım geliştirmeye ilk olarak hangi yöntemle girdi?', '{"choices":["Extreme Programming (XP)","Scrum","Waterfall","SAFe"]}', '{"index":0}', 'Story, Kent Beck''in 1990''ların sonunda şekillendirdiği **XP**''nin planlama oyununda (Planning Game) kullanılan kısa ihtiyaç kartlarıdır. Scrum Rehberi user story''den hiç söz etmez; SAFe çok sonra (2011) geldi.', 1, '4. ünite · User story''nin kökeni: XP, Kent Beck, Mike Cohn', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-connextra', 'backlog', 'bl-u4', 4, 'mcq', 'derived', '"As a ..., I want ..., so that ..." kalıbı nerede ortaya çıktı?', '{"choices":["Londra''da Connextra''nın takımında, 2001 dolaylarında","Scrum Rehberi''nin ilk sürümünde, 2010''da","Agile Manifesto toplantısında, Snowbird''de","SAFe''in ilk sürümünde, 2011''de"]}', '{"index":0}', 'Kalıp 2001''de Londra''daki Connextra takımında doğdu (Rachel Davies ve arkadaşları); Mike Cohn''un 2004''teki *User Stories Applied* kitabıyla yaygınlaştı. Bu yüzden bazen "Connextra kalıbı" denir.', 3, '4. ünite · User story''nin kökeni: XP, Kent Beck, Mike Cohn', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-cohn-kitap', 'backlog', 'bl-u4', 4, 'mcq', 'derived', 'User story yazımını bir kitapla sistematik hâle getiren ve yaygınlaştıran kimdir?', '{"choices":["Mike Cohn","Jeff Sutherland","Eliyahu Goldratt","Winston Royce"]}', '{"index":0}', 'Mike Cohn''un *User Stories Applied* (2004) kitabı story yazımını, kullanıcı rollerini, INVEST''i ve tahmini bir arada anlattı. Sutherland Scrum''un, Goldratt kısıtlar teorisinin, Royce şelale makalesinin adıdır.', 1, '4. ünite · User story''nin kökeni: XP, Kent Beck, Mike Cohn', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-kart', 'backlog', 'bl-u4', 4, 'mcq', 'derived', 'Story''lerin başlangıçta küçük kâğıt kartlara yazılmasının bilinçli amacı neydi?', '{"choices":["Ayrıntıyı sınırlayıp konuşmayı zorunlu kılmak","Kartların kolayca arşivlenmesini sağlamak","Her story''nin bir saatte bitmesini sağlamak","Story''leri yalnızca Product Owner''ın görmesini sağlamak"]}', '{"index":0}', 'Küçük kart her şeyi yazmaya izin vermez: kart bir hatırlatıcıdır, ayrıntı konuşmada ortaya çıkar. Bu, 3C''nin ilk C''sidir (Card).', 2, '4. ünite · User story''nin kökeni: XP, Kent Beck, Mike Cohn', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-uc-c', 'backlog', 'bl-u4', 4, 'mcq', 'derived', 'Ron Jeffries''in 3C''si hangi üç kelimedir?', '{"choices":["Card, Conversation, Confirmation","Customer, Code, Commit","Clarity, Cost, Capacity","Create, Check, Close"]}', '{"index":0}', 'Ron Jeffries (2001): bir story **Card** (ihtiyacın kısa yazılı hâli), **Conversation** (ayrıntının konuşulduğu sohbet) ve **Confirmation** (story''nin tamamlandığını gösteren kabul testleri) parçalarından oluşur.', 1, '4. ünite · 3C: Card, Conversation, Confirmation', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-confirmation', 'backlog', 'bl-u4', 4, 'mcq', 'derived', '3C''de "Confirmation" bugün çoğunlukla neyle karşılanır?', '{"choices":["Kabul kriterleriyle","Product Owner''ın imzasıyla","Story point tahminiyle","Sprint Goal''le"]}', '{"index":0}', 'Confirmation, story''nin bittiğini doğrulayan testlerdir; bugün **kabul kriterleri** ve onlardan türeyen kabul testleri olarak yazılır (6. ünite). Bir imza ya da onay değildir.', 2, '4. ünite · 3C: Card, Conversation, Confirmation', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-en-onemli', 'backlog', 'bl-u4', 4, 'mcq', 'derived', '3C''den hangisi genellikle en çok atlanır ve en çok zarar verir?', '{"choices":["Conversation: kart yazılıp takıma konuşmadan iletilir","Card: story''ler hiç yazılmaz","Confirmation: kabul testi olmayan story Sprint''e alınamaz","Hiçbiri; üçü de araçlar tarafından zorunlu tutulur"]}', '{"index":0}', 'Sahada en sık görülen hata, story''yi bir araçta ayrıntılı yazıp "gönderilen iş" gibi takıma iletmektir. Konuşma olmazsa herkes kartı kendi kafasındaki resimle okur; Sprint sonunda "ben böyle anlamadım" ortaya çıkar.', 2, '4. ünite · 3C: Card, Conversation, Confirmation', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-kim-konusur', 'backlog', 'bl-u4', 4, 'mcq', 'derived', '3C''deki konuşmaya kimler katılmalıdır?', '{"choices":["Story''yi isteyen, yapacak ve test edecek olanlar","Yalnızca Product Owner ve Scrum Master","Yalnızca Teknik Liderlik","Yalnızca story''yi yapacak geliştirici"]}', '{"index":0}', 'Konuşma ihtiyacı bilen (Product Owner, paydaş), yapacak olan (Developers) ve doğrulayacak olan (test uzmanı) arasında olur. 6. ünitedeki Three Amigos bu konuşmanın yapılandırılmış hâlidir.', 1, '4. ünite · 3C: Card, Conversation, Confirmation', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-uc-parca', 'backlog', 'bl-u4', 4, 'mcq', 'derived', '"Bir yurt öğrencisi olarak akşam yemeğini önceden ayırtmak istiyorum, böylece derse geç kaldığımda yemeksiz kalmam." Bu story''de "böylece ..." kısmı neyi anlatır?', '{"choices":["Faydayı","Kullanıcı rolünü","İsteği","Kabul kriterini"]}', '{"index":0}', 'Kalıbın üç parçası: **kim** (bir yurt öğrencisi olarak), **ne** (akşam yemeğini önceden ayırtmak istiyorum), **neden** (böylece yemeksiz kalmam). Fayda, takımın daha iyi bir çözüm bulmasına alan açar.', 1, '4. ünite · "Bir ... olarak ... istiyorum, böylece ..." kalıbı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-fayda-onemi', 'backlog', 'bl-u4', 4, 'mcq', 'derived', 'Fayda kısmını ("böylece ...") yazmak neden önemlidir?', '{"choices":["Amacı bilen takım daha iyi ya da ucuz bir çözüm bulabilir","Rehber her öğede fayda alanını zorunlu tutar","Fayda yazılmazsa story point verilemez","Araçlar fayda alanı boşsa story''yi kaydetmez"]}', '{"index":0}', 'Fayda, isteğin altındaki gerçek ihtiyacı söyler. "Yemeksiz kalmamak" ihtiyacını bilen takım, ayırtma yerine "akşam porsiyonu bitmeden bildirim" gibi daha basit bir çözüm önerebilir. Fayda yazılamıyorsa story''nin değeri sorgulanmalıdır.', 2, '4. ünite · "Bir ... olarak ... istiyorum, böylece ..." kalıbı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-turkce', 'backlog', 'bl-u4', 4, 'mcq', 'derived', 'Türkçede kalıbın doğal yazımı için hangisi en iyisidir?', '{"choices":["Bir kasiyer olarak iadeyi tek tuşla yapabilmek istiyorum, böylece sıra uzamaz.","Kasiyer olarak, istiyorum, iade tek tuş, sıra uzamasın diye.","As a kasiyer, I want iade tek tuş, so that sıra uzamasın.","İade tek tuşla yapılmalıdır."]}', '{"index":0}', 'Kalıbın Türkçesi "Bir ... olarak ... istiyorum, böylece ..." biçiminde doğal bir cümle olmalıdır. Melez dil okunurluğu düşürür; son seçenek ise rol ve faydası olmayan bir gereksinim cümlesidir.', 2, '4. ünite · "Bir ... olarak ... istiyorum, böylece ..." kalıbı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-kalip-zorunlu', 'backlog', 'bl-u4', 4, 'tf', 'derived', 'Kalıba uymayan bir cümle user story sayılamaz.', '{}', '{"value":false}', 'Yanlış. Kalıp bir yardımcıdır, story''nin tanımı değildir. Kent Beck''in ilk story''leri kısa cümlelerdi. Önemli olan kimin hangi ihtiyacının neden karşılandığının konuşulabilmesi ve doğrulanabilmesidir.', 1, '4. ünite · "Bir ... olarak ... istiyorum, böylece ..." kalıbı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-ve-ile', 'backlog', 'bl-u4', 4, 'mcq', 'derived', '"Bir öğrenci olarak menüyü görmek, yemeği ayırtmak ve bakiyemi yüklemek istiyorum." Bu story''nin en belirgin sorunu nedir?', '{"choices":["Üç ayrı ihtiyacı tek story''de topluyor","Rolü yanlış seçilmiş","Türkçe yazıldığı için araçta aranamaz","Fazla kısa"]}', '{"index":0}', '"Ve" ile bağlanan istekler çoğunlukla ayrı story''lerdir; ayrı değerlenir, ayrı sıralanır, ayrı test edilir. Ayrıca fayda kısmı yoktur. Bölme desenleri 7. ünitede.', 2, '4. ünite · "Bir ... olarak ... istiyorum, böylece ..." kalıbı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-gelistirici', 'backlog', 'bl-u4', 4, 'mcq', 'derived', '"Bir geliştirici olarak ödeme tablosuna indeks eklemek istiyorum." Bu story''nin asıl sorunu nedir?', '{"choices":["Kullanıcı değeri yerine bir çözüm adımını anlatıyor","Geliştiricinin adı yazılmamış","Teknik işler hiçbir zaman backlog''a giremez","Story point tahmini eksik"]}', '{"index":0}', 'Rolü geliştirici olan story''ler çoğunlukla kılık değiştirmiş task''tır. Altındaki ihtiyaç sorulur: "Neden?" → "Öğle saatinde ödeme 6 saniye sürüyor." Story bu ihtiyaçla yazılırsa ("Bir öğrenci olarak ödemem 2 saniyede bitsin...") Product Owner değeri tartabilir. Teknik işlerin yazımı 8. ünitede.', 2, '4. ünite · Kalıbın yanlış kullanımları: geliştirici rolü, faydasız story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-kullanici', 'backlog', 'bl-u4', 4, 'mcq', 'derived', 'Bütün story''lerin "Bir kullanıcı olarak ..." diye başlaması neyi kaybettirir?', '{"choices":["Farklı kullanıcıların farklı ihtiyaçlarını","Story''lerin tahmin edilebilmesini","Product Owner''ın sıralama yetkisini","Kabul kriterlerinin yazılabilmesini"]}', '{"index":0}', '"Kullanıcı" herkesi kapsadığı için hiç kimseyi anlatmaz. Yurt öğrencisi, gündüzlü öğrenci, akademisyen ve yemekhane görevlisi aynı ekranda farklı şeyler ister; rolü somut yazmak konuşmayı zenginleştirir.', 2, '4. ünite · Kalıbın yanlış kullanımları: geliştirici rolü, faydasız story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-po-rol', 'backlog', 'bl-u4', 4, 'mcq', 'derived', '"Bir Product Owner olarak raporlarda filtre istiyorum, böylece toplantıda gösterebilirim." Bu story hakkında en iyi değerlendirme hangisidir?', '{"choices":["Raporu asıl kullanan kişinin rolüyle yeniden yazılmalı","Kusursuz; Product Owner da bir kullanıcıdır","Story''ler Product Owner rolüyle yazılamaz, silinmeli","Faydası açık olduğu için doğrudan Sprint''e alınmalı"]}', '{"index":0}', 'Rolü story''yi yazan kişi olan story''ler çoğunlukla gerçek kullanıcıyı gizler. Rapor yemekhane müdürünün porsiyon kararı için kullanılıyorsa story "Bir yemekhane müdürü olarak ..." diye yazılır ve fayda da o kararla anlatılır.', 1, '4. ünite · Kalıbın yanlış kullanımları: geliştirici rolü, faydasız story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-sistem', 'backlog', 'bl-u4', 4, 'tf', 'derived', '"Bir sistem olarak ..." diye başlayan story''ler çoğu zaman gerçek kullanıcıyı ya da gerçek ihtiyacı gizleyen bir koku olarak kabul edilir.', '{}', '{"value":true}', 'Doğru. Sistem bir şey istemez; bir insanın ya da başka bir sistemin sahibinin ihtiyacı vardır. Gerçekten makineler arası bir iş varsa (ör. bir entegrasyon) o sistemin sahibi ya da etkilenen kullanıcı rol olarak yazılabilir.', 2, '4. ünite · Kalıbın yanlış kullanımları: geliştirici rolü, faydasız story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-kalip', 'backlog', 'bl-u4', 4, 'mcq', 'derived', 'Job story kalıbı hangisidir?', '{"choices":["Şu durumda ..., ... istiyorum, böylece ...","Bir ... olarak ... istiyorum, böylece ...","Verilen ..., olduğunda ..., o zaman ...","... yapılırsa ... ölçüsü ... kadar değişir"]}', '{"index":0}', 'Job story (Intercom ekibi, Jobs to Be Done yaklaşımı) rol yerine **durumu** öne alır: "Ders 12.50''de bittiğinde, en kısa sıradaki yemekhaneyi görmek istiyorum, böylece öğle arasında yemek yiyebilirim." Üçüncü seçenek kabul kriterinin Given/When/Then biçimi, sonuncusu bir hipotezdir.', 1, '4. ünite · Job story ve diğer biçimler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-ne-zaman', 'backlog', 'bl-u4', 4, 'mcq', 'derived', 'Job story hangi durumda klasik kalıptan daha çok işe yarar?', '{"choices":["Aynı rolün durumdan duruma ihtiyacı değiştiğinde","Story''nin teknik bir görev olduğunda","Kullanıcı rolü kesin olarak bilindiğinde","Story''nin kabul kriteri olmadığında"]}', '{"index":0}', 'Aynı öğrenci sınav haftasında, akşam yurda dönerken ve misafiriyle gelirken farklı şeyler ister. Rol değil durum belirleyici olduğunda job story ihtiyacı daha net anlatır.', 2, '4. ünite · Job story ve diğer biçimler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-rehber-bicim', 'backlog', 'bl-u4', 4, 'tf', 'derived', 'Scrum Rehberi''ne göre takım öğelerini klasik kalıpla, job story ile ya da başka bir biçimde yazabilir; Rehber biçim şart koşmaz.', '{}', '{"value":true}', 'Doğru. Rehber yalnızca öğelerin şeffaf, anlaşılır ve sıralı olmasını ister. Biçim seçimi takımındır; önemli olan takımın ve paydaşların ortak anlayışıdır.', 1, '4. ünite · Job story ve diğer biçimler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-vaat', 'backlog', 'bl-u4', 4, 'mcq', 'derived', '"Bir story, bir konuşmanın vaadidir" sözü ne anlatır?', '{"choices":["Ayrıntı kartta değil, iş yaklaşınca yapılan konuşmada çıkar","Product Owner story''yi yazdıktan sonra değiştiremez","Story''ler yazılı değil yalnızca sözlü tutulmalıdır","Her story için bir toplantı zorunludur"]}', '{"index":0}', 'Alistair Cockburn''e atfedilen bu söz, story''nin bir şartname değil konuşmayı hatırlatan bir yer tutucu olduğunu söyler. Konuşmada çıkan kararlar kabul kriteri, not ya da çizim olarak story''ye eklenebilir.', 1, '4. ünite · Story bir sözleşme değil, konuşma vaadidir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-sartname', 'backlog', 'bl-u4', 4, 'mcq', 'derived', 'Elif her story''ye iki sayfalık ayrıntılı bir şartname ekliyor ve takım story''leri okumadan Sprint''e alıyor. Ne olması en olasıdır?', '{"choices":["Yanlış anlamalar Sprint sonunda, iş bitmişken ortaya çıkar","Takımın hızı artar, çünkü konuşmaya gerek kalmaz","Story''ler daha küçük olur","Kabul kriterleri gereksiz hâle gelir"]}', '{"index":0}', 'Uzun şartname konuşmanın yerini tutmaz; okuyan herkes farklı bir resim kurar ve soru sorulmaz. Kısa bir kart artı birlikte yapılan konuşma artı açık kabul kriterleri çoğu zaman daha iyi sonuç verir.', 2, '4. ünite · Story bir sözleşme değil, konuşma vaadidir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u4-uzlasma', 'backlog', 'bl-u4', 4, 'mcq', 'derived', 'Mert, "ayırtma" story''si için Elif''e "Ayırtma iptal edilebiliyor mu?" diye soruyor. Bu soru nereye kaydedilmelidir?', '{"choices":["Kabul kriteri ya da not olarak story''ye","Hiçbir yere; konuşma yapıldıysa yeter","Ayrı bir şartname dokümanına","Teknik Liderlik''in onay formuna"]}', '{"index":0}', 'Konuşma story''nin parçasıdır, ama kararlar unutulmasın diye kaydedilir; en iyi yer kabul kriterleridir ("Ayırtma yemek saatinden 30 dakika öncesine kadar iptal edilebilir"). Böylece Confirmation konuşmanın sonucunu taşır.', 2, '4. ünite · Story bir sözleşme değil, konuşma vaadidir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-rehber', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-tanim';
UPDATE questions SET kavram = 'u1-rehber', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-tek-kaynak';
UPDATE questions SET kavram = 'u1-rehber', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-sirali';
UPDATE questions SET kavram = 'u1-rehber', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-hazir';
UPDATE questions SET kavram = 'u1-rehber', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-refinement';
UPDATE questions SET kavram = 'u1-rehber', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-surekli';
UPDATE questions SET kavram = 'u1-rehber', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-yuzde-on';
UPDATE questions SET kavram = 'u1-sahiplik', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-hesap-veren';
UPDATE questions SET kavram = 'u1-sahiplik', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-devretme';
UPDATE questions SET kavram = 'u1-sahiplik', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-buyukluk';
UPDATE questions SET kavram = 'u1-sahiplik', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u1-degistirmek';
UPDATE questions SET kavram = 'u1-sahiplik', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-komite';
UPDATE questions SET kavram = 'u1-nitelikler', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-rehber-nitelikleri';
UPDATE questions SET kavram = 'u1-nitelikler', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-bicim';
UPDATE questions SET kavram = 'u1-nitelikler', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u1-turler';
UPDATE questions SET kavram = 'u1-nitelikler', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-alana-gore';
UPDATE questions SET kavram = 'u1-product-goal', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-taahhut';
UPDATE questions SET kavram = 'u1-product-goal', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-nerede';
UPDATE questions SET kavram = 'u1-product-goal', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-bir-anda';
UPDATE questions SET kavram = 'u1-product-goal', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u1-yemekhane-hedefi';
UPDATE questions SET kavram = 'u1-buzdagi', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u1-ust-alt';
UPDATE questions SET kavram = 'u1-buzdagi', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u1-erken-ayrinti';
UPDATE questions SET kavram = 'u1-buzdagi', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u1-kac-sprint';
UPDATE questions SET kavram = 'u1-deep', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u1-harfler';
UPDATE questions SET kavram = 'u1-deep', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u1-uygun-ayrinti';
UPDATE questions SET kavram = 'u1-deep', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u1-emergent';
UPDATE questions SET kavram = 'u1-deep', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u1-tahmin-hepsi';
UPDATE questions SET kavram = 'u1-kokular', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u1-mezarlik';
UPDATE questions SET kavram = 'u1-kokular', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u1-silmek';
UPDATE questions SET kavram = 'u1-kokular', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u1-kopya';
UPDATE questions SET kavram = 'u1-kokular', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u1-yan-kapi';
UPDATE questions SET kavram = 'u2-seviyeler', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u2-rehberde-mi';
UPDATE questions SET kavram = 'u2-seviyeler', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u2-buyukten';
UPDATE questions SET kavram = 'u2-seviyeler', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u2-theme';
UPDATE questions SET kavram = 'u2-seviyeler', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u2-seviye-bul-1';
UPDATE questions SET kavram = 'u2-seviyeler', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u2-seviye-bul-2';
UPDATE questions SET kavram = 'u2-seviyeler', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u2-seviye-bul-3';
UPDATE questions SET kavram = 'u2-epic', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u2-cohn';
UPDATE questions SET kavram = 'u2-epic', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u2-safe-epic';
UPDATE questions SET kavram = 'u2-epic', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u2-bitmeyen';
UPDATE questions SET kavram = 'u2-epic', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u2-hipotez';
UPDATE questions SET kavram = 'u2-feature', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u2-tanim';
UPDATE questions SET kavram = 'u2-feature', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u2-safe-feature';
UPDATE questions SET kavram = 'u2-feature', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u2-fayda';
UPDATE questions SET kavram = 'u2-feature', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u2-bilesen';
UPDATE questions SET kavram = 'u2-task', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u2-story-task';
UPDATE questions SET kavram = 'u2-task', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u2-bir-gun';
UPDATE questions SET kavram = 'u2-task', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u2-task-backlog';
UPDATE questions SET kavram = 'u2-task', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u2-alt-gorev';
UPDATE questions SET kavram = 'u2-araclar', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u2-azure';
UPDATE questions SET kavram = 'u2-araclar', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u2-jira';
UPDATE questions SET kavram = 'u2-araclar', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u2-safe-sira';
UPDATE questions SET kavram = 'u2-araclar', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u2-clickup';
UPDATE questions SET kavram = 'u2-araclar', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u2-ayni-mantik';
UPDATE questions SET kavram = 'u2-kim-yazar', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u2-teknik-liderlik';
UPDATE questions SET kavram = 'u2-kim-yazar', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u2-herkes-yazabilir';
UPDATE questions SET kavram = 'u2-kim-yazar', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u2-birlikte';
UPDATE questions SET kavram = 'u2-ne-zaman', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u2-kucuk-urun';
UPDATE questions SET kavram = 'u2-ne-zaman', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u2-rapor-icin';
UPDATE questions SET kavram = 'u3-vizyon', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u3-vizyon-goal';
UPDATE questions SET kavram = 'u3-vizyon', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u3-asansor';
UPDATE questions SET kavram = 'u3-vizyon', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u3-vision-board';
UPDATE questions SET kavram = 'u3-vizyon', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u3-yemekhane-vizyon';
UPDATE questions SET kavram = 'u3-okr', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u3-sonuc-cikti';
UPDATE questions SET kavram = 'u3-okr', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u3-okr-tanim';
UPDATE questions SET kavram = 'u3-okr', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u3-kr-yanlis';
UPDATE questions SET kavram = 'u3-okr', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u3-goal-okr';
UPDATE questions SET kavram = 'u3-persona', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u3-tanim';
UPDATE questions SET kavram = 'u3-persona', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u3-uydurma';
UPDATE questions SET kavram = 'u3-persona', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u3-kullanici-rolu';
UPDATE questions SET kavram = 'u3-impact', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u3-seviyeler';
UPDATE questions SET kavram = 'u3-impact', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u3-etki-ne';
UPDATE questions SET kavram = 'u3-impact', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u3-harita-oku';
UPDATE questions SET kavram = 'u3-impact', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u3-neden-faydali';
UPDATE questions SET kavram = 'u3-story-map', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u3-kim';
UPDATE questions SET kavram = 'u3-story-map', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u3-eksenler';
UPDATE questions SET kavram = 'u3-story-map', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u3-duz-liste';
UPDATE questions SET kavram = 'u3-story-map', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u3-ortak-anlayis';
UPDATE questions SET kavram = 'u3-story-map', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u3-eksik-adim';
UPDATE questions SET kavram = 'u3-dilim', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u3-iskelet';
UPDATE questions SET kavram = 'u3-dilim', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u3-yatay-dilim';
UPDATE questions SET kavram = 'u3-dilim', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u3-ilk-dilim';
UPDATE questions SET kavram = 'u3-dilim', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u3-mvp-ile';
UPDATE questions SET kavram = 'u4-tarihce', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u4-koken';
UPDATE questions SET kavram = 'u4-tarihce', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u4-connextra';
UPDATE questions SET kavram = 'u4-tarihce', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u4-cohn-kitap';
UPDATE questions SET kavram = 'u4-tarihce', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u4-kart';
UPDATE questions SET kavram = 'u4-3c', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u4-uc-c';
UPDATE questions SET kavram = 'u4-3c', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u4-confirmation';
UPDATE questions SET kavram = 'u4-3c', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u4-en-onemli';
UPDATE questions SET kavram = 'u4-3c', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u4-kim-konusur';
UPDATE questions SET kavram = 'u4-kalip', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u4-uc-parca';
UPDATE questions SET kavram = 'u4-kalip', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u4-fayda-onemi';
UPDATE questions SET kavram = 'u4-kalip', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u4-turkce';
UPDATE questions SET kavram = 'u4-kalip', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u4-kalip-zorunlu';
UPDATE questions SET kavram = 'u4-kalip', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u4-ve-ile';
UPDATE questions SET kavram = 'u4-rol', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u4-gelistirici';
UPDATE questions SET kavram = 'u4-rol', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u4-kullanici';
UPDATE questions SET kavram = 'u4-rol', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u4-po-rol';
UPDATE questions SET kavram = 'u4-rol', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u4-sistem';
UPDATE questions SET kavram = 'u4-job-story', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u4-kalip';
UPDATE questions SET kavram = 'u4-job-story', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u4-ne-zaman';
UPDATE questions SET kavram = 'u4-job-story', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u4-rehber-bicim';
UPDATE questions SET kavram = 'u4-konusma', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u4-vaat';
UPDATE questions SET kavram = 'u4-konusma', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u4-sartname';
UPDATE questions SET kavram = 'u4-konusma', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u4-uzlasma';
