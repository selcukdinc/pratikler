import { afterEach, describe, expect, it, vi } from "vitest";
import { yoneticiIletisiGovdesi, yoneticiyeIlet } from "./eposta";

const ileti = { konu: "[DSP] Yeni mesaj: Soru 3", metin: "@ayse · DSP\n\nMerhaba", baglanti: "https://dsp.selcukdinc.dev/yonetim/mesajlar/x", yanitla: "ayse@ornek.com" };

afterEach(() => vi.unstubAllGlobals());

describe("yöneticiye iletim", () => {
  it("adres, konu, yanıtla ve panel bağlantısı gövdede", () => {
    const g = yoneticiIletisiGovdesi({ YONETICI_EPOSTA: "y@ornek.com" }, ileti);
    expect(g.to).toEqual(["y@ornek.com"]);
    expect(g.subject).toBe(ileti.konu);
    expect(g.reply_to).toBe("ayse@ornek.com");
    expect(g.text).toContain("Merhaba");
    expect(g.text).toContain("Panelde aç: https://dsp.selcukdinc.dev/yonetim/mesajlar/x");
  });

  it("kullanıcının adresi yoksa reply_to eklenmez", () => {
    expect(yoneticiIletisiGovdesi({ YONETICI_EPOSTA: "y@ornek.com" }, { ...ileti, yanitla: null })).not.toHaveProperty("reply_to");
  });

  it("adres ya da anahtar tanımlı değilse hiçbir şey gönderilmez", async () => {
    const f = vi.fn();
    vi.stubGlobal("fetch", f);
    await yoneticiyeIlet({ RESEND_API_KEY: "k" }, ileti);
    await yoneticiyeIlet({ YONETICI_EPOSTA: "y@ornek.com" }, ileti);
    expect(f).not.toHaveBeenCalled();
  });

  it("Resend'e anahtarla gönderir, hata verirse fırlatır", async () => {
    const f = vi.fn().mockResolvedValueOnce(new Response("{}")).mockResolvedValueOnce(new Response("kota", { status: 429 }));
    vi.stubGlobal("fetch", f);
    const env = { RESEND_API_KEY: "k", YONETICI_EPOSTA: "y@ornek.com" };
    await yoneticiyeIlet(env, ileti);
    expect(f.mock.calls[0]![0]).toBe("https://api.resend.com/emails");
    expect(JSON.parse(f.mock.calls[0]![1].body).to).toEqual(["y@ornek.com"]);
    await expect(yoneticiyeIlet(env, ileti)).rejects.toThrow("Resend 429");
  });
});
