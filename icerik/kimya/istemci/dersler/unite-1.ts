import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_1: Ders = {
  hafta: 1,
  donem: "vize",
  baslik: "Madde, karışımlar ve ayırma yöntemleri",
  ozet: "Saf madde, element, bileşik ve karışım; fiziksel ve kimyasal olaylar; süzme, damıtma, kristallendirme.",
  bolumler: [
    {
      baslik: "Madde ve sınıflandırılması",
      metin: md(`
**Neden önemli?** Kimyada bir şeyi ölçmeden ya da tepkimeye sokmadan önce ne olduğunu bilmek gerekir. Bir maddenin saf mı yoksa karışım mı olduğu, onu hangi yöntemle ayıracağını ve hangi özelliklerine güvenebileceğini belirler.

**Madde** (matter), kütlesi olan ve uzayda yer kaplayan her şeydir. Maddeler iki büyük gruba ayrılır:

- **Saf madde**: Her yerinde aynı bileşimi taşıyan, belirli erime ve kaynama noktası olan maddedir.
- **Karışım** (mixture): İki ya da daha fazla maddenin kimyasal bağ kurmadan bir araya gelmesidir. Bileşenler kendi özelliklerini korur.

Saf maddeler de ikiye ayrılır:

- **Element**: Tek tür atomdan oluşur ve kimyasal yöntemlerle daha basit maddelere ayrılamaz. Demir (Fe), oksijen (O₂), altın (Au).
- **Bileşik** (compound): İki ya da daha fazla elementin belirli bir kütle oranında kimyasal olarak birleşmesiyle oluşur. Su (H₂O), sofra tuzu (NaCl), karbon dioksit (CO₂). Bileşikler yalnızca kimyasal yöntemlerle elementlerine ayrılır.

Karışımlar da görünüşlerine göre ikiye ayrılır:

- **Homojen karışım**: Her yerinde aynı bileşim vardır, bileşenler gözle ayırt edilemez. Bunlara **çözelti** (solution) de denir: tuzlu su, hava, şekerli çay, pirinç alaşımı.
- **Heterojen karışım**: Bileşenler gözle ya da mikroskopla ayırt edilebilir, bileşim her yerde aynı değildir: kum ve su, zeytinyağı ve su, granit.

**Karışımların özellikleri.** Bir karışımı bileşikten ayıran özellikler şunlardır:

- Bileşenler **herhangi bir oranda** karışabilir; bileşiklerde olduğu gibi belirli bir oran yoktur.
- Karışım oluşurken ve bileşenlerine ayrılırken **enerji değişimi azdır**, çünkü kimyasal bağ kurulmaz ya da kırılmaz.
- Bileşenler **fiziksel yöntemlerle** (süzme, damıtma, mıknatıs) ayrılır.
- Karışımların erime ve kaynama noktaları **sabit değildir**; bileşime göre değişir ve hâl değişimi boyunca sıcaklık kayar. Saf suyun kaynama noktası 1 atm'de 100 °C'tir, tuzlu su ise daha yüksek sıcaklıkta kaynamaya başlar ve kaynarken sıcaklığı yükselir.

> **Sık hata:** "İki elementten oluşuyorsa bileşiktir" demek. Demir tozu ile kükürt tozunu karıştırırsan elde ettiğin şey bir karışımdır; mıknatısla demiri geri alabilirsin. Isıtıp tepkimeye sokarsan demir(II) sülfür (FeS) bileşiği oluşur ve demir artık mıknatısa yapışmaz.
`),
      dene: ["km-u1-homojen-ornek"],
    },
    {
      baslik: "Fiziksel ve kimyasal değişim",
      metin: md(`
**Neden önemli?** Bir olayın fiziksel mi kimyasal mı olduğunu bilmek, maddenin kimliğinin değişip değişmediğini söyler. Sınavlarda en sık sorulan ayrımlardan biridir.

**Fiziksel değişim** (physical change), maddenin görünüşünü, hâlini ya da boyutunu değiştirir ama **kimliğini değiştirmez**. Moleküller aynı kalır, yalnızca dizilişleri ya da birbirlerinden uzaklıkları değişir. Örnekler:

- Hâl değişimleri: suyun donması, buzun erimesi, benzinin buharlaşması, iyotun süblimleşmesi.
- Çözünme: şekerin ya da tuzun suda çözünmesi.
- Kırma, öğütme, kesme, bükme: camın kırılması, odunun yontulması.

**Kimyasal değişim** (chemical change) ya da **kimyasal tepkime**, maddenin kimliğini değiştirir: atomlar arasındaki bağlar kırılır, yenileri kurulur ve **yeni bir madde** oluşur. Örnekler:

- Yanma: alüminyumun, kâğıdın, doğal gazın yanması.
- Paslanma: demirin nemli havada demir oksite dönüşmesi.
- Çürüme, mayalanma, sütün ekşimesi, yemeğin pişmesi.
- Asit ile bazın tepkimesi, fotosentez, solunum.

Bir olayın kimyasal olduğunu gösteren ipuçları: **renk değişimi**, **gaz çıkışı** (kabarcık), **çökelek oluşması**, **ısı ya da ışık yayılması** ve kokunun değişmesi. Bunlar tek başına kesin kanıt değildir (suyun kaynaması da gaz çıkışıdır), ama yeni bir madde oluştuğunu düşündürür.

> **Sık hata:** Çözünmeyi kimyasal sanmak. Şeker suda çözündüğünde şeker molekülleri suyun arasına dağılır ama şeker olarak kalır; suyu buharlaştırınca şekeri geri alırsın. Bu yüzden çözünme fiziksel bir olaydır.

**Fiziksel ve kimyasal özellik.** Bir maddenin kimliği değişmeden ölçülebilen özellikleri **fiziksel özelliktir**: renk, yoğunluk, erime noktası, kaynama noktası, çözünürlük, iletkenlik. Bir maddenin başka maddelere dönüşme eğilimini anlatan özellikleri **kimyasal özelliktir**: yanıcılık, paslanma eğilimi, asitlerle tepkimeye girme.
`),
      dene: ["km-u1-fizik-cozunme"],
    },
    {
      baslik: "Karışımları ayırma yöntemleri",
      metin: md(`
**Neden önemli?** Laboratuvarda ve endüstride neredeyse her maddeyi bir karışımdan ayırarak elde ederiz: deniz suyundan tuz, ham petrolden benzin, havadan oksijen. Doğru yöntemi seçmek, bileşenlerin hangi özelliğinin farklı olduğuna bakmaktır.

Karışımlar fiziksel yöntemlerle ayrılır. Her yöntem bileşenler arasındaki bir **fiziksel özellik farkını** kullanır:

| Yöntem | Kullandığı fark | Örnek |
|---|---|---|
| **Süzme** | Tanecik boyutu, çözünürlük | Kum ve su, tebeşir tozu ve su |
| **Mıknatısla ayırma** | Manyetik özellik | Demir tozu ve kükürt |
| **Ayırma hunisi** (dekantasyon) | Yoğunluk, birbirinde çözünmeme | Zeytinyağı ve su |
| **Buharlaştırma** | Uçuculuk | Tuzlu sudan tuzu almak |
| **Basit damıtma** | Kaynama noktası | Tuzlu sudan saf su almak |
| **Ayrımsal damıtma** | Yakın kaynama noktaları | Su ve etil alkol, ham petrol |
| **Kristallendirme** | Çözünürlüğün sıcaklıkla değişmesi | Bir katıyı safsızlıklarından arıtmak |
| **Kromatografi** | Bir yüzeye tutunma farkı | Mürekkepteki boyaları ayırmak |

**Heterojen karışımlar** genellikle süzme, mıknatıs, ayırma hunisi ya da çöktürme gibi basit yöntemlerle ayrılır, çünkü bileşenler zaten ayrı fazlardadır.

**Homojen karışımlar** (çözeltiler) süzmeyle ayrılamaz: çözünen tanecikler süzgeç kâğıdının gözeneklerinden kolayca geçer. Bunlar için **kaynama noktası farkından** yararlanan damıtma ya da çözücünün buharlaştırılması kullanılır.

**Damıtma** düzeneğinde karışım bir balonda ısıtılır; kaynama noktası düşük olan bileşen önce buharlaşır, **soğutucudan** (kondenser) geçerken yoğunlaşır ve toplama kabına damlar. Tuzlu su damıtılınca kapta saf su toplanır, tuz balonda kalır. Kaynama noktaları birbirine yakın sıvılar (su 100 °C, etil alkol 78 °C) için soğutucudan önce bir **ayrımsal damıtma kolonu** eklenir; kolondaki tekrarlı buharlaşma ve yoğunlaşma ayırmayı keskinleştirir.

> **Sık hata:** Tuzlu suyu süzerek tuzu ayırmaya çalışmak. Tuz çözündüğü için süzgeçten suyla birlikte geçer. Tuzu almak istiyorsan buharlaştır, suyu da almak istiyorsan damıt.
`),
      lab: "ayirma",
      dene: ["km-u1-ayirma-yag-su"],
    },
    {
      baslik: "Kristallendirme",
      metin: md(`
**Neden önemli?** İlaç ve kimya endüstrisinde katı ürünler çoğunlukla kristallendirmeyle arıtılır. Basit ama yöntemin her adımının bir amacı vardır.

**Kristallendirme**, bir katının çözünürlüğünün sıcaklıkla değişmesinden yararlanarak onu safsızlıklarından ayırma yöntemidir. Çoğu katının çözünürlüğü sıcaklık arttıkça artar: sıcak suda çok, soğuk suda az çözünür.

Adımlar şunlardır:

1. **Uygun çözücüde sıcakta çözme.** Katı, sıcakta iyi, soğukta az çözen bir çözücünün en az miktarında kaynatılarak çözülür. Safsızlıklar ya hiç çözünmez ya da soğukta da çözünmüş kalır.
2. **Sıcak süzme.** Çözünmeyen safsızlıklar çözelti henüz sıcakken süzülür. Soğumaya bırakılırsa ürün süzgeç kâğıdında kristallenir ve kaybolur.
3. **Soğutma.** Süzüntü yavaşça soğutulur. Çözünürlük azaldıkça ürün **kristal** hâlinde çöker; yavaş soğutma daha büyük ve daha saf kristaller verir. Çözünen safsızlıklar çözeltide kalır.
4. **Soğuk süzme.** Kristaller soğuk çözeltiden süzülerek alınır. Kristallerin süzüldükten sonra arta kalan sıvıya **ana çözelti** (mother liquor) denir.
5. **Yıkama ve kurutma.** Kristallerin yüzeyindeki ana çözeltiyi gidermek için az miktarda **soğuk** çözücüyle yıkanır, sonra kurutulur.

> **Çözümlü örnek:** Bir katının 100 g sudaki çözünürlüğü 80 °C'ta 40 g, 20 °C'ta 12 g'dır. 80 °C'ta 100 g suda doymuş çözelti hazırlanıp 20 °C'a soğutulursa kaç g katı kristallenir?
>
> 1. 80 °C'ta 100 g suda 40 g katı çözünür.
> 2. 20 °C'ta aynı suda yalnızca 12 g çözünmüş kalabilir.
> 3. Fark çöker: 40 − 12 = 28 g.

> **Sık hata:** Kristalleri sıcak çözücüyle yıkamak. Sıcak çözücü kristallerin bir kısmını yeniden çözer ve verim düşer.
`),
      dene: ["km-u1-kristal-sicak-suzme"],
    },
  ],
  test: ["km-vd-04", "km-vd-06", "km-vd-07", "km-vd-10", "km-u1-bilesik-ayrisma", "km-u1-kimyasal-ipucu", "km-u1-damitma-tuzlu", "km-u1-kristal-verim"],
};
