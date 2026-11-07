// 5. ünite (özetin 5. başlığı): faaliyet konusu, mal türü, faktör yoğunluğu,
// büyüklük (KOBİ) ve mülkiyet yapısına göre işletmeler.

import { ozet, type Soru } from "./yardimci.ts";

const U = 5;

export const unite5: Soru[] = [
  ...ozet(U, "u5-faaliyet", [
    {
      ad: "sanayi",
      soru: "Hammadde ve yarı mamullerin fiziksel ya da kimyasal niteliklerini değiştirerek yeni bir mal üreten işletmeler hangisidir?",
      secenekler: ["Sanayi işletmeleri", "Ticaret işletmeleri", "Hizmet işletmeleri", "Kamu işletmeleri", "Karma işletmeler"],
      aciklama: "Otomotiv, tekstil, gıda, demir-çelik, madencilik ve inşaat gibi malın niteliğini değiştiren işletmeler **sanayi (endüstri) işletmeleridir**.",
    },
    {
      ad: "ticaret",
      soru: "Mallar üzerinde fiziksel değişiklik yapmadan onları üreticiden alıp tüketiciye ulaştıran toptancı ve perakendeciler hangi gruptadır?",
      secenekler: ["Ticaret işletmeleri", "Sanayi işletmeleri", "Hizmet işletmeleri", "Üretim malı işletmeleri", "Emek yoğun işletmeler"],
      aciklama: "**Ticaret işletmeleri** malın şeklini değiştirmez; yer, zaman ve mülkiyet faydası yaratır.",
    },
    {
      ad: "ticaret-fayda",
      zorluk: 2,
      soru: "Ticaret işletmeleri hangi fayda türünü yaratmaz?",
      secenekler: ["Şekil faydası", "Yer faydası", "Zaman faydası", "Mülkiyet faydası", "Hiçbiri, hepsini yaratır"],
      dogru: 0,
      sabit: true,
      aciklama: "Ticaret işletmeleri malda fiziksel değişiklik yapmadığı için **şekil faydası** yaratmaz; yer, zaman ve mülkiyet faydası yaratır.",
    },
    {
      ad: "hizmet",
      soru: "Aşağıdakilerden hangisi faaliyet konusuna göre bir hizmet işletmesidir?",
      secenekler: ["Sigorta şirketi", "Çimento fabrikası", "Toptan gıda satıcısı", "Maden ocağı", "İnşaat şirketi"],
      aciklama: "Bankacılık, **sigortacılık**, ulaşım, haberleşme, turizm, eğitim, sağlık ve danışmanlık soyut fayda üreten hizmet işletmeleridir. Özete göre inşaat ve madencilik sanayi işletmesidir.",
    },
    {
      ad: "insaat",
      zorluk: 2,
      soru: "Özete göre madencilik ve inşaat işletmeleri faaliyet konusuna göre hangi gruba girer?",
      secenekler: ["Sanayi işletmeleri", "Hizmet işletmeleri", "Ticaret işletmeleri", "Karma işletmeler", "Kamu işletmeleri"],
      aciklama: "Özet, madencilik ve inşaat işletmelerini **sanayi (endüstri)** işletmeleri arasında sayar.",
    },
  ]),

  ...ozet(U, "u5-mal-turu", [
    {
      ad: "dayaniksiz",
      soru: "Bir ya da birkaç kullanımda tükenen gıda, temizlik ürünü ve içecek gibi mallar hangi gruptadır?",
      secenekler: ["Dayanıksız tüketim malları", "Dayanıklı tüketim malları", "Sermaye malları", "Ara mallar", "Serbest mallar"],
      aciklama: "Bir ya da birkaç kullanımda tükenen mallar **dayanıksız tüketim mallarıdır**.",
    },
    {
      ad: "dayanikli",
      soru: "Aşağıdakilerden hangisi dayanıklı tüketim malıdır?",
      secenekler: ["Buzdolabı", "Deterjan", "Meyve suyu", "Ekmek", "Endüstriyel robot"],
      aciklama: "Beyaz eşya, mobilya, otomobil ve televizyon gibi uzun süre kullanılan mallar **dayanıklı tüketim malıdır**. Endüstriyel robot ise yatırım (sermaye) malıdır.",
    },
    {
      ad: "yatirim-mali",
      soru: "Makine, tezgâh ve endüstriyel robot üreten bir işletme ürettiği mal türüne göre nasıl sınıflandırılır?",
      secenekler: ["Üretim malı üreten işletme", "Dayanıklı tüketim malı üreten işletme", "Dayanıksız tüketim malı üreten işletme", "Hizmet işletmesi", "Ticaret işletmesi"],
      aciklama: "Başka bir malın üretiminde kullanılan makine, tezgâh, robot, hammadde ve ara malı üretenler **üretim (yatırım, sermaye) malı** üreten işletmelerdir.",
    },
  ]),

  ...ozet(U, "u5-yogunluk", [
    {
      ad: "emek-yogun",
      soru: "Toplam maliyetler içinde işçilik giderlerinin ağırlıkta olduğu işletmelere ne ad verilir?",
      secenekler: ["Emek yoğun işletme", "Sermaye yoğun işletme", "Teknoloji yoğun işletme", "Holding", "Kamu işletmesi"],
      aciklama: "İnsan gücünün ve işçilik giderlerinin payı yüksek olan işletmeler **emek yoğun** işletmelerdir.",
    },
    {
      ad: "emek-ornek",
      soru: "Aşağıdakilerden hangisi emek yoğun işletmeye örnektir?",
      secenekler: ["Halı dokumacılığı", "Petro-kimya tesisi", "Demir-çelik fabrikası", "Enerji santrali", "Otomotiv fabrikası"],
      aciklama: "Özetteki emek yoğun örnekler **halı dokumacılığı**, tarım, geleneksel tekstil ve konaklamadır. Diğerleri sermaye (teknoloji) yoğundur.",
    },
    {
      ad: "sermaye-yogun",
      zorluk: 2,
      soru: "Sermaye (teknoloji) yoğun işletmeler için aşağıdakilerden hangisi doğrudur?",
      secenekler: [
        "Sabit sermaye yatırımları yüksektir",
        "İşçilik giderleri maliyetlerin çoğunu oluşturur",
        "Otomasyon kullanımı düşüktür",
        "Genellikle halı dokumacılığı gibi el işçiliğine dayanır",
        "Makine ve teçhizata ihtiyaç duymaz",
      ],
      aciklama: "Sermaye yoğun işletmelerde makine, teçhizat, otomasyon ve ileri teknoloji ağırlıktadır; **sabit sermaye yatırımları yüksektir** (petro-kimya, demir-çelik, otomotiv, enerji).",
    },
  ]),

  ...ozet(U, "u5-buyukluk", [
    {
      ad: "nicel",
      zorluk: 2,
      soru: "Aşağıdakilerden hangisi işletme büyüklüğünü ölçmede kullanılan nitel (kalitatif) bir ölçüttür?",
      secenekler: ["Yönetimin uzmanlaşma derecesi", "Çalışan sayısı", "Yıllık satış hasılatı", "Bilançodaki aktif toplamı", "Sermaye miktarı"],
      aciklama: "Çalışan sayısı, satış hasılatı, aktif toplamı, makine parkı ve sermaye **nicel** ölçütlerdir. **Yönetimin uzmanlaşma derecesi**, pazar payı ve hukuki yapı nitel ölçütlerdir.",
    },
    {
      ad: "mikro",
      soru: "Türkiye'deki KOBİ sınıflandırmasına göre 1-9 kişi çalıştıran işletme hangi ölçektedir?",
      secenekler: ["Mikro işletme", "Küçük işletme", "Orta büyüklükteki işletme", "Büyük ölçekli işletme", "Çok uluslu işletme"],
      aciklama: "10 kişiden az (1-9) çalışanı olan işletme **mikro işletmedir**; genellikle tek kişi ya da aile işletmesidir.",
    },
    {
      ad: "kucuk",
      soru: "35 kişi çalıştıran bir işletme KOBİ sınıflandırmasında hangi ölçektedir?",
      secenekler: ["Küçük işletme", "Mikro işletme", "Orta büyüklükteki işletme", "Büyük ölçekli işletme", "Kamu işletmesi"],
      aciklama: "10-49 kişi çalıştıran işletmeler **küçük işletmedir**. 35 bu aralıktadır.",
    },
    {
      ad: "orta",
      soru: "180 kişi çalıştıran bir işletme KOBİ sınıflandırmasında hangi ölçektedir?",
      secenekler: ["Orta büyüklükteki işletme", "Küçük işletme", "Büyük ölçekli işletme", "Mikro işletme", "Çok uluslu işletme"],
      aciklama: "50-249 kişi çalıştıranlar **orta büyüklükteki işletmedir**; bu ölçekte departmanlaşma başlar ve profesyonel yönetici istihdam edilir.",
    },
    {
      ad: "buyuk",
      zorluk: 2,
      soru: "Türkiye'deki sınıflandırmaya göre bir işletmenin büyük ölçekli sayılması için en az kaç kişi çalıştırması gerekir?",
      secenekler: ["250", "50", "100", "200", "500"],
      aciklama: "**250 ve daha fazla** kişi çalıştıranlar büyük ölçekli işletmedir; 250'den az çalışanı olanlar KOBİ'dir.",
    },
    {
      ad: "orta-ozellik",
      zorluk: 2,
      soru: "Bölümlere ayrılmanın (departmanlaşmanın) başladığı ve profesyonel yöneticilerin istihdam edildiği ölçek hangisidir?",
      secenekler: ["Orta büyüklükteki işletme", "Mikro işletme", "Küçük işletme", "Tek kişi işletmesi", "Aile işletmesi"],
      aciklama: "Özetteki tabloya göre departmanlaşma ve profesyonel yönetici **orta büyüklükteki işletmenin** (50-249 kişi) özelliğidir.",
    },
    {
      ad: "kucuk-ozellik",
      soru: "Esnek üretim yapısına sahip olan, pazar koşullarına hızlı uyum sağlayan ve kararları hızlı alan ölçek özette hangisidir?",
      secenekler: ["Küçük işletme", "Büyük ölçekli işletme", "Orta büyüklükteki işletme", "Çok uluslu işletme", "Holding"],
      aciklama: "Esneklik ve hızlı karar alma **küçük işletmelerin** (10-49 kişi) özelliği olarak verilir.",
    },
    {
      ad: "buyuk-ozellik",
      soru: "Kitle üretimi yapan, ölçek ekonomilerinden yararlanan ve Ar-Ge gücü yüksek olan işletmeler hangi ölçektedir?",
      secenekler: ["Büyük ölçekli işletme", "Küçük işletme", "Mikro işletme", "Orta büyüklükteki işletme", "Tek kişi işletmesi"],
      aciklama: "Kitle üretimi, ölçek ekonomileri, yüksek Ar-Ge gücü ve sermaye piyasalarına açıklık **büyük ölçekli işletmelerin** özellikleridir.",
    },
    {
      ad: "cok-uluslu",
      soru: "Merkezi bir ülkede bulunup birden fazla yabancı ülkede doğrudan yatırımla şube, fabrika ya da bağlı ortaklık aracılığıyla faaliyet gösteren işletmeler hangisidir?",
      secenekler: ["Çok uluslu işletmeler", "Karma işletmeler", "Kooperatifler", "Konsorsiyumlar", "Kamu işletmeleri"],
      aciklama: "Ana ülkedeki merkezden birden fazla ev sahibi ülkede doğrudan yatırımla üretim ve pazarlama yapan işletmeler **çok uluslu (ulusötesi, küresel)** işletmelerdir.",
    },
  ]),

  ...ozet(U, "u5-mulkiyet", [
    {
      ad: "kamu",
      soru: "Sermayesinin yarıdan fazlası devlete, belediyelere ya da kamu tüzel kişilerine ait olan işletmeler hangisidir?",
      secenekler: ["Kamu işletmeleri", "Özel işletmeler", "Karma işletmeler", "Yabancı sermayeli işletmeler", "Kooperatifler"],
      aciklama: "Sermayesinin tamamı ya da **%50'den fazlası** kamuya ait olanlar **kamu işletmeleridir**.",
    },
    {
      ad: "karma",
      soru: "Sermayesi özel sektör ve kamu kesimi tarafından ortaklaşa sağlanan işletmelere ne ad verilir?",
      secenekler: ["Karma işletmeler", "Kamu işletmeleri", "Özel işletmeler", "Ortak girişimler", "Çok uluslu işletmeler"],
      aciklama: "Sermayesi kamu ile özel sektörden birlikte gelen işletmeler **karma işletmelerdir**.",
    },
    {
      ad: "idt",
      zorluk: 3,
      soru: "Türkiye'de sermayesinin tamamı devlete ait olup ticari esaslara göre çalışan kamu kuruluşlarına ne ad verilir?",
      secenekler: ["İktisadi Devlet Teşekkülü", "Kamu İktisadi Kuruluşu", "Karma işletme", "Organize sanayi bölgesi", "Kooperatif"],
      aciklama: "**İDT** ticari esaslara göre çalışır; **KİK** ise tekel niteliğindeki kamusal mal ve hizmetleri kamu yararını gözeterek üretir. İkisi KİT (Kamu İktisadi Teşebbüsü) çatısındadır.",
    },
    {
      ad: "kik",
      zorluk: 3,
      soru: "Tekel niteliğindeki kamusal mal ve hizmetleri kamu yararı gözeterek üreten kuruluşlar hangisidir?",
      secenekler: ["Kamu İktisadi Kuruluşu", "İktisadi Devlet Teşekkülü", "Holding", "Karma işletme", "Konsern"],
      aciklama: "Kamu yararını gözeterek tekel niteliğindeki mal ve hizmetleri üretenler **KİK**'tir; ticari esasla çalışanlar İDT'dir.",
    },
    {
      ad: "kit-cati",
      zorluk: 2,
      soru: "İDT ve KİK hangi çatı kavram altında toplanır?",
      secenekler: ["Kamu İktisadi Teşebbüsü", "Küçük ve Orta Büyüklükteki İşletme", "Organize Sanayi Bölgesi", "Sermaye Piyasası Kurulu", "Kooperatif Birliği"],
      aciklama: "İktisadi Devlet Teşekkülleri ve Kamu İktisadi Kuruluşları **KİT (Kamu İktisadi Teşebbüsü)** çatısı altında toplanır.",
    },
    {
      ad: "ozel",
      soru: "Sermayesinin tamamı ya da çoğunluğu gerçek ya da özel hukuk tüzel kişilerine ait olan ve temel amacı kâr olan işletmeler hangisidir?",
      secenekler: ["Özel işletmeler", "Kamu işletmeleri", "Karma işletmeler", "Kooperatifler", "Konsorsiyumlar"],
      aciklama: "Sermayesi özel kişilere ait ve kâr amaçlı olanlar **özel işletmelerdir**.",
    },
    {
      ad: "yabanci",
      soru: "Sermayesinin tamamı ya da bir kısmı yabancı yatırımcılara ait olan ve ulusal kanunlar çerçevesinde kurulan işletmeler hangisidir?",
      secenekler: ["Yabancı sermayeli işletmeler", "Kamu işletmeleri", "Karma işletmeler", "Tek kişi işletmeleri", "Kooperatifler"],
      aciklama: "Bunlar **yabancı sermayeli işletmelerdir**; ulusal kanunlara göre kurulurlar.",
    },
  ]),
];
