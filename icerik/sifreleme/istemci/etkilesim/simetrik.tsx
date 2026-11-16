// 5. ve 6. ünitelerin etkileşimli şekilleri: XOR tuvali (iki zamanlı pad), AES tur
// gezgini, ECB maskot deneyi, mod oynatıcısı (hata yayılımı), bit çevirme (CTR ile GCM)
// ve ChaCha20 çeyrek turu. Oyuncak AES ve ChaCha20 src/kripto/oyuncak'tadır; bit çevirme
// deneyi Web Crypto'yla gerçek AES-CTR ve AES-GCM kullanır. Hiçbiri sunucuya istek atmaz.
import { useEffect, useMemo, useRef, useState } from "react";
import { Rozet } from "../../../../src/kripto/Rozet";
import { hex, hextenBayt, metindenBayt } from "../../../../src/kripto/bayt";
import { aesBlok, anahtarGenislet, type IzAdimi } from "../../../../src/kripto/oyuncak/aes";
import { cbcCoz, cbcSifrele, ctr, ecbCoz, ecbSifrele } from "../../../../src/kripto/oyuncak/modlar";
import { ceyrekTur } from "../../../../src/kripto/oyuncak/chacha";
import { aesAnahtariAl, aesCtr, aesGcmCoz, aesGcmSifrele, aesTekBlok, rastgeleBayt } from "../../../../src/kripto/webcrypto";
import { Secim } from "./temeller";

const h2 = (x: number) => x.toString(16).padStart(2, "0");
const h8 = (x: number) => (x >>> 0).toString(16).padStart(8, "0");

// ---------------- Ortak: bit görüntüsü (1 bitlik piksel dizisi) ----------------

const BG = 120; // genişlik
const BY = 64; // yükseklik

// Birinci yazı üst satıra, ikincisi alt satıra çizilir; XOR'landıklarında üst üste binmeden
// ikisi de okunur.
function yazidanBitler(yazi: string, satir: 0 | 1): Uint8Array {
  const c = document.createElement("canvas");
  c.width = BG;
  c.height = BY;
  const x = c.getContext("2d");
  const y = new Uint8Array(BG * BY);
  if (!x) return y;
  x.fillStyle = "#000";
  x.font = "bold 24px system-ui, sans-serif";
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.fillText(yazi.slice(0, 8), BG / 2, satir === 0 ? 18 : 46, BG - 6);
  const v = x.getImageData(0, 0, BG, BY).data;
  for (let i = 0; i < y.length; i++) y[i] = v[4 * i + 3]! > 110 ? 1 : 0;
  return y;
}

function BitTuval({ bitler, baslik, vurgu }: { bitler: Uint8Array; baslik: string; vurgu?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const x = ref.current?.getContext("2d");
    if (!x) return;
    const img = x.createImageData(BG, BY);
    bitler.forEach((b, i) => {
      const v = b ? 20 : 245;
      img.data.set([v, v, v, 255], 4 * i);
    });
    x.putImageData(img, 0, 0);
  }, [bitler]);
  return (
    <figure className={`sf-tuval${vurgu ? " sf-tuval-vurgu" : ""}`}>
      <canvas ref={ref} width={BG} height={BY} aria-label={baslik} />
      <figcaption>{baslik}</figcaption>
    </figure>
  );
}

const xorBit = (a: Uint8Array, b: Uint8Array) => a.map((x, i) => x ^ b[i]!);

// ---------------- G-S5-01: XOR tuvali ----------------

