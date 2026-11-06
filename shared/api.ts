import type { KodBilgisi } from "./kod";
// İstemci ile Worker arasındaki veri tipleri

import type { QuestionType } from "./grade";
import type { GunlukDurum, Seriler } from "./motivasyon";

export interface Me {
  id: string;
  kind: "guest" | "member";
  displayName: string | null;
  // Aşağıdakiler yalnızca hesaplarda dolu
  username: string | null;
  email: string | null;
  avatar: string | null;
  avatarBg: string | null;
  role: string;
  publicProfile: boolean;
  usernameChangedAt: number | null;
  // Yönetici cevap verince e-posta gitsin mi
  notifyEmail: boolean;
  // Susturulduysa bu zamana kadar öneri gönderemez
  mutedUntil: number | null;
  // Günlük doğru cevap hedefi; 0 kapalı
  gunlukHedef: number;
  // Hesaba kaydedilen metin boyutu (yüzde); null ise tarayıcıdaki seçim
  yaziOlcek: number | null;
  // Hesaba kaydedilen günlük tekrar sayısı (0 sınırsız); null ise varsayılan
  gunlukTekrar: number | null;
  // Sunucu e-posta gönderebiliyor mu (kayıt ve sıfırlama buna bağlı)
  epostaAcik?: boolean;
}

export interface Topic {
  id: string;
  title: string;
  week: number;
}

export interface Question {
  id: string;
  topicId: string;
  week: number;
  type: QuestionType;
  source: "original" | "derived";
  prompt: string;
  // semboller: boşluk doldurmada mantık ve küme sembol klavyesi (Ayrık)
  payload: { choices?: string[]; blanks?: number; sabit?: boolean; semboller?: boolean; kod?: KodBilgisi };
  etiketler: Etiket[];
  difficulty: number;
  sourceRef: string | null;
  // Pratiğin kavramı (icerik/<pratik>/meta.ts); soru kartındaki ders bölümü bağlantısı buna göre bulunur
  kavram?: string | null;
  // Üye önerisinden gelen ve adı görünsün denmiş sorularda
  oneren?: string;
}

// Pratiğin etiket kimliği (icerik/<pratik>/meta.ts etiketler): ges, cikmis, turetilmis, ders, kitap...
export type Etiket = string;

export interface SoruIstatistigi {
  // Soruyu deneyen kişi sayısı ve ilk denemesinde doğru yapanlar (misafirler dahil, anonim)
  kisi: number;
  ilkDogru: number;
  // Çoktan seçmeli sorularda ilk denemelerde her şıkkın kaç kez seçildiği
  siklar?: number[];
}

export interface AnswerResult {
  correct: boolean;
  explanation: string | null;
  // Boşluk doldurmada her boşluğun doğru olup olmadığı, sırasıyla
  bosluklar?: boolean[];
  istatistik?: SoruIstatistigi;
  // Doğru cevaptan sonra bugünkü doğru sayısı ve hedef
  gunluk?: GunlukDurum;
}

// Kullanıcının sorulardaki durumu: en az bir kez doğru çözdüyse "dogru",
// denediği halde henüz doğru çözemediyse "yanlis". Denenmeyenler listede yok.
export type SoruDurumlari = Record<string, "dogru" | "yanlis">;

export interface IlerlemeAyrintisi {
  // Son 84 gün (12 hafta), Türkiye saatine göre, eskiden yeniye
  takvim: { gun: string; deneme: number; dogru: number }[];
  // Denenip henüz doğru çözülemeyen sorular, en son deneneni başta
  yanlislar: { id: string; topicId: string; topicTitle: string; week: number; ozet: string; deneme: number; son: number }[];
  hedef: number;
  // Bütün zamanlar üzerinden
  seri: Seriler;
  alevGunleri: number;
  hedefGunleri: number;
}

export interface TopicProgress {
  topicId: string;
  title: string;
  week: number;
  total: number;
  attempted: number;
  correct: number;
}

export interface ProfilSon {
  questionId: string;
  topicTitle: string;
  week: number;
  prompt: string;
  at: number;
}

export type Profil =
  | { gizli: true; username: string }
  | {
      gizli: false;
      username: string;
      avatar: string | null;
      avatarBg: string | null;
      joinedAt: number;
      publicProfile: boolean;
      kendisi: boolean;
      konular: TopicProgress[];
      son: ProfilSon[];
    };

export interface ApiHata {
  error: string;
  // Hangi alana ait olduğu (form altında göstermek için)
  alan?: string;
  kalan?: number;
}

// Çatı sitesinin katalog kartı
export interface KatalogPratik {
  id: string;
  alt: string;
  ad: string;
  alan: string;
  aciklama: string;
  unite: number;
  // Açık ünitelerdeki yayında soru sayısı (yedekler hariç)
  soru: number;
}

// Kişinin bir pratikteki ilerlemesi (çatı sitesindeki "İlerlemem" kartları)
export interface PratikIlerlemesi {
  id: string;
  denenen: number;
  dogru: number;
  // Bugün vadesi gelen aralıklı tekrar sayısı
  bekleyen: number;
  // Son deneme zamanı (ms)
  son: number;
}
