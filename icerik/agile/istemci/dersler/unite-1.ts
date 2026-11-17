import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u1-${ad}`;

export const UNITE_1: Ders = {
  hafta: 1,
  baslik: "Neden Agile?",
  ozet: "Agile'ın hangi sorunu çözmek için doğduğunu gör: tahmine dayalı ve deneysel süreç kontrolü, waterfall ve V-model, belirsizliğin iki kaynağı, Cynefin, iteratif ve artımlı teslim, ters üçgen ve Snowbird'e giden yol.",
  bolumler: [
    {
      baslik: "İki tür süreç: tarif ve deney",
      metin: md(`
Kek yaparken tarifi izlersin: aynı malzeme, aynı fırın, aynı süre, her seferinde aynı kek. Bu **tahmine dayalı** (predictive, defined) bir süreçtir. Girdiler ve adımlar baştan bilindiği için sonuç da baştan planlanabilir. Yüz sunucuya aynı yamayı kurmak, bir formu her ay aynı kurallarla doldurmak böyle işlerdir.

Şimdi bir aşçının **yeni bir yemek** icat ettiğini düşün. Tarif yoktur; bir şey dener, tadına bakar, tuzu artırır, pişirme süresini değiştirir. Kararları önceden yazılmış bir plana değil, **gözlediğine** dayanır. Bu **deneysel** (empirical) süreç kontrolüdür.

Yazılım projelerinin çoğu ikinci türe benzer: müşteri ne istediğini ürünü gördükçe anlar, teknoloji yapılırken sürpriz çıkarır, rakip bir hamle yapar. Böyle bir işi tarif gibi baştan planlamaya çalışmak, ilk ay yazılmış bir planın on ikinci ayda neden tutmadığını açıklar.

Deneysel kontrol "plansızlık" demek değildir. Plan yapılır, ama bir **varsayım** olarak görülür: kısa bir döngüde bir şey üretilir, sonuca bakılır, plan güncellenir. Scrum bu döngünün üstüne kurulu bir çerçevedir (4. ünite).

> **Sahada:** "Agile'a geçtik, artık plan yapmıyoruz" diyen bir takım aslında agile değildir; yalnızca plansızdır. Agile takımlar daha **sık** plan yapar: her Sprint'in başında, her gün ve her Sprint Review'da.
`),
      dene: [p("kontrol-dongusu")],
    },
    {
      baslik: "Waterfall: her şey bir kez ve sırayla",
      metin: md(`
**Waterfall** (şelale) modelinde iş aşamalara bölünür ve aşamalar sırayla, her biri bir öncekinin bitmesini bekleyerek yapılır: gereksinim analizi, tasarım, kodlama, test, teslim. Su şelaleden yukarı akmadığı gibi, aşamalar arasında geri dönmek de pahalıdır.

Modelin kaynağı sayılan Winston Royce'un 1970 makalesinin ilginç bir yanı var: Royce sıralı aşamaları çizer, ama hemen ardından bu basit hâlin **riskli ve hataya açık** olduğunu yazar; aşamalar arasında geri bildirim, bir ön prototip ("işi iki kez yap") ve müşteri katılımı önerir. "Waterfall" adı makalede geçmez; model sonradan en basit çizimiyle yaygınlaştı.

**V-model** aynı sıralı yapıya test tarafını ekler: sol kolda gereksinim, sistem tasarımı, ayrıntılı tasarım; sağ kolda her birinin karşılığı olan kabul, sistem, entegrasyon ve birim testi. Neyin nasıl test edileceğini baştan gösterir ama yine tahmine dayalıdır.

Waterfall'un asıl sorunu **geri bildirimin geç gelmesidir**. Müşteri çalışan ürünü çoğu zaman en sonda, kabul testinde görür. Yanlış anlaşılmış bir gereksinim o noktada ortaya çıkarsa düzeltmenin maliyeti en yüksektir: tasarım, kod ve testler o yanlışın üzerine kurulmuştur.

> **Sahada:** Waterfall her zaman yanlış değildir. Gereksinimi yasal olarak sabit, teknolojisi iyi bilinen, tekrarlanan bir işte ayrıntılı plan iyi çalışır. Agile'ın üstünlüğü belirsizlik arttıkça ortaya çıkar.
`),
      dene: [p("royce"), p("waterfall-uygun")],
    },
    {
      baslik: "Belirsizliğin iki kaynağı: ne ve nasıl",
      metin: md(`
