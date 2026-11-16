// 7-9. ünitelerin etkileşimli şekilleri: çığ etkisi, SHA-256 adım gezgini, kısaltılmış hash'te
// çakışma avı, doğum günü hesaplayıcı, length extension atölyesi, HMAC adımları, kaba kuvvet
// süre hesaplayıcı, sızan veritabanı, PBKDF2 ölçer ve HKDF. Gerçek işlemler Web Crypto ile,
// adım adım gösterilenler oyuncak SHA-256 (src/kripto/oyuncak/sha256.ts) ile yapılır.
import { useEffect, useMemo, useState } from "react";
import { Rozet } from "../../../../src/kripto/Rozet";
import { bitler as baytBitleri, hex, metindenBayt } from "../../../../src/kripto/bayt";
import { BASLANGIC, bayttanDurum, dolgu, sha256Oyuncak, tekBlokIzi } from "../../../../src/kripto/oyuncak/sha256";
import { hkdf, hmacSha256, pbkdf2, rastgeleBayt, sha256 } from "../../../../src/kripto/webcrypto";
import { Secim } from "./temeller";

const h8 = (x: number) => (x >>> 0).toString(16).padStart(8, "0");
const sayi = (x: number) => x.toLocaleString("tr-TR");
// 2,1 × 10^11 biçimi
const us = (x: number, basamak = 1) => x.toExponential(basamak).replace(".", ",").replace("e+", " × 10^");
const bitDizisi = (b: Uint8Array) => [...b].flatMap((x) => [...baytBitleri(x)].map(Number));

// ---------------- G-S7-01: çığ etkisi ----------------

function BitIzgarasi({ a, b }: { a: Uint8Array; b: Uint8Array | null }) {
  const x = bitDizisi(a);
  const y = b ? bitDizisi(b) : null;
  return (
    <div className="sf-bitizgara" role="img" aria-label={y ? `${x.filter((v, i) => v !== y[i]).length} bit değişti` : "256 bitlik özet"}>
      {x.map((v, i) => (
        <span key={i} className={y && y[i] !== v ? "sf-bit sf-bit-degisti" : v ? "sf-bit sf-bit-1" : "sf-bit"} />
      ))}
    </div>
  );
}

const farkSay = (a: Uint8Array, b: Uint8Array) => {
  const y = bitDizisi(b);
  return bitDizisi(a).filter((v, i) => v !== y[i]).length;
};

export function CigEtkisi() {
  const [metin, setMetin] = useState("Yarın 10'da kütüphanede buluşalım.");
  const [bit, setBit] = useState(0);
  const [ozet, setOzet] = useState<{ a: Uint8Array; b: Uint8Array } | null>(null);
  const [histogram, setHistogram] = useState<number[] | null>(null);
  const girdi = useMemo(() => metindenBayt(metin), [metin]);
  const toplamBit = Math.max(1, girdi.length * 8);
  const b = Math.min(bit, toplamBit - 1);
  const degismis = useMemo(() => {
    const y = Uint8Array.from(girdi);
    if (y.length) y[b >> 3]! ^= 0x80 >> (b & 7);
    return y;
  }, [girdi, b]);
  useEffect(() => {
    let iptal = false;
    Promise.all([sha256(girdi), sha256(degismis)]).then(([a, c]) => !iptal && setOzet({ a, b: c }));
    return () => {
      iptal = true;
    };
  }, [girdi, degismis]);
  const yuzDeneme = async () => {
    const sayac = new Array<number>(257).fill(0);
    const a = await sha256(girdi);
    for (let i = 0; i < 200; i++) {
      const y = Uint8Array.from(girdi);
      const r = Math.floor(Math.random() * toplamBit);
      if (y.length) y[r >> 3]! ^= 0x80 >> (r & 7);
      sayac[farkSay(a, await sha256(y))]!++;
    }
    setHistogram(sayac);
  };
  const fark = ozet ? farkSay(ozet.a, ozet.b) : 0;
  const enCok = histogram ? Math.max(...histogram) : 1;
  return (
    <div className="sf">
      <div className="sf-ust">
        <label style={{ flex: 1 }}>Girdi <input type="text" style={{ flex: 1 }} value={metin} onChange={(e) => { setMetin(e.target.value); setHistogram(null); }} /></label>
        <Rozet tur="webcrypto" />
      </div>
      <div className="sf-satir">
        <label>
          Çevrilecek bit: {b + 1} / {toplamBit}
          <input type="range" min={0} max={toplamBit - 1} value={b} onChange={(e) => setBit(Number(e.target.value))} />
        </label>
        <button type="button" className="cip" onClick={() => setBit(Math.floor(Math.random() * toplamBit))}>Rastgele bit</button>
      </div>
      <p className="sf-not">
        {(b >> 3) + 1}. baytın {(b & 7) + 1}. biti çevrildi: <code>{hex(girdi.slice(b >> 3, (b >> 3) + 1))}</code> → <code>{hex(degismis.slice(b >> 3, (b >> 3) + 1))}</code>. Girdinin geri kalanı aynı.
      </p>
      {ozet && (
        <>
          <div className="sf-izgara">
            <div className="sf-kutu">
              <h4>Değişen bitler (turuncu)</h4>
              <BitIzgarasi a={ozet.a} b={ozet.b} />
            </div>
            <div className="sf-kutu">
              <h4>Özetler</h4>
              <code className="sf-kod">{hex(ozet.a)}</code>
              <code className="sf-kod">{hex(ozet.b)}</code>
              <p className="sf-sonuc"><strong>{fark} / 256</strong> bit değişti (%{Math.round((fark / 256) * 100)}).</p>
            </div>
          </div>
          <div className="sf-satir">
            <button type="button" className="cip" onClick={yuzDeneme}>200 rastgele bitle dene</button>
            {histogram && <span className="sf-not">Her sütun: kaç denemede o kadar bit değişti.</span>}
          </div>
          {histogram && (
            <div className="sf-histogram sf-histogram-dar" aria-label="Değişen bit sayılarının histogramı">
              {histogram.slice(96, 161).map((n, i) => (
                <div key={i} className="sf-sutun" title={`${96 + i} bit: ${n} deneme`}>
                  <div className="sf-sutun-cubuk" style={{ height: `${(n / enCok) * 100}%`, background: 96 + i === 128 ? "var(--warning)" : undefined }} />
                  {(96 + i) % 16 === 0 && <span>{96 + i}</span>}
                </div>
              ))}
            </div>
          )}
          {histogram && <p className="sf-not sf-eksen"><span>96</span><span>128 (yarısı)</span><span>160</span></p>}
        </>
      )}
    </div>
  );
}

