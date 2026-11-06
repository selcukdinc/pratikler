// 1. ünite: Kesim 1.1 Önermeli Mantık
// Çıkmış sorular 2021 ara sınavından (UZEM ekran görüntüleri). Görüntülerde
// cevap anahtarı yok; cevaplar çözülerek belirlendi.

import { cikmis, kitap, turet, type Soru } from "./tipler.ts";

const U = 1;
const K = "u1";
const B = "1.1";

const OKUL = [
  "Ben okula gittiğimde, zor bir konu işlenmez",
  "Ne zaman kolay bir konu işlenirse, ben okula giderim",
  "Ben okula gittiğimde, zor bir konu işlenir",
  "Ne zaman zor bir konu işlenirse, ben okula gitmem",
];
const OKUL_P = "p: \"okula giderim\", q: \"zor bir konu işlenir\" olsun. Cümle ¬p → q biçimindedir.";

const HIZ = 'p ve q aşağıdaki önermeler olsun. p: "Saatte 90 km\'nin üzerinde hız yaptınız" q: "Kırmızı ışıkta geçtiniz"';
const HIZ_SIK = [
  "Hem saatte 90 km'nin üzerinde hız yaptınız hem de kırmızı ışıkta geçtiniz.",
  "Hızınız saatte 90 km'nin üzerinde değil ama kırmızı ışıkta geçtiniz.",
  "Saatte 90 km'nin üzerinde hız yaptınız ama kırmızı ışıkta geçmediniz.",
  "Ne saatte 90 km'nin üzerinde hız yaptınız ne de kırmızı ışıkta geçtiniz.",
];
const PIYANGO = 'p ve q aşağıdaki önermeler olsun. p: "Bu hafta piyango bileti aldım" q: "Bu hafta piyangodan tam ikramiye kazandım"';
const PIYANGO_SIK = [
  "Bu hafta ne piyango bileti aldım ne de tam ikramiye kazandım.",
  "Bu hafta piyango bileti aldım, ama ikramiye kazanamadım.",
  "Bu hafta piyango bileti aldım ve tam ikramiye kazandım.",
  "Bu hafta piyango bileti almamama rağmen tam ikramiye kazandım.",
];
const tablo1 = (onerme: string) => `${onerme} önermesi için oluşturulan doğruluk tablosunda sonuç sütununda kaç tane 1 vardır?`;
const tablo0 = (onerme: string) => `${onerme} önermesi için oluşturulan doğruluk tablosunda sonuç sütununda kaç tane 0 vardır?`;
const satir = (onerme: string) => `${onerme} önermesi için oluşturulan doğruluk tablosunda kaç satır vardır?`;

