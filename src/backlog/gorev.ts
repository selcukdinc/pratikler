// Backlog Atölyesi'nin hedefli görevleri. Her görev kendi başlangıç backlog'uyla açılır;
// hedef yazılan metne değil kurulan yapıya bakar. Her görevin örnek çözümü testte motorla
// oynatılır (icerik/backlog/istemci/atolye/atolye.test.ts).
import type { Backlog, Hamle, Oge, Senaryo } from "./motor";

export interface AtolyeGorevi {
  id: string;
  ad: string;
  ozet: string;
  ipucu: string;
  // Görevin bağlı olduğu ünite (derslerden "Kendin dene" bağlantısı)
  unite: number;
  baslangic: Oge[];
  hedef: (b: Backlog, s: Senaryo) => boolean;
  // Hedefe ne kadar kaldığını anlatan kısa durum cümlesi
  durum: (b: Backlog, s: Senaryo) => string;
  ornek: Hamle[];
}

export interface AtolyeIcerigi {
  senaryo: Senaryo;
  gorevler: AtolyeGorevi[];
}

// Tamamlanan görevler ve süren çalışma yalnızca bu tarayıcıda saklanır (istek atılmaz)
const ANAHTAR = "backlog:atolye-gorevleri";

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
