// 1. ünite: Girişimciliğin Temel Kavramları
// Kitap soruları metin ve şıklarıyla aynen; türetilmiş sorular kitaptaki bilgiden kendi cümlelerimizle.

import { cikmis, kitap, turet, type Soru } from "./tipler.ts";

const U = 1;
const K = "u1";

export const unite1: Soru[] = [
  ...kitap(U, K, [
    {
      id: "u1-k01", no: 1, cikmis: 1, kavram: "u1-deger",
      soru: "Bir ürün/hizmet üretmek için gerek duyduğu kaynakları en yüksek değeri yaratacak şekilde bir araya getirerek değer yaratan kişiye ne ad verilir?",
      secenekler: ["Yönetici", "Lider", "Girişimci", "Çalışan", "Tedarikçi"],
      dogru: 2,
      aciklama: "Kitabın kısa tanımı: **girişimci**, ürün ya da hizmet için gereken kaynakları en yüksek değeri yaratacak şekilde bir araya getirip paydaşları için değer yaratan kişidir.",
    },
    {
      id: "u1-k02", no: 2, kavram: "u1-deger", zorluk: 2,
      soru: "I. Kâr elde etme\nII. Sosyal fayda yaratmak\nIII. Büyüme\nIV. Hayatta kalma\nV. Vergi vermek\n\nYukarıdakilerden hangisi ticari amaçla kurulan girişimlerin içsel amaçları arasında yer almaz?",
      secenekler: ["I - V", "II - IV", "I - III", "II - V", "III - IV"],
      dogru: 3,
      aciklama: "Ticari girişimin üç içsel amacı **kâr, hayatta kalma (sürdürülebilirlik) ve büyüme**dir. Sosyal fayda belediye işletmeleri gibi ticari olmayan işletmelerin amacıdır; vergi ise devletin beklentisidir.",
    },
    {
      id: "u1-k03", no: 3, cikmis: 2, kavram: "u1-yonetim",
      soru: "Aşağıdakilerden hangisi yönetim fonksiyonlarından biri değildir?",
      secenekler: ["Programlama", "Kontrol", "Örgütleme", "Planlama", "Yürütme"],
      dogru: 0,
      aciklama: "Dört yönetim fonksiyonu: **planlama, örgütleme, yürütme (yöneltme) ve kontrol**. Programlama bunlardan biri değildir.",
    },
    {
      id: "u1-k04", no: 4, kavram: "u1-nitelik",
      soru: "Aşağıdakilerden hangisi başarılı bir girişimcinin sahip olması gereken en temel özelliklerinden biri değildir?",
      secenekler: ["Liderlik", "Stres", "Risk alma", "Öz-yeterlilik", "Yenilikçilik"],
      dogru: 1,
      aciklama: "Kitap dört temel özellik sayar: **öz yeterlilik, yenilikçilik, risk alma ve liderlik**. Stres bir özellik değil, girişimcilikteki engellerden biridir.",
    },
    {
      id: "u1-k05", no: 5, kavram: "u1-yonetim", zorluk: 2,
      soru: "Yönetici ve lider ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      secenekler: [
        "Yöneticinin bir görev tanımı vardır, liderin ise bir görev tanımı yoktur.",
        "Yönetici, işleri doğru yapan, lider ise doğru işleri yapan kişidir.",
        "Yönetici, sahip olduğu makama verilen yetkileri kullanarak iş yaptırır.",
        "Liderlik, çoğu zaman bir yönetsel makamı ifade etmektedir.",
        "Liderlik, insanları etkileme ve harekete geçirme faaliyetleridir.",
      ],
      dogru: 3,
      aciklama: "Yönetsel makamı (genel müdür, şef…) ifade eden **yöneticiliktir**. Liderlik makamdan kaynaklanmayan kişisel özellikler bütünüdür.",
    },
    {
      id: "u1-k06", no: 6, cikmis: 3, kavram: "u1-motivasyon",
      soru: "Kişinin kendisinin ve ailesinin geleceğini güvence altına almak amacıyla girişimci olmaya karar vermesi hangi tür girişimcilik motivasyonunun kapsamına girmektedir?",
      secenekler: ["Maddi (Dışsal) motivasyonlar", "Bağımsızlığa yönelik motivasyonlar", "Bireysel (İçsel) motivasyonlar", "Çevresel motivasyonlar", "Güvenliğe yönelik motivasyonlar"],
      dogru: 4,
      aciklama: "Kendinin ve ailesinin geleceğini güvenceye almak **güvenliğe yönelik** motivasyondur (emeklilikte rahat etmek, çocukların geleceği gibi).",
    },
    {
      id: "u1-k07", no: 7, kavram: "u1-surec",
      soru: "Aşağıdakilerden hangisi girişimcilik sürecinin aşamaları arasında yer almamaktadır?",
      secenekler: ["Kaynakların bulunması", "İş planının oluşturulması", "Örgütleme", "Fırsatların tespiti", "Büyüme ve çıkış"],
      dogru: 2,
      aciklama: "Girişimcilik süreci: **fırsatların tespiti → iş modeli ve iş planı → kaynakların bulunması → büyüme ve çıkış**. Örgütleme bir yönetim fonksiyonudur.",
    },
    {
      id: "u1-k08", no: 8, kavram: "u1-kobi", zorluk: 2,
      soru: "45 çalışanı ve 20 milyon TL ciroya sahip olan bir işletmenin büyüklüğü, mevcut yasalarımızda ne şekilde tanımlanmıştır?",
      secenekler: ["Mikro İşletme", "Küçük işletme", "Orta büyüklükte işletme", "KOBİ", "Büyük işletme"],
      dogru: 1,
      aciklama: "Küçük işletme: **50 kişiden az** çalışan ve ciro ya da bilançosu **25 milyon TL**'yi aşmayan işletme. 45 kişi ve 20 milyon TL bu sınırların içindedir.",
    },
    {
      id: "u1-k09", no: 9, kavram: "u1-kobi",
      soru: "Aşağıdakilerden hangisi KOBİ’lerin avantajlarından biri değildir?",
      secenekler: [
        "Yenilik fırsatlarını daha iyi saptayıp değerlendirebilme",
        "Teşvikli fonlardan daha fazla yararlanabilme",
        "Karar almada tek yöneticiye bağımlı olma",
        "Teknolojik yeniliklerde daha verimli olabilme",
        "Pazar ve müşteriye yakınlıklarının daha fazla olması",
      ],
      dogru: 2,
      aciklama: "Karar almada tek yöneticiye bağımlı olmak KOBİ'lerin **dezavantajları** arasında sayılır.",
    },
    {
      id: "u1-k10", no: 10, kavram: "u1-efsane", zorluk: 2,
      soru: "Aşağıdakilerden hangisi girişimcilik ile ilgili doğru bilinen yanlışlardan biri değildir?",
      secenekler: [
        "İş fikri çok karmaşık ise başarı garantidir",
        "Başarısız girişimciye güvenilmez",
        "Girişimciler risk almayı sever",
        "Ne kadar kıymetli olursa olsun tek başına iş fikrinin herhangi bir değeri yoktur",
        "Girişimcilik parası olanların işidir",
      ],
      dogru: 3,
      aciklama: "\"Tek başına iş fikrinin değeri yoktur\" bir efsane değil, kitabın vardığı doğru sonuçtur: kişiyi girişimci yapan, fikri kaynakları bir araya getirip değere dönüştürmesidir.",
    },
  ]),

  ...cikmis(U, K, [
    {
      id: "u1-c04", no: 4, kavram: "u1-deger",
      soru: "Bir işletmenin müşterilerin beklentilerini karşılarken işbirliği yaptığı (hissedar, çalışan, tedarikçi, dağıtıcı, devlet vb.) bir takım kişi ve kurumlara genel olarak ne ad verilir?",
      secenekler: ["Sermaye", "Müşteri", "Girişimci", "Paydaş", "Yatırımcı"],
      dogru: 3,
      aciklama: "Girişimin **paydaşları**: hissedar, çalışan, tedarikçi, dağıtıcı, devlet ve doğa. Paydaşlar olmadan hiçbir işletme müşterisinin beklentisini karşılayamaz.",
    },
    {
      id: "u1-c13", no: 13, kavram: "u1-tur", zorluk: 2,
      soru: "Genellikle başka imkânı olmadığı için girişimciliğe yönelenlerden oluşur ve bu şekilde kurulan işlerin hayatta kalsa bile genellikle fazla büyüme ihtimalleri yoktur. Aşağıdakilerden hangisi yukarıda anlatılan girişimcilik türünden biridir?",
      secenekler: ["Fırsat Temelli Girişimcilik", "İstek Temelli Girişimcilik", "Heves Temelli Girişimcilik", "Trend Temelli Girişimcilik", "Zorunluluk Temelli Girişimcilik"],
      dogru: 4,
      aciklama: "Başka iş imkânı olmadığı için kurulan işler **zorunluluk temelli** girişimciliktir; fırsat temelli girişimcilik ise pazarda görülen bir fırsatı değerlendirmek için kurulur ve büyüme potansiyeli daha yüksektir.",
    },
  ]),

  ...turet(U, K, "u1-deger", [
    {
      id: "u1-t-icsel-amac", tip: "mcq", zorluk: 1,
      soru: "Kitaba göre ticari amaçla kurulan bir girişimin üç içsel amacı hangi seçenekte doğru verilmiştir?",
      secenekler: ["Kâr, hayatta kalma ve büyüme", "Kâr, vergi ve istihdam", "Büyüme, sosyal fayda ve ihracat", "Hayatta kalma, reklam ve marka"],
      dogru: 0,
      aciklama: "Girişimin içsel amaçları **kâr, hayatta kalma (sürdürülebilirlik) ve büyüme**dir.",
    },
    {
      id: "u1-t-paydas-beklenti", tip: "mcq", zorluk: 2,
      soru: "Paydaşların girişimden beklentileriyle ilgili eşleştirmelerden hangisi **yanlıştır**?",
      secenekler: ["Çalışan: iyi maaş ve çalışma koşulları", "Devlet: vergi ve kurallara uyum", "Doğa: gelecek nesillere aktarım", "Tedarikçi: yüksek parasal değerli ürün"],
      dogru: 3,
      aciklama: "Tedarikçi ve dağıtıcı girişimden **kârlı ilişkiler** bekler. Yüksek parasal değer müşterinin beklentisidir.",
    },
    {
      id: "u1-t-iyi-kotu", tip: "tf", zorluk: 1,
      soru: "Kitaba göre iyi ve kötü girişimciyi ayıran en temel fark, paydaşların beklentilerinin ne ölçüde karşılandığıdır.",
      dogru: true,
      aciklama: "Doğru. Girişimcinin temel görevi, birbiriyle çatışan beklentilere sahip paydaşları dengeli biçimde tatmin etmektir; bunun tek yolu da yenilik yapmaktır.",
    },
    {
      id: "u1-t-en-onemli-sorumluluk", tip: "fill", zorluk: 2,
      soru: "Kitaba göre girişimcinin işletmesini başarıya ulaştırmasında en önemli sorumluluğu ____ yapmaktır.",
      bosluklar: [["yenilik", "inovasyon"]],
      aciklama: "Girişimin değerini büyütmenin yolu rakiplerden farklı ürün ve hizmet ortaya koyan **yenilikler**dir.",
    },
    {
      id: "u1-t-paydas-sayisi", tip: "mcq", zorluk: 2,
      soru: "Aşağıdakilerden hangisi kitapta sayılan girişim paydaşları arasında **yer almaz**?",
      secenekler: ["Doğa", "Dağıtıcı", "Rakip firma", "Devlet"],
      dogru: 2,
      aciklama: "Paydaşlar: hissedar (sermayedar), çalışan, tedarikçi, dağıtıcı, devlet ve doğa. Rakipler paydaş değildir.",
    },
  ]),

  ...turet(U, K, "u1-tanim", [
    {
      id: "u1-t-cantillon", tip: "mcq", zorluk: 2,
      soru: "Girişimcilik kavramını Fransızca literatürde ilk kez kullanan ve girişimciyi daha çok belirsizlik ve risk boyutuyla ele alan düşünür kimdir?",
      secenekler: ["Joseph A. Schumpeter", "Richard Cantillon", "Jean Baptiste Say", "Peter Drucker"],
      dogru: 1,
      aciklama: "**Cantillon** (1730'lar) girişimciyi henüz belirginleşmemiş bir fiyatla satmak üzere girdileri satın alan, belirsiz bir gelirle yaşayan kişi olarak tanımlar.",
    },
    {
      id: "u1-t-say", tip: "mcq", zorluk: 2,
      soru: "Girişimciyi, emek, doğal kaynaklar ve sermayeden oluşan üretim faktörlerini bir araya getirme sorumluluğu olan kişi olarak tanımlayan ve yönetimsel sorumluluğu öne çıkaran düşünür kimdir?",
      secenekler: ["Jean Baptiste Say", "Richard Cantillon", "Joseph A. Schumpeter", "Oktay Alpugan"],
      dogru: 0,
      aciklama: "**J. B. Say** (1845) girişimciliğe bütüncül bir yaklaşım getirip girişimcinin yönetimsel sorumluluklarını öne çıkarmıştır.",
    },
    {
      id: "u1-t-schumpeter", tip: "mcq", zorluk: 2,
      soru: "Girişimcinin temel sorumluluğunun değişik türlerde yenilikler çıkararak toplumun refahını artırmak olduğunu vurgulayan iktisatçı kimdir?",
      secenekler: ["Richard Cantillon", "Peter Drucker", "Joseph A. Schumpeter", "Jean Baptiste Say"],
      dogru: 2,
      aciklama: "**Schumpeter** girişimciliği yenilik ve değer oluşturma faaliyeti olarak tanımlamıştır.",
    },
    {
      id: "u1-t-sermaye-sahipligi", tip: "tf", zorluk: 1,
      soru: "Kitaba göre girişimcinin vazgeçilmez özelliği, kurduğu işletmenin sermayesine sahip olmasıdır.",
      dogru: false,
      aciklama: "Yanlış. Girişimcinin temel fonksiyonu sermaye sahipliği değil; iş fikri geliştirip gerekli kaynakları bir araya getirerek **değer oluşturmaktır**. Ortaklık payı düşük olan kişi de girişimci olabilir.",
    },
  ]),

  ...turet(U, K, "u1-isletme", [
    {
      id: "u1-t-isletme-ogeler", tip: "mcq", zorluk: 2,
      soru: "İşletme tanımında vurgulanan üç temel öğe hangisinde birlikte verilmiştir?",
      secenekler: ["Amaç, ürün, istek/ihtiyaç", "Sermaye, emek, doğa", "Planlama, örgütleme, kontrol", "Kâr, büyüme, vergi"],
      dogru: 0,
      aciklama: "İşletme, belirli **amaçlar** doğrultusunda **ürün** ve hizmet üretip pazarlayarak insanların **istek ve ihtiyaçlarını** karşılayan ekonomik birimdir.",
    },
    {
      id: "u1-t-girisim-isletme", tip: "mcq", zorluk: 2,
      soru: "Arçelik A.Ş. ile onun Ankara'daki bulaşık makinesi fabrikası örneğinde hangi ayrım anlatılmaktadır?",
      secenekler: ["Girişim, işletme kavramını içine alan daha geniş bir kavramdır", "Fabrika girişim, şirket ise işletmedir", "İki kavram büyük şirketlerde de tamamen aynıdır", "İşletme yalnızca kamu kuruluşları için kullanılır"],
      dogru: 0,
      aciklama: "Büyüyen yapılarda **girişim** (Arçelik A.Ş.) daha geniş bir kavramdır; ona bağlı fabrikalar birer **işletme**dir. Küçük işletmelerde iki kavram arasında fark yoktur.",
    },
    {
      id: "u1-t-belediye", tip: "tf", zorluk: 1,
      soru: "Belediyenin halka hizmet için kurduğu ekmek fabrikasının ana amacı kâr elde etmek değil sosyal fayda sağlamaktır.",
      dogru: true,
      aciklama: "Doğru. Ticari beklentisi olmayan iktisadi işletmelerin faaliyetleri vergilerle karşılanır; ana amaçları sosyal faydadır.",
    },
  ]),

  ...turet(U, K, "u1-yonetim", [
    {
      id: "u1-t-planlama-sorular", tip: "mcq", zorluk: 1,
      soru: "\"Ne, ne zaman yapılacak; kim hangi kaynakları kullanarak, hangi amaçla yapacak?\" sorularına cevap aranan yönetim fonksiyonu hangisidir?",
      secenekler: ["Planlama", "Örgütleme", "Yürütme", "Kontrol"],
      dogru: 0,
      aciklama: "Bu sorular **planlama** aşamasında sorulur; yönetici amaçlara nasıl ulaşılacağını net biçimde ortaya koyar.",
    },
    {
      id: "u1-t-orgutleme", tip: "mcq", zorluk: 2,
      soru: "Sonunda işletmenin organizasyon şemasının ve yetki-sorumluluk dağılımının ortaya çıktığı yönetim fonksiyonu hangisidir?",
      secenekler: ["Kontrol", "Planlama", "Örgütleme", "Yöneltme"],
      dogru: 2,
      aciklama: "**Örgütleme**de hangi işlerin kimler tarafından nasıl bir yapıyla yapılacağı belirlenir; çıktısı organizasyon şeması ve yetki-sorumluluk dağılımıdır.",
    },
    {
      id: "u1-t-kontrol", tip: "mcq", zorluk: 2,
      soru: "Hedeflenen sonuçlara ulaşılıp ulaşılmadığını karşılaştıran, sapmanın nedenini bulup yeni planlamaya geri bildirim veren yönetim fonksiyonu hangisidir?",
      secenekler: ["Yürütme", "Kontrol", "Örgütleme", "Koordinasyon"],
      dogru: 1,
      aciklama: "**Kontrol**, karşılaştırma ve düzeltici önlemlerin belirlendiği fonksiyondur.",
    },
    {
      id: "u1-t-yurutme", tip: "mcq", zorluk: 2,
      soru: "Çalışanlar arasında amaç birliği sağlamak için motivasyon, liderlik ve iletişim kanallarının öne çıktığı yönetim fonksiyonu hangisidir?",
      secenekler: ["Yürütme", "Planlama", "Kontrol", "Örgütleme"],
      dogru: 0,
      aciklama: "**Yöneltme veya yürütme** fonksiyonunda çalışanlar belirli bir amaç doğrultusunda harekete geçirilir.",
    },
    {
      id: "u1-t-yonetici-risk", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre girişimci ile profesyonel yönetici arasındaki en temel fark hangisidir?",
      secenekler: ["Yönetici maaş alır, kâr/zarar riskini üstlenmez", "Yönetici işletmede hiçbir zaman karar vermez", "Girişimci kaynakları yönetmez, yalnızca fikir üretir", "Yönetici işletmenin sermayesinin tamamına sahiptir"],
      dogru: 0,
      aciklama: "Profesyonel yönetici işletmenin çalışanıdır; maaş alır, **kâr/zarar riskini girişimci üstlenir**.",
    },
    {
      id: "u1-t-lider-yonetici-tf", tip: "tf", zorluk: 1,
      soru: "Kitaba göre yönetici olmak için lider olmak şart değildir, ancak iyi ve başarılı bir yöneticilik için liderlik özellikleri zorunludur.",
      dogru: true,
      aciklama: "Doğru. Liderlik ve yöneticilik eş anlamlı değildir; liderlik özelliği olmayan yöneticiler de vardır ama ideal değildir.",
    },
    {
      id: "u1-t-lider-hedef", tip: "mcq", zorluk: 2,
      soru: "Yöneticilik ve liderlik karşılaştırmasında hangisi **liderliğe** aittir?",
      secenekler: ["Hedeflerin ve yapılacak işlerin belirlenmesiyle ilgilidir", "Bir organizasyon yapısı içinde gerçekleşir", "Makama verilen yetkileri kullanarak iş yaptırır", "Bir görev tanımı vardır"],
      dogru: 0,
      aciklama: "Yöneticilik tanımlı hedeflere ulaştıracak işlerin etkin yapılmasıyla, **liderlik** ise hedeflerin ve yapılacak işlerin belirlenmesiyle ilgilidir.",
    },
    {
      id: "u1-t-lider-temel", tip: "mcq", zorluk: 1,
      soru: "Kitaba göre çalışanları bir amaç doğrultusunda harekete geçirebilmenin, yani başarılı liderliğin temelinde ne bulunur?",
      secenekler: ["Güven", "Makam", "Ceza sistemi", "Sermaye"],
      dogru: 0,
      aciklama: "Liderliğin temelinde **güven** vardır; çalışanlarda güven duygusu yaratamayan girişimcinin lider olması beklenemez.",
    },
  ]),

  ...turet(U, K, "u1-kobi", [
    {
      id: "u1-t-mikro", tip: "mcq", zorluk: 2,
      soru: "8 çalışanı ve 2 milyon TL yıllık net satış hasılatı olan bağımsız bir işletme kitaptaki tanıma göre hangi sınıftadır?",
      secenekler: ["Mikro işletme", "Küçük işletme", "Orta büyüklükte işletme", "Büyük işletme"],
      dogru: 0,
      aciklama: "Mikro işletme: **10 kişiden az** çalışan ve ciro ya da bilançosu **3 milyon TL**'yi aşmayan işletme.",
    },
    {
      id: "u1-t-orta", tip: "mcq", zorluk: 2,
      soru: "180 çalışanı ve 90 milyon TL cirosu olan bağımsız bir işletme kitaptaki tanıma göre hangi sınıftadır?",
      secenekler: ["Küçük işletme", "Orta büyüklükte işletme", "Mikro işletme", "Büyük işletme"],
      dogru: 1,
      aciklama: "Orta büyüklükteki işletme: **250 kişiden az** çalışan ve ciro ya da bilançosu **125 milyon TL**'yi aşmayan işletme. 50 kişi ve 25 milyon TL küçük işletme sınırını aştığı için orta sınıftadır.",
    },
    {
      id: "u1-t-bagimsizlik", tip: "fill", zorluk: 3,
      soru: "Ortakları arasında hisse oranı %____'ten fazla olan büyük bir işletme bulunan firma, bağımsızlık şartını sağlamadığı için KOBİ sayılmaz.",
      bosluklar: [["25", "yirmi beş", "yirmibeş"]],
      aciklama: "Bağımsızlık şartı: ortaklar arasında **%25**'ten fazla hisseye sahip büyük işletme olmamalıdır.",
    },
    {
      id: "u1-t-kobi-oran", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre ülkemizdeki girişimlerin yaklaşık yüzde kaçı küçük ve orta ölçekli işletmedir?",
      secenekler: ["%99,5", "%73,5", "%62", "%55"],
      dogru: 0,
      aciklama: "Girişimlerin büyük çoğunluğu (**%99,5**) KOBİ'dir. %73,5 istihdam, %62 ciro, %55 ihracat payıdır.",
    },
    {
      id: "u1-t-kobi-dezavantaj", tip: "mcq", zorluk: 1,
      soru: "Aşağıdakilerden hangisi KOBİ'lerin **dezavantajlarından** biridir?",
      secenekler: ["Satış dalgalanmalarının yüksek olması", "Daha az bürokrasi", "Pazar ve müşteriye yakınlık", "Büyük işletmelerin tamamlayıcısı olmaları"],
      dogru: 0,
      aciklama: "Dezavantajlar: tecrübeli personel eksikliği, düşük miktarlı tedarik yüzünden yüksek maliyet, fiyat rekabetine dayanıksızlık, **satış dalgalanmaları** ve tek yöneticiye bağımlılık.",
    },
    {
      id: "u1-t-kobi-kopya", tip: "tf", zorluk: 1,
      soru: "KOBİ'ler büyük işletmelerin küçük birer kopyasıdır; bu yüzden büyük işletmelerin hareket tarzını taklit etmeleri olumlu sonuç verir.",
      dogru: false,
      aciklama: "Yanlış. KOBİ'ler büyük işletmelerden çok farklı iş modellerine, ürünlere ve pazarlara sahiptir; büyük işletme gibi davranmaları gerekmez.",
    },
  ]),

  ...turet(U, K, "u1-nitelik", [
    {
      id: "u1-t-ozyeterlilik", tip: "mcq", zorluk: 1,
      soru: "Kişinin istenen bir sonuca ulaşmada sergileyebileceği bilgi ve yeteneklerine olan inancına ne ad verilir?",
      secenekler: ["Öz yeterlilik", "Risk alma", "Yenilikçilik", "Liderlik"],
      dogru: 0,
      aciklama: "**Öz yeterlilik**; yüksek olan kişiler kendilerine yüksek hedef koyar, zorluklara gönüllü olarak mücadele eder.",
    },
    {
      id: "u1-t-dogustan", tip: "tf", zorluk: 1,
      soru: "Kitaba göre girişimcilik doğuştan gelen kişilik özelliklerine bağlıdır; bu özelliklere sahip olmayan biri girişimci olamaz.",
      dogru: false,
      aciklama: "Yanlış. Girişimcilik başarısı doğuştan gelen özelliklerle açıklanmaz; gerekli nitelikler çalışarak kazanılabilir, **herkes girişimci olabilir**.",
    },
    {
      id: "u1-t-drucker-risk", tip: "mcq", zorluk: 2,
      soru: "Peter Drucker'a göre çevresindeki değişimi doğru okuyup buna uygun hareket eden yenilikçi girişimciler aslında ne yapmaktadır?",
      secenekler: ["Riski minimize etmeye çalışır", "Kumarbaz gibi yüksek risk alır", "Riskten tamamen kaçınır", "Riski devlete devreder"],
      dogru: 0,
      aciklama: "Drucker'a göre bu girişimciler risk alan değil **riski minimize etmeye çalışan** kişilerdir; en büyük risk değişime uyum sağlamamaktır.",
    },
    {
      id: "u1-t-yenilik-kapsam", tip: "mcq", zorluk: 2,
      soru: "Kitapta girişimcinin yenilikçilik özelliğinden söz edilirken yeniliğin kapsamı için hangisi söylenir?",
      secenekler: ["Ürün, hizmet, yeni pazar, dağıtım kanalı ve süreçleri kapsar", "Yalnızca daha önce olmayan bir ürünü icat etmektir", "Yalnızca Ar-Ge bölümünün yaptığı işleri kapsar", "Yalnızca teknoloji firmaları için geçerli bir kavramdır"],
      dogru: 0,
      aciklama: "Yenilik (inovasyon) geniş anlamda ürün, hizmet, yeni pazar, yeni dağıtım kanalı ve süreç farklılaştırmayı kapsar.",
    },
  ]),

  ...turet(U, K, "u1-motivasyon", [
    {
      id: "u1-t-bagimsizlik-mot", tip: "mcq", zorluk: 1,
      soru: "Kendi işinin patronu olmak, kendi kararlarını verebilmek ve kişisel özgürlüğünü korumak hangi tür girişimcilik motivasyonudur?",
      secenekler: ["Bağımsızlığa yönelik", "Güvenliğe yönelik", "Maddi", "Bireysel"],
      dogru: 0,
      aciklama: "Bunlar **bağımsızlığa yönelik** motivasyonlardır; kitap bunları kişiyi girişimciliğe iten en önemli nedenler arasında sayar.",
    },
    {
      id: "u1-t-icsel-mot", tip: "mcq", zorluk: 1,
      soru: "Bir şeyleri yapabileceğini kanıtlamak, kamuoyunda tanınmak ve zor bir işi başarma duygusu hangi motivasyon grubundadır?",
      secenekler: ["Bireysel", "Maddi", "Bağımsızlığa yönelik", "Güvenliğe yönelik"],
      dogru: 0,
      aciklama: "Kişinin duygusal beklentilerini karşılayan gerekçeler **bireysel (içsel)** motivasyonlardır.",
    },
    {
      id: "u1-t-maddi-mot", tip: "mcq", zorluk: 1,
      soru: "İyi bir yaşam standardına sahip olmak ve daha fazla para kazanmak isteği hangi motivasyon grubuna girer?",
      secenekler: ["Maddi", "Bireysel", "Güvenliğe yönelik", "Çevresel"],
      dogru: 0,
      aciklama: "Girişimciliğin getirebileceği refah **maddi (dışsal)** motivasyondur.",
    },
    {
      id: "u1-t-ulke-mot", tip: "tf", zorluk: 2,
      soru: "Kitaba göre gelir ve refah seviyesinin düşük olduğu ülkelerde güvenlikle ilgili motivasyonlar, gelişmiş ülkelerde ise bağımsızlık ve otonomiye yönelik motivasyonlar daha ön plandadır.",
      dogru: true,
      aciklama: "Doğru. Motivasyonlar ülkeye ve zamana göre değişir.",
    },
    {
      id: "u1-t-engeller", tip: "mcq", zorluk: 1,
      soru: "Aşağıdakilerden hangisi kitapta girişimcilikte en çok karşılaşılan engeller arasında **sayılmaz**?",
      secenekler: ["Düzenli ve yüksek maaş", "Uzun çalışma saatleri", "Düzensiz gelir", "Stresli bir yaşam"],
      dogru: 0,
      aciklama: "Engeller: **uzun çalışma saatleri, düzensiz gelir ve stresli yaşam**. Düzenli gelir bir engel değil, tam tersine girişimcinin genellikle sahip olmadığı şeydir.",
    },
    {
      id: "u1-t-en-zor-donem", tip: "mcq", zorluk: 1,
      soru: "Kitaba göre girişimcilik serüveninin en zor dönemleri hangileridir?",
      secenekler: ["Kuruluş öncesi ve kuruluş aşamaları", "Büyüme ve çıkış aşamaları", "Olgunluk aşaması", "Halka arz sonrası"],
      dogru: 0,
      aciklama: "**Kuruluş öncesi ve kuruluş** aşamalarında ekip kurma, finansman, üretim, kalite ve rekabet sorunları yoğundur.",
    },
  ]),

  ...turet(U, K, "u1-basarisizlik", [
    {
      id: "u1-t-olum-vadisi", tip: "mcq", zorluk: 1,
      soru: "Girişimcinin henüz pazara girmeden yaptığı yatırımlar ile bu yatırımlardan gelir elde etmeye başladığı süre arasında kalan, finansmanı biterse işletmenin kapandığı döneme ne ad verilir?",
      secenekler: ["Ölüm vadisi", "Başabaş noktası", "Nakit akışı", "Çıkış stratejisi"],
      dogru: 0,
      aciklama: "Bu döneme **ölüm vadisi** denir; bu sırada finansman biterse işletme kapanır.",
    },
    {
      id: "u1-t-nakit-yakma", tip: "fill", zorluk: 2,
      soru: "İşletmenin ürün satışından gelir elde etmeden elindeki nakit sermayeyi harcamasına \"nakit ____\" (cash burn) denir.",
      bosluklar: [["yakma"]],
      aciklama: "Buna **nakit yakma** (cash burn) denir.",
    },
    {
      id: "u1-t-finansal-sonuc", tip: "tf", zorluk: 2,
      soru: "Kitaba göre finansal kaynak yetersizliği başarısızlığın çoğu zaman bir sebebi değil sonucudur; asıl üzerinde durulması gereken ona yol açan nedenlerdir.",
      dogru: true,
      aciklama: "Doğru. Her iflasın finansal bir yüzü vardır ama ona yol açan temel neden farklıdır.",
    },
    {
      id: "u1-t-nakit-en-cok", tip: "mcq", zorluk: 2,
      soru: "Ölüm vadisi eğrisinde işletmenin nakde en çok ihtiyaç duyduğu aşama hangisidir?",
      secenekler: ["Pazara sunuş aşaması", "Araştırma aşaması", "İşletme başarısı sonrası", "Fikir aşaması"],
      dogru: 0,
      aciklama: "Tanıtım ve dağıtım kanallarına girme gibi harcamalar yüzünden nakde en çok **pazara sunuş** aşamasında ihtiyaç duyulur.",
    },
    {
      id: "u1-t-kapanis-orani", tip: "mcq", zorluk: 3,
      soru: "Kitaptaki sekiz yıllık verilere göre küçük işletmelerin tercih ettiği gerçek kişi işletmelerinde kapanış oranı yaklaşık yüzde kaçtır?",
      secenekler: ["%85", "%56", "%40", "%25"],
      dogru: 0,
      aciklama: "Gerçek kişi işletmelerinde kapanış oranı **%85**, şirket ve kooperatiflerde %56'dır; yani küçük işletmelerde başarısızlık daha fazladır.",
    },
    {
      id: "u1-t-iki-yil", tip: "mcq", zorluk: 2,
      soru: "Kitapta aktarılan verilere göre kurulan işletmelerin yüzde kaçı ilk iki yıl içinde faaliyetine devam edebilmektedir?",
      secenekler: ["%40", "%60", "%85", "%99,5"],
      dogru: 0,
      aciklama: "İşletmelerin yalnızca **%40**'ı ilk iki yılı çıkarır, %60'ı faaliyetine son verir.",
    },
    {
      id: "u1-t-olcusuz-buyume", tip: "mcq", zorluk: 2,
      soru: "Ölçüm yapmadan yeni dağıtım kanalına girmek, kapasite yatırımı yapmak gibi plansız hamleler hangi başarısızlık nedenine örnektir?",
      secenekler: ["Ölçüsüz büyüme", "Çevresel nedenler", "Kuruluş öncesi araştırma eksikliği", "Düzensiz gelir"],
      dogru: 0,
      aciklama: "**Ölçüsüz büyüme** küçük işletmeleri olduğu kadar büyük işletmeleri de iflasa sürükleyebilir.",
    },
  ]),

  ...turet(U, K, "u1-surec", [
    {
      id: "u1-t-surec-sira", tip: "mcq", zorluk: 2,
      soru: "Girişimcilik sürecinin aşamaları hangi seçenekte doğru sırayla verilmiştir?",
      secenekler: [
        "Fırsatların tespiti → İş modeli ve iş planı → Kaynakların bulunması → Büyüme ve çıkış",
        "İş planı → Fırsatların tespiti → Büyüme ve çıkış → Kaynakların bulunması",
        "Kaynakların bulunması → Fırsatların tespiti → İş planı → Büyüme ve çıkış",
        "Fırsatların tespiti → Kaynakların bulunması → Büyüme ve çıkış → İş modeli ve iş planı",
      ],
      dogru: 0,
      aciklama: "Doğru sıra: fırsatların tespiti, iş modeli ve iş planı geliştirme, kaynakların bulunması ve kuruluş, büyüme ve çıkış.",
    },
    {
      id: "u1-t-firsat-kaynak", tip: "mcq", zorluk: 2,
      soru: "Nüfusun yaşlanmasıyla yaşlı bakım hizmetlerine talebin artması, fırsat kaynaklarından hangisine örnektir?",
      secenekler: ["Demografik eğilimlerdeki değişimler", "Teknolojik değişimler", "Yasal çevredeki değişimler", "Ekonomik faktörlerdeki değişimler"],
      dogru: 0,
      aciklama: "Nüfus yapısıyla ilgili değişimler **demografik** eğilimlerdir.",
    },
    {
      id: "u1-t-melek", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre melek yatırımcıların bir girişimde ilk inceledikleri konu nedir?",
      secenekler: ["Girişimci ve kurduğu ekip", "Ürünün patenti", "İş fikrinin karmaşıklığı", "Şirketin kuruluş yeri"],
      dogru: 0,
      aciklama: "Melek yatırımcılar ilk olarak iş fikrine değil, **girişimciye ve ekibine** bakar.",
    },
    {
      id: "u1-t-cikis-stratejisi", tip: "mcq", zorluk: 2,
      soru: "Hızlı büyüme sonrası girişimcinin işletmesini büyük sermaye gruplarına satıp elde ettiği nakdi yeni girişimlere aktarmasına ne ad verilir?",
      secenekler: ["Çıkış stratejisi", "Ölçüsüz büyüme", "Nakit yakma", "Ortaklıktan çıkarılma"],
      dogru: 0,
      aciklama: "Bu yenilik odaklı girişimcilerin tercih edebildiği **çıkış stratejisi**dir.",
    },
    {
      id: "u1-t-is-modeli-tanim", tip: "mcq", zorluk: 2,
      soru: "\"İşletmenin nasıl değer yaratacağının, bu değeri müşteriye nasıl ulaştıracağının ve nasıl gelir elde edeceğinin kısa açıklaması\" neyin tanımıdır?",
      secenekler: ["İş modeli", "İş planı", "Fizibilite raporu", "Organizasyon şeması"],
      dogru: 0,
      aciklama: "Bu **iş modeli**nin tanımıdır; iş planı ise teknik, ekonomik ve finansal fizibiliteyi içeren daha kapsamlı bir belgedir.",
    },
    {
      id: "u1-t-sermaye-kaynaklari", tip: "mcq", zorluk: 1,
      soru: "Aşağıdakilerden hangisi kitapta kuruluş aşamasında sermaye bulunabilecek kaynaklar arasında **sayılmaz**?",
      secenekler: ["Müşterilerden alınan kişisel itibar", "Arkadaşlar ve aile", "Melek yatırımcılar", "Kamu fonları"],
      dogru: 0,
      aciklama: "Sermaye kaynakları: öz sermaye, arkadaşlar ve aile, melek yatırımcılar, banka kredileri ve kamu fonları (KOSGEB, TÜBİTAK).",
    },
  ]),

  ...turet(U, K, "u1-efsane", [
    {
      id: "u1-t-ozkaynak-plan", tip: "tf", zorluk: 1,
      soru: "İşletme tamamen özkaynakla kurulacaksa iş planı hazırlamaya gerek yoktur.",
      dogru: false,
      aciklama: "Yanlış; bu bir efsanedir. İş planı işin tüm yönlerini ortaya koyup riskleri azaltır; kendi paramızı kullanırken de aynı hassasiyet gösterilmelidir.",
    },
    {
      id: "u1-t-ilk-olmak", tip: "mcq", zorluk: 2,
      soru: "\"Ürün kimsede yoksa başarı garantidir\" efsanesine karşı kitapta hangi örnek verilir?",
      secenekler: ["Amazon, Apple ve Tesla pazarda ilk olmadıkları halde başarılı olmuştur", "Starbucks kahveyi icat ettiği için başarılı olmuştur", "Dropbox karmaşık bir iş fikri sayesinde büyümüştür", "Yemeksepeti rakibi olmadığı için hiç zorlanmamıştır"],
      dogru: 0,
      aciklama: "Pazarda ilk olmak başarıyı garanti etmez; **Amazon, Apple, Tesla** ilk olmadan yenilikçi uygulamalarıyla başarılı olmuştur.",
    },
    {
      id: "u1-t-fikir-paylas", tip: "tf", zorluk: 1,
      soru: "Kitaba göre iş fikri, çalınmasın diye ürün pazara çıkana kadar kimseyle paylaşılmamalıdır.",
      dogru: false,
      aciklama: "Yanlış; bu bir efsanedir. Paylaşılan fikirler ortak akılla gelişir; kuluçka merkezleri de bu mantıkla çalışır. Yalnızca ticari sır niteliğindeki özellikler saklanmalıdır.",
    },
    {
      id: "u1-t-basit-fikir", tip: "mcq", zorluk: 1,
      soru: "Kitaba göre başarılı iş fikirlerinin ortak özelliği hangisidir?",
      secenekler: ["Basit ve kolay anlaşılır olmaları", "Çok karmaşık olmaları", "Daha önce hiç denenmemiş olmaları", "Yalnızca teknoloji içermeleri"],
      dogru: 0,
      aciklama: "İş fikri **basit ve anlaşılır** olduğu ölçüde değer kazanır; Dropbox, Instagram, Yemeksepeti örnekleri böyledir.",
    },
  ]),
];
