// 1. tema (Dilimizin Zenginliği), okuma: T.O.6.5 kelimenin anlamını tahmin etme,
// T.O.6.6 yüzey anlam, T.O.6.16 anahtar kelime. Metinler bu site için yazılmıştır.
import { grup, metinli, type Soru } from "./yardimci.ts";

const T = 1;

const SOZLUK = `Ece, kitapta "mütevazı" kelimesini görünce durdu. Anlamını bilmiyordu ama hemen sözlüğe bakmak yerine cümleyi yeniden okudu: "Ödülü kazanan genç ressam, mütevazı tavırlarıyla herkesin sevgisini kazandı; başarısıyla hiç övünmedi." Ece, ressamın övünmediğini görünce kelimenin "alçak gönüllü" anlamına geldiğini tahmin etti. Sonra sözlüğü açtı ve tahmininin doğru olduğunu gördü.`;

const PAZAR = `Köyün pazarı her cumartesi kurulurdu. Sabahın erken saatlerinde tezgâhlar sıra sıra dizilir, satıcılar mallarını özenle yerleştirirdi. Pazarın en kalabalık yeri Hatice Teyze'nin tezgâhıydı. Onun ev yapımı reçelleri çok rağbet görür, öğlene kalmadan tükenirdi. Geç kalanlar boş kavanozlara bakıp iç çekerdi.`;

const DEDE = `Dedem, çocukluğunda köylerinde okul olmadığını anlatır. Okumayı, her akşam köy kahvesinde gazete okuyan muhtardan öğrenmiş. Harfleri önce yere çubukla çizer, sonra yüksek sesle söylermiş. On iki yaşına geldiğinde köyde gazeteyi okuyabilen ikinci kişi o olmuş. Bugün hâlâ her sabah kahvaltıdan önce gazetesini okur ve bilmediği kelimeleri küçük bir deftere yazar.`;

const BILMECE = `Bilmeceler, Anadolu'da uzun kış gecelerinin vazgeçilmez eğlencesiydi. Aile büyükleri soruyu sorar, çocuklar cevabı bulmak için yarışırdı. "Bir küçük fıçı, içinde iki türlü turşu" diye sorulan bilmecenin cevabı yumurtadır. Bilmeceler, çocukların hem düşünme becerisini geliştirir hem de dilimizin benzetmelerle dolu zenginliğini tanıtırdı. Ne yazık ki bugün bu gelenek eskisi kadar yaşatılmıyor.`;

const KUTUPHANE = `Okulumuzun kütüphanesi geçen yıl yenilendi. Raflara yüzlerce yeni kitap eklendi, köşeye de minderli bir okuma alanı yapıldı. Kütüphanemiz artık her gün öğle arasında ve ders bitiminden sonra bir saat açık. Kitap almak isteyen öğrenciler, öğrenci kartlarıyla en fazla iki kitabı iki haftalığına ödünç alabiliyor. Kitabını zamanında getirmeyen öğrenci, bir hafta boyunca yeni kitap alamıyor.`;

const SAATCI = `Mahallemizin saatçisi Yusuf Usta, dükkânını kırk yıldır aynı yerde açar. Küçük dükkânın duvarları, her biri farklı sesle tıkırdayan saatlerle doludur. Yusuf Usta bozulan bir saati eline aldığında önce kulağına götürür, sonra büyüteciyle içini inceler. Ustaya göre saat tamir etmek sabır işidir: "Acele eden, küçük bir vidayı kaybeder; vidayı kaybeden, saati kaybeder" der.`;

const KELIMELER = `Dilimize her yıl yeni kelimeler giriyor. Bunların bir kısmı teknolojiyle birlikte başka dillerden geliyor. Türk Dil Kurumu, yabancı kelimelere Türkçe karşılıklar öneriyor: "e-posta", "bilgisayar" ve "sürücü" bu önerilerden bazıları. Bir karşılığın yaygınlaşması için onu herkesin kullanması gerekir. Türkçe karşılıkları konuşurken ve yazarken tercih ettiğimizde dilimizin zenginliğini korumuş oluruz.`;

