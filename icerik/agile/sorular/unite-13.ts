// 13. ünite (Takımdan Organizasyona): bir ürün birden çok takım, Nexus, LeSS, SAFe ve
// Epic/Feature terimlerinin kökeni, Spotify modeli, yöneticinin rolü, sertifikalar.
import { sorular, type Soru } from "./yardimci.ts";

const U = 13;

export const unite13: Soru[] = [
  ...sorular(U, "u13-coklu-takim", [
    {
      ad: "tek-pb",
      soru: "Scrum Rehberi'ne göre aynı ürün üzerinde çalışan birden çok Scrum Takımı neyi paylaşmalıdır?",
      secenekler: [
        "Aynı Product Goal, Product Backlog ve Product Owner",
        "Aynı Scrum Master ve herkesin katıldığı tek Daily",
        "Aynı Sprint Backlog ve aynı Developers listesi",
        "Yalnızca aynı Definition of Ready ve aynı araç",
      ],
      aciklama: "Rehber: takımlar aynı ürüne odaklanıyorsa aynı Product Goal'ü, Product Backlog'u ve Product Owner'ı paylaşmalıdır. Her takımın kendi Sprint Backlog'u ve Daily'si vardır.",
      etiket: "rehber",
    },
    {
      ad: "ortak-dod",
      dy: true,
      soru: "Aynı ürün üzerinde çalışan birden çok Scrum Takımı, Increment için ortak bir Definition of Done'a uymalıdır.",
      aciklama: "Doğru. Rehber: birden çok takım aynı ürün üzerinde çalışıyorsa ortak bir DoD tanımlamalı ve ona uymalıdır. Takımlar daha sıkı maddeler ekleyebilir.",
      etiket: "rehber",
    },
    {
      ad: "entegrasyon",
      zorluk: 2,
      soru: "Üç squad her Sprint kendi parçasını \"Done\" ilan ediyor, ama parçalar ancak birkaç Sprint sonra bir araya getirilip deneniyor. En büyük risk hangisidir?",
      secenekler: [
        "Ürün düzeyinde çalışan bir Increment olmaz, sorunlar geç çıkar",
        "Takımların Daily Scrum saatleri birbiriyle çakışmaya başlar",
        "Product Backlog'un üç ayrı listeye bölünmesi gerekir",
        "Takımların velocity'leri birbirinden farklı çıkar",
      ],
      aciklama: "Değer, entegre ve çalışan üründe ortaya çıkar. Ölçekli çerçevelerin hepsi (Nexus'un entegre Increment'i, LeSS'in tek ürün Increment'i) her Sprint entegrasyonu zorunlu tutar.",
      etiket: "senaryo",
    },
    {
      ad: "ozellik-takimi",
      zorluk: 2,
      soru: "\"Feature team\" (özellik takımı) ile \"component team\" (bileşen takımı) arasındaki fark nedir?",
      secenekler: [
        "Özellik takımı bir müşteri özelliğini uçtan uca bitirebilir; bileşen takımı sistemin tek katmanına bakar",
        "Özellik takımı yalnızca yeni özellik, bileşen takımı yalnızca hata düzeltme yapar",
        "Özellik takımının Scrum Master'ı yoktur, bileşen takımının vardır",
        "İkisi aynı şeyin farklı adlarıdır",
      ],
      aciklama: "Bileşen takımlarında (arayüz takımı, servis takımı, veritabanı takımı) her özellik birkaç takıma dokunur ve bağımlılık doğar. Özellik takımı çapraz işlevlidir; LeSS bunu temel ilke sayar. Bağımlılık panosu deneyi farkı sayılarla gösterir.",
    },
  ]),
  ...sorular(U, "u13-nexus", [
    {
      ad: "nexus-tanim",
      soru: "Nexus nedir?",
      secenekler: [
        "Scrum.org'un 3-9 Scrum Takımı için tanımladığı ölçekli çerçeve",
        "Spotify'ın tribe'larını yönetmek için yazdığı iç araç",
        "SAFe'in en üst portföy katmanına verilen ad",
        "Kanban Rehberi'nin çok takımlı ekip sürümü",
      ],
      aciklama: "Nexus, Ken Schwaber ve Scrum.org'un ölçekli Scrum çerçevesidir. Scrum'ı değiştirmeden üstüne ince bir katman ekler; odağı takımlar arası bağımlılık ve entegrasyondur.",
    },
    {
      ad: "nit",
      zorluk: 2,
      soru: "Nexus'ta entegre Increment'in her Sprint üretilmesinden hesap verebilir olan yapı hangisidir?",
      secenekler: ["Nexus Entegrasyon Takımı", "Product Owner'lar kurulu", "Agile Release Train", "Chapter"],
      aciklama: "**Nexus Integration Team** PO, bir Scrum Master ve takımlardan üyelerden oluşur. Entegrasyon işini kendisi yapmak zorunda değildir; engelleri görünür kılar ve takımların entegre olmasını sağlar.",
    },
    {
      ad: "nexus-review",
      dy: true,
      soru: "Nexus'ta takımlar ayrı ayrı Sprint Review yapmaz; entegre Increment birlikte, tek bir Nexus Sprint Review'da denetlenir.",
      aciklama: "Doğru. Nexus Sprint Review, takımların Sprint Review'larının yerini alır, çünkü paydaşlar parçaları değil bütünü görmelidir.",
    },
  ]),
  ...sorular(U, "u13-less", [
    {
      ad: "less-tek",
      soru: "LeSS'te (Large-Scale Scrum) birden çok takım için neler tektir?",
      secenekler: [
        "Bir PO, bir Product Backlog, ortak Sprint ve tek Increment",
        "Her takımın ayrı PO'su ve ayrı bir Product Backlog'u",
        "Bir Scrum Master ve bütün takımların ortak tek Daily'si",
        "Her takım için ayrı ve bağımsız bir Sprint uzunluğu",
      ],
      aciklama: "LeSS (Craig Larman ve Bas Vodde) Scrum'ı mümkün olduğunca az ek kuralla ölçekler: bir PO, bir backlog, ortak Sprint, tek Increment ve çapraz işlevli özellik takımları.",
    },
    {
      ad: "less-huge",
      zorluk: 2,
      soru: "LeSS'in sekiz takımı aşan ürünler için önerdiği yapıda tek PO'ya yardım eden rol hangisidir?",
      secenekler: ["Area Product Owner", "Release Train Engineer", "Chief Scrum Master", "Tribe Lead"],
      aciklama: "**LeSS Huge**'da ürün müşteri alanlarına (requirement area) bölünür; her alanın bir **Area Product Owner**'ı vardır, genel sıralama yine tek PO'dadır.",
    },
    {
      ad: "less-felsefe",
      soru: "LeSS'in ölçeklemeye bakışını en iyi anlatan cümle hangisidir?",
      secenekler: [
        "Daha çok süreç ve rol eklemek yerine organizasyonu sadeleştirmek",
        "Her yönetim katmanı için ayrı bir planlama etkinliği eklemek",
        "Takımları teknik katmanlara göre ayırıp uzmanlaştırmak",
        "Scrum'ı bırakıp yalnızca Kanban kullanmak",
      ],
      aciklama: "LeSS'in sloganı \"daha azla daha çok\"tur: rolleri, artefaktları ve katmanları azaltarak büyük ürünü tek bir Scrum gibi çalıştırmak.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u13-safe", [
    {
      ad: "art",
      zorluk: 2,
      soru: "SAFe'te birkaç agile takımın ortak bir takvimle birlikte planlayıp teslim ettiği, yaklaşık 50-125 kişilik yapıya ne denir?",
      secenekler: ["Agile Release Train", "Nexus", "Tribe", "Guild"],
      aciklama: "**Agile Release Train**, SAFe'in temel yapı taşıdır. Takımlar birkaç Sprint'lik (SAFe'in dilinde iterasyon) bir dönemi birlikte planlar; bu dönemin başındaki büyük toplantıya PI Planning denir.",
    },
    {
      ad: "epic-koken",
      soru: "Squad'ın aracında gördüğün \"Epic → Feature → Story → Task\" hiyerarşisi nereden gelir?",
      secenekler: [
        "SAFe ve iş takip araçlarından; Rehber'de bu terimler yok",
        "Scrum Rehberi 2020'nin Product Backlog bölümünden",
        "Agile Manifesto'nun dördüncü değer cümlesinden",
        "Kanban Rehberi'nin iş akışı tanımındaki aşamalardan",
      ],
      aciklama: "Rehber yalnızca Product Backlog öğesinden söz eder. Epic ve story XP ve agile topluluğundan, Epic/Feature katmanları SAFe'ten ve Jira, ClickUp gibi araçlardan yaygınlaştı. Bu hiyerarşinin yazımı 2. pratiğin (Backlog) konusudur.",
    },
    {
      ad: "safe-elestiri",
      zorluk: 2,
      soru: "SAFe'e sahada en sık yöneltilen eleştiri hangisidir?",
      secenekler: [
        "Çok rol, katman ve etkinlikle ağır bir yapı kurması",
        "Hiçbir ortak planlama etkinliği içermemesi",
        "Yalnızca tek takımlı ürünler için tasarlanmış olması",
        "Agile Manifesto'dan önce yazılıp güncellenmemiş olması",
      ],
      aciklama: "SAFe büyük kurumlarda yaygındır ve yapı sunar; eleştirisi bu yapının ağırlığıdır. Hangi çerçeve olursa olsun ölçüt aynıdır: her Sprint entegre, çalışan bir ürün ve ona göre verilen kararlar.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u13-spotify", [
    {
      ad: "spotify-terim",
      soru: "Spotify modelinde aynı uzmanlıktaki kişilerin (örneğin bütün QA'lar) tribe içinde bir araya geldiği yapıya ne denir?",
      secenekler: ["Chapter", "Squad", "Guild", "Tribe"],
      aciklama: "**Squad** küçük, kendi kendini yöneten ürün takımı; **tribe** aynı alandaki squad'ların topluluğu; **chapter** tribe içinde aynı uzmanlıktakiler; **guild** tribe'lar arası, gönüllü ilgi topluluğu. Squad'ın QA, DevOps ve Engineering chapter'ları buradan gelir.",
    },
    {
      ad: "spotify-model",
      dy: false,
      soru: "Spotify modeli, Scrum.org'un yayımladığı resmi bir ölçekleme çerçevesidir.",
      aciklama: "Yanlış. Henrik Kniberg ve Anders Ivarsson'un 2012'deki yazısı Spotify'ın o günkü düzenini anlatıyordu; şirket bunu kopyalanacak bir çerçeve olarak sunmadı ve düzen sonradan da değişti. Ayrıntısı 3. pratiğin konusudur.",
      etiket: "sahada",
    },
    {
      ad: "squad-scrum",
      zorluk: 2,
      soru: "Kurumundaki squad, Scrum Rehberi'nin diliyle en çok neye karşılık gelir?",
      secenekler: [
        "Scrum Takımı'na; chapter üyeleri Developers'tır",
        "Nexus Entegrasyon Takımı'na",
        "Product Backlog'a",
        "Scrum Master'ın hesap verebilirliğine",
      ],
      aciklama: "Squad, kendi kendini yöneten çapraz işlevli bir takımdır: Scrum Takımı'na yakındır. QA, DevOps ve Engineering chapter'larından gelenler Scrum açısından Developers'tır; Tech Lead ve Tribe Lead'in Rehber'de karşılığı yoktur (4. ünite, terim haritası).",
    },
  ]),
  ...sorular(U, "u13-yonetici", [
    {
      ad: "yonetici-rol",
      zorluk: 2,
      soru: "Scrum'a geçen bir organizasyonda bölüm yöneticisinin en değerli katkısı hangisidir?",
      secenekler: [
        "Takımların kendini yönetebileceği ortamı kurup engelleri kaldırmak",
        "Sprint Backlog'u onaylamak ve her sabah görev dağıtmak",
        "Daily Scrum'lara katılıp kişi kişi ilerleme sormak",
        "Takımların velocity'lerini karşılaştırıp aylık sıralamak",
      ],
      aciklama: "Rehber yöneticiyi tanımlamaz ama SM'nin organizasyona hizmetini anlatır: paydaşların ve çalışanların empirik yaklaşımı anlamasını sağlamak, engelleri kaldırmak. Yönetici işi kontrol etmekten, işin yapılabileceği sistemi geliştirmeye geçer.",
      etiket: "sahada",
    },
    {
      ad: "butce",
      soru: "Agile organizasyonlarda proje bazlı bütçe yerine sıkça önerilen yaklaşım hangisidir?",
      secenekler: [
        "Kalıcı takımlara dönemsel bütçe verip içeriği değerle yönlendirmek",
        "Her user story için ayrı ve ayrıntılı bir bütçe onayı almak",
        "Bütçeyi ancak proje bittikten sonra kesinleştirmek",
        "Bütçeyi velocity'ye göre her Sprint baştan hesaplamak",
      ],
      aciklama: "Kalıcı takımlar öğrenmeyi korur; bütçe kapasiteye verilir, kapsam her Sprint değere göre sıralanır. Proje başına kurulup dağılan geçici ekipler bu öğrenmeyi kaybeder.",
      etiket: "sahada",
    },
  ]),
  ...sorular(U, "u13-sertifika", [
    {
      ad: "psm-pspo",
      soru: "PSM I ve PSPO I sertifikaları hangi kuruluşa aittir?",
      secenekler: ["Scrum.org", "Scrum Alliance", "Scaled Agile", "Project Management Institute"],
      aciklama: "PSM (Professional Scrum Master) ve PSPO (Professional Scrum Product Owner) Scrum.org'undur; sınava girmek için kurs şartı yoktur. CSM (Certified ScrumMaster) Scrum Alliance'ındır ve kursla birlikte alınır.",
    },
    {
      ad: "sinav-kaynak",
      dy: true,
      soru: "PSM I gibi sınavların cevapları için birincil kaynak Scrum Rehberi'nin kendisidir; sahada yaygın ama Rehber'de olmayan uygulamalar (story point, DoR) doğru cevap sayılmaz.",
      aciklama: "Doğru. Bu pratikteki Rehber etiketli sorular bu yüzden yalnızca Rehber'in metnine dayanır; Sahada etiketli sorular ise gerçek takımlardaki iyi uygulamayı sorar. İkisini ayırmak sınavda en çok işe yarayan beceridir.",
    },
  ]),
];