export const unite1: Soru[] = [
  ...cikmis(U, K, [
    {
      id: "u1-c1", no: 1, tip: "mcq", kavram: "u1-karsit", zorluk: 2,
      soru: "\"Ne zaman okula gitmezsem, zor bir konu işlenir\" cümlesinin karşıtı aşağıdakilerden hangisidir?",
      secenekler: OKUL, dogru: 3,
      aciklama: `${OKUL_P} Karşıtta hipotez ile sonuç yer değiştirir: q → ¬p, yani zor bir konu işlenirse okula gitmem.`,
    },
    {
      id: "u1-c2", no: 2, tip: "mcq", kavram: "u1-karsit", zorluk: 2,
      soru: "\"Ne zaman okula gitmezsem, zor bir konu işlenir\" cümlesinin tersi aşağıdakilerden hangisidir?",
      secenekler: OKUL, dogru: 0,
      aciklama: `${OKUL_P} Ters, hipotezin ve sonucun değilini alır: ¬(¬p) → ¬q, yani okula gidersem zor bir konu işlenmez.`,
    },
    {
      id: "u1-c3", no: 3, tip: "mcq", kavram: "u1-karsit", zorluk: 2,
      soru: "\"Ne zaman okula gitmezsem, zor bir konu işlenir\" cümlesinin zıt pozitifi aşağıdakilerden hangisidir?",
      secenekler: OKUL, dogru: 1,
      aciklama: `${OKUL_P} Zıt-pozitif ¬q → ¬(¬p), yani ¬q → p'dir: zor bir konu işlenmezse (kolay bir konu işlenirse) okula giderim. Zıt-pozitif asıl ifadeyle denktir.`,
    },
    {
      id: "u1-c4", no: 4, tip: "mcq", kavram: "u1-karsit",
      soru: "\"Eğer hava güzel olursa, yürüyüşe çıkarım\" cümlesinin karşıtı aşağıdakilerden hangisidir?",
      secenekler: ["Eğer hava güzel olursa, yürüyüşe çıkmam", "Yürüyüşe çıkarsam, hava yağmurludur.", "Yürüyüşe çıkarsam, hava güzeldir", "Yürüyüşe çıkmazsam, hava güzeldir"],
      dogru: 2,
      aciklama: "p → q'nun karşıtı q → p'dir: yürüyüşe çıkarsam hava güzeldir.",
    },
    {
      id: "u1-c5", no: 5, tip: "mcq", kavram: "u1-karsit",
      soru: "\"Eğer hava güzel olursa, yürüyüşe çıkarım\" cümlesinin tersi aşağıdakilerden hangisidir?",
      secenekler: ["Eğer hava yağmurluysa, yürüyüşe çıkmam", "Yürüyüşe çıkmazsam, hava yağmurludur.", "Yürüyüşe çıkmazsam, hava güzeldir", "Yürüyüşe çıkarsam, hava güzeldir"],
      dogru: 0,
      aciklama: "p → q'nun tersi ¬p → ¬q'dur. Soruda \"hava güzel değil\" yerine \"hava yağmurlu\" kullanılmış: hava yağmurluysa yürüyüşe çıkmam.",
    },
    {
      id: "u1-c6", no: 6, tip: "mcq", kavram: "u1-karsit",
      soru: "\"Eğer hava güzel olursa, yürüyüşe çıkarım\" cümlesinin zıt pozitifi aşağıdakilerden hangisidir?",
      secenekler: ["Yürüyüşe çıkmazsam, hava güzeldir", "Yürüyüşe çıkmazsam, hava yağmurludur.", "Eğer hava güzel olursa, yürüyüşe çıkmam", "Yürüyüşe çıkarsam, hava güzeldir"],
      dogru: 1,
      aciklama: "p → q'nun zıt-pozitifi ¬q → ¬p'dir: yürüyüşe çıkmazsam hava güzel değildir (yağmurludur).",
    },
    {
      id: "u1-c7", no: 7, tip: "mcq", kavram: "u1-tablo", zorluk: 2,
      soru: tablo1("p→(q∧r)"), secenekler: ["7", "5", "1", "3"], dogru: 1,
      aciklama: "Şartlı ifade yalnız p = 1 ve q∧r = 0 iken 0 olur. p = 1 olan 4 satırın 3'ünde q∧r = 0'dır; 8 satırın 3'ü 0, 5'i 1'dir.",
    },
    {
      id: "u1-c8", no: 8, tip: "mcq", kavram: "u1-tablo", zorluk: 2,
      soru: tablo0("p→(q∧r)"), secenekler: ["7", "1", "3", "5"], dogru: 2,
      aciklama: "p = 1 iken q∧r yalnız q = r = 1 satırında 1'dir; p = 1 olan diğer 3 satırda sonuç 0 olur.",
    },
    {
      id: "u1-c9", no: 9, tip: "mcq", kavram: "u1-tablo", zorluk: 2,
      soru: tablo1("(p∨¬q)→q"), secenekler: ["4", "1", "2", "3"], dogru: 2,
      aciklama: "q = 1 olan iki satırda sonuç 1'dir. q = 0 iken ¬q = 1 olduğu için p∨¬q = 1, sonuç 1 → 0 = 0 olur. Toplam 2 tane 1 vardır.",
    },
    {
      id: "u1-c10", no: 10, tip: "mcq", kavram: "u1-tablo", zorluk: 2,
      soru: tablo0("(p∨¬q)→q"), secenekler: ["1", "2", "0", "3"], dogru: 1,
      aciklama: "q = 0 olan iki satırda hipotez p∨¬q = 1 ve sonuç q = 0 olduğundan ifade 0'dır.",
    },
    {
      id: "u1-c11", no: 11, tip: "mcq", kavram: "u1-tablo",
      soru: satir("(p∨¬q)→q"), secenekler: ["2", "4", "8", "16"], dogru: 1,
      aciklama: "İfadede iki farklı önerme değişkeni (p, q) var. n değişkenli tabloda 2ⁿ satır olur: 2² = 4.",
    },
    {
      id: "u1-c12", no: 12, tip: "mcq", kavram: "u1-tablo",
      soru: satir("p→(q∨r)"), secenekler: ["4", "8", "16", "2"], dogru: 1,
      aciklama: "Üç değişken (p, q, r) olduğu için 2³ = 8 satır vardır.",
    },
    {
      id: "u1-c13", no: 13, tip: "mcq", kavram: "u1-tablo", zorluk: 2,
      soru: tablo1("p→(q∨r)"), secenekler: ["5", "1", "3", "7"], dogru: 3,
      aciklama: "İfade yalnız p = 1, q = 0, r = 0 satırında 0'dır; diğer 7 satır 1'dir.",
    },
    {
      id: "u1-c14", no: 14, tip: "mcq", kavram: "u1-tablo", zorluk: 2,
      soru: tablo1("(p→q)∨r"), secenekler: ["5", "3", "1", "7"], dogru: 3,
      aciklama: "Veya yalnız iki taraf da 0 iken 0'dır: r = 0 ve p→q = 0 (p = 1, q = 0). Bu tek satır dışında 7 satır 1'dir.",
    },
    {
      id: "u1-c15", no: 15, tip: "mcq", kavram: "u1-tablo", zorluk: 2,
      soru: tablo1("(p→q)∧r"), secenekler: ["7", "1", "3", "5"], dogru: 2,
      aciklama: "r = 1 olan 4 satırda sonuç p→q'ya eşittir; p→q bunların 3'ünde 1'dir (p = 1, q = 0 hariç).",
    },
    {
      id: "u1-c16", no: 16, tip: "mcq", kavram: "u1-baglac",
      soru: "Aşağıdakilerin hangisi \"Benim bir arabam var\" önermesinin değilidir?",
      secenekler: ["Benim arabam var mı?", "Benim iki arabam var.", "Benim arabam yok.", "Benim çok arabam var."],
      dogru: 2,
      aciklama: "Değil, önermenin doğruluk değerini tersine çevirir: \"Benim arabam yok\". Soru cümlesi önerme bile değildir.",
    },
    {
      id: "u1-c17", no: 17, tip: "mcq", kavram: "u1-baglac",
      soru: "Aşağıdakilerin hangisi \"11'in karesi 121'dir\" önermesinin değilidir?",
      secenekler: ["11'in karesi 121 değildir.", "11'in kare kökü 121 değildir.", "121'in kare kökü 11'dir.", "121'in karesi 11'dir."],
      dogru: 0,
      aciklama: "Değil, aynı iddianın yanlış olduğunu söyler: \"11'in karesi 121 değildir\". Başka bir iddia kurmak değil almak değildir.",
    },
    {
      id: "u1-c18", no: 18, tip: "mcq", kavram: "u1-baglac",
      soru: "Aşağıdakilerin hangisi \"Konya karasal iklime sahiptir\" önermesinin değilidir?",
      secenekler: ["Konya nemli iklime sahiptir.", "Konya deniz iklimine sahip değildir.", "Konya karasal iklime sahip değildir.", "Konya tropikal iklime sahip değildir."],
      dogru: 2,
      aciklama: "Değili \"Konya karasal iklime sahip değildir\" olur. Başka bir iklim söylemek değil almak değildir.",
    },
    {
      id: "u1-c19", no: 19, tip: "mcq", kavram: "u1-baglac",
      soru: `${HIZ} p∧¬q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?`,
      secenekler: [HIZ_SIK[3]!, HIZ_SIK[0]!, HIZ_SIK[2]!, "Hızınız normal ama kırmızı ışıkta geçtiniz."], dogru: 2,
      aciklama: "p doğru, q'nun değili doğru: hız yaptınız ama kırmızı ışıkta geçmediniz. Türkçede \"ama\" da ve bağlacıdır.",
    },
    {
      id: "u1-c20", no: 20, tip: "mcq", kavram: "u1-baglac",
      soru: `${HIZ} ¬p∧q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?`,
      secenekler: [HIZ_SIK[2]!, HIZ_SIK[3]!, HIZ_SIK[0]!, HIZ_SIK[1]!], dogru: 3,
      aciklama: "p'nin değili ve q: hızınız 90 km'nin üzerinde değil ama kırmızı ışıkta geçtiniz.",
    },
    {
      id: "u1-c21", no: 21, tip: "mcq", kavram: "u1-baglac",
      soru: `${HIZ} ¬p∧¬q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?`,
      secenekler: HIZ_SIK, dogru: 3,
      aciklama: "İki önermenin de değili: ne hız yaptınız ne de kırmızı ışıkta geçtiniz.",
    },
    {
      id: "u1-c22", no: 22, tip: "mcq", kavram: "u1-baglac",
      soru: `${HIZ} p∧q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?`,
      secenekler: [HIZ_SIK[2]!, HIZ_SIK[0]!, "Hızınız normal ama kırmızı ışıkta geçtiniz.", HIZ_SIK[3]!], dogru: 1,
      aciklama: "Ve bağlacı: hem hız yaptınız hem de kırmızı ışıkta geçtiniz.",
    },
    {
      id: "u1-c23", no: 23, tip: "mcq", kavram: "u1-baglac",
      soru: `${PIYANGO} p∧¬q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?`,
      secenekler: PIYANGO_SIK, dogru: 1,
      aciklama: "Bilet aldım (p) ama ikramiye kazanamadım (¬q).",
    },
    {
      id: "u1-c24", no: 24, tip: "mcq", kavram: "u1-baglac",
      soru: `${PIYANGO} ¬p∧¬q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?`,
      secenekler: PIYANGO_SIK, dogru: 0,
      aciklama: "İki önermenin de değili: ne bilet aldım ne de ikramiye kazandım.",
    },
    {
      id: "u1-c25", no: 25, tip: "mcq", kavram: "u1-baglac",
      soru: `${PIYANGO} p∧q önermesinin Türkçe ifadesi aşağıdakilerden hangisidir?`,
      secenekler: [PIYANGO_SIK[2]!, PIYANGO_SIK[1]!, PIYANGO_SIK[0]!, PIYANGO_SIK[3]!], dogru: 0,
      aciklama: "Bilet aldım ve tam ikramiye kazandım.",
    },
    {
      id: "u1-c26", no: 26, tip: "mcq", kavram: "u1-onerme", zorluk: 2,
      soru: "Aşağıdaki cümlelerin kaç tanesi önermedir? \"Konya Türkiye'nin en kalabalık ilidir.\"; \"Adın ne?\"; \"Bu soru doğru mu?\"; \"3+2>4\".",
      secenekler: ["3", "4", "2", "1"], dogru: 2,
      aciklama: "Önerme doğru ya da yanlış olan bildirme cümlesidir. \"Konya en kalabalık ildir\" (yanlış da olsa) ve \"3+2>4\" (doğru) önermedir; iki soru cümlesi önerme değildir.",
    },
    {
      id: "u1-c27", no: 27, tip: "mcq", kavram: "u1-onerme", zorluk: 2,
      soru: "Aşağıdaki cümlelerin kaç tanesi önermedir? \"Git buradan\"; \"Saat kaç?\"; \"4+x=7\"; \"5>9\".",
      secenekler: ["2", "4", "3", "1"], dogru: 3,
      aciklama: "Yalnız \"5>9\" önermedir (yanlış). Emir ve soru cümleleri önerme değildir; \"4+x=7\" x'e değer verilmedikçe doğru ya da yanlış değildir.",
    },
  ]),

  ...kitap(U, K, B, [
    {
      id: "u1-k1", no: "1", tip: "yaz", kavram: "u1-onerme",
      soru: "Aşağıdaki cümlelerin hangileri önermedir? Önerme olanların doğruluk değerleri nelerdir?\n\na) Sofya, Bulgaristan'ın başkentidir.\nb) Milano, İtalya'nın başkentidir.\nc) 2 + 3 = 5.\nd) 5 + 7 = 10.\ne) x + 2 = 11.\nf) Bu soruyu cevaplayınız.",
      aciklama: "a) Önerme, doğru.\nb) Önerme, yanlış (başkent Roma).\nc) Önerme, doğru.\nd) Önerme, yanlış.\ne) Önerme değil: doğruluğu x'in değerine bağlı.\nf) Önerme değil: emir cümlesi.",
    },
    {
      id: "u1-k3", no: "3", tip: "yaz", kavram: "u1-baglac",
      soru: "Şıklardaki ifadelerin her birinin değilini yazınız.\n\na) Maya'nın bir MP3 çaları vardır.\nb) İzmir'de hiç hava kirliliği yoktur.\nc) 2 + 1 = 3.\nd) Kars'ta yaz sıcak ve güneşlidir.",
      aciklama: "a) Maya'nın bir MP3 çaları yoktur.\nb) İzmir'de hava kirliliği vardır.\nc) 2 + 1 ≠ 3.\nd) Kars'ta yaz sıcak değildir ya da güneşli değildir. (\"sıcak ve güneşli\"nin değili \"sıcak değil veya güneşli değil\"dir.)",
    },
    {
      id: "u1-k7c", no: "7c", tip: "tf", kavram: "u1-baglac",
      soru: "Arkın Bilgisayar'ın senelik satışları 138, Nadir Yazılım'ın 87, Hızlı Yayıncılık'ın 111 milyon liradır; net karları sırasıyla 8, 5 ve 13 milyon liradır.\n\n\"Arkın Bilgisayar en fazla satış rakamını elde etmiştir veya Hızlı Yayıncılık en fazla satış rakamını elde etmiştir.\" önermesi doğrudur.",
      dogru: true,
      aciklama: "Doğru. En fazla satış Arkın'ın (138); veya bağlacında bir tarafın doğru olması yeter.",
    },
    {
      id: "u1-k7e", no: "7e", tip: "tf", kavram: "u1-sartli", zorluk: 2,
      soru: "Arkın Bilgisayar'ın senelik satışları 138, Nadir Yazılım'ın 87, Hızlı Yayıncılık'ın 111 milyon liradır; net karları sırasıyla 8, 5 ve 13 milyon liradır.\n\n\"Ancak ve ancak Arkın Bilgisayar'ın en fazla satış rakamını elde ettiği durumda Nadir Yazılım en düşük net karı elde etmiştir.\" önermesi doğrudur.",
      dogru: true,
      aciklama: "Doğru. İki taraf da doğru (Arkın en fazla satış, Nadir en düşük kar 5); çift şartlı ifade iki taraf aynı değerde iken doğrudur.",
    },
    {
      id: "u1-k9", no: "9", tip: "yaz", kavram: "u1-baglac", zorluk: 2,
      soru: "p ve q sırasıyla \"Mersin sahilinde yüzmeye izin verilmektedir.\" ve \"Sahil yakınlarında köpekbalıklarına rastlanmıştır.\" önermeleri olsun. Aşağıdaki önermeleri birer Türkçe cümle olarak yazınız.\n\na) ¬q\nb) p ∧ q\nc) ¬p ∨ q\nd) p → ¬q\ne) ¬q → p\nf) ¬p → ¬q\ng) p ↔ ¬q\nh) ¬p ∧ (p ∨ ¬q)",
      aciklama: "a) Sahil yakınlarında köpekbalıklarına rastlanmamıştır.\nb) Mersin sahilinde yüzmeye izin verilmektedir ve sahil yakınlarında köpekbalıklarına rastlanmıştır.\nc) Mersin sahilinde yüzmeye izin verilmemektedir veya köpekbalıklarına rastlanmıştır.\nd) Yüzmeye izin veriliyorsa köpekbalıklarına rastlanmamıştır.\ne) Köpekbalıklarına rastlanmadıysa yüzmeye izin verilmektedir.\nf) Yüzmeye izin verilmiyorsa köpekbalıklarına rastlanmamıştır.\ng) Yüzmeye ancak ve ancak köpekbalıklarına rastlanmadıysa izin verilmektedir.\nh) Yüzmeye izin verilmemektedir ve ya yüzmeye izin verilmektedir ya da köpekbalıklarına rastlanmamıştır.",
    },
    {
      id: "u1-k11", no: "11", tip: "fill", kavram: "u1-baglac", zorluk: 2, semboller: true,
      soru: "p: \"Şu anda sıcaklık donma derecesinin altındadır.\" q: \"Kar yağmaktadır.\" Aşağıdakileri p, q ve mantıksal bağlayıcılarla yazınız.\n\na) Şu anda sıcaklık donma derecesinin altındadır fakat kar yağmamaktadır.\nb) Şu anda sıcaklık donma derecesinin altında değildir ve kar yağmamaktadır.\nc) Eğer şu anda sıcaklık donma derecesinin altında ise aynı zamanda kar yağmaktadır.\n\nBoşluk 1: a), Boşluk 2: b), Boşluk 3: c)",
      bosluklar: [["p ∧ ¬q", "¬q ∧ p"], ["¬p ∧ ¬q", "¬q ∧ ¬p"], ["p → q"]],
      aciklama: "a) p ∧ ¬q (\"fakat\" ve demektir). b) ¬p ∧ ¬q. c) p → q.",
    },
    {
      id: "u1-k13", no: "13", tip: "fill", kavram: "u1-sartli", zorluk: 2, semboller: true,
      soru: "p: \"Saatte 100 km'nin üzerinde hız yaptınız.\" q: \"Aşırı hızdan ötürü trafik cezası aldınız.\" Aşağıdakileri p, q ve mantıksal bağlayıcılarla yazınız.\n\ne) Saatte 100 km'nin üzerinde hız yapmanız aşırı hızdan ötürü trafik cezası almanız için yeterlidir.\nf) Aşırı hızdan ötürü trafik cezası aldınız, fakat saatte 100 km'nin üzerinde hız yapmadınız.\ng) Aşırı hızdan ötürü trafik cezası aldığınız her zaman saatte 100 km'nin üzerinde hız yapmıştınız.\n\nBoşluk 1: e), Boşluk 2: f), Boşluk 3: g)",
      bosluklar: [["p → q"], ["q ∧ ¬p", "¬p ∧ q"], ["q → p"]],
      aciklama: "e) \"p, q için yeterlidir\" p → q demektir. f) q ∧ ¬p. g) \"q olduğu her zaman p\" q → p demektir.",
    },
    {
      id: "u1-k15e", no: "15e", tip: "fill", kavram: "u1-sartli", zorluk: 3, semboller: true,
      soru: "p: \"Bu bölgede boz ayılara rastlanmıştır.\" q: \"Patikada yürüyüş yapmak güvenlidir.\" r: \"Patika boyunca taze böğürtlenler bulunmaktadır.\"\n\n\"Patikada yürüyüş yapmanın güvenli olması için, patika boyunca taze böğürtlenler bulunması ve bu bölgede boz ayılara rastlanmamış olması gereklidir, fakat yeterli değildir.\" önermesini p, q, r ile yazınız.",
      bosluklar: [["(q → (¬p ∧ r)) ∧ ¬((¬p ∧ r) → q)", "(q → (r ∧ ¬p)) ∧ ¬((r ∧ ¬p) → q)"]],
      aciklama: "\"A, q için gereklidir\" q → A, \"yeterli değildir\" ¬(A → q) demektir. A = ¬p ∧ r olduğundan cevap (q → (¬p ∧ r)) ∧ ¬((¬p ∧ r) → q).",
    },
    {
      id: "u1-k17", no: "17", tip: "fill", kavram: "u1-sartli", zorluk: 2,
      soru: "Aşağıdaki şartlı önermelerin doğru (D) mu yanlış (Y) mı olduklarını belirleyiniz.\n\na) Eğer 1 + 1 = 2 ise, 2 + 2 = 5.\nb) Eğer 1 + 1 = 3 ise, 2 + 2 = 4.\nc) Eğer 1 + 1 = 3 ise, 2 + 2 = 5.\nd) Eğer maymunlar uçabilir ise, 1 + 1 = 3.\n\nBoşluk 1: a), Boşluk 2: b), Boşluk 3: c), Boşluk 4: d)",
      bosluklar: [["Y", "yanlış"], ["D", "doğru"], ["D", "doğru"], ["D", "doğru"]],
      aciklama: "Şartlı ifade yalnız hipotez doğru, sonuç yanlış iken yanlıştır. Bu yalnız a)'da olur. b, c ve d'de hipotez yanlış olduğu için ifade doğrudur.",
    },
    {
      id: "u1-k19", no: "19", tip: "yaz", kavram: "u1-baglac", zorluk: 2,
      soru: "Aşağıdaki her cümle için içleyen veya ya da dışlayan veya kalıplarından hangisinin kullanıldığını belirtiniz. Cevabınızı açıklayınız.\n\na) Yemeğin yanında kahve ya da çay alabilirsiniz.\nb) Kullanacağınız şifre en azından üç basamak içermeli veya en azından sekiz karakter uzunluğunda olmalı.\nc) Bu dersin önkoşulu sayı teorisi veya kriptoloji üzerine bir derstir.\nd) Ücreti Dolar veya Euro ile ödeyebilirsiniz.",
      aciklama: "a) Dışlayan veya: yemekle birlikte iki içecekten yalnız biri verilir.\nb) İçleyen veya: şifre iki şartı birden sağlarsa da kabul edilir.\nc) İçleyen veya: iki dersi de almış öğrenci önkoşulu sağlar.\nd) Dışlayan veya: ödeme iki para birimiyle birden yapılmaz.",
    },
    {
      id: "u1-k23", no: "23", tip: "yaz", kavram: "u1-sartli", zorluk: 2,
      soru: "Aşağıdaki cümleleri \"Eğer p ise q\" biçiminde yazınız.\n\na) Rüzgar kuzeydoğudan estiği zaman kar yağar.\nd) Erciyes dağının zirvesine ulaşmak için 8 km yürümek gerekmektedir.\ne) Kadrolu profesör ünvanı kazanmak için dünya çapında olmak yeterlidir.\nh) Can su çok soğuk değilse yüzmeye gidecek.",
      aciklama: "a) Eğer rüzgar kuzeydoğudan eserse kar yağar.\nd) Eğer zirveye ulaştıysanız 8 km yürümüşsünüzdür. (\"q için p gereklidir\" → eğer q ise p.)\ne) Eğer dünya çapındaysanız kadrolu profesör ünvanı kazanırsınız. (\"p, q için yeterlidir\" → eğer p ise q.)\nh) Eğer su çok soğuk değilse Can yüzmeye gidecek.",
    },
    {
      id: "u1-k27", no: "27", tip: "yaz", kavram: "u1-karsit", zorluk: 2,
      soru: "Aşağıdaki şartlı cümlelerin karşıt, zıt-pozitif ve ters gösterimlerini belirtiniz.\n\na) Eğer bugün kar yağarsa, yarın kayağa gideceğim.\nb) Ne zaman kısa sınav yapılıyor olsa hep sınıfa gelirim.",
      aciklama: "a) Karşıt: Yarın kayağa gidersem bugün kar yağmıştır. Zıt-pozitif: Yarın kayağa gitmezsem bugün kar yağmamıştır. Ters: Bugün kar yağmazsa yarın kayağa gitmeyeceğim.\nb) (p: kısa sınav var, q: sınıfa gelirim, p → q.) Karşıt: Sınıfa geldiğimde kısa sınav vardır. Zıt-pozitif: Sınıfa gelmezsem kısa sınav yoktur. Ters: Kısa sınav yoksa sınıfa gelmem.",
    },
    {
      id: "u1-k29", no: "29", tip: "fill", kavram: "u1-tablo",
      soru: "Aşağıdaki bileşik önermelerin her biri için oluşturulan doğruluk tablosunda kaç satır yer alacaktır?\n\na) p → ¬p\nb) (p ∨ ¬r) ∧ (q ∨ ¬s)\nc) q ∨ p ∨ ¬s ∨ ¬r ∨ ¬t ∨ u\nd) (p ∧ r ∧ t) ↔ (q ∧ t)\n\nBoşluk 1: a), Boşluk 2: b), Boşluk 3: c), Boşluk 4: d)",
      bosluklar: [["2"], ["16"], ["64"], ["16"]],
      aciklama: "Satır sayısı 2^(farklı değişken sayısı)'dır. a) 1 değişken: 2. b) p, q, r, s: 16. c) 6 değişken: 64. d) p, q, r, t: 16.",
    },
    {
      id: "u1-k31c", no: "31c", tip: "fill", kavram: "u1-tablo", zorluk: 2,
      soru: "(p ∨ ¬q) → q önermesinin doğruluk tablosunu oluşturunuz. Satırlar sırasıyla (p, q) = (D, D), (D, Y), (Y, D), (Y, Y) iken sonuç sütununu D/Y olarak yazınız.\n\nBoşluk 1: (D, D), Boşluk 2: (D, Y), Boşluk 3: (Y, D), Boşluk 4: (Y, Y)",
      bosluklar: [["D", "1", "doğru"], ["Y", "0", "yanlış"], ["D", "1", "doğru"], ["Y", "0", "yanlış"]],
      aciklama: "q doğruyken şartlı ifade doğrudur. q yanlışken ¬q doğru, hipotez p ∨ ¬q doğru, sonuç yanlış olduğundan ifade yanlıştır. Sonuç sütunu q ile aynıdır.",
    },
    {
      id: "u1-k31f", no: "31f", tip: "yaz", kavram: "u1-tablo", zorluk: 2,
      soru: "(p → q) → (q → p) önermesi için bir doğruluk tablosu oluşturunuz.",
      aciklama: "| p | q | p → q | q → p | (p → q) → (q → p) |\n|---|---|---|---|---|\n| D | D | D | D | D |\n| D | Y | Y | D | D |\n| Y | D | D | Y | Y |\n| Y | Y | D | D | D |\n\nİfade yalnız p yanlış, q doğru iken yanlıştır.",
    },
    {
      id: "u1-k37a", no: "37a", tip: "yaz", kavram: "u1-tablo", zorluk: 2,
      soru: "p → (¬q ∨ r) önermesi için bir doğruluk tablosu oluşturunuz.",
      aciklama: "| p | q | r | ¬q ∨ r | p → (¬q ∨ r) |\n|---|---|---|---|---|\n| D | D | D | D | D |\n| D | D | Y | Y | Y |\n| D | Y | D | D | D |\n| D | Y | Y | D | D |\n| Y | D | D | D | D |\n| Y | D | Y | Y | D |\n| Y | Y | D | D | D |\n| Y | Y | Y | D | D |\n\nYalnız p = D, q = D, r = Y satırı yanlıştır.",
    },
  ]),

  ...turet(U, K, "u1-onerme", [
    {
      id: "u1-t-onerme-tanim", tip: "fill", zorluk: 1,
      soru: "Doğru ya da yanlış olan, ama ikisi birden olmayan bildirme cümlesine ____ denir.",
      bosluklar: [["önerme"]],
      aciklama: "Kitaptaki tanım: önerme, ya doğru ya da yanlış olan bildirme cümlesidir.",
    },
    {
      id: "u1-t-x-arti", tip: "tf", zorluk: 1,
      soru: "\"x + 1 = 2\" cümlesi bir önermedir.",
      dogru: false,
      aciklama: "Yanlış. x'e değer verilmedikçe cümle ne doğru ne yanlıştır; bu yüzden önerme değildir.",
    },
    {
      id: "u1-t-bilesik", tip: "mcq", zorluk: 1,
      soru: "Var olan önermelerden mantık operatörleriyle oluşturulan yeni önermelere ne ad verilir?",
      secenekler: ["Bileşik önerme", "Atomik önerme", "Yüklem", "Aksiyom"],
      dogru: 0,
      aciklama: "Mantık operatörleriyle birleştirilerek kurulan önermeler bileşik önermedir; daha basit önermelerle ifade edilemeyenler atomik önermedir.",
    },
  ]),

  ...turet(U, K, "u1-baglac", [
    {
      id: "u1-t-ve-dogru", tip: "mcq", zorluk: 1,
      soru: "p ∧ q bileşik önermesi ne zaman doğrudur?",
      secenekler: ["p ve q'nun ikisi de doğru olduğunda", "p ya da q'dan en az biri doğru olduğunda", "p ve q'dan tam biri doğru olduğunda", "p ve q'nun ikisi de yanlış olduğunda"],
      dogru: 0,
      aciklama: "Birleşme (ve) yalnızca iki önerme de doğruyken doğrudur.",
    },
    {
      id: "u1-t-veya-yanlis", tip: "mcq", zorluk: 1,
      soru: "p ∨ q bileşik önermesi ne zaman yanlıştır?",
      secenekler: ["p ve q'nun ikisi de yanlış olduğunda", "p ve q'nun ikisi de doğru olduğunda", "p doğru ve q yanlış olduğunda", "p ve q'dan tam biri doğru olduğunda"],
      dogru: 0,
      aciklama: "Ayrılma (veya) yalnızca iki önerme de yanlışken yanlıştır.",
    },
    {
      id: "u1-t-xor", tip: "fill", zorluk: 2,
      soru: "p ⊕ q (dışlayıcı veya) yalnızca p ve q'dan ____ doğru olduğunda doğrudur. (bir sayı yazınız)\n\nBoşluk 1: kaç tanesi",
      bosluklar: [["1", "bir", "tam bir", "biri"]],
      aciklama: "Dışlayıcı veya, önermelerden tam biri doğruyken doğrudur; ikisi birden doğruysa yanlıştır.",
    },
    {
      id: "u1-t-xor-tf", tip: "tf", zorluk: 1,
      soru: "p ve q'nun ikisi de doğru ise p ⊕ q doğrudur.",
      dogru: false,
      aciklama: "Yanlış. Dışlayıcı veya iki önerme de doğruyken yanlıştır; içleyen veya (∨) ise bu durumda doğrudur.",
    },
    {
      id: "u1-t-ama", tip: "tf", zorluk: 1,
      soru: "Mantıkta \"fakat\" ve \"ama\" bağlaçları ve (∧) ile gösterilir.",
      dogru: true,
      aciklama: "Doğru. \"Güneş parlıyor fakat yağmur yağıyor\" p ∧ q ile yazılır.",
    },
    {
      id: "u1-t-degil-sembol", tip: "fill", zorluk: 1, semboller: true,
      soru: "p önermesinin değili hangi sembolle yazılır? (\"p\" ile birlikte yazınız)",
      bosluklar: [["¬p", "p̄"]],
      aciklama: "Değil ¬p (bazen p üzerine çizgi) ile gösterilir; \"p değildir\" diye okunur.",
    },
  ]),

  ...turet(U, K, "u1-sartli", [
    {
      id: "u1-t-sartli-yanlis", tip: "mcq", zorluk: 1,
      soru: "p → q şartlı ifadesi hangi durumda yanlıştır?",
      secenekler: ["p doğru, q yanlış", "p yanlış, q doğru", "p yanlış, q yanlış", "p doğru, q doğru"],
      dogru: 0,
      aciklama: "Şartlı ifade yalnızca hipotez doğru ve sonuç yanlışken yanlıştır.",
    },
    {
      id: "u1-t-hipotez", tip: "fill", zorluk: 1,
      soru: "p → q şartlı ifadesinde p'ye ____, q'ya ise sonuç denir.",
      bosluklar: [["hipotez", "öncül", "önerme hipotezi"]],
      aciklama: "p hipotez (öncül), q sonuçtur.",
    },
    {
      id: "u1-t-sadece-ise", tip: "mcq", zorluk: 2,
      soru: "\"p sadece q ise\" ifadesi aşağıdakilerden hangisine karşılık gelir?",
      secenekler: ["p → q", "q → p", "p ↔ q", "¬p → q"],
      dogru: 0,
      aciklama: "\"p sadece q ise\" p'nin q olmadan doğru olamayacağını söyler: p → q. Sık yapılan hata bunu q → p sanmaktır.",
    },
    {
      id: "u1-t-gerekli", tip: "mcq", zorluk: 2,
      soru: "\"q, p için gereklidir\" ifadesi hangi şartlı ifadeye karşılık gelir?",
      secenekler: ["p → q", "q → p", "¬p → ¬q", "p ∧ q"],
      dogru: 0,
      aciklama: "p doğruysa q'nun da doğru olması gerekir: p → q. \"p, q için yeterlidir\" de aynı ifadedir.",
    },
    {
      id: "u1-t-cift-sartli", tip: "mcq", zorluk: 1,
      soru: "p ↔ q çift şartlı ifadesi ne zaman doğrudur?",
      secenekler: ["p ve q aynı doğruluk değerine sahipken", "p ve q farklı doğruluk değerine sahipken", "Yalnızca p doğruyken", "Yalnızca q yanlışken"],
      dogru: 0,
      aciklama: "Çift şartlı ifade iki tarafın değeri aynıyken doğrudur; (p → q) ∧ (q → p) ile aynı değeri taşır.",
    },
    {
      id: "u1-t-hipotez-yanlis", tip: "tf", zorluk: 2,
      soru: "\"Eğer 2 + 2 = 5 ise, Ay peynirden yapılmıştır.\" önermesi doğrudur.",
      dogru: true,
      aciklama: "Doğru. Hipotez yanlış olduğu için şartlı ifade sonucun değerinden bağımsız olarak doğrudur. Matematiksel şartlı ifadede hipotez ile sonuç arasında anlam bağı aranmaz.",
    },
    {
      id: "u1-t-yazilim-if", tip: "fill", zorluk: 2,
      soru: "x = 2 iken \"if 2 + 2 = 4 then x := x + 1\" ifadesi çalıştıktan sonra x'in değeri kaçtır?",
      bosluklar: [["3"]],
      aciklama: "2 + 2 = 4 doğru olduğu için atama yapılır: x = 3.",
    },
  ]),

  ...turet(U, K, "u1-karsit", [
    {
      id: "u1-t-zit-denk", tip: "mcq", zorluk: 1,
      soru: "p → q ile her zaman aynı doğruluk değerine sahip olan (denk olan) ifade hangisidir?",
      secenekler: ["Zıt-pozitifi ¬q → ¬p", "Karşıtı q → p", "Tersi ¬p → ¬q", "Çift şartlısı p ↔ q"],
      dogru: 0,
      aciklama: "Bir şartlı ifade yalnızca zıt-pozitifine denktir. Karşıt ve ters birbirine denktir ama asıl ifadeye denk değildir.",
    },
    {
      id: "u1-t-karsit-ters", tip: "tf", zorluk: 2,
      soru: "Bir şartlı ifadenin karşıtı ile tersi birbirine denktir.",
      dogru: true,
      aciklama: "Doğru. Tersi ¬p → ¬q, karşıtın (q → p) zıt-pozitifidir; bu yüzden ikisi denktir.",
    },
    {
      id: "u1-t-ters-sembol", tip: "fill", zorluk: 1, semboller: true,
      soru: "p → q şartlı ifadesinin karşıtı, zıt-pozitifi ve tersi nedir?\n\nBoşluk 1: karşıt, Boşluk 2: zıt-pozitif, Boşluk 3: ters",
      bosluklar: [["q → p"], ["¬q → ¬p"], ["¬p → ¬q"]],
      aciklama: "Karşıt q → p, zıt-pozitif ¬q → ¬p, ters ¬p → ¬q'dur.",
    },
    {
      id: "u1-t-takim", tip: "yaz", zorluk: 2,
      soru: "\"Takım kazanırsa, yağmur yağıyordur\" ifadesinin karşıtını, zıt-pozitifini ve tersini yazınız. Hangisi asıl ifadeyle denktir?",
      aciklama: "Karşıt: Yağmur yağıyorsa takım kazanır.\nZıt-pozitif: Yağmur yağmıyorsa takım kazanmaz.\nTers: Takım kazanmazsa yağmur yağmıyordur.\nYalnız zıt-pozitif asıl ifadeyle denktir.",
    },
  ]),

  ...turet(U, K, "u1-tablo", [
    {
      id: "u1-t-oncelik", tip: "mcq", zorluk: 2,
      soru: "Mantık operatörlerinin öncelik sırası (en yüksekten en düşüğe) hangisidir?",
      secenekler: ["¬, ∧, ∨, →, ↔", "∧, ∨, ¬, →, ↔", "¬, ∨, ∧, ↔, →", "→, ↔, ¬, ∧, ∨"],
      dogru: 0,
      aciklama: "Önce değil, sonra ve, sonra veya, en son şartlı ve çift şartlı işlenir.",
    },
    {
      id: "u1-t-oncelik-ornek", tip: "fill", zorluk: 2, semboller: true,
      soru: "Öncelik kurallarına göre p ∨ q → ¬r ifadesi parantezlerle nasıl yazılır?",
      bosluklar: [["(p ∨ q) → ¬r"]],
      aciklama: "∨, →'den önce işlenir: (p ∨ q) → ¬r.",
    },
    {
      id: "u1-t-satir-n", tip: "fill", zorluk: 1,
      soru: "n farklı önerme değişkeni içeren bir bileşik önermenin doğruluk tablosunda kaç satır vardır? (n ile yazınız)",
      bosluklar: [["2^n", "2ⁿ", "2 üzeri n"]],
      aciklama: "Her değişken iki değer aldığı için 2ⁿ satır olur.",
    },
    {
      id: "u1-t-tablo-ornek", tip: "yaz", zorluk: 2,
      soru: "(p ∨ ¬q) → (p ∧ q) bileşik önermesinin doğruluk tablosunu oluşturunuz.",
      aciklama: "| p | q | ¬q | p ∨ ¬q | p ∧ q | (p ∨ ¬q) → (p ∧ q) |\n|---|---|---|---|---|---|\n| D | D | Y | D | D | D |\n| D | Y | D | D | Y | Y |\n| Y | D | Y | Y | Y | D |\n| Y | Y | D | D | Y | Y |",
    },
  ]),

  ...turet(U, K, "u1-bit", [
    {
      id: "u1-t-bit-ve", tip: "fill", zorluk: 2,
      soru: "01 1011 0110 ve 11 0001 1101 bit dizileri için bit düzeyinde VE (AND) sonucu nedir? (boşluksuz yazabilirsiniz)",
      bosluklar: [["0100010100", "01 0001 0100"]],
      aciklama: "Her basamakta iki bit de 1 ise 1 yazılır: 01 0001 0100.",
    },
    {
      id: "u1-t-bit-veya", tip: "fill", zorluk: 2,
      soru: "01 1011 0110 ve 11 0001 1101 bit dizileri için bit düzeyinde VEYA (OR) sonucu nedir?",
      bosluklar: [["1110111111", "11 1011 1111"]],
      aciklama: "Her basamakta en az bir bit 1 ise 1 yazılır: 11 1011 1111.",
    },
    {
      id: "u1-t-bit-xor", tip: "fill", zorluk: 2,
      soru: "01 1011 0110 ve 11 0001 1101 bit dizileri için bit düzeyinde XOR sonucu nedir?",
      bosluklar: [["1010101011", "10 1010 1011"]],
      aciklama: "Bitler farklıysa 1, aynıysa 0 yazılır: 10 1010 1011.",
    },
    {
      id: "u1-t-bit-tanim", tip: "tf", zorluk: 1,
      soru: "Bilgisayarlarda 1 biti doğru (D), 0 biti yanlış (Y) değerini temsil eder.",
      dogru: true,
      aciklama: "Doğru. Bit, doğruluk değerlerini göstermek için kullanılır: 1 doğru, 0 yanlış.",
    },
  ]),
];
