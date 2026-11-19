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
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-kim', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'INVEST kısaltmasını "INVEST in Good Stories" yazısıyla (2003) kim ortaya koydu?', '{"choices":["Bill Wake","Mike Cohn","Ron Jeffries","Jeff Patton"]}', '{"index":0}', 'Bill Wake 2003''te iyi bir story''nin altı özelliğini INVEST kısaltmasıyla topladı; aynı yazıda task''lar için SMART''ı önerdi. Mike Cohn INVEST''i *User Stories Applied*''da yaygınlaştırdı; Ron Jeffries 3C''nin, Jeff Patton story mapping''in adıdır.', 1, '5. ünite · INVEST: Bill Wake''in altı harfi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-harfler', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'INVEST''in altı harfi sırasıyla nedir?', '{"choices":["Bağımsız, konuşulabilir, değerli, tahmin edilebilir, küçük, test edilebilir","Belirgin, ölçülebilir, ulaşılabilir, ilgili, zamanlı, onaylı","Ayrıntılı, tahminli, gelişen, sıralı, sahipli, görünür","Bütünlüklü, yazılı, onaylı, planlı, kesin, sabit"]}', '{"index":0}', 'Independent, Negotiable, Valuable, Estimable, Small, Testable. İkinci seçenek task''lar için önerilen SMART''a, üçüncüsü bütün backlog için DEEP''e benziyor (1. ünite).', 1, '5. ünite · INVEST: Bill Wake''in altı harfi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-smart', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Bill Wake aynı yazıda story''ler için INVEST''i önerirken task''lar için hangi kısaltmayı önerdi?', '{"choices":["SMART","DEEP","SPIDR","MoSCoW"]}', '{"index":0}', 'Wake task''ların **SMART** olmasını önerdi: Specific, Measurable, Achievable, Relevant, Time-boxed. DEEP backlog için, SPIDR story bölmek için, MoSCoW önceliklendirme için kullanılır.', 2, '5. ünite · INVEST: Bill Wake''in altı harfi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-kontrol-listesi', 'backlog', 'bl-u5', 5, 'tf', 'derived', 'INVEST''in amacı, altı harfin hepsini sağlamayan bir story''nin Sprint''e alınmasını kesin olarak yasaklamaktır.', '{}', '{"value":false}', 'Yanlış. INVEST bir konuşma aracıdır: hangi harfin zayıf olduğunu görmek ve story''yi iyileştirmek için kullanılır. Harfler arasında gerilim de vardır; bir kapı kuralına dönüşünce refinement bürokrasiye döner.', 2, '5. ünite · INVEST: Bill Wake''in altı harfi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-anlam', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'INVEST''teki Independent (bağımsız) için en iyi açıklama hangisidir?', '{"choices":["Story başka story''lere bağlı olmadan her sırada yapılabilir","Story''yi tek bir geliştirici tek başına yapabilir","Story''nin Product Owner onayına ihtiyacı yoktur","Story başka takımların koduna hiç dokunmaz"]}', '{"index":0}', 'Bağımsız story''ler Product Owner''a sıralama özgürlüğü verir ve tahmini kolaylaştırır. Bağımlılık tamamen yok edilemeyebilir, ama azaltılabilir.', 1, '5. ünite · Independent: bağımsız story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-odeme-turleri', 'backlog', 'bl-u5', 5, 'mcq', 'derived', '"Kartla ödeme" story''si 5 puan, "QR ile ödeme" story''si 3 puan; ama hangisi önce yapılırsa ödeme altyapısını o kuruyor. Mike Cohn''un önerdiği çözüm hangisidir?', '{"choices":["Karta önce yapılırsa ve sonra yapılırsa diye iki tahmin yazmak","İki story''yi tek bir 8 puanlık story''de birleştirmek","Altyapıyı ayrı bir teknik story olarak öne almak","İki story''ye de 5 puan verip farkı görmezden gelmek"]}', '{"index":0}', 'Cohn *User Stories Applied*''da önce bağımlı story''leri birleştirmeyi ya da farklı bölmeyi önerir; ikisi de olmuyorsa karta **iki tahmin** yazılır: önce yapılırsa 5, sonra yapılırsa 3 gibi. Birleştirmek burada story''yi büyütür; ayrı altyapı story''si kullanıcı değeri taşımaz.', 2, '5. ünite · Independent: bağımsız story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-zincir', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Squad''ın "önceden sipariş" feature''ı beş story''ye bölünmüş ve her biri bir öncekini bekliyor. Hangi harf en çok zayıflamış?', '{"choices":["Independent","Negotiable","Testable","Valuable"]}', '{"index":0}', 'Sıkı bir zincir Product Owner''ın sıralama özgürlüğünü elinden alır ve tek bir gecikme bütün zinciri durdurur. Story''leri her biri uçtan uca çalışan dilimlere bölmek bağımlılığı azaltır (7. ünite).', 2, '5. ünite · Independent: bağımsız story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-negotiable-anlam', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'INVEST''teki Negotiable (konuşulabilir) ne demektir?', '{"choices":["Story bir sözleşme değil; ayrıntılar takımla konuşularak şekillenir","Story''nin önceliği her gün pazarlıkla değiştirilebilir","Story''nin tahmini Product Owner ile pazarlık edilir","Story''yi kabul edip etmemek takımın keyfine kalmıştır"]}', '{"index":0}', 'Negotiable, story''nin bir şartname olmadığını söyler: kart ihtiyacı anlatır, nasıl karşılanacağı konuşmada şekillenir (4. ünitedeki 3C). Tahmin pazarlık konusu değildir.', 1, '5. ünite · Negotiable: konuşulabilir story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-dikte', 'backlog', 'bl-u5', 5, 'mcq', 'derived', '"Raporu Excel''de, mavi başlıklı, 12 punto ve A4 yatay istiyorum" story''si hangi harfi en çok zedeler?', '{"choices":["Negotiable","Small","Independent","Estimable"]}', '{"index":0}', 'Biçim ayrıntıları çözümü dikte eder ve konuşmayı kapatır. Asıl ihtiyaç (müdürün yarınki pişirmeyi planlaması) yazılırsa takım belki ekranda bir özetin yeteceğini önerebilir.', 2, '5. ünite · Negotiable: konuşulabilir story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-ayrinti-yasak', 'backlog', 'bl-u5', 5, 'tf', 'derived', 'Negotiable harfi, bir story''ye hiçbir ayrıntı ya da kabul kriteri yazılmaması gerektiği anlamına gelir.', '{}', '{"value":false}', 'Yanlış. Konuşmadan çıkan kararlar kabul kriteri ve not olarak yazılır. Negotiable yalnızca bu ayrıntıların konuşmadan önce bir sözleşme gibi dondurulmaması gerektiğini söyler.', 1, '5. ünite · Negotiable: konuşulabilir story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-valuable-anlam', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'INVEST''teki Valuable (değerli) en çok kime değer taşımayı ister?', '{"choices":["Kullanıcıya ya da müşteriye","Story''yi yazan kişiye","Teknik Liderlik''in raporuna","Takımın velocity''sine"]}', '{"index":0}', 'Story kullanıcıya ya da müşteriye (ürünü kullanan ya da parasını ödeyen) bir değer sunmalıdır. Bu yüzden katman katman bölünmüş story''ler (yalnız veri tabanı, yalnız arayüz) Valuable harfini bozar.', 1, '5. ünite · Valuable: değerli story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-katman', 'backlog', 'bl-u5', 5, 'mcq', 'derived', '"Sipariş tablosunu oluştur", "Sipariş servisini yaz", "Sipariş ekranını yap" diye üç story yazılmış. Hangi harf en çok bozulmuş?', '{"choices":["Valuable","Estimable","Small","Negotiable"]}', '{"index":0}', 'Üç parçanın hiçbiri tek başına kullanıcıya bir şey vermez; üçü birden bitmeden değer yoktur. Bu yatay bölmedir. Dikey bölmede her story katmanların hepsinden ince bir dilim alır (7. ünite).', 2, '5. ünite · Valuable: değerli story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-teknik-is', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Kerem''in "loglama altyapısını değiştir" işi kullanıcıya doğrudan görünmüyor. Valuable harfi açısından en iyi yaklaşım hangisidir?', '{"choices":["Değerini kimin hangi sorununu çözdüğüyle anlatmak","Teknik işler değer taşımadığı için backlog''a almamak","Story kalıbını \"Bir geliştirici olarak\" diye doldurmak","Değer alanını boş bırakıp yalnızca tahmin vermek"]}', '{"index":0}', 'Teknik işlerin de bir değeri vardır ama dolaylıdır: "Gece hataları sabah dörtte değil beş dakikada bulunur, öğle saati kesintileri kısalır." Bu değeri yazmak Product Owner''ın işi sıralamasını mümkün kılar (8. ünite).', 2, '5. ünite · Valuable: değerli story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-estimable-anlam', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Bir story hangi durumda Estimable (tahmin edilebilir) değildir?', '{"choices":["Takım ne yapılacağını ya da nasıl yapılacağını yeterince bilmiyorsa","Story 8 puandan büyük bir tahmin aldıysa","Story''yi Product Owner tahmin etmediyse","Story''de kabul kriteri olarak üçten az madde varsa"]}', '{"index":0}', 'Cohn''a göre tahmin edilememenin üç nedeni vardır: alan bilgisi eksikliği, teknik bilgi eksikliği ve story''nin çok büyük olması. İlki konuşmayla, ikincisi spike ile, üçüncüsü bölmeyle çözülür.', 1, '5. ünite · Estimable: tahmin edilebilir story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-spike', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Takım üniversitenin eski kart okuyucu sistemiyle hiç çalışmamış; "turnikede kartla geçiş" story''sine tahmin veremiyor. En uygun hamle hangisidir?', '{"choices":["Time-box''lı bir spike ile bilinmeyeni azaltmak","Story''ye en yüksek kartı verip Sprint''e almak","Tahmini Teknik Liderlik''e bırakmak","Story''yi tahminsiz Sprint''e alıp görmek"]}', '{"index":0}', 'Teknik bilgi eksikliğinin çaresi kısa, time-box''lı bir araştırmadır (spike). Spike''ın çıktısı bilgidir: sistemin bir API''si var mı, test ortamı var mı? Ardından story tahmin edilebilir hâle gelir (8. ünite).', 2, '5. ünite · Estimable: tahmin edilebilir story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-alan-bilgisi', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Developers "burs indirimi" story''sine tahmin veremiyor çünkü burs kurallarını bilmiyorlar. En iyi çare hangisidir?', '{"choices":["Kuralları bilen paydaşla kısa bir konuşma","Story''yi teknik bir spike''a çevirmek","Story''yi rastgele bir puanla tahmin etmek","Story''yi daha küçük parçalara bölmek"]}', '{"index":0}', 'Eksik olan teknik değil **alan** bilgisidir. Burs ofisinden biriyle 15 dakikalık bir konuşma çoğu zaman bir spike''tan ucuzdur. Kurallar öğrenilince bölme de kolaylaşır.', 2, '5. ünite · Estimable: tahmin edilebilir story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-ne-kadar', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Sahada bir story için "küçük" ölçüsü en çok neye göre konur?', '{"choices":["Sprint içinde, birkaç günde bitebilmesine","Tek bir satır koda sığabilmesine","Bir ayda bitebilmesine","En fazla üç kabul kriteri olmasına"]}', '{"index":0}', 'Story en azından bir Sprint''e sığmalıdır; sahada iyi bir ölçü, Sprint''te birkaç story''nin rahatça bitebilmesidir (iki haftalık Sprint için çoğu zaman 1-3 gün). Wake''in 2003''teki ölçüsü "en fazla birkaç kişi-hafta" idi; Sprint''ler kısaldıkça ölçü de küçüldü.', 1, '5. ünite · Small: küçük story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-cok-kucuk', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Story''ler aşırı küçük bölünürse (her biri bir iki saatlik iş) en olası sorun hangisidir?', '{"choices":["Story''ler task''a dönüşür, yönetim yükü artar","Takımın velocity''si kendiliğinden düşer","Rehber bir saatten kısa öğeyi yasaklar","Kabul kriteri yazmak imkânsız hâle gelir"]}', '{"index":0}', 'Küçük iyidir ama bir sınırı vardır: kullanıcıya bir şey söylemeyen, yalnız teknik adım olan parçalar story değil task''tır. Ayrıca her story''nin konuşma, kabul ve izleme yükü vardır.', 2, '5. ünite · Small: küçük story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-neden-kucuk', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Küçük story''lerin Sprint''e etkisi için hangisi doğrudur?', '{"choices":["İş Sprint boyunca biter, geri bildirim düzenli gelir","Takımın toplam iş miktarı her zaman artar","Sprint Review''a gerek kalmaz","Tahmin yapmaya artık gerek kalmaz"]}', '{"index":0}', 'Büyük story''ler Sprint''in sonuna yığılır, yarım kalır ve geri bildirimi geciktirir. Küçük story''ler Sprint boyunca biter; burndown düzenli iner, risk erken görünür.', 2, '5. ünite · Small: küçük story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-testable-anlam', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Hangi story Testable (test edilebilir) değildir?', '{"choices":["Uygulama öğrencilere kullanıcı dostu gelmeli.","Bakiye 10 TL''nin altına inince bildirim gitmeli.","Ayırtma yemekten 30 dakika öncesine kadar iptal edilebilmeli.","Menü her sabah 08.00''de güncel görünmeli."]}', '{"index":0}', '"Kullanıcı dostu" ölçülemez; ne zaman tamam olduğunu kimse söyleyemez. Test edilebilir hâli bir ölçü ister: "İlk kez kullanan öğrencilerin 9''da 8''i yardımsız sipariş verebilmeli."', 1, '5. ünite · Testable: test edilebilir story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-olcu', 'backlog', 'bl-u5', 5, 'mcq', 'derived', '"Ödeme hızlı olmalı" ifadesini test edilebilir yapan en iyi düzeltme hangisidir?', '{"choices":["Öğle saatinde ödemelerin %95''i 2 saniyede tamamlanmalı","Ödeme mümkün olduğunca hızlı olmalı","Ödeme rakip uygulamalardan hızlı olmalı","Ödeme öğrencileri memnun edecek kadar hızlı olmalı"]}', '{"index":0}', 'Test edilebilirlik ölçü ve koşul ister: hangi durumda (öğle saati), hangi ölçüyle (2 saniye), ne kadar sıklıkla (%95). Diğerleri hâlâ yoruma açıktır.', 2, '5. ünite · Testable: test edilebilir story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-test-yazmak', 'backlog', 'bl-u5', 5, 'tf', 'derived', 'Bir story için kabul testi yazamıyorsan, çoğu zaman story henüz yeterince anlaşılmamıştır.', '{}', '{"value":true}', 'Doğru. Test yazma denemesi belirsizliği açığa çıkarır: "Hangi durumda başarılı sayılacak?" sorusunun cevabı yoksa konuşma eksiktir. Bu yüzden kabul kriterleri refinement''ta yazılır (6. ünite).', 1, '5. ünite · Testable: test edilebilir story', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-kucuk-degerli', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'INVEST''in hangi iki harfi arasında en sık gerilim yaşanır?', '{"choices":["Small ve Valuable","Testable ve Estimable","Negotiable ve Testable","Independent ve Estimable"]}', '{"index":0}', 'Bir story''yi küçülttükçe değer taşıyan bir parça bırakmak zorlaşır; yatay bölmek en kolay küçültmedir ama değeri öldürür. İyi bölme desenleri (7. ünite) bu gerilimi çözmek içindir.', 2, '5. ünite · Harfler arasındaki gerilim ve INVEST''in kapıya dönüşmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-kapi', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Teknik Liderlik onay için "altı harfin hepsi işaretlenmeden story Sprint''e alınamaz" kuralı koydu. En olası yan etkisi nedir?', '{"choices":["Story''ler onay kuyruğunda bekler ve konuşma yerine form doldurulur","Story''lerin kalitesi kendiliğinden ve kalıcı olarak yükselir","Takımın velocity''si hemen ikiye katlanır","Kabul kriteri yazmaya artık hiç gerek kalmaz"]}', '{"index":0}', 'INVEST bir kapıya dönüşünce işaretlemek amaç olur; story''ler "uyumlu" görünür ama konuşma azalır, akış yavaşlar. INVEST''i refinement''ta bir soru listesi olarak kullanmak daha etkilidir (11. ünitede Definition of Ready tuzağı).', 2, '5. ünite · Harfler arasındaki gerilim ve INVEST''in kapıya dönüşmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u5-en-onemli', 'backlog', 'bl-u5', 5, 'mcq', 'derived', 'Bir story yalnızca bir harfte zayıfsa ve o harf Independent ise, hangisi en makul karardır?', '{"choices":["Bağımlılığı görünür yapıp sırayı ona göre kurmak","Story''yi bağımsız olana kadar Sprint''e almamak","Story''yi silip yeniden yazmak","Bağımlı olduğu story''yle aynı Sprint''e asla koymamak"]}', '{"index":0}', 'Bağımlılık her zaman yok edilemez. Görünür kılmak (araçta bağlantı, sıralamada yan yana) ve birlikte planlamak çoğu zaman yeterlidir. INVEST bir hedef yönü verir, mutlak bir kural değildir.', 3, '5. ünite · Harfler arasındaki gerilim ve INVEST''in kapıya dönüşmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-nedir', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Bir story''nin kabul kriterleri neyi tanımlar?', '{"choices":["Story''nin kabul edilmesi için sağlaması gereken, test edilebilir koşulları","Bütün story''lerin uyması gereken ortak kalite standardını","Story''nin hangi geliştiriciye verileceğini","Story''nin hangi Sprint''te yapılacağını"]}', '{"index":0}', 'Kabul kriterleri **o story''ye özgü** koşullardır: hangi durumda ne olmalı? Bütün story''lere uyan ortak kalite standardı ise Definition of Done''dır.', 1, '6. ünite · Kabul kriteri nedir, kim yazar, ne zaman yazılır', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-ne-zaman', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Kabul kriterleri en iyi ne zaman yazılır?', '{"choices":["Refinement''ta, story Sprint''e gelmeden önce, takımla birlikte","Sprint bittikten sonra, test sırasında","Story backlog''a ilk girdiği gün, bütün ayrıntısıyla","Sprint Review''da, paydaşlar ürünü görünce"]}', '{"index":0}', 'Kabul kriterleri konuşmanın sonucudur; story''nin sırası yaklaştığında, refinement''ta birlikte yazılır. Çok erken yazılırsa eskir (buzdağı), çok geç yazılırsa Sprint''te belirsizlik kalır.', 2, '6. ünite · Kabul kriteri nedir, kim yazar, ne zaman yazılır', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-kim', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Kabul kriterlerini kim yazar?', '{"choices":["Product Owner hesap verir; takım birlikte yazar","Yalnızca test uzmanı, Sprint sonunda","Yalnızca Teknik Liderlik, onay sırasında","Yalnızca story''yi yapacak geliştirici"]}', '{"index":0}', 'Rehber kabul kriterinden söz etmez, ama ne istendiği Product Owner''ın hesap verebilirliğindedir. Sahada en iyi kabul kriterleri Product Owner, geliştirici ve test uzmanının birlikte yazdıklarıdır (Three Amigos).', 2, '6. ünite · Kabul kriteri nedir, kim yazar, ne zaman yazılır', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-confirmation', 'backlog', 'bl-u6', 6, 'tf', 'derived', 'Kabul kriterleri, 3C''deki Confirmation parçasının bugünkü en yaygın biçimidir.', '{}', '{"value":true}', 'Doğru. Ron Jeffries''in 3C''sinde Confirmation story''nin bittiğini gösteren testlerdir; bugün bunlar kabul kriterleri ve onlardan türeyen kabul testleri olarak yazılır (4. ünite).', 1, '6. ünite · Kabul kriteri nedir, kim yazar, ne zaman yazılır', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-liste', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Hangisi kural listesi biçiminde yazılmış bir kabul kriteridir?', '{"choices":["Yüklenecek tutar en az 20, en çok 500 TL olabilir.","Verilen bakiye 10 TL, öğrenci 50 TL yüklediğinde, bakiye 60 TL olur.","Bir öğrenci olarak bakiyemi kartla yüklemek istiyorum.","Ödeme ekranı kullanıcı dostu olmalı."]}', '{"index":0}', 'Kural listesi bir kuralı tek cümleyle yazar. İkinci seçenek senaryo (Given/When/Then) biçimindedir; üçüncüsü story''nin kendisi; dördüncüsü test edilemez bir dilek.', 1, '6. ünite · Kural listesi biçiminde kabul kriterleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-ne-zaman-kural', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Kural listesi biçimi hangi durumda senaryo biçiminden daha uygundur?', '{"choices":["Kurallar basit ve birbirinden bağımsızsa","Davranış birçok adımlı bir akışa bağlıysa","Kabul testleri otomatik çalıştırılacaksa","Kurallar yalnızca örneklerle anlaşılabiliyorsa"]}', '{"index":0}', 'Basit, tek cümlelik kurallar için liste kısa ve okunaklıdır. Adımlı akışlar, durum değişiklikleri ve otomatikleşecek testler için Given/When/Then daha nettir.', 2, '6. ünite · Kural listesi biçiminde kabul kriterleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-sayisi', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Bir story''nin 18 kabul kriteri var. Bu en çok neyi gösterir?', '{"choices":["Story büyük olasılıkla bölünmesi gereken kadar büyük","Story mükemmel biçimde ayrıntılandırılmış","Takımın Definition of Done''ı eksik","Story''nin önceliği çok yüksek"]}', '{"index":0}', 'Çok sayıda kabul kriteri çoğu zaman birden çok iş kuralını ya da yolu tek story''ye sıkıştırmanın işaretidir. Kurallar bölme desenleri için iyi bir başlangıçtır: her kural (ya da kural grubu) ayrı bir story olabilir (7. ünite).', 2, '6. ünite · Kural listesi biçiminde kabul kriterleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-sira', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Given/When/Then kalıbında "When" neyi anlatır?', '{"choices":["Kullanıcının yaptığı eylemi ya da olayı","Başlangıç durumunu","Beklenen sonucu","Story''nin faydasını"]}', '{"index":0}', '**Given** başlangıç durumu (bağlam), **When** eylem ya da olay, **Then** beklenen sonuçtur. Türkçede "Verilen ... olduğunda ..., o zaman ..." ya da "... iken, ... yapınca, ... olur" diye yazılabilir.', 1, '6. ünite · Given/When/Then ve Gherkin', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-eksik', 'backlog', 'bl-u6', 6, 'mcq', 'derived', '"Verilen öğrencinin bakiyesi 30 TL; öğrenci 45 TL''lik menüyü seçtiğinde ..." senaryosunda eksik olan nedir?', '{"choices":["Then: beklenen sonuç","Given: başlangıç durumu","When: eylem","Hiçbir parça eksik değil"]}', '{"index":0}', 'Senaryo bir sonuç söylemiyor: ödeme reddedilecek mi, eksik tutar karttan mı alınacak, öğrenciye ne mesajı çıkacak? Then olmadan senaryo test edilemez.', 2, '6. ünite · Given/When/Then ve Gherkin', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-gherkin', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Gherkin nedir?', '{"choices":["Given/When/Then senaryoları için Cucumber''ın kullandığı dil","Kabul kriterlerini onaylayan bir yönetim aracı","Scrum Rehberi''nin kabul kriteri bölümü","Story point tahmin etmek için kullanılan kart destesi"]}', '{"index":0}', 'Gherkin; Feature, Scenario, Given, When, Then, And gibi anahtar kelimelerle düz metin senaryo yazmaya yarar. Cucumber gibi araçlar bu senaryoları otomatik test olarak çalıştırır. Türkçe anahtar kelimeleri de vardır.', 2, '6. ünite · Given/When/Then ve Gherkin', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-tek-davranis', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'İyi bir Given/When/Then senaryosu için hangisi doğrudur?', '{"choices":["Tek bir davranışı anlatır; birden çok When zinciri kurmaz","Ekrandaki her düğmeye tıklamayı adım adım anlatır","Mümkün olduğunca çok Then içerir","Tablo ve API adı gibi teknik ayrıntıları içerir"]}', '{"index":0}', 'Senaryo bir davranışı iş dilinde anlatır. Arayüz adımlarıyla ("butona tıkla, alana yaz") dolu senaryolar kırılgandır ve asıl kuralı gizler. Birden çok When genelde birden çok senaryo demektir.', 2, '6. ünite · Given/When/Then ve Gherkin', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-bdd-kim', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Behaviour-Driven Development (BDD) yaklaşımını "Introducing BDD" yazısıyla tanıtan kimdir?', '{"choices":["Dan North","Kent Beck","Ken Schwaber","Alistair Cockburn"]}', '{"index":0}', 'Dan North BDD''yi 2006''daki "Introducing BDD" yazısıyla tanıttı; Given/When/Then kalıbı da onun ve Chris Matts''in çalışmalarından gelir. Kent Beck XP''nin ve TDD''nin, Schwaber Scrum''un, Cockburn Crystal yöntemlerinin adıdır.', 1, '6. ünite · BDD ve Specification by Example', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-sbe', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Gojko Adzic''in Specification by Example yaklaşımının ana fikri nedir?', '{"choices":["Gereksinimi somut örneklerle tanımlayıp örnekleri test yapmak","Her gereksinim için ayrıntılı bir şartname belgesi yazmak","Test yazmayı Sprint''in sonuna bırakmak","Örnekleri yalnızca kullanım kılavuzunda göstermek"]}', '{"index":0}', 'Soyut kurallar farklı okunur; somut örnekler ("bakiye 30, menü 45 → ödeme reddedilir, eksik 15 TL gösterilir") yanlış anlamayı ortaya çıkarır. Aynı örnekler sonra otomatik testlere ve canlı belgeye dönüşür.', 2, '6. ünite · BDD ve Specification by Example', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-ornek-gucu', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Elif "burs öğrencileri indirimli öder" kuralını yazdı. Deniz bir örnek istiyor. Örneğin en büyük faydası hangisidir?', '{"choices":["Kuralın gizli belirsizliklerini ortaya çıkarması","Story''nin tahminini kendiliğinden belirlemesi","Kuralı Teknik Liderlik onayından muaf tutması","Kabul kriterine olan ihtiyacı ortadan kaldırması"]}', '{"index":0}', 'Örnek yazmaya başlayınca sorular çıkar: indirim yüzde mi, sabit mi? Ek yemekte de geçerli mi? Burs dönem ortasında biterse? Bu sorular Sprint''te değil refinement''ta cevaplanır.', 2, '6. ünite · BDD ve Specification by Example', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-renkler', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Matt Wynne''in Example Mapping''inde kartların renkleri neyi temsil eder?', '{"choices":["Sarı: story, mavi: kural, yeşil: örnek, kırmızı: soru","Sarı: epic, mavi: feature, yeşil: story, kırmızı: task","Sarı: yapılacak, mavi: yapılıyor, yeşil: bitti, kırmızı: engel","Sarı: PO, mavi: geliştirici, yeşil: test, kırmızı: müşteri"]}', '{"index":0}', 'Example Mapping (Matt Wynne, 2015): üstte sarı story kartı, altında her kural için mavi kart, her kuralın altında onu açıklayan yeşil örnekler, cevaplanamayan sorular için kırmızı kartlar.', 1, '6. ünite · Example Mapping: kural, örnek ve soru kartları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-kirmizi-cok', 'backlog', 'bl-u6', 6, 'mcq', 'derived', '25 dakikalık Example Mapping sonunda masada altı kırmızı kart var. Bu ne anlama gelir?', '{"choices":["Story hazır değil; önce soruların cevabı bulunmalı","Story hemen Sprint''e alınmaya hazır","Story bölünmeli, çünkü çok fazla kural var","Takımın Definition of Done''ı eksik"]}', '{"index":0}', 'Kırmızı kartlar cevaplanmamış sorulardır; çoğu zaman bir paydaşa sorulması gerekir. Çok sayıda kırmızı kart story''nin henüz yeterince anlaşılmadığını gösterir. Çok sayıda **mavi** kart ise story''nin büyük olduğunu ve bölünebileceğini gösterir.', 2, '6. ünite · Example Mapping: kural, örnek ve soru kartları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-mavi-cok', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Example Mapping''de bir story''nin altında dokuz mavi kart birikti. En makul sonuç hangisidir?', '{"choices":["Story büyük; kurallara göre bölünebilir","Story tam olarak doğru büyüklükte","Kırmızı kartlar eksik, oturum tekrarlanmalı","Mavi kartlar yeşillere çevrilmeli"]}', '{"index":0}', 'Her mavi kart bir iş kuralıdır. Dokuz kural tek story için çoktur; kurallar (ya da kural grupları) ayrı story''lere dönüştürülebilir. Bu, 7. ünitedeki "iş kuralı çeşitleri" bölme desenidir.', 2, '6. ünite · Example Mapping: kural, örnek ve soru kartları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-sure', 'backlog', 'bl-u6', 6, 'tf', 'derived', 'Example Mapping kısa bir time-box''la (yaygın olarak 25 dakika civarı) yapılır; süreye sığmayan story ya çok büyüktür ya da yeterince anlaşılmamıştır.', '{}', '{"value":true}', 'Doğru. Wynne story başına yaklaşık 25 dakika önerir. Süre bir ölçü işlevi görür: bitmiyorsa story bölünmeli ya da kırmızı soruların cevabı aranmalıdır.', 2, '6. ünite · Example Mapping: kural, örnek ve soru kartları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-kimler', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Three Amigos toplantısındaki üç bakış açısı hangileridir?', '{"choices":["İş, geliştirme ve test","Product Owner, Scrum Master ve yönetici","Tasarım, satış ve destek","Mimar, veri tabanı uzmanı ve DevOps"]}', '{"index":0}', 'Three Amigos bir story''yi iş (ne isteniyor, neden), geliştirme (nasıl yapılır, ne zor) ve test (nasıl doğrulanır, ne bozulabilir) bakış açılarından birlikte konuşmaktır. Kişi sayısı üç olmak zorunda değil; önemli olan üç bakış açısı.', 1, '6. ünite · Three Amigos', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-test-gec', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Squad''da test uzmanları story''yi ilk kez Sprint''in son günlerinde görüyor. Three Amigos bu soruna nasıl yardım eder?', '{"choices":["Test bakışı refinement''ta gelir; kenar durumlar önceden yakalanır","Test uzmanlarına Sprint sonunda daha çok zaman kalır","Testi Product Owner''ın yapmasını sağlar","Testleri bir sonraki Sprint''e taşımayı kolaylaştırır"]}', '{"index":0}', 'Deniz ya da Tuba''nın "bakiye eksiye düşerse ne olur?" sorusu refinement''ta sorulursa bir kabul kriteri olur; Sprint''in son günü sorulursa bir hata olur.', 2, '6. ünite · Three Amigos', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-fark', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Kabul kriteri ile Definition of Done arasındaki fark nedir?', '{"choices":["Kabul kriteri o story''ye özgüdür; DoD bütün öğeler için ortaktır","Kabul kriterini Developers, DoD''yi Product Owner yazar","Kabul kriteri Rehber''de zorunludur; DoD isteğe bağlıdır","İkisi aynı şeydir; adları araca göre değişir"]}', '{"index":0}', 'DoD Rehber''de Increment''in taahhüdüdür ve **her** öğe için geçerlidir (kod incelendi, testler geçti, erişilebilirlik denetlendi). Kabul kriteri ise o story''nin işlevsel koşullarıdır. Bir öğe ikisini birden karşılamadan Done olmaz.', 1, '6. ünite · Kabul kriteri ile Definition of Done farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-hangisi-1', 'backlog', 'bl-u6', 6, 'mcq', 'derived', '"Kod en az bir kişi tarafından incelendi" maddesi nereye yazılmalıdır?', '{"choices":["Definition of Done''a","Her story''nin kabul kriterine","Product Goal''e","Sprint Goal''e"]}', '{"index":0}', 'Her öğe için geçerli bir kalite ölçütü DoD''ye aittir. Her story''ye tek tek kopyalamak tekrar ve unutulma riski üretir.', 2, '6. ünite · Kabul kriteri ile Definition of Done farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-hangisi-2', 'backlog', 'bl-u6', 6, 'mcq', 'derived', '"Ayırtma, yemekten 30 dakika öncesine kadar iptal edilebilir" maddesi nereye yazılmalıdır?', '{"choices":["Ayırtma story''sinin kabul kriterine","Definition of Done''a","Product Goal''e","Definition of Ready''ye"]}', '{"index":0}', 'Bu yalnızca ayırtma davranışına ait bir iş kuralıdır; o story''nin kabul kriteridir.', 2, '6. ünite · Kabul kriteri ile Definition of Done farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-belirsiz', 'backlog', 'bl-u6', 6, 'mcq', 'derived', 'Hangi kabul kriteri ölçülebilir değildir?', '{"choices":["Bildirim makul bir sürede gelmelidir.","Bildirim sipariş hazırlandıktan sonra 10 saniye içinde gelir.","Bildirim yalnızca bildirime izin vermiş öğrencilere gider.","Bildirimde sıra numarası ve teslim noktası yazar."]}', '{"index":0}', '"Makul" kişiden kişiye değişir. Ölçülebilir kabul kriteri bir sayı, bir durum ya da gözlenebilir bir sonuç içerir.', 1, '6. ünite · Ölçülebilirlik, olumsuz yollar ve kenar durumlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-olumsuz-yol', 'backlog', 'bl-u6', 6, 'mcq', 'derived', '"Kartla bakiye yükleme" story''sinin kabul kriterleri yalnızca başarılı yüklemeyi anlatıyor. En önemli eksik hangisidir?', '{"choices":["Kart reddedilince ne olacağı","Yükleme düğmesinin rengi","Ödeme sağlayıcısının şirket adı","Story''yi yapacak geliştiricinin adı"]}', '{"index":0}', 'Olumsuz yollar (kart reddi, zaman aşımı, iki kez basma) hataların en sık çıktığı yerdir. Test uzmanının "ne bozulabilir?" sorusu bu yüzden refinement''ta değerlidir.', 2, '6. ünite · Ölçülebilirlik, olumsuz yollar ve kenar durumlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u6-kenar', 'backlog', 'bl-u6', 6, 'mcq', 'derived', '"Yükleme en az 20, en çok 500 TL" kuralı için hangi örnek bir kenar durumudur?', '{"choices":["Tam 500 TL yüklemek","100 TL yüklemek","250 TL yüklemek","50 TL yüklemek"]}', '{"index":0}', 'Kenar durumlar sınırın tam üstü ve hemen yanıdır: 19,99 / 20 / 500 / 500,01. Hatalar en sık sınırlarda çıkar; örneklerden biri mutlaka sınırda olmalıdır.', 2, '6. ünite · Ölçülebilirlik, olumsuz yollar ve kenar durumlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-fayda', 'backlog', 'bl-u7', 7, 'mcq', 'derived', 'Büyük bir story''yi bölmenin en önemli faydası hangisidir?', '{"choices":["Değer daha erken teslim edilir ve geri bildirim daha erken gelir","Toplam iş miktarı kendiliğinden azalır","Takımın story point sayısı artar ve hızlı görünür","Kabul kriteri yazmaya gerek kalmaz"]}', '{"index":0}', 'Bölme toplam işi azaltmaz (hatta biraz artırabilir), ama değeri parçalar hâlinde erken getirir: ilk dilim kullanılırken sonrakiler öğrenilenle şekillenir. Bazı dilimlerin hiç gerekmediği de ortaya çıkabilir.', 1, '7. ünite · Neden küçük story? Akış, geri bildirim ve risk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-yapilmayan', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"Kupon" feature''ı bölündü; ilk iki dilim yayına girince Elif üçüncü dilime ("kampanya takvimi") gerek olmadığını gördü. Bu neyi gösterir?', '{"choices":["Bölmenin, gereksiz işi hiç yapmama fırsatı verdiğini","Bölmenin yanlış yapıldığını","Product Owner''ın baştan hatalı plan yaptığını","Üçüncü dilimin yine de yapılması gerektiğini"]}', '{"index":0}', 'Bölmenin gizli faydası budur: büyük bir story bütün hâlinde yapılsaydı kampanya takvimi de yapılacaktı. Dilimler sırayla gelince her adımda "bir sonrakine hâlâ ihtiyaç var mı?" diye sorulabilir.', 2, '7. ünite · Neden küçük story? Akış, geri bildirim ve risk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-sprint-sonu', 'backlog', 'bl-u7', 7, 'mcq', 'derived', 'Squad''ın Sprint''lerinde işin çoğu son iki güne yığılıyor ve bazı story''ler taşıyor. Hangi çare en çok yardım eder?', '{"choices":["Story''leri Sprint boyunca bitebilecek küçük dilimlere bölmek","Sprint''i bir hafta uzatmak","Story''leri daha erken test etmeyi yasaklamak","Her geliştiriciye ayrı bir büyük story vermek"]}', '{"index":0}', 'Büyük story''ler Sprint''in sonuna kadar "devam ediyor" görünür ve birden biter ya da bitmez. Küçük dilimler Sprint boyunca akar; sorun erken görünür.', 2, '7. ünite · Neden küçük story? Akış, geri bildirim ve risk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-tanim', 'backlog', 'bl-u7', 7, 'mcq', 'derived', 'Dikey dilim (vertical slice) nedir?', '{"choices":["Bütün katmanlardan geçen, değer taşıyan ince parça","Yalnızca kullanıcı arayüzünü kapsayan parça","Yalnızca veri tabanını kapsayan parça","Bir Sprint''in ilk yarısında yapılan işler"]}', '{"index":0}', 'Bir pastayı dikey kestiğinde her dilimde bütün katmanlar vardır (Bill Wake''in katmanlı pasta benzetmesi). Story için de dikey dilim arayüzden veri tabanına kadar ince bir yol açar ve kullanıcıya çalışan bir şey verir.', 1, '7. ünite · Dikey ve yatay dilim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-yatay-zarar', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"Önceden sipariş" feature''ını "veri tabanı", "servis", "ekran" diye bölmenin en büyük zararı nedir?', '{"choices":["Üçü bitmeden kullanıcıya değer ve geri bildirim yok","Her parçanın tahmini daha zor olur","Parçalar birbirinden fazla bağımsız olur","Ekran tasarımcısının işi azalır"]}', '{"index":0}', 'Yatay dilimler tek tek bittiğinde "ilerleme" var gibi görünür, ama kullanıcı hiçbir şey alamaz; entegrasyon riski en sona kalır. INVEST''te hem Valuable hem Independent bozulur.', 2, '7. ünite · Dikey ve yatay dilim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-dikey-sec', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"Önceden sipariş" için hangisi bir dikey dilimdir?', '{"choices":["Öğrenci günün tek menüsünü bakiyesinden ödeyerek ayırtabilir","Sipariş tablosu ve ilişkileri oluşturulur","Sipariş ekranının bütün tasarımları çizilir","Sipariş servisinin bütün uç noktaları yazılır"]}', '{"index":0}', 'İlk seçenek ince ama uçtan uca çalışır: ekran, servis, veri ve ödeme birlikte. Diğerleri tek bir katmanın tamamıdır.', 2, '7. ünite · Dikey ve yatay dilim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-hamburger', 'backlog', 'bl-u7', 7, 'mcq', 'derived', 'Gojko Adzic''in "hamburger yöntemi" bölmede nasıl çalışır?', '{"choices":["Akışın adımlarını katman gibi dizip her adımdan en basit seçeneği alır","Story''yi önce arayüz, sonra servis, sonra veri olarak üç katmana böler","Her story''ye bir hamburger fiyatı kadar puan verir","Takımı üç gruba bölüp her gruba bir katman verir"]}', '{"index":0}', 'Hamburger yönteminde akışın adımları (sipariş al, öde, bildir) hamburgerin katmanları gibi alt alta yazılır; her adım için basitten karmaşığa seçenekler sıralanır. İlk dilim her katmandan bir seçenek alan ince bir hamburgerdir; böylece dikey kalır.', 3, '7. ünite · Dikey ve yatay dilim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-harfler', 'backlog', 'bl-u7', 7, 'mcq', 'derived', 'Mike Cohn''un SPIDR kısaltmasındaki beş bölme yolu hangileridir?', '{"choices":["Spike, Path, Interface, Data, Rules","Story, Plan, Increment, Done, Review","Small, Precise, Independent, Done, Ready","Sprint, Product, Iteration, Delivery, Release"]}', '{"index":0}', 'SPIDR: **Spike** (önce araştır), **Path** (farklı yollar), **Interface** (farklı arayüzler, cihazlar), **Data** (farklı veri türleri), **Rules** (iş kurallarını ertele ya da ayır).', 1, '7. ünite · SPIDR: Spike, Path, Interface, Data, Rules', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-path', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"Öğrenci bakiye yükler" story''si kartla, havaleyle ve kampüs kioskundan nakitle yüklemeyi kapsıyor. SPIDR''ın hangi yolu en doğal bölmeyi verir?', '{"choices":["Path","Spike","Rules","Interface"]}', '{"index":0}', 'Aynı hedefe giden farklı yollar (kart, havale, kiosk) ayrı story olabilir. İlk dilim en çok kullanılan yol (kart) olur; diğerleri sonra gelir.', 2, '7. ünite · SPIDR: Spike, Path, Interface, Data, Rules', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-interface', 'backlog', 'bl-u7', 7, 'mcq', 'derived', 'Menü ekranı hem telefonda hem yemekhane girişindeki büyük ekranda hem de ekran okuyucuyla kullanılacak. Hangi SPIDR yolu uygundur?', '{"choices":["Interface","Data","Path","Spike"]}', '{"index":0}', 'Farklı arayüzler, cihazlar ya da tarayıcılar ayrı dilimler olabilir: önce telefon, sonra giriş ekranı. Erişilebilirlik ise genellikle ertelenmez, DoD''de yer alır (8. ünite).', 2, '7. ünite · SPIDR: Spike, Path, Interface, Data, Rules', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-rules', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"Ayırtma" story''sinde iptal süresi, günlük ayırtma sınırı ve burslulara öncelik kuralları var. SPIDR''ın Rules yolu ne önerir?', '{"choices":["Önce tek kurallı hâli yapıp diğer kuralları sonraki story''lere bırakmak","Bütün kuralları aynı story''de bırakıp daha büyük tahmin vermek","Kuralları Definition of Done''a taşımak","Kuralları yalnızca kabul testinde kontrol etmek"]}', '{"index":0}', 'Rules bölmesi, iş kurallarının bir kısmını ilk dilimde göz ardı edip sonra eklemektir. İlk dilim temel ayırtmayı getirir; günlük sınır ve burs önceliği sonraki story''ler olur.', 2, '7. ünite · SPIDR: Spike, Path, Interface, Data, Rules', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-data', 'backlog', 'bl-u7', 7, 'mcq', 'derived', 'Menü verisi ilk etapta yalnızca merkez yemekhaneden gelecek; diğer üç yemekhanenin verileri farklı biçimlerde. SPIDR''ın hangi yolu bu bölmeyi anlatır?', '{"choices":["Data","Interface","Path","Rules"]}', '{"index":0}', 'Farklı veri türleri ya da kaynakları ayrı dilimlerdir: önce tek kaynak, sonra diğerleri. İlk dilim çalışır ve öğrenilenler diğer kaynaklara uygulanır.', 2, '7. ünite · SPIDR: Spike, Path, Interface, Data, Rules', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-kim', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"İş akışı adımları, iş kuralı çeşitleri, büyük çaba, basit/karmaşık, ertelenen performans..." diye sıralanan bölme desenleri kime aittir?', '{"choices":["Richard Lawrence","Bill Wake","Ron Jeffries","Taiichi Ohno"]}', '{"index":0}', 'Richard Lawrence 2009''da story bölme desenlerini yazdı, sonra bunları bir akış şemasına dönüştürdü (Humanizing Work). Bill Wake INVEST''in, Ron Jeffries 3C''nin, Taiichi Ohno Toyota Üretim Sistemi''nin adıdır.', 1, '7. ünite · Richard Lawrence''ın bölme desenleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-ilk-soru', 'backlog', 'bl-u7', 7, 'mcq', 'derived', 'Lawrence''ın akış şemasında bölmeye başlamadan önce story için sorulan ilk kontrol hangisidir?', '{"choices":["Small dışında INVEST''e uyuyor mu?","Story kaç geliştiriciye bölünebilir?","Story''nin hangi katmanları var?","Story''nin son tarihi ne?"]}', '{"index":0}', 'Lawrence önce story''nin Small dışındaki INVEST harflerine uyup uymadığına bakmayı önerir. Değersiz ya da test edilemez bir story''yi bölmek, küçük değersiz parçalar üretir; önce story düzeltilir.', 3, '7. ünite · Richard Lawrence''ın bölme desenleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-en-iyi-bolme', 'backlog', 'bl-u7', 7, 'mcq', 'derived', 'Lawrence''a göre birden çok bölme yolu bulunduğunda hangisi tercih edilir?', '{"choices":["Atılabilecek düşük değerli parçayı ortaya çıkaran","Mümkün olan en çok sayıda story üreten","Takımın en sevdiği teknolojiyi öne alan","Katmanları birbirinden ayıran"]}', '{"index":0}', 'İyi bir bölme ya düşük değerli bir parçayı ortaya çıkarır (o parça yapılmayabilir) ya da kabaca eşit parçalar verir (Product Owner sıralarken esneklik kazanır).', 3, '7. ünite · Richard Lawrence''ın bölme desenleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-is-akisi', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"Yemekhane görevlisi günlük menüyü hazırlar, diyetisyen onaylar, menü yayınlanır" akışı nasıl bölünebilir?', '{"choices":["Önce baştan sona en basit akış, sonra ara adımlar ayrı story''ler","Önce bütün hazırlama ekranı, sonra bütün onay ekranı","Önce veri tabanı, sonra servis, sonra arayüz","Akış bölünemez; tek story olarak yapılmalı"]}', '{"index":0}', 'İş akışı adımlarıyla bölmede ilk dilim akışın başını ve sonunu bağlar (onaysız, doğrudan yayın); onay adımı ayrı story olur. "Önce bütün ilk adım" yaklaşımı akışı uzun süre yarım bırakır.', 2, '7. ünite · İş akışı adımları ve işlem türleri ile bölme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-crud', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"Görevli menüyü yönetir" story''si için işlem türlerine (CRUD) göre bölme nasıl görünür?', '{"choices":["Menü ekle, menüyü düzenle, menüyü sil ayrı story''ler","Menü ekranı, menü servisi, menü tablosu","Sabah menüsü, öğle menüsü, akşam menüsü","Önce tasarım, sonra kodlama, sonra test"]}', '{"index":0}', '"Yönet" kelimesi genelde oluşturma, okuma, güncelleme ve silmeyi saklar. Her biri ayrı değer taşır; belki ilk sürümde silme gerekmez. Üçüncü seçenek veri çeşidine göre bölmedir; ikinci ve dördüncü yataydır.', 1, '7. ünite · İş akışı adımları ve işlem türleri ile bölme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-yonet-kelimesi', 'backlog', 'bl-u7', 7, 'tf', 'derived', 'Story''de "yönet", "işle", "düzenle" gibi geniş fiiller birden çok işlemi sakladığı için bölme fırsatı işaret eder.', '{}', '{"value":true}', 'Doğru. Lawrence bu fiilleri işlem türlerine göre bölme deseninin ipucu olarak anar. "Bakiyeyi yönet" içinde yükleme, görme, iade ve aktarma vardır.', 2, '7. ünite · İş akışı adımları ve işlem türleri ile bölme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-basit-once', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"Basit/karmaşık" bölme deseni ne önerir?', '{"choices":["Önce story''nin en basit hâlini yapıp karmaşık varyasyonları sonra eklemek","Önce en karmaşık hâli yapıp basitleri kendiliğinden bitirmek","Story''yi basit ve karmaşık diye iki geliştiriciye vermek","Karmaşık story''leri backlog''dan çıkarmak"]}', '{"index":0}', 'Konuşmada "peki şu durumda?" soruları story''yi büyütmeye başlayınca, en basit çalışan hâl bir story olur, karmaşık durumlar (grup siparişi, özel diyet) sonraki story''ler olur.', 1, '7. ünite · Basit/karmaşık, büyük çaba ve ertelenen performans', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-performans', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"Ertelenen performans" deseni hangi durumda uygundur?', '{"choices":["Önce çalışan hâl, hız ve ölçek sonraki story''de olabiliyorsa","Ürün için performans hiçbir zaman önemli değilse","Story''nin tahmini zaten 1 puandan küçükse","Takım performans testini hiçbir zaman yapmıyorsa"]}', '{"index":0}', '"Çalıştır, sonra hızlandır." İlk dilim pilot yemekhanede 50 öğrenciyle çalışır; 5000 öğrenciye ölçeklemek ayrı story olur. Ama öğle saatinde zaten çökecekse bu erteleme kabul edilemez; karar bilinçli verilir.', 2, '7. ünite · Basit/karmaşık, büyük çaba ve ertelenen performans', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-buyuk-caba', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"Büyük çaba" (major effort) deseninde ilk story neden diğerlerinden büyük tahmin edilir?', '{"choices":["Ortak altyapı ilk story''de kurulur; sonrakiler onu kullanır","İlk story her zaman en değerlisidir","Product Owner ilk story''yi büyük tahmin etmek zorundadır","İlk story''de test yazılmaz"]}', '{"index":0}', 'Örneğin ilk ödeme yöntemi altyapıyı getirir; ikinci ve üçüncü yöntemler çok daha küçüktür. Lawrence bu durumda önce **herhangi bir** yöntemi yapmayı, kalanları sonra eklemeyi önerir.', 3, '7. ünite · Basit/karmaşık, büyük çaba ve ertelenen performans', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-epic-feature', 'backlog', 'bl-u7', 7, 'mcq', 'derived', '"Bekleme süresini yarıya indir" epic''ini feature''lara bölmenin en iyi başlangıcı hangisidir?', '{"choices":["Hedefe katkı yapacak farklı yetenekleri çıkarmak","Epic''i takımdaki geliştirici sayısına bölmek","Epic''i ayların sayısına bölmek","Epic''i arayüz, servis ve veri katmanlarına bölmek"]}', '{"index":0}', 'Epic''ten feature''a inerken soru "hangi yetenekler bu hedefe katkı yapar?" sorusudur; impact mapping (3. ünite) burada işe yarar. Her feature ayrı ölçülebilir ve sırası değişebilir.', 2, '7. ünite · Epic''ten feature''a, feature''dan story''ye bölme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-yeterince-kucuk', 'backlog', 'bl-u7', 7, 'mcq', 'derived', 'Bölmeyi ne zaman bırakırsın?', '{"choices":["Sprint''e rahat sığıp hâlâ değer taşıdığında","Story tek satır koda indiğinde","Story''nin tahmini 1 puana indiğinde","Takımdaki herkese bir story düştüğünde"]}', '{"index":0}', 'Amaç en küçük parça değil, değer taşıyan ve Sprint''te birkaç günde bitebilen parçadır. Daha da küçülmek story''yi task''a dönüştürür.', 2, '7. ünite · Epic''ten feature''a, feature''dan story''ye bölme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u7-kim-boler', 'backlog', 'bl-u7', 7, 'tf', 'derived', 'Story bölmek yalnızca Product Owner''ın işidir; Developers''ın bölmeye katılması gerekmez.', '{}', '{"value":false}', 'Yanlış. Product Owner değeri, Developers teknik riski ve ortak altyapıyı bilir. En iyi bölmeler refinement''ta birlikte bulunur; hangi dilimin gerçekten bağımsız ve küçük olduğunu çoğu zaman Developers söyler.', 1, '7. ünite · Epic''ten feature''a, feature''dan story''ye bölme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-tanim', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Hangisi fonksiyonel olmayan bir gereksinimdir?', '{"choices":["Menü ekranı ekran okuyucuyla kullanılabilmeli","Öğrenci menüyü görüp yemek seçebilmeli","Görevli günün menüsünü ekleyebilmeli","Öğrenci bakiyesini kartla yükleyebilmeli"]}', '{"index":0}', 'Fonksiyonel gereksinim sistemin **ne yaptığını**, fonksiyonel olmayan gereksinim **nasıl yaptığını** (hız, güvenlik, erişilebilirlik, ölçeklenebilirlik, kullanılabilirlik) anlatır. Erişilebilirlik bir kalite özelliğidir.', 1, '8. ünite · Fonksiyonel olmayan gereksinimler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-ilities', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Fonksiyonel olmayan gereksinimlere İngilizcede neden sıkça "-ilities" denir?', '{"choices":["Çoğunun İngilizce adı -ility ile biter: usability, scalability...","Yalnızca yasal sorumluluk gereksinimlerini kapsadıkları için","Hepsi Product Owner''ın sorumluluğunda olduğu için","Agile Manifesto''nun bir ilkesinin adı olduğu için"]}', '{"index":0}', 'Kullanılabilirlik, ölçeklenebilirlik, erişilebilirlik, bakım kolaylığı gibi kalite özelliklerinin İngilizce adları çoğunlukla -ility ile biter; bu yüzden gayriresmî olarak "ilities" diye anılırlar.', 2, '8. ünite · Fonksiyonel olmayan gereksinimler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-unutulur', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'NFR''ler backlog''da görünmezse en olası sonuç hangisidir?', '{"choices":["Ürün çalışır ama yoğun saatte çöker","Story''lerin tahminleri daha kesin olur","Takım daha az teknik borç biriktirir","Sprint Review''lar daha kısa sürer"]}', '{"index":0}', 'Kalite özellikleri story''lerde açıkça yazılmazsa "zaten öyle olmalı" diye varsayılır ve kimse planlamaz. Öğle saatinde 3000 öğrencinin aynı anda sipariş vermesi bir gün herkesin sorunu olur.', 2, '8. ünite · Fonksiyonel olmayan gereksinimler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-uc-yer', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Bir fonksiyonel olmayan gereksinim backlog''da hangi üç yerden birine yazılabilir?', '{"choices":["İlgili story''nin kabul kriterine, ayrı bir öğeye ya da Definition of Done''a","Product Goal''e, Sprint Goal''e ya da Retrospective notlarına","Yalnızca ayrı bir mimari dokümana; backlog''a yazılmaz","Yalnızca Teknik Liderlik''in onay formuna"]}', '{"index":0}', 'Yalnızca bir story''yi ilgilendiriyorsa o story''nin kabul kriteri; her öğe için geçerliyse DoD; kendisi iş gerektiriyorsa (önbellek kurmak, yük testi altyapısı) ayrı bir backlog öğesi.', 1, '8. ünite · NFR nereye yazılır: kabul kriteri, ayrı öğe ya da DoD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-dod-mu', 'backlog', 'bl-u8', 8, 'mcq', 'derived', '"Her yeni ekran WCAG 2.1 AA erişilebilirlik denetiminden geçer" maddesi nereye yazılmalıdır?', '{"choices":["Definition of Done''a","Tek bir story''nin kabul kriterine","Ayrı bir erişilebilirlik story''sine","Product Goal''e"]}', '{"index":0}', 'Bütün ekranlar için geçerli bir kalite ölçütü DoD''ye aittir. Ayrı bir "erişilebilirlik story''si" Sprint''ler sonra gelir ve her ekranı yeniden açmayı gerektirir.', 2, '8. ünite · NFR nereye yazılır: kabul kriteri, ayrı öğe ya da DoD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-ayri-oge', 'backlog', 'bl-u8', 8, 'mcq', 'derived', '"Öğle saatinde 3000 eş zamanlı kullanıcıyı kaldırmak için önbellek katmanı kur" işi nereye yazılmalıdır?', '{"choices":["Ayrı bir backlog öğesine","Definition of Done''a","Bir story''nin kabul kriterine","Hiçbir yere; zaten yapılmalı"]}', '{"index":0}', 'Bu bir kalite koşulu değil, kendisi iş gerektiren bir değişikliktir; ayrı bir öğe olarak sıralanır ve değeri (öğle saatinde kesinti olmaması) yazılır.', 2, '8. ünite · NFR nereye yazılır: kabul kriteri, ayrı öğe ya da DoD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-kabul-kriteri', 'backlog', 'bl-u8', 8, 'mcq', 'derived', '"Sipariş onayı 2 saniyede görünür" ölçütü yalnızca sipariş story''sini ilgilendiriyor. Nereye yazılır?', '{"choices":["O story''nin kabul kriterine","Definition of Done''a","Ayrı bir performans story''sine","Sprint Goal''e"]}', '{"index":0}', 'Yalnızca bir davranışı ilgilendiren kalite koşulu, o story''nin kabul kriteridir; story bu koşulu sağlamadan Done olmaz.', 2, '8. ünite · NFR nereye yazılır: kabul kriteri, ayrı öğe ya da DoD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-enabler', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'SAFe''te "enabler" ne demektir?', '{"choices":["Sonraki işleri mümkün kılan altyapı işi","Takıma yetki veren ve onu yöneten kişi","Her Sprint''i başlatan kısa toplantı","Story''leri son kez onaylayan kişi"]}', '{"index":0}', 'SAFe enabler epic, feature ve story''leri dört türe ayırır: keşif (exploration), mimari, altyapı ve uyum (compliance). Kullanıcıya doğrudan görünmezler ama sonraki iş değerini mümkün kılarlar.', 2, '8. ünite · Teknik story ve enabler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-deger-yaz', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Teknik bir öğeyi Product Owner''ın sıralayabileceği hâle getirmenin en iyi yolu hangisidir?', '{"choices":["Hangi riski azalttığını ya da neyi mümkün kıldığını yazmak","\"Bir geliştirici olarak\" kalıbıyla yazıp bırakmak","En üst sıraya koyup gerekçe yazmamak","Tahminini yüksek tutmak"]}', '{"index":0}', '"Ödeme kütüphanesini yeni sürüme geçir; eski sürüm Mart''ta güvenlik desteğini bitiriyor, kart yüklemesi durabilir." Riskin ve tarihin yazılması, Product Owner''ın teknik işi değer işleriyle aynı terazide tartmasını sağlar.', 2, '8. ünite · Teknik story ve enabler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-teknik-yuzde', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Squad her Sprint kapasitenin bir kısmını teknik işlere ayırmak istiyor. Bu yaklaşım hakkında hangisi doğrudur?', '{"choices":["Yaygın ve meşru; ama öğeler yine görünür ve gerekçeli olmalı","Rehber''e aykırıdır; teknik iş Sprint''e alınamaz","Product Owner''ın onayına hiç gerek kalmaz","Teknik işler tahmin edilmeden yapılmalıdır"]}', '{"index":0}', 'Birçok takım teknik iş, bakım ya da borç için sabit bir pay (ör. %15-20) ayırır. Bu, Product Owner''la varılan bir anlaşmadır; işler yine backlog''da görünür ve sıralıdır.', 2, '8. ünite · Teknik story ve enabler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-spike-tanim', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Spike nedir?', '{"choices":["Bir soruyu cevaplamak için yapılan time-box''lı araştırma","Sprint''te aniden yükselen burndown grafiği","Bir story''nin en zor kabul kriteri","Yayından sonra yapılan acil düzeltme"]}', '{"index":0}', 'Spike XP''den gelen bir terimdir: bilinmeyen bir şeyi öğrenmek için kısa, sınırlı bir deneme. Çıktısı çalışan özellik değil **bilgidir**: bir karar, bir tahmin, bir prototip.', 1, '8. ünite · Spike: time-box''lı araştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-timebox', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Spike''ın time-box''lı olması neden önemlidir?', '{"choices":["Araştırma uzamasın, öğrenilene göre karar verilsin","Spike''lar Sprint Review''da gösterilemesin","Spike''lar tahmin gerektirmesin","Spike''ı yalnızca Tech Lead yapabilsin"]}', '{"index":0}', 'Araştırmanın doğal bir sonu yoktur; time-box (ör. iki gün) sonunda ne öğrenildiğine bakılır ve karar verilir: story tahmin edilebilir mi, başka bir yol mu denenmeli?', 2, '8. ünite · Spike: time-box''lı araştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-cikti', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Kart okuyucu sistemiyle ilgili iki günlük spike bitti. Hangisi iyi bir spike çıktısıdır?', '{"choices":["API var, test ortamı yok; story 8 puan, önce ortam istenmeli","Turnike entegrasyonu yarım yazıldı, gelecek Sprint bitirilecek","Araştırma sürüyor; bir hafta daha gerekiyor","Spike''ın kodu doğrudan canlıya alındı"]}', '{"index":0}', 'İyi bir spike bir soruyu cevaplar ve bir karar ya da tahmin üretir. Yarım bir özellik ya da sınırsız uzayan araştırma spike''ın amacını kaçırır; spike kodu çoğu zaman atılır ya da yeniden yazılır.', 2, '8. ünite · Spike: time-box''lı araştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-cok-spike', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Squad''ın backlog''unda her üç story''den biri bir spike''la başlıyor. Bu neyi gösterebilir?', '{"choices":["Spike''ın konuşmanın yerine geçtiğini","Takımın çok iyi planlama yaptığını","Story''lerin fazla küçük olduğunu","Definition of Done''ın çok sıkı olduğunu"]}', '{"index":0}', 'Spike istisna olmalıdır. Çok sayıda spike, belirsizliğin konuşma ve küçük denemelerle değil ayrı araştırmalarla ertelendiğini gösterebilir. Çoğu soru 15 dakikalık bir konuşmayla cevaplanır.', 2, '8. ünite · Spike: time-box''lı araştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-sprint-ici', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Deniz Sprint içinde, henüz bitmemiş "ayırtma" story''sinde bir hata buldu. Ne yapılmalıdır?', '{"choices":["Hata story''nin içinde düzeltilir; story düzelene kadar Done değildir","Ayrı bir hata öğesi açılıp bir sonraki Sprint''e bırakılır","Story Done sayılır, hata Product Owner''a bildirilir","Hata görmezden gelinir; kabul testinde çıkmazsa sorun yoktur"]}', '{"index":0}', 'Henüz bitmemiş bir story''deki hata ayrı bir iş değil, işin parçasıdır. Ayrı hata öğesi açmak story''yi "bitmiş" gösterip kaliteyi saklar.', 2, '8. ünite · Hatalar backlog''da', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-kacan', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Yayındaki üründe kullanıcıların bulduğu, acil olmayan bir hata için hangisi doğrudur?', '{"choices":["Backlog''a öğe olarak girer, Product Owner diğer işlerle birlikte sıralar","Mevcut Sprint''i durdurup hemen düzeltilmelidir","Hatalar backlog''a girmez, ayrı bir listede tutulur","Hatayı bulan geliştirici kendi önceliğine göre düzeltir"]}', '{"index":0}', 'Rehber''e göre Product Backlog ürünü iyileştirmek için gereken her şeyin tek kaynağıdır; hatalar da öyle. Etkisine göre sıralanır: kuruşların yanlış yuvarlanması bir yeni özelliğin önüne de geçebilir, arkasında da kalabilir.', 2, '8. ünite · Hatalar backlog''da', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-acil', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Öğle saatinde ödeme tamamen çöktü. Squad Sprint''in ortasında. En uygun yaklaşım hangisidir?', '{"choices":["Hemen düzeltmek; Sprint Goal etkileniyorsa Product Owner''la konuşmak","Sprint bitene kadar beklemek, sonra backlog''a almak","Sprint''i iptal etmek zorunludur","Hatayı yalnızca DevOps chapter''ına bırakıp squad''ı ilgilendirmemek"]}', '{"index":0}', 'Kritik bir üretim sorunu bekletilmez. Sprint Backlog Sprint boyunca güncellenebilir; Sprint Goal tehlikeye girerse Product Owner''la kapsam konuşulur. Sprint iptali yalnızca Sprint Goal eskirse ve yalnızca Product Owner tarafından yapılır.', 2, '8. ünite · Hatalar backlog''da', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-koken', 'backlog', 'bl-u8', 8, 'mcq', 'derived', '"Teknik borç" benzetmesini ilk kez kullanan kimdir?', '{"choices":["Ward Cunningham","Mike Cohn","Bill Wake","Jeff Patton"]}', '{"index":0}', 'Ward Cunningham 1992''de, bugün alınan kısayolların ileride "faiz" olarak (yavaşlık, hata) geri ödendiğini anlatmak için borç benzetmesini kullandı.', 1, '8. ünite · Teknik borç backlog''da', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-gorunur', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Teknik borcu backlog''da yönetmenin ilk adımı hangisidir?', '{"choices":["Borcu görünür kılmak: ne olduğu ve bugün neye mal olduğu","Borç sıfırlanana kadar yeni özellik yapmamak","Borcu yalnızca geliştiricilerin bildiği bir listede tutmak","Borcu her Sprint''in son gününe bırakmak"]}', '{"index":0}', 'Görünmeyen borç sıralanamaz. "Ödeme modülünde test yok; her değişiklik yarım gün elle test istiyor" yazıldığında, Product Owner borcun bedelini değer işleriyle karşılaştırabilir.', 2, '8. ünite · Teknik borç backlog''da', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-fowler', 'backlog', 'bl-u8', 8, 'mcq', 'derived', 'Martin Fowler''ın teknik borç dörtlüsü hangi iki ekseni kullanır?', '{"choices":["Bilinçli/bilinçsiz ve pervasız/ihtiyatlı","Küçük/büyük ve eski/yeni","Ön yüz/arka yüz ve test/kod","Acil/acil değil ve önemli/önemsiz"]}', '{"index":0}', 'Fowler borcu iki eksende ayırır: bilinçli mi alındı (deliberate) yoksa fark edilmeden mi oluştu (inadvertent); pervasızca mı (reckless) yoksa ihtiyatla mı (prudent). "Şimdi teslim edip sonra düzelteceğiz" bilinçli ve ihtiyatlı borçtur.', 3, '8. ünite · Teknik borç backlog''da', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u8-borc-dod', 'backlog', 'bl-u8', 8, 'tf', 'derived', 'Zayıf bir Definition of Done, her Sprint''te fark edilmeden yeni teknik borç üretebilir.', '{}', '{"value":true}', 'Doğru. Test, inceleme ya da belgeleme DoD''de yoksa her biten öğe biraz borç bırakır. Agile ve Scrum pratiğindeki Sprint Simülatörü''nde de DoD''de test maddesi yokken borç her Sprint artıyordu.', 2, '8. ünite · Teknik borç backlog''da', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-goreli-nedir', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Göreli tahmin (relative estimation) nedir?', '{"choices":["Bir işin büyüklüğünü başka işlere göre karşılaştırarak söylemek","Bir işin kaç saat süreceğini tek tek görevlere bölerek hesaplamak","Bir işin büyüklüğünü geçmiş projelerin bütçesinden çıkarmak","Bir işin süresini Product Owner''ın istediği tarihe göre belirlemek"]}', '{"index":0}', 'Göreli tahminde soru "kaç saat?" değil "şuna göre ne kadar büyük?" sorusudur. İnsanlar mutlak büyüklüğü kestirmekte zayıf, iki şeyi karşılaştırmakta güçlüdür: hangi binanın daha yüksek olduğunu kolayca söyleriz, kaç metre olduğunu söyleyemeyiz.', 1, '9. ünite · Göreli ve mutlak tahmin', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-neden-goreli', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Agile takımların saat yerine göreli tahmini sık tercih etmesinin temel nedeni hangisidir?', '{"choices":["Karşılaştırma, mutlak süre kestirmekten daha tutarlı sonuç verir","Göreli tahmin yapılınca Sprint''te hiç taşma olmaz","Saatle tahmin yapmak Scrum Rehberi''nde yasaklanmıştır","Göreli tahminler yöneticilerin takımları kıyaslamasını kolaylaştırır"]}', '{"index":0}', 'Rehber tahmin birimi söylemez; saatle tahmin yasak değildir. Göreli tahmin, insanların karşılaştırmada daha iyi olmasından yararlanır. Takımları kıyaslamak ise göreli puanların en bilinen kötüye kullanımıdır.', 2, '9. ünite · Göreli ve mutlak tahmin', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-referans', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Squad yeni bir takım; göreli tahmine nasıl başlamalı?', '{"choices":["Herkesin iyi bildiği küçük bir story''yi referans alıp diğerlerini ona göre dizmek","Her story''yi önce saatle tahmin edip saati puana çevirmek","Başka bir takımın puan tablosunu olduğu gibi kullanmak","İlk üç Sprint tahmin yapmayıp sonra her story''ye 5 puan vermek"]}', '{"index":0}', 'Bilinen, küçük ve herkesin anladığı bir story (ör. "menüye fotoğraf ekle" = 2) referans olur. Sonraki story''ler "bundan iki kat mı, yarısı mı?" diye konumlanır. Başka takımın ölçeği bu takımın ortak anlayışını taşımaz.', 1, '9. ünite · Göreli ve mutlak tahmin', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-puan-ne', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Story point neyi anlatır?', '{"choices":["İşin büyüklüğünü: miktar, karmaşıklık ve belirsizlik birlikte","Bir geliştiricinin o iş için harcayacağı saat sayısını","Story''nin müşteri için ne kadar değerli olduğunu","Story''nin backlog''daki öncelik sırasını"]}', '{"index":0}', 'Story point göreli bir büyüklük ölçüsüdür: ne kadar iş, ne kadar karmaşık, ne kadar belirsiz. Değer ve sıra ayrı kavramlardır; Product Owner değeri, Developers büyüklüğü bilir.', 1, '9. ünite · Story point neyi ölçer?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-kim-tahmin', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Scrum Rehberi''ne göre Product Backlog öğelerinin büyüklüğünü kim belirler?', '{"choices":["İşi yapacak Developers","Product Owner","Scrum Master","Teknik Liderlik"]}', '{"index":0}', 'Rehber: işi yapacak Developers büyüklükten sorumludur. Product Owner, öğeyi anlamalarına ve ödünleşimleri seçmelerine yardım ederek tahmini etkileyebilir; ama sayıyı o vermez.', 1, '9. ünite · Story point neyi ölçer?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-puan-saat', 'backlog', 'bl-u9', 9, 'tf', 'derived', 'Bir takımda 1 story point her zaman 4 saate eşittir; bu yüzden puanlar saate çevrilerek plan yapılmalıdır.', '{}', '{"value":false}', 'Yanlış. Puanı saate çevirmek göreli tahminin faydasını yok eder ve puanları saatlik iş taahhüdüne dönüştürür. Plan için takımın kendi geçmiş hızı (Sprint başına biten puan) kullanılır.', 1, '9. ünite · Story point neyi ölçer?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-jeffries', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Story point fikrini ilk kullananlardan biri olduğunu söyleyen Ron Jeffries, bugün puanlar hakkında ne düşündüğünü nasıl özetlemiştir?', '{"choices":["Puanların zamanla kötüye kullanıldığını, buna üzüldüğünü söylemiştir","Puanların her takımda saatle eş tutulması gerektiğini söylemiştir","Puanların yöneticilerin takımları ölçmesi için icat edildiğini söylemiştir","Puanların yalnızca hata öğeleri için kullanılmasını önermiştir"]}', '{"index":0}', 'Jeffries, story point''leri belki kendisinin icat ettiğini, öyleyse şimdi üzgün olduğunu yazmıştır: puanlar karşılaştırma, baskı ve verimlilik ölçüsü olarak kullanılır hâle geldi. Asıl amaç takımın kendi planlamasıydı.', 3, '9. ünite · Story point neyi ölçer?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-neden-fib', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Tahmin kartlarında neden 1, 2, 3, 5, 8, 13 gibi aralığı büyüyen sayılar kullanılır?', '{"choices":["İş büyüdükçe belirsizlik de büyür; ince ayrım yapmak anlamsızlaşır","Bu sayılar saate çevrilince tam iş günlerine denk gelir","Scrum Rehberi yalnızca Fibonacci sayılarını kabul eder","Büyük sayılar Product Owner''a işin daha değerli olduğunu gösterir"]}', '{"index":0}', 'Büyük bir işin 20 mi 21 mi olduğunu kimse bilemez. Aralıkların büyümesi bu belirsizliği yansıtır ve takımı gereksiz kesinlik tartışmasından kurtarır.', 1, '9. ünite · Fibonacci ve değiştirilmiş Fibonacci ölçeği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-degistirilmis', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Mike Cohn''un yaygınlaştırdığı değiştirilmiş Fibonacci destesinde 13''ten sonraki kartlar hangileridir?', '{"choices":["20, 40, 100","21, 34, 55","16, 32, 64","15, 25, 50"]}', '{"index":0}', 'Değiştirilmiş Fibonacci: 0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100. Yüksek değerler yuvarlanmıştır; 21 ile 20 arasındaki fark yanlış bir kesinlik izlenimi vermesin diye. Destede ayrıca "?" ve çoğu zaman kahve kartı bulunur.', 2, '9. ünite · Fibonacci ve değiştirilmiş Fibonacci ölçeği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-soru-karti', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Planning Poker''da "?" kartını açan biri ne anlatmak ister?', '{"choices":["Story''yi tahmin edecek kadar anlamadığını","Story''nin hiç yapılmaması gerektiğini","Tahmini Product Owner''ın vermesi gerektiğini","Story''nin büyüklüğünün sıfır olduğunu"]}', '{"index":0}', '"?" kartı bir sorudur: story yeterince anlaşılmamış. Çoğu zaman Product Owner''ın kısa bir açıklaması ya da bir kabul kriteri yeter; yetmiyorsa story Estimable değildir (5. ünite).', 1, '9. ünite · Fibonacci ve değiştirilmiş Fibonacci ölçeği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-poker-kim', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Planning Poker''ı ilk kez tarif eden ve sonra yaygınlaştıran kişiler hangileridir?', '{"choices":["James Grenning tarif etti, Mike Cohn yaygınlaştırdı","Ken Schwaber tarif etti, Jeff Sutherland yaygınlaştırdı","Bill Wake tarif etti, Ron Jeffries yaygınlaştırdı","Kent Beck tarif etti, Martin Fowler yaygınlaştırdı"]}', '{"index":0}', 'James Grenning 2002''de bir makalede tarif etti; Mike Cohn *Agile Estimating and Planning* (2005) kitabıyla yaygınlaştırdı.', 2, '9. ünite · Planning Poker', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-ayni-anda', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Planning Poker''da kartların aynı anda açılmasının amacı nedir?', '{"choices":["İlk söylenen sayının herkesi etkilemesini önlemek","Toplantıyı kısaltmak için tartışmayı tamamen kaldırmak","Scrum Master''ın en doğru kartı seçmesini kolaylaştırmak","En deneyimli kişinin tahmininin geçerli sayılmasını sağlamak"]}', '{"index":0}', 'Önce konuşan, özellikle kıdemli biriyse, diğerlerini kendi sayısına çeker (çıpalama). Aynı anda açmak her kişinin kendi düşüncesini ortaya koymasını sağlar.', 1, '9. ünite · Planning Poker', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-uclar', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Kartlar 3 ile 13 arasında dağıldı. Sonraki adım ne olmalıdır?', '{"choices":["Uçtaki kartları açanlar gerekçe anlatır, sonra yeniden oylanır","Kartların ortalaması alınır ve story''ye 8 puan yazılır","En kıdemli geliştiricinin kartı geçerli sayılır","Story atlanır, bir sonraki Sprint yeniden denenir"]}', '{"index":0}', 'Farkın değeri tahminde değil gerekçededir: 13 açan bir riski, 3 açan bir kısayolu biliyor olabilir. Konuşma bu bilgiyi takıma yayar; ortalama almak onu gömer.', 1, '9. ünite · Planning Poker', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-kerem-13', 'backlog', 'bl-u9', 9, 'mcq', 'derived', '"Kartla bakiye yükleme" story''sinde herkes 5 açtı, Kerem 13 açtı. Kerem ödeme sağlayıcının test ortamı olmadığını anlattı. En iyi devam hangisidir?', '{"choices":["Test yolunu öğrenmek için spike açıp sonra yeniden tahmin etmek","Kerem''in kartını yok sayıp çoğunluğa uyarak story''ye 5 yazmak","Kartların ortalamasını alıp story''yi 7 puanla Sprint''e almak","Story''yi backlog''dan tamamen çıkarmak"]}', '{"index":0}', 'Kerem bir belirsizlik buldu: teknik bilgi eksik. Bunun çaresi time-box''lı bir spike''tır (8. ünite). Çoğunluğa uymak riski Sprint''in ortasına taşır.', 1, '9. ünite · Planning Poker', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-po-kart', 'backlog', 'bl-u9', 9, 'tf', 'derived', 'Planning Poker''da Product Owner da kart açmalı ve onun kartı diğerlerinden ağır sayılmalıdır.', '{}', '{"value":false}', 'Yanlış. Büyüklüğü işi yapacak Developers tahmin eder. Product Owner masadadır: soruları cevaplar, kapsamı netleştirir, gerekirse "bunu şöyle küçültsek?" diye önerir; ama kart açmaz.', 1, '9. ünite · Planning Poker', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-tshirt', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'T-shirt boyu (XS, S, M, L, XL) ile tahmin en çok ne zaman işe yarar?', '{"choices":["Ayrıntısı az, çok sayıda öğeyi kabaca boyutlandırırken","Sprint Planning''de görevleri saate bölerken","Bir story''nin kabul kriterlerini yazarken","Tek bir story''nin kesin teslim tarihini verirken"]}', '{"index":0}', 'T-shirt boyları sayı vermediği için kesinlik iddiası taşımaz; yol haritasındaki epic ve feature''ları kabaca karşılaştırmak için uygundur.', 1, '9. ünite · Hızlı tahmin: T-shirt boyu, affinity, kova yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-affinity', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Affinity estimation (yakınlık tahmini) nasıl yürür?', '{"choices":["Kartlar sessizce küçükten büyüğe bir duvara dizilir, sonra gruplara puan verilir","Her kart için ayrı ayrı Planning Poker turu yapılır","Product Owner kartları değerlerine göre sıralar, takım onaylar","Her kart için görevler yazılır ve saatler toplanır"]}', '{"index":0}', 'Takım üyeleri kartları konuşmadan bir eksende yerleştirir, birbirinin yerleştirdiğini taşıyabilir. Sonra benzer büyüklükteki gruplara puan verilir. Onlarca öğe kısa sürede boyutlanır; tartışma yalnızca çok yer değiştiren kartlarda yapılır.', 2, '9. ünite · Hızlı tahmin: T-shirt boyu, affinity, kova yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-kova', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Kova yöntemi (bucket system) Planning Poker''a göre hangi durumda daha uygundur?', '{"choices":["Yeni bir backlog''da yüzlerce öğeyi bir oturumda boyutlarken","Tek bir riskli story''nin ayrıntılarını konuşurken","Sprint içinde bir görevin kalan saatini güncellerken","Bir hatanın kök nedenini bulurken"]}', '{"index":0}', 'Kova yönteminde masaya puan değerleriyle kovalar (1, 2, 3, 5, 8...) konur; kartlar referansa göre hızla kovalara dağıtılır. Hız için ayrıntıdan vazgeçer; tek bir riskli story için Planning Poker''ın konuşması daha değerlidir.', 1, '9. ünite · Hızlı tahmin: T-shirt boyu, affinity, kova yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-ideal-nedir', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'İdeal gün nedir?', '{"choices":["Kesintisiz, yalnızca o işe ayrılmış bir gün varsayımı","Takımın bir Sprint''te bitirdiği ortalama story point miktarı","Product Owner''ın istediği teslim günü","Bir story''nin test edilmesi için ayrılan gün"]}', '{"index":0}', 'İdeal gün mutlak bir birimdir ama gerçek takvim günü değildir: "kimse beni bölmezse bu iş 2 günlük". Gerçek takvimde iki ideal gün dört günü bulabilir.', 1, '9. ünite · İdeal gün', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-ideal-sorun', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'İdeal günle tahmin yapan bir takımın en sık yaşadığı yanlış anlama hangisidir?', '{"choices":["Paydaşlar ideal günü takvim günü sanar ve tarih bekler","İdeal gün göreli olduğu için takımlar arası kıyaslanamaz","İdeal günler Fibonacci dizisine uymadığı için kullanılamaz","İdeal gün yalnızca hata öğeleri için geçerlidir"]}', '{"index":0}', '"3 ideal gün" dışarıdan "3 gün sonra biter" diye duyulur. Story point''in bir faydası bu karışıklığı önlemesidir; ama puanı saate çeviren takım aynı sorunu geri getirir.', 2, '9. ünite · İdeal gün', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-kiyas', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Teknik Liderlik iki squad''ın hızlarını karşılaştırıp "Squad A 60 puan, siz 35 puan yapıyorsunuz" diyor. Bu karşılaştırmanın sorunu nedir?', '{"choices":["Her takımın puan ölçeği kendine özgüdür; sayılar kıyaslanamaz","Hız yalnızca Product Owner''ın bilmesi gereken bir sayıdır","Hız ancak on Sprint sonra karşılaştırılabilir","Karşılaştırma doğrudur; Squad A daha verimlidir"]}', '{"index":0}', 'Bir takımın 5''i ile başka takımın 5''i aynı şey değildir. Hız baskı aracı olunca takımlar puanları şişirir (puan enflasyonu): sayı büyür, biten iş aynı kalır.', 1, '9. ünite · Tahmin tuzakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-enflasyon', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Puan enflasyonu (point inflation) neye denir?', '{"choices":["Hız beklentisi yüzünden aynı işe zamanla daha büyük puan verilmesine","Belirsizlik arttıkça Fibonacci aralıklarının büyümesine","Story''ler bölündükçe toplam puanın biraz artmasına","Takım büyüdükçe Sprint başına biten puanın artmasına"]}', '{"index":0}', 'Hız bir hedefe dönüşünce takım farkında olmadan tahminleri büyütür; grafik iyileşir, ürün değişmez. Goodhart yasasının tahmindeki karşılığıdır: ölçü hedef olunca iyi bir ölçü olmaktan çıkar.', 1, '9. ünite · Tahmin tuzakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-taahhut', 'backlog', 'bl-u9', 9, 'mcq', 'derived', '"Tahmin verdiniz, o zaman bu tarihe söz verdiniz" yaklaşımının sonucu genellikle ne olur?', '{"choices":["Takım tampon ekler, tahmin bilgi taşımaz olur","Tahminler daha kesin hâle gelir","Takım daha küçük story yazmaya başlar","Belirsiz story''ler kendiliğinden azalır"]}', '{"index":0}', 'Tahmin bir olasılık beyanıdır, söz değildir. Tahmin söz gibi kullanılırsa takım kendini korumak için şişirir; Product Owner da gerçek bilgiyi kaybeder.', 1, '9. ünite · Tahmin tuzakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-noestimates-ne', 'backlog', 'bl-u9', 9, 'mcq', 'derived', '#NoEstimates hareketinin temel önerisi hangisidir?', '{"choices":["İşi benzer küçüklükte parçalara bölüp tahmin yerine öğe saymak","Takımın hiçbir zaman plan yapmaması","Tahmini takım yerine yöneticilerin yapması","Bütün story''lere aynı puanı yazıp hızı ölçmeye devam etmek"]}', '{"index":0}', 'Woody Zuill''in başlattığı ve Vasco Duarte''nin kitaplaştırdığı tartışmanın özü: öğeler benzer küçüklükteyse, biten öğe sayısı puan kadar iyi bir tahmin verir ve tahmin toplantılarının maliyetinden kurtarır. Plan yapmamak değil, farklı yoldan plan yapmaktır.', 1, '9. ünite · #NoEstimates ve öğe saymak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-sayma-sart', 'backlog', 'bl-u9', 9, 'mcq', 'derived', 'Öğe sayarak sürüm tahmini yapmanın işe yaraması için en önemli koşul hangisidir?', '{"choices":["Öğelerin benzer ve küçük büyüklükte olması","Takımın en az on kişiden oluşması","Her öğenin ayrıca saatle tahmin edilmesi","Sprint''lerin dört haftalık olması"]}', '{"index":0}', 'Bir story iki günlük, öbürü iki haftalıksa öğe saymak yanıltır. İyi bölme (7. ünite) öğe saymayı mümkün kılar; tahmin enerjisi bölmeye harcanır.', 2, '9. ünite · #NoEstimates ve öğe saymak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u9-hiz-sayisi', 'backlog', 'bl-u9', 9, 'num', 'derived', 'Squad son dört Sprint''te 7, 9, 8 ve 8 story bitirdi. Backlog''da Sürüm 1 için 32 küçük story var. Sprint başına ortalamayla kaç Sprint gerekir?', '{"blanks":1}', '{"blanks":[["4±0"]]}', 'Ortalama (7 + 9 + 8 + 8) / 4 = 8 story. 32 / 8 = 4 Sprint. Gerçekte bir aralık vermek daha dürüsttür (12. ünite): en yavaş Sprint''le 32 / 7 ≈ 4,6, yani 5 Sprint.', 2, '9. ünite · #NoEstimates ve öğe saymak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-sira-mi', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'Scrum Rehberi Product Backlog için "öncelik" yerine hangi kelimeyi kullanır?', '{"choices":["Sıra (ordered)","Puan (scored)","Değer (valued)","Seviye (ranked by level)"]}', '{"index":0}', 'Rehber backlog''un sıralı (ordered) olduğunu söyler. Öncelik etiketleri (yüksek, orta, düşük) eşitlik bırakır; sıra bırakmaz: iki öğeden biri mutlaka önce gelir.', 1, '10. ünite · Sırayı belirleyen etkenler: değer, risk, bağımlılık, öğrenme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-dort-etken', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'Değerin yanında sırayı en çok etkileyen üç etken hangileridir?', '{"choices":["Risk, bağımlılık ve öğrenme","Story''yi yazanın kıdemi, yazılma tarihi ve uzunluğu","Story point, kabul kriteri sayısı ve görev sayısı","Takımın tercihleri, araç ve Sprint uzunluğu"]}', '{"index":0}', 'Riskli öğeleri erken yapmak riski erken azaltır; bağımlılıklar sırayı zorlar; bazı öğeler değerinden çok öğrettikleri için öne alınır (bir varsayımı sınamak).', 1, '10. ünite · Sırayı belirleyen etkenler: değer, risk, bağımlılık, öğrenme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-riskli-once', 'backlog', 'bl-u10', 10, 'mcq', 'derived', '"Kartla bakiye yükleme"nin ödeme sağlayıcısıyla çalışıp çalışmayacağı belirsiz. Değeri orta düzeyde. Elif onu neden backlog''un üstüne yakın koyabilir?', '{"choices":["Belirsizliği erken çözmek, sonradan sürpriz yaşamaktan daha ucuzdur","Belirsiz işler her zaman en değerli işlerdir","Rehber riskli işlerin ilk Sprint''te yapılmasını şart koşar","Riskli işler küçük olduğu için hızı artırır"]}', '{"index":0}', 'Risk bir sıralama etkenidir. Ödeme entegrasyonu yürümezse sürüm planı değişir; bunu son Sprint''te öğrenmek en pahalısıdır.', 2, '10. ünite · Sırayı belirleyen etkenler: değer, risk, bağımlılık, öğrenme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-harfler', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'MoSCoW''daki dört grup hangileridir?', '{"choices":["Must have, Should have, Could have, Won''t have","Most, Some, Common, Worst","Mandatory, Strategic, Critical, Wishlist items","Must, Soon, Can, Waiting"]}', '{"index":0}', 'Dai Clegg''in geliştirdiği ve DSDM''in benimsediği teknik. Won''t have (this time) "asla" değil "bu sürümde değil" demektir; bu ayrım beklentiyi yönetir.', 1, '10. ünite · MoSCoW', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-must-orani', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'DSDM, bir zaman kutusundaki işin ne kadarının Must have olmasını önerir?', '{"choices":["En fazla yaklaşık %60''ı","En az %90''ı","Tam olarak %50''si","Hepsi; diğer gruplar sonraya kalır"]}', '{"index":0}', 'DSDM Must''ları eforun yaklaşık %60''ıyla sınırlar; geri kalan Should ve Could''lar sorun çıktığında bırakılabilecek esnekliği verir. Her şey Must olursa tek bir gecikme sürümü kaçırır.', 3, '10. ünite · MoSCoW', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-hepsi-must', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'Paydaş toplantısında 20 özelliğin 17''si Must have olarak işaretlendi. Bu neyi gösterir?', '{"choices":["Sınıflandırma ayrım yapmıyor; Must tanımı sıkılaştırılmalı","Ürün çok değerli; bütün Must''lar ilk Sprint''e alınmalı","MoSCoW doğru uygulanmış; Won''t olmaması iyi bir işaret","Takım daha çok geliştiriciyle büyütülmeli"]}', '{"index":0}', 'Must have "bu olmadan sürüm anlamsız ya da yasadışı" demektir. 17 Must, kimsenin vazgeçmek istemediğini gösterir. "Bu olmadan yayınlar mıyız?" sorusu Must''ları ayıklar.', 1, '10. ünite · MoSCoW', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-kano-kim', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'Özellikleri temel, performans ve heyecan verici diye ayıran model kime aittir?', '{"choices":["Noriaki Kano","Don Reinertsen","Dai Clegg","Jeff Patton"]}', '{"index":0}', 'Noriaki Kano 1984''te müşteri memnuniyeti ile özelliklerin varlığı arasındaki ilişkiyi bu kategorilerle anlattı. Reinertsen gecikme maliyetinin, Clegg MoSCoW''un, Patton story map''in adıdır.', 2, '10. ünite · Kano modeli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-temel', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'Kano modelinde "temel" (must-be) özellik için hangisi doğrudur?', '{"choices":["Yokluğu memnuniyetsizlik yaratır, varlığı memnuniyeti pek artırmaz","Varlığı memnuniyeti doğrusal olarak artırır","Yokluğu fark edilmez, varlığı şaşırtıcı bir sevinç yaratır","Ne varlığı ne yokluğu memnuniyeti etkiler"]}', '{"index":0}', 'Ödemenin güvenli olması temeldir: olmazsa öfke, olunca alkış yok. Performans özelliği (sipariş süresi) iyileştikçe memnuniyet artar; heyecan verici özellik beklenmediği için sevindirir.', 1, '10. ünite · Kano modeli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-heyecan', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'Yemeğin hazır olduğunu öğrencinin telefonuna haber veren bildirim ilk çıktığında öğrencileri çok sevindirdi; iki yıl sonra herkes bunu bekliyor. Kano''ya göre ne oldu?', '{"choices":["Heyecan verici bir özellik zamanla temel özelliğe dönüştü","Performans özelliği zamanla heyecan verici oldu","Temel özellik zamanla ilgisiz özelliğe dönüştü","Özellik baştan beri temeldi; algı değişmedi"]}', '{"index":0}', 'Kano kategorileri sabit değildir: bugünün sevindiren özelliği yarının beklentisidir. Bu yüzden Kano analizi aralıklarla tekrarlanır.', 1, '10. ünite · Kano modeli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-cod-nedir', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'Gecikme maliyeti (Cost of Delay) neyi ölçer?', '{"choices":["Bir işi geciktirmenin birim zamanda kaybettirdiği değeri","Bir işi yapmanın toplam geliştirme maliyetini","Sprint''in geç bitmesi durumunda ödenen cezayı","Bir hatanın düzeltilmesine harcanan saati"]}', '{"index":0}', 'Don Reinertsen: "Yalnızca bir şeyi ölçecekseniz gecikme maliyetini ölçün." Soru "bu ne kadar değerli?" değil "bunu bir hafta geciktirirsek ne kaybederiz?" sorusudur.', 1, '10. ünite · Gecikme maliyeti (Cost of Delay)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-reinertsen', 'backlog', 'bl-u10', 10, 'fill', 'derived', 'Gecikme maliyetini ürün geliştirmede yaygınlaştıran *The Principles of Product Development Flow* kitabının yazarı kimdir?', '{"blanks":1}', '{"blanks":[["Don Reinertsen","Donald Reinertsen","Reinertsen"]]}', 'Don Reinertsen (2009). Kitap akış, kuyruk ve gecikme maliyeti fikirlerini ürün geliştirmeye taşıdı; SAFe''in WSJF''si bu fikirden gelir.', 2, '10. ünite · Gecikme maliyeti (Cost of Delay)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-sabit-tarih', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'Yeni dönem kayıt haftasında açılması gereken "yeni öğrenciye hoş geldin bakiyesi" özelliğinin gecikme maliyeti eğrisi hangisine benzer?', '{"choices":["Sabit tarihli: o haftaya yetişmezse değerinin çoğu kaybolur","Standart: her hafta gecikme aşağı yukarı aynı kaybı verir","Acil: her gün gecikme büyük kayıp verir, hemen yapılmalı","Somut olmayan: bugün gecikmenin bedeli görünmez"]}', '{"index":0}', 'Gecikme maliyeti eğrileri genelde dört türde anlatılır: acil (expedite), sabit tarihli, standart ve somut olmayan (intangible). Sabit tarihli işte tarihten önce gecikmenin bedeli düşüktür, tarihi kaçırmanın bedeli büyüktür.', 2, '10. ünite · Gecikme maliyeti (Cost of Delay)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-somut-olmayan', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'Teknik borç azaltma gibi işler gecikme maliyeti eğrilerinden hangisine en çok uyar?', '{"choices":["Somut olmayan: bugün bedeli görünmez ama zamanla birden büyüyebilir","Acil: her gün büyük kayıp verir","Sabit tarihli: belli bir günden sonra değeri sıfırlanır","Hiçbiri; teknik işlerin gecikme maliyeti yoktur"]}', '{"index":0}', 'Bu işler bugün ertelenebilir görünür; ama bir gün eşik aşılır (güvenlik desteği biter, sistem yavaşlar) ve maliyet birden büyür. Bu yüzden düzenli bir pay ayırmak işe yarar (8. ünite).', 3, '10. ünite · Gecikme maliyeti (Cost of Delay)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-formul', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'WSJF nasıl hesaplanır?', '{"choices":["Gecikme maliyeti / iş büyüklüğü","İş değeri × iş büyüklüğü","Gecikme maliyeti − iş büyüklüğü","İş büyüklüğü / iş değeri"]}', '{"index":0}', 'Weighted Shortest Job First: birim süre başına en çok gecikme maliyetini kurtaran iş önce yapılır. Büyük ama çok değerli bir iş, küçük ve orta değerli bir işin arkasında kalabilir.', 1, '10. ünite · WSJF', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-safe-bilesen', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'SAFe''te gecikme maliyeti hangi üç bileşenin toplamı olarak tahmin edilir?', '{"choices":["İş değeri, zaman kritikliği, risk azaltma ya da fırsat","Story point, takımın hızı ve kalan Sprint sayısı","Beklenen gelir, geliştirme maliyeti ve kâr marjı","Must, Should, Could"]}', '{"index":0}', 'SAFe her bileşeni göreli olarak (Fibonacci benzeri ölçekle) puanlar ve toplar; sonra iş büyüklüğüne (job size, süre için bir vekil) böler.', 2, '10. ünite · WSJF', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-wsjf-hesap', 'backlog', 'bl-u10', 10, 'num', 'derived', '"Önceden sipariş" için iş değeri 8, zaman kritikliği 8, risk azaltma 4, iş büyüklüğü 10. WSJF kaçtır?', '{"blanks":1}', '{"blanks":[["2±0"]]}', 'Gecikme maliyeti 8 + 8 + 4 = 20. WSJF = 20 / 10 = 2.', 1, '10. ünite · WSJF', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-wsjf-sec', 'backlog', 'bl-u10', 10, 'mcq', 'derived', '"Hazır bildirimi": gecikme maliyeti 12, büyüklük 3. "Kalabalık göstergesi": gecikme maliyeti 15, büyüklük 8. WSJF''ye göre hangisi önce?', '{"choices":["Hazır bildirimi: 4''e karşı yaklaşık 1,9","Kalabalık göstergesi: gecikme maliyeti daha yüksek","Kalabalık göstergesi: 1,9''a karşı 4","İkisi eşit; Product Owner seçer"]}', '{"index":0}', '12 / 3 = 4 ve 15 / 8 ≈ 1,9. Daha değerli görünen iş, büyük olduğu için arkada kalır. WSJF''nin dersi: küçük ve değerli işler sırayı hızla yukarı çıkar.', 2, '10. ünite · WSJF', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-hizli-kazanc', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'Değer/efor matrisinde "yüksek değer, düşük efor" köşesine ne denir ve ne yapılır?', '{"choices":["Hızlı kazanç: önce yapılır","Para tuzağı: hiç yapılmaz","Büyük proje: bölünüp planlanır","Dolgu işi: boş kalınca yapılır"]}', '{"index":0}', 'Dört köşe: hızlı kazanç (yüksek değer, düşük efor), büyük proje (yüksek değer, yüksek efor), dolgu (düşük değer, düşük efor), para tuzağı (düşük değer, yüksek efor).', 1, '10. ünite · Değer/efor matrisi ve RICE', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-rice', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'RICE puanı nasıl hesaplanır?', '{"choices":["Erişim × Etki × Güven / Efor","Risk + Etki + Maliyet, bölü Efor","Erişim + Etki + Güven + Efor","Gelir × Etki / Maliyet × Efor"]}', '{"index":0}', 'Reach (kaç kişiye ulaşır), Impact (her birine etkisi), Confidence (tahminlere güven yüzdesi), Effort (kişi-ay). Güven çarpanı belirsiz fikirlerin puanını düşürür.', 2, '10. ünite · Değer/efor matrisi ve RICE', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-rice-hesap', 'backlog', 'bl-u10', 10, 'num', 'derived', 'Bir özellik ayda 2000 öğrenciye ulaşacak, etkisi 2, güven %50, efor 4 kişi-ay. RICE puanı kaçtır?', '{"blanks":1}', '{"blanks":[["500±0"]]}', '(2000 × 2 × 0,5) / 4 = 2000 / 4 = 500.', 3, '10. ünite · Değer/efor matrisi ve RICE', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-uc-yuksek', 'backlog', 'bl-u10', 10, 'mcq', 'derived', 'Paydaşlar her isteği "yüksek öncelik" olarak getiriyor. Elif için en etkili cevap hangisidir?', '{"choices":["Etiket yerine sıra istemek: \"Bunu şunun önüne mi koyalım?\"","Yeni bir \"çok yüksek\" öncelik seviyesi açıp onları ayırmak","Bütün yüksek öncelikli işleri aynı Sprint''e almak","Paydaşların isteklerini backlog''a almayı bırakmak"]}', '{"index":0}', 'Etiketler enflasyona uğrar; sıra uğramaz. İki öğeyi karşılaştırmak, paydaşı gerçek ödünleşimi görmeye zorlar.', 1, '10. ünite · "Her şey yüksek öncelikli" sorunu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u10-po-hesap', 'backlog', 'bl-u10', 10, 'tf', 'derived', 'Product Owner paydaşları dinler ama sıranın kararından hesap veren kişidir; kararlarına saygı gösterilmesi beklenir.', '{}', '{"value":true}', 'Doğru. Rehber''e göre Product Owner Product Backlog''un yönetiminden hesap verir; başarılı olması için organizasyonun kararlarına saygı göstermesi gerekir. Sırayı değiştirmek isteyen Product Owner''ı ikna etmeye çalışır.', 1, '10. ünite · "Her şey yüksek öncelikli" sorunu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-tanim', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Scrum Rehberi''ne göre Product Backlog refinement nedir?', '{"choices":["Öğeleri bölüp ayrıntılandırma; açıklama, sıra ve büyüklük ekleme etkinliği","Sprint''in sonunda yapılan, backlog''un onaylandığı resmî bir etkinlik","Product Owner''ın tek başına yaptığı haftalık sıralama toplantısı","Developers''ın Sprint Backlog''daki görevleri saate böldüğü toplantı"]}', '{"index":0}', 'Rehber: refinement, öğeleri daha küçük ve daha kesin öğelere bölme ve daha ayrıntılı tanımlama eylemidir; açıklama, sıra ve büyüklük gibi ayrıntılar eklenir. Süren bir etkinliktir, Scrum etkinliklerinden biri değildir.', 1, '11. ünite · Refinement''ın Rehber''deki yeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-etkinlik-mi', 'backlog', 'bl-u11', 11, 'tf', 'derived', 'Refinement, Scrum Rehberi''ndeki beş Scrum etkinliğinden biridir.', '{}', '{"value":false}', 'Yanlış. Beş etkinlik Sprint, Sprint Planning, Daily Scrum, Sprint Review ve Sprint Retrospective''dir. Refinement süren bir faaliyettir; takımlar onu düzenli bir toplantıya bağlayabilir ama Rehber bunu şart koşmaz.', 1, '11. ünite · Refinement''ın Rehber''deki yeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-yuzde-on', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Eski Scrum Rehberi sürümleri refinement''a ayrılan kapasite için hangi ölçüyü veriyordu?', '{"choices":["Genellikle kapasitenin en fazla %10''u","Her Sprint''in tam olarak bir iş günü","Product Owner''ın zamanının yarısı","Sprint Planning süresinin iki katı"]}', '{"index":0}', '2013-2017 sürümleri "genellikle kapasitenin %10''undan fazlasını almaz" diyordu. 2020 sürümünde bu sayı yok; ama sahada hâlâ iyi bir başlangıç ölçüsü olarak kullanılır.', 3, '11. ünite · Refinement''ın Rehber''deki yeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-hazir-rehber', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Rehber''e göre bir öğe ne zaman Sprint Planning''de seçilmeye hazır sayılır?', '{"choices":["Scrum Takımı onu bir Sprint içinde Done yapabilecekse","Teknik Liderlik onayladığında","Definition of Ready''nin bütün maddeleri işaretlendiğinde","Product Owner kabul kriterlerini tek başına yazdığında"]}', '{"index":0}', 'Rehber: bir Sprint içinde Done yapılabilecek öğeler Sprint Planning''de seçilmeye hazır sayılır. Definition of Ready ve onay akışları Rehber''de yoktur; takımların ekleyebileceği pratiklerdir.', 2, '11. ünite · Refinement''ın Rehber''deki yeri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-kac-sprint', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Refinement oturumunda en çok hangi öğelere zaman ayırmak gerekir?', '{"choices":["Sıranın üstündeki, bir iki Sprint içinde yapılacak öğelere","Backlog''daki bütün öğelere eşit ölçüde ve sırayla","En alttaki, aylar sonra yapılacak öğelere","Yalnızca hata öğelerine"]}', '{"index":0}', 'Buzdağı (1. ünite): üstteki öğeler ince ve ayrıntılı, alttakiler kaba kalır. Aylar sonra yapılacak bir öğeyi bugün ayrıntılandırmak, değişince boşa gider.', 1, '11. ünite · Refinement oturumu nasıl yürür?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-kimler-katilir', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Refinement''a kimlerin katılması en iyi sonucu verir?', '{"choices":["Product Owner ve işi yapacak Developers","Yalnızca Product Owner ve Scrum Master","Yalnızca Tech Lead ve Teknik Liderlik","Yalnızca test uzmanları"]}', '{"index":0}', 'Refinement ortak bir anlayış üretir; işi yapacaklar konuşmada olmazsa anlayış onlara ulaşmaz. Bir alan bilgisi gerekiyorsa paydaş davet edilir (Three Amigos, 6. ünite).', 1, '11. ünite · Refinement oturumu nasıl yürür?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-akis', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'İyi yürüyen bir refinement oturumunda bir story için tipik sıra hangisidir?', '{"choices":["Neden ve kim → kabul kriterleri → gerekirse bölme → tahmin","Tahmin → görevlere bölme → saat yazma → Teknik Liderlik onayı","Onay → tahmin → kabul kriteri → neden","Görev dağıtımı → kod incelemesi → test"]}', '{"index":0}', 'Önce ihtiyaç anlaşılır, sonra ne zaman biteceği netleşir; büyükse bölünür, en son tahmin edilir. Görevlere bölmek Sprint Planning''in işidir.', 2, '11. ünite · Refinement oturumu nasıl yürür?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-dor-nedir', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Definition of Ready (DoR) nedir?', '{"choices":["Bir öğenin Sprint''e alınmadan önce sağlaması beklenen koşulların listesi","Increment''in yayına çıkabilmesi için gereken kalite ölçütleri","Sprint Goal''e ulaşıldığını gösteren ölçütler","Product Owner''ın her story için yazdığı kabul kriterleri"]}', '{"index":0}', 'DoR, "bu öğe Sprint''e girmeye hazır mı?" sorusunun takım içi cevabıdır: ör. INVEST''e uyuyor, kabul kriterleri yazılmış, tahmin edilmiş, dış bağımlılık yok. DoD ise bir öğenin bittiğini söyler.', 1, '11. ünite · Definition of Ready', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-dor-rehber', 'backlog', 'bl-u11', 11, 'tf', 'derived', 'Definition of Ready, Definition of Done gibi Scrum Rehberi''nin bir taahhüdüdür.', '{}', '{"value":false}', 'Yanlış. Rehber''deki üç taahhüt Product Goal, Sprint Goal ve Definition of Done''dır. DoR Rehber''de yoktur; birçok takım faydalı bulur ama zorunlu değildir.', 1, '11. ünite · Definition of Ready', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-dor-madde', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Hangisi bir Definition of Ready maddesi olarak en uygundur?', '{"choices":["Kabul kriterleri yazıldı ve takım üyeleri onları anladı","Kod incelendi ve otomatik testler geçti","Story yayına alındı ve izleniyor","Product Owner Sprint Review''da story''yi kabul etti"]}', '{"index":0}', 'Diğer üçü işin bittiğine dair koşullardır (DoD ya da kabul). DoR işin başlamaya hazır olduğunu söyler.', 2, '11. ünite · Definition of Ready', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-kapi', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'DoR''un "kapı bekçisine" dönüşmesi ne demektir?', '{"choices":["Her madde işaretlenmeden hiçbir öğenin Sprint''e alınmaması","DoR''un Sprint Review''da Product Owner''a sunulması","DoR maddelerinin Sprint Retrospective''de gözden geçirilmesi","DoR''un kabul kriterlerinin içine yazılması"]}', '{"index":0}', 'Katı bir DoR şelaleye geri dönüştür: her şey önceden tamamen belirlensin istenir, öğeler onay kuyruğunda bekler, takım belirsizlikle Sprint içinde çalışmayı unutur. INVEST''teki aynı tuzak (5. ünite).', 1, '11. ünite · DoR''un kapı bekçisine dönüşmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-esnek', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Squad''ın DoR''u "bütün kabul kriterleri yazılmış olmalı" diyor. Elif''in Sprint Goal için kritik bir story''sinin bir kriteri hâlâ belirsiz. En dengeli yaklaşım hangisidir?', '{"choices":["Story''yi alıp belirsiz kısmı Sprint''in ilk günlerinde netleştirmek ya da o kısmı bölmek","Story''yi hiçbir koşulda Sprint''e almamak; DoR bir kuraldır","Kriteri sonra yazmak üzere DoR''u bu Sprint için tamamen kaldırmak","Teknik Liderlik onay verene kadar Sprint Planning''i ertelemek"]}', '{"index":0}', 'DoR bir rehberdir, sözleşme değildir. Belirsizlik küçükse Sprint içinde çözülebilir; büyükse belirsiz kısım ayrı bir story''ye bölünür. Amaç işi akıtmaktır.', 2, '11. ünite · DoR''un kapı bekçisine dönüşmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-onay-fayda', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Product Owner''ın yazdığı story''lerin bir teknik liderlik grubu tarafından onaylandığı akışın en büyük faydası ne olabilir?', '{"choices":["Mimari riskler ve ortak bağımlılıklar erken görülür","Product Owner sıralama kararından hesap vermek zorunda kalmaz","Developers refinement''a katılmak zorunda kalmaz","Story''ler hiç bölünmeden Sprint''e alınabilir"]}', '{"index":0}', 'Birden çok takımı etkileyen mimari kararlar ve ortak servisler bir yerde görülmeli. Onay akışı bunu sağlayabilir; ama sıranın sorumluluğunu Product Owner''dan almaz.', 1, '11. ünite · Story onay akışları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-onay-risk', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Onay akışının en sık yarattığı sorun hangisidir?', '{"choices":["Story''ler onay kuyruğunda bekler, geri bildirim gecikir","Story''ler fazla küçük bölünür","Product Owner backlog''u sıralayamaz hâle gelir","Kabul kriterleri gereksiz hâle gelir"]}', '{"index":0}', 'Haftada bir toplanan bir kurul, her story''nin iki haftaya kadar beklemesi demektir. Çare: onayı küçük adımlara bölmek, yalnızca riskli story''leri onaya götürmek ya da onaylayanı refinement''a çağırmak.', 1, '11. ünite · Story onay akışları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-onay-rehber', 'backlog', 'bl-u11', 11, 'tf', 'derived', 'Scrum Rehberi''nde story onay akışı tanımlanmaz; böyle bir akış eklenirse Product Owner''ın backlog''dan hesap vermesini ortadan kaldırmamalıdır.', '{}', '{"value":true}', 'Doğru. Rehber, Product Owner''ın Product Backlog yönetiminden hesap verdiğini söyler; bu işi başkasına yaptırabilir ama hesap verebilirlik onda kalır. Onay akışı bir girdi olabilir, karar yeri değil.', 2, '11. ünite · Story onay akışları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-geri-donen', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Teknik Liderlik''ten dönen story''lerin çoğu aynı nedenle dönüyor: "kabul kriteri test edilemez". Elif ne yapmalı?', '{"choices":["Kabul kriterlerini refinement''ta test uzmanıyla birlikte yazmak","Kabul kriterlerini tamamen kaldırıp story''yi kısa göndermek","Onay akışını atlayıp story''leri doğrudan Sprint''e almak","Her story''ye aynı genel kriteri kopyalamak"]}', '{"index":0}', 'Tekrar eden geri dönüş bir süreç sinyalidir. Deniz''in "bunu nasıl test ederim?" sorusu story onaya gitmeden sorulursa dönüş azalır (Three Amigos, 6. ünite).', 1, '11. ünite · Story onay akışları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-durum-sirasi', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Bir araçta story''nin backlog tarafındaki durumları için en mantıklı sıra hangisidir?', '{"choices":["Yeni → İnceleniyor → Hazır → Sprint''te","Hazır → Yeni → Sprint''te → İnceleniyor","Sprint''te → Hazır → Yeni → Kapalı","Yeni → Sprint''te → Hazır → İnceleniyor"]}', '{"index":0}', 'Durumlar refinement''ın ilerlemesini gösterir: yeni gelen bir fikir, konuşulan bir story, Sprint''e hazır bir story. Durum sayısı az olmalıdır; her durum bir bekleme yeri olabilir.', 1, '11. ünite · Araçta iş akışı durumları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-cok-durum', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Squad''ın aracında bir story Sprint''e girene kadar dokuz durumdan geçiyor. Bu neyi gösterir?', '{"choices":["Bekleme ve devir teslim çok; akış yavaşlar","Süreç olgun; her durum kaliteyi artırır","Story''ler fazla küçük bölünmüş","Takımın hızı yüksek"]}', '{"index":0}', 'Her durum değişikliği çoğu zaman başka bir kişiye devir ve bir bekleme demektir. Durumları sadeleştirmek, onay ve refinement''ı aynı konuşmada birleştirmek akışı hızlandırır.', 2, '11. ünite · Araçta iş akışı durumları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-eski-oge', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Backlog''da iki yıldır dokunulmamış 140 öğe var. En iyi yaklaşım hangisidir?', '{"choices":["Hedefe katkısı olmayanları kapatmak; önemliyse geri gelir","Hepsini bir sonraki Sprint''e alıp bitirmeye çalışmak","Hepsine düşük öncelik etiketi koyup bırakmak","Hepsini ayrı bir \"bir gün\" listesine taşımak"]}', '{"index":0}', 'Backlog mezarlığı (1. ünite) gerçek sırayı gizler ve her refinement''ı yavaşlatır. Önemli bir fikir kapandıysa paydaş onu yeniden getirir; o zaman da güncel hâliyle gelir.', 1, '11. ünite · Backlog''u temizlemek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u11-ne-siklikla', 'backlog', 'bl-u11', 11, 'mcq', 'derived', 'Backlog temizliği için hangi alışkanlık en çok işe yarar?', '{"choices":["Her refinement''ta birkaç dakika alttaki öğelere bakmak","Yılda bir kez bütün backlog''u silip yeniden yazmak","Yalnızca yeni bir Product Owner geldiğinde temizlemek","Hiç silmemek; her öğe bir gün işe yarar"]}', '{"index":0}', 'Küçük ve düzenli temizlik, birikip bir gün dev bir temizlik toplantısına dönüşmekten iyidir.', 1, '11. ünite · Backlog''u temizlemek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-mvp-nedir', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'Eric Ries''ın tanımıyla MVP nedir?', '{"choices":["En az çabayla en çok doğrulanmış öğrenmeyi sağlayan ürün sürümü","Bütün temel özellikleri tamamlanmış ilk ticari sürüm","Hatası olmayan, en kararlı ürün sürümü","Yalnızca yöneticilere gösterilen tasarım taslağı"]}', '{"index":0}', '*The Lean Startup* (2011): MVP bir öğrenme aracıdır. Amaç bir varsayımı (öğrenciler önceden sipariş verir mi?) en ucuz yoldan sınamaktır; ürünün ilk küçük sürümü olmak zorunda bile değildir.', 1, '12. ünite · MVP, MMF ve MMP', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-mmf', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'Minimum Marketable Feature (MMF) nedir?', '{"choices":["Tek başına değer veren, yayınlanabilen en küçük özellik","Bir varsayımı sınamak için yapılan en ucuz deney","Bir epic''in bütün story''lerinin toplamı","Bir story''nin en küçük teknik görevi"]}', '{"index":0}', 'MMF fikri Mark Denne ve Jane Cleland-Huang''ın *Software by Numbers* (2003) kitabından gelir: değeri parçalar hâlinde erken almak. MVP öğrenmeye, MMF değere odaklanır.', 2, '12. ünite · MVP, MMF ve MMP', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-mvp-mmp', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'Squad''ın önceden sipariş fikri için yaptığı ilk deneme şu: bir hafta boyunca öğrenciler sipariş formunu dolduruyor, görevli siparişleri elle hazırlıyor. Bu hangisidir?', '{"choices":["Bir MVP: varsayımı en ucuz yoldan sınıyor","Bir MMP: pazara çıkacak ilk tam ürün","Bir MMF: yayınlanmış bir özellik","Bir spike: teknik bir araştırma"]}', '{"index":0}', 'Arkasında yazılım olmayan, elle yürütülen bu deneme bir MVP''dir: "öğrenciler önceden sipariş verir mi?" sorusunu cevaplar. Cevap evetse MMF''ler ve MMP gelir.', 1, '12. ünite · MVP, MMF ve MMP', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-map-surum', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'Story map''te sürüm planı nasıl çıkarılır?', '{"choices":["Omurganın altına yatay çizgiler çekilir; her çizginin üstü bir sürümdür","Her etkinlik ayrı bir sürüm olur","Story''ler puanlarına göre sıralanıp ilk on tanesi seçilir","Sürüm planı story map''ten çıkarılamaz; ayrı bir belge gerekir"]}', '{"index":0}', 'Jeff Patton''ın yöntemi: ilk çizginin üstünde her etkinlikten en az bir ince kart kalır (yürüyen iskelet). Böylece her sürüm uçtan uca çalışır (3. ünite).', 1, '12. ünite · Story map''ten sürüm planına', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-ilk-surum', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'İlk sürüm çizgisinin altında "Teslim al" adımından hiç kart kalmadı. Sorun nedir?', '{"choices":["Kullanıcı yolculuğu yarım kalır; sürüm kullanılamaz","Sürüm çok küçüktür; daha çok kart eklenmelidir","Sorun yoktur; teslim adımı sonraki sürüme kalabilir","Story map''te adım sayısı azaltılmalıdır"]}', '{"index":0}', 'Sipariş verip teslim alamayan öğrenci bir şey kazanmaz. İlk sürüm her adımın en ince hâlini içermelidir; derinlik sonraki sürümlere kalır.', 2, '12. ünite · Story map''ten sürüm planına', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-burnup-fark', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'Burnup grafiğinin burndown''a göre en büyük üstünlüğü nedir?', '{"choices":["Kapsam değişikliğini ayrı bir çizgide gösterir","Sprint içindeki görev saatlerini gösterir","Takımlar arası hız karşılaştırmasını kolaylaştırır","Yalnızca biten işi değil, değeri de gösterir"]}', '{"index":0}', 'Burndown''da kapsam artınca çizgi yükselir ve takım geriliyormuş gibi görünür. Burnup''ta biten iş ve toplam kapsam iki ayrı çizgidir; iki çizginin kesiştiği yer sürüm tahminidir.', 1, '12. ünite · Burnup ile sürüm tahmini', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-burnup-hesap', 'backlog', 'bl-u12', 12, 'num', 'derived', 'Sürüm 1''in kapsamı 120 puan; şimdiye kadar 48 puan bitti. Takımın hızı Sprint başına 24 puan. Kapsam değişmezse kaç Sprint daha gerekir?', '{"blanks":1}', '{"blanks":[["3±0"]]}', 'Kalan 120 − 48 = 72 puan. 72 / 24 = 3 Sprint.', 1, '12. ünite · Burnup ile sürüm tahmini', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-kapsam-artis', 'backlog', 'bl-u12', 12, 'num', 'derived', 'Aynı sürümde her Sprint kapsam 6 puan artıyor. Hız 24, kalan 72 puan. Kaç Sprint daha gerekir?', '{"blanks":1}', '{"blanks":[["4±0"]]}', 'Her Sprint net 24 − 6 = 18 puan yaklaşılır. 72 / 18 = 4 Sprint. Burnup bu artışı görünür kılar: kapsam çizgisi yükselirken biten iş çizgisi onu daha geç yakalar.', 2, '12. ünite · Burnup ile sürüm tahmini', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-neden-aralik', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'Sürüm tarihi için tek bir tarih yerine aralık vermek neden daha dürüsttür?', '{"choices":["Hız Sprint''ten Sprint''e değişir; tek tarih bunu gizler","Aralık vermek takımın daha az çalışmasını sağlar","Rehber tarih vermeyi yasaklar","Aralık vermek kapsam değişikliğini engeller"]}', '{"index":0}', 'Son Sprint''lerin hızı 18 ile 28 arasında değişiyorsa, kalan iş için iyimser ve kötümser hızla iki tarih hesaplanır. "4 ile 6 Sprint arası" demek, paydaşa belirsizliği de söyler.', 1, '12. ünite · Tek tarih değil tahmin aralığı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-aralik-hesap', 'backlog', 'bl-u12', 12, 'num', 'derived', 'Kalan 90 puan; son Sprint''lerde hız en düşük 18, en yüksek 30. Kötümser tahmin kaç Sprint''tir?', '{"blanks":1}', '{"blanks":[["5±0"]]}', 'Kötümser: 90 / 18 = 5 Sprint. İyimser: 90 / 30 = 3 Sprint. Tahmin "3 ile 5 Sprint arası".', 2, '12. ünite · Tek tarih değil tahmin aralığı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-monte-carlo', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'Monte Carlo yöntemiyle yapılan sürüm tahmini nasıl çalışır?', '{"choices":["Geçmiş hızlardan rastgele seçerek binlerce gelecek denenir","Takımın en yüksek hızı alınır ve kalan işe bölünür","Her story için saat tahmini yapılıp toplanır","Product Owner''ın istediği tarih alınır, kapsam ona göre kesilir"]}', '{"index":0}', 'Agile ve Scrum pratiğinde gördüğün gibi: geçmiş Sprint''lerin hızlarından tekrar tekrar seçerek kalan işin kaç Sprint süreceği binlerce kez simüle edilir. "%85 olasılıkla 5 Sprint içinde" gibi bir cümle çıkar.', 3, '12. ünite · Tek tarih değil tahmin aralığı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-nnl', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'Now-Next-Later yol haritasının tarih çizelgesinden farkı nedir?', '{"choices":["Tarih yerine zaman ufku kullanır","Yalnızca bitmiş işleri gösterir","Her öğeye kesin bir teslim günü yazar","Yalnızca teknik işleri gösterir"]}', '{"index":0}', 'Janna Bastow''un önerdiği biçim: Şimdi (üzerinde çalışılanlar, en ayrıntılı), Sonra (sıradakiler), Daha sonra (fikirler, en kaba). Backlog buzdağının yol haritasındaki karşılığıdır.', 1, '12. ünite · Now-Next-Later yol haritası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-later-ayrinti', 'backlog', 'bl-u12', 12, 'mcq', 'derived', '"Later" sütunundaki öğeler için hangisi doğrudur?', '{"choices":["Kaba ve değişmeye açık kalır; ayrıntılandırmak erken yatırımdır","Story''lere bölünmüş ve tahmin edilmiş olmalıdır","Kesin tarihleri olmalıdır","Teknik Liderlik onayından geçmiş olmalıdır"]}', '{"index":0}', 'Uzak işler büyük olasılıkla değişir. Onlara bugün ayrıntı eklemek, öğrendikçe çöpe gidecek bir yatırımdır.', 2, '12. ünite · Now-Next-Later yol haritası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-sonuc-odak', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'Sonuç odaklı bir yol haritasında Q1 satırına hangisi yazılır?', '{"choices":["\"Öğle saatinde ortalama bekleme 20 dakikadan 10 dakikaya insin\"","\"Önceden sipariş, bildirim ve doluluk göstergesi yayınlansın\"","\"Sipariş servisi ve veri tabanı tabloları tamamlansın\"","\"Takım 120 story point bitirsin\""]}', '{"index":0}', 'Özellik listesi bir çözümü taahhüt eder; sonuç bir hedefi. Hedef yazılınca takım daha iyi bir yol bulduğunda planı değiştirebilir (impact mapping, 3. ünite).', 1, '12. ünite · Sonuç odaklı yol haritası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-ozellik-taahhut', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'Özellik ve tarih dolu bir yol haritasının en büyük riski nedir?', '{"choices":["Paydaşlar söz sayar; yön değiştirmek zorlaşır","Takım tahmin yapmayı tamamen bırakır","Story''ler fazla küçük bölünür","Backlog''da teknik işlere yer kalmaz"]}', '{"index":0}', 'Yol haritası bir iletişim aracıdır, sözleşme değildir. Tarihli özellik listesi öğrenmeyi cezalandırır: yeni bilgiye göre değişmek "sözü bozmak" gibi görünür.', 1, '12. ünite · Sonuç odaklı yol haritası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-tek-backlog', 'backlog', 'bl-u12', 12, 'mcq', 'derived', 'Rehber''e göre birden çok Scrum Takımı aynı ürün üzerinde çalışıyorsa kaç Product Backlog ve kaç Product Owner olur?', '{"choices":["Bir Product Backlog ve bir Product Owner","Her takıma bir Product Backlog ve bir Product Owner","Bir Product Backlog, her takıma bir Product Owner","Her takıma bir Product Backlog, tek bir Product Owner"]}', '{"index":0}', 'Rehber: aynı ürün üzerinde çalışan takımlar aynı Product Goal''i, aynı Product Backlog''u ve aynı Product Owner''ı paylaşır. Çok takımlı backlog''un nasıl yönetildiği Ölçekli Agile pratiğinin konusu.', 1, '12. ünite · Çok takımlı backlog''a köprü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bl-u12-pi-planning', 'backlog', 'bl-u12', 12, 'fill', 'derived', 'SAFe''te birçok takımın feature''ları birlikte planladığı, genellikle iki günlük etkinliğin adı nedir?', '{"blanks":1}', '{"blanks":[["PI Planning","Program Increment Planning","PI Planlama"]]}', 'PI Planning, bir Agile Release Train''deki takımların önümüzdeki 8-12 haftalık Program Increment için feature''ları, bağımlılıkları ve hedefleri birlikte planladığı etkinliktir. Ölçekli Agile pratiğinde ayrıntılı ele alınır.', 2, '12. ünite · Çok takımlı backlog''a köprü', 1)
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
UPDATE questions SET kavram = 'u5-invest', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u5-kim';
UPDATE questions SET kavram = 'u5-invest', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u5-harfler';
UPDATE questions SET kavram = 'u5-invest', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u5-smart';
UPDATE questions SET kavram = 'u5-invest', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u5-kontrol-listesi';
UPDATE questions SET kavram = 'u5-independent', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u5-anlam';
UPDATE questions SET kavram = 'u5-independent', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u5-odeme-turleri';
UPDATE questions SET kavram = 'u5-independent', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u5-zincir';
UPDATE questions SET kavram = 'u5-negotiable', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u5-negotiable-anlam';
UPDATE questions SET kavram = 'u5-negotiable', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u5-dikte';
UPDATE questions SET kavram = 'u5-negotiable', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u5-ayrinti-yasak';
UPDATE questions SET kavram = 'u5-valuable', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u5-valuable-anlam';
UPDATE questions SET kavram = 'u5-valuable', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u5-katman';
UPDATE questions SET kavram = 'u5-valuable', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u5-teknik-is';
UPDATE questions SET kavram = 'u5-estimable', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u5-estimable-anlam';
UPDATE questions SET kavram = 'u5-estimable', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u5-spike';
UPDATE questions SET kavram = 'u5-estimable', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u5-alan-bilgisi';
UPDATE questions SET kavram = 'u5-small', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u5-ne-kadar';
UPDATE questions SET kavram = 'u5-small', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u5-cok-kucuk';
UPDATE questions SET kavram = 'u5-small', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u5-neden-kucuk';
UPDATE questions SET kavram = 'u5-testable', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u5-testable-anlam';
UPDATE questions SET kavram = 'u5-testable', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u5-olcu';
UPDATE questions SET kavram = 'u5-testable', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u5-test-yazmak';
UPDATE questions SET kavram = 'u5-gerilim', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u5-kucuk-degerli';
UPDATE questions SET kavram = 'u5-gerilim', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u5-kapi';
UPDATE questions SET kavram = 'u5-gerilim', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u5-en-onemli';
UPDATE questions SET kavram = 'u6-tanim', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u6-nedir';
UPDATE questions SET kavram = 'u6-tanim', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u6-ne-zaman';
UPDATE questions SET kavram = 'u6-tanim', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u6-kim';
UPDATE questions SET kavram = 'u6-tanim', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u6-confirmation';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u6-liste';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u6-ne-zaman-kural';
UPDATE questions SET kavram = 'u6-kural', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u6-sayisi';
UPDATE questions SET kavram = 'u6-gherkin', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u6-sira';
UPDATE questions SET kavram = 'u6-gherkin', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u6-eksik';
UPDATE questions SET kavram = 'u6-gherkin', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u6-gherkin';
UPDATE questions SET kavram = 'u6-gherkin', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u6-tek-davranis';
UPDATE questions SET kavram = 'u6-bdd', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u6-bdd-kim';
UPDATE questions SET kavram = 'u6-bdd', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u6-sbe';
UPDATE questions SET kavram = 'u6-bdd', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u6-ornek-gucu';
UPDATE questions SET kavram = 'u6-example-mapping', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u6-renkler';
UPDATE questions SET kavram = 'u6-example-mapping', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u6-kirmizi-cok';
UPDATE questions SET kavram = 'u6-example-mapping', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u6-mavi-cok';
UPDATE questions SET kavram = 'u6-example-mapping', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u6-sure';
UPDATE questions SET kavram = 'u6-three-amigos', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u6-kimler';
UPDATE questions SET kavram = 'u6-three-amigos', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u6-test-gec';
UPDATE questions SET kavram = 'u6-ac-dod', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u6-fark';
UPDATE questions SET kavram = 'u6-ac-dod', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u6-hangisi-1';
UPDATE questions SET kavram = 'u6-ac-dod', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u6-hangisi-2';
UPDATE questions SET kavram = 'u6-olcu', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u6-belirsiz';
UPDATE questions SET kavram = 'u6-olcu', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u6-olumsuz-yol';
UPDATE questions SET kavram = 'u6-olcu', yedek = 0, etiketler = 'hesap' WHERE id = 'bl-u6-kenar';
UPDATE questions SET kavram = 'u7-neden', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u7-fayda';
UPDATE questions SET kavram = 'u7-neden', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u7-yapilmayan';
UPDATE questions SET kavram = 'u7-neden', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u7-sprint-sonu';
UPDATE questions SET kavram = 'u7-dikey', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u7-tanim';
UPDATE questions SET kavram = 'u7-dikey', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u7-yatay-zarar';
UPDATE questions SET kavram = 'u7-dikey', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u7-dikey-sec';
UPDATE questions SET kavram = 'u7-dikey', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u7-hamburger';
UPDATE questions SET kavram = 'u7-spidr', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u7-harfler';
UPDATE questions SET kavram = 'u7-spidr', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u7-path';
UPDATE questions SET kavram = 'u7-spidr', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u7-interface';
UPDATE questions SET kavram = 'u7-spidr', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u7-rules';
UPDATE questions SET kavram = 'u7-spidr', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u7-data';
UPDATE questions SET kavram = 'u7-lawrence', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u7-kim';
UPDATE questions SET kavram = 'u7-lawrence', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u7-ilk-soru';
UPDATE questions SET kavram = 'u7-lawrence', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u7-en-iyi-bolme';
UPDATE questions SET kavram = 'u7-akis-crud', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u7-is-akisi';
UPDATE questions SET kavram = 'u7-akis-crud', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u7-crud';
UPDATE questions SET kavram = 'u7-akis-crud', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u7-yonet-kelimesi';
UPDATE questions SET kavram = 'u7-basit-karmasik', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u7-basit-once';
UPDATE questions SET kavram = 'u7-basit-karmasik', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u7-performans';
UPDATE questions SET kavram = 'u7-basit-karmasik', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u7-buyuk-caba';
UPDATE questions SET kavram = 'u7-hiyerarsi', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u7-epic-feature';
UPDATE questions SET kavram = 'u7-hiyerarsi', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u7-yeterince-kucuk';
UPDATE questions SET kavram = 'u7-hiyerarsi', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u7-kim-boler';
UPDATE questions SET kavram = 'u8-nfr', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u8-tanim';
UPDATE questions SET kavram = 'u8-nfr', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u8-ilities';
UPDATE questions SET kavram = 'u8-nfr', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u8-unutulur';
UPDATE questions SET kavram = 'u8-nfr-yeri', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u8-uc-yer';
UPDATE questions SET kavram = 'u8-nfr-yeri', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u8-dod-mu';
UPDATE questions SET kavram = 'u8-nfr-yeri', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u8-ayri-oge';
UPDATE questions SET kavram = 'u8-nfr-yeri', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u8-kabul-kriteri';
UPDATE questions SET kavram = 'u8-teknik', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u8-enabler';
UPDATE questions SET kavram = 'u8-teknik', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u8-deger-yaz';
UPDATE questions SET kavram = 'u8-teknik', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u8-teknik-yuzde';
UPDATE questions SET kavram = 'u8-spike', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u8-spike-tanim';
UPDATE questions SET kavram = 'u8-spike', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u8-timebox';
UPDATE questions SET kavram = 'u8-spike', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u8-cikti';
UPDATE questions SET kavram = 'u8-spike', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u8-cok-spike';
UPDATE questions SET kavram = 'u8-hata', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u8-sprint-ici';
UPDATE questions SET kavram = 'u8-hata', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u8-kacan';
UPDATE questions SET kavram = 'u8-hata', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u8-acil';
UPDATE questions SET kavram = 'u8-borc', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u8-koken';
UPDATE questions SET kavram = 'u8-borc', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u8-gorunur';
UPDATE questions SET kavram = 'u8-borc', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u8-fowler';
UPDATE questions SET kavram = 'u8-borc', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u8-borc-dod';
UPDATE questions SET kavram = 'u9-goreli', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u9-goreli-nedir';
UPDATE questions SET kavram = 'u9-goreli', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u9-neden-goreli';
UPDATE questions SET kavram = 'u9-goreli', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u9-referans';
UPDATE questions SET kavram = 'u9-puan', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u9-puan-ne';
UPDATE questions SET kavram = 'u9-puan', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u9-kim-tahmin';
UPDATE questions SET kavram = 'u9-puan', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u9-puan-saat';
UPDATE questions SET kavram = 'u9-puan', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u9-jeffries';
UPDATE questions SET kavram = 'u9-fibonacci', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u9-neden-fib';
UPDATE questions SET kavram = 'u9-fibonacci', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u9-degistirilmis';
UPDATE questions SET kavram = 'u9-fibonacci', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u9-soru-karti';
UPDATE questions SET kavram = 'u9-poker', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u9-poker-kim';
UPDATE questions SET kavram = 'u9-poker', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u9-ayni-anda';
UPDATE questions SET kavram = 'u9-poker', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u9-uclar';
UPDATE questions SET kavram = 'u9-poker', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u9-kerem-13';
UPDATE questions SET kavram = 'u9-poker', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u9-po-kart';
UPDATE questions SET kavram = 'u9-hizli', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u9-tshirt';
UPDATE questions SET kavram = 'u9-hizli', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u9-affinity';
UPDATE questions SET kavram = 'u9-hizli', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u9-kova';
UPDATE questions SET kavram = 'u9-ideal-gun', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u9-ideal-nedir';
UPDATE questions SET kavram = 'u9-ideal-gun', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u9-ideal-sorun';
UPDATE questions SET kavram = 'u9-tuzak', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u9-kiyas';
UPDATE questions SET kavram = 'u9-tuzak', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u9-enflasyon';
UPDATE questions SET kavram = 'u9-tuzak', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u9-taahhut';
UPDATE questions SET kavram = 'u9-noestimates', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u9-noestimates-ne';
UPDATE questions SET kavram = 'u9-noestimates', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u9-sayma-sart';
UPDATE questions SET kavram = 'u9-noestimates', yedek = 0, etiketler = 'hesap' WHERE id = 'bl-u9-hiz-sayisi';
UPDATE questions SET kavram = 'u10-etkenler', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u10-sira-mi';
UPDATE questions SET kavram = 'u10-etkenler', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u10-dort-etken';
UPDATE questions SET kavram = 'u10-etkenler', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u10-riskli-once';
UPDATE questions SET kavram = 'u10-moscow', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u10-harfler';
UPDATE questions SET kavram = 'u10-moscow', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u10-must-orani';
UPDATE questions SET kavram = 'u10-moscow', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u10-hepsi-must';
UPDATE questions SET kavram = 'u10-kano', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u10-kano-kim';
UPDATE questions SET kavram = 'u10-kano', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u10-temel';
UPDATE questions SET kavram = 'u10-kano', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u10-heyecan';
UPDATE questions SET kavram = 'u10-cod', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u10-cod-nedir';
UPDATE questions SET kavram = 'u10-cod', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u10-reinertsen';
UPDATE questions SET kavram = 'u10-cod', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u10-sabit-tarih';
UPDATE questions SET kavram = 'u10-cod', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u10-somut-olmayan';
UPDATE questions SET kavram = 'u10-wsjf', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u10-formul';
UPDATE questions SET kavram = 'u10-wsjf', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u10-safe-bilesen';
UPDATE questions SET kavram = 'u10-wsjf', yedek = 0, etiketler = 'hesap' WHERE id = 'bl-u10-wsjf-hesap';
UPDATE questions SET kavram = 'u10-wsjf', yedek = 0, etiketler = 'hesap' WHERE id = 'bl-u10-wsjf-sec';
UPDATE questions SET kavram = 'u10-matris', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u10-hizli-kazanc';
UPDATE questions SET kavram = 'u10-matris', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u10-rice';
UPDATE questions SET kavram = 'u10-matris', yedek = 0, etiketler = 'hesap' WHERE id = 'bl-u10-rice-hesap';
UPDATE questions SET kavram = 'u10-hepsi-yuksek', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u10-uc-yuksek';
UPDATE questions SET kavram = 'u10-hepsi-yuksek', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u10-po-hesap';
UPDATE questions SET kavram = 'u11-refinement', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u11-tanim';
UPDATE questions SET kavram = 'u11-refinement', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u11-etkinlik-mi';
UPDATE questions SET kavram = 'u11-refinement', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u11-yuzde-on';
UPDATE questions SET kavram = 'u11-refinement', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u11-hazir-rehber';
UPDATE questions SET kavram = 'u11-oturum', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u11-kac-sprint';
UPDATE questions SET kavram = 'u11-oturum', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u11-kimler-katilir';
UPDATE questions SET kavram = 'u11-oturum', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u11-akis';
UPDATE questions SET kavram = 'u11-dor', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u11-dor-nedir';
UPDATE questions SET kavram = 'u11-dor', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u11-dor-rehber';
UPDATE questions SET kavram = 'u11-dor', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u11-dor-madde';
UPDATE questions SET kavram = 'u11-dor-tuzak', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u11-kapi';
UPDATE questions SET kavram = 'u11-dor-tuzak', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u11-esnek';
UPDATE questions SET kavram = 'u11-onay', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u11-onay-fayda';
UPDATE questions SET kavram = 'u11-onay', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u11-onay-risk';
UPDATE questions SET kavram = 'u11-onay', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u11-onay-rehber';
UPDATE questions SET kavram = 'u11-onay', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u11-geri-donen';
UPDATE questions SET kavram = 'u11-durumlar', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u11-durum-sirasi';
UPDATE questions SET kavram = 'u11-durumlar', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u11-cok-durum';
UPDATE questions SET kavram = 'u11-temizlik', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u11-eski-oge';
UPDATE questions SET kavram = 'u11-temizlik', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u11-ne-siklikla';
UPDATE questions SET kavram = 'u12-mvp', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u12-mvp-nedir';
UPDATE questions SET kavram = 'u12-mvp', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u12-mmf';
UPDATE questions SET kavram = 'u12-mvp', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u12-mvp-mmp';
UPDATE questions SET kavram = 'u12-surum', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u12-map-surum';
UPDATE questions SET kavram = 'u12-surum', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u12-ilk-surum';
UPDATE questions SET kavram = 'u12-burnup', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u12-burnup-fark';
UPDATE questions SET kavram = 'u12-burnup', yedek = 0, etiketler = 'hesap' WHERE id = 'bl-u12-burnup-hesap';
UPDATE questions SET kavram = 'u12-burnup', yedek = 0, etiketler = 'hesap' WHERE id = 'bl-u12-kapsam-artis';
UPDATE questions SET kavram = 'u12-aralik', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u12-neden-aralik';
UPDATE questions SET kavram = 'u12-aralik', yedek = 0, etiketler = 'hesap' WHERE id = 'bl-u12-aralik-hesap';
UPDATE questions SET kavram = 'u12-aralik', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u12-monte-carlo';
UPDATE questions SET kavram = 'u12-yol-haritasi', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u12-nnl';
UPDATE questions SET kavram = 'u12-yol-haritasi', yedek = 0, etiketler = 'kavram' WHERE id = 'bl-u12-later-ayrinti';
UPDATE questions SET kavram = 'u12-sonuc', yedek = 0, etiketler = 'senaryo' WHERE id = 'bl-u12-sonuc-odak';
UPDATE questions SET kavram = 'u12-sonuc', yedek = 0, etiketler = 'sahada' WHERE id = 'bl-u12-ozellik-taahhut';
UPDATE questions SET kavram = 'u12-kopru', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u12-tek-backlog';
UPDATE questions SET kavram = 'u12-kopru', yedek = 0, etiketler = 'kaynak' WHERE id = 'bl-u12-pi-planning';
