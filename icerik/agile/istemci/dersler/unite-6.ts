import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u6-${ad}`;

export const UNITE_6: Ders = {
  hafta: 6,
  baslik: "Sprint, Sprint Planning ve Daily Scrum",
  ozet: "Sprint'in kurallarını ve iptalini, Sprint Planning'in neden-ne-nasıl konularını, Daily Scrum'ın amacını ve 12 kişilik bir squad'da 15 dakikada nasıl bitirileceğini öğren; time-box'ları Sprint uzunluğuna göre hesapla.",
  bolumler: [
    {
      baslik: "Sprint: kalp atışı",
      metin: md(`
Sprint, Scrum'un kalp atışıdır: **bir ay ya da daha kısa**, **sabit uzunlukta** bir etkinlik. Önceki Sprint biter bitmez yenisi başlar. Sprint Planning, Daily Scrum'lar, Sprint Review ve Sprint Retrospective Sprint'in **içinde** yapılır; fikri değere dönüştüren bütün iş de öyle.

Kısa Sprint'ler iki şey kazandırır: **öğrenme döngüsü** sıklaşır ve **risk** en fazla bir Sprint'in maliyetiyle sınırlanır. Sprint'in ufku çok uzarsa Sprint Goal geçersizleşebilir, karmaşıklık ve risk artar.

> **Rehber ne der:** Rehber Sprint'ler arasında boşluk tanımaz. "Sprint 0", "sertleştirme Sprint'i" ya da "test Sprint'i" Rehber'de yoktur; bunlar çoğu zaman Increment'lerin her Sprint Done olamadığını gösterir.

> **Sahada:** Squad iki haftalık Sprint'lerle çalışır: Pazartesi sabahı Planning, her gün 09.30'da Daily, ikinci Cuma öğleden sonra Review ve Retro. İki hafta yaygındır ama Rehber'in kuralı değildir.

Menüdeki **Sprint simülatörü**nde squad'ın bir Sprint'ini baştan sona sen yönetirsin: Sprint Goal'ü seçer, iş alır, her gün gelen olaylara karşılık verir, Review ve Retro'yu yaparsın. İlk dört görev bu ünitenin konularıdır.
`),
      dene: [p("ard-arda")],
    },
    {
      baslik: "Sprint boyunca ne değişmez?",
      metin: md(`
Rehber Sprint boyunca dört kural koyar:

- Sprint Goal'ü **tehlikeye atacak değişiklik yapılmaz**.
- **Kalite düşmez.**
- Product Backlog **gerektikçe inceltilir**.
- Daha çok şey öğrenildikçe **kapsam**, Product Owner ile **netleştirilip yeniden görüşülebilir**.

Dikkat: "Sprint Backlog'a hiçbir şey eklenmez" diye bir kural yoktur. Sprint Backlog Sprint boyunca değişir; korunan şey **Sprint Goal**'dür.

Sprint'in ortasında yemekhane müdürü Nurten Hanım yeni bir rapor ekranı isterse istek Elif'e gider ve **Product Backlog'a** girer; Elif onu sıralar. Sprint Goal "öğrenciler siparişini telefondan verebilsin" ise rapor ekranı bu Sprint'i bölmez.

**Sprint'i iptal** etme yetkisi **yalnızca Product Owner'dadır** ve yalnızca **Sprint Goal geçersiz hale gelirse** anlamlıdır: örneğin yemekhane işletmesi başka bir firmaya geçti ve sipariş özelliği anlamsızlaştıysa. Gerideki bir plan iptal nedeni değildir; kapsam yeniden görüşülür.
`),
      dene: [p("kalite"), p("iptal-nadir")],
    },
    {
      baslik: "Sprint Planning: neden, ne, nasıl",
      metin: md(`
Sprint Planning Sprint'i başlatır ve üç konuyu ele alır:

| Konu | Soru | Kim |
|---|---|---|
| Neden | Bu Sprint neden değerli? | PO önerir, **bütün takım** Sprint Goal'ü tanımlar |
| Ne | Bu Sprint'te ne yapılabilir? | **Developers** PO ile konuşarak öğeleri seçer |
| Nasıl | Seçilen iş nasıl yapılacak? | **Yalnızca Developers** |

Developers ne kadar iş seçeceklerini tahmin ederken **geçmiş performanslarına**, bu Sprint'teki **kapasitelerine** ve **Definition of Done'a** bakar. Squad son üç Sprint'te ortalama 40 puan bitirdiyse ve 12 kişiden 3'ü bir hafta izindeyse, kapasite yaklaşık %87,5'tir; 35 puan civarı makul bir başlangıçtır. Bu kaba bir tahmindir, seçim yine Developers'ındır.

"Nasıl" konusunda öğeler çoğu zaman **bir gün ya da daha kısa** süren işlere ayrılır. Sonuç Sprint Backlog'dur: Sprint Goal, seçilen öğeler ve plan. Takım tavsiye için başkalarını (ör. ödeme entegrasyonu için bilgi işlemden Sinan Bey'i) davet edebilir.

