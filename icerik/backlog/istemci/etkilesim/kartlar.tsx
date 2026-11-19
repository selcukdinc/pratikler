// Kart sınıflandırma şekilleri (Backlog pratiği). Agile ve Scrum pratiğinin genel
// sınıflandırma bileşenini (Siniflandir) kendi verileriyle kullanır: her kartta bir
// durum, altında kategoriler; seçim yapılınca doğru kategori ve gerekçesi görünür.
// Hepsi tarayıcıda çalışır, istek atmaz.
import { Siniflandir, type Kart } from "../../../agile/istemci/etkilesim/siniflandir";

// ---------------- G-S1-01: backlog buzdağı ----------------

const KATMANLAR = ["Sprint'e hazır", "Yakında, kaba", "Uzak, çok kaba"];
export const BUZDAGI_KARTLARI: Kart[] = [
  { metin: "Bir yurt öğrencisi olarak bakiyemi kartla 50 TL yükleyebilmek istiyorum; 3 kabul kriteri, 5 puan.", dogru: "Sprint'e hazır", neden: "Küçük, kabul kriterli, tahminli: bir sonraki Sprint Planning'de seçilebilir." },
  { metin: "Bakiye yükleme sonrası e-posta makbuzu; 2 kabul kriteri, 2 puan.", dogru: "Sprint'e hazır", neden: "Ayrıntısı konuşulmuş ve bir Sprint'e rahat sığıyor." },
  { metin: "Bakiye iadesi (mezun olan öğrenci kalan parasını geri alabilsin), kaba tahmin: M.", dogru: "Yakında, kaba", neden: "Bir iki Sprint sonra sıra gelecek; feature büyüklüğünde, bölünmeyi bekliyor." },
  { metin: "Akademisyenler için misafir yemeği ısmarlama; henüz bölünmedi, T-shirt: L.", dogru: "Yakında, kaba", neden: "Ne istendiği belli ama ayrıntı ve bölme refinement'a kalmış." },
  { metin: "Kampüs dışındaki anlaşmalı kafelerde de bakiyeyle ödeme.", dogru: "Uzak, çok kaba", neden: "Epic düzeyinde bir fikir; aylar sonra, belki hiç. Bugün ayrıntılandırmak israf olur." },
  { metin: "Yemek israfını azaltmak için yapay zekâ ile porsiyon tahmini.", dogru: "Uzak, çok kaba", neden: "Büyük ve belirsiz bir girişim; önce bir deneyle değeri sınanmalı." },
  { metin: "Menü ekranında alerjen simgesi; Given/When/Then yazılmış, 3 puan.", dogru: "Sprint'e hazır", neden: "İnce, test edilebilir ve tahminli." },
  { metin: "Yemekhane görevlileri için stok ekranı; konuşuldu ama bölünmedi, kaba tahmin 20-40 puan.", dogru: "Yakında, kaba", neden: "Sırası yaklaşan ama henüz bir Sprint'e sığmayacak büyüklükte iş." },
];
export const BacklogBuzdagi = () => (
  <Siniflandir kategoriler={KATMANLAR} kartlar={BUZDAGI_KARTLARI} soru="Her öğe buzdağının hangi katmanında olmalı? Ayrıntı düzeyine ve sırasına bak." />
);

// ---------------- G-S1-02: backlog sağlık kontrolü (DEEP) ----------------