export function XorTuvali() {
  const [y1, setY1] = useState("SALI");
  const [y2, setY2] = useState("15:00");
  const [anahtar, setAnahtar] = useState(() => rastgeleBayt(BG * BY).map((x) => x & 1));
  const [acik, setAcik] = useState(false);
  const [a, b] = useMemo(() => [yazidanBitler(y1, 0), yazidanBitler(y2, 1)], [y1, y2]);
  const c1 = useMemo(() => xorBit(a, anahtar), [a, anahtar]);
  const c2 = useMemo(() => xorBit(b, anahtar), [b, anahtar]);
  return (
    <div className="sf">
      <div className="sf-ust">
        <div className="sf-satir">
          <label>1. görüntü <input type="text" value={y1} maxLength={8} size={8} onChange={(e) => setY1(e.target.value)} /></label>
          <label>2. görüntü <input type="text" value={y2} maxLength={8} size={8} onChange={(e) => setY2(e.target.value)} /></label>
        </div>
        <Rozet tur="oyuncak" />
      </div>
      <p className="sf-not">Her piksel bir bittir. Anahtar, tarayıcının rastgele üretecinden gelen piksel kadar bittir; iki görüntü de <strong>aynı</strong> anahtarla XOR'lanıyor.</p>
      <div className="sf-tuvaller">
        <BitTuval bitler={a} baslik="1. açık görüntü" />
        <BitTuval bitler={b} baslik="2. açık görüntü" />
        <BitTuval bitler={anahtar} baslik="Anahtar (rastgele)" />
        <BitTuval bitler={c1} baslik="1. şifreli = 1 ⊕ anahtar" />
        <BitTuval bitler={c2} baslik="2. şifreli = 2 ⊕ anahtar" />
        {acik && <BitTuval bitler={xorBit(c1, c2)} baslik="1. şifreli ⊕ 2. şifreli" vurgu />}
      </div>
      <div className="sf-satir">
        <button type="button" className="cip" aria-pressed={acik} onClick={() => setAcik(!acik)}>
          {acik ? "Gizle" : "İki şifreli görüntüyü XOR'la"}
        </button>
        <button type="button" className="cip" onClick={() => setAnahtar(rastgeleBayt(BG * BY).map((x) => x & 1))}>Yeni anahtar</button>
      </div>
      <p className={`sf-sonuc${acik ? " sf-kotu" : ""}`}>
        {acik
          ? "Anahtar yok oldu: (1 ⊕ K) ⊕ (2 ⊕ K) = 1 ⊕ 2. İki görüntü üst üste bindi ve ikisi de okunuyor. Saldırgan anahtarı hiç bilmeden bu sonuca ulaştı."
          : "Şifreli görüntülerin her biri tek başına saf gürültü; one-time pad doğru kullanıldığında kusursuzdur. Peki anahtar iki kez kullanılırsa?"}
      </p>
    </div>
  );
}

// ---------------- G-S5-02: AES tur gezgini ----------------

const ADIM_ACIKLAMA: Record<IzAdimi["adim"], string> = {
  "Başlangıç": "Açık metnin 16 baytı 4×4 matrise sütun sütun yerleşir.",
  AddRoundKey: "Durum, o turun anahtarıyla bayt bayt XOR'lanır. Anahtar yalnız bu adımda girer.",
  SubBytes: "Her bayt S-kutusundan geçer: GF(2⁸)'de tersi alınır, sonra afin dönüşüm. Tek doğrusal olmayan adım (karıştırma).",
  ShiftRows: "Satır r, r bayt sola döner. Bir sütunun baytları dört farklı sütuna dağılır (yayılma).",
  MixColumns: "Her sütun GF(2⁸)'de sabit bir matrisle çarpılır; bir baytın değişmesi sütunun dört baytını da değiştirir (yayılma).",
};

function DurumIzgarasi({ durum, farkli, tik, secili }: { durum: number[]; farkli?: boolean[]; tik?: (i: number) => void; secili?: number }) {
  // durum[r + 4c]: satır r, sütun c
  return (
    <div className="sf-durum" role="grid">
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => {
          const i = r + 4 * c;
          const sinif = `sf-hucre${farkli?.[i] ? " sf-hucre-farkli" : ""}${secili === i ? " sf-hucre-secili" : ""}`;
          return tik ? (
            <button key={i} type="button" className={sinif} onClick={() => tik(i)} title={`Bayt ${i} (satır ${r}, sütun ${c})`}>
              {h2(durum[i]!)}
            </button>
          ) : (
            <span key={i} className={sinif}>{h2(durum[i]!)}</span>
          );
        }),
      )}
    </div>
  );
}

const hexAl = (s: string, uzunluklar: number[]) => {
  try {
    const b = hextenBayt(s);
    return uzunluklar.includes(b.length) ? b : null;
  } catch {
    return null;
  }
};

