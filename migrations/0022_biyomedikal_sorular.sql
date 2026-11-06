-- Bu dosya scripts/sorular-sql.ts ile icerik/biyomedikal/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bm-u1', 'biyomedikal', 'Kalp ve Elektrokardiyografi (EKG)', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bm-u2', 'biyomedikal', 'Elektroansefalografi (EEG) ve Uyku', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bm-u3', 'biyomedikal', 'Elektromiyografi (EMG) ve Sinir İletimi', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bm-u4', 'biyomedikal', 'Tıbbi Görüntüleme ve Genomik Veri', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bm-u5', 'biyomedikal', 'Veri ve Zaman Serisi Ön İşleme', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bm-u6', 'biyomedikal', 'Görüntü Ön İşleme', 6, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bm-u7', 'biyomedikal', 'Fourier Dönüşümü', 7, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('bm-u8', 'biyomedikal', 'Dalgacık Dönüşümü', 8, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-terimler', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'Kalbin elektriksel potansiyellerinin vücut yüzeyinden kaydedilmesi işlemine ne ad verilir?', '{"choices":["Elektrokardiyografi","Elektrokardiyogram","Elektroansefalografi","Elektromiyografi","Elektronörografi"]}', '{"index":0}', 'Kaydetme **işlemi** elektrokardiyografi, elde edilen **çizim** elektrokardiyogram (EKG), bu işi yapan cihaz da elektrokardiyografi cihazıdır.', 1, 'Biyomedikal Sinyaller 1 sunumu · EKG, elektrokardiyografi ve elektrokardiyogram', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-cizim', 'biyomedikal', 'bm-u1', 1, 'fill', 'derived', 'Elektrokardiyografi işlemi sonunda elde edilen çizime ____ denir.', '{"blanks":1}', '{"blanks":[["elektrokardiyogram","ekg","ecg"]]}', 'İşlem elektrokardiyografi, sonuçta çıkan çizim **elektrokardiyogram** (EKG) adını alır.', 1, 'Biyomedikal Sinyaller 1 sunumu · EKG, elektrokardiyografi ve elektrokardiyogram', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-elektrot-yer', 'biyomedikal', 'bm-u1', 1, 'tf', 'derived', 'EKG elektrotları belirli kurallara göre kollara, bacaklara ve göğüs duvarına yerleştirilir.', '{}', '{"value":true}', 'Doğru. Kalbin potansiyellerini cihaza aktarmak için elektrotlar ekstremitelere ve göğüs duvarına standart yerlerde konur.', 1, 'Biyomedikal Sinyaller 1 sunumu · EKG, elektrokardiyografi ve elektrokardiyogram', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-sa-yer', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'Kalbin doğal uyarı odağı (pacemaker) olan SA düğümü nerededir?', '{"choices":["Sağ kulakçığın üst kısmında","Sol karıncığın tabanında","Kulakçıklar ile karıncıklar arasında","Karıncıklar arasındaki duvarda","Aortun kalpten çıktığı yerde"]}', '{"index":0}', 'SA (sinoatriyal) düğümü **sağ kulakçığın (atriyumun) üst kısmında** yer alan özelleşmiş elektriksel hücre demetidir.', 1, 'Biyomedikal Sinyaller 1 sunumu · Kalbin ileti sistemi ve SA düğümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-ileti-sira', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'Kalpteki uyarının iletim yolunda aşağıdaki sıralamalardan hangisi doğrudur?', '{"choices":["SA düğümü → AV düğümü → His demeti → demet kolları → Purkinje lifleri","AV düğümü → SA düğümü → His demeti → Purkinje lifleri → demet kolları","SA düğümü → His demeti → AV düğümü → demet kolları → Purkinje lifleri","Purkinje lifleri → demet kolları → His demeti → AV düğümü → SA düğümü"]}', '{"index":0}', 'Uyarı SA düğümünde doğar, kulakçıklardan geçerek **AV düğümüne**, oradan **His demetine**, **demet kollarına** ve **Purkinje liflerine** ulaşır.', 2, 'Biyomedikal Sinyaller 1 sunumu · Kalbin ileti sistemi ve SA düğümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-sa-mss', 'biyomedikal', 'bm-u1', 1, 'tf', 'derived', 'SA düğümünün ürettiği aksiyon potansiyelinin frekansı merkezi sinir sistemi tarafından kontrol edilir.', '{}', '{"value":true}', 'Doğru. SA düğümü uyarıyı kendiliğinden üretir ama hızı merkezi sinir sistemi tarafından ayarlanır.', 2, 'Biyomedikal Sinyaller 1 sunumu · Kalbin ileti sistemi ve SA düğümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-depolarizasyon', 'biyomedikal', 'bm-u1', 1, 'fill', 'derived', 'SA düğümünde kendiliğinden oluşan aksiyon potansiyeli, ____ dalgası halinde bütün kalbe yayılır.', '{"blanks":1}', '{"blanks":[["depolarizasyon"]]}', 'Aksiyon potansiyeli bir **depolarizasyon** dalgası olarak yayılır ve dört odacığın doğru zamanlamayla kasılmasını sağlar.', 2, 'Biyomedikal Sinyaller 1 sunumu · Kalbin ileti sistemi ve SA düğümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-kucuk-dolasim', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'Kanı akciğerlerde oksijenlendiren küçük dolaşımdan kalbin hangi tarafı sorumludur?', '{"choices":["Sağ tarafı","Sol tarafı","Yalnızca sol kulakçık","Yalnızca aort kapağı"]}', '{"index":0}', 'Küçük dolaşıma **kalbin sağ tarafı** adanmıştır: kirli kan sağ kulakçığa gelir, sağ karıncık onu pulmoner artere atar.', 1, 'Biyomedikal Sinyaller 1 sunumu · Küçük ve büyük dolaşım, kapaklar, sistol ve diyastol', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-aort', 'biyomedikal', 'bm-u1', 1, 'tf', 'derived', 'Sol karıncık oksijenden zengin kanı aort damarıyla vücuda gönderir; aort kalpten çıkan en büyük atardamardır.', '{}', '{"value":true}', 'Doğru. Büyük dolaşımda sol karıncık kanı aorta pompalar.', 1, 'Biyomedikal Sinyaller 1 sunumu · Küçük ve büyük dolaşım, kapaklar, sistol ve diyastol', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-mitral', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'Akciğerden dönen oksijenli kan sol kulakçıktan sol karıncığa hangi kapaktan geçer?', '{"choices":["Mitral kapak","Triküspit kapak","Aort kapağı","Pulmoner kapak"]}', '{"index":0}', 'Sol tarafta kulakçık ile karıncık arasında **mitral**, sağ tarafta **triküspit** kapak vardır. Aort ve pulmoner kapaklar karıncıklar ile büyük damarlar arasındadır.', 2, 'Biyomedikal Sinyaller 1 sunumu · Küçük ve büyük dolaşım, kapaklar, sistol ve diyastol', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-sistol', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'Kalp kaslarının, özellikle karıncıkların kasılarak kanı aort ve pulmoner artere pompaladığı evreye ne denir?', '{"choices":["Sistol","Diyastol","Repolarizasyon","Dinlenim"]}', '{"index":0}', 'Kasılma evresi **sistol**, odacıkların gevşeyip kanla dolduğu evre **diyastol**dür.', 1, 'Biyomedikal Sinyaller 1 sunumu · Küçük ve büyük dolaşım, kapaklar, sistol ve diyastol', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-derivasyon-tanim', 'biyomedikal', 'bm-u1', 1, 'fill', 'derived', 'Elektrotlar ile EKG cihazı arasındaki iletken bağlantılara ____ denir.', '{"blanks":1}', '{"blanks":[["derivasyon","derivasyonlar"]]}', 'Sunumdaki tanım: elektrotlar ile cihaz arasındaki iletken bağlantılar **derivasyon**dur (İngilizcesi lead).', 1, 'Biyomedikal Sinyaller 1 sunumu · Einthoven üçgeni ve bipolar derivasyonlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-dii', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'DII bipolar derivasyonu hangi iki ekstremite arasındaki potansiyel farkını ölçer?', '{"choices":["Sağ kol ile sol bacak","Sağ kol ile sol kol","Sol kol ile sol bacak","Sağ bacak ile sol bacak"]}', '{"index":0}', 'DI: sağ kol − sol kol, **DII: sağ kol − sol bacak**, DIII: sol kol − sol bacak. Her birinde ilk yazılan negatif, ikinci yazılan pozitif elektrottur.', 2, 'Biyomedikal Sinyaller 1 sunumu · Einthoven üçgeni ve bipolar derivasyonlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-sag-bacak', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'Standart EKG kaydında sağ bacağa bağlanan elektrodun görevi nedir?', '{"choices":["Toprak elektrodu","DI için pozitif elektrot","aVF için araştırıcı elektrot","V1 göğüs elektrodu"]}', '{"index":0}', 'Sağ bacak her zaman **toprak** olarak kullanılır; derivasyonlar sağ kol, sol kol ve sol bacaktan oluşturulur.', 1, 'Biyomedikal Sinyaller 1 sunumu · Einthoven üçgeni ve bipolar derivasyonlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-einthoven', 'biyomedikal', 'bm-u1', 1, 'tf', 'derived', 'Einthoven üçgeninde frontal düzlemdeki kalp vektörünün izdüşümü, birbiriyle 90 derecelik açı yapan üç eksen üzerinde ölçülür.', '{}', '{"value":false}', 'Yanlış. Üçgen eşkenardır; üç eksen birbiriyle **60 derecelik** açılar yapar.', 2, 'Biyomedikal Sinyaller 1 sunumu · Einthoven üçgeni ve bipolar derivasyonlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-diii-pozitif', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'DIII derivasyonunda pozitif elektrot hangi ekstremitededir?', '{"choices":["Sol bacak","Sol kol","Sağ kol","Sağ bacak"]}', '{"index":0}', 'DIII sol kol (negatif) ile **sol bacak (pozitif)** arasındadır. Sol bacak DII''de de pozitif elektrottur.', 3, 'Biyomedikal Sinyaller 1 sunumu · Einthoven üçgeni ve bipolar derivasyonlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-goldberger', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'aVR, aVL ve aVF derivasyonlarına verilen genel ad hangisidir?', '{"choices":["Goldberger derivasyonları","Wilson derivasyonları","Einthoven derivasyonları","Prekordiyal derivasyonlar"]}', '{"index":0}', 'Unipolar ekstremite derivasyonları **Goldberger**, unipolar göğüs (prekordiyal) derivasyonları **Wilson** derivasyonları olarak bilinir. Einthoven''ınkiler bipolar ekstremite derivasyonlarıdır.', 1, 'Biyomedikal Sinyaller 1 sunumu · Goldberger ve Wilson (göğüs) derivasyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-avl', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'aVL derivasyonunda araştırıcı elektrot nereye yerleştirilir?', '{"choices":["Sol kola","Sağ kola","Sol bacağa","Göğüs kafesine"]}', '{"index":0}', 'aVR sağ kol, **aVL sol kol**, aVF sol bacaktır (R: right, L: left, F: foot).', 1, 'Biyomedikal Sinyaller 1 sunumu · Goldberger ve Wilson (göğüs) derivasyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-augmented', 'biyomedikal', 'bm-u1', 1, 'tf', 'derived', 'aVR''deki "a" harfi, direnç devresi sayesinde araştırıcı elektrottan gelen potansiyelin artırılmış (augmented) olarak kaydedilmesinden gelir.', '{}', '{"value":true}', 'Doğru. Diğer elektrotlar direnç devresiyle birleştirilip referans yapılır; sonuç **augmented voltage** olarak kaydedilir.', 2, 'Biyomedikal Sinyaller 1 sunumu · Goldberger ve Wilson (göğüs) derivasyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-v1', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'V1 göğüs elektrodunun standart yeri neresidir?', '{"choices":["Sternumun sağ kenarında 4. interkostal aralık","Sternumun sol kenarında 4. interkostal aralık","Sol orta klavikula çizgisinde 5. interkostal aralık","Sol orta koltuk altı çizgisinde 5. interkostal aralık"]}', '{"index":0}', 'V1 sağda, V2 solda 4. interkostal aralıktadır. V4 sol orta klavikula çizgisinde, V6 sol orta koltuk altı çizgisinde 5. interkostal aralıktadır.', 2, 'Biyomedikal Sinyaller 1 sunumu · Goldberger ve Wilson (göğüs) derivasyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-v-sayisi', 'biyomedikal', 'bm-u1', 1, 'num', 'derived', 'Wilson göğüs derivasyonları kaç tanedir?', '{"blanks":1}', '{"blanks":[["6"]]}', 'V1''den V6''ya kadar **6** göğüs derivasyonu vardır; genellikle kalbin ön yüzüne ait bilgi verirler.', 1, 'Biyomedikal Sinyaller 1 sunumu · Goldberger ve Wilson (göğüs) derivasyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-v3', 'biyomedikal', 'bm-u1', 1, 'tf', 'derived', 'V3 elektrodu, V2 ile V4''ü birleştiren doğrunun orta noktasına konur.', '{}', '{"value":true}', 'Doğru. V3''ün kendi işaret noktası yoktur; V2 ile V4''ün ortasıdır.', 2, 'Biyomedikal Sinyaller 1 sunumu · Goldberger ve Wilson (göğüs) derivasyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-qrs-anlam', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'EKG''deki QRS kompleksi hangi elektriksel olayı gösterir?', '{"choices":["Karıncıkların depolarizasyonu","Kulakçıkların depolarizasyonu","Karıncıkların repolarizasyonu","Kulakçıkların repolarizasyonu"]}', '{"index":0}', 'P: kulakçık depolarizasyonu, **QRS: karıncık depolarizasyonu**, T: karıncık repolarizasyonu.', 1, 'Biyomedikal Sinyaller 1 sunumu · P, QRS, T dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-t-anlam', 'biyomedikal', 'bm-u1', 1, 'fill', 'derived', 'EKG''de T dalgası karıncıkların ____ olayını gösterir.', '{"blanks":1}', '{"blanks":[["repolarizasyon","repolarizasyonu"]]}', 'T dalgası karıncık **repolarizasyonu**dur; karıncıkların dinlenim durumuna dönüşüdür.', 1, 'Biyomedikal Sinyaller 1 sunumu · P, QRS, T dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-pr', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'Sunuma göre normal PR aralığı hangi değerler arasındadır?', '{"choices":["0,12–0,20 s","0,04–0,08 s","0,35–0,44 s","0,20–0,40 s"]}', '{"index":0}', 'PR aralığı P dalgasının başından QRS''in başına kadar olan süredir ve **0,12–0,20 s** arasındadır. 0,35–0,44 s QT aralığının değeridir.', 2, 'Biyomedikal Sinyaller 1 sunumu · P, QRS, T dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-qrs-sure', 'biyomedikal', 'bm-u1', 1, 'tf', 'derived', 'Normal QRS kompleksinin süresi 0,08 (en çok 0,10) saniyeyi aşmaz.', '{}', '{"value":true}', 'Doğru. Sunumdaki değer 0,08 (0,10) s''dir.', 2, 'Biyomedikal Sinyaller 1 sunumu · P, QRS, T dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-q-normal', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'Normal bir Q dalgası için aşağıdakilerden hangisi doğrudur?', '{"choices":["İzleyen R dalgasının %25''inden küçüktür, süresi 0,04 s''yi aşmaz","İzleyen R dalgasının yarısından büyüktür, süresi 0,10 s''dir","Her derivasyonda mutlaka bulunur ve pozitif yönlüdür","T dalgasından sonra gelen ilk negatif dalgadır"]}', '{"index":0}', 'Q dalgası her zaman olmayabilir; kompleksin ilk dalgası negatifse Q adını alır. Normal Q, R''nin **%25''inden küçük** ve **0,04 s''den kısadır**.', 3, 'Biyomedikal Sinyaller 1 sunumu · P, QRS, T dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-harf', 'biyomedikal', 'bm-u1', 1, 'tf', 'derived', 'Q, R ve S dalgaları 5 mm''den küçükse küçük harfle (q, r, s), 5 mm ve üstündeyse büyük harfle yazılır.', '{}', '{"value":true}', 'Doğru. Genliği 5 mm''nin altındaki dalgalar küçük harfle gösterilir.', 2, 'Biyomedikal Sinyaller 1 sunumu · P, QRS, T dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-st', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'ST segmenti EKG''de nerede yer alır?', '{"choices":["QRS''in sonu ile T''nin başı arasında","Q''nun başı ile T''nin sonu arasında","P''nin başı ile QRS''in başı arasında","T''nin sonu ile bir sonraki P arasında"]}', '{"index":0}', 'ST segmenti **QRS''in sonundan T''nin başına** kadardır. Q''nun başından T''nin sonuna kadar olan süre QT aralığıdır.', 2, 'Biyomedikal Sinyaller 1 sunumu · P, QRS, T dalgaları ve aralıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-kucuk-kare', 'biyomedikal', 'bm-u1', 1, 'num', 'derived', '25 mm/s kağıt hızında EKG kağıdındaki 1 mm''lik küçük kare kaç saniyeye karşılık gelir?', '{"blanks":1}', '{"blanks":[["0.04"]]}', '1 s''de 25 mm ilerlenir: $1/25 = 0{,}04$ s. Beş küçük kareden oluşan büyük kare $5 \times 0{,}04 = 0{,}2$ s''dir.', 1, 'Biyomedikal Sinyaller 1 sunumu · EKG kağıdı, kalibrasyon ve kalp hızı hesabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-hiz-hesap', 'biyomedikal', 'bm-u1', 1, 'num', 'derived', '25 mm/s hızla kaydedilmiş bir EKG''de iki R dalgası arası 15 mm''dir. Kalp hızı dakikada kaç atımdır?', '{"blanks":1}', '{"blanks":[["100"]]}', 'Periyot $15 \times 0{,}04 = 0{,}6$ s; dakikadaki atım $60 / 0{,}6 = 100$.', 2, 'Biyomedikal Sinyaller 1 sunumu · EKG kağıdı, kalibrasyon ve kalp hızı hesabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-hiz-hesap-2', 'biyomedikal', 'bm-u1', 1, 'num', 'derived', '25 mm/s hızla kaydedilmiş bir EKG''de R-R aralığı 20 mm''dir. Kalp hızı dakikada kaç atımdır?', '{"blanks":1}', '{"blanks":[["75"]]}', 'Periyot $20 \times 0{,}04 = 0{,}8$ s; kalp hızı $60 / 0{,}8 = 75$ atım/dk.', 2, 'Biyomedikal Sinyaller 1 sunumu · EKG kağıdı, kalibrasyon ve kalp hızı hesabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-kalibrasyon', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'Standart EKG genlik kalibrasyonu hangisidir?', '{"choices":["1 mV = 10 mm","1 mV = 25 mm","1 mV = 1 mm","10 mV = 1 mm"]}', '{"index":0}', 'Standart **1 mV = 10 mm** (1 cm/mV); gerektiğinde 5 mm ya da 20 mm de seçilebilir. Yatay eksen zaman, dikey eksen gerilimdir.', 1, 'Biyomedikal Sinyaller 1 sunumu · EKG kağıdı, kalibrasyon ve kalp hızı hesabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-eksen', 'biyomedikal', 'bm-u1', 1, 'tf', 'derived', 'EKG kağıdında yatay eksen gerilimi, dikey eksen zamanı gösterir.', '{}', '{"value":false}', 'Yanlış. **Yatay eksen zaman**, **dikey eksen gerilim**dir.', 1, 'Biyomedikal Sinyaller 1 sunumu · EKG kağıdı, kalibrasyon ve kalp hızı hesabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-normal-hiz', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'SA düğümü için normal kalp hızı aralığı nedir?', '{"choices":["60–100 atım/dk","40–60 atım/dk","20–40 atım/dk","100–150 atım/dk"]}', '{"index":0}', 'SA düğümünün normal hızı **60–100/dk**''dır; 60''ın altı bradikardi, 100''ün üstü taşikardidir.', 1, 'Biyomedikal Sinyaller 1 sunumu · Normal hız, bradikardi, taşikardi ve yedek uyarı odakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-bradikardi', 'biyomedikal', 'bm-u1', 1, 'fill', 'derived', 'Kalp hızının dakikada 60''ın altında olmasına ____ denir.', '{"blanks":1}', '{"blanks":[["bradikardi"]]}', '60/dk''nın altı **bradikardi**, 100/dk''nın üstü taşikardidir.', 1, 'Biyomedikal Sinyaller 1 sunumu · Normal hız, bradikardi, taşikardi ve yedek uyarı odakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-av-hiz', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'SA düğümü yetersiz kaldığında devreye giren AV düğümünün hızı hangi aralıktadır?', '{"choices":["40–60 atım/dk","60–80 atım/dk","20–40 atım/dk","60–100 atım/dk"]}', '{"index":0}', 'Yedek odaklar: atriyal odak 60–80, **AV düğümü 40–60**, ventriküler odak 20–40 atım/dk.', 2, 'Biyomedikal Sinyaller 1 sunumu · Normal hız, bradikardi, taşikardi ve yedek uyarı odakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-eksternal', 'biyomedikal', 'bm-u1', 1, 'tf', 'derived', 'Eksternal pacemaker, kalp hızı tehlikeli derecede düştüğünde vücut dışından elektrik uyarısı vererek ritmi sağlayan geçici bir cihazdır.', '{}', '{"value":true}', 'Doğru. Transkütanöz pacemaker da denen bu cihaz geçici olarak kullanılır.', 2, 'Biyomedikal Sinyaller 1 sunumu · Normal hız, bradikardi, taşikardi ve yedek uyarı odakları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-ekg-frekans', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'Sunuma göre EKG sinyallerinin frekans aralığı ve en büyük genliği hangisidir?', '{"choices":["0,1–100 Hz, yaklaşık 1 mV","0,5–70 Hz, 5–400 µV","50–60 Hz, yaklaşık 1 V","1–1000 Hz, yaklaşık 10 mV"]}', '{"index":0}', 'EKG frekansı **0,1 Hz''den 100 Hz''e** kadar değişir, en büyük genliği **1 mV** mertebesindedir. 0,5–70 Hz ve 5–400 µV EEG''nin değerleridir.', 2, 'Biyomedikal Sinyaller 1 sunumu · EKG ölçüm devresi, frekans ve genlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-izolasyon', 'biyomedikal', 'bm-u1', 1, 'mcq', 'derived', 'EKG ölçüm devresinde izolasyon devresinin amacı nedir?', '{"choices":["Hastayı elektrik çarpmasından korumak","Şebeke gürültüsünü süzmek","Sinyali sayısala çevirmek","Derivasyonları seçmek"]}', '{"index":0}', 'İzolasyon devresi hastanın **elektrik çarpmasına** maruz kalmaması içindir. 50 Hz şebeke gürültüsünü bant söndüren filtre, derivasyonları uç seçim devresi yapar.', 2, 'Biyomedikal Sinyaller 1 sunumu · EKG ölçüm devresi, frekans ve genlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u1-bant-sondur', 'biyomedikal', 'bm-u1', 1, 'tf', 'derived', 'EKG ölçüm blok şemasında ön kuvvetlendirici ve izolasyondan sonra bant söndüren filtre, kuvvetlendirici ve bant geçiren filtre gelir.', '{}', '{"value":true}', 'Doğru. Sıra: elektrotlar → uç seçim devresi → ön kuvvetlendirici → izolasyon → bant söndüren filtre → kuvvetlendirici → bant geçiren filtre → EKG.', 2, 'Biyomedikal Sinyaller 1 sunumu · EKG ölçüm devresi, frekans ve genlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-berger', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'EEG''yi 1929''da keşfeden bilim insanı kimdir?', '{"choices":["Hans Berger","Willem Einthoven","Joseph Fourier","Stéphane Mallat","Georg von Hevesy"]}', '{"index":0}', 'EEG''yi Alman fizikçi **Hans Berger** 1929''da keşfetmiştir. Einthoven EKG derivasyonlarıyla, Fourier dönüşümle, Mallat dalgacık algoritmasıyla, Hevesy nükleer tıpla anılır.', 1, 'Biyomedikal Sinyaller 1 sunumu · EEG''nin tanımı, tarihi ve kullanım amaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-evoked', 'biyomedikal', 'bm-u2', 2, 'tf', 'derived', 'EEG yalnızca beynin kendiliğinden oluşan ritmik potansiyellerini kaydeder; bir uyarana bağlı (uyarılmış) potansiyeller EEG''nin konusu değildir.', '{}', '{"value":false}', 'Yanlış. EEG hem kendiliğinden oluşan ritmik potansiyelleri hem de reseptör etkinliğine bağlı **uyarılmış (evoked)** potansiyelleri kaydetme yöntemidir.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG''nin tanımı, tarihi ve kullanım amaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-duz-eeg', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Elektriksel etkinliğin hiç olmadığını gösteren düz bir EEG neyin klinik kanıtıdır?', '{"choices":["Beyin ölümü","Derin uyku","Epilepsi nöbeti","REM uykusu"]}', '{"index":0}', 'Düz EEG **beyin ölümünün** klinik kanıtıdır. Canlılık sürdükçe EEG sinyali her koşulda gözlenir.', 1, 'Biyomedikal Sinyaller 1 sunumu · EEG''nin tanımı, tarihi ve kullanım amaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-epilepsi', 'biyomedikal', 'bm-u2', 2, 'tf', 'derived', 'Sunuma göre EEG, epilepsinin teşhisinde ve tiplerinin belirlenmesinde tedaviye karar verdiren en temel inceleme yöntemidir.', '{}', '{"value":true}', 'Doğru. EEG ayrıca tümör, lezyon, enfeksiyon, uyku bozuklukları ve beyin ölümünün tanısında kullanılır.', 1, 'Biyomedikal Sinyaller 1 sunumu · EEG''nin tanımı, tarihi ve kullanım amaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-rutin', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Rutin (normal) bir EEG kaydı ne kadar sürer?', '{"choices":["20–30 dakika","5–10 dakika","Ortalama 1 saat","3–6 saat"]}', '{"index":0}', 'Rutin EEG **20–30 dakika**, uyku-uyanıklık EEG''si ortalama 1 saat, gece kayıtları 3–6 saat sürer.', 1, 'Biyomedikal Sinyaller 1 sunumu · EEG kayıt türleri ve süreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-uyku-uyaniklik', 'biyomedikal', 'bm-u2', 2, 'tf', 'derived', 'İdeal bir EEG incelemesinde uyku, uyanıklık ve aradaki geçiş dönemlerinin görülmesi hedeflenir, çünkü bazı hastalık bulguları yalnızca belli dönemlerde belirginleşir.', '{}', '{"value":true}', 'Doğru. Bu yüzden yaklaşık bir saatlik uyku ve uyanıklık kaydı tercih edilir.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG kayıt türleri ve süreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-gece', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Sunuma göre gece EEG kayıtları ne kadar sürer?', '{"choices":["3–6 saat","20–30 dakika","40–60 dakika","Tam 24 saat"]}', '{"index":0}', 'Gece kayıtları **3–6 saat** sürer. Gerektiğinde gece boyu ya da 24 saatlik kayıtlar da kullanılabilir.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG kayıt türleri ve süreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-aralik', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Sunuma göre EEG dalgalarının frekans ve genlik aralığı hangisidir?', '{"choices":["0,5–70 Hz ve 5–400 µV","0,1–100 Hz ve yaklaşık 1 mV","8–13 Hz ve 1–10 mV","50–500 Hz ve 1–5 V"]}', '{"index":0}', 'EEG frekansı **0,5–70 Hz**, genliği **5–400 µV** aralığındadır. EKG''nin genliği ise mV mertebesindedir.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG frekans ve genlik aralığı, 10-20 sistemi, bipolar ve monopolar kayıt', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-1020', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'EEG''de kullanılan "10-20" sistemi kafatası çevresinde kaç elektrot bölgesi içerir?', '{"choices":["21","12","16","31","8"]}', '{"index":0}', '10-20 sistemi **21** elektrot bölgesi içerir. EEG cihazları genellikle 8 ya da 16 kanallıdır.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG frekans ve genlik aralığı, 10-20 sistemi, bipolar ve monopolar kayıt', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-monopolar', 'biyomedikal', 'bm-u2', 2, 'fill', 'derived', 'EEG''de elektrotlardan yalnızca biri aktifse ve diğeri kulak bölgesindeki referans elektrotsa bu kayda ____ kayıt denir.', '{"blanks":1}', '{"blanks":[["monopolar"]]}', 'İki elektrot da aktifse **bipolar**, yalnızca biri aktif ve diğeri kulaktaki referanssa **monopolar** kayıttır.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG frekans ve genlik aralığı, 10-20 sistemi, bipolar ve monopolar kayıt', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-ritmik', 'biyomedikal', 'bm-u2', 2, 'tf', 'derived', 'EEG dalgaları EKG''deki gibi belirli biçimli ve tam periyodiktir.', '{}', '{"value":false}', 'Yanlış. EEG dalgaları ritmiktir ama tam periyodik değildir; EKG''deki gibi özel biçimleri yoktur ve rastgele potansiyel değişimlerini andırırlar.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG frekans ve genlik aralığı, 10-20 sistemi, bipolar ve monopolar kayıt', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-parametre', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'EEG dalgalarının değerlendirilmesinde en önemli parametre hangisidir?', '{"choices":["Frekans","Genlik","Dalga biçimi","Kayıt süresi"]}', '{"index":0}', 'En önemli parametre **frekans**tır, ikinci derecede önemli parametre genliktir. Frekans, belli bir sürede tepeler sayılıp süreye bölünerek kabaca bulunabilir.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG frekans ve genlik aralığı, 10-20 sistemi, bipolar ve monopolar kayıt', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-alfa', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Gözler kapalı, sakin ve rahat bir dinlenme sırasında baskın olan EEG bandı hangisidir?', '{"choices":["Alfa (8–13 Hz)","Beta (13–30 Hz)","Delta (0,5–4 Hz)","Teta (4–8 Hz)","Gama (30–100+ Hz)"]}', '{"index":0}', 'Gözler kapalı sakin dinlenmede **alfa** görülür. Gözler açılınca alfanın yerini beta alır.', 1, 'Biyomedikal Sinyaller 1 sunumu · EEG frekans bantları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-delta', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'En yavaş beyin dalgası olan ve derin uykuda baskın olan bant hangisidir?', '{"choices":["Delta","Teta","Alfa","Beta","Gama"]}', '{"index":0}', '**Delta** (0,5–4 Hz) en yavaş banttır; derin ve rüyasız uykuda baskındır.', 1, 'Biyomedikal Sinyaller 1 sunumu · EEG frekans bantları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-beta-aralik', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Odaklanma, problem çözme ve aktif düşünme sırasında baskın olan beta bandının frekans aralığı hangisidir?', '{"choices":["13–30 Hz","8–13 Hz","4–8 Hz","30–100 Hz"]}', '{"index":0}', 'Beta **13–30 Hz**''dir. 8–13 Hz alfa, 4–8 Hz teta, 30–100+ Hz gamadır.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG frekans bantları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-goz-acik', 'biyomedikal', 'bm-u2', 2, 'tf', 'derived', 'Gözlerin açılmasıyla EEG''deki alfa dalgasının yerini beta dalgası alır.', '{}', '{"value":true}', 'Doğru. Sunumdaki kayıtta gözler kapalıyken alfa görülür, gözler açılınca beta gelir.', 1, 'Biyomedikal Sinyaller 1 sunumu · EEG frekans bantları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-teta', 'biyomedikal', 'bm-u2', 2, 'fill', 'derived', 'Hafif uyku, derin meditasyon ve hayal kurma anlarında ortaya çıkan 4–8 Hz''lik EEG bandına ____ bandı denir.', '{"blanks":1}', '{"blanks":[["teta","theta"]]}', '4–8 Hz **teta** bandıdır; hafıza ve öğrenme süreçleriyle de ilgilidir.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG frekans bantları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-gama', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'En hızlı beyin dalgası olan ve üst düzey bilişsel işlevlerle ilişkilendirilen bant hangisidir?', '{"choices":["Gama","Beta","Alfa","Delta"]}', '{"index":0}', '**Gama** (30–100+ Hz) en hızlı banttır; farkındalık ve yoğun konsantrasyonla ilişkilidir.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG frekans bantları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-aktivite', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Beynin aktivite düzeyi yükseldikçe EEG dalgalarında ne olur?', '{"choices":["Frekans artar, genlik azalır","Frekans azalır, genlik artar","Frekans ve genlik birlikte artar","Frekans ve genlik birlikte azalır"]}', '{"index":0}', 'Aktivite yükseldikçe **frekans artar, genlik azalır**. Uykuya dalarken tersi olur: frekans düşer, genlik artar.', 2, 'Biyomedikal Sinyaller 1 sunumu · Aktivite düzeyi ve yaşla egemen frekans', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-yetiskin', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Sunuma göre yetişkinlerde egemen EEG frekansı hangi aralıktadır?', '{"choices":["8–12 Hz","3–4 Hz","6–7 Hz","20–30 Hz"]}', '{"index":0}', 'Egemen frekans yaşla yükselir: yeni doğanda 3–4 Hz, 2–3 yaşta 6–7 Hz, **yetişkinde 8–12 Hz**.', 2, 'Biyomedikal Sinyaller 1 sunumu · Aktivite düzeyi ve yaşla egemen frekans', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-yenidogan', 'biyomedikal', 'bm-u2', 2, 'tf', 'derived', 'Yeni doğanlarda egemen EEG frekansı yetişkinlerden daha yüksektir.', '{}', '{"value":false}', 'Yanlış. Egemen frekans yaşla **yükselir**; yeni doğanda 3–4 Hz, yetişkinde 8–12 Hz''dir.', 2, 'Biyomedikal Sinyaller 1 sunumu · Aktivite düzeyi ve yaşla egemen frekans', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-gurultu', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Aşağıdakilerden hangisi sunumda EEG sinyallerini etkileyen gürültü kaynakları arasında sayılmaz?', '{"choices":["Röntgen ışınımı","Şebeke gürültüsü","EKG gürültüsü","Göz hareketleri","Çene hareketleri"]}', '{"index":0}', 'EEG genliği çok küçük olduğu için **şebeke**, **EKG**, **göz** ve **çene hareketleri** sinyali kolayca bozar. Röntgen ışınımı sayılmaz.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG''de gürültü, analiz adımları ve ECoG', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-onislem', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Aşağıdakilerden hangisi EEG analizinde ön işlem değil, özellik çıkarma adımıdır?', '{"choices":["Alt bantların güç ve enerjisini hesaplamak","Kaydın başındaki hatalı kısmı çıkarmak","Gürültüyü gidermek","Uzman skorlarına göre ayrıştırmak"]}', '{"index":0}', 'Alt bantlara ayırıp **güç, enerji, bağıl güç** gibi değerleri hesaplamak özellik çıkarmadır. Diğerleri ön işlem adımlarıdır.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG''de gürültü, analiz adımları ve ECoG', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-ecog', 'biyomedikal', 'bm-u2', 2, 'fill', 'derived', 'Elektrotun doğrudan beyin kabuğuna dokundurulduğu, sinyalin 3–4 kat büyük genlikle kaydedildiği yönteme ____ denir.', '{"blanks":1}', '{"blanks":[["elektrokortikografi","elektrokortiyografi","ecog"]]}', 'Bu kayıt biçimi **elektrokortikografi (ECoG)** adını alır.', 2, 'Biyomedikal Sinyaller 1 sunumu · EEG''de gürültü, analiz adımları ve ECoG', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-uyku-eeg', 'biyomedikal', 'bm-u2', 2, 'tf', 'derived', 'Uyku EEG''sinin analiz amaçları arasında uyku evreleme ve apneik atak tespiti vardır.', '{}', '{"value":true}', 'Doğru. Rutin EEG''de epilepsi, tümör ve lezyon tespiti; uyku EEG''sinde uyku evreleme, apne ve uyku hastalıkları hedeflenir.', 1, 'Biyomedikal Sinyaller 1 sunumu · EEG''de gürültü, analiz adımları ve ECoG', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-nrem-uyku', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Uykuya dalarken (NREM başlangıcı) EEG''de ne gözlenir?', '{"choices":["Frekans giderek azalır, genlik giderek artar","Frekans giderek artar, genlik giderek azalır","Frekans ve genlik değişmez","Yalnızca gama dalgaları görülür"]}', '{"index":0}', 'NREM''de EEG yavaşlar: **frekans düşer, genlik artar**. Kan basıncı, kalp hızı ve solunum da azalır.', 2, 'Biyomedikal Sinyaller 1 sunumu · NREM uykusu ve evreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-evre4', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Delta dalgalarının baskın olduğu, uyandırmanın zor olduğu en derin NREM evresi hangisidir?', '{"choices":["Evre 4","Evre 1","Evre 2","Evre 3"]}', '{"index":0}', '**Evre 4** en derin NREM dönemidir; delta baskındır. Evre 1''de alfa görülür ve kolay uyanılır, Evre 3''te teta ve delta başlar.', 2, 'Biyomedikal Sinyaller 1 sunumu · NREM uykusu ve evreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-buyume', 'biyomedikal', 'bm-u2', 2, 'tf', 'derived', 'Büyüme hormonu özellikle derin NREM uykusunda salgılanır.', '{}', '{"value":true}', 'Doğru. NREM fiziksel onarım, enerji toplama ve büyüme hormonu salgısı için önemlidir.', 1, 'Biyomedikal Sinyaller 1 sunumu · NREM uykusu ve evreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-evre2', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'EEG desenlerinin dikensi dalgalarla (yüksek voltajlı ateşlemeler) düzensizleştiği ve "önemli-önemsiz ayrımı"nın yapıldığı evre hangisidir?', '{"choices":["Evre 2","Evre 1","Evre 4","REM"]}', '{"index":0}', '**Evre 2**''de EEG dikensi dalgalarla düzensizleşir ve uyandırmak zorlaşır.', 3, 'Biyomedikal Sinyaller 1 sunumu · NREM uykusu ve evreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-paradoks', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'REM uykusuna neden "paradoks uyku" denir?', '{"choices":["Uyku derin olduğu halde EEG uyanık ve dikkatli bir kişininki gibidir","Uyku hafif olduğu halde EEG''de yalnızca delta dalgaları vardır","Gözler hareketsiz olduğu halde kaslar sürekli kasılır","Kalp hızı düştüğü halde beynin oksijen tüketimi sıfırlanır"]}', '{"index":0}', 'REM''de uyku derindir ama **EEG uyanık bir kişininki gibidir**; uyandırmak zor, kendiliğinden uyanmak kolaydır.', 2, 'Biyomedikal Sinyaller 1 sunumu · REM uykusu ve NREM ile farkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-rem-dongu', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Sunuma göre bir gecede kaç uyku döngüsü yaşanır?', '{"choices":["4–5","1–2","8–10","12–15"]}', '{"index":0}', 'Bir gecede **4–5 döngü** olur. REM başta yaklaşık 10 dakikadır ve her döngüde uzar.', 2, 'Biyomedikal Sinyaller 1 sunumu · REM uykusu ve NREM ile farkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-atoni', 'biyomedikal', 'bm-u2', 2, 'tf', 'derived', 'REM uykusunda göz kasları dışındaki iskelet kasları inhibe olur (atoni), böylece kişi rüyasındakileri fiziksel olarak yapmaz.', '{}', '{"value":true}', 'Doğru. REM''de beyin çok aktiftir ama kol ve bacak kasları geçici olarak hareketsiz kalır.', 2, 'Biyomedikal Sinyaller 1 sunumu · REM uykusu ve NREM ile farkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-rem-kalp', 'biyomedikal', 'bm-u2', 2, 'tf', 'derived', 'REM uykusunda kan basıncı, kalp hızı ve solunum sayısı NREM''e göre azalır ve düzenli hale gelir.', '{}', '{"value":false}', 'Yanlış. REM''de bunlar **artar ve düzensizleşir**; beynin oksijen tüketimi de artar. Sunum REM''i en sık kalp krizi dönemi olarak anar.', 2, 'Biyomedikal Sinyaller 1 sunumu · REM uykusu ve NREM ile farkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u2-sabah', 'biyomedikal', 'bm-u2', 2, 'mcq', 'derived', 'Gece boyunca NREM ve REM sürelerinin dağılımı nasıl değişir?', '{"choices":["Sabaha doğru NREM kısalır, REM uzar","Sabaha doğru REM kısalır, NREM uzar","İkisi de gece boyunca eşit kalır","REM yalnızca uykunun ilk saatinde görülür"]}', '{"index":0}', 'Uykuya dalınca uzun bir NREM yaşanır; **sabaha doğru NREM kısalır, REM uzar**.', 2, 'Biyomedikal Sinyaller 1 sunumu · REM uykusu ve NREM ile farkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-enmg', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', '"Elektronöromiyografi" (ENMG) teriminin parçaları neyi anlatır?', '{"choices":["Sinirlerin ve kasların elektriksel sinyallerinin yazdırılması","Beynin elektriksel sinyallerinin yazdırılması","Kalbin ve damarların elektriksel sinyallerinin yazdırılması","Kasların ses dalgalarıyla görüntülenmesi"]}', '{"index":0}', 'elektro (elektriksel) + nöro (sinir) + miyo (kas) + grafi (yazı): **sinir ve kasların elektriksel sinyallerinin yazdırılması**. Yerleşmiş adı EMG''dir.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · EMG ve ENMG''nin tanımı, kimlere yapıldığı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-testler', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'Bir EMG incelemesinde en çok uygulanan iki test hangileridir?', '{"choices":["Sinir ileti çalışmaları ve iğne elektromiyografisi","Sintigrafi ve iğne elektromiyografisi","Elektrokortikografi ve sinir ileti çalışmaları","Holter kaydı ve yüzey elektromiyografisi"]}', '{"index":0}', 'En çok uygulanan testler **sinir ileti çalışmaları** ve **iğne elektromiyografisi**dir.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · EMG ve ENMG''nin tanımı, kimlere yapıldığı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-kimlere', 'biyomedikal', 'bm-u3', 3, 'tf', 'derived', 'Bel ve boyun fıtığı, kas hastalıkları, motor nöron hastalığı ve nöropati ön tanısı olan hastalara EMG yapılabilir.', '{}', '{"value":true}', 'Doğru. Sunumdaki listeye sinir hasarı da eklenir.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · EMG ve ENMG''nin tanımı, kimlere yapıldığı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-iki-potansiyel', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'Uyarılabilen dokularda (sinir ve kas) sunumda sözü edilen iki potansiyel tipi hangileridir?', '{"choices":["Dinlenim ve aksiyon potansiyeli","Uyarılmış ve kendiliğinden potansiyel","Bipolar ve unipolar potansiyel","Statik ve dinamik potansiyel"]}', '{"index":0}', 'İki tip potansiyel vardır: **dinlenim potansiyeli** ve **aksiyon potansiyeli**.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · Dinlenim ve aksiyon potansiyeli, MÜAP', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-muap', 'biyomedikal', 'bm-u3', 3, 'fill', 'derived', 'Kasların kasılması, kısaltması MUAP olan motor ünite ____ potansiyelleri sayesinde olur.', '{"blanks":1}', '{"blanks":[["aksiyon"]]}', 'MUAP: Motor Unit **Action** Potential, yani motor ünite **aksiyon** potansiyeli.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · Dinlenim ve aksiyon potansiyeli, MÜAP', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-kasilma-miktar', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'Kasılmanın miktarı MÜAP''larla nasıl ilişkilidir?', '{"choices":["MÜAP''ların sayısı ve sıklığı arttıkça artar","MÜAP''ların genliği azaldıkça artar","MÜAP''ların sayısından bağımsızdır","Yalnızca tek bir MÜAP''ın süresine bağlıdır"]}', '{"index":0}', 'Kasılmanın miktarı **MÜAP''ların sayısı ve sıklığı** arttıkça artar.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · Dinlenim ve aksiyon potansiyeli, MÜAP', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-istemli', 'biyomedikal', 'bm-u3', 3, 'tf', 'derived', 'İstemli kas hareketleri, beyinde oluşan elektriksel uyarıların sinirlerle kaslara iletilmesiyle meydana gelir.', '{}', '{"value":true}', 'Doğru. Kasılmanın kendisi de elektriksel bir işaret üretir ve EMG elektrotlarıyla ölçülür.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · Dinlenim ve aksiyon potansiyeli, MÜAP', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-mup-param', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'Klinik EMG''de kas ve sinir hastalıklarını ayırmada kullanılan MUP parametreleri hangileridir?', '{"choices":["Devamlılık süresi, genlik ve aşama","Frekans, renk ve sıcaklık","Kalp hızı, PR ve QT aralığı","Yoğunluk, kontrast ve histogram"]}', '{"index":0}', 'MUP özellikleri zaman esaslıdır: **devamlılık süresi, genlik ve aşama (faz)**.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · Klinik EMG ve MUP parametreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-mup-tek', 'biyomedikal', 'bm-u3', 3, 'tf', 'derived', 'MUP, tek bir anatomik motor ünitenin elektriksel hareketini, yani elektrodun kayıt alanındaki kas liflerinin birleşik potansiyelini yansıtır.', '{}', '{"value":true}', 'Doğru. MUP iğne elektrotla, hafif kasılma sırasında kaydedilir.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · Klinik EMG ve MUP parametreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-hoparlor', 'biyomedikal', 'bm-u3', 3, 'tf', 'derived', 'İğne EMG''sinde kas sinyalleri ekranda izlenmenin yanında hoparlörden de dinlenir ve bu, doktorun değerlendirmesine katkı sağlar.', '{}', '{"value":true}', 'Doğru. Sinyaller özel kuvvetlendiricilerle büyütülür, hem görülür hem işitilir.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · Klinik EMG ve MUP parametreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-yuzey', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'En genel anlamda EMG işaretleri nasıl alınır?', '{"choices":["Kasın üzerindeki deriye yüzey elektrotları yerleştirilerek","Kafatası çevresine 21 elektrot yerleştirilerek","Damara kontrast madde enjekte edilerek","Göğüs duvarına altı elektrot yerleştirilerek"]}', '{"index":0}', 'EMG işaretleri en genel olarak test edilen kasın üzerindeki deriye **yüzey elektrotları** konarak alınır.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · Yüzey ve iğne elektrotları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-farksal', 'biyomedikal', 'bm-u3', 3, 'fill', 'derived', 'Yüzey elektrotlarıyla alınan EMG işaretlerinin kuvvetlendirilmesinde ____ kuvvetlendiriciler kullanılır.', '{"blanks":1}', '{"blanks":[["farksal","fark","diferansiyel"]]}', 'İki elektrot arasındaki farkı kuvvetlendiren **farksal** kuvvetlendiriciler kullanılır.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · Yüzey ve iğne elektrotları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-konsantrik', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'İğne EMG''sinde genellikle hangi tür iğne kullanılır?', '{"choices":["İçine ince bir tel konmuş konsantrik iğne","Kontrast madde veren enjeksiyon iğnesi","Uyarı akımı veren yüksek gerilim iğnesi","Kafatasına dokundurulan mikroelektrot"]}', '{"index":0}', 'Genellikle enjektör iğnesinin içine çok ince bir tel konarak yapılmış **konsantrik iğneler** kullanılır.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · Yüzey ve iğne elektrotları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-uyari-yok', 'biyomedikal', 'bm-u3', 3, 'tf', 'derived', 'İğne EMG''sinde kasa iğne üzerinden elektriksel uyarı verilir.', '{}', '{"value":false}', 'Yanlış. İğne EMG''sinde **hiçbir elektriksel uyarı verilmez**; iğne yalnızca kastaki elektriksel etkinliği kaydeder. Uyarı, sinir iletim ölçümünde deriden verilir.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · Yüzey ve iğne elektrotları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-protez', 'biyomedikal', 'bm-u3', 3, 'tf', 'derived', 'EMG işaretleri, uzuv kaybında kullanılan protezlere hareket sağlayacak kaynak işaret olarak da kullanılır.', '{}', '{"value":true}', 'Doğru. EMG hem tanıda hem de protez denetiminde kullanılır.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · Yüzey ve iğne elektrotları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-kas-sayisi', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'Sunuma göre bir EMG tetkikinde genellikle kaç kas incelenir?', '{"choices":["1–10","20–30","Yalnızca 1","50''den fazla"]}', '{"index":0}', 'Düşünülen tanıya göre değişir; genellikle **1–10** kas incelenir. Sinir iletim ölçümünde ise 5–10 sinirden ölçüm alınır.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · Yüzey ve iğne elektrotları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-eng-tanim', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'ENG (elektronörografi) neyin elektriksel incelemesidir?', '{"choices":["Sinirlerin","Kasların","Beynin","Kalbin"]}', '{"index":0}', 'ENG **sinirlerin**, EMG kasların elektriksel incelemesidir. Çoğu kez birlikte uygulandıkları için ikisine birden EMG denir.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · ENG, sinir iletim ölçümü, kraniyal ve periferik sinirler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-uyari-gerilim', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'Sinir iletim ölçümünde deriden verilen uyarı akımı için sunumda hangi bilgi verilir?', '{"choices":["100 V''a kadar çıkar ama milisaniyeden kısa sürer","1 mV''luk sürekli bir doğru akımdır","Birkaç saniye süren düşük gerilimli bir akımdır","50 Hz şebeke geriliminin doğrudan uygulanmasıdır"]}', '{"index":0}', 'Uyarı **100 volt kadar** yüksek gerilimlidir ama **saniyenin binde birinden kısa** sürer ve zararsızdır; genellikle ağrı olarak algılanmaz.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · ENG, sinir iletim ölçümü, kraniyal ve periferik sinirler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-kraniyal', 'biyomedikal', 'bm-u3', 3, 'num', 'derived', 'Doğrudan beyinden çıkan kraniyal sinirler kaç çifttir?', '{"blanks":1}', '{"blanks":[["12"]]}', 'Kraniyal sinirler **12 çift**tir; omurilikten çıkan spinal sinirler ise 31 çifttir.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · ENG, sinir iletim ölçümü, kraniyal ve periferik sinirler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-spinal', 'biyomedikal', 'bm-u3', 3, 'num', 'derived', 'Omurilikten çıkan spinal sinirler kaç çifttir?', '{"blanks":1}', '{"blanks":[["31"]]}', 'Periferik sinir sisteminin en büyük kısmını omurilikten çıkan **31 çift** spinal sinir oluşturur.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · ENG, sinir iletim ölçümü, kraniyal ve periferik sinirler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-vagus', 'biyomedikal', 'bm-u3', 3, 'tf', 'derived', 'Kraniyal sinirlerden vagus siniri baş ve boyun dışına çıkarak kalp, akciğer ve mide gibi organlara kadar uzanır.', '{}', '{"value":true}', 'Doğru. Kraniyal sinirler genellikle baş ve boyunu yönetir, vagus siniri bunun istisnasıdır.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · ENG, sinir iletim ölçümü, kraniyal ve periferik sinirler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-iletim-hiz', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'Sinir iletim ölçümünde kayıttan yararlanılarak ne ölçülür?', '{"choices":["Sinirin iletim hızı ve cevabın derecesi","Kasın kontrast madde tutulumu","Beyin dalgalarının frekans bandı","Kalbin R-R aralığı"]}', '{"index":0}', 'Uyarılan sinirde yayılan etkinlik başka bir elektrotla kaydedilir; buradan **iletim hızı** ve **cevabın derecesi** bulunur.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · ENG, sinir iletim ölçümü, kraniyal ve periferik sinirler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-segirme-tanim', 'biyomedikal', 'bm-u3', 3, 'fill', 'derived', 'Kasın bir uyarı sonucu kasılması olayına kas ____ denir.', '{"blanks":1}', '{"blanks":[["seğirmesi","seğirme"]]}', 'Uyarıyla oluşan tek kasılma ve ardından gelen gevşemeye **kas seğirmesi** denir.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · Kasa uyarımın etkisi ve kas seğirmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-segirme-sure', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'Sunuma göre hızlı ve hassas hareket sağlayan kaslarda seğirme süresi kaç ms''ye kadar inebilir?', '{"choices":["7,5 ms","100 ms","1 ms","500 ms"]}', '{"index":0}', 'Hızlı kaslarda **7,5 ms**''ye kadar iner; kaba ve kuvvetli hareket yapan kaslarda 100 ms olabilir.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · Kasa uyarımın etkisi ve kas seğirmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-gecikme', 'biyomedikal', 'bm-u3', 3, 'tf', 'derived', 'Kasa uyarının gelmesiyle kasın kasılmaya başlaması arasında bir gecikme süresi vardır.', '{}', '{"value":true}', 'Doğru. Uyarıdan sonra kısa bir gecikme, ardından kasılma ve gevşeme fazları gelir.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · Kasa uyarımın etkisi ve kas seğirmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-noropati', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'Vücuttaki periferik sinirlerin hasarını ifade eden hastalıklara ne ad verilir?', '{"choices":["Nöropati","Miyopati","Distrofi","Miyozit"]}', '{"index":0}', '**Nöropati** periferik sinir hasarıdır. **Miyopati** ise kas dokusunu etkileyen hastalıklardır.', 1, 'Biyomedikal Sinyaller 1-2 sunumu · Kas hastalıkları, nöropati ve miyopati', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-miyastenia', 'biyomedikal', 'bm-u3', 3, 'mcq', 'derived', 'Miyastenia gravis hangi kas hastalığı grubunun örneğidir?', '{"choices":["Sinir-kas kavşağı hastalıkları","Musküler distrofiler","Motor nöron hastalıkları","İltihaplı kas hastalıkları"]}', '{"index":0}', 'Miyastenia gravis, sinirlerin kaslara sinyal iletmesini engelleyen otoimmün bir **sinir-kas kavşağı** hastalığıdır. DMD distrofiye, ALS motor nörona, polimiyozit iltihaplı kas hastalığına örnektir.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · Kas hastalıkları, nöropati ve miyopati', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u3-als', 'biyomedikal', 'bm-u3', 3, 'tf', 'derived', 'ALS ve SMA, omurilikteki sinir hücrelerinin kaybıyla ilerleyen motor nöron hastalıklarıdır.', '{}', '{"value":true}', 'Doğru. Motor nöron hastalıkları ilerleyici kas zayıflığına yol açar.', 2, 'Biyomedikal Sinyaller 1-2 sunumu · Kas hastalıkları, nöropati ve miyopati', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-islevsel', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Organ ve hücrelerin yapısından çok işlevsel (fizyolojik) durumunu inceleyen görüntüleme yöntemi hangisidir?', '{"choices":["Nükleer tıp","Direkt radyografi","Bilgisayarlı tomografi","Histopatolojik görüntüleme"]}', '{"index":0}', 'Nükleer tıp radyofarmasötiklerle organların **işlevini ve metabolizmasını** inceler. Röntgen, BT ve histopatoloji yapıyı gösterir.', 1, 'Biyomedikal Sinyaller 2 sunumu · Tıbbi görüntülemenin tanımı ve yöntemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-radyasyonsuz', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Aşağıdaki yöntemlerden hangi ikisi iyonlaştırıcı radyasyon kullanmaz?', '{"choices":["MR ve ultrasonografi","Röntgen ve BT","BT ve PET","Röntgen ve sintigrafi"]}', '{"index":0}', '**MR** manyetik alan ve radyo dalgası, **USG** ses dalgası kullanır. Röntgen ve BT X ışını, PET ve sintigrafi radyoaktif madde kullanır.', 1, 'Biyomedikal Sinyaller 2 sunumu · Tıbbi görüntülemenin tanımı ve yöntemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-tanim', 'biyomedikal', 'bm-u4', 4, 'tf', 'derived', 'Tıbbi görüntüleme, deri ve kemiklerin gizlediği iç yapıları ortaya çıkarmanın yanı sıra hastalıkları teşhis ve tedavi etmeyi amaçlar.', '{}', '{"value":true}', 'Doğru. Vücudun iç kısımlarının ya da organ işlevinin görsel temsilini oluşturan teknikler bütünüdür.', 1, 'Biyomedikal Sinyaller 2 sunumu · Tıbbi görüntülemenin tanımı ve yöntemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-kemik-beyaz', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Röntgen görüntüsünde kemikler neden parlak beyaz görünür?', '{"choices":["Radyasyonu kolayca emdikleri için","Radyasyonu hiç emmedikleri için","Ses dalgalarını yansıttıkları için","Kontrast maddeyi biriktirdikleri için"]}', '{"index":0}', 'Yoğun nesneler (kemikler) radyasyonu **kolayca emer** ve beyaz görünür; yumuşak dokular daha az emer ve gri, koyu tonlarda görünür.', 1, 'Biyomedikal Sinyaller 2 sunumu · Röntgen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-rontgen-kullanim', 'biyomedikal', 'bm-u4', 4, 'tf', 'derived', 'X ışınlarının en yaygın kullanımı kemik kırıklarının kontrol edilmesidir.', '{}', '{"value":true}', 'Doğru. Zatürre, akciğer enfeksiyonu, diş yapısı ve yaralanmalar da röntgen çekme nedenleri arasındadır.', 1, 'Biyomedikal Sinyaller 2 sunumu · Röntgen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-karin', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Böbrek ve mesane taşı gibi sorunların tanısında hangi röntgen türünden yararlanılır?', '{"choices":["Karın röntgeni","Göğüs röntgeni","Baş röntgeni","Diş röntgeni"]}', '{"index":0}', 'Sindirim sistemi belirtileri ile böbrek ve mesane taşında **karın röntgeni** kullanılır.', 2, 'Biyomedikal Sinyaller 2 sunumu · Röntgen', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-tomos', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', '"Tomografi" kelimesinin kökü olan Yunanca "tomos" ne anlama gelir?', '{"choices":["Kesit, dilim","Işık, ışın","Doku, zar","Ses, titreşim"]}', '{"index":0}', 'Tomos **kesim, dilim**, graphein yazmak, kaydetmek demektir. Histos ise doku anlamına gelir.', 2, 'Biyomedikal Sinyaller 2 sunumu · Bilgisayarlı tomografi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-bt-radyasyon', 'biyomedikal', 'bm-u4', 4, 'tf', 'derived', 'BT daha ayrıntılı görüntü elde ettiği için hastanın aldığı radyasyon standart röntgenden daha fazladır.', '{}', '{"value":true}', 'Doğru. BT farklı açılardan çekilen çok sayıda X ışını görüntüsünü birleştirir; radyasyon miktarı röntgenden fazladır.', 2, 'Biyomedikal Sinyaller 2 sunumu · Bilgisayarlı tomografi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-bt-calisma', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'BT cihazında kesit görüntüleri nasıl elde edilir?', '{"choices":["Dönen X ışını kaynağının farklı açılardaki görüntüleri birleştirilir","Protonlar güçlü bir manyetik alana sokulup yaydıkları radyo dalgaları işlenir","Yüksek frekanslı ses dalgalarının dokulardan yansıması ölçülür","Vücuda verilen radyoaktif maddenin yaydığı gama ışınları sayılır"]}', '{"index":0}', 'BT''de motorlu bir **X ışını kaynağı** hastanın etrafında döner; farklı açılardaki görüntüler bilgisayarda birleştirilerek kesitler ve 3B görüntü oluşturulur.', 2, 'Biyomedikal Sinyaller 2 sunumu · Bilgisayarlı tomografi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-bt-kontrast', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'İlaçlı BT çekimlerinde kullanılan kontrast maddeler genellikle ne içerir?', '{"choices":["İyot ya da baryum","Gadolinyum","Fluorodeoksiglukoz","Radyoaktif teknesyum"]}', '{"index":0}', 'BT kontrast maddeleri genellikle **iyot ya da baryum** içerir. MR''da gadolinyum, PET''te FDG kullanılır.', 2, 'Biyomedikal Sinyaller 2 sunumu · Bilgisayarlı tomografi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-mr-proton', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'MR görüntülemede manyetik alana maruz bırakılan ve sinyal kaynağı olan parçacıklar hangileridir?', '{"choices":["Su moleküllerindeki protonlar","Kemiklerdeki kalsiyum iyonları","Kandaki demir atomları","Hücre zarındaki elektronlar"]}', '{"index":0}', 'MR''da devasa mıknatıslar vücuttaki **su moleküllerinin protonlarını** manyetik alana sokar; yayılan radyo dalgaları sinyale dönüştürülür.', 2, 'Biyomedikal Sinyaller 2 sunumu · Manyetik rezonans ve BT ile farkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-mr-kalp-pili', 'biyomedikal', 'bm-u4', 4, 'tf', 'derived', 'Kalp pili ya da bazı metal implantları olan kişilere doktor onayı olmadan MR uygulanmaz.', '{}', '{"value":true}', 'Doğru. Güçlü manyetik alan nedeniyle metal eşyalar çıkarılır, uyumsuz implantı olanlara MR yapılmaz. BT ise metal implantlı hastalarda güvenle kullanılabilir.', 1, 'Biyomedikal Sinyaller 2 sunumu · Manyetik rezonans ve BT ile farkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-mr-ustun', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Aşağıdakilerden hangisinde MR''ın BT''ye göre üstün olduğu kabul edilir?', '{"choices":["Omurilik, bağ ve yumuşak doku ayrıntısı","Acil travma ve kemik kırığı","Hızlı sonuç gereken acil kanama","Metal implantı olan hastanın taranması"]}', '{"index":0}', 'MR **beyin, omurilik, kas, bağ ve yumuşak doku** ayrıntısında üstündür. Kırık, travma, acil kanama ve metal implantlı hastada BT tercih edilir.', 2, 'Biyomedikal Sinyaller 2 sunumu · Manyetik rezonans ve BT ile farkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-mr-sure', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Süre ve cihaz yapısı bakımından BT ile MR''ın farkı için hangisi doğrudur?', '{"choices":["BT birkaç dakikada biter; MR 15–45 dakika sürer","BT 15–45 dakika sürer, MR saniyeler içinde biter","İkisi de yaklaşık 1 saat sürer ve sessizdir","MR açık bir yapıdadır, BT dar ve kapalı bir tüneldir"]}', '{"index":0}', 'BT çok kısa sürer ve geniş açıklıklıdır, acil durumlara uygundur. **MR 15–45 (bazen 60) dakika** sürer, dar ve kapalıdır, yüksek ses çıkarır.', 2, 'Biyomedikal Sinyaller 2 sunumu · Manyetik rezonans ve BT ile farkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-gadolinyum', 'biyomedikal', 'bm-u4', 4, 'fill', 'derived', 'İlaçlı (kontrastlı) MR''da damar yoluyla verilen özel madde ____ bazlıdır.', '{"blanks":1}', '{"blanks":[["gadolinyum","gadolinium"]]}', 'MR kontrast maddesi **gadolinyum** bazlıdır; BT''de iyot bazlı kontrast kullanılır.', 2, 'Biyomedikal Sinyaller 2 sunumu · Manyetik rezonans ve BT ile farkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-usg-gebelik', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Hamilelik takibinde en çok tercih edilen görüntüleme yöntemi hangisidir ve neden?', '{"choices":["Ultrasonografi, çünkü radyasyon içermez","BT, çünkü en hızlı sonuç verir","Röntgen, çünkü en ucuz yöntemdir","PET-CT, çünkü metabolizmayı gösterir"]}', '{"index":0}', '**USG** yüksek frekanslı ses dalgası kullanır, radyasyon içermez ve bilinen yan etkisi yoktur; gebelerde ve bebeklerde güvenlidir.', 1, 'Biyomedikal Sinyaller 2 sunumu · Ultrasonografi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-jel', 'biyomedikal', 'bm-u4', 4, 'tf', 'derived', 'Ultrason incelemesinde bölgeye sürülen jel, ses dalgalarının düzgün iletilmesine yardımcı olur.', '{}', '{"value":true}', 'Doğru. Jel, prob ile deri arasındaki havayı ortadan kaldırarak sesin iletilmesini sağlar.', 1, 'Biyomedikal Sinyaller 2 sunumu · Ultrasonografi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-usg-biyopsi', 'biyomedikal', 'bm-u4', 4, 'tf', 'derived', 'Ultrasonografi biyopsi sırasında iğnenin doğru konumlandırılmasına rehberlik etmek için kullanılabilir.', '{}', '{"value":true}', 'Doğru. Anında görüntü verdiği için biyopsi rehberliğinde kullanılır.', 2, 'Biyomedikal Sinyaller 2 sunumu · Ultrasonografi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-radyofarmasotik', 'biyomedikal', 'bm-u4', 4, 'fill', 'derived', 'Nükleer tıpta hastaya ağızdan ya da enjeksiyonla verilen, radyonüklid içeren ve fizyolojik değişime yol açmayan ilaçlara ____ denir.', '{"blanks":1}', '{"blanks":[["radyofarmasötik","radyofarmasötikler"]]}', 'Bu ilaçlar **radyofarmasötik** olarak adlandırılır.', 1, 'Biyomedikal Sinyaller 2 sunumu · Nükleer tıp, sintigrafi, SPECT ve PET-CT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-fdg', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'PET-CT''de en yaygın kullanılan radyofarmasötik FDG nedir ve kanser hücreleri neden parlak görünür?', '{"choices":["Radyoaktif bir glukoz türevidir; metabolizması hızlı hücreler daha çok tutar","Gadolinyum bazlı bir kontrasttır; tümör damarlarında birikir","İyot bazlı bir kontrasttır; kemikte daha çok emilir","Radyoaktif bir protein türevidir; sağlıklı hücreler daha çok tutar"]}', '{"index":0}', 'FDG (fluorodeoksiglukoz) **glukozun radyoaktif bir türevidir**. Kanser hücreleri yüksek metabolizmaları nedeniyle FDG''yi daha çok tutar ve parlak noktalar olarak görünür.', 2, 'Biyomedikal Sinyaller 2 sunumu · Nükleer tıp, sintigrafi, SPECT ve PET-CT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-petct', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'PET-CT birleşiminde CT bölümünün katkısı nedir?', '{"choices":["Metabolik etkinliğin anatomik olarak nerede olduğunu gösterir","Hücrelerin glukoz tüketimini ölçer","Radyasyon kullanmadan yumuşak dokuyu gösterir","Pozitronları algılayarak metabolizmayı gösterir"]}', '{"index":0}', 'PET işlevi (metabolizmayı), **CT anatomiyi** gösterir; ikisi birleşince etkinliğin yeri, büyüklüğü ve yayılımı anlaşılır.', 2, 'Biyomedikal Sinyaller 2 sunumu · Nükleer tıp, sintigrafi, SPECT ve PET-CT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-spect', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Organın etrafında 180 ya da 360 derecelik açılarla görüntü alarak 3B inceleme sağlayan nükleer tıp yöntemi hangisidir?', '{"choices":["SPECT","Planar yöntem","PET","BT"]}', '{"index":0}', '**SPECT** (tek foton emisyon bilgisayarlı tomografisi) organın etrafında 180° ya da 360° döner. Planar yöntem iki boyutlu görüntü verir.', 3, 'Biyomedikal Sinyaller 2 sunumu · Nükleer tıp, sintigrafi, SPECT ve PET-CT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-fdg-bekleme', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'FDG enjeksiyonundan sonra görüntülemeye geçmeden önce yaklaşık ne kadar beklenir?', '{"choices":["60–90 dakika","5–10 dakika","6–8 saat","24 saat"]}', '{"index":0}', 'Maddenin dağılması ve aktif hücrelerde birikmesi için **60–90 dakika** beklenir; bu sürede hasta sessiz ve hareketsiz kalır.', 2, 'Biyomedikal Sinyaller 2 sunumu · Nükleer tıp, sintigrafi, SPECT ve PET-CT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-pet-pozitron', 'biyomedikal', 'bm-u4', 4, 'tf', 'derived', 'PET''te görüntü, yayılan pozitronların elektronlarla karşılaşmasıyla ortaya çıkan gama ışınlarından elde edilir.', '{}', '{"value":true}', 'Doğru. Pozitron bir elektronla karşılaşınca gama ışınları oluşur; tarayıcı bunları algılayarak 3B görüntü üretir.', 3, 'Biyomedikal Sinyaller 2 sunumu · Nükleer tıp, sintigrafi, SPECT ve PET-CT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-bazlar', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Genomik veriyi oluşturan dört nükleotit bazı hangileridir?', '{"choices":["Adenin, timin, sitozin, guanin","Adenin, urasil, glukoz, guanin","Alanin, timin, sistein, glisin","Adenin, timin, kalsiyum, gadolinyum"]}', '{"index":0}', 'DNA alfabesi dört harften oluşur: adenin (A), timin (T), sitozin (C) ve guanin (G).', 1, 'Biyomedikal Sinyaller 2 sunumu · Genomik ve moleküler veri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-genom-tanim', 'biyomedikal', 'bm-u4', 4, 'fill', 'derived', 'Bir hücrede bulunan DNA molekülünün tamamına ____ adı verilir.', '{"blanks":1}', '{"blanks":[["genom"]]}', '**Genom** bir organizmanın genetik materyalinin tamamıdır; DNA ise molekülün adıdır.', 1, 'Biyomedikal Sinyaller 2 sunumu · Genomik ve moleküler veri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-fark', 'biyomedikal', 'bm-u4', 4, 'tf', 'derived', 'Sunuma göre insanlar genomlarının yaklaşık %1–2''lik kısmındaki harf farklılıklarıyla birbirinden ayrılır.', '{}', '{"value":true}', 'Doğru. Bu küçük farklar hem bizi eşsiz kılar hem de farklı hastalıklara yatkınlık yaratabilir.', 2, 'Biyomedikal Sinyaller 2 sunumu · Genomik ve moleküler veri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-zorluk', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Sunumda genomik veri yönetimindeki iki temel zorluk olarak hangileri verilir?', '{"choices":["Hacim ve gizlilik","Renk ve çözünürlük","Radyasyon ve kontrast","Frekans ve faz"]}', '{"index":0}', 'Veri kümeleri çok büyüktür (**hacim**) ve bireyin sağlık bilgisini taşır (**gizlilik**); kötüye kullanıma karşı kontrollü erişim gerekir.', 2, 'Biyomedikal Sinyaller 2 sunumu · Genomik ve moleküler veri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-ngs', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'DNA ve RNA moleküllerini sıralayarak analiz edilecek genomik veriyi üreten teknolojiye bir örnek hangisidir?', '{"choices":["Yeni nesil dizileme","Histogram eşitleme","Hareketli ortalama","Ayrık dalgacık dönüşümü"]}', '{"index":0}', '**Yeni nesil dizileme** ya da Sanger dizilemesi gibi dizileme teknolojileri DNA ve RNA''yı sıralar.', 2, 'Biyomedikal Sinyaller 2 sunumu · Genomik ve moleküler veri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-he', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Histopatolojide en yaygın kullanılan H&E boyası hücre bölümlerini hangi renklere boyar?', '{"choices":["Çekirdeği mavi-mor, sitoplazmayı pembe","Çekirdeği pembe, sitoplazmayı mavi-mor","Bütün hücreyi siyah-beyaz","Çekirdeği yeşil, sitoplazmayı sarı"]}', '{"index":0}', 'Hematoksilen-eozin boyası **çekirdekleri mavi/mor**, **sitoplazmayı pembe** renge boyar.', 2, 'Biyomedikal Sinyaller 2 sunumu · Histopatolojik görüntüler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-altin', 'biyomedikal', 'bm-u4', 4, 'tf', 'derived', 'Histopatolojik inceleme, tümörün iyi huylu mu kötü huylu mu olduğunu belirlemede altın standarttır.', '{}', '{"value":true}', 'Doğru. Cerrahi sınırların temiz olup olmadığını göstererek tedaviyi de yönlendirir.', 1, 'Biyomedikal Sinyaller 2 sunumu · Histopatolojik görüntüler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u4-mikrotom', 'biyomedikal', 'bm-u4', 4, 'mcq', 'derived', 'Histopatolojik örnekleri saç telinden ince kesitler halinde kesmek için kullanılan alet hangisidir?', '{"choices":["Mikrotom","Tomograf","Sintigraf","Elektrokardiyograf"]}', '{"index":0}', 'Örnekler kimyasallarla sabitlendikten sonra **mikrotom** ile ince kesitler halinde kesilir.', 2, 'Biyomedikal Sinyaller 2 sunumu · Histopatolojik görüntüler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-medyan-cift', 'biyomedikal', 'bm-u5', 5, 'num', 'derived', '7, 3, 9, 1, 5, 8 veri kümesinin medyanı (ortancası) kaçtır?', '{"blanks":1}', '{"blanks":[["6"]]}', 'Sıralı hali 1, 3, 5, 7, 8, 9. Veri sayısı çift olduğu için ortadaki iki sayının ortalaması alınır: $(5+7)/2 = 6$.', 1, 'Önişlemler 1 sunumu · Ortalama, medyan ve mod', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-mod', 'biyomedikal', 'bm-u5', 5, 'num', 'derived', '2, 3, 3, 4, 7, 7, 7, 8 veri kümesinin modu kaçtır?', '{"blanks":1}', '{"blanks":[["7"]]}', 'Mod en çok tekrar eden değerdir; 7 üç kez geçer.', 1, 'Önişlemler 1 sunumu · Ortalama, medyan ve mod', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-mod-coklu', 'biyomedikal', 'bm-u5', 5, 'tf', 'derived', 'Bir veri kümesinin her zaman tek bir modu vardır.', '{}', '{"value":false}', 'Yanlış. Bir veri grubunda birden fazla mod olabilir ya da hiç mod olmayabilir.', 1, 'Önişlemler 1 sunumu · Ortalama, medyan ve mod', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-ortalama', 'biyomedikal', 'bm-u5', 5, 'num', 'derived', '4, 8, 6, 10, 2 veri kümesinin aritmetik ortalaması kaçtır?', '{"blanks":1}', '{"blanks":[["6"]]}', 'Toplam 30, veri sayısı 5: $30/5 = 6$.', 1, 'Önişlemler 1 sunumu · Ortalama, medyan ve mod', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-standart-normal', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Standart normal dağılımın ortalaması ve standart sapması kaçtır?', '{"choices":["Ortalama 0, standart sapma 1","Ortalama 1, standart sapma 0","Ortalama 0, standart sapma 0","Ortalama 1, standart sapma 1"]}', '{"index":0}', 'Standart normal dağılım **ortalaması 0, standart sapması 1** olan teorik dağılımdır.', 1, 'Önişlemler 1 sunumu · Normal dağılım, çarpıklık ve basıklık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-mod-medyan', 'biyomedikal', 'bm-u5', 5, 'tf', 'derived', 'Normal dağılımda mod, medyan ve ortalama birbirine eşittir.', '{}', '{"value":true}', 'Doğru. Dağılım mükemmel simetrik olduğu için üçü de merkezde çakışır.', 1, 'Önişlemler 1 sunumu · Normal dağılım, çarpıklık ve basıklık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-pozitif-carpik', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Skorların çoğu ortalamanın solunda (ortalamadan küçük) birikmişse dağılım nasıl adlandırılır?', '{"choices":["Pozitif çarpık","Negatif çarpık","Leptokurtik","Platikurtik"]}', '{"index":0}', 'Skorların çoğu ortalamanın solundaysa (uzun kuyruk sağdaysa) dağılım **pozitif çarpık**, sağında birikmişse negatif çarpıktır.', 2, 'Önişlemler 1 sunumu · Normal dağılım, çarpıklık ve basıklık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-leptokurtik', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Dağılımın ortasında çok fazla örnek yığılmışsa (dar eğri) bu dağılım nasıl adlandırılır ve kurtosis değeri nasıldır?', '{"choices":["Leptokurtik, pozitif","Platikurtik, negatif","Mezokurtik, sıfır","Leptokurtik, negatif"]}', '{"index":0}', 'Ortada çok örnek: **leptokurtik**, kurtosis **pozitif**. Ortada az örnek: platikurtik, negatif. Normal dağılım mezokurtiktir ve kurtosis değeri sıfırdır.', 2, 'Önişlemler 1 sunumu · Normal dağılım, çarpıklık ve basıklık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-skewness', 'biyomedikal', 'bm-u5', 5, 'fill', 'derived', 'Bir dağılımın simetrik olmama derecesini ölçen istatistiğe çarpıklık ya da İngilizcesiyle ____ denir.', '{"blanks":1}', '{"blanks":[["skewness"]]}', 'Çarpıklık **skewness**, yığılma (basıklık) ise kurtosis olarak bilinir; ikisi bir dağılımın normal olup olmadığını anlamak için kullanılır.', 2, 'Önişlemler 1 sunumu · Normal dağılım, çarpıklık ve basıklık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-adim-sira', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Sunumdaki veri işleme akışında ilk adım hangisidir?', '{"choices":["Ön işlem","Özellik çıkarma","Sınıflandırma","Performans değerlendirme"]}', '{"index":0}', 'Akış: **ön işlem** → parametre belirleme, özellik çıkarma, dönüşüm → sınıflandırma, tanıma → performans değerlendirme.', 1, 'Önişlemler 1 sunumu · Veri işleme adımları ve veri temizleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-amac', 'biyomedikal', 'bm-u5', 5, 'tf', 'derived', 'Veri ön işlemenin amacı, sonraki analiz ve modellemenin hem doğruluğunu hem de verimliliğini artırmaktır.', '{}', '{"value":true}', 'Doğru. Ham veride eksik ve aykırı değerler analizde hatalı sonuçlara yol açabilir.', 1, 'Önişlemler 1 sunumu · Veri işleme adımları ve veri temizleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-yas150', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Bir hasta kaydında yaşın 150 girilmiş olması hangi veri temizleme adımının konusudur?', '{"choices":["Aykırı değer tespiti","Yinelenen kayıtların kaldırılması","Kategorik dönüşüm","Veri entegrasyonu"]}', '{"index":0}', 'Genel eğilimin dışındaki mantık dışı uç değerler **aykırı değer tespiti** ile bulunur, düzeltilir ya da filtrelenir.', 1, 'Önişlemler 1 sunumu · Veri işleme adımları ve veri temizleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-entegrasyon', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Farklı veritabanlarından gelen verilerin tek kümede toplanması ve çelişkili şemaların giderilmesi hangi işlemin konusudur?', '{"choices":["Veri entegrasyonu","Veri azaltma","Veri dönüştürme","Yeniden örnekleme"]}', '{"index":0}', '**Veri entegrasyonu** kaynakları birleştirir ve çakışmaları çözer.', 2, 'Önişlemler 1 sunumu · Veri işleme adımları ve veri temizleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-pca', 'biyomedikal', 'bm-u5', 5, 'fill', 'derived', 'Değişken sayısını azaltan boyut indirgeme yöntemlerine örnek olarak sunumda temel bileşen analizi, kısaltmasıyla ____ verilir.', '{"blanks":1}', '{"blanks":[["pca"]]}', '**PCA** (Principal Component Analysis) veri azaltmada boyut indirgeme için kullanılır.', 2, 'Önişlemler 1 sunumu · Veri işleme adımları ve veri temizleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-iqr-tanim', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'IQR (çeyrekler arası aralık) nasıl hesaplanır?', '{"choices":["$Q_3 - Q_1$","$Q_2 - Q_1$","$Q_3 + Q_1$","$(Q_1 + Q_3)/2$"]}', '{"index":0}', 'IQR verinin orta %50''lik bölümünün genişliğidir: $IQR = Q_3 - Q_1$.', 1, 'Önişlemler 1 sunumu · Aykırı değer ve IQR yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-iqr-hesap', 'biyomedikal', 'bm-u5', 5, 'num', 'derived', '2, 4, 5, 7, 8, 10, 12, 30 veri kümesinde Q1 alt yarının, Q3 üst yarının medyanı olarak alınıyor. IQR kaçtır?', '{"blanks":1}', '{"blanks":[["6.5"]]}', 'Alt yarı 2, 4, 5, 7: $Q_1 = 4{,}5$. Üst yarı 8, 10, 12, 30: $Q_3 = 11$. $IQR = 11 - 4{,}5 = 6{,}5$.', 2, 'Önişlemler 1 sunumu · Aykırı değer ve IQR yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-ust-sinir', 'biyomedikal', 'bm-u5', 5, 'num', 'derived', 'Aynı veri kümesinde (2, 4, 5, 7, 8, 10, 12, 30; $Q_1 = 4{,}5$, $Q_3 = 11$) 1,5 kuralına göre üst sınır kaçtır?', '{"blanks":1}', '{"blanks":[["20.75"]]}', 'Üst sınır $Q_3 + 1{,}5 \times IQR = 11 + 1{,}5 \times 6{,}5 = 20{,}75$. 30 bu sınırın üstünde kaldığı için aykırı değerdir.', 3, 'Önişlemler 1 sunumu · Aykırı değer ve IQR yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-alt-sinir', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'IQR yönteminde alt aykırı değer sınırı hangisidir?', '{"choices":["$Q_1 - 1{,}5 \\times IQR$","$Q_1 + 1{,}5 \\times IQR$","$Q_3 - 1{,}5 \\times IQR$","$Q_2 - 3 \\times IQR$"]}', '{"index":0}', 'Alt sınır $Q_1 - 1{,}5 \times IQR$, üst sınır $Q_3 + 1{,}5 \times IQR$''dir.', 2, 'Önişlemler 1 sunumu · Aykırı değer ve IQR yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-iqr-dayanikli', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'IQR yöntemi neden aşırı uç değerlerden doğrudan etkilenmez?', '{"choices":["Ortalama yerine medyan ve çeyrekleri temel aldığı için","Bütün değerlerin karesini aldığı için","Yalnızca normal dağılımlı verilerde çalıştığı için","Uç değerleri önceden ortalama ile doldurduğu için"]}', '{"index":0}', 'IQR **medyan ve çeyreklere** dayanır; bu yüzden dayanıklıdır ve çarpık dağılımlarda da başarılıdır.', 2, 'Önişlemler 1 sunumu · Aykırı değer ve IQR yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-boxplot', 'biyomedikal', 'bm-u5', 5, 'tf', 'derived', 'Kutu grafiği (box plot), aykırı gözlemleri belirlemek için sınır değerlerin tanımlanabildiği yöntemlerden biridir.', '{}', '{"value":true}', 'Doğru. Kutu Q1''den Q3''e uzanır, bıyıklar 1,5 × IQR sınırlarına kadar gider, dışındaki noktalar aykırıdır.', 1, 'Önişlemler 1 sunumu · Aykırı değer ve IQR yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-minmax', 'biyomedikal', 'bm-u5', 5, 'num', 'derived', 'En küçük değeri 20, en büyük değeri 120 olan bir değişkende 70 değeri min-max normalizasyonuyla kaça dönüşür?', '{"blanks":1}', '{"blanks":[["0.5"]]}', '$x'' = (x - x_{min})/(x_{max} - x_{min}) = (70 - 20)/(120 - 20) = 0{,}5$.', 2, 'Önişlemler 1 sunumu · Min-max normalizasyon, z-skor ve veri dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-zskor', 'biyomedikal', 'bm-u5', 5, 'num', 'derived', 'Ortalaması 50, standart sapması 10 olan bir değişkende 65 değerinin z-skoru kaçtır?', '{"blanks":1}', '{"blanks":[["1.5"]]}', '$z = (x - \mu)/\sigma = (65 - 50)/10 = 1{,}5$. Pozitif z, değerin ortalamanın üstünde olduğunu gösterir.', 2, 'Önişlemler 1 sunumu · Min-max normalizasyon, z-skor ve veri dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-z-negatif', 'biyomedikal', 'bm-u5', 5, 'tf', 'derived', 'Negatif bir z-skoru, veri noktasının ortalamanın altında olduğunu gösterir.', '{}', '{"value":true}', 'Doğru. Sıfır z-skoru değerin ortalamaya eşit olduğunu gösterir.', 1, 'Önişlemler 1 sunumu · Min-max normalizasyon, z-skor ve veri dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-z-sonuc', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Z-skor standardizasyonundan sonra verinin ortalaması ve standart sapması ne olur?', '{"choices":["0 ve 1","0 ile 1 arasında","1 ve 0","Değişmez"]}', '{"index":0}', 'Standardizasyon verinin **ortalamasını 0, standart sapmasını 1** yapar. Değerleri 0–1 aralığına çeken min-max normalizasyonudur.', 1, 'Önişlemler 1 sunumu · Min-max normalizasyon, z-skor ve veri dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-onehot', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Kategorik etiketlerin One-Hot ya da Label Encoding ile sayısal değerlere çevrilmesi hangi işlemdir?', '{"choices":["Veri dönüştürme","Veri temizleme","Veri entegrasyonu","Veri azaltma"]}', '{"index":0}', 'Normalizasyon, standardizasyon ve kategorik dönüşüm (encoding) **veri dönüştürme** başlığındadır.', 2, 'Önişlemler 1 sunumu · Min-max normalizasyon, z-skor ve veri dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-medyan-doldur', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Aykırı değerlerin yoğun olduğu, çarpık dağılımlı sayısal bir sütunda eksik değerler için en güvenli basit yöntem hangisidir?', '{"choices":["Medyan ile doldurma","Ortalama ile doldurma","Mod ile doldurma","Sabit 0 ile doldurma"]}', '{"index":0}', '**Medyan** uç değerlerden etkilenmez. Ortalama normal dağılımlı veriye, mod kategorik veriye uygundur.', 2, 'Önişlemler 1 sunumu · Eksik veri tamamlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-mod-kategorik', 'biyomedikal', 'bm-u5', 5, 'tf', 'derived', 'Mod ile doldurma genellikle kategorik (metinsel) veriler için tercih edilir.', '{}', '{"value":true}', 'Doğru. Kategorik sütunun en sık değeri eksik yere yazılır.', 1, 'Önişlemler 1 sunumu · Eksik veri tamamlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-ffill', 'biyomedikal', 'bm-u5', 5, 'num', 'derived', '5, ?, 9 zaman serisinde eksik değer ileriye doğru doldurma (forward fill) ile kaç olur?', '{"blanks":1}', '{"blanks":[["5"]]}', 'İleriye doğru doldurma eksik değeri kendisinden **hemen önceki** geçerli değerle doldurur: 5. Geriye doğru doldurma 9 verirdi.', 1, 'Önişlemler 1 sunumu · Eksik veri tamamlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-interp', 'biyomedikal', 'bm-u5', 5, 'num', 'derived', 't = 1''de 10, t = 3''te 16 olan bir zaman serisinde t = 2''deki eksik değer doğrusal interpolasyonla kaç olur?', '{"blanks":1}', '{"blanks":[["13"]]}', 'İki bilinen nokta arasına doğru çekilir: $10 + (16 - 10) \times \frac{1}{2} = 13$.', 2, 'Önişlemler 1 sunumu · Eksik veri tamamlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-knn', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Eksik veriye sahip satıra en benzer K satırı bulup onların değerlerinin ortalamasıyla dolduran yöntem hangisidir?', '{"choices":["K-en yakın komşu (K-NN) ile doldurma","Mevsimsel doldurma","Geriye doğru doldurma","Sabit değer atama"]}', '{"index":0}', '**K-NN imputation** diğer sütunlara bakarak en yakın komşuları bulan çok değişkenli bir yöntemdir. MICE ve regresyon da bu gruptadır.', 2, 'Önişlemler 1 sunumu · Eksik veri tamamlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-silme', 'biyomedikal', 'bm-u5', 5, 'tf', 'derived', 'Zaman serilerinde ardışıklık önemli olduğu için eksik verileri doğrudan silmek yerine uygun yöntemlerle doldurmak gerekir.', '{}', '{"value":true}', 'Doğru. Satır silmek zaman eksenini bozar; ileriye/geriye taşıma, interpolasyon ya da mevsimsel doldurma kullanılır.', 2, 'Önişlemler 1 sunumu · Eksik veri tamamlama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-sma', 'biyomedikal', 'bm-u5', 5, 'num', 'derived', '2, 4, 9, 7 dizisine 3 örneklik basit hareketli ortalama uygulanıyor. Son üç örnekten (4, 9, 7) hesaplanan çıkış kaçtır?', '{"blanks":1}', '{"blanks":[["6.67±0.01"]]}', '$(4 + 9 + 7)/3 = 20/3 \approx 6{,}67$.', 2, 'Önişlemler 1 sunumu · Hareketli ortalama, üstel yumuşatma ve medyan filtre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-medyan-filtre', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Sinyaldeki ani ve çok yüksek sıçramaları (tuz-biber gürültüsü) ana sinyali bozmadan temizlemek için hangi filtre en uygundur?', '{"choices":["Medyan filtresi","Basit hareketli ortalama","Yüksek geçiren filtre","Üstel yumuşatma"]}', '{"index":0}', '**Medyan filtresi** penceredeki değerleri sıralayıp ortadakini seçer; tek bir sıçrama medyanı değiştirmez.', 2, 'Önişlemler 1 sunumu · Hareketli ortalama, üstel yumuşatma ve medyan filtre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-medyan-hesap', 'biyomedikal', 'bm-u5', 5, 'num', 'derived', '3 örneklik medyan filtresinin penceresinde 4, 95, 6 değerleri var. Çıkış kaçtır?', '{"blanks":1}', '{"blanks":[["6"]]}', 'Sıralı hali 4, 6, 95; ortadaki değer 6. Ortalama alınsaydı sıçrama çıkışı 35''e çekerdi.', 2, 'Önişlemler 1 sunumu · Hareketli ortalama, üstel yumuşatma ve medyan filtre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-sma-gecikme', 'biyomedikal', 'bm-u5', 5, 'tf', 'derived', 'Basit hareketli ortalama gürültüyü azaltmada etkilidir ama ani değişimlere geç tepki verir (gecikme yaratır).', '{}', '{"value":true}', 'Doğru. Ağırlıklı hareketli ortalama ve üstel yumuşatma güncel verilere daha çok ağırlık vererek trend değişimini daha hızlı yakalar.', 2, 'Önişlemler 1 sunumu · Hareketli ortalama, üstel yumuşatma ve medyan filtre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-ema', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Geçmiş verilere azalan üstel ağırlıklar veren ve en güncel veriye her zaman en yüksek ağırlığı veren yöntem hangisidir?', '{"choices":["Üstel yumuşatma (EMA)","Basit hareketli ortalama (SMA)","Medyan filtresi (median)","Savitzky-Golay filtresi (polinom)"]}', '{"index":0}', '**Üstel yumuşatma** ağırlıkları geçmişe doğru üstel olarak azaltır.', 2, 'Önişlemler 1 sunumu · Hareketli ortalama, üstel yumuşatma ve medyan filtre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-notch', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Biyomedikal sinyale prizlerden karışan 50 Hz şebeke gürültüsünü gidermek için hangi filtre kullanılır?', '{"choices":["Bant söndüren filtre","Bant geçiren filtre","Alçak geçiren filtre","Hareketli ortalama"]}', '{"index":0}', '**Bant söndüren (notch)** filtre yalnızca belirli bir frekanstaki gürültüyü yok eder.', 1, 'Önişlemler 1 sunumu · Alçak, yüksek, bant geçiren ve bant söndüren filtreler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-alfa-izole', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'EEG''den yalnızca 8–12 Hz arasındaki alfa dalgalarını ayırmak için hangi filtre kullanılır?', '{"choices":["Bant geçiren filtre","Bant söndüren filtre","Yüksek geçiren filtre","Medyan filtresi"]}', '{"index":0}', '**Bant geçiren** filtre yalnızca belirli bir frekans aralığını geçirir.', 1, 'Önişlemler 1 sunumu · Alçak, yüksek, bant geçiren ve bant söndüren filtreler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-lpf', 'biyomedikal', 'bm-u5', 5, 'tf', 'derived', 'Alçak geçiren filtre, kesim frekansının altındaki bileşenleri geçirir ve üstündeki hızlı değişimleri sönümler.', '{}', '{"value":true}', 'Doğru. Yüksek geçiren filtre bunun tersini yapar: kesim frekansının altındaki yavaş trendleri zayıflatır.', 1, 'Önişlemler 1 sunumu · Alçak, yüksek, bant geçiren ve bant söndüren filtreler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-kesim', 'biyomedikal', 'bm-u5', 5, 'fill', 'derived', 'Bir filtrenin hangi frekanstan sonra sinyali engelleyeceğini ya da geçireceğini belirleyen sınır değere ____ frekansı denir.', '{"blanks":1}', '{"blanks":[["kesim","cutoff"]]}', '**Kesim frekansı** ($f_c$, cutoff frequency) filtrenin eşik değeridir.', 1, 'Önişlemler 1 sunumu · Alçak, yüksek, bant geçiren ve bant söndüren filtreler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-butterworth', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Geçiş bandında olabildiğince düz (dalgalanmasız) bir frekans yanıtı veren klasik filtre hangisidir?', '{"choices":["Butterworth","Chebyshev","Notch","Medyan"]}', '{"index":0}', '**Butterworth** geçiş bandında düzdür. Chebyshev kesimde daha keskin düşer ama dalgalanma (ripple) yaratır.', 2, 'Önişlemler 1 sunumu · Alçak, yüksek, bant geçiren ve bant söndüren filtreler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-savgol', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Yerel veri noktalarına düşük dereceli polinom uydurarak çalışan ve tepe-dip noktalarının yüksekliğini en iyi koruyan filtre hangisidir?', '{"choices":["Savitzky-Golay","Butterworth","Chebyshev","Basit hareketli ortalama"]}', '{"index":0}', '**Savitzky-Golay** filtresi polinom uydurur; dalga biçimini diğer yumuşatıcılardan daha iyi korur.', 3, 'Önişlemler 1 sunumu · Alçak, yüksek, bant geçiren ve bant söndüren filtreler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-downsampling', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Saniyelik ölçülmüş bir veriyi dakikalık veriye indirgemek hangi işlemdir?', '{"choices":["Downsampling (örneklem azaltma)","Upsampling (örneklem artırma)","Normalizasyon (ölçekleme)","İnterpolasyon (ara değer bulma)"]}', '{"index":0}', '**Downsampling** sıklığı düşürür; ortalama ya da maksimum gibi fonksiyonlarla birleştirir. Upsampling''de boş noktalar interpolasyonla doldurulur.', 1, 'Önişlemler 1 sunumu · Yeniden örnekleme ve zaman serisi özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-lag', 'biyomedikal', 'bm-u5', 5, 'mcq', 'derived', 'Modelin geçmişi görebilmesi için t−1, t−2 anlarındaki değerlerin yeni öznitelik olarak eklenmesine ne denir?', '{"choices":["Gecikme özellikleri","Pencere istatistikleri","Takvim özellikleri","Kategorik dönüşüm"]}', '{"index":0}', '**Gecikme (lag) özellikleri**. Son 5 adımın ortalaması gibi değerler pencere istatistikleri, "hafta sonu mu?" gibi bilgiler takvim özellikleridir.', 2, 'Önişlemler 1 sunumu · Yeniden örnekleme ve zaman serisi özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u5-upsampling', 'biyomedikal', 'bm-u5', 5, 'tf', 'derived', 'Upsampling sırasında oluşan yeni boş noktalar interpolasyon yöntemleriyle doldurulur.', '{}', '{"value":true}', 'Doğru. Örneklem artırmada eksik ara noktalar tahmin edilir.', 1, 'Önişlemler 1 sunumu · Yeniden örnekleme ve zaman serisi özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-restorasyon', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Bulanıklık, odaklama hatası ve sensör bozulmalarını (örneğin Wiener filtresiyle) düzeltip özgün görüntüyü geri kazandırmaya ne denir?', '{"choices":["Görüntü restorasyonu","Görüntü bölütleme","Morfolojik işlem","Geometrik dönüşüm"]}', '{"index":0}', '**Restorasyon** bozulmayı geri alır. Bölütleme görüntüyü parçalara ayırır, morfolojik işlemler ikili görüntüde sınırları şekillendirir.', 2, 'Önişlemler 2 sunumu · Temel görüntü işleme teknikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-morfoloji', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Aşındırma (erosion) ve genişletme (dilation) hangi görüntü işleme grubuna girer?', '{"choices":["Morfolojik işlemler","Geometrik dönüşümler","Histogram işlemleri","Frekans alanı filtreleri"]}', '{"index":0}', 'İkili görüntülerde nesne sınırlarını şekillendiren erosion ve dilation **morfolojik işlemler**dir.', 2, 'Önişlemler 2 sunumu · Temel görüntü işleme teknikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-bolutleme', 'biyomedikal', 'bm-u6', 6, 'tf', 'derived', 'Eşikleme, watershed ve K-Means, görüntüyü anlamlı parçalara ayıran bölütleme (segmentation) teknikleridir.', '{}', '{"value":true}', 'Doğru. Kenar bulmak için ise Sobel ve Canny gibi algoritmalar kullanılır.', 1, 'Önişlemler 2 sunumu · Temel görüntü işleme teknikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-luminosity', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'BT.601 standardındaki ağırlıklı ortalama (luminosity) formülünde en büyük ağırlık hangi kanala verilir ve neden?', '{"choices":["Yeşil; insan gözü yeşile en duyarlı olduğu için","Kırmızı; en uzun dalga boyuna sahip olduğu için","Mavi; insan gözü maviye en duyarlı olduğu için","Üçüne de eşit ağırlık verilir"]}', '{"index":0}', '$Gri = 0{,}299R + 0{,}587G + 0{,}114B$. Göz **yeşile** en duyarlı, maviye en az duyarlıdır.', 2, 'Önişlemler 2 sunumu · Gri seviyeye dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-ortalama-gri', 'biyomedikal', 'bm-u6', 6, 'num', 'derived', 'R = 90, G = 120, B = 150 olan bir pikselin düz ortalama yöntemiyle gri değeri kaçtır?', '{"blanks":1}', '{"blanks":[["120"]]}', '$Gri = (R + G + B)/3 = 360/3 = 120$.', 1, 'Önişlemler 2 sunumu · Gri seviyeye dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-lightness', 'biyomedikal', 'bm-u6', 6, 'num', 'derived', 'R = 200, G = 100, B = 40 olan bir pikselin açıklık (lightness) yöntemiyle gri değeri kaçtır?', '{"blanks":1}', '{"blanks":[["120"]]}', '$Gri = (\max + \min)/2 = (200 + 40)/2 = 120$.', 2, 'Önişlemler 2 sunumu · Gri seviyeye dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-luminosity-hesap', 'biyomedikal', 'bm-u6', 6, 'num', 'derived', 'R = 100, G = 200, B = 50 olan bir pikselin ağırlıklı ortalama ($0{,}299R + 0{,}587G + 0{,}114B$) ile gri değeri yaklaşık kaçtır?', '{"blanks":1}', '{"blanks":[["153.0±0.6"]]}', '$0{,}299 \times 100 + 0{,}587 \times 200 + 0{,}114 \times 50 = 29{,}9 + 117{,}4 + 5{,}7 = 153$.', 3, 'Önişlemler 2 sunumu · Gri seviyeye dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-gri-amac', 'biyomedikal', 'bm-u6', 6, 'tf', 'derived', 'Gri seviyeye dönüştürme, RGB''nin üç kanalını tek bir parlaklık kanalına indirerek işlem yükünü azaltır.', '{}', '{"value":true}', 'Doğru. Özellikle nesne tanıma ve tıbbi görüntülemede veri boyutunu küçültmek için kullanılır.', 1, 'Önişlemler 2 sunumu · Gri seviyeye dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-tuz-biber', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Görüntüdeki tuz-biber gürültüsünü kenarları en iyi koruyarak temizleyen filtre hangisidir?', '{"choices":["Medyan filtre","Ortalama filtre","Gauss filtresi","Yüksek geçiren filtre"]}', '{"index":0}', '**Medyan filtre** komşuları sıralayıp ortadakini seçer; tek tük siyah-beyaz pikseller medyanı etkilemez.', 1, 'Önişlemler 2 sunumu · Görüntüde gürültü azaltma filtreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-ortalama-bulanik', 'biyomedikal', 'bm-u6', 6, 'tf', 'derived', 'Ortalama filtre gürültüyü azaltırken görüntüdeki ince detayları ve kenarları da bulanıklaştırır.', '{}', '{"value":true}', 'Doğru. Her piksel komşularının ortalamasıyla değiştirildiği için keskin geçişler yumuşar.', 1, 'Önişlemler 2 sunumu · Görüntüde gürültü azaltma filtreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-ortalama-hesap', 'biyomedikal', 'bm-u6', 6, 'num', 'derived', '3×3 komşuluktaki değerler 10, 10, 10, 10, 255, 10, 10, 10, 10''dur. 3×3 ortalama filtrenin merkez piksel için çıkışı yaklaşık kaçtır?', '{"blanks":1}', '{"blanks":[["37.2±0.1"]]}', '$(8 \times 10 + 255)/9 = 335/9 \approx 37{,}2$. Medyan filtre aynı komşulukta 10 verirdi.', 2, 'Önişlemler 2 sunumu · Görüntüde gürültü azaltma filtreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-medyan-hesap', 'biyomedikal', 'bm-u6', 6, 'num', 'derived', 'Aynı 3×3 komşuluk (10, 10, 10, 10, 255, 10, 10, 10, 10) için medyan filtrenin çıkışı kaçtır?', '{"blanks":1}', '{"blanks":[["10"]]}', 'Sıralanınca dokuz değerin beşincisi 10''dur; tuz gürültüsü tamamen silinir.', 2, 'Önişlemler 2 sunumu · Görüntüde gürültü azaltma filtreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-zamansal', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Videolarda ardışık kareleri karşılaştırarak zamanla sabit kalmayan rastgele kumlanmaları ayıklayan gürültü azaltma türü hangisidir?', '{"choices":["Zamansal filtre","Uzamsal filtre","Gauss filtresi","Medyan filtre"]}', '{"index":0}', '**Zamansal (temporal)** filtre kareler arasında karşılaştırır; uzamsal filtre tek bir kare içinde çalışır.', 2, 'Önişlemler 2 sunumu · Görüntüde gürültü azaltma filtreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-parlaklik', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Görüntüdeki bütün piksellere sabit bir sayı eklemek neyi değiştirir?', '{"choices":["Parlaklığı","Kontrastı","Çözünürlüğü","Renk kanalı sayısını"]}', '{"index":0}', 'Sabit eklemek ya da çıkarmak **parlaklığı** değiştirir: eklenirse görüntü beyazlaşır, çıkarılırsa kararır.', 1, 'Önişlemler 2 sunumu · Parlaklık, kontrast, histogram ve histogram eşitleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-esitleme-dogrusal', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Parlaklık-kontrast ayarı ile histogram eşitleme arasındaki fark için hangisi doğrudur?', '{"choices":["Parlaklık ve kontrast doğrusal, histogram eşitleme doğrusal olmayan bir işlemdir","İkisi de doğrusal olmayan işlemlerdir","Parlaklık ve kontrast doğrusal olmayan, histogram eşitleme doğrusal bir işlemdir","İkisi de yalnızca renkli görüntülerde uygulanır"]}', '{"index":0}', 'Parlaklık ve kontrast ayarı **doğrusal**, histogram eşitleme **doğrusal olmayan** bir işlemdir.', 2, 'Önişlemler 2 sunumu · Parlaklık, kontrast, histogram ve histogram eşitleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-esitleme', 'biyomedikal', 'bm-u6', 6, 'fill', 'derived', 'Tek bir bölgeye yığılmış gri seviyeleri bütün aralığa homojen biçimde yayarak kontrastı otomatik artıran işleme histogram ____ denir.', '{"blanks":1}', '{"blanks":[["eşitleme"]]}', '**Histogram eşitleme** gizli detayları belirginleştirir; röntgen ve MR görüntülerinde çok kullanılır.', 2, 'Önişlemler 2 sunumu · Parlaklık, kontrast, histogram ve histogram eşitleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-histogram-eksen', 'biyomedikal', 'bm-u6', 6, 'tf', 'derived', '8 bitlik bir görüntünün histogramında yatay eksen 0–255 ton değerlerini, dikey eksen her tondaki piksel sayısını gösterir.', '{}', '{"value":true}', 'Doğru. Sol taraf (0) en koyu, sağ taraf (255) en parlak tonlardır.', 1, 'Önişlemler 2 sunumu · Parlaklık, kontrast, histogram ve histogram eşitleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-karanlik', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Histogramı 0–60 aralığına yığılmış bir görüntü nasıl görünür?', '{"choices":["Karanlık","Çok parlak","Yüksek kontrastlı","Tamamen beyaz"]}', '{"index":0}', 'Piksellerin çoğu düşük tonlarda olduğu için görüntü **karanlık** görünür; eşitleme bu tonları bütün aralığa yayar.', 2, 'Önişlemler 2 sunumu · Parlaklık, kontrast, histogram ve histogram eşitleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-normalize', 'biyomedikal', 'bm-u6', 6, 'num', 'derived', '8 bitlik gri bir görüntüde 51 değerli piksel, 255''e bölünerek [0, 1] aralığına normalleştirilirse kaç olur?', '{"blanks":1}', '{"blanks":[["0.2"]]}', '$51/255 = 0{,}2$.', 1, 'Önişlemler 2 sunumu · Boyutlandırma, yeniden örnekleme ve piksel normalizasyonu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-upsampling-bulanik', 'biyomedikal', 'bm-u6', 6, 'tf', 'derived', 'Yukarı ölçeklendirme (upsampling) yeni pikselleri tahminle ürettiği için genellikle bulanıklaşma ya da kalite kaybı yaratır.', '{}', '{"value":true}', 'Doğru. Aşağı ölçeklendirme (downsampling) ise genellikle kaliteyi korur.', 2, 'Önişlemler 2 sunumu · Boyutlandırma, yeniden örnekleme ve piksel normalizasyonu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-ppi', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Piksel sayısını değiştirmeden yalnızca baskı boyutunu (cm ya da inç) değiştiren işlem neyi etkiler?', '{"choices":["Yalnızca PPI değerini","Toplam piksel sayısını","Renk kanalı sayısını","Gri seviye sayısını"]}', '{"index":0}', 'Yeniden örneklemesiz boyutlandırmada pikseller sabit kalır; yalnızca **PPI** artar ya da azalır.', 2, 'Önişlemler 2 sunumu · Boyutlandırma, yeniden örnekleme ve piksel normalizasyonu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-cnn', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Sunuma göre görüntüleri örneğin 224×224 piksele getirmenin bir amacı nedir?', '{"choices":["CNN''lerin standart giriş katmanına uydurmak","Görüntüyü siyah-beyaz ikili hale getirmek","Renkleri gri tonlara çevirmek","Tuz-biber gürültüsünü gidermek"]}', '{"index":0}', 'Birçok **CNN** sabit boyutlu giriş bekler; görüntüler bu boyuta ölçeklenir.', 1, 'Önişlemler 2 sunumu · Boyutlandırma, yeniden örnekleme ve piksel normalizasyonu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-otsu', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Görüntünün histogramına bakarak en uygun eşik değerini otomatik belirleyen istatistiksel yöntem hangisidir?', '{"choices":["Otsu algoritması","Uyarlamalı eşikleme","Global eşikleme","Histogram eşitleme"]}', '{"index":0}', '**Otsu** eşiği histogramdan otomatik bulur. Uyarlamalı eşiklemede eşik her pikselin yerel çevresine göre hesaplanır.', 2, 'Önişlemler 2 sunumu · Eşikleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-uyarlamali', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Aydınlatmanın her yerde eşit olmadığı bir görüntüde hangi eşikleme türü tercih edilir?', '{"choices":["Uyarlamalı eşikleme","Basit global eşikleme","Sabit 128 eşiği","Ortalama filtre"]}', '{"index":0}', '**Uyarlamalı (adaptive)** eşiklemede eşik yerel çevreye göre dinamik hesaplanır.', 2, 'Önişlemler 2 sunumu · Eşikleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-esik-kural', 'biyomedikal', 'bm-u6', 6, 'num', 'derived', 'Eşik T = 100 ile yapılan ikili eşiklemede (eşikten büyük ya da eşit beyaz = 1, küçük siyah = 0) 100 değerli piksel kaç olur?', '{"blanks":1}', '{"blanks":[["1"]]}', 'Değer eşikten **büyük ya da eşitse** beyaz (1 ya da 255) yapılır.', 1, 'Önişlemler 2 sunumu · Eşikleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-esik-ikili', 'biyomedikal', 'bm-u6', 6, 'tf', 'derived', 'Eşikleme, gri tonlu bir görüntüyü siyah-beyaz (ikili) görüntüye çeviren en temel bölütleme yöntemidir.', '{}', '{"value":true}', 'Doğru. Ön plandaki nesneler arka plandan ayrılır.', 1, 'Önişlemler 2 sunumu · Eşikleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-oteleme', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Bir şekli biçimini ve yönünü değiştirmeden belirli bir doğrultuda kaydırma işlemi hangisidir?', '{"choices":["Öteleme","Dönme","Yansıma","Ölçekleme"]}', '{"index":0}', '**Öteleme (translation)** yalnızca konumu değiştirir.', 1, 'Önişlemler 2 sunumu · Geometrik dönüşümler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-donme-yon', 'biyomedikal', 'bm-u6', 6, 'tf', 'derived', 'Matematikte dönme işleminde saat yönü pozitif, saat yönünün tersi negatif kabul edilir.', '{}', '{"value":false}', 'Yanlış. **Saat yönünün tersi pozitif (+)**, saat yönü negatif (−) kabul edilir.', 2, 'Önişlemler 2 sunumu · Geometrik dönüşümler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-otelemeli-yansima', 'biyomedikal', 'bm-u6', 6, 'mcq', 'derived', 'Bir şeklin önce bir doğruya göre yansıtılıp ardından o doğruya paralel kaydırılmasına ne denir?', '{"choices":["Ötelemeli yansıma","Dönmeli öteleme","Afin ölçekleme","Noktaya göre yansıma"]}', '{"index":0}', 'Birden çok dönüşümün ardı ardına uygulanması bileşke dönüşümdür; bu örneğe **ötelemeli yansıma** denir.', 2, 'Önişlemler 2 sunumu · Geometrik dönüşümler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u6-izometri', 'biyomedikal', 'bm-u6', 6, 'tf', 'derived', 'Öteleme, dönme ve yansıma şeklin boyutunu değiştirmez; bu tür dönüşümlere izometri denir.', '{}', '{"value":true}', 'Doğru. Ölçekleme ise boyutu değiştiren bir dönüşümdür.', 2, 'Önişlemler 2 sunumu · Geometrik dönüşümler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-ortam', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Gözlenen fiziksel değişim uzunluğun bir fonksiyonu ise hangi ortamda tanımlanmıştır?', '{"choices":["Uzaklık ortamı (space domain)","Zaman ortamı (time domain)","Frekans ortamı (frequency domain)","Ölçek ortamı (scale domain)"]}', '{"index":0}', 'Zamanın fonksiyonu zaman ortamında, **uzunluğun fonksiyonu uzaklık ortamında**, frekansa bağlıysa frekans ortamında tanımlanır.', 1, 'Fourier Dönüşümü sunumu · Ortam (domain) ve dönüşüm kavramı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-prizma', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', 'Prizma benzetmesinde beyaz ışık ile prizmadan çıkan renkler aynı bilgiyi taşır; yalnızca olaya bakış açısı farklıdır.', '{}', '{"value":true}', 'Doğru. Renkler (spektrum) birleştirilince yeniden beyaz ışık elde edilir; dönüşüm bilgiyi değiştirmez, başka biçimde gösterir.', 1, 'Fourier Dönüşümü sunumu · Ortam (domain) ve dönüşüm kavramı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-geri', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', 'Sunuma göre iyi bir dönüşüm yönteminin geri dönüşümü de olmalıdır.', '{}', '{"value":true}', 'Doğru. İşlem yapılan sinyal gerektiğinde başlangıçtaki ortama geri dönüştürülebilmelidir.', 1, 'Fourier Dönüşümü sunumu · Ortam (domain) ve dönüşüm kavramı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-donusum-ornek', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Aşağıdakilerden hangisi sunumda dönüşüm yöntemlerine örnek olarak sayılmaz?', '{"choices":["Min-max dönüşümü","Laplace dönüşümü","Hilbert dönüşümü","Z dönüşümü","Hankel dönüşümü"]}', '{"index":0}', 'Sunumdaki örnekler Fourier, **Laplace, Hankel, Hilbert ve Z** dönüşümleridir. Min-max bir ölçekleme (normalizasyon) yöntemidir.', 2, 'Fourier Dönüşümü sunumu · Ortam (domain) ve dönüşüm kavramı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-harmonik', 'biyomedikal', 'bm-u7', 7, 'fill', 'derived', 'Verilen bir $f(t)$ fonksiyonunun Fourier serisine açılmasına ____ analiz denir.', '{"blanks":1}', '{"blanks":[["harmonik"]]}', 'Fourier serisine açılım **harmonik analiz** olarak adlandırılır.', 1, 'Fourier Dönüşümü sunumu · Fourier serisi ve Dirichlet koşulları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-dirichlet', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Aşağıdakilerden hangisi Dirichlet koşullarından biri değildir?', '{"choices":["Fonksiyon bir periyotta sonsuz sayıda maksimum içerebilir","Fonksiyon en azından parçalı süreklidir, süreksizlik sayısı sınırlıdır","Bir periyot içindeki maksimum ve minimum sayısı sonludur","Fonksiyon bir periyot aralığında sonludur"]}', '{"index":0}', 'Dirichlet koşulları: parçalı süreklilik ve sınırlı süreksizlik, bir periyotta **sonlu sayıda** maksimum ve minimum, bir periyotta sonlu olma.', 2, 'Fourier Dönüşümü sunumu · Fourier serisi ve Dirichlet koşulları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-sonsuz-terim', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', 'Bir $f(t)$ fonksiyonu, Fourier serisinde yalnızca sonsuz sayıda terim alındığında tam olarak gösterilebilir.', '{}', '{"value":true}', 'Doğru. Sonlu sayıda terim fonksiyona yalnızca yaklaşır.', 2, 'Fourier Dönüşümü sunumu · Fourier serisi ve Dirichlet koşulları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-euler', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Fourier serisinin karmaşık biçiminde trigonometrik ifadeler yerine hangi özdeşlikler kullanılır?', '{"choices":["Euler formülü","Parseval eşitliği","Bayes kuralı","Pisagor bağıntısı"]}', '{"index":0}', 'Sinüs ve kosinüsler **Euler formülü** ile karmaşık üstellerle yazılır ($e^{j\omega t} = \cos \omega t + j \sin \omega t$).', 2, 'Fourier Dönüşümü sunumu · Fourier serisi ve Dirichlet koşulları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-periyodik-degil', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Bir kez olup tekrarlanmayan, periyodik olmayan sinyallerin frekans içeriği hangi araçla bulunur?', '{"choices":["Fourier integrali (Fourier dönüşümü)","Fourier serisi (harmonik analiz)","Min-max normalizasyonu (ölçekleme)","Medyan filtresi (sıralama)"]}', '{"index":0}', 'Fourier serisi periyodik fonksiyonlar içindir. Periyodik olmayan sinyallerde veri sonsuzda periyodikmiş gibi düşünülür ve **Fourier integrali** kullanılır.', 2, 'Fourier Dönüşümü sunumu · Fourier dönüşümü, Fourier çifti, genlik ve faz spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-cift', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', '$f(t)$ ile onun Fourier dönüşümü $F(\omega)$''ya birlikte Fourier çifti denir.', '{}', '{"value":true}', 'Doğru. İlk bağıntı Fourier dönüşümü, ikincisi ters Fourier dönüşümüdür.', 1, 'Fourier Dönüşümü sunumu · Fourier dönüşümü, Fourier çifti, genlik ve faz spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-genlik', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', '$F(\omega) = a(\omega) + i\,b(\omega)$ ise genlik spektrumu $|F(\omega)|$ nasıl hesaplanır?', '{"choices":["$\\sqrt{a^2 + b^2}$","$a + b$","$\\arctan(b/a)$","$a^2 - b^2$"]}', '{"index":0}', 'Genlik $|F(\omega)| = \sqrt{a(\omega)^2 + b(\omega)^2}$, faz $\phi(\omega) = \arctan(b/a)$''dır.', 2, 'Fourier Dönüşümü sunumu · Fourier dönüşümü, Fourier çifti, genlik ve faz spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-genlik-hesap', 'biyomedikal', 'bm-u7', 7, 'num', 'derived', 'Bir frekanstaki Fourier katsayısı $F = 3 + 4i$ ise o frekanstaki genlik $|F|$ kaçtır?', '{"blanks":1}', '{"blanks":[["5"]]}', '$|F| = \sqrt{3^2 + 4^2} = 5$.', 2, 'Fourier Dönüşümü sunumu · Fourier dönüşümü, Fourier çifti, genlik ve faz spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-faz', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Faz spektrumu $\phi(\omega)$ neyi gösterir?', '{"choices":["O frekanstaki dalganın zaman eksenine göre kaymasını","O frekanstaki dalganın ne kadar güçlü olduğunu","Sinyalin toplam enerjisini","Örnekleme frekansını"]}', '{"index":0}', 'Genlik bileşenin büyüklüğünü, **faz** ise dalganın zaman eksenine göre kaymasını (başlangıç açısını) gösterir.', 2, 'Fourier Dönüşümü sunumu · Fourier dönüşümü, Fourier çifti, genlik ve faz spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-omega', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Açısal frekans $\omega$ ile frekans $f$ arasındaki bağıntı hangisidir?', '{"choices":["$\\omega = 2\\pi f$","$\\omega = f/2\\pi$","$\\omega = \\pi f$","$\\omega = 1/f$"]}', '{"index":0}', '$\omega = 2\pi f$ ve $d\omega = 2\pi\,df$.', 1, 'Fourier Dönüşümü sunumu · Fourier dönüşümü, Fourier çifti, genlik ve faz spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-dogrusal', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', 'Fourier dönüşümü doğrusal bir işlemdir; ortamlardan birinde yapılan bir işlemin diğer ortamda mutlaka bir karşılığı vardır.', '{}', '{"value":true}', 'Doğru. Bilginin iki ortamdaki anlatımı eşit kesinliktedir, ama bazı işlemler bir ortamda daha kolaydır.', 2, 'Fourier Dönüşümü sunumu · Fourier dönüşümü, Fourier çifti, genlik ve faz spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-enerji-yog', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', '$|F(f)|^2$ niceliğine ne ad verilir?', '{"choices":["Enerji yoğunluğu spektrumu","Faz spektrumu","Genlik spektrumu","Ters Fourier dönüşümü"]}', '{"index":0}', '$|F(f)|^2$ birim frekanstaki enerjidir: **enerji yoğunluğu spektrumu**, yaygın adıyla güç spektrumu.', 2, 'Fourier Dönüşümü sunumu · Enerji ve güç yoğunluğu spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-psd-ozilinti', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', 'Güç yoğunluğu spektrumu, zaman dizisinin öz ilişki (otokorelasyon) fonksiyonunun Fourier dönüşümüne eşdeğerdir.', '{}', '{"value":true}', 'Doğru. Genliklerin karelerinin frekansa göre gösterimi güç yoğunluğu spektrumudur.', 3, 'Fourier Dönüşümü sunumu · Enerji ve güç yoğunluğu spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-tek-frekans', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', 'Sunuma göre gerçekte tek bir frekanstaki enerji sıfırdır; $|F(f)|^2$ birim frekans başına enerjiyi verir.', '{}', '{"value":true}', 'Doğru. Bu yüzden ona enerji **yoğunluğu** denir; birimi V²·s/Hz''dir.', 3, 'Fourier Dönüşümü sunumu · Enerji ve güç yoğunluğu spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-fft-neden', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'FFT''nin DFT''ye göre başlıca üstünlüğü nedir?', '{"choices":["Aynı sonucu çok daha hızlı hesaplar","Periyodik olmayan sinyallerde de çalışır","Faz bilgisini atarak yalnızca genliği verir","Görüntüde kenarları korur"]}', '{"index":0}', 'FFT, DFT''yi **verimli (hızlı) hesaplayan** algoritmaların ortak adıdır; DFT eleman sayısı çok olduğunda yavaştır.', 1, 'Fourier Dönüşümü sunumu · Ayrık Fourier dönüşümü (DFT) ve FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-fft-2kuvvet', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', 'Sunuma göre FFT uygulanacak dizinin eleman sayısının 2''nin kuvveti olmasına dikkat edilmelidir.', '{}', '{"value":true}', 'Doğru. Klasik FFT algoritmaları en verimli $N = 2^k$ uzunlukta çalışır.', 2, 'Fourier Dönüşümü sunumu · Ayrık Fourier dönüşümü (DFT) ve FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-dft-ornek', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'N noktalı DFT neye karşılık gelir?', '{"choices":["Fourier dönüşümünün eşit aralıklı N frekanstaki örneklerine","Sinyalin N kez ötelenmiş kopyalarının toplamına","Sinyalin N seviyeli dalgacık ayrıştırmasına","Sinyalin ilk N örneğinin aritmetik ortalamasına"]}', '{"index":0}', 'DFT, Fourier dönüşümünün **eşit aralıklı N frekanstaki örnekleridir**; bu frekanslar z-düzleminde birim çember üzerindedir.', 2, 'Fourier Dönüşümü sunumu · Ayrık Fourier dönüşümü (DFT) ve FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-dft-sonlu', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', 'Ayrık zaman Fourier dönüşümü sürekli bir $\omega$ değişkeninin fonksiyonu olduğu için bilgisayarda doğrudan hesaplanamaz; DFT bu sorunu sınırlı sayıda frekans noktası kullanarak giderir.', '{}', '{"value":true}', 'Doğru. MATLAB gibi ortamlarda diziler sınırlandırılır ve sınırlı sayıda noktada değerlendirilir.', 2, 'Fourier Dönüşümü sunumu · Ayrık Fourier dönüşümü (DFT) ve FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-tek-taraf', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Sunumdaki örnekte L = 1000 noktalı FFT''den tek taraflı genlik spektrumu P1 elde edilirken neden P1''in uçları dışındaki değerler 2 ile çarpılır?', '{"choices":["Negatif frekanslardaki yarı pozitif tarafa eklensin diye","Gürültünün etkisi yarı yarıya azaltılsın diye","Örnekleme frekansı iki katına çıkarılsın diye","Faz spektrumu da genliğe eklenmiş olsun diye"]}', '{"index":0}', 'Gerçel bir sinyalin iki taraflı spektrumunda her bileşenin genliği pozitif ve negatif frekanslara yarı yarıya bölünür. Tek taraflı spektrumda **negatif yarı pozitife eklenir**; 0 Hz ve Nyquist frekansında eşi olmadığı için çarpılmaz.', 3, 'Fourier Dönüşümü sunumu · FFT ile tek taraflı genlik spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-tepe', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', '$S = 0{,}7\sin(2\pi \cdot 50 t) + \sin(2\pi \cdot 120 t)$ sinyalinin tek taraflı genlik spektrumunda hangi tepeler görülür?', '{"choices":["50 Hz''de 0,7 ve 120 Hz''de 1","50 Hz''de 1 ve 120 Hz''de 0,7","70 Hz''de 1,7","0 Hz''de 1,7"]}', '{"index":0}', 'Her sinüs kendi frekansında genliği kadar bir tepe verir: **50 Hz''de 0,7, 120 Hz''de 1**. Gürültü eklenince tepeler tam bu değerlerde çıkmaz.', 2, 'Fourier Dönüşümü sunumu · FFT ile tek taraflı genlik spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-cozunurluk', 'biyomedikal', 'bm-u7', 7, 'num', 'derived', 'Örnekleme frekansı $F_s = 1000$ Hz ve sinyal uzunluğu L = 1000 örnek ise FFT''nin frekans adımı ($F_s / L$) kaç Hz''dir?', '{"blanks":1}', '{"blanks":[["1"]]}', '$f = F_s (0 : L/2)/L$; ardışık frekanslar arası $1000/1000 = 1$ Hz''dir.', 2, 'Fourier Dönüşümü sunumu · FFT ile tek taraflı genlik spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-supurge', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', 'Sunumdaki elektrikli süpürge örneğinde FFT''de 5445 Hz''de görülen büyük tepe fan kanadı geçişinden kaynaklanır; düzensiz aralıklı kanatlar tek bir saf ton yerine daha düşük genlikli, yayılmış tonlar üretir.', '{}', '{"value":true}', 'Doğru. Eşit aralıklı kanatlar tek bir saf ton üretir; aralıklar düzensizleşince enerji geniş bir frekans aralığına dağılır.', 2, 'Fourier Dönüşümü sunumu · FFT ile tek taraflı genlik spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-kenar-yuksek', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Bir görüntüde keskin kenarlar, ince dokular ve ani parlaklık değişimleri spektrumun hangi bölgesindedir?', '{"choices":["Yüksek frekanslarda, merkezden uzakta","Düşük frekanslarda, merkezde","Yalnızca sıfır frekansında","Faz spektrumunun merkezinde"]}', '{"index":0}', 'Keskin değişimler **yüksek frekanslardır** ve merkezin dışına doğru yer alır. Yumuşak geçişler ve geniş alanlar merkezdeki düşük frekanslardadır.', 1, 'Fourier Dönüşümü sunumu · Görüntünün 2B Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-dikey-cizgi', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Dikey çizgilerden oluşan bir görüntünün 2B spektrumunda merkez dışındaki belirgin tepe çiftleri hangi eksen boyunca görülür?', '{"choices":["Yatay eksen boyunca","Dikey eksen boyunca","Köşegen boyunca","Spektrumun her yerine eşit dağılmış"]}', '{"index":0}', 'Dikey çizgilerde parlaklık **x yönünde** periyodik değişir; bu yüzden tepeler **yatay eksen** üzerinde çıkar.', 2, 'Fourier Dönüşümü sunumu · Görüntünün 2B Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-tek-piksel', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', 'Tek bir parlak pikselden (ideal darbe) oluşan görüntünün genlik spektrumu yaklaşık sabittir; bütün frekanslarda eşit genlikli bileşen vardır.', '{}', '{"value":true}', 'Doğru. İdeal darbe bütün frekansları eşit içerir.', 2, 'Fourier Dönüşümü sunumu · Görüntünün 2B Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-jpeg', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Aşağıdakilerden hangisi sunumda görüntünün Fourier dönüşümünün kullanım alanları arasında sayılır?', '{"choices":["JPEG gibi sıkıştırma biçimlerinin temeli","RGB''den gri seviyeye dönüşüm","Otsu ile eşik bulma","Eksik pikselleri mod ile doldurma"]}', '{"index":0}', 'Kullanım alanları: periyodik gürültünün temizlenmesi, kenar ve doku analizi ve **JPEG gibi sıkıştırma**.', 2, 'Fourier Dönüşümü sunumu · Görüntünün 2B Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-simetri', 'biyomedikal', 'bm-u7', 7, 'tf', 'derived', 'Gerçel değerli bütün görüntülerde Fourier dönüşümü orijine göre simetriktir; birinci ile üçüncü çeyrek, ikinci ile dördüncü çeyrek aynıdır.', '{}', '{"value":true}', 'Doğru. Görüntü x eksenine göre de simetrikse (kosinüs görüntüleri gibi) dört katlı simetri oluşur.', 3, 'Fourier Dönüşümü sunumu · Görüntünün 2B Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u7-periyodik-gurultu', 'biyomedikal', 'bm-u7', 7, 'mcq', 'derived', 'Bir görüntüdeki periyodik çizgi biçimli parazit frekans uzayında nasıl görünür ve nasıl temizlenir?', '{"choices":["Belirgin noktalar olarak görünür; bu noktalar silinip ters dönüşüm alınır","Merkezde geniş bir leke olarak görünür; merkez silinip ters dönüşüm alınır","Hiç görünmez; yalnızca medyan filtreyle giderilir","Faz spektrumunda görünür; genlik sıfırlanarak giderilir"]}', '{"index":0}', 'Periyodik parazitler spektrumda **belirgin noktalar** olarak çıkar; bunlar filtrelenir ve **ters Fourier dönüşümü** ile görüntüye dönülür.', 2, 'Fourier Dönüşümü sunumu · Görüntünün 2B Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-duragan', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Fourier dönüşümü hangi tür sinyaller için yeterli kabul edilir?', '{"choices":["Bütün sinyal boyunca aynı spektral özellikleri gösteren durağan sinyaller","Spektral özellikleri zamanla değişen durağan olmayan sinyaller","Yalnızca keskin geçişler içeren kısa süreli sinyaller","Yalnızca görüntü gibi iki boyutlu sinyaller"]}', '{"index":0}', 'Fourier dönüşümü **durağan** sinyaller için yeterlidir. Spektrumu zamanla değişen sinyallerde hangi frekansın ne zaman olduğunu da gösteren bir yönteme gerek vardır.', 1, 'Dalgacık Dönüşümü sunumu · Fourier dönüşümü, STFT ve durağan olmayan sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-stft-pencere', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'STFT''nin çözünürlük sorununun kaynağı nedir?', '{"choices":["Pencere boyunun bütün frekanslarda sabit olması","Pencerenin her frekansta farklı olması","Faz bilgisini hiç hesaplamaması","Yalnızca 2''nin kuvveti uzunlukta çalışması"]}', '{"index":0}', 'STFT''de **pencere bütün frekanslarda sabittir**; bu yüzden zaman-frekans bilgisi sınırlı hassasiyetle elde edilir. Dalgacık dönüşümü pencereyi ölçekle değiştirir.', 2, 'Dalgacık Dönüşümü sunumu · Fourier dönüşümü, STFT ve durağan olmayan sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-alternatif', 'biyomedikal', 'bm-u8', 8, 'tf', 'derived', 'Dalgacık dönüşümü, kısa zamanlı Fourier dönüşümünün çözünürlük sorununu aşmak için bir alternatif olarak ortaya atılmıştır.', '{}', '{"value":true}', 'Doğru. Ölçeklenebilir dalgacıklar işareti farklı çözünürlüklerde inceler.', 1, 'Dalgacık Dönüşümü sunumu · Fourier dönüşümü, STFT ve durağan olmayan sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-dalgacik-ozellik', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Dalgacık dönüşümünde kullanılan dalgacıkları Fourier analizindeki sinüslerden ayıran özellik hangisidir?', '{"choices":["Sınırlı uzunlukta ve sıfır ortalamalı olmaları","Sonsuza dek salınım yapmaları","Yalnızca tek bir frekans içermeleri","Her zaman pozitif değerli olmaları"]}', '{"index":0}', 'Sinüsler sonsuza dek salınır. Dalgacıklar **sınırlı uzunluktadır ve ortalamaları sıfırdır**.', 1, 'Dalgacık Dönüşümü sunumu · Dalgacık ve ana dalgacık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-ana', 'biyomedikal', 'bm-u8', 8, 'fill', 'derived', 'Bütün dalgacıkların farklı skala ve kaydırma değerleriyle türetildiği temel fonksiyona ____ dalgacık denir.', '{"blanks":1}', '{"blanks":[["ana","mother"]]}', '**Ana dalgacık** (mother wavelet) ölçeklenip kaydırılarak bütün dalgacıklar elde edilir.', 1, 'Dalgacık Dönüşümü sunumu · Dalgacık ve ana dalgacık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-mikroskop', 'biyomedikal', 'bm-u8', 8, 'tf', 'derived', 'Dalgacık dönüşümü zaman-ölçek yöntemine dayandığı için işaretin farklı kısımlarına odaklanabilen bir matematik mikroskobuna benzetilir.', '{}', '{"value":true}', 'Doğru. Ölçek değiştirildikçe işaretin kaba ya da ince ayrıntılarına bakılır.', 2, 'Dalgacık Dönüşümü sunumu · Dalgacık ve ana dalgacık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-skala-anlam', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Dalgacık dönüşümünde skala (ölçek) neyi ifade eder?', '{"choices":["Sinyali sıkıştırma ya da genişletmeyi","Sinyali zamanda geciktirmeyi","Sinyalin fazını değiştirmeyi","Sinyali gri seviyeye çevirmeyi"]}', '{"index":0}', 'Skala **sıkıştırma ya da genişletme**dir. Sinyali zamanda kaydırmak öteleme parametresinin işidir.', 1, 'Dalgacık Dönüşümü sunumu · Skala ve öteleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-sin4t', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Sunumdaki örnekte $f(t) = \sin(t)$ için $a = 1$ ise $f(t) = \sin(4t)$ için skala faktörü $a$ kaçtır?', '{"choices":["$1/4$","$4$","$1/2$","$2$"]}', '{"index":0}', '$\sin(2t)$ için $a = 1/2$, $\sin(4t)$ için $a = 1/4$''tür. Küçük skala sıkışmış, yüksek frekanslı dalga demektir.', 2, 'Dalgacık Dönüşümü sunumu · Skala ve öteleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-kucuk-skala', 'biyomedikal', 'bm-u8', 8, 'tf', 'derived', 'Skala küçüldükçe dalgacık sıkışır ve sinyalin daha yüksek frekanslı, hızlı değişen ayrıntılarıyla eşleşir.', '{}', '{"value":true}', 'Doğru. Büyük skala genişlemiş dalgacıktır ve yavaş, düşük frekanslı yapıları yakalar.', 2, 'Dalgacık Dönüşümü sunumu · Skala ve öteleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-oteleme', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Dalgacık dönüşümündeki öteleme (kaydırma, $\tau$) parametresi ne yapar?', '{"choices":["Dalgacığı zaman ekseninde geciktirir ya da öne alır","Dalgacığı zamanda sıkıştırır ya da genişletir","Dalgacığın genliğini ikiye katlar","Dalgacığı frekans ortamına taşır"]}', '{"index":0}', 'Öteleme dalgacığı **zamanda kaydırır**; sıkıştırma ve genişletme skalanın işidir.', 1, 'Dalgacık Dönüşümü sunumu · Skala ve öteleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-cwt-hesap', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Sürekli dalgacık dönüşümünde C katsayıları nasıl elde edilir?', '{"choices":["İşaret, ölçeklenmiş ve kaydırılmış dalgacıkla çarpılıp bütün zaman boyunca toplanır","İşaret sabit bir pencereyle çarpılıp FFT''si alınır","İşaret alçak ve yüksek geçiren filtrelerden geçirilip 2 ile seyreltilir","İşaretin histogramı bütün aralığa yayılır"]}', '{"index":0}', 'CWT''de işaret, **ölçeklenmiş ve ötelenmiş** dalgacıkla çarpılıp zaman boyunca toplanır; sonuç ölçek ve ötelemenin fonksiyonu olan C katsayılarıdır.', 2, 'Dalgacık Dönüşümü sunumu · Sürekli dalgacık dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-cwt-dezavantaj', 'biyomedikal', 'bm-u8', 8, 'tf', 'derived', 'Sürekli dalgacık dönüşümünde katsayılar bütün ölçekler için bütün zaman ekseni boyunca hesaplandığından çok fazla veri ve işlem yükü oluşur.', '{}', '{"value":true}', 'Doğru. Bu dezavantajı gidermek için ayrık dalgacık dönüşümü geliştirilmiştir.', 2, 'Dalgacık Dönüşümü sunumu · Sürekli dalgacık dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-shannon', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Sunumda örnek olarak verilen Shannon dalgacığının ifadesi hangisidir?', '{"choices":["$\\psi(t) = 2\\,\\text{sinc}(2t) - \\text{sinc}(t)$","$\\psi(t) = \\sin(t)$","$\\psi(t) = e^{-t^2}$","$\\psi(t) = 2\\,\\text{sinc}(t) + \\text{sinc}(2t)$"]}', '{"index":0}', 'Shannon dalgacığı $\psi(t) = 2\,\text{sinc}(2t) - \text{sinc}(t)$ biçimindedir.', 3, 'Dalgacık Dönüşümü sunumu · Sürekli dalgacık dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-dyadic', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Ayrık dalgacık dönüşümünde ölçek değerleri nasıl seçilir?', '{"choices":["2''nin kuvvetleri şeklinde","Her tamsayı ölçek için ayrı ayrı","Rastgele seçilmiş ölçeklerle","Yalnızca tek bir sabit ölçekle"]}', '{"index":0}', 'ADD''de ölçekler **dyadic** (2''nin kuvvetleri) seçilir; böylece yalnızca belirli noktalarda katsayı hesaplanır ve işlem azalır.', 2, 'Dalgacık Dönüşümü sunumu · Ayrık dalgacık dönüşümü, yaklaşım ve detay katsayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-mallat', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Ayrık dalgacık dönüşümünü filtrelerle hızlı uygulayan algoritma 1988''de kim tarafından geliştirilmiştir?', '{"choices":["Mallat","Fourier","Shannon","Otsu"]}', '{"index":0}', '**Mallat** algoritması iki kanallı alt bant kodlayıcı olarak bilinen, filtrelerle çalışan pratik bir hızlı dalgacık dönüşümüdür.', 2, 'Dalgacık Dönüşümü sunumu · Ayrık dalgacık dönüşümü, yaklaşım ve detay katsayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-yaklasim', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Ayrık dalgacık dönüşümünde yaklaşım (A) katsayıları hangi filtreyle elde edilir ve neyi taşır?', '{"choices":["Alçak geçiren filtreyle; işaretin ana hatlarını","Yüksek geçiren filtreyle; hızlı değişimleri","Bant söndüren filtreyle; şebeke gürültüsünü","Medyan filtreyle; ani sıçramaları"]}', '{"index":0}', '**A katsayıları alçak geçiren** filtreden gelir ve gerçek işarete benzer. **D katsayıları yüksek geçiren** filtreden gelir ve detayları taşır.', 1, 'Dalgacık Dönüşümü sunumu · Ayrık dalgacık dönüşümü, yaklaşım ve detay katsayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-detay', 'biyomedikal', 'bm-u8', 8, 'fill', 'derived', 'Ayrık dalgacık dönüşümünde yüksek geçiren filtreden gelen ve hızlı değişimleri gösteren katsayılara ____ katsayıları denir.', '{"blanks":1}', '{"blanks":[["detay","ayrıntı","detail"]]}', '**Detay (D)** katsayıları yüksek frekanslı bileşenleri taşır.', 1, 'Dalgacık Dönüşümü sunumu · Ayrık dalgacık dönüşümü, yaklaşım ve detay katsayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-n-yari', 'biyomedikal', 'bm-u8', 8, 'num', 'derived', 'N = 1024 örneklik bir sinyale ayrık dalgacık dönüşümü uygulanıyor. Birinci seviyede kaç detay katsayısı çıkar?', '{"blanks":1}', '{"blanks":[["512"]]}', 'Her seviyede filtreden sonra 2 ile aşağı örnekleme yapılır; birinci seviyede $N/2 = 512$ detay katsayısı çıkar.', 2, 'Dalgacık Dönüşümü sunumu · Ayrık dalgacık dönüşümü, yaklaşım ve detay katsayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-n-3', 'biyomedikal', 'bm-u8', 8, 'num', 'derived', 'N = 1024 örneklik sinyalin üç seviyeli ayrık dalgacık dönüşümünde üçüncü seviyenin detay katsayısı sayısı kaçtır?', '{"blanks":1}', '{"blanks":[["128"]]}', 'D1: N/2 = 512, D2: N/4 = 256, **D3: N/8 = 128**. A3 de 128 katsayıdır; toplam yine N = 1024 olur.', 3, 'Dalgacık Dönüşümü sunumu · Ayrık dalgacık dönüşümü, yaklaşım ve detay katsayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-sonraki', 'biyomedikal', 'bm-u8', 8, 'tf', 'derived', 'Çok seviyeli ayrık dalgacık dönüşümünde her seviyede bir önceki seviyenin detay katsayıları yeniden ayrıştırılır.', '{}', '{"value":false}', 'Yanlış. Her seviyede bir önceki seviyenin **yaklaşım (A)** katsayılarına dönüşüm uygulanır.', 2, 'Dalgacık Dönüşümü sunumu · Ayrık dalgacık dönüşümü, yaklaşım ve detay katsayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-asagi-ornek', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Aşağı örneklemede $y(n) = x(2n)$ alınınca ne olur?', '{"choices":["Eleman sayısı ve örnekleme frekansı yarıya düşer","Eleman sayısı ve örnekleme frekansı iki katına çıkar","Eleman sayısı aynı kalır, genlik yarıya düşer","Eleman sayısı aynı kalır, faz tersine döner"]}', '{"index":0}', 'Her ikinci örnek alınır: **eleman sayısı ve örnekleme frekansı yarıya** iner.', 2, 'Dalgacık Dönüşümü sunumu · Ayrık dalgacık dönüşümü, yaklaşım ve detay katsayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-4bant', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Bir seviyelik 2B ayrık dalgacık dönüşümü görüntüyü kaç alt banda ayırır?', '{"choices":["4","2","3","8"]}', '{"index":0}', 'Satır ve sütunlara filtre uygulanınca **4 alt bant** çıkar: bir yaklaşım (LL) ve üç detay (LH, HL, HH).', 1, 'Dalgacık Dönüşümü sunumu · 2B dalgacık dönüşümü ve gürültü giderme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-ll', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', '2B dalgacık dönüşümünde LL alt bandı neyi içerir?', '{"choices":["Görüntünün düşük frekanslı, kaba yapısını","Yalnızca köşegen ve çapraz detayları","Yalnızca yatay yönlü kenarları ve çizgileri","Yalnızca yüksek frekanslı gürültüyü"]}', '{"index":0}', '**LL** yaklaşım görüntüsüdür; özgün görüntünün küçültülmüş hali gibidir. Bir sonraki seviye LL''ye uygulanır.', 1, 'Dalgacık Dönüşümü sunumu · 2B dalgacık dönüşümü ve gürültü giderme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-hh', 'biyomedikal', 'bm-u8', 8, 'fill', 'derived', '2B dalgacık dönüşümünde köşegen (çapraz) detayları taşıyan alt bant ____ alt bandıdır.', '{"blanks":1}', '{"blanks":[["hh"]]}', '**HH** (High-High) her iki yönde de yüksek geçiren filtreden gelir ve köşegen detayları taşır.', 2, 'Dalgacık Dönüşümü sunumu · 2B dalgacık dönüşümü ve gürültü giderme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-denoise', 'biyomedikal', 'bm-u8', 8, 'mcq', 'derived', 'Sunumdaki örnekte Gauss gürültülü "Boats" görüntüsü dalgacıkla nasıl temizlenir?', '{"choices":["Detay katsayılarına sert eşikleme uygulanıp ters dönüşüm alınır","Yaklaşım katsayıları sıfırlanıp ters dönüşüm alınır","Görüntü gri seviyeye çevrilip histogramı eşitlenir","Bütün katsayılar 255''e bölünür"]}', '{"index":0}', 'Gürültü çoğunlukla küçük detay katsayılarındadır; bunlar **sert eşikleme** (hard thresholding) ile sıfırlanır ve ters dalgacık dönüşümüyle görüntü geri kurulur.', 2, 'Dalgacık Dönüşümü sunumu · 2B dalgacık dönüşümü ve gürültü giderme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('bm-u8-ayrilabilir', 'biyomedikal', 'bm-u8', 8, 'tf', 'derived', 'Görüntüler için ayrılabilir dalgacık dönüşümünde önce satırlara 1B filtre bankası uygulanır, sonra aynı dönüşüm sonucun sütunlarına uygulanır.', '{}', '{"value":true}', 'Doğru. Satır ve sütun filtrelemesi birlikte LL, LH, HL ve HH alt bantlarını verir.', 2, 'Dalgacık Dönüşümü sunumu · 2B dalgacık dönüşümü ve gürültü giderme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-tanim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-terimler';
UPDATE questions SET kavram = 'u1-tanim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-cizim';
UPDATE questions SET kavram = 'u1-tanim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-elektrot-yer';
UPDATE questions SET kavram = 'u1-ileti', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-sa-yer';
UPDATE questions SET kavram = 'u1-ileti', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-ileti-sira';
UPDATE questions SET kavram = 'u1-ileti', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-sa-mss';
UPDATE questions SET kavram = 'u1-ileti', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-depolarizasyon';
UPDATE questions SET kavram = 'u1-dolasim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-kucuk-dolasim';
UPDATE questions SET kavram = 'u1-dolasim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-aort';
UPDATE questions SET kavram = 'u1-dolasim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-mitral';
UPDATE questions SET kavram = 'u1-dolasim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-sistol';
UPDATE questions SET kavram = 'u1-bipolar', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-derivasyon-tanim';
UPDATE questions SET kavram = 'u1-bipolar', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-dii';
UPDATE questions SET kavram = 'u1-bipolar', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-sag-bacak';
UPDATE questions SET kavram = 'u1-bipolar', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-einthoven';
UPDATE questions SET kavram = 'u1-bipolar', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-diii-pozitif';
UPDATE questions SET kavram = 'u1-unipolar', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-goldberger';
UPDATE questions SET kavram = 'u1-unipolar', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-avl';
UPDATE questions SET kavram = 'u1-unipolar', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-augmented';
UPDATE questions SET kavram = 'u1-unipolar', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-v1';
UPDATE questions SET kavram = 'u1-unipolar', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-v-sayisi';
UPDATE questions SET kavram = 'u1-unipolar', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-v3';
UPDATE questions SET kavram = 'u1-dalga', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-qrs-anlam';
UPDATE questions SET kavram = 'u1-dalga', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-t-anlam';
UPDATE questions SET kavram = 'u1-dalga', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-pr';
UPDATE questions SET kavram = 'u1-dalga', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-qrs-sure';
UPDATE questions SET kavram = 'u1-dalga', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-q-normal';
UPDATE questions SET kavram = 'u1-dalga', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-harf';
UPDATE questions SET kavram = 'u1-dalga', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-st';
UPDATE questions SET kavram = 'u1-kagit', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-kucuk-kare';
UPDATE questions SET kavram = 'u1-kagit', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-hiz-hesap';
UPDATE questions SET kavram = 'u1-kagit', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-hiz-hesap-2';
UPDATE questions SET kavram = 'u1-kagit', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-kalibrasyon';
UPDATE questions SET kavram = 'u1-kagit', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-eksen';
UPDATE questions SET kavram = 'u1-ritim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-normal-hiz';
UPDATE questions SET kavram = 'u1-ritim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-bradikardi';
UPDATE questions SET kavram = 'u1-ritim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-av-hiz';
UPDATE questions SET kavram = 'u1-ritim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-eksternal';
UPDATE questions SET kavram = 'u1-olcum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-ekg-frekans';
UPDATE questions SET kavram = 'u1-olcum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-izolasyon';
UPDATE questions SET kavram = 'u1-olcum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u1-bant-sondur';
UPDATE questions SET kavram = 'u2-tanim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-berger';
UPDATE questions SET kavram = 'u2-tanim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-evoked';
UPDATE questions SET kavram = 'u2-tanim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-duz-eeg';
UPDATE questions SET kavram = 'u2-tanim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-epilepsi';
UPDATE questions SET kavram = 'u2-sure', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-rutin';
UPDATE questions SET kavram = 'u2-sure', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-uyku-uyaniklik';
UPDATE questions SET kavram = 'u2-sure', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-gece';
UPDATE questions SET kavram = 'u2-kayit', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-aralik';
UPDATE questions SET kavram = 'u2-kayit', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-1020';
UPDATE questions SET kavram = 'u2-kayit', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-monopolar';
UPDATE questions SET kavram = 'u2-kayit', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-ritmik';
UPDATE questions SET kavram = 'u2-kayit', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-parametre';
UPDATE questions SET kavram = 'u2-bant', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-alfa';
UPDATE questions SET kavram = 'u2-bant', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-delta';
UPDATE questions SET kavram = 'u2-bant', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-beta-aralik';
UPDATE questions SET kavram = 'u2-bant', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-goz-acik';
UPDATE questions SET kavram = 'u2-bant', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-teta';
UPDATE questions SET kavram = 'u2-bant', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-gama';
UPDATE questions SET kavram = 'u2-yas', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-aktivite';
UPDATE questions SET kavram = 'u2-yas', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-yetiskin';
UPDATE questions SET kavram = 'u2-yas', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-yenidogan';
UPDATE questions SET kavram = 'u2-analiz', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-gurultu';
UPDATE questions SET kavram = 'u2-analiz', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-onislem';
UPDATE questions SET kavram = 'u2-analiz', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-ecog';
UPDATE questions SET kavram = 'u2-analiz', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-uyku-eeg';
UPDATE questions SET kavram = 'u2-nrem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-nrem-uyku';
UPDATE questions SET kavram = 'u2-nrem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-evre4';
UPDATE questions SET kavram = 'u2-nrem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-buyume';
UPDATE questions SET kavram = 'u2-nrem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-evre2';
UPDATE questions SET kavram = 'u2-rem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-paradoks';
UPDATE questions SET kavram = 'u2-rem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-rem-dongu';
UPDATE questions SET kavram = 'u2-rem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-atoni';
UPDATE questions SET kavram = 'u2-rem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-rem-kalp';
UPDATE questions SET kavram = 'u2-rem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u2-sabah';
UPDATE questions SET kavram = 'u3-tanim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-enmg';
UPDATE questions SET kavram = 'u3-tanim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-testler';
UPDATE questions SET kavram = 'u3-tanim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-kimlere';
UPDATE questions SET kavram = 'u3-potansiyel', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-iki-potansiyel';
UPDATE questions SET kavram = 'u3-potansiyel', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-muap';
UPDATE questions SET kavram = 'u3-potansiyel', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-kasilma-miktar';
UPDATE questions SET kavram = 'u3-potansiyel', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-istemli';
UPDATE questions SET kavram = 'u3-klinik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-mup-param';
UPDATE questions SET kavram = 'u3-klinik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-mup-tek';
UPDATE questions SET kavram = 'u3-klinik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-hoparlor';
UPDATE questions SET kavram = 'u3-elektrot', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-yuzey';
UPDATE questions SET kavram = 'u3-elektrot', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-farksal';
UPDATE questions SET kavram = 'u3-elektrot', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-konsantrik';
UPDATE questions SET kavram = 'u3-elektrot', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-uyari-yok';
UPDATE questions SET kavram = 'u3-elektrot', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-protez';
UPDATE questions SET kavram = 'u3-elektrot', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-kas-sayisi';
UPDATE questions SET kavram = 'u3-eng', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-eng-tanim';
UPDATE questions SET kavram = 'u3-eng', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-uyari-gerilim';
UPDATE questions SET kavram = 'u3-eng', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-kraniyal';
UPDATE questions SET kavram = 'u3-eng', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-spinal';
UPDATE questions SET kavram = 'u3-eng', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-vagus';
UPDATE questions SET kavram = 'u3-eng', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-iletim-hiz';
UPDATE questions SET kavram = 'u3-segirme', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-segirme-tanim';
UPDATE questions SET kavram = 'u3-segirme', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-segirme-sure';
UPDATE questions SET kavram = 'u3-segirme', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-gecikme';
UPDATE questions SET kavram = 'u3-hastalik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-noropati';
UPDATE questions SET kavram = 'u3-hastalik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-miyastenia';
UPDATE questions SET kavram = 'u3-hastalik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u3-als';
UPDATE questions SET kavram = 'u4-yontem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-islevsel';
UPDATE questions SET kavram = 'u4-yontem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-radyasyonsuz';
UPDATE questions SET kavram = 'u4-yontem', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-tanim';
UPDATE questions SET kavram = 'u4-rontgen', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-kemik-beyaz';
UPDATE questions SET kavram = 'u4-rontgen', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-rontgen-kullanim';
UPDATE questions SET kavram = 'u4-rontgen', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-karin';
UPDATE questions SET kavram = 'u4-bt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-tomos';
UPDATE questions SET kavram = 'u4-bt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-bt-radyasyon';
UPDATE questions SET kavram = 'u4-bt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-bt-calisma';
UPDATE questions SET kavram = 'u4-bt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-bt-kontrast';
UPDATE questions SET kavram = 'u4-mr', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-mr-proton';
UPDATE questions SET kavram = 'u4-mr', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-mr-kalp-pili';
UPDATE questions SET kavram = 'u4-mr', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-mr-ustun';
UPDATE questions SET kavram = 'u4-mr', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-mr-sure';
UPDATE questions SET kavram = 'u4-mr', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-gadolinyum';
UPDATE questions SET kavram = 'u4-usg', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-usg-gebelik';
UPDATE questions SET kavram = 'u4-usg', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-jel';
UPDATE questions SET kavram = 'u4-usg', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-usg-biyopsi';
UPDATE questions SET kavram = 'u4-nukleer', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-radyofarmasotik';
UPDATE questions SET kavram = 'u4-nukleer', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-fdg';
UPDATE questions SET kavram = 'u4-nukleer', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-petct';
UPDATE questions SET kavram = 'u4-nukleer', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-spect';
UPDATE questions SET kavram = 'u4-nukleer', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-fdg-bekleme';
UPDATE questions SET kavram = 'u4-nukleer', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-pet-pozitron';
UPDATE questions SET kavram = 'u4-genom', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-bazlar';
UPDATE questions SET kavram = 'u4-genom', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-genom-tanim';
UPDATE questions SET kavram = 'u4-genom', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-fark';
UPDATE questions SET kavram = 'u4-genom', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-zorluk';
UPDATE questions SET kavram = 'u4-genom', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-ngs';
UPDATE questions SET kavram = 'u4-histo', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-he';
UPDATE questions SET kavram = 'u4-histo', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-altin';
UPDATE questions SET kavram = 'u4-histo', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u4-mikrotom';
UPDATE questions SET kavram = 'u5-merkez', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-medyan-cift';
UPDATE questions SET kavram = 'u5-merkez', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-mod';
UPDATE questions SET kavram = 'u5-merkez', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-mod-coklu';
UPDATE questions SET kavram = 'u5-merkez', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-ortalama';
UPDATE questions SET kavram = 'u5-dagilim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-standart-normal';
UPDATE questions SET kavram = 'u5-dagilim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-mod-medyan';
UPDATE questions SET kavram = 'u5-dagilim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-pozitif-carpik';
UPDATE questions SET kavram = 'u5-dagilim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-leptokurtik';
UPDATE questions SET kavram = 'u5-dagilim', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-skewness';
UPDATE questions SET kavram = 'u5-temizleme', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-adim-sira';
UPDATE questions SET kavram = 'u5-temizleme', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-amac';
UPDATE questions SET kavram = 'u5-temizleme', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-yas150';
UPDATE questions SET kavram = 'u5-temizleme', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-entegrasyon';
UPDATE questions SET kavram = 'u5-temizleme', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-pca';
UPDATE questions SET kavram = 'u5-iqr', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-iqr-tanim';
UPDATE questions SET kavram = 'u5-iqr', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-iqr-hesap';
UPDATE questions SET kavram = 'u5-iqr', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-ust-sinir';
UPDATE questions SET kavram = 'u5-iqr', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-alt-sinir';
UPDATE questions SET kavram = 'u5-iqr', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-iqr-dayanikli';
UPDATE questions SET kavram = 'u5-iqr', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-boxplot';
UPDATE questions SET kavram = 'u5-olcek', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-minmax';
UPDATE questions SET kavram = 'u5-olcek', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-zskor';
UPDATE questions SET kavram = 'u5-olcek', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-z-negatif';
UPDATE questions SET kavram = 'u5-olcek', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-z-sonuc';
UPDATE questions SET kavram = 'u5-olcek', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-onehot';
UPDATE questions SET kavram = 'u5-eksik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-medyan-doldur';
UPDATE questions SET kavram = 'u5-eksik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-mod-kategorik';
UPDATE questions SET kavram = 'u5-eksik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-ffill';
UPDATE questions SET kavram = 'u5-eksik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-interp';
UPDATE questions SET kavram = 'u5-eksik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-knn';
UPDATE questions SET kavram = 'u5-eksik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-silme';
UPDATE questions SET kavram = 'u5-zaman-filtre', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-sma';
UPDATE questions SET kavram = 'u5-zaman-filtre', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-medyan-filtre';
UPDATE questions SET kavram = 'u5-zaman-filtre', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-medyan-hesap';
UPDATE questions SET kavram = 'u5-zaman-filtre', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-sma-gecikme';
UPDATE questions SET kavram = 'u5-zaman-filtre', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-ema';
UPDATE questions SET kavram = 'u5-frekans-filtre', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-notch';
UPDATE questions SET kavram = 'u5-frekans-filtre', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-alfa-izole';
UPDATE questions SET kavram = 'u5-frekans-filtre', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-lpf';
UPDATE questions SET kavram = 'u5-frekans-filtre', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-kesim';
UPDATE questions SET kavram = 'u5-frekans-filtre', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-butterworth';
UPDATE questions SET kavram = 'u5-frekans-filtre', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-savgol';
UPDATE questions SET kavram = 'u5-ornekleme', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-downsampling';
UPDATE questions SET kavram = 'u5-ornekleme', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-lag';
UPDATE questions SET kavram = 'u5-ornekleme', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u5-upsampling';
UPDATE questions SET kavram = 'u6-teknik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-restorasyon';
UPDATE questions SET kavram = 'u6-teknik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-morfoloji';
UPDATE questions SET kavram = 'u6-teknik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-bolutleme';
UPDATE questions SET kavram = 'u6-gri', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-luminosity';
UPDATE questions SET kavram = 'u6-gri', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-ortalama-gri';
UPDATE questions SET kavram = 'u6-gri', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-lightness';
UPDATE questions SET kavram = 'u6-gri', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-luminosity-hesap';
UPDATE questions SET kavram = 'u6-gri', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-gri-amac';
UPDATE questions SET kavram = 'u6-gurultu', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-tuz-biber';
UPDATE questions SET kavram = 'u6-gurultu', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-ortalama-bulanik';
UPDATE questions SET kavram = 'u6-gurultu', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-ortalama-hesap';
UPDATE questions SET kavram = 'u6-gurultu', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-medyan-hesap';
UPDATE questions SET kavram = 'u6-gurultu', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-zamansal';
UPDATE questions SET kavram = 'u6-histogram', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-parlaklik';
UPDATE questions SET kavram = 'u6-histogram', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-esitleme-dogrusal';
UPDATE questions SET kavram = 'u6-histogram', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-esitleme';
UPDATE questions SET kavram = 'u6-histogram', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-histogram-eksen';
UPDATE questions SET kavram = 'u6-histogram', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-karanlik';
UPDATE questions SET kavram = 'u6-boyut', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-normalize';
UPDATE questions SET kavram = 'u6-boyut', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-upsampling-bulanik';
UPDATE questions SET kavram = 'u6-boyut', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-ppi';
UPDATE questions SET kavram = 'u6-boyut', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-cnn';
UPDATE questions SET kavram = 'u6-esik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-otsu';
UPDATE questions SET kavram = 'u6-esik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-uyarlamali';
UPDATE questions SET kavram = 'u6-esik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-esik-kural';
UPDATE questions SET kavram = 'u6-esik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-esik-ikili';
UPDATE questions SET kavram = 'u6-geometrik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-oteleme';
UPDATE questions SET kavram = 'u6-geometrik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-donme-yon';
UPDATE questions SET kavram = 'u6-geometrik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-otelemeli-yansima';
UPDATE questions SET kavram = 'u6-geometrik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u6-izometri';
UPDATE questions SET kavram = 'u7-ortam', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-ortam';
UPDATE questions SET kavram = 'u7-ortam', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-prizma';
UPDATE questions SET kavram = 'u7-ortam', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-geri';
UPDATE questions SET kavram = 'u7-ortam', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-donusum-ornek';
UPDATE questions SET kavram = 'u7-seri', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-harmonik';
UPDATE questions SET kavram = 'u7-seri', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-dirichlet';
UPDATE questions SET kavram = 'u7-seri', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-sonsuz-terim';
UPDATE questions SET kavram = 'u7-seri', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-euler';
UPDATE questions SET kavram = 'u7-donusum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-periyodik-degil';
UPDATE questions SET kavram = 'u7-donusum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-cift';
UPDATE questions SET kavram = 'u7-donusum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-genlik';
UPDATE questions SET kavram = 'u7-donusum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-genlik-hesap';
UPDATE questions SET kavram = 'u7-donusum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-faz';
UPDATE questions SET kavram = 'u7-donusum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-omega';
UPDATE questions SET kavram = 'u7-donusum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-dogrusal';
UPDATE questions SET kavram = 'u7-enerji', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-enerji-yog';
UPDATE questions SET kavram = 'u7-enerji', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-psd-ozilinti';
UPDATE questions SET kavram = 'u7-enerji', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-tek-frekans';
UPDATE questions SET kavram = 'u7-dft', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-fft-neden';
UPDATE questions SET kavram = 'u7-dft', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-fft-2kuvvet';
UPDATE questions SET kavram = 'u7-dft', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-dft-ornek';
UPDATE questions SET kavram = 'u7-dft', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-dft-sonlu';
UPDATE questions SET kavram = 'u7-spektrum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-tek-taraf';
UPDATE questions SET kavram = 'u7-spektrum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-tepe';
UPDATE questions SET kavram = 'u7-spektrum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-cozunurluk';
UPDATE questions SET kavram = 'u7-spektrum', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-supurge';
UPDATE questions SET kavram = 'u7-goruntu', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-kenar-yuksek';
UPDATE questions SET kavram = 'u7-goruntu', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-dikey-cizgi';
UPDATE questions SET kavram = 'u7-goruntu', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-tek-piksel';
UPDATE questions SET kavram = 'u7-goruntu', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-jpeg';
UPDATE questions SET kavram = 'u7-goruntu', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-simetri';
UPDATE questions SET kavram = 'u7-goruntu', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u7-periyodik-gurultu';
UPDATE questions SET kavram = 'u8-stft', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-duragan';
UPDATE questions SET kavram = 'u8-stft', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-stft-pencere';
UPDATE questions SET kavram = 'u8-stft', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-alternatif';
UPDATE questions SET kavram = 'u8-dalgacik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-dalgacik-ozellik';
UPDATE questions SET kavram = 'u8-dalgacik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-ana';
UPDATE questions SET kavram = 'u8-dalgacik', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-mikroskop';
UPDATE questions SET kavram = 'u8-skala', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-skala-anlam';
UPDATE questions SET kavram = 'u8-skala', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-sin4t';
UPDATE questions SET kavram = 'u8-skala', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-kucuk-skala';
UPDATE questions SET kavram = 'u8-skala', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-oteleme';
UPDATE questions SET kavram = 'u8-cwt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-cwt-hesap';
UPDATE questions SET kavram = 'u8-cwt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-cwt-dezavantaj';
UPDATE questions SET kavram = 'u8-cwt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-shannon';
UPDATE questions SET kavram = 'u8-dwt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-dyadic';
UPDATE questions SET kavram = 'u8-dwt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-mallat';
UPDATE questions SET kavram = 'u8-dwt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-yaklasim';
UPDATE questions SET kavram = 'u8-dwt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-detay';
UPDATE questions SET kavram = 'u8-dwt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-n-yari';
UPDATE questions SET kavram = 'u8-dwt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-n-3';
UPDATE questions SET kavram = 'u8-dwt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-sonraki';
UPDATE questions SET kavram = 'u8-dwt', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-asagi-ornek';
UPDATE questions SET kavram = 'u8-2d', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-4bant';
UPDATE questions SET kavram = 'u8-2d', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-ll';
UPDATE questions SET kavram = 'u8-2d', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-hh';
UPDATE questions SET kavram = 'u8-2d', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-denoise';
UPDATE questions SET kavram = 'u8-2d', yedek = 0, etiketler = 'sunum' WHERE id = 'bm-u8-ayrilabilir';
