import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_4: Ders = {
  hafta: 4,
  baslik: "Tıbbi Görüntüleme ve Genomik Veri",
  ozet: "Röntgen, BT, MR, ultrason, nükleer tıp (sintigrafi, SPECT, PET-CT) ve histopatolojik görüntüler; genom, DNA, RNA ve genomik veri analizinin araçları ve zorlukları.",
  bolumler: [
    {
      baslik: "Tıbbi görüntüleme ve başlıca yöntemler",
      metin: md(`
**Neden önemli?** Görüntü işleme algoritmaları (6.–8. ünite) çoğunlukla bu yöntemlerin ürettiği görüntülere uygulanır. Hangi yöntemin neyi gösterdiğini bilmek, görüntüden ne beklenebileceğini söyler.

**Tıbbi görüntüleme**, vücudun iç kısımlarının tanı, muayene ve tedavi amacıyla görsel temsilini oluşturan teknikler bütünüdür. Deri ve kemiklerin gizlediği iç yapıları gösterir; bazı yöntemler yapıyı değil organın **işlevini (fizyolojisini)** gösterir.

- **Röntgen (direkt radyografi)**: X ışınıyla kemik ve yoğun dokuların **2 boyutlu** görüntüsü.
- **Bilgisayarlı tomografi (BT)**: X ışını ve bilgisayarla **kesitsel (3 boyutlu)** görüntü.
- **Manyetik rezonans (MR)**: güçlü mıknatıs ve radyo dalgasıyla **yumuşak doku**, beyin ve eklemler.
- **Ultrasonografi (USG)**: ses dalgalarıyla iç organlar ve gebelik; radyasyon yoktur.
- **Nükleer tıp (PET, sintigrafi)**: radyofarmasötiklerle organ ve hücrelerin **işlevsel** durumu.
- **Histopatolojik görüntüler**: mikroskopta incelenen doku ve hücre örneklerinin **dijital 2 boyutlu** fotoğrafları.

[[G-H4-01]]

> **Sık hata:** Bütün görüntüleme yöntemlerinin radyasyon içerdiğini sanmak. MR ve ultrason iyonlaştırıcı radyasyon kullanmaz.
`),
      dene: ["bm-u4-islevsel"],
    },
    {
      baslik: "Röntgen",
      metin: md(`
**Neden önemli?** Röntgen en eski ve en yaygın görüntüleme yöntemidir; bir röntgen görüntüsündeki gri tonların ne anlama geldiğini bilmek görüntü işlemenin başlangıç noktasıdır.

Röntgen, vücudun iç kısmının görüntüsünü **X ışını** (ya da gama ışını gibi elektromanyetik radyasyon) kullanarak üretir. Işınlar vücuttan geçip karşıdaki dedektöre ulaşır; geçerken dokular onları farklı miktarda soğurur:

- **Kemik gibi yoğun yapılar** radyasyonu kolayca soğurur, görüntüde **parlak beyaz** görünür.
- **Yumuşak dokular** (organlar) daha az soğurur, **gri ve koyu** tonlarda görünür.

Radyasyon görünmez ve hissedilmez. Görüntüyü radyolog yorumlar ve hekime rapor yazar.

En yaygın kullanımı **kemik kırıklarını** kontrol etmektir. Ayrıca zatürre, astım, akciğer enfeksiyonu, yaralanmalar, diş yapısı ve tümör şüphesinde çekilir.

**Röntgen türleri:**

- **Göğüs**: zatürre, astım, akciğer enfeksiyonu; nefes darlığı, öksürük, göğüs ağrısı.
- **Karın**: sindirim sistemi, **böbrek ve mesane taşı**.
- **Kemik**: kırık, artrit, kemik kanseri ya da enfeksiyonu.
- **Diş**, **baş** (kafatası kırığı), **omurga** (bel-boyun fıtığı, omurga eğriliği).

Daha ayrıntılı görüntü için X ışınını bilgisayarla birleştiren yöntemler de vardır: kemik yoğunluğu (DXA) taraması, BT, floroskopi ve mamografi.

> **Sık hata:** Kemiğin beyaz görünmesini "ışını yansıttığı" için sanmak. Kemik ışını soğurur; dedektöre az ışın ulaştığı için o bölge beyaz kalır.
`),
      dene: ["bm-u4-kemik-beyaz"],
    },
    {
      baslik: "Bilgisayarlı tomografi (BT)",
      metin: md(`
**Neden önemli?** BT, röntgenin tek bir 2B görüntüsü yerine çok sayıda açıdan alınan görüntüyü bilgisayarda birleştirir. Bu, görüntüden kesit oluşturmanın (rekonstrüksiyonun) ilk büyük uygulamasıdır.

**Bilgisayarlı tomografi** (BT, İngilizcede CT), X ışını ve bilgisayar teknolojisiyle vücudun iç yapısını gösterir. Adı Yunanca **tomos** (kesit, dilim) ve **graphein** (yazmak) sözcüklerinden gelir.

**Nasıl çalışır?** Hasta bir masaya yatar; dairesel cihazın açıklığının etrafında **motorlu bir X ışını kaynağı döner**. Farklı açılardan alınan görüntüler organ, kemik ve dokuları **ince kesitler** olarak gösterir; bilgisayar bu kesitleri birleştirerek **3 boyutlu** görüntü oluşturur. Radyolog hem 3B görüntüyü hem de her kesiti ayrı inceleyebilir.

[[G-H4-02]]

**Özellikleri:**

- İşlem **saniyeler ile birkaç dakika** sürer; acil durumlar için çok uygundur.
- Daha ayrıntılı görüntü aldığı için **radyasyon miktarı röntgenden fazladır**. Tipik bir BT'den ölümcül kanser gelişme riskinin yaklaşık 2000'de 1 olduğu düşünülür.
- Kırıklar, iç kanama ve travma, kanser tespiti ve evrelemesi, akciğer ve beyin hastalıkları, damar tıkanıklıklarında kullanılır.

**İlaçlı (kontrastlı) BT**: yumuşak dokuyu daha net görmek için ağızdan, damardan ya da rektumdan kontrast madde verilir. BT'de kullanılan kontrast maddeler genellikle **iyot ya da baryum** içerir; sıcaklık hissi ya da ağızda metalik tat yapabilir.

> **Sık hata:** BT'yi radyasyonsuz sanmak. BT X ışını kullanır ve tek bir röntgenden daha fazla doz verir.
`),
      dene: ["bm-u4-bt-calisma"],
    },
    {
      baslik: "Manyetik rezonans (MR) ve BT ile karşılaştırma",
      metin: md(`
**Neden önemli?** MR yumuşak dokuyu en iyi gösteren yöntemdir ve radyasyon içermez; ama her hastaya uygulanamaz. BT ile MR arasında seçim sık sorulan bir konudur.

**MR**, güçlü mıknatıslar, radyo dalgaları ve bilgisayarla vücudun ayrıntılı görüntüsünü oluşturan, **radyasyonsuz** bir tanı yöntemidir.

**Nasıl çalışır?** Cihaz, vücuttaki **su moleküllerindeki protonları** güçlü bir manyetik alana sokar. Bu sırada yayılan radyo dalgaları sinyale çevrilir; bilgisayar bu sinyallerden yumuşak dokuların yüksek çözünürlüklü **kesit görüntülerini** oluşturur. Röntgen ve BT'den farklı olarak **iyonlaştırıcı radyasyon içermez**.

**Kullanım alanları**: beyin ve sinir sistemi (inme, MS, tümör), omurga ve eklemler (fıtık, menisküs ve bağ yırtığı), iç organlar, damarlar (MR anjiyografi).

**Uygulamada:**

- Süre **15–60 dakika**.
- Takı, saat, kemer gibi bütün metal eşyalar çıkarılır.
- **Kalp pili** ya da bazı metal protezleri olanlara doktor onayı olmadan uygulanmaz.
- **İlaçlı MR**'da damardan **gadolinyum** bazlı kontrast madde verilir.

| | BT | MR |
|---|---|---|
| Kullandığı | X ışını | manyetik alan + radyo dalgası |
| Radyasyon | var | yok |
| Süre | saniyeler–birkaç dakika | 15–45 (bazen 60) dakika |
| Cihaz | geniş, açık tünel | kapalı, dar, gürültülü |
| Üstün olduğu | kırık, travma, acil kanama, akciğer | beyin, omurilik, kas, bağ, sinir, küçük yumuşak doku lezyonları |
| Metal implant | güvenle kullanılır | uygun olmayan implant ve kalp pilinde uygulanmaz |
| Maliyet | daha ucuz | daha pahalı |
| Kontrast | iyot bazlı | gadolinyum bazlı |

> **Sık hata:** MR'ın X ışınının daha güçlüsü olduğunu düşünmek. MR'da hiç X ışını yoktur; sinyal protonlardan gelen radyo dalgalarıdır.
`),
      dene: ["bm-u4-mr-proton"],
    },
    {
      baslik: "Ultrasonografi (USG)",
      metin: md(`
**Neden önemli?** Ultrason ucuz, hızlı ve zararsızdır; bu yüzden gebelikte ve bebeklerde ilk seçilen yöntemdir. Görüntüsü yansıyan ses dalgalarından oluşur.

**Ultrasonografi**, insan kulağının duyamayacağı kadar **yüksek frekanslı ses dalgalarının** vücut dokularından **yansımasıyla** organları ekrana yansıtır. Güvenli, ağrısızdır ve **radyasyon içermez**.

- Bilinen bir yan etkisi olmadığı için **gebelikte en çok tercih edilen** yöntemdir; gebelerde ve bebeklerde tamamen güvenlidir.
- İncelenecek bölgeye **jel** sürülür; jel ses dalgalarının düzgün iletilmesini sağlar.
- Sonuç anında alınır. Çoğu inceleme **15–30 dakika** sürer.
- Karın ultrasonu için genellikle **6–8 saat açlık** istenir; bazı pelvik incelemelerde mesanenin dolu olması gerekir.

**Kullanım alanları**: iç organların yapısı ve işlevi, enfeksiyon, tümör ve kist tespiti, gebelik takibi, kalp hastalıkları ve damar tıkanıklıkları, **biyopside iğnenin doğru yere yönlendirilmesi**, tedavinin ve hastalığın izlenmesi.

> **Sık hata:** Jelin hastayı rahatlatmak için sürüldüğünü düşünmek. Jel, prob ile deri arasındaki havayı çıkarır; hava ses dalgasını iletmez.
`),
      dene: ["bm-u4-usg-gebelik"],
    },
    {
      baslik: "Nükleer tıp, sintigrafi ve PET-CT",
      metin: md(`
**Neden önemli?** Nükleer tıp organın neye benzediğini değil, **ne kadar çalıştığını** gösterir. Bir tümör anatomide görünmeden önce metabolizmasıyla fark edilebilir.

**Nükleer tıp**, vücuda verilen radyonüklidlerin doku ve organlardaki dağılımını görüntüleyerek hastalığı saptayan ve tedavi planlayan bilim dalıdır. Organların **yapısını değil, işlevini ve metabolizmasını** inceler.

- **Radyofarmasötik**: ağızdan ya da damardan verilen, içinde radyonüklid bulunan, tanı ve tedavide kullanılan ve **hastada fizyolojik bir değişime yol açmayan** radyoaktif ilaç.
- **Sintigrafi**: radyoaktif madde verilerek yapılan nükleer tıp görüntülemesinin genel adı; ortalama **30–40 dakika** sürer.
- **Planar yöntem**: dışarıdaki bir kamerayla alınan **2 boyutlu** görüntü.
- **SPECT** (tek foton emisyon BT): organın etrafında **180° ya da 360°** dönülerek görüntü alınır, organ **3 boyutlu** incelenir.
- **PET** (pozitron emisyon tomografisi): yayılan **pozitronların elektronlarla karşılaşmasıyla** oluşan **gama ışınları** algılanır; 3 boyutlu görüntü elde edilir.

Tarihçe: izleme ilkesi 1920'lerde **Hevesy**, yapay radyoaktivite 1934'te keşfedildi; 1940'larda radyoaktif iyotun guatr tedavisinde kullanılması nükleer tıbbın gerçek başlangıcı sayılır.

**PET-CT**, PET'in **metabolik (işlevsel)** bilgisini CT'nin **anatomik** bilgisiyle birleştirir.

- En yaygın radyofarmasötik, glukozun radyoaktif bir türevi olan **FDG**'dir (fluorodeoksiglukoz).
- Metabolizması hızlı **kanser hücreleri** FDG'yi sağlıklı hücrelerden çok daha fazla tutar ve PET'te **parlak noktalar** olarak görünür.
- Enjeksiyondan sonra FDG'nin dağılması için **60–90 dakika** beklenir; bu sırada hasta sessiz ve hareketsiz kalır, kas etkinliğinden kaçınır.
- Tarama **20–45 dakika** sürer; en küçük hareket görüntüyü bulanıklaştırır.

[[G-H4-03]]

> **Sık hata:** PET'in tek başına tümörün yerini kesin gösterdiğini sanmak. PET etkinliğin varlığını gösterir; vücutta tam nerede olduğunu CT ile birleştirilmiş görüntü söyler.
`),
      dene: ["bm-u4-fdg"],
    },
    {
      baslik: "Genomik ve moleküler veri",
      metin: md(`
**Neden önemli?** Genomik veri, biyomedikal verinin en büyük ve en hızlı büyüyen türüdür. Onu işlemek tamamen bir bilgisayar bilimi problemidir: depolama, dizi karşılaştırma, örüntü bulma.

Temel terimler:

- **DNA** (deoksiribonükleik asit): canlılarda kalıtsal bilgiyi taşıyan, nükleotitlerden oluşan **molekül**.
- **RNA** (ribonükleik asit): genetik bilginin işlenmesinde ve **protein sentezinde** görevli nükleik asit.
- **Nükleotit**: DNA ve RNA'nın en küçük yapı taşı.
- **Genom**: bir hücredeki DNA'nın, yani bir organizmanın genetik materyalinin **tamamı**. DNA bir molekülün adıdır; genom o canlının bütün DNA diziliminin tamamıdır.

Genomu bir kitap gibi düşünebiliriz: alfabesi dört harftir, dört nükleotit bazı: **adenin (A), timin (T), sitozin (C), guanin (G)**. Neredeyse her hücrede bu kitabın bir kopyası vardır. İnsanlar genomlarının yalnızca yaklaşık **%1–2**'lik kısmındaki harf farklarıyla birbirinden ayrılır; bu küçük farklar bizi hem eşsiz kılar hem de farklı hastalıklara yatkın yapar. Tek bir insan genomu **milyarlarca baz çifti** ve gigabaytlarca ham veri demektir.

**Genomik veri** toplam DNA dizilimini, epigenetik değişiklikleri ve RNA transkriptlerini kapsar; **moleküler veri** DNA, RNA ve proteinlerin birbiriyle ilişkisini gösterir.

**Neden toplanır?** Hastalıkları anlamak ve teşhis etmek, ilaç hedefi bulmak ve **kişiselleştirilmiş tedavi**, adli tıpta şüpheli belirlemek, evrimi ve göç tarihini incelemek.

**Kullanılan teknolojiler:**

- **Biyoinformatik**: biyolojiyi bilgisayar bilimi, matematik ve istatistikle birleştirir.
- **Makine öğrenimi**: genetik varyasyon ve motifleri bulur, gen işlevini tahmin eder.
- **İstatistik yazılımları** (R, SAS).
- **Dizileme**: **yeni nesil dizileme (NGS)** ya da Sanger dizilemesi.
- **Görselleştirme** ve **büyük veri** araçları.

**Zorluklar:** *hacim* (veri çok büyük, sürekli güncellenir, geleneksel veritabanına sığmaz, büyük hesaplama gücü ister) ve *gizlilik* (sağlık bilgisi içerir, genetik ayrımcılığa yol açabilir; kontrollü erişim gerekir).

> **Sık hata:** DNA ile genomu eş anlamlı kullanmak. DNA molekülün adıdır, genom bir canlının bütün genetik materyalidir.
`),
      dene: ["bm-u4-bazlar"],
    },
    {
      baslik: "Histopatolojik görüntüler",
      metin: md(`
**Neden önemli?** Kanser tanısının son sözü mikroskop altındaki dokudur. Bu görüntüler dijitalleşince derin öğrenmenin en çok kullanıldığı tıbbi görüntü türlerinden biri oldu.

**Histoloji**, Yunanca *histos* (doku) ve *logos* (bilim) sözcüklerinden gelir: **doku bilimi**. **Histopatoloji**, dokuları ve hücreleri işlevlerine, yapılarına ve hastalık durumlarına göre inceler. **Histopatolojik görüntüler** mikroskopta incelenen doku ve hücre örneklerinin **dijital 2 boyutlu** fotoğraflarıdır.

**Nasıl elde edilir?**

1. **Doku alımı**: biyopsi ya da ameliyatla küçük bir örnek alınır.
2. **Hazırlık**: örnek kimyasallarla sabitlenir, **mikrotom** adlı aletle saç telinden ince kesitlere ayrılır.
3. **Boyama**: en yaygın boya **H&E**'dir (hematoksilen-eozin); **çekirdekleri mavi-mor, sitoplazmayı pembe** boyar.
4. **İnceleme**: patolog hücrelerin yapısını, şeklini ve düzenini değerlendirir.

**Kullanım:** tümörün iyi huylu (benign) mu kötü huylu (malign) mu olduğunu belirlemede **altın standarttır**; enfeksiyon ve iltihabın kökenini anlamada ve ameliyatta cerrahi sınırın temiz olup olmadığını göstermede kullanılır.

**Teknolojik gelişmeler:** cam lamlar taranarak çok yüksek çözünürlüklü dijital görüntülere dönüştürülür (**dijital patoloji**, tüm slayt görüntüleme). Derin öğrenme modelleri bu görüntülerde kanser hücrelerini otomatik bulmak için yoğun kullanılır.

> **Sık hata:** Histopatolojik görüntüyü radyoloji görüntüsü gibi vücut dışından alınmış sanmak. Doku vücuttan çıkarılır, kesilir, boyanır ve mikroskopta fotoğraflanır.
`),
      dene: ["bm-u4-he"],
    },
  ],
  test: [
    "bm-u4-radyasyonsuz",
    "bm-u4-karin",
    "bm-u4-bt-radyasyon",
    "bm-u4-gadolinyum",
    "bm-u4-jel",
    "bm-u4-radyofarmasotik",
    "bm-u4-petct",
    "bm-u4-genom-tanim",
    "bm-u4-ngs",
    "bm-u4-altin",
  ],
};
