import { describe, expect, it } from "vitest";
import { gercekOturum } from "./gercek";
import { ORNEK_YAZISMA, turlar } from "./model";
import { aesAnahtariAl, aesGcmCoz } from "../webcrypto";
import { bayttanMetin, hextenBayt } from "../bayt";

describe("simülatörün gerçek değerleri", () => {
  it("koruma yokken bayt açık metindir, TLS ve sabit E2EE'de tek anahtar vardır", async () => {
    const yok = await gercekOturum("yok", ORNEK_YAZISMA);
    expect(bayttanMetin(hextenBayt(yok.mesajlar[0]!.bayt))).toBe(ORNEK_YAZISMA[0]!.metin);
    const sabit = await gercekOturum("e2ee-sabit", ORNEK_YAZISMA);
    expect(new Set(sabit.mesajlar.map((m) => m.mesajAnahtari)).size).toBe(1);
  });
  it("Double Ratchet: her mesaj ayrı anahtar, her turda yeni DH, şifreli metin çözülür", async () => {
    const o = await gercekOturum("e2ee-ratchet", ORNEK_YAZISMA);
    expect(new Set(o.mesajlar.map((m) => m.mesajAnahtari)).size).toBe(ORNEK_YAZISMA.length);
    const tur = turlar(ORNEK_YAZISMA);
    o.mesajlar.forEach((m, i) => expect(Boolean(m.dhAcik)).toBe(i === 0 || tur[i] !== tur[i - 1]));
    const m = o.mesajlar[5]!;
    const k = await aesAnahtariAl(hextenBayt(m.mesajAnahtari!), "AES-GCM");
    expect(bayttanMetin(await aesGcmCoz(k, hextenBayt(m.nonce!), hextenBayt(m.bayt)))).toBe(ORNEK_YAZISMA[5]!.metin);
  });
});
