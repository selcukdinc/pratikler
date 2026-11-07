// 6. ünite (özetin 6. başlığı): tek kişi işletmesi, adi şirket, şahıs ve
// sermaye şirketleri, kolektif, komandit, anonim, limited, SPKŞ, kooperatif.
// Ortakların sorumluluk derecesi (birinci/ikinci dereceden) özetteki gibidir.

import { ozet, type Soru } from "./yardimci.ts";

const U = 6;

export const unite6: Soru[] = [
  ...ozet(U, "u6-tek-kisi", [
    {
      ad: "sorumluluk",
      soru: "Tek kişi işletmesinin sahibi işletmenin borçlarından dolayı alacaklılara karşı nasıl sorumludur?",
      secenekler: [
        "Bütün kişisel malvarlığıyla sınırsız",
        "Yalnızca koyduğu sermaye kadar",
        "Hiçbir şekilde sorumlu değildir",
        "Yalnızca işletmenin kârı kadar",
        "Yalnızca kamu borçlarından",
      ],
      aciklama: "Tek kişi işletmesinin sahibi kârın tamamına sahiptir ama borçlardan **bütün kişisel malvarlığıyla sınırsız** sorumludur.",
    },
    {
      ad: "ozellik",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi tek kişi işletmesinin özelliklerinden biri değildir?",
      secenekler: [
        "Kuruluş için asgari sermaye şartı aranması",
        "Kuruluşunun ve sona erdirilmesinin kolay olması",
        "Kararların tek başına alınması",
        "Kârın tamamının işletme sahibine ait olması",
        "Sahibinin tek bir gerçek kişi olması",
      ],
      aciklama: "Tek kişi işletmesinde **sermaye alt sınırı yoktur**. Kuruluşu ve kapanışı kolaydır, kararları ve kârı sahibine aittir.",
    },
  ]),

  ...ozet(U, "u6-sahis-sermaye", [
    {
      ad: "uce-ayrim",
      soru: "Özel işletmeler hukuki statülerine göre hangi üç gruba ayrılır?",
      secenekler: [
        "Tek kişi işletmeleri, şirketler ve kooperatifler",
        "Mikro, küçük ve orta işletmeler",
        "Sanayi, ticaret ve hizmet işletmeleri",
        "Kamu, özel ve karma işletmeler",
        "Kartel, tröst ve holding",
      ],
      aciklama: "Hukuki yapıya göre özel işletmeler **tek kişi işletmeleri, şirketler (ortaklıklar) ve kooperatifler** olarak üçe ayrılır.",
    },
    {
      ad: "adi-sirket",
      soru: "Borçlar Kanunu'na tabi olan, tüzel kişiliği bulunmayan ve ticaret unvanı kullanamayan ortaklık türü hangisidir?",
      secenekler: ["Adi şirket", "Kolektif şirket", "Limited şirket", "Anonim şirket", "Kooperatif"],
      aciklama: "**Adi şirket** Borçlar Kanunu'na tabidir, tüzel kişiliği yoktur ve ticaret unvanı kullanamaz. Ticaret şirketlerinin hepsi tüzel kişiliğe sahiptir.",
    },
    {
      ad: "adi-sorumluluk",
      zorluk: 2,
      soru: "Özete göre adi şirkette ortaklar şirket borçlarından nasıl sorumludur?",
      secenekler: [
        "Birinci dereceden, sınırsız ve müteselsilen",
        "İkinci dereceden, sınırsız ve müteselsilen",
        "Yalnızca taahhüt ettikleri sermaye kadar",
        "Yalnızca şirketin malvarlığıyla",
        "Hiçbir şekilde sorumlu değillerdir",
      ],
      aciklama: "Adi şirkette ortaklar **birinci dereceden**, sınırsız ve zincirleme sorumludur; kolektif şirkette ise sorumluluk ikinci derecedendir.",
    },
    {
      ad: "dayanak",
      soru: "Şahıs şirketlerinde temel dayanak nedir?",
      secenekler: [
        "Ortakların kişisel itibarı, güveni ve emeği",
        "Şirkete getirilen sermaye payının büyüklüğü",
        "Halka arz edilen hisse senetleri",
        "Devletin sağladığı vergi teşvikleri",
        "Profesyonel yönetim organlarının yapısı",
      ],
      aciklama: "Şahıs şirketlerinde **ortakların kişisel itibarı, güveni ve emeği** ön plandadır; sermaye şirketlerinde ise getirilen sermaye payı ön plandadır.",
    },
    {
      ad: "pay-devri",
      zorluk: 2,
      soru: "Şahıs şirketleri ile sermaye şirketlerinin pay devri açısından karşılaştırması hangisinde doğrudur?",
      secenekler: [
        "Şahıs şirketlerinde oybirliği gerektiği için zor, sermaye şirketlerinde serbest ve kolaydır",
        "Her ikisinde de pay devri serbest ve kolaydır",
        "Şahıs şirketlerinde kolay, sermaye şirketlerinde oybirliği gerektiği için zordur",
        "Her ikisinde de pay devri yasaktır",
        "Yalnızca kooperatiflerde pay devri yapılabilir",
      ],
      aciklama: "Şahıs şirketlerinde payın devri **bütün ortakların oybirliğine** bağlıdır; sermaye şirketlerinde, özellikle A.Ş.'de hisse devri **serbesttir**.",
    },
    {
      ad: "sureklilik",
      soru: "Bir ortağın ölümü ya da iflası hangi şirket grubunu sona erdirebilir?",
      secenekler: ["Şahıs şirketlerini", "Sermaye şirketlerini", "Anonim şirketleri", "Limited şirketleri", "Holdingleri"],
      aciklama: "**Şahıs şirketlerinde** bir ortağın ölümü ya da iflası şirketi sona erdirebilir; sermaye şirketlerinde ise kurumsal süreklilik vardır.",
    },
    {
      ad: "sermaye-sorumluluk",
      soru: "Sermaye şirketlerinde ortaklar şirket borçlarından nasıl sorumludur?",
      secenekler: [
        "Yalnızca taahhüt ettikleri sermaye payıyla sınırlı",
        "Bütün kişisel malvarlıklarıyla sınırsız",
        "Birinci dereceden ve müteselsilen",
        "Şirket yöneticileriyle birlikte zincirleme",
        "Yalnızca kâr payları kadar ve süresiz",
      ],
      aciklama: "Sermaye şirketlerinde ortaklar **yalnızca taahhüt ettikleri sermaye payıyla sınırlı** sorumludur; kişisel malvarlıklarına gidilemez.",
    },
    {
      ad: "turler",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi bir şahıs şirketidir?",
      secenekler: ["Kolektif şirket", "Anonim şirket", "Limited şirket", "Sermayesi paylara bölünmüş komandit şirket", "Kooperatif"],
      aciklama: "Şahıs şirketleri **kolektif** ve adi komandit şirkettir. Anonim, limited ve SPKŞ sermaye şirketidir; kooperatif ayrı bir hukuki yapıdır.",
    },
  ]),

  ...ozet(U, "u6-kolektif-komandit", [
    {
      ad: "kolektif-ortak",
      soru: "Kolektif şirketin ortakları kimlerden oluşabilir?",
      secenekler: ["Yalnızca gerçek kişiler", "Yalnızca tüzel kişiler", "Gerçek ve tüzel kişiler", "Yalnızca kamu kuruluşları", "Yalnızca yabancı yatırımcılar"],
      aciklama: "Kolektif şirket **yalnızca gerçek kişiler** arasında kurulur; tüzel kişiler ortak olamaz.",
    },
    {
      ad: "kolektif-sorumluluk",
      zorluk: 2,
      soru: "Özete göre kolektif şirkette ortakların şirket borçlarından sorumluluğu nasıldır?",
      secenekler: [
        "İkinci dereceden, sınırsız ve müteselsil",
        "Birinci dereceden ve sınırlı",
        "Yalnızca koydukları sermaye kadar",
        "Hiçbir sorumlulukları yoktur",
        "Yalnızca kamu borçlarından sınırlı",
      ],
      aciklama: "Kolektif şirkette ortakların tamamı **ikinci dereceden, sınırsız ve müteselsilen** sorumludur: alacaklı önce şirkete başvurur.",
    },
    {
      ad: "komandite",
      soru: "Komandit şirkette sorumluluğu sınırsız olan, şirketi yöneten ve temsil eden ortak hangisidir?",
      secenekler: ["Komandite ortak", "Komanditer ortak", "Pay sahibi", "Müdür", "Denetçi"],
      aciklama: "**Komandite ortak** sınırsız sorumludur, şirketi yönetir ve temsil eder; yalnızca gerçek kişi olabilir.",
    },
    {
      ad: "komanditer",
      zorluk: 2,
      soru: "Komanditer ortak için aşağıdakilerden hangisi doğrudur?",
      secenekler: [
        "Sorumluluğu koyduğu sermayeyle sınırlıdır ve yönetime katılamaz",
        "Sorumluluğu sınırsızdır ve şirketi temsil eder",
        "Yalnızca gerçek kişi olabilir ve şirketi yönetir",
        "Şirket borçlarından birinci dereceden sorumludur",
        "Ortaklık payını oybirliği olmadan devredebilir",
      ],
      aciklama: "**Komanditer ortak** sermayesiyle sınırlı sorumludur, gerçek ya da tüzel kişi olabilir ve **yönetime katılamaz**.",
    },
    {
      ad: "komandite-kisi",
      zorluk: 2,
      soru: "Komandit şirkette tüzel kişiler hangi tür ortak olabilir?",
      secenekler: ["Yalnızca komanditer ortak", "Yalnızca komandite ortak", "Hem komandite hem komanditer ortak", "Hiçbir tür ortak olamaz", "Yalnızca yönetici ortak"],
      aciklama: "Komandite ortak **yalnızca gerçek kişi** olabilir; tüzel kişiler ancak **komanditer** (sınırlı sorumlu) ortak olabilir.",
    },
    {
      ad: "kolektif-sermaye",
      soru: "Kolektif şirket kurulurken asgari sermaye şartı için hangisi doğrudur?",
      secenekler: ["Asgari sermaye şartı yoktur", "En az 50.000 TL gerekir", "Sermaye paylara bölünmelidir", "Sermayenin yarısı kamuya ait olmalıdır", "Sermaye halka arz edilmelidir"],
      aciklama: "Özete göre kolektif şirkette **asgari sermaye şartı yoktur**.",
    },
  ]),

  ...ozet(U, "u6-as-ltd", [
    {
      ad: "as-tanim",
      soru: "Sermayesi belirli ve paylara bölünmüş olan, borçlarından yalnız malvarlığıyla sorumlu şirket hangisidir?",
      secenekler: ["Anonim şirket", "Kolektif şirket", "Adi şirket", "Komandit şirket", "Kooperatif"],
      aciklama: "**Anonim şirket**, sermayesi paylara (hisse senetlerine) bölünmüş ve borçlarından yalnız kendi malvarlığıyla sorumlu sermaye şirketidir.",
    },
    {
      ad: "as-organ",
      soru: "Anonim şirketin zorunlu organları hangileridir?",
      secenekler: ["Genel kurul ve yönetim kurulu", "Genel kurul ve müdürler", "Yönetim kurulu ve denetim kurulu", "Genel kurul, yönetim kurulu ve denetim kurulu", "Müdürler kurulu ve denetçi"],
      aciklama: "A.Ş.'nin zorunlu organları **genel kurul** (karar) ve **yönetim kuruludur** (yürütme ve temsil). Müdürler limited şirkete, denetim kurulu kooperatife özgüdür.",
    },
    {
      ad: "ltd-ortak",
      soru: "Limited şirkette ortak sayısı için hangisi doğrudur?",
      secenekler: ["En az 1, en fazla 50", "En az 2, en fazla 20", "En az 7, üst sınır yok", "En az 5, en fazla 100", "Yalnızca 1"],
      aciklama: "Limited şirket bir ya da daha çok gerçek ya da tüzel kişiyle kurulur; ortak sayısı **en az 1, en fazla 50**'dir.",
    },
    {
      ad: "ltd-yasak",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi limited şirketin yapamayacağı faaliyetlerden biridir?",
      secenekler: ["Bankacılık yapmak", "Ticaret unvanı kullanmak", "Tüzel kişiyi ortak almak", "Tek ortakla kurulmak", "Genel kurul toplamak"],
      aciklama: "Limited şirketler **bankacılık ve sigortacılık yapamaz** ve halka açılamaz. Ticaret unvanı kullanabilir, tek ortakla ve tüzel kişi ortakla kurulabilir.",
    },
    {
      ad: "ltd-organ",
      soru: "Limited şirketin zorunlu organları hangileridir?",
      secenekler: ["Genel kurul ve müdürler", "Genel kurul ve yönetim kurulu", "Yönetim kurulu ve denetim kurulu", "Komandite ortaklar", "Denetim kurulu ve müdürler"],
      aciklama: "Limited şirketin zorunlu organları **genel kurul ve müdürler** (müdürler kurulu) olarak verilir.",
    },
    {
      ad: "ltd-sorumluluk",
      zorluk: 2,
      soru: "Limited şirket ortaklarının sorumluluğu için özetteki ifade hangisidir?",
      secenekler: [
        "Kamu borçları dışında şirket borçlarından sorumlu değildir, yalnızca esas sermaye payını öder",
        "Şirket borçlarından bütün malvarlığıyla sınırsız sorumludur",
        "Şirket borçlarından birinci dereceden müteselsil sorumludur",
        "Yalnızca kamu borçlarından muaftır, diğer borçlardan sınırsız sorumludur",
        "Ortak sayısı arttıkça sorumluluğu da sınırsız hale gelir",
      ],
      aciklama: "Limited şirket ortakları şirket borçlarından sorumlu değildir, **kamu borçları hariç**; yalnızca taahhüt ettikleri esas sermaye payını ödemekle yükümlüdür.",
    },
    {
      ad: "as-tek-ortak",
      soru: "Anonim şirket için aşağıdakilerden hangisi yanlıştır?",
      secenekler: [
        "En az iki ortakla kurulabilir",
        "Halka açılabilir",
        "Hisse senedi ve tahvil ihraç edebilir",
        "Ortakları yalnızca taahhüt ettikleri payla sorumludur",
        "Tüzel kişi ortak olabilir",
      ],
      aciklama: "Özete göre A.Ş. **tek ortakla** (gerçek ya da tüzel kişi) kurulabilir; iki ortak şartı yoktur. Halka açılabilir, hisse senedi ve tahvil ihraç edebilir.",
    },
    {
      ad: "halka-acik",
      soru: "Halka açılarak hisse senedi ve tahvil ihraç edebilen şirket türü hangisidir?",
      secenekler: ["Anonim şirket", "Limited şirket", "Kolektif şirket", "Adi şirket", "Tek kişi işletmesi"],
      aciklama: "**Anonim şirket** halka açılabilir, hisse senedi ve tahvil ihraç edebilir; limited şirket halka açılamaz.",
    },
    {
      ad: "spks",
      zorluk: 3,
      soru: "Sermayesi paylara bölünen, ortaklarından bir ya da birkaçının kolektif şirket ortağı gibi sınırsız, diğerlerinin anonim şirket pay sahibi gibi sınırlı sorumlu olduğu şirket hangisidir?",
      secenekler: ["Sermayesi paylara bölünmüş komandit şirket", "Adi komandit şirket", "Kolektif şirket", "Limited şirket", "Paylara bölünmüş sermayeli kolektif şirket"],
      aciklama: "Bu, sermaye şirketleri arasında sayılan **sermayesi paylara bölünmüş komandit şirkettir** (SPKŞ). Adi komandit şirketin sermayesi paylara bölünmez ve şahıs şirketidir.",
    },
  ]),

  ...ozet(U, "u6-kooperatif", [
    {
      ad: "kanun",
      zorluk: 2,
      soru: "Türkiye'de kooperatifler hangi kanunla düzenlenmiştir?",
      secenekler: ["1163 sayılı Kooperatifler Kanunu", "Türk Ticaret Kanunu", "Borçlar Kanunu", "İş Kanunu", "Rekabet Kanunu"],
      aciklama: "Kooperatifler 24.04.1969 tarihli ve **1163 sayılı Kooperatifler Kanunu** ile düzenlenmiştir.",
    },
    {
      ad: "ortak-sayi",
      soru: "Bir kooperatif en az kaç ortakla kurulur?",
      secenekler: ["7", "1", "2", "5", "50"],
      aciklama: "Kooperatifler **en az 7 ortakla** kurulur.",
    },
    {
      ad: "amac",
      soru: "Kooperatiflerin temel amacı hangisidir?",
      secenekler: [
        "Ortaklarına maliyetine mal ve hizmet sunmak",
        "Kârı en yüksek düzeye çıkarmak",
        "Piyasada tekel kurmak",
        "Hisse senedi ihraç ederek büyümek",
        "Rakip işletmeleri satın almak",
      ],
      aciklama: "Kooperatifin amacı kâr maksimizasyonu değil, karşılıklı yardım ve dayanışmayla **ortaklarına maliyetine mal ve hizmet sunmaktır**.",
    },
    {
      ad: "organ",
      zorluk: 2,
      soru: "Kooperatiflerin zorunlu organları hangileridir?",
      secenekler: [
        "Genel kurul, yönetim kurulu ve denetim kurulu",
        "Genel kurul ve müdürler",
        "Genel kurul ve yönetim kurulu",
        "Yönetim kurulu ve komandite ortaklar",
        "Müdürler kurulu ve denetim kurulu",
      ],
      aciklama: "Kooperatifin üç zorunlu organı vardır: **genel kurul, yönetim kurulu ve denetim kurulu**.",
    },
    {
      ad: "degisir",
      soru: "Kooperatiflerin ortaklık ve sermaye yapısı için özette hangi ifade kullanılır?",
      secenekler: ["Değişir ortaklı ve değişir sermayeli", "Sabit ortaklı ve sabit sermayeli", "Tek ortaklı ve paylara bölünmüş sermayeli", "Sınırsız sorumlu ortaklı", "Kamu sermayeli"],
      aciklama: "Kooperatifler tüzel kişiliğe sahip, **değişir ortaklı ve değişir sermayeli** ortaklıklardır.",
    },
  ]),
];
