// 4. ünite (Acemi): git log, git diff, git show ve commit kimliği (hash),
// iyi commit mesajı, .gitignore.
import { sorular, type Soru } from "./yardimci.ts";

const U = 4;

export const unite4: Soru[] = [
  ...sorular(U, "u4-log", [
    {
      ad: "log-komut",
      soru: "Deponun commit geçmişini listeleyen komutu yaz.",
      cevap: ["git log"],
      aciklama: "~git log~ commit'leri en yeniden eskiye doğru, kimliği, yazarı, tarihi ve mesajıyla listeler.",
    },
    {
      ad: "oneline",
      soru: "Geçmişi her commit tek satır olacak biçimde kısa gösteren seçenek hangisidir?",
      secenekler: ["~git log --oneline~", "~git log --short~", "~git log -1~", "~git status -s~"],
      aciklama: "~--oneline~ her commit'i kısa kimliği ve mesajının ilk satırıyla tek satırda gösterir. ~-1~ ise yalnızca son commit'i gösterir.",
    },
    {
      ad: "graph-all",
      zorluk: 2,
      soru: "Bütün dalların geçmişini dallanma ve birleşmeleri çizerek göstermek için hangi komut kullanılır?",
      secenekler: ["~git log --oneline --graph --all~", "~git log --branches-only~", "~git show --all~", "~git status --graph~"],
      aciklama: "~--graph~ geçmişi metin grafiğiyle çizer, ~--all~ yalnızca bulunduğun dalı değil bütün dalları gösterir. Takımda çalışırken en çok kullanılan görünümlerden biridir.",
    },
    {
      ad: "pager",
      senaryo: true,
      soru: "~git log~ yazdın, ekran commit'lerle doldu ve en altta ~:~ işareti beliriyor; terminal komut kabul etmiyor gibi. Ne yaparsın?",
      secenekler: [
        "~q~ tuşuna basarak sayfalayıcıdan çıkarım",
        "Terminali kapatırım, Git dondu",
        "~Ctrl+S~'ye basarım",
        "~git stop~ yazarım",
      ],
      aciklama: "Uzun çıktılar bir **sayfalayıcıda** (genellikle ~less~) açılır. Boşluk ile sayfa ilerler, ~q~ ile çıkılır.",
    },
    {
      ad: "yazar-suzgec",
      zorluk: 2,
      soru: "Yalnızca \"Mert\" adlı kişinin commit'lerini listelemek için hangisi kullanılır?",
      secenekler: ["~git log --author=Mert~", "~git log --user Mert~", "~git show Mert~", "~git blame Mert~"],
      aciklama: "~--author~ yazar adına ya da e-postasına göre süzer. Mesaja göre süzmek için ~--grep~, belirli bir dosyanın geçmişi için ~git log -- dosya~ kullanılır.",
    },
    {
      ad: "log-dosya",
      dy: true,
      zorluk: 2,
      soru: "~git log -p~ her commit'in yanında o commit'te yapılan değişiklikleri (farkı) de gösterir.",
      aciklama: "Doğru. ~-p~ (patch) her commit'in farkını da yazar. Yalnızca hangi dosyalarda kaç satır değiştiğini görmek için ~--stat~ kullanılır.",
    },
  ]),

  ...sorular(U, "u4-diff", [
    {
      ad: "diff-varsayilan",
      zorluk: 2,
      soru: "Hiçbir seçenek vermeden çalıştırılan ~git diff~ neyi neyle karşılaştırır?",
      secenekler: [
        "Çalışma dizinini hazırlık alanıyla",
        "Hazırlık alanını son commit'le",
        "Yerel depoyu GitHub'daki depoyla",
        "Son commit'i bir önceki commit'le",
      ],
      aciklama: "Yalın ~git diff~ yalnızca **henüz ~git add~ edilmemiş** değişiklikleri gösterir. Hazırlık alanındakileri görmek için ~git diff --staged~ kullanılır.",
    },
    {
      ad: "diff-staged",
      soru: "Hazırlık alanına aldığın, yani bir sonraki commit'e girecek değişiklikleri gösteren komutu yaz.",
      cevap: ["git diff --staged", "git diff --cached"],
      aciklama: "~git diff --staged~ (eşdeğeri ~--cached~) hazırlık alanını son commit'le karşılaştırır. Commit'ten önce son bir kez bakmak için idealdir.",
    },
    {
      ad: "diff-bos",
      senaryo: true,
      zorluk: 2,
      soru: "Dosyayı değiştirip ~git add~ yaptın. Şimdi ~git diff~ yazınca hiçbir şey görünmüyor. Neden?",
      secenekler: [
        "Değişiklik hazırlık alanına geçtiği için yalın ~git diff~ onu göstermez; ~git diff --staged~ gösterir",
        "~git add~ değişikliği sildi",
        "Değişiklik otomatik olarak commit'lendi",
        "Dosya ~.gitignore~ içinde olduğu için fark gösterilmez",
      ],
      aciklama: "Yalın ~git diff~ çalışma dizini ile hazırlık alanı arasındaki farkı gösterir. Değişiklik hazırlığa alınınca bu fark sıfırlanır; ~git diff --staged~ onu gösterir.",
    },
    {
      ad: "diff-isaret",
      soru: "~git diff~ çıktısında satırın başındaki ~+~ ve ~-~ işaretleri ne anlatır?",
      secenekler: [
        "~+~ eklenen, ~-~ silinen satırı gösterir",
        "~+~ hatasız, ~-~ hatalı satırı gösterir",
        "~+~ yeni dosyayı, ~-~ silinen dosyayı gösterir",
        "~+~ senin, ~-~ ekip arkadaşının satırını gösterir",
      ],
      aciklama: "Farkta ~+~ ile başlayan satırlar eklenmiş, ~-~ ile başlayanlar silinmiştir. Değiştirilen bir satır, eski halinin silinmesi ve yeni halinin eklenmesi olarak görünür.",
    },
    {
      ad: "diff-head",
      dy: true,
      zorluk: 3,
      soru: "~git diff HEAD~ hem hazırlık alanındaki hem de henüz eklenmemiş bütün değişiklikleri son commit'e göre gösterir.",
      aciklama: "Doğru. ~HEAD~ son commit'i gösterir; ~git diff HEAD~ çalışma dizinini doğrudan son commit'le karşılaştırır, hazırlık alanında olup olmamaya bakmaz.",
    },
  ]),

  ...sorular(U, "u4-show-hash", [
    {
      ad: "hash-nedir",
      soru: "~git log~ çıktısında her commit'in başında görünen ~a1b2c3d...~ gibi uzun dizi nedir?",
      secenekler: [
        "Commit'in içeriğinden hesaplanan kimliği",
        "Commit'in oluşturulduğu tarihin kodlanmış halini",
        "Commit'i yapanın GitHub kullanıcı numarasını",
        "Commit'in kaçıncı commit olduğunu gösteren sıra numarasını",
      ],
      aciklama: "Her commit'in kimliği, içeriğinden (anlık görüntü, yazar, tarih, mesaj, ebeveyn) hesaplanan bir **hash**'tir (varsayılan olarak 40 karakterlik SHA-1). Sıra numarası değildir.",
    },
    {
      ad: "kisa-hash",
      dy: true,
      soru: "Komutlarda bir commit'i göstermek için hash'in tamamını yazmak gerekmez; depoda tek olduğu sürece ilk birkaç karakteri (ör. 7 karakter) yeter.",
      aciklama: "Doğru. ~git show a1b2c3d~ gibi kısa kimlikler, depoda başka bir nesneyle karışmadığı sürece kabul edilir.",
    },
    {
      ad: "show",
      soru: "Belirli bir commit'in mesajını ve yaptığı değişiklikleri görmek için hangisi kullanılır?",
      secenekler: ["~git show <hash>~", "~git status <hash>~", "~git add <hash>~", "~git init <hash>~"],
      aciklama: "~git show <hash>~ commit'in bilgilerini ve farkını gösterir. Kimlik verilmezse son commit'i (~HEAD~) gösterir.",
    },
    {
      ad: "head",
      zorluk: 2,
      soru: "Git'te ~HEAD~ neyi gösterir?",
      secenekler: [
        "Şu an üzerinde bulunduğun commit'i",
        "Deponun en eski, ilk commit'ini",
        "GitHub'daki varsayılan ana dalı",
        "Değişen dosyanın ilk satırını",
      ],
      aciklama: "~HEAD~ \"şu an buradayım\" işaretidir; genellikle bulunduğun dalı, dolayısıyla o dalın son commit'ini gösterir. Bir sonraki commit HEAD'in üstüne eklenir.",
    },
    {
      ad: "hash-degisir",
      zorluk: 3,
      dy: true,
      soru: "Bir commit'in mesajında tek bir harf bile değiştirilirse o commit'in hash'i de değişir.",
      aciklama: "Doğru. Hash commit'in bütün içeriğinden hesaplanır; mesaj, yazar ya da tarihteki en küçük değişiklik yeni bir hash üretir. Bu, geçmişin sessizce değiştirilememesini sağlar.",
    },
  ]),

  ...sorular(U, "u4-mesaj", [
    {
      ad: "iyi-mesaj",
      soru: "Aşağıdakilerden hangisi en iyi commit mesajıdır?",
      secenekler: [
        "Boş e-postayla girişi engelle",
        "düzeltmeler",
        "son hali kesin bu",
        "Bugün yaptığım her şey",
      ],
      aciklama: "İyi bir mesaj **ne yapıldığını** tek bakışta söyler. \"düzeltmeler\" ya da \"son hali kesin bu\" aylar sonra geçmişte arama yaparken hiçbir şey anlatmaz.",
    },
    {
      ad: "kalip",
      zorluk: 2,
      soru: "Yaygın commit mesajı alışkanlığına göre hangisi doğrudur?",
      secenekler: [
        "İlk satır kısa bir özettir, ayrıntı boş satırdan sonra gelir",
        "Mesaj tek satır olmalı ve en az 200 karakter içermeli",
        "Mesajın ilk satırı değiştirilen dosyaların listesi olmalı",
        "Mesajda neden değil, yalnızca hangi dosyanın değiştiği yazılmalı",
      ],
      aciklama: "Kısa bir **özet satırı**, ardından boş satır ve gerekiyorsa **neden** yapıldığını anlatan gövde yaygın bir alışkanlıktır. ~git log --oneline~ ve GitHub arayüzü yalnızca ilk satırı gösterir. Hangi dosyaların değiştiği zaten commit'in içinde yazılıdır.",
    },
    {
      ad: "emir-kipi",
      dy: true,
      zorluk: 2,
      soru: "Birçok projede commit mesajının özet satırı emir kipiyle yazılır (\"Giriş hatasını düzelt\" gibi).",
      aciklama: "Doğru. Git'in kendi ürettiği mesajlar da (\"Merge branch...\", \"Revert...\") bu biçimdedir. Bazı ekipler \"feat:\", \"fix:\" gibi önekler (Conventional Commits) de kullanır; önemli olan ekip içinde tutarlılıktır.",
    },
    {
      ad: "mesaj-senaryo",
      senaryo: true,
      zorluk: 2,
      soru: "Altı ay sonra bir hatanın hangi commit'le geldiğini arıyorsun. Geçmişte \"update\", \"fix\", \"son hali\" gibi mesajlar var. Bu durum en çok neyi zorlaştırır?",
      secenekler: [
        "Hangi commit'in ne amaçla yapıldığını anlamayı",
        "Commit'leri GitHub'a sorunsuz göndermeyi",
        "Yeni commit'ler oluşturmayı",
        "Depoyu başka bir bilgisayara clone'lamayı",
      ],
      aciklama: "Kötü mesajlar geçmişi **okunmaz** yapar; her commit'i açıp farkını incelemek zorunda kalırsın. Mesaj yazmak için harcanan birkaç saniye sonradan saatler kazandırır.",
    },
  ]),

  ...sorular(U, "u4-gitignore", [
    {
      ad: "amac",
      soru: "~.gitignore~ dosyasının görevi nedir?",
      secenekler: [
        "Git'in hangi dosyaları izlemeyip yok sayacağını belirtmek",
        "Silinen dosyaların listesini tutmak",
        "Commit'lerde hangi ekip üyelerinin yok sayılacağını belirtmek",
        "GitHub'da gizli kalacak depoları listelemek",
      ],
      aciklama: "~.gitignore~ içine yazılan kalıplara uyan izlenmeyen dosyalar ~git status~'ta görünmez ve ~git add .~ ile eklenmez: derleme çıktıları, ~node_modules/~, kişisel ayar ve gizli bilgi dosyaları gibi.",
    },
    {
      ad: "kalip-log",
      soru: "~.gitignore~ içine yazılan ~*.log~ satırı neyi yok saydırır?",
      secenekler: [
        "Uzantısı .log olan bütün dosyaları",
        "Adı tam olarak \"*.log\" olan tek bir dosyayı",
        "Yalnızca kök klasördeki log klasörünü",
        "Bütün dosyaları",
      ],
      aciklama: "~*~ herhangi bir karakter dizisi demektir; ~*.log~ hangi klasörde olursa olsun uzantısı ~.log~ olan dosyalara uyar.",
    },
    {
      ad: "zaten-izlenen",
      senaryo: true,
      zorluk: 2,
      soru: "~config.local.json~ dosyasını aylardır commit'liyordun. Bugün ~.gitignore~'a ekledin ama dosya ~git status~'ta değişmiş olarak görünmeye devam ediyor. Neden?",
      secenekler: [
        "~.gitignore~ yalnızca izlenmeyen dosyaları etkiler; zaten izlenen dosyayı izlemeden çıkarmak için ~git rm --cached~ gerekir",
        "~.gitignore~ değişiklikleri ancak bilgisayar yeniden başlatılınca etkili olur",
        "Dosya adında nokta olduğu için kalıp çalışmaz",
        "~.gitignore~ yalnızca GitHub'da çalışır",
      ],
      aciklama: "Git zaten izlediği dosyayı izlemeye devam eder. ~git rm --cached config.local.json~ dosyayı diskte bırakıp izlemeden çıkarır; commit'ten sonra ~.gitignore~ kuralı devreye girer. Dosya eski commit'lerde yine durur.",
    },
    {
      ad: "rm-cached",
      zorluk: 3,
      soru: "Diskten silmeden ~.env~ dosyasını Git'in izlemesinden çıkaran komutu yaz.",
      cevap: ["git rm --cached .env"],
      aciklama: "~git rm --cached .env~ dosyayı hazırlık alanından ve izlemeden çıkarır, diskteki dosyaya dokunmaz. Ardından commit'lenir ve ~.env~ ~.gitignore~'a yazılır. Dosyada gizli bilgi varsa eski commit'lerde durmaya devam eder: anahtarlar değiştirilmelidir (14. ünite).",
    },
    {
      ad: "node-modules",
      senaryo: true,
      soru: "Bir JavaScript projesinde ilk commit'te ~node_modules/~ klasörü de eklendi ve depo yüzlerce megabayta çıktı. Bundan sonrası için doğru alışkanlık hangisidir?",
      secenekler: [
        "~node_modules/~'ı ~.gitignore~'a yazmak; bağımlılıkları ~package.json~'dan yeniden kurmak",
        "Her commit'te ~node_modules/~'ı da güncel tutmak",
        "~node_modules/~'ı zip'leyip depoya eklemek",
        "Depoyu private yapmak",
      ],
      aciklama: "Yeniden üretilebilen dosyalar (bağımlılıklar, derleme çıktıları) depoya konmaz. ~package.json~ ve kilit dosyası yeterlidir; bağımlılıklar ~npm install~ ile kurulur.",
    },
    {
      ad: "unlem",
      zorluk: 3,
      dy: true,
      soru: "~.gitignore~ içinde ~*.log~ satırından sonra yazılan ~!onemli.log~ satırı, ~onemli.log~ dosyasını yok sayma kuralının dışında tutar.",
      aciklama: "Doğru. ~!~ ile başlayan satır önceki bir kuralı geri çevirir. Bir istisna: dosyanın bulunduğu klasörün tamamı yok sayılmışsa içindeki dosya ~!~ ile geri alınamaz.",
    },
  ]),

  ...sorular(U, "u4-log", [
    {
      ad: "son-uc",
      soru: "Geçmişteki yalnızca son 3 commit'i gösteren komutu yaz.",
      cevap: ["git log -3", "git log -n 3", "git log -n3", "git log --max-count=3"],
      aciklama: "~git log -3~ (ya da ~-n 3~) yalnızca son üç commit'i gösterir. ~--oneline~ ile birleştirilebilir: ~git log --oneline -3~.",
    },
    {
      ad: "stat",
      zorluk: 2,
      soru: "Her commit'te hangi dosyalarda kaç satır eklendiğini ve silindiğini özetleyen seçenek hangisidir?",
      secenekler: ["~git log --stat~", "~git log --oneline~", "~git log --graph~", "~git log --all~"],
      aciklama: "~--stat~ her commit'in altına değişen dosyaları ve eklenen/silinen satır sayısını yazar; ayrıntılı fark için ~-p~ kullanılır.",
    },
  ]),
  ...sorular(U, "u4-gitignore", [
    {
      ad: "ne-zaman",
      senaryo: true,
      zorluk: 2,
      soru: "Yeni bir projeye başlıyorsun; projede ~.env~ dosyasında veritabanı parolası olacak. ~.gitignore~'u ne zaman oluşturmalısın?",
      secenekler: [
        "İlk commit'ten önce, ~.env~ hiç hazırlık alanına girmeden",
        "Proje bitip GitHub'a koyulmadan hemen önce",
        "~.env~ ilk kez commit'lendikten sonra",
        "Gerek yok, Git ~.env~ dosyalarını kendiliğinden yok sayar",
      ],
      aciklama: "~.gitignore~ projenin **başında** kurulur. Bir dosya bir kez commit'lenirse geçmişte kalır; sonradan eklenen kural onu geçmişten silmez. Git ~.env~ dosyalarını kendiliğinden yok saymaz.",
    },
  ]),
];
