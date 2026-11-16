# Plan: Şifreleme Pratiği

Hazırlanma: 15 Kasım 2026 · İsteyen: Selçuk · Durum: **onaylandı** (16 Kasım 2026; §10'daki bütün öneriler kabul, 8. sorunun cevapları §4.5'e işlendi)

Selçuk'un isteği: mesaj şifrelemeyi, yaygın kullanım örneklerini ve genel kriptografiyi kapsayan, olabildiğince
geniş, görsel ve elle kurcalanabilir bir öğrenme ve deney alanı. Hedef kitle elektrik-elektronik öğrencisi;
amaç kriptografiyi "kara kutu" olmaktan çıkarmak. Her kavram üç katmanda görülür:

1. **Sezgi:** önce görsel ve elle kurcalanan bir benzetme ya da deney.
2. **Matematik:** sonra işin hesabı, oyuncak sayılarla adım adım.
3. **Gerçek ürün:** en son bu kavramın hangi üründe, nasıl kullanıldığı ("Gerçek dünyada nerede karşına çıkar").

Pratiğin dört parçası olacak:

1. **Dersler:** 19 ünite, her biri sezgi → matematik → gerçek dünya düzeninde, bölümlere gömülü etkileşimli şekillerle.
2. **Sanal Lab (araçlar ve deneyler):** ECB penguen, AES tur gezgini, çığ etkisi, DH renk karıştırma, eğri üzerinde
   nokta toplama, görsel kriptografi gibi tek başına açılabilen deneyler ve Web Crypto ile gerçek şifreleme yapan
   bir araç tezgahı.
3. **Mesajlaşma Simülatörü ("Kendi mesajlaşma uygulamanı tasarla"):** sitenin en önemli parçası, ayrı sayfa (§5).
4. **Soru havuzu, meydan okumalar ve karma test:** kavram soruları, adım adım hesaplar, CTF tarzı meydan okumalar,
   "bu tasarımda hata nerede?" soruları ve tasarım alıştırmaları.

Kurallar (CLAUDE.md ve proje hafızası): pratik `pratikler.selcukdinc.dev/sifreleme` altında açılır, alt alan adı
açılmaz; eski sitelere ve depolara dokunulmaz; PR'lar **zincir** halinde açılır (her biri öncekinin dalının üstünde);
her PR `src/yenilikler.ts` başına kayıt ekler; `npm run denetle` her PR'da geçer; araçlar, deneyler ve simülatör
**tamamen tarayıcıda** çalışır ve hiç `/api` isteği atmaz (istek kotası).

---

## 1. Kimlik

| Alan | Öneri |
|---|---|
| Ad | **Şifreleme** (site adı "Şifreleme Pratik"; katalog alt başlığı "Kriptografiyi elle kurcalayarak öğren") |
| `id` / `alt` / `yol` | `sifreleme` → `pratikler.selcukdinc.dev/sifreleme` |
| Soru öneki | `sf-` (diğer öneklerle çakışmıyor) |
| Katalog alanı (`alan`) | **Yazılım** (Git ile aynı grup; istersen yeni bir "Güvenlik" grubu açarız, §10) |
| `uniteAdi` | "ünite" |
| `latex` | **true** (modüler aritmetik, eğri denklemleri, olasılık hesapları için KaTeX) |
| `anaSayfa` | `"ders"` (ders listesi; `uniteGruplari` ile altı gruba bölünür) |
| Ayar | `sifreleme:current_week` (bütün üniteler açık başlar) |

**Dil:** arayüz doğal Türkçe. Teknik terimler (hash, nonce, salt, MAC, API, TLS) olduğu gibi kalır; ilk geçtikleri
yerde Türkçe karşılığı ya da kısa tanımı verilir ve `meta.terimler` sözlüğüne bağlanır. Melez fiil yok: "encrypt
etmek" değil "şifrelemek", "verify et" değil "doğrula", "hash'le" yerine "hash'ini al". Şifreleme / şifre çözme /
kırma farkı baştan tutarlı kullanılır (şifre çözme anahtarla, kırma anahtarsız).

---

## 2. Üniteler

Senin 12 başlığını 19 üniteye böldüm; büyükleri (simetrik, asimetrik, mesajlaşma) ikiye ayırdım, rastgelelik ve
matematik araç kutusunu kendi ünitelerine çıkardım, vaka çalışmalarını sona bir tasarım ünitesi olarak koydum.
Sıra önerisi aşağıdaki gibi; sırası ve önceliği açık soru (§10.1).

### Grup A · Temeller

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 1 | **Kriptografi neyi çözer?** gizlilik, bütünlük, kimlik doğrulama, inkâr edilemezlik; Kerckhoffs ilkesi; anahtar ile algoritma farkı; **kodlama (Base64, hex) ↔ hash ↔ şifreleme** | Bir mekanizmanın hangi güvenlik hedefini sağladığını ayırt etmek; Base64'ün şifreleme olmadığını kendi gözüyle görmek | **Üç kutu deneyi:** aynı metni Base64'le kodla, SHA-256 ile hash'ini al, AES ile şifrele; hangisi geri döner, hangisi anahtar ister, hangisi hiç dönmez. Bayt/bit/hex/Base64 dönüştürücü (her baytın bit desenini gösterir). "Bu hangi hedef?" eşleştirme kartları |
| 2 | **Rastgelelik ve entropi** TRNG ↔ PRNG ↔ CSPRNG, entropi (bit), tohum, `Math.random` neden yetmez, donanım gürültü kaynakları (termal gürültü, halka osilatör, jitter), parola entropisi | Entropiyi bit olarak hesaplamak; tahmin edilebilir rastgeleliğin neden felaket olduğunu görmek | **Entropi ölçer** (yazdığın parolanın / ürettiğin dizinin tahmini entropisi), **rastgele mi?** testi (insan elle "rastgele" 0/1 yazar, site koşu ve frekans testiyle yakalar), zayıf PRNG'nin çıktısından sonrakini tahmin etme oyunu, halka osilatör jitter'ının basit benzetimi (elektronik bağlantısı) |
| 3 | **Matematik araç kutusu** bit işlemleri ve XOR, modüler aritmetik, EBOB ve genişletilmiş Öklid, modüler ters, hızlı üs alma, asal sayılar, Fermat/Euler (kısa), sonlu cisim fikri (GF(2), GF(2⁸)) | Sonraki ünitelerde gereken hesapları elle yapabilmek | **Modüler saat** (sayıyı saat kadranında döndür), adım adım genişletilmiş Öklid tablosu, kare-çarp ile üs alma (her adımın bitini vurgular), GF(2⁸) çarpım tablosu gezgini. Hepsi soru havuzundaki `num` sorularıyla bağlı |
| 4 | **Klasik şifreler ve kırılmaları** Sezar, yerine koyma, Vigenère, aktarım (transposition), Enigma mantığı (rotorlar, yansıtıcı, kendine şifrelenmeme açığı), frekans analizi, Kasiski/indeks of coincidence | Klasik şifreleri kırarak "neden anahtar uzayı yetmez, istatistik sızar" sezgisini kazanmak | **Sezar çarkı**, **frekans analizi tezgahı** (şifreli metnin harf histogramı Türkçe ve İngilizce dağılımla üst üste; harfleri sürükleyip eşleştir, metin canlı çözülür), Vigenère anahtar uzunluğu bulucu, **Enigma benzetimi** (3 rotor, tuş basınca rotorların dönmesi ve akım yolunun çizilmesi) |

