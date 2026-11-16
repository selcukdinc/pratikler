-- Bu dosya scripts/sorular-sql.ts ile icerik/sifreleme/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u1', 'sifreleme', 'Kriptografi Neyi Çözer?', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u2', 'sifreleme', 'Rastgelelik ve Entropi', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u3', 'sifreleme', 'Matematik Araç Kutusu', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u4', 'sifreleme', 'Klasik Şifreler ve Kırılmaları', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u5', 'sifreleme', 'XOR, One-Time Pad ve AES', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u6', 'sifreleme', 'Blok Modları, AEAD ve Akış Şifreleri', 6, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u7', 'sifreleme', 'Hash Fonksiyonları', 7, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u8', 'sifreleme', 'MAC ve HMAC', 8, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u9', 'sifreleme', 'Parola Saklama ve KDF', 9, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u10', 'sifreleme', 'RSA ve Diffie-Hellman', 10, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u11', 'sifreleme', 'Eliptik Eğriler ve Dijital İmzalar', 11, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u12', 'sifreleme', 'Sertifikalar, PKI ve TLS', 12, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u13', 'sifreleme', 'Uçtan Uca Şifreli Mesajlaşma: Signal Protokolü', 13, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u14', 'sifreleme', 'Gruplar, Cihazlar ve Metadata', 14, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u15', 'sifreleme', 'Sıfır Bilgili Depolama', 15, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u16', 'sifreleme', 'Görsel Kriptografi ve Steganografi', 16, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u17', 'sifreleme', 'Saldırılar ve Uygulama Hataları', 17, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u18', 'sifreleme', 'Post-Kuantum Kriptografi', 18, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('sf-u19', 'sifreleme', 'Vaka Çalışmaları ve Tasarım', 19, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-gizlilik', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Bir mesajı yalnız alıcının okuyabilmesini sağlamak, kriptografinin hangi güvenlik hedefidir?', '{"choices":["Gizlilik","Bütünlük","Kimlik doğrulama","Erişilebilirlik"]}', '{"index":0}', '**Gizlilik** (confidentiality), bilginin yalnız yetkili kişilerce okunabilmesidir ve şifrelemeyle sağlanır. Bütünlük değişikliğin fark edilmesi, kimlik doğrulama kaynağın kanıtlanmasıdır.', 1, '1. ünite · Gizlilik, bütünlük, kimlik doğrulama ve inkâr edilemezlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-butunluk', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Bir bankanın sunucusu, "100 TL gönder" isteğinin yolda "900 TL gönder" diye değiştirilmediğinden emin olmak istiyor. Hangi hedef söz konusu?', '{"choices":["Bütünlük","Gizlilik","Erişilebilirlik","Anonimlik"]}', '{"index":0}', 'Verinin fark edilmeden değiştirilememesi **bütünlüktür** (integrity). Mesaj şifreli olsa bile bütünlük ayrıca korunmazsa bazı şifreleme modlarında saldırgan bitleri çevirip içeriği değiştirebilir (6. ünite).', 1, '1. ünite · Gizlilik, bütünlük, kimlik doğrulama ve inkâr edilemezlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-kimlik', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', '"Bu mesaj gerçekten Ayşe''den mi geldi?" sorusunun cevabını veren mekanizma hangi hedefi sağlar?', '{"choices":["Kimlik doğrulama","Gizlilik","Erişilebilirlik","Sıkıştırma"]}', '{"index":0}', 'Mesajın iddia ettiği kaynaktan geldiğini kanıtlamak **kimlik doğrulamadır** (authentication). MAC ve dijital imza bunu sağlar.', 1, '1. ünite · Gizlilik, bütünlük, kimlik doğrulama ve inkâr edilemezlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-inkar', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Bir sözleşmeyi onaylayan kişinin sonradan "Ben onaylamadım" diyememesi hangi hedefin konusudur ve tipik olarak neyle sağlanır?', '{"choices":["İnkâr edilemezlik; dijital imzayla","Gizlilik; simetrik şifrelemeyle","Bütünlük; Base64 kodlamayla","Erişilebilirlik; yedeklemeyle"]}', '{"index":0}', '**İnkâr edilemezlik** (non-repudiation) için yalnız imzalayanın bildiği bir özel anahtarla atılan **dijital imza** gerekir. Ortak anahtarlı bir MAC bunu sağlamaz: anahtarı iki taraf da bildiği için MAC''i karşı taraf da üretebilirdi.', 2, '1. ünite · Gizlilik, bütünlük, kimlik doğrulama ve inkâr edilemezlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-sifre-yetmez', 'sifreleme', 'sf-u1', 1, 'tf', 'derived', 'Bir mesaj şifrelendiyse, yolda değiştirilip değiştirilmediği de kendiliğinden anlaşılır.', '{}', '{"value":false}', 'Yanlış. Şifreleme gizliliği sağlar; bütünlük ayrı bir iştir. Örneğin CTR modunda şifreli metindeki bir bit çevrilince açık metindeki aynı bit çevrilir ve alıcı bunu fark etmez. Bu yüzden bugün **kimlik doğrulamalı şifreleme** (AES-GCM, ChaCha20-Poly1305) kullanılır.', 2, '1. ünite · Gizlilik, bütünlük, kimlik doğrulama ve inkâr edilemezlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-ilke', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Kerckhoffs ilkesine göre bir şifreleme sisteminin güvenliği neye dayanmalıdır?', '{"choices":["Yalnız anahtarın gizli kalmasına","Algoritmanın gizli tutulmasına","Şifreli metnin uzunluğunun gizlenmesine","Kullanılan programlama dilinin bilinmemesine"]}', '{"index":0}', 'Auguste Kerckhoffs 1883''te sistemin düşman eline geçse bile güvenli kalması gerektiğini yazdı: **algoritma herkesçe bilinebilir, gizli olan yalnız anahtardır**. Claude Shannon bunu "düşman sistemi bilir" diye özetledi.', 1, '1. ünite · Kerckhoffs ilkesi: algoritma açık, anahtar gizli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-gizli-algoritma', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Bir girişim, "Kendi geliştirdiğimiz ve kimseye göstermediğimiz bir şifreleme algoritması kullandığımız için verileriniz güvende" diyor. Bu iddianın temel sorunu nedir?', '{"choices":["Güvenliği algoritmanın gizliliğine bağlıyor; algoritma sızınca her şey çöker","Gizli algoritmalar her zaman standart algoritmalardan yavaş çalışır","Kendi algoritmasını yazan şirketlerin yasal olarak lisans alması gerekir","Algoritma gizli olduğu için kullanıcılar şifrelerini çözemez"]}', '{"index":0}', 'Bu **gizlilikle güvenlik** (security through obscurity) yaklaşımıdır. Algoritmalar tersine mühendislikle, sızıntıyla ya da eski bir çalışanla er geç ortaya çıkar. Ayrıca kimse incelemediği için zayıflıkları bilinmez. AES gibi standartlar yıllarca herkesin önünde saldırıya dayanarak seçildi.', 2, '1. ünite · Kerckhoffs ilkesi: algoritma açık, anahtar gizli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-acik-avantaj', 'sifreleme', 'sf-u1', 1, 'tf', 'derived', 'Algoritmanın herkese açık olması, güvenlik açıklarının daha çok kişi tarafından aranıp bulunmasını sağlar.', '{}', '{"value":true}', 'Doğru. AES, SHA-3 ve ML-KEM açık yarışmalarla seçildi; dünyanın dört bir yanındaki araştırmacılar yıllarca saldırdı. Kırılamayan ve iyi incelenmiş bir algoritma, gizli bir algoritmadan çok daha fazla güven verir.', 1, '1. ünite · Kerckhoffs ilkesi: algoritma açık, anahtar gizli', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-fark', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Kilit benzetmesinde algoritma ve anahtar neye karşılık gelir?', '{"choices":["Algoritma kilidin tasarımı, anahtar ise o kilide özel çentikler","Algoritma anahtarın kendisi, anahtar ise kilidin markası","Algoritma kapının malzemesi, anahtar ise kapının rengi","Algoritma kilidi açan kişi, anahtar ise kilidin satıldığı yer"]}', '{"index":0}', 'Bütün kilitler aynı tasarımla (algoritma) üretilebilir; her birini yalnız kendi çentikleri (anahtar) açar. Tasarımı herkes bilebilir, önemli olan çentiklerin gizli kalmasıdır.', 1, '1. ünite · Anahtar ile algoritma farkı ve anahtar uzunluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-128-bit', 'sifreleme', 'sf-u1', 1, 'num', 'derived', '128 bitlik bir AES anahtarı için kaç farklı anahtar vardır? (Üslü yazabilirsin: 2^n)', '{"blanks":1}', '{"blanks":[["2^128","340282366920938463463374607431768211456"]]}', 'Her bit 0 ya da 1 olabildiği için $n$ bitlik anahtar uzayında $2^n$ anahtar vardır: $2^{128} \approx 3{,}4 \times 10^{38}$.', 1, '1. ünite · Anahtar ile algoritma farkı ve anahtar uzunluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-bir-bit', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Anahtar uzunluğu 1 bit artırılınca kaba kuvvetle anahtarı bulmak için gereken deneme sayısı nasıl değişir?', '{"choices":["İki katına çıkar","1 artar","Değişmez","Karesi alınır"]}', '{"index":0}', '$2^{n+1} = 2 \cdot 2^n$. Her ek bit anahtar uzayını ikiye katlar; 128 bitten 256 bite geçmek uzayı $2^{128}$ kat büyütür.', 1, '1. ünite · Anahtar ile algoritma farkı ve anahtar uzunluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-kaba-kuvvet', 'sifreleme', 'sf-u1', 1, 'num', 'derived', '56 bitlik bir anahtarı (eski DES) kaba kuvvetle ararken, saldırgan anahtarı **ortalama** kaç denemede bulur? (Üslü yazabilirsin: 2^n)', '{"blanks":1}', '{"blanks":[["2^55","36028797018963968"]]}', 'Doğru anahtar uzayın herhangi bir yerinde olabilir; ortalama olarak uzayın yarısı denenince bulunur: $2^{56} / 2 = 2^{55}$. DES 1998''de bu yüzden özel bir makineyle birkaç günde kırıldı.', 2, '1. ünite · Anahtar ile algoritma farkı ve anahtar uzunluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-base64-sifre', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Bir uygulama kullanıcı parolalarını veritabanında Base64 ile "şifreleyerek" saklıyor. Bu yaklaşımın sorunu nedir?', '{"choices":["Base64 anahtarsız bir kodlamadır; herkes parolaları anında geri çevirir","Base64 çıktısı çok uzun olduğu için veritabanını gereğinden fazla büyütür","Base64 yalnız İngilizce harfleri desteklediği için Türkçe parolalar bozulur","Base64 ile kodlanan iki farklı parola aynı sonucu verebilir"]}', '{"index":0}', 'Base64 ikili veriyi metin karakterleriyle göstermek için kullanılan bir **kodlamadır**; anahtar yoktur, geri çevirmek için hiçbir sır gerekmez. Parolalar yavaş bir parola hash''iyle (Argon2, bcrypt) saklanır (9. ünite).', 1, '1. ünite · Kodlama (Base64, hex) şifreleme değildir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-base64-coz', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Bir yapılandırma dosyasında `parola: U2lmcmU=` satırı görüyorsun. Base64 olduğunu tahmin ediyorsun. Parola nedir?', '{"choices":["Sifre","Parola","Gizli","Anahtar"]}', '{"index":0}', '`U2lmcmU=` Base64 çözülünce `53 69 66 72 65` baytları çıkar; bunlar ASCII''de **Sifre** demektir. Hiçbir anahtar gerekmedi: kodlama gizlilik sağlamaz.', 1, '1. ünite · Kodlama (Base64, hex) şifreleme değildir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-base64-boyut', 'sifreleme', 'sf-u1', 1, 'num', 'derived', 'Base64 her 3 baytı 4 karakterle gösterir. 30 baytlık bir veri Base64 ile kodlanınca kaç karakter olur?', '{"blanks":1}', '{"blanks":[["40±0"]]}', '30 bayt 3''e tam bölünür: $30 / 3 = 10$ grup, her grup 4 karakter: $10 \times 4 = 40$ karakter. Dolgu (`=`) yalnız bayt sayısı 3''e bölünmediğinde eklenir.', 2, '1. ünite · Kodlama (Base64, hex) şifreleme değildir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-neden-var', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Base64 gibi kodlamalar neden kullanılır?', '{"choices":["İkili veriyi yalnız metin taşıyan kanallarda bozulmadan iletmek için","Veriyi yetkisiz kişilerin okuyamayacağı hale getirmek için","Verinin değiştirilip değiştirilmediğini anlamak için","Veriyi sıkıştırıp daha az yer kaplamasını sağlamak için"]}', '{"index":0}', 'E-posta, JSON ve URL gibi kanallar her baytı taşıyamaz. Base64 ikili veriyi (bir anahtar, bir resim, şifreli metin) güvenli karakterlerle yazar. Boyutu yaklaşık üçte bir büyütür; sıkıştırmaz, gizlemez, bütünlük sağlamaz.', 1, '1. ünite · Kodlama (Base64, hex) şifreleme değildir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-geri-donus', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Kodlama, hash ve şifreleme için hangisi doğrudur?', '{"choices":["Kodlama herkesçe, şifreleme anahtarla geri çevrilir; hash geri çevrilmez","Üçü de anahtarla geri çevrilir, yalnız hızları farklıdır","Hash anahtarla geri çevrilir; kodlama ve şifreleme geri çevrilmez","Kodlama geri çevrilmez; hash ve şifreleme herkesçe geri çevrilir"]}', '{"index":0}', 'Üç işlemin farkı geri dönüşte: **kodlama** sırsız geri çevrilir, **şifreleme** yalnız anahtarla geri çevrilir, **hash** tek yönlüdür ve her uzunluktaki girişi sabit uzunlukta bir özete indirir.', 1, '1. ünite · Kodlama, hash ve şifreleme farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-hash-sabit', 'sifreleme', 'sf-u1', 1, 'tf', 'derived', 'SHA-256''nın çıktısı, girişin 1 bayt ya da 1 GB olmasından bağımsız olarak her zaman 256 bittir.', '{}', '{"value":true}', 'Doğru. Hash fonksiyonları her uzunluktaki girişi sabit uzunlukta bir özete indirir. Bu yüzden hash bir "sıkıştırma" değildir: 1 GB''lık dosyayı 32 bayttan geri elde etmek bilgi kuramı olarak da imkânsızdır.', 1, '1. ünite · Kodlama, hash ve şifreleme farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-hangisi', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Bir yazılım indirme sayfası, dosyanın yanında 64 karakterlik onaltılık bir değer yayınlıyor ve "indirdiğiniz dosyayla karşılaştırın" diyor. Bu değer büyük olasılıkla nedir?', '{"choices":["Dosyanın SHA-256 hash''i","Dosyanın Base64 kodlaması","Dosyayı açan AES anahtarı","Dosyanın şifreli kopyası"]}', '{"index":0}', '64 onaltılık karakter $64 \times 4 = 256$ bittir: SHA-256 özeti. İndirdiğin dosyanın hash''i aynı çıkarsa dosya yolda bozulmamıştır. (Saldırgan sayfayı da değiştirebiliyorsa hash yetmez; o zaman imza gerekir.)', 2, '1. ünite · Kodlama, hash ve şifreleme farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-tablo', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisinde işlem ile amacı **yanlış** eşleştirilmiştir?', '{"choices":["Hash: mesajı yalnız alıcının okuyabilmesi","Şifreleme: veriyi anahtarı olmayanlardan gizlemek","Kodlama: ikili veriyi metin kanalında taşımak","Hash: dosyanın bozulmadığını denetlemek"]}', '{"index":0}', 'Hash gizlilik sağlamaz: aynı mesajın hash''ini herkes hesaplayabilir ve tahmin edilebilir mesajlar hash''ten bulunabilir. Gizlilik şifrelemenin işidir.', 2, '1. ünite · Kodlama, hash ve şifreleme farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-hex-a', 'sifreleme', 'sf-u1', 1, 'fill', 'derived', '"A" harfi ASCII ve UTF-8''de 65 sayısıyla gösterilir. Bu baytın onaltılık (hex) yazımı nedir?', '{"blanks":1}', '{"blanks":[["41","0x41"]]}', '$65 = 4 \cdot 16 + 1$, yani onaltılıkta **41** (`0x41`). Bit deseni `0100 0001`: her hex basamağı tam 4 bite karşılık gelir.', 1, '1. ünite · Bit, bayt, hex ve metnin baytlara çevrilmesi (UTF-8)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-utf8-s', 'sifreleme', 'sf-u1', 1, 'num', 'derived', '"ş" harfi UTF-8''de kaç bayt yer kaplar?', '{"blanks":1}', '{"blanks":[["2±0"]]}', 'ASCII dışındaki "ş" (U+015F) UTF-8''de iki baytla yazılır: `C5 9F`. Bu yüzden "şifre" kelimesi 5 harf ama 6 bayttır. Şifreleme baytlar üzerinde çalışır; metin önce baytlara çevrilir.', 1, '1. ünite · Bit, bayt, hex ve metnin baytlara çevrilmesi (UTF-8)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-anahtar-hex', 'sifreleme', 'sf-u1', 1, 'num', 'derived', '256 bitlik bir anahtar onaltılık (hex) olarak yazılınca kaç karakter olur?', '{"blanks":1}', '{"blanks":[["64±0"]]}', '256 bit = 32 bayt. Her bayt iki hex karakteriyle yazılır: $32 \times 2 = 64$ karakter.', 2, '1. ünite · Bit, bayt, hex ve metnin baytlara çevrilmesi (UTF-8)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-bit-desen', 'sifreleme', 'sf-u1', 1, 'fill', 'derived', 'Onaltılık `A5` baytının 8 bitlik ikili yazımı nedir?', '{"blanks":1}', '{"blanks":[["10100101"]]}', 'Her hex basamağı 4 bittir: `A` = 10 = `1010`, `5` = `0101`. Birlikte `10100101`.', 2, '1. ünite · Bit, bayt, hex ve metnin baytlara çevrilmesi (UTF-8)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-simetrik', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Simetrik şifrelemenin temel özelliği nedir?', '{"choices":["Şifreleme ve şifre çözmede aynı anahtar kullanılır","Şifreleme açık, şifre çözme özel anahtarla yapılır","Hiç anahtar kullanılmaz, yalnız algoritma gizlidir","Her mesaj için iki ayrı algoritma kullanılır"]}', '{"index":0}', 'Simetrik şifrelemede (AES, ChaCha20) iki taraf **aynı gizli anahtarı** paylaşır. Hızlıdır ama anahtarın karşı tarafa güvenle ulaştırılması ayrı bir sorundur.', 1, '1. ünite · Simetrik ve açık anahtarlı şifrelemeye ilk bakış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-dagitim', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Hiç tanışmamış iki kişinin internette ortak bir gizli anahtara sahip olmasını sağlayan fikir hangisidir?', '{"choices":["Açık anahtarlı kriptografi","Anahtarı Base64 ile kodlayıp e-postayla göndermek","Anahtarı mesajın sonuna ekleyip birlikte göndermek","Anahtar yerine algoritmayı gizli tutmak"]}', '{"index":0}', '1976''da Diffie ve Hellman, dinlenen bir kanaldan ortak sır üretmenin yolunu gösterdi; ardından RSA geldi. Bugün her HTTPS bağlantısında önce açık anahtarlı bir yöntemle oturum anahtarı kurulur, veri sonra hızlı simetrik şifreyle şifrelenir.', 2, '1. ünite · Simetrik ve açık anahtarlı şifrelemeye ilk bakış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-anahtar-sayisi', 'sifreleme', 'sf-u1', 1, 'num', 'derived', '10 kişilik bir grupta herkes herkesle ayrı bir simetrik anahtar paylaşacaksa toplam kaç anahtar gerekir?', '{"blanks":1}', '{"blanks":[["45±0"]]}', 'Her ikili için bir anahtar: $\binom{10}{2} = \frac{10 \cdot 9}{2} = 45$.
---
$n$ kişide $\frac{n(n-1)}{2}$ anahtar gerekir; 1000 kişide bu yaklaşık yarım milyondur. Açık anahtarlı kriptografide ise herkesin bir anahtar çifti yeter.', 3, '1. ünite · Simetrik ve açık anahtarlı şifrelemeye ilk bakış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-tanim', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Bir sistem tasarlarken "Kimden, neyi ve hangi yeteneklere karşı koruyoruz?" sorusunun cevabına ne denir?', '{"choices":["Tehdit modeli","Anahtar uzayı","Şifreleme modu","Güvenlik sertifikası"]}', '{"index":0}', '**Tehdit modeli** olmadan "güvenli" kelimesinin anlamı yoktur. Kafedeki Wi-Fi''ı dinleyen biri, veritabanına erişen bir geliştirici ve telefonu çalan bir hırsız farklı şeyler görür; her birine karşı farklı önlemler gerekir.', 1, '1. ünite · Tehdit modeli: kimden, neyi koruyoruz?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-tls-sunucu', 'sifreleme', 'sf-u1', 1, 'mcq', 'derived', 'Bir mesajlaşma uygulaması yalnız TLS (HTTPS) kullanıyor. Aşağıdakilerden hangisi mesajların içeriğini okuyabilir?', '{"choices":["Sunucuyu işleten şirketin yöneticisi","Kafedeki ağı dinleyen kişi","Kullanıcının internet servis sağlayıcısı","Arada trafiği kaydeden bir yönlendirici"]}', '{"index":0}', 'TLS yalnız **yolu** korur: mesaj sunucuya ulaşınca açılır ve sunucuda okunur halde durur. Sunucuyu işletenlere karşı korunmak için **uçtan uca şifreleme** gerekir (13. ünite).', 2, '1. ünite · Tehdit modeli: kimden, neyi koruyoruz?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u1-mutlak', 'sifreleme', 'sf-u1', 1, 'tf', 'derived', 'İyi tasarlanmış bir sistem, bütün saldırganlara karşı aynı anda ve tam olarak korur.', '{}', '{"value":false}', 'Yanlış. Her önlemin bir maliyeti ve sınırı vardır; örneğin kilidi açık bir telefonu ele geçiren kişi, uçtan uca şifrelemeye rağmen ekrandaki mesajları okur. Tasarım, tehdit modelindeki saldırganlara karşı yapılır ve kalan riskler açıkça yazılır.', 1, '1. ünite · Tehdit modeli: kimden, neyi koruyoruz?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-tanim', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', 'Kriptografide bir değerin entropisi neyi ölçer?', '{"choices":["Saldırganın o değeri tahmin etmesinin ne kadar zor olduğunu","Değerin bellekte kaç bayt yer kapladığını","Değeri şifrelemenin kaç milisaniye sürdüğünü","Değerde kaç farklı karakter kullanıldığını"]}', '{"index":0}', 'Entropi **belirsizliği** bit cinsinden ölçer. $n$ bit entropili bir değeri tahmin etmek için ortalama $2^{n-1}$ deneme gerekir. 32 karakterlik bir parola, hepsi "a" ise neredeyse sıfır entropi taşır: uzunluk entropi değildir.', 1, '2. ünite · Entropi: belirsizliği bit olarak ölçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-zar', 'sifreleme', 'sf-u2', 2, 'num', 'derived', 'Hilesiz bir zarın bir atışı kaç bit entropi taşır? (İki ondalık basamak yeter.)', '{"blanks":1}', '{"blanks":[["2.585±0.01"]]}', '$N$ eşit olasılıklı sonuç için entropi $\log_2 N$ bittir: $\log_2 6 \approx 2{,}585$ bit.', 2, '2. ünite · Entropi: belirsizliği bit olarak ölçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-yazi-tura', 'sifreleme', 'sf-u2', 2, 'num', 'derived', 'Hilesiz bir yazı-tura atışı kaç bit entropi taşır?', '{"blanks":1}', '{"blanks":[["1±0"]]}', 'İki eşit olasılıklı sonuç: $\log_2 2 = 1$ bit. 128 bitlik bir anahtar, 128 yazı-tura atışı kadar belirsizlik ister.', 1, '2. ünite · Entropi: belirsizliği bit olarak ölçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-hileli', 'sifreleme', 'sf-u2', 2, 'tf', 'derived', 'Yüzde 90 yazı gelen hileli bir para da her atışta 1 bit entropi taşır.', '{}', '{"value":false}', 'Yanlış. Shannon entropisi $H = -\sum p \log_2 p$ ile hesaplanır: $-(0{,}9 \log_2 0{,}9 + 0{,}1 \log_2 0{,}1) \approx 0{,}47$ bit. Sonuç önceden kestirilebildikçe entropi düşer.', 2, '2. ünite · Entropi: belirsizliği bit olarak ölçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-pin', 'sifreleme', 'sf-u2', 2, 'num', 'derived', 'Rastgele seçilmiş 4 haneli bir PIN kaç bit entropi taşır? (İki ondalık basamak yeter.)', '{"blanks":1}', '{"blanks":[["13.29±0.01"]]}', '$10^4 = 10\,000$ olası PIN: $\log_2 10\,000 \approx 13{,}29$ bit. Bu çok azdır; telefonlar PIN''i ancak birkaç yanlış denemeden sonra kilitlenerek koruyabilir.', 1, '2. ünite · Parola entropisi ve anahtar uzayı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-kucuk-harf', 'sifreleme', 'sf-u2', 2, 'num', 'derived', 'Yalnız 26 küçük harften **rastgele** seçilmiş 8 karakterlik bir parola kaç bit entropi taşır? (Bir ondalık basamak yeter.)', '{"blanks":1}', '{"blanks":[["37.6±0.1"]]}', 'Her karakter $\log_2 26 \approx 4{,}70$ bit taşır; 8 karakter: $8 \times 4{,}70 \approx 37{,}6$ bit.
---
Eşdeğer formül: $\log_2 26^8$. Bir GPU saniyede milyarlarca hızlı hash deneyebildiği için bu parola, hızlı hash''le saklanmışsa dakikalar içinde düşer.', 2, '2. ünite · Parola entropisi ve anahtar uzayı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-kelime', 'sifreleme', 'sf-u2', 2, 'num', 'derived', '7776 kelimelik bir listeden zarla rastgele seçilen 6 kelimelik bir parola cümlesi kaç bit entropi taşır? (Bir ondalık basamak yeter.)', '{"blanks":1}', '{"blanks":[["77.5±0.1"]]}', 'Her kelime $\log_2 7776 \approx 12{,}92$ bit taşır ($7776 = 6^5$, beş zar atışı). Altı kelime: $6 \times 12{,}92 \approx 77{,}5$ bit. Akılda kalır ve rastgele 12 karakterlik karışık bir paroladan güçlüdür.', 2, '2. ünite · Parola entropisi ve anahtar uzayı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-insan-secimi', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', '"Istanbul2024!" gibi bir parolanın, aynı uzunlukta rastgele bir paroladan çok daha zayıf olmasının nedeni nedir?', '{"choices":["İnsanların seçtiği kalıplar tahmin edilebilir; saldırganın sözlükleri bunları önce dener","Büyük harf ve ünlem işareti parolanın entropisini her zaman düşürür","Sayı içeren parolalar hash fonksiyonlarında daha kısa çıktı üretir","Bu uzunluktaki parolalar sitelerin çoğunda kabul edilmez"]}', '{"index":0}', 'Entropi seçim **yöntemine** bağlıdır, parolanın görünüşüne değil. Şehir adı + yıl + ünlem, sızan parola listelerinden öğrenilmiş bir kalıptır; saldırgan bunları ilk dakikalarda dener.', 1, '2. ünite · Parola entropisi ve anahtar uzayı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-tohum', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', 'Sözde rastgele bir üreteç (PRNG) aynı tohumla iki kez başlatılırsa ne olur?', '{"choices":["Birebir aynı sayı dizisini üretir","Her seferinde tamamen farklı bir dizi üretir","Hata verir ve çalışmayı durdurur","Yalnız ilk sayıyı aynı, sonrakileri farklı üretir"]}', '{"index":0}', 'PRNG **belirlenimci** bir algoritmadır: çıktı tamamen tohum ve iç durumla belirlenir. Bu, benzetimleri tekrarlamak için iyidir; kriptografide ise tohumu tahmin eden saldırgan bütün "rastgele" anahtarları da bilir.', 1, '2. ünite · Sözde rastgele üreteçler (PRNG) ve tohum', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-lcg', 'sifreleme', 'sf-u2', 2, 'num', 'derived', 'Bir doğrusal eşlik üreteci $x_{n+1} = (5 x_n + 3) \bmod 16$ kuralıyla çalışıyor ve tohum $x_0 = 7$. Üretilen ilk sayı $x_1$ nedir?', '{"blanks":1}', '{"blanks":[["6±0"]]}', '$5 \cdot 7 + 3 = 38$ ve $38 \bmod 16 = 6$.
---
Sonraki sayılar: $x_2 = (5 \cdot 6 + 3) \bmod 16 = 1$, $x_3 = 8$. Tek bir çıktıyı gören biri, kuralı biliyorsa bütün diziyi hesaplayabilir.', 2, '2. ünite · Sözde rastgele üreteçler (PRNG) ve tohum', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-lcg-tahmin', 'sifreleme', 'sf-u2', 2, 'num', 'derived', 'Bir oyun sunucusu "rastgele" kart numaralarını $x_{n+1} = (5 x_n + 3) \bmod 16$ ile üretiyor. Son dağıtılan kart 1 idi. Sıradaki kart hangisi?', '{"blanks":1}', '{"blanks":[["8±0"]]}', 'Kural bilindiği için sıradaki değer hesaplanır: $(5 \cdot 1 + 3) \bmod 16 = 8$. Kriptografik olmayan üreteçlerde tek bir çıktı geleceği ele verir; gerçek LCG''lerde birkaç çıktı da parametreleri bulmaya yeter.', 2, '2. ünite · Sözde rastgele üreteçler (PRNG) ve tohum', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-math-random', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', 'Bir web uygulaması parola sıfırlama bağlantısındaki token''ı `Math.random().toString(36)` ile üretiyor. Sorun nedir?', '{"choices":["Math.random kriptografik değildir; çıktıları sonrakini ele verir","Math.random yalnız tam sayı ürettiği için token çok kısa kalır","toString(36) çıktısı URL''de kullanılamayan karakterler içerir","Math.random her tarayıcı açılışında aynı sayıyı verir"]}', '{"index":0}', '`Math.random` hız için tasarlanmış bir PRNG''dir (çoğu motorda xorshift128+); birkaç çıktıdan iç durumu kurtarılabilir. Token''lar `crypto.getRandomValues` ya da `crypto.randomUUID` ile üretilmelidir.', 1, '2. ünite · Sözde rastgele üreteçler (PRNG) ve tohum', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-tarayici', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', 'Tarayıcıda kriptografik olarak güvenli rastgele baytlar hangi çağrıyla üretilir?', '{"choices":["`crypto.getRandomValues()`","`Math.random()`","`Date.now()`","`performance.now()`"]}', '{"index":0}', '`crypto.getRandomValues` işletim sisteminin CSPRNG''sinden beslenir. `Date.now` ve `performance.now` zamandır, tahmin edilebilir; `Math.random` kriptografik değildir.', 1, '2. ünite · Kriptografik güvenli üreteçler (CSPRNG) ve işletim sistemi kaynağı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-ozellik', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', 'Bir üretecin kriptografik olarak güvenli (CSPRNG) sayılması için gereken temel özellik hangisidir?', '{"choices":["Önceki çıktıları bilen, sonraki biti tahmin edemez","Saniyede en az bir milyar sayı üretecek kadar hızlıdır","Ürettiği sayılar her zaman asal sayıdır","Tohumu kullanıcının kendisi seçer"]}', '{"index":0}', 'CSPRNG''nin tanımı **sonraki bit testidir**: çıktıların bir kısmını gören saldırgan, sonraki biti yazı-tura atmaktan daha iyi tahmin edememelidir. Ayrıca iç durum ele geçirilse bile önceki çıktılar geri hesaplanamamalıdır.', 2, '2. ünite · Kriptografik güvenli üreteçler (CSPRNG) ve işletim sistemi kaynağı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-isletim-sistemi', 'sifreleme', 'sf-u2', 2, 'tf', 'derived', 'Linux''ta `getrandom()` çağrısı ve `/dev/urandom`, çekirdeğin donanım olaylarından topladığı entropiyle beslenen bir CSPRNG''den okur.', '{}', '{"value":true}', 'Doğru. Çekirdek kesme zamanlamaları, donanım üreteçleri (varsa RDRAND/RDSEED) gibi kaynaklardan entropi toplar, bunu bir CSPRNG''ye (Linux''ta ChaCha20 tabanlı) tohum yapar. Uygulamalar kendi üreteçlerini yazmak yerine bunu kullanmalıdır.', 1, '2. ünite · Kriptografik güvenli üreteçler (CSPRNG) ve işletim sistemi kaynağı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-kaynak', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', 'Aşağıdakilerden hangisi donanımda gerçek rastgelelik kaynağı olarak kullanılır?', '{"choices":["Bir direncin termal gürültüsü","İşlemcinin saat frekansının sabit değeri","Bellekteki bir dizinin uzunluğu","Kullanıcının kayıtlı doğum tarihi"]}', '{"index":0}', 'Termal (Johnson-Nyquist) gürültü, ters kutuplanmış bir eklemdeki çığ gürültüsü ve serbest çalışan osilatörlerin faz titreşimi (jitter) fiziksel olarak öngörülemeyen kaynaklardır. Ham çıktı yükseltilir, örneklenir ve sonra işlenir.', 1, '2. ünite · Donanım rastgelelik kaynakları: gürültü ve jitter', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-halka', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', 'Halka osilatörlü bir rastgele sayı üretecinde rastgeleliğin kaynağı nedir?', '{"choices":["Periyottaki gürültüden doğan zaman titreşimi","Osilatördeki evirici sayısının her açılışta değişmesi","Osilatörün frekansının yazılımla rastgele seçilmesi","Besleme geriliminin her saniye bilerek değiştirilmesi"]}', '{"index":0}', 'Tek sayıda eviriciden oluşan halka kendi kendine salınır. Transistörlerdeki gürültü her periyodu biraz kısaltır ya da uzatır; bu titreşim, kararlı başka bir saatle örneklenince öngörülemeyen bitler çıkar. FPGA''larda sık kullanılır.', 2, '2. ünite · Donanım rastgelelik kaynakları: gürültü ve jitter', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-isleme', 'sifreleme', 'sf-u2', 2, 'tf', 'derived', 'Gerçek bir donanım kaynağının ham bitleri genellikle doğrudan anahtar olarak kullanılmaz; önce sağlık testlerinden geçirilir ve bir hash ya da CSPRNG ile işlenir.', '{}', '{"value":true}', 'Doğru. Ham kaynak sapmalı (biased) olabilir, sıcaklıkla değişebilir ya da bozulabilir. Sağlık testleri kaynağın çalıştığını izler; şartlandırma (conditioning) adımı sapmayı giderip entropiyi yoğunlaştırır.', 2, '2. ünite · Donanım rastgelelik kaynakları: gürültü ve jitter', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-von-neumann', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', 'Von Neumann yöntemi, sapmalı bir bit kaynağının çıktısını ikişerli gruplara ayırır. Hangi kural uygulanır?', '{"choices":["01 ise 0, 10 ise 1 yazılır; 00 ve 11 atılır","00 ise 0, 11 ise 1 yazılır; 01 ve 10 atılır","İki bit her zaman XOR''lanıp tek bit yazılır","Her grubun yalnız ilk biti yazılır"]}', '{"index":0}', 'Bitler birbirinden bağımsızsa 01 ve 10 çiftlerinin olasılığı eşittir: $p(1-p) = (1-p)p$. Bu yüzden sonuç, kaynak ne kadar sapmalı olursa olsun dengeli çıkar; bedeli birçok bitin atılmasıdır.', 2, '2. ünite · Rastgelelik testleri ve sapma giderme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-von-neumann-hesap', 'sifreleme', 'sf-u2', 2, 'fill', 'derived', 'Ham kaynak şu 12 biti üretti: `11 01 00 10 10 11`. Von Neumann yöntemi uygulanınca hangi bitler çıkar?', '{"blanks":1}', '{"blanks":[["011","0 1 1"]]}', 'Çiftler tek tek: `11` atılır, `01` → 0, `00` atılır, `10` → 1, `10` → 1, `11` atılır.
---
Sonuç `011`: 12 bitten yalnız 3 bit kaldı.', 2, '2. ünite · Rastgelelik testleri ve sapma giderme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-insan', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', 'İnsanlardan elle "rastgele" 0 ve 1 yazmaları istenince yaygın olarak hangi hata görülür?', '{"choices":["Uzun aynı rakam dizilerinden kaçınıp çok sık değiştirirler","Hep aynı rakamı yazıp hiç değiştirmezler","Yalnız asal sayılara karşılık gelen desenler yazarlar","Yazdıkları dizi her zaman bir önceki kişininkiyle aynı olur"]}', '{"index":0}', 'Gerçek rastgele bir dizide 5-6 aynı bitlik koşular olağandır; insanlar bunları "rastgele görünmüyor" diye kaçınır. Koşu testi bu yüzden insan elinden çıkan dizileri kolayca yakalar.', 1, '2. ünite · Rastgelelik testleri ve sapma giderme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-test-kanit', 'sifreleme', 'sf-u2', 2, 'tf', 'derived', 'Bir üretecin çıktısı istatistiksel testlerin hepsinden geçiyorsa, o üreteç kriptografik olarak güvenlidir.', '{}', '{"value":false}', 'Yanlış. Testler yalnız belirgin kusurları yakalar. Sabit bir anahtarla çalışan AES-CTR''nin çıktısı bütün testlerden geçer ama anahtarı bilen herkes onu baştan sona üretebilir. Güvenlik, tasarımdan ve tohumun gizliliğinden gelir.', 1, '2. ünite · Rastgelelik testleri ve sapma giderme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-debian', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', '2006-2008 arasında bir Linux dağıtımında OpenSSL''e yapılan hatalı bir değişiklik, rastgele sayı üretecini yalnız süreç numarasıyla (PID) besler hale getirdi. Sonucu ne oldu?', '{"choices":["Üretilebilen anahtar sayısı birkaç on bine düştü; anahtarlar listelenip denenebildi","Anahtarlar daha uzun oldu ve bağlantılar yavaşladı","Üretilen anahtarların hiçbiri asal sayı içermediği için geçersiz oldu","Yalnız sunucuların değil, istemcilerin de saatleri bozuldu"]}', '{"index":0}', 'PID en fazla 32 768 değer alabildiği için her anahtar türünden yalnız birkaç on bin farklı anahtar üretilebildi. Saldırganlar bütün olası SSH ve TLS anahtarlarının listesini çıkardı. Algoritma sağlamdı; **rastgelelik** çöktü.', 2, '2. ünite · Zayıf rastgeleliğin sonuçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-zaman-tohum', 'sifreleme', 'sf-u2', 2, 'mcq', 'derived', 'Bir program şifreleme anahtarını, tohumu o anki saniye (Unix zamanı) olan bir PRNG ile üretiyor. Anahtarın yaklaşık hangi gün üretildiğini bilen bir saldırgan için durum nedir?', '{"choices":["Bir günde yalnız 86 400 saniye var; bütün tohumları dakikalar içinde dener","Unix zamanı 64 bitlik olduğu için saldırgan 2^64 tohum denemek zorunda kalır","Tohum her saniye değiştiği için anahtarı bulmak imkânsızdır","Saldırgan programın kaynak kodunu bilmeden hiçbir şey yapamaz"]}', '{"index":0}', 'Anahtarın entropisi tohumunkini geçemez. Bir günlük aralık yalnız $86\,400 \approx 2^{16{,}4}$ olasılık demektir; 128 bitlik anahtar, aslında 16 bitlik bir anahtar kadar güçlüdür. (Kerckhoffs ilkesi gereği kaynak kodun bilindiği varsayılır.)', 1, '2. ünite · Zayıf rastgeleliğin sonuçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u2-anahtar-entropisi', 'sifreleme', 'sf-u2', 2, 'tf', 'derived', 'Bir anahtarın gerçek gücü, uzunluğuyla değil onu üreten kaynağın entropisiyle sınırlıdır.', '{}', '{"value":true}', 'Doğru. 256 bitlik bir anahtar 20 bitlik bir tohumdan türetildiyse saldırgan yalnız $2^{20}$ olasılığı dener. Bu yüzden anahtarlar işletim sisteminin CSPRNG''sinden üretilir.', 1, '2. ünite · Zayıf rastgeleliğin sonuçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-xor-tablo', 'sifreleme', 'sf-u3', 3, 'mcq', 'derived', 'XOR (özel veya) işleminde hangi durumda sonuç 1 olur?', '{"choices":["İki bit farklıysa","İki bit de 1 ise","İki bit de 0 ise","Bitlerden en az biri 1 ise"]}', '{"index":0}', 'XOR, bitler **farklıysa** 1, aynıysa 0 verir: $0 \oplus 0 = 0$, $0 \oplus 1 = 1$, $1 \oplus 0 = 1$, $1 \oplus 1 = 0$. Bit düzeyinde mod 2 toplamadır.', 1, '3. ünite · Bit işlemleri ve XOR', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-xor-hesap', 'sifreleme', 'sf-u3', 3, 'fill', 'derived', '`1010` ⊕ `0110` işleminin sonucu nedir? (4 bit olarak yaz)', '{"blanks":1}', '{"blanks":[["1100"]]}', 'Bit bit: $1 \oplus 0 = 1$, $0 \oplus 1 = 1$, $1 \oplus 1 = 0$, $0 \oplus 0 = 0$. Sonuç `1100`.', 1, '3. ünite · Bit işlemleri ve XOR', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-xor-hex', 'sifreleme', 'sf-u3', 3, 'fill', 'derived', '`0x3C` ⊕ `0xFF` işleminin sonucu onaltılık olarak nedir?', '{"blanks":1}', '{"blanks":[["C3","0xC3"]]}', '$\mathtt{FF}$ ile XOR her biti çevirir: `0011 1100` → `1100 0011` = `0xC3`.', 2, '3. ünite · Bit işlemleri ve XOR', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-geri-alma', 'sifreleme', 'sf-u3', 3, 'mcq', 'derived', '$C = M \oplus K$ ise, $M$ nasıl geri bulunur?', '{"choices":["$M = C \\oplus K$","$M = C - K$","$M = K \\oplus K$","$M = C \\cdot K$"]}', '{"index":0}', 'XOR kendi kendisinin tersidir: $C \oplus K = M \oplus K \oplus K = M \oplus 0 = M$. Şifreleme ve şifre çözmenin aynı işlem olması, akış şifrelerinin ve one-time pad''in temelidir.', 1, '3. ünite · Bit işlemleri ve XOR', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-iki-zaman', 'sifreleme', 'sf-u3', 3, 'tf', 'derived', 'İki mesaj aynı $K$ anahtar dizisiyle XOR''lanmışsa, iki şifreli metnin XOR''u anahtardan bağımsız olarak iki açık metnin XOR''una eşittir.', '{}', '{"value":true}', 'Doğru: $C_1 \oplus C_2 = (M_1 \oplus K) \oplus (M_2 \oplus K) = M_1 \oplus M_2$. Anahtar yok olur; geriye kalan iki metnin karışımı istatistikle çözülebilir. Bu, anahtar tekrarının neden felaket olduğunu gösterir (5. ünite).', 2, '3. ünite · Bit işlemleri ve XOR', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-kalan', 'sifreleme', 'sf-u3', 3, 'num', 'derived', '$17 \bmod 5$ kaçtır?', '{"blanks":1}', '{"blanks":[["2±0"]]}', '$17 = 3 \cdot 5 + 2$; kalan 2.', 1, '3. ünite · Modüler aritmetik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-saat', 'sifreleme', 'sf-u3', 3, 'num', 'derived', 'Saat 23''te başlayan bir iş 19 saat sürüyor. İş bittiğinde saat kaç olur? (24 saatlik düzende)', '{"blanks":1}', '{"blanks":[["18±0"]]}', '$(23 + 19) \bmod 24 = 42 \bmod 24 = 18$. Modüler aritmetik saat kadranında dönmektir: 24''e ulaşınca başa sarılır.', 1, '3. ünite · Modüler aritmetik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-negatif', 'sifreleme', 'sf-u3', 3, 'num', 'derived', 'Kriptografide kalan her zaman $0$ ile $m-1$ arasında alınır. Buna göre $-3 \bmod 7$ kaçtır?', '{"blanks":1}', '{"blanks":[["4±0"]]}', '$-3 = (-1) \cdot 7 + 4$; kalan 4. Kontrol: $4 - (-3) = 7$, yani $4 \equiv -3 \pmod 7$. (Bazı programlama dillerinde `%` işleci burada $-3$ verir; oyuncak kodumuzda bu yüzden `((a % m) + m) % m` yazılır.)', 2, '3. ünite · Modüler aritmetik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-denklik', 'sifreleme', 'sf-u3', 3, 'mcq', 'derived', '$a \equiv b \pmod m$ yazımı ne anlama gelir?', '{"choices":["$a$ ile $b$''nin $m$''ye bölümünden kalanlar aynıdır","$a$ sayısı $b$ ile $m$''nin çarpımına eşittir","$a$ ile $b$''nin toplamı $m$''ye eşittir","$a$ sayısı $b$''den $m$ kat büyüktür"]}', '{"index":0}', 'Denklik, $m$''nin $a - b$''yi tam bölmesidir; yani iki sayı $m$''lik saat kadranında aynı yere düşer: $38 \equiv 6 \pmod{16}$.', 1, '3. ünite · Modüler aritmetik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-carpim', 'sifreleme', 'sf-u3', 3, 'num', 'derived', '$(123 \cdot 456) \bmod 7$ kaçtır? (İpucu: önce her sayının kalanını al.)', '{"blanks":1}', '{"blanks":[["4±0"]]}', '$123 = 17 \cdot 7 + 4$, yani $123 \bmod 7 = 4$; $456 = 65 \cdot 7 + 1$, yani $456 \bmod 7 = 1$.
---
$(4 \cdot 1) \bmod 7 = 4$. Büyük çarpımı hiç hesaplamadan sonuca ulaştık: modüler aritmetikte her adımda mod almak sayıları küçük tutar.', 2, '3. ünite · Modüler aritmetik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-ebob', 'sifreleme', 'sf-u3', 3, 'num', 'derived', '$\text{EBOB}(252, 105)$ kaçtır?', '{"blanks":1}', '{"blanks":[["21±0"]]}', 'Öklid algoritması: $252 = 2 \cdot 105 + 42$.
---
$105 = 2 \cdot 42 + 21$.
---
$42 = 2 \cdot 21 + 0$. Kalan sıfır olunca son sıfırdan farklı kalan EBOB''dur: 21.', 1, '3. ünite · EBOB ve Öklid algoritması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-adim', 'sifreleme', 'sf-u3', 3, 'mcq', 'derived', 'Öklid algoritmasının dayandığı eşitlik hangisidir?', '{"choices":["a ile b''nin EBOB''u, b ile a''nın b''ye bölümünden kalanın EBOB''una eşittir","a ile b''nin EBOB''u, a ile b''nin toplamının yarısına eşittir","a ile b''nin EBOB''u, çarpımlarının toplamlarına bölümünden kalandır","a ile b''nin EBOB''u, a ile b − 1''in EBOB''undan bir fazladır"]}', '{"index":0}', '$a$ ile $b$''yi bölen her sayı $a - qb$''yi, yani $a \bmod b$''yi de böler. Böylece sayılar hızla küçülür; adım sayısı basamak sayısıyla orantılıdır, sayının kendisiyle değil.', 1, '3. ünite · EBOB ve Öklid algoritması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-aralarinda-asal', 'sifreleme', 'sf-u3', 3, 'tf', 'derived', '$\text{EBOB}(a, m) = 1$ ise $a$ ile $m$ aralarında asaldır ve $a$''nın mod $m$''de tersi vardır.', '{}', '{"value":true}', 'Doğru. Tersin varlığı tam olarak bu koşula bağlıdır. RSA''da açık üs $e$, $\varphi(n)$ ile aralarında asal seçilir ki özel üs $d$ bulunabilsin.', 1, '3. ünite · EBOB ve Öklid algoritması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-ters-11', 'sifreleme', 'sf-u3', 3, 'num', 'derived', '$3$''ün mod $11$''deki tersi kaçtır? Yani $3x \equiv 1 \pmod{11}$ eşitliğini sağlayan $0 < x < 11$ nedir?', '{"blanks":1}', '{"blanks":[["4±0"]]}', '$3 \cdot 4 = 12 = 11 + 1$, yani $3 \cdot 4 \equiv 1 \pmod{11}$. Ters 4.', 1, '3. ünite · Modüler ters ve genişletilmiş Öklid', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-ters-26', 'sifreleme', 'sf-u3', 3, 'num', 'derived', '$7$''nin mod $26$''daki tersi kaçtır?', '{"blanks":1}', '{"blanks":[["15±0"]]}', 'Genişletilmiş Öklid: $26 = 3 \cdot 7 + 5$, $7 = 1 \cdot 5 + 2$, $5 = 2 \cdot 2 + 1$.
---
Geri yerine koyarak: $1 = 5 - 2 \cdot 2 = 5 - 2(7 - 5) = 3 \cdot 5 - 2 \cdot 7 = 3(26 - 3 \cdot 7) - 2 \cdot 7 = 3 \cdot 26 - 11 \cdot 7$.
---
Yani $-11 \cdot 7 \equiv 1$, ters $-11 \bmod 26 = 15$. Kontrol: $7 \cdot 15 = 105 = 4 \cdot 26 + 1$.', 2, '3. ünite · Modüler ters ve genişletilmiş Öklid', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-rsa-d', 'sifreleme', 'sf-u3', 3, 'num', 'derived', 'Oyuncak RSA''da $\varphi(n) = 3120$ ve açık üs $e = 17$. Özel üs $d = e^{-1} \bmod 3120$ kaçtır?', '{"blanks":1}', '{"blanks":[["2753±0"]]}', 'Genişletilmiş Öklid: $3120 = 183 \cdot 17 + 9$, $17 = 1 \cdot 9 + 8$, $9 = 1 \cdot 8 + 1$.
---
Geri yerine koy: $1 = 9 - 8 = 9 - (17 - 9) = 2 \cdot 9 - 17 = 2(3120 - 183 \cdot 17) - 17 = 2 \cdot 3120 - 367 \cdot 17$.
---
$-367 \bmod 3120 = 2753$. Kontrol: $17 \cdot 2753 = 46\,801 = 15 \cdot 3120 + 1$.', 3, '3. ünite · Modüler ters ve genişletilmiş Öklid', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-ters-yok', 'sifreleme', 'sf-u3', 3, 'mcq', 'derived', '$6$''nın mod $9$''da tersi neden yoktur?', '{"choices":["$\\text{EBOB}(6, 9) = 3$ olduğu için $6x$ hiçbir zaman 1 kalanını vermez","$6$ çift sayı olduğu için hiçbir modda tersi olmaz","$9$ asal sayı olmadığı için hiçbir sayının tersi olmaz","$6 < 9$ olduğu için ters ancak mod 6''da aranır"]}', '{"index":0}', '$6x$ hep 3''ün katıdır; 9''a bölününce kalan 0, 3 ya da 6 olur, hiçbir zaman 1 olmaz. Mod 9''da 2, 4, 5, 7, 8''in tersi vardır: 9 asal değil ama onlarla aralarında asal.', 1, '3. ünite · Modüler ters ve genişletilmiş Öklid', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-us-kucuk', 'sifreleme', 'sf-u3', 3, 'num', 'derived', '$3^5 \bmod 7$ kaçtır?', '{"blanks":1}', '{"blanks":[["5±0"]]}', '$3^5 = 243$ ve $243 = 34 \cdot 7 + 5$. Büyük sayılarda üs hiç açılmaz; her çarpımdan sonra mod alınır: $3^2 = 9 \equiv 2$, $3^4 \equiv 4$, $3^5 \equiv 4 \cdot 3 = 12 \equiv 5$.', 1, '3. ünite · Hızlı modüler üs alma (kare al ve çarp)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-kare-carp', 'sifreleme', 'sf-u3', 3, 'num', 'derived', 'Kare al ve çarp yöntemiyle $4^{13} \bmod 497$ kaçtır? ($13 = 1101_2$)', '{"blanks":1}', '{"blanks":[["445±0"]]}', 'Bitler soldan sağa: $1$ → sonuç $4$.
---
$1$ → kare al, çarp: $4^2 \cdot 4 = 64$.
---
$0$ → yalnız kare: $64^2 = 4096 \equiv 4096 - 8 \cdot 497 = 120$.
---
$1$ → kare al, çarp: $120^2 = 14\,400 \equiv 14\,400 - 28 \cdot 497 = 484$; $484 \cdot 4 = 1936 \equiv 1936 - 3 \cdot 497 = 445$.', 3, '3. ünite · Hızlı modüler üs alma (kare al ve çarp)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-adim-sayisi', 'sifreleme', 'sf-u3', 3, 'mcq', 'derived', '2048 bitlik bir üsle modüler üs almak için kare al ve çarp yöntemi yaklaşık kaç çarpma yapar?', '{"choices":["En fazla birkaç bin","Yaklaşık $2^{2048}$","Yaklaşık iki milyar","Üs büyüdükçe sonsuz"]}', '{"index":0}', 'Her bit için bir kare alma ve (bit 1 ise) bir çarpma: en fazla $2 \times 2048 = 4096$ çarpma. Üssü tek tek açmak $2^{2048}$ çarpma isterdi. RSA''nın pratik olmasının nedeni budur.', 2, '3. ünite · Hızlı modüler üs alma (kare al ve çarp)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-zamanlama', 'sifreleme', 'sf-u3', 3, 'tf', 'derived', 'Kare al ve çarp yöntemi saf haliyle yazılırsa, işlemin süresi gizli üssün bitlerine göre değişebilir ve bu bir yan kanal oluşturur.', '{}', '{"value":true}', 'Doğru. Bit 1 olduğunda fazladan bir çarpma yapılır; süre ya da güç tüketimi ölçülerek bitler okunabilir (17. ünite). Gerçek kütüphaneler sabit zamanlı yöntemler (Montgomery merdiveni) kullanır.', 3, '3. ünite · Hızlı modüler üs alma (kare al ve çarp)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-carpanlar', 'sifreleme', 'sf-u3', 3, 'num', 'derived', '$3233 = p \cdot q$ iki asalın çarpımıdır ve $q = 53$. $p$ kaçtır?', '{"blanks":1}', '{"blanks":[["61±0"]]}', '$3233 / 53 = 61$. Çarpmak kolaydır; $3233$''ü çarpanlarına ayırmak için ise $\sqrt{3233} \approx 57$''ye kadar bölenleri denemek gerekir. 2048 bitlik sayılarda bu yol tükenir.', 2, '3. ünite · Asal sayılar ve çarpanlara ayırmanın zorluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-tek-yon', 'sifreleme', 'sf-u3', 3, 'mcq', 'derived', 'RSA''nın güvenliği hangi gözleme dayanır?', '{"choices":["İki büyük asalı çarpmak kolay, çarpımı asallarına ayırmak zordur","Büyük asal sayılar bulmak bilinen hiçbir yöntemle mümkün değildir","Asal sayıların toplamı her zaman çift sayıdır","Bir sayının asal olup olmadığını sınamak imkânsızdır"]}', '{"index":0}', 'Asal bulmak ve asallık sınamak hızlıdır (Miller-Rabin); çarpanlara ayırma ise bilinen klasik algoritmalarla alt üstel sürelidir. Bu asimetri, tek yönlü fonksiyon fikrinin örneğidir. Kuantum bilgisayarda Shor algoritması bu zorluğu ortadan kaldırır (18. ünite).', 1, '3. ünite · Asal sayılar ve çarpanlara ayırmanın zorluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-kucuk-asal', 'sifreleme', 'sf-u3', 3, 'tf', 'derived', '$91$ bir asal sayıdır.', '{}', '{"value":false}', 'Yanlış: $91 = 7 \cdot 13$. "Asal gibi görünen" sayılar oyuncak RSA''da sık yapılan hatadır; asal olmayan bir $p$ ile hesaplanan $\varphi(n)$ yanlış çıkar ve şifre çözme bozulur.', 1, '3. ünite · Asal sayılar ve çarpanlara ayırmanın zorluğu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-phi-asal', 'sifreleme', 'sf-u3', 3, 'mcq', 'derived', '$p$ asal ise $\varphi(p)$ kaçtır?', '{"choices":["$p - 1$","$p$","$p + 1$","$p / 2$"]}', '{"index":0}', '$1, 2, \ldots, p-1$ sayılarının hepsi $p$ ile aralarında asaldır: $\varphi(p) = p - 1$.', 1, '3. ünite · Fermat ve Euler teoremleri, φ fonksiyonu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-phi-rsa', 'sifreleme', 'sf-u3', 3, 'num', 'derived', '$n = 61 \cdot 53$ için $\varphi(n)$ kaçtır?', '{"blanks":1}', '{"blanks":[["3120±0"]]}', 'İki farklı asalın çarpımında $\varphi(pq) = (p-1)(q-1) = 60 \cdot 52 = 3120$. $p$ ve $q$''yu bilen bunu hemen hesaplar; yalnız $n$''yi bilen bilemez. RSA''nın kapısı burasıdır.', 2, '3. ünite · Fermat ve Euler teoremleri, φ fonksiyonu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-phi-15', 'sifreleme', 'sf-u3', 3, 'num', 'derived', '$\varphi(15)$ kaçtır?', '{"blanks":1}', '{"blanks":[["8±0"]]}', '15 ile aralarında asal olanlar: 1, 2, 4, 7, 8, 11, 13, 14. Toplam 8; formülle $(3-1)(5-1) = 8$.', 1, '3. ünite · Fermat ve Euler teoremleri, φ fonksiyonu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-fermat', 'sifreleme', 'sf-u3', 3, 'num', 'derived', 'Fermat''nın küçük teoremini kullanarak $7^{12} \bmod 13$ değerini bul.', '{"blanks":1}', '{"blanks":[["1±0"]]}', '$p$ asal ve $p \nmid a$ ise $a^{p-1} \equiv 1 \pmod p$. Burada $p = 13$, $p - 1 = 12$: sonuç 1.', 2, '3. ünite · Fermat ve Euler teoremleri, φ fonksiyonu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-fermat-2', 'sifreleme', 'sf-u3', 3, 'num', 'derived', '$2^{10} \bmod 11$ kaçtır?', '{"blanks":1}', '{"blanks":[["1±0"]]}', '11 asal, $2^{10} = 2^{11-1} \equiv 1 \pmod{11}$. Kontrol: $1024 = 93 \cdot 11 + 1$.', 2, '3. ünite · Fermat ve Euler teoremleri, φ fonksiyonu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-gf2-toplama', 'sifreleme', 'sf-u3', 3, 'mcq', 'derived', 'GF(2)''de (yalnız 0 ve 1''den oluşan cisimde) toplama hangi işleme karşılık gelir?', '{"choices":["XOR","VE","VEYA","DEĞİL"]}', '{"index":0}', 'Mod 2 toplamada $1 + 1 = 0$ olur; bu tam olarak XOR''dur. Çarpma ise VE işlemidir.', 1, '3. ünite · Sonlu cisimler: GF(p), GF(2) ve GF(2⁸)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-gf28-toplama', 'sifreleme', 'sf-u3', 3, 'fill', 'derived', 'AES''in kullandığı GF(2⁸) cisminde baytlar toplanırken XOR''lanır. `0x57` + `0x83` kaçtır? (onaltılık)', '{"blanks":1}', '{"blanks":[["D4","0xD4"]]}', '`0101 0111` ⊕ `1000 0011` = `1101 0100` = `0xD4`. Bu, AES standardındaki (FIPS 197) örnektir.', 2, '3. ünite · Sonlu cisimler: GF(p), GF(2) ve GF(2⁸)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-xtime', 'sifreleme', 'sf-u3', 3, 'fill', 'derived', 'GF(2⁸)''de bir baytı `0x02` ile çarpmak, bir bit sola kaydırıp en soldan taşma olursa `0x1B` ile XOR''lamaktır. `0x57` · `0x02` kaçtır?', '{"blanks":1}', '{"blanks":[["AE","0xAE"]]}', '`0x57` = `0101 0111`; sola kaydırınca `1010 1110` = `0xAE`. En soldaki bit 0 olduğu için taşma yok, `0x1B` eklenmez.
---
AES''in MixColumns adımı bu "xtime" işlemini kullanır; donanımda yalnız bir kaydırma ve birkaç XOR kapısıdır.', 3, '3. ünite · Sonlu cisimler: GF(p), GF(2) ve GF(2⁸)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u3-neden-cisim', 'sifreleme', 'sf-u3', 3, 'mcq', 'derived', 'AES baytları neden sıradan tam sayılar gibi mod 256 değil de GF(2⁸) içinde çarpar?', '{"choices":["GF(2⁸)''de sıfır dışında her baytın tersi var, mod 256''da yok","Mod 256''da çarpma işlemcide tanımlı değildir","GF(2⁸)''de çarpmanın sonucu hiçbir zaman sıfır olmaz","Mod 256 yalnız 7 bitlik sayılarla çalışabilir"]}', '{"index":0}', '256 asal olmadığı için mod 256''da çift sayıların tersi yoktur; bu işlemleri geri alınamaz yapar. GF(2⁸) ise indirgenemez bir polinomla ($x^8 + x^4 + x^3 + x + 1$) kurulur ve her sıfır olmayan elemanın tersi vardır. AES''in S-kutusu bu tersi kullanır.', 2, '3. ünite · Sonlu cisimler: GF(p), GF(2) ve GF(2⁸)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-sezar-tanim', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Sezar şifresi nasıl çalışır?', '{"choices":["Her harf alfabede sabit sayıda ileri kaydırılır","Harflerin yerleri ters sırayla yazılır","Her harf rastgele seçilen başka bir harfle değiştirilir","Her kelimenin yalnız ilk harfi değiştirilir"]}', '{"index":0}', 'Sezar şifresinde anahtar tek bir sayıdır: kayma miktarı. 3 kaymayla A → Ç, B → D olur (Türk alfabesinde). Matematik diliyle $C = (M + k) \bmod 29$.', 1, '4. ünite · Sezar şifresi ve kaba kuvvet', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-anahtar-sayisi', 'sifreleme', 'sf-u4', 4, 'num', 'derived', '29 harfli Türk alfabesinde Sezar şifresinin, metni değiştirmeyen sıfır kayma dışında kaç farklı anahtarı vardır?', '{"blanks":1}', '{"blanks":[["28±0"]]}', 'Kayma 0 ile 28 arasında olabilir; 0 metni değiştirmez. Kalan **28** anahtar elle bile birkaç dakikada denenir. Kaba kuvvet için bilgisayara bile gerek yok.', 1, '4. ünite · Sezar şifresi ve kaba kuvvet', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-coz-3', 'sifreleme', 'sf-u4', 4, 'fill', 'derived', 'Bir arkadaşın sana Sezar şifresiyle, 3 kaymayla şifrelenmiş şu notu bıraktı: `DYOYÜÖÇ BĞTL NZVZŞJÇPĞ`. Not ne diyor?', '{"blanks":1}', '{"blanks":[["BULUŞMA YERİ KÜTÜPHANE"]]}', 'Her harfi alfabede 3 geri kaydır: D → B, Y → U, O → L... (Türk alfabesi: ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ).
---
Sonuç: **BULUŞMA YERİ KÜTÜPHANE**.', 1, '4. ünite · Sezar şifresi ve kaba kuvvet', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-kaba-kuvvet', 'sifreleme', 'sf-u4', 4, 'fill', 'derived', 'Kaymayı bilmediğin bir Sezar şifreli metin buldun: `İYİREİC UİBSYSY İÜESYMİ`. Bütün kaymaları dene ve açık metni yaz.', '{"blanks":1}', '{"blanks":[["ANAHTAR KAPININ ALTINDA"]]}', '28 kaymayı tek tek dene; yalnız biri anlamlı Türkçe verir. Kısa yol: ilk kelimede üç, son kelimede iki `İ` var ve son kelime `İ` ile başlayıp bitiyor; Türkçenin en sık harfi A olabilir. İ (11) → A (0), yani 11 geri kayma.
---
11 kaymayla: **ANAHTAR KAPININ ALTINDA**.', 2, '4. ünite · Sezar şifresi ve kaba kuvvet', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-rot13', 'sifreleme', 'sf-u4', 4, 'tf', 'derived', 'Bir metni iki kez farklı Sezar kaymalarıyla şifrelemek, onu tek kaymalı Sezar''dan daha güvenli yapar.', '{}', '{"value":false}', 'Yanlış. 5 kayma ardından 7 kayma, tek bir 12 kaymayla aynıdır: $(M + 5 + 7) \bmod 29$. Anahtar uzayı yine 28''dir. Bir şifreyi kendisiyle art arda uygulamak her zaman güç katmaz.', 1, '4. ünite · Sezar şifresi ve kaba kuvvet', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-anahtar-uzayi', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', '29 harfli alfabede tek alfabeli yerine koyma şifresinin anahtar sayısı ($29!$) yaklaşık kaç bitlik anahtara karşılık gelir?', '{"choices":["Yaklaşık 103 bit","Yaklaşık 5 bit","Yaklaşık 29 bit","Yaklaşık 841 bit"]}', '{"index":0}', '$29! \approx 8{,}8 \times 10^{30}$ ve $\log_2(29!) \approx 103$. Kaba kuvvetle denemek imkânsızdır, yine de bu şifre frekans analiziyle bir sayfa metinden kolayca kırılır. **Büyük anahtar uzayı tek başına güvenlik değildir.**', 2, '4. ünite · Tek alfabeli yerine koyma şifreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-atbas', 'sifreleme', 'sf-u4', 4, 'fill', 'derived', 'Atbaş şifresi alfabeyi ters çevirir: A ↔ Z, B ↔ Y, C ↔ V... `SOALO KTGZN` metnini çöz.', '{"blanks":1}', '{"blanks":[["GİZLİ MESAJ"]]}', 'Türk alfabesini (ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ) tersiyle eşleştir: S ↔ G, O ↔ İ, A ↔ Z, L ↔ M...
---
Sonuç: **GİZLİ MESAJ**. Atbaş anahtarsız, sabit bir yerine koymadır; kendisinin tersidir.', 1, '4. ünite · Tek alfabeli yerine koyma şifreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-harf-deseni', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Yerine koyma şifresinde açık metindeki hangi özellik şifreli metinde **değişmeden** kalır?', '{"choices":["Aynı harflerin tekrar ettiği yerler","Harflerin alfabedeki sırası","Metindeki ünlülerin kendisi","Kelimelerin anlamı"]}', '{"index":0}', 'Her A hep aynı harfe döner; bu yüzden `ANNE` gibi bir kelimenin "1-2-2-3" deseni şifrede de görünür. Boşluklar bırakılırsa kelime uzunlukları da sızar. Kırıcılar bu desenlerden yararlanır.', 1, '4. ünite · Tek alfabeli yerine koyma şifreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-fikir', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Frekans analizi neden tek alfabeli şifreleri kırar?', '{"choices":["Her dilde harflerin sıklıkları belirgindir ve yerine koyma bu sıklıkları korur","Şifreli metinde harf sayısı açık metinden her zaman fazladır","Şifreleyen kişi en sık harfleri hiç kullanamaz","Bilgisayarlar harf sıklıklarını şifreli metne ekler"]}', '{"index":0}', 'Türkçede A, E, İ, N, R, L harfleri çok sıktır. Yerine koyma yalnız harflerin adını değiştirir, sayılarını değil: şifreli metnin en sık harfi büyük olasılıkla A ya da E''dir. Bu yöntemi 9. yüzyılda el-Kindî anlattı.', 1, '4. ünite · Frekans analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-en-sik', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Tek alfabeli yerine koymayla şifrelenmiş Türkçe bir metin: `ÖDOSÜUĞDZYOVA ĞIGATMOÖ ZMĞUDOÜÇZTNT ĞOJMOMOŞOTA VAŞOM ZTZRÜZDNT ĞOJMOMOŞOTA VZHZTND. CZMVNDĞZT COCÜAÇO EOMCA EOMA ZTZRÜZDN EOMÇAVOÖİA ÇACZLN UÖFHZÇZJ. EF HIJVAT ZMĞUDOÜÇZMZD RADÖACA ZİNÖ HZHNÇMZTND GA HNMMZDKZ OTKAMATOD.` En sık geçen şifreli harf ve onun en olası karşılığı hangisidir?', '{"choices":["Z, büyük olasılıkla A","O, büyük olasılıkla K","M, büyük olasılıkla Ş","Ç, büyük olasılıkla Ğ"]}', '{"index":0}', 'Harfleri say: `Z` 24 kez geçiyor, ikinci sırada `O` var. Türkçede en sık harf A olduğu için Z → A en güçlü tahmindir.
---
Sonra kısa kelimelere bak: `EF` iki harfli ve sık; `GA` ("ve") gibi bağlaçlar da ipucudur. Tahminleri yerleştirdikçe metin açılır: "KRİPTOGRAFİDE GÜVENLİK...".', 2, '4. ünite · Frekans analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-kisa-metin', 'sifreleme', 'sf-u4', 4, 'tf', 'derived', 'Frekans analizi, 15-20 harflik çok kısa bir şifreli metinde de en az uzun metindeki kadar güvenilir çalışır.', '{}', '{"value":false}', 'Yanlış. Sıklıklar ancak yeterince uzun metinde dilin ortalamasına yaklaşır. Kısa metinde "en sık harf A" tahmini sık sık yanılır; o zaman kelime desenleri ve olası kelimeler ("bilinen açık metin") kullanılır.', 1, '4. ünite · Frekans analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-dil', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'İngilizce bir metin aynı yöntemle şifrelenmiş olsaydı, frekans analizinde ilk tahmin hangi harf olurdu?', '{"choices":["E","A","İ","Ş"]}', '{"index":0}', 'İngilizcede en sık harf E''dir (yaklaşık %12), ardından T ve A gelir. Dilin bilinmesi kırmanın ilk adımıdır; bu yüzden tezgahta hem Türkçe hem İngilizce dağılım vardır.', 2, '4. ünite · Frekans analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-vigenere-tanim', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Vigenère şifresini Sezar''dan ayıran özellik nedir?', '{"choices":["Kayma miktarı anahtar kelimenin harflerine göre harften harfe değişir","Harfler kaydırılmaz, yalnız sıraları değiştirilir","Her mesajda alfabenin harfleri yeniden icat edilir","Yalnız sesli harfler şifrelenir, sessizler olduğu gibi kalır"]}', '{"index":0}', 'Anahtar "KOD" ise 1., 4., 7. harfler K kadar, 2., 5., 8. harfler O kadar, 3., 6., 9. harfler D kadar kayar. Aynı harf farklı yerlerde farklı harflere döner: **çok alfabeli** şifre.', 1, '4. ünite · Vigenère şifresi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-vigenere-coz', 'sifreleme', 'sf-u4', 4, 'fill', 'derived', 'Anahtarı `KOD` olan Vigenère şifreli metni çöz: `EOÖOYUT IDPOOGO EKIÖKĞ` (Boşluklar anahtarı ilerletmez.)', '{"blanks":1}', '{"blanks":[["SALDIRI ŞAFAKTA BAŞLAR"]]}', 'K = 13, O = 17, D = 4 (A = 0''dan sayınca). Her harfi sırayla 13, 17, 4, 13, 17, 4... geri kaydır.
---
E (5) − 13 = −8 ≡ 21 → S; O (17) − 17 = 0 → A; Ö (18) − 4 = 14 → L...
---
Sonuç: **SALDIRI ŞAFAKTA BAŞLAR**.', 2, '4. ünite · Vigenère şifresi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-bilinen', 'sifreleme', 'sf-u4', 4, 'fill', 'derived', 'Ele geçirdiğin Vigenère şifreli bir mesajın `ANFVNMİ PKÇJİ` olduğunu ve "MERHABA" diye başladığını biliyorsun. Anahtarın 5 harfli olduğu da biliniyor. Anahtar nedir?', '{"blanks":1}', '{"blanks":[["LİMON"]]}', 'Bilinen açık metin saldırısı: anahtar harfi = şifreli harf − açık harf. A (0) − M (15) ≡ 14 → L; N (16) − E (5) = 11 → İ; F (6) − R (20) ≡ 15 → M; V (26) − H (9) = 17 → O; N (16) − A (0) = 16 → N.
---
Anahtar **LİMON**; altıncı ve yedinci harfler (L, İ) anahtarın tekrar ettiğini doğrular. Mesajın tamamı "MERHABA DÜNYA".', 3, '4. ünite · Vigenère şifresi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-kasiski', 'sifreleme', 'sf-u4', 4, 'num', 'derived', 'Kasiski yöntemiyle bir Vigenère şifreli metinde tekrar eden üç harflik dizilerin aralarında 12, 18 ve 30 harf olduğunu buldun. Anahtar uzunluğu için en olası değer kaçtır?', '{"blanks":1}', '{"blanks":[["6±0"]]}', 'Aynı açık metin parçası anahtarın aynı yerine denk gelince aynı şifreli dizi çıkar; aradaki uzaklık anahtar uzunluğunun katıdır. $\text{EBOB}(12, 18, 30) = 6$.
---
2 ve 3 de böler ama hepsini açıklayan en büyük değer 6''dır; çakışma indeksiyle doğrulanır.', 2, '4. ünite · Vigenère''i kırmak: Kasiski ve çakışma indeksi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-sonra', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Vigenère anahtarının uzunluğu (diyelim 6) bulunduktan sonra şifre nasıl kırılır?', '{"choices":["Metin 6 gruba ayrılır; her grup ayrı bir Sezar gibi frekans analiziyle çözülür","Bütün 6 harfli anahtarlar sırayla denenir, başka yol yoktur","Metnin ilk 6 harfi atılır, kalanı doğrudan okunur","Anahtar uzunluğu bilinince şifre kendiliğinden çözülür"]}', '{"index":0}', '1., 7., 13. harfler aynı anahtar harfiyle kaydırıldı: bu grup tek bir Sezar şifresidir. Her grubun en sık harfi bulunur ve kayma hesaplanır. Böylece $29^6$ yerine $6 \times 28$ deneme yeter.', 1, '4. ünite · Vigenère''i kırmak: Kasiski ve çakışma indeksi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-ic', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Çakışma indeksi (metinden rastgele seçilen iki harfin aynı çıkma olasılığı), şifreli bir metinde İngilizce düz metne yakın (yaklaşık 0,066) çıkıyor. Bu ne düşündürür?', '{"choices":["Tek alfabeli bir şifre; harf sıklıkları korunmuş","Çok alfabeli uzun anahtarlı bir şifre","Metin tamamen rastgele harflerden oluşuyor","Metin kesinlikle Türkçedir"]}', '{"index":0}', 'Yerine koyma ve aktarım şifreleri sıklıkların dağılımını korur, bu yüzden indeks dilinkine yakın kalır. Uzun anahtarlı Vigenère dağılımı düzleştirir ve indeksi tekdüze değere ($1/26 \approx 0{,}038$) yaklaştırır.', 3, '4. ünite · Vigenère''i kırmak: Kasiski ve çakışma indeksi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-aktarim-tanim', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Aktarım (yer değiştirme) şifresi ile yerine koyma şifresi arasındaki fark nedir?', '{"choices":["Aktarım harfleri değiştirmez, yerlerini karıştırır","Aktarım yalnız sayılarla, yerine koyma yalnız harflerle çalışır","Aktarımın anahtarı yoktur, yerine koymanın vardır","Aktarım şifreli metni her zaman iki kat uzatır"]}', '{"index":0}', 'Aktarımda harf sıklıkları **tamamen aynı** kalır (çakışma indeksi düz metinle aynı); yalnız sıra değişir. Modern blok şifreler iki fikri birleştirir: yerine koyma (karıştırma) ve aktarım (yayılma).', 1, '4. ünite · Aktarım (yer değiştirme) şifreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-cit', 'sifreleme', 'sf-u4', 4, 'fill', 'derived', 'İki raylı çit şifresinde harfler sırayla üst ve alt satıra zikzak yazılır, sonra üst satır ve alt satır art arda okunur (boşluklar atılır). `YRNATNAEAISAODGL` metnini çöz.', '{"blanks":1}', '{"blanks":[["YARIN SAAT ONDA GEL"]]}', '16 harf: ilk 8''i üst ray (`YRNATNAE`), son 8''i alt ray (`AISAODGL`).
---
Sırayla bir üstten bir alttan oku: Y-A-R-I-N-S-A-A-T-O-N-D-A-G-E-L → **YARIN SAAT ONDA GEL**.', 2, '4. ünite · Aktarım (yer değiştirme) şifreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-frekans-ayni', 'sifreleme', 'sf-u4', 4, 'tf', 'derived', 'Bir aktarım şifresinin şifreli metnindeki harf sıklıkları, açık metindekilerle birebir aynıdır.', '{}', '{"value":true}', 'Doğru. Harfler yalnız yer değiştirdiği için her harften kaç tane olduğu korunur. Bu, şifrenin türünü anlamak için güçlü bir ipucudur: sıklıklar Türkçeye benziyorsa ama metin okunmuyorsa aktarım düşünülür.', 1, '4. ünite · Aktarım (yer değiştirme) şifreleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-rotor', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Enigma makinesinde rotorların görevi neydi?', '{"choices":["Her basışta dönüp harf eşlemesini değiştirmek","Şifreli metni kâğıda basıp saklamak","Mesajı radyo dalgasına çevirip yollamak","Operatörün parolasını her sabah doğrulamak"]}', '{"index":0}', 'Her rotor 26 harflik bir yerine koymadır. Her tuşa basışta en sağdaki rotor bir adım döner, belli noktalarda yanındakini de döndürür (kilometre sayacı gibi). Böylece aynı harf her basışta farklı bir harfe döner: çok uzun dönemli çok alfabeli bir şifre.', 1, '4. ünite · Enigma''nın çalışma mantığı ve zayıflıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-kendine', 'sifreleme', 'sf-u4', 4, 'tf', 'derived', 'Enigma''da hiçbir harf kendisine şifrelenemezdi ve bu, kırıcıların yararlandığı bir zayıflıktı.', '{}', '{"value":true}', 'Doğru. Yansıtıcı (reflector) akımı aynı rotorlardan geri gönderdiği için A asla A''ya dönmez. Kırıcılar bunu "bu şifreli metinde hangi konuma ''WETTERBERICHT'' (hava raporu) gelebilir?" sorusunda kullanarak olasılıkları büyük ölçüde azalttı.', 2, '4. ünite · Enigma''nın çalışma mantığı ve zayıflıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-ayni-ayar', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Yansıtıcı sayesinde Enigma''nın hangi özelliği vardı?', '{"choices":["Aynı ayarla şifreli metin yazılınca açık metin çıkıyordu","Şifre çözmek için ayrı bir makine gerekiyordu","Her mesaj iki kez gönderilmek zorundaydı","Anahtar her mesajın içine açıkça yazılıyordu"]}', '{"index":0}', 'Yansıtıcı eşlemeyi kendi kendinin tersi (involüsyon) yapar: A → K ise aynı konumda K → A. Alıcı makinesini aynı başlangıç ayarına getirip şifreli metni yazınca açık metni okur. Kolaylık sağlayan bu yapı, kendine şifrelenmeme zayıflığının da kaynağıdır.', 2, '4. ünite · Enigma''nın çalışma mantığı ve zayıflıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-kirilma', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Enigma''nın kırılmasında en büyük payı olan etken hangisidir?', '{"choices":["Tahmin edilen kalıplar, operatör hataları ve arama makineleri","Makinenin algoritmasının hiçbir zaman öğrenilememiş olması","Anahtar uzayının yalnız 26 olasılıktan oluşması","Mesajların şifrelenmeden gönderilmesi"]}', '{"index":0}', 'Polonyalı matematikçiler (Rejewski ve arkadaşları) yapıyı 1930''larda çözdü; Bletchley Park''ta Turing ve ekibi "bombe" makineleriyle, tahmin edilen kelimelerden (crib) yola çıkarak günlük ayarları buldu. Kerckhoffs ilkesinin dersi: makine ele geçebilir, güvenlik anahtar ve kullanım disiplinindedir.', 2, '4. ünite · Enigma''nın çalışma mantığı ve zayıflıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-anahtar-uzayi-yetmez', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Bir öğrenci "Yerine koyma şifremin 2^103 anahtarı var, AES-128''den bile büyük; o halde AES kadar güvenli" diyor. Hata nerede?', '{"choices":["Saldırgan anahtarları denemez; harf sıklıklarından kısa yoldan kırar","2^103, 2^128''den büyük bir sayıdır, bu yüzden hesap yanlış","Yerine koyma şifresinin anahtarı yoktur","AES''in anahtar uzayı yerine koymanınkinden küçüktür"]}', '{"index":0}', 'Kaba kuvvete dayanmak gerekli ama yeterli değildir. İyi bir şifre, kaba kuvvetten **daha kısa** bir yol bırakmamalıdır. Yerine koyma istatistik sızdırır; AES''te bugüne kadar kaba kuvvetten belirgin hızlı bir saldırı bulunmadı.', 2, '4. ünite · Klasik şifrelerin bugüne bıraktığı dersler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-istatistik', 'sifreleme', 'sf-u4', 4, 'mcq', 'derived', 'Klasik şifrelerin ortak zayıflığı nedir?', '{"choices":["Açık metnin istatistiğini şifreli metne taşımaları","Bilgisayar olmadan hiç uygulanamamaları","Anahtarlarının herkese açık yayımlanması","Yalnız sayıları şifreleyebiliyor olmaları"]}', '{"index":0}', 'Harf sıklıkları, tekrar eden diziler ve kelime desenleri şifreli metne sızar. Modern şifrelerden beklenen, şifreli metnin anahtarı bilmeyen için **rastgele bayttan ayırt edilemez** olmasıdır.', 1, '4. ünite · Klasik şifrelerin bugüne bıraktığı dersler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u4-bugun', 'sifreleme', 'sf-u4', 4, 'tf', 'derived', 'Klasik şifreler bugün gerçek gizlilik için kullanılmaz, ama kırılmaları kriptanalizin temel yöntemlerini öğretir.', '{}', '{"value":true}', 'Doğru. Frekans analizi, bilinen açık metin saldırısı, anahtar uzunluğunu bulma ve kaba kuvvet, modern saldırıların da temel fikirleridir. Bu ünitedeki şifreler **oyuncaktır**.', 1, '4. ünite · Klasik şifrelerin bugüne bıraktığı dersler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-xor-geri', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'Açık metin baytı $M$, anahtar baytı $K$ ise $C = M \oplus K$. Alıcı açık metni nasıl geri alır?', '{"choices":["$C \\oplus K$ hesaplar","$C - K$ hesaplar","$C \\oplus C$ hesaplar","$K \\oplus K$ hesaplar"]}', '{"index":0}', 'XOR kendi kendinin tersidir: $K \oplus K = 0$ ve $X \oplus 0 = X$. Bu yüzden $C \oplus K = M \oplus K \oplus K = M$. Şifreleme ile çözme aynı işlemdir.', 1, '5. ünite · XOR ile şifreleme ve one-time pad', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-xor-bayt', 'sifreleme', 'sf-u5', 5, 'fill', 'derived', '`A` harfinin ASCII kodu 0x41''dir. Bu bayt 0x2A anahtar baytıyla XOR''lanırsa sonuç hangi bayttır? İki hex rakamıyla yaz.', '{"blanks":1}', '{"blanks":[["6B","0x6B"]]}', '0x41 = 0100 0001, 0x2A = 0010 1010. Bit bit XOR: 0110 1011 = **0x6B** (ASCII''de küçük k harfi).', 1, '5. ünite · XOR ile şifreleme ve one-time pad', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-otp-kosullar', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'One-time pad''in kusursuz gizlilik sağlaması için anahtar hangi koşulların hepsini sağlamalıdır?', '{"choices":["Mesaj kadar uzun, gerçekten rastgele ve yalnız bir kez kullanılmış olmalı","En az 128 bit, akılda kalıcı ve iki tarafça ezberlenmiş olmalı","Mesajdan kısa, sözde rastgele ve her gün yenilenmiş olmalı","Mesaj kadar uzun, bir parolanın SHA-256 hash''i ve herkese açık olmalı"]}', '{"index":0}', 'Shannon 1949''da gösterdi: anahtar mesaj kadar uzun, düzgün dağılımlı rastgele ve **tek kullanımlık** olursa, şifreli metin her olası açık metne eşit olasılıkla karşılık gelir. Üç koşuldan biri bozulursa garanti kaybolur.', 2, '5. ünite · XOR ile şifreleme ve one-time pad', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-kusursuz', 'sifreleme', 'sf-u5', 5, 'tf', 'derived', 'Doğru kullanılan one-time pad, sınırsız hesap gücüne sahip bir saldırgana karşı bile güvenlidir.', '{}', '{"value":true}', 'Doğru. Şifreli metin, aynı uzunluktaki her açık metne başka bir anahtarla karşılık gelir; hangisinin doğru olduğunu seçmek için hiçbir bilgi yoktur. Kaba kuvvet bütün anlamlı mesajları eşit olasılıkla verir. Bu güvenlik hesap gücüne değil bilgi kuramına dayanır.', 1, '5. ünite · XOR ile şifreleme ve one-time pad', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-anahtar-boyu', 'sifreleme', 'sf-u5', 5, 'num', 'derived', '4 GB''lık bir video dosyasını one-time pad ile şifrelemek için en az kaç GB anahtar gerekir?', '{"blanks":1}', '{"blanks":[["4±0"]]}', 'One-time pad''de anahtar mesaj kadar uzundur: **4 GB**. Üstelik bu anahtar karşı tarafa güvenli bir yoldan ulaştırılmalıdır. 4 GB''ı güvenle taşıyabiliyorsan videoyu da taşıyabilirsin; one-time pad''in pratikte kullanılmamasının nedeni budur.', 1, '5. ünite · XOR ile şifreleme ve one-time pad', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-neden-yok', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'One-time pad kusursuz güvenliğe rağmen günlük uygulamalarda neden kullanılmaz?', '{"choices":["Mesaj kadar uzun anahtarı önceden güvenle paylaşmak ve hiç tekrar etmemek pratik değildir","XOR işlemi bilgisayarlarda çok yavaş olduğu için büyük dosyalarda kullanılamaz","Kuantum bilgisayarlar one-time pad''i birkaç saniyede kırabilir","Şifreli metin açık metinden çok daha uzun olduğu için ağ trafiğini artırır"]}', '{"index":0}', 'Sorun anahtar dağıtımıdır. Her bayt için bir bayt rastgele anahtar üretmek, karşı tarafa önceden güvenle ulaştırmak ve hiçbirini iki kez kullanmamak gerekir. Soğuk Savaş''ta diplomatik hatlarda kurye ile taşınan anahtar defterleriyle kullanıldı. Modern şifreler kısa bir anahtardan uzun bir anahtar akışı üreterek bu sorunu çözer.', 1, '5. ünite · XOR ile şifreleme ve one-time pad', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-iki-zaman', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'Aynı one-time pad anahtarıyla iki mesaj şifrelenirse saldırgan iki şifreli metni XOR''layarak ne elde eder?', '{"choices":["İki açık metnin XOR''unu; anahtar tamamen düşer","Anahtarın kendisini","Rastgele baytlar; hiçbir bilgi elde etmez","İki açık metnin toplamının hash''ini"]}', '{"index":0}', '$C_1 \oplus C_2 = (M_1 \oplus K) \oplus (M_2 \oplus K) = M_1 \oplus M_2$. Anahtar yok olur. Açık metinlerin XOR''u rastgele değildir: birinin bir parçası tahmin edilirse ötekinin aynı yerdeki parçası çıkar.', 2, '5. ünite · Anahtar tekrarı: iki zamanlı pad', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-venona', 'sifreleme', 'sf-u5', 5, 'tf', 'derived', 'Tek kullanımlık anahtar defterlerinin bir kısmı ikinci kez kullanıldığı için Sovyet diplomatik trafiğinin bir bölümü sonradan çözülebilmiştir.', '{}', '{"value":true}', 'Doğru. ABD''nin Venona projesi 1940''larda Sovyet trafiğinde tekrar kullanılmış anahtar sayfalarını yakaladı ve binlerce mesajın bir kısmını açtı. Kusursuz güvenlik, kullanım kuralı bozulunca hemen kaybolur.', 1, '5. ünite · Anahtar tekrarı: iki zamanlı pad', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-iki-zaman-coz', 'sifreleme', 'sf-u5', 5, 'fill', 'derived', 'Aynı anahtarla şifrelenmiş iki mesaj yakaladın (hex): `d67b4e3eae74c893603b2a8c10df06` ve `c47b4c3ea415bb906424468607d209`. Birinci mesajın `YARIN SAAT ONDA` olduğunu biliyorsun (ASCII). İkinci mesaj nedir?', '{"blanks":1}', '{"blanks":[["KAPIDA BEKLEYIN"]]}', 'Anahtarı bulman bile gerekmez: $M_2 = C_1 \oplus C_2 \oplus M_1$.
---
Önce $C_1 \oplus C_2$''yi bayt bayt hesapla, sonra `YARIN SAAT ONDA` baytlarıyla XOR''la. İlk bayt: 0xd6 ⊕ 0xc4 = 0x12, 0x12 ⊕ 0x59 (Y) = 0x4B (K).
---
Bütün baytlar: **KAPIDA BEKLEYIN**.', 3, '5. ünite · Anahtar tekrarı: iki zamanlı pad', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-bilinen-parca', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'Aynı anahtar akışıyla şifrelenmiş iki mesajdan birinde "Sayın" kelimesinin geçtiği tahmin ediliyor. Saldırgan bu tahmini nasıl kullanır?', '{"choices":["Kelimeyi her konumda açık metinlerin XOR''una uygular, anlamlı parça çıkan yerleri arar","Kelimenin SHA-256 hash''ini alıp şifreli metinlerin başıyla karşılaştırır","Kelimeyi anahtar olarak kullanıp iki şifreli metni Vigenère ile çözer","Tahminin işe yaraması için önce anahtarın tamamını bilmesi gerekir"]}', '{"index":0}', 'Bu yönteme **crib dragging** denir: tahmin edilen kelime $M_1 \oplus M_2$ üzerinde kaydırılır. Doğru konumda öteki mesajın aynı yerdeki parçası anlamlı metin olarak çıkar; yeni çıkan parça yeni tahminlere kapı açar. 17. ünitede aynı hatanın modern hali olan nonce tekrarını göreceksin.', 1, '5. ünite · Anahtar tekrarı: iki zamanlı pad', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-blok-tanim', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'Blok şifre nedir?', '{"choices":["Sabit boyutlu bir girişi anahtara bağlı, tersi alınabilen bir eşlemeyle aynı boyutta çıkışa çeviren şifre","Mesajı harf harf kaydırarak şifreleyen, anahtarı tek bir sayı olan şifre","Değişken uzunluklu mesajdan sabit uzunlukta, geri döndürülemez bir özet üreten fonksiyon","Açık anahtarla şifreleyip özel anahtarla çözen, iki anahtarlı şifre"]}', '{"index":0}', 'Blok şifre, her anahtar için $n$ bitlik bloklar üzerinde bir **permütasyondur**: AES''te $n = 128$. Tersi alınabilir olmalıdır, yoksa çözme olmaz. Sabit uzunlukta özet üreten ve geri dönmeyen fonksiyon hash fonksiyonudur (7. ünite).', 1, '5. ünite · Blok şifre fikri: karıştırma ve yayılma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-karistirma', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'Shannon''ın "karıştırma" (confusion) ilkesi neyi ister?', '{"choices":["Anahtar ile şifreli metin arasındaki ilişkinin karmaşık ve doğrusal olmayan olmasını","Açık metindeki bir bitin şifreli metnin pek çok bitini etkilemesini","Şifreli metnin açık metinden daha uzun olmasını","Her mesajın farklı bir algoritmayla şifrelenmesini"]}', '{"index":0}', '**Karıştırma** anahtarın şifreli metne karmaşık biçimde yansımasıdır; AES''te bunu doğrusal olmayan S-kutusu sağlar. **Yayılma** (diffusion) ise tek bir giriş bitinin çıkışın her yerine dağılmasıdır; AES''te ShiftRows ve MixColumns sağlar.', 1, '5. ünite · Blok şifre fikri: karıştırma ve yayılma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-yayilma', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'İyi bir blok şifrede açık metnin tek bir biti değiştirilirse 128 bitlik şifreli bloğun yaklaşık kaç biti değişir?', '{"choices":["Yaklaşık 64 bit, yani yarısı","Yalnızca 1 bit","Yaklaşık 8 bit, yani bir bayt","128 bitin hepsi"]}', '{"index":0}', 'Buna **çığ etkisi** denir. Her çıkış biti yarı olasılıkla değişmelidir; ortalama 64 bit. Hepsinin değişmesi de bir desen olurdu: saldırgan bütün bitleri çevirerek eski bloğu bulurdu.', 1, '5. ünite · Blok şifre fikri: karıştırma ve yayılma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-permutasyon', 'sifreleme', 'sf-u5', 5, 'tf', 'derived', 'Bir blok şifrede iki farklı açık metin bloğu aynı anahtarla aynı şifreli bloğa dönüşebilir.', '{}', '{"value":false}', 'Yanlış. Aynı anahtarla iki blok aynı çıkışı verseydi alıcı hangisinin gönderildiğini bilemezdi; çözme imkânsız olurdu. Blok şifre her anahtar için bire bir bir eşlemedir (permütasyon).', 1, '5. ünite · Blok şifre fikri: karıştırma ve yayılma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-des-anahtar', 'sifreleme', 'sf-u5', 5, 'num', 'derived', '1977''de standart olan DES''in etkin anahtar uzunluğu kaç bittir?', '{"blanks":1}', '{"blanks":[["56±0"]]}', 'DES anahtarı 64 bit yazılır ama 8 biti eşlik bitidir; etkin uzunluk **56 bittir**. 1998''de EFF''nin Deep Crack makinesi bu anahtar uzayını birkaç günde taradı.', 1, '5. ünite · DES''ten AES''e', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-2des', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'İki ayrı 56 bitlik anahtarla art arda DES uygulamak (2DES) neden 112 bitlik güvenlik vermez?', '{"choices":["Ortada buluşma saldırısı iki yarıyı ayrı tarar; iş yaklaşık $2^{57}$ olur","İki DES uygulaması her zaman tek bir DES anahtarına eşdeğerdir","DES''in S-kutuları ikinci uygulamada birinci uygulamanın etkisini geri alır","112 bitlik anahtarı saklamak için gereken bellek saldırgana anahtarı verir"]}', '{"index":0}', '**Ortada buluşma** (meet-in-the-middle): bilinen bir açık-şifreli çiftte açık metin bütün $K_1$''lerle şifrelenip sonuçlar tabloya yazılır, şifreli metin bütün $K_2$''lerle çözülüp tabloda aranır. İki kez $2^{56}$ iş, toplam yaklaşık $2^{57}$. Bu yüzden 3DES üç uygulama kullanır ve etkin güvenliği yaklaşık 112 bittir.', 3, '5. ünite · DES''ten AES''e', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-aes-yarisma', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'AES nasıl seçildi?', '{"choices":["NIST''in 1997''de açtığı açık yarışmada dünyanın dört bir yanından gelen adaylar yıllarca herkesin önünde incelendi","ABD Ulusal Güvenlik Ajansı tarafından gizli olarak tasarlanıp tamamlanmış halde yayımlandı","En hızlı çalışan algoritma ölçülerek hiç kriptanaliz yapılmadan seçildi","DES''in tasarımcıları DES''in anahtarını 128 bite büyüterek yeni bir sürüm hazırladı"]}', '{"index":0}', 'NIST 1997''de açık bir yarışma ilan etti; 15 aday üç yıl boyunca herkesin gözü önünde saldırıya uğradı. 2000''de Belçikalı Joan Daemen ve Vincent Rijmen''in **Rijndael** algoritması kazandı, 2001''de FIPS-197 olarak yayımlandı. Kerckhoffs ilkesinin kurumsal hali.', 1, '5. ünite · DES''ten AES''e', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-blok-boyu', 'sifreleme', 'sf-u5', 5, 'num', 'derived', 'AES-256''nın blok boyu kaç bittir?', '{"blanks":1}', '{"blanks":[["128±0"]]}', 'AES''in blok boyu anahtar boyundan bağımsız olarak hep **128 bittir** (16 bayt, 4×4 durum matrisi). AES-128, AES-192 ve AES-256''daki sayı anahtar boyunu gösterir.', 1, '5. ünite · AES''in tur yapısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-tur-128', 'sifreleme', 'sf-u5', 5, 'num', 'derived', 'AES-128 kaç tur uygular?', '{"blanks":1}', '{"blanks":[["10±0"]]}', 'Tur sayısı anahtar boyuna bağlıdır: 128 bit → **10**, 192 bit → 12, 256 bit → 14 tur.', 1, '5. ünite · AES''in tur yapısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-tur-256', 'sifreleme', 'sf-u5', 5, 'num', 'derived', 'AES-256 kaç tur uygular?', '{"blanks":1}', '{"blanks":[["14±0"]]}', '128 bit → 10, 192 bit → 12, 256 bit → **14** tur. Daha uzun anahtar, anahtar genişletmenin ve saldırıların daha fazla tura yayılmasını gerektirir.', 1, '5. ünite · AES''in tur yapısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-durum', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'AES''in "durum" (state) matrisi nedir?', '{"choices":["16 baytlık bloğun sütun sütun yerleştirildiği 4×4 bayt matrisi","Anahtarın 4×4 bitlik ikili gösterimi","Bütün tur anahtarlarının art arda yazıldığı 11×16 baytlık tablo","S-kutusunun 16×16 baytlık tablosu"]}', '{"index":0}', 'Girişin 16 baytı ilk sütundan başlayarak yukarıdan aşağı yerleştirilir: baytlar 0-3 ilk sütun, 4-7 ikinci sütun. Bütün tur adımları bu matris üzerinde çalışır.', 1, '5. ünite · AES''in tur yapısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-son-tur', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'AES''in son turunu ötekilerden ayıran nedir?', '{"choices":["Son turda MixColumns adımı yoktur","Son turda SubBytes adımı yoktur","Son turda tur anahtarı eklenmez","Son tur iki kez tekrarlanır"]}', '{"index":0}', 'Son tur SubBytes, ShiftRows ve AddRoundKey''den oluşur; MixColumns atlanır. Bu güvenliği azaltmaz ama şifre çözmenin yapısını şifrelemeyle simetrik yapar. Ayrıca en başta, ilk turdan önce bir AddRoundKey vardır.', 2, '5. ünite · AES''in tur yapısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-kaba-kuvvet-128', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'Saniyede $10^{12}$ anahtar deneyen bir makine AES-128''in bütün anahtar uzayını yaklaşık ne kadar sürede tarar?', '{"choices":["Yaklaşık $10^{19}$ yıl","Yaklaşık 3 gün","Yaklaşık 50 yıl","Yaklaşık $10^{6}$ yıl"]}', '{"index":0}', '$2^{128} \approx 3{,}4 \times 10^{38}$ anahtar. Saniyede $10^{12}$ ile $3{,}4 \times 10^{26}$ saniye, bir yıl yaklaşık $3{,}15 \times 10^7$ saniye: yaklaşık $10^{19}$ yıl. Evrenin yaşı yaklaşık $1{,}4 \times 10^{10}$ yıldır.', 1, '5. ünite · AES''in tur yapısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-subbytes', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'AES''te doğrusal olmayan tek adım hangisidir?', '{"choices":["SubBytes","ShiftRows","MixColumns","AddRoundKey"]}', '{"index":0}', 'SubBytes her baytı S-kutusundan geçirir. ShiftRows bir yer değiştirme, MixColumns GF(2⁸)''de matris çarpımı, AddRoundKey XOR''dur; üçü de doğrusaldır. S-kutusu olmasaydı AES bir doğrusal denklem sistemine dönüşür ve çözülürdü.', 1, '5. ünite · AES tur adımları: SubBytes, ShiftRows, MixColumns, AddRoundKey', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-sbox-63', 'sifreleme', 'sf-u5', 5, 'fill', 'derived', 'AES S-kutusu 0x00 baytını hangi bayta dönüştürür? İki hex rakamıyla yaz.', '{"blanks":1}', '{"blanks":[["63","0x63"]]}', 'S-kutusu önce baytın GF(2⁸)''deki tersini alır (0''ın tersi 0 kabul edilir), sonra bir afin dönüşüm uygular ve sonuna 0x63 ekler (XOR). 0 için ters 0, afin kısım 0 verir ve sonuç **0x63** olur.', 1, '5. ünite · AES tur adımları: SubBytes, ShiftRows, MixColumns, AddRoundKey', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-sbox-sabit-yok', 'sifreleme', 'sf-u5', 5, 'tf', 'derived', 'AES S-kutusu hiçbir baytı kendisine dönüştürmez.', '{}', '{"value":true}', 'Doğru. Afin dönüşümdeki 0x63 sabiti sabit nokta ($S(x) = x$) ve karşıt sabit nokta ($S(x) = \bar{x}$) kalmayacak biçimde seçildi. Testlerimiz 256 değerin hepsini dener.', 1, '5. ünite · AES tur adımları: SubBytes, ShiftRows, MixColumns, AddRoundKey', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-shiftrows', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'ShiftRows adımında durum matrisinin üçüncü satırına (satır 2, sıfırdan sayınca) ne olur?', '{"choices":["İki bayt sola döner","Bir bayt sola döner","Üç bayt sola döner","Yerinde kalır"]}', '{"index":0}', 'Satır $r$, $r$ bayt sola döner: satır 0 yerinde kalır, satır 1 bir, satır 2 iki, satır 3 üç bayt döner. Böylece bir sütunun baytları sonraki MixColumns''ta dört farklı sütuna dağılır.', 1, '5. ünite · AES tur adımları: SubBytes, ShiftRows, MixColumns, AddRoundKey', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-xtime', 'sifreleme', 'sf-u5', 5, 'fill', 'derived', 'MixColumns''ta $\{02\} \cdot x$ çarpımı $x$''i bir bit sola kaydırır; taşma olursa sonuç 0x1B ile XOR''lanır. $\{02\} \cdot \{87\}$ kaçtır? İki hex rakamıyla yaz.', '{"blanks":1}', '{"blanks":[["15","0x15"]]}', '0x87 = 1000 0111. En üst bit 1, yani taşma olacak.
---
Sola kaydır ve 8 bite kırp: 0000 1110 = 0x0E.
---
Taşma olduğu için 0x1B ile XOR: 0x0E ⊕ 0x1B = **0x15**.', 2, '5. ünite · AES tur adımları: SubBytes, ShiftRows, MixColumns, AddRoundKey', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-carp-03', 'sifreleme', 'sf-u5', 5, 'fill', 'derived', '$\{03\} \cdot x = (\{02\} \cdot x) \oplus x$ olduğunu kullanarak $\{03\} \cdot \{87\}$ değerini hesapla. İki hex rakamıyla yaz.', '{"blanks":1}', '{"blanks":[["92","0x92"]]}', 'Önce $\{02\} \cdot \{87\} = $ 0x15 (bir bit sola kaydır, taşma var, 0x1B ile XOR).
---
Sonra 0x15 ⊕ 0x87 = 0001 0101 ⊕ 1000 0111 = 1001 0010 = **0x92**.', 3, '5. ünite · AES tur adımları: SubBytes, ShiftRows, MixColumns, AddRoundKey', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-iki-tur', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'AES''te bir giriş baytının değişmesi kaç tur sonra durum matrisinin 16 baytının hepsini etkiler?', '{"choices":["2 tur","1 tur","5 tur","10 tur"]}', '{"index":0}', '1. turda MixColumns değişen baytı kendi sütununun 4 baytına yayar. 2. turda ShiftRows bu 4 baytı 4 farklı sütuna dağıtır, MixColumns her sütunu doldurur: 16 bayt. Tur gezgininde bir baytı değiştirip renklenmeyi izleyebilirsin.', 2, '5. ünite · AES tur adımları: SubBytes, ShiftRows, MixColumns, AddRoundKey', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-tur-anahtari', 'sifreleme', 'sf-u5', 5, 'num', 'derived', 'AES-128''de anahtar genişletme kaç tane 128 bitlik tur anahtarı üretir?', '{"blanks":1}', '{"blanks":[["11±0"]]}', '10 turun her biri bir tur anahtarı kullanır, ayrıca ilk turdan önce bir AddRoundKey vardır: **11** tur anahtarı, yani 44 tane 32 bitlik kelime.', 1, '5. ünite · AES anahtar genişletme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-kelime-256', 'sifreleme', 'sf-u5', 5, 'num', 'derived', 'AES-256''da anahtar genişletme toplam kaç tane 32 bitlik kelime üretir?', '{"blanks":1}', '{"blanks":[["60±0"]]}', '14 tur + baştaki AddRoundKey = 15 tur anahtarı. Her biri 4 kelime: $4 \times 15 =$ **60** kelime. İlk 8 kelime doğrudan 256 bitlik anahtarın kendisidir.', 2, '5. ünite · AES anahtar genişletme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u5-rcon', 'sifreleme', 'sf-u5', 5, 'mcq', 'derived', 'Anahtar genişletmedeki tur sabitleri (Rcon) ne işe yarar?', '{"choices":["Turları birbirinden farklılaştırır; tur anahtarları arasında simetri kalmaz","Tur anahtarlarını gizli tutmak için şifreli metne eklenir","Anahtar uzunluğunu her turda bir bayt artırır","S-kutusunun yerine kullanılarak hızı artırır"]}', '{"index":0}', 'Rcon değerleri GF(2⁸)''de 2''nin kuvvetleridir (01, 02, 04, ..., 80, 1B, 36). Her turda farklı bir sabit eklenmesi, örneğin bütün baytları aynı olan bir anahtardan da birbirine benzemeyen tur anahtarları çıkmasını sağlar.', 1, '5. ünite · AES anahtar genişletme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-ecb-tanim', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'ECB (Electronic Codebook) modunda bloklar nasıl şifrelenir?', '{"choices":["Her blok aynı anahtarla, ötekilerden bağımsız olarak ayrı ayrı şifrelenir","Her blok şifrelenmeden önce bir önceki şifreli blokla XOR''lanır","Bir sayaç şifrelenir ve çıkan anahtar akışı açık metinle XOR''lanır","Her blok farklı ve rastgele seçilmiş bir anahtarla şifrelenir"]}', '{"index":0}', 'ECB en saf haldir: $C_i = E_K(P_i)$. Bloklar birbirinden habersizdir. Bu yüzden aynı açık blok her yerde aynı şifreli bloğu verir.', 1, '6. ünite · ECB ve desen sızıntısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-penguen', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'Geniş tek renkli alanları olan bir resim ECB ile şifrelenince ne görülür?', '{"choices":["Resmin ana hatları seçilebilir; aynı renkli bloklar aynı şifreli bloğa dönüşür","Tamamen düzgün gri bir yüzey; şifreleme bütün renkleri ortalamaya çeker","Rastgele görünen gürültü; resim hakkında hiçbir şey anlaşılmaz","Resmin renkleri ters dönmüş hali; şekiller aynen kalır"]}', '{"index":0}', 'Tek renkli bir alandaki her 16 baytlık blok aynıdır, ECB ile şifrelenince de aynı kalır. Renkler bozulur ama **desen** kalır: penguenin hatları gürültü içinde seçilir. CBC ve CTR''de aynı resim gürültüye döner.', 1, '6. ünite · ECB ve desen sızıntısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-ecb-tekrar', 'sifreleme', 'sf-u6', 6, 'tf', 'derived', 'ECB ile şifrelenmiş iki mesajın 3. blokları aynıysa, açık metinlerin 3. blokları da aynıdır.', '{}', '{"value":true}', 'Doğru. Aynı anahtarla blok şifre bire bir eşlemedir: aynı şifreli blok yalnızca aynı açık bloktan çıkar. Saldırgan anahtarı bilmeden hangi blokların tekrar ettiğini görür; örneğin aynı maaş bilgisini taşıyan kayıtları eşleştirir.', 1, '6. ünite · ECB ve desen sızıntısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-ecb-kod', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'Bir geliştirici kullanıcı kayıtlarını şifrelerken şu ayarı seçiyor: `AES-256, ECB, sabit anahtar`. "256 bit anahtar kullandığım için güvenli" diyor. Asıl sorun nedir?', '{"choices":["Mod: ECB aynı alanları aynı şifreli bloğa çevirip veri desenlerini sızdırır","256 bitlik anahtar AES için fazla uzundur ve tur sayısını bozar","AES-256 yalnız devlet kurumlarına izin verilen bir algoritmadır","Anahtar 256 bit olunca blok boyu da 256 bit olur ve kayıtlar bölünür"]}', '{"index":0}', 'Anahtar uzunluğu kaba kuvvete karşı korur; ama ECB''nin zayıflığı kaba kuvvetle ilgili değildir. Aynı içerikli bloklar aynı görünür. Doğrusu AES-GCM gibi bir AEAD moduyla her kayıtta yeni nonce kullanmaktır.', 2, '6. ünite · ECB ve desen sızıntısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-cbc-tanim', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'CBC modunda şifreleme formülü hangisidir?', '{"choices":["$C_i = E_K(P_i ⊕ C_{i-1})$, $C_0 = IV$","$C_i = E_K(P_i)$","$C_i = P_i \\oplus E_K(N_i)$","$C_i = E_K(P_i) \\oplus P_{i-1}$"]}', '{"index":0}', 'CBC her açık bloğu şifrelemeden önce bir önceki **şifreli** blokla XOR''lar; ilk blok için IV kullanılır. Böylece aynı açık bloklar farklı yerlerde farklı şifreli bloklar verir.', 1, '6. ünite · CBC ve başlangıç vektörü (IV)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-iv-gizli', 'sifreleme', 'sf-u6', 6, 'tf', 'derived', 'CBC''de IV anahtar gibi gizli tutulmalıdır; şifreli metinle birlikte gönderilirse güvenlik kaybolur.', '{}', '{"value":false}', 'Yanlış. IV gizli değildir ve genellikle şifreli metnin başına eklenerek gönderilir; alıcının çözebilmesi için gereklidir. CBC''de IV''nin **öngörülemez** (rastgele) olması gerekir. Tahmin edilebilir IV, TLS 1.0''a karşı BEAST saldırısına yol açtı.', 1, '6. ünite · CBC ve başlangıç vektörü (IV)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-sabit-iv', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'Bir uygulama CBC modunda her mesaj için IV olarak 16 sıfır bayt kullanıyor. Bu neyi sızdırır?', '{"choices":["Aynı başlangıca sahip mesajlar aynı ilk şifreli bloğu verir; ortak önekler görünür","Anahtarın ilk 16 baytı doğrudan şifreli metnin başında görünür","Hiçbir şey; IV''nin değeri yalnız hızı etkiler","Mesajlar çözülemez hale gelir çünkü sıfır IV geçersizdir"]}', '{"index":0}', 'Sabit IV''yle aynı anahtar ve aynı ilk blok her zaman aynı $C_1$''i verir. Saldırgan "bu iki mesaj aynı şekilde başlıyor" bilgisini alır; ECB''nin sorunu mesajlar arası düzeyde geri gelir.', 1, '6. ünite · CBC ve başlangıç vektörü (IV)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-cbc-hata', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'CBC ile şifrelenmiş bir mesajda saldırgan $C_3$ bloğunun tek bir bitini çevirir. Çözülen açık metinde ne olur?', '{"choices":["$P_3$ tamamen bozulur, $P_4$''te aynı konumdaki tek bit çevrilir","Yalnız $P_3$''te aynı konumdaki tek bit çevrilir","$P_3$''ten sonraki bütün bloklar bozulur","Çözme hata verir ve hiçbir blok elde edilemez"]}', '{"index":0}', '$P_3 = D_K(C_3) \oplus C_2$: değişen $C_3$ şifre çözmeden geçer, çığ etkisiyle $P_3$ rastgeleleşir. $P_4 = D_K(C_4) \oplus C_3$: burada $C_3$ yalnız XOR''lanır, yani $P_4$''te aynı bit çevrilir. Saldırgan bir bloğu feda ederek sonrakinde istediği biti değiştirebilir; CBC tek başına bütünlük sağlamaz.', 2, '6. ünite · CBC ve başlangıç vektörü (IV)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-dolgu-21', 'sifreleme', 'sf-u6', 6, 'num', 'derived', '21 baytlık bir mesaj AES-CBC ile PKCS#7 dolgusuyla şifrelenecek. Kaç dolgu baytı eklenir?', '{"blanks":1}', '{"blanks":[["11±0"]]}', 'Blok 16 bayt. 21 baytı tamamlayan en küçük kat 32''dir: $32 - 21 =$ **11** bayt eklenir, her birinin değeri 0x0B''dir.', 1, '6. ünite · Dolgu (PKCS#7)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-dolgu-tam', 'sifreleme', 'sf-u6', 6, 'num', 'derived', '32 baytlık (tam iki blok) bir mesaj PKCS#7 dolgusuyla şifrelenince şifreli metin kaç bayt olur?', '{"blanks":1}', '{"blanks":[["48±0"]]}', 'PKCS#7 dolgusu **her zaman** eklenir. Mesaj tam bloksa 16 tane 0x10 baytından oluşan koca bir dolgu bloğu eklenir: $32 + 16 =$ **48** bayt. Yoksa alıcı, 0x01 ile biten bir mesajın son baytını dolgu sanabilirdi.', 2, '6. ünite · Dolgu (PKCS#7)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-blok-sayisi', 'sifreleme', 'sf-u6', 6, 'num', 'derived', '1000 baytlık bir dosya AES-CBC ve PKCS#7 dolgusuyla şifrelenince kaç blok şifreli metin çıkar (IV hariç)?', '{"blanks":1}', '{"blanks":[["63±0"]]}', '$1000 = 62 \times 16 + 8$. Son blokta 8 bayt var; 8 dolgu baytı (0x08) eklenir ve 1008 bayt olur: $1008 / 16 =$ **63** blok.', 1, '6. ünite · Dolgu (PKCS#7)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-dolgu-deger', 'sifreleme', 'sf-u6', 6, 'fill', 'derived', '11 baytlık bir mesaja PKCS#7 dolgusu eklenince sona hangi baytlar gelir? Hex olarak boşlukla ayırarak yaz.', '{"blanks":1}', '{"blanks":[["05 05 05 05 05"]]}', '$16 - 11 = 5$ bayt eksik. PKCS#7''de her dolgu baytının değeri eklenen bayt sayısıdır: **05 05 05 05 05**.', 1, '6. ünite · Dolgu (PKCS#7)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-dolgu-oracle', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'Bir sunucu çözdüğü mesajın dolgusu hatalıysa "dolgu hatalı", doğruysa ama içerik geçersizse "geçersiz istek" yanıtı veriyor. Bu neden tehlikelidir?', '{"choices":["Saldırgan bu farkı kullanarak anahtarı bilmeden şifreli metni bayt bayt çözebilir","Hata mesajı kullanıcıyı korkutur ve uygulamadan vazgeçirir","Sunucu her hatalı mesajda yeni anahtar üretmek zorunda kalır","Hiçbir tehlikesi yoktur; hata mesajları yalnız günlüğe yazılır"]}', '{"index":0}', 'Buna **padding oracle** denir (Vaudenay, 2002). Saldırgan $C_{i-1}$''in baytlarını değiştirip sunucuya yollar; "dolgu doğru" yanıtı, $P_i$''nin bir baytı hakkında kesin bilgi verir. 17. ünitede oyuncak bir kâhinle bunu kendin yapacaksın. Çözüm: kimlik doğrulamalı şifreleme ve tek tip hata.', 2, '6. ünite · Dolgu (PKCS#7)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-ctr-tanim', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'CTR modunda şifreleme nasıl yapılır?', '{"choices":["Nonce ve sayaçtan oluşan blok şifrelenir, çıkan anahtar akışı açık metinle XOR''lanır","Her açık blok bir önceki şifreli blokla XOR''lanıp şifrelenir","Her açık blok ayrı ayrı şifrelenir ve sırası sayaçla karıştırılır","Açık metin şifrelenir, sonra sayaç değeri şifreli metnin sonuna eklenir"]}', '{"index":0}', 'CTR blok şifreyi bir **akış şifresine** çevirir: $C_i = P_i \oplus E_K(\text{nonce} \| i)$. Açık metin blok şifreden hiç geçmez. Bloklar birbirinden bağımsız olduğu için paralel şifrelenebilir ve rastgele erişilebilir.', 1, '6. ünite · CTR modu ve nonce', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-ctr-dolgu', 'sifreleme', 'sf-u6', 6, 'tf', 'derived', 'CTR modunda dolgu gerekmez; şifreli metin açık metinle aynı uzunluktadır.', '{}', '{"value":true}', 'Doğru. Anahtar akışının yalnız gereken kadarı kullanılır; son bloktaki fazla baytlar atılır. Bu yüzden padding oracle saldırısı CTR''ye uygulanmaz.', 1, '6. ünite · CTR modu ve nonce', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-ctr-nonce', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'CTR''de aynı anahtarla aynı nonce iki farklı mesajda kullanılırsa ne olur?', '{"choices":["Aynı anahtar akışı iki kez kullanılır ve açık metinlerin XOR''u sızar","İkinci mesaj çözülemez hale gelir ama birinci mesaj güvende kalır","Yalnızca şifreleme yavaşlar; güvenlik etkilenmez","Anahtar doğrudan şifreli metinden okunabilir hale gelir"]}', '{"index":0}', 'Aynı anahtar ve nonce aynı $E_K(\text{nonce} \| i)$ dizisini üretir. $C_1 \oplus C_2 = P_1 \oplus P_2$: one-time pad''in tekrar kullanılmasıyla aynı. CTR''de nonce''un gizli olması gerekmez ama **asla tekrar etmemesi** gerekir.', 2, '6. ünite · CTR modu ve nonce', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-bit-cevir', 'sifreleme', 'sf-u6', 6, 'fill', 'derived', 'AES-CTR ile şifrelenmiş bir ödeme mesajında tutarın ilk rakamının `1` (ASCII 0x31) olduğunu biliyorsun; o konumdaki şifreli bayt 0x5A. Anahtarı bilmeden bu rakamı `9` (ASCII 0x39) yapmak için şifreli baytı ne yapmalısın? Yeni baytı iki hex rakamıyla yaz.', '{"blanks":1}', '{"blanks":[["52","0x52"]]}', 'CTR''de $C = P \oplus S$ ($S$ anahtar akışı). $C'' = C \oplus P \oplus P''$ yazarsan çözülünce $C'' \oplus S = P''$ olur.
---
$P \oplus P'' = $ 0x31 ⊕ 0x39 = 0x08.
---
$C'' = $ 0x5A ⊕ 0x08 = **0x52**. Ödeme artık 9 ile başlıyor; CTR bunu fark etmez. Bu yüzden şifreleme tek başına bütünlük sağlamaz.', 3, '6. ünite · CTR modu ve nonce', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-ctr-paralel', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'CTR''nin CBC''ye göre bir avantajı hangisidir?', '{"choices":["Bloklar paralel işlenir ve ortadaki bir bloğa doğrudan erişilir","Nonce tekrar kullanılsa bile güvenli kalır","Şifreli metinde yapılan değişiklikleri kendiliğinden fark eder","Blok şifre yerine hash fonksiyonu kullandığı için daha güvenlidir"]}', '{"index":0}', 'CBC''de şifreleme sıralıdır: her blok bir öncekini bekler. CTR''de $i$. bloğun anahtar akışı yalnız $i$''ye bağlıdır; bloklar paralel ve istenen sırada işlenir. Ama CTR değişiklikleri fark etmez ve nonce tekrarına hiç dayanıklı değildir.', 1, '6. ünite · CTR modu ve nonce', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-aead-tanim', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'AEAD (kimlik doğrulamalı şifreleme) neyi sağlar?', '{"choices":["Gizliliği ve bütünlüğü birlikte; değiştirilmiş şifreli metin çözülmeden reddedilir","Yalnız gizliliği; bütünlük için ayrıca dijital imza gerekir","Yalnız bütünlüğü; mesaj şifrelenmeden gönderilir","Göndericinin kimliğini herkese karşı kanıtlayan inkâr edilemezliği"]}', '{"index":0}', 'AEAD şifreli metne bir **doğrulama etiketi** (tag) ekler. Çözme sırasında etiket yeniden hesaplanır; tek bir bit bile değiştiyse çözme hiçbir açık metin vermeden başarısız olur. Simetrik anahtarı iki taraf paylaştığı için inkâr edilemezlik sağlamaz; onu imzalar sağlar (11. ünite).', 1, '6. ünite · Kimlik doğrulamalı şifreleme (AEAD) ve GCM', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-gcm-yapi', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'AES-GCM hangi iki parçadan oluşur?', '{"choices":["Şifreleme için CTR modu, doğrulama etiketi için GF(2¹²⁸)''de çalışan GHASH","Şifreleme için CBC modu, doğrulama etiketi için SHA-256","Şifreleme için ECB modu, doğrulama etiketi için CRC-32","Şifreleme için ChaCha20, doğrulama etiketi için Poly1305"]}', '{"index":0}', 'GCM (Galois/Counter Mode) = CTR ile şifreleme + GHASH ile etiket. GHASH, şifreli bloklarla $H = E_K(0)$ arasında GF(2¹²⁸)''de bir polinom hesaplar. ChaCha20 + Poly1305 öteki yaygın AEAD''dir.', 2, '6. ünite · Kimlik doğrulamalı şifreleme (AEAD) ve GCM', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-gcm-nonce', 'sifreleme', 'sf-u6', 6, 'num', 'derived', 'AES-GCM''de önerilen nonce uzunluğu kaç bittir?', '{"blanks":1}', '{"blanks":[["96±0"]]}', 'GCM için önerilen nonce **96 bit**tir (12 bayt); kalan 32 bit blok sayacıdır. Web Crypto''daki `iv: rastgeleBayt(12)` bu yüzden 12 bayttır.', 1, '6. ünite · Kimlik doğrulamalı şifreleme (AEAD) ve GCM', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-aad', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'AEAD''deki "ek veri" (AAD) ne için kullanılır?', '{"choices":["Açık kalacak ama değiştirilmemesi gereken veriyi etiketle korumak için","Anahtarı şifreli metnin içine gizlemek için","Şifreli metni sıkıştırıp boyutunu küçültmek için","Nonce''u gizli tutmak için şifreli metnin sonuna eklenen veri için"]}', '{"index":0}', 'Bir ağ paketinin başlığı yönlendirme için açık kalmalıdır ama saldırgan onu değiştirememelidir. AAD şifrelenmez, ama etikete katılır; bir bit değişirse çözme reddedilir. Örneğin mesajlaşmada "kimden, hangi sohbet, kaçıncı mesaj" bilgisi AAD olabilir.', 1, '6. ünite · Kimlik doğrulamalı şifreleme (AEAD) ve GCM', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-gcm-tekrar', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'AES-GCM''de aynı anahtar ve nonce ile iki mesaj şifrelenirse ne olur?', '{"choices":["Açık metinlerin XOR''u sızar ve saldırgan sahte etiket üretebilir","Yalnız iki mesajın uzunluklarının aynı olduğu anlaşılır","İkinci mesajın etiketi geçersiz olur ama başka bir şey sızmaz","GCM nonce tekrarını kendiliğinden fark edip ikinci şifrelemeyi reddeder"]}', '{"index":0}', 'GCM''nin şifreleme kısmı CTR''dir: nonce tekrarı açık metinlerin XOR''unu verir. Daha kötüsü, iki etiketten doğrulama anahtarı $H$ için bir denklem çıkar; $H$ bulununca saldırgan istediği mesaja geçerli etiket üretir. Nonce''u sayaçla ya da yeterince büyük rastgele değerle üretmek şarttır.', 3, '6. ünite · Kimlik doğrulamalı şifreleme (AEAD) ve GCM', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-once-dogrula', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'Bir uygulama AES-CBC ile şifreliyor, ayrıca HMAC hesaplıyor. Alıcı tarafta önce şifreyi çözüp dolguyu denetliyor, sonra HMAC''e bakıyor. Sorun nedir?', '{"choices":["Doğrulanmamış veriyi çözüp dolgu hatası verdiği için padding oracle saldırısına açık kalır","HMAC ile CBC aynı anahtarı paylaştığı için çakışır ve çözme başarısız olur","HMAC şifreli metni değil açık metni doğrulamalıydı; sıralama önemsizdir","CBC kimlik doğrulamalı bir mod olduğu için HMAC gereksizdir"]}', '{"index":0}', 'Doğru sıra **şifrele, sonra MAC** (encrypt-then-MAC): alıcı önce etiketi sabit zamanda doğrular, tutmazsa hiçbir şey çözmeden reddeder. Önce çözmek, dolgu kâhinine kapı açar. AEAD modları bu sıralamayı kendileri yapar; elle birleştirmek yerine AES-GCM ya da ChaCha20-Poly1305 kullan.', 2, '6. ünite · Kimlik doğrulamalı şifreleme (AEAD) ve GCM', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-akis-tanim', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'Akış şifresi nasıl çalışır?', '{"choices":["Anahtar ve nonce''tan uzun bir sözde rastgele anahtar akışı üretir ve açık metinle XOR''lar","Mesajı 16 baytlık bloklara bölüp her bloğu ayrı bir anahtarla şifreler","Mesajın her harfini alfabede anahtardaki sayı kadar kaydırır","Mesajı açık anahtarla şifreler, özel anahtarla çözer"]}', '{"index":0}', 'Akış şifresi one-time pad''i taklit eder: gerçek rastgele anahtar yerine kısa anahtardan **anahtar akışı** üretilir. Bu yüzden one-time pad''in kuralı burada da geçerlidir: aynı anahtar ve nonce ile anahtar akışı asla tekrar kullanılmaz.', 1, '6. ünite · Akış şifreleri ve ChaCha20', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-chacha-anahtar', 'sifreleme', 'sf-u6', 6, 'num', 'derived', 'ChaCha20''nin anahtarı kaç bittir?', '{"blanks":1}', '{"blanks":[["256±0"]]}', 'ChaCha20 **256 bitlik** anahtar, 96 bitlik nonce ve 32 bitlik blok sayacı kullanır (RFC 8439). Her blok 64 baytlık anahtar akışı verir.', 1, '6. ünite · Akış şifreleri ve ChaCha20', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-chacha-tur', 'sifreleme', 'sf-u6', 6, 'num', 'derived', 'ChaCha20 adındaki sayı tur sayısıdır. ChaCha20 kaç tur uygular?', '{"blanks":1}', '{"blanks":[["20±0"]]}', 'ChaCha20 **20 tur** uygular: 10 kez art arda bir sütun turu ve bir köşegen turu. Her tur 4 çeyrek turdan oluşur. ChaCha8 ve ChaCha12 daha az turlu, daha hızlı varyantlardır.', 1, '6. ünite · Akış şifreleri ve ChaCha20', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-arx', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'ChaCha20''nin çeyrek turunda hangi üç işlem kullanılır?', '{"choices":["32 bit toplama, döndürme ve XOR","S-kutusu, satır kaydırma ve sütun karıştırma","Modüler üs alma, çarpma ve bölme","Hash, dolgu ve sıkıştırma"]}', '{"index":0}', '**ARX**: Add (mod $2^{32}$ toplama), Rotate (bit döndürme) ve XOR. Toplama doğrusal olmayanlığı sağlar. Bu üç işlem her işlemcide sabit sürede çalışır; tablo araması olmadığı için önbellek zamanlaması gibi yan kanallara daha dayanıklıdır.', 1, '6. ünite · Akış şifreleri ve ChaCha20', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-dondurme', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'ChaCha20 çeyrek turunda kullanılan döndürme miktarları hangileridir?', '{"choices":["16, 12, 8 ve 7 bit","1, 2, 4 ve 8 bit","7, 9, 13 ve 18 bit","2, 13, 22 ve 25 bit"]}', '{"index":0}', 'Sırasıyla 16, 12, 8 ve 7 bit. Salsa20 (ChaCha''nın öncülü) 7, 9, 13 ve 18 kullanır; 2, 13, 22 ve 25 ise SHA-256''nın döndürmeleridir (7. ünite). Çeyrek tur gezgininde her adımı izleyebilirsin.', 2, '6. ünite · Akış şifreleri ve ChaCha20', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-poly', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'ChaCha20-Poly1305''te Poly1305''in görevi nedir?', '{"choices":["Şifreli metin ve ek veri için doğrulama etiketi üretmek","ChaCha20''nin anahtarını paroladan türetmek","Nonce''u rastgele üretmek","Şifreli metni sıkıştırmak"]}', '{"index":0}', 'Poly1305 tek kullanımlık bir MAC''tir: her mesajda ChaCha20''nin ilk anahtar akışı bloğundan yeni bir Poly1305 anahtarı türetilir. ChaCha20 gizliliği, Poly1305 bütünlüğü sağlar; birlikte bir AEAD oluştururlar.', 1, '6. ünite · Akış şifreleri ve ChaCha20', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-aes-ni', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'Bir uygulama donanımsal AES desteği (AES-NI ya da ARMv8 şifreleme uzantıları) olmayan eski telefonlarda da hızlı çalışmalı. Hangi AEAD daha uygundur?', '{"choices":["ChaCha20-Poly1305","AES-GCM","AES-ECB","AES-CBC, MAC olmadan"]}', '{"index":0}', 'Donanım desteği olmadan AES yazılımda yavaştır ve tablo tabanlı uygulamalar önbellek zamanlamasına açıktır. ChaCha20 yalnız toplama, döndürme ve XOR kullandığı için yazılımda hızlı ve sabit zamanlıdır. Google bu yüzden 2014''te Android''de TLS için ChaCha20-Poly1305''i öne çıkardı. Donanım desteği olan işlemcilerde AES-GCM daha hızlıdır.', 1, '6. ünite · Doğru modu ve algoritmayı seçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-tls13', 'sifreleme', 'sf-u6', 6, 'tf', 'derived', 'TLS 1.3 yalnızca kimlik doğrulamalı şifreleme (AEAD) kullanan şifre takımlarına izin verir; CBC tabanlı takımlar çıkarılmıştır.', '{}', '{"value":true}', 'Doğru. TLS 1.3''te kalan takımlar AES-GCM, AES-CCM ve ChaCha20-Poly1305''tir. CBC ile MAC''i elle birleştiren eski takımlar BEAST, Lucky13 ve POODLE gibi saldırılara yol açmıştı.', 1, '6. ünite · Doğru modu ve algoritmayı seçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-disk', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'Disk şifrelemede (BitLocker, FileVault, LUKS) neden genellikle GCM yerine XTS modu kullanılır?', '{"choices":["Şifreli sektör aynı boyutta kalmalı; etiket ve nonce için yer yoktur","XTS, GCM''den daha güçlü bütünlük koruması sağlar","GCM yalnız ağ trafiğinde kullanılabilen, lisanslı bir moddur","XTS anahtar gerektirmediği için kurtarma kolaylaşır"]}', '{"index":0}', 'Bir 4096 baytlık sektör şifrelenince yine 4096 bayt olmalıdır; etiket ve nonce saklayacak yer yoktur. XTS, sektör numarasını "ince ayar" (tweak) olarak kullanır: aynı veri farklı sektörlerde farklı şifrelenir. Bedeli: XTS değişikliği fark etmez, yalnız gizlilik sağlar.', 2, '6. ünite · Doğru modu ve algoritmayı seçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-kendi-modun', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'Bir ekip "AES-GCM karmaşık, AES-CTR ile şifreleyip sonuna mesajın SHA-256''sını ekleyelim" diyor. Sorun nedir?', '{"choices":["Hash anahtarsızdır; saldırgan değiştirdiği metnin hash''ini kendisi hesaplar","SHA-256 çıktısı 32 bayt olduğu için mesaj boyutu çok büyür","CTR ile SHA-256 aynı anda kullanılamaz","Hiçbir sorun yoktur; bu yöntem GCM ile eşdeğerdir"]}', '{"index":0}', 'Bütünlük için **anahtarlı** bir yapı gerekir (MAC, 8. ünite). Saldırgan CTR''de bit çevirerek açık metni öngörülebilir biçimde değiştirebilir. Hash açık metnin hash''iyse, değişen açık metni bildiği için hash''i de güncelleyebilir. Hazır bir AEAD kullanmak hem daha kısa hem güvenlidir.', 1, '6. ünite · Doğru modu ve algoritmayı seçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u6-wifi', 'sifreleme', 'sf-u6', 6, 'mcq', 'derived', 'Ev Wi-Fi''ında WPA2 ya da WPA3 kullanıldığında havadaki trafik hangi yapıyla korunur?', '{"choices":["AES tabanlı kimlik doğrulamalı şifreleme","Sezar şifresinin 256 farklı kaydırmayla uygulanması","Her paketin SHA-256 hash''i, şifreleme olmadan","One-time pad; anahtar yönlendiricinin etiketinde yazar"]}', '{"index":0}', 'WPA2 AES-CCMP kullanır (CTR + CBC-MAC); WPA3 buna ek olarak GCMP-256''yı tanımlar. Wi-Fi parolası doğrudan anahtar değildir; el sıkışmada her oturum için ayrı anahtarlar türetilir (9. ve 12. ünitelerdeki fikirler).', 1, '6. ünite · Doğru modu ve algoritmayı seçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-hedefler', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-gizlilik';
UPDATE questions SET kavram = 'u1-hedefler', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-butunluk';
UPDATE questions SET kavram = 'u1-hedefler', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-kimlik';
UPDATE questions SET kavram = 'u1-hedefler', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-inkar';
UPDATE questions SET kavram = 'u1-hedefler', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-sifre-yetmez';
UPDATE questions SET kavram = 'u1-kerckhoffs', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-ilke';
UPDATE questions SET kavram = 'u1-kerckhoffs', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u1-gizli-algoritma';
UPDATE questions SET kavram = 'u1-kerckhoffs', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-acik-avantaj';
UPDATE questions SET kavram = 'u1-anahtar', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-fark';
UPDATE questions SET kavram = 'u1-anahtar', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u1-128-bit';
UPDATE questions SET kavram = 'u1-anahtar', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-bir-bit';
UPDATE questions SET kavram = 'u1-anahtar', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u1-kaba-kuvvet';
UPDATE questions SET kavram = 'u1-kodlama', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u1-base64-sifre';
UPDATE questions SET kavram = 'u1-kodlama', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u1-base64-coz';
UPDATE questions SET kavram = 'u1-kodlama', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u1-base64-boyut';
UPDATE questions SET kavram = 'u1-kodlama', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-neden-var';
UPDATE questions SET kavram = 'u1-uc-islem', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-geri-donus';
UPDATE questions SET kavram = 'u1-uc-islem', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-hash-sabit';
UPDATE questions SET kavram = 'u1-uc-islem', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-hangisi';
UPDATE questions SET kavram = 'u1-uc-islem', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-tablo';
UPDATE questions SET kavram = 'u1-bayt', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u1-hex-a';
UPDATE questions SET kavram = 'u1-bayt', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u1-utf8-s';
UPDATE questions SET kavram = 'u1-bayt', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u1-anahtar-hex';
UPDATE questions SET kavram = 'u1-bayt', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u1-bit-desen';
UPDATE questions SET kavram = 'u1-simetrik-asimetrik', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-simetrik';
UPDATE questions SET kavram = 'u1-simetrik-asimetrik', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-dagitim';
UPDATE questions SET kavram = 'u1-simetrik-asimetrik', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u1-anahtar-sayisi';
UPDATE questions SET kavram = 'u1-tehdit', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-tanim';
UPDATE questions SET kavram = 'u1-tehdit', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-tls-sunucu';
UPDATE questions SET kavram = 'u1-tehdit', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u1-mutlak';
UPDATE questions SET kavram = 'u2-entropi', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-tanim';
UPDATE questions SET kavram = 'u2-entropi', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u2-zar';
UPDATE questions SET kavram = 'u2-entropi', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u2-yazi-tura';
UPDATE questions SET kavram = 'u2-entropi', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-hileli';
UPDATE questions SET kavram = 'u2-parola', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u2-pin';
UPDATE questions SET kavram = 'u2-parola', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u2-kucuk-harf';
UPDATE questions SET kavram = 'u2-parola', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u2-kelime';
UPDATE questions SET kavram = 'u2-parola', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-insan-secimi';
UPDATE questions SET kavram = 'u2-prng', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-tohum';
UPDATE questions SET kavram = 'u2-prng', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u2-lcg';
UPDATE questions SET kavram = 'u2-prng', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u2-lcg-tahmin';
UPDATE questions SET kavram = 'u2-prng', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u2-math-random';
UPDATE questions SET kavram = 'u2-csprng', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-tarayici';
UPDATE questions SET kavram = 'u2-csprng', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-ozellik';
UPDATE questions SET kavram = 'u2-csprng', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-isletim-sistemi';
UPDATE questions SET kavram = 'u2-trng', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-kaynak';
UPDATE questions SET kavram = 'u2-trng', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-halka';
UPDATE questions SET kavram = 'u2-trng', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-isleme';
UPDATE questions SET kavram = 'u2-sapma', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-von-neumann';
UPDATE questions SET kavram = 'u2-sapma', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u2-von-neumann-hesap';
UPDATE questions SET kavram = 'u2-sapma', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-insan';
UPDATE questions SET kavram = 'u2-sapma', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-test-kanit';
UPDATE questions SET kavram = 'u2-hatalar', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-debian';
UPDATE questions SET kavram = 'u2-hatalar', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u2-zaman-tohum';
UPDATE questions SET kavram = 'u2-hatalar', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u2-anahtar-entropisi';
UPDATE questions SET kavram = 'u3-xor', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-xor-tablo';
UPDATE questions SET kavram = 'u3-xor', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-xor-hesap';
UPDATE questions SET kavram = 'u3-xor', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-xor-hex';
UPDATE questions SET kavram = 'u3-xor', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-geri-alma';
UPDATE questions SET kavram = 'u3-xor', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-iki-zaman';
UPDATE questions SET kavram = 'u3-mod', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-kalan';
UPDATE questions SET kavram = 'u3-mod', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-saat';
UPDATE questions SET kavram = 'u3-mod', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-negatif';
UPDATE questions SET kavram = 'u3-mod', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-denklik';
UPDATE questions SET kavram = 'u3-mod', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-carpim';
UPDATE questions SET kavram = 'u3-ebob', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-ebob';
UPDATE questions SET kavram = 'u3-ebob', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-adim';
UPDATE questions SET kavram = 'u3-ebob', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-aralarinda-asal';
UPDATE questions SET kavram = 'u3-ters', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-ters-11';
UPDATE questions SET kavram = 'u3-ters', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-ters-26';
UPDATE questions SET kavram = 'u3-ters', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-rsa-d';
UPDATE questions SET kavram = 'u3-ters', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-ters-yok';
UPDATE questions SET kavram = 'u3-us', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-us-kucuk';
UPDATE questions SET kavram = 'u3-us', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-kare-carp';
UPDATE questions SET kavram = 'u3-us', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-adim-sayisi';
UPDATE questions SET kavram = 'u3-us', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-zamanlama';
UPDATE questions SET kavram = 'u3-asal', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-carpanlar';
UPDATE questions SET kavram = 'u3-asal', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-tek-yon';
UPDATE questions SET kavram = 'u3-asal', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-kucuk-asal';
UPDATE questions SET kavram = 'u3-euler', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-phi-asal';
UPDATE questions SET kavram = 'u3-euler', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-phi-rsa';
UPDATE questions SET kavram = 'u3-euler', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-phi-15';
UPDATE questions SET kavram = 'u3-euler', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-fermat';
UPDATE questions SET kavram = 'u3-euler', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-fermat-2';
UPDATE questions SET kavram = 'u3-cisim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-gf2-toplama';
UPDATE questions SET kavram = 'u3-cisim', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-gf28-toplama';
UPDATE questions SET kavram = 'u3-cisim', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u3-xtime';
UPDATE questions SET kavram = 'u3-cisim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u3-neden-cisim';
UPDATE questions SET kavram = 'u4-sezar', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-sezar-tanim';
UPDATE questions SET kavram = 'u4-sezar', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u4-anahtar-sayisi';
UPDATE questions SET kavram = 'u4-sezar', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u4-coz-3';
UPDATE questions SET kavram = 'u4-sezar', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u4-kaba-kuvvet';
UPDATE questions SET kavram = 'u4-sezar', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-rot13';
UPDATE questions SET kavram = 'u4-yerine-koyma', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-anahtar-uzayi';
UPDATE questions SET kavram = 'u4-yerine-koyma', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u4-atbas';
UPDATE questions SET kavram = 'u4-yerine-koyma', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-harf-deseni';
UPDATE questions SET kavram = 'u4-frekans', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-fikir';
UPDATE questions SET kavram = 'u4-frekans', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u4-en-sik';
UPDATE questions SET kavram = 'u4-frekans', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-kisa-metin';
UPDATE questions SET kavram = 'u4-frekans', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-dil';
UPDATE questions SET kavram = 'u4-vigenere', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-vigenere-tanim';
UPDATE questions SET kavram = 'u4-vigenere', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u4-vigenere-coz';
UPDATE questions SET kavram = 'u4-vigenere', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u4-bilinen';
UPDATE questions SET kavram = 'u4-vigenere-kirma', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u4-kasiski';
UPDATE questions SET kavram = 'u4-vigenere-kirma', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-sonra';
UPDATE questions SET kavram = 'u4-vigenere-kirma', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-ic';
UPDATE questions SET kavram = 'u4-aktarim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-aktarim-tanim';
UPDATE questions SET kavram = 'u4-aktarim', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u4-cit';
UPDATE questions SET kavram = 'u4-aktarim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-frekans-ayni';
UPDATE questions SET kavram = 'u4-enigma', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-rotor';
UPDATE questions SET kavram = 'u4-enigma', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-kendine';
UPDATE questions SET kavram = 'u4-enigma', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-ayni-ayar';
UPDATE questions SET kavram = 'u4-enigma', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-kirilma';
UPDATE questions SET kavram = 'u4-dersler', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u4-anahtar-uzayi-yetmez';
UPDATE questions SET kavram = 'u4-dersler', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-istatistik';
UPDATE questions SET kavram = 'u4-dersler', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u4-bugun';
UPDATE questions SET kavram = 'u5-otp', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-xor-geri';
UPDATE questions SET kavram = 'u5-otp', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u5-xor-bayt';
UPDATE questions SET kavram = 'u5-otp', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-otp-kosullar';
UPDATE questions SET kavram = 'u5-otp', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-kusursuz';
UPDATE questions SET kavram = 'u5-otp', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u5-anahtar-boyu';
UPDATE questions SET kavram = 'u5-otp', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-neden-yok';
UPDATE questions SET kavram = 'u5-iki-zaman', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-iki-zaman';
UPDATE questions SET kavram = 'u5-iki-zaman', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-venona';
UPDATE questions SET kavram = 'u5-iki-zaman', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u5-iki-zaman-coz';
UPDATE questions SET kavram = 'u5-iki-zaman', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-bilinen-parca';
UPDATE questions SET kavram = 'u5-blok', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-blok-tanim';
UPDATE questions SET kavram = 'u5-blok', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-karistirma';
UPDATE questions SET kavram = 'u5-blok', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-yayilma';
UPDATE questions SET kavram = 'u5-blok', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-permutasyon';
UPDATE questions SET kavram = 'u5-des', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u5-des-anahtar';
UPDATE questions SET kavram = 'u5-des', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-2des';
UPDATE questions SET kavram = 'u5-des', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-aes-yarisma';
UPDATE questions SET kavram = 'u5-aes-yapi', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u5-blok-boyu';
UPDATE questions SET kavram = 'u5-aes-yapi', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u5-tur-128';
UPDATE questions SET kavram = 'u5-aes-yapi', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u5-tur-256';
UPDATE questions SET kavram = 'u5-aes-yapi', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-durum';
UPDATE questions SET kavram = 'u5-aes-yapi', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-son-tur';
UPDATE questions SET kavram = 'u5-aes-yapi', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-kaba-kuvvet-128';
UPDATE questions SET kavram = 'u5-aes-adimlar', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-subbytes';
UPDATE questions SET kavram = 'u5-aes-adimlar', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u5-sbox-63';
UPDATE questions SET kavram = 'u5-aes-adimlar', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-sbox-sabit-yok';
UPDATE questions SET kavram = 'u5-aes-adimlar', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-shiftrows';
UPDATE questions SET kavram = 'u5-aes-adimlar', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u5-xtime';
UPDATE questions SET kavram = 'u5-aes-adimlar', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u5-carp-03';
UPDATE questions SET kavram = 'u5-aes-adimlar', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-iki-tur';
UPDATE questions SET kavram = 'u5-anahtar-genisletme', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u5-tur-anahtari';
UPDATE questions SET kavram = 'u5-anahtar-genisletme', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u5-kelime-256';
UPDATE questions SET kavram = 'u5-anahtar-genisletme', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u5-rcon';
UPDATE questions SET kavram = 'u6-ecb', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-ecb-tanim';
UPDATE questions SET kavram = 'u6-ecb', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-penguen';
UPDATE questions SET kavram = 'u6-ecb', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-ecb-tekrar';
UPDATE questions SET kavram = 'u6-ecb', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u6-ecb-kod';
UPDATE questions SET kavram = 'u6-cbc', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-cbc-tanim';
UPDATE questions SET kavram = 'u6-cbc', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-iv-gizli';
UPDATE questions SET kavram = 'u6-cbc', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u6-sabit-iv';
UPDATE questions SET kavram = 'u6-cbc', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-cbc-hata';
UPDATE questions SET kavram = 'u6-dolgu', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u6-dolgu-21';
UPDATE questions SET kavram = 'u6-dolgu', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u6-dolgu-tam';
UPDATE questions SET kavram = 'u6-dolgu', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u6-blok-sayisi';
UPDATE questions SET kavram = 'u6-dolgu', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u6-dolgu-deger';
UPDATE questions SET kavram = 'u6-dolgu', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-dolgu-oracle';
UPDATE questions SET kavram = 'u6-ctr', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-ctr-tanim';
UPDATE questions SET kavram = 'u6-ctr', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-ctr-dolgu';
UPDATE questions SET kavram = 'u6-ctr', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-ctr-nonce';
UPDATE questions SET kavram = 'u6-ctr', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u6-bit-cevir';
UPDATE questions SET kavram = 'u6-ctr', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-ctr-paralel';
UPDATE questions SET kavram = 'u6-aead', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-aead-tanim';
UPDATE questions SET kavram = 'u6-aead', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-gcm-yapi';
UPDATE questions SET kavram = 'u6-aead', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u6-gcm-nonce';
UPDATE questions SET kavram = 'u6-aead', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-aad';
UPDATE questions SET kavram = 'u6-aead', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-gcm-tekrar';
UPDATE questions SET kavram = 'u6-aead', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u6-once-dogrula';
UPDATE questions SET kavram = 'u6-akis', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-akis-tanim';
UPDATE questions SET kavram = 'u6-akis', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u6-chacha-anahtar';
UPDATE questions SET kavram = 'u6-akis', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u6-chacha-tur';
UPDATE questions SET kavram = 'u6-akis', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-arx';
UPDATE questions SET kavram = 'u6-akis', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-dondurme';
UPDATE questions SET kavram = 'u6-akis', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-poly';
UPDATE questions SET kavram = 'u6-secim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-aes-ni';
UPDATE questions SET kavram = 'u6-secim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-tls13';
UPDATE questions SET kavram = 'u6-secim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-disk';
UPDATE questions SET kavram = 'u6-secim', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u6-kendi-modun';
UPDATE questions SET kavram = 'u6-secim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u6-wifi';