> **Rehber ne der:** Sprint Planning bir aylık Sprint için en fazla **8 saattir**; kısa Sprint'lerde genellikle daha kısadır.
`),
      dene: [p("davet"), p("kapasite-hesap"), p("inceltme-planning")],
    },
    {
      baslik: "Daily Scrum: Sprint Goal'e doğru",
      metin: md(`
Daily Scrum **Developers için** 15 dakikalık bir etkinliktir. Amacı **Sprint Goal'e doğru ilerlemeyi denetlemek** ve Sprint Backlog'u gerektikçe **uyarlamaktır**. Karmaşıklığı azaltmak için her iş günü **aynı saatte ve aynı yerde** yapılır.

PO ve SM, Sprint Backlog'daki öğeler üzerinde aktif çalışıyorlarsa **Developers olarak** katılır. Daily bir durum raporu, yöneticiye hesap verme ya da iş dağıtma toplantısı değildir.

> **Rehber ne der:** 2017 Rehberi'ndeki "dün ne yaptım, bugün ne yapacağım, engelim var mı" soruları 2020'de çıkarıldı. Developers, Sprint Goal'e odaklandığı ve uygulanabilir bir plan ürettiği sürece **istediği yapıyı** seçebilir. Daily, planı uyarlamanın tek fırsatı da değildir; gün içinde gerektikçe bir araya gelinir.

Hangisi Daily'nin amacına hizmet ediyor, hangisi bir durum raporu?

[[G-S6-02]]
`),
      dene: [p("uc-soru"), p("tek-firsat-degil")],
      lab: "daily",
    },
    {
      baslik: "12 kişiyle 15 dakika",
      metin: md(`
Squad'ın Daily'si bir dönem her gün 35 dakika sürüyordu: on iki kişi sırayla ne yaptığını anlatıyordu. Sorun kişi sayısı kadar biçimdeydi. Büyük takımlarda işe yarayan teknikler:

- **Panoyu yürümek:** kişi kişi değil, iş iş ilerle. Sağdan sola, yani Done'a en yakın işten başla: "Bunu bitirmek için ne gerekiyor?"
- **Takılan işe odak:** iki günden uzun aynı sütunda kalan kart konuşulur; ilerleyen işler bir cümleyle geçilir.
- **Park alanı:** ayrıntılı tartışma (ör. bir veritabanı tasarımı) "sonra konuşulacaklar" listesine yazılır ve Daily'den sonra yalnızca ilgili kişilerle yapılır.
- **Sprint Goal'ü görünür tutmak:** panonun tepesine yazılı hedef, konuşmayı ona bağlar.

Bölüm yöneticisi her Daily'ye gelip "bu neden bu kadar sürdü?" diye soruyorsa Daily hesap verme toplantısına dönüşür. Burak'ın işi yöneticiyle konuşup ilgisini Sprint Review'a ve panoya yönlendirmektir.

> **Sahada:** Bu teknikler işe yaramıyorsa squad gerçekten çok büyüktür. Kalıcı çözüm, 5. ünitede gördüğün gibi aynı backlog'u paylaşan iki takıma bölünmektir; her takım kendi Daily'sini yapar.
`),
      dene: [p("uzayan-daily"), p("parking-lot"), p("yonetici")],
    },
    {
      baslik: "Time-box'lar",
      metin: md(`
Her Scrum etkinliğinin bir **time-box**'ı, yani en fazla süresi vardır:

| Etkinlik | Bir aylık Sprint için en fazla |
|---|---|
| Sprint | 1 ay (sabit) |
| Sprint Planning | 8 saat |
| Daily Scrum | 15 dakika (her gün) |
| Sprint Review | 4 saat |
| Sprint Retrospective | 3 saat |

Time-box bir **üst sınırdır**: amacına ulaşan etkinlik erken bitebilir. Sprint bunun istisnasıdır, uzunluğu sabittir. Daily dışındakiler kısa Sprint'lerde genellikle daha kısadır; sahada yaygın kural, Sprint uzunluğuyla **orantılı** küçültmektir (iki haftalık Sprint için Planning 4 saat).

Sprint uzunluğunu değiştir ve etkinliklerin toplam payını gör:

[[G-S6-01]]
`),
      dene: [p("oran")],
      lab: "timebox",
    },
  ],
  test: [
    p("sprint-sure"), p("kapsayici"), p("uzun-risk"), p("kural-hedef"), p("acil-istek"), p("iptal-kim"), p("iptal-ne-zaman"),
    p("uc-konu"), p("goal-kim"), p("ne-girdi"), p("nasil-kim"), p("bir-gun"), p("planning-sure"),
    p("daily-amac"), p("daily-kimin"), p("ayni-yer"), p("daily-sure"), p("review-sure"), p("retro-sure"), p("ust-sinir"),
  ],
};
