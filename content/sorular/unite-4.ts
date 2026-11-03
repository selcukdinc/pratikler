// 4. ünite: İş Modelleri, Müşteriler, Değer Önerileri ve Gelir Kaynakları

import { cikmis, kitap, turet, type Soru } from "./tipler.ts";

const U = 4;
const K = "u4";

export const unite4: Soru[] = [
  ...kitap(U, K, [
    {
      id: "u4-k01", no: 1, kavram: "u4-kanvas",
      soru: "Aşağıdakilerden hangisi Kanvas İş Modelinin yapıtaşlarından değildir?",
      secenekler: ["Müşteri Kesitleri", "Müşteri Kârlılığı", "Müşteri İlişkileri", "Değer Önerileri", "Kanallar"],
      dogru: 1,
      aciklama: "Kanvas'ın dokuz yapı taşı: müşteri kesitleri, değer önerileri, kanallar, müşteri ilişkileri, gelir kaynakları, kilit kaynaklar, kilit etkinlikler, kilit ortaklıklar ve maliyet yapısı. **Müşteri kârlılığı** bunlardan biri değildir.",
    },
    {
      id: "u4-k02", no: 2, kavram: "u4-kanvas",
      soru: "Aşağıdakilerden hangisi Kanvas İş Modelinin yapıtaşlarından değildir?",
      secenekler: ["Kilit Etkinlikler", "Kilit Kaynaklar", "Pazarlama Yapısı", "Gelir Kaynakları", "Maliyet Yapısı"],
      dogru: 2,
      aciklama: "Kilit etkinlikler, kilit kaynaklar, gelir kaynakları ve maliyet yapısı Kanvas'ın yapı taşlarıdır. **Pazarlama yapısı** değildir.",
    },
    {
      id: "u4-k03", no: 3, kavram: "u4-kesit",
      soru: "Aşağıdakilerden hangisi Müşteri Kesitleri tanımlamak için yaygın olarak kullanılan kriterlerden değildir?",
      secenekler: ["Coğrafi", "Demografik", "Psikografik", "Bilişsel", "Davranışsal"],
      dogru: 3,
      aciklama: "Yaygın kesitleme kriterleri coğrafi, demografik, psikografik ve davranışsaldır. **Bilişsel** bunlardan biri değildir.",
    },
    {
      id: "u4-k04", no: 4, cikmis: 11, kavram: "u4-kesit",
      soru: "Kişilik, İlgi alanları, Hobiler, Değerler gibi özelliklere göre yapılan müşteri kesitlerine ayırma aşağıdakilerden hangisine göre yapılmıştır?",
      secenekler: ["Coğrafi", "Demografik", "Psikografik", "Bilişsel", "Davranışsal"],
      dogru: 2,
      aciklama: "Kişilik, ilgi alanı, hobi, değer ve yaşam tarzı **psikografik** kesitleme ölçütleridir. Yaş, gelir, cinsiyet ise demografiktir.",
    },
    {
      id: "u4-k05", no: 5, kavram: "u4-satin-alma",
      soru: "Satın alma süreci, özellikle kurumsal müşterilerde oldukça karmaşıktır. Aşağıdakilerden hangisi bu süreçte rastlanan rollerden değildir?",
      secenekler: ["Güç simsarları", "Son kullanıcılar", "Karar vericiler", "Etkileyenler", "Faturayı ödeyenler"],
      dogru: 0,
      aciklama: "Satın alma sürecindeki roller: etkileyenler, faturayı ödeyenler, karar vericiler, son kullanıcılar ve sabotajcılar. **Güç simsarları** diye bir rol yoktur.",
    },
    {
      id: "u4-k06", no: 6, kavram: "u4-kanvas", zorluk: 2,
      soru: "Aşağıdakilerden hangisi iş modelleri kullanmanın faydalarından değildir?",
      secenekler: ["Havada uçuşan iş fikirlerinin kağıda dökülmesini sağlamak.", "İş fikirlerinin önemli noktalar atlanmadan detaylandırılması.", "Uzun vadeli, kapsamlı ve detaylı bir plan hazırlanması.", "İş fikrinin başarılı olabilmesi için gerekli olan varsayımların belirlenmesi.", "İş fikrinin ne tür alternatifleri olabileceğini görebilmek."],
      dogru: 2,
      aciklama: "İş modeli fikri tek sayfada hızla kağıda döker, varsayımları ve alternatifleri görünür kılar. **Uzun ve ayrıntılı bir plan** ise iş planının işidir, iş modelinin değil.",
    },
    {
      id: "u4-k07", no: 7, cikmis: 12, kavram: "u4-gelir",
      soru: "“Alıcı ve satıcıları bir araya getirerek gerçekleşen işlemlerden komisyon almak.” Aşağıdakilerden hangisi yukarıda anlatılan fikrin gelir modelidir?",
      secenekler: ["Bedelsiz ve Primli", "Hizmet Olarak Yazılım (SaaS)", "Pazar yeri", "Yem ve Olta", "Doğrudan satış"],
      dogru: 2,
      aciklama: "**Pazar yerleri** alıcıyla satıcıyı buluşturup genellikle komisyon alır; Yemeksepeti, Armut.com örnekleridir.",
    },
    {
      id: "u4-k08", no: 8, kavram: "u4-gelir",
      soru: "Kullanıcılardan ücret almak yerine onlara ürünlerini tanıtmak isteyen başkalarından gelir elde etmek. Aşağıdakilerden hangisi yukarıda anlatılan fikrin gelir modelidir?",
      secenekler: ["Bedelsiz ve Primli", "Hizmet Olarak Yazılım (SaaS)", "Reklam Destekli", "Pazar yeri", "Yem ve Olta"],
      dogru: 2,
      aciklama: "**Reklam destekli** modelde kullanıcı ücretsiz yararlanır; asıl müşteri reklam verendir (Google, Facebook, ücretsiz gazeteler).",
    },
    {
      id: "u4-k09", no: 9, kavram: "u4-gelir",
      soru: "Bir ürünü ucuza satarak başka bir ürünün düzenli olarak kullanılmasını ve oradan gelir elde edilmesini sağlamak. Aşağıdakilerden hangisi yukarıda anlatılan fikrin gelir modelidir?",
      secenekler: ["Bedelsiz ve Primli", "Hizmet Olarak Yazılım (SaaS)", "Reklam Destekli", "Pazar yeri", "Yem ve Olta"],
      dogru: 4,
      aciklama: "**Yem ve olta** (tıraş bıçağı modeli): Gillette sapı ucuza satar, bıçaklardan kazanır. Kartuşlu kahve makineleri ve mürekkep püskürtmeli yazıcılar da böyledir.",
    },
    {
      id: "u4-k10", no: 10, kavram: "u4-gelir",
      soru: "Kullanıcılara temel bir ürünü karşılıksız olarak vererek daha özellikli bir ürüne bazı müşterileri yönlendirmek ve oradan para kazanmak. Aşağıdakilerden hangisi yukarıda anlatılan fikrin gelir modelidir?",
      secenekler: ["Bedelsiz ve Primli", "Hizmet Olarak Yazılım (SaaS)", "Reklam Destekli", "Pazar yeri", "Yem ve Olta"],
      dogru: 0,
      aciklama: "**Bedelsiz ve primli (freemium)**: temel sürüm ücretsiz, gelişmiş sürüm ücretli. Dropbox ve Skype örnekleridir.",
    },
  ]),

  ...cikmis(U, K, [
    {
      id: "u4-c08", no: 8, kavram: "u4-gelir",
      soru: "Aşağıdakilerden hangisi alıcı ile satıcıları birleştiren ve aracıları ortadan kaldırarak erişilebilirliği ve bulunabilirliği artıran platformların genel adıdır?",
      secenekler: ["Pazaryeri iş modeli", "AVM iş modeli", "Market iş modeli", "Bazaar iş modeli", "MALL iş modeli"],
      dogru: 0,
      aciklama: "Alıcıyla satıcıyı aracısız buluşturan platformlar **pazaryeri iş modeli**dir; sahibinden.com, letgo, Alibaba gibi.",
    },
  ]),

  ...turet(U, K, "u4-kanvas", [
    {
      id: "u4-t-osterwalder", tip: "mcq", zorluk: 1,
      soru: "Kanvas İş Modelini geliştiren kişi kimdir?",
      secenekler: ["Alexander Osterwalder", "Theodore Levitt", "Gordon Moore", "Chris Anderson"],
      dogru: 0,
      aciklama: "Kanvas İş Modeli **Alexander Osterwalder** tarafından geliştirilmiştir ve iş fikrini 9 yapı taşına ayırır.",
    },
    {
      id: "u4-t-dokuz", tip: "fill", zorluk: 1,
      soru: "Kanvas İş Modeli bir iş fikrini ____ yapı taşına ayırır. (rakamla yazın)",
      bosluklar: [["9", "dokuz"]],
      aciklama: "Kanvas **9** yapı taşından oluşur.",
    },
    {
      id: "u4-t-kalp", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre Kanvas'ta ilk incelenip kesinleştirilmesi gereken, modelin kalbi olan iki yapı taşı hangisidir?",
      secenekler: ["Müşteri kesitleri ve değer önerileri", "Kilit kaynaklar ve kilit etkinlikler", "Maliyet yapısı ve gelir kaynakları", "Kanallar ve kilit ortaklıklar"],
      dogru: 0,
      aciklama: "Modelin kalbi **müşteri kesitleri ve değer önerileri**dir; aralarındaki ürün/pazar uyumu kritik önemdedir.",
    },
    {
      id: "u4-t-urun-pazar", tip: "tf", zorluk: 2,
      soru: "Kitaba göre müşteri kesitleri ile değer önerileri arasında ürün/pazar uyumu yoksa model değiştirilmeli ya da fikir terk edilmelidir.",
      dogru: true,
      aciklama: "Doğru. Uyum varsa fikir geliştirilir; yoksa başarı şansı olan bir model aranır ya da fikir bırakılır.",
    },
    {
      id: "u4-t-cac-ltv", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre bir iş modelinin değer yaratabildiğini gösteren ilişki hangisidir?",
      secenekler: ["CAC < LTV", "CAC > LTV", "CAC = 0", "LTV = 0"],
      dogru: 0,
      aciklama: "Müşteri elde etme maliyeti (**CAC**) müşterinin ömür boyu değerinden (**LTV**) küçükse model değer yaratabilir.",
    },
    {
      id: "u4-t-ltv", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre LTV (ömür boyu değer) nasıl hesaplanır?",
      secenekler: ["Birim başına ücret × müşterinin sizinle kalma süresi", "Toplam reklam bütçesi ÷ toplam müşteri sayısı", "Toplam üretim maliyeti − toplam satış geliri", "İlk yatırım tutarı ÷ ortalama aylık net kâr"],
      dogru: 0,
      aciklama: "LTV = **birim başına ücret × kalma süresi**. Müşteriyi memnun tutmak süreyi uzatarak LTV'yi artırır.",
    },
    {
      id: "u4-t-kilit-kaynak", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre kilit kaynaklar hangi türlerde olabilir?",
      secenekler: ["Fiziksel, finansal, fikri ve beşeri", "Yalnızca finansal", "Yalnızca fiziksel ve finansal", "Yalnızca beşeri"],
      dogru: 0,
      aciklama: "Kilit kaynaklar **fiziksel, finansal, fikri veya beşeri** olabilir: patent, e-posta listesi, iyi bir yazılımcı, değerli bir tesis gibi.",
    },
    {
      id: "u4-t-olagan-etkinlik", tip: "tf", zorluk: 2,
      soru: "Yapılması zorunlu olan ama çok olağan ve kolay yapılabilen işler de kilit etkinlik sayılır.",
      dogru: false,
      aciklama: "Yanlış. Kilit etkinlikler **zor veya pahalı** olanlardır; olağan işler zorunlu olsa bile kilit etkinlik değildir.",
    },
  ]),

  ...turet(U, K, "u4-kesit", [
    {
      id: "u4-t-segmentasyon", tip: "mcq", zorluk: 1,
      soru: "Müşterileri kendi içinde benzer, diğerlerinden farklı alt gruplara ayırmaya ne ad verilir?",
      secenekler: ["Segmentasyon", "Değerleme", "Tescil", "Konumlandırma"],
      dogru: 0,
      aciklama: "Bu işleme **kesitlere ayırma, bölümleme ya da segmentasyon** denir.",
    },
    {
      id: "u4-t-demografik", tip: "mcq", zorluk: 1,
      soru: "Yaş, gelir seviyesi ve medeni duruma göre yapılan kesitleme hangi türdür?",
      secenekler: ["Demografik", "Psikografik", "Davranışsal", "Coğrafi"],
      dogru: 0,
      aciklama: "Yaş, cinsiyet, gelir, medeni durum **demografik** ölçütlerdir.",
    },
    {
      id: "u4-t-kullanici-musteri", tip: "mcq", zorluk: 2,
      soru: "Reklam destekli ücretsiz bir gazetede asıl müşteri kimdir?",
      secenekler: ["Reklam verenler", "Okuyucular", "Gazeteyi dağıtanlar", "Matbaa"],
      dogru: 0,
      aciklama: "Okuyucular **kullanıcı**dır; parayı ödeyen asıl **müşteri reklam verenlerdir**. Yine de okuyucular olmazsa reklam verenler de gelmez.",
    },
    {
      id: "u4-t-is-aci", tip: "mcq", zorluk: 2,
      soru: "Değer önerisi tasarımında müşterinin işlerini yaparken karşılaştığı sıkıntılara ne ad verilir?",
      secenekler: ["Acılar", "Kazanımlar", "Kanallar", "Kilit etkinlikler"],
      dogru: 0,
      aciklama: "Müşteri **acıları** işlerini zorlaştıran ya da engelleyen şeylerdir; **kazanımlar** ise sağlanan faydalardır.",
    },
  ]),

  ...turet(U, K, "u4-satin-alma", [
    {
      id: "u4-t-sabotajci", tip: "mcq", zorluk: 2,
      soru: "Kurumsal satın alma sürecinde satın almayı engellemeye çalışan role ne ad verilir?",
      secenekler: ["Sabotajcılar", "Etkileyenler", "Karar vericiler", "Son kullanıcılar"],
      dogru: 0,
      aciklama: "**Sabotajcılar** satın alma sürecini kesintiye uğratmaya veya engellemeye çalışan kişilerdir.",
    },
    {
      id: "u4-t-faturayi-odeyen", tip: "mcq", zorluk: 2,
      soru: "Kurum bütçesini kontrol eden, gerektiğinde karar vericilerin kararını veto edebilen rol hangisidir?",
      secenekler: ["Faturayı ödeyenler", "Etkileyenler", "Son kullanıcılar", "Sabotajcılar"],
      dogru: 0,
      aciklama: "**Faturayı ödeyenler (economic buyers)** bütçeyi kontrol eder ve kararları değiştirebilir.",
    },
    {
      id: "u4-t-etkileyen", tip: "tf", zorluk: 1,
      soru: "Etkileyenler satın alma kararını doğrudan vermez ama görüşleri son kararda etkilidir.",
      dogru: true,
      aciklama: "Doğru. **Etkileyenler (influencers)** kararı vermez, kararı etkiler.",
    },
  ]),

  ...turet(U, K, "u4-gelir", [
    {
      id: "u4-t-en-eski", tip: "mcq", zorluk: 1,
      soru: "Kitaba göre gelir kaynakları arasında en eski olanı hangisidir?",
      secenekler: ["Ürün veya hizmet satışı", "Abonelik", "Reklam destekli", "Bedelsiz ve primli"],
      dogru: 0,
      aciklama: "**Satış** ticaretin para karşılığı yapılmaya başlamasından beri var olan en eski gelir kaynağıdır.",
    },
    {
      id: "u4-t-taban-tavan", tip: "mcq", zorluk: 3,
      soru: "Kitaba göre fiyatlamada üretim maliyeti ile müşterinin elde ettiği faydanın parasal değeri neyi oluşturur?",
      secenekler: ["Maliyet tabanı, fayda ise tavanı", "Maliyet tavanı, fayda ise tabanı", "İkisi birlikte başabaş noktasını", "İkisi birlikte değerlemeyi"],
      dogru: 0,
      aciklama: "Maliyet altına inilmemesi gereken **taban**, faydanın değeri üstüne çıkılmaması gereken **tavan**dır; denge pazarlık güçlerine göre oluşur.",
    },
    {
      id: "u4-t-xerox", tip: "mcq", zorluk: 2,
      soru: "Xerox'un pahalı fotokopi makinesini başarılı kılan gelir modeli hangisidir?",
      secenekler: ["Kullandıkça öde", "Doğrudan satış", "Yem ve olta", "Reklam destekli"],
      dogru: 0,
      aciklama: "Makineyi satmak yerine **kullandıkça öde** modeliyle pazarlamak, riske girmek istemeyen yöneticileri ikna etti.",
    },
    {
      id: "u4-t-abonelik", tip: "mcq", zorluk: 1,
      soru: "Netflix, spor salonları ve kablo TV'nin ortak gelir modeli hangisidir?",
      secenekler: ["Abonelik", "Kiralama", "Pazar yeri", "Yem ve olta"],
      dogru: 0,
      aciklama: "Belirli süre için erişim hakkı satan model **abonelik**tir; ilk kullananlar gazete ve dergilerdir.",
    },
    {
      id: "u4-t-dogrudan", tip: "mcq", zorluk: 1,
      soru: "\"Kapıdan kapıya satış\" olarak da bilinen gelir modeli hangisidir?",
      secenekler: ["Doğrudan satış", "Kullandıkça öde", "SaaS", "Abonelik"],
      dogru: 0,
      aciklama: "**Doğrudan satış**: Avon, Tupperware, Amway örnekleri. Yüz yüze satış etkilidir ama pahalıdır.",
    },
    {
      id: "u4-t-saas", tip: "mcq", zorluk: 2,
      soru: "Yazılımı bilgisayara kurmak yerine bulut üzerinden abonelikle kullanmaya dayanan model hangisidir?",
      secenekler: ["Hizmet olarak yazılım (SaaS)", "Yem ve olta (tıraş bıçağı)", "Doğrudan satış (kapıdan kapıya)", "Kiralama (süreli kullanım)"],
      dogru: 0,
      aciklama: "**SaaS**: Office 365, Google Apps, Paraşüt örnekleri. Düzenli gelir akışı sağladığı için sevilir.",
    },
    {
      id: "u4-t-c2c", tip: "mcq", zorluk: 2,
      soru: "sahibinden.com ve letgo gibi pazar yerleri ağırlıklı olarak hangi tipte çalışır?",
      secenekler: ["C2C (tüketiciden tüketiciye)", "B2B (şirketten şirkete)", "B2C (şirketten tüketiciye)", "B2G (şirketten devlete)"],
      dogru: 0,
      aciklama: "Bu platformlar **C2C** çalışır. Yemeksepeti B2C, Alibaba ise B2B örneğidir.",
    },
    {
      id: "u4-t-freemium-oran", tip: "mcq", zorluk: 3,
      soru: "Chris Anderson'a göre bedelsiz ve primli modelde kullanıcıların yaklaşık ne kadarı ücretli sürüme geçerse model kârlı olabilir?",
      secenekler: ["Yüzde 5-10", "Yüzde 50-60", "Yüzde 90", "Yüzde 100"],
      dogru: 0,
      aciklama: "Dijital ürünlerin marjinal maliyeti sıfıra yakın olduğu için kullanıcıların **%5-10'u** ödese bile model kârlı olabilir.",
    },
  ]),
];
