import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u10-${ad}`;

export const UNITE_10: Ders = {
  hafta: 10,
  baslik: "Sıralama ve Önceliklendirme",
  ozet: "Bir sıralama kararını sayıyla ve gerekçeyle savun: değer, risk, bağımlılık ve öğrenme; MoSCoW, Kano, gecikme maliyeti ve WSJF; değer/efor matrisi ve RICE; \"her şey yüksek öncelikli\" sorununun çaresi.",
  bolumler: [
    {
      baslik: "Öncelik değil sıra",
      metin: md(`
> **Kaynak ne der:** Scrum Rehberi Product Backlog'un **sıralı** (ordered) olduğunu söyler. Sıranın nasıl belirleneceğini söylemez; bundan Product Owner hesap verir.

"Öncelik" ile "sıra" arasındaki fark küçük görünür ama büyüktür. Öncelik etiketleri (yüksek, orta, düşük) eşitlik bırakır: 40 öğe "yüksek" olabilir. Sıra eşitlik bırakmaz: iki öğeden biri mutlaka önce gelir.

Sırayı yalnızca değer belirlemez. Dört etken birlikte düşünülür:

- **Değer:** kullanıcıya ve işe ne kazandırır?
- **Risk:** belirsiz bir şeyi erken yapmak riski erken azaltır.
- **Bağımlılık:** bir öğe ötekini mümkün kılıyorsa önce gelir.
- **Öğrenme:** bazı öğeler değerinden çok öğrettikleri için öne alınır (bir varsayımı sınamak).

> **Sahada:** "Kartla bakiye yükleme"nin değeri orta ama ödeme sağlayıcısıyla çalışıp çalışmayacağı belirsiz. Elif onu üste yakın koyuyor: entegrasyonun yürümediğini son Sprint'te öğrenmek en pahalısı olur.
`),
      dene: [p("sira-mi"), p("dort-etken")],
    },
    {
      baslik: "MoSCoW",
      metin: md(`
Dai Clegg'in geliştirdiği, DSDM'in benimsediği teknik gereksinimleri dört gruba ayırır:

| Grup | Anlamı |
|---|---|
| **Must have** | Olmazsa sürüm anlamsız, güvensiz ya da yasadışı |
| **Should have** | Önemli ama geçici bir çözümle idare edilebilir |
| **Could have** | Olursa iyi; sorun çıkınca ilk bırakılan |
| **Won't have (this time)** | Bu sürümde yok; "asla" demek değil |

DSDM, Must'ların bir zaman kutusundaki eforun **yaklaşık %60'ını** geçmemesini önerir. Geri kalan Should ve Could'lar, bir şey ters gittiğinde bırakılabilecek esnekliği verir.

> **Sahada:** Paydaş toplantısında 20 özelliğin 17'si Must çıktı. Elif her biri için tek bir soru sordu: "Bu olmadan yayınlar mıyız?" Must'lar 6'ya indi.

MoSCoW'un zayıf yanı grup içinde sıra vermemesidir. Sürüm kapsamını konuşmak için iyidir; backlog'u sıralamak için tek başına yetmez.
`),
      dene: [p("harfler"), p("must-orani")],
    },
    {
      baslik: "Kano modeli",
      metin: md(`
Noriaki Kano 1984'te özelliklerin müşteri memnuniyetine etkisini kategorilere ayırdı:

- **Temel (must-be):** yokluğu öfke yaratır, varlığı teşekkür getirmez. Ödemenin güvenli olması.
- **Performans (one-dimensional):** ne kadar iyiyse memnuniyet o kadar artar. Sipariş onay süresi.
- **Heyecan verici (attractive):** beklenmez; olunca sevindirir, olmayınca kimse fark etmez. Doğum gününde ücretsiz tatlı.
- **İlgisiz (indifferent):** memnuniyete etkisi yok.

Kategoriler sabit değildir. Bugünün heyecan verici özelliği yarının beklentisidir: "yemeğin hazır" bildirimi ilk çıktığında öğrencileri sevindirdi, iki yıl sonra herkes onu bekliyor. Bu yüzden Kano analizi aralıklarla tekrarlanır.

Sıralamaya katkısı: önce temeller (yoksa hiçbir şey sayılmaz), sonra performans, araya da birkaç heyecan verici özellik.

[[G-S10-01]]
`),
      dene: [p("kano-kim"), p("temel")],
      lab: "kano",
    },
    {
      baslik: "Gecikme maliyeti",
      metin: md(`
Don Reinertsen *The Principles of Product Development Flow* (2009) kitabında şunu önerir: yalnızca bir şeyi ölçecekseniz **gecikme maliyetini** (Cost of Delay) ölçün.

