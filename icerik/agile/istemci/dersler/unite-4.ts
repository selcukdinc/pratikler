import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u4-${ad}`;

export const UNITE_4: Ders = {
  hafta: 4,
  baslik: "Scrum'a Giriş",
  ozet: "Scrum Rehberi 2020'nin Scrum'u nasıl tanımladığını, empirizmin üç sütununu, beş değeri ve Scrum'un yapısını gör. Rehber'de olan ile Rehber dışı yaygın uygulamaları ayır; organizasyon şemalarındaki squad, tribe, chapter, epic ve Tech Lead gibi terimlerin nereden geldiğini terim haritasıyla bul.",
  bolumler: [
    {
      baslik: "Hafif ve bilerek eksik bir çerçeve",
      metin: md(`
Scrum'un resmi tanımı **Scrum Rehberi**dir (The Scrum Guide). Ken Schwaber ve Jeff Sutherland yazar; ilk sürümü 2010'da, son sürümü Kasım 2020'de yayımlandı ve 15 sayfa kadar tutar. Creative Commons (CC BY-SA 4.0) lisanslıdır.

> **Rehber ne der:** Scrum, kişilerin, takımların ve organizasyonların **kompleks problemler** için uyarlanabilir çözümlerle değer üretmesine yardım eden **hafif bir çerçevedir**.

Üç kelime önemlidir. **Kompleks:** Scrum, 1. ünitedeki Cynefin'in kompleks alanı içindir. **Hafif:** az kural, az rol, az belge. **Çerçeve:** bir metodoloji gibi her adımı tarif etmez.

Rehber çerçevenin **bilerek eksik** bırakıldığını söyler: yalnızca Scrum teorisini uygulamak için gereken parçaları tanımlar, işin nasıl yapılacağını takıma bırakır. Ama bu "istediğin parçayı atla" demek değildir. Rehber açıktır: Scrum'un yalnızca bazı parçalarını uygulamak mümkündür, ama **sonuç Scrum değildir**.

Rehber'in kısa özeti bir döngüdür: Product Owner kompleks bir problemin işini **Product Backlog**'a sıralar; Scrum Takımı Sprint boyunca bir seçkiyi değerli bir **Increment**'e dönüştürür; takım ve paydaşlar sonucu denetleyip bir sonraki Sprint için uyarlar; tekrarlanır.

> **Sahada:** "Biz Scrum'ı kendimize göre uyarladık, Retrospective yapmıyoruz" diyen takım genellikle bir sorunu örtüyordur. Atlanan parçanın çözdüğü sorun (burada: iyileşmenin durması) bir süre sonra geri gelir.
`),
      dene: [p("parcali")],
    },
    {
      baslik: "Empirizmin üç sütunu",
      metin: md(`
Scrum, kararların gözleme dayandığı **empirizm** üzerine kuruludur ve empirizm üç sütun üzerinde durur:

- **Şeffaflık** (transparency): süreç ve iş, işi yapanlar ve alanlar tarafından görülebilmelidir. Önemli kararlar artefaktların görünen durumuna dayanır.
- **Denetim** (inspection): artefaktlar ve hedefe ilerleme sık sık, dikkatle incelenir.
- **Uyarlama** (adaptation): incelemede bir şey kabul edilemez ölçüde saparsa ayar **olabildiğince çabuk** yapılır.

Sütunlar birbirine dayanır.

> **Rehber ne der:** Şeffaflık denetimi mümkün kılar; şeffaflık olmadan denetim **yanıltıcı ve israftır**. Denetim uyarlamayı mümkün kılar; uyarlamaya dönüşmeyen denetim **anlamsızdır**.

Scrum'un beş etkinliğinin her biri bir denetim ve uyarlama fırsatıdır. Hangi sütunun çöktüğünü sahnelerde bul:

[[G-S4-01]]
`),
      dene: [p("uyarlamasiz")],
      lab: "sutunlar",
    },
    {
      baslik: "Beş değer",
      metin: md(`
Rehber'e göre Scrum'un başarısı, kişilerin beş değeri yaşamasına bağlıdır:

- **Bağlılık** (commitment): hedeflere ulaşmaya ve birbirini desteklemeye bağlı olmak.
- **Odak** (focus): öncelikle **Sprint'in işine**, hedeflere en iyi ilerlemeye odaklanmak.
- **Açıklık** (openness): iş ve zorluklar hakkında açık olmak.
- **Saygı** (respect): birbirini yetenekli ve bağımsız insanlar olarak görmek.
- **Cesaret** (courage): doğru olanı yapmak ve zor problemler üzerinde çalışmak için cesaret.

QA'dan Tuba'nın Sprint Review'dan bir gün önce bulduğu ciddi hatayı paydaşlara açıkça söylemesi açıklık ve cesaret; squad'ın Sprint ortasında gelen "küçük" bir isteği Sprint Goal'ü korumak için kibarca backlog'a yönlendirmesi odaktır.

