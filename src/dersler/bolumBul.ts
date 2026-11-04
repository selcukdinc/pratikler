// Bir sorunun cevabının anlatıldığı ders bölümü. Soru kartındaki "Derste oku"
// bağlantısı buradan gelir; kaynaktaki yer (slayt adı, sınav kâğıdı) öğrenciye
// bir şey söylemediği için gösterilmez.
import { DERSLER } from "./index";

// Hafta -> kavram -> bölümün sırası (0'dan). Kavramlar icerik/<pratik>/meta.ts
// içinde; eşleme icerik/<pratik>/istemci'den yüklenir (src/lib/icerik.ts).
export const KAVRAM_BOLUMU: Record<number, Record<string, number>> = {};

export interface SoruBolumu {
  hafta: number;
  // Ders sayfasındaki bölümün sırası (0'dan); bölüm bulunamadıysa null
  bolum: number | null;
  baslik: string;
}

export function soruBolumu(q: { id: string; week: number; kavram?: string | null }): SoruBolumu | null {
  // Önce "Kendini dene"de kullanıldığı bölüm
  for (const d of DERSLER) {
    const i = d.bolumler.findIndex((b) => b.dene?.includes(q.id));
    if (i >= 0) return { hafta: d.hafta, bolum: i, baslik: d.bolumler[i]!.baslik };
  }
  const d = DERSLER.find((x) => x.hafta === q.week);
  if (!d) return null;
  const i = q.kavram ? KAVRAM_BOLUMU[q.week]?.[q.kavram] : undefined;
  if (i !== undefined && d.bolumler[i]) return { hafta: d.hafta, bolum: i, baslik: d.bolumler[i].baslik };
  return { hafta: d.hafta, bolum: null, baslik: d.baslik };
}

export const bolumId = (i: number) => `bolum-${i + 1}`;
