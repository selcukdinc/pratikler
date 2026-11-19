import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u8-${ad}`;

export const UNITE_8: Ders = {
  hafta: 8,
  baslik: "Scrum Artefaktları ve Taahhütleri",
  ozet: "Product Backlog, Sprint Backlog ve Increment'i, her birinin taahhüdü olan Product Goal, Sprint Goal ve Definition of Done ile birlikte öğren. Squad için bir DoD kur, bir hikâyenin Done olup olmadığına karar ver ve Rehber'de olmayan Definition of Ready'nin riskini gör.",
  bolumler: [
    {
      baslik: "Üç artefakt, üç taahhüt",
      metin: md(`
Scrum'un artefaktları işi ya da değeri **şeffaf** kılar. Her birinin, ilerlemeyi ölçmek için bir **taahhüdü** vardır:

| Artefakt | Taahhüt | Ne sağlar |
|---|---|---|
| Product Backlog | **Product Goal** | Ürünün nereye gittiği |
| Sprint Backlog | **Sprint Goal** | Bu Sprint'in tek amacı |
| Increment | **Definition of Done** | Neyin gerçekten bittiği |

User story, epic, burndown ve story point bu listede yoktur; onlar sahada yaygın tekniklerdir ([Backlog pratiği](/backlog) ve 9. ünite).

Squad'ın cümlelerini doğru artefakta ya da taahhüde yerleştir:

[[G-S8-02]]
`),
      dene: [p("uc-artefakt")],
      lab: "artefaktlar",
    },
    {
      baslik: "Product Backlog ve Product Goal",
      metin: md(`
Product Backlog, ürünü iyileştirmek için gerekenlerin **ortaya çıkan, sıralı** listesidir ve Scrum Takımı'nın **tek iş kaynağıdır**. Yeni özellikler, hatalar, teknik iyileştirmeler, deneyler: hepsi aynı listede, PO'nun koyduğu sırayla durur.

Squad'da özellikler bir araçta, hatalar başka bir araçta, teknik işler Can'ın defterinde tutulduğunda kimse gerçek sırayı göremiyordu; her liste kendi önceliğini savunuyordu. Tek backlog bu yarışı PO'nun önüne getirir.

**Product Goal** ürünün gelecekteki durumunu anlatır. Squad'ınki: "Dönem sonunda öğrencilerin yarısı yemeğini uygulamadan sipariş edip sırasız alsın." Birkaç Sprint sürer ve Sprint Goal'lerin yönünü verir.

> **Rehber ne der:** Scrum Takımı bir seferde **tek** bir Product Goal'e odaklanır ve bir sonrakine geçmeden önce onu **ya gerçekleştirmeli ya da bırakmalıdır**.
`),
      dene: [p("iki-backlog"), p("pg-ornek")],
    },
    {
      baslik: "Refinement: backlog'u hazır tutmak",
      metin: md(`
**Product Backlog refinement**, öğeleri daha küçük ve kesin parçalara bölme ve onlara açıklama, sıra, büyüklük gibi ayrıntılar ekleme işidir. Rehber'de **ayrı bir etkinlik değildir**; Sprint boyunca sürekli yapılır. Çoğu takım haftada bir saatlik bir refinement oturumu yapar, ama bu bir tercihtir.

- Büyüklüğü **işi yapacak Developers** tahmin eder; PO ödünleşimleri anlamalarına yardım eder.
- Bir Sprint içinde Done yapılabilecek kadar netleşmiş öğeler Sprint Planning'de **seçime hazır** sayılır.

Eski Rehber sürümleri refinement için kapasitenin **%10'unu** geçmemeyi öneriyordu; 2020 Rehberi oran vermez, ama sahada bu oran kaba bir ölçü olarak yaşar. 12 kişilik squad'da iki haftalık Sprint için bu 12 × 10 × 8 × 0,1 = 96 kişi-saattir; hepsinin aynı odada olması gerekmez.

> **Sahada:** Sprint Planning'in yarısı öğeleri anlamaya gidiyorsa refinement yetersizdir. Öğeleri bölmenin teknikleri (INVEST, hikâye bölme kalıpları) 2. pratiğin konusudur.
`),
      dene: [p("refinement-yuzde")],
    },
    {
      baslik: "Sprint Backlog ve Sprint Goal",
      metin: md(`
