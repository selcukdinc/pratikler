// Tıp Elektroniği Pratik (tipelektronigi.selcukdinc.dev): Doç. Dr. Güzin Özmen'in
// Tıp Elektroniği ders notları (1-4. hafta) ve dersin kaynakçasındaki iki kitap
// (Semmlow, Biosignal and Biomedical Image Processing; Subasi, Practical Guide for
// Biomedical Signals Analysis Using Machine Learning Techniques).
import type { PratikMeta } from "../tipler.ts";

export const tipElektronigi: PratikMeta = {
  id: "tip-elektronigi",
  alt: "tipelektronigi",
  yol: "tipelektronigi",
  eskiAlan: true,
  ad: "Tıp Elektroniği",
  alan: "Mühendislik",
  aciklama:
    "Fizyolojik sinyaller, biyomedikal ölçüm zinciri, EKG, EEG, EMG ve biyomedikal sensörler üzerine ders notlarından ve iki kaynak kitaptan türetilmiş sorular.",
  kaynakAdi: "Tıp Elektroniği ders notları ve kaynak kitaplar",
  kaynakAciklamasi:
    "Sorular dersin kendi notlarına ve kaynakçasındaki iki kitaba dayanır; her soru etiketlidir:\n" +
    "- **Ders notu**: Tıp Elektroniği ders notlarındaki (Doç. Dr. Güzin Özmen) bilgiden kendi cümlelerimizle yazılan sorular. Sayısal değerler notlardaki gibidir.\n" +
    "- **Kitap**: J. L. Semmlow, *Biosignal and Biomedical Image Processing* ve A. Subasi, *Practical Guide for Biomedical Signals Analysis Using Machine Learning Techniques* kitaplarının ilgili bölümlerinden türetilen, notları tamamlayan sorular.\n\n" +
    "Notlarda iki farklı hafta aynı büyüklük için farklı aralık verdiğinde (ör. EEG genliği) soru hangi haftanın notuna dayandığını söyler.",
  tanitim: {
    baslik: "Tıp Elektroniği sorularını karışık sırayla çöz",
    giris:
      "Tıp Elektroniği Pratik, dersin notlarına dayanan ücretsiz ve açık kaynaklı bir soru çalışma sitesi. Fizyolojik sinyallerden ölçüm zincirine, EKG, EEG ve EMG'den sensörlerin statik ve dinamik özelliklerine kadar her hafta soruları tek yerde; sorular ve şıklar her seferinde karışık gelir, formüller düzgün dizilir.",
    kitleler: [
      { baslik: "Tıp Elektroniği dersini alan öğrenciler", metin: "Her haftanın notundan türetilmiş soruları çöz, sınavdan önce sayısal değerleri ve kavramları pekiştir. Yanlış yaptıkların aralıklı tekrarla yeniden karşına çıkar." },
      { baslik: "Biyomedikal ölçüme giriş yapanlar", metin: "Measurand, sensör, analog ön uç, ADC ve gürültü kavramlarını kısa sorularla sına; açıklamalar her cevabın nedenini anlatır." },
      { baslik: "Kısa sürede çok soru görmek isteyenler", metin: "Karma testte 10, 20, 30 ya da 50 soruluk bir test kur; her soruda şıkların yeri değişir, ezber değil anlayış sınanır." },
    ],
  },
  bagimsizlikNotu: "Bu site dersi veren öğretim üyesi ya da üniversite tarafından hazırlanmamıştır; sorular ders notlarından bağımsız olarak türetilmiştir.",
  uniteAdi: "ünite",
  uniteKisa: "Ü",
  yayinda: true,
  latex: true,
  logo: "/logolar/tip-elektronigi.svg",
  etiketler: [
    { id: "ders", ad: "Ders notu", renk: "ders", aciklama: "Tıp Elektroniği ders notlarındaki bilgiden türetilmiş soru" },
    { id: "kitap", ad: "Kitap", renk: "kitap", aciklama: "Dersin kaynak kitaplarından (Semmlow, Subasi) türetilmiş soru" },
  ],
  uniteler: [
    { no: 1, baslik: "Fizyolojik Sinyaller ve Biyomedikal Ölçüm Sistemleri" },
    { no: 2, baslik: "Biyosinyaller: EKG, EEG ve EMG" },
    { no: 3, baslik: "Biyomedikal Sensörler ve Dönüştürücüler" },
  ],
  kavramlar: {
    // 1. ünite (1-2. hafta): Tıp elektroniğine giriş, fizyolojik sinyaller, insan–enstrümantasyon sistemi
    "u1-tanim": { ad: "Tıp elektroniğinin tanımı ve kapsamı" },
    "u1-sinyal": { ad: "Fizyolojik sinyal kavramı" },
    "u1-sinif": { ad: "Fizyolojik sinyallerin sınıflandırılması" },
    "u1-genlik": { ad: "Biyosinyallerin genlik ve frekans özellikleri" },
    "u1-measurand": { ad: "Ölçülen büyüklük (measurand)" },
    "u1-sistem": { ad: "İnsan–enstrümantasyon sistemi" },
    "u1-zincir": { ad: "Ölçüm sisteminin blokları, sensör ve elektrot" },
    "u1-kosullama": { ad: "Analog ön uç ve sinyal koşullama" },
    "u1-adc": { ad: "ADC, örnekleme ve veri toplama" },
    "u1-ornek": { ad: "Örnek sistemler: EKG ve PPG zinciri, kalp hızı" },
    "u1-gurultu": { ad: "Gürültü, artefakt ve sinyal-gürültü oranı" },
    "u1-guvenlik": { ad: "Hasta güvenliği" },

    // 2. ünite (3. hafta): EKG, EEG ve EMG
    "u2-ekg-temel": { ad: "EKG'nin tanımı ve Einthoven üçgeni" },
    "u2-ekg-tur": { ad: "Standart, Holter ve kablosuz EKG" },
    "u2-ekg-kullanim": { ad: "EKG'nin klinik kullanım alanları" },
    "u2-ekg-dalga": { ad: "EKG dalgaları ve aralıkları" },
    "u2-ekg-isleme": { ad: "EKG gürültüsü, ön işleme ve otomatik analiz" },
    "u2-veritabani": { ad: "Açık biyosinyal veritabanları" },
    "u2-eeg-temel": { ad: "EEG'nin tanımı, kullanımı ve kaydı" },
    "u2-eeg-yerlesim": { ad: "EEG elektrot yerleşimi (10–20 sistemi)" },
    "u2-eeg-dalga": { ad: "EEG dalgaları (delta, teta, alfa, beta)" },
    "u2-emg": { ad: "EMG'nin özellikleri ve kaydı" },

    // 3. ünite (4. hafta): Biyomedikal sensörler ve dönüştürücüler
    "u3-donusum": { ad: "Measurand, sensör ve dönüştürücü" },
    "u3-statik": { ad: "Giriş–çıkış karakteristiği, ölçüm aralığı ve hassasiyet" },
    "u3-hata": { ad: "Doğruluk, kesinlik, çözünürlük, doğrusallık, histerezis ve drift" },
    "u3-kalibrasyon": { ad: "Kalibrasyon" },
    "u3-dinamik": { ad: "Sensörlerin dinamik özellikleri" },
    "u3-rezistif": { ad: "Rezistif sensörler, strain gauge ve Wheatstone köprüsü" },
    "u3-sicaklik": { ad: "Sıcaklık sensörleri: termistör ve RTD" },
    "u3-piezo": { ad: "Piezoelektrik sensörler" },
    "u3-kapasitif": { ad: "Kapasitif sensörler" },
    "u3-optik": { ad: "Optik sensörler: PPG ve pulse oksimetre" },
    "u3-secim": { ad: "Sensör seçimi, hata kaynakları ve giyilebilir sensörler" },
  },
  terimler: [
    { tr: "ölçülen büyüklük", en: "measurand", aciklama: "Ölçüm sisteminin belirlemeyi amaçladığı fiziksel, kimyasal ya da biyolojik büyüklük" },
    { tr: "dönüştürücü", en: "transducer", aciklama: "Bir enerji ya da fiziksel büyüklük biçimini başka bir biçime dönüştüren eleman" },
    { tr: "sensör", en: "sensor", aciklama: "Ölçülen büyüklüğe duyarlı olan ve onun hakkında bilgi taşıyan çıkış üreten eleman" },
    { tr: "biyopotansiyel", en: "biopotential", aciklama: "Uyarılabilir hücre ve dokuların elektriksel aktivitesinden doğan, elektrotla ölçülen potansiyel" },
    { tr: "analog ön uç", en: "analog front-end (AFE)", aciklama: "Sensör ya da elektrot sinyalini kuvvetlendirip filtreleyerek ADC'ye hazırlayan bölüm" },
    { tr: "sinyal koşullama", en: "signal conditioning", aciklama: "Analog sinyalin kuvvetlendirme ve filtrelemeyle sonraki aşamalara uygun hale getirilmesi" },
    { tr: "analog-sayısal dönüştürücü", en: "analog-to-digital converter (ADC)", aciklama: "Sürekli analog sinyali sayısal veriye çeviren devre" },
    { tr: "veri toplama sistemi", en: "data acquisition (DAQ)", aciklama: "Koşullama, örnekleme, sayısallaştırma ve bilgisayara aktarmayı kapsayan sistem" },
    { tr: "gürültü", en: "noise", aciklama: "Ölçüm sistemine eklenen istenmeyen rastlantısal ya da elektriksel bileşen" },
    { tr: "artefakt", en: "artifact", aciklama: "Hedef fizyolojik süreçten kaynaklanmayan ama kayıtta görülen bozucu bileşen" },
    { tr: "sinyal-gürültü oranı", en: "signal-to-noise ratio (SNR)", aciklama: "Sinyal gücünün gürültü gücüne oranı; genellikle desibelle verilir" },
    { tr: "fotopletismografi", en: "photoplethysmography (PPG)", aciklama: "Dokudaki kan hacmi değişimini iletilen ya da yansıyan ışıktaki değişimle algılayan optik yöntem" },
    { tr: "kalp hızı değişkenliği", en: "heart rate variability (HRV)", aciklama: "Ardışık RR aralıklarındaki değişim" },
    { tr: "hassasiyet", en: "sensitivity", aciklama: "Girişteki değişimin çıkışta oluşturduğu değişim" },
    { tr: "ölçüm aralığı", en: "range", aciklama: "Sensörün belirtilen performansla ölçebildiği en küçük ve en büyük giriş arasındaki bölge" },
    { tr: "doğruluk", en: "accuracy", aciklama: "Ölçülen değerin gerçek ya da referans değere yakınlığı" },
    { tr: "kesinlik", en: "precision", aciklama: "Aynı büyüklüğün tekrarlanan ölçümlerinin birbirine yakınlığı" },
    { tr: "çözünürlük", en: "resolution", aciklama: "Ölçüm sisteminin ayırt edebildiği en küçük giriş değişimi" },
    { tr: "doğrusallık", en: "linearity", aciklama: "Gerçek karakteristiğin ideal doğruya yakınlığı" },
    { tr: "histerezis", en: "hysteresis", aciklama: "Aynı girişte, girişe hangi yönden ulaşıldığına göre farklı çıkış alınması" },
    { tr: "kayma", en: "drift", aciklama: "Giriş sabitken sensör çıkışının zamanla değişmesi" },
    { tr: "kalibrasyon", en: "calibration", aciklama: "Sistem çıkışı ile bilinen referans değerler arasındaki ilişkinin belirlenmesi" },
    { tr: "bant genişliği", en: "bandwidth", aciklama: "Sistemin sinyali yeterli kazançla geçirdiği frekans aralığı" },
    { tr: "uzama ölçer", en: "strain gauge", aciklama: "Mekanik deformasyonla direnci değişen sensör" },
  ],
  benzerler: [],
};