export const okuma: Soru[] = [
  // T.O.6.5: kelimenin anlamını bağlamdan tahmin etme
  ...grup({ tema: T, konu: "t6-u1-kelime-anlami", kavram: "u1-anlam-tahmin", kod: "T.O.6.5", yazili1: true }, [
    {
      id: "t6-1-ka-01", tip: "mcq", zorluk: 1,
      soru: metinli(SOZLUK, "Ece, \"mütevazı\" kelimesinin anlamını tahmin ederken metindeki hangi bilgiden yararlanmıştır?"),
      secenekler: ["Ressamın ödül kazanmasından", "Ressamın başarısıyla övünmemesinden", "Ressamın genç olmasından", "Herkesin resimleri beğenmesinden"],
      dogru: 1,
      aciklama: "Cümlede ressamın \"başarısıyla hiç övünmediği\" söyleniyor. Övünmeyen kişi alçak gönüllüdür; Ece kelimenin anlamını bu ipucundan çıkarmıştır.",
    },
    {
      id: "t6-1-ka-02", tip: "mcq", zorluk: 1,
      soru: metinli(PAZAR, "Metindeki \"rağbet görmek\" sözünün anlamı aşağıdakilerden hangisidir?"),
      secenekler: ["Pahalı satılmak", "Çok beğenilip aranmak", "Özenle hazırlanmak", "Az miktarda üretilmek"],
      dogru: 1,
      aciklama: "Reçellerin \"öğlene kalmadan tükendiği\" ve geç kalanların üzüldüğü söyleniyor. Bu da reçellerin çok beğenilip arandığını gösterir.",
    },
    {
      id: "t6-1-ka-03", tip: "yaz", zorluk: 2,
      soru: metinli(PAZAR, "Metinde geçen \"iç çekmek\" sözünün anlamını tahmin ediniz. Tahmininizi metindeki hangi ipucuna dayandırdığınızı da yazınız."),
      aciklama: "**Örnek cevap:** \"İç çekmek\", üzülerek ya da bir şeyi özleyerek derin nefes almak demektir. Geç kalanlar reçellerin bittiğini, kavanozların boş olduğunu görünce üzülmüştür; bu durum sözün üzüntü bildirdiğini gösterir.\n\n**Puanlama:** Anlamı doğru tahmin etmek yarı puan, ipucunu (kavanozların boş olması, reçelin bitmesi) göstermek yarı puan.",
    },
    {
      id: "t6-1-ka-04", tip: "mcq", zorluk: 1,
      soru: metinli(SAATCI, "Metinde Yusuf Usta'nın saatleri incelerken kullandığı \"büyüteç\" nasıl bir araçtır?"),
      secenekler: ["Saatin zamanını ayarlayan bir alet", "Küçük şeyleri büyük gösteren bir mercek", "Vidaları sıkıştıran bir tornavida", "Saatin sesini yükselten bir cihaz"],
      dogru: 1,
      aciklama: "Usta saatin \"içini inceler\" ve küçük vidalarla uğraşır. Kelime de \"büyü-\" kökünden gelir. Büyüteç, küçük şeyleri büyük gösteren mercektir.",
    },
    {
      id: "t6-1-ka-05", tip: "fill", zorluk: 2,
      soru: metinli(KUTUPHANE, "Metinde geçen \"ödünç almak\" sözünün anlamına göre boşluğu doldurunuz: Ödünç alınan kitap, süresi dolunca kütüphaneye geri ______."),
      bosluklar: [["verilir", "getirilir", "götürülür", "teslim edilir", "iade edilir"]],
      aciklama: "Ödünç almak, bir şeyi geri vermek üzere almaktır. Metinde de kitabın \"zamanında getirilmesi\" gerektiği söyleniyor; yani kitap geri **verilir** (getirilir).",
    },
    {
      id: "t6-1-ka-06", tip: "mcq", zorluk: 2,
      soru: "\"Kardeşim hastalandığı için bu hafta derslerden **geri kaldı**; öğretmeni ona eksik konuları tekrar anlattı.\"\n\nCümlede kalın yazılan sözün anlamı aşağıdakilerden hangisidir?",
      secenekler: ["Sınıfın en arkasında oturdu", "Okula her gün geç geldi", "Arkadaşlarının gerisinde kaldı", "Dersleri tekrar etmeyi unuttu"],
      dogru: 2,
      aciklama: "Öğretmenin \"eksik konuları\" yeniden anlatması, kardeşin hastalık yüzünden konularda arkadaşlarının gerisinde kaldığını gösterir.",
    },
    {
      id: "t6-1-ka-07", tip: "mcq", zorluk: 2,
      soru: "\"Dağcılar zirveye ulaşmak için **meşakkatli** bir yolculuk yaptılar: soğukla, fırtınayla ve yorgunlukla günlerce mücadele ettiler.\"\n\nKalın yazılan kelimenin anlamı aşağıdakilerden hangisidir?",
      secenekler: ["Kısa ve kolay", "Zahmetli ve yorucu", "Neşeli ve eğlenceli", "Uzun ve sıkıcı"],
      dogru: 1,
      aciklama: "İki noktadan sonra yolculuğun nasıl geçtiği açıklanıyor: soğuk, fırtına ve yorgunlukla mücadele. Bu açıklama \"meşakkatli\" kelimesinin \"zahmetli, sıkıntılı\" demek olduğunu gösterir.",
    },
    {
      id: "t6-1-ka-08", tip: "yaz", zorluk: 2,
      soru: "\"Ali, arkadaşının kırılan kalemini görünce hiç tereddüt etmeden kendi kalemini ona verdi.\"\n\nCümlede geçen \"tereddüt etmek\" sözünün anlamını tahmin ediniz ve bu sözü kendi kuracağınız bir cümlede kullanınız.",
      aciklama: "**Örnek cevap:** \"Tereddüt etmek\", bir karar verirken kararsız kalmak, duraksamak demektir. Ali'nin kalemini \"hiç düşünmeden\" verdiği anlaşılıyor.\n\n*Örnek cümle:* Soruyu çözerken iki şık arasında tereddüt ettim.\n\n**Puanlama:** Anlam yarı puan, sözün anlamına uygun kullanıldığı cümle yarı puan.",
    },
    {
      id: "t6-1-ka-09", tip: "mcq", zorluk: 1,
      soru: metinli(BILMECE, "Metinde geçen \"vazgeçilmez\" kelimesinin anlamı aşağıdakilerden hangisidir?"),
      secenekler: ["Çok gerekli, onsuz olmayan", "Herkesin bildiği", "Eskiden kalma", "Kolayca unutulan"],
      dogru: 0,
      aciklama: "Bilmecelerin kış gecelerinin \"vazgeçilmez eğlencesi\" olması, o gecelerin bilmecesiz düşünülemediğini anlatır.",
    },
  ]),

  // T.O.6.6: yüzey anlam (metinde açıkça verilen bilgi)
  ...grup({ tema: T, konu: "t6-u1-yuzey", kavram: "u1-yuzey-anlam", kod: "T.O.6.6", yazili1: true }, [
    {
      id: "t6-1-yu-01", tip: "mcq", zorluk: 1,
      soru: metinli(DEDE, "Metne göre dede okumayı kimden öğrenmiştir?"),
      secenekler: ["Köyün öğretmeninden", "Köyün muhtarından", "Kendi babasından", "Köy kahvesinin sahibinden"],
      dogru: 1,
      aciklama: "Metinde dedenin okumayı \"her akşam köy kahvesinde gazete okuyan muhtardan\" öğrendiği açıkça yazıyor. Köyde okul olmadığı için öğretmen yoktu.",
    },
    {
      id: "t6-1-yu-02", tip: "tf", zorluk: 1,
      soru: metinli(DEDE, "Metne göre dede, bilmediği kelimeleri bir deftere yazmaktadır."),
      dogru: true,
      aciklama: "Son cümlede dedenin \"bilmediği kelimeleri küçük bir deftere yazdığı\" belirtiliyor.",
    },
    {
      id: "t6-1-yu-03", tip: "yaz", zorluk: 1,
      soru: metinli(DEDE, "Dede, harfleri öğrenirken hangi iki yolu kullanmıştır? Metne göre yazınız."),
      aciklama: "**Örnek cevap:** Dede harfleri önce yere çubukla çizmiş, sonra yüksek sesle söylemiştir.\n\n**Puanlama:** Her yol yarı puan.",
    },
    {
      id: "t6-1-yu-04", tip: "mcq", zorluk: 1,
      soru: metinli(KUTUPHANE, "Metne göre bir öğrenci kütüphaneden aynı anda en fazla kaç kitap ödünç alabilir?"),
      secenekler: ["Bir", "İki", "Üç", "Dört"],
      dogru: 1,
      aciklama: "Metinde öğrencilerin \"en fazla iki kitabı iki haftalığına\" ödünç alabildiği yazıyor.",
    },
    {
      id: "t6-1-yu-05", tip: "fill", zorluk: 1,
      soru: metinli(KUTUPHANE, "Metne göre boşluğu doldurunuz: Kitabını zamanında getirmeyen öğrenci, bir ______ boyunca yeni kitap alamaz."),
      bosluklar: [["hafta"]],
      aciklama: "Son cümle: \"Kitabını zamanında getirmeyen öğrenci, bir **hafta** boyunca yeni kitap alamıyor.\"",
    },
    {
      id: "t6-1-yu-06", tip: "mcq", zorluk: 2,
      soru: metinli(KUTUPHANE, "Aşağıdakilerden hangisi kütüphanenin yenilenmesiyle yapılanlardan biri **değildir**?"),
      secenekler: ["Raflara yeni kitaplar eklenmesi", "Minderli bir okuma alanı yapılması", "Bilgisayar köşesi kurulması", "Açık olduğu saatlerin belirlenmesi"],
      dogru: 2,
      aciklama: "Metinde yeni kitaplardan, minderli okuma alanından ve açık olduğu saatlerden söz ediliyor. Bilgisayar köşesinden hiç bahsedilmiyor.",
    },
    {
      id: "t6-1-yu-07", tip: "yaz", zorluk: 2,
      soru: metinli(SAATCI, "Yusuf Usta bozulan bir saati tamir etmeye nasıl başlar? Metindeki bilgilere göre sırasıyla yazınız."),
      aciklama: "**Örnek cevap:** Yusuf Usta önce saati kulağına götürür, sonra büyüteçle içini inceler.\n\n**Puanlama:** İki adımı doğru sırayla yazmak tam puan; sıra yanlışsa ya da adımlardan biri eksikse yarı puan.",
    },
    {
      id: "t6-1-yu-08", tip: "mcq", zorluk: 1,
      soru: metinli(SAATCI, "Metne göre Yusuf Usta'nın dükkânı ile ilgili aşağıdakilerden hangisi doğrudur?"),
      secenekler: ["Yeni açılmıştır", "Mahallenin en büyük dükkânıdır", "Kırk yıldır aynı yerdedir", "Yalnızca duvar saati satar"],
      dogru: 2,
      aciklama: "İlk cümlede ustanın dükkânını \"kırk yıldır aynı yerde\" açtığı söyleniyor. Dükkân küçüktür; yalnızca duvar saati sattığı da yazmıyor.",
    },
    {
      id: "t6-1-yu-09", tip: "tf", zorluk: 1,
      soru: metinli(BILMECE, "Metne göre \"Bir küçük fıçı, içinde iki türlü turşu\" bilmecesinin cevabı yumurtadır."),
      dogru: true,
      aciklama: "Metinde bu bilmecenin cevabının yumurta olduğu açıkça yazıyor: fıçı kabuğa, iki türlü turşu sarısı ve beyazına benzetilmiştir.",
    },
    {
      id: "t6-1-yu-10", tip: "yaz", zorluk: 2,
      soru: metinli(BILMECE, "Metne göre bilmecelerin çocuklara iki faydası nedir? Yazınız."),
      aciklama: "**Örnek cevap:** Bilmeceler çocukların düşünme becerisini geliştirir ve onlara dilimizin benzetmelerle dolu zenginliğini tanıtır.\n\n**Puanlama:** Her fayda yarı puan.",
    },
    {
      id: "t6-1-yu-11", tip: "mcq", zorluk: 2,
      soru: metinli(KELIMELER, "Metne göre bir Türkçe karşılığın yaygınlaşması için ne gerekir?"),
      secenekler: ["Türk Dil Kurumunun onu sözlüğe eklemesi", "Herkesin onu kullanması", "Kelimenin kısa olması", "Kelimenin teknolojiyle ilgili olması"],
      dogru: 1,
      aciklama: "Metinde \"Bir karşılığın yaygınlaşması için onu herkesin kullanması gerekir\" cümlesi bu bilgiyi açıkça veriyor.",
    },
  ]),

  // T.O.6.16: anahtar kelimeler
  ...grup({ tema: T, konu: "t6-u1-anahtar", kavram: "u1-anahtar-kelime", kod: "T.O.6.16", yazili1: true }, [
    {
      id: "t6-1-an-01", tip: "mcq", zorluk: 1,
      soru: metinli(BILMECE, "Bu metnin anahtar kelimesi aşağıdakilerden hangisidir?"),
      secenekler: ["Kış", "Yumurta", "Bilmece", "Aile"],
      dogru: 2,
      aciklama: "Metnin her cümlesi bilmecelerden söz ediyor: nasıl sorulduklarından, bir örneğinden, faydalarından. Kış, yumurta ve aile yalnızca bir yerde geçen yardımcı kelimelerdir.",
    },
    {
      id: "t6-1-an-02", tip: "mcq", zorluk: 1,
      soru: metinli(KELIMELER, "Bu metnin anahtar kelimeleri aşağıdakilerin hangisinde birlikte verilmiştir?"),
      secenekler: ["Teknoloji, bilgisayar", "Türkçe karşılık, yabancı kelime", "Konuşmak, yazmak", "Sürücü, e-posta"],
      dogru: 1,
      aciklama: "Metin, yabancı kelimelere bulunan Türkçe karşılıkları ve onları kullanmanın önemini anlatıyor. Diğer kelimeler bu konuyu destekleyen örneklerdir.",
    },
    {
      id: "t6-1-an-03", tip: "yaz", zorluk: 2,
      soru: metinli(SAATCI, "Bu metnin iki anahtar kelimesini yazınız. Bu kelimeleri neden seçtiğinizi bir cümleyle açıklayınız."),
      aciklama: "**Örnek cevap:** *Saatçi (saat) ve sabır.* Metin bir saatçinin işini anlatıyor ve ustanın sözüyle saat tamirinin sabır istediğini vurguluyor.\n\n**Puanlama:** Konuya uygun iki anahtar kelime yarı puan (saat, saatçi, tamir, sabır kabul edilir), gerekçe yarı puan.",
    },
    {
      id: "t6-1-an-04", tip: "mcq", zorluk: 2,
      soru: "Anahtar kelimeler bir metinle ilgili bize öncelikle neyi gösterir?",
      secenekler: ["Metnin kaç paragraftan oluştuğunu", "Metnin konusunu ve ana fikrini", "Metindeki yazım yanlışlarını", "Metnin kimin için yazıldığını"],
      dogru: 1,
      aciklama: "Anahtar kelimeler metinde öne çıkan, sık geçen ya da vurgulanan kelimelerdir; metnin konusunu ve ana fikrini bulmamıza yardım ederler.",
    },
    {
      id: "t6-1-an-05", tip: "mcq", zorluk: 2,
      soru: "\"Arılar çiçekten çiçeğe uçarak polen taşır. Bu taşıma sayesinde bitkiler meyve verir. Arılar olmasaydı sofralarımızdaki pek çok meyve ve sebze olmazdı. Bu yüzden arıları korumak hepimizin görevidir.\"\n\nBu metnin anahtar kelimesi aşağıdakilerden hangisidir?",
      secenekler: ["Sofra", "Sebze", "Arı", "Çiçek"],
      dogru: 2,
      aciklama: "Metnin bütün cümleleri arılar ve onların doğadaki görevi üzerine kuruludur; \"arı\" kelimesi de metinde en çok tekrarlanan kelimedir.",
    },
    {
      id: "t6-1-an-06", tip: "yaz", zorluk: 2,
      soru: metinli(DEDE, "Bu metnin anahtar kelimelerinden birini yazınız. Bu kelimeden yola çıkarak metne bir başlık veriniz."),
      aciklama: "**Örnek cevap:** Anahtar kelime: *okumak (okuma)*. Başlık: *Dedemin Okuma Sevgisi*.\n\n**Puanlama:** Uygun anahtar kelime (okumak, gazete, dede) yarı puan; anahtar kelimeyle ilgili ve metnin konusunu yansıtan başlık yarı puan.",
    },
    {
      id: "t6-1-an-07", tip: "mcq", zorluk: 1,
      soru: metinli(PAZAR, "Bu metnin anahtar kelimesi aşağıdakilerden hangisidir?"),
      secenekler: ["Pazar", "Kavanoz", "Cumartesi", "Sabah"],
      dogru: 0,
      aciklama: "Metin köy pazarını anlatıyor: kuruluşunu, tezgâhları ve en kalabalık tezgâhı. Diğer kelimeler yalnızca bir kez geçen ayrıntılardır.",
    },
  ]),
];
