// 6. ünite (Başlangıç): dallar. Dal nedir, açmak ve geçmek, HEAD ve kopuk HEAD,
// birleştirme (ileri sarma ve üç yollu), dalları yönetmek ve adlandırmak.
import { sorular, type Soru } from "./yardimci.ts";

const U = 6;

export const unite6: Soru[] = [
  ...sorular(U, "u6-dal-nedir", [
    {
      ad: "dal-tanim",
      soru: "Git'te bir dal (branch) teknik olarak nedir?",
      secenekler: [
        "Bir commit'i gösteren ve yeni commit'le ilerleyen bir işaretçi",
        "Projenin bütün dosyalarının ayrı bir klasördeki kopyası",
        "Sunucuda tutulan ve yalnızca yöneticinin açabildiği bir alan",
        "Commit'lerin tarih sırasına göre dizildiği bir liste dosyası",
      ],
      aciklama: "Dal yalnızca bir commit kimliğini tutan küçük bir işaretçidir (~.git/refs/heads/~ altında 41 baytlık bir dosya). O dalda commit atınca işaretçi yeni commit'e kayar. Dosyalar kopyalanmaz.",
    },
    {
      ad: "neden-dal",
      soru: "Yeni bir özelliği ayrı bir dalda geliştirmenin asıl kazancı nedir?",
      secenekler: [
        "Yarım iş ana dalı bozmadan ilerler, hazır olunca birleştirilir",
        "Dalda yazılan kod daha hızlı çalışır",
        "Dallar commit mesajı yazma zorunluluğunu kaldırır",
        "Dalda yapılan değişiklikler otomatik olarak yedeklenir",
      ],
      aciklama: "Dallar işleri birbirinden yalıtır: ~main~ her an çalışır durumda kalırken yeni özellik, deneme ya da hata düzeltmesi kendi dalında ilerler. İş bitince birleştirilir, vazgeçilirse dal silinir.",
    },
    {
      ad: "ucuz",
      dy: true,
      soru: "Git'te yeni bir dal açmak, proje ne kadar büyük olursa olsun neredeyse anında biter; çünkü dosyalar kopyalanmaz.",
      aciklama: "Doğru. Dal açmak yalnızca bir commit kimliğini yazan küçük bir dosya oluşturmaktır. Bu yüzden Git'te her iş için dal açmak olağandır.",
    },
    {
      ad: "deneme",
      senaryo: true,
      soru: "Çalışan bir projede riskli bir yeniden düzenleme denemek istiyorsun; işe yaramazsa hiç olmamış gibi dönmek istiyorsun. En uygun yol hangisi?",
      secenekler: [
        "Yeni bir dal açıp orada denemek; olmazsa dalı silmek",
        "Proje klasörünü kopyalayıp kopyada çalışmak",
        "Doğrudan main'de çalışıp gerekirse commit'leri elle geri yazmak",
        "Denemeyi commit'lemeden günlerce çalışma dizininde tutmak",
      ],
      aciklama: "Deneme dalı tam bunun içindir: ~git switch -c deneme~ ile aç, çalış, commit'le. İşe yaramazsa ~main~'e dön ve ~git branch -D deneme~ ile sil; ~main~ hiç etkilenmez.",
    },
    {
      ad: "main-ozel-mi",
      dy: false,
      zorluk: 2,
      soru: "~main~ dalı Git'in içinde özel olarak işaretlenmiş, diğer dallardan teknik olarak farklı bir daldır.",
      aciklama: "Yanlış. ~main~ (ya da ~master~) yalnızca bir adlandırma alışkanlığıdır; teknik olarak diğer dallar gibi bir işaretçidir. Onu \"ana\" yapan ekibin kuralları ve platformdaki varsayılan dal ayarıdır.",
    },
  ]),

  ...sorular(U, "u6-olustur-gec", [
    {
      ad: "switch-c",
      soru: "~giris-formu~ adında yeni bir dal açıp hemen ona geçen komutu yaz.",
      cevap: ["git switch -c giris-formu", "git checkout -b giris-formu", "git switch --create giris-formu"],
      aciklama: "~git switch -c giris-formu~ dalı bulunduğun commit'te açar ve ona geçer. Eski yazımı ~git checkout -b giris-formu~ da aynı işi yapar.",
    },
    {
      ad: "branch-ac",
      soru: "~git branch rapor~ komutu ne yapar?",
      secenekler: [
        "rapor dalını açar ama bulunduğun dalda kalırsın",
        "rapor dalını açar ve hemen ona geçer",
        "rapor dalına geçer; dal yoksa hata verir",
        "rapor dalını uzak depoya gönderir",
      ],
      aciklama: "~git branch ad~ yalnızca dalı oluşturur; HEAD yerinde kalır. Bu yüzden yeni yeni başlayanlar sık sık \"dal açtım ama commit eski dala gitti\" der. Açıp geçmek için ~git switch -c ad~.",
    },
    {
      ad: "switch-gec",
      soru: "Var olan ~main~ dalına geçmek için yazılan komutu yaz.",
      cevap: ["git switch main", "git checkout main"],
      aciklama: "~git switch main~ HEAD'i ~main~'e taşır ve çalışma dizinini o dalın son commit'ine göre günceller. Eski yazım ~git checkout main~.",
    },
    {
      ad: "gecince-dosyalar",
      soru: "İki dalda farklı dosyalar varken ~git switch~ ile dal değiştirince çalışma dizininde ne olur?",
      secenekler: [
        "Dosyalar geçilen dalın son commit'indeki hâline getirilir",
        "Hiçbir dosya değişmez, yalnızca istem satırındaki ad değişir",
        "İki dalın dosyaları birleştirilip klasöre yazılır",
        "Bütün dosyalar silinir, yeniden indirmek gerekir",
      ],
      aciklama: "Dal değiştirmek, çalışma dizinini o dalın anlık görüntüsüne çevirir: o dalda olmayan dosyalar kaybolur, farklı olanlar değişir. Commit'lenmiş hiçbir şey kaybolmaz; geri geçince eski hâl döner.",
    },
    {
      ad: "kirli-gecis",
      senaryo: true,
      zorluk: 2,
      soru: "~ozellik~ dalında ~app.js~'yi değiştirdin ama commit'lemedin. ~git switch main~ yazınca şunu gördün:\n\n~~~\nerror: Your local changes to the following files would be overwritten by checkout:\n\tapp.js\nPlease commit your changes or stash them before you switch branches.\n~~~\n\nNe yapmalısın?",
      secenekler: [
        "Değişikliği commit'lemek ya da git stash ile kenara koymak",
        "Hatayı yok saymak için komutu tekrar tekrar yazmak",
        "app.js'yi silip dal değiştirmek",
        "Depoyu yeniden clone'lamak",
      ],
      aciklama: "Git, kaydedilmemiş değişikliğini ezmemek için durdu. Ya iş bitti sayıp commit'le, ya da ~git stash~ ile kenara koy, dal değiştir, döndüğünde ~git stash pop~ ile geri al (9. ünite).",
    },
    {
      ad: "yanlis-dalda-commit",
      senaryo: true,
      zorluk: 2,
      soru: "Yeni özelliğin ilk commit'ini attıktan sonra fark ettin: dal açmayı unutmuşsun, commit doğrudan yerel ~main~'e girdi (henüz push etmedin). Hangisi temiz bir çözümdür?",
      secenekler: [
        "Bulunduğun yerde yeni dal açıp main'i bir commit geri almak",
        "Commit'i silip bütün kodu yeniden yazmak",
        "main'i olduğu gibi push edip özelliği orada bitirmek",
        "Projeyi yeni bir klasöre kopyalayıp orada dal açmak",
      ],
      aciklama: "~git branch ozellik~ commit'i yeni dalda korur; ardından ~git reset --hard HEAD¬1~ ile ~main~ bir geri alınır (push edilmediği için güvenli). Sonra ~git switch ozellik~ ile devam edersin.",
    },
  ]),

  ...sorular(U, "u6-kopuk-head", [
    {
      ad: "head-nedir",
      soru: "Bir daldayken HEAD neyi gösterir?",
      secenekler: [
        "Bulunduğun dalı ve onun son commit'ini",
        "Deponun en eski, ilk commit'ini",
        "Uzak depodaki main dalını",
        "Hazırlık alanındaki ilk dosyayı",
      ],
      aciklama: "HEAD \"şu an neredesin\" işaretçisidir. Normalde bir dalı gösterir (~HEAD -> main~); yeni commit atınca o dal ilerler, HEAD de onunla gider.",
    },
    {
      ad: "kopuk-tanim",
      soru: "~git switch --detach 3f1c2aa~ ya da ~git checkout 3f1c2aa~ ile eski bir commit'e geçince \"detached HEAD\" uyarısı çıkar. Bu ne demektir?",
      secenekler: [
        "HEAD bir dalı değil, doğrudan commit'i gösteriyor",
        "Depo bozuldu, son commit'ler silindi",
        "Uzak depo ile bağlantı koptu, push yapılamaz",
        "Hazırlık alanı boşaltıldı, dosyalar silindi",
      ],
      aciklama: "Kopuk HEAD'de hiçbir dal üzerinde değilsin. Eski kodu incelemek için güvenlidir; ama burada atılan commit'ler hiçbir dala bağlı olmadığından, başka yere geçince kolayca kaybolur.",
    },
    {
      ad: "kopukta-commit",
      senaryo: true,
      zorluk: 3,
      soru: "Kopuk HEAD'deyken iki deneme commit'i attın ve beğendin. Bunları korumak için ilk ne yapmalısın?",
      secenekler: [
        "Bulunduğun yerde git switch -c ile yeni bir dal açmak",
        "Hemen git switch main yazıp main'e dönmek",
        "git push yazıp commit'leri göndermek",
        "git reset --hard ile çalışma dizinini temizlemek",
      ],
      aciklama: "~git switch -c deneme~ commit'leri yeni bir dala bağlar. Önce main'e dönersen commit'ler sahipsiz kalır; reflog'dan bulunabilir ama zahmetlidir (9. ünite).",
    },
    {
      ad: "eski-surume-bak",
      dy: true,
      soru: "Eski bir commit'in kodunu çalıştırıp denemek için o commit'e geçmek (kopuk HEAD) güvenlidir; commit atmadıkça hiçbir şey kaybolmaz.",
      aciklama: "Doğru. Yalnızca bakıp çalıştırmak için kopuk HEAD idealdir. İşin bitince ~git switch main~ ile dalına dönersin.",
    },
  ]),

  ...sorular(U, "u6-merge", [
    {
      ad: "merge-komut",
      soru: "Şu an ~main~ dalındasın. ~ozellik~ dalındaki değişiklikleri ~main~'e birleştiren komutu yaz.",
      cevap: ["git merge ozellik"],
      aciklama: "~git merge ozellik~, ~ozellik~ dalını **bulunduğun** dala (~main~) birleştirir. Yön önemlidir: önce hedef dala geçilir, sonra kaynak dal birleştirilir.",
    },
    {
      ad: "ff",
      zorluk: 2,
      soru: "~ozellik~ dalı ~main~'den ayrıldıktan sonra ~main~'e hiç commit atılmadı. ~main~ üzerindeyken ~git merge ozellik~ yazınca ne olur?",
      secenekler: [
        "main ileri sarılır, yeni bir birleştirme commit'i oluşmaz",
        "İki ebeveynli bir birleştirme commit'i oluşur",
        "Git çakışma bildirir ve durur",
        "ozellik dalı silinir, main değişmez",
      ],
      aciklama: "Bu bir **fast-forward**'dır: ~main~'in ucu zaten ~ozellik~'in atasıdır, Git yalnızca ~main~ işaretçisini öne kaydırır. Çıktıda \"Fast-forward\" yazar.",
    },
    {
      ad: "uc-yollu",
      zorluk: 2,
      soru: "~main~ ve ~ozellik~ ayrıldıktan sonra ikisine de commit atıldı. Birleştirince Git ne yapar?",
      secenekler: [
        "İki ebeveynli yeni bir birleştirme commit'i oluşturur",
        "Yalnızca main'i ozellik dalının ucuna kaydırır",
        "ozellik dalındaki commit'leri tek tek siler",
        "Hiçbir şey yapmaz, önce rebase yapılmasını ister",
      ],
      aciklama: "Bu **üç yollu birleştirme**dir: Git ortak atayı ve iki dalın ucunu karşılaştırır, değişiklikleri birleştirir ve iki ebeveynli bir birleştirme commit'i (merge commit) oluşturur. Aynı satırlar iki tarafta farklı değiştiyse çakışma çıkar.",
    },
    {
      ad: "no-ff",
      zorluk: 3,
      soru: "İleri sarma mümkün olsa bile birleştirme commit'i oluşturulmasını isteyen ~git merge~ seçeneği hangisidir?",
      secenekler: ["~--no-ff~", "~--ff-only~", "~--squash~", "~--abort~"],
      aciklama: "~--no-ff~ her zaman birleştirme commit'i oluşturur; geçmişte \"bu commit'ler bir özellik dalından geldi\" bilgisi kalır. ~--ff-only~ tersidir: ileri sarma olmuyorsa birleştirmeyi reddeder.",
    },
    {
      ad: "yon",
      senaryo: true,
      soru: "Ekip arkadaşın \"~ozellik~'teki işi ~main~'e aldım\" dedi ama ~main~'de hiçbir şey değişmemiş; ~ozellik~ dalına ise ~main~'in commit'leri gelmiş. Ne olmuş olabilir?",
      secenekler: [
        "ozellik dalındayken git merge main yazmış",
        "main dalındayken git merge ozellik yazmış",
        "git merge yerine git switch yazmış",
        "Birleştirme commit'i yerine etiket oluşturmuş",
      ],
      aciklama: "~git merge X~, X'i **bulunduğun** dala alır. ~ozellik~'teyken ~git merge main~ yazınca ~main~ ozellik'e gelir. Doğrusu: ~git switch main~, sonra ~git merge ozellik~.",
    },
    {
      ad: "merge-graf",
      dy: true,
      soru: "Bir birleştirme commit'inin iki ebeveyni vardır.",
      aciklama: "Doğru. Biri birleştirmenin yapıldığı dalın önceki ucu, diğeri birleştirilen dalın ucudur. ~git log --graph~ bu yüzden iki çizginin birleştiğini gösterir.",
    },
  ]),

  ...sorular(U, "u6-dal-yonetimi", [
    {
      ad: "branch-liste",
      soru: "Yerel dalları listeleyen ve bulunduğun dalı ~*~ ile işaretleyen komutu yaz.",
      cevap: ["git branch", "git branch --list"],
      aciklama: "Argümansız ~git branch~ yerel dalları listeler; bulunduğun dalın başında ~*~ vardır. Uzak dallarla birlikte görmek için ~git branch -a~.",
    },
    {
      ad: "branch-d",
      soru: "Birleştirdiğin ~ozellik~ dalını silen komutu yaz.",
      cevap: ["git branch -d ozellik", "git branch --delete ozellik"],
      aciklama: "~git branch -d ozellik~ dalı siler; dal birleştirilmemişse Git güvenlik için reddeder. Birleşmemiş dalı bilerek silmek için ~-D~.",
    },
    {
      ad: "not-fully-merged",
      senaryo: true,
      zorluk: 2,
      soru: "~git branch -d deneme~ yazınca \"error: the branch 'deneme' is not fully merged\" uyarısını aldın. Bu ne anlatıyor?",
      secenekler: [
        "deneme dalında başka hiçbir dala girmemiş commit'ler var",
        "deneme dalı uzak depoda bulunamadı",
        "Şu an deneme dalının üzerindesin",
        "deneme dalının adı geçersiz karakter içeriyor",
      ],
      aciklama: "Git, silersen ulaşması zorlaşacak commit'ler olduğunu söylüyor. Gerçekten istemiyorsan ~git branch -D deneme~; emin değilsen önce birleştir ya da ~git log main..deneme~ ile neyin gideceğine bak.",
    },
    {
      ad: "adlandirma",
      senaryo: true,
      soru: "Ekip kuralına göre dallar iş türü ve iş numarasıyla adlandırılıyor. US-D12 numaralı giriş doğrulama hatasını düzelteceksin. Hangisi bu kurala uyan bir dal adıdır?",
      secenekler: [
        "~bugfix/US-D12-login-validation~",
        "~Login Validation Fix~",
        "~duzeltme~",
        "~ahmet-yeni-dal-2~",
      ],
      aciklama: "~bugfix/~ ya da ~feature/~ öneki, ardından iş numarası ve kısa açıklama: dalın neden var olduğunu adından okursun. Dal adında boşluk olamaz; ~ahmet-yeni-dal-2~ gibi adlar birkaç gün sonra kimseye bir şey söylemez.",
    },
    {
      ad: "rename",
      soru: "Bulunduğun dalın adını ~yeni-ad~ yapan komut hangisidir?",
      secenekler: ["~git branch -m yeni-ad~", "~git rename yeni-ad~", "~git switch -m yeni-ad~", "~git branch -d yeni-ad~"],
      aciklama: "~git branch -m~ (move) dalı yeniden adlandırır; commit'ler aynı kalır. Push edilmiş bir dalın adını değiştirmek uzak tarafta ayrıca silme ve yeniden push gerektirir.",
    },
    {
      ad: "silince-commit",
      dy: false,
      zorluk: 2,
      soru: "~git branch -d ozellik~ ile birleştirilmiş bir dalı silmek, o dalda atılmış commit'leri de geçmişten siler.",
      aciklama: "Yanlış. Yalnızca işaretçi silinir. Dal birleştirildiği için commit'ler zaten ~main~'in geçmişinde durur.",
    },
  ]),
];
