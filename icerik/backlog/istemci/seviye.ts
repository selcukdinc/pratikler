// "Nereden başlamalıyım?" seviye testi: her ünite grubundan (Backlog'un temeli, User story
// zanaatı, Tahmin, sıralama ve hazırlık) üç soru. Bir grubun en az iki sorusunu bilen o
// grubu geçmiş sayılır; öneri geçilemeyen ilk gruptur. Sorular soru havuzunda yoktur.
import type { SeviyeTestiTanimi } from "../../../src/components/SeviyeTesti";

export const SEVIYE_TESTI: SeviyeTestiTanimi = {
  gecme: 2,
  hepsiGectiNotu: "Backlog Atölyesi'ndeki \"Sprint'e hazır ilk sürüm\" göreviyle kendini dene; hazırladığın backlog'u Sprint Simülatörü'nde oyna.",
  sorular: [
    // Backlog'un temeli
    {
      grup: 0,
      soru: "Scrum Rehberi'ne göre Product Backlog'un yönetiminden kim hesap verir?",
      secenekler: ["Scrum Master", "Product Owner", "Developers", "Teknik Liderlik"],
      dogru: 1,
    },
    {
      grup: 0,
      soru: "Backlog'un sıranın altındaki öğeleri için hangisi doğrudur?",
      secenekler: ["Kabul kriterleri yazılmış olmalı", "Kaba kalabilir; sırası yaklaştıkça inceltilir", "Story point'le tahmin edilmiş olmalı", "Backlog'da bulunmamalı"],
      dogru: 1,
    },
    {
      grup: 0,
      soru: "\"Öğle saatinde bekleme süresini yarıya indir\" hiyerarşinin hangi seviyesine en çok uyar?",
      secenekler: ["Task", "Story", "Epic", "Kabul kriteri"],
      dogru: 2,
    },
    // User story zanaatı
    {
      grup: 1,
      soru: "\"Sipariş tablosu\", \"sipariş servisi\", \"sipariş ekranı\" diye bölünen bir feature'ın temel sorunu nedir?",
      secenekler: ["Story'ler çok küçük", "Yatay dilimler tek başına kullanıcıya değer vermez", "Kabul kriteri yazılamaz", "Tahmin edilemez"],
      dogru: 1,
    },
    {
      grup: 1,
      soru: "Hangisi test edilebilir bir kabul kriteridir?",
      secenekler: ["Ödeme hızlı ve sorunsuz olmalı", "Bakiye yetersizse sipariş alınmaz ve eksik tutar gösterilir", "Ekran kullanıcı dostu olmalı", "Sistem makul sürede cevap vermeli"],
      dogru: 1,
    },
    {
      grup: 1,
      soru: "\"Her yeni ekran erişilebilirlik denetiminden geçer\" maddesi en doğru nereye yazılır?",
      secenekler: ["Definition of Done", "Tek bir story'nin kabul kriteri", "Ayrı bir erişilebilirlik story'si", "Sprint Goal"],
      dogru: 0,
    },
    // Tahmin, sıralama ve hazırlık
    {
      grup: 2,
      soru: "Planning Poker'da kartlar 3 ile 13 arasında dağıldı. Sonraki adım nedir?",
      secenekler: ["Ortalama alınır", "En düşük ve en yüksek kartı açanlar gerekçesini anlatır, yeniden oylanır", "En kıdemli kişinin kartı geçerli olur", "Product Owner karar verir"],
      dogru: 1,
    },
    {
      grup: 2,
      soru: "Gecikme maliyeti 12, büyüklüğü 3 olan feature ile gecikme maliyeti 15, büyüklüğü 8 olan feature'dan WSJF'ye göre hangisi önce gelir?",
      secenekler: ["Gecikme maliyeti 15 olan", "Gecikme maliyeti 12 olan", "İkisi eşittir", "WSJF büyüklüğe bakmaz"],
      dogru: 1,
    },
    {
      grup: 2,
      soru: "Definition of Ready için hangisi doğrudur?",
      secenekler: ["Scrum Rehberi'nin taahhütlerinden biridir", "Rehber'de yoktur; katı bir kapıya dönüşürse akışı yavaşlatır", "Increment'in kalite ölçütüdür", "Yalnızca Product Owner için geçerlidir"],
      dogru: 1,
    },
  ],
};