Bir işi belirsiz yapan iki ayrı şey vardır:

- **Ne istendiği:** paydaşlar neyin değerli olduğunda ne kadar uzlaşıyor? Öğrenciler sipariş özelliğini mi ister, yoksa yalnızca menüyü görmek mi?
- **Nasıl yapılacağı:** teknoloji ne kadar kesin? Ödeme altyapısı yoğun saatte dayanır mı, eski bilgi işlem sistemiyle konuşabilir mi?

Agile dünyasında sık kullanılan **Stacey matrisi** bu iki ekseni bir tabloya koyar. İkisi de netse iş **basittir** (tarif yeter). Biri biraz belirsizse **karmaşıktır** (uzmanlar analizle çözer). İkisi de kısmen belirsizse iş **kompleks** bölgededir; ikisi de tamamen belirsizse **kaotiktir**.

| | Teknoloji kesin | Teknoloji belirsiz |
|---|---|---|
| **Gereksinim üzerinde uzlaşı var** | Basit | Karmaşık |
| **Uzlaşı yok** | Karmaşık | Kompleks → kaotik |

Yeni bir ürün geliştirmek neredeyse her zaman kompleks bölgededir. Scrum Rehberi de Scrum'u tam olarak "kompleks problemler için" tanımlar.
`),
      dene: [p("iki-belirsizlik")],
    },
    {
      baslik: "Cynefin: duruma göre karar vermek",
      metin: md(`
Dave Snowden'ın **Cynefin** (Galce, "kınefin" diye okunur) modeli Stacey'nin fikrini bir adım ileri götürür: her alan için **nasıl karar verileceğini** söyler.

| Alan | Neden-sonuç ilişkisi | Yaklaşım |
|---|---|---|
| **Açık** (clear) | Herkes görür | Algıla, sınıflandır, karşılık ver: en iyi uygulama |
| **Karmaşık** (complicated) | Uzman analiziyle görülür | Algıla, analiz et, karşılık ver: iyi uygulamalardan biri |
| **Kompleks** (complex) | Ancak geriye bakınca görülür | Dene, gözle, karşılık ver: ortaya çıkan uygulama |
| **Kaotik** (chaotic) | O an görülmez | Harekete geç, algıla, karşılık ver: önce dengeyi sağla |

Ortadaki beşinci bölge **karmaşa** (confusion): hangi alanda olduğunu bilmemek. En sık hata, kompleks bir işi karmaşıkmış gibi ele almaktır: "iyi analiz edersek doğru cevabı buluruz" sanılır, oysa doğru cevap ancak denedikçe ortaya çıkar.

Kampüs Yemekhanesi squad'ının günlerinden on durumu alanlara yerleştir:

[[G-S1-02]]

> **Sahada:** Aynı squad bir gün içinde birden çok alanda çalışır. Kaotik bir üretim olayında önce sistemi ayağa kaldırmak, kompleks bir ürün sorusunda küçük bir deney yapmak, karmaşık bir performans sorununda uzmanı çağırmak gerekir. Scrum en çok kompleks alandaki ürün işine uyar.
`),
      dene: [p("kaotik"), p("cynefin-scrum")],
      lab: "cynefin",
    },
    {
      baslik: "İteratif ve artımlı: önce kaykay",
      metin: md(`
İki kelime sık karıştırılır:

- **Artımlı** (incremental) geliştirmede ürün **kullanılabilir parçalar eklenerek** büyür: önce menü, sonra sipariş, sonra ödeme.
- **İteratif** (iterative) geliştirmede aynı şey **tekrar tekrar ele alınıp iyileştirilir**: menü ekranının üçüncü sürümü, ikinciden öğrenilenlerle yapılır.

Agile ikisini birlikte kullanır: her döngüde bir parça eklenir ve öncekiler geri bildirimle düzeltilir. Henrik Kniberg'in bilinen çizimi farkı iyi anlatır: arabayı tekerlek, şasi, motor diye parça parça yapmak yerine önce **kaykay**, sonra bisiklet, sonra motosiklet teslim etmek. Tekerlek tek başına kimsenin işine yaramaz; kaykay ise "bir yerden bir yere gitme" ihtiyacını kısmen karşılar ve **geri bildirim üretir**. Belki müşteri bisikletin yettiğini söyler.

