// FPGA soru havuzu: kaynak/ klasörü fpga-pratik deposundaki content/sorular'ın
// (ve shared/kavramlar.ts, shared/benzerler.ts) aynısıdır. Kimlikler ve etiketler
// burada çatının biçimine çevrilir (../kimlik.ts).
import type { Konu, Soru } from "../../tipler.ts";
import { kavramKimligi, konuKimligi, soruKimligi } from "../kimlik.ts";
import { kavramOf } from "./kaynak/kavramlar.ts";
import { konular as eskiKonular, sorular as eskiSorular } from "./kaynak/index.ts";

const ATIFLI_SIK = /^(hepsi|hepsine|hiçbiri|yukarıdakilerin hepsi|[a-e] ve [a-e])\.?$/i;

export const konular: Konu[] = eskiKonular.map((k) => ({ ...k, id: konuKimligi(k.id) }));

export const sorular: Soru[] = eskiSorular.map(({ dogrulama: _d, ...s }) => {
  const kavram = s.kavram ?? kavramOf(s.id);
  if (!kavram) throw new Error(`${s.id}: kavramı yok`);
  const ortak = {
    ...s,
    id: soruKimligi(s.id),
    konu: konuKimligi(s.konu),
    kavram: kavramKimligi(s.hafta, kavram),
    etiketler: [s.kaynak === "original" ? "orijinal" : "turetilmis"],
  };
  // Kod sorusunun referans modeli worker/modeller.ts'de eski kimlikle durur
  if (s.tip === "code") {
    const { cozum: _c, ...k } = ortak as typeof ortak & { cozum: string };
    return { ...k, model: s.id } as Soru;
  }
  // Eski site şıkları hep karıştırırdı; "Hiçbiri" gibi şıkları olan sorular çatıda sabit kalır
  if (s.tip === "mcq" && s.secenekler.some((c) => ATIFLI_SIK.test(c.trim()))) return { ...ortak, sabit: true } as Soru;
  return ortak as Soru;
});