// ---------------- G-S7-02: SHA-256 adım gezgini ----------------

export function Sha256Gezgini() {
  const [metin, setMetin] = useState("abc");
  const [tur, setTur] = useState(0);
  const [gercek, setGercek] = useState<string | null>(null);
  const veri = useMemo(() => metindenBayt(metin), [metin]);
  const iz = useMemo(() => tekBlokIzi(veri), [veri]);
  useEffect(() => {
    let iptal = false;
    sha256(veri).then((h) => !iptal && setGercek(hex(h)));
    return () => {
      iptal = true;
    };
  }, [veri]);
  if (!iz) {
    return (
      <div className="sf">
        <label>Girdi <input type="text" value={metin} onChange={(e) => setMetin(e.target.value)} /></label>
        <p className="sf-sonuc sf-kotu">Gezgin tek blok gösterir: girdi en çok 55 bayt olmalı (şu an {veri.length}). Uzun mesajlarda bloklar aynı sıkıştırmadan sırayla geçer.</p>
      </div>
    );
  }
  const t = Math.min(tur, 64);
  const durum = t === 0 ? BASLANGIC : iz.iz[t - 1]!.durum;
  const sonuc = hex(iz.sonuc);
  return (
    <div className="sf">
      <div className="sf-ust">
        <label style={{ flex: 1 }}>Girdi (en çok 55 bayt) <input type="text" style={{ flex: 1 }} value={metin} onChange={(e) => setMetin(e.target.value)} /></label>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-kutu">
        <h4>1. Dolgulu blok (64 bayt)</h4>
        <div className="sf-blok64">
          {[...iz.blok].map((x, i) => (
            <span key={i} className={i < veri.length ? "sf-b-mesaj" : i === veri.length ? "sf-b-80" : i >= 56 ? "sf-b-uzunluk" : "sf-b-sifir"}>{x.toString(16).padStart(2, "0")}</span>
          ))}
        </div>
        <p className="sf-not"><span className="sf-b-mesaj">mesaj</span> <span className="sf-b-80">0x80</span> <span className="sf-b-sifir">sıfırlar</span> <span className="sf-b-uzunluk">uzunluk: {veri.length * 8} bit</span></p>
      </div>
      <div className="sf-kutu">
        <h4>2. Mesaj takvimi: W₀ … W₆₃ (ilk 16'sı bloktan, kalanı onlardan türetilir)</h4>
        <div className="sf-wtablo sf-mono">
          {iz.w.map((w, i) => (
            <span key={i} className={i === t - 1 ? "sf-hucre-farkli" : i < 16 ? "sf-w-blok" : undefined} title={`W${i}`}>{h8(w)}</span>
          ))}
        </div>
      </div>
      <div className="sf-kutu">
        <h4>3. Sıkıştırma: {t === 0 ? "başlangıç değerleri (ilk 8 asalın kareköklerinden)" : `${t}. tur, W${t - 1} kullanıldı`}</h4>
        <div className="sf-satir">
          <button type="button" className="cip" disabled={t === 0} onClick={() => setTur(t - 1)}>◀</button>
          <input type="range" min={0} max={64} value={t} onChange={(e) => setTur(Number(e.target.value))} aria-label="Tur" />
          <button type="button" className="cip" disabled={t === 64} onClick={() => setTur(t + 1)}>▶</button>
          <span className="sf-mono">{t} / 64</span>
        </div>
        <div className="sf-abc sf-mono">
          {"abcdefgh".split("").map((ad, i) => (
            <span key={ad} className={t > 0 && (i === 0 || i === 4) ? "sf-hucre-farkli" : undefined}><b>{ad}</b> {h8(durum[i]!)}</span>
          ))}
        </div>
        <p className="sf-not">Her turda yalnız a ve e yeni hesaplanır (turuncu); ötekiler bir sağa kayar. 64 turdan sonra sonuç başlangıç değerlerine eklenir ve özet olur.</p>
      </div>
      <p className="sf-sonuc">
        Özet: <code>{sonuc}</code>
        <br />
        {gercek === null ? "Web Crypto ile karşılaştırılıyor…" : gercek === sonuc ? "Web Crypto'nun SHA-256'sı da aynı özeti verdi ✓" : `Web Crypto farklı: ${gercek}`}
      </p>
    </div>
  );
}

// ---------------- G-S7-03: kısaltılmış hash'te çakışma avı ----------------

export function CakismaAvi() {
  const [bitSayisi, setBitSayisi] = useState(16);
  const [sonuc, setSonuc] = useState<{ deneme: number; a: string; b: string; ha: string; hb: string } | null>(null);
  const [gecmis, setGecmis] = useState<number[]>([]);
  const avla = () => {
    const gorulen = new Map<number, string>();
    const tohum = Math.floor(Math.random() * 1e6);
    for (let i = 0; ; i++) {
      const m = `mesaj-${tohum}-${i}`;
      const h = sha256Oyuncak(metindenBayt(m));
      const k = ((h[0]! << 16) | (h[1]! << 8) | h[2]!) >>> (24 - bitSayisi);
      const onceki = gorulen.get(k);
      if (onceki !== undefined) {
        setSonuc({ deneme: i + 1, a: onceki, b: m, ha: hex(sha256Oyuncak(metindenBayt(onceki))), hb: hex(h) });
        setGecmis((g) => [...g.slice(-9), i + 1]);
        return;
      }
      gorulen.set(k, m);
    }
  };
  const beklenen = Math.round(1.1774 * Math.sqrt(2 ** bitSayisi));
  const hexBas = Math.ceil(bitSayisi / 4);
  return (
    <div className="sf">
      <div className="sf-ust">
        <label>
          Özetin ilk {bitSayisi} biti
          <input type="range" min={8} max={24} step={2} value={bitSayisi} onChange={(e) => { setBitSayisi(Number(e.target.value)); setSonuc(null); setGecmis([]); }} />
        </label>
        <Rozet tur="oyuncak" />
      </div>
      <p className="sf-not">Rastgele mesajlar hash'lenir, özetin yalnız ilk {bitSayisi} biti tutulur. İki mesajın ilk {bitSayisi} biti aynı olunca av biter. {bitSayisi} bitte {sayi(2 ** bitSayisi)} farklı değer var; doğum günü sınırı %50 olasılık için yaklaşık <strong>{sayi(beklenen)}</strong> deneme öngörür.</p>
      <button type="button" className="cip" onClick={avla}>Çakışma ara</button>
      {sonuc && (
        <div className="sf-kutu">
          <h4>{sayi(sonuc.deneme)}. denemede çakışma</h4>
          <code className="sf-kod">{sonuc.a}: <mark>{sonuc.ha.slice(0, hexBas)}</mark>{sonuc.ha.slice(hexBas, 32)}…</code>
          <code className="sf-kod">{sonuc.b}: <mark>{sonuc.hb.slice(0, hexBas)}</mark>{sonuc.hb.slice(hexBas, 32)}…</code>
          {gecmis.length > 1 && <p className="sf-not">Son {gecmis.length} avın ortalaması: {sayi(Math.round(gecmis.reduce((t, x) => t + x, 0) / gecmis.length))} deneme.</p>}
        </div>
      )}
      <p className="sf-sonuc">Bit sayısı 2 artınca gereken deneme yalnız 2 katına çıkar: n bitlik özette çakışma yaklaşık 2^(n/2) denemede bulunur. 256 bitlik tam SHA-256'da bu 2¹²⁸ deneme demektir.</p>
    </div>
  );
}

// ---------------- G-S7-04: doğum günü hesaplayıcı ----------------

export function DogumGunu() {
  const [kisi, setKisi] = useState(23);
  const [gun, setGun] = useState(365);
  let p = 1;
  for (let i = 0; i < kisi; i++) p *= Math.max(0, gun - i) / gun;
  const olasilik = 1 - p;
  return (
    <div className="sf">
      <div className="sf-satir">
        <label>Kişi (deneme) sayısı <input type="range" min={2} max={100} value={kisi} onChange={(e) => setKisi(Number(e.target.value))} /> <strong>{kisi}</strong></label>
        <Secim ad="Olası değer" secenekler={[["365", "365 gün"], ["65536", "16 bit özet"], ["16777216", "24 bit özet"]]} deger={String(gun)} degis={(v) => setGun(Number(v))} />
      </div>
      <div className="sf-cubuk" style={{ height: 14 }}><span style={{ width: `${olasilik * 100}%`, background: olasilik >= 0.5 ? "var(--warning)" : undefined }} /></div>
      <p className="sf-sonuc">
        {kisi} kişide en az bir eşleşme olasılığı: <strong>%{(olasilik * 100).toFixed(1)}</strong>. Çift sayısı: {sayi((kisi * (kisi - 1)) / 2)}.
        {gun === 365 && kisi === 23 && " 23 kişide eşik %50'yi geçer."}
      </p>
      <p className="sf-not">Hepsinin farklı olma olasılığı d/d · (d−1)/d · … · (d−n+1)/d çarpımıdır; eşleşme olasılığı 1'den bunun farkıdır. Kabaca n ≈ 1,18 · √d kişide %50'ye ulaşılır.</p>
    </div>
  );
}

// ---------------- G-S8-01: length extension atölyesi ----------------

const MESAJ = "kullanici=ayse&rol=ogrenci";

export function LengthExtension() {
  const [gizli] = useState(() => rastgeleBayt(8 + Math.floor(Math.random() * 13)));
  const [hmacGizli] = useState(() => rastgeleBayt(32));
  const [ek, setEk] = useState("&rol=admin");
  const [tahmin, setTahmin] = useState(10);
  const [yanit, setYanit] = useState<{ naif: boolean; hmac: boolean; rol: string } | null>(null);
  const mesaj = metindenBayt(MESAJ);
  const imza = useMemo(() => sha256Oyuncak(new Uint8Array([...gizli, ...mesaj])), [gizli]); // eslint-disable-line react-hooks/exhaustive-deps
  const L = tahmin + mesaj.length;
  const pad = dolgu(L);
  const ekBayt = metindenBayt(ek);
  const sahteMesaj = new Uint8Array([...mesaj, ...pad, ...ekBayt]);
  const sahteImza = sha256Oyuncak(ekBayt, { H: bayttanDurum(imza), onceki: L + pad.length });
  const gonder = async () => {
    const naif = hex(sha256Oyuncak(new Uint8Array([...gizli, ...sahteMesaj]))) === hex(sahteImza);
    const hmac = hex(await hmacSha256(hmacGizli, sahteMesaj)) === hex(sahteImza);
    const metin = new TextDecoder("latin1").decode(sahteMesaj);
    const rol = [...metin.matchAll(/rol=([^&]*)/g)].at(-1)?.[1] ?? "?";
    setYanit({ naif, hmac, rol });
  };
  return (
    <div className="sf">
      <div className="sf-ust">
        <p className="sf-not" style={{ flex: 1 }}>
          Sunucu istekleri <code>SHA-256(gizli ‖ mesaj)</code> ile imzalıyor. Gizliyi bilmiyorsun, uzunluğunu da (8 ile 20 bayt arası). Elinde bir istek ve imzası var:
        </p>
        <Rozet tur="oyuncak" />
      </div>
      <code className="sf-kod">{MESAJ}{"\n"}imza: {hex(imza)}</code>
      <div className="sf-satir">
        <label>Eklenecek <input type="text" value={ek} onChange={(e) => { setEk(e.target.value); setYanit(null); }} /></label>
        <label>Gizlinin uzunluğu tahmini <input type="number" min={1} max={40} value={tahmin} onChange={(e) => { setTahmin(Math.max(1, Math.min(40, Number(e.target.value) || 1))); setYanit(null); }} /></label>
      </div>
      <div className="sf-kutu">
        <h4>Sahte istek: mesaj ‖ dolgu ‖ ek</h4>
        <code className="sf-kod">
          {MESAJ}
          <mark>{[...pad].map((x) => `\\x${x.toString(16).padStart(2, "0")}`).join("")}</mark>
          {ek}
        </code>
        <p className="sf-not">Sahte imza, sunucunun imzasından (SHA-256'nın son ara durumu) devam edilerek hesaplandı: <code>{hex(sahteImza)}</code></p>
      </div>
      <button type="button" className="cip" onClick={gonder}>Sunuculara gönder</button>
      {yanit && (
        <div className="sf-izgara">
          <p className={`sf-sonuc ${yanit.naif ? "sf-kotu" : ""}`}>
            <strong>SHA-256(gizli ‖ mesaj) sunucusu:</strong>{" "}
            {yanit.naif ? `imza geçerli! İstek kabul edildi, rol = ${yanit.rol}.` : "imza geçersiz. Uzunluk tahminin tutmadı; bir sonrakini dene."}
          </p>
          <p className="sf-sonuc sf-iyi"><strong>HMAC sunucusu:</strong> {yanit.hmac ? "kabul etti (beklenmedik)" : "imza geçersiz. HMAC'te özet iç durumu ele vermez; uzatma işe yaramaz."}</p>
        </div>
      )}
    </div>
  );
}

// ---------------- G-S8-02: HMAC adımları ----------------

export function HmacAdimlari() {
  const [anahtar, setAnahtar] = useState("gizli-anahtar");
  const [mesaj, setMesaj] = useState("tutar=100&alici=ali");
  const [gercek, setGercek] = useState<string | null>(null);
  const k = metindenBayt(anahtar);
  const m = metindenBayt(mesaj);
  const k0 = new Uint8Array(64);
  k0.set(k.length > 64 ? sha256Oyuncak(k) : k);
  const ki = k0.map((x) => x ^ 0x36);
  const ko = k0.map((x) => x ^ 0x5c);
  const ic = sha256Oyuncak(new Uint8Array([...ki, ...m]));
  const dis = sha256Oyuncak(new Uint8Array([...ko, ...ic]));
  useEffect(() => {
    let iptal = false;
    hmacSha256(metindenBayt(anahtar), metindenBayt(mesaj)).then((h) => !iptal && setGercek(hex(h)));
    return () => {
      iptal = true;
    };
  }, [anahtar, mesaj]);
  const satir = (ad: string, deger: string, aciklama: string) => (
    <tr>
      <th>{ad}</th>
      <td><code>{deger}</code><div className="sf-not">{aciklama}</div></td>
    </tr>
  );
  return (
    <div className="sf">
      <div className="sf-ust">
        <div className="sf-satir">
          <label>Anahtar <input type="text" value={anahtar} onChange={(e) => setAnahtar(e.target.value)} /></label>
          <label>Mesaj <input type="text" value={mesaj} onChange={(e) => setMesaj(e.target.value)} /></label>
        </div>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-tablo-sar">
        <table className="sf-tablo sf-hmac">
          <tbody>
            {satir("K₀", `${hex(k0.slice(0, 20))}…`, k.length > 64 ? "Anahtar 64 bayttan uzun, önce hash'lendi; sonra 64 bayta sıfırla tamamlandı." : "Anahtar 64 bayta sıfırla tamamlandı.")}
            {satir("K₀ ⊕ ipad", `${hex(ki.slice(0, 20))}…`, "Her bayt 0x36 ile XOR'landı.")}
            {satir("İç özet", hex(ic), "SHA-256((K₀ ⊕ ipad) ‖ mesaj)")}
            {satir("K₀ ⊕ opad", `${hex(ko.slice(0, 20))}…`, "Her bayt 0x5c ile XOR'landı.")}
            {satir("HMAC", hex(dis), "SHA-256((K₀ ⊕ opad) ‖ iç özet)")}
          </tbody>
        </table>
      </div>
      <p className="sf-sonuc">{gercek === null ? "Web Crypto ile karşılaştırılıyor…" : gercek === hex(dis) ? "Web Crypto'nun HMAC-SHA256'sı da aynı etiketi verdi ✓" : `Web Crypto farklı: ${gercek}`}</p>
    </div>
  );
}

// ---------------- G-S9-01: kaba kuvvet süre hesaplayıcı ----------------

// Tek bir üst düzey GPU için kabaca deneme hızları (saniyede; 2024 donanımı, hashcat ölçümleri
// mertebesinde). Amaç büyüklük sırasını göstermektir.
const HIZLAR: [string, string, number][] = [
  ["md5", "MD5", 1.6e11],
  ["sha256", "SHA-256", 2.2e10],
  ["pbkdf2", "PBKDF2 (600.000 yineleme)", 1.5e4],
  ["bcrypt", "bcrypt (maliyet 12)", 1.4e3],
  ["argon2", "Argon2id (19 MiB, t=2)", 1e3],
];
const ALFABELER: [string, string, number][] = [
  ["10", "Yalnız rakam", 10],
  ["26", "Küçük harf", 26],
  ["52", "Küçük ve büyük harf", 52],
  ["62", "Harf ve rakam", 62],
  ["94", "Klavyedeki her şey", 94],
];
const SALDIRGAN: [string, string, number][] = [
  ["dizustu", "Dizüstü", 0.05],
  ["gpu", "Tek GPU", 1],
  ["ciftlik", "100 GPU'luk çiftlik", 100],
];

export function sureYazi(saniye: number): string {
  if (saniye < 1) return "1 saniyeden kısa";
  const birimler: [number, string][] = [[31557600, "yıl"], [86400, "gün"], [3600, "saat"], [60, "dakika"], [1, "saniye"]];
  const yil = saniye / 31557600;
  if (yil >= 1.4e10) return `evrenin yaşının ${us(yil / 1.38e10)} katı`;
  if (yil >= 1e6) return `${us(yil)} yıl`;
  for (const [b, ad] of birimler) if (saniye >= b) return `${sayi(Math.round(saniye / b))} ${ad}`;
  return `${Math.round(saniye)} saniye`;
}

export function KabaKuvvetSure() {
  const [alfabe, setAlfabe] = useState("26");
  const [uzunluk, setUzunluk] = useState(8);
  const [algoritma, setAlgoritma] = useState("sha256");
  const [saldirgan, setSaldirgan] = useState("gpu");
  const n = ALFABELER.find((a) => a[0] === alfabe)![2];
  const hiz = HIZLAR.find((h) => h[0] === algoritma)![2] * SALDIRGAN.find((s) => s[0] === saldirgan)![2];
  const uzay = n ** uzunluk;
  const ortalama = uzay / 2 / hiz;
  const bit = uzunluk * Math.log2(n);
  const olcek = Math.min(100, Math.max(0, (Math.log10(Math.max(ortalama, 1)) / 20) * 100));
  return (
    <div className="sf">
      <div className="sf-ust">
        <Secim ad="Alfabe" secenekler={ALFABELER.map(([v, ad]) => [v, ad] as [string, string])} deger={alfabe} degis={setAlfabe} />
      </div>
      <label>Uzunluk <input type="range" min={4} max={20} value={uzunluk} onChange={(e) => setUzunluk(Number(e.target.value))} /> <strong>{uzunluk}</strong> karakter ({bit.toFixed(1)} bit)</label>
      <Secim ad="Saklama" secenekler={HIZLAR.map(([v, ad]) => [v, ad] as [string, string])} deger={algoritma} degis={setAlgoritma} />
      <Secim ad="Saldırgan" secenekler={SALDIRGAN.map(([v, ad]) => [v, ad] as [string, string])} deger={saldirgan} degis={setSaldirgan} />
      <div className="sf-cubuk" style={{ height: 14 }} aria-hidden><span style={{ width: `${olcek}%`, background: olcek > 55 ? "var(--tag-ders-text)" : "var(--warning)" }} /></div>
      <p className={`sf-sonuc ${ortalama > 3.15e9 ? "sf-iyi" : ortalama < 86400 * 30 ? "sf-kotu" : ""}`}>
        Olası parola sayısı ≈ {us(uzay, 2)}. Saniyede {us(hiz)} deneme ile ortalama kırılma süresi: <strong>{sureYazi(ortalama)}</strong>.
      </p>
      <p className="sf-not">Hızlar tek bir güncel üst düzey ekran kartı için kabaca değerlerdir; bu hesap parolanın tamamen rastgele seçildiğini varsayar. İnsanların seçtiği parolalar sözlük ve kurallarla çok daha hızlı düşer.</p>
    </div>
  );
}

// ---------------- G-S9-02: sızan veritabanı ----------------

const KULLANICILAR: [string, string][] = [
  ["ayse", "123456"], ["ali", "galatasaray"], ["zeynep", "Kv9#pLm2!xQ"], ["mehmet", "123456"], ["elif", "qwerty"], ["can", "fenerbahce"],
  ["deniz", "galatasaray"], ["ece", "sifre123"], ["burak", "123456"], ["selin", "ankara06"], ["emre", "qwerty"], ["irem", "tR7$wq0z"],
];
const SOZLUK = ["123456", "qwerty", "sifre123", "galatasaray", "fenerbahce", "besiktas", "ankara06", "password", "111111", "iloveyou"];
type Saklama = "duz" | "sha" | "tuzlu" | "pbkdf2";
const PBKDF2_YINELEME = 100_000;

export function SizanVeritabani() {
  const [saklama, setSaklama] = useState<Saklama>("sha");
  const [tuzlar] = useState(() => KULLANICILAR.map(() => rastgeleBayt(16)));
  const [satirlar, setSatirlar] = useState<string[] | null>(null);
  const [saldiri, setSaldiri] = useState<{ kirilan: Set<number>; hash: number } | null>(null);
  useEffect(() => {
    let iptal = false;
    setSatirlar(null);
    setSaldiri(null);
    (async () => {
      const y: string[] = [];
      for (const [i, [, p]] of KULLANICILAR.entries()) {
        if (saklama === "duz") y.push(p);
        else if (saklama === "sha") y.push(hex(await sha256(p)));
        else if (saklama === "tuzlu") y.push(hex(await sha256(new Uint8Array([...tuzlar[i]!, ...metindenBayt(p)]))));
        else y.push(hex(await pbkdf2(p, tuzlar[i]!, PBKDF2_YINELEME)));
      }
      if (!iptal) setSatirlar(y);
    })();
    return () => {
      iptal = true;
    };
  }, [saklama, tuzlar]);
  const renk = useMemo(() => {
    if (!satirlar) return [];
    const sayac = new Map<string, number>();
    satirlar.forEach((s) => sayac.set(s, (sayac.get(s) ?? 0) + 1));
    const tekrar = [...sayac.entries()].filter(([, n]) => n > 1).map(([s]) => s);
    return satirlar.map((s) => tekrar.indexOf(s));
  }, [satirlar]);
  const saldir = () => {
    const kirilan = new Set<number>();
    KULLANICILAR.forEach(([, p], i) => SOZLUK.includes(p) && kirilan.add(i));
    const kullanici = KULLANICILAR.length;
    const hash = saklama === "duz" ? 0 : saklama === "sha" ? SOZLUK.length : saklama === "tuzlu" ? SOZLUK.length * kullanici : SOZLUK.length * kullanici * PBKDF2_YINELEME;
    setSaldiri({ kirilan, hash });
  };
  return (
    <div className="sf">
      <div className="sf-ust">
        <Secim ad="Saklama biçimi" secenekler={[["duz", "Düz metin"], ["sha", "SHA-256"], ["tuzlu", "SHA-256 + tuz"], ["pbkdf2", "PBKDF2 + tuz"]]} deger={saklama} degis={setSaklama} />
        <Rozet tur="webcrypto" />
      </div>
      <p className="sf-not">Bir sitenin kullanıcı tablosu sızdı. Aynı renkteki satırlar aynı değeri taşıyor. {saklama === "pbkdf2" && `PBKDF2 burada ${sayi(PBKDF2_YINELEME)} yinelemeyle tarayıcında gerçekten hesaplanıyor.`}</p>
      {!satirlar ? (
        <p className="sf-not">Hesaplanıyor…</p>
      ) : (
        <div className="sf-tablo-sar">
          <table className="sf-tablo sf-mono">
            <thead><tr><th>kullanıcı</th>{(saklama === "tuzlu" || saklama === "pbkdf2") && <th>tuz</th>}<th>saklanan</th></tr></thead>
            <tbody>
              {satirlar.map((s, i) => (
                <tr key={i} className={saldiri?.kirilan.has(i) ? "sf-kirildi" : undefined}>
                  <td>{KULLANICILAR[i]![0]}</td>
                  {(saklama === "tuzlu" || saklama === "pbkdf2") && <td>{hex(tuzlar[i]!).slice(0, 8)}…</td>}
                  <td className={renk[i]! >= 0 ? `sf-tekrar sf-tekrar-${renk[i]! % 4}` : undefined}>{saklama === "duz" ? s : `${s.slice(0, 24)}…`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button type="button" className="cip" disabled={!satirlar} onClick={saldir}>{SOZLUK.length} parolalık sözlükle saldır</button>
      {saldiri && (
        <p className={`sf-sonuc ${saklama === "pbkdf2" ? "sf-iyi" : "sf-kotu"}`}>
          {saldiri.kirilan.size} / {KULLANICILAR.length} kullanıcının parolası sözlükte. Saldırganın yaptığı hash hesabı: <strong>{sayi(saldiri.hash)}</strong>.{" "}
          {saklama === "duz" && "Hiç hesap gerekmedi; parolalar zaten okunuyor."}
          {saklama === "sha" && "Sözlük bir kez hash'lendi ve bütün tabloyla eşleştirildi; aynı parolayı kullananlar birlikte düştü."}
          {saklama === "tuzlu" && "Tuz yüzünden her kullanıcı için sözlük baştan hash'lendi. Yine de SHA-256 çok hızlı: bir GPU bunu bir saniyenin milyonda birinde yapar."}
          {saklama === "pbkdf2" && "Her deneme 100.000 HMAC'e mal oldu. Gerçek bir sözlükte milyonlarca parola ve milyonlarca kullanıcı olduğunda fark yıllarla ölçülür. Zeynep ve İrem'in rastgele parolaları ise hiçbir biçimde sözlükte değil."}
        </p>
      )}
    </div>
  );
}

// ---------------- G-S9-03: PBKDF2 ölçer ----------------

const YINELEMELER = [1_000, 10_000, 100_000, 600_000, 1_000_000];

export function Pbkdf2Olcer() {
  const [yineleme, setYineleme] = useState(100_000);
  const [olcum, setOlcum] = useState<{ ms: number; ozet: string } | null>(null);
  const [calisiyor, setCalisiyor] = useState(false);
  const olc = async () => {
    setCalisiyor(true);
    const t0 = performance.now();
    const k = await pbkdf2("correct horse battery staple", metindenBayt("tuz-ornegi-1234"), yineleme);
    setOlcum({ ms: performance.now() - t0, ozet: hex(k) });
    setCalisiyor(false);
  };
  // Tek GPU kabaca saniyede 8,8 × 10^9 HMAC-SHA256 yineleme işler
  const gpu = 8.8e9 / yineleme;
  return (
    <div className="sf">
      <div className="sf-ust">
        <Secim ad="Yineleme" secenekler={YINELEMELER.map((y) => [String(y), sayi(y)] as [string, string])} deger={String(yineleme)} degis={(v) => { setYineleme(Number(v)); setOlcum(null); }} />
        <Rozet tur="webcrypto" />
      </div>
      <button type="button" className="cip" disabled={calisiyor} onClick={olc}>{calisiyor ? "Hesaplanıyor…" : "Tarayıcımda ölç"}</button>
      {olcum && (
        <p className="sf-sonuc">
          Tarayıcında bir parola özeti <strong>{olcum.ms.toFixed(0)} ms</strong> sürdü. Aynı ayarla tek bir GPU saniyede yaklaşık <strong>{sayi(Math.round(gpu))}</strong> parola dener (SHA-256'nın düz halinde bu sayı 22 milyar civarındadır).
          <br />
          <code>{olcum.ozet}</code>
        </p>
      )}
      <p className="sf-not">Web Crypto bellek-zor fonksiyonları (Argon2id, scrypt) sunmaz; tarayıcıda bunlar için WebAssembly kütüphaneleri kullanılır. Sunucu tarafında yeni sistemlerde Argon2id tercih edilir.</p>
    </div>
  );
}

// ---------------- G-S9-04: HKDF ----------------

export function HkdfTuretici() {
  const [sir] = useState(() => rastgeleBayt(32));
  const [etiketler, setEtiketler] = useState(["sifreleme", "mac", "yedek"]);
  const [anahtarlar, setAnahtarlar] = useState<string[]>([]);
  useEffect(() => {
    let iptal = false;
    Promise.all(etiketler.map((e) => hkdf(sir, new Uint8Array(32), e))).then((y) => !iptal && setAnahtarlar(y.map(hex)));
    return () => {
      iptal = true;
    };
  }, [etiketler, sir]);
  return (
    <div className="sf">
      <div className="sf-ust">
        <p className="sf-not" style={{ flex: 1 }}>Ana sır (ör. bir Diffie-Hellman sonucu): <code>{hex(sir).slice(0, 32)}…</code></p>
        <Rozet tur="webcrypto" />
      </div>
      <div className="sf-tablo-sar">
        <table className="sf-tablo">
          <thead><tr><th>info etiketi</th><th>türetilen 256 bitlik anahtar</th></tr></thead>
          <tbody>
            {etiketler.map((e, i) => (
              <tr key={i}>
                <td><input type="text" size={12} value={e} onChange={(ev) => setEtiketler(etiketler.map((x, j) => (j === i ? ev.target.value : x)))} aria-label={`${i + 1}. etiket`} /></td>
                <td><code>{anahtarlar[i] ?? "…"}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="sf-not">Bir etiketin tek harfini değiştir: o anahtar tamamen değişir, ötekiler aynı kalır. Aynı etiket her zaman aynı anahtarı verir; HKDF deterministiktir.</p>
    </div>
  );
}
