// 15. ünitenin etkileşimli şekilleri: anahtar zinciri tezgahı, "parolamı unuttum" senaryoları
// ve şifreli not defteri. Anahtar zinciri ve not defteri Web Crypto ile gerçekten çalışır
// (src/kripto/kasa.ts); hiçbir değer sunucuya ya da tarayıcı deposuna gitmez.
import { useEffect, useRef, useState } from "react";
import { hex } from "../../../../src/kripto/bayt";
import { Rozet } from "../../../../src/kripto/Rozet";
import { kasaAc, kasaKur, parolaAnahtarlari, kurtarmaSargisi, kurtarmaylaAc, parolaDegistir, type CihazdakiAnahtarlar, type Sarili, type SunucudakiKasa } from "../../../../src/kripto/kasa";
import { Secim } from "./temeller";

const kisa = (s: string, n = 10) => (s.length > n * 2 ? `${s.slice(0, n)}…` : s);
const YINELEME = 100_000;

// ---------------- G-S15-01: anahtar zinciri tezgahı ----------------

const ORNEK_OGELER = ["E-posta parolası: deniz-fener-1907", "Kafe Wi-Fi: misafir2026"];

function Halka({ ad, deger, yer, not }: { ad: string; deger: string; yer: "cihaz" | "sunucu"; not: string }) {
  return (
    <div className={`sf-kutu sf-halka sf-halka-${yer}`}>
      <div className="sf-satir">
        <strong>{ad}</strong>
        <span className={`sf-etiket ${yer === "cihaz" ? "sf-iyi" : "sf-etiket-sunucu"}`}>{yer === "cihaz" ? "yalnız cihazda" : "sunucuda saklanır"}</span>
      </div>
      <code className="sf-mono">{kisa(deger, 16)}</code>
      <span className="sf-not">{not}</span>
    </div>
  );
}