const DEEP_KOKULARI = ["Sağlıklı", "Uygun ayrıntıda değil", "Tahmin yok", "Sırasız ya da kopya", "Mezarlık"];
export const SAGLIK_KARTLARI: Kart[] = [
  { metin: "Sıranın 2. öğesi: \"Ödeme iyileştirmeleri\". Açıklama yok, kabul kriteri yok; Sprint Planning yarın.", dogru: "Uygun ayrıntıda değil", neden: "En üstteki öğe ince ve anlaşılmış olmalı; yarın seçilecek öğe hâlâ bir başlık." },
  { metin: "Sıranın 140. öğesi için 30 kabul kriteri ve ekran tasarımı hazırlanmış.", dogru: "Uygun ayrıntıda değil", neden: "Uzak öğeye erken ayrıntı: \"uygun\" ayrıntı sırasıyla orantılıdır." },
  { metin: "İlk on öğenin hiçbirinin büyüklüğü bilinmiyor; Elif sürüm tarihi soruyor.", dogru: "Tahmin yok", neden: "Kaba bile olsa büyüklük olmadan ne Sprint'e ne sürüme plan yapılır." },
  { metin: "\"Menüde fotoğraf\" ile \"Yemek görselleri\" iki ayrı yerde; biri 4., biri 58. sırada.", dogru: "Sırasız ya da kopya", neden: "Kopya öğeler sırayı bulandırır; birleştirilmeli." },
  { metin: "Backlog'un yarısı \"Yüksek öncelik\" etiketli; aralarında sıra yok.", dogru: "Sırasız ya da kopya", neden: "Rehber sıralı liste ister; eşit öncelikli yüzlerce öğe karar vermez." },
  { metin: "2023'ten beri dokunulmamış 300 öğe listenin altında duruyor.", dogru: "Mezarlık", neden: "Hiç yapılmayacak öğeler şeffaflığı düşürür; silinmeli ya da arşivlenmeli." },
  { metin: "Üstteki 8 öğe küçük ve kabul kriterli, ortadakiler feature boyunda, alttakiler birer satırlık epic.", dogru: "Sağlıklı", neden: "Buzdağı şekli: ayrıntı sırayla orantılı." },
  { metin: "Product Goal backlog'un en üstünde yazılı; her öğenin hangi hedefe hizmet ettiği görülüyor.", dogru: "Sağlıklı", neden: "Product Goal backlog'un taahhüdüdür; görünür olması sıralamayı kolaylaştırır." },
];
export const SaglikKontrolu = () => (
  <Siniflandir kategoriler={DEEP_KOKULARI} kartlar={SAGLIK_KARTLARI} soru="Squad'ın backlog'undaki her durum sağlıklı mı, yoksa hangi DEEP sorununu gösteriyor?" />
);

// ---------------- G-S2-01: hiyerarşi ağacı ----------------

const SEVIYELER = ["Theme", "Epic", "Feature", "Story", "Task"];
export const HIYERARSI_KARTLARI: Kart[] = [
  { metin: "Öğle saatinde sırada bekleme süresini yarıya indirmek (birkaç ay, birçok yetenek).", dogru: "Epic", neden: "Birden çok Sprint'e yayılan, feature'lara bölünecek bir hedef." },
  { metin: "Önceden sipariş verip sıra beklemeden teslim alma.", dogru: "Feature", neden: "Kullanıcıya görünen bir yetenek; birkaç story'den oluşur." },
  { metin: "Bir yurt öğrencisi olarak siparişimin hazır olduğunu bildirimle öğrenmek istiyorum, böylece sırada beklemem.", dogru: "Story", neden: "Tek bir ihtiyaç, faydasıyla; bir Sprint'e sığar." },
  { metin: "Bildirim servisi için kuyruk tablosunu oluştur.", dogru: "Task", neden: "Kullanıcıya doğrudan değer söylemeyen teknik adım." },
  { metin: "Erişilebilirlik (menü, ödeme ve bildirim ekranlarının hepsinde).", dogru: "Theme", neden: "Birçok epic ve story'yi kesen odak alanı." },
  { metin: "Bakiye yükleme, harcama ve iade (bir çeyrek sürecek).", dogru: "Epic", neden: "Birden çok yetenek içeren büyük iş." },
  { metin: "Bakiye yükleme.", dogru: "Feature", neden: "Epic'in içindeki yeteneklerden biri." },
  { metin: "Bir gündüzlü öğrenci olarak bakiyemi kartla yükleyebilmek istiyorum, böylece kasada nakit aramam.", dogru: "Story", neden: "Bakiye yükleme feature'ının bir dilimi." },
  { metin: "Ödeme sağlayıcısının test anahtarlarını kasaya ekle.", dogru: "Task", neden: "Story'yi bitirmek için yapılan teknik iş." },
  { metin: "Sürdürülebilirlik ve israfı azaltma.", dogru: "Theme", neden: "Porsiyon tahmini, artan yemek bildirimi gibi farklı işleri bağlayan geniş konu." },
];
export const HiyerarsiAgaci = () => (
  <Siniflandir kategoriler={SEVIYELER} kartlar={HIYERARSI_KARTLARI} soru="Her öğe hiyerarşinin hangi seviyesinde durmalı?" />
);

