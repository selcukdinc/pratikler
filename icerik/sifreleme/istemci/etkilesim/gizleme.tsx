// 16. ünitenin etkileşimli şekilleri: Naor-Shamir görsel payları, LSB gizleyici ve görüntü
// şifreleme karşılaştırması (piksel karıştırma ile AES-CTR). Uygulamalar oyuncaktır
// (src/kripto/oyuncak/gorsel.ts); görseller yalnız tarayıcıda işlenir.
import { useEffect, useMemo, useRef, useState } from "react";
import { Rozet } from "../../../../src/kripto/Rozet";
import { bayttanMetin, metindenBayt } from "../../../../src/kripto/bayt";
import { anahtarGenislet } from "../../../../src/kripto/oyuncak/aes";
import { ctr } from "../../../../src/kripto/oyuncak/modlar";
import { bitDuzlemi, gorselPaylar, histogram, kapasite, lsbGizle, lsbOku, lsbOrani, permutasyon, pikselGeriAl, pikselKaristir, ustUste } from "../../../../src/kripto/oyuncak/gorsel";
import { rastgeleBayt } from "../../../../src/kripto/webcrypto";
import { maskotCiz, MG, ResimTuval } from "./simetrik";
import { Secim } from "./temeller";

function maskot(): ImageData | null {
  const c = document.createElement("canvas");
  c.width = c.height = MG;
  const x = c.getContext("2d");
  if (!x) return null;
  maskotCiz(x);
  return x.getImageData(0, 0, MG, MG);
}

function dosyadanResim(f: File, en: number, bitti: (img: ImageData) => void) {
  const url = URL.createObjectURL(f);
  const im = new Image();
  im.onload = () => {
    const o = Math.min(1, en / Math.max(im.width, im.height));
    const c = document.createElement("canvas");
    c.width = Math.max(16, Math.round(im.width * o));
    c.height = Math.max(16, Math.round(im.height * o));
    const x = c.getContext("2d");
    if (x) {
      x.drawImage(im, 0, 0, c.width, c.height);
      bitti(x.getImageData(0, 0, c.width, c.height));
    }
    URL.revokeObjectURL(url);
  };
  im.src = url;
}

const resim = (veri: Uint8ClampedArray, w: number, h: number) => {
  const r = new ImageData(w, h);
  r.data.set(veri);
  return r;
};

// ---------------- G-S16-01: görsel paylar ----------------

const PW = 56; // mesaj genişliği (piksel)
const PH = 18;

function yaziBitleri(yazi: string): Uint8Array {
  const c = document.createElement("canvas");
  c.width = PW;
  c.height = PH;
  const x = c.getContext("2d");
  const y = new Uint8Array(PW * PH);
  if (!x) return y;
  x.font = "bold 15px system-ui, sans-serif";
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.fillText(yazi.slice(0, 6), PW / 2, PH / 2 + 1, PW - 2);
  const v = x.getImageData(0, 0, PW, PH).data;
  for (let i = 0; i < y.length; i++) y[i] = v[4 * i + 3]! > 100 ? 1 : 0;
  return y;
}

function PayTuval({ bitler, w, h, baslik }: { bitler: Uint8Array; w: number; h: number; baslik: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const x = ref.current?.getContext("2d");
    if (!x) return;
    const img = x.createImageData(w, h);
    bitler.forEach((b, i) => img.data.set(b ? [25, 25, 25, 255] : [250, 250, 250, 255], 4 * i));
    x.putImageData(img, 0, 0);
  }, [bitler, w, h]);
  return (
    <figure className="sf-tuval sf-tuval-pay">
      <canvas ref={ref} width={w} height={h} aria-label={baslik} />
      <figcaption>{baslik}</figcaption>
    </figure>
  );
}

