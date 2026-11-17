import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u11-${ad}`;

export const UNITE_11: Ders = {
  hafta: 11,
  baslik: "XP ve Teknik Mükemmellik",
  ozet: "Scrum nasıl çalışılacağını söyler ama nasıl kod yazılacağını söylemez; o boşluğu çoğu takımda Extreme Programming doldurur. XP'nin değerlerini, TDD'yi, eşli programlamayı, sürekli entegrasyonu ve yeniden düzenlemeyi öğren; teknik borcun faizini kendi seçimlerinle hesapla ve DevOps'un DORA ölçütlerini tanı.",
  bolumler: [
    {
      baslik: "Extreme Programming ve değerleri",
      metin: md(`
**Extreme Programming (XP)**, Kent Beck'in 1990'ların ortasında bir maaş bordrosu projesinde biçimlendirdiği ve 1999'da kitaplaştırdığı yöntemdir. Adı, iyi olduğu bilinen pratikleri "uca kadar" götürmekten gelir: kod incelemesi iyiyse sürekli incele (eşli programlama), test iyiyse önce test yaz (TDD), entegrasyon iyiyse günde birkaç kez entegre et.

XP'nin beş değeri:

| Değer | Pratikteki karşılığı |
|---|---|
| **İletişim** | Bilgi belgede değil, konuşmada ve ortak kodda yaşar |
| **Sadelik** | Bugün gerekeni yap, yarını tahmin etme |
| **Geri bildirim** | Testten saniyeler, müşteriden günler içinde |
| **Cesaret** | Gerekeni değiştirmekten çekinmemek, sorunu saklamamak |
| **Saygı** | Takım arkadaşının işine ve zamanına (kitabın 2004 baskısında eklendi) |

> **Sahada:** Scrum Rehberi teknik pratik önermez; Developers'a bırakır. Birçok Scrum takımı bu boşluğu XP pratikleriyle doldurur ve onları DoD'una yazar.
`),
      dene: [p("bes-deger"), p("cesaret")],
    },
    {
      baslik: "Testle yönlendirilen geliştirme (TDD)",
      metin: md(`
TDD üç adımlı kısa bir döngüdür:

1. **Kırmızı:** İstenen davranışı anlatan, **başarısız** bir test yaz ve çalıştır.
2. **Yeşil:** Testi geçirecek **en basit** kodu yaz.
3. **Düzenle:** Testler yeşilken kodu temizle; tekrarı gider, adları düzelt.

Testin önce kırmızı olduğunu görmek önemlidir: hiç kırmızı olmayan bir test gerçekten yeni davranışı sınamıyor olabilir.

TDD'nin asıl faydası test sayısı değildir. Önce testi yazmak, kodu **test edilebilir küçük parçalara** iter ve her değişiklik için bir **güvenlik ağı** kurar. Squad'ın indirim kuralları üç Sprint'te beş kez değişti; her seferinde testler neyin bozulduğunu saniyeler içinde söyledi.
`),
      dene: [p("kirmizi-yesil"), p("tdd-fayda")],
    },
    {
      baslik: "Eşli ve topluluk programlama",
      metin: md(`
**Eşli programlamada** iki kişi tek bilgisayarda çalışır: **sürücü** klavyeyi kullanır, **gözcü** (navigator) yönü ve büyük resmi izler, soru sorar. Belirli aralıklarla yer değiştirirler. İnceleme yazım sırasında olur ve bilgi kendiliğinden yayılır.

Squad'da ödeme modülünü yalnızca bir kişi biliyorsa o kişi izne çıktığında iş durur. Bu riske **tek kişi riski** (bus factor) denir; çaresi eşli programlama ve kodun herkesin sorumluluğunda olmasıdır.

**Topluluk programlama** (mob ya da ensemble programming) bir adım öteye gider: bütün takım aynı anda, tek ekranda, tek iş üzerinde çalışır; klavye birkaç dakikada bir el değiştirir. Zor bir tasarım kararı, yeni bir teknoloji ya da takıma yeni katılanlar için güçlüdür.

> **Sahada:** Eşli programlama "iki kişinin bir kişilik işi" gibi görünür, ama inceleme bekleme süresini, hata düzeltme işini ve tek kişiye bağımlılığı azalttığı için toplam akış çoğu zaman hızlanır.
`),
      dene: [p("esli-fayda"), p("topluluk")],
    },
    {
      baslik: "Sürekli entegrasyon ve sürekli teslim",
      metin: md(`
**Sürekli entegrasyon (CI)**, herkesin değişikliklerini **günde en az bir kez ana dala birleştirmesi** ve her birleştirmenin **otomatik derleme ve testlerle** doğrulanmasıdır. Uzun yaşayan dallar birleştirme acısını büyütür; küçük ve sık birleştirme onu dağıtır.

CI bir araç değil, bir alışkanlıktır. En önemli kuralı: ana daldaki derleme kırılırsa **ilk iş onu düzeltmek ya da değişikliği geri almaktır**; kırık dalın üstüne yeni iş eklenmez.

CI'dan sonraki iki adım sık karıştırılır:

| | Ne olur |
|---|---|
| **Sürekli teslim** (continuous delivery) | Her değişiklik her an yayına çıkabilecek durumda tutulur; yayın bir **iş kararıdır** |
| **Sürekli dağıtım** (continuous deployment) | Testleri geçen her değişiklik **kendiliğinden** yayına çıkar |

Squad sürekli teslimde: Kerem'in kurduğu hat her birleştirmeyi test ortamına kurar, canlıya çıkışı Elif'in onayıyla tek tuş yapar.
`),
      dene: [p("kirik-derleme"), p("cd-fark")],
    },
    {
      baslik: "Yeniden düzenleme ve basit tasarım",
      metin: md(`
