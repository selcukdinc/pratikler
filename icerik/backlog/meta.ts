// Backlog Pratik (pratikler.selcukdinc.dev/backlog): Product Backlog'un yapısını, iş
// hiyerarşisini (theme, epic, feature, story, task), user story yazımını (3C, INVEST,
// kabul kriterleri, bölme), tahmini, sıralamayı, refinement'ı ve sürüm planlamayı üç
// grupta 12 ünitede işleyen pratik. Agile/Scrum üçlü dizisinin ikincisi: 1. pratik Agile
// ve Scrum (yol agile, önek ag-), 3. pratik Ölçekli Agile (yol olcekli-agile, önek oa-).
// 1. pratikte bu pratiğe user-story / us- ayrılmıştı; Selçuk'un onayıyla (19 Kasım 2026)
// yol backlog, önek bl- oldu.
// Plan: proje kütüphanesinde planlar/plan-backlog-pratigi.md, depoda docs/plan-backlog-pratigi.md.
//
// Sorular kendi cümlelerimizle yazılır. Dayanak: Scrum Rehberi 2020 (CC BY-SA 4.0) ve
// tekniklerin sahiplerinin yayımları (Ron Jeffries 3C, Bill Wake INVEST, Mike Cohn,
// Jeff Patton, Gojko Adzic, Matt Wynne, Richard Lawrence, Don Reinertsen...). Metin
// kopyalanmaz; sertifika sınavlarının soruları kullanılmaz.
//
// Kurgusal takım 1. pratiktekiyle aynı: "Kampüs Yemekhanesi" uygulamasını geliştiren
// 12 kişilik squad. Product Owner Elif, Scrum Master Burak, Tech Lead Can; QA chapter'ından
// Deniz ve Tuba, DevOps chapter'ından Kerem, Engineering chapter'ından Ayşe, Mert, Selin,
// Okan, Ece ve Hakan. Paydaşlar: yemekhane müdürü Nurten Hanım, öğrenci temsilcisi Arda,
// bilgi işlem müdürü Sinan Bey. Bu pratikte squad'ın üstünde kurgusal bir "Teknik Liderlik"
// grubu da var (Tribe Lead Zeynep Hanım, baş mimar Levent Bey): epic ve feature'ları yazar,
// Elif'in story'lerini onaylar. Gerçek kurum ya da kişi adı kullanılmaz.
//
// Her kavramın en az bir sorusu olmalı (shared/kavramlar.test.ts). Soruları henüz
// yazılmamış ünitelerin kavramları, soruları eklenirken açılır.
import type { PratikMeta } from "../tipler.ts";

export const GRUPLAR = [
  { ad: "Backlog'un temeli", aciklama: "Product Backlog'a yakından bakış, iş hiyerarşisi ve vizyondan backlog'a inen yol.", uniteler: [1, 2, 3] },
  { ad: "User story zanaatı", aciklama: "User story, INVEST, kabul kriterleri, story bölme ve story olmayan işler.", uniteler: [4, 5, 6, 7, 8] },
  { ad: "Tahmin, sıralama ve hazırlık", aciklama: "Tahmin, önceliklendirme, refinement ve hazır olma, sürüm planlama.", uniteler: [9, 10, 11, 12] },
];

