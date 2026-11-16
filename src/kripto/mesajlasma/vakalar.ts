// Vaka çalışmaları (19. ünite): gerçek uygulamaların simülatördeki sadeleştirilmiş modelleri.
// Her biri bir Tasarim'dır; simülatörde hazır ayar olarak açılır, derste karşılaştırma
// tablosunda görünür. Ürünler değiştikçe güncellenir (docs/surum-guncelleme.md).
// Bu bir modeldir: ürünlerin her ayrıntısını değil, simülatördeki ayarlara düşen karşılığını verir.
import type { Tasarim } from "./model";

export const VAKA_TARIHI = "Kasım 2026";

export type VakaOzellik = "e2ee" | "ileri" | "yedek" | "gonderen" | "coklu" | "pq";

export const OZELLIK_ADI: Record<VakaOzellik, string> = {
  e2ee: "Varsayılan olarak uçtan uca",
  ileri: "İleri gizlilik ve iyileşme",
  yedek: "Yedek sağlayıcıdan korunuyor",
  gonderen: "Sunucu göndereni görmüyor",
  coklu: "Çoklu cihazda uçtan uca",
  pq: "Post-kuantum anahtar değişimi",
};

// "evet" | "hayir" | "secime" (kullanıcı ayarlarsa)
export type Durum = "evet" | "hayir" | "secime";

export interface Vaka {
  id: string;
  ad: string;
  tasarim: Tasarim;
  ozet: string;
  ozellik: Record<VakaOzellik, Durum>;
  notlar: string[];
  kaynak: { ad: string; url: string };
}

const temel = { dogrulandi: false, kaybolan: null, ekranKilidi: true } as const;