// ---------------- G-S3-01: etki haritası ----------------

const ETKI_SEVIYELERI = ["Neden (hedef)", "Kim (aktör)", "Nasıl (etki)", "Ne (teslimat)"];
export const ETKI_KARTLARI: Kart[] = [
  { metin: "Atılan yemek miktarı bu dönem %20 azalsın.", dogru: "Neden (hedef)", neden: "Haritanın kökü: ölçülebilir bir iş hedefi." },
  { metin: "Yemekhane görevlileri.", dogru: "Kim (aktör)", neden: "Davranışı hedefi etkileyebilecek kişiler." },
  { metin: "Öğrenciler.", dogru: "Kim (aktör)", neden: "En büyük aktör grubu; ne kadar yemek alındığını onlar belirler." },
  { metin: "Görevliler günün tahmini porsiyon sayısına göre pişirsin.", dogru: "Nasıl (etki)", neden: "Aktörün davranışında istenen değişim." },
  { metin: "Öğrenciler yemeği bir gün önceden ayırtsın.", dogru: "Nasıl (etki)", neden: "Bu değişim tahmini kolaylaştırır; hedefe hizmet eder." },
  { metin: "Mutfak ekranında ayırtma sayılarının grafiği.", dogru: "Ne (teslimat)", neden: "Etkiyi sağlamanın yollarından biri; backlog öğesi olur." },
  { metin: "Uygulamada \"yarın için ayırt\" düğmesi.", dogru: "Ne (teslimat)", neden: "Öğrencilerin ayırtma davranışını destekleyen özellik." },
  { metin: "Akşam artan yemeği indirimle satan bildirim.", dogru: "Ne (teslimat)", neden: "Öğrencilerin artanı almasını sağlayan başka bir teslimat." },
];
export const EtkiHaritasi = () => (
  <Siniflandir kategoriler={ETKI_SEVIYELERI} kartlar={ETKI_KARTLARI} soru="Her kart etki haritasının hangi seviyesine yazılır?" />
);

// ---------------- G-S4-02: iyi mi, kötü mü? ----------------

const STORY_TESHIS = ["İyi", "Rol sorunu", "Fayda yok", "Birden çok istek", "Çözümü dikte ediyor"];
export const TESHIS_KARTLARI: Kart[] = [
  { metin: "Bir yurt öğrencisi olarak akşam yemeğini önceden ayırtmak istiyorum, böylece derse geç kaldığımda yemeksiz kalmam.", dogru: "İyi", neden: "Somut rol, tek istek, açık fayda." },
  { metin: "Bir geliştirici olarak ödeme tablosuna indeks eklemek istiyorum.", dogru: "Rol sorunu", neden: "Kılık değiştirmiş task: asıl kullanıcı ve ihtiyacı (yavaş ödeme) görünmüyor." },
  { metin: "Bir öğrenci olarak menüyü PDF olarak indirebilmek istiyorum.", dogru: "Fayda yok", neden: "Neden istendiği yazmıyor; belki çevrimdışı görmek, belki yazdırmak. Fayda çözümü değiştirebilir." },
  { metin: "Bir öğrenci olarak menüyü görmek, yemeği ayırtmak ve bakiyemi yüklemek istiyorum, böylece hızlı yemek yerim.", dogru: "Birden çok istek", neden: "Üç ayrı ihtiyaç; ayrı sıralanır ve ayrı test edilir." },
  { metin: "Bir yemekhane müdürü olarak porsiyon raporunu Excel'de, mavi başlıklı ve 12 punto istiyorum, böylece yarınki pişirmeyi planlarım.", dogru: "Çözümü dikte ediyor", neden: "Rol ve fayda var ama biçim ayrıntıları konuşmayı kapatıyor; asıl ihtiyaç yarın kaç porsiyon pişirileceği." },
  { metin: "Bir sistem olarak her gece bakiye mutabakatı yapmak istiyorum.", dogru: "Rol sorunu", neden: "Sistem bir şey istemez; muhasebe sorumlusunun ihtiyacı yazılmalı." },
  { metin: "Bir akademisyen olarak misafirim için yemek ısmarlayabilmek istiyorum, böylece misafirimi kasada bekletmem.", dogru: "İyi", neden: "Kullanıcı rolü somut ve faydası açık." },
  { metin: "Bir kullanıcı olarak uygulamanın hızlı olmasını istiyorum.", dogru: "Fayda yok", neden: "Ne hızlı, ne kadar hızlı, neden? Ölçülebilir bir ihtiyaç ve fayda yok (ayrıca \"kullanıcı\" çok genel)." },
];
export const IyiMiKotuMu = () => (
  <Siniflandir kategoriler={STORY_TESHIS} kartlar={TESHIS_KARTLARI} soru="Her story iyi mi, yoksa en belirgin sorunu ne?" />
);