export function AesTurGezgini() {
  const [acikYazi, setAcikYazi] = useState("00112233445566778899aabbccddeeff");
  const [anahtarYazi, setAnahtarYazi] = useState("000102030405060708090a0b0c0d0e0f");
  const [adim, setAdim] = useState(0);
  const [degisen, setDegisen] = useState<number | null>(null);
  const [webcrypto, setWebcrypto] = useState<string | null>(null);
  const acik = hexAl(acikYazi, [16]);
  const anahtar = hexAl(anahtarYazi, [16, 24, 32]);
  const sonuc = useMemo(() => {
    if (!acik || !anahtar) return null;
    const k = anahtarGenislet(anahtar);
    const iz = aesBlok(acik, k).iz;
    const iz2 = degisen === null ? null : aesBlok(acik.map((x, i) => (i === degisen ? x ^ 1 : x)), k).iz;
    return { k, iz, iz2 };
  }, [acikYazi, anahtarYazi, degisen]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    setWebcrypto(null);
    if (!acik || !anahtar) return;
    let iptal = false;
    aesTekBlok(anahtar, acik).then(
      (c) => !iptal && setWebcrypto(hex(c)),
      () => !iptal && setWebcrypto("yok"),
    );
    return () => {
      iptal = true;
    };
  }, [acikYazi, anahtarYazi]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!sonuc) {
    return (
      <div className="sf">
        <AesGirdiler acikYazi={acikYazi} setAcikYazi={setAcikYazi} anahtarYazi={anahtarYazi} setAnahtarYazi={setAnahtarYazi} />
        <p className="sf-sonuc sf-kotu">Açık metin 32 hex rakamı (16 bayt), anahtar 32, 48 ya da 64 hex rakamı olmalı.</p>
      </div>
    );
  }
  const { iz, iz2, k } = sonuc;
  const n = Math.min(adim, iz.length - 1);
  const a = iz[n]!;
  const farkli = iz2 ? a.durum.map((x, i) => x !== iz2[n]!.durum[i]) : undefined;
  const farkSayisi = farkli?.filter(Boolean).length ?? 0;
  const cikis = hex(Uint8Array.from(iz.at(-1)!.durum));
  return (
    <div className="sf">
      <AesGirdiler acikYazi={acikYazi} setAcikYazi={setAcikYazi} anahtarYazi={anahtarYazi} setAnahtarYazi={setAnahtarYazi} />
      <div className="sf-ust">
        <div className="sf-satir">
          <button type="button" className="cip" disabled={n === 0} onClick={() => setAdim(n - 1)}>◀ Geri</button>
          <input type="range" min={0} max={iz.length - 1} value={n} onChange={(e) => setAdim(Number(e.target.value))} aria-label="Adım" />
          <button type="button" className="cip" disabled={n === iz.length - 1} onClick={() => setAdim(n + 1)}>İleri ▶</button>
        </div>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-aes">
        <div className="sf-kutu">
          <h4>{a.tur === 0 && a.adim !== "AddRoundKey" ? "Giriş" : a.tur === 0 ? "Tur 0 (ön beyazlatma)" : `Tur ${a.tur} / ${k.length - 1}`} · {a.adim}</h4>
          <DurumIzgarasi durum={a.durum} farkli={farkli} tik={n === 0 ? (i) => setDegisen(degisen === i ? null : i) : undefined} secili={n === 0 ? degisen ?? undefined : undefined} />
          {a.adim === "AddRoundKey" && (
            <p className="sf-not">Tur anahtarı: <code>{hex(Uint8Array.from(k[a.tur]!))}</code></p>
          )}
        </div>
        <div className="sf-aes-aciklama">
          <p>{ADIM_ACIKLAMA[a.adim]}</p>
          {iz2 ? (
            <p className={farkSayisi === 16 ? "sf-sonuc sf-iyi" : "sf-sonuc"}>
              Girişte {degisen}. baytın en düşük biti çevrildi. Bu adımda <strong>{farkSayisi} / 16</strong> bayt farklı (turuncu).
            </p>
          ) : (
            <p className="sf-not">Yayılmayı görmek için ilk adımda (Giriş) bir hücreye tıkla: o baytın bir biti çevrilir ve iki şifreleme yan yana izlenir.</p>
          )}
        </div>
      </div>
      <p className="sf-sonuc">
        Şifreli blok: <code>{cikis}</code>
        <br />
        {webcrypto === null ? "Web Crypto ile karşılaştırılıyor…" : webcrypto === "yok" ? "Bu tarayıcıda Web Crypto karşılaştırması yapılamadı." : webcrypto === cikis ? "Web Crypto'nun gerçek AES'i de aynı bloğu verdi ✓" : `Web Crypto farklı sonuç verdi: ${webcrypto}`}
      </p>
    </div>
  );
}

