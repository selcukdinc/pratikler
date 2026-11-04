// 1. ünite: madde, karışımlar ve ayırma yöntemleri (türetilmiş sorular)
import type { Soru } from "../../tipler.ts";
import { turet } from "./yardimci.ts";

export const unite1: Soru[] = [
  ...turet(1, "km-madde-karisim", "u1-madde-sinif", [
    {
      id: "km-u1-homojen-ornek", zorluk: 1, tip: "mcq",
      soru: "Aşağıdakilerden hangisi homojen bir karışımdır?",
      secenekler: ["Tuzlu su", "Kum ve su", "Zeytinyağı ve su", "Granit"],
      dogru: 0,
      aciklama: "Tuzlu suyun her yerinde aynı bileşim vardır ve tuz gözle ayırt edilemez; bu yüzden homojen karışım, yani çözeltidir. Kum ve su, zeytinyağı ve su ile granitte bileşenler ayırt edilebilir; bunlar heterojendir.",
    },
    {
      id: "km-u1-bilesik-ayrisma", zorluk: 1, tip: "mcq",
      soru: "Bir saf madde ısıtılınca iki farklı gaza ayrışıyor. Bu madde için aşağıdakilerden hangisi kesinlikle doğrudur?",
      secenekler: ["Bir bileşiktir", "Bir elementtir", "Homojen bir karışımdır", "Heterojen bir karışımdır"],
      dogru: 0,
      aciklama: "Saf madde kimyasal bir değişimle daha basit maddelere ayrışabiliyorsa bileşiktir. Elementler kimyasal yöntemlerle daha basit maddelere ayrılamaz; karışımlar ise saf madde değildir.",
    },
    {
      id: "km-u1-element-tf", zorluk: 1, tip: "tf",
      soru: "Element, tek tür atomdan oluşan ve kimyasal yöntemlerle daha basit maddelere ayrılamayan saf maddedir.",
      dogru: true,
      aciklama: "Doğru. Demir, oksijen ve altın elementtir; bileşikler ise kimyasal yöntemlerle elementlerine ayrılabilir.",
    },
    {
      id: "km-u1-cozelti-fill", zorluk: 1, tip: "fill",
      soru: "Homojen karışımlara ____ da denir.",
      bosluklar: [["çözelti", "cozelti"]],
      aciklama: "Homojen karışımlar çözelti olarak da adlandırılır: tuzlu su, hava, şekerli çay ve pirinç alaşımı birer çözeltidir.",
    },
    {
      id: "km-u1-feS-karisim", zorluk: 2, tip: "mcq", yedek: true,
      soru: "Demir tozu ile kükürt tozu karıştırılıp ısıtılmadan bekletiliyor. Bu durum için hangisi doğrudur?",
      secenekler: ["Karışımdır; demir mıknatısla ayrılabilir", "Bileşiktir; demir mıknatısla ayrılamaz", "Bileşiktir; demir mıknatısla ayrılabilir", "Elementtir; demir mıknatısla ayrılamaz"],
      dogru: 0,
      aciklama: "Isıtılmadıkça tepkime olmaz; demir ve kükürt kendi özelliklerini koruyan bir karışım oluşturur ve demir mıknatısla geri alınır. Isıtılırsa FeS bileşiği oluşur ve demir artık mıknatısa yapışmaz.",
    },
  ]),

  ...turet(1, "km-madde-karisim", "u1-karisim-ozellik", [
    {
      id: "km-u1-karisim-kaynama", zorluk: 2, tip: "tf",
      soru: "Tuzlu su, saf su gibi sabit bir sıcaklıkta kaynar ve kaynama boyunca sıcaklığı değişmez.",
      dogru: false,
      aciklama: "Yanlış. Karışımların kaynama noktası sabit değildir. Tuzlu su 100 °C'tan yüksek bir sıcaklıkta kaynamaya başlar ve su buharlaştıkça tuz derişimi arttığı için kaynarken sıcaklığı yükselir.",
    },
    {
      id: "km-u1-karisim-oran", zorluk: 1, tip: "mcq", yedek: true,
      soru: "Aşağıdakilerden hangisi bileşiklerin değil, karışımların özelliğidir?",
      secenekler: ["Bileşenler herhangi bir oranda bir araya gelebilir", "Bileşenler belirli bir kütle oranıyla birleşir", "Yalnızca kimyasal yöntemlerle ayrıştırılır", "Erime noktası belirli ve sabittir"],
      dogru: 0,
      aciklama: "Karışımlarda bileşenlerin oranı istenildiği gibi değişebilir. Belirli kütle oranı, kimyasal yöntemle ayrışma ve sabit erime noktası bileşiklerin özellikleridir.",
    },
  ]),

  ...turet(1, "km-madde-karisim", "u1-fiziksel-kimyasal", [
    {
      id: "km-u1-fizik-cozunme", zorluk: 1, tip: "mcq",
      soru: "Aşağıdakilerden hangisi fiziksel bir değişimdir?",
      secenekler: ["Tuzun suda çözünmesi", "Demirin paslanması", "Sütün ekşimesi", "Kâğıdın yanması"],
      dogru: 0,
      aciklama: "Tuz suda çözündüğünde tuz olarak kalır; su buharlaştırılınca tuz geri alınır. Paslanma, ekşime ve yanmada yeni maddeler oluşur; bunlar kimyasal değişimdir.",
    },
    {
      id: "km-u1-kimyasal-ipucu", zorluk: 2, tip: "mcq",
      soru: "Bir deney tüpünde iki çözelti karıştırıldığında aşağıdaki gözlemlerden hangisi tek başına kimyasal tepkime olduğunu en iyi gösterir?",
      secenekler: ["Dipte katı bir çökelek oluşması", "Karışımın hacminin iki çözeltinin toplamı olması", "Karışımın saydam ve renksiz kalması", "Tüpün sallanınca karışımın dalgalanması"],
      dogru: 0,
      aciklama: "Çökelek oluşması, çözeltilerde bulunmayan yeni bir katı maddenin oluştuğunu gösterir. Renk değişimi, gaz çıkışı ve ısı ya da ışık yayılması da kimyasal değişimin ipuçlarıdır. Öteki gözlemler herhangi bir değişime işaret etmez.",
    },
    {
      id: "km-u1-ozellik-yanicilik", zorluk: 2, tip: "mcq",
      soru: "Aşağıdakilerden hangisi bir maddenin kimyasal özelliğidir?",
      secenekler: ["Yanıcılık", "Yoğunluk", "Kaynama noktası", "Renk"],
      dogru: 0,
      aciklama: "Yanıcılık, maddenin oksijenle tepkimeye girip başka maddelere dönüşme eğilimini anlatır; kimyasal özelliktir. Yoğunluk, kaynama noktası ve renk maddenin kimliği değişmeden ölçülür; fiziksel özelliktir.",
    },
    {
      id: "km-u1-buharlasma-tf", zorluk: 1, tip: "tf", yedek: true,
      soru: "Suyun kaynarken gaz çıkarması kimyasal bir değişimdir, çünkü gaz çıkışı tepkime belirtisidir.",
      dogru: false,
      aciklama: "Yanlış. Kaynayan suyun çıkardığı gaz su buharıdır; su molekülleri değişmemiştir. Gaz çıkışı kimyasal tepkimenin ipucu olabilir ama tek başına kesin kanıt değildir.",
    },
  ]),

  ...turet(1, "km-ayirma", "u1-ayirma-yontemi", [
    {
      id: "km-u1-ayirma-yag-su", zorluk: 1, tip: "mcq",
      soru: "Zeytinyağı ve su karışımını ayırmak için en uygun yöntem hangisidir?",
      secenekler: ["Ayırma hunisi", "Süzme", "Mıknatısla ayırma", "Kristallendirme"],
      dogru: 0,
      aciklama: "Zeytinyağı ile su birbirinde çözünmez ve yoğunlukları farklıdır; ayırma hunisinde yağ üstte kalır, alttaki su musluktan akıtılır. Süzme katı tanecikleri, mıknatıs manyetik maddeleri ayırır.",
    },
    {
      id: "km-u1-damitma-tuzlu", zorluk: 1, tip: "mcq",
      soru: "Tuzlu sudan saf su elde etmek için hangi yöntem kullanılır?",
      secenekler: ["Basit damıtma", "Süzme", "Ayırma hunisi", "Mıknatısla ayırma"],
      dogru: 0,
      aciklama: "Damıtmada su buharlaşıp soğutucuda yoğunlaşır ve kapta saf su toplanır; tuz balonda kalır. Tuz çözündüğü için süzgeçten suyla birlikte geçer.",
    },
    {
      id: "km-u1-ayrimsal-alkol", zorluk: 2, tip: "mcq",
      soru: "Su (kaynama noktası 100 °C) ile etil alkolün (78 °C) homojen karışımını en iyi ayıran yöntem hangisidir?",
      secenekler: ["Ayrımsal damıtma", "Süzme", "Ayırma hunisi", "Mıknatısla ayırma"],
      dogru: 0,
      aciklama: "İki sıvı birbirinde çözündüğü için süzme ve ayırma hunisi işe yaramaz. Kaynama noktaları yakın olduğundan, basit damıtma yerine kolonlu ayrımsal damıtma kullanılır.",
    },
    {
      id: "km-u1-suzme-fill", zorluk: 1, tip: "fill",
      soru: "Kum ile suyun heterojen karışımı en kolay ____ yöntemiyle ayrılır.",
      bosluklar: [["süzme", "suzme"]],
      aciklama: "Kum suda çözünmez ve süzgeç kâğıdında kalır, su süzgeçten geçer.",
    },
    {
      id: "km-u1-mikrnatis-tf", zorluk: 1, tip: "tf", yedek: true,
      soru: "Mıknatısla ayırma, bileşenlerden yalnızca birinin mıknatısa çekildiği karışımlarda kullanılabilir.",
      dogru: true,
      aciklama: "Doğru. Yöntem manyetik özellik farkını kullanır: demir tozu ile kükürt ya da kum karışımında demir mıknatısa çekilir.",
    },
  ]),

  ...turet(1, "km-ayirma", "u1-kristallendirme", [
    {
      id: "km-u1-kristal-sicak-suzme", zorluk: 2, tip: "mcq",
      soru: "Kristallendirmede çözünmeyen safsızlıklar neden çözelti henüz sıcakken süzülür?",
      secenekler: ["Soğursa ürün süzgeç kâğıdında kristallenip kaybolur", "Sıcakken safsızlıklar çözeltide çözünür", "Soğuk çözelti süzgeç kâğıdını yırtar", "Sıcak süzme ürünün erime noktasını düşürür"],
      dogru: 0,
      aciklama: "Ürünün çözünürlüğü sıcaklıkla azalır. Çözelti süzülmeden soğursa ürün de safsızlıklarla birlikte süzgeçte kristallenir ve kaybolur.",
    },
    {
      id: "km-u1-kristal-verim", zorluk: 2, tip: "num",
      soru: "Bir tuzun 100 g sudaki çözünürlüğü 60 °C'ta 55 g, 10 °C'ta 21 g'dır. 60 °C'ta 200 g suyla hazırlanan doymuş çözelti 10 °C'a soğutulursa kaç gram tuz kristallenir?",
      bosluklar: [["68"]],
      aciklama: "60 °C'ta 200 g suda 2 × 55 = 110 g tuz çözünür. 10 °C'ta aynı suda 2 × 21 = 42 g çözünmüş kalabilir. Fark çöker: 110 − 42 = 68 g.",
    },
    {
      id: "km-u1-kristal-yikama", zorluk: 1, tip: "tf",
      soru: "Kristallendirmede süzülen kristaller, yüzeylerindeki ana çözeltiyi gidermek için bol miktarda sıcak çözücüyle yıkanır.",
      dogru: false,
      aciklama: "Yanlış. Kristaller az miktarda **soğuk** çözücüyle yıkanır. Sıcak çözücü kristallerin bir kısmını yeniden çözer ve verim düşer.",
    },
  ]),
];
