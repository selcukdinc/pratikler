import { describe, expect, it } from "vitest";
import type { Me } from "../shared/api";
import { yetkisiVar } from "./yetki";

const kisi = (role: string, alanlar: string[] = [], kind: Me["kind"] = "member") => ({ kind, role, alanlar }) as Me;

describe("yetki", () => {
  it("yönetici her pratikte her şeyi yapar", () => {
    expect(yetkisiVar(kisi("admin"), "sinav.hazirla", "kimya")).toBe(true);
    expect(yetkisiVar(kisi("admin"), "yonetim.giris")).toBe(true);
  });
  it("akademisyen yalnızca alanındaki pratikte sınav hazırlar ve havuz açar", () => {
    const a = kisi("akademisyen", ["tip-elektronigi"]);
    expect(yetkisiVar(a, "sinav.hazirla", "tip-elektronigi")).toBe(true);
    expect(yetkisiVar(a, "havuz.ac", "tip-elektronigi")).toBe(true);
    expect(yetkisiVar(a, "sinav.hazirla", "kimya")).toBe(false);
    expect(yetkisiVar(a, "sinav.hazirla")).toBe(false);
    expect(yetkisiVar(a, "yonetim.giris", "tip-elektronigi")).toBe(false);
    expect(yetkisiVar(kisi("akademisyen"), "sinav.hazirla", "tip-elektronigi")).toBe(false);
  });
  it("üye ve misafir sınav hazırlayamaz, alanı olsa da", () => {
    expect(yetkisiVar(kisi("user", ["kimya"]), "sinav.hazirla", "kimya")).toBe(false);
    expect(yetkisiVar(kisi("admin", [], "guest"), "sinav.hazirla", "kimya")).toBe(false);
    expect(yetkisiVar(null, "sinav.hazirla", "kimya")).toBe(false);
  });
});
