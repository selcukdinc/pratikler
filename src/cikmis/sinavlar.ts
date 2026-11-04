// Çıkmış sınavlar: /cikmis sayfasında sınavdaki sırasıyla deneme sınavı olarak
// çözülür. Burada yalnızca soru kimlikleri durur; soruların kendisi ve cevapları
// veritabanındadır ve istemciye cevap gitmez. Her pratiğin sınavları
// icerik/<pratik>/istemci içindedir ve açılışta bu listeye yüklenir. Listesi
// boş pratikte sayfa menüde görünmez.

import type { Donem } from "../dersler/tipler";

export interface CikmisSinav {
  id: string;
  ad: string;
  donem: Donem;
  // Kısa açıklama: sınavın kaynağı, cevap anahtarının durumu
  aciklama: string;
  // Soruların sınavdaki sırası
  sorular: string[];
}

export const SINAVLAR: CikmisSinav[] = [];

export const sinavBul = (id: string) => SINAVLAR.find((s) => s.id === id);
