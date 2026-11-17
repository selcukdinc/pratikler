import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u9-${ad}`;

export const UNITE_9: Ders = {
  hafta: 9,
  baslik: "Görünürlük ve Ölçüm",
  ozet: "Burndown, burnup, velocity, akış ölçütleri, kümülatif akış diyagramı ve Monte Carlo tahmini: hangisi neyi gösterir, nasıl okunur, ne zaman yanıltır? Squad'ın grafiklerini oku, ölçütlerin hedefe dönüşünce nasıl bozulduğunu gör ve tek bir tarih yerine olasılıkla tahmin vermeyi öğren.",
  bolumler: [
    {
      baslik: "Burndown: kalan iş günden güne",
      metin: md(`
**Sprint burndown** grafiği yatay eksende Sprint'in günlerini, dikey eksende **kalan işi** (puan, saat ya da öğe sayısı) gösterir. Sprint başında tepeden başlar, iş Done oldukça iner. Çoğu araç başlangıçtan sıfıra düz bir **ideal çizgi** de çizer; gerçek çizgi onun çevresinde dalgalanır.

> **Rehber ne der:** 2020 Rehberi burndown, burnup ve kümülatif akış gibi tahmin pratiklerinin **var olduğunu ve faydalı olabildiğini** söyler, ama bunların **empirizmin yerini tutmadığını** ekler. Hiçbiri zorunlu değildir; Rehber dışı uygulamadır.

Burndown'ın değeri, şekliyle **soru sordurmasıdır**:

- **Sona yığılma:** sekiz gün düz, son iki gün uçurum. Öğeler büyük ve paralel yürüyor, hiçbiri bitmiyor; test ve entegrasyon sona kalıyor.
- **Yukarı çıkış:** kalan iş arttı. Sprint'e iş eklendi ya da bir öğe sanılandan büyük çıktı.
- **Düz çizgi:** birkaç gündür hiçbir şey Done olmuyor. Ya grafik güncellenmiyor ya da bir iş takıldı; Daily'nin konusu tam budur.
- **Yavaş eğim:** düzenli ama yetersiz iniş. Erken görülürse PO ile kapsam konuşulur, Sprint Goal korunur.

Altı burndown'ı oku:

[[G-S9-01]]

> **Sahada:** Burndown'ı yönetici için değil takım için tut. "Çizgiyi ideale yaklaştırmak" hedef olursa öğeler yarım hâlde Done sayılmaya başlar.
`),
      dene: [p("burndown-tanim"), p("ucurum"), p("yukari")],
      lab: "burndown",
    },
    {
      baslik: "Burnup: biten iş ve kapsam ayrı çizgilerde",
      metin: md(`
Burndown tek çizgidir: kalan iş azaldıysa bunun nedeni işin bitmesi mi, kapsamın küçülmesi mi, ayırt edilemez. **Burnup** iki çizgi çizer:

- **Biten iş:** sıfırdan yukarı çıkar.
- **Toplam kapsam:** yatay başlar, iş eklenince yükselir, çıkarılınca düşer.

İki çizginin buluştuğu yer teslimdir. Squad'ın sürüm burnup'ında biten iş düzenli yükseliyor ama kapsam çizgisi de aynı hızla tırmanıyorsa takım çalışıyor, hedef yine de yaklaşmıyor demektir. Bu bir takım sorunu değil, **kapsam kararıdır** ve PO ile paydaşların önüne konur.

Kalan Sprint sayısı kaba bir bölmeyle bulunur: kalan kapsam ÷ Sprint başına biten iş. Kapsam 100 puan, biten 60 puan ve takım Sprint başına yaklaşık 20 puan bitiriyorsa iki Sprint kalmıştır; kapsam büyümeye devam ederse bu sayı da büyür.
`),
      dene: [p("burnup-fark"), p("burnup-kapsam"), p("kalan-burnup")],
    },
    {
      baslik: "Velocity: takımın kendi aynası",
      metin: md(`
