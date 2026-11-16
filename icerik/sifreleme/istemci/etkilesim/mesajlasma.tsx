// 13-14. ünitelerin etkileşimli şekilleri: Double Ratchet cırcırı, X3DH üçgeni, güvenlik
// numarası oyunu, grup anahtarı deneyi (Sender Keys ve MLS ağacı) ve metadata dedektifi.
// Anahtarlar ve şifreli değerler Web Crypto ile gerçekten üretilir (src/kripto/mesajlasma/gercek.ts).
import { useEffect, useMemo, useState } from "react";
import { Rozet } from "../../../../src/kripto/Rozet";
import { hex } from "../../../../src/kripto/bayt";
import { acikAnahtarBayt, degisimAnahtari, hkdf, ortakSir, sha256 } from "../../../../src/kripto/webcrypto";
import { gercekOturum, type GercekOturum } from "../../../../src/kripto/mesajlasma/gercek";
import type { Mesaj } from "../../../../src/kripto/mesajlasma/model";
import { Secim } from "./temeller";

const kisa = (s: string | undefined, n = 8) => (!s ? "" : `${s.slice(0, n)}…`);

// ---------------- G-S13-01: Double Ratchet cırcırı ----------------

function Disli({ aci, dis, r, etiket, renk }: { aci: number; dis: number; r: number; etiket: string; renk: string }) {
  const yol = useMemo(() => {
    const p: string[] = [];
    for (let i = 0; i < dis * 2; i++) {
      const a = (Math.PI * i) / dis;
      const rr = i % 2 ? r : r + 7;
      p.push(`${(Math.cos(a) * rr).toFixed(1)},${(Math.sin(a) * rr).toFixed(1)}`);
    }
    return `M${p.join("L")}Z`;
  }, [dis, r]);
  return (
    <g>
      <g style={{ transform: `rotate(${aci}deg)`, transition: "transform .5s" }}>
        <path d={yol} className="sf-disli" style={{ stroke: renk }} />
        <line x1={0} y1={0} x2={r - 4} y2={0} className="sf-disli-kol" style={{ stroke: renk }} />
      </g>
      <text y={r + 24} textAnchor="middle" className="sf-egri-yazi">
        {etiket}
      </text>
    </g>
  );
}

