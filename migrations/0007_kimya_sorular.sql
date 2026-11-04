-- Bu dosya scripts/sorular-sql.ts ile icerik/kimya/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-madde-karisim', 'kimya', 'Madde, karışımlar, fiziksel ve kimyasal olaylar', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-ayirma', 'kimya', 'Karışımları ayırma yöntemleri', 1, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-olcme-birim', 'kimya', 'Ölçme, birimler ve sıcaklık ölçekleri', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-kimya-kanunlari', 'kimya', 'Kimya kanunları', 2, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-atom-modelleri', 'kimya', 'Atom modelleri', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-kuantum', 'kimya', 'Işık, De Broglie ve kuantum sayıları', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-elektron-dizilimi', 'kimya', 'Elektron dizilimi kuralları', 4, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-periyodik-tablo', 'kimya', 'Periyodik tabloda yer bulma', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-periyodik-ozellikler', 'kimya', 'Periyodik özellikler', 5, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-mol', 'kimya', 'Mol kavramı ve Avogadro sayısı', 6, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-kimyasal-bag', 'kimya', 'Kimyasal bağ türleri', 7, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-molekul-geometrisi', 'kimya', 'Hibritleşme ve molekül geometrisi', 7, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-molekuller-arasi', 'kimya', 'Moleküller arası etkileşimler', 8, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-katilar', 'kimya', 'Katılar ve kristal yapı', 8, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-metal-ametal', 'kimya', 'Metaller, ametaller ve yarı iletkenler', 9, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('km-korozyon', 'kimya', 'Korozyon ve korunma yöntemleri', 9, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-01', 'kimya', 'km-atom-modelleri', 3, 'mcq', 'original', 'Atom kavramı ile Dalton atom modelinin

I. Atom parçalanamaz.
II. Bir elementin bütün atomları her yönüyle özdeştir.
III. Farklı elementlerin atomları da farklıdır.

görüşlerinden hangileri zaman içerisinde çürütülmüştür?', '{"choices":["Yalnız I","Yalnız II","I ve III","II ve III","Hepsi"],"sabit":true}', '{"index":0}', 'Atomun proton, nötron ve elektrondan oluştuğunun anlaşılmasıyla "atom parçalanamaz" görüşü çürütüldü. Sınavın anahtarı **Yalnız I**''dir.

> **Not:** İzotopların keşfi, aynı elementin atomlarının kütlece farklı olabileceğini gösterdi; yani II. görüş de çürütüldü. Doğru cevap "I ve II" olurdu, ama bu şık sınavda yoktu.', 2, '2024 vize, 1. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-02', 'kimya', 'km-atom-modelleri', 3, 'mcq', 'original', 'Rutherford, yaptığı deney sonucunda 1911 yılında yeni bir atom modeli geliştirdi. Bu atom modeline göre aşağıdakilerden hangisinin yanlışlığı ortaya konmuştur?', '{"choices":["Elektronlar çekirdek etrafında bulunur ve pozitif yüklere eşit sayıdadır.","Bir atomda pozitif yükün tümü, çekirdek denilen küçük bölgede toplanmıştır.","Atomda + ve − yükler, tıpkı üzümlü kek gibi eşit şekilde dağılmış olarak yer alır.","Elektronun e/m oranı bulunmuştur.","Nötronun varlığı ortaya konmuştur."]}', '{"index":2}', 'Altın levha deneyinde alfa taneciklerinin çoğu sapmadan geçti, çok azı geri döndü. Bu, pozitif yükün küçük bir çekirdekte toplandığını gösterdi ve Thomson''ın "üzümlü kek" modelini çürüttü.', 1, '2024 vize, 2. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-03', 'kimya', 'km-periyodik-ozellikler', 5, 'mcq', 'original', 'Bağ elektronlarını çekebilme kabiliyetinin bir ölçüsüne ne denir?', '{"choices":["Elektron ilgisi","İyonlaşma enerjisi","Elektronegatiflik","Dipol moment","Dielektrik sabiti"]}', '{"index":2}', 'Elektronegatiflik, bir atomun **bağ** elektronlarını kendine çekme yeteneğidir. Elektron ilgisi ise yalıtılmış gaz atomunun elektron aldığında açığa çıkan enerjidir; bağla ilgili değildir.', 1, '2024 vize, 3. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-04', 'kimya', 'km-molekul-geometrisi', 7, 'mcq', 'original', 'Aşağıdaki bileşiklerden hangisinde merkez atom sp³ hibritleşmesi yapmıştır?', '{"choices":["SH₆","PH₅","CH₄","BH₃","BeH₂"]}', '{"index":2}', 'CH₄''te karbon dört bağ yapar ve ortaklanmamış elektron çifti yoktur: sp³, düzgün dörtyüzlü. BeH₂ sp, BH₃ sp², PH₅ sp³d, SH₆ sp³d² hibritleşmesine örnektir.', 1, '2024 vize, 4. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-05', 'kimya', 'km-kimyasal-bag', 7, 'mcq', 'original', 'Kovalent bağ oluşumu için gereken şartlar aşağıdaki seçeneklerin hangisinde doğru olarak verilmiştir?', '{"choices":["Yakınlık, benzer fiziksel özellik, yarıçap uyumu","Valans elektron, orbital enerji düzeyi, simetri","Yakınlık, orbital enerji düzeyi, simetri","Simetri, benzer fiziksel özellik, yarıçap uyumu","Bir çift elektron bulunması, yarıçap uyumu, elektrostatik etkileşim"]}', '{"index":2}', 'Kovalent bağ için orbitallerin örtüşmesi gerekir: atomlar yeterince **yakın** olmalı, örtüşen orbitallerin **enerji düzeyleri** birbirine yakın olmalı ve orbitaller **simetri** bakımından uygun olmalıdır.

> **Not:** Bu üçlü, dersin anlatımına dayanır; ders kitaplarında aynı başlıkla geçmeyebilir.', 2, '2024 vize, 5. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-06', 'kimya', 'km-elektron-dizilimi', 4, 'mcq', 'original', 'Elektronların orbitallere önce teker teker, sonra çiftleşerek yerleşmesini ifade eden kural aşağıdakilerden hangisidir?', '{"choices":["Hund kuralı","Pauli ilkesi","Aufbau ilkesi","De Broglie bağıntısı","Heisenberg ilkesi"]}', '{"index":0}', 'Hund kuralına göre eş enerjili orbitallere elektronlar önce paralel spinle birer birer yerleşir, sonra çiftleşir. Aufbau dolma sırasını, Pauli ise bir orbitalde en çok iki zıt spinli elektron olabileceğini söyler.', 1, '2024 vize, 6. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-07', 'kimya', 'km-atom-modelleri', 3, 'mcq', 'original', 'Bohr atom modelinin

I. Elektron dairesel yörüngelerde hareket eder.
II. Uyarılmış atom temel hâle geçerken foton yayar.
III. Her bir elektronun belirli bir ortalama potansiyel enerjisi vardır.

varsayımlarından hangileri daha sonra çürütülmüştür?', '{"choices":["Yalnız I","Yalnız III","I ve III","II ve III","Hepsi"],"sabit":true}', '{"index":0}', 'Kuantum mekaniği, elektronun belirli bir dairesel yörüngede değil, orbital denen olasılık bölgelerinde bulunduğunu gösterdi. Enerji düzeyleri ve geçişte foton yayılması ise geçerliliğini korur.', 1, '2024 vize, 7. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-08', 'kimya', 'km-kuantum', 4, 'mcq', 'original', '2p⁴ orbital elektronunun sırasıyla baş kuantum sayısı ve yan kuantum sayısı nelerdir?', '{"choices":["2 ve +1/2","2 ve p","2 ve 4","2 ve −1/2; +1/2","p ve 2"]}', '{"index":1}', 'Baş kuantum sayısı katmanı verir: n = 2. Yan (açısal) kuantum sayısı alt kabuğu verir: p alt kabuğu, yani ℓ = 1. Üstteki 4, alt kabuktaki elektron sayısıdır.', 1, '2024 vize, 8. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-09', 'kimya', 'km-molekul-geometrisi', 7, 'mcq', 'original', 'Karbondioksit (CO₂) bileşiğiyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?', '{"choices":["Bileşik apolardır.","Bileşiğin geometrisi açısaldır.","Bileşikte ikili bağ bulunmaktadır.","Bileşikte kovalent bağ vardır.","Bileşikte ortaklanmamış elektron çiftleri vardır."]}', '{"index":1}', 'O=C=O yapısında karbonun üzerinde ortaklanmamış çift yoktur; iki ikili bağ 180° açıyla dizilir ve molekül **doğrusaldır**. Bağ dipolleri birbirini götürdüğü için molekül apolardır. Oksijenlerin üzerinde ortaklanmamış çiftler vardır.', 1, '2024 vize, 9. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-10', 'kimya', 'km-kuantum', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi De Broglie bağıntısını ifade eder?', '{"choices":["Elektron atomdan sonsuz uzaklıkta bulunabilir.","Bir atomda bulunan iki elektronun tüm kuantum sayıları aynı olamaz.","Elektronlar orbitallere enerji düzeyi düşük olandan başlayarak yerleşir.","Bir cismin hızı ve yeri aynı anda tam olarak belirlenemez.","Hızı ve kütlesi olan bir cismin dalga boyu vardır."],"sabit":true}', '{"index":4}', 'De Broglie''ye göre kütlesi m, hızı v olan her cisim $\lambda = h / (m v)$ dalga boyuna sahiptir. B şıkkı Pauli ilkesi, C şıkkı Aufbau ilkesi, D şıkkı Heisenberg belirsizlik ilkesidir.', 1, '2024 vize, 10. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-11', 'kimya', 'km-kimyasal-bag', 7, 'mcq', 'original', 'Aşağıdaki bileşiklerden hangisinde bağ türü diğerlerinden farklıdır? (S: 6A, P: 5A, C: 4A, B: 3A, Be: 2A grubu elementidir.)', '{"choices":["SCl₆","NH₃","CCl₄","BF₃","MgCl₂"]}', '{"index":2}', 'Sınavın anahtarı **CCl₄**''tür.

