// 1. ünite (Acemi): sürüm kontrolü neden var, Git ile GitHub ve GitLab farkı,
// merkezi ve dağıtık sistemler, Git'in doğuşu, depo, commit ve geçmiş kavramları.
import { sorular, type Soru } from "./yardimci.ts";

const U = 1;

export const unite1: Soru[] = [
  ...sorular(U, "u1-neden", [
    {
      ad: "tanim",
      soru: "Sürüm kontrol sisteminin temel görevi aşağıdakilerden hangisidir?",
      secenekler: [
        "Dosyalardaki değişiklikleri zaman içinde kaydedip eski hallere dönmeyi sağlamak",
        "Yazılan kodu daha hızlı çalışacak biçimde derleyip paketlemek",
        "Koddaki yazım ve mantık hatalarını otomatik olarak bulup düzeltmek",
        "Projeyi internette yayınlanacak bir web sitesine çevirmek",
      ],
      aciklama: "Sürüm kontrol sistemi bir projedeki dosyaların **değişiklik geçmişini** tutar: kim, neyi, ne zaman ve neden değiştirdi; gerektiğinde eski bir hale dönülebilir. Derleme, yazım denetimi ya da yayınlama başka araçların işidir.",
    },
    {
      ad: "dosya-adi-kaosu",
      senaryo: true,
      soru: "Bir öğrencinin proje klasöründe şu dosyalar var: ~rapor.docx~, ~rapor_son.docx~, ~rapor_son_v2.docx~, ~rapor_GERCEK_son.docx~. Bu durum hangi sorunu en iyi anlatır?",
      secenekler: [
        "Hangi kopyanın güncel olduğu ve aralarındaki fark bilinmiyor",
        "Aynı belgenin kopyaları diskte gereksiz yer kaplıyor",
        "Dosyalar farklı programlarla açıldığı için bozulmuş",
        "Dosya adlarında Türkçe karakter kullanılmamış",
      ],
      aciklama: "Elle kopyalayarak sürüm tutmak, **hangisinin son hal olduğunu** ve **aralarındaki farkı** belirsiz bırakır. Sürüm kontrolünde tek bir dosya vardır; geçmişi ve her değişikliğin açıklaması Git'in içinde durur.",
    },
    {
      ad: "kazanimlar",
      soru: "Aşağıdakilerden hangisi sürüm kontrolü kullanmanın sağladığı bir kazanım **değildir**?",
      secenekler: [
        "Kodun hatasız olmasını garanti etmek",
        "Bir hatanın hangi değişiklikle geldiğini bulabilmek",
        "Birden çok kişinin aynı proje üzerinde düzenli çalışabilmesi",
        "Bozulan bir dosyayı önceki çalışan haline döndürebilmek",
      ],
      aciklama: "Sürüm kontrolü hataları bulmayı ve geri almayı kolaylaştırır ama **kodun doğruluğunu garanti etmez**; bunun için test yazılır.",
    },
    {
      ad: "yalniz-calisan",
      dy: true,
      soru: "Sürüm kontrolü yalnızca kalabalık ekipler için değil, tek başına çalışan biri için de yararlıdır.",
      aciklama: "Doğru. Tek başına çalışan da yaptığı denemeleri geri almak, eski bir hale bakmak ya da işini başka bir bilgisayara güvenle taşımak için Git'ten yararlanır.",
    },
    {
      ad: "yedek-farki",
      senaryo: true,
      zorluk: 2,
      soru: "Ekip arkadaşın \"Her akşam proje klasörünü zipleyip buluta yüklüyorum, Git'e ne gerek var?\" diyor. Git'in bu yönteme göre en önemli üstünlüğü hangisidir?",
      secenekler: [
        "Her değişikliğin kimden, neden geldiğini ve tam farkını göstermesi",
        "Dosyaları sıkıştırarak bulutta daha az yer kaplaması",
        "Bilgisayar kapalıyken de buluta otomatik yedek alabilmesi",
        "Zip dosyalarının virüs taşıyabilmesine karşı koruma sağlaması",
      ],
      aciklama: "Günlük zip yalnızca o anın kopyasıdır. Git her değişikliği **açıklamasıyla, yazarıyla ve satır satır farkıyla** saklar; iki kişinin işini birleştirmeyi ve hatanın kaynağını bulmayı da sağlar.",
    },
    {
      ad: "kod-disi",
      dy: true,
      zorluk: 2,
      soru: "Git yalnızca programlama dillerindeki kaynak kod dosyalarını izleyebilir; Markdown belgeleri ya da ayar dosyaları Git ile izlenemez.",
      aciklama: "Yanlış. Git her türlü dosyayı izler. Satır satır fark göstermek en çok **metin** dosyalarında (kod, Markdown, ayar dosyaları, LaTeX) işe yarar; resim ya da büyük ikili dosyalar da saklanabilir ama farkları okunaklı gösterilemez.",
    },
  ]),

  ...sorular(U, "u1-git-github", [
    {
      ad: "git-nedir",
      soru: "Git en doğru biçimde nasıl tanımlanır?",
      secenekler: [
        "Bilgisayarında çalışan, dağıtık bir sürüm kontrol aracı",
        "Kod depolarını barındıran bir web sitesi",
        "Microsoft'un geliştirdiği bir kod editörü",
        "Yalnızca Linux'ta çalışan bir programlama dili",
      ],
      aciklama: "**Git** bir araçtır: bilgisayarına kurulur ve internet olmadan da çalışır. Depoları barındıran web hizmetleri (GitHub, GitLab) Git'in üstüne kurulmuştur.",
    },
    {
      ad: "github-nedir",
      soru: "GitHub ile Git arasındaki ilişki için hangisi doğrudur?",
      secenekler: [
        "GitHub, Git depolarını barındıran ve işbirliği araçları sunan bir hizmettir",
        "GitHub, Git'in yeni sürümünün adıdır",
        "Git, GitHub'ın bilgisayara kurulan masaüstü uygulamasıdır",
        "İkisi aynı şeyin farklı adlarıdır",
      ],
      aciklama: "Git sürüm kontrol aracıdır; **GitHub** ise Git depolarını internette barındıran, üstüne pull request, issue, kod incelemesi ve otomasyon gibi işbirliği araçları ekleyen bir hizmettir.",
    },
    {
      ad: "gitsiz-github",
      dy: false,
      soru: "Git kullanmak için mutlaka bir GitHub hesabı açmak gerekir.",
      aciklama: "Yanlış. Git kendi başına, yalnızca kendi bilgisayarında da kullanılabilir. GitHub hesabı, depoyu internette paylaşmak ve başkalarıyla çalışmak istediğinde gerekir.",
    },
    {
      ad: "gitlab",
      soru: "GitLab için hangisi doğrudur?",
      secenekler: [
        "GitHub'a benzer, Git depolarını barındıran ve kendi sunucuna da kurulabilen bir platformdur",
        "Git'in yerine geçen, Git'le uyumsuz başka bir sürüm kontrol aracıdır",
        "GitHub'ın yalnızca şirketlere satılan sürümünün adıdır",
        "Git komutlarını görsel olarak gösteren bir masaüstü programıdır",
      ],
      aciklama: "**GitLab** da Git depolarını barındıran bir platformdur. Bulut hizmeti olarak kullanılabildiği gibi kurumlar onu **kendi sunucularına** da kurabilir. Altta yine Git çalışır; aynı depo GitHub'dan GitLab'a taşınabilir.",
    },
    {
      ad: "hangisi-arac",
      zorluk: 2,
      soru: "Aşağıdaki işlerden hangisi GitHub'a özgü olup Git'in kendi işi **değildir**?",
      secenekler: ["Pull request açıp kod incelemesi istemek", "Commit oluşturmak", "Dal açmak", "İki dalı birleştirmek"],
      aciklama: "Commit, dal ve birleştirme Git'in kendi işlemleridir, internet olmadan da yapılır. **Pull request** ve kod incelemesi ise GitHub gibi barındırma hizmetlerinin sunduğu işbirliği özellikleridir (GitLab'da adı merge request).",
    },
    {
      ad: "internetsiz",
      senaryo: true,
      soru: "Uçakta, internet yokken projen üzerinde çalışıyorsun. Hangisini **yapamazsın**?",
      secenekler: ["Commit'lerini GitHub'daki depoya göndermek", "Yeni bir commit oluşturup mesaj yazmak", "Projenin eski commit'lerine göz atmak", "Yeni bir dal açıp o dala geçmek"],
      aciklama: "Git bütün geçmişi bilgisayarında tuttuğu için commit, dal ve geçmiş internet olmadan çalışır. Yalnızca **uzak depoyla konuşan** işler (GitHub'a göndermek ya da oradan almak) bağlantı ister.",
    },
  ]),

  ...sorular(U, "u1-merkezi-dagitik", [
    {
      ad: "dagitik-tanim",
      soru: "Git'in \"dağıtık\" bir sürüm kontrol sistemi olması ne anlama gelir?",
      secenekler: [
        "Her geliştiricinin bilgisayarında projenin bütün geçmişini içeren tam bir kopya bulunur",
        "Proje dosyaları farklı sunuculara parça parça bölünerek saklanır",
        "Geçmiş yalnızca merkezdeki sunucuda durur, geliştiriciler son hali indirir",
        "Her dosya ayrı bir depoda tutulur",
      ],
      aciklama: "Dağıtık sistemde her **clone**, bütün geçmişi içeren tam bir depodur. Merkezi sistemlerde (ör. Subversion) geçmiş sunucudadır ve geliştiricide yalnızca çalışılan kopya bulunur.",
    },
    {
      ad: "sunucu-coktu",
      senaryo: true,
      zorluk: 2,
      soru: "Ekibin depoyu tuttuğu sunucunun diski bozuldu ve bütün veriler gitti. Ekip Git kullanıyorsa en olası sonuç hangisidir?",
      secenekler: [
        "Depo, bir geliştiricideki tam kopyadan geri kurulabilir",
        "Projenin bütün geçmişi kalıcı olarak kaybolur",
        "Yalnızca son commit kurtarılabilir, eski geçmiş kaybolur",
        "Sunucu yeniden kurulana kadar kimse commit oluşturamaz",
      ],
      aciklama: "Dağıtık sistemde her clone bütün geçmişi taşır; sunucudaki depo, güncel bir clone'dan **yeniden kurulabilir**. Merkezi bir sistemde sunucunun kaybı geçmişin kaybı demektir.",
    },
    {
      ad: "merkezi-ornek",
      soru: "Aşağıdakilerden hangisi merkezi bir sürüm kontrol sistemine örnektir?",
      secenekler: ["Subversion", "Git", "Mercurial", "Fossil"],
      aciklama: "**Subversion** merkezi bir sistemdir: geçmiş sunucudadır, commit için sunucuya bağlanmak gerekir. Git, Mercurial ve Fossil dağıtık sistemlerdir. (Subversion kısaca SVN diye anılır.)",
    },
    {
      ad: "merkezi-commit",
      dy: true,
      zorluk: 2,
      soru: "Merkezi bir sürüm kontrol sisteminde commit oluşturmak genellikle sunucuya bağlantı gerektirirken Git'te commit tamamen yerel bir işlemdir.",
      aciklama: "Doğru. Git'te commit kendi bilgisayarındaki depoya yazılır; sunucuya göndermek (push) ayrı bir adımdır.",
    },
    {
      ad: "hiz",
      soru: "Git'te geçmişe bakmak ve dallar arasında geçmek neden genellikle çok hızlıdır?",
      secenekler: [
        "Bütün geçmiş yerel diskte olduğu için ağ beklenmez",
        "Git her işlemde sunucudan yalnızca küçük parçalar indirir",
        "Git geçmişin yalnızca son on commit'ini saklar",
        "Git dosyaları bulutta önbelleğe alır",
      ],
      aciklama: "Git işlemlerinin çoğu **yerel** depoyla yapılır; ağ gecikmesi yoktur. Bu, dağıtık olmasının pratik kazanımlarından biridir.",
    },
  ]),

  ...sorular(U, "u1-tarihce", [
    {
      ad: "yaratici",
      soru: "Git'i 2005 yılında hangi proje için kim geliştirmeye başladı?",
      secenekler: [
        "Linus Torvalds, Linux çekirdeğinin geliştirilmesi için",
        "Bill Gates, Windows'un geliştirilmesi için",
        "GitHub'ın kurucuları, kendi web siteleri için",
        "Google, Android'in geliştirilmesi için",
      ],
      aciklama: "Linux çekirdeği ekibinin kullandığı araç ücretsiz kullanılamaz hale gelince **Linus Torvalds** 2005'te Git'i yazmaya başladı. Kısa süre sonra bakımını Junio Hamano üstlendi.",
    },
    {
      ad: "anlik-goruntu",
      zorluk: 2,
      soru: "Git bir commit'i kavramsal olarak nasıl saklar?",
      secenekler: [
        "Projenin o anki bütün dosyalarının anlık görüntüsü olarak",
        "Yalnızca önceki commit'e göre değişen satırların listesi olarak",
        "Yalnızca değişen dosyaların adları olarak",
        "Projenin sıkıştırılmış bir zip arşivi olarak",
      ],
      aciklama: "Git her commit'i projenin o andaki **anlık görüntüsü** (snapshot) olarak görür. Değişmeyen dosyalar yeniden kopyalanmaz, öncekine bağlanır; bu yüzden anlık görüntüler yer israf etmez.",
    },
    {
      ad: "acik-kaynak",
      dy: true,
      soru: "Git ücretsiz ve açık kaynaklı bir yazılımdır.",
      aciklama: "Doğru. Git açık kaynaklıdır (GPLv2 lisansı); kaynak kodu herkese açıktır ve ücretsiz kullanılır.",
    },
    {
      ad: "github-sahibi",
      dy: false,
      zorluk: 2,
      soru: "Git, Microsoft'a ait bir yazılımdır.",
      aciklama: "Yanlış. **GitHub** 2018'de Microsoft tarafından satın alındı ama **Git** bağımsız, açık kaynaklı bir projedir; hiçbir şirkete ait değildir.",
    },
  ]),

  ...sorular(U, "u1-temel", [
    {
      ad: "depo",
      soru: "Git'te \"depo\" (repository) neyi ifade eder?",
      secenekler: [
        "Dosyaları ve bütün geçmişlerini birlikte tutan yapıyı",
        "Yalnızca projenin GitHub'da duran kopyasını",
        "Bilgisayardaki proje klasörlerinin tamamını",
        "Projenin son halinin yedeğini",
      ],
      aciklama: "Depo, proje dosyalarıyla birlikte **bütün geçmişi** tutan yapıdır. Bilgisayarındaki depoya yerel depo, GitHub'daki kopyaya uzak depo denir.",
    },
    {
      ad: "commit",
      soru: "Commit için en doğru tanım hangisidir?",
      secenekler: [
        "Projenin o anki halini mesajıyla geçmişe kaydeden nokta",
        "Değiştirilen dosyaları GitHub'a yüklemek",
        "Bir dosyayı kaydetmek için editörde Ctrl+S'ye basmak",
        "Projeyi başka bir klasöre kopyalamak",
      ],
      aciklama: "**Commit**, projenin o anki halini yazarı, tarihi ve mesajıyla geçmişe kaydeder. Editörde dosyayı kaydetmek commit değildir; GitHub'a göndermek de ayrı bir adımdır (push).",
    },
    {
      ad: "commit-icerik",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi bir commit'in içinde saklanan bilgilerden **değildir**?",
      secenekler: ["Commit'i yapanın parolası", "Commit mesajı", "Yazarın adı ve e-postası", "Bir önceki commit'e bağlantı"],
      aciklama: "Commit; anlık görüntüyü, **yazarın adını ve e-postasını**, tarihi, **mesajı** ve **önceki commit'e** (ebeveyne) bağlantıyı tutar. Parola hiçbir zaman commit'e girmez.",
    },
    {
      ad: "zincir",
      dy: true,
      zorluk: 2,
      soru: "Her commit kendinden önceki commit'i gösterdiği için commit'ler birbirine bağlı bir zincir (geçmiş) oluşturur.",
      aciklama: "Doğru. İlk commit dışında her commit en az bir **ebeveyn** commit'i gösterir; Git'in geçmişi bu bağlantılardan oluşan bir yapıdır.",
    },
    {
      ad: "kaydet-commit",
      senaryo: true,
      soru: "Arkadaşın editörde dosyayı kaydettiğini, bu yüzden Git'in değişikliği zaten geçmişe aldığını söylüyor. Ne dersin?",
      secenekler: [
        "Dosyayı kaydetmek yetmez; değişikliği geçmişe almak için commit oluşturmak gerekir",
        "Haklı, Git kaydedilen her dosyayı otomatik olarak geçmişe ekler",
        "Haklı ama yalnızca dosya GitHub'da açıksa",
        "Git yalnızca bilgisayar kapanırken geçmişi günceller",
      ],
      aciklama: "Git hiçbir değişikliği kendiliğinden geçmişe almaz. Değişikliği seçip (~git add~) **commit** oluşturduğunda geçmişe girer. Bu, neyin ne zaman kaydedileceğine senin karar vermeni sağlar.",
    },
  ]),

  ...sorular(U, "u1-neden", [
    {
      ad: "eposta-word",
      senaryo: true,
      zorluk: 2,
      soru: "Üç kişi aynı raporu e-postayla birbirine gönderip düzenliyor. Ayşe ile Mert aynı gün farklı bölümleri değiştirince birinin değişiklikleri kayboldu. Sürüm kontrolü bu sorunu nasıl çözer?",
      secenekler: [
        "İki kişinin değişikliklerini birleştirir, aynı yere dokunulduysa uyarır",
        "Aynı anda yalnızca bir kişinin dosyayı açmasına izin verir",
        "Son kaydedilen dosyayı her zaman doğru kabul eder",
        "Değişiklikleri otomatik olarak e-postayla herkese gönderir",
      ],
      aciklama: "Git iki kişinin ayrı ayrı yaptığı değişiklikleri **birleştirir** (merge). Aynı satırlara dokunulmuşsa sessizce birini seçmez, **çakışma** bildirir ve kararı sana bırakır (7. ünite).",
    },
  ]),
  ...sorular(U, "u1-git-github", [
    {
      ad: "barindirma-degil",
      soru: "Aşağıdakilerden hangisi Git depolarını barındıran bir hizmet **değildir**?",
      secenekler: ["Visual Studio Code", "GitHub", "GitLab", "Bitbucket"],
      aciklama: "GitHub, GitLab ve Bitbucket Git depolarını barındıran hizmetlerdir. **Visual Studio Code** bir kod editörüdür; Git'le çalışabilir ama depo barındırmaz.",
    },
    {
      ad: "yalniz-acik-kaynak",
      dy: false,
      soru: "GitHub'da yalnızca herkese açık, açık kaynaklı projeler barındırılabilir.",
      aciklama: "Yanlış. GitHub'da private depolar da açılabilir; şirketler kapalı kaynak projelerini de GitHub'da tutar.",
    },
  ]),
];
