// 4. ünite (Biyomedikal Sinyaller 2 sunumu): tıbbi görüntüleme yöntemleri
// (röntgen, BT, MR, USG, nükleer tıp, PET-CT), genomik veri, histopatoloji.

import { sunum, type Soru } from "./yardimci.ts";

const U = 4;

export const unite4: Soru[] = [
  ...sunum(U, "u4-yontem", [
    {
      id: "bm-u4-islevsel", tip: "mcq", zorluk: 1,
      soru: "Organ ve hücrelerin yapısından çok işlevsel (fizyolojik) durumunu inceleyen görüntüleme yöntemi hangisidir?",
      secenekler: ["Nükleer tıp", "Direkt radyografi", "Bilgisayarlı tomografi", "Histopatolojik görüntüleme"],
      dogru: 0,
      aciklama: "Nükleer tıp radyofarmasötiklerle organların **işlevini ve metabolizmasını** inceler. Röntgen, BT ve histopatoloji yapıyı gösterir.",
    },
    {
      id: "bm-u4-radyasyonsuz", tip: "mcq", zorluk: 1,
      soru: "Aşağıdaki yöntemlerden hangi ikisi iyonlaştırıcı radyasyon kullanmaz?",
      secenekler: ["MR ve ultrasonografi", "Röntgen ve BT", "BT ve PET", "Röntgen ve sintigrafi"],
      dogru: 0,
      aciklama: "**MR** manyetik alan ve radyo dalgası, **USG** ses dalgası kullanır. Röntgen ve BT X ışını, PET ve sintigrafi radyoaktif madde kullanır.",
    },
    {
      id: "bm-u4-tanim", tip: "tf", zorluk: 1,
      soru: "Tıbbi görüntüleme, deri ve kemiklerin gizlediği iç yapıları ortaya çıkarmanın yanı sıra hastalıkları teşhis ve tedavi etmeyi amaçlar.",
      dogru: true,
      aciklama: "Doğru. Vücudun iç kısımlarının ya da organ işlevinin görsel temsilini oluşturan teknikler bütünüdür.",
    },
  ]),

  ...sunum(U, "u4-rontgen", [
    {
      id: "bm-u4-kemik-beyaz", tip: "mcq", zorluk: 1,
      soru: "Röntgen görüntüsünde kemikler neden parlak beyaz görünür?",
      secenekler: ["Radyasyonu kolayca emdikleri için", "Radyasyonu hiç emmedikleri için", "Ses dalgalarını yansıttıkları için", "Kontrast maddeyi biriktirdikleri için"],
      dogru: 0,
      aciklama: "Yoğun nesneler (kemikler) radyasyonu **kolayca emer** ve beyaz görünür; yumuşak dokular daha az emer ve gri, koyu tonlarda görünür.",
    },
    {
      id: "bm-u4-rontgen-kullanim", tip: "tf", zorluk: 1,
      soru: "X ışınlarının en yaygın kullanımı kemik kırıklarının kontrol edilmesidir.",
      dogru: true,
      aciklama: "Doğru. Zatürre, akciğer enfeksiyonu, diş yapısı ve yaralanmalar da röntgen çekme nedenleri arasındadır.",
    },
    {
      id: "bm-u4-karin", tip: "mcq", zorluk: 2,
      soru: "Böbrek ve mesane taşı gibi sorunların tanısında hangi röntgen türünden yararlanılır?",
      secenekler: ["Karın röntgeni", "Göğüs röntgeni", "Baş röntgeni", "Diş röntgeni"],
      dogru: 0,
      aciklama: "Sindirim sistemi belirtileri ile böbrek ve mesane taşında **karın röntgeni** kullanılır.",
    },
  ]),

  ...sunum(U, "u4-bt", [
    {
      id: "bm-u4-tomos", tip: "mcq", zorluk: 2,
      soru: "\"Tomografi\" kelimesinin kökü olan Yunanca \"tomos\" ne anlama gelir?",
      secenekler: ["Kesit, dilim", "Işık, ışın", "Doku, zar", "Ses, titreşim"],
      dogru: 0,
      aciklama: "Tomos **kesim, dilim**, graphein yazmak, kaydetmek demektir. Histos ise doku anlamına gelir.",
    },
    {
      id: "bm-u4-bt-radyasyon", tip: "tf", zorluk: 2,
      soru: "BT daha ayrıntılı görüntü elde ettiği için hastanın aldığı radyasyon standart röntgenden daha fazladır.",
      dogru: true,
      aciklama: "Doğru. BT farklı açılardan çekilen çok sayıda X ışını görüntüsünü birleştirir; radyasyon miktarı röntgenden fazladır.",
    },
    {
      id: "bm-u4-bt-calisma", tip: "mcq", zorluk: 2,
      soru: "BT cihazında kesit görüntüleri nasıl elde edilir?",
      secenekler: ["Dönen X ışını kaynağının farklı açılardaki görüntüleri birleştirilir", "Protonlar güçlü bir manyetik alana sokulup yaydıkları radyo dalgaları işlenir", "Yüksek frekanslı ses dalgalarının dokulardan yansıması ölçülür", "Vücuda verilen radyoaktif maddenin yaydığı gama ışınları sayılır"],
      dogru: 0,
      aciklama: "BT'de motorlu bir **X ışını kaynağı** hastanın etrafında döner; farklı açılardaki görüntüler bilgisayarda birleştirilerek kesitler ve 3B görüntü oluşturulur.",
    },
    {
      id: "bm-u4-bt-kontrast", tip: "mcq", zorluk: 2,
      soru: "İlaçlı BT çekimlerinde kullanılan kontrast maddeler genellikle ne içerir?",
      secenekler: ["İyot ya da baryum", "Gadolinyum", "Fluorodeoksiglukoz", "Radyoaktif teknesyum"],
      dogru: 0,
      aciklama: "BT kontrast maddeleri genellikle **iyot ya da baryum** içerir. MR'da gadolinyum, PET'te FDG kullanılır.",
    },
  ]),

  ...sunum(U, "u4-mr", [
    {
      id: "bm-u4-mr-proton", tip: "mcq", zorluk: 2,
      soru: "MR görüntülemede manyetik alana maruz bırakılan ve sinyal kaynağı olan parçacıklar hangileridir?",
      secenekler: ["Su moleküllerindeki protonlar", "Kemiklerdeki kalsiyum iyonları", "Kandaki demir atomları", "Hücre zarındaki elektronlar"],
      dogru: 0,
      aciklama: "MR'da devasa mıknatıslar vücuttaki **su moleküllerinin protonlarını** manyetik alana sokar; yayılan radyo dalgaları sinyale dönüştürülür.",
    },
    {
      id: "bm-u4-mr-kalp-pili", tip: "tf", zorluk: 1,
      soru: "Kalp pili ya da bazı metal implantları olan kişilere doktor onayı olmadan MR uygulanmaz.",
      dogru: true,
      aciklama: "Doğru. Güçlü manyetik alan nedeniyle metal eşyalar çıkarılır, uyumsuz implantı olanlara MR yapılmaz. BT ise metal implantlı hastalarda güvenle kullanılabilir.",
    },
    {
      id: "bm-u4-mr-ustun", tip: "mcq", zorluk: 2,
      soru: "Aşağıdakilerden hangisinde MR'ın BT'ye göre üstün olduğu kabul edilir?",
      secenekler: ["Omurilik, bağ ve yumuşak doku ayrıntısı", "Acil travma ve kemik kırığı", "Hızlı sonuç gereken acil kanama", "Metal implantı olan hastanın taranması"],
      dogru: 0,
      aciklama: "MR **beyin, omurilik, kas, bağ ve yumuşak doku** ayrıntısında üstündür. Kırık, travma, acil kanama ve metal implantlı hastada BT tercih edilir.",
    },
    {
      id: "bm-u4-mr-sure", tip: "mcq", zorluk: 2,
      soru: "Süre ve cihaz yapısı bakımından BT ile MR'ın farkı için hangisi doğrudur?",
      secenekler: ["BT birkaç dakikada biter; MR 15–45 dakika sürer", "BT 15–45 dakika sürer, MR saniyeler içinde biter", "İkisi de yaklaşık 1 saat sürer ve sessizdir", "MR açık bir yapıdadır, BT dar ve kapalı bir tüneldir"],
      dogru: 0,
      aciklama: "BT çok kısa sürer ve geniş açıklıklıdır, acil durumlara uygundur. **MR 15–45 (bazen 60) dakika** sürer, dar ve kapalıdır, yüksek ses çıkarır.",
    },
    {
      id: "bm-u4-gadolinyum", tip: "fill", zorluk: 2,
      soru: "İlaçlı (kontrastlı) MR'da damar yoluyla verilen özel madde ____ bazlıdır.",
      bosluklar: [["gadolinyum", "gadolinium"]],
      aciklama: "MR kontrast maddesi **gadolinyum** bazlıdır; BT'de iyot bazlı kontrast kullanılır.",
    },
  ]),

  ...sunum(U, "u4-usg", [
    {
      id: "bm-u4-usg-gebelik", tip: "mcq", zorluk: 1,
      soru: "Hamilelik takibinde en çok tercih edilen görüntüleme yöntemi hangisidir ve neden?",
      secenekler: ["Ultrasonografi, çünkü radyasyon içermez", "BT, çünkü en hızlı sonuç verir", "Röntgen, çünkü en ucuz yöntemdir", "PET-CT, çünkü metabolizmayı gösterir"],
      dogru: 0,
      aciklama: "**USG** yüksek frekanslı ses dalgası kullanır, radyasyon içermez ve bilinen yan etkisi yoktur; gebelerde ve bebeklerde güvenlidir.",
    },
    {
      id: "bm-u4-jel", tip: "tf", zorluk: 1,
      soru: "Ultrason incelemesinde bölgeye sürülen jel, ses dalgalarının düzgün iletilmesine yardımcı olur.",
      dogru: true,
      aciklama: "Doğru. Jel, prob ile deri arasındaki havayı ortadan kaldırarak sesin iletilmesini sağlar.",
    },
    {
      id: "bm-u4-usg-biyopsi", tip: "tf", zorluk: 2,
      soru: "Ultrasonografi biyopsi sırasında iğnenin doğru konumlandırılmasına rehberlik etmek için kullanılabilir.",
      dogru: true,
      aciklama: "Doğru. Anında görüntü verdiği için biyopsi rehberliğinde kullanılır.",
    },
  ]),

  ...sunum(U, "u4-nukleer", [
    {
      id: "bm-u4-radyofarmasotik", tip: "fill", zorluk: 1,
      soru: "Nükleer tıpta hastaya ağızdan ya da enjeksiyonla verilen, radyonüklid içeren ve fizyolojik değişime yol açmayan ilaçlara ____ denir.",
      bosluklar: [["radyofarmasötik", "radyofarmasötikler"]],
      aciklama: "Bu ilaçlar **radyofarmasötik** olarak adlandırılır.",
    },
    {
      id: "bm-u4-fdg", tip: "mcq", zorluk: 2,
      soru: "PET-CT'de en yaygın kullanılan radyofarmasötik FDG nedir ve kanser hücreleri neden parlak görünür?",
      secenekler: [
        "Radyoaktif bir glukoz türevidir; metabolizması hızlı hücreler daha çok tutar",
        "Gadolinyum bazlı bir kontrasttır; tümör damarlarında birikir",
        "İyot bazlı bir kontrasttır; kemikte daha çok emilir",
        "Radyoaktif bir protein türevidir; sağlıklı hücreler daha çok tutar",
      ],
      dogru: 0,
      aciklama: "FDG (fluorodeoksiglukoz) **glukozun radyoaktif bir türevidir**. Kanser hücreleri yüksek metabolizmaları nedeniyle FDG'yi daha çok tutar ve parlak noktalar olarak görünür.",
    },
    {
      id: "bm-u4-petct", tip: "mcq", zorluk: 2,
      soru: "PET-CT birleşiminde CT bölümünün katkısı nedir?",
      secenekler: ["Metabolik etkinliğin anatomik olarak nerede olduğunu gösterir", "Hücrelerin glukoz tüketimini ölçer", "Radyasyon kullanmadan yumuşak dokuyu gösterir", "Pozitronları algılayarak metabolizmayı gösterir"],
      dogru: 0,
      aciklama: "PET işlevi (metabolizmayı), **CT anatomiyi** gösterir; ikisi birleşince etkinliğin yeri, büyüklüğü ve yayılımı anlaşılır.",
    },
    {
      id: "bm-u4-spect", tip: "mcq", zorluk: 3,
      soru: "Organın etrafında 180 ya da 360 derecelik açılarla görüntü alarak 3B inceleme sağlayan nükleer tıp yöntemi hangisidir?",
      secenekler: ["SPECT", "Planar yöntem", "PET", "BT"],
      dogru: 0,
      aciklama: "**SPECT** (tek foton emisyon bilgisayarlı tomografisi) organın etrafında 180° ya da 360° döner. Planar yöntem iki boyutlu görüntü verir.",
    },
    {
      id: "bm-u4-fdg-bekleme", tip: "mcq", zorluk: 2,
      soru: "FDG enjeksiyonundan sonra görüntülemeye geçmeden önce yaklaşık ne kadar beklenir?",
      secenekler: ["60–90 dakika", "5–10 dakika", "6–8 saat", "24 saat"],
      dogru: 0,
      aciklama: "Maddenin dağılması ve aktif hücrelerde birikmesi için **60–90 dakika** beklenir; bu sürede hasta sessiz ve hareketsiz kalır.",
    },
    {
      id: "bm-u4-pet-pozitron", tip: "tf", zorluk: 3,
      soru: "PET'te görüntü, yayılan pozitronların elektronlarla karşılaşmasıyla ortaya çıkan gama ışınlarından elde edilir.",
      dogru: true,
      aciklama: "Doğru. Pozitron bir elektronla karşılaşınca gama ışınları oluşur; tarayıcı bunları algılayarak 3B görüntü üretir.",
    },
  ]),

  ...sunum(U, "u4-genom", [
    {
      id: "bm-u4-bazlar", tip: "mcq", zorluk: 1,
      soru: "Genomik veriyi oluşturan dört nükleotit bazı hangileridir?",
      secenekler: ["Adenin, timin, sitozin, guanin", "Adenin, urasil, glukoz, guanin", "Alanin, timin, sistein, glisin", "Adenin, timin, kalsiyum, gadolinyum"],
      dogru: 0,
      aciklama: "DNA alfabesi dört harften oluşur: adenin (A), timin (T), sitozin (C) ve guanin (G).",
    },
    {
      id: "bm-u4-genom-tanim", tip: "fill", zorluk: 1,
      soru: "Bir hücrede bulunan DNA molekülünün tamamına ____ adı verilir.",
      bosluklar: [["genom"]],
      aciklama: "**Genom** bir organizmanın genetik materyalinin tamamıdır; DNA ise molekülün adıdır.",
    },
    {
      id: "bm-u4-fark", tip: "tf", zorluk: 2,
      soru: "Sunuma göre insanlar genomlarının yaklaşık %1–2'lik kısmındaki harf farklılıklarıyla birbirinden ayrılır.",
      dogru: true,
      aciklama: "Doğru. Bu küçük farklar hem bizi eşsiz kılar hem de farklı hastalıklara yatkınlık yaratabilir.",
    },
    {
      id: "bm-u4-zorluk", tip: "mcq", zorluk: 2,
      soru: "Sunumda genomik veri yönetimindeki iki temel zorluk olarak hangileri verilir?",
      secenekler: ["Hacim ve gizlilik", "Renk ve çözünürlük", "Radyasyon ve kontrast", "Frekans ve faz"],
      dogru: 0,
      aciklama: "Veri kümeleri çok büyüktür (**hacim**) ve bireyin sağlık bilgisini taşır (**gizlilik**); kötüye kullanıma karşı kontrollü erişim gerekir.",
    },
    {
      id: "bm-u4-ngs", tip: "mcq", zorluk: 2,
      soru: "DNA ve RNA moleküllerini sıralayarak analiz edilecek genomik veriyi üreten teknolojiye bir örnek hangisidir?",
      secenekler: ["Yeni nesil dizileme", "Histogram eşitleme", "Hareketli ortalama", "Ayrık dalgacık dönüşümü"],
      dogru: 0,
      aciklama: "**Yeni nesil dizileme** ya da Sanger dizilemesi gibi dizileme teknolojileri DNA ve RNA'yı sıralar.",
    },
  ]),

  ...sunum(U, "u4-histo", [
    {
      id: "bm-u4-he", tip: "mcq", zorluk: 2,
      soru: "Histopatolojide en yaygın kullanılan H&E boyası hücre bölümlerini hangi renklere boyar?",
      secenekler: ["Çekirdeği mavi-mor, sitoplazmayı pembe", "Çekirdeği pembe, sitoplazmayı mavi-mor", "Bütün hücreyi siyah-beyaz", "Çekirdeği yeşil, sitoplazmayı sarı"],
      dogru: 0,
      aciklama: "Hematoksilen-eozin boyası **çekirdekleri mavi/mor**, **sitoplazmayı pembe** renge boyar.",
    },
    {
      id: "bm-u4-altin", tip: "tf", zorluk: 1,
      soru: "Histopatolojik inceleme, tümörün iyi huylu mu kötü huylu mu olduğunu belirlemede altın standarttır.",
      dogru: true,
      aciklama: "Doğru. Cerrahi sınırların temiz olup olmadığını göstererek tedaviyi de yönlendirir.",
    },
    {
      id: "bm-u4-mikrotom", tip: "mcq", zorluk: 2,
      soru: "Histopatolojik örnekleri saç telinden ince kesitler halinde kesmek için kullanılan alet hangisidir?",
      secenekler: ["Mikrotom", "Tomograf", "Sintigraf", "Elektrokardiyograf"],
      dogru: 0,
      aciklama: "Örnekler kimyasallarla sabitlendikten sonra **mikrotom** ile ince kesitler halinde kesilir.",
    },
  ]),
];
