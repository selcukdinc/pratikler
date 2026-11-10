// İşletme Pratik (isletme.selcukdinc.dev): üniversite "İşletme Bilimine Giriş"
// dersinin 1. ve 2. bölümü (temel kavramlar, çevre, sınıflandırma, hukuki yapı,
// büyüme, birleşmeler, kuruluş çalışmaları ve kuruluş yeri). Kaynak, kullanıcının
// eklediği "İşletme Bilimine Giriş: Kapsamlı Sınav Özeti" PDF'idir (13 sayfa, 10
// başlık); her başlık bir ünite. Bütün sorular özetteki bilgiden kendi
// cümlelerimizle türetilmiş çoktan seçmeli sorulardır (etiket: ozet).
import type { PratikMeta } from "../tipler.ts";

export const isletme: PratikMeta = {
  id: "isletme",
  alt: "isletme",
  yol: "isletme",
  eskiAlan: true,
  ad: "İşletme",
  alan: "İşletme",
  aciklama:
    "İşletme Bilimine Giriş: ihtiyaçlar, üretim faktörleri, verimlilik ve rantabilite, işletmenin çevresi, sınıflandırma, şirket türleri, büyüme, kartel-tröst-holding, kapasite, başabaş noktası ve kuruluş yeri üzerine çoktan seçmeli sorular.",
  kaynakAdi: "İşletme Bilimine Giriş sınav özeti",
  kaynakAciklamasi:
    "Sorular **İşletme Bilimine Giriş: Kapsamlı Sınav Özeti** notuna (1. ve 2. bölüm) dayanır. Özetin on başlığının her biri bir ünitedir. Bütün sorular özetteki tanım, sınıflandırma, karşılaştırma tablosu ve formüllerden **kendi cümlelerimizle** yazılmış çoktan seçmeli sorulardır ve **Özet** etiketini taşır.\n\n" +
    "Hesap soruları (verimlilik, iktisadilik, rantabilite, kapasite kullanım oranı, atıl kapasite, başabaş noktası) özetteki formüllerle çözülür; sayılar soruya özgüdür. Kaynaklar arasında adlandırması değişebilen yerlerde (yatay büyümenin alt yolları, şirket ortaklarının sorumluluk derecesi gibi) özetteki ifade esas alınmıştır.",
  tanitim: {
    baslik: "İşletme Bilimine Giriş sınavına çoktan seçmeli sorularla hazırlan",
    giris:
      "İşletme Pratik, İşletme Bilimine Giriş dersi için ücretsiz ve açık kaynaklı bir soru çalışma sitesi. Maslow'dan başabaş noktasına, kolektif şirketten holdinge kadar dersin ilk iki bölümü on üniteye ayrıldı. Sorular ve şıklar her seferinde karışık gelir; her sorunun altında neden o cevabın doğru olduğunu anlatan bir açıklama var.",
    kitleler: [
      { baslik: "İşletme Bilimine Giriş dersini alan öğrenciler", metin: "Vizeden önce her başlıktan tanım, karşılaştırma ve hesap sorusu çöz. Yanlış yaptıkların aralıklı tekrarla yeniden karşına çıkar." },
      { baslik: "İktisat, işletme ve mühendislik öğrencileri", metin: "Şirket türleri, büyüme stratejileri, işletmeler arası birlikler ve kuruluş yeri gibi sık karıştırılan konuları karşılaştırmalı sorularla ayırt etmeyi öğren." },
      { baslik: "Kısa sürede çok soru görmek isteyenler", metin: "Karma testte 10, 20, 30 ya da 50 soruluk bir test kur; her soruda şıkların yeri değişir, ezber değil anlayış sınanır." },
    ],
  },
  bagimsizlikNotu: "Bu site dersi veren öğretim elemanı ya da üniversite tarafından hazırlanmamıştır; sorular ders özetinden bağımsız olarak yazılmıştır.",
  uniteAdi: "ünite",
  uniteKisa: "Ü",
  yayinda: true,
  latex: false,
  logo: "/logolar/isletme.svg",
  etiketler: [
    { id: "ozet", ad: "Özet", renk: "ders", aciklama: "Ders özetindeki bilgiden kendi cümlelerimizle türetilmiş soru" },
  ],
  uniteler: [
    { no: 1, baslik: "İnsan İhtiyaçları ve Ekonomik Faaliyetler" },
    { no: 2, baslik: "Üretim Faktörleri ve İşletme Kavramı" },
    { no: 3, baslik: "İşletmenin Amaçları ve Performans İlkeleri" },
    { no: 4, baslik: "İşletmenin Çevresi" },
    { no: 5, baslik: "İşletmelerin Sınıflandırılması" },
    { no: 6, baslik: "Hukuki Yapılarına Göre İşletmeler" },
    { no: 7, baslik: "Büyüme Olgusu ve Stratejileri" },
    { no: 8, baslik: "İşletmeler Arası Anlaşmalar ve Birlikler" },
    { no: 9, baslik: "Kuruluş Çalışmaları, Kapasite ve Başabaş Noktası" },
    { no: 10, baslik: "Kuruluş Yeri Seçimi" },
  ],
  kavramlar: {
    // 1. ünite
    "u1-ihtiyac": { ad: "İhtiyaç kavramı" },
    "u1-maslow": { ad: "Maslow'un ihtiyaçlar hiyerarşisi" },
    "u1-ozellik": { ad: "İhtiyaçların özellikleri" },
    "u1-mal-hizmet": { ad: "Fayda, mallar ve hizmetler" },
    // 2. ünite
    "u2-ekonomi-uretim": { ad: "Ekonomi, üretim ve fayda türleri" },
    "u2-faktor": { ad: "Üretim faktörleri ve getirileri" },
    "u2-isletme-girisim": { ad: "İşletme, girişim, girişimci ve profesyonel yönetici" },
    "u2-disiplin": { ad: "İşletme biliminin diğer disiplinlerle ilişkisi" },
    // 3. ünite
    "u3-amac": { ad: "İşletmenin amaçları" },
    "u3-verimlilik": { ad: "Verimlilik (prodüktivite)" },
    "u3-iktisadilik": { ad: "İktisadilik (ekonomiklik)" },
    "u3-karlilik": { ad: "Kârlılık (rantabilite)" },
    // 4. ünite
    "u4-katman": { ad: "Açık sistem olarak işletme ve çevre katmanları" },
    "u4-yakin": { ad: "Yakın (sektörel) çevre" },
    "u4-uzak": { ad: "Uzak (genel) çevre" },
    "u4-uluslararasi": { ad: "Uluslararası çevre" },
    // 5. ünite
    "u5-faaliyet": { ad: "Faaliyet konusuna göre işletmeler" },
    "u5-mal-turu": { ad: "Üretilen mal türüne göre işletmeler" },
    "u5-yogunluk": { ad: "Emek yoğun ve sermaye yoğun işletmeler" },
    "u5-buyukluk": { ad: "Büyüklük ölçütleri, KOBİ'ler ve çok uluslu işletmeler" },
    "u5-mulkiyet": { ad: "Mülkiyet yapısına göre işletmeler" },
    // 6. ünite
    "u6-tek-kisi": { ad: "Tek kişi işletmesi" },
    "u6-sahis-sermaye": { ad: "Adi şirket, şahıs şirketleri ve sermaye şirketleri" },
    "u6-kolektif-komandit": { ad: "Kolektif ve komandit şirket" },
    "u6-as-ltd": { ad: "Anonim, limited ve sermayesi paylara bölünmüş komandit şirket" },
    "u6-kooperatif": { ad: "Kooperatifler" },
    // 7. ünite
    "u7-ic-dis": { ad: "Büyüme, iç ve dış büyüme" },
    "u7-yatay": { ad: "Yatay büyüme" },
    "u7-dikey": { ad: "Geriye ve ileriye doğru dikey büyüme" },
    "u7-capraz": { ad: "Çapraz (konglomera) büyüme" },
    "u7-birlesme": { ad: "Birleşme, devralma, ortak girişim ve stratejik ittifak" },
    "u7-lisans": { ad: "Lisans anlaşması ve franchising" },
    // 8. ünite
    "u8-centilmenlik": { ad: "Centilmenlik anlaşması" },
    "u8-kartel": { ad: "Kartel" },
    "u8-konsern": { ad: "Konsern" },
    "u8-trost": { ad: "Tröst" },
    "u8-holding": { ad: "Holding" },
    "u8-konsorsiyum": { ad: "Konsorsiyum" },
    "u8-karsilastirma": { ad: "Birliklerde hukuki ve ekonomik bağımsızlık" },
    // 9. ünite
    "u9-asamalar": { ad: "Kuruluş sürecinin aşamaları" },
    "u9-fizibilite": { ad: "Fizibilite: ekonomik, teknik, finansal ve hukuki araştırma" },
    "u9-kapasite": { ad: "Kapasite türleri" },
    "u9-kko": { ad: "Kapasite kullanım oranı ve atıl kapasite" },
    "u9-bbn": { ad: "Başabaş noktası" },
    // 10. ünite
    "u10-optimal": { ad: "Optimal kuruluş yeri" },
    "u10-hammadde": { ad: "Hammadde kaynağına yakınlık" },
    "u10-pazar": { ad: "Pazara yakınlık" },
    "u10-diger": { ad: "Ulaştırma, enerji, işgücü, iklim ve devlet teşvikleri" },
  },
  terimler: [
    { tr: "ihtiyaç", en: "need", aciklama: "Karşılandığında haz, karşılanmadığında acı veren eksiklik duygusu" },
    { tr: "fayda", en: "utility", aciklama: "Mal ve hizmetlerin ihtiyaç gidermesiyle sağlanan tatmin" },
    { tr: "azalan marjinal fayda", en: "diminishing marginal utility", aciklama: "İhtiyaç karşılandıkça şiddetinin, dolayısıyla ek birimin faydasının azalması" },
    { tr: "üretim faktörleri", en: "factors of production", aciklama: "Emek, sermaye, doğa ve girişimci" },
    { tr: "ücret, faiz, rant, kâr", en: "wage, interest, rent, profit", aciklama: "Sırasıyla emek, sermaye, doğa ve girişimcinin getirisi" },
    { tr: "girişimci (müteşebbis)", en: "entrepreneur", aciklama: "Üretim faktörlerini bir araya getirip kâr-zarar riskini üstlenen kişi" },
    { tr: "profesyonel yönetici", en: "professional manager", aciklama: "İşletmeyi girişimci adına ücret karşılığında yöneten kişi" },
    { tr: "verimlilik (prodüktivite)", en: "productivity", aciklama: "Çıktı / girdi" },
    { tr: "iktisadilik (ekonomiklik)", en: "economy", aciklama: "Satış tutarı / üretim maliyeti; 1'den büyük olması istenir" },
    { tr: "kârlılık (rantabilite)", en: "profitability", aciklama: "Net kârın kullanılan sermayeye oranı" },
    { tr: "yönetim bilişim sistemleri", en: "management information systems (MIS)", aciklama: "Yönetimin karar almasına bilgi sağlayan sistemler" },
    { tr: "KOBİ", en: "SME (small and medium-sized enterprise)", aciklama: "250 kişiden az çalışanı olan mikro, küçük ve orta ölçekli işletme" },
    { tr: "çok uluslu işletme", en: "multinational company", aciklama: "Birden fazla yabancı ülkede doğrudan yatırımla faaliyet gösteren işletme" },
    { tr: "anonim şirket", en: "joint-stock company", aciklama: "Sermayesi paylara bölünmüş, borçlarından yalnız malvarlığıyla sorumlu şirket" },
    { tr: "limited şirket", en: "limited liability company", aciklama: "1-50 ortaklı, halka açılamayan sermaye şirketi" },
    { tr: "kooperatif", en: "cooperative", aciklama: "Ortaklarına maliyetine mal ve hizmet sağlamak için kurulan, en az 7 ortaklı birlik" },
    { tr: "yatay büyüme", en: "horizontal growth", aciklama: "Aynı sektörde ve aynı üretim aşamasında kapasite artırma" },
    { tr: "dikey bütünleşme", en: "vertical integration", aciklama: "Üretim sürecinin gerisindeki ya da ilerisindeki aşamaları bünyeye katma" },
    { tr: "birleşme ve devralma", en: "merger and acquisition", aciklama: "İşletmelerin tek çatıda birleşmesi ya da birinin diğerini satın alması" },
    { tr: "ortak girişim", en: "joint venture", aciklama: "Bağımsız işletmelerin yeni ve ayrı tüzel kişilikli ortak şirket kurması" },
    { tr: "stratejik ittifak", en: "strategic alliance", aciklama: "Yeni tüzel kişilik kurmadan, bağımsızlık korunarak yapılan işbirliği" },
    { tr: "lisans ücreti", en: "royalty", aciklama: "Patent, marka ya da know-how kullandırma karşılığı ödenen bedel" },
    { tr: "imtiyaz verme", en: "franchising", aciklama: "Ana işletmenin marka ve sistemini bedel karşılığında bağımsız yatırımcılara kullandırması" },
    { tr: "fizibilite (yapılabilirlik) etüdü", en: "feasibility study", aciklama: "Yatırım fikrinin ekonomik, teknik, finansal ve hukuki açıdan incelenmesi" },
    { tr: "başabaş noktası", en: "break-even point", aciklama: "Toplam gelirin toplam maliyete eşit olduğu, kârın sıfır olduğu üretim düzeyi" },
    { tr: "birim katkı payı", en: "unit contribution margin", aciklama: "Birim satış fiyatı ile birim değişken maliyet arasındaki fark" },
    { tr: "atıl kapasite", en: "idle capacity", aciklama: "Pratik kapasite ile fiili kapasite arasındaki fark" },
    { tr: "organize sanayi bölgesi", en: "organized industrial zone", aciklama: "Altyapısı hazır, devletin desteklediği sanayi alanı" },
  ],
  benzerler: [],
};
