// Mesajlaşma simülatörünün görünürlük kuralları: her rol × her koruma katmanı tablosu ve
// anahtar yeri, doğrulama, gizli gönderen, yedek, kaybolan mesajlar ve zaman çizelgesi.
import { describe, expect, it } from "vitest";
import { gorunum, ORNEK_YAZISMA, tasarimOku, tasarimYaz, turlar, VARSAYILAN, zamanCizelgesi, type Duzey, type Koruma, type Rol, type Tasarim } from "./model";

const m = ORNEK_YAZISMA[20]!; // 2 gün önce
const eski = ORNEK_YAZISMA[0]!; // 30 gün önce
const t = (ek: Partial<Tasarim> = {}): Tasarim => ({ ...VARSAYILAN, anahtarYeri: "cihaz", dogrulandi: true, ...ek });

describe("rol × koruma tablosu (anahtar cihazda, doğrulanmış, yedek kapalı)", () => {
  const beklenen: Record<Rol, Record<Koruma, Duzey>> = {
    ag: { yok: "metin", tls: "bayt", "e2ee-sabit": "bayt", "e2ee-ratchet": "bayt" },
    gelistirici: { yok: "metin", tls: "metin", "e2ee-sabit": "bayt", "e2ee-ratchet": "bayt" },
    sunucu: { yok: "metin", tls: "metin", "e2ee-sabit": "bayt", "e2ee-ratchet": "bayt" },
    "telefon-kilitli": { yok: "hicbiri", tls: "hicbiri", "e2ee-sabit": "hicbiri", "e2ee-ratchet": "hicbiri" },
    "telefon-acik": { yok: "metin", tls: "metin", "e2ee-sabit": "metin", "e2ee-ratchet": "metin" },
    yedek: { yok: "hicbiri", tls: "hicbiri", "e2ee-sabit": "hicbiri", "e2ee-ratchet": "hicbiri" },
    guncelleme: { yok: "metin", tls: "metin", "e2ee-sabit": "metin", "e2ee-ratchet": "metin" },
  };
  for (const [rol, satir] of Object.entries(beklenen) as [Rol, Record<Koruma, Duzey>][])
    for (const [koruma, duzey] of Object.entries(satir) as [Koruma, Duzey][])
      it(`${rol} / ${koruma} → ${duzey}`, () => {
        const g = gorunum(t({ koruma }), rol, m);
        expect(g.duzey).toBe(duzey);
        expect(g.neden.length).toBeGreaterThan(10);
      });
});

describe("ayarların etkisi", () => {
  it("anahtar sunucudaysa ya da emanet kopyası varsa E2EE sunucuya karşı korumaz", () => {
    for (const anahtarYeri of ["sunucu", "ikisi"] as const) {
      expect(gorunum(t({ koruma: "e2ee-ratchet", anahtarYeri }), "sunucu", m).duzey).toBe("metin");
      expect(gorunum(t({ koruma: "e2ee-ratchet", anahtarYeri }), "gelistirici", m).duzey).toBe("metin");
    }
  });
  it("doğrulanmamış güvenlik numarası sunucuya etkin saldırı kapısı açar; geliştiriciye açmaz", () => {
    const g = gorunum(t({ koruma: "e2ee-ratchet", dogrulandi: false }), "sunucu", m);
    expect(g).toMatchObject({ duzey: "metin", aktif: true });
    expect(gorunum(t({ koruma: "e2ee-ratchet", dogrulandi: false }), "gelistirici", m).duzey).toBe("bayt");
  });
  it("gizli gönderen sunucudan göndereni saklar, alıcıyı saklamaz", () => {
    const g = gorunum(t({ koruma: "e2ee-ratchet", metadata: "gizli-gonderen" }), "sunucu", m);
    expect(g.meta).not.toContain("gönderen");
    expect(g.meta).toContain("alıcı");
    expect(gorunum(t({ koruma: "e2ee-ratchet" }), "sunucu", m).meta).toContain("gönderen");
  });
  it("ağ, TLS varken kime yazıldığını görmez", () => {
    expect(gorunum(t({ koruma: "tls" }), "ag", m).meta).toEqual(["zaman", "boyut"]);
  });
  it("yedek türleri", () => {
    const y = (yedek: Tasarim["yedek"]) => gorunum(t({ koruma: "e2ee-ratchet", yedek }), "yedek", m).duzey;
    expect([y("kapali"), y("sifresiz"), y("saglayici"), y("parola")]).toEqual(["hicbiri", "metin", "metin", "bayt"]);
  });
  it("ekran kilidi yoksa kilitli telefon da okunur", () => {
    expect(gorunum(t({ ekranKilidi: false }), "telefon-kilitli", m).duzey).toBe("metin");
  });
  it("kaybolan mesajlar eski mesajı telefondan, yedekten ve sonradan gelen güncellemeden siler", () => {
    const k = t({ koruma: "e2ee-ratchet", kaybolan: 7, yedek: "sifresiz" });
    for (const rol of ["telefon-acik", "yedek", "guncelleme"] as const) {
      expect(gorunum(k, rol, eski).duzey).toBe("hicbiri");
      expect(gorunum(k, rol, m).duzey).toBe("metin");
    }
  });
  it("kötü niyetli güncellemeyi hiçbir ayar kapatmaz", () => {
    const en_iyi = t({ koruma: "e2ee-ratchet", metadata: "gizli-gonderen", yedek: "parola" });
    expect(gorunum(en_iyi, "guncelleme", m).duzey).toBe("metin");
  });
});

