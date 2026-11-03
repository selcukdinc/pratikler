// Her soru tek bir kavrama (kitaptaki alt başlığa) bağlanır. Aralıklı tekrarda bir
// soruyu yanlış yapan kişiye aynı kavramdan henüz çözmediği sorular da eklenir.
// Kimlik biçimi: u<ünite>-<kısa ad>.

export interface Kavram {
  ad: string;
}

export const KAVRAMLAR: Record<string, Kavram> = {
  // 1. ünite: Girişimciliğin Temel Kavramları
  "u1-deger": { ad: "Girişimcilikte değer yaratma ve paydaşlar" },
  "u1-tanim": { ad: "Girişimcilik tanımlarının gelişimi" },
  "u1-isletme": { ad: "İşletme ve girişim" },
  "u1-yonetim": { ad: "Yönetim fonksiyonları, yönetici ve lider" },
  "u1-kobi": { ad: "KOBİ tanımı, avantaj ve dezavantajları" },
  "u1-nitelik": { ad: "Başarılı girişimcinin nitelikleri" },
  "u1-motivasyon": { ad: "Girişimcilik motivasyonları ve engelleri" },
  "u1-basarisizlik": { ad: "Başarısızlık faktörleri ve ölüm vadisi" },
  "u1-surec": { ad: "Girişimcilik süreci" },
  "u1-efsane": { ad: "Girişimcilik efsaneleri" },
  "u1-tur": { ad: "Girişimcilik türleri" },

  // 2. ünite: Girişim Fırsatlarını Görme ve Fikir Yaratma/Geliştirme
  "u2-kavramlar": { ad: "Fikir, fırsat, problem ve ihtiyaç" },
  "u2-musteri-kesfi": { ad: "Müşteri keşfi" },
  "u2-dusunme": { ad: "Tasarımsal düşünme ve yapılacak işler yöntemi" },
  "u2-inovasyon": { ad: "İnovasyon çeşitleri ve kaynakları" },
  "u2-trend": { ad: "Trendleri takip etme" },

  // 3. ünite: Yapılabilirlik Analizi
  "u3-risk": { ad: "Yapılabilirlik analizi ve başarısızlık sebepleri" },
  "u3-ekip": { ad: "Fikir-kurucu uyumu, vizyon ve ortaklık" },
  "u3-finans": { ad: "Finansal değerlendirme, başabaş ve ölüm vadisi" },
  "u3-pazar": { ad: "Pazar tipleri (TMP, EMP, İHP)" },
  "u3-benimseme": { ad: "Yeniliklerin benimsenmesi" },
  "u3-ihtiyac": { ad: "İhtiyaç tipleri, trend ve teknoloji" },

  // 4. ünite: İş Modelleri, Müşteriler, Değer Önerileri ve Gelir Kaynakları
  "u4-kanvas": { ad: "Kanvas iş modeli ve yapı taşları" },
  "u4-kesit": { ad: "Müşteri kesitleri, işler, acılar ve kazanımlar" },
  "u4-satin-alma": { ad: "Satın alma sürecindeki roller" },
  "u4-gelir": { ad: "Gelir kaynakları ve modelleri" },

  // 5. ünite: Ekonomi, Endüstri, Rekabet ve Müşteri Analizi
  "u5-ekonomi": { ad: "Ekonomik göstergeler: büyüme, faiz, döviz, iş gücü" },
  "u5-bes-faktor": { ad: "Endüstrinin beş faktör analizi" },
  "u5-rekabet": { ad: "Rekabet ve sektörler arası farklar" },
  "u5-talep": { ad: "Talep tahmini ve veri kaynakları" },
  "u5-musteri": { ad: "Müşteriyi anlamada beş temel soru" },

  // 6. ünite: Hukuki Altyapı
  "u6-esnaf-tacir": { ad: "Esnaf-tacir ayrımı" },
  "u6-sermaye": { ad: "Sermaye ve sermaye taahhüdü" },
  "u6-sirket": { ad: "İşletme ve şirket türleri, sorumluluk" },
  "u6-kurulus": { ad: "Kuruluş, ana sözleşme ve tüzel kişilik" },
  "u6-yonetim": { ad: "Yönetim ve temsil" },
  "u6-rekabet": { ad: "Basiretli tacir ve rekabet yasakları" },
  "u6-marka": { ad: "Marka, unvan ve işletme adı" },
  "u6-isg": { ad: "İş sağlığı ve güvenliği" },

  // 7. ünite: Girişimin Etik Temelleri
  "u7-etik-ahlak": { ad: "Etik ve ahlak" },
  "u7-sorumluluk": { ad: "Bireysel, sosyal ve örnek olma sorumluluğu" },
  "u7-ilkeler": { ad: "Girişimcinin etik ilkeleri" },
  "u7-liderlik": { ad: "Etik liderlik ve etik öğrenme" },

  // 8. ünite: Pazarlama İlkeleri ve Yönetimi (şimdilik yalnız çıkmış ve türetilmiş)
  "u8-kavramlar": { ad: "Tüketici, müşteri, ihtiyaç, istek ve talep" },
  "u8-karma": { ad: "Pazarlama karması ve müşteri değeri" },
};
