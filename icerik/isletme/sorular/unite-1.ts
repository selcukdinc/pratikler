// 1. ünite (özetin 1. başlığı): ihtiyaç kavramı, Maslow'un hiyerarşisi,
// ihtiyaçların özellikleri, fayda, mallar ve hizmetler.

import { ozet, type Soru } from "./yardimci.ts";

const U = 1;

export const unite1: Soru[] = [
  ...ozet(U, "u1-ihtiyac", [
    {
      ad: "ihtiyac-tanim",
      soru: "Doğuştan var olan ya da sonradan ortaya çıkan, karşılandığında haz ve tatmin, karşılanmadığında acı ve üzüntü veren eksiklik duygusuna ne ad verilir?",
      secenekler: ["İhtiyaç", "Fayda", "Talep", "Tüketim", "Üretim"],
      aciklama: "Tanım **ihtiyaç** kavramına aittir. Fayda, mal ve hizmetlerin ihtiyacı gidermesiyle doğan tatmindir; talep ise satın alma gücüyle desteklenmiş istektir.",
    },
    {
      ad: "itici-guc",
      soru: "İnsanları ekonomik faaliyetlerde bulunmaya yönelten en temel itici güç aşağıdakilerden hangisidir?",
      secenekler: ["İhtiyaçlar", "Devlet teşvikleri", "Rekabet", "Teknolojik gelişmeler", "Vergi yükümlülükleri"],
      aciklama: "Özete göre insanları ekonomik faaliyete yönelten en temel güç **ihtiyaçlardır**; üretim de tüketim de ihtiyaçları karşılamak için yapılır.",
    },
    {
      ad: "ihtiyac-sonuc",
      soru: "İhtiyaç kavramına göre bir ihtiyaç karşılanmadığında birey ne hisseder?",
      secenekler: ["Acı, üzüntü ve ızdırap", "Haz ve mutluluk", "Tatmin ve doyum", "Kayıtsızlık", "Güven ve huzur"],
      aciklama: "Karşılanan ihtiyaç haz ve mutluluk (tatmin) verir; **karşılanmayan** ihtiyaç ise acı, üzüntü ve ızdırap verir.",
    },
  ]),

  ...ozet(U, "u1-maslow", [
    {
      ad: "maslow-en-alt",
      soru: "Maslow'un ihtiyaçlar hiyerarşisinde piramidin en alt basamağında hangi ihtiyaçlar yer alır?",
      secenekler: ["Fizyolojik ihtiyaçlar", "Güvenlik ihtiyaçları", "Sosyal ihtiyaçlar", "Saygı ihtiyacı", "Kendini gerçekleştirme ihtiyacı"],
      aciklama: "Yeme, içme, uyuma, nefes alma ve barınma gibi biyolojik olarak hayatta kalmayı sağlayan **fizyolojik ihtiyaçlar** piramidin en alt basamağıdır.",
    },
    {
      ad: "maslow-en-ust",
      soru: "Bireyin potansiyelini tam anlamıyla ortaya koyması, yaratıcılığını kullanması ve ideallerine ulaşması Maslow'un hangi basamağıdır?",
      secenekler: ["Kendini gerçekleştirme", "Saygı", "Sosyal", "Güvenlik", "Fizyolojik"],
      aciklama: "Piramidin en üstündeki **kendini gerçekleştirme** basamağı, potansiyeli tam olarak ortaya koymayı ve ideallere ulaşmayı anlatır.",
    },
    {
      ad: "maslow-sira",
      zorluk: 2,
      soru: "Maslow'un hiyerarşisinde basamakların alttan üste doğru sıralaması hangisinde doğru verilmiştir?",
      secenekler: [
        "Fizyolojik → Güvenlik → Sosyal → Saygı → Kendini gerçekleştirme",
        "Fizyolojik → Sosyal → Güvenlik → Saygı → Kendini gerçekleştirme",
        "Güvenlik → Fizyolojik → Sosyal → Saygı → Kendini gerçekleştirme",
        "Fizyolojik → Güvenlik → Saygı → Sosyal → Kendini gerçekleştirme",
        "Sosyal → Güvenlik → Fizyolojik → Saygı → Kendini gerçekleştirme",
      ],
      aciklama: "Maslow (1943) beş basamağı alttan üste şöyle sıralar: **fizyolojik, güvenlik, sosyal (sevgi ve aidiyet), saygı (itibar), kendini gerçekleştirme**.",
    },
    {
      ad: "maslow-guvenlik",
      soru: "İş güvencesi, emeklilik ve sağlık güvencesi isteği Maslow'un hangi basamağına örnektir?",
      secenekler: ["Güvenlik ihtiyaçları", "Fizyolojik ihtiyaçlar", "Sosyal ihtiyaçlar", "Saygı ihtiyacı", "Kendini gerçekleştirme ihtiyacı"],
      aciklama: "Can ve mal güvenliği, iş güvencesi, emeklilik ve sağlık güvencesi gibi geleceğe güvenle bakabilme arzuları **güvenlik ihtiyaçlarıdır**.",
    },
    {
      ad: "maslow-sosyal",
      soru: "Bir gruba mensup olma, arkadaşlık kurma ve toplum tarafından kabul görme isteği Maslow'un hangi basamağındadır?",
      secenekler: ["Sosyal ihtiyaçlar", "Saygı ihtiyacı", "Güvenlik ihtiyaçları", "Fizyolojik ihtiyaçlar", "Kendini gerçekleştirme ihtiyacı"],
      aciklama: "Sevgi ve aidiyet olarak da anılan **sosyal ihtiyaçlar**; gruba ait olmayı, sevmeyi, sevilmeyi ve toplumca kabul görmeyi kapsar.",
    },
    {
      ad: "maslow-saygi",
      soru: "Başarı, statü, tanınma ve başkaları tarafından takdir edilme isteği Maslow'un hangi basamağındadır?",
      secenekler: ["Saygı ihtiyacı", "Sosyal ihtiyaçlar", "Güvenlik ihtiyaçları", "Kendini gerçekleştirme ihtiyacı", "Fizyolojik ihtiyaçlar"],
      aciklama: "Başarı, statü, tanınma, kendine güven ve takdir görme **saygı (itibar)** ihtiyacının parçalarıdır; sosyal basamağın bir üstündedir.",
    },
    {
      ad: "maslow-ilke",
      zorluk: 2,
      soru: "Maslow'un hiyerarşisinin temel varsayımı aşağıdakilerden hangisidir?",
      secenekler: [
        "Alt basamak belirli bir doyuma ulaşmadan üst basamağa yönelinmez",
        "Bütün basamaklardaki ihtiyaçlar aynı anda ve eşit şiddette hissedilir",
        "Üst basamaktaki ihtiyaçlar karşılanınca alt basamaklar ortadan kalkar",
        "İnsan önce kendini gerçekleştirme ihtiyacını karşılamaya çalışır",
        "Basamakların sırası kişiden kişiye rastgele değişir",
      ],
      aciklama: "Maslow'a göre birey, **alt basamaktaki ihtiyaçlarını belirli bir doyuma ulaştırmadan** bir üst basamaktaki ihtiyacın tatminine yönelmez.",
    },
    {
      ad: "maslow-yil",
      soru: "İnsan ihtiyaçlarını beş kademeli bir piramit şeklinde sıralayan Abraham H. Maslow bu sınıflandırmayı hangi yıl ortaya koymuştur?",
      secenekler: ["1943", "1911", "1959", "1969", "1987"],
      aciklama: "Özete göre Abraham H. Maslow ihtiyaçlar hiyerarşisini **1943** yılında ortaya koymuştur.",
    },
  ]),

  ...ozet(U, "u1-ozellik", [
    {
      ad: "sonsuzluk",
      soru: "\"Bir ihtiyaç karşılandığında yerine yenisi ortaya çıkar.\" ifadesi ihtiyaçların hangi özelliğini anlatır?",
      secenekler: ["Sonsuzluk ve çeşitlilik", "İkame edilebilirlik", "Şiddet derecesi", "Tekrarlanma", "Azalan marjinal fayda"],
      aciklama: "İnsan ihtiyaçları sayıca sınırsızdır; biri karşılanınca yenisi doğar. Bu, **sonsuzluk ve çeşitlilik** özelliğidir.",
    },
    {
      ad: "ikame",
      soru: "Çay içmek isteyen birinin çay yerine kahve içmesi ihtiyaçların hangi özelliğine örnektir?",
      secenekler: ["İkame edilebilirlik", "Tekrarlanma", "Şiddet derecesi", "Sonsuzluk", "Kendini gerçekleştirme"],
      aciklama: "Bir ihtiyacın farklı mal ya da hizmetlerle giderilebilmesi **ikame edilebilirliktir**; özetteki örnek de çay yerine kahvedir.",
    },
    {
      ad: "marjinal",
      zorluk: 2,
      soru: "Susamış bir kişinin içtiği her yeni bardak suyun ona verdiği tatminin giderek azalması hangi kavramla açıklanır?",
      secenekler: ["Azalan marjinal fayda", "İkame edilebilirlik", "Tekrarlanma", "Sonsuzluk ve çeşitlilik", "Ölçek ekonomisi"],
      aciklama: "İhtiyaç karşılandıkça şiddeti azalır; bu, şiddet derecesi özelliğinin sonucu olan **azalan marjinal fayda**dır.",
    },
    {
      ad: "tekrarlanma",
      soru: "Öğle yemeği yiyen birinin akşam yeniden acıkması ihtiyaçların hangi özelliğine örnektir?",
      secenekler: ["Tekrarlanma", "İkame edilebilirlik", "Sonsuzluk ve çeşitlilik", "Azalan marjinal fayda", "Kıtlık"],
      aciklama: "Karşılanan ihtiyaçlar, özellikle fizyolojik olanlar, belirli aralıklarla yeniden ortaya çıkar: **tekrarlanma**.",
    },
    {
      ad: "siddet",
      soru: "İhtiyaçların şiddet derecesi özelliğine göre aşağıdakilerden hangisi doğrudur?",
      secenekler: [
        "Açlık ve susuzluk gibi zorunlu ihtiyaçların şiddeti daha yüksektir",
        "Bütün ihtiyaçlar aynı şiddette hissedilir",
        "İhtiyaç karşılandıkça şiddeti artar",
        "Lüks ihtiyaçların şiddeti zorunlu ihtiyaçlardan yüksektir",
        "Şiddet derecesi yalnızca hizmetler için geçerlidir",
      ],
      aciklama: "Her ihtiyacın hissedilme şiddeti farklıdır; **zorunlu ihtiyaçların** (açlık, susuzluk) şiddeti daha yüksektir ve ihtiyaç karşılandıkça şiddet azalır.",
    },
  ]),

  ...ozet(U, "u1-mal-hizmet", [
    {
      ad: "fayda",
      soru: "Mal ve hizmetlerin ihtiyaçları gidermesiyle sağlanan tatmin duygusuna ne ad verilir?",
      secenekler: ["Fayda", "Kâr", "Verimlilik", "Talep", "Değer"],
      aciklama: "İhtiyaçları giderme özelliğine sahip mal ve hizmetlerin sağladığı tatmin duygusu **fayda** (utility) olarak adlandırılır.",
    },
    {
      ad: "serbest-mal",
      soru: "Doğada bol bulunan, elde edilmesi çaba ve bedel gerektirmeyen hava ve güneş ışığı gibi mallara ne ad verilir?",
      secenekler: ["Serbest mallar", "Ekonomik mallar", "Tüketim malları", "Sermaye malları", "Dayanıklı mallar"],
      aciklama: "Elde edilişine göre mallar ikiye ayrılır: bol ve bedelsiz olanlar **serbest mallar**, çaba ve bedel gerektiren kıt olanlar ekonomik mallardır.",
    },
    {
      ad: "ekonomik-mal",
      soru: "Elde edilmesi için çaba, üretim ve bedel ödenmesi gereken kıt mallar hangisidir?",
      secenekler: ["Ekonomik mallar", "Serbest mallar", "Kamusal hizmetler", "Soyut araçlar", "Doğal mallar"],
      aciklama: "Kıt oldukları için üretilmesi ve bedel ödenmesi gereken mallar **ekonomik mallardır**; ekonominin konusu da bu kıt mallardır.",
    },
    {
      ad: "sermaye-mali",
      soru: "Bir mobilya fabrikasının kullandığı kesim makinesi kullanım amacına göre hangi mal grubuna girer?",
      secenekler: ["Sermaye malı", "Tüketim malı", "Serbest mal", "Dayanıksız tüketim malı", "Hizmet"],
      aciklama: "Başka malların üretiminde kullanılan makine, teçhizat ve hammadde **üretim (sermaye) mallarıdır**; nihai tüketicinin ihtiyacını doğrudan karşılayan mallar ise tüketim mallarıdır.",
    },
    {
      ad: "hizmet-ozellik",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi hizmetlerin özelliklerinden biri değildir?",
      secenekler: [
        "Stoklanabilir olmaları",
        "Fiziksel varlıklarının olmaması",
        "Üretildikleri anda tüketilmeleri",
        "Mülkiyet devrinin söz konusu olmaması",
        "Soyut araçlar olmaları",
      ],
      aciklama: "Hizmetler soyuttur, fiziksel varlıkları yoktur, üretildikleri anda tüketilir, mülkiyetleri devredilmez ve **depolanamaz (stoklanamaz)**. Stoklanabilirlik mallara özgüdür.",
    },
    {
      ad: "mal-ozellik",
      soru: "Fiziksel varlığı olan, dokunulabilen ve stoklanabilen, ihtiyaç karşılayan araçlara ne ad verilir?",
      secenekler: ["Mal", "Hizmet", "Fayda", "Emek", "Girişim"],
      aciklama: "İhtiyacı karşılayan somut araçlar **mallardır**: fiziksel varlıkları vardır, dokunulabilir ve stoklanabilirler. Hizmetler ise soyut araçlardır.",
    },
    {
      ad: "hizmet-ornek",
      soru: "Aşağıdakilerden hangisi bir hizmettir?",
      secenekler: ["Bankacılık", "Ekmek", "Buzdolabı", "Pamuk ipliği", "Torna tezgâhı"],
      aciklama: "Özetteki hizmet örnekleri eğitim, sağlık, ulaşım, **bankacılık** ve turizmdir. Diğerleri fiziksel varlığı olan mallardır.",
    },
  ]),
];