Aşağıdaki modelde aynı on iki aylık projeyi iki biçimde teslim et. Gereksinim değişikliğinin geldiği ayı ve değişen payı değiştir:

[[G-S1-01]]

İki şey dikkat çeker. Birincisi, Sprint'lerle ilk değer **iki haftada** gelir ve en değerli özellikler önce yapıldığı için yılın ortasında değerin büyük kısmı teslim edilmiştir. İkincisi, değişiklik geldiğinde waterfall o aya kadar yaptığı işin değişen payını yeniden yapar; Sprint'lerde kaybolan yalnızca devam eden Sprint'in payıdır.
`),
      dene: [p("deger-erken"), p("kaykay")],
      lab: "deger-egrisi",
    },
    {
      baslik: "Demir üçgen ve ters üçgen",
      metin: md(`
Geleneksel proje yönetiminin **demir üçgeni** kapsam, zaman ve maliyeti birbirine bağlar: biri değişirse en az biri daha değişir. Tahmine dayalı planlamada **kapsam sabitlenir**, zaman ve maliyet ondan tahmin edilir. Tahmin tutmazsa ya tarih kayar ya bütçe aşılır ya da sessizce **kaliteden** kısılır.

Agile üçgeni ters çevirir: takım ve döngü süresi sabit olduğu için **zaman ve maliyet sabittir**; esneyen **kapsamdır**. Product Backlog değere göre sıralandığı için tarih geldiğinde elde en değerli parçalar vardır. Kalite ise pazarlık konusu değildir: Scrum Rehberi Sprint boyunca kalitenin düşürülmeyeceğini açıkça yazar.

> **Rehber ne der:** Sprint boyunca Sprint Goal'ü tehlikeye atacak değişiklik yapılmaz ve **kalite düşmez**; kapsam, daha çok şey öğrenildikçe Product Owner ile netleştirilir.

> **Sahada:** "Tarihi tutturmak için testleri bu Sprint atlayalım" cümlesi teknik borç olarak geri döner (11. ünite). Doğru soru "hangi özellik bu tarihte olmasa da olur?" sorusudur.
`),
      dene: [p("kalite-esnemez")],
    },
    {
      baslik: "Snowbird'e giden yol",
      metin: md(`
Agile birdenbire ortaya çıkmadı; birkaç farklı damar 2001'de bir araya geldi:

- **1950'ler ve sonrası, Toyota Üretim Sistemi:** israfı azaltma, çekme sistemi, sürekli iyileştirme. Bugünkü Lean ve Kanban'ın kökü (3. ünite).
- **1986, Takeuchi ve Nonaka:** Harvard Business Review'daki makalede ürün geliştirmeyi, topu birlikte ileri taşıyan bir rugby takımına benzetti. "Scrum" adı buradan geldi.
- **1995, Scrum:** Ken Schwaber ve Jeff Sutherland Scrum'u OOPSLA konferansında sundu.
- **1990'ların sonu, Extreme Programming (XP):** Kent Beck ve arkadaşları teknik pratikleri (test önce, eşli programlama, sürekli entegrasyon) uç noktaya taşıdı (11. ünite).
- **Şubat 2001, Snowbird:** Utah'taki bir kayak merkezinde bu "hafif" yöntemlerin 17 temsilcisi buluştu ve **Agile Manifesto**'yu yazdı (2. ünite).

Sonrasında ölçekleme çerçeveleri geldi: SAFe 2011'de, Spotify modelinin makalesi 2012'de yayımlandı. Organizasyon şemalarında gördüğün tribe, squad, epic ve feature gibi terimlerin çoğu bu ikinci dalgadan gelir (4. ünitedeki terim haritası).

> **Sahada:** Bu sıralama bir şeyi açıklar: agile bir yazılım hevesi değil, üretimde ve ürün geliştirmede onlarca yıl denenmiş fikirlerin yazılıma uyarlanmasıdır.
`),
      dene: [p("once-gelenler")],
    },
  ],
  test: [
    p("empirik-tanim"), p("tahmine-uygun"), p("neden-dogdu"), p("asamalar"), p("gec-geri-bildirim"), p("v-model"),
    p("stacey-eksen"), p("stacey-kompleks"), p("kompleks-yaklasim"), p("karmasik"), p("acik-alan"),
    p("iteratif-artimli"), p("geri-bildirim-sayisi"), p("ters-ucgen"), p("snowbird"),
  ],
};
