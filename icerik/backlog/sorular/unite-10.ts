// 10. ünite (Sıralama ve Önceliklendirme): sırayı belirleyen etkenler, MoSCoW, Kano,
// gecikme maliyeti, WSJF, değer/efor matrisi ve RICE, "her şey yüksek öncelikli" sorunu.
import { sorular, type Soru } from "./yardimci.ts";

const U = 10;

export const unite10: Soru[] = [
  ...sorular(U, "u10-etkenler", [
    {
      ad: "sira-mi",
      soru: "Scrum Rehberi Product Backlog için \"öncelik\" yerine hangi kelimeyi kullanır?",
      secenekler: ["Sıra (ordered)", "Puan (scored)", "Değer (valued)", "Seviye (ranked by level)"],
      aciklama: "Rehber backlog'un sıralı (ordered) olduğunu söyler. Öncelik etiketleri (yüksek, orta, düşük) eşitlik bırakır; sıra bırakmaz: iki öğeden biri mutlaka önce gelir.",
      etiket: "kaynak",
    },
    {
      ad: "dort-etken",
      soru: "Değerin yanında sırayı en çok etkileyen üç etken hangileridir?",
      secenekler: [
        "Risk, bağımlılık ve öğrenme",
        "Story'yi yazanın kıdemi, yazılma tarihi ve uzunluğu",
        "Story point, kabul kriteri sayısı ve görev sayısı",
        "Takımın tercihleri, araç ve Sprint uzunluğu",
      ],
      aciklama: "Riskli öğeleri erken yapmak riski erken azaltır; bağımlılıklar sırayı zorlar; bazı öğeler değerinden çok öğrettikleri için öne alınır (bir varsayımı sınamak).",
    },
    {
      ad: "riskli-once",
      zorluk: 2,
      soru: "\"Kartla bakiye yükleme\"nin ödeme sağlayıcısıyla çalışıp çalışmayacağı belirsiz. Değeri orta düzeyde. Elif onu neden backlog'un üstüne yakın koyabilir?",
      secenekler: [
        "Belirsizliği erken çözmek, sonradan sürpriz yaşamaktan daha ucuzdur",
        "Belirsiz işler her zaman en değerli işlerdir",
        "Rehber riskli işlerin ilk Sprint'te yapılmasını şart koşar",
        "Riskli işler küçük olduğu için hızı artırır",
      ],
      aciklama: "Risk bir sıralama etkenidir. Ödeme entegrasyonu yürümezse sürüm planı değişir; bunu son Sprint'te öğrenmek en pahalısıdır.",
      etiket: "senaryo",
    },
  ]),
  ...sorular(U, "u10-moscow", [
    {
      ad: "harfler",
      soru: "MoSCoW'daki dört grup hangileridir?",
      secenekler: [
        "Must have, Should have, Could have, Won't have",
        "Most, Some, Common, Worst",
        "Mandatory, Strategic, Critical, Wishlist items",
        "Must, Soon, Can, Waiting",
      ],
      aciklama: "Dai Clegg'in geliştirdiği ve DSDM'in benimsediği teknik. Won't have (this time) \"asla\" değil \"bu sürümde değil\" demektir; bu ayrım beklentiyi yönetir.",
      etiket: "kaynak",
    },
    {
      ad: "must-orani",
      zorluk: 3,
      soru: "DSDM, bir zaman kutusundaki işin ne kadarının Must have olmasını önerir?",
      secenekler: ["En fazla yaklaşık %60'ı", "En az %90'ı", "Tam olarak %50'si", "Hepsi; diğer gruplar sonraya kalır"],
      aciklama: "DSDM Must'ları eforun yaklaşık %60'ıyla sınırlar; geri kalan Should ve Could'lar sorun çıktığında bırakılabilecek esnekliği verir. Her şey Must olursa tek bir gecikme sürümü kaçırır.",
      etiket: "kaynak",
    },
    {
      ad: "hepsi-must",
      soru: "Paydaş toplantısında 20 özelliğin 17'si Must have olarak işaretlendi. Bu neyi gösterir?",
      secenekler: [
        "Sınıflandırma ayrım yapmıyor; Must tanımı sıkılaştırılmalı",
        "Ürün çok değerli; bütün Must'lar ilk Sprint'e alınmalı",
        "MoSCoW doğru uygulanmış; Won't olmaması iyi bir işaret",
        "Takım daha çok geliştiriciyle büyütülmeli",
      ],
      aciklama: "Must have \"bu olmadan sürüm anlamsız ya da yasadışı\" demektir. 17 Must, kimsenin vazgeçmek istemediğini gösterir. \"Bu olmadan yayınlar mıyız?\" sorusu Must'ları ayıklar.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u10-kano", [
    {
      ad: "kano-kim",
      zorluk: 2,
      soru: "Özellikleri temel, performans ve heyecan verici diye ayıran model kime aittir?",
      secenekler: ["Noriaki Kano", "Don Reinertsen", "Dai Clegg", "Jeff Patton"],
      aciklama: "Noriaki Kano 1984'te müşteri memnuniyeti ile özelliklerin varlığı arasındaki ilişkiyi bu kategorilerle anlattı. Reinertsen gecikme maliyetinin, Clegg MoSCoW'un, Patton story map'in adıdır.",
      etiket: "kaynak",
    },
    {
      ad: "temel",
      soru: "Kano modelinde \"temel\" (must-be) özellik için hangisi doğrudur?",
      secenekler: [
        "Yokluğu memnuniyetsizlik yaratır, varlığı memnuniyeti pek artırmaz",
        "Varlığı memnuniyeti doğrusal olarak artırır",
        "Yokluğu fark edilmez, varlığı şaşırtıcı bir sevinç yaratır",
        "Ne varlığı ne yokluğu memnuniyeti etkiler",
      ],
      aciklama: "Ödemenin güvenli olması temeldir: olmazsa öfke, olunca alkış yok. Performans özelliği (sipariş süresi) iyileştikçe memnuniyet artar; heyecan verici özellik beklenmediği için sevindirir.",
    },
    {
      ad: "heyecan",
      soru: "Yemeğin hazır olduğunu öğrencinin telefonuna haber veren bildirim ilk çıktığında öğrencileri çok sevindirdi; iki yıl sonra herkes bunu bekliyor. Kano'ya göre ne oldu?",
      secenekler: [
        "Heyecan verici bir özellik zamanla temel özelliğe dönüştü",
        "Performans özelliği zamanla heyecan verici oldu",
        "Temel özellik zamanla ilgisiz özelliğe dönüştü",
        "Özellik baştan beri temeldi; algı değişmedi",
      ],
      aciklama: "Kano kategorileri sabit değildir: bugünün sevindiren özelliği yarının beklentisidir. Bu yüzden Kano analizi aralıklarla tekrarlanır.",
      etiket: "senaryo",
    },
  ]),
  ...sorular(U, "u10-cod", [
    {
      ad: "cod-nedir",
      soru: "Gecikme maliyeti (Cost of Delay) neyi ölçer?",
      secenekler: [
        "Bir işi geciktirmenin birim zamanda kaybettirdiği değeri",
        "Bir işi yapmanın toplam geliştirme maliyetini",
        "Sprint'in geç bitmesi durumunda ödenen cezayı",
        "Bir hatanın düzeltilmesine harcanan saati",
      ],
      aciklama: "Don Reinertsen: \"Yalnızca bir şeyi ölçecekseniz gecikme maliyetini ölçün.\" Soru \"bu ne kadar değerli?\" değil \"bunu bir hafta geciktirirsek ne kaybederiz?\" sorusudur.",
    },
    {
      ad: "reinertsen",
      zorluk: 2,
      soru: "Gecikme maliyetini ürün geliştirmede yaygınlaştıran *The Principles of Product Development Flow* kitabının yazarı kimdir?",
      cevap: ["Don Reinertsen", "Donald Reinertsen", "Reinertsen"],
      aciklama: "Don Reinertsen (2009). Kitap akış, kuyruk ve gecikme maliyeti fikirlerini ürün geliştirmeye taşıdı; SAFe'in WSJF'si bu fikirden gelir.",
      etiket: "kaynak",
    },
    {
      ad: "sabit-tarih",
      zorluk: 2,
      soru: "Yeni dönem kayıt haftasında açılması gereken \"yeni öğrenciye hoş geldin bakiyesi\" özelliğinin gecikme maliyeti eğrisi hangisine benzer?",
      secenekler: [
        "Sabit tarihli: o haftaya yetişmezse değerinin çoğu kaybolur",
        "Standart: her hafta gecikme aşağı yukarı aynı kaybı verir",
        "Acil: her gün gecikme büyük kayıp verir, hemen yapılmalı",
        "Somut olmayan: bugün gecikmenin bedeli görünmez",
      ],
      aciklama: "Gecikme maliyeti eğrileri genelde dört türde anlatılır: acil (expedite), sabit tarihli, standart ve somut olmayan (intangible). Sabit tarihli işte tarihten önce gecikmenin bedeli düşüktür, tarihi kaçırmanın bedeli büyüktür.",
      etiket: "senaryo",
    },
    {
      ad: "somut-olmayan",
      zorluk: 3,
      soru: "Teknik borç azaltma gibi işler gecikme maliyeti eğrilerinden hangisine en çok uyar?",
      secenekler: [
        "Somut olmayan: bugün bedeli görünmez ama zamanla birden büyüyebilir",
        "Acil: her gün büyük kayıp verir",
        "Sabit tarihli: belli bir günden sonra değeri sıfırlanır",
        "Hiçbiri; teknik işlerin gecikme maliyeti yoktur",
      ],
      aciklama: "Bu işler bugün ertelenebilir görünür; ama bir gün eşik aşılır (güvenlik desteği biter, sistem yavaşlar) ve maliyet birden büyür. Bu yüzden düzenli bir pay ayırmak işe yarar (8. ünite).",
    },
  ]),
  ...sorular(U, "u10-wsjf", [
    {
      ad: "formul",
      soru: "WSJF nasıl hesaplanır?",
      secenekler: [
        "Gecikme maliyeti / iş büyüklüğü",
        "İş değeri × iş büyüklüğü",
        "Gecikme maliyeti − iş büyüklüğü",
        "İş büyüklüğü / iş değeri",
      ],
      aciklama: "Weighted Shortest Job First: birim süre başına en çok gecikme maliyetini kurtaran iş önce yapılır. Büyük ama çok değerli bir iş, küçük ve orta değerli bir işin arkasında kalabilir.",
    },
    {
      ad: "safe-bilesen",
      zorluk: 2,
      soru: "SAFe'te gecikme maliyeti hangi üç bileşenin toplamı olarak tahmin edilir?",
      secenekler: [
        "İş değeri, zaman kritikliği, risk azaltma ya da fırsat",
        "Story point, takımın hızı ve kalan Sprint sayısı",
        "Beklenen gelir, geliştirme maliyeti ve kâr marjı",
        "Must, Should, Could",
      ],
      aciklama: "SAFe her bileşeni göreli olarak (Fibonacci benzeri ölçekle) puanlar ve toplar; sonra iş büyüklüğüne (job size, süre için bir vekil) böler.",
      etiket: "kaynak",
    },
    {
      ad: "wsjf-hesap",
      soru: "\"Önceden sipariş\" için iş değeri 8, zaman kritikliği 8, risk azaltma 4, iş büyüklüğü 10. WSJF kaçtır?",
      sayi: [2],
      aciklama: "Gecikme maliyeti 8 + 8 + 4 = 20. WSJF = 20 / 10 = 2.",
      etiket: "hesap",
    },
    {
      ad: "wsjf-sec",
      zorluk: 2,
      soru: "\"Hazır bildirimi\": gecikme maliyeti 12, büyüklük 3. \"Kalabalık göstergesi\": gecikme maliyeti 15, büyüklük 8. WSJF'ye göre hangisi önce?",
      secenekler: [
        "Hazır bildirimi: 4'e karşı yaklaşık 1,9",
        "Kalabalık göstergesi: gecikme maliyeti daha yüksek",
        "Kalabalık göstergesi: 1,9'a karşı 4",
        "İkisi eşit; Product Owner seçer",
      ],
      aciklama: "12 / 3 = 4 ve 15 / 8 ≈ 1,9. Daha değerli görünen iş, büyük olduğu için arkada kalır. WSJF'nin dersi: küçük ve değerli işler sırayı hızla yukarı çıkar.",
      etiket: "hesap",
    },
  ]),
  ...sorular(U, "u10-matris", [
    {
      ad: "hizli-kazanc",
      soru: "Değer/efor matrisinde \"yüksek değer, düşük efor\" köşesine ne denir ve ne yapılır?",
      secenekler: [
        "Hızlı kazanç: önce yapılır",
        "Para tuzağı: hiç yapılmaz",
        "Büyük proje: bölünüp planlanır",
        "Dolgu işi: boş kalınca yapılır",
      ],
      aciklama: "Dört köşe: hızlı kazanç (yüksek değer, düşük efor), büyük proje (yüksek değer, yüksek efor), dolgu (düşük değer, düşük efor), para tuzağı (düşük değer, yüksek efor).",
    },
    {
      ad: "rice",
      zorluk: 2,
      soru: "RICE puanı nasıl hesaplanır?",
      secenekler: [
        "Erişim × Etki × Güven / Efor",
        "Risk + Etki + Maliyet, bölü Efor",
        "Erişim + Etki + Güven + Efor",
        "Gelir × Etki / Maliyet × Efor",
      ],
      aciklama: "Reach (kaç kişiye ulaşır), Impact (her birine etkisi), Confidence (tahminlere güven yüzdesi), Effort (kişi-ay). Güven çarpanı belirsiz fikirlerin puanını düşürür.",
      etiket: "kaynak",
    },
    {
      ad: "rice-hesap",
      zorluk: 3,
      soru: "Bir özellik ayda 2000 öğrenciye ulaşacak, etkisi 2, güven %50, efor 4 kişi-ay. RICE puanı kaçtır?",
      sayi: [500],
      aciklama: "(2000 × 2 × 0,5) / 4 = 2000 / 4 = 500.",
      etiket: "hesap",
    },
  ]),
  ...sorular(U, "u10-hepsi-yuksek", [
    {
      ad: "uc-yuksek",
      soru: "Paydaşlar her isteği \"yüksek öncelik\" olarak getiriyor. Elif için en etkili cevap hangisidir?",
      secenekler: [
        "Etiket yerine sıra istemek: \"Bunu şunun önüne mi koyalım?\"",
        "Yeni bir \"çok yüksek\" öncelik seviyesi açıp onları ayırmak",
        "Bütün yüksek öncelikli işleri aynı Sprint'e almak",
        "Paydaşların isteklerini backlog'a almayı bırakmak",
      ],
      aciklama: "Etiketler enflasyona uğrar; sıra uğramaz. İki öğeyi karşılaştırmak, paydaşı gerçek ödünleşimi görmeye zorlar.",
      etiket: "sahada",
    },
    {
      ad: "po-hesap",
      dy: true,
      soru: "Product Owner paydaşları dinler ama sıranın kararından hesap veren kişidir; kararlarına saygı gösterilmesi beklenir.",
      aciklama: "Doğru. Rehber'e göre Product Owner Product Backlog'un yönetiminden hesap verir; başarılı olması için organizasyonun kararlarına saygı göstermesi gerekir. Sırayı değiştirmek isteyen Product Owner'ı ikna etmeye çalışır.",
      etiket: "kaynak",
    },
  ]),
];