export function Circir() {
  const [akis, setAkis] = useState<("ayse" | "mert")[]>(["ayse"]);
  const [oturum, setOturum] = useState<GercekOturum | null>(null);
  const mesajlar: Mesaj[] = useMemo(() => akis.map((g, no) => ({ no, gonderen: g, metin: `${no + 1}. mesaj`, gun: 0 })), [akis]);
  useEffect(() => {
    let iptal = false;
    gercekOturum("e2ee-ratchet", mesajlar).then((o) => !iptal && setOturum(o));
    return () => {
      iptal = true;
    };
  }, [mesajlar]);
  const dhSayisi = oturum ? oturum.mesajlar.filter((m) => m.dhAcik).length : 0;
  const son = oturum?.mesajlar.at(-1);
  const sonDh = son?.dhAcik !== undefined;
  return (
    <div className="sf">
      <div className="sf-ust">
        <div className="sf-satir">
          <button type="button" className="cip" onClick={() => setAkis([...akis, "ayse"])}>
            Ayşe yazar
          </button>
          <button type="button" className="cip" onClick={() => setAkis([...akis, "mert"])}>
            Mert yazar
          </button>
          <button type="button" className="cip" onClick={() => setAkis(["ayse"])}>
            Baştan
          </button>
        </div>
        <Rozet tur="webcrypto" />
      </div>
      <svg viewBox="0 0 380 150" className="sf-circir" role="img" aria-label={`${dhSayisi} DH adımı, ${akis.length} simetrik adım`}>
        <g transform="translate(95 62)">
          <Disli aci={dhSayisi * 40} dis={9} r={38} etiket={`DH cırcırı: ${dhSayisi} adım`} renk="var(--warning)" />
        </g>
        <g transform="translate(255 62)">
          <Disli aci={akis.length * 30} dis={12} r={38} etiket={`Simetrik cırcır: ${akis.length} adım`} renk="var(--link)" />
        </g>
      </svg>
      <p className={`sf-sonuc ${sonDh ? "" : "sf-iyi"}`}>
        {sonDh
          ? `Sıra ${akis.at(-1) === "ayse" ? "Ayşe'ye" : "Mert'e"} geçti: yeni bir DH anahtar çifti üretildi, kök anahtar ilerledi ve yeni bir zincir başladı. Önceki zinciri çalan biri bu mesajı açamaz.`
          : "Aynı kişi yazmaya devam ediyor: zincir anahtarı HMAC ile bir diş döndü, eski zincir anahtarı silindi."}
      </p>
      <div className="sf-tablo-sar">
        <table className="sf-tablo">
          <thead>
            <tr>
              <th>#</th>
              <th>Gönderen</th>
              <th>Kök anahtar</th>
              <th>Zincir anahtarı</th>
              <th>Mesaj anahtarı</th>
            </tr>
          </thead>
          <tbody>
            {oturum?.mesajlar.map((m, i) => {
              const silindi = i < akis.length - 1;
              return (
                <tr key={i} className={i === akis.length - 1 ? "sf-vurgu" : silindi ? "sf-silindi" : ""}>
                  <td>{i + 1}</td>
                  <td>
                    {akis[i] === "ayse" ? "Ayşe" : "Mert"}
                    {m.dhAcik ? " · DH↻" : ""}
                  </td>
                  <td className="sf-mono">{kisa(m.kokAnahtari)}</td>
                  <td className="sf-mono">{kisa(m.zincirAnahtari)}</td>
                  <td className="sf-mono">{silindi ? "silindi" : kisa(m.mesajAnahtari)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="sf-not">Gerçek X25519, HKDF, HMAC ve AES-GCM; başlık şifreleme ve X3DH ayrıntıları sadeleştirildi. Kullanılan mesaj anahtarları silinir: ileri gizlilik buradan gelir.</p>
    </div>
  );
}

// ---------------- G-S13-02: X3DH üçgeni ----------------

const X3DH_HESAPLAR = [
  { ad: "DH1", a: "IK_A", b: "SPK_M", ne: "Ayşe'nin kimlik anahtarı girer: sırrı yalnız gerçek Ayşe hesaplayabilir (Mert için Ayşe'nin kimliğini doğrular)." },
  { ad: "DH2", a: "EK_A", b: "IK_M", ne: "Mert'in kimlik anahtarı girer: sırrı yalnız gerçek Mert hesaplayabilir (Ayşe için Mert'in kimliğini doğrular)." },
  { ad: "DH3", a: "EK_A", b: "SPK_M", ne: "Geçici anahtar ile orta ömürlü imzalı ön anahtar: kimlik anahtarları sonradan çalınsa bile sır korunur (ileri gizlilik)." },
  { ad: "DH4", a: "EK_A", b: "OPK_M", ne: "Tek kullanımlık ön anahtar: imzalı ön anahtar da çalınsa bu oturum açılmaz; tekrar oynatmayı zorlaştırır." },
];
const X3DH_KONUM: Record<string, [number, number]> = { IK_A: [70, 50], EK_A: [70, 160], IK_M: [290, 30], SPK_M: [290, 105], OPK_M: [290, 180] };

export function X3dhUcgeni() {
  const [opk, setOpk] = useState(true);
  const [secili, setSecili] = useState(0);
  const [degerler, setDegerler] = useState<{ dh: string[]; sk: string } | null>(null);
  useEffect(() => {
    let iptal = false;
    (async () => {
      const k: Record<string, CryptoKeyPair> = {};
      let tur: Awaited<ReturnType<typeof degisimAnahtari>>["tur"] = "X25519";
      for (const ad of Object.keys(X3DH_KONUM)) {
        const x = await degisimAnahtari();
        k[ad] = x.cift;
        tur = x.tur;
      }
      const dh = await Promise.all(X3DH_HESAPLAR.map((h) => ortakSir(tur, k[h.a]!.privateKey, k[h.b]!.publicKey)));
      const kullan = opk ? dh : dh.slice(0, 3);
      const birlesik = new Uint8Array(kullan.length * 32);
      kullan.forEach((d, i) => birlesik.set(d, i * 32));
      const sk = await hkdf(birlesik, new Uint8Array(32), "X3DH");
      // Mert tarafı aynı sırrı kendi özel anahtarlarıyla bulur
      const mert = await Promise.all(X3DH_HESAPLAR.map((h) => ortakSir(tur, k[h.b]!.privateKey, k[h.a]!.publicKey)));
      if (mert.some((d, i) => hex(d) !== hex(dh[i]!))) throw new Error("X3DH tutarsız");
      if (!iptal) setDegerler({ dh: dh.map(hex), sk: hex(sk) });
    })();
    return () => {
      iptal = true;
    };
  }, [opk]);
  const hesaplar = opk ? X3DH_HESAPLAR : X3DH_HESAPLAR.slice(0, 3);
  const sira = Math.min(secili, hesaplar.length - 1);
  const h = hesaplar[sira]!;
  return (
    <div className="sf">
      <div className="sf-ust">
        <label>
          <input type="checkbox" checked={opk} onChange={(e) => setOpk(e.target.checked)} /> Tek kullanımlık ön anahtar var
        </label>
        <Rozet tur="webcrypto" />
      </div>
      <svg viewBox="0 0 380 210" className="sf-circir" role="img" aria-label="X3DH'deki Diffie-Hellman hesapları">
        <text x={70} y={14} textAnchor="middle" className="sf-egri-yazi">Ayşe</text>
        <text x={290} y={14} textAnchor="middle" className="sf-egri-yazi">Mert (sunucudaki paket)</text>
        {hesaplar.map((x, i) => {
          const [x1, y1] = X3DH_KONUM[x.a]!;
          const [x2, y2] = X3DH_KONUM[x.b]!;
          return (
            <g key={x.ad} onClick={() => setSecili(i)} style={{ cursor: "pointer" }}>
              <line x1={x1 + 30} y1={y1} x2={x2 - 32} y2={y2} className={i === sira ? "sf-x3dh-cizgi sf-x3dh-secili" : "sf-x3dh-cizgi"} />
              <text x={x1 + (x2 - x1) * 0.72} y={y1 + (y2 - y1) * 0.72 - 4} textAnchor="middle" className="sf-egri-yazi">
                {x.ad}
              </text>
            </g>
          );
        })}
        {Object.entries(X3DH_KONUM).map(([ad, [x, y]]) =>
          !opk && ad === "OPK_M" ? null : (
            <g key={ad}>
              <rect x={x - 32} y={y - 13} width={64} height={26} rx={5} className="sf-x3dh-kutu" />
              <text x={x} y={y + 4} textAnchor="middle" className="sf-egri-yazi">
                {ad}
              </text>
            </g>
          ),
        )}
      </svg>
      <Secim ad="DH hesabı" secenekler={hesaplar.map((x, i) => [String(i), x.ad] as [string, string])} deger={String(sira)} degis={(v) => setSecili(Number(v))} />
      <p className="sf-sonuc">
        <strong>
          {h.ad} = DH({h.a}, {h.b})
        </strong>
        : {h.ne}
        {degerler && <span className="sf-mono"> {kisa(degerler.dh[sira], 16)}</span>}
      </p>
      {degerler && (
        <p className="sf-not">
          Ortak sır SK = KDF({hesaplar.map((x) => x.ad).join(" ‖ ")}) = <span className="sf-mono">{kisa(degerler.sk, 16)}</span>. Mert aynı dört değeri kendi özel anahtarlarıyla hesapladı ve aynı sırra ulaştı. IK: kimlik, EK: geçici, SPK: imzalı ön anahtar, OPK: tek kullanımlık ön anahtar.
        </p>
      )}
    </div>
  );
}

// ---------------- G-S13-03: güvenlik numarası oyunu ----------------

// Sadeleştirilmiş güvenlik numarası: iki kimlik anahtarının SHA-256'sından 5'er basamaklı 12 grup
async function guvenlikNumarasi(a: Uint8Array, b: Uint8Array): Promise<string[]> {
  const [x, y] = [hex(a), hex(b)].sort();
  const ozet = await sha256(`${x}|${y}`);
  const ozet2 = await sha256(ozet);
  const tum = new Uint8Array([...ozet, ...ozet2]);
  const gruplar: string[] = [];
  for (let i = 0; i < 12; i++) {
    const v = ((tum[i * 5]! << 24) | (tum[i * 5 + 1]! << 16) | (tum[i * 5 + 2]! << 8) | tum[i * 5 + 3]!) >>> 0;
    gruplar.push(String(v % 100000).padStart(5, "0"));
  }
  return gruplar;
}

export function GuvenlikNumarasi() {
  const [tur, setTur] = useState(0);
  const [durum, setDurum] = useState<{ ayse: string[]; mert: string[]; mitm: boolean } | null>(null);
  const [cevap, setCevap] = useState<boolean | null>(null);
  const [puan, setPuan] = useState({ dogru: 0, toplam: 0 });
  useEffect(() => {
    let iptal = false;
    (async () => {
      const yeni = async () => acikAnahtarBayt((await degisimAnahtari()).cift.publicKey);
      const [a, b, s] = [await yeni(), await yeni(), await yeni()];
      const mitm = Math.random() < 0.5;
      // Araya giren sunucu, Ayşe'ye kendi anahtarını Mert'inmiş gibi, Mert'e de Ayşe'ninmiş gibi verir
      const ayse = await guvenlikNumarasi(a, mitm ? s : b);
      const mert = await guvenlikNumarasi(mitm ? s : a, b);
      if (mitm) {
        // Çoğu basamak farklıdır; oyunu zorlaştırmak için ilk ve son grubu aynı göster
        mert[0] = ayse[0]!;
        mert[11] = ayse[11]!;
      }
      if (!iptal) {
        setDurum({ ayse, mert, mitm });
        setCevap(null);
      }
    })();
    return () => {
      iptal = true;
    };
  }, [tur]);
  const yanitla = (araGirmis: boolean) => {
    if (!durum || cevap !== null) return;
    setCevap(araGirmis);
    setPuan((p) => ({ dogru: p.dogru + (araGirmis === durum.mitm ? 1 : 0), toplam: p.toplam + 1 }));
  };
  const Telefon = ({ ad, n }: { ad: string; n: string[] }) => (
    <div className="sf-kutu sf-telefon">
      <h4>{ad} telefonu</h4>
      <div className="sf-numara">
        {n.map((g, i) => (
          <span key={i} className="sf-mono">
            {g}
          </span>
        ))}
      </div>
    </div>
  );
  return (
    <div className="sf">
      <div className="sf-ust">
        <span>
          Puan: {puan.dogru} / {puan.toplam}
        </span>
        <Rozet tur="webcrypto" />
      </div>
      <p className="sf-not">Ayşe ile Mert kafede yan yana oturuyor ve numaralarını karşılaştırıyor. Sunucu araya girmiş mi?</p>
      {durum ? (
        <div className="sf-izgara">
          <Telefon ad="Ayşe'nin" n={durum.ayse} />
          <Telefon ad="Mert'in" n={durum.mert} />
        </div>
      ) : (
        <p>Anahtarlar üretiliyor…</p>
      )}
      <div className="sf-satir">
        <button type="button" className="cip" disabled={!durum || cevap !== null} onClick={() => yanitla(false)}>
          Numaralar aynı, güvenli
        </button>
        <button type="button" className="cip" disabled={!durum || cevap !== null} onClick={() => yanitla(true)}>
          Farklı, biri araya girmiş
        </button>
        <button type="button" className="cip" onClick={() => setTur(tur + 1)}>
          Yeni tur
        </button>
      </div>
      {durum && cevap !== null && (
        <p className={`sf-sonuc ${cevap === durum.mitm ? "sf-iyi" : "sf-kotu"}`}>
          {cevap === durum.mitm ? "Doğru. " : "Yanlış. "}
          {durum.mitm
            ? "Sunucu iki tarafa da kendi anahtarını vermişti; numaralar yalnız baştaki ve sondaki grupta aynıydı. Yalnız ilk ve son birkaç haneye bakmak yetmez; QR kodu taramak bütün numarayı karşılaştırır."
            : "Numaralar baştan sona aynı: iki taraf da karşısındakinin gerçek kimlik anahtarını görüyor."}
        </p>
      )}
      <p className="sf-not">Numara iki kimlik anahtarından SHA-256 ile türetildi (Signal'deki yöntem sadeleştirildi). Anahtarlar her turda Web Crypto ile yeniden üretilir.</p>
    </div>
  );
}

// ---------------- G-S14-01: grup anahtarı deneyi ----------------

export function GrupAnahtari() {
  const [n, setN] = useState(8);
  const [cikan, setCikan] = useState<number | null>(null);
  const derinlik = Math.log2(n);
  // MLS: çıkan üyenin yerine kalan bir üye (komşusu) yolunu günceller; yol sırları kardeş alt ağaçlara şifrelenir
  const guncelleyen = cikan === null ? null : cikan ^ 1;
  const yol = useMemo(() => {
    if (guncelleyen === null) return new Set<string>();
    const s = new Set<string>();
    let i = guncelleyen;
    for (let d = derinlik; d >= 0; d--) {
      s.add(`${d}-${i}`);
      i >>= 1;
    }
    return s;
  }, [guncelleyen, derinlik]);
  const senderKeys = (n - 1) * (n - 2);
  const mls = derinlik;
  const EN = 380;
  const dugum = (d: number, i: number) => {
    const sayi = 2 ** d;
    return { x: ((i + 0.5) / sayi) * EN, y: 20 + d * 42 };
  };
  const dugumler: { d: number; i: number }[] = [];
  for (let d = 0; d <= derinlik; d++) for (let i = 0; i < 2 ** d; i++) dugumler.push({ d, i });
  return (
    <div className="sf">
      <div className="sf-ust">
        <Secim ad="Grup boyu" secenekler={[4, 8, 16].map((x) => [String(x), `${x} üye`] as [string, string])} deger={String(n)} degis={(v) => { setN(Number(v)); setCikan(null); }} />
        <span className="sf-not">Bir yaprağa tıkla: o üye gruptan çıkarılır.</span>
      </div>
      <svg viewBox={`0 0 ${EN} ${30 + derinlik * 42 + 20}`} className="sf-circir" role="img" aria-label={`${n} üyeli MLS ağacı`}>
        {dugumler
          .filter((x) => x.d > 0)
          .map(({ d, i }) => {
            const a = dugum(d, i);
            const b = dugum(d - 1, i >> 1);
            return <line key={`c${d}-${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} className={yol.has(`${d}-${i}`) && yol.has(`${d - 1}-${i >> 1}`) ? "sf-x3dh-cizgi sf-x3dh-secili" : "sf-x3dh-cizgi"} />;
          })}
        {dugumler.map(({ d, i }) => {
          const { x, y } = dugum(d, i);
          const yaprak = d === derinlik;
          const cikti = yaprak && i === cikan;
          return (
            <g key={`${d}-${i}`} onClick={() => yaprak && setCikan(i)} style={{ cursor: yaprak ? "pointer" : "default" }}>
              <circle cx={x} cy={y} r={yaprak ? 9 : 7} className={cikti ? "sf-dugum-cikan" : yol.has(`${d}-${i}`) ? "sf-dugum-yol" : "sf-dugum"} />
              {yaprak && n <= 8 && (
                <text x={x} y={y + 4} textAnchor="middle" className="sf-egri-yazi" style={{ fontSize: 10 }}>
                  {String.fromCharCode(65 + i)}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <div className="sf-izgara">
        <div className="sf-kutu">
          <h4>Sender Keys</h4>
          <span>
            Kalan {n - 1} üyenin her biri yeni gönderen anahtarını öteki {n - 2} kişiye ikili oturumla yollar: <strong>{senderKeys}</strong> anahtar mesajı.
          </span>
        </div>
        <div className="sf-kutu">
          <h4>MLS (TreeKEM)</h4>
          <span>
            Bir üye kendi yolundaki {mls} düğümün sırrını yeniler ve her birini kardeş alt ağaca bir kez şifreler: <strong>{mls}</strong> şifreleme, tek bir commit mesajı.
          </span>
        </div>
      </div>
      <p className="sf-not">
        {cikan === null
          ? "Ağacın her iç düğümünün sırrını yalnız altındaki üyeler bilir; kök sırrından grup anahtarı türetilir."
          : `${String.fromCharCode(65 + cikan)} çıktı. Turuncu yol yenilenen düğümler; çıkan üye bunların hiçbirini bilmez. 1000 kişilik grupta fark: Sender Keys yaklaşık 1 milyon, MLS yaklaşık 10.`}
      </p>
    </div>
  );
}

// ---------------- G-S14-02: metadata dedektifi ----------------

interface Kayit {
  kim: string;
  kime: string;
  saat: string;
  boy: number;
}

const VAKALAR: { baslik: string; kayitlar: Kayit[]; soru: string; secenekler: string[]; dogru: number; aciklama: string }[] = [
  {
    baslik: "Gece yarısı",
    kayitlar: [
      { kim: "Deniz", kime: "Kadın doğum kliniği", saat: "23:41", boy: 180 },
      { kim: "Kadın doğum kliniği", kime: "Deniz", saat: "23:52", boy: 420 },
      { kim: "Deniz", kime: "Nöbetçi eczane", saat: "00:05", boy: 90 },
      { kim: "Deniz", kime: "Annesi", saat: "00:20", boy: 1200 },
      { kim: "Annesi", kime: "Deniz", saat: "00:21", boy: 60 },
    ],
    soru: "İçeriği hiç görmeden en olası çıkarım hangisi?",
    secenekler: ["Deniz sağlıkla ilgili hassas bir durumla ilgileniyor", "Deniz yeni bir iş buldu", "Deniz tatile çıkıyor", "Kayıtlardan hiçbir şey anlaşılmaz"],
    dogru: 0,
    aciklama: "Kim, kime ve ne zaman: gece yarısı bir klinik, ardından eczane ve uzun bir mesajla aile. İçerik şifreli olsa da hikâye ortada.",
  },
  {
    baslik: "Kaynak",
    kayitlar: [
      { kim: "Bilinmeyen numara", kime: "Gazeteci Ece", saat: "10:02", boy: 2400000 },
      { kim: "Gazeteci Ece", kime: "Bakanlık basın ofisi", saat: "10:40", boy: 300 },
      { kim: "Bilinmeyen numara", kime: "Gazeteci Ece", saat: "14:15", boy: 150 },
      { kim: "Bakanlık çalışanı Kaan", kime: "Bilinmeyen numara", saat: "14:14", boy: 150 },
    ],
    soru: "Bilinmeyen numarayı kullanan kim olabilir?",
    secenekler: ["Bakanlık çalışanı Kaan", "Gazeteci Ece", "Bakanlık basın ofisi", "Hiçbir ipucu yok"],
    dogru: 0,
    aciklama: "Kaan'ın bilinmeyen numaraya gönderdiği mesajla, o numaranın bir dakika sonra Ece'ye gönderdiği mesaj aynı boyda. Zaman ve boy ilişkilendirmesi, gizli gönderen açık olsa bile kaynağı ele verebilir; dolgu ve gecikme bunu zorlaştırır.",
  },
  {
    baslik: "Ofis",
    kayitlar: [
      { kim: "Ali", kime: "Rakip şirketin İK müdürü", saat: "12:10", boy: 350 },
      { kim: "Rakip şirketin İK müdürü", kime: "Ali", saat: "12:30", boy: 800 },
      { kim: "Ali", kime: "Rakip şirketin İK müdürü", saat: "18:05", boy: 950000 },
      { kim: "Ali", kime: "Kendi yöneticisi", saat: "18:30", boy: 120 },
    ],
    soru: "En olası hikâye hangisi?",
    secenekler: ["Ali başka bir işe başvuruyor ve özgeçmişini gönderdi", "Ali yöneticisine terfi istedi", "Ali rakibe şikâyette bulundu", "Kayıtlardan hiçbir şey anlaşılmaz"],
    dogru: 0,
    aciklama: "Öğle arasında rakip şirketin İK'sıyla yazışma, akşam yaklaşık 1 MB'lık bir dosya (bir PDF özgeçmiş boyunda). İçerik değil, örüntü konuşuyor.",
  },
];

const boyYazi = (b: number) => (b >= 1e6 ? `${(b / 1e6).toFixed(1).replace(".", ",")} MB` : b >= 1000 ? `${Math.round(b / 1000)} KB` : `${b} bayt`);

export function MetadataDedektifi() {
  const [v, setV] = useState(0);
  const [secim, setSecim] = useState<number | null>(null);
  const [gizli, setGizli] = useState(false);
  const vaka = VAKALAR[v]!;
  return (
    <div className="sf">
      <div className="sf-ust">
        <Secim ad="Vaka" secenekler={VAKALAR.map((x, i) => [String(i), x.baslik] as [string, string])} deger={String(v)} degis={(x) => { setV(Number(x)); setSecim(null); }} />
        <label>
          <input type="checkbox" checked={gizli} onChange={(e) => setGizli(e.target.checked)} /> Gizli gönderen açık
        </label>
      </div>
      <p className="sf-not">Sunucunun kayıtları. Bütün mesajlar uçtan uca şifreli; içerik yok.</p>
      <div className="sf-tablo-sar">
        <table className="sf-tablo">
          <thead>
            <tr>
              <th>Gönderen</th>
              <th>Alıcı</th>
              <th>Saat</th>
              <th>Boy</th>
            </tr>
          </thead>
          <tbody>
            {vaka.kayitlar.map((k, i) => (
              <tr key={i}>
                <td>{gizli ? "?" : k.kim}</td>
                <td>{k.kime}</td>
                <td>{k.saat}</td>
                <td>{boyYazi(k.boy)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        <strong>{vaka.soru}</strong>
      </p>
      <div className="sf-satir">
        {vaka.secenekler.map((s, i) => (
          <button key={i} type="button" className="cip" aria-pressed={secim === i} onClick={() => setSecim(i)}>
            {s}
          </button>
        ))}
      </div>
      {secim !== null && (
        <p className={`sf-sonuc ${secim === vaka.dogru ? "sf-iyi" : "sf-kotu"}`}>
          {secim === vaka.dogru ? "Evet. " : "Kayıtlar başka bir şey söylüyor. "}
          {vaka.aciklama}
          {gizli && " Gizli gönderen açıkken bile alıcı, saat ve boy yetti."}
        </p>
      )}
    </div>
  );
}