function AesGirdiler(p: { acikYazi: string; setAcikYazi: (s: string) => void; anahtarYazi: string; setAnahtarYazi: (s: string) => void }) {
  return (
    <div className="sf-satir">
      <label>Açık blok (hex) <input type="text" className="sf-mono" size={34} value={p.acikYazi} onChange={(e) => p.setAcikYazi(e.target.value.trim())} /></label>
      <label>Anahtar (hex) <input type="text" className="sf-mono" size={34} value={p.anahtarYazi} onChange={(e) => p.setAnahtarYazi(e.target.value.trim())} /></label>
      <button
        type="button"
        className="cip"
        onClick={() => {
          p.setAcikYazi("00112233445566778899aabbccddeeff");
          p.setAnahtarYazi("000102030405060708090a0b0c0d0e0f");
        }}
      >
        FIPS-197 örneği
      </button>
      <button type="button" className="cip" onClick={() => p.setAnahtarYazi(hex(rastgeleBayt(32)))}>Rastgele AES-256 anahtarı</button>
    </div>
  );
}

// ---------------- G-S6-01: ECB maskot deneyi ----------------

const MG = 160; // maskot genişliği

// Kendi çizdiğimiz maskot: geniş, düz renkli alanları olan bir baykuş. Düz renk ECB'nin
// deseni nasıl sızdırdığını en açık gösteren durumdur.
function maskotCiz(x: CanvasRenderingContext2D) {
  const W = MG;
  x.fillStyle = "#cfe8f7";
  x.fillRect(0, 0, W, W);
  x.fillStyle = "#7a4a26";
  x.beginPath();
  x.moveTo(38, 40);
  x.lineTo(52, 12);
  x.lineTo(66, 34);
  x.moveTo(94, 34);
  x.lineTo(108, 12);
  x.lineTo(122, 40);
  x.fill();
  x.beginPath();
  x.ellipse(80, 88, 50, 62, 0, 0, Math.PI * 2);
  x.fill();
  x.fillStyle = "#f2d8a7";
  x.beginPath();
  x.ellipse(80, 108, 32, 38, 0, 0, Math.PI * 2);
  x.fill();
  for (const cx of [58, 102]) {
    x.fillStyle = "#ffffff";
    x.beginPath();
    x.arc(cx, 62, 17, 0, Math.PI * 2);
    x.fill();
    x.fillStyle = "#1d1d1d";
    x.beginPath();
    x.arc(cx, 64, 8, 0, Math.PI * 2);
    x.fill();
  }
  x.fillStyle = "#f29a1f";
  x.beginPath();
  x.moveTo(72, 78);
  x.lineTo(88, 78);
  x.lineTo(80, 92);
  x.fill();
  // Göğsündeki anahtar deliği
  x.fillStyle = "#7a4a26";
  x.beginPath();
  x.arc(80, 106, 7, 0, Math.PI * 2);
  x.fill();
  x.fillRect(77, 106, 6, 16);
  x.fillStyle = "#f29a1f";
  x.fillRect(46, 146, 26, 8);
  x.fillRect(88, 146, 26, 8);
}

type Derinlik = "rgb" | "gri";
type Mod = "ecb" | "cbc" | "ctr";

function piksellerdenBayt(veri: Uint8ClampedArray, derinlik: Derinlik, sadelestir: boolean): Uint8Array {
  const n = veri.length / 4;
  const s = (v: number) => (sadelestir ? Math.round(v / 85) * 85 : v);
  if (derinlik === "gri") return Uint8Array.from({ length: n }, (_, i) => s(Math.round(0.3 * veri[4 * i]! + 0.59 * veri[4 * i + 1]! + 0.11 * veri[4 * i + 2]!)));
  const y = new Uint8Array(n * 3);
  for (let i = 0; i < n; i++) for (let k = 0; k < 3; k++) y[3 * i + k] = s(veri[4 * i + k]!);
  return y;
}

function bayttanResim(b: Uint8Array, derinlik: Derinlik, w: number, h: number): ImageData {
  const img = new ImageData(w, h);
  for (let i = 0; i < w * h; i++) {
    const [r, g, bl] = derinlik === "gri" ? [b[i]!, b[i]!, b[i]!] : [b[3 * i]!, b[3 * i + 1]!, b[3 * i + 2]!];
    img.data.set([r, g, bl, 255], 4 * i);
  }
  return img;
}

