// Her soru tek bir kavrama (kitaptaki alt başlığa) bağlanır. Aralıklı tekrarda bir
// soruyu yanlış yapan kişiye aynı kavramdan henüz çözmediği sorular da eklenir.
// Kimlik biçimi: u<ünite>-<kısa ad>. Üniteler Rosen, Ayrık Matematik ve
// Uygulamaları kitabının kesimleridir (1. ünite = Kesim 1.1, 9. ünite = Kesim 2.1).

export interface Kavram {
  ad: string;
}

export const KAVRAMLAR: Record<string, Kavram> = {
  // 1. ünite (1.1): Önermeli Mantık
  "u1-onerme": { ad: "Önerme ve doğruluk değeri" },
  "u1-baglac": { ad: "Değil, ve, veya, dışlayıcı veya" },
  "u1-sartli": { ad: "Şartlı ifade ve çift şartlı ifade" },
  "u1-karsit": { ad: "Karşıt, ters ve zıt-pozitif" },
  "u1-tablo": { ad: "Doğruluk tabloları ve işlem önceliği" },
  "u1-bit": { ad: "Bit işlemleri" },

  // 2. ünite (1.2): Önermeli Mantık Uygulamaları
  "u2-ceviri": { ad: "Cümleleri mantık ifadesine çevirme" },
  "u2-sistem": { ad: "Sistem özellikleri ve tutarlılık" },
  "u2-arama": { ad: "Boolean aramalar" },
  "u2-bulmaca": { ad: "Mantık bulmacaları" },
  "u2-devre": { ad: "Mantık devreleri" },

  // 3. ünite (1.3): Önerme Denklikleri
  "u3-totoloji": { ad: "Totoloji, çelişki ve olumsallık" },
  "u3-denklik": { ad: "Mantıksal denklikler" },
  "u3-demorgan": { ad: "De Morgan kuralları" },
  "u3-sat": { ad: "Sağlanabilirlik" },

  // 4. ünite (1.4): Yüklemler ve Niceleyiciler
  "u4-yuklem": { ad: "Yüklemler ve önerme fonksiyonları" },
  "u4-niceleyici": { ad: "Evrensel ve varlıksal niceleyici" },
  "u4-degil": { ad: "Niceleyicili ifadelerin değili" },
  "u4-ceviri": { ad: "Cümleleri niceleyicilerle yazma" },

  // 5. ünite (1.5): İç İçe Niceleyiciler
  "u5-sira": { ad: "Niceleyicilerin sırası" },
  "u5-ceviri": { ad: "İç içe niceleyicilerle çeviri" },
  "u5-degil": { ad: "İç içe niceleyicilerin değili" },

  // 6. ünite (1.6): Çıkarım Kuralları
  "u6-gecerli": { ad: "Geçerli argüman" },
  "u6-kural": { ad: "Önermeli mantıkta çıkarım kuralları" },
  "u6-yanilgi": { ad: "Safsatalar" },
  "u6-nicel": { ad: "Niceleyicili ifadeler için çıkarım kuralları" },

  // 7. ünite (1.7): İspatlara Giriş
  "u7-terim": { ad: "Teorem, aksiyom, lem ve sonuç" },
  "u7-dogrudan": { ad: "Doğrudan ispat" },
  "u7-zitpozitif": { ad: "Zıt-pozitif ile ispat" },
  "u7-celiski": { ad: "Çelişki ile ispat" },
  "u7-cift": { ad: "Çift şartlı ifadelerin ispatı ve hatalar" },

  // 8. ünite (1.8): İspat Yöntemleri ve Stratejisi
  "u8-durum": { ad: "Durumlara göre ispat" },
  "u8-varlik": { ad: "Varlık ispatları" },
  "u8-teklik": { ad: "Teklik ispatları" },
  "u8-karsi": { ad: "Karşı örnek ve strateji" },

  // 9. ünite (2.1): Kümeler
  "u9-gosterim": { ad: "Küme gösterimi ve eleman olma" },
  "u9-altkume": { ad: "Alt küme ve eşit kümeler" },
  "u9-nicelik": { ad: "Kümenin büyüklüğü (niceliği)" },
  "u9-kuvvet": { ad: "Kuvvet kümesi" },
  "u9-kartezyen": { ad: "Kartezyen çarpım" },

  // 10. ünite (2.2): Küme İşlemleri
  "u10-islem": { ad: "Birleşim, kesişim, fark ve tümleyen" },
  "u10-ozdeslik": { ad: "Küme özdeşlikleri" },
  "u10-genel": { ad: "Genelleştirilmiş birleşim ve kesişim" },
  "u10-bit": { ad: "Kümelerin bit dizisiyle gösterimi" },

  // 11. ünite (2.3): Fonksiyonlar
  "u11-tanim": { ad: "Fonksiyon, tanım ve değer kümesi, görüntü" },
  "u11-birebir": { ad: "Bire-bir fonksiyon" },
  "u11-orten": { ad: "Örten fonksiyon" },
  "u11-eslesme": { ad: "Bire-bir eşleşme" },
  "u11-ters": { ad: "Ters fonksiyon" },
  "u11-bileske": { ad: "Fonksiyonların bileşkesi" },
  "u11-taban": { ad: "Taban ve tavan fonksiyonları" },
};
