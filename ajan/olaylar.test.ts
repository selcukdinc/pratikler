import { describe, expect, it } from "vitest";
// @ts-expect-error: düz JavaScript modülü (ajan Node ile doğrudan çalışır)
import { aracOzeti, satirBolucu, satirdanOlaylar } from "./olaylar.mjs";

describe("ajan canlı günlüğü", () => {
  it("asistan metni ve araç çağrıları", () => {
    const { olaylar } = satirdanOlaylar(JSON.stringify({
      type: "assistant",
      message: { content: [{ type: "text", text: "CLAUDE.md'yi okuyorum." }, { type: "tool_use", name: "Read", input: { file_path: "/d/CLAUDE.md" } }] },
    }));
    expect(olaylar).toEqual([{ tur: "metin", metin: "CLAUDE.md'yi okuyorum." }, { tur: "arac", metin: "Read /d/CLAUDE.md" }]);
  });

  it("araç sonucu kısaltılır, hata ayrı tür olur", () => {
    const uzun = "x".repeat(2000);
    const { olaylar } = satirdanOlaylar(JSON.stringify({
      type: "user",
      message: { content: [{ type: "tool_result", content: uzun }, { type: "tool_result", content: [{ type: "text", text: "bulunamadı" }], is_error: true }] },
    }));
    expect(olaylar[0].tur).toBe("sonuc");
    expect(olaylar[0].metin.length).toBeLessThan(700);
    expect(olaylar[1]).toEqual({ tur: "hata", metin: "bulunamadı" });
  });

  it("bitiş satırı süre, adım ve maliyeti verir, özeti döner", () => {
    const r = satirdanOlaylar(JSON.stringify({ type: "result", subtype: "success", result: "İki soru ekledim.", duration_ms: 95_400, num_turns: 12, total_cost_usd: 0.4321 }));
    expect(r.olaylar).toEqual([{ tur: "bilgi", metin: "Claude bitti · 95 sn · 12 adım · $0.43" }]);
    expect(r.ozet).toBe("İki soru ekledim.");
  });

  it("JSON olmayan satır komut çıktısı sayılır", () => {
    expect(satirdanOlaylar("npm warn x").olaylar).toEqual([{ tur: "cikti", metin: "npm warn x" }]);
    expect(satirdanOlaylar("   ").olaylar).toEqual([]);
  });

  it("Bash komutu tek satıra iner", () => {
    expect(aracOzeti("Bash", { command: "npm run\n  denetle" })).toBe("$ npm run denetle");
    expect(aracOzeti("Grep", { pattern: "kavram", path: "icerik" })).toBe("Grep kavram (icerik)");
  });

  it("satır bölücü yarım satırı saklar", () => {
    const gelen: string[] = [];
    const b = satirBolucu((s: string) => gelen.push(s));
    b.ekle('{"a":1}\n{"b"');
    b.ekle(":2}\nson");
    expect(gelen).toEqual(['{"a":1}', '{"b":2}']);
    b.bitir();
    expect(gelen).toEqual(['{"a":1}', '{"b":2}', "son"]);
  });
});
