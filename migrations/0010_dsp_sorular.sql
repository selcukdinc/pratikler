-- Bu dosya scripts/sorular-sql.ts ile icerik/dsp/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-dsp-giris', 'dsp', 'DSP''ye giriş: sürekli ve ayrık sinyaller', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-istatistik', 'dsp', 'Ortalama, standart sapma ve rms', 1, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-olasilik', 'dsp', 'Histogram, pmf, pdf ve normal dağılım', 1, 3)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-gurultu-dogruluk', 'dsp', 'Gürültü üretimi, kesinlik ve doğruluk', 1, 4)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-matlab-temel', 'dsp', 'MatStudio: betik, vektör ve indeksleme', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-matlab-matris', 'dsp', 'MatStudio: matrisler ve işlemler', 2, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-matlab-fonksiyon', 'dsp', 'MatStudio: işleçler, fonksiyonlar ve rastgele sayılar', 2, 3)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-matlab-istatistik', 'dsp', 'MatStudio: birleştirme ve istatistik fonksiyonları', 2, 4)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-ayrik-diziler', 'dsp', 'Temel diziler, üstel ve sinüzoidal diziler', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-sinyal-islemleri', 'dsp', 'Simetri, dönüşümler, enerji ve güç', 3, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-ayrik-sistemler', 'dsp', 'Ayrık zamanlı sistemler ve LTI', 3, 3)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-konvolusyon-temel', 'dsp', 'Konvolüsyon toplamı, özellikleri ve doğrudan hesap', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-konvolusyon-hesap', 'dsp', 'Uzunluk, grafik yöntem, kaydırma kuralı ve polinomlar', 4, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-konvolusyon-uygulama', 'dsp', 'Zarlar, hareketli ortalama ve korelasyon', 4, 3)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-sinusler', 'dsp', 'Sinüs: çember, genlik, frekans, faz ve toplamlar', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-fourier-serisi', 'dsp', 'Fourier serisi ve frekans spektrumu', 5, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-fourier-donusumu', 'dsp', 'Sarma makinesi, Euler formülü ve Fourier dönüşümü', 5, 3)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-frekans-yaniti', 'dsp', 'Frekans yanıtı: büyüklük, dB, faz ve simetri', 6, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-filtreler', 'dsp', 'Doğrusal faz, tam geçiren, frekans seçici filtreler ve bağlantılar', 6, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-dtft', 'dsp', 'DTFT, özellikleri ve ters sistem', 6, 3)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-dft-temel', 'dsp', 'DFS, DFT ve ters DFT, frekans ekseni ve sıfır doldurma', 7, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-dft-ozellikleri', 'dsp', 'DFT özellikleri, simetri ve dairesel kaydırma', 7, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-dairesel-konvolusyon', 'dsp', 'Dairesel konvolüsyon, DFT ile konvolüsyon ve blok yöntemleri', 7, 3)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-fft-temel', 'dsp', 'FFT''nin işlem kazancı, zamanda seyreltme ve kelebek', 8, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-fft-akis', 'dsp', 'Akış diyagramı, bit ters sırası ve frekansta seyreltme', 8, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ds-fft-uygulama', 'dsp', 'Karma N için FFT ve FFT''nin kullanımı', 8, 3)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-dsp-avantaj', 'dsp', 'ds-dsp-giris', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi dijital sinyal işlemenin analog işlemeye göre bir üstünlüğü **değildir**?', '{"choices":["Yazılım değiştirilerek aynı donanım başka bir işlem yapabilir","Hassasiyet bit sayısı artırılarak yükseltilebilir","Sonuçlar sıcaklıkla ve bileşen yaşlanmasıyla kaymaz","Her bant genişliğindeki sinyali gerçek zamanlı işleyebilir"]}', '{"index":3}', 'Çok geniş bantlı sinyalleri gerçek zamanlı işleyecek kadar hızlı dijital devre her zaman yoktur; bu durumda analog ya da optik işleme tek seçenek olabilir. Diğer üçü dijital işlemenin bilinen üstünlükleridir.', 1, 'Hafta 1, Giriş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-dsp-genis-bant', 'dsp', 'ds-dsp-giris', 1, 'tf', 'original', 'Bant genişliği çok geniş olan bazı sinyallerin gerçek zamanlı işlenmesinde analog ya da optik sinyal işleme tek uygun çözüm olabilir.', '{}', '{"value":true}', 'Doğru. DSP her soruna çözüm değildir; dijital devreler yeterince hızlı değilse geniş bantlı sinyaller analog ya da optik olarak işlenir.', 1, 'Hafta 1, Giriş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-dsp-programlanabilir', 'dsp', 'ds-dsp-giris', 1, 'fill', 'derived', 'Dijital işleme donanımında yapılan işlem yazılımla değiştirilebildiği için dijital donanıma ____ denir.', '{"blanks":1}', '{"blanks":[["programlanabilir","programlanabilir donanım"]]}', 'Dijital donanım programlanabilirdir: filtreyi değiştirmek için devreyi yeniden kurmak yerine programı değiştirmek yeter. Bu, tasarıma esneklik katar.', 1, 'Hafta 1, Giriş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-adc-seviye', 'dsp', 'ds-dsp-giris', 1, 'num', 'derived', '10 bitlik bir analogdan dijitale dönüştürücü gerilimi kaç farklı seviyeden birine yuvarlar?', '{"blanks":1}', '{"blanks":[["1024"]]}', 'B bitlik ADC''de seviye sayısı $2^B$''dir: $2^{10} = 1024$.', 1, 'Hafta 1, Sürekli ve ayrık sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-adc-aralik', 'dsp', 'ds-dsp-giris', 1, 'num', 'derived', 'Saniyede 8000 örnek alan bir ADC''de ardışık iki örnek arasındaki süre kaç milisaniyedir?', '{"blanks":1}', '{"blanks":[["0.125"]]}', '$T_s = 1/f_s = 1/8000$ s = 0,125 ms.', 1, 'Hafta 1, Sürekli ve ayrık sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-adc-adim', 'dsp', 'ds-dsp-giris', 1, 'num', 'derived', '0–5 V aralığında çalışan 8 bitlik bir ADC''nin niceleme adımı yaklaşık kaç **mV**''tur? (adım = aralık / seviye sayısı)', '{"blanks":1}', '{"blanks":[["19.53±0.05"]]}', '8 bit $2^8 = 256$ seviye verir. Adım 5 V / 256 ≈ 0,01953 V ≈ 19,53 mV.', 2, 'Hafta 1, Sürekli ve ayrık sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-adc-bit-gerekli', 'dsp', 'ds-dsp-giris', 1, 'num', 'derived', 'Bir ölçme aralığını en az 1000 seviyeye bölmek için ADC''nin en az kaç biti olmalıdır?', '{"blanks":1}', '{"blanks":[["10"]]}', '$2^9 = 512$ yetmez, $2^{10} = 1024 \ge 1000$. En az 10 bit gerekir.', 2, 'Hafta 1, Sürekli ve ayrık sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-ayrik-tanim', 'dsp', 'ds-dsp-giris', 1, 'mcq', 'original', 'Bir sinyal ADC''den geçirilince hangi parametreleri nicelenir?', '{"choices":["Yalnızca genliği","Yalnızca zamanı","Hem zamanı hem genliği","Yalnızca frekansı"]}', '{"index":2}', 'ADC zamanı örnekleme hızıyla ($T_s = 1/f_s$ adımlarla), genliği bit sayısıyla ($2^B$ seviye) niceler. İkisi de nicelenmiş sinyale ayrık sinyal denir.', 1, 'Hafta 1, Sürekli ve ayrık sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-eksen-bagimli', 'dsp', 'ds-dsp-giris', 1, 'mcq', 'original', 'Bir sinyal grafiğinde **dikey** eksen için kullanılan adlardan hangisi değildir?', '{"choices":["Genlik","Ordinat","Bağımlı değişken","Apsis"]}', '{"index":3}', 'Apsis yatay eksenin adıdır (x ekseni, bağımsız değişken). Dikey eksene genlik, y ekseni, bağımlı değişken ya da ordinat denir.', 1, 'Hafta 1, Sinyal grafiği ve alan', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-alan-ornek', 'dsp', 'ds-dsp-giris', 1, 'fill', 'original', 'Yatay ekseni yalnızca "örnek numarası" diye etiketlenmiş bir sinyal ____ alanında sayılır.', '{"blanks":1}', '{"blanks":[["zaman"]]}', 'Sinyal elde etmenin en yaygın yolu eşit zaman aralıklarıyla örneklemek olduğu için örnek numarasıyla çizilen sinyaller zaman alanındadır.', 1, 'Hafta 1, Sinyal grafiği ve alan', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-alan-uzaysal', 'dsp', 'ds-dsp-giris', 1, 'mcq', 'original', 'Bir jeofizikçi yeryüzü boyunca her 10 metrede bir kaya yoğunluğu ölçüyor. Bu ölçümlerden oluşan sinyal hangi alandadır?', '{"choices":["Zaman alanı","Frekans alanı","Uzaysal alan","Genlik alanı"]}', '{"index":2}', 'Bağımsız değişken mesafedir; mesafe uzayın bir ölçüsü olduğu için sinyal uzaysal alandadır.', 1, 'Hafta 1, Sinyal grafiği ve alan', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-ortalama-hesap', 'dsp', 'ds-istatistik', 1, 'num', 'derived', 'x = [2 6 4 8] sinyalinin ortalamasını ve (N − 1''li) standart sapmasını bul.

μ = ____ , σ = ____', '{"blanks":2}', '{"blanks":[["5"],["2.582±0.005"]]}', 'μ = 20/4 = 5. Sapmalar −3, 1, −1, 3; kareleri toplamı 20. σ² = 20/3 ≈ 6,67, σ ≈ 2,582.', 1, 'Hafta 1, Ortalama ve standart sapma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-n-eksi-1', 'dsp', 'ds-istatistik', 1, 'mcq', 'original', 'Bir sinyalin bir parçasından standart sapma hesaplarken neden N yerine N − 1''e bölünür?', '{"choices":["Ortalama veriden hesaplandığı için sapmalar küçük çıkar","İlk örnek her zaman hatalı olduğu için hesaba katılmaz","N − 1''e bölmek sonucu her zaman tam sayı yapar","Son örnek ortalamaya eşit olduğu için sapması sıfırdır"]}', '{"index":0}', 'Örnek ortalaması verinin kendisinden hesaplanır ve verilere gerçek ortalamadan daha yakındır; bu yüzden sapmaların kareleri olduğundan küçük çıkar. N − 1''e bölmek bu eğilimi düzeltir. Bütün popülasyon biliniyorsa N''ye bölünür.', 2, 'Hafta 1, Ortalama ve standart sapma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-varyans', 'dsp', 'ds-istatistik', 1, 'fill', 'original', 'Standart sapmanın karesine, yani σ² niceliğine ____ denir.', '{"blanks":1}', '{"blanks":[["varyans"]]}', 'σ² varyanstır ve sinyalin dalgalanmasının gücünü temsil eder.', 1, 'Hafta 1, Ortalama ve standart sapma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-dc-ac', 'dsp', 'ds-istatistik', 1, 'tf', 'original', 'Bir sinyalin standart sapması, sinyalin DC bileşenini de içerir.', '{}', '{"value":false}', 'Yanlış. Standart sapma örneklerin ortalamadan sapmasını ölçer, yani yalnızca AC kısmı ölçer. DC''yi de içeren ölçü rms''tir.', 1, 'Hafta 1, Ortalama ve standart sapma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-varyans-toplam', 'dsp', 'ds-istatistik', 1, 'num', 'derived', 'Bir sinyale birbirinden bağımsız iki gürültü biniyor: σ₁ = 3 mV ve σ₂ = 4 mV. Toplam gürültünün standart sapması kaç mV''tur?', '{"blanks":1}', '{"blanks":[["5"]]}', 'Bağımsız kaynaklarda varyanslar toplanır: σ² = 9 + 16 = 25, σ = 5 mV. Standart sapmalar toplanmaz (7 değil).', 2, 'Hafta 1, Ortalama ve standart sapma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-rms-dc', 'dsp', 'ds-istatistik', 1, 'num', 'derived', 'Bir sinyal 3 V''luk DC ile standart sapması 4 V olan bir AC bileşenin toplamı. Örnek sayısı çok büyükken sinyalin rms değeri kaç volttur?', '{"blanks":1}', '{"blanks":[["5"]]}', '$x_{rms}^2 = \mu^2 + \sigma^2 = 9 + 16 = 25$, rms = 5 V. rms hem DC''yi hem AC''yi ölçer.', 2, 'Hafta 1, rms ve dalga biçimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-sinus-vrms', 'dsp', 'ds-istatistik', 1, 'num', 'original', 'Tepe genliği 10 V olan, DC''siz bir sinüs dalganın rms değeri kaç volttur?', '{"blanks":1}', '{"blanks":[["7.071±0.01"]]}', '$V_{rms} = V_p/\sqrt{2} = 10/1{,}414 \approx 7{,}07$ V.', 1, 'Hafta 1, rms ve dalga biçimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-vpp-kare', 'dsp', 'ds-istatistik', 1, 'num', 'original', 'Ortalaması sıfır olan bir kare dalganın standart sapması 1,5 V. Tepeden tepeye değeri kaç volttur?', '{"blanks":1}', '{"blanks":[["3"]]}', 'Kare dalgada her örnek ortalamadan tam yarım Vpp uzaktadır, bu yüzden $V_{pp} = 2\sigma = 3$ V.', 1, 'Hafta 1, rms ve dalga biçimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-vpp-gurultu', 'dsp', 'ds-istatistik', 1, 'mcq', 'original', 'Standart sapması 0,1 V olan Gauss gürültünün osiloskopta görülen tepeden tepeye değeri kabaca ne kadardır?', '{"choices":["0,2 V","0,28 V","0,6–0,8 V","1,5–2 V"]}', '{"index":2}', 'Rastgele gürültünün belirli bir tepe değeri yoktur; gözle görülen Vpp kabaca 6σ ile 8σ arasındadır: 0,6–0,8 V. 0,2 V kare dalganın, 0,28 V sinüsün oranıdır.', 2, 'Hafta 1, rms ve dalga biçimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-rms-sigma-esit', 'dsp', 'ds-istatistik', 1, 'tf', 'original', 'DC bileşeni olmayan bir sinyalin rms değeri standart sapmasına eşittir.', '{}', '{"value":true}', 'Doğru. $x_{rms}^2 = \mu^2 + \sigma^2$ ve μ = 0 ise rms = σ olur.', 1, 'Hafta 1, rms ve dalga biçimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-hist-ortalama', 'dsp', 'ds-olasilik', 1, 'num', 'derived', 'Bir sinyalin histogramında değer 0''dan 2, değer 1''den 5, değer 2''den 3 örnek var; başka değer yok. Histogramdan sinyalin ortalamasını bul.', '{"blanks":1}', '{"blanks":[["1.1"]]}', 'N = 2 + 5 + 3 = 10. μ = (0·2 + 1·5 + 2·3) / 10 = 11/10 = 1,1.', 2, 'Hafta 1, Histogram, pmf ve pdf', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-hist-toplam', 'dsp', 'ds-olasilik', 1, 'fill', 'original', 'Bir sinyalin histogramındaki bütün değerlerin toplamı sinyaldeki ____ sayısına eşittir.', '{"blanks":1}', '{"blanks":[["örnek","ornek","numune"]]}', 'Her örnek histogramda tam bir kez sayılır, bu yüzden $\sum H_i = N$.', 1, 'Hafta 1, Histogram, pmf ve pdf', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-pmf-olasilik', 'dsp', 'ds-olasilik', 1, 'num', 'derived', 'Değerleri 0, 1, 2, 3, 4 olabilen bir sinyalin pmf''i sırasıyla [0.1 0.2 0.4 0.2 0.1]. Rastgele bir örneğin 2''den büyük olma olasılığı nedir?', '{"blanks":1}', '{"blanks":[["0.3"]]}', '2''den büyük değerler 3 ve 4''tür: 0,2 + 0,1 = 0,3. Bir aralığın olasılığı için o aralıktaki pmf değerleri toplanır.', 2, 'Hafta 1, Histogram, pmf ve pdf', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-pdf-alan', 'dsp', 'ds-olasilik', 1, 'mcq', 'original', 'Sürekli bir sinyalin pdf''i verildiğinde sinyalin a ile b arasında olma olasılığı nasıl bulunur?', '{"choices":["pdf''in a ile b arasında kalan alanı alınır","pdf''in a noktasındaki değeri okunur","pdf''in a ile b noktalarındaki değerleri çarpılır","pdf''in en büyük değeri b − a ile bölünür"]}', '{"index":0}', 'pdf''in dikey ekseni olasılık değil olasılık yoğunluğudur. Bir aralığın olasılığı eğrinin o aralıkta altında kalan alandır; toplam alan 1''dir.', 1, 'Hafta 1, Histogram, pmf ve pdf', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-binning', 'dsp', 'ds-olasilik', 1, 'num', 'original', '0,0 ile 10,0 arasında değer alan kayan noktalı bir sinyal 1000 kutulu bir histogramla sayılıyor (kutu 0: 0–0,01). 7,2049 değerindeki bir örnek kaçıncı kutuya düşer?', '{"blanks":1}', '{"blanks":[["720"]]}', 'Kutu genişliği 10 / 1000 = 0,01. 7,2049 / 0,01 = 720,49; aşağı yuvarlanınca kutu 720.', 2, 'Hafta 1, Histogram, pmf ve pdf', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-kutu-alt-sinir', 'dsp', 'ds-olasilik', 1, 'num', 'original', '5 ile 15 arasında değer alan kayan noktalı bir sinyal 500 kutulu bir histogramla sayılıyor (kutu 0: 5–5,02). 9,137 değerindeki bir örnek kaçıncı kutuya düşer?', '{"blanks":1}', '{"blanks":[["206"]]}', 'w = (15 − 5) / 500 = 0,02. Önce alt sınır çıkarılır: (9,137 − 5) / 0,02 = 206,85; aşağı yuvarlanınca kutu 206.', 2, 'Hafta 1, Histogram, pmf ve pdf', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-kutu-yogunluk', 'dsp', 'ds-olasilik', 1, 'num', 'original', 'N = 2000 örnekli bir sinyalin histogramında kutu genişliği 0,05. Bir kutuda 150 örnek var. Bu kutunun pdf yaklaşımı (yoğunluk) kaçtır?', '{"blanks":1}', '{"blanks":[["1.5"]]}', 'pₖ = Hₖ / (N·w) = 150 / (2000 · 0,05) = 150 / 100 = 1,5. Yoğunluk 1''den büyük olabilir; çubuğun alanı 1,5 · 0,05 = 0,075''tir.', 2, 'Hafta 1, Histogram, pmf ve pdf', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-kutu-sayisi', 'dsp', 'ds-olasilik', 1, 'mcq', 'original', 'Az örnekli bir sinyalin histogramında kutu sayısı çok büyük seçilirse ne olur?', '{"choices":["Kutuların çoğu boş kalır, histogram pürüzlenir","Birbirine yakın tepeler tek yığına karışır","Kutulardaki sayıların toplamı N''yi aşar","Kutu genişliği büyür, ayrıntı kaybolur"]}', '{"index":0}', 'Kutu başına ortalama N / M örnek düşer. M büyüyünce bu sayı küçülür: çoğu kutu boş kalır ya da birkaç örnek alır. Tepelerin karışması az kutunun sonucudur; toplam her zaman N''dir.', 1, 'Hafta 1, Histogram, pmf ve pdf', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-hist-puruz', 'dsp', 'ds-olasilik', 1, 'mcq', 'original', 'Bir histogramı çıkarırken kullanılan örnek sayısı 4 katına çıkarılırsa histogramın pürüzlülüğü (istatistiksel gürültüsü) ne olur?', '{"choices":["Değişmez","Yarıya iner","Dörtte birine iner","İki katına çıkar"]}', '{"index":1}', 'Pürüzlülük örnek sayısının kareköküyle ters orantılıdır: √4 = 2, yani yarıya iner.', 2, 'Hafta 1, Histogram, pmf ve pdf', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-gauss-68', 'dsp', 'ds-olasilik', 1, 'num', 'original', 'Normal dağılımlı bir sinyalin örneklerinin yaklaşık yüzde kaçı μ − σ ile μ + σ arasındadır?', '{"blanks":1}', '{"blanks":[["68±1"]]}', 'Yaklaşık %68''i ±1σ, %95''i ±2σ, %99,7''si ±3σ içindedir.', 1, 'Hafta 1, Normal dağılım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-gauss-uc-sigma', 'dsp', 'ds-olasilik', 1, 'mcq', 'derived', 'Bir ADC''nin okuduğu değerler μ = 100, σ = 5 olan normal dağılıma uyuyor. Okumaların yaklaşık %99,7''si hangi aralıktadır?', '{"choices":["95 – 105","90 – 110","85 – 115","80 – 120"]}', '{"index":2}', '%99,7 aralığı μ ± 3σ''dır: 100 ± 15, yani 85 ile 115 arası.', 2, 'Hafta 1, Normal dağılım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-gauss-tepe', 'dsp', 'ds-olasilik', 1, 'num', 'derived', 'μ = 0, σ = 2 olan normal dağılımın pdf''inin tepe değeri (x = 0''daki değeri) nedir?', '{"blanks":1}', '{"blanks":[["0.1995±0.001"]]}', 'Tepe $1/(\sqrt{2\pi}\,\sigma) = 1/(2{,}5066 \cdot 2) \approx 0{,}1995$.', 3, 'Hafta 1, Normal dağılım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-merkezi-limit', 'dsp', 'ds-olasilik', 1, 'fill', 'original', 'Birçok rastgele sayı toplandığında, sayılar hangi dağılımdan gelirse gelsin toplamın normal dağılıma yaklaştığını söyleyen teoreme ____ limit teoremi denir.', '{"blanks":1}', '{"blanks":[["merkezi","merkezî"]]}', 'Merkezi limit teoremi, doğadaki rastgele sinyallerin çoğunun neden Gauss biçimli olduğunu açıklar.', 1, 'Hafta 1, Normal dağılım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-gauss-sigma-tepe', 'dsp', 'ds-olasilik', 1, 'tf', 'derived', 'Normal dağılımda σ iki katına çıkarılırsa pdf eğrisinin tepe yüksekliği yarıya iner.', '{}', '{"value":true}', 'Doğru. Tepe yüksekliği $1/(\sqrt{2\pi}\,\sigma)$''dır, σ ile ters orantılıdır. Eğri yayılırken alan 1''de kalsın diye alçalır.', 2, 'Hafta 1, Normal dağılım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-rnd-sigma', 'dsp', 'ds-gurultu-dogruluk', 1, 'num', 'original', '0 ile 1 arasında düzgün dağılımlı bir rastgele sayı üretecinin (RND) standart sapması nedir?', '{"blanks":1}', '{"blanks":[["0.2887±0.002","0.29±0.005"]]}', 'Düzgün dağılımın standart sapması $1/\sqrt{12} \approx 0{,}289$''dur; ortalaması 0,5''tir.', 2, 'Hafta 1, Rastgele sayılarla gürültü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-rnd-12', 'dsp', 'ds-gurultu-dogruluk', 1, 'num', 'original', '12 RND''nin toplamından ortalaması 2, standart sapması 0,5 olan bir Gauss gürültü örneği üretiliyor. Toplam 8,0 çıktıysa üretilen örnek kaçtır?', '{"blanks":1}', '{"blanks":[["3"]]}', 'x = (toplam − 6) · σ + μ = (8 − 6) · 0,5 + 2 = 3. On iki RND''nin toplamının ortalaması 6, standart sapması 1''dir.', 2, 'Hafta 1, Rastgele sayılarla gürültü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-rnd-iki', 'dsp', 'ds-gurultu-dogruluk', 1, 'mcq', 'original', 'İki RND''nin (0–1 arası düzgün) toplamının pdf''i hangi biçimdedir?', '{"choices":["Düzgün","Üçgen","Gauss","Kare"]}', '{"index":1}', 'Toplam 0 ile 2 arasındadır; 1 civarını veren birleşimler çok, uçları veren birleşimler azdır. pdf üçgendir, ortalaması 1, standart sapması 1/√6 ≈ 0,41.', 1, 'Hafta 1, Rastgele sayılarla gürültü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-kesinlik', 'dsp', 'ds-gurultu-dogruluk', 1, 'mcq', 'original', '1000 m''deki bir hedefe yapılan sonar ölçümleri 990 m ile 1010 m arasında geniş saçılıyor ama ortalamaları 1000,1 m. Sistem için ne söylenir?', '{"choices":["Doğruluk iyi, kesinlik kötü","Kesinlik iyi, doğruluk kötü","İkisi de iyi","İkisi de kötü"]}', '{"index":0}', 'Ortalama gerçek değere çok yakın: doğruluk iyi. Ölçümler birbirinden uzak (σ büyük): kesinlik kötü. Çaresi çok ölçümün ortalamasını almaktır.', 2, 'Hafta 1, Kesinlik ve doğruluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-ortalama-iyilestirir', 'dsp', 'ds-gurultu-dogruluk', 1, 'tf', 'original', 'Çok sayıda ölçümün ortalamasını almak, bir ölçüm sistemindeki sistematik hatayı (doğruluk hatasını) giderir.', '{}', '{"value":false}', 'Yanlış. Ortalama almak rastgele hatayı (kesinliği) iyileştirir; sistematik hata her ölçümde aynı olduğu için ortalamada aynen kalır. Onun çaresi kalibrasyondur.', 2, 'Hafta 1, Kesinlik ve doğruluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h1-kalibrasyon', 'dsp', 'ds-gurultu-dogruluk', 1, 'fill', 'original', 'Doğruluğu kötü, yani sistematik hatası olan bir ölçüm sisteminin çaresi ____ yapmaktır.', '{"blanks":1}', '{"blanks":[["kalibrasyon"]]}', 'Sistematik hata kalibrasyonla giderilir; rastgele hata ise ortalama alarak azaltılır.', 1, 'Hafta 1, Kesinlik ve doğruluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-noktali-virgul', 'dsp', 'ds-matlab-temel', 2, 'mcq', 'original', 'MatStudio''da bir komutun sonuna noktalı virgül (`;`) konursa ne olur?', '{"choices":["Komut çalışır ama sonucu komut penceresine yazılmaz","Komut çalışmaz, yorum satırı sayılır","Sonuç ans değişkenine yazılır, asıl değişken değişmez","Komut bir sonraki satırla birleştirilir"]}', '{"index":0}', 'Noktalı virgül yalnızca çıktıyı bastırır; komut yine çalışır ve değişken atanır. Noktalı virgül yoksa sonuç `x = ...` biçiminde yazılır.', 1, 'Hafta 2, MatStudio işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-ans', 'dsp', 'ds-matlab-temel', 2, 'fill', 'original', 'Komut penceresine yalnızca `3 + 4` yazılırsa sonuç hangi değişkene konur?', '{"blanks":1}', '{"blanks":[["ans"]]}', 'Bir değişkene atanmamış sonuç `ans` (answer) değişkenine konur: `ans = 7`.', 1, 'Hafta 2, MatStudio işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-yorum', 'dsp', 'ds-matlab-temel', 2, 'fill', 'original', 'Bir MatStudio betiğini Run Section ile ayrı çalıştırılabilen bölümlere ayırmak için satır başına hangi işaret yazılır?', '{"blanks":1}', '{"blanks":[["%%"]]}', '`%%` ile başlayan yorum satırı yeni bir bölüm başlatır. Tek `%` yalnızca yorumdur.', 1, 'Hafta 2, MatStudio işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-nan', 'dsp', 'ds-matlab-temel', 2, 'fill', 'original', 'MatStudio''da `0/0` işleminin sonucu nedir?', '{"blanks":1}', '{"blanks":[["NaN"]]}', '0/0 tanımsızdır ve MatStudio `NaN` (not a number) verir. `1/0` ise `Inf` verir.', 1, 'Hafta 2, MatStudio işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-clear', 'dsp', 'ds-matlab-temel', 2, 'mcq', 'original', 'Çalışma alanındaki (workspace) bütün değişkenleri silen komut hangisidir?', '{"choices":["clc","clear","close all","clf"]}', '{"index":1}', '`clear` değişkenleri siler. `clc` yalnızca komut penceresini temizler, `close all` şekil pencerelerini kapatır, `clf` geçerli şekli temizler.', 1, 'Hafta 2, MatStudio işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-aralik', 'dsp', 'ds-matlab-temel', 2, 'num', 'original', '`x1 = 2:3:17` komutunun ürettiği vektörü yaz.', '{"blanks":1}', '{"blanks":[["[2 5 8 11 14 17]"]]}', '2''den başlar, 3''er artar ve 17''yi geçmeden durur: 2, 5, 8, 11, 14, 17.', 1, 'Hafta 2, Vektör oluşturma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-aralik-uzunluk', 'dsp', 'ds-matlab-temel', 2, 'num', 'derived', '`length(0:0.25:2)` kaçtır?', '{"blanks":1}', '{"blanks":[["9"]]}', '0, 0,25, 0,5, ..., 2: (2 − 0)/0,25 + 1 = 9 eleman.', 2, 'Hafta 2, Vektör oluşturma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-linspace', 'dsp', 'ds-matlab-temel', 2, 'num', 'original', '`linspace(0, 1, 5)` komutunun ürettiği vektörü yaz.', '{"blanks":1}', '{"blanks":[["[0 0.25 0.5 0.75 1]"]]}', '0 ile 1 dahil 5 eşit aralıklı değer: aralık (1 − 0)/(5 − 1) = 0,25.', 1, 'Hafta 2, Vektör oluşturma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-geri-sayma', 'dsp', 'ds-matlab-temel', 2, 'num', 'derived', '`18:-4:3` komutunun ürettiği vektörü yaz.', '{"blanks":1}', '{"blanks":[["[18 14 10 6]"]]}', '18''den başlayıp 4''er azalır; 2 sınırın (3) altında kaldığı için alınmaz: 18, 14, 10, 6.', 2, 'Hafta 2, Vektör oluşturma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-aralik-son', 'dsp', 'ds-matlab-temel', 2, 'tf', 'derived', '`1:2:10` ifadesinin son elemanı 10''dur.', '{}', '{"value":false}', 'Yanlış. 1, 3, 5, 7, 9''dan sonraki adım 11 olur ve sınırı aşar; son eleman 9''dur.', 1, 'Hafta 2, Vektör oluşturma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-indeks-end', 'dsp', 'ds-matlab-temel', 2, 'num', 'original', '`x = [2 3.5 6 7 8.2 -2 -5 6];` için `x(end-2:end)` nedir?', '{"blanks":1}', '{"blanks":[["[-2 -5 6]"]]}', '`end` = 8; `end-2:end` = 6:8. Elemanlar −2, −5, 6.', 1, 'Hafta 2, İndeksleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-indeks-adim', 'dsp', 'ds-matlab-temel', 2, 'num', 'derived', '`y = [9 4 1 7 3 8];` için `y(1:2:end)` nedir?', '{"blanks":1}', '{"blanks":[["[9 1 3]"]]}', 'İndisler 1, 3, 5: değerler 9, 1, 3.', 2, 'Hafta 2, İndeksleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-indeks-sifir', 'dsp', 'ds-matlab-temel', 2, 'mcq', 'derived', '`x = [5 6 7];` tanımlıyken `x(0)` yazılırsa ne olur?', '{"choices":["5 döner","7 döner","Hata verir","Boş vektör döner"]}', '{"index":2}', 'MatStudio''da indisler 1''den başlar; 0 geçerli bir indis değildir ve hata verir. İlk eleman `x(1)`''dir.', 1, 'Hafta 2, İndeksleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-matris-satir', 'dsp', 'ds-matlab-matris', 2, 'num', 'original', '`A = [2 4 6; 1 3 5; 7 8 9];` için `A(2, :)` nedir?', '{"blanks":1}', '{"blanks":[["[1 3 5]"]]}', '`A(2, :)` 2. satırın bütün sütunlarıdır: 1, 3, 5.', 1, 'Hafta 2, Matris oluşturma ve işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-dogrusal-indeks', 'dsp', 'ds-matlab-matris', 2, 'num', 'original', '`A = [2 4 6; 1 3 5; 7 8 9];` için `A(4)` kaçtır?', '{"blanks":1}', '{"blanks":[["4"]]}', 'Doğrusal indeks sütunlara göre sayar: 2, 1, 7 (1. sütun), sonra 4. Yani `A(4)` = `A(1, 2)` = 4.', 2, 'Hafta 2, Matris oluşturma ve işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-find', 'dsp', 'ds-matlab-matris', 2, 'num', 'original', '`A = [3 8 1; 6 2 9];` için `find(A > 5)` hangi indisleri döndürür? (sütun vektörünü satır gibi yazabilirsin)', '{"blanks":1}', '{"blanks":[["[2 3 6]"]]}', 'Sütun sırası: 3, 6, 8, 2, 1, 9. 5''ten büyükler 6, 8 ve 9; doğrusal indeksleri 2, 3 ve 6.', 2, 'Hafta 2, Matris oluşturma ve işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-dogrusal-formul', 'dsp', 'ds-matlab-matris', 2, 'num', 'derived', '4 satırlı bir matriste 3. satır, 2. sütundaki elemanın doğrusal indeksi kaçtır?', '{"blanks":1}', '{"blanks":[["7"]]}', 'Doğrusal indeks (j − 1)·r + i = (2 − 1)·4 + 3 = 7.', 2, 'Hafta 2, Matris oluşturma ve işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-eleman-carpim', 'dsp', 'ds-matlab-matris', 2, 'num', 'derived', '`[1 2 3] .* [4 5 6]` nedir?', '{"blanks":1}', '{"blanks":[["[4 10 18]"]]}', 'Eleman bazında çarpım: 1·4, 2·5, 3·6.', 1, 'Hafta 2, Matris işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-matris-carpim', 'dsp', 'ds-matlab-matris', 2, 'num', 'original', '`[2 0; 1 3] * [1 2; 0 1]` matris çarpımının sonucunu satır sırasıyla yaz (ör. `[a b; c d]`).', '{"blanks":1}', '{"blanks":[["[2 4; 1 5]"]]}', '1. satır: 2·1 + 0·0 = 2, 2·2 + 0·1 = 4. 2. satır: 1·1 + 3·0 = 1, 1·2 + 3·1 = 5.', 2, 'Hafta 2, Matris işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-kare-hata', 'dsp', 'ds-matlab-matris', 2, 'mcq', 'derived', '`x = [1 2 3];` vektörünün her elemanının karesini almak için hangisi yazılır?', '{"choices":["x^2","x.^2","x*x","x''^2"]}', '{"index":1}', '`.^` eleman bazında kuvvettir. `x^2` ve `x*x` matris işlemidir ve 1×3''lük bir vektörde hata verir.', 1, 'Hafta 2, Matris işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-us', 'dsp', 'ds-matlab-matris', 2, 'num', 'original', '`2.^[1 2 3]` nedir?', '{"blanks":1}', '{"blanks":[["[2 4 8]"]]}', '2''nin her elemana kuvveti: 2¹, 2², 2³.', 1, 'Hafta 2, Matris işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-det', 'dsp', 'ds-matlab-matris', 2, 'num', 'original', '`det([4 1; 2 3])` kaçtır?', '{"blanks":1}', '{"blanks":[["10"]]}', '2×2 determinant: 4·3 − 1·2 = 10.', 2, 'Hafta 2, Matris işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-esit-degil', 'dsp', 'ds-matlab-fonksiyon', 2, 'fill', 'original', 'MatStudio''da "eşit değil" işleci nasıl yazılır?', '{"blanks":1}', '{"blanks":[["~="]]}', 'Eşit değil `~=` ile yazılır. `==` eşitlik denetimi, `=` atamadır.', 1, 'Hafta 2, İlişkisel semboller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-mantiksal-sayma', 'dsp', 'ds-matlab-fonksiyon', 2, 'num', 'derived', '`x = [4 -1 7 0 2 9];` için `sum(x > 2)` kaçtır?', '{"blanks":1}', '{"blanks":[["3"]]}', '`x > 2` = [1 0 1 0 0 1]; birlerin toplamı 3. sum mantıksal vektörde koşulu sağlayan eleman sayısını verir.', 1, 'Hafta 2, İlişkisel semboller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-mantiksal-secim', 'dsp', 'ds-matlab-fonksiyon', 2, 'num', 'derived', '`x = [4 -1 7 0 2 9];` için `x(x > 0 & x < 5)` nedir?', '{"blanks":1}', '{"blanks":[["[4 2]"]]}', 'Hem 0''dan büyük hem 5''ten küçük olanlar: 4 ve 2.', 2, 'Hafta 2, İlişkisel semboller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-kisa-devre', 'dsp', 'ds-matlab-fonksiyon', 2, 'mcq', 'derived', '`&&` işlecinin `&` işlecinden farkı nedir?', '{"choices":["Yalnızca skalerlerle çalışır ve sol taraf yanlışsa sağı hesaplamaz","Vektörlerde eleman bazında VE işlemi yapar","VE yerine VEYA işlemi yapar","İki tarafı da her zaman hesaplar ama sonucu tersine çevirir"]}', '{"index":0}', '`&&` kısa devre VE''dir: skalerlerde çalışır, sol taraf 0 ise sonuç zaten 0 olduğundan sağ tarafı hesaplamaz. Eleman bazında VE `&`''dir.', 2, 'Hafta 2, İlişkisel semboller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-fonksiyon-cikis', 'dsp', 'ds-matlab-fonksiyon', 2, 'num', 'derived', 'Aşağıdaki fonksiyon için `[p, q] = hesap(3, 5)` çağrısından sonra `q` kaçtır?

