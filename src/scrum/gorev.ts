// Sprint simülatörünün hedefli görevleri. Her görevin kendi başlangıç ayarı (sabit olaylar,
// Sprint sayısı) ve hedefi vardır; hedef komuta değil duruma bakar. Her görevin örnek
// çözümü testte motorla oynatılır (icerik/agile/istemci/simulasyon/simulasyon.test.ts).
import type { Ayar, Durum, Senaryo } from "./motor";

export interface SprintGorevi {
  id: string;
  ad: string;
  ozet: string;
  ipucu: string;
  // Görevin bağlı olduğu ünite (derslerden "Kendin dene" bağlantısı)
  unite: number;
  ayar: Ayar;
  hedef: (d: Durum, s: Senaryo) => boolean;
  // Örnek çözüm: Sprint Goal, seçilecek öğeler ve Retro iyileştirmesi; olaylarda
  // Rehber'e uygun ilk seçenek alınır (motor.ts ornekOyuncu)
  // iyilestirme dizi olursa her Retro'da sıradaki seçilir (son eleman tekrarlanır)
  ornek: { hedef: string; sec: string[]; iyilestirme: string | string[] };
}

export interface SprintIcerigi {
  senaryo: Senaryo;
  gorevler: SprintGorevi[];
}

// Tamamlanan görevler ve süren oyun yalnızca bu tarayıcıda saklanır (istek atılmaz)
const ANAHTAR = "agile:sprint-gorevleri";

export function tamamlananlariOku(): Set<string> {
  try {
    const s = localStorage.getItem(ANAHTAR);
    const dizi: unknown = s ? JSON.parse(s) : [];
    return new Set(Array.isArray(dizi) ? dizi.filter((x): x is string => typeof x === "string") : []);
  } catch {
    return new Set();
  }
}

export function tamamlananlariYaz(s: Set<string>) {
  try {
    localStorage.setItem(ANAHTAR, JSON.stringify([...s]));
  } catch {
    // Gizli pencere ya da kapalı depolama: ilerleme yalnız bu oturumda kalır
  }
}
