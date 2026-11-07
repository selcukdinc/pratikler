// 1. tema (Dilimizin Zenginliği), yazma: T.Y.6.3 yazının içeriğini ve yapısını seçme,
// T.Y.6.18 yazarken söz varlığını kullanma, T.Y.6.21 yazım ve noktalama (de/da, ki,
// mi, virgül).
import { grup, type Soru } from "./yardimci.ts";

const T = 1;

export const yazma: Soru[] = [
  // T.Y.6.3: yazının konusunu, ana fikrini ve bölümlerini seçme
  ...grup({ tema: T, konu: "t6-u1-yazma", kavram: "u1-yazi-plani", kod: "T.Y.6.3", yazili1: true }, [
    {
      id: "t6-1-yp-01", tip: "mcq", zorluk: 1,
      soru: "\"Kitap okumanın faydaları\" konulu bir yazının **giriş** bölümünde aşağıdakilerden hangisinin yer alması en uygundur?",
      secenekler: ["Yazının konusunun tanıtılması", "Yazının ana fikrinin son kez vurgulanması", "Okunacak kitapların sayfa sayıları", "Yazıda sözü edilen kitapların özetleri"],
      dogru: 0,
      aciklama: "Giriş bölümünde konu tanıtılır ve okurun ilgisi çekilir. Ana fikrin son kez vurgulanması sonuç bölümünün işidir; özetler ve ayrıntılar gelişme bölümünde yer alır.",
    },
    {
      id: "t6-1-yp-02", tip: "mcq", zorluk: 2,
      soru: "Bir öğrenci \"Türkçemizi doğru kullanalım\" başlıklı bir yazı yazacaktır. Aşağıdaki cümlelerden hangisi bu yazının **ana fikri** olmaya en uygundur?",
      secenekler: ["Türkçe dünyada çok konuşulan diller arasındadır.", "Dilimizi doğru kullanmak onu korumanın en iyi yoludur.", "Bazı kelimeler başka dillerden gelmiştir.", "Sözlükte binlerce kelime vardır."],
      dogru: 1,
      aciklama: "Başlık, okura bir öğüt veriyor: Türkçeyi doğru kullanmak. Ana fikir de bu öğüdün nedenini söyleyen cümledir. Diğer cümleler yazıda yardımcı bilgi olarak kullanılabilir.",
    },
    {
      id: "t6-1-yp-03", tip: "yaz", zorluk: 2,
      soru: "\"En sevdiğim kelime\" konulu bir yazı yazacaksınız. Yazınızın **giriş, gelişme ve sonuç** bölümlerinde neler anlatacağınızı birer cümleyle planlayınız.",
      aciklama: "**Örnek cevap:**\n- *Giriş:* En sevdiğim kelimenin \"gökkuşağı\" olduğunu ve onu neden seçtiğimi söylerim.\n- *Gelişme:* Kelimenin \"gök\" ve \"kuşak\" kelimelerinden nasıl oluştuğunu ve bana hatırlattığı bir anıyı anlatırım.\n- *Sonuç:* Kelimelerin bize duygular hissettirdiğini, dilimizin bu yüzden zengin olduğunu belirtirim.\n\n**Puanlama:** Her bölüm için konuya uygun bir cümle puanın üçte biri.",
    },
    {
      id: "t6-1-yp-04", tip: "mcq", zorluk: 2,
      soru: "\"Okul bahçemizi nasıl güzelleştirebiliriz?\" sorusuna cevap veren bir yazı için aşağıdaki metin türlerinden hangisi en uygundur?",
      secenekler: ["Masal", "Şiir", "Bilgilendirici metin", "Fıkra"],
      dogru: 2,
      aciklama: "Yazı bir soruya öneriler ve bilgiler vererek cevap verecektir; bunun için **bilgilendirici metin** uygundur. Masal ve fıkra hayal ürünü olay anlatır, şiir duygu ve düşünceyi dizelerle verir.",
    },
    {
      id: "t6-1-yp-05", tip: "yaz", zorluk: 3,
      soru: "\"Dilimizin zenginliği\" konusunda bir paragraf yazacaksınız. Paragrafınızın konusunu ve ana fikrini birer cümleyle yazınız; sonra ana fikri destekleyecek iki örnek belirtiniz.",
      aciklama: "**Örnek cevap:**\n- *Konu:* Türkçenin kelime ve söz bakımından zenginliği.\n- *Ana fikir:* Türkçe, duygu ve düşüncelerimizi farklı biçimlerde anlatmamızı sağlayan zengin bir dildir.\n- *Destekleyen örnekler:* Aynı anlamı veren farklı kelimeler (güzel, hoş, latif); bir durumu kısaca anlatan deyim ve atasözleri (\"damlaya damlaya göl olur\").\n\n**Puanlama:** Konu ve ana fikir yarı puan, iki uygun örnek yarı puan.",
    },
  ]),

  // T.Y.6.18: yazarken söz varlığını kullanma
  ...grup({ tema: T, konu: "t6-u1-yazma", kavram: "u1-sozvarligi-kullanma", kod: "T.Y.6.18", yazili1: true }, [
    {
      id: "t6-1-sk-01", tip: "mcq", zorluk: 1,
      soru: "\"Sabah erkenden uyandım. Sonra kahvaltı yaptım. Sonra çantamı hazırladım. Sonra okula gittim.\"\n\nBu metinde aynı kelimenin tekrarlanmasından kaynaklanan anlatım kusurunu gidermek için \"sonra\" kelimelerinin yerine sırasıyla hangileri kullanılabilir?",
      secenekler: ["Ardından, daha sonra, en sonunda", "Ama, fakat, ancak", "Çünkü, bu yüzden, bu nedenle", "Belki, sanki, galiba"],
      dogru: 0,
      aciklama: "Olaylar sırayla anlatılıyor; sıra bildiren \"ardından, daha sonra, en sonunda\" sözleri hem tekrarı önler hem de anlamı korur. Diğer seçeneklerdeki sözler karşıtlık, sebep ya da tahmin bildirir.",
    },
    {
      id: "t6-1-sk-02", tip: "yaz", zorluk: 2,
      soru: "\"Hava çok güzeldi. Parkta çok güzel çiçekler vardı. Çocuklar çok güzel oyunlar oynuyordu.\"\n\nBu metinde \"güzel\" kelimesinin tekrarını önleyecek biçimde cümleleri yeniden yazınız.",
      aciklama: "**Örnek cevap:** Hava çok **güneşliydi**. Parkta **rengârenk** çiçekler vardı. Çocuklar **eğlenceli** oyunlar oynuyordu.\n\n**Puanlama:** Her cümlede anlama uygun farklı bir kelime puanın üçte biri.",
    },
    {
      id: "t6-1-sk-03", tip: "mcq", zorluk: 2,
      soru: "\"Dedem çok yaşlı olmasına rağmen her sabah ______ yürüyüşe çıkar.\"\n\nBu cümlede boş bırakılan yere aşağıdaki ikilemelerden hangisi anlama en uygun olarak getirilebilir?",
      secenekler: ["Yavaş yavaş", "Koşa koşa", "Bağıra bağıra", "Ağlaya ağlaya"],
      dogru: 0,
      aciklama: "Yaşlı olmasına rağmen yürüyüşe çıkan dedenin yürüyüşünü en iyi \"yavaş yavaş\" ikilemesi anlatır; cümlenin anlamıyla uyumludur.",
    },
    {
      id: "t6-1-sk-04", tip: "yaz", zorluk: 2,
      soru: "\"Ağzı kulaklarına varmak\" deyimini kullanarak bir doğum günü sabahını anlatan iki cümlelik bir metin yazınız.",
      aciklama: "**Örnek cevap:** Sabah uyandığımda masada beni bekleyen hediyeyi gördüm. Ailemin hazırladığı sürprizle **ağzım kulaklarıma vardı**.\n\n**Puanlama:** Deyimin anlamına (çok sevinmek) uygun kullanılması yarı puan, konuya uygun iki cümle yarı puan.",
    },
  ]),

  // T.Y.6.21: yazım kuralları ve noktalama
  ...grup({ tema: T, konu: "t6-u1-yazim", kavram: "u1-de-da", kod: "T.Y.6.21", yazili1: true }, [
    {
      id: "t6-1-yz-01", tip: "mcq", zorluk: 1,
      soru: "Aşağıdaki cümlelerin hangisinde \"de/da\" bağlacının yazımı **yanlıştır**?",
      secenekler: ["Ben de sizinle gelmek istiyorum.", "Kardeşimde bu kitabı okudu.", "Okulda yeni bir kulüp açıldı.", "Annem de babam da çok sevindi."],
      dogru: 1,
      aciklama: "\"Kardeşim de bu kitabı okudu.\" olmalıdır. Buradaki \"de\" bağlaçtır (\"o da\" anlamı katar) ve ayrı yazılır. Cümleden çıkarıldığında cümle bozulmaz: \"Kardeşim bu kitabı okudu.\" \"Okulda\" kelimesindeki \"-da\" ise bulunma hâli ekidir ve bitişik yazılır.",
    },
    {
      id: "t6-1-yz-02", tip: "mcq", zorluk: 2,
      soru: "\"**Bahçe de** oynayan çocuklar yağmur başlayınca eve koştu.\"\n\nCümlede kalın yazılan sözün doğru yazılışı aşağıdakilerden hangisidir?",
      secenekler: ["Bahçede", "Bahçe da", "Bahçe'de", "Bahçe te"],
      dogru: 0,
      aciklama: "Doğrusu \"bahçede\"dir. Buradaki \"-de\" bir yeri bildiren bulunma hâli ekidir (\"nerede oynayan?\" → bahçede) ve kelimeye bitişik yazılır. Kesme işareti yalnızca özel isimlere gelen eklerde kullanılır.",
    },
    {
      id: "t6-1-yz-03", tip: "tf", zorluk: 1,
      soru: "\"Sınıfta kimse yoktu.\" cümlesindeki \"-ta\" eki ayrı yazılmalıdır.",
      dogru: false,
      aciklama: "\"Sınıfta\" kelimesindeki \"-ta\" bulunma hâli ekidir ve bitişik yazılır. Ek, sert ünsüzle (f) biten kelimeye gelince \"-ta\" olur; bağlaç olan \"da\" hiçbir zaman \"ta\" olmaz.",
    },
    {
      id: "t6-1-yz-04", tip: "yaz", zorluk: 2,
      soru: "Bağlaç olan \"de\" ile ek olan \"-de\"yi ayırt etmek için kullanılabilecek bir yöntemi yazınız ve bu yöntemi \"Evde kimse yoktu, ben de dışarı çıktım.\" cümlesinde gösteriniz.",
      aciklama: "**Örnek cevap:** \"de\" cümleden çıkarılınca cümlenin anlamı bozulmuyorsa (yalnızca \"o da, dahi\" anlamı kayboluyorsa) bağlaçtır ve ayrı yazılır; çıkarılınca kelime bozuluyorsa ektir ve bitişik yazılır.\n\n*Cümlede:* \"Evde\" → \"Ev kimse yoktu\" olur, cümle bozulur; \"-de\" ektir. \"ben de\" → \"ben dışarı çıktım\" olur, cümle bozulmaz; \"de\" bağlaçtır.\n\n**Puanlama:** Yöntem yarı puan, iki kelimede doğru uygulama yarı puan.",
    },
  ]),

  ...grup({ tema: T, konu: "t6-u1-yazim", kavram: "u1-ki", kod: "T.Y.6.21", yazili1: true }, [
    {
      id: "t6-1-yz-05", tip: "mcq", zorluk: 2,
      soru: "Aşağıdaki cümlelerin hangisinde \"ki\"nin yazımı **yanlıştır**?",
      secenekler: ["Duydum ki yarın tatilmiş.", "Masadaki kitabı bana verir misin?", "Öyle yoruldum ki hemen uyudum.", "Yarın ki maçı kaçırmayacağım."],
      dogru: 3,
      aciklama: "\"Yarınki\" bitişik yazılmalıdır. \"Yarınki maç\" sözünde \"-ki\" ilgi ekidir: kelimeyi sıfat yapar ve bitişik yazılır. Bağlaç olan \"ki\" (duydum ki, öyle yoruldum ki) ayrı yazılır.",
    },
    {
      id: "t6-1-yz-06", tip: "mcq", zorluk: 2,
      soru: "Aşağıdaki kelimelerin hangisi \"ki\" bağlacı olmasına rağmen kalıplaştığı için **bitişik** yazılır?",
      secenekler: ["Bahçedeki", "Belki", "Akşamki", "Seninki"],
      dogru: 1,
      aciklama: "\"Belki\" kalıplaşmış bir kelimedir ve bitişik yazılır; çünkü, sanki, oysaki, mademki ve hâlbuki de böyledir. Diğer üç kelimedeki \"-ki\" ektir ve zaten bitişik yazılır.",
    },
    {
      id: "t6-1-yz-07", tip: "yaz", zorluk: 2,
      soru: "Aşağıdaki cümlede yazımı yanlış olan sözü bulunuz ve cümleyi doğru biçimiyle yeniden yazınız.\n\n\"Duvar daki resmi geçen yıl ben yapmıştım.\"",
      aciklama: "**Örnek cevap:** \"Duvardaki resmi geçen yıl ben yapmıştım.\"\n\n\"Duvarda\" kelimesine gelen \"-ki\" ilgi ekidir; kelime bulunma hâli ekiyle birlikte bitişik yazılır: duvar-da-ki.\n\n**Puanlama:** Yanlış sözü bulmak yarı puan, doğru yazmak yarı puan.",
    },
  ]),

  ...grup({ tema: T, konu: "t6-u1-yazim", kavram: "u1-mi", kod: "T.Y.6.21", yazili1: true }, [
    {
      id: "t6-1-yz-08", tip: "mcq", zorluk: 1,
      soru: "Aşağıdaki cümlelerin hangisinde soru ekinin yazımı **doğrudur**?",
      secenekler: ["Yarın okula gelecekmisin?", "Bu kitabı okudun mu?", "Ödevini bitirdinmi?", "Sen de geliyormusun?"],
      dogru: 1,
      aciklama: "Soru eki \"mı, mi, mu, mü\" kendinden önceki kelimeden ayrı yazılır: okudun mu. Doğrusu \"gelecek misin, bitirdin mi, geliyor musun\" biçimindedir.",
    },
    {
      id: "t6-1-yz-09", tip: "mcq", zorluk: 1,
      soru: "\"Annen seni **bekliyormu**?\"\n\nCümlede kalın yazılan sözün doğru yazılışı aşağıdakilerden hangisidir?",
      secenekler: ["bekliyor mu", "bekliyor-mu", "bekliyormı", "bekliyor mı"],
      dogru: 0,
      aciklama: "Soru eki ayrı yazılır ve ünlü uyumuna uyar: \"bekliyor\" kelimesinin son ünlüsü \"o\" olduğu için ek \"mu\" olur. Soru ekinden sonra gelen ekler ise ona bitişik yazılır: bekliyor musun, bekliyor muydu.",
    },
    {
      id: "t6-1-yz-10", tip: "tf", zorluk: 1,
      soru: "\"Gelecek misiniz?\" sözünde \"-siniz\" eki soru ekine bitişik yazılmıştır ve bu yazım doğrudur.",
      dogru: true,
      aciklama: "Soru eki kendinden önceki kelimeden ayrı yazılır, ama kendinden sonra gelen ekler soru ekine bitişir: mi + siniz → misiniz.",
    },
  ]),

  ...grup({ tema: T, konu: "t6-u1-yazim", kavram: "u1-virgul", kod: "T.Y.6.21", yazili1: true }, [
    {
      id: "t6-1-yz-11", tip: "mcq", zorluk: 1,
      soru: "\"Pazardan elma ( ) armut ( ) muz ve portakal aldık.\"\n\nBu cümlede ayraçlarla gösterilen yerlere hangi noktalama işareti konmalıdır?",
      secenekler: ["Nokta", "Virgül", "İki nokta", "Ünlem"],
      dogru: 1,
      aciklama: "Eş görevli kelimeler (sıralanan meyveler) arasına **virgül** konur. Son iki kelime arasında \"ve\" bağlacı olduğu için virgül kullanılmaz.",
    },
    {
      id: "t6-1-yz-12", tip: "mcq", zorluk: 2,
      soru: "Aşağıdaki cümlelerin hangisinde virgül, **hitap** sözünden sonra kullanılmıştır?",
      secenekler: ["Evet, bu akşam size geleceğiz.", "Sevgili arkadaşlarım, sizi çok özledim.", "Kitabı aldım, okudum, geri verdim.", "Ankara, İzmir ve Bursa'yı gezdik."],
      dogru: 1,
      aciklama: "\"Sevgili arkadaşlarım\" bir seslenme (hitap) sözüdür ve kendisinden sonra virgül konur. Diğer cümlelerde virgül; cevap bildiren \"evet\"ten sonra, sıralı cümleler arasında ve eş görevli kelimeler arasında kullanılmıştır.",
    },
    {
      id: "t6-1-yz-13", tip: "yaz", zorluk: 2,
      soru: "Aşağıdaki cümleyi gerekli yerlere virgül koyarak yeniden yazınız.\n\n\"Hayır bugün parka gitmeyeceğiz çünkü hava çok soğuk.\"",
      aciklama: "**Örnek cevap:** \"Hayır, bugün parka gitmeyeceğiz çünkü hava çok soğuk.\"\n\nCevap bildiren \"hayır\" kelimesinden sonra virgül konur. \"Çünkü\" bağlacından önce virgül gerekmez.\n\n**Puanlama:** \"Hayır\"dan sonra virgül tam puan.",
    },
    {
      id: "t6-1-yz-14", tip: "mcq", zorluk: 2,
      soru: "Aşağıdaki cümlelerin hangisinde virgül, **sıralı cümleleri** ayırmak için kullanılmıştır?",
      secenekler: ["Ali, Ayşe ve Can sınıfa girdi.", "Eve geldim, ellerimi yıkadım, yemeğe oturdum.", "Hayır, ben görmedim.", "Sevgili öğretmenim, size teşekkür ederim."],
      dogru: 1,
      aciklama: "\"Eve geldim\", \"ellerimi yıkadım\" ve \"yemeğe oturdum\" ayrı yüklemleri olan sıralı cümlelerdir; aralarına virgül konmuştur. Diğer cümlelerde virgül eş görevli kelimeler arasında, cevap bildiren sözden sonra ve hitaptan sonra kullanılmıştır.",
    },
  ]),
];
