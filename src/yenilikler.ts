// Sitedeki yenilikler, en yenisi en üstte. Kullanıcıya görünen her değişiklik
// (her PR) buraya bir kayıt ekler; yenilikler.test.ts sırayı ve biçimi denetler.
// Maddeler kullanıcının diliyle yazılır: ne değişti, sana ne kazandırır.
// Markdown alt kümesi kullanılabilir (`kod`, **kalın**). Yalnızca yöneticiyi ilgilendiren
// (yönetim paneli, Claude, yerel ajan) kayıt ya da madde kitle: "yonetici", yalnızca sınav
// hazırlayan akademisyeni ilgilendiren kitle: "akademisyen" alır.

// Kimin göreceği: herkes; akademisyen (akademisyen ve yönetici); yonetici (yalnızca yönetici).
// Kayıt bir kitle alabilir, tek tek maddeler de kendi kitlesini alabilir. Kişinin görebileceği
// maddesi kalmayan kayıt hiç görünmez ve "Yeni" rozetini artırmaz (src/lib/yenilik.ts).
export type Kitle = "herkes" | "akademisyen" | "yonetici";
export type Madde = string | { metin: string; kitle: Kitle };

export interface Yenilik {
  // Değişikliği getiren PR'ın numarası; kaydın kimliği de budur
  pr: number;
  // YYYY-AA-GG
  tarih: string;
  baslik: string;
  // Verilmezse herkes
  kitle?: Kitle;
  maddeler: Madde[];
}

