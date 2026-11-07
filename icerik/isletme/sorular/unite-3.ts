// 3. ünite (özetin 3. başlığı): işletmenin amaçları ve temel performans
// ilkeleri (verimlilik, iktisadilik, rantabilite). Hesap soruları özetteki
// formüllerle çözülür; sayılar soruya özgüdür.

import { ozet, type Soru } from "./yardimci.ts";

const U = 3;

export const unite3: Soru[] = [
  ...ozet(U, "u3-amac", [
    {
      ad: "kar-tanim",
      soru: "Kâr nasıl tanımlanır?",
      secenekler: [
        "Toplam gelirler ile toplam giderler arasındaki olumlu fark",
        "Toplam satışların toplam sermayeye oranı",
        "Çıktı miktarının girdi miktarına oranı",
        "Satış tutarının üretim maliyetine oranı",
        "Sabit maliyetler ile değişken maliyetlerin toplamı",
      ],
      aciklama: "Kâr = Toplam Gelir − Toplam Maliyet; yani gelirler ile giderler arasındaki **olumlu farktır**. Diğer oranlar verimlilik, iktisadilik ve rantabiliteye aittir.",
    },
    {
      ad: "uzun-donem",
      zorluk: 2,
      soru: "Modern işletmecilikte kâr amacıyla ilgili hangi yaklaşım benimsenir?",
      secenekler: [
        "Uzun dönemli tatminkâr kâr",
        "Kısa vadede olabildiğince yüksek vurgun kârı",
        "Kâr yerine yalnızca pazar payı",
        "Her dönem sıfır kârla çalışmak",
        "Kârın tamamını vergi olarak ödemek",
      ],
      aciklama: "Özete göre kısa vadeli vurgun kârı yerine işletmenin geleceğini güvenceye alan **uzun dönemli tatminkâr (optimal) kâr** hedeflenir.",
    },
    {
      ad: "kar-islev",
      zorluk: 2,
      soru: "Özete göre kâr aşağıdakilerden hangisi değildir?",
      secenekler: ["Emeğin getirisi", "Girişimcinin risk primi", "Büyümenin finansman kaynağı", "Başarı ölçütü", "Özel işletmelerin temel kuruluş güdüsü"],
      aciklama: "Kâr; girişimcinin risk primi, büyümenin finansman kaynağı ve başarı ölçütüdür. Emeğin getirisi kâr değil **ücrettir**.",
    },
    {
      ad: "sosyal-sorumluluk",
      soru: "İşletmenin istihdam yaratması, vergi ödemesi, çevreyi koruması ve iş ahlakına uygun davranması hangi amacının kapsamındadır?",
      secenekler: ["Topluma hizmet ve sosyal sorumluluk", "Uzun dönemde kâr elde etme", "Varlığını sürdürme ve büyüme", "Verimlilik", "Rantabilite"],
      aciklama: "Kaliteli ve ucuz mal sunmak, istihdam, vergi, çevreyi koruma ve etik davranış **topluma hizmet ve sosyal sorumluluk** amacıdır.",
    },
    {
      ad: "yasama",
      soru: "Yoğun rekabet ortamında piyasadan silinmemek, pazar payını korumak ve ölçeğini büyüterek süreklilik kazanmak işletmenin hangi amacıdır?",
      secenekler: ["Varlığını sürdürme ve büyüme", "Topluma hizmet", "Kısa vadede kâr", "İktisadilik", "Sosyal sorumluluk"],
      aciklama: "Rekabette ayakta kalmak, pazar payını korumak ve büyümek **varlığını sürdürme (yaşama) ve büyüme** amacıdır.",
    },
    {
      ad: "ozel-guduu",
      soru: "Özel işletmelerin en temel kuruluş güdüsü hangisidir?",
      secenekler: ["Uzun dönemde kâr elde etmek", "Vergi ödemek", "İstihdam yaratmak", "Çevreyi korumak", "Tekel kurmak"],
      aciklama: "Özete göre **uzun dönemde kâr elde etme**, özel işletmelerin en temel kuruluş güdüsüdür; diğer amaçlar bunu tamamlar.",
    },
  ]),

  ...ozet(U, "u3-verimlilik", [
    {
      ad: "verimlilik-formul",
      soru: "Verimlilik (prodüktivite) hangi oranla hesaplanır?",
      secenekler: ["Çıktı / Girdi", "Satış tutarı / Üretim maliyeti", "Net kâr / Öz sermaye", "Girdi / Çıktı", "Fiili kapasite / Pratik kapasite"],
      aciklama: "Verimlilik, elde edilen **çıktının** kullanılan **girdiye** oranıdır: Verimlilik = Çıktı / Girdi.",
    },
    {
      ad: "verimlilik-hesap",
      zorluk: 2,
      soru: "Bir atölyede 8 işçi bir günde 400 sandalye üretmektedir. İşçi başına günlük emek verimliliği kaçtır?",
      secenekler: ["50 sandalye", "40 sandalye", "80 sandalye", "3200 sandalye", "0,02 sandalye"],
      aciklama: "Verimlilik = Çıktı / Girdi = 400 / 8 = **50** sandalye/işçi. 3200 çarpımdır, 0,02 ise ters orandır.",
    },
    {
      ad: "verimlilik-artis",
      soru: "Aşağıdakilerden hangisi verimliliğin arttığını gösterir?",
      secenekler: [
        "Aynı girdiyle daha fazla çıktı elde edilmesi",
        "Aynı çıktı için daha fazla girdi kullanılması",
        "Girdinin ve çıktının aynı oranda azalması",
        "Satış fiyatının artırılması",
        "Öz sermayenin artırılması",
      ],
      aciklama: "Verimlilik, **aynı girdiyle daha fazla çıktı** ya da aynı çıktıyı daha az girdiyle üretmektir. Aynı oranda değişim oranı değiştirmez.",
    },
    {
      ad: "verimlilik-karsilastir",
      zorluk: 3,
      soru: "A işletmesi 20 makineyle 1000 birim, B işletmesi 25 makineyle 1100 birim üretiyor. Makine verimliliği için hangisi doğrudur?",
      secenekler: [
        "A'nın verimliliği 50, B'ninki 44 birimdir; A daha verimlidir",
        "A'nın verimliliği 44, B'ninki 50 birimdir; B daha verimlidir",
        "İkisinin verimliliği de 50 birimdir",
        "B daha çok ürettiği için daha verimlidir",
        "A'nın verimliliği 0,02, B'ninki 0,023'tür; B daha verimlidir",
      ],
      aciklama: "A: 1000 / 20 = **50**, B: 1100 / 25 = **44** birim/makine. B daha çok üretse de girdi başına çıktısı düşüktür; A daha verimlidir.",
    },
    {
      ad: "verimlilik-tur",
      soru: "Özete göre verimlilik girdi ile çıktı arasındaki nasıl bir orandır?",
      secenekler: ["Fiziksel ya da parasal oran", "Yalnızca parasal oran", "Yalnızca sermayeye dayalı oran", "Kâra dayalı oran", "Vergiye dayalı oran"],
      aciklama: "Verimlilik, üretimde kullanılan girdiler ile elde edilen çıktılar arasındaki **fiziksel ya da parasal** orandır.",
    },
  ]),

  ...ozet(U, "u3-iktisadilik", [
    {
      ad: "iktisadilik-formul",
      soru: "İktisadilik (ekonomiklik) hangi oranla ölçülür?",
      secenekler: ["Satış tutarı / Üretim maliyetleri", "Çıktı / Girdi", "Net kâr / Toplam sermaye", "Fiili kapasite / Pratik kapasite", "Sabit maliyet / Katkı payı"],
      aciklama: "İktisadilik = Üretilen mal ya da hizmetin **satış tutarı / üretim maliyetleri tutarı**. Tasarruf ilkesini, yani en düşük maliyetle üretmeyi ölçer.",
    },
    {
      ad: "iktisadilik-hesap",
      zorluk: 2,
      soru: "Bir işletmenin yıllık satış tutarı 900.000 TL, üretim maliyetleri 600.000 TL'dir. İktisadilik oranı kaçtır?",
      secenekler: ["1,5", "0,67", "300.000", "1,2", "2,5"],
      aciklama: "İktisadilik = 900.000 / 600.000 = **1,5**. Oran 1'den büyük olduğu için üretim iktisadidir. 0,67 ters oran, 300.000 ise farktır.",
    },
    {
      ad: "iktisadilik-bir",
      soru: "İktisadilik oranının hangi değeri alması istenir?",
      secenekler: ["1'den büyük", "Tam olarak 0", "1'den küçük", "Negatif", "Tam olarak 1"],
      aciklama: "Satış tutarı maliyeti aşmalıdır; bu yüzden iktisadilik oranının **1'den büyük** olması istenir. 1'in altı, maliyetin satışları aştığını gösterir.",
    },
    {
      ad: "iktisadilik-ilke",
      soru: "Üretim faaliyetlerinin en düşük maliyetle, tasarruf ilkesiyle gerçekleştirilmesi hangi kavramla anlatılır?",
      secenekler: ["İktisadilik", "Verimlilik", "Rantabilite", "Kapasite kullanımı", "Başabaş"],
      aciklama: "**İktisadilik (ekonomiklik)**, en düşük maliyetle (tasarruf ilkesiyle) üretimi ifade eder.",
    },
  ]),

  ...ozet(U, "u3-karlilik", [
    {
      ad: "rantabilite-tanim",
      soru: "Belirli bir dönemde elde edilen net kârın, o kârı elde etmek için kullanılan sermayeye oranına ne ad verilir?",
      secenekler: ["Rantabilite", "Verimlilik", "İktisadilik", "Kapasite kullanım oranı", "Katkı payı"],
      aciklama: "Net kârın kullanılan sermayeye oranı **kârlılık (rantabilite)** olarak adlandırılır.",
    },
    {
      ad: "mali-rantabilite",
      zorluk: 2,
      soru: "Öz sermayesi 500.000 TL olan bir işletme yıl sonunda 75.000 TL net kâr elde etmiştir. Mali rantabilite yüzde kaçtır?",
      secenekler: ["%15", "%7,5", "%20", "%66", "%1,5"],
      aciklama: "Mali rantabilite = Net kâr / Öz sermaye = 75.000 / 500.000 = 0,15 = **%15**.",
    },
    {
      ad: "ekonomik-rantabilite",
      zorluk: 3,
      soru: "Net kârı 60.000 TL, faiz gideri 40.000 TL olan bir işletmenin öz sermayesi 300.000 TL, yabancı sermayesi 200.000 TL'dir. Ekonomik rantabilite yüzde kaçtır?",
      secenekler: ["%20", "%12", "%33", "%50", "%8"],
      aciklama: "Ekonomik rantabilite = (Net kâr + Faiz giderleri) / Toplam sermaye = (60.000 + 40.000) / (300.000 + 200.000) = 100.000 / 500.000 = **%20**. %12 faizi eklemeden, %33 öz sermayeye bölerek bulunur.",
    },
    {
      ad: "ekonomik-formul",
      zorluk: 2,
      soru: "Ekonomik rantabilitenin formülü hangisidir?",
      secenekler: [
        "Faiz giderleri eklenmiş net kârın toplam sermayeye oranı",
        "Net kârın öz sermayeye oranı",
        "Faiz giderleri düşülmüş net kârın yabancı sermayeye oranı",
        "Satış tutarının üretim maliyetlerine oranı",
        "Faiz giderleri eklenmiş net kârın öz sermayeye oranı",
      ],
      aciklama: "Ekonomik rantabilite, faiz giderleri eklenmiş net kârı **toplam sermayeye** (öz + yabancı) böler. Net kâr / Öz sermaye ise mali rantabilitedir.",
    },
    {
      ad: "mali-formul",
      soru: "Öz sermaye kârlılığı olarak da bilinen mali rantabilite nasıl hesaplanır?",
      secenekler: ["Net kâr / Öz sermaye", "Net kâr / Toplam sermaye", "Faiz giderleri / Öz sermaye", "Çıktı / Girdi", "Öz sermaye / Net kâr"],
      aciklama: "Mali rantabilite (öz sermaye kârlılığı) = **Net kâr / Öz sermaye**.",
    },
    {
      ad: "ilke-ayirt",
      zorluk: 2,
      soru: "\"Bu yıl aynı sayıda işçiyle geçen yıldan %10 daha fazla ürün ürettik.\" diyen bir yönetici hangi performans ilkesindeki gelişmeden söz etmektedir?",
      secenekler: ["Verimlilik", "İktisadilik", "Mali rantabilite", "Ekonomik rantabilite", "Kapasite kullanım oranı"],
      aciklama: "Aynı girdiyle (işçi sayısı) daha çok çıktı, **verimlilik** artışıdır. Para cinsinden satış/maliyet ya da kâr/sermaye oranı söz konusu değildir.",
    },
  ]),
];
