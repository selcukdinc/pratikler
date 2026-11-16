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
];
