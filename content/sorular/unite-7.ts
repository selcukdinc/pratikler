// 7. ünite: Girişimin Etik Temelleri

import { kitap, turet, type Soru } from "./tipler.ts";

const U = 7;
const K = "u7";

export const unite7: Soru[] = [
  ...kitap(U, K, [
    {
      id: "u7-k01", no: 1, kavram: "u7-etik-ahlak",
      soru: "Aşağıdakilerden hangisi bireysel ve toplumsal anlamda gündelik yaşamın düzenlenmesine yönelik kurallara işaret etmektedir?",
      secenekler: ["Ahlak", "Gelenek", "İnanç", "Etik", "Değer"],
      dogru: 0,
      aciklama: "**Ahlak**, hayatın doğal akışında insanın insanla ve eşyayla ilişkilerine rehberlik eden yazılı olmayan kurallar setidir.",
    },
    {
      id: "u7-k02", no: 2, kavram: "u7-etik-ahlak",
      soru: "Ahlaki problemler ve bunlara ilişkin yargıların yorumlanmasına yönelik felsefi alan aşağıdakilerden hangisidir?",
      secenekler: ["Gelenek", "Etik", "Ahlak", "Örf", "İnanç"],
      dogru: 1,
      aciklama: "**Etik**, ahlaki kurallara ilişkin felsefi değerlendirmeleri yapan felsefe dalıdır. Yaşanan olgu ahlak, onun araştırılması etiktir.",
    },
    {
      id: "u7-k03", no: 3, cikmis: 20, kavram: "u7-sorumluluk",
      soru: "Girişimlerin kendi çalışma konularına yönelik ürün geliştirme, üretim, tedarik pazarlama ve satış sonrası hizmetleri hangi sorumluluk alanı içerisinde yer almaktadır?",
      secenekler: ["Sosyal sorumluluklar", "Örnek olma sorumluluğu", "Bireysel sorumluluklar", "Ahlaki sorumluluklar", "Yasal sorumluluklar"],
      dogru: 2,
      aciklama: "Girişimin kendi işini (ürün, üretim, tedarik, pazarlama, satış sonrası) doğru yapması **bireysel sorumluluk** alanıdır.",
    },
    {
      id: "u7-k04", no: 4, kavram: "u7-sorumluluk",
      soru: "Girişimlerin bireysel sorumluluğunu yerine getirmemesiyle birlikte ortaya çıkan toplumsal ve sosyal maliyetler aşağıdaki sorumluluk alanlarından hangisiyle ilgilidir?",
      secenekler: ["Bireysel sorumluluklar", "Örnek olma sorumluluğu", "Ahlaki sorumluluklar", "Sosyal sorumluluklar", "Yasal sorumluluklar"],
      dogru: 3,
      aciklama: "Bireysel sorumluluğun ihmal edilmesinin topluma yüklediği maliyetler **sosyal sorumluluk** alanına girer.",
    },
    {
      id: "u7-k05", no: 5, cikmis: 21, kavram: "u7-ilkeler",
      soru: "Aşağıdakilerden hangisinde girişimin etik temellerini oluşturan unsurlar bir arada verilmiştir?",
      secenekler: ["Ahlaki değerler ve bireysel sorumluluklar", "Hukuk normları ve sosyal sorumluluklar", "Ahlaki sorumluluklar ve sosyal sorumluluklar", "Bireysel sorumluluklar ve yasal sorumluluklar", "Ahlaki değerler ve hukuk normları"],
      dogru: 4,
      aciklama: "Girişimin etik temelleri **ahlaki değerler ve hukuk normları**dır.",
    },
    {
      id: "u7-k06", no: 6, kavram: "u7-ilkeler",
      soru: "“Girişimcinin öngörülebilir olması” aşağıdaki etik ilkelerden hangisiyle açıklanmaktadır?",
      secenekler: ["Güvenilirlik", "Dürüstlük", "Sorumluluk bilinci", "Adil olma", "Kaynakları etkin kullanma"],
      dogru: 0,
      aciklama: "**Güvenilirlik**, girişimcinin öngörülebilir olmasıdır; bu, yenilik yapmayacağı anlamına gelmez.",
    },
    {
      id: "u7-k07", no: 7, kavram: "u7-ilkeler",
      soru: "“Bir girişimci çabası olmaksızın marka, ambalaj, reklam ve benzeri yollarla haksız rekabete yol açacak eylemlere girişebilir.” ifadesi aşağıdaki etik ilkelerden hangisine ters düşmektedir?",
      secenekler: ["Sorumluluk bilinci", "Dürüstlük", "Kaynakları etkin kullanma", "Güvenilirlik", "Adil olma"],
      dogru: 1,
      aciklama: "Emek vermeden marka, ambalaj ya da reklamla haksız rekabete girişmek **dürüstlükten** uzaklaşmaktır.",
    },
    {
      id: "u7-k08", no: 8, cikmis: 22, kavram: "u7-ilkeler",
      soru: "Girişimcinin tedarikçisine ve çalışanına emeğinin karşılığını zamanında ödeme sorumluluğu aşağıdaki etik ilkelerden hangisiyle açıklanmaktadır?",
      secenekler: ["Güvenilirlik", "Sorumluluk bilinci", "Adil olma", "Dürüstlük", "Kaynakları etkin kullanma"],
      dogru: 2,
      aciklama: "Emeğin karşılığını zamanında ödemek **adil olma** ilkesidir.",
    },
    {
      id: "u7-k09", no: 9, kavram: "u7-ilkeler",
      soru: "Her türlü girdi özelliği olan hammadde, mamul, yarı mamul, insan kaynağı ve zamanın verimli kullanılması aşağıdaki etik ilkelerden hangisinin kapsamındadır?",
      secenekler: ["Adil olma", "Güvenilirlik", "Sorumluluk bilinci", "Kaynakları etkin kullanma", "Dürüstlük"],
      dogru: 3,
      aciklama: "Girdilerin ve zamanın verimli kullanılması **kaynakları etkin kullanma** ilkesidir.",
    },
    {
      id: "u7-k10", no: 10, kavram: "u7-liderlik",
      soru: "Etik öğrenmenin bir parçası olan, işletme içi ve dışına yönelik her türlü ilişkiye yol göstermesi beklenen rehbere ne ad verilir?",
      secenekler: ["Örgüt kültürü", "Sosyal sorumluluk", "Ahlaki bilinç", "İşletme kuralları", "Etik rehber"],
      dogru: 4,
      aciklama: "İşletme içi ve dışı ilişkilere yol gösteren yazılı rehber **etik rehber**dir.",
    },
  ]),

  ...turet(U, K, "u7-etik-ahlak", [
    {
      id: "u7-t-ethos", tip: "mcq", zorluk: 2,
      soru: "\"Etik\" kelimesi hangi Grekçe kelimeden türetilmiştir?",
      secenekler: ["Ethos", "Mos", "Logos", "Pathos"],
      dogru: 0,
      aciklama: "Etik, karakter ve alışkanlık anlamına gelen Grekçe **ethos**tan; moral ise Latince **mos**tan türetilmiştir.",
    },
    {
      id: "u7-t-mos", tip: "mcq", zorluk: 2,
      soru: "Latince \"moral\" kelimesinin kökü olan ve adet, alışkanlık, karakter anlamına gelen kelime hangisidir?",
      secenekler: ["Mos", "Ethos", "Logos", "Polis"],
      dogru: 0,
      aciklama: "Moral, Latince **mos** kelimesinden gelir.",
    },
    {
      id: "u7-t-olgu", tip: "tf", zorluk: 2,
      soru: "Kitaba göre olgusal olarak yaşanan şey \"etik\", bu olgunun araştırılması ise \"ahlak\" olarak adlandırılır.",
      dogru: false,
      aciklama: "Yanlış, tersidir: yaşanan olgu **ahlak**, onun araştırılması **etik**tir.",
    },
    {
      id: "u7-t-ayni-anlam", tip: "tf", zorluk: 1,
      soru: "Kitaba göre etik ve ahlak birbirinin yerine kullanılsa da farklı içeriğe sahip kavramlardır.",
      dogru: true,
      aciklama: "Doğru. Günlük hayatta eş anlamlı kullanılsalar da içerikleri farklıdır.",
    },
    {
      id: "u7-t-yazili", tip: "mcq", zorluk: 2,
      soru: "Kitaptaki özete göre ahlak nasıl bir kurallar setidir?",
      secenekler: ["Yazılı olmayan kurallar seti", "Yalnızca kanunlarla yazılmış kurallar", "Yalnızca şirket yönetmelikleri", "Uluslararası ticaret anlaşmaları"],
      dogru: 0,
      aciklama: "Ahlak, insan ilişkilerine rehberlik eden **yazılı olmayan** kurallar setidir; etik bunlara ilişkin değerlendirmelerin sözlü ve yazılı hale gelmesidir.",
    },
  ]),

  ...turet(U, K, "u7-sorumluluk", [
    {
      id: "u7-t-uc-sorumluluk", tip: "mcq", zorluk: 2,
      soru: "Kitapta girişimcinin sorumlulukları hangi üç başlıkta ele alınır?",
      secenekler: ["Bireysel, sosyal ve örnek olma sorumluluğu", "Vergi, sigorta ve muhasebe sorumluluğu", "Üretim, satış ve pazarlama sorumluluğu", "Yerel, ulusal ve küresel sorumluluk"],
      dogru: 0,
      aciklama: "Üç başlık: **bireysel sorumluluklar, sosyal sorumluluklar ve örnek olma sorumluluğu**.",
    },
    {
      id: "u7-t-ongorulebilir", tip: "tf", zorluk: 2,
      soru: "Kitaba göre bireysel sorumluluklara farkındalık güçlü olduğunda toplumsal hayat daha öngörülebilir hale gelir.",
      dogru: true,
      aciklama: "Doğru. Herkes bireysel sorumluluğunu yerine getirince grup ve toplum içindeki ilişkiler öngörülebilir olur.",
    },
    {
      id: "u7-t-ahilik", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre ülkemizde girişimcinin örnek olma sorumluluğunu daha da önemli kılan tarihi birikim hangisidir?",
      secenekler: ["Ahilik örgütlenmesi", "Lonca sistemi", "Kapitülasyonlar", "Tımar sistemi"],
      dogru: 0,
      aciklama: "Kitap **ahilik** örgütlenmesi birikimini, örnek olma sorumluluğunu güçlendiren bir zemin olarak anar.",
    },
    {
      id: "u7-t-kar-amaci", tip: "tf", zorluk: 2,
      soru: "Kitaba göre girişimin sorumluluklarıyla ilgili açıklamalar yalnızca kâr amaçlı girişimler için geçerlidir.",
      dogru: false,
      aciklama: "Yanlış. Her girişim bir kaynak kullanımı olduğu için açıklamalar kâr amacı olmayan girişimler için de geçerlidir.",
    },
  ]),

  ...turet(U, K, "u7-ilkeler", [
    {
      id: "u7-t-bes-ilke", tip: "mcq", zorluk: 2,
      soru: "Hangisi kitapta sayılan girişimcinin beş etik ilkesinden biri değildir?",
      secenekler: ["Kâr maksimizasyonu", "Güvenilirlik", "Dürüstlük", "Adil olma"],
      dogru: 0,
      aciklama: "Beş ilke: güvenilirlik, dürüstlük, sorumluluk bilinci, adil olma, kaynakları etkin kullanma. **Kâr maksimizasyonu** bir etik ilke değildir.",
    },
    {
      id: "u7-t-en-onemli", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre girişimcinin en önemli etik ilkelerinin başında hangisi gelir?",
      secenekler: ["Güvenilirlik", "Kaynakları etkin kullanma", "Sorumluluk bilinci", "Adil olma"],
      dogru: 0,
      aciklama: "Kitap **güvenilir olmayı** en önemli ilkelerin başında sayar; esnaf ve tüccarımızın \"emin\" olma özelliği buna örnektir.",
    },
    {
      id: "u7-t-tekel", tip: "tf", zorluk: 2,
      soru: "Kitaba göre girişimcinin pazarında tekel olması, dürüstlükten taviz vermesi için geçerli bir gerekçedir.",
      dogru: false,
      aciklama: "Yanlış. Doğal veya hukuki tekel olmak bile **dürüstlükten taviz vermenin gerekçesi olamaz**.",
    },
    {
      id: "u7-t-guven-yenilik", tip: "tf", zorluk: 2,
      soru: "Güvenilir olmak, girişimcinin ürün veya sunum biçiminde yenilik yapmaması anlamına gelir.",
      dogru: false,
      aciklama: "Yanlış. Güvenilir girişimci de yenilik yapabilir, rakiplerini şaşırtabilir; güvenilirlik öngörülebilir değerlere bağlı kalmaktır.",
    },
    {
      id: "u7-t-vergi", tip: "mcq", zorluk: 2,
      soru: "Vergi vermek ve çalışanlarla tedarikçilerin ödemelerini zamanında yapmak en çok hangi etik ilkeyle ilişkilidir?",
      secenekler: ["Adil olma", "Güvenilirlik", "Kaynakları etkin kullanma", "Dürüstlük"],
      dogru: 0,
      aciklama: "Kitap bu yükümlülükleri **adil olma** ilkesi altında anlatır.",
    },
  ]),

  ...turet(U, K, "u7-liderlik", [
    {
      id: "u7-t-etik-lider", tip: "mcq", zorluk: 2,
      soru: "Örnek olma sorumluluğunu işletmesinde ve sektöründe liderlikle taçlandıran girişimci nasıl anılır?",
      secenekler: ["Etik lider", "Seri girişimci", "Sosyal girişimci", "Melek yatırımcı"],
      dogru: 0,
      aciklama: "Örnek olma sorumluluğu liderlikle taçlanınca girişimci **etik lider** olarak anılır.",
    },
    {
      id: "u7-t-davranis", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre etik liderlikte en çok neye vurgu yapılmalıdır?",
      secenekler: ["Tutum ve davranışlara", "Yazılı yönetmeliklere", "Ceza sistemlerine", "Reklam kampanyalarına"],
      dogru: 0,
      aciklama: "Etik liderlikte sözlü veya yazılı kurallardan çok **tutum ve davranışlar** önemlidir; girişimci önce davranışlarıyla liderlik eder.",
    },
    {
      id: "u7-t-bulasma", tip: "tf", zorluk: 2,
      soru: "Kitaba göre küçük etik ihlaller önemsizdir ve başkalarının davranışını etkilemez.",
      dogru: false,
      aciklama: "Yanlış. Sahtekârlık sosyal bulaşma yoluyla yayılabilir; küçük ihlaller daha büyük kötü davranışların kabul edilebilir olduğu sinyalini verebilir.",
    },
  ]),
];