**Yeniden düzenleme** (refactoring), kodun **davranışını değiştirmeden** iç yapısını iyileştirmektir: uzun bir işlevi bölmek, tekrar eden kodu birleştirmek, adları düzeltmek. Testler davranışın değişmediğinin güvencesidir.

XP'de yeniden düzenleme **sürekli** yapılır: her TDD döngüsünün üçüncü adımı odur. Birkaç Sprint'te bir yapılan ayrı "temizlik Sprint'leri" sorunu biriktirir ve kalitenin pazarlık konusu olduğu izlenimi verir.

**Basit tasarım**, bugünkü ihtiyacı karşılayan en basit tasarımı yapıp ihtiyaç değişince yeniden düzenlemektir. "İleride lazım olur" diye eklenen esneklik çoğu zaman hiç kullanılmaz (YAGNI: you aren't gonna need it) ama her değişiklikte bakım ister.
`),
      dene: [p("basit-tasarim"), p("refactoring-sprint")],
    },
    {
      baslik: "Öteki XP pratikleri",
      metin: md(`
- **Küçük sürümler:** Değerli yazılımı erken ve sürekli teslim etmek; Manifesto'nun ilk ilkesinin pratiği.
- **Ortak kod sahipliği:** Herhangi bir geliştirici kod tabanının herhangi bir yerini değiştirebilir. "Burası Can'ın modülü" denmez; testler ve CI bunu güvenli kılar.
- **Sürdürülebilir hız:** İlk baskıda "40 saatlik hafta" adıyla geçer. Takım yorulmadan aynı tempoyu korur; fazla mesai bir haftayı kurtarıp sonraki ikisini kaybettirir.
- **Kodlama standardı:** Herkes aynı biçimde yazar, kod tek elden çıkmış gibi okunur.
- **Yerinde müşteri:** Soruların cevabı günler değil dakikalar içinde gelir; Scrum'da PO'nun ulaşılabilir olması bunun karşılığıdır.

Squad'ın sahnelerini XP pratikleriyle eşleştir:

[[G-S11-02]]
`),
      dene: [p("kucuk-surum"), p("kirk-saat"), p("ortak-sahiplik")],
      lab: "xp",
    },
    {
      baslik: "Teknik borç ve faizi",
      metin: md(`
**Teknik borç** metaforunu Ward Cunningham 1992'de ortaya attı: kısayolla yazılan kod bugün zaman kazandırır, ama o kodu her değiştirdiğinde **faiz** ödersin. Borç ödenmezse faiz büyür ve bir noktada takımın bütün zamanı faize gider.

Squad her Sprint test yazmayı atlayarak "hız kazanırsa" velocity kısa vadede artar, sonra düzeltmeler ve kırılgan kod yüzünden düşer. Kendi seçimlerinle dene:

[[G-S11-01]]

Martin Fowler borcu iki eksende sınıflar: **bilinçli** ya da **farkında olmadan**, **tedbirli** ya da **pervasız**. "Yayına yetişmek için bu kısayolu bilerek alıyoruz ve sonra düzelteceğiz" bilinçli ve tedbirli borçtur; "tasarıma vaktimiz yok" pervasız borçtur.

> **Sahada:** Borcu ödeme işleri ayrı bir gizli listede değil, **Product Backlog'da** öteki işlerle birlikte görünür durmalı ve PO'nun sırasına girmelidir. Developers faizin maliyetini PO'nun anlayacağı dille anlatır: "Bu modüle her dokunuş iki gün fazla sürüyor."
`),
      dene: [p("faiz"), p("bilincli-borc"), p("borc-backlog")],
      lab: "teknik-borc",
    },
    {
      baslik: "DevOps ve DORA ölçütleri",
      metin: md(`
**DevOps**, geliştirme ile operasyon arasındaki duvarı kaldırıp **otomasyonla küçük ve sık teslim etmeyi** amaçlayan kültür ve pratikler bütünüdür. 2009'da Belçika'daki ilk DevOpsDays ile adı yaygınlaştı; XP'nin CI'ını yayına ve işletmeye kadar uzatır.

**DORA** (DevOps Research and Assessment) araştırması, yazılım teslim performansını dört temel ölçütle izlemeyi yaygınlaştırdı:

| Ölçüt | Soru |
|---|---|
| **Dağıtım sıklığı** | Ne sıklıkla yayına çıkıyoruz? |
| **Değişiklik teslim süresi** | Birleştirilen bir değişiklik ne kadar sürede canlıda? |
| **Değişiklik başarısızlık oranı** | Yayınların yüzde kaçı soruna yol açıyor? |
| **Geri getirme süresi** | Bir arızadan sonra hizmet ne kadar sürede düzeliyor? |

İlk ikisi **hızı**, son ikisi **kararlılığı** ölçer. Araştırmanın ana bulgusu, iyi takımların ikisinden birini öbürüne feda etmediğidir; Goodhart'ı unutmadan dengeli kullanılır.

Bu pratikleri günlük işe bağlamanın en kısa yolu **DoD**'dur. Bir öğe ana dala girmeden, otomatik testleri geçmeden ve otomatik hatla bir ortama kurulmadan Done sayılmıyorsa CI ve sürekli teslim takımın gündelik alışkanlığı olur.
`),
      dene: [p("dora"), p("dod-teknik")],
    },
  ],
  test: [
    p("xp-kim"), p("kirmizi-once"), p("esli-tanim"), p("ci-tanim"), p("refactoring-tanim"),
    p("borc-tanim"), p("devops-tanim"), p("faiz"), p("cd-fark"), p("basit-tasarim"),
  ],
};
