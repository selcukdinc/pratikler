// Sanal Lab deneyleri. Her deney tarayıcıda çalışan, SVG ve React ile çizilen
// etkileşimli bir düzenektir; bir üniteye ve o ünitenin sorularına bağlanır.
// Her pratiğin deneyleri icerik/<pratik>/lab altındadır ve açılışta bu listeye
// yüklenir (src/lib/icerik.ts). Listesi boş pratikte Sanal Lab menüde görünmez.
// Bileşeni henüz yazılmamış deneyler katalogda "Yakında" diye görünür.

import type { ComponentType } from "react";

export interface Deney {
  id: string;
  ad: string;
  ozet: string;
  // Deneyin anlatıldığı ünite
  unite: number;
  // Deneyin bileşeni (React.lazy ile); yoksa deney henüz hazırlanıyor
  bilesen?: ComponentType;
}

export const DENEYLER: Deney[] = [];

export const deneyBul = (id: string) => DENEYLER.find((d) => d.id === id);
