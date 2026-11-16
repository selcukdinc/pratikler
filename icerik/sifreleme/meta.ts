// Şifreleme Pratik (pratikler.selcukdinc.dev/sifreleme): mesaj şifrelemeyi, yaygın
// kullanım örneklerini ve genel kriptografiyi altı grupta 19 ünitede işleyen, görsel
// ve elle kurcalanan bir öğrenme ve deney alanı. Her kavram önce sezgiyle, sonra
// matematiğiyle, en son gerçek bir üründe nasıl kullanıldığıyla görülür. Plan: proje
// kütüphanesinde planlar/plan-sifreleme-pratigi.md, depoda docs/plan-sifreleme-pratigi.md.
//
// Sorular ve dersler kendi cümlelerimizle yazılır; başvuru kaynakları NIST FIPS
// standartları, RFC'ler ve protokollerin açık belgeleridir, metin kopyalanmaz.
// Eğitim için yazılan uygulamalar (src/kripto/oyuncak) "oyuncak"tır, gerçek işlemler
// Web Crypto API ile yapılır. latex: true; TypeScript dizgisinde ters bölü iki kez yazılır.
//
// Her kavramın en az bir sorusu olmalı (shared/kavramlar.test.ts). Soruları henüz
// yazılmamış ünitelerin kavramları, soruları eklenirken açılır.
import type { PratikMeta } from "../tipler.ts";

export const GRUPLAR = [
  { ad: "Temeller", aciklama: "Kriptografi neyi çözer, rastgelelik, gereken matematik ve klasik şifrelerin kırılışı.", uniteler: [1, 2, 3, 4] },
  { ad: "Simetrik dünya", aciklama: "One-time pad, AES, blok modları, ChaCha20, hash, MAC ve parola saklama.", uniteler: [5, 6, 7, 8, 9] },
  { ad: "Açık anahtar", aciklama: "RSA, Diffie-Hellman, eliptik eğriler, dijital imzalar, sertifikalar ve TLS.", uniteler: [10, 11, 12] },
  { ad: "Mesajlaşma ve depolama", aciklama: "Signal Protokolü, Double Ratchet, grup mesajlaşma, metadata ve sıfır bilgili depolama.", uniteler: [13, 14, 15] },
  { ad: "Saldırılar ve gelecek", aciklama: "Görsel kriptografi ve steganografi, uygulama hataları, yan kanal saldırıları ve post-kuantum.", uniteler: [16, 17, 18] },
  { ad: "Tasarım", aciklama: "Gerçek ürünleri incele, kendi uygulamanın tehdit modelini kur ve mimarisini seç.", uniteler: [19] },
];

