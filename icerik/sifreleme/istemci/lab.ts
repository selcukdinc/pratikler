// Şifreleme Sanal Lab'i: derslerdeki şekillerin tek başına açılan halleri.
// Bileşenler ayrı parçalar olarak yalnızca açıldıklarında yüklenir.
import { createElement, lazy } from "react";
import type { Deney } from "../../../src/lab/deneyler";

const bilesen = (ad: "UcKutu" | "BaytDonusturucu" | "EntropiOlcer" | "RastgeleMi") =>
  lazy(() => import("./etkilesim/temeller").then((m) => ({ default: () => createElement(m[ad]) })));
const klasik = (ad: "SezarCarki" | "FrekansTezgahi" | "VigenereKirici" | "EnigmaMakinesi") =>
  lazy(() => import("./etkilesim/klasik").then((m) => ({ default: () => createElement(m[ad]) })));
const matematik = (ad: "ModulerSaat" | "OklidTablosu" | "KareCarp") =>
  lazy(() => import("./etkilesim/matematik").then((m) => ({ default: () => createElement(m[ad]) })));
const simetrik = (ad: "XorTuvali" | "AesTurGezgini" | "EcbMaskot" | "ModOynatici" | "BitCevirme" | "ChachaCeyrek") =>
  lazy(() => import("./etkilesim/simetrik").then((m) => ({ default: () => createElement(m[ad]) })));
const hash = (ad: "CigEtkisi" | "Sha256Gezgini" | "CakismaAvi" | "LengthExtension" | "HmacAdimlari" | "KabaKuvvetSure" | "SizanVeritabani" | "Pbkdf2Olcer") =>
  lazy(() => import("./etkilesim/hash").then((m) => ({ default: () => createElement(m[ad]) })));
const acik = (ad: "DhRenk" | "DhSayilar" | "RsaTezgahi" | "EgriReel" | "EgriFp" | "ImzaTezgahi" | "TlsEl" | "SertifikaZinciri" | "MitmSahnesi") =>
  lazy(() => import("./etkilesim/acik").then((m) => ({ default: () => createElement(m[ad]) })));
const mesajlasma = (ad: "Circir" | "X3dhUcgeni" | "GuvenlikNumarasi" | "GrupAnahtari" | "MetadataDedektifi") =>
  lazy(() => import("./etkilesim/mesajlasma").then((m) => ({ default: () => createElement(m[ad]) })));

