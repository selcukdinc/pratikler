// Sprint simülatörünün Kampüs Yemekhanesi senaryosu: Product Backlog, Sprint Goal
// seçenekleri, günlük olaylar, Retro iyileştirmeleri ve görevler. Motor src/scrum'dadır.
// Kişiler meta.ts'in başındaki kurgusal squad'dır (12 kişi).
import { karne, type Oge, type Olay, type Senaryo } from "../../../../src/scrum/motor";
import type { SprintGorevi, SprintIcerigi } from "../../../../src/scrum/gorev";

const o = (id: string, ad: string, puan: number, deger: number, etiket: string, tur: Oge["tur"] = "ozellik"): Oge => ({ id, ad, puan, deger, etiket, tur });

export const BACKLOG: Oge[] = [
  o("menu", "Haftalık menüyü telefonda göster", 5, 8, "menu"),
  o("alerjen-etiket", "Yemeklere alerjen etiketi", 5, 9, "alerjen"),
  o("siparis", "Telefondan sipariş ver", 8, 10, "siparis"),
  o("mutfak-ekran", "Mutfak ekranında sipariş listesi", 5, 8, "siparis"),
  o("alerjen-filtre", "Alerjenli yemekleri filtrele", 5, 7, "alerjen"),
  o("kart-odeme", "Kampüs kartıyla ödeme", 8, 9, "odeme"),
  o("bakiye", "Kart bakiyesini görüntüle", 3, 5, "odeme"),
  o("yayin-hatti", "Yayın hattını otomatikleştir", 5, 4, "teknik", "teknik"),
  o("hazir-bildirim", "Sipariş hazır olunca bildirim", 5, 6, "siparis"),
  o("siparis-iptal", "Siparişi iptal et", 3, 4, "siparis"),
  o("menu-foto", "Menüde yemek fotoğrafları", 3, 3, "menu"),
  o("kalori", "Menüde kalori bilgisi", 3, 3, "menu"),
  o("test-betik", "Test ortamı kurulum betiği", 3, 3, "teknik", "teknik"),
  o("bakiye-yukle", "Kart bakiyesi yükleme", 5, 6, "odeme"),
  o("alerjen-uyari", "Alerjen uyarı bildirimi", 3, 4, "alerjen"),
  o("ekran-okuyucu", "Ekran okuyucu desteği", 5, 5, "erisilebilirlik"),
  o("izleme", "Hata kayıtlarını izleme", 3, 3, "teknik", "teknik"),
  o("siparis-gecmis", "Sipariş geçmişi", 5, 3, "siparis"),
  o("porsiyon", "Günlük porsiyon tahmini", 8, 5, "mutfak"),
  o("rapor", "Yönetici raporu", 5, 2, "rapor"),
];

const RAPOR_ACIL = o("rapor-ekran", "Yemekhane doluluk raporu ekranı", 5, 3, "rapor");
const BUTON = o("buton-renk", "Sipariş düğmesinin rengini değiştir", 1, 1, "menu");
const ODEME_ACIL = o("odeme-acil", "Ödeme ekranını erkene al", 5, 4, "odeme");

