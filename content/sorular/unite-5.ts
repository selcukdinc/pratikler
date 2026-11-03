// 5. ünite: Ekonomi, Endüstri, Rekabet ve Müşteri Analizi

import { cikmis, kitap, turet, type Soru } from "./tipler.ts";

const U = 5;
const K = "u5";

export const unite5: Soru[] = [
  ...kitap(U, K, [
    {
      id: "u5-k01", no: 1, kavram: "u5-ekonomi", sabit: true,
      soru: "Ekonomik koşulların iş girişimlerinin başarısı üzerindeki etkisi aşağıdaki hangi süreçlerle ilgilidir?",
      secenekler: ["Hammadde maliyetleri", "Talep miktarı", "Müşterilerde fiyat duyarlılığı", "Kredi ve benzer kaynaklara ulaşımda kısıtlar", "Hepsi"],
      dogru: 4,
      aciklama: "Ekonomik koşullar talebi, kaynak maliyetlerini (hammadde, enerji, finansman) ve kaynaklara erişimi etkiler. Cevap **hepsi**dir.",
    },
    {
      id: "u5-k02", no: 2, kavram: "u5-ekonomi", zorluk: 2,
      soru: "Yüksek döviz kurları ile ilgili olarak hangi ifade yanlıştır?",
      secenekler: ["Döviz üzerinden satış yapan sektörler ilk aşamada olumlu etkilenir.", "Döviz borcu olan işletmeler sıkıntı yaşar.", "Girdileri döviz üzerinden olan sektörler olumsuz etkilenir.", "İthalat artış eğilimi gösterir.", "İhracat artış eğilimi gösterir."],
      dogru: 3,
      aciklama: "Kur yükselince ithal ürünler pahalılaşır, **ithalat azalma** eğilimi gösterir; ihracat ise rekabetçi hale gelip artar.",
    },
    {
      id: "u5-k03", no: 3, kavram: "u5-rekabet",
      soru: "Rekabetle ilgili hangi ifade yanlıştır?",
      secenekler: ["Özünde bir öğrenme sürecidir.", "Daha yüksek müşteri değeri sunan firmalar avantajlıdır.", "Daha etkin operasyonel süreçleri olan firmalar avantajlıdır.", "En önemlisi sürdürülebilir avantalara sahip olmaktır.", "Fırsatçı ve uyanık davranan girişimciler her zaman kazanırlar."],
      dogru: 4,
      aciklama: "Rekabet bir öğrenme sürecidir ve asıl önemli olan sürdürülebilir avantajdır. Fırsatçılıkla **her zaman kazanılmaz**.",
    },
    {
      id: "u5-k04", no: 4, kavram: "u5-bes-faktor",
      soru: "Endüstri analizinde hangisi beş önemli analiz unsurundan biri değildir?",
      secenekler: ["Çalışanlar", "Rakipler", "Tedarikçiler", "Müşteriler", "Dağıtım kanalı elemanları"],
      dogru: 0,
      aciklama: "Kitabın cevap anahtarına göre doğru cevap **çalışanlar**dır. Endüstri analizi firmanın dışındaki aktörlere (müşteriler, rakipler, tedarikçiler, kanal üyeleri, ikame ve yeni girenler) bakar; çalışanlar firmanın içindedir.",
    },
    {
      id: "u5-k05", no: 5, cikmis: 14, kavram: "u5-bes-faktor", sabit: true,
      soru: "Hangisi müşteriler nezdinde pazarlık gücünü artırabilir?",
      secenekler: ["Emsali olmayan ürünler sunmak", "Yüksek kaliteli ürünler sunmak.", "Müşterilerin tedarikçi değiştirme maliyetlerini artırmak.", "Müşterilerin rekabet gücünü artıracak ürün ve hizmetler sunmak.", "Hepsi."],
      dogru: 4,
      aciklama: "Kimsede olmayan, farklılaşmış, kaliteli ürünler ve müşteriye geçiş maliyeti yaratmak pazarlık gücünü artırır. Cevap **hepsi**dir.",
    },
    {
      id: "u5-k06", no: 6, kavram: "u5-rekabet", sabit: true, zorluk: 2,
      soru: "Sektörler arası farklar incelenirken hangileri daha önemlidir?",
      secenekler: ["Beklenen teknolojik ilerlemeler.", "Sektörün ortalama stok miktarı", "Müşterilerin fiyat duyarlılıkları.", "Sektörün faaliyet dışı kârları", "a ve c."],
      dogru: 4,
      aciklama: "Sektörleri karşılaştırırken teknolojik değişim beklentisi ve müşterilerin fiyat duyarlılığı belirleyicidir: **a ve c**.",
    },
    {
      id: "u5-k07", no: 7, cikmis: 15, kavram: "u5-talep",
      soru: "Girişimciler için en az güvenilir veri kaynağı hangisi olacaktır?",
      secenekler: ["Özgün pazar araştırmaları.", "Bankaların sektör raporları.", "Sektör aktörleriyle yapılan görüşmeler.", "Diğer firmaların yaptırdıkları pazar araştırmaları.", "Müşterilerle yapılan görüşmeler."],
      dogru: 3,
      aciklama: "Başka firmaların kendi amaçları için yaptırdığı araştırmalar girişimcinin sorusuna göre tasarlanmamıştır; **en az güvenilir** kaynak budur.",
    },
    {
      id: "u5-k08", no: 8, kavram: "u5-talep",
      soru: "Hangisi güvenilir talep tahmini için yanlış bir yaklaşımdır?",
      secenekler: ["Toplam müşteri sayısı tespit edilmelidir.", "Geçmiş talep verileri hiçbir şekilde dikkate alınmamalıdır.", "Benzer ürünlerin talepleri dikkate alınabilir.", "İstatistiksel tahmin yöntemlerine başvurulabilir.", "Sektör uzmanlarının görüşlerine başvurulabilir."],
      dogru: 1,
      aciklama: "Geçmiş talep verileri, yeni koşullar da hesaba katılarak, zaman serisi analizleriyle kullanılabilir. \"**Hiçbir şekilde dikkate alınmamalı**\" yanlıştır.",
    },
    {
      id: "u5-k09", no: 9, kavram: "u5-musteri",
      soru: "Hangisi müşteriyi anlama yönünde en önemli beş temel sorudan biri değildir?",
      secenekler: ["Kim satın alıyor, kim kullanıyor?", "Başka neler alıyorlar?", "Seçim kriterleri neler?", "Ne zaman satın alıyorlar, ne zaman kullanıyorlar?", "Nereden ve nasıl satın alıyorlar?"],
      dogru: 1,
      aciklama: "Beş temel soru: kim alıyor/kullanıyor, seçim kriterleri, ne zaman, nereden ve nasıl, neden alıp nasıl kullanıyor. \"**Başka neler alıyorlar**\" bunlardan biri değildir.",
    },
    {
      id: "u5-k10", no: 10, cikmis: 16, kavram: "u5-ekonomi",
      soru: "Hangi sektör döviz kurlarındaki artıştan nispeten olumlu etkilenebilir?",
      secenekler: ["Otomotiv", "Havacılık", "Turizm", "Gıda", "İnşaat"],
      dogru: 2,
      aciklama: "Geliri döviz olan **turizm**, kur artışında daha rekabetçi ve kârlı hale gelir.",
    },
  ]),

  ...cikmis(U, K, [
    {
      id: "u5-c24", no: 24, kavram: "u5-ekonomi",
      soru: "Döviz kurları, faiz, kredi, enflasyon oranları, büyüme verileri gibi makroekonomik göstergeler hangi çevre faktörünün kapsamına girmektedir?",
      secenekler: ["Politik faktörler", "Ürün faktörü", "Ekonomik faktörler", "Teknolojik faktörler", "Sosyal faktörler"],
      dogru: 2,
      aciklama: "Büyüme hızı, faiz, döviz kuru, işsizlik ve enflasyon **ekonomik faktörler**dir; kitapta ekonomik koşulların temel göstergeleri olarak geçer.",
    },
  ]),

  ...turet(U, K, "u5-ekonomi", [
    {
      id: "u5-t-gostergeler", tip: "mcq", zorluk: 1,
      soru: "Kitaba göre ekonomik koşulları anlamak için kullanılan en önemli göstergelerden biri değildir?",
      secenekler: ["Şirketin logo rengi", "Büyüme hızı", "Faiz oranları", "İşsizlik oranları"],
      dogru: 0,
      aciklama: "Temel göstergeler büyüme hızı, faiz, döviz kuru, işsizlik ve enflasyondur. Logo rengi ekonomik gösterge değildir.",
    },
    {
      id: "u5-t-tuik", tip: "mcq", zorluk: 1,
      soru: "Kitaba göre temel ekonomik göstergelere hangi kurumun sitesinden ulaşılabilir?",
      secenekler: ["TÜİK", "TPMK", "SGK", "KOSGEB"],
      dogru: 0,
      aciklama: "Temel göstergelerin verileri **Türkiye İstatistik Kurumu (TÜİK)** sitesinde yayımlanır.",
    },
    {
      id: "u5-t-buyume", tip: "mcq", zorluk: 2,
      soru: "Ekonomik büyüme neyin uzun dönemli artışını ifade eder?",
      secenekler: ["Reel milli gelirin, yani toplam üretimin", "Yalnızca döviz rezervlerinin", "Yalnızca nüfusun", "Yalnızca faiz oranlarının"],
      dogru: 0,
      aciklama: "Büyüme, **reel milli gelirin (toplam üretimin)** uzun dönemli artışıdır (GSYH büyüme hızı).",
    },
    {
      id: "u5-t-faiz-konut", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre faiz oranları çok yükseldiğinde hangi sektörde tüketici talebi ciddi derecede azalır?",
      secenekler: ["Konut", "Turizm", "Yazılım ihracatı", "Temel gıda"],
      dogru: 0,
      aciklama: "Yüksek faiz kredi maliyetini artırır; **konut** talebi düşer ve inşaata girdi sağlayan sektörler de etkilenir.",
    },
    {
      id: "u5-t-faiz-yatirim", tip: "tf", zorluk: 1,
      soru: "Faiz oranlarının çok yüksek olduğu bir ekonomide yatırımlar kısıtlanır.",
      dogru: true,
      aciklama: "Doğru. Faiz, özsermaye dışındaki fonların maliyetidir; yükselince yatırımların maliyeti artar.",
    },
    {
      id: "u5-t-kalifiye", tip: "tf", zorluk: 2,
      soru: "Kitaba göre maliyeti düşürmek için kalifiye iş gücü yerine her zaman vasıfsız iş gücü tercih edilmelidir.",
      dogru: false,
      aciklama: "Yanlış. Kalifiye iş gücü eksikliği iş süreçlerinin kalitesini düşürür; doğru nitelikte çalışana yatırım yapmak gerekir.",
    },
  ]),

  ...turet(U, K, "u5-bes-faktor", [
    {
      id: "u5-t-porter", tip: "mcq", zorluk: 1,
      soru: "Endüstri analizindeki beş faktörü sınıflandıran Harvard öğretim üyesi kimdir?",
      secenekler: ["Michael Porter", "Alexander Osterwalder", "Theodore Levitt", "Peter Drucker"],
      dogru: 0,
      aciklama: "Beş Faktör Analizi **Michael Porter**'a aittir.",
    },
    {
      id: "u5-t-bes-aktor", tip: "mcq", zorluk: 2,
      soru: "Hangisi Porter'ın beş faktöründe yer alan aktörlerden biridir?",
      secenekler: ["İkame ürünlerin üreticileri", "Çalışanlar", "Hissedarlar", "Bankalar"],
      dogru: 0,
      aciklama: "Beş aktör: müşteriler, rakipler, tedarikçiler, **ikame ürün üreticileri** ve pazara girebilecek yeni firmalar.",
    },
    {
      id: "u5-t-ikame", tip: "mcq", zorluk: 2,
      soru: "Kitapta otobüs şirketleri için havayolunun oluşturduğu tehdit, beş faktörden hangisine örnektir?",
      secenekler: ["İkame ürün tehdidi", "Tedarikçilerin pazarlık gücü", "Müşterilerin pazarlık gücü", "Yeni girenlerin tehdidi"],
      dogru: 0,
      aciklama: "Aynı ihtiyacı (seyahat) karşılayan havayolu, otobüs için bir **ikame üründür**; 400 km üzerinde değer önerisi çok daha güçlüdür.",
    },
    {
      id: "u5-t-tedarikci", tip: "tf", zorluk: 2,
      soru: "Yerine başkası konulamayan bir tedarikçiye bağımlı olmak, tedarikçinin pazarlık gücünü artırır.",
      dogru: true,
      aciklama: "Doğru. İkame edilemeyen tedarikçi fiyat ve koşulları dikte edebilir.",
    },
    {
      id: "u5-t-olcek", tip: "mcq", zorluk: 2,
      soru: "Rekabetçi olmak için ölçek ekonomisi gereken sektörlerde yeni girişimciler için ne söylenebilir?",
      secenekler: ["Giriş engeli yüksektir, küçük girişimler zorlanır", "Giriş engeli yoktur, isteyen herkes kolayca girer", "Ölçek önemsizdir, yalnızca fikrin kalitesi önemlidir", "Bu sektörlerde fiyat rekabeti hiç yaşanmaz"],
      dogru: 0,
      aciklama: "Ölçek ekonomisi gerektiren pazarlar, düşük hacimle başlayan girişimler için bir **giriş engelidir**.",
    },
  ]),

  ...turet(U, K, "u5-rekabet", [
    {
      id: "u5-t-ogrenme", tip: "fill", zorluk: 1,
      soru: "Kitaba göre rekabet özünde bir ____ sürecidir.",
      bosluklar: [["öğrenme", "ogrenme"]],
      aciklama: "Rekabet bir **öğrenme** sürecidir; firmalar konumlarını sürekli adapte etmek zorundadır.",
    },
    {
      id: "u5-t-sabit-varsayim", tip: "tf", zorluk: 2,
      soru: "Kitaba göre girişimcilerin sık yaptığı hatalardan biri teknolojinin ve müşteri tercihlerinin sabit kalacağını varsaymaktır.",
      dogru: true,
      aciklama: "Doğru. Teknoloji ve tercihler hızla değişir; yeni iş modelleri beklenmedik rekabet tehditleri doğurabilir.",
    },
  ]),

  ...turet(U, K, "u5-talep", [
    {
      id: "u5-t-potansiyel", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre potansiyel pazar parasal olarak nasıl hesaplanır?",
      secenekler: ["Toplam müşteri sayısı × ortalama harcama", "Rakip firma sayısı × ortalama ürün fiyatı", "Çalışan sayısı × ortalama aylık maaş", "İlk yatırım tutarı ÷ ortalama aylık kâr"],
      dogru: 0,
      aciklama: "**Toplam müşteri sayısı** belirli bir zamandaki **ortalama harcama** ile çarpılır; ardından hedeflenen pay belirlenir.",
    },
    {
      id: "u5-t-ilk-adim", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre talep tahmininde ilk adım hangisidir?",
      secenekler: ["Ulaşılabilecek en geniş coğrafi pazarı belirlemek", "Kampanya için uygun bir reklam ajansı seçmek", "Ürünün satış fiyatını kesin olarak belirlemek", "Kurulacak şirketin türünü seçip tescil etmek"],
      dogru: 0,
      aciklama: "Önce ulaşılabilecek **maksimum coğrafi pazar** belirlenir, sonra oradaki müşteri sayısı ve ortalama tüketim ortaya konur.",
    },
    {
      id: "u5-t-ilintili", tip: "mcq", zorluk: 2,
      soru: "Telefon kılıfı satacak bir girişimci kendi ürünü için hiç veri bulamıyorsa kitaba göre ne yapabilir?",
      secenekler: ["Satılan telefon sayısı gibi ilintili veriden tahmin yapar", "Talep tahmini yapmaktan tamamen vazgeçmelidir", "Tahmin yerine rastgele bir satış hedefi seçmelidir", "Yalnızca rakibe sorup onun verdiği sayıyı kullanmalıdır"],
      dogru: 0,
      aciklama: "Kendi ürününe veri yoksa **ilintili ürün grubundaki** talep verisi (ör. satılan telefon sayısı) kullanılabilir.",
    },
    {
      id: "u5-t-gecmis-varsayim", tip: "mcq", zorluk: 3,
      soru: "Geçmiş verilere dayalı zaman serisi analizlerinin genel sorunu nedir?",
      secenekler: ["Geçmişteki koşulların değişmeyeceğini varsaymaları", "Hiç sayısal veri kullanmamaları", "Yalnızca küçük işletmelerde çalışmaları", "Sonuçlarının her zaman yanlış olması"],
      dogru: 0,
      aciklama: "Bu analizler **geçmiş talebi oluşturan koşulların değişmeyeceği** varsayımına dayanır; yeni koşulların etkisi ayrıca düşünülmelidir.",
    },
  ]),

  ...turet(U, K, "u5-musteri", [
    {
      id: "u5-t-bes-soru", tip: "mcq", zorluk: 2,
      soru: "Hangisi müşteriyi anlamaya yönelik beş temel sorudan biridir?",
      secenekler: ["Neden satın alıyorlar ve nasıl kullanıyorlar?", "Rakipler hangi logoyu ve renkleri kullanıyor?", "Çalışanlar haftada kaç saat çalışıyor?", "Şirket ilk olarak hangi şehirde kuruldu?"],
      dogru: 0,
      aciklama: "Beşinci temel soru \"**neden satın alıyorlar ve nasıl kullanıyorlar**\"dır.",
    },
    {
      id: "u5-t-alan-kullanan", tip: "tf", zorluk: 1,
      soru: "Bir ürünü satın alan kişi ile kullanan kişi her zaman aynıdır.",
      dogru: false,
      aciklama: "Yanlış. Örneğin çocuk ürünlerini ebeveynler alır, çocuklar kullanır; bu yüzden \"kim alıyor, kim kullanıyor\" ayrı sorulur.",
    },
  ]),
];
