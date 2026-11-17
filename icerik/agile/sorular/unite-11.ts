// 11. ünite (XP ve Teknik Mükemmellik): XP'nin değerleri, TDD, eşli ve topluluk
// programlama, sürekli entegrasyon ve teslim, yeniden düzenleme, öteki pratikler,
// teknik borç ve DevOps (DORA ölçütleri).
import { sorular, type Soru } from "./yardimci.ts";

const U = 11;

export const unite11: Soru[] = [
  ...sorular(U, "u11-xp-degerler", [
    {
      ad: "xp-kim",
      soru: "Extreme Programming (XP) en çok kiminle özdeşleşmiştir?",
      secenekler: ["Kent Beck", "Ken Schwaber", "Taiichi Ohno", "Eliyahu Goldratt"],
      aciklama: "XP'yi 1990'ların sonunda **Kent Beck** geliştirdi (*Extreme Programming Explained*, 1999). Schwaber Scrum'un, Ohno Toyota Üretim Sistemi'nin, Goldratt kısıtlar teorisinin adıyla anılır.",
    },
    {
      ad: "bes-deger",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi XP'nin beş değerinden biri **değildir**?",
      secenekler: ["Hız", "İletişim", "Sadelik", "Cesaret"],
      aciklama: "XP'nin değerleri: **iletişim, sadelik, geri bildirim, cesaret ve saygı** (saygı ikinci baskıda eklendi). Hız bir değer değildir; XP'nin amacı sürdürülebilir biçimde değer üretmektir.",
    },
    {
      ad: "cesaret",
      zorluk: 2,
      soru: "XP'de \"cesaret\" değerinin pratikteki karşılığı hangisidir?",
      secenekler: [
        "Testlerin güvencesiyle kodu yeniden düzenlemek, kötü haberi erken söylemek",
        "Test yazmadan ve kimseye sormadan doğrudan canlıya yayın yapmak",
        "Takımın ortak kararına karşı tek başına ve gizlice hareket etmek",
        "Tahminleri her zaman iyimser verip sonra fazla mesaiyle yetiştirmek",
      ],
      aciklama: "Cesaret, doğru olanı yapmaktır: bir tasarımın kötü olduğunu söylemek, gerekiyorsa kodu atıp yeniden yazmak, gecikmeyi erken bildirmek. Testler ve sürekli entegrasyon bu cesareti güvenli kılar.",
    },
  ]),
  ...sorular(U, "u11-tdd", [
    {
      ad: "kirmizi-yesil",
      soru: "TDD döngüsünün doğru sırası hangisidir?",
      secenekler: [
        "Başarısız test yaz, onu geçiren en basit kodu yaz, yeniden düzenle",
        "Kodu yaz, kodu yeniden düzenle, en sonda da testleri yaz",
        "Bütün testleri projenin en başında yaz, sonra bütün kodu yaz",
        "Kodu yaz, canlıya al, kullanıcıdan hata gelirse test yaz",
      ],
      aciklama: "TDD'nin döngüsü **kırmızı-yeşil-düzenle**: önce başarısız bir test (kırmızı), sonra testi geçiren en basit kod (yeşil), sonra testler yeşil kalırken tasarımı iyileştirme (düzenle). Döngü dakikalar sürer.",
    },
    {
      ad: "tdd-fayda",
      zorluk: 2,
      soru: "TDD'nin en önemli faydalarından biri hangisidir?",
      secenekler: [
        "Tasarımı test edilebilir parçalara iter ve değişiklik için güvenlik ağı kurar",
        "Testçilere ve keşif testlerine duyulan ihtiyacı tamamen ortadan kaldırır",
        "Kodun hiçbir koşulda hata içermemesini en baştan garanti eder",
        "Kod yazma süresini her projede ve her durumda yarıya indirir",
      ],
      aciklama: "Önce test yazmak, kodu **test edilebilir** ve gevşek bağlı yazmaya zorlar; biriken testler yeniden düzenleme ve değişiklik için bir **güvenlik ağı** olur. Hatasızlık garantisi değildir; keşif testlerine ve QA'nın bakışına yine ihtiyaç vardır.",
    },
    {
      ad: "kirmizi-once",
      dy: true,
      zorluk: 2,
      soru: "TDD'de yeni testin önce başarısız olduğunu görmek önemlidir; çünkü bu, testin gerçekten bir şeyi sınadığını gösterir.",
      aciklama: "Doğru. Hiç kırmızı olmayan bir test her zaman geçiyor olabilir; yani hiçbir şeyi denetlemiyor olabilir. Kırmızıyı görmek testin kendisini sınar.",
    },
  ]),
  ...sorular(U, "u11-esli", [
    {
      ad: "esli-tanim",
      soru: "Eşli programlamada roller nasıl adlandırılır?",
      secenekler: [
        "Klavyeyi kullanan sürücü, yönü ve büyük resmi izleyen gözcü",
        "Kodu yazan geliştirici, sonradan inceleyen denetçi",
        "Kıdemli olan öğretmen, kıdemsiz olan öğrenci; roller değişmez",
        "Biri kod yazar, öteki aynı anda başka bir işte çalışır",
      ],
      aciklama: "Eşli programlamada bir kişi **sürücü** (driver) olarak yazar, öteki **gözcü** (navigator) olarak tasarımı ve sonraki adımı düşünür. Roller sık sık değişir; inceleme yazarken anında olur.",
    },
    {
      ad: "esli-fayda",
      zorluk: 2,
      soru: "Squad'da ödeme modülünü yalnızca Hakan biliyor ve Hakan izne çıkınca iş duruyor. Hangi XP pratiği bu riski en doğrudan azaltır?",
      secenekler: [
        "Eşli programlama ve ortak kod sahipliği",
        "Daha uzun Sprint'ler",
        "Hakan'ın izinlerini Sprint sonuna denk getirmek",
        "Ödeme modülü için ayrı bir takım kurmak",
      ],
      aciklama: "Bilginin tek kişide toplanması bir risktir (sahada \"otobüs faktörü\" denir). **Eşli programlama** bilgiyi yayar, **ortak kod sahipliği** herkesin her yeri değiştirebilmesini sağlar.",
      etiket: "senaryo",
    },
    {
      ad: "topluluk",
      zorluk: 2,
      soru: "Bütün takımın aynı anda, tek ekranda, tek bir iş üzerinde çalıştığı pratiğin adı nedir?",
      secenekler: ["Topluluk programlama", "Eşli programlama", "Kod incelemesi", "Hackathon"],
      aciklama: "**Topluluk programlama** (mob ya da ensemble programming), eşli programlamanın bütün takıma yayılmış biçimidir: bir sürücü, birçok gözcü. Zor sorunlarda ve bilgi yaymada güçlüdür; WIP'i doğal olarak 1'e indirir.",
    },
  ]),
  ...sorular(U, "u11-ci", [
    {
      ad: "ci-tanim",
      soru: "Sürekli entegrasyon (CI) ne demektir?",
      secenekler: [
        "Herkesin değişikliklerini günde en az bir kez ana dala birleştirmesi ve otomatik test",
        "Kodun her Sprint sonunda bir kez ve elle birleştirilmesi",
        "Her geliştiricinin haftalarca kendi dalında çalışıp sürüm öncesi birleştirmesi",
        "Testlerin yalnızca sürümden önce bir test uzmanınca elle çalıştırılması",
      ],
      aciklama: "Sürekli entegrasyonda değişiklikler **sık** ve **küçük** parçalar halinde ana dala birleşir ve her birleşme **otomatik** derlenip test edilir. Uzun yaşayan dallar birleşme çakışmasını ve sürprizleri büyütür.",
    },
    {
      ad: "kirik-derleme",
      zorluk: 2,
      soru: "Squad'ın ana dalındaki otomatik testler kırıldı. Sürekli entegrasyon kültüründe ilk iş nedir?",
      secenekler: [
        "Kırığı hemen düzeltmek ya da geri almak; kırık dalın üstüne iş eklenmez",
        "Kırılan testleri devre dışı bırakıp çalışmaya devam etmek",
        "Kırığı Sprint sonuna bırakıp önce yeni özellikleri bitirmek",
        "Kırığı yapan kişiyi Retro'da bulup herkesin önünde sorumlu tutmak",
      ],
      aciklama: "Kırık ana dal herkesin işini riske atar. CI'da kural basittir: **önce kırığı düzelt** ya da değişikliği geri al. Testi devre dışı bırakmak sorunu saklar.",
      etiket: "sahada",
    },
    {
      ad: "cd-fark",
      zorluk: 2,
      soru: "Sürekli teslim (continuous delivery) ile sürekli dağıtım (continuous deployment) arasındaki fark nedir?",
      secenekler: [
        "Teslimde değişiklik yayına hazır tutulur, yayın karardır; dağıtımda kendiliğinden çıkar",
        "İkisi aynı şeydir; farklı şirketler farklı adlar kullanır",
        "Teslim yalnızca mobil uygulamalar, dağıtım yalnızca web uygulamaları içindir",
        "Dağıtımda test yapılmaz, teslimde ise bütün testler elle çalıştırılır",
      ],
      aciklama: "**Sürekli teslim**: ana dal her an yayınlanabilir durumdadır, yayın bir düğmeyle yapılır. **Sürekli dağıtım**: otomatik testleri geçen her değişiklik insan onayı olmadan canlıya çıkar. İkisi de güçlü bir test otomasyonu gerektirir.",
    },
  ]),
  ...sorular(U, "u11-refactoring", [
    {
      ad: "refactoring-tanim",
      soru: "Yeniden düzenleme (refactoring) nedir?",
      secenekler: [
        "Kodun davranışını değiştirmeden iç yapısını iyileştirmek",
        "Kullanıcıların istediği yeni özellikleri koda eklemek",
        "Kullanıcıların bildirdiği hataları bulup düzeltmek",
        "Kodu daha hızlı çalışan başka bir dile çevirmek",
      ],
      aciklama: "Martin Fowler'ın tanımıyla yeniden düzenleme, kodun **davranışını değiştirmeden** iç yapısını iyileştirmektir: isimleri netleştirmek, tekrarları kaldırmak, büyük fonksiyonları bölmek. Testler davranışın değişmediğini doğrular.",
    },
    {
      ad: "basit-tasarim",
      zorluk: 2,
      soru: "XP'de \"basit tasarım\" ilkesine en uygun davranış hangisidir?",
      secenekler: [
        "Bugünkü ihtiyacı karşılayan en basit tasarımı yapıp ihtiyaç değişince yeniden düzenlemek",
        "Gelecekte gerekebilecek her özellik için şimdiden genel bir altyapı kurmak",
        "Tasarım yapmadan doğrudan kod yazmak",
        "Bütün tasarımı projenin başında tamamlamak",
      ],
      aciklama: "XP'nin kısaltmasıyla **YAGNI** (\"buna ihtiyacın olmayacak\"): bugün gerekmeyen genelleme yapılmaz. Basit tasarım ve yeniden düzenleme birlikte çalışır; ihtiyaç gelince tasarım güvenle değiştirilir. Bu, Manifesto'nun sadelik ilkesidir.",
    },
    {
      ad: "refactoring-sprint",
      dy: false,
      zorluk: 2,
      soru: "Yeniden düzenleme en iyi, birkaç Sprint'te bir yapılan ayrı \"temizlik Sprint'lerinde\" yapılır.",
      aciklama: "Yanlış. XP'de yeniden düzenleme **sürekli** yapılır: TDD döngüsünün her turunda ve dokunulan her kodda (\"izci kuralı\": bulduğundan temiz bırak). Ayrı temizlik Sprint'leri genellikle borcun çok biriktiğini gösterir.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u11-xp-pratikler", [
    {
      ad: "kucuk-surum",
      zorluk: 2,
      soru: "XP'nin \"küçük sürümler\" pratiği Agile Manifesto'nun hangi ilkesiyle en doğrudan ilişkilidir?",
      secenekler: [
        "Değerli yazılımı erken ve sürekli teslim etmek",
        "Yüz yüze konuşmanın en etkili iletişim olması",
        "Motive bireyler etrafında proje kurmak",
        "Düzenli aralıklarla takımın kendini yansıtması",
      ],
      aciklama: "Küçük ve sık sürümler, ilk ilkenin (**erken ve sürekli teslim**) ve üçüncü ilkenin (kısa aralıkla teslim) uygulamasıdır. Her sürüm geri bildirim getirir.",
    },
    {
      ad: "kirk-saat",
      zorluk: 2,
      soru: "XP'nin ilk baskısında \"40 saatlik hafta\" adıyla geçen pratiğin bugünkü adı ve amacı nedir?",
      secenekler: [
        "Sürdürülebilir hız: takımın yorulmadan aynı tempoyu koruması",
        "Haftada tam 40 saat çalışmayı herkese zorunlu kılmak",
        "Fazla mesainin ücretini her ay düzenli olarak ödemek",
        "Bir haftalık kısa iterasyonlarla planlama yapmak",
      ],
      aciklama: "Pratiğin adı **sürdürülebilir hız** oldu. Fikir saat sayısı değil, yorgunluğun hatayı ve kalitesiz kodu artırmasıdır. Manifesto'nun sekizinci ilkesiyle aynıdır.",
    },
    {
      ad: "ortak-sahiplik",
      soru: "XP'de herhangi bir geliştiricinin kod tabanının herhangi bir yerini değiştirebilmesine ne denir?",
      cevap: ["ortak kod sahipliği", "kolektif kod sahipliği", "collective code ownership", "ortak sahiplik"],
      aciklama: "**Ortak kod sahipliği**: kod kişilerin değil takımındır. Eşli programlama, kodlama standartları ve testler bunu güvenli kılar.",
    },
  ]),
  ...sorular(U, "u11-teknik-borc", [
    {
      ad: "borc-tanim",
      soru: "Teknik borç metaforunu ilk kim ortaya attı?",
      secenekler: ["Ward Cunningham", "Kent Beck", "Martin Fowler", "Jeff Sutherland"],
      aciklama: "Metafor 1992'de **Ward Cunningham**'a aittir: bugün hızlı ama özensiz yazılan kod bir borçtur; borcun **faizi** sonraki her değişikliğin daha pahalı olmasıdır. Martin Fowler sonra borcu dört bölgeli bir tabloyla sınıflandırdı.",
    },
    {
      ad: "faiz",
      zorluk: 2,
      soru: "Squad her Sprint test yazmayı atlayarak \"hız kazanıyor\". Bunun zamanla velocity'ye etkisi genellikle nasıldır?",
      secenekler: [
        "Kısa vadede artar, sonra düzeltmeler ve kırılgan kod yüzünden düşer",
        "Sürekli ve kalıcı olarak artar, çünkü testlere zaman harcanmaz",
        "Hiçbir etkisi olmaz, çünkü testler yalnızca belgeleme içindir",
        "Hemen düşer, sonra takım alıştıkça kalıcı olarak artar",
      ],
      aciklama: "Borç önce hız kazandırır, sonra **faiz** öder: her değişiklik daha çok hata, daha uzun test ve daha çok korku getirir. Hız eğrisi zamanla aşağı döner. Teknik borç faizi deneyinde bu eğriyi kendin çizebilirsin.",
      etiket: "senaryo",
    },
    {
      ad: "bilincli-borc",
      zorluk: 3,
      soru: "Fowler'ın teknik borç tablosunda \"Yayına yetişmek için bu kısayolu bilerek alıyoruz ve sonuçlarını biliyoruz\" hangi bölgeye düşer?",
      secenekler: ["Bilinçli ve tedbirli", "Bilinçli ve pervasız", "Farkında olmadan ve tedbirli", "Farkında olmadan ve pervasız"],
      aciklama: "Fowler borcu iki eksende sınıflar: **bilinçli/farkında olmadan** ve **tedbirli/pervasız**. Sonucunu bilip geri ödemeyi planlayarak alınan kısayol **bilinçli ve tedbirlidir**. \"Tasarıma vaktimiz yok\" diyerek alınan borç bilinçli ama pervasızdır.",
    },
    {
      ad: "borc-backlog",
      zorluk: 2,
      soru: "Teknik borcu ödeme işleri Scrum'da nerede durmalıdır?",
      secenekler: [
        "Product Backlog'da, öteki işlerle birlikte görünür ve PO'nun sırasıyla",
        "Yalnızca Tech Lead'in kendi tuttuğu kişisel listesinde",
        "Hiçbir yerde; geliştiriciler boş zamanlarında sessizce halleder",
        "Ayrı bir \"teknik backlog\"da, Product Owner'dan gizli tutularak",
      ],
      aciklama: "Product Backlog takımın **tek iş kaynağıdır** (8. ünite). Borç işleri orada görünür olursa PO onların değerini ve riskini öteki işlerle tartabilir. Developers borcun maliyetini görünür kılmaktan sorumludur.",
      etiket: "rehber",
    },
  ]),
  ...sorular(U, "u11-devops", [
    {
      ad: "dora",
      zorluk: 2,
      soru: "DORA araştırmasının yazılım teslim performansı için yaygınlaştırdığı dört temel ölçüt hangileridir?",
      secenekler: [
        "Dağıtım sıklığı, teslim süresi, başarısızlık oranı, geri getirme süresi",
        "Velocity, story point, burndown ve burnup grafikleri",
        "Kod satırı sayısı, commit sayısı, toplantı süresi ve hata sayısı",
        "Takım morali, odak, paydaş güveni ve teknik borç oranı",
      ],
      aciklama: "DORA'nın dört anahtar ölçütü: **dağıtım sıklığı**, **değişiklikler için teslim süresi**, **değişiklik başarısızlık oranı** ve **hizmeti geri getirme süresi**. İkisi hızı, ikisi istikrarı ölçer; araştırma ikisinin birlikte iyileşebildiğini gösterdi.",
    },
    {
      ad: "devops-tanim",
      zorluk: 2,
      soru: "DevOps'un özü hangisidir?",
      secenekler: [
        "Geliştirme ile operasyonun duvarını kaldırıp otomasyonla sık teslim etmek",
        "Yalnızca operasyon ekibine yeni ve daha modern bir unvan vermek",
        "Geliştiricilerin sunuculara ve canlı ortama hiç dokunmaması",
        "Yayınları riski azaltmak için yılda bir büyük sürüme toplamak",
      ],
      aciklama: "DevOps bir unvan değil bir kültür ve pratikler bütünüdür: geliştirme ve operasyon **aynı hedefe** çalışır; derleme, test, kurulum ve izleme otomatikleştirilir. Squad'daki DevOps Kerem bir Developer'dır, ayrı bir duvarın arkasında değil.",
    },
    {
      ad: "dod-teknik",
      zorluk: 2,
      soru: "Squad'ın DoD'una aşağıdakilerden hangisini eklemek XP ve DevOps pratiklerini en doğrudan güçlendirir?",
      secenekler: [
        "Ana dala birleşti, testler geçiyor, otomatik hatla test ortamına kuruldu",
        "Product Owner öğeyi Sprint Review'da gördü ve beğendi",
        "Öğe için en az üç toplantı yapıldı ve tutanakları yazıldı",
        "Tech Lead öğeyi inceledi ve kendi adına onayladı",
      ],
      aciklama: "DoD'a **sürekli entegrasyon, otomatik test ve otomatik kurulum** maddeleri eklemek \"bitti\"yi teknik pratiklere bağlar. Böylece her Increment gerçekten yayınlanabilir olur (8. ünite).",
      etiket: "sahada",
    },
  ]),
];
