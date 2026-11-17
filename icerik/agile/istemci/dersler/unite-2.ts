import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u2-${ad}`;

export const UNITE_2: Ders = {
  hafta: 2,
  baslik: "Agile Manifesto ve 12 İlke",
  ozet: "Manifesto'nun dört değer cümlesini, \"sağdakilerin de değeri var\" cümlesinin önemini ve 12 ilkeyi Kampüs Yemekhanesi squad'ının sahneleriyle gör; agile hakkındaki yaygın yanılgıları ayıkla.",
  bolumler: [
    {
      baslik: "Dört değer cümlesi",
      metin: md(`
Manifesto kısadır: bir giriş cümlesi, dört değer cümlesi ve bir kapanış cümlesi. Türkçe özetiyle:

> **Rehber ne der:** Yazılım geliştirmenin daha iyi yollarını, yaparak ve başkalarına yardım ederek ortaya çıkarıyoruz. Bu çalışmayla şunlara değer vermeye vardık:
> - **Bireyler ve etkileşimleri**, süreçlerden ve araçlardan
> - **Çalışan yazılımı**, kapsamlı dokümantasyondan
> - **Müşteriyle iş birliğini**, sözleşme pazarlığından
> - **Değişime karşılık vermeyi**, bir planı takip etmekten
>
> Yani sağdaki maddelerin de değeri olmakla birlikte, soldakilere daha çok değer veriyoruz.

(Manifesto'nun metni, bildirim olduğu gibi korunarak serbestçe kopyalanabilir; burada anlamı korunan bir Türkçe özet var. Özgün metin agilemanifesto.org'da.)

Her cümle bir **çatışma anında** neyin öne geçeceğini söyler. Squad yeni bir proje aracına geçerken "önce bütün iş akışlarını tanımlayalım" mı diyor, yoksa önce takımın nasıl çalıştığına mı bakıyor? Sprint Review'da slayt mı gösteriliyor, yoksa öğrenciler gerçek telefonda sipariş mi veriyor?

[[G-S2-01]]
`),
      dene: [p("terazi-arac")],
      lab: "manifesto",
    },
    {
      baslik: "Sağdakilerin de değeri var",
      metin: md(`
Manifesto'nun en çok atlanan cümlesi sonuncusudur: **sağdaki maddelerin de değeri vardır.** Manifesto bir yasak listesi değil, bir tercih sıralamasıdır.

- Agile takımlar **dokümantasyon yazar**: API belgesi, mimari karar kaydı, kullanım kılavuzu. Yazmadıkları, kimsenin okumayacağı 120 sayfalık bir gereksinim belgesidir.
- Agile takımlar **plan yapar**, hem de sık. Fark, planın yeni bilgiyle değişebilmesidir.
- Agile işlerde **sözleşme** vardır. Fark, ilişkinin madde madde hak aramaya değil, doğru ürünü birlikte bulmaya dayanmasıdır.
- Agile takımlar **süreç ve araç** kullanır; Scrum'un kendisi bir süreç çerçevesidir. Araç, takımın çalışmasına hizmet ettiği sürece değerlidir.

> **Sahada:** "Manifesto'da yazıyor, dokümantasyon gereksiz" diyen biri cümlenin yarısını okumuştur. Doğru soru şudur: bu belgeyi kim okuyacak ve ona ne kazandıracak?
`),
      dene: [p("dokuman-yok")],
    },
    {
      baslik: "İlkeler 1-3: erken, sık ve değişime açık teslim",
      metin: md(`
Dört değerin arkasında 12 ilke vardır. Onları dört gruba ayırmak akılda tutmayı kolaylaştırır. İlk üç ilke **teslim** hakkındadır:

1. En yüksek önceliğimiz, değerli yazılımı **erken ve sürekli** teslim ederek müşteriyi memnun etmektir.
2. Değişen gereksinimleri, geliştirmenin **geç aşamalarında bile** memnuniyetle karşılarız; agile süreçler değişimi müşterinin rekabet avantajı için kullanır.
3. Çalışan yazılımı **birkaç haftadan birkaç aya** uzanan aralıklarla, kısa olanı tercih ederek sık sık teslim edin.

Kampüs Yemekhanesi squad'ı ilk iki haftanın sonunda öğrencilerin menüyü telefondan görebildiği küçük bir sürüm çıkarır. Son aya gelinmişken yeni yönetmelikle alerjen bilgisi zorunlu olur; squad bunu bir felaket değil, ürünü daha değerli yapan bir bilgi olarak backlog'un başına alır.

> **Sahada:** İkinci ilke "Sprint'in ortasında her isteği hemen yap" demek değildir. Scrum'da değişim **Product Backlog'a** girer ve sıradaki Sprint'te ele alınır; çalışan Sprint'in hedefi korunur (6. ünite).
`),
      dene: [p("gec-degisiklik")],
    },
    {
      baslik: "İlkeler 4-6: insanlar ve iletişim",
      metin: md(`
Sonraki üç ilke **insanlar** hakkındadır:

4. İş insanları ve geliştiriciler proje boyunca **her gün** birlikte çalışmalıdır.
5. Projeleri **motive bireylerin** etrafında kurun. Onlara ihtiyaç duydukları ortamı ve desteği verin ve işi bitireceklerine güvenin.
6. Bir geliştirme takımına ve takım içinde bilgi aktarmanın en verimli ve etkili yolu **yüz yüze konuşmadır**.

