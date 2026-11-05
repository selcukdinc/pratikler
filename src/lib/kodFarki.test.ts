import { describe, expect, it } from "vitest";
import { kodFarki } from "./kodFarki";

describe("kodFarki", () => {
  it("aynı kodu söyler", () => {
    expect(kodFarki("a = 1\nb = 2", "a = 1\nb = 2")).toBe("kod aynı");
  });
  it("değişen ilk satırı ve numarasını verir", () => {
    expect(kodFarki("x = 1;\ny = sin(x)\nz = 3", "x = 1;\ny = square(x)\nz = 3")).toBe("2. satır: y = square(x)");
  });
  it("birden çok satırı sayar", () => {
    expect(kodFarki("a\nb\nc", "a\nB\nC\nc")).toBe("2. satır: B (+1 satır)");
  });
  it("silinen satırı söyler", () => {
    expect(kodFarki("a\nb\nc", "a\nc")).toBe("2. satır silindi");
  });
  it("uzun satırı kısaltır", () => {
    expect(kodFarki("a", "x".repeat(80)).endsWith("…")).toBe(true);
  });
});