```matlab
function [a, b] = hesap(x, y)
    a = x * y;
    b = x - y;
end
```', '{"blanks":1}', '{"blanks":[["-2"]]}', 'Çıkışlar sırayla eşleşir: p = a = 15, q = b = 3 − 5 = −2.', 2, 'Hafta 2, Fonksiyon oluşturma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-dosya-adi', 'dsp', 'ds-matlab-fonksiyon', 2, 'fill', 'original', '`function [toplam, fark] = toplamFark(sayi1, sayi2)` ile başlayan fonksiyon kendi dosyasına kaydedilecekse dosyanın adı ne olmalıdır?', '{"blanks":1}', '{"blanks":[["toplamFark.m","toplamfark.m"]]}', 'Ayrı dosyadaki bir fonksiyonun dosya adı fonksiyon adıyla aynı olmalıdır: `toplamFark.m`.', 1, 'Hafta 2, Fonksiyon oluşturma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-yerel-degisken', 'dsp', 'ds-matlab-fonksiyon', 2, 'tf', 'derived', 'Bir fonksiyonun içinde oluşturulan değişkenler, fonksiyon bittikten sonra çağıran betiğin çalışma alanında görünür.', '{}', '{"value":false}', 'Yanlış. Fonksiyon değişkenleri yereldir; dışarıya yalnızca çıkış argümanları döner.', 2, 'Hafta 2, Fonksiyon oluşturma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-anonim', 'dsp', 'ds-matlab-fonksiyon', 2, 'num', 'derived', '`f = @(t) 3*t + 1;` tanımlıyken `f(2)` kaçtır?', '{"blanks":1}', '{"blanks":[["7"]]}', 'Anonim fonksiyon t = 2 için 3·2 + 1 = 7 verir.', 1, 'Hafta 2, Fonksiyon oluşturma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-rand-boyut', 'dsp', 'ds-matlab-fonksiyon', 2, 'num', 'original', '`numel(rand(5, 3))` kaçtır? (numel eleman sayısını verir)', '{"blanks":1}', '{"blanks":[["15"]]}', '`rand(5, 3)` 5×3''lük bir matris üretir: 15 eleman.', 1, 'Hafta 2, Rastgele sayı üretme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-randi', 'dsp', 'ds-matlab-fonksiyon', 2, 'mcq', 'original', '`randi(10, 5, 2)` ne üretir?', '{"choices":["1 ile 10 arası tamsayılardan 5×2 matris","0 ile 1 arası sayılardan 10×5 matris","1 ile 5 arası tamsayılardan 10×2 matris","Normal dağılımlı sayılardan 5×2 matris"]}', '{"index":0}', 'İlk argüman en büyük tamsayıdır (en küçüğü 1), sonrakiler boyuttur: 5 satır, 2 sütun.', 1, 'Hafta 2, Rastgele sayı üretme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-randperm', 'dsp', 'ds-matlab-fonksiyon', 2, 'tf', 'original', '`randperm(6)` ile üretilen vektörde aynı sayı iki kez bulunabilir.', '{}', '{"value":false}', 'Yanlış. randperm 1''den n''ye kadar sayıların tekrarsız bir karışık dizilişini verir; her sayı tam bir kez bulunur.', 1, 'Hafta 2, Rastgele sayı üretme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-rand-aralik', 'dsp', 'ds-matlab-fonksiyon', 2, 'mcq', 'derived', '2 ile 5 arasında düzgün dağılımlı N sayı üreten ifade hangisidir?', '{"choices":["2 + 3*rand(1, N)","5*rand(1, N) + 2","3 + 2*rand(1, N)","rand(2, 5)"]}', '{"index":0}', 'a + (b − a)·rand: 2 + 3·rand, 0–1 aralığını 2–5''e taşır. `5*rand + 2` 2–7, `3 + 2*rand` 3–5 verir; `rand(2, 5)` 2×5''lik bir matristir.', 2, 'Hafta 2, Rastgele sayı üretme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-cat-boyut', 'dsp', 'ds-matlab-istatistik', 2, 'num', 'original', '`size(cat(1, ones(2, 3), zeros(4, 3)))` nedir?', '{"blanks":1}', '{"blanks":[["[6 3]"]]}', '`cat(1, ...)` alt alta birleştirir: satırlar toplanır (2 + 4 = 6), sütun 3 kalır.', 2, 'Hafta 2, Dizi birleştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-vertcat', 'dsp', 'ds-matlab-istatistik', 2, 'fill', 'original', '`[A; B]` ile aynı işi yapan, matrisleri alt alta birleştiren fonksiyonun adı nedir?', '{"blanks":1}', '{"blanks":[["vertcat"]]}', '`vertcat` (vertical concatenation) alt alta, `horzcat` yan yana birleştirir.', 1, 'Hafta 2, Dizi birleştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-yatay-kural', 'dsp', 'ds-matlab-istatistik', 2, 'mcq', 'derived', '`[A, B]` ile yan yana birleştirme için hangi koşul sağlanmalıdır?', '{"choices":["Satır sayıları aynı olmalı","Sütun sayıları aynı olmalı","İkisi de kare olmalı","Eleman sayıları aynı olmalı"]}', '{"index":0}', 'Yan yana birleştirmede sütunlar eklenir; satır sayıları aynı olmalıdır. Alt alta birleştirmede sütun sayıları aynı olmalıdır.', 1, 'Hafta 2, Dizi birleştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-mean-boyut', 'dsp', 'ds-matlab-istatistik', 2, 'num', 'original', '`A = [2 4; 6 8; 1 3];` için `mean(A)` nedir?', '{"blanks":1}', '{"blanks":[["[3 5]"]]}', 'Matriste varsayılan boyut 1''dir: her sütunun ortalaması. (2+6+1)/3 = 3, (4+8+3)/3 = 5.', 1, 'Hafta 2, Ortalama, standart sapma, varyans ve medyan', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-mean-all', 'dsp', 'ds-matlab-istatistik', 2, 'num', 'original', '`A = [2 4; 6 8; 1 3];` için `mean(A, ''all'')` kaçtır?', '{"blanks":1}', '{"blanks":[["4"]]}', 'Bütün elemanların toplamı 24, sayısı 6: 24/6 = 4.', 1, 'Hafta 2, Ortalama, standart sapma, varyans ve medyan', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-median', 'dsp', 'ds-matlab-istatistik', 2, 'num', 'original', '`median([7 1 4 9])` kaçtır?', '{"blanks":1}', '{"blanks":[["5.5"]]}', 'Sıralı: 1, 4, 7, 9. Eleman sayısı çift; ortadaki iki sayının ortalaması (4 + 7)/2 = 5,5.', 1, 'Hafta 2, Ortalama, standart sapma, varyans ve medyan', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-std-agirlik', 'dsp', 'ds-matlab-istatistik', 2, 'mcq', 'original', '`std(A, 1, 2)` neyi hesaplar?', '{"choices":["Her satırın N''ye bölünerek bulunan standart sapmasını","Her sütunun N − 1''e bölünerek bulunan standart sapmasını","Bütün elemanların standart sapmasının iki katını","Her satırın N − 1''e bölünerek bulunan standart sapmasını"]}', '{"index":0}', 'std''de ikinci argüman ağırlıktır (1: N''ye böl), üçüncüsü boyuttur (2: satırlar). Sonuç her satır için bir değer olan sütun vektörüdür.', 2, 'Hafta 2, Ortalama, standart sapma, varyans ve medyan', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-corrcoef', 'dsp', 'ds-matlab-istatistik', 2, 'mcq', 'original', 'İki değişkenin korelasyon katsayısı 1 çıkıyorsa ne söylenir?', '{"choices":["Aralarında tam pozitif doğrusal ilişki var","Aralarında hiçbir doğrusal ilişki yok","Aralarında tam negatif doğrusal ilişki var","İki değişkenin ortalamaları eşit"]}', '{"index":0}', 'Katsayı −1 ile 1 arasındadır: 1 tam pozitif, −1 tam negatif doğrusal ilişki, 0 doğrusal ilişki yok demektir.', 1, 'Hafta 2, Ortalama, standart sapma, varyans ve medyan', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h2-corrcoef-hesap', 'dsp', 'ds-matlab-istatistik', 2, 'num', 'derived', '`R = corrcoef([1 2 3 4], [8 6 4 2]);` için `R(1, 2)` kaçtır?', '{"blanks":1}', '{"blanks":[["-1"]]}', 'İkinci veri birincinin tam doğrusal azalan bir fonksiyonu (y = 10 − 2x): katsayı −1.', 2, 'Hafta 2, Ortalama, standart sapma, varyans ve medyan', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-dizi-okuma', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', '$x(n) = \{3,\ -1,\ \underset{\uparrow}{2},\ 5,\ 4\}$ dizisinde ok n = 0''ı gösteriyor.

x(1) = ____ , x(−2) = ____', '{"blanks":2}', '{"blanks":[["5"],["3"]]}', 'Ok x(0) = 2''yi gösterir. Sağdakiler x(1) = 5, x(2) = 4; soldakiler x(−1) = −1, x(−2) = 3.', 1, 'Hafta 3, Ayrık zamanlı sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-tanimsiz', 'dsp', 'ds-ayrik-diziler', 3, 'tf', 'original', 'Ayrık zamanlı bir x(n) dizisi n = 0,5 gibi tamsayı olmayan anlarda sıfır değerini alır.', '{}', '{"value":false}', 'Yanlış. x(n) yalnızca tamsayı n''lerde tanımlıdır; tamsayı olmayan n''lerde sıfır değil, tanımsızdır.', 1, 'Hafta 3, Ayrık zamanlı sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-durtu-deger', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', '$\displaystyle\sum_{n=-\infty}^{\infty} n^2\,\delta(n-3)$ toplamı kaçtır?', '{"blanks":1}', '{"blanks":[["9"]]}', 'δ(n − 3) yalnızca n = 3''te 1''dir; toplamda yalnızca o terim kalır: 3² = 9.', 2, 'Hafta 3, Farklı dizi çeşitleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-basamak-fark', 'dsp', 'ds-ayrik-diziler', 3, 'fill', 'original', 'u(n) − u(n − 1) farkı hangi diziye eşittir?', '{"blanks":1}', '{"blanks":[["δ(n)","delta(n)","\\delta(n)","birim dürtü"]]}', 'İki basamak n ≥ 1 için birbirini götürür; yalnızca n = 0''da 1 − 0 = 1 kalır. Bu birim dürtüdür: δ(n) = u(n) − u(n − 1).', 1, 'Hafta 3, Farklı dizi çeşitleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-rampa', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'original', 'Birim rampa $u_r(n)$ için $u_r(n - 2)$ dizisinin n = 5''teki değeri kaçtır?', '{"blanks":1}', '{"blanks":[["3"]]}', '$u_r(n - 2) = (n - 2)$, n ≥ 2 için. n = 5''te 3.', 1, 'Hafta 3, Farklı dizi çeşitleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-basamak-toplam', 'dsp', 'ds-ayrik-diziler', 3, 'mcq', 'original', 'Birim basamak birim dürtü cinsinden nasıl yazılır?', '{"choices":["$u(n) = \\sum_{k=-\\infty}^{n} \\delta(k)$","$u(n) = \\delta(n) - \\delta(n-1)$","$u(n) = n\\,\\delta(n)$","$u(n) = \\sum_{k=n}^{\\infty} \\delta(k)$"]}', '{"index":0}', 'n''ye kadar olan dürtülerin toplamı, n ≥ 0 olduğunda δ(0) = 1''i içerir ve 1 olur; n < 0''da hiç dürtü içermez ve 0''dır.', 2, 'Hafta 3, Farklı dizi çeşitleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-ustel-sonum', 'dsp', 'ds-ayrik-diziler', 3, 'mcq', 'original', '$x(n) = (-0{,}7)^n u(n)$ dizisi nasıl davranır?', '{"choices":["İşareti her örnekte değişerek söner","İşareti değişmeden söner","İşareti her örnekte değişerek büyür","Sabit genlikle salınır"]}', '{"index":0}', 'a negatif olduğu için işaret her örnekte değişir; |a| = 0,7 < 1 olduğu için genlik söner.', 1, 'Hafta 3, Üstel ve sinüzoidal sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-karmasik-genlik', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', '$x(n) = e^{(-0{,}1 + j\pi/4)n}$ için $|x(10)|$ kaçtır?', '{"blanks":1}', '{"blanks":[["0.3679±0.002"]]}', 'Karmaşık üstelin genliği $e^{\sigma n}$''dir; sanal kısım genliği değiştirmez. $e^{-0{,}1 \cdot 10} = e^{-1} \approx 0{,}368$.', 2, 'Hafta 3, Üstel ve sinüzoidal sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-periyot', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', '$x(n) = \cos(\pi n / 6)$ dizisinin temel periyodu kaçtır?', '{"blanks":1}', '{"blanks":[["12"]]}', '$N = 2\pi k / \omega_0 = 2\pi k / (\pi/6) = 12k$; k = 1 ile N = 12.', 1, 'Hafta 3, Sinüzoidal sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-periyot-toplam', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'original', '$x(n) = \cos(0{,}25\pi n) + \sin(\pi n / 3)$ dizisinin temel periyodu kaçtır?', '{"blanks":1}', '{"blanks":[["24"]]}', '$N_1 = 2\pi / 0{,}25\pi = 8$, $N_2 = 2\pi / (\pi/3) = 6$. Toplamın periyodu ekok(8, 6) = 24.', 2, 'Hafta 3, Sinüzoidal sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-periyodik-degil', 'dsp', 'ds-ayrik-diziler', 3, 'tf', 'derived', '$x(n) = \cos(0{,}3n)$ periyodik bir dizidir.', '{}', '{"value":false}', 'Yanlış. $\omega_0 / 2\pi = 0{,}3/2\pi$ rasyonel değildir; $0{,}3N = 2\pi k$ sağlayan tamsayılar yoktur. Ayrık sinüs ancak $\omega_0/2\pi$ rasyonelse periyodiktir.', 2, 'Hafta 3, Sinüzoidal sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-periyot-k', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', '$x(n) = \cos(0{,}3\pi n)$ dizisinin temel periyodu kaçtır?', '{"blanks":1}', '{"blanks":[["20"]]}', '$N = 2\pi k / 0{,}3\pi = 20k/3$. Tamsayı yapan en küçük k = 3: N = 20.', 3, 'Hafta 3, Sinüzoidal sinyaller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-cift-kisim', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'original', 'x(0) = 2, x(1) = 4, x(2) = −2 ve başka her yerde x(n) = 0.

$x_e(1)$ = ____ , $x_o(-1)$ = ____', '{"blanks":2}', '{"blanks":[["2"],["-2"]]}', '$x_e(1) = [x(1) + x(-1)]/2 = (4 + 0)/2 = 2$. $x_o(-1) = [x(-1) - x(1)]/2 = (0 - 4)/2 = -2$.', 2, 'Hafta 3, Simetrik diziler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-tek-sifir', 'dsp', 'ds-sinyal-islemleri', 3, 'tf', 'original', 'Gerçek değerli tek bir dizide x(0) her zaman sıfırdır.', '{}', '{"value":true}', 'Doğru. Tek dizide x(n) = −x(−n); n = 0''da x(0) = −x(0), bu yalnızca x(0) = 0 ile sağlanır.', 1, 'Hafta 3, Simetrik diziler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-cift-ornek', 'dsp', 'ds-sinyal-islemleri', 3, 'mcq', 'derived', 'Aşağıdaki dizilerden hangisi çifttir?', '{"choices":["$\\cos(0{,}2\\pi n)$","$\\sin(0{,}2\\pi n)$","$u(n)$","$\\delta(n - 1)$"]}', '{"index":0}', 'cos(−θ) = cos(θ) olduğu için cos(ω₀n) çifttir. sin tektir; u(n) ve δ(n − 1) n = 0''a göre simetrik değildir.', 1, 'Hafta 3, Simetrik diziler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-kaydirma', 'dsp', 'ds-sinyal-islemleri', 3, 'mcq', 'original', 'y(n) = x(n + 3) dizisi x(n)''e göre nasıl kaymıştır?', '{"choices":["3 örnek sola","3 örnek sağa","n = 0 etrafında aynalanmış","3 kat seyreltilmiş"]}', '{"index":0}', 'x(n − n₀)''da n₀ = −3: dizi 3 örnek sola kayar, yani ilerler. x''in n = 0''daki değeri y''de n = −3''te görünür.', 1, 'Hafta 3, Sinyal manipülasyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-ters-kaydir', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'original', 'x(n), n = 0, 1, 2, 3 için 1, 2, 3, 4 değerlerini alıyor; başka yerde 0. y(n) = x(3 − n) olsun.

y(0) = ____ , y(2) = ____', '{"blanks":2}', '{"blanks":[["4"],["2"]]}', 'y(0) = x(3) = 4; y(2) = x(1) = 2. Her n için parantezin içini hesapla.', 2, 'Hafta 3, Sinyal manipülasyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-seyreltme', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'original', 'x(n) = n (n = 0..9 için, başka yerde 0) ve y(n) = x(2n). y(3) kaçtır?', '{"blanks":1}', '{"blanks":[["6"]]}', 'y(3) = x(2·3) = x(6) = 6. Seyreltmede her ikinci örnek alınır.', 2, 'Hafta 3, Sinyal manipülasyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-ara-deger', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'original', 'n = 0, 1, 2''de 1, 2, 3 olan bir dizi 2 kat ara değer eklemeyle (up-sampling, $y(n) = x(n/2)$ n çiftken, değilse 0) genişletiliyor. y(0)''dan y(4)''e kadarki değerleri yaz.', '{"blanks":1}', '{"blanks":[["[1 0 2 0 3]"]]}', 'Çift n''lerde y(n) = x(n/2): y(0) = 1, y(2) = 2, y(4) = 3; tek n''lerde 0.', 2, 'Hafta 3, Sinyal manipülasyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-sira', 'dsp', 'ds-sinyal-islemleri', 3, 'tf', 'original', 'Bir diziyi önce 2 örnek geciktirip sonra ters çevirmek, önce ters çevirip sonra 2 örnek geciktirmekle aynı sonucu verir.', '{}', '{"value":false}', 'Yanlış. İlki x(−n − 2), ikincisi x(−(n − 2)) = x(−n + 2) verir; dizi n = 0''ın farklı taraflarına düşer.', 2, 'Hafta 3, Sinyal manipülasyonları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-enerji', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'original', 'Yalnızca n = 0, 1, 2''de 1, −2, 2 değerlerini alan dizinin enerjisi kaçtır?', '{"blanks":1}', '{"blanks":[["9"]]}', 'E = 1² + (−2)² + 2² = 1 + 4 + 4 = 9.', 1, 'Hafta 3, Sinyal enerjisi ve gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-enerji-ustel', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'derived', '$x(n) = (0{,}8)^n u(n)$ dizisinin enerjisi kaçtır?', '{"blanks":1}', '{"blanks":[["2.778±0.01","25/9"]]}', '$E = \sum (0{,}64)^n = 1/(1 - 0{,}64) = 1/0{,}36 \approx 2{,}78$.', 2, 'Hafta 3, Sinyal enerjisi ve gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-guc', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'original', 'Periyodu 4 olan bir dizinin bir periyottaki değerleri 1, 2, 1, 0. Dizinin gücü kaçtır?', '{"blanks":1}', '{"blanks":[["1.5"]]}', 'P = (1 + 4 + 1 + 0)/4 = 6/4 = 1,5.', 2, 'Hafta 3, Sinyal enerjisi ve gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-guc-basamak', 'dsp', 'ds-sinyal-islemleri', 3, 'mcq', 'derived', 'Birim basamak u(n) için hangisi doğrudur?', '{"choices":["Güç sinyalidir","Enerji sinyalidir","Hem enerji hem güç sinyalidir","Ne enerji ne güç sinyalidir"]}', '{"index":0}', 'u(n)''nin enerjisi sonsuzdur (sonsuz tane 1''in karesi), ortalama gücü ise 1/2''dir: güç sinyalidir.', 2, 'Hafta 3, Sinyal enerjisi ve gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-durtu-toplam', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'original', 'x(n) = 3δ(n + 1) − δ(n) + 2δ(n − 2) için

x(−1) = ____ , x(2) = ____', '{"blanks":2}', '{"blanks":[["3"],["2"]]}', 'Her dürtü kendi konumunda katsayısını verir: δ(n + 1) n = −1''de, δ(n − 2) n = 2''de.', 1, 'Hafta 3, Sinyal ayrıştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-eleme', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'derived', '$x(n) = n^2 + 1$ olsun. $x(n)\,\delta(n - 2)$ dizisinin n = 2''deki değeri kaçtır?', '{"blanks":1}', '{"blanks":[["5"]]}', 'Eleme özelliği: $x(n)\,\delta(n-2) = x(2)\,\delta(n-2)$. n = 2''de değer x(2) = 5; diğer her yerde 0.', 2, 'Hafta 3, Sinyal ayrıştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-dogrusal', 'dsp', 'ds-ayrik-sistemler', 3, 'mcq', 'original', 'Aşağıdaki sistemlerden hangisi doğrusaldır?', '{"choices":["y(n) = 2x(n − 1)","y(n) = x(n) + 1","y(n) = x²(n)","y(n) = |x(n)|"]}', '{"index":0}', '2x(n − 1) süperpozisyonu sağlar. Sabit eklemek homojenliği, kare ve mutlak değer toplanabilirliği bozar.', 1, 'Hafta 3, Doğrusal sistemler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-sifir-giris', 'dsp', 'ds-ayrik-sistemler', 3, 'tf', 'derived', 'Sıfır girişe sıfırdan farklı bir çıkış veren bir sistem doğrusal olamaz.', '{}', '{"value":true}', 'Doğru. Homojenlikten T[0·x] = 0·T[x] = 0 olmalıdır. y(n) = 2x(n) + 5 gibi sistemler bu yüzden doğrusal değildir.', 2, 'Hafta 3, Doğrusal sistemler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-superpozisyon', 'dsp', 'ds-ayrik-sistemler', 3, 'fill', 'original', 'Hem toplanabilir hem homojen olan bir sistem ____ ilkesini sağlar ve doğrusaldır.', '{"blanks":1}', '{"blanks":[["süperpozisyon","superpozisyon"]]}', 'Süperpozisyon: ağırlıklı girişlerin toplamının yanıtı, yanıtların aynı ağırlıklarla toplamıdır.', 1, 'Hafta 3, Doğrusal sistemler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-nedensel', 'dsp', 'ds-ayrik-sistemler', 3, 'mcq', 'original', 'Aşağıdaki sistemlerden hangisi nedenseldir?', '{"choices":["y(n) = x(n) − x(n − 2)","y(n) = x(n + 1)","y(n) = x(−n)","y(n) = x(2n)"]}', '{"index":0}', 'Yalnızca şimdiki ve geçmiş örnekleri kullanır. x(n + 1) gelecektir; x(−n) negatif n''lerde, x(2n) pozitif n''lerde gelecekteki örnekleri kullanır.', 1, 'Hafta 3, Ayrık zamanlı sistem özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-zamanla-degisen', 'dsp', 'ds-ayrik-sistemler', 3, 'mcq', 'original', 'Aşağıdaki sistemlerden hangisi zamanla değişir?', '{"choices":["y(n) = n·x(n)","y(n) = x(n − 1)","y(n) = 3x(n)","y(n) = x(n) + x(n − 1)"]}', '{"index":0}', 'n·x(n)''de katsayı zamana bağlıdır: x(n − n₀) girişi n·x(n − n₀) verir ama y(n − n₀) = (n − n₀)·x(n − n₀)''dır.', 2, 'Hafta 3, Ayrık zamanlı sistem özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-kararlilik', 'dsp', 'ds-ayrik-sistemler', 3, 'mcq', 'original', 'Aşağıdaki sistemlerden hangisi BIBO anlamında kararsızdır?', '{"choices":["$y(n) = \\sum_{k=-\\infty}^{n} x(k)$","y(n) = 0,5x(n − 1)","y(n) = x²(n)","y(n) = cos(x(n))"]}', '{"index":0}', 'Biriktirici, sınırlı u(n) girişine sınırsız büyüyen (n + 1)u(n) ile yanıt verir. Diğerleri sınırlı girişe sınırlı çıkış verir.', 2, 'Hafta 3, Ayrık zamanlı sistem özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-tersinir', 'dsp', 'ds-ayrik-sistemler', 3, 'tf', 'original', 'y(n) = x²(n) sistemi tersinirdir.', '{}', '{"value":false}', 'Yanlış. x(n) ve −x(n) aynı çıkışı verir; çıkıştan giriş tek türlü bulunamaz.', 1, 'Hafta 3, Ayrık zamanlı sistem özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-hafizasiz', 'dsp', 'ds-ayrik-sistemler', 3, 'fill', 'original', 'Çıkışı yalnızca girişin o andaki değerine bağlı olan sisteme hafızasız ya da ____ sistem denir.', '{"blanks":1}', '{"blanks":[["statik"]]}', 'Hafızasız (statik) sistemde y(n) yalnızca x(n)''e bağlıdır. Başka anlara bağlıysa sistem dinamiktir.', 1, 'Hafta 3, Ayrık zamanlı sistem özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-bibo', 'dsp', 'ds-ayrik-sistemler', 3, 'fill', 'original', '"Sınırlı giriş, sınırlı çıkış" kararlılığının İngilizce kısaltması nedir?', '{"blanks":1}', '{"blanks":[["BIBO"]]}', 'BIBO: bounded input, bounded output.', 1, 'Hafta 3, Ayrık zamanlı sistem özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-lti-durtu', 'dsp', 'ds-ayrik-sistemler', 3, 'num', 'derived', 'y(n) = x(n) − 2x(n − 1) + x(n − 2) sisteminin dürtü yanıtını n = 0''dan başlayarak yaz.', '{"blanks":1}', '{"blanks":[["[1 -2 1]"]]}', 'x(n) = δ(n) koy: h(n) = δ(n) − 2δ(n − 1) + δ(n − 2). Değerler n = 0, 1, 2''de 1, −2, 1.', 2, 'Hafta 3, LTI sistemler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-kaskat', 'dsp', 'ds-ayrik-sistemler', 3, 'tf', 'original', 'Art arda bağlanmış iki LTI sistemin sırası değiştirilirse toplam çıkış değişmez.', '{}', '{"value":true}', 'Doğru. LTI sistemlerin değişme özelliği: kaskat bağlantıda sıra önemli değildir.', 1, 'Hafta 3, LTI sistemler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h3-lti-tanim', 'dsp', 'ds-ayrik-sistemler', 3, 'fill', 'original', 'Bir LTI sistemin birim dürtüye, δ(n)''ye verdiği yanıta ____ yanıtı denir ve h(n) ile gösterilir.', '{"blanks":1}', '{"blanks":[["dürtü","durtu"]]}', 'Dürtü yanıtı h(n), LTI sistemi tamamen tanımlar; her girişin yanıtı konvolüsyonla bulunur.', 1, 'Hafta 3, LTI sistemler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-tanim', 'dsp', 'ds-konvolusyon-temel', 4, 'mcq', 'original', 'Dürtü yanıtı h(n) olan LTI bir sistemin x(n) girişine çıkışı hangisidir?', '{"choices":["$\\sum_k x(k)\\,h(n-k)$","$\\sum_k x(k)\\,h(n+k)$","$x(n)\\,h(n)$","$\\sum_k x(k)\\,h(k)$"]}', '{"index":0}', 'Konvolüsyon toplamı: her giriş örneği x(k), n − k adım sonraki dürtü yanıtı değeriyle çarpılır ve toplanır. İkinci şık korelasyondur, üçüncüsü örnek bazında çarpım, dördüncüsü n''ye bağlı bile değildir.', 1, 'Hafta 4, Konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-durtu-birim', 'dsp', 'ds-konvolusyon-temel', 4, 'fill', 'derived', 'Bir dizinin birim dürtüyle konvolüsyonu nedir? x(n) * δ(n) = ____', '{"blanks":1}', '{"blanks":[["x(n)","x"]]}', 'Toplamda yalnızca k = n terimi kalır: x(n) * δ(n) = x(n). Dürtü konvolüsyonun birim elemanıdır.', 1, 'Hafta 4, Konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-durtu-kaydir', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', 'x(n) yalnızca n = 1''de 4 değerini alıyor. y(n) = x(n) * δ(n − 3) hangi n''de 4''tür?', '{"blanks":1}', '{"blanks":[["4"]]}', 'Kaydırılmış dürtüyle konvolüsyon diziyi kaydırır: y(n) = x(n − 3). Değer n − 3 = 1, yani n = 4''te görünür.', 1, 'Hafta 4, Konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-ilk-ornek', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', 'x(0) = 2, x(1) = 1 ve h(0) = 3, h(1) = −1, h(2) = 2 (diğer örnekler 0). y(n) = x(n) * h(n) için:

