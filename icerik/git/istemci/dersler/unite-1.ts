import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_1: Ders = {
  hafta: 1,
  baslik: "Sürüm Kontrolü Neden Var?",
  ozet: "Dosya adlarıyla sürüm tutmanın neden çöktüğünü, sürüm kontrolünün ne kazandırdığını, Git ile GitHub ve GitLab arasındaki farkı, merkezi ve dağıtık modeli ve depo, commit, geçmiş kavramlarını gör.",
  bolumler: [
    {
      baslik: "rapor_son_v2_GERCEK.docx",
      metin: md(`
Bir ödev, bir tez ya da bir yazılım projesi üzerinde günlerce çalışınca hepimiz aynı yere varırız: klasörde ~rapor_son.docx~, ~rapor_son_v2.docx~, ~rapor_SON_gercekten.docx~... Hangisi gerçekten son? Dün silinen paragraf hangisindeydi? Arkadaşın neyi değiştirdi?

Aşağıda iki dünya var. Önce **Git olmadan** dosyalara tıkla, sonra **Git ile** görünümüne geç ve commit'leri gez.

[[G-H1-01]]

**Sürüm kontrol sistemi** (version control system) bir dosya kümesinde zaman içinde yapılan değişiklikleri kaydeden, istediğin eski hâle dönmeni ve kimin neyi neden değiştirdiğini görmeni sağlayan araçtır. Kazandırdıkları:

- **Geri dönmek:** Bozulan bir şeyi dünkü çalışan hâline döndürürsün.
- **Ne değişti?** İki sürüm arasındaki farkı satır satır görürsün.
- **Kim, ne zaman, neden?** Her kaydın bir yazarı, zamanı ve açıklaması vardır.
- **Birlikte çalışmak:** Aynı dosyalarda çalışan kişilerin değişiklikleri birleştirilir.

Sürüm kontrolü yalnızca kalabalık ekipler için değildir; tek başına çalışan biri de "dün çalışıyordu, bugün bozuldu" anlarında aynı rahatlığı yaşar. Git yalnızca kodu değil her türlü metin dosyasını izler: LaTeX tezi, Markdown notları, yapılandırma dosyaları.

Buluta zip yüklemek de bir yedektir ama sürüm kontrolü değildir: zip'te neyin değiştiğini, kimin değiştirdiğini ve neden değiştirdiğini göremezsin, iki kişinin değişikliğini birleştiremezsin.
`),
      dene: ["gt-u1-dosya-adi-kaosu", "gt-u1-yedek-farki"],
    },
    {
      baslik: "Git, GitHub ve GitLab",
      metin: md(`
En sık karıştırılan ikili: **Git** ve **GitHub**.

- **Git** bilgisayarına kurduğun ücretsiz, açık kaynaklı bir programdır. Commit'leri, dalları, birleştirmeleri o yapar. İnternet ya da hesap gerektirmez.
- **GitHub** Git depolarını internette barındıran bir hizmettir (2018'den beri Microsoft'a ait). Depoyu ekiple paylaşmanın yanında pull request, issue, Actions (otomasyon), wiki, proje panoları gibi ekip araçları sunar.
- **GitLab** ve **Bitbucket** aynı işi yapan başka platformlardır. GitLab kendi sunucuna da kurulabilir; pull request'in oradaki adı *merge request*'tir.

Kısacası Git araçtır, GitHub ve GitLab o aracın çevresine kurulmuş hizmetlerdir. Git'i hiçbir platform hesabı olmadan kullanabilirsin; ama GitHub'ı Git olmadan kullanamazsın. GitHub'da private (gizli) depolar da açılabilir; yalnızca açık kaynak projelere özgü değildir.

Aşağıdaki işleri sınıflandır:

[[G-H1-03]]
`),
      dene: ["gt-u1-hangisi-arac", "gt-u1-internetsiz"],
    },
    {
      baslik: "Merkezi mi, dağıtık mı?",
      metin: md(`
Eski sürüm kontrol sistemlerinin çoğu (Subversion, CVS) **merkezi**ydi: geçmiş yalnızca bir sunucuda durur, herkes oradan dosyaların son hâlini alır ve her commit sunucuya yazılır.

Git **dağıtık**tır: depoyu kopyalayan herkesin bilgisayarında geçmişin **tamamı** bulunur. Commit, geçmişe bakmak, dal açmak tamamen yerel işlerdir; bu yüzden hem çevrimdışı çalışır hem de çok hızlıdır. Sunucu (ör. GitHub) yalnızca ekibin buluşma noktasıdır.

Modeli seç, sonra bir olay yaşat:

[[G-H1-02]]
`),
      dene: ["gt-u1-sunucu-coktu"],
    },
    {
      baslik: "Git nereden çıktı?",
      metin: md(`
Linux çekirdeği geliştiricileri yıllarca BitKeeper adlı ticari bir sistem kullandı. 2005'te ücretsiz kullanım hakkı kalkınca **Linus Torvalds** birkaç hafta içinde kendi aracını yazmaya başladı: Git. Hedefleri hız, binlerce kişinin aynı anda çalışabilmesi, dallanmanın ucuz olması ve geçmişin bozulamamasıydı. Git bugün de ücretsiz ve açık kaynaklıdır; hiçbir şirkete ait değildir.

Git'in farkı, bir commit'i "şu satırlar değişti" listesi olarak değil, o andaki **bütün dosyaların anlık görüntüsü** (snapshot) olarak düşünmesidir. Değişmeyen dosyalar yeniden kopyalanmaz; önceki görüntüdeki aynı dosyaya işaret edilir. Bu yüzden eski bir sürüme dönmek, iki sürümü karşılaştırmak hızlıdır.
`),
      dene: ["gt-u1-anlik-goruntu"],
    },
    {
      baslik: "Depo, commit ve geçmiş",
      metin: md(`
Bu sitede sürekli geçecek üç kelime:

- **Depo** (repository, kısaca repo): projenin dosyaları ve bütün geçmişi. Git'te geçmiş, proje klasöründeki gizli ~.git~ klasöründe tutulur.
- **Commit:** projenin belli bir andaki anlık görüntüsü ve onun açıklaması. Her commit'te dosyaların hâli, yazar, zaman, bir mesaj ve kendinden önceki commit'in kimliği bulunur.
- **Geçmiş** (history): commit'lerin birbirine bağlı zinciri. Her commit bir öncekini gösterdiği için geçmiş geriye doğru izlenir.

Dosyayı editörde kaydetmek commit değildir: Git, sen açıkça commit oluşturana kadar o değişikliği geçmişe yazmaz. Kaydetmek diske yazar; commit ise "bu ânı hatırla" demektir.

Sırada Git'i kurmak ve terminalle tanışmak var. Merak ediyorsan menüdeki **Git sandbox**'ına da hemen göz atabilirsin.
`),
      dene: ["gt-u1-kaydet-commit"],
    },
  ],
  test: [
    "gt-u1-tanim", "gt-u1-kazanimlar", "gt-u1-eposta-word", "gt-u1-gitsiz-github", "gt-u1-github-nedir",
    "gt-u1-dagitik-tanim", "gt-u1-hiz", "gt-u1-yaratici", "gt-u1-commit", "gt-u1-commit-icerik",
  ],
};
