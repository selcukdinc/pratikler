// Harflerin metinlerdeki yaklaşık sıklıkları (yüzde). Türkçe ve İngilizce için
// yaygın kullanılan derlem tablolarından yuvarlanmış değerlerdir; frekans analizi
// deneyinde karşılaştırma çizgisi olarak kullanılır, kesin değer değildir.

export const TURKCE: Record<string, number> = {
  A: 11.92, B: 2.84, C: 0.96, Ç: 1.16, D: 4.71, E: 8.91, F: 0.46, G: 1.25, Ğ: 1.13, H: 1.15, I: 5.11, İ: 8.6, J: 0.03, K: 4.68, L: 5.92,
  M: 3.75, N: 7.49, O: 2.48, Ö: 0.78, P: 0.89, R: 6.95, S: 3.01, Ş: 1.78, T: 3.01, U: 3.24, Ü: 1.85, V: 0.96, Y: 3.34, Z: 1.5,
};

export const INGILIZCE: Record<string, number> = {
  A: 8.2, B: 1.5, C: 2.8, D: 4.3, E: 12.7, F: 2.2, G: 2.0, H: 6.1, I: 7.0, J: 0.15, K: 0.77, L: 4.0, M: 2.4, N: 6.7, O: 7.5,
  P: 1.9, Q: 0.1, R: 6.0, S: 6.3, T: 9.1, U: 2.8, V: 0.98, W: 2.4, X: 0.15, Y: 2.0, Z: 0.07,
};