y(0) = ____ , y(1) = ____', '{"blanks":2}', '{"blanks":[["6"],["1"]]}', 'y(0) = x(0)h(0) = 6. y(1) = x(0)h(1) + x(1)h(0) = −2 + 3 = 1.', 2, 'Hafta 4, Konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-lti-tek', 'dsp', 'ds-konvolusyon-temel', 4, 'tf', 'derived', 'LTI bir sistemin dürtü yanıtı biliniyorsa, herhangi bir girişe çıkışı konvolüsyonla hesaplanabilir.', '{}', '{"value":true}', 'Doğru. Her giriş kaydırılmış dürtülerin toplamıdır; doğrusallık ve zamanla değişmezlik sayesinde çıkış, kaydırılmış dürtü yanıtlarının toplamıdır.', 1, 'Hafta 4, Konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-degisme', 'dsp', 'ds-konvolusyon-temel', 4, 'tf', 'original', 'Her x(n) ve h(n) için x(n) * h(n) = h(n) * x(n) eşitliği sağlanır.', '{}', '{"value":true}', 'Doğru. Bu değişme özelliğidir: dürtü yanıtı h ve girişi x olan sistem, dürtü yanıtı x ve girişi h olan sistemle aynı çıkışı verir.', 1, 'Hafta 4, Konvolüsyon özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-kaskat', 'dsp', 'ds-konvolusyon-temel', 4, 'mcq', 'original', 'Dürtü yanıtları $h_1(n)$ ve $h_2(n)$ olan iki LTI sistem art arda (kaskat) bağlanıyor. Eşdeğer sistemin dürtü yanıtı nedir?', '{"choices":["$h_1(n) * h_2(n)$","$h_1(n) + h_2(n)$","$h_1(n)\\,h_2(n)$","$h_1(n) - h_2(n)$"]}', '{"index":0}', 'Birleşme özelliği: (x * h₁) * h₂ = x * (h₁ * h₂). Kaskat bağlantıda dürtü yanıtları konvolüsyona girer.', 1, 'Hafta 4, Konvolüsyon özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-paralel', 'dsp', 'ds-konvolusyon-temel', 4, 'fill', 'original', 'Dürtü yanıtları h1 ve h2 olan iki LTI sistem paralel bağlanıyor (aynı giriş, çıkışlar toplanıyor). Eşdeğer dürtü yanıtı ____ olur.', '{"blanks":1}', '{"blanks":[["h1 + h2","h1(n) + h2(n)","h₁ + h₂","h₁(n) + h₂(n)","h2 + h1"]]}', 'Dağılma özelliği: x * h₁ + x * h₂ = x * (h₁ + h₂). Paralel bağlantıda dürtü yanıtları toplanır.', 1, 'Hafta 4, Konvolüsyon özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-kaskat-hesap', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', '$h_1(n) = \delta(n) + \delta(n-1)$ ve $h_2(n) = \delta(n) + 2\delta(n-1)$ kaskat bağlı. Eşdeğer dürtü yanıtını n = 0''dan başlayarak dizi olarak yaz.', '{"blanks":1}', '{"blanks":[["[1 3 2]"]]}', 'h₁ * h₂ = δ(n) + 2δ(n − 1) + δ(n − 1) + 2δ(n − 2) = δ(n) + 3δ(n − 1) + 2δ(n − 2).', 2, 'Hafta 4, Konvolüsyon özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-paralel-hesap', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', '$h_1(n) = 2\delta(n) - \delta(n-1)$ ve $h_2(n) = \delta(n-1) + 3\delta(n-2)$ paralel bağlı. Eşdeğer dürtü yanıtını n = 0''dan başlayarak dizi olarak yaz.', '{"blanks":1}', '{"blanks":[["[2 0 3]"]]}', 'Paralel: h₁ + h₂ = 2δ(n) + (−1 + 1)δ(n − 1) + 3δ(n − 2) = 2δ(n) + 3δ(n − 2).', 2, 'Hafta 4, Konvolüsyon özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-geometrik', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'original', '$\displaystyle\sum_{n=0}^{\infty} (0{,}5)^n$ toplamı kaçtır?', '{"blanks":1}', '{"blanks":[["2"]]}', '|a| < 1 için Σ aⁿ = 1/(1 − a) = 1/0,5 = 2.', 1, 'Hafta 4, Doğrudan değerlendirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-geo-sonlu', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'original', '$\displaystyle\sum_{n=0}^{3} 2^n$ toplamını $(1 - a^N)/(1 - a)$ formülüyle hesapla.', '{"blanks":1}', '{"blanks":[["15"]]}', 'a = 2, N = 4: (1 − 16)/(1 − 2) = 15. Sağlama: 1 + 2 + 4 + 8 = 15.', 1, 'Hafta 4, Doğrudan değerlendirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-ustel-basamak', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'original', '$y(n) = (0{,}5)^n u(n) * u(n)$ için y(2) kaçtır?', '{"blanks":1}', '{"blanks":[["1.75"]]}', 'y(n) = Σₖ₌₀ⁿ (0,5)ᵏ. y(2) = 1 + 0,5 + 0,25 = 1,75. Formülle: (1 − 0,5³)/(1 − 0,5) = 1,75.', 2, 'Hafta 4, Doğrudan değerlendirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-ustel-limit', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', '$y(n) = (0{,}75)^n u(n) * u(n)$ dizisi n → ∞ iken hangi değere yaklaşır?', '{"blanks":1}', '{"blanks":[["4"]]}', 'y(n) = (1 − aⁿ⁺¹)/(1 − a) → 1/(1 − a) = 1/0,25 = 4.', 2, 'Hafta 4, Doğrudan değerlendirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-iki-ustel', 'dsp', 'ds-konvolusyon-temel', 4, 'mcq', 'original', '$(1/2)^n u(n) * (1/2)^n u(n)$ konvolüsyonu nedir?', '{"choices":["$(n+1)(1/2)^n u(n)$","$(1/4)^n u(n)$","$n\\,(1/2)^n u(n)$","$2\\,(1/2)^n u(n)$"]}', '{"index":0}', 'y(n) = Σₖ₌₀ⁿ (1/2)ᵏ (1/2)ⁿ⁻ᵏ = Σₖ₌₀ⁿ (1/2)ⁿ = (n + 1)(1/2)ⁿ. Her terim aynıdır ve n + 1 terim vardır.', 3, 'Hafta 4, Doğrudan değerlendirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-seri-n', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', '$\displaystyle\sum_{n=0}^{N-1} n$ toplamı N = 5 için kaçtır?', '{"blanks":1}', '{"blanks":[["10"]]}', 'N(N − 1)/2 = 5·4/2 = 10. Sağlama: 0 + 1 + 2 + 3 + 4 = 10.', 1, 'Hafta 4, Doğrudan değerlendirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-uzunluk', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'original', 'x(n) 7, h(n) 4 örnek uzunluğunda. y(n) = x(n) * h(n) kaç örnek uzunluğundadır?', '{"blanks":1}', '{"blanks":[["10"]]}', 'L = L₁ + L₂ − 1 = 7 + 4 − 1 = 10.', 1, 'Hafta 4, Konvolüsyonun uzunluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-aralik', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'original', 'x(n) yalnızca −2 ≤ n ≤ 5, h(n) yalnızca 1 ≤ n ≤ 4 aralığında sıfırdan farklı. y(n) = x(n) * h(n) hangi aralıkta sıfırdan farklı olabilir?

____ ≤ n ≤ ____', '{"blanks":2}', '{"blanks":[["-1"],["9"]]}', '[Mx + Mh, Nx + Nh] = [−2 + 1, 5 + 4] = [−1, 9].', 2, 'Hafta 4, Konvolüsyonun uzunluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-ilk-son', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'original', 'x(n)''in ilk sıfırdan farklı değeri n = −3''te 2, sonuncusu n = 10''da 5''tir. y(n) = x(n) * x(n) için:

ilk sıfırdan farklı örneğin indisi ____ ve değeri ____ ; son sıfırdan farklı örneğin indisi ____ ve değeri ____', '{"blanks":4}', '{"blanks":[["-6"],["4"],["20"],["25"]]}', 'İlk örnek, ilk örneklerin çarpımıdır: n = −3 + (−3) = −6, değer 2·2 = 4. Son örnek: n = 10 + 10 = 20, değer 5·5 = 25.', 3, 'Hafta 4, Konvolüsyonun uzunluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-uzunluk-tf', 'dsp', 'ds-konvolusyon-hesap', 4, 'tf', 'derived', 'Uzunluğu 5 olan iki dizinin konvolüsyonu 10 örnek uzunluğundadır.', '{}', '{"value":false}', 'Yanlış. L = 5 + 5 − 1 = 9.', 1, 'Hafta 4, Konvolüsyonun uzunluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-sonsuz', 'dsp', 'ds-konvolusyon-hesap', 4, 'tf', 'derived', '$(0{,}9)^n u(n)$ dizisi ile 3 örnek uzunluğunda bir dizinin konvolüsyonu sonlu uzunluktadır.', '{}', '{"value":false}', 'Yanlış. Dizilerden biri sonsuz uzunlukta olduğu için çıkış da sonsuz uzunluktadır; L₁ + L₂ − 1 kuralı yalnızca iki sonlu dizi için geçerlidir.', 2, 'Hafta 4, Konvolüsyonun uzunluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-grafik-adim', 'dsp', 'ds-konvolusyon-hesap', 4, 'mcq', 'original', 'Grafik yöntemde h(n − k) dizisi h(k)''den nasıl elde edilir?', '{"choices":["Ters çevrilir, sonra n kadar kaydırılır","n kadar kaydırılır, ters çevrilmez","Ters çevrilir, sonra −n kadar kaydırılır","n ile çarpılır, sonra ters çevrilir"]}', '{"index":0}', 'h(k) → h(−k) (ters çevirme) → h(−(k − n)) = h(n − k): n kadar kaydırma. n > 0 ise sağa kayar.', 1, 'Hafta 4, Grafik yaklaşım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-grafik-yon', 'dsp', 'ds-konvolusyon-hesap', 4, 'tf', 'original', 'Grafik yöntemde n < 0 iken ters çevrilmiş h(n − k) dizisi sola kayar.', '{}', '{"value":true}', 'Doğru. n > 0 sağa kayma (gecikme), n < 0 sola kayma (ilerleme) demektir.', 1, 'Hafta 4, Grafik yaklaşım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-grafik-hesap', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', 'x(n): n = 0..3 için 1, 3, −1, 2. h(n): n = 0..2 için 2, 1, 1. y(n) = x(n) * h(n) için:

y(2) = ____ , y(3) = ____', '{"blanks":2}', '{"blanks":[["2"],["6"]]}', 'y(2) = x(0)h(2) + x(1)h(1) + x(2)h(0) = 1 + 3 − 2 = 2. y(3) = x(1)h(2) + x(2)h(1) + x(3)h(0) = 3 − 1 + 4 = 6.', 2, 'Hafta 4, Grafik yaklaşım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-grafik-negatif', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', 'x(n): n = −1, 0, 1 için 1, 2, 3. h(n): n = 0, 1 için 1, −1. y(n) = x(n) * h(n) dizisinin ilk sıfırdan farklı örneği hangi n''dedir ve y(2) kaçtır?

ilk örnek: n = ____ , y(2) = ____', '{"blanks":2}', '{"blanks":[["-1"],["-3"]]}', 'Başlangıç Mx + Mh = −1 + 0 = −1. y(2) = x(1)h(1) = 3·(−1) = −3 (n = 2''de yalnızca bu çift örtüşür).', 3, 'Hafta 4, Grafik yaklaşım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-tum-dizi', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', 'x(n) = δ(n) + 2δ(n − 1) ve h(n) = u(n) − u(n − 3). y(n) = x(n) * h(n) dizisini n = 0''dan başlayarak yaz.', '{"blanks":1}', '{"blanks":[["[1 3 3 2]"]]}', 'h, n = 0..2''de 1''dir. y = h(n) + 2h(n − 1): n = 0..3 için 1, 1 + 2, 1 + 2, 2.', 2, 'Hafta 4, Grafik yaklaşım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-kaydirma-tum', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', 'x(n) = {2, 1, 3} ve h(n) = {1, 2, 1}, ikisi de n = 0''dan başlıyor. Kaydırma kuralıyla y(n) = x(n) * h(n) dizisini bul.', '{"blanks":1}', '{"blanks":[["[2 5 7 7 3]"]]}', 'y(0) = 2·1 = 2; y(1) = 2·2 + 1·1 = 5; y(2) = 2·1 + 1·2 + 3·1 = 7; y(3) = 1·1 + 3·2 = 7; y(4) = 3·1 = 3.', 2, 'Hafta 4, Kaydırma kuralı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-kaydirma-ters', 'dsp', 'ds-konvolusyon-hesap', 4, 'tf', 'original', 'Kaydırma kuralında ikinci şeride h(k) değerleri ters sırada, yani h(−k) olarak yazılır.', '{}', '{"value":true}', 'Doğru. x(0) ile h(0) alt alta getirilir; h(1), h(2), ... h(0)''ın solunda durur. Sonra şerit sağa kaydırılır.', 1, 'Hafta 4, Kaydırma kuralı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-kaydirma-sayi', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', 'Uzunlukları 4 ve 3 olan, ikisi de n = 0''dan başlayan iki dizi kaydırma kuralıyla konvolüsyona sokuluyor. y(0) dahil kaç farklı y(n) değeri hesaplanır (sıfırdan farklı olabilecekler)?', '{"blanks":1}', '{"blanks":[["6"]]}', 'Çıkışın uzunluğu 4 + 3 − 1 = 6: y(0)''dan y(5)''e.', 2, 'Hafta 4, Kaydırma kuralı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-polinom', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', '(1 + z)(2 + 3z) çarpımının katsayılarını sabit terimden başlayarak dizi olarak yaz.', '{"blanks":1}', '{"blanks":[["[2 5 3]"]]}', '2 + 3z + 2z + 3z² = 2 + 5z + 3z². Bu, (1, 1) ile (2, 3) dizilerinin konvolüsyonudur.', 1, 'Hafta 4, Polinom çarpımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-polinom-2', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', '(1 + 2z + z²)(1 − z) çarpımının katsayılarını sabit terimden başlayarak dizi olarak yaz.', '{"blanks":1}', '{"blanks":[["[1 1 -1 -1]"]]}', 'Konvolüsyon: 1; 2 − 1 = 1; 1 − 2 = −1; −1. Yani 1 + z − z² − z³.', 2, 'Hafta 4, Polinom çarpımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-tablo-kosegen', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'original', 'Çarpım tablosu yönteminde x(2)·h(3) çarpımı (ikisi de n = 0''dan başlıyor) y(n)''nin hangi örneğine eklenir? n = ____', '{"blanks":1}', '{"blanks":[["5"]]}', 'Hücre (i, j), y(i + j)''ye eklenir: 2 + 3 = 5. Aynı ters köşegendeki hücreler aynı çıkış örneğini oluşturur.', 2, 'Hafta 4, Polinom çarpımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-matlab-conv', 'dsp', 'ds-konvolusyon-hesap', 4, 'fill', 'derived', 'MatStudio''da iki polinomun katsayı vektörlerini çarpmak için kullanılan fonksiyon hangisidir?', '{"blanks":1}', '{"blanks":[["conv"]]}', 'conv: polinom çarpımı, katsayı dizilerinin konvolüsyonudur.', 1, 'Hafta 4, Polinom çarpımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-zar-7', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'original', 'İki adil zar atılıyor. Toplamın 7 olma olasılığı kaçtır?', '{"blanks":1}', '{"blanks":[["1/6"]]}', '36 eşit olasılıklı çiftten 6''sı 7 verir: 6/36 = 1/6.', 1, 'Hafta 4, Olasılık ve konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-zar-4', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', 'İki adil zarın toplamının 5 olma olasılığı kaçtır?', '{"blanks":1}', '{"blanks":[["1/9"]]}', '(1,4), (2,3), (3,2), (4,1): 4/36 = 1/9. Bu, zar pmf''sinin kendisiyle konvolüsyonunun s = 5''teki değeridir.', 2, 'Hafta 4, Olasılık ve konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-zar-sayi', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', 'İki zarın toplamı kaç farklı değer alabilir?', '{"blanks":1}', '{"blanks":[["11"]]}', '2''den 12''ye: 11 değer. Uzunluk kuralı: 6 + 6 − 1 = 11.', 1, 'Hafta 4, Olasılık ve konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-zar-uc', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', 'Üç zarın toplamı kaç farklı değer alabilir?', '{"blanks":1}', '{"blanks":[["16"]]}', '3''ten 18''e: 16 değer. İki zarın dağılımı (11 değer) bir zarla (6 değer) konvolüsyona girer: 11 + 6 − 1 = 16.', 2, 'Hafta 4, Olasılık ve konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-hileli', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'original', 'Hileli bir zarda 6 gelme olasılığı 0,5, diğer her yüzünki 0,1. Bu zardan iki tane atılıyor. Toplamın 12 olma olasılığı kaçtır?', '{"blanks":1}', '{"blanks":[["0.25"]]}', '12 yalnızca (6, 6) ile olur: 0,5 · 0,5 = 0,25.', 2, 'Hafta 4, Olasılık ve konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-pmf-tf', 'dsp', 'ds-konvolusyon-uygulama', 4, 'tf', 'original', 'İki bağımsız tamsayı değerli rastgele değişkenin toplamının pmf''si, pmf''lerinin konvolüsyonudur.', '{}', '{"value":true}', 'Doğru. P(toplam = s) = Σᵢ p₁(i) p₂(s − i): konvolüsyon toplamı.', 1, 'Hafta 4, Olasılık ve konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-ma-katsayi', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'original', '4 noktalı hareketli ortalamanın dürtü yanıtının her katsayısı kaçtır?', '{"blanks":1}', '{"blanks":[["0.25"]]}', 'h(n) = 1/M = 1/4, n = 0..3. Katsayıların toplamı 1''dir.', 1, 'Hafta 4, Hareketli ortalama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-ma-cikis', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', 'x(n): n = 0..3 için 4, 8, 6, 2. 3 noktalı hareketli ortalama y(n) = [x(n) + x(n − 1) + x(n − 2)]/3 için:

y(2) = ____ , y(3) = ____', '{"blanks":2}', '{"blanks":[["6"],["16/3"]]}', 'y(2) = (6 + 8 + 4)/3 = 6. y(3) = (2 + 6 + 8)/3 = 16/3 ≈ 5,33.', 2, 'Hafta 4, Hareketli ortalama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-ma-sabit', 'dsp', 'ds-konvolusyon-uygulama', 4, 'tf', 'derived', 'Hareketli ortalamanın katsayılarının toplamı 1 olduğu için sabit bir giriş, başlangıçtaki geçişten sonra değişmeden çıkar.', '{}', '{"value":true}', 'Doğru. x(n) = c ise pencere dolduktan sonra y(n) = M · c/M = c.', 1, 'Hafta 4, Hareketli ortalama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-ma-gecikme', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', '9 noktalı nedensel hareketli ortalamanın çıkışı girişin yaklaşık kaç örnek gerisinden gelir?', '{"blanks":1}', '{"blanks":[["4"]]}', '(M − 1)/2 = (9 − 1)/2 = 4.', 2, 'Hafta 4, Hareketli ortalama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-ma-buyuk', 'dsp', 'ds-konvolusyon-uygulama', 4, 'mcq', 'derived', 'Hareketli ortalamada pencere uzunluğu M büyütülürse ne olur?', '{"choices":["Gürültü azalır, hızlı değişimler de yumuşar","Gürültü artar, hızlı değişimler korunur","Gecikme azalır, çıkış girişi daha hızlı izler","Çıkışın ortalama seviyesi M kat büyür"]}', '{"index":0}', 'Daha çok örnek ortalanır: bağımsız gürültü azalır, ama sinyalin hızlı kısmı da ortalanıp silinir ve gecikme (M − 1)/2 artar. Katsayılar toplamı 1 olduğu için seviye değişmez.', 2, 'Hafta 4, Hareketli ortalama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-korelasyon-fark', 'dsp', 'ds-konvolusyon-uygulama', 4, 'mcq', 'original', 'Korelasyon toplamı $\sum_k x(k)\,h(n+k)$ konvolüsyondan hangi bakımdan ayrılır?', '{"choices":["h ters çevrilmez, yalnızca kaydırılır","h ters çevrilir ama kaydırılmaz","Çarpımlar toplanmaz, ortalaması alınır","Yalnızca sonlu dizilerde tanımlıdır"]}', '{"index":0}', 'Korelasyonda h(n + k) vardır, h(n − k) değil: dizi ters çevrilmez. Bu yüzden r_xh(n) = x(−n) * h(n).', 1, 'Hafta 4, Korelasyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-otokor-0', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', 'x(0) = 2, x(1) = −1, x(2) = 3 (başka yerde 0). Otokorelasyonun n = 0 değeri $r_{xx}(0)$ kaçtır?', '{"blanks":1}', '{"blanks":[["14"]]}', 'r_xx(0) = Σ x²(k) = 4 + 1 + 9 = 14: dizinin enerjisi.', 2, 'Hafta 4, Korelasyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-otokor-1', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', 'x(0) = 2, x(1) = −1, x(2) = 3 (başka yerde 0). $r_{xx}(1) = \sum_k x(k)\,x(k+1)$ kaçtır?', '{"blanks":1}', '{"blanks":[["-5"]]}', 'x(0)x(1) + x(1)x(2) = 2·(−1) + (−1)·3 = −5.', 2, 'Hafta 4, Korelasyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-otokor-simetri', 'dsp', 'ds-konvolusyon-uygulama', 4, 'tf', 'original', 'Gerçel bir dizinin otokorelasyonu n = 0''a göre simetriktir: $r_{xx}(-n) = r_{xx}(n)$.', '{}', '{"value":true}', 'Doğru. Σ x(k)x(k − n) toplamında k yerine k + n yazılınca Σ x(k + n)x(k) = r_xx(n) çıkar.', 1, 'Hafta 4, Korelasyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h4-otokor-ustel', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'original', '$x(n) = (0{,}5)^n u(n)$ dizisinin otokorelasyonunun n = 0 değeri kaçtır?', '{"blanks":1}', '{"blanks":[["4/3"]]}', 'r_xx(n) = a^|n|/(1 − a²). n = 0''da 1/(1 − 0,25) = 4/3 ≈ 1,333.', 3, 'Hafta 4, Korelasyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-cember-koordinat', 'dsp', 'ds-sinusler', 5, 'num', 'derived', 'Birim çember üzerinde θ = 120° açısındaki noktanın koordinatları nedir?

yatay (cos θ) = ____ , dikey (sin θ) = ____', '{"blanks":2}', '{"blanks":[["-0.5"],["0.866±0.005"]]}', 'cos 120° = −cos 60° = −0,5; sin 120° = sin 60° ≈ 0,866.', 1, 'Hafta 5, Çember ve sinüs', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-sinus-isdusum', 'dsp', 'ds-sinusler', 5, 'mcq', 'original', 'Birim çember üzerinde dönen bir noktanın **dikey** izdüşümü θ''ya göre çizilirse hangi eğri çıkar?', '{"choices":["Sinüs","Kosinüs","Tanjant","Doğru"]}', '{"index":0}', 'Dikey koordinat sin θ''dır; yatay koordinat cos θ''yı verir.', 1, 'Hafta 5, Çember ve sinüs', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-cos-kayma', 'dsp', 'ds-sinusler', 5, 'tf', 'derived', 'cos θ = sin(θ + 90°) eşitliği her θ için doğrudur.', '{}', '{"value":true}', 'Doğru. Kosinüs, sinüsün 90° sola kaydırılmış halidir.', 1, 'Hafta 5, Çember ve sinüs', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-tur', 'dsp', 'ds-sinusler', 5, 'num', 'original', 'θ = 450° açısındaki nokta, 0° ile 360° arasındaki hangi açıyla aynı yerdedir?', '{"blanks":1}', '{"blanks":[["90"]]}', 'Değerler her 360°''de tekrar eder: 450° − 360° = 90°.', 1, 'Hafta 5, Çember ve sinüs', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-frekans-oku', 'dsp', 'ds-sinusler', 5, 'num', 'derived', '$x(t) = 2\sin(6\pi t)$ sinyalinin frekansı kaç Hz''dir?', '{"blanks":1}', '{"blanks":[["3"]]}', '2πf = 6π, f = 3 Hz.', 1, 'Hafta 5, Genlik, frekans ve faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-periyot', 'dsp', 'ds-sinusler', 5, 'num', 'original', '50 Hz''lik bir sinüsün periyodu kaç milisaniyedir?', '{"blanks":1}', '{"blanks":[["20"]]}', 'T = 1/f = 1/50 s = 0,02 s = 20 ms.', 1, 'Hafta 5, Genlik, frekans ve faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-faz-kayma', 'dsp', 'ds-sinusler', 5, 'num', 'original', '$\sin(2\pi\cdot 2t + \pi/2)$ eğrisi $\sin(2\pi\cdot 2t)$''ye göre kaç saniye sola kaymıştır?', '{"blanks":1}', '{"blanks":[["0.125"]]}', 'Kayma φ/(2πf) = (π/2)/(4π) = 1/8 = 0,125 s.', 2, 'Hafta 5, Genlik, frekans ve faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-genlik', 'dsp', 'ds-sinusler', 5, 'tf', 'derived', '$A\sin(2\pi f t + \varphi)$ sinyali −A ile +A arasında salınır.', '{}', '{"value":true}', 'Doğru. Sinüs −1 ile 1 arasındadır; A ile çarpılınca −A ile A arasına çıkar.', 1, 'Hafta 5, Genlik, frekans ve faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-omega', 'dsp', 'ds-sinusler', 5, 'num', 'derived', '5 Hz''lik bir sinüsün açısal frekansı ω kaç rad/s''dir?', '{"blanks":1}', '{"blanks":[["31.42±0.05","10*pi"]]}', 'ω = 2πf = 10π ≈ 31,42 rad/s.', 1, 'Hafta 5, Genlik, frekans ve faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-faz-isaret', 'dsp', 'ds-sinusler', 5, 'mcq', 'original', '$\sin(2\pi f t + \varphi)$''de φ > 0 olması eğriyi nasıl değiştirir?', '{"choices":["Eğriyi zamanda sola, erkene kaydırır","Eğriyi zamanda sağa, geriye kaydırır","Eğrinin genliğini φ kadar büyütür","Eğrinin frekansını φ kadar artırır"]}', '{"index":0}', 't yerine t + φ/(2πf) yazılmış gibidir: aynı değerlere daha erken ulaşılır, eğri sola kayar.', 2, 'Hafta 5, Genlik, frekans ve faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-ayni-frekans', 'dsp', 'ds-sinusler', 5, 'tf', 'original', 'Frekansları aynı, genlik ve fazları farklı iki sinüsün toplamı, aynı frekansta bir sinüstür.', '{}', '{"value":true}', 'Doğru. Aynı hızla dönen iki fazörün toplamı da aynı hızla döner; genlik ve faz değişir.', 1, 'Hafta 5, Sinüslerin toplamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-toplam-genlik', 'dsp', 'ds-sinusler', 5, 'num', 'derived', '$6\sin(2\pi t) + 8\cos(2\pi t)$ toplamı tek bir sinüs olarak yazılırsa genliği kaçtır?', '{"blanks":1}', '{"blanks":[["10"]]}', '√(6² + 8²) = √100 = 10.', 2, 'Hafta 5, Sinüslerin toplamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-yok-etme', 'dsp', 'ds-sinusler', 5, 'num', 'derived', '$\sin(2\pi t) + A\sin(2\pi t + 180°)$ toplamının her t için 0 olması için A kaç olmalıdır?', '{"blanks":1}', '{"blanks":[["1"]]}', 'sin(θ + 180°) = −sin θ. Toplam (1 − A)sin(2πt); A = 1 ise sıfırdır.', 2, 'Hafta 5, Sinüslerin toplamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-farkli-frekans', 'dsp', 'ds-sinusler', 5, 'mcq', 'original', '$\sin(2\pi t) + \sin(2\pi\cdot 2t)$ toplamı için hangisi doğrudur?', '{"choices":["Sinüs değildir, periyodu 1 s''dir","2 Hz''lik bir sinüstür","1,5 Hz''lik bir sinüstür","Hiç periyodik değildir"]}', '{"index":0}', 'Frekanslar farklı olduğu için toplam sinüs değildir. İkisi de 1 saniyede tam sayıda devir yapar (1 ve 2), bu yüzden toplam her 1 s''de tekrar eder.', 2, 'Hafta 5, Sinüslerin toplamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-toplam-periyot', 'dsp', 'ds-sinusler', 5, 'num', 'derived', '2 Hz ve 3 Hz''lik iki sinüsün toplamının periyodu kaç saniyedir?', '{"blanks":1}', '{"blanks":[["1"]]}', 'Temel frekans 1 Hz''dir (2 ve 3''ün ikisi de onun katı): her 1 s''de 2 sinüs 2, öbürü 3 devir tamamlar.', 2, 'Hafta 5, Sinüslerin toplamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-kare-harmonik', 'dsp', 'ds-fourier-serisi', 5, 'num', 'derived', 'Genliği 1 olan kare dalganın Fourier serisinde 3. harmoniğin genliği kaçtır? (3 ondalık)', '{"blanks":1}', '{"blanks":[["0.424±0.005","4/(3*pi)"]]}', '4/(πk), k = 3: 4/(3π) ≈ 0,424.', 2, 'Hafta 5, Fourier serisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-kare-cift', 'dsp', 'ds-fourier-serisi', 5, 'tf', 'original', 'Kare dalganın Fourier serisinde 2. harmonik bulunur.', '{}', '{"value":false}', 'Yanlış. Kare dalgada yalnızca tek harmonikler (1, 3, 5, ...) vardır.', 1, 'Hafta 5, Fourier serisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-ucgen-azalma', 'dsp', 'ds-fourier-serisi', 5, 'mcq', 'original', 'Üçgen dalganın Fourier serisindeki harmonik genlikleri k ile nasıl azalır?', '{"choices":["1/k² ile","1/k ile","1/√k ile","Hiç azalmaz"]}', '{"index":0}', 'Üçgen dalga: 8/(π²k²). Kare dalgadaki 1/k''den çok daha hızlı azalır; üçgen daha yumuşak bir dalgadır.', 2, 'Hafta 5, Fourier serisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-gibbs', 'dsp', 'ds-fourier-serisi', 5, 'fill', 'derived', 'Kare dalganın kısmi Fourier toplamının sıçrama noktalarının yanında hedefi yaklaşık %9 aşmasına ____ olayı denir.', '{"blanks":1}', '{"blanks":[["Gibbs"]]}', 'Gibbs olayı: terim sayısı artınca aşım daralır ama yüksekliği kaybolmaz.', 2, 'Hafta 5, Fourier serisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-harmonik-frekans', 'dsp', 'ds-fourier-serisi', 5, 'num', 'derived', 'Temel frekansı 50 Hz olan bir kare dalganın 3. harmoniği kaç Hz''dedir?', '{"blanks":1}', '{"blanks":[["150"]]}', 'k. harmonik k·f₀''dadır: 3 · 50 = 150 Hz.', 1, 'Hafta 5, Fourier serisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-testere', 'dsp', 'ds-fourier-serisi', 5, 'tf', 'original', 'Testere dişi dalganın Fourier serisinde çift harmonikler de vardır.', '{}', '{"value":true}', 'Doğru. Testere dişinde bütün harmonikler 2/(πk) genlikle bulunur; yalnızca tek harmonikler kare ve üçgen dalgada vardır.', 2, 'Hafta 5, Fourier serisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-ucgen-katsayi', 'dsp', 'ds-fourier-serisi', 5, 'num', 'derived', 'Genliği 1 olan üçgen dalganın Fourier serisinde 3. harmoniğin genliği (mutlak değer) kaçtır? (3 ondalık)', '{"blanks":1}', '{"blanks":[["0.090±0.002"]]}', '8/(π²k²), k = 3: 8/(9π²) ≈ 0,090.', 3, 'Hafta 5, Fourier serisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-spektrum-surekli', 'dsp', 'ds-fourier-serisi', 5, 'mcq', 'original', 'Periyodik olmayan bir sinyalin frekans spektrumu nasıldır?', '{"choices":["Sürekli bir eğri","Harmoniklerde çizgiler","Tek bir çizgi","Her yerde sıfır"]}', '{"index":0}', 'Periyodik olmayan sinyal bütün frekanslardaki sonsuz küçük genlikli sinüslerden oluşur; spektrumu süreklidir. Çizgili spektrum periyodik sinyallere aittir.', 1, 'Hafta 5, Frekans spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-darbe-sifir', 'dsp', 'ds-fourier-serisi', 5, 'num', 'derived', '0,5 s süreli dikdörtgen darbenin spektrumunun ilk sıfırı kaç Hz''dedir?', '{"blanks":1}', '{"blanks":[["2"]]}', 'İlk sıfır f = 1/τ = 1/0,5 = 2 Hz.', 2, 'Hafta 5, Frekans spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-darbe-genis', 'dsp', 'ds-fourier-serisi', 5, 'tf', 'original', 'Dikdörtgen darbe kısaldıkça spektrumu daralır.', '{}', '{"value":false}', 'Yanlış. Darbe kısaldıkça ilk sıfır (1/τ) uzaklaşır ve spektrum genişler: zamanda dar olan frekansta geniştir.', 1, 'Hafta 5, Frekans spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-ters-donusum', 'dsp', 'ds-fourier-serisi', 5, 'fill', 'original', 'Sinyalin frekans gösteriminden zaman gösterimine geri dönmeyi sağlayan işlemin adı nedir?', '{"blanks":1}', '{"blanks":[["ters Fourier dönüşümü","ters fourier","ters Fourier dönüşümu"]]}', 'Fourier dönüşümü zamandan frekansa, ters Fourier dönüşümü frekanstan zamana götürür.', 1, 'Hafta 5, Frekans spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-darbe-x0', 'dsp', 'ds-fourier-serisi', 5, 'num', 'derived', 'Yüksekliği 1, süresi 2 s olan dikdörtgen darbenin Fourier dönüşümünün f = 0''daki değeri X(0) kaçtır?', '{"blanks":1}', '{"blanks":[["2"]]}', 'X(0) = ∫x(t)dt, darbenin alanıdır: 1 · 2 = 2 (= τ).', 2, 'Hafta 5, Frekans spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-sarma-esit', 'dsp', 'ds-fourier-donusumu', 5, 'mcq', 'original', 'Bir sinüs sinyali çemberin etrafına sarılıyor. Eğrinin kütle merkezi ne zaman merkezden belirgin biçimde uzaklaşır?', '{"choices":["Sarma frekansı sinyalin frekansına eşitken","Sarma frekansı çok büyükken","Sarma frekansı sinyalinkinin yarısıyken","Kütle merkezi hep merkezde kalır"]}', '{"index":0}', 'Frekanslar eşitken tepeler hep çemberin aynı yanına düşer; diğer frekanslarda tepeler her yana dağılır ve ortalama sıfıra yakın kalır.', 1, 'Hafta 5, Sarma makinesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-sarma-tepe', 'dsp', 'ds-fourier-donusumu', 5, 'num', 'derived', '$g(t) = 1 + \cos(2\pi\cdot 4t)$ çemberin etrafına sarılıyor. f > 0 için kütle merkezinin yatay konumu hangi sarma frekansında tepe yapar?', '{"blanks":1}', '{"blanks":[["4"]]}', 'Sinyalin frekansında: saniyede 4 devir.', 1, 'Hafta 5, Sarma makinesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-kutle-deger', 'dsp', 'ds-fourier-donusumu', 5, 'num', 'derived', '$g(t) = 2 + \cos(2\pi\cdot 3t)$ sinyali 1 saniye boyunca sarılıyor. Kütle merkezinin yatay konumu f = 0''da ve f = 3''te kaçtır?

