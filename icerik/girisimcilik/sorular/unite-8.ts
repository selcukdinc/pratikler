// 8. ünite: Pazarlama İlkeleri ve Yönetimi
// Bu ünitenin kitap soruları henüz eklenmedi; burada arkadaş listesindeki iki çıkmış
// soru (23, 25) ve onların çevresinde türetilmiş sorular var.

import { cikmis, turet, type Soru } from "./yardimci.ts";

const U = 8;
const K = "u8";

export const unite8: Soru[] = [
  ...cikmis(U, K, [
    {
      id: "u8-c23", no: 23, kavram: "u8-kavramlar", sabit: true,
      soru: "Bir ürünü kullanan veya tüketen kişi ......, satın alma kararını veren kişi ......, satın alma gücü ile desteklediği isteği ise ...... olarak ifade edilir. Boşluklara sırasıyla hangi kavramlar gelmelidir?",
      secenekler: ["Tüketici - Girişimci - İhtiyaç", "Tüketici - Müşteri - Talep", "Müşteri - Tüketici - Talep", "Tüketici - Girişimci - Tatmin", "Müşteri - Tüketici - İhtiyaç"],
      dogru: 1,
      aciklama: "Kullanan/tüketen **tüketici**, satın alma kararını veren **müşteri**, satın alma gücüyle desteklenen istek **talep**tir.",
    },
    {
      id: "u8-c25", no: 25, kavram: "u8-karma",
      soru: "Aşağıdakilerden hangisi pazarlama karması bileşenlerinden biri değildir?",
      secenekler: ["Tutundurma", "Fiyat", "Ürün", "Dağıtım", "Ambalaj"],
      dogru: 4,
      aciklama: "Pazarlama karması **ürün, fiyat, dağıtım ve tutundurma**dır (4P). Ambalaj ürünün bir parçasıdır, ayrı bir bileşen değildir.",
    },
  ]),

  ...turet(U, K, "u8-kavramlar", [
    {
      id: "u8-t-tuketici", tip: "mcq", zorluk: 1,
      soru: "Pazarlamada bir ürünü kullanan veya tüketen kişi ya da örgütsel birime ne ad verilir?",
      secenekler: ["Tüketici", "Müşteri", "Tedarikçi", "Paydaş"],
      dogru: 0,
      aciklama: "**Tüketici** ürünü kullanan veya tüketendir; bireyleri ve işletme gibi tüzel kişileri kapsar.",
    },
    {
      id: "u8-t-apple", tip: "mcq", zorluk: 2,
      soru: "Kitaptaki örnekte cep telefonu kullanan kişi tüketicidir. Apple marka telefon satın alan kişi ise Apple için nedir?",
      secenekler: ["Müşteri", "Tedarikçi", "Rakip", "Bayi"],
      dogru: 0,
      aciklama: "Satın alma kararını fiilen veren kişi o markanın **müşterisi**dir.",
    },
    {
      id: "u8-t-istek-talep", tip: "fill", zorluk: 2,
      soru: "Tüketicinin satın alma gücüyle desteklediği isteğe ____ denir.",
      bosluklar: [["talep"]],
      aciklama: "Satın alma gücüyle desteklenen istek **talep**tir.",
    },
    {
      id: "u8-t-ihtiyac-tanim", tip: "mcq", zorluk: 2,
      soru: "Kitapta ihtiyaç en özet biçimde nasıl tanımlanır?",
      secenekler: ["Tatmin edilmemiş dürtüler", "Lüks ürünlere duyulan arzu", "Satın alma gücüyle desteklenen istek", "Reklamla yaratılan beklenti"],
      dogru: 0,
      aciklama: "İhtiyaç **tatmin edilmemiş dürtüler**dir. İhtiyaçları zorunlu, istekleri lüks diye ayırmak hatalıdır.",
    },
    {
      id: "u8-t-istek-sinirsiz", tip: "tf", zorluk: 2,
      soru: "Kitaba göre ihtiyaçlar belirli gruplarda toplanabilecek kadar sınırlıyken istekler sınırsız sayıda olabilir.",
      dogru: true,
      aciklama: "Doğru. İstekler, ihtiyaçların kültür, kişilik ve çevreyle aldığı şekildir; bu yüzden sayısızdır.",
    },
    {
      id: "u8-t-maslow-alt", tip: "mcq", zorluk: 1,
      soru: "Maslow'un ihtiyaçlar hiyerarşisinin en altında hangi ihtiyaçlar yer alır?",
      secenekler: ["Fizyolojik ihtiyaçlar", "Kendini gerçekleştirme", "Saygı görme", "Ait olma ve sevilme"],
      dogru: 0,
      aciklama: "En altta yaşamak için gereken **fizyolojik ihtiyaçlar**, sonra güvenlik, ait olma, saygı ve kendini gerçekleştirme gelir.",
    },
  ]),

  ...turet(U, K, "u8-karma", [
    {
      id: "u8-t-4p", tip: "mcq", zorluk: 1,
      soru: "Pazarlama karmasının bileşenleri hangi seçenekte doğru verilmiştir?",
      secenekler: ["Ürün, fiyat, dağıtım, tutundurma", "Ürün, ambalaj, reklam, satış", "Fiyat, kalite, hizmet, marka", "Üretim, finans, insan, bilgi"],
      dogru: 0,
      aciklama: "Pazarlama karması (4P): **ürün, fiyat, dağıtım, tutundurma**.",
    },
    {
      id: "u8-t-deger-uclusu", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre müşteri değer üçlüsü hangi unsurların birleşiminden oluşur?",
      secenekler: ["Kalite, hizmet ve fiyat", "Ürün, fiyat ve dağıtım", "Marka, ambalaj ve reklam", "Müşteri, tüketici ve talep"],
      dogru: 0,
      aciklama: "Müşteri için yaratılan değer **kalite, hizmet ve fiyatın** birleşimidir.",
    },
    {
      id: "u8-t-tatmin", tip: "mcq", zorluk: 2,
      soru: "Ürünün performansı müşterinin beklentisinin altında kalırsa ne olur?",
      secenekler: ["Müşteri tatmin olmaz", "Müşteri her durumda tatmin olur", "Talep kendiliğinden artar", "Müşteri tüketiciye dönüşür"],
      dogru: 0,
      aciklama: "Performans beklentinin altında kalırsa **tatmin olmaz**; karşılarsa tatmin olur.",
    },
    {
      id: "u8-t-pazarlama-kapsam", tip: "tf", zorluk: 1,
      soru: "Kitaba göre pazarlama yalnızca ürünün tanıtımı ve satışından ibarettir.",
      dogru: false,
      aciklama: "Yanlış. Pazarlama ürün geliştirme, fiyatlama, dağıtım ve tutundurmayı da içine alan faaliyetler bütünüdür.",
    },
  ]),
];