Yemekhane müdürü Nurten Hanım'ın squad'ın sorularına aynı gün cevap verebilmesi, bir gereksinimin haftalarca e-postada beklemesinden çok daha hızlıdır. Uzun bir e-posta zinciri yerine on dakikalık bir görüntülü görüşme, altıncı ilkenin bugünkü uygulamasıdır.

> **Sahada:** 12 kişilik büyük bir squad'da altıncı ilke kendiliğinden zorlaşır: herkesin herkesle konuşabileceği yol sayısı 66'dır. Büyük takımlarda bilgi bu yüzden birkaç kişide kalır; 4. ve 5. üniteler bu soruna döner.
`),
      dene: [p("yuz-yuze")],
    },
    {
      baslik: "İlkeler 7-10: ilerleme, hız ve sadelik",
      metin: md(`
Dört ilke **ilerlemenin nasıl ölçüleceği ve sürdürüleceği** hakkındadır:

7. **Çalışan yazılım** ilerlemenin birincil ölçüsüdür.
8. Agile süreçler **sürdürülebilir** geliştirmeyi destekler. Sponsorlar, geliştiriciler ve kullanıcılar sabit bir hızı süresiz koruyabilmelidir.
9. **Teknik mükemmelliğe** ve iyi tasarıma sürekli özen çevikliği artırır.
10. **Sadelik**, yapılmayan işin miktarını en çoklama sanatıdır ve vazgeçilmezdir.

Yedinci ilke "yüzde 90 bitti" raporlarının neden bir şey söylemediğini açıklar: bitmemiş iş, kullanılamayan iştir. Sekizinci ilke fazla mesaiyle tutturulan hedeflere karşıdır; yorgun bir takım hata yapar ve gerçek kapasitesi görünmez olur. Dokuzuncu ilke, değişimi ucuz tutan şeyin temiz tasarım ve test olduğunu hatırlatır. Onuncu ilke en verimli işin **yapılmayan** iş olduğunu söyler: kimsenin kullanmayacağı rapor ekranını yapmamak.

> **Sahada:** Bir squad üç Sprint'tir hafta sonu çalışarak hedefleri tutturuyor ve yönetim bunu "bağlılık" diye övüyorsa, sekizinci ilke çiğneniyor demektir. Doğru tepki, Sprint'e daha az iş almaktır.
`),
      dene: [p("ilerleme-olcusu"), p("surdurulebilir")],
    },
    {
      baslik: "İlkeler 11-12: kendini yöneten ve yansıtan takım",
      metin: md(`
Son iki ilke **takımın kendisi** hakkındadır:

11. En iyi mimariler, gereksinimler ve tasarımlar **kendi kendini örgütleyen takımlardan** ortaya çıkar.
12. Takım, düzenli aralıklarla nasıl daha etkili olabileceği üzerine **düşünür** ve davranışını buna göre ayarlar.

On ikinci ilkenin Scrum'daki karşılığı Sprint Retrospective'tir (7. ünite). On birinci ilke 2020 Scrum Rehberi'nde daha da güçlendi: takımlar artık "kendi kendini yöneten" (self-managing) diye tanımlanıyor.

On iki sahneyi dört gruba ayır:

[[G-S2-02]]
`),
      dene: [p("kendini-orgutleyen")],
      lab: "ilkeler",
    },
    {
      baslik: "Yanılgılar: agile ne değildir?",
      metin: md(`
Manifesto'nun kısa olması, ona olmayan anlamlar yüklenmesini kolaylaştırdı. En yaygın yanılgılar:

- **"Agile = Scrum."** Scrum agile değerlerle uyumlu çerçevelerden biridir; Kanban, XP, Crystal ve başkaları da agile'dır. Scrum Rehberi'nde "agile" kelimesi hiç geçmez.
- **"Agile hızlıdır."** Agile aynı işi sihirli biçimde hızlandırmaz. Kazanç, değerin erken gelmesi, yanlış yönün erken fark edilmesi ve gereksiz işin hiç yapılmamasıdır.
- **"Agile'da dokümantasyon ve plan yoktur."** İkisi de vardır; yalnızca öncelik sırası farklıdır.
- **"Her ekip iki haftalık sprint yapmalıdır."** Manifesto belirli bir süre, toplantı ya da rol dayatmaz. "Sprint" kelimesi bile Scrum'dan gelir.
- **"Agile yalnızca yazılım içindir."** Manifesto yazılım için yazıldı, ama fikirleri pazarlamada, donanımda ve eğitimde de kullanılıyor.

[[G-S2-03]]
`),
      dene: [p("agile-hizli")],
    },
  ],
  test: [
    p("bireyler"), p("calisan-yazilim"), p("musteri"), p("degisim"), p("deger-sayisi"), p("sag-deger"), p("plan-yok"),
    p("en-yuksek-oncelik"), p("teslim-araligi"), p("her-gun"), p("motive"), p("teknik-mukemmellik"), p("sadelik"),
    p("yansitma"), p("agile-scrum"), p("agile-ilke-mi"),
  ],
};