f = 0: ____ , f = 3: ____', '{"blanks":2}', '{"blanks":[["2"],["0.5"]]}', 'f = 0''da sarma yok: kütle merkezi sinyalin ortalaması, 2. f = 3''te sabit 2 ve 6 Hz''de dönen terim tam devirlerde sıfır ortalar; cos teriminden 1/2 kalır.', 3, 'Hafta 5, Sarma makinesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-kaydirma-tf', 'dsp', 'ds-fourier-donusumu', 5, 'tf', 'original', '1 + cos(2π·3t) sinyalinde kütle merkezinin f = 0''daki tepesi, sinyalin yukarı kaydırılmasından (sabit bileşenden) gelir.', '{}', '{"value":true}', 'Doğru. Kaydırılmamış cos(2π·3t) sinyalinde f = 0''da kütle merkezi 0''dır; sabit 1 ise yalnızca f = 0''da katkı verir.', 2, 'Hafta 5, Sarma makinesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-euler', 'dsp', 'ds-fourier-donusumu', 5, 'mcq', 'derived', '$e^{j\pi/2}$ hangi sayıya eşittir?', '{"choices":["$j$","$-1$","$1$","$-j$"]}', '{"index":0}', 'e^{jθ} = cos θ + j sin θ. θ = π/2: cos = 0, sin = 1, sonuç j (birim çemberin tepesi).', 2, 'Hafta 5, Euler formülü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-eksi-isaret', 'dsp', 'ds-fourier-donusumu', 5, 'mcq', 'original', 'Fourier dönüşümündeki $e^{-j2\pi f t}$ ifadesinde üstelin işareti neden eksidir?', '{"choices":["Sinyal çemberin etrafına saat yönünde sarıldığı için","Sinyalin değerleri negatif olabildiği için","Frekansın negatif olması gerektiği için","Sinyalin genliğini küçültmek için"]}', '{"index":0}', 'e^{jθ} saat yönünün tersine döner; zaman sıfırdan itibaren saat yönünde sarmak için açı eksi işaretle yazılır.', 2, 'Hafta 5, Euler formülü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-euler-buyukluk', 'dsp', 'ds-fourier-donusumu', 5, 'num', 'derived', 'Her gerçel θ için $|e^{j\theta}|$ kaçtır?', '{"blanks":1}', '{"blanks":[["1"]]}', '|cos θ + j sin θ| = √(cos²θ + sin²θ) = 1: nokta hep birim çember üzerindedir.', 1, 'Hafta 5, Euler formülü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-donusum-tepe', 'dsp', 'ds-fourier-donusumu', 5, 'num', 'derived', '$g(t) = \cos(2\pi\cdot 5t)$ sinyali 0 ≤ t ≤ 6 s aralığında gözleniyor. $|\hat g(5)| = \left|\int_0^6 g(t)\,e^{-j2\pi\cdot 5t}\,dt\right|$ yaklaşık kaçtır?', '{"blanks":1}', '{"blanks":[["3"]]}', 'cos(2π5t)e^{−j2π5t} = 1/2 + (1/2)e^{−j2π10t}; ikinci terimin integrali 0. Sonuç 6 · 1/2 = 3 (T/2).', 2, 'Hafta 5, Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-sure-tepe', 'dsp', 'ds-fourier-donusumu', 5, 'tf', 'original', 'Gözlem süresi uzadıkça, Fourier dönüşümünün sinyalin frekansındaki tepesi hem yükselir hem daralır.', '{}', '{"value":true}', 'Doğru. Dönüşüm süreye bölünmez: tepe yaklaşık T/2 ile büyür, genişliği yaklaşık 2/T ile daralır.', 1, 'Hafta 5, Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-bolme', 'dsp', 'ds-fourier-donusumu', 5, 'tf', 'original', 'Fourier dönüşümü, kütle merkezi gibi gözlem süresine bölünerek hesaplanır.', '{}', '{"value":false}', 'Yanlış. Kütle merkezi süreye bölünür (ortalama); Fourier dönüşümü bölünmez, süreyle ölçeklenmiş haldir.', 2, 'Hafta 5, Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-sinirlar', 'dsp', 'ds-fourier-donusumu', 5, 'mcq', 'original', 'Gerçek (sürekli) Fourier dönüşümünün integrali hangi zaman aralığını kapsar?', '{"choices":["−∞''dan +∞''a","0''dan 1 s''ye","Sinyalin bir periyodunu","0''dan +∞''a"]}', '{"index":0}', 'ĝ(f) = ∫₋∞^∞ g(t) e^{−j2πft} dt. Sonlu aralıkta alınan integraller, aralık sonsuza giderken bu limite yaklaşır.', 1, 'Hafta 5, Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-dogrusallik', 'dsp', 'ds-fourier-donusumu', 5, 'mcq', 'original', '2 Hz ve 3 Hz''lik iki kosinüsün toplamı olan bir sinyalin Fourier dönüşümünün büyüklüğünde ne görülür?', '{"choices":["2 Hz ve 3 Hz''de iki ayrı tepe","Yalnızca 2,5 Hz''de tek bir tepe","Yalnızca 5 Hz''de tek bir tepe","Hiçbir frekansta tepe yok"]}', '{"index":0}', 'Fourier dönüşümü doğrusaldır: toplamın dönüşümü dönüşümlerin toplamıdır; her bileşen kendi frekansında bir tepe verir.', 1, 'Hafta 5, Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h5-ayristirma', 'dsp', 'ds-fourier-donusumu', 5, 'tf', 'original', 'Fourier dönüşümü, aynı anda çalan iki diyapazonun karışık sesini frekans bileşenlerine ayırabilir.', '{}', '{"value":true}', 'Doğru. Karışık ses iki sinüsün toplamıdır; dönüşüm her birini kendi frekansında ayrı bir tepe olarak gösterir.', 1, 'Hafta 5, Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-ozfonksiyon', 'dsp', 'ds-frekans-yaniti', 6, 'tf', 'original', 'LTI bir sisteme $e^{jn\omega_0}$ girişi verilirse çıkış, aynı ω₀ frekanslı bir karmaşık üstelin bir sabitle çarpımıdır.', '{}', '{"value":true}', 'Doğru. Karmaşık üsteller LTI sistemlerin özfonksiyonlarıdır; özdeğer H(e^jω₀)''dır.', 1, 'Hafta 6, Frekans cevabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-yeni-frekans', 'dsp', 'ds-frekans-yaniti', 6, 'tf', 'derived', 'LTI bir sistem, girişte bulunmayan yeni bir frekans bileşeni üretebilir.', '{}', '{"value":false}', 'Yanlış. Her frekans bileşeni yalnızca H(e^jω) ile çarpılır; LTI sistem yeni frekans üretmez.', 1, 'Hafta 6, Frekans cevabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-ozdeger', 'dsp', 'ds-frekans-yaniti', 6, 'num', 'derived', '$h(n) = \delta(n) - \delta(n-1)$ sisteminin frekans yanıtının ω = 0 ve ω = π''deki büyüklükleri nedir?

|H(e^j0)| = ____ , |H(e^jπ)| = ____', '{"blanks":2}', '{"blanks":[["0"],["2"]]}', 'H = 1 − e^{−jω}. ω = 0: 1 − 1 = 0. ω = π: 1 − (−1) = 2. Fark alan sistem yüksek frekansları geçirir.', 2, 'Hafta 6, Frekans cevabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-frekans-tanim', 'dsp', 'ds-frekans-yaniti', 6, 'mcq', 'original', 'Birim örnek yanıtı h(n) olan LTI sistemin frekans yanıtı hangisidir?', '{"choices":["$\\sum_k h(k)\\,e^{-jk\\omega}$","$\\sum_k h(k)\\,e^{jk\\omega}$","$\\sum_k |h(k)|$","$\\sum_k h(k)$"]}', '{"index":0}', 'H(e^jω) = Σ h(k) e^{−jkω}: e^{jnω} girişinin özdeğeri.', 1, 'Hafta 6, Frekans cevabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-kosinus-cikis', 'dsp', 'ds-frekans-yaniti', 6, 'num', 'original', '$h(n) = \tfrac{1}{2}[\delta(n) + \delta(n-1)]$ sistemine $x(n) = \cos(n\pi/3)$ veriliyor. Çıkış kosinüsünün genliği kaçtır? (3 ondalık)', '{"blanks":1}', '{"blanks":[["0.866±0.005"]]}', 'H = ½(1 + e^{−jω}) = cos(ω/2)e^{−jω/2}. ω = π/3''te |H| = cos(π/6) ≈ 0,866.', 2, 'Hafta 6, Frekans cevabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-db-20', 'dsp', 'ds-frekans-yaniti', 6, 'num', 'derived', 'Bir filtrenin büyüklüğü bir frekansta 20 dB''dir. |H| kaçtır?', '{"blanks":1}', '{"blanks":[["10"]]}', '20 log₁₀|H| = 20 → |H| = 10.', 1, 'Hafta 6, Frekans cevabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-db-tablo', 'dsp', 'ds-frekans-yaniti', 6, 'mcq', 'original', '−6 dB büyüklük yaklaşık olarak |H|''nin hangi değerine karşılık gelir?', '{"choices":["0,5","0,25","0,1","2"]}', '{"index":0}', '20 log₁₀(0,5) ≈ −6,02 dB. +6 dB yaklaşık 2''dir, −20 dB 0,1''dir.', 1, 'Hafta 6, Frekans cevabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-db-hesap', 'dsp', 'ds-frekans-yaniti', 6, 'num', 'derived', '|H| = 0,01 olan bir frekansta büyüklük kaç dB''dir?', '{"blanks":1}', '{"blanks":[["-40"]]}', '20 log₁₀(0,01) = 20 · (−2) = −40 dB.', 2, 'Hafta 6, Frekans cevabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-grup-tanim', 'dsp', 'ds-frekans-yaniti', 6, 'fill', 'original', 'Fazın frekansa göre türevinin eksi işaretlisi, −dφ(ω)/dω, hangi adla anılır?', '{"blanks":1}', '{"blanks":[["grup gecikmesi","grup gecikme"]]}', 'Grup gecikmesi: o frekans civarındaki bileşenlerin kaç örnek geciktiğini söyler.', 1, 'Hafta 6, Frekans cevabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-grup-hesap', 'dsp', 'ds-frekans-yaniti', 6, 'num', 'derived', 'Fazı φ(ω) = −3ω olan bir sistemin grup gecikmesi kaç örnektir?', '{"blanks":1}', '{"blanks":[["3"]]}', 'τ = −dφ/dω = 3.', 1, 'Hafta 6, Frekans cevabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-periyot', 'dsp', 'ds-frekans-yaniti', 6, 'tf', 'original', 'Ayrık zamanlı bir sistemin frekans yanıtı 2π ile periyodiktir: $H(e^{j(\omega + 2\pi)}) = H(e^{j\omega})$.', '{}', '{"value":true}', 'Doğru. n tamsayı olduğu için e^{jn(ω + 2π)} = e^{jnω}.', 1, 'Hafta 6, Periyodiklik ve simetri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-simetri', 'dsp', 'ds-frekans-yaniti', 6, 'mcq', 'original', 'h(n) gerçel değerliyse frekans yanıtı için hangisi doğrudur?', '{"choices":["Büyüklük ω''nın çift, faz tek fonksiyonudur","Büyüklük ω''nın tek, faz çift fonksiyonudur","Büyüklük de faz da çift fonksiyondur","Frekans yanıtı her zaman gerçel değerlidir"]}', '{"index":0}', 'Gerçel h için H(e^{−jω}) = H*(e^{jω}): eşlenik simetri. Büyüklük çift, faz ve grup gecikmesi tektir.', 2, 'Hafta 6, Periyodiklik ve simetri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-ustel-buyukluk', 'dsp', 'ds-frekans-yaniti', 6, 'num', 'derived', '$h(n) = (0{,}75)^n u(n)$ sisteminin frekans yanıtının büyüklüğü ω = 0''da ve ω = π''de kaçtır?

ω = 0: ____ , ω = π: ____', '{"blanks":2}', '{"blanks":[["4"],["0.571±0.005","4/7"]]}', 'H = 1/(1 − 0,75e^{−jω}). ω = 0: 1/0,25 = 4. ω = π: 1/1,75 ≈ 0,571.', 2, 'Hafta 6, Periyodiklik ve simetri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-en-yuksek', 'dsp', 'ds-frekans-yaniti', 6, 'mcq', 'original', 'Ayrık zamanda en hızlı salınan (işareti her örnekte değişen) dizi hangi ω frekansındadır?', '{"choices":["ω = π","ω = 2π","ω = π/2","Sınır yoktur, ω büyüdükçe hızlanır"]}', '{"index":0}', 'e^{jπn} = (−1)ⁿ. ω ile ω + 2π aynı diziyi verdiği için 0..π dışında yeni frekans yoktur.', 2, 'Hafta 6, Periyodiklik ve simetri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-dogrusal-faz', 'dsp', 'ds-filtreler', 6, 'mcq', 'original', 'Aşağıdaki sistemlerden hangisinin fazı doğrusaldır?', '{"choices":["$\\delta(n) + 3\\delta(n-1) + \\delta(n-2)$","$\\delta(n) + 2\\delta(n-1) + 3\\delta(n-2)$","$(0{,}5)^n u(n)$","$\\delta(n) - 0{,}5\\,\\delta(n-1)$"]}', '{"index":0}', 'Simetrik dürtü yanıtı: H = e^{−jω}(3 + 2cos ω), faz −ω (A gerçel). Diğerleri simetrik değildir.', 2, 'Hafta 6, Doğrusal faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-dl-gecikme', 'dsp', 'ds-filtreler', 6, 'num', 'derived', 'h(n): n = 0, 1, 2, 3 için 1, 3, 3, 1 (simetrik). Bu doğrusal fazlı filtrenin grup gecikmesi kaç örnektir?', '{"blanks":1}', '{"blanks":[["1.5"]]}', 'Simetrinin merkezi n = 1,5: H = e^{−j1,5ω}·A(ω), grup gecikmesi 1,5 örnek.', 2, 'Hafta 6, Doğrusal faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-dl-bozulma', 'dsp', 'ds-filtreler', 6, 'tf', 'derived', 'Doğrusal fazlı bir filtre bütün frekansları aynı süre geciktirir.', '{}', '{"value":true}', 'Doğru. Grup gecikmesi sabittir (α); geçiş bandındaki dalga biçimi bozulmadan yalnızca kayar.', 1, 'Hafta 6, Doğrusal faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-tam-geciren', 'dsp', 'ds-filtreler', 6, 'tf', 'original', 'Tam geçiren (allpass) bir filtrenin frekans yanıtının büyüklüğü her frekansta sabittir.', '{}', '{"value":true}', 'Doğru. Tanımı budur; filtre yalnızca fazı değiştirir.', 1, 'Hafta 6, Tam geçiren filtre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-tam-geciren-deger', 'dsp', 'ds-filtreler', 6, 'num', 'derived', '$H(e^{j\omega}) = \dfrac{e^{-j\omega} - 0{,}3}{1 - 0{,}3\,e^{-j\omega}}$ için |H(e^{j0})| kaçtır?', '{"blanks":1}', '{"blanks":[["1"]]}', 'ω = 0: (1 − 0,3)/(1 − 0,3) = 1. Tam geçiren olduğu için her frekansta 1''dir.', 2, 'Hafta 6, Tam geçiren filtre', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-gecis-bandi', 'dsp', 'ds-filtreler', 6, 'fill', 'original', 'İdeal bir filtrede frekans yanıtı büyüklüğünün 1 olduğu aralıklara ne ad verilir?', '{"blanks":1}', '{"blanks":[["geçiş bandı","gecis bandi","geçiş bantları"]]}', 'Geçiş bandı; büyüklüğün 0 olduğu aralıklar durdurma bandıdır, sınırlar kesim frekanslarıdır.', 1, 'Hafta 6, Frekans seçici filtreler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-filtre-tur', 'dsp', 'ds-filtreler', 6, 'mcq', 'derived', 'Bir filtrede |H(e^j0)| ≈ 0 ve |H(e^jπ)| ≈ 1. Bu hangi tür filtredir?', '{"choices":["Yüksek geçiren","Alçak geçiren","Bant durduran","Tam geçiren"]}', '{"index":0}', 'Düşük frekansları bastırıp yüksekleri geçiriyor: yüksek geçiren.', 1, 'Hafta 6, Frekans seçici filtreler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-bant-geciren', 'dsp', 'ds-filtreler', 6, 'mcq', 'original', 'Kesim frekansı ω₂ olan bir alçak geçiren ile kesim frekansı ω₁ olan bir yüksek geçiren (ω₁ < ω₂) kaskat bağlanıyor. Sonuç nedir?', '{"choices":["Bant geçiren","Bant durduran","Alçak geçiren","Tam geçiren"]}', '{"index":0}', 'Kaskatta yanıtlar çarpılır: yalnızca ω₁ ile ω₂ arasındaki frekanslar iki filtreden de geçer.', 2, 'Hafta 6, Sistemlerin birbirine bağlanması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-kaskat-db', 'dsp', 'ds-filtreler', 6, 'num', 'derived', 'Bir frekansta birinci filtrenin büyüklüğü −20 dB, ikincininki −6 dB. Kaskat bağlantının o frekanstaki büyüklüğü kaç dB''dir?', '{"blanks":1}', '{"blanks":[["-26"]]}', 'Kaskatta yanıtlar çarpılır, dB''ler toplanır: −20 + (−6) = −26 dB.', 1, 'Hafta 6, Sistemlerin birbirine bağlanması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-paralel', 'dsp', 'ds-filtreler', 6, 'tf', 'original', 'İki filtre paralel bağlanınca eşdeğer filtrenin dB büyüklüğü, iki filtrenin dB büyüklüklerinin toplamıdır.', '{}', '{"value":false}', 'Yanlış. Paralelde karmaşık yanıtlar toplanır (H₁ + H₂); dB''lerin toplanması kaskat (çarpım) içindir.', 2, 'Hafta 6, Sistemlerin birbirine bağlanması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-bant-durduran', 'dsp', 'ds-filtreler', 6, 'fill', 'original', 'Kesim frekansı ω₁ olan alçak geçiren ile kesim frekansı ω₂ olan yüksek geçiren (ω₂ > ω₁) ____ bağlanırsa bant durduran filtre elde edilir.', '{"blanks":1}', '{"blanks":[["paralel"]]}', 'Paralel: yanıtlar toplanır, ω₁ ile ω₂ arası iki filtreden de geçemez.', 2, 'Hafta 6, Sistemlerin birbirine bağlanması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-dtft-durtu', 'dsp', 'ds-dtft', 6, 'num', 'derived', '$x(n) = \delta(n-2)$ dizisinin DTFT''sinin büyüklüğü $|X(e^{j\omega})|$ her ω''da kaçtır?', '{"blanks":1}', '{"blanks":[["1"]]}', 'X = e^{−j2ω}; büyüklüğü 1''dir.', 1, 'Hafta 6, DTFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-dtft-ustel', 'dsp', 'ds-dtft', 6, 'num', 'original', '$x(n) = (0{,}2)^n u(n)$ dizisinin DTFT''sinin ω = 0''daki değeri kaçtır?', '{"blanks":1}', '{"blanks":[["1.25"]]}', 'X = 1/(1 − 0,2e^{−jω}); ω = 0''da 1/0,8 = 1,25.', 2, 'Hafta 6, DTFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-dtft-hesap', 'dsp', 'ds-dtft', 6, 'num', 'derived', '$x(n) = \delta(n) + 3\delta(n-1)$ dizisinin DTFT''si ω = 0''da ve ω = π''de kaçtır?

X(e^j0) = ____ , X(e^jπ) = ____', '{"blanks":2}', '{"blanks":[["4"],["-2"]]}', 'X = 1 + 3e^{−jω}. ω = 0: 4. ω = π: 1 − 3 = −2.', 2, 'Hafta 6, DTFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-mutlak', 'dsp', 'ds-dtft', 6, 'tf', 'original', 'Birim basamak u(n) mutlak toplanabilir bir dizidir.', '{}', '{"value":false}', 'Yanlış. Σ|u(n)| sonsuzdur; bu yüzden DTFT tanımındaki toplam sıradan anlamda yakınsamaz.', 2, 'Hafta 6, DTFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-dikdortgen', 'dsp', 'ds-dtft', 6, 'num', 'derived', 'n = 0..9 için 1 olan 10 örneklik dikdörtgen dizinin DTFT''sinin ω = 0''daki değeri ve ilk sıfırının frekansı (rad) nedir?

X(e^j0) = ____ , ilk sıfır ω = ____', '{"blanks":2}', '{"blanks":[["10"],["0.628±0.005","pi/5"]]}', 'X(e^j0) = Σx(n) = N = 10. İlk sıfır 2π/N = π/5 ≈ 0,628 rad.', 2, 'Hafta 6, DTFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-ters-dtft', 'dsp', 'ds-dtft', 6, 'mcq', 'original', 'Ters DTFT hangisidir?', '{"choices":["$x(n) = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} X(e^{j\\omega})\\,e^{jn\\omega}\\,d\\omega$","$x(n) = \\int_{-\\infty}^{\\infty} X(e^{j\\omega})\\,e^{-jn\\omega}\\,d\\omega$","$x(n) = \\sum_{\\omega} X(e^{j\\omega})\\,e^{-jn\\omega}$","$x(n) = \\frac{1}{2\\pi}\\int_{0}^{\\pi} X(e^{j\\omega})\\,d\\omega$"]}', '{"index":0}', 'DTFT 2π ile periyodik olduğu için integral 2π uzunluğunda bir aralıkta alınır ve 1/(2π) ile ölçeklenir.', 2, 'Hafta 6, DTFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-kaydirma', 'dsp', 'ds-dtft', 6, 'mcq', 'original', 'x(n)''in DTFT''si X(e^jω) ise x(n − 4)''ün DTFT''si nedir?', '{"choices":["$e^{-j4\\omega}X(e^{j\\omega})$","$e^{j4\\omega}X(e^{j\\omega})$","$X(e^{j(\\omega - 4)})$","$4X(e^{j\\omega})$"]}', '{"index":0}', 'Zamanda kaydırma, doğrusal bir faz terimiyle çarpmaktır; büyüklük değişmez.', 1, 'Hafta 6, DTFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-ters-cevirme', 'dsp', 'ds-dtft', 6, 'tf', 'derived', 'x(−n) dizisinin DTFT''si X(e^{−jω})''dır.', '{}', '{"value":true}', 'Doğru. Zamanda ters çevirme, frekansta ters çevirmeye karşılık gelir.', 1, 'Hafta 6, DTFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-modulasyon', 'dsp', 'ds-dtft', 6, 'mcq', 'original', 'Bir dizi cos(nω₀) ile çarpılırsa DTFT''sine ne olur?', '{"choices":["±ω₀''a kayan iki kopya, her biri yarı yükseklikte","Yalnızca +ω₀''a kayan tek kopya, aynı yükseklikte","Spektrum değişmez, yalnızca fazı ω₀ kadar kayar","Spektrum cos(ω₀) ile çarpılır, kaymaz"]}', '{"index":0}', 'cos(nω₀) = [e^{jnω₀} + e^{−jnω₀}]/2: ½X(e^{j(ω−ω₀)}) + ½X(e^{j(ω+ω₀)}).', 2, 'Hafta 6, DTFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-konvolusyon-teoremi', 'dsp', 'ds-dtft', 6, 'mcq', 'original', 'y(n) = x(n) * h(n) ise Y(e^jω) nedir?', '{"choices":["$X(e^{j\\omega})\\,H(e^{j\\omega})$","$X(e^{j\\omega}) + H(e^{j\\omega})$","$X(e^{j\\omega}) * H(e^{j\\omega})$","$X(e^{j\\omega}) / H(e^{j\\omega})$"]}', '{"index":0}', 'Konvolüsyon teoremi: zamanda konvolüsyon, frekansta çarpım.', 1, 'Hafta 6, DTFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-carpma', 'dsp', 'ds-dtft', 6, 'tf', 'original', 'İki dizinin zamanda örnek bazında çarpımının DTFT''si, DTFT''lerinin çarpımıdır.', '{}', '{"value":false}', 'Yanlış. Zamanda çarpım frekansta (periyodik) konvolüsyona karşılık gelir; çarpım-konvolüsyon ikiliği ters yönde işler.', 2, 'Hafta 6, DTFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-parseval', 'dsp', 'ds-dtft', 6, 'num', 'derived', 'x(n): n = 0, 1, 2 için 1, −2, 2 (başka yerde 0). $\frac{1}{2\pi}\int_{-\pi}^{\pi} |X(e^{j\omega})|^2\,d\omega$ kaçtır?', '{"blanks":1}', '{"blanks":[["9"]]}', 'Parseval: frekanstaki enerji zamandakine eşittir: 1 + 4 + 4 = 9.', 2, 'Hafta 6, Parseval teoremi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-ters-sistem', 'dsp', 'ds-dtft', 6, 'mcq', 'original', 'Frekans yanıtı H(e^jω) olan bir sistemin ters sisteminin frekans yanıtı nedir?', '{"choices":["$1/H(e^{j\\omega})$","$H(e^{-j\\omega})$","$-H(e^{j\\omega})$","$H^*(e^{j\\omega})$"]}', '{"index":0}', 'h * g = δ ⇔ H·G = 1 ⇔ G = 1/H.', 1, 'Hafta 6, Ters sistem', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-ters-hesap', 'dsp', 'ds-dtft', 6, 'num', 'derived', '$h(n) = \delta(n) - \tfrac{1}{3}\delta(n-1)$ sisteminin ters sistemi g(n) için g(2) kaçtır?', '{"blanks":1}', '{"blanks":[["1/9"]]}', 'G = 1/(1 − ⅓e^{−jω}) ⇒ g(n) = (1/3)ⁿu(n). g(2) = 1/9.', 3, 'Hafta 6, Ters sistem', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h6-ters-yok', 'dsp', 'ds-dtft', 6, 'tf', 'derived', 'H(e^jω) bir frekansta sıfırsa, o sistemin kararlı bir ters sistemi yoktur.', '{}', '{"value":true}', 'Doğru. O frekanstaki bilgi tamamen kaybolmuştur; 1/H orada sonsuz olur.', 2, 'Hafta 6, Ters sistem', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dfs-periyot', 'dsp', 'ds-dft-temel', 7, 'tf', 'derived', 'N ile periyodik bir dizinin DFS katsayıları X̃(k) de k''ye göre N ile periyodiktir.', '{}', '{"value":true}', 'Doğru. e^{−j2πkn/N}, k yerine k + N konunca değişmez; bu yüzden X̃(k + N) = X̃(k).', 1, 'Hafta 7, Ayrık Fourier serisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dfs-kosinus', 'dsp', 'ds-dft-temel', 7, 'num', 'original', '$x_a(t) = A\cos(200\pi t) + B\cos(300\pi t)$ sinyali $f_s = 1$ kHz ile örnekleniyor. Örneklenen dizinin periyodu N kaçtır? DFS tanımı $\tilde X(k) = \sum_{n=0}^{N-1} \tilde x(n)\,e^{-j2\pi kn/N}$ ise $\tilde X(3)$, B''nin kaç katıdır?

N = ____ , X̃(3) = ____ · B', '{"blanks":2}', '{"blanks":[["20"],["10"]]}', 'x(n) = A cos(0,2πn) + B cos(0,3πn). İlk terimin periyodu 10, ikincinin 20 (0,3π = 2π·3/20); ortak periyot 20. B cos(2π·3n/20) = (B/2)(e^{j2π3n/20} + e^{−j2π3n/20}) olduğundan X̃(3) = N·B/2 = 10B.', 3, 'Hafta 7, Ayrık Fourier serisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dft-ornek', 'dsp', 'ds-dft-temel', 7, 'mcq', 'original', 'Sonlu uzunluklu bir dizinin N noktalı DFT katsayıları X(k), DTFT''nin hangi frekanslardaki örnekleridir?', '{"choices":["$\\omega_k = 2\\pi k/N$","$\\omega_k = \\pi k/N$","$\\omega_k = 2\\pi N/k$","$\\omega_k = k/N$"]}', '{"index":0}', 'X(k) = X(e^{jω}), ω = 2πk/N: 0 ile 2π arasında eşit aralıklı N frekans.', 1, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dft-dtft-fark', 'dsp', 'ds-dft-temel', 7, 'tf', 'original', 'DTFT, ω''nın sürekli bir fonksiyonudur; DFT ise sonlu sayıda katsayıdan oluşan bir dizidir.', '{}', '{"value":true}', 'Doğru. DTFT her ω için bir değer verir; N noktalı DFT yalnızca N değer verir.', 1, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-birim-cember', 'dsp', 'ds-dft-temel', 7, 'fill', 'derived', 'DFT katsayıları, z-dönüşümü X(z)''nin z-düzleminde hangi eğri üzerinde eşit aralıklı N noktadaki değerleridir?', '{"blanks":1}', '{"blanks":[["birim çember","birim çemberi","birim daire"]]}', 'z = e^{j2πk/N} noktaları birim çemberin üzerindedir.', 2, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dft-delta', 'dsp', 'ds-dft-temel', 7, 'num', 'original', '$x(n) = \delta(n) + 3\delta(n-4)$ dizisinin 8 noktalı DFT''sinde X(0) ve X(3) kaçtır?

X(0) = ____ , X(3) = ____', '{"blanks":2}', '{"blanks":[["4"],["-2"]]}', 'X(k) = 1 + 3e^{−j2π·4k/8} = 1 + 3(−1)^k. X(0) = 4, X(3) = 1 − 3 = −2.', 2, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dft-4nokta', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', 'n = 0..3 için x(n) = 1, 2, 0, 1 dizisinin 4 noktalı DFT''sinde X(0) ve X(2) kaçtır?

X(0) = ____ , X(2) = ____', '{"blanks":2}', '{"blanks":[["4"],["-2"]]}', 'X(0) = Σ x(n) = 4. X(2) = Σ x(n)(−1)^n = 1 − 2 + 0 − 1 = −2.', 2, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-w-deger', 'dsp', 'ds-dft-temel', 7, 'mcq', 'derived', '$W_4 = e^{-j2\pi/4}$ kaçtır?', '{"choices":["−j","j","−1","1"]}', '{"index":0}', 'e^{−jπ/2} = cos(π/2) − j sin(π/2) = −j.', 1, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dft-islem', 'dsp', 'ds-dft-temel', 7, 'mcq', 'derived', 'N noktalı DFT tanımdan doğrudan hesaplanırsa yaklaşık kaç karmaşık çarpma gerekir?', '{"choices":["$N^2$","$N\\log_2 N$","$N$","$2N$"]}', '{"index":0}', 'N katsayının her biri N terimli bir toplamdır: N·N = N² çarpma. FFT bunu N log₂N mertebesine indirir.', 2, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-ters-dft', 'dsp', 'ds-dft-temel', 7, 'num', 'original', '8 noktalı X(k), k = 0 için 5, k = 1..7 için 1''dir. Ters DFT x(n)''in x(0) ve x(1) değerleri nedir?

x(0) = ____ , x(1) = ____', '{"blanks":2}', '{"blanks":[["1.5"],["0.5"]]}', 'X(k) = 1 + 4δ(k). Sabit 1''in ters DFT''si δ(n), 4δ(k)''nın ters DFT''si 4/8 = 0,5 (her n için). x(n) = δ(n) + 0,5: x(0) = 1,5, x(1) = 0,5.', 3, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-ters-formul', 'dsp', 'ds-dft-temel', 7, 'mcq', 'derived', 'N noktalı ters DFT formülü hangisidir?', '{"choices":["$x(n) = \\frac{1}{N}\\sum_{k=0}^{N-1} X(k)\\,e^{j2\\pi kn/N}$","$x(n) = \\sum_{k=0}^{N-1} X(k)\\,e^{-j2\\pi kn/N}$","$x(n) = \\frac{1}{N}\\sum_{k=0}^{N-1} X(k)\\,e^{-j2\\pi kn/N}$","$x(n) = N\\sum_{k=0}^{N-1} X(k)\\,e^{j2\\pi kn/N}$"]}', '{"index":0}', 'Ters dönüşümde üssün işareti artıdır ve önde 1/N çarpanı vardır.', 1, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-ters-sabit', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', '6 noktalı X(k) her k için 6''dır. Ters DFT''nin x(0) ve x(3) değerleri nedir?

x(0) = ____ , x(3) = ____', '{"blanks":2}', '{"blanks":[["6"],["0"]]}', 'Sabit DFT''nin ters dönüşümü dürtüdür: x(n) = 6δ(n).', 2, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-k-frekans', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', 'fs = 8000 Hz ile örneklenmiş bir sinyalin 256 noktalı DFT''sinde k = 32 kaç Hz''e karşılık gelir?', '{"blanks":1}', '{"blanks":[["1000"]]}', 'f_k = k·fs/N = 32·8000/256 = 1000 Hz.', 2, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-cozunurluk', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', 'fs = 1000 Hz, N = 200 noktalı DFT''de komşu iki katsayı arasındaki frekans aralığı kaç Hz''dir?', '{"blanks":1}', '{"blanks":[["5"]]}', 'Δf = fs/N = 1000/200 = 5 Hz.', 1, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-k-omega', 'dsp', 'ds-dft-temel', 7, 'mcq', 'derived', '16 noktalı DFT''de k = 4 katsayısı hangi ω frekansına karşılık gelir?', '{"choices":["π/2","π/4","π/8","2π"]}', '{"index":0}', 'ω = 2πk/N = 2π·4/16 = π/2.', 1, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-ust-yari', 'dsp', 'ds-dft-temel', 7, 'tf', 'derived', 'Gerçel bir dizinin N noktalı DFT''sinde N/2''den büyük k indisleri negatif frekanslara karşılık gelir.', '{}', '{"value":true}', 'Doğru. DFT 2π ile periyodiktir; π < ω_k < 2π aralığı −π < ω < 0 ile aynıdır.', 2, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-sifir-doldurma', 'dsp', 'ds-dft-temel', 7, 'tf', 'derived', 'Sıfır doldurma DFT''nin gerçek frekans çözünürlüğünü artırır; birbirine çok yakın iki sinüsü ayırmayı sağlar.', '{}', '{"value":false}', 'Yanlış. Sıfır doldurma aynı DTFT''den daha sık örnek alır; yeni bilgi eklemez. Yakın frekansları ayırmak için daha uzun kayıt gerekir.', 2, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-sifir-ornek', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', '$x(n) = \delta(n) + \delta(n-1)$ dizisi 4 noktaya sıfırla dolduruluyor. 4 noktalı DFT''de |X(1)| ve X(2) kaçtır? (3 ondalık)