export const OLAYLAR: Olay[] = [
  {
    id: "acil-rapor",
    baslik: "Sprint ortasında acil istek",
    metin: "Yemekhane müdürü Nurten Hanım takımın odasına geldi: \"Rektörlüğe yarın doluluk raporu sunacağım, bir rapor ekranı lazım. Küçük bir iş, bu Sprint'e sığar, değil mi?\"",
    secenekler: [
      { metin: "İsteği Product Owner Elif'e yönlendir; Elif onu Product Backlog'a alıp sıralasın", etki: { guven: -1, backlogaEkle: RAPOR_ACIL }, uyum: "uygun", aciklama: "Yeni istek Product Backlog'a girer ve PO sıralar. Sprint Goal'ü tehlikeye atan değişiklik yapılmaz; Nurten Hanım ertesi Sprint'te değerlendirilmesini bekler." },
      { metin: "Rapor ekranını hemen Sprint Backlog'a ekle", etki: { ekle: RAPOR_ACIL, odak: -10, guven: 3 }, uyum: "aykiri", aciklama: "Sprint Goal'le ilgisi olmayan iş Sprint'e eklendi; odak dağılır ve hedef riske girer. Kısa vadede paydaş memnun olur." },
      { metin: "Bir geliştiriciyi sessizce rapora ayır, panoya yazma", etki: { puan: -5, odak: -5, moral: -3 }, uyum: "aykiri", aciklama: "Görünmeyen iş şeffaflığı bozar: pano ve burndown gerçeği göstermez, takım neden yavaşladığını anlamaz." },
      { metin: "Sprint'i iptal edip rapor için yeniden planla", etki: { puan: -8, moral: -10, guven: -5 }, uyum: "aykiri", aciklama: "Sprint yalnızca Sprint Goal geçersizleşirse iptal edilir ve bunu yalnızca PO yapar. Rapor isteği hedefi geçersiz kılmıyor." },
    ],
  },
  {
    id: "daily-rapor",
    baslik: "Daily bir hesap verme toplantısına döndü",
    rol: "sm",
    metin: "Bölüm yöneticisi üç gündür Daily'ye geliyor ve herkese tek tek \"bu iş neden hâlâ bitmedi?\" diye soruyor. Geliştiriciler panoya değil yöneticiye bakarak konuşuyor.",
    secenekler: [
      { metin: "Yöneticiyle ayrıca konuş: Daily Developers içindir; ilgisini panoya ve Sprint Review'a yönlendir", etki: { odak: 8, moral: 4, guven: 1 }, uyum: "uygun", aciklama: "Scrum Master organizasyona Scrum'u anlatarak hizmet eder. Daily, Developers'ın Sprint Goal'e ilerlemeyi denetlediği etkinliktir." },
      { metin: "Daily'yi yöneticinin istediği gibi kişi kişi durum raporuna çevir", etki: { odak: -8, moral: -6, guven: 2 }, uyum: "aykiri", aciklama: "Durum raporu ilerlemeyi değil kişileri denetler; Developers planı uyarlamak yerine savunma yapar." },
      { metin: "Daily'yi kaldır, yöneticiye her akşam yazılı rapor gönder", etki: { odak: -6, moral: -2 }, uyum: "aykiri", aciklama: "Daily bir Scrum etkinliğidir; kaldırmak takımın günlük denetim ve uyarlama noktasını yok eder." },
      { metin: "Bir şey yapma, yönetici zamanla sıkılır", etki: { odak: -5, moral: -4 }, uyum: "notr", aciklama: "Engel görmezden gelinince sürer. SM'nin işi engelin kaldırılmasına neden olmaktır." },
    ],
  },
  {
    id: "daily-uzun",
    baslik: "Daily 35 dakika sürüyor",
    rol: "sm",
    metin: "On iki kişi sırayla dün ne yaptığını anlatıyor; Daily her gün 35 dakika sürüyor ve son konuşanlar kimseyi dinlemiyor.",
    secenekler: [
      { metin: "Panoyu sağdan sola yürü; ayrıntılı konuları Daily'den sonraya park et", etki: { odak: 10, moral: 2 }, uyum: "uygun", aciklama: "İş iş ilerlemek odağı Sprint Goal'e ve takılan işlere taşır; tartışmalar ilgili kişilerle sonra yapılır." },
      { metin: "Herkese bir dakika ver, sırayla konuşmaya devam etsinler", etki: { odak: 2 }, uyum: "notr", aciklama: "Süre kısalır ama Daily yine kişilere odaklı bir rapor turu olarak kalır." },
      { metin: "Daily'yi haftada bire indir, süresini bir saate çıkar", etki: { odak: -8 }, uyum: "aykiri", aciklama: "Daily her gün yapılan 15 dakikalık bir etkinliktir; seyrekleşince takım günlerce eski bir planla çalışır." },
    ],
  },
  {
    id: "hasta",
    baslik: "Okan üç gün hasta",
    metin: "Okan grip oldu ve üç gün gelemeyecek. Sprint Backlog'daki işlerin bir kısmı ondaydı.",
    secenekler: [
      { metin: "Developers planı uyarlasın; hedefe katkısı olmayan bir öğeyi PO ile konuşup Product Backlog'a geri koy", etki: { puan: -4, cikar: true }, uyum: "uygun", aciklama: "Kapsam PO ile yeniden görüşülür, Sprint Goal korunur. Kaybedilen kapasite gerçekçi biçimde plana yansır." },
      { metin: "Herkes iki gün fazla mesai yapsın", etki: { moral: -10, borc: 4 }, uyum: "aykiri", aciklama: "Sürdürülebilir hız ilkesine ters: yorgun takım hata yapar, gerçek kapasite görünmez olur." },
      { metin: "Testleri kısaltarak yetiştirelim", etki: { puan: -1, borc: 12, guven: -2 }, uyum: "aykiri", aciklama: "Rehber'e göre Sprint boyunca kalite düşmez. Testsiz iş teknik borç olarak geri döner." },
      { metin: "Hiçbir şey değiştirme, görürüz", etki: { puan: -4 }, uyum: "notr", aciklama: "Kayıp kapasite yine yaşanır ama plan uyarlanmadığı için hedef öğeleri de riske girer." },
    ],
  },
  {
    id: "uretim-hatasi",
    baslik: "Canlıda hata",
    agirlik: (d) => 0.5 + d.g.borc / 40,
    metin: "Öğrenciler menünün öğle saatinde açılmadığını bildiriyor. Kayıtlara göre son yayındaki bir değişiklik veritabanını kilitliyor.",
    secenekler: [
      { metin: "Hatayı hemen düzelt, Sprint Backlog'a yaz ve PO'ya kapsam etkisini söyle", etki: { puan: -3, guven: 2 }, uyum: "uygun", aciklama: "Canlıdaki kullanıcıyı korumak önceliklidir; işi Sprint Backlog'da görünür kılmak şeffaflığı korur." },
      { metin: "Sprint bitene kadar beklesin, plan bozulmasın", etki: { guven: -10 }, uyum: "aykiri", aciklama: "Planı korumak değeri korumak değildir; kullanıcılar günlerce hatayla yaşar." },
      { metin: "Düzelt ama kimseye söyleme, panoya da yazma", etki: { puan: -3, guven: -2, odak: -2 }, uyum: "aykiri", aciklama: "Görünmeyen iş burndown'u ve Daily'yi yanıltır; şeffaflık empirizmin ilk sütunudur." },
    ],
  },
  {
    id: "test-ortami",
    baslik: "Test ortamı çöktü",
    rol: "sm",
    metin: "Test ortamı iki gündür çalışmıyor. QA Deniz ve Tuba test edemiyor, bitmiş görünen işler bekliyor.",
    secenekler: [
      { metin: "DevOps Kerem'i ve bilgi işlemi harekete geçir; engelin bugün kaldırılmasını sağla", etki: { puan: -2 }, uyum: "uygun", aciklama: "Scrum Master engellerin kaldırılmasına neden olur; kendisi onarmak zorunda değildir." },
      { metin: "Retro'ya kadar not al, orada konuşuruz", etki: { puan: -8, moral: -4 }, uyum: "aykiri", aciklama: "Engel beklerken akış günlerce durur; Retro iyileştirme içindir, acil engel için değil." },
      { metin: "Testleri doğrudan canlıda yapalım", etki: { borc: 10, guven: -4 }, uyum: "aykiri", aciklama: "Kalite düşer ve kullanıcılar test eden kişi olur." },
    ],
  },
  {
    id: "tartisma",
    baslik: "Mimari tartışması",
    rol: "sm",
    metin: "Mert ile Selin sipariş servisinin veritabanı tasarımında anlaşamıyor; iki gündür iş ilerlemiyor ve takım taraflara bölünmeye başladı.",
    secenekler: [
      { metin: "Kolaylaştır: iki seçeneği yarım günlük küçük bir denemeyle karşılaştırsınlar, kararı Developers versin", etki: { moral: 3, puan: -1 }, uyum: "uygun", aciklama: "Nasıl yapılacağı Developers'ın kararıdır. SM karar vermez, kararın verilebileceği ortamı kurar." },
      { metin: "Tech Lead Can tek başına karar versin", etki: { moral: -3 }, uyum: "notr", aciklama: "Hızlıdır ama takımın kendi kendini yönetmesini zayıflatır; Can bir Developer'dır, ayrı bir hiyerarşi değil." },
      { metin: "Product Owner Elif karar versin", etki: { moral: -4 }, uyum: "aykiri", aciklama: "Teknik tasarım PO'nun hesap verebilirliği değildir; PO ne yapılacağını sıralar, nasıl yapılacağını Developers belirler." },
      { metin: "Konuyu bölüm yöneticisine taşı", etki: { moral: -5, puan: -2 }, uyum: "aykiri", aciklama: "Kendi kendini yöneten takımın kararını dışarıya taşımak hem yavaşlatır hem güveni zedeler." },
    ],
  },
  {
    id: "kucuk-istek",
    baslik: "\"Küçük bir şey\"",
    rol: "po",
    metin: "Öğrenci temsilcisi Arda doğrudan Ayşe'ye yazmış: \"Sipariş düğmesi gri, kimse görmüyor. Rengini değiştirmek beş dakikalık iş, bu Sprint'e ekleyin.\"",
    secenekler: [
      { metin: "Arda'ya teşekkür et, isteği Product Backlog'a al ve sırasını sonra belirle", etki: { backlogaEkle: BUTON, guven: 1 }, uyum: "uygun", aciklama: "Paydaş istekleri PO'dan geçer; Product Backlog tek iş kaynağıdır." },
      { metin: "Ayşe hemen yapsın, küçük zaten", etki: { ekle: BUTON, odak: -3 }, uyum: "aykiri", aciklama: "Küçük işler birikir ve Sprint Backlog'u PO'nun bilmediği işlerle doldurur; geliştiriciye doğrudan iş vermek alışkanlığa dönüşür." },
      { metin: "Arda'ya bu tür isteklerle gelmemesini söyle", etki: { guven: -4 }, uyum: "aykiri", aciklama: "Paydaşla iş birliği Manifesto'nun değeridir; istek reddedilmez, doğru yere yönlendirilir." },
    ],
  },
  {
    id: "buyuk-cikti",
    baslik: "Öğe beklenenden büyük çıktı",
    metin: "Developers, Sprint'teki bir öğenin tahmin edilenin neredeyse iki katı olduğunu fark etti. Bu gidişle Sprint Goal riske giriyor.",
    secenekler: [
      { metin: "Developers PO ile kapsamı yeniden görüşsün; hedefe katkısı olmayan bir öğe sonraki Sprint'e kalsın", etki: { puan: -4, cikar: true }, uyum: "uygun", aciklama: "Rehber: iş beklenenden farklı çıkarsa Developers kapsamı PO ile yeniden görüşür; Sprint Goal korunur." },
      { metin: "Sprint Goal'ü değiştir, bu öğeye göre yeniden yaz", etki: { puan: -4, odak: -5, guven: -3 }, uyum: "aykiri", aciklama: "Sprint Goal Sprint boyunca sabittir; hedefi işe uydurmak odağı kaybettirir." },
      { metin: "Fazla mesaiyle yetiştir", etki: { moral: -8, borc: 4 }, uyum: "aykiri", aciklama: "Sürdürülebilir hız ilkesine ters; sorun bir sonraki Sprint'e yorgunluk olarak taşınır." },
    ],
  },
  {
    id: "sinan-bey",
    baslik: "Ödeme ekranı baskısı",
    rol: "po",
    metin: "Bilgi işlem müdürü Sinan Bey doğrudan geliştiricilere gidip ödeme ekranının bu Sprint'e alınmasını istemiş. Developers sana soruyor.",
    secenekler: [
      { metin: "Sinan Bey'le görüş, gerekçesini dinle; öğeyi Product Backlog'da değerine göre sırala", etki: { guven: 1, backlogaEkle: ODEME_ACIL }, uyum: "uygun", aciklama: "PB'yi değiştirmek isteyen PO'yu ikna eder; sıralama PO'nundur ve Sprint'in hedefi korunur." },
      { metin: "Developers kabul etsin, Sprint'e eklensin", etki: { ekle: ODEME_ACIL, odak: -6, guven: 2 }, uyum: "aykiri", aciklama: "PO'yu atlayan istekler sıralamayı anlamsızlaştırır ve Sprint Goal'ü tehlikeye atar." },
      { metin: "Sprint'i iptal et ve ödemeyle yeniden başla", etki: { puan: -8, moral: -8, guven: -4 }, uyum: "aykiri", aciklama: "Sprint Goal geçersizleşmedi; iptal bütün planlama emeğini boşa harcar." },
    ],
  },
  {
    id: "dis-bagimlilik",
    baslik: "Dış onay bekleniyor",
    metin: "Veritabanı değişikliği başka bir takımın onayını bekliyor; onay gelmeden sipariş servisi yayına çıkamaz.",
    secenekler: [
      { metin: "Bağımlılığı panoda görünür kıl; SM öteki takımla bugün görüşsün", etki: { puan: -2 }, uyum: "uygun", aciklama: "Dış bağımlılık çapraz işlevliliğin eksik olduğu yerdir; görünür kılmak onu azaltmanın ilk adımıdır." },
      { metin: "Onayı beklemeden canlıya al", etki: { borc: 8, guven: -3 }, uyum: "aykiri", aciklama: "Kalite ve güven kuralları Sprint'e yetişmek için atlanmaz." },
      { metin: "Bekle, gelince devam ederiz", etki: { puan: -5 }, uyum: "notr", aciklama: "Bekleme israftır; kimse bağımlılığı hızlandırmaya çalışmıyor." },
    ],
  },
  {
    id: "yorgunluk",
    baslik: "Takım yorgun",
    agirlik: (d) => (d.g.moral < 55 ? 2 : 0),
    metin: "Retro'dan önce bile koridorda şikâyetler duyuluyor: \"Her Sprint yetişmiyor, her Sprint hafta sonu çalışıyoruz.\"",
    secenekler: [
      { metin: "Sürdürülebilir hız: PO ile kapsamı daralt ve bir sonraki Planning'de daha az iş al", etki: { moral: 8, cikar: true }, uyum: "uygun", aciklama: "Sekizinci ilke: sponsorlar, geliştiriciler ve kullanıcılar sabit bir hızı süresiz koruyabilmelidir." },
      { metin: "Hafta sonu da çalışalım, bu Sprint önemli", etki: { moral: -10, borc: 3 }, uyum: "aykiri", aciklama: "Yorgunluk hata ve kayıp olarak geri döner; sorunun kaynağı aşırı yüklemedir." },
      { metin: "Pizza ısmarla, moral düzelsin", etki: { moral: 2 }, uyum: "notr", aciklama: "Güzel bir jest ama kök neden (aşırı yükleme) yerinde duruyor." },
    ],
  },
];

