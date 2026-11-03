// 6. ünite: Hukuki Altyapı

import { kitap, turet, type Soru } from "./tipler.ts";

const U = 6;
const K = "u6";

export const unite6: Soru[] = [
  ...kitap(U, K, [
    {
      id: "u6-k01", no: 1, kavram: "u6-esnaf-tacir",
      soru: "Aşağıdakilerden hangisi girişimci değildir?",
      secenekler: ["Esnaf", "Sanatkar", "Tacir", "Tüccar", "Memur"],
      dogru: 4,
      aciklama: "İşletme biliminin girişimci dediği kişi hukukta esnaf, sanatkâr, tacir, tüccar veya şirket ortağı olarak geçer. **Memur** bir işletme işletmez.",
    },
    {
      id: "u6-k02", no: 2, kavram: "u6-esnaf-tacir", zorluk: 2,
      soru: "Aşağıdaki teşebbüslerden hangisini gerçek kişi tacirler kuramaz?",
      secenekler: ["Faaliyet konusu maden işletmesi olan firma", "Faaliyet konusu ithalat olan firma", "Faaliyet konusu bankacılık olan firma", "Faaliyet konusu hayvan yetiştiriciliği olan firma", "Faaliyet konusu su ticareti olan firma"],
      dogru: 2,
      aciklama: "**Bankacılık** ve sigortacılık gibi faaliyetleri yalnızca ruhsat almış anonim şirketler veya kooperatifler yapabilir.",
    },
    {
      id: "u6-k03", no: 3, cikmis: 17, kavram: "u6-sermaye",
      soru: "Aşağıdakilerden hangisi sermaye olarak konulamaz?",
      secenekler: ["Marka", "Para", "Kişisel itibar", "Araba", "El arabası"],
      dogru: 2,
      aciklama: "Para, alacak, fikrî mülkiyet hakları (marka, patent), taşınır ve taşınmazlar sermaye olabilir. **Kişisel itibar** sermaye olarak konulamaz.",
    },
    {
      id: "u6-k04", no: 4, kavram: "u6-sirket",
      soru: "Aşağıdakilerden hangisinde ortağın sorumluluğu sınırlıdır?",
      secenekler: ["Gerçek kişi tacir", "Limited şirket", "Kollektif şirket", "Komandit şirket", "Adi ortaklık"],
      dogru: 1,
      aciklama: "**Limited şirkette** ortak, taahhüt ettiği sermaye ile sınırlı sorumludur. Gerçek kişi tacir, kollektif ortak ve adi ortaklık ortakları sınırsız sorumludur.",
    },
    {
      id: "u6-k05", no: 5, cikmis: 18, kavram: "u6-sirket", sabit: true,
      soru: "Aşağıdakilerden hangisi KOBİ olabilir?",
      secenekler: ["Gerçek kişi tacir", "Esnaf", "Anonim şirket", "Limited şirket", "Hepsi"],
      dogru: 4,
      aciklama: "KOBİ tanımı hukuki türe değil çalışan sayısı ve ciro/bilançoya bakar; bu yüzden **hepsi** KOBİ olabilir.",
    },
    {
      id: "u6-k06", no: 6, kavram: "u6-kurulus", sabit: true,
      soru: "Tüzel kişilik hangi anda kazanılır?",
      secenekler: ["Şirket sözleşmesi imzalandığında", "Sözleşmedeki imzaların noterde tasdik edildiği anda", "Ticaret Müdürülüğüne tescil edildiği anda", "Türkiye Ticaret Sicili Gazetesinde ilan edildiği anda", "Hiçbiri"],
      dogru: 2,
      aciklama: "Kitap açıkça belirtir: **tescil ile tüzel kişilik kazanılır**.",
    },
    {
      id: "u6-k07", no: 7, cikmis: 19, kavram: "u6-yonetim", sabit: true,
      soru: "Limited şirkette yönetim ve temsil yetkisi kime aittir?",
      secenekler: ["Müdüre", "Muhasebeciye", "Avukata", "Ortaklara", "Hepsine"],
      dogru: 0,
      aciklama: "Limited şirkette yönetim ve temsil, şirket sözleşmesiyle **müdür** sıfatı taşıyan kişilere verilir.",
    },
    {
      id: "u6-k08", no: 8, kavram: "u6-sermaye", zorluk: 3,
      soru: "Sermayenin taahhüt edilmesinden aşağıdakilerden hangisi anlaşılmaz?",
      secenekler: ["Taahütle sorumluluk sona erer", "sorumluluk miktarı taahhüt edilen miktarkadardır", "taahhüt edilenin ödenmemesi çıkma nedeni olabilir", "sermayenin tamamının taahhüt edilmesi gerekir", "maddi varlıklarla taahhüt yerine getirilebilir"],
      dogru: 3,
      aciklama: "Kitabın cevap anahtarına göre taahhütten anlaşılmayan: \"**sermayenin tamamının taahhüt edilmesi gerekir**\". Asgari sermaye öngörülen hallerde taahhüdün ¼'ü peşin, kalanı üç yıl içinde ödenir.",
    },
    {
      id: "u6-k09", no: 9, kavram: "u6-rekabet",
      soru: "Aşağıdakilerden hangisi “basiretli davranma” kavramına en yakındır?",
      secenekler: ["Gereksiz yere risk alan", "Gerekli yere risk alan", "Tutum ve davranışında ölçülü olan", "Cesur olan", "Girişimci"],
      dogru: 2,
      aciklama: "Basiretli tacir, işlerinde **ölçülü, dikkatli ve öngörülü** davranan tacirdir.",
    },
    {
      id: "u6-k10", no: 10, kavram: "u6-marka", sabit: true,
      soru: "Aşağıdakilerden hangisi marka olabilir?",
      secenekler: ["Şekiller", "Sözcükler", "Renkler", "Sayılar", "Hepsi"],
      dogru: 4,
      aciklama: "Malları ve hizmetleri ayırt etmeye yarayan her işaret (sözcük, şekil, renk, harf, sayı) marka olabilir: **hepsi**.",
    },
  ]),

  ...turet(U, K, "u6-esnaf-tacir", [
    {
      id: "u6-t-ayrim-olcut", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre bir kişinin esnaf mı tacir mi olduğunu belirleyen temel ölçüt hangisidir?",
      secenekler: ["Elde etmesi öngörülen gelir miktarı", "Kişinin yaşı", "İşyerinin bulunduğu şehir", "Kişinin eğitim düzeyi"],
      dogru: 0,
      aciklama: "Esnaf ile tacir arasındaki sınırı **öngörülen gelir miktarı** belirler; sınır Cumhurbaşkanlığı Kararnamesi ile tespit edilir.",
    },
    {
      id: "u6-t-esnaf-beden", tip: "mcq", zorluk: 2,
      soru: "Ekonomik faaliyetini sermayesiyle birlikte bedenî çalışmasına dayandıran ve kazancı tacir niteliği kazandırmayan kişiye ne denir?",
      secenekler: ["Esnaf", "Tacir", "Anonim şirket", "Müdür"],
      dogru: 0,
      aciklama: "Bu, 5362 sayılı Kanun'daki **esnaf** tanımıdır.",
    },
    {
      id: "u6-t-tacir-defter", tip: "tf", zorluk: 2,
      soru: "Kitaba göre tacirler vergiden muaf olabilir ve ticari defter tutmak zorunda değildir.",
      dogru: false,
      aciklama: "Yanlış. Bu özellikler esnaf için söz konusu olabilir; **tacirler vergiden muaf olamaz ve defter tutmak zorundadır**.",
    },
    {
      id: "u6-t-tacir-iflas", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre tacirin yükümlülüklerinden biri değildir?",
      secenekler: ["Gelir vergisinden muaf tutulmak", "Bir ticaret unvanı seçmek", "İşletmesini ticaret siciline tescil ettirmek", "Gerekli ticari defterleri tutmak"],
      dogru: 0,
      aciklama: "Tacir her borcu için iflasa tabidir; unvan seçmek, tescil ettirmek ve defter tutmakla yükümlüdür. **Vergi muafiyeti** tacirin değil, bazı esnafın durumudur.",
    },
    {
      id: "u6-t-tescil-tacir", tip: "tf", zorluk: 2,
      soru: "Ticari işletmesini tescil ettirip ilan eden kişi, fiilen işletmeye başlamamış olsa bile tacir sayılır.",
      dogru: true,
      aciklama: "Doğru. Tescil ettirip durumu ilan eden kişi fiilen başlamasa da tacir sayılır.",
    },
  ]),

  ...turet(U, K, "u6-sermaye", [
    {
      id: "u6-t-ayni", tip: "mcq", zorluk: 3,
      soru: "Nakit ve kişisel emek dışındaki değerlerin (ayni sermaye) şirkete konulmasından önce ne yapılmalıdır?",
      secenekler: ["Değeri mahkeme aracılığıyla belirlenmelidir", "Noter onayı yeterlidir", "Hiçbir işlem gerekmez", "Ortaklar kendi aralarında fiyat yazar"],
      dogru: 0,
      aciklama: "Ayni sermayenin **değeri mahkeme aracılığıyla** tespit ettirilmelidir.",
    },
    {
      id: "u6-t-ceyrek", tip: "mcq", zorluk: 3,
      soru: "Asgari sermaye öngörülen hallerde taahhüt edilen sermaye nasıl ödenir?",
      secenekler: ["Dörtte biri peşin, kalanı üç yıl içinde", "Tamamı kuruluşta peşin", "Yarısı peşin, kalanı on yıl içinde", "Hiç ödenmesi gerekmez"],
      dogru: 0,
      aciklama: "Taahhüt edilen sermayenin **¼'ü peşin**, kalanı **üç yıl içinde** şirkete ödenir.",
    },
    {
      id: "u6-t-fikri-sermaye", tip: "tf", zorluk: 1,
      soru: "Patent ve marka gibi fikrî mülkiyet hakları şirkete sermaye olarak konulabilir.",
      dogru: true,
      aciklama: "Doğru. TTK m. 127'ye göre fikrî mülkiyet hakları sermaye olarak konulabilir.",
    },
  ]),

  ...turet(U, K, "u6-sirket", [
    {
      id: "u6-t-sahis", tip: "mcq", zorluk: 2,
      soru: "TTK'ya göre hangileri şahıs şirketidir?",
      secenekler: ["Kollektif ve komandit şirket", "Anonim ve limited şirket", "Limited şirket ve kooperatif", "Yalnızca anonim şirket"],
      dogru: 0,
      aciklama: "**Kollektif ve komandit** şirket şahıs şirketidir; anonim, limited ve sermayesi paylara bölünmüş komandit şirket sermaye şirketidir.",
    },
    {
      id: "u6-t-sermaye-sirketi", tip: "mcq", zorluk: 2,
      soru: "Hangisi sermaye şirketidir?",
      secenekler: ["Anonim şirket", "Kollektif şirket", "Adi ortaklık", "Gerçek kişi tacir"],
      dogru: 0,
      aciklama: "**Anonim şirket** sermaye şirketidir; ortakların kişiliğinden çok koydukları sermaye önemlidir.",
    },
    {
      id: "u6-t-tuzel-yok", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre hangisinin ortaklarından ayrı bir tüzel kişiliği yoktur?",
      secenekler: ["Adi şirket", "Anonim şirket", "Limited şirket", "Kooperatif"],
      dogru: 0,
      aciklama: "Esnaf ve tacir işletmesi ile **adi şirketlerin** ayrı tüzel kişiliği yoktur; sermaye şirketleri ve kooperatiflerin vardır.",
    },
    {
      id: "u6-t-ttk-turler", tip: "mcq", zorluk: 2,
      soru: "Hangisi Türk Ticaret Kanunu'na göre kurulabilecek ticaret şirketlerinden biri değildir?",
      secenekler: ["Adi ortaklık", "Kollektif şirket", "Anonim şirket", "Kooperatif"],
      dogru: 0,
      aciklama: "TTK'daki ticaret şirketleri kollektif, komandit, anonim, limited ve kooperatiftir. **Adi ortaklık** Borçlar Kanunu'na göre kurulur.",
    },
  ]),

  ...turet(U, K, "u6-kurulus", [
    {
      id: "u6-t-ana-sozlesme", tip: "tf", zorluk: 2,
      soru: "Ana sözleşme, tek kişi tarafından kurulan ticaret şirketleri için de zorunludur.",
      dogru: true,
      aciklama: "Doğru. Ana sözleşme teşebbüsün kuruluş sözleşmesidir ve tek kişilik ticaret şirketleri için de zorunludur.",
    },
    {
      id: "u6-t-eksik-sozlesme", tip: "mcq", zorluk: 2,
      soru: "Şirket sözleşmesinde eksiklik varsa ne olur?",
      secenekler: ["Tescil, sözleşme düzeltildikten sonra yapılabilir", "Şirket yine de hemen tescil edilir", "Eksiklik tescilden sonra kendiliğinden giderilir", "Şirket kurulamaz ve tüm başvuru kalıcı olarak reddedilir"],
      dogru: 0,
      aciklama: "Eksiklik halinde **tescil, gerekli tadilattan sonra** yapılır; bu da emek, zaman ve para kaybıdır.",
    },
  ]),

  ...turet(U, K, "u6-yonetim", [
    {
      id: "u6-t-mudur-degisim", tip: "mcq", zorluk: 3,
      soru: "Ana sözleşmede aksi yoksa limited şirket sözleşmesi hangi oyla değiştirilebilir?",
      secenekler: ["Esas sermayenin üçte ikisini temsil eden ortakların oyuyla", "Herhangi bir ortağın tek başına vereceği kararla", "Yalnızca ticaret mahkemesinin vereceği kararla", "Şirket müdürünün tek başına alacağı kararla"],
      dogru: 0,
      aciklama: "TTK m. 589'a göre şirket sözleşmesi **esas sermayenin üçte ikisini** temsil eden ortakların kararıyla değiştirilebilir.",
    },
    {
      id: "u6-t-en-az-bir", tip: "tf", zorluk: 2,
      soru: "Limited şirkette en az bir ortağın yönetim hakkı ve temsil yetkisi bulunmalıdır.",
      dogru: true,
      aciklama: "Doğru. Yönetim üçüncü kişilere de verilebilir ama en az bir ortağın yönetim ve temsil yetkisi bulunmalıdır.",
    },
  ]),

  ...turet(U, K, "u6-rekabet", [
    {
      id: "u6-t-kayitdisi", tip: "mcq", zorluk: 2,
      soru: "Kitaba göre aşağıdakilerden hangisi haksız rekabettir?",
      secenekler: ["Kayıt dışı işçi çalıştırmak", "Ürün kalitesini artırmak", "Fiyatları maliyete göre belirlemek", "Yeni bir şube açmak"],
      dogru: 0,
      aciklama: "**Kayıt dışı işçi çalıştırmak** haksız rekabettir; başkasının markasını kullanmak da basiretli tacirle bağdaşmaz.",
    },
    {
      id: "u6-t-isci-rekabet", tip: "mcq", zorluk: 3,
      soru: "İşçinin iş sözleşmesi bittikten sonra işverenle rekabet etmeme taahhüdü hangi şekilde geçerli olur?",
      secenekler: ["Yazılı olarak üstlenilmesi gerekir", "Sözlü olması yeterlidir", "Kendiliğinden her işçi için geçerlidir", "Hiçbir şekilde geçerli olmaz"],
      dogru: 0,
      aciklama: "İşçi rekabet yasağını **yazılı olarak** üstlenebilir; işçinin müşteri çevresi veya üretim sırlarına erişimi olmalıdır.",
    },
  ]),

  ...turet(U, K, "u6-marka", [
    {
      id: "u6-t-marka-amac", tip: "mcq", zorluk: 1,
      soru: "Kitaba göre markanın temel işlevi nedir?",
      secenekler: ["Bir teşebbüsün mal ve hizmetlerini diğerlerinden ayırmak", "Şirketin vergi numarasını müşterilere duyurmak", "Ortakların şirket borçlarındaki sorumluluğunu sınırlamak", "İşçilerin aylık ücretini ve haklarını belirlemek"],
      dogru: 0,
      aciklama: "Marka mal ve hizmetleri **ayırt etmeye** yarar. Unvan tacirleri, işletme adı işletmeleri, marka ise ürünleri ayırır.",
    },
    {
      id: "u6-t-bes-yil", tip: "mcq", zorluk: 3,
      soru: "Türkiye'de ciddi biçimde kullanılmayan ya da kullanımına kaç yıl kesintisiz ara verilen markanın iptaline karar verilir?",
      secenekler: ["5 yıl", "1 yıl", "10 yıl", "20 yıl"],
      dogru: 0,
      aciklama: "6769 sayılı Kanun'a göre **beş yıl** kesintisiz kullanılmayan marka iptal edilebilir.",
    },
    {
      id: "u6-t-unvan", tip: "mcq", zorluk: 2,
      soru: "Tacirleri birbirinden ayıran ve kullanılması zorunlu olan ad hangisidir?",
      secenekler: ["Ticaret unvanı", "İşletme adı", "Marka", "Alan adı"],
      dogru: 0,
      aciklama: "**Ticaret unvanı** zorunludur ve taciri ayırt eder. İşletme adı isteğe bağlıdır.",
    },
  ]),

  ...turet(U, K, "u6-isg", [
    {
      id: "u6-t-isg", tip: "tf", zorluk: 2,
      soru: "Çalışanların iş sağlığı ve güvenliği yükümlülükleri işverenin sorumluluğunu ortadan kaldırır.",
      dogru: false,
      aciklama: "Yanlış. Çalışanların yükümlülükleri **işverenin sorumluluklarını etkilemez**; önlem almak işverenin görevidir.",
    },
  ]),
];
