// Soru havuzu: kaynak/ klasörü fizik-pratik deposundaki content/sorular'ın aynısıdır.
// Soru ve konu kimlikleri burada "fz-" önekini alır (kavramlar zaten u<ünite>- biçiminde).
import type { Konu, Soru } from "../../tipler.ts";
import { konular as eskiKonular, sorular as eskiSorular } from "./kaynak/index.ts";
import { aciklamaMetni } from "./kaynak/tipler.ts";

export const ONEK = "fz-";

export const konular: Konu[] = eskiKonular.map((k) => ({ ...k, id: ONEK + k.id }));

// Adım adım çözümler açıklamaya "---" ayırıcısıyla eklenir; soru kartı adımları
// sırayla açar (src/components/Cozum.tsx)
export const sorular: Soru[] = eskiSorular.map(({ adimlar: _adimlar, ...s }) => ({
  ...s,
  id: ONEK + s.id,
  konu: ONEK + s.konu,
  aciklama: aciklamaMetni({ aciklama: s.aciklama, adimlar: _adimlar }),
}) as Soru);
