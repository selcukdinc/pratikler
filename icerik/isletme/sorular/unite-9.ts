// 9. ünite (özetin 9. başlığı): kuruluş çalışmaları, fizibilite, kapasite
// türleri, kapasite kullanım oranı, atıl kapasite ve başabaş noktası. Hesap
// soruları özetteki formüllerle çözülür; sayılar soruya özgüdür.

import { ozet, type Soru } from "./yardimci.ts";

const U = 9;

export const unite9: Soru[] = [
  ...ozet(U, "u9-asamalar", [
    {
      ad: "kurulus-tanim",
      soru: "Bir işletmenin yatırım fikri olarak doğmasından fiilen kurulup üretime geçmesine kadar geçen araştırma, planlama ve uygulama aşamalarının bütününe ne ad verilir?",
      secenekler: ["Kuruluş çalışmaları", "Kapasite planlaması", "Başabaş analizi", "Dikey büyüme", "Rasyonalizasyon"],
      aciklama: "Bu sürecin bütünü **kuruluş çalışmaları** (fizibilite, yapılabilirlik süreci) olarak adlandırılır.",
    },
    {
      ad: "sira",
      zorluk: 2,
      soru: "Kuruluş sürecinin aşamaları hangi sırayla gerçekleşir?",
      secenekler: [
        "Yatırım fikri → Ön araştırmalar → Yatırım kararı → Uygulama → Normal üretime geçiş",
        "Ön araştırmalar → Yatırım fikri → Uygulama → Yatırım kararı → Normal üretime geçiş",
        "Yatırım fikri → Yatırım kararı → Ön araştırmalar → Uygulama → Normal üretime geçiş",
        "Yatırım kararı → Yatırım fikri → Ön araştırmalar → Normal üretime geçiş → Uygulama",
        "Yatırım fikri → Uygulama → Ön araştırmalar → Yatırım kararı → Normal üretime geçiş",
      ],
      aciklama: "Önce **yatırım fikri** doğar, **ön araştırmalarla** (fizibilite) incelenir, olumluysa **yatırım kararı** alınır, **uygulama** yapılır ve sonunda **normal üretime** geçilir.",
    },
    {
      ad: "deneme-uretim",
      soru: "Deneme üretimi kuruluş sürecinin hangi aşamasında yapılır?",
      secenekler: ["Uygulama", "Yatırım fikrinin doğuşu", "Ön araştırmalar", "Değerlendirme ve yatırım kararı", "Normal üretime geçiş"],
      aciklama: "Arazinin alınması, inşaat, makinelerin montajı, personelin işe alınması ve **deneme üretimi** **uygulama** aşamasındadır.",
    },
    {
      ad: "fikir",
      soru: "Girişimcinin pazardaki karşılanmamış bir ihtiyacı ya da talep boşluğunu fark etmesi kuruluş sürecinin hangi aşamasıdır?",
      secenekler: ["Yatırım fikrinin doğuşu", "Ön araştırmalar", "Uygulama", "Yatırım kararı", "Normal üretime geçiş"],
      aciklama: "Karşılanmamış ihtiyacı, talep boşluğunu ya da teknolojik yeniliği fark etmek **yatırım fikrinin doğuşudur**.",
    },
  ]),

  ...ozet(U, "u9-fizibilite", [
    {
      ad: "ilk-adim",
      soru: "Talep tahmini, pazar büyüklüğü, rakip analizi, kapasite ve kuruluş yerinin belirlendiği, fizibilitenin en kritik ve ilk adımı olan araştırma hangisidir?",
      secenekler: ["Ekonomik araştırma", "Teknik araştırma", "Finansal araştırma", "Hukuki araştırma", "Örgütsel araştırma"],
      aciklama: "Özete göre fizibilitenin en kritik ve ilk adımı **ekonomik (pazar) araştırmadır**.",
    },
    {
      ad: "teknik",
      soru: "Üretim teknolojisinin seçimi, makine ve teçhizatın belirlenmesi ve fabrika bina planı fizibilitenin hangi bölümünde incelenir?",
      secenekler: ["Teknik araştırma", "Ekonomik araştırma", "Finansal araştırma", "Hukuki araştırma", "Pazar araştırması"],
      aciklama: "Teknoloji, makine, bina planı, iş akışı, hammadde ve enerji gereksinimi mühendislik açısından **teknik araştırmada** incelenir.",
    },
    {
      ad: "finansal",
      soru: "Sabit sermaye ve işletme sermayesi tutarının hesaplandığı, başabaş noktasının ve net bugünkü değerin analiz edildiği araştırma hangisidir?",
      secenekler: ["Finansal araştırma", "Teknik araştırma", "Ekonomik araştırma", "Hukuki araştırma", "Örgütsel araştırma"],
      aciklama: "Sermaye ihtiyacı, finansman kaynakları, bütçeler, başabaş noktası ve kârlılık ölçüleri (NBD, İVO, geri ödeme süresi) **finansal araştırmanın** konusudur.",
    },
    {
      ad: "hukuki",
      soru: "İşletmenin hukuki statüsü, ruhsatlar, ÇED raporu ve teşvik belgeleri fizibilitenin hangi bölümünde belirlenir?",
      secenekler: ["Hukuki ve örgütsel araştırma", "Teknik araştırma", "Ekonomik araştırma", "Finansal araştırma", "Pazar araştırması"],
      aciklama: "Hukuki statü (A.Ş., Ltd.), izinler, ruhsatlar, ÇED raporu, teşvik belgeleri ve organizasyon şeması **hukuki (yasal) ve örgütsel araştırmadadır**.",
    },
    {
      ad: "sabit-isletme",
      zorluk: 2,
      soru: "Finansal araştırmada aşağıdakilerden hangisi işletme (çalışma) sermayesine girer?",
      secenekler: ["Hammadde", "Arazi", "Fabrika binası", "Makine", "Teçhizat"],
      aciklama: "Arazi, bina ve makine **sabit sermayedir**; hammadde, işçilik ve nakit ise **işletme (çalışma) sermayesidir**.",
    },
    {
      ad: "yatirim-olcut",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi finansal araştırmada yatırımın kârlılığını analiz etmek için kullanılan ölçütlerden biri değildir?",
      secenekler: ["Kapasite kullanım oranı", "Net bugünkü değer", "İç verim oranı", "Geri ödeme süresi", "Başabaş noktası"],
      aciklama: "Özet finansal araştırmada başabaş noktası, **net bugünkü değer, iç verim oranı ve geri ödeme süresini** sayar. Kapasite kullanım oranı, kurulmuş bir işletmenin fiili kullanımını ölçer.",
    },
  ]),

  ...ozet(U, "u9-kapasite", [
    {
      ad: "kapasite-tanim",
      soru: "Bir işletmenin elindeki üretim faktörleriyle belirli bir zaman diliminde gerçekleştirebileceği üretim miktarına ne ad verilir?",
      secenekler: ["Kapasite", "Verimlilik", "Başabaş noktası", "Rantabilite", "Katkı payı"],
      aciklama: "Belirli bir dönemde (genellikle 1 yıl) gerçekleştirilebilecek üretim miktarı **kapasitedir**.",
    },
    {
      ad: "teorik",
      soru: "Makine ve tesislerin hiç duraklamadan, yılda 365 gün 24 saat tam verimle çalışması durumunda ulaşılabilecek, pratikte imkânsız kapasite hangisidir?",
      secenekler: ["Teorik kapasite", "Pratik kapasite", "Fiili kapasite", "Optimum kapasite", "Atıl kapasite"],
      aciklama: "Kağıt üzerindeki en yüksek üretim miktarı **teorik (maksimum, tasarım) kapasitedir**; pratikte ulaşılamaz.",
    },
    {
      ad: "pratik",
      soru: "Teorik kapasiteden zorunlu bakım-onarım, resmi tatil, vardiya değişimi ve normal fireler düşüldükten sonra kalan kapasite hangisidir?",
      secenekler: ["Pratik kapasite", "Fiili kapasite", "Atıl kapasite", "Aşırı kapasite", "Teorik kapasite"],
      aciklama: "Kaçınılmaz kesintiler düşüldükten sonra normal şartlarda ulaşılabilecek en yüksek kapasite **pratik (normal) kapasitedir**.",
    },
    {
      ad: "fiili",
      soru: "İşletmenin bir dönemde talep yetersizliği, hammadde sıkıntısı ya da grev gibi nedenlerle gerçekten ürettiği miktar hangisidir?",
      secenekler: ["Fiili kapasite", "Pratik kapasite", "Teorik kapasite", "Optimum kapasite", "Tasarım kapasitesi"],
      aciklama: "Gerçekte üretilen miktar **fiili (gerçekleşen, aktüel) kapasitedir**.",
    },
    {
      ad: "asiri",
      zorluk: 2,
      soru: "Olağanüstü talep artışında fazla mesai yapılarak ya da bakım süreleri kısaltılarak pratik kapasitenin üzerinde üretim yapılmasına ne ad verilir?",
      secenekler: ["Aşırı kapasite", "Atıl kapasite", "Optimum kapasite", "Teorik kapasite", "Fiili kapasite"],
      aciklama: "Fiili kapasitenin pratik kapasiteyi aştığı durum **aşırı (fazla) kapasitedir**.",
    },
    {
      ad: "optimum",
      zorluk: 2,
      soru: "Birim başına düşen ortalama maliyetin en düşük olduğu üretim düzeyine ne ad verilir?",
      secenekler: ["Optimum kapasite", "Teorik kapasite", "Başabaş noktası", "Atıl kapasite", "Aşırı kapasite"],
      aciklama: "Ortalama maliyetin (Toplam maliyet / Üretim miktarı) **en düşük** olduğu düzey **optimum kapasitedir**; normal şartlarda pratik kapasiteye karşılık gelir.",
    },
    {
      ad: "optimum-pratik",
      zorluk: 3,
      soru: "Özete göre optimum kapasite normal şartlarda hangi kapasiteye karşılık gelir?",
      secenekler: ["Pratik kapasite", "Teorik kapasite", "Fiili kapasite", "Atıl kapasite", "Aşırı kapasite"],
      aciklama: "Optimum kapasite normal şartlarda **pratik (normal) kapasiteye** karşılık gelir.",
    },
    {
      ad: "siralama",
      zorluk: 3,
      soru: "Talebin yetersiz olduğu bir yılda bir işletmenin kapasiteleri için hangi sıralama doğrudur?",
      secenekler: [
        "Teorik > Pratik > Fiili",
        "Fiili > Pratik > Teorik",
        "Pratik > Teorik > Fiili",
        "Teorik > Fiili > Pratik",
        "Fiili > Teorik > Pratik",
      ],
      aciklama: "Teorik kapasite kesintisiz çalışma varsayar, pratik kapasite ondan kaçınılmaz kesintiler düşülerek bulunur. Talep yetersizse fiili üretim pratik kapasitenin de altında kalır: **Teorik > Pratik > Fiili**.",
    },
  ]),

  ...ozet(U, "u9-kko", [
    {
      ad: "atil-formul",
      soru: "Atıl (boş) kapasite nasıl hesaplanır?",
      secenekler: ["Pratik kapasite − Fiili kapasite", "Teorik kapasite − Pratik kapasite", "Fiili kapasite − Pratik kapasite", "Teorik kapasite − Fiili kapasite", "Fiili kapasite / Pratik kapasite"],
      aciklama: "Atıl kapasite, pratik (normal) kapasitenin kullanılmayan kısmıdır: **Pratik kapasite − Fiili kapasite**.",
    },
    {
      ad: "kko-formul",
      soru: "Kapasite kullanım oranı (KKO) nasıl hesaplanır?",
      secenekler: [
        "(Fiili kapasite / Pratik kapasite) × 100",
        "(Pratik kapasite / Teorik kapasite) × 100",
        "(Teorik kapasite / Fiili kapasite) × 100",
        "(Pratik kapasite − Fiili kapasite) × 100",
        "(Fiili kapasite / Teorik kapasite) × 100",
      ],
      aciklama: "KKO, normal kapasitenin yüzde kaçının fiilen kullanıldığını gösterir: **(Fiili / Pratik) × 100**.",
    },
    {
      ad: "kko-hesap",
      zorluk: 2,
      soru: "Pratik kapasitesi yılda 50.000 birim olan bir işletme bu yıl 40.000 birim üretmiştir. Kapasite kullanım oranı yüzde kaçtır?",
      secenekler: ["%80", "%125", "%20", "%40", "%90"],
      aciklama: "KKO = (40.000 / 50.000) × 100 = **%80**. %125 ters orandır, %20 ise atıl kapasitenin payıdır.",
    },
    {
      ad: "atil-hesap",
      zorluk: 2,
      soru: "Teorik kapasitesi 120.000, pratik kapasitesi 100.000 birim olan bir işletme yılda 70.000 birim üretmektedir. Atıl kapasite kaç birimdir?",
      secenekler: ["30.000", "50.000", "20.000", "70.000", "100.000"],
      aciklama: "Atıl kapasite = Pratik − Fiili = 100.000 − 70.000 = **30.000** birim. Teorik kapasite bu hesapta kullanılmaz; 50.000 teorikten çıkarılarak bulunan yanlış sonuçtur.",
    },
    {
      ad: "kko-tersten",
      zorluk: 3,
      soru: "Pratik kapasitesi 80.000 birim olan bir işletmenin kapasite kullanım oranı %75'tir. Bu işletmenin atıl kapasitesi kaç birimdir?",
      secenekler: ["20.000", "60.000", "75.000", "5.000", "40.000"],
      aciklama: "Fiili kapasite = 80.000 × 0,75 = 60.000 birim; atıl kapasite = 80.000 − 60.000 = **20.000** birim.",
    },
    {
      ad: "kko-asiri",
      zorluk: 2,
      soru: "Kapasite kullanım oranı %110 olarak hesaplanan bir işletme için hangisi söylenebilir?",
      secenekler: [
        "Aşırı kapasiteyle çalışmaktadır",
        "Atıl kapasitesi vardır",
        "Teorik kapasitesine ulaşmıştır",
        "Başabaş noktasının altındadır",
        "Optimum kapasitede çalışmaktadır",
      ],
      aciklama: "KKO %100'ü aşıyorsa fiili kapasite pratik kapasiteden büyüktür; bu **aşırı (fazla) kapasitedir**.",
    },
  ]),

  ...ozet(U, "u9-bbn", [
    {
      ad: "tanim",
      soru: "Toplam gelirlerin toplam giderlere tam olarak eşit olduğu, işletmenin ne kâr ne zarar ettiği üretim ve satış düzeyine ne ad verilir?",
      secenekler: ["Başabaş noktası", "Optimum kapasite", "Pratik kapasite", "Katkı payı", "Atıl kapasite"],
      aciklama: "Kârın sıfır olduğu düzey **başabaş noktasıdır** (sıfır kâr, ölü nokta).",
    },
    {
      ad: "formul",
      soru: "TSM toplam sabit maliyeti, F birim satış fiyatını, BDM birim değişken maliyeti gösteriyor. Başabaş noktasındaki üretim miktarı hangi formülle bulunur?",
      secenekler: ["TSM / (F − BDM)", "(F − BDM) / TSM", "TSM × (F − BDM)", "(TSM − BDM) / F", "TSM / (BDM − F)"],
      aciklama: "Q(BBN) = **TSM / (F − BDM)**. Paydadaki F − BDM birim katkı payıdır.",
    },
    {
      ad: "hesap",
      zorluk: 2,
      soru: "Toplam sabit maliyetleri 240.000 TL olan bir işletme ürününü 50 TL'ye satmakta, birim değişken maliyeti 30 TL'dir. Başabaş noktası kaç birimdir?",
      secenekler: ["12.000", "4.800", "8.000", "3.000", "6.000"],
      aciklama: "Birim katkı payı = 50 − 30 = 20 TL. Q(BBN) = 240.000 / 20 = **12.000** birim. 4.800 fiyata, 8.000 değişken maliyete bölünerek bulunan yanlış sonuçlardır.",
    },
    {
      ad: "katki-payi",
      soru: "Birim satış fiyatı ile birim değişken maliyet arasındaki farka ne ad verilir?",
      secenekler: ["Birim katkı payı", "Birim sabit maliyet", "Ortalama maliyet", "Net kâr", "Rant"],
      aciklama: "Başabaş formülünün paydasındaki **F − BDM** ifadesine **birim katkı payı** denir.",
    },
    {
      ad: "sabit-degisken",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi değişken maliyettir?",
      secenekler: ["Direkt işçilik", "Kira", "Amortisman", "Yönetici maaşları", "Sigorta primi"],
      aciklama: "Hammadde ve **direkt işçilik** üretim miktarıyla doğru orantılı arttığı için değişken maliyettir. Kira, amortisman ve yönetici maaşları üretimden bağımsız sabit maliyettir.",
    },
    {
      ad: "alti",
      soru: "Üretim ve satış başabaş noktasının altında kalırsa işletme için ne olur?",
      secenekler: ["Zarar eder", "Kâr eder", "Ne kâr ne zarar eder", "Atıl kapasitesi sıfırlanır", "Optimum kapasiteye ulaşır"],
      aciklama: "Başabaş noktasının **altında** işletme zarar eder, **üstünde** kâr etmeye başlar.",
    },
    {
      ad: "fiyat-artis",
      zorluk: 3,
      soru: "Sabit maliyetler ve birim değişken maliyet değişmeden birim satış fiyatı artırılırsa başabaş noktası nasıl değişir?",
      secenekler: ["Azalır", "Artar", "Değişmez", "Sıfır olur", "Sabit maliyete eşit olur"],
      aciklama: "Fiyat artınca birim katkı payı (F − BDM) büyür; sabit maliyet daha büyük bir sayıya bölündüğü için başabaş miktarı **azalır**.",
    },
    {
      ad: "kar-hesap",
      zorluk: 3,
      soru: "Sabit maliyetleri 100.000 TL, birim fiyatı 25 TL ve birim değişken maliyeti 15 TL olan bir işletme 15.000 birim satarsa kârı ne olur?",
      secenekler: ["50.000 TL", "150.000 TL", "100.000 TL", "10.000 TL", "Zarar eder"],
      aciklama: "Katkı payı 10 TL, başabaş 100.000 / 10 = 10.000 birim. 15.000 birimde toplam katkı 15.000 × 10 = 150.000 TL; kâr = 150.000 − 100.000 = **50.000 TL**.",
    },
  ]),
];