export const SENARYO: Senaryo = {
  kapasite: 36,
  gunSayisi: 10,
  gecmisHiz: [34, 38, 36],
  backlog: BACKLOG,
  hedefler: [
    { id: "menu", metin: "Öğrenciler haftalık menüyü telefondan görebilsin", etiketler: ["menu"] },
    { id: "alerjen", metin: "Alerjisi olan öğrenciler yiyebilecekleri yemekleri bulabilsin", etiketler: ["alerjen"] },
    { id: "siparis", metin: "Öğrenciler telefondan sipariş versin, mutfak siparişi görsün", etiketler: ["siparis"] },
    { id: "odeme", metin: "Öğrenciler kampüs kartıyla ödeme yapabilsin", etiketler: ["odeme"] },
    { id: "teknik", metin: "Yayın günleri korkusuz olsun", etiketler: ["teknik"] },
  ],
  olaylar: OLAYLAR,
  iyilestirmeler: [
    { id: "wip", ad: "WIP sınırı: aynı anda en fazla 3 öğe", aciklama: "Takım yeni işe başlamadan önce başlanmış işi bitirir; öğeler sırayla ve tek tek biter.", etki: { odak: 5 }, ayar: { wip: 3 } },
    { id: "dod-test", ad: "DoD'a otomatik test maddesi", aciklama: "Her öğe testle biter. Biraz yavaşlatır ama teknik borç birikmez.", etki: {}, ayar: { dodTest: true } },
    { id: "daily-pano", ad: "Daily'de panoyu yürüyelim", aciklama: "Kişi kişi değil iş iş ilerlenir; odak Sprint Goal'e döner.", etki: { odak: 8 } },
    { id: "borc-payi", ad: "Kapasitenin %10'u teknik borca", aciklama: "Her Sprint biraz yavaşlar ama teknik borç her Sprint sonunda azalır.", etki: {}, ayar: { borcPayi: true } },
    { id: "hicbiri", ad: "Bu kez iyileştirme seçmeyelim", aciklama: "Retro bir şey değiştirmeden biter.", etki: { moral: -3 } },
  ],
  geriBildirim: {
    1: [{ kim: "Öğrenci temsilcisi Arda", metin: "Menüde fiyatları da görmek istiyoruz.", oge: o("fiyat", "Menüde fiyat bilgisi", 2, 5, "menu") }],
    2: [{ kim: "Yemekhane müdürü Nurten Hanım", metin: "Mutfak ekranındaki yazılar uzaktan okunmuyor.", oge: o("buyuk-yazi", "Mutfak ekranında büyük yazı", 2, 4, "siparis") }],
    3: [{ kim: "Bilgi işlem müdürü Sinan Bey", metin: "Kart ödemesi için önce güvenlik incelemesi şart.", oge: o("guvenlik", "Kart ödemesi güvenlik incelemesi", 3, 4, "odeme", "teknik") }],
  },
  baslangic: { moral: 70, odak: 65, borc: 30, guven: 60 },
  ayarlar: { wip: null, dodTest: false, borcPayi: false },
};