**Velocity**, takımın bir Sprint'te **Done** yaptığı işin miktarıdır; çoğunlukla story point olarak ölçülür. Rehber'de yoktur; story point ve velocity Rehber dışı uygulamalardır.

İki kural velocity'yi dürüst tutar:

1. **Yalnızca Done sayılır.** Sprint sonunda yüzde 80'i biten bir öğe velocity'ye sıfır katkı yapar; kalan kısım Product Backlog'a döner, yeniden tahmin edilir.
2. **Tek sayı değil, aralık kullanılır.** Bir takımın son dört Sprint'i 28, 34, 31 ve 31 puan: ortalama 31, ama dürüst tahmin "büyük olasılıkla 28 ile 34 arası" olur.

Sprint Planning'de velocity, Developers'ın **ne kadar iş alabileceğini** düşünmesine yardım eder. Kapasite değişir: bayram haftası, iki kişinin izni ya da yeni katılan biri velocity'yi düşürür; takım bunu hesaba katarak iş seçer.
`),
      dene: [p("velocity-tanim"), p("velocity-hesap"), p("velocity-aralik")],
    },
    {
      baslik: "Velocity tuzakları",
      metin: md(`
Velocity takımın kendine baktığı bir aynadır; dışarıdan bir karne gibi kullanılınca bozulur.

- **Takımları karşılaştırmak:** Story point her takımın kendi göreli ölçeğidir. A takımının 60'ı ile B takımının 30'u aynı birimde değildir; "B yavaş" sonucu anlamsızdır.
- **Velocity hedefi koymak:** "Her Sprint yüzde 10 artırın" denirse en kolay yol tahminleri şişirmektir. Üç Sprint sonra velocity artar ama teslim edilen özellik sayısı aynı kalır.
- **Taahhüde çevirmek:** Velocity bir tahmindir, söz değildir. Takım geçen Sprint 31 puan yaptı diye bu Sprint en az 31 puan bitirmek zorunda değildir; söz verilen şey Sprint Goal'dür.

> **Sahada:** Yönetim "ne kadar hızlıyız?" diye soruyorsa velocity yerine teslim edilen değeri, akış ölçütlerini ve Sprint Goal'lerin tutma oranını gösterin.
`),
      dene: [p("karsilastirma"), p("sisirme")],
    },
    {
      baslik: "Akış ölçütleri: cycle time, throughput, yaş",
      metin: md(`
Kanban'ın ölçütleri puan istemez; öğeler **sayılır**. 3. ünitede gördüğün kavramlar burada ölçüte dönüşür:

| Ölçüt | Ne ölçer |
|---|---|
| **Cycle time** | Bir öğenin **başladığı** an ile **bittiği** an arasında geçen süre |
| **Lead time** | İstendiği an ile bittiği an arası (bekleme dahil) |
| **Throughput** | Belirli bir zaman diliminde biten öğe sayısı |
| **WIP** | Başlanmış ama bitmemiş öğe sayısı |
| **İş öğesi yaşı** | Bitmemiş bir öğenin başladığından beri geçen süre |

Cycle time yalnızca **bitmiş** işi anlatır, yani geçmişe bakar. **Yaş** bugün devam eden işe bakar: dört gündür Test'te bekleyen bir öğe, cycle time grafiğine girmeden önce Daily'de konuşulabilir.

Little yasası bu ölçütleri bağlar: ortalama cycle time = ortalama WIP ÷ ortalama throughput. Panoda ortalama 12 öğe varsa ve takım günde 2 öğe bitiriyorsa ortalama cycle time 6 gündür.
`),
      dene: [p("cycle-time"), p("yas"), p("little-akis")],
    },
    {
      baslik: "Kümülatif akış diyagramı (CFD)",
      metin: md(`
**CFD**, her gün için her aşamaya **o güne kadar girmiş** toplam öğe sayısını üst üste bantlar hâlinde çizer. Okuması üç kurala dayanır:

