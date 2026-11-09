// Sitedeki yenilikler, en yenisi en üstte. Kullanıcıya görünen her değişiklik
// (her PR) buraya bir kayıt ekler; yenilikler.test.ts sırayı ve biçimi denetler.
// Maddeler kullanıcının diliyle yazılır: ne değişti, sana ne kazandırır.
// Markdown alt kümesi kullanılabilir (`kod`, **kalın**).

export interface Yenilik {
  // Değişikliği getiren PR'ın numarası; kaydın kimliği de budur
  pr: number;
  // YYYY-AA-GG
  tarih: string;
  baslik: string;
  maddeler: string[];
}

export const YENILIKLER: Yenilik[] = [
  {
    pr: 28,
    tarih: "2026-11-09",
    baslik: "Sınav kağıdı: ünite ünite soru seçimi ve kapsamlı süzgeçler",
    maddeler: [
      "Soru listesi ünitelere ayrıldı. Ünite satırındaki kutu, ünitenin görünen sorularının hepsini tek tıkla ekliyor ya da çıkarıyor; ünite açılınca sorular kavram başlıkları altında, kavramlar da kendi kutularıyla listeleniyor.",
      "Ünitenin **⋯** menüsünden: görünen sorularını ekle, bütün sorularını çıkar, rastgele 5 soru ekle, kağıttaki sorularını aynı kavramdan başka sorularla değiştir (yer ve puan kalıyor), kağıda ünite başlığı ekle.",
      "**Görünenlerin tümünü seç**, **Tümünü kaldır** ve **Kağıdı temizle** düğmeleri geldi. **Ünite başına rastgele soru seç** ile her üniteden kaç soru istediğini yazıp kağıdı tek seferde kurabiliyorsun; sorular kavramlara dağıtılarak seçiliyor.",
      "Süzgeçler: ünite (birden çok), soru türü, konu, kavram, zorluk aralığı, kaynak, öğrencilerin ilk denemedeki başarısı (kolay, orta, zor), önceki sınavlarında kullandıkların ya da hiç kullanmadıkların, kağıtta olanlar ya da olmayanlar, şekilli ve formüllü sorular. Arama şıklarda ve soru kimliğinde de bakıyor; tırnakla tam ifade aranabiliyor.",
      "Liste konu sırası, zorluk, öğrenci başarısı, uzunluk ya da rastgele sıralanabiliyor. Etkin süzgeçler listenin üstünde çip olarak duruyor ve sınav başına hatırlanıyor. Her sorunun yanında öğrencilerin doğru yapma oranı ve kaç sınavında kullandığın yazıyor.",
    ],
  },
  {
    pr: 27,
    tarih: "2026-11-09",
    baslik: "Sınav kağıdı: grupların sayfa sayısı ve otomatik sığdırma",
    maddeler: [
      "Önizlemedeki grup sekmelerinde her grubun kaç sayfa tuttuğu yazıyor; hangi sekmeye bakarsan bak bütün gruplar arka planda ölçülüyor.",
      "B, C ya da D grubu A'dan fazla sayfaya taşarsa motor o grup için başka karıştırmaları kendiliğinden deniyor ve A'nın sayfa sayısına sığanı seçiyor. Seçilen düzen sınavla birlikte saklanıyor; PDF ve Word aynı kağıdı basıyor.",
      "Hiçbir karıştırma sığmazsa önizlemenin üstünde uyarı çıkıyor ve tek tıkla yazıyı 1 punto küçültebiliyor ya da kenarı daraltabiliyorsun. Tek başına bir sütuna sığmayan (altı kesilecek) sorular da numarasıyla uyarılıyor.",
    ],
  },
  {
    pr: 26,
    tarih: "2026-11-09",
    baslik: "Sınav kağıdı: PDF'te boş sayfa ve alt yazılar düzeltildi",
    maddeler: [
      "Sınav kağıdının PDF'i artık önizlemedeki sayfa sayısıyla çıkıyor; sonda fazladan boş bir sayfa basılmıyor.",
      "Sayfaların altındaki küçük ders, sınav ve grup yazıları kaldırıldı: kağıtta, PDF'te ve Word'de yalnızca önizlemede gördüklerin var. İstersen **Kağıt ve başlık** sekmesinden altta ortada bir sayfa numarası açabilirsin; üç çıktıda da aynı görünür.",
      "Soruların yüksekliği daha hassas ölçülüyor ve başlıktaki boş alanlar da hesaba katılıyor; sayfanın en altındaki sorunun kesilmesi önlendi. Alt bilgi kapalıyken sayfaya biraz daha soru sığıyor.",
    ],
  },
  {
    pr: 25,
    tarih: "2026-11-07",
    baslik: "Yeni pratik: İşletme",
    maddeler: [
      "İşletme Pratik açıldı: isletme.selcukdinc.dev. İşletme Bilimine Giriş dersinin ilk iki bölümünden 236 çoktan seçmeli soru.",
      "Sorular on üniteye ayrıldı: ihtiyaçlar ve Maslow, üretim faktörleri, verimlilik ve rantabilite, işletmenin çevresi, işletmelerin sınıflandırılması ve KOBİ'ler, şirket türleri ve kooperatifler, büyüme stratejileri, kartel-tröst-holding gibi birlikler, kapasite ve başabaş noktası, kuruluş yeri seçimi.",
      "Verimlilik, rantabilite, kapasite kullanım oranı, atıl kapasite ve başabaş noktası için hesap soruları var; açıklamalar çözümü adım adım gösterir.",
    ],
  },
  {
    pr: 24,
    tarih: "2026-11-07",
    baslik: "Yeni pratik: 6. Sınıf Türkçe",
    maddeler: [
      "pratikler.selcukdinc.dev/sinif6/turkce açıldı: MEB Türkçe öğretim programının temalarına ve 1. dönem ortak yazılı sınavın kapsamına göre 79 soru.",
      "Sorular programdaki öğrenme çıktılarına göre ayrıldı: kelimenin anlamını metinden tahmin etme, metinde açıkça verilen bilgi, anahtar kelime, söz varlığı, yazma planı, yazım ve noktalama. Her sorunun altında çıktının kodu (ör. **T.O.6.5**) yazar.",
      "Ortak yazılı açık uçlu olduğu için soruların bir kısmı yazma sorusu: cevabını yazıyorsun, sonra örnek cevap ve puanlama ölçütüyle kendini değerlendiriyorsun.",
      "1. yazılının kapsamındaki sorular **1. yazılı** etiketiyle süzülebiliyor. 2. temadan kök-ek ve karşılaştırma soruları da var.",
    ],
  },
  {
    pr: 23,
    tarih: "2026-11-07",
    baslik: "Sınıflar için yeni adres yapısı: pratikler.selcukdinc.dev/sinif6",
    maddeler: [
      "Okul dersleri artık ayrı bir alan adı açmadan pratikler.selcukdinc.dev altında açılıyor: 6. sınıfın dersleri `/sinif6` sayfasında, her ders kendi yolunda (ör. `/sinif6/turkce`).",
      "Bu derslerde soru havuzu, ilerleme, tekrar, soru önerme, sınav hazırlama, öğrenci soru havuzu bağlantısı ve yönetim paneli diğer pratiklerdeki gibi çalışıyor; hesabın ve temanın aynısı geçiyor.",
      "Ana sayfada **Okul** başlığı altında sınıf kartları görünüyor.",
    ],
  },
  {
    pr: 22,
    tarih: "2026-11-07",
    baslik: "Yeni Pratikler ana sayfası, yönetim ve Claude paneli",
    maddeler: [
      "pratikler.selcukdinc.dev baştan tasarlandı: ilk ekranda sitenin ne olduğu, kimin için olduğu ve kısa bir canlı gösterim var. Öğrenci soru çözüp yanlışını tekrara düşürüyor, akademisyen sınavın B grubunu ve cevap anahtarını alıyor, öğretmen soru havuzu bağlantısı paylaşıyor.",
      "**Kime ne kazandırır?** bölümü öğrenciler, akademisyenler ve öğretmenler için sitenin neler yaptığını ayrı ayrı anlatıyor; akademisyen erişimi buradan istenebiliyor.",
      "Pratikler listesi alanlarına göre daha okunaklı bir rafta duruyor; Aydınlık, Karanlık ve Kahve temalarının hepsinde çalışıyor.",
      "Yönetim panelinin **Genel** sekmesi önce durumu, sonra ayarları gösteriyor; duyurunun nasıl görüneceği yazarken önizleniyor. Sekmelerde bekleyen öneri ve okunmamış mesaj sayısı görünüyor.",
      "Çatıdaki yönetim panelinde pratikler tablosu açık ünite oranını, haftalık denemeleri ve bekleyen önerileri tek bakışta veriyor.",
      "Claude paneli sadeleşti: ajanın durumu tek satırda, kurulum gerektiğinde açılıyor; iş kutusu örnek isteklerle geliyor, işler solda, seçili işin canlı günlüğü ve aşamaları sağda.",
    ],
  },
  {
    pr: 21,
    tarih: "2026-11-06",
    baslik: "Soru havuzu bağlantısı, ortak tema ve Pratikler düğmesi",
    maddeler: [
      "Akademisyenler sınav kağıdının **Gruplar ve havuz** sekmesinden öğrencilere \"sınav bu sorulardan gelecek\" bağlantısı açabiliyor: yalnızca sınavdaki sorular ya da sınavın kavramlarındaki bütün sorular.",
      "Bağlantıyı açan öğrenci **Çalışmaya başla** deyince Soru havuzu, Karma test ve Tekrar yalnızca o sorularla çalışıyor; üstteki şeritten istediği an bütün sorulara dönebiliyor. Cevaplar ve sınav kağıdı görünmüyor.",
      "Havuz sayfası kaç sorunun doğru çözüldüğünü bir ilerleme çubuğuyla gösteriyor; hesap açmadan da çalışılabiliyor.",
      "**Sınavlarım** sayfasında açılan havuzlar listeleniyor; bağlantı kopyalanıp havuz kaldırılabiliyor.",
      "Tema artık bütün pratiklerde ortak: hangi pratikte seçersen seç, son seçtiğin tema diğer pratiklerde ve Pratikler ana sayfasında da geçerli.",
      "Üst çubuktaki **Pratikler** düğmesi ve menüdeki **Bütün pratikler** bağlantısıyla herhangi bir pratikten tek tıkla pratikler.selcukdinc.dev'e geçiliyor.",
    ],
  },
  {
    pr: 20,
    tarih: "2026-11-06",
    baslik: "Sınavda A, B, C, D grupları, cevap anahtarı ve Word çıktısı",
    maddeler: [
      "Sınav kağıdının **Gruplar** sekmesinden 2, 3 ya da 4 grup seçiliyor. **Aynı sorular, karışık** kipinde her grupta soruların sırası ve şıkların yeri değişiyor; **Benzer ama farklı sorular** kipinde B, C ve D gruplarına aynı kavramdan başka sorular geliyor.",
      "Ortak metinler (\"1-5. soruları parçaya göre cevaplayınız\") yerinde kalıyor, sorular kendi bölümünde karışıyor; başka şıklara atıf yapan soruların şıklarına dokunulmuyor.",
      "Şıklar A grubunda da karışıyor, böylece doğru cevaplar aynı harfte toplanmıyor. **Yeniden karıştır** ile yeni bir dağılım alınıyor.",
      "Önizlemede her grup, **Cevap anahtarı** ve **Hepsi** ayrı ayrı görülüp PDF olarak basılabiliyor.",
      "**Word indir** bütün grupları ve cevap anahtarını tek bir .docx dosyasında veriyor; formüller düz metin olarak yazılıyor, şekilli sorularda PDF önerilir.",
    ],
  },
  {
    pr: 19,
    tarih: "2026-11-06",
    baslik: "Akademisyenler için sınav hazırlama",
    maddeler: [
      "Yeni **Akademisyen** hesabıyla hesap menüsündeki **Sınav hazırla** bölümü açılıyor: sitedeki sorulardan ünite, tür ve aramayla seçip kendi sınav kağıdını hazırlıyorsun.",
      "Kağıt gerçek boyutunda canlı görünüyor; başlık, soru metni ve şıklar kağıdın üzerinde tıklanıp yerinde düzenleniyor, sorular sıralanıp puanlanıyor, ortak metin ve yönerge eklenebiliyor.",
      "A4 ya da A3, dikey ya da yatay kağıt, tek, iki ya da üç sütun, yazı boyutu, kenar boşluğu ve 4 ya da 5 şık seçilebiliyor; üniversite, fakülte ve ders bilgileri bir sonraki sınava kendiliğinden geliyor, tarih ve süre ayarlanıyor.",
      "Değişiklikler kendiliğinden kaydediliyor; başka bir cihazdan girince sınava kaldığın yerden devam ediyorsun. **PDF indir** kağıdı önizlemede gördüğün gibi basıyor.",
    ],
  },
  {
    pr: 17,
    tarih: "2026-11-06",
    baslik: "Yönetim panelinde Claude işleri canlı izleniyor",
    maddeler: [
      "Yönetim panelinin **Claude** sekmesinde bir iş seçilince yerel ajanın ne yaptığı canlı akıyor: Claude'un yazdıkları, okuduğu ve değiştirdiği dosyalar, çalıştırdığı komutlar ve denetimlerin sonucu.",
      "Hazırlık, Claude, Denetim ve PR aşamaları bir çubukta görünüyor; iş bitince süre ve maliyet de yazılıyor.",
      "Çalışan bir iş panelden **Durdur** ile birkaç saniye içinde durdurulabiliyor.",
    ],
  },
  {
    pr: 16,
    tarih: "2026-11-06",
    baslik: "Yeni tema: Kahve",
    maddeler: [
      "Aydınlık ve Karanlık temanın yanına sıcak krem ve kahve tonlarında **Kahve** teması geldi; uzun çalışmalarda gözü yormayan yumuşak bir görünüm.",
      "Tema artık üst çubuktaki listeden seçiliyor: Sistem, Aydınlık, Karanlık ya da Kahve. Seçimin bu cihazda hatırlanır.",
    ],
  },
  {
    pr: 15,
    tarih: "2026-11-06",
    baslik: "Pratikler'in yeni logosu, kartlarda pratik logoları ve daha akıcı yükleme",
    maddeler: [
      "Pratikler artık kendi logosuyla geliyor; tarayıcı sekmesinde de onu görürsün.",
      "Ana sayfadaki her pratik kartında o pratiğin logosu var, aradığını bir bakışta bulursun. Tıp Elektroniği'nin de artık kendi logosu var.",
      "Sorular, karma test, tekrar ve ilerleme sayfası yüklenirken düz \"Yükleniyor…\" yazısı yerine sayfanın taslağı görünüyor.",
    ],
  },
  {
    pr: 14,
    tarih: "2026-11-06",
    baslik: "Telefonda daha derli toplu bir üst çubuk",
    maddeler: [
      "Telefonda Giriş ve Kayıt ol düğmeleri artık alt satıra kaymıyor, üst çubuk tek satırda kalıyor.",
      "Metin boyutu ve tema seçimi telefonda **Aa** düğmesinin altında toplandı.",
    ],
  },
  {
    pr: 13,
    tarih: "2026-11-06",
    baslik: "Mesajların ve soru önerilerin yöneticiye anında ulaşıyor",
    maddeler: [
      "Yöneticiye yazdığın mesajlar, cevapların ve soru önerilerin artık yöneticiye e-postayla da iletiliyor; daha hızlı cevap alırsın.",
      "Yönetici e-postadan cevap verirse cevap doğrudan hesabındaki e-posta adresine gelir.",
    ],
  },
  {
    pr: 12,
    tarih: "2026-11-06",
    baslik: "Yeni pratik: Biyomedikal",
    maddeler: [
      "Biyomedikal Pratik açıldı: biyomedikal.selcukdinc.dev. Biyomedikal Veri İşleme Teknikleri dersinin altı sunumu sekiz üniteye ayrıldı: EKG, EEG ve uyku, EMG, tıbbi görüntüleme ve genomik veri, veri ön işleme, görüntü ön işleme, Fourier ve dalgacık dönüşümü. Toplam 268 soru var.",
      "Her ünitenin şekilli bir konu anlatımı var: Einthoven üçgeni, EKG kağıdından kalp hızı, EEG bantları, uyku döngüleri, IQR kutu grafiği, histogram eşitleme, FFT spektrumu, Mallat filtre bankası gibi 38 şekil. Her bölümün sonunda bir \"Kendini dene\" sorusu, her ünitenin sonunda konu sonu testi var.",
      "Sayısal sorularda (kalp hızı, IQR, z-skor, gri dönüşüm, Fourier genliği, DWT katsayı sayısı) cevabını sayı olarak yazarsın; açıklama hesabı adım adım gösterir.",
    ],
  },
  {
    pr: 11,
    tarih: "2026-11-06",
    baslik: "Yeni pratik: İş İngilizcesi",
    maddeler: [
      "İş İngilizcesi Pratik açıldı: isingilizcesi.selcukdinc.dev. Elektrik motorları, elektrikli araçlar, gömülü sistemler ve IoT, güneş enerjisi ve iş ilanları olmak üzere beş ünitede 167 soru var.",
      "26.10.2026 quizinin Grup A ve Grup B soruları cevaplarıyla birlikte **Quiz** etiketiyle geldi. Diğer sorular aynı beş kalıpla yazıldı: kelimenin anlamı, cümleyi tamamlayan kelime, paragrafa uymayan cümle, Türkçe çeviri ve İngilizce çeviri.",
      "Terimler sayfasında her ünitenin hedef kelimeleri Türkçe karşılıklarıyla bir arada.",
    ],
  },
  {
    pr: 10,
    tarih: "2026-11-06",
    baslik: "Girişimcilik platforma geliyor: hesabın, misafir ilerlemen ve denemelerin seninle",
    maddeler: [
      "Girişimcilik Pratik'in 280 sorusu platforma taşındı.",
      "Eski sitedeki hesabın, misafir olarak çözdüğün sorular, aralıklı tekrar kutuların ve günlük hedefin aynen geliyor. Yeniden giriş yapman gerekmez; eski parolan da geçerli.",
    ],
  },
  {
    pr: 9,
    tarih: "2026-11-06",
    baslik: "FPGA platforma geliyor: tarayıcıda VHDL simülasyonu ve otomatik sınanan kod soruları",
    maddeler: [
      "FPGA Pratik'in altı haftalık dersleri, şekilleri, etkileşimli şekilleri ve 376 sorusu platforma taşındı.",
      "Simülasyon alanı geldi: tarayıcında VHDL yaz, sözdizimini denetle, benzetimi çalıştır ve sinyalleri dalga ekranında incele. Daha önce eski sitede açtığın proje aynı tarayıcıda yerinde durur.",
      "Kod sorularında yazdığın tasarım her denemede rastgele girişlerle üretilen gizli bir testbench'e karşı tarayıcında çalışır; takıldığın yerde beklenen ve senin çıkışın yan yana gösterilir.",
      "Derslerdeki küçük benzetimleri değiştirip yeniden çalıştırabilirsin.",
    ],
  },
  {
    pr: 8,
    tarih: "2026-11-06",
    baslik: "Fizik ve Ayrık platforma geliyor: adım adım çözümler, yazma soruları ve sembol klavyesi",
    maddeler: [
      "Fizik'in 233 ve Ayrık'ın 334 sorusu, şekilleriyle birlikte platforma taşındı.",
      "Çok adımlı çözümler artık adım adım açılır: \"Sonraki adım\" ile çözümü kendi hızında takip edebilirsin.",
      "Yeni soru türü: yazma (klasik). Cevabını yazıp örnek çözümü açıyorsun, sonra \"Doğru yaptım\", \"Kısmen\" ya da \"Yapamadım\" diye kendini değerlendiriyorsun; doğru yapamadığın sorular tekrar listene eklenir.",
      "Mantık ve küme cevapları için sembol klavyesi geldi. `p -> q`, `~p`, `p ^ q` gibi klavye yazımları da kabul edilir, kümelerde elemanların sırası önemli değildir.",
    ],
  },
  {
    pr: 7,
    tarih: "2026-11-05",
    baslik: "DSP Pratik platforma geliyor: haftalık dersler, etkileşimli şekiller ve MatStudio",
    maddeler: [
      "DSP Pratik'in sekiz haftalık dersleri, etkileşimli şekilleri, proje rehberi ve 476 sorusu platforma taşındı.",
      "Tarayıcıda çalışan MatStudio artık platformda: menüdeki MatStudio sayfasında betik yazıp çalıştırabilir, derslerdeki örnekleri değiştirip deneyebilirsin. Daha önce yazdığın betikler aynı tarayıcıda yerinde durur.",
    ],
  },
  {
    pr: 6,
    tarih: "2026-11-04",
    baslik: "Her pratiğin ilerlemesi ve günlük hedefi artık kendine ait",
    maddeler: [
      "İlerlemem sayfasındaki takvim, seri ve rozetler yalnızca o pratikte çözdüğün soruları sayar; başka bir pratikteki çalışman buraya karışmaz.",
      "Günlük hedefi her pratik için ayrı seçebilirsin. Ana sayfadaki pratik kartları bütün pratiklerdeki ilerlemeni yine birlikte gösterir.",
      "Kimya Pratik eski yeşil logosuna kavuştu.",
    ],
  },
  {
    pr: 5,
    tarih: "2026-11-04",
    baslik: "Kimya Pratik platforma geliyor: konu anlatımları, Sanal Lab ve sayısal sorular",
    maddeler: [
      "Pratikler artık kendi **konu anlatımlarını**, **Sanal Lab** deneylerini ve **çıkmış sınavlarını** taşıyabiliyor. Konu anlatımları vize ve final diye ayrılabiliyor; çıkmış sınavlar kâğıttaki sırasıyla deneme sınavı olarak çözülüyor.",
      "Yeni soru türü: **sayısal cevap**. Sonucu yazıyorsun; virgüllü ya da noktalı ondalık, `3/4`, `pi/2`, `sqrt(2)` ve `4.52e23` gibi yazımlar kabul ediliyor.",
      "Konu anlatımlarındaki \"Bu bölümü bitirdim\" ilerlemesi artık her pratik için ayrı tutuluyor.",
      "Kimya Pratik'in bütün içeriği (112 soru, 4 ünite anlatımı, 3 deney, 2 çıkmış sınav) platforma alındı. Kimya'daki hesabın, parolan ve ilerlemen taşınınca aynen sürecek; site adresi değişmeyecek.",
    ],
  },
  {
    pr: 4,
    tarih: "2026-11-03",
    baslik: "Yerel ajan claude'u bulamama ve servis kurulum hatası",
    maddeler: [
      "Ajan artık `~/.local/bin`, `/opt/homebrew/bin` ve `/usr/local/bin` klasörlerine kendisi bakıyor; `spawn claude ENOENT` hatası için `.zprofile` düzenlemek gerekmiyor.",
      "`npm run ajan:servis -- kur` eski servis kapanırken verdiği \"Input/output error\" hatasında kısa bekleyip kendisi yeniden deniyor.",
    ],
  },
  {
    pr: 3,
    tarih: "2026-11-03",
    baslik: "pratikler.selcukdinc.dev'de hesap sayfaları ve yeni pratik açma",
    maddeler: [
      "Çatı sitesinde Ayarlar, Mesajlarım ve Yönetim paneli artık açılıyor; daha önce boş kalıyor ve 404 hatası veriyordu.",
      "Çatı sitesinin yönetim panelinde **Claude** sekmesinden yeni bir pratik açılabiliyor: ad, alt alan adı ve kaynak klasörünü yazmak yetiyor, gerisini yerel ajan hazırlayıp PR olarak getiriyor.",
      "Her Claude sekmesi yerel ajanın açık olup olmadığını, hangi makinede çalıştığını ve en son ne zaman yokladığını gösteriyor. **Ajanı dene** düğmesi Claude'u çalıştırmadan makinedeki claude, gh ve depo durumunu raporluyor.",
      "Ajan kapalıysa panel nasıl açılacağını adım adım anlatıyor: anahtar Mac'in Anahtar Zinciri'nde tutuluyor, ajan tek komutla servis olarak kurulabiliyor ya da indirilen bir dosyaya çift tıklayarak Terminal'de açılabiliyor.",
    ],
  },
  {
    pr: 2,
    tarih: "2026-11-03",
    baslik: "Yönetim panelinde pratikler ve Claude",
    maddeler: [
      "Yönetim panelinin yeni **Pratikler** sekmesi bütün pratikleri yan yana gösteriyor: açık ünite, soru sayısı, son 7 gündeki denemeler ve kişiler, bekleyen öneriler.",
      "**Claude** sekmesinden bir pratiğe iş verilebiliyor (\"3. üniteye iki soru ekle\" gibi). İşi yöneticinin bilgisayarındaki yerel ajan yapıyor; denetimlerden geçerse bir PR olarak geliyor, birleştirmek yine yöneticide.",
    ],
  },
  {
    pr: 1,
    tarih: "2026-11-03",
    baslik: "Tıp Elektroniği Pratik açıldı",
    maddeler: [
      "Tıp Elektroniği dersinin ilk dört haftasından 119 soru: fizyolojik sinyaller ve ölçüm zinciri, EKG, EEG, EMG ve biyomedikal sensörler. Her soru ders notundan mı kaynak kitaptan mı geldiğini gösteren bir etiket taşır.",
      "Formüller (ör. $HR = 60 / RR$) düzgün dizilerek gösterilir.",
      "Tek hesap: pratikler.selcukdinc.dev'de açtığın hesapla bütün pratiklerde giriş yapmış olursun; ilerlemen her pratikte ayrı tutulur ve katalog sayfasında hepsini bir arada görürsün. Hesap açmadan misafir olarak çözmek de mümkün.",
    ],
  },
];