export function GorselPaylar() {
  const [yazi, setYazi] = useState("GİZLİ");
  const [sahte, setSahte] = useState("TATİL");
  const [kayma, setKayma] = useState(9);
  const [tohum, setTohum] = useState(() => rastgeleBayt(PW * PH));
  const [sahteGoster, setSahteGoster] = useState(false);
  const p = useMemo(() => gorselPaylar(yaziBitleri(yazi), PW, PH, tohum), [yazi, tohum]);
  const ps = useMemo(() => gorselPaylar(yaziBitleri(sahte), PW, PH, tohum), [sahte, tohum]);
  const b = sahteGoster ? ps.b : p.b;
  // İkinci pay kayma kadar sağa kaydırılıp birincinin üstüne konur
  const ust = useMemo(() => {
    const k = new Uint8Array(b.length);
    for (let y = 0; y < p.h; y++)
      for (let x = 0; x < p.w; x++) {
        const sx = x - kayma;
        k[y * p.w + x] = sx >= 0 && sx < p.w ? b[y * p.w + sx]! : 0;
      }
    return ustUste(p.a, k);
  }, [p, b, kayma]);
  return (
    <div className="sf">
      <div className="sf-ust">
        <label className="sf-satir">
          Mesaj <input value={yazi} maxLength={6} onChange={(e) => setYazi(e.target.value)} aria-label="Mesaj" />
        </label>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-ikili">
        <PayTuval bitler={p.a} w={p.w} h={p.h} baslik="1. pay (Ayşe'de)" />
        <PayTuval bitler={b} w={p.w} h={p.h} baslik={sahteGoster ? `2. pay (sahte: "${sahte}")` : "2. pay (Mert'te)"} />
        <PayTuval bitler={ust} w={p.w} h={p.h} baslik={kayma === 0 ? "Üst üste: tam hizalı" : `Üst üste: ${kayma} hücre kaymış`} />
      </div>
      <label className="sf-satir">
        İkinci payı kaydır
        <input type="range" min={-16} max={16} value={kayma} onChange={(e) => setKayma(Number(e.target.value))} aria-label="İkinci payın kayması" />
        <button type="button" className="cip" onClick={() => setKayma(0)}>
          Hizala
        </button>
        <button type="button" className="cip" onClick={() => setTohum(rastgeleBayt(PW * PH))}>
          Yeni paylar
        </button>
      </label>
      <p className="sf-not">
        Her pikselin yerinde 2×2 hücre var, her payda tam ikisi siyah. Beyaz pikselde iki pay aynı deseni, siyah pikselde birbirinin tersini taşır. Hizalayınca mesaj pikselleri tamamen kararır (4/4), arka plan yarı gri kalır (2/4). Tek bir pay her yerde aynı griliktedir: gözle de matematikle de bilgi taşımaz.
      </p>
      <div className="sf-kutu">
        <h4>Tek pay neden hiçbir şey söylemez?</h4>
        <div className="sf-satir">
          <label className="sf-satir">
            Başka bir mesaj <input value={sahte} maxLength={6} onChange={(e) => setSahte(e.target.value)} aria-label="Sahte mesaj" />
          </label>
          <label>
            <input type="checkbox" checked={sahteGoster} onChange={(e) => setSahteGoster(e.target.checked)} /> İkinci payı bu mesaja göre üret
          </label>
        </div>
        <p className="sf-not">Birinci pay hiç değişmeden, ikinci pay "{sahte}" mesajını verecek biçimde de üretilebilir. Yani 1. payı ele geçiren, mesajın "{yazi}" mı "{sahte}" mı olduğunu ayırt edemez; one-time pad'deki mükemmel gizliliğin aynısı (5. ünite).</p>
      </div>
    </div>
  );
}

// ---------------- G-S16-02: LSB gizleyici ----------------