export const DENEYLER: Deney[] = [
  { id: "uc-kutu", ad: "Kodlama, hash ve şifreleme", unite: 1, bilesen: bilesen("UcKutu"), ozet: "Aynı metni Base64 ile kodla, SHA-256 ile hash'ini al ve AES-GCM ile şifrele. Hangisi anahtarsız geri döner, hangisi hiç dönmez?" },
  { id: "bayt", ad: "Bayt dönüştürücü", unite: 1, bilesen: bilesen("BaytDonusturucu"), ozet: "Metin, hex ve Base64 arasında çevir; her karakterin UTF-8 baytlarını ve bitlerini gör." },
  { id: "entropi", ad: "Entropi ölçer", unite: 2, bilesen: bilesen("EntropiOlcer"), ozet: "Parolanın kaç bit entropi taşıdığını ve kaba kuvvetle ne kadar sürede kırılacağını hesapla; tarayıcının rastgele üretecinden parola üret." },
  { id: "rastgele-mi", ad: "Rastgele mi?", unite: 2, bilesen: bilesen("RastgeleMi"), ozet: "Elle yazdığın 0-1 dizisini bilgisayarınkiyle karşılaştır; insan elinin bıraktığı izi gör." },
  { id: "moduler", ad: "Modüler aritmetik tezgahı", unite: 3, bilesen: matematik("ModulerSaat"), ozet: "Saat kadranında toplama, çıkarma ve çarpma yap." },
  { id: "oklid", ad: "Modüler ters bulucu", unite: 3, bilesen: matematik("OklidTablosu"), ozet: "Genişletilmiş Öklid algoritmasını adım adım izle; oyuncak RSA'nın özel üssünü bul." },
  { id: "kare-carp", ad: "Kare al ve çarp", unite: 3, bilesen: matematik("KareCarp"), ozet: "Büyük üsleri birkaç çarpmayla hesapla." },
  { id: "sezar", ad: "Sezar çarkı", unite: 4, bilesen: klasik("SezarCarki"), ozet: "Çarkı çevir, metni şifrele, sonra bütün kaymaları dene." },
  { id: "frekans", ad: "Frekans analizi tezgahı", unite: 4, bilesen: klasik("FrekansTezgahi"), ozet: "Yerine koyma şifresini harf sıklıklarıyla kır; kendi şifreli metnini de yapıştırabilirsin." },
  { id: "vigenere", ad: "Vigenère kırıcı", unite: 4, bilesen: klasik("VigenereKirici"), ozet: "Anahtar uzunluğunu çakışma indeksiyle bul, anahtarı istatistikle çıkar." },
  { id: "enigma", ad: "Enigma", unite: 4, bilesen: klasik("EnigmaMakinesi"), ozet: "Rotorları ayarla, tuşlara bas, akımın yolunu izle. Aynı ayarla şifreli metni yazınca açık metin geri gelir." },
  { id: "xor-tuvali", ad: "XOR tuvali", unite: 5, bilesen: simetrik("XorTuvali"), ozet: "İki görüntüyü aynı anahtarla XOR'la; şifreli görüntüleri birbirine XOR'layınca anahtarın nasıl yok olduğunu gör." },
  { id: "aes", ad: "AES tur gezgini", unite: 5, bilesen: simetrik("AesTurGezgini"), ozet: "AES'in her turunda durum matrisine ne olduğunu adım adım izle; bir biti çevir, yayılmayı renklerle gör." },
  { id: "ecb", ad: "ECB maskot deneyi", unite: 6, bilesen: simetrik("EcbMaskot"), ozet: "Maskotu ya da kendi görselini ECB, CBC ve CTR ile şifrele; hangi modun deseni sızdırdığını gör." },
  { id: "modlar", ad: "Hata yayılımı", unite: 6, bilesen: simetrik("ModOynatici"), ozet: "Şifreli metinde bir bit çevir; ECB, CBC ve CTR'de çözülen metnin nerelerinin bozulduğunu karşılaştır." },
  { id: "bit-cevirme", ad: "Bit çevirme saldırısı", unite: 6, bilesen: simetrik("BitCevirme"), ozet: "Anahtarı bilmeden şifreli ödeme mesajındaki tutarı değiştir; AES-CTR fark etmez, AES-GCM reddeder." },
  { id: "chacha", ad: "ChaCha20 çeyrek turu", unite: 6, bilesen: simetrik("ChachaCeyrek"), ozet: "Toplama, XOR ve döndürmeden oluşan çeyrek turu adım adım izle." },
  { id: "cig", ad: "Çığ etkisi", unite: 7, bilesen: hash("CigEtkisi"), ozet: "Girdinin tek bir bitini çevir, SHA-256 özetinin yaklaşık yarısının değiştiğini gör." },
  { id: "sha256", ad: "SHA-256 adım gezgini", unite: 7, bilesen: hash("Sha256Gezgini"), ozet: "Dolgu, mesaj takvimi ve 64 tur: kısa bir mesajın özetinin nasıl hesaplandığını adım adım izle." },
  { id: "cakisma", ad: "Çakışma avı", unite: 7, bilesen: hash("CakismaAvi"), ozet: "Kısaltılmış bir hash'te çakışma bul; doğum günü sınırını canlı gör." },
  { id: "length-extension", ad: "Length extension atölyesi", unite: 8, bilesen: hash("LengthExtension"), ozet: "Gizli anahtarı bilmeden imzalı bir isteğe &rol=admin ekle; aynı saldırının HMAC'te neden işe yaramadığını gör." },
  { id: "hmac", ad: "HMAC adımları", unite: 8, bilesen: hash("HmacAdimlari"), ozet: "İç ve dış anahtarı, iki özeti adım adım hesapla." },
  { id: "kaba-kuvvet", ad: "Kaba kuvvet süresi", unite: 9, bilesen: hash("KabaKuvvetSure"), ozet: "Parola uzunluğu, alfabe, saklama algoritması ve saldırgan donanımına göre kırılma süresini hesapla." },
  { id: "sizan-veritabani", ad: "Sızan veritabanı", unite: 9, bilesen: hash("SizanVeritabani"), ozet: "Aynı kullanıcı tablosunu dört farklı biçimde sakla ve sözlük saldırısının maliyetini karşılaştır." },
  { id: "pbkdf2", ad: "PBKDF2 ölçer", unite: 9, bilesen: hash("Pbkdf2Olcer"), ozet: "Yavaş hash'in tarayıcındaki süresini ölç." },
  { id: "dh-renk", ad: "Boya karıştırarak Diffie-Hellman", unite: 10, bilesen: acik("DhRenk"), ozet: "Gizli renklerle ortak bir sır kur; sonra hatta ortadaki adamı aç ve iki tarafın renklerinin nasıl ayrıştığını gör." },
  { id: "dh-sayilar", ad: "Sayılarla Diffie-Hellman", unite: 10, bilesen: acik("DhSayilar"), ozet: "A = g^a mod p ile ortak sırrı hesapla; dinleyici olup a'yı deneyerek bul, p büyüdükçe işin nasıl uzadığını gör." },
  { id: "rsa", ad: "Oyuncak RSA tezgahı", unite: 10, bilesen: acik("RsaTezgahi"), ozet: "Anahtar üret, şifrele ve çöz; sonra saldırgan olup n'i çarpanlarına ayır ve 2048 bit için süreyi tahmin et." },
  { id: "egri-reel", ad: "Eliptik eğride nokta toplama", unite: 11, bilesen: acik("EgriReel"), ozet: "İki noktadan doğru geçir, üçüncü kesişimi yansıt; teğetle ikiye katla." },
  { id: "egri-fp", ad: "Mod 97'de eliptik eğri", unite: 11, bilesen: acik("EgriFp"), ozet: "Nokta bulutunda kP'nin yolunu izle, çiftle ve topla adımlarını gör, ECDH kur." },
  { id: "imza", ad: "İmza tezgahı", unite: 11, bilesen: acik("ImzaTezgahi"), ozet: "Gerçek bir Ed25519 imzası at ve doğrula; mesajı değiştirince ne olduğunu gör. Aynı nonce'lu iki imzadan özel anahtarı çıkar." },
  { id: "tls", ad: "TLS 1.3 el sıkışması", unite: 12, bilesen: acik("TlsEl"), ozet: "El sıkışmayı mesaj mesaj izle; dinleyicinin ne gördüğünü ve anahtar takviminin nasıl ilerlediğini gör." },
  { id: "sertifika", ad: "Sertifika zinciri", unite: 12, bilesen: acik("SertifikaZinciri"), ozet: "Gerçek imzalı üç halkalı bir zinciri kır: adı değiştir, süreyi geçir, sahte kök kullan." },
  { id: "mitm", ad: "Kafedeki ortadaki adam", unite: 12, bilesen: acik("MitmSahnesi"), ozet: "HTTP, HTTPS, sahte sertifika, HTTP'ye düşürme ve HSTS: saldırgan her senaryoda neyi görür?" },
  { id: "circir", ad: "Double Ratchet cırcırı", unite: 13, bilesen: mesajlasma("Circir"), ozet: "Mesaj gönderdikçe zincir dişlisinin, konuşma sırası değişince DH dişlisinin döndüğünü gerçek anahtarlarla izle." },
  { id: "x3dh", ad: "X3DH üçgeni", unite: 13, bilesen: mesajlasma("X3dhUcgeni"), ozet: "Çevrimdışı birine ilk mesajın anahtarını dört Diffie-Hellman hesabıyla kur; tek kullanımlık ön anahtarı aç ve kapat." },
  { id: "guvenlik-no", ad: "Güvenlik numarası oyunu", unite: 13, bilesen: mesajlasma("GuvenlikNumarasi"), ozet: "Sunucu bazen araya kendi anahtarını koyuyor. İki ekrandaki numaraları karşılaştırıp yakalayabilir misin?" },
  { id: "grup", ad: "Sender Keys ve MLS", unite: 14, bilesen: mesajlasma("GrupAnahtari"), ozet: "Gruptan bir üye çıkar; Sender Keys'te kaç anahtar mesajı, MLS ağacında kaç düğüm güncellemesi gerektiğini karşılaştır." },
  { id: "metadata", ad: "Metadata dedektifi", unite: 14, bilesen: mesajlasma("MetadataDedektifi"), ozet: "İçerik şifreli; elinde yalnız sunucu kayıtları var. Kim kiminle ne hakkında konuşuyor?" },
];
