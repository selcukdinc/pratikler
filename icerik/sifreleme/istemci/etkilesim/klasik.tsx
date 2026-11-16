// 4. ünitenin etkileşimli şekilleri: Sezar çarkı, frekans analizi tezgahı, Vigenère
// kırıcı ve Enigma. Hepsi oyuncak (src/kripto/oyuncak).
import { useMemo, useState } from "react";
import { Rozet } from "../../../../src/kripto/Rozet";
import { ALFABE, anahtarTahmini, frekans, ortalamaIndeks, sezar, vigenereCoz } from "../../../../src/kripto/oyuncak/klasik";
import { ENIGMA_ALFABE, ROTORLAR, tusaBas, type EnigmaAyari, type RotorAdi } from "../../../../src/kripto/oyuncak/enigma";
import { INGILIZCE, TURKCE } from "../../../../src/kripto/frekanslar";
import { Secim } from "./temeller";

// ---------------- G-S4-01: Sezar çarkı ----------------

export function SezarCarki() {
  const [kayma, setKayma] = useState(3);
  const [metin, setMetin] = useState("GİZLİ TOPLANTI YARIN");
  const [hepsi, setHepsi] = useState(false);
  const n = ALFABE.length;
  const harfler = [...ALFABE];
  const konum = (i: number, r: number) => {
    const aci = (2 * Math.PI * i) / n - Math.PI / 2;
    return [160 + r * Math.cos(aci), 160 + r * Math.sin(aci)] as const;
  };
  return (
    <div className="sf">
      <div className="sf-ust">
        <label style={{ flex: 1 }}>Kayma <input type="range" min={0} max={n - 1} value={kayma} onChange={(e) => setKayma(Number(e.target.value))} style={{ flex: 1 }} /> <strong className="sf-sayi">{kayma}</strong></label>
        <Rozet tur="oyuncak" />
      </div>
      <svg viewBox="0 0 320 320" role="img" aria-label={`Sezar çarkı, ${kayma} kayma: A harfi ${ALFABE[kayma]} olur`} style={{ maxWidth: 320, width: "100%", alignSelf: "center" }}>
        <circle cx={160} cy={160} r={150} fill="none" stroke="currentColor" strokeOpacity={0.25} />
        <circle cx={160} cy={160} r={108} fill="none" stroke="currentColor" strokeOpacity={0.25} />
        {harfler.map((h, i) => {
          const [x, y] = konum(i, 132);
          const [x2, y2] = konum(i, 88);
          return (
            <g key={h}>
              <text x={x} y={y + 5} textAnchor="middle" fontSize={14} fill="currentColor" fontWeight={i === 0 ? 700 : 400}>{h}</text>
              <text x={x2} y={y2 + 5} textAnchor="middle" fontSize={14} fill={i === 0 ? "var(--warning)" : "var(--link)"} fontWeight={i === 0 ? 700 : 400}>{harfler[(i + kayma) % n]}</text>
            </g>
          );
        })}
        <text x={160} y={156} textAnchor="middle" fontSize={11} fill="currentColor" opacity={0.7}>dış: açık</text>
        <text x={160} y={172} textAnchor="middle" fontSize={11} fill="currentColor" opacity={0.7}>iç: şifreli</text>
      </svg>
      <label>Açık metin <input type="text" value={metin} onChange={(e) => setMetin(e.target.value)} style={{ flex: 1 }} /></label>
      <pre className="sf-kod">{sezar(metin, kayma)}</pre>
      <button type="button" className="cip" aria-pressed={hepsi} onClick={() => setHepsi(!hepsi)} style={{ alignSelf: "flex-start" }}>
        Kaba kuvvet: bu şifreli metni bütün kaymalarla çöz
      </button>
      {hepsi && (
        <div className="sf-tablo-sar">
          <table className="sf-tablo">
            <tbody>
              {Array.from({ length: n - 1 }, (_, k) => k + 1).map((k) => (
                <tr key={k} className={k === kayma ? "sf-vurgu" : undefined}>
                  <td className="sf-sayi">{k}</td>
                  <td className="sf-mono">{sezar(sezar(metin, kayma), -k)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ---------------- G-S4-02: frekans analizi tezgahı ----------------

export const ORNEK_YERINE_KOYMA =
  "ÖDOSÜUĞDZYOVA ĞIGATMOÖ ZMĞUDOÜÇZTNT ĞOJMOMOŞOTA VAŞOM ZTZRÜZDNT ĞOJMOMOŞOTA VZHZTND. CZMVNDĞZT COCÜAÇO EOMCA EOMA ZTZRÜZDN EOMÇAVOÖİA ÇACZLN UÖFHZÇZJ. EF HIJVAT ZMĞUDOÜÇZMZD RADÖACA ZİNÖ HZHNÇMZTND GA HNMMZDKZ OTKAMATOD.";

export function FrekansTezgahi({ baslangic = ORNEK_YERINE_KOYMA }: { baslangic?: string }) {
  const [metin, setMetin] = useState(baslangic);
  const [dil, setDil] = useState<"tr" | "en">("tr");
  const [esleme, setEsleme] = useState<Record<string, string>>({});
  const alfabe = dil === "tr" ? ALFABE : ENIGMA_ALFABE;
  const dagilim = dil === "tr" ? TURKCE : INGILIZCE;
  const buyuk = metin.toLocaleUpperCase("tr-TR");
  const f = useMemo(() => frekans(buyuk.replace(/[^A-ZÇĞİÖŞÜ]/g, "")), [buyuk]);
  const toplam = f.reduce((t, [, x]) => t + x, 0) || 1;
  const enCok = Math.max(...f.map(([, x]) => (100 * x) / toplam), ...Object.values(dagilim));
  const dilSirasi = Object.entries(dagilim).sort((a, b) => b[1] - a[1]).map(([h]) => h);
  const otomatik = () => setEsleme(Object.fromEntries(f.map(([h], i) => [h, dilSirasi[i] ?? ""])));
  const kullanilan = new Set(Object.values(esleme).filter(Boolean));
  return (
    <div className="sf">
      <div className="sf-ust">
        <Secim ad="Karşılaştırılacak dil" secenekler={[["tr", "Türkçe"], ["en", "İngilizce"]]} deger={dil} degis={(d) => { setDil(d); setEsleme({}); }} />
        <Rozet tur="oyuncak" />
      </div>
      <textarea value={metin} onChange={(e) => { setMetin(e.target.value); setEsleme({}); }} aria-label="Şifreli metin" spellCheck={false} />
      <div className="sf-histogram" role="img" aria-label="Şifreli metnin harf sıklıkları; kesikli çizgi dilin ortalaması">
        {f.map(([h, x], i) => {
          const yuzde = (100 * x) / toplam;
          const dilHarf = dilSirasi[i];
          return (
            <div key={h} className="sf-sutun" title={`${h}: %${yuzde.toFixed(1)} · dilde ${i + 1}. sıradaki ${dilHarf}: %${(dagilim[dilHarf ?? ""] ?? 0).toFixed(1)}`}>
              <div className="sf-sutun-dil" style={{ bottom: `calc(${(100 * (dagilim[dilHarf ?? ""] ?? 0)) / enCok}% * 0.8 + 18px)` }} />
              <div className="sf-sutun-cubuk" style={{ height: `${(80 * yuzde) / enCok}%` }} />
              <span>{h}</span>
            </div>
          );
        })}
      </div>
      <p className="sf-not">Sütunlar şifreli metnin harflerini çoktan aza dizer; kesikli çizgi, dilde aynı sıradaki harfin ortalama sıklığıdır. En sık harflerden başla, sonra kısa kelimelere bak.</p>
      <div className="sf-satir">
        <button type="button" className="cip" onClick={otomatik}>Sıklık sırasıyla eşleştir</button>
        <button type="button" className="cip" onClick={() => setEsleme({})}>Eşlemeleri sil</button>
      </div>
      <div className="sf-esleme">
        {f.map(([h]) => (
          <label key={h}>
            {h}→
            <select value={esleme[h] ?? ""} onChange={(e) => setEsleme({ ...esleme, [h]: e.target.value })}>
              <option value="">?</option>
              {[...alfabe].map((a) => (
                <option key={a} value={a} disabled={kullanilan.has(a) && esleme[h] !== a}>{a}</option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <div className="sf-cozulen" aria-live="polite">
        {[...buyuk].map((c, i) => {
          const e = esleme[c];
          if (!/[A-ZÇĞİÖŞÜ]/.test(c)) return <span key={i}>{c}</span>;
          return e ? <span key={i}>{e}</span> : <span key={i} className="sf-cozulmemis">{c.toLocaleLowerCase("tr-TR")}</span>;
        })}
      </div>
      <p className="sf-not">Çözülmemiş harfler altı noktalı küçük harfle görünür. Sıklık sırasıyla eşleştirme çoğu zaman yalnız ilk birkaç harfi doğru tutturur; gerisini kelimelerden tahmin edersin.</p>
    </div>
  );
}

// ---------------- G-S4-03: Vigenère kırıcı ----------------

// "KALEM" anahtarıyla şifrelenmiş 292 harflik Türkçe metin (klasik.test.ts kırılabildiğini sınar)
export const ORNEK_VIGENERE =
  "LİZJV EAJEF YAEĞÜ VMLHM AÖBGR FİRÜR YEEÖM YEACR VAŞMH YAJEE TLUÜP TVÜJR AEEIĞ UFEIG UYIDK TLZEF MAYMF TLLRM JSLSÜ YDUĞİ AKILR DHLÜS PAEÖA TBÜÜZ KYAEK YAGNS DEZIC UYCÜP ĞSCSI ADLEC KHĞEF TNĞIZ DAEIH ZEFNN ĞŞÜİF ÖNÜSP ÖSCSI AUSIH URÖNM AATZM DUKAC YUŞAN ĞLHSI ACLRR GİBÖİ NÜYVR JAEUM DÇLPM DIBEM İRUPÜ DVPLR DPLÜÖ KFEIZ KNFEC KLÜDV İLPÖÇ YAJGM NÖKBA HR";

const harfleriAl = (s: string) => [...s.toLocaleUpperCase("tr-TR")].filter((c) => ALFABE.includes(c)).join("");

export function VigenereKirici({ baslangic = ORNEK_VIGENERE }: { baslangic?: string }) {
  const [metin, setMetin] = useState(baslangic);
  const [uzunluk, setUzunluk] = useState(0);
  const harfler = harfleriAl(metin);
  const indeksler = Array.from({ length: 12 }, (_, i) => ortalamaIndeks(harfler, i + 1));
  // En yüksek indeksin katları da yüksek çıkar; ona yakın (%90) ilk uzunluk seçilir
  const tepe = Math.max(...indeksler);
  const enIyiUzunluk = indeksler.findIndex((x) => x >= 0.9 * tepe) + 1;
  const L = uzunluk || enIyiUzunluk;
  const anahtar = anahtarTahmini(harfler, L, TURKCE);
  const enYuksek = Math.max(...indeksler, 0.07);
  return (
    <div className="sf">
      <div className="sf-ust">
        <span className="sf-not">Anahtar uzunluğunu bilmediğin bir Vigenère metni.</span>
        <Rozet tur="oyuncak" />
      </div>
      <textarea value={metin} onChange={(e) => setMetin(e.target.value)} aria-label="Şifreli metin" spellCheck={false} />
      <p className="sf-not">1. adım: Metni L gruba ayır (1., L+1., 2L+1. harfler...) ve grupların ortalama çakışma indeksini hesapla. Doğru L'de her grup tek bir Sezar'dır ve indeks Türkçe metinlerinkine yükselir.</p>
      <div className="sf-histogram" style={{ height: 100 }}>
        {indeksler.map((x, i) => (
          <button key={i} type="button" className="sf-sutun" onClick={() => setUzunluk(i + 1)} aria-pressed={L === i + 1} title={`L = ${i + 1}: ${x.toFixed(3)}`} style={{ background: "none", border: 0, cursor: "pointer", padding: 0 }}>
            <div className="sf-sutun-cubuk" style={{ height: `${(80 * x) / enYuksek}%`, background: L === i + 1 ? "var(--warning)" : undefined }} />
            <span>{i + 1}</span>
          </button>
        ))}
      </div>
      <p className="sf-not">2. adım: Her grubun hangi kaymayla geri çevrilince Türkçe harf dağılımına en çok benzediğini bul (ki-kare testi). Bulunan kaymalar anahtarın harfleridir.</p>
      <p className="sf-sonuc">
        L = {L}{L === enIyiUzunluk && !uzunluk ? " (en yüksek indeks)" : ""} · tahmin edilen anahtar: <strong className="sf-mono">{anahtar}</strong>
      </p>
      <pre className="sf-kod">{vigenereCoz(harfler, anahtar)}</pre>
      <p className="sf-not">Kısa metinde istatistik yanılabilir: anahtarın bir harfi yanlış çıkarsa her L. harf bozuk görünür. Bir sütunu tıklayıp başka uzunluk dene.</p>
    </div>
  );
}

// ---------------- G-S4-04: Enigma ----------------

const SIRALAR = ["QWERTZUIO", "ASDFGHJK", "PYXCVBNML"];
const harfAdi = (i: number) => ENIGMA_ALFABE[i]!;

export function EnigmaMakinesi() {
  const [rotorlar, setRotorlar] = useState<[RotorAdi, RotorAdi, RotorAdi]>(["I", "II", "III"]);
  const [baslangic, setBaslangic] = useState<[number, number, number]>([0, 0, 0]);
  const [konum, setKonum] = useState<[number, number, number]>([0, 0, 0]);
  const [fis, setFis] = useState("");
  const [giris, setGiris] = useState("");
  const [cikis, setCikis] = useState("");
  const [son, setSon] = useState<{ giris: string; cikis: string; yol: string[] } | null>(null);
  const ayar: EnigmaAyari = { rotorlar, konum, halka: [0, 0, 0], fis };
  const sifirla = (k = baslangic) => {
    setKonum(k);
    setGiris("");
    setCikis("");
    setSon(null);
  };
  const bas = (h: string) => {
    const s = tusaBas(ayar, h);
    setKonum(s.konum);
    setGiris((g) => g + h);
    setCikis((c) => c + s.cikis);
    setSon({ giris: h, cikis: s.cikis, yol: s.yol });
  };
  const ayarla = (r: number, d: number) => {
    const k = [...baslangic] as [number, number, number];
    k[r] = (k[r]! + d + 26) % 26;
    setBaslangic(k);
    sifirla(k);
  };
  const etiketler = ["fiş", "III", "II", "I", "yansıtıcı", "I", "II", "III", "fiş"].map((e, i) => (i >= 1 && i <= 3 ? rotorlar[3 - i] : i >= 5 && i <= 7 ? rotorlar[i - 5] : e));
  return (
    <div className="sf">
      <div className="sf-ust">
        <span className="sf-not">Üç rotorlu Enigma (I, II, III rotorları ve B yansıtıcısı tarihsel kablolamayla).</span>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-pencereler">
        {[0, 1, 2].map((r) => (
          <div key={r} className="sf-rotor">
            <select value={rotorlar[r]} aria-label={`${r + 1}. rotor`} onChange={(e) => {
              const y = [...rotorlar] as [RotorAdi, RotorAdi, RotorAdi];
              y[r] = e.target.value as RotorAdi;
              setRotorlar(y);
              sifirla();
            }}>
              {(Object.keys(ROTORLAR) as RotorAdi[]).map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
            <button type="button" className="cip" onClick={() => ayarla(r, 1)} aria-label={`${r + 1}. rotoru ileri al`}>▲</button>
            <span className="sf-rotor-harf" aria-live="polite">{harfAdi(konum[r]!)}</span>
            <button type="button" className="cip" onClick={() => ayarla(r, -1)} aria-label={`${r + 1}. rotoru geri al`}>▼</button>
          </div>
        ))}
      </div>
      <label>Fiş tablosu <input type="text" value={fis} onChange={(e) => { setFis(e.target.value.toUpperCase()); sifirla(); }} placeholder="AT BS DE" style={{ flex: 1, fontFamily: "var(--mono)" }} /></label>
      <div className="sf-klavye" aria-label="Lambalar">
        {SIRALAR.map((s) => (
          <div key={s}>{[...s].map((h) => <span key={h} className={`sf-tus ${son?.cikis === h ? "sf-lamba-yanik" : ""}`}>{h}</span>)}</div>
        ))}
      </div>
      <div className="sf-klavye" aria-label="Klavye">
        {SIRALAR.map((s) => (
          <div key={s}>{[...s].map((h) => <button key={h} type="button" className="sf-tus" onClick={() => bas(h)}>{h}</button>)}</div>
        ))}
      </div>
      {son && (
        <div className="sf-yol" aria-label="Akımın yolu">
          <strong>{son.giris}</strong>
          {son.yol.map((h, i) => (
            <span key={i} title={etiketler[i]}>{etiketler[i]}: {h}</span>
          ))}
          <strong>→ lamba {son.cikis}</strong>
        </div>
      )}
      <div className="sf-izgara">
        <div className="sf-kutu"><h4>Yazılan</h4><pre className="sf-kod">{giris || " "}</pre></div>
        <div className="sf-kutu"><h4>Yanan lambalar</h4><pre className="sf-kod">{cikis || " "}</pre></div>
      </div>
      <div className="sf-satir">
        <button type="button" className="cip" onClick={() => sifirla()}>Rotorları başlangıca al</button>
        <span className="sf-not">Şifreli metni aynı başlangıçtan yeniden yaz: açık metin geri gelir. Aynı harfe arka arkaya bas: her seferinde başka lamba yanar, ama hiçbir zaman kendisi.</span>
      </div>
    </div>
  );
}
