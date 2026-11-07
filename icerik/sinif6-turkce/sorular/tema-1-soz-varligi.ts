// 1. tema (Dilimizin Zenginliği), söz varlığı: T.O.6.21 söz varlığını geliştirmeye
// yönelik çözümleme (eş ve zıt anlam, gerçek-mecaz-terim anlam, deyim, atasözü, ikileme).
import { grup, type Soru } from "./yardimci.ts";

const T = 1;
const K = "t6-u1-soz-varligi";

export const sozVarligi: Soru[] = [
  ...grup({ tema: T, konu: K, kavram: "u1-es-zit-anlam", kod: "T.O.6.21", yazili1: true }, [
    {
      id: "t6-1-sv-01", tip: "mcq", zorluk: 1,
      soru: "\"Öğretmenimiz sorulara verdiğimiz **yanıtları** tek tek okudu.\"\n\nCümlede kalın yazılan kelimenin eş anlamlısı aşağıdakilerden hangisidir?",
      secenekler: ["Soru", "Cevap", "Not", "Fikir"],
      dogru: 1,
      aciklama: "Yanıt ve cevap yazılışları farklı, anlamları aynı olan eş anlamlı kelimelerdir.",
    },
    {
      id: "t6-1-sv-02", tip: "mcq", zorluk: 1,
      soru: "Aşağıdaki kelime çiftlerinden hangisi zıt anlamlıdır?",
      secenekler: ["Kara - siyah", "Ak - beyaz", "Cimri - cömert", "Al - kırmızı"],
      dogru: 2,
      aciklama: "Cimri (eli sıkı) ile cömert (eli açık) anlamca birbirinin karşıtıdır. Diğer çiftler eş anlamlıdır: kara-siyah, ak-beyaz, al-kırmızı.",
    },
    {
      id: "t6-1-sv-03", tip: "fill", zorluk: 1,
      soru: "Aşağıdaki cümlede kalın yazılan kelimenin zıt anlamlısını boşluğa yazınız.\n\n\"Bu yıl kış **erken** geldi.\" → Bu yıl kış ______ geldi.",
      bosluklar: [["geç"]],
      aciklama: "\"Erken\" kelimesinin zıt anlamlısı **geç**tir.",
    },
    {
      id: "t6-1-sv-04", tip: "yaz", zorluk: 2,
      soru: "\"**Kalabalık** caddede **yaşlı** bir adam, elindeki **ağır** çantayla yavaş yavaş yürüyordu.\"\n\nCümlede kalın yazılan kelimelerin zıt anlamlılarını yazınız.",
      aciklama: "**Örnek cevap:** kalabalık → tenha (ıssız), yaşlı → genç, ağır → hafif.\n\n**Puanlama:** Her doğru kelime puanın üçte biri. \"Kalabalık\" için \"sakin, boş\" da kabul edilir.",
    },
    {
      id: "t6-1-sv-05", tip: "mcq", zorluk: 2,
      soru: "Aşağıdaki cümlelerin hangisinde eş anlamlı iki kelime birlikte kullanılmıştır?",
      secenekler: ["Okulun bahçesi geniş ve ağaçlıydı.", "Bu yıl hem okul hem mektep değişti.", "Sabah erken kalkıp geç yattı.", "Uzun ve kısa çizgileri karıştırma."],
      dogru: 1,
      aciklama: "Okul ve mektep aynı anlama gelen eş anlamlı kelimelerdir. \"Erken-geç\" ve \"uzun-kısa\" zıt anlamlıdır.",
    },
    {
      id: "t6-1-sv-06", tip: "fill", zorluk: 1,
      soru: "Boşluğa \"zor\" kelimesinin eş anlamlısını yazınız: Bu soru çok ______ değildi, kolayca çözdük.",
      bosluklar: [["güç"]],
      aciklama: "\"Zor\" ile **güç** eş anlamlıdır. (\"Güç\" kelimesi \"kuvvet\" anlamında da kullanılır; burada \"zor\" anlamındadır.)",
    },
  ]),

  ...grup({ tema: T, konu: K, kavram: "u1-gercek-mecaz", kod: "T.O.6.21", yazili1: true }, [
    {
      id: "t6-1-sv-07", tip: "mcq", zorluk: 2,
      soru: "Aşağıdaki cümlelerin hangisinde \"ağır\" kelimesi mecaz anlamda kullanılmıştır?",
      secenekler: ["Market poşetleri çok ağırdı.", "Ağır sandığı iki kişi taşıdık.", "Bu ağır sözler onu çok üzdü.", "Fil ağır bir hayvandır."],
      dogru: 2,
      aciklama: "\"Ağır söz\", kırıcı ve incitici söz demektir; kelime gerçek anlamından (kütlesi fazla) uzaklaşmıştır. Diğer cümlelerde \"ağır\" gerçek anlamdadır.",
    },
    {
      id: "t6-1-sv-08", tip: "mcq", zorluk: 2,
      soru: "Aşağıdaki cümlelerin hangisinde \"açı\" kelimesi terim anlamda kullanılmıştır?",
      secenekler: ["Olaya bir de onun açısından bak.", "Üçgenin iç açılarının toplamı 180 derecedir.", "Fotoğrafı farklı bir açıdan çekti.", "Bu konuya yeni bir açıdan yaklaştı."],
      dogru: 1,
      aciklama: "Matematikte \"açı\" iki ışının arasındaki açıklığı anlatan bir terimdir. Diğer cümlelerde kelime \"bakış, görüş yeri\" anlamında kullanılmıştır.",
    },
    {
      id: "t6-1-sv-09", tip: "yaz", zorluk: 2,
      soru: "\"Tatlı\" kelimesini önce gerçek, sonra mecaz anlamıyla birer cümlede kullanınız.",
      aciklama: "**Örnek cevap:**\n- Gerçek anlam: *Annem bayram için tatlı yaptı.* (şekerli yiyecek, tadı şekerli)\n- Mecaz anlam: *Komşumuz bize her zaman tatlı sözlerle seslenir.* (hoş, gönül alıcı)\n\n**Puanlama:** Her doğru cümle yarı puan.",
    },
    {
      id: "t6-1-sv-10", tip: "tf", zorluk: 1,
      soru: "\"Kardeşim bugün çok **soğuk** davrandı.\" cümlesinde \"soğuk\" kelimesi gerçek anlamda kullanılmıştır.",
      dogru: false,
      aciklama: "Burada \"soğuk\" ısısı düşük demek değildir; ilgisiz, sevgisiz davranmak anlamında **mecaz** olarak kullanılmıştır.",
    },
    {
      id: "t6-1-sv-11", tip: "mcq", zorluk: 2,
      soru: "\"Kitabın son bölümünü okurken gözlerim **doldu**.\"\n\nCümlede \"dolmak\" kelimesi hangi anlamda kullanılmıştır?",
      secenekler: ["Bir kabın içi tamamen kaplanmak", "Ağlayacak gibi olmak, gözü yaşarmak", "Bir yerin kalabalıklaşması", "Bir sürenin bitmesi"],
      dogru: 1,
      aciklama: "\"Gözleri dolmak\", duygulanıp ağlayacak duruma gelmek demektir. Kelime burada mecaz anlamdadır.",
    },
  ]),

  ...grup({ tema: T, konu: K, kavram: "u1-deyim-atasozu", kod: "T.O.6.21", yazili1: true }, [
    {
      id: "t6-1-sv-12", tip: "mcq", zorluk: 1,
      soru: "\"Sınav sonucunu öğrenince **etekleri zil çaldı**.\"\n\nCümlede kalın yazılan deyimin anlamı aşağıdakilerden hangisidir?",
      secenekler: ["Çok sevinmek", "Çok korkmak", "Çok şaşırmak", "Çok üzülmek"],
      dogru: 0,
      aciklama: "\"Etekleri zil çalmak\", çok sevinmek demektir.",
    },
    {
      id: "t6-1-sv-13", tip: "mcq", zorluk: 1,
      soru: "Aşağıdakilerden hangisi bir atasözüdür?",
      secenekler: ["Göz atmak", "Ağzı kulaklarına varmak", "Damlaya damlaya göl olur.", "Kulak vermek"],
      dogru: 2,
      aciklama: "\"Damlaya damlaya göl olur.\" küçük birikimlerin zamanla büyüyeceği öğüdünü veren bir atasözüdür. Diğerleri deyimdir; deyimler öğüt vermez, bir durumu anlatır.",
    },
    {
      id: "t6-1-sv-14", tip: "yaz", zorluk: 2,
      soru: "\"Ayağını yorganına göre uzat.\" atasözünün anlamını yazınız ve bu atasözüne uygun bir durum örneği veriniz.",
      aciklama: "**Örnek cevap:** Harcamalarını gelirine, imkânlarına göre yapmalısın. *Örnek:* Harçlığı az olan bir öğrencinin, parasının yetmeyeceği pahalı bir oyuncak yerine birikimine uygun bir kitap alması.\n\n**Puanlama:** Anlam yarı puan, atasözüne uyan durum yarı puan.",
    },
    {
      id: "t6-1-sv-15", tip: "mcq", zorluk: 1,
      soru: "Aşağıdaki cümlelerin hangisinde ikileme kullanılmıştır?",
      secenekler: ["Çocuklar bahçede top oynadı.", "Yağmur damla damla yağıyordu.", "Annem bize kek yaptı.", "Okul dönüşü parka uğradık."],
      dogru: 1,
      aciklama: "\"Damla damla\" bir kelimenin tekrarıyla oluşmuş bir ikilemedir; yağmurun yağış biçimini güçlendirerek anlatır.",
    },
    {
      id: "t6-1-sv-16", tip: "fill", zorluk: 2,
      soru: "Aşağıdaki deyimi boşluğa uygun kelimeyi yazarak tamamlayınız. (Anlamı: söylenenleri dikkatle dinlemek)\n\nÖğretmenin anlattıklarına kulak ______.",
      bosluklar: [["verdik", "verdim", "verdi", "vermek", "verin", "verdiler"]],
      aciklama: "\"Kulak vermek\" deyimi söylenenleri dikkatle dinlemek anlamındadır.",
    },
    {
      id: "t6-1-sv-17", tip: "yaz", zorluk: 2,
      soru: "\"Göz\" kelimesiyle kurulmuş iki deyim yazınız ve her birini anlamına uygun bir cümlede kullanınız.",
      aciklama: "**Örnek cevap:**\n- *Göz atmak* (kısaca bakmak): Sınavdan önce notlarıma göz attım.\n- *Göz yummak* (görmezden gelmek): Kardeşimin küçük hatasına göz yumdum.\n\nGöz kulak olmak, gözden düşmek, göze girmek gibi deyimler de kabul edilir.\n\n**Puanlama:** Her deyim ve doğru cümlesi yarı puan.",
    },
  ]),
];
