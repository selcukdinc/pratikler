-- Bu dosya scripts/sorular-sql.ts ile icerik/tip-elektronigi/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('te-u1', 'tip-elektronigi', 'Fizyolojik Sinyaller ve Biyomedikal Ölçüm Sistemleri', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('te-u2', 'tip-elektronigi', 'Biyosinyaller: EKG, EEG ve EMG', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('te-u3', 'tip-elektronigi', 'Biyomedikal Sensörler ve Dönüştürücüler', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-tanim', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Ders notundaki tanıma göre aşağıdakilerden hangisi tıp elektroniğinin kapsamına girmez?', '{"choices":["Fizyolojik büyüklüklerin sensör ve elektrotlarla algılanması","Biyomedikal sinyallerin kuvvetlendirilmesi ve filtrelenmesi","Elektronik sistemlerin tedavi amacıyla kullanılması","İlaç etken maddelerinin kimyasal sentezlenmesi","Ölçüm sonuçlarının tanıya destek amacıyla kullanılması"]}', '{"index":3}', 'Tıp elektroniği fizyolojik süreçlerin **ölçülmesi, izlenmesi, tanıya destek ve tedavi** amacıyla elektronik sistemlerin kullanıldığı alandır. İlaç sentezi elektronik bir ölçüm ya da tedavi sistemi değildir.', 1, 'Ders notu, 1-2. hafta · Tıp elektroniğinin tanımı ve kapsamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-gelisim', 'tip-elektronigi', 'te-u1', 1, 'tf', 'derived', 'Ders notuna göre tıp elektroniği, ölçüm ve kayıttan başlayıp görüntüleme, tedavi ve sürekli fizyolojik izlemeye doğru gelişmiştir.', '{}', '{"value":true}', 'Doğru. Alan, ilk ölçüm ve kayıt cihazlarından görüntüleme, tedavi ve giyilebilir cihazlarla sürekli izlemeye doğru genişlemiştir.', 1, 'Ders notu, 1-2. hafta · Tıp elektroniğinin tanımı ve kapsamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-disiplin', 'tip-elektronigi', 'te-u1', 1, 'fill', 'derived', 'Tıp elektroniği, elektrik-elektronik mühendisliğinin temel bilgi alanlarının insan vücudundan ölçüm alma ve tıbbi sistem geliştirme amacıyla bir araya geldiği ____ bir alandır.', '{"blanks":1}', '{"blanks":[["disiplinler arası","disiplinlerarası","disiplinler arasi","disiplinlerarasi"]]}', 'Ders notu tıp elektroniğini **disiplinler arası** bir alan olarak tanımlar: elektronik, sinyal işleme ve fizyoloji bilgisi birlikte kullanılır.', 1, 'Ders notu, 1-2. hafta · Tıp elektroniğinin tanımı ve kapsamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-sinyal-tanim', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Fizyolojik sinyal için aşağıdaki ifadelerden hangisi ders notundaki tanımla uyuşmaz?', '{"choices":["Kaynağı kalp, beyin ya da kas gibi bir fizyolojik süreçtir","Gerilim, basınç ya da sıcaklık gibi bir büyüklükle gözlenir","Zamanla ya da başka bir bağımsız değişkenle değişebilir","Ölçümün tek amacı sinyalin kendisini kaydetmektir","Canlı sistemdeki bir süreç hakkında bilgi taşır"]}', '{"index":3}', 'Notta özellikle vurgulanır: amaç yalnızca sinyali kaydetmek değil, **taşıdığı fizyolojik bilgiyi** elde etmektir.', 1, 'Ders notu, 1-2. hafta · Fizyolojik sinyal kavramı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-biosignal', 'tip-elektronigi', 'te-u1', 1, 'tf', 'derived', 'Ders notuna göre "biosignal" terimi "physiological signal" teriminden daha dar bir kavramdır.', '{}', '{"value":false}', 'Yanlış. İki terim bağlama göre benzer anlamda kullanılabilir, ancak notta **biosignal daha geniş** bir kavram olarak belirtilir.', 2, 'Ders notu, 1-2. hafta · Fizyolojik sinyal kavramı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-kaynak', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'İnsan vücudundaki fizyolojik süreçlerin ürettiği ölçülebilir bilgi ders notunda hangi beş büyüklük türüyle verilir?', '{"choices":["Elektriksel, mekanik, termal, optik, kimyasal","Elektriksel, manyetik, nükleer, akustik, kimyasal","Mekanik, termal, radyoaktif, optik, biyolojik","Elektriksel, mekanik, akustik, nükleer, termal","Kimyasal, optik, manyetik, radyoaktif, mekanik"]}', '{"index":0}', 'Not beş tür sayar: **elektriksel** (EKG), **mekanik** (kan basıncı), **termal** (vücut sıcaklığı), **optik** (PPG) ve **kimyasal** (pH, O₂, glikoz).', 1, 'Ders notu, 1-2. hafta · Fizyolojik sinyal kavramı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-sinif-ppg', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'PPG ve SpO₂ ölçümü, ders notundaki sınıflandırmada hangi sinyal türüne girer?', '{"choices":["Biyooptik","Biyoelektriksel","Biyomekanik","Biyotermal","Biyokimyasal"]}', '{"index":0}', 'PPG ve SpO₂ **ışığın dokuyla etkileşimine** dayanır; bu yüzden biyooptik sinyallerdir.', 1, 'Ders notu, 1-2. hafta · Fizyolojik sinyallerin sınıflandırılması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-sinif-basinc', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Kan basıncı, solunum ve kan akışı ders notunda hangi sinyal türüne örnek verilir?', '{"choices":["Biyomekanik","Biyoelektriksel","Biyooptik","Biyotermal","Biyokimyasal"]}', '{"index":0}', 'Basınç, kuvvet, hareket ve akış **biyomekanik** büyüklüklerdir.', 1, 'Ders notu, 1-2. hafta · Fizyolojik sinyallerin sınıflandırılması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-biyoelektrik', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Biyoelektriksel sinyallerle ilgili hangisi doğrudur?', '{"choices":["Uyarılabilir hücre ve dokuların aktivitesinden doğar, elektrotla ölçülür","Dokudan geçen ışığın şiddetindeki değişimle ölçülür","Yalnızca iğne elektrotlarla vücudun içinden kaydedilebilir","Genlikleri volt mertebesinde olduğu için kuvvetlendirme gerekmez","İyon ya da molekül konsantrasyonu değiştiğinde oluşur"]}', '{"index":0}', 'Biyoelektriksel sinyaller (EKG, EEG, EMG, EOG) **uyarılabilir hücre ve dokulardaki elektriksel aktivitenin** sonucu olan biyopotansiyellerdir ve elektrotlarla ölçülür. Genlikleri küçüktür; kuvvetlendirme ve gürültüden ayırma ortak mühendislik problemidir.', 2, 'Ders notu, 1-2. hafta · Fizyolojik sinyallerin sınıflandırılması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-sinif-sensor', 'tip-elektronigi', 'te-u1', 1, 'tf', 'derived', 'Ders notuna göre sinyalin kaynağı, kullanılacak sensörü ve ölçüm elektroniğinin özelliklerini doğrudan etkiler.', '{}', '{"value":true}', 'Doğru. Her sinyal türü farklı bir algılama yöntemi ve ölçüm sistemi gerektirir.', 1, 'Ders notu, 1-2. hafta · Fizyolojik sinyallerin sınıflandırılması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-genlik-eeg', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', '1-2. hafta notundaki tabloya göre EKG, EEG ve EMG içinde tipik genliği en düşük olan hangisidir?', '{"choices":["EEG","EKG","EMG","Üçünün genliği eşittir","EKG ile EMG eşit, EEG daha büyük"]}', '{"index":0}', 'Tabloda EEG `10–100 µV, EKG `0,5–4 mV, EMG `50 µV–5 mV verilir. **EEG** en düşük genlikli olandır; bu yüzden en yüksek kazanç ve gürültü önlemi gerektirir.', 2, 'Ders notu, 1-2. hafta · Biyosinyallerin genlik ve frekans özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-genlik-ekg-frekans', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', '1-2. hafta notundaki tabloya göre EKG''nin yaklaşık frekans aralığı hangisidir?', '{"choices":["`0,05–150 Hz","`0,5–100 Hz","`10–500 Hz","`1–5 kHz","`0,01–2 Hz"]}', '{"index":0}', 'EKG için **`0,05–150 Hz** verilir. `0,5–100 Hz EEG''nin, `10–500 Hz EMG''nin aralığıdır.', 2, 'Ders notu, 1-2. hafta · Biyosinyallerin genlik ve frekans özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-genlik-emg', 'tip-elektronigi', 'te-u1', 1, 'tf', 'derived', '1-2. hafta notundaki tabloya göre EMG, üç biyoelektriksel sinyal içinde frekans içeriği en yükseğe uzanan sinyaldir.', '{}', '{"value":true}', 'Doğru. EMG `10–500 Hz ile kas aktivasyonuna bağlı **geniş bantlı** bir sinyaldir; EKG `150 Hz''e, EEG `100 Hz''e kadar uzanır.', 2, 'Ders notu, 1-2. hafta · Biyosinyallerin genlik ve frekans özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-genlik-tasarim', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Ders notuna göre bir sinyalin genlik ve frekans özellikleri en doğrudan neyin tasarımını etkiler?', '{"choices":["Yükselteç, filtre ve veri toplama sisteminin","Hastanın oturma pozisyonunun","Cihazın kasasının renginin","Hastane bilgi sisteminin","Elektrot kablolarının uzunluğunun"]}', '{"index":0}', 'Genlik kazancı, frekans içeriği ise filtre kesimlerini ve örnekleme hızını belirler; bu yüzden **yükselteç, filtre ve veri toplama sistemi** bu özelliklere göre tasarlanır.', 2, 'Ders notu, 1-2. hafta · Biyosinyallerin genlik ve frekans özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-measurand-tanim', 'tip-elektronigi', 'te-u1', 1, 'fill', 'derived', 'Bir ölçüm sisteminin belirlemeyi amaçladığı fiziksel, kimyasal ya da biyolojik büyüklüğe ____ denir.', '{"blanks":1}', '{"blanks":[["measurand","ölçülen büyüklük","olculen buyukluk"]]}', 'Bu büyüklüğe **measurand** (ölçülen büyüklük) denir. Doğru tanımlanması sensör seçimini, ölçüm aralığını ve hassasiyeti belirler.', 1, 'Ders notu, 1-2. hafta · Ölçülen büyüklük (measurand)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-measurand-ekg', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'EKG ölçümünde measurand hangisidir?', '{"choices":["Vücut yüzeyindeki biyopotansiyel farkı","Kalbin pompaladığı kan hacmi","Elektrotun çıkışındaki akım","Ekranda görünen dalga biçimi","Kalp kasındaki sıcaklık değişimi"]}', '{"index":0}', 'EKG''de ölçülmek istenen **vücut yüzeyindeki potansiyel farkıdır**; elektrot ve ölçüm sistemi bunu EKG sinyaline çevirir. Ekrandaki dalga ölçümün sonucudur, measurand değil.', 2, 'Ders notu, 1-2. hafta · Ölçülen büyüklük (measurand)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-measurand-glikoz', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Ders notundaki tabloya göre glikoz ölçümünde elde edilen elektriksel bilgi hangisidir?', '{"choices":["Elektrokimyasal sensör çıkışı","Fotodedektör çıkışı","Termistör direnci","Yüzey biyopotansiyeli","Diyafram deformasyonu"]}', '{"index":0}', 'Glikoz konsantrasyonu kimyasal bir büyüklüktür ve **elektrokimyasal sensör** ile elektriksel çıkışa çevrilir.', 1, 'Ders notu, 1-2. hafta · Ölçülen büyüklük (measurand)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-sistem-cevre', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'İnsan–enstrümantasyon sisteminde "çevre" bileşeninin ders notundaki rolü hangisidir?', '{"choices":["Ölçümü bozabilecek girişim ve artefaktların kaynağı olabilir","Ölçülecek fizyolojik büyüklüğün kaynağıdır","Measurand ile elektronik sistem arasındaki arayüzdür","Sinyali uygun biçime getirip çıkış üretir","Hastaya uyarı veren geri besleme bloğudur"]}', '{"index":0}', 'Çevre, ölçümü bozabilecek **girişim ve artefaktların kaynağı** olabilir. Fizyolojik büyüklüğün kaynağı insandır, arayüz sensör/elektrottur, işleme ölçüm sistemindedir.', 1, 'Ders notu, 1-2. hafta · İnsan–enstrümantasyon sistemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-sistem-insan', 'tip-elektronigi', 'te-u1', 1, 'tf', 'derived', 'Ders notuna göre biyomedikal ölçümde insan yalnızca ölçülen bir kaynaktır; sistemin bir parçası sayılmaz.', '{}', '{"value":false}', 'Yanlış. İnsan; sensör, ölçüm sistemi, çevre ve gerektiğinde geri besleme ile birlikte **bütün bir sistemin parçasıdır**.', 1, 'Ders notu, 1-2. hafta · İnsan–enstrümantasyon sistemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-sistem-arayuz', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'İnsan–enstrümantasyon sisteminde measurand ile elektronik sistem arasındaki arayüz hangisidir?', '{"choices":["Sensör ya da elektrot","Çevre","Çıktı birimi","Geri besleme","Hasta"]}', '{"index":0}', '**Sensör/elektrot**, ölçülen büyüklük ile elektronik ölçüm sistemi arasındaki arayüzdür.', 1, 'Ders notu, 1-2. hafta · İnsan–enstrümantasyon sistemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-zincir-sira', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Bir EKG cihazında sinyalin izlediği yol hangi sırayla verilir?', '{"choices":["Elektrot → analog işlemler → ADC → sayısal bölüm","ADC → elektrot → analog işlemler → sayısal bölüm","Elektrot → ADC → analog işlemler → sayısal bölüm","Analog işlemler → elektrot → sayısal bölüm → ADC","Sayısal bölüm → ADC → analog işlemler → elektrot"]}', '{"index":0}', 'Elektrot biyopotansiyeli alır, **analog işlemler** kuvvetlendirip istenmeyen bileşenleri azaltır, **ADC** sayısallaştırır, sayısal bölüm işler, gösterir ve depolar.', 1, 'Ders notu, 1-2. hafta · Ölçüm sisteminin blokları, sensör ve elektrot', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-elektrot', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Ders notuna göre elektrotun ölçüm zincirindeki özel görevi hangisidir?', '{"choices":["İyonik iletim ile elektron iletimi arasında arayüz olmak","Sinyali sayısal veriye çevirip bilgisayara aktarmak","Işık şiddetindeki değişimi akıma dönüştürmek","Sıcaklık değişimini direnç değişimine dönüştürmek","Sinyaldeki şebeke girişimini sayısal olarak süzmek"]}', '{"index":0}', 'Elektrot, vücuttaki **iyonik** elektriksel aktivite ile ölçüm sistemindeki **elektron** iletimi arasında arayüz oluşturur.', 2, 'Ders notu, 1-2. hafta · Ölçüm sisteminin blokları, sensör ve elektrot', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-sensor-donusturucu', 'tip-elektronigi', 'te-u1', 1, 'tf', 'derived', 'Dönüştürücü (transducer), bir enerji ya da fiziksel büyüklük biçimini başka bir biçime dönüştüren elemandır.', '{}', '{"value":true}', 'Doğru. Biyomedikal ölçümde amaç çoğunlukla fizyolojik bilgiyi elektronik sistemin işleyebileceği **elektriksel sinyale** aktarmaktır.', 1, 'Ders notu, 1-2. hafta · Ölçüm sisteminin blokları, sensör ve elektrot', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-termistor', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Ders notundaki tabloya göre termistörün elektriksel çıktısı hangisidir?', '{"choices":["Direnç değişimi","Akım / gerilim","Yük birikimi","Kapasite değişimi","Biyopotansiyel"]}', '{"index":0}', 'Termistör sıcaklıkla **direnci değişen** bir elemandır; fotodedektör akım/gerilim, elektrot ise potansiyel verir.', 1, 'Ders notu, 1-2. hafta · Ölçüm sisteminin blokları, sensör ve elektrot', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-afe', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Analog ön ucun (AFE) ölçüm zincirindeki görevi hangisidir?', '{"choices":["Sensör sinyalini ADC''ye uygulanabilir hale getirmek","Sayısal veriyi ekranda göstermek","Hastayı elektriksel olarak uyarmak","Ölçüm sonuçlarını hastane sistemine göndermek","Kalp hızını RR aralığından hesaplamak"]}', '{"index":0}', 'Sensör ya da elektrottan gelen sinyal çoğu zaman ADC''ye doğrudan uygulanamaz; **AFE** onu sonraki aşamalar için uygun hale getirir.', 1, 'Ders notu, 1-2. hafta · Analog ön uç ve sinyal koşullama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-kosullama-temel', 'tip-elektronigi', 'te-u1', 1, 'fill', 'derived', 'Sinyal koşullamanın iki temel işlemi kuvvetlendirme ve analog ____dir.', '{"blanks":1}', '{"blanks":[["filtreleme","filtrelemedir","süzme"]]}', 'Sinyal koşullamanın temel işlemleri **kuvvetlendirme ve analog filtrelemedir**; parametreleri sinyalin genlik ve frekans özelliklerine göre seçilir.', 1, 'Ders notu, 1-2. hafta · Analog ön uç ve sinyal koşullama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-daq', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Ders notuna göre veri toplama sistemi (DAQ) hangi süreçleri kapsar?', '{"choices":["Koşullama, örnekleme, sayısallaştırma ve işlemciye aktarma","Yalnızca analog sinyalin kuvvetlendirilmesi","Yalnızca sayısal verinin ekranda gösterilmesi","Elektrotun cilde yapıştırılması ve hastanın hazırlanması","Yalnızca klinik yorumun hekime raporlanması"]}', '{"index":0}', 'DAQ; sensörden gelen analog sinyalin **koşullandırılması, örneklenmesi, sayısallaştırılması ve bilgisayara aktarılmasını** kapsar.', 2, 'Ders notu, 1-2. hafta · ADC, örnekleme ve veri toplama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-k-kuantalama', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Giriş aralığı 0–5 V olan 8 bitlik bir ADC''nin kuantalama aralığı yaklaşık kaç volttur?', '{"choices":["0,0195 V","0,625 V","0,0049 V","0,039 V","0,195 V"]}', '{"index":0}', '8 bit $2^8 = 256$ seviye verir. Kuantalama aralığı $\delta = V / 2^N = 5 / 256 \approx 0{,}0195$ V olur.', 2, 'Semmlow, Biosignal and Biomedical Image Processing, 1. bölüm · ADC, örnekleme ve veri toplama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-k-nyquist', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Bir sinyalin örneklerden doğru biçimde geri elde edilebilmesi için örnekleme frekansı en az ne olmalıdır?', '{"choices":["Sinyaldeki en yüksek frekansın iki katı","Sinyaldeki en yüksek frekansın yarısı","Sinyaldeki en düşük frekansın iki katı","Analog sistemin −3 dB bant genişliğine eşit","Sinyaldeki en yüksek frekansa eşit"]}', '{"index":0}', 'Örnekleme frekansı sinyalde bulunan **en yüksek frekansın iki katı** olmalıdır. Bu frekans gürültüden de gelebilir; bu yüzden ADC''den önce analog filtreyle sinyal sınırlanır. Aksi halde aliasing oluşur ve sonradan düzeltilemez.', 2, 'Semmlow, Biosignal and Biomedical Image Processing, 1. bölüm · ADC, örnekleme ve veri toplama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-k-aliasing', 'tip-elektronigi', 'te-u1', 1, 'tf', 'derived', 'Yetersiz örneklemeden doğan hata (aliasing), sayısal sinyal işleme yöntemleriyle sonradan düzeltilebilir.', '{}', '{"value":false}', 'Yanlış. Aliasing sayısal gösterimin içine yerleşir; **hiçbir sayısal işlem** onu düzeltemez. Önlem ADC''den önce alçak geçiren (anti-aliasing) filtre ya da yeterince yüksek örnekleme hızıdır.', 2, 'Semmlow, Biosignal and Biomedical Image Processing, 1. bölüm · ADC, örnekleme ve veri toplama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-k-filtre-egim', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Bir alçak geçiren filtrenin derecesi (kutup sayısı) 4 ise, kesim frekansının çok üstünde zayıflatma eğimi yaklaşık ne olur?', '{"choices":["80 dB/dekad","20 dB/dekad","40 dB/dekad","60 dB/dekad","120 dB/dekad"]}', '{"index":0}', 'Her kutup eğimi **20 dB/dekad** artırır: $4 \times 20 = 80$ dB/dekad. İkinci dereceden filtre 40 dB/dekad, 12. dereceden filtre kuramsal olarak 240 dB/dekad verir.', 3, 'Semmlow, Biosignal and Biomedical Image Processing, 1. bölüm · ADC, örnekleme ve veri toplama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-hr', 'tip-elektronigi', 'te-u1', 1, 'fill', 'derived', 'Ardışık R tepeleri arasındaki süre $RR = 0{,}8$ s ise kalp hızı ____ bpm''dir.', '{"blanks":1}', '{"blanks":[["75"]]}', '$HR = 60 / RR = 60 / 0{,}8 = 75$ atım/dakika (bpm).', 2, 'Ders notu, 1-2. hafta · Örnek sistemler: EKG ve PPG zinciri, kalp hızı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-hr-ters', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Kalp hızı 120 bpm olan birinde ardışık R tepeleri arasındaki süre ne kadardır?', '{"choices":["0,5 s","1,2 s","2 s","0,12 s","0,25 s"]}', '{"index":0}', '$RR = 60 / HR = 60 / 120 = 0{,}5$ s.', 2, 'Ders notu, 1-2. hafta · Örnek sistemler: EKG ve PPG zinciri, kalp hızı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-ppg-tanim', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Fotopletismografi (PPG) neyi algılayan bir ölçüm yöntemidir?', '{"choices":["Kan hacmi değişimine bağlı ışık şiddeti değişimini","Kalbin vücut yüzeyinde oluşturduğu potansiyel farkını","Kasların kasılırken ürettiği sesi","Deri sıcaklığındaki yavaş değişimleri","Kandaki glikoz konsantrasyonunu"]}', '{"index":0}', 'PPG, dokudaki **kan hacmi değişimlerine bağlı** iletilen ya da yansıyan ışık şiddetindeki değişimi algılayan optik bir yöntemdir.', 1, 'Ders notu, 1-2. hafta · Örnek sistemler: EKG ve PPG zinciri, kalp hızı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-spo2', 'tip-elektronigi', 'te-u1', 1, 'fill', 'derived', 'Pulse oksimetrenin verdiği SpO₂ değeri, periferik kılcal damar oksijen ____ belirtir.', '{"blanks":1}', '{"blanks":[["satürasyonunu","saturasyonunu","doygunluğunu","doygunlugunu","satürasyonu","doygunluğu"]]}', 'SpO₂, periferik kılcal damar **oksijen satürasyonudur** (doygunluğu).', 1, 'Ders notu, 1-2. hafta · Örnek sistemler: EKG ve PPG zinciri, kalp hızı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-artefakt', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Ders notunda gürültü ile artefakt arasındaki fark nasıl verilir?', '{"choices":["Artefakt, hedef süreçten kaynaklanmayan bozucu bileşendir","Gürültü ve artefakt aynı kavramın iki farklı adıdır","Artefakt yalnızca ADC''de oluşan kuantalama hatasıdır","Gürültü yalnızca hastanın hareketinden doğan bozulmadır","Artefakt ölçülmek istenen fizyolojik sinyalin kendisidir"]}', '{"index":0}', 'Notta **gürültü ≠ artefakt** yazılır. Gürültü ölçüm sistemine eklenen istenmeyen rastlantısal ya da elektriksel bileşendir; artefakt ise hedef süreçten kaynaklanmayan ama kayıtta görülen bozucu bileşendir (ör. hareket artefaktı).', 2, 'Ders notu, 1-2. hafta · Gürültü, artefakt ve sinyal-gürültü oranı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-zorluk', 'tip-elektronigi', 'te-u1', 1, 'tf', 'derived', 'Ders notuna göre biyomedikal sinyaller çoğu zaman düşük genlikli ve değişkendir; fizyolojik, çevresel ve elektronik bozucu etkilerle birlikte kaydedilir.', '{}', '{"value":true}', 'Doğru. Sistemin görevi hedef fizyolojik bilgiyi bu bozucu etkiler altında **güvenilir biçimde** elde etmektir.', 1, 'Ders notu, 1-2. hafta · Gürültü, artefakt ve sinyal-gürültü oranı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-k-snr', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Sinyalin RMS değeri gürültünün RMS değerinin 10 katıysa sinyal-gürültü oranı kaç dB''dir?', '{"choices":["20 dB","10 dB","3 dB","40 dB","100 dB"]}', '{"index":0}', '$SNR = 20 \log_{10}(10) = 20$ dB. 0 dB sinyal ile gürültünün eşit olduğu, −20 dB sinyalin gürültünün onda biri olduğu durumdur.', 2, 'Semmlow, Biosignal and Biomedical Image Processing, 1. bölüm · Gürültü, artefakt ve sinyal-gürültü oranı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-k-johnson', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Bir direncin ısıl (Johnson) gürültü gerilimi $V_J = \sqrt{4kTRB}$ ile verilir. Sistemin bant genişliği 4 katına çıkarsa gürültü gerilimi ne olur?', '{"choices":["2 katına çıkar","4 katına çıkar","Değişmez","Yarıya iner","16 katına çıkar"]}', '{"index":0}', 'Gürültü gerilimi bant genişliğinin karekökü ile orantılıdır: $\sqrt{4} = 2$. Bu yüzden ölçüm sisteminin bant genişliğini gereğinden geniş tutmak gürültüyü artırır.', 3, 'Semmlow, Biosignal and Biomedical Image Processing, 1. bölüm · Gürültü, artefakt ve sinyal-gürültü oranı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-k-beyaz', 'tip-elektronigi', 'te-u1', 1, 'tf', 'derived', 'Isıl gürültü ve saçma (shot) gürültüsü enerjisi bütün frekanslara yayılmış beyaz gürültü özelliği gösterir.', '{}', '{"value":true}', 'Doğru. Her iki elektronik gürültü de DC''den çok yüksek frekanslara kadar yayılır; bu yüzden gürültü değeri ancak bant genişliği belirtilince hesaplanabilir (ya da V/√Hz gibi göreli birimle verilir).', 2, 'Semmlow, Biosignal and Biomedical Image Processing, 1. bölüm · Gürültü, artefakt ve sinyal-gürültü oranı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-guvenlik', 'tip-elektronigi', 'te-u1', 1, 'mcq', 'derived', 'Ders notuna göre tıbbi elektronik sistemlerde elektriksel güvenliğin neden daha kritik olduğu sorusuna hangisi cevap olamaz?', '{"choices":["Ölçüm sistemi hasta ile elektriksel temas kurabilir","Biyopotansiyel ölçümünde elektrotlar doğrudan vücuda bağlanır","Arıza ve kaçak akım durumları tasarımda dikkate alınmalıdır","Tıbbi cihazlar yalnızca pil ile çalıştığı için risk yoktur","Küçük sinyaller ölçülürken güvenlikten ödün verilemez"]}', '{"index":3}', 'Not; elektriksel temas, vücuda bağlı elektrotlar, küçük sinyaller ve **arıza/kaçak akım** durumlarını sayar. Cihazların yalnızca pille çalıştığı ve riskin olmadığı iddiası notta yoktur.', 1, 'Ders notu, 1-2. hafta · Hasta güvenliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u1-dort-soru', 'tip-elektronigi', 'te-u1', 1, 'tf', 'derived', 'Ders notunun özetine göre her cihazda dönülecek temel sorular şunlardır: ne ölçüyoruz, nasıl algılıyoruz, nasıl işliyoruz ve bunu nasıl güvenli biçimde gerçekleştiriyoruz.', '{}', '{"value":true}', 'Doğru. Dönem boyunca farklı cihazlar bu dört soru üzerinden incelenir.', 1, 'Ders notu, 1-2. hafta · Hasta güvenliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-ekg-ad', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Ders notuna göre "elektrokardiyografi" ile "elektrokardiyogram" arasındaki fark hangisidir?', '{"choices":["Biri kayıt yöntemi, diğeri elde edilen grafiktir","Biri kalbin, diğeri beynin kaydıdır","Biri yüzey, diğeri iğne elektrotla yapılır","Biri analog, diğeri sayısal cihazdır","İkisi aynı şeyi anlatan eş anlamlı terimlerdir"]}', '{"index":0}', 'Kalpteki elektriksel değişimleri kaydetme **yöntemine** elektrokardiyografi, yazılı ya da sayısal ortamda kaydedilen **grafiğe** elektrokardiyogram denir.', 1, 'Ders notu, 3. hafta · EKG''nin tanımı ve Einthoven üçgeni', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-einthoven', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Einthoven üçgeni hangi üç noktaya bağlanan elektrotlarla oluşur?', '{"choices":["Sağ kol, sol kol ve sol bacak","Sağ kol, sağ bacak ve göğüs","Alın, sol kol ve sağ bacak","Sol kol, sağ bacak ve sırt","Göğüs, sırt ve sol bacak"]}', '{"index":0}', 'Elektrotlar **sağ kol, sol kol ve sol bacağa** bağlanır; ortasında kalbin bulunduğu üçgene Einthoven üçgeni denir. Herhangi iki elektrot standart bipolar derivasyonu verir.', 1, 'Ders notu, 3. hafta · EKG''nin tanımı ve Einthoven üçgeni', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-sa', 'tip-elektronigi', 'te-u2', 2, 'fill', 'derived', 'Kalbe yayılan ve EKG''de kaydedilen uyarı ____ düğümden başlar.', '{"blanks":1}', '{"blanks":[["sinoatriyal","SA","sinoatrial","sinüs"]]}', 'Uyarı **sinoatriyal (SA) düğümden** başlar, kalbe yayılır ve vücut üzerinde elektriksel bir değişim yaratır.', 1, 'Ders notu, 3. hafta · EKG''nin tanımı ve Einthoven üçgeni', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-ekg-sure', 'tip-elektronigi', 'te-u2', 2, 'tf', 'derived', 'Ders notuna göre bir EKG çekimi ortalama 5-10 dakika sürer.', '{}', '{"value":true}', 'Doğru. Standart klinik EKG kısa süreli bir kayıttır; uzun süreli kayıt için Holter kullanılır.', 1, 'Ders notu, 3. hafta · EKG''nin tanımı ve Einthoven üçgeni', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-holter', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Günlük yaşam sırasında taşınabilir bir kayıt ünitesiyle uzun süreli EKG alınmasını sağlayan sistem hangisidir?', '{"choices":["Holter EKG","Standart klinik EKG","Eforlu EKG","10–20 sistemi","İğne EMG"]}', '{"index":0}', '**Holter EKG** taşınabilir bir kayıt ünitesiyle günlük yaşam sırasında uzun süreli kayıt alır.', 1, 'Ders notu, 3. hafta · Standart, Holter ve kablosuz EKG', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-kablosuz', 'tip-elektronigi', 'te-u2', 2, 'tf', 'derived', 'Standart, Holter ve kablosuz EKG arasındaki fark ölçülen fizyolojik kaynaktadır.', '{}', '{"value":false}', 'Yanlış. Notun vurgusu: fizyolojik kaynak **değişmedi**; ölçüm sisteminin kullanım biçimi ve elektronik mimarisi değişti.', 2, 'Ders notu, 3. hafta · Standart, Holter ve kablosuz EKG', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-ekg-kullanim', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Ders notunda EKG''nin kullanım alanları arasında hangisi sayılmaz?', '{"choices":["Ritim ve iletim bozukluklarının belirlenmesi","Kalp pilinin işlevlerinin değerlendirilmesi","Elektrolit dengesizliğinin etkilerinin görülmesi","Epileptik nöbet odağının belirlenmesi","İnfarktüs tanısı konulması"]}', '{"index":3}', 'EKG kalbin elektriksel aktivitesini kaydeder; ritim bozukluğu, infarktüs, kalp pili ve elektrolit (özellikle potasyum) etkileri bunlar arasındadır. Epilepsi **EEG** ile incelenir.', 1, 'Ders notu, 3. hafta · EKG''nin klinik kullanım alanları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-potasyum', 'tip-elektronigi', 'te-u2', 2, 'fill', 'derived', 'Ders notuna göre EKG''de etkisi görülebilen elektrolit dengesizliklerinin başında serum ____ eksikliği ya da fazlalığı gelir.', '{"blanks":1}', '{"blanks":[["potasyum","K"]]}', 'Not özellikle **potasyum** eksikliği ya da fazlalığını anar.', 2, 'Ders notu, 3. hafta · EKG''nin klinik kullanım alanları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-p', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'EKG''deki P dalgası neyi temsil eder?', '{"choices":["Uyarının atriyumlara geçişini","Ventriküllerin depolarizasyonunu","His demetinin iletim zamanını","Ventriküllerin repolarizasyonunu","İki kalp atımı arasındaki süreyi"]}', '{"index":0}', 'P dalgası (atriyal kompleks), SA düğümünden çıkan uyarının **atriyumlara geçişini** temsil eder ve yaklaşık 0,1 s sürer.', 1, 'Ders notu, 3. hafta · EKG dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-pr', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Ders notuna göre normal bir insanda P-R aralığı ortalama ne kadar sürer?', '{"choices":["0,13–0,16 s","0,08 s","0,4 s","0,8 s","1,2–1,6 s"]}', '{"index":0}', 'P-R aralığı P''nin başından R''nin başına kadardır, His demetinin iletim zamanını temsil eder ve ortalama **0,13–0,16 s** sürer. 0,08 s QRS''nin, 0,4 s QRST''nin süresidir.', 2, 'Ders notu, 3. hafta · EKG dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-qrs', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'QRS kompleksi neyi temsil eder ve yaklaşık ne kadar sürer?', '{"choices":["Ventriküllerin depolarizasyonu, yaklaşık 0,08 s","Atriyumların depolarizasyonu, yaklaşık 0,1 s","His demetindeki iletim, yaklaşık 0,16 s","Ventriküllerin depolarizasyonu, yaklaşık 0,4 s","Bir kalp atımının tamamı, yaklaşık 0,8 s"]}', '{"index":0}', 'QRS **ventriküllerin depolarize olmasını** temsil eder ve yaklaşık **0,08 s** sürer; T dalgasıyla birlikte QRST yaklaşık 0,4 s''dir.', 2, 'Ders notu, 3. hafta · EKG dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-qrst', 'tip-elektronigi', 'te-u2', 2, 'tf', 'derived', 'Ders notuna göre QRS kompleksi ile arkasından gelen T dalgasının birlikte süresi (QRST) ortalama 0,4 s kadardır.', '{}', '{"value":true}', 'Doğru. QRS yaklaşık 0,08 s, QRST ise ortalama 0,4 s''dir.', 2, 'Ders notu, 3. hafta · EKG dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-bpm', 'tip-elektronigi', 'te-u2', 2, 'tf', 'derived', 'Ardışık iki QRS kompleksi arasındaki süre kalbin bir atımı için geçen süredir ve dakikadaki atım sayısı buradan hesaplanabilir.', '{}', '{"value":true}', 'Doğru. R tepeleri arasındaki süreden (RR) kalp hızı ve kalp hızı değişimi hesaplanır.', 1, 'Ders notu, 3. hafta · EKG dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-k-pr-uzun', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Subasi''ye göre PR aralığının normalden uzun olması neye işaret edebilir?', '{"choices":["Uyarının atriyum ve AV düğümden geçişinin yavaşladığına","Uyarının bağlantı dokusundan başladığına","Ventriküllerin normalden hızlı depolarize olduğuna","Kas gürültüsünün kayda karıştığına","Kalp hızının normalden yüksek olduğuna"]}', '{"index":0}', 'PR aralığı atriyal kasılmanın başlangıcından ventriküler kasılmanın başlangıcına kadardır (normalde yaklaşık 0,16 s). Kalp dokusu hasarlıysa depolarizasyon dalgasının **atriyum ve AV düğümden geçmesi daha uzun sürer** ve PR uzar; kısa PR ise uyarının bağlantı dokusundan geldiğini gösterebilir.', 3, 'Subasi, Practical Guide for Biomedical Signals Analysis, 2. bölüm · EKG dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-gurultu-kaynak', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Ders notunda sayılan EKG gürültü kaynakları arasında hangisi yoktur?', '{"choices":["Elektrik hattı paraziti","Solunumun neden olduğu taban çizgisi kayması","Elektrot hareketinden doğan artefakt","Kalbin SA düğümünden çıkan uyarı","Elektrocerrahi gürültüsü"]}', '{"index":3}', 'SA düğümünden çıkan uyarı ölçülmek istenen **sinyalin kendisidir**. Hat paraziti, cihaz gürültüsü, deri/elektrot empedans değişimi, hareket artefaktı, solunum kayması ve elektrocerrahi gürültüsü notta sayılan kaynaklardır.', 2, 'Ders notu, 3. hafta · EKG gürültüsü, ön işleme ve otomatik analiz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-bgf', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Ders notunda (Begg ve diğerleri, 2008) EKG filtrelemesi için verilen tek bant geçiren filtrenin geçiş bandı hangisidir?', '{"choices":["10–25 Hz","0,05–150 Hz","0,5–4 Hz","50–150 Hz","10–350 Hz"]}', '{"index":0}', 'Not, QRS tespiti gibi işler için **10 ila 25 Hz** geçiş bandına sahip tek bir bant geçiren filtreyi anar.', 2, 'Ders notu, 3. hafta · EKG gürültüsü, ön işleme ve otomatik analiz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-cad', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'EKG tabanlı bilgisayar destekli tanı (CAD) sistemleri hangi iki işlevsel bölümden oluşur?', '{"choices":["Özellik çıkarma ve örüntü tanıma","Kuvvetlendirme ve filtreleme","Örnekleme ve kuantalama","Elektrot ve kablo","Kalibrasyon ve doğrulama"]}', '{"index":0}', 'EKG tabanlı CAD sistemleri **özellik çıkarma** ve **örüntü tanıma** bölümlerinden oluşur.', 2, 'Ders notu, 3. hafta · EKG gürültüsü, ön işleme ve otomatik analiz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-hrv', 'tip-elektronigi', 'te-u2', 2, 'tf', 'derived', 'R tepeleri tespit edildikten sonra hesaplanan RR aralıklarından kalp hızı değişkenliği (HRV) özellikleri çıkarılıp sınıflandırmada kullanılabilir.', '{}', '{"value":true}', 'Doğru. Notta anlatılan IoT tabanlı aritmi sisteminde HRV özellikleri sınıflandırılır ve anormal durumda uyarı gönderilir.', 2, 'Ders notu, 3. hafta · EKG gürültüsü, ön işleme ve otomatik analiz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-mitbih', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Ders notuna göre MIT-BIH Aritmi Veritabanı neyi içerir?', '{"choices":["47 denekten alınmış 48 adet yarım saatlik 2 kanallı EKG kaydı","32 Holter kaydından alınmış 75 adet 30 dakikalık EKG sinyali","Uyku apnesi hastalarından alınmış gece boyu süren EEG kayıtları","Protez kontrolü için yüzey EMG kayıtları","Fetal EKG kayıtları ve doğum bilgileri"]}', '{"index":0}', 'MIT-BIH Aritmi Veritabanı, 1975-1979 arasında **47 denekten** alınmış 2 kanallı ambulatuvar kayıtların **48 adet yarım saatlik** kesitini içerir. 32 Holter kaydından 75 sinyal ikinci örnekteki (INCART) veritabanıdır.', 2, 'Ders notu, 3. hafta · Açık biyosinyal veritabanları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-veritabani-eeg', 'tip-elektronigi', 'te-u2', 2, 'tf', 'derived', 'Ders notundaki örneklere göre EEG sinyalleri epileptik nöbet tespiti, beyin-bilgisayar arayüzü, uyku analizi ve duygu tanıma gibi çalışmalarda kullanılır.', '{}', '{"value":true}', 'Doğru. Notta bu uygulamaların her biri için açık bir veritabanı örneği verilir.', 1, 'Ders notu, 3. hafta · Açık biyosinyal veritabanları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-eeg-bilgi', 'tip-elektronigi', 'te-u2', 2, 'tf', 'derived', 'Ders notuna göre EEG, beynin yapısal özelliklerinden çok fonksiyonel durumu hakkında bilgi verir.', '{}', '{"value":true}', 'Doğru. EEG beynin **fonksiyonel** durumunu yansıtır; yapı için görüntüleme yöntemleri kullanılır.', 1, 'Ders notu, 3. hafta · EEG''nin tanımı, kullanımı ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-eeg-aralik', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', '3. hafta notuna göre EEG potansiyel dalgalanmalarının frekansı ve genliği hangi aralıklarda değişir?', '{"choices":["0,5–70 Hz ve 5–400 µV","0,05–150 Hz ve 0,5–4 mV","10–500 Hz ve 50 µV–5 mV","8–13 Hz ve 2–10 µV","0,01–15 Hz ve 1–10 mV"]}', '{"index":0}', '3. hafta notu EEG için **0,5–70 Hz** ve **5–400 µV** verir. (1-2. hafta notundaki özet tabloda tipik değer `10–100 µV ve `0,5–100 Hz''dir.)', 2, 'Ders notu, 3. hafta · EEG''nin tanımı, kullanımı ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-eeg-empedans', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Ders notuna göre EEG kaydeden cihazın giriş empedansının yüksek olması neden gereklidir?', '{"choices":["Kafatası iyi bir iletken olmadığı için","EEG genliği volt mertebesinde olduğu için","Elektrotlar iğne tipinde olduğu için","EEG yalnızca uykuda kaydedildiği için","Cihaz kablosuz çalıştığı için"]}', '{"index":0}', 'Kafatası iyi bir iletken değildir ve EEG çok küçüktür; bu yüzden aracın **giriş empedansı yüksek** olmalı, çevre ve vücut kaynaklı gürültüler de filtrelenmelidir.', 2, 'Ders notu, 3. hafta · EEG''nin tanımı, kullanımı ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-agagcl', 'tip-elektronigi', 'te-u2', 2, 'fill', 'derived', 'Ders notuna göre EEG''de elektrot malzemesi olarak ____ tercih edilir.', '{"blanks":1}', '{"blanks":[["Ag-AgCl","AgAgCl","Ag/AgCl","gümüş-gümüş klorür","gümüş klorür"]]}', 'EEG elektrotlarında **Ag-AgCl** (gümüş-gümüş klorür) tercih edilir.', 1, 'Ders notu, 3. hafta · EEG''nin tanımı, kullanımı ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-hacim', 'tip-elektronigi', 'te-u2', 2, 'tf', 'derived', 'Hacim iletkenliği nedeniyle kaydedilen EEG, beynin geniş bölgelerindeki elektriksel aktivitenin toplamıdır.', '{}', '{"value":true}', 'Doğru. Tek bir nöron değil, geniş bölgelerin toplam aktivitesi kaydedilir.', 2, 'Ders notu, 3. hafta · EEG''nin tanımı, kullanımı ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-1020', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'EEG''de kullanılan "10–20" sistemi adını nereden alır?', '{"choices":["Elektrot aralıklarının kafa ölçülerinin %10''u ya da %20''si olmasından","Kaydın 10 ile 20 Hz arasındaki dalgaları içermesinden","Başın çevresine 10 ile 20 adet elektrot takılmasından","Kaydın 10 ile 20 dakika sürmesinden","10 µV ile 20 µV arası sinyalleri ölçmesinden"]}', '{"index":0}', 'Nasion, inion ve iki preauricular nokta belirlenir; elektrotlar arası uzaklık bu noktalar arasındaki mesafenin **%10''u ya da %20''si** olarak tanımlanır.', 2, 'Ders notu, 3. hafta · EEG elektrot yerleşimi (10–20 sistemi)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-yerlesim-neden', 'tip-elektronigi', 'te-u2', 2, 'tf', 'derived', 'Bir bölgedeki aktivitenin EEG kaydına katkısı elektroda olan uzaklıkla ters orantılı değiştiği için elektrot yerlerinin standart olması gerekir.', '{}', '{"value":true}', 'Doğru. Bu yüzden kayıtları karşılaştırılabilir kılmak için 10–20 sistemi kabul edilmiştir.', 2, 'Ders notu, 3. hafta · EEG elektrot yerleşimi (10–20 sistemi)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-delta', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Derin uyku ve genel anestezi gibi beynin çok düşük aktivite gösterdiği durumlarda gözlenen, 0,5–4 Hz frekanslı dalga hangisidir?', '{"choices":["Delta","Teta","Alfa","Beta","Gama"]}', '{"index":0}', '**Delta** dalgaları 0,5–4 Hz frekanslı, 20–400 µV genlikli dalgalardır ve derin uykuda görülür.', 1, 'Ders notu, 3. hafta · EEG dalgaları (delta, teta, alfa, beta)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-alfa', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Uyanık, dinlenmiş ve gözleri kapalı bir bireyde sıklıkla gözlenen, sinüsoidale benzeyen 8–13 Hz''lik dalga hangisidir?', '{"choices":["Alfa","Beta","Teta","Delta","Gama"]}', '{"index":0}', '**Alfa** dalgaları 8–13 Hz''dir; dış uyarı yokken ve gözler kapalıyken belirginleşir.', 1, 'Ders notu, 3. hafta · EEG dalgaları (delta, teta, alfa, beta)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-beta', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Ders notuna göre beta dalgaları için hangisi doğrudur?', '{"choices":["13 Hz''den yüksek frekanslıdır ve yoğun zihinsel aktivitede görülür","0,5–4 Hz frekanslıdır ve derin uykuda görülür","4–8 Hz frekanslıdır ve rüyalı uykuda görülür","8–13 Hz frekanslıdır ve gözler kapalıyken görülür","En yüksek genlikli EEG dalgasıdır"]}', '{"index":0}', 'Beta dalgaları **13 Hz''den yüksek** frekanslı, 1–5 µV genliklidir; yoğun zihinsel aktivite, odaklanmış dikkat ve REM uykusunda görülür ve beynin en yüksek aktivite düzeyine karşılık gelir.', 2, 'Ders notu, 3. hafta · EEG dalgaları (delta, teta, alfa, beta)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-teta', 'tip-elektronigi', 'te-u2', 2, 'fill', 'derived', 'Frekansı 4–8 Hz olan, rüyalı uykuda, orta derecede anestezide ve stres altında gözlenen EEG dalgasına ____ dalgası denir.', '{"blanks":1}', '{"blanks":[["teta","theta","θ"]]}', '**Teta (θ)** dalgaları 4–8 Hz frekanslı, 5–100 µV genliklidir.', 2, 'Ders notu, 3. hafta · EEG dalgaları (delta, teta, alfa, beta)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-emg-tanim', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Elektromiyografi (EMG) neyin elektriksel aktivitesini kaydeder?', '{"choices":["İskelet kaslarının","Kalp kasının","Beynin","Gözün","Midenin"]}', '{"index":0}', 'EMG **iskelet kaslarının** elektriksel aktivitesinin gözlenmesi ve kaydedilmesidir.', 1, 'Ders notu, 3. hafta · EMG''nin özellikleri ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-emg-baskin', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', '3. hafta notuna göre EMG sinyalinin baskın enerjisi hangi frekans aralığındadır?', '{"choices":["50–150 Hz","0,5–4 Hz","8–13 Hz","500–5000 Hz","0,05–1 Hz"]}', '{"index":0}', 'Kullanılabilir enerji 0–500 Hz''dedir, **baskın enerji 50–150 Hz** aralığındadır. Genlik 0–10 mV (tepeden tepeye) verilir.', 2, 'Ders notu, 3. hafta · EMG''nin özellikleri ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-emg-yuzey', 'tip-elektronigi', 'te-u2', 2, 'tf', 'derived', 'Yüzey elektrotlarıyla kaydedilen EMG, çok sayıda motor birimin asenkron aktivitesinden doğduğu için ritmik değildir ve rastgele gürültüyü andırır.', '{}', '{"value":true}', 'Doğru. Farklı zaman ve fazlarda çalışan çok sayıda motor birimin toplamı, **ritmik olmayan**, gürültüye benzeyen bir sinyal verir.', 2, 'Ders notu, 3. hafta · EMG''nin özellikleri ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-emg-ozellik', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'Ders notunda EMG sinyalinin genel özelliği nasıl verilir?', '{"choices":["Kompleks, durağan olmayan ve gürültülü","Periyodik, durağan ve gürültüsüz","Sinüsoidal, düşük frekanslı ve durağan","Tek frekanslı, düşük genlikli ve periyodik","Sabit genlikli, durağan ve ritmik"]}', '{"index":0}', 'EMG sinyalleri **kompleks, durağan olmayan (non-stationary) ve gürültülü** sinyallerdir.', 2, 'Ders notu, 3. hafta · EMG''nin özellikleri ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-emg-elektrot', 'tip-elektronigi', 'te-u2', 2, 'fill', 'derived', 'Klinik EMG kayıtlarında yüzey ya da ____ tipi elektrotlar kullanılabilir.', '{"blanks":1}', '{"blanks":[["iğne","igne"]]}', 'EMG''de **yüzey** ya da **iğne** elektrotlar kullanılır; kayıt istemli kas hareketiyle ya da motor sinirin elektriksel uyarılmasıyla alınır.', 1, 'Ders notu, 3. hafta · EMG''nin özellikleri ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-k-emg-ornekleme', 'tip-elektronigi', 'te-u2', 2, 'mcq', 'derived', 'EMG kaydında 10–350 Hz bant geçiren filtre kullanılıyorsa en düşük örnekleme hızı ne olmalıdır?', '{"choices":["700 Hz","350 Hz","175 Hz","360 Hz","3500 Hz"]}', '{"index":0}', 'Nyquist ölçütüne göre örnekleme hızı filtrenin üst kesim frekansının en az iki katı olmalıdır: $2 \times 350 = 700$ Hz. Doğruluk ve çözünürlük için daha yüksek de seçilebilir.', 2, 'Subasi, Practical Guide for Biomedical Signals Analysis, 2. bölüm · EMG''nin özellikleri ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u2-k-yuzey-emg', 'tip-elektronigi', 'te-u2', 2, 'tf', 'derived', 'Subasi''ye göre yüzey EMG elektrotları iğne ve tel elektrotlara göre hastayı daha az rahatsız eder ve genellikle Ag/AgCl''den yapılır.', '{}', '{"value":true}', 'Doğru. İğne elektrotların dezavantajı hastaya verdiği rahatsızlıktır; yüzey (sEMG) elektrotları Ag/AgCl''den, çubuk ya da disk biçiminde yapılır.', 2, 'Subasi, Practical Guide for Biomedical Signals Analysis, 2. bölüm · EMG''nin özellikleri ve kaydı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-akilli-saat', 'tip-elektronigi', 'te-u3', 3, 'tf', 'derived', 'Akıllı saatin optik sensörü nabzı doğrudan ölçmez; dokudaki kan hacmi değişiminin ışıkta yarattığı değişimi algılar ve nabız bu sinyalden çıkarılır.', '{}', '{"value":true}', 'Doğru. Notun açılış örneği budur: **sensörün ölçtüğü şey, bizim bilmek istediğimiz şeyle aynı değildir**. Işık → doku → kan hacmi değişimi → fotodedektör → elektriksel sinyal → işleme → nabız.', 2, 'Ders notu, 4. hafta · Measurand, sensör ve dönüştürücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-sensor-tanim', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Ölçülen büyüklüğe duyarlı olan ve bu büyüklük hakkında bilgi taşıyan bir çıkış oluşturan eleman hangisidir?', '{"choices":["Sensör","Kalibratör","Yükselteç","Analog-sayısal dönüştürücü","Gösterge"]}', '{"index":0}', 'Bu tanım **sensörün** tanımıdır. Dönüştürücü (transducer) ise bir enerji ya da büyüklük biçimini başka bir biçime dönüştüren elemandır.', 1, 'Ders notu, 4. hafta · Measurand, sensör ve dönüştürücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-donusum-kapasitif', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Ders notundaki dönüştürme tablosuna göre deplasman hangi ilkeyle hangi elektriksel büyüklüğe dönüştürülür?', '{"choices":["Kapasitif ilkeyle kapasiteye","Fotoelektrik ilkeyle akıma","Piezoelektrik ilkeyle yüke","Termorezistif ilkeyle dirence","Elektrokimyasal ilkeyle gerilime"]}', '{"index":0}', 'Tabloda deplasman **kapasitif** ilkeyle **kapasite** değişimine dönüşür. Sıcaklık termorezistif ilkeyle dirence, kuvvet piezoelektrik ilkeyle yüke ya da gerilime, ışık fotoelektrik ilkeyle akıma, kimyasal konsantrasyon elektrokimyasal ilkeyle gerilime ya da akıma dönüşür.', 2, 'Ders notu, 4. hafta · Measurand, sensör ve dönüştürücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-donusum-devre', 'tip-elektronigi', 'te-u3', 3, 'tf', 'derived', 'Sensörün dönüşüm ilkesi, sensörden sonra kullanılacak elektronik ölçüm devresini de belirler.', '{}', '{"value":true}', 'Doğru. Örneğin direnç değişimi veren bir sensör için köprü devresi, yük veren bir sensör için yük yükselteci gerekir.', 1, 'Ders notu, 4. hafta · Measurand, sensör ve dönüştürücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-k-elektrot', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Semmlow''a göre ölçüm sistemlerindeki giriş dönüştürücüleri elektriksel olmayan enerjiyi elektronik sinyale çevirir. Bu kuralın istisnası hangisidir?', '{"choices":["Elektrot","Termistör","Fotodedektör","Basınç dönüştürücü","Uzama ölçer"]}', '{"index":0}', '**Elektrot** zaten elektriksel olan enerjiyi **iyonik biçimden elektronik biçime** çevirir. Diğerleri sıcaklık, ışık, basınç ya da deformasyonu elektriksel çıkışa çevirir.', 2, 'Semmlow, Biosignal and Biomedical Image Processing, 1. bölüm · Measurand, sensör ve dönüştürücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-k-risk', 'tip-elektronigi', 'te-u3', 3, 'tf', 'derived', 'Semmlow''a göre dönüştürücü, ölçüm sisteminin bütününün riskini (girişimsellik düzeyini) belirleyen elemandır.', '{}', '{"value":true}', 'Doğru. Örneğin kalp içi basınç kateterle ölçülürse sistem girişimsel olur; bu yüzden dönüştürücü çoğu zaman sistemin en kritik elemanıdır.', 2, 'Semmlow, Biosignal and Biomedical Image Processing, 1. bölüm · Measurand, sensör ve dönüştürücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-dogrusal', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'İdeal doğrusal bir sensörün giriş–çıkış ilişkisi $Y = S X + b$ ile verilir. Burada $b$ neyi gösterir?', '{"choices":["Giriş sıfırken alınan çıkışı","Hassasiyeti","Ölçüm aralığını","Çözünürlüğü","Histerezisi"]}', '{"index":0}', '$S$ hassasiyet, $b$ ise giriş sıfırken alınan **çıkıştır (ofset)**.', 2, 'Ders notu, 4. hafta · Giriş–çıkış karakteristiği, ölçüm aralığı ve hassasiyet', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-hassasiyet', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Ölçüm aralığı 0–200 mmHg olan bir basınç sensörü bu aralıkta 0–20 mV çıkış veriyor. Sensörün hassasiyeti nedir?', '{"choices":["0,1 mV/mmHg","10 mV/mmHg","0,01 mV/mmHg","1 mV/mmHg","20 mV/mmHg"]}', '{"index":0}', 'Hassasiyet çıkıştaki değişimin girişteki değişime oranıdır: $S = 20 \text{ mV} / 200 \text{ mmHg} = 0{,}1$ mV/mmHg.', 2, 'Ders notu, 4. hafta · Giriş–çıkış karakteristiği, ölçüm aralığı ve hassasiyet', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-aralik', 'tip-elektronigi', 'te-u3', 3, 'fill', 'derived', 'Sensörün belirtilen performans sınırları içinde ölçebildiği en küçük ve en büyük giriş değerleri arasındaki bölgeye ölçüm ____ denir.', '{"blanks":1}', '{"blanks":[["aralığı","araligi","aralık","aralik"]]}', 'Bu bölgeye **ölçüm aralığı** (range) denir.', 1, 'Ders notu, 4. hafta · Giriş–çıkış karakteristiği, ölçüm aralığı ve hassasiyet', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-dogruluk-kesinlik', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Aynı büyüklüğün tekrarlanan ölçümleri birbirine çok yakın ama hepsi gerçek değerden uzaksa sistem için ne söylenir?', '{"choices":["Kesinliği yüksek, doğruluğu düşüktür","Doğruluğu yüksek, kesinliği düşüktür","Hem doğruluğu hem kesinliği yüksektir","Hem doğruluğu hem kesinliği düşüktür","Çözünürlüğü yetersizdir"]}', '{"index":0}', 'Kesinlik (precision) ölçümlerin **birbirine** yakınlığıdır; doğruluk (accuracy) **gerçek değere** yakınlıktır. Birbirine yakın ama gerçekten uzak ölçümler: kesinlik yüksek, doğruluk düşük.', 2, 'Ders notu, 4. hafta · Doğruluk, kesinlik, çözünürlük, doğrusallık, histerezis ve drift', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-cozunurluk', 'tip-elektronigi', 'te-u3', 3, 'tf', 'derived', 'Yüksek çözünürlüklü bir ölçüm sistemi her zaman doğru ölçüm yapar.', '{}', '{"value":false}', 'Yanlış. Çözünürlük ayırt edilebilen **en küçük değişimdir**; notun vurgusuyla yüksek çözünürlük ölçümün mutlaka doğru olduğu anlamına gelmez.', 2, 'Ders notu, 4. hafta · Doğruluk, kesinlik, çözünürlük, doğrusallık, histerezis ve drift', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-histerezis', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Aynı giriş değerinde, girişe artan ya da azalan yönden ulaşılmasına bağlı olarak farklı çıkış alınmasına ne denir?', '{"choices":["Histerezis","Drift","Doğrusallık hatası","Çözünürlük","Ofset"]}', '{"index":0}', 'Bu, **histerezistir**. Drift ise giriş sabitken çıkışın zamanla değişmesidir.', 2, 'Ders notu, 4. hafta · Doğruluk, kesinlik, çözünürlük, doğrusallık, histerezis ve drift', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-drift', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Giriş büyüklüğü sabitken sensör çıkışının zamanla değişmesi (drift) için ders notunda sayılan nedenler arasında hangisi yoktur?', '{"choices":["Ölçülen büyüklüğün artması","Sıcaklık","Sensörün yaşlanması","Elektronik bileşenler","Çevresel koşullar"]}', '{"index":0}', 'Drift tanım gereği **giriş sabitken** oluşur; ölçülen büyüklüğün artması drift değil gerçek bir değişimdir. Not sıcaklık, yaşlanma, elektronik bileşenler ve çevresel koşulları sayar.', 2, 'Ders notu, 4. hafta · Doğruluk, kesinlik, çözünürlük, doğrusallık, histerezis ve drift', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-drift-onem', 'tip-elektronigi', 'te-u3', 3, 'tf', 'derived', 'Ders notuna göre drift, uzun süreli hasta izleme ve giyilebilir sistemlerde önemli bir hata kaynağıdır.', '{}', '{"value":true}', 'Doğru. Uzun kayıtlarda çıkıştaki yavaş kayma fizyolojik bir değişim gibi görünebilir.', 1, 'Ders notu, 4. hafta · Doğruluk, kesinlik, çözünürlük, doğrusallık, histerezis ve drift', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-dogrusallik', 'tip-elektronigi', 'te-u3', 3, 'fill', 'derived', 'Gerçek sensör karakteristiğinin ideal doğrudan sapması ____ hatası oluşturur.', '{"blanks":1}', '{"blanks":[["doğrusallık","dogrusallik","doğrusalsızlık","lineerlik"]]}', 'Bu sapma **doğrusallık** (linearity) hatasıdır.', 1, 'Ders notu, 4. hafta · Doğruluk, kesinlik, çözünürlük, doğrusallık, histerezis ve drift', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-kalibrasyon-tanim', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Kalibrasyon nedir?', '{"choices":["Sistem çıkışı ile bilinen referans değerler arasındaki ilişkinin belirlenmesi","Sensörün ayırt edebildiği en küçük giriş değişiminin bulunması","Sinyaldeki gürültünün analog bir filtreyle olabildiğince azaltılması","Analog sinyalin sayısal veriye çevrilmesi","Sensörün hastaya güvenli biçimde bağlanması"]}', '{"index":0}', 'Kalibrasyon, ölçüm sisteminin **çıkışı ile bilinen referans değerler** arasındaki ilişkinin belirlenmesidir.', 1, 'Ders notu, 4. hafta · Kalibrasyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-kalibrasyon-egim', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Bir basınç sensörü 0 mmHg''de 0,20 V, 50 mmHg''de 0,70 V, 100 mmHg''de 1,20 V, 150 mmHg''de 1,70 V veriyor. Sensörün hassasiyeti ve ofseti nedir?', '{"choices":["0,01 V/mmHg ve 0,20 V","0,1 V/mmHg ve 0,20 V","0,01 V/mmHg ve 0 V","0,0113 V/mmHg ve 0 V","0,5 V/mmHg ve 0,20 V"]}', '{"index":0}', 'Her 50 mmHg''de çıkış 0,50 V artıyor: $S = 0{,}50 / 50 = 0{,}01$ V/mmHg. Giriş sıfırken çıkış $b = 0{,}20$ V. Yani $V = 0{,}01 P + 0{,}20$.', 3, 'Ders notu, 4. hafta · Kalibrasyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-kalibrasyon-ters', 'tip-elektronigi', 'te-u3', 3, 'fill', 'derived', 'Kalibrasyon bağıntısı $V = 0{,}01 P + 0{,}20$ (V, mmHg) olan sensör 1,00 V gösteriyorsa ölçülen basınç ____ mmHg''dir.', '{"blanks":1}', '{"blanks":[["80"]]}', '$P = (V - b) / S = (1{,}00 - 0{,}20) / 0{,}01 = 80$ mmHg.', 3, 'Ders notu, 4. hafta · Kalibrasyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-dinamik', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Ders notunda sensörlerin temel dinamik özellikleri arasında hangisi sayılmaz?', '{"choices":["Ölçüm aralığı","Cevap süresi","Zaman sabiti","Bant genişliği","Geçici rejim davranışı"]}', '{"index":0}', 'Ölçüm aralığı **statik** bir özelliktir. Dinamik özellikler cevap süresi, zaman sabiti, bant genişliği ve geçici rejim davranışıdır.', 2, 'Ders notu, 4. hafta · Sensörlerin dinamik özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-dinamik-hiz', 'tip-elektronigi', 'te-u3', 3, 'tf', 'derived', 'Sensörün dinamik cevabı, ölçülen fizyolojik olaydan yeterince hızlı olmalıdır.', '{}', '{"value":true}', 'Doğru. Kalp atımı, solunum ve kan basıncı zamanla değişir; yavaş bir sensör bu değişimleri bozarak kaydeder.', 1, 'Ders notu, 4. hafta · Sensörlerin dinamik özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-rezistif-ornek', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Aşağıdakilerden hangisi rezistif bir sensör değildir?', '{"choices":["Piezoelektrik kristal","Strain gauge","RTD","Termistör","Potansiyometrik sensör"]}', '{"index":0}', 'Piezoelektrik kristal kuvvet altında **elektriksel yük** üretir. Strain gauge, RTD, termistör, potansiyometre ve piezorezistif sensörler direnç değişimi verir.', 1, 'Ders notu, 4. hafta · Rezistif sensörler, strain gauge ve Wheatstone köprüsü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-strain', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Strain gauge hangi değişimi direnç değişimine çevirir?', '{"choices":["Mekanik deformasyonu","Işık şiddetini","Kimyasal konsantrasyonu","Manyetik alanı","Ses basıncının frekansını"]}', '{"index":0}', 'Strain gauge **mekanik deformasyon** sonucunda direnci değişen bir sensördür; bağıl direnç değişimi uzamayla orantılıdır: $\Delta R / R = GF \cdot \varepsilon$.', 2, 'Ders notu, 4. hafta · Rezistif sensörler, strain gauge ve Wheatstone köprüsü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-strain-hesap', 'tip-elektronigi', 'te-u3', 3, 'fill', 'derived', 'Ayar faktörü $GF = 2$ olan 120 Ω''luk bir strain gauge $\varepsilon = 0{,}001$ uzamaya uğruyor. Direnç değişimi ____ Ω olur.', '{"blanks":1}', '{"blanks":[["0,24","0.24"]]}', '$\Delta R = GF \cdot \varepsilon \cdot R = 2 \cdot 0{,}001 \cdot 120 = 0{,}24$ Ω. Bu kadar küçük değişimler Wheatstone köprüsüyle ölçülür.', 3, 'Ders notu, 4. hafta · Rezistif sensörler, strain gauge ve Wheatstone köprüsü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-wheatstone', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Wheatstone köprüsünün sensör ölçümündeki avantajları arasında hangisi yoktur?', '{"choices":["Sensörün ölçüm aralığını genişletmesi","Küçük direnç değişimlerini ölçebilmesi","Diferansiyel çıkış vermesi","Sıcaklık etkilerini azaltabilmesi","Direnç değişimini gerilime çevirmesi"]}', '{"index":0}', 'Köprü küçük direnç değişimlerini **gerilim değişimine** çevirir, diferansiyel çıkış verir ve sıcaklık etkilerini azaltabilir. Sensörün ölçüm aralığını değiştirmez.', 2, 'Ders notu, 4. hafta · Rezistif sensörler, strain gauge ve Wheatstone köprüsü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-wheatstone-denge', 'tip-elektronigi', 'te-u3', 3, 'tf', 'derived', 'Dengeli bir Wheatstone köprüsünde sensör direnci değiştiğinde denge bozulur ve köprü çıkışında bir gerilim oluşur.', '{}', '{"value":true}', 'Doğru. Dengede çıkış sıfırdır ($R_1 / R_2 = R_3 / R_4$); sensör direncindeki değişim dengeyi bozar.', 2, 'Ders notu, 4. hafta · Rezistif sensörler, strain gauge ve Wheatstone köprüsü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-piezorezistif', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Piezorezistif basınç sensöründe basınç önce neye dönüşür?', '{"choices":["Diyafram üzerinde mekanik deformasyona","Doğrudan elektriksel yüke","Işık şiddetindeki değişime","Sıcaklık artışına","Kapasite değişimine"]}', '{"index":0}', 'Basınç bir **diyaframda deformasyon** yaratır; diyafram üzerindeki piezorezistif elemanların direnç değişiminden basınç bulunur. Kan basıncı ve kateter tabanlı ölçüm tipik uygulamalardır.', 2, 'Ders notu, 4. hafta · Rezistif sensörler, strain gauge ve Wheatstone köprüsü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-ntc', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'NTC tipi bir termistörde sıcaklık arttıkça direnç nasıl değişir?', '{"choices":["Azalır","Artar","Değişmez","Önce artar sonra azalır","Sıfıra düşer"]}', '{"index":0}', 'NTC (negatif sıcaklık katsayılı) termistörde sıcaklık arttıkça direnç **azalır**; PTC''de artar.', 1, 'Ders notu, 4. hafta · Sıcaklık sensörleri: termistör ve RTD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-rtd-termistor', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Ders notuna göre RTD ile termistör karşılaştırıldığında hangisi doğrudur?', '{"choices":["RTD kararlılık ve doğrulukta, termistör hassasiyette öne çıkar","Termistör daha doğrusal, RTD daha hassastır","İkisi de yük üreten aktif sensördür","RTD yarı iletken, termistör metal bir elemandır","Termistör yalnızca çok yüksek sıcaklıkta kullanılır"]}', '{"index":0}', 'RTD metallerin direnç değişimine dayanır; **iyi kararlılık ve doğruluk** sunar. Termistör **yüksek hassasiyetlidir** ama karakteristiği daha belirgin biçimde doğrusal değildir.', 2, 'Ders notu, 4. hafta · Sıcaklık sensörleri: termistör ve RTD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-piezo-statik', 'tip-elektronigi', 'te-u3', 3, 'tf', 'derived', 'Piezoelektrik sensörler, statik büyüklüklerin uzun süreli ölçümünde özellikle uygundur.', '{}', '{"value":false}', 'Yanlış. Piezoelektrik sensörler **dinamik** mekanik olaylara uygundur; statik büyüklüklerin uzun süreli ölçümünde uygunlukları sınırlıdır.', 2, 'Ders notu, 4. hafta · Piezoelektrik sensörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-piezo-uygulama', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Ders notunda piezoelektrik sensörlerin uygulamaları arasında hangisi sayılmaz?', '{"choices":["Vücut sıcaklığı ölçümü","Kalp sesleri","Titreşim","Ultrasonik dönüştürücüler","Solunum hareketleri"]}', '{"index":0}', 'Vücut sıcaklığı termistör ya da RTD ile ölçülür. Piezoelektrik sensörler kalp sesleri, titreşim, solunum hareketleri, ultrason ve kuvvet/basınç **değişimleri** için kullanılır.', 1, 'Ders notu, 4. hafta · Piezoelektrik sensörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-kapasite', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Paralel plakalı bir kapasitede $C = \varepsilon A / d$ dir. Plakalar arası uzaklık $d$ yarıya inerse kapasite ne olur?', '{"choices":["İki katına çıkar","Yarıya iner","Değişmez","Dört katına çıkar","Dörtte birine iner"]}', '{"index":0}', 'Kapasite uzaklıkla ters orantılıdır: $d \to d/2$ iken $C \to 2C$. Kapasitif sensörler deplasmanı bu ilişkiyle kapasite değişimine çevirir.', 2, 'Ders notu, 4. hafta · Kapasitif sensörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-oksimetri', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Pulse oksimetri hangi ilkeye dayanır?', '{"choices":["Oksi ve deoksihemoglobinin farklı dalga boylarını farklı soğurmasına","Kandaki oksijen moleküllerinin tek tek sayılmasına","Kalbin vücut yüzeyinde oluşturduğu potansiyel farkına","Deri sıcaklığının oksijenle değişmesine","Kan basıncının diyaframda yarattığı deformasyona"]}', '{"index":0}', '**Oksihemoglobin ve deoksihemoglobin** kırmızı ve kızılötesi ışığı farklı miktarda soğurur; iki dalga boyundaki pulsatif ve DC bileşenlerden SpO₂ **tahmin edilir**. Oksimetre oksijen moleküllerini saymaz.', 2, 'Ders notu, 4. hafta · Optik sensörler: PPG ve pulse oksimetre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-iki-dalga', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Pulse oksimetrede genellikle hangi iki ışık kullanılır?', '{"choices":["Kırmızı ve kızılötesi","Mavi ve yeşil","Morötesi ve mavi","Yeşil ve sarı","Beyaz ve morötesi"]}', '{"index":0}', 'Pulse oksimetre genellikle **kırmızı ve kızılötesi** ışık kullanır.', 1, 'Ders notu, 4. hafta · Optik sensörler: PPG ve pulse oksimetre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-k-ppg-acdc', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Subasi''ye göre PPG sinyalindeki pulsatif (AC) bileşen neyi yansıtır?', '{"choices":["Her kalp atımında kan hacminin eşzamanlı değişimini","Solunum ve ısı düzenlemesine bağlı yavaş taban çizgisini","Ortam ışığından gelen sabit bileşeni","Fotodedektörün karanlık akımını","Kas kasılmasından gelen elektriksel aktiviteyi"]}', '{"index":0}', 'AC bileşen **her kalp atımıyla kan hacmindeki eşzamanlı değişimdir**; solunum, sempatik sinir sistemi ve ısı düzenlemesine bağlı yavaş değişimler DC taban çizgisindedir.', 2, 'Subasi, Practical Guide for Biomedical Signals Analysis, 2. bölüm · Optik sensörler: PPG ve pulse oksimetre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-k-ppg-dalga', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Subasi''ye göre deri kan akışını izleyen bir PPG için iyi bir ışık kaynağı hangi dalga boyu aralığındadır?', '{"choices":["600–700 nm","200–300 nm","400–450 nm","1500–2000 nm","10–20 µm"]}', '{"index":0}', 'Kitap, deri kan akışı için iyi bir vericinin **600–700 nm** aralığında olduğunu ve en iyi AC sinyalinin parmak ucundan alındığını belirtir.', 3, 'Subasi, Practical Guide for Biomedical Signals Analysis, 2. bölüm · Optik sensörler: PPG ve pulse oksimetre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-k-ppg-jel', 'tip-elektronigi', 'te-u3', 3, 'tf', 'derived', 'PPG, EKG''den farklı olarak çevresel bölgelerden alınabilir ve iyi temas için iletken jel gerektirmez; bu yüzden giyilebilir cihazlarda yaygınlaşmıştır.', '{}', '{"value":true}', 'Doğru. Bu yüzden akıllı saatlerde PPG kullanılır; ancak egzersizde hareket artefaktı PPG''yi ciddi biçimde bozar.', 2, 'Subasi, Practical Guide for Biomedical Signals Analysis, 2. bölüm · Optik sensörler: PPG ve pulse oksimetre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-hata-kaynak', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Ders notunda biyomedikal sensörlerde hata ve bozulma kaynakları arasında hangisi sayılmaz?', '{"choices":["Ölçülen fizyolojik büyüklüğün gerçekten değişmesi","Hareket artefaktı","Ortam ışığı","Elektromanyetik girişim","Bireyler arası fizyolojik farklılıklar"]}', '{"index":0}', 'Notun vurgusu: sensör çıkışındaki değişim **her zaman fizyolojik değişimden kaynaklanmaz**. Hata kaynakları hareket artefaktı, temasın değişmesi, sıcaklık, ortam ışığı, girişim, drift, histerezis, kalibrasyon hatası, elektronik gürültü ve bireyler arası farklardır. Gerçek fizyolojik değişim ise ölçülmek istenen şeydir.', 2, 'Ders notu, 4. hafta · Sensör seçimi, hata kaynakları ve giyilebilir sensörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-secim', 'tip-elektronigi', 'te-u3', 3, 'mcq', 'derived', 'Aşağıdakilerden hangisi ders notunda sensör seçiminde dikkate alınacak özellikler arasında yer almaz?', '{"choices":["Üreticinin reklam bütçesi","Biyouyumluluk","Sterilizasyon gereksinimi","Güç tüketimi","Hasta güvenliği"]}', '{"index":0}', 'Not; aralık, hassasiyet, doğruluk, çözünürlük, doğrusallık, cevap süresi, bant genişliği, drift, boyut, güç, **biyouyumluluk**, güvenlik, sterilizasyon ve uzun süreli kullanımı sayar. Seçim uygulamaya göre yapılır.', 1, 'Ders notu, 4. hafta · Sensör seçimi, hata kaynakları ve giyilebilir sensörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('te-u3-giyilebilir', 'tip-elektronigi', 'te-u3', 3, 'tf', 'derived', 'Giyilebilir ve implante edilebilir sensörlerde düşük güç tüketimi, küçük boyut, kablosuz iletişim, biyouyumluluk ve uzun süreli kararlılık önemlidir.', '{}', '{"value":true}', 'Doğru. Bu sistemler uzun süre vücutta ya da üzerinde, çoğu zaman pille çalışır.', 1, 'Ders notu, 4. hafta · Sensör seçimi, hata kaynakları ve giyilebilir sensörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-tanim', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-tanim';
UPDATE questions SET kavram = 'u1-tanim', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-gelisim';
UPDATE questions SET kavram = 'u1-tanim', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-disiplin';
UPDATE questions SET kavram = 'u1-sinyal', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-sinyal-tanim';
UPDATE questions SET kavram = 'u1-sinyal', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-biosignal';
UPDATE questions SET kavram = 'u1-sinyal', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-kaynak';
UPDATE questions SET kavram = 'u1-sinif', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-sinif-ppg';
UPDATE questions SET kavram = 'u1-sinif', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-sinif-basinc';
UPDATE questions SET kavram = 'u1-sinif', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-biyoelektrik';
UPDATE questions SET kavram = 'u1-sinif', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-sinif-sensor';
UPDATE questions SET kavram = 'u1-genlik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-genlik-eeg';
UPDATE questions SET kavram = 'u1-genlik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-genlik-ekg-frekans';
UPDATE questions SET kavram = 'u1-genlik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-genlik-emg';
UPDATE questions SET kavram = 'u1-genlik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-genlik-tasarim';
UPDATE questions SET kavram = 'u1-measurand', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-measurand-tanim';
UPDATE questions SET kavram = 'u1-measurand', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-measurand-ekg';
UPDATE questions SET kavram = 'u1-measurand', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-measurand-glikoz';
UPDATE questions SET kavram = 'u1-sistem', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-sistem-cevre';
UPDATE questions SET kavram = 'u1-sistem', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-sistem-insan';
UPDATE questions SET kavram = 'u1-sistem', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-sistem-arayuz';
UPDATE questions SET kavram = 'u1-zincir', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-zincir-sira';
UPDATE questions SET kavram = 'u1-zincir', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-elektrot';
UPDATE questions SET kavram = 'u1-zincir', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-sensor-donusturucu';
UPDATE questions SET kavram = 'u1-zincir', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-termistor';
UPDATE questions SET kavram = 'u1-kosullama', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-afe';
UPDATE questions SET kavram = 'u1-kosullama', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-kosullama-temel';
UPDATE questions SET kavram = 'u1-adc', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-daq';
UPDATE questions SET kavram = 'u1-adc', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u1-k-kuantalama';
UPDATE questions SET kavram = 'u1-adc', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u1-k-nyquist';
UPDATE questions SET kavram = 'u1-adc', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u1-k-aliasing';
UPDATE questions SET kavram = 'u1-adc', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u1-k-filtre-egim';
UPDATE questions SET kavram = 'u1-ornek', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-hr';
UPDATE questions SET kavram = 'u1-ornek', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-hr-ters';
UPDATE questions SET kavram = 'u1-ornek', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-ppg-tanim';
UPDATE questions SET kavram = 'u1-ornek', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-spo2';
UPDATE questions SET kavram = 'u1-gurultu', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-artefakt';
UPDATE questions SET kavram = 'u1-gurultu', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-zorluk';
UPDATE questions SET kavram = 'u1-gurultu', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u1-k-snr';
UPDATE questions SET kavram = 'u1-gurultu', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u1-k-johnson';
UPDATE questions SET kavram = 'u1-gurultu', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u1-k-beyaz';
UPDATE questions SET kavram = 'u1-guvenlik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-guvenlik';
UPDATE questions SET kavram = 'u1-guvenlik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u1-dort-soru';
UPDATE questions SET kavram = 'u2-ekg-temel', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-ekg-ad';
UPDATE questions SET kavram = 'u2-ekg-temel', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-einthoven';
UPDATE questions SET kavram = 'u2-ekg-temel', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-sa';
UPDATE questions SET kavram = 'u2-ekg-temel', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-ekg-sure';
UPDATE questions SET kavram = 'u2-ekg-tur', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-holter';
UPDATE questions SET kavram = 'u2-ekg-tur', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-kablosuz';
UPDATE questions SET kavram = 'u2-ekg-kullanim', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-ekg-kullanim';
UPDATE questions SET kavram = 'u2-ekg-kullanim', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-potasyum';
UPDATE questions SET kavram = 'u2-ekg-dalga', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-p';
UPDATE questions SET kavram = 'u2-ekg-dalga', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-pr';
UPDATE questions SET kavram = 'u2-ekg-dalga', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-qrs';
UPDATE questions SET kavram = 'u2-ekg-dalga', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-qrst';
UPDATE questions SET kavram = 'u2-ekg-dalga', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-bpm';
UPDATE questions SET kavram = 'u2-ekg-dalga', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u2-k-pr-uzun';
UPDATE questions SET kavram = 'u2-ekg-isleme', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-gurultu-kaynak';
UPDATE questions SET kavram = 'u2-ekg-isleme', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-bgf';
UPDATE questions SET kavram = 'u2-ekg-isleme', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-cad';
UPDATE questions SET kavram = 'u2-ekg-isleme', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-hrv';
UPDATE questions SET kavram = 'u2-veritabani', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-mitbih';
UPDATE questions SET kavram = 'u2-veritabani', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-veritabani-eeg';
UPDATE questions SET kavram = 'u2-eeg-temel', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-eeg-bilgi';
UPDATE questions SET kavram = 'u2-eeg-temel', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-eeg-aralik';
UPDATE questions SET kavram = 'u2-eeg-temel', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-eeg-empedans';
UPDATE questions SET kavram = 'u2-eeg-temel', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-agagcl';
UPDATE questions SET kavram = 'u2-eeg-temel', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-hacim';
UPDATE questions SET kavram = 'u2-eeg-yerlesim', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-1020';
UPDATE questions SET kavram = 'u2-eeg-yerlesim', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-yerlesim-neden';
UPDATE questions SET kavram = 'u2-eeg-dalga', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-delta';
UPDATE questions SET kavram = 'u2-eeg-dalga', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-alfa';
UPDATE questions SET kavram = 'u2-eeg-dalga', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-beta';
UPDATE questions SET kavram = 'u2-eeg-dalga', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-teta';
UPDATE questions SET kavram = 'u2-emg', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-emg-tanim';
UPDATE questions SET kavram = 'u2-emg', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-emg-baskin';
UPDATE questions SET kavram = 'u2-emg', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-emg-yuzey';
UPDATE questions SET kavram = 'u2-emg', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-emg-ozellik';
UPDATE questions SET kavram = 'u2-emg', yedek = 0, etiketler = 'ders' WHERE id = 'te-u2-emg-elektrot';
UPDATE questions SET kavram = 'u2-emg', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u2-k-emg-ornekleme';
UPDATE questions SET kavram = 'u2-emg', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u2-k-yuzey-emg';
UPDATE questions SET kavram = 'u3-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-akilli-saat';
UPDATE questions SET kavram = 'u3-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-sensor-tanim';
UPDATE questions SET kavram = 'u3-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-donusum-kapasitif';
UPDATE questions SET kavram = 'u3-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-donusum-devre';
UPDATE questions SET kavram = 'u3-donusum', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u3-k-elektrot';
UPDATE questions SET kavram = 'u3-donusum', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u3-k-risk';
UPDATE questions SET kavram = 'u3-statik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-dogrusal';
UPDATE questions SET kavram = 'u3-statik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-hassasiyet';
UPDATE questions SET kavram = 'u3-statik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-aralik';
UPDATE questions SET kavram = 'u3-hata', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-dogruluk-kesinlik';
UPDATE questions SET kavram = 'u3-hata', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-cozunurluk';
UPDATE questions SET kavram = 'u3-hata', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-histerezis';
UPDATE questions SET kavram = 'u3-hata', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-drift';
UPDATE questions SET kavram = 'u3-hata', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-drift-onem';
UPDATE questions SET kavram = 'u3-hata', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-dogrusallik';
UPDATE questions SET kavram = 'u3-kalibrasyon', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-kalibrasyon-tanim';
UPDATE questions SET kavram = 'u3-kalibrasyon', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-kalibrasyon-egim';
UPDATE questions SET kavram = 'u3-kalibrasyon', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-kalibrasyon-ters';
UPDATE questions SET kavram = 'u3-dinamik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-dinamik';
UPDATE questions SET kavram = 'u3-dinamik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-dinamik-hiz';
UPDATE questions SET kavram = 'u3-rezistif', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-rezistif-ornek';
UPDATE questions SET kavram = 'u3-rezistif', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-strain';
UPDATE questions SET kavram = 'u3-rezistif', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-strain-hesap';
UPDATE questions SET kavram = 'u3-rezistif', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-wheatstone';
UPDATE questions SET kavram = 'u3-rezistif', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-wheatstone-denge';
UPDATE questions SET kavram = 'u3-rezistif', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-piezorezistif';
UPDATE questions SET kavram = 'u3-sicaklik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-ntc';
UPDATE questions SET kavram = 'u3-sicaklik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-rtd-termistor';
UPDATE questions SET kavram = 'u3-piezo', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-piezo-statik';
UPDATE questions SET kavram = 'u3-piezo', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-piezo-uygulama';
UPDATE questions SET kavram = 'u3-kapasitif', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-kapasite';
UPDATE questions SET kavram = 'u3-optik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-oksimetri';
UPDATE questions SET kavram = 'u3-optik', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-iki-dalga';
UPDATE questions SET kavram = 'u3-optik', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u3-k-ppg-acdc';
UPDATE questions SET kavram = 'u3-optik', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u3-k-ppg-dalga';
UPDATE questions SET kavram = 'u3-optik', yedek = 0, etiketler = 'kitap' WHERE id = 'te-u3-k-ppg-jel';
UPDATE questions SET kavram = 'u3-secim', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-hata-kaynak';
UPDATE questions SET kavram = 'u3-secim', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-secim';
UPDATE questions SET kavram = 'u3-secim', yedek = 0, etiketler = 'ders' WHERE id = 'te-u3-giyilebilir';