|X(1)| = ____ , X(2) = ____', '{"blanks":2}', '{"blanks":[["1.414±0.005","sqrt(2)"],["0"]]}', 'X(k) = 1 + (−j)^k. X(1) = 1 − j, |X(1)| = √2 ≈ 1,414. X(2) = 1 − 1 = 0.', 2, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-sifir-amac', 'dsp', 'ds-dft-temel', 7, 'mcq', 'derived', 'Bir dizinin sonuna sıfır ekleyip daha uzun DFT almanın etkisi nedir?', '{"choices":["Aynı DTFT''den daha sık örnek alınır","Diziye yeni frekans bileşenleri eklenir","Dizinin enerjisi sıfır sayısı kadar artar","DTFT''nin ana lobu daralır ve keskinleşir"]}', '{"index":0}', 'Sıfırlar DTFT''yi değiştirmez; yalnızca örnek aralığı 2π/N küçülür.', 1, 'Hafta 7, DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-x0-toplam', 'dsp', 'ds-dft-ozellikleri', 7, 'num', 'derived', 'n = 0..4 için x(n) = 2, −1, 3, 0, 4 dizisinin 5 noktalı DFT''sinde X(0) kaçtır?', '{"blanks":1}', '{"blanks":[["8"]]}', 'X(0) = Σ x(n) = 2 − 1 + 3 + 0 + 4 = 8.', 1, 'Hafta 7, DFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dogrusallik-uzunluk', 'dsp', 'ds-dft-ozellikleri', 7, 'mcq', 'original', 'x₁(n) 4, x₂(n) 6 örnekliktir. DFT''nin doğrusallık özelliğini kullanmak için ne yapılır?', '{"choices":["x₁''in sonuna 2 sıfır eklenir; 6 noktalı DFT''ler alınır","x₂''nin son 2 örneği atılır; 4 noktalı DFT''ler alınır","x₁''in başına 2 sıfır eklenir; 10 noktalı DFT''ler alınır","Diziler çarpılır; çarpımın 6 noktalı DFT''si alınır"]}', '{"index":0}', 'DFT''ler aynı uzunlukta olmalı: kısa dizi uzun olanın boyuna sıfırla doldurulur.', 2, 'Hafta 7, DFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-parseval-dft', 'dsp', 'ds-dft-ozellikleri', 7, 'num', 'derived', 'n = 0..3 için x(n) = 1, −1, 2, 0. 4 noktalı DFT için $\sum_{k=0}^{3} |X(k)|^2$ kaçtır?', '{"blanks":1}', '{"blanks":[["24"]]}', 'DFT için Parseval: Σ|x(n)|² = (1/N) Σ|X(k)|². Σ|x|² = 1 + 1 + 4 = 6, Σ|X|² = 4·6 = 24.', 2, 'Hafta 7, DFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-simetri-gercel', 'dsp', 'ds-dft-ozellikleri', 7, 'mcq', 'original', 'x(n) gerçel değerli ise N noktalı DFT''si X(k) için hangisi doğrudur?', '{"choices":["$X(N-k) = X^*(k)$","$X(N-k) = -X^*(k)$","$X(k) = X^*(k)$","$X(N-k) = 0$"]}', '{"index":0}', 'Gerçel dizinin DFT''si eşlenik simetriktir. X(k) her zaman gerçel değildir; yalnızca dizi gerçel ve çiftse gerçeldir.', 1, 'Hafta 7, DFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-esl-simetri', 'dsp', 'ds-dft-ozellikleri', 7, 'num', 'derived', 'Gerçel bir dizinin 8 noktalı DFT''sinde X(1) = 2 − 3j. X(7)''nin gerçel ve sanal kısımları nedir?

Re X(7) = ____ , Im X(7) = ____', '{"blanks":2}', '{"blanks":[["2"],["3"]]}', 'X(7) = X(8 − 1) = X*(1) = 2 + 3j.', 2, 'Hafta 7, DFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-xn2', 'dsp', 'ds-dft-ozellikleri', 7, 'tf', 'derived', 'N çift ve x(n) gerçel ise X(N/2) her zaman gerçeldir.', '{}', '{"value":true}', 'Doğru. X(N/2) = Σ x(n)(−1)^n: gerçel sayıların işaretli toplamı. Eşlenik simetri de X(N/2) = X*(N/2) verir.', 2, 'Hafta 7, DFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-sanal-dizi', 'dsp', 'ds-dft-ozellikleri', 7, 'tf', 'original', 'x(n) saf sanal ise X(k) eşlenik antisimetriktir: X(N − k) = −X*(k).', '{}', '{"value":true}', 'Doğru. x = j·g (g gerçel) için X = j·G ve G eşlenik simetrik olduğundan X(N − k) = jG*(k) = −X*(k).', 2, 'Hafta 7, DFT özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-modulo', 'dsp', 'ds-dft-ozellikleri', 7, 'num', 'derived', '$((n))_N$, n''nin N''ye göre modülosudur (0..N − 1 arasında). $((-3))_8$ ve $((11))_8$ kaçtır?

((−3))₈ = ____ , ((11))₈ = ____', '{"blanks":2}', '{"blanks":[["5"],["3"]]}', '−3 = −1·8 + 5 → 5. 11 = 1·8 + 3 → 3.', 1, 'Hafta 7, Dairesel kaydırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dairesel-kaydir', 'dsp', 'ds-dft-ozellikleri', 7, 'num', 'derived', 'x(n) = [5 1 0 2] (n = 0..3). $y(n) = x((n-2))_4$ dizisini yaz.', '{"blanks":1}', '{"blanks":[["[0 2 5 1]"]]}', 'y(0) = x(2) = 0, y(1) = x(3) = 2, y(2) = x(0) = 5, y(3) = x(1) = 1. Sondaki iki örnek başa geçer.', 2, 'Hafta 7, Dairesel kaydırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-kaydirma-dft', 'dsp', 'ds-dft-ozellikleri', 7, 'mcq', 'derived', '$W_N = e^{-j2\pi/N}$ olmak üzere $x((n-n_0))_N$ dizisinin N noktalı DFT''si hangisidir?', '{"choices":["$W_N^{kn_0}X(k)$","$W_N^{-kn_0}X(k)$","$X((k-n_0))_N$","$X(k) + n_0$"]}', '{"index":0}', 'Zamanda dairesel kaydırma, frekansta e^{−j2πkn₀/N} = W_N^{kn₀} ile çarpmadır. Frekansta kaydırma ise zamanda karmaşık üstelle çarpmaya karşılık gelir.', 2, 'Hafta 7, Dairesel kaydırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-kaydirma-buyukluk', 'dsp', 'ds-dft-ozellikleri', 7, 'tf', 'derived', 'Bir dizinin dairesel olarak kaydırılması DFT''sinin büyüklüğünü değiştirmez.', '{}', '{"value":true}', 'Doğru. |W_N^{kn₀}| = 1; yalnızca faz değişir.', 1, 'Hafta 7, Dairesel kaydırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dairesel-hesap', 'dsp', 'ds-dairesel-konvolusyon', 7, 'num', 'original', 'x(n) = [2 1 0 1] ve h(n) = [1 2 0 1] (ikisi de n = 0..3). 4 noktalı dairesel konvolüsyon y(n)''i yaz.', '{"blanks":1}', '{"blanks":[["[5 5 3 3]"]]}', 'y(n) = Σ h(m) x((n − m))₄ = x(n) + 2x((n − 1))₄ + x((n − 3))₄. y(0) = 2 + 2 + 1 = 5, y(1) = 1 + 4 + 0 = 5, y(2) = 0 + 2 + 1 = 3, y(3) = 1 + 0 + 2 = 3.', 3, 'Hafta 7, Dairesel konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dairesel-periyodik', 'dsp', 'ds-dairesel-konvolusyon', 7, 'tf', 'original', 'İki sonlu dizinin N noktalı dairesel konvolüsyonu, periyodik uzantılarının periyodik konvolüsyonunun bir periyoduna eşittir.', '{}', '{"value":true}', 'Doğru. Dairesel konvolüsyon, periyodik konvolüsyonun 0..N − 1 aralığındaki parçasıdır.', 2, 'Hafta 7, Dairesel konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dairesel-dft', 'dsp', 'ds-dairesel-konvolusyon', 7, 'mcq', 'original', 'h(n) ve x(n) N örnekliktir. Y(k) = H(k)X(k) çarpımının ters DFT''si nedir?', '{"choices":["h(n) ile x(n)''in N noktalı dairesel konvolüsyonu","h(n) ile x(n)''in doğrusal konvolüsyonu","h(n) ile x(n)''in çapraz korelasyonu","h(n) ile x(n)''in örnek bazında çarpımı"]}', '{"index":0}', 'DFT''lerin çarpımı dairesel konvolüsyona karşılık gelir; doğrusal konvolüsyon için sıfır doldurmak gerekir.', 1, 'Hafta 7, Dairesel konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-uzunluk-n', 'dsp', 'ds-dairesel-konvolusyon', 7, 'num', 'derived', 'x(n) 12, h(n) 5 örnekliktir. N noktalı dairesel konvolüsyonun doğrusal konvolüsyona eşit olması için en küçük N kaçtır?', '{"blanks":1}', '{"blanks":[["16"]]}', 'N ≥ N₁ + N₂ − 1 = 12 + 5 − 1 = 16.', 1, 'Hafta 7, Dairesel ve doğrusal konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-ortusme-hesap', 'dsp', 'ds-dairesel-konvolusyon', 7, 'num', 'original', 'İki dizinin doğrusal konvolüsyonu n = 0..5 için y(n) = [2 1 0 3 1 4] çıkmıştır. Aynı iki dizinin 4 noktalı dairesel konvolüsyonunu yaz.', '{"blanks":1}', '{"blanks":[["[3 5 0 3]"]]}', 'y_c(n) = y(n) + y(n + 4): y_c(0) = 2 + 1 = 3, y_c(1) = 1 + 4 = 5, y_c(2) = 0, y_c(3) = 3.', 2, 'Hafta 7, Dairesel ve doğrusal konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dairesel-esit', 'dsp', 'ds-dairesel-konvolusyon', 7, 'tf', 'derived', 'N ≥ N₁ + N₂ − 1 seçilirse N noktalı dairesel konvolüsyon doğrusal konvolüsyona eşit olur.', '{}', '{"value":true}', 'Doğru. Doğrusal sonuç N örneğe sığar; başa katlanacak örnek kalmaz.', 1, 'Hafta 7, Dairesel ve doğrusal konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-zaman-ortusme', 'dsp', 'ds-dairesel-konvolusyon', 7, 'mcq', 'derived', 'N, N₁ + N₂ − 1''den küçük seçilirse dairesel konvolüsyonda ne olur?', '{"choices":["Doğrusal sonucun taşan örnekleri başa eklenir","Doğrusal sonucun taşan örnekleri atılır","Sonuç sıfırla doldurularak uzatılır","Sonuç ters çevrilerek yazılır"]}', '{"index":0}', 'y_c(n) = Σ_r y(n + rN): N''den sonraki örnekler başa katlanıp toplanır (zamanda örtüşme).', 2, 'Hafta 7, Dairesel ve doğrusal konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-dft-adimlar', 'dsp', 'ds-dairesel-konvolusyon', 7, 'mcq', 'original', 'DFT ile doğrusal konvolüsyon hesaplanırken ilk adım hangisidir?', '{"choices":["Dizileri N ≥ N₁ + N₂ − 1 boyuna sıfırla doldurmak","İki dizinin DFT''lerini örnek bazında çarpmak","Çarpımın ters DFT''sini alıp sonucu yazmak","Sonucun ilk N₁ − 1 örneğini atıp saklamak"]}', '{"index":0}', 'Sıra: sıfır doldur, DFT al, çarp, ters DFT al.', 1, 'Hafta 7, DFT ile doğrusal konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-fft-neden', 'dsp', 'ds-dairesel-konvolusyon', 7, 'tf', 'derived', 'DFT''ler verimli bir algoritmayla hesaplanırsa DFT ile konvolüsyon, uzun dizilerde konvolüsyon toplamını doğrudan hesaplamaktan daha az işlem gerektirebilir.', '{}', '{"value":true}', 'Doğru. FFT ile DFT''ler N log₂N mertebesinde hesaplanır; doğrudan konvolüsyon ise N₁N₂ çarpma ister.', 1, 'Hafta 7, DFT ile doğrusal konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-oa-ad', 'dsp', 'ds-dairesel-konvolusyon', 7, 'fill', 'derived', 'Uzun giriş örtüşmeyen M örneklik bloklara bölünür; her blok filtreyle konvolüsyona girer ve komşu çıkışların örtüşen örnekleri toplanır. Bu blok konvolüsyon yönteminin adı nedir?', '{"blanks":1}', '{"blanks":[["örtüşme-ekleme","örtüşme ekleme","overlap-add"]]}', 'Örtüşme-ekleme: çıkış blokları L − 1 örnek örtüşür ve bu örnekler toplanır.', 1, 'Hafta 7, Örtüşme-ekleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-oa-uzunluk', 'dsp', 'ds-dairesel-konvolusyon', 7, 'num', 'derived', 'Örtüşme-eklemede filtre L = 5, giriş blokları M = 20 örnekliktir. Her bloğun çıkış uzunluğu N ve komşu çıkışların örtüşen örnek sayısı kaçtır?

N = ____ , örtüşen = ____', '{"blanks":2}', '{"blanks":[["24"],["4"]]}', 'N = L + M − 1 = 24. Örtüşme N − M = L − 1 = 4.', 2, 'Hafta 7, Örtüşme-ekleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-oa-hesap', 'dsp', 'ds-dairesel-konvolusyon', 7, 'num', 'original', '8 örneklik x(n), 3 örneklik h(n) ile konvolüsyona giriyor. x iki 4 örneklik bloğa bölünüp her blok h ile 6 noktalı dairesel konvolüsyona sokuluyor: y₁(n) = [1 2 0 −1 3 1], y₂(n) = [2 −1 1 0 4 −2]. Tüm çıkışın y(4) ve y(5) değerleri nedir?

y(4) = ____ , y(5) = ____', '{"blanks":2}', '{"blanks":[["5"],["0"]]}', 'y(n) = y₁(n) + y₂(n − 4). y(4) = y₁(4) + y₂(0) = 3 + 2 = 5, y(5) = y₁(5) + y₂(1) = 1 − 1 = 0.', 3, 'Hafta 7, Örtüşme-ekleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-os-atilan', 'dsp', 'ds-dairesel-konvolusyon', 7, 'num', 'derived', 'Örtüşme-kaydetmede filtre L = 4 örnek, dairesel konvolüsyon N = 16 noktalıdır. Her bloğun çıkışından kaç örnek atılır, kaç örnek kaydedilir?

atılan = ____ , kaydedilen = ____', '{"blanks":2}', '{"blanks":[["3"],["13"]]}', 'İlk L − 1 = 3 örnek zamanda örtüşmeyle bozulur ve atılır; son N − L + 1 = 13 örnek kaydedilir.', 2, 'Hafta 7, Örtüşme-kaydetme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-os-tf', 'dsp', 'ds-dairesel-konvolusyon', 7, 'tf', 'derived', 'Örtüşme-kaydetmede her dairesel konvolüsyonun son L − 1 örneği atılır.', '{}', '{"value":false}', 'Yanlış. Bozulan ve atılan ilk L − 1 örnektir; son N − L + 1 örnek doğrusal konvolüsyonla aynıdır.', 1, 'Hafta 7, Örtüşme-kaydetme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h7-os-fark', 'dsp', 'ds-dairesel-konvolusyon', 7, 'mcq', 'derived', 'Örtüşme-ekleme ile örtüşme-kaydetme yöntemlerinin giriş bloklarıyla ilgili farkı nedir?', '{"choices":["Ekleme: bloklar örtüşmez; kaydetme: L − 1 örnek örtüşür","Ekleme: L − 1 örnek örtüşür; kaydetme: bloklar örtüşmez","İkisinde de bloklar örtüşmez; yalnız DFT boyu farklı","İkisinde de bloklar örtüşür; yalnız filtre boyu farklı"]}', '{"index":0}', 'Örtüşme-eklemede örtüşen kısım çıkıştadır ve toplanır; örtüşme-kaydetmede girişteki bloklar L − 1 örnek örtüşür ve bozuk çıkış örnekleri atılır.', 2, 'Hafta 7, Örtüşme-kaydetme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-dft-carpma', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', '256 noktalı bir DFT tanımdan doğrudan hesaplanırsa kaç karmaşık çarpma gerekir?', '{"blanks":1}', '{"blanks":[["65536"]]}', 'N² = 256² = 65536.', 1, 'Hafta 8, FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-fft-carpma', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', '256 noktalı radix-2 FFT kaç karmaşık çarpma gerektirir?', '{"blanks":1}', '{"blanks":[["1024"]]}', '(N/2)·log₂N = 128 · 8 = 1024.', 2, 'Hafta 8, FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-sure', 'dsp', 'ds-fft-temel', 8, 'num', 'original', 'Bir karmaşık çarpma 1 µs sürüyor ve hesap süresini yalnızca çarpmalar belirliyor. 2048 noktalı DFT doğrudan kaç saniyede, radix-2 FFT ile kaç milisaniyede hesaplanır? (2 ondalık)

doğrudan = ____ s , FFT = ____ ms', '{"blanks":2}', '{"blanks":[["4.19±0.01"],["11.26±0.01"]]}', 'Doğrudan: 2048² = 4 194 304 µs ≈ 4,19 s. FFT: (2048/2)·11 = 11 264 µs ≈ 11,26 ms.', 2, 'Hafta 8, FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-ikiye-bolme', 'dsp', 'ds-fft-temel', 8, 'mcq', 'original', 'N noktalı bir DFT iki adet N/2 noktalı DFT''ye bölünürse çarpma sayısı yaklaşık ne olur?', '{"choices":["$N^2/2$","$N^2/4$","$2N^2$","$N\\log_2 N$"]}', '{"index":0}', '2·(N/2)² = N²/2: tek bölmeyle iş yarıya iner. Bölmeyi log₂N kez sürdürmek FFT''yi verir.', 1, 'Hafta 8, FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-hiz-orani', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', 'N = 1024 için doğrudan DFT''nin çarpma sayısı, radix-2 FFT''ninkinin kaç katıdır? (1 ondalık)', '{"blanks":1}', '{"blanks":[["204.8±0.5"]]}', 'N² / ((N/2)·log₂N) = 1 048 576 / 5120 = 204,8.', 2, 'Hafta 8, FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-fft-ayni', 'dsp', 'ds-fft-temel', 8, 'tf', 'derived', 'FFT, DFT''den farklı bir dönüşümdür ve sonuçları DFT''nin yaklaşık değerleridir.', '{}', '{"value":false}', 'Yanlış. FFT, DFT''yi hesaplayan hızlı bir algoritmadır; sonuç (yuvarlama hataları dışında) aynı DFT''dir.', 1, 'Hafta 8, FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-dit-tanim', 'dsp', 'ds-fft-temel', 8, 'mcq', 'original', 'Radix-2 zamanda seyreltmeli FFT''nin ilk adımında x(n) nasıl ikiye ayrılır?', '{"choices":["Çift ve tek indisli örneklere","İlk yarı ve ikinci yarıya","Pozitif ve negatif örneklere","Gerçel ve sanal kısımlarına"]}', '{"index":0}', 'g(n) = x(2n) ve h(n) = x(2n + 1). İlk yarı/ikinci yarı ayrımı frekansta seyreltmedir.', 1, 'Hafta 8, Zamanda seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-dit-formul', 'dsp', 'ds-fft-temel', 8, 'mcq', 'original', 'G(k) ve H(k), çift ve tek indisli dizilerin N/2 noktalı DFT''leridir. X(k) hangisidir?', '{"choices":["$G(k) + W_N^k\\,H(k)$","$G(k) + H(k)$","$W_N^k\\,G(k) + H(k)$","$G(k)\\,H(k)$"]}', '{"index":0}', 'Tek indisli terimlerde $W_N^{(2n+1)k} = W_N^k W_{N/2}^{nk}$ olduğundan H(k) önüne $W_N^k$ gelir.', 2, 'Hafta 8, Zamanda seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-dit-ikinci-yari', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', '8 noktalı DIT FFT''de G(0) = 5 ve H(0) = 2. X(0) ve X(4) kaçtır?

X(0) = ____ , X(4) = ____', '{"blanks":2}', '{"blanks":[["7"],["3"]]}', 'X(k) = G(k) + W₈ᵏH(k), X(k + 4) = G(k) − W₈ᵏH(k). k = 0''da W = 1: X(0) = 7, X(4) = 3.', 2, 'Hafta 8, Zamanda seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-dit-g-dizi', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', 'n = 0..7 için x(n) = 3, 1, 4, 1, 5, 9, 2, 6. Zamanda seyreltmenin çift indisli dizisi g(n) = x(2n)''i yaz.', '{"blanks":1}', '{"blanks":[["[3 4 5 2]"]]}', 'x(0), x(2), x(4), x(6) = 3, 4, 5, 2.', 1, 'Hafta 8, Zamanda seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-dit-2kuvvet', 'dsp', 'ds-fft-temel', 8, 'tf', 'derived', 'Radix-2 FFT, dizi uzunluğu N 2''nin bir kuvveti olduğunda doğrudan uygulanabilir.', '{}', '{"value":true}', 'Doğru. Her adımda ikiye bölünebilmesi için N = 2^v olmalıdır; değilse sıfır doldurulur ya da karma N algoritması kullanılır.', 1, 'Hafta 8, Zamanda seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-w-yarim', 'dsp', 'ds-fft-temel', 8, 'mcq', 'derived', '$W_N = e^{-j2\pi/N}$ için $W_N^{k+N/2}$ neye eşittir?', '{"choices":["$-W_N^k$","$W_N^k$","$jW_N^k$","$1/W_N^k$"]}', '{"index":0}', '$W_N^{N/2} = e^{-j\pi} = -1$. Kelebeğin alt kolu bu yüzden yalnızca işaret değiştirir.', 1, 'Hafta 8, Zamanda seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-w-kare', 'dsp', 'ds-fft-temel', 8, 'tf', 'derived', '$W_N^2 = W_{N/2}$ eşitliği doğrudur.', '{}', '{"value":true}', 'Doğru. e^{−j2π·2/N} = e^{−j2π/(N/2)}. Çift indisli terimlerin N/2 noktalı DFT olmasını sağlayan budur.', 1, 'Hafta 8, Zamanda seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-w8-deger', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', '$W_8^1$''in gerçel ve sanal kısımları nedir? (3 ondalık)

Re = ____ , Im = ____', '{"blanks":2}', '{"blanks":[["0.707±0.005"],["-0.707±0.005"]]}', 'W₈ = e^{−jπ/4} = cos(π/4) − j sin(π/4) ≈ 0,707 − 0,707j.', 2, 'Hafta 8, Zamanda seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-bolum-carpani-ad', 'dsp', 'ds-fft-temel', 8, 'fill', 'derived', 'FFT akış diyagramında kelebeklerin bir girdisini çarpan $W_N^r$ katsayılarına ne ad verilir?', '{"blanks":1}', '{"blanks":[["bölüm çarpanı","bölüm çarpanları","twiddle","twiddle factor"]]}', 'Bölüm çarpanı (twiddle factor): birim çember üzerindeki karmaşık üstel.', 1, 'Hafta 8, Zamanda seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-kelebek-hesap', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', 'Sadeleştirilmiş kelebekte üst çıkış A = a + W·b, alt çıkış B = a − W·b''dir. a = 5, b = 2 ve W = $W_4^2$ ise A ve B kaçtır?

A = ____ , B = ____', '{"blanks":2}', '{"blanks":[["3"],["7"]]}', 'W₄² = e^{−jπ} = −1. A = 5 − 2 = 3, B = 5 + 2 = 7.', 2, 'Hafta 8, Kelebek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-iki-nokta', 'dsp', 'ds-fft-temel', 8, 'num', 'original', 'q(0) = 4, q(1) = −1 dizisinin 2 noktalı DFT''si nedir?

Q(0) = ____ , Q(1) = ____', '{"blanks":2}', '{"blanks":[["3"],["5"]]}', 'Q(0) = q(0) + q(1) = 3, Q(1) = q(0) − q(1) = 5. 2 noktalı DFT çarpmasız bir kelebektir.', 1, 'Hafta 8, Kelebek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-kelebek-carpma', 'dsp', 'ds-fft-temel', 8, 'mcq', 'original', 'Sadeleştirilmiş bir FFT kelebeği kaç karmaşık çarpma içerir?', '{"choices":["1","2","0","4"]}', '{"index":0}', 'Alt girdi bir kez W ile çarpılır; sonuç üst çıkışa eklenir, alt çıkıştan çıkarılır.', 1, 'Hafta 8, Kelebek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-kelebek-tf', 'dsp', 'ds-fft-temel', 8, 'tf', 'original', 'Kelebeğin alt kolundaki $W_N^{r+N/2}$ çarpanı $-W_N^r$''ye eşit olduğu için iki çarpma yerine bir çarpma yeterlidir.', '{}', '{"value":true}', 'Doğru. W·b bir kez hesaplanır; alt kolda yalnızca işaret değişir.', 2, 'Hafta 8, Kelebek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-asama-sayisi', 'dsp', 'ds-fft-akis', 8, 'num', 'derived', '64 noktalı radix-2 FFT''de kaç aşama vardır? Her aşamada kaç kelebek bulunur?

aşama = ____ , kelebek = ____', '{"blanks":2}', '{"blanks":[["6"],["32"]]}', 'log₂64 = 6 aşama; her aşamada N/2 = 32 kelebek.', 1, 'Hafta 8, Radix-2 FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-toplama-sayisi', 'dsp', 'ds-fft-akis', 8, 'num', 'original', '32 noktalı radix-2 FFT''de toplam kaç karmaşık toplama ve kaç karmaşık çarpma vardır?

toplama = ____ , çarpma = ____', '{"blanks":2}', '{"blanks":[["160"],["80"]]}', 'Toplama N·log₂N = 32·5 = 160, çarpma (N/2)·log₂N = 80.', 2, 'Hafta 8, Radix-2 FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-asama-tf', 'dsp', 'ds-fft-akis', 8, 'tf', 'derived', '8 noktalı radix-2 FFT''nin her aşamasında 4 kelebek vardır.', '{}', '{"value":true}', 'Doğru. N/2 = 4 kelebek; log₂8 = 3 aşama, toplam 12 kelebek.', 1, 'Hafta 8, Radix-2 FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-bit-ters', 'dsp', 'ds-fft-akis', 8, 'num', 'derived', '8 noktalı FFT''de 3 bitlik bit ters sıralama yapılıyor. n = 1 ve n = 3 indisleri hangi indislere gider?

1 → ____ , 3 → ____', '{"blanks":2}', '{"blanks":[["4"],["6"]]}', '1 = 001 → 100 = 4. 3 = 011 → 110 = 6.', 2, 'Hafta 8, Radix-2 FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-bit-ters-16', 'dsp', 'ds-fft-akis', 8, 'num', 'derived', '16 noktalı FFT''de (4 bit) n = 3 indisinin bit ters karşılığı kaçtır?', '{"blanks":1}', '{"blanks":[["12"]]}', '3 = 0011 → 1100 = 12.', 2, 'Hafta 8, Radix-2 FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-bit-ters-sira', 'dsp', 'ds-fft-akis', 8, 'mcq', 'original', '8 noktalı radix-2 zamanda seyreltmeli FFT''de girişler hangi sırayla verilir?', '{"choices":["x(0) x(4) x(2) x(6) x(1) x(5) x(3) x(7)","x(0) x(1) x(2) x(3) x(4) x(5) x(6) x(7)","x(0) x(2) x(4) x(6) x(1) x(3) x(5) x(7)","x(7) x(6) x(5) x(4) x(3) x(2) x(1) x(0)"]}', '{"index":0}', 'Bit ters sırası: 000, 100, 010, 110, 001, 101, 011, 111. Çift/tek ayrımı her aşamada tekrarlandığı için sıra yalnızca bir kez çift/tek ayırmaktan farklıdır.', 1, 'Hafta 8, Radix-2 FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-yerinde', 'dsp', 'ds-fft-akis', 8, 'tf', 'derived', 'Radix-2 FFT, her kelebeğin sonucunu girdilerinin bulunduğu bellek konumlarına yazarak yerinde hesaplanabilir.', '{}', '{"value":true}', 'Doğru. Bir kelebeğin iki çıkışı yalnızca kendi iki girdisinden hesaplanır; girdiler artık gerekmez.', 2, 'Hafta 8, Radix-2 FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-dif-tanim', 'dsp', 'ds-fft-akis', 8, 'mcq', 'original', 'Frekansta seyreltmeli FFT''nin ilk adımında giriş dizisi nasıl eşlenir?', '{"choices":["İlk yarı ile ikinci yarı","Çift ile tek indisli örnekler","Pozitif ile negatif örnekler","Gerçel ile sanal kısımlar"]}', '{"index":0}', 'x(n) ile x(n + N/2) bir kelebeğe girer; çıkışta çift ve tek indisli X(k) ayrılır.', 1, 'Hafta 8, Frekansta seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-dif-cift', 'dsp', 'ds-fft-akis', 8, 'num', 'derived', 'n = 0..7 için x(n) = 2, 0, 1, 3, 1, 1, 0, 2. Frekansta seyreltmede çift indisli X(2k)''yi veren 4 noktalı DFT''nin girişi a(n) = x(n) + x(n + 4) dizisini yaz.', '{"blanks":1}', '{"blanks":[["[3 1 1 5]"]]}', '2 + 1 = 3, 0 + 1 = 1, 1 + 0 = 1, 3 + 2 = 5.', 2, 'Hafta 8, Frekansta seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-dif-tek', 'dsp', 'ds-fft-akis', 8, 'mcq', 'derived', 'Frekansta seyreltmede X(2k + 1), hangi dizinin N/2 noktalı DFT''sidir?', '{"choices":["$[x(n) - x(n+N/2)]\\,W_N^n$","$x(n) + x(n+N/2)$","$[x(n) + x(n+N/2)]\\,W_N^n$","$x(n) - x(n+N/2)$"]}', '{"index":0}', 'Tek k''lerde ikinci yarı −1 ile girer ve fark $W_N^n$ ile çarpılır.', 2, 'Hafta 8, Frekansta seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-dif-cikis', 'dsp', 'ds-fft-akis', 8, 'tf', 'derived', 'Frekansta seyreltmeli radix-2 FFT''de giriş doğal sırada, çıkış bit ters sıradadır.', '{}', '{"value":true}', 'Doğru. Zamanda seyreltmenin tersi: orada giriş bit ters, çıkış doğal sıradadır.', 1, 'Hafta 8, Frekansta seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-dit-dif-islem', 'dsp', 'ds-fft-akis', 8, 'tf', 'derived', 'Radix-2 zamanda ve frekansta seyreltmeli FFT''lerin karmaşık çarpma sayıları aynıdır.', '{}', '{"value":true}', 'Doğru. İkisinde de log₂N aşama ve aşama başına N/2 çarpma vardır.', 2, 'Hafta 8, Frekansta seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-karma-indis', 'dsp', 'ds-fft-uygulama', 8, 'num', 'original', 'N = 15 = N₁·N₂, N₁ = 3, N₂ = 5. $n = N_2 n_1 + n_2$ dizilişinde x(11) hangi n₁ ve n₂''ye düşer?

n₁ = ____ , n₂ = ____', '{"blanks":2}', '{"blanks":[["2"],["1"]]}', '11 = 5·2 + 1: n₁ = 2, n₂ = 1.', 2, 'Hafta 8, Karma N için FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-karma-tablo', 'dsp', 'ds-fft-uygulama', 8, 'mcq', 'original', 'N = 15, N₁ = 3, N₂ = 5 için x(n), 5 satır ve 3 sütunluk tabloya $x(N_2 n_1 + n_2)$ biçiminde yerleştiriliyor. İlk satırda hangi örnekler vardır?', '{"choices":["x(0), x(5), x(10)","x(0), x(1), x(2)","x(0), x(3), x(6)","x(0), x(4), x(8)"]}', '{"index":0}', 'n₂ = 0 satırı: n₁ = 0, 1, 2 için n = 0, 5, 10.', 2, 'Hafta 8, Karma N için FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-karma-adimlar', 'dsp', 'ds-fft-uygulama', 8, 'mcq', 'original', 'Karma N algoritmasında tablo kurulduktan sonra adımların doğru sırası hangisidir?', '{"choices":["Satır DFT''leri, bölüm çarpanları, sütun DFT''leri","Sütun DFT''leri, satır DFT''leri, bölüm çarpanları","Bölüm çarpanları, sütun DFT''leri, satır DFT''leri","Satır DFT''leri, sütun DFT''leri, bölüm çarpanları"]}', '{"index":0}', 'Her satırın N₁ noktalı DFT''si → $W_N^{n_2 k_1}$ ile çarpma → her sütunun N₂ noktalı DFT''si.', 2, 'Hafta 8, Karma N için FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-karma-k', 'dsp', 'ds-fft-uygulama', 8, 'num', 'derived', 'Karma N algoritmasında çıkış indisi $k = k_1 + N_1 k_2$''dir. N₁ = 3 için k₁ = 2, k₂ = 3 hücresindeki çıkış hangi X(k)''dir?', '{"blanks":1}', '{"blanks":[["11"]]}', 'k = 2 + 3·3 = 11.', 2, 'Hafta 8, Karma N için FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-karma-tf', 'dsp', 'ds-fft-uygulama', 8, 'tf', 'derived', 'Uzunluğu 2''nin kuvveti olmayan dizilerde FFT fikri hiç kullanılamaz.', '{}', '{"value":false}', 'Yanlış. N = N₁·N₂ biçiminde çarpanlara ayrılabiliyorsa karma N algoritmasıyla daha küçük DFT''lere bölünür.', 1, 'Hafta 8, Karma N için FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-fft-konv', 'dsp', 'ds-fft-uygulama', 8, 'num', 'derived', '300 ve 200 örneklik iki dizinin doğrusal konvolüsyonu radix-2 FFT ile hesaplanacak. Kullanılabilecek en küçük FFT uzunluğu kaçtır?', '{"blanks":1}', '{"blanks":[["512"]]}', 'N ≥ 300 + 200 − 1 = 499; 2''nin bundan büyük ilk kuvveti 512.', 2, 'Hafta 8, FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-matlab-fft', 'dsp', 'ds-fft-uygulama', 8, 'mcq', 'derived', 'x 10 örnekliyse MatStudio''daki `fft(x, 16)` ne yapar?', '{"choices":["x''i 16 örneğe sıfırla doldurup 16 noktalı DFT alır","x''in ilk 16 örneğini alıp 16 noktalı DFT hesaplar","x''in 10 noktalı DFT''sini 16 kez tekrar ederek yazar","x''i 16 kez tekrarlayıp 160 noktalı DFT hesaplar"]}', '{"index":0}', 'İkinci bağımsız değişken DFT uzunluğudur; kısa dizi sonuna sıfır eklenerek uzatılır, uzun dizi kesilir.', 1, 'Hafta 8, FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-frekans-ekseni', 'dsp', 'ds-fft-uygulama', 8, 'num', 'derived', 'fs = 1024 Hz ile örneklenmiş bir sinyalin 256 noktalı FFT''sinde tepe k = 20''de. Sinüsün frekansı kaç Hz''dir?', '{"blanks":1}', '{"blanks":[["80"]]}', 'f = k·fs/N = 20·1024/256 = 80 Hz.', 2, 'Hafta 8, FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-ters-fft', 'dsp', 'ds-fft-uygulama', 8, 'mcq', 'derived', 'Yalnızca ileri FFT yapan bir programla ters DFT nasıl hesaplanır?', '{"choices":["$x(n) = \\frac{1}{N}\\big[\\mathrm{FFT}\\{X^*(k)\\}\\big]^*$","$x(n) = N\\,\\mathrm{FFT}\\{X(k)\\}$","$x(n) = \\mathrm{FFT}\\{X^*(k)\\}$","$x(n) = \\frac{1}{N}\\mathrm{FFT}\\{X(k)\\}$"]}', '{"index":0}', 'Eşlenik almak üssün işaretini çevirir: X*''ın FFT''si alınır, sonuç eşleniklenir ve N''ye bölünür.', 2, 'Hafta 8, FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-h8-ters-fft-tf', 'dsp', 'ds-fft-uygulama', 8, 'tf', 'derived', 'Ters DFT de FFT algoritmasıyla hesaplanabilir; yalnızca bölüm çarpanlarının üssünün işareti ve 1/N çarpanı farklıdır.', '{}', '{"value":true}', 'Doğru. W_N yerine W_N^{−1} kullanılır ve sonuç N''ye bölünür.', 1, 'Hafta 8, FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-adc-16bit', 'dsp', 'ds-dsp-giris', 1, 'num', 'derived', '16 bitlik bir ses ADC''si kaç farklı seviye verir?', '{"blanks":1}', '{"blanks":[["65536"]]}', '$2^{16} = 65536$ seviye.', 1, 'Hafta 1, Örnekleme ve niceleme (ADC)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-adc-fs', 'dsp', 'ds-dsp-giris', 1, 'num', 'derived', 'Örnekleri 50 µs arayla alan bir ADC''nin örnekleme hızı kaç Hz''dir?', '{"blanks":1}', '{"blanks":[["20000"]]}', '$f_s = 1/T_s = 1 / (50 \cdot 10^{-6})$ = 20 000 Hz.', 1, 'Hafta 1, Örnekleme ve niceleme (ADC)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-adc-bir-bit', 'dsp', 'ds-dsp-giris', 1, 'mcq', 'derived', 'Bir ADC''ye bir bit daha eklenirse (ölçme aralığı aynı kalırsa) niceleme adımı ne olur?', '{"choices":["Yarıya iner","Bir azalır","İki katına çıkar","Değişmez"]}', '{"index":0}', 'Seviye sayısı $2^B$''den $2^{B+1}$''e, yani iki katına çıkar; aynı aralık iki kat seviyeye bölündüğü için adım yarıya iner.', 2, 'Hafta 1, Örnekleme ve niceleme (ADC)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-adc-adim-12', 'dsp', 'ds-dsp-giris', 1, 'num', 'derived', '0–4,096 V aralığında çalışan 12 bitlik bir ADC''nin niceleme adımı kaç mV''tur?', '{"blanks":1}', '{"blanks":[["1"]]}', '$2^{12} = 4096$ seviye; 4,096 V / 4096 = 1 mV.', 2, 'Hafta 1, Örnekleme ve niceleme (ADC)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-alan-frekans', 'dsp', 'ds-dsp-giris', 1, 'fill', 'derived', 'Yatay ekseni frekans olan bir sinyalin ____ alanında olduğu söylenir.', '{"blanks":1}', '{"blanks":[["frekans"]]}', 'Sinyalin alanı yatay eksendeki niceliktir; frekans eksenli sinyal frekans alanındadır.', 1, 'Hafta 1, Sinyal grafiğinin eksenleri ve alanı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-bagimsiz', 'dsp', 'ds-dsp-giris', 1, 'tf', 'derived', 'Bir sinyal grafiğinde bağımsız değişken her örneğin ne zaman ve nasıl alındığını, bağımlı değişken ise ölçülen değeri gösterir.', '{}', '{"value":true}', 'Doğru. Bu yüzden iki eksenin yeri değiştirilemez: genlik, bağımsız değişkenin bir fonksiyonudur.', 1, 'Hafta 1, Sinyal grafiğinin eksenleri ve alanı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-ortalama-sapma-2', 'dsp', 'ds-istatistik', 1, 'num', 'derived', 'x = [10 12 14] için μ ve (N − 1''li) σ''yı bul.

