// 6. Sınıf Türkçe soru yardımcıları. Konu kimliği t6-u<tema>-<konu>, soru kimliği t6-...
// Her soru grubunun ref'inde programdaki öğrenme çıktısının kodu yazar
// ("T.O.6.5 · 1. tema"). yazili1: 1. dönem 1. ortak yazılı kapsamındaki çıktılar.
import { sinif6Turkce } from "../meta.ts";
import type { Soru, TuretilmisGovde } from "../../tipler.ts";

export type { Soru };

export interface Grup {
  tema: number;
  konu: string;
  kavram: string;
  // Öğrenme çıktısı kodu: "T.O.6.5"
  kod: string;
  yazili1?: true;
}

export function grup(g: Grup, liste: TuretilmisGovde[]): Soru[] {
  const k = sinif6Turkce.kavramlar[g.kavram];
  if (!k) throw new Error(`bilinmeyen kavram: ${g.kavram}`);
  return liste.map(
    (s) =>
      ({
        ...s,
        hafta: g.tema,
        konu: g.konu,
        kavram: g.kavram,
        kaynak: "derived",
        etiketler: g.yazili1 ? ["turetilmis", "yazili1"] : ["turetilmis"],
        ref: `${g.kod} · ${g.tema}. tema`,
      }) as Soru,
  );
}

// Okuma metni ve soru: metin alıntı olarak, soru altında
export const metinli = (metin: string, soru: string) => `${metin.trim().split("\n").map((s) => `> ${s}`).join("\n")}\n\n${soru}`;
