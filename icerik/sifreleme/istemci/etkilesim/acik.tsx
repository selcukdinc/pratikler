// 10-12. ünitelerin etkileşimli şekilleri: renk karıştırarak Diffie-Hellman, sayılarla DH,
// oyuncak RSA ve çarpanlara ayırma, gerçek sayılarda ve F_p'de eliptik eğri, imza tezgahı,
// TLS 1.3 el sıkışması, sertifika zinciri ve ortadaki adam sahnesi. Küçük sayılı hesaplar
// oyuncak uygulamayla (src/kripto/oyuncak/acik.ts), imza, ECDH, HKDF ve AES-GCM Web Crypto ile.
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { Rozet } from "../../../../src/kripto/Rozet";
import { hex, metindenBayt } from "../../../../src/kripto/bayt";
import { ayrikLog, egriNoktalari, mertebe, rsaAnahtari, rsaCoz, rsaSifrele, skalerCarp, topla, type Nokta } from "../../../../src/kripto/oyuncak/acik";
import { ebob, mod, modTers, modUs } from "../../../../src/kripto/oyuncak/sayi";
import {
  acikAnahtarBayt,
  aesAnahtariAl,
  aesGcmSifrele,
  degisimAnahtari,
  dogrula,
  hkdf,
  imzaAnahtari,
  imzala,
  ortakSir,
  rastgeleBayt,
  sha256,
  type DegisimTuru,
  type ImzaTuru,
} from "../../../../src/kripto/webcrypto";
import { Secim } from "./temeller";

const kisa = (s: string, n = 16) => (s.length > n * 2 ? `${s.slice(0, n)}…${s.slice(-6)}` : s);
const sayi = (x: number) => x.toLocaleString("tr-TR");

// ---------------- G-S10-01: renk karıştırarak Diffie-Hellman ----------------

const RENKLER: [string, string][] = [
  ["#d0453b", "Kırmızı"],
  ["#2f6fd6", "Mavi"],
  ["#2e9e5b", "Yeşil"],
  ["#8a4fc9", "Mor"],
  ["#e07b22", "Turuncu"],
  ["#1d1d1d", "Siyah"],
];
const ORTAK_RENK = "#f2c94c";
const rgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
// Karışım malzemelerin ortalamasıdır; sıra önemsiz olduğu için iki taraf aynı rengi bulur
const karistir = (...renkler: string[]) => {
  const t = renkler.map(rgb).reduce((a, b) => a.map((x, i) => x + b[i]!));
  return "#" + t.map((x) => Math.round(x / renkler.length).toString(16).padStart(2, "0")).join("");
};

function Boya({ renk, yazi }: { renk: string; yazi: string }) {
  return (
    <div className="sf-boya">
      <span className="sf-boya-kutu" style={{ background: renk }} role="img" aria-label={`${yazi}: ${renk}`} />
      <span>{yazi}</span>
    </div>
  );
}

function RenkSec({ ad, deger, degis }: { ad: string; deger: string; degis: (r: string) => void }) {
  return (
    <div className="sf-secim" role="group" aria-label={ad}>
      {RENKLER.map(([r, y]) => (
        <button key={r} type="button" className="sf-renk-dugme" aria-pressed={deger === r} title={y} aria-label={y} style={{ background: r }} onClick={() => degis(r)} />
      ))}
    </div>
  );
}

export function DhRenk() {
  const [a, setA] = useState(RENKLER[0]![0]);
  const [b, setB] = useState(RENKLER[1]![0]);
  const [mitm, setMitm] = useState(false);
  const m = RENKLER[3]![0];
  const A = karistir(ORTAK_RENK, a);
  const B = karistir(ORTAK_RENK, b);
  const M = karistir(ORTAK_RENK, m);
  // Ayşe'ye gelen karışım: saldırgan varsa onunki
  const ayseninAldigi = mitm ? M : B;
  const alininAldigi = mitm ? M : A;
  const sirAyse = karistir(ORTAK_RENK, a, mitm ? m : b);
  const sirAli = karistir(ORTAK_RENK, b, mitm ? m : a);
  const dinleyici = karistir(ORTAK_RENK, a, ORTAK_RENK, b);
  return (
    <div className="sf">
      <div className="sf-ust">
        <label>
          <input type="checkbox" checked={mitm} onChange={(e) => setMitm(e.target.checked)} /> Hatta ortadaki adam var
        </label>
      </div>
      <div className="sf-izgara">
        <div className="sf-kutu">
          <h4>Ayşe</h4>
          <span className="sf-not">Gizli rengi</span>
          <RenkSec ad="Ayşe'nin gizli rengi" deger={a} degis={setA} />
          <Boya renk={A} yazi="Ortak + gizli: gönderir" />
          <Boya renk={ayseninAldigi} yazi={mitm ? "Gelen karışım (aslında saldırganın)" : "Ali'den gelen karışım"} />
          <Boya renk={sirAyse} yazi="Kendi gizlisini ekler: ortak sır" />
        </div>
        <div className="sf-kutu">
          <h4>{mitm ? "Saldırgan" : "Herkese açık hat"}</h4>
          <Boya renk={ORTAK_RENK} yazi="Ortak başlangıç rengi" />
          <Boya renk={A} yazi="Ayşe → Ali" />
          <Boya renk={B} yazi="Ali → Ayşe" />
          {mitm ? (
            <>
              <Boya renk={M} yazi="Saldırganın iki tarafa gönderdiği" />
              <p className="sf-not">Saldırgan kendi gizli rengiyle iki ayrı sır kurar, mesajları çözüp aktarır.</p>
            </>
          ) : (
            <>
              <Boya renk={dinleyici} yazi="Dinleyici iki karışımı birleştirirse" />
              <p className="sf-not">Bu, sırrın rengi değil: içinde ortak renk iki kez var. Karışımı ayrıştırmak zor olduğu için gizli renkleri çıkaramaz.</p>
            </>
          )}
        </div>
        <div className="sf-kutu">
          <h4>Ali</h4>
          <span className="sf-not">Gizli rengi</span>
          <RenkSec ad="Ali'nin gizli rengi" deger={b} degis={setB} />
          <Boya renk={B} yazi="Ortak + gizli: gönderir" />
          <Boya renk={alininAldigi} yazi={mitm ? "Gelen karışım (aslında saldırganın)" : "Ayşe'den gelen karışım"} />
          <Boya renk={sirAli} yazi="Kendi gizlisini ekler: ortak sır" />
        </div>
      </div>
      <p className={`sf-sonuc ${sirAyse === sirAli ? "sf-iyi" : "sf-kotu"}`}>
        {sirAyse === sirAli
          ? "Ayşe ile Ali aynı renge ulaştı; hat yalnız karışımları gördü."
          : "Ayşe ile Ali'nin \"ortak\" renkleri farklı. Her biri saldırganla bir sır paylaşıyor ve bunu fark etmiyor. Renkleri başka bir kanaldan karşılaştırsalar saldırı ortaya çıkar."}
      </p>
    </div>
  );
}

// ---------------- G-S10-02: sayılarla Diffie-Hellman ----------------

