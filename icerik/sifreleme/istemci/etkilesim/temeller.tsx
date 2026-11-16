// 1. ve 2. ünitenin etkileşimli şekilleri: kodlama/hash/şifreleme karşılaştırması,
// bayt gösterimleri, güvenlik hedefi eşleştirme, entropi ölçer, "rastgele mi?" testi
// ve tahmin edilebilir üreteç oyunu. Gerçek işlemler Web Crypto ile yapılır.
import { useEffect, useState } from "react";
import { Rozet } from "../../../../src/kripto/Rozet";
import { base64, base64tenBayt, bayttanMetin, bitler, hex, metindenBayt } from "../../../../src/kripto/bayt";
import { aesGcmAnahtari, aesGcmCoz, aesGcmSifrele, anahtarHex, sha256Hex } from "../../../../src/kripto/webcrypto";
import { lcg } from "../../../../src/kripto/oyuncak/sayi";

export function Secim<T extends string>({ ad, secenekler, deger, degis }: { ad: string; secenekler: [T, string][]; deger: T; degis: (v: T) => void }) {
  return (
    <div className="sf-secim" role="group" aria-label={ad}>
      {secenekler.map(([v, yazi]) => (
        <button key={v} type="button" className="cip" aria-pressed={deger === v} onClick={() => degis(v)}>
          {yazi}
        </button>
      ))}
    </div>
  );
}

// ---------------- G-S1-01: kodlama, hash, şifreleme ----------------

export function UcKutu() {
  const [metin, setMetin] = useState("Yarın 10'da kütüphanede buluşalım.");
  const [hash, setHash] = useState("");
  const [anahtar, setAnahtar] = useState<CryptoKey | null>(null);
  const [anahtarYazi, setAnahtarYazi] = useState("");
  const [paket, setPaket] = useState<{ nonce: Uint8Array; sifreli: Uint8Array } | null>(null);
  const [coz, setCoz] = useState<string | null>(null);

  useEffect(() => {
    aesGcmAnahtari().then(async (k) => {
      setAnahtar(k);
      setAnahtarYazi(await anahtarHex(k));
    });
  }, []);
  useEffect(() => {
    let iptal = false;
    sha256Hex(metin).then((h) => !iptal && setHash(h));
    if (anahtar) aesGcmSifrele(anahtar, metindenBayt(metin)).then((p) => !iptal && (setPaket(p), setCoz(null)));
    return () => {
      iptal = true;
    };
  }, [metin, anahtar]);

  const b64 = base64(metindenBayt(metin));
  const anahtarlaCoz = async (dogru: boolean) => {
    if (!paket || !anahtar) return;
    try {
      const k = dogru ? anahtar : await aesGcmAnahtari();
      setCoz("✓ " + bayttanMetin(await aesGcmCoz(k, paket.nonce, paket.sifreli)));
    } catch {
      setCoz("✗ Çözülemedi: anahtar yanlış ya da şifreli metin bozuk (AES-GCM doğrulama etiketi tutmadı).");
    }
  };

  return (
    <div className="sf">
      <div className="sf-ust">
        <label style={{ flex: 1 }}>
          Metin
          <input type="text" value={metin} onChange={(e) => setMetin(e.target.value)} style={{ flex: 1 }} />
        </label>
        <Rozet tur="webcrypto" />
      </div>
      <div className="sf-izgara">
        <div className="sf-kutu">
          <h4>Kodlama · Base64</h4>
          <pre className="sf-kod">{b64}</pre>
          <p className="sf-not">Anahtar yok. Herkes geri çevirir:</p>
          <pre className="sf-kod">{bayttanMetin(base64tenBayt(b64))}</pre>
        </div>
        <div className="sf-kutu">
          <h4>Hash · SHA-256</h4>
          <pre className="sf-kod">{hash}</pre>
          <p className="sf-not">Metin ne kadar uzun olursa olsun 64 hex karakter (256 bit). Geri çevirmenin yolu yok; yalnız aynı metnin hash'i yeniden hesaplanıp karşılaştırılır.</p>
        </div>
        <div className="sf-kutu">
          <h4>Şifreleme · AES-256-GCM</h4>
          <p className="sf-not">Anahtar (gizli):</p>
          <pre className="sf-kod">{anahtarYazi.slice(0, 16)}…</pre>
          <p className="sf-not">Şifreli metin (nonce + şifreli + etiket, Base64):</p>
          <pre className="sf-kod">{paket ? base64(new Uint8Array([...paket.nonce, ...paket.sifreli])) : "…"}</pre>
          <div className="sf-satir">
            <button type="button" className="cip" onClick={() => anahtarlaCoz(true)}>Anahtarla çöz</button>
            <button type="button" className="cip" onClick={() => anahtarlaCoz(false)}>Başka anahtarla dene</button>
          </div>
          {coz && <p className={`sf-sonuc ${coz.startsWith("✓") ? "sf-iyi" : "sf-kotu"}`}>{coz}</p>}
        </div>
      </div>
      <p className="sf-not">Metne tek harf ekle: Base64 yalnız sonunu değiştirir, hash tamamen değişir, şifreli metin ise her seferinde yeni bir nonce ile baştan farklı çıkar.</p>
    </div>
  );
}