> **Sahada:** Değerler duvara asılınca değil, zor anlarda görünür: kötü haberi saklamamak, bir arkadaşın işine yardım etmek, "bilmiyorum" diyebilmek.
`),
      dene: [p("cesaret")],
    },
    {
      baslik: "Scrum'un yapısı: 3 + 5 + 3",
      metin: md(`
Scrum'un bütün parçaları tek bir tabloya sığar:

| Hesap verebilirlikler | Etkinlikler | Artefaktlar (ve taahhütleri) |
|---|---|---|
| Product Owner | Sprint (diğerlerini içeren kap) | Product Backlog (Product Goal) |
| Scrum Master | Sprint Planning | Sprint Backlog (Sprint Goal) |
| Developers | Daily Scrum | Increment (Definition of Done) |
| | Sprint Review | |
| | Sprint Retrospective | |

Scrum Takımı **bir Scrum Master, bir Product Owner ve Developers**'tan oluşur. Takım içinde **alt takım ya da hiyerarşi yoktur**: bir hedefe odaklı tek bir birimdir. Takım çapraz işlevlidir (gereken bütün becerilere sahiptir) ve kendi kendini yönetir. Rehber'e göre takım genelde **10 kişi ya da daha azdır**; büyüyen takım aynı Product Goal, Product Backlog ve Product Owner'ı paylaşan birden çok takıma bölünmeyi düşünmelidir.

Bu parçalar 5-8. ünitelerde tek tek işlenecek. Kampüs Yemekhanesi squad'ı ise **12 kişi**: Product Owner Elif, Scrum Master Burak, Tech Lead Can, QA'dan Deniz ve Tuba, DevOps'tan Kerem, Engineering'den Ayşe, Mert, Selin, Okan, Ece ve Hakan. Rehber'in önerdiğinden büyük; bu büyüklüğün getirdiği sorunları her ünitede göreceğiz.
`),
      dene: [p("alt-takim")],
    },
    {
      baslik: "2020'de ne değişti?",
      metin: md(`
Rehber'in 2020 sürümü öncekilerden daha kısa ve daha az buyurgandır. Başlıca değişiklikler:

- **Tek takım:** "Development Team" kavramı kalktı; artık tek bir Scrum Takımı ve onun içinde **Developers** var. Amaç PO ile geliştiriciler arasındaki "biz ve onlar" ayrımını kaldırmaktı.
- **Product Goal:** Product Backlog'a uzun vadeli bir hedef eklendi.
- **Taahhütler:** her artefaktın bir taahhüdü oldu: Product Goal, Sprint Goal, Definition of Done.
- **Kendi kendini yöneten:** "self-organizing" yerine "self-managing". Takım yalnızca işi nasıl yapacağına değil, **kimin neyi, nasıl yapacağına** da karar verir.
- **Sprint Planning'de "Neden":** Ne ve Nasıl'a ek olarak "Bu Sprint neden değerli?" konusu geldi.
- **Daha az kural:** Daily Scrum'daki üç soru çıkarıldı; yazılıma özgü dil azaltıldı, "rol" yerine **hesap verebilirlik** (accountability) dendi.

> **Sahada:** Bugün hâlâ "Development Team" ya da "üç soru" diyen eğitim materyalleri ve şirket içi belgeler çoktur. Sertifika sınavları ise 2020 Rehberi'ne göre sorar.
`),
      dene: [p("uc-soru")],
    },
    {
      baslik: "Rehber'de olan ve olmayan",
      metin: md(`
Scrum takımlarında konuşulan pek çok şey Rehber'de yoktur: story point, velocity, burndown grafiği, Definition of Ready, Sprint 0, user story, epic. Bunlar yaygın ve çoğu zaman işe yarayan **Rehber dışı uygulamalardır**.

Bu ayrımı bilmek iki yönden önemlidir:

- Rehber dışı bir uygulamayı kullanmak **Scrum'a aykırı değildir**; Scrum bilerek eksik bırakılmış bir çerçevedir. Takım Rehber'le çelişmeyen her tekniği ekleyebilir.
- Ama Rehber dışı bir uygulamayı "Scrum'un kuralı" sanmak yanlış tartışmalar doğurur: "Scrum story point ister" ya da "Scrum'da her iş user story olarak yazılmalı" cümleleri doğru değildir.

[[G-S4-02]]

> **Rehber ne der:** Product Backlog öğelerine açıklama, sıra, büyüklük ve değer gibi nitelikler eklenir; nitelikler işin alanına göre değişir. Rehber bir yazım biçimi şart koşmaz.
`),
      dene: [p("user-story"), p("kullanmak-yasak-mi")],
      lab: "rehber",
    },
    {
      baslik: "Terim haritası: şemandaki kelimeler nereden geliyor?",
      metin: md(`
Pek çok şirketin organizasyon şemasında şöyle bir tablo görürsün: üstte bir **tribe** ("Program Ekibi") ve Tribe Lead, altında sütun sütun **squad**'lar, her squad'da bir **Product Owner** ve bir **Tech Lead**; squad'ları yatay kesen **QA, DevOps ve Engineering chapter**'ları; altta "Teknik Liderlik epic ve feature'ları yazar, user story'leri onaylar" gibi bir not. Bu kelimeler dört ayrı kaynaktan gelir:

