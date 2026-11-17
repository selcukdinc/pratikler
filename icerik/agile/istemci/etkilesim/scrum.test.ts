import { describe, expect, it } from "vitest";
import { dodSonucu, MADDELER, timebox } from "./scrum";

describe("agile: Scrum hesapları", () => {
  it("time-box: bir aylık Sprint 8/4/3 saat; iki haftalık yarısı (soru cevaplarıyla aynı)", () => {
    expect(timebox(4)).toMatchObject({ planning: 8, review: 4, retro: 3, daily: 5 });
    expect(timebox(2)).toMatchObject({ planning: 4, review: 2, retro: 1.5, daily: 2.5, toplam: 10, sprintSaat: 80 });
    expect(timebox(1).oran).toBeCloseTo(timebox(4).oran);
  });
  it("DoD kurucu: karşılanmayan madde seçilince Done değil, standart zorunlu", () => {
    const dodlar = MADDELER.filter((m) => m.tur === "dod").map((m) => m.id);
    expect(dodSonucu(dodlar).done).toBe(false);
    expect(dodSonucu(dodlar).eksik.map((m) => m.id)).toEqual(["ortam", "erisilebilirlik"]);
    expect(dodSonucu(["guvenlik", "inceleme", "test"]).done).toBe(true);
    expect(dodSonucu(["inceleme", "test"])).toMatchObject({ done: false, standartEksik: true });
    expect(dodSonucu(["guvenlik", "fistik"]).yanlis.map((m) => m.id)).toEqual(["fistik"]);
  });
});