export const YENILIKLER: Yenilik[] = [
  {
    pr: 44,
    tarih: "2026-11-12",
    baslik: "Git ve GitHub pratiği: GitLab ve ileri araçlar",
    kitle: "yonetici",
    maddeler: [
      "15. ünite GitLab: merge request, `glab` komutları, korumalı dallar, onaylar, pipeline ve bir depoyu GitHub'dan GitLab'a taşımak. Terminaldeki sanal platform GitLab'ın mesajlarıyla da çalışıyor.",
      "16. ünite ileri araçlar: cherry-pick, bisect (ikili arama oyunu dahil), blame, worktree, submodule, hook'lar, LFS ve imzalı commit'ler.",
      "Sanal Git'e `git bisect`, `git blame`, `glab` ve `git push --all` eklendi; çıktılar gerçek Git 2.43 ile karşılaştırılarak sınandı.",
      "58 yeni soru ve dört yeni sandbox görevi: GitLab'da MR, sürüme tek düzeltme, bisect ile hatalı commit, blame ile satırın kaynağı.",
    ],
  },
  {
    pr: 43,
    tarih: "2026-11-12",
    baslik: "Git ve GitHub pratiği: gizli anahtarlar ve depo güvenliği",
    kitle: "yonetici",
    maddeler: [
      "14. ünite **Gizli Anahtarlar ve Depo Güvenliği**: gizli bilgi nedir, botlar public depoları nasıl tarar, silmek neden yetmez, doğru müdahale sırası, önleme ve gözden kaçan yerler. 30 yeni soru.",
      "**Sızıntı tatbikatı**: anahtarlı `.env`'i public depoya gönder, hızlandırılmış saatte botun anahtarı bulmasını ve zarar sayacını izle, müdahaleyi sırala, sonunda raporunu al. Aynı push'u push protection açıkken de dene.",
      "**Anahtar avı**: on iki dosya parçasında sızıntıyı bul; `.env`, eski commit, defter çıktısı, CI günlüğü, ön yüz değişkeni ve özel SSH anahtarı.",
      "Terminalde push protection (GH013 reddi), public depoyu tarayan bot ve anahtar iptal edip yenilediğin sanal ödeme hizmeti `kafepay`. Sandbox'a iki Usta görevi: eski commit'teki anahtar ve sızıntı tatbikatı.",
      "Hakkında sayfasında **Sürümler** bölümü: pratiğin hazırlandığı tarih ve esas alınan Git, GitHub CLI ve GitHub sürümleri. Araçlar güncellenince içeriğin nasıl yenileneceği `docs/surum-guncelleme.md`'de.",
    ],
  },
  {
    pr: 42,
    tarih: "2026-11-12",
    baslik: "Git ve GitHub pratiği: takım akışları, dal korumaları ve CI",
    kitle: "yonetici",
    maddeler: [
      "İki yeni ünite: Takım Akışları ve Korumalar ve Otomasyon; 66 yeni soru.",
      "Sanal GitHub: korumalı dala doğrudan push gerçekteki gibi reddediliyor. Terminalde GitHub CLI'la (`gh pr create`, `view`, `checks`, `review`, `merge`) PR açıp birleştiriyorsun; onay ve CI kuralları uygulanıyor.",
      "Sanal ekip arkadaşları PR'ları inceliyor: Ayşe değişiklik isteyebiliyor, düzeltince onaylıyor; Mert Release PR'ı onaylıyor.",
      "Üç ortamlı akış (dev, test, main) hem oynatılabilir bir şekil hem baştan sona bir tatbikat olarak var: test'ten dal, PR 1 → dev, PR 2 → test, Release PR → main, dalı silmek. dev'i toptan taşımak gibi tuzaklar gösteriliyor.",
      "İki yeni şekil daha: dal koruma paneli ve adım adım çalışan bir GitHub Actions iş akışı.",
      "Sandbox'a altı görev: korumalı main'e push, kırmızı CI, sürüm etiketi, yanlış yerden açılan dal, üç ortamlı akış tatbikatı ve Cuma akşamı hotfix.",
    ],
  },
  {
    pr: 41,
    tarih: "2026-11-12",
    baslik: "Git ve GitHub pratiği: uzak depolar ve rebase",
    kitle: "yonetici",
    maddeler: [
      "İki yeni ünite: Uzak Depolar Derinlemesine ve Rebase; 64 yeni soru (kavram, komut ve senaryo).",
      "Sanal Git artık uzak depolarla çalışıyor: `clone`, `fetch`, `pull`, `push`, `--force-with-lease`, dal silme ve budama. Alıştırmalarda sanal ekip arkadaşın Ayşe aynı GitHub deposuna push ediyor; terminalin yanında uzak depodaki dallar görünüyor.",
      "Etkileşimli rebase terminalde gerçekten çalışıyor: `git rebase -i` yapılacaklar listesini düzenleyicide açar; pick, reword, squash, fixup, drop ve edit desteklenir.",
      "Üç yeni şekil: fetch ile pull'un farkını gösteren üç kutu, merge ile rebase'in karşılaştırması ve dokunarak düzenlenen etkileşimli rebase listesi.",
      "Sandbox'a Kalfa kademesinin sekiz görevi eklendi: test'ten dal açıp göndermek, Ayşe'nin push'undan sonra reddedilen push, PR dalını güvenle güncellemek, dal budamak, dağınık commit'leri toplamak, ortadaki mesajı düzeltmek, gizli anahtarlı commit'i push'tan önce çıkarmak ve rebase çakışması.",
    ],
  },
  {
    pr: 40,
    tarih: "2026-11-12",
    baslik: "Git ve GitHub pratiği: Başlangıç kademesi (dallar, çakışmalar, PR, geri almak)",
    kitle: "yonetici",
    maddeler: [
      "Dört yeni ünite: Dallar, Çakışmalar, GitHub'da Birlikte Çalışmak ve Geri Almak; 95 yeni soru (kavram, komut ve senaryo).",
      "Derslerde dokunarak öğrenilen dört yeni şekil: dal işaretçileri, çakışma editörü, baştan sona bir pull request ve reset kiplerinin karşılaştırması.",
      "Dokuz yeni terminal alıştırması: dal açıp birleştirmek, gerçek bir çakışmayı çözmek, reset, revert, stash ve reflog ile kurtarma.",
      "Sandbox'a Başlangıç kademesinin on görevi eklendi: yanlış dalda kalan commit'ler, kopuk HEAD'de kalan iş, canlıdaki hatayı geri almak, kaybolan commit'leri reflog'la bulmak ve daha fazlası.",
    ],
  },
  {
    pr: 39,
    tarih: "2026-11-12",
    baslik: "Git ve GitHub pratiği: Acemi kademesinin konu anlatımları",
    kitle: "yonetici",
    maddeler: [
      "İlk beş ünitenin anlatımı: sürüm kontrolü neden var, kurulum ve terminal, ilk depo ve üç alan, geçmişe bakmak, GitHub'a ilk adım. Metinler kısa; her ünitede deneyerek öğrenilen parçalar var.",
      "Ders bölümlerinde gerçek komutların yazıldığı terminal alıştırmaları: yanında canlı commit grafiği ve çalışma dizini, hazırlık alanı, depo şeridi; hedefler yazdıkça işaretleniyor (11 alıştırma).",
      "Altı etkileşimli şekil: dosya adlarıyla sürüm tutma ile Git geçmişinin karşılaştırması, sunucu çökünce merkezi ve dağıtık model, \"Git mi platform mu?\" oyunu, üç alan arasında dosya taşıma, tek harfle değişen commit kimliği, push, pull ve reddedilen push.",
      "Git pratiğinin açılış sayfası konu anlatımları; liste Acemi, Başlangıç, Orta, İleri, Usta kademelerine göre gruplanıyor (`meta.anaSayfa: \"ders\"`, `meta.uniteGruplari`).",
    ],
  },
  {
    pr: 38,
    tarih: "2026-11-11",
    baslik: "Git ve GitHub pratiği: Git sandbox'ı ve ilk 11 görev",
    kitle: "yonetici",
    maddeler: [
      "Yeni Git sandbox sayfası (`/git/sandbox`, menüde yalnızca Git pratiğinde): gerçek git komutlarını yazdığın bir terminal, canlı commit grafiği (dallar, HEAD, etiketler) ve çalışma dizini, hazırlık alanı, depo şeridi. Dosyaya tıklayınca ya da `nano dosya` yazınca editör açılıyor.",
      "Her komuttan sonra isteğe bağlı \"Ne oldu?\" notu: Git'in İngilizce çıktısını Türkçe açıklıyor, hatada ne yapacağını söylüyor. Geri al düğmesi son komutu geri alıyor.",
      "Serbest alanın yanında Acemi kademesinin 11 görevi: kimlik ayarı, ilk depo, ilk commit, seçerek ekleme, yanlış ekleneni geri çekme, .gitignore, geçmişte dedektif, .env'i takipten çıkarma, dosya kurtarma, son commit'i düzeltme, master'dan main'e. Hedefler canlı işaretleniyor; ipuçları sırayla açılıyor; durumu değiştiren komut sayısına göre üç yıldız.",
      "Her görevin örnek çözümü testte çalıştırılıyor (`icerik/git/istemci/gorevler.test.ts`). Sandbox sunucuya hiç istek atmıyor; ilerleme tarayıcıda saklanıyor.",
    ],
  },
  {
    pr: 37,
    tarih: "2026-11-11",
    baslik: "Git ve GitHub pratiği: tarayıcıda çalışan Git motoru",
    kitle: "yonetici",
    maddeler: [
      "Sandbox ve derslerdeki mini terminaller için tarayıcıda çalışan bir Git modeli (`src/gitsim`): 27 git komutu (init, add, commit, status, log, diff, show, branch, switch, checkout, merge, reset, revert, cherry-pick, rebase, stash, tag, reflog, restore, rm, mv ve iç yapı komutları) ve küçük bir kabuk (ls, cd, cat, echo, printf, mkdir, rm, mv, touch). Sunucuya hiç istek atmaz.",
      "Nesne kimlikleri gerçek Git'in biçimiyle hesaplanıyor: `src/gitsim/gitsim.test.ts` 45 senaryoyu hem motorda hem gerçek git'te aynı saatle çalıştırıp commit kimliklerini, dalları, index'i, çalışma dizinini ve komut çıktılarını birebir karşılaştırıyor (makinede git yoksa atlanır).",
      "Henüz arayüzü yok; sandbox sayfası sıradaki PR'da.",
    ],
  },
  {
    pr: 36,
    tarih: "2026-11-11",
    baslik: "Git ve GitHub pratiği hazırlanıyor: iskelet ve ilk 146 soru",
    kitle: "yonetici",
    maddeler: [
      "Yeni pratik **Git ve GitHub** (`/git`, soru öneki `gt-`, katalog alanı Yazılım) açıldı ama henüz yayında değil: 18 ünite beş kademede (Acemi, Başlangıç, Orta, İleri, Usta).",
      "Acemi kademesinin beş ünitesinde (sürüm kontrolü neden var, kurulum ve terminal, ilk depo ve üç alan, geçmişe bakmak, GitHub'a ilk adım) 146 soru: 91 kavram, 19 komut yazma, 36 senaryo sorusu. Senaryolarda Git'in gerçek hata çıktıları kod bloğu olarak gösteriliyor.",
      "Yayından önce uzak D1'e `0033_git_ayarlari.sql` ve `0034_git_sorular.sql` uygulanmalı. Plan: `docs/plan-git-github-pratigi.md`.",
    ],
  },
  {
    pr: 35,
    tarih: "2026-11-10",
    baslik: "Cevaplar anında, site daha hafif",
    maddeler: [
      "Cevabını kontrol ettiğinde sonuç ve açıklama beklemeden görünüyor: cevap artık tarayıcında değerlendiriliyor. Bağlantın yavaşken ya da kısa süreliğine kesildiğinde de soru çözmeye devam edebilirsin.",
      "Cevapların arka planda toplu olarak kaydediliyor (birkaç soruda bir, sayfa değiştirirken ve sekmeyi kapatırken). İlerlemen, tekrar kutuların ve günlük hedefin eskisi gibi çalışıyor; sekmeyi kapatsan da gönderilmemiş cevapların bir sonraki ziyaretinde kaydedilir.",
      "Cevaptan sonra gördüğün \"kaç kişi hangi şıkkı seçti\" oranları yerinde duruyor. Oranlar soru listesiyle birlikte geldiği için birkaç dakika gecikmeli olabilir; kendi cevabın hemen eklenir.",
      "Sayfalar arasında gezerken soru listesi yeniden indirilmiyor, geçişler hızlandı.",
      { metin: "Sunucuya giden istek sayısı ziyaret başına 35-40'tan 3-4'e indi: açılış tek istek (`/api/baslangic`), cevaplar toplu (`/api/cevaplar`), şık oranları `soru_sayaclari` tablosundan. Yayından önce `0032_soru_sayaclari.sql` uygulanmalı.", kitle: "yonetici" },
    ],
  },
  {
    pr: 34,
    tarih: "2026-11-10",
    baslik: "Açılış sayfası yenilendi: dersini ara, hemen çöz",
    maddeler: [
      "pratikler.selcukdinc.dev artık bir soruyla açılıyor: **Bugün hangi dersi çalışacaksın?** Arama kutusuna dersin ya da konunun adını yazınca dersler süzülüyor; Türkçe harfleri yazmasan da (`isletme`, `turkce`) buluyor, Enter ilk sonucu açıyor.",
      "Dersler sayfanın en üstüne taşındı ve alan düğmeleriyle (Mühendislik, Temel bilimler, Okul...) süzülebiliyor. Giriş yaptıysan kaldığın dersler aramanın hemen altında.",
      "Sitenin öğrenciye, akademisyene ve öğretmene ne kazandırdığı tek bir **Nasıl çalışır?** bölümünde, sekmelerle anlatılıyor; sayfa eskisinin yarısı kadar.",
      "Aradığın ders yoksa **Ders iste** bağlantısıyla ders notunu ya da kitabını gönderebilirsin.",
      "Açılış sayfası her temada pratiklerle aynı renkleri kullanıyor; Karanlık temadaki yeşilimsi zemin gitti.",
      "Düğmeler ve arama kutusu telefonda parmakla rahat basılacak boyutta; sayfanın tamamı klavyeyle kullanılabiliyor.",
    ],
  },
  {
    pr: 33,
    tarih: "2026-11-10",
    baslik: "Bütün pratikler tek adreste",
    maddeler: [
      "Pratikler artık tek adresin altında: `pratikler.selcukdinc.dev/girisimcilik`, `/fizik`, `/dsp` ... Hepsine aynı yerden ulaşır, birinden ötekine aynı hesapla geçersin.",
      "Eski bağlantılar çalışmaya devam ediyor: `girisimcilik.selcukdinc.dev` gibi bir adresi açtığında aynı sayfanın yeni adresine kendiliğinden yönlenirsin. Yer imlerini ve arkadaşlarınla paylaştığın bağlantıları değiştirmen gerekmez.",
      "İlerlemen, teman ve bu tarayıcıdaki taslakların (ders ilerlemesi, simülasyon projesi, betikler) yeni adrese seninle birlikte gelir.",
      { metin: "Yeni pratik için alt alan adı açılmıyor: **Claude ile yeni pratik aç** formu adresi `pratikler.selcukdinc.dev/<ad>` olarak kurar, `wrangler.jsonc`'a satır eklenmez. Eski alan adları yalnızca yönlendirme için durur.", kitle: "yonetici" },
    ],
  },
  {
    pr: 32,
    tarih: "2026-11-09",
    baslik: "Site bağımsız bir öğrenci projesi",
    maddeler: [
      "Açılış sayfasında, her pratiğin menüsünün altında ve Hakkında sayfasında sitenin bağımsız olduğu yazıyor: pratikler öğrenciler tarafından öğrenciler için hazırlanır, dersin hocası tarafından hazırlanmaz ya da onaylanmaz.",
      "Sınavda soruların buradan geleceğinin bir garantisi yok; S.S.S.'ye bu soru eklendi. Hocanın verdiği soru havuzu bağlantısıyla geldiysen o soruları hocan seçmiştir.",
    ],
  },
  {
    pr: 31,
    tarih: "2026-11-09",
    baslik: "Yenilikler bütün pratiklerde ortak ve sana göre",
    maddeler: [
      "Bir pratikte okuduğun yenilikler artık diğer pratiklerde yeniden **Yeni** diye görünmüyor. Giriş yaptıysan bu bilgi hesabında saklanıyor ve başka cihazda da geçerli oluyor; misafirken bütün selcukdinc.dev pratiklerinde ortak.",
      "Yenilikler sayfası yalnızca seni ilgilendiren değişiklikleri gösteriyor: sınav hazırlama ayrıntıları akademisyenlere, sitenin yönetimiyle ilgili değişiklikler yalnızca yöneticiye görünüyor. Sana görünmeyen bir değişiklik **Yeni** rozetini de artırmıyor.",
      { metin: "Herkese açık olmayan kayıt ve maddelerin yanında kimlerin gördüğünü belirten **Akademisyen** ya da **Yönetici** etiketi var.", kitle: "akademisyen" },
    ],
  },
  {
    pr: 30,
    tarih: "2026-11-09",
    baslik: "Akademisyenler kendi derslerinde sınav hazırlıyor; rol çipleri",
    kitle: "akademisyen",
    maddeler: [
      "Akademisyen hesapları artık yalnızca sorumlu oldukları derslerde sınav hazırlıyor ve öğrencilere soru havuzu açıyor. Alanını yönetici atıyor; daha önce sınav hazırladığın ya da havuz açtığın dersler alanın olarak kendiliğinden atandı.",
      "Alanındaki bir derste üst çubukta **Akademisyen** çipi görünüyor; tıklayınca Sınavlarım açılıyor. Pratikler ana sayfasında alanındaki derslerin kartında **Alanın** etiketi var.",
      "Alanın dışındaki bir derste Sınav hazırla sayfası sınav hazırlayabildiğin dersleri listeliyor; yeni bir ders için yöneticiye yazabilirsin. Var olan sınavların silinmiyor, alan geri verilince yeniden açılıyor; öğrencilere verdiğin havuz bağlantıları çalışmaya devam ediyor.",
      { metin: "Yönetici hesabıyla girildiğinde üst çubukta **Yönetici** çipi görünüyor ve yönetim paneline götürüyor. Yönetim panelinin Kullanıcılar sekmesinde akademisyenlerin alanları eklenip çıkarılabiliyor; değişiklikler işlem kaydına yazılıyor.", kitle: "yonetici" },
    ],
  },
  {
    pr: 29,
    tarih: "2026-11-09",
    baslik: "Sınav kağıdı: sade başlık",
    kitle: "akademisyen",
    maddeler: [
      "Kağıdın başlığı için ikinci bir stil geldi: **Sade**. Çerçeve yok, başlık üç sıkışık satır: üniversite ve fakülte ile tarih ve süre aynı satırda, altında kalın ders ve sınav adı ile sağda grup, en altta tek satırda Adı Soyadı, Numarası ve İmza. Altında soruları ayıran ince bir çizgi var.",
      "Kutulu başlığa göre ilk sayfada yaklaşık 15-20 mm yer kazanılıyor. Stil **Kağıt ve başlık** sekmesinden seçiliyor; önizlemede, PDF'te ve Word'de aynı görünüyor.",
      "Var olan sınavlar kutulu başlıkla kalıyor. İlk sınavın sade başlıkla açılıyor, sonraki yeni sınavlar son kullandığın stili alıyor.",
    ],
  },
  {
    pr: 28,
    tarih: "2026-11-09",
    baslik: "Sınav kağıdı: ünite ünite soru seçimi ve kapsamlı süzgeçler",
    kitle: "akademisyen",
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
    kitle: "akademisyen",
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
    kitle: "akademisyen",
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
      { metin: "Yönetim panelinin **Genel** sekmesi önce durumu, sonra ayarları gösteriyor; duyurunun nasıl görüneceği yazarken önizleniyor. Sekmelerde bekleyen öneri ve okunmamış mesaj sayısı görünüyor.", kitle: "yonetici" },
      { metin: "Çatıdaki yönetim panelinde pratikler tablosu açık ünite oranını, haftalık denemeleri ve bekleyen önerileri tek bakışta veriyor.", kitle: "yonetici" },
      { metin: "Claude paneli sadeleşti: ajanın durumu tek satırda, kurulum gerektiğinde açılıyor; iş kutusu örnek isteklerle geliyor, işler solda, seçili işin canlı günlüğü ve aşamaları sağda.", kitle: "yonetici" },
    ],
  },
  {
    pr: 21,
    tarih: "2026-11-06",
    baslik: "Soru havuzu bağlantısı, ortak tema ve Pratikler düğmesi",
    maddeler: [
      { metin: "Akademisyenler sınav kağıdının **Gruplar ve havuz** sekmesinden öğrencilere \"sınav bu sorulardan gelecek\" bağlantısı açabiliyor: yalnızca sınavdaki sorular ya da sınavın kavramlarındaki bütün sorular.", kitle: "akademisyen" },
      "Bağlantıyı açan öğrenci **Çalışmaya başla** deyince Soru havuzu, Karma test ve Tekrar yalnızca o sorularla çalışıyor; üstteki şeritten istediği an bütün sorulara dönebiliyor. Cevaplar ve sınav kağıdı görünmüyor.",
      "Havuz sayfası kaç sorunun doğru çözüldüğünü bir ilerleme çubuğuyla gösteriyor; hesap açmadan da çalışılabiliyor.",
      { metin: "**Sınavlarım** sayfasında açılan havuzlar listeleniyor; bağlantı kopyalanıp havuz kaldırılabiliyor.", kitle: "akademisyen" },
      "Tema artık bütün pratiklerde ortak: hangi pratikte seçersen seç, son seçtiğin tema diğer pratiklerde ve Pratikler ana sayfasında da geçerli.",
      "Üst çubuktaki **Pratikler** düğmesi ve menüdeki **Bütün pratikler** bağlantısıyla herhangi bir pratikten tek tıkla pratikler.selcukdinc.dev'e geçiliyor.",
    ],
  },
  {
    pr: 20,
    tarih: "2026-11-06",
    baslik: "Sınavda A, B, C, D grupları, cevap anahtarı ve Word çıktısı",
    kitle: "akademisyen",
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
      { metin: "Kağıt gerçek boyutunda canlı görünüyor; başlık, soru metni ve şıklar kağıdın üzerinde tıklanıp yerinde düzenleniyor, sorular sıralanıp puanlanıyor, ortak metin ve yönerge eklenebiliyor.", kitle: "akademisyen" },
      { metin: "A4 ya da A3, dikey ya da yatay kağıt, tek, iki ya da üç sütun, yazı boyutu, kenar boşluğu ve 4 ya da 5 şık seçilebiliyor; üniversite, fakülte ve ders bilgileri bir sonraki sınava kendiliğinden geliyor, tarih ve süre ayarlanıyor.", kitle: "akademisyen" },
      { metin: "Değişiklikler kendiliğinden kaydediliyor; başka bir cihazdan girince sınava kaldığın yerden devam ediyorsun. **PDF indir** kağıdı önizlemede gördüğün gibi basıyor.", kitle: "akademisyen" },
    ],
  },
  {
    pr: 17,
    tarih: "2026-11-06",
    baslik: "Yönetim panelinde Claude işleri canlı izleniyor",
    kitle: "yonetici",
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
    kitle: "yonetici",
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
      { metin: "Çatı sitesinin yönetim panelinde **Claude** sekmesinden yeni bir pratik açılabiliyor: ad, alt alan adı ve kaynak klasörünü yazmak yetiyor, gerisini yerel ajan hazırlayıp PR olarak getiriyor.", kitle: "yonetici" },
      { metin: "Her Claude sekmesi yerel ajanın açık olup olmadığını, hangi makinede çalıştığını ve en son ne zaman yokladığını gösteriyor. **Ajanı dene** düğmesi Claude'u çalıştırmadan makinedeki claude, gh ve depo durumunu raporluyor.", kitle: "yonetici" },
      { metin: "Ajan kapalıysa panel nasıl açılacağını adım adım anlatıyor: anahtar Mac'in Anahtar Zinciri'nde tutuluyor, ajan tek komutla servis olarak kurulabiliyor ya da indirilen bir dosyaya çift tıklayarak Terminal'de açılabiliyor.", kitle: "yonetici" },
    ],
  },
  {
    pr: 2,
    tarih: "2026-11-03",
    baslik: "Yönetim panelinde pratikler ve Claude",
    kitle: "yonetici",
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