export function LsbGizleyici() {
  const [kaynak, setKaynak] = useState<ImageData | null>(null);
  const [kendi, setKendi] = useState(false);
  const [mesaj, setMesaj] = useState("Toplantı yarın 14.00'te, kütüphanenin arka kapısında. Kimseye söyleme.");
  const [tekrar, setTekrar] = useState(8);
  const [bit, setBit] = useState("0");
  useEffect(() => {
    if (!kendi) setKaynak(maskot());
  }, [kendi]);
  const veri = useMemo(() => metindenBayt(Array(tekrar).fill(mesaj).join(" ")), [mesaj, tekrar]);
  const sonuc = useMemo(() => {
    if (!kaynak) return null;
    const n = kaynak.width * kaynak.height;
    if (veri.length > kapasite(n)) return { hata: `Mesaj ${veri.length} bayt; bu görsel en çok ${kapasite(n)} bayt taşır.` } as const;
    const g = lsbGizle(kaynak.data, veri);
    const okunan = lsbOku(g);
    const b = Number(bit);
    const kullanilan = (32 + veri.length * 8) / 3 * 4;
    return {
      gizli: resim(g, kaynak.width, kaynak.height),
      duzOnce: resim(bitDuzlemi(kaynak.data, b), kaynak.width, kaynak.height),
      duzSonra: resim(bitDuzlemi(g, b), kaynak.width, kaynak.height),
      okunan: okunan ? bayttanMetin(okunan) : "",
      oranOnce: lsbOrani(kaynak.data, 0, kullanilan),
      oranSonra: lsbOrani(g, 0, kullanilan),
      yuzde: Math.round((100 * veri.length) / kapasite(n)),
    };
  }, [kaynak, veri, bit]);
  return (
    <div className="sf">
      <div className="sf-ust">
        <div className="sf-satir">
          <label className="cip sf-dosya">
            Kendi görselini seç
            <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && dosyadanResim(e.target.files[0], 200, (img) => { setKendi(true); setKaynak(img); })} />
          </label>
          {kendi && <button type="button" className="cip" onClick={() => setKendi(false)}>Maskota dön</button>}
        </div>
        <Rozet tur="oyuncak" />
      </div>
      <textarea value={mesaj} onChange={(e) => setMesaj(e.target.value)} rows={2} aria-label="Gizlenecek mesaj" />
      <label className="sf-satir">
        Mesajı {tekrar} kez yaz (kapasiteyi doldur)
        <input type="range" min={1} max={60} value={tekrar} onChange={(e) => setTekrar(Number(e.target.value))} aria-label="Tekrar sayısı" />
      </label>
      <p className="sf-not">Görselin yalnız tarayıcında işlenir. Gizlilik için PNG gibi kayıpsız bir biçim gerekir; JPEG sıkıştırması en düşük bitleri bozar.</p>
      {!sonuc || !kaynak ? null : "hata" in sonuc ? (
        <p className="sf-sonuc sf-kotu">{sonuc.hata}</p>
      ) : (
        <>
          <div className="sf-tuvaller">
            <ResimTuval img={kaynak} baslik="Özgün" />
            <ResimTuval img={sonuc.gizli} baslik={`Mesaj gizlenmiş (kapasitenin %${sonuc.yuzde}'i)`} />
          </div>
          <div className="sf-satir">
            <span>Bit düzlemi:</span>
            <Secim ad="Bit düzlemi" secenekler={[0, 1, 2, 7].map((x) => [String(x), x === 0 ? "0 (en düşük)" : x === 7 ? "7 (en yüksek)" : String(x)] as [string, string])} deger={bit} degis={setBit} />
          </div>
          <div className="sf-tuvaller">
            <ResimTuval img={sonuc.duzOnce} baslik={`Özgünün ${bit}. bit düzlemi`} />
            <ResimTuval img={sonuc.duzSonra} baslik={`Gizlenmişin ${bit}. bit düzlemi`} />
          </div>
          <p className={`sf-sonuc ${bit === "0" ? "sf-kotu" : ""}`}>
            {bit === "0"
              ? `Göz farkı görmez, ama en düşük bit düzlemi ele verir: mesajın yazıldığı üst bölgede 1 oranı %${Math.round(sonuc.oranOnce * 100)} iken %${Math.round(sonuc.oranSonra * 100)} oldu. Düz renkli alanlarda düzenli olan desen gürültüye döndü; steganaliz buna bakar.`
              : "Yüksek bit düzlemleri görselin kendisidir; gizli mesaj yalnız 0. düzlemde iz bırakır."}
          </p>
          <div className="sf-kutu">
            <h4>Alıcı en düşük bitleri okur</h4>
            <code className="sf-mono">{sonuc.okunan.slice(0, 160)}{sonuc.okunan.length > 160 ? "…" : ""}</code>
            <span className="sf-not">Anahtar yok: yöntemi bilen herkes okur. Gizlemeden önce mesajı şifrelemek gerekir.</span>
          </div>
        </>
      )}
    </div>
  );
}

// ---------------- G-S16-03: görüntü şifreleme karşılaştırması ----------------

function HistogramCizgi({ veri, baslik }: { veri: Uint8ClampedArray; baslik: string }) {
  const h = histogram(veri);
  const enCok = Math.max(...h);
  const nok = [...h].map((v, i) => `${i},${(60 - (60 * v) / enCok).toFixed(1)}`).join(" ");
  return (
    <figure className="sf-tuval">
      <svg viewBox="0 0 256 62" className="sf-hist-cizgi" role="img" aria-label={`${baslik}: renk baytlarının histogramı`}>
        <polyline points={nok} />
      </svg>
      <figcaption>{baslik} · histogram</figcaption>
    </figure>
  );
}

