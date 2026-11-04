// Pratiklerin istemci içeriği (icerik/<pratik>/istemci): ders sayfaları, Sanal Lab
// ve çıkmış sınavlar soru havuzuyla tutarlı mı.
import { describe, expect, it } from "vitest";
import { SORULAR } from "../../icerik/sorular";
import { pratikBul } from "../../icerik/index";
import type { PratikIstemciIcerigi } from "./icerik";
import { icerigiKur } from "./icerik";
import { soruBolumu } from "../dersler/bolumBul";
import { doneminiBul } from "../dersler";

const MODULLER = import.meta.glob<{ default: PratikIstemciIcerigi }>("../../icerik/*/istemci/index.ts", { eager: true });
const PRATIKLER = Object.entries(MODULLER).map(([yol, m]) => [yol.split("/")[3]!, m.default] as const);

it("istemci içeriği olan her klasör kayıtlı bir pratik", () => {
  expect(PRATIKLER.length).toBeGreaterThan(0);
  for (const [id] of PRATIKLER) expect(pratikBul(id), id).toBeTruthy();
});

describe.each(PRATIKLER)("istemci içeriği: %s", (id, icerik) => {
  const { sorular } = SORULAR[id]!;
  const kimlikler = new Map(sorular.map((s) => [s.id, s]));
  const dersler = icerik.dersler ?? [];
  const sinavlar = icerik.sinavlar ?? [];
  const deneyler = icerik.deneyler ?? [];

  it("testlerdeki her soru havuzda var ve dersin ünitesinde ya da öncesinde", () => {
    for (const d of dersler)
      for (const sid of d.test) {
        const s = kimlikler.get(sid);
        expect(s, sid).toBeDefined();
        expect(s!.hafta <= d.hafta, sid).toBe(true);
      }
  });

  it("Kendini dene soruları havuzda, yedek değil ve konu sonu testinde yok", () => {
    for (const d of dersler) {
      const goruldu = new Set(d.test);
      for (const b of d.bolumler)
        for (const sid of b.dene ?? []) {
          const s = kimlikler.get(sid);
          expect(s, sid).toBeDefined();
          expect(s!.yedek ?? false, sid).toBe(false);
          expect(s!.hafta <= d.hafta, sid).toBe(true);
          expect(goruldu.has(sid), `${sid} iki kez`).toBe(false);
          goruldu.add(sid);
        }
    }
  });

  it("üniteler sıralı ve tekil; vize üniteleri finalden önce", () => {
    const no = dersler.map((d) => d.hafta);
    expect(no).toEqual([...new Set(no)].sort((a, b) => a - b));
    const ilkFinal = dersler.findIndex((d) => d.donem === "final");
    if (ilkFinal >= 0) expect(dersler.slice(ilkFinal).every((d) => d.donem === "final")).toBe(true);
  });

  it("kavram-bölüm eşlemesi var olan kavramlara ve bölümlere bakar", () => {
    const meta = pratikBul(id)!;
    for (const [h, harita] of Object.entries(icerik.kavramBolumu ?? {})) {
      const d = dersler.find((x) => x.hafta === Number(h));
      expect(d, `${h}. ünitenin dersi`).toBeDefined();
      for (const [k, i] of Object.entries(harita)) {
        expect(meta.kavramlar[k], k).toBeDefined();
        expect(d!.bolumler[i], `${h}. ünite ${i}. bölüm`).toBeDefined();
      }
    }
  });

  it("anlatımı yazılmış ünitelerde her sorunun kavramı bir ders bölümüne bağlı", () => {
    icerigiKur(icerik);
    const eksik: string[] = [];
    for (const s of sorular) {
      if (!dersler.find((d) => d.hafta === s.hafta)?.bolumler.length) continue;
      const b = soruBolumu({ id: s.id, week: s.hafta, kavram: s.kavram });
      if (!b || b.bolum === null) eksik.push(`${s.id} (${s.hafta}, ${s.kavram})`);
    }
    expect(eksik).toEqual([]);
  });

  // Öğrenci boşluk doldurma cevabını dersten öğrenebilmeli: anlatımı yazılmış
  // ünitelerde ilk kabul edilen yazımlardan biri o üniteye kadarki metinde geçer
  it("boşluk doldurma cevapları ders metninde geçiyor", () => {
    const metin = (h: number) =>
      dersler.filter((d) => d.hafta <= h).flatMap((d) => d.bolumler.map((b) => b.metin)).join("\n").toLocaleLowerCase("tr");
    const eksik: string[] = [];
    for (const s of sorular) {
      if (s.tip !== "fill" || !dersler.find((d) => d.hafta === s.hafta)?.bolumler.length) continue;
      const m = metin(s.hafta);
      for (const secenekler of s.bosluklar) if (!secenekler.some((o) => m.includes(o.toLocaleLowerCase("tr")))) eksik.push(`${s.id}: ${secenekler[0]}`);
    }
    expect(eksik).toEqual([]);
  });

  it("bölümlerin bağlandığı deneyler kayıtlı ve aynı ünitede; deney kimlikleri tekil", () => {
    expect(new Set(deneyler.map((d) => d.id)).size).toBe(deneyler.length);
    for (const d of dersler)
      for (const b of d.bolumler) {
        if (!b.lab) continue;
        const deney = deneyler.find((x) => x.id === b.lab);
        expect(deney, b.lab).toBeDefined();
        expect(deney!.unite).toBe(d.hafta);
      }
  });

  it("çıkmış sınav soruları havuzda ve orijinal; her orijinal soru tam bir sınavda", () => {
    if (!sinavlar.length) return;
    for (const s of sinavlar)
      for (const sid of s.sorular) expect(kimlikler.get(sid)?.kaynak, `${s.id}: ${sid}`).toBe("original");
    const hepsi = sinavlar.flatMap((s) => s.sorular);
    expect(new Set(hepsi).size).toBe(hepsi.length);
    expect(sorular.filter((s) => s.kaynak === "original" && !hepsi.includes(s.id)).map((s) => s.id)).toEqual([]);
  });

  it("sınavın dönemi sorularının ünitesiyle uyuşur", () => {
    icerigiKur(icerik);
    for (const s of sinavlar)
      for (const sid of s.sorular) expect(doneminiBul(kimlikler.get(sid)!.hafta), sid).toBe(s.donem);
  });
});
