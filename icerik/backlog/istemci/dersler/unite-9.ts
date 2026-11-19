import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u9-${ad}`;

export const UNITE_9: Ders = {
  hafta: 9,
  baslik: "Tahmin",
  ozet: "Büyüklüğü saatle değil karşılaştırarak söyle: göreli tahmin ve story point, Fibonacci ölçeği, Planning Poker, büyük backlog'lar için hızlı teknikler, ideal gün; tahminin tuzakları ve #NoEstimates.",
  bolumler: [
    {
      baslik: "Göreli ve mutlak tahmin",
      metin: md(`
**Mutlak tahmin** "bu iş kaç saat?" diye sorar. **Göreli tahmin** "bu iş şuna göre ne kadar büyük?" diye sorar.

İnsanlar ikincisinde çok daha iyidir. İki binadan hangisinin daha yüksek olduğunu bir bakışta söyleriz; kaç metre olduklarını söyleyemeyiz. Yazılımda da öyle: "Bakiye iadesi, menüye fotoğraf eklemekten kabaca dört kat büyük" cümlesinde takım hızla anlaşır; "bakiye iadesi 27 saat" cümlesinde anlaşamaz.

Göreli tahmin bir **referansla** başlar: herkesin iyi bildiği, küçük, bitmiş bir story.

> **Sahada:** Squad'ın referansı "Menüye yemek fotoğrafı ekle = 2". Yeni bir story geldiğinde ilk soru hep aynı: "Fotoğraftan büyük mü, küçük mü? Kaç katı?"
`),
      dene: [p("goreli-nedir"), p("neden-goreli")],
    },
    {
      baslik: "Story point neyi ölçer?",
      metin: md(`
Story point bir **büyüklük** ölçüsüdür. İçinde üç şey birden vardır:

- **Miktar:** ne kadar iş var?
- **Karmaşıklık:** ne kadar zor?
- **Belirsizlik:** ne kadarını bilmiyoruz?

Story point değer de değildir, sıra da. Değeri ve sırayı Product Owner bilir; büyüklüğü işi yapacak olanlar.

> **Kaynak ne der:** Scrum Rehberi'ne göre büyüklükten işi yapacak **Developers** sorumludur. Product Owner, öğeyi anlamalarına ve ödünleşimleri seçmelerine yardım ederek tahmini etkileyebilir. Rehber story point'ten ya da başka bir birimden söz etmez.

Puanların tarihi bir uyarı da taşır. Story point'i ilk kullananlardan Ron Jeffries, puanları belki kendisinin icat ettiğini, öyleyse şimdi üzgün olduğunu yazdı. Sebebi, puanların takımın kendi planlama aracı olmaktan çıkıp **verimlilik ölçüsüne** dönüşmesiydi (bu ünitenin sonunda).
`),
      dene: [p("puan-ne"), p("kim-tahmin"), p("jeffries")],
    },
    {
      baslik: "Fibonacci ölçeği",
      metin: md(`
Tahmin kartları çoğunlukla Fibonacci benzeri bir dizi kullanır: 1, 2, 3, 5, 8, 13... Aralıkların büyümesi bilinçlidir: **iş büyüdükçe belirsizlik de büyür**. 2 ile 3 arasındaki fark anlamlıdır; 20 ile 21 arasındaki fark değildir.

Mike Cohn'un yaygınlaştırdığı **değiştirilmiş Fibonacci** destesi: 0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100. Yüksek değerler yuvarlanmıştır; 21 gibi bir sayı yanlış bir kesinlik izlenimi verirdi.

Destede iki özel kart daha bulunur:

- **?**: "Bu story'yi tahmin edecek kadar anlamadım." Bir sorudur; çoğu zaman Product Owner'ın kısa bir açıklaması yeter.
- **Kahve:** "Mola verelim."

> **Sahada:** Squad'da 13'ten büyük bir kart açılırsa tahmin bırakılır ve story bölünür (7. ünite). 20, 40 ve 100 kartları feature ve epic'leri kabaca konuşmak için kullanılır.
`),
      dene: [p("neden-fib"), p("degistirilmis")],
    },
    {
      baslik: "Planning Poker",
      metin: md(`
James Grenning 2002'de tarif etti, Mike Cohn *Agile Estimating and Planning* (2005) ile yaygınlaştırdı. Akış kısadır:

1. Product Owner story'yi okur, sorular cevaplanır.
2. Herkes kartını **kapalı** seçer.
3. Kartlar **aynı anda** açılır.
4. Kartlar yakınsa anlaşılır; uzaksa **en düşük ve en yüksek kartı açanlar** gerekçelerini anlatır.
5. Yeniden oylanır.

Kartların aynı anda açılması **çıpalamayı** önler: önce konuşan, özellikle kıdemliyse, herkesi kendi sayısına çeker.

Planning Poker'ın değeri sayıda değil **farkta**dır. 3 ile 13 arasındaki fark, takımda birinin ötekilerin bilmediği bir şeyi bildiğini gösterir. Ortalama almak o bilgiyi gömer.

