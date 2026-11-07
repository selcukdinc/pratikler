// 2. tema (Bağımsızlık Yolu): kök ve ek, yapım ve çekim eki (programın öğrenme-öğretme
// uygulamaları; ekler ezberletilmeden sezdirilir), karşılaştırma bildiren sözler (T.O.6.10).
// 1. dönem 2. ortak yazılıya hazırlık.
import { grup, metinli, type Soru } from "./yardimci.ts";

const T = 2;

const IKI_SEHIR = `Ankara ile İstanbul, Kurtuluş Savaşı yıllarında çok farklı durumdaydı. İstanbul, işgal altında olduğu için oradaki aydınlar ve askerler Anadolu'ya geçmeye çalışıyordu. Ankara ise küçük bir kasaba olmasına rağmen savaşın yönetildiği merkez hâline geldi. İstanbul'un limanı, sarayları ve kalabalık nüfusu vardı; Ankara'nın ise demir yolu istasyonu ve güvenli konumu. Bu yüzden Ankara, İstanbul kadar büyük olmasa da yeni devletin başkenti olmaya daha uygundu.`;

export const tema2: Soru[] = [
  ...grup({ tema: T, konu: "t6-u2-kok-ek", kavram: "u2-kok-ek", kod: "T.O.6.21" }, [
    {
      id: "t6-2-ke-01", tip: "mcq", zorluk: 1,
      soru: "\"Gözlükçü\" kelimesinin kökü aşağıdakilerden hangisidir?",
      secenekler: ["Göz", "Gözlük", "Gözlükçü", "Gö"],
      dogru: 0,
      aciklama: "Kelimeden ekleri tek tek atarız: gözlükçü → gözlük → göz. \"Göz\" anlamlı ve daha küçük parçalara ayrılamayan ilk bölümdür, yani köktür.",
    },
    {
      id: "t6-2-ke-02", tip: "fill", zorluk: 1,
      soru: "\"Kitaplıklarımızda\" kelimesinin kökünü yazınız.",
      bosluklar: [["kitap"]],
      aciklama: "kitap-lık-lar-ımız-da: kök **kitap**tır. \"-lık\" yeni bir kelime türetir (kitaplık), diğer ekler kelimenin cümledeki görevini belirler.",
    },
    {
      id: "t6-2-ke-03", tip: "yaz", zorluk: 2,
      soru: "\"Bağımsızlık\" kelimesini kök ve eklerine ayırınız. Her ekin kelimeye kattığı anlamı kısaca yazınız.",
      aciklama: "**Örnek cevap:** bağ-ım-sız-lık\n- *bağ-*: kök (bağlamak eyleminin kökü)\n- *-ım*: \"bağım\" (bağlı olma durumu)\n- *-sız*: \"bağımsız\" (bağlı olmayan)\n- *-lık*: \"bağımsızlık\" (bağımsız olma durumu)\n\n**Puanlama:** Kökü bulmak yarı puan, ekleri doğru ayırmak yarı puan. Eklerin anlamı tam yazılmasa da ayırma doğruysa puan verilir.",
    },
    {
      id: "t6-2-ke-04", tip: "tf", zorluk: 1,
      soru: "\"Yolcular\" kelimesinin kökü \"yolcu\"dur.",
      dogru: false,
      aciklama: "yol-cu-lar: kök **yol**dur. \"Yolcu\" kökten türetilmiş bir kelimedir (gövde), kök değildir.",
    },
  ]),

  ...grup({ tema: T, konu: "t6-u2-kok-ek", kavram: "u2-yapim-cekim", kod: "T.O.6.21" }, [
    {
      id: "t6-2-yc-01", tip: "mcq", zorluk: 2,
      soru: "Aşağıdaki kelimelerin hangisinde **yapım eki** vardır?",
      secenekler: ["Kitaplar", "Evden", "Tuzluk", "Okulda"],
      dogru: 2,
      aciklama: "\"Tuz\" kelimesine gelen \"-luk\" eki yeni anlamda bir kelime (tuzluk: tuz konan kap) türetmiştir; yapım ekidir. Diğerlerindeki ekler (-lar, -den, -da) kelimenin anlamını değiştirmeyen çekim ekleridir.",
    },
    {
      id: "t6-2-yc-02", tip: "mcq", zorluk: 2,
      soru: "\"Askerler cepheye koştu.\"\n\nCümlesindeki \"askerler\" kelimesine gelen \"-ler\" eki ile ilgili aşağıdakilerden hangisi doğrudur?",
      secenekler: ["Yeni bir kelime türetmiştir.", "Çokluk bildiren bir çekim ekidir.", "Kelimenin kökünü değiştirmiştir.", "Kelimeyi eylem yapmıştır."],
      dogru: 1,
      aciklama: "\"-ler\" kelimenin anlamını değiştirmez, yalnızca birden fazla asker olduğunu bildirir; çokluk bildiren bir **çekim** ekidir.",
    },
    {
      id: "t6-2-yc-03", tip: "yaz", zorluk: 2,
      soru: "\"Göz\" kelimesine yapım ekleri getirerek yeni anlamda üç kelime türetiniz. Sonra bu kelimelerden birine bir çekim eki ekleyerek bir cümlede kullanınız.",
      aciklama: "**Örnek cevap:** göz-lük, göz-cü, göz-le (gözlemek).\n\n*Cümle:* Babam yeni **gözlüğünü** masada unuttu. (\"-ü\" ve \"-nü\" anlamı değiştirmeyen çekim ekleridir.)\n\n**Puanlama:** Üç kelime yarı puan, çekim ekli kelimenin cümlede doğru kullanımı yarı puan.",
    },
    {
      id: "t6-2-yc-04", tip: "tf", zorluk: 1,
      soru: "Çekim ekleri kelimenin anlamını değiştirmez; yapım ekleri ise yeni anlamda kelimeler türetir.",
      dogru: true,
      aciklama: "\"Göz-ler\" yine gözdür (çekim eki), \"göz-lük\" ise bambaşka bir nesnedir (yapım eki).",
    },
  ]),

  ...grup({ tema: T, konu: "t6-u2-karsilastirma", kavram: "u2-karsilastirma", kod: "T.O.6.10" }, [
    {
      id: "t6-2-ks-01", tip: "mcq", zorluk: 2,
      soru: metinli(IKI_SEHIR, "Metinde Ankara ile İstanbul hangi yönden karşılaştırılmamıştır?"),
      secenekler: ["Savaş yıllarındaki durumları", "Büyüklükleri", "İklimleri", "Başkent olmaya uygunlukları"],
      dogru: 2,
      aciklama: "Metinde iki şehrin savaştaki durumu, büyüklüğü ve sahip oldukları (liman, istasyon) ile başkent olmaya uygunlukları karşılaştırılıyor. İklimden söz edilmiyor.",
    },
    {
      id: "t6-2-ks-02", tip: "yaz", zorluk: 2,
      soru: metinli(IKI_SEHIR, "Metinde karşılaştırma yapmak için kullanılan iki sözü (kelime ya da kalıp) yazınız."),
      aciklama: "**Örnek cevap:** \"kadar\" (İstanbul kadar büyük olmasa da), \"daha\" (daha uygundu), \"ise\" (Ankara ise ...), \"farklı\".\n\n**Puanlama:** Her doğru söz yarı puan.",
    },
    {
      id: "t6-2-ks-03", tip: "mcq", zorluk: 1,
      soru: "Aşağıdaki cümlelerin hangisinde bir karşılaştırma yapılmıştır?",
      secenekler: ["Kardeşim benden daha uzun boylu.", "Bugün okulda resim yaptık.", "Kitabı rafa geri koydum.", "Yarın hava güneşli olacakmış."],
      dogru: 0,
      aciklama: "\"Benden daha uzun\" sözünde iki kişi boy bakımından karşılaştırılıyor; \"-den daha\" karşılaştırma bildirir.",
    },
    {
      id: "t6-2-ks-04", tip: "fill", zorluk: 1,
      soru: "Boşluğa karşılaştırma bildiren uygun kelimeyi yazınız: Bu yolculuk, geçen yılki ______ yorucu değildi.",
      bosluklar: [["kadar"]],
      aciklama: "\"Geçen yılki **kadar** yorucu değildi\" cümlesinde iki yolculuk yorgunluk bakımından karşılaştırılıyor.",
    },
  ]),
];
