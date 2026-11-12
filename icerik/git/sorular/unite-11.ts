// 11. ünite (Orta): rebase. Commit'leri başka bir tabana taşımak, merge ile
// karşılaştırmak, etkileşimli rebase (squash, reword, drop, sıra), paylaşılmış
// geçmişi yeniden yazmamak ve rebase sırasında çakışma.
import { sorular, type Soru } from "./yardimci.ts";

const U = 11;

export const unite11: Soru[] = [
  ...sorular(U, "u11-rebase-nedir", [
    {
      ad: "ne-yapar",
      soru: "~ozellik~ dalındayken ~git rebase main~ ne yapar?",
      secenekler: [
        "ozellik'in kendi commit'lerini main'in ucunun üstüne yeniden uygular",
        "main'i ozellik dalının içine birleştirme commit'iyle katar",
        "ozellik dalını silip main'e geçer",
        "main dalını ozellik'in ucuna taşır",
      ],
      aciklama: "Rebase, dalın main'den ayrıldıktan sonraki commit'lerini tek tek alır ve main'in şu anki ucunun üstüne yeniden uygular. Sonuçta geçmiş düz bir çizgi olur, birleştirme commit'i oluşmaz.",
    },
    {
      ad: "yeni-hash",
      dy: true,
      soru: "Rebase'den sonra taşınan commit'lerin içeriği aynı kalsa bile hash'leri değişir.",
      aciklama: "Doğru. Commit'in hash'i ebeveynini de kapsar. Ebeveyn değişince yeni bir commit nesnesi yazılır; eski commit'ler bir süre reflog'da kalır.",
    },
    {
      ad: "eski-commitler",
      zorluk: 2,
      soru: "Rebase'den sonra eski (taşınmadan önceki) commit'lere ne olur?",
      secenekler: [
        "Hemen silinmez, reflog'dan bulunup geri alınabilir",
        "Rebase biter bitmez diskten kalıcı olarak silinir",
        "Uzak depoya yedek olarak gönderilir",
        "main dalına otomatik olarak eklenir",
      ],
      aciklama: "Eski commit'ler artık hiçbir dalda görünmez ama nesne deposunda durur. ~git reflog~ ile eski hash bulunur ve ~git reset --hard <hash>~ ile rebase geri alınabilir.",
    },
    {
      ad: "rebase-komut",
      soru: "Bulunduğun dalı ~main~ dalının ucunun üstüne taşıyan komutu yaz.",
      cevap: ["git rebase main"],
      aciklama: "~git rebase main~ dalın main'den sonra gelen commit'lerini main'in ucuna yeniden uygular.",
    },
    {
      ad: "zaten-guncel",
      zorluk: 2,
      soru: "Dalın zaten main'in ucundan açılmışsa ve main o zamandan beri ilerlememişse ~git rebase main~ ne der?",
      secenekler: [
        "Dalın zaten güncel olduğunu söyler, hiçbir şey yapmaz",
        "Bütün commit'leri yine de yeni hash'lerle yeniden yazar",
        "Hata verip rebase'i yarıda bırakır",
        "main'i dalın ucuna ileri sarar",
      ],
      aciklama: "Taşınacak bir taban farkı yoksa Git \"Current branch ozellik is up to date.\" yazar ve geçmişe dokunmaz.",
    },
  ]),
  ...sorular(U, "u11-merge-rebase", [
    {
      ad: "fark",
      soru: "Merge ile rebase arasındaki temel fark nedir?",
      secenekler: [
        "Merge geçmişi olduğu gibi korur, rebase commit'leri yeniden yazarak düz bir çizgi kurar",
        "Merge yalnızca uzak dallarda, rebase yalnızca yerel dallarda çalışır",
        "Rebase çakışma çıkarmaz, merge çıkarır",
        "Merge commit'leri siler, rebase saklar",
      ],
      aciklama: "İkisi de iki dalın işini bir araya getirir. Merge bir birleştirme commit'iyle olanı olduğu gibi kaydeder; rebase ise commit'leri yeni tabana taşır ve geçmişi doğrusal gösterir.",
    },
    {
      ad: "duz-gecmis",
      dy: false,
      soru: "Rebase ile birleştirilen dallarda çakışma hiç çıkmaz; çakışmadan kaçmak için rebase kullanılır.",
      aciklama: "Yanlış. Aynı satırlara iki taraf dokunduysa rebase de çakışır; üstelik her commit ayrı uygulandığından aynı çakışmayla birden çok kez karşılaşılabilir.",
    },
    {
      ad: "ne-zaman-rebase",
      senaryo: true,
      zorluk: 2,
      soru: "Kendi bilgisayarındaki, henüz kimseyle paylaşmadığın ~ozellik~ dalını main'deki son değişikliklerle güncellemek istiyorsun. Ekip düz geçmiş seviyor. Ne yaparsın?",
      secenekler: [
        "git rebase main ile dalı main'in ucuna taşırım",
        "main'i ozellik'e merge eder, sonra main'i siler",
        "git push --force origin main yaparım",
        "Dalı silip baştan yazarım",
      ],
      aciklama: "Dal yalnızca sende olduğu için geçmişini yeniden yazmak kimseyi etkilemez. Rebase, dalı main'in ucundan açılmış gibi gösterir ve ileride düz bir PR çıkarır.",
    },
    {
      ad: "ne-zaman-merge",
      senaryo: true,
      zorluk: 2,
      soru: "Üç kişinin birlikte çalıştığı ve GitHub'a gönderilmiş ~test~ dalına ~dev~'deki bir düzeltmeyi taşımak gerekiyor. Hangisi daha güvenlidir?",
      secenekler: [
        "Ortak dalda geçmişi yeniden yazmayan bir yol: merge ya da PR",
        "test dalını dev'in üstüne rebase edip force push",
        "test dalını silip dev'den yeniden açmak",
        "Herkese git reset --hard yaptırmak",
      ],
      aciklama: "Paylaşılmış bir dalın geçmişi yeniden yazılırsa herkesin yerel kopyası ayrışır. Ortak dallarda merge (ya da PR ile birleştirme) kullanılır; rebase yalnızca kendi dalında yapılır.",
    },
    {
      ad: "rebase-merge-pr",
      zorluk: 3,
      soru: "GitHub'da PR birleştirirken \"Rebase and merge\" seçilirse ne olur?",
      secenekler: [
        "Commit'ler hedefin ucuna tek tek yeniden yazılır, çatal kalmaz",
        "Bütün commit'ler tek bir commit'e sıkıştırılır",
        "Bir birleştirme commit'i oluşur ve kaynak dal hemen silinir",
        "PR kapatılır ama değişiklikler hedefe girmez",
      ],
      aciklama: "\"Rebase and merge\" dalın commit'lerini sırasıyla hedefin üstüne koyar. \"Squash and merge\" hepsini tek commit yapar; \"Create a merge commit\" ise birleştirme commit'i yazar.",
    },
    {
      ad: "graf-okuma",
      zorluk: 2,
      soru: "Bir dalın geçmişinde iki ebeveynli commit'ler yok, her şey tek çizgi hâlinde. Bu ekip büyük olasılıkla nasıl birleştiriyor?",
      secenekler: [
        "Rebase ya da squash ile",
        "Her zaman --no-ff merge ile",
        "Cherry-pick'i hiç kullanmadan merge ile",
        "Bu geçmişten hiçbir şey anlaşılamaz",
      ],
      aciklama: "Birleştirme commit'i iki ebeveynlidir ve grafikte çatal bırakır. Tamamen düz bir geçmiş, dalların rebase ya da squash ile birleştirildiğini gösterir.",
    },
  ]),
  ...sorular(U, "u11-etkilesimli", [
    {
      ad: "i-ne",
      soru: "~git rebase -i HEAD¬3~ ne yapar?",
      secenekler: [
        "Son üç commit'i düzenlemen için bir yapılacaklar listesinde açar",
        "Son üç commit'i siler",
        "Son üç commit'i tek tek yeniden imzalayıp uzak depoya gönderir",
        "Üç commit öncesine kopuk HEAD olarak geçer",
      ],
      aciklama: "Etkileşimli rebase bir yapılacaklar listesi (todo) açar. Her satırın başındaki komutu (pick, reword, squash, fixup, drop, edit) değiştirip satırların yerini oynatarak geçmişi düzenlersin.",
    },
    {
      ad: "squash",
      soru: "Todo listesinde bir satırın başına ~squash~ yazmak ne yapar?",
      secenekler: [
        "Commit'i bir öncekine katar, iki mesajı birlikte düzenletir",
        "O commit'i tamamen siler",
        "O commit'in yalnızca mesajını değiştirir",
        "O commit'te durur, dosyaları düzenlemene izin verir",
      ],
      aciklama: "~squash~ commit'i bir üstteki satırla birleştirir ve mesajları birlikte düzenlemeni ister. Mesajı atıp yalnızca değişikliği katmak istersen ~fixup~ kullanılır.",
    },
    {
      ad: "fixup",
      zorluk: 2,
      soru: "~squash~ ile ~fixup~ arasındaki fark nedir?",
      secenekler: [
        "fixup mesajı atar, squash mesajları birleştirmeni ister",
        "fixup commit'i siler, squash saklar",
        "fixup yalnızca listedeki son commit'te kullanılabilir",
        "İkisi arasında hiçbir fark yoktur",
      ],
      aciklama: "İkisi de commit'i bir öncekine katar. ~fixup~ yeni commit'in mesajını sessizce atar; \"yazım hatası düzelt\" gibi küçük commit'leri temizlemek için idealdir.",
    },
    {
      ad: "reword",
      soru: "Todo listesinde yalnızca bir commit'in mesajını değiştirmek için hangi komut kullanılır?",
      secenekler: ["reword", "edit", "pick", "drop"],
      aciklama: "~reword~ commit'i olduğu gibi uygular, sonra mesajını düzenlemen için düzenleyiciyi açar. ~edit~ ise commit'te durur ve içeriğini de değiştirmene izin verir.",
    },
    {
      ad: "drop",
      dy: true,
      soru: "Etkileşimli rebase'de bir satırı silmek ya da başına ~drop~ yazmak o commit'i geçmişten çıkarır.",
      aciklama: "Doğru. ~drop~ yazılan (ya da listeden silinen) commit yeniden uygulanmaz; değişikliği yeni geçmişte yer almaz.",
    },
    {
      ad: "sira",
      zorluk: 2,
      soru: "Todo listesinde iki satırın yerini değiştirirsen ne olur?",
      secenekler: [
        "Commit'ler yeni sırayla uygulanır",
        "Git listeyi kendi sırasına geri çevirir",
        "Rebase hemen iptal edilir",
        "İki commit tek commit'e birleşir",
      ],
      aciklama: "Liste yukarıdan aşağıya uygulanır; satırların sırası yeni geçmişin sırasıdır. Birbirine bağlı değişikliklerin sırası değişirse çakışma çıkabilir.",
    },
    {
      ad: "squash-ilk",
      zorluk: 3,
      soru: "Todo listesinin **ilk** satırına ~squash~ yazarsan ne olur?",
      secenekler: [
        "Git hata verir, katılacak bir önceki commit yoktur",
        "İlk commit silinir",
        "Listedeki bütün commit'ler tek bir commit olur",
        "Git satırı sessizce pick sayar",
      ],
      aciklama: "squash ve fixup kendinden önceki commit'e katılır. İlk satırda böyle bir commit olmadığından Git \"cannot 'squash' without a previous commit\" der ve listeyi düzeltmeni ister.",
    },
    {
      ad: "pr-oncesi",
      senaryo: true,
      zorluk: 2,
      soru: "PR açmadan önce dalında şu commit'ler var: \"login formu\", \"yazım hatası\", \"bir yazım hatası daha\", \"login testleri\". Henüz kimseye göndermedin. İnceleyen için en temiz geçmişi nasıl kurarsın?",
      secenekler: [
        "rebase -i ile yazım düzeltmelerini fixup yapıp forma katarım",
        "Dört commit'i olduğu gibi gönderirim, inceleyen anlar",
        "Dalı silip bütün işi tek dosyaya kopyalarım",
        "git push --force ile main'e gönderirim",
      ],
      aciklama: "Yazım düzeltmeleri anlamlı birer adım değildir. ~fixup~ ile ilgili commit'e katılırlar ve PR'da iki net commit kalır: form ve testler.",
    },
    {
      ad: "i-komut",
      soru: "~ozellik~ dalındasın. Dalın ~main~'den ayrıldıktan sonraki bütün commit'lerini etkileşimli olarak düzenlemeyi açan komutu yaz.",
      cevap: ["git rebase -i main", "git rebase --interactive main"],
      aciklama: "~git rebase -i main~ dalın main'de olmayan commit'lerini yapılacaklar listesinde açar. Taban aynı kaldığından yalnızca bu commit'ler düzenlenir; ~HEAD¬4~ gibi bir sayı da verilebilir.",
    },
    {
      ad: "edit",
      zorluk: 3,
      soru: "Todo listesinde ~edit~ yazılan commit'e gelince Git ne yapar?",
      secenekler: [
        "Durur; commit'i --amend ile değiştirip --continue dersin",
        "Commit'i siler ve devam eder",
        "Yalnızca commit mesajını düzenlemen için düzenleyici açar",
        "Commit'i başka bir dala taşır",
      ],
      aciklama: "~edit~ commit'i uygular ve durur. Bu sırada commit'i değiştirebilir, hatta ikiye bölebilirsin. Bitince ~git rebase --continue~ kalan satırları uygular.",
    },
  ]),
  ...sorular(U, "u11-altin-kural", [
    {
      ad: "kural",
      soru: "Rebase'in \"altın kuralı\" nedir?",
      secenekler: [
        "Başkalarının da kullandığı, gönderilmiş commit'leri rebase etme",
        "Rebase'i yalnızca main dalında yap",
        "Her commit'ten sonra rebase yap",
        "Rebase'den önce depoyu her zaman yeniden klonla",
      ],
      aciklama: "Paylaşılmış commit'ler yeniden yazılırsa ekip arkadaşlarının elindeki kopyalar eski commit'lere dayanır ve geçmişler ayrışır. Kendi gönderilmemiş commit'lerin ise serbestçe düzenlenebilir.",
    },
    {
      ad: "push-sonrasi",
      senaryo: true,
      zorluk: 2,
      soru: "Kendi özellik dalını GitHub'a gönderdin, PR açık; dalda yalnızca sen çalışıyorsun. İncelemeden sonra commit'leri squash etmek istiyorsun. Rebase sonrası push reddedilir. Doğru hamle nedir?",
      secenekler: [
        "Dalın yalnızca sende olduğundan emin olup git push --force-with-lease yaparım",
        "git pull ile eski commit'leri geri çekip yeniden gönderirim",
        "Dalı main'e doğrudan push ederim",
        "Rebase'i bırakıp main'i force push ederim",
      ],
      aciklama: "Kendi PR dalında geçmişi düzenlemek yaygındır. Push reddi beklenen bir şeydir; ~--force-with-lease~ arada başkası push ettiyse yine reddeder, bu yüzden düz ~--force~'tan güvenlidir. Burada ~git pull~ eski commit'leri geri birleştirir ve temizliği bozar.",
    },
    {
      ad: "ortak-dal",
      senaryo: true,
      zorluk: 3,
      soru: "Bir ekip arkadaşın ortak ~dev~ dalını rebase edip force push etmiş. Senin yerel ~dev~'inde push edilmemiş bir commit var ve ~git pull~ çok sayıda tuhaf çakışma veriyor. En temiz kurtarma hangisi?",
      secenekler: [
        "Commit'imi bir dala saklar, dev'i origin/dev'e eşitler, üstüne alırım",
        "git push --force ile kendi dev'imi geri yüklerim",
        "Bütün çakışmaları tek tek elle çözüp birleştirme commit'ini gönderirim",
        "Depoyu silip işimi kaybetmeyi kabul ederim",
      ],
      aciklama: "Eski geçmişi yeni geçmişle birleştirmek aynı değişiklikleri iki kez getirir. Önce kendi commit'ini bir dalla koru, ~git reset --hard origin/dev~ ile eşitle, sonra commit'ini ~cherry-pick~ ya da rebase ile yeni ucun üstüne al. Ardından ekiple ortak dalı yeniden yazmamayı konuş.",
    },
    {
      ad: "korumali",
      dy: true,
      soru: "GitHub'da korumalı dallarda force push genellikle tamamen kapalıdır; bu da altın kuralı platform düzeyinde uygular.",
      aciklama: "Doğru. Dal koruma kuralları varsayılan olarak force push'u ve dal silmeyi engeller. Cargo Pilot akışında main, test ve dev bu yüzden korumalıdır.",
    },
    {
      ad: "kendi-dal",
      dy: false,
      soru: "Henüz hiç push etmediğin yerel dalında da rebase yapmak tehlikelidir; çünkü ekip arkadaşların bu commit'leri kullanıyor olabilir.",
      aciklama: "Yanlış. Commit'ler hiç gönderilmediyse kimsenin elinde değildir. Kural yalnızca paylaşılmış geçmiş içindir; yerel dalını istediğin kadar düzenleyebilirsin.",
    },
  ]),
  ...sorular(U, "u11-cakisma", [
    {
      ad: "continue",
      soru: "Rebase bir commit'te çakışmayla durdu. Dosyayı düzelttin ve ~git add~ ile hazırladın. Devam etmek için ne yazarsın?",
      cevap: ["git rebase --continue"],
      aciklama: "~git rebase --continue~ çözülen commit'i yazar ve listedeki sıradaki commit'e geçer. Rebase sırasında ~git commit~ yazmaya gerek yoktur.",
    },
    {
      ad: "abort",
      soru: "Rebase'in ortasında işler karıştı ve her şeyi rebase başlamadan önceki hâline döndürmek istiyorsun. Hangi komut?",
      secenekler: ["git rebase --abort", "git rebase --skip", "git reset --soft HEAD", "git rebase --quit"],
      aciklama: "~--abort~ dalı ve çalışma alanını rebase'den önceki hâline geri koyar. ~--skip~ yalnızca o anki commit'i atlar; ~--quit~ ise rebase'i bırakır ama HEAD'i olduğu yerde bırakır.",
    },
    {
      ad: "skip",
      zorluk: 2,
      soru: "~git rebase --skip~ ne yapar?",
      secenekler: [
        "Çakışan commit'i yeni geçmişe almadan sıradakine geçer",
        "Çakışmayı otomatik çözer",
        "Rebase'i iptal edip başa döner",
        "Kalan bütün commit'leri atlayıp rebase'i bitirir",
      ],
      aciklama: "~--skip~ o anki commit'i bırakır; değişikliği yeni geçmişte yer almaz. Commit'in işi hedefte zaten varsa (örneğin main'e başka yoldan girmişse) işe yarar.",
    },
    {
      ad: "ours-theirs",
      zorluk: 3,
      soru: "Rebase sırasında çakışmada ~--ours~ hangi tarafı gösterir?",
      secenekler: [
        "Üstüne taşındığın tabanı ve o ana kadar uygulananları",
        "Senin dalının o an taşınmakta olan commit'ini",
        "Ortak atayı",
        "Uzak depodaki hâli",
      ],
      aciklama: "Rebase, taban üstünde yeni bir HEAD kurup senin commit'lerini ona uygular. Bu yüzden merge'tekinin tersine ~--ours~ taban tarafı, ~--theirs~ ise senin taşınan commit'indir.",
    },
    {
      ad: "tekrar-cakisma",
      senaryo: true,
      zorluk: 2,
      soru: "Beş commit'lik dalını rebase ediyorsun ve aynı dosyada üçüncü kez çakışma çıkıyor. Ne düşünmelisin?",
      secenekler: [
        "Commit'ler tek tek uygulandığı için aynı yer yine çakışabilir",
        "Git bozulmuştur, depoyu yeniden klonlarım",
        "Her çakışmada --skip yaparım",
        "Rebase'de üç çakışmadan fazlası olmaz, sonraki otomatik çözülür",
      ],
      aciklama: "Rebase commit'leri tek tek uyguladığından aynı bölgeye dokunan her commit yeniden çakışabilir. Ya sabırla çözülür ya da önce ~git rebase -i~ ile commit'ler birleştirilip çakışma tek seferde çözülür. ~--skip~ işini kaybettirir.",
    },
    {
      ad: "status-rebase",
      dy: true,
      soru: "Rebase çakışmayla durduğunda ~git status~ rebase'in sürdüğünü, hangi commit'lerin uygulandığını ve sırada ne olduğunu gösterir.",
      aciklama: "Doğru. ~git status~ \"interactive rebase in progress\" ya da \"You are currently rebasing\" yazar ve çözüm için ~--continue~, ~--skip~ ve ~--abort~ seçeneklerini hatırlatır.",
    },
  ]),
];