> **Sahada:** "Kartla bakiye yükleme" story'sinde herkes 5 açtı, Kerem 13 açtı. Kerem anlattı: ödeme sağlayıcının test ortamı yok. Story'den önce iki günlük bir spike doğdu. Bu durumu **Backlog Atölyesi**'nin 4. görevinde kendin yaşayabilirsin.

Product Owner masadadır ama kart açmaz: soruları cevaplar, kapsamı netleştirir, gerekirse "şu kısmı çıkarsak?" diye önerir.
`),
      dene: [p("poker-kim"), p("ayni-anda"), p("uclar")],
    },
    {
      baslik: "Hızlı tahmin teknikleri",
      metin: md(`
Planning Poker bir story için iyi, yüz story için yavaştır. Büyük backlog'lar için üç hızlı teknik:

| Teknik | Nasıl? | Ne zaman? |
|---|---|---|
| **T-shirt boyu** | XS, S, M, L, XL | Epic ve feature'ları kabaca karşılaştırırken; sayı olmadığı için kesinlik iddiası yok |
| **Affinity estimation** | Kartlar sessizce küçükten büyüğe duvara dizilir, sonra gruplara puan verilir | Yeni bir backlog'da onlarca öğe |
| **Kova yöntemi** | Masada puan kovaları (1, 2, 3, 5, 8...); kartlar referansa göre hızla dağıtılır | Yüzlerce öğe tek oturumda |

Hepsinde tartışma yalnızca **çok yer değiştiren** ya da kimsenin emin olmadığı kartlarda yapılır.

[[G-S9-01]]
`),
      dene: [p("tshirt"), p("affinity")],
      lab: "kova",
    },
    {
      baslik: "İdeal gün",
      metin: md(`
**İdeal gün**, toplantı ve kesinti olmadan yalnızca o işe ayrılmış bir gün varsayımıdır: "Kimse beni bölmezse bu iş iki günlük."

Story point'ten daha anlaşılır görünür ama bir tuzağı vardır: dışarıdan **takvim günü** gibi duyulur. "3 ideal gün" paydaşın kulağında "3 gün sonra biter" olur; oysa toplantılar, destek işleri ve izinlerle gerçek takvimde bir haftayı bulabilir.

Story point bu karışıklığı önlemek için birimsizdir. Puanı yeniden saate çeviren takım (1 puan = 4 saat) aynı sorunu geri getirir.
`),
      dene: [p("ideal-nedir")],
    },
    {
      baslik: "Tahmin tuzakları",
      metin: md(`
Tahminin en büyük düşmanı yanlış sayılar değil, sayıların **yanlış kullanımıdır**:

- **Puanı saate çevirmek:** göreli tahminin faydası kaybolur, puan bir iş taahhüdüne dönüşür.
- **Takımları karşılaştırmak:** bir takımın 5'i ile başkasının 5'i aynı şey değildir. "Squad A 60 puan, siz 35" cümlesi anlamsızdır.
- **Puan enflasyonu:** hız bir hedef olunca takım farkında olmadan tahminleri büyütür; grafik iyileşir, ürün değişmez. Ölçü hedef olunca iyi bir ölçü olmaktan çıkar (Goodhart yasası).
- **Tahmini söz saymak:** tahmin bir olasılık beyanıdır. Söz gibi kullanılırsa takım kendini korumak için tampon ekler ve tahmin bilgi taşımaz olur.

> **Sahada:** Teknik Liderlik'te hız artık yalnızca her squad'ın kendi grafiğinde görünüyor; squad'lar arası tabloda biten **değer** (Sprint Goal'ler, sonuç ölçüleri) konuşuluyor.
`),
      dene: [p("kiyas"), p("enflasyon")],
    },
    {
      baslik: "#NoEstimates ve öğe saymak",
      metin: md(`
Woody Zuill'in başlattığı, Vasco Duarte'nin kitaplaştırdığı **#NoEstimates** tartışması bir soru sorar: tahmin toplantılarının maliyeti, verdikleri bilgiye değiyor mu?

Önerisi plan yapmamak değildir. **İşi benzer küçüklükte parçalara bölüp tahmin yerine biten öğeleri saymaktır.** Öğeler benzer büyüklükteyse, "Sprint başına 8 story" bilgisi "Sprint başına 34 puan" kadar iyi bir tahmin verir.

Koşulu açıktır: öğeler **benzer ve küçük** olmalı. Biri iki günlük, öbürü iki haftalıksa öğe saymak yanıltır. Bu yüzden #NoEstimates'in asıl yatırımı tahmine değil **iyi bölmeye** (7. ünite) yapılır.

> **Sahada:** Squad son dört Sprint'te 7, 9, 8 ve 8 story bitirdi. Sürüm 1'de 32 küçük story var. Ortalamayla 4 Sprint; en yavaş Sprint'le 5. Tek bir tahmin toplantısı yapmadan bir sürüm aralığı çıktı (12. ünite).
`),
      dene: [p("noestimates-ne"), p("sayma-sart")],
    },
  ],
  test: [
    p("referans"), p("puan-saat"), p("soru-karti"), p("kerem-13"), p("po-kart"), p("kova"), p("ideal-sorun"), p("taahhut"), p("hiz-sayisi"),
  ],
};
