// 3. ünite: Yapılabilirlik Analizi

import { cikmis, kitap, turet, type Soru } from "./tipler.ts";

const U = 3;
const K = "u3";

export const unite3: Soru[] = [
  ...kitap(U, K, [
    {
      id: "u3-k01", no: 1, kavram: "u3-risk", zorluk: 2,
      soru: "Aşağıdakilerden hangisi iş fikrinin başarısız olmasının sebeplerinden biri değildir?",
      secenekler: ["Rekabetçi bir iş modeli kurgulamamak", "Gereğinden fazla sermayeyi işe yatırmak", "Hedef müşteri kitlesini çok geniş tutmak", "Doğru ekibi kuramamak", "Kaynak eksikliğine rağmen harekete geçmek"],
      dogru: 4,
      aciklama: "Girişimci kaynakları kısıtlı olsa da harekete geçen kişidir. Rekabetçi olmayan iş modeli, aşırı sermaye, çok geniş hedef kitle ve yanlış ekip ise başarısızlık sebepleridir.",
    },
    {
      id: "u3-k02", no: 2, kavram: "u3-risk",
      soru: "Hangisi yapılabilirlik analizinin bileşenlerinden değildir?",
      secenekler: ["Pazardaki ihtiyaçları tespit etmek", "Pazardaki talebi tespit etmek", "Ekip üyelerinin hobilerine zaman ayırması", "Kurucu takımın geçmişi", "Yatırımın geri dönüşünü hesaplamak"],
      dogru: 2,
      aciklama: "Yapılabilirlik analizi fikir-kurucu uyumu (ekibin geçmişi), finansal değerlendirme (geri dönüş) ve pazar (ihtiyaç, talep) başlıklarından oluşur. **Hobilere zaman ayırmak** bunlardan biri değildir.",
    },
    {
      id: "u3-k03", no: 3, kavram: "u3-ekip",
      soru: "Hangisi vizyoner kişilerin en belirgin ortak özelliğidir?",
      secenekler: ["Planlı olmaları", "Akla yatan projeler ve fikirler üretmeleri", "Deli, çatlak veya çılgın olarak nitelendirilmeleri", "İyi bir finansal geliri ne pahasına olsun reddetmemeleri", "Vizyona nasıl ulaşacaklarına dair somut bir planlarının olması"],
      dogru: 2,
      aciklama: "Vizyoner kişiler başkalarının göremediğini gördükleri için çevreleri tarafından **deli, çatlak ya da çılgın** olarak görülür. Linda Rottenberg'in deyişiyle \"delilik bir iltifattır\".",
    },
    {
      id: "u3-k04", no: 4, kavram: "u3-ekip",
      soru: "\"Müşteriler, bir ürünü satın almazlar, ancak o ürünün sağladığı faydayı satın alırlar.\" Değer yaratmanın ve pazarlama bakışının temelini oluşturan bu görüşün eksikliğine ne isim verilir?",
      secenekler: ["Ürün geliştirme", "Pazarlama körlüğü", "Ürün körlüğü", "Müşteri değeri", "Üretim körlüğü"],
      dogru: 1,
      aciklama: "Theodore Levitt'in 1960'ta tanımladığı **pazarlama körlüğü (miyopluğu)**: ürüne odaklanıp müşterinin aldığı faydayı görememek. Matkap alan kişi aslında duvarda bir delik ister.",
    },
    {
      id: "u3-k05", no: 5, kavram: "u3-finans", zorluk: 3,
      soru: "Hangisi iş fikrinin finansal olarak değerlendirilmesi ile ilgili söylenemez?",
      secenekler: ["Gelir gider tablosu geleceğe dair varsayımlardan oluşur", "Başabaş noktası gelirlerin giderlere eşit olması için gereken noktayı ifade eder", "Yatırım geri dönüş süreci, ilk yatırım tutarının ne zaman yatırılacağını ifade eder", "İlk yatırım tutarına aynı zamanda başlangıç sermayesi adı verilir.", "Yatırım geri dönüş süresi, elde edilen net kârın ilk yatırım tutarını ne zaman karşılayacağını ifade eder"],
      dogru: 3,
      aciklama: "Kitabın cevap anahtarına göre söylenemeyecek ifade: \"**İlk yatırım tutarına aynı zamanda başlangıç sermayesi adı verilir**\". Gelir gider tablosu varsayımlara dayanır, başabaş noktası gelirin gideri karşıladığı noktadır, geri dönüş süresi net kârın ilk yatırımı ne zaman karşılayacağını gösterir.",
    },
    {
      id: "u3-k06", no: 6, kavram: "u3-finans",
      soru: "Girişimcilerin ilk heyecan aşamasından sonra vardıkları yerin adı hangisidir?",
      secenekler: ["Heyecan vadisi", "Başarı platosu", "Umutsuzluk köprüsü", "Yenilik çeşmesi", "Ölüm vadisi"],
      dogru: 4,
      aciklama: "İlk heyecandan sonra gelirler giderleri karşılamadan önce nakdin eridiği döneme **ölüm vadisi** denir; girişimlerin yarısından fazlası burada kapanır.",
    },
    {
      id: "u3-k07", no: 7, kavram: "u3-pazar",
      soru: "Henüz hayata geçmemiş bir iş fikri için pazar tiplerinden hangisinin ilk olarak hedeflenmesi gerekir?",
      secenekler: ["Toplam mevcut pazar", "Erişilebilir mevcut pazar", "İlk hedef pazar", "Yeni pazar", "Yeniden incelenmiş pazar"],
      dogru: 2,
      aciklama: "Girişim önce gerçekten ulaşabileceği küçük bir dilimi, yani **ilk hedef pazarı (İHP)** hedeflemelidir. TMP ve EMP daha geniş, sonraki hedeflerdir.",
    },
    {
      id: "u3-k08", no: 8, cikmis: 10, kavram: "u3-benimseme",
      soru: "Çoğunluk müşterileri ilk müşterilerden ayıran en önemli fark hangisidir?",
      secenekler: ["Sürüyü takip etmeleri", "Yenilikçi olmaları", "Sürünün önünde gitmeleri", "Sadece gerekli olduğunda hareket etmeleri", "Kuşkucu olmaları"],
      dogru: 0,
      aciklama: "İlk müşteriler (yenilikçiler, erken benimseyenler) sürünün önünde gitmek ister. Erken çoğunluk ise pragmatisttir: \"sürüden ayrılmayalım\" der, yani **sürüyü takip eder**.",
    },
    {
      id: "u3-k09", no: 9, kavram: "u3-ihtiyac",
      soru: "İhtiyaç tiplerinden hangisi yenilikçi ürünler geliştirmek için en büyük fırsatı sunar?",
      secenekler: ["Doğrusal ihtiyaçlar", "Sabit ihtiyaçlar", "Zorunlu ihtiyaçlar", "Gizli ihtiyaçlar", "Olsa iyi olur ihtiyaçlar"],
      dogru: 3,
      aciklama: "**Gizli ihtiyaçları** bulmak zordur ama keşfedildiğinde rekabeti anlamsız kılar ve müşteri memnuniyeti çok yüksek olur.",
    },
    {
      id: "u3-k10", no: 10, kavram: "u3-ihtiyac",
      soru: "Gelecek trendlerinin zamana göre talebi nasıl değişir?",
      secenekler: ["Bir anda talep artar sonra birden düşer", "Talep hızlı artar, yavaş düşer", "Talep önce hiç yoktur, sonra biraz olur ve orada kalır", "Talep yavaş yavaş ve zamana yayılarak artar", "Talep yavaş artar, hızlı düşer"],
      dogru: 3,
      aciklama: "Hevesin talebi birden yükselip birden düşer, modanın döngüsü belirsizdir. **Trendlerde talep yavaş yavaş ve zamana yayılarak artar**, bu yüzden öngörülebilirdir.",
    },
  ]),

  ...cikmis(U, K, [
    {
      id: "u3-c09", no: 9, kavram: "u3-finans",
      soru: "Aşağıdakilerden hangisi girişimcinin hangi ayda, ne kadar kişiye, ne kadar ciro ile ulaşırsa yatırdığı parayı çıkarabileceğini gösterir?",
      secenekler: ["Aktif noktası", "Şirket noktası", "Net kâr noktası", "Şirket değer noktası", "Başabaş noktası"],
      dogru: 4,
      aciklama: "**Başabaş noktası**, gelirlerin giderleri karşıladığı noktadır; girişimcinin hangi ayda, kaç müşteri ve ne kadar ciroyla parasını çıkaracağını gösterir.",
    },
  ]),

  ...turet(U, K, "u3-risk", [
    {
      id: "u3-t-risk-azalt", tip: "tf", zorluk: 1,
      soru: "Kitaba göre iyi girişimciler riski seven ve riski büyüten kişilerdir.",
      dogru: false,
      aciklama: "Yanlış. İyi girişimciler riski **en aza indirmeye** çalışır; yapılabilirlik analizi de bunun aracıdır.",
    },
    {
      id: "u3-t-analiz-amac", tip: "mcq", zorluk: 1,
      soru: "Yapılabilirlik analizinin temel amacı hangisidir?",
      secenekler: ["Fikri hayata geçirmeden önce başarı şansını ve risklerini değerlendirmek", "İşletmenin yıllık vergi beyannamesini hazırlamak", "Şirketin ticaret siciline kaydını eksiksiz biçimde tamamlamak", "Ürünün ilk yıl reklam bütçesini ayrıntılı olarak kesinleştirmek"],
      dogru: 0,
      aciklama: "Yapılabilirlik analizi fikrin ekip, finans ve pazar açısından **yapılabilir olup olmadığını** önceden sınar ve riski azaltır.",
    },
    {
      id: "u3-t-uc-baslik", tip: "mcq", zorluk: 2,
      soru: "Kitapta yapılabilirlik analizi hangi üç ana başlık altında ele alınır?",
      secenekler: ["Fikir-kurucu uyumu, finansal değerlendirme, pazar", "Üretim planı, lojistik ve insan kaynakları", "Vergi, sosyal sigorta ve muhasebe kayıtları", "Reklam, ambalaj tasarımı ve dağıtım"],
      dogru: 0,
      aciklama: "Kitap analizi **fikir-kurucu uyumu**, **finansal değerlendirme** ve **pazar** (ihtiyaç, talep, trend, teknoloji) başlıklarıyla anlatır.",
    },
  ]),

  ...turet(U, K, "u3-ekip", [
    {
      id: "u3-t-uyum-basliklar", tip: "mcq", zorluk: 2,
      soru: "Fikir-kurucu uyumu değerlendirilirken kitapta ele alınan dört başlıktan biri değildir?",
      secenekler: ["Kurucuların hobileri", "Kurucuların geçmişi", "Vizyon", "İş bölümü"],
      dogru: 0,
      aciklama: "Dört başlık **geçmiş, vizyon, iş bölümü ve ortaklık**tır. Hobiler bu başlıklardan biri değildir.",
    },
    {
      id: "u3-t-ideal-ekip", tip: "mcq", zorluk: 2,
      soru: "Kitapta (Butigo örneğiyle) ideal kurucu ekip hangi üç rolün birleşimi olarak anlatılır?",
      secenekler: ["Mühendis, yönetici ve tasarımcı", "Avukat, muhasebeci ve bankacı", "Satıcı, depocu ve kurye", "Yatırımcı, danışman ve mentor"],
      dogru: 0,
      aciklama: "Ürünü yapan bir **mühendis**, işi yöneten bir **yönetici** ve ürünü kullanıcıya uygun hale getiren bir **tasarımcı** dengeli bir ekip oluşturur.",
    },
    {
      id: "u3-t-hisse-katki", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre kurucular arasında hisse dağıtımı neye göre yapılmalıdır?",
      secenekler: ["Her kurucunun işe kattığı değer ve üstlendiği riske göre", "Kurucuların yaşına ve kıdemine göre", "Her kurucuya her durumda eşit pay verilerek", "Fikri ilk kimin söylediğine göre"],
      dogru: 0,
      aciklama: "Ortaklıkta paylar her kurucunun **katkısı ve üstlendiği risk** oranında belirlenmelidir; bunu baştan konuşmak ileride çıkacak anlaşmazlıkları önler.",
    },
    {
      id: "u3-t-arkadas-ortak", tip: "tf", zorluk: 1,
      soru: "Kitaba göre yakın arkadaşlarla ortaklık kurmak hiçbir risk taşımaz.",
      dogru: false,
      aciklama: "Yanlış. Arkadaşlıkla ortaklık farklıdır; arkadaşla ortaklık kurmak hem işi hem arkadaşlığı riske atabilir.",
    },
    {
      id: "u3-t-levitt", tip: "mcq", zorluk: 2,
      soru: "\"Matkap alan kişi aslında matkap değil, duvarda bir delik ister.\" Bu örnek hangi kavramı açıklar?",
      secenekler: ["Pazarlama körlüğü", "Ölüm vadisi", "Başabaş noktası", "İlk hedef pazar"],
      dogru: 0,
      aciklama: "Bu, **pazarlama körlüğü (miyopluğu)** kavramının klasik örneğidir: müşteri ürünü değil, sağladığı faydayı satın alır.",
    },
    {
      id: "u3-t-vizyon-yol", tip: "mcq", zorluk: 2,
      soru: "Kitapta Chobani'nin kurucusu Hamdi Ulukaya'ya ait olarak verilen ve vizyonu anlatan söz hangisidir?",
      secenekler: ["Yürümeye başladığınızda yol görünür.", "Delilik bir iltifattır.", "Önce plan, sonra eylem gelir.", "Riski olmayan işe girilmez."],
      dogru: 0,
      aciklama: "Ulukaya'nın sözü \"**Yürümeye başladığınızda yol görünür**\"dür. \"Delilik bir iltifattır\" sözü ise Linda Rottenberg'e aittir.",
    },
  ]),

  ...turet(U, K, "u3-finans", [
    {
      id: "u3-t-basabas-tanim", tip: "fill", zorluk: 1,
      soru: "Gelirlerin giderlere eşit olduğu, girişimin ne kâr ne zarar ettiği noktaya ____ noktası denir.",
      bosluklar: [["başabaş", "basabas", "başa baş", "basa bas"]],
      aciklama: "**Başabaş noktası**: gelir = gider. Bu noktadan sonra girişim kâr etmeye başlar.",
    },
    {
      id: "u3-t-geri-odeme", tip: "mcq", zorluk: 3,
      soru: "120 bin TL ile kurulan bir girişim 4. aydan itibaren her ay 8 bin TL net kâr ediyor. İlk 3 ay kâr yoksa ilk yatırım kaçıncı ayın sonunda geri döner?",
      secenekler: ["18. ay", "15. ay", "12. ay", "20. ay"],
      dogru: 0,
      aciklama: "120 / 8 = 15 ay kâr gerekir; kâr 4. ayda başladığı için 3 + 15 = **18. ayın** sonunda yatırım geri döner.",
    },
    {
      id: "u3-t-senaryo", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre gelir gider tablosu hazırlanırken hangi üç senaryo düşünülmelidir?",
      secenekler: ["Kötümser, gerçekçi ve iyimser", "Kısa, orta ve uzun vadeli", "Yerel, ulusal ve uluslararası", "Sabit, değişken ve karma"],
      dogru: 0,
      aciklama: "Varsayımlar belirsiz olduğu için tablo **kötümser, gerçekçi ve iyimser** senaryolarla hazırlanır.",
    },
    {
      id: "u3-t-bes-yil", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre yatırımcılar genellikle gelir gider tablosunu hangi süre ve ayrıntıda görmek ister?",
      secenekler: ["5 yıllık, ilk yılı aylık", "1 yıllık, yalnız yıl sonu toplamı", "10 yıllık, yalnız yıllık", "Sadece ilk ayın tahmini"],
      dogru: 0,
      aciklama: "Yatırımcılar **5 yıllık** bir tablo, ilk yıl için de **aylık** kırılım bekler.",
    },
    {
      id: "u3-t-hisse-sermaye", tip: "tf", zorluk: 2,
      soru: "Kitaba göre girişimcinin sermaye bulmasının en etkili yollarından biri yatırımcıya hisse vermektir.",
      dogru: true,
      aciklama: "Doğru. Hisse karşılığı yatırım almak sermaye bulmanın en etkili yollarındandır; bunun için girişimin değerlemesi yapılır.",
    },
    {
      id: "u3-t-olum-orani", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre girişimlerin ne kadarı ölüm vadisinde kapanır?",
      secenekler: ["Yarısından fazlası", "Yüzde birinden azı", "Yaklaşık onda biri", "Hiçbiri, ölüm vadisi bir efsanedir"],
      dogru: 0,
      aciklama: "Girişimlerin **yarısından fazlası** nakdin eridiği ölüm vadisi döneminde kapanır.",
    },
    {
      id: "u3-t-cember", tip: "mcq", zorluk: 3,
      soru: "Kitapta değerleme örneği olarak verilen cember.net hangi şirkete satılmıştır?",
      secenekler: ["Xing", "LinkedIn", "Facebook", "Yahoo"],
      dogru: 0,
      aciklama: "Türk iş ağı cember.net, Alman **Xing** şirketine yaklaşık 5 milyon avroya satılmıştır.",
    },
  ]),

  ...turet(U, K, "u3-pazar", [
    {
      id: "u3-t-pazar-sira", tip: "mcq", zorluk: 2,
      soru: "Pazar tiplerinin büyükten küçüğe doğru sıralaması hangisidir?",
      secenekler: ["Toplam mevcut pazar, erişilebilir mevcut pazar, ilk hedef pazar", "İlk hedef pazar, toplam mevcut pazar, erişilebilir mevcut pazar", "Erişilebilir mevcut pazar, ilk hedef pazar, toplam mevcut pazar", "İlk hedef pazar, erişilebilir mevcut pazar, toplam mevcut pazar"],
      dogru: 0,
      aciklama: "**TMP** en geniştir; içinde girişimin ulaşabileceği **EMP**, onun içinde de ilk hedeflenen **İHP** yer alır.",
    },
    {
      id: "u3-t-tmp", tip: "mcq", zorluk: 2,
      soru: "Bir ürünün hitap edebileceği tüm potansiyel müşterilerin oluşturduğu pazar hangisidir?",
      secenekler: ["Toplam mevcut pazar", "Erişilebilir mevcut pazar", "İlk hedef pazar", "Niş pazar"],
      dogru: 0,
      aciklama: "**Toplam mevcut pazar (TMP)** ürünün çözdüğü problemi yaşayan herkesi kapsar.",
    },
    {
      id: "u3-t-otel", tip: "mcq", zorluk: 3,
      soru: "Kitaptaki İstanbul otel örneğinde 535 otel hangi pazarı gösterir?",
      secenekler: ["Toplam mevcut pazar", "Erişilebilir mevcut pazar", "İlk hedef pazar", "Yeni pazar"],
      dogru: 0,
      aciklama: "535 otel **TMP**'dir; ulaşılabilir 247 otel EMP, ilk hedeflenen yaklaşık 120 otel İHP'dir.",
    },
    {
      id: "u3-t-pazaryeri", tip: "mcq", zorluk: 1,
      soru: "Alıcı ve satıcıyı bir araya getirip aracıları ortadan kaldıran platformlara verilen genel ad hangisidir?",
      secenekler: ["Pazaryeri", "Franchise", "Toptancı", "Bayi ağı"],
      dogru: 0,
      aciklama: "**Pazaryeri** iş modeli aracıları kaldırarak erişilebilirliği ve bulunabilirliği artırır; gelirini genellikle komisyondan elde eder.",
    },
  ]),

  ...turet(U, K, "u3-benimseme", [
    {
      id: "u3-t-erken-benimseyen", tip: "mcq", zorluk: 2,
      soru: "\"Sürünün önünde gidelim\" diyen, vizyoner olarak tanımlanan müşteri grubu hangisidir?",
      secenekler: ["Erken benimseyenler", "Erken çoğunluk", "Geç çoğunluk", "Geriden gelenler"],
      dogru: 0,
      aciklama: "**Erken benimseyenler** vizyonerdir ve sürünün önünde olmak ister.",
    },
    {
      id: "u3-t-gec-cogunluk", tip: "mcq", zorluk: 2,
      soru: "Yeniliği \"sadece gerekli olduğunda\" benimseyen, kitapta \"neme lazımcılar\" olarak anılan grup hangisidir?",
      secenekler: ["Geç çoğunluk", "Yenilikçiler", "Erken benimseyenler", "Erken çoğunluk"],
      dogru: 0,
      aciklama: "**Geç çoğunluk** yeniliği ancak gerekli olduğunda kullanır.",
    },
    {
      id: "u3-t-kuskucu", tip: "mcq", zorluk: 1,
      soru: "\"İmkânı yok\" diyerek yeniliğe en son katılan kuşkucu grup hangisidir?",
      secenekler: ["Geriden gelenler", "Erken çoğunluk", "Erken benimseyenler", "Yenilikçiler"],
      dogru: 0,
      aciklama: "**Geriden gelenler** (kuşkucular) yeniliği en son benimser.",
    },
    {
      id: "u3-t-ucurum", tip: "mcq", zorluk: 3,
      soru: "Moore'a göre büyük uçurum hangi iki grup arasında yer alır?",
      secenekler: ["Erken benimseyenler ile erken çoğunluk", "Yenilikçiler ile erken benimseyenler", "Erken çoğunluk ile geç çoğunluk", "Geç çoğunluk ile geriden gelenler"],
      dogru: 0,
      aciklama: "**Büyük uçurum** vizyoner erken benimseyenler ile pragmatist erken çoğunluk arasındadır; birçok girişim bu geçişi yapamaz.",
    },
    {
      id: "u3-t-pragmatist", tip: "tf", zorluk: 2,
      soru: "Erken çoğunluk, kitapta pragmatistler olarak tanımlanır.",
      dogru: true,
      aciklama: "Doğru. Erken çoğunluk pragmatisttir ve \"sürüden ayrılmayalım\" der.",
    },
  ]),

  ...turet(U, K, "u3-ihtiyac", [
    {
      id: "u3-t-istek-talep", tip: "mcq", zorluk: 2,
      soru: "Bir ürünü isteyen ama satın alma gücü yetmeyen kişinin durumu kitaba göre nasıl adlandırılır?",
      secenekler: ["İstek", "Talep", "Zorunlu ihtiyaç", "Gizli ihtiyaç"],
      dogru: 0,
      aciklama: "Satın alma gücüyle desteklenmeyen arzu **istek**tir; alım gücü eklenince **talep** olur.",
    },
    {
      id: "u3-t-sabit", tip: "mcq", zorluk: 2,
      soru: "Karşılandığı sürece nasıl karşılandığının önemi olmayan ihtiyaç tipi hangisidir? (Henry Ford'un siyah araba sözü örneği)",
      secenekler: ["Sabit ihtiyaç", "Doğrusal ihtiyaç", "Zorunlu ihtiyaç", "Gizli ihtiyaç"],
      dogru: 0,
      aciklama: "**Sabit ihtiyaçta** arz talepten azdır; müşteri ürünü elde etmekle ilgilenir, rengi önemli değildir.",
    },
    {
      id: "u3-t-dogrusal", tip: "mcq", zorluk: 2,
      soru: "Daha ucuz, daha hızlı, daha iyi olma yarışına dayanan ihtiyaç tipi hangisidir?",
      secenekler: ["Doğrusal ihtiyaç", "Sabit ihtiyaç", "Gizli ihtiyaç", "Zorunlu ihtiyaç"],
      dogru: 0,
      aciklama: "**Doğrusal ihtiyaçlarda** rekabet belirleyicidir; aynı bölgedeki iki restoranın müşteri savaşı örnektir.",
    },
    {
      id: "u3-t-hijyen", tip: "mcq", zorluk: 2,
      soru: "Karşılanınca ekstra memnuniyet yaratmayan ama eksikliği büyük memnuniyetsizlik doğuran, hijyen faktörü de denen ihtiyaç tipi hangisidir?",
      secenekler: ["Zorunlu ihtiyaç", "Gizli ihtiyaç", "Doğrusal ihtiyaç", "Sabit ihtiyaç"],
      dogru: 0,
      aciklama: "**Zorunlu ihtiyaç**: havayolunun güvenli, okulun temiz olması gibi endüstri standardı haline gelmiş beklentiler.",
    },
    {
      id: "u3-t-heves", tip: "mcq", zorluk: 2,
      soru: "Talebi bir anda çok hızlı artıp yine bir anda kaybolan ürünlere ne ad verilir?",
      secenekler: ["Heves", "Trend", "Megatrend", "Sabit ürün"],
      dogru: 0,
      aciklama: "Ahizeli telefon kulaklığı gibi ürünler **heves (fad)** olarak adlandırılır.",
    },
    {
      id: "u3-t-megatrend", tip: "mcq", zorluk: 2,
      soru: "Tüm dünyayı etkileyen ve toplumsal değişikliklere yol açan gelişmelere ne ad verilir?",
      secenekler: ["Megatrend", "Heves", "Moda", "Hijyen faktörü"],
      dogru: 0,
      aciklama: "**Megatrend**: sağlıklı ve sürdürülebilir ürünler, paylaşım ekonomisi gibi küresel eğilimler.",
    },
    {
      id: "u3-t-moore", tip: "mcq", zorluk: 2,
      soru: "Moore Kanunu teknolojinin gelişimini nasıl tarif eder?",
      secenekler: ["Katlamalı biçimde", "Doğrusal biçimde", "Döngüsel biçimde", "Durağan biçimde"],
      dogru: 0,
      aciklama: "Mikroçiplerdeki transistör sayısı yaklaşık iki yılda bir ikiye katlanır: gelişim **katlamalıdır**, ama insan zihni doğrusal düşünmeye meyillidir.",
    },
    {
      id: "u3-t-turkcell", tip: "tf", zorluk: 2,
      soru: "Kitaba göre bazı büyük holdingler GSM fırsatını, baz istasyonu yatırımının kısa vadede geri dönmeyeceği endişesiyle kaçırmıştır.",
      dogru: true,
      aciklama: "Doğru. Turkcell örneğinde geri dönüşün belirsizliği nedeniyle bazı holdingler trendi göremedi; fırsatı Mehmet Emin Karamehmet değerlendirdi.",
    },
  ]),
];
