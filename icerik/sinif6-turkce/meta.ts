// 6. Sınıf Türkçe (pratikler.selcukdinc.dev/sinif6/turkce): ortaokul 6. sınıf Türkçe
// dersi, Türkiye Yüzyılı Maarif Modeli öğretim programı (tymm.meb.gov.tr). Alt alan
// adı yoktur, çatı adresinin yolunda açılır (meta.yol). Üniteler programın altı
// temasıdır; kavramlar programın öğrenme çıktılarına (T.O.6.5 gibi) göre ayrılır ve
// soruların ref'inde kod yazılır. Bütün sorular türetilmiştir: okuma metinleri ve
// sorular kendi cümlelerimizle yazılır, ders kitabından metin alınmaz.
import type { PratikMeta } from "../tipler.ts";

export const sinif6Turkce: PratikMeta = {
  id: "sinif6-turkce",
  alt: "sinif6turkce",
  yol: "sinif6/turkce",
  ad: "6. Sınıf Türkçe",
  alan: "6. Sınıf",
  aciklama:
    "Ortaokul 6. sınıf Türkçe: MEB öğretim programının temalarına ve ortak yazılı sınavların kapsamına göre okuma, söz varlığı, yazım ve noktalama soruları.",
  kaynakAdi: "MEB Türkçe öğretim programı ve ortak yazılı sınav kapsamı",
  kaynakAciklamasi:
    "Sorular MEB'in Türkiye Yüzyılı Maarif Modeli **Türkçe Dersi Öğretim Programı**'na (6. sınıf) ve ortak yazılı sınavların konu-soru dağılımına göre hazırlanır. Her sorunun altında programdaki öğrenme çıktısının kodu yazar (ör. **T.O.6.5**: okuduğu metindeki söz varlığının anlamını tahmin edebilme).\n\n" +
    "Okuma metinleri ve soruların hepsi bu site için yazılmıştır; ders kitabındaki metinler kullanılmaz. Ortak yazılı sınavlar açık uçlu ve kısa cevaplı sorulardan oluştuğu için soruların bir kısmı **yazma** sorusudur: cevabını yazarsın, sonra örnek cevap ve puanlama ölçütüyle karşılaştırıp kendini değerlendirirsin.",
  tanitim: {
    baslik: "6. sınıf Türkçe ortak yazılıya soru çözerek hazırlan",
    giris:
      "6. Sınıf Türkçe Pratik, ortaokul öğrencileri için ücretsiz bir soru çalışma alanı. Sorular MEB öğretim programının temalarına ve ortak yazılı sınavda sorulan öğrenme çıktılarına göre ayrılmıştır: metni anlama, kelimenin anlamını tahmin etme, anahtar kelime, söz varlığı, yazım kuralları ve noktalama. Açık uçlu sorularda örnek cevabı ve puanlama ölçütünü görürsün.",
    kitleler: [
      { baslik: "6. sınıf öğrencileri", metin: "Ortak yazılıdan önce sınavın kapsamındaki her konudan soru çöz. Yanlış yaptıkların aralıklı tekrarla yeniden karşına gelir. Hesap açmadan da çalışabilirsin." },
      { baslik: "Türkçe öğretmenleri", metin: "Sorulardan sınav kağıdı ve A-B grupları hazırla ya da sınıfına bir soru havuzu bağlantısı paylaş. Her sorunun öğrenme çıktısı kodu yanında yazar." },
      { baslik: "Veliler", metin: "Çocuğunuzla birlikte hangi konuda zorlandığını görün: ilerleme sayfası her konudaki doğru oranını gösterir." },
    ],
  },
  bagimsizlikNotu:
    "Bu site Millî Eğitim Bakanlığı tarafından hazırlanmamıştır; sorular programın öğrenme çıktılarından bağımsız olarak türetilmiştir. Ortak yazılı sınavın gerçek soruları değildir.",
  uniteAdi: "tema",
  uniteKisa: "T",
  yayinda: true,
  latex: false,
  logo: "/logolar/sinif6-turkce.svg",
  etiketler: [
    { id: "turetilmis", ad: "Türetilmiş", renk: "turetilmis", aciklama: "Öğretim programının öğrenme çıktısına göre bu site için yazılmış soru" },
    { id: "yazili1", ad: "1. yazılı", renk: "ders", aciklama: "1. dönem 1. ortak yazılı sınavın kapsamındaki öğrenme çıktılarından" },
  ],
  uniteler: [
    { no: 1, baslik: "Dilimizin Zenginliği" },
    { no: 2, baslik: "Bağımsızlık Yolu" },
    { no: 3, baslik: "Farklı Dünyalar" },
    { no: 4, baslik: "İletişim ve Sosyal İlişkiler" },
    { no: 5, baslik: "Bilim ve Teknoloji" },
    { no: 6, baslik: "Lider Ruhlar" },
  ],
  kavramlar: {
    // 1. tema: Dilimizin Zenginliği
    "u1-anlam-tahmin": { ad: "Kelimenin anlamını metinden tahmin etme (T.O.6.5)" },
    "u1-yuzey-anlam": { ad: "Metinde açıkça verilen bilgi: yüzey anlam (T.O.6.6)" },
    "u1-anahtar-kelime": { ad: "Metnin anahtar kelimeleri (T.O.6.16)" },
    "u1-es-zit-anlam": { ad: "Eş anlamlı ve zıt anlamlı kelimeler (T.O.6.21)" },
    "u1-gercek-mecaz": { ad: "Gerçek, mecaz ve terim anlam (T.O.6.21)" },
    "u1-deyim-atasozu": { ad: "Deyim, atasözü ve ikileme (T.O.6.21)" },
    "u1-yazi-plani": { ad: "Yazının konusunu, ana fikrini ve bölümlerini seçme (T.Y.6.3)" },
    "u1-sozvarligi-kullanma": { ad: "Yazarken uygun kelime ve söz seçme (T.Y.6.18)" },
    "u1-de-da": { ad: "Bağlaç olan de/da ile ek olan -de/-da'nın yazımı (T.Y.6.21)" },
    "u1-ki": { ad: "Bağlaç olan ki ile ek olan -ki'nin yazımı (T.Y.6.21)" },
    "u1-mi": { ad: "Soru eki mi'nin yazımı (T.Y.6.21)" },
    "u1-virgul": { ad: "Virgülün kullanımı (T.Y.6.21)" },

    // 2. tema: Bağımsızlık Yolu
    "u2-kok-ek": { ad: "Kelimenin kökü ve eki" },
    "u2-yapim-cekim": { ad: "Yapım eki ve çekim eki" },
    "u2-karsilastirma": { ad: "Karşılaştırma bildiren sözler: daha, en, gibi, kadar, -den daha (T.O.6.10)" },
  },
  terimler: [
    { tr: "yüzey anlam", en: "", aciklama: "Metinde açıkça yazılan, okuyunca doğrudan anlaşılan bilgi" },
    { tr: "anahtar kelime", en: "", aciklama: "Metnin konusunu ve ana fikrini taşıyan, metinde öne çıkan kelime" },
    { tr: "söz varlığı", en: "", aciklama: "Bir dildeki kelimeler, deyimler, atasözleri ve kalıp sözlerin bütünü" },
    { tr: "eş anlamlı kelime", en: "", aciklama: "Yazılışı farklı, anlamı aynı kelime: siyah-kara, yanıt-cevap" },
    { tr: "zıt anlamlı kelime", en: "", aciklama: "Anlamca birbirinin karşıtı olan kelime: uzun-kısa, erken-geç" },
    { tr: "gerçek anlam", en: "", aciklama: "Kelimenin akla ilk gelen, temel anlamı" },
    { tr: "mecaz anlam", en: "", aciklama: "Kelimenin gerçek anlamından uzaklaşarak kazandığı yeni anlam: \"tatlı söz\"" },
    { tr: "terim anlam", en: "", aciklama: "Bir bilim, sanat ya da meslek alanında özel anlam taşıyan kelime: \"açı\" (matematik)" },
    { tr: "deyim", en: "", aciklama: "Genellikle mecaz anlamlı, kalıplaşmış söz öbeği: \"göz atmak\"" },
    { tr: "atasözü", en: "", aciklama: "Atalarımızın deneyimlerine dayanan, öğüt veren kalıplaşmış söz" },
    { tr: "ikileme", en: "", aciklama: "Anlamı güçlendirmek için iki kelimenin yan yana kullanılması: \"yavaş yavaş\"" },
    { tr: "kök", en: "", aciklama: "Kelimenin anlamlı, daha küçük parçalara ayrılamayan ilk bölümü" },
    { tr: "yapım eki", en: "", aciklama: "Kelimeden yeni anlamda bir kelime türeten ek: göz-lük" },
    { tr: "çekim eki", en: "", aciklama: "Kelimenin anlamını değiştirmeyen, cümlede görev kazandıran ek: göz-ler, göz-e" },
  ],
  benzerler: [],
};
