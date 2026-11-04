// Orbital doldurma: bir element seçilir, elektronlar orbital kutularına
// tıklanarak yerleştirilir (boş → ↑ → ↑↓ → boş). "Denetle" Aufbau, Pauli ve
// Hund kurallarına göre dizilimi değerlendirir.

import { useMemo, useState } from "react";

export const ELEMENTLER: [string, string][] = [
  ["H", "Hidrojen"], ["He", "Helyum"], ["Li", "Lityum"], ["Be", "Berilyum"], ["B", "Bor"], ["C", "Karbon"],
  ["N", "Azot"], ["O", "Oksijen"], ["F", "Flor"], ["Ne", "Neon"], ["Na", "Sodyum"], ["Mg", "Magnezyum"],
  ["Al", "Alüminyum"], ["Si", "Silisyum"], ["P", "Fosfor"], ["S", "Kükürt"], ["Cl", "Klor"], ["Ar", "Argon"],
  ["K", "Potasyum"], ["Ca", "Kalsiyum"], ["Sc", "Skandiyum"], ["Ti", "Titanyum"], ["V", "Vanadyum"], ["Cr", "Krom"],
  ["Mn", "Mangan"], ["Fe", "Demir"], ["Co", "Kobalt"], ["Ni", "Nikel"], ["Cu", "Bakır"], ["Zn", "Çinko"],
  ["Ga", "Galyum"], ["Ge", "Germanyum"], ["As", "Arsenik"], ["Se", "Selenyum"], ["Br", "Brom"], ["Kr", "Kripton"],
];

// Alt kabuklar Aufbau sırasıyla
export const ALT_KABUKLAR: { ad: string; orbital: number }[] = [
  { ad: "1s", orbital: 1 }, { ad: "2s", orbital: 1 }, { ad: "2p", orbital: 3 }, { ad: "3s", orbital: 1 },
  { ad: "3p", orbital: 3 }, { ad: "4s", orbital: 1 }, { ad: "3d", orbital: 5 }, { ad: "4p", orbital: 3 },
];

// Her kutu: 0 boş, 1 ↑, 2 ↑↓
export type Dizilim = number[][];

export const bos = (): Dizilim => ALT_KABUKLAR.map((a) => Array(a.orbital).fill(0));

// Bir alt kabuğa n elektronu Hund kuralına göre yerleştirir
const hundla = (orbital: number, n: number) => Array.from({ length: orbital }, (_, i) => (n > i ? 1 : 0) + (n > orbital + i ? 1 : 0));

// Alt kabuklardaki elektron sayılarından dizilim
const sayilardan = (sayilar: number[]): Dizilim => ALT_KABUKLAR.map((a, i) => hundla(a.orbital, sayilar[i] ?? 0));

// Temel hâl: Aufbau sırası, krom ve bakır istisnaları
export function temelHal(z: number): Dizilim {
  const sayilar: number[] = [];
  let kalan = z;
  for (const a of ALT_KABUKLAR) {
    const n = Math.min(kalan, a.orbital * 2);
    sayilar.push(n);
    kalan -= n;
  }
  if (z === 24 || z === 29) {
    sayilar[5] = 1; // 4s
    sayilar[6] = z === 24 ? 5 : 10; // 3d
  }
  return sayilardan(sayilar);
}

const ust = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const ustYaz = (n: number) => String(n).split("").map((d) => ust[Number(d)]).join("");
export const yazim = (d: Dizilim) =>
  d.map((k, i) => ({ ad: ALT_KABUKLAR[i]!.ad, n: k.reduce((a, b) => a + b, 0) })).filter((x) => x.n > 0).map((x) => `${x.ad}${ustYaz(x.n)}`).join(" ") || "boş";

export interface Degerlendirme {
  dogru: boolean;
  mesajlar: string[];
}

