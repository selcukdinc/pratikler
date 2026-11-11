import { describe, expect, it } from "vitest";
import { dersAra, duzlestir, vurguParcalari } from "./ders-arama";

const DERSLER = [
  { ad: "Tıp Elektroniği", alan: "Mühendislik", aciklama: "Biyomedikal işaretler", uniteler: ["EKG ve kalp", "Sensörler"] },
  { ad: "İşletme", alan: "İşletme", aciklama: "İşletme bilimine giriş", uniteler: ["Yönetim"] },
  { ad: "Fizik", alan: "Temel bilimler", aciklama: "Mekanik ve elektrik", uniteler: ["Vektörler"] },
  { ad: "6. Sınıf Türkçe", alan: "6. Sınıf", aciklama: "Ortak sınav soruları", uniteler: ["Sözcükte anlam"] },
];
const adlar = (s: string) => dersAra(DERSLER, s).map((x) => x.ders.ad);

describe("ders araması", () => {
  it("Türkçe harf ve büyük/küçük harf ayırmaz, uzunluğu korur", () => {
    expect(duzlestir("İŞLETME ığüşöç")).toBe("isletme igusoc");
    expect(adlar("isletme")).toEqual(["İşletme"]);
    expect(adlar("FIZIK")).toEqual(["Fizik"]);
    expect(adlar("turkce")).toEqual(["6. Sınıf Türkçe"]);
  });
  it("boş sorgu bütün dersleri sırasıyla verir", () => {
    expect(adlar("  ")).toHaveLength(4);
  });
  it("adında geçen ders, açıklamasında geçenden önce gelir", () => {
    expect(adlar("elektr")).toEqual(["Tıp Elektroniği", "Fizik"]);
  });
  it("her kelime bir yerde geçmelidir", () => {
    expect(adlar("6 türkçe")).toEqual(["6. Sınıf Türkçe"]);
    expect(adlar("fizik türkçe")).toEqual([]);
  });
  it("ünite başlığından bulunan derste başlığı bildirir", () => {
    expect(dersAra(DERSLER, "ekg")).toEqual([{ ders: DERSLER[0], unite: "EKG ve kalp" }]);
  });
  it("eşleşen yerleri vurgular", () => {
    expect(vurguParcalari("Tıp Elektroniği", "tip")).toEqual([
      { metin: "Tıp", vurgu: true },
      { metin: " Elektroniği", vurgu: false },
    ]);
  });
});
