// 7. ünite (özetin 7. başlığı): büyüme; iç büyüme (yatay, dikey, çapraz) ve
// dış büyüme (birleşme-devralma, ortak girişim, stratejik ittifak, lisans,
// franchising). Yatay büyümenin üç yolunun adları özetteki gibidir.

import { ozet, type Soru } from "./yardimci.ts";

const U = 7;

export const unite7: Soru[] = [
  ...ozet(U, "u7-ic-dis", [
    {
      ad: "ic-buyume",
      soru: "İşletmenin dağıtılmayan kârları, sermaye artırımı ya da borçlanmayla kendi bünyesinde yeni yatırımlar yaparak kapasitesini artırmasına ne ad verilir?",
      secenekler: ["İç büyüme", "Dış büyüme", "Birleşme", "Devralma", "Ortak girişim"],
      aciklama: "Kendi kaynaklarıyla kendi bünyesinde büyümek **iç (organik) büyümedir**. Başka işletmelerle birleşme ya da satın alma dış büyümedir.",
    },
    {
      ad: "dis-buyume",
      soru: "İşletmenin başka işletmelerle birleşmesi, onları satın alması ya da stratejik ortaklıklar kurmasıyla hızlı büyümesine ne ad verilir?",
      secenekler: ["Dış büyüme", "İç büyüme", "Yatay büyüme", "Pazara nüfuz etme", "Ürün farklılaştırma"],
      aciklama: "Başka işletmelerle birleşme, satın alma ya da ortaklık yoluyla büyüme **dış (inorganik) büyümedir**.",
    },
    {
      ad: "inorganik",
      zorluk: 2,
      soru: "Özete göre \"organik büyüme\" ve \"inorganik büyüme\" sırasıyla hangi büyüme şekillerinin diğer adlarıdır?",
      secenekler: ["İç büyüme ve dış büyüme", "Dış büyüme ve iç büyüme", "Yatay büyüme ve dikey büyüme", "Dikey büyüme ve çapraz büyüme", "Çapraz büyüme ve yatay büyüme"],
      aciklama: "İç büyüme **organik**, birleşme ve satın almalarla olan dış büyüme **inorganik** büyüme olarak da anılır.",
    },
  ]),

  ...ozet(U, "u7-yatay", [
    {
      ad: "yatay-tanim",
      soru: "İşletmenin aynı sektörde ve aynı üretim aşamasında kalarak kapasitesini ve satışlarını artırmasına ne ad verilir?",
      secenekler: ["Yatay büyüme", "Dikey büyüme", "Çapraz büyüme", "Geriye doğru bütünleşme", "Konglomera büyüme"],
      aciklama: "Mevcut faaliyet alanında, aynı aşamada kalarak büyümek **yatay büyümedir**.",
    },
    {
      ad: "nufuz",
      soru: "Mevcut ürünün mevcut pazarda tutundurma ve fiyat çabalarıyla daha fazla satılması hangi yatay büyüme yoludur?",
      secenekler: ["Pazara nüfuz etme", "Pazar geliştirme", "Ürün farklılaştırma", "Çapraz büyüme", "İleriye doğru büyüme"],
      aciklama: "Aynı ürünü aynı pazarda daha çok satmak **pazara nüfuz etme (derinleşme)** yoludur.",
    },
    {
      ad: "pazar-gelistirme",
      soru: "Bir süt ürünleri şirketinin mevcut yoğurdunu ilk kez başka bir bölgede satmaya başlaması özete göre hangi yatay büyüme yoludur?",
      secenekler: ["Pazar geliştirme", "Pazara nüfuz etme", "Ürün farklılaştırma", "Geriye doğru dikey büyüme", "Çapraz büyüme"],
      aciklama: "Mevcut ürünü **yeni coğrafi bölgelere** ya da yeni müşteri gruplarına satmak **pazar geliştirmedir**.",
    },
    {
      ad: "urun-farklilastirma",
      soru: "Bir telefon üreticisinin mevcut müşterilerine aynı ürünün farklı renk ve kalitede yeni modellerini sunması hangi yatay büyüme yoludur?",
      secenekler: ["Ürün farklılaştırma", "Pazar geliştirme", "Pazara nüfuz etme", "İleriye doğru dikey büyüme", "Ortak girişim"],
      aciklama: "Mevcut pazara mevcut ürünün yeni modellerini ve çeşitlerini sunmak **ürün farklılaştırma (geliştirme)** yoludur.",
    },
    {
      ad: "uc-yol",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi özette yatay büyümenin üç yolundan biri değildir?",
      secenekler: ["Geriye doğru bütünleşme", "Pazara nüfuz etme", "Ürün farklılaştırma", "Pazar geliştirme", "Hiçbiri, hepsi yatay büyüme yoludur"],
      dogru: 0,
      sabit: true,
      aciklama: "Yatay büyümenin üç yolu pazara nüfuz etme, ürün farklılaştırma ve pazar geliştirmedir. **Geriye doğru bütünleşme** dikey büyümedir.",
    },
  ]),

  ...ozet(U, "u7-dikey", [
    {
      ad: "geriye",
      soru: "Bir salça fabrikasının kendi domates tarlalarını kurması hangi büyüme türüdür?",
      secenekler: ["Geriye doğru dikey büyüme", "İleriye doğru dikey büyüme", "Yatay büyüme", "Çapraz büyüme", "Pazar geliştirme"],
      aciklama: "Girdiyi (hammaddeyi) tedarikçiden almak yerine kendisi üretmek **geriye doğru dikey büyümedir**.",
    },
    {
      ad: "ileriye",
      soru: "Bir giyim üreticisinin ürünlerini aracılara vermek yerine kendi perakende mağazalarını açması hangi büyüme türüdür?",
      secenekler: ["İleriye doğru dikey büyüme", "Geriye doğru dikey büyüme", "Yatay büyüme", "Çapraz büyüme", "Franchising"],
      aciklama: "Dağıtım ve satış aşamasını bünyeye katarak nihai tüketiciye doğrudan ulaşmak **ileriye doğru dikey büyümedir**.",
    },
    {
      ad: "geriye-amac",
      zorluk: 2,
      soru: "Geriye doğru dikey büyümenin temel amacı hangisidir?",
      secenekler: [
        "Hammadde tedarikini güvenceye almak ve girdi maliyetlerini düşürmek",
        "Dağıtım kanallarını ve satış fiyatlarını kontrol etmek",
        "Riski ilgisiz sektörlere yaymak",
        "Mevcut ürünü yeni bölgelerde satmak",
        "Rakiplerle fiyat anlaşması yapmak",
      ],
      aciklama: "Geriye doğru büyüme **hammadde tedarikini güvenceye almayı ve girdi maliyetlerini düşürmeyi**, ileriye doğru büyüme ise dağıtım kanallarını kontrol etmeyi amaçlar.",
    },
    {
      ad: "ileriye-amac",
      zorluk: 2,
      soru: "İleriye doğru dikey büyümenin temel amacı hangisidir?",
      secenekler: [
        "Dağıtım kanallarını ve satış fiyatlarını kontrol etmek",
        "Hammadde tedarikini güvenceye almak",
        "Girdi maliyetlerini olabildiğince düşürmek",
        "Riski ilgisiz sektörlere yayarak dağıtmak",
        "Ortaklarla yeni bir tüzel kişilik kurmak",
      ],
      aciklama: "Kendi mağaza ve dağıtım ağını kurmak **dağıtım kanallarını ve satış fiyatlarını kontrol etmeyi** sağlar.",
    },
    {
      ad: "tekstil",
      zorluk: 2,
      soru: "Bir tekstil fabrikasının kendi iplik fabrikasını kurması hangi büyüme türüne örnektir?",
      secenekler: ["Geriye doğru dikey büyüme", "İleriye doğru dikey büyüme", "Pazar geliştirme", "Çapraz büyüme", "Stratejik ittifak"],
      aciklama: "İplik, tekstil fabrikasının girdisidir; girdiyi kendisi üretmeye başlamak **geriye doğru** dikey büyümedir.",
    },
  ]),

  ...ozet(U, "u7-capraz", [
    {
      ad: "capraz-tanim",
      soru: "İşletmenin mevcut faaliyet alanından tamamen farklı ve onunla ilişkisi olmayan sektörlere girmesi hangi büyüme türüdür?",
      secenekler: ["Çapraz büyüme", "Yatay büyüme", "Dikey büyüme", "Pazara nüfuz etme", "Ürün farklılaştırma"],
      aciklama: "İlgisiz yeni sektörlere girmek **çapraz (çok yönlü, konglomera, çeşitlendirme)** büyümedir.",
    },
    {
      ad: "amac",
      soru: "Çapraz büyümenin temel amacı hangisidir?",
      secenekler: [
        "Riski farklı sektörlere yayarak dağıtmak",
        "Hammadde tedarikini güvenceye almak",
        "Dağıtım kanallarını kontrol etmek",
        "Aynı pazarda daha fazla satmak",
        "Rakipler arasındaki rekabeti kaldırmak",
      ],
      aciklama: "Çapraz büyümenin amacı **riski farklı sektörlere yayarak dağıtmak** ve kârlı yatırım fırsatlarını değerlendirmektir.",
    },
    {
      ad: "ornek",
      zorluk: 2,
      soru: "Bir beyaz eşya üreticisinin bir otel zinciri satın alması ya da kurması hangi büyüme türüne örnektir?",
      secenekler: ["Çapraz büyüme", "Geriye doğru dikey büyüme", "İleriye doğru dikey büyüme", "Yatay büyüme", "Pazar geliştirme"],
      aciklama: "Beyaz eşya ile otelcilik arasında üretim zinciri ilişkisi yoktur; ilgisiz bir sektöre girmek **çapraz (konglomera)** büyümedir.",
    },
  ]),

  ...ozet(U, "u7-birlesme", [
    {
      ad: "merger",
      soru: "İki ya da daha fazla işletmenin hukuki ve ekonomik bağımsızlıklarını kaybederek tek bir yeni şirket çatısı altında birleşmesine ne ad verilir?",
      secenekler: ["Tam birleşme", "Stratejik ittifak", "Ortak girişim", "Konsorsiyum", "Lisans anlaşması"],
      aciklama: "Bağımsızlıkların kaybedilip tek bir yeni şirkette toplanılması **tam birleşmedir** (merger, yeni kuruluş).",
    },
    {
      ad: "devralma",
      soru: "Güçlü bir işletmenin başka bir işletmeyi satın alarak kendi bünyesine katmasına ne ad verilir?",
      secenekler: ["Devralma", "Ortak girişim", "Franchising", "Stratejik ittifak", "Centilmenlik anlaşması"],
      aciklama: "Bir işletmenin diğerini satın alıp bünyesine katması **devralmadır** (acquisition, katılma).",
    },
    {
      ad: "joint-venture",
      soru: "İki bağımsız işletmenin belirli bir yatırım için sermaye ve teknolojilerini birleştirerek yeni ve ayrı tüzel kişilikli bir şirket kurmasına ne ad verilir?",
      secenekler: ["Ortak girişim", "Stratejik ittifak", "Devralma", "Tam birleşme", "Kartel"],
      aciklama: "Yeni ve ayrı bir tüzel kişilik kurulup risk ve kârın paylaşılması **ortak girişimdir** (joint venture).",
    },
    {
      ad: "ittifak",
      zorluk: 2,
      soru: "Stratejik ittifakı ortak girişimden ayıran temel özellik hangisidir?",
      secenekler: [
        "Yeni bir tüzel kişilik kurulmaması",
        "Risk ve kârın paylaşılması",
        "Birden fazla işletmenin işbirliği yapması",
        "Ar-Ge projelerinde kullanılabilmesi",
        "İşletmelerin bağımsız kalması",
      ],
      aciklama: "İkisinde de işletmeler bağımsızdır ve işbirliği yapar; ancak ortak girişimde **yeni bir tüzel kişilik kurulur**, stratejik ittifakta kurulmaz.",
    },
    {
      ad: "ittifak-tanim",
      soru: "İşletmelerin hukuki bağımsızlıklarını koruyarak ve yeni tüzel kişilik kurmadan Ar-Ge, üretim ya da pazarlamada işbirliği yapmasına ne ad verilir?",
      secenekler: ["Stratejik ittifak", "Ortak girişim", "Tröst", "Tam birleşme", "Devralma"],
      aciklama: "Bağımsızlığın korunduğu, yeni tüzel kişiliğin kurulmadığı işbirliği **stratejik ittifaktır**.",
    },
  ]),

  ...ozet(U, "u7-lisans", [
    {
      ad: "lisans",
      soru: "Bir işletmenin patentini, ticari markasını ya da üretim tekniğini (know-how) belirli bir ücret karşılığında başka bir işletmeye kullandırmasına ne ad verilir?",
      secenekler: ["Lisans anlaşması", "Franchising", "Ortak girişim", "Konsorsiyum", "Holding"],
      aciklama: "Patent, marka ya da know-how'ın ücret karşılığı kullandırılması **lisans anlaşmasıdır**.",
    },
    {
      ad: "royalty",
      soru: "Lisans anlaşmasında kullanım hakkı karşılığında ödenen ücrete ne ad verilir?",
      secenekler: ["Royalty", "Rant", "Temettü", "Faiz", "Prim"],
      aciklama: "Lisans karşılığında ödenen bedele **royalty** denir.",
    },
    {
      ad: "franchising",
      soru: "Tanınmış bir markanın sahibi ana işletmenin, bedel karşılığında bağımsız yatırımcılara markasını, iş görme yöntemini ve kalite standartlarını kullanma hakkı vermesine ne ad verilir?",
      secenekler: ["Franchising", "Lisans anlaşması", "Stratejik ittifak", "Devralma", "Konsern"],
      aciklama: "Markayla birlikte **bütün işletme sisteminin** (iş yöntemi, kalite standartları) kullandırılması **franchising (imtiyaz verme)**dir. Fast-food zincirleri tipik örnektir.",
    },
    {
      ad: "franchisor",
      zorluk: 2,
      soru: "Franchising sisteminde markayı ve işletme sistemini kullandıran ana işletmeye ne ad verilir?",
      secenekler: ["Franchisor", "Franchisee", "Lisans alan", "Komanditer", "Konsorsiyum lideri"],
      aciklama: "Hakkı veren ana işletme **franchisor**, hakkı satın alan bağımsız yatırımcı **franchisee**dir.",
    },
  ]),
];