// ---------------- G-S5-01: INVEST dedektifi ----------------

const INVEST = ["Independent", "Negotiable", "Valuable", "Estimable", "Small", "Testable"];
export const INVEST_KARTLARI: Kart[] = [
  { metin: "\"Sipariş servisini yaz\" story'si; ekran ve veri tabanı başka story'lerde.", dogru: "Valuable", neden: "Tek başına kullanıcıya hiçbir şey vermeyen yatay bir dilim." },
  { metin: "\"Bakiye ekranı\" story'si ancak \"Bakiye servisi\" story'si bittikten sonra başlayabiliyor; o da \"Bakiye tablosu\"nu bekliyor.", dogru: "Independent", neden: "Sıkı bir zincir: Product Owner sırayı değiştiremez, bir gecikme hepsini durdurur." },
  { metin: "\"Rapor Excel'de, mavi başlıklı, 12 punto, A4 yatay olmalı.\"", dogru: "Negotiable", neden: "Biçim dikte ediliyor; asıl ihtiyaç (yarın kaç porsiyon pişirileceği) konuşulmuyor." },
  { metin: "\"Turnikede kartla geçiş\"; takım eski kart sistemini hiç görmemiş, tahmin veremiyor.", dogru: "Estimable", neden: "Teknik bilgi eksik; kısa bir spike gerekiyor." },
  { metin: "\"Öğrenciler yemekhaneyle ilgili her şeyi uygulamadan yapabilsin.\"", dogru: "Small", neden: "Bu bir epic; aylarca sürer. Feature'lara ve story'lere bölünmeli." },
  { metin: "\"Uygulama öğrencilere keyifli gelmeli.\"", dogru: "Testable", neden: "Ne zaman tamam olduğu ölçülemez; bir ölçü ve koşul gerekiyor." },
  { metin: "\"Bir geliştirici olarak loglama kütüphanesini değiştirmek istiyorum.\"", dogru: "Valuable", neden: "Kime hangi değer? \"Gece hatası 5 dakikada bulunsun, öğle kesintisi kısalsın\" yazılırsa sıralanabilir." },
  { metin: "\"Burs indirimi\"; takım burs kurallarını bilmediği için 3 de diyor 21 de.", dogru: "Estimable", neden: "Alan bilgisi eksik; burs ofisiyle bir konuşma yeter." },
  { metin: "\"Ödeme hızlı olmalı.\"", dogru: "Testable", neden: "\"Öğle saatinde ödemelerin %95'i 2 saniyede bitsin\" gibi ölçülebilir hâle getirilmeli." },
];
export const InvestDedektifi = () => (
  <Siniflandir kategoriler={INVEST} kartlar={INVEST_KARTLARI} soru="Her story INVEST'in en çok hangi harfini bozuyor?" />
);

// ---------------- G-S6-02: Example Mapping masası ----------------