// ---------------- G-S1-02: bayt dönüştürücü ----------------

export function BaytDonusturucu() {
  const [kip, setKip] = useState<"metin" | "base64" | "hex">("metin");
  const [giris, setGiris] = useState("Şifre");
  let baytlar: Uint8Array | null = null;
  let hata = "";
  try {
    baytlar = kip === "metin" ? metindenBayt(giris) : kip === "base64" ? base64tenBayt(giris) : Uint8Array.from(giris.replace(/\s+/g, "").match(/../g) ?? [], (x) => {
      if (!/^[0-9a-f]{2}$/i.test(x)) throw new Error();
      return parseInt(x, 16);
    });
  } catch {
    hata = kip === "base64" ? "Bu geçerli bir Base64 metni değil." : "Hex yalnız 0-9 ve a-f karakterlerinden, çift sayıda basamaktan oluşur.";
  }
  const karakterler = baytlar ? [...bayttanMetin(baytlar)].map((c) => ({ c, b: [...metindenBayt(c)] })) : [];

  return (
    <div className="sf">
      <Secim ad="Giriş türü" secenekler={[["metin", "Metin"], ["base64", "Base64"], ["hex", "Hex"]]} deger={kip} degis={(k) => {
        if (baytlar) setGiris(k === "metin" ? bayttanMetin(baytlar) : k === "base64" ? base64(baytlar) : hex(baytlar));
        setKip(k);
      }} />
      <input type="text" value={giris} onChange={(e) => setGiris(e.target.value)} aria-label="Giriş" />
      {hata && <p className="sf-sonuc sf-kotu">{hata}</p>}
      {baytlar && (
        <>
          <div className="sf-tablo-sar">
            <table className="sf-tablo">
              <thead><tr><th>Karakter</th><th>UTF-8 baytları (hex)</th><th>Bitler</th></tr></thead>
              <tbody>
                {karakterler.map((k, i) => (
                  <tr key={i}>
                    <td className="sf-mono">{k.c === " " ? "␠" : k.c}</td>
                    <td className="sf-mono">{k.b.map((x) => x.toString(16).padStart(2, "0")).join(" ")}</td>
                    <td className="sf-mono">{k.b.map(bitler).join(" ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="sf-sonuc">
            {karakterler.length} karakter, <strong>{baytlar.length} bayt</strong> ({baytlar.length * 8} bit) · Hex: <code>{hex(baytlar)}</code> · Base64: <code>{base64(baytlar)}</code>
          </p>
        </>
      )}
    </div>
  );
}

// ---------------- G-S1-03: hangi hedef? ----------------

const HEDEFLER = ["Gizlilik", "Bütünlük", "Kimlik doğrulama", "İnkâr edilemezlik"] as const;
const DURUMLAR: { metin: string; dogru: (typeof HEDEFLER)[number]; neden: string }[] = [
  { metin: "Hastanın tahlil sonucunu yalnız doktoru okuyabilmeli.", dogru: "Gizlilik", neden: "Okuma yetkisi sınırlanıyor: şifreleme." },
  { metin: "İndirdiğin kurulum dosyası yolda değiştirilmemiş olmalı.", dogru: "Bütünlük", neden: "Değişiklik fark edilmeli: hash ya da MAC." },
  { metin: "Banka uygulaması, bağlandığı sunucunun gerçekten bankanınki olduğunu bilmeli.", dogru: "Kimlik doğrulama", neden: "Karşı tarafın kim olduğu kanıtlanıyor: sertifika ve imza." },
  { metin: "Bir sözleşmeyi e-imzayla onaylayan kişi sonradan \"ben imzalamadım\" diyememeli.", dogru: "İnkâr edilemezlik", neden: "Yalnız onun bildiği özel anahtarla atılmış imza üçüncü kişiye kanıtlanabilir." },
  { metin: "Kafe Wi-Fi'ında yazdığın mesajı ağdaki biri okuyamamalı.", dogru: "Gizlilik", neden: "Yol dinleniyor; içerik şifrelenmeli." },
  { metin: "\"100 TL gönder\" isteği yolda \"900 TL\" yapılırsa sunucu bunu reddetmeli.", dogru: "Bütünlük", neden: "İçeriğin değişmediği denetleniyor; şifreleme tek başına bunu sağlamaz." },
  { metin: "Ekip arkadaşından geldiği görünen mesajın gerçekten ondan geldiğinden emin olmak istiyorsun.", dogru: "Kimlik doğrulama", neden: "Gönderenin kimliği kanıtlanıyor: MAC ya da imza." },
  { metin: "Bir yazılım şirketi, yayımladığı güncellemeyi kendisinin çıkardığını herkese kanıtlayabilmeli.", dogru: "İnkâr edilemezlik", neden: "Kod imzası: herkes açık anahtarla doğrular, yalnız şirket imzalayabilir." },
];

export function HedefEslestir() {
  const [cevaplar, setCevaplar] = useState<Record<number, string>>({});
  const dogru = DURUMLAR.filter((d, i) => cevaplar[i] === d.dogru).length;
  return (
    <div className="sf">
      <ol className="sf-tablo" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        {DURUMLAR.map((d, i) => {
          const c = cevaplar[i];
          return (
            <li key={i} className="sf-kutu">
              <span>{d.metin}</span>
              <div className="sf-secim">
                {HEDEFLER.map((h) => (
                  <button key={h} type="button" className="cip" aria-pressed={c === h} onClick={() => setCevaplar({ ...cevaplar, [i]: h })}>{h}</button>
                ))}
              </div>
              {c && <span className={`sf-sonuc ${c === d.dogru ? "sf-iyi" : "sf-kotu"}`}>{c === d.dogru ? "✓ " : `✗ Doğrusu ${d.dogru}. `}{d.neden}</span>}
            </li>
          );
        })}
      </ol>
      <p className="sf-not">{Object.keys(cevaplar).length} / {DURUMLAR.length} durum yanıtlandı, {dogru} doğru.</p>
    </div>
  );
}

// ---------------- G-S2-01: entropi ölçer ----------------

const KUMELER: [RegExp, number, string][] = [
  [/[a-zçğıöşü]/, 32, "küçük harf"],
  [/[A-ZÇĞİÖŞÜ]/, 32, "büyük harf"],
  [/[0-9]/, 10, "rakam"],
  [/[^a-zA-Z0-9çğıöşüÇĞİÖŞÜ]/, 33, "simge"],
];
const KALIPLAR: [RegExp, string][] = [
  [/(19|20)\d\d/, "yıl gibi görünen bir sayı"],
  [/(.)\1\1/, "aynı karakterin tekrarı"],
  [/(0123|1234|2345|3456|4567|5678|6789|abcd|qwer|asdf)/i, "klavye ya da sayı dizisi"],
  [/(parola|sifre|şifre|password|admin|qwerty|istanbul|ankara|seni|sevgi|galatasaray|fenerbahce|besiktas)/i, "sözlükte ilk denenen bir kelime"],
  [/^[A-ZÇĞİÖŞÜ][a-zçğıöşü]+\d+[^a-zA-Z0-9]?$/, "\"Kelime + sayı + simge\" kalıbı"],
];

const sure = (sn: number) => {
  if (sn < 1) return "1 saniyeden kısa";
  const birimler: [number, string][] = [[31557600e9, "milyar yıl"], [31557600e6, "milyon yıl"], [31557600, "yıl"], [86400, "gün"], [3600, "saat"], [60, "dakika"], [1, "saniye"]];
  for (const [b, ad] of birimler) if (sn >= b) return `${(sn / b) < 1000 ? (sn / b).toFixed(sn / b < 10 ? 1 : 0) : (sn / b).toExponential(1)} ${ad}`;
  return `${sn.toFixed(0)} saniye`;
};

export function EntropiOlcer() {
  const [parola, setParola] = useState("Istanbul2024!");
  const [uzunluk, setUzunluk] = useState(16);
  const kullanilan = KUMELER.filter(([d]) => d.test(parola));
  const alfabe = kullanilan.reduce((t, [, n]) => t + n, 0);
  const bit = parola.length && alfabe ? parola.length * Math.log2(alfabe) : 0;
  const uyarilar = KALIPLAR.filter(([d]) => d.test(parola)).map(([, a]) => a);
  const uret = () => {
    const k = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789-_.!";
    // Mod alırken sapma olmasın diye alfabe uzunluğunun katına sığmayan değerler atılır
    const sinir = Math.floor(2 ** 32 / k.length) * k.length;
    let s = "";
    while (s.length < uzunluk) for (const x of crypto.getRandomValues(new Uint32Array(uzunluk))) if (x < sinir && s.length < uzunluk) s += k[x % k.length];
    setParola(s);
  };
  return (
    <div className="sf">
      <div className="sf-ust">
        <label style={{ flex: 1 }}>
          Parola
          <input type="text" value={parola} onChange={(e) => setParola(e.target.value)} style={{ flex: 1 }} spellCheck={false} />
        </label>
      </div>
      <p className="sf-not">Kullanılan karakter kümeleri: {kullanilan.map(([, n, a]) => `${a} (${n})`).join(", ") || "yok"} → alfabe {alfabe}</p>
      <p className="sf-sonuc">
        Üst sınır: {parola.length} × log₂ {alfabe} ≈ <strong>{bit.toFixed(1)} bit</strong>
        {uyarilar.length > 0 && <> · ama {uyarilar.join(", ")} var; gerçek entropi bunun çok altında.</>}
      </p>
      <div className="sf-izgara">
        <div className="sf-kutu">
          <h4>Hızlı hash (ör. düz SHA-256), GPU: 10¹⁰ deneme/sn</h4>
          <span className="sf-sayi">{sure(2 ** bit / 2 / 1e10)}</span>
        </div>
        <div className="sf-kutu">
          <h4>Yavaş parola hash'i (ör. Argon2): 10⁴ deneme/sn</h4>
          <span className="sf-sayi">{sure(2 ** bit / 2 / 1e4)}</span>
        </div>
      </div>
      <div className="sf-satir">
        <label>Uzunluk <input type="number" min={6} max={64} value={uzunluk} onChange={(e) => setUzunluk(Math.max(6, Math.min(64, Number(e.target.value) || 6)))} /></label>
        <button type="button" className="cip" onClick={uret}>Rastgele parola üret</button>
        <Rozet tur="webcrypto" />
      </div>
      <p className="sf-not">Hesap, parolanın <em>rastgele</em> seçildiğini varsayar ve ortalama süreyi (uzayın yarısı) verir. İnsanın seçtiği parolada saldırgan önce sözlükleri ve kalıpları dener; o yüzden uyarılar çıkan parolada süre gerçekte çok daha kısadır.</p>
    </div>
  );
}

// ---------------- G-S2-02: rastgele mi? ----------------

function istatistik(b: string) {
  const n = b.length;
  const bir = [...b].filter((x) => x === "1").length;
  let kosu = n ? 1 : 0;
  let enUzun = n ? 1 : 0;
  let simdiki = 1;
  for (let i = 1; i < n; i++) {
    if (b[i] === b[i - 1]) enUzun = Math.max(enUzun, ++simdiki);
    else {
      kosu++;
      simdiki = 1;
    }
  }
  return { n, bir, kosu, enUzun };
}

export function RastgeleMi() {
  const [bitDizisi, setBitDizisi] = useState("");
  const [makine, setMakine] = useState("");
  const ekle = (x: string) => setBitDizisi((b) => (b + x).slice(0, 100));
  const benim = istatistik(bitDizisi);
  const onun = istatistik(makine);
  const uret = () => setMakine([...crypto.getRandomValues(new Uint8Array(bitDizisi.length || 64))].map((x) => String(x & 1)).join(""));
  const satir = (ad: string, s: ReturnType<typeof istatistik>) => (
    <tr>
      <td>{ad}</td>
      <td className="sf-sayi">{s.n}</td>
      <td className="sf-sayi">{s.n ? `%${Math.round((100 * s.bir) / s.n)}` : "-"}</td>
      <td className="sf-sayi">{s.kosu}</td>
      <td className="sf-sayi">{s.enUzun}</td>
    </tr>
  );
  const beklenenKosu = benim.n ? (benim.n + 1) / 2 : 0;
  const yorum =
    benim.n < 30
      ? "En az 30 bit yaz, sonra karşılaştır."
      : benim.kosu > beklenenKosu * 1.25
        ? `Çok sık değiştirmişsin: ${benim.kosu} koşu var, rastgele bir dizide yaklaşık ${beklenenKosu.toFixed(0)} beklenir. İnsanlar uzun tekrarlardan kaçınır.`
        : benim.enUzun < Math.log2(benim.n) - 1
          ? `En uzun tekrarın ${benim.enUzun}; ${benim.n} bitlik rastgele bir dizide genellikle ${Math.round(Math.log2(benim.n))} civarı görülür.`
          : "Bu basit testlerden geçtin. Ama testten geçmek rastgele olmanın kanıtı değildir.";
  return (
    <div className="sf">
      <p className="sf-not">Aklına gelen 0 ve 1'leri “rastgele” olacak şekilde yaz ya da düğmelere bas (en fazla 100).</p>
      <div className="sf-satir">
        <button type="button" className="cip" onClick={() => ekle("0")}>0</button>
        <button type="button" className="cip" onClick={() => ekle("1")}>1</button>
        <input type="text" value={bitDizisi} onChange={(e) => setBitDizisi(e.target.value.replace(/[^01]/g, "").slice(0, 100))} aria-label="Bit dizisi" style={{ flex: 1, fontFamily: "var(--mono)" }} />
        <button type="button" className="cip" onClick={() => setBitDizisi("")}>Temizle</button>
      </div>
      <div className="sf-satir">
        <button type="button" className="cip" onClick={uret}>Bilgisayar da üretsin</button>
        <Rozet tur="webcrypto" />
      </div>
      {makine && <pre className="sf-kod">{makine}</pre>}
      <div className="sf-tablo-sar">
        <table className="sf-tablo">
          <thead><tr><th></th><th>Bit</th><th>1 oranı</th><th>Koşu sayısı</th><th>En uzun tekrar</th></tr></thead>
          <tbody>
            {satir("Senin dizin", benim)}
            {makine && satir("crypto.getRandomValues", onun)}
          </tbody>
        </table>
      </div>
      <p className={`sf-sonuc ${benim.n >= 30 && !yorum.startsWith("Bu basit") ? "sf-kotu" : ""}`}>{yorum}</p>
    </div>
  );
}

// ---------------- G-S2-03: tahmin edilebilir üreteç ----------------

export function LcgOyunu() {
  const [tohum, setTohum] = useState(() => crypto.getRandomValues(new Uint8Array(1))[0]! % 16);
  const [adet, setAdet] = useState(3);
  const [tahmin, setTahmin] = useState("");
  const [sonuc, setSonuc] = useState<string | null>(null);
  const dizi = lcg(5, 3, 16, tohum, 12);
  const gorunen = dizi.slice(0, adet);
  const dene = () => {
    const d = dizi[adet]!;
    setSonuc(Number(tahmin) === d ? `✓ Doğru: ${d}. Kuralı bilen geleceği bilir.` : `✗ Sıradaki ${d} idi. İpucu: x(n+1) = (5·x(n) + 3) mod 16.`);
    setAdet((a) => Math.min(a + 1, 11));
    setTahmin("");
  };
  return (
    <div className="sf">
      <div className="sf-ust">
        <span>Bir oyun sunucusunun “rastgele” kartları: <code>x(n+1) = (5·x(n) + 3) mod 16</code></span>
        <Rozet tur="oyuncak" />
      </div>
      <pre className="sf-kod">{gorunen.join(", ")}, ?</pre>
      <div className="sf-satir">
        <label>Sıradaki kart <input type="number" value={tahmin} onChange={(e) => setTahmin(e.target.value)} /></label>
        <button type="button" className="cip" onClick={dene} disabled={tahmin === ""}>Tahmin et</button>
        <button type="button" className="cip" onClick={() => { setTohum(crypto.getRandomValues(new Uint8Array(1))[0]! % 16); setAdet(3); setSonuc(null); }}>Yeni oyun</button>
      </div>
      {sonuc && <p className={`sf-sonuc ${sonuc.startsWith("✓") ? "sf-iyi" : "sf-kotu"}`}>{sonuc}</p>}
      <p className="sf-not">Bu üreteç 16 adımda kendini tekrar eder ve tek bir çıktı sonrakini belirler. Kriptografik üreteçte (CSPRNG) önceki çıktıları bilmek sonrakini tahmine yardım etmez.</p>
    </div>
  );
}
