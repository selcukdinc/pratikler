import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u13-${ad}`;

export const UNITE_13: Ders = {
  hafta: 13,
  baslik: "Takımdan Organizasyona",
  ozet: "Bir ürüne birden çok takım çalıştığında Scrum'ı çoğaltmak yetmez: tek backlog, tek PO, ortak DoD ve her Sprint entegre bir Increment gerekir. Nexus, LeSS, SAFe ve Spotify modelinin bu soruna verdiği cevapları, Epic ve Feature terimlerinin nereden geldiğini, yöneticinin yeni rolünü ve sertifika yollarını gör. Bu ünite sonraki iki pratiğin, Backlog ve Ölçekli Agile'ın kapısıdır.",
  bolumler: [
    {
      baslik: "Bir ürün, birden çok takım",
      metin: md(`
> **Rehber ne der:** Scrum Takımları çok büyürse, **aynı ürüne odaklanan** birden çok uyumlu Scrum Takımı'na bölünmeleri düşünülmelidir. Bu takımlar **aynı Product Goal'ü, Product Backlog'u ve Product Owner'ı** paylaşmalıdır. Birden çok takım aynı ürün üzerinde çalışıyorsa **ortak bir Definition of Done** tanımlar ve ona uyar.

Her takımın kendi Sprint Backlog'u, kendi Daily'si ve kendi Developers'ı vardır; ama değer **entegre** üründe ortaya çıkar. Üç squad her Sprint kendi parçasını "Done" ilan edip parçaları ancak birkaç Sprint sonra bir araya getiriyorsa, ürün düzeyinde çalışan bir Increment yoktur ve sorunlar geç fark edilir.

Bütün ölçekli çerçevelerin ortak sorusu budur: **takımlar arası bağımlılığı nasıl azaltırız ve her Sprint entegre bir Increment'i nasıl çıkarırız?**
`),
      dene: [p("entegrasyon")],
    },
    {
      baslik: "Özellik takımları ve bileşen takımları",
      metin: md(`
Takımları kurmanın iki yolu vardır:

- **Bileşen takımı** (component team) sistemin tek katmanına bakar: arayüz takımı, servis takımı, veritabanı takımı. Her müşteri özelliği birkaç takıma dokunur; bir takım bitirince öteki bekler.
- **Özellik takımı** (feature team) çapraz işlevlidir; bir müşteri özelliğini uçtan uca bitirebilir. Bağımlılık azalır, öğrenme ise daha geniş bir koda yayılır.

Nadir bir uzmanlık (örneğin ödeme altyapısı) her takımda bulunamıyorsa bir uzman takım kalabilir; bağımlılık yalnızca o özelliklerde kalır.

Takımları farklı biçimlerde kur ve bağımlılığı say:

[[G-S13-01]]
`),
      dene: [p("ozellik-takimi")],
      lab: "bagimlilik",
    },
    {
      baslik: "Nexus",
      metin: md(`
**Nexus**, Ken Schwaber ve Scrum.org'un ölçekli Scrum çerçevesidir; aynı ürün üzerinde çalışan yaklaşık **3-9 Scrum Takımı** için tasarlanmıştır. Scrum'ı değiştirmez, üstüne ince bir katman ekler:

- **Nexus Entegrasyon Takımı:** PO, bir Scrum Master ve takımlardan üyeler. Her Sprint entegre bir Increment çıkmasından hesap verebilirdir; entegrasyonu kendisi yapmak zorunda değildir, engelleri görünür kılar.
- **Etkinlikler:** takımlar arası refinement, Nexus Sprint Planning, Nexus Daily Scrum (takım temsilcileri entegrasyon sorunlarını konuşur), Nexus Sprint Review ve Nexus Sprint Retrospective.
- **Artefaktlar:** tek Product Backlog, Nexus Sprint Backlog (takımlar arası bağımlılıkları da gösterir) ve **entegre Increment**.

Nexus Sprint Review, takımların ayrı Review'larının yerini alır: paydaşlar parçaları değil, bütünü görür.
`),
      dene: [p("nexus-tanim"), p("nit")],
    },
    {
      baslik: "LeSS: Large-Scale Scrum",
      metin: md(`
**LeSS**, Craig Larman ve Bas Vodde'nin çerçevesidir. Yaklaşımı "daha azla daha çok"tur: yeni rol ve katman eklemek yerine organizasyonu sadeleştirip büyük ürünü **tek bir Scrum gibi** çalıştırmak.

- **Bir** Product Owner, **bir** Product Backlog, **ortak** bir Sprint ve **tek** ürün Increment'i.
- Takımlar çapraz işlevli **özellik takımlarıdır**.
- Sprint Planning iki bölümdür: ortak bölümde takımlar öğeleri seçer, ikinci bölümde her takım kendi planını yapar. Takımların Retro'sundan sonra bir de bütün sistemi ele alan ortak Retro yapılır.

Sekiz takımı aşan ürünler için **LeSS Huge** ürünü müşteri alanlarına böler; her alanın bir **Area Product Owner**'ı olur, genel sıralama yine tek PO'dadır.
`),
      dene: [p("less-tek"), p("less-huge")],
    },
    {
      baslik: "SAFe ve Epic, Feature terimleri",
      metin: md(`
