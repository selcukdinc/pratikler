// 17. ünitenin etkileşimli şekilleri: nonce tekrarında kelime sürükleme, oyuncak padding
// oracle, zamanlama saldırısı ve güç analizi laboratuvarı. Hepsi oyuncaktır: AES oyuncak
// AES'tir (src/kripto/oyuncak), ölçümler tohumlu bir modelden gelir (oyuncak/saldiri.ts).
import { useMemo, useState } from "react";
import { Rozet } from "../../../../src/kripto/Rozet";
import { hex, metindenBayt } from "../../../../src/kripto/bayt";
import { anahtarGenislet } from "../../../../src/kripto/oyuncak/aes";
import { cbcSifrele, ctr, dolgula } from "../../../../src/kripto/oyuncak/modlar";
import { cpa, dolguKahini, izUret, kahinSaldirisi, sonrakiKarakter, tohumlu, type KahinAdimi } from "../../../../src/kripto/oyuncak/saldiri";
import { rastgeleBayt } from "../../../../src/kripto/webcrypto";

const h2 = (x: number) => x.toString(16).padStart(2, "0");

// ---------------- G-S17-01: nonce tekrarı, kelime sürükleme ----------------

const MESAJ1 = "YARIN SABAH SAAT ONDA ARKA KAPIDA BULUSALIM";
const MESAJ2 = "YENI PAROLA MAVI KALEM YEDI, KIMSEYE SOYLEME";
const okunur = (c: number) => (c >= 65 && c <= 90) || c === 32 || c === 44 || c === 46 || (c >= 48 && c <= 57);

export function NonceSurukle() {
  const [anahtar] = useState(() => rastgeleBayt(16));
  const [nonce] = useState(() => rastgeleBayt(16));
  const [kelime, setKelime] = useState(" SAAT ");
  const [konum, setKonum] = useState(0);
  const { c1, c2, x } = useMemo(() => {
    const k = anahtarGenislet(anahtar);
    const n = Math.min(MESAJ1.length, MESAJ2.length);
    const c1 = ctr(metindenBayt(MESAJ1.slice(0, n)), k, nonce);
    const c2 = ctr(metindenBayt(MESAJ2.slice(0, n)), k, nonce);
    return { c1, c2, x: c1.map((b, i) => b ^ c2[i]!) };
  }, [anahtar, nonce]);
  const kb = metindenBayt(kelime.toUpperCase());
  const maks = Math.max(0, x.length - kb.length);
  const k = Math.min(konum, maks);
  const parca = [...kb].map((b, i) => b ^ x[k + i]!);
  const iyi = parca.length > 0 && parca.every(okunur);
  // Bütün konumlarda dene: hangileri okunur bir parça veriyor?
  const adaylar = useMemo(() => {
    if (!kb.length) return [];
    const y: number[] = [];
    for (let i = 0; i + kb.length <= x.length; i++) if ([...kb].every((b, j) => okunur(b ^ x[i + j]!))) y.push(i);
    return y;
  }, [kb, x]);
  return (
    <div className="sf">
      <div className="sf-ust">
        <span className="sf-not">İki mesaj aynı anahtar ve aynı nonce ile AES-CTR'de şifrelendi. Anahtarı bilmiyorsun.</span>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-kutu">
        <div className="sf-mono sf-kirp">C₁ = {hex(c1)}</div>
        <div className="sf-mono sf-kirp">C₂ = {hex(c2)}</div>
        <div className="sf-mono sf-kirp">C₁ ⊕ C₂ = M₁ ⊕ M₂ = {hex(x)}</div>
      </div>
      <div className="sf-satir">
        <label className="sf-satir">
          Tahmin ettiğin kelime <input value={kelime} onChange={(e) => setKelime(e.target.value)} aria-label="Tahmin edilen kelime" />
        </label>
        <label className="sf-satir">
          Konum {k}
          <input type="range" min={0} max={maks} value={k} onChange={(e) => setKonum(Number(e.target.value))} aria-label="Kelimenin konumu" />
        </label>
      </div>
      <div className="sf-surukle sf-mono" aria-label="Kelimenin konumu ve öteki mesajın o konumdaki parçası">
        <div>
          {Array.from({ length: x.length }, (_, i) => (
            <span key={i} className={i >= k && i < k + kb.length ? "sf-surukle-kelime" : ""}>
              {i >= k && i < k + kb.length ? String.fromCharCode(kb[i - k]!) : "·"}
            </span>
          ))}
        </div>
        <div>
          {Array.from({ length: x.length }, (_, i) => (
            <span key={i} className={i >= k && i < k + kb.length ? (iyi ? "sf-surukle-iyi" : "sf-surukle-kotu") : ""}>
              {i >= k && i < k + kb.length ? (okunur(parca[i - k]!) ? String.fromCharCode(parca[i - k]!) : "?") : "·"}
            </span>
          ))}
        </div>
      </div>
      <p className={`sf-sonuc ${iyi ? "sf-iyi" : ""}`}>
        {iyi
          ? `Okunur bir parça çıktı: "${String.fromCharCode(...parca)}". Kelime bu konumda mesajlardan birinde geçiyorsa, öteki mesajın aynı konumdaki parçası budur.`
          : "Bu konumda öteki mesaj anlamsız çıkıyor. Kelimeyi kaydır ya da başka bir kelime dene."}
      </p>
      <p className="sf-not">
        Okunur parça veren konumlar: {adaylar.length ? adaylar.join(", ") : "yok"}. Sık geçen kelimelerle (" VE ", " BIR ", " SAAT ") başla, bulduğun parçayı uzatarak iki mesajı birlikte çöz. Anahtara hiç gerek yok: aynı nonce iki kez kullanıldığı an anahtar akışı birbirini götürür.
      </p>
    </div>
  );
}

