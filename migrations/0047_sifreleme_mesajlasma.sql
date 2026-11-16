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
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-tanim', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'Kriptografik hash fonksiyonu için aşağıdakilerden hangisi doğrudur?', '{"choices":["Her uzunluktaki girdiden sabit uzunlukta bir özet üretir ve anahtar kullanmaz","Girdiyi bir anahtarla şifreler; aynı anahtarla özet geri çözülür","Çıktısı girdiyle aynı uzunluktadır ve girdinin sıkıştırılmış halidir","Aynı girdiye her çağrıda farklı ama aynı uzunlukta bir çıktı verir"]}', '{"index":0}', 'Hash fonksiyonu deterministiktir (aynı girdi, aynı özet), çıktısı sabit uzunluktadır (SHA-256''da 256 bit) ve anahtar almaz. Geri çözülmez; sıkıştırma da değildir, çünkü özetten girdi elde edilemez.', 1, '7. ünite · Hash fonksiyonunun özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-uzunluk', 'sifreleme', 'sf-u7', 7, 'num', 'derived', 'SHA-256 özeti onaltılık (hex) yazıldığında kaç karakter olur?', '{"blanks":1}', '{"blanks":[["64±0"]]}', '256 bit = 32 bayt; her bayt 2 hex rakamıyla yazılır: **64** karakter. 1 baytlık bir dosyanın da 4 GB''lık bir dosyanın da SHA-256 özeti 64 hex karakterdir.', 1, '7. ünite · Hash fonksiyonunun özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-geri-donmez', 'sifreleme', 'sf-u7', 7, 'tf', 'derived', 'SHA-256 özetini bilen biri, yeterince güçlü bir bilgisayarla özetten girdiyi "çözebilir"; tıpkı anahtarı bilinen bir şifre gibi.', '{}', '{"value":false}', 'Yanlış. Hash bir şifre değildir; çözülecek bir anahtar yoktur. Sonsuz sayıda girdi aynı 256 bitlik özete eşlenir, bilgi kaybolur. Saldırgan yalnız **tahmin edip deneyebilir**: olası girdileri hash''leyip özetle karşılaştırır. Parolaların neden yavaş hash''le saklandığı (9. ünite) buradan gelir.', 1, '7. ünite · Hash fonksiyonunun özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-sifreleme-degil', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'Bir geliştirici "Kredi kartı numaralarını SHA-256 ile şifreleyip saklıyoruz, gerekince çözeriz" diyor. Sorun nedir?', '{"choices":["Hash geri çözülmez; üstelik 16 haneli kart numarası kolay denenir, özetten numara bulunabilir","SHA-256 kart numaraları için çok kısa bir özet üretir","SHA-256 yalnız metin girdiler için tanımlıdır, sayılar için kullanılamaz","Kart numaraları hash''lenince bankalar işlemi reddeder"]}', '{"index":0}', 'İki hata var. Hash **şifreleme değildir**; "gerekince çözmek" mümkün değildir. Ayrıca kart numarası uzayı küçüktür (ilk haneler bankayı, son hane denetimi verir): saldırgan bütün olası numaraları hash''leyip eşleştirebilir. Geri alınması gereken veri şifrelenir (AES-GCM), hash''lenmez.', 1, '7. ünite · Hash fonksiyonunun özellikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-on-goruntu', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'Ön görüntü direnci (preimage resistance) neyi ifade eder?', '{"choices":["Verilen bir $h$ özeti için $H(x) = h$ olan herhangi bir $x$ bulmak zordur","Aynı özeti veren herhangi iki farklı girdi bulmak zordur","Verilen bir $x$ için aynı özeti veren başka bir $x''$ bulmak zordur","Özetin uzunluğu girdinin uzunluğunu ele vermez"]}', '{"index":0}', 'Üç direnç vardır: **ön görüntü** (özetten girdiye), **ikinci ön görüntü** (verilen girdiyle aynı özeti veren başka girdi) ve **çakışma** (aynı özeti veren herhangi bir çift). $n$ bitlik iyi bir hash''te ilk ikisi yaklaşık $2^n$, çakışma ise $2^{n/2}$ iş gerektirir.', 1, '7. ünite · Ön görüntü, ikinci ön görüntü ve çakışma direnci', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-cakisma-var', 'sifreleme', 'sf-u7', 7, 'tf', 'derived', 'SHA-256''da çakışmalar (aynı özeti veren iki farklı girdi) mutlaka vardır; güvenlik onların bulunamamasına dayanır.', '{}', '{"value":true}', 'Doğru. Sonsuz sayıda girdi $2^{256}$ olası özete eşlenir; güvercin yuvası ilkesine göre çakışma kaçınılmazdır. Ama bilinen en iyi yol yaklaşık $2^{128}$ deneme ister ve bugüne kadar tek bir SHA-256 çakışması bulunmadı.', 1, '7. ünite · Ön görüntü, ikinci ön görüntü ve çakışma direnci', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-ikinci', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'Bir yazılım şirketi kurulum dosyasının SHA-256 özetini yayımlıyor. Saldırgan, aynı özeti veren kötü amaçlı bir dosya üretmek istiyor. Hangi direnci aşması gerekir?', '{"choices":["İkinci ön görüntü direncini","Çakışma direncini","Yalnız çığ etkisini","Hiçbirini; özet herkese açık olduğu için yeterli"]}', '{"index":0}', 'Orijinal dosya sabittir; saldırgan **ona** eşit özet veren başka bir dosya arar: ikinci ön görüntü, yaklaşık $2^{256}$ iş. Çakışma saldırısında ise saldırgan iki dosyayı da kendisi seçer; bu daha kolaydır ($2^{128}$) ve sertifika sahteciliği gibi senaryolarda tehlikelidir.', 2, '7. ünite · Ön görüntü, ikinci ön görüntü ve çakışma direnci', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-23', 'sifreleme', 'sf-u7', 7, 'num', 'derived', 'Bir sınıfta en az kaç kişi olursa ikisinin aynı doğum gününü paylaşma olasılığı %50''yi geçer (365 gün, eşit olasılık)?', '{"blanks":1}', '{"blanks":[["23±0"]]}', 'Hepsinin farklı olma olasılığı $\frac{365}{365} \cdot \frac{364}{365} \cdots$. 23 kişide bu çarpım 0,493''e düşer; en az bir eşleşme olasılığı **%50,7** olur. Sezgiyi şaşırtan nokta: eşleşme herhangi iki kişi arasında olabilir ve 23 kişide 253 çift vardır.', 1, '7. ünite · Doğum günü paradoksu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-sha256-cakisma', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', '256 bitlik bir hash''te çakışma bulmak için kabaca kaç deneme gerekir?', '{"choices":["$2^{128}$","$2^{256}$","$2^{64}$","$256^2$"]}', '{"index":0}', 'Doğum günü sınırı: $n$ bitlik çıktıda yaklaşık $\sqrt{2^n} = 2^{n/2}$ rastgele girdiden sonra iki özetin eşleşmesi beklenir. 256 bit için $2^{128}$. Bu yüzden 128 bitlik güvenlik isteyen bir sistem 256 bitlik hash kullanır.', 1, '7. ünite · Doğum günü paradoksu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-kisa-hash', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'SHA-256 çıktısının yalnız ilk 32 biti kullanılıyor. Rastgele girdilerle çakışma yaklaşık kaç denemede beklenir?', '{"choices":["Yaklaşık 77 bin","Yaklaşık 4,3 milyar ($2^{32}$)","Yaklaşık 32","Yaklaşık 1 milyon ($2^{20}$)"]}', '{"index":0}', '$2^{32/2} = 2^{16} = 65.536$; daha kesin hesapla %50 olasılık için $\approx 1{,}18 \cdot 2^{16} \approx 77$ bin deneme. Bir dizüstü bilgisayar bunu bir saniyeden kısa sürede yapar. Çakışma avı deneyinde 16-24 bit için canlı görebilirsin.', 2, '7. ünite · Doğum günü paradoksu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-md5-bit', 'sifreleme', 'sf-u7', 7, 'num', 'derived', 'MD5''in çıktısı 128 bittir. Yapısal açıkları hiç olmasaydı bile doğum günü saldırısının iş yükü $2^k$ olurdu. $k$ kaçtır?', '{"blanks":1}', '{"blanks":[["64±0"]]}', '$128 / 2 =$ **64**. $2^{64}$ bugün büyük bir bütçeyle ulaşılabilir bir sınırdır; MD5 ise yapısal açıkları yüzünden çok daha kolay, saniyeler içinde çakıştırılır.', 2, '7. ünite · Doğum günü paradoksu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-cig-yarisi', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'SHA-256''ya verilen metnin tek bir harfi değiştirilirse 256 çıktı bitinden ortalama kaçı değişir?', '{"choices":["Yaklaşık 128","Yaklaşık 1","Yaklaşık 8","256''nın hepsi"]}', '{"index":0}', 'Çığ etkisi: her çıktı biti bağımsızca yarı olasılıkla değişir, ortalama 128 bit. Çığ etkisi deneyinde 100 denemenin histogramı 128 civarında toplanır.', 1, '7. ünite · Çığ etkisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-benzer-girdi', 'sifreleme', 'sf-u7', 7, 'tf', 'derived', '"merhaba" ve "Merhaba" kelimelerinin SHA-256 özetleri birbirine benzer, çünkü girdiler yalnız bir harfte farklıdır.', '{}', '{"value":false}', 'Yanlış. İyi bir hash''te benzer girdiler benzer özet vermez; iki özet bağımsız rastgele değerler gibi görünür. Özetlerin benzerliğinden girdilerin benzerliği çıkarılamaz.', 1, '7. ünite · Çığ etkisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-blok', 'sifreleme', 'sf-u7', 7, 'num', 'derived', 'SHA-256 mesajı kaç bitlik bloklar halinde işler?', '{"blanks":1}', '{"blanks":[["512±0"]]}', 'SHA-256 mesajı **512 bitlik** (64 baytlık) bloklara böler. Her blok, 256 bitlik ara durumu (sekiz 32 bitlik kelime) 64 turda günceller.', 1, '7. ünite · SHA-256''nın iç yapısı ve Merkle-Damgård', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-tur', 'sifreleme', 'sf-u7', 7, 'num', 'derived', 'SHA-256''nın sıkıştırma fonksiyonu her blokta kaç tur uygular?', '{"blanks":1}', '{"blanks":[["64±0"]]}', '**64** tur. Her turda mesaj takviminden bir kelime ($W_t$) ve bir sabit ($K_t$) karışır. Sabitler ilk 64 asalın küp köklerinin kesirli kısımlarıdır; böylece tasarımcının gizli bir arka kapı saklamadığı gösterilir.', 1, '7. ünite · SHA-256''nın iç yapısı ve Merkle-Damgård', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-dolgu-56', 'sifreleme', 'sf-u7', 7, 'num', 'derived', '56 baytlık bir mesaj SHA-256 ile hash''lenirken dolgudan sonra kaç blok işlenir?', '{"blanks":1}', '{"blanks":[["2±0"]]}', 'Dolgu en az 9 bayttır: bir 0x80 baytı ve 8 baytlık uzunluk alanı. 56 + 9 = 65 bayt, tek bloğa (64) sığmaz.
---
Bu yüzden ikinci blok eklenir: toplam 128 bayt, **2** blok. 55 baytlık bir mesaj ise tek bloğa sığar.', 2, '7. ünite · SHA-256''nın iç yapısı ve Merkle-Damgård', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-dolgu-120', 'sifreleme', 'sf-u7', 7, 'num', 'derived', '120 baytlık bir mesaj SHA-256 ile hash''lenirken dolgudan sonra kaç blok işlenir?', '{"blanks":1}', '{"blanks":[["3±0"]]}', '$120 + 9 = 129$ bayt en az gerekir; 64''ün 128''den büyük ilk katı 192''dir: **3** blok.', 2, '7. ünite · SHA-256''nın iç yapısı ve Merkle-Damgård', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-merkle-damgard', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'Merkle-Damgård yapısında uzun bir mesaj nasıl hash''lenir?', '{"choices":["Bloklar sırayla bir ara duruma katılır; son durum özettir","Mesajın bütün blokları ayrı ayrı hash''lenir ve özetler toplanır","Mesaj bir anahtarla şifrelenir ve son şifreli blok özet olarak alınır","Mesaj iki yarıya bölünür, yarılar yer değiştirilip XOR''lanır"]}', '{"index":0}', '$H_0 = IV$, $H_i = f(H_{i-1}, M_i)$, özet $= H_n$. MD5, SHA-1 ve SHA-256 bu yapıdadır. Yan etkisi: özet, son ara durumun **kendisidir**. Bu yüzden özeti bilen, kaldığı yerden yeni bloklar ekleyebilir (length extension, 8. ünite).', 1, '7. ünite · SHA-256''nın iç yapısı ve Merkle-Damgård', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-takvim', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'SHA-256''da mesaj takvimi (message schedule) ne yapar?', '{"choices":["Bloğun 16 kelimesini, kaydırma ve XOR''larla 64 kelimeye genişletir; her tur bir kelime kullanır","Mesajı zaman damgasıyla birleştirip her blokta farklı bir saat değeri ekler","Blokların hangi sırayla işleneceğini rastgele belirler","Ara durumu her turdan sonra sıfırlayarak çakışmayı önler"]}', '{"index":0}', 'İlk 16 kelime doğrudan bloktan gelir; $W_t = \sigma_1(W_{t-2}) + W_{t-7} + \sigma_0(W_{t-15}) + W_{t-16}$ ile 64''e tamamlanır. Böylece mesajın her biti birçok turda tekrar karışır. Adım gezgininde $W$ tablosunu görebilirsin.', 2, '7. ünite · SHA-256''nın iç yapısı ve Merkle-Damgård', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-md5', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'MD5 bugün neden güvenlik amacıyla kullanılmamalıdır?', '{"choices":["Saniyeler içinde çakışma üretilebiliyor","Çıktısı 32 bit olduğu için kaba kuvvetle anında tersine çevrilir","Yalnızca İngilizce metinleri hash''leyebilir","Patentli olduğu için ücretsiz kullanılamaz"]}', '{"index":0}', '2004''te Xiaoyun Wang ve ekibi MD5 çakışmalarını gösterdi; bugün sıradan bir bilgisayar saniyeler içinde çakışma üretir. 2012''de Flame casus yazılımı MD5 çakışmasıyla sahte bir Microsoft kod imzalama sertifikası üretti. Hata denetimi gibi güvenlik dışı işler için hâlâ görülür.', 1, '7. ünite · Kırılan hash''ler ve SHA-3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-sha1', 'sifreleme', 'sf-u7', 7, 'tf', 'derived', '2017''de aynı SHA-1 özetine sahip iki farklı PDF dosyası yayımlandı.', '{}', '{"value":true}', 'Doğru. Google ve CWI Amsterdam''ın **SHAttered** çalışması yaklaşık $2^{63}$ SHA-1 hesabıyla ilk gerçek çakışmayı üretti. Tarayıcılar SHA-1 sertifikalarını bıraktı; Git, çakışma tespiti eklenmiş bir SHA-1 kullanıyor ve SHA-256''ya geçiş için destek ekledi.', 1, '7. ünite · Kırılan hash''ler ve SHA-3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-sunger', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'SHA-3 (Keccak) yapı bakımından SHA-2 ailesinden nasıl ayrılır?', '{"choices":["Sünger yapısı kullanır ve length extension''a dayanıklıdır","Merkle-Damgård yapısının aynısını daha fazla turla kullanır","Anahtar alan bir yapıdır; anahtarsız hash hesaplayamaz","Çıktısı sabit 128 bittir ve daha hızlıdır"]}', '{"index":0}', 'SHA-3 (FIPS 202, 2015) 1600 bitlik bir iç durumu "emer" ve "sıkar". Durumun **kapasite** kısmı çıktıya hiç yansımaz; özet tüm iç durumu vermediği için length extension yapılamaz. SHA-3, SHA-2 kırıldığı için değil, farklı yapıda bir yedek olsun diye seçildi.', 2, '7. ünite · Kırılan hash''ler ve SHA-3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-indirme', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'Bir site, indirme bağlantısının hemen yanında dosyanın SHA-256 özetini aynı sunucudan yayımlıyor. Kullanıcı özeti denetleyip "dosya güvenilir" diyor. Hangi tehdide karşı korunmamıştır?', '{"choices":["Sunucu ele geçirilip dosya ve özet birlikte değiştirilirse","İndirme sırasında ağdaki rastgele bit hatalarına","Dosyanın diskte zamanla bozulmasına","Yanlış dosyanın yanlışlıkla indirilmesine"]}', '{"index":0}', 'Özet yalnız **ayrı ve güvenilir** bir kanaldan gelirse saldırgana karşı korur. Aynı sunucudaki özet kazara bozulmayı yakalar, ama sunucuyu ele geçiren saldırgan ikisini birlikte değiştirir. Çözüm imzadır: dosya, açık anahtarı önceden bilinen bir anahtarla imzalanır (11. ünite).', 2, '7. ünite · Dosya bütünlüğü ve Merkle ağaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-merkle-kanit', 'sifreleme', 'sf-u7', 7, 'num', 'derived', '1024 yapraklı bir Merkle ağacında bir yaprağın ağaçta olduğunu kanıtlamak için kökün yanında kaç tane kardeş hash gerekir?', '{"blanks":1}', '{"blanks":[["10±0"]]}', 'Yapraktan köke her seviyede bir kardeş hash gerekir; ağacın yüksekliği $\log_2 1024 =$ **10**. Bir milyon yaprakta bile yalnız 20 hash yeter. Certificate Transparency kayıtları ve Git''in nesne ağacı bu fikri kullanır.', 2, '7. ünite · Dosya bütünlüğü ve Merkle ağaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u7-git-kimlik', 'sifreleme', 'sf-u7', 7, 'mcq', 'derived', 'Git''te bir commit''in kimliği (ör. `a1b2c3d`) nedir?', '{"choices":["Commit''in içeriğinin, ağacının ve ebeveyn commit''lerinin hash''i","Sunucunun her commit''e sırayla verdiği rastgele numara","Commit''i yapan kişinin e-posta adresinin şifrelenmiş hali","Commit tarihinin onaltılık gösterimi"]}', '{"index":0}', 'Commit kimliği, içeriğin (ağaç, ebeveynler, yazar, mesaj) hash''idir. Geçmişte tek bir bayt değişirse o commit''in ve ondan sonraki her commit''in kimliği değişir. Git ve GitHub pratiğinde bunu sanal depoda görebilirsin.', 1, '7. ünite · Dosya bütünlüğü ve Merkle ağaçları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-neden', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', 'Bir mesajın yanına yalnız SHA-256 özetini eklemek neden saldırgana karşı bütünlük sağlamaz?', '{"choices":["Hash anahtarsızdır; mesajı değiştiren saldırgan yeni özeti de kendisi hesaplar","SHA-256 özeti mesajdan uzun olduğu için ağda bozulur","Özet mesajın içeriğini ele verdiği için gizlilik kaybolur","Alıcı SHA-256''yı hesaplamak için gönderenin parolasını bilmelidir"]}', '{"index":0}', 'Hash yalnız **kazara** bozulmayı yakalar. Kasıtlı bir saldırgan mesajı ve özeti birlikte değiştirir. Bütünlük için hesaplanması bir **gizli anahtar** gerektiren bir etiket gerekir: MAC (Message Authentication Code).', 1, '8. ünite · MAC neden gerekli?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-mac-tanim', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', 'MAC (mesaj doğrulama kodu) neyi kanıtlar?', '{"choices":["Mesajın değiştirilmediğini ve anahtarı bilen biri tarafından üretildiğini","Mesajın kimseye okunamayacak biçimde şifrelendiğini","Mesajı kimin gönderdiğini üçüncü bir kişiye karşı da kanıtlar","Mesajın belirli bir saatte gönderildiğini"]}', '{"index":0}', 'MAC bütünlük ve kimlik doğrulama sağlar: etiket doğruysa mesaj, anahtarı bilen biri tarafından üretilmiş ve değiştirilmemiştir. Gizlilik sağlamaz; mesaj açık gidebilir.', 1, '8. ünite · MAC neden gerekli?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-inkar', 'sifreleme', 'sf-u8', 8, 'tf', 'derived', 'Ayşe ile Ali aynı MAC anahtarını paylaşıyor. Ali, Ayşe''den gelen MAC''li bir mesajı mahkemede Ayşe''nin yazdığının kanıtı olarak gösterebilir.', '{}', '{"value":false}', 'Yanlış. Anahtarı Ali de bildiği için o etiketi Ali de üretebilirdi. MAC inkâr edilemezlik sağlamaz; bunun için yalnız göndericinin bildiği özel anahtarla atılan dijital imza gerekir (11. ünite).', 1, '8. ünite · MAC neden gerekli?', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-naif', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', 'Bir API istekleri `imza = SHA-256(gizli ‖ mesaj)` ile imzalıyor. Neden güvensiz?', '{"choices":["Saldırgan imzadan, gizliyi bilmeden `mesaj ‖ dolgu ‖ ek` için geçerli imza hesaplayabilir","SHA-256 gizli anahtarı çıktısına olduğu gibi kopyalar","Aynı mesaj her seferinde farklı imza verdiği için doğrulama yapılamaz","Gizli anahtar mesajdan önce geldiği için SHA-256 hata verir"]}', '{"index":0}', 'SHA-256''nın özeti, son bloktan sonraki **ara durumun kendisidir**. Saldırgan bu durumdan devam edip yeni bloklar ekler. Elde ettiği özet, gizli ‖ mesaj ‖ dolgu ‖ ek için geçerlidir. Gizliyi bilmesi gerekmez; yalnız uzunluğunu bilmesi ya da denemesi yeter.', 2, '8. ünite · Length extension saldırısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-gereken', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', 'Length extension saldırısını yapmak için saldırganın neyi bilmesi gerekir?', '{"choices":["Mesajı, imzayı ve gizli anahtarın uzunluğunu","Gizli anahtarın kendisini","Sunucunun SHA-256 başlangıç değerlerini değiştirme yetkisini","İki farklı mesajın çakışan özetlerini"]}', '{"index":0}', 'Saldırgan dolgu baytlarını doğru üretmek için toplam uzunluğu bilmelidir: gizli + mesaj. Gizlinin uzunluğu bilinmiyorsa 1, 2, 3... diye denenir; sunucu doğru tahmini kabul eder. Atölyede bunu kendin yapacaksın.', 2, '8. ünite · Length extension saldırısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-sha3-dayanikli', 'sifreleme', 'sf-u8', 8, 'tf', 'derived', 'SHA-3 ile `SHA3(gizli ‖ mesaj)` yapısı length extension saldırısına açık değildir.', '{}', '{"value":true}', 'Doğru. SHA-3''ün sünger yapısında iç durumun kapasite kısmı çıktıya yansımaz; özetten devam edilemez. Aynı şekilde SHA-512/256 gibi kesilmiş çıktılı varyantlar da dayanıklıdır. Yine de standart çözüm HMAC''tir; neyi kullandığını düşünmeden güvenli kalırsın.', 1, '8. ünite · Length extension saldırısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-uzunluk-alani', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', 'Length extension''da sahte mesajın içinde gizli ‖ mesaj ile ek arasında ne bulunur?', '{"choices":["Orijinal mesajın SHA-256 dolgusu","Hiçbir şey; ek doğrudan mesajın arkasına yazılır","Gizli anahtarın SHA-256 özeti","Rastgele 16 bayt; sunucu bunları atar"]}', '{"index":0}', 'Saldırgan hash''in kaldığı yerden devam ettiği için orijinal mesajın dolgusu artık mesajın bir parçasıdır: `mesaj ‖ 80 00 ... 00 ‖ uzunluk ‖ ek`. Sunucular genellikle bu garip baytları sorun etmez; sorgu dizgisi ayrıştırıcıları onları yok sayar ve son `rol` değeri geçerli olur.', 1, '8. ünite · Length extension saldırısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-formul', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', '$K_i = K \oplus \text{ipad}$ ve $K_o = K \oplus \text{opad}$ olsun. HMAC''in tanımı hangisidir?', '{"choices":["$H(K_o \\| H(K_i \\| m))$","$H(K_i \\| m)$","$H(m \\| K_o)$","$H(K_i) \\oplus H(m)$"]}', '{"index":0}', 'HMAC iki iç içe hash kullanır: önce anahtar ipad ile XOR''lanıp mesajın önüne konur ve hash''lenir, sonra anahtar opad ile XOR''lanıp bu iç özetin önüne konur ve yeniden hash''lenir. Dış hash, iç özetin ara durumunu saklar; length extension işe yaramaz.', 1, '8. ünite · HMAC yapısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-pad', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', 'HMAC''te ipad ve opad hangi baytların tekrarıdır?', '{"choices":["ipad 0x36, opad 0x5C","ipad 0x00, opad 0xFF","ipad 0x80, opad 0x01","ipad 0x5C, opad 0x36"]}', '{"index":0}', 'ipad = 0x36 baytının, opad = 0x5C baytının blok boyunca (SHA-256''da 64 bayt) tekrarıdır. İki sabitin farklı olması iç ve dış anahtarları birbirinden ayırır.', 2, '8. ünite · HMAC yapısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-uzun-anahtar', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', 'HMAC-SHA256''da anahtar 64 bayttan uzunsa ne yapılır?', '{"choices":["Anahtar önce SHA-256 ile hash''lenir, 32 baytlık özet anahtar olarak kullanılır","Anahtarın ilk 64 baytı alınır, kalanı atılır","HMAC hata verir; anahtar 64 baytı geçemez","Anahtar ikiye bölünür, yarısı ipad''e yarısı opad''e verilir"]}', '{"index":0}', 'Blok boyundan (64 bayt) uzun anahtar önce hash''lenir; kısa anahtar sıfırlarla 64 bayta tamamlanır. Bu yüzden 32 bayttan uzun rastgele anahtar güvenliği artırmaz.', 1, '8. ünite · HMAC yapısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-hmac-adim', 'sifreleme', 'sf-u8', 8, 'num', 'derived', 'Kısa bir mesaj (bir bloğa sığan) için HMAC-SHA256 hesaplanırken SHA-256''nın sıkıştırma fonksiyonu toplam kaç kez çalışır?', '{"blanks":1}', '{"blanks":[["4±0"]]}', 'İç hash: $K \oplus$ ipad bir blok + mesaj ve dolgusu bir blok = 2 sıkıştırma.
---
Dış hash: $K \oplus$ opad bir blok + 32 baytlık iç özet ve dolgusu bir blok = 2 sıkıştırma.
---
Toplam **4**. Anahtarlı ilk bloklar önceden hesaplanıp saklanabildiği için yoğun kullanımda 2''ye iner.', 2, '8. ünite · HMAC yapısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-erken-cikis', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', 'Bir sunucu gelen MAC etiketini `if (etiket == beklenen)` ile bayt bayt karşılaştırıyor ve ilk farklı baytta duruyor. Saldırgan ne yapabilir?', '{"choices":["Yanıt sürelerini ölçüp etiketi bayt bayt tahmin eder","Karşılaştırmayı atlatıp anahtarı doğrudan okur","Hiçbir şey; karşılaştırma sonucu yalnız doğru ya da yanlıştır","Sunucuyu çökertir ama etiket hakkında bilgi alamaz"]}', '{"index":0}', 'İlk baytı doğru olan etiket biraz daha uzun sürer. Saldırgan her konum için 256 değeri dener ve en yavaşını seçer. Ağdaki gürültü çok denemeyle ortalanır. Çözüm **sabit zamanlı karşılaştırma**: bütün baytlar her zaman karşılaştırılır, farklar bir değişkende toplanır.', 2, '8. ünite · Sabit zamanlı karşılaştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-deneme', 'sifreleme', 'sf-u8', 8, 'num', 'derived', '32 baytlık bir etiket, zamanlama sızıntısıyla bayt bayt bulunuyor. Her konumda 256 değer denenirse en kötü durumda toplam kaç deneme gerekir (gürültü için tekrarları sayma)?', '{"blanks":1}', '{"blanks":[["8192±0"]]}', 'Her bayt ayrı bulunur: $32 \times 256 =$ **8192** deneme. Sızıntı olmasaydı $2^{256}$ olurdu. Zamanlama sızıntısı üstel bir işi doğrusal hale getirir.', 3, '8. ünite · Sabit zamanlı karşılaştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-sabit', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', 'Sabit zamanlı karşılaştırma nasıl yazılır?', '{"choices":["Bütün baytların farkı biriktirilip en sonda bir kez denetlenir","Karşılaştırmadan önce rastgele bir süre beklenir","Baytlar sondan başa doğru karşılaştırılır","Etiketler önce Base64''e çevrilip dizgi olarak karşılaştırılır"]}', '{"index":0}', '`fark |= a[i] ^ b[i]` döngüsü uzunluk boyunca hep tamamlanır; sonuç yalnız sonda kullanılır. Rastgele bekleme ortalamayla aşılır. Hazır işlevler kullan: Node.js''te `crypto.timingSafeEqual`, Python''da `hmac.compare_digest`. Web Crypto''nun `verify` işlevi bunu kendisi yapar.', 1, '8. ünite · Sabit zamanlı karşılaştırma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-jwt', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', '`alg: HS256` yazan bir JSON Web Token (JWT) nasıl imzalanmıştır?', '{"choices":["HMAC-SHA256 ile; sunucu ve doğrulayan aynı gizli anahtarı bilir","RSA özel anahtarıyla; açık anahtarı bilen herkes doğrular","SHA-256 özetiyle; anahtar kullanılmaz","AES-256 ile şifrelenerek; içerik okunamaz"]}', '{"index":0}', 'HS256 = HMAC-SHA256. Token''ın içeriği şifreli değildir, Base64 ile kodlanmıştır; herkes okuyabilir. Ama değiştirilirse imza tutmaz. RS256 ve ES256 ise açık anahtarlı imzalardır (10. ve 11. ünite).', 1, '8. ünite · MAC''in gerçek kullanımları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-totp', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', 'Doğrulama uygulamalarının her 30 saniyede bir ürettiği 6 haneli kodlar (TOTP) neye dayanır?', '{"choices":["Paylaşılan gizli anahtar ve zaman sayacının HMAC''ine","Sunucunun her 30 saniyede telefona gönderdiği SMS''e","Telefonun seri numarasının SHA-256 özetine","Kullanıcının parolasının şifrelenmiş haline"]}', '{"index":0}', 'TOTP (RFC 6238): kod = HMAC(anahtar, ⌊zaman / 30⌋)''ın kısaltılmışı. QR kodu okuttuğunda gizli anahtar telefona geçer; sonra telefon ile sunucu hiç konuşmadan aynı kodu hesaplar.', 1, '8. ünite · MAC''in gerçek kullanımları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u8-webhook', 'sifreleme', 'sf-u8', 8, 'mcq', 'derived', 'Bir ödeme sağlayıcısı sitene bildirim (webhook) gönderirken başlıkta `X-Signature: HMAC-SHA256(...)` ekliyor. Bu neyi sağlar?', '{"choices":["Bildirimin gerçekten sağlayıcıdan geldiğini ve yolda değiştirilmediğini","Bildirimin içeriğinin üçüncü kişilerce okunamamasını","Bildirimin sitene en geç bir saniye içinde ulaşmasını","Sağlayıcının bildirimi sonradan inkâr edememesini"]}', '{"index":0}', 'Sunucun aynı gizli anahtarla HMAC''i yeniden hesaplar ve sabit zamanlı karşılaştırır. Tutarsa istek sağlayıcıdandır. Gizlilik için bağlantı zaten HTTPS''tir. GitHub, Stripe ve benzerleri bu yöntemi kullanır.', 1, '8. ünite · MAC''in gerçek kullanımları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-duz-metin', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Parolaları veritabanında düz metin olarak saklamanın en büyük sorunu nedir?', '{"choices":["Sızıntıda parolalar okunur ve başka sitelerde denenir","Düz metin parolalar veritabanında çok yer kaplar","Kullanıcılar parolalarını değiştiremez","Giriş sırasında parola karşılaştırması yavaşlar"]}', '{"index":0}', 'İnsanlar aynı parolayı birçok yerde kullanır. Sızan düz metin parolalar başka sitelerde otomatik denenir (credential stuffing). Doğru tasarım, sunucunun parolayı **hiç bilmemesi**, yalnız yavaş bir özetini saklamasıdır.', 1, '9. ünite · Düz metin ve düz hash ile saklamanın sorunları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-duz-hash', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Parolalar tuzsuz SHA-256 özetiyle saklanıyor. Veritabanı sızınca saldırgan için ne kolaylaşır?', '{"choices":["Aynı parolalar aynı özeti verir; bir sözlük bütün tabloya uygulanır","SHA-256 geri çözüldüğü için bütün parolalar anında okunur","Saldırgan özetlerden kullanıcıların e-posta adreslerini çıkarır","Hiçbir şey; SHA-256 çakışmaya dayanıklı olduğu için parolalar güvendedir"]}', '{"index":0}', 'Düz hash''te "123456" kullanan herkesin satırı aynıdır. Saldırgan bir parola sözlüğünü bir kez hash''ler ve bütün tabloyla eşleştirir. Üstelik SHA-256 **hızlıdır**: bir GPU saniyede milyarlarca özet hesaplar.', 2, '9. ünite · Düz metin ve düz hash ile saklamanın sorunları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-sizan-ozet', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Tuzsuz SHA-256 kullanan bir siteden sızan tabloda bir kullanıcının özeti `db849bbf3e5c8127124aad0e24d4b6cb545477c2fb42cd3ee3feb466fa10d011`. Şu yaygın parolalardan hangisi? (1. ünitedeki üç kutu aracıyla adayları hash''leyebilirsin.)', '{"choices":["galatasaray","fenerbahce","qwerty","sifre123"]}', '{"index":0}', 'Her adayı SHA-256''dan geçir ve özeti karşılaştır; yalnız biri tutar. Saldırganın yaptığı da budur, yalnız milyonlarca adayla ve saniyede milyarlarca denemeyle. Tuz ve yavaş hash bu işi pahalılaştırır.', 2, '9. ünite · Düz metin ve düz hash ile saklamanın sorunları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-salt-tanim', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Parola saklamada salt (tuz) ne işe yarar?', '{"choices":["Aynı parolaların farklı özet vermesini sağlar","Parolayı şifreleyip gerekince geri çözmeyi sağlar","Parolanın uzunluğunu gizlemek için sonuna rastgele harf ekler","Hash hesabını hızlandırır"]}', '{"index":0}', 'Salt gizli değildir, özetle aynı satırda saklanır. Görevi her parolanın ayrı ayrı kırılmasını zorunlu kılmaktır: saldırgan bir sözlüğü bütün tabloya bir kerede uygulayamaz, her kullanıcı için baştan hash''lemesi gerekir.', 1, '9. ünite · Salt, gökkuşağı tabloları ve pepper', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-salt-gizli', 'sifreleme', 'sf-u9', 9, 'tf', 'derived', 'Salt, parola kadar gizli tutulmalıdır; sızarsa salt''ın bütün faydası kaybolur.', '{}', '{"value":false}', 'Yanlış. Salt veritabanında özetin yanında açıkça durur; sızması beklenir. Faydası, aynı parolaların farklı özet vermesi ve önceden hesaplanmış tabloların işe yaramamasıdır; bu faydalar salt bilinse de geçerlidir.', 1, '9. ünite · Salt, gökkuşağı tabloları ve pepper', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-gokkusagi', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Gökkuşağı tablosu nedir ve neye karşı etkisizdir?', '{"choices":["Önceden hesaplanmış parola-özet zincirleri; her kullanıcıya ayrı salt eklenince etkisiz kalır","Parolaları renk kodlarıyla saklayan bir veritabanı biçimi; şifrelemeye karşı etkisizdir","GPU ile paralel kaba kuvvet aracı; yavaş hash''e karşı etkisizdir","Sızan parola listelerinin birleşimi; uzun parolalara karşı etkisizdir"]}', '{"index":0}', 'Gökkuşağı tabloları zaman ile bellek arasında takas yapar: hesap bir kez yapılır, sonra her özet hızlıca aranır. Tablo belirli bir hash için hazırlanır; her kullanıcıya rastgele salt eklenince her salt için yeni tablo gerekir ve yöntem çöker.', 1, '9. ünite · Salt, gökkuşağı tabloları ve pepper', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-salt-boyu', 'sifreleme', 'sf-u9', 9, 'num', 'derived', 'Parola özetleri için önerilen salt uzunluğu en az kaç bayttır (128 bit)?', '{"blanks":1}', '{"blanks":[["16±0"]]}', '**16 bayt** (128 bit) rastgele salt, iki kullanıcının aynı salt''ı alma olasılığını ihmal edilebilir yapar. CSPRNG''den üretilir (2. ünite); kullanıcı adı ya da e-posta salt yerine kullanılmaz.', 1, '9. ünite · Salt, gökkuşağı tabloları ve pepper', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-pepper', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Pepper (biber) salt''tan nasıl ayrılır?', '{"choices":["Herkes için ortaktır ve veritabanının dışında saklanır","Her kullanıcı için farklıdır ve özetle aynı satırda saklanır","Kullanıcının seçtiği ikinci bir paroladır","Özetin sonuna eklenen ve kullanıcıya gösterilen doğrulama kodudur"]}', '{"index":0}', 'Pepper, yalnız veritabanı sızdığında (sunucunun yapılandırması sızmadığında) özetleri işe yaramaz hale getirir. Genellikle özetin HMAC''i alınarak ya da özet şifrelenerek uygulanır. Salt''ın yerini tutmaz, onun yanına eklenir.', 2, '9. ünite · Salt, gökkuşağı tabloları ve pepper', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-neden-yavas', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Parola özetlerinde neden bilerek yavaş bir fonksiyon kullanılır?', '{"choices":["Kullanıcıya az, milyarlarca deneme yapan saldırgana çok yük olur","Yavaş fonksiyonlar daha uzun özet ürettiği için çakışma olasılığı azalır","Hızlı fonksiyonlar parolaları geri çözülebilir biçimde saklar","Sunucunun aynı anda çok sayıda girişi işlemesini önlemek için"]}', '{"index":0}', 'Kaba kuvvetin maliyeti deneme başına süreyle çarpılır. Bir girişte 100 ms kullanıcıya fark ettirmez; saldırgan için saniyede milyarlarca deneme saniyede birkaç bin denemeye iner.', 1, '9. ünite · Yavaş hash: PBKDF2 ve bcrypt', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-pbkdf2', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'PBKDF2 parolayı nasıl yavaşlatır?', '{"choices":["Salt ile birlikte HMAC''i yüz binlerce kez art arda uygular","Parolayı büyük bir bellek alanına yayıp rastgele erişimle okur","Her denemeden sonra sunucuyu bir süre bekletir","Parolayı RSA ile şifreleyip özetini alır"]}', '{"index":0}', 'PBKDF2 (RFC 8018) bir HMAC''i yineleme sayısı kadar zincirler. OWASP 2023''te PBKDF2-HMAC-SHA256 için 600.000 yineleme önerdi. Zayıflığı yalnız işlem gücü istemesidir: GPU''lar binlerce PBKDF2''yi paralel çalıştırır.', 1, '9. ünite · Yavaş hash: PBKDF2 ve bcrypt', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-pbkdf2-sayi', 'sifreleme', 'sf-u9', 9, 'num', 'derived', 'OWASP''ın 2023''te PBKDF2-HMAC-SHA256 için önerdiği en az yineleme sayısı kaçtır?', '{"blanks":1}', '{"blanks":[["600000±0"]]}', '**600.000**. Sayı donanım hızlandıkça artar; yeni sistemlerde Argon2id tercih edilir. Web Crypto PBKDF2''yi destekler; ölçer deneyinde tarayıcında kaç milisaniye sürdüğünü görebilirsin.', 1, '9. ünite · Yavaş hash: PBKDF2 ve bcrypt', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-bcrypt', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'bcrypt''te maliyet parametresi (cost) 12''den 13''e çıkarılırsa bir özetin hesaplanma süresi nasıl değişir?', '{"choices":["Yaklaşık iki katına çıkar","Yaklaşık %8 artar","Değişmez; yalnız özet uzar","Yaklaşık on katına çıkar"]}', '{"index":0}', 'bcrypt''in iş miktarı $2^{\text{cost}}$ ile orantılıdır; maliyet bir artınca süre ikiye katlanır. bcrypt ayrıca girdinin yalnız ilk 72 baytını kullanır; çok uzun parolaları önce hash''lemek gerekir.', 2, '9. ünite · Yavaş hash: PBKDF2 ve bcrypt', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-bellek-zor', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Argon2id ve scrypt gibi bellek-zor fonksiyonlar neden GPU ile kırılmaya daha dayanıklıdır?', '{"choices":["Her deneme çok bellek ister; GPU''da paralellik sınırlanır","GPU''lar bu fonksiyonların kullandığı komutları desteklemez","Çıktıları GPU''ların işleyemeyeceği kadar uzundur","Her denemede internete bağlanıp sunucudan izin isterler"]}', '{"index":0}', 'GPU ve özel donanım (ASIC) çok sayıda hesap birimine sahiptir ama hızlı belleği sınırlıdır. Deneme başına 64 MiB isteyen bir fonksiyonda paralellik bellekle sınırlanır; saldırganın avantajı büyük ölçüde kaybolur.', 1, '9. ünite · Bellek-zor fonksiyonlar: scrypt ve Argon2id', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-argon2id', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', '2015 Parola Hash''leme Yarışması''nı kazanan ve bugün yeni sistemler için önerilen algoritma hangisidir?', '{"choices":["Argon2","MD5","SHA-512","PBKDF2-HMAC-SHA1"]}', '{"index":0}', 'Argon2 2015''te yarışmayı kazandı ve RFC 9106 ile standartlaştı. Argon2id, yan kanala dayanıklı Argon2i ile GPU''ya dayanıklı Argon2d''nin karışımıdır. Parametreleri: bellek ($m$), yineleme ($t$) ve paralellik ($p$).', 1, '9. ünite · Bellek-zor fonksiyonlar: scrypt ve Argon2id', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-parametre', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Argon2id parametreleri seçilirken doğru yaklaşım hangisidir?', '{"choices":["Sunucunun belleğine ve kabul edilebilir giriş süresine göre ayarlamak","Belleği en düşük değere çekip yineleme sayısını bir milyona çıkarmak","Her kullanıcı için rastgele parametre seçip saklamamak","Varsayılan değerleri asla değiştirmemek; parametreler güvenliği etkilemez"]}', '{"index":0}', 'Önce belleği, sonra süreyi ayarla: OWASP''ın asgari önerisi 19 MiB bellek, 2 yineleme ve 1 paralelliktir. Parametreler özetle birlikte saklanır (özet metninde `m=19456,t=2,p=1` gibi bir alan bulunur). Böylece ileride artırılabilir; kullanıcı giriş yaptığında özet yeni parametrelerle yenilenir.', 2, '9. ünite · Bellek-zor fonksiyonlar: scrypt ve Argon2id', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-hkdf-tanim', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'HKDF ne için kullanılır?', '{"choices":["Güçlü bir sırdan birden çok bağımsız anahtar türetmek için","Kullanıcı parolalarını yavaşça hash''leyip saklamak için","Mesajları şifrelemek için akış şifresi olarak","Dijital imza atmak için"]}', '{"index":0}', 'HKDF (RFC 5869) iki adımlıdır: **extract** düzgün dağılmamış bir sırrı sabit uzunlukta güçlü bir anahtara çevirir, **expand** ondan farklı `info` etiketleriyle istenen sayıda anahtar türetir. Yavaş değildir; parola için uygun değildir.', 1, '9. ünite · HKDF: anahtardan anahtar türetmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-hkdf-parola', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Bir uygulama kullanıcı parolasından şifreleme anahtarını `HKDF(parola, salt)` ile türetiyor. Sorun nedir?', '{"choices":["HKDF hızlıdır; zayıf parola hızla denenip bulunur","HKDF yalnız 128 bitlik anahtar üretebilir","HKDF salt kabul etmez, bu yüzden aynı parolalar aynı anahtarı verir","HKDF''nin çıktısı AES ile kullanılamaz"]}', '{"index":0}', 'Parolanın entropisi düşüktür (2. ünite). Anahtar paroladan türetilecekse yavaş ve bellek-zor bir fonksiyon (Argon2id, scrypt, yeterli yinelemeli PBKDF2) gerekir. HKDF, sonra bu anahtardan alt anahtarlar türetmek için kullanılabilir.', 2, '9. ünite · HKDF: anahtardan anahtar türetmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-info', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Aynı ana anahtardan HKDF ile şifreleme anahtarı ve MAC anahtarı türetilirken farkı ne sağlar?', '{"choices":["Farklı `info` etiketleri (ör. \"sifreleme\", \"mac\")","Farklı uzunlukta çıktı istemek","Aynı çağrıyı iki kez yapmak; HKDF her seferinde farklı çıktı verir","Ana anahtarı önce Base64''e çevirmek"]}', '{"index":0}', 'HKDF deterministiktir: aynı girdiler aynı çıktıyı verir. `info` alanı, aynı sırdan türetilen anahtarları birbirinden ayırır ve birbirinden bağımsız yapar. Signal''in Double Ratchet''i (13. ünite) her adımda HKDF kullanır.', 1, '9. ünite · HKDF: anahtardan anahtar türetmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-yonetici', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Parola yöneticisi kullanmanın asıl güvenlik kazancı nedir?', '{"choices":["Her siteye ayrı ve rastgele parola; sızıntı yayılmaz","Parolaların sitelere hiç gönderilmemesi","Sitelerin parolaları düz metin saklasa bile sızıntının önlenmesi","Parolaların her gün otomatik değiştirilmesi"]}', '{"index":0}', 'Asıl tehlike tekrar kullanılan parolalardır. Yönetici her site için CSPRNG''den parola üretir. Kasası ana paroladan bellek-zor bir KDF ile türetilen anahtarla istemcide şifrelenir (15. ünite).', 1, '9. ünite · Parola yöneticileri ve parolasız giriş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u9-passkey', 'sifreleme', 'sf-u9', 9, 'mcq', 'derived', 'Geçiş anahtarları (passkeys) parolalardan neden oltalamaya (phishing) daha dayanıklıdır?', '{"choices":["İmza sitenin alan adına bağlıdır; sahte siteye verilecek sır yok","Passkey''ler parolalardan daha uzun olduğu için tahmin edilemez","Sahte siteler passkey alanını gösteremez","Passkey''ler her girişte SMS ile doğrulanır"]}', '{"index":0}', 'Passkey''ler (WebAuthn) açık anahtarlı kriptografi kullanır: site yalnız açık anahtarı saklar, sızsa bile işe yaramaz. Tarayıcı imzayı sitenin alan adına bağlar; benzer adlı sahte bir sayfa geçerli imza alamaz. İmzaları 11. ünitede göreceğiz.', 2, '9. ünite · Parola yöneticileri ve parolasız giriş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-sorun', 'sifreleme', 'sf-u10', 10, 'mcq', 'derived', 'Simetrik şifrelemenin "anahtar dağıtım sorunu" nedir?', '{"choices":["İki taraf ortak anahtarı önceden güvenli bir yoldan paylaşmalıdır","Simetrik anahtarlar çok uzun olduğu için ağda taşınamaz","Her mesaj için yeni bir algoritma seçilmesi gerekir","Anahtarı yalnız bir kişi bilebilir, öteki çözemez"]}', '{"index":0}', 'AES hızlı ve güvenlidir ama iki tarafın aynı anahtarı bilmesini ister. Hiç karşılaşmamış iki kişi (sen ve bir web sitesi) bu anahtarı nasıl paylaşacak? $n$ kişinin her ikilisi için ayrı anahtar $n(n-1)/2$ eder. Açık anahtarlı kriptografi bu sorunu çözmek için doğdu.', 1, '10. ünite · Anahtar dağıtım sorunu ve açık anahtar fikri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-cift-sayisi', 'sifreleme', 'sf-u10', 10, 'num', 'derived', '100 kişilik bir ekipte her iki kişinin kendine ait bir simetrik anahtarı olsun. Toplam kaç anahtar gerekir?', '{"blanks":1}', '{"blanks":[["4950±0"]]}', 'Her ikili için bir anahtar: $\binom{100}{2} = \frac{100 \cdot 99}{2} =$ **4950**. Açık anahtarlı sistemde ise her kişinin bir anahtar çifti yeter: 100 çift.', 1, '10. ünite · Anahtar dağıtım sorunu ve açık anahtar fikri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-acik-ozel', 'sifreleme', 'sf-u10', 10, 'tf', 'derived', 'Açık anahtarlı şifrelemede herkes açık anahtarla şifreleyebilir, ama yalnız özel anahtarın sahibi çözebilir.', '{}', '{"value":true}', 'Doğru. Açık anahtar bir posta kutusunun yarığı gibidir: herkes mektup atar, yalnız anahtarı olan açar. İmzada roller ters döner: özel anahtarla imzalanır, açık anahtarla herkes doğrular (11. ünite).', 1, '10. ünite · Anahtar dağıtım sorunu ve açık anahtar fikri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-dh-A', 'sifreleme', 'sf-u10', 10, 'num', 'derived', 'Diffie-Hellman''da herkese açık değerler $p = 23$, $g = 5$. Ayşe gizli sayısı olarak $a = 6$ seçiyor. Ali''ye göndereceği $A = g^a \bmod p$ kaçtır?', '{"blanks":1}', '{"blanks":[["8±0"]]}', '$5^2 = 25 \equiv 2$, $5^4 \equiv 2^2 = 4$, $5^6 = 5^4 \cdot 5^2 \equiv 4 \cdot 2 =$ **8** (mod 23).', 1, '10. ünite · Diffie-Hellman anahtar değişimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-dh-sir', 'sifreleme', 'sf-u10', 10, 'num', 'derived', 'Aynı örnekte Ali $b = 15$ seçip $B = 19$ gönderiyor. Ayşe''nin hesapladığı ortak sır $B^a \bmod p = 19^6 \bmod 23$ kaçtır?', '{"blanks":1}', '{"blanks":[["2±0"]]}', '$19 \equiv -4$ (mod 23). $(-4)^2 = 16$, $(-4)^4 = 256 \equiv 3$, $(-4)^6 = 3 \cdot 16 = 48 \equiv$ **2**.
---
Ali de $A^b = 8^{15} \bmod 23$ ile aynı sonuca ulaşır, çünkü ikisi de $g^{ab}$''dir.', 2, '10. ünite · Diffie-Hellman anahtar değişimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-dh-neden', 'sifreleme', 'sf-u10', 10, 'mcq', 'derived', 'Diffie-Hellman''da iki taraf neden aynı sırra ulaşır?', '{"choices":["$(g^b)^a = (g^a)^b = g^{ab}$; üs almanın sırası önemsizdir","İki taraf da gizli sayısını öbürüne şifreli olarak gönderir","Sunucu iki tarafa da aynı rastgele sırrı dağıtır","Ortak sır $p$ ile $g$''nin çarpımıdır ve herkes bilir"]}', '{"index":0}', 'Ayşe $B^a = g^{ab}$, Ali $A^b = g^{ab}$ hesaplar. Dinleyici yalnız $g^a$ ve $g^b$''yi görür; ikisinden $g^{ab}$''yi bulmak için $a$ ya da $b$''yi bilmesi gerekir. Boya karıştırma benzetmesinde karışımı ayrıştırmak zordur.', 1, '10. ünite · Diffie-Hellman anahtar değişimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-dh-dinleyici', 'sifreleme', 'sf-u10', 10, 'num', 'derived', 'Hattı dinliyorsun: $p = 23$, $g = 5$, $A = 8$, $B = 19$. Küçük sayılar olduğu için $a$''yı deneyerek bul ve ortak sırrı hesapla.', '{"blanks":1}', '{"blanks":[["2±0"]]}', '$5^1, 5^2, \dots$ mod 23 değerlerini sırayla hesapla: 5, 2, 10, 4, 20, **8**. Yani $a = 6$.
---
Ortak sır $B^a = 19^6 \bmod 23 =$ **2**. Gerçek sistemlerde $p$ en az 2048 bit olduğu için bu deneme imkânsızdır.', 2, '10. ünite · Diffie-Hellman anahtar değişimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-tanim', 'sifreleme', 'sf-u10', 10, 'mcq', 'derived', 'Ayrık logaritma problemi nedir?', '{"choices":["$g$, $p$ ve $g^x \\bmod p$ bilinirken $x$''i bulmak","$n = pq$ bilinirken $p$ ve $q$''yu bulmak","Bir sayının mod $p$''deki tersini bulmak","$\\log_2 n$ değerini tam sayı olarak hesaplamak"]}', '{"index":0}', 'Gerçek sayılarda $\log$ kolaydır, çünkü $g^x$ düzgün büyür. Mod $p$''de ise değerler rastgele dolaşır; büyük $p$ için bilinen en iyi algoritmalar bile alt-üstel zaman ister. Diffie-Hellman''ın güvenliği buna dayanır.', 1, '10. ünite · Ayrık logaritma problemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-kucuk', 'sifreleme', 'sf-u10', 10, 'num', 'derived', '$2^x \equiv 9 \pmod{11}$ eşitliğini sağlayan en küçük pozitif $x$ kaçtır?', '{"blanks":1}', '{"blanks":[["6±0"]]}', 'Kuvvetleri sırayla hesapla: $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16 \equiv 5$, $2^5 \equiv 10$, $2^6 \equiv 20 \equiv$ **9**. Küçük $p$''de deneme hemen biter; 2048 bitlik $p$''de denenecek $2^{2048}$ değer vardır.', 1, '10. ünite · Ayrık logaritma problemi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-mitm', 'sifreleme', 'sf-u10', 10, 'mcq', 'derived', 'Kimlik doğrulamasız Diffie-Hellman''a karşı ortadaki adam nasıl başarılı olur?', '{"choices":["İki tarafla ayrı ayrı DH yapar; her birine öteki gibi görünür ve mesajları çözüp aktarır","Dinlediği $A$ ve $B$ değerlerinden ortak sırrı doğrudan hesaplar","Açık değer $g$''yi değiştirerek iki tarafın farklı sırlara ulaşmasını sağlar ve iletişimi keser","DH''nin ortak sırrı tahmin edilebilir olduğu için tahmin eder"]}', '{"index":0}', 'DH yalnız "kiminle konuştuğunu bilmeden" ortak sır üretir. Saldırgan Ayşe''ye Ali, Ali''ye Ayşe gibi davranır ve iki ayrı sır kurar. Çözüm, değişimi kimlikle bağlamaktır: sunucunun sertifikalı anahtarıyla imzalanmış DH (TLS, 12. ünite) ya da karşılaştırılan güvenlik numaraları (Signal, 13. ünite).', 2, '10. ünite · Ortadaki adam saldırısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-mitm-farkli', 'sifreleme', 'sf-u10', 10, 'tf', 'derived', 'Ortadaki adam saldırısı sırasında Ayşe ile Ali''nin hesapladığı "ortak sırlar" aslında birbirinden farklıdır.', '{}', '{"value":true}', 'Doğru. Ayşe''nin sırrı saldırganla, Ali''ninki de saldırganla ortaktır. Ayşe ile Ali sırlarının bir parmak izini başka bir kanaldan (yüz yüze, telefonla) karşılaştırsa saldırı ortaya çıkar. Güvenlik numaralarının mantığı budur.', 1, '10. ünite · Ortadaki adam saldırısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-n', 'sifreleme', 'sf-u10', 10, 'num', 'derived', 'Oyuncak RSA''da $p = 11$ ve $q = 17$ seçiliyor. $n$ kaçtır?', '{"blanks":1}', '{"blanks":[["187±0"]]}', '$n = p \cdot q = 11 \cdot 17 =$ **187**. $n$ açık anahtarın parçasıdır; $p$ ve $q$ gizli kalmalıdır.', 1, '10. ünite · Oyuncak sayılarla RSA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-phi', 'sifreleme', 'sf-u10', 10, 'num', 'derived', 'Aynı örnekte ($p = 11$, $q = 17$) $\varphi(n) = (p-1)(q-1)$ kaçtır?', '{"blanks":1}', '{"blanks":[["160±0"]]}', '$\varphi(187) = 10 \cdot 16 =$ **160**. $\varphi(n)$''i hesaplamak için $p$ ve $q$''yu bilmek gerekir; RSA''nın gizliliği buradan gelir.', 1, '10. ünite · Oyuncak sayılarla RSA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-d', 'sifreleme', 'sf-u10', 10, 'num', 'derived', '$\varphi(n) = 160$ ve $e = 7$ ise özel üs $d = e^{-1} \bmod \varphi(n)$ kaçtır?', '{"blanks":1}', '{"blanks":[["23±0"]]}', '$7d \equiv 1 \pmod{160}$ eşitliğini arıyoruz. Genişletilmiş Öklid ya da deneme: $7 \cdot 23 = 161 = 160 + 1$.
---
Sonuç: $d =$ **23**.', 2, '10. ünite · Oyuncak sayılarla RSA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-sifrele', 'sifreleme', 'sf-u10', 10, 'num', 'derived', 'Açık anahtar $(n, e) = (187, 7)$. $m = 88$ mesajı $c = m^e \bmod n$ ile şifrelenince $c$ kaçtır?', '{"blanks":1}', '{"blanks":[["11±0"]]}', 'Kare al ve çarp: $88^2 = 7744 \equiv 77$, $88^4 \equiv 77^2 = 5929 \equiv 132$ (mod 187).
---
$88^7 = 88^4 \cdot 88^2 \cdot 88 \equiv 132 \cdot 77 \cdot 88$. $132 \cdot 77 = 10164 \equiv 66$, $66 \cdot 88 = 5808 \equiv$ **11**.', 2, '10. ünite · Oyuncak sayılarla RSA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-kir', 'sifreleme', 'sf-u10', 10, 'num', 'derived', 'Yakaladığın şifreli mesaj $c = 11$, açık anahtar $(n, e) = (187, 7)$. $n$''i çarpanlarına ayır, özel anahtarı bul ve mesajı çöz.', '{"blanks":1}', '{"blanks":[["88±0"]]}', '$187 = 11 \cdot 17$ (küçük asallarla bölmeyi dene).
---
$\varphi = 10 \cdot 16 = 160$, $d = 7^{-1} \bmod 160 = 23$.
---
$m = 11^{23} \bmod 187 =$ **88**. Bütün güvenlik $n$''in çarpanlarına ayrılamamasına dayanır.', 3, '10. ünite · Oyuncak sayılarla RSA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-e-65537', 'sifreleme', 'sf-u10', 10, 'mcq', 'derived', 'Gerçek RSA anahtarlarında açık üs $e$ için neden çoğunlukla 65537 seçilir?', '{"choices":["Asaldır ve ikilik yazımında yalnız iki 1 biti olduğu için şifreleme hızlıdır","Özel üs $d$''nin de 65537 olmasını sağlar","En büyük 17 bitlik sayı olduğu için en güvenlisidir","Her $\\varphi(n)$ ile aralarında asal olması garanti olan tek sayıdır"]}', '{"index":0}', '$65537 = 2^{16} + 1$; kare al ve çarp yöntemiyle 16 kare ve 1 çarpma yeter. Çok küçük $e$ (ör. 3) ders kitabı RSA''da açıklara yol açtığı için 65537 bir orta yoldur. $d$ ise $n$ kadar büyük ve gizlidir.', 1, '10. ünite · Oyuncak sayılarla RSA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-deterministik', 'sifreleme', 'sf-u10', 10, 'mcq', 'derived', 'Bir oylama uygulaması oyları ders kitabı RSA''yla ($c = m^e \bmod n$) şifreliyor; oy "EVET" ya da "HAYIR". Sorun nedir?', '{"choices":["Aynı oy hep aynı şifreli metni verir, iki seçenek denenip eşleştirilir","RSA yalnız sayıları şifreleyebildiği için metin oylar bozulur","Şifreli oylar açık metinden kısa kaldığı için oyun bir kısmı kaybolur","Ders kitabı RSA hiç çözülemeyen şifreli metin üretir"]}', '{"index":0}', 'Ders kitabı RSA deterministiktir ve açık anahtar herkestedir. Saldırgan "EVET" ve "HAYIR"ı kendisi şifreler ve oylarla eşleştirir. Gerçek RSA şifrelemesi **OAEP** dolgusuyla her seferinde rastgelelik ekler.', 1, '10. ünite · Ders kitabı RSA''nın açıkları ve OAEP', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-carpimsal', 'sifreleme', 'sf-u10', 10, 'mcq', 'derived', 'Ders kitabı RSA''da $E(m_1) \cdot E(m_2) \bmod n$ neye eşittir?', '{"choices":["$m_1 m_2 \\bmod n$ çarpımının şifresine","$m_1 + m_2$ toplamının şifresine","$m_1 - m_2$ farkının şifresine","Rastgele bir değere; bağıntı yoktur"]}', '{"index":0}', '$m_1^e \cdot m_2^e = (m_1 m_2)^e$. Saldırgan şifreli metni bilinen bir sayının şifresiyle çarparak açık metni öngörülebilir biçimde değiştirebilir. Bu **değiştirilebilirlik** de dolgunun yok ettiği bir özelliktir.', 3, '10. ünite · Ders kitabı RSA''nın açıkları ve OAEP', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-oaep', 'sifreleme', 'sf-u10', 10, 'mcq', 'derived', 'RSA şifrelemede bugün hangi dolgu kullanılmalıdır?', '{"choices":["OAEP","Dolgu gerekmez","PKCS#7","Sıfır baytlarla tamamlama"]}', '{"index":0}', 'OAEP (Optimal Asymmetric Encryption Padding) mesajı rastgele bir değer ve hash''lerle karıştırır. Eski PKCS#1 v1.5 dolgusu Bleichenbacher''in 1998 saldırısına açıktır; 2017''de ROBOT çalışması bunun hâlâ birçok sunucuda işe yaradığını gösterdi. PKCS#7 blok şifrelerin dolgusudur.', 1, '10. ünite · Ders kitabı RSA''nın açıkları ve OAEP', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-guvenlik', 'sifreleme', 'sf-u10', 10, 'mcq', 'derived', 'RSA''nın güvenliği hangi problemin zorluğuna dayanır?', '{"choices":["$n = pq$ sayısını çarpanlarına ayırmanın","Ayrık logaritma bulmanın","Hash çakışması bulmanın","Büyük asal sayı üretmenin"]}', '{"index":0}', '$p$ ve $q$ bulunursa $\varphi(n)$ ve ardından $d$ hemen hesaplanır. Asal üretmek ise kolaydır (olasılıklı asallık testleri). Çarpmak kolay, çarpanlara ayırmak zor: tek yönlü kapı.', 1, '10. ünite · Çarpanlara ayırma ve anahtar boyu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-boyut', 'sifreleme', 'sf-u10', 10, 'mcq', 'derived', 'Yaklaşık 128 bitlik güvenlik için hangi anahtar boyları denk kabul edilir?', '{"choices":["RSA 3072 bit, eliptik eğri 256 bit","RSA 128 bit, eliptik eğri 128 bit","RSA 1024 bit, eliptik eğri 512 bit","RSA 256 bit, eliptik eğri 3072 bit"]}', '{"index":0}', 'Çarpanlara ayırmanın alt-üstel algoritmaları (sayı cismi kalburu) olduğu için RSA çok daha uzun anahtar ister. Eliptik eğri ayrık logaritmasına karşı bilinen en iyi saldırı karekök kadardır: 256 bit, 128 bitlik güvenlik verir. RSA-2048 yaklaşık 112 bittir.', 2, '10. ünite · Çarpanlara ayırma ve anahtar boyu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u10-rsa250', 'sifreleme', 'sf-u10', 10, 'tf', 'derived', '829 bitlik RSA-250 sayısı 2020''de akademik bir ekip tarafından çarpanlarına ayrıldı.', '{}', '{"value":true}', 'Doğru. Yaklaşık 2700 çekirdek-yıllık hesapla. 2048 bitlik bir anahtar bunun çok ötesindedir; ama yeterince büyük bir kuantum bilgisayar (Shor algoritması) RSA''yı ve eliptik eğrileri kırar. Geçiş 18. ünitenin konusu.', 1, '10. ünite · Çarpanlara ayırma ve anahtar boyu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-geometri', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'Gerçek sayılar üzerindeki bir eliptik eğride $P + Q$ nasıl bulunur?', '{"choices":["$P$ ile $Q$''dan geçen doğrunun eğriyi kestiği üçüncü noktanın yansıması","$P$ ile $Q$''nun koordinatları ayrı ayrı toplanır","$P$ ile $Q$''nun orta noktası bulunur ve eğriye dik izdüşürülür","$P$''deki teğetin $Q$''dan geçen dikmesiyle kesiştiği nokta"]}', '{"index":0}', 'Bir doğru kübik eğriyi en çok üç noktada keser. $P$ ve $Q$''dan geçen doğru üçüncü noktayı verir, bu nokta x eksenine göre yansıtılır. $P = Q$ ise doğru yerine teğet kullanılır (ikiye katlama).', 1, '11. ünite · Eğri üzerinde nokta toplama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-sonsuz', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'Eğrideki sonsuzdaki nokta $O$ toplamada hangi rolü oynar?', '{"choices":["Etkisiz elemandır: $P + O = P$","Her noktanın kendisidir: $P + P = O$","Eğrinin tepe noktasıdır","Yalnız ikiye katlamada kullanılır"]}', '{"index":0}', '$P$ ile $-P = (x, -y)$''den geçen doğru dikeydir, eğriyi başka bir noktada kesmez; bu toplamın sonucu $O$ kabul edilir. Böylece noktalar bir grup oluşturur: sayılardaki 0 gibi.', 1, '11. ünite · Eğri üzerinde nokta toplama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-ters', 'sifreleme', 'sf-u11', 11, 'num', 'derived', '$y^2 = x^3 + 2x + 3 \pmod{97}$ eğrisinde $P = (3, 6)$ noktasının tersi $-P$''nin y koordinatı kaçtır?', '{"blanks":1}', '{"blanks":[["91±0"]]}', '$-P = (x, -y \bmod p) = (3, 97 - 6) = (3,$ **91**$)$. Gerçek sayılarda x eksenine göre yansıma neyse, mod $p$''de $y \to p - y$ odur.', 1, '11. ünite · Eğri üzerinde nokta toplama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-uzerinde', 'sifreleme', 'sf-u11', 11, 'tf', 'derived', '$P = (3, 6)$ noktası $y^2 = x^3 + 2x + 3 \pmod{97}$ eğrisinin üzerindedir.', '{}', '{"value":true}', 'Doğru. Sol: $6^2 = 36$. Sağ: $27 + 6 + 3 = 36$. İki taraf mod 97''de eşit.', 1, '11. ünite · Eğri üzerinde nokta toplama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-ikiye-katla', 'sifreleme', 'sf-u11', 11, 'num', 'derived', 'Aynı eğride ($a = 2$, $p = 97$) $P = (3, 6)$ için $2P$''nin x koordinatı kaçtır? Teğetin eğimi $\lambda = (3x^2 + a) \cdot (2y)^{-1} \bmod p$, $x_3 = \lambda^2 - 2x \bmod p$.', '{"blanks":1}', '{"blanks":[["80±0"]]}', '$3 \cdot 9 + 2 = 29$; $2y = 12$ ve $12^{-1} \equiv 89$ (mod 97), çünkü $12 \cdot 89 = 1068 = 11 \cdot 97 + 1$.
---
$\lambda = 29 \cdot 89 = 2581 \equiv 59$. $x_3 = 59^2 - 6 = 3475 \equiv$ **80** (mod 97). Tam sonuç $2P = (80, 10)$.', 3, '11. ünite · Sonlu cisim üzerinde eğri ve skaler çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-ciftle-topla', 'sifreleme', 'sf-u11', 11, 'num', 'derived', '$13P$, çiftle ve topla yöntemiyle $13 = 1101_2$''nin bitleri soldan sağa okunarak hesaplanıyor. Kaç ikiye katlama yapılır?', '{"blanks":1}', '{"blanks":[["3±0"]]}', 'İlk bit $R = P$ yapar. Kalan her bit için bir ikiye katlama: üç bit, **3** katlama. 1 olan bitlerde ayrıca $P$ eklenir. 256 bitlik bir $k$ için yaklaşık 256 katlama ve 128 toplama yeter; $k$ adım adım toplansa evrenin ömrü yetmezdi.', 2, '11. ünite · Sonlu cisim üzerinde eğri ve skaler çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-mertebe', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', '$P$''nin mertebesi 5''tir, yani $5P = O$. $7P$ neye eşittir?', '{"choices":["$2P$","$O$","$7P$ tanımsızdır","$P$"]}', '{"index":0}', '$7P = 5P + 2P = O + 2P = 2P$. Skaler çarpımda $k$ mertebeye göre mod alınarak düşünülür. Gerçek eğrilerde üreteç noktanın mertebesi 256 bitlik bir asaldır.', 2, '11. ünite · Sonlu cisim üzerinde eğri ve skaler çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-ecdlp', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'Eliptik eğri kriptografisinin güvenliği hangi problemin zorluğuna dayanır?', '{"choices":["$P$ ve $Q = kP$ bilinirken $k$''yi bulmak","Eğri üzerindeki noktaların sayısını bulmak","İki noktayı toplamak","$p$ asalını çarpanlarına ayırmak"]}', '{"index":0}', '$kP$''yi hesaplamak hızlıdır (çiftle ve topla), $k$''yi geri bulmak bilinen en iyi yöntemlerle $\sqrt{n}$ adım ister. Sayılardaki ayrık logaritmanın aksine alt-üstel kısayol bilinmediği için 256 bitlik eğri 128 bitlik güvenlik verir.', 1, '11. ünite · Sonlu cisim üzerinde eğri ve skaler çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-formul', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'ECDH''de Ayşe''nin gizli sayısı $a$, Ali''ninki $b$, ortak nokta $G$. Ortak sır nedir?', '{"choices":["$abG$","$(a + b)G$","$aG + bG$","$G^{ab}$"]}', '{"index":0}', 'Ayşe $aG$, Ali $bG$ gönderir. Ayşe $a(bG)$, Ali $b(aG)$ hesaplar; ikisi de $abG$''dir. Diffie-Hellman''daki üs almanın yerini skaler çarpım alır.', 1, '11. ünite · ECDH ve X25519', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-x25519-boy', 'sifreleme', 'sf-u11', 11, 'num', 'derived', 'X25519''da bir açık anahtar kaç bayttır?', '{"blanks":1}', '{"blanks":[["32±0"]]}', '**32** bayt (255 bitlik bir x koordinatı). Aynı güvenlik için RSA ya da klasik DH 384 baytlık değerler gönderir. Kısa anahtar, el sıkışmayı küçük ve hızlı tutar.', 1, '11. ünite · ECDH ve X25519', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-curve25519', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'Curve25519 tasarımının öne çıkan özelliği nedir?', '{"choices":["Hatasız ve sabit zamanlı yazılması kolay olacak biçimde tasarlandı","Yalnız devletlerin kullanması için gizli parametrelerle üretildi","Kuantum bilgisayarlara karşı dayanıklıdır","Anahtarları RSA''dan daha uzundur"]}', '{"index":0}', 'Daniel J. Bernstein (2005) parametreleri açıkça gerekçelendirdi, her 32 baytlık dizi geçerli bir anahtardır ve formüllerde dallanma yoktur. Kuantum dayanıklılığı yoktur; bu yüzden 2026''da tarayıcılar X25519''u ML-KEM ile birlikte kullanıyor (18. ünite).', 1, '11. ünite · ECDH ve X25519', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-tls-yaygin', 'sifreleme', 'sf-u11', 11, 'tf', 'derived', 'TLS 1.3''te anahtarı RSA ile şifreleyip sunucuya gönderme yöntemi kaldırıldı; tam bir el sıkışmada ortak anahtar (EC)DHE ile kurulur.', '{}', '{"value":true}', 'Doğru. TLS 1.3 RSA ile anahtar taşımayı kaldırdı, çünkü sunucunun özel anahtarı çalınırsa geçmiş bütün trafik çözülüyordu. Her bağlantıda yeni DH anahtarı (E: ephemeral) ileri gizlilik sağlar. RSA yalnız sertifika imzası için kalabilir.', 1, '11. ünite · ECDH ve X25519', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-roller', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'Dijital imzada hangi anahtar ne için kullanılır?', '{"choices":["Özel anahtarla imzalanır, açık anahtarla herkes doğrular","Açık anahtarla imzalanır, özel anahtarla doğrulanır","İki taraf ortak bir gizli anahtarla imzalar ve doğrular","İmza için anahtar gerekmez, hash yeterlidir"]}', '{"index":0}', 'İmzayı yalnız özel anahtarın sahibi üretebilir, doğrulamayı herkes yapabilir. Ortak anahtarla etiket üretmek MAC''tir (8. ünite) ve inkâr edilemezlik sağlamaz.', 1, '11. ünite · Dijital imza fikri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-inkar', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'İmzanın MAC''in vermediği hangi güvenceyi verdiği söylenir?', '{"choices":["İnkâr edilemezlik","Gizlilik","Hız","Kısa etiket"]}', '{"index":0}', 'MAC anahtarını iki taraf da bilir; etiketi ikisi de üretebilir. İmzayı yalnız özel anahtarın sahibi atabildiği için üçüncü kişiye kanıt olur. İmza mesajı gizlemez.', 1, '11. ünite · Dijital imza fikri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-gizler-mi', 'sifreleme', 'sf-u11', 11, 'tf', 'derived', 'Bir mesajı imzalamak onu okunamaz hale getirir.', '{}', '{"value":false}', 'Yanlış. İmza mesajın yanına eklenen bir kanıttır, mesaj açık kalır. Gizlilik isteniyorsa ayrıca şifrelenir. Yazılım güncellemeleri ve Git etiketleri imzalıdır ama herkes okuyabilir.', 1, '11. ünite · Dijital imza fikri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-hashle-imzala', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'Uzun bir dosya imzalanırken neden önce hash''i alınır?', '{"choices":["İmza sabit boylu bir değer üzerinde çalışır; hash dosyayı ona sıkıştırır","Hash dosyayı şifreler ve gizli tutar","İmza algoritmaları yalnız metin dosyalarıyla çalışır","Hash alınmazsa açık anahtar doğrulama yapamaz hale gelir ve imza geçersiz olur"]}', '{"index":0}', 'ECDSA ve RSA imzası anahtar boyunda tek bir sayı üzerinde çalışır. 4 GB''lık bir dosyanın SHA-256 özeti imzalanır; özetin çakışma direnci imzayı dosyanın tamamına bağlar.', 1, '11. ünite · Dijital imza fikri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-rastgele-k', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'ECDSA''nın her imza için istediği şey nedir?', '{"choices":["Gizli ve hiç tekrarlanmayan rastgele bir $k$","Her imza için yeni bir anahtar çifti","Alıcının doğrulanmış açık anahtarı","Mesajın önce AES ile şifrelenmesi"]}', '{"index":0}', 'ECDSA her imzada $R = kG$ hesaplar, $r$ onun x koordinatıdır. $k$ sızarsa ya da iki imzada aynı olursa özel anahtar hesaplanır. Kötü bir rastgele sayı üreteci ECDSA''yı çökertir.', 1, '11. ünite · ECDSA ve Ed25519', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-ed25519-nonce', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'Ed25519 imzanın nonce değerini nasıl üretir?', '{"choices":["Özel anahtardan türetilen bir önek ile mesajı hash''leyerek","Her imzada işletim sisteminden yeni rastgele sayı alır","Sabit bir değer kullanır, çünkü eğri zaten güvenlidir","İmzayı doğrulayacak taraftan bir rastgele sayı ister"]}', '{"index":0}', 'Ed25519 (deterministik Schnorr) $r = H(\text{önek} \| m)$ kullanır. Aynı mesaj aynı imzayı verir, farklı mesajlar farklı nonce verir. RFC 6979 aynı fikri ECDSA''ya uygular.', 2, '11. ünite · ECDSA ve Ed25519', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-imza-boy', 'sifreleme', 'sf-u11', 11, 'num', 'derived', 'Bir Ed25519 imzası kaç bayttır?', '{"blanks":1}', '{"blanks":[["64±0"]]}', '**64** bayt: 32 baytlık $R$ noktası ve 32 baytlık $s$. Açık anahtar 32 bayttır. RSA-2048 imzası 256 bayttır.', 1, '11. ünite · ECDSA ve Ed25519', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-nerede', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'Aşağıdakilerden hangisi gündelik bir imza kullanımı değildir?', '{"choices":["Bir dosyayı AES ile şifrelemek","Telefonun işletim sistemi güncellemesini doğrulaması","SSH''ta sunucunun kimliğini kanıtlaması","Bir sitenin sertifikasını CA''nın onaylaması"]}', '{"index":0}', 'Güncellemeler, uygulama paketleri, SSH anahtarları (çoğunlukla Ed25519), sertifikalar ve passkey''ler imzayla çalışır. AES şifrelemesi gizlilik sağlar, kimlik kanıtlamaz.', 1, '11. ünite · ECDSA ve Ed25519', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-ps3', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', '2010''da bir oyun konsolunun yazılım imzalama anahtarı nasıl ele geçirildi?', '{"choices":["Üretici bütün ECDSA imzalarında aynı $k$ değerini kullanmıştı","Eliptik eğri çok küçük seçilmişti","Özel anahtar konsolun belleğinde açık duruyordu","SHA-1 çakışması bulunmuştu"]}', '{"index":0}', 'fail0verflow ekibi iki imzanın aynı $r$''yi taşıdığını gördü; bu $k$''nin aynı olduğu demekti. Birkaç satırlık cebirle özel anahtar çıktı ve herkes kendi yazılımını imzalayabildi. 2013''te bir Android rastgele sayı hatası Bitcoin cüzdanlarında aynı şeye yol açtı.', 1, '11. ünite · İmzada nonce tekrarı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-k-bul', 'sifreleme', 'sf-u11', 11, 'num', 'derived', 'Mertebe $n = 101$ olan oyuncak bir ECDSA''da iki imza aynı $r = 45$''i taşıyor. Birinci imzada $z_1 = 30$, $s_1 = 10$; ikincide $z_2 = 55$, $s_2 = 84$. $s = k^{-1}(z + rd) \bmod n$ olduğuna göre $k = (z_1 - z_2) \cdot (s_1 - s_2)^{-1} \bmod n$ kaçtır?', '{"blanks":1}', '{"blanks":[["29±0"]]}', '$z_1 - z_2 = -25 \equiv 76$, $s_1 - s_2 = -74 \equiv 27$ (mod 101). $27^{-1} \equiv 15$, çünkü $27 \cdot 15 = 405 = 4 \cdot 101 + 1$.
---
$k = 76 \cdot 15 = 1140 \equiv$ **29**. Ardından özel anahtar $d = (s_1 k - z_1) \cdot r^{-1} \bmod n = 17$ bulunur.', 3, '11. ünite · İmzada nonce tekrarı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-neden-cikar', 'sifreleme', 'sf-u11', 11, 'mcq', 'derived', 'Aynı $k$ ile atılmış iki ECDSA imzası neden özel anahtarı ele verir?', '{"choices":["İki imza denklemi $k$ ve $d$ için çözülebilir bir doğrusal sistem verir","Aynı $k$ kullanılınca eğri zayıf bir eğriye dönüşür","İmzalar birleşince özel anahtarın hash''i çıkar","İki imza yan yana konunca özel anahtar imzada açıkça görünür"]}', '{"index":0}', '$s_1 k = z_1 + rd$ ve $s_2 k = z_2 + rd$. Çıkarınca $d$ yok olur ve $k$ bulunur, sonra $d$ gelir. Farklı ama ilişkili $k$''ler (ör. tahmin edilebilir bir sayaç) bile benzer saldırılara açıktır.', 2, '11. ünite · İmzada nonce tekrarı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u11-korunma', 'sifreleme', 'sf-u11', 11, 'tf', 'derived', 'Ed25519 ve RFC 6979''lu ECDSA, nonce''u mesajdan ve anahtardan türettiği için bozuk bir rastgele sayı üretecinden etkilenmez.', '{}', '{"value":true}', 'Doğru. Nonce imza anında rastgele çekilmez, belirlenimli olarak hesaplanır. Anahtar üretimi yine iyi rastgelelik ister (3. ünite).', 1, '11. ünite · İmzada nonce tekrarı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-sorun', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'Açık anahtarlı kriptografi anahtar dağıtımını kolaylaştırsa da hangi sorunu kendi başına çözmez?', '{"choices":["Açık anahtarın gerçekten o kişiye ait olduğunu bilmeyi","İki tarafın ortak bir sırra ulaşmasını","Mesajın şifrelenmesini","Uzun mesajların hızlı ve güvenli biçimde şifrelenmesini"]}', '{"index":0}', 'Saldırgan kendi açık anahtarını "bankanın anahtarı" diye verirse şifreleme kusursuz çalışır ama saldırgana. 10. ünitedeki ortadaki adam tam budur. Çözüm, anahtarı bir kimliğe güvenilir biri aracılığıyla bağlamaktır: sertifika.', 1, '12. ünite · Açık anahtarın sahibini bilmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-parmak-izi', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'SSH ilk bağlantıda "Bu sunucunun parmak izi şu, devam edilsin mi?" diye sorar. Bu yaklaşımın adı nedir?', '{"choices":["İlk kullanımda güven","Sertifika zinciri","Certificate Transparency","Anahtar takvimi"]}', '{"index":0}', 'İngilizcesiyle Trust On First Use (TOFU): ilk görülen anahtar kaydedilir, sonra değişirse uyarı verilir. Basittir ama ilk bağlantının dinlenmediğini varsayar. Signal''deki güvenlik numaraları da elle karşılaştırılarak bu varsayımı kaldırır.', 1, '12. ünite · Açık anahtarın sahibini bilmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-web-of-trust', 'sifreleme', 'sf-u12', 12, 'tf', 'derived', 'PGP''nin güven ağında merkezi bir otorite yoktur; kullanıcılar birbirlerinin anahtarlarını imzalayarak kefil olur.', '{}', '{"value":true}', 'Doğru. Fikir güzeldir ama ölçeklenmedi: çoğu insan anahtar imzalama partilerine gitmez. Web, bunun yerine az sayıda sertifika otoritesine güvenen merkezi bir model seçti.', 1, '12. ünite · Açık anahtarın sahibini bilmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-icerik', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'Bir X.509 sertifikası özünde nedir?', '{"choices":["Alan adını açık anahtara bağlayan, CA imzalı bir belge","Sitenin özel anahtarının şifrelenmiş kopyası","Tarayıcının siteye gönderdiği dijital kimlik kartı","Bağlantıda kullanılacak AES anahtarı"]}', '{"index":0}', 'Sertifikada konu (ör. `ornek-banka.test`), açık anahtar, geçerlilik tarihleri, izin verilen kullanımlar ve imzalayan CA vardır. Özel anahtar sertifikada değil, sunucudadır.', 1, '12. ünite · Sertifikalar ve güven zinciri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-zincir', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'Tarayıcı bir sitenin sertifikasına neden güvenir?', '{"choices":["Sertifikayı bir ara CA, onu da işletim sistemindeki bir kök CA imzalamıştır","Site sertifikayı kendi imzalamıştır","Sertifika HTTPS üzerinden geldiği için","Sertifikanın alan adı adres çubuğundakiyle aynı olduğu için"]}', '{"index":0}', 'Zincir genellikle üç halkadır: yaprak (site), ara CA, kök. Kökler işletim sistemi ya da tarayıcının güven deposunda gelir. Tarayıcı her imzayı bir üst halkanın açık anahtarıyla doğrular ve kökte durur. Alan adı eşleşmesi gerekir ama tek başına yetmez.', 2, '12. ünite · Sertifikalar ve güven zinciri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-kok-cevrimdisi', 'sifreleme', 'sf-u12', 12, 'tf', 'derived', 'Kök CA''ların özel anahtarları çoğunlukla çevrimdışı tutulur; günlük sertifikaları ara CA''lar imzalar.', '{}', '{"value":true}', 'Doğru. Kök anahtarı sızarsa güven deposundaki o kökü bütün cihazlardan kaldırmak gerekir. Ara CA sızarsa yalnız o ara iptal edilir. Kökler genellikle donanım güvenlik modüllerinde (HSM), törenle açılır.', 1, '12. ünite · Sertifikalar ve güven zinciri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-diginotar', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', '2011''de Hollandalı bir CA olan DigiNotar''a ne oldu?', '{"choices":["Ele geçirildi, sahte sertifikalar üretildi ve güvenden çıkarıldı","Sertifika fiyatlarını artırınca müşterilerini kaybetti","SHA-1 kullandığı için sertifikaları kendiliğinden geçersiz oldu","Let''s Encrypt ile birleşip ücretsiz sertifika vermeye başladı"]}', '{"index":0}', 'Saldırgan büyük bir arama motoru dahil yüzlerce sahte sertifika üretti; bunlar bir ülkede kullanıcıları dinlemek için kullanıldı. Tarayıcılar DigiNotar kökünü kaldırdı, şirket aynı yıl iflas etti. Olay Certificate Transparency''nin doğmasına yol açtı.', 1, '12. ünite · Sertifikalar ve güven zinciri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-omur', 'sifreleme', 'sf-u12', 12, 'num', 'derived', 'CA/Browser Forum''un 2025''te kabul ettiği karara göre 2029''dan itibaren bir TLS sertifikası en çok kaç gün geçerli olabilecek?', '{"blanks":1}', '{"blanks":[["47±0"]]}', 'Takvim: Mart 2026''dan itibaren 200 gün, Mart 2027''den itibaren 100 gün, Mart 2029''dan itibaren **47** gün. Kısa ömür, sızan bir anahtarın zararını sınırlar ve yenilemenin otomatikleşmesini (ACME) zorunlu kılar.', 2, '12. ünite · Sertifikalar ve güven zinciri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-neden', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'Bir sertifikanın süresi dolmadan iptal edilmesi en çok hangi durumda gerekir?', '{"choices":["Sunucunun özel anahtarı sızdığında","Site tasarımı değiştiğinde","Sunucu yeniden başlatıldığında","Ziyaretçi sayısı arttığında"]}', '{"index":0}', 'Sızan anahtarla saldırgan siteyi taklit edebilir. Sertifika iptal edilir ve tarayıcıların bunu öğrenmesi gerekir: CRL listeleri, OCSP sorguları ya da tarayıcının kendi dağıttığı listeler (CRLite).', 1, '12. ünite · İptal ve Certificate Transparency', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-ocsp', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'Let''s Encrypt 2025''te OCSP hizmetini neden kapattı?', '{"choices":["Her sorgu ziyaret edilen siteyi CA''ya bildiriyordu","OCSP kuantum bilgisayarlara açık olduğu için","Sertifikalar artık hiçbir zaman iptal edilmediği için","Tarayıcılar OCSP yanıtlarını şifreleyemediği için"]}', '{"index":0}', 'Tarayıcı her siteyi açarken CA''ya "bu sertifika geçerli mi?" diye sorunca CA kimin nereye girdiğini görür. Ayrıca sorgu başarısız olunca tarayıcılar çoğunlukla bağlantıya izin veriyordu. CRL''ler ve tarayıcı tarafı listeler bu işi üstlendi.', 2, '12. ünite · İptal ve Certificate Transparency', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-ct', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'Certificate Transparency (CT) neyi sağlar?', '{"choices":["Her sertifika herkese açık, silinemez günlüklere yazılır","Sertifikaların sunucuda şifreli saklanmasını","Sertifikası olmayan siteleri arama sonuçlarından gizlemeyi","CA''ların sertifika vermesini engellemeyi"]}', '{"index":0}', 'CT günlükleri Merkle ağacıdır (7. ünite): bir kayıt eklenince silinemez, günlük sonradan değiştirilirse kanıtla yakalanır. Chrome 2018''den beri CT''ye yazılmamış sertifikaları reddeder. Site sahipleri kendi alan adları için verilen sertifikaları izleyebilir.', 1, '12. ünite · İptal ve Certificate Transparency', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-ct-gizlilik', 'sifreleme', 'sf-u12', 12, 'tf', 'derived', 'CT günlükleri herkese açık olduğu için bir şirketin henüz duyurmadığı alt alan adları da sertifika aldığı anda görünür hale gelebilir.', '{}', '{"value":true}', 'Doğru. `yeni-urun.ornek.test` için alınan sertifika günlüğe düşer ve arama araçlarıyla bulunur. Saldırganlar da hedef taramasında CT''yi kullanır. Gizli kalması gereken adlar için joker (`*.ornek.test`) sertifika kullanılabilir.', 1, '12. ünite · İptal ve Certificate Transparency', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-rtt', 'sifreleme', 'sf-u12', 12, 'num', 'derived', 'TLS 1.3''te ilk bağlantıda istemci şifreli veri göndermeye başlamadan önce kaç gidiş-dönüş (RTT) beklenir?', '{"blanks":1}', '{"blanks":[["1±0"]]}', '**1** RTT. İstemci ilk mesajında (ClientHello) DH anahtar payını tahminle gönderir; sunucu yanıtında kendi payını, sertifikasını ve imzasını yollar. TLS 1.2 iki RTT isterdi.', 1, '12. ünite · TLS 1.3 el sıkışması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-sira', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'TLS 1.3 el sıkışmasında sunucu kimliğini nasıl kanıtlar?', '{"choices":["El sıkışma dökümünün hash''ini özel anahtarıyla imzalar","Sertifikasını göndermesi tek başına yeterlidir","Özel anahtarını şifreleyip istemciye gönderir","İstemcinin gönderdiği rastgele sayıyı geri yollar"]}', '{"index":0}', 'Sertifika herkese açıktır, kopyalanabilir. Kanıt CertificateVerify mesajındadır: o ana kadarki bütün mesajların özeti imzalanır. Böylece DH payları da imzaya bağlanır ve ortadaki adam payları değiştiremez.', 2, '12. ünite · TLS 1.3 el sıkışması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-ileri-gizlilik', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'İleri gizlilik (forward secrecy) ne demektir?', '{"choices":["Uzun ömürlü anahtar sonradan çalınsa da geçmiş oturumlar çözülemez","Gelecekteki oturumların anahtarları önceden hesaplanıp saklanır","Şifreli metin her zaman ileriye doğru çözülür","Sertifika süresi dolmadan önce yenilenir"]}', '{"index":0}', 'Her oturumun anahtarı geçici bir DH değişiminden gelir ve oturum bitince silinir. Uzun ömürlü anahtar yalnız imza atar. Bugün kaydedilip yarın çözülmeye çalışılan trafiğe karşı temel savunmadır; kuantum için ise ayrıca ML-KEM gerekir (18. ünite).', 1, '12. ünite · TLS 1.3 el sıkışması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-sifreli-sertifika', 'sifreleme', 'sf-u12', 12, 'tf', 'derived', 'TLS 1.3''te sunucunun sertifikası şifreli gönderilir; ağı dinleyen biri hangi sertifikanın kullanıldığını göremez.', '{}', '{"value":true}', 'Doğru. TLS 1.2''de sertifika açık giderdi. 1.3''te ServerHello''dan sonraki her şey el sıkışma anahtarlarıyla şifrelenir. Ama istemcinin hangi siteye gittiği ClientHello''daki SNI alanından görülebilir (ECH bunu da gizler).', 1, '12. ünite · TLS 1.3 el sıkışması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-0rtt', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'TLS 1.3''ün 0-RTT (erken veri) özelliğinin bilinen riski nedir?', '{"choices":["Erken veri tekrar oynatılabilir; para gönderme gibi istekler için kullanılmamalıdır","Erken veri şifrelenmeden gönderilir","0-RTT sertifika doğrulamasını tamamen atlar ve kimliği belirsiz sunucularla konuşur","0-RTT yalnız RSA anahtarlarıyla çalışır"]}', '{"index":0}', 'Daha önce bağlanılmış bir sunucuya, saklanan anahtarla ilk pakette veri gönderilir. Bu veri şifrelidir ama yeni bir DH değişimi henüz yapılmadığı için saldırgan paketi yakalayıp yeniden gönderebilir. Sunucular 0-RTT''yi yalnız GET gibi zararsız isteklere açar.', 3, '12. ünite · TLS 1.3 el sıkışması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-hkdf', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'TLS 1.3''te oturum anahtarları DH sırrından nasıl elde edilir?', '{"choices":["HKDF ile, el sıkışma dökümüne ve etiketlere bağlanarak adım adım türetilir","DH sırrı doğrudan AES anahtarı olarak kullanılır","Sunucu rastgele bir anahtar seçip istemciye RSA ile gönderir","Parola tabanlı PBKDF2 ile türetilir"]}', '{"index":0}', 'Anahtar takvimi 9. ünitedeki HKDF''nin zincirlenmiş halidir: erken sır → el sıkışma sırrı → ana sır. Her aşamadan `c hs traffic`, `s ap traffic` gibi etiketlerle ayrı anahtarlar çıkar. İki yön ve iki aşama hiç aynı anahtarı kullanmaz.', 1, '12. ünite · TLS anahtar takvimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-yon', 'sifreleme', 'sf-u12', 12, 'tf', 'derived', 'TLS 1.3''te istemciden sunucuya ve sunucudan istemciye giden trafik farklı anahtarlarla şifrelenir.', '{}', '{"value":true}', 'Doğru. Aynı anahtar ve nonce iki yönde kullanılsaydı CTR akışı iki kez kullanılmış olurdu (5. ünitedeki iki zaman). Ayrı anahtarlar yansıtma saldırılarını da önler.', 1, '12. ünite · TLS anahtar takvimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-dokum', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'Anahtar türetmede el sıkışma dökümünün hash''inin kullanılması neyi sağlar?', '{"choices":["Bir mesaj değiştirilirse taraflar farklı anahtar türetir","El sıkışmanın daha az mesajla, daha hızlı bitmesini","Sertifikanın şifrelenmesini","Sunucunun özel anahtarının her bağlantıda yenilenmesini"]}', '{"index":0}', 'Saldırgan ClientHello''daki şifre takımı listesini zayıf bir seçenekle değiştirse (sürüm düşürme saldırısı) döküm farklılaşır. Finished mesajlarındaki MAC tutmaz ve bağlantı kesilir.', 2, '12. ünite · TLS anahtar takvimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-gorunen', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'HTTPS ile bir siteyi gezerken aynı ağdaki biri (ECH yokken) neyi görebilir?', '{"choices":["Gittiğin alan adını ve trafiğin boyunu, ama sayfa yolunu ve içeriği göremez","Gittiğin sayfanın tam adresini ve içeriğini","Yalnız şifreli baytları; hangi siteye gittiğini hiç göremez","Formlara girdiğin parolaları"]}', '{"index":0}', 'Alan adı DNS sorgusunda ve SNI''da açıktır, IP adresi ve paket boyları da görünür. Yol (`/hesap/123`), çerezler ve içerik şifrelidir. Encrypted ClientHello (ECH) ve şifreli DNS alan adını da gizler.', 2, '12. ünite · MITM ve HTTPS''in korumadıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-sertifika-uyarisi', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'Kafedeki ağda tarayıcı "Bağlantınız gizli değil" uyarısı verdi. En olası açıklama nedir?', '{"choices":["Araya giren biri ya da ağın giriş sayfası başka sertifika sunuyor","Site çok yavaş açıldığı için tarayıcı şifrelemeyi kapattı","Tarayıcının önbelleği dolduğu için sertifika okunamadı","Kafedeki Wi-Fi ağının parolası zayıf seçilmiş"]}', '{"index":0}', 'Saldırgan ya da ağın giriş sayfası (captive portal) bağlantıyı keser ve geçerli bir sertifika sunamaz. Uyarıyı geçmek saldırgana kapıyı açar. HSTS listesindeki sitelerde tarayıcı geçme seçeneğini hiç sunmaz.', 1, '12. ünite · MITM ve HTTPS''in korumadıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-kurumsal', 'sifreleme', 'sf-u12', 12, 'tf', 'derived', 'Bazı şirketler çalışan bilgisayarlarına kendi kök sertifikalarını kurarak HTTPS trafiğini denetleyebilir.', '{}', '{"value":true}', 'Doğru. Cihaza kurulan kök sayesinde kurumun ara cihazı her site için anında sertifika üretir ve tarayıcı uyarı vermez. Kişisel cihazına bilmediğin bir kök sertifika kurdurmak bu yüzden büyük risktir.', 1, '12. ünite · MITM ve HTTPS''in korumadıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u12-hsts', 'sifreleme', 'sf-u12', 12, 'mcq', 'derived', 'HSTS (HTTP Strict Transport Security) hangi saldırıyı engeller?', '{"choices":["Kullanıcının HTTP''ye düşürülmesini","Sunucunun özel anahtarının çalınmasını","Sahte bir CA''nın sertifika vermesini","Kullanıcının bilgisayarındaki virüsleri"]}', '{"index":0}', 'Bu saldırının adı SSL stripping''dir. Kullanıcı adres çubuğuna `banka.test` yazınca ilk istek HTTP gidebilir; ortadaki adam bunu HTTPS''e hiç yükseltmeden aktarır. HSTS başlığını bir kez gören tarayıcı o siteye bir daha yalnız HTTPS ile gider. Önceden yüklü HSTS listeleri ilk ziyareti de korur.', 1, '12. ünite · MITM ve HTTPS''in korumadıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-fark', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'Yalnız TLS kullanan bir mesajlaşma uygulamasında sunucu mesajların içeriğini görebilir mi?', '{"choices":["Evet; TLS sunucuda biter ve sunucu mesajı çözer","Hayır; TLS mesajı alıcıya kadar şifreli taşır","Yalnız mesaj resim içeriyorsa","Yalnız sunucu yurt dışındaysa"]}', '{"index":0}', 'TLS iki ayrı bağlantıdır: Ayşe ile sunucu, sunucu ile Mert. Sunucu ortada mesajı çözer ve yeniden şifreler. Uçtan uca şifrelemede anahtarlar yalnız iki uçtadır; sunucu yalnız şifreli bayt taşır.', 1, '13. ünite · TLS ile uçtan uca şifreleme farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-neyi-korur', 'sifreleme', 'sf-u13', 13, 'tf', 'derived', 'Uçtan uca şifreleme, telefonu kilidi açıkken çalınan birinin mesajları okumasını da engeller.', '{}', '{"value":false}', 'Yanlış. Uçtan uca şifreleme mesajın **yolunu** korur. Cihazdaki mesajlar çözülmüş haldedir; telefonu açık ele geçiren okur. Bunun için ekran kilidi ve kaybolan mesajlar gerekir.', 1, '13. ünite · TLS ile uçtan uca şifreleme farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-sunucu-ne-gorur', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'İyi tasarlanmış bir uçtan uca şifreli uygulamada sunucunun yine de bilmesi gereken bilgi hangisidir?', '{"choices":["Mesajın kime teslim edileceği","Mesajın içeriği","Mesaj anahtarı","Kullanıcının özel kimlik anahtarı"]}', '{"index":0}', 'Sunucu mesajı doğru alıcıya iletmek zorundadır; bu yüzden alıcıyı, zamanı ve boyu görür. Bu üst veri (metadata) 14. ünitenin konusudur.', 1, '13. ünite · TLS ile uçtan uca şifreleme farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-neden', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'Signal''de kullanıcılar sunucuya neden önceden "ön anahtarlar" bırakır?', '{"choices":["Karşı taraf çevrimdışıyken de oturum kurulabilsin diye","Sunucu mesajları onlarla çözebilsin diye","Parolayı kurtarmak için","Mesajları sıkıştırmak için"]}', '{"index":0}', 'Diffie-Hellman iki tarafın da değer göndermesini ister. Mert uyurken Ayşe mesaj atmak isterse Mert''in sunucuda bıraktığı açık ön anahtarlarını kullanır. Sunucu yalnız açık anahtarları tutar.', 1, '13. ünite · Kimlik anahtarı ve ön anahtarlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-tek-kullanimlik', 'sifreleme', 'sf-u13', 13, 'tf', 'derived', 'Tek kullanımlık ön anahtarlar her oturumda bir kez kullanılıp sunucudan silinir.', '{}', '{"value":true}', 'Doğru. Böylece aynı tek kullanımlık anahtar iki oturumda yer almaz ve sonradan çalınsa bile tek bir oturumu ilgilendirir. Bittiğinde uygulama yenilerini yükler; tükenirse X3DH onsuz (üç DH ile) yapılır.', 1, '13. ünite · Kimlik anahtarı ve ön anahtarlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-imzali', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'İmzalı ön anahtarı kimlik anahtarıyla imzalamak neyi önler?', '{"choices":["Sunucunun sahte bir ön anahtar sunmasını","Ön anahtarın cihazdan çalınmasını","Mesajların sunucuda gecikmesini","Ön anahtarların zamanla tükenmesini"]}', '{"index":0}', 'Ayşe, imzayı Mert''in kimlik anahtarıyla doğrular. Sunucu imzalı ön anahtarı değiştirirse imza tutmaz. Kimlik anahtarının kendisini değiştirirse bunu yakalayan güvenlik numarasıdır.', 1, '13. ünite · Kimlik anahtarı ve ön anahtarlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-dh-sayisi', 'sifreleme', 'sf-u13', 13, 'num', 'derived', 'Tek kullanımlık ön anahtar da varsa X3DH kaç ayrı Diffie-Hellman hesabı yapar?', '{"blanks":1}', '{"blanks":[["4±0"]]}', 'DH1 = DH(IK_A, SPK_M), DH2 = DH(EK_A, IK_M), DH3 = DH(EK_A, SPK_M), DH4 = DH(EK_A, OPK_M): **4**. Dördü birleştirilip KDF''den geçirilir.', 1, '13. ünite · X3DH anahtar anlaşması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-kimlik-dogrulama', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'X3DH''de iki tarafın kimlik anahtarlarının hesaba girmesi ne sağlar?', '{"choices":["Sırrı yalnız iki kimliğin sahipleri hesaplar","Mesajların daha küçük boyutta sıkıştırılmasını","Sunucunun oturumu gerektiğinde çözebilmesini","Ön anahtarların hiçbir zaman tükenmemesini"]}', '{"index":0}', 'DH1 Ayşe''nin, DH2 Mert''in kimlik anahtarını işin içine katar: ikisinden birinin kimlik özel anahtarı olmayan sırrı hesaplayamaz. DH3 ve DH4 ise geçici anahtarlarla ileri gizlilik ekler.', 2, '13. ünite · X3DH anahtar anlaşması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-inkar', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'X3DH''de mesajlar imzalanmaz, kimlik DH hesaplarıyla doğrulanır. Bunun bir yan etkisi nedir?', '{"choices":["Mert, yazanın Ayşe olduğunu kanıtlayamaz","Mesajlar imzalı olduğundan daha uzun olur","Sunucu mesajları okuyabilir hale gelir","Oturum hiçbir şekilde kurulamaz"]}', '{"index":0}', 'Ortak sırrı iki taraf da bildiği için Mert dökümü kendisi de üretebilirdi. Bu **inkâr edilebilirliktir**: konuşma sızarsa Ayşe "bunu ben yazmadım" diyebilir. İmzanın tersi bir tercihtir.', 3, '13. ünite · X3DH anahtar anlaşması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-adim', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'Simetrik cırcırda zincir anahtarından ne üretilir?', '{"choices":["Mesaj anahtarı ve sonraki zincir anahtarı","Yeni bir DH anahtar çifti ve bir imza","Kullanıcının uzun ömürlü kimlik anahtarı","İki tarafın karşılaştıracağı numara"]}', '{"index":0}', '$MK_i = \text{HMAC}(CK_i, 1)$ ve $CK_{i+1} = \text{HMAC}(CK_i, 2)$. Mesaj anahtarı kullanılıp silinir, zincir bir diş ileri döner. HMAC tek yönlü olduğu için $CK_{i+1}$''den $CK_i$ bulunamaz.', 1, '13. ünite · Simetrik cırcır (KDF zinciri)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-kac-adim', 'sifreleme', 'sf-u13', 13, 'num', 'derived', 'Bir zincir $CK_0$ ile başlıyor ve her mesaj zinciri bir adım ilerletiyor. Bu zincirdeki 4. mesajın anahtarını üretmek için zincir kaç kez ilerletilmiş olmalıdır?', '{"blanks":1}', '{"blanks":[["3±0"]]}', '1. mesaj $CK_0$''dan, 2. mesaj $CK_1$''den, 3. mesaj $CK_2$''den, 4. mesaj $CK_3$''ten: **3** ilerletme.', 1, '13. ünite · Simetrik cırcır (KDF zinciri)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-neden-sil', 'sifreleme', 'sf-u13', 13, 'tf', 'derived', 'Kullanılan mesaj anahtarlarının ve eski zincir anahtarlarının silinmesi, ileri gizliliğin şartıdır.', '{}', '{"value":true}', 'Doğru. Anahtar cihazda kalırsa telefonu ele geçiren eski mesajları da çözer. Cırcır yalnız ileri döner; geri dönmek için gereken değerler artık yoktur.', 1, '13. ünite · Simetrik cırcır (KDF zinciri)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-ne-zaman', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'Double Ratchet''te DH cırcırı ne zaman döner?', '{"choices":["Konuşmada sıra karşı tarafa geçtiğinde","Her mesajda","Günde bir kez","Yalnız kullanıcı isterse"]}', '{"index":0}', 'Her mesaj kendi DH açık anahtarını taşır. Mert, Ayşe''nin yeni DH anahtarını gördüğünde kendi yeni anahtarıyla DH hesaplar; kök anahtar ilerler ve iki yeni zincir başlar.', 1, '13. ünite · DH cırcırı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-kok', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'DH cırcırı dönünce kök anahtar nasıl güncellenir?', '{"choices":["Eski kök ve yeni DH çıktısı KDF''den geçer","Yeni kök anahtar her seferinde sunucudan alınır","Kök anahtar oturum boyunca hiç değişmez","Kök anahtar son mesaj anahtarıyla XOR''lanır"]}', '{"index":0}', '$(RK'', CK) = \text{KDF}(RK, \text{DH}(\ldots))$. Eski kökü bilen ama yeni DH özel anahtarını bilmeyen saldırgan yeni kökü hesaplayamaz. İyileşme buradan gelir.', 1, '13. ünite · DH cırcırı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-fs', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'Bugün çalınan bir oturum durumunun dünkü mesajları açamaması hangi özelliktir?', '{"choices":["İleri gizlilik","Ele geçirme sonrası güvenlik","İnkâr edilebilirlik","Gizli gönderen"]}', '{"index":0}', 'İleri gizlilik (forward secrecy) geçmişi korur. Ele geçirme sonrası güvenlik ise geleceği: saldırgan pasifse birkaç mesaj sonra yeniden kör kalır.', 1, '13. ünite · İleri gizlilik ve ele geçirme sonrası güvenlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-pcs', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'Ele geçirme sonrası güvenlik neden yalnız simetrik cırcırla sağlanamaz?', '{"choices":["Zincirden sonraki her anahtar türetilir; taze sır gerekir","HMAC hesaplaması telefonlarda çok yavaş kaldığı için","Simetrik cırcır mesajları sıkıştırmadığı için","Simetrik cırcır gerektiğinde geriye de döndüğü için"]}', '{"index":0}', 'KDF zinciri deterministiktir: $CK_i$ çalınırsa $CK_{i+1}, CK_{i+2}, \dots$ hesaplanır. Saldırganın bilmediği yeni rastgelelik ancak taze bir DH anahtar çiftiyle girer.', 2, '13. ünite · İleri gizlilik ve ele geçirme sonrası güvenlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-etkin', 'sifreleme', 'sf-u13', 13, 'tf', 'derived', 'Saldırgan oturum durumunu çaldıktan sonra konuşmaya etkin olarak katılırsa (kendi DH anahtarlarını göndererek) ele geçirme sonrası güvenlik devreye girmeyebilir.', '{}', '{"value":true}', 'Doğru. İyileşme, saldırganın bilmediği yeni DH anahtarlarına dayanır. Saldırgan yanıtları kendisi üretip araya sürekli girerse durumu takip etmeye devam edebilir. PCS pasif saldırgana karşı kesin, etkin saldırgana karşı sınırlıdır.', 3, '13. ünite · İleri gizlilik ve ele geçirme sonrası güvenlik', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-atlanan', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'Mert 3. mesajı 5. mesajdan sonra alırsa Double Ratchet ne yapar?', '{"choices":["Atlanan anahtarları saklar ve onunla çözer","3. mesajı geçersiz sayıp reddeder","Bütün oturumu sıfırlayıp baştan kurar","Mesajı sunucudan şifresiz olarak ister"]}', '{"index":0}', 'Mesaj başlığında zincirdeki sıra numarası vardır. 5. mesaj gelince 3. ve 4. mesajın anahtarları türetilip saklanır. Bu anahtarlar sınırlı sayıda ve süreyle tutulur; ileri gizlilik için sonra silinir.', 1, '13. ünite · Sırası karışan mesajlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-neyi-yakalar', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'İki kişinin güvenlik numaralarını karşılaştırması hangi saldırıyı ortaya çıkarır?', '{"choices":["Sunucunun araya kendi anahtarını koymasını","Telefonun kilitliyken çalınmasını","Mesajların geç teslim edilmesini","Hesapta zayıf bir parola kullanılmasını"]}', '{"index":0}', 'Güvenlik numarası iki tarafın kimlik açık anahtarlarından hesaplanır. Sunucu Ayşe''ye Mert''in anahtarı yerine kendisininkini verirse iki telefonda farklı numara görünür.', 1, '13. ünite · Güvenlik numarası doğrulama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-basamak', 'sifreleme', 'sf-u13', 13, 'num', 'derived', 'Signal''de bir güvenlik numarası kaç ondalık basamaktan oluşur?', '{"blanks":1}', '{"blanks":[["60±0"]]}', '**60** basamak: her iki tarafın kimlik anahtarından 30''ar basamak, 5''erli 12 grup halinde. Aynı bilgi QR koduyla da karşılaştırılabilir.', 1, '13. ünite · Güvenlik numarası doğrulama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u13-degisti', 'sifreleme', 'sf-u13', 13, 'mcq', 'derived', 'Uygulama "Mert''in güvenlik numarası değişti" uyarısı veriyor. En doğru davranış hangisidir?', '{"choices":["Yeni numarayı Mert''le başka bir kanaldan karşılaştırmak","Uyarıyı görmezden gelmek; uygulama zaten şifreli","Uygulamayı hemen silmek","Mesajları bir süre şifresiz göndermek"]}', '{"index":0}', 'Numara Mert yeni telefon aldığında ya da uygulamayı yeniden kurduğunda da değişir; çoğu zaman masumdur. Ama araya giren bir sunucu da tam bu uyarıya yol açar. Önemli konuşmalarda yeniden doğrulamak gerekir.', 1, '13. ünite · Güvenlik numarası doğrulama', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-ikili', 'sifreleme', 'sf-u14', 14, 'num', 'derived', '100 kişilik bir grupta her mesaj her üyeye ayrı ayrı (ikili oturumlarla) şifrelenseydi, gönderen tek bir mesaj için kaç şifreleme yapardı?', '{"blanks":1}', '{"blanks":[["99±0"]]}', 'Kendisi dışındaki **99** üye için birer kez. Sender Keys bunu bire indirir: mesaj gönderenin zincir anahtarıyla bir kez şifrelenir, sunucu aynı şifreli metni herkese dağıtır.', 1, '14. ünite · Sender Keys ile grup şifreleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-nasil', 'sifreleme', 'sf-u14', 14, 'mcq', 'derived', 'Sender Keys yönteminde her üye gruba katılınca ne yapar?', '{"choices":["Kendi zincir anahtarını üyelere bir kez dağıtır","Sunucudan grubun ortak parolasını indirir","Her mesajı her üye için ayrı ayrı şifreler","Bütün üyelerin özel anahtarlarını toplar"]}', '{"index":0}', 'Herkes herkesin gönderen anahtarını bilir. Sonraki mesajlar tek şifrelemeyle gider; zincir her mesajda simetrik cırcırla ilerler.', 1, '14. ünite · Sender Keys ile grup şifreleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-cikinca', 'sifreleme', 'sf-u14', 14, 'num', 'derived', '5 kişilik bir Sender Keys grubundan bir üye çıkarıldı. Kalan 4 üyenin her biri yeni gönderen anahtarını öteki 3 kişiye ikili oturumla gönderirse toplam kaç anahtar mesajı gerekir?', '{"blanks":1}', '{"blanks":[["12±0"]]}', '$4 \times 3 =$ **12**. Çıkan üye eski zincirlerin hepsini bildiği için herkes yenilemek zorundadır. $n$ üyede bu $(n-1)(n-2)$, yani kabaca $n^2$ mesajdır.', 1, '14. ünite · Sender Keys ile grup şifreleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-pcs-yok', 'sifreleme', 'sf-u14', 14, 'tf', 'derived', 'Sender Keys''te bir üyenin gönderen anahtarı çalınırsa, o üye anahtarını yenileyene kadar mesajları okunabilir; DH cırcırı gibi kendiliğinden iyileşme yoktur.', '{}', '{"value":true}', 'Doğru. Sender Keys yalnız simetrik cırcır kullanır: ileri gizlilik var, ele geçirme sonrası güvenlik yok. MLS bunu ağaç güncellemeleriyle getirir.', 2, '14. ünite · Sender Keys ile grup şifreleme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-log', 'sifreleme', 'sf-u14', 14, 'num', 'derived', '1024 üyeli bir MLS grubunda bir üye anahtarını güncellediğinde, yaprağından köke kadar yaklaşık kaç ağaç düğümünün sırrı yenilenir (yaprak hariç)?', '{"blanks":1}', '{"blanks":[["10±0"]]}', 'Dengeli ikili ağacın derinliği $\log_2 1024 =$ **10**. Her üye yalnız kendi yolunu günceller; maliyet üye sayısıyla değil, onun logaritmasıyla büyür.', 1, '14. ünite · MLS ve TreeKEM', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-standart', 'sifreleme', 'sf-u14', 14, 'mcq', 'derived', 'MLS (Messaging Layer Security) nedir?', '{"choices":["Gruplar için uçtan uca anahtar yönetimi standardı","TLS protokolünün mesajlaşma için yeni sürümü","Popüler bir mesajlaşma uygulamasının adı","Yeni tasarlanmış bir eliptik eğri"]}', '{"index":0}', 'MLS 2023''te RFC 9420 olarak yayımlandı. Binlerce kişilik gruplarda bile ileri gizlilik ve ele geçirme sonrası güvenlik sağlar. Kasım 2026 itibarıyla birkaç büyük mesajlaşma ürünü ve RCS standardı MLS''e geçiş yapıyor.', 1, '14. ünite · MLS ve TreeKEM', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-agac', 'sifreleme', 'sf-u14', 14, 'mcq', 'derived', 'TreeKEM''de üyeler neden bir ağacın yapraklarına yerleştirilir?', '{"choices":["Güncellemeyi her alt ağaca bir kez şifrelemek için","Üyeleri adlarına göre alfabetik sıraya dizmek için","Sunucunun grup mesajlarını okuyabilmesi için","Grubu en çok sekiz kişiyle sınırlamak için"]}', '{"index":0}', 'Her iç düğümün sırrını o düğümün altındaki üyeler bilir. Yeni sırrı, yolun komşu alt ağaçlarının açık anahtarlarına şifrelemek yeter: $n$ yerine yaklaşık $\log_2 n$ şifreleme.', 2, '14. ünite · MLS ve TreeKEM', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-kac-sifreleme', 'sifreleme', 'sf-u14', 14, 'num', 'derived', 'Ayşe''nin 3, Mert''in 2 cihazı var ve her cihazın kendi anahtarı var. Ayşe telefonundan Mert''e bir mesaj yazınca mesaj kaç cihaz için ayrı şifrelenir?', '{"blanks":1}', '{"blanks":[["4±0"]]}', 'Mert''in 2 cihazı ve Ayşe''nin kendi öteki 2 cihazı (yazdığını onlarda da görsün diye): **4**.', 1, '14. ünite · Çoklu cihaz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-yeni-cihaz', 'sifreleme', 'sf-u14', 14, 'mcq', 'derived', 'Uçtan uca şifreli bir uygulamaya yeni bir cihaz eklenirken en önemli güvenlik adımı hangisidir?', '{"choices":["Yeni cihazı mevcut bir cihazdan onaylamak","Yeni cihaza sunucudan özel anahtar indirmek","Hesap parolasını e-postayla göndermek","Eski cihazı tamamen kapatmak"]}', '{"index":0}', 'Örneğin telefondaki QR kodu bilgisayardan okutmak. Sunucu "yeni cihaz" diye kendi anahtarını eklerse herkes ona da şifreler. Bu yüzden cihaz ekleme mevcut bir cihazda onaylanır ve karşı tarafa "yeni cihaz eklendi" bildirimi gider.', 1, '14. ünite · Çoklu cihaz', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-zayif-halka', 'sifreleme', 'sf-u14', 14, 'mcq', 'derived', 'Bir uygulama mesajları uçtan uca şifreliyor ama sohbet yedeğini bulut sağlayıcısına şifresiz bırakıyor. Sorun nedir?', '{"choices":["Yedeğe erişen herkes mesajları okur","Yedek çok yer kaplar","Mesajlar gecikir","Uçtan uca şifreleme bozulur ve mesajlar gitmez"]}', '{"index":0}', 'Şifreleme en zayıf halkası kadar güçlüdür. Uçtan uca şifreli yedek, kullanıcının parolasından ya da rastgele bir kurtarma anahtarından türetilen anahtarla şifrelenir; sağlayıcı yalnız şifreli bayt saklar.', 1, '14. ünite · Yedekler ve yedek anahtarları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-parola-riski', 'sifreleme', 'sf-u14', 14, 'tf', 'derived', 'Uçtan uca şifreli yedek kısa bir parolayla korunuyorsa, yedeği ele geçiren onu çevrimdışı kaba kuvvetle kırmayı deneyebilir.', '{}', '{"value":true}', 'Doğru. Bu yüzden yedek anahtarları yavaş KDF''lerle türetilir (9. ünite) ya da donanım güvenlik modülleri deneme sayısını sınırlar. 64 haneli rastgele bir kurtarma anahtarı da seçenektir.', 1, '14. ünite · Yedekler ve yedek anahtarları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-ne', 'sifreleme', 'sf-u14', 14, 'mcq', 'derived', 'Mesajlaşmada "metadata" neyi kapsar?', '{"choices":["Kim, kime, ne zaman ve ne boyutta yazdı","Mesajın çözülmüş içeriği","Her mesajın anahtarı","Kullanıcının hesap parolası"]}', '{"index":0}', 'İçerik şifreli olsa da bu kayıtlar çok şey söyler: gece 3''te bir doktoru arayan, bir avukatla sık yazışan, bir habercinin kaynağı. "Metadata''ya bakarak insanları öldürüyoruz" sözü eski bir istihbarat yöneticisine aittir.', 1, '14. ünite · Metadata sorunu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-e2ee-gizler-mi', 'sifreleme', 'sf-u14', 14, 'tf', 'derived', 'Uçtan uca şifreleme, sunucudan kimin kiminle konuştuğunu da gizler.', '{}', '{"value":false}', 'Yanlış. Sunucu mesajı teslim etmek için alıcıyı bilmek zorundadır; zamanı ve boyu da görür. Bunları azaltmak için gizli gönderen, dolgu ve karışım ağları gibi ek önlemler gerekir.', 1, '14. ünite · Metadata sorunu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-ne-saklar', 'sifreleme', 'sf-u14', 14, 'mcq', 'derived', 'Gizli gönderen (sealed sender) sunucudan neyi saklar?', '{"choices":["Mesajı kimin gönderdiğini","Mesajı kime teslim edeceğini","Mesajın boyunu","Mesajın gönderildiği zamanı"]}', '{"index":0}', 'Gönderenin kimliği şifreli zarfın içine konur; zarfı yalnız alıcı açar. Sunucu alıcıyı ve zamanı yine görür. IP adresi ve zaman ilişkilendirmesiyle gönderen kısmen tahmin edilebilir; gizleme tam değildir.', 2, '14. ünite · Gizli gönderen (sealed sender)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-rehber', 'sifreleme', 'sf-u14', 14, 'mcq', 'derived', 'Uygulama, rehberindeki kişilerden hangilerinin kullanıcı olduğunu bulmak için ne yapar ki sunucu rehberini öğrenmesin?', '{"choices":["Eşleştirmeyi güvenli bir donanım bölgesinde yapar","Rehberi sunucuya şifresiz olarak yükler","Numaraların tuzsuz hash''ini gönderir","Rehberi kullanmaz, herkese mesaj atar"]}', '{"index":0}', 'Telefon numarası uzayı küçüktür (yaklaşık $10^{10}$); hash''ler saniyeler içinde tersine çevrilir. Signal kişi keşfini, sunucu işletmecisinin bile göremediği bir güvenli bölgede (enclave) yapar.', 2, '14. ünite · Kişi keşfi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('sf-u14-hash-yetmez', 'sifreleme', 'sf-u14', 14, 'tf', 'derived', 'Telefon numaralarının tuzsuz SHA-256 özetini sunucuya göndermek rehberi gizlemez, çünkü bütün olası numaralar kolayca denenebilir.', '{}', '{"value":true}', 'Doğru. 10 haneli bir numaranın en çok $10^{10}$ olasılığı vardır; tek bir GPU hepsini birkaç saniyede hash''ler (9. ünite). Hash yalnız büyük ve öngörülemez girdileri gizler.', 1, '14. ünite · Kişi keşfi', 1)
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
UPDATE questions SET kavram = 'u7-ozellikler', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-tanim';
UPDATE questions SET kavram = 'u7-ozellikler', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u7-uzunluk';
UPDATE questions SET kavram = 'u7-ozellikler', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-geri-donmez';
UPDATE questions SET kavram = 'u7-ozellikler', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u7-sifreleme-degil';
UPDATE questions SET kavram = 'u7-direnc', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-on-goruntu';
UPDATE questions SET kavram = 'u7-direnc', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-cakisma-var';
UPDATE questions SET kavram = 'u7-direnc', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-ikinci';
UPDATE questions SET kavram = 'u7-dogum-gunu', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u7-23';
UPDATE questions SET kavram = 'u7-dogum-gunu', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-sha256-cakisma';
UPDATE questions SET kavram = 'u7-dogum-gunu', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-kisa-hash';
UPDATE questions SET kavram = 'u7-dogum-gunu', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u7-md5-bit';
UPDATE questions SET kavram = 'u7-cig', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-cig-yarisi';
UPDATE questions SET kavram = 'u7-cig', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-benzer-girdi';
UPDATE questions SET kavram = 'u7-sha256', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u7-blok';
UPDATE questions SET kavram = 'u7-sha256', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u7-tur';
UPDATE questions SET kavram = 'u7-sha256', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u7-dolgu-56';
UPDATE questions SET kavram = 'u7-sha256', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u7-dolgu-120';
UPDATE questions SET kavram = 'u7-sha256', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-merkle-damgard';
UPDATE questions SET kavram = 'u7-sha256', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-takvim';
UPDATE questions SET kavram = 'u7-sha3', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-md5';
UPDATE questions SET kavram = 'u7-sha3', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-sha1';
UPDATE questions SET kavram = 'u7-sha3', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-sunger';
UPDATE questions SET kavram = 'u7-kullanim', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u7-indirme';
UPDATE questions SET kavram = 'u7-kullanim', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u7-merkle-kanit';
UPDATE questions SET kavram = 'u7-kullanim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u7-git-kimlik';
UPDATE questions SET kavram = 'u8-mac', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-neden';
UPDATE questions SET kavram = 'u8-mac', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-mac-tanim';
UPDATE questions SET kavram = 'u8-mac', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-inkar';
UPDATE questions SET kavram = 'u8-length-ext', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u8-naif';
UPDATE questions SET kavram = 'u8-length-ext', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-gereken';
UPDATE questions SET kavram = 'u8-length-ext', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-sha3-dayanikli';
UPDATE questions SET kavram = 'u8-length-ext', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-uzunluk-alani';
UPDATE questions SET kavram = 'u8-hmac', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-formul';
UPDATE questions SET kavram = 'u8-hmac', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-pad';
UPDATE questions SET kavram = 'u8-hmac', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-uzun-anahtar';
UPDATE questions SET kavram = 'u8-hmac', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u8-hmac-adim';
UPDATE questions SET kavram = 'u8-zaman', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u8-erken-cikis';
UPDATE questions SET kavram = 'u8-zaman', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u8-deneme';
UPDATE questions SET kavram = 'u8-zaman', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-sabit';
UPDATE questions SET kavram = 'u8-kullanim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-jwt';
UPDATE questions SET kavram = 'u8-kullanim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-totp';
UPDATE questions SET kavram = 'u8-kullanim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u8-webhook';
UPDATE questions SET kavram = 'u9-duz', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-duz-metin';
UPDATE questions SET kavram = 'u9-duz', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-duz-hash';
UPDATE questions SET kavram = 'u9-duz', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u9-sizan-ozet';
UPDATE questions SET kavram = 'u9-salt', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-salt-tanim';
UPDATE questions SET kavram = 'u9-salt', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-salt-gizli';
UPDATE questions SET kavram = 'u9-salt', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-gokkusagi';
UPDATE questions SET kavram = 'u9-salt', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u9-salt-boyu';
UPDATE questions SET kavram = 'u9-salt', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-pepper';
UPDATE questions SET kavram = 'u9-yavas', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-neden-yavas';
UPDATE questions SET kavram = 'u9-yavas', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-pbkdf2';
UPDATE questions SET kavram = 'u9-yavas', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u9-pbkdf2-sayi';
UPDATE questions SET kavram = 'u9-yavas', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-bcrypt';
UPDATE questions SET kavram = 'u9-bellek', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-bellek-zor';
UPDATE questions SET kavram = 'u9-bellek', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-argon2id';
UPDATE questions SET kavram = 'u9-bellek', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-parametre';
UPDATE questions SET kavram = 'u9-hkdf', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-hkdf-tanim';
UPDATE questions SET kavram = 'u9-hkdf', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u9-hkdf-parola';
UPDATE questions SET kavram = 'u9-hkdf', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-info';
UPDATE questions SET kavram = 'u9-yonetici', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-yonetici';
UPDATE questions SET kavram = 'u9-yonetici', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u9-passkey';
UPDATE questions SET kavram = 'u10-dagitim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-sorun';
UPDATE questions SET kavram = 'u10-dagitim', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u10-cift-sayisi';
UPDATE questions SET kavram = 'u10-dagitim', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-acik-ozel';
UPDATE questions SET kavram = 'u10-dh', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u10-dh-A';
UPDATE questions SET kavram = 'u10-dh', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u10-dh-sir';
UPDATE questions SET kavram = 'u10-dh', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-dh-neden';
UPDATE questions SET kavram = 'u10-dh', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u10-dh-dinleyici';
UPDATE questions SET kavram = 'u10-ayrik-log', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-tanim';
UPDATE questions SET kavram = 'u10-ayrik-log', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u10-kucuk';
UPDATE questions SET kavram = 'u10-mitm', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-mitm';
UPDATE questions SET kavram = 'u10-mitm', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-mitm-farkli';
UPDATE questions SET kavram = 'u10-rsa', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u10-n';
UPDATE questions SET kavram = 'u10-rsa', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u10-phi';
UPDATE questions SET kavram = 'u10-rsa', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u10-d';
UPDATE questions SET kavram = 'u10-rsa', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u10-sifrele';
UPDATE questions SET kavram = 'u10-rsa', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u10-kir';
UPDATE questions SET kavram = 'u10-rsa', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-e-65537';
UPDATE questions SET kavram = 'u10-rsa-dolgu', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u10-deterministik';
UPDATE questions SET kavram = 'u10-rsa-dolgu', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-carpimsal';
UPDATE questions SET kavram = 'u10-rsa-dolgu', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-oaep';
UPDATE questions SET kavram = 'u10-carpan', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-guvenlik';
UPDATE questions SET kavram = 'u10-carpan', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-boyut';
UPDATE questions SET kavram = 'u10-carpan', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u10-rsa250';
UPDATE questions SET kavram = 'u11-nokta', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-geometri';
UPDATE questions SET kavram = 'u11-nokta', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-sonsuz';
UPDATE questions SET kavram = 'u11-nokta', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u11-ters';
UPDATE questions SET kavram = 'u11-nokta', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-uzerinde';
UPDATE questions SET kavram = 'u11-fp', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u11-ikiye-katla';
UPDATE questions SET kavram = 'u11-fp', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u11-ciftle-topla';
UPDATE questions SET kavram = 'u11-fp', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-mertebe';
UPDATE questions SET kavram = 'u11-fp', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-ecdlp';
UPDATE questions SET kavram = 'u11-ecdh', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-formul';
UPDATE questions SET kavram = 'u11-ecdh', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u11-x25519-boy';
UPDATE questions SET kavram = 'u11-ecdh', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-curve25519';
UPDATE questions SET kavram = 'u11-ecdh', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-tls-yaygin';
UPDATE questions SET kavram = 'u11-imza', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-roller';
UPDATE questions SET kavram = 'u11-imza', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-inkar';
UPDATE questions SET kavram = 'u11-imza', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-gizler-mi';
UPDATE questions SET kavram = 'u11-imza', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-hashle-imzala';
UPDATE questions SET kavram = 'u11-ecdsa', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-rastgele-k';
UPDATE questions SET kavram = 'u11-ecdsa', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-ed25519-nonce';
UPDATE questions SET kavram = 'u11-ecdsa', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u11-imza-boy';
UPDATE questions SET kavram = 'u11-ecdsa', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-nerede';
UPDATE questions SET kavram = 'u11-nonce', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-ps3';
UPDATE questions SET kavram = 'u11-nonce', yedek = 0, etiketler = 'ctf' WHERE id = 'sf-u11-k-bul';
UPDATE questions SET kavram = 'u11-nonce', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-neden-cikar';
UPDATE questions SET kavram = 'u11-nonce', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u11-korunma';
UPDATE questions SET kavram = 'u12-sahiplik', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-sorun';
UPDATE questions SET kavram = 'u12-sahiplik', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-parmak-izi';
UPDATE questions SET kavram = 'u12-sahiplik', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-web-of-trust';
UPDATE questions SET kavram = 'u12-sertifika', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-icerik';
UPDATE questions SET kavram = 'u12-sertifika', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-zincir';
UPDATE questions SET kavram = 'u12-sertifika', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-kok-cevrimdisi';
UPDATE questions SET kavram = 'u12-sertifika', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-diginotar';
UPDATE questions SET kavram = 'u12-sertifika', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u12-omur';
UPDATE questions SET kavram = 'u12-iptal', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-neden';
UPDATE questions SET kavram = 'u12-iptal', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-ocsp';
UPDATE questions SET kavram = 'u12-iptal', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-ct';
UPDATE questions SET kavram = 'u12-iptal', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-ct-gizlilik';
UPDATE questions SET kavram = 'u12-tls', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u12-rtt';
UPDATE questions SET kavram = 'u12-tls', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-sira';
UPDATE questions SET kavram = 'u12-tls', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-ileri-gizlilik';
UPDATE questions SET kavram = 'u12-tls', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-sifreli-sertifika';
UPDATE questions SET kavram = 'u12-tls', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-0rtt';
UPDATE questions SET kavram = 'u12-anahtar-takvimi', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-hkdf';
UPDATE questions SET kavram = 'u12-anahtar-takvimi', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-yon';
UPDATE questions SET kavram = 'u12-anahtar-takvimi', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-dokum';
UPDATE questions SET kavram = 'u12-mitm', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-gorunen';
UPDATE questions SET kavram = 'u12-mitm', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-sertifika-uyarisi';
UPDATE questions SET kavram = 'u12-mitm', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-kurumsal';
UPDATE questions SET kavram = 'u12-mitm', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u12-hsts';
UPDATE questions SET kavram = 'u13-e2ee', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-fark';
UPDATE questions SET kavram = 'u13-e2ee', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-neyi-korur';
UPDATE questions SET kavram = 'u13-e2ee', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-sunucu-ne-gorur';
UPDATE questions SET kavram = 'u13-prekey', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-neden';
UPDATE questions SET kavram = 'u13-prekey', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-tek-kullanimlik';
UPDATE questions SET kavram = 'u13-prekey', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-imzali';
UPDATE questions SET kavram = 'u13-x3dh', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u13-dh-sayisi';
UPDATE questions SET kavram = 'u13-x3dh', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-kimlik-dogrulama';
UPDATE questions SET kavram = 'u13-x3dh', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-inkar';
UPDATE questions SET kavram = 'u13-simetrik', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-adim';
UPDATE questions SET kavram = 'u13-simetrik', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u13-kac-adim';
UPDATE questions SET kavram = 'u13-simetrik', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-neden-sil';
UPDATE questions SET kavram = 'u13-dh', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-ne-zaman';
UPDATE questions SET kavram = 'u13-dh', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-kok';
UPDATE questions SET kavram = 'u13-fs-pcs', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-fs';
UPDATE questions SET kavram = 'u13-fs-pcs', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-pcs';
UPDATE questions SET kavram = 'u13-fs-pcs', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-etkin';
UPDATE questions SET kavram = 'u13-sira', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-atlanan';
UPDATE questions SET kavram = 'u13-guvenlik-no', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u13-neyi-yakalar';
UPDATE questions SET kavram = 'u13-guvenlik-no', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u13-basamak';
UPDATE questions SET kavram = 'u13-guvenlik-no', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u13-degisti';
UPDATE questions SET kavram = 'u14-sender-keys', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u14-ikili';
UPDATE questions SET kavram = 'u14-sender-keys', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u14-nasil';
UPDATE questions SET kavram = 'u14-sender-keys', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u14-cikinca';
UPDATE questions SET kavram = 'u14-sender-keys', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u14-pcs-yok';
UPDATE questions SET kavram = 'u14-mls', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u14-log';
UPDATE questions SET kavram = 'u14-mls', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u14-standart';
UPDATE questions SET kavram = 'u14-mls', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u14-agac';
UPDATE questions SET kavram = 'u14-cihaz', yedek = 0, etiketler = 'hesap' WHERE id = 'sf-u14-kac-sifreleme';
UPDATE questions SET kavram = 'u14-cihaz', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u14-yeni-cihaz';
UPDATE questions SET kavram = 'u14-yedek', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u14-zayif-halka';
UPDATE questions SET kavram = 'u14-yedek', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u14-parola-riski';
UPDATE questions SET kavram = 'u14-metadata', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u14-ne';
UPDATE questions SET kavram = 'u14-metadata', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u14-e2ee-gizler-mi';
UPDATE questions SET kavram = 'u14-sealed', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u14-ne-saklar';
UPDATE questions SET kavram = 'u14-kesif', yedek = 0, etiketler = 'kavram' WHERE id = 'sf-u14-rehber';
UPDATE questions SET kavram = 'u14-kesif', yedek = 0, etiketler = 'hata-bul' WHERE id = 'sf-u14-hash-yetmez';