export const sifreleme: PratikMeta = {
  id: "sifreleme",
  alt: "sifreleme",
  yol: "sifreleme",
  ad: "Şifreleme",
  alan: "Yazılım",
  aciklama:
    "Kriptografiyi kara kutu olmaktan çıkar: Sezar'dan AES'e, hash'ten parola saklamaya, RSA ve eliptik eğrilerden TLS'e, uçtan uca şifreli mesajlaşmadan post-kuantum kriptografiye 19 ünite. Her kavram önce görsel bir deneyle, sonra matematiğiyle, en son gerçek bir üründe nasıl kullanıldığıyla.",
  kaynakAdi: "NIST standartları, RFC'ler ve protokollerin açık belgeleri",
  kaynakAciklamasi:
    "Sorular ve dersler herkese açık kaynaklardan yararlanılarak **kendi cümlelerimizle** yazıldı: NIST'in FIPS standartları (AES için FIPS 197, SHA-2 için FIPS 180-4, ML-KEM için FIPS 203), IETF'in RFC'leri (TLS 1.3, HMAC, HKDF, ChaCha20-Poly1305, Argon2, MLS) ve Signal Protokolü'nün açık belgeleri. Bu kaynaklardan metin kopyalanmadı.\n\n" +
    "Eğitim için yazılmış uygulamalar (klasik şifreler, küçük sayılarla RSA, adım adım AES) **oyuncaktır**, ekranda öyle etiketlenir ve gerçek kullanım için değildir. Gerçek şifreleme yapan araçlar tarayıcının Web Crypto API'sini kullanır.",
  tanitim: {
    baslik: "Kriptografiyi elle kurcalayarak öğren",
    giris:
      "Şifreleme Pratik, mesaj şifrelemeyi, hash'i, parola saklamayı, açık anahtarlı kriptografiyi ve uçtan uca şifreli mesajlaşmayı adım adım öğreten ücretsiz bir çalışma sitesi. Her kavramı önce görsel bir deneyle sezer, sonra matematiğini küçük sayılarla kendin hesaplar, en son gerçek bir üründe nasıl kullanıldığını görürsün.",
    kitleler: [
      { baslik: "Mühendislik öğrencileri", metin: "Modüler aritmetikten AES'in turlarına, yan kanal saldırılarının elektronik kökenine kadar işin içini gör." },
      { baslik: "Yazılımcılar", metin: "Doğru modu, doğru KDF'yi ve doğru protokolü seçmeyi; yaygın uygulama hatalarını tanımayı öğren." },
      { baslik: "Merak edenler", metin: "Mesajlaşma uygulamandaki \"uçtan uca şifreli\" yazısının tam olarak neyi koruduğunu anla." },
    ],
  },
  uniteAdi: "ünite",
  uniteKisa: "Ü",
  yayinda: false,
  latex: true,
  // Açılış sayfası derslerin listesi (gruplarıyla)
  anaSayfa: "ders",
  uniteGruplari: GRUPLAR,
  logo: "/logolar/sifreleme.svg",
  etiketler: [
    { id: "kavram", ad: "Kavram", renk: "turetilmis", aciklama: "Bir kavramı ya da mekanizmanın ne sağladığını soran soru" },
    { id: "hesap", ad: "Hesap", renk: "ders", aciklama: "Adım adım çözülen hesap: modüler aritmetik, entropi, anahtar uzayı, kodlama" },
    { id: "ctf", ad: "Meydan okuma", renk: "kitap", aciklama: "Şifreli bir metni kırdığın ya da gizli bir değeri bulduğun CTF tarzı soru" },
    { id: "hata-bul", ad: "Hata bul", renk: "cikmis", aciklama: "Bir tasarımdaki ya da koddaki güvenlik açığını bulduğun soru" },
  ],
  uniteler: [
    { no: 1, baslik: "Kriptografi Neyi Çözer?" },
    { no: 2, baslik: "Rastgelelik ve Entropi" },
    { no: 3, baslik: "Matematik Araç Kutusu" },
    { no: 4, baslik: "Klasik Şifreler ve Kırılmaları" },
    { no: 5, baslik: "XOR, One-Time Pad ve AES" },
    { no: 6, baslik: "Blok Modları, AEAD ve Akış Şifreleri" },
    { no: 7, baslik: "Hash Fonksiyonları" },
    { no: 8, baslik: "MAC ve HMAC" },
    { no: 9, baslik: "Parola Saklama ve KDF" },
    { no: 10, baslik: "RSA ve Diffie-Hellman" },
    { no: 11, baslik: "Eliptik Eğriler ve Dijital İmzalar" },
    { no: 12, baslik: "Sertifikalar, PKI ve TLS" },
    { no: 13, baslik: "Uçtan Uca Şifreli Mesajlaşma: Signal Protokolü" },
    { no: 14, baslik: "Gruplar, Cihazlar ve Metadata" },
    { no: 15, baslik: "Sıfır Bilgili Depolama" },
    { no: 16, baslik: "Görsel Kriptografi ve Steganografi" },
    { no: 17, baslik: "Saldırılar ve Uygulama Hataları" },
    { no: 18, baslik: "Post-Kuantum Kriptografi" },
    { no: 19, baslik: "Vaka Çalışmaları ve Tasarım" },
  ],
  kavramlar: {
    // 1. ünite
    "u1-hedefler": { ad: "Gizlilik, bütünlük, kimlik doğrulama ve inkâr edilemezlik" },
    "u1-kerckhoffs": { ad: "Kerckhoffs ilkesi: algoritma açık, anahtar gizli" },
    "u1-anahtar": { ad: "Anahtar ile algoritma farkı ve anahtar uzunluğu" },
    "u1-kodlama": { ad: "Kodlama (Base64, hex) şifreleme değildir" },
    "u1-uc-islem": { ad: "Kodlama, hash ve şifreleme farkı" },
    "u1-bayt": { ad: "Bit, bayt, hex ve metnin baytlara çevrilmesi (UTF-8)" },
    "u1-simetrik-asimetrik": { ad: "Simetrik ve açık anahtarlı şifrelemeye ilk bakış" },
    "u1-tehdit": { ad: "Tehdit modeli: kimden, neyi koruyoruz?" },
    // 2. ünite
    "u2-entropi": { ad: "Entropi: belirsizliği bit olarak ölçmek" },
    "u2-parola": { ad: "Parola entropisi ve anahtar uzayı" },
    "u2-prng": { ad: "Sözde rastgele üreteçler (PRNG) ve tohum" },
    "u2-csprng": { ad: "Kriptografik güvenli üreteçler (CSPRNG) ve işletim sistemi kaynağı" },
    "u2-trng": { ad: "Donanım rastgelelik kaynakları: gürültü ve jitter" },
    "u2-sapma": { ad: "Rastgelelik testleri ve sapma giderme" },
    "u2-hatalar": { ad: "Zayıf rastgeleliğin sonuçları" },
    // 3. ünite
    "u3-xor": { ad: "Bit işlemleri ve XOR" },
    "u3-mod": { ad: "Modüler aritmetik" },
    "u3-ebob": { ad: "EBOB ve Öklid algoritması" },
    "u3-ters": { ad: "Modüler ters ve genişletilmiş Öklid" },
    "u3-us": { ad: "Hızlı modüler üs alma (kare al ve çarp)" },
    "u3-asal": { ad: "Asal sayılar ve çarpanlara ayırmanın zorluğu" },
    "u3-euler": { ad: "Fermat ve Euler teoremleri, φ fonksiyonu" },
    "u3-cisim": { ad: "Sonlu cisimler: GF(p), GF(2) ve GF(2⁸)" },
    // 4. ünite
    "u4-sezar": { ad: "Sezar şifresi ve kaba kuvvet" },
    "u4-yerine-koyma": { ad: "Tek alfabeli yerine koyma şifreleri" },
    "u4-frekans": { ad: "Frekans analizi" },
    "u4-vigenere": { ad: "Vigenère şifresi" },
    "u4-vigenere-kirma": { ad: "Vigenère'i kırmak: Kasiski ve çakışma indeksi" },
    "u4-aktarim": { ad: "Aktarım (yer değiştirme) şifreleri" },
    "u4-enigma": { ad: "Enigma'nın çalışma mantığı ve zayıflıkları" },
    "u4-dersler": { ad: "Klasik şifrelerin bugüne bıraktığı dersler" },
  },
  terimler: [
    { tr: "gizlilik", en: "confidentiality", aciklama: "Bilgiyi yalnız yetkili kişilerin okuyabilmesi" },
    { tr: "bütünlük", en: "integrity", aciklama: "Bilginin fark edilmeden değiştirilememesi" },
    { tr: "kimlik doğrulama", en: "authentication", aciklama: "Mesajın ya da kişinin iddia ettiği kaynaktan geldiğinin kanıtlanması" },
    { tr: "inkâr edilemezlik", en: "non-repudiation", aciklama: "Gönderenin mesajı sonradan inkâr edememesi" },
    { tr: "açık metin", en: "plaintext", aciklama: "Şifrelenmeden önceki okunur veri" },
    { tr: "şifreli metin", en: "ciphertext", aciklama: "Şifrelemenin çıktısı" },
    { tr: "şifre çözme", en: "decryption", aciklama: "Şifreli metni anahtarla açık metne döndürmek" },
    { tr: "kırma", en: "cryptanalysis, breaking", aciklama: "Şifreli metni anahtarı bilmeden açmak" },
    { tr: "kodlama", en: "encoding", aciklama: "Veriyi başka bir gösterime çevirmek (Base64, hex); anahtar yoktur" },
    { tr: "anahtar uzayı", en: "key space", aciklama: "Olası bütün anahtarların kümesi" },
    { tr: "kaba kuvvet", en: "brute force", aciklama: "Bütün anahtarları sırayla denemek" },
    { tr: "tehdit modeli", en: "threat model", aciklama: "Kimden, neyi ve hangi yeteneklere karşı koruduğumuzun tanımı" },
    { tr: "entropi", en: "entropy", aciklama: "Bir değerin belirsizliği; bit cinsinden ölçülür" },
    { tr: "tohum", en: "seed", aciklama: "Sözde rastgele üretecin başlangıç değeri" },
    { tr: "sözde rastgele üreteç", en: "pseudorandom number generator, PRNG" },
    { tr: "gerçek rastgele üreteç", en: "true random number generator, TRNG" },
    { tr: "modüler ters", en: "modular inverse", aciklama: "a·x ≡ 1 (mod m) eşitliğini sağlayan x" },
    { tr: "sonlu cisim", en: "finite field, Galois field", aciklama: "Toplama, çıkarma, çarpma ve bölmenin içinde kapalı olduğu sonlu küme" },
    { tr: "yerine koyma şifresi", en: "substitution cipher" },
    { tr: "aktarım şifresi", en: "transposition cipher", aciklama: "Harfleri değiştirmeden yerlerini karıştıran şifre" },
    { tr: "frekans analizi", en: "frequency analysis", aciklama: "Harf sıklıklarından şifreyi kırmak" },
    { tr: "çakışma indeksi", en: "index of coincidence", aciklama: "Metinden seçilen iki harfin aynı çıkma olasılığı" },
    { tr: "bilinen açık metin saldırısı", en: "known-plaintext attack", aciklama: "Saldırganın bazı açık metin ve şifreli metin çiftlerini bildiği saldırı" },
  ],
  benzerler: [],
};
