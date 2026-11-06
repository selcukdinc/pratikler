// Her soru tek bir kavrama (sunudaki alt başlığa) bağlanır. Aralıklı tekrarda bir
// soruyu yanlış yapan kişiye aynı kavramdan henüz çözmediği sorular da eklenir.
// Kimlik biçimi: u<bölüm>-<kısa ad>.

export interface Kavram {
  ad: string;
}

export const KAVRAMLAR: Record<string, Kavram> = {
  // 1. bölüm: Ölçme ve Birim Sistemleri
  "u1-si": { ad: "Temel büyüklükler ve SI birimleri" },
  "u1-onek": { ad: "10'un katları ve birim çevirme" },
  "u1-boyut": { ad: "Boyut ve boyut analizi" },
  "u1-yogunluk": { ad: "Yoğunluk" },
  "u1-anlamli": { ad: "Anlamlı rakamlar" },

  // 2. bölüm: Vektörler
  "u2-skaler": { ad: "Skaler ve vektörel büyüklükler" },
  "u2-koordinat": { ad: "Kartezyen ve kutupsal koordinatlar" },
  "u2-ozellik": { ad: "Vektörlerin eşitliği, negatifi, skalerle çarpımı, toplama ve çıkarma" },
  "u2-bilesen": { ad: "Bileşenler ve birim vektörler" },
  "u2-skaler-carpim": { ad: "Skaler (nokta) çarpım" },
  "u2-vektorel-carpim": { ad: "Vektörel çarpım" },

  // 3. bölüm: Bir Boyutta Hareket
  "u3-temel": { ad: "Konum, yerdeğiştirme, ortalama hız ve sürat" },
  "u3-turev": { ad: "Ani hız ve ivme (türevle)" },
  "u3-grafik": { ad: "Konum-zaman ve hız-zaman grafikleri" },
  "u3-sabit-ivme": { ad: "Sabit ivmeli hareket denklemleri" },
  "u3-serbest": { ad: "Serbest düşme ve düşey atış" },

  // 4. bölüm: İki Boyutta Hareket
  "u4-vektorel": { ad: "Düzlemde konum, hız ve ivme vektörleri" },
  "u4-egik": { ad: "Eğik atış: maksimum yükseklik ve menzil" },
  "u4-yatay": { ad: "Yatay atış ve yüksekten atış" },
  "u4-dairesel": { ad: "Düzgün dairesel hareket ve merkezcil ivme" },
  "u4-bagil": { ad: "Bağıl hız" },

  // 5. bölüm: Newton Kanunları
  "u5-kavram": { ad: "Kuvvet, kütle ve ağırlık" },
  "u5-yasalar": { ad: "Newton'un üç yasası" },
  "u5-denge": { ad: "Denge ve gerilme kuvveti" },
  "u5-ikinci": { ad: "İkinci yasanın uygulanması" },
  "u5-surtunme": { ad: "Statik ve kinetik sürtünme" },
  "u5-bagli": { ad: "Bağlı cisimler ve makaralar" },
  "u5-dairesel": { ad: "Dairesel harekette Newton'un ikinci yasası" },
};