Soru "bu ne kadar değerli?" değil, **"bunu bir hafta geciktirirsek ne kaybederiz?"** sorusudur. İkisi farklı cevaplar verebilir: çok değerli ama acelesi olmayan bir iş beklenebilir; orta değerli ama bir tarihe bağlı bir iş beklenemez.

Gecikme maliyeti eğrileri genelde dört türde anlatılır:

| Tür | Örnek | Gecikmenin bedeli |
|---|---|---|
| **Acil** | Öğle saatinde ödeme çöktü | Her gün büyük |
| **Sabit tarihli** | Kayıt haftasında hoş geldin bakiyesi | Tarihten önce düşük, tarihi kaçırınca büyük |
| **Standart** | Menüde yemek fotoğrafı | Her hafta aşağı yukarı aynı |
| **Somut olmayan** | Teknik borç azaltma | Bugün görünmez, bir gün birden büyür |
`),
      dene: [p("cod-nedir"), p("reinertsen"), p("sabit-tarih")],
    },
    {
      baslik: "WSJF",
      metin: md(`
**Weighted Shortest Job First** gecikme maliyetini işin büyüklüğüne böler:

> WSJF = gecikme maliyeti / iş büyüklüğü

Mantığı: birim süre başına en çok gecikme maliyetini kurtaran iş önce yapılır. Sonuç bazen şaşırtır: küçük ve acil bir iş, daha değerli görünen büyük bir işin önüne geçer.

SAFe gecikme maliyetini üç bileşenin toplamı olarak tahmin eder: **iş değeri** + **zaman kritikliği** + **risk azaltma ya da fırsat**. Her bileşen göreli olarak (Fibonacci benzeri bir ölçekle) puanlanır; büyüklük de iş süresi için bir vekildir.

> **Sahada:** "Hazır bildirimi": gecikme maliyeti 12, büyüklük 3, WSJF 4. "Kalabalık göstergesi": gecikme maliyeti 15, büyüklük 8, WSJF yaklaşık 1,9. Daha değerli görünen iş arkada kalıyor.

WSJF bir hesap makinesi değil bir **konuşma aracıdır**. Sayılar göreli tahminlerdir; asıl değer, paydaşların "zaman kritikliği neden 13?" sorusunu konuşmasıdır.

[[G-S10-02]]
`),
      dene: [p("formul"), p("safe-bilesen"), p("wsjf-hesap")],
      lab: "wsjf",
    },
    {
      baslik: "Değer/efor matrisi ve RICE",
      metin: md(`
**Değer/efor matrisi** dört köşelik basit bir tablodur:

| | Düşük efor | Yüksek efor |
|---|---|---|
| **Yüksek değer** | Hızlı kazanç: önce yap | Büyük proje: böl ve planla |
| **Düşük değer** | Dolgu: boşluk olunca | Para tuzağı: yapma |

**RICE** dört etkeni tek sayıya çevirir:

> RICE = (Erişim × Etki × Güven) / Efor

- **Reach (erişim):** bir dönemde kaç kişiye ulaşır?
- **Impact (etki):** her birine etkisi (ör. 0,25 ile 3 arası)
- **Confidence (güven):** tahminlere güven yüzdesi
- **Effort (efor):** kişi-ay

Güven çarpanı, heyecan verici ama belirsiz fikirlerin puanını düşürür: "ayda 2000 öğrenci, etki 2, güven %50, efor 4 kişi-ay" → (2000 × 2 × 0,5) / 4 = 500.
`),
      dene: [p("hizli-kazanc"), p("rice")],
    },
    {
      baslik: "\"Her şey yüksek öncelikli\"",
      metin: md(`
Her paydaş kendi isteğini "yüksek öncelik" diye getirir. Etiketler enflasyona uğrar: önce "yüksek", sonra "çok yüksek", sonra "kritik".

Çare etiket değil **karşılaştırmadır**: "Bunu şunun önüne mi koyalım?" İki öğeyi yan yana koymak paydaşı gerçek ödünleşimi görmeye zorlar. Yukarıdaki tekniklerin hepsi bu konuşmayı kolaylaştırmak içindir; hiçbiri Product Owner'ın kararının yerini almaz.

> **Kaynak ne der:** Product Owner'ın başarılı olması için organizasyonun onun kararlarına saygı göstermesi gerekir. Product Backlog'daki sırayı değiştirmek isteyen, Product Owner'ı ikna etmeye çalışır.
`),
      dene: [p("uc-yuksek")],
    },
  ],
  test: [
    p("riskli-once"), p("hepsi-must"), p("heyecan"), p("somut-olmayan"), p("wsjf-sec"), p("rice-hesap"), p("po-hesap"),
  ],
};
