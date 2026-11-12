// 9. ünite (Başlangıç): geri almak. restore, reset (soft, mixed, hard), revert,
// --amend, stash ve reflog ile kayıp commit'i bulmak.
import { sorular, type Soru } from "./yardimci.ts";

const U = 9;

export const unite9: Soru[] = [
  ...sorular(U, "u9-restore", [
    {
      ad: "restore-dosya",
      soru: "~ayarlar.js~'de commit'lemediğin değişikliklerden vazgeçip dosyayı son commit'teki hâline döndüren komutu yaz.",
      cevap: ["git restore ayarlar.js", "git checkout -- ayarlar.js", "git checkout ayarlar.js"],
      aciklama: "~git restore ayarlar.js~ dosyayı hazırlık alanındaki (yoksa son commit'teki) hâline döndürür. Commit'lenmemiş değişiklik geri getirilemez biçimde silinir.",
    },
    {
      ad: "restore-source",
      zorluk: 3,
      soru: "~stil.css~ dosyasını üç commit önceki hâline getirmek, ama dal ve diğer dosyalara dokunmamak istiyorsun. Hangi komut uygundur?",
      secenekler: [
        "~git restore --source=HEAD¬3 stil.css~",
        "~git reset --hard HEAD¬3~",
        "~git revert HEAD¬3~",
        "~git switch HEAD¬3~",
      ],
      aciklama: "~--source~ dosyanın hangi commit'ten alınacağını söyler; yalnızca o dosya değişir. ~reset --hard~ bütün dalı ve bütün dosyaları geri alırdı.",
    },
    {
      ad: "restore-geri-donus",
      dy: false,
      soru: "~git restore dosya~ ile attığın commit'lenmemiş değişiklikleri ~git reflog~ ile geri getirebilirsin.",
      aciklama: "Yanlış. reflog yalnızca dalların ve HEAD'in commit'ler arasındaki hareketlerini tutar. Hiç commit'lenmemiş (ve stash'lenmemiş) bir değişiklik Git'e hiç girmediği için geri getirilemez.",
    },
  ]),

  ...sorular(U, "u9-reset", [
    {
      ad: "soft",
      zorluk: 2,
      soru: "~git reset --soft HEAD¬1~ ne yapar?",
      secenekler: [
        "Son commit'i geri alır; değişiklikler hazırlık alanında kalır",
        "Son commit'i ve bütün değişiklikleri tamamen siler",
        "Son commit'in tersini yapan yeni bir commit ekler",
        "Yalnızca hazırlık alanını boşaltır, dal yerinde kalır",
      ],
      aciklama: "~--soft~ yalnızca dal işaretçisini geri alır; index ve çalışma dizini olduğu gibi kalır. Son commit'i farklı biçimde yeniden yapmak için kullanışlıdır.",
    },
    {
      ad: "mixed",
      zorluk: 2,
      soru: "Seçeneksiz ~git reset HEAD¬1~ (varsayılan ~--mixed~) sonrasında son commit'teki değişiklikler nerede olur?",
      secenekler: [
        "Çalışma dizininde, hazırlık alanının dışında",
        "Hazırlık alanında, commit'e hazır",
        "Hiçbir yerde, tamamen silinmiş",
        "Uzak depoda, push edilmeyi bekliyor",
      ],
      aciklama: "~--mixed~ dalı ve index'i geri alır ama çalışma dizinine dokunmaz. Değişiklikler dosyalarında durur; yeniden ~git add~ ile seçebilirsin.",
    },
    {
      ad: "hard",
      soru: "~git reset --hard HEAD¬1~ için hangisi doğrudur?",
      secenekler: [
        "Dal, index ve çalışma dizini bir önceki commit'e döner; kaydedilmemiş iş kaybolur",
        "Yalnızca dal işaretçisi geri alınır, dosyalar değişmez",
        "Geri alınan commit hemen ve kalıcı olarak silinir, reflog'da da bulunmaz",
        "Değişiklikler stash'e kaydedilir",
      ],
      aciklama: "~--hard~ en güçlü ve en tehlikeli kiptir: commit'lenmemiş değişiklikler gider. Geri alınan commit ise bir süre reflog'da bulunur.",
    },
    {
      ad: "unstage-reset",
      dy: true,
      soru: "~git reset dosya~ (dosya adıyla, kip olmadan) dosyayı hazırlık alanından çıkarır ve çalışma dizinindeki değişikliğe dokunmaz.",
      aciklama: "Doğru. Dosya adıyla kullanılan ~git reset~, ~git restore --staged dosya~ ile aynı işi yapar.",
    },
    {
      ad: "paylasilmis-reset",
      senaryo: true,
      zorluk: 3,
      soru: "Dün push ettiğin ve ekibin üzerine çalıştığı bir commit'i ~git reset --hard HEAD¬1~ ve ~git push --force~ ile main'den kaldırmayı düşünüyorsun. Neden kötü bir fikir?",
      secenekler: [
        "Ekibin geçmişindeki commit'i yeniden yazar, karmaşa çıkar",
        "reset komutu push edilmiş commit'lerde hiç çalışmaz",
        "Force push yalnızca GitHub'ın ücretli sürümünde vardır",
        "Commit'in dosyaları başka dallardan da silinir",
      ],
      aciklama: "Paylaşılmış geçmişi yeniden yazmak, ekip arkadaşlarının yerel geçmişiyle çelişir; bir sonraki pull'da karmaşa ve kayıp riski doğar. Paylaşılmış commit'i geri almanın güvenli yolu ~git revert~'tür. Korumalı dallarda force push zaten kapalıdır.",
    },
  ]),

  ...sorular(U, "u9-revert", [
    {
      ad: "revert-nedir",
      soru: "~git revert a1b2c3d~ ne yapar?",
      secenekler: [
        "Onun değişikliklerini tersine çeviren yeni commit ekler",
        "a1b2c3d commit'ini geçmişten tamamen siler",
        "Dalı a1b2c3d commit'ine geri taşır, sonrası gider",
        "a1b2c3d'ye geçip kopuk HEAD'de kalır",
      ],
      aciklama: "revert geçmişi silmez, üstüne ekler: eski commit de, onu geri alan commit de geçmişte görünür. Bu yüzden paylaşılmış dallarda güvenlidir.",
    },
    {
      ad: "revert-komut",
      soru: "En son commit'i, geçmişi yeniden yazmadan geri alan yeni bir commit oluşturan komutu yaz.",
      cevap: ["git revert HEAD"],
      aciklama: "~git revert HEAD~ son commit'in tersini yapan bir commit oluşturur. Mesaj olarak \"Revert ...\" önerilir; ~--no-edit~ ile editör açılmadan kabul edilir.",
    },
    {
      ad: "canlida-hata",
      senaryo: true,
      zorluk: 2,
      soru: "main'e birleşen ve canlıya çıkan bir commit ödeme sayfasını bozdu. Ekip main'de çalışmaya devam ediyor. Hangisi en güvenli hızlı çözümdür?",
      secenekler: [
        "Bozan commit'i git revert ile geri alıp normal akışla göndermek",
        "main'i git reset --hard ile geri alıp force push etmek",
        "Bozan commit'in dosyalarını elle eski hâline kopyalamadan beklemek",
        "Depoyu silip son sağlam yedekten yeniden oluşturmak",
      ],
      aciklama: "revert geçmişi bozmadan hatayı geri alır ve herkes normal pull ile alır. Sorun düzelince özellik ayrı bir PR ile yeniden getirilebilir.",
    },
    {
      ad: "revert-cakisma",
      dy: true,
      zorluk: 2,
      soru: "Eski bir commit'i revert ederken, o commit'ten sonra aynı satırlar değiştirildiyse çakışma çıkabilir.",
      aciklama: "Doğru. revert, eski değişikliğin tersini bugünkü kodun üstüne uygular; araya giren değişiklikler aynı satırlara dokunduysa çakışma çıkar ve çözüp ~git revert --continue~ dersin.",
    },
  ]),

  ...sorular(U, "u9-amend", [
    {
      ad: "amend-mesaj",
      soru: "Henüz push etmediğin son commit'in mesajını \"Giris formu duzeltildi\" olarak değiştiren komutu yaz.",
      cevap: ['git commit --amend -m "Giris formu duzeltildi"', 'git commit --amend -m "Giriş formu düzeltildi"', "git commit --amend -m Giris formu duzeltildi"],
      aciklama: "~git commit --amend~ son commit'i, hazırlık alanındakilerle ve yeni mesajla yeniden yazar. Unutulan bir dosyayı da önce ~git add~ yapıp amend ile ekleyebilirsin.",
    },
    {
      ad: "amend-kimlik",
      zorluk: 2,
      soru: "~--amend~ ile düzeltilen commit için hangisi doğrudur?",
      secenekler: [
        "Yeni bir kimlik alır; eski commit dalın geçmişinden çıkar",
        "Kimliği aynı kalır, yalnızca mesajı değişir",
        "Eski commit'in üstüne ikinci bir commit eklenir",
        "Commit uzak depoda da kendiliğinden güncellenir",
      ],
      aciklama: "Commit'in kimliği içeriğinden hesaplandığı için amend yeni bir commit üretir. Push edilmiş bir commit'i amend'lersen uzak taraf ile geçmişin ayrışır; bu yüzden yalnızca paylaşılmamış commit'lerde kullan.",
    },
    {
      ad: "amend-unutulan",
      senaryo: true,
      soru: "Commit attın ve hemen ardından ~stil.css~'i eklemeyi unuttuğunu fark ettin; push etmedin. En temiz yol hangisi?",
      secenekler: [
        "git add stil.css ve git commit --amend --no-edit",
        "Yeni bir \"stil.css unutulmuş\" commit'i ile push edip geçmek",
        "git reset --hard ile her şeyi silip baştan yazmak",
        "git revert HEAD ile commit'i geri alıp yeniden commit'lemek",
      ],
      aciklama: "~--no-edit~ mesajı olduğu gibi bırakır; unutulan dosya aynı commit'e girer. Push edilmişse ayrı bir commit atmak daha doğrudur.",
    },
  ]),

  ...sorular(U, "u9-stash", [
    {
      ad: "stash-nedir",
      soru: "~git stash~ ne işe yarar?",
      secenekler: [
        "Commit'lenmemiş değişiklikleri geçici olarak kenara koyar",
        "Son commit'i uzak depoya hemen gönderir",
        "Bir dalı başka bir dala sessizce birleştirir",
        "Geçmişteki büyük dosyaları bulup sıkıştırır",
      ],
      aciklama: "stash yarım işi geçici bir yığına kaydeder ve çalışma dizinini son commit'e döndürür. Acil bir işe geçip dönünce ~git stash pop~ ile kaldığın yerden devam edersin.",
    },
    {
      ad: "stash-pop",
      soru: "Kenara koyduğun son stash'i çalışma dizinine geri getirip yığından silen komutu yaz.",
      cevap: ["git stash pop"],
      aciklama: "~git stash pop~ son stash'i uygular ve listeden siler. ~git stash apply~ uygular ama listede bırakır; ~git stash list~ bütün kayıtları gösterir.",
    },
    {
      ad: "acil-hata",
      senaryo: true,
      soru: "~feature/rapor~ dalında yarım bir iş varken canlıda acil bir hata çıktı; hemen ~main~'den bir düzeltme dalı açman lazım. Yarım işi commit'lemek istemiyorsun. Ne yaparsın?",
      secenekler: [
        "git stash, dal değiştir, düzeltmeyi yap, sonra dönüp git stash pop",
        "Yarım işi silip düzeltmeden sonra yeniden yazmak",
        "Yarım işle birlikte main'e geçip düzeltmeyi aynı commit'e koymak",
        "Düzeltmeyi feature/rapor dalında yapıp onu canlıya çıkarmak",
      ],
      aciklama: "stash tam bu iş içindir. Uzun sürecekse yarım işi ~wip~ mesajlı bir commit olarak dalında bırakmak da geçerli bir yoldur; ama başka dala taşımamak gerekir.",
    },
    {
      ad: "izlenmeyen",
      dy: false,
      zorluk: 2,
      soru: "Seçeneksiz ~git stash~, izlenmeyen (yeni ve hiç eklenmemiş) dosyaları da kenara koyar.",
      aciklama: "Yanlış. Varsayılan stash yalnızca izlenen dosyalardaki değişiklikleri alır. İzlenmeyenleri de almak için ~git stash -u~ (~--include-untracked~).",
    },
  ]),

  ...sorular(U, "u9-reflog", [
    {
      ad: "reflog-nedir",
      soru: "~git reflog~ neyi gösterir?",
      secenekler: [
        "HEAD'in yakın zamanda gösterdiği commit'leri",
        "Uzak depodaki bütün açık PR'ları",
        "Silinmiş dosyaların içeriğini",
        "Depo ayarlarının değişiklik geçmişini",
      ],
      aciklama: "reflog, HEAD her hareket ettiğinde (commit, reset, switch, rebase...) bir satır yazar. Bu kayıt yalnızca senin bilgisayarındadır ve varsayılan olarak 90 gün tutulur.",
    },
    {
      ad: "hard-kurtar",
      senaryo: true,
      zorluk: 3,
      soru: "Yanlışlıkla ~git reset --hard HEAD¬3~ yazdın ve son üç commit'in kayboldu sanıyorsun. Nasıl kurtarırsın?",
      secenekler: [
        "git reflog ile eski yeri bulup reset ile ona dönmek",
        "Kurtarılamaz; commit'ler kalıcı olarak silindi",
        "git revert HEAD ile üç commit geri gelir",
        "git stash pop ile commit'ler geri gelir",
      ],
      aciklama: "Commit'ler silinmez, yalnızca sahipsiz kalır. ~git reflog~ çıktısında ~HEAD@{1}~ reset'ten önceki yeri gösterir: ~git reset --hard HEAD@{1}~ ile geri dönülür.",
    },
    {
      ad: "silinen-dal",
      senaryo: true,
      zorluk: 3,
      soru: "Birleşmemiş ~deneme~ dalını ~git branch -D~ ile sildin, sonra pişman oldun. Hangisi dalı geri getirir?",
      secenekler: [
        "Reflog'dan dalın son commit'ini bulup o commit'te aynı adla dal açmak",
        "git branch -d deneme komutunu yeniden çalıştırmak",
        "git pull ile dalı uzak depodan geri almak, push edilmemiş olsa bile",
        "Silinen dallar geri getirilemez",
      ],
      aciklama: "Silme çıktısı dalın son kimliğini de yazar (~Deleted branch deneme (was 3f1c2aa)~). O kimlikle ya da reflog'dan bulup ~git branch deneme 3f1c2aa~ dersin.",
    },
    {
      ad: "reflog-yerel",
      dy: true,
      soru: "reflog yalnızca senin yerel deponda tutulur; GitHub'a push edilmez ve clone ile gelmez.",
      aciklama: "Doğru. Bu yüzden reflog kendi bilgisayarındaki kazaları kurtarmak için birebirdir ama başkasının deposundaki kaybı kurtarmaz.",
    },
  ]),
];
