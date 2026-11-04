import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_2: Ders = {
  hafta: 2,
  donem: "vize",
  baslik: "Ölçme, birimler ve kimya kanunları",
  ozet: "SI birimleri, sıcaklık ölçekleri, anlamlı rakamlar; kütlenin korunumu, sabit ve katlı oranlar.",
  bolumler: [
    {
      baslik: "SI birimleri ve anlamlı rakamlar",
      metin: md(`
**Neden önemli?** Kimya nicel bir bilimdir: "biraz tuz" değil "2,50 g tuz" deriz. Bir sonucun birimi yanlışsa ya da ölçümün güvenilirliğinden fazla basamak yazılmışsa hesap ne kadar doğru yapılmış olursa olsun sonuç yanıltıcı olur.

**SI temel birimleri.** Uluslararası Birim Sistemi (SI) yedi temel birim tanımlar. Kimyada en çok kullanılanlar şunlardır:

| Nicelik | Birim | Simge |
|---|---|---|
| Kütle | kilogram | kg |
| Uzunluk | metre | m |
| Zaman | saniye | s |
| Sıcaklık | kelvin | K |
| Madde miktarı | mol | mol |
| Elektrik akımı | amper | A |

Hacim gibi birimler temel birimlerden türetilir: 1 m³ = 1000 L, 1 L = 1 dm³ = 1000 mL ve **1 mL = 1 cm³**.

**Ön ekler.** Çok büyük ya da çok küçük değerler ön eklerle yazılır:

| Ön ek | Simge | Çarpan |
|---|---|---|
| kilo | k | $10^{3}$ |
| santi | c | $10^{-2}$ |
| mili | m | $10^{-3}$ |
| mikro | µ | $10^{-6}$ |
| nano | n | $10^{-9}$ |
| piko | p | $10^{-12}$ |

**Birim dönüştürme.** Bir birimi ötekine çevirmek için değeri, payı ile paydası birbirine eşit olan bir **dönüşüm çarpanıyla** çarparız; istenmeyen birim sadeleşir.

> **Çözümlü örnek:** 0,25 kg kaç mg'dır?
>
> 1. 0,25 kg × (1000 g / 1 kg) = 250 g
> 2. 250 g × (1000 mg / 1 g) = 250 000 mg = $2{,}5 \\times 10^{5}$ mg

**Anlamlı rakamlar.** Bir ölçümde kesin bilinen basamaklar ile tahmin edilen son basamağın toplamına anlamlı rakam denir. Sayma kuralları:

- Sıfır olmayan her rakam anlamlıdır: 4,52 üç anlamlı rakamdır.
- İki anlamlı rakam arasındaki sıfırlar anlamlıdır: 1,07 üç anlamlı rakamdır.
- Baştaki sıfırlar anlamlı değildir, yalnızca virgülün yerini gösterir: 0,0052 iki anlamlı rakamdır.
- Ondalık virgülden sonra sondaki sıfırlar anlamlıdır: 2,50 üç anlamlı rakamdır.

Çarpma ve bölmede sonuç, **en az anlamlı rakamı olan** değer kadar anlamlı rakamla yazılır. Toplama ve çıkarmada ise sonuç, **en az ondalık basamağı olan** değer kadar ondalık basamakla yazılır.

> **Sık hata:** Hesap makinesinin gösterdiği bütün basamakları yazmak. 2,5 cm × 3,42 cm = 8,55 cm² çıkar ama 2,5 iki anlamlı rakam taşıdığı için sonuç 8,6 cm² yazılır.
`),
      dene: ["km-u2-birim-ml"],
    },
    {
      baslik: "Sıcaklık ölçekleri",
      metin: md(`
**Neden önemli?** Gaz kanunlarında, termokimyada ve kinetikte sıcaklık hep **kelvin** cinsinden kullanılır. Celsius ile Fahrenheit arasındaki dönüşüm de sınavlarda sık sorulur.

Üç sıcaklık ölçeği vardır:

- **Celsius** (°C): Suyun 1 atm'de donma noktası 0 °C, kaynama noktası 100 °C alınır; arası 100 eşit parçaya bölünür.
- **Fahrenheit** (°F): Aynı noktalar 32 °F ve 212 °F'tır; arası 180 parçaya bölünür. Bu yüzden 1 °C'lık değişim 1,8 °F'lık değişime karşılık gelir.
- **Kelvin** (K): Mutlak sıcaklık ölçeğidir. Sıfır noktası, kuramsal olarak ulaşılabilecek en düşük sıcaklık olan **mutlak sıfırdır** (−273,15 °C). Birim aralığı Celsius ile aynıdır; kelvin değerinin önüne derece işareti konmaz ve hiçbir zaman negatif olmaz.

Dönüşüm bağıntıları:

$$T(\\text{K}) = t(°\\text{C}) + 273{,}15$$

$$t(°\\text{F}) = 1{,}8 \\cdot t(°\\text{C}) + 32 \\qquad t(°\\text{C}) = \\frac{t(°\\text{F}) - 32}{1{,}8}$$

> **Çözümlü örnek:** 68 °F kaç °C ve kaç K'dir?
>
> 1. t(°C) = (68 − 32) / 1,8 = 36 / 1,8 = 20 °C
> 2. T = 20 + 273,15 = 293,15 K

İki ölçeğin aynı değeri gösterdiği tek sıcaklık −40 derecedir: −40 °C = −40 °F. Bunu t = 1,8t + 32 denklemini çözerek bulabilirsin.

> **Sık hata:** Fahrenheit'tan Celsius'a geçerken önce 1,8'e bölüp sonra 32 çıkarmak. Önce 32 çıkarılır, sonra 1,8'e bölünür; Celsius'tan Fahrenheit'a giderken sıra tersine döner.
`),
      lab: "sicaklik",
      dene: ["km-u2-sicaklik-k"],
    },
    {
      baslik: "Yoğunluk",
      metin: md(`
**Neden önemli?** Yoğunluk, bir maddeyi tanımaya yarayan fiziksel bir özelliktir ve kütle ile hacim arasında köprü kurar. Sıvıları ölçerken hacimden kütleye, katıları tartarken kütleden hacme geçmek için kullanılır.

**Yoğunluk** (d), birim hacmin kütlesidir:

$$d = \\frac{m}{V}$$

Katı ve sıvılar için birim çoğunlukla g/cm³ ya da g/mL, gazlar için g/L'dir. Suyun yoğunluğu 4 °C'ta yaklaşık 1,00 g/mL'dir. Birkaç örnek: alüminyum 2,70 g/cm³, demir 7,87 g/cm³, cıva 13,6 g/mL, etil alkol 0,79 g/mL.

Yoğunluk sıcaklıkla değişir: çoğu madde ısıtılınca genleşir, hacmi artar ve yoğunluğu azalır. Su bir istisnadır; buz sudan daha az yoğundur (yaklaşık 0,92 g/cm³), bu yüzden buz suda yüzer.

Birbirinde çözünmeyen iki sıvıdan **yoğunluğu az olan üstte** kalır. Zeytinyağının suyun üstünde durması ve ayırma hunisiyle ayrılabilmesi bu yüzdendir.

> **Çözümlü örnek:** Kütlesi 39,35 g olan bir metal parçası, içinde 20,0 mL su bulunan bir mezüre atılınca su seviyesi 25,0 mL'ye çıkıyor. Metalin yoğunluğu nedir, hangi metal olabilir?
>
> 1. Metalin hacmi taşırdığı su kadardır: 25,0 − 20,0 = 5,0 mL = 5,0 cm³.
> 2. d = 39,35 g / 5,0 cm³ ≈ 7,87 g/cm³.
> 3. Bu değer demirin yoğunluğudur.
`),
      dene: ["km-u2-yogunluk-hesap"],
    },
    {
      baslik: "Kimya kanunları",
      metin: md(`
**Neden önemli?** Bu üç kanun, atomun varlığı kanıtlanmadan önce maddelerin belirli oranlarla tepkimeye girdiğini gösterdi ve Dalton'un atom kuramının dayanağı oldu. Bugün de stokiyometri hesaplarının temelidir.

**Kütlenin korunumu kanunu** (Lavoisier): Kapalı bir sistemde gerçekleşen kimyasal tepkimede, tepkimeye giren maddelerin toplam kütlesi oluşan ürünlerin toplam kütlesine eşittir. Atomlar yok olmaz ya da yoktan var olmaz, yalnızca yeniden düzenlenir.

**Sabit oranlar kanunu** (Proust): Bir bileşiği oluşturan elementlerin kütleleri arasında her zaman **sabit bir oran** vardır; bileşik nereden ve nasıl elde edilirse edilsin bu oran değişmez. Saf suda hidrojenin oksijene kütle oranı her zaman yaklaşık 1 : 8'dir.

**Katlı oranlar kanunu** (Dalton): İki element birden fazla bileşik oluşturuyorsa, elementlerden birinin sabit kütlesiyle birleşen öteki elementin kütleleri arasında **küçük tam sayılı** bir oran vardır. Örneğin azot ile oksijen NO ve NO₂ bileşiklerini oluşturur; aynı miktar azotla birleşen oksijen kütleleri 1 : 2 oranındadır.

> **Çözümlü örnek:** Kükürt ile oksijen SO₂ ve SO₃ bileşiklerini oluşturur. 32 g kükürtle birleşen oksijen kütleleri nedir, oranları kaçtır?
>
> 1. SO₂'de 32 g kükürt 32 g oksijenle birleşir (2 × 16).
> 2. SO₃'te 32 g kükürt 48 g oksijenle birleşir (3 × 16).
> 3. Oran 32 : 48 = 2 : 3, küçük tam sayılı bir orandır.

> **Sık hata:** Katlı oranlar kanununu farklı elementlerin oranı sanmak. Kanun, **aynı iki elementten** oluşan **farklı bileşikleri** karşılaştırır ve bir elementin kütlesini sabit tutar.
`),
      dene: ["km-u2-kanun-proust"],
    },
  ],
  test: ["km-vd-02", "km-u2-anlamli-say", "km-u2-sicaklik-f", "km-u2-yogunluk-kutle", "km-u2-kanun-korunum", "km-u2-kanun-katli"],
};