describe("zaman çizelgesi", () => {
  const msj = ORNEK_YAZISMA;
  const tur = turlar(msj);
  const k = 10; // Ayşe'nin turu
  const acik = (tas: Tasarim, anahtar: Parameters<typeof zamanCizelgesi>[3]) => zamanCizelgesi(tas, msj, k, anahtar).map((x) => x.acik);
  it("turlar ardışık aynı göndericileri gruplar", () => {
    expect(tur.slice(0, 7)).toEqual([0, 1, 2, 2, 3, 3, 4]);
  });
  it("sabit anahtarda her şey açılır", () => {
    expect(acik(t({ koruma: "e2ee-sabit" }), "durum").every(Boolean)).toBe(true);
  });
  it("Double Ratchet: geçmiş kapalı (ileri gizlilik), iki tur sonra iyileşir (ele geçirme sonrası güvenlik)", () => {
    const a = acik(t({ koruma: "e2ee-ratchet" }), "durum");
    msj.forEach((_, i) => {
      const beklenen = i >= k && tur[i]! <= tur[k]! + 1;
      expect(a[i], `mesaj ${i}`).toBe(beklenen);
    });
    expect(a.slice(0, k).some(Boolean)).toBe(false);
    expect(a.at(-1)).toBe(false);
  });
  it("yalnız zincir anahtarı o turun kalanını açar", () => {
    const a = acik(t({ koruma: "e2ee-ratchet" }), "zincir");
    msj.forEach((_, i) => expect(a[i]).toBe(i >= k && tur[i] === tur[k]));
  });
  it("kimlik anahtarı kaydedilmiş trafiği açmaz", () => {
    expect(acik(t({ koruma: "e2ee-ratchet" }), "kimlik").some(Boolean)).toBe(false);
  });
  it("şifresiz yedek varken cırcır işe yaramaz", () => {
    expect(acik(t({ koruma: "e2ee-ratchet", yedek: "sifresiz" }), "zincir").every(Boolean)).toBe(true);
  });
  it("parolalı yedeğin anahtarı silinmemiş mesajları açar", () => {
    const a = acik(t({ koruma: "e2ee-ratchet", yedek: "parola", kaybolan: 7 }), "yedek");
    msj.forEach((x, i) => expect(a[i]).toBe(x.gun <= 7));
  });
});

describe("paylaşılan tasarım bağlantısı", () => {
  it("yazılan tasarım geri okunur, bozuk olan reddedilir", () => {
    const tas = t({ koruma: "e2ee-ratchet", yedek: "parola", metadata: "gizli-gonderen", kaybolan: 7 });
    expect(tasarimOku(tasarimYaz(tas))).toEqual(tas);
    expect(tasarimOku(tasarimYaz(VARSAYILAN))).toEqual(VARSAYILAN);
    expect(tasarimOku("e2ee.cihaz")).toBeNull();
    expect(tasarimOku("tls.sunucu.kapali.yok.d1.k9999.e1")).toBeNull();
  });
});