μ = ____ , σ = ____', '{"blanks":2}', '{"blanks":[["12"],["2"]]}', 'μ = 36/3 = 12. Sapmalar −2, 0, 2; kareler toplamı 8. σ² = 8/2 = 4, σ = 2.', 2, 'Hafta 1, Ortalama, standart sapma ve varyans', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-dc-eklemek', 'dsp', 'ds-istatistik', 1, 'mcq', 'derived', 'Bir sinyalin her örneğine 5 eklenirse ortalaması ve standart sapması ne olur?', '{"choices":["Ortalama 5 artar, standart sapma değişmez","İkisi de 5 artar","Ortalama değişmez, standart sapma 5 artar","İkisi de değişmez"]}', '{"index":0}', 'Sabit eklemek bütün sinyali kaydırır: ortalama 5 artar ama örneklerin ortalamadan sapmaları aynı kalır, σ değişmez.', 1, 'Hafta 1, Ortalama, standart sapma ve varyans', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-olcek', 'dsp', 'ds-istatistik', 1, 'num', 'derived', 'Standart sapması 0,4 V olan bir sinyal kazancı 3 olan bir yükselteçten geçiyor. Çıkışın standart sapması kaç volttur?', '{"blanks":1}', '{"blanks":[["1.2"]]}', 'Her örnek 3 ile çarpılınca sapmalar da 3 ile çarpılır: σ = 3 · 0,4 = 1,2 V. Varyans ise 9 katına çıkar.', 2, 'Hafta 1, Ortalama, standart sapma ve varyans', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-varyans-uc', 'dsp', 'ds-istatistik', 1, 'num', 'derived', 'Birbirinden bağımsız üç gürültü kaynağının her birinin standart sapması 2 mV. Toplam gürültünün standart sapması kaç mV''tur?', '{"blanks":1}', '{"blanks":[["3.464±0.01"]]}', 'Varyanslar toplanır: 4 + 4 + 4 = 12; σ = √12 ≈ 3,46 mV.', 3, 'Hafta 1, Ortalama, standart sapma ve varyans', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-vp-vrms', 'dsp', 'ds-istatistik', 1, 'num', 'derived', 'Prizdeki şebeke geriliminin rms değeri 220 V. Bu sinüsün tepe genliği yaklaşık kaç volttur?', '{"blanks":1}', '{"blanks":[["311±1"]]}', '$V_p = \sqrt{2}\,V_{rms} = 1{,}414 \cdot 220 \approx 311$ V.', 1, 'Hafta 1, rms ve tepeden tepeye değer', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-ucgen-vpp', 'dsp', 'ds-istatistik', 1, 'num', 'derived', 'Ortalaması sıfır olan bir üçgen dalganın tepeden tepeye değeri 6 V. Standart sapması yaklaşık kaç volttur?', '{"blanks":1}', '{"blanks":[["1.732±0.01"]]}', 'Üçgende $V_{pp} = \sqrt{12}\,\sigma$, yani σ = 6 / 3,464 ≈ 1,73 V.', 2, 'Hafta 1, rms ve tepeden tepeye değer', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-rms-dc-sinus', 'dsp', 'ds-istatistik', 1, 'num', 'derived', 'Tepe genliği 4 V olan bir sinüs 3 V''luk bir DC üzerine binmiş. Sinyalin rms değeri yaklaşık kaç volttur?', '{"blanks":1}', '{"blanks":[["4.123±0.01"]]}', 'AC kısmın σ''sı 4/√2 ≈ 2,83 V, varyansı 8. rms² = 3² + 8 = 17, rms ≈ 4,12 V.', 3, 'Hafta 1, rms ve tepeden tepeye değer', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-rms-hangi', 'dsp', 'ds-istatistik', 1, 'mcq', 'derived', 'Hangi ölçü bir sinyalin hem DC hem AC kısmını hesaba katar?', '{"choices":["Standart sapma","Varyans","rms değeri","Tepeden tepeye değer"]}', '{"index":2}', 'rms karelerin ortalamasının kareköküdür; DC de karesiyle katkı verir. Standart sapma, varyans ve Vpp yalnızca dalgalanmayı ölçer.', 1, 'Hafta 1, rms ve tepeden tepeye değer', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-pmf-toplam', 'dsp', 'ds-olasilik', 1, 'num', 'derived', 'Bir sinyalin pmf değerlerinin toplamı kaçtır?', '{"blanks":1}', '{"blanks":[["1"]]}', 'pmf, histogramın N''ye bölünmüş halidir: $\sum H_i / N = N/N = 1$.', 1, 'Hafta 1, Histogram, pmf, pdf ve kutulama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-pmf-hist', 'dsp', 'ds-olasilik', 1, 'num', 'derived', '2000 örneklik bir sinyalin histogramında $H_{37} = 50$. pmf''te 37 değerinin olasılığı nedir?', '{"blanks":1}', '{"blanks":[["0.025"]]}', 'pmf = H / N = 50 / 2000 = 0,025.', 2, 'Hafta 1, Histogram, pmf, pdf ve kutulama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-pdf-buyuk', 'dsp', 'ds-olasilik', 1, 'tf', 'derived', 'Bir pdf''in değeri hiçbir noktada 1''den büyük olamaz.', '{}', '{"value":false}', 'Yanlış. pdf olasılık değil olasılık yoğunluğudur. Çok dar bir dağılımda (örneğin σ = 0,1 olan Gauss''ta tepe ≈ 3,99) 1''den büyük olur; yalnızca altındaki toplam alan 1''dir.', 2, 'Hafta 1, Histogram, pmf, pdf ve kutulama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-kutu-genislik', 'dsp', 'ds-olasilik', 1, 'num', 'derived', '−1 ile 1 arasında değer alan kayan noktalı bir sinyal 400 kutulu bir histogramla sayılıyor. Kutu genişliği nedir?', '{"blanks":1}', '{"blanks":[["0.005"]]}', 'Aralık 2, kutu sayısı 400: genişlik 2 / 400 = 0,005.', 2, 'Hafta 1, Histogram, pmf, pdf ve kutulama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-gauss-95', 'dsp', 'ds-olasilik', 1, 'mcq', 'derived', 'Normal dağılımda örneklerin yaklaşık %95''i hangi aralıktadır?', '{"choices":["μ ± 0,5σ","μ ± 1σ","μ ± 2σ","μ ± 3σ"]}', '{"index":2}', '±1σ ≈ %68, ±2σ ≈ %95, ±3σ ≈ %99,7.', 1, 'Hafta 1, Normal dağılım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-gauss-disari', 'dsp', 'ds-olasilik', 1, 'num', 'derived', 'μ = 0, σ = 1 V olan Gauss gürültünün örneklerinin yaklaşık yüzde kaçı 2 V''tan büyüktür?', '{"blanks":1}', '{"blanks":[["2.5±0.3"]]}', '±2σ dışında %5 kalır ve dağılım simetrik olduğu için bunun yarısı, yaklaşık %2,5''i, +2σ''nın üstündedir.', 3, 'Hafta 1, Normal dağılım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-rnd-dort', 'dsp', 'ds-gurultu-dogruluk', 1, 'num', 'derived', 'Dört RND''nin (0–1 arası düzgün) toplamının ortalamasını ve standart sapmasını bul.

μ = ____ , σ = ____', '{"blanks":2}', '{"blanks":[["2"],["0.577±0.005"]]}', 'Ortalamalar ve varyanslar toplanır: μ = 4 · 0,5 = 2, σ² = 4/12 = 1/3, σ ≈ 0,577.', 2, 'Hafta 1, Rastgele sayılarla gürültü üretimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-rnd-ortalama', 'dsp', 'ds-gurultu-dogruluk', 1, 'num', 'derived', '0 ile 1 arasında düzgün dağılımlı rastgele sayıların ortalaması kaçtır?', '{"blanks":1}', '{"blanks":[["0.5"]]}', 'Düzgün dağılımın ortalaması aralığın ortasıdır: 0,5.', 1, 'Hafta 1, Rastgele sayılarla gürültü üretimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-kesin-dogru-degil', 'dsp', 'ds-gurultu-dogruluk', 1, 'mcq', 'derived', 'Bir termometre 25,0 °C''lik suyu on kez ölçüp her seferinde 26,9 ile 27,1 °C arasında bir değer gösteriyor. Termometre için ne söylenir?', '{"choices":["Kesin ama doğru değil","Doğru ama kesin değil","Hem kesin hem doğru","Ne kesin ne doğru"]}', '{"index":0}', 'Ölçümler birbirine çok yakın (kesinlik iyi) ama ortalama gerçek değerden 2 °C uzak (doğruluk kötü). Çare kalibrasyon.', 2, 'Hafta 1, Kesinlik ve doğruluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t1-ortalama-n', 'dsp', 'ds-gurultu-dogruluk', 1, 'num', 'derived', 'Tek bir ölçümün rastgele hatası (σ) 8 mm. 16 ölçümün ortalamasının rastgele hatası kaç mm olur?', '{"blanks":1}', '{"blanks":[["2"]]}', 'N ölçümün ortalamasının rastgele hatası √N kat küçülür: 8 / √16 = 2 mm.', 3, 'Hafta 1, Kesinlik ve doğruluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-inf', 'dsp', 'ds-matlab-temel', 2, 'fill', 'derived', 'MatStudio''da `1/0` işleminin sonucu nedir?', '{"blanks":1}', '{"blanks":[["Inf"]]}', 'Sıfıra bölme sonsuzluk verir: `Inf`. `0/0` ise `NaN`''dır.', 1, 'Hafta 2, MatStudio betikleri, çıktı ve özel değerler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-i-degisken', 'dsp', 'ds-matlab-temel', 2, 'num', 'derived', 'Aşağıdaki betikten sonra `z` kaçtır?

```matlab
i = 5;
z = 2 + 3*i;
```', '{"blanks":1}', '{"blanks":[["17"]]}', '`i` artık 5 değerli bir değişkendir; `3*i` = 15 ve z = 17. Karmaşık sayı için `3i` ya da `1j` yazılmalıdır.', 2, 'Hafta 2, MatStudio betikleri, çıktı ve özel değerler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-linspace-2', 'dsp', 'ds-matlab-temel', 2, 'num', 'derived', '`linspace(-1, 1, 3)` nedir?', '{"blanks":1}', '{"blanks":[["[-1 0 1]"]]}', '−1 ile 1 dahil 3 eşit aralıklı değer: aralık 1.', 1, 'Hafta 2, Vektör oluşturma: aralık ve linspace', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-aralik-2', 'dsp', 'ds-matlab-temel', 2, 'num', 'derived', '`5:5:22` komutunun ürettiği vektörü yaz.', '{"blanks":1}', '{"blanks":[["[5 10 15 20]"]]}', '5''ten başlayıp 5''er artar; 25 sınırı (22) aştığı için alınmaz.', 1, 'Hafta 2, Vektör oluşturma: aralık ve linspace', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-aralik-uzunluk-2', 'dsp', 'ds-matlab-temel', 2, 'num', 'derived', '`length(-1:0.1:1)` kaçtır?', '{"blanks":1}', '{"blanks":[["21"]]}', '(1 − (−1))/0,1 + 1 = 21 eleman.', 2, 'Hafta 2, Vektör oluşturma: aralık ve linspace', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-ters', 'dsp', 'ds-matlab-temel', 2, 'num', 'derived', '`v = [3 6 9 12];` için `v(end:-1:1)` nedir?', '{"blanks":1}', '{"blanks":[["[12 9 6 3]"]]}', 'Adım −1: sondan başa doğru ters çevrilir.', 1, 'Hafta 2, Vektör indeksleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-indis-vektor', 'dsp', 'ds-matlab-temel', 2, 'num', 'derived', '`v = [10 20 30 40];` için `v([4 1 1])` nedir?', '{"blanks":1}', '{"blanks":[["[40 10 10]"]]}', 'İndis vektörü sırasıyla 4., 1. ve yine 1. elemanı alır.', 2, 'Hafta 2, Vektör indeksleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-sutun', 'dsp', 'ds-matlab-matris', 2, 'num', 'derived', '`A = [1 5 9; 2 6 10];` için `A(:, 2)` nedir? (sütun vektörünü satır gibi yazabilirsin)', '{"blanks":1}', '{"blanks":[["[5 6]"]]}', '`A(:, 2)` 2. sütunun bütün satırlarıdır: 5 ve 6.', 1, 'Hafta 2, Matris indeksleme ve doğrusal indeks', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-dogrusal-2', 'dsp', 'ds-matlab-matris', 2, 'num', 'derived', '`A = [1 5 9; 2 6 10];` için `A(5)` kaçtır?', '{"blanks":1}', '{"blanks":[["9"]]}', 'Sütun sırası: 1, 2, 5, 6, 9, 10. Beşinci eleman 9.', 2, 'Hafta 2, Matris indeksleme ve doğrusal indeks', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-bolme', 'dsp', 'ds-matlab-matris', 2, 'num', 'derived', '`[8 6 4] ./ [2 3 4]` nedir?', '{"blanks":1}', '{"blanks":[["[4 2 1]"]]}', 'Eleman bazında bölme: 8/2, 6/3, 4/4.', 1, 'Hafta 2, Eleman bazında ve matris işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-ic-carpim', 'dsp', 'ds-matlab-matris', 2, 'num', 'derived', '`[1 2 3] * [4; 5; 6]` kaçtır?', '{"blanks":1}', '{"blanks":[["32"]]}', '1×3 ile 3×1''in matris çarpımı tek sayıdır: 1·4 + 2·5 + 3·6 = 32.', 2, 'Hafta 2, Eleman bazında ve matris işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-boyut-hata', 'dsp', 'ds-matlab-matris', 2, 'mcq', 'derived', '`[1 2 3] * [4 5 6]` yazılınca ne olur?', '{"choices":["Hata verir: iç boyutlar uyuşmuyor","[4 10 18] döner","32 döner","3×3''lük bir matris döner"]}', '{"index":0}', '1×3 ile 1×3 matris çarpımına giremez (A''nın sütun sayısı 3, B''nin satır sayısı 1). Eleman bazında çarpım için `.*` gerekir.', 2, 'Hafta 2, Eleman bazında ve matris işlemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-sifirla', 'dsp', 'ds-matlab-fonksiyon', 2, 'num', 'derived', '`x = [3 -2 5 -1];` ve ardından `x(x < 0) = 0;` çalıştırılınca `x` nedir?', '{"blanks":1}', '{"blanks":[["[3 0 5 0]"]]}', 'Mantıksal indeksle yapılan atama yalnızca koşulu sağlayan (negatif) elemanları değiştirir.', 2, 'Hafta 2, İlişkisel ve mantıksal işleçler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-veya-sayma', 'dsp', 'ds-matlab-fonksiyon', 2, 'num', 'derived', '`x = [1 6 2 8 4];` için `sum(x < 2 | x > 5)` kaçtır?', '{"blanks":1}', '{"blanks":[["3"]]}', '2''den küçük (1) ya da 5''ten büyük (6, 8) elemanlar: 3 tane.', 2, 'Hafta 2, İlişkisel ve mantıksal işleçler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-tek-cikis', 'dsp', 'ds-matlab-fonksiyon', 2, 'num', 'derived', '`function [a, b] = ikisi(x)` fonksiyonu `a = 2*x; b = x^2;` hesaplıyor. `r = ikisi(4)` çağrısından sonra `r` kaçtır?', '{"blanks":1}', '{"blanks":[["8"]]}', 'Tek değişkenle çağrılınca yalnızca ilk çıkış alınır: a = 2·4 = 8.', 2, 'Hafta 2, MatStudio''da fonksiyon yazmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-rand-kare', 'dsp', 'ds-matlab-fonksiyon', 2, 'num', 'derived', '`rand(4)` kaç elemanlı bir matris üretir?', '{"blanks":1}', '{"blanks":[["16"]]}', 'Tek argüman kare matris demektir: 4×4 = 16 eleman.', 1, 'Hafta 2, rand, randn, randi ve randperm', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-randn-olcek', 'dsp', 'ds-matlab-fonksiyon', 2, 'mcq', 'derived', 'Ortalaması 3, standart sapması 0,5 olan N normal sayı hangi ifadeyle üretilir?', '{"choices":["3 + 0.5*randn(1, N)","0.5 + 3*randn(1, N)","3*randn(1, N) + 0.5","3 + 0.5*rand(1, N)"]}', '{"index":0}', 'μ + σ·randn: önce standart sapmayla ölçekle, sonra ortalamayı ekle. `rand` düzgün dağılım verir.', 2, 'Hafta 2, rand, randn, randi ve randperm', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-yatay-boyut', 'dsp', 'ds-matlab-istatistik', 2, 'num', 'derived', '`size([ones(3, 2), zeros(3, 4)])` nedir?', '{"blanks":1}', '{"blanks":[["[3 6]"]]}', 'Yan yana birleştirmede sütunlar toplanır: 2 + 4 = 6; satır 3 kalır.', 1, 'Hafta 2, Dizi birleştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-sifir-ekle', 'dsp', 'ds-matlab-istatistik', 2, 'num', 'derived', '`x = [1 2 3]; y = [x, zeros(1, 2)];` için `y` nedir?', '{"blanks":1}', '{"blanks":[["[1 2 3 0 0]"]]}', 'x''in sonuna iki sıfır eklenir (sıfır doldurma).', 1, 'Hafta 2, Dizi birleştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-mean-satir', 'dsp', 'ds-matlab-istatistik', 2, 'num', 'derived', '`A = [2 4; 6 8; 1 3];` için `mean(A, 2)` nedir? (sütun vektörünü satır gibi yazabilirsin)', '{"blanks":1}', '{"blanks":[["[3 7 2]"]]}', 'Boyut 2 her satırın ortalamasıdır: (2+4)/2, (6+8)/2, (1+3)/2.', 2, 'Hafta 2, İstatistik fonksiyonları ve boyut', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-median-tek', 'dsp', 'ds-matlab-istatistik', 2, 'num', 'derived', '`median([9 2 5 1 7])` kaçtır?', '{"blanks":1}', '{"blanks":[["5"]]}', 'Sıralı: 1, 2, 5, 7, 9; tek sayıda elemanda ortadaki 5''tir.', 1, 'Hafta 2, İstatistik fonksiyonları ve boyut', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-var-pop', 'dsp', 'ds-matlab-istatistik', 2, 'num', 'derived', '`var([2 4 6], 1)` kaçtır?', '{"blanks":1}', '{"blanks":[["2.6667±0.001","8/3"]]}', 'Ağırlık 1: N''ye böl. Ortalama 4, kareli sapmalar 4 + 0 + 4 = 8; 8/3 ≈ 2,667.', 2, 'Hafta 2, İstatistik fonksiyonları ve boyut', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t2-corr-sifir', 'dsp', 'ds-matlab-istatistik', 2, 'tf', 'derived', 'corrcoef(A) ile bulunan katsayı matrisinin köşegenindeki elemanlar her zaman 1''dir.', '{}', '{"value":true}', 'Doğru. Köşegen her değişkenin kendisiyle korelasyonudur ve 1''dir; matris simetriktir.', 2, 'Hafta 2, İstatistik fonksiyonları ve boyut', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-pencere', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', 'u(n + 1) − u(n − 4) dizisi kaç örnekte 1 değerini alır?', '{"blanks":1}', '{"blanks":[["5"]]}', 'u(n + 1) n ≥ −1''de, u(n − 4) n ≥ 4''te 1''dir. Fark −1 ≤ n ≤ 3''te 1: beş örnek.', 2, 'Hafta 3, Birim dürtü, basamak ve rampa', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-durtu-toplam-2', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', '$\displaystyle\sum_{n=-\infty}^{\infty} (2n + 1)\,\delta(n + 2)$ kaçtır?', '{"blanks":1}', '{"blanks":[["-3"]]}', 'Yalnızca n = −2 terimi kalır: 2·(−2) + 1 = −3.', 2, 'Hafta 3, Birim dürtü, basamak ve rampa', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-basamak-deger', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', 'u(n − 3) dizisinin n = 2''deki ve n = 3''teki değerleri nedir?

n = 2: ____ , n = 3: ____', '{"blanks":2}', '{"blanks":[["0"],["1"]]}', 'u(n − 3), n − 3 ≥ 0, yani n ≥ 3 için 1''dir.', 1, 'Hafta 3, Birim dürtü, basamak ve rampa', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-ustel-buyur', 'dsp', 'ds-ayrik-diziler', 3, 'mcq', 'derived', '$x(n) = (1{,}2)^n u(n)$ dizisi nasıl davranır?', '{"choices":["İşareti değişmeden büyür","İşareti değişmeden söner","İşareti değişerek büyür","Sabit kalır"]}', '{"index":0}', 'a = 1,2 > 1: dizi büyür; a pozitif olduğu için işaret değişmez.', 1, 'Hafta 3, Üstel ve karmaşık üstel diziler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-sinus-faz', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', '$x(n) = 4\cos(\pi n/2 + \pi/3)$ dizisinin x(0) değeri kaçtır?', '{"blanks":1}', '{"blanks":[["2"]]}', 'x(0) = 4·cos(π/3) = 4·0,5 = 2.', 2, 'Hafta 3, Üstel ve karmaşık üstel diziler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-periyot-2', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', '$x(n) = \sin(\pi n / 4)$ dizisinin temel periyodu kaçtır?', '{"blanks":1}', '{"blanks":[["8"]]}', '$N = 2\pi / (\pi/4) = 8$.', 1, 'Hafta 3, Ayrık sinüslerde periyodiklik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-periyot-ekok', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', '$x(n) = \cos(\pi n / 5) + \cos(\pi n / 2)$ dizisinin temel periyodu kaçtır?', '{"blanks":1}', '{"blanks":[["20"]]}', '$N_1 = 10$, $N_2 = 4$; ekok(10, 4) = 20.', 2, 'Hafta 3, Ayrık sinüslerde periyodiklik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-periyot-k-2', 'dsp', 'ds-ayrik-diziler', 3, 'num', 'derived', '$x(n) = \cos(0{,}4\pi n)$ dizisinin temel periyodu kaçtır?', '{"blanks":1}', '{"blanks":[["5"]]}', '$N = 2\pi k / 0{,}4\pi = 5k$; k = 1 ile N = 5.', 3, 'Hafta 3, Ayrık sinüslerde periyodiklik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-cift-kisim-2', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'derived', 'x(0) = 1, x(1) = 3 ve başka her yerde 0. Çift kısmın n = −1''deki değeri $x_e(-1)$ kaçtır?', '{"blanks":1}', '{"blanks":[["1.5"]]}', '$x_e(-1) = [x(-1) + x(1)]/2 = (0 + 3)/2 = 1{,}5$.', 2, 'Hafta 3, Çift ve tek diziler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-tek-ornek', 'dsp', 'ds-sinyal-islemleri', 3, 'tf', 'derived', '$x(n) = \sin(0{,}3\pi n)$ tek bir dizidir.', '{}', '{"value":true}', 'Doğru. sin(−θ) = −sin(θ) olduğu için x(−n) = −x(n).', 1, 'Hafta 3, Çift ve tek diziler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-gecikme', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'derived', 'x(n) yalnızca n = 0''da 5 değerini alıyor. y(n) = x(n − 4) hangi n''de 5''tir?', '{"blanks":1}', '{"blanks":[["4"]]}', 'Gecikme: dizi 4 örnek sağa kayar; değer n − 4 = 0, yani n = 4''te görünür.', 1, 'Hafta 3, Kaydırma, ters çevirme ve ölçekleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-ters-konum', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'derived', 'x(n) yalnızca n = 2''de sıfırdan farklı. y(n) = x(−n + 1) hangi n''de sıfırdan farklıdır?', '{"blanks":1}', '{"blanks":[["-1"]]}', '−n + 1 = 2 olmalı: n = −1.', 2, 'Hafta 3, Kaydırma, ters çevirme ve ölçekleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-seyrelt-kayip', 'dsp', 'ds-sinyal-islemleri', 3, 'tf', 'derived', 'y(n) = x(2n) seyreltmesinde x''in tek indisli örnekleri y''de kaybolur.', '{}', '{"value":true}', 'Doğru. y yalnızca x''in çift indisli örneklerini (x(0), x(2), x(4), ...) içerir; bu yüzden seyreltmede bilgi kaybolabilir.', 2, 'Hafta 3, Kaydırma, ters çevirme ve ölçekleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-enerji-2', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'derived', 'Yalnızca n = −1, 0, 1''de 2, 1, −3 değerlerini alan dizinin enerjisi kaçtır?', '{"blanks":1}', '{"blanks":[["14"]]}', 'E = 4 + 1 + 9 = 14.', 1, 'Hafta 3, Sinyal enerjisi ve gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-guc-cos', 'dsp', 'ds-sinyal-islemleri', 3, 'num', 'derived', '$x(n) = 3\cos(\pi n / 2)$ dizisinin gücü kaçtır? (bir periyot: n = 0..3)', '{"blanks":1}', '{"blanks":[["4.5"]]}', 'Bir periyot: 3, 0, −3, 0. P = (9 + 0 + 9 + 0)/4 = 4,5 = A²/2.', 2, 'Hafta 3, Sinyal enerjisi ve gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-enerji-guc', 'dsp', 'ds-sinyal-islemleri', 3, 'tf', 'derived', 'Enerjisi sonlu olan bir dizinin ortalama gücü sıfırdır.', '{}', '{"value":true}', 'Doğru. Sonlu enerji giderek büyüyen bir pencere uzunluğuna bölününce sıfıra gider; bir dizi hem enerji hem güç sinyali olamaz.', 1, 'Hafta 3, Sinyal enerjisi ve gücü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-dogrusal-degil', 'dsp', 'ds-ayrik-sistemler', 3, 'mcq', 'derived', 'Aşağıdaki sistemlerden hangisi doğrusal **değildir**?', '{"choices":["y(n) = x(n)·x(n − 1)","y(n) = x(n) − x(n − 1)","y(n) = n·x(n)","y(n) = x(−n)"]}', '{"index":0}', 'İki örneğin çarpımı homojen değildir: 2x girişi 4 kat çıkış verir. Diğerleri süperpozisyonu sağlar (n·x(n) ve x(−n) doğrusal ama zamanla değişir).', 2, 'Hafta 3, Doğrusallık ve süperpozisyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-statik', 'dsp', 'ds-ayrik-sistemler', 3, 'mcq', 'derived', 'Aşağıdaki sistemlerden hangisi hafızasızdır (statik)?', '{"choices":["y(n) = 5x²(n)","y(n) = x(n − 1)","y(n) = x(n) + x(n + 1)","y(n) = Σ x(k), k ≤ n"]}', '{"index":0}', '5x²(n) yalnızca o anki örneğe bağlıdır. Diğerleri başka anlardaki örnekleri kullanır.', 1, 'Hafta 3, Nedensellik, kararlılık, hafıza, tersinirlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-zaman-degismez', 'dsp', 'ds-ayrik-sistemler', 3, 'tf', 'derived', 'y(n) = x(2n) sistemi zamanla değişmezdir.', '{}', '{"value":false}', 'Yanlış. x(n − n₀) girişi x(2n − n₀) verir, ama y(n − n₀) = x(2n − 2n₀)''dır; ikisi farklıdır.', 2, 'Hafta 3, Nedensellik, kararlılık, hafıza, tersinirlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-kararli', 'dsp', 'ds-ayrik-sistemler', 3, 'tf', 'derived', 'y(n) = x(n) + 0,5x(n − 1) sistemi BIBO kararlıdır.', '{}', '{"value":true}', 'Doğru. |x| ≤ A ise |y| ≤ A + 0,5A = 1,5A: çıkış sınırlıdır.', 2, 'Hafta 3, Nedensellik, kararlılık, hafıza, tersinirlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t3-lti-durtu-2', 'dsp', 'ds-ayrik-sistemler', 3, 'num', 'derived', 'y(n) = 3x(n) + x(n − 2) sisteminin dürtü yanıtını n = 0''dan n = 2''ye kadar yaz.', '{"blanks":1}', '{"blanks":[["[3 0 1]"]]}', 'h(n) = 3δ(n) + δ(n − 2): n = 0''da 3, n = 1''de 0, n = 2''de 1.', 2, 'Hafta 3, LTI sistemler ve dürtü yanıtı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-durtu-kaydir-2', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', 'x(n) yalnızca n = −2''de 7 değerini alıyor. y(n) = x(n) * δ(n − 5) hangi n''de 7''dir?', '{"blanks":1}', '{"blanks":[["3"]]}', 'y(n) = x(n − 5): değer n − 5 = −2, yani n = 3''te görünür.', 1, 'Hafta 4, Konvolüsyon toplamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-ilk-ornek-2', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', 'x(0) = 1, x(1) = −2 ve h(0) = 4, h(1) = 3 (diğer örnekler 0). y(n) = x(n) * h(n) için y(1) ve y(2) nedir?

y(1) = ____ , y(2) = ____', '{"blanks":2}', '{"blanks":[["-5"],["-6"]]}', 'y(1) = x(0)h(1) + x(1)h(0) = 3 − 8 = −5. y(2) = x(1)h(1) = −6.', 2, 'Hafta 4, Konvolüsyon toplamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-kaskat-hesap-2', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', '$h_1(n) = \delta(n) + \delta(n-2)$ ve $h_2(n) = 2\delta(n)$ kaskat bağlı. Eşdeğer dürtü yanıtını n = 0''dan başlayarak dizi olarak yaz.', '{"blanks":1}', '{"blanks":[["[2 0 2]"]]}', '2δ(n) ile konvolüsyon diziyi 2 ile çarpar: 2δ(n) + 2δ(n − 2).', 2, 'Hafta 4, Değişme, birleşme ve dağılma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-paralel-hesap-2', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', '$h_1(n) = \delta(n) + \delta(n-1)$ ve $h_2(n) = \delta(n) - \delta(n-1) + \delta(n-2)$ paralel bağlı. Eşdeğer dürtü yanıtını n = 0''dan başlayarak dizi olarak yaz.', '{"blanks":1}', '{"blanks":[["[2 0 1]"]]}', 'Toplam: (1 + 1)δ(n) + (1 − 1)δ(n − 1) + δ(n − 2).', 2, 'Hafta 4, Değişme, birleşme ve dağılma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-dagilma', 'dsp', 'ds-konvolusyon-temel', 4, 'tf', 'derived', 'x(n) * [h₁(n) + h₂(n)] = x(n) * h₁(n) + x(n) * h₂(n) eşitliği her zaman sağlanır.', '{}', '{"value":true}', 'Doğru. Bu dağılma özelliğidir; paralel bağlı iki sistemin dürtü yanıtları toplanır.', 1, 'Hafta 4, Değişme, birleşme ve dağılma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-geometrik-2', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', '$\displaystyle\sum_{n=0}^{\infty} (1/3)^n$ toplamı kaçtır?', '{"blanks":1}', '{"blanks":[["1.5"]]}', '1/(1 − 1/3) = 3/2 = 1,5.', 1, 'Hafta 4, Doğrudan değerlendirme ve seriler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-ustel-basamak-2', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', '$y(n) = (0{,}2)^n u(n) * u(n)$ için y(1) kaçtır?', '{"blanks":1}', '{"blanks":[["1.2"]]}', 'y(1) = 1 + 0,2 = 1,2.', 2, 'Hafta 4, Doğrudan değerlendirme ve seriler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-ustel-limit-2', 'dsp', 'ds-konvolusyon-temel', 4, 'num', 'derived', '$y(n) = (0{,}9)^n u(n) * u(n)$ dizisi n → ∞ iken hangi değere yaklaşır?', '{"blanks":1}', '{"blanks":[["10"]]}', '1/(1 − 0,9) = 10.', 2, 'Hafta 4, Doğrudan değerlendirme ve seriler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-uzunluk-2', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', '12 örnek uzunluğundaki bir dizi 6 örnek uzunluğundaki bir diziyle konvolüsyona sokuluyor. Çıkış kaç örnek uzunluğundadır?', '{"blanks":1}', '{"blanks":[["17"]]}', '12 + 6 − 1 = 17.', 1, 'Hafta 4, Çıkışın uzunluğu ve konumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-aralik-2', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', 'x(n) yalnızca 0 ≤ n ≤ 9, h(n) yalnızca −3 ≤ n ≤ 2 aralığında sıfırdan farklı. y(n) hangi aralıkta sıfırdan farklı olabilir?