export const VAKALAR: Vaka[] = [
  {
    id: "whatsapp",
    ad: "WhatsApp",
    tasarim: { ...temel, koruma: "e2ee-ratchet", anahtarYeri: "cihaz", yedek: "saglayici", metadata: "yok" },
    ozet: "Bütün kişisel sohbetler Signal Protokolü ile uçtan uca şifreli. Sohbet yedeği ise varsayılan olarak bulut sağlayıcısının anahtarıyla saklanır.",
    ozellik: { e2ee: "evet", ileri: "evet", yedek: "secime", gonderen: "hayir", coklu: "evet", pq: "hayir" },
    notlar: [
      "Uçtan uca şifreli yedek 2021'den beri var, ama kullanıcı ayarlardan açmalı. Açınca simülatörde yedek \"kullanıcının parolasıyla\" olur.",
      "Sunucu kimin kime ne zaman yazdığını görür; metadata şirketin gizlilik politikasına bağlıdır.",
      "Anahtar şeffaflığı (2023) sahte anahtar dağıtmayı denetlenebilir kılar; simülatörde güvenlik numarasını işaretleyerek benzetebilirsin.",
    ],
    kaynak: { ad: "WhatsApp şifreleme teknik belgesi", url: "https://www.whatsapp.com/security" },
  },
  {
    id: "signal",
    ad: "Signal",
    tasarim: { ...temel, koruma: "e2ee-ratchet", anahtarYeri: "cihaz", yedek: "kapali", metadata: "gizli-gonderen" },
    ozet: "Protokolün kaynağı. Gizli gönderen (sealed sender) ile sunucu mesajın kimden geldiğini görmez; kişi listesi ve grup üyelikleri de sunucudan gizlenir.",
    ozellik: { e2ee: "evet", ileri: "evet", yedek: "evet", gonderen: "evet", coklu: "evet", pq: "evet" },
    notlar: [
      "Bulut yedeği varsayılan olarak kapalıdır. 2025'te gelen isteğe bağlı güvenli yedek, cihazda üretilen bir kurtarma anahtarıyla şifrelenir.",
      "2023'ten beri ilk anahtar kurulumu PQXDH ile, 2025'ten beri cırcır da post-kuantum bir adımla korunur (18. ünite).",
      "Kaybolan mesajlar her sohbette ayrı açılabilir.",
    ],
    kaynak: { ad: "Signal protokol belgeleri", url: "https://signal.org/docs/" },
  },
  {
    id: "telegram",
    ad: "Telegram (varsayılan sohbet)",
    tasarim: { ...temel, koruma: "tls", anahtarYeri: "sunucu", yedek: "kapali", metadata: "yok" },
    ozet: "Varsayılan \"bulut sohbetleri\" uçtan uca şifreli değildir: istemci ile sunucu arası şifrelidir, mesajlar sunucuda şirketin anahtarıyla saklanır. Bu sayede her cihazdan bütün geçmiş görünür.",
    ozellik: { e2ee: "hayir", ileri: "hayir", yedek: "hayir", gonderen: "hayir", coklu: "hayir", pq: "hayir" },
    notlar: [
      "Grup sohbetleri ve kanallar her zaman bu türdendir; uçtan uca şifreli grup yoktur.",
      "Yedek ayarı burada anlamsızdır: sohbetin kendisi zaten sunucuda okunabilir duruyor.",
      "Şifreleme protokolü (MTProto) şirketin kendi tasarımıdır; uçtan uca olmaması bundan bağımsızdır.",
    ],
    kaynak: { ad: "Telegram MTProto belgeleri", url: "https://core.telegram.org/mtproto" },
  },
  {
    id: "telegram-gizli",
    ad: "Telegram (gizli sohbet)",
    tasarim: { ...temel, koruma: "e2ee-sabit", anahtarYeri: "cihaz", yedek: "kapali", metadata: "yok" },
    ozet: "Elle başlatılan, iki kişilik ve tek cihazlık uçtan uca şifreli sohbet. Sunucu içeriği göremez, ama sohbet başka cihazda görünmez ve yedeklenmez.",
    ozellik: { e2ee: "hayir", ileri: "secime", yedek: "evet", gonderen: "hayir", coklu: "hayir", pq: "hayir" },
    notlar: [
      "Anahtar 100 mesajda ya da bir haftada bir yenilenir. Bu kaba bir ileri gizliliktir; her mesajda dönen cırcır kadar sık değildir. Simülatör bu yüzden \"sabit anahtar\" ile modeller.",
      "Anahtar görselini (iki tarafta aynı görünmesi gereken desen) karşılaştırmak güvenlik numarasının karşılığıdır.",
      "Kendini imha eden mesaj zamanlayıcısı vardır; simülatörde kaybolan mesajları açarak benzetebilirsin.",
    ],
    kaynak: { ad: "Telegram uçtan uca şifreleme belgesi", url: "https://core.telegram.org/api/end-to-end" },
  },
  {
    id: "imessage",
    ad: "iMessage",
    tasarim: { ...temel, koruma: "e2ee-ratchet", anahtarYeri: "cihaz", yedek: "saglayici", metadata: "yok" },
    ozet: "Mesajlar cihazlar arasında uçtan uca şifreli; PQ3 ile post-kuantum anahtar kurulumu ve düzenli anahtar yenileme var. Varsayılan iCloud yedeği ise mesajların anahtarını Apple'da tutar.",
    ozellik: { e2ee: "evet", ileri: "evet", yedek: "secime", gonderen: "hayir", coklu: "evet", pq: "evet" },
    notlar: [
      "Gelişmiş Veri Koruması (Advanced Data Protection) açılırsa yedeğin anahtarı yalnız kullanıcının cihazlarında kalır; simülatörde yedek \"kullanıcının parolasıyla\" olur.",
      "Kişi Anahtarı Doğrulaması (Contact Key Verification) sahte cihaz eklenmesini fark ettirir.",
      "Telefon numarasına giden SMS ve RCS mesajları bu korumanın dışındadır.",
    ],
    kaynak: { ad: "Apple platform güvenliği kılavuzu", url: "https://support.apple.com/guide/security/welcome/web" },
  },
  {
    id: "pgp",
    ad: "PGP ile şifreli e-posta",
    tasarim: { ...temel, koruma: "e2ee-sabit", anahtarYeri: "cihaz", yedek: "kapali", metadata: "yok" },
    ozet: "Mesaj gövdesi alıcının uzun ömürlü açık anahtarıyla şifrelenir. Konu satırı, gönderen, alıcı ve tarih e-posta başlıklarında açık gider.",
    ozellik: { e2ee: "hayir", ileri: "hayir", yedek: "evet", gonderen: "hayir", coklu: "secime", pq: "hayir" },
    notlar: [
      "İleri gizlilik yoktur: özel anahtar bir gün sızarsa, kaydedilmiş bütün eski e-postalar açılır.",
      "Anahtar dağıtımı ve doğrulaması (parmak izi karşılaştırma) kullanıcıya kalır; yaygınlaşmamasının ana nedeni budur.",
      "S/MIME aynı işi sertifika otoritesiyle yapar; kurumlarda daha yaygındır ama ileri gizlilik onda da yoktur.",
    ],
    kaynak: { ad: "OpenPGP standardı (RFC 9580)", url: "https://www.rfc-editor.org/rfc/rfc9580" },
  },
];