// ---------------- G-S17-02: padding oracle ----------------

const BAKIYE = "BAKIYE=0001250TL";

export function PaddingOracle() {
  const [anahtar, setAnahtar] = useState(() => rastgeleBayt(16));
  const [iv] = useState(() => rastgeleBayt(16));
  const [adimlar, setAdimlar] = useState<KahinAdimi[]>([]);
  const d = useMemo(() => {
    const k = anahtarGenislet(anahtar);
    const c = cbcSifrele(dolgula(metindenBayt(BAKIYE)), k, iv);
    return { k, c, gen: kahinSaldirisi(iv, c.slice(0, 16), dolguKahini(k)) };
  }, [anahtar, iv]);
  const ilerle = (n: number) => {
    const yeni: KahinAdimi[] = [];
    for (let i = 0; i < n; i++) {
      const r = d.gen.next();
      if (r.done) break;
      yeni.push(r.value);
    }
    setAdimlar((a) => [...a, ...yeni]);
  };
  const toplam = adimlar.reduce((t, a) => t + a.deneme, 0);
  const acik = Array.from({ length: 16 }, (_, i) => adimlar.find((a) => a.konum === i));
  return (
    <div className="sf">
      <div className="sf-ust">
        <span className="sf-not">Sunucu, şifreli bakiyeyi çözdüğünde yalnız "dolgu doğru" ya da "dolgu hatalı" diyor.</span>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-kutu">
        <div className="sf-mono sf-kirp">IV = {hex(iv)}</div>
        <div className="sf-mono sf-kirp">C = {hex(d.c)}</div>
      </div>
      <div className="sf-satir">
        <button type="button" className="cip" onClick={() => ilerle(1)} disabled={adimlar.length >= 16}>
          Bir bayt çöz
        </button>
        <button type="button" className="cip" onClick={() => ilerle(16)} disabled={adimlar.length >= 16}>
          Hepsini çöz
        </button>
        <button type="button" className="cip" onClick={() => { setAnahtar(rastgeleBayt(16)); setAdimlar([]); }}>
          Baştan
        </button>
        <span className="sf-not">Sunucuya sorulan: {toplam} kez</span>
      </div>
      <div className="sf-kahin" aria-label="Çözülen baytlar">
        {acik.map((a, i) => (
          <span key={i} className={`sf-bayt${a ? " sf-kahin-acik" : ""}`} title={a ? `${a.deneme} sorgu, ara değer ${h2(a.ara)}` : "henüz çözülmedi"}>
            {a ? String.fromCharCode(a.acik) : "?"}
          </span>
        ))}
      </div>
      {adimlar.length > 0 && (
        <div className="sf-tablo-sar">
          <table className="sf-tablo">
            <thead>
              <tr>
                <th>Bayt</th>
                <th>Sorgu</th>
                <th>Ara değer D(C)</th>
                <th>⊕ IV</th>
                <th>Açık</th>
              </tr>
            </thead>
            <tbody>
              {adimlar.slice(-4).map((a) => (
                <tr key={a.konum}>
                  <td>{a.konum}</td>
                  <td>{a.deneme}</td>
                  <td className="sf-mono">{h2(a.ara)}</td>
                  <td className="sf-mono">{h2(iv[a.konum]!)}</td>
                  <td className="sf-mono">{JSON.stringify(String.fromCharCode(a.acik))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className={`sf-sonuc ${adimlar.length === 16 ? "sf-kotu" : ""}`}>
        {adimlar.length === 16
          ? `Anahtar hiç kullanılmadan bütün blok çözüldü: "${BAKIYE}". ${toplam} sorgu yetti; kaba kuvvetle 2^128 anahtar denemek gerekirdi.`
          : "Saldırgan IV'nin son baytını 0'dan 255'e değiştirip sunucuya gönderir. Sunucu \"dolgu doğru\" dediği anda çözülen son baytın 0x01 olduğunu bilir; buradan şifre çözücünün ara çıktısını ve açık baytı hesaplar. Sonra 0x02 0x02 dolgusuyla bir önceki bayta geçer."}
      </p>
    </div>
  );
}

// ---------------- G-S17-03: zamanlama saldırısı ----------------

const PIN = "7392";
const RAKAMLAR = "0123456789";

export function ZamanlamaSaldirisi() {
  const [sabit, setSabit] = useState(false);
  const [gurultu, setGurultu] = useState(3);
  const [tekrar, setTekrar] = useState(20);
  const [onek, setOnek] = useState("");
  const [tohum, setTohum] = useState(1);
  const olcum = useMemo(() => (onek.length < PIN.length ? sonrakiKarakter(PIN, onek, RAKAMLAR, sabit, gurultu, tekrar, tohumlu(tohum + onek.length * 97)) : null), [onek, sabit, gurultu, tekrar, tohum]);
  const enUzun = olcum ? Math.max(...olcum.sureler.map((s) => s.sure)) : 1;
  const enKisa = olcum ? Math.min(...olcum.sureler.map((s) => s.sure)) : 0;
  const dogruMu = onek === PIN.slice(0, onek.length);
  return (
    <div className="sf">
      <div className="sf-ust">
        <label>
          <input type="checkbox" checked={sabit} onChange={(e) => { setSabit(e.target.checked); setOnek(""); }} /> Sabit zamanlı karşılaştırma
        </label>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-satir">
        <label className="sf-satir">
          Ölçüm gürültüsü
          <input type="range" min={0} max={20} value={gurultu} onChange={(e) => setGurultu(Number(e.target.value))} aria-label="Ölçüm gürültüsü" />
        </label>
        <label className="sf-satir">
          Her tahmin {tekrar} kez ölçülsün
          <input type="range" min={1} max={200} value={tekrar} onChange={(e) => setTekrar(Number(e.target.value))} aria-label="Tekrar sayısı" />
        </label>
      </div>
      <p className="sf-not">
        Sunucu 4 haneli PIN'i karakter karakter karşılaştırıyor. Saldırgan şimdiye kadar bulduğu önekin arkasına her rakamı koyup yanıt süresini ölçüyor. Bulunan: <strong className="sf-mono">{onek.padEnd(4, "_")}</strong>
      </p>
      {olcum && (
        <div className="sf-histogram" role="img" aria-label="Her rakam için ortalama yanıt süresi">
          {olcum.sureler.map((s) => (
            <div key={s.c} className="sf-sutun">
              <div className={`sf-sutun-cubuk${s.c === olcum.tahmin ? " sf-cubuk-vurgu" : ""}`} style={{ height: `${8 + (88 * (s.sure - enKisa)) / Math.max(1e-6, enUzun - enKisa)}%` }} title={`${s.sure.toFixed(1)} ns`} />
              <span>{s.c}</span>
            </div>
          ))}
        </div>
      )}
      <div className="sf-satir">
        <button type="button" className="cip" onClick={() => olcum && setOnek((o) => o + olcum.tahmin)} disabled={!olcum}>
          En yavaşı seç: {olcum?.tahmin}
        </button>
        <button type="button" className="cip" onClick={() => { setOnek(""); setTohum((t) => t + 1); }}>
          Baştan
        </button>
      </div>
      {onek.length === PIN.length && (
        <p className={`sf-sonuc ${dogruMu ? "sf-kotu" : "sf-iyi"}`}>
          {dogruMu ? `PIN bulundu: ${PIN}. Kaba kuvvette 10.000 deneme gerekirdi; burada 4 × 10 tahmin yetti.` : "Bulunan PIN yanlış: süre farkı gürültüde kayboldu. Sabit zamanlı karşılaştırmada her tahmin aynı süredir; saldırı rastgele tahmine döner."}
        </p>
      )}
      {!sabit && gurultu > 8 && tekrar < 30 && <p className="sf-not">Gürültü yüksek: daha çok ölçüm alıp ortalamasına bak. Gerçek saldırılarda da binlerce ölçümün ortalaması alınır.</p>}
    </div>
  );
}

// ---------------- G-S17-04: güç analizi laboratuvarı ----------------

const DOGRU_BAYT = 0x2b;

export function GucAnalizi() {
  const [n, setN] = useState(200);
  const [gurultu, setGurultu] = useState(1.5);
  const [maskeli, setMaskeli] = useState(false);
  const [tohum, setTohum] = useState(7);
  const { k, iz } = useMemo(() => {
    const iz = izUret(DOGRU_BAYT, n, gurultu, maskeli, tohumlu(tohum));
    return { k: cpa(iz), iz };
  }, [n, gurultu, maskeli, tohum]);
  const enIyi = k.indexOf(Math.max(...k));
  const ikinci = Math.max(...[...k].filter((_, i) => i !== enIyi));
  const W = 512;
  const H = 150;
  const olcek = Math.max(0.3, ...[...k].map(Math.abs));
  return (
    <div className="sf">
      <div className="sf-ust">
        <label>
          <input type="checkbox" checked={maskeli} onChange={(e) => setMaskeli(e.target.checked)} /> Maskeleme açık
        </label>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-satir">
        <label className="sf-satir">
          İz sayısı {n}
          <input type="range" min={20} max={2000} step={20} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="İz sayısı" />
        </label>
        <label className="sf-satir">
          Gürültü {gurultu.toFixed(1)}
          <input type="range" min={0.2} max={6} step={0.1} value={gurultu} onChange={(e) => setGurultu(Number(e.target.value))} aria-label="Gürültü" />
        </label>
        <button type="button" className="cip" onClick={() => setTohum((t) => t + 1)}>
          Yeni ölçümler
        </button>
      </div>
      <p className="sf-not">
        Akıllı kart AES'in ilk turunda S(p ⊕ k) değerini işlerken, harcadığı güç bu değerin 1 olan bit sayısıyla (Hamming ağırlığı) biraz artıyor. Saldırgan {n} rastgele düz metin gönderip her birinde gücü ölçtü (ilk ölçümler: {[...iz.olcum.slice(0, 4)].map((x) => x.toFixed(2)).join(", ")}…). Şimdi 256 anahtar tahmininin her biri için "bu anahtar doğruysa güç ne olurdu?" diye hesaplayıp ölçümle korelasyonuna bakıyor.
      </p>
      <svg viewBox={`0 0 ${W} ${H + 20}`} className="sf-cpa" role="img" aria-label="256 anahtar tahmininin korelasyonu">
        <line x1={0} y1={H / 2} x2={W} y2={H / 2} className="sf-eksen-cizgi" />
        {[...k].map((v, i) => (
          <rect key={i} x={i * 2} width={1.6} y={v >= 0 ? H / 2 - (v / olcek) * (H / 2) : H / 2} height={Math.abs(v / olcek) * (H / 2)} className={i === DOGRU_BAYT ? "sf-cpa-dogru" : i === enIyi ? "sf-cpa-enIyi" : "sf-cpa-cubuk"} />
        ))}
        <text x={DOGRU_BAYT * 2} y={H + 14} textAnchor="middle" className="sf-egri-yazi">
          0x{h2(DOGRU_BAYT)}
        </text>
      </svg>
      <p className={`sf-sonuc ${!maskeli && enIyi === DOGRU_BAYT ? "sf-kotu" : "sf-iyi"}`}>
        {maskeli
          ? `Maskeleme açık: işlenen değer her çalışmada rastgele bir maskeyle XOR'lanıyor; hiçbir tahminin korelasyonu öne çıkmıyor (en yüksek ${Math.max(...k).toFixed(2)}). Saldırgan iz sayısını artırsa da tepe gelmez; daha pahalı, ikinci dereceden saldırılar gerekir.`
          : enIyi === DOGRU_BAYT
            ? `En yüksek korelasyon 0x${h2(enIyi)}: doğru anahtar baytı (${k[enIyi]!.toFixed(2)}; ikinci en yüksek ${ikinci.toFixed(2)}). Aynı iş öteki 15 bayt için de tekrarlanınca AES-128 anahtarının tamamı çıkar.`
            : `Tepe henüz ayrışmadı: en yüksek 0x${h2(enIyi)} (yanlış). Gürültüye göre iz sayısını artır.`}
      </p>
    </div>
  );
}