export const GOREVLER: SprintGorevi[] = [
  {
    id: "ilk-sprint",
    ad: "İlk Sprint Goal'ün",
    ozet: "Bir Sprint Goal seç, ona uyan öğeleri Sprint Backlog'a al ve Sprint'in sonunda hedefi tut.",
    ipucu: "Önce hedef, sonra ona katkı veren öğeler. Takımın son Sprint'lerdeki hızı yaklaşık 36 puan; aşırı yükleme hedefi riske atar.",
    unite: 6,
    ayar: { tohum: 11, rol: "sm", sprintSayisi: 1, rastgeleOlay: false },
    hedef: (d) => d.gecmis[0]?.hedefTuttu === true,
    ornek: { hedef: "menu", sec: ["menu", "menu-foto", "kalori", "alerjen-etiket", "yayin-hatti"], iyilestirme: "wip" },
  },
  {
    id: "acil-istek",
    ad: "Sprint ortasında acil istek",
    ozet: "Sprint'in dördüncü günü yemekhane müdürü bir rapor ekranı istiyor. İsteği Rehber'e uygun yönet ve Sprint Goal'ü yine de tut.",
    ipucu: "Sprint Goal'ü tehlikeye atan değişiklik yapılmaz; yeni istekler Product Backlog'a girer.",
    unite: 6,
    ayar: { tohum: 12, rol: "sm", sprintSayisi: 1, rastgeleOlay: false, sabitOlaylar: { "1-4": "acil-rapor" } },
    hedef: (d) => d.gecmis[0]?.hedefTuttu === true && d.kayit.some((k) => k.olay === "acil-rapor" && k.uyum === "uygun"),
    ornek: { hedef: "alerjen", sec: ["alerjen-etiket", "alerjen-filtre", "alerjen-uyari", "menu", "test-betik"], iyilestirme: "wip" },
  },
  {
    id: "daily-duzelt",
    ad: "Daily'yi geri kazan",
    ozet: "Daily hem bir hesap verme toplantısına döndü hem de 35 dakika sürüyor. İkisini de düzelt; Sprint'i başladığından daha odaklı bitir.",
    ipucu: "Daily Developers içindir ve Sprint Goal'e odaklanır. Büyük takımda kişi kişi değil iş iş ilerle.",
    unite: 6,
    ayar: { tohum: 13, rol: "sm", sprintSayisi: 1, rastgeleOlay: false, sabitOlaylar: { "1-2": "daily-rapor", "1-5": "daily-uzun" } },
    hedef: (d, s) =>
      d.asama !== "planning" &&
      d.asama !== "gun" &&
      ["daily-rapor", "daily-uzun"].every((id) => d.kayit.some((k) => k.olay === id && k.uyum === "uygun")) &&
      d.g.odak > s.baslangic.odak,
    ornek: { hedef: "siparis", sec: ["siparis", "mutfak-ekran", "siparis-iptal", "kalori", "izleme"], iyilestirme: "daily-pano" },
  },
  {
    id: "kapasite",
    ad: "Ne kadar iş alınır?",
    ozet: "Üçüncü gün Okan üç günlüğüne hastalanacak. Sprint'te en az 22 puanlık iş bitir, Sprint Goal'ü tut ve Product Backlog'a bitmemiş hiçbir şey dönmesin.",
    ipucu: "Tahmin geçmiş hıza ve bu Sprint'teki kapasiteye dayanır. Kayıp kapasiteyi fazla mesaiyle değil, PO ile kapsamı görüşerek karşıla.",
    unite: 6,
    ayar: { tohum: 14, rol: "sm", sprintSayisi: 1, rastgeleOlay: false, sabitOlaylar: { "1-3": "hasta" } },
    hedef: (d) => {
      const s = d.gecmis[0];
      return !!s && s.hedefTuttu && s.donen.length === 0 && s.puan >= 22 && d.kayit.every((k) => k.uyum !== "aykiri");
    },
    ornek: { hedef: "odeme", sec: ["kart-odeme", "bakiye", "bakiye-yukle", "menu-foto", "kalori", "menu"], iyilestirme: "wip" },
  },
  {
    id: "po-baski",
    ad: "Product Owner olarak baskı altında",
    ozet: "Bu kez Product Owner sensin. Bilgi işlem müdürü ve öğrenci temsilcisi Product Backlog'u atlayıp doğrudan geliştiricilere iş veriyor. İkisini de Rehber'e uygun yönet ve Sprint Goal'ü tut.",
    ipucu: "Product Backlog tek iş kaynağıdır ve sıralaması PO'nundur. Paydaşı reddetme, doğru yere yönlendir.",
    unite: 12,
    ayar: { tohum: 21, rol: "po", sprintSayisi: 1, rastgeleOlay: false, sabitOlaylar: { "1-3": "sinan-bey", "1-6": "kucuk-istek" } },
    hedef: (d) => d.gecmis[0]?.hedefTuttu === true && ["sinan-bey", "kucuk-istek"].every((id) => d.kayit.some((k) => k.olay === id && k.uyum === "uygun")),
    ornek: { hedef: "menu", sec: ["menu", "menu-foto", "kalori", "alerjen-etiket", "izleme"], iyilestirme: "wip" },
  },
  {
    id: "canli-hata",
    ad: "Kötü bir hafta",
    ozet: "Önce test ortamı çöküyor, iki gün sonra canlıda bir hata çıkıyor. Kullanıcıyı koru, işi görünür tut ve Sprint Goal'ü yine de tut.",
    ipucu: "Engelin kaldırılmasını sağlamak SM'nin işidir. Canlıdaki hata beklemez, ama görünmeyen iş şeffaflığı bozar.",
    unite: 11,
    ayar: { tohum: 22, rol: "sm", sprintSayisi: 1, rastgeleOlay: false, sabitOlaylar: { "1-3": "test-ortami", "1-5": "uretim-hatasi" } },
    hedef: (d) => d.gecmis[0]?.hedefTuttu === true && ["test-ortami", "uretim-hatasi"].every((id) => d.kayit.some((k) => k.olay === id && k.uyum === "uygun")),
    ornek: { hedef: "alerjen", sec: ["alerjen-etiket", "alerjen-filtre", "alerjen-uyari", "kalori"], iyilestirme: "wip" },
  },
  {
    id: "takim-karari",
    ad: "Kararı kim verir?",
    ozet: "İki geliştirici mimaride anlaşamıyor, bir dış onay da gecikiyor. Kararı doğru yerde bırak, bağımlılığı görünür kıl ve Sprint Goal'ü tut.",
    ipucu: "Nasıl yapılacağına Developers karar verir. Scrum Master karar vermez; kararın verilebileceği ortamı kurar.",
    unite: 5,
    ayar: { tohum: 23, rol: "sm", sprintSayisi: 1, rastgeleOlay: false, sabitOlaylar: { "1-2": "tartisma", "1-6": "dis-bagimlilik" } },
    hedef: (d) => d.gecmis[0]?.hedefTuttu === true && ["tartisma", "dis-bagimlilik"].every((id) => d.kayit.some((k) => k.olay === id && k.uyum === "uygun")),
    ornek: { hedef: "siparis", sec: ["siparis", "mutfak-ekran", "siparis-iptal", "menu-foto"], iyilestirme: "wip" },
  },
  {
    id: "surdurulebilir",
    ad: "Sürdürülebilir hız",
    ozet: "Bir öğe beklenenden büyük çıkıyor, ardından takımın yorgunluğu kendini gösteriyor. Fazla mesaiye başvurmadan Sprint Goal'ü tut ve Sprint'i takımın morali başladığından düşük olmadan bitir.",
    ipucu: "Sekizinci ilke: takım sabit bir hızı süresiz koruyabilmeli. Kapsam PO ile yeniden görüşülür, Sprint Goal korunur.",
    unite: 2,
    ayar: { tohum: 24, rol: "sm", sprintSayisi: 1, rastgeleOlay: false, sabitOlaylar: { "1-3": "buyuk-cikti", "1-6": "yorgunluk" } },
    hedef: (d, s) => d.asama === "bitti" && d.gecmis[0]?.hedefTuttu === true && d.g.moral >= s.baslangic.moral && d.kayit.every((k) => k.uyum !== "aykiri"),
    ornek: { hedef: "odeme", sec: ["kart-odeme", "bakiye", "bakiye-yukle", "menu-foto", "kalori", "izleme"], iyilestirme: "wip" },
  },
  {
    id: "durust-tahmin",
    ad: "Velocity'yi şişirmeden",
    ozet: "Üç Sprint boyunca hiçbir Sprint'te takımın geçmiş hızından fazla iş alma, Product Backlog'a bitmemiş iş dönmesin ve her Sprint Goal'ü tut.",
    ipucu: "Tahmin bir söz değildir. Takımın son Sprint'lerdeki hızı Planning ekranında yazar; biraz boşluk bırakmak hedefi korur.",
    unite: 9,
    ayar: { tohum: 25, rol: "sm", sprintSayisi: 3 },
    hedef: (d) => d.gecmis.length === 3 && d.gecmis.every((x) => x.hedefTuttu && x.donen.length === 0 && x.secilenPuan <= 36),
    ornek: { hedef: "menu", sec: ["menu", "menu-foto", "kalori", "alerjen-etiket", "izleme"], iyilestirme: "wip" },
  },
  {
    id: "wip-akis",
    ad: "Başlamayı bırak, bitirmeye başla",
    ozet: "İlk Sprint'in Retro'sunda WIP sınırı koy; iki Sprint'te toplam en az 50 puanlık iş bitir ve iki Sprint Goal'ü de tut.",
    ipucu: "Herkes her işe başlayınca bağlam değiştirme verimi düşürür. WIP sınırıyla öğeler sırayla ve tek tek biter.",
    unite: 10,
    ayar: { tohum: 26, rol: "sm", sprintSayisi: 2, rastgeleOlay: false },
    hedef: (d) => d.gecmis.length === 2 && d.iyilestirmeler[0] === "wip" && d.gecmis.every((x) => x.hedefTuttu) && d.gecmis.reduce((t, x) => t + x.puan, 0) >= 50,
    ornek: { hedef: "siparis", sec: ["siparis", "mutfak-ekran", "hazir-bildirim", "siparis-iptal", "menu", "bakiye"], iyilestirme: "wip" },
  },
  {
    id: "borc-ode",
    ad: "Teknik borcu öde",
    ozet: "Takımın teknik borcu 30. Dört Sprint sonunda borcu 20'nin altına indir ve en az üç Sprint Goal tut.",
    ipucu: "Zayıf DoD her biten öğeye borç ekler. Önce borcun artmasını durdur, sonra her Sprint ona düzenli bir pay ayır.",
    unite: 11,
    ayar: { tohum: 27, rol: "sm", sprintSayisi: 4, rastgeleOlay: false },
    hedef: (d) => d.asama === "bitti" && d.g.borc < 20 && d.gecmis.filter((x) => x.hedefTuttu).length >= 3,
    ornek: { hedef: "teknik", sec: ["yayin-hatti", "test-betik", "izleme", "menu"], iyilestirme: ["dod-test", "borc-payi"] },
  },
  {
    id: "dort-sprint",
    ad: "Dört Sprint, bir ürün",
    ozet: "Rastgele olaylarla dört Sprint oyna. Karnede en az 70 puan al, en az üç Sprint Goal tut ve hiçbir olayda Rehber'e aykırı bir hamle yapma.",
    ipucu: "Bütün ünitelerin özeti: gerçekçi plan, korunan Sprint Goal, görünür iş, uygulanabilir Retro iyileştirmeleri.",
    unite: 12,
    ayar: { tohum: 28, rol: "sm", sprintSayisi: 4 },
    hedef: (d) => d.asama === "bitti" && karne(d).puan >= 70 && d.gecmis.filter((x) => x.hedefTuttu).length >= 3 && d.kayit.every((k) => k.uyum !== "aykiri"),
    ornek: { hedef: "menu", sec: ["menu", "menu-foto", "kalori", "alerjen-etiket", "izleme"], iyilestirme: ["wip", "dod-test", "borc-payi"] },
  },
];

const icerik: SprintIcerigi = { senaryo: SENARYO, gorevler: GOREVLER };
export default icerik;