**SAFe** (Scaled Agile Framework), Dean Leffingwell'in büyük kurumlar için tanımladığı ve en yaygın kullanılan ölçekleme çerçevesidir. Temel yapı taşı **Agile Release Train**'dir (ART): yaklaşık 50-125 kişilik, ortak bir takvimle birlikte planlayıp teslim eden takımlar topluluğu. Birkaç iterasyonluk dönemin başında bütün tren **PI Planning** adlı büyük bir planlama toplantısı yapar.

Squad'ının aracında gördüğün iş hiyerarşisi de büyük ölçüde buradan gelir:

| Terim | Nereden |
|---|---|
| Product Backlog öğesi | Scrum Rehberi |
| Story (user story) | XP ve agile topluluğu |
| Epic | Agile topluluğu, SAFe'in portföy katmanı |
| Feature, Capability | SAFe |
| Task | İş takip araçları |

Scrum Rehberi bunların hiçbirini kullanmaz; yalnızca Product Backlog öğesinden söz eder. Bu hiyerarşinin nasıl yazıldığı, bölündüğü ve inceltildiği **Backlog** pratiğinin konusudur.

> **Sahada:** SAFe'e en sık yöneltilen eleştiri ağırlığıdır: çok sayıda rol, katman ve etkinlik, mevcut hiyerarşinin yeni adlarla korunmasına izin verebilir. Hangi çerçeve olursa olsun ölçü aynıdır: her Sprint entegre, çalışan bir ürün.
`),
      dene: [p("epic-koken")],
    },
    {
      baslik: "Spotify modeli: squad, tribe, chapter, guild",
      metin: md(`
Kurumundaki şemada gördüğün terimlerin çoğu, Henrik Kniberg ve Anders Ivarsson'un 2012'de Spotify'ın o günkü düzenini anlattığı yazıdan gelir:

| Terim | Anlamı | Rehber'deki yakın karşılığı |
|---|---|---|
| **Squad** | Küçük, kendi kendini yöneten ürün takımı | Scrum Takımı |
| **Tribe** | Aynı ürün alanındaki squad'ların topluluğu | Rehber'de yok |
| **Chapter** | Tribe içinde aynı uzmanlıktakiler (QA, DevOps...) | Rehber'de yok; üyeleri Developers'tır |
| **Guild** | Tribe'lar arası, gönüllü ilgi topluluğu | Rehber'de yok |

Spotify bu düzeni kopyalanacak bir çerçeve olarak sunmadı ve düzen sonradan da değişti. Bir tribe'ın nasıl kurulduğu, Tribe ve Team Canvas'ları, Nexus, LeSS ve SAFe ile karşılaştırması **Ölçekli Agile** pratiğinin konusudur.

[[G-S13-02]]
`),
      dene: [p("spotify-terim"), p("squad-scrum")],
      lab: "olcekleme",
    },
    {
      baslik: "Yöneticinin yeni rolü",
      metin: md(`
Rehber yöneticiyi tanımlamaz. Ama Scrum Master'ın organizasyona hizmetini anlatırken dolaylı olarak yöneticinin yerini de çizer: organizasyonun empirik yaklaşımı anlaması, engellerin kaldırılması, takımların kendi kendini yönetebileceği bir ortam.

Agile organizasyonda yönetici:

- **İşi** değil, işin yapıldığı **sistemi** yönetir: takım kurgusu, beceri gelişimi, kariyer, engeller.
- Görev dağıtmaz, Daily'de kişi kişi ilerleme sormaz, velocity'leri karşılaştırıp sıralamaz.
- Bütçeyi proje başına değil, **kalıcı takımlara** ya da ürün alanlarına dönemsel olarak verir; kapsam her Sprint değere göre sıralanır. Projeyle kurulup dağılan geçici ekipler öğrendiklerini kaybeder.
`),
      dene: [p("yonetici-rol"), p("butce")],
    },
    {
      baslik: "Sertifikalar ve sonraki adım",
      metin: md(`
Scrum'da en yaygın sertifika yolları:

| Sertifika | Kuruluş | Not |
|---|---|---|
| PSM I, II, III | Scrum.org | Kurs şartı yok; çevrim içi sınav |
| PSPO I, II, III | Scrum.org | Product Owner için |
| CSM, CSPO | Scrum Alliance | İki günlük kursla birlikte |
| SAFe sertifikaları | Scaled Agile | SAFe rollerine göre |

PSM ve PSPO sınavlarının birincil kaynağı Scrum Rehberi'dir; sahada yaygın ama Rehber'de olmayan uygulamalar doğru cevap sayılmaz. Bu pratikte **Rehber** etiketli sorular bu yüzden yalnızca Rehber'in metnine dayanır, **Sahada** etiketli sorular ise gerçek takımlardaki iyi uygulamayı sorar. İkisini ayırabilmek sınavda en çok işe yarayan beceridir.

Buradan iki yol açılır:

- **Backlog: Epic, Feature, User Story** pratiği: Product Backlog öğelerini yazmak, bölmek, kabul ölçütleri, tahmin ve inceltme (yakında).
- **Ölçekli Agile: Tribe, Squad, Canvas** pratiği: Spotify modeli, Tribe ve Team Canvas, Nexus, LeSS ve SAFe'in ayrıntısı (yakında).
`),
      dene: [p("psm-pspo"), p("sinav-kaynak")],
    },
  ],
  test: [
    p("ortak-dod"), p("nexus-review"), p("less-felsefe"), p("safe-elestiri"), p("spotify-model"),
    p("tek-pb"), p("art"),
  ],
};