const EM_RENKLERI = ["Kural (mavi)", "Örnek (yeşil)", "Soru (kırmızı)"];
export const EM_KARTLARI: Kart[] = [
  { metin: "Ayırtma, yemek saatinden 30 dakika öncesine kadar iptal edilebilir.", dogru: "Kural (mavi)", neden: "Genel bir iş kuralı; altına örnekler gelir." },
  { metin: "Zehra 12.00'de başlayan öğle yemeğini 11.20'de iptal eder; bakiyesi iade edilir.", dogru: "Örnek (yeşil)", neden: "Kuralı somut bir durumla gösteriyor." },
  { metin: "Zehra 11.45'te iptal etmek ister; uygulama \"iptal süresi geçti\" der.", dogru: "Örnek (yeşil)", neden: "Kuralın sınırını gösteren olumsuz örnek." },
  { metin: "Bir öğrenci günde en fazla iki öğün ayırtabilir.", dogru: "Kural (mavi)", neden: "İkinci bir kural; story büyüyorsa ayrı story'ye bölünebilir." },
  { metin: "Burslu öğrencinin ayırttığı indirimli yemek iptal edilince indirim hakkı geri gelir mi?", dogru: "Soru (kırmızı)", neden: "Takım cevabı bilmiyor; burs ofisine sorulmalı. Cevaplanmadan story hazır değil." },
  { metin: "Mert sabah ve öğle ayırtmış; akşam için de ayırtmak ister, uygulama izin vermez.", dogru: "Örnek (yeşil)", neden: "Günlük iki öğün kuralının örneği." },
  { metin: "Yemekhane o gün kapanırsa ayırtmalar kendiliğinden iptal mi olur?", dogru: "Soru (kırmızı)", neden: "Kimsenin henüz düşünmediği bir durum; Nurten Hanım'a sorulmalı." },
];
export const ExampleMapping = () => (
  <Siniflandir kategoriler={EM_RENKLERI} kartlar={EM_KARTLARI} soru={"\"Yemek ayırtma\" story'si için masadaki her kart hangi renge yazılmalı?"} />
);

// ---------------- G-S7-02: SPIDR bölücü ----------------

const SPIDR = ["Spike", "Path", "Interface", "Data", "Rules"];
export const SPIDR_KARTLARI: Kart[] = [
  { metin: "Bakiye kartla, havaleyle ya da kampüs kioskundan yüklenebilecek.", dogru: "Path", neden: "Aynı hedefe giden farklı yollar: önce kart, diğerleri sonra." },
  { metin: "Menü hem telefonda hem yemekhane girişindeki büyük ekranda görünecek.", dogru: "Interface", neden: "Farklı arayüz ya da cihaz: önce telefon." },
  { metin: "Menü verisi dört yemekhaneden dört farklı biçimde geliyor.", dogru: "Data", neden: "Farklı veri kaynakları: önce merkez yemekhane." },
  { metin: "Ayırtmada iptal süresi, günlük sınır ve burs önceliği kuralları var.", dogru: "Rules", neden: "Önce temel ayırtma, kurallar sonraki story'lerde." },
  { metin: "Turnike entegrasyonu için kart sisteminin nasıl çalıştığını kimse bilmiyor.", dogru: "Spike", neden: "Önce kısa bir araştırma; sonra story tahmin edilebilir ve bölünebilir." },
  { metin: "Sipariş hazır bildirimi uygulama içi, SMS ve e-postayla gidebilecek.", dogru: "Interface", neden: "Bildirim kanalları farklı arayüzlerdir; önce uygulama içi bildirim." },
  { metin: "Yorumlar metin, fotoğraf ya da kısa video olabilir.", dogru: "Data", neden: "Farklı veri türleri: önce metin." },
  { metin: "Grup siparişinde ödeme tek kişiden ya da kişi başı alınabilir.", dogru: "Path", neden: "Akışta iki farklı yol; önce tek kişinin ödediği yol." },
];
export const SpidrBolucu = () => (
  <Siniflandir kategoriler={SPIDR} kartlar={SPIDR_KARTLARI} soru="Her büyük story için SPIDR'ın en doğal bölme yolu hangisi?" />
);

// ---------------- G-S8-01: nereye yazılır? ----------------

