import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u11-${ad}`;

export const UNITE_11: Ders = {
  hafta: 11,
  baslik: "Refinement ve Hazır Olma",
  ozet: "Refinement'ı bir onay bürokrasisine dönüştürmeden işlet: Rehber'deki yeri, bir oturumun akışı, Definition of Ready ve kapı bekçisi tuzağı, story onay akışlarının faydası ve riski, araçtaki durumlar ve backlog'u temiz tutmak.",
  bolumler: [
    {
      baslik: "Refinement Rehber'de",
      metin: md(`
> **Kaynak ne der:** Product Backlog refinement, öğeleri daha küçük ve daha kesin öğelere bölme ve daha ayrıntılı tanımlama eylemidir. Açıklama, sıra ve büyüklük gibi ayrıntılar ekleyen **süren bir etkinliktir**. Bir Sprint içinde Done yapılabilecek öğeler Sprint Planning'de seçilmeye **hazır** sayılır.

Üç şeye dikkat:

1. Refinement beş Scrum etkinliğinden biri **değildir**. Takımlar onu haftalık bir toplantıya bağlayabilir; Rehber bunu şart koşmaz.
2. Rehber'in "hazır" tanımı tek cümledir: bir Sprint içinde Done yapılabilecek öğe. **Definition of Ready** ve **onay akışları** Rehber'de yoktur.
3. Eski Rehber sürümleri (2013-2017) refinement'ın "genellikle kapasitenin %10'undan fazlasını almadığını" söylüyordu. 2020'de bu sayı kalktı; sahada hâlâ iyi bir başlangıç ölçüsüdür.
`),
      dene: [p("tanim"), p("etkinlik-mi"), p("yuzde-on")],
    },
    {
      baslik: "Bir refinement oturumu",
      metin: md(`
İyi bir oturum **sıranın üstüne** odaklanır: önümüzdeki bir iki Sprint'te yapılacak öğeler. Aylar sonra yapılacak bir öğeyi bugün ayrıntılandırmak, değişince boşa gider (buzdağı, 1. ünite).

Katılanlar: Product Owner ve **işi yapacak Developers**; gerekiyorsa alan bilgisi olan bir paydaş. Konuşmaya katılmayanlara ortak anlayış ulaşmaz.

Bir story için tipik sıra:

1. **Neden ve kim?** Kimin hangi sorunu çözülüyor?
2. **Kabul kriterleri ve örnekler** (Example Mapping, 6. ünite)
3. Büyükse **böl** (7. ünite)
4. **Tahmin** (9. ünite)

Görevlere bölmek ve saat yazmak refinement'ın değil Sprint Planning'in işidir.

> **Sahada:** Squad'ın refinement'ı haftada bir, 75 dakika. Son 10 dakika listenin altına ayrılıyor: eskimiş öğeler kapatılıyor (bu ünitenin sonunda).
`),
      dene: [p("kac-sprint"), p("kimler-katilir")],
    },
    {
      baslik: "Definition of Ready",
      metin: md(`
**Definition of Ready (DoR)** bir öğenin Sprint'e alınmadan önce sağlaması beklenen koşulların listesidir. Squad'ın DoR'u:

- Story INVEST'e uyuyor; en zayıf harfi konuşuldu.
- Kabul kriterleri yazıldı ve test uzmanı nasıl doğrulayacağını biliyor.
- Takım tahmin etti ve bir Sprint'e sığdığına inanıyor.
- Dış bağımlılık yok ya da çözüldü.

DoR ile DoD karışmasın: DoR işin **başlamaya** hazır olduğunu, DoD işin **bittiğini** söyler. Kabul kriteri ise tek bir story'nin davranışıdır.

| | Ne zaman bakılır? | Kapsam | Rehber'de |
|---|---|---|---|
| DoR | Sprint'e almadan önce | Bütün öğeler | Yok |
| DoD | Öğe bittiğinde | Bütün öğeler | Var: Increment'in taahhüdü |
| Kabul kriteri | Öğe bittiğinde | O story | Yok |

[[G-S11-01]]
`),
      dene: [p("dor-nedir"), p("dor-rehber")],
      lab: "hazir-mi",
    },
    {
      baslik: "Kapı bekçisi tuzağı",
      metin: md(`
DoR faydalıdır, ta ki bir **kapıya** dönüşene kadar: "Her madde işaretlenmeden hiçbir öğe Sprint'e giremez."