export const backlog: PratikMeta = {
  id: "backlog",
  alt: "backlog",
  yol: "backlog",
  ad: "Backlog: Epic, Feature, User Story",
  alan: "Yazılım",
  aciklama:
    "Belirsiz bir istekten Sprint'e hazır story'lere: iş hiyerarşisi, user story yazımı, INVEST, kabul kriterleri, story bölme, tahmin ve sıralama 12 ünitede. Okuduğunu sanal squad'ın Product Owner'ı olarak Backlog Atölyesi'nde dene.",
  kaynakAdi: "Scrum Rehberi 2020 ve user story, tahmin, sıralama tekniklerinin kaynakları",
  kaynakAciklamasi:
    "Sorular ve dersler **kendi cümlelerimizle** yazıldı. Product Backlog'la ilgili cevaplar Scrum Rehberi 2020'ye (Ken Schwaber ve Jeff Sutherland, CC BY-SA 4.0) dayanır. Teknikler sahiplerinin tanımlarıyla anlatılır: 3C (Ron Jeffries), INVEST (Bill Wake), user story ve tahmin (Mike Cohn), story mapping (Jeff Patton), impact mapping ve Specification by Example (Gojko Adzic), Example Mapping (Matt Wynne), story bölme desenleri (Richard Lawrence), gecikme maliyeti (Don Reinertsen). Metin kopyalanmadı; sertifika sınavlarının soruları kullanılmadı.\n\n" +
    "Soruların etiketi kaynağını söyler: **Kaynak** etiketli soruların cevabı Rehber'in ya da tekniğin sahibinin tanımına dayanır; **Sahada** etiketli sorular yaygın iyi uygulamayı ve yanılgıyı, **Senaryo** etiketli sorular kurgusal squad'da en uygun hamleyi sorar. Rehber'de olmayan uygulamalar (user story, story point, Definition of Ready, epic) açıkça öyle anılır.",
  tanitim: {
    baslik: "Belirsiz bir istekten Sprint'e hazır story'lere",
    giris:
      "Backlog Pratik, Product Backlog'u yazmayı ve inceltmeyi öğreten ücretsiz bir çalışma sitesi: epic, feature ve story hiyerarşisi, iyi bir story'nin özellikleri, kabul kriterleri, story bölme, tahmin ve sıralama. Agile ve Scrum pratiğinin devamıdır; aynı sanal squad'la çalışırsın.",
    kitleler: [
      { baslik: "Product Owner'lar", metin: "Paydaş isteklerini değer taşıyan, test edilebilir ve Sprint'e sığan story'lere çevir; sıralama kararlarını gerekçelendir." },
      { baslik: "Story yazan ve onaylayanlar", metin: "Epic ve feature yazan, story onaylayan teknik liderler için INVEST, dikey dilim ve kabul kriteri ölçütlerini ortak dile çevir." },
      { baslik: "Geliştiriciler ve test uzmanları", metin: "Refinement'a, Planning Poker'a ve Three Amigos konuşmalarına hazırlıklı gel; belirsiz story'yi fark et." },
    ],
  },
  uniteAdi: "ünite",
  uniteKisa: "Ü",
  yayinda: false,
  latex: false,
  anaSayfa: "ders",
  uniteGruplari: GRUPLAR,
  logo: "/logolar/backlog.svg",
  etiketler: [
    { id: "kaynak", ad: "Kaynak", renk: "kitap", aciklama: "Cevabı doğrudan Scrum Rehberi'ne ya da tekniğin sahibinin tanımına dayanan soru" },
    { id: "kavram", ad: "Kavram", renk: "turetilmis", aciklama: "Bir kavramı, seviyeyi ya da terimin nereden geldiğini soran soru" },
    { id: "sahada", ad: "Sahada", renk: "ders", aciklama: "Gerçek backlog'lardaki yaygın iyi uygulamayı ya da yanılgıyı soran soru" },
    { id: "senaryo", ad: "Senaryo", renk: "cikmis", aciklama: "Kurgusal squad'da Product Owner'ın ya da takımın en uygun hamlesini seçtiğin soru" },
    { id: "hesap", ad: "Hesap", renk: "ders", aciklama: "WSJF, sürüm tahmini, kapasite gibi küçük hesaplar" },
  ],
  uniteler: [
    { no: 1, baslik: "Product Backlog'a Yakından Bakış" },
    { no: 2, baslik: "İş Hiyerarşisi: Theme, Epic, Feature, Story, Task" },
    { no: 3, baslik: "Vizyondan Backlog'a" },
    { no: 4, baslik: "User Story Nedir?" },
    { no: 5, baslik: "INVEST" },
    { no: 6, baslik: "Kabul Kriterleri" },
    { no: 7, baslik: "Story Bölme" },
    { no: 8, baslik: "Story Olmayan İşler" },
    { no: 9, baslik: "Tahmin" },
    { no: 10, baslik: "Sıralama ve Önceliklendirme" },
    { no: 11, baslik: "Refinement ve Hazır Olma" },
    { no: 12, baslik: "Sürüm Planlama ve Yol Haritası" },
  ],
  kavramlar: {
    // 1. ünite
    "u1-rehber": { ad: "Rehber'de Product Backlog: tek kaynak, sıralı, sürekli gelişen" },
    "u1-sahiplik": { ad: "Product Backlog'un sahibi: kim hesap verir, kim ekler, kim tahmin eder" },
    "u1-nitelikler": { ad: "Product Backlog öğesinin nitelikleri" },
    "u1-product-goal": { ad: "Product Goal ve backlog'un yönü" },
    "u1-buzdagi": { ad: "Backlog buzdağı: üstte ince, altta kaba öğeler" },
    "u1-deep": { ad: "DEEP: uygun ayrıntı, tahmin, gelişme, sıra" },
    "u1-kokular": { ad: "Backlog kokuları: mezarlık, kopya öğeler, \"bir gün\" listesi" },
    // 2. ünite
    "u2-seviyeler": { ad: "Theme, epic, feature, story ve task: seviyelerin amacı" },
    "u2-epic": { ad: "Epic: büyük, birden çok Sprint süren hedef" },
    "u2-feature": { ad: "Feature: kullanıcıya görünen yetenek" },
    "u2-task": { ad: "Task: story'nin teknik adımı" },
    "u2-araclar": { ad: "Çerçevelerde ve araçlarda hiyerarşi: SAFe, Jira, Azure Boards, ClickUp" },
    "u2-kim-yazar": { ad: "Hiyerarşide kim yazar, kim onaylar" },
    "u2-ne-zaman": { ad: "Hiyerarşi ne zaman gereksiz ya da zararlı?" },
    // 3. ünite
    "u3-vizyon": { ad: "Ürün vizyonu ve Product Goal" },
    "u3-okr": { ad: "OKR, sonuç ve çıktı farkı" },
    "u3-persona": { ad: "Persona ve kullanıcı rolleri" },
    "u3-impact": { ad: "Impact mapping: neden, kim, nasıl, ne" },
    "u3-story-map": { ad: "User story mapping: omurga ve kullanıcı yolculuğu" },
    "u3-dilim": { ad: "Yürüyen iskelet ve sürüm dilimleri" },
    // 4. ünite
    "u4-tarihce": { ad: "User story'nin kökeni: XP, Kent Beck, Mike Cohn" },
    "u4-3c": { ad: "3C: Card, Conversation, Confirmation" },
    "u4-kalip": { ad: "\"Bir ... olarak ... istiyorum, böylece ...\" kalıbı" },
    "u4-rol": { ad: "Kalıbın yanlış kullanımları: geliştirici rolü, faydasız story" },
    "u4-job-story": { ad: "Job story ve diğer biçimler" },
    "u4-konusma": { ad: "Story bir sözleşme değil, konuşma vaadidir" },
    // 5. ünite
    "u5-invest": { ad: "INVEST: Bill Wake'in altı harfi" },
    "u5-independent": { ad: "Independent: bağımsız story" },
    "u5-negotiable": { ad: "Negotiable: konuşulabilir story" },
    "u5-valuable": { ad: "Valuable: değerli story" },
    "u5-estimable": { ad: "Estimable: tahmin edilebilir story" },
    "u5-small": { ad: "Small: küçük story" },
    "u5-testable": { ad: "Testable: test edilebilir story" },
    "u5-gerilim": { ad: "Harfler arasındaki gerilim ve INVEST'in kapıya dönüşmesi" },
    // 6. ünite
    "u6-tanim": { ad: "Kabul kriteri nedir, kim yazar, ne zaman yazılır" },
    "u6-kural": { ad: "Kural listesi biçiminde kabul kriterleri" },
    "u6-gherkin": { ad: "Given/When/Then ve Gherkin" },
    "u6-bdd": { ad: "BDD ve Specification by Example" },
    "u6-example-mapping": { ad: "Example Mapping: kural, örnek ve soru kartları" },
    "u6-three-amigos": { ad: "Three Amigos" },
    "u6-ac-dod": { ad: "Kabul kriteri ile Definition of Done farkı" },
    "u6-olcu": { ad: "Ölçülebilirlik, olumsuz yollar ve kenar durumlar" },
    // 7. ünite
    "u7-neden": { ad: "Neden küçük story? Akış, geri bildirim ve risk" },
    "u7-dikey": { ad: "Dikey ve yatay dilim" },
    "u7-spidr": { ad: "SPIDR: Spike, Path, Interface, Data, Rules" },
    "u7-lawrence": { ad: "Richard Lawrence'ın bölme desenleri" },
    "u7-akis-crud": { ad: "İş akışı adımları ve işlem türleri ile bölme" },
    "u7-basit-karmasik": { ad: "Basit/karmaşık, büyük çaba ve ertelenen performans" },
    "u7-hiyerarsi": { ad: "Epic'ten feature'a, feature'dan story'ye bölme" },
    // 8. ünite
    "u8-nfr": { ad: "Fonksiyonel olmayan gereksinimler" },
    "u8-nfr-yeri": { ad: "NFR nereye yazılır: kabul kriteri, ayrı öğe ya da DoD" },
    "u8-teknik": { ad: "Teknik story ve enabler" },
    "u8-spike": { ad: "Spike: time-box'lı araştırma" },
    "u8-hata": { ad: "Hatalar backlog'da" },
    "u8-borc": { ad: "Teknik borç backlog'da" },
    // 9. ünite
    "u9-goreli": { ad: "Göreli ve mutlak tahmin" },
    "u9-puan": { ad: "Story point neyi ölçer?" },
    "u9-fibonacci": { ad: "Fibonacci ve değiştirilmiş Fibonacci ölçeği" },
    "u9-poker": { ad: "Planning Poker" },
    "u9-hizli": { ad: "Hızlı tahmin: T-shirt boyu, affinity, kova yöntemi" },
    "u9-ideal-gun": { ad: "İdeal gün" },
    "u9-tuzak": { ad: "Tahmin tuzakları" },
    "u9-noestimates": { ad: "#NoEstimates ve öğe saymak" },
    // 10. ünite
    "u10-etkenler": { ad: "Sırayı belirleyen etkenler: değer, risk, bağımlılık, öğrenme" },
    "u10-moscow": { ad: "MoSCoW" },
    "u10-kano": { ad: "Kano modeli" },
    "u10-cod": { ad: "Gecikme maliyeti (Cost of Delay)" },
    "u10-wsjf": { ad: "WSJF" },
    "u10-matris": { ad: "Değer/efor matrisi ve RICE" },
    "u10-hepsi-yuksek": { ad: "\"Her şey yüksek öncelikli\" sorunu" },
    // 11. ünite
    "u11-refinement": { ad: "Refinement'ın Rehber'deki yeri" },
    "u11-oturum": { ad: "Refinement oturumu nasıl yürür?" },
    "u11-dor": { ad: "Definition of Ready" },
    "u11-dor-tuzak": { ad: "DoR'un kapı bekçisine dönüşmesi" },
    "u11-onay": { ad: "Story onay akışları" },
    "u11-durumlar": { ad: "Araçta iş akışı durumları" },
    "u11-temizlik": { ad: "Backlog'u temizlemek" },
    // 12. ünite
    "u12-mvp": { ad: "MVP, MMF ve MMP" },
    "u12-surum": { ad: "Story map'ten sürüm planına" },
    "u12-burnup": { ad: "Burnup ile sürüm tahmini" },
    "u12-aralik": { ad: "Tek tarih değil tahmin aralığı" },
    "u12-yol-haritasi": { ad: "Now-Next-Later yol haritası" },
    "u12-sonuc": { ad: "Sonuç odaklı yol haritası" },
    "u12-kopru": { ad: "Çok takımlı backlog'a köprü" },
  },
  terimler: [
    { tr: "hikâye puanı", en: "story point", aciklama: "Bir öğenin büyüklüğünü (iş miktarı, karmaşıklık, belirsizlik) başka öğelere göre anlatan göreli birim; saat değildir" },
    { tr: "Planning Poker", en: "Planning Poker", aciklama: "Takım üyelerinin tahmin kartlarını aynı anda açtığı, farkların konuşulduğu tahmin oyunu (James Grenning, Mike Cohn)" },
    { tr: "ideal gün", en: "ideal day", aciklama: "Kesintisiz, yalnızca o işe ayrılmış bir iş günü varsayımıyla yapılan tahmin birimi" },
    { tr: "MoSCoW", en: "Must, Should, Could, Won't", aciklama: "Gereksinimleri dört gruba ayıran önceliklendirme tekniği (DSDM)" },
    { tr: "Kano modeli", en: "Kano model", aciklama: "Özellikleri müşteri memnuniyetine etkilerine göre temel, performans ve heyecan verici diye ayıran model (Noriaki Kano)" },
    { tr: "gecikme maliyeti", en: "Cost of Delay", aciklama: "Bir işi geciktirmenin birim zamanda kaybettirdiği değer (Don Reinertsen)" },
    { tr: "WSJF", en: "Weighted Shortest Job First", aciklama: "Gecikme maliyetini iş büyüklüğüne bölerek sıralayan yöntem; SAFe'te kullanılır" },
    { tr: "hazır olma tanımı", en: "Definition of Ready", aciklama: "Bir öğenin Sprint'e alınmadan önce sağlaması beklenen koşullar; Scrum Rehberi'nde yoktur" },
    { tr: "en küçük uygulanabilir ürün", en: "minimum viable product, MVP", aciklama: "En az çabayla en çok doğrulanmış öğrenme sağlayan ürün sürümü (Eric Ries)" },
    { tr: "en küçük pazarlanabilir özellik", en: "minimum marketable feature, MMF", aciklama: "Tek başına kullanıcıya değer veren ve yayınlanabilen en küçük özellik" },
    { tr: "burnup grafiği", en: "burnup chart", aciklama: "Biten işi ve toplam kapsamı iki ayrı çizgide gösteren grafik; kapsam değişikliği görünür" },
    { tr: "Şimdi-Sonra-Daha sonra", en: "Now-Next-Later", aciklama: "Tarih yerine zaman ufku kullanan yol haritası biçimi (Janna Bastow)" },
    { tr: "Ürün İş Listesi", en: "Product Backlog", aciklama: "Ürünü iyileştirmek için gerekenlerin sıralı, sürekli gelişen listesi; Scrum Takımı'nın işinin tek kaynağı" },
    { tr: "Ürün İş Listesi öğesi", en: "Product Backlog item, PBI", aciklama: "Product Backlog'daki tek bir iş; biçimi Rehber'de şart koşulmaz (story, hata, teknik iş olabilir)" },
    { tr: "Ürün Hedefi", en: "Product Goal", aciklama: "Ürünün gelecekteki istenen durumu; Product Backlog'un taahhüdü" },
    { tr: "backlog inceltme", en: "backlog refinement", aciklama: "Öğeleri daha küçük ve kesin parçalara bölme, açıklama, sıra ve büyüklük gibi ayrıntılar ekleme; süren bir etkinlik" },
    { tr: "DEEP", en: "Detailed appropriately, Estimated, Emergent, Prioritized", aciklama: "İyi bir Product Backlog'un dört özelliği (Roman Pichler ve Mike Cohn)" },
    { tr: "tema", en: "theme", aciklama: "Birçok epic ya da story'yi bağlayan geniş konu ya da odak alanı" },
    { tr: "epic", en: "epic", aciklama: "Birden çok Sprint'e yayılan, feature ya da story'lere bölünen büyük iş" },
    { tr: "feature", en: "feature", aciklama: "Kullanıcıya görünen bir yetenek; genelde birkaç story'den oluşur" },
    { tr: "kullanıcı hikâyesi", en: "user story", aciklama: "Bir kullanıcının ihtiyacını ve faydasını kısa, konuşmaya davet eden biçimde anlatan backlog öğesi" },
    { tr: "görev", en: "task", aciklama: "Bir story'yi bitirmek için yapılacak teknik adım; Sprint Backlog'daki plan parçası" },
    { tr: "kabiliyet", en: "capability", aciklama: "SAFe'te birden çok Agile Release Train'e yayılan, feature'lardan büyük yetenek" },
    { tr: "ürün vizyonu", en: "product vision", aciklama: "Ürünün neden var olduğunu ve uzun vadede kime ne fayda sağlayacağını anlatan kısa ifade" },
    { tr: "OKR", en: "Objectives and Key Results", aciklama: "Bir hedef ve ona ulaşıldığını gösteren ölçülebilir anahtar sonuçlar" },
    { tr: "persona", en: "persona", aciklama: "Gerçek kullanıcı araştırmasına dayanan, adı ve ihtiyaçları olan kurgusal kullanıcı" },
    { tr: "etki haritası", en: "impact map", aciklama: "Bir hedeften aktörlere, istenen davranış değişikliklerine ve teslimatlara inen ağaç (Gojko Adzic)" },
    { tr: "hikâye haritası", en: "user story map", aciklama: "Kullanıcı yolculuğunu yatayda omurga, ayrıntıları dikeyde gösteren düzen (Jeff Patton)" },
    { tr: "omurga", en: "backbone", aciklama: "Story map'te kullanıcının yolculuğundaki ana etkinliklerin yatay sırası" },
    { tr: "yürüyen iskelet", en: "walking skeleton", aciklama: "Uçtan uca çalışan, her adımın en ince hâlinden oluşan ilk sürüm" },
    { tr: "3C", en: "Card, Conversation, Confirmation", aciklama: "Story'nin üç parçası: kart, konuşma, doğrulama (Ron Jeffries, 2001)" },
    { tr: "kabul kriteri", en: "acceptance criteria", aciklama: "Bir story'nin kabul edilmesi için sağlaması gereken, test edilebilir koşullar" },
    { tr: "iş hikâyesi", en: "job story", aciklama: "\"Şu durumda ... istiyorum, böylece ...\" biçiminde, rol yerine durumu öne alan story yazımı" },
    { tr: "INVEST", en: "Independent, Negotiable, Valuable, Estimable, Small, Testable", aciklama: "İyi bir story'nin altı özelliği (Bill Wake, 2003)" },
    { tr: "davranış odaklı geliştirme", en: "behavior-driven development, BDD", aciklama: "Davranışı örneklerle tarif edip bu örnekleri test olarak çalıştıran yaklaşım (Dan North)" },
    { tr: "Gherkin", en: "Gherkin", aciklama: "Given/When/Then anahtar kelimeleriyle senaryo yazmaya yarayan, Cucumber'ın kullandığı dil" },
    { tr: "örneklerle şartname", en: "specification by example", aciklama: "Gereksinimleri somut örneklerle birlikte tanımlayıp bu örnekleri doğrulama olarak kullanma (Gojko Adzic)" },
    { tr: "örnek haritalama", en: "example mapping", aciklama: "Story, kural, örnek ve soru kartlarıyla yapılan kısa refinement tekniği (Matt Wynne)" },
    { tr: "üç amigo", en: "Three Amigos", aciklama: "İş, geliştirme ve test bakış açılarının bir story'yi birlikte konuştuğu kısa toplantı" },
    { tr: "dikey dilim", en: "vertical slice", aciklama: "Bütün katmanlardan geçen, kendi başına değer taşıyan ince iş parçası" },
    { tr: "yatay dilim", en: "horizontal slice", aciklama: "Tek bir katmanı (arayüz, servis, veri tabanı) kapsayan, tek başına kullanıcıya değer vermeyen parça" },
    { tr: "SPIDR", en: "Spike, Path, Interface, Data, Rules", aciklama: "Mike Cohn'un beş story bölme yolu" },
    { tr: "araştırma story'si", en: "spike", aciklama: "Bir soruyu cevaplamak ya da riski azaltmak için time-box'lı araştırma; çıktısı bilgidir" },
    { tr: "fonksiyonel olmayan gereksinim", en: "non-functional requirement, NFR", aciklama: "Sistemin ne yaptığını değil nasıl yaptığını anlatan kalite özelliği: performans, güvenlik, erişilebilirlik" },
    { tr: "etkinleştirici", en: "enabler", aciklama: "SAFe'te gelecekteki işleri mümkün kılan mimari, altyapı, keşif ya da uyum işi" },
    { tr: "teknik borç", en: "technical debt", aciklama: "Bugün alınan kısayolların ileride yavaşlık ve hata olarak geri ödenen bedeli (Ward Cunningham)" },
  ],
  benzerler: [],
};