const YERLER = ["Kabul kriteri", "Definition of Done", "Ayrı backlog öğesi", "Task"];
export const NEREYE_KARTLARI: Kart[] = [
  { metin: "Her yeni ekran WCAG 2.1 AA erişilebilirlik denetiminden geçer.", dogru: "Definition of Done", neden: "Bütün öğeler için ortak kalite ölçütü." },
  { metin: "Sipariş onayı ekranda 2 saniye içinde görünür.", dogru: "Kabul kriteri", neden: "Yalnızca sipariş davranışına ait ölçülebilir koşul." },
  { metin: "Öğle saatindeki 3000 eş zamanlı kullanıcı için önbellek katmanı kur.", dogru: "Ayrı backlog öğesi", neden: "Kendisi iş gerektiren bir değişiklik; değeriyle sıralanır." },
  { metin: "Kod en az bir kişi tarafından incelendi.", dogru: "Definition of Done", neden: "Her öğe için geçerli." },
  { metin: "Ödeme sağlayıcısının test anahtarlarını kasaya ekle.", dogru: "Task", neden: "Bir story'yi bitirmek için teknik adım." },
  { metin: "Kişisel veriler (öğrenci numarası) loglara yazılmaz.", dogru: "Definition of Done", neden: "Her değişiklikte geçerli bir güvenlik ve KVKK ölçütü." },
  { metin: "Ödeme kütüphanesini yeni ana sürüme geçir; eski sürümün güvenlik desteği Mart'ta bitiyor.", dogru: "Ayrı backlog öğesi", neden: "Riski ve tarihiyle Product Owner'ın sıralayacağı teknik iş." },
  { metin: "Bakiye 10 TL'nin altına inince öğrenciye bildirim gider.", dogru: "Kabul kriteri", neden: "Bakiye story'sinin işlevsel koşulu." },
  { metin: "Bildirim servisi için kuyruk tablosunu oluştur.", dogru: "Task", neden: "Story'nin içindeki teknik adım; Developers Sprint'te ekler." },
];
export const NereyeYazilir = () => (
  <Siniflandir kategoriler={YERLER} kartlar={NEREYE_KARTLARI} soru="Her madde backlog'da nereye yazılmalı?" />
);

// ---------------- G-S9-01: kova yöntemi ----------------

const KOVALAR = ["1-2", "3-5", "8", "13+ (böl)"];
export const KOVA_KARTLARI: Kart[] = [
  { metin: "Menü kartındaki yazım hatasını düzelt.", dogru: "1-2", neden: "Referanstan (menüye fotoğraf, 2) bile küçük; tek ekranda tek değişiklik." },
  { metin: "Menüde alerjen simgesi göster (veri hazır, yalnızca gösterilecek).", dogru: "1-2", neden: "Referansa çok benzer: veri var, tek ekranda gösterim." },
  { metin: "Siparişi yemekten 30 dakika öncesine kadar iptal et, bakiye geri yüklensin.", dogru: "3-5", neden: "Bir iş kuralı, bakiye hareketi ve iki kabul kriteri: referansın iki katı kadar." },
  { metin: "Öğle menüsünü önceden sipariş edip bakiyeden öde.", dogru: "3-5", neden: "Uçtan uca ince bir dilim; üç katmana dokunuyor ama tek menü, tek ödeme yolu." },
  { metin: "Yemeğin hazır olduğunu telefona bildirim olarak gönder.", dogru: "8", neden: "Bildirim altyapısı ilk kez kuruluyor; izin kapalı telefonlar gibi olumsuz yollar da var." },
  { metin: "Kartla bakiye yükleme (ödeme sağlayıcının test ortamı yok).", dogru: "8", neden: "İş orta büyüklükte ama belirsizlik yüksek; tahmin büyür, önce bir spike düşünülmeli." },
  { metin: "Dört yemekhanenin menü verisini tek biçimde birleştir ve hepsinde sipariş al.", dogru: "13+ (böl)", neden: "Dört farklı veri kaynağı: SPIDR'ın Data yoluyla önce tek yemekhane, sonra diğerleri." },
  { metin: "Öğrenciler yemekhaneyle ilgili her şeyi uygulamadan yapabilsin.", dogru: "13+ (böl)", neden: "Bu bir epic; kovaya girmeden önce feature'lara ve story'lere bölünmeli." },
];
export const KovaYontemi = () => (
  <Siniflandir kategoriler={KOVALAR} kartlar={KOVA_KARTLARI} soru={"Referans story: \"Menüye yemek fotoğrafı ekle\" = 2 puan. Her story hangi kovaya girer?"} />
);

// ---------------- G-S10-01: Kano modeli ----------------