- **Dikey uzaklık** iki komşu çizgi arasında o gün o aşamada bulunan iş sayısıdır, yani o aşamanın WIP'idir.
- **Yatay uzaklık** bir öğenin o aşamalardan geçme süresine kabaca karşılık gelir.
- **Bitti çizgisinin eğimi** throughput'tur.

Kararlı bir akışta bantlar **kabaca paralel** yükselir. Bir bant kalınlaşıyorsa iş orada birikiyor demektir: Test bandı haftalardır genişliyor ve Bitti yavaş yükseliyorsa Test bir darboğazdır. Düz bir Bitti çizgisi hiçbir şeyin teslim edilmediğini gösterir.

Gelen iş takımın kapasitesini aşınca WIP sınırının ne yaptığını gör:

[[G-S9-02]]
`),
      dene: [p("cfd-tanim"), p("cfd-bant")],
      lab: "cfd",
    },
    {
      baslik: "Goodhart yasası: ölçü hedef olunca",
      metin: md(`
İktisatçı Charles Goodhart'ın gözleminden doğan ve çoğunlukla "**bir ölçü hedefe dönüşünce iyi bir ölçü olmaktan çıkar**" diye özetlenen düşünceye **Goodhart yasası** denir. Ölçülen kişiler sayıyı tutturmanın en kolay yolunu bulur; o yol çoğu zaman asıl amaca hizmet etmez.

Örnekler:

- QA "bulunan hata sayısı"na göre ödüllendirilirse hatalar parçalara bölünür, sayı şişer, geliştiricilerle QA arasında gerilim artar.
- "Kapatılan iş sayısı" hedef olursa büyük işler anlamsız küçük parçalara bölünür.
- "Kod kapsamı yüzde 90" hedef olursa hiçbir şey denetlemeyen testler yazılır.

Squad bunu nasıl önler? Ölçütleri **takımın öğrenmesi** için kullanır, kişileri ödüllendirmek ya da cezalandırmak için değil. Tek bir sayıya bakmak yerine **birbirini dengeleyen** ölçülere bakar: hız ile birlikte hata oranı, throughput ile birlikte cycle time.
`),
      dene: [p("goodhart"), p("hata-sayisi"), p("iyi-olcut")],
    },
    {
      baslik: "Monte Carlo: tek tarih yerine olasılık",
      metin: md(`
"40 öğe ne zaman biter?" sorusuna ortalamayla cevap vermek cazip gelir: günde ortalama 2 öğe, öyleyse 20 gün. Oysa bu tarih kabaca **yarı yarıya** tutar; günlerin yarısı ortalamanın altında kalır.

**Monte Carlo** tahmini geçmiş verinin dağılımını kullanır:

1. Son 20 iş gününün günlük throughput'u alınır (örneğin 2, 0, 3, 1, 4, ...).
2. Her gün için geçmişten rastgele bir gün seçilir ve o günün sayısı kadar öğe bitmiş sayılır; 40 öğe bitene kadar sürer.
3. Bu binlerce kez tekrarlanır ve kaç günde bittiği kaydedilir.

Sonuç bir dağılımdır: "**%85 olasılıkla 24 gün ya da daha kısa**" cümlesi, denenen senaryoların %85'inde işin 24 günde ya da daha kısa sürede bittiği anlamına gelir. Risk iştahına göre %50, %85 ya da %95 seçilir.

[[G-S9-03]]

> **Sahada:** Monte Carlo puan gerektirmez, öğe sayar. Öğeler kabaca benzer büyüklükteyse tahmin puanla yapılandan çoğu zaman daha isabetlidir.
`),
      dene: [p("mc-tanim"), p("yuzde-85")],
      lab: "monte-carlo",
    },
  ],
  test: [
    p("rehberde"), p("duz"), p("yarim-is"), p("velocity-kapasite"), p("throughput"),
    p("cfd-duz"), p("mc-ortalama"), p("burnup-kapsam"), p("ucurum"), p("goodhart"),
  ],
};
