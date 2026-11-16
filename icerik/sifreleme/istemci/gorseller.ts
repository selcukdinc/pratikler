// Şifreleme derslerinin şekilleri. Hepsi etkileşimlidir (./etkilesim); buradaki SVG
// yalnızca yönetim listesinde ve ekran okuyucu açıklamasıyla gösterilen özettir.
import type { Gorsel } from "../../../src/gorseller/tip";

const ozet = (yazi: string) =>
  `<rect x="1" y="1" width="398" height="78" rx="8" fill="none" stroke="currentColor"/><text x="200" y="45" text-anchor="middle" font-size="14" fill="currentColor">${yazi}</text>`;
const g = (kod: string, baslik: string, aciklama: string, yazi: string, etkilesim: string): Gorsel => ({ kod, baslik, aciklama, en: 400, boy: 80, icerik: ozet(yazi), etkilesim });

export const GORSELLER: Gorsel[] = [
  g("G-S1-01", "Kodlama, hash ve şifreleme yan yana", "Yazılan metin aynı anda Base64 ile kodlanır, SHA-256 ile hash'i alınır ve AES-GCM ile şifrelenir; hangisinin anahtarsız geri döndüğü, hangisinin hiç dönmediği ve hangisinin yalnız doğru anahtarla açıldığı görülür.", "Base64 · SHA-256 · AES-GCM", "ucKutu"),
  g("G-S1-02", "Metinden baytlara", "Metin, Base64 ya da hex girilir; her karakterin UTF-8 baytları, bit desenleri ve toplam bayt sayısı tabloda gösterilir.", "Ş → C5 9F → 11000101 10011111", "baytDonusturucu"),
  g("G-S1-03", "Hangi güvenlik hedefi?", "Sekiz gerçek hayat durumu gizlilik, bütünlük, kimlik doğrulama ya da inkâr edilemezlik olarak sınıflandırılır.", "Gizlilik · Bütünlük · Kimlik doğrulama · İnkâr edilemezlik", "hedefEslestir"),
  g("G-S2-01", "Entropi ölçer ve parola üretici", "Yazılan parolanın karakter kümelerinden entropi üst sınırı hesaplanır, tanıdık kalıplar uyarılır ve hızlı ile yavaş hash'te ortalama kırılma süreleri gösterilir; Web Crypto ile rastgele parola üretilir.", "uzunluk × log₂(alfabe) = bit", "entropiOlcer"),
  g("G-S2-02", "Rastgele mi?", "Kullanıcının elle yazdığı 0-1 dizisi ile bilgisayarın ürettiği dizinin 1 oranı, koşu sayısı ve en uzun tekrarı karşılaştırılır.", "0110100111…", "rastgeleMi"),
  g("G-S2-03", "Tahmin edilebilir üreteç", "Doğrusal eşlik üretecinin birkaç çıktısı gösterilir ve sıradaki sayı tahmin edilir.", "x(n+1) = (5·x(n) + 3) mod 16", "lcgOyunu"),
  g("G-S3-01", "Modüler saat", "Seçilen modda iki sayının toplamı, farkı ya da çarpımı saat kadranında gösterilir.", "(9 + 5) mod 12 = 2", "modulerSaat"),
  g("G-S3-02", "Genişletilmiş Öklid tablosu", "İki sayının EBOB'u ve modüler tersi, bölüm, kalan ve katsayı sütunlarıyla adım adım hesaplanır.", "17⁻¹ mod 3120 = 2753", "oklidTablosu"),
  g("G-S3-03", "Kare al ve çarp", "Modüler üs alma, üssün bitleri soldan sağa okunarak her adımda kare alma ve çarpmayla gösterilir.", "4¹³ mod 497 = 445", "kareCarp"),
  g("G-S4-01", "Sezar çarkı", "İç halka kaydırılınca harf eşlemesi değişir; yazılan metin şifrelenir ve bütün kaymalarla kaba kuvvet denenir.", "A → Ç (kayma 3)", "sezarCarki"),
  g("G-S4-02", "Frekans analizi tezgahı", "Yerine koymayla şifrelenmiş metnin harf sıklıkları Türkçe ya da İngilizce ortalamayla karşılaştırılır; harfler eşleştirildikçe metin açılır.", "Z %11 → A?", "frekansTezgahi"),
  g("G-S4-03", "Vigenère kırıcı", "Anahtar uzunluğu çakışma indeksiyle bulunur, her grubun kayması ki-kare testiyle tahmin edilir ve metin çözülür.", "L = 5 → KALEM", "vigenereKirici"),
  g("G-S4-04", "Enigma", "Üç rotorlu Enigma'da tuşa basınca rotorlar döner, akımın fiş tablosu, rotorlar ve yansıtıcıdan geçtiği yol gösterilir ve lamba yanar.", "A → … → yansıtıcı → … → B", "enigma"),
  g("G-S5-01", "XOR tuvali: anahtarı iki kez kullanmak", "İki yazı aynı rastgele bit anahtarıyla XOR'lanır; şifreli görüntüler tek başına gürültüdür, ama ikisi XOR'lanınca anahtar düşer ve iki yazı üst üste okunur.", "(1 ⊕ K) ⊕ (2 ⊕ K) = 1 ⊕ 2", "xorTuvali"),
  g("G-S5-02", "AES tur gezgini", "AES'in 4×4 durum matrisi her adımda (SubBytes, ShiftRows, MixColumns, AddRoundKey) gösterilir; girişte bir bit çevrilince farklılaşan baytlar turdan tura renklenir ve sonuç Web Crypto ile karşılaştırılır.", "00112233… → 69c4e0d8…", "aesTurGezgini"),
  g("G-S6-01", "ECB maskot deneyi", "Düz renkli bir maskot ya da kullanıcının kendi görseli AES ile ECB, CBC ve CTR modlarında şifrelenir; ECB'de şeklin hatları seçilir, öteki modlarda gürültü kalır.", "ECB · CBC · CTR", "ecbMaskot"),
  g("G-S6-02", "Hata yayılımı: ECB, CBC, CTR", "Dört bloklu bir mesajın şifreli baytlarından biri çevrilince alıcının çözdüğü metinde hangi baytların bozulduğu her modda gösterilir.", "C₂'de 1 bit → P₂ bozuk, P₃'te 1 bit", "modOynatici"),
  g("G-S6-03", "Bit çevirme: CTR ile GCM", "Anahtarı bilmeyen saldırgan şifreli ödeme mesajının bir baytını XOR'layarak tutarı değiştirir; AES-CTR değişikliği fark etmez, AES-GCM reddeder.", "0100 TL → 9100 TL?", "bitCevirme"),
  g("G-S6-04", "ChaCha20 çeyrek turu", "Dört 32 bitlik kelime üzerinde 12 adımlık toplama, XOR ve döndürme dizisi adım adım gösterilir.", "a += b; d ^= a; d <<<= 16 …", "chachaCeyrek"),
  g("G-S7-01", "Çığ etkisi", "Girdinin tek bir biti çevrilince SHA-256 özetinin 256 bitinden hangilerinin değiştiği ızgarada gösterilir; 200 rastgele denemenin histogramı 128 civarında toplanır.", "1 bit → ~128 bit", "cigEtkisi"),
  g("G-S7-02", "SHA-256 adım gezgini", "Kısa bir mesajın dolgulu bloğu, 64 kelimelik mesaj takvimi ve 64 turda a-h kelimelerinin değişimi adım adım gösterilir; özet Web Crypto ile karşılaştırılır.", "dolgu → W₀…W₆₃ → 64 tur", "sha256Gezgini"),
  g("G-S7-03", "Kısaltılmış hash'te çakışma avı", "SHA-256 özetinin ilk 8-24 biti alınarak rastgele mesajlarla çakışma aranır; gereken deneme sayısı doğum günü sınırıyla karşılaştırılır.", "16 bit → ~300 deneme", "cakismaAvi"),
  g("G-S7-04", "Doğum günü hesaplayıcı", "Kişi ya da deneme sayısına göre en az bir eşleşme olasılığı 365 gün, 16 bit ve 24 bit için hesaplanır.", "23 kişi → %50,7", "dogumGunu"),
  g("G-S8-01", "Length extension atölyesi", "SHA-256(gizli ‖ mesaj) ile imzalanan bir isteğe, gizliyi bilmeden dolgu ve ek eklenip geçerli imza üretilir; aynı deneme HMAC'li sunucuda reddedilir.", "…&rol=ogrenci\\x80…&rol=admin", "lengthExtension"),
  g("G-S8-02", "HMAC adımları", "Anahtarın 64 bayta tamamlanması, ipad ve opad ile XOR, iç ve dış özet adım adım gösterilir; sonuç Web Crypto HMAC ile karşılaştırılır.", "H(K⊕opad ‖ H(K⊕ipad ‖ m))", "hmacAdimlari"),
  g("G-S9-01", "Kaba kuvvet süre hesaplayıcı", "Parolanın alfabesi, uzunluğu, saklama algoritması ve saldırganın donanımına göre ortalama kırılma süresi hesaplanır.", "8 küçük harf, SHA-256 → saniyeler", "kabaKuvvetSure"),
  g("G-S9-02", "Sızan veritabanı", "Aynı on iki kullanıcının parolaları düz metin, SHA-256, tuzlu SHA-256 ve PBKDF2 ile saklanır; tekrarlanan özetler renklenir ve sözlük saldırısının maliyeti karşılaştırılır.", "123456 → aynı özet ×3", "sizanVeritabani"),
  g("G-S9-03", "PBKDF2 ölçer", "Seçilen yineleme sayısıyla PBKDF2'nin tarayıcıdaki süresi ölçülür ve saldırganın saniyedeki deneme sayısı tahmin edilir.", "600.000 yineleme → ? ms", "pbkdf2Olcer"),
  g("G-S9-04", "HKDF ile anahtar türetme", "Tek bir ana sırdan farklı info etiketleriyle bağımsız anahtarlar türetilir.", "sır + \"mac\" → anahtar", "hkdfTuretici"),
];