const KANO = ["Temel", "Performans", "Heyecan verici", "İlgisiz"];
export const KANO_KARTLARI: Kart[] = [
  { metin: "Kartla ödeme yapılırken kart bilgisinin güvende olması.", dogru: "Temel", neden: "Olmazsa öfke, olunca kimse teşekkür etmez." },
  { metin: "Öğle saatinde siparişin onaylanma süresi.", dogru: "Performans", neden: "Ne kadar kısaysa memnuniyet o kadar artar; doğrusal bir ilişki." },
  { metin: "Doğum gününde öğrenciye ücretsiz tatlı hakkı.", dogru: "Heyecan verici", neden: "Beklenmiyor; olunca sevindirir, olmayınca kimse fark etmez." },
  { metin: "Menüde yemeğin hangi yemekhanede piştiği.", dogru: "İlgisiz", neden: "Öğrencilerin çoğu için memnuniyete etkisi yok." },
  { metin: "Siparişin doğru yemekle teslim edilmesi.", dogru: "Temel", neden: "Beklenen en temel şey; yanlış teslim güveni yok eder." },
  { metin: "Bakiyenin ay sonuna kaç öğün yeteceğini gösteren tahmin.", dogru: "Heyecan verici", neden: "Kimse istemedi; ilk görüldüğünde şaşırtır. Zamanla beklentiye dönüşebilir." },
  { metin: "Menüde gösterilen yemek çeşidi sayısı.", dogru: "Performans", neden: "Çeşit arttıkça memnuniyet artar, azaldıkça düşer." },
  { metin: "Uygulama simgesinin rengini değiştirebilmek.", dogru: "İlgisiz", neden: "Bekleme süresine ya da yemeğe etkisi yok; çoğu öğrenci umursamaz." },
];
export const KanoModeli = () => (
  <Siniflandir kategoriler={KANO} kartlar={KANO_KARTLARI} soru="Kampüs yemekhanesi uygulamasının her özelliği öğrenciler için Kano'nun hangi kategorisinde?" />
);

// ---------------- G-S11-01: DoR mı, DoD mi, kabul kriteri mi? ----------------

const HAZIR = ["Definition of Ready", "Definition of Done", "Kabul kriteri"];
export const HAZIR_KARTLARI: Kart[] = [
  { metin: "Story'nin dış bir ekibe bağımlılığı yok ya da çözüldü.", dogru: "Definition of Ready", neden: "Sprint'e girmeden önce bakılan bir koşul; işin başlayabilmesiyle ilgili." },
  { metin: "Takım story'yi tahmin etti ve bir Sprint'e sığdığına inanıyor.", dogru: "Definition of Ready", neden: "Rehber'in \"bir Sprint içinde Done yapılabilir\" ölçüsünün takımdaki karşılığı." },
  { metin: "Kabul kriterleri yazıldı ve test uzmanı nasıl doğrulayacağını biliyor.", dogru: "Definition of Ready", neden: "Kriterlerin varlığı hazır olmanın koşuludur; kriterlerin kendisi başka bir şeydir." },
  { metin: "Kod en az bir kişi tarafından incelendi.", dogru: "Definition of Done", neden: "Bütün öğeler için geçerli bir kalite ölçütü." },
  { metin: "Otomatik testler geçti ve ana dala birleştirildi.", dogru: "Definition of Done", neden: "Her öğenin Increment'e girmesi için gereken ortak ölçüt." },
  { metin: "Her yeni ekran erişilebilirlik denetiminden geçti.", dogru: "Definition of Done", neden: "Bütün ekranları kapsayan kalite koşulu (8. ünite)." },
  { metin: "Bakiye yetersizse sipariş alınmaz ve eksik tutar gösterilir.", dogru: "Kabul kriteri", neden: "Yalnızca sipariş story'sine özgü davranış." },
  { metin: "İptal, yemekten 30 dakika öncesine kadar yapılabilir.", dogru: "Kabul kriteri", neden: "Tek bir story'nin iş kuralı." },
];
export const HazirMi = () => (
  <Siniflandir kategoriler={HAZIR} kartlar={HAZIR_KARTLARI} soru="Her madde nereye yazılır: Definition of Ready, Definition of Done, yoksa bir story'nin kabul kriteri mi?" />
);
