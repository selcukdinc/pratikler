import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_3: Ders = {
  hafta: 3,
  donem: "vize",
  baslik: "Atom modelleri ve atomun yapısı",
  ozet: "Dalton, Thomson, Rutherford ve Bohr modelleri; proton, nötron, elektron; izotoplar.",
  bolumler: [
    {
      baslik: "Dalton atom modeli",
      metin: md(`
**Neden önemli?** Atom modelleri, deneylerin eski modeli nasıl düzelttiğinin bir öyküsüdür. Sınavlarda her modelin neyi doğru söylediği ve hangi görüşünün sonradan çürütüldüğü sorulur.

John Dalton, 1803'te kütlenin korunumu ve sabit oranlar kanunlarını açıklamak için ilk bilimsel atom kuramını öne sürdü. Kuramın varsayımları şunlardır:

1. Her element **atom** denen çok küçük, **bölünemez** taneciklerden oluşur.
2. Bir elementin bütün atomları kütle ve diğer özellikleri bakımından **özdeştir**.
3. Farklı elementlerin atomları birbirinden farklıdır; kütleleri de farklıdır.
4. Bileşikler, farklı elementlerin atomlarının **küçük tam sayılı oranlarla** birleşmesiyle oluşur.
5. Kimyasal tepkimede atomlar yok olmaz ve yeni atom oluşmaz; yalnızca atomların birleşme düzeni değişir.

Dalton atomu içi dolu, bölünmez bir küre gibi düşündü. Bu yüzden modele bazen "bilardo topu modeli" denir.

**Sonradan çürütülen görüşler.**

- **Atom bölünemez değildir.** Elektronun (1897), çekirdeğin (1911) ve nötronun (1932) keşfi atomun daha küçük taneciklerden oluştuğunu gösterdi. Çekirdek tepkimelerinde atomlar parçalanabilir de.
- **Bir elementin bütün atomları özdeş değildir.** İzotopların keşfi, aynı elementin atomlarının farklı kütlede olabileceğini gösterdi: hidrojenin ¹H, ²H ve ³H izotopları vardır.

Farklı elementlerin atomlarının farklı olduğu, tepkimelerde atomların korunduğu ve bileşiklerde tam sayılı oranların bulunduğu görüşleri ise bugün de geçerlidir.

> **Sık hata:** "Dalton modelinin tamamen yanlış olduğunu" düşünmek. Model ayrıntıda düzeltildi ama kimya kanunlarını açıklayan temel fikirleri hâlâ doğrudur.
`),
      dene: ["km-u3-dalton-gecerli"],
    },
    {
      baslik: "Thomson ve Rutherford modelleri",
      metin: md(`
**Neden önemli?** Rutherford'un altın levha deneyi, atomun büyük kısmının boşluk olduğunu ve kütlesinin küçük bir çekirdekte toplandığını gösterdi. Bugünkü atom resminin temeli bu deneydir.

**Thomson modeli (1904).** J. J. Thomson katot ışınlarıyla elektronu keşfetti (1897) ve elektronun yük/kütle oranını ölçtü. Atom yüksüz olduğuna göre negatif elektronları dengeleyen bir pozitif yük de olmalıydı. Thomson'a göre atom, **pozitif yüklü bir küre** içine elektronların gömüldüğü bir yapıdır; artı ve eksi yükler atomun her yerine düzgün dağılmıştır. Bu modele **üzümlü kek modeli** denir.

**Rutherford'un deneyi (1911).** Rutherford ve öğrencileri, çok ince bir altın levhayı pozitif yüklü **alfa tanecikleriyle** bombaladılar ve levhanın arkasındaki ekranda taneciklerin nereye çarptığını gözlediler:

- Taneciklerin **çok büyük kısmı** levhadan sapmadan geçti.
- Küçük bir kısmı **sapmaya** uğradı.
- Çok azı (yaklaşık 20 000'de 1) **geri döndü**.

Thomson modeline göre yük her yere yayıldığı için hiçbir taneciğin geri dönmemesi gerekirdi. Rutherford bu sonuçlardan şu modeli çıkardı:

- Atomun hacminin **büyük kısmı boşluktur**.
- Pozitif yük ve kütlenin neredeyse tamamı atomun merkezindeki çok küçük bir **çekirdekte** toplanmıştır. Çekirdeğin çapı atomun çapının yaklaşık on binde biri kadardır.
- Elektronlar çekirdeğin çevresinde, boşlukta dolaşır.

Böylece "artı ve eksi yüklerin üzümlü kek gibi eşit dağıldığı" görüşü çürütüldü.

**Rutherford modelinin eksiği.** Klasik fiziğe göre çekirdek çevresinde dönen bir elektron sürekli enerji yayıp çekirdeğe düşmeliydi; model atomun neden kararlı olduğunu açıklayamadı. Ayrıca elementlerin neden belirli renkte ışık yaydığını da açıklamadı. Bu sorunları Bohr çözdü.

> **Sık hata:** Nötronu Rutherford'a bağlamak. Rutherford protonun varlığını gösterdi; nötronu 1932'de James Chadwick keşfetti.
`),
      dene: ["km-u3-rutherford-bosluk"],
    },
    {
      baslik: "Atomun tanecikleri ve izotoplar",
      metin: md(`
**Neden önemli?** Bir atomun ya da iyonun kaç proton, nötron ve elektronu olduğunu bulmak, sonraki bütün ünitelerde (elektron dizilimi, bağlar, tepkimeler) kullanılan temel bir beceridir.

Atom üç temel tanecikten oluşur:

| Tanecik | Yük | Kütle (akb) | Yeri |
|---|---|---|---|
| Proton (p⁺) | +1 | ≈ 1,007 | Çekirdek |
| Nötron (n⁰) | 0 | ≈ 1,009 | Çekirdek |
| Elektron (e⁻) | −1 | ≈ 0,00055 | Çekirdeğin çevresi |

Elektronun kütlesi protonunkinin yaklaşık 1836'da biridir; bu yüzden atomun kütlesini neredeyse tamamen çekirdek belirler.

- **Atom numarası** (Z): Çekirdekteki proton sayısıdır ve elementin kimliğini belirler. Bütün karbon atomlarında Z = 6'dır.
- **Kütle numarası** (A): Proton ve nötron sayılarının toplamıdır: A = Z + N.
- Nötr bir atomda elektron sayısı proton sayısına eşittir. İyonlarda elektron sayısı yük kadar farklıdır: **katyon** (pozitif iyon) elektron vermiştir, **anyon** (negatif iyon) elektron almıştır.

Bir atom $^{A}_{Z}\\text{X}$ biçiminde gösterilir. Örneğin $^{23}_{11}\\text{Na}$ atomunda 11 proton, 23 − 11 = 12 nötron ve 11 elektron vardır; Na⁺ iyonunda ise 10 elektron kalır.

**İzotoplar.** Proton sayısı aynı, nötron sayısı (dolayısıyla kütle numarası) farklı atomlara **izotop** denir. İzotopların kimyasal özellikleri aynıdır, çünkü kimyasal davranışı elektronlar belirler; kütleye bağlı fiziksel özellikleri ise farklıdır. Karbonun ¹²C, ¹³C ve ¹⁴C izotopları vardır.

**Ortalama atom kütlesi.** Periyodik tablodaki atom kütlesi, elementin doğadaki izotoplarının **bolluk yüzdeleriyle ağırlıklı ortalamasıdır**:

$$\\bar{M} = \\sum_i (\\text{kesirsel bolluk})_i \\times (\\text{izotop kütlesi})_i$$

> **Çözümlü örnek:** Bakırın iki izotopu vardır: ⁶³Cu (62,93 akb, %69,15) ve ⁶⁵Cu (64,93 akb, %30,85). Ortalama atom kütlesi nedir?
>
> 1. 0,6915 × 62,93 = 43,52
> 2. 0,3085 × 64,93 = 20,03
> 3. Toplam ≈ 63,55 akb. Periyodik tablodaki değer budur.
`),
      dene: ["km-u3-tanecik-notron"],
    },
    {
      baslik: "Bohr atom modeli",
      metin: md(`
**Neden önemli?** Bohr modeli enerjinin **kuantlı** olduğu fikrini atoma taşıdı. Hidrojenin çizgi spektrumunu açıkladı ve kuantum mekaniğine giden yolu açtı.

Elementler ısıtıldığında ya da elektrikle uyarıldığında yalnızca belirli dalga boylarında ışık yayar. Bu ışık bir prizmadan geçirilince sürekli bir gökkuşağı yerine birkaç renkli çizgi görülür: buna **çizgi spektrumu** denir. Her elementin çizgi spektrumu kendine özgüdür.

Niels Bohr 1913'te hidrojen atomu için şu varsayımları önerdi:

1. Elektron çekirdek çevresinde belirli yarıçaplı **dairesel yörüngelerde** dolanır.
2. Her yörüngenin belirli bir enerjisi vardır; elektron bu yörüngelerdeyken enerji yaymaz. Yörüngeler **n = 1, 2, 3, …** diye numaralanır ve n büyüdükçe enerji artar.
3. Elektron yalnızca bir yörüngeden ötekine **atlayarak** enerji alır ya da verir. Yüksek enerjili yörüngeden düşük enerjili yörüngeye inerken aradaki enerji farkı kadar enerjiyi bir **foton** olarak yayar.

Hidrojen atomunda n. yörüngenin enerjisi şöyledir:

$$E_n = -\\frac{2{,}18 \\times 10^{-18}\\ \\text{J}}{n^2}$$

En düşük enerjili durum n = 1'dir ve **temel hâl** adını alır; daha yüksek yörüngeler **uyarılmış hâllerdir**. Elektron n_üst'ten n_alt'a indiğinde yayılan fotonun enerjisi:

$$\\Delta E = 2{,}18 \\times 10^{-18}\\ \\text{J} \\left( \\frac{1}{n_{\\text{alt}}^2} - \\frac{1}{n_{\\text{üst}}^2} \\right)$$

Görünür bölgedeki hidrojen çizgileri (Balmer serisi) n_alt = 2'ye inişlerden gelir.

> **Çözümlü örnek:** Hidrojende elektron n = 4'ten n = 2'ye iniyor. Yayılan fotonun enerjisi nedir?
>
> 1. 1/2² − 1/4² = 0,25 − 0,0625 = 0,1875
> 2. ΔE = 2,18 × 10⁻¹⁸ J × 0,1875 ≈ 4,09 × 10⁻¹⁹ J. Bu, mavi-yeşil renkli 486 nm'lik çizgidir.

**Bohr modelinin sınırları.** Model yalnızca tek elektronlu taneciklerde (H, He⁺, Li²⁺) doğru sonuç verir. Elektronun belirli bir **dairesel yörüngede** dolandığı fikri, kuantum mekaniğiyle çürütüldü: elektronun yeri ve hızı aynı anda kesin bilinemez, bu yüzden yörünge yerine elektronun bulunma olasılığının yüksek olduğu **orbitallerden** söz edilir. Enerji düzeylerinin kuantlı olması ve geçişlerde foton yayılması ise geçerliliğini korur.
`),
      dene: ["km-u3-bohr-temel-hal"],
    },
  ],
  test: ["km-v24-01", "km-v24-02", "km-v24-07", "km-u3-tanecik-iyon", "km-u3-izotop-ortalama", "km-u3-bohr-dalga-boyu"],
};