Sprint Backlog üç parçadır: **neden** (Sprint Goal), **ne** (seçilen öğeler) ve **nasıl** (Increment'i teslim etmenin uygulanabilir planı). **Developers tarafından, Developers için** bir plandır ve Sprint boyunca öğrenildikçe güncellenir.

**Sprint Goal** Sprint'in tek amacıdır. İyi bir Sprint Goal kullanıcıya etkisini anlatır ve esneklik bırakır:

- İyi: "Öğrenciler menüdeki alerjen bilgisini görüp alerjenli yemekleri filtreleyebilsin."
- Kötü: "US-41, US-42, US-47 ve US-52'yi bitirmek." Bu bir liste, amaç değil.

Esnekliğin anlamı şudur: Sprint ortasında "sipariş geçmişi" öğesi beklenenden büyük çıktıysa Developers **Product Owner ile kapsamı yeniden görüşür**; hedef için şart değilse öğe sonraki Sprint'e kalır. Sprint Goal korunur, kalite düşmez.
`),
      dene: [p("sb-guncel"), p("sg-esneklik"), p("sg-ornek")],
    },
    {
      baslik: "Increment ve Definition of Done",
      metin: md(`
**Increment**, Product Goal'e doğru somut bir basamaktır. Her Increment öncekilere eklenir ve hepsinin birlikte çalıştığı **doğrulanır**. Bir Sprint'te birden çok Increment olabilir ve bunlar **Sprint bitmeden** teslim edilebilir.

**Definition of Done**, Increment'in ürün için gereken kalite ölçülerini karşıladığı durumun resmi tarifidir. "Bitti" sözcüğünün herkes için aynı anlama gelmesini sağlar.

> **Rehber ne der:** Bir öğe **ancak DoD'u karşıladığında** Increment'in parçası olur. Karşılamayan iş Sprint Review'da sunulamaz ve **Product Backlog'a döner**.

**Kabul ölçütleri** ile DoD karıştırılmamalıdır: kabul ölçütleri **tek bir öğenin** ne yapması gerektiğini söyler ("alerjenli yemek filtrelenince listeden çıkar"); DoD **her öğe için** ortak kalite çıtasıdır ("test edildi, incelendi, kuruldu").

Squad için bir DoD kur, sonra bir öğenin Done olup olmadığına bak:

[[G-S8-01]]
`),
      dene: [p("coklu-inc"), p("yuzde-90"), p("dod-madde"), p("kabul-dod")],
      lab: "dod",
    },
    {
      baslik: "Organizasyon standardı ve birden çok takım",
      metin: md(`
DoD'un iki katmanı olabilir:

- Organizasyonun bir standardı varsa (ör. "her yayın güvenlik taramasından geçer"), bütün takımlar onu **en az olarak** izler ve üstüne ürüne uygun maddeler ekleyebilir.
- Standart yoksa Scrum Takımı ürüne uygun bir DoD **oluşturmalıdır**.

Squad "Sipariş" ve "Menü" diye ikiye bölündüğünde iki takım **ortak bir DoD'u birlikte tanımlayıp izler**. Aksi halde bir takımın "bitti" dediği iş, ötekinin işiyle birleşince bozulabilir. DoD Retro'da güçlendirilebilir (7. ünite).
`),
      dene: [p("tek-dod")],
    },
    {
      baslik: "Definition of Ready: Rehber'de yok",
      metin: md(`
Birçok takım bir **Definition of Ready** (DoR) kullanır: bir öğenin Sprint'e alınmadan önce karşılaması gereken koşullar (kabul ölçütleri yazıldı, bağımlılıklar biliniyor, tasarım taslağı var).

> **Rehber ne der:** DoR Rehber'de **geçmez**. Rehber yalnızca bir Sprint içinde Done yapılabilecek öğelerin "seçime hazır" sayıldığını söyler. Taahhütler üçtür: Product Goal, Sprint Goal, DoD.

DoR bir **kontrol listesi** olarak yardımcı olabilir. Riski, katı bir **kapıya** dönüşmesidir: tasarım, bütün ayrıntılar ve onay Sprint'ten önce tamamlanmadan hiçbir öğe alınmıyorsa analiz Sprint'in dışına taşınır ve Sprint küçük bir waterfall'a döner. Manifesto'nun "müşteriyle iş birliği" ve "değişime karşılık vermek" değerleri bu kapının önünde bekler.

> **Sahada:** DoR'u sorun çıktıkça Retro'da konuşup kısa tutmak, onu bir onay kapısı değil bir hatırlatma olarak kullanmak işe yarar.
`),
      dene: [p("dor-risk")],
    },
  ],
  test: [
    p("tek-kaynak"), p("pg-tanim"), p("pg-tek"), p("refinement-tanim"), p("kim-boyut"), p("secime-hazir"),
    p("sb-ucu"), p("sb-kimin"), p("sg-tanim"), p("inc-tanim"), p("dod-tanim"), p("dod-seffaflik"),
    p("org-standart"), p("dor-rehber"), p("rehber-disi"),
  ],
};
