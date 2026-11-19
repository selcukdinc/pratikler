import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u6-${ad}`;

export const UNITE_6: Ders = {
  hafta: 6,
  baslik: "Kabul Kriterleri",
  ozet: "Bir story'nin ne zaman tamam olduğunu yazmayı öğren: kural listesi ve Given/When/Then, BDD ve Specification by Example, Example Mapping ve Three Amigos; kabul kriterini Definition of Done'dan ayır, ölçülebilir yaz, olumsuz yolları ve kenar durumları unutma.",
  bolumler: [
    {
      baslik: "Kabul kriteri nedir?",
      metin: md(`
Kabul kriterleri bir story'nin **kabul edilmesi için sağlaması gereken, test edilebilir koşullardır**. 3C'deki Confirmation'ın bugünkü en yaygın biçimidir (4. ünite).

Üç soruyla çerçeveleyelim:

- **Neyi tanımlar?** O story'ye özgü davranışı: hangi durumda ne olmalı? Bütün öğelere uyan kalite standardı ayrı bir şeydir: Definition of Done (bu ünitenin sonunda).
- **Ne zaman yazılır?** Story'nin sırası yaklaşınca, refinement'ta. Çok erken yazılırsa eskir (buzdağı); Sprint'te yazılırsa belirsizlik Sprint'e taşınır.
- **Kim yazar?** Rehber kabul kriterinden söz etmez; ne istendiğinden Product Owner hesap verir. Sahada en iyi kabul kriterleri Product Owner, bir geliştirici ve bir test uzmanının **birlikte** yazdıklarıdır.

> **Sahada:** Squad'da Elif story'yi taslak kabul kriterleriyle refinement'a getiriyor; Deniz "ne bozulabilir?", Ayşe "bunu nasıl yaparız?" diye soruyor. Toplantı bittiğinde kriterlerin yarısı değişmiş oluyor; bu iyi bir işaret.
`),
      dene: [p("nedir"), p("ne-zaman"), p("confirmation")],
    },
    {
      baslik: "Kural listesi",
      metin: md(`
En basit biçim, kuralları tek cümleler hâlinde sıralamaktır:

> **Sahada:** *Kartla bakiye yükleme.* Yüklenecek tutar en az 20, en çok 500 TL olabilir. Başarılı yüklemeden sonra bakiye hemen güncellenir. Öğrenciye e-posta makbuzu gider. Kart reddedilirse bakiye değişmez ve neden gösterilir.

Kural listesi kısa ve okunaklıdır. Kurallar basit ve birbirinden bağımsızsa en iyi seçimdir. Davranış adımlı bir akışa, bir durum değişikliğine bağlıysa ya da kriterler otomatik teste dönüşecekse senaryo biçimi (sonraki bölüm) daha nettir.

Bir uyarı işareti: **çok sayıda** kabul kriteri. Bir story'nin 18 kriteri varsa büyük olasılıkla birden çok iş kuralını ya da yolu tek story'ye sıkıştırıyorsundur. Kurallar bölme için iyi bir başlangıçtır: her kural (ya da kural grubu) ayrı bir story olabilir (7. ünite).
`),
      dene: [p("liste"), p("sayisi")],
    },
    {
      baslik: "Given/When/Then",
      metin: md(`
Senaryo biçimi davranışı üç parçayla anlatır:

- **Given (verilen):** başlangıç durumu, bağlam.
- **When (olduğunda):** eylem ya da olay.
- **Then (o zaman):** beklenen, gözlenebilir sonuç.

> **Sahada:** *Verilen* öğrencinin bakiyesi 30 TL; *olduğunda* öğrenci 45 TL'lik menüyü ayırtmak istediğinde; *o zaman* ayırtma yapılmaz ve "15 TL eksik" mesajı görünür.

Bu kalıbın düz metin yazımına **Gherkin** denir; Feature, Scenario, Given, When, Then, And gibi anahtar kelimeleri vardır ve Cucumber gibi araçlar bu senaryoları otomatik test olarak çalıştırır. Türkçe anahtar kelimeleri de bulunur.

İyi bir senaryonun üç alışkanlığı:

1. **Tek davranış.** Birden çok When ("ayırttığında ve sonra iptal ettiğinde") çoğunlukla iki senaryodur.
2. **İş dili.** "Menü butonuna tıklayıp tarihi seçip Ayırt'a bastığında" gibi arayüz adımları senaryoyu kırılgan yapar ve asıl kuralı gizler. "Ayırtmak istediğinde" yeter.
3. **Gözlenebilir sonuç.** "Menü hızlı ve düzgün görünür" test edilemez.

[[G-S6-01]]
`),
      dene: [p("sira"), p("eksik"), p("tek-davranis")],
      lab: "gherkin",
    },
    {
      baslik: "BDD ve örneklerle şartname",
      metin: md(`
Given/When/Then'in arkasında bir yaklaşım var. Dan North 2006'daki "Introducing BDD" yazısıyla **Behaviour-Driven Development**'ı tanıttı: davranışı örneklerle tarif et, bu örnekleri test olarak çalıştır. Kalıbın kendisi North ile Chris Matts'in çalışmalarından gelir.

Gojko Adzic'in **Specification by Example** (2011) kitabı aynı fikri gereksinim tarafından ele alır: soyut kurallar farklı okunur; **somut örnekler** yanlış anlamayı ortaya çıkarır.

Elif "burs öğrencileri indirimli öder" kuralını yazdı. Deniz bir örnek istedi ve sorular hemen çıktı:

- İndirim yüzde mi, sabit tutar mı?
- Ek yemekte (tatlı, içecek) de geçerli mi?
- Burs dönem ortasında biterse ayırtılmış yemekler ne olur?

