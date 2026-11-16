import { describe, expect, it } from "vitest";
import { base64, base64tenBayt, bayttanMetin, bitler, hex, hextenBayt, metindenBayt, xorBayt } from "./bayt";

describe("bayt araçları", () => {
  it("UTF-8, hex ve Base64", () => {
    expect(hex(metindenBayt("A"))).toBe("41");
    expect(hex(metindenBayt("ş"))).toBe("c59f");
    expect(base64(metindenBayt("Man"))).toBe("TWFu");
    expect(base64(metindenBayt("Hi"))).toBe("SGk=");
    expect(bayttanMetin(base64tenBayt("U2lmcmU="))).toBe("Sifre");
    expect(bayttanMetin(hextenBayt("4b 45 59"))).toBe("KEY");
    expect(base64(new Uint8Array(30)).length).toBe(40);
  });
  it("bit deseni ve XOR", () => {
    expect(bitler(0x41)).toBe("01000001");
    expect(hex(xorBayt(hextenBayt("3c"), hextenBayt("ff")))).toBe("c3");
  });
});
