// 2. ünite (Biyomedikal Sinyaller 1 sunumu): EEG, kayıt süreleri, frekans
// bantları, yaşla değişim, EEG analizi, ECoG, NREM ve REM uykusu.

import { sunum, type Soru } from "./yardimci.ts";

const U = 2;

export const unite2: Soru[] = [
  ...sunum(U, "u2-tanim", [
    {
      id: "bm-u2-berger", tip: "mcq", zorluk: 1,
      soru: "EEG'yi 1929'da keşfeden bilim insanı kimdir?",
      secenekler: ["Hans Berger", "Willem Einthoven", "Joseph Fourier", "Stéphane Mallat", "Georg von Hevesy"],
      dogru: 0,
      aciklama: "EEG'yi Alman fizikçi **Hans Berger** 1929'da keşfetmiştir. Einthoven EKG derivasyonlarıyla, Fourier dönüşümle, Mallat dalgacık algoritmasıyla, Hevesy nükleer tıpla anılır.",
    },
    {
      id: "bm-u2-evoked", tip: "tf", zorluk: 2,
      soru: "EEG yalnızca beynin kendiliğinden oluşan ritmik potansiyellerini kaydeder; bir uyarana bağlı (uyarılmış) potansiyeller EEG'nin konusu değildir.",
      dogru: false,
      aciklama: "Yanlış. EEG hem kendiliğinden oluşan ritmik potansiyelleri hem de reseptör etkinliğine bağlı **uyarılmış (evoked)** potansiyelleri kaydetme yöntemidir.",
    },
    {
      id: "bm-u2-duz-eeg", tip: "mcq", zorluk: 1,
      soru: "Elektriksel etkinliğin hiç olmadığını gösteren düz bir EEG neyin klinik kanıtıdır?",
      secenekler: ["Beyin ölümü", "Derin uyku", "Epilepsi nöbeti", "REM uykusu"],
      dogru: 0,
      aciklama: "Düz EEG **beyin ölümünün** klinik kanıtıdır. Canlılık sürdükçe EEG sinyali her koşulda gözlenir.",
    },
    {
      id: "bm-u2-epilepsi", tip: "tf", zorluk: 1,
      soru: "Sunuma göre EEG, epilepsinin teşhisinde ve tiplerinin belirlenmesinde tedaviye karar verdiren en temel inceleme yöntemidir.",
      dogru: true,
      aciklama: "Doğru. EEG ayrıca tümör, lezyon, enfeksiyon, uyku bozuklukları ve beyin ölümünün tanısında kullanılır.",
    },
  ]),

  ...sunum(U, "u2-sure", [
    {
      id: "bm-u2-rutin", tip: "mcq", zorluk: 1,
      soru: "Rutin (normal) bir EEG kaydı ne kadar sürer?",
      secenekler: ["20–30 dakika", "5–10 dakika", "Ortalama 1 saat", "3–6 saat"],
      dogru: 0,
      aciklama: "Rutin EEG **20–30 dakika**, uyku-uyanıklık EEG'si ortalama 1 saat, gece kayıtları 3–6 saat sürer.",
    },
    {
      id: "bm-u2-uyku-uyaniklik", tip: "tf", zorluk: 2,
      soru: "İdeal bir EEG incelemesinde uyku, uyanıklık ve aradaki geçiş dönemlerinin görülmesi hedeflenir, çünkü bazı hastalık bulguları yalnızca belli dönemlerde belirginleşir.",
      dogru: true,
      aciklama: "Doğru. Bu yüzden yaklaşık bir saatlik uyku ve uyanıklık kaydı tercih edilir.",
    },
    {
      id: "bm-u2-gece", tip: "mcq", zorluk: 2,
      soru: "Sunuma göre gece EEG kayıtları ne kadar sürer?",
      secenekler: ["3–6 saat", "20–30 dakika", "40–60 dakika", "Tam 24 saat"],
      dogru: 0,
      aciklama: "Gece kayıtları **3–6 saat** sürer. Gerektiğinde gece boyu ya da 24 saatlik kayıtlar da kullanılabilir.",
    },
  ]),

  ...sunum(U, "u2-kayit", [
    {
      id: "bm-u2-aralik", tip: "mcq", zorluk: 2,
      soru: "Sunuma göre EEG dalgalarının frekans ve genlik aralığı hangisidir?",
      secenekler: ["0,5–70 Hz ve 5–400 µV", "0,1–100 Hz ve yaklaşık 1 mV", "8–13 Hz ve 1–10 mV", "50–500 Hz ve 1–5 V"],
      dogru: 0,
      aciklama: "EEG frekansı **0,5–70 Hz**, genliği **5–400 µV** aralığındadır. EKG'nin genliği ise mV mertebesindedir.",
    },
    {
      id: "bm-u2-1020", tip: "mcq", zorluk: 2,
      soru: "EEG'de kullanılan \"10-20\" sistemi kafatası çevresinde kaç elektrot bölgesi içerir?",
      secenekler: ["21", "12", "16", "31", "8"],
      dogru: 0,
      aciklama: "10-20 sistemi **21** elektrot bölgesi içerir. EEG cihazları genellikle 8 ya da 16 kanallıdır.",
    },
    {
      id: "bm-u2-monopolar", tip: "fill", zorluk: 2,
      soru: "EEG'de elektrotlardan yalnızca biri aktifse ve diğeri kulak bölgesindeki referans elektrotsa bu kayda ____ kayıt denir.",
      bosluklar: [["monopolar"]],
      aciklama: "İki elektrot da aktifse **bipolar**, yalnızca biri aktif ve diğeri kulaktaki referanssa **monopolar** kayıttır.",
    },
    {
      id: "bm-u2-ritmik", tip: "tf", zorluk: 2,
      soru: "EEG dalgaları EKG'deki gibi belirli biçimli ve tam periyodiktir.",
      dogru: false,
      aciklama: "Yanlış. EEG dalgaları ritmiktir ama tam periyodik değildir; EKG'deki gibi özel biçimleri yoktur ve rastgele potansiyel değişimlerini andırırlar.",
    },
    {
      id: "bm-u2-parametre", tip: "mcq", zorluk: 2,
      soru: "EEG dalgalarının değerlendirilmesinde en önemli parametre hangisidir?",
      secenekler: ["Frekans", "Genlik", "Dalga biçimi", "Kayıt süresi"],
      dogru: 0,
      aciklama: "En önemli parametre **frekans**tır, ikinci derecede önemli parametre genliktir. Frekans, belli bir sürede tepeler sayılıp süreye bölünerek kabaca bulunabilir.",
    },
  ]),

  ...sunum(U, "u2-bant", [
    {
      id: "bm-u2-alfa", tip: "mcq", zorluk: 1,
      soru: "Gözler kapalı, sakin ve rahat bir dinlenme sırasında baskın olan EEG bandı hangisidir?",
      secenekler: ["Alfa (8–13 Hz)", "Beta (13–30 Hz)", "Delta (0,5–4 Hz)", "Teta (4–8 Hz)", "Gama (30–100+ Hz)"],
      dogru: 0,
      aciklama: "Gözler kapalı sakin dinlenmede **alfa** görülür. Gözler açılınca alfanın yerini beta alır.",
    },
    {
      id: "bm-u2-delta", tip: "mcq", zorluk: 1,
      soru: "En yavaş beyin dalgası olan ve derin uykuda baskın olan bant hangisidir?",
      secenekler: ["Delta", "Teta", "Alfa", "Beta", "Gama"],
      dogru: 0,
      aciklama: "**Delta** (0,5–4 Hz) en yavaş banttır; derin ve rüyasız uykuda baskındır.",
    },
    {
      id: "bm-u2-beta-aralik", tip: "mcq", zorluk: 2,
      soru: "Odaklanma, problem çözme ve aktif düşünme sırasında baskın olan beta bandının frekans aralığı hangisidir?",
      secenekler: ["13–30 Hz", "8–13 Hz", "4–8 Hz", "30–100 Hz"],
      dogru: 0,
      aciklama: "Beta **13–30 Hz**'dir. 8–13 Hz alfa, 4–8 Hz teta, 30–100+ Hz gamadır.",
    },
    {
      id: "bm-u2-goz-acik", tip: "tf", zorluk: 1,
      soru: "Gözlerin açılmasıyla EEG'deki alfa dalgasının yerini beta dalgası alır.",
      dogru: true,
      aciklama: "Doğru. Sunumdaki kayıtta gözler kapalıyken alfa görülür, gözler açılınca beta gelir.",
    },
    {
      id: "bm-u2-teta", tip: "fill", zorluk: 2,
      soru: "Hafif uyku, derin meditasyon ve hayal kurma anlarında ortaya çıkan 4–8 Hz'lik EEG bandına ____ bandı denir.",
      bosluklar: [["teta", "theta"]],
      aciklama: "4–8 Hz **teta** bandıdır; hafıza ve öğrenme süreçleriyle de ilgilidir.",
    },
    {
      id: "bm-u2-gama", tip: "mcq", zorluk: 2,
      soru: "En hızlı beyin dalgası olan ve üst düzey bilişsel işlevlerle ilişkilendirilen bant hangisidir?",
      secenekler: ["Gama", "Beta", "Alfa", "Delta"],
      dogru: 0,
      aciklama: "**Gama** (30–100+ Hz) en hızlı banttır; farkındalık ve yoğun konsantrasyonla ilişkilidir.",
    },
  ]),

  ...sunum(U, "u2-yas", [
    {
      id: "bm-u2-aktivite", tip: "mcq", zorluk: 2,
      soru: "Beynin aktivite düzeyi yükseldikçe EEG dalgalarında ne olur?",
      secenekler: ["Frekans artar, genlik azalır", "Frekans azalır, genlik artar", "Frekans ve genlik birlikte artar", "Frekans ve genlik birlikte azalır"],
      dogru: 0,
      aciklama: "Aktivite yükseldikçe **frekans artar, genlik azalır**. Uykuya dalarken tersi olur: frekans düşer, genlik artar.",
    },
    {
      id: "bm-u2-yetiskin", tip: "mcq", zorluk: 2,
      soru: "Sunuma göre yetişkinlerde egemen EEG frekansı hangi aralıktadır?",
      secenekler: ["8–12 Hz", "3–4 Hz", "6–7 Hz", "20–30 Hz"],
      dogru: 0,
      aciklama: "Egemen frekans yaşla yükselir: yeni doğanda 3–4 Hz, 2–3 yaşta 6–7 Hz, **yetişkinde 8–12 Hz**.",
    },
    {
      id: "bm-u2-yenidogan", tip: "tf", zorluk: 2,
      soru: "Yeni doğanlarda egemen EEG frekansı yetişkinlerden daha yüksektir.",
      dogru: false,
      aciklama: "Yanlış. Egemen frekans yaşla **yükselir**; yeni doğanda 3–4 Hz, yetişkinde 8–12 Hz'dir.",
    },
  ]),

  ...sunum(U, "u2-analiz", [
    {
      id: "bm-u2-gurultu", tip: "mcq", zorluk: 2,
      soru: "Aşağıdakilerden hangisi sunumda EEG sinyallerini etkileyen gürültü kaynakları arasında sayılmaz?",
      secenekler: ["Röntgen ışınımı", "Şebeke gürültüsü", "EKG gürültüsü", "Göz hareketleri", "Çene hareketleri"],
      dogru: 0,
      aciklama: "EEG genliği çok küçük olduğu için **şebeke**, **EKG**, **göz** ve **çene hareketleri** sinyali kolayca bozar. Röntgen ışınımı sayılmaz.",
    },
    {
      id: "bm-u2-onislem", tip: "mcq", zorluk: 2,
      soru: "Aşağıdakilerden hangisi EEG analizinde ön işlem değil, özellik çıkarma adımıdır?",
      secenekler: ["Alt bantların güç ve enerjisini hesaplamak", "Kaydın başındaki hatalı kısmı çıkarmak", "Gürültüyü gidermek", "Uzman skorlarına göre ayrıştırmak"],
      dogru: 0,
      aciklama: "Alt bantlara ayırıp **güç, enerji, bağıl güç** gibi değerleri hesaplamak özellik çıkarmadır. Diğerleri ön işlem adımlarıdır.",
    },
    {
      id: "bm-u2-ecog", tip: "fill", zorluk: 2,
      soru: "Elektrotun doğrudan beyin kabuğuna dokundurulduğu, sinyalin 3–4 kat büyük genlikle kaydedildiği yönteme ____ denir.",
      bosluklar: [["elektrokortikografi", "elektrokortiyografi", "ecog"]],
      aciklama: "Bu kayıt biçimi **elektrokortikografi (ECoG)** adını alır.",
    },
    {
      id: "bm-u2-uyku-eeg", tip: "tf", zorluk: 1,
      soru: "Uyku EEG'sinin analiz amaçları arasında uyku evreleme ve apneik atak tespiti vardır.",
      dogru: true,
      aciklama: "Doğru. Rutin EEG'de epilepsi, tümör ve lezyon tespiti; uyku EEG'sinde uyku evreleme, apne ve uyku hastalıkları hedeflenir.",
    },
  ]),

  ...sunum(U, "u2-nrem", [
    {
      id: "bm-u2-nrem-uyku", tip: "mcq", zorluk: 2,
      soru: "Uykuya dalarken (NREM başlangıcı) EEG'de ne gözlenir?",
      secenekler: ["Frekans giderek azalır, genlik giderek artar", "Frekans giderek artar, genlik giderek azalır", "Frekans ve genlik değişmez", "Yalnızca gama dalgaları görülür"],
      dogru: 0,
      aciklama: "NREM'de EEG yavaşlar: **frekans düşer, genlik artar**. Kan basıncı, kalp hızı ve solunum da azalır.",
    },
    {
      id: "bm-u2-evre4", tip: "mcq", zorluk: 2,
      soru: "Delta dalgalarının baskın olduğu, uyandırmanın zor olduğu en derin NREM evresi hangisidir?",
      secenekler: ["Evre 4", "Evre 1", "Evre 2", "Evre 3"],
      dogru: 0,
      aciklama: "**Evre 4** en derin NREM dönemidir; delta baskındır. Evre 1'de alfa görülür ve kolay uyanılır, Evre 3'te teta ve delta başlar.",
    },
    {
      id: "bm-u2-buyume", tip: "tf", zorluk: 1,
      soru: "Büyüme hormonu özellikle derin NREM uykusunda salgılanır.",
      dogru: true,
      aciklama: "Doğru. NREM fiziksel onarım, enerji toplama ve büyüme hormonu salgısı için önemlidir.",
    },
    {
      id: "bm-u2-evre2", tip: "mcq", zorluk: 3,
      soru: "EEG desenlerinin dikensi dalgalarla (yüksek voltajlı ateşlemeler) düzensizleştiği ve \"önemli-önemsiz ayrımı\"nın yapıldığı evre hangisidir?",
      secenekler: ["Evre 2", "Evre 1", "Evre 4", "REM"],
      dogru: 0,
      aciklama: "**Evre 2**'de EEG dikensi dalgalarla düzensizleşir ve uyandırmak zorlaşır.",
    },
  ]),

  ...sunum(U, "u2-rem", [
    {
      id: "bm-u2-paradoks", tip: "mcq", zorluk: 2,
      soru: "REM uykusuna neden \"paradoks uyku\" denir?",
      secenekler: [
        "Uyku derin olduğu halde EEG uyanık ve dikkatli bir kişininki gibidir",
        "Uyku hafif olduğu halde EEG'de yalnızca delta dalgaları vardır",
        "Gözler hareketsiz olduğu halde kaslar sürekli kasılır",
        "Kalp hızı düştüğü halde beynin oksijen tüketimi sıfırlanır",
      ],
      dogru: 0,
      aciklama: "REM'de uyku derindir ama **EEG uyanık bir kişininki gibidir**; uyandırmak zor, kendiliğinden uyanmak kolaydır.",
    },
    {
      id: "bm-u2-rem-dongu", tip: "mcq", zorluk: 2,
      soru: "Sunuma göre bir gecede kaç uyku döngüsü yaşanır?",
      secenekler: ["4–5", "1–2", "8–10", "12–15"],
      dogru: 0,
      aciklama: "Bir gecede **4–5 döngü** olur. REM başta yaklaşık 10 dakikadır ve her döngüde uzar.",
    },
    {
      id: "bm-u2-atoni", tip: "tf", zorluk: 2,
      soru: "REM uykusunda göz kasları dışındaki iskelet kasları inhibe olur (atoni), böylece kişi rüyasındakileri fiziksel olarak yapmaz.",
      dogru: true,
      aciklama: "Doğru. REM'de beyin çok aktiftir ama kol ve bacak kasları geçici olarak hareketsiz kalır.",
    },
    {
      id: "bm-u2-rem-kalp", tip: "tf", zorluk: 2,
      soru: "REM uykusunda kan basıncı, kalp hızı ve solunum sayısı NREM'e göre azalır ve düzenli hale gelir.",
      dogru: false,
      aciklama: "Yanlış. REM'de bunlar **artar ve düzensizleşir**; beynin oksijen tüketimi de artar. Sunum REM'i en sık kalp krizi dönemi olarak anar.",
    },
    {
      id: "bm-u2-sabah", tip: "mcq", zorluk: 2,
      soru: "Gece boyunca NREM ve REM sürelerinin dağılımı nasıl değişir?",
      secenekler: ["Sabaha doğru NREM kısalır, REM uzar", "Sabaha doğru REM kısalır, NREM uzar", "İkisi de gece boyunca eşit kalır", "REM yalnızca uykunun ilk saatinde görülür"],
      dogru: 0,
      aciklama: "Uykuya dalınca uzun bir NREM yaşanır; **sabaha doğru NREM kısalır, REM uzar**.",
    },
  ]),
];
