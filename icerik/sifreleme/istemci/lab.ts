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
];
