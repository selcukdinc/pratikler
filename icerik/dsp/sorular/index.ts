// DSP soru havuzu: kaynak/ klasörü dsp-pratik deposundaki content/sorular'ın
// aynısıdır. Kimlikler ve etiketler burada çatının biçimine çevrilir.
import type { Konu, Soru } from "../../tipler.ts";
import { konuKimligi, kavramKimligi, soruKimligi } from "../kimlik.ts";
import { konular as eskiKonular, sorular as eskiSorular } from "./kaynak/index.ts";

export const konular: Konu[] = eskiKonular.map((k) => ({ ...k, id: konuKimligi(k.id) }));

export const sorular: Soru[] = eskiSorular.map(
  (s) =>
    ({
      ...s,
      id: soruKimligi(s.id),
      konu: konuKimligi(s.konu),
      kavram: kavramKimligi(s.hafta, s.kavram),
      etiketler: [s.kaynak === "original" ? "ders" : "turetilmis"],
    }) as Soru,
);