O zaman olan şey tanıdıktır: her şeyin önceden tamamen belirlenmesi istenir, öğeler onay kuyruğunda bekler, takım belirsizlikle Sprint içinde çalışmayı unutur. Bu, küçük bir **şelaleye** geri dönüştür. INVEST'te gördüğümüz tuzağın aynısı (5. ünite).

> **Sahada:** Elif'in Sprint Goal için kritik bir story'sinde bir kabul kriteri hâlâ belirsiz. Katı DoR "alma" der. Squad'ın kararı: belirsiz kısım ayrı bir story'ye bölündü, kalan kısım Sprint'e girdi; belirsizlik Sprint'in ilk iki gününde paydaşla çözüldü.

DoR'u sağlıklı tutmanın yolu onu **kısa** tutmak ve bir rehber gibi kullanmaktır. Bir maddesi sürekli esneyen DoR, o maddenin gereksiz olduğunu söylüyor olabilir.
`),
      dene: [p("kapi")],
    },
    {
      baslik: "Story onay akışları",
      metin: md(`
Bazı organizasyonlarda Product Owner'ın yazdığı story'ler bir teknik liderlik grubunun onayından geçer. Squad'da da böyle: Elif'in story'leri Teknik Liderlik'e (Tribe Lead Zeynep Hanım, baş mimar Levent Bey) gider.

**Faydası:** birden çok takımı etkileyen mimari riskler, ortak servisler ve bağımlılıklar erken görülür.

**Riski:** story'ler kuyrukta bekler. Haftada bir toplanan bir kurul, her story için iki haftaya kadar bekleme demektir. Geri bildirim gecikir, refinement'taki ortak anlayış soğur.

**Rehber'le ilişkisi:** Rehber onay akışı tanımlamaz. Product Owner, Product Backlog yönetimini başkasına yaptırabilir ama **hesap verebilirlik onda kalır**. Onay bir girdi olabilir, karar yeri değil.

Akışı hafif tutmanın yolları:

- Yalnızca riskli story'leri (mimari, güvenlik, ortak servis) onaya götürmek.
- Onaylayanı refinement'a çağırmak; onay aynı konuşmada verilsin.
- Tekrar eden geri dönüş nedenlerini süreçte düzeltmek: "kabul kriteri test edilemez" notu sık geliyorsa kriterler test uzmanıyla birlikte yazılır.

> **Sahada:** **Backlog Atölyesi**'nde backlog'u Teknik Liderlik'e gönderirsin; yatay dilim, test edilemeyen kriter, eksik olumsuz yol ya da konuşulmamış bir risk varsa notlarla geri döner. 5. görev onayı ilk turda almayı ister.
`),
      dene: [p("onay-fayda"), p("onay-risk")],
    },
    {
      baslik: "Araçta durumlar",
      metin: md(`
Jira, Azure Boards gibi araçlarda bir story'nin backlog tarafındaki yolculuğu durumlarla görünür:

> Yeni → İnceleniyor → Hazır → Sprint'te

Durumlar refinement'ın ilerlemesini gösterir. Ama her durum bir **bekleme yeri** ve çoğu zaman bir **devir teslimdir**. Dokuz durumdan geçen bir story, dokuz kez birinin onu almasını bekler.

> **Sahada:** Squad'ın aracında eskiden "Analizde", "Analiz onayında", "Mimari incelemede", "Tasarımda", "Tasarım onayında"... vardı. Bugün dört durum var; onay ve mimari inceleme "İnceleniyor"un içinde, refinement konuşmasında yapılıyor.
`),
      dene: [p("durum-sirasi")],
    },
    {
      baslik: "Backlog'u temiz tutmak",
      metin: md(`
Dokunulmamış yüzlerce öğe (backlog mezarlığı, 1. ünite) gerçek sırayı gizler ve her refinement'ı yavaşlatır.

İki alışkanlık işe yarar:

- **Cesurca kapat.** Product Goal'e katkısı olmayan, aylardır dokunulmamış öğeler kapatılır. Önemliyse paydaş onu yeniden getirir; o zaman da güncel hâliyle gelir.
- **Az ve sık temizle.** Her refinement'ın birkaç dakikası alttaki öğelere ayrılır. Yılda bir yapılan dev temizlik toplantısı hem yorucu hem geç kalmıştır.

Ayrı bir "bir gün" listesi açmak çözüm değildir: mezarlığın adını değiştirir.
`),
      dene: [p("ne-siklikla")],
    },
  ],
  test: [
    p("hazir-rehber"), p("akis"), p("dor-madde"), p("esnek"), p("onay-rehber"), p("geri-donen"), p("cok-durum"), p("eski-oge"),
  ],
};