const DH_ASALLAR = [23n, 467n, 7919n, 104729n, 1000003n];

// p - 1'in asal çarpanlarına göre ilk ilkel kök
function ilkelKok(p: bigint): bigint {
  const asallar: bigint[] = [];
  let n = p - 1n;
  for (let i = 2n; i * i <= n; i++)
    if (n % i === 0n) {
      asallar.push(i);
      while (n % i === 0n) n /= i;
    }
  if (n > 1n) asallar.push(n);
  for (let g = 2n; ; g++) if (asallar.every((q) => modUs(g, (p - 1n) / q, p) !== 1n)) return g;
}

export function DhSayilar() {
  const [p, setP] = useState(23n);
  const [a, setA] = useState(6n);
  const [b, setB] = useState(15n);
  const [kirma, setKirma] = useState<{ x: bigint; deneme: number; ms: number } | null>(null);
  const g = useMemo(() => (p === 23n ? 5n : ilkelKok(p)), [p]);
  const aa = mod(a, p - 1n) || 1n;
  const bb = mod(b, p - 1n) || 1n;
  const d = useMemo(() => {
    const A = modUs(g, aa, p);
    const B = modUs(g, bb, p);
    return { A, B, sirAyse: modUs(B, aa, p), sirAli: modUs(A, bb, p) };
  }, [g, aa, bb, p]);
  const asalSec = (x: bigint) => {
    setP(x);
    setKirma(null);
    if (x !== 23n) {
      const r = (n: bigint) => 2n + BigInt(Math.floor(Math.random() * Number(n - 3n)));
      setA(r(x));
      setB(r(x));
    } else {
      setA(6n);
      setB(15n);
    }
  };
  const kir = () => {
    const t = performance.now();
    const r = ayrikLog(g, d.A, p)!;
    setKirma({ ...r, ms: performance.now() - t });
  };
  const bitler = p.toString(2).length;
  return (
    <div className="sf">
      <div className="sf-ust">
        <Secim ad="Asal p" secenekler={DH_ASALLAR.map((x) => [String(x), `p = ${sayi(Number(x))}`] as [string, string])} deger={String(p)} degis={(v) => asalSec(BigInt(v))} />
        <Rozet tur="oyuncak" />
      </div>
      <p className="sf-not">
        Herkese açık: p = {sayi(Number(p))} ({bitler} bit), g = {String(g)}. Gerçek sistemlerde p en az 2048 bittir ya da eliptik eğri kullanılır.
      </p>
      <div className="sf-izgara">
        <div className="sf-kutu">
          <h4>Ayşe</h4>
          <label>
            Gizli a <input type="number" min={1} value={String(a)} onChange={(e) => { setA(BigInt(e.target.value || "1")); setKirma(null); }} />
          </label>
          <span className="sf-mono">A = g^a mod p = {String(d.A)}</span>
          <span className="sf-mono">B^a mod p = {String(d.sirAyse)}</span>
        </div>
        <div className="sf-kutu">
          <h4>Ali</h4>
          <label>
            Gizli b <input type="number" min={1} value={String(b)} onChange={(e) => { setB(BigInt(e.target.value || "1")); setKirma(null); }} />
          </label>
          <span className="sf-mono">B = g^b mod p = {String(d.B)}</span>
          <span className="sf-mono">A^b mod p = {String(d.sirAli)}</span>
        </div>
        <div className="sf-kutu">
          <h4>Dinleyici</h4>
          <span className="sf-mono">
            Görür: p, g, A = {String(d.A)}, B = {String(d.B)}
          </span>
          <button type="button" className="cip" onClick={kir}>
            a'yı deneyerek bul
          </button>
          {kirma && (
            <span>
              a = {String(kirma.x)} bulundu: {sayi(kirma.deneme)} deneme, {kirma.ms.toFixed(1).replace(".", ",")} ms. Sır = {String(modUs(d.B, kirma.x, p))}
            </span>
          )}
        </div>
      </div>
      <p className={`sf-sonuc ${d.sirAyse === d.sirAli ? "sf-iyi" : "sf-kotu"}`}>
        İki taraf da {String(d.sirAyse)} sayısına ulaştı: (g^b)^a = (g^a)^b.
        {kirma && ` Dinleyicinin denemesi p ile doğru orantılı büyür; 2048 bitlik p için en iyi bilinen algoritmalar bile yaklaşık 112 bitlik iş ister.`}
      </p>
    </div>
  );
}

// ---------------- G-S10-03: oyuncak RSA ve çarpanlara ayırma ----------------

// Number ile deneme bölmesi: n en çok 48 bit (2^53 altında güvenli)
function asalMi(n: number) {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
  return true;
}
function asalUret(bit: number) {
  for (;;) {
    const n = Math.floor(2 ** (bit - 1) + Math.random() * 2 ** (bit - 1)) | 1;
    if (asalMi(n)) return n;
  }
}
function hizliCarpan(n: number): { p: number; bolme: number } {
  if (n % 2 === 0) return { p: 2, bolme: 1 };
  let bolme = 1;
  for (let i = 3; i * i <= n; i += 2) {
    bolme++;
    if (n % i === 0) return { p: i, bolme };
  }
  return { p: n, bolme };
}
// 10^x yıl gibi okunur bir süre
function uzunSure(log10Saniye: number) {
  const yil = log10Saniye - Math.log10(3.15e7);
  if (yil < 0) return log10Saniye < 0 ? "bir saniyeden az" : `${sayi(Math.round(10 ** log10Saniye))} saniye`;
  if (yil < 6) return `${sayi(Math.round(10 ** yil))} yıl`;
  return `yaklaşık 10^${Math.round(yil)} yıl`;
}