____ ≤ n ≤ ____', '{"blanks":2}', '{"blanks":[["-3"],["11"]]}', '[0 + (−3), 9 + 2] = [−3, 11].', 2, 'Hafta 4, Çıkışın uzunluğu ve konumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-grafik-hesap-2', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', 'x(n): n = 0..2 için 2, 0, 1. h(n): n = 0, 1 için 1, 3. y(n) = x(n) * h(n) için:

y(1) = ____ , y(3) = ____', '{"blanks":2}', '{"blanks":[["6"],["3"]]}', 'y(1) = x(0)h(1) + x(1)h(0) = 6 + 0 = 6. y(3) = x(2)h(1) = 3.', 2, 'Hafta 4, Grafik yöntem', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-kaydirma-2', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', 'x(n) = {1, −1, 2} ve h(n) = {3, 1}, ikisi de n = 0''dan başlıyor. y(n) = x(n) * h(n) dizisini bul.', '{"blanks":1}', '{"blanks":[["[3 -2 5 2]"]]}', 'y(0) = 3; y(1) = 1 − 3 = −2; y(2) = −1 + 6 = 5; y(3) = 2.', 2, 'Hafta 4, Kaydırma kuralı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-polinom-3', 'dsp', 'ds-konvolusyon-hesap', 4, 'num', 'derived', '(2 − z)(1 + z + z²) çarpımının katsayılarını sabit terimden başlayarak dizi olarak yaz.', '{"blanks":1}', '{"blanks":[["[2 1 1 -1]"]]}', 'Konvolüsyon: 2; 2 − 1 = 1; 2 − 1 = 1; −1. Yani 2 + z + z² − z³.', 2, 'Hafta 4, Çarpım tablosu ve polinom çarpımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-zar-10', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', 'İki adil zarın toplamının 10 olma olasılığı kaçtır?', '{"blanks":1}', '{"blanks":[["1/12"]]}', '(4,6), (5,5), (6,4): 3/36 = 1/12.', 2, 'Hafta 4, Olasılık dağılımlarının konvolüsyonu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-zar-2', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', 'İki adil zarın toplamının 2 olma olasılığı kaçtır?', '{"blanks":1}', '{"blanks":[["1/36"]]}', 'Yalnızca (1, 1): 1/36.', 1, 'Hafta 4, Olasılık dağılımlarının konvolüsyonu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-ma-katsayi-2', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', '5 noktalı hareketli ortalamanın dürtü yanıtının her katsayısı kaçtır?', '{"blanks":1}', '{"blanks":[["0.2"]]}', '1/M = 1/5 = 0,2.', 1, 'Hafta 4, Hareketli ortalama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-ma-gecikme-2', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', '5 noktalı nedensel hareketli ortalamanın gecikmesi kaç örnektir?', '{"blanks":1}', '{"blanks":[["2"]]}', '(M − 1)/2 = 2.', 2, 'Hafta 4, Hareketli ortalama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-otokor-0-2', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', 'x(0) = 1, x(1) = −2, x(2) = 2 (başka yerde 0). $r_{xx}(0)$ kaçtır?', '{"blanks":1}', '{"blanks":[["9"]]}', '1 + 4 + 4 = 9: dizinin enerjisi.', 2, 'Hafta 4, Korelasyon ve otokorelasyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-otokor-ustel-2', 'dsp', 'ds-konvolusyon-uygulama', 4, 'num', 'derived', '$x(n) = (0{,}8)^n u(n)$ dizisinin otokorelasyonunun n = 0 değeri kaçtır?', '{"blanks":1}', '{"blanks":[["2.778±0.01"]]}', '1/(1 − 0,64) = 1/0,36 ≈ 2,778.', 3, 'Hafta 4, Korelasyon ve otokorelasyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t4-korelasyon-degisme', 'dsp', 'ds-konvolusyon-uygulama', 4, 'tf', 'derived', 'Korelasyon değişme özelliğini sağlar: her x ve h için $r_{xh}(n) = r_{hx}(n)$.', '{}', '{"value":false}', 'Yanlış. Sıra değişince sonuç ters çevrilir: r_hx(n) = r_xh(−n).', 2, 'Hafta 4, Korelasyon ve otokorelasyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-cember-koordinat-2', 'dsp', 'ds-sinusler', 5, 'num', 'derived', 'Birim çember üzerinde θ = 240° açısındaki noktanın koordinatları nedir?

yatay = ____ , dikey = ____', '{"blanks":2}', '{"blanks":[["-0.5"],["-0.866±0.005"]]}', '240° üçüncü çeyrektedir: cos 240° = −0,5, sin 240° ≈ −0,866.', 1, 'Hafta 5, Çember üzerinde dönen nokta ve sinüs', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-frekans-oku-2', 'dsp', 'ds-sinusler', 5, 'num', 'derived', '$x(t) = 5\cos(20\pi t)$ sinyalinin frekansı kaç Hz''dir?', '{"blanks":1}', '{"blanks":[["10"]]}', '2πf = 20π, f = 10 Hz.', 1, 'Hafta 5, Genlik, frekans, periyot ve faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-periyot-2', 'dsp', 'ds-sinusler', 5, 'num', 'derived', '200 Hz''lik bir sinüsün periyodu kaç milisaniyedir?', '{"blanks":1}', '{"blanks":[["5"]]}', '1/200 s = 5 ms.', 1, 'Hafta 5, Genlik, frekans, periyot ve faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-faz-kayma-2', 'dsp', 'ds-sinusler', 5, 'num', 'derived', '$\sin(2\pi\cdot 4t + \pi)$ eğrisi $\sin(2\pi\cdot 4t)$''ye göre kaç saniye sola kaymıştır?', '{"blanks":1}', '{"blanks":[["0.125"]]}', 'π/(2π·4) = 1/8 = 0,125 s (yarım periyot).', 2, 'Hafta 5, Genlik, frekans, periyot ve faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-omega-2', 'dsp', 'ds-sinusler', 5, 'num', 'derived', '2 Hz''lik bir sinüsün açısal frekansı kaç rad/s''dir?', '{"blanks":1}', '{"blanks":[["12.57±0.05","4*pi"]]}', 'ω = 2π·2 = 4π ≈ 12,57 rad/s.', 1, 'Hafta 5, Genlik, frekans, periyot ve faz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-toplam-genlik-2', 'dsp', 'ds-sinusler', 5, 'num', 'derived', '$5\sin(2\pi t) + 12\cos(2\pi t)$ toplamı tek bir sinüs olarak yazılırsa genliği kaçtır?', '{"blanks":1}', '{"blanks":[["13"]]}', '√(25 + 144) = 13.', 2, 'Hafta 5, Sinüslerin toplamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-toplam-periyot-2', 'dsp', 'ds-sinusler', 5, 'num', 'derived', '4 Hz ve 6 Hz''lik iki sinüsün toplamının periyodu kaç saniyedir?', '{"blanks":1}', '{"blanks":[["0.5"]]}', 'Temel frekans 2 Hz (4 ve 6''nın ikisi de 2''nin katı): periyot 1/2 = 0,5 s.', 2, 'Hafta 5, Sinüslerin toplamı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-kare-harmonik-2', 'dsp', 'ds-fourier-serisi', 5, 'num', 'derived', 'Genliği 1 olan kare dalganın 7. harmoniğinin genliği kaçtır? (3 ondalık)', '{"blanks":1}', '{"blanks":[["0.182±0.003","4/(7*pi)"]]}', '4/(7π) ≈ 0,182.', 2, 'Hafta 5, Fourier serisi ve harmonikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-harmonik-frekans-2', 'dsp', 'ds-fourier-serisi', 5, 'num', 'derived', 'Temel frekansı 100 Hz olan bir kare dalganın 5. harmoniği kaç Hz''dedir?', '{"blanks":1}', '{"blanks":[["500"]]}', '5 · 100 = 500 Hz.', 1, 'Hafta 5, Fourier serisi ve harmonikler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-darbe-sifir-2', 'dsp', 'ds-fourier-serisi', 5, 'num', 'derived', '0,2 s süreli dikdörtgen darbenin spektrumunun ilk sıfırı kaç Hz''dedir?', '{"blanks":1}', '{"blanks":[["5"]]}', '1/0,2 = 5 Hz.', 2, 'Hafta 5, Frekans spektrumu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-sarma-tepe-2', 'dsp', 'ds-fourier-donusumu', 5, 'num', 'derived', '$g(t) = 1 + \cos(2\pi\cdot 2{,}5t)$ çemberin etrafına sarılıyor. f > 0 için kütle merkezinin yatay konumu hangi sarma frekansında tepe yapar?', '{"blanks":1}', '{"blanks":[["2.5"]]}', 'Sinyalin frekansında: 2,5 devir/s.', 1, 'Hafta 5, Sarma makinesi ve kütle merkezi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t5-donusum-tepe-2', 'dsp', 'ds-fourier-donusumu', 5, 'num', 'derived', '$g(t) = \cos(2\pi\cdot 2t)$ sinyali 0 ≤ t ≤ 10 s aralığında gözleniyor. $|\hat g(2)|$ yaklaşık kaçtır?', '{"blanks":1}', '{"blanks":[["5"]]}', 'T/2 = 10/2 = 5.', 2, 'Hafta 5, Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-kosinus-cikis-2', 'dsp', 'ds-frekans-yaniti', 6, 'num', 'derived', '$h(n) = \tfrac{1}{2}[\delta(n) + \delta(n-1)]$ sistemine $\cos(n\pi/2)$ veriliyor. Çıkış kosinüsünün genliği kaçtır? (3 ondalık)', '{"blanks":1}', '{"blanks":[["0.707±0.005"]]}', '|H| = |cos(ω/2)|; ω = π/2''de cos(π/4) ≈ 0,707.', 2, 'Hafta 6, Frekans yanıtı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-db-20-2', 'dsp', 'ds-frekans-yaniti', 6, 'num', 'derived', 'Bir filtrenin büyüklüğü bir frekansta 40 dB''dir. |H| kaçtır?', '{"blanks":1}', '{"blanks":[["100"]]}', '40/20 = 2, |H| = 10² = 100.', 1, 'Hafta 6, Desibel ölçeği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-db-hesap-2', 'dsp', 'ds-frekans-yaniti', 6, 'num', 'derived', '|H| = 1000 olan bir frekansta büyüklük kaç dB''dir?', '{"blanks":1}', '{"blanks":[["60"]]}', '20 log₁₀(1000) = 60 dB.', 2, 'Hafta 6, Desibel ölçeği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-grup-hesap-2', 'dsp', 'ds-frekans-yaniti', 6, 'num', 'derived', 'Fazı φ(ω) = −5ω olan bir sistemin grup gecikmesi kaç örnektir?', '{"blanks":1}', '{"blanks":[["5"]]}', 'τ = −dφ/dω = 5.', 1, 'Hafta 6, Faz ve grup gecikmesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-ustel-buyukluk-2', 'dsp', 'ds-frekans-yaniti', 6, 'num', 'derived', '$h(n) = (0{,}9)^n u(n)$ sisteminin frekans yanıtının büyüklüğü ω = 0''da kaçtır?', '{"blanks":1}', '{"blanks":[["10"]]}', '1/(1 − 0,9) = 10.', 2, 'Hafta 6, Frekans yanıtının periyodikliği ve simetrisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-dl-gecikme-2', 'dsp', 'ds-filtreler', 6, 'num', 'derived', '7 örnek uzunluğunda, n = 0..6''da tanımlı, simetrik bir dürtü yanıtının grup gecikmesi kaç örnektir?', '{"blanks":1}', '{"blanks":[["3"]]}', 'Simetri merkezi (N − 1)/2 = 3.', 2, 'Hafta 6, Doğrusal fazlı filtreler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-kaskat-db-2', 'dsp', 'ds-filtreler', 6, 'num', 'derived', 'Bir frekansta birinci filtrenin büyüklüğü 3 dB, ikincininki −10 dB. Kaskat bağlantının büyüklüğü kaç dB''dir?', '{"blanks":1}', '{"blanks":[["-7"]]}', '3 + (−10) = −7 dB.', 1, 'Hafta 6, Kaskat ve paralel bağlantının frekans yanıtı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-dtft-ustel-2', 'dsp', 'ds-dtft', 6, 'num', 'derived', '$x(n) = (0{,}25)^n u(n)$ dizisinin DTFT''sinin ω = 0''daki değeri kaçtır?', '{"blanks":1}', '{"blanks":[["4/3"]]}', '1/(1 − 0,25) = 4/3.', 2, 'Hafta 6, Ayrık zamanlı Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-dtft-hesap-2', 'dsp', 'ds-dtft', 6, 'num', 'derived', '$x(n) = 2\delta(n) + \delta(n-1)$ dizisinin DTFT''si ω = 0''da ve ω = π''de kaçtır?

X(e^j0) = ____ , X(e^jπ) = ____', '{"blanks":2}', '{"blanks":[["3"],["1"]]}', 'X = 2 + e^{−jω}: ω = 0''da 3, ω = π''de 1.', 2, 'Hafta 6, Ayrık zamanlı Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-dikdortgen-2', 'dsp', 'ds-dtft', 6, 'num', 'derived', 'n = 0..3 için 1 olan 4 örneklik dikdörtgen dizinin DTFT''sinin ω = 0''daki değeri ve ilk sıfırı (rad) nedir?

X(e^j0) = ____ , ilk sıfır ω = ____', '{"blanks":2}', '{"blanks":[["4"],["1.571±0.005","pi/2"]]}', 'X(e^j0) = 4; ilk sıfır 2π/4 = π/2 ≈ 1,571.', 2, 'Hafta 6, Ayrık zamanlı Fourier dönüşümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-parseval-2', 'dsp', 'ds-dtft', 6, 'num', 'derived', 'x(n): n = 0, 1 için 3, −1. $\frac{1}{2\pi}\int_{-\pi}^{\pi} |X(e^{j\omega})|^2\,d\omega$ kaçtır?', '{"blanks":1}', '{"blanks":[["10"]]}', 'Parseval: 9 + 1 = 10.', 2, 'Hafta 6, Parseval teoremi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t6-ters-hesap-2', 'dsp', 'ds-dtft', 6, 'num', 'derived', '$h(n) = \delta(n) - 0{,}2\,\delta(n-1)$ sisteminin ters sistemi g(n) için g(1) kaçtır?', '{"blanks":1}', '{"blanks":[["0.2"]]}', 'g(n) = (0,2)ⁿu(n); g(1) = 0,2.', 3, 'Hafta 6, Ters sistem', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-dfs-kosinus-2', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', '$x(n) = A\cos(0{,}4\pi n) + B\cos(0{,}25\pi n)$ dizisinin periyodu N kaçtır? $\tilde X(k) = \sum_{n=0}^{N-1} \tilde x(n)\,e^{-j2\pi kn/N}$ için $\tilde X(8)$, A''nın kaç katıdır?

N = ____ , X̃(8) = ____ · A', '{"blanks":2}', '{"blanks":[["40"],["20"]]}', 'Periyotlar 5 ve 8, ortak periyot 40. 0,4π = 2π·8/40 olduğundan A''lı terim k = 8''e düşer: X̃(8) = N·A/2 = 20A.', 3, 'Hafta 7, Ayrık Fourier serisi (DFS)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-dft-delta-2', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', '$x(n) = \delta(n) - 2\delta(n-3)$ dizisinin 6 noktalı DFT''sinde X(0) ve X(1) kaçtır?

X(0) = ____ , X(1) = ____', '{"blanks":2}', '{"blanks":[["-1"],["3"]]}', 'X(k) = 1 − 2e^{−j2π·3k/6} = 1 − 2(−1)^k. X(0) = −1, X(1) = 3.', 2, 'Hafta 7, DFT hesabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-dft-4nokta-2', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', 'n = 0..3 için x(n) = 3, 0, 1, 2 dizisinin 4 noktalı DFT''sinde X(0) ve X(2) kaçtır?

X(0) = ____ , X(2) = ____', '{"blanks":2}', '{"blanks":[["6"],["2"]]}', 'X(0) = 6. X(2) = 3 − 0 + 1 − 2 = 2.', 2, 'Hafta 7, DFT hesabı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-ters-dft-2', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', '5 noktalı X(k), k = 0 için 7, k = 1..4 için 2''dir. Ters DFT''nin x(0) ve x(1) değerleri nedir?

x(0) = ____ , x(1) = ____', '{"blanks":2}', '{"blanks":[["3"],["1"]]}', 'X(k) = 2 + 5δ(k). Ters DFT: 2δ(n) + 5/5 = 2δ(n) + 1. x(0) = 3, x(1) = 1.', 3, 'Hafta 7, Ters DFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-k-frekans-2', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', 'fs = 10000 Hz, N = 500 noktalı DFT''de k = 40 kaç Hz''e karşılık gelir?', '{"blanks":1}', '{"blanks":[["800"]]}', 'f_k = 40·10000/500 = 800 Hz.', 2, 'Hafta 7, DFT''de frekans ekseni ve çözünürlük', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-cozunurluk-2', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', 'fs = 48000 Hz, N = 1024 noktalı DFT''de frekans aralığı kaç Hz''dir? (3 ondalık)', '{"blanks":1}', '{"blanks":[["46.875±0.01"]]}', 'Δf = 48000/1024 = 46,875 Hz.', 1, 'Hafta 7, DFT''de frekans ekseni ve çözünürlük', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-sifir-ornek-2', 'dsp', 'ds-dft-temel', 7, 'num', 'derived', '$x(n) = \delta(n) - \delta(n-1)$ dizisinin 4 noktalı DFT''sinde |X(1)| ve X(2) kaçtır? (3 ondalık)

|X(1)| = ____ , X(2) = ____', '{"blanks":2}', '{"blanks":[["1.414±0.005","sqrt(2)"],["2"]]}', 'X(k) = 1 − (−j)^k. X(1) = 1 + j, |X(1)| = √2. X(2) = 1 − (−1) = 2.', 2, 'Hafta 7, Sıfır doldurma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-esl-simetri-2', 'dsp', 'ds-dft-ozellikleri', 7, 'num', 'derived', 'Gerçel bir dizinin 10 noktalı DFT''sinde X(3) = −1 + 4j. X(7)''nin gerçel ve sanal kısımları nedir?

Re X(7) = ____ , Im X(7) = ____', '{"blanks":2}', '{"blanks":[["-1"],["-4"]]}', 'X(7) = X(10 − 3) = X*(3) = −1 − 4j.', 2, 'Hafta 7, DFT''nin eşlenik simetrisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-modulo-2', 'dsp', 'ds-dft-ozellikleri', 7, 'num', 'derived', '$((-5))_6$ ve $((14))_6$ kaçtır?

((−5))₆ = ____ , ((14))₆ = ____', '{"blanks":2}', '{"blanks":[["1"],["2"]]}', '−5 = −1·6 + 1 → 1. 14 = 2·6 + 2 → 2.', 1, 'Hafta 7, Dairesel kaydırma ve modülo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-dairesel-kaydir-2', 'dsp', 'ds-dft-ozellikleri', 7, 'num', 'derived', 'x(n) = [3 0 4 1] (n = 0..3). $y(n) = x((n-3))_4$ dizisini yaz.', '{"blanks":1}', '{"blanks":[["[0 4 1 3]"]]}', 'y(0) = x(1) = 0, y(1) = x(2) = 4, y(2) = x(3) = 1, y(3) = x(0) = 3.', 2, 'Hafta 7, Dairesel kaydırma ve modülo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-uzunluk-n-2', 'dsp', 'ds-dairesel-konvolusyon', 7, 'num', 'derived', 'x(n) 20, h(n) 7 örnekliktir. Dairesel konvolüsyonun doğrusala eşit olması için en küçük N kaçtır?', '{"blanks":1}', '{"blanks":[["26"]]}', '20 + 7 − 1 = 26.', 1, 'Hafta 7, Dairesel ve doğrusal konvolüsyonun ilişkisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-ortusme-hesap-2', 'dsp', 'ds-dairesel-konvolusyon', 7, 'num', 'derived', 'Doğrusal konvolüsyon n = 0..6 için y(n) = [1 3 0 2 2 1 4]. Aynı dizilerin 4 noktalı dairesel konvolüsyonunu yaz.', '{"blanks":1}', '{"blanks":[["[3 4 4 2]"]]}', 'y_c(n) = y(n) + y(n + 4): 1 + 2 = 3, 3 + 1 = 4, 0 + 4 = 4, 2.', 2, 'Hafta 7, Dairesel ve doğrusal konvolüsyonun ilişkisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-oa-uzunluk-2', 'dsp', 'ds-dairesel-konvolusyon', 7, 'num', 'derived', 'Örtüşme-eklemede L = 8, M = 25. Çıkış blok uzunluğu N ve örtüşen örnek sayısı kaçtır?

N = ____ , örtüşen = ____', '{"blanks":2}', '{"blanks":[["32"],["7"]]}', 'N = 8 + 25 − 1 = 32, örtüşme L − 1 = 7.', 2, 'Hafta 7, Örtüşme-ekleme yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t7-os-atilan-2', 'dsp', 'ds-dairesel-konvolusyon', 7, 'num', 'derived', 'Örtüşme-kaydetmede L = 6, N = 32. Her bloktan kaç örnek atılır, kaç örnek kaydedilir?

atılan = ____ , kaydedilen = ____', '{"blanks":2}', '{"blanks":[["5"],["27"]]}', 'Atılan L − 1 = 5, kaydedilen N − L + 1 = 27.', 2, 'Hafta 7, Örtüşme-kaydetme yöntemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-dft-carpma-2', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', '512 noktalı DFT doğrudan hesaplanırsa kaç karmaşık çarpma gerekir?', '{"blanks":1}', '{"blanks":[["262144"]]}', '512² = 262144.', 1, 'Hafta 8, DFT ve FFT''nin işlem yükü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-fft-carpma-2', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', '512 noktalı radix-2 FFT kaç karmaşık çarpma gerektirir?', '{"blanks":1}', '{"blanks":[["2304"]]}', '(512/2)·9 = 2304.', 2, 'Hafta 8, DFT ve FFT''nin işlem yükü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-sure-2', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', 'Bir karmaşık çarpma 0,5 µs sürüyor. 4096 noktalı DFT doğrudan kaç saniyede, radix-2 FFT ile kaç milisaniyede hesaplanır? (2 ondalık)

doğrudan = ____ s , FFT = ____ ms', '{"blanks":2}', '{"blanks":[["8.39±0.01"],["12.29±0.01"]]}', '4096²·0,5 µs ≈ 8,39 s. (4096/2)·12·0,5 µs = 12 288 µs ≈ 12,29 ms.', 2, 'Hafta 8, DFT ve FFT''nin işlem yükü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-dit-ikinci-yari-2', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', '8 noktalı DIT FFT''de G(0) = 4, H(0) = −3. X(0) ve X(4) kaçtır?

X(0) = ____ , X(4) = ____', '{"blanks":2}', '{"blanks":[["1"],["7"]]}', 'X(0) = 4 + (−3) = 1, X(4) = 4 − (−3) = 7.', 2, 'Hafta 8, Zamanda seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-dit-g-dizi-2', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', 'n = 0..7 için x(n) = 2, 7, 1, 8, 2, 8, 1, 8. g(n) = x(2n) dizisini yaz.', '{"blanks":1}', '{"blanks":[["[2 1 2 1]"]]}', 'x(0), x(2), x(4), x(6) = 2, 1, 2, 1.', 1, 'Hafta 8, Zamanda seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-kelebek-hesap-2', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', 'Kelebekte A = a + W·b, B = a − W·b. a = 4, b = 3, W = $W_8^4$ ise A ve B kaçtır?

A = ____ , B = ____', '{"blanks":2}', '{"blanks":[["1"],["7"]]}', 'W₈⁴ = −1. A = 4 − 3 = 1, B = 4 + 3 = 7.', 2, 'Hafta 8, FFT kelebeği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-iki-nokta-2', 'dsp', 'ds-fft-temel', 8, 'num', 'derived', 'q(0) = −2, q(1) = 5 dizisinin 2 noktalı DFT''si nedir?

Q(0) = ____ , Q(1) = ____', '{"blanks":2}', '{"blanks":[["3"],["-7"]]}', 'Q(0) = −2 + 5 = 3, Q(1) = −2 − 5 = −7.', 1, 'Hafta 8, FFT kelebeği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-asama-sayisi-2', 'dsp', 'ds-fft-akis', 8, 'num', 'derived', '256 noktalı radix-2 FFT''de kaç aşama ve aşama başına kaç kelebek vardır?

aşama = ____ , kelebek = ____', '{"blanks":2}', '{"blanks":[["8"],["128"]]}', 'log₂256 = 8, N/2 = 128.', 1, 'Hafta 8, FFT aşamaları ve işlem sayıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-bit-ters-2', 'dsp', 'ds-fft-akis', 8, 'num', 'derived', '8 noktalı FFT''de n = 5 ve n = 6 indislerinin bit ters karşılıkları nedir?

5 → ____ , 6 → ____', '{"blanks":2}', '{"blanks":[["5"],["3"]]}', '5 = 101 → 101 = 5 (simetrik). 6 = 110 → 011 = 3.', 2, 'Hafta 8, Bit ters sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-dif-cift-2', 'dsp', 'ds-fft-akis', 8, 'num', 'derived', 'n = 0..7 için x(n) = 1, 4, 2, 0, 3, 1, 2, 5. a(n) = x(n) + x(n + 4) dizisini yaz.', '{"blanks":1}', '{"blanks":[["[4 5 4 5]"]]}', '1 + 3 = 4, 4 + 1 = 5, 2 + 2 = 4, 0 + 5 = 5.', 2, 'Hafta 8, Frekansta seyreltmeli FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-karma-indis-2', 'dsp', 'ds-fft-uygulama', 8, 'num', 'derived', 'N = 12, N₁ = 3, N₂ = 4. $n = N_2 n_1 + n_2$ dizilişinde x(7) hangi n₁ ve n₂''ye düşer?