> **Not:** Bağ türüne bakılırsa farklı olan **MgCl₂**''dir: metal (Mg) ile ametal (Cl) arasında iyonik bağ vardır; diğer dört bileşikte ametaller arasında kovalent bağ bulunur. Anahtardaki CCl₄ seçimi sorunun amacıyla örtüşmüyor; sınavda itiraz edilebilecek bir sorudur.', 2, '2024 vize, 11. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-12', 'kimya', 'km-molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdakilerin hangisinde dipol-dipol etkileşimi bulunur? (Li ve K 1A, Ca 2A grubu elementidir.)', '{"choices":["CaCl₂","KCl","NO","N₂","LiCl"]}', '{"index":2}', 'Dipol-dipol etkileşimi polar moleküller arasında olur. NO, farklı elektronegatiflikte iki ametalden oluşan polar bir moleküldür. CaCl₂, KCl ve LiCl iyonik katılardır; N₂ apolardır ve yalnız London kuvvetleri gösterir.', 1, '2024 vize, 12. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-13', 'kimya', 'km-molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdaki kimyasal etkileşimlerden hangisi en kuvvetlidir?', '{"choices":["Polar kovalent bağ","Van der Waals kuvvetleri","Dipol-dipol etkileşimi","Hidrojen bağı","London kuvvetleri"]}', '{"index":0}', 'Kovalent bağ atomlar arası (güçlü) bir etkileşimdir. Hidrojen bağı, dipol-dipol ve London kuvvetleri moleküller arası (zayıf) etkileşimlerdir; aralarında en güçlüsü hidrojen bağıdır.', 1, '2024 vize, 13. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-14', 'kimya', 'km-molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdakilerin hangisinde moleküller arası bağ en güçlüdür?', '{"choices":["N₂O","N₂","SO₂","CO₂","HF"]}', '{"index":4}', 'HF molekülleri arasında hidrojen bağı vardır; H atomu çok elektronegatif F atomuna bağlıdır. Diğerlerinde dipol-dipol ya da yalnız London kuvvetleri bulunur.', 1, '2024 vize, 14. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-15', 'kimya', 'km-kuantum', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi De Broglie dalga bağıntısını ifade eder?', '{"choices":["$E = mc^2$","$M = n / V$","$\\lambda = h / (m \\cdot c)$","$PV = nRT$","$n = m / M_A$"]}', '{"index":2}', 'De Broglie dalga boyu, Planck sabitinin cismin momentumuna bölümüdür.

> **Not:** Bağıntının doğru yazımı $\lambda = h / (m v)$''dir; buradaki v cismin hızıdır. Şıkta ışık hızı c''ye benzeyen harf, hızı gösterir.', 1, '2024 vize, 15. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-16', 'kimya', 'km-kuantum', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi bir kuantum sayısı değildir?', '{"choices":["Spin kuantum sayısı","Manyetik kuantum sayısı","Orbital kuantum sayısı","Açısal kuantum sayısı","Baş kuantum sayısı"]}', '{"index":2}', 'Dört kuantum sayısı baş (n), açısal ya da yan (ℓ), manyetik (mℓ) ve spin (ms) kuantum sayılarıdır. Sınavın anahtarı "Orbital kuantum sayısı"dır.

> **Not:** Bazı kitaplar açısal kuantum sayısına "orbital kuantum sayısı" da der. Sınavda bu ad listede ayrı bir sayı yokmuş gibi kullanılmıştır.', 2, '2024 vize, 16. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-17', 'kimya', 'km-molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdaki bileşiklerden hangisinin hidrojen bağı yapması beklenmez?', '{"choices":["HF","H₂O","NH₃","CH₄","Hiçbiri"],"sabit":true}', '{"index":3}', 'Hidrojen bağı için H atomunun F, O ya da N''ye bağlı olması gerekir. CH₄''te H karbona bağlıdır ve C-H bağı yeterince polar değildir.', 1, '2024 vize, 17. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-18', 'kimya', 'km-kuantum', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi De Broglie bağıntısını ifade eder?', '{"choices":["$E = mc^2$","$E = h c / \\lambda$","$mc^2 = h c / \\lambda$","$PV = nRT$","$\\lambda = h c^2$"]}', '{"index":0}', 'Sınavın anahtarı $E = mc^2$''dir.

> **Not:** $E = mc^2$ Einstein''ın kütle-enerji bağıntısıdır. De Broglie, bunu fotonun enerjisi $E = h c / \lambda$ ile eşitleyerek $mc^2 = h c / \lambda$ bağıntısına, oradan da $\lambda = h / (m c)$ sonucuna ulaşmıştır. Bu yüzden De Broglie bağıntısına en uygun şık $mc^2 = h c / \lambda$''dır.', 2, '2024 vize, 18. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-19', 'kimya', 'km-katilar', 8, 'mcq', 'original', 'Katıların yoğunluğu aşağıdaki formüllerden hangisiyle hesaplanabilir? ($M_A$: mol kütlesi, n: birim hücredeki tanecik sayısı, N: Avogadro sayısı, a: birim hücre kenar uzunluğu)', '{"choices":["$d = M_A \\cdot n / (N \\cdot a^3)$","$d = 4 n N / (3 \\pi r^3)$","$d = a^3 N / n$","$d = M_A \\cdot n / (\\pi r^3)$","$d = n / (N \\pi r^3)$"]}', '{"index":0}', 'Birim hücrenin kütlesi, içindeki n taneciğin kütlesidir: $n \cdot M_A / N$. Hacmi ise kübik hücrede $a^3$''tür. Yoğunluk kütlenin hacme oranıdır.', 2, '2024 vize, 19. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-20', 'kimya', 'km-metal-ametal', 9, 'mcq', 'original', 'Aşağıdaki kristal örgülerinden hangisi p tipi bir yarı iletkendir? (Sınavda örgüler şekille verilmişti; burada sözle anlatılıyor.)', '{"choices":["Ga atomlarından oluşan örgünün ortasında bir Si atomu","P atomlarından oluşan örgünün ortasında bir Si atomu","Si atomlarından oluşan örgünün ortasında bir P atomu","Ge atomlarından oluşan örgünün ortasında bir P atomu","Si atomlarından oluşan örgünün ortasında bir In atomu"]}', '{"index":4}', 'p tipi yarı iletken, 4A grubundaki bir yarı iletkene (Si, Ge) 3A grubundan bir atom (B, Al, Ga, In) katılarak elde edilir: eksik elektron bir **boşluk** oluşturur. Si örgüsüne 5A grubundan P katılırsa fazladan bir elektron gelir ve n tipi olur.', 1, '2024 vize, 20. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-v24-21', 'kimya', 'km-katilar', 8, 'mcq', 'original', 'Şekilde köşelerinde ve küpün tam ortasında birer tanecik bulunan kübik bir birim hücre verilmiştir. Bu birim hücre tipi ile ilgili

I. Birim hücresinde dört tanecik vardır.
II. Koordinasyon sayısı altıdır.
III. CsCl kristal yapısındadır.
IV. Birim hücresi hacim merkezli kübiktir.

ifadelerinden hangileri doğrudur?', '{"choices":["Yalnız IV","Yalnız III","III ve IV","I ve III","II ve III"]}', '{"index":1}', 'Sınavın anahtarı **Yalnız III**''tür: CsCl yapısında küpün köşelerinde bir tür, merkezinde öteki tür iyon bulunur.

