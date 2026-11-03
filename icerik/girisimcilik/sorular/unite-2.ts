// 2. ünite: Girişim Fırsatlarını Görme ve Fikir Yaratma/Geliştirme

import { kitap, turet, type Soru } from "./yardimci.ts";

const U = 2;
const K = "u2";

export const unite2: Soru[] = [
  ...kitap(U, K, [
    {
      id: "u2-k01", no: 1, cikmis: 5, kavram: "u2-kavramlar",
      soru: "Fırsat hangisiyle ilgilidir?",
      secenekler: ["Uygun şartların oluşması", "Fikir bulma", "Problem bulma", "Yetiştirecek tohum bulma", "Tohum ekecek aletleri bulma"],
      dogru: 0,
      aciklama: "Fırsat çevresel ve içsel faktörlerin yarattığı ortamla ilgilidir: uygun pazar şartları, ürünü yapacak ortam, doğru zaman ve finansal destek, yani **uygun şartların oluşması**.",
    },
    {
      id: "u2-k02", no: 2, kavram: "u2-kavramlar",
      soru: "Aşağıdakilerden hangisi yanlıştır?",
      secenekler: ["Dünyada çözülmeyi bekleyen binlerce problem var.", "Bulunacak her türlü icat bulundu", "Fikir uygun ortamda büyür.", "Problem çözmek girişimcinin önceliğidir.", "Probleme çözüm üretmek girişimciliğin sadece ilk adımıdır."],
      dogru: 1,
      aciklama: "Etrafımızda çözülmesi gereken on binlerce problem vardır; problemleri kanıksamak inovasyonun en büyük düşmanıdır. \"Her icat bulundu\" yanlıştır.",
    },
    {
      id: "u2-k03", no: 3, cikmis: 6, kavram: "u2-musteri-kesfi",
      soru: "Müşteri keşfi sırasında aşağıdakilerden hangisi asla sorulmaz?",
      secenekler: ["Köpeğinizle yaşamanın ne gibi sıkıntıları var?", "Köpeğiniz olması nasıl bir duygu?", "Köpeğiniz kötü kokuyorsa ne yapıyorsunuz?", "Köpeğinizin kötü kokmaması için şampuan çıkardık, alır mıydınız?", "Köpeğiniz tüy döküyor mu?"],
      dogru: 3,
      aciklama: "Müşteri keşfinin ilk kuralı: \"Şöyle bir ürünümüz var, kullanır mısınız?\" diye **doğrudan sormayın**. Kişi sizi kırmamak için evet der ve hiçbir şey öğrenmezsiniz.",
    },
    {
      id: "u2-k04", no: 4, kavram: "u2-dusunme",
      soru: "Aşağıdakilerden hangisi müşterilerin “Yapılacak İşler Yönetimine” uygundur?",
      secenekler: ["Müzik dinlemek", "MP3 dinlemek", "CD dinlemek", "Radyo dinlemek", "Mobil uygulamadan şarkı dinlemek"],
      dogru: 0,
      aciklama: "Yapılacak işler (jobs to be done) yöntemi araçlara değil yapılmak istenen işe odaklanır. MP3, CD, radyo birer araçtır; asıl iş **müzik dinlemek**tir.",
    },
    {
      id: "u2-k05", no: 5, cikmis: 7, kavram: "u2-inovasyon",
      soru: "Aşağıdakilerden hangisi temel bir inovasyon kaynağı değildir?",
      secenekler: ["Müşteri", "Teknoloji", "Pazar Trendleri", "Regülasyonlar", "Aileniz"],
      dogru: 4,
      aciklama: "İnovasyonun üç ana kaynağı müşteri, teknoloji ve pazar trendleridir; regülasyonlar da fırsat doğurur. **Aileniz** bir inovasyon kaynağı değildir.",
    },
    {
      id: "u2-k06", no: 6, kavram: "u2-inovasyon",
      soru: "Aşağıdakilerden hangisi inovasyon çeşidi değildir?",
      secenekler: ["İş Modeli", "Organizasyonel", "Satış Kanalı", "Müşteri Deneyimi", "Fiyat Değişikliği"],
      dogru: 4,
      aciklama: "İnovasyon iş modeli, organizasyonel, iş ağı, ürün performansı, satış kanalı, müşteri deneyimi ve ürün sunumu alanlarında yapılabilir. Tek başına **fiyat değişikliği** bir inovasyon çeşidi değildir.",
    },
    {
      id: "u2-k07", no: 7, kavram: "u2-kavramlar", zorluk: 2,
      soru: "Aşağıdakilerden hangisi yanlıştır?",
      secenekler: ["Bir çok başarılı girişim ilk günkü halini korumuştur.", "İyi bir fikir bulduysak öncelikle test etmeliyiz.", "Fırsatlar imkanlarla ve çevre şartlarıyla ilgilidir.", "Problem keşfetmek ve çözüm üretmek girişimcinin ilk adımıdır.", "Bir çok başarısız girişim ihtiyaç olmadığından değil parasızlıktan kapanmıştır."],
      dogru: 0,
      aciklama: "Birçok girişim ilk gününe göre büyük evrim geçirmiştir; Facebook örneğinde olduğu gibi. \"İlk günkü halini korumuştur\" yanlıştır.",
    },
    {
      id: "u2-k08", no: 8, kavram: "u2-kavramlar",
      soru: "Aşağıdakilerden hangisi girişimci için bir fırsat olabilir?",
      secenekler: ["Güneş enerjisi cihaz maliyetlerinin düşmesi", "İyi bir fikir bulmak", "İyi bir ihtiyaç görmek", "İyi bir ortak bulmak", "İyi bir girişim adı bulmak"],
      dogru: 0,
      aciklama: "Güneş panellerinin 1970'lere göre yaklaşık 100 kat ucuzlaması, maliyetini zor çıkaran bir teknolojiyi kârlı hale getirdiği için bir **fırsat**tır. Fikir ve ihtiyaç fırsatla aynı şey değildir.",
    },
    {
      id: "u2-k09", no: 9, kavram: "u2-musteri-kesfi",
      soru: "Aşağıdakilerden hangisi doğrudur?",
      secenekler: ["Girişimcinin bulduğu fikir iyiyse zaten başarılı olur.", "Girişimcilik tamamen finansman bulmakla ilgilidir.", "Girişimcilikte başarısızlığın ana sebebi iyi bir ürün yapamamakla ilgilidir.", "Girişimcilikte ilk adım böyle bir ihtiyaç ve pazar olup olmadığını test etmektir.", "Girişimcinin kendisi iyiyse girişim zaten başarılı olur."],
      dogru: 3,
      aciklama: "İlk adım, böyle bir **ihtiyaç ve pazar olup olmadığını test etmek**tir; müşteri keşfi bunun için yapılır.",
    },
    {
      id: "u2-k10", no: 10, kavram: "u2-trend",
      soru: "Aşağıdakilerden hangisi teknolojinin gelişmesi ile ortaya çıkmış bir inovasyondur?",
      secenekler: ["3 boyutlu yazıcılar", "Sosyal ağlar", "Arama motorları", "Haber siteleri", "Teknoloji siteleri"],
      dogru: 0,
      aciklama: "Kitap teknolojik gelişmeleri takip etme başlığında **üç boyutlu yazıcıları** örnek verir: kırılan parçayı bir ay beklemek yerine birkaç saatte basmak mümkün olur.",
    },
  ]),

  ...turet(U, K, "u2-kavramlar", [
    {
      id: "u2-t-fikir-tohum", tip: "mcq", zorluk: 1,
      soru: "Kitapta \"bir ürüne ya da hizmete dönüşeceği öngörülen tohum\" olarak tanımlanan kavram hangisidir?",
      secenekler: ["Fikir", "Fırsat", "Problem", "İhtiyaç"],
      dogru: 0,
      aciklama: "**Fikir** bir tohumdur; sebzeye, ağaca dönüşmediği sürece anlam ifade etmez.",
    },
    {
      id: "u2-t-problem-tanim", tip: "mcq", zorluk: 1,
      soru: "Potansiyel bir müşterinin ya da müşteri grubunun yaşadığı sıkıntıya ne ad verilir?",
      secenekler: ["Problem", "Fırsat", "Talep", "Trend"],
      dogru: 0,
      aciklama: "Bu, **problem**in tanımıdır; örneğin akıllı telefon şarjının çabuk bitmesi.",
    },
    {
      id: "u2-t-ihtiyac-tanim", tip: "fill", zorluk: 1,
      soru: "Bir kişinin eksikliğini hissettiği şeye ____ denir.",
      bosluklar: [["ihtiyaç", "ihtiyac", "gereksinim"]],
      aciklama: "**İhtiyaç** kişinin eksikliğini hissettiği şeydir; ancak doğrudan ihtiyacı karşılamaya çalışmak girişimciyi yanlış yola götürebilir.",
    },
    {
      id: "u2-t-problemi-sabit", tip: "mcq", zorluk: 2,
      soru: "Uzmanların \"problemi sabit tutup çözüm seçeneklerinin üstünden geçin\" önerisi ne anlatır?",
      secenekler: ["Tek bir çözüme takılmak yerine aynı probleme farklı çözümler aranmalıdır", "Problem hiç değiştirilmemeli, ilk çözüm uygulanmalıdır", "Önce çözüm bulunur, sonra ona uygun problem aranır", "Problemler çözülmeden bırakılmalıdır"],
      dogru: 0,
      aciklama: "Problemle (ör. şarjın çabuk bitmesi) ilgilenirsen yeni pil teknolojisi ya da taşınabilir batarya gibi **farklı çözümler** arasında rahat ilerlersin.",
    },
    {
      id: "u2-t-orijinal-fikir", tip: "tf", zorluk: 1,
      soru: "Kitaba göre bir fikrin başarılı olması için daha önce hiç düşünülmemiş, tamamen orijinal olması şarttır.",
      dogru: false,
      aciklama: "Yanlış. Fikrin daha önce düşünülüp düşünülmediğinin önemi yoktur; önemli olan onu doğru zamanda, doğru yerde, doğru şekilde hayata geçirmektir.",
    },
    {
      id: "u2-t-vale", tip: "mcq", zorluk: 2,
      soru: "Alışveriş merkezlerinin vale hizmeti sunmaya başlaması kitapta hangi gözleme dayanan bir fırsat örneğidir?",
      secenekler: ["Çalışan kesimin zaman problemi olduğunun fark edilmesi", "Otopark yönetmeliğinin yeni bir yasayla değişmesi", "Elektrikli araçların şehirlerde hızla yaygınlaşması", "Akaryakıt fiyatlarının uzun süre düşük kalması"],
      dogru: 0,
      aciklama: "Çalışanların her şeye vakit bulamaması zamanı değerli kılmıştır; vale hizmeti bu **zaman problemi**nin fırsata çevrilmesidir.",
    },
    {
      id: "u2-t-uber", tip: "mcq", zorluk: 2,
      soru: "Kitabın girişinde Uber ve Airbnb örnekleriyle vurgulanan düşünce hangisidir?",
      secenekler: ["Doğru problemi bulup iyi çözdükçe, varlığa sahip olmadan da büyük girişimler kurulabilir", "Büyük girişim kurmak için önce çok sayıda araç ya da bina satın almak gerekir", "Ulaşım ve konaklama sektörlerinde fırsat kalmamıştır", "Yalnızca mucitler girişimci olabilir"],
      dogru: 0,
      aciklama: "Uber'in arabası, Airbnb'nin oteli yoktur; iki tarafı buluşturarak **problemi çözerler**. Girişimci olmak için mucit olmak gerekmez.",
    },
  ]),

  ...turet(U, K, "u2-musteri-kesfi", [
    {
      id: "u2-t-kesif-tanim", tip: "mcq", zorluk: 1,
      soru: "Müşterilerin doğru ihtiyaçlarını, en çok acısını hissettikleri problemi bulma sürecine ne ad verilir?",
      secenekler: ["Müşteri keşfi", "Pazar bölümlendirme", "Tasarımsal düşünme", "Talep tahmini"],
      dogru: 0,
      aciklama: "Bu sürece **müşteri keşfi** denir; müşterinin acılarını bulmak girişimin başarısı için kritiktir.",
    },
    {
      id: "u2-t-kesif-kural", tip: "mcq", zorluk: 2,
      soru: "Aşağıdakilerden hangisi müşteri keşfi görüşmelerinde önerilen davranışlardan **değildir**?",
      secenekler: ["Görüşmede ürünü uzun uzun anlatıp karşı tarafı ikna etmek", "Karşı tarafı konuşturmak", "Söylediklerinden çok yaptıklarıyla ilgilenmek", "Olabildiğince çok kişiyle görüşmek"],
      dogru: 0,
      aciklama: "Görüşmede **siz çok konuşmamalısınız**; karşı tarafı konuşturmalı, hikâyelerini dinlemelisiniz.",
    },
    {
      id: "u2-t-hikaye", tip: "tf", zorluk: 1,
      soru: "Müşteri keşfinde kişinin yaşadığı olayları anlattığı somut hikâyeler (ör. tasmanın elinden kayması), genel cevaplardan daha değerlidir.",
      dogru: true,
      aciklama: "Doğru. Hikâyeler yeni problemleri ve fırsatları (ör. kayan tasma tutacakları) ortaya çıkarabilir.",
    },
    {
      id: "u2-t-cevabi-belli", tip: "mcq", zorluk: 2,
      soru: "\"Köpeğinizin kötü kokmasını istemezsiniz, değil mi?\" sorusu müşteri keşfinde neden sorulmamalıdır?",
      secenekler: ["Cevabı zaten belli olduğu için hiçbir şey öğretmez", "Fazla kişisel bir soru olduğu için", "Yasal olarak yasak olduğu için", "Köpek sahipleri bu konuyu bilmediği için"],
      dogru: 0,
      aciklama: "Kural: **cevabını az çok bildiğiniz sorular sormayın.** Kimse \"arada kötü koksa iyi olur\" demez.",
    },
  ]),

  ...turet(U, K, "u2-dusunme", [
    {
      id: "u2-t-tasarimsal-sira", tip: "mcq", zorluk: 2,
      soru: "Tasarımsal düşünme yönteminin adımları hangi sırayla ilerler?",
      secenekler: ["Empati → Problem → Fikir → Prototip ve test", "Prototip → Empati → Fikir → Problem ve test", "Fikir → Prototip → Empati → Problem tanımı", "Problem → Satış → Empati → Prototip ve test"],
      dogru: 0,
      aciklama: "Önce **empati** kurulur, sonra problemlere odaklanılır, fikir geliştirilir ve **prototip**le ihtiyacın karşılanıp karşılanmadığı test edilir.",
    },
    {
      id: "u2-t-cekic", tip: "mcq", zorluk: 2,
      soru: "\"Duvara fotoğraf asmak isteyen için çekiç almaya değil duvarda delik açmaya odaklanılmalıdır\" örneği hangi yöntemi anlatır?",
      secenekler: ["Yapılacak işler", "Tasarımsal düşünme", "Müşteri keşfi", "Paylaşım ekonomisi"],
      dogru: 0,
      aciklama: "**Yapılacak işler** yöntemi araçlara değil yapılmak istenen işe odaklanır.",
    },
    {
      id: "u2-t-ulasim-is", tip: "mcq", zorluk: 2,
      soru: "Yapılacak işler yöntemine göre Uber ve Lyft gibi firmaların odaklandığı asıl ihtiyaç hangisidir?",
      secenekler: ["Bir yerden bir yere gitmek", "Daha çok araç satın almak", "Lüks otomobile sahip olmak", "Akaryakıt tasarrufu"],
      dogru: 0,
      aciklama: "Otomotiv sektörü daha çok araç satmaya odaklanırken bu firmalar asıl işin **bir yerden bir yere gitmek** olduğunu görmüştür.",
    },
    {
      id: "u2-t-kuafor", tip: "tf", zorluk: 1,
      soru: "Kadınların asıl motivasyonunun saçını güzel kestirmek olduğunu fark edip eve kuaför hizmeti sunan bir uygulama yapmak, yapılacak işler yöntemine uygun bir düşüncedir.",
      dogru: true,
      aciklama: "Doğru. İhtiyaç kuaför salonu değil, saçın güzel kesilmesidir; araç değişebilir.",
    },
  ]),

  ...turet(U, K, "u2-inovasyon", [
    {
      id: "u2-t-inovasyon-tanim", tip: "fill", zorluk: 1,
      soru: "Kitaba göre inovasyon \"işe ____ yenilik\" demektir.",
      bosluklar: [["yarar"]],
      aciklama: "İnovasyon **işe yarar** yeniliktir; her yenilik inovasyon değildir.",
    },
    {
      id: "u2-t-starbucks", tip: "mcq", zorluk: 2,
      soru: "Starbucks'ın şubelerini ev ortamına benzeterek farklı bir hizmet sunması hangi inovasyon çeşidine örnektir?",
      secenekler: ["Müşteri deneyimi", "Satış kanalı", "Organizasyonel", "İş ağı"],
      dogru: 0,
      aciklama: "Bu **müşteri deneyimi** inovasyonudur.",
    },
    {
      id: "u2-t-acik-kaynak", tip: "mcq", zorluk: 2,
      soru: "Temel özellikleri ücretsiz sunup ekstra özellikleri ücretlendirmek ya da açık kaynak ürün geliştirip danışmanlıktan gelir elde etmek hangi inovasyon çeşidine örnektir?",
      secenekler: ["İş modeli", "Müşteri deneyimi", "Ürün performansı", "Satış kanalı"],
      dogru: 0,
      aciklama: "Bunlar **iş modeli** inovasyonudur.",
    },
    {
      id: "u2-t-dis-kaynak", tip: "mcq", zorluk: 2,
      soru: "Dış kaynak kullanımı ve dijital araçların daha çok kullanılmasıyla pazarda avantaj sağlamak hangi inovasyon çeşidindedir?",
      secenekler: ["Organizasyonel", "Satış kanalı", "Ürün sunumu", "İş modeli"],
      dogru: 0,
      aciklama: "Bu **organizasyonel** inovasyondur.",
    },
    {
      id: "u2-t-hibrit", tip: "mcq", zorluk: 3,
      soru: "Kitaba göre en uzun vadede işe yarayan inovasyon kaynağı hangisidir?",
      secenekler: ["Kopyalanması zor hibrit kaynaklı inovasyonlar", "Yalnızca müşteri kaynaklı inovasyonlar", "Yalnızca pazar trendi kaynaklı inovasyonlar", "Global projelerin birebir kopyası"],
      dogru: 0,
      aciklama: "Müşteri odaklı inovasyon önde görünse de **kopyalanması zor hibrit** inovasyonlar (ör. iPhone: teknoloji + müşteri sorunu + trend) en uzun vadede işe yarar.",
    },
    {
      id: "u2-t-yerel-versiyon", tip: "mcq", zorluk: 2,
      soru: "Global projelerin (birebir kopyası değil) yerel versiyonlarını yapmak hangi inovasyon kaynağına örnektir?",
      secenekler: ["Pazar trendleri", "Teknoloji", "Müşteri", "Regülasyon"],
      dogru: 0,
      aciklama: "Bu **pazar trendleri** kaynaklı inovasyonun en büyük örneğidir.",
    },
    {
      id: "u2-t-ford", tip: "mcq", zorluk: 2,
      soru: "\"Müşterilere ne istediklerini sorsaydım daha hızlı bir at isterlerdi\" sözü inovasyonla ilgili hangi dersi verir?",
      secenekler: ["Müşterinin çözümüne değil ihtiyacına odaklanılmalı", "Müşteri hiç dinlenmemeli, sezgiye güvenilmeli", "At yetiştiriciliği hâlâ büyük bir pazar fırsatıdır", "Teknoloji müşterinin ilgisini çekmeyen bir konudur"],
      dogru: 0,
      aciklama: "Müşteri ihtiyacını yanlış tanımlayabilir; inovasyon için müşterinin **çözümlerine değil ihtiyaç ve sorunlarına** odaklanılır.",
    },
  ]),

  ...turet(U, K, "u2-trend", [
    {
      id: "u2-t-paylasim", tip: "mcq", zorluk: 1,
      soru: "Sahibinin yüzde yüz kullanmadığı her şeyin başkaları tarafından da kullanılabilir hale getirilmesine dayanan pazar trendi hangisidir?",
      secenekler: ["Paylaşım ekonomisi", "Jenerasyon takibi", "Regülasyon", "Nanoteknoloji"],
      dogru: 0,
      aciklama: "**Paylaşım ekonomisi**: ev, araba, depo, ofis odası paylaşmak gibi.",
    },
    {
      id: "u2-t-odeme-lisans", tip: "mcq", zorluk: 2,
      soru: "BDDK'nın Ödeme Kuruluşları lisansıyla faturaların bakkaldan da ödenebilir hale gelmesi hangi trend başlığına örnektir?",
      secenekler: ["Regülasyonları takip etme", "Jenerasyonları takip etme", "Teknolojik gelişmeleri takip etme", "Paylaşım ekonomisi"],
      dogru: 0,
      aciklama: "Devletin çıkardığı düzenlemeler fırsat doğurur; bu **regülasyon** kaynaklı bir fırsattır.",
    },
    {
      id: "u2-t-jenerasyon", tip: "mcq", zorluk: 2,
      soru: "Yeni nesil bankaların gençlerin sosyal medya alışkanlıklarını inceleyip daha görsel ve sosyal uygulamalar çıkarması hangi başlıkla ilgilidir?",
      secenekler: ["Jenerasyonları takip etme", "Regülasyonları takip etme", "Paylaşım ekonomisi", "Müşteri deneyimi inovasyonu değil, maliyet düşürme"],
      dogru: 0,
      aciklama: "Bu, **jenerasyonları** anlamanın iş geliştirmedeki önemine örnektir.",
    },
    {
      id: "u2-t-teknoloji-problem", tip: "tf", zorluk: 1,
      soru: "Kitaba göre teknolojik gelişmelerle gözlemlenen problemleri buluşturmak girişimcinin görevidir.",
      dogru: true,
      aciklama: "Doğru. Örneğin nesne tanıyan telefon kamerasıyla görme engelliler için yol gösteren bir uygulama geliştirilebilir.",
    },
  ]),
];