export function denetle(d: Dizilim, z: number): Degerlendirme {
  const mesajlar: string[] = [];
  const toplam = d.flat().reduce((a, b) => a + b, 0);
  if (toplam !== z) mesajlar.push(`Elektron sayısı ${toplam}, olması gereken ${z}. Nötr atomda elektron sayısı atom numarasına eşittir.`);
  // Pauli: kutu en çok 2 elektron ve zıt spin alır; modelde ↑↓ dışında iki elektron yok
  // Hund: aynı alt kabukta boş kutu varken çift olmamalı
  d.forEach((k, i) => {
    if (k.includes(2) && k.includes(0)) mesajlar.push(`Hund kuralı: ${ALT_KABUKLAR[i]!.ad} alt kabuğunda boş orbital varken elektronlar çiftleşmiş. Önce her orbitale bir elektron girer.`);
  });
  // Aufbau: bir alt kabukta elektron varken daha düşük enerjili bir alt kabuk dolu olmamalı
  const sayilar = d.map((k) => k.reduce((a, b) => a + b, 0));
  const istisna = z === 24 || z === 29;
  sayilar.forEach((n, i) => {
    if (n === 0) return;
    for (let j = 0; j < i; j++) {
      const dolu = ALT_KABUKLAR[j]!.orbital * 2;
      if (sayilar[j]! < dolu && !(istisna && j === 5 && i === 6)) {
        mesajlar.push(`Aufbau ilkesi: ${ALT_KABUKLAR[i]!.ad} alt kabuğuna elektron konmuş ama daha düşük enerjili ${ALT_KABUKLAR[j]!.ad} henüz dolmamış.`);
        return;
      }
    }
  });
  const beklenen = temelHal(z);
  const ayni = yazim(d) === yazim(beklenen);
  if (mesajlar.length === 0 && !ayni && istisna) {
    mesajlar.push(`Aufbau sırasına uyuyor, ama ${z === 24 ? "krom" : "bakır"} bir istisnadır: ${z === 24 ? "yarı dolu" : "tam dolu"} 3d daha kararlı olduğu için 4s'ten bir elektron 3d'ye geçer.`);
  }
  return { dogru: mesajlar.length === 0 && ayni, mesajlar };
}

const OK = ["", "↑", "↑↓"];

export default function Orbital() {
  const [z, setZ] = useState(7);
  const [d, setD] = useState<Dizilim>(bos);
  const [sonuc, setSonuc] = useState<Degerlendirme | null>(null);
  const [sembol, ad] = ELEMENTLER[z - 1]!;
  const toplam = useMemo(() => d.flat().reduce((a, b) => a + b, 0), [d]);
  const tikla = (i: number, j: number) => {
    setD((eski) => eski.map((k, a) => (a === i ? k.map((v, b) => (b === j ? (v + 1) % 3 : v)) : k)));
    setSonuc(null);
  };
  const eksiz = (yeni: number) => { setZ(yeni); setD(bos()); setSonuc(null); };

  return (
    <div className="lab-tezgah">
      <label className="lab-surgu">
        <span>Element: <strong>{sembol}</strong> ({ad}, Z = {z})</span>
        <select value={z} onChange={(e) => eksiz(Number(e.target.value))}>
          {ELEMENTLER.map(([s, a], i) => <option key={s} value={i + 1}>{i + 1}. {s} ({a})</option>)}
        </select>
      </label>
      <p className="hint">Bir kutuya tıklayınca sırasıyla ↑, ↑↓ ve boş olur. Yerleştirilen: {toplam} / {z} elektron.</p>
      <div className="orbital-diyagram" role="group" aria-label="Orbital kutuları">
        {ALT_KABUKLAR.map((a, i) => (
          <div key={a.ad} className="alt-kabuk">
            <span className="alt-kabuk-ad">{a.ad}</span>
            <div className="kutular">
              {d[i]!.map((v, j) => (
                <button key={j} className={`orbital-kutu ${v ? "dolu" : ""}`} onClick={() => tikla(i, j)} aria-label={`${a.ad} ${j + 1}. orbital: ${v === 0 ? "boş" : v === 1 ? "bir elektron" : "iki elektron"}`}>
                  {OK[v]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p>Dizilim: <strong>{yazim(d)}</strong></p>
      <div className="lab-cipler">
        <button className="primary" onClick={() => setSonuc(denetle(d, z))}>Denetle</button>
        <button onClick={() => { setD(temelHal(z)); setSonuc(null); }}>Doğru dizilimi göster</button>
        <button onClick={() => { setD(bos()); setSonuc(null); }}>Temizle</button>
      </div>
      {sonuc && (
        <div className={`lab-sonuc ${sonuc.dogru ? "dogru" : "yanlis"}`} aria-live="polite">
          {sonuc.dogru ? (
            <p><strong>Doğru.</strong> {sembol} için temel hâl dizilimi {yazim(d)}. Eşleşmemiş elektron sayısı: {d.flat().filter((v) => v === 1).length}.</p>
          ) : (
            <ul>{sonuc.mesajlar.length ? sonuc.mesajlar.map((m) => <li key={m}>{m}</li>) : <li>Kurallara uyuyor ama temel hâl dizilimi bu değil.</li>}</ul>
          )}
        </div>
      )}
    </div>
  );
}
