// 3. ünitenin etkileşimli şekilleri: modüler saat, genişletilmiş Öklid tablosu ve
// kare al ve çarp adımları. Hepsi oyuncak (küçük sayılar, BigInt).
import { useState } from "react";
import { Rozet } from "../../../../src/kripto/Rozet";
import { genisOklid, mod } from "../../../../src/kripto/oyuncak/sayi";
import { Secim } from "./temeller";

const sayiAl = (v: string, alt: number, ust: number, varsayilan: number) => {
  const n = Math.trunc(Number(v));
  return Number.isFinite(n) ? Math.max(alt, Math.min(ust, n)) : varsayilan;
};

// ---------------- G-S3-01: modüler saat ----------------

export function ModulerSaat() {
  const [m, setM] = useState(12);
  const [a, setA] = useState(9);
  const [b, setB] = useState(5);
  const [islem, setIslem] = useState<"+" | "×" | "−">("+");
  const ham = islem === "+" ? a + b : islem === "×" ? a * b : a - b;
  const sonuc = ((ham % m) + m) % m;
  const r = 110;
  const nokta = (i: number, yaricap = r) => {
    const aci = (2 * Math.PI * i) / m - Math.PI / 2;
    return [150 + yaricap * Math.cos(aci), 150 + yaricap * Math.sin(aci)] as const;
  };
  const am = ((a % m) + m) % m;
  return (
    <div className="sf">
      <div className="sf-satir">
        <label>Mod m <input type="number" min={2} max={36} value={m} onChange={(e) => setM(sayiAl(e.target.value, 2, 36, 12))} /></label>
        <label>a <input type="number" value={a} onChange={(e) => setA(sayiAl(e.target.value, -999, 999, 0))} /></label>
        <Secim ad="İşlem" secenekler={[["+", "+"], ["−", "−"], ["×", "×"]]} deger={islem} degis={setIslem} />
        <label>b <input type="number" value={b} onChange={(e) => setB(sayiAl(e.target.value, -999, 999, 0))} /></label>
      </div>
      <svg viewBox="0 0 300 300" role="img" aria-label={`Mod ${m} saat kadranı; sonuç ${sonuc}`} style={{ maxWidth: 300, alignSelf: "center", width: "100%" }}>
        <circle cx={150} cy={150} r={r} fill="none" stroke="currentColor" strokeOpacity={0.3} strokeWidth={2} />
        {Array.from({ length: m }, (_, i) => {
          const [x, y] = nokta(i);
          const [tx, ty] = nokta(i, r + 20);
          const vurgu = i === sonuc ? "var(--warning)" : i === am ? "var(--link)" : "currentColor";
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={i === sonuc || i === am ? 7 : 4} fill={vurgu} />
              <text x={tx} y={ty + 4} textAnchor="middle" fontSize={m > 24 ? 9 : 12} fill="currentColor">{i}</text>
            </g>
          );
        })}
        <line x1={150} y1={150} x2={nokta(sonuc, r - 14)[0]} y2={nokta(sonuc, r - 14)[1]} stroke="var(--warning)" strokeWidth={4} strokeLinecap="round" />
        <circle cx={150} cy={150} r={5} fill="currentColor" />
      </svg>
      <p className="sf-sonuc">
        {a} {islem} {b} = {ham} ve {ham} mod {m} = <strong>{sonuc}</strong>
        {islem === "+" && ` (mavi nokta a = ${am}, ${b} adım ilerleyince turuncuya varılır)`}
      </p>
    </div>
  );
}

// ---------------- G-S3-02: genişletilmiş Öklid ----------------