> **Not:** Şekildeki gibi köşelerde ve merkezde tanecik olan hücre **hacim merkezli kübik** görünümündedir; bu durumda IV de doğru sayılabilir ve doğru şık "III ve IV" olur. Böyle bir hücrede tanecik sayısı $8 \cdot \tfrac{1}{8} + 1 = 2$, koordinasyon sayısı 8''dir; I ve II yanlıştır.', 3, '2024 vize, 21. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-02', 'kimya', 'km-olcme-birim', 2, 'mcq', 'original', 'Bir elementin erime sıcaklığı 350 °F olarak verilmiştir. Celsius ölçeğinde bu sıcaklık nedir?', '{"choices":["225 °C","121 °C","157 °C","177 °C","137 °C"]}', '{"index":3}', '$t_C = (t_F - 32) \cdot 5/9 = (350 - 32) \cdot 5/9 = 318 \cdot 5/9 \approx 176{,}7$ °C, yani yaklaşık 177 °C.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 2. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-04', 'kimya', 'km-madde-karisim', 1, 'mcq', 'original', 'Aşağıdakilerden hangisi kimyasal olaydır?', '{"choices":["Alüminyumun yanması","Benzinin buharlaşması","Suyun donması","Şekerin çözünmesi"]}', '{"index":0}', 'Yanmada alüminyum oksijenle tepkimeye girer ve yeni bir madde (Al₂O₃) oluşur. Buharlaşma, donma ve şekerin suda çözünmesi fiziksel olaylardır; maddenin kimliği değişmez.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 4. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-06', 'kimya', 'km-ayirma', 1, 'mcq', 'original', 'Homojen karışımların ayrılmasında aşağıdaki yöntemlerden hangisi kullanılır?', '{"choices":["Mıknatıs ile ayırma","Kaynama noktası farkından ayırma","Elektriklenme ile ayırma","Süzme ile ayırma","Çözünürlük farkı ile ayırma"]}', '{"index":1}', 'Homojen karışımlarda (çözeltilerde) bileşenler gözle ayırt edilemez; süzme ya da mıknatısla ayrılamazlar. Alkol-su gibi sıvı çözeltiler, kaynama noktası farkından yararlanılarak damıtmayla ayrılır.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 6. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-07', 'kimya', 'km-madde-karisim', 1, 'mcq', 'original', 'Aşağıdaki ifadelerden hangisi karışımların özelliklerindendir?', '{"choices":["Erime ve kaynama noktaları sabittir.","Oluşumlarında ve bileşenlerine ayrılmalarında enerji değişimi az olur.","Kimyasal yöntemlerle elementlerine ayrıştırılır.","En az iki elementten oluşmuştur.","Bir araya gelen elementler arasında belirli bir oran vardır."]}', '{"index":1}', 'Karışım oluşurken kimyasal bağ kurulmaz; bu yüzden enerji değişimi azdır ve bileşenler fiziksel yöntemlerle ayrılır. Sabit erime noktası, belirli oran ve kimyasal ayrıştırma bileşiklerin özellikleridir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 2, 'Vize derlemesi, 7. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-09', 'kimya', 'km-periyodik-tablo', 5, 'mcq', 'original', 'Atom numarası 35 olan X elementi periyodik tablonun hangi periyot ve grubunda yer alır?', '{"choices":["5. periyot, 7A grubu","4. periyot, 7A grubu","5. periyot, 4A grubu","4. periyot, 4A grubu","3. periyot, 5A grubu"]}', '{"index":1}', 'Elektron dizilimi $1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,4s^2\,3d^{10}\,4p^5$''tir. En büyük baş kuantum sayısı 4 olduğundan 4. periyottadır; değerlik katmanında $4s^2\,4p^5$ yani 7 elektron olduğundan 7A grubundadır (brom).

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 9. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-10', 'kimya', 'km-ayirma', 1, 'mcq', 'original', 'İyi bir kristallendirme işlemi için aşağıdakilerden hangisi doğrudur?', '{"choices":["Uygun çözücüde ve sıcakta çözmek","Sıcak süzme yapmak","Soğuk süzme yapmak","Elde edilen kristalleri uygun çözücüde yıkamak","Hepsi"],"sabit":true}', '{"index":4}', 'Kristallendirmede katı uygun çözücüde sıcakta çözülür, çözünmeyen safsızlıklar sıcak süzmeyle ayrılır, çözelti soğutulup oluşan kristaller soğuk süzmeyle alınır ve az miktarda soğuk çözücüyle yıkanır. Hepsi işlemin adımlarıdır.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 10. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-11', 'kimya', 'km-mol', 6, 'mcq', 'original', '18 g C içeren etil alkol (C₂H₅OH) kaç gramdır? (H = 1, C = 12, O = 16 g/mol)', '{"choices":["33,0","25,3","34,5","38,3","40,4"]}', '{"index":2}', '18 g C = 18 / 12 = 1,5 mol C. Her C₂H₅OH molekülünde 2 C olduğundan 0,75 mol alkol vardır. Mol kütlesi 2·12 + 6·1 + 16 = 46 g/mol; kütle 0,75 · 46 = 34,5 g.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 2, 'Vize derlemesi, 11. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-12', 'kimya', 'km-mol', 6, 'mcq', 'original', '18 g C içeren etil alkolde (C₂H₅OH) kaç tane alkol molekülü vardır? (H = 1, C = 12, O = 16 g/mol)', '{"choices":["4,52 × 10²³","4,15 × 10²²","3,33 × 10²³","5,62 × 10²¹"]}', '{"index":0}', '1,5 mol C, 0,75 mol C₂H₅OH demektir. Molekül sayısı 0,75 · 6,02 × 10²³ ≈ 4,52 × 10²³.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 2, 'Vize derlemesi, 12. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-13', 'kimya', 'km-mol', 6, 'mcq', 'original', '18 g C içeren etil alkolde (C₂H₅OH) toplam kaç tane atom vardır? (H = 1, C = 12, O = 16 g/mol)', '{"choices":["3,52 × 10²³","3,83 × 10²³","5,34 × 10²⁴","4,06 × 10²⁴"]}', '{"index":3}', 'Bir C₂H₅OH molekülünde 2 + 6 + 1 = 9 atom vardır. 0,75 mol alkolde 9 · 0,75 = 6,75 mol atom bulunur: 6,75 · 6,02 × 10²³ ≈ 4,06 × 10²⁴.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 3, 'Vize derlemesi, 13. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-15', 'kimya', 'km-molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdakilerden hangisinde hidrojen bağı yoktur?', '{"choices":["H₂O","NH₃","HF","CH₄","Hiçbiri"],"sabit":true}', '{"index":3}', 'Hidrojen bağı için H atomunun F, O ya da N''ye bağlı olması gerekir. CH₄''te H karbona bağlıdır.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 15. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-16', 'kimya', 'km-molekul-geometrisi', 7, 'mcq', 'original', 'Aşağıdaki hibritleşmelerden hangisi düzgün dörtyüzlü (tetrahedral) geometri verir?', '{"choices":["sp","sp²","sp³","dsp²","dsp³"]}', '{"index":2}', 'sp³ hibritleşmesinde dört eş orbital birbirinden en uzak duracak şekilde 109,5° açıyla yönelir: dörtyüzlü. sp doğrusal, sp² düzlem üçgen, dsp² kare düzlem, dsp³ üçgen çift piramit verir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 16. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-17', 'kimya', 'km-molekul-geometrisi', 7, 'mcq', 'original', 'NH₃ molekülünün geometrisi aşağıdakilerden hangisidir?', '{"choices":["Düzlem üçgen","Kare düzlem","Üçgen piramit","Kare piramit","Kırık doğru"],"sabit":true}', '{"index":2}', 'Azotun üç bağ çifti ve bir ortaklanmamış çifti vardır (AX₃E). Elektron çiftleri dörtyüzlü dizilir, ama yalnız atomlara bakıldığında şekil üçgen piramittir; bağ açısı yaklaşık 107°''dir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 17. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-19', 'kimya', 'km-molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdakilerden hangisi moleküller arası bir etkileşimdir?', '{"choices":["Metal bağı","Kovalent bağ","Hidrojen bağı","İyonik bağ","Hiçbiri"],"sabit":true}', '{"index":2}', 'Metal, kovalent ve iyonik bağ atomlar ya da iyonlar arasındaki güçlü bağlardır. Hidrojen bağı ise ayrı moleküller arasında kurulan zayıf bir etkileşimdir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 19. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-22', 'kimya', 'km-korozyon', 9, 'mcq', 'original', 'Aşağıdakilerden hangisi korozyon etkenlerindendir?', '{"choices":["Elektrokimyasal etkenler","Fiziksel etkenler","Çevresel etkenler","Endüstriyel etkenler","Hepsi"],"sabit":true}', '{"index":4}', 'Korozyon; elektrokimyasal tepkimeler, sıcaklık ve gerilme gibi fiziksel koşullar, nem ve tuz gibi çevresel etkenler ile endüstriyel kirleticilerin birlikte etkisiyle oluşur.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 22. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-23', 'kimya', 'km-korozyon', 9, 'mcq', 'original', 'Toprak içinde tren, tramvay, metro gibi raylı taşıtların ve yer altı borularının bulunduğu yerlerde çok şiddetli ve hızlı korozyona yol açan korozyon çeşidi aşağıdakilerden hangisidir?', '{"choices":["Gerilmeli (stress) korozyon","Pullanma (exfoliation) korozyonu","Çukurcuk (pitting) korozyonu","Kaçak akım korozyonu","Galvanik (elektrokimyasal) korozyon"]}', '{"index":3}', 'Raylı sistemlerin elektrik devresinden toprağa kaçan doğru akım, yer altındaki metal borulara girip çıktığı noktalarda boruyu anot yaparak hızla aşındırır. Buna kaçak akım korozyonu denir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 2, 'Vize derlemesi, 23. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-24', 'kimya', 'km-korozyon', 9, 'mcq', 'original', 'Aşağıdakilerden hangisi korozyondan korunma yöntemlerinden değildir?', '{"choices":["Uygun malzeme seçimi","Katodik koruma","Doğru tasarım","Kaplamalar","Eritme"]}', '{"index":4}', 'Malzeme seçimi, katodik koruma, nem tutmayan doğru tasarım ve boya ya da metal kaplamalar korozyonu önler. Eritme bir şekillendirme işlemidir, korunma yöntemi değildir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 24. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-vd-25', 'kimya', 'km-metal-ametal', 9, 'mcq', 'original', 'Aşağıdakilerden hangisi ametallerin kimyasal özelliklerindendir?', '{"choices":["Katı, sıvı ve gaz hâlinde bulunurlar.","Isı ve elektriği iletmezler.","Yoğunlukları düşüktür.","Molekülleri çok atomludur.","Tel ve levha hâline gelemezler."]}', '{"index":3}', 'Fiziksel hâl, iletkenlik, yoğunluk ve işlenebilirlik fiziksel özelliklerdir. Ametallerin kendi aralarında kovalent bağ kurarak çok atomlu moleküller (O₂, P₄, S₈ gibi) oluşturması ise bağ yapmalarıyla ilgili, kimyasal bir özelliktir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 2, 'Vize derlemesi, 25. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-homojen-ornek', 'kimya', 'km-madde-karisim', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi homojen bir karışımdır?', '{"choices":["Tuzlu su","Kum ve su","Zeytinyağı ve su","Granit"]}', '{"index":0}', 'Tuzlu suyun her yerinde aynı bileşim vardır ve tuz gözle ayırt edilemez; bu yüzden homojen karışım, yani çözeltidir. Kum ve su, zeytinyağı ve su ile granitte bileşenler ayırt edilebilir; bunlar heterojendir.', 1, 'Ünite 1, Saf madde, element, bileşik ve karışım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-bilesik-ayrisma', 'kimya', 'km-madde-karisim', 1, 'mcq', 'derived', 'Bir saf madde ısıtılınca iki farklı gaza ayrışıyor. Bu madde için aşağıdakilerden hangisi kesinlikle doğrudur?', '{"choices":["Bir bileşiktir","Bir elementtir","Homojen bir karışımdır","Heterojen bir karışımdır"]}', '{"index":0}', 'Saf madde kimyasal bir değişimle daha basit maddelere ayrışabiliyorsa bileşiktir. Elementler kimyasal yöntemlerle daha basit maddelere ayrılamaz; karışımlar ise saf madde değildir.', 1, 'Ünite 1, Saf madde, element, bileşik ve karışım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-element-tf', 'kimya', 'km-madde-karisim', 1, 'tf', 'derived', 'Element, tek tür atomdan oluşan ve kimyasal yöntemlerle daha basit maddelere ayrılamayan saf maddedir.', '{}', '{"value":true}', 'Doğru. Demir, oksijen ve altın elementtir; bileşikler ise kimyasal yöntemlerle elementlerine ayrılabilir.', 1, 'Ünite 1, Saf madde, element, bileşik ve karışım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-cozelti-fill', 'kimya', 'km-madde-karisim', 1, 'fill', 'derived', 'Homojen karışımlara ____ da denir.', '{"blanks":1}', '{"blanks":[["çözelti","cozelti"]]}', 'Homojen karışımlar çözelti olarak da adlandırılır: tuzlu su, hava, şekerli çay ve pirinç alaşımı birer çözeltidir.', 1, 'Ünite 1, Saf madde, element, bileşik ve karışım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-feS-karisim', 'kimya', 'km-madde-karisim', 1, 'mcq', 'derived', 'Demir tozu ile kükürt tozu karıştırılıp ısıtılmadan bekletiliyor. Bu durum için hangisi doğrudur?', '{"choices":["Karışımdır; demir mıknatısla ayrılabilir","Bileşiktir; demir mıknatısla ayrılamaz","Bileşiktir; demir mıknatısla ayrılabilir","Elementtir; demir mıknatısla ayrılamaz"]}', '{"index":0}', 'Isıtılmadıkça tepkime olmaz; demir ve kükürt kendi özelliklerini koruyan bir karışım oluşturur ve demir mıknatısla geri alınır. Isıtılırsa FeS bileşiği oluşur ve demir artık mıknatısa yapışmaz.', 2, 'Ünite 1, Saf madde, element, bileşik ve karışım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-karisim-kaynama', 'kimya', 'km-madde-karisim', 1, 'tf', 'derived', 'Tuzlu su, saf su gibi sabit bir sıcaklıkta kaynar ve kaynama boyunca sıcaklığı değişmez.', '{}', '{"value":false}', 'Yanlış. Karışımların kaynama noktası sabit değildir. Tuzlu su 100 °C''tan yüksek bir sıcaklıkta kaynamaya başlar ve su buharlaştıkça tuz derişimi arttığı için kaynarken sıcaklığı yükselir.', 2, 'Ünite 1, Karışımların özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-karisim-oran', 'kimya', 'km-madde-karisim', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi bileşiklerin değil, karışımların özelliğidir?', '{"choices":["Bileşenler herhangi bir oranda bir araya gelebilir","Bileşenler belirli bir kütle oranıyla birleşir","Yalnızca kimyasal yöntemlerle ayrıştırılır","Erime noktası belirli ve sabittir"]}', '{"index":0}', 'Karışımlarda bileşenlerin oranı istenildiği gibi değişebilir. Belirli kütle oranı, kimyasal yöntemle ayrışma ve sabit erime noktası bileşiklerin özellikleridir.', 1, 'Ünite 1, Karışımların özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-fizik-cozunme', 'kimya', 'km-madde-karisim', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi fiziksel bir değişimdir?', '{"choices":["Tuzun suda çözünmesi","Demirin paslanması","Sütün ekşimesi","Kâğıdın yanması"]}', '{"index":0}', 'Tuz suda çözündüğünde tuz olarak kalır; su buharlaştırılınca tuz geri alınır. Paslanma, ekşime ve yanmada yeni maddeler oluşur; bunlar kimyasal değişimdir.', 1, 'Ünite 1, Fiziksel ve kimyasal değişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-kimyasal-ipucu', 'kimya', 'km-madde-karisim', 1, 'mcq', 'derived', 'Bir deney tüpünde iki çözelti karıştırıldığında aşağıdaki gözlemlerden hangisi tek başına kimyasal tepkime olduğunu en iyi gösterir?', '{"choices":["Dipte katı bir çökelek oluşması","Karışımın hacminin iki çözeltinin toplamı olması","Karışımın saydam ve renksiz kalması","Tüpün sallanınca karışımın dalgalanması"]}', '{"index":0}', 'Çökelek oluşması, çözeltilerde bulunmayan yeni bir katı maddenin oluştuğunu gösterir. Renk değişimi, gaz çıkışı ve ısı ya da ışık yayılması da kimyasal değişimin ipuçlarıdır. Öteki gözlemler herhangi bir değişime işaret etmez.', 2, 'Ünite 1, Fiziksel ve kimyasal değişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-ozellik-yanicilik', 'kimya', 'km-madde-karisim', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi bir maddenin kimyasal özelliğidir?', '{"choices":["Yanıcılık","Yoğunluk","Kaynama noktası","Renk"]}', '{"index":0}', 'Yanıcılık, maddenin oksijenle tepkimeye girip başka maddelere dönüşme eğilimini anlatır; kimyasal özelliktir. Yoğunluk, kaynama noktası ve renk maddenin kimliği değişmeden ölçülür; fiziksel özelliktir.', 2, 'Ünite 1, Fiziksel ve kimyasal değişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-buharlasma-tf', 'kimya', 'km-madde-karisim', 1, 'tf', 'derived', 'Suyun kaynarken gaz çıkarması kimyasal bir değişimdir, çünkü gaz çıkışı tepkime belirtisidir.', '{}', '{"value":false}', 'Yanlış. Kaynayan suyun çıkardığı gaz su buharıdır; su molekülleri değişmemiştir. Gaz çıkışı kimyasal tepkimenin ipucu olabilir ama tek başına kesin kanıt değildir.', 1, 'Ünite 1, Fiziksel ve kimyasal değişim', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-ayirma-yag-su', 'kimya', 'km-ayirma', 1, 'mcq', 'derived', 'Zeytinyağı ve su karışımını ayırmak için en uygun yöntem hangisidir?', '{"choices":["Ayırma hunisi","Süzme","Mıknatısla ayırma","Kristallendirme"]}', '{"index":0}', 'Zeytinyağı ile su birbirinde çözünmez ve yoğunlukları farklıdır; ayırma hunisinde yağ üstte kalır, alttaki su musluktan akıtılır. Süzme katı tanecikleri, mıknatıs manyetik maddeleri ayırır.', 1, 'Ünite 1, Karışımları ayırma yöntemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-damitma-tuzlu', 'kimya', 'km-ayirma', 1, 'mcq', 'derived', 'Tuzlu sudan saf su elde etmek için hangi yöntem kullanılır?', '{"choices":["Basit damıtma","Süzme","Ayırma hunisi","Mıknatısla ayırma"]}', '{"index":0}', 'Damıtmada su buharlaşıp soğutucuda yoğunlaşır ve kapta saf su toplanır; tuz balonda kalır. Tuz çözündüğü için süzgeçten suyla birlikte geçer.', 1, 'Ünite 1, Karışımları ayırma yöntemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-ayrimsal-alkol', 'kimya', 'km-ayirma', 1, 'mcq', 'derived', 'Su (kaynama noktası 100 °C) ile etil alkolün (78 °C) homojen karışımını en iyi ayıran yöntem hangisidir?', '{"choices":["Ayrımsal damıtma","Süzme","Ayırma hunisi","Mıknatısla ayırma"]}', '{"index":0}', 'İki sıvı birbirinde çözündüğü için süzme ve ayırma hunisi işe yaramaz. Kaynama noktaları yakın olduğundan, basit damıtma yerine kolonlu ayrımsal damıtma kullanılır.', 2, 'Ünite 1, Karışımları ayırma yöntemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-suzme-fill', 'kimya', 'km-ayirma', 1, 'fill', 'derived', 'Kum ile suyun heterojen karışımı en kolay ____ yöntemiyle ayrılır.', '{"blanks":1}', '{"blanks":[["süzme","suzme"]]}', 'Kum suda çözünmez ve süzgeç kâğıdında kalır, su süzgeçten geçer.', 1, 'Ünite 1, Karışımları ayırma yöntemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-mikrnatis-tf', 'kimya', 'km-ayirma', 1, 'tf', 'derived', 'Mıknatısla ayırma, bileşenlerden yalnızca birinin mıknatısa çekildiği karışımlarda kullanılabilir.', '{}', '{"value":true}', 'Doğru. Yöntem manyetik özellik farkını kullanır: demir tozu ile kükürt ya da kum karışımında demir mıknatısa çekilir.', 1, 'Ünite 1, Karışımları ayırma yöntemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-kristal-sicak-suzme', 'kimya', 'km-ayirma', 1, 'mcq', 'derived', 'Kristallendirmede çözünmeyen safsızlıklar neden çözelti henüz sıcakken süzülür?', '{"choices":["Soğursa ürün süzgeç kâğıdında kristallenip kaybolur","Sıcakken safsızlıklar çözeltide çözünür","Soğuk çözelti süzgeç kâğıdını yırtar","Sıcak süzme ürünün erime noktasını düşürür"]}', '{"index":0}', 'Ürünün çözünürlüğü sıcaklıkla azalır. Çözelti süzülmeden soğursa ürün de safsızlıklarla birlikte süzgeçte kristallenir ve kaybolur.', 2, 'Ünite 1, Kristallendirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-kristal-verim', 'kimya', 'km-ayirma', 1, 'num', 'derived', 'Bir tuzun 100 g sudaki çözünürlüğü 60 °C''ta 55 g, 10 °C''ta 21 g''dır. 60 °C''ta 200 g suyla hazırlanan doymuş çözelti 10 °C''a soğutulursa kaç gram tuz kristallenir?', '{"blanks":1}', '{"blanks":[["68"]]}', '60 °C''ta 200 g suda 2 × 55 = 110 g tuz çözünür. 10 °C''ta aynı suda 2 × 21 = 42 g çözünmüş kalabilir. Fark çöker: 110 − 42 = 68 g.', 2, 'Ünite 1, Kristallendirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u1-kristal-yikama', 'kimya', 'km-ayirma', 1, 'tf', 'derived', 'Kristallendirmede süzülen kristaller, yüzeylerindeki ana çözeltiyi gidermek için bol miktarda sıcak çözücüyle yıkanır.', '{}', '{"value":false}', 'Yanlış. Kristaller az miktarda **soğuk** çözücüyle yıkanır. Sıcak çözücü kristallerin bir kısmını yeniden çözer ve verim düşer.', 1, 'Ünite 1, Kristallendirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-birim-ml', 'kimya', 'km-olcme-birim', 2, 'num', 'derived', '0,35 L kaç mL''dir?', '{"blanks":1}', '{"blanks":[["350"]]}', '1 L = 1000 mL olduğundan 0,35 L × 1000 mL/L = 350 mL.', 1, 'Ünite 2, SI birimleri ve birim dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-birim-mg', 'kimya', 'km-olcme-birim', 2, 'num', 'derived', '0,0045 kg kaç mg''dır?', '{"blanks":1}', '{"blanks":[["4500"]]}', '0,0045 kg × 1000 g/kg = 4,5 g; 4,5 g × 1000 mg/g = 4500 mg.', 2, 'Ünite 2, SI birimleri ve birim dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-si-sicaklik', 'kimya', 'km-olcme-birim', 2, 'mcq', 'derived', 'SI birim sisteminde sıcaklığın temel birimi hangisidir?', '{"choices":["Kelvin","Celsius derecesi","Fahrenheit derecesi","Kalori"]}', '{"index":0}', 'SI''ın yedi temel biriminden biri kelvindir (K). Celsius günlük kullanımda yaygındır ama temel birim değildir; kalori bir enerji birimidir.', 1, 'Ünite 2, SI birimleri ve birim dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-cm3-tf', 'kimya', 'km-olcme-birim', 2, 'tf', 'derived', '1 mL hacim 1 cm³ hacme eşittir.', '{}', '{"value":true}', 'Doğru. 1 L = 1 dm³ = 1000 cm³ ve 1 L = 1000 mL olduğundan 1 mL = 1 cm³''tür.', 1, 'Ünite 2, SI birimleri ve birim dönüştürme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-anlamli-say', 'kimya', 'km-olcme-birim', 2, 'num', 'derived', '0,003040 sayısında kaç anlamlı rakam vardır?', '{"blanks":1}', '{"blanks":[["4"]]}', 'Baştaki sıfırlar (0,00) anlamlı değildir. 3 ve 4 anlamlıdır; aradaki 0 iki anlamlı rakam arasında olduğu için anlamlıdır; virgülden sonraki sondaki 0 da anlamlıdır. Toplam 4: 3, 0, 4, 0.', 2, 'Ünite 2, Anlamlı rakamlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-anlamli-carpma', 'kimya', 'km-olcme-birim', 2, 'mcq', 'derived', '3,0 cm × 2,567 cm çarpımı anlamlı rakam kurallarına göre nasıl yazılır?', '{"choices":["7,7 cm²","7,701 cm²","7,70 cm²","8 cm²"]}', '{"index":0}', 'Çarpmada sonuç en az anlamlı rakamı olan değer kadar anlamlı rakam taşır. 3,0 iki anlamlı rakamlıdır; 7,701 iki anlamlı rakama yuvarlanınca 7,7 cm² olur.', 2, 'Ünite 2, Anlamlı rakamlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-sicaklik-k', 'kimya', 'km-olcme-birim', 2, 'num', 'derived', '37 °C kaç kelvindir?', '{"blanks":1}', '{"blanks":[["310.15±0.2"]]}', 'T(K) = t(°C) + 273,15 = 37 + 273,15 = 310,15 K.', 1, 'Ünite 2, Sıcaklık ölçekleri arasında dönüşüm', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-sicaklik-f', 'kimya', 'km-olcme-birim', 2, 'num', 'derived', 'Bir fırının sıcaklığı 220 °C''tır. Bu sıcaklık kaç °F''tır?', '{"blanks":1}', '{"blanks":[["428"]]}', 't(°F) = 1,8 · t(°C) + 32 = 1,8 × 220 + 32 = 396 + 32 = 428 °F.', 2, 'Ünite 2, Sıcaklık ölçekleri arasında dönüşüm', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-sicaklik-f-c', 'kimya', 'km-olcme-birim', 2, 'num', 'derived', 'Normal vücut sıcaklığı 98,6 °F''tır. Bu sıcaklık kaç °C''tır?', '{"blanks":1}', '{"blanks":[["37"]]}', 't(°C) = (98,6 − 32) / 1,8 = 66,6 / 1,8 = 37 °C.', 2, 'Ünite 2, Sıcaklık ölçekleri arasında dönüşüm', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-sicaklik-esit', 'kimya', 'km-olcme-birim', 2, 'mcq', 'derived', 'Celsius ve Fahrenheit ölçeklerinin aynı sayıyı gösterdiği sıcaklık hangisidir?', '{"choices":["−40","0","32","−273"]}', '{"index":0}', 't = 1,8t + 32 denklemi çözülünce −0,8t = 32, yani t = −40 bulunur: −40 °C = −40 °F.', 2, 'Ünite 2, Sıcaklık ölçekleri arasında dönüşüm', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-mutlak-sifir-fill', 'kimya', 'km-olcme-birim', 2, 'fill', 'derived', 'Kelvin ölçeğinin sıfır noktası olan −273,15 °C sıcaklığına ____ denir.', '{"blanks":1}', '{"blanks":[["mutlak sıfır","mutlak sifir"]]}', 'Mutlak sıfır, kuramsal olarak ulaşılabilecek en düşük sıcaklıktır; kelvin değerleri bu yüzden hiçbir zaman negatif olmaz.', 1, 'Ünite 2, Sıcaklık ölçekleri arasında dönüşüm', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-yogunluk-hesap', 'kimya', 'km-olcme-birim', 2, 'num', 'derived', 'Kütlesi 54 g, hacmi 20 cm³ olan bir metal parçasının yoğunluğu kaç g/cm³''tür?', '{"blanks":1}', '{"blanks":[["2.7"]]}', 'd = m / V = 54 g / 20 cm³ = 2,7 g/cm³. Bu değer alüminyumun yoğunluğudur.', 1, 'Ünite 2, Yoğunluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-yogunluk-kutle', 'kimya', 'km-olcme-birim', 2, 'num', 'derived', 'Yoğunluğu 13,6 g/mL olan cıvadan 5,0 mL alınıyor. Alınan cıvanın kütlesi kaç gramdır?', '{"blanks":1}', '{"blanks":[["68"]]}', 'm = d · V = 13,6 g/mL × 5,0 mL = 68 g.', 2, 'Ünite 2, Yoğunluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-yogunluk-ust', 'kimya', 'km-olcme-birim', 2, 'mcq', 'derived', 'Birbirinde çözünmeyen su (1,00 g/mL) ve bir yağ (0,92 g/mL) aynı kaba konuyor. Ne gözlenir?', '{"choices":["Yağ üstte, su altta toplanır","Su üstte, yağ altta toplanır","İkisi homojen bir karışım oluşturur","Yağ kabın ortasında asılı kalır"]}', '{"index":0}', 'Birbirinde çözünmeyen sıvılardan yoğunluğu az olan üstte kalır. Yağın yoğunluğu sudan küçük olduğu için yağ üstte toplanır.', 1, 'Ünite 2, Yoğunluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-kanun-proust', 'kimya', 'km-kimya-kanunlari', 2, 'mcq', 'derived', '"Bir bileşiği oluşturan elementlerin kütleleri arasında her zaman sabit bir oran vardır." Bu ifade hangi kanundur?', '{"choices":["Sabit oranlar kanunu","Kütlenin korunumu kanunu","Katlı oranlar kanunu","Avogadro kanunu"]}', '{"index":0}', 'Proust''un sabit oranlar kanunudur: saf suda hidrojenin oksijene kütle oranı, su nereden alınırsa alınsın yaklaşık 1 : 8''dir.', 1, 'Ünite 2, Kütlenin korunumu, sabit ve katlı oranlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-kanun-korunum', 'kimya', 'km-kimya-kanunlari', 2, 'num', 'derived', 'Kapalı bir kapta 12 g karbon ile 32 g oksijen artansız tepkimeye girerek karbon dioksit oluşturuyor. Kaç gram karbon dioksit oluşur?', '{"blanks":1}', '{"blanks":[["44"]]}', 'Kütlenin korunumu kanununa göre ürünlerin kütlesi tepkimeye girenlerin kütlesine eşittir: 12 + 32 = 44 g.', 1, 'Ünite 2, Kütlenin korunumu, sabit ve katlı oranlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-kanun-katli', 'kimya', 'km-kimya-kanunlari', 2, 'num', 'derived', 'Karbon, oksijenle CO ve CO₂ bileşiklerini oluşturur. Aynı kütlede karbonla birleşen oksijen kütlelerinin oranı (CO''daki / CO₂''deki) kaçtır?', '{"blanks":1}', '{"blanks":[["0.5"]]}', '12 g karbon CO''da 16 g, CO₂''de 32 g oksijenle birleşir. Oran 16 / 32 = 1/2 = 0,5; katlı oranlar kanununa uygun küçük tam sayılı bir orandır.', 2, 'Ünite 2, Kütlenin korunumu, sabit ve katlı oranlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-kanun-su', 'kimya', 'km-kimya-kanunlari', 2, 'num', 'derived', 'Suda hidrojenin oksijene kütle oranı 1 : 8''dir. 4 g hidrojen yeterli oksijenle tamamen tepkimeye girerse kaç gram su oluşur?', '{"blanks":1}', '{"blanks":[["36"]]}', '4 g hidrojen 4 × 8 = 32 g oksijenle birleşir. Kütlenin korunumuna göre 4 + 32 = 36 g su oluşur.', 2, 'Ünite 2, Kütlenin korunumu, sabit ve katlı oranlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u2-katli-tf', 'kimya', 'km-kimya-kanunlari', 2, 'tf', 'derived', 'Katlı oranlar kanunu, H₂O ve CO₂ gibi farklı elementlerden oluşan iki bileşiği karşılaştırır.', '{}', '{"value":false}', 'Yanlış. Katlı oranlar kanunu aynı iki elementin oluşturduğu farklı bileşikleri (NO ve NO₂ ya da SO₂ ve SO₃ gibi) karşılaştırır ve elementlerden birinin kütlesini sabit tutar.', 2, 'Ünite 2, Kütlenin korunumu, sabit ve katlı oranlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-dalton-gecerli', 'kimya', 'km-atom-modelleri', 3, 'mcq', 'derived', 'Dalton atom kuramının aşağıdaki görüşlerinden hangisi bugün de geçerlidir?', '{"choices":["Kimyasal tepkimede atomlar yok olmaz, yeniden düzenlenir","Atom bölünemeyen bir taneciktir","Bir elementin bütün atomlarının kütlesi aynıdır","Atom içi dolu, yüksüz bir küredir"]}', '{"index":0}', 'Tepkimelerde atomların korunması bugün de geçerlidir. Atomun bölünemezliği alt atomik taneciklerin, aynı elementin atomlarının özdeşliği ise izotopların keşfiyle çürütüldü.', 2, 'Ünite 3, Dalton atom modeli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-dalton-izotop', 'kimya', 'km-atom-modelleri', 3, 'tf', 'derived', 'İzotopların keşfi, Dalton''un "bir elementin bütün atomları özdeştir" görüşünü çürütmüştür.', '{}', '{"value":true}', 'Doğru. İzotoplar aynı elementin farklı kütleli atomlarıdır; örneğin hidrojenin ¹H, ²H ve ³H izotopları vardır.', 2, 'Ünite 3, Dalton atom modeli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-rutherford-bosluk', 'kimya', 'km-atom-modelleri', 3, 'mcq', 'derived', 'Rutherford deneyinde alfa taneciklerinin çok büyük kısmının altın levhadan sapmadan geçmesi neyi gösterir?', '{"choices":["Atomun hacminin büyük kısmının boşluk olduğunu","Atomda pozitif yükün her yere dağıldığını","Elektronların çekirdekte bulunduğunu","Altın atomlarının yüksüz olduğunu"]}', '{"index":0}', 'Taneciklerin çoğu hiçbir şeye çarpmadan geçtiği için atomun büyük kısmı boşluktur. Az sayıdaki geri dönüş ise pozitif yükün ve kütlenin küçük bir çekirdekte toplandığını gösterir.', 1, 'Ünite 3, Thomson ve Rutherford atom modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-thomson-model', 'kimya', 'km-atom-modelleri', 3, 'fill', 'derived', 'Thomson''ın, elektronların pozitif yüklü bir küre içine gömüldüğü atom modeline ____ modeli denir.', '{"blanks":1}', '{"blanks":[["üzümlü kek","uzumlu kek"]]}', 'Thomson modelinde artı ve eksi yükler atomun her yerine düzgün dağılmıştır; bu yüzden üzümlü kek modeli denir. Rutherford deneyi bu modeli çürüttü.', 1, 'Ünite 3, Thomson ve Rutherford atom modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-rutherford-geri', 'kimya', 'km-atom-modelleri', 3, 'mcq', 'derived', 'Rutherford deneyinde birkaç alfa taneciğinin geri dönmesi aşağıdakilerden hangisiyle açıklanır?', '{"choices":["Pozitif yükün küçük ve yoğun bir çekirdekte toplanmasıyla","Elektronların alfa taneciklerini çekmesiyle","Altın levhanın çok kalın olmasıyla","Atomların birbirine çok yakın dizilmesiyle"]}', '{"index":0}', 'Pozitif alfa tanecikleri ancak aynı yükte, çok küçük ve kütlesi büyük bir merkeze doğrudan yaklaştıklarında geri itilebilir. Bu merkez çekirdektir.', 2, 'Ünite 3, Thomson ve Rutherford atom modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-notron-chadwick', 'kimya', 'km-atom-modelleri', 3, 'tf', 'derived', 'Nötronu Rutherford, altın levha deneyiyle keşfetmiştir.', '{}', '{"value":false}', 'Yanlış. Nötronu 1932''de James Chadwick keşfetti. Rutherford''un deneyi çekirdeğin varlığını gösterdi.', 1, 'Ünite 3, Thomson ve Rutherford atom modelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-tanecik-notron', 'kimya', 'km-atom-modelleri', 3, 'num', 'derived', '$^{37}_{17}\text{Cl}$ atomunun çekirdeğinde kaç nötron vardır?', '{"blanks":1}', '{"blanks":[["20"]]}', 'Nötron sayısı N = A − Z = 37 − 17 = 20.', 1, 'Ünite 3, Proton, nötron, elektron ve izotoplar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-tanecik-iyon', 'kimya', 'km-atom-modelleri', 3, 'num', 'derived', 'Atom numarası 26 olan demirin Fe³⁺ iyonunda kaç elektron vardır?', '{"blanks":1}', '{"blanks":[["23"]]}', 'Nötr demirde 26 elektron vardır. 3+ yüklü katyon 3 elektron vermiştir: 26 − 3 = 23.', 2, 'Ünite 3, Proton, nötron, elektron ve izotoplar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-anyon-elektron', 'kimya', 'km-atom-modelleri', 3, 'num', 'derived', 'Atom numarası 8 olan oksijenin O²⁻ iyonunda kaç elektron vardır?', '{"blanks":1}', '{"blanks":[["10"]]}', 'Anyon elektron almıştır: 8 + 2 = 10 elektron.', 2, 'Ünite 3, Proton, nötron, elektron ve izotoplar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-izotop-ortak', 'kimya', 'km-atom-modelleri', 3, 'mcq', 'derived', 'Bir elementin izotoplarında aşağıdakilerden hangisi aynıdır?', '{"choices":["Proton sayısı","Nötron sayısı","Kütle numarası","Atom kütlesi"]}', '{"index":0}', 'İzotopların proton sayısı (atom numarası) aynı, nötron sayısı farklıdır. Bu yüzden kütle numaraları ve kütleleri de farklıdır.', 1, 'Ünite 3, Proton, nötron, elektron ve izotoplar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-izotop-ortalama', 'kimya', 'km-atom-modelleri', 3, 'num', 'derived', 'Klorun doğada iki izotopu vardır: ³⁵Cl (34,97 akb, %75,77) ve ³⁷Cl (36,97 akb, %24,23). Klorun ortalama atom kütlesi kaç akb''dir?', '{"blanks":1}', '{"blanks":[["35.45±0.02"]]}', 'Ortalama atom kütlesi bolluklarla ağırlıklı ortalamadır: 0,7577 × 34,97 + 0,2423 × 36,97 = 26,50 + 8,96 ≈ 35,45 akb.', 3, 'Ünite 3, Proton, nötron, elektron ve izotoplar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-kutle-numarasi-fill', 'kimya', 'km-atom-modelleri', 3, 'fill', 'derived', 'Bir atomun çekirdeğindeki proton ve nötron sayılarının toplamına ____ denir.', '{"blanks":1}', '{"blanks":[["kütle numarası","kutle numarasi"]]}', 'Kütle numarası A = Z + N''dir. Atom numarası (Z) ise yalnızca proton sayısıdır.', 1, 'Ünite 3, Proton, nötron, elektron ve izotoplar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-bohr-temel-hal', 'kimya', 'km-atom-modelleri', 3, 'mcq', 'derived', 'Bohr modeline göre uyarılmış bir hidrojen atomundaki elektron daha düşük enerjili bir yörüngeye indiğinde ne olur?', '{"choices":["İki düzeyin enerji farkı kadar foton yayar","Dışarıdan bir foton soğurup daha çok uyarılır","Enerjisini yitirip çekirdeğe düşer","Çekirdekten bir proton kopar ve atom iyonlaşır"]}', '{"index":0}', 'Elektron yüksek enerjili yörüngeden düşük enerjiliye inerken iki düzey arasındaki enerji farkını foton olarak yayar. Foton soğurması ise elektronu yukarı çıkarır.', 1, 'Ünite 3, Bohr atom modeli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-bohr-dalga-boyu', 'kimya', 'km-atom-modelleri', 3, 'num', 'derived', 'Hidrojen atomunda elektron n = 3''ten n = 2''ye iniyor. Yayılan ışığın dalga boyu kaç nm''dir? ($E_n = -2{,}18 \times 10^{-18}\ \text{J}/n^2$, $h = 6{,}626 \times 10^{-34}$ J·s, $c = 3{,}00 \times 10^{8}$ m/s)', '{"blanks":1}', '{"blanks":[["656±4"]]}', 'ΔE = 2,18 × 10⁻¹⁸ × (1/4 − 1/9) = 2,18 × 10⁻¹⁸ × 0,1389 ≈ 3,03 × 10⁻¹⁹ J. λ = hc/ΔE = (6,626 × 10⁻³⁴ × 3,00 × 10⁸) / 3,03 × 10⁻¹⁹ ≈ 6,56 × 10⁻⁷ m = 656 nm. Bu, hidrojenin kırmızı çizgisidir.', 3, 'Ünite 3, Bohr atom modeli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-bohr-sinir', 'kimya', 'km-atom-modelleri', 3, 'tf', 'derived', 'Bohr modeli, çok elektronlu atomların çizgi spektrumlarını da doğru açıklar.', '{}', '{"value":false}', 'Yanlış. Bohr modeli yalnızca H, He⁺ ve Li²⁺ gibi tek elektronlu taneciklerde doğru sonuç verir.', 2, 'Ünite 3, Bohr atom modeli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u3-temel-hal-fill', 'kimya', 'km-atom-modelleri', 3, 'fill', 'derived', 'Bir atomdaki elektronun en düşük enerjili durumuna ____ denir.', '{"blanks":1}', '{"blanks":[["temel hâl","temel hal"]]}', 'Hidrojende n = 1 durumu temel hâldir; daha yüksek enerjili durumlar uyarılmış hâllerdir.', 1, 'Ünite 3, Bohr atom modeli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-foton-enerji-karsilastir', 'kimya', 'km-kuantum', 4, 'mcq', 'derived', 'Aşağıdaki ışınlardan hangisinin bir fotonunun enerjisi en büyüktür?', '{"choices":["Morötesi ışın (250 nm)","Mor ışık (410 nm)","Yeşil ışık (530 nm)","Kırmızı ışık (690 nm)"]}', '{"index":0}', 'E = hc/λ olduğundan dalga boyu en kısa olan ışının fotonu en enerjilidir: 250 nm''lik morötesi ışın.', 1, 'Ünite 4, Işığın dalga boyu, frekansı ve foton enerjisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-foton-frekans', 'kimya', 'km-kuantum', 4, 'num', 'derived', 'Dalga boyu 600 nm olan turuncu ışığın frekansı kaç Hz''dir? ($c = 3{,}00 \times 10^{8}$ m/s)', '{"blanks":1}', '{"blanks":[["5.00e14±0.03e14"]]}', 'ν = c/λ = 3,00 × 10⁸ m/s / 6,00 × 10⁻⁷ m = 5,00 × 10¹⁴ Hz.', 2, 'Ünite 4, Işığın dalga boyu, frekansı ve foton enerjisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-foton-enerji', 'kimya', 'km-kuantum', 4, 'num', 'derived', 'Dalga boyu 500 nm olan bir fotonun enerjisi kaç J''dür? ($h = 6{,}626 \times 10^{-34}$ J·s, $c = 3{,}00 \times 10^{8}$ m/s)', '{"blanks":1}', '{"blanks":[["3.98e-19±0.03e-19"]]}', 'E = hc/λ = (6,626 × 10⁻³⁴ × 3,00 × 10⁸) / 5,00 × 10⁻⁷ ≈ 3,98 × 10⁻¹⁹ J.', 2, 'Ünite 4, Işığın dalga boyu, frekansı ve foton enerjisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-planck-fill', 'kimya', 'km-kuantum', 4, 'fill', 'derived', 'E = h·ν bağıntısındaki h sabitine ____ sabiti denir.', '{"blanks":1}', '{"blanks":[["Planck"]]}', 'h = 6,626 × 10⁻³⁴ J·s, Planck sabitidir.', 1, 'Ünite 4, Işığın dalga boyu, frekansı ve foton enerjisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-debroglie-kutle', 'kimya', 'km-kuantum', 4, 'mcq', 'derived', 'Aynı hızla hareket eden bir elektron ile bir protondan hangisinin De Broglie dalga boyu daha büyüktür?', '{"choices":["Elektronun, çünkü kütlesi daha küçüktür","Protonun, çünkü kütlesi daha büyüktür","İkisi eşittir, çünkü hızları aynıdır","Protonun, çünkü yükü pozitiftir"]}', '{"index":0}', 'λ = h/(mv) bağıntısında dalga boyu kütleyle ters orantılıdır. Hızlar eşitken kütlesi yaklaşık 1836 kat küçük olan elektronun dalga boyu daha büyüktür. Yük bağıntıda yer almaz.', 2, 'Ünite 4, De Broglie dalga boyu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-debroglie-elektron', 'kimya', 'km-kuantum', 4, 'num', 'derived', '1,0 × 10⁶ m/s hızla hareket eden bir elektronun (m = 9,11 × 10⁻³¹ kg) De Broglie dalga boyu kaç nm''dir? ($h = 6{,}626 \times 10^{-34}$ J·s)', '{"blanks":1}', '{"blanks":[["0.727±0.005"]]}', 'λ = h/(mv) = 6,626 × 10⁻³⁴ / (9,11 × 10⁻³¹ × 1,0 × 10⁶) = 6,626 × 10⁻³⁴ / 9,11 × 10⁻²⁵ ≈ 7,27 × 10⁻¹⁰ m = 0,727 nm.', 3, 'Ünite 4, De Broglie dalga boyu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-belirsizlik', 'kimya', 'km-kuantum', 4, 'mcq', 'derived', '"Bir taneciğin konumu ve momentumu aynı anda kesin olarak belirlenemez." Bu ifade hangi ilkedir?', '{"choices":["Heisenberg belirsizlik ilkesi","Pauli dışarlama ilkesi","Aufbau ilkesi","Hund kuralı"]}', '{"index":0}', 'Heisenberg belirsizlik ilkesine göre Δx · Δp ≥ h/(4π)''dir. Bu yüzden elektronun yörüngesi değil, bir bölgede bulunma olasılığı hesaplanır.', 1, 'Ünite 4, De Broglie dalga boyu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-debroglie-top-tf', 'kimya', 'km-kuantum', 4, 'tf', 'derived', 'De Broglie bağıntısı yalnızca elektron gibi atom altı taneciklere uygulanır; bir futbol topunun dalga boyu yoktur.', '{}', '{"value":false}', 'Yanlış. Hızı ve kütlesi olan her cismin dalga boyu vardır. Futbol topunun kütlesi büyük olduğu için dalga boyu ölçülemeyecek kadar küçüktür, ama sıfır değildir.', 2, 'Ünite 4, De Broglie dalga boyu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-kuantum-l-degeri', 'kimya', 'km-kuantum', 4, 'mcq', 'derived', 'Baş kuantum sayısı n = 3 olan bir elektron için açısal kuantum sayısı ℓ hangi değeri alamaz?', '{"choices":["3","0","1","2"]}', '{"index":0}', 'ℓ, 0 ile n − 1 arasında değer alır. n = 3 için ℓ = 0, 1 ya da 2 olabilir (3s, 3p, 3d); ℓ = 3 olamaz.', 2, 'Ünite 4, Kuantum sayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-kuantum-orbital-sayisi', 'kimya', 'km-kuantum', 4, 'num', 'derived', 'n = 3 katmanına en fazla kaç elektron yerleşebilir?', '{"blanks":1}', '{"blanks":[["18"]]}', 'n. katmanda $n^2$ orbital vardır: 3² = 9 orbital. Her orbitale 2 elektron girdiğinden en fazla 2 × 9 = 18 elektron yerleşir.', 2, 'Ünite 4, Kuantum sayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-kuantum-d-orbital', 'kimya', 'km-kuantum', 4, 'num', 'derived', 'ℓ = 2 olan bir alt kabukta kaç orbital vardır?', '{"blanks":1}', '{"blanks":[["5"]]}', 'Orbital sayısı 2ℓ + 1 = 2 × 2 + 1 = 5''tir. ℓ = 2 d alt kabuğudur.', 1, 'Ünite 4, Kuantum sayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-spin-fill', 'kimya', 'km-kuantum', 4, 'fill', 'derived', 'Elektronun +½ ya da −½ değerini alan kuantum sayısına ____ kuantum sayısı denir.', '{"blanks":1}', '{"blanks":[["spin"]]}', 'Spin kuantum sayısı (ms) elektronun dönme yönünü belirtir; aynı orbitaldeki iki elektronun spinleri zıttır.', 1, 'Ünite 4, Kuantum sayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-kuantum-gecersiz', 'kimya', 'km-kuantum', 4, 'mcq', 'derived', 'Aşağıdaki (n, ℓ, mℓ) kümelerinden hangisi bir orbitali tanımlayamaz?', '{"choices":["(2, 1, −2)","(1, 0, 0)","(3, 2, −1)","(4, 3, 3)"]}', '{"index":0}', 'mℓ, −ℓ ile +ℓ arasında olmalıdır. ℓ = 1 iken mℓ = −2 olamaz. Diğer kümeler kurallara uyar.', 3, 'Ünite 4, Kuantum sayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-dizilim-hund-n', 'kimya', 'km-elektron-dizilimi', 4, 'num', 'derived', 'Fosforun (Z = 15) temel hâl dizilimine göre kaç eşleşmemiş elektronu vardır?', '{"blanks":1}', '{"blanks":[["3"]]}', 'Fosfor: 1s² 2s² 2p⁶ 3s² 3p³. Hund kuralına göre üç 3p elektronu üç ayrı orbitale aynı spinle girer; 3 eşleşmemiş elektron vardır.', 2, 'Ünite 4, Aufbau, Pauli ve Hund kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-dizilim-fe-tek', 'kimya', 'km-elektron-dizilimi', 4, 'num', 'derived', 'Demirin (Z = 26, [Ar] 4s² 3d⁶) temel hâlde kaç eşleşmemiş elektronu vardır?', '{"blanks":1}', '{"blanks":[["4"]]}', '3d⁶''da altı elektron beş d orbitaline girer: önce beşi birer tane, altıncısı birinci orbitalde çiftleşir (↑↓ ↑ ↑ ↑ ↑). 4s tam doludur. Eşleşmemiş elektron sayısı 4''tür.', 2, 'Ünite 4, Aufbau, Pauli ve Hund kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-dizilim-pauli', 'kimya', 'km-elektron-dizilimi', 4, 'mcq', 'derived', '"Bir atomda iki elektronun dört kuantum sayısı da aynı olamaz." Bu ifade hangi ilkedir?', '{"choices":["Pauli dışarlama ilkesi","Hund kuralı","Aufbau ilkesi","Heisenberg belirsizlik ilkesi"]}', '{"index":0}', 'Pauli dışarlama ilkesidir. Bu yüzden bir orbitale en çok iki zıt spinli elektron girer.', 1, 'Ünite 4, Aufbau, Pauli ve Hund kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-dizilim-4s3d', 'kimya', 'km-elektron-dizilimi', 4, 'tf', 'derived', 'Aufbau ilkesine göre 3d alt kabuğu 4s alt kabuğundan önce dolar.', '{}', '{"value":false}', 'Yanlış. 4s''in enerjisi 3d''den düşüktür (n + ℓ: 4s için 4, 3d için 5), bu yüzden 4s önce dolar.', 2, 'Ünite 4, Aufbau, Pauli ve Hund kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-dizilim-cr', 'kimya', 'km-elektron-dizilimi', 4, 'mcq', 'derived', 'Kromun (Z = 24) temel hâl elektron dizilimi hangisidir?', '{"choices":["[Ar] 4s¹ 3d⁵","[Ar] 4s² 3d⁴","[Ar] 3d⁶","[Ar] 4s² 4p⁴"]}', '{"index":0}', 'Yarı dolu d alt kabuğu daha kararlı olduğu için 4s''ten bir elektron 3d''ye geçer: [Ar] 4s¹ 3d⁵. Beklenen [Ar] 4s² 3d⁴ dizilimi gerçekte gözlenmez.', 3, 'Ünite 4, Aufbau, Pauli ve Hund kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-dizilim-fe2', 'kimya', 'km-elektron-dizilimi', 4, 'mcq', 'derived', 'Fe²⁺ iyonunun (Z = 26) elektron dizilimi hangisidir?', '{"choices":["[Ar] 3d⁶","[Ar] 4s² 3d⁴","[Ar] 4s¹ 3d⁵","[Ar] 4s² 3d⁶"]}', '{"index":0}', 'Katyon oluşurken elektronlar önce en yüksek n değerli 4s''ten koparılır: [Ar] 4s² 3d⁶ → [Ar] 3d⁶.', 3, 'Ünite 4, Aufbau, Pauli ve Hund kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('km-u4-dizilim-na-fill', 'kimya', 'km-elektron-dizilimi', 4, 'fill', 'derived', 'Sodyumun (Z = 11) kısaltılmış dizilimi [____] 3s¹ biçiminde yazılır.', '{"blanks":1}', '{"blanks":[["Ne"]]}', '1s² 2s² 2p⁶ kısmı neonun dizilimidir; sodyum [Ne] 3s¹ olarak yazılır.', 1, 'Ünite 4, Aufbau, Pauli ve Hund kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u3-dalton-modeli', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-01';
UPDATE questions SET kavram = 'u3-rutherford-modeli', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-02';
UPDATE questions SET kavram = 'u5-elektronegatiflik', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-03';
UPDATE questions SET kavram = 'u7-hibritlesme', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-04';
UPDATE questions SET kavram = 'u7-kovalent-bag-kosul', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-05';
UPDATE questions SET kavram = 'u4-dizilim-kurallari', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-06';
UPDATE questions SET kavram = 'u3-bohr-modeli', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-07';
UPDATE questions SET kavram = 'u4-kuantum-sayilari', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-08';
UPDATE questions SET kavram = 'u7-vsepr', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-09';
UPDATE questions SET kavram = 'u4-de-broglie', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-10';
UPDATE questions SET kavram = 'u7-bag-turu', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-11';
UPDATE questions SET kavram = 'u8-etkilesim-turu', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-12';
UPDATE questions SET kavram = 'u8-etkilesim-turu', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-13';
UPDATE questions SET kavram = 'u8-hidrojen-bagi', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-14';
UPDATE questions SET kavram = 'u4-de-broglie', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-15';
UPDATE questions SET kavram = 'u4-kuantum-sayilari', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-16';
UPDATE questions SET kavram = 'u8-hidrojen-bagi', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-17';
UPDATE questions SET kavram = 'u4-de-broglie', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-18';
UPDATE questions SET kavram = 'u8-birim-hucre', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-19';
UPDATE questions SET kavram = 'u9-yari-iletken', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-20';
UPDATE questions SET kavram = 'u8-birim-hucre', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-v24-21';
UPDATE questions SET kavram = 'u2-sicaklik-olcegi', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-02';
UPDATE questions SET kavram = 'u1-fiziksel-kimyasal', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-04';
UPDATE questions SET kavram = 'u1-ayirma-yontemi', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-06';
UPDATE questions SET kavram = 'u1-karisim-ozellik', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-07';
UPDATE questions SET kavram = 'u5-periyot-grup', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-09';
UPDATE questions SET kavram = 'u1-kristallendirme', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-10';
UPDATE questions SET kavram = 'u6-mol-kutle', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-11';
UPDATE questions SET kavram = 'u6-mol-kutle', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-12';
UPDATE questions SET kavram = 'u6-mol-kutle', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-13';
UPDATE questions SET kavram = 'u8-hidrojen-bagi', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-15';
UPDATE questions SET kavram = 'u7-hibritlesme', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-16';
UPDATE questions SET kavram = 'u7-vsepr', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-17';
UPDATE questions SET kavram = 'u8-etkilesim-turu', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-19';
UPDATE questions SET kavram = 'u9-korozyon-turu', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-22';
UPDATE questions SET kavram = 'u9-korozyon-turu', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-23';
UPDATE questions SET kavram = 'u9-korozyon-koruma', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-24';
UPDATE questions SET kavram = 'u9-ametal-ozellik', yedek = 0, etiketler = 'cikmis' WHERE id = 'km-vd-25';
UPDATE questions SET kavram = 'u1-madde-sinif', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-homojen-ornek';
UPDATE questions SET kavram = 'u1-madde-sinif', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-bilesik-ayrisma';
UPDATE questions SET kavram = 'u1-madde-sinif', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-element-tf';
UPDATE questions SET kavram = 'u1-madde-sinif', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-cozelti-fill';
UPDATE questions SET kavram = 'u1-madde-sinif', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u1-feS-karisim';
UPDATE questions SET kavram = 'u1-karisim-ozellik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-karisim-kaynama';
UPDATE questions SET kavram = 'u1-karisim-ozellik', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u1-karisim-oran';
UPDATE questions SET kavram = 'u1-fiziksel-kimyasal', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-fizik-cozunme';
UPDATE questions SET kavram = 'u1-fiziksel-kimyasal', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-kimyasal-ipucu';
UPDATE questions SET kavram = 'u1-fiziksel-kimyasal', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-ozellik-yanicilik';
UPDATE questions SET kavram = 'u1-fiziksel-kimyasal', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u1-buharlasma-tf';
UPDATE questions SET kavram = 'u1-ayirma-yontemi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-ayirma-yag-su';
UPDATE questions SET kavram = 'u1-ayirma-yontemi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-damitma-tuzlu';
UPDATE questions SET kavram = 'u1-ayirma-yontemi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-ayrimsal-alkol';
UPDATE questions SET kavram = 'u1-ayirma-yontemi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-suzme-fill';
UPDATE questions SET kavram = 'u1-ayirma-yontemi', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u1-mikrnatis-tf';
UPDATE questions SET kavram = 'u1-kristallendirme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-kristal-sicak-suzme';
UPDATE questions SET kavram = 'u1-kristallendirme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-kristal-verim';
UPDATE questions SET kavram = 'u1-kristallendirme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u1-kristal-yikama';
UPDATE questions SET kavram = 'u2-birim-donusum', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-birim-ml';
UPDATE questions SET kavram = 'u2-birim-donusum', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-birim-mg';
UPDATE questions SET kavram = 'u2-birim-donusum', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-si-sicaklik';
UPDATE questions SET kavram = 'u2-birim-donusum', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u2-cm3-tf';
UPDATE questions SET kavram = 'u2-anlamli-rakam', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-anlamli-say';
UPDATE questions SET kavram = 'u2-anlamli-rakam', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-anlamli-carpma';
UPDATE questions SET kavram = 'u2-sicaklik-olcegi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-sicaklik-k';
UPDATE questions SET kavram = 'u2-sicaklik-olcegi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-sicaklik-f';
UPDATE questions SET kavram = 'u2-sicaklik-olcegi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-sicaklik-f-c';
UPDATE questions SET kavram = 'u2-sicaklik-olcegi', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u2-sicaklik-esit';
UPDATE questions SET kavram = 'u2-sicaklik-olcegi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-mutlak-sifir-fill';
UPDATE questions SET kavram = 'u2-yogunluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-yogunluk-hesap';
UPDATE questions SET kavram = 'u2-yogunluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-yogunluk-kutle';
UPDATE questions SET kavram = 'u2-yogunluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-yogunluk-ust';
UPDATE questions SET kavram = 'u2-kimya-kanunlari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-kanun-proust';
UPDATE questions SET kavram = 'u2-kimya-kanunlari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-kanun-korunum';
UPDATE questions SET kavram = 'u2-kimya-kanunlari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-kanun-katli';
UPDATE questions SET kavram = 'u2-kimya-kanunlari', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u2-kanun-su';
UPDATE questions SET kavram = 'u2-kimya-kanunlari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u2-katli-tf';
UPDATE questions SET kavram = 'u3-dalton-modeli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-dalton-gecerli';
UPDATE questions SET kavram = 'u3-dalton-modeli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-dalton-izotop';
UPDATE questions SET kavram = 'u3-rutherford-modeli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-rutherford-bosluk';
UPDATE questions SET kavram = 'u3-rutherford-modeli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-thomson-model';
UPDATE questions SET kavram = 'u3-rutherford-modeli', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u3-rutherford-geri';
UPDATE questions SET kavram = 'u3-rutherford-modeli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-notron-chadwick';
UPDATE questions SET kavram = 'u3-atom-tanecikleri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-tanecik-notron';
UPDATE questions SET kavram = 'u3-atom-tanecikleri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-tanecik-iyon';
UPDATE questions SET kavram = 'u3-atom-tanecikleri', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u3-anyon-elektron';
UPDATE questions SET kavram = 'u3-atom-tanecikleri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-izotop-ortak';
UPDATE questions SET kavram = 'u3-atom-tanecikleri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-izotop-ortalama';
UPDATE questions SET kavram = 'u3-atom-tanecikleri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-kutle-numarasi-fill';
UPDATE questions SET kavram = 'u3-bohr-modeli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-bohr-temel-hal';
UPDATE questions SET kavram = 'u3-bohr-modeli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-bohr-dalga-boyu';
UPDATE questions SET kavram = 'u3-bohr-modeli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u3-bohr-sinir';
UPDATE questions SET kavram = 'u3-bohr-modeli', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u3-temel-hal-fill';
UPDATE questions SET kavram = 'u4-foton-enerjisi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-foton-enerji-karsilastir';
UPDATE questions SET kavram = 'u4-foton-enerjisi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-foton-frekans';
UPDATE questions SET kavram = 'u4-foton-enerjisi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-foton-enerji';
UPDATE questions SET kavram = 'u4-foton-enerjisi', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u4-planck-fill';
UPDATE questions SET kavram = 'u4-de-broglie', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-debroglie-kutle';
UPDATE questions SET kavram = 'u4-de-broglie', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-debroglie-elektron';
UPDATE questions SET kavram = 'u4-de-broglie', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-belirsizlik';
UPDATE questions SET kavram = 'u4-de-broglie', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u4-debroglie-top-tf';
UPDATE questions SET kavram = 'u4-kuantum-sayilari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-kuantum-l-degeri';
UPDATE questions SET kavram = 'u4-kuantum-sayilari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-kuantum-orbital-sayisi';
UPDATE questions SET kavram = 'u4-kuantum-sayilari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-kuantum-d-orbital';
UPDATE questions SET kavram = 'u4-kuantum-sayilari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-spin-fill';
UPDATE questions SET kavram = 'u4-kuantum-sayilari', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u4-kuantum-gecersiz';
UPDATE questions SET kavram = 'u4-dizilim-kurallari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-dizilim-hund-n';
UPDATE questions SET kavram = 'u4-dizilim-kurallari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-dizilim-fe-tek';
UPDATE questions SET kavram = 'u4-dizilim-kurallari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-dizilim-pauli';
UPDATE questions SET kavram = 'u4-dizilim-kurallari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-dizilim-4s3d';
UPDATE questions SET kavram = 'u4-dizilim-kurallari', yedek = 0, etiketler = 'turetilmis' WHERE id = 'km-u4-dizilim-cr';
UPDATE questions SET kavram = 'u4-dizilim-kurallari', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u4-dizilim-fe2';
UPDATE questions SET kavram = 'u4-dizilim-kurallari', yedek = 1, etiketler = 'turetilmis' WHERE id = 'km-u4-dizilim-na-fill';
