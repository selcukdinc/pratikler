// 8. ünite (özetin 8. başlığı): işletmeler arası anlaşmalar ve birlikler.
// Hukuki ve ekonomik bağımsızlık özetin karşılaştırma tablosundaki gibidir.

import { ozet, type Soru } from "./yardimci.ts";

const U = 8;

export const unite8: Soru[] = [
  ...ozet(U, "u8-centilmenlik", [
    {
      ad: "centilmenlik-tanim",
      soru: "Aynı iş kolundaki işletmelerin fiyat, bölge ya da kota konusunda yaptığı, hukuki yaptırımı olmayan ve karşılıklı güvene dayanan sözlü anlaşmalara ne ad verilir?",
      secenekler: ["Centilmenlik anlaşması", "Kartel", "Konsern", "Tröst", "Konsorsiyum"],
      aciklama: "Sözlü, gayriresmi ve yaptırımı olmayan anlaşmalar **centilmenlik anlaşmasıdır**. Kartel ise yazılı sözleşmeye dayanır.",
    },
    {
      ad: "yaptirim",
      zorluk: 2,
      soru: "Centilmenlik anlaşmasını karteldan ayıran temel özellik hangisidir?",
      secenekler: [
        "Sözlü ve gayriresmi olup hukuki yaptırımının bulunmaması",
        "Aynı iş kolundaki işletmeler arasında yapılması",
        "Fiyat ve bölge konularını kapsaması",
        "İşletmelerin hukuki kişiliklerinin sürmesi",
        "Rekabeti azaltmaya yönelmesi",
      ],
      aciklama: "İkisi de aynı iş kolunda fiyat, bölge ya da kota üzerine yapılabilir ve hukuki kişilik sürer. Fark, centilmenlik anlaşmasının **sözlü ve yaptırımsız**, kartelin ise **yazılı sözleşme** olmasıdır.",
    },
  ]),

  ...ozet(U, "u8-kartel", [
    {
      ad: "kartel-tanim",
      soru: "Aynı üretim dalındaki rakip işletmelerin aralarındaki rekabeti kaldırmak ve tekel gücü kurmak için yaptıkları yazılı sözleşmelere ne ad verilir?",
      secenekler: ["Kartel", "Centilmenlik anlaşması", "Konsern", "Holding", "Ortak girişim"],
      aciklama: "Rekabeti kaldırıp tekel gücü kurmayı amaçlayan yazılı sözleşmeler **karteldir**; fiyat, miktar (kota) ve bölge kartelleri olabilir.",
    },
    {
      ad: "yatay",
      soru: "Kartel hangi işletmeler arasında kurulur?",
      secenekler: [
        "Aynı üretim dalındaki rakip işletmeler",
        "Farklı sektörlerdeki ilgisiz işletmeler",
        "Tedarikçi ile alıcı işletmeler",
        "Ana şirket ile bağlı ortaklıkları",
        "Kamu ile özel sektör işletmeleri",
      ],
      aciklama: "Kartel **yatay** bir birliktir: aynı üretim dalındaki **rakipler** arasında kurulur.",
    },
    {
      ad: "kartel-bagimsizlik",
      zorluk: 2,
      soru: "Kartele giren işletmelerin bağımsızlığı için hangisi doğrudur?",
      secenekler: [
        "Hukuki kişilik sürer, ekonomik serbesti anlaşma konusuyla sınırlanır",
        "Hukuki ve ekonomik bağımsızlıklarını tamamen kaybederler",
        "Hukuki kişilikleri sona erer, ekonomik bağımsızlıkları sürer",
        "Hukuki ve ekonomik bağımsızlıklarında hiçbir kayıp yaşamazlar",
        "Tek bir merkezi yönetim altında toplanıp ekonomik bağımsızlığı yitirirler",
      ],
      aciklama: "Kartelde **hukuki kişilik sürer**; ekonomik karar serbestisi ise anlaşmanın konusu (fiyat, kota, bölge) ile **sınırlanır**.",
    },
    {
      ad: "turler",
      soru: "Aşağıdakilerden hangisi özette sayılan kartel türlerinden biri değildir?",
      secenekler: ["Ar-Ge karteli", "Fiyat karteli", "Kota karteli", "Bölge karteli", "Miktar karteli"],
      aciklama: "Özet kartel türlerini **fiyat, miktar (kota) ve bölge** kartelleri olarak sayar.",
    },
  ]),

  ...ozet(U, "u8-konsern", [
    {
      ad: "konsern-tanim",
      soru: "Aynı ya da farklı iş kolundaki işletmelerin maliyetleri düşürmek ve teknik-finansal verimliliği artırmak için tek bir merkezi yönetim altında toplanmasına ne ad verilir?",
      secenekler: ["Konsern", "Kartel", "Tröst", "Konsorsiyum", "Centilmenlik anlaşması"],
      aciklama: "Rasyonalizasyon amacıyla tek merkezi yönetimde toplanma **konserndir**.",
    },
    {
      ad: "kartelden-fark",
      zorluk: 2,
      soru: "Konserni kartelden ayıran temel fark hangisidir?",
      secenekler: [
        "Amacının tekel değil üretim ve yönetim rasyonalizasyonu olması",
        "İşletmelerin hukuki kişiliklerini kaybetmesi",
        "Yalnızca aynı iş kolundaki işletmelerle kurulması",
        "Sözlü ve gayriresmi, yaptırımı olmayan bir anlaşma olması",
        "Proje süresiyle sınırlı, geçici bir iş ortaklığı olması",
      ],
      aciklama: "Özete göre konsernin kartelden farkı, amacının **tekel kurmak değil üretim ve yönetim rasyonalizasyonu** olmasıdır. Konsernde de hukuki kişilik sürer.",
    },
  ]),

  ...ozet(U, "u8-trost", [
    {
      ad: "trost-tanim",
      soru: "İşletmelerin hem hukuki hem ekonomik bağımsızlıklarını tamamen kaybederek tek dev bir yönetim altında birleşmesi ve piyasada mutlak tekel oluşturmasına ne ad verilir?",
      secenekler: ["Tröst", "Kartel", "Holding", "Konsern", "Konsorsiyum"],
      aciklama: "İki bağımsızlığın da kaybedildiği ve mutlak tekelin (monopol) oluştuğu birlik **tröstür**.",
    },
    {
      ad: "yasak",
      soru: "Rekabeti yok ettiği için anti-tröst yasalarıyla yasaklanmış olan birlik türü hangisidir?",
      secenekler: ["Tröst", "Konsorsiyum", "Holding", "Stratejik ittifak", "Ortak girişim"],
      aciklama: "Mutlak tekel kuran **tröst**, rekabeti yok ettiği için anti-tröst yasalarıyla yasaklanmıştır.",
    },
  ]),

  ...ozet(U, "u8-holding", [
    {
      ad: "holding-tanim",
      soru: "Kendisi doğrudan mal ya da hizmet üretmeyen, diğer şirketlerin hisse senetlerinin çoğunluğunu elinde tutarak onların yönetim ve denetimini sağlayan ana şirkete ne ad verilir?",
      secenekler: ["Holding", "Tröst", "Konsern", "Kartel", "Kooperatif"],
      aciklama: "Hisse çoğunluğu (%50+1 ya da kontrol payı) ile yavru şirketleri yöneten finansal çatı **holdingdir**.",
    },
    {
      ad: "holding-bagimsizlik",
      zorluk: 2,
      soru: "Holdinge bağlı yavru şirketlerin bağımsızlığı için hangisi doğrudur?",
      secenekler: [
        "Tüzel kişilikleri sürer, ekonomik bağımsızlıkları yoktur",
        "Tüzel kişilikleri sona erer, ekonomik bağımsızlıkları sürer",
        "Hem hukuki hem ekonomik bağımsızlıkları sürer",
        "Hem hukuki hem ekonomik bağımsızlıklarını kaybederler",
        "Yalnızca proje süresince bağımsızlıklarını kaybederler",
      ],
      aciklama: "Holdingde yavru şirketlerin **tüzel kişiliği sürer**, ancak onları ana şirket yönettiği için **ekonomik bağımsızlıkları yoktur**.",
    },
    {
      ad: "kontrol-payi",
      soru: "Özete göre holding, yavru şirketleri hangi yolla kontrol eder?",
      secenekler: [
        "Hisse senetlerinin çoğunluğunu elinde bulundurarak",
        "Onlarla sözlü fiyat anlaşması yaparak",
        "Onların tüzel kişiliğini sona erdirerek",
        "Onlara marka kullandırarak",
        "Onlarla geçici iş ortaklığı kurarak",
      ],
      aciklama: "Holding, yavru şirketlerin **hisse senetlerinin çoğunluğunu** (%50+1 ya da kontrol payı) elinde tutarak yönetimi ve denetimi sağlar.",
    },
  ]),

  ...ozet(U, "u8-konsorsiyum", [
    {
      ad: "konsorsiyum-tanim",
      soru: "Tek bir işletmenin gücünü aşan köprü, baraj ya da tünel gibi büyük projeler için birden fazla işletmenin proje süresiyle sınırlı kurduğu geçici iş ortaklığı hangisidir?",
      secenekler: ["Konsorsiyum", "Kartel", "Tröst", "Holding", "Konsern"],
      aciklama: "Büyük bir proje için kurulan, **proje süresiyle sınırlı geçici** ortaklık **konsorsiyumdur**.",
    },
    {
      ad: "gecici",
      zorluk: 2,
      soru: "Konsorsiyumu diğer işletme birliklerinden ayıran temel özellik hangisidir?",
      secenekler: [
        "Proje süresiyle sınırlı ve geçici olması",
        "Piyasada mutlak tekel kurması",
        "İşletmelerin hukuki kişiliğini sona erdirmesi",
        "Sözlü ve yaptırımsız olması",
        "Hisse çoğunluğuna dayanması",
      ],
      aciklama: "Konsorsiyum **geçicidir**: proje bitince sona erer. Üyeler hem hukuki hem ekonomik bağımsızlıklarını korur.",
    },
  ]),

  ...ozet(U, "u8-karsilastirma", [
    {
      ad: "ikisi-yok",
      soru: "Aşağıdaki birliklerden hangisinde işletmeler hem hukuki hem ekonomik bağımsızlıklarını kaybeder?",
      secenekler: ["Tröst", "Kartel", "Konsern", "Holding", "Konsorsiyum"],
      aciklama: "Özetteki tabloda hukuki ve ekonomik bağımsızlığın ikisinin de **yok** olduğu tek birlik **tröstür**.",
    },
    {
      ad: "ikisi-var",
      zorluk: 2,
      soru: "Özetteki tabloya göre aşağıdaki birliklerin hangisinde hem hukuki hem ekonomik bağımsızlık korunur?",
      secenekler: ["Konsorsiyum", "Tröst", "Holding", "Konsern", "Kartel"],
      aciklama: "Hukuki ve ekonomik bağımsızlığın ikisinin de korunduğu birlikler **centilmenlik anlaşması** ve **konsorsiyumdur**. Konsern ve holdingde ekonomik bağımsızlık yoktur, kartelde kısıtlanır.",
    },
    {
      ad: "hukuki-var-ekonomik-yok",
      zorluk: 3,
      sabit: true,
      soru: "Aşağıdaki birliklerden hangilerinde işletmelerin hukuki kişiliği sürdüğü hâlde ekonomik bağımsızlıkları yoktur?\n\nI. Konsern\nII. Tröst\nIII. Holding\nIV. Konsorsiyum",
      secenekler: ["Yalnız I", "I ve III", "II ve III", "I, III ve IV", "II ve IV"],
      dogru: 1,
      aciklama: "Özetteki tabloda **konsern** ve **holding** hukuki bağımsızlık \"var\", ekonomik bağımsızlık \"yok\" olarak verilir. Tröstte ikisi de yoktur, konsorsiyumda ikisi de vardır.",
    },
    {
      ad: "tekel-amac",
      zorluk: 2,
      sabit: true,
      soru: "Aşağıdaki birliklerden hangilerinin amacı rekabeti kaldırarak piyasada tekel gücü kurmaktır?\n\nI. Kartel\nII. Konsern\nIII. Tröst\nIV. Konsorsiyum",
      secenekler: ["Yalnız I", "I ve III", "II ve IV", "I, II ve III", "III ve IV"],
      dogru: 1,
      aciklama: "**Kartel** rekabeti kaldırıp tekel gücü, **tröst** mutlak tekel kurmayı amaçlar. Konsernin amacı rasyonalizasyon, konsorsiyumunki büyük bir projeyi gerçekleştirmektir.",
    },
  ]),
];
