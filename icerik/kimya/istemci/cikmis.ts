// Kimyanın çıkmış sınavları: /cikmis sayfasında kâğıttaki sırasıyla deneme
// sınavı olarak çözülür. Burada yalnızca soru kimlikleri durur; sorular
// sorular/cikmis-*.ts dosyalarındadır.

import type { CikmisSinav } from "../../../src/cikmis/sinavlar";

const sirala = (on: string, siralar: number[]) => siralar.map((n) => `${on}-${String(n).padStart(2, "0")}`);

export const SINAVLAR: CikmisSinav[] = [
  {
    id: "vize-2024",
    ad: "2024 vize sınavı",
    donem: "vize",
    aciklama: "21 çoktan seçmeli soru. Cevap anahtarı sınav kâğıdından alındı; tartışmalı sorularda açıklamada not var.",
    sorular: sirala("km-v24", Array.from({ length: 21 }, (_, i) => i + 1)),
  },
  {
    id: "vize-derleme",
    ad: "Vize derlemesi",
    donem: "vize",
    aciklama: "Önceki yılların vize sınavlarından derlenen 17 soru. Anahtarı olmadığı için cevaplar hesaplanarak bulundu.",
    sorular: sirala("km-vd", [2, 4, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 19, 22, 23, 24, 25]),
  },
];
