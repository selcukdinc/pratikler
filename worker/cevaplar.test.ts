import { describe, expect, it } from "vitest";
import { cevabiDuzelt } from "./cevaplar";

describe("cevabiDuzelt", () => {
  it("türüne uyan cevabı yalnızca beklenen alanlarla döndürür", () => {
    expect(cevabiDuzelt("tf", { value: true, fazla: 1 })).toEqual({ value: true });
    expect(cevabiDuzelt("mcq", { index: 2 })).toEqual({ index: 2 });
    expect(cevabiDuzelt("fill", { blanks: ["a", "b"] })).toEqual({ blanks: ["a", "b"] });
    expect(cevabiDuzelt("yaz", { oz: "kismen", yazi: "x".repeat(5000) })).toEqual({ oz: "kismen", yazi: "x".repeat(4000) });
  });

  it("türüne uymayan ya da bozuk cevabı reddeder", () => {
    expect(cevabiDuzelt("tf", { index: 1 })).toBeNull();
    expect(cevabiDuzelt("mcq", { index: -1 })).toBeNull();
    expect(cevabiDuzelt("mcq", { index: 1.5 })).toBeNull();
    expect(cevabiDuzelt("num", { blanks: [1] })).toBeNull();
    expect(cevabiDuzelt("yaz", { oz: "harika" })).toBeNull();
    expect(cevabiDuzelt("code", { index: 0 })).toBeNull();
    expect(cevabiDuzelt("mcq", null)).toBeNull();
  });
});