Bu sorular örnek yazmasaydı Sprint'in ortasında, kod yazılırken çıkacaktı. Örnekler bir kez netleşince otomatik testlere ve **canlı belgeye** dönüşür: kuralların ne olduğunu kod değiştikçe güncel kalan örnekler anlatır.
`),
      dene: [p("bdd-kim"), p("sbe")],
    },
    {
      baslik: "Example Mapping",
      metin: md(`
Matt Wynne 2015'te örnek konuşmasını kısa ve yapılandırılmış hâle getiren bir teknik önerdi: **Example Mapping**. Dört renk kart kullanılır:

| Kart | Ne yazılır |
|---|---|
| **Sarı** | Story (masanın üstünde tek kart) |
| **Mavi** | Kurallar: kabul kriterlerinin her biri |
| **Yeşil** | Örnekler: her kuralın altında onu gösteren somut durumlar |
| **Kırmızı** | Sorular: kimsenin cevaplayamadığı, birine sorulması gerekenler |

Oturum kısadır; Wynne story başına yaklaşık **25 dakika** önerir. Masanın sonundaki görüntü bir teşhis verir:

- **Çok kırmızı:** story henüz anlaşılmamış; önce cevaplar bulunmalı.
- **Çok mavi:** story büyük; kurallara göre bölünebilir.
- **Az kart, hepsi yeşil ve mavi:** story Sprint'e hazır.
- **Süre yetmedi:** story ya büyük ya belirsiz.

[[G-S6-02]]
`),
      dene: [p("renkler"), p("kirmizi-cok")],
      lab: "example-mapping",
    },
    {
      baslik: "Three Amigos",
      metin: md(`
Kabul kriterini kimin yazacağı sorusunun en pratik cevabı **Three Amigos**'tur: bir story'yi üç bakış açısının birlikte konuştuğu kısa toplantı.

- **İş:** ne isteniyor, neden? (Product Owner ya da paydaş)
- **Geliştirme:** nasıl yapılır, ne zor? (bir geliştirici)
- **Test:** nasıl doğrulanır, ne bozulabilir? (bir test uzmanı)

Kişi sayısı üç olmak zorunda değildir; önemli olan üç bakış açısının da masada olmasıdır.

Squad'da test uzmanları story'leri eskiden Sprint'in son günlerinde görüyordu. Deniz'in "bakiye eksiye düşerse ne olur?" sorusu o zaman bir **hata** oluyordu. Şimdi aynı soru refinement'ta soruluyor ve bir **kabul kriteri** oluyor. Aynı soru, iki farklı maliyet.

> **Sahada:** Three Amigos ayrı bir toplantı olmak zorunda değil; refinement'ın içinde, her story için 10-15 dakikalık bir konuşma olarak da yapılabilir. Example Mapping bu konuşmanın en sık kullanılan aracıdır.
`),
      dene: [p("kimler"), p("test-gec")],
    },
    {
      baslik: "Kabul kriteri ve Definition of Done",
      metin: md(`
İki kavram sık karışır; farkları basittir:

| | Kabul kriteri | Definition of Done |
|---|---|---|
| Kapsam | **O story'ye** özgü | **Bütün** öğeler için ortak |
| Konu | İşlevsel davranış | Kalite ölçütleri |
| Rehber'de | Yok | Var: Increment'in taahhüdü |
| Örnek | "Ayırtma yemekten 30 dakika öncesine kadar iptal edilebilir." | "Kod incelendi, otomatik testler geçti, erişilebilirlik denetlendi." |

Bir öğe ancak **ikisini birden** karşılarsa Done olur. Kabul kriterleri sağlandı ama kod incelenmediyse Done değildir; kod incelendi ama iptal kuralı çalışmıyorsa da Done değildir.

> **Sahada:** Her story'ye "kod incelendi" yazmak bir koku işaretidir: DoD'de olması gereken bir madde kabul kriterlerine kopyalanıyordur. Tersi de olur: "Bakiye 10 TL'nin altına inince bildirim gider" DoD'ye yazılmaz, çünkü yalnızca bir story'yi ilgilendirir.
`),
      dene: [p("fark"), p("hangisi-1")],
    },
    {
      baslik: "Ölçülebilir, olumsuz ve sınırda",
      metin: md(`
İyi kabul kriterlerinin üç alışkanlığı:

**Ölçülebilir yaz.** "Bildirim makul bir sürede gelmelidir" kişiden kişiye değişir. "Bildirim sipariş hazırlandıktan sonra 10 saniye içinde gelir" test edilebilir.

**Olumsuz yolları unutma.** Kabul kriterleri çoğu zaman yalnızca mutlu yolu anlatır: kart kabul edildi, bakiye yüklendi. Hatalar ise en çok olumsuz yollarda çıkar: kart reddedildi, bağlantı koptu, öğrenci düğmeye iki kez bastı. Test uzmanının "ne bozulabilir?" sorusu bu yüzden değerlidir.

**Sınırdaki örneği yaz.** "Yükleme en az 20, en çok 500 TL" kuralının örnekleri 100 ya da 250 TL değil, **sınırın tam üstü ve hemen yanıdır**: 19,99 / 20 / 500 / 500,01. Hatalar en sık sınırlarda çıkar.

> **Sahada:** Squad'ın kabul kriteri alışkanlığı: her story'de en az bir olumsuz yol ve kural sayıysa en az bir sınır örneği. Deniz bunu refinement'ta sorar; cevap yoksa kırmızı kart olur.
`),
      dene: [p("belirsiz"), p("olumsuz-yol"), p("kenar")],
    },
  ],
  test: [
    p("kim"), p("ne-zaman-kural"), p("gherkin"), p("ornek-gucu"), p("mavi-cok"), p("sure"), p("hangisi-2"),
  ],
};