export function RsaTezgahi() {
  const [bit, setBit] = useState(32);
  const [tohum, setTohum] = useState(0);
  const [m, setM] = useState("42");
  const [kirma, setKirma] = useState<{ p: number; bolme: number; ms: number } | null>(null);
  const anahtar = useMemo(() => {
    void tohum;
    for (;;) {
      const p = asalUret(bit / 2);
      let q = asalUret(bit / 2);
      while (q === p) q = asalUret(bit / 2);
      const phi = BigInt(p - 1) * BigInt(q - 1);
      const e = [65537n, 17n, 5n, 3n].find((x) => x < phi && ebob(x, phi) === 1n);
      if (e) return rsaAnahtari(BigInt(p), BigInt(q), e);
    }
  }, [bit, tohum]);
  useEffect(() => setKirma(null), [anahtar]);
  const mesaj = (() => {
    try {
      const x = BigInt(m || "0");
      return x >= 0n && x < anahtar.n ? x : null;
    } catch {
      return null;
    }
  })();
  const c = mesaj === null ? null : rsaSifrele(mesaj, anahtar);
  const kir = () => {
    const t = performance.now();
    const r = hizliCarpan(Number(anahtar.n));
    setKirma({ ...r, ms: Math.max(performance.now() - t, 0.01) });
  };
  const bulunan = kirma && kirma.p !== Number(anahtar.n) ? rsaAnahtari(BigInt(kirma.p), anahtar.n / BigInt(kirma.p), anahtar.e) : null;
  // Deneme bölmesi √n ile büyür: her 2 bit iki kat süre
  const tahmin = (hedef: number) => (kirma ? uzunSure(Math.log10(kirma.ms / 1000) + ((hedef - bit) / 2) * Math.log10(2)) : "");
  return (
    <div className="sf">
      <div className="sf-ust">
        <Secim ad="n'in boyu" secenekler={[16, 24, 32, 40, 48].map((x) => [String(x), `${x} bit`] as [string, string])} deger={String(bit)} degis={(v) => setBit(Number(v))} />
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-izgara">
        <div className="sf-kutu">
          <h4>Anahtar üretimi</h4>
          <span className="sf-mono">p = {String(anahtar.p)}, q = {String(anahtar.q)}</span>
          <span className="sf-mono">n = p·q = {String(anahtar.n)}</span>
          <span className="sf-mono">φ(n) = {String(anahtar.phi)}</span>
          <span className="sf-mono">e = {String(anahtar.e)}, d = e⁻¹ mod φ(n) = {String(anahtar.d)}</span>
          <button type="button" className="cip" onClick={() => setTohum((x) => x + 1)}>
            Yeni asallar
          </button>
        </div>
        <div className="sf-kutu">
          <h4>Şifrele ve çöz</h4>
          <label>
            m <input type="number" min={0} value={m} onChange={(e) => setM(e.target.value)} />
          </label>
          {mesaj === null ? (
            <span className="sf-not">m, 0 ile n − 1 arasında bir tam sayı olmalı.</span>
          ) : (
            <>
              <span className="sf-mono">c = m^e mod n = {String(c)}</span>
              <span className="sf-mono">c^d mod n = {String(rsaCoz(c!, anahtar))}</span>
              <span className="sf-not">Aynı m her seferinde aynı c'yi verir: ders kitabı RSA deterministiktir. Gerçek RSA, OAEP dolgusuyla rastgelelik ekler.</span>
            </>
          )}
        </div>
        <div className="sf-kutu">
          <h4>Saldırgan: yalnız n ve e'yi biliyor</h4>
          <button type="button" className="cip" onClick={kir}>
            n'i çarpanlarına ayır
          </button>
          {kirma && (
            <>
              <span>
                {sayi(kirma.bolme)} bölmede, {kirma.ms < 1 ? "1 ms'den kısa" : `${sayi(Math.round(kirma.ms))} ms`} sürede p = {kirma.p} bulundu.
              </span>
              {bulunan && c !== null && <span className="sf-mono">d = {String(bulunan.d)}, çözülen m = {String(rsaCoz(c, bulunan))}</span>}
            </>
          )}
        </div>
      </div>
      {kirma && (
        <div className="sf-tablo-sar">
          <table className="sf-tablo">
            <thead>
              <tr>
                <th>n'in boyu</th>
                <th>Aynı yöntemle (deneme bölmesi) tahmini süre</th>
              </tr>
            </thead>
            <tbody>
              {[64, 128, 512, 2048].map((h) => (
                <tr key={h}>
                  <td>{h} bit</td>
                  <td>{tahmin(h)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="sf-not">Gerçek saldırılar deneme bölmesinden çok daha hızlı olan sayı cismi kalburunu kullanır. Yine de 2020'de 829 bitlik RSA-250 yaklaşık 2700 çekirdek-yıl sürdü; 2048 bit bugün erişilemez.</p>
    </div>
  );
}

// ---------------- G-S11-01: gerçek sayılarda eliptik eğri ----------------

type RNokta = { x: number; y: number } | null;
const EN = 340;
const BOY = 300;
const XA = [-3, 4] as const;
const YA = [-7, 7] as const;
const sx = (x: number) => ((x - XA[0]) / (XA[1] - XA[0])) * EN;
const sy = (y: number) => BOY - ((y - YA[0]) / (YA[1] - YA[0])) * BOY;

function reelTopla(P: RNokta, Q: RNokta, a: number): RNokta {
  if (!P) return Q;
  if (!Q) return P;
  const ayni = Math.abs(P.x - Q.x) < 1e-9;
  if (ayni && Math.abs(P.y + Q.y) < 1e-9) return null;
  const l = ayni ? (3 * P.x * P.x + a) / (2 * P.y) : (Q.y - P.y) / (Q.x - P.x);
  const x = l * l - P.x - Q.x;
  return { x, y: l * (P.x - x) - P.y };
}

export function EgriReel() {
  const [a, setA] = useState(-2);
  const [b, setB] = useState(2);
  // Kaydırıcılar x değerini tutar; eğrinin tanımlı olmadığı yerde en yakın geçerli x'e oturur
  const [px, setPx] = useState(-1.2);
  const [qx, setQx] = useState(0.6);
  const [pAlt, setPAlt] = useState(false);
  const [qAlt, setQAlt] = useState(false);
  const f = (x: number) => x ** 3 + a * x + b;
  const tekil = Math.abs(4 * a ** 3 + 27 * b * b) < 1e-9;
  // Eğrinin tanımlı olduğu x değerleri (0,02 adım)
  const xler = useMemo(() => {
    const l: number[] = [];
    for (let x = XA[0]; x <= XA[1] + 1e-9; x += 0.02) if (x ** 3 + a * x + b >= 0 && Math.sqrt(x ** 3 + a * x + b) <= YA[1]) l.push(Math.round(x * 100) / 100);
    return l;
  }, [a, b]);
  const noktaAl = (hedef: number, alt: boolean): RNokta => {
    if (!xler.length) return null;
    const x = xler.reduce((en, v) => (Math.abs(v - hedef) < Math.abs(en - hedef) ? v : en));
    const y = Math.sqrt(Math.max(0, f(x)));
    return { x, y: alt ? -y : y };
  };
  const P = noktaAl(px, pAlt);
  const Q = noktaAl(qx, qAlt);
  const S = P && Q ? reelTopla(P, Q, a) : null;
  const yollar = useMemo(() => {
    const parcalar: string[] = [];
    for (const isaret of [1, -1]) {
      let d = "";
      for (let x = XA[0]; x <= XA[1]; x += 0.005) {
        const v = x ** 3 + a * x + b;
        if (v < 0 || Math.sqrt(v) > YA[1] + 1) {
          if (d) parcalar.push(d);
          d = "";
          continue;
        }
        d += `${d ? "L" : "M"}${sx(x).toFixed(1)},${sy(isaret * Math.sqrt(v)).toFixed(1)}`;
      }
      if (d) parcalar.push(d);
    }
    return parcalar;
  }, [a, b]);
  const ayni = P && Q && Math.abs(P.x - Q.x) < 1e-9 && P.y === Q.y;
  let dogru: [number, number, number, number] | null = null;
  if (P && Q) {
    if (Math.abs(P.x - Q.x) < 1e-9 && !ayni) dogru = [sx(P.x), 0, sx(P.x), BOY];
    else {
      const l = ayni ? (3 * P.x * P.x + a) / (2 * P.y) : (Q.y - P.y) / (Q.x - P.x);
      dogru = [0, sy(P.y + l * (XA[0] - P.x)), EN, sy(P.y + l * (XA[1] - P.x))];
    }
  }
  const nt = (n: RNokta) => (n ? `(${n.x.toFixed(2).replace(".", ",")}; ${n.y.toFixed(2).replace(".", ",")})` : "O");
  return (
    <div className="sf">
      <div className="sf-ust">
        <span className="sf-mono">
          y² = x³ {a < 0 ? "−" : "+"} {Math.abs(a)}x {b < 0 ? "−" : "+"} {Math.abs(b)}
        </span>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-satir">
        <label>
          a <input type="range" min={-4} max={2} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} /> {String(a).replace(".", ",")}
        </label>
        <label>
          b <input type="range" min={-2} max={4} step={0.5} value={b} onChange={(e) => setB(Number(e.target.value))} /> {String(b).replace(".", ",")}
        </label>
      </div>
      <div className="sf-satir">
        <label>
          P <input type="range" min={XA[0]} max={XA[1]} step={0.02} value={px} onChange={(e) => setPx(Number(e.target.value))} />
        </label>
        <label>
          <input type="checkbox" checked={pAlt} onChange={(e) => setPAlt(e.target.checked)} /> alt kol
        </label>
        <label>
          Q <input type="range" min={XA[0]} max={XA[1]} step={0.02} value={qx} onChange={(e) => setQx(Number(e.target.value))} />
        </label>
        <label>
          <input type="checkbox" checked={qAlt} onChange={(e) => setQAlt(e.target.checked)} /> alt kol
        </label>
        <button type="button" className="cip" onClick={() => { setQx(px); setQAlt(pAlt); }}>
          Q = P (ikiye katla)
        </button>
      </div>
      <svg className="sf-egri" viewBox={`0 0 ${EN} ${BOY}`} role="img" aria-label={`P = ${nt(P)}, Q = ${nt(Q)}, P + Q = ${nt(S)}`}>
        <line x1={0} y1={sy(0)} x2={EN} y2={sy(0)} className="sf-eksen-cizgi" />
        <line x1={sx(0)} y1={0} x2={sx(0)} y2={BOY} className="sf-eksen-cizgi" />
        {yollar.map((d, i) => (
          <path key={i} d={d} className="sf-egri-yol" />
        ))}
        {dogru && <line x1={dogru[0]} y1={dogru[1]} x2={dogru[2]} y2={dogru[3]} className="sf-egri-dogru" />}
        {S && Math.abs(S.y) <= YA[1] && (
          <>
            <line x1={sx(S.x)} y1={sy(-S.y)} x2={sx(S.x)} y2={sy(S.y)} className="sf-egri-yansima" />
            <circle cx={sx(S.x)} cy={sy(-S.y)} r={4} className="sf-egri-ucuncu" />
            <circle cx={sx(S.x)} cy={sy(S.y)} r={5.5} className="sf-egri-toplam" />
            <text x={sx(S.x) + 8} y={sy(S.y) - 6} className="sf-egri-yazi">P+Q</text>
          </>
        )}
        {P && <circle cx={sx(P.x)} cy={sy(P.y)} r={5} className="sf-egri-p" />}
        {P && <text x={sx(P.x) + 8} y={sy(P.y) + 14} className="sf-egri-yazi">P</text>}
        {Q && !ayni && <circle cx={sx(Q.x)} cy={sy(Q.y)} r={5} className="sf-egri-q" />}
        {Q && !ayni && <text x={sx(Q.x) + 8} y={sy(Q.y) + 14} className="sf-egri-yazi">Q</text>}
      </svg>
      <p className="sf-sonuc">
        {tekil
          ? "Bu eğri tekil (sivri ya da kendini kesen); kriptografide kullanılmaz."
          : !P || !Q
            ? "Noktaları seç."
            : !S
              ? "P ile Q birbirinin yansıması: doğru dikey, üçüncü kesişim yok. P + Q = O (sonsuzdaki nokta)."
              : `${ayni ? "Teğet" : "Doğru"} eğriyi üçüncü kez ${nt({ x: S.x, y: -S.y })} noktasında kesiyor; x eksenine göre yansıması P + Q = ${nt(S)}.`}
      </p>
    </div>
  );
}

// ---------------- G-S11-02: F_p üzerinde eğri ve skaler çarpım ----------------

const EGRI = { a: 2n, b: 3n, p: 97n };
const OLCEK = 3.2;
const pt = (n: Nokta) => (n ? `(${n.x}, ${n.y})` : "O");

export function EgriFp() {
  const noktalar = useMemo(() => egriNoktalari(EGRI), []);
  const mertebeler = useMemo(() => new Map(noktalar.map((n) => [`${n.x},${n.y}`, mertebe(n, EGRI)])), [noktalar]);
  const ilk = noktalar.find((n) => mertebeler.get(`${n.x},${n.y}`) === 50) ?? noktalar[0]!;
  const [P, setP] = useState<{ x: bigint; y: bigint }>(ilk);
  const ord = mertebeler.get(`${P.x},${P.y}`) ?? 1;
  const [k, setK] = useState(7);
  const [a, setA] = useState(13);
  const [b, setB] = useState(21);
  const kk = Math.min(k, ord);
  const katlar = useMemo(() => {
    const l: Nokta[] = [];
    let R: Nokta = null;
    for (let i = 1; i <= kk; i++) {
      R = topla(R, P, EGRI);
      l.push(R);
    }
    return l;
  }, [P, kk]);
  const adimlar = skalerCarp(BigInt(kk), P, EGRI).adimlar;
  const aP = skalerCarp(BigInt(a), P, EGRI).sonuc;
  const bP = skalerCarp(BigInt(b), P, EGRI).sonuc;
  const abP = skalerCarp(BigInt(a), bP, EGRI).sonuc;
  const baP = skalerCarp(BigInt(b), aP, EGRI).sonuc;
  const X = (x: bigint) => 6 + Number(x) * OLCEK;
  const Y = (y: bigint) => 6 + (96 - Number(y)) * OLCEK;
  const sec = (e: MouseEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const olcek = (97 * OLCEK + 12) / r.width;
    const mx = (e.clientX - r.left) * olcek;
    const my = (e.clientY - r.top) * olcek;
    let en: { x: bigint; y: bigint } | null = null;
    let enD = 1e9;
    for (const n of noktalar) {
      const d = (X(n.x) - mx) ** 2 + (Y(n.y) - my) ** 2;
      if (d < enD) [en, enD] = [n, d];
    }
    if (en && enD < 200) setP(en);
  };
  const yol = katlar
    .filter((n): n is { x: bigint; y: bigint } => n !== null)
    .map((n, i) => `${i ? "L" : "M"}${X(n.x).toFixed(1)},${Y(n.y).toFixed(1)}`)
    .join("");
  const son = katlar.at(-1) ?? null;
  return (
    <div className="sf">
      <div className="sf-ust">
        <span className="sf-mono">y² = x³ + 2x + 3 (mod 97): {noktalar.length + 1} nokta (O dahil)</span>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-satir">
        <span>
          P = {pt(P)}, mertebesi {ord}
        </span>
        <label>
          k <input type="range" min={1} max={ord} value={kk} onChange={(e) => setK(Number(e.target.value))} /> {kk}
        </label>
        <span className="sf-mono">kP = {pt(son)}</span>
      </div>
      <svg className="sf-egri sf-egri-fp" viewBox={`0 0 ${97 * OLCEK + 12} ${97 * OLCEK + 12}`} onClick={sec} role="img" aria-label={`Eğrinin noktaları; P = ${pt(P)}, ${kk}P = ${pt(son)}`}>
        <rect x={0} y={0} width={97 * OLCEK + 12} height={97 * OLCEK + 12} className="sf-egri-zemin" />
        {yol && <path d={yol} className="sf-egri-iz" />}
        {noktalar.map((n) => (
          <circle key={`${n.x},${n.y}`} cx={X(n.x)} cy={Y(n.y)} r={2.6} className={katlar.some((m) => m && m.x === n.x && m.y === n.y) ? "sf-egri-gezilen" : "sf-egri-nokta"} />
        ))}
        <circle cx={X(P.x)} cy={Y(P.y)} r={5} className="sf-egri-p" />
        {son && <circle cx={X(son.x)} cy={Y(son.y)} r={5.5} className="sf-egri-toplam" />}
      </svg>
      <p className="sf-not">Bir noktaya tıklayınca P o olur. Noktalar düzensiz dağılır: kP'nin nereye düşeceği k'ye bakmadan tahmin edilemez.</p>
      <div className="sf-kutu">
        <h4>Çiftle ve topla: k = {kk} = {kk.toString(2)}₂</h4>
        <span className="sf-mono">{adimlar.map((x) => `${x.islem === "P ekle" ? "+P" : "×2"} → ${pt(x.nokta)}`).join("  ·  ")}</span>
        <span className="sf-not">
          {adimlar.length} işlem; k'yi bir bir toplasaydık {kk - 1} toplama gerekirdi. 256 bitlik k için fark 2^256'ya karşı yaklaşık 384 işlemdir.
        </span>
      </div>
      <div className="sf-kutu">
        <h4>ECDH</h4>
        <div className="sf-satir">
          <label>
            Ayşe a <input type="number" min={1} max={ord - 1} value={a} onChange={(e) => setA(Math.max(1, Number(e.target.value)))} />
          </label>
          <label>
            Ali b <input type="number" min={1} max={ord - 1} value={b} onChange={(e) => setB(Math.max(1, Number(e.target.value)))} />
          </label>
        </div>
        <span className="sf-mono">
          aP = {pt(aP)} · bP = {pt(bP)} · a(bP) = {pt(abP)} · b(aP) = {pt(baP)}
        </span>
      </div>
    </div>
  );
}

// ---------------- G-S11-03: imza tezgahı ----------------

export function ImzaTezgahi() {
  const [anahtar, setAnahtar] = useState<{ tur: ImzaTuru; cift: CryptoKeyPair; acik: string } | null>(null);
  const [metin, setMetin] = useState("Ali'ye 100 TL gönder. Ayşe");
  const [imza, setImza] = useState<{ deger: Uint8Array; metin: string } | null>(null);
  const [gecerli, setGecerli] = useState<boolean | null>(null);
  const [bozuk, setBozuk] = useState(false);
  useEffect(() => {
    imzaAnahtari().then(async ({ tur, cift }) => setAnahtar({ tur, cift, acik: hex(await acikAnahtarBayt(cift.publicKey)) }));
  }, []);
  const sinanan = useMemo(() => {
    if (!imza) return null;
    const s = Uint8Array.from(imza.deger);
    if (bozuk) s[5]! ^= 1;
    return s;
  }, [imza, bozuk]);
  useEffect(() => {
    if (!anahtar || !sinanan) return setGecerli(null);
    let iptal = false;
    dogrula(anahtar.tur, anahtar.cift.publicKey, sinanan, metindenBayt(metin)).then((v) => !iptal && setGecerli(v));
    return () => {
      iptal = true;
    };
  }, [anahtar, sinanan, metin]);
  const imzaAt = async () => {
    if (!anahtar) return;
    setBozuk(false);
    setImza({ deger: await imzala(anahtar.tur, anahtar.cift.privateKey, metindenBayt(metin)), metin });
  };
  return (
    <div className="sf">
      <div className="sf-ust">
        <span>{anahtar ? `${anahtar.tur} anahtar çifti hazır` : "Anahtar üretiliyor…"}</span>
        <Rozet tur="webcrypto" />
      </div>
      {anahtar && (
        <p className="sf-not">
          Açık anahtar ({anahtar.acik.length / 2} bayt): <span className="sf-mono">{kisa(anahtar.acik)}</span>. Özel anahtar tarayıcıdan çıkmaz.
        </p>
      )}
      <textarea value={metin} onChange={(e) => setMetin(e.target.value)} aria-label="İmzalanacak mesaj" />
      <div className="sf-satir">
        <button type="button" className="cip" onClick={imzaAt} disabled={!anahtar}>
          Özel anahtarla imzala
        </button>
        <label>
          <input type="checkbox" checked={bozuk} disabled={!imza} onChange={(e) => setBozuk(e.target.checked)} /> İmzanın bir bitini boz
        </label>
      </div>
      {imza && sinanan && (
        <>
          <pre className="sf-kod">İmza ({sinanan.length} bayt): {hex(sinanan)}</pre>
          <p className={`sf-sonuc ${gecerli ? "sf-iyi" : "sf-kotu"}`}>
            {gecerli === null
              ? "Doğrulanıyor…"
              : gecerli
                ? "Açık anahtarla doğrulandı: mesaj bu anahtarın sahibinden ve değişmemiş."
                : metin !== imza.metin
                  ? "Doğrulanamadı: mesaj imzalandıktan sonra değişti."
                  : "Doğrulanamadı: imza bozulmuş."}
          </p>
        </>
      )}
      <p className="sf-not">Mesajı imzaladıktan sonra tek bir harfini değiştir: doğrulama hemen düşer. Ed25519'da aynı mesaj aynı imzayı verir; ECDSA her seferinde rastgele bir nonce kullanır.</p>
      <NonceTekrari />
    </div>
  );
}

// Aynı k ile atılmış iki oyuncak ECDSA imzasından özel anahtar (n = 101)
function NonceTekrari() {
  const [acik, setAcik] = useState(false);
  const n = 101n;
  const d = 17n;
  const k = 29n;
  const r = 45n;
  const z1 = 30n;
  const z2 = 55n;
  const s = (z: bigint) => mod(modTers(k, n) * (z + r * d), n);
  const s1 = s(z1);
  const s2 = s(z2);
  const kb = mod((z1 - z2) * modTers(mod(s1 - s2, n), n), n);
  const db = mod((s1 * kb - z1) * modTers(r, n), n);
  return (
    <div className="sf-kutu">
      <div className="sf-ust">
        <h4>Nonce tekrarı: iki imza, bir anahtar</h4>
        <Rozet tur="oyuncak" />
      </div>
      <span className="sf-mono">
        n = 101 · imza 1: z₁ = {String(z1)}, (r, s₁) = ({String(r)}, {String(s1)}) · imza 2: z₂ = {String(z2)}, (r, s₂) = ({String(r)}, {String(s2)})
      </span>
      <span className="sf-not">İki imzada r aynı: demek ki aynı k kullanılmış.</span>
      <button type="button" className="cip" onClick={() => setAcik(true)} disabled={acik}>
        Özel anahtarı çıkar
      </button>
      {acik && (
        <>
          <span className="sf-mono">
            k = (z₁ − z₂)·(s₁ − s₂)⁻¹ mod n = {String(mod(z1 - z2, n))} · {String(modTers(mod(s1 - s2, n), n))} mod 101 = {String(kb)}
          </span>
          <span className="sf-mono">
            d = (s₁·k − z₁)·r⁻¹ mod n = {String(db)}
          </span>
          <span className="sf-sonuc sf-kotu">Özel anahtar ele geçti; saldırgan artık istediği her şeyi imzalayabilir.</span>
        </>
      )}
    </div>
  );
}

// ---------------- G-S12-01: TLS 1.3 el sıkışması ----------------

interface TlsMesaj {
  ad: string;
  yon: "→" | "←";
  icerik: string;
  sifreli: boolean;
}

interface TlsDurum {
  tur: DegisimTuru;
  imzaTur: ImzaTuru;
  istemciPay: string;
  sunucuPay: string;
  ortak: Uint8Array;
  sirlar: { ad: string; deger: string; adim: number }[];
  sifreliler: string[];
  imza: string;
}

const ALAN = "ornek-banka.test";

export function TlsEl() {
  const [adim, setAdim] = useState(0);
  const [durum, setDurum] = useState<TlsDurum | null>(null);
  const [tohum, setTohum] = useState(0);
  const mesajlar: TlsMesaj[] = useMemo(
    () => [
      { ad: "ClientHello", yon: "→", icerik: `İstemci rastgelesi, desteklenen şifre takımları (TLS_AES_128_GCM_SHA256, TLS_CHACHA20_POLY1305_SHA256), anahtar payı, SNI: ${ALAN}`, sifreli: false },
      { ad: "ServerHello", yon: "←", icerik: "Sunucu rastgelesi, seçilen şifre takımı, sunucunun anahtar payı", sifreli: false },
      { ad: "EncryptedExtensions", yon: "←", icerik: "Uygulama protokolü (h2) gibi ek ayarlar", sifreli: true },
      { ad: "Certificate", yon: "←", icerik: `${ALAN} sertifikası ve ara CA sertifikası`, sifreli: true },
      { ad: "CertificateVerify", yon: "←", icerik: "Buraya kadarki dökümün hash'i üzerinde sunucunun imzası", sifreli: true },
      { ad: "Finished (sunucu)", yon: "←", icerik: "Dökümün HMAC'i: el sıkışmanın değişmediğinin kanıtı", sifreli: true },
      { ad: "Finished (istemci)", yon: "→", icerik: "İstemcinin döküm HMAC'i", sifreli: true },
      { ad: "Uygulama verisi", yon: "→", icerik: "GET /hesap/ozet  Çerez: oturum=…", sifreli: true },
    ],
    [],
  );
  useEffect(() => {
    let iptal = false;
    (async () => {
      const ist = await degisimAnahtari();
      const sun = await degisimAnahtari();
      const sertifika = await imzaAnahtari();
      const istemciPay = hex(await acikAnahtarBayt(ist.cift.publicKey));
      const sunucuPay = hex(await acikAnahtarBayt(sun.cift.publicKey));
      const ortak = await ortakSir(ist.tur, ist.cift.privateKey, sun.cift.publicKey);
      const sifir = new Uint8Array(32);
      const dokum1 = hex(await sha256(`ClientHello ${istemciPay} ServerHello ${sunucuPay}`));
      // RFC 8446 anahtar takvimi; HKDF-Expand-Label'ın bayt biçimi sadeleştirildi
      const erken = await hkdf(sifir, sifir, "derived");
      const elSikisma = await hkdf(ortak, erken, "derived");
      const chs = await hkdf(elSikisma, new Uint8Array(), `c hs traffic ${dokum1}`);
      const shs = await hkdf(elSikisma, new Uint8Array(), `s hs traffic ${dokum1}`);
      const imza = hex(await imzala(sertifika.tur, sertifika.cift.privateKey, metindenBayt(`TLS 1.3, server CertificateVerify ${dokum1}`)));
      const ana = await hkdf(sifir, elSikisma, "derived");
      const dokum2 = hex(await sha256(`${dokum1} ${imza}`));
      const cap = await hkdf(ana, new Uint8Array(), `c ap traffic ${dokum2}`);
      const sap = await hkdf(ana, new Uint8Array(), `s ap traffic ${dokum2}`);
      const sifrele = async (anahtar: Uint8Array, metin: string) => {
        const k = await aesAnahtariAl(anahtar.slice(0, 16), "AES-GCM");
        const { sifreli } = await aesGcmSifrele(k, metindenBayt(metin), rastgeleBayt(12));
        return hex(sifreli);
      };
      const sifreliler = await Promise.all(
        mesajlar.map((m, i) => (m.sifreli ? sifrele(i === 6 ? chs : i === 7 ? cap : shs, m.icerik) : Promise.resolve(""))),
      );
      if (!iptal)
        setDurum({
          tur: ist.tur,
          imzaTur: sertifika.tur,
          istemciPay,
          sunucuPay,
          ortak,
          imza,
          sifreliler,
          sirlar: [
            { ad: `Ortak sır (${ist.tur})`, deger: hex(ortak), adim: 1 },
            { ad: "El sıkışma sırrı", deger: hex(elSikisma), adim: 1 },
            { ad: "c hs traffic (istemci → sunucu)", deger: hex(chs), adim: 1 },
            { ad: "s hs traffic (sunucu → istemci)", deger: hex(shs), adim: 1 },
            { ad: "Ana sır", deger: hex(ana), adim: 5 },
            { ad: "c ap traffic", deger: hex(cap), adim: 6 },
            { ad: "s ap traffic", deger: hex(sap), adim: 6 },
          ],
        });
    })();
    return () => {
      iptal = true;
    };
  }, [mesajlar, tohum]);
  const m = mesajlar[adim]!;
  const goren = (i: number) => {
    const x = mesajlar[i]!;
    if (!x.sifreli) return i === 0 ? `SNI: ${ALAN}, pay: ${kisa(durum?.istemciPay ?? "")}` : `pay: ${kisa(durum?.sunucuPay ?? "")}`;
    const s = durum?.sifreliler[i] ?? "";
    return `${s.length / 2} bayt: ${kisa(s, 10)}`;
  };
  return (
    <div className="sf">
      <div className="sf-ust">
        <span>{durum ? `Anahtar değişimi ${durum.tur}, sertifika imzası ${durum.imzaTur}` : "Anahtarlar üretiliyor…"}</span>
        <Rozet tur="webcrypto" />
      </div>
      <div className="sf-satir">
        <button type="button" className="cip" disabled={adim === 0} onClick={() => setAdim(adim - 1)}>
          Önceki
        </button>
        <span>
          {adim + 1} / {mesajlar.length}
        </span>
        <button type="button" className="cip" disabled={adim === mesajlar.length - 1} onClick={() => setAdim(adim + 1)}>
          Sonraki
        </button>
        <button type="button" className="cip" onClick={() => { setAdim(0); setDurum(null); setTohum((x) => x + 1); }}>
          Yeni bağlantı
        </button>
      </div>
      <div className="sf-tls">
        <ol className="sf-tls-liste">
          {mesajlar.map((x, i) => (
            <li key={x.ad} className={i === adim ? "sf-tls-simdi" : i > adim ? "sf-tls-sonra" : ""}>
              <button type="button" onClick={() => setAdim(i)}>
                <span className="sf-tls-yon">{x.yon === "→" ? "İstemci → Sunucu" : "Sunucu → İstemci"}</span>
                <span>
                  {x.ad} {x.sifreli ? "🔒" : ""}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <div className="sf-kutu">
          <h4>{m.ad}</h4>
          <span>{m.icerik}</span>
          {adim === 4 && durum && <span className="sf-mono">imza: {kisa(durum.imza)}</span>}
          <h4>Ağı dinleyen görür</h4>
          <span className="sf-mono">{goren(adim)}</span>
          {m.sifreli ? (
            <span className="sf-not">El sıkışma anahtarlarıyla AES-GCM ile şifrelendi. Dinleyici ortak sırrı bilmediği için açamaz; içerik bile değil, yalnız boy görünür.</span>
          ) : (
            <span className="sf-not">Açık gider. Anahtar payları herkese açık olabilir; ortak sır onlardan hesaplanamaz.</span>
          )}
        </div>
      </div>
      <div className="sf-kutu">
        <h4>Anahtar takvimi (HKDF)</h4>
        {durum ? (
          <table className="sf-tablo">
            <tbody>
              {durum.sirlar.map((s) => (
                <tr key={s.ad} className={s.adim === adim ? "sf-vurgu" : ""}>
                  <td>{s.ad}</td>
                  <td className="sf-mono">{adim >= s.adim ? kisa(s.deger, 12) : "henüz yok"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <span>…</span>
        )}
        <span className="sf-not">Etiketler RFC 8446'dakiyle aynıdır; HKDF-Expand-Label'ın bayt biçimi sadeleştirildi. Her yön ve her aşama ayrı anahtar kullanır.</span>
      </div>
    </div>
  );
}

// ---------------- G-S12-02: sertifika zinciri ----------------

interface Sertifika {
  konu: string;
  yayinci: string;
  anahtar: string;
  bitis: string;
  imza: Uint8Array;
}

interface Bozma {
  ad: boolean;
  sure: boolean;
  sahteKok: boolean;
  adres: boolean;
}

const sertifikaGovdesi = (s: Omit<Sertifika, "imza">) => metindenBayt(JSON.stringify([s.konu, s.yayinci, s.anahtar, s.bitis]));
const gunSonra = (g: number) => new Date(Date.now() + g * 864e5).toISOString().slice(0, 10);

export function SertifikaZinciri() {
  const [anahtarlar, setAnahtarlar] = useState<Record<"kok" | "ara" | "site" | "sahte", { tur: ImzaTuru; cift: CryptoKeyPair; hex: string }> | null>(null);
  const [bozma, setBozma] = useState<Bozma>({ ad: false, sure: false, sahteKok: false, adres: false });
  const [zincir, setZincir] = useState<{ s: Sertifika; kontroller: [string, boolean][] }[] | null>(null);
  useEffect(() => {
    (async () => {
      const uret = async () => {
        const k = await imzaAnahtari();
        return { ...k, hex: hex(await acikAnahtarBayt(k.cift.publicKey)) };
      };
      setAnahtarlar({ kok: await uret(), ara: await uret(), site: await uret(), sahte: await uret() });
    })();
  }, []);
  useEffect(() => {
    if (!anahtarlar) return;
    let iptal = false;
    (async () => {
      const { kok, ara, site, sahte } = anahtarlar;
      const imzalaS = async (s: Omit<Sertifika, "imza">, imzalayan: typeof kok) => ({ ...s, imza: await imzala(imzalayan.tur, imzalayan.cift.privateKey, sertifikaGovdesi(s)) });
      // Sahte kök senaryosunda zincirin tepesinde saldırganın kendi ürettiği kök vardır
      const ust = bozma.sahteKok ? sahte : kok;
      const kokAd = bozma.sahteKok ? "Saldırganın Kökü" : "Örnek Kök CA";
      const kokS = await imzalaS({ konu: kokAd, yayinci: kokAd, anahtar: ust.hex, bitis: gunSonra(3650) }, ust);
      const araS = await imzalaS({ konu: "Örnek Ara CA", yayinci: kokAd, anahtar: ara.hex, bitis: gunSonra(1500) }, ust);
      const siteS = await imzalaS({ konu: ALAN, yayinci: "Örnek Ara CA", anahtar: site.hex, bitis: gunSonra(bozma.sure ? -3 : 45) }, ara);
      // Ad bozması: imzadan sonra konu değiştirilir
      const siteGosterilen = bozma.ad ? { ...siteS, konu: "ornek-banka.test.kotu.test" } : siteS;
      const dogrulaS = (s: Sertifika, yayinci: typeof kok) => dogrula(yayinci.tur, yayinci.cift.publicKey, s.imza, sertifikaGovdesi(s));
      const bugun = gunSonra(0);
      const adresCubugu = bozma.adres ? "ornek-banka.test.kotu.test" : ALAN;
      const sonuc = [
        {
          s: siteGosterilen,
          kontroller: [
            ["Ara CA'nın anahtarıyla imza", await dogrulaS(siteGosterilen, ara)],
            ["Süresi geçmemiş", siteGosterilen.bitis >= bugun],
            [`Ad adres çubuğuyla eşleşiyor (${adresCubugu})`, siteGosterilen.konu === adresCubugu],
          ] as [string, boolean][],
        },
        {
          s: araS,
          kontroller: [
            [`${kokAd} anahtarıyla imza`, await dogrulaS(araS, ust)],
            ["Süresi geçmemiş", araS.bitis >= bugun],
          ] as [string, boolean][],
        },
        {
          s: kokS,
          kontroller: [
            ["Kendi kendini imzalamış", await dogrulaS(kokS, ust)],
            ["Cihazın güven deposunda", !bozma.sahteKok],
          ] as [string, boolean][],
        },
      ];
      if (!iptal) setZincir(sonuc);
    })();
    return () => {
      iptal = true;
    };
  }, [anahtarlar, bozma]);
  const hepsi = zincir?.every((h) => h.kontroller.every(([, v]) => v));
  const kutu = (k: keyof Bozma, yazi: string) => (
    <label>
      <input type="checkbox" checked={bozma[k]} onChange={(e) => setBozma({ ...bozma, [k]: e.target.checked })} /> {yazi}
    </label>
  );
  return (
    <div className="sf">
      <div className="sf-ust">
        <span>{anahtarlar ? `Üç gerçek ${anahtarlar.kok.tur} anahtar çifti; sertifikalar sadeleştirilmiş` : "Anahtarlar üretiliyor…"}</span>
        <Rozet tur="webcrypto" />
      </div>
      <div className="sf-satir">
        {kutu("ad", "Sitenin adını imzadan sonra değiştir")}
        {kutu("sure", "Süresi geçmiş sertifika")}
        {kutu("sahteKok", "Ara CA'yı saldırganın kökü imzalasın")}
        {kutu("adres", "Kullanıcı başka bir adrese gitsin")}
      </div>
      <div className="sf-zincir">
        {zincir?.map(({ s, kontroller }) => (
          <div key={s.konu + s.yayinci} className={`sf-kutu ${kontroller.every(([, v]) => v) ? "" : "sf-kirik"}`}>
            <h4>{s.konu}</h4>
            <span className="sf-not">
              Yayıncı: {s.yayinci} · Bitiş: {s.bitis} · Anahtar: <span className="sf-mono">{kisa(s.anahtar, 8)}</span>
            </span>
            <ul className="sf-kontrol">
              {kontroller.map(([ad, v]) => (
                <li key={ad} className={v ? "sf-tamam" : "sf-hata"}>
                  {v ? "✓" : "✗"} {ad}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {zincir && (
        <p className={`sf-sonuc ${hepsi ? "sf-iyi" : "sf-kotu"}`}>
          {hepsi
            ? "Zincir kökten yaprağa sağlam; tarayıcı kilidi gösterir."
            : bozma.sahteKok
              ? "İmzaların hepsi matematiksel olarak doğru, ama zincir güven deposunda olmayan bir köke çıkıyor. Saldırgan kendi kökünü üretebilir; cihazına kurduramadıkça işe yaramaz."
              : "Zincirde kırık bir halka var; tarayıcı \"Bağlantınız gizli değil\" uyarısı verir."}
        </p>
      )}
    </div>
  );
}

// ---------------- G-S12-03: ortadaki adam sahnesi ----------------

type Saldiri = "yok" | "dinle" | "sahte" | "dusur";

export function MitmSahnesi() {
  const [https, setHttps] = useState(true);
  const [saldiri, setSaldiri] = useState<Saldiri>("dinle");
  const [hsts, setHsts] = useState(false);
  const [gecer, setGecer] = useState(false);
  let sonuc: { alan: boolean; yol: boolean; icerik: boolean; degistir: boolean; uyari: boolean; aciklama: string };
  const hepsi = (aciklama: string, uyari = false) => ({ alan: true, yol: true, icerik: true, degistir: true, uyari, aciklama });
  const sifreli = (aciklama: string, uyari = false) => ({ alan: true, yol: false, icerik: false, degistir: false, uyari, aciklama });
  if (saldiri === "yok") sonuc = { alan: false, yol: false, icerik: false, degistir: false, uyari: false, aciklama: "Ağda kimse yok; yine de kafe ağının sahibi trafiği görebilecek konumdadır." };
  else if (!https) sonuc = saldiri === "dinle" ? { ...hepsi("HTTP'de her şey açık gider: adres, çerezler, parola."), degistir: false } : hepsi("HTTP'de saldırgan sayfayı istediği gibi değiştirebilir, form adresini kendine yönlendirebilir.");
  else if (saldiri === "dinle") sonuc = sifreli("HTTPS: dinleyici alan adını (SNI ve DNS) ve trafiğin boyunu görür; yol, çerez ve içerik şifrelidir.");
  else if (saldiri === "sahte") {
    if (hsts) sonuc = sifreli("Sahte sertifika zinciri doğrulanmıyor. HSTS'li sitede tarayıcı uyarıyı geçme seçeneği sunmaz; bağlantı kurulmaz.", true);
    else if (gecer) sonuc = hepsi("Kullanıcı uyarıyı geçti: saldırgan iki ayrı TLS bağlantısının ortasında, her şeyi okuyor ve değiştirebiliyor.", true);
    else sonuc = sifreli("Sahte sertifika zinciri doğrulanmıyor; tarayıcı \"Bağlantınız gizli değil\" der. Kullanıcı geri dönerse saldırı başarısız.", true);
  } else if (hsts) sonuc = sifreli("Tarayıcı bu siteye yalnız HTTPS ile gideceğini HSTS'ten biliyor; ilk istek HTTP gitmediği için düşürme işe yaramaz.");
  else sonuc = hepsi("SSL stripping: kullanıcı \"ornek-banka.test\" yazınca ilk istek HTTP gider; saldırgan sunucuyla HTTPS, kullanıcıyla HTTP konuşur. Adres çubuğunda kilit yoktur ama çoğu kişi fark etmez.");
  const satir = (ad: string, v: boolean) => (
    <tr key={ad}>
      <td>{ad}</td>
      <td className={v ? "sf-hata" : "sf-tamam"}>{v ? "Evet" : "Hayır"}</td>
    </tr>
  );
  return (
    <div className="sf">
      <div className="sf-satir">
        <Secim ad="Bağlantı" secenekler={[["https", "HTTPS"], ["http", "HTTP"]]} deger={https ? "https" : "http"} degis={(v) => setHttps(v === "https")} />
        <Secim
          ad="Saldırgan"
          secenekler={[
            ["yok", "Saldırgan yok"],
            ["dinle", "Dinliyor"],
            ["sahte", "Sahte sertifika"],
            ["dusur", "HTTP'ye düşürüyor"],
          ]}
          deger={saldiri}
          degis={setSaldiri}
        />
      </div>
      {https && (
        <div className="sf-satir">
          <label>
            <input type="checkbox" checked={hsts} onChange={(e) => setHsts(e.target.checked)} /> Site HSTS kullanıyor
          </label>
          {saldiri === "sahte" && !hsts && (
            <label>
              <input type="checkbox" checked={gecer} onChange={(e) => setGecer(e.target.checked)} /> Kullanıcı uyarıyı geçiyor
            </label>
          )}
        </div>
      )}
      <div className="sf-sahne" aria-hidden="true">
        <span className="sf-kutu">Tarayıcı{sonuc.uyari ? " ⚠" : ""}</span>
        <span className={`sf-sahne-hat ${saldiri !== "yok" ? "sf-sahne-saldirgan" : ""}`}>{saldiri === "yok" ? "kafe Wi-Fi" : "kafe Wi-Fi + saldırgan"}</span>
        <span className="sf-kutu">{ALAN}</span>
      </div>
      <div className="sf-tablo-sar">
        <table className="sf-tablo">
          <thead>
            <tr>
              <th>Saldırgan …</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {satir("gittiğin alan adını görür mü?", sonuc.alan)}
            {satir("sayfa yolunu ve çerezleri görür mü?", sonuc.yol)}
            {satir("parolanı ve sayfa içeriğini görür mü?", sonuc.icerik)}
            {satir("sayfayı değiştirebilir mi?", sonuc.degistir)}
          </tbody>
        </table>
      </div>
      <p className={`sf-sonuc ${sonuc.icerik ? "sf-kotu" : "sf-iyi"}`}>{sonuc.aciklama}</p>
      <p className="sf-not">Encrypted ClientHello (ECH) ve şifreli DNS alan adını da gizler; IP adresi ve trafiğin boyu yine görünür.</p>
    </div>
  );
}