function ResimTuval({ img, baslik }: { img: ImageData; baslik: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    ref.current?.getContext("2d")?.putImageData(img, 0, 0);
  }, [img]);
  return (
    <figure className="sf-tuval sf-tuval-resim">
      <canvas ref={ref} width={img.width} height={img.height} aria-label={baslik} />
      <figcaption>{baslik}</figcaption>
    </figure>
  );
}

const TAHMINLER: [string, string][] = [
  ["gurultu", "Tamamen gürültü"],
  ["hatlar", "Hatları seçilir"],
  ["ayni", "Aynen görünür"],
];

export function EcbMaskot() {
  const [kaynak, setKaynak] = useState<ImageData | null>(null);
  const [kendi, setKendi] = useState(false);
  const [derinlik, setDerinlik] = useState<Derinlik>("gri");
  const [sadelestir, setSadelestir] = useState(false);
  const [tahmin, setTahmin] = useState<string | null>(null);
  const [anahtar, setAnahtar] = useState(() => rastgeleBayt(16));
  const [iv] = useState(() => rastgeleBayt(16));
  useEffect(() => {
    if (kendi) return;
    const c = document.createElement("canvas");
    c.width = c.height = MG;
    const x = c.getContext("2d");
    if (!x) return;
    maskotCiz(x);
    setKaynak(x.getImageData(0, 0, MG, MG));
  }, [kendi]);
  const dosya = (f: File | undefined) => {
    if (!f) return;
    const url = URL.createObjectURL(f);
    const im = new Image();
    im.onload = () => {
      const o = Math.min(1, MG / Math.max(im.width, im.height));
      const w = Math.max(16, Math.round(im.width * o));
      const h = Math.max(16, Math.round(im.height * o));
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      const x = c.getContext("2d");
      if (x) {
        x.drawImage(im, 0, 0, w, h);
        setKendi(true);
        setSadelestir(true);
        setKaynak(x.getImageData(0, 0, w, h));
      }
      URL.revokeObjectURL(url);
    };
    im.src = url;
  };
  const sonuclar = useMemo(() => {
    if (!kaynak) return null;
    const ham = piksellerdenBayt(kaynak.data, derinlik, sadelestir);
    // Blok katına tamamla (sondaki birkaç bayt resimde görünmez)
    const veri = new Uint8Array(Math.ceil(ham.length / 16) * 16);
    veri.set(ham);
    const k = anahtarGenislet(anahtar);
    const sayac = Uint8Array.from([...iv.slice(0, 12), 0, 0, 0, 0]);
    const ciz = (b: Uint8Array) => bayttanResim(b, derinlik, kaynak.width, kaynak.height);
    return {
      acik: ciz(veri),
      ecb: ciz(ecbSifrele(veri, k)),
      cbc: ciz(cbcSifrele(veri, k, iv)),
      ctr: ciz(ctr(veri, k, sayac)),
    };
  }, [kaynak, derinlik, sadelestir, anahtar, iv]);
  return (
    <div className="sf">
      <div className="sf-ust">
        <div className="sf-satir">
          <Secim ad="Renk derinliği" secenekler={[["gri", "8 bit gri"], ["rgb", "24 bit renk"]]} deger={derinlik} degis={setDerinlik} />
          <label><input type="checkbox" checked={sadelestir} onChange={(e) => setSadelestir(e.target.checked)} /> Renkleri sadeleştir</label>
        </div>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-satir">
        <label className="cip sf-dosya">
          Kendi görselini seç
          <input type="file" accept="image/*" onChange={(e) => dosya(e.target.files?.[0])} />
        </label>
        {kendi && <button type="button" className="cip" onClick={() => { setKendi(false); setSadelestir(false); }}>Maskota dön</button>}
        <button type="button" className="cip" onClick={() => setAnahtar(rastgeleBayt(16))}>Yeni anahtar</button>
      </div>
      <p className="sf-not">Görselin yalnız tarayıcında işlenir, hiçbir yere gönderilmez. Pikseller bayt dizisine çevrilip AES-128 ile şifrelenir, şifreli baytlar yine piksel olarak çizilir.</p>
      {!tahmin ? (
        <div className="sf-kutu">
          <h4>Önce tahmin et: maskot ECB ile şifrelenince nasıl görünür?</h4>
          <Secim ad="Tahmin" secenekler={TAHMINLER} deger={"" as string} degis={setTahmin} />
          {sonuclar && <ResimTuval img={sonuclar.acik} baslik="Açık görsel" />}
        </div>
      ) : (
        sonuclar && (
          <>
            <div className="sf-tuvaller">
              <ResimTuval img={sonuclar.acik} baslik="Açık görsel" />
              <ResimTuval img={sonuclar.ecb} baslik="ECB" />
              <ResimTuval img={sonuclar.cbc} baslik="CBC (rastgele IV)" />
              <ResimTuval img={sonuclar.ctr} baslik="CTR (rastgele nonce)" />
            </div>
            <p className={`sf-sonuc ${tahmin === "hatlar" ? "sf-iyi" : "sf-kotu"}`}>
              {tahmin === "hatlar" ? "Doğru tahmin. " : "Tahminin tutmadı. "}
              ECB'de aynı renkli her 16 baytlık blok aynı şifreli bloğa dönüşür: renkler bozulur ama şekil kalır. CBC ve CTR'de her blok konumuna göre farklı şifrelendiği için görsel gürültüye döner.
            </p>
            <button type="button" className="cip" onClick={() => setTahmin(null)}>Tahmini yeniden sor</button>
          </>
        )
      )}
    </div>
  );
}