| Terim | Kaynağı | Scrum Rehberi'ndeki karşılığı |
|---|---|---|
| Product Owner, Scrum Master, Developers, Sprint | Scrum Rehberi | Kendisi |
| Squad | Spotify modeli (2012) | Kabaca Scrum Takımı |
| Tribe, Tribe Lead | Spotify modeli | Yok (ölçekleme yapısı) |
| Chapter (QA, DevOps, Engineering) | Spotify modeli | Yok; bu kişilerin hepsi Developers |
| Guild | Spotify modeli | Yok |
| Epic, Feature, Task | SAFe ve Jira, ClickUp gibi araçlar | Yok; hepsi Product Backlog öğesi ya da Sprint Backlog'daki plan |
| Tech Lead, Teknik Liderlik | Şirketin kendi rolü | Yok; Rehber'de unvan yok |

Spotify modeli, Henrik Kniberg ile Anders Ivarsson'un 2012'deki "Scaling Agile @ Spotify" makalesinden yaygınlaştı; Ölçekli Agile pratiğinde ayrıntılı işlenecek. Epic, feature ve story hiyerarşisi [Backlog pratiğinin](/backlog) konusu.

[[G-S4-03]]

Rehber'in gözüyle bakınca böyle bir şemada üç şey dikkat çeker:

- **Scrum Master yoktur.** Rehber'e göre her Scrum Takımı'nda bir Scrum Master vardır. Bu bir unvan değil bir hesap verebilirliktir; kimse üstlenmiyorsa Retrospective, engel kaldırma ve organizasyona koçluk sahipsiz kalır. Spotify modelinde bu işi "agile coach" görüyordu.
- **Product Backlog'un yetkisi bulanıktır.** Rehber'e göre Product Backlog'dan Product Owner hesap verir ve organizasyon onun kararlarına saygı gösterir; backlog'u değiştirmek isteyen PO'yu **ikna eder**. Story'lerin bir onay katmanına götürülmesi teknik görüş almak için yerinde olabilir, ama son sözün kimde olduğu açık değilse şeffaflık zarar görür.
- **Squad'lar büyüktür.** 9-14 kişilik squad'lar Rehber'in "genelde 10 ve altı" önerisinin üstündedir. n kişilik bir takımda ikili iletişim yolu sayısı n(n-1)/2'dir: 7 kişide 21, 14 kişide 91.

> **Sahada:** Bu farkların hiçbiri "yanlış" demek değildir; çoğu şirket Scrum'u ölçekli bir yapının içinde, kendi rolleriyle uygular. Önemli olan hangi kelimenin Rehber'den, hangisinin şirketten geldiğini bilmek ve kayıp hesap verebilirlikleri (özellikle Scrum Master'ınkini) birinin üstlendiğinden emin olmaktır.
`),
      dene: [p("chapter"), p("iletisim-yolu")],
      lab: "terim-haritasi",
    },
    {
      baslik: "Rugby'den Rehber'e",
      metin: md(`
"Scrum" kelimesi rugby'den gelir: iki takımın kenetlenip topu birlikte ileri ittiği an. Hirotaka Takeuchi ve Ikujiro Nonaka 1986'da Harvard Business Review'daki "The New New Product Development Game" makalesinde, aşamaları sırayla birbirine devreden bayrak yarışı yerine **topu birlikte taşıyan** küçük, çapraz işlevli takımlarla ürün geliştiren şirketleri anlattı.

Jeff Sutherland bu fikri 1993'te bir yazılım şirketinde denedi; Ken Schwaber ile birlikte Scrum'u **1995'te OOPSLA** konferansında sundular. 2001'de ikisi de Agile Manifesto'yu imzalayanlar arasındaydı. İlk Scrum Rehberi 2010'da yayımlandı ve 2011, 2013, 2016, 2017 ve 2020'de güncellendi.

> **Sahada:** Scrum.org (Schwaber'in 2009'da kurduğu kuruluş) PSM ve PSPO, Scrum Alliance ise CSM gibi sertifikalar verir. Sınavların ikisi de aynı Rehber'e dayanır (13. ünite).
`),
      dene: [p("rugby")],
    },
  ],
  test: [
    p("tanim"), p("eksik"), p("dongu"), p("uc-sutun"), p("seffaflik-yoksa"), p("uyarlama-zaman"), p("bes-deger"), p("odak"),
    p("etkinlik-sayisi"), p("artefaktlar"), p("uc-hesap"), p("developers"), p("product-goal"), p("kendini-yoneten"),
    p("neden-konusu"), p("rehberde-var"), p("sprint-sifir"), p("squad-koken"), p("squad-karsilik"), p("epic-koken"),
    p("tech-lead"), p("buyuk-squad"), p("sm-yok"), p("po-onay"), p("oopsla"), p("rehber-yazarlar"),
  ],
};
