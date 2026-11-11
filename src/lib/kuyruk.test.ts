import { beforeEach, describe, expect, it, vi } from "vitest";
import type { KuyrukCevabi, Question } from "../../shared/api";
import { perdele } from "../../shared/perde";
import {
  ESIK, bekleyenSayisi, durumlariKur, kuyruguGonder, kuyruguKur, sifirla, yerelCevapla, yerelCozum, yerelDurumlar, type GonderimSonucu,
} from "./kuyruk";

const soru = (id: string, ek: Partial<Question> = {}, anahtar: unknown = { index: 1 }, aciklama: string | null = "Çünkü öyle."): Question => ({
  id, topicId: "k", week: 1, type: "mcq", source: "derived", prompt: "?", payload: { choices: ["a", "b", "c"] }, etiketler: [],
  difficulty: 1, sourceRef: null, cozum: perdele(id, JSON.stringify({ a: anahtar, e: aciklama })), ist: { kisi: 10, ilkDogru: 4, siklar: [3, 4, 3] },
  ...ek,
});

const tamam = (dogru = 0): GonderimSonucu => ({ durum: "tamam", sonuc: { kaydedilen: 0, gunluk: { dogru, hedef: 10 }, tekrarSayisi: 7 } });

describe("cevap kuyruğu", () => {
  let gidenler: KuyrukCevabi[][];
  let cevap: () => GonderimSonucu;
  let tekrarSayisi: number | null;

  beforeEach(() => {
    sifirla();
    gidenler = [];
    cevap = () => tamam();
    tekrarSayisi = null;
    kuyruguKur({
      anahtar: "deneme",
      gonder: async (c) => (gidenler.push(c), cevap()),
      tekrarSayisi: (n) => (tekrarSayisi = n),
    });
    durumlariKur({}, { dogru: 0, hedef: 10 });
  });

  it("cevabı sunucuya sormadan değerlendirir", () => {
    const q = soru("s1");
    const r = yerelCevapla(q, { index: 1 })!;
    expect(r.correct).toBe(true);
    expect(r.explanation).toBe("Çünkü öyle.");
    expect(r.gunluk).toEqual({ dogru: 1, hedef: 10 });
    expect(gidenler).toHaveLength(0);
    expect(bekleyenSayisi()).toBe(1);
    expect(yerelCevapla(soru("s2"), { index: 0 })!.correct).toBe(false);
  });

  it("ilk denemede kendi cevabını toplamlara ekler, sonrakilerde eklemez", () => {
    const q = soru("s1");
    expect(yerelCevapla(q, { index: 2 })!.istatistik).toEqual({ kisi: 11, ilkDogru: 4, siklar: [3, 4, 4] });
    expect(yerelCevapla(q, { index: 1 })!.istatistik).toEqual({ kisi: 11, ilkDogru: 4, siklar: [3, 4, 4] });
  });

  it("daha önce denenmiş soruda toplamlar değişmez", () => {
    durumlariKur({ s1: "yanlis" }, null);
    expect(yerelCevapla(soru("s1"), { index: 1 })!.istatistik).toEqual({ kisi: 10, ilkDogru: 4, siklar: [3, 4, 3] });
    expect(yerelDurumlar()).toEqual({ s1: "dogru" });
  });

  it("doğru çözülen soru sonradan yanlış yapılsa da doğru kalır", () => {
    const q = soru("s1");
    yerelCevapla(q, { index: 1 });
    yerelCevapla(q, { index: 0 });
    expect(yerelDurumlar()).toEqual({ s1: "dogru" });
  });

  it("boşluk doldurmada her boşluğun sonucunu verir", () => {
    const q = soru("s1", { type: "fill", payload: { blanks: 2 }, ist: { kisi: 0, ilkDogru: 0 } }, { blanks: [["elma"], ["armut", "ayva"]] });
    const r = yerelCevapla(q, { blanks: ["Elma", "muz"] })!;
    expect(r.correct).toBe(false);
    expect(r.bosluklar).toEqual([true, false]);
  });

  it("cevap anahtarı olmayan soruda (kod sorusu) null döner", () => {
    expect(yerelCevapla(soru("s1", { cozum: undefined }), { index: 1 })).toBeNull();
    expect(bekleyenSayisi()).toBe(0);
  });

  it("yazma sorusunun örnek çözümünü soruyla gelen açıklamadan verir", () => {
    expect(yerelCozum(soru("s1", { type: "yaz" }, {}, "Örnek çözüm"))).toBe("Örnek çözüm");
    expect(yerelCozum(soru("s1", { cozum: undefined }))).toBeNull();
  });

  it("eşik dolunca cevaplar tek istekte gider", async () => {
    for (let i = 0; i < ESIK; i++) yerelCevapla(soru(`s${i}`), { index: 1 });
    await kuyruguGonder();
    expect(gidenler).toHaveLength(1);
    expect(gidenler[0]).toHaveLength(ESIK);
    expect(Object.keys(gidenler[0]![0]!).sort()).toEqual(["answer", "at", "id"]);
    expect(bekleyenSayisi()).toBe(0);
    expect(tekrarSayisi).toBe(7);
  });

  it("sunucuya ulaşılamazsa cevaplar kuyrukta kalır ve sonra gider", async () => {
    vi.useFakeTimers();
    cevap = () => ({ durum: "hata" });
    yerelCevapla(soru("s1"), { index: 1 });
    await kuyruguGonder();
    expect(bekleyenSayisi()).toBe(1);
    cevap = () => tamam(1);
    await kuyruguGonder();
    expect(bekleyenSayisi()).toBe(0);
    expect(gidenler).toHaveLength(2);
    vi.useRealTimers();
  });

  it("sunucunun reddettiği liste kuyruğu tıkamaz", async () => {
    cevap = () => ({ durum: "red" });
    yerelCevapla(soru("s1"), { index: 1 });
    await kuyruguGonder();
    expect(bekleyenSayisi()).toBe(0);
  });

  it("gönderimden sonra günlük sayı sunucununkine eşitlenir", async () => {
    cevap = () => tamam(5);
    yerelCevapla(soru("s1"), { index: 1 });
    await kuyruguGonder();
    expect(yerelCevapla(soru("s2"), { index: 1 })!.gunluk).toEqual({ dogru: 6, hedef: 10 });
  });

  it("açılışta bekleyen cevaplar durumlara ve günlük sayıya işlenir", () => {
    yerelCevapla(soru("s1"), { index: 1 });
    yerelCevapla(soru("s2"), { index: 0 });
    durumlariKur({ s3: "dogru" }, { dogru: 2, hedef: 10 });
    expect(yerelDurumlar()).toEqual({ s1: "dogru", s2: "yanlis", s3: "dogru" });
    expect(yerelCevapla(soru("s4"), { index: 1 })!.gunluk).toEqual({ dogru: 4, hedef: 10 });
  });
});
