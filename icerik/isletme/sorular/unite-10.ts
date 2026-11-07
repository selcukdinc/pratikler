// 10. ünite (özetin 10. başlığı): optimal kuruluş yeri ve kuruluş yeri
// seçimini etkileyen ekonomik faktörler.

import { ozet, type Soru } from "./yardimci.ts";

const U = 10;

export const unite10: Soru[] = [
  ...ozet(U, "u10-optimal", [
    {
      ad: "tanim",
      soru: "İşletmenin kuruluş ve faaliyet maliyetlerinin en düşük, satış gelirleri ile uzun dönemli kârlılığının en yüksek olduğu coğrafi yere ne ad verilir?",
      secenekler: ["Optimal kuruluş yeri", "Organize sanayi bölgesi", "Serbest bölge", "Optimum kapasite", "Başabaş noktası"],
      aciklama: "Maliyetleri en aza, uzun dönemli kârlılığı en yükseğe çıkaran yer **optimal kuruluş yeridir**.",
    },
    {
      ad: "stratejik",
      zorluk: 2,
      soru: "Kuruluş yeri kararı için özette hangi niteleme yapılır?",
      secenekler: [
        "Uzun vadeli ve geri dönüşü çok maliyetli stratejik bir karardır",
        "Kısa vadeli ve kolayca değiştirilebilen bir karardır",
        "Yalnızca hizmet işletmeleri için önemli bir karardır",
        "Yalnızca devletin aldığı bir karardır",
        "Kuruluştan sonra her yıl yeniden alınan bir karardır",
      ],
      aciklama: "Kuruluş yeri seçimi **uzun vadeli, geri dönüşü çok maliyetli stratejik** bir karardır.",
    },
  ]),

  ...ozet(U, "u10-hammadde", [
    {
      ad: "agirlik-kaybi",
      soru: "Hammaddesi üretim sırasında büyük ölçüde ağırlık ya da hacim kaybeden şeker fabrikası gibi işletmeler nereye yakın kurulmalıdır?",
      secenekler: ["Hammadde kaynağına", "Pazara", "Limana", "Üniversitelere", "Büyük şehirlere"],
      aciklama: "Hammadde işlenirken çok ağırlık kaybediyorsa ağır hammaddeyi taşımak pahalıdır; işletme **hammadde kaynağına** yakın kurulur (demir-çelik, bakır izabe, şeker, kereste, kağıt).",
    },
    {
      ad: "bozulabilir",
      soru: "Çay fabrikaları, süt ve balık işleme tesisleri hangi nedenle hammadde kaynağına yakın kurulur?",
      secenekler: [
        "Hammaddenin çabuk bozulabilir olması",
        "Mamulün çabuk kırılabilir olması",
        "Nitelikli işgücüne ihtiyaç duyulması",
        "Mamulün üretimde ağırlık kazanması",
        "Müşteriyle yüz yüze temas gerekmesi",
      ],
      aciklama: "Hammadde (yaş çay yaprağı, çiğ süt, balık) **çabuk bozulabildiği** için tesis hammadde kaynağına yakın kurulur.",
    },
    {
      ad: "cimento",
      zorluk: 2,
      soru: "Özete göre çimento ve tuğla fabrikalarının hammadde kaynağına yakın kurulmasının nedeni hangisidir?",
      secenekler: [
        "Hammaddeyi taşımanın mamulü taşımaktan çok daha pahalı olması",
        "Mamulün çabuk bozulan ve kırılan bir ürün olması",
        "Üretimde bol ve kaliteli suya ihtiyaç duyulması",
        "Üretim için nemli bir havaya ihtiyaç duyulması",
        "Müşteriyle sürekli yüz yüze temas gerekmesi",
      ],
      aciklama: "Çimento ve tuğlada **hammaddenin taşıma maliyeti mamulünkinden çok daha yüksektir**; bu yüzden tesisler hammaddeye yakın kurulur.",
    },
    {
      ad: "ornek",
      soru: "Aşağıdaki işletmelerden hangisinin hammadde kaynağına yakın kurulması beklenir?",
      secenekler: ["Demir-çelik fabrikası", "Ekmek fırını", "Gazlı içecek fabrikası", "Banka şubesi", "Alışveriş merkezi"],
      aciklama: "**Demir-çelik** üretiminde hammadde büyük ölçüde ağırlık kaybeder; tesis hammaddeye yakın kurulur. Diğerleri pazara yakın kurulan işletmelerdir.",
    },
  ]),

  ...ozet(U, "u10-pazar", [
    {
      ad: "firin",
      soru: "Ekmek fırınları ve pastaneler hangi nedenle pazara yakın kurulur?",
      secenekler: [
        "Mamulün çabuk bozulabilir olması",
        "Hammaddenin çabuk bozulabilir olması",
        "Hammaddenin ağırlık kaybetmesi",
        "Bol enerji gerektirmesi",
        "Devlet teşviklerinden yararlanmak",
      ],
      aciklama: "**Mamul** (ekmek, pasta, günlük süt) çabuk bozulduğu ya da kırıldığı için işletme tüketiciye, yani **pazara** yakın kurulur.",
    },
    {
      ad: "mesrubat",
      zorluk: 2,
      soru: "Meşrubat ve bira fabrikalarının pazara yakın kurulmasının nedeni hangisidir?",
      secenekler: [
        "Üretimde su katıldığı için mamulün ağırlık ve hacminin artması",
        "Hammaddenin üretim sırasında ağırlık kaybetmesi",
        "Hammaddenin çabuk bozulması",
        "Çok yüksek miktarda elektrik tüketmeleri",
        "Nitelikli mühendislere ihtiyaç duymaları",
      ],
      aciklama: "Üretimde **su katıldığı** için mamul hammaddeden ağırdır; mamulü taşımak daha pahalı olduğundan tesis pazara yakın kurulur.",
    },
    {
      ad: "hizmet",
      soru: "Bankalar, oteller ve hastaneler kuruluş yeri seçiminde hangi faktörü öne çıkarır?",
      secenekler: ["Pazara yakınlık", "Hammadde kaynağına yakınlık", "Enerji kaynağına yakınlık", "Su kaynağına yakınlık", "Nemli iklim"],
      aciklama: "Müşteriyle **yüz yüze temas** gerektiren hizmet ve perakende işletmeleri **pazara (tüketim merkezlerine)** yakın kurulur.",
    },
    {
      ad: "karsilastirma",
      zorluk: 3,
      sabit: true,
      soru: "Aşağıdaki işletmelerden hangilerinin pazara yakın kurulması beklenir?\n\nI. Gazlı içecek fabrikası\nII. Bakır izabe tesisi\nIII. Pastane\nIV. Kağıt fabrikası",
      secenekler: ["Yalnız III", "I ve III", "II ve IV", "I, III ve IV", "II, III ve IV"],
      dogru: 1,
      aciklama: "**Gazlı içecek** üretimde ağırlık kazanır, **pastane** çabuk bozulan mamul üretir; ikisi pazara yakın kurulur. Bakır izabe ve kağıt fabrikası hammaddeye yakın kurulur.",
    },
  ]),

  ...ozet(U, "u10-diger", [
    {
      ad: "denizyolu",
      soru: "Özete göre en ucuz taşıma türü hangisidir?",
      secenekler: ["Denizyolu", "Demiryolu", "Karayolu", "Havayolu", "Boru hattı"],
      aciklama: "Özet, **denizyolunu** en ucuz taşıma türü olarak verir; limanlara ve kavşak noktalarına yakınlık tedariki ve dağıtımı ucuzlatır.",
    },
    {
      ad: "enerji",
      soru: "Alüminyum ve seramik gibi çok yüksek miktarda elektrik ya da doğalgaz tüketen işletmeler kuruluş yeri seçiminde hangi faktörü öne çıkarır?",
      secenekler: ["Enerji kaynaklarına yakınlık", "Pazara yakınlık", "Ucuz işgücü", "Nemli iklim", "Üniversitelere yakınlık"],
      aciklama: "Yüksek enerji tüketen işletmeler (alüminyum, demir-çelik, seramik) **enerji kaynaklarına** yakın kurulur.",
    },
    {
      ad: "su",
      soru: "Soğutma ya da yıkama için bol ve kaliteli suya ihtiyaç duyan işletmelere hangisi örnektir?",
      secenekler: ["Tekstil boyama tesisi", "Ekmek fırını", "Banka", "Alışveriş merkezi", "Halı dokuma atölyesi"],
      aciklama: "Kağıt, **tekstil boyama**, kimya ve nükleer ya da termik santraller bol suya ihtiyaç duyduğu için su kaynaklarına yakın kurulur.",
    },
    {
      ad: "isgucu",
      zorluk: 2,
      soru: "İleri teknoloji kullanan bir yazılım ve elektronik işletmesi işgücü faktörü açısından nereyi tercih eder?",
      secenekler: [
        "Nitelikli işgücünün yoğun olduğu büyük şehirleri",
        "Ucuz ve bol işgücünün bulunduğu kırsal bölgeleri",
        "Hammadde kaynaklarının bulunduğu bölgeleri",
        "Nemli iklime sahip kıyı bölgelerini",
        "Enerji santrallerine yakın sanayi bölgelerini",
      ],
      aciklama: "Emek yoğun işletmeler ucuz ve bol işgücünü, **ileri teknoloji** kullananlar ise **nitelikli işgücünün** yoğun olduğu büyük şehirleri ve üniversite çevrelerini tercih eder.",
    },
    {
      ad: "iklim",
      soru: "Özete göre pamuklu dokuma işletmeleri iklim açısından hangi koşulu arar?",
      secenekler: ["Nemli hava", "Kuru hava", "Soğuk iklim", "Yüksek rakım", "Bol güneş"],
      aciklama: "Özetteki örneğe göre pamuklu dokuma için **nemli hava** gerekir.",
    },
    {
      ad: "tesvik",
      soru: "Vergi indirimi, ucuz arsa tahsisi, gümrük muafiyeti ve hazır altyapı sunan organize sanayi bölgeleri kuruluş yeri seçiminde hangi faktörün kapsamındadır?",
      secenekler: ["Devlet teşvikleri", "Pazara yakınlık", "Hammaddeye yakınlık", "İklim ve doğa koşulları", "Ulaştırma olanakları"],
      aciklama: "Bölgeler arası gelişmişlik farkını azaltmak için sunulan bu imkânlar **devlet teşvikleri ve organize sanayi bölgeleri (OSB)** faktörüdür.",
    },
    {
      ad: "tesvik-amac",
      zorluk: 2,
      soru: "Devletin kuruluş yeri teşvikleri vermesinin temel amacı özete göre hangisidir?",
      secenekler: [
        "Bölgeler arası gelişmişlik farklarını azaltmak",
        "Büyük şehirlerdeki nüfusu artırmak",
        "İşletmelerin hammadde maliyetini artırmak",
        "Yabancı işletmelerin girişini engellemek",
        "İşletmeleri pazara yaklaştırmak",
      ],
      aciklama: "Teşviklerin amacı **bölgeler arası gelişmişlik farklarını azaltmaktır**.",
    },
    {
      ad: "emek-yogun",
      soru: "Emek yoğun bir hazır giyim atölyesi işgücü açısından nasıl bir bölgeyi tercih eder?",
      secenekler: [
        "Ucuz ve bol işgücünün bulunduğu bölgeyi",
        "Nitelikli mühendislerin yoğun olduğu bölgeyi",
        "Enerji santrallerine yakın bölgeyi",
        "Hammadde kaynağına yakın bölgeyi",
        "Limanlara yakın bölgeyi",
      ],
      aciklama: "Emek yoğun işletmeler maliyetlerinin çoğu işçilik olduğu için **ucuz ve bol işgücünün** bulunduğu bölgeleri tercih eder.",
    },
  ]),
];
