import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_3: Ders = {
  hafta: 3,
  baslik: "Elektromiyografi (EMG) ve Sinir İletimi",
  ozet: "EMG'nin amacı, motor ünite aksiyon potansiyelleri, klinik EMG, yüzey ve iğne elektrotları, ENG ve sinir iletim ölçümü, kas seğirmesi ve kas hastalıkları.",
  bolumler: [
    {
      baslik: "EMG nedir, kimlere yapılır?",
      metin: md(`
**Neden önemli?** Kas güçsüzlüğü ya da uyuşma şikâyetinin kaynağı kasta, sinirde, sinir kökünde ya da omurilikte olabilir. EMG bu soruya elektriksel ölçümle cevap arar.

Adın açılımı yöntemi anlatır: **elektro** (elektriksel) + **nöro** (sinir) + **miyo** (kas) + **grafi** (yazı). Tam adı **elektronöromiyografi (ENMG)**, yerleşmiş adı **elektromiyografi (EMG)**'dir: sinirlerin ve kasların elektriksel sinyallerinin yazdırılması.

EMG, çevresel (periferik) sinirleri etkileyen hastalıklarda şunlar için yapılır:

- Tanı koymak ya da tanıyı doğrulamak,
- Sinirdeki işlev bozukluğunun ya da yapısal hasarın şiddetini belirlemek,
- Hastalığın seyrini izlemek,
- Tedavinin etkisini değerlendirmek.

**Kimlere yapılır?** Bel ve boyun fıtığı, kas hastalıkları, motor nöron hastalığı, nöropatiler ve sinir hasarı ön tanısı olan hastalara.

Bir EMG incelemesinde birkaç test uygulanabilir; en sık kullanılanlar **sinir ileti çalışmaları** ve **iğne elektromiyografisidir**.

> **Sık hata:** EMG'yi yalnızca kas testi sanmak. Pratikte sinir iletim ölçümü (ENG) ile iğne EMG'si birlikte yapılır ve ikisine birden EMG denir.
`),
      dene: ["bm-u3-enmg"],
    },
    {
      baslik: "Biyopotansiyeller ve motor ünite aksiyon potansiyelleri",
      metin: md(`
**Neden önemli?** EMG'de görülen her iğne, bir motor ünitenin ateşlemesidir. Kasın ne kadar güçlü kasıldığı bu potansiyellerin sayısında ve sıklığında okunur.

İstemli bir kas hareketi, beyinde oluşan elektriksel uyarının sinirlerle kasa iletilmesiyle başlar. Kas lifini sinirden gelen elektriksel uyarı kasar, kasın kasılması da yeniden elektriksel bir işaret üretir. Bu işaret EMG cihazına bağlı elektrotlarla ölçülür.

Sinir ve kas **uyarılabilen dokulardır**: bir uyarıya, hücre zarının elektriksel özelliğini değiştirerek cevap verir. İki tip potansiyel vardır:

- **Dinlenim potansiyeli**: hücre uyarılmamışken zar boyunca bulunan potansiyel.
- **Aksiyon potansiyeli**: uyarı sonrasında zar boyunca yayılan kısa süreli değişim. Kas hücresi aksiyon potansiyelini iletir ve ardından mekanik olarak kasılır (boyu kısalır).

Kasın kasılmasını sağlayan potansiyellere **motor ünite aksiyon potansiyelleri** (**MÜAP**, İngilizcede MUAP) denir. **Kasılmanın miktarı, MÜAP'ların sayısı ve sıklığı arttıkça artar.**

[[G-H3-02]]

Kas sorunlarını belirlemek için kas hem gevşekken hem kasılıyken MÜAP'lara bakılır: biçimleri ve sıklıkları normal sınırlarda mı, normalde görülmeyen bir elektriksel etkinlik var mı?

> **Sık hata:** Güçlü kasılmada tek tek MÜAP'ların büyüdüğünü düşünmek. Asıl değişen, devreye giren MÜAP'ların sayısı ve ateşleme sıklığıdır; potansiyeller üst üste biner.
`),
      dene: ["bm-u3-iki-potansiyel"],
    },
    {
      baslik: "Klinik EMG ve motor ünite potansiyelleri",
      metin: md(`
**Neden önemli?** Kas hastalığı ile sinir hastalığını ayırmanın yolu, tek bir motor ünitenin potansiyelini dikkatle ölçmektir.

Klinik EMG'de **motor ünite potansiyelleri (MUP)**, **iğneli elektrotla** kas **hafifçe kasıldığında** alınan cevaplar kaydedilerek ölçülür.

- MUP, **tek bir anatomik motor ünitenin** elektriksel hareketini yansıtır; elektrodun kayıt alanındaki kas liflerinin birleşik potansiyelidir.
- Klinik çalışmalarda MUP özellikleri **zaman esaslıdır**.
- Kas ve sinir hastalıklarını birbirinden ayırmada önemli üç parametre: **devamlılık süresi**, **genlik** ve **aşama** (faz sayısı).

İğne EMG'sinde sinyal yalnızca ekranda izlenmez; aynı sinyal **hoparlörden sese çevrilir**. Deneyimli bir hekim anormal etkinliği kulağıyla da tanır.

İğne EMG'si şunları söyler:

- Kasın sinirinin kopuk olup olmadığını, kopuksa **tam mı kısmi mi** olduğunu,
- Kastaki anormalliğin **omurilikten mi, sinir kökünden mi, çevresel sinirden mi, yoksa kasın kendisinden mi** kaynaklandığını.

> **Sık hata:** MUP'u bütün kasın toplam etkinliği sanmak. MUP tek bir motor üniteye aittir; bu yüzden hafif kasılmada, üniteler birbirinden ayrı görünürken ölçülür.
`),
      dene: ["bm-u3-mup-param"],
    },
    {
      baslik: "EMG ölçümü: yüzey ve iğne elektrotları",
      metin: md(`
**Neden önemli?** Elektrot seçimi neyin ölçüleceğini belirler: deriden bütün kasın etkinliği, kasın içinden tek motor ünitelerin etkinliği.

**Yüzey elektrotları**: en genel kullanımda EMG, test edilen kasın üzerindeki **deriye** yapıştırılan elektrotlarla alınır. Kasın dinlenme ve kasılma sırasındaki biyopotansiyelleri kaydedilir. Sinyal küçük olduğu ve iki elektrot arasındaki fark ölçüldüğü için **farksal kuvvetlendiriciler** kullanılır.

EMG sinyalleri yalnızca tanıda kullanılmaz: kol ya da bacak kaybında **protezleri hareket ettiren kaynak sinyal** olarak da kullanılır.

**İğne elektrotları** kullanılırsa incelemeye **iğne EMG'si** denir:

- Genellikle **konsantrik iğne** kullanılır: enjektör iğnesinin içine çok ince bir tel yerleştirilerek kayıt elektrodu hâline getirilmiştir.
- İğne ucu doğrudan araştırılan kasa sokulur; uca yakın bölgedeki etkinlik özel kuvvetlendiricilerle büyütülür.
- **İğne EMG'sinde hastaya hiçbir elektriksel uyarı verilmez**; iğne yalnızca kayıt içindir.
- İğneler genellikle tek kullanımlıktır. Ağrı, ilaç iğnesine benzer ama madde enjekte edilmediği için daha hafiftir.
- Her kas birkaç dakika incelenir; tanıya göre genellikle **1–10 kas** incelenir.

> **Sık hata:** "Cihaza bağlı iğne" görünce elektrik verileceğini düşünmek. Uyarı yalnızca sinir iletim ölçümünde ve deri üzerinden verilir; iğne EMG'si pasif bir kayıttır.
`),
      dene: ["bm-u3-konsantrik"],
    },
    {
      baslik: "ENG ve sinir iletim ölçümü",
      metin: md(`
**Neden önemli?** Sinirin hasarlı olup olmadığı, uyarının sinir boyunca ne kadar hızlı ve ne kadar güçlü yayıldığından anlaşılır.

**Elektronörografi (ENG)** sinirlerin, **EMG** kasların elektriksel incelemesidir. ENG'de **periferik ve kraniyal sinirlerin** normal çalışıp çalışmadığı araştırılır; duyusal ve motor sinirler ayrı ayrı incelenir.

- **Kraniyal sinirler**: doğrudan beyinden çıkan **12 çift** sinir. Baş ve boyun yapılarını yönetir; görme, işitme, tat gibi duyuları taşır, mimik, göz hareketi, çiğneme gibi motor işleri denetler. **Vagus siniri** baş-boyun dışına çıkıp kalp, akciğer ve mideye kadar uzanır.
- **Spinal sinirler**: omurilikten çıkan **31 çift** sinir; periferik sinir sisteminin en büyük kısmıdır.

**Ölçüm nasıl yapılır?**

1. Seçilen sinir, **deri üzerindeki bir elektrotla** elektrik akımı verilerek uyarılır.
2. Akım **yüksek gerilimlidir (100 V kadar)** ama **milisaniyeden kısa** sürer ve zararsızdır; hoş olmayan bir his verir ama genellikle ağrı olarak algılanmaz.
3. Sinirde oluşan etkinlik sinir boyunca yayılır ve başka bir elektrotla kaydedilir.
4. Kayıttan sinirin **iletim hızı** ve cevabın büyüklüğü bulunur.

[[G-H3-01]]

İki elektrot arası uzaklık $d$, gecikme $\\Delta t$ ise iletim hızı $v = d / \\Delta t$ olur. Örneğin 0,25 m'yi 5 ms'de geçen bir uyarı için $v = 0{,}25 / 0{,}005 = 50$ m/s.

Motor sinir incelemesinde sinir farklı yerlerden uyarılır, sinirin son bulduğu kastan kayıt alınır. Bir tetkikte genellikle **5–10 sinir** ölçülür. ENG ile sinirin kesik olup olmadığı, kesikse tam mı kısmi mi olduğu, iyileşip iyileşmeyeceği ve ameliyat gerekip gerekmediği anlaşılabilir.

> **Sık hata:** Kraniyal ve spinal sinir sayılarını karıştırmak: kafatasından 12 çift, omurilikten 31 çift.
`),
      dene: ["bm-u3-uyari-gerilim"],
    },
    {
      baslik: "Kas seğirmesi",
      metin: md(`
**Neden önemli?** Tek bir uyarıya kasın verdiği mekanik cevap, kasın türünü ve sinir-kas iletimindeki gecikmeyi gösterir.

**Kasın bir uyarı sonucunda kasılmasına kas seğirmesi denir.** Seğirmenin üç bölümü vardır:

1. **Gecikme**: uyarının gelmesi ile kasılmanın başlaması arasında kısa bir süre geçer.
2. **Kasılma fazı**: mekanik gerilme (**T**) yükselir.
3. **Gevşeme fazı**: gerilme azalır. Her kasılma fazını bir gevşeme fazı izler.

[[G-H3-03]]

Seğirme süresi kasın türüne göre değişir:

- **Hızlı ve hassas** hareket yapan kaslarda **7,5 ms** kadar kısa olabilir.
- **Kaba ve kuvvetli** hareket yapan kaslarda **100 ms**'ye çıkabilir.

> **Sık hata:** Kasılmanın uyarıyla aynı anda başladığını düşünmek. Uyarı ile kasılma arasında her zaman bir gecikme vardır.
`),
      dene: ["bm-u3-segirme-sure"],
    },
    {
      baslik: "Kas hastalıkları",
      metin: md(`
**Neden önemli?** EMG'nin asıl işi, kas güçsüzlüğünün kaynağını bulmaktır. Hastalık grupları bu kaynağa göre adlandırılır.

Kas hastalıkları, doğrudan kas liflerini ya da kasları çalıştıran sinir-kas bağlantısını etkileyen **genetik ya da sonradan kazanılmış** rahatsızlıklardır:

| Grup | Ne bozulur? | Örnek |
|---|---|---|
| **Musküler distrofiler** | genetik mutasyonla kas zamanla zayıflar ve erir | Duchenne kas distrofisi (DMD) |
| **Motor nöron hastalıkları** | omurilikteki sinir hücreleri kaybolur | ALS, SMA |
| **Sinir-kas kavşağı hastalıkları** | sinirden kasa sinyal iletimi otoimmün olarak engellenir | Miyastenia gravis |
| **İltihaplı kas hastalıkları** (miyozitler) | bağışıklık sistemi kasa saldırır | Polimiyozit |

İki genel terim:

- **Nöropati**: periferik sinirlerdeki hasar.
- **Miyopati**: kas dokusunu etkileyen hastalık; zayıflık, iltihap, spazm ya da felçle sonuçlanabilir, çevresel ve kalıtsal nedenleri vardır.

> **Sık hata:** Miyastenia gravisi kas lifinin hastalığı sanmak. Kas sağlamdır; bozulan, sinirin kasa sinyal ilettiği kavşaktır.
`),
      dene: ["bm-u3-miyastenia"],
    },
  ],
  test: [
    "bm-u3-testler",
    "bm-u3-muap",
    "bm-u3-hoparlor",
    "bm-u3-farksal",
    "bm-u3-uyari-yok",
    "bm-u3-kraniyal",
    "bm-u3-spinal",
    "bm-u3-segirme-tanim",
    "bm-u3-noropati",
  ],
};
