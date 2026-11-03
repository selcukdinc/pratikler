// Ders şekilleri. Hepsi bizim çizimimizdir; kitaptan ya da sunumlardan görsel alınmaz.
// Ders metninde tek başına bir paragraf olarak [[G-H1-01]] yazılınca şekil o yere konur.
// Kod biçimi: G-H<ünite>-<sıra>. Konu anlatımları gelince şekiller buraya eklenir.

import type { Gorsel } from "./tip";

export type { Gorsel } from "./tip";

export const GORSELLER: Gorsel[] = [];

export const gorselBul = (kod: string) => GORSELLER.find((g) => g.kod === kod);

// Ders metninde tek başına duran şekil işareti
export const SEKIL_DESENI = /^\[\[(G-H\d+-\d+)\]\]$/;
