// 4. ünite (özetin 4. başlığı): açık sistem olarak işletme; iç, yakın, uzak
// ve uluslararası çevre.

import { ozet, type Soru } from "./yardimci.ts";

const U = 4;

export const unite4: Soru[] = [
  ...ozet(U, "u4-katman", [
    {
      ad: "acik-sistem",
      soru: "İşletmenin çevresiyle sürekli girdi-çıktı alışverişinde bulunması onun nasıl bir sistem olduğunu gösterir?",
      secenekler: ["Açık sistem", "Kapalı sistem", "Mekanik sistem", "Statik sistem", "Bağımsız sistem"],
      aciklama: "Özete göre işletme kapalı bir kutu değil, çevresiyle sürekli girdi-çıktı alışverişi yapan **açık bir sistemdir**.",
    },
    {
      ad: "kademe-olcut",
      zorluk: 2,
      soru: "Özette işletmenin çevresi hangi ölçütlere göre kademelendirilir?",
      secenekler: [
        "Kontrol edilebilirlik ve etkileşim yakınlığı",
        "Çalışan sayısı ve yıllık satış hasılatı",
        "Hukuki yapı ve kullanılan sermaye miktarı",
        "Kâr oranı ve sektördeki pazar payı",
        "Coğrafi uzaklık ve bölgenin nüfusu",
      ],
      aciklama: "Çevre katmanları **kontrol edilebilirlik ve etkileşim yakınlığına** göre ayrılır: iç, yakın, uzak ve uluslararası çevre.",
    },
    {
      ad: "ic-cevre",
      soru: "Aşağıdakilerden hangisi işletmenin iç çevresinde yer alır?",
      secenekler: ["Örgüt kültürü", "Tedarikçiler", "Enflasyon oranı", "Rakip işletmeler", "Uluslararası Para Fonu"],
      aciklama: "İç çevre; işletme sahipleri ve ortaklar, yöneticiler, çalışanlar, **örgüt kültürü** ve yapısından oluşur. Tedarikçi ve rakip yakın, enflasyon uzak, IMF uluslararası çevrededir.",
    },
    {
      ad: "ic-cevre-calisan",
      soru: "İşletmenin yöneticileri ve çalışanları hangi çevre katmanındadır?",
      secenekler: ["İç çevre", "Yakın çevre", "Uzak çevre", "Uluslararası çevre", "Makro çevre"],
      aciklama: "Sahipler, yöneticiler ve çalışanlar işletmenin **iç çevresidir**; işletmenin en çok kontrol edebildiği katmandır.",
    },
  ]),

  ...ozet(U, "u4-yakin", [
    {
      ad: "musteri",
      soru: "Özete göre işletmenin varlık nedeni olan yakın çevre unsuru hangisidir?",
      secenekler: ["Müşteriler", "Tedarikçiler", "Rakipler", "Sendikalar", "Finans kurumları"],
      aciklama: "Ürettiği mal ve hizmetleri satın alan **müşteriler** işletmenin varlık nedenidir.",
    },
    {
      ad: "tedarikci",
      soru: "İşletmeye üretim için gerekli hammadde, yarı mamul, enerji ve makine sağlayan işletmelere ne ad verilir?",
      secenekler: ["Tedarikçiler", "Müşteriler", "Rakipler", "Aracı kurumlar", "Sendikalar"],
      aciklama: "Girdileri sağlayan işletmeler **tedarikçilerdir**; yakın (sektörel) çevrenin parçasıdırlar.",
    },
    {
      ad: "finans",
      soru: "Leasing ve faktoring kuruluşları işletmenin hangi yakın çevre unsuruna girer?",
      secenekler: ["Finans kurumları", "Tedarikçiler", "Rakipler", "Müşteriler", "Sendikalar"],
      aciklama: "Bankalar, sigorta şirketleri, finansal kiralama (leasing) ve faktoring kuruluşları işletmenin fon ihtiyacını karşılayan **finans kurumlarıdır**.",
    },
    {
      ad: "rakip",
      soru: "Aynı pazarda benzer mal ve hizmetleri üreterek aynı müşteri kitlesine hitap eden işletmeler hangisidir?",
      secenekler: ["Rakipler", "Tedarikçiler", "Ortak girişimler", "Bağlı ortaklıklar", "Bayiler"],
      aciklama: "Aynı müşteri kitlesine benzer ürünlerle hitap eden diğer işletmeler **rakiplerdir**.",
    },
    {
      ad: "yakin-olmayan",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi işletmenin yakın (sektörel) çevresinde yer almaz?",
      secenekler: ["Döviz kurları", "Müşteriler", "Tedarikçiler", "İşçi sendikaları", "Bankalar"],
      aciklama: "Döviz kurları milli gelir ve enflasyon gibi **uzak çevrenin** (ekonomik çevre) göstergesidir. Diğerleri işletmeyle doğrudan temas halindeki yakın çevre unsurlarıdır.",
    },
    {
      ad: "isgucu",
      soru: "Üniversiteler, iş kurumu ve işçi sendikaları işletmenin hangi yakın çevre unsuruyla ilgilidir?",
      secenekler: ["İşgücü piyasası ve sendikalar", "Finans kurumları", "Tedarikçiler", "Müşteriler", "Teknolojik çevre"],
      aciklama: "Nitelikli emek sağlayan çevre (üniversiteler, iş kurumu) ve çalışanların haklarını koruyan sendikalar **işgücü piyasası ve sendikalar** başlığındadır.",
    },
  ]),

  ...ozet(U, "u4-uzak", [
    {
      ad: "uzak-tanim",
      soru: "İşletmenin tek başına kontrol edemediği ancak uyum sağlamak zorunda olduğu genel koşullar hangi çevreyi oluşturur?",
      secenekler: ["Uzak çevre", "İç çevre", "Yakın çevre", "Örgüt kültürü", "Sektörel çevre"],
      aciklama: "Ekonomik, politik-yasal, sosyo-kültürel, teknolojik ve doğal koşullar işletmenin **uzak (genel, makro) çevresidir**.",
    },
    {
      ad: "ekonomik-cevre",
      soru: "Faiz oranları, işsizlik oranı ve gelir dağılımı uzak çevrenin hangi boyutuna aittir?",
      secenekler: ["Ekonomik çevre", "Politik ve yasal çevre", "Sosyo-kültürel çevre", "Teknolojik çevre", "Doğal çevre"],
      aciklama: "Milli gelir, enflasyon, faiz, döviz kuru, işsizlik, vergi oranları ve gelir dağılımı **ekonomik çevrenin** göstergeleridir.",
    },
    {
      ad: "demografik",
      soru: "Nüfusun yaş ve cinsiyet yapısı, eğitim düzeyi ve kentleşme oranı uzak çevrenin hangi boyutundadır?",
      secenekler: ["Sosyo-kültürel ve demografik çevre", "Ekonomik çevre", "Teknolojik çevre", "Politik ve yasal çevre", "Doğal çevre"],
      aciklama: "Nüfusun büyüklüğü, yaş ve cinsiyet yapısı, eğitim ve kentleşme **demografik**; değer yargıları, gelenekler ve yaşam tarzı kültürel öğelerdir.",
    },
    {
      ad: "politik",
      soru: "Siyasi istikrar, hükümet politikaları ve rekabet kanunları uzak çevrenin hangi boyutundadır?",
      secenekler: ["Politik ve yasal çevre", "Ekonomik çevre", "Sosyo-kültürel çevre", "Teknolojik çevre", "Uluslararası çevre"],
      aciklama: "Devletin yönetim biçimi, hükümet politikaları, siyasi istikrar ve ticaret, iş, vergi ve rekabet kanunları **politik ve yasal çevredir**.",
    },
    {
      ad: "teknolojik",
      soru: "Ar-Ge faaliyetleri, üretimde otomasyon ve dijitalleşme gelişmeleri hangi çevre boyutuna girer?",
      secenekler: ["Teknolojik çevre", "Doğal çevre", "Ekonomik çevre", "Yakın çevre", "Politik çevre"],
      aciklama: "Yeni buluşlar, Ar-Ge, otomasyon ve dijitalleşme **teknolojik çevrenin** konusudur.",
    },
    {
      ad: "dogal",
      soru: "İklim koşulları, doğal kaynakların bulunabilirliği ve sürdürülebilirlik düzenlemeleri hangi çevreyle ilgilidir?",
      secenekler: ["Doğal çevre", "Teknolojik çevre", "Sosyo-kültürel çevre", "İç çevre", "Uluslararası çevre"],
      aciklama: "İklim, doğal kaynaklar, çevre kirliliği ve sürdürülebilirlik **doğal (ekolojik) çevredir**.",
    },
    {
      ad: "kulturel",
      zorluk: 2,
      soru: "Toplumun değer yargıları, inançları ve yaşam tarzındaki değişim bir gıda şirketinin ürün yelpazesini değiştirmesine yol açmıştır. Bu etki hangi çevreden gelmektedir?",
      secenekler: ["Sosyo-kültürel çevre", "Ekonomik çevre", "Yakın çevre", "Teknolojik çevre", "İç çevre"],
      aciklama: "Değer yargıları, inançlar, gelenekler ve yaşam tarzı uzak çevrenin **sosyo-kültürel** boyutudur.",
    },
  ]),

  ...ozet(U, "u4-uluslararasi", [
    {
      ad: "imf",
      soru: "IMF ve Dünya Bankası gibi küresel finans kuruluşları işletmenin hangi çevresinde yer alır?",
      secenekler: ["Uluslararası çevre", "Yakın çevre", "İç çevre", "Uzak çevrenin ekonomik boyutu", "Sektörel çevre"],
      aciklama: "Çok uluslu şirketler, uluslararası hukuk ve anlaşmalar, ekonomik birlikler (AB, NAFTA) ve **küresel finans kuruluşları** (IMF, Dünya Bankası) uluslararası çevredir.",
    },
    {
      ad: "ab",
      soru: "Avrupa Birliği gibi ekonomik birlikler özette hangi çevre katmanında yer alır?",
      secenekler: ["Uluslararası çevre", "Uzak çevre", "Yakın çevre", "İç çevre", "Görev çevresi"],
      aciklama: "AB ve NAFTA gibi **ekonomik birlikler** uluslararası (küresel) çevrenin unsurlarıdır.",
    },
    {
      ad: "eslestirme",
      zorluk: 3,
      sabit: true,
      soru: "Aşağıdaki çevre unsurlarından hangileri uzak (genel) çevreye aittir?\n\nI. Enflasyon\nII. Tedarikçiler\nIII. Kentleşme oranı\nIV. Çalışanlar",
      secenekler: ["Yalnız I", "I ve III", "II ve IV", "I, II ve III", "II, III ve IV"],
      dogru: 1,
      aciklama: "**Enflasyon** (ekonomik çevre) ve **kentleşme oranı** (demografik çevre) uzak çevrededir. Tedarikçiler yakın, çalışanlar iç çevrededir.",
    },
  ]),
];
