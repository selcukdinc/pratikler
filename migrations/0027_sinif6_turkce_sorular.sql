-- Bu dosya scripts/sorular-sql.ts ile icerik/sinif6-turkce/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('t6-u1-kelime-anlami', 'sinif6-turkce', 'Kelimenin anlamını metinden tahmin etme', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('t6-u1-yuzey', 'sinif6-turkce', 'Metinde açıkça verilen bilgi', 1, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('t6-u1-anahtar', 'sinif6-turkce', 'Anahtar kelimeler', 1, 3)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('t6-u1-soz-varligi', 'sinif6-turkce', 'Söz varlığı: eş ve zıt anlam, mecaz, deyim, atasözü', 1, 4)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('t6-u1-yazma', 'sinif6-turkce', 'Yazma: plan ve kelime seçimi', 1, 5)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('t6-u1-yazim', 'sinif6-turkce', 'Yazım ve noktalama: de/da, ki, mi, virgül', 1, 6)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('t6-u2-kok-ek', 'sinif6-turkce', 'Kök ve ek, yapım ve çekim eki', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('t6-u2-karsilastirma', 'sinif6-turkce', 'Karşılaştırma bildiren sözler', 2, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-ka-01', 'sinif6-turkce', 't6-u1-kelime-anlami', 1, 'mcq', 'derived', '> Ece, kitapta "mütevazı" kelimesini görünce durdu. Anlamını bilmiyordu ama hemen sözlüğe bakmak yerine cümleyi yeniden okudu: "Ödülü kazanan genç ressam, mütevazı tavırlarıyla herkesin sevgisini kazandı; başarısıyla hiç övünmedi." Ece, ressamın övünmediğini görünce kelimenin "alçak gönüllü" anlamına geldiğini tahmin etti. Sonra sözlüğü açtı ve tahmininin doğru olduğunu gördü.

Ece, "mütevazı" kelimesinin anlamını tahmin ederken metindeki hangi bilgiden yararlanmıştır?', '{"choices":["Ressamın ödül kazanmasından","Ressamın başarısıyla övünmemesinden","Ressamın genç olmasından","Herkesin resimleri beğenmesinden"]}', '{"index":1}', 'Cümlede ressamın "başarısıyla hiç övünmediği" söyleniyor. Övünmeyen kişi alçak gönüllüdür; Ece kelimenin anlamını bu ipucundan çıkarmıştır.', 1, 'T.O.6.5 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-ka-02', 'sinif6-turkce', 't6-u1-kelime-anlami', 1, 'mcq', 'derived', '> Köyün pazarı her cumartesi kurulurdu. Sabahın erken saatlerinde tezgâhlar sıra sıra dizilir, satıcılar mallarını özenle yerleştirirdi. Pazarın en kalabalık yeri Hatice Teyze''nin tezgâhıydı. Onun ev yapımı reçelleri çok rağbet görür, öğlene kalmadan tükenirdi. Geç kalanlar boş kavanozlara bakıp iç çekerdi.

Metindeki "rağbet görmek" sözünün anlamı aşağıdakilerden hangisidir?', '{"choices":["Pahalı satılmak","Çok beğenilip aranmak","Özenle hazırlanmak","Az miktarda üretilmek"]}', '{"index":1}', 'Reçellerin "öğlene kalmadan tükendiği" ve geç kalanların üzüldüğü söyleniyor. Bu da reçellerin çok beğenilip arandığını gösterir.', 1, 'T.O.6.5 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-ka-03', 'sinif6-turkce', 't6-u1-kelime-anlami', 1, 'yaz', 'derived', '> Köyün pazarı her cumartesi kurulurdu. Sabahın erken saatlerinde tezgâhlar sıra sıra dizilir, satıcılar mallarını özenle yerleştirirdi. Pazarın en kalabalık yeri Hatice Teyze''nin tezgâhıydı. Onun ev yapımı reçelleri çok rağbet görür, öğlene kalmadan tükenirdi. Geç kalanlar boş kavanozlara bakıp iç çekerdi.

Metinde geçen "iç çekmek" sözünün anlamını tahmin ediniz. Tahmininizi metindeki hangi ipucuna dayandırdığınızı da yazınız.', '{}', '{}', '**Örnek cevap:** "İç çekmek", üzülerek ya da bir şeyi özleyerek derin nefes almak demektir. Geç kalanlar reçellerin bittiğini, kavanozların boş olduğunu görünce üzülmüştür; bu durum sözün üzüntü bildirdiğini gösterir.

**Puanlama:** Anlamı doğru tahmin etmek yarı puan, ipucunu (kavanozların boş olması, reçelin bitmesi) göstermek yarı puan.', 2, 'T.O.6.5 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-ka-04', 'sinif6-turkce', 't6-u1-kelime-anlami', 1, 'mcq', 'derived', '> Mahallemizin saatçisi Yusuf Usta, dükkânını kırk yıldır aynı yerde açar. Küçük dükkânın duvarları, her biri farklı sesle tıkırdayan saatlerle doludur. Yusuf Usta bozulan bir saati eline aldığında önce kulağına götürür, sonra büyüteciyle içini inceler. Ustaya göre saat tamir etmek sabır işidir: "Acele eden, küçük bir vidayı kaybeder; vidayı kaybeden, saati kaybeder" der.

Metinde Yusuf Usta''nın saatleri incelerken kullandığı "büyüteç" nasıl bir araçtır?', '{"choices":["Saatin zamanını ayarlayan bir alet","Küçük şeyleri büyük gösteren bir mercek","Vidaları sıkıştıran bir tornavida","Saatin sesini yükselten bir cihaz"]}', '{"index":1}', 'Usta saatin "içini inceler" ve küçük vidalarla uğraşır. Kelime de "büyü-" kökünden gelir. Büyüteç, küçük şeyleri büyük gösteren mercektir.', 1, 'T.O.6.5 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-ka-05', 'sinif6-turkce', 't6-u1-kelime-anlami', 1, 'fill', 'derived', '> Okulumuzun kütüphanesi geçen yıl yenilendi. Raflara yüzlerce yeni kitap eklendi, köşeye de minderli bir okuma alanı yapıldı. Kütüphanemiz artık her gün öğle arasında ve ders bitiminden sonra bir saat açık. Kitap almak isteyen öğrenciler, öğrenci kartlarıyla en fazla iki kitabı iki haftalığına ödünç alabiliyor. Kitabını zamanında getirmeyen öğrenci, bir hafta boyunca yeni kitap alamıyor.

Metinde geçen "ödünç almak" sözünün anlamına göre boşluğu doldurunuz: Ödünç alınan kitap, süresi dolunca kütüphaneye geri ______.', '{"blanks":1}', '{"blanks":[["verilir","getirilir","götürülür","teslim edilir","iade edilir"]]}', 'Ödünç almak, bir şeyi geri vermek üzere almaktır. Metinde de kitabın "zamanında getirilmesi" gerektiği söyleniyor; yani kitap geri **verilir** (getirilir).', 2, 'T.O.6.5 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-ka-06', 'sinif6-turkce', 't6-u1-kelime-anlami', 1, 'mcq', 'derived', '"Kardeşim hastalandığı için bu hafta derslerden **geri kaldı**; öğretmeni ona eksik konuları tekrar anlattı."

Cümlede kalın yazılan sözün anlamı aşağıdakilerden hangisidir?', '{"choices":["Sınıfın en arkasında oturdu","Okula her gün geç geldi","Arkadaşlarının gerisinde kaldı","Dersleri tekrar etmeyi unuttu"]}', '{"index":2}', 'Öğretmenin "eksik konuları" yeniden anlatması, kardeşin hastalık yüzünden konularda arkadaşlarının gerisinde kaldığını gösterir.', 2, 'T.O.6.5 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-ka-07', 'sinif6-turkce', 't6-u1-kelime-anlami', 1, 'mcq', 'derived', '"Dağcılar zirveye ulaşmak için **meşakkatli** bir yolculuk yaptılar: soğukla, fırtınayla ve yorgunlukla günlerce mücadele ettiler."

Kalın yazılan kelimenin anlamı aşağıdakilerden hangisidir?', '{"choices":["Kısa ve kolay","Zahmetli ve yorucu","Neşeli ve eğlenceli","Uzun ve sıkıcı"]}', '{"index":1}', 'İki noktadan sonra yolculuğun nasıl geçtiği açıklanıyor: soğuk, fırtına ve yorgunlukla mücadele. Bu açıklama "meşakkatli" kelimesinin "zahmetli, sıkıntılı" demek olduğunu gösterir.', 2, 'T.O.6.5 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-ka-08', 'sinif6-turkce', 't6-u1-kelime-anlami', 1, 'yaz', 'derived', '"Ali, arkadaşının kırılan kalemini görünce hiç tereddüt etmeden kendi kalemini ona verdi."

Cümlede geçen "tereddüt etmek" sözünün anlamını tahmin ediniz ve bu sözü kendi kuracağınız bir cümlede kullanınız.', '{}', '{}', '**Örnek cevap:** "Tereddüt etmek", bir karar verirken kararsız kalmak, duraksamak demektir. Ali''nin kalemini "hiç düşünmeden" verdiği anlaşılıyor.

*Örnek cümle:* Soruyu çözerken iki şık arasında tereddüt ettim.

**Puanlama:** Anlam yarı puan, sözün anlamına uygun kullanıldığı cümle yarı puan.', 2, 'T.O.6.5 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-ka-09', 'sinif6-turkce', 't6-u1-kelime-anlami', 1, 'mcq', 'derived', '> Bilmeceler, Anadolu''da uzun kış gecelerinin vazgeçilmez eğlencesiydi. Aile büyükleri soruyu sorar, çocuklar cevabı bulmak için yarışırdı. "Bir küçük fıçı, içinde iki türlü turşu" diye sorulan bilmecenin cevabı yumurtadır. Bilmeceler, çocukların hem düşünme becerisini geliştirir hem de dilimizin benzetmelerle dolu zenginliğini tanıtırdı. Ne yazık ki bugün bu gelenek eskisi kadar yaşatılmıyor.

Metinde geçen "vazgeçilmez" kelimesinin anlamı aşağıdakilerden hangisidir?', '{"choices":["Çok gerekli, onsuz olmayan","Herkesin bildiği","Eskiden kalma","Kolayca unutulan"]}', '{"index":0}', 'Bilmecelerin kış gecelerinin "vazgeçilmez eğlencesi" olması, o gecelerin bilmecesiz düşünülemediğini anlatır.', 1, 'T.O.6.5 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yu-01', 'sinif6-turkce', 't6-u1-yuzey', 1, 'mcq', 'derived', '> Dedem, çocukluğunda köylerinde okul olmadığını anlatır. Okumayı, her akşam köy kahvesinde gazete okuyan muhtardan öğrenmiş. Harfleri önce yere çubukla çizer, sonra yüksek sesle söylermiş. On iki yaşına geldiğinde köyde gazeteyi okuyabilen ikinci kişi o olmuş. Bugün hâlâ her sabah kahvaltıdan önce gazetesini okur ve bilmediği kelimeleri küçük bir deftere yazar.

Metne göre dede okumayı kimden öğrenmiştir?', '{"choices":["Köyün öğretmeninden","Köyün muhtarından","Kendi babasından","Köy kahvesinin sahibinden"]}', '{"index":1}', 'Metinde dedenin okumayı "her akşam köy kahvesinde gazete okuyan muhtardan" öğrendiği açıkça yazıyor. Köyde okul olmadığı için öğretmen yoktu.', 1, 'T.O.6.6 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yu-02', 'sinif6-turkce', 't6-u1-yuzey', 1, 'tf', 'derived', '> Dedem, çocukluğunda köylerinde okul olmadığını anlatır. Okumayı, her akşam köy kahvesinde gazete okuyan muhtardan öğrenmiş. Harfleri önce yere çubukla çizer, sonra yüksek sesle söylermiş. On iki yaşına geldiğinde köyde gazeteyi okuyabilen ikinci kişi o olmuş. Bugün hâlâ her sabah kahvaltıdan önce gazetesini okur ve bilmediği kelimeleri küçük bir deftere yazar.

Metne göre dede, bilmediği kelimeleri bir deftere yazmaktadır.', '{}', '{"value":true}', 'Son cümlede dedenin "bilmediği kelimeleri küçük bir deftere yazdığı" belirtiliyor.', 1, 'T.O.6.6 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yu-03', 'sinif6-turkce', 't6-u1-yuzey', 1, 'yaz', 'derived', '> Dedem, çocukluğunda köylerinde okul olmadığını anlatır. Okumayı, her akşam köy kahvesinde gazete okuyan muhtardan öğrenmiş. Harfleri önce yere çubukla çizer, sonra yüksek sesle söylermiş. On iki yaşına geldiğinde köyde gazeteyi okuyabilen ikinci kişi o olmuş. Bugün hâlâ her sabah kahvaltıdan önce gazetesini okur ve bilmediği kelimeleri küçük bir deftere yazar.

Dede, harfleri öğrenirken hangi iki yolu kullanmıştır? Metne göre yazınız.', '{}', '{}', '**Örnek cevap:** Dede harfleri önce yere çubukla çizmiş, sonra yüksek sesle söylemiştir.

**Puanlama:** Her yol yarı puan.', 1, 'T.O.6.6 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yu-04', 'sinif6-turkce', 't6-u1-yuzey', 1, 'mcq', 'derived', '> Okulumuzun kütüphanesi geçen yıl yenilendi. Raflara yüzlerce yeni kitap eklendi, köşeye de minderli bir okuma alanı yapıldı. Kütüphanemiz artık her gün öğle arasında ve ders bitiminden sonra bir saat açık. Kitap almak isteyen öğrenciler, öğrenci kartlarıyla en fazla iki kitabı iki haftalığına ödünç alabiliyor. Kitabını zamanında getirmeyen öğrenci, bir hafta boyunca yeni kitap alamıyor.

Metne göre bir öğrenci kütüphaneden aynı anda en fazla kaç kitap ödünç alabilir?', '{"choices":["Bir","İki","Üç","Dört"]}', '{"index":1}', 'Metinde öğrencilerin "en fazla iki kitabı iki haftalığına" ödünç alabildiği yazıyor.', 1, 'T.O.6.6 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yu-05', 'sinif6-turkce', 't6-u1-yuzey', 1, 'fill', 'derived', '> Okulumuzun kütüphanesi geçen yıl yenilendi. Raflara yüzlerce yeni kitap eklendi, köşeye de minderli bir okuma alanı yapıldı. Kütüphanemiz artık her gün öğle arasında ve ders bitiminden sonra bir saat açık. Kitap almak isteyen öğrenciler, öğrenci kartlarıyla en fazla iki kitabı iki haftalığına ödünç alabiliyor. Kitabını zamanında getirmeyen öğrenci, bir hafta boyunca yeni kitap alamıyor.

Metne göre boşluğu doldurunuz: Kitabını zamanında getirmeyen öğrenci, bir ______ boyunca yeni kitap alamaz.', '{"blanks":1}', '{"blanks":[["hafta"]]}', 'Son cümle: "Kitabını zamanında getirmeyen öğrenci, bir **hafta** boyunca yeni kitap alamıyor."', 1, 'T.O.6.6 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yu-06', 'sinif6-turkce', 't6-u1-yuzey', 1, 'mcq', 'derived', '> Okulumuzun kütüphanesi geçen yıl yenilendi. Raflara yüzlerce yeni kitap eklendi, köşeye de minderli bir okuma alanı yapıldı. Kütüphanemiz artık her gün öğle arasında ve ders bitiminden sonra bir saat açık. Kitap almak isteyen öğrenciler, öğrenci kartlarıyla en fazla iki kitabı iki haftalığına ödünç alabiliyor. Kitabını zamanında getirmeyen öğrenci, bir hafta boyunca yeni kitap alamıyor.

Aşağıdakilerden hangisi kütüphanenin yenilenmesiyle yapılanlardan biri **değildir**?', '{"choices":["Raflara yeni kitaplar eklenmesi","Minderli bir okuma alanı yapılması","Bilgisayar köşesi kurulması","Açık olduğu saatlerin belirlenmesi"]}', '{"index":2}', 'Metinde yeni kitaplardan, minderli okuma alanından ve açık olduğu saatlerden söz ediliyor. Bilgisayar köşesinden hiç bahsedilmiyor.', 2, 'T.O.6.6 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yu-07', 'sinif6-turkce', 't6-u1-yuzey', 1, 'yaz', 'derived', '> Mahallemizin saatçisi Yusuf Usta, dükkânını kırk yıldır aynı yerde açar. Küçük dükkânın duvarları, her biri farklı sesle tıkırdayan saatlerle doludur. Yusuf Usta bozulan bir saati eline aldığında önce kulağına götürür, sonra büyüteciyle içini inceler. Ustaya göre saat tamir etmek sabır işidir: "Acele eden, küçük bir vidayı kaybeder; vidayı kaybeden, saati kaybeder" der.

Yusuf Usta bozulan bir saati tamir etmeye nasıl başlar? Metindeki bilgilere göre sırasıyla yazınız.', '{}', '{}', '**Örnek cevap:** Yusuf Usta önce saati kulağına götürür, sonra büyüteçle içini inceler.

**Puanlama:** İki adımı doğru sırayla yazmak tam puan; sıra yanlışsa ya da adımlardan biri eksikse yarı puan.', 2, 'T.O.6.6 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yu-08', 'sinif6-turkce', 't6-u1-yuzey', 1, 'mcq', 'derived', '> Mahallemizin saatçisi Yusuf Usta, dükkânını kırk yıldır aynı yerde açar. Küçük dükkânın duvarları, her biri farklı sesle tıkırdayan saatlerle doludur. Yusuf Usta bozulan bir saati eline aldığında önce kulağına götürür, sonra büyüteciyle içini inceler. Ustaya göre saat tamir etmek sabır işidir: "Acele eden, küçük bir vidayı kaybeder; vidayı kaybeden, saati kaybeder" der.

Metne göre Yusuf Usta''nın dükkânı ile ilgili aşağıdakilerden hangisi doğrudur?', '{"choices":["Yeni açılmıştır","Mahallenin en büyük dükkânıdır","Kırk yıldır aynı yerdedir","Yalnızca duvar saati satar"]}', '{"index":2}', 'İlk cümlede ustanın dükkânını "kırk yıldır aynı yerde" açtığı söyleniyor. Dükkân küçüktür; yalnızca duvar saati sattığı da yazmıyor.', 1, 'T.O.6.6 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yu-09', 'sinif6-turkce', 't6-u1-yuzey', 1, 'tf', 'derived', '> Bilmeceler, Anadolu''da uzun kış gecelerinin vazgeçilmez eğlencesiydi. Aile büyükleri soruyu sorar, çocuklar cevabı bulmak için yarışırdı. "Bir küçük fıçı, içinde iki türlü turşu" diye sorulan bilmecenin cevabı yumurtadır. Bilmeceler, çocukların hem düşünme becerisini geliştirir hem de dilimizin benzetmelerle dolu zenginliğini tanıtırdı. Ne yazık ki bugün bu gelenek eskisi kadar yaşatılmıyor.

Metne göre "Bir küçük fıçı, içinde iki türlü turşu" bilmecesinin cevabı yumurtadır.', '{}', '{"value":true}', 'Metinde bu bilmecenin cevabının yumurta olduğu açıkça yazıyor: fıçı kabuğa, iki türlü turşu sarısı ve beyazına benzetilmiştir.', 1, 'T.O.6.6 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yu-10', 'sinif6-turkce', 't6-u1-yuzey', 1, 'yaz', 'derived', '> Bilmeceler, Anadolu''da uzun kış gecelerinin vazgeçilmez eğlencesiydi. Aile büyükleri soruyu sorar, çocuklar cevabı bulmak için yarışırdı. "Bir küçük fıçı, içinde iki türlü turşu" diye sorulan bilmecenin cevabı yumurtadır. Bilmeceler, çocukların hem düşünme becerisini geliştirir hem de dilimizin benzetmelerle dolu zenginliğini tanıtırdı. Ne yazık ki bugün bu gelenek eskisi kadar yaşatılmıyor.

Metne göre bilmecelerin çocuklara iki faydası nedir? Yazınız.', '{}', '{}', '**Örnek cevap:** Bilmeceler çocukların düşünme becerisini geliştirir ve onlara dilimizin benzetmelerle dolu zenginliğini tanıtır.

**Puanlama:** Her fayda yarı puan.', 2, 'T.O.6.6 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yu-11', 'sinif6-turkce', 't6-u1-yuzey', 1, 'mcq', 'derived', '> Dilimize her yıl yeni kelimeler giriyor. Bunların bir kısmı teknolojiyle birlikte başka dillerden geliyor. Türk Dil Kurumu, yabancı kelimelere Türkçe karşılıklar öneriyor: "e-posta", "bilgisayar" ve "sürücü" bu önerilerden bazıları. Bir karşılığın yaygınlaşması için onu herkesin kullanması gerekir. Türkçe karşılıkları konuşurken ve yazarken tercih ettiğimizde dilimizin zenginliğini korumuş oluruz.

Metne göre bir Türkçe karşılığın yaygınlaşması için ne gerekir?', '{"choices":["Türk Dil Kurumunun onu sözlüğe eklemesi","Herkesin onu kullanması","Kelimenin kısa olması","Kelimenin teknolojiyle ilgili olması"]}', '{"index":1}', 'Metinde "Bir karşılığın yaygınlaşması için onu herkesin kullanması gerekir" cümlesi bu bilgiyi açıkça veriyor.', 2, 'T.O.6.6 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-an-01', 'sinif6-turkce', 't6-u1-anahtar', 1, 'mcq', 'derived', '> Bilmeceler, Anadolu''da uzun kış gecelerinin vazgeçilmez eğlencesiydi. Aile büyükleri soruyu sorar, çocuklar cevabı bulmak için yarışırdı. "Bir küçük fıçı, içinde iki türlü turşu" diye sorulan bilmecenin cevabı yumurtadır. Bilmeceler, çocukların hem düşünme becerisini geliştirir hem de dilimizin benzetmelerle dolu zenginliğini tanıtırdı. Ne yazık ki bugün bu gelenek eskisi kadar yaşatılmıyor.

Bu metnin anahtar kelimesi aşağıdakilerden hangisidir?', '{"choices":["Kış","Yumurta","Bilmece","Aile"]}', '{"index":2}', 'Metnin her cümlesi bilmecelerden söz ediyor: nasıl sorulduklarından, bir örneğinden, faydalarından. Kış, yumurta ve aile yalnızca bir yerde geçen yardımcı kelimelerdir.', 1, 'T.O.6.16 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-an-02', 'sinif6-turkce', 't6-u1-anahtar', 1, 'mcq', 'derived', '> Dilimize her yıl yeni kelimeler giriyor. Bunların bir kısmı teknolojiyle birlikte başka dillerden geliyor. Türk Dil Kurumu, yabancı kelimelere Türkçe karşılıklar öneriyor: "e-posta", "bilgisayar" ve "sürücü" bu önerilerden bazıları. Bir karşılığın yaygınlaşması için onu herkesin kullanması gerekir. Türkçe karşılıkları konuşurken ve yazarken tercih ettiğimizde dilimizin zenginliğini korumuş oluruz.

Bu metnin anahtar kelimeleri aşağıdakilerin hangisinde birlikte verilmiştir?', '{"choices":["Teknoloji, bilgisayar","Türkçe karşılık, yabancı kelime","Konuşmak, yazmak","Sürücü, e-posta"]}', '{"index":1}', 'Metin, yabancı kelimelere bulunan Türkçe karşılıkları ve onları kullanmanın önemini anlatıyor. Diğer kelimeler bu konuyu destekleyen örneklerdir.', 1, 'T.O.6.16 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-an-03', 'sinif6-turkce', 't6-u1-anahtar', 1, 'yaz', 'derived', '> Mahallemizin saatçisi Yusuf Usta, dükkânını kırk yıldır aynı yerde açar. Küçük dükkânın duvarları, her biri farklı sesle tıkırdayan saatlerle doludur. Yusuf Usta bozulan bir saati eline aldığında önce kulağına götürür, sonra büyüteciyle içini inceler. Ustaya göre saat tamir etmek sabır işidir: "Acele eden, küçük bir vidayı kaybeder; vidayı kaybeden, saati kaybeder" der.

Bu metnin iki anahtar kelimesini yazınız. Bu kelimeleri neden seçtiğinizi bir cümleyle açıklayınız.', '{}', '{}', '**Örnek cevap:** *Saatçi (saat) ve sabır.* Metin bir saatçinin işini anlatıyor ve ustanın sözüyle saat tamirinin sabır istediğini vurguluyor.

**Puanlama:** Konuya uygun iki anahtar kelime yarı puan (saat, saatçi, tamir, sabır kabul edilir), gerekçe yarı puan.', 2, 'T.O.6.16 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-an-04', 'sinif6-turkce', 't6-u1-anahtar', 1, 'mcq', 'derived', 'Anahtar kelimeler bir metinle ilgili bize öncelikle neyi gösterir?', '{"choices":["Metnin kaç paragraftan oluştuğunu","Metnin konusunu ve ana fikrini","Metindeki yazım yanlışlarını","Metnin kimin için yazıldığını"]}', '{"index":1}', 'Anahtar kelimeler metinde öne çıkan, sık geçen ya da vurgulanan kelimelerdir; metnin konusunu ve ana fikrini bulmamıza yardım ederler.', 2, 'T.O.6.16 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-an-05', 'sinif6-turkce', 't6-u1-anahtar', 1, 'mcq', 'derived', '"Arılar çiçekten çiçeğe uçarak polen taşır. Bu taşıma sayesinde bitkiler meyve verir. Arılar olmasaydı sofralarımızdaki pek çok meyve ve sebze olmazdı. Bu yüzden arıları korumak hepimizin görevidir."

Bu metnin anahtar kelimesi aşağıdakilerden hangisidir?', '{"choices":["Sofra","Sebze","Arı","Çiçek"]}', '{"index":2}', 'Metnin bütün cümleleri arılar ve onların doğadaki görevi üzerine kuruludur; "arı" kelimesi de metinde en çok tekrarlanan kelimedir.', 2, 'T.O.6.16 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-an-06', 'sinif6-turkce', 't6-u1-anahtar', 1, 'yaz', 'derived', '> Dedem, çocukluğunda köylerinde okul olmadığını anlatır. Okumayı, her akşam köy kahvesinde gazete okuyan muhtardan öğrenmiş. Harfleri önce yere çubukla çizer, sonra yüksek sesle söylermiş. On iki yaşına geldiğinde köyde gazeteyi okuyabilen ikinci kişi o olmuş. Bugün hâlâ her sabah kahvaltıdan önce gazetesini okur ve bilmediği kelimeleri küçük bir deftere yazar.

Bu metnin anahtar kelimelerinden birini yazınız. Bu kelimeden yola çıkarak metne bir başlık veriniz.', '{}', '{}', '**Örnek cevap:** Anahtar kelime: *okumak (okuma)*. Başlık: *Dedemin Okuma Sevgisi*.

**Puanlama:** Uygun anahtar kelime (okumak, gazete, dede) yarı puan; anahtar kelimeyle ilgili ve metnin konusunu yansıtan başlık yarı puan.', 2, 'T.O.6.16 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-an-07', 'sinif6-turkce', 't6-u1-anahtar', 1, 'mcq', 'derived', '> Köyün pazarı her cumartesi kurulurdu. Sabahın erken saatlerinde tezgâhlar sıra sıra dizilir, satıcılar mallarını özenle yerleştirirdi. Pazarın en kalabalık yeri Hatice Teyze''nin tezgâhıydı. Onun ev yapımı reçelleri çok rağbet görür, öğlene kalmadan tükenirdi. Geç kalanlar boş kavanozlara bakıp iç çekerdi.

Bu metnin anahtar kelimesi aşağıdakilerden hangisidir?', '{"choices":["Pazar","Kavanoz","Cumartesi","Sabah"]}', '{"index":0}', 'Metin köy pazarını anlatıyor: kuruluşunu, tezgâhları ve en kalabalık tezgâhı. Diğer kelimeler yalnızca bir kez geçen ayrıntılardır.', 1, 'T.O.6.16 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-01', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'mcq', 'derived', '"Öğretmenimiz sorulara verdiğimiz **yanıtları** tek tek okudu."

Cümlede kalın yazılan kelimenin eş anlamlısı aşağıdakilerden hangisidir?', '{"choices":["Soru","Cevap","Not","Fikir"]}', '{"index":1}', 'Yanıt ve cevap yazılışları farklı, anlamları aynı olan eş anlamlı kelimelerdir.', 1, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-02', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'mcq', 'derived', 'Aşağıdaki kelime çiftlerinden hangisi zıt anlamlıdır?', '{"choices":["Kara - siyah","Ak - beyaz","Cimri - cömert","Al - kırmızı"]}', '{"index":2}', 'Cimri (eli sıkı) ile cömert (eli açık) anlamca birbirinin karşıtıdır. Diğer çiftler eş anlamlıdır: kara-siyah, ak-beyaz, al-kırmızı.', 1, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-03', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'fill', 'derived', 'Aşağıdaki cümlede kalın yazılan kelimenin zıt anlamlısını boşluğa yazınız.

"Bu yıl kış **erken** geldi." → Bu yıl kış ______ geldi.', '{"blanks":1}', '{"blanks":[["geç"]]}', '"Erken" kelimesinin zıt anlamlısı **geç**tir.', 1, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-04', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'yaz', 'derived', '"**Kalabalık** caddede **yaşlı** bir adam, elindeki **ağır** çantayla yavaş yavaş yürüyordu."

Cümlede kalın yazılan kelimelerin zıt anlamlılarını yazınız.', '{}', '{}', '**Örnek cevap:** kalabalık → tenha (ıssız), yaşlı → genç, ağır → hafif.

**Puanlama:** Her doğru kelime puanın üçte biri. "Kalabalık" için "sakin, boş" da kabul edilir.', 2, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-05', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'mcq', 'derived', 'Aşağıdaki cümlelerin hangisinde eş anlamlı iki kelime birlikte kullanılmıştır?', '{"choices":["Okulun bahçesi geniş ve ağaçlıydı.","Bu yıl hem okul hem mektep değişti.","Sabah erken kalkıp geç yattı.","Uzun ve kısa çizgileri karıştırma."]}', '{"index":1}', 'Okul ve mektep aynı anlama gelen eş anlamlı kelimelerdir. "Erken-geç" ve "uzun-kısa" zıt anlamlıdır.', 2, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-06', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'fill', 'derived', 'Boşluğa "zor" kelimesinin eş anlamlısını yazınız: Bu soru çok ______ değildi, kolayca çözdük.', '{"blanks":1}', '{"blanks":[["güç"]]}', '"Zor" ile **güç** eş anlamlıdır. ("Güç" kelimesi "kuvvet" anlamında da kullanılır; burada "zor" anlamındadır.)', 1, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-07', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'mcq', 'derived', 'Aşağıdaki cümlelerin hangisinde "ağır" kelimesi mecaz anlamda kullanılmıştır?', '{"choices":["Market poşetleri çok ağırdı.","Ağır sandığı iki kişi taşıdık.","Bu ağır sözler onu çok üzdü.","Fil ağır bir hayvandır."]}', '{"index":2}', '"Ağır söz", kırıcı ve incitici söz demektir; kelime gerçek anlamından (kütlesi fazla) uzaklaşmıştır. Diğer cümlelerde "ağır" gerçek anlamdadır.', 2, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-08', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'mcq', 'derived', 'Aşağıdaki cümlelerin hangisinde "açı" kelimesi terim anlamda kullanılmıştır?', '{"choices":["Olaya bir de onun açısından bak.","Üçgenin iç açılarının toplamı 180 derecedir.","Fotoğrafı farklı bir açıdan çekti.","Bu konuya yeni bir açıdan yaklaştı."]}', '{"index":1}', 'Matematikte "açı" iki ışının arasındaki açıklığı anlatan bir terimdir. Diğer cümlelerde kelime "bakış, görüş yeri" anlamında kullanılmıştır.', 2, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-09', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'yaz', 'derived', '"Tatlı" kelimesini önce gerçek, sonra mecaz anlamıyla birer cümlede kullanınız.', '{}', '{}', '**Örnek cevap:**
- Gerçek anlam: *Annem bayram için tatlı yaptı.* (şekerli yiyecek, tadı şekerli)
- Mecaz anlam: *Komşumuz bize her zaman tatlı sözlerle seslenir.* (hoş, gönül alıcı)

**Puanlama:** Her doğru cümle yarı puan.', 2, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-10', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'tf', 'derived', '"Kardeşim bugün çok **soğuk** davrandı." cümlesinde "soğuk" kelimesi gerçek anlamda kullanılmıştır.', '{}', '{"value":false}', 'Burada "soğuk" ısısı düşük demek değildir; ilgisiz, sevgisiz davranmak anlamında **mecaz** olarak kullanılmıştır.', 1, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-11', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'mcq', 'derived', '"Kitabın son bölümünü okurken gözlerim **doldu**."

Cümlede "dolmak" kelimesi hangi anlamda kullanılmıştır?', '{"choices":["Bir kabın içi tamamen kaplanmak","Ağlayacak gibi olmak, gözü yaşarmak","Bir yerin kalabalıklaşması","Bir sürenin bitmesi"]}', '{"index":1}', '"Gözleri dolmak", duygulanıp ağlayacak duruma gelmek demektir. Kelime burada mecaz anlamdadır.', 2, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-12', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'mcq', 'derived', '"Sınav sonucunu öğrenince **etekleri zil çaldı**."

Cümlede kalın yazılan deyimin anlamı aşağıdakilerden hangisidir?', '{"choices":["Çok sevinmek","Çok korkmak","Çok şaşırmak","Çok üzülmek"]}', '{"index":0}', '"Etekleri zil çalmak", çok sevinmek demektir.', 1, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-13', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi bir atasözüdür?', '{"choices":["Göz atmak","Ağzı kulaklarına varmak","Damlaya damlaya göl olur.","Kulak vermek"]}', '{"index":2}', '"Damlaya damlaya göl olur." küçük birikimlerin zamanla büyüyeceği öğüdünü veren bir atasözüdür. Diğerleri deyimdir; deyimler öğüt vermez, bir durumu anlatır.', 1, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-14', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'yaz', 'derived', '"Ayağını yorganına göre uzat." atasözünün anlamını yazınız ve bu atasözüne uygun bir durum örneği veriniz.', '{}', '{}', '**Örnek cevap:** Harcamalarını gelirine, imkânlarına göre yapmalısın. *Örnek:* Harçlığı az olan bir öğrencinin, parasının yetmeyeceği pahalı bir oyuncak yerine birikimine uygun bir kitap alması.

**Puanlama:** Anlam yarı puan, atasözüne uyan durum yarı puan.', 2, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-15', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'mcq', 'derived', 'Aşağıdaki cümlelerin hangisinde ikileme kullanılmıştır?', '{"choices":["Çocuklar bahçede top oynadı.","Yağmur damla damla yağıyordu.","Annem bize kek yaptı.","Okul dönüşü parka uğradık."]}', '{"index":1}', '"Damla damla" bir kelimenin tekrarıyla oluşmuş bir ikilemedir; yağmurun yağış biçimini güçlendirerek anlatır.', 1, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-16', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'fill', 'derived', 'Aşağıdaki deyimi boşluğa uygun kelimeyi yazarak tamamlayınız. (Anlamı: söylenenleri dikkatle dinlemek)

Öğretmenin anlattıklarına kulak ______.', '{"blanks":1}', '{"blanks":[["verdik","verdim","verdi","vermek","verin","verdiler"]]}', '"Kulak vermek" deyimi söylenenleri dikkatle dinlemek anlamındadır.', 2, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sv-17', 'sinif6-turkce', 't6-u1-soz-varligi', 1, 'yaz', 'derived', '"Göz" kelimesiyle kurulmuş iki deyim yazınız ve her birini anlamına uygun bir cümlede kullanınız.', '{}', '{}', '**Örnek cevap:**
- *Göz atmak* (kısaca bakmak): Sınavdan önce notlarıma göz attım.
- *Göz yummak* (görmezden gelmek): Kardeşimin küçük hatasına göz yumdum.

Göz kulak olmak, gözden düşmek, göze girmek gibi deyimler de kabul edilir.

**Puanlama:** Her deyim ve doğru cümlesi yarı puan.', 2, 'T.O.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yp-01', 'sinif6-turkce', 't6-u1-yazma', 1, 'mcq', 'derived', '"Kitap okumanın faydaları" konulu bir yazının **giriş** bölümünde aşağıdakilerden hangisinin yer alması en uygundur?', '{"choices":["Yazının konusunun tanıtılması","Yazının ana fikrinin son kez vurgulanması","Okunacak kitapların sayfa sayıları","Yazıda sözü edilen kitapların özetleri"]}', '{"index":0}', 'Giriş bölümünde konu tanıtılır ve okurun ilgisi çekilir. Ana fikrin son kez vurgulanması sonuç bölümünün işidir; özetler ve ayrıntılar gelişme bölümünde yer alır.', 1, 'T.Y.6.3 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yp-02', 'sinif6-turkce', 't6-u1-yazma', 1, 'mcq', 'derived', 'Bir öğrenci "Türkçemizi doğru kullanalım" başlıklı bir yazı yazacaktır. Aşağıdaki cümlelerden hangisi bu yazının **ana fikri** olmaya en uygundur?', '{"choices":["Türkçe dünyada çok konuşulan diller arasındadır.","Dilimizi doğru kullanmak onu korumanın en iyi yoludur.","Bazı kelimeler başka dillerden gelmiştir.","Sözlükte binlerce kelime vardır."]}', '{"index":1}', 'Başlık, okura bir öğüt veriyor: Türkçeyi doğru kullanmak. Ana fikir de bu öğüdün nedenini söyleyen cümledir. Diğer cümleler yazıda yardımcı bilgi olarak kullanılabilir.', 2, 'T.Y.6.3 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yp-03', 'sinif6-turkce', 't6-u1-yazma', 1, 'yaz', 'derived', '"En sevdiğim kelime" konulu bir yazı yazacaksınız. Yazınızın **giriş, gelişme ve sonuç** bölümlerinde neler anlatacağınızı birer cümleyle planlayınız.', '{}', '{}', '**Örnek cevap:**
- *Giriş:* En sevdiğim kelimenin "gökkuşağı" olduğunu ve onu neden seçtiğimi söylerim.
- *Gelişme:* Kelimenin "gök" ve "kuşak" kelimelerinden nasıl oluştuğunu ve bana hatırlattığı bir anıyı anlatırım.
- *Sonuç:* Kelimelerin bize duygular hissettirdiğini, dilimizin bu yüzden zengin olduğunu belirtirim.

**Puanlama:** Her bölüm için konuya uygun bir cümle puanın üçte biri.', 2, 'T.Y.6.3 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yp-04', 'sinif6-turkce', 't6-u1-yazma', 1, 'mcq', 'derived', '"Okul bahçemizi nasıl güzelleştirebiliriz?" sorusuna cevap veren bir yazı için aşağıdaki metin türlerinden hangisi en uygundur?', '{"choices":["Masal","Şiir","Bilgilendirici metin","Fıkra"]}', '{"index":2}', 'Yazı bir soruya öneriler ve bilgiler vererek cevap verecektir; bunun için **bilgilendirici metin** uygundur. Masal ve fıkra hayal ürünü olay anlatır, şiir duygu ve düşünceyi dizelerle verir.', 2, 'T.Y.6.3 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yp-05', 'sinif6-turkce', 't6-u1-yazma', 1, 'yaz', 'derived', '"Dilimizin zenginliği" konusunda bir paragraf yazacaksınız. Paragrafınızın konusunu ve ana fikrini birer cümleyle yazınız; sonra ana fikri destekleyecek iki örnek belirtiniz.', '{}', '{}', '**Örnek cevap:**
- *Konu:* Türkçenin kelime ve söz bakımından zenginliği.
- *Ana fikir:* Türkçe, duygu ve düşüncelerimizi farklı biçimlerde anlatmamızı sağlayan zengin bir dildir.
- *Destekleyen örnekler:* Aynı anlamı veren farklı kelimeler (güzel, hoş, latif); bir durumu kısaca anlatan deyim ve atasözleri ("damlaya damlaya göl olur").

**Puanlama:** Konu ve ana fikir yarı puan, iki uygun örnek yarı puan.', 3, 'T.Y.6.3 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sk-01', 'sinif6-turkce', 't6-u1-yazma', 1, 'mcq', 'derived', '"Sabah erkenden uyandım. Sonra kahvaltı yaptım. Sonra çantamı hazırladım. Sonra okula gittim."

Bu metinde aynı kelimenin tekrarlanmasından kaynaklanan anlatım kusurunu gidermek için "sonra" kelimelerinin yerine sırasıyla hangileri kullanılabilir?', '{"choices":["Ardından, daha sonra, en sonunda","Ama, fakat, ancak","Çünkü, bu yüzden, bu nedenle","Belki, sanki, galiba"]}', '{"index":0}', 'Olaylar sırayla anlatılıyor; sıra bildiren "ardından, daha sonra, en sonunda" sözleri hem tekrarı önler hem de anlamı korur. Diğer seçeneklerdeki sözler karşıtlık, sebep ya da tahmin bildirir.', 1, 'T.Y.6.18 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sk-02', 'sinif6-turkce', 't6-u1-yazma', 1, 'yaz', 'derived', '"Hava çok güzeldi. Parkta çok güzel çiçekler vardı. Çocuklar çok güzel oyunlar oynuyordu."

Bu metinde "güzel" kelimesinin tekrarını önleyecek biçimde cümleleri yeniden yazınız.', '{}', '{}', '**Örnek cevap:** Hava çok **güneşliydi**. Parkta **rengârenk** çiçekler vardı. Çocuklar **eğlenceli** oyunlar oynuyordu.

**Puanlama:** Her cümlede anlama uygun farklı bir kelime puanın üçte biri.', 2, 'T.Y.6.18 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sk-03', 'sinif6-turkce', 't6-u1-yazma', 1, 'mcq', 'derived', '"Dedem çok yaşlı olmasına rağmen her sabah ______ yürüyüşe çıkar."

Bu cümlede boş bırakılan yere aşağıdaki ikilemelerden hangisi anlama en uygun olarak getirilebilir?', '{"choices":["Yavaş yavaş","Koşa koşa","Bağıra bağıra","Ağlaya ağlaya"]}', '{"index":0}', 'Yaşlı olmasına rağmen yürüyüşe çıkan dedenin yürüyüşünü en iyi "yavaş yavaş" ikilemesi anlatır; cümlenin anlamıyla uyumludur.', 2, 'T.Y.6.18 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-sk-04', 'sinif6-turkce', 't6-u1-yazma', 1, 'yaz', 'derived', '"Ağzı kulaklarına varmak" deyimini kullanarak bir doğum günü sabahını anlatan iki cümlelik bir metin yazınız.', '{}', '{}', '**Örnek cevap:** Sabah uyandığımda masada beni bekleyen hediyeyi gördüm. Ailemin hazırladığı sürprizle **ağzım kulaklarıma vardı**.

**Puanlama:** Deyimin anlamına (çok sevinmek) uygun kullanılması yarı puan, konuya uygun iki cümle yarı puan.', 2, 'T.Y.6.18 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-01', 'sinif6-turkce', 't6-u1-yazim', 1, 'mcq', 'derived', 'Aşağıdaki cümlelerin hangisinde "de/da" bağlacının yazımı **yanlıştır**?', '{"choices":["Ben de sizinle gelmek istiyorum.","Kardeşimde bu kitabı okudu.","Okulda yeni bir kulüp açıldı.","Annem de babam da çok sevindi."]}', '{"index":1}', '"Kardeşim de bu kitabı okudu." olmalıdır. Buradaki "de" bağlaçtır ("o da" anlamı katar) ve ayrı yazılır. Cümleden çıkarıldığında cümle bozulmaz: "Kardeşim bu kitabı okudu." "Okulda" kelimesindeki "-da" ise bulunma hâli ekidir ve bitişik yazılır.', 1, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-02', 'sinif6-turkce', 't6-u1-yazim', 1, 'mcq', 'derived', '"**Bahçe de** oynayan çocuklar yağmur başlayınca eve koştu."

Cümlede kalın yazılan sözün doğru yazılışı aşağıdakilerden hangisidir?', '{"choices":["Bahçede","Bahçe da","Bahçe''de","Bahçe te"]}', '{"index":0}', 'Doğrusu "bahçede"dir. Buradaki "-de" bir yeri bildiren bulunma hâli ekidir ("nerede oynayan?" → bahçede) ve kelimeye bitişik yazılır. Kesme işareti yalnızca özel isimlere gelen eklerde kullanılır.', 2, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-03', 'sinif6-turkce', 't6-u1-yazim', 1, 'tf', 'derived', '"Sınıfta kimse yoktu." cümlesindeki "-ta" eki ayrı yazılmalıdır.', '{}', '{"value":false}', '"Sınıfta" kelimesindeki "-ta" bulunma hâli ekidir ve bitişik yazılır. Ek, sert ünsüzle (f) biten kelimeye gelince "-ta" olur; bağlaç olan "da" hiçbir zaman "ta" olmaz.', 1, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-04', 'sinif6-turkce', 't6-u1-yazim', 1, 'yaz', 'derived', 'Bağlaç olan "de" ile ek olan "-de"yi ayırt etmek için kullanılabilecek bir yöntemi yazınız ve bu yöntemi "Evde kimse yoktu, ben de dışarı çıktım." cümlesinde gösteriniz.', '{}', '{}', '**Örnek cevap:** "de" cümleden çıkarılınca cümlenin anlamı bozulmuyorsa (yalnızca "o da, dahi" anlamı kayboluyorsa) bağlaçtır ve ayrı yazılır; çıkarılınca kelime bozuluyorsa ektir ve bitişik yazılır.

*Cümlede:* "Evde" → "Ev kimse yoktu" olur, cümle bozulur; "-de" ektir. "ben de" → "ben dışarı çıktım" olur, cümle bozulmaz; "de" bağlaçtır.

**Puanlama:** Yöntem yarı puan, iki kelimede doğru uygulama yarı puan.', 2, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-05', 'sinif6-turkce', 't6-u1-yazim', 1, 'mcq', 'derived', 'Aşağıdaki cümlelerin hangisinde "ki"nin yazımı **yanlıştır**?', '{"choices":["Duydum ki yarın tatilmiş.","Masadaki kitabı bana verir misin?","Öyle yoruldum ki hemen uyudum.","Yarın ki maçı kaçırmayacağım."]}', '{"index":3}', '"Yarınki" bitişik yazılmalıdır. "Yarınki maç" sözünde "-ki" ilgi ekidir: kelimeyi sıfat yapar ve bitişik yazılır. Bağlaç olan "ki" (duydum ki, öyle yoruldum ki) ayrı yazılır.', 2, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-06', 'sinif6-turkce', 't6-u1-yazim', 1, 'mcq', 'derived', 'Aşağıdaki kelimelerin hangisi "ki" bağlacı olmasına rağmen kalıplaştığı için **bitişik** yazılır?', '{"choices":["Bahçedeki","Belki","Akşamki","Seninki"]}', '{"index":1}', '"Belki" kalıplaşmış bir kelimedir ve bitişik yazılır; çünkü, sanki, oysaki, mademki ve hâlbuki de böyledir. Diğer üç kelimedeki "-ki" ektir ve zaten bitişik yazılır.', 2, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-07', 'sinif6-turkce', 't6-u1-yazim', 1, 'yaz', 'derived', 'Aşağıdaki cümlede yazımı yanlış olan sözü bulunuz ve cümleyi doğru biçimiyle yeniden yazınız.

"Duvar daki resmi geçen yıl ben yapmıştım."', '{}', '{}', '**Örnek cevap:** "Duvardaki resmi geçen yıl ben yapmıştım."

"Duvarda" kelimesine gelen "-ki" ilgi ekidir; kelime bulunma hâli ekiyle birlikte bitişik yazılır: duvar-da-ki.

**Puanlama:** Yanlış sözü bulmak yarı puan, doğru yazmak yarı puan.', 2, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-08', 'sinif6-turkce', 't6-u1-yazim', 1, 'mcq', 'derived', 'Aşağıdaki cümlelerin hangisinde soru ekinin yazımı **doğrudur**?', '{"choices":["Yarın okula gelecekmisin?","Bu kitabı okudun mu?","Ödevini bitirdinmi?","Sen de geliyormusun?"]}', '{"index":1}', 'Soru eki "mı, mi, mu, mü" kendinden önceki kelimeden ayrı yazılır: okudun mu. Doğrusu "gelecek misin, bitirdin mi, geliyor musun" biçimindedir.', 1, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-09', 'sinif6-turkce', 't6-u1-yazim', 1, 'mcq', 'derived', '"Annen seni **bekliyormu**?"

Cümlede kalın yazılan sözün doğru yazılışı aşağıdakilerden hangisidir?', '{"choices":["bekliyor mu","bekliyor-mu","bekliyormı","bekliyor mı"]}', '{"index":0}', 'Soru eki ayrı yazılır ve ünlü uyumuna uyar: "bekliyor" kelimesinin son ünlüsü "o" olduğu için ek "mu" olur. Soru ekinden sonra gelen ekler ise ona bitişik yazılır: bekliyor musun, bekliyor muydu.', 1, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-10', 'sinif6-turkce', 't6-u1-yazim', 1, 'tf', 'derived', '"Gelecek misiniz?" sözünde "-siniz" eki soru ekine bitişik yazılmıştır ve bu yazım doğrudur.', '{}', '{"value":true}', 'Soru eki kendinden önceki kelimeden ayrı yazılır, ama kendinden sonra gelen ekler soru ekine bitişir: mi + siniz → misiniz.', 1, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-11', 'sinif6-turkce', 't6-u1-yazim', 1, 'mcq', 'derived', '"Pazardan elma ( ) armut ( ) muz ve portakal aldık."

Bu cümlede ayraçlarla gösterilen yerlere hangi noktalama işareti konmalıdır?', '{"choices":["Nokta","Virgül","İki nokta","Ünlem"]}', '{"index":1}', 'Eş görevli kelimeler (sıralanan meyveler) arasına **virgül** konur. Son iki kelime arasında "ve" bağlacı olduğu için virgül kullanılmaz.', 1, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-12', 'sinif6-turkce', 't6-u1-yazim', 1, 'mcq', 'derived', 'Aşağıdaki cümlelerin hangisinde virgül, **hitap** sözünden sonra kullanılmıştır?', '{"choices":["Evet, bu akşam size geleceğiz.","Sevgili arkadaşlarım, sizi çok özledim.","Kitabı aldım, okudum, geri verdim.","Ankara, İzmir ve Bursa''yı gezdik."]}', '{"index":1}', '"Sevgili arkadaşlarım" bir seslenme (hitap) sözüdür ve kendisinden sonra virgül konur. Diğer cümlelerde virgül; cevap bildiren "evet"ten sonra, sıralı cümleler arasında ve eş görevli kelimeler arasında kullanılmıştır.', 2, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-13', 'sinif6-turkce', 't6-u1-yazim', 1, 'yaz', 'derived', 'Aşağıdaki cümleyi gerekli yerlere virgül koyarak yeniden yazınız.

"Hayır bugün parka gitmeyeceğiz çünkü hava çok soğuk."', '{}', '{}', '**Örnek cevap:** "Hayır, bugün parka gitmeyeceğiz çünkü hava çok soğuk."

Cevap bildiren "hayır" kelimesinden sonra virgül konur. "Çünkü" bağlacından önce virgül gerekmez.

**Puanlama:** "Hayır"dan sonra virgül tam puan.', 2, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-1-yz-14', 'sinif6-turkce', 't6-u1-yazim', 1, 'mcq', 'derived', 'Aşağıdaki cümlelerin hangisinde virgül, **sıralı cümleleri** ayırmak için kullanılmıştır?', '{"choices":["Ali, Ayşe ve Can sınıfa girdi.","Eve geldim, ellerimi yıkadım, yemeğe oturdum.","Hayır, ben görmedim.","Sevgili öğretmenim, size teşekkür ederim."]}', '{"index":1}', '"Eve geldim", "ellerimi yıkadım" ve "yemeğe oturdum" ayrı yüklemleri olan sıralı cümlelerdir; aralarına virgül konmuştur. Diğer cümlelerde virgül eş görevli kelimeler arasında, cevap bildiren sözden sonra ve hitaptan sonra kullanılmıştır.', 2, 'T.Y.6.21 · 1. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-ke-01', 'sinif6-turkce', 't6-u2-kok-ek', 2, 'mcq', 'derived', '"Gözlükçü" kelimesinin kökü aşağıdakilerden hangisidir?', '{"choices":["Göz","Gözlük","Gözlükçü","Gö"]}', '{"index":0}', 'Kelimeden ekleri tek tek atarız: gözlükçü → gözlük → göz. "Göz" anlamlı ve daha küçük parçalara ayrılamayan ilk bölümdür, yani köktür.', 1, 'T.O.6.21 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-ke-02', 'sinif6-turkce', 't6-u2-kok-ek', 2, 'fill', 'derived', '"Kitaplıklarımızda" kelimesinin kökünü yazınız.', '{"blanks":1}', '{"blanks":[["kitap"]]}', 'kitap-lık-lar-ımız-da: kök **kitap**tır. "-lık" yeni bir kelime türetir (kitaplık), diğer ekler kelimenin cümledeki görevini belirler.', 1, 'T.O.6.21 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-ke-03', 'sinif6-turkce', 't6-u2-kok-ek', 2, 'yaz', 'derived', '"Bağımsızlık" kelimesini kök ve eklerine ayırınız. Her ekin kelimeye kattığı anlamı kısaca yazınız.', '{}', '{}', '**Örnek cevap:** bağ-ım-sız-lık
- *bağ-*: kök (bağlamak eyleminin kökü)
- *-ım*: "bağım" (bağlı olma durumu)
- *-sız*: "bağımsız" (bağlı olmayan)
- *-lık*: "bağımsızlık" (bağımsız olma durumu)

**Puanlama:** Kökü bulmak yarı puan, ekleri doğru ayırmak yarı puan. Eklerin anlamı tam yazılmasa da ayırma doğruysa puan verilir.', 2, 'T.O.6.21 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-ke-04', 'sinif6-turkce', 't6-u2-kok-ek', 2, 'tf', 'derived', '"Yolcular" kelimesinin kökü "yolcu"dur.', '{}', '{"value":false}', 'yol-cu-lar: kök **yol**dur. "Yolcu" kökten türetilmiş bir kelimedir (gövde), kök değildir.', 1, 'T.O.6.21 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-yc-01', 'sinif6-turkce', 't6-u2-kok-ek', 2, 'mcq', 'derived', 'Aşağıdaki kelimelerin hangisinde **yapım eki** vardır?', '{"choices":["Kitaplar","Evden","Tuzluk","Okulda"]}', '{"index":2}', '"Tuz" kelimesine gelen "-luk" eki yeni anlamda bir kelime (tuzluk: tuz konan kap) türetmiştir; yapım ekidir. Diğerlerindeki ekler (-lar, -den, -da) kelimenin anlamını değiştirmeyen çekim ekleridir.', 2, 'T.O.6.21 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-yc-02', 'sinif6-turkce', 't6-u2-kok-ek', 2, 'mcq', 'derived', '"Askerler cepheye koştu."

Cümlesindeki "askerler" kelimesine gelen "-ler" eki ile ilgili aşağıdakilerden hangisi doğrudur?', '{"choices":["Yeni bir kelime türetmiştir.","Çokluk bildiren bir çekim ekidir.","Kelimenin kökünü değiştirmiştir.","Kelimeyi eylem yapmıştır."]}', '{"index":1}', '"-ler" kelimenin anlamını değiştirmez, yalnızca birden fazla asker olduğunu bildirir; çokluk bildiren bir **çekim** ekidir.', 2, 'T.O.6.21 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-yc-03', 'sinif6-turkce', 't6-u2-kok-ek', 2, 'yaz', 'derived', '"Göz" kelimesine yapım ekleri getirerek yeni anlamda üç kelime türetiniz. Sonra bu kelimelerden birine bir çekim eki ekleyerek bir cümlede kullanınız.', '{}', '{}', '**Örnek cevap:** göz-lük, göz-cü, göz-le (gözlemek).

*Cümle:* Babam yeni **gözlüğünü** masada unuttu. ("-ü" ve "-nü" anlamı değiştirmeyen çekim ekleridir.)

**Puanlama:** Üç kelime yarı puan, çekim ekli kelimenin cümlede doğru kullanımı yarı puan.', 2, 'T.O.6.21 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-yc-04', 'sinif6-turkce', 't6-u2-kok-ek', 2, 'tf', 'derived', 'Çekim ekleri kelimenin anlamını değiştirmez; yapım ekleri ise yeni anlamda kelimeler türetir.', '{}', '{"value":true}', '"Göz-ler" yine gözdür (çekim eki), "göz-lük" ise bambaşka bir nesnedir (yapım eki).', 1, 'T.O.6.21 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-ks-01', 'sinif6-turkce', 't6-u2-karsilastirma', 2, 'mcq', 'derived', '> Ankara ile İstanbul, Kurtuluş Savaşı yıllarında çok farklı durumdaydı. İstanbul, işgal altında olduğu için oradaki aydınlar ve askerler Anadolu''ya geçmeye çalışıyordu. Ankara ise küçük bir kasaba olmasına rağmen savaşın yönetildiği merkez hâline geldi. İstanbul''un limanı, sarayları ve kalabalık nüfusu vardı; Ankara''nın ise demir yolu istasyonu ve güvenli konumu. Bu yüzden Ankara, İstanbul kadar büyük olmasa da yeni devletin başkenti olmaya daha uygundu.

Metinde Ankara ile İstanbul hangi yönden karşılaştırılmamıştır?', '{"choices":["Savaş yıllarındaki durumları","Büyüklükleri","İklimleri","Başkent olmaya uygunlukları"]}', '{"index":2}', 'Metinde iki şehrin savaştaki durumu, büyüklüğü ve sahip oldukları (liman, istasyon) ile başkent olmaya uygunlukları karşılaştırılıyor. İklimden söz edilmiyor.', 2, 'T.O.6.10 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-ks-02', 'sinif6-turkce', 't6-u2-karsilastirma', 2, 'yaz', 'derived', '> Ankara ile İstanbul, Kurtuluş Savaşı yıllarında çok farklı durumdaydı. İstanbul, işgal altında olduğu için oradaki aydınlar ve askerler Anadolu''ya geçmeye çalışıyordu. Ankara ise küçük bir kasaba olmasına rağmen savaşın yönetildiği merkez hâline geldi. İstanbul''un limanı, sarayları ve kalabalık nüfusu vardı; Ankara''nın ise demir yolu istasyonu ve güvenli konumu. Bu yüzden Ankara, İstanbul kadar büyük olmasa da yeni devletin başkenti olmaya daha uygundu.

Metinde karşılaştırma yapmak için kullanılan iki sözü (kelime ya da kalıp) yazınız.', '{}', '{}', '**Örnek cevap:** "kadar" (İstanbul kadar büyük olmasa da), "daha" (daha uygundu), "ise" (Ankara ise ...), "farklı".

**Puanlama:** Her doğru söz yarı puan.', 2, 'T.O.6.10 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-ks-03', 'sinif6-turkce', 't6-u2-karsilastirma', 2, 'mcq', 'derived', 'Aşağıdaki cümlelerin hangisinde bir karşılaştırma yapılmıştır?', '{"choices":["Kardeşim benden daha uzun boylu.","Bugün okulda resim yaptık.","Kitabı rafa geri koydum.","Yarın hava güneşli olacakmış."]}', '{"index":0}', '"Benden daha uzun" sözünde iki kişi boy bakımından karşılaştırılıyor; "-den daha" karşılaştırma bildirir.', 1, 'T.O.6.10 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('t6-2-ks-04', 'sinif6-turkce', 't6-u2-karsilastirma', 2, 'fill', 'derived', 'Boşluğa karşılaştırma bildiren uygun kelimeyi yazınız: Bu yolculuk, geçen yılki ______ yorucu değildi.', '{"blanks":1}', '{"blanks":[["kadar"]]}', '"Geçen yılki **kadar** yorucu değildi" cümlesinde iki yolculuk yorgunluk bakımından karşılaştırılıyor.', 1, 'T.O.6.10 · 2. tema', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-anlam-tahmin', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-ka-01';
UPDATE questions SET kavram = 'u1-anlam-tahmin', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-ka-02';
UPDATE questions SET kavram = 'u1-anlam-tahmin', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-ka-03';
UPDATE questions SET kavram = 'u1-anlam-tahmin', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-ka-04';
UPDATE questions SET kavram = 'u1-anlam-tahmin', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-ka-05';
UPDATE questions SET kavram = 'u1-anlam-tahmin', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-ka-06';
UPDATE questions SET kavram = 'u1-anlam-tahmin', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-ka-07';
UPDATE questions SET kavram = 'u1-anlam-tahmin', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-ka-08';
UPDATE questions SET kavram = 'u1-anlam-tahmin', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-ka-09';
UPDATE questions SET kavram = 'u1-yuzey-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yu-01';
UPDATE questions SET kavram = 'u1-yuzey-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yu-02';
UPDATE questions SET kavram = 'u1-yuzey-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yu-03';
UPDATE questions SET kavram = 'u1-yuzey-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yu-04';
UPDATE questions SET kavram = 'u1-yuzey-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yu-05';
UPDATE questions SET kavram = 'u1-yuzey-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yu-06';
UPDATE questions SET kavram = 'u1-yuzey-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yu-07';
UPDATE questions SET kavram = 'u1-yuzey-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yu-08';
UPDATE questions SET kavram = 'u1-yuzey-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yu-09';
UPDATE questions SET kavram = 'u1-yuzey-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yu-10';
UPDATE questions SET kavram = 'u1-yuzey-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yu-11';
UPDATE questions SET kavram = 'u1-anahtar-kelime', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-an-01';
UPDATE questions SET kavram = 'u1-anahtar-kelime', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-an-02';
UPDATE questions SET kavram = 'u1-anahtar-kelime', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-an-03';
UPDATE questions SET kavram = 'u1-anahtar-kelime', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-an-04';
UPDATE questions SET kavram = 'u1-anahtar-kelime', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-an-05';
UPDATE questions SET kavram = 'u1-anahtar-kelime', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-an-06';
UPDATE questions SET kavram = 'u1-anahtar-kelime', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-an-07';
UPDATE questions SET kavram = 'u1-es-zit-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-01';
UPDATE questions SET kavram = 'u1-es-zit-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-02';
UPDATE questions SET kavram = 'u1-es-zit-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-03';
UPDATE questions SET kavram = 'u1-es-zit-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-04';
UPDATE questions SET kavram = 'u1-es-zit-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-05';
UPDATE questions SET kavram = 'u1-es-zit-anlam', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-06';
UPDATE questions SET kavram = 'u1-gercek-mecaz', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-07';
UPDATE questions SET kavram = 'u1-gercek-mecaz', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-08';
UPDATE questions SET kavram = 'u1-gercek-mecaz', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-09';
UPDATE questions SET kavram = 'u1-gercek-mecaz', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-10';
UPDATE questions SET kavram = 'u1-gercek-mecaz', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-11';
UPDATE questions SET kavram = 'u1-deyim-atasozu', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-12';
UPDATE questions SET kavram = 'u1-deyim-atasozu', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-13';
UPDATE questions SET kavram = 'u1-deyim-atasozu', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-14';
UPDATE questions SET kavram = 'u1-deyim-atasozu', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-15';
UPDATE questions SET kavram = 'u1-deyim-atasozu', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-16';
UPDATE questions SET kavram = 'u1-deyim-atasozu', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sv-17';
UPDATE questions SET kavram = 'u1-yazi-plani', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yp-01';
UPDATE questions SET kavram = 'u1-yazi-plani', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yp-02';
UPDATE questions SET kavram = 'u1-yazi-plani', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yp-03';
UPDATE questions SET kavram = 'u1-yazi-plani', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yp-04';
UPDATE questions SET kavram = 'u1-yazi-plani', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yp-05';
UPDATE questions SET kavram = 'u1-sozvarligi-kullanma', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sk-01';
UPDATE questions SET kavram = 'u1-sozvarligi-kullanma', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sk-02';
UPDATE questions SET kavram = 'u1-sozvarligi-kullanma', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sk-03';
UPDATE questions SET kavram = 'u1-sozvarligi-kullanma', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-sk-04';
UPDATE questions SET kavram = 'u1-de-da', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-01';
UPDATE questions SET kavram = 'u1-de-da', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-02';
UPDATE questions SET kavram = 'u1-de-da', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-03';
UPDATE questions SET kavram = 'u1-de-da', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-04';
UPDATE questions SET kavram = 'u1-ki', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-05';
UPDATE questions SET kavram = 'u1-ki', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-06';
UPDATE questions SET kavram = 'u1-ki', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-07';
UPDATE questions SET kavram = 'u1-mi', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-08';
UPDATE questions SET kavram = 'u1-mi', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-09';
UPDATE questions SET kavram = 'u1-mi', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-10';
UPDATE questions SET kavram = 'u1-virgul', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-11';
UPDATE questions SET kavram = 'u1-virgul', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-12';
UPDATE questions SET kavram = 'u1-virgul', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-13';
UPDATE questions SET kavram = 'u1-virgul', yedek = 0, etiketler = 'turetilmis,yazili1' WHERE id = 't6-1-yz-14';
UPDATE questions SET kavram = 'u2-kok-ek', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-ke-01';
UPDATE questions SET kavram = 'u2-kok-ek', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-ke-02';
UPDATE questions SET kavram = 'u2-kok-ek', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-ke-03';
UPDATE questions SET kavram = 'u2-kok-ek', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-ke-04';
UPDATE questions SET kavram = 'u2-yapim-cekim', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-yc-01';
UPDATE questions SET kavram = 'u2-yapim-cekim', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-yc-02';
UPDATE questions SET kavram = 'u2-yapim-cekim', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-yc-03';
UPDATE questions SET kavram = 'u2-yapim-cekim', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-yc-04';
UPDATE questions SET kavram = 'u2-karsilastirma', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-ks-01';
UPDATE questions SET kavram = 'u2-karsilastirma', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-ks-02';
UPDATE questions SET kavram = 'u2-karsilastirma', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-ks-03';
UPDATE questions SET kavram = 'u2-karsilastirma', yedek = 0, etiketler = 'turetilmis' WHERE id = 't6-2-ks-04';