// ---------------- G-S6-02: mod oynatıcısı (hata yayılımı) ----------------

const MESAJ = "Toplanti yeri: Kutuphane, saat 10:00. Gec kalma, kimseye soyleme";
const MOD_NOT: Record<Mod, string> = {
  ecb: "ECB: bloklar birbirinden habersiz. Bozulan şifreli blok yalnız kendi açık bloğunu tamamen bozar.",
  cbc: "CBC: bozulan blok kendi açık bloğunu tamamen bozar, sonraki açık blokta ise yalnız aynı konumdaki biti çevirir. Saldırgan bunu bilerek kullanabilir.",
  ctr: "CTR: şifreli metin yalnız anahtar akışıyla XOR'lanır. Bir bit çevrilirse açık metinde aynı konumdaki tek bit çevrilir; başka hiçbir şey bozulmaz ve hiçbir şey fark edilmez.",
};

export function ModOynatici() {
  const [mod, setMod] = useState<Mod>("cbc");
  const [bozuk, setBozuk] = useState<Set<number>>(new Set());
  const [ortam] = useState(() => ({ k: anahtarGenislet(rastgeleBayt(16)), iv: rastgeleBayt(16) }));
  const acik = useMemo(() => metindenBayt(MESAJ.padEnd(64, ".").slice(0, 64)), []);
  const sifreli = useMemo(() => {
    const { k, iv } = ortam;
    return mod === "ecb" ? ecbSifrele(acik, k) : mod === "cbc" ? cbcSifrele(acik, k, iv) : ctr(acik, k, iv);
  }, [mod, acik, ortam]);
  const degismis = sifreli.map((x, i) => (bozuk.has(i) ? x ^ 0x01 : x));
  const { k, iv } = ortam;
  const cozulen = mod === "ecb" ? ecbCoz(degismis, k) : mod === "cbc" ? cbcCoz(degismis, k, iv) : ctr(degismis, k, iv);
  const goster = (b: number) => (b >= 32 && b < 127 ? String.fromCharCode(b) : "·");
  const bozulanSayisi = [...cozulen].filter((x, i) => x !== acik[i]).length;
  return (
    <div className="sf">
      <div className="sf-ust">
        <Secim ad="Mod" secenekler={[["ecb", "ECB"], ["cbc", "CBC"], ["ctr", "CTR"]]} deger={mod} degis={(m) => { setMod(m); setBozuk(new Set()); }} />
        <Rozet tur="oyuncak" />
      </div>
      <p className="sf-not">Şifreli metnin bir baytına tıkla: o baytın en düşük biti çevrilir (iletim hatası ya da saldırgan). Altta alıcının çözdüğü metin görünür; bozulan karakterler turuncu.</p>
      <div className="sf-bloklar">
        {[0, 1, 2, 3].map((b) => (
          <div key={b} className="sf-blok-satir">
            <span className="sf-blok-ad">C{b + 1}</span>
            <div className="sf-baytlar">
              {[...sifreli.slice(16 * b, 16 * b + 16)].map((x, j) => {
                const i = 16 * b + j;
                return (
                  <button key={i} type="button" className={`sf-bayt${bozuk.has(i) ? " sf-hucre-secili" : ""}`} onClick={() => {
                    const y = new Set(bozuk);
                    if (y.has(i)) y.delete(i);
                    else y.add(i);
                    setBozuk(y);
                  }}>
                    {h2(bozuk.has(i) ? x ^ 1 : x)}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="sf-bloklar">
        {[0, 1, 2, 3].map((b) => (
          <div key={b} className="sf-blok-satir">
            <span className="sf-blok-ad">P{b + 1}</span>
            <div className="sf-baytlar sf-mono">
              {[...cozulen.slice(16 * b, 16 * b + 16)].map((x, j) => (
                <span key={j} className={`sf-harf${x !== acik[16 * b + j] ? " sf-hucre-farkli" : ""}`}>{goster(x)}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="sf-sonuc">
        {MOD_NOT[mod]}
        {bozuk.size > 0 && <> Şu an {bozuk.size} bit çevrildi, çözülen metinde {bozulanSayisi} bayt değişti.</>}
      </p>
      {bozuk.size > 0 && <button type="button" className="cip" onClick={() => setBozuk(new Set())}>Hataları temizle</button>}
    </div>
  );
}

// ---------------- G-S6-03: bit çevirme (CTR ile GCM, Web Crypto) ----------------

const ODEME = "ODEME: 0100 TL -> AYSE";
const RAKAM = ODEME.indexOf("0100");

export function BitCevirme() {
  const [hedef, setHedef] = useState("9");
  const [paket, setPaket] = useState<{ ctr: Uint8Array; gcm: Uint8Array; nonce: Uint8Array; sayac: Uint8Array; kc: CryptoKey; kg: CryptoKey } | null>(null);
  const [sonuc, setSonuc] = useState<{ ctr: string; gcm: string | null } | null>(null);
  const [hata, setHata] = useState(false);
  useEffect(() => {
    let iptal = false;
    (async () => {
      const ham = rastgeleBayt(16);
      const [kc, kg] = await Promise.all([aesAnahtariAl(ham, "AES-CTR"), aesAnahtariAl(ham, "AES-GCM")]);
      const sayac = Uint8Array.from([...rastgeleBayt(12), 0, 0, 0, 0]);
      const m = metindenBayt(ODEME);
      const c = await aesCtr(kc, sayac, m);
      const g = await aesGcmSifrele(kg, m);
      if (!iptal) setPaket({ ctr: c, gcm: g.sifreli, nonce: g.nonce, sayac, kc, kg });
    })().catch(() => !iptal && setHata(true));
    return () => {
      iptal = true;
    };
  }, []);
  if (hata) return <p className="sf-sonuc sf-kotu">Bu tarayıcıda Web Crypto kullanılamıyor.</p>;
  if (!paket) return <p className="sf-not">Anahtar üretiliyor…</p>;
  const fark = "0".charCodeAt(0) ^ hedef.charCodeAt(0);
  const saldir = async () => {
    const c = Uint8Array.from(paket.ctr);
    c[RAKAM]! ^= fark;
    const g = Uint8Array.from(paket.gcm);
    g[RAKAM]! ^= fark;
    const ctrAcik = new TextDecoder().decode(await aesCtr(paket.kc, paket.sayac, c));
    let gcmAcik: string | null = null;
    try {
      gcmAcik = new TextDecoder().decode(await aesGcmCoz(paket.kg, paket.nonce, g));
    } catch {
      gcmAcik = null;
    }
    setSonuc({ ctr: ctrAcik, gcm: gcmAcik });
  };
  return (
    <div className="sf">
      <div className="sf-ust">
        <p className="sf-not" style={{ flex: 1 }}>Banka uygulaması şu mesajı aynı anahtarla bir kez AES-CTR, bir kez AES-GCM ile şifreledi: <code>{ODEME}</code></p>
        <Rozet tur="webcrypto" />
      </div>
      <div className="sf-izgara">
        <div className="sf-kutu">
          <h4>AES-CTR şifreli metin</h4>
          <code className="sf-kod">{hex(paket.ctr)}</code>
        </div>
        <div className="sf-kutu">
          <h4>AES-GCM şifreli metin + 16 bayt etiket</h4>
          <code className="sf-kod">{hex(paket.gcm)}</code>
        </div>
      </div>
      <div className="sf-satir">
        <span>Saldırgan anahtarı bilmiyor ama tutarın ilk rakamının 0 olduğunu biliyor. Onu şuna çevirsin:</span>
        <select value={hedef} onChange={(e) => { setHedef(e.target.value); setSonuc(null); }} aria-label="Yeni rakam">
          {"123456789".split("").map((r) => <option key={r}>{r}</option>)}
        </select>
        <button type="button" className="cip" onClick={saldir}>Şifreli metnin {RAKAM + 1}. baytını 0x{h2(fark)} ile XOR'la</button>
      </div>
      {sonuc && (
        <div className="sf-izgara">
          <p className="sf-sonuc sf-kotu">AES-CTR çözüldü: <code>{sonuc.ctr}</code><br />Değişiklik fark edilmedi; ödeme {hedef}100 TL oldu.</p>
          {sonuc.gcm === null ? (
            <p className="sf-sonuc sf-iyi">AES-GCM: doğrulama etiketi eşleşmedi, mesaj reddedildi. Hiçbir açık metin verilmedi.</p>
          ) : (
            <p className="sf-sonuc sf-kotu">AES-GCM beklenmedik biçimde kabul etti: {sonuc.gcm}</p>
          )}
        </div>
      )}
    </div>
  );
}

// ---------------- G-S6-04: ChaCha20 çeyrek tur ----------------

const kelimeAl = (s: string) => {
  const t = s.trim().replace(/^0x/i, "");
  return /^[0-9a-f]{1,8}$/i.test(t) ? parseInt(t, 16) >>> 0 : null;
};

export function ChachaCeyrek() {
  const [girdi, setGirdi] = useState(["11111111", "01020304", "9b8d6f43", "01234567"]);
  const [adim, setAdim] = useState(0);
  const sayilar = girdi.map(kelimeAl);
  const gecerli = sayilar.every((x) => x !== null);
  const { adimlar } = gecerli ? ceyrekTur(sayilar[0]!, sayilar[1]!, sayilar[2]!, sayilar[3]!) : { adimlar: [] };
  const n = Math.min(adim, adimlar.length);
  const simdiki = n === 0 ? { islem: "Başlangıç", a: sayilar[0] ?? 0, b: sayilar[1] ?? 0, c: sayilar[2] ?? 0, d: sayilar[3] ?? 0 } : adimlar[n - 1]!;
  const hedef = simdiki.islem.charAt(0);
  return (
    <div className="sf">
      <div className="sf-ust">
        <div className="sf-satir">
          {(["a", "b", "c", "d"] as const).map((ad, i) => (
            <label key={ad}>
              {ad} <input type="text" className="sf-mono" size={9} value={girdi[i]} onChange={(e) => { const y = [...girdi]; y[i] = e.target.value; setGirdi(y); setAdim(0); }} />
            </label>
          ))}
        </div>
        <Rozet tur="oyuncak" />
      </div>
      {!gecerli ? (
        <p className="sf-sonuc sf-kotu">Her kelime en çok 8 hex rakamı (32 bit) olmalı.</p>
      ) : (
        <>
          <div className="sf-satir">
            <button type="button" className="cip" disabled={n === 0} onClick={() => setAdim(n - 1)}>◀ Geri</button>
            <span className="sf-mono">{n} / 12 · {simdiki.islem}</span>
            <button type="button" className="cip" disabled={n === 12} onClick={() => setAdim(n + 1)}>İleri ▶</button>
          </div>
          <div className="sf-tablo-sar">
            <table className="sf-tablo sf-mono">
              <tbody>
                {(["a", "b", "c", "d"] as const).map((ad) => (
                  <tr key={ad} className={n > 0 && hedef === ad ? "sf-vurgu" : undefined}>
                    <th>{ad}</th>
                    <td>{h8(simdiki[ad])}</td>
                    <td>{(simdiki[ad] >>> 0).toString(2).padStart(32, "0").replace(/(.{8})(?!$)/g, "$1 ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="sf-not">
            Toplama mod 2³² yapılır (taşan bit atılır), <code>&lt;&lt;&lt;</code> sola döndürmedir: soldan taşan bitler sağdan geri girer. Bir çeyrek tur 4 toplama, 4 XOR ve 4 döndürmedir; ChaCha20 bir blokta 80 çeyrek tur uygular.
          </p>
          {n === 12 && girdi.join() === "11111111,01020304,9b8d6f43,01234567" && (
            <p className="sf-sonuc sf-iyi">Sonuç RFC 8439'daki test vektörüyle aynı: ea2a92f4 cb1cf8ce 4581472e 5881c4bb ✓</p>
          )}
        </>
      )}
    </div>
  );
}