### Grup B · Simetrik dünya

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 5 | **XOR, one-time pad ve blok şifreler** OTP'nin kusursuz gizliliği ve pratik sorunları, anahtar tekrarının sonucu ("iki zaman pad"), blok şifre fikri, karıştırma ve yayılma, **AES** (SubBytes, ShiftRows, MixColumns, AddRoundKey, anahtar genişletme, 10/12/14 tur) | AES'in her turunda durum matrisine ne olduğunu izleyebilmek; OTP'nin neden tek kullanımlık olduğunu görmek | **XOR tuvali** (iki görüntüyü aynı anahtarla XOR'la, ikisini birbirine XOR'layınca anahtar kaybolur ve görüntüler belirir), **AES tur gezgini**: 4×4 durum matrisi, her adım ayrı animasyon, bir bayt değiştirince hangi hücrelerin turdan tura etkilendiği renklenir. Gezgin FIPS-197 test vektörleriyle ve Web Crypto ile karşılaştırılarak sınanır |
| 6 | **Blok modları, AEAD ve akış şifreleri** ECB, CBC, CTR, GCM; IV/nonce, dolgu (padding), kimlik doğrulamalı şifreleme (AEAD) ve ek veri (AAD), akış şifreleri, **ChaCha20-Poly1305**, AES-GCM ile ChaCha20 seçimi (donanım AES-NI farkı) | Mod seçiminin güvenliği nasıl değiştirdiğini görmek; "şifreledim ama doğrulamadım" hatasını tanımak | **ECB penguen deneyi** (zorunlu): kendi çizdiğimiz maskot ya da kullanıcının kendi görseli (yalnız tarayıcıda işlenir) ECB, CBC, CTR ile şifrelenir, sonuç yan yana; blok boyutu ve renk derinliği değiştirilebilir. **Mod şeması oynatıcısı** (her modun blok zinciri, bir bit hatasının nereye yayıldığı), **bit çevirme deneyi** (CTR'de şifreli metinde bir bit çevirince açık metinde aynı bit çevrilir; GCM bunu reddeder), ChaCha20 çeyrek tur gezgini |
| 7 | **Hash fonksiyonları** tek yönlülük, çakışma ve ön görüntü direnci, doğum günü paradoksu, **SHA-256** iç yapısı (dolgu, mesaj takvimi, 64 tur), Merkle–Damgård, SHA-3 (sünger) farkı, dosya bütünlüğü, Merkle ağacı | Bir bitlik değişikliğin çıktıyı nasıl tamamen değiştirdiğini ölçmek; çakışma bulmanın neden zor olduğunu doğum günü hesabıyla görmek | **Çığ etkisi görselleştirmesi** (zorunlu): girişte bir biti çevir, 256 bitlik çıktının değişen bitleri ızgarada yanar, sayaç ~%50 civarında dolaşır; birden çok denemenin histogramı. **SHA-256 adım gezgini** (Web Crypto ile karşılaştırılarak sınanır), **kısaltılmış hash'te çakışma avı** (ilk 16-24 bit; doğum günü sınırı canlı), doğum günü hesaplayıcı |
| 8 | **MAC ve HMAC** MAC neden gerekli, `hash(anahtar ‖ mesaj)` neden kötü, **length extension saldırısı**, HMAC yapısı, sabit zamanlı karşılaştırma, şifrele-sonra-MAC | Bütünlük ile gizliliği ayırmak; length extension'ı elle yapıp HMAC'in bunu neden engellediğini anlamak | **Length extension atölyesi**: oyuncak bir "API imzası" (`sha256(gizli ‖ mesaj)`) verilir; öğrenci gizliyi bilmeden mesaja `&rol=admin` ekleyip geçerli imza üretir (dolgu baytları görselleşir). Aynı deney HMAC ile başarısız olur. HMAC iç/dış anahtar şeması |
| 9 | **Parola saklama ve KDF** düz metin → düz hash → salt → pepper, gökkuşağı tabloları, yavaş hash ve bellek-zor fonksiyonlar (**PBKDF2, bcrypt, scrypt, Argon2id**), parametre seçimi, **HKDF** (parola değil anahtar türetme), parola yöneticileri | Bir parola veritabanı sızdığında hangi tasarımın ne kadar dayanacağını hesaplamak | **Kaba kuvvet süre hesaplayıcısı** (alfabe, uzunluk, saldırganın donanımı: dizüstü / GPU / GPU çiftliği; algoritma ve parametre; sonuç "3 saniye" ile "evrenin yaşının 10⁹ katı" arası bir ölçekte), **sızan veritabanı deneyi** (aynı 20 kullanıcının tablosu dört farklı saklama biçiminde; aynı parolalar düz hash'te aynı satırı verir, salt ile vermez), Argon2 bellek/zaman kaydırıcıları (tarayıcıda gerçek süre ölçülür), HKDF ile tek anahtardan birçok anahtar türetme |

### Grup C · Açık anahtar dünyası

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 10 | **RSA ve Diffie-Hellman** anahtar dağıtım sorunu, açık/özel anahtar fikri, **oyuncak sayılarla RSA** (p, q, n, φ, e, d), ders kitabı RSA'nın açıkları ve dolgu (OAEP), DH anahtar değişimi, ayrık logaritma problemi, ortadaki adam | RSA'yı kâğıt kalemle küçük sayılarla kurup çalıştırabilmek; DH'nin ortak sırrı nasıl ürettiğini sezmek | **DH renk karıştırma** animasyonu (ortak renk + gizli renkler; dinleyicinin elinde hangi renkler var, neden ayıramıyor), ardından aynı adımlar sayılarla (`g`, `p`, `a`, `b` kaydırıcıları). **Oyuncak RSA tezgahı** (asalları seç, her ara değer adım adım; küçük `n`'i çarpanlara ayırıp kırma düğmesi; anahtar boyu büyüdükçe çarpanlara ayırma süresinin grafiği) |
| 11 | **Eliptik eğriler ve dijital imzalar** eğri üzerinde nokta toplama ve ikiye katlama, skaler çarpım, sonlu cisim üzerinde eğri, ECDH, X25519, imza fikri, ECDSA ve **Ed25519**, imzada nonce tekrarı | Nokta toplamayı geometrik olarak ve mod p'de yapabilmek; imzanın neyi kanıtladığını ve neyi kanıtlamadığını bilmek | **Nokta toplama tezgahı**: gerçek sayılar üzerinde eğri (a, b kaydırıcıları, iki noktayı sürükle, doğru üçüncü noktada kesişir, yansıt), ardından **F_p üzerinde** aynı eğri nokta bulutu olarak; `kP` yürüyüşü adım adım. **İmza tezgahı** (Web Crypto ile Ed25519/ECDSA: imzala, mesajda tek harf değiştir, doğrulama düşer) |
| 12 | **Güven ve altyapı: sertifikalar, PKI, TLS** açık anahtarın sahibini nereden bilirim, sertifika, zincir, kök sertifika deposu, iptal, Certificate Transparency, **TLS 1.3 el sıkışması**, MITM, HTTPS'in neyi korumadığı | Bir TLS bağlantısının her mesajında ne taşındığını ve hangi anahtarın nereden türediğini anlatabilmek | **TLS 1.3 el sıkışma animasyonu** (adım adım: ClientHello + key_share, ServerHello, sertifika, CertificateVerify, Finished; her adımda "dinleyici ne görüyor" paneli ve anahtar takvimi ağacı), **sertifika zinciri gezgini** (oyuncak CA'lar; bir halkayı boz, tarayıcı uyarısı çıksın), **MITM sahnesi** (kafe Wi-Fi'ı; sahte sertifika kabul edilirse ne olur) |

### Grup D · Mesajlaşma ve depolama

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 13 | **Uçtan uca şifreli mesajlaşma I: Signal Protokolü** TLS ile E2EE farkı, kimlik anahtarı, ön anahtarlar (prekey), **X3DH**, **Double Ratchet** (simetrik cırcır + DH cırcırı), forward secrecy, post-compromise security, sıra dışı gelen mesajlar, **güvenlik numarası doğrulama** | Bir mesajın anahtarının nereden geldiğini ve bir anahtar çalınınca neyin açığa çıktığını adım adım izleyebilmek | **Cırcır animasyonu** (zorunlu): her mesajda zincir anahtarı bir diş ileri döner, eski anahtar silinir; yanıt gelince DH cırcırı yeni bir kök anahtar üretir. Gerçek X25519, HKDF ve AES-GCM ile çalışır, anahtarların hex değerleri her adımda görünür. **X3DH üçgeni** (dört DH hesabı ve hangisinin neyi sağladığı), **güvenlik numarası karşılaştırma** oyunu (sunucu anahtarı değiştirirse numara değişir) |
| 14 | **Uçtan uca şifreli mesajlaşma II: gruplar, cihazlar, metadata** Sender Keys, **MLS** (ağaç yapısı, TreeKEM fikri), çoklu cihaz, yedekler ve yedek anahtarları, **metadata sorunu**, sealed sender, kişi keşfi, kayıp telefon | Birebir E2EE'nin gruba ve çok cihaza taşınırken nerede zorlaştığını ve metadata'nın içerik kadar şey söylediğini görmek | **Grup anahtarı deneyi** (5 kişilik grup; biri çıkınca Sender Keys'te ve MLS'te kaç mesaj/anahtar güncellemesi gerekir, ağaç canlı), **metadata dedektifi** (yalnız "kim, kime, ne zaman, ne boyutta" kayıtlarından bir hikâyeyi çıkarma oyunu), sealed sender önce/sonra |
| 15 | **Zero-knowledge (sıfır bilgi) depolama** istemci tarafı şifreleme, ana parola → KDF → anahtar şifreleme anahtarı, kasa anahtarı, Bitwarden ve Standard Notes tarzı mimari, paylaşım, **anahtar kurtarma** (kurtarma kodu, güvenilir kişi, kurumsal emanet) ve ödünleşimleri, "sıfır bilgi" teriminin pazarlamada kullanımı | Sunucunun veriyi göremediği bir depolama sisteminin anahtar zincirini çizebilmek ve kurtarma ile gizlilik arasındaki gerilimi tartışabilmek | **Anahtar zinciri inşa tezgahı** (parola, KDF, anahtar şifreleme anahtarı, kasa anahtarı, öğe anahtarları; kutuları bağla, "sunucu ne saklıyor" paneli canlı), "parolamı unuttum" senaryosu (her mimaride ne kurtarılabilir), Web Crypto ile çalışan küçük bir şifreli not defteri deneyi |

### Grup E · Görsel kriptografi, saldırılar ve gelecek

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 16 | **Görsel kriptografi ve gizleme** **Naor-Shamir görsel kriptografi** (2'den 2 pay, k'den n pay fikri), steganografi ile şifreleme farkı, **LSB steganografi**, steganaliz (histogram, LSB düzlemi), görüntü şifreleme deneyleri (piksel karıştırma, kaotik haritalar ve neden genelde güvensiz oldukları) | Bir mesajı gizlemek ile şifrelemek arasındaki farkı görmek; görsel payların tek başına neden bilgi taşımadığını anlamak | **Pay üst üste koyma**: metin yaz, iki pay görüntüsü üretilir, birini sürükleyip diğerinin üstüne getirince mesaj belirir (ikisi de tek başına gürültü). **LSB gizleyici/çözücü** (kendi görselin; bit düzlemlerini tek tek göster, gizli mesajın düzlemde iz bırakması), görüntü şifreleme karşılaştırması (AES-CTR ile piksel karıştırma yan yana) |
| 17 | **Saldırılar ve uygulama hataları** nonce tekrarı (CTR/GCM'de iki zaman pad, ECDSA'da özel anahtarın düşmesi), **padding oracle** (kavramsal + oyuncak), zayıf rastgelelik (gerçek olaylardan kısa örnekler), **yan kanal saldırıları**: zamanlama (erken çıkan karşılaştırma), **güç analizi** (SPA, DPA/CPA), elektromanyetik sızıntı, hata enjeksiyonu; karşı önlemler (sabit zaman, maskeleme) | Doğru algoritmanın yanlış kullanımla nasıl kırıldığını görmek; yan kanalın elektronik kökenini (CMOS anahtarlama, Hamming ağırlığı) bağlayabilmek | **Nonce tekrarı deneyi** (aynı nonce ile şifrelenen iki mesajı XOR'la, bilinen kelimeyi kaydırarak diğerini çöz), **oyuncak padding oracle** (sunucu yalnız "dolgu doğru/yanlış" der; öğrenci bayt bayt çözer), **zamanlama saldırısı** (oyuncak parola karşılaştırıcısının yanıt süresi grafiği; ilk harf bulunur), **güç analizi laboratuvarı**: AES'in ilk turunun S-box çıkışının Hamming ağırlığıyla üretilmiş benzetilmiş güç izleri (gürültü kaydırıcısı), öğrenci 256 anahtar tahmininin korelasyonunu çizer, doğru bayt tepe yapar; maskeleme açılınca tepe kaybolur |
| 18 | **Post-kuantum kriptografi** Shor ve Grover ne kırar, ne kırmaz; "şimdi topla, sonra çöz"; kafes (lattice) sezgisi, LWE, **ML-KEM** (FIPS 203), ML-DSA, hibrit anahtar değişimi, **Signal PQXDH** ve SPQR/üçlü cırcır gelişmeleri, **iMessage PQ3**, TLS'te hibrit X25519MLKEM768 | Hangi algoritmaların kuantum tehdidinde olduğunu ve geçişin neden hibrit yapıldığını açıklayabilmek | **Gürültülü denklemler oyunu** (LWE'nin 2-3 boyutlu oyuncağı: gürültüsüz çözmek kolay, gürültüyle zor), Shor/Grover etki tablosu (anahtar boyu kaydırıcısı), ML-KEM ile gerçek kapsülleme ve açma (güvenilir kütüphane), boyut karşılaştırması (X25519 32 bayt ↔ ML-KEM-768 1184 bayt açık anahtar), hibrit el sıkışmanın TLS animasyonuna eklenmiş hali |

### Grup F · Tasarım

| # | Ünite | Öğrenme hedefi | Ana etkileşimler |
|---|---|---|---|
| 19 | **Vaka çalışmaları ve tasarım alıştırmaları** WhatsApp, Signal, **Telegram (varsayılan bulut sohbetleri ile gizli sohbet farkı)**, iMessage, şifreli e-posta (PGP/OpenPGP, S/MIME ve neden yaygınlaşmadığı); ekibin iki projesinden uyarlanan **anonim geri bildirim platformu** ve **kişisel paylaşım uygulaması** (gerçek adları sitede ve kodda geçmez) | Gerçek bir ürünün güvenlik özelliklerini doğru okumak ve kendi projesi için tehdit modeli kurup mimari seçebilmek | Her vaka **simülatörde hazır ayar** olarak açılır ("Telegram varsayılan" → sunucu yöneticisi içeriği görür; "Telegram gizli sohbet" → görmez, ama yedek ve çoklu cihaz yok). **Tasarım alıştırmaları** (§4.5): tehdit modeli kartları, mimari seçimi, simülatörde doğrulama |

Her ünitenin son bölümü **"Gerçek dünyada nerede karşına çıkar"** kutusudur: kavramın kullanıldığı 3-5 somut yer
(ör. Ü6: HTTPS trafiğin büyük kısmı AES-GCM ya da ChaCha20-Poly1305, Wi-Fi WPA2/3, disk şifreleme XTS; Ü7: Git
commit kimlikleri, yazılım indirme sayfalarındaki SHA-256 değerleri, Bitcoin; Ü17: akıllı kartlar ve kartlı ödeme
terminallerindeki yan kanal sertifikasyonları).

---

## 3. Dersler: sezgi → matematik → gerçek ürün

Ders altyapısı hazır (`src/dersler/tipler.ts`: bölümler, "Kendini dene", konu sonu testi, etkileşimli şekiller;
FPGA'daki `sim`, DSP'deki `matlab`, Git'teki `git` alanı gibi). Şifreleme için:

- **Bölüm düzeni:** her ünite 4-7 bölüm; her kavram önce kısa bir sezgi paragrafı ve hemen etkileşimli şekil,
  sonra **"Matematiğe in"** kutusu, en son ürün bağlantısı. "Matematiğe in" kutusu katlanır: açıkça gösterilir
  ama kapalı başlar; böylece aynı ders hem sezgi isteyene hem hesabı isteyene uyar. Bunun için ders metnine
  küçük bir katlanır blok sözdizimi eklenir (`md()` içinde).
- **Etkileşimli şekiller:** §2'deki tablolarda adı geçenler; hepsi SVG + React, pratiğin istemci içeriğinde
  (`icerik/sifreleme/istemci/etkilesim`) durur ve yalnız bu pratikte yüklenir. Her şekil derse gömülür, aynı
  zamanda Sanal Lab'de tek başına açılır.
- **Tahmin et, sonra gör:** deneyi çalıştırmadan önce "ECB ile şifrelenmiş penguen nasıl görünecek?" gibi üç
  seçenekten biri seçtirilir. Kavram yanılgısını yakalamanın en ucuz yolu (Git'te iyi işledi).
- **"Oyuncak" rozeti:** eğitim için yazdığımız her uygulama (Sezar'dan oyuncak RSA'ya, adım adım AES'ten oyuncak
  padding oracle'a) ekranda belirgin bir **"Oyuncak · gerçek kullanım için değil"** etiketi taşır; gerçek
  işlem yapan araçlarda ise **"Web Crypto"** ya da kütüphane adı yazar. İkisi hiç karışmaz.
- **Bölüm sonunda "Kendini dene"** ve ünite sonunda konu sonu testi; mevcut düzen.
- **Hata ve uyarı sözlüğü:** "sertifika güvenilir değil", "nonce tekrar kullanıldı", "doğrulama etiketi
  eşleşmedi" gibi mesajlar için "ne demek, neden olur, ne yapmalı" kartları.

---

## 4. Soru havuzu, meydan okumalar ve alıştırmalar

**Türler:** mevcut `mcq`, `tf`, `fill`, `num` yeterli; yeni soru türü açmayı önermiyorum (puanlama, perde, sınav
kağıdı, SQL üreticisi değişirdi). Çok adımlı işler Sanal Lab ve simülatörde yapılır.

### 4.1 Kavram soruları (`mcq`, `tf`; etiket `kavram`)
"Base64 ile kodlanmış parola hangi hedefi sağlar?", "GCM'de aynı anahtar ve nonce iki kez kullanılırsa ne kaybolur?"

### 4.2 Adım adım hesaplar (`num`, `fill`; etiket `hesap`)
Oyuncak RSA (`p=61, q=53, e=17` → `d`?), modüler ters, hızlı üs alma, DH ortak sırrı, eğri üzerinde `2P`, entropi
(bit), doğum günü sınırı, kaba kuvvet süresi. Açıklamalar `\n---\n` ile adımlara bölünür ("Sonraki adım"), her adım
bir ara değer verir. `num` belirtimi (`shared/grade.ts`) tolerans ve vektör destekler; "[x y]" biçimi nokta
koordinatı için kullanılır.

### 4.3 CTF tarzı meydan okumalar (`fill`; etiket `ctf`)
Soru metninde şifreli bir metin ya da veri; cevap bulunan bayrak/açık metin. Kolaydan zora: Sezar, yerine koyma
(frekans tezgahıyla), Vigenère, tekrar kullanılan OTP anahtarı, ECB'de blok kopyalama, length extension, küçük
`e` ile RSA, tekrar eden ECDSA nonce'u, zayıf tohumlu PRNG. Her meydan okumanın yanında **"Tezgahta aç"**
bağlantısı ilgili Sanal Lab aracını veriyle doldurarak açar. Cevap tarayıcıda değerlendirilir (perdeli anahtar,
mevcut kuyruk). Karma testte **"Yalnız meydan okumalar"** süzgeci.

### 4.4 "Bu tasarımda hata nerede?" (`mcq`; etiket `hata-bul`)
Kısa bir protokol şeması ya da kod parçası ve dört şıktan biri açığı gösterir: sabit IV'li CBC, MAC'siz CTR,
`==` ile MAC karşılaştırması, salt'sız SHA-256 parola, sunucuda tutulan "E2EE" anahtarı, doğrulanmayan
güvenlik numarası, `Math.random` ile üretilen token. Şemalar için soru metninde kısa bir gösterim
(`[[protokol: ...]]`) kullanılır, istemci bunu ok diyagramına çevirir (Git'teki `[[git: ...]]` durum kartı gibi;
her soruya ayrı şekil çizmek gerekmez).

### 4.5 Tasarım alıştırmaları (etiket `tasarim`)
Ü19'da, simülatörle birlikte. Her alıştırma: bir ürün tanımı, tehdit modeli kartları (kimden korunuyoruz?),
3-4 mimari seçenek ve **simülatörde kur ve doğrula** adımı. Sonuçta `mcq` sorular ("bu gereksinimde hangi
mimari?") ve simülatörde durum denetimli görevler. Ekibin iki projesi **gerçek adları olmadan**, genel adlarla
işlenir; adları sitede, soru metinlerinde ve kodun hiçbir yerinde geçmez.

- **Anonim geri bildirim platformu** (Selçuk'un cevabıyla): bir programdaki herkes birbirini eleştirebiliyor.
  Eleştiri herkese açık değil, doğrudan **program yürütücülerine** gidiyor. Yazar, **programı yazan ve işleten
  yazılımcılardan** (veritabanı, sunucu, günlük kayıtları) anonim olmalı; kötüye kullanımda (hakaret, tehdit)
  yazarın kimliğine **yalnız ilgili program yürütücüleri** ulaşabilmeli. Alıştırmanın özü: içerik gizliliği ile
  yazar anonimliği ayrı sorunlar ve burada ikisi de geliştiriciye karşı isteniyor. Tartışılacak mimariler:
  (1) düz sunucu + "geliştirici bakmaz" sözü (neden yetmez); (2) eleştiri metni ve yazar kimliği istemcide
  **yürütücülerin açık anahtarlarına şifrelenir**, sunucu yalnız şifreli zarf saklar (kimlik emaneti); (3) kimlik
  zarfı **eşik şifreleme** ile birden çok yürütücünün birlikte açabileceği şekilde (tek yürütücü keyfî açamaz);
  (4) kör imza / anonim kimlik bilgisiyle "programın geçerli üyesi ama kim olduğu bilinmiyor" ve kimliğin yalnız
  ayrı bir şikâyet sürecinde açılması. Kalan sızıntılar da tartışılır: oturum ve IP kayıtları, gönderim zamanı,
  yazım üslubu, küçük ekipte "bunu kim yazmış olabilir" çıkarımı, kötü niyetli istemci güncellemesi (geliştirici
  istemciyi değiştirebiliyorsa anonimlik nereye kadar?) ve anahtar yönetimi (yürütücü değişince ne olur).
- **Kişisel paylaşım uygulaması** (Selçuk'un cevabıyla): 9 ay kullanılacak, kişinin her gün kısa bir kayıt
  bıraktığı, fotoğraf ve yazı paylaşılabilen "mini" bir sosyal medya; ses kaydı da eklenebilir (henüz net değil).
  Alıştırmada ses **isteğe bağlı bir seçenek** olarak durur ve öğrenci sesin eklenmesinin tehdit modelini nasıl
  değiştirdiğini (ses biyometrik veridir, sunucuda yazıya dökme ya da analiz E2EE ile çelişir) tartışır.
  Cevaplanmamış noktalar (kim kimin paylaşımını görür, sunucuda analiz olacak mı, 9 ay sonunda ne olur)
  alıştırmada **tasarım kararı** olarak öğrenciye bırakılır: her seçeneğin mimariye etkisi gösterilir.
  Tartışılacak mimariler: sunucuda düz saklama + TLS; sunucu tarafı şifreleme (anahtar sunucuda); paylaşım
  çevresine (arkadaş grubu) **grup anahtarıyla** istemci tarafı şifreleme; fotoğraf meta verisinin (EXIF konumu)
  temizlenmesi, cihaz kaybında kurtarma ve yedek, 9 ayın sonunda **kripto-silme** (anahtarı silerek bütün
  kayıtları okunamaz yapmak) ya da kişiye şifreli dışa aktarma; her gün aynı saatte paylaşım gibi metadata.

### 4.6 Web Crypto alıştırmaları (etiket `webcrypto`)
İki katman:
1. **Formlu araç tezgahı (kodsuz):** Sanal Lab'de hash, HMAC, AES-GCM şifrele/çöz, PBKDF2/HKDF, ECDH/X25519, imza,
   anahtar dışa/içe aktarma (JWK, raw). Alıştırma: "Ayşe'nin gönderdiği AES-GCM paketini bu anahtarla çöz, mesajı
   yaz" (`fill`), "bu iki açık anahtardan türeyen ortak sırrın ilk 4 baytı?" (`fill`).
2. **Kod atölyesi (isteğe bağlı, §10.9):** CodeMirror'lı küçük bir JavaScript alanı; öğrenci `crypto.subtle`
   çağrılarını kendisi yazar, kod bir Web Worker içinde çalışır, çıktı beklenen sonuçla karşılaştırılır. 10-15
   kısa görev ("AES-GCM ile şifrele, nonce'u başa ekle, Base64 ver").

**Hedef dağılım:** ~%45 kavram, ~%20 hesap, ~%10 CTF, ~%15 hata bul, ~%10 tasarım ve Web Crypto. Zorluk 1-3.
Etiketler: `kavram`, `hesap`, `ctf`, `hata-bul`, `tasarim`, `webcrypto`, `gercek-dunya`, `elektronik`.

**Kaynaklar ve telif:** bütün metinler kendi cümlelerimizle. Başvuru: NIST FIPS 197 (AES), 180-4 (SHA-2), 203
(ML-KEM), RFC 8446 (TLS 1.3), RFC 8439 (ChaCha20-Poly1305), RFC 2104 (HMAC), RFC 5869 (HKDF), RFC 9106 (Argon2),
RFC 9420 (MLS), Signal'in açık protokol belgeleri (X3DH, Double Ratchet, PQXDH), Apple'ın PQ3 güvenlik yazısı,
Bitwarden güvenlik teknik belgesi, Naor-Shamir 1994 makalesi. Hakkında sayfasında kaynak listesi. Ürünlerin
logoları kullanılmaz; vaka çalışmalarında ürün adları yalnız betimleyici olarak geçer.

---

## 5. Mesajlaşma Simülatörü: "Kendi mesajlaşma uygulamanı tasarla"

Menüde **Simülatör**, adresi `/sifreleme/mesajlasma`. Ekran üç parçalı: solda **tasarım paneli** (ayarlar), ortada
**sohbet** (Ayşe ile Mert yazışıyor; öğrenci mesaj yazabilir ya da hazır akışı oynatır), sağda **saldırgan
gözü** (seçilen rolün gördüğü). Altta **zaman çizelgesi**. Telefonda sekmeler.

### 5.1 Tasarım paneli (senin listen + birkaç ek)
- **Koruma katmanı:** şifreleme yok · yalnız TLS · sabit anahtarlı E2EE · Double Ratchet'li E2EE (ileride: PQ hibrit)
- **Anahtarlar nerede:** sunucuda · yalnız cihazda · ikisi birden (sunucuda emanet kopya)
- **Yedekleme:** kapalı · açık, şifresiz · açık, sunucunun anahtarıyla · açık, kullanıcının parolasıyla (E2EE yedek)
- **Metadata gizleme:** yok · sealed sender (gönderen gizli) · (ileride) karışım ağı
- **Ek:** güvenlik numarası doğrulandı mı · eski mesajlar cihazda kaç gün kalır (kaybolan mesajlar) · ekran kilidi

### 5.2 Saldırgan rolleri
Ağı dinleyen kişi (kafe Wi-Fi, servis sağlayıcı), veritabanına erişen geliştirici, sunucu yöneticisi (canlı trafik
+ veritabanı + anahtar dizini), çalınan telefon (kilitli / kilidi açık), ele geçirilmiş anahtar (hangi anahtar ve
hangi anda), kötü niyetli istemci güncellemesi. Ek öneri: bulut yedek hizmetine erişen kişi.

Her rol için her mesajda **dört görünürlük düzeyinden biri** gösterilir ve renk kodlanır:
**okunur metin** · **rastgele görünen bayt** (gerçek şifreli metin) · **yalnız metadata** (kim, kime, ne zaman, ne
boyutta) · **hiçbir şey**. Her hücreye tıklayınca **"neden?"** (hangi ayar bunu sağladı ya da bozdu) ve **"nasıl
kapatılır?"** açıklaması çıkar.

### 5.3 Zaman çizelgesi ve anahtar ele geçirme
20-30 mesajlık bir yazışma çizelgede sıralanır. Öğrenci çizelgede bir ana "anahtar çalındı" işareti bırakır ve
hangi anahtarın (kimlik anahtarı, zincir anahtarı, kök anahtar, yedek anahtarı) çalındığını seçer. Çizelge geçmiş
ve gelecek mesajları boyar: sabit anahtarda hepsi kırmızı; Double Ratchet'te geçmiş yeşil kalır (forward secrecy),
gelecek ilk yanıtla birlikte DH cırcırı dönünce tekrar yeşile döner (post-compromise security); şifresiz yedek
açıksa ratchet ne olursa olsun yedekteki her şey kırmızı. Bu, "FS ve PCS" kavramlarının tek bakışta görüldüğü yer.

### 5.4 Hazır ayarlar ve görevler
- **Hazır ayarlar:** vaka çalışmalarının **basitleştirilmiş** modelleri (WhatsApp, Signal, Telegram varsayılan,
  Telegram gizli sohbet, iMessage, PGP'li e-posta). Her birinde "Bu bir modeldir; tarih: Kasım 2026" notu ve
  kaynak bağlantısı.
- **Görevler (~15):** durum denetimli, Git sandbox'ındaki gibi; denetim seçilen yola değil sonuca bakar.
  Örnekler: "Sunucu yöneticisi içerik okuyamasın ama yedek açık kalsın", "Telefon çalınsa bile son 7 günden
  eskisi okunmasın", "Ağ dinleyicisi kimin kime yazdığını da görmesin", "Kötü niyetli güncellemeye karşı
  simülatörde ne yapılabilir, ne yapılamaz?" (bu son görevin dersi: E2EE istemciye güvenir; tekrarlanabilir
  derleme ve şeffaflık kayıtları).

### 5.5 Motor
Görünürlük kuralları **saf TypeScript bir model** olarak yazılır (`src/kripto/mesajlasma/`): ayarlar + rol + olaylar
→ her mesajın görünümü. Kurallar tablo testleriyle sınanır (her rol × her ayar). Ekranda gösterilen şifreli
baytlar, zincir anahtarları ve ratchet adımları **gerçek** işlemlerle üretilir (Web Crypto: X25519, HKDF, AES-GCM),
böylece öğrenci gerçekten değişen hex değerlerini görür. Simülatör hiç `/api` isteği atmaz; görev ilerlemesi
tarayıcıda tutulur, tasarım `#tasarim=` bağlantısıyla paylaşılabilir (sunucuya gitmez).

İlk sürümün ne kadar kapsamlı olacağı açık soru (§10.2).

---

## 6. Sanal Lab: araçlar ve deneyler

Mevcut Sanal Lab altyapısı (`src/lab/deneyler.ts`, `src/pages/Lab.tsx`; şu an Kimya kullanıyor) kullanılır:
her deney bir üniteye bağlanır, katalogda listelenir, bileşeni yazılmamışsa "Yakında" görünür. Katalog iki
bölüm olur: **Deneyler** (§2'deki görselleştirmeler, ~30) ve **Araç tezgahı** (Web Crypto ile gerçek işlem yapan
genel araçlar: kodlama dönüştürücü, hash, HMAC, AES-GCM, KDF, anahtar üretme, ECDH, imza). Deneyler parametre
değişince anında güncellenir; ağır işler (Argon2, büyük RSA, güç analizi) Web Worker'da çalışır ve ilerleme
çubuğu gösterir.

Kullanıcının yüklediği görseller (ECB penguen, LSB, görsel kriptografi) **yalnızca tarayıcıda** işlenir, sunucuya
gitmez; ekranda bunu söyleyen bir not bulunur.

---

## 7. Teknik yaklaşım

- **Gerçek işlemler:** öncelik tarayıcının **Web Crypto API**'si (SHA-2, HMAC, AES-GCM/CBC/CTR, PBKDF2, HKDF, ECDH,
  ECDSA, RSA-OAEP/PSS, Ed25519/X25519). Web Crypto'da olmayanlar için denetlenmiş, bağımlılıksız kütüphaneler:
  `@noble/ciphers` (ChaCha20-Poly1305), `@noble/hashes` (Argon2, scrypt, SHA-3), `@noble/post-quantum` (ML-KEM),
  bcrypt için küçük bir kütüphane. Hepsi yalnız ilgili araç açılınca yüklenen ayrı parçalarda (diğer pratiklerin
  paket boyutu değişmez).
- **Oyuncak uygulamalar** `src/kripto/oyuncak/` altında, saf TypeScript ve testli: klasik şifreler, Enigma,
  adım adım AES ve SHA-256 (ara değerleri dışarı verir; sonuçları FIPS test vektörleri ve Web Crypto ile
  karşılaştırılır), BigInt'li oyuncak RSA/DH, küçük cisim üzerinde eğri aritmetiği, oyuncak padding oracle,
  benzetilmiş güç izleri. Her dışa açılan fonksiyon adı ve ekranı "oyuncak" diye işaretlenir.
- **Yerleşim:** `icerik/sifreleme/meta.ts` (19 ünite, kavramlar `u<ünite>-`, terimler, etiketler, `uniteGruplari`,
  `anaSayfa: "ders"`, `latex: true`), `icerik/sifreleme/sorular/unite-N.ts` + `yardimci.ts`, `icerik/index.ts` ve
  `icerik/sorular.ts` kaydı, `migrations/0042_sifreleme_ayarlari.sql` ve `npm run sorular:sql` ile soru
  migration'ları. `icerik/sifreleme/istemci/` dersler, etkileşimli şekiller, deneyler, simülatör görevleri ve hazır
  ayarlar; `index.ts`'te `mesajlasmaSimulatoru` (Git'teki `gitSandbox` gibi, sayfa açılınca yüklenir).
  `src/kripto/` ortak kod, `src/pages/Mesajlasma.tsx` sayfa; `AYRILMIS_YOLLAR`'a `mesajlasma` eklenir.
- **İstek tasarrufu:** cevaplar mevcut kuyrukla tarayıcıda değerlendirilip toplu gönderilir; araçlar, deneyler,
  CTF tezgahları ve simülatör sıfır `/api` isteği atar. İlerleme hesapla eşitlenmek istenirse açılış paketine ve
  toplu cevap yanıtına eklenir, ayrı uç açılmaz.
- **Testler:** oyuncakların test vektörleri, simülatör görünürlük tablosu, görevlerin örnek çözümlerinin testte
  çalıştırılması (Git'teki gibi), `sik-denetimi`, kavram/soru eşleşmesi. Her PR'da `npm run denetle` ve ekran
  görüntüleri (masaüstü + telefon, açık + karanlık tema).
- **Etik çerçeve:** saldırı içeriği yalnız kendi oyuncak sistemlerimiz ve kendi verimiz üzerinde; gerçek sistemlere
  yönelik araç verilmez. Gerçek olaylar (zayıf RNG, nonce tekrarı) kısa ve kaynaklı anlatılır.
- **Kapsam dışı:** gerçek kullanım için şifreleme ürünü (ör. kullanılabilir bir parola yöneticisi ya da mesajlaşma
  uygulaması) sunmak, gerçek ürünlerin tersine mühendisliği, gerçek kuantum benzetimi.

---

## 8. Fazlar ve PR zinciri

Her PR bir öncekinin dalının üstüne kurulur; pratik son PR'a kadar `yayinda: false` kalır (yönetici görür).
Yenilikler kayıtları ara PR'larda `kitle: "yonetici"`, yayın PR'ında herkese açık. Sıra §10.1'deki cevabına göre
değişebilir.

| PR | Faz | İçerik |
|---|---|---|
| 1 | İskelet | meta (19 ünite, kavramlar, terimler, gruplar), kayıt, ayar migration'ı, `src/kripto` temeli (bayt araçları, Web Crypto sarmalayıcıları, "Oyuncak" rozeti, katlanır "Matematiğe in" bloğu), Ü1-4 soruları |
| 2 | Temeller | Ü1-4 dersleri ve deneyleri (dönüştürücü, entropi, modüler araçlar, frekans tezgahı, Enigma), CTF "Tezgahta aç" altyapısı, Sanal Lab katalog düzeni |
| 3 | Simetrik I | Ü5-6: XOR tuvali, AES tur gezgini, blok modları, **ECB penguen**, bit çevirme, ChaCha20; soruları |
| 4 | Simetrik II | Ü7-9: SHA-256 gezgini, **çığ etkisi**, çakışma avı, HMAC, length extension, parola ve KDF, kaba kuvvet hesaplayıcı; soruları |
| 5 | Açık anahtar | Ü10-12: DH renk karıştırma, oyuncak RSA, nokta toplama, imza tezgahı, sertifika zinciri, **TLS 1.3 animasyonu**, MITM; soruları |
| 6 | Simülatör motoru | `src/kripto/mesajlasma` modeli + görünürlük tablo testleri + sayfa (ilk sürüm kapsamı §10.2) |
| 7 | Mesajlaşma | Ü13-14: X3DH, **cırcır animasyonu**, güvenlik numarası, gruplar, metadata; simülatör görevleri; soruları |
| 8 | Depolama ve gizleme | Ü15-16: anahtar zinciri tezgahı, şifreli not defteri, **görsel kriptografi**, LSB; soruları |
| 9 | Saldırılar ve PQ | Ü17-18: nonce tekrarı, oyuncak padding oracle, zamanlama, **güç analizi laboratuvarı**, LWE oyunu, ML-KEM; soruları |
| 10 | Tasarım ve yayın | Ü19: vaka çalışmaları (simülatör hazır ayarları), anonim geri bildirim ve kişisel paylaşım alıştırmaları, kod atölyesi (onaylanırsa), katalog ve tanıtım metni, `yayinda: true` |

---

## 9. Hacim tahmini (öneri)

~500 soru (ünite başına ~25; Ü1-4 biraz az, Ü13-14 ve Ü17 biraz fazla), ~30 CTF meydan okuması (havuzun içinde),
~30 deney + ~8 araç, simülatörde ~15 görev ve 6 hazır ayar, 2 tasarım alıştırması (anonim geri bildirim, kişisel paylaşım) + 3-4 genel
alıştırma. Büyüklük açık soru (§10.4).

---

## 10. Açık sorular (her birinde önerim kalın)

1. **Modüllerin sırası ve öncelikleri.** §2'deki sıra (temeller → simetrik → açık anahtar → mesajlaşma → saldırı
   ve PQ → tasarım) öğrenme sırası. Ama uygulamada simülatörü erken görmek istersen sıra şöyle de olabilir:
   PR 1-2 temeller, hemen ardından simülatör (PR 6) ve Ü13-14, sonra kalanlar.
   → **Öneri: öğrenme sırasıyla ilerlemek**, simülatör 6. PR'da. Mesajlaşma senin için en önemli kısımsa
   "simülatör önce" sırasına geçerim; söylemen yeterli. Ayrıca eklemek, çıkarmak ya da birleştirmek istediğin
   ünite var mı (ör. Ü3 matematik araç kutusunu ayrı ünite yerine derslere dağıtmak)?
2. **Simülatörün ilk sürüm kapsamı.**
   - (a) Dar: dört koruma katmanı × altı rol, görünürlük ızgarası; zaman çizelgesi ve hazır ayar yok.
   - (b) **Öneri:** senin listendeki bütün ayarlar (koruma, anahtar yeri, yedek, metadata, güvenlik numarası),
     altı rol, dört görünürlük düzeyi, anahtar ele geçirme zaman çizelgesi (FS/PCS), gerçek şifreli baytlar,
     ~15 görev, 6 hazır ayar. Yalnız birebir sohbet.
   - (c) Geniş: (b) + grup sohbeti (Sender Keys/MLS), çoklu cihaz, PQ hibrit katman, kaybolan mesajlar, karışım
     ağı, öğrencinin kendi protokolünü kutularla kurduğu "protokol inşa" kipi ve saldırgan/savunmacı oyunu.
   → **Öneri: (b) ile başla, (c)'nin parçalarını Ü14 ve Ü18'le birlikte sonraki PR'lara ekle.**
3. **Matematik derinliği.**
   - (a) Sezgi ağırlıklı: formüller az, oyuncak sayılar, kanıt yok.
   - (b) **Öneri: lisans mühendislik düzeyi:** modüler aritmetik, Fermat/Euler, genişletilmiş Öklid, GF(2⁸)
     (AES MixColumns), F_p üzerinde eğri aritmetiği, doğum günü sınırı, entropi ve olasılık hesapları; kanıtlar
     kısa taslak olarak. "Matematiğe in" kutuları katlanır, böylece sezgi isteyen atlayabilir. IND-CPA/IND-CCA
     güvenlik tanımları kavramsal birer kutu; LWE yalnız oyuncak boyutta.
   - (c) Derin: güvenlik oyunları ve indirgeme kanıtları, kafes matematiği, Çin kalan teoremiyle RSA hızlandırma,
     eliptik eğrilerde grup yasasının kanıtı.
   → **Öneri: (b).** Yan kanal ünitesinde elektronik tarafı (CMOS anahtarlama gücü, Hamming ağırlığı, korelasyon)
   (b) düzeyinde ama biraz daha derin tutulur, çünkü senin alanına dokunuyor.
4. **Soru havuzunun büyüklüğü.** ~300 (hızlı, ünite başına ~15), **~500 (öneri, ünite başına ~25)**, ~800 (Git
   düzeyinin üstü). Git'te 514 soru vardı. → **Öneri: ~500**, ilk yayından sonra çok çözülen ünitelere ek.
5. **Yayın zamanı.** Hepsi bitince mi, yoksa ilk yarı (Ü1-12 + simülatör) bitince erken yayın mı?
   → **Öneri: Ü1-14 ve simülatör hazır olunca yayın** (PR 7 sonunda); kalanlar yayındayken eklenir ve henüz
   hazır olmayan ünitelerin dersleri "Yakında" görünür. İstersen Git'teki gibi hepsi bitince.
6. **Ad, adres ve katalog alanı.** "Şifreleme" ve `/sifreleme` uygun mu, yoksa "Kriptografi" mi? Alan "Yazılım"
   mı, yeni bir "Güvenlik" mi? → **Öneri: "Şifreleme", `/sifreleme`, alan "Yazılım".**
7. **ECB penguen görseli.** Klasik deneyde Linux maskotu Tux kullanılır (atıf isteyen serbest lisans). Kendi
   çizdiğimiz bir maskot mu, Tux mu? → **Öneri: kendi maskotumuz** + kullanıcının kendi görselini yükleyebilmesi
   (yalnız tarayıcıda işlenir).
8. **Ekibin iki projesi.** → **Cevaplandı (16 Kasım 2026):** adları kullanılmaz, genel adlarla işlenir; ayrıntılar
   §4.5'te.
9. **Kod atölyesi** (öğrencinin `crypto.subtle` çağrılarını kendisinin yazdığı JavaScript alanı). → **Öneri: evet,
   10-15 görevle, son PR'da**; formlu araç tezgahı ise baştan var. Hedef kitlen JavaScript bilmiyorsa yalnız formlu
   tezgahta kalırız.
10. **Seviye testi.** Git'teki "Nereden başlamalıyım?" kartı burada da olsun mu? → **Öneri: şimdilik hayır**; Git'in
    aksine bu pratikte önbilgi farkı daha az, sıra zaten temelden ilerliyor. İstersen son PR'a eklenir.
11. **Vaka çalışmalarının güncelliği.** Ürünler değiştikçe (ör. Telegram, WhatsApp yedekleri, Signal'in PQ
    güncellemeleri) bilgiler eskir. → **Öneri:** her vaka "Kasım 2026 itibarıyla" tarihli ve kaynaklı yazılır;
    Hakkında'da Git'teki `meta.surumler` gibi bir "durum tarihi" satırı olur ve güncelleme adımları
    `docs/surum-guncelleme.md`'ye eklenir.
