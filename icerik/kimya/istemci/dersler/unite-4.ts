import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_4: Ders = {
  hafta: 4,
  donem: "vize",
  baslik: "Kuantum sayıları ve elektron dizilimi",
  ozet: "Işık ve foton, De Broglie, belirsizlik; kuantum sayıları; Aufbau, Pauli ve Hund.",
  bolumler: [
    {
      baslik: "Işık ve foton",
      metin: md(`
**Neden önemli?** Atomların yaydığı ve soğurduğu ışık, elektronların enerji düzeyleri hakkında bilgi verir. Dalga boyu, frekans ve enerji arasındaki bağıntılar bu ünitenin bütün hesaplarında kullanılır.

Işık bir **elektromanyetik dalgadır**. Bir dalgayı iki nicelik tanımlar:

- **Dalga boyu** (λ, lambda): Ardışık iki tepe arasındaki uzaklık. Görünür ışık için yaklaşık 400 nm (mor) ile 700 nm (kırmızı) arasındadır.
- **Frekans** (ν, nü): Bir noktadan bir saniyede geçen dalga sayısı; birimi s⁻¹ ya da hertz (Hz).

Boşlukta bütün elektromanyetik dalgalar ışık hızıyla, $c = 3{,}00 \\times 10^{8}$ m/s ile ilerler. Dalga boyu ile frekans ters orantılıdır:

$$c = \\lambda \\cdot \\nu$$

**Foton.** Max Planck (1900), ısıtılan cisimlerin yaydığı ışığı açıklamak için enerjinin sürekli değil, **kuant** denen paketler hâlinde yayıldığını öne sürdü. Einstein (1905) bu fikri ışığın kendisine uyguladı: ışık, **foton** denen enerji paketlerinden oluşur. Bir fotonun enerjisi frekansıyla doğru orantılıdır:

$$E = h \\cdot \\nu = \\frac{h \\cdot c}{\\lambda}$$

Burada $h = 6{,}626 \\times 10^{-34}$ J·s **Planck sabitidir**. Dalga boyu kısaldıkça fotonun enerjisi artar: mor ışığın fotonu kırmızı ışığınkinden, morötesi ışınınki de mor ışığınkinden daha enerjiliktir.

> **Çözümlü örnek:** Dalga boyu 700 nm olan kırmızı ışığın bir fotonunun enerjisi nedir?
>
> 1. λ = 700 nm = 7,00 × 10⁻⁷ m
> 2. E = hc/λ = (6,626 × 10⁻³⁴ × 3,00 × 10⁸) / 7,00 × 10⁻⁷ ≈ 2,84 × 10⁻¹⁹ J

> **Sık hata:** Nanometreyi metreye çevirmeyi unutmak. 1 nm = 10⁻⁹ m'dir; dönüşüm yapılmazsa sonuç 10⁹ kat yanlış çıkar.
`),
      dene: ["km-u4-foton-enerji-karsilastir"],
    },
    {
      baslik: "De Broglie ve belirsizlik ilkesi",
      metin: md(`
**Neden önemli?** Işığın tanecik gibi davranabildiği anlaşıldıktan sonra tersi de sorulmaya başlandı: tanecikler dalga gibi davranabilir mi? Bu sorunun cevabı, elektronu yörüngede dönen bir top olarak değil, bir dalga olarak düşünmemizi sağladı.

**De Broglie bağıntısı (1924).** Louis de Broglie, kütlesi m olan ve v hızıyla hareket eden **her cismin** bir dalga boyu olduğunu öne sürdü:

$$\\lambda = \\frac{h}{m \\cdot v}$$

Yani **hızı ve kütlesi olan bir cismin dalga boyu vardır**. Bu dalga boyu kütleyle ters orantılıdır. Bir futbol topunun dalga boyu ölçülemeyecek kadar küçüktür; elektron gibi çok hafif bir taneciğin dalga boyu ise atom boyutlarındadır ve gözlenebilir. Elektronların kristallerden kırınıma uğradığının gösterilmesi (1927) bağıntıyı doğruladı; elektron mikroskobu bu dalga davranışından yararlanır.

Bağıntıda kütle kilogram, hız m/s cinsinden yazılır; o zaman dalga boyu metre çıkar (1 J = 1 kg·m²/s²).

> **Çözümlü örnek:** 2,0 × 10⁶ m/s hızla hareket eden bir elektronun (m = 9,11 × 10⁻³¹ kg) dalga boyu nedir?
>
> 1. m·v = 9,11 × 10⁻³¹ × 2,0 × 10⁶ = 1,82 × 10⁻²⁴ kg·m/s
> 2. λ = 6,626 × 10⁻³⁴ / 1,82 × 10⁻²⁴ ≈ 3,6 × 10⁻¹⁰ m = 0,36 nm

**Heisenberg belirsizlik ilkesi (1927).** Bir taneciğin **konumu ve momentumu (dolayısıyla hızı) aynı anda kesin olarak belirlenemez**. Birini ne kadar hassas ölçersek ötekindeki belirsizlik o kadar büyür:

$$\\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi}$$

Bu ilke, Bohr'un elektronun belirli bir yörüngede belirli bir hızla döndüğü fikriyle bağdaşmaz. Bu yüzden kuantum mekaniğinde elektronun yeri değil, bir bölgede bulunma **olasılığı** hesaplanır. Elektronun bulunma olasılığının yüksek olduğu bölgeye **orbital** denir.

> **Sık hata:** De Broglie bağıntısını Einstein'ın $E = mc^2$ bağıntısıyla ya da foton enerjisiyle karıştırmak. De Broglie bağıntısı dalga boyunu **kütle ve hızla** ilişkilendirir: λ = h/(mv).
`),
      dene: ["km-u4-debroglie-kutle"],
    },
    {
      baslik: "Kuantum sayıları",
      metin: md(`
**Neden önemli?** Bir atomdaki her elektron dört kuantum sayısıyla tanımlanır. Bu sayılar orbitallerin enerjisini, şeklini ve yönelimini; dolayısıyla elektron dizilimini belirler.

Schrödinger denkleminin hidrojen atomu için çözümü, orbitalleri üç kuantum sayısıyla tanımlar. Dördüncüsü elektronun kendisine aittir:

| Kuantum sayısı | Simge | Alabileceği değerler | Belirlediği |
|---|---|---|---|
| Baş kuantum sayısı | n | 1, 2, 3, … | Katman (enerji düzeyi) ve orbitalin büyüklüğü |
| Açısal (yan) kuantum sayısı | ℓ | 0, 1, …, n − 1 | Alt kabuk ve orbitalin şekli |
| Manyetik kuantum sayısı | mℓ | −ℓ, …, 0, …, +ℓ | Orbitalin uzaydaki yönelimi |
| Spin kuantum sayısı | ms | +½ ya da −½ | Elektronun dönme yönü |

Açısal kuantum sayısının değerleri harflerle gösterilir: **ℓ = 0 → s, ℓ = 1 → p, ℓ = 2 → d, ℓ = 3 → f**. Bazı kaynaklar açısal kuantum sayısına "orbital kuantum sayısı" da der.

Bir alt kabuktaki orbital sayısı mℓ değerlerinin sayısı kadardır: **2ℓ + 1**. Böylece s alt kabuğunda 1, p'de 3, d'de 5, f'de 7 orbital bulunur. Her orbitale en çok 2 elektron girer. Buradan:

- n. katmandaki toplam orbital sayısı $n^2$,
- n. katmana girebilecek en fazla elektron sayısı $2n^2$ olur.

Bir elektronun dizilimdeki yazımı ilk iki kuantum sayısını verir: **2p⁴** yazımında 2 baş kuantum sayısıdır (n = 2), p alt kabuktur (ℓ = 1), üstteki 4 ise o alt kabuktaki elektron sayısıdır.

> **Çözümlü örnek:** n = 2 katmanında hangi orbitaller vardır?
>
> 1. ℓ = 0 ya da 1 olabilir: 2s ve 2p alt kabukları.
> 2. 2s için mℓ = 0 (1 orbital); 2p için mℓ = −1, 0, +1 (3 orbital).
> 3. Toplam 4 orbital = 2², en fazla 8 elektron = 2 × 2².

> **Sık hata:** ℓ'nin n'ye eşit olabileceğini sanmak. ℓ en fazla n − 1 olur; bu yüzden "1p" ya da "2d" diye bir alt kabuk yoktur.
`),
      dene: ["km-u4-kuantum-l-degeri"],
    },
    {
      baslik: "Elektron dizilimi kuralları",
      metin: md(`
**Neden önemli?** Elektron dizilimi bir elementin periyodik tablodaki yerini, kaç bağ yapacağını ve iyonlarının yükünü belirler. Üç kural bilmek, ilk 36 elementin dizilimini yazmaya yeter.

**Aufbau ilkesi (yapılanma ilkesi).** Elektronlar orbitallere **enerji düzeyi düşük olandan başlayarak** yerleşir. Çok elektronlu atomlarda alt kabukların enerji sırası şöyledir:

$$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p$$

Dikkat: 4s alt kabuğu 3d'den **önce** dolar. Sırayı hatırlamak için n + ℓ toplamı küçük olan önce gelir; toplamlar eşitse n'si küçük olan önce gelir.

**Pauli dışarlama ilkesi.** Bir atomda **iki elektronun dört kuantum sayısı da aynı olamaz**. Aynı orbitaldeki iki elektronun n, ℓ ve mℓ değerleri aynı olduğu için spinleri zıt olmak zorundadır (↑↓). Bu yüzden bir orbitale en çok iki elektron girer.

**Hund kuralı.** Aynı enerjili orbitallere (örneğin üç 2p orbitali) elektronlar **önce her orbitale bir tane olmak üzere aynı spinle** yerleşir; bütün orbitaller yarı dolduktan sonra çiftleşmeye başlar. Elektronlar birbirini ittiği için ayrı orbitallerde daha kararlıdır.

> **Çözümlü örnek:** Azotun (Z = 7) dizilimini ve 2p orbitallerini yaz.
>
> 1. 7 elektron: 1s² 2s² 2p³.
> 2. Hund kuralına göre üç 2p elektronu üç ayrı orbitale aynı spinle girer: ↑ ↑ ↑.
> 3. Azotun 3 eşleşmemiş elektronu vardır.

**Kısaltılmış yazım.** Dizilimin iç kısmı bir önceki soy gazın simgesiyle yazılır: sodyum (Z = 11) 1s² 2s² 2p⁶ 3s¹ yerine **[Ne] 3s¹**.

**İki istisna.** Krom ve bakırda yarı dolu ya da tam dolu d alt kabuğu daha kararlı olduğu için 4s'ten bir elektron 3d'ye geçer:

- Krom (Z = 24): beklenen [Ar] 4s² 3d⁴ yerine **[Ar] 4s¹ 3d⁵**.
- Bakır (Z = 29): beklenen [Ar] 4s² 3d⁹ yerine **[Ar] 4s¹ 3d¹⁰**.

**İyonların dizilimi.** Katyon oluşurken elektronlar önce **en yüksek n değerli** alt kabuktan koparılır. Geçiş metallerinde bu 4s'tir: Fe [Ar] 4s² 3d⁶ iken Fe²⁺ [Ar] 3d⁶ olur.

> **Sık hata:** Geçiş metali iyonlarında önce 3d'den elektron koparmak. 4s, 3d'den önce dolar ama iyonlaşmada ondan önce boşalır.
`),
      lab: "orbital",
      dene: ["km-u4-dizilim-hund-n"],
    },
  ],
  test: ["km-v24-06", "km-v24-08", "km-v24-10", "km-v24-15", "km-v24-16", "km-v24-18", "km-u4-foton-frekans", "km-u4-debroglie-elektron", "km-u4-kuantum-orbital-sayisi", "km-u4-dizilim-fe-tek"],
};
