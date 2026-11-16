// OYUNCAK · gerçek kullanım için değil. Üç rotorlu Enigma (Wehrmacht modeli):
// I, II, III rotorları, B yansıtıcısı, halka ayarları ve fiş tablosu. Rotorların
// kablolaması tarihsel kayıtlardaki gibidir; "çift adım" davranışı dahildir.
// Her tuş için akımın yolu da döner (ders şekli bunu çizer).

export const ENIGMA_ALFABE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const ROTORLAR = {
  I: { kablo: "EKMFLGDQVZNTOWYHXUSPAIBRCJ", centik: "Q" },
  II: { kablo: "AJDKSIRUXBLHWTMCQGZNPYFVOE", centik: "E" },
  III: { kablo: "BDFHJLCPRTXVZNYEIWGAKMUSQO", centik: "V" },
} as const;
export type RotorAdi = keyof typeof ROTORLAR;
export const YANSITICI_B = "YRUHQSLDPXNGOKMIEBFZCWVJAT";

export interface EnigmaAyari {
  // Soldan sağa
  rotorlar: [RotorAdi, RotorAdi, RotorAdi];
  // Başlangıç konumları (pencerede görünen harfler), soldan sağa
  konum: [number, number, number];
  // Halka ayarları (0 = A)
  halka: [number, number, number];
  // Fiş tablosu: "AB CD" gibi çiftler
  fis: string;
}

const kod = (c: string) => ENIGMA_ALFABE.indexOf(c);
const harf = (i: number) => ENIGMA_ALFABE[((i % 26) + 26) % 26]!;

export function fisTablosu(fis: string): number[] {
  const t = Array.from({ length: 26 }, (_, i) => i);
  for (const cift of fis.toUpperCase().split(/\s+/).filter(Boolean)) {
    if (cift.length !== 2) continue;
    const [a, b] = [kod(cift[0]!), kod(cift[1]!)];
    if (a < 0 || b < 0 || a === b || t[a] !== a || t[b] !== b) continue;
    t[a] = b;
    t[b] = a;
  }
  return t;
}

// Bir tuşa basılmadan önce rotorlar döner (sağdaki her basışta; çentikte soldakini de)
export function adimla(ayar: EnigmaAyari): [number, number, number] {
  const [s, o, sg] = ayar.konum;
  const [rs, ro, rsg] = ayar.rotorlar;
  const ortaCentikte = harf(o) === ROTORLAR[ro].centik;
  const sagCentikte = harf(sg) === ROTORLAR[rsg].centik;
  void rs;
  return [ortaCentikte ? (s + 1) % 26 : s, ortaCentikte || sagCentikte ? (o + 1) % 26 : o, (sg + 1) % 26];
}

export interface TusSonucu {
  cikis: string;
  // Akımın uğradığı harfler: fiş, sağ, orta, sol rotor, yansıtıcı, sol, orta, sağ, fiş
  yol: string[];
  konum: [number, number, number];
}

export function tusaBas(ayar: EnigmaAyari, giris: string): TusSonucu {
  const konum = adimla(ayar);
  const fis = fisTablosu(ayar.fis);
  const kablolar = ayar.rotorlar.map((r) => [...ROTORLAR[r].kablo].map(kod));
  const ileri = (r: number, x: number) => {
    const k = konum[r]! - ayar.halka[r]!;
    return (((kablolar[r]![(((x + k) % 26) + 26) % 26]! - k) % 26) + 26) % 26;
  };
  const geri = (r: number, x: number) => {
    const k = konum[r]! - ayar.halka[r]!;
    return (((kablolar[r]!.indexOf((((x + k) % 26) + 26) % 26) - k) % 26) + 26) % 26;
  };
  const yol: number[] = [];
  let x = fis[kod(giris)]!;
  yol.push(x);
  for (const r of [2, 1, 0]) yol.push((x = ileri(r, x)));
  yol.push((x = kod(YANSITICI_B[x]!)));
  for (const r of [0, 1, 2]) yol.push((x = geri(r, x)));
  x = fis[x]!;
  yol.push(x);
  return { cikis: harf(x), yol: yol.map(harf), konum };
}

// Bütün metni şifreler (alfabede olmayan karakterler atlanır)
export function enigma(ayar: EnigmaAyari, metin: string): { metin: string; konum: [number, number, number] } {
  let a = { ...ayar };
  let cikis = "";
  for (const c of metin.toUpperCase()) {
    if (kod(c) < 0) continue;
    const s = tusaBas(a, c);
    cikis += s.cikis;
    a = { ...a, konum: s.konum };
  }
  return { metin: cikis, konum: a.konum };
}
