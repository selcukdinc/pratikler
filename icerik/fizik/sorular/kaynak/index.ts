import type { Konu, Soru } from "./tipler.ts";
import { unite1 } from "./unite-1.ts";
import { unite2 } from "./unite-2.ts";
import { unite3 } from "./unite-3.ts";
import { unite4 } from "./unite-4.ts";
import { unite5 } from "./unite-5.ts";

// Her bölüm tek konu; konu kimliği u<bölüm>. Başlıklar sunuların bölüm adlarıdır.
export const konular: Konu[] = [
  { id: "u1", baslik: "Ölçme ve Birim Sistemleri", hafta: 1, sira: 1 },
  { id: "u2", baslik: "Vektörler", hafta: 2, sira: 1 },
  { id: "u3", baslik: "Bir Boyutta Hareket", hafta: 3, sira: 1 },
  { id: "u4", baslik: "İki Boyutta Hareket", hafta: 4, sira: 1 },
  { id: "u5", baslik: "Newton Kanunları", hafta: 5, sira: 1 },
];

export const sorular: Soru[] = [...unite1, ...unite2, ...unite3, ...unite4, ...unite5];