n₁ = ____ , n₂ = ____', '{"blanks":2}', '{"blanks":[["1"],["3"]]}', '7 = 4·1 + 3.', 2, 'Hafta 8, Karma N için FFT', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-fft-konv-2', 'dsp', 'ds-fft-uygulama', 8, 'num', 'derived', '100 ve 60 örneklik iki dizinin doğrusal konvolüsyonu için en küçük radix-2 FFT uzunluğu kaçtır?', '{"blanks":1}', '{"blanks":[["256"]]}', '100 + 60 − 1 = 159 → 256.', 2, 'Hafta 8, FFT''nin kullanımı: spektrum ve hızlı konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ds-t8-frekans-ekseni-2', 'dsp', 'ds-fft-uygulama', 8, 'num', 'derived', 'fs = 2000 Hz, N = 500 noktalı FFT''de tepe k = 30''da. Frekans kaç Hz''dir?', '{"blanks":1}', '{"blanks":[["120"]]}', '30·2000/500 = 120 Hz.', 2, 'Hafta 8, FFT''nin kullanımı: spektrum ve hızlı konvolüsyon', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-dsp-giris', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-dsp-avantaj';
UPDATE questions SET kavram = 'u1-dsp-giris', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-dsp-genis-bant';
UPDATE questions SET kavram = 'u1-dsp-giris', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-dsp-programlanabilir';
UPDATE questions SET kavram = 'u1-adc-niceleme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-adc-seviye';
UPDATE questions SET kavram = 'u1-adc-niceleme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-adc-aralik';
UPDATE questions SET kavram = 'u1-adc-niceleme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-adc-adim';
UPDATE questions SET kavram = 'u1-adc-niceleme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-adc-bit-gerekli';
UPDATE questions SET kavram = 'u1-adc-niceleme', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-ayrik-tanim';
UPDATE questions SET kavram = 'u1-sinyal-eksen', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-eksen-bagimli';
UPDATE questions SET kavram = 'u1-sinyal-eksen', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-alan-ornek';
UPDATE questions SET kavram = 'u1-sinyal-eksen', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-alan-uzaysal';
UPDATE questions SET kavram = 'u1-ortalama-sapma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-ortalama-hesap';
UPDATE questions SET kavram = 'u1-ortalama-sapma', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-n-eksi-1';
UPDATE questions SET kavram = 'u1-ortalama-sapma', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-varyans';
UPDATE questions SET kavram = 'u1-ortalama-sapma', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-dc-ac';
UPDATE questions SET kavram = 'u1-ortalama-sapma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-varyans-toplam';
UPDATE questions SET kavram = 'u1-rms', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-rms-dc';
UPDATE questions SET kavram = 'u1-rms', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-sinus-vrms';
UPDATE questions SET kavram = 'u1-rms', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-vpp-kare';
UPDATE questions SET kavram = 'u1-rms', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-vpp-gurultu';
UPDATE questions SET kavram = 'u1-rms', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-rms-sigma-esit';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-hist-ortalama';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-hist-toplam';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-pmf-olasilik';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-pdf-alan';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-binning';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-kutu-alt-sinir';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-kutu-yogunluk';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-kutu-sayisi';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-hist-puruz';
UPDATE questions SET kavram = 'u1-normal-dagilim', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-gauss-68';
UPDATE questions SET kavram = 'u1-normal-dagilim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-gauss-uc-sigma';
UPDATE questions SET kavram = 'u1-normal-dagilim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-gauss-tepe';
UPDATE questions SET kavram = 'u1-normal-dagilim', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-merkezi-limit';
UPDATE questions SET kavram = 'u1-normal-dagilim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h1-gauss-sigma-tepe';
UPDATE questions SET kavram = 'u1-gurultu-uretimi', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-rnd-sigma';
UPDATE questions SET kavram = 'u1-gurultu-uretimi', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-rnd-12';
UPDATE questions SET kavram = 'u1-gurultu-uretimi', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-rnd-iki';
UPDATE questions SET kavram = 'u1-kesinlik-dogruluk', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-kesinlik';
UPDATE questions SET kavram = 'u1-kesinlik-dogruluk', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-ortalama-iyilestirir';
UPDATE questions SET kavram = 'u1-kesinlik-dogruluk', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h1-kalibrasyon';
UPDATE questions SET kavram = 'u2-matlab-temel', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-noktali-virgul';
UPDATE questions SET kavram = 'u2-matlab-temel', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-ans';
UPDATE questions SET kavram = 'u2-matlab-temel', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-yorum';
UPDATE questions SET kavram = 'u2-matlab-temel', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-nan';
UPDATE questions SET kavram = 'u2-matlab-temel', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-clear';
UPDATE questions SET kavram = 'u2-vektor-olusturma', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-aralik';
UPDATE questions SET kavram = 'u2-vektor-olusturma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-aralik-uzunluk';
UPDATE questions SET kavram = 'u2-vektor-olusturma', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-linspace';
UPDATE questions SET kavram = 'u2-vektor-olusturma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-geri-sayma';
UPDATE questions SET kavram = 'u2-vektor-olusturma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-aralik-son';
UPDATE questions SET kavram = 'u2-indeksleme', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-indeks-end';
UPDATE questions SET kavram = 'u2-indeksleme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-indeks-adim';
UPDATE questions SET kavram = 'u2-indeksleme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-indeks-sifir';
UPDATE questions SET kavram = 'u2-matris-indeks', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-matris-satir';
UPDATE questions SET kavram = 'u2-matris-indeks', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-dogrusal-indeks';
UPDATE questions SET kavram = 'u2-matris-indeks', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-find';
UPDATE questions SET kavram = 'u2-matris-indeks', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-dogrusal-formul';
UPDATE questions SET kavram = 'u2-eleman-islem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-eleman-carpim';
UPDATE questions SET kavram = 'u2-eleman-islem', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-matris-carpim';
UPDATE questions SET kavram = 'u2-eleman-islem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-kare-hata';
UPDATE questions SET kavram = 'u2-eleman-islem', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-us';
UPDATE questions SET kavram = 'u2-eleman-islem', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-det';
UPDATE questions SET kavram = 'u2-mantiksal', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-esit-degil';
UPDATE questions SET kavram = 'u2-mantiksal', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-mantiksal-sayma';
UPDATE questions SET kavram = 'u2-mantiksal', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-mantiksal-secim';
UPDATE questions SET kavram = 'u2-mantiksal', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-kisa-devre';
UPDATE questions SET kavram = 'u2-fonksiyon-tanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-fonksiyon-cikis';
UPDATE questions SET kavram = 'u2-fonksiyon-tanim', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-dosya-adi';
UPDATE questions SET kavram = 'u2-fonksiyon-tanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-yerel-degisken';
UPDATE questions SET kavram = 'u2-fonksiyon-tanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-anonim';
UPDATE questions SET kavram = 'u2-rastgele-uretim', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-rand-boyut';
UPDATE questions SET kavram = 'u2-rastgele-uretim', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-randi';
UPDATE questions SET kavram = 'u2-rastgele-uretim', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-randperm';
UPDATE questions SET kavram = 'u2-rastgele-uretim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-rand-aralik';
UPDATE questions SET kavram = 'u2-birlestirme', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-cat-boyut';
UPDATE questions SET kavram = 'u2-birlestirme', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-vertcat';
UPDATE questions SET kavram = 'u2-birlestirme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-yatay-kural';
UPDATE questions SET kavram = 'u2-istatistik-boyut', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-mean-boyut';
UPDATE questions SET kavram = 'u2-istatistik-boyut', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-mean-all';
UPDATE questions SET kavram = 'u2-istatistik-boyut', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-median';
UPDATE questions SET kavram = 'u2-istatistik-boyut', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-std-agirlik';
UPDATE questions SET kavram = 'u2-istatistik-boyut', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h2-corrcoef';
UPDATE questions SET kavram = 'u2-istatistik-boyut', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h2-corrcoef-hesap';
UPDATE questions SET kavram = 'u3-dizi-gosterim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-dizi-okuma';
UPDATE questions SET kavram = 'u3-dizi-gosterim', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-tanimsiz';
UPDATE questions SET kavram = 'u3-temel-diziler', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-durtu-deger';
UPDATE questions SET kavram = 'u3-temel-diziler', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-basamak-fark';
UPDATE questions SET kavram = 'u3-temel-diziler', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-rampa';
UPDATE questions SET kavram = 'u3-temel-diziler', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-basamak-toplam';
UPDATE questions SET kavram = 'u3-ustel-sinuzoidal', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-ustel-sonum';
UPDATE questions SET kavram = 'u3-ustel-sinuzoidal', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-karmasik-genlik';
UPDATE questions SET kavram = 'u3-periyodiklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-periyot';
UPDATE questions SET kavram = 'u3-periyodiklik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-periyot-toplam';
UPDATE questions SET kavram = 'u3-periyodiklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-periyodik-degil';
UPDATE questions SET kavram = 'u3-periyodiklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-periyot-k';
UPDATE questions SET kavram = 'u3-simetri', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-cift-kisim';
UPDATE questions SET kavram = 'u3-simetri', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-tek-sifir';
UPDATE questions SET kavram = 'u3-simetri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-cift-ornek';
UPDATE questions SET kavram = 'u3-sinyal-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-kaydirma';
UPDATE questions SET kavram = 'u3-sinyal-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-ters-kaydir';
UPDATE questions SET kavram = 'u3-sinyal-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-seyreltme';
UPDATE questions SET kavram = 'u3-sinyal-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-ara-deger';
UPDATE questions SET kavram = 'u3-sinyal-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-sira';
UPDATE questions SET kavram = 'u3-enerji-guc', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-enerji';
UPDATE questions SET kavram = 'u3-enerji-guc', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-enerji-ustel';
UPDATE questions SET kavram = 'u3-enerji-guc', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-guc';
UPDATE questions SET kavram = 'u3-enerji-guc', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-guc-basamak';
UPDATE questions SET kavram = 'u3-durtu-ayristirma', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-durtu-toplam';
UPDATE questions SET kavram = 'u3-durtu-ayristirma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-eleme';
UPDATE questions SET kavram = 'u3-dogrusallik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-dogrusal';
UPDATE questions SET kavram = 'u3-dogrusallik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-sifir-giris';
UPDATE questions SET kavram = 'u3-dogrusallik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-superpozisyon';
UPDATE questions SET kavram = 'u3-sistem-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-nedensel';
UPDATE questions SET kavram = 'u3-sistem-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-zamanla-degisen';
UPDATE questions SET kavram = 'u3-sistem-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-kararlilik';
UPDATE questions SET kavram = 'u3-sistem-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-tersinir';
UPDATE questions SET kavram = 'u3-sistem-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-hafizasiz';
UPDATE questions SET kavram = 'u3-sistem-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-bibo';
UPDATE questions SET kavram = 'u3-lti', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h3-lti-durtu';
UPDATE questions SET kavram = 'u3-lti', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-kaskat';
UPDATE questions SET kavram = 'u3-lti', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h3-lti-tanim';
UPDATE questions SET kavram = 'u4-konvolusyon-toplam', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-tanim';
UPDATE questions SET kavram = 'u4-konvolusyon-toplam', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-durtu-birim';
UPDATE questions SET kavram = 'u4-konvolusyon-toplam', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-durtu-kaydir';
UPDATE questions SET kavram = 'u4-konvolusyon-toplam', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-ilk-ornek';
UPDATE questions SET kavram = 'u4-konvolusyon-toplam', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-lti-tek';
UPDATE questions SET kavram = 'u4-konvolusyon-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-degisme';
UPDATE questions SET kavram = 'u4-konvolusyon-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-kaskat';
UPDATE questions SET kavram = 'u4-konvolusyon-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-paralel';
UPDATE questions SET kavram = 'u4-konvolusyon-ozellik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-kaskat-hesap';
UPDATE questions SET kavram = 'u4-konvolusyon-ozellik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-paralel-hesap';
UPDATE questions SET kavram = 'u4-dogrudan-hesap', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-geometrik';
UPDATE questions SET kavram = 'u4-dogrudan-hesap', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-geo-sonlu';
UPDATE questions SET kavram = 'u4-dogrudan-hesap', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-ustel-basamak';
UPDATE questions SET kavram = 'u4-dogrudan-hesap', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-ustel-limit';
UPDATE questions SET kavram = 'u4-dogrudan-hesap', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-iki-ustel';
UPDATE questions SET kavram = 'u4-dogrudan-hesap', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-seri-n';
UPDATE questions SET kavram = 'u4-konvolusyon-uzunluk', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-uzunluk';
UPDATE questions SET kavram = 'u4-konvolusyon-uzunluk', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-aralik';
UPDATE questions SET kavram = 'u4-konvolusyon-uzunluk', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-ilk-son';
UPDATE questions SET kavram = 'u4-konvolusyon-uzunluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-uzunluk-tf';
UPDATE questions SET kavram = 'u4-konvolusyon-uzunluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-sonsuz';
UPDATE questions SET kavram = 'u4-grafik-yontem', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-grafik-adim';
UPDATE questions SET kavram = 'u4-grafik-yontem', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-grafik-yon';
UPDATE questions SET kavram = 'u4-grafik-yontem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-grafik-hesap';
UPDATE questions SET kavram = 'u4-grafik-yontem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-grafik-negatif';
UPDATE questions SET kavram = 'u4-grafik-yontem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-tum-dizi';
UPDATE questions SET kavram = 'u4-kaydirma-kurali', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-kaydirma-tum';
UPDATE questions SET kavram = 'u4-kaydirma-kurali', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-kaydirma-ters';
UPDATE questions SET kavram = 'u4-kaydirma-kurali', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-kaydirma-sayi';
UPDATE questions SET kavram = 'u4-polinom-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-polinom';
UPDATE questions SET kavram = 'u4-polinom-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-polinom-2';
UPDATE questions SET kavram = 'u4-polinom-carpim', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-tablo-kosegen';
UPDATE questions SET kavram = 'u4-polinom-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-matlab-conv';
UPDATE questions SET kavram = 'u4-olasilik-konvolusyon', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-zar-7';
UPDATE questions SET kavram = 'u4-olasilik-konvolusyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-zar-4';
UPDATE questions SET kavram = 'u4-olasilik-konvolusyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-zar-sayi';
UPDATE questions SET kavram = 'u4-olasilik-konvolusyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-zar-uc';
UPDATE questions SET kavram = 'u4-olasilik-konvolusyon', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-hileli';
UPDATE questions SET kavram = 'u4-olasilik-konvolusyon', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-pmf-tf';
UPDATE questions SET kavram = 'u4-hareketli-ortalama', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-ma-katsayi';
UPDATE questions SET kavram = 'u4-hareketli-ortalama', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-ma-cikis';
UPDATE questions SET kavram = 'u4-hareketli-ortalama', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-ma-sabit';
UPDATE questions SET kavram = 'u4-hareketli-ortalama', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-ma-gecikme';
UPDATE questions SET kavram = 'u4-hareketli-ortalama', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-ma-buyuk';
UPDATE questions SET kavram = 'u4-korelasyon', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-korelasyon-fark';
UPDATE questions SET kavram = 'u4-korelasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-otokor-0';
UPDATE questions SET kavram = 'u4-korelasyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h4-otokor-1';
UPDATE questions SET kavram = 'u4-korelasyon', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-otokor-simetri';
UPDATE questions SET kavram = 'u4-korelasyon', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h4-otokor-ustel';
UPDATE questions SET kavram = 'u5-sinus-cember', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-cember-koordinat';
UPDATE questions SET kavram = 'u5-sinus-cember', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-sinus-isdusum';
UPDATE questions SET kavram = 'u5-sinus-cember', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-cos-kayma';
UPDATE questions SET kavram = 'u5-sinus-cember', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-tur';
UPDATE questions SET kavram = 'u5-sinus-parametre', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-frekans-oku';
UPDATE questions SET kavram = 'u5-sinus-parametre', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-periyot';
UPDATE questions SET kavram = 'u5-sinus-parametre', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-faz-kayma';
UPDATE questions SET kavram = 'u5-sinus-parametre', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-genlik';
UPDATE questions SET kavram = 'u5-sinus-parametre', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-omega';
UPDATE questions SET kavram = 'u5-sinus-parametre', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-faz-isaret';
UPDATE questions SET kavram = 'u5-sinus-toplam', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-ayni-frekans';
UPDATE questions SET kavram = 'u5-sinus-toplam', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-toplam-genlik';
UPDATE questions SET kavram = 'u5-sinus-toplam', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-yok-etme';
UPDATE questions SET kavram = 'u5-sinus-toplam', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-farkli-frekans';
UPDATE questions SET kavram = 'u5-sinus-toplam', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-toplam-periyot';
UPDATE questions SET kavram = 'u5-fourier-serisi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-kare-harmonik';
UPDATE questions SET kavram = 'u5-fourier-serisi', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-kare-cift';
UPDATE questions SET kavram = 'u5-fourier-serisi', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-ucgen-azalma';
UPDATE questions SET kavram = 'u5-fourier-serisi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-gibbs';
UPDATE questions SET kavram = 'u5-fourier-serisi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-harmonik-frekans';
UPDATE questions SET kavram = 'u5-fourier-serisi', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-testere';
UPDATE questions SET kavram = 'u5-fourier-serisi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-ucgen-katsayi';
UPDATE questions SET kavram = 'u5-spektrum', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-spektrum-surekli';
UPDATE questions SET kavram = 'u5-spektrum', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-darbe-sifir';
UPDATE questions SET kavram = 'u5-spektrum', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-darbe-genis';
UPDATE questions SET kavram = 'u5-spektrum', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-ters-donusum';
UPDATE questions SET kavram = 'u5-spektrum', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-darbe-x0';
UPDATE questions SET kavram = 'u5-sarma-kutle-merkezi', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-sarma-esit';
UPDATE questions SET kavram = 'u5-sarma-kutle-merkezi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-sarma-tepe';
UPDATE questions SET kavram = 'u5-sarma-kutle-merkezi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-kutle-deger';
UPDATE questions SET kavram = 'u5-sarma-kutle-merkezi', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-kaydirma-tf';
UPDATE questions SET kavram = 'u5-euler-formulu', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-euler';
UPDATE questions SET kavram = 'u5-euler-formulu', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-eksi-isaret';
UPDATE questions SET kavram = 'u5-euler-formulu', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-euler-buyukluk';
UPDATE questions SET kavram = 'u5-fourier-donusum', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h5-donusum-tepe';
UPDATE questions SET kavram = 'u5-fourier-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-sure-tepe';
UPDATE questions SET kavram = 'u5-fourier-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-bolme';
UPDATE questions SET kavram = 'u5-fourier-donusum', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-sinirlar';
UPDATE questions SET kavram = 'u5-fourier-dogrusallik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-dogrusallik';
UPDATE questions SET kavram = 'u5-fourier-dogrusallik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h5-ayristirma';
UPDATE questions SET kavram = 'u6-ozfonksiyon', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-ozfonksiyon';
UPDATE questions SET kavram = 'u6-ozfonksiyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-yeni-frekans';
UPDATE questions SET kavram = 'u6-ozfonksiyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-ozdeger';
UPDATE questions SET kavram = 'u6-frekans-yaniti', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-frekans-tanim';
UPDATE questions SET kavram = 'u6-frekans-yaniti', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-kosinus-cikis';
UPDATE questions SET kavram = 'u6-db-olcek', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-db-20';
UPDATE questions SET kavram = 'u6-db-olcek', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-db-tablo';
UPDATE questions SET kavram = 'u6-db-olcek', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-db-hesap';
UPDATE questions SET kavram = 'u6-grup-gecikmesi', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-grup-tanim';
UPDATE questions SET kavram = 'u6-grup-gecikmesi', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-grup-hesap';
UPDATE questions SET kavram = 'u6-frekans-simetri', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-periyot';
UPDATE questions SET kavram = 'u6-frekans-simetri', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-simetri';
UPDATE questions SET kavram = 'u6-frekans-simetri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-ustel-buyukluk';
UPDATE questions SET kavram = 'u6-frekans-simetri', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-en-yuksek';
UPDATE questions SET kavram = 'u6-dogrusal-faz', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-dogrusal-faz';
UPDATE questions SET kavram = 'u6-dogrusal-faz', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-dl-gecikme';
UPDATE questions SET kavram = 'u6-dogrusal-faz', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-dl-bozulma';
UPDATE questions SET kavram = 'u6-tam-geciren', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-tam-geciren';
UPDATE questions SET kavram = 'u6-tam-geciren', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-tam-geciren-deger';
UPDATE questions SET kavram = 'u6-filtre-turleri', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-gecis-bandi';
UPDATE questions SET kavram = 'u6-filtre-turleri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-filtre-tur';
UPDATE questions SET kavram = 'u6-sistem-baglanti-frekans', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-bant-geciren';
UPDATE questions SET kavram = 'u6-sistem-baglanti-frekans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-kaskat-db';
UPDATE questions SET kavram = 'u6-sistem-baglanti-frekans', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-paralel';
UPDATE questions SET kavram = 'u6-sistem-baglanti-frekans', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-bant-durduran';
UPDATE questions SET kavram = 'u6-dtft', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-dtft-durtu';
UPDATE questions SET kavram = 'u6-dtft', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-dtft-ustel';
UPDATE questions SET kavram = 'u6-dtft', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-dtft-hesap';
UPDATE questions SET kavram = 'u6-dtft', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-mutlak';
UPDATE questions SET kavram = 'u6-dtft', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-dikdortgen';
UPDATE questions SET kavram = 'u6-ters-dtft', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-ters-dtft';
UPDATE questions SET kavram = 'u6-dtft-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-kaydirma';
UPDATE questions SET kavram = 'u6-dtft-ozellik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-ters-cevirme';
UPDATE questions SET kavram = 'u6-dtft-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-modulasyon';
UPDATE questions SET kavram = 'u6-konvolusyon-teoremi', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-konvolusyon-teoremi';
UPDATE questions SET kavram = 'u6-konvolusyon-teoremi', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-carpma';
UPDATE questions SET kavram = 'u6-parseval', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-parseval';
UPDATE questions SET kavram = 'u6-ters-sistem', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h6-ters-sistem';
UPDATE questions SET kavram = 'u6-ters-sistem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-ters-hesap';
UPDATE questions SET kavram = 'u6-ters-sistem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h6-ters-yok';
UPDATE questions SET kavram = 'u7-dfs', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-dfs-periyot';
UPDATE questions SET kavram = 'u7-dfs', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-dfs-kosinus';
UPDATE questions SET kavram = 'u7-dft-dtft', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-dft-ornek';
UPDATE questions SET kavram = 'u7-dft-dtft', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-dft-dtft-fark';
UPDATE questions SET kavram = 'u7-dft-dtft', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-birim-cember';
UPDATE questions SET kavram = 'u7-dft-hesap', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-dft-delta';
UPDATE questions SET kavram = 'u7-dft-hesap', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-dft-4nokta';
UPDATE questions SET kavram = 'u7-dft-hesap', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-w-deger';
UPDATE questions SET kavram = 'u7-dft-hesap', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-dft-islem';
UPDATE questions SET kavram = 'u7-ters-dft', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-ters-dft';
UPDATE questions SET kavram = 'u7-ters-dft', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-ters-formul';
UPDATE questions SET kavram = 'u7-ters-dft', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-ters-sabit';
UPDATE questions SET kavram = 'u7-dft-frekans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-k-frekans';
UPDATE questions SET kavram = 'u7-dft-frekans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-cozunurluk';
UPDATE questions SET kavram = 'u7-dft-frekans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-k-omega';
UPDATE questions SET kavram = 'u7-dft-frekans', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-ust-yari';
UPDATE questions SET kavram = 'u7-sifir-doldurma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-sifir-doldurma';
UPDATE questions SET kavram = 'u7-sifir-doldurma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-sifir-ornek';
UPDATE questions SET kavram = 'u7-sifir-doldurma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-sifir-amac';
UPDATE questions SET kavram = 'u7-dft-ozellik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-x0-toplam';
UPDATE questions SET kavram = 'u7-dft-ozellik', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-dogrusallik-uzunluk';
UPDATE questions SET kavram = 'u7-dft-ozellik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-parseval-dft';
UPDATE questions SET kavram = 'u7-dft-simetri', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-simetri-gercel';
UPDATE questions SET kavram = 'u7-dft-simetri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-esl-simetri';
UPDATE questions SET kavram = 'u7-dft-simetri', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-xn2';
UPDATE questions SET kavram = 'u7-dft-simetri', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-sanal-dizi';
UPDATE questions SET kavram = 'u7-dairesel-kaydirma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-modulo';
UPDATE questions SET kavram = 'u7-dairesel-kaydirma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-dairesel-kaydir';
UPDATE questions SET kavram = 'u7-dairesel-kaydirma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-kaydirma-dft';
UPDATE questions SET kavram = 'u7-dairesel-kaydirma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-kaydirma-buyukluk';
UPDATE questions SET kavram = 'u7-dairesel-konv', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-dairesel-hesap';
UPDATE questions SET kavram = 'u7-dairesel-konv', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-dairesel-periyodik';
UPDATE questions SET kavram = 'u7-dairesel-konv', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-dairesel-dft';
UPDATE questions SET kavram = 'u7-dairesel-dogrusal', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-uzunluk-n';
UPDATE questions SET kavram = 'u7-dairesel-dogrusal', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-ortusme-hesap';
UPDATE questions SET kavram = 'u7-dairesel-dogrusal', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-dairesel-esit';
UPDATE questions SET kavram = 'u7-dairesel-dogrusal', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-zaman-ortusme';
UPDATE questions SET kavram = 'u7-dft-ile-konvolusyon', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-dft-adimlar';
UPDATE questions SET kavram = 'u7-dft-ile-konvolusyon', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-fft-neden';
UPDATE questions SET kavram = 'u7-ortusme-ekleme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-oa-ad';
UPDATE questions SET kavram = 'u7-ortusme-ekleme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-oa-uzunluk';
UPDATE questions SET kavram = 'u7-ortusme-ekleme', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h7-oa-hesap';
UPDATE questions SET kavram = 'u7-ortusme-kaydetme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-os-atilan';
UPDATE questions SET kavram = 'u7-ortusme-kaydetme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-os-tf';
UPDATE questions SET kavram = 'u7-ortusme-kaydetme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h7-os-fark';
UPDATE questions SET kavram = 'u8-fft-islem-yuku', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-dft-carpma';
UPDATE questions SET kavram = 'u8-fft-islem-yuku', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-fft-carpma';
UPDATE questions SET kavram = 'u8-fft-islem-yuku', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-sure';
UPDATE questions SET kavram = 'u8-fft-islem-yuku', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-ikiye-bolme';
UPDATE questions SET kavram = 'u8-fft-islem-yuku', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-hiz-orani';
UPDATE questions SET kavram = 'u8-fft-islem-yuku', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-fft-ayni';
UPDATE questions SET kavram = 'u8-zamanda-seyreltme', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-dit-tanim';
UPDATE questions SET kavram = 'u8-zamanda-seyreltme', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-dit-formul';
UPDATE questions SET kavram = 'u8-zamanda-seyreltme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-dit-ikinci-yari';
UPDATE questions SET kavram = 'u8-zamanda-seyreltme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-dit-g-dizi';
UPDATE questions SET kavram = 'u8-zamanda-seyreltme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-dit-2kuvvet';
UPDATE questions SET kavram = 'u8-bolum-carpani', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-w-yarim';
UPDATE questions SET kavram = 'u8-bolum-carpani', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-w-kare';
UPDATE questions SET kavram = 'u8-bolum-carpani', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-w8-deger';
UPDATE questions SET kavram = 'u8-bolum-carpani', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-bolum-carpani-ad';
UPDATE questions SET kavram = 'u8-kelebek', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-kelebek-hesap';
UPDATE questions SET kavram = 'u8-kelebek', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-iki-nokta';
UPDATE questions SET kavram = 'u8-kelebek', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-kelebek-carpma';
UPDATE questions SET kavram = 'u8-kelebek', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-kelebek-tf';
UPDATE questions SET kavram = 'u8-fft-asama', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-asama-sayisi';
UPDATE questions SET kavram = 'u8-fft-asama', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-toplama-sayisi';
UPDATE questions SET kavram = 'u8-fft-asama', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-asama-tf';
UPDATE questions SET kavram = 'u8-bit-ters', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-bit-ters';
UPDATE questions SET kavram = 'u8-bit-ters', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-bit-ters-16';
UPDATE questions SET kavram = 'u8-bit-ters', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-bit-ters-sira';
UPDATE questions SET kavram = 'u8-bit-ters', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-yerinde';
UPDATE questions SET kavram = 'u8-frekansta-seyreltme', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-dif-tanim';
UPDATE questions SET kavram = 'u8-frekansta-seyreltme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-dif-cift';
UPDATE questions SET kavram = 'u8-frekansta-seyreltme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-dif-tek';
UPDATE questions SET kavram = 'u8-frekansta-seyreltme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-dif-cikis';
UPDATE questions SET kavram = 'u8-frekansta-seyreltme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-dit-dif-islem';
UPDATE questions SET kavram = 'u8-karma-n', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-karma-indis';
UPDATE questions SET kavram = 'u8-karma-n', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-karma-tablo';
UPDATE questions SET kavram = 'u8-karma-n', yedek = 0, etiketler = 'ders' WHERE id = 'ds-h8-karma-adimlar';
UPDATE questions SET kavram = 'u8-karma-n', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-karma-k';
UPDATE questions SET kavram = 'u8-karma-n', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-karma-tf';
UPDATE questions SET kavram = 'u8-fft-kullanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-fft-konv';
UPDATE questions SET kavram = 'u8-fft-kullanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-matlab-fft';
UPDATE questions SET kavram = 'u8-fft-kullanim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-frekans-ekseni';
UPDATE questions SET kavram = 'u8-ters-fft', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-ters-fft';
UPDATE questions SET kavram = 'u8-ters-fft', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-h8-ters-fft-tf';
UPDATE questions SET kavram = 'u1-adc-niceleme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-adc-16bit';
UPDATE questions SET kavram = 'u1-adc-niceleme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-adc-fs';
UPDATE questions SET kavram = 'u1-adc-niceleme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-adc-bir-bit';
UPDATE questions SET kavram = 'u1-adc-niceleme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-adc-adim-12';
UPDATE questions SET kavram = 'u1-sinyal-eksen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t1-alan-frekans';
UPDATE questions SET kavram = 'u1-sinyal-eksen', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-bagimsiz';
UPDATE questions SET kavram = 'u1-ortalama-sapma', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-ortalama-sapma-2';
UPDATE questions SET kavram = 'u1-ortalama-sapma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t1-dc-eklemek';
UPDATE questions SET kavram = 'u1-ortalama-sapma', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-olcek';
UPDATE questions SET kavram = 'u1-ortalama-sapma', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-varyans-uc';
UPDATE questions SET kavram = 'u1-rms', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t1-vp-vrms';
UPDATE questions SET kavram = 'u1-rms', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-ucgen-vpp';
UPDATE questions SET kavram = 'u1-rms', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-rms-dc-sinus';
UPDATE questions SET kavram = 'u1-rms', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-rms-hangi';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-pmf-toplam';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t1-pmf-hist';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-pdf-buyuk';
UPDATE questions SET kavram = 'u1-histogram-pmf', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-kutu-genislik';
UPDATE questions SET kavram = 'u1-normal-dagilim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t1-gauss-95';
UPDATE questions SET kavram = 'u1-normal-dagilim', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-gauss-disari';
UPDATE questions SET kavram = 'u1-gurultu-uretimi', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-rnd-dort';
UPDATE questions SET kavram = 'u1-gurultu-uretimi', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-rnd-ortalama';
UPDATE questions SET kavram = 'u1-kesinlik-dogruluk', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-kesin-dogru-degil';
UPDATE questions SET kavram = 'u1-kesinlik-dogruluk', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t1-ortalama-n';
UPDATE questions SET kavram = 'u2-matlab-temel', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-inf';
UPDATE questions SET kavram = 'u2-matlab-temel', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-i-degisken';
UPDATE questions SET kavram = 'u2-vektor-olusturma', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-linspace-2';
UPDATE questions SET kavram = 'u2-vektor-olusturma', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t2-aralik-2';
UPDATE questions SET kavram = 'u2-vektor-olusturma', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-aralik-uzunluk-2';
UPDATE questions SET kavram = 'u2-indeksleme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-ters';
UPDATE questions SET kavram = 'u2-indeksleme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-indis-vektor';
UPDATE questions SET kavram = 'u2-matris-indeks', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-sutun';
UPDATE questions SET kavram = 'u2-matris-indeks', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t2-dogrusal-2';
UPDATE questions SET kavram = 'u2-eleman-islem', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-bolme';
UPDATE questions SET kavram = 'u2-eleman-islem', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-ic-carpim';
UPDATE questions SET kavram = 'u2-eleman-islem', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t2-boyut-hata';
UPDATE questions SET kavram = 'u2-mantiksal', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-sifirla';
UPDATE questions SET kavram = 'u2-mantiksal', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-veya-sayma';
UPDATE questions SET kavram = 'u2-fonksiyon-tanim', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-tek-cikis';
UPDATE questions SET kavram = 'u2-rastgele-uretim', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-rand-kare';
UPDATE questions SET kavram = 'u2-rastgele-uretim', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-randn-olcek';
UPDATE questions SET kavram = 'u2-birlestirme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-yatay-boyut';
UPDATE questions SET kavram = 'u2-birlestirme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t2-sifir-ekle';
UPDATE questions SET kavram = 'u2-istatistik-boyut', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-mean-satir';
UPDATE questions SET kavram = 'u2-istatistik-boyut', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-median-tek';
UPDATE questions SET kavram = 'u2-istatistik-boyut', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-var-pop';
UPDATE questions SET kavram = 'u2-istatistik-boyut', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t2-corr-sifir';
UPDATE questions SET kavram = 'u3-temel-diziler', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-pencere';
UPDATE questions SET kavram = 'u3-temel-diziler', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-durtu-toplam-2';
UPDATE questions SET kavram = 'u3-temel-diziler', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-basamak-deger';
UPDATE questions SET kavram = 'u3-ustel-sinuzoidal', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-ustel-buyur';
UPDATE questions SET kavram = 'u3-ustel-sinuzoidal', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-sinus-faz';
UPDATE questions SET kavram = 'u3-periyodiklik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t3-periyot-2';
UPDATE questions SET kavram = 'u3-periyodiklik', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-periyot-ekok';
UPDATE questions SET kavram = 'u3-periyodiklik', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-periyot-k-2';
UPDATE questions SET kavram = 'u3-simetri', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-cift-kisim-2';
UPDATE questions SET kavram = 'u3-simetri', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-tek-ornek';
UPDATE questions SET kavram = 'u3-sinyal-donusum', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-gecikme';
UPDATE questions SET kavram = 'u3-sinyal-donusum', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t3-ters-konum';
UPDATE questions SET kavram = 'u3-sinyal-donusum', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-seyrelt-kayip';
UPDATE questions SET kavram = 'u3-enerji-guc', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-enerji-2';
UPDATE questions SET kavram = 'u3-enerji-guc', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-guc-cos';
UPDATE questions SET kavram = 'u3-enerji-guc', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-enerji-guc';
UPDATE questions SET kavram = 'u3-dogrusallik', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-dogrusal-degil';
UPDATE questions SET kavram = 'u3-sistem-ozellik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ds-t3-statik';
UPDATE questions SET kavram = 'u3-sistem-ozellik', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-zaman-degismez';
UPDATE questions SET kavram = 'u3-sistem-ozellik', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-kararli';
UPDATE questions SET kavram = 'u3-lti', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t3-lti-durtu-2';
UPDATE questions SET kavram = 'u4-konvolusyon-toplam', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-durtu-kaydir-2';
UPDATE questions SET kavram = 'u4-konvolusyon-toplam', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-ilk-ornek-2';
UPDATE questions SET kavram = 'u4-konvolusyon-ozellik', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-kaskat-hesap-2';
UPDATE questions SET kavram = 'u4-konvolusyon-ozellik', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-paralel-hesap-2';
UPDATE questions SET kavram = 'u4-konvolusyon-ozellik', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-dagilma';
UPDATE questions SET kavram = 'u4-dogrudan-hesap', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-geometrik-2';
UPDATE questions SET kavram = 'u4-dogrudan-hesap', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-ustel-basamak-2';
UPDATE questions SET kavram = 'u4-dogrudan-hesap', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-ustel-limit-2';
UPDATE questions SET kavram = 'u4-konvolusyon-uzunluk', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-uzunluk-2';
UPDATE questions SET kavram = 'u4-konvolusyon-uzunluk', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-aralik-2';
UPDATE questions SET kavram = 'u4-grafik-yontem', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-grafik-hesap-2';
UPDATE questions SET kavram = 'u4-kaydirma-kurali', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-kaydirma-2';
UPDATE questions SET kavram = 'u4-polinom-carpim', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-polinom-3';
UPDATE questions SET kavram = 'u4-olasilik-konvolusyon', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-zar-10';
UPDATE questions SET kavram = 'u4-olasilik-konvolusyon', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-zar-2';
UPDATE questions SET kavram = 'u4-hareketli-ortalama', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-ma-katsayi-2';
UPDATE questions SET kavram = 'u4-hareketli-ortalama', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-ma-gecikme-2';
UPDATE questions SET kavram = 'u4-korelasyon', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-otokor-0-2';
UPDATE questions SET kavram = 'u4-korelasyon', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-otokor-ustel-2';
UPDATE questions SET kavram = 'u4-korelasyon', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t4-korelasyon-degisme';
UPDATE questions SET kavram = 'u5-sinus-cember', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-cember-koordinat-2';
UPDATE questions SET kavram = 'u5-sinus-parametre', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-frekans-oku-2';
UPDATE questions SET kavram = 'u5-sinus-parametre', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-periyot-2';
UPDATE questions SET kavram = 'u5-sinus-parametre', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-faz-kayma-2';
UPDATE questions SET kavram = 'u5-sinus-parametre', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-omega-2';
UPDATE questions SET kavram = 'u5-sinus-toplam', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-toplam-genlik-2';
UPDATE questions SET kavram = 'u5-sinus-toplam', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-toplam-periyot-2';
UPDATE questions SET kavram = 'u5-fourier-serisi', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-kare-harmonik-2';
UPDATE questions SET kavram = 'u5-fourier-serisi', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-harmonik-frekans-2';
UPDATE questions SET kavram = 'u5-spektrum', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-darbe-sifir-2';
UPDATE questions SET kavram = 'u5-sarma-kutle-merkezi', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-sarma-tepe-2';
UPDATE questions SET kavram = 'u5-fourier-donusum', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t5-donusum-tepe-2';
UPDATE questions SET kavram = 'u6-frekans-yaniti', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-kosinus-cikis-2';
UPDATE questions SET kavram = 'u6-db-olcek', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-db-20-2';
UPDATE questions SET kavram = 'u6-db-olcek', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-db-hesap-2';
UPDATE questions SET kavram = 'u6-grup-gecikmesi', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-grup-hesap-2';
UPDATE questions SET kavram = 'u6-frekans-simetri', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-ustel-buyukluk-2';
UPDATE questions SET kavram = 'u6-dogrusal-faz', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-dl-gecikme-2';
UPDATE questions SET kavram = 'u6-sistem-baglanti-frekans', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-kaskat-db-2';
UPDATE questions SET kavram = 'u6-dtft', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-dtft-ustel-2';
UPDATE questions SET kavram = 'u6-dtft', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-dtft-hesap-2';
UPDATE questions SET kavram = 'u6-dtft', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-dikdortgen-2';
UPDATE questions SET kavram = 'u6-parseval', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-parseval-2';
UPDATE questions SET kavram = 'u6-ters-sistem', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t6-ters-hesap-2';
UPDATE questions SET kavram = 'u7-dfs', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-dfs-kosinus-2';
UPDATE questions SET kavram = 'u7-dft-hesap', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-dft-delta-2';
UPDATE questions SET kavram = 'u7-dft-hesap', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-dft-4nokta-2';
UPDATE questions SET kavram = 'u7-ters-dft', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-ters-dft-2';
UPDATE questions SET kavram = 'u7-dft-frekans', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-k-frekans-2';
UPDATE questions SET kavram = 'u7-dft-frekans', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-cozunurluk-2';
UPDATE questions SET kavram = 'u7-sifir-doldurma', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-sifir-ornek-2';
UPDATE questions SET kavram = 'u7-dft-simetri', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-esl-simetri-2';
UPDATE questions SET kavram = 'u7-dairesel-kaydirma', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-modulo-2';
UPDATE questions SET kavram = 'u7-dairesel-kaydirma', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-dairesel-kaydir-2';
UPDATE questions SET kavram = 'u7-dairesel-dogrusal', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-uzunluk-n-2';
UPDATE questions SET kavram = 'u7-dairesel-dogrusal', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-ortusme-hesap-2';
UPDATE questions SET kavram = 'u7-ortusme-ekleme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-oa-uzunluk-2';
UPDATE questions SET kavram = 'u7-ortusme-kaydetme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t7-os-atilan-2';
UPDATE questions SET kavram = 'u8-fft-islem-yuku', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-dft-carpma-2';
UPDATE questions SET kavram = 'u8-fft-islem-yuku', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-fft-carpma-2';
UPDATE questions SET kavram = 'u8-fft-islem-yuku', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-sure-2';
UPDATE questions SET kavram = 'u8-zamanda-seyreltme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-dit-ikinci-yari-2';
UPDATE questions SET kavram = 'u8-zamanda-seyreltme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-dit-g-dizi-2';
UPDATE questions SET kavram = 'u8-kelebek', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-kelebek-hesap-2';
UPDATE questions SET kavram = 'u8-kelebek', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-iki-nokta-2';
UPDATE questions SET kavram = 'u8-fft-asama', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-asama-sayisi-2';
UPDATE questions SET kavram = 'u8-bit-ters', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-bit-ters-2';
UPDATE questions SET kavram = 'u8-frekansta-seyreltme', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-dif-cift-2';
UPDATE questions SET kavram = 'u8-karma-n', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-karma-indis-2';
UPDATE questions SET kavram = 'u8-fft-kullanim', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-fft-konv-2';
UPDATE questions SET kavram = 'u8-fft-kullanim', yedek = 1, etiketler = 'turetilmis' WHERE id = 'ds-t8-frekans-ekseni-2';