export function OklidTablosu() {
  const [a, setA] = useState(17);
  const [m, setM] = useState(3120);
  const s = genisOklid(BigInt(m), BigInt(a));
  const ters = s.ebob === 1n ? mod(s.y, BigInt(m)) : null;
  return (
    <div className="sf">
      <div className="sf-ust">
        <div className="sf-satir">
          <label>a <input type="number" min={1} value={a} onChange={(e) => setA(sayiAl(e.target.value, 1, 1e9, 1))} /></label>
          <label>mod m <input type="number" min={2} value={m} onChange={(e) => setM(sayiAl(e.target.value, 2, 1e9, 2))} /></label>
        </div>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-tablo-sar">
        <table className="sf-tablo">
          <thead><tr><th>Adım</th><th>bölüm q</th><th>kalan r</th><th>s</th><th>t</th><th>kontrol: s·{m} + t·{a}</th></tr></thead>
          <tbody>
            {s.adimlar.map((x, i) => (
              <tr key={i} className={x.r === s.ebob && i > 0 ? "sf-vurgu" : undefined}>
                <td>{i}</td>
                <td className="sf-sayi">{i > 1 ? String(x.q) : ""}</td>
                <td className="sf-sayi">{String(x.r)}</td>
                <td className="sf-sayi">{String(x.s)}</td>
                <td className="sf-sayi">{String(x.t)}</td>
                <td className="sf-sayi">{String(x.s * BigInt(m) + x.t * BigInt(a))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={`sf-sonuc ${ters === null ? "sf-kotu" : "sf-iyi"}`}>
        EBOB({m}, {a}) = {String(s.ebob)}.{" "}
        {ters === null
          ? `EBOB 1 olmadığı için ${a} sayısının mod ${m} tersi yok.`
          : `Vurgulu satırda ${String(s.x)}·${m} + ${String(s.y)}·${a} = 1, yani ${a}⁻¹ ≡ ${String(s.y)} ≡ ${String(ters)} (mod ${m}). Kontrol: ${a}·${String(ters)} mod ${m} = ${String(mod(BigInt(a) * ters, BigInt(m)))}.`}
      </p>
      <p className="sf-not">Her satırda r(i+1) = r(i−1) − q·r(i); s ve t sütunları aynı işlemle ilerler ve son sütun hep kalanı verir.</p>
    </div>
  );
}

// ---------------- G-S3-03: kare al ve çarp ----------------

export function KareCarp() {
  const [taban, setTaban] = useState(4);
  const [us, setUs] = useState(13);
  const [m, setM] = useState(497);
  const bitler = us.toString(2);
  const adimlar: { bit: string; kare: bigint; sonuc: bigint }[] = [];
  let x = 1n;
  const t = mod(BigInt(taban), BigInt(m));
  for (const bit of bitler) {
    const kare = (x * x) % BigInt(m);
    x = bit === "1" ? (kare * t) % BigInt(m) : kare;
    adimlar.push({ bit, kare, sonuc: x });
  }
  const carpma = adimlar.length + [...bitler].filter((b) => b === "1").length;
  return (
    <div className="sf">
      <div className="sf-ust">
        <div className="sf-satir">
          <label>taban <input type="number" value={taban} onChange={(e) => setTaban(sayiAl(e.target.value, 0, 1e6, 0))} /></label>
          <label>üs <input type="number" min={1} value={us} onChange={(e) => setUs(sayiAl(e.target.value, 1, 2 ** 30, 1))} /></label>
          <label>mod <input type="number" min={2} value={m} onChange={(e) => setM(sayiAl(e.target.value, 2, 1e9, 2))} /></label>
        </div>
        <Rozet tur="oyuncak" />
      </div>
      <p className="sf-not">Üs ikili: <code>{bitler}</code>. Bitler soldan sağa okunur: her bitte sonucun karesi alınır, bit 1 ise taban ile de çarpılır.</p>
      <div className="sf-tablo-sar">
        <table className="sf-tablo">
          <thead><tr><th>Bit</th><th>Kare al</th><th>Bit 1 ise × {taban}</th><th>Sonuç (mod {m})</th></tr></thead>
          <tbody>
            {adimlar.map((a, i) => (
              <tr key={i}>
                <td className="sf-mono">{a.bit}</td>
                <td className="sf-sayi">{String(a.kare)}</td>
                <td className="sf-sayi">{a.bit === "1" ? `× ${String(t)}` : "-"}</td>
                <td className="sf-sayi">{String(a.sonuc)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="sf-sonuc">
        {taban}<sup>{us}</sup> mod {m} = <strong>{String(x)}</strong> · {carpma} çarpma yapıldı; üssü tek tek açmak {us - 1} çarpma isterdi.
      </p>
    </div>
  );
}
