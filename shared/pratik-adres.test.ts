import { describe, expect, it } from "vitest";
import { hosttanPratik } from "../icerik/index";

describe("alan adından pratik", () => {
  it("alt alan adını tanır, çatıyı ve bilinmeyeni null döndürür", () => {
    expect(hosttanPratik("tipelektronigi.selcukdinc.dev")?.id).toBe("tip-elektronigi");
    expect(hosttanPratik("TipElektronigi.selcukdinc.dev:443")?.id).toBe("tip-elektronigi");
    expect(hosttanPratik("pratikler.selcukdinc.dev")).toBeNull();
    expect(hosttanPratik("fpga.selcukdinc.dev")).toBeNull();
  });
});
