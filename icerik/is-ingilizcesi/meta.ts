// İş İngilizcesi Pratik (isingilizcesi.selcukdinc.dev): Business English /
// Electrical-Electronics dersi. Dersin haftalık konuşma soruları ve "target words"
// listeleri ile 26.10.2026 quizi (Grup A ve B, cevaplı). Quiz soruları aynen
// "Quiz" etiketiyle, geri kalanlar quizin beş kalıbıyla türetilmiştir.
import type { PratikMeta } from "../tipler.ts";

export const isIngilizcesi: PratikMeta = {
  id: "is-ingilizcesi",
  alt: "isingilizcesi",
  yol: "isingilizcesi",
  eskiAlan: true,
  ad: "İş İngilizcesi",
  alan: "Dil",
  aciklama:
    "Elektrik-elektronik için İş İngilizcesi: elektrik motorları, elektrikli araçlar, gömülü sistemler ve IoT, güneş enerjisi ve iş ilanları üzerine quiz formatında sorular.",
  kaynakAdi: "dersin haftalık soruları, target word listeleri ve geçmiş quiz",
  kaynakAciklamasi:
    "Sorular dersin haftalık konuşma sorularına, her haftanın **target words** listesine ve 26.10.2026 tarihli quize dayanır; her soru etiketlidir:\n" +
    "- **Quiz**: 26.10.2026 quizinin (Grup A ve B) soruları, quizdeki haliyle ve cevap anahtarıyla.\n" +
    "- **Türetilmiş**: aynı hedef kelimelerden quizin beş kalıbıyla (anlamını seç, boşluğu doldur, paragrafa uymayan cümle, Türkçe ve İngilizce çeviri) ve haftalık sorulardan kendi cümlelerimizle yazılan yeni sorular.\n\n" +
    "Quizde iş ilanı ve başvuru kelimeleri de (requirements, responsibilities, preferred qualifications) sorulduğu için bunlar ayrı bir ünitede toplandı.",
  tanitim: {
    baslik: "İş İngilizcesi sorularını quiz formatında çöz",
    giris:
      "İş İngilizcesi Pratik, elektrik-elektronik öğrencileri için ücretsiz ve açık kaynaklı bir soru çalışma sitesi. Her ünitenin hedef kelimeleri quizdeki beş kalıpla sorulur: kelimenin anlamı, cümleyi tamamlayan kelime, paragrafa uymayan cümle, Türkçe ve İngilizce çeviri. Sorular ve şıklar her seferinde karışık gelir.",
    kitleler: [
      { baslik: "İş İngilizcesi dersini alan öğrenciler", metin: "Vize ve finalden önce geçmiş quizin sorularını ve aynı kalıpta türetilmiş yüzlerce soruyu çöz. Yanlış yaptıkların aralıklı tekrarla yeniden karşına çıkar." },
      { baslik: "Teknik İngilizce kelime dağarcığını geliştirmek isteyenler", metin: "Torque, inverter, firmware, irradiance gibi kelimeleri cümle içinde, Türkçe karşılıklarıyla birlikte pekiştir. Terimler sayfası bütün hedef kelimeleri bir arada gösterir." },
      { baslik: "Kısa sürede çok soru görmek isteyenler", metin: "Karma testte 10, 20, 30 ya da 50 soruluk bir test kur; her soruda şıkların yeri değişir, ezber değil anlayış sınanır." },
    ],
  },
  bagimsizlikNotu: "Bu site dersi veren öğretim elemanı ya da üniversite tarafından hazırlanmamıştır; türetilmiş sorular bağımsız olarak yazılmıştır.",
  uniteAdi: "ünite",
  uniteKisa: "Ü",
  yayinda: true,
  latex: false,
  logo: "/logolar/is-ingilizcesi.svg",
  etiketler: [
    { id: "cikmis", ad: "Quiz", renk: "cikmis", gercek: true, aciklama: "26.10.2026 quizinde (Grup A ya da B) sorulmuş soru" },
    { id: "turetilmis", ad: "Türetilmiş", renk: "turetilmis", aciklama: "Hedef kelimelerden ve haftalık sorulardan quiz formatında türetilmiş yeni soru" },
  ],
  uniteler: [
    { no: 1, baslik: "Electric Motors & Motor Drives" },
    { no: 2, baslik: "Electric Vehicles & Charging Systems" },
    { no: 3, baslik: "Embedded Systems & IoT" },
    { no: 4, baslik: "Solar Energy Systems" },
    { no: 5, baslik: "Job Ads & Applications" },
  ],
  kavramlar: {
    // 1. ünite: Electric motors & motor drives
    "u1-motor": { ad: "Electric motor ve kullanım alanları" },
    "u1-drive": { ad: "Motor drive: neden gerekir, ne kontrol eder" },
    "u1-speed": { ad: "Speed control" },
    "u1-torque": { ad: "Torque" },
    "u1-acdc": { ad: "AC motor ve DC motor" },
    "u1-inverter": { ad: "Motor sürücüsünde inverter" },
    "u1-efficiency": { ad: "Motorlarda energy efficiency" },
    "u1-rotor-stator": { ad: "Rotor ve stator" },

    // 2. ünite: Electric vehicles & charging systems
    "u2-ev": { ad: "Electric vehicle (EV) ve yaygınlaşması" },
    "u2-charging": { ad: "Charging station, slow ve fast charging" },
    "u2-time": { ad: "Charging time ve kilowatt-hour (kWh)" },
    "u2-range": { ad: "Range" },
    "u2-battery": { ad: "Battery pack" },
    "u2-regen": { ad: "Regenerative braking" },
    "u2-connector": { ad: "Connector ve şarj istasyonundaki sorunlar" },
    "u2-obc": { ad: "On-board charger" },
    "u2-proscons": { ad: "EV'lerin avantaj ve dezavantajları, şarjın geleceği" },

    // 3. ünite: Embedded systems & IoT
    "u3-embedded": { ad: "Embedded system" },
    "u3-iot": { ad: "Internet of Things (IoT) ve smart device" },
    "u3-mcu": { ad: "Microcontroller" },
    "u3-sensor-actuator": { ad: "Sensor ve actuator" },
    "u3-firmware": { ad: "Firmware" },
    "u3-wireless": { ad: "Wireless connection ve IoT iletişimi" },
    "u3-realtime": { ad: "Real-time ve data" },
    "u3-risks": { ad: "Akıllı cihazların faydaları ve riskleri" },

    // 4. ünite: Solar energy systems
    "u4-panel": { ad: "Solar panel ve photovoltaic (PV) cell" },
    "u4-inverter": { ad: "Güneş sisteminde inverter" },
    "u4-grid": { ad: "Grid connection" },
    "u4-offgrid": { ad: "Off-grid" },
    "u4-renewable": { ad: "Renewable energy ve güneşin avantajları" },
    "u4-irradiance": { ad: "Irradiance ve hava koşulları" },
    "u4-efficiency": { ad: "Panel efficiency ve güneşin sınırlılıkları" },
    "u4-storage": { ad: "Energy storage" },
    "u4-farm": { ad: "Solar farm" },

    // 5. ünite: Job ads & applications (quizde sorulan iş ilanı kelimeleri)
    "u5-ilan": { ad: "İş ilanı: position, requirements, responsibilities, preferred qualifications" },
    "u5-basvuru": { ad: "Başvuru dili: meet the requirement, good fit, experience, improve" },
  },
  terimler: [
    // 1. ünite
    { tr: "elektrik motoru", en: "electric motor", aciklama: "Elektrik enerjisini mekanik harekete (dönmeye) çeviren makine" },
    { tr: "motor sürücüsü", en: "motor drive", aciklama: "Motora verilen gücü ayarlayarak hızı ve torku kontrol eden elektronik birim" },
    { tr: "tork, döndürme momenti", en: "torque", aciklama: "Bir şeyi döndüren kuvvetin etkisi; motorun ne kadar güçlü çevirdiği" },
    { tr: "hız kontrolü", en: "speed control", aciklama: "Motorun ne kadar hızlı döndüğünü ayarlamak" },
    { tr: "AC motor", en: "AC motor", aciklama: "Alternatif akımla çalışan motor; fabrikalarda, pompalarda, fanlarda yaygın" },
    { tr: "DC motor", en: "DC motor", aciklama: "Doğru akımla (ör. bataryayla) çalışan motor; oyuncaklarda, küçük cihazlarda yaygın" },
    { tr: "evirici", en: "inverter", aciklama: "DC gücü AC güce çeviren cihaz; motor sürücülerinde ve güneş sistemlerinde kullanılır" },
    { tr: "verim", en: "efficiency", aciklama: "Alınan enerjinin ne kadarının işe yarar çıkışa dönüştüğü" },
    { tr: "rotor (dönen parça)", en: "rotor", aciklama: "Motorun dönen parçası" },
    { tr: "stator (duran parça)", en: "stator", aciklama: "Motorun sabit kalan, rotorun etrafındaki parçası" },
    { tr: "yük", en: "load", aciklama: "Motorun çevirmek zorunda olduğu iş ya da makine" },
    // 2. ünite
    { tr: "elektrikli araç", en: "electric vehicle (EV)", aciklama: "Yakıt yerine bataryadaki elektrikle, elektrik motoruyla giden araç" },
    { tr: "şarj istasyonu", en: "charging station", aciklama: "Elektrikli araçların şarj edildiği yer" },
    { tr: "hızlı şarj", en: "fast charging", aciklama: "Yüksek güçle (genellikle DC) kısa sürede şarj" },
    { tr: "menzil", en: "range", aciklama: "Aracın tek şarjla gidebileceği mesafe" },
    { tr: "batarya paketi", en: "battery pack", aciklama: "Araçtaki birçok hücreden oluşan büyük batarya" },
    { tr: "rejeneratif (geri kazanımlı) frenleme", en: "regenerative braking", aciklama: "Araç yavaşlarken enerjiyi geri kazanıp bataryaya gönderme" },
    { tr: "konnektör, şarj fişi", en: "connector", aciklama: "Şarj kablosunu araca bağlayan fiş" },
    { tr: "şarj süresi", en: "charging time", aciklama: "Bataryanın dolması için geçen süre" },
    { tr: "araç içi şarj cihazı", en: "on-board charger", aciklama: "Araca yerleşik, şebekeden gelen AC gücü batarya için dönüştüren şarj cihazı" },
    { tr: "kilovatsaat", en: "kilowatt-hour (kWh)", aciklama: "Enerji birimi; batarya kapasitesi ve tüketilen elektrik kWh ile ölçülür" },
    // 3. ünite
    { tr: "gömülü sistem", en: "embedded system", aciklama: "Bir cihazın içine yerleştirilmiş, tek bir işi yapan küçük bilgisayar sistemi" },
    { tr: "mikrodenetleyici", en: "microcontroller", aciklama: "İşlemci, bellek ve giriş-çıkışları tek yongada toplayan küçük bilgisayar" },
    { tr: "sensör, algılayıcı", en: "sensor", aciklama: "Sıcaklık, ışık, hareket gibi bir büyüklüğü ölçen parça" },
    { tr: "aygıt yazılımı, cihaz yazılımı", en: "firmware", aciklama: "Cihazın donanımında kayıtlı, onu çalıştıran yazılım" },
    { tr: "nesnelerin interneti", en: "Internet of Things (IoT)", aciklama: "Birbirine ve internete bağlanıp veri paylaşan günlük cihazlar" },
    { tr: "kablosuz bağlantı", en: "wireless connection", aciklama: "Wi-Fi, Bluetooth gibi kablo kullanmadan iletişim" },
    { tr: "gerçek zamanlı", en: "real-time", aciklama: "Olay olurken, gecikmeden" },
    { tr: "veri", en: "data", aciklama: "Ölçülen ya da toplanan bilgi" },
    { tr: "eyleyici, aktüatör", en: "actuator", aciklama: "Fiziksel bir hareket ya da eylem yapan parça (motor, valf, röle)" },
    { tr: "akıllı cihaz", en: "smart device", aciklama: "İnternete bağlanıp uzaktan kontrol edilebilen cihaz" },
    // 4. ünite
    { tr: "güneş paneli", en: "solar panel", aciklama: "Güneş ışığından elektrik üreten panel" },
    { tr: "fotovoltaik (PV) hücre", en: "photovoltaic (PV) cell", aciklama: "Güneş ışığını doğrudan elektriğe çeviren hücre" },
    { tr: "şebeke bağlantısı", en: "grid connection", aciklama: "Sistemin genel elektrik şebekesine bağlı olması" },
    { tr: "yenilenebilir enerji", en: "renewable energy", aciklama: "Güneş, rüzgâr gibi tükenmeyen kaynaklardan gelen enerji" },
    { tr: "ışınım", en: "irradiance", aciklama: "Bir yüzeye ulaşan güneş ışığının miktarı" },
    { tr: "enerji depolama", en: "energy storage", aciklama: "Üretilen enerjiyi sonra kullanmak için (ör. bataryada) saklama" },
    { tr: "güneş enerjisi santrali (güneş tarlası)", en: "solar farm", aciklama: "Çok sayıda panelden oluşan büyük güneş santrali" },
    { tr: "şebekeden bağımsız", en: "off-grid", aciklama: "Elektrik şebekesine bağlı olmadan çalışan" },
    // 5. ünite
    { tr: "iş ilanı", en: "job ad", aciklama: "Bir pozisyon için yayımlanan ilan" },
    { tr: "gereklilikler, aranan şartlar", en: "requirements", aciklama: "Pozisyon için mutlaka istenen beceri ve deneyimler" },
    { tr: "sorumluluklar", en: "responsibilities", aciklama: "Pozisyondaki kişinin yapacağı görevler" },
    { tr: "tercih sebebi olan nitelikler", en: "preferred qualifications", aciklama: "İşverenin olmasını istediği ek beceri ya da deneyim" },
    { tr: "başvuru sahibi, aday", en: "applicant / candidate", aciklama: "İşe başvuran kişi" },
    { tr: "ekip çalışması", en: "teamwork", aciklama: "Bir ekiple birlikte çalışabilme" },
  ],
  benzerler: [],
};