export function AnahtarZinciri() {
  const [parola, setParola] = useState("kirmizi-kalem-ada-79");
  const [eposta] = useState("ayse@ornek.com");
  const [durum, setDurum] = useState<{ sunucu: SunucudakiKasa; cihaz: CihazdakiAnahtarlar } | null>(null);
  const [onceki, setOnceki] = useState<SunucudakiKasa | null>(null);
  const [yeniParola, setYeniParola] = useState("yesil-defter-nehir-12");
  const [mesaj, setMesaj] = useState("");
  // Parola değiştirilince kasa yeniden kurulmaz; yalnız sargı yenilenir
  const atla = useRef(false);
  useEffect(() => {
    if (atla.current) {
      atla.current = false;
      return;
    }
    let iptal = false;
    const z = setTimeout(() => {
      kasaKur(parola, eposta, YINELEME, ORNEK_OGELER).then((d) => {
        if (iptal) return;
        setDurum(d);
        setOnceki(null);
        setMesaj("");
      });
    }, 300);
    return () => {
      iptal = true;
      clearTimeout(z);
    };
  }, [parola, eposta]);
  const degistir = async () => {
    if (!durum) return;
    const yeni = await parolaDegistir(durum.sunucu, parola, yeniParola);
    if (!yeni) return;
    const k = await parolaAnahtarlari(yeniParola, eposta, YINELEME);
    setOnceki(durum.sunucu);
    setDurum({ sunucu: yeni, cihaz: { ...durum.cihaz, anaAnahtar: hex(k.anaAnahtar), girisOzeti: hex(k.girisOzeti), sifrelemeAnahtari: hex(k.sifrelemeAnahtari) } });
    atla.current = true;
    setYeniParola(parola);
    setParola(yeniParola);
    setMesaj(`Parola değişti. Sunucuda yalnız iki satır değişti: giriş doğrulayıcısı ve sarılı kasa anahtarı. ${yeni.ogeler.length} öğenin hiçbiri yeniden şifrelenmedi; kasa anahtarı ve öğe anahtarları aynı, paroladan türeyen üç değer yeni.`);
  };
  const s = durum?.sunucu;
  const c = durum?.cihaz;
  const degisti = (a: unknown, b: unknown) => onceki !== null && JSON.stringify(a) !== JSON.stringify(b);
  return (
    <div className="sf">
      <div className="sf-ust">
        <label className="sf-satir">
          Ana parola <input value={parola} onChange={(e) => setParola(e.target.value)} aria-label="Ana parola" />
        </label>
        <Rozet tur="webcrypto" />
      </div>
      {!c || !s ? (
        <p className="sf-not">Anahtarlar türetiliyor (PBKDF2, {YINELEME.toLocaleString("tr-TR")} yineleme)…</p>
      ) : (
        <>
          <div className="sf-zincir">
            <Halka ad="Ana anahtar" deger={c.anaAnahtar} yer="cihaz" not={`PBKDF2(parola, tuz = "${eposta}", ${YINELEME.toLocaleString("tr-TR")} yineleme). Parola ne kadar güçlüyse bu da o kadar güçlü.`} />
            <div className="sf-ikili">
              <Halka ad="Giriş özeti" deger={c.girisOzeti} yer="cihaz" not={'HKDF(ana anahtar, "giris"). Sunucuya gönderilir; sunucu bunun da yalnız SHA-256\'sını saklar.'} />
              <Halka ad="Anahtar şifreleme anahtarı" deger={c.sifrelemeAnahtari} yer="cihaz" not={'HKDF(ana anahtar, "sifreleme"). Cihazdan hiç çıkmaz; giriş özetinden türetilemez.'} />
            </div>
            <Halka ad="Kasa anahtarı" deger={c.kasaAnahtari} yer="cihaz" not="Rastgele 256 bit. Bir kez üretilir; parola değişse de aynı kalır." />
            <div className="sf-ikili">
              {c.ogeAnahtarlari.map((k, i) => (
                <Halka key={i} ad={`${i + 1}. öğenin anahtarı`} deger={k} yer="cihaz" not={`Rastgele; kasa anahtarıyla sarılır. Öğe: "${ORNEK_OGELER[i]}"`} />
              ))}
            </div>
          </div>
          <div className="sf-kutu">
            <h4>Sunucunun veritabanında duranlar</h4>
            <div className="sf-tablo-sar">
              <table className="sf-tablo">
                <tbody>
                  <tr>
                    <th>E-posta (tuz)</th>
                    <td className="sf-mono">{s.eposta}</td>
                  </tr>
                  <tr>
                    <th>Yineleme</th>
                    <td className="sf-mono">{s.yineleme}</td>
                  </tr>
                  <tr className={degisti(s.girisDogrulayici, onceki?.girisDogrulayici) ? "sf-vurgu" : ""}>
                    <th>Giriş doğrulayıcısı</th>
                    <td className="sf-mono">{kisa(s.girisDogrulayici, 16)}</td>
                  </tr>
                  <tr className={degisti(s.sariliKasaAnahtari, onceki?.sariliKasaAnahtari) ? "sf-vurgu" : ""}>
                    <th>Sarılı kasa anahtarı</th>
                    <td className="sf-mono">{kisa(s.sariliKasaAnahtari.sifreli, 16)}</td>
                  </tr>
                  {s.ogeler.map((o, i) => (
                    <tr key={i} className={degisti(o, onceki?.ogeler[i]) ? "sf-vurgu" : ""}>
                      <th>{i + 1}. öğe (sarılı anahtar · içerik)</th>
                      <td className="sf-mono">
                        {kisa(o.sariliAnahtar.sifreli, 8)} · {kisa(o.icerik.sifreli, 12)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="sf-not">Sunucuyu ele geçiren biri bu tabloyla ne yapabilir? Yalnız parolayı tahmin edip her deneme için PBKDF2 çalıştırabilir. Güçlü bir parola ve yavaş bir KDF tek savunmadır.</p>
          </div>
          <div className="sf-satir">
            <label className="sf-satir">
              Yeni parola <input value={yeniParola} onChange={(e) => setYeniParola(e.target.value)} aria-label="Yeni parola" />
            </label>
            <button type="button" className="cip" onClick={degistir} disabled={!yeniParola || yeniParola === parola}>
              Parolayı değiştir
            </button>
          </div>
          {mesaj && <p className="sf-sonuc sf-iyi">{mesaj}</p>}
        </>
      )}
    </div>
  );
}

// ---------------- G-S15-02: "parolamı unuttum" senaryoları ----------------

type Mimari = "sunucu" | "parola" | "kurtarma" | "emanet";
type Olay = "unuttum" | "sizinti" | "talep" | "ayrilan";

const MIMARILER: [Mimari, string][] = [
  ["sunucu", "Sunucu tarafı şifreleme"],
  ["parola", "Yalnız ana parola"],
  ["kurtarma", "Ana parola + kurtarma kodu"],
  ["emanet", "Ana parola + kurumsal emanet"],
];

const OLAYLAR: [Olay, string][] = [
  ["unuttum", "Parolamı unuttum"],
  ["sizinti", "Sunucu veritabanı sızdı"],
  ["talep", "Şirkete resmi veri talebi geldi"],
  ["ayrilan", "Çalışan işten ayrıldı, verisi lazım"],
];

const SONUC: Record<Mimari, Record<Olay, [boolean, string]>> = {
  sunucu: {
    unuttum: [true, "Sunucu parolanı e-postayla sıfırlar; veri kaybolmaz, çünkü anahtar zaten sunucuda."],
    sizinti: [false, "Anahtarlar da aynı sistemde; veritabanıyla birlikte anahtar deposu da sızarsa her şey okunur."],
    talep: [false, "Şirket veriyi çözüp teslim edebilir; teknik olarak hayır deme imkânı yoktur."],
    ayrilan: [true, "Yönetici veriye doğrudan erişir."],
  },
  parola: {
    unuttum: [false, "Kasa anahtarı yalnız paroladan türeyen anahtarla açılır. Parola giderse veri de gider; destek ekibi bile kurtaramaz."],
    sizinti: [true, "Saldırgan yalnız sarılı baytları alır; her parola tahmini için yavaş KDF'yi çalıştırmak zorundadır."],
    talep: [true, "Şirket yalnız şifreli bayt ve metadata verebilir."],
    ayrilan: [false, "Parolayı bilen kişi gitti; veriye kimse ulaşamaz."],
  },
  kurtarma: {
    unuttum: [true, "Kurtarma kodu kasa anahtarının ikinci bir sargısını açar. Kodu güvenli bir yerde saklamak kullanıcının işidir."],
    sizinti: [true, "Kurtarma kodu yüksek entropilidir (160 bit); sargısı kaba kuvvetle açılamaz."],
    talep: [true, "Şirkette kod yok; yine yalnız şifreli bayt verebilir."],
    ayrilan: [false, "Kod çalışanın elindeydi; kurum için kurtarma yolu yok."],
  },
  emanet: {
    unuttum: [true, "Kurumun anahtarıyla sarılmış bir kopya vardır; yönetici kasayı kurtarır."],
    sizinti: [true, "Emanet kopyası kurumun açık anahtarına sarılı; kurumun özel anahtarı sunucuda değilse sızıntı tek başına yetmez."],
    talep: [false, "Kurum kendi anahtarıyla açıp teslim edebilir. Sıfır bilgi sunucuya karşı korur, kuruma karşı değil."],
    ayrilan: [true, "Kurum, emanet anahtarıyla çalışanın kasasını açar."],
  },
};

export function KurtarmaSenaryosu() {
  const [mimari, setMimari] = useState<Mimari>("parola");
  const [olay, setOlay] = useState<Olay>("unuttum");
  const [kod, setKod] = useState<{ kod: string; sargi: Sarili; kasa: Uint8Array } | null>(null);
  const [girilen, setGirilen] = useState("");
  const [sonuc, setSonuc] = useState<string | null>(null);
  const [ok, tekst] = SONUC[mimari][olay];
  const uret = async () => {
    const kasa = globalThis.crypto.getRandomValues(new Uint8Array(32));
    const { kod, sargi } = await kurtarmaSargisi(kasa);
    setKod({ kod, sargi, kasa });
    setGirilen("");
    setSonuc(null);
  };
  const dene = async () => {
    if (!kod) return;
    const k = await kurtarmaylaAc(girilen, kod.sargi);
    setSonuc(k && k.every((b, i) => b === kod.kasa[i]) ? "Kasa anahtarı açıldı." : "Açılmadı: kod yanlış (AES-GCM etiketi tutmuyor).");
  };
  return (
    <div className="sf">
      <div className="sf-ust">
        <Secim ad="Mimari" secenekler={MIMARILER} deger={mimari} degis={setMimari} />
        <Rozet tur="webcrypto" />
      </div>
      <Secim ad="Olay" secenekler={OLAYLAR} deger={olay} degis={setOlay} />
      <p className={`sf-sonuc ${ok ? "sf-iyi" : "sf-kotu"}`}>
        <strong>{ok ? (olay === "unuttum" || olay === "ayrilan" ? "Veri kurtarılır." : "Veri güvende.") : olay === "unuttum" || olay === "ayrilan" ? "Veri kaybolur." : "Veri açığa çıkar."}</strong> {tekst}
      </p>
      <div className="sf-tablo-sar">
        <table className="sf-tablo">
          <thead>
            <tr>
              <th />
              {OLAYLAR.map(([o, ad]) => (
                <th key={o}>{ad}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MIMARILER.map(([m, ad]) => (
              <tr key={m} className={m === mimari ? "sf-vurgu" : ""}>
                <th>{ad}</th>
                {OLAYLAR.map(([o]) => (
                  <td key={o}>{SONUC[m][o][0] ? "✓" : "✗"}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="sf-not">Hiçbir satır dört sütunda birden ✓ almaz: kurtarabilen biri varsa, o kişi (ya da onu zorlayan) veriye de ulaşabilir. Kurtarma ile gizlilik arasındaki gerilim budur.</p>
      {mimari === "kurtarma" && (
        <div className="sf-kutu">
          <h4>Gerçek bir kurtarma kodu</h4>
          <div className="sf-satir">
            <button type="button" className="cip" onClick={uret}>
              Kurtarma kodu üret
            </button>
            {kod && <code className="sf-mono">{kod.kod}</code>}
          </div>
          {kod && (
            <div className="sf-satir">
              <input value={girilen} onChange={(e) => setGirilen(e.target.value)} placeholder="Kodu yaz ya da bir harfini değiştir" aria-label="Kurtarma kodu" />
              <button type="button" className="cip" onClick={dene}>
                Kasayı aç
              </button>
              {sonuc && <span className="sf-not">{sonuc}</span>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ---------------- G-S15-03: şifreli not defteri ----------------

export function NotDefteri() {
  const [notlar, setNotlar] = useState("Alışveriş: süt, ekmek\nDoktor randevusu salı 10.30");
  const [parola, setParola] = useState("");
  const [kasa, setKasa] = useState<SunucudakiKasa | null>(null);
  const [acmaParolasi, setAcmaParolasi] = useState("");
  const [durum, setDurum] = useState<{ iyi: boolean; metin: string } | null>(null);
  const [mesgul, setMesgul] = useState(false);
  const kaydet = async () => {
    setMesgul(true);
    const { sunucu } = await kasaKur(parola, "not@ornek.com", YINELEME, notlar.split("\n").filter((x) => x.trim()));
    setKasa(sunucu);
    setNotlar("");
    setParola("");
    setDurum({ iyi: true, metin: "Kaydedildi ve kilitlendi. Notlar ekrandan silindi; sağdaki kutu sunucuya giden her şey." });
    setMesgul(false);
  };
  const ac = async () => {
    if (!kasa) return;
    setMesgul(true);
    const a = await kasaAc(kasa, acmaParolasi);
    if (a.tamam) {
      setNotlar(a.ogeler.join("\n"));
      setKasa(null);
      setAcmaParolasi("");
      setDurum({ iyi: true, metin: "Açıldı: notlar yalnız bu tarayıcıda çözüldü." });
    } else setDurum({ iyi: false, metin: a.neden });
    setMesgul(false);
  };
  return (
    <div className="sf">
      <div className="sf-ust">
        <span className="sf-not">Her satır ayrı bir not olur. Hiçbir şey kaydedilmez ya da gönderilmez; sayfayı kapatınca kaybolur.</span>
        <Rozet tur="webcrypto" />
      </div>
      <div className="sf-ikili">
        <div className="sf-kutu">
          <h4>Senin cihazın</h4>
          {kasa ? (
            <>
              <p className="sf-not">Defter kilitli.</p>
              <div className="sf-satir">
                <input type="password" value={acmaParolasi} onChange={(e) => setAcmaParolasi(e.target.value)} placeholder="Parola" aria-label="Açma parolası" />
                <button type="button" className="cip" onClick={ac} disabled={mesgul}>
                  Aç
                </button>
              </div>
            </>
          ) : (
            <>
              <textarea value={notlar} onChange={(e) => setNotlar(e.target.value)} rows={5} aria-label="Notlar" />
              <div className="sf-satir">
                <input type="password" value={parola} onChange={(e) => setParola(e.target.value)} placeholder="Bir parola seç" aria-label="Parola" />
                <button type="button" className="cip" onClick={kaydet} disabled={mesgul || !parola || !notlar.trim()}>
                  Şifrele ve kilitle
                </button>
              </div>
            </>
          )}
          {durum && <p className={`sf-sonuc ${durum.iyi ? "sf-iyi" : "sf-kotu"}`}>{durum.metin}</p>}
        </div>
        <div className="sf-kutu">
          <h4>Sunucunun gördüğü</h4>
          {kasa ? <pre className="sf-kod sf-sunucu-json">{JSON.stringify(kasa, null, 1)}</pre> : <p className="sf-not">Henüz bir şey gönderilmedi.</p>}
        </div>
      </div>
    </div>
  );
}
