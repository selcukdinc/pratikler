import { describe, expect, it } from "vitest";
import { SORULAR } from "../../icerik/sorular.ts";

const sorular = Object.values(SORULAR).flatMap((p) => p.sorular);

// Şıklar ekranda karıştırıldığı için açıklama doğru şıkkı harfiyle anamaz;
// başka şıklara atıf yapan ya da "Hepsi/Hiçbiri" gibi şıklar varsa soru sabit olmalı.
const HARF_ATIF = /\*\*[A-E]\*\*|\b[A-E]\)|\b[A-E] şıkkı|\b[A-Ea-e] seçeneği/;
const ATIFLI_SIK = /^(hepsi|hepsine|hiçbiri|yukarıdakilerin hepsi|[a-e] ve [a-e])\.?$/i;

describe("şık sırası", () => {
  const mcq = sorular.filter((s) => s.tip === "mcq");
  for (const s of mcq) {
    if (s.tip !== "mcq") continue;
    it(s.id, () => {
      if (!s.sabit) expect(s.aciklama, "açıklama şıkkı harfle anıyor").not.toMatch(HARF_ATIF);
      const atifli = s.secenekler.filter((c) => ATIFLI_SIK.test(c.trim()));
      if (atifli.length) expect(s.sabit, `"${atifli[0]}" şıkkı var, sabit: true olmalı`).toBe(true);
    });
  }
});
