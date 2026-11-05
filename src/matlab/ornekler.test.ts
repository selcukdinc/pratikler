import { describe, expect, it } from "vitest";
import { ORNEKLER } from "./ornekler";
import { Yorumlayici } from "./yorumla";

describe("MatStudio örnekleri", () => {
  for (const o of ORNEKLER)
    it(`${o.ad} hatasız çalışır`, () => {
      const y = new Yorumlayici({ tohum: 1 });
      expect(y.calistir(o.kod).hata).toBeNull();
    });
  it("adlar tekil ve .m ile biter", () => {
    expect(new Set(ORNEKLER.map((o) => o.ad)).size).toBe(ORNEKLER.length);
    for (const o of ORNEKLER) expect(o.ad).toMatch(/^[a-z_]+\.m$/);
  });
});