export function GoruntuSifreleme() {
  const [kaynak] = useState(() => maskot());
  const [tohum, setTohum] = useState(48271);
  const [anahtar, setAnahtar] = useState(() => rastgeleBayt(16));
  const [saldiri, setSaldiri] = useState(false);
  const s = useMemo(() => {
    if (!kaynak) return null;
    const n = kaynak.width * kaynak.height;
    const p = permutasyon(n, tohum);
    const karisik = pikselKaristir(kaynak.data, p);
    // AES-CTR: yalnız renk baytları şifrelenir, alfa 255 kalır
    const rgb = new Uint8Array(n * 3);
    for (let i = 0; i < n; i++) for (let k = 0; k < 3; k++) rgb[3 * i + k] = kaynak.data[4 * i + k]!;
    const c = ctr(rgb, anahtarGenislet(anahtar), new Uint8Array(16));
    const aes = new Uint8ClampedArray(n * 4);
    for (let i = 0; i < n; i++) aes.set([c[3 * i]!, c[3 * i + 1]!, c[3 * i + 2]!, 255], 4 * i);
    // Seçilmiş açık görsel: her pikseli kendi sırasını taşıyan bir görsel aynı anahtarla şifretilir
    const secilmis = new Uint8ClampedArray(n * 4);
    for (let i = 0; i < n; i++) secilmis.set([i & 255, i >> 8, 0, 255], 4 * i);
    const sifreliSecilmis = pikselKaristir(secilmis, p);
    const bulunan = Uint32Array.from({ length: n }, (_, j) => sifreliSecilmis[4 * j]! | (sifreliSecilmis[4 * j + 1]! << 8));
    const w = kaynak.width;
    const h = kaynak.height;
    return {
      karisik,
      aes,
      img: { karisik: resim(karisik, w, h), aes: resim(aes, w, h), secilmis: resim(sifreliSecilmis, w, h), cozulen: resim(pikselGeriAl(karisik, bulunan), w, h) },
    };
  }, [kaynak, tohum, anahtar]);
  if (!kaynak || !s) return null;
  return (
    <div className="sf">
      <div className="sf-ust">
        <div className="sf-satir">
          <button type="button" className="cip" onClick={() => { setTohum((t) => (t * 69621 + 1) % 2147483647); setAnahtar(rastgeleBayt(16)); }}>
            Yeni anahtar
          </button>
          <label>
            <input type="checkbox" checked={saldiri} onChange={(e) => setSaldiri(e.target.checked)} /> Saldırgan bir kez kendi görselini şifretebilsin
          </label>
        </div>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-tuvaller">
        <ResimTuval img={kaynak} baslik="Özgün" />
        <ResimTuval img={s.img.karisik} baslik="Anahtarlı piksel karıştırma" />
        <ResimTuval img={s.img.aes} baslik="AES-CTR" />
      </div>
      <div className="sf-tuvaller">
        <HistogramCizgi veri={kaynak.data} baslik="Özgün" />
        <HistogramCizgi veri={s.karisik} baslik="Karıştırılmış" />
        <HistogramCizgi veri={s.aes} baslik="AES-CTR" />
      </div>
      <p className="sf-not">
        Karıştırma pikselleri yerinden oynatır ama değiştirmez: histogram özgününkiyle birebir aynıdır. Hangi renklerin ne oranda olduğu, karanlık mı aydınlık mı olduğu hâlâ okunur. AES-CTR'de histogram düzleşir.
      </p>
      {saldiri && (
        <>
          <div className="sf-tuvaller">
            <ResimTuval img={s.img.secilmis} baslik="Saldırganın görseli, şifreli" />
            <ResimTuval img={s.img.cozulen} baslik="Bulunan permütasyonla çözülen maskot" />
          </div>
          <p className="sf-sonuc sf-kotu">
            Saldırgan her pikseli kendi sıra numarasını taşıyan bir görseli aynı anahtarla şifretti. Şifreli görseldeki her piksel, nereden geldiğini söylüyor: permütasyonun tamamı tek bir görselle çıktı. Aynı anahtarla şifrelenmiş her görsel artık açık.
          </p>
        </>
      )}
    </div>
  );
}
