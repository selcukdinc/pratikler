// 18. ünitenin etkileşimli şekilleri: gürültülü denklemler (LWE) oyunu, kuantum etki tablosu
// ile "şimdi topla, sonra çöz" hesaplayıcısı ve oyuncak modül-LWE anahtar kapsülleme.
// Hepsi oyuncaktır (src/kripto/oyuncak/kafes.ts); gerçek ML-KEM boyları tabloda verilir.
import { useMemo, useState } from "react";
import { Rozet } from "../../../../src/kripto/Rozet";
import { anahtarUret, BOYLAR, coz, gaussCoz, kabaKuvvet, lweUret, OYUNCAK, sifrele, type LweOrnegi } from "../../../../src/kripto/oyuncak/kafes";
import { Secim } from "./temeller";

// ---------------- G-S18-01: gürültülü denklemler ----------------

const Q = 97;

export function LweOyunu() {
  const [n, setN] = useState("2");
  const [gurultu, setGurultu] = useState(true);
  const [tohum, setTohum] = useState(11);
  const [goster, setGoster] = useState<"gauss" | "kaba" | null>(null);
  const boyut = Number(n);
  const o: LweOrnegi = useMemo(() => lweUret(boyut, boyut + 3, Q, gurultu ? 2 : 0, tohum), [boyut, gurultu, tohum]);
  const gauss = useMemo(() => gaussCoz(o.denklemler, boyut, Q), [o, boyut]);
  const kaba = useMemo(() => (goster === "kaba" ? kabaKuvvet(o, gurultu ? 2 : 0) : null), [o, goster, gurultu]);
  const harf = ["x", "y", "z"];
  const gaussDogru = gauss !== null && gauss.every((v, i) => v === o.s[i]);
  return (
    <div className="sf">
      <div className="sf-ust">
        <div className="sf-satir">
          <Secim ad="Bilinmeyen sayısı" secenekler={[["1", "1 bilinmeyen"], ["2", "2 bilinmeyen"], ["3", "3 bilinmeyen"]]} deger={n} degis={(v) => { setN(v); setGoster(null); }} />
          <label>
            <input type="checkbox" checked={gurultu} onChange={(e) => { setGurultu(e.target.checked); setGoster(null); }} /> Gürültü ekle (±2)
          </label>
        </div>
        <Rozet tur="oyuncak" />
      </div>
      <div className="sf-kutu sf-mono">
        {o.denklemler.map((d, i) => (
          <div key={i}>
            {d.a.map((a, j) => `${a}·${harf[j]}`).join(" + ")} ≡ {d.b} (mod {Q})
          </div>
        ))}
      </div>
      <div className="sf-satir">
        <button type="button" className="cip" onClick={() => setGoster("gauss")}>
          Gauss eleme ile çöz
        </button>
        <button type="button" className="cip" onClick={() => setGoster("kaba")}>
          Bütün olasılıkları dene
        </button>
        <button type="button" className="cip" onClick={() => { setTohum((t) => t + 1); setGoster(null); }}>
          Yeni denklemler
        </button>
      </div>
      {goster === "gauss" && (
        <p className={`sf-sonuc ${gaussDogru ? "sf-iyi" : "sf-kotu"}`}>
          İlk {boyut} denklemden: {gauss ? gauss.map((v, i) => `${harf[i]} = ${v}`).join(", ") : "sistem tekil"}. Gizli değer: {o.s.map((v, i) => `${harf[i]} = ${v}`).join(", ")}.{" "}
          {gaussDogru
            ? "Gürültüsüz denklemler lisede öğrendiğimiz yöntemle anında çözülür."
            : `Yanlış! Her denklemdeki küçücük hata (${o.hatalar.join(", ")}) eleme sırasında çarpılıp büyüyor ve sonucu bambaşka bir yere taşıyor.`}
        </p>
      )}
      {goster === "kaba" && kaba && (
        <p className="sf-sonuc">
          {Q}<sup>{boyut}</sup> = {kaba.deneme.toLocaleString("tr-TR")} aday denendi; bütün denklemlere ±2 içinde uyan: {kaba.adaylar.map((a) => `(${a.join(", ")})`).join(" ") || "yok"}. Küçük boyutta kaba kuvvet işe yarar. ML-KEM-768'de bilinmeyen sayısı 768; gizli katsayılar yalnız −2..2 arasında olsa bile aday sayısı 5<sup>768</sup> ≈ 10<sup>537</sup>. En iyi bilinen kafes algoritmaları da (kuantum olanlar dahil) üstel zaman ister.
        </p>
      )}
      <p className="sf-not">
        Bu, <strong>Learning With Errors</strong> (LWE) problemidir: gürültü yokken doğrusal cebir, gürültü varken (boyut büyüyünce) bilinen hiçbir yöntemle verimli çözülemeyen bir bulmaca. ML-KEM ve ML-DSA'nın güvenliği bu zorluğa dayanır.
      </p>
    </div>
  );
}

// ---------------- G-S18-02: kuantum etki tablosu ve Mosca hesabı ----------------

const ALGORITMALAR: { ad: string; tur: string; klasik: string; kuantum: string; kirik: boolean }[] = [
  { ad: "RSA-2048", tur: "Açık anahtar", klasik: "~112 bit", kuantum: "Shor ile polinom zamanda kırılır", kirik: true },
  { ad: "ECDH / ECDSA P-256, X25519, Ed25519", tur: "Açık anahtar", klasik: "~128 bit", kuantum: "Shor ile polinom zamanda kırılır", kirik: true },
  { ad: "Diffie-Hellman (sonlu cisim)", tur: "Açık anahtar", klasik: "~112 bit", kuantum: "Shor ile kırılır", kirik: true },
  { ad: "AES-128", tur: "Simetrik", klasik: "128 bit", kuantum: "Grover: ~64 bit (pratikte daha fazla)", kirik: false },
  { ad: "AES-256", tur: "Simetrik", klasik: "256 bit", kuantum: "Grover: ~128 bit, güvenli", kirik: false },
  { ad: "SHA-256", tur: "Hash", klasik: "256 bit ön görüntü", kuantum: "Grover: ~128 bit, güvenli", kirik: false },
  { ad: "ML-KEM-768, ML-DSA-65", tur: "Kafes", klasik: "~192 bit", kuantum: "Bilinen kuantum saldırısı yok", kirik: false },
];

export function KuantumEtki() {
  const [x, setX] = useState(10);
  const [y, setY] = useState(5);
  const [z, setZ] = useState(12);
  const tehlike = x + y > z;
  return (
    <div className="sf">
      <div className="sf-tablo-sar">
        <table className="sf-tablo">
          <thead>
            <tr>
              <th>Algoritma</th>
              <th>Tür</th>
              <th>Klasik güvenlik</th>
              <th>Büyük bir kuantum bilgisayar</th>
            </tr>
          </thead>
          <tbody>
            {ALGORITMALAR.map((a) => (
              <tr key={a.ad} className={a.kirik ? "sf-kirildi" : ""}>
                <td>{a.ad}</td>
                <td>{a.tur}</td>
                <td>{a.klasik}</td>
                <td>{a.kuantum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sf-kutu">
        <h4>Şimdi topla, sonra çöz: geçişe ne kadar vaktin var?</h4>
        <label className="sf-satir">
          Verinin gizli kalması gereken süre (x): {x} yıl
          <input type="range" min={0} max={40} value={x} onChange={(e) => setX(Number(e.target.value))} aria-label="Gizlilik süresi" />
        </label>
        <label className="sf-satir">
          Sistemini kuantuma dayanıklı hale getirme süren (y): {y} yıl
          <input type="range" min={0} max={20} value={y} onChange={(e) => setY(Number(e.target.value))} aria-label="Geçiş süresi" />
        </label>
        <label className="sf-satir">
          Kriptografik olarak işe yarar bir kuantum bilgisayara kalan süre tahmini (z): {z} yıl
          <input type="range" min={1} max={40} value={z} onChange={(e) => setZ(Number(e.target.value))} aria-label="Kuantum bilgisayara kalan süre" />
        </label>
        <p className={`sf-sonuc ${tehlike ? "sf-kotu" : "sf-iyi"}`}>
          x + y = {x + y} {tehlike ? ">" : "≤"} z = {z}.{" "}
          {tehlike
            ? "Geç kaldın: bugün kaydedilen trafiğin bir kısmı, hâlâ gizli olması gerekirken çözülebilecek. Geçişe hemen başlamak gerekir."
            : "Şimdilik yetişiyorsun; ama z tahmini belirsiz ve geçiş genellikle sanıldığından uzun sürer."}
        </p>
        <p className="sf-not">Bu eşitsizlik Michele Mosca'nın önerdiği kuraldır. Saldırgan şifreli trafiği bugün kaydedip yıllar sonra çözebileceği için tehdit, kuantum bilgisayarın geldiği günden önce başlar.</p>
      </div>
    </div>
  );
}

// ---------------- G-S18-03: oyuncak ML-KEM ----------------

export function OyuncakKem() {
  const [tohum, setTohum] = useState(3);
  const [eta, setEta] = useState(2);
  const p = { ...OYUNCAK, eta };
  const d = useMemo(() => {
    const { acik, gizli } = anahtarUret(p, tohum);
    const m = Array.from({ length: p.n }, (_, i) => ((tohum * 7 + i * 13) >> 2) & 1);
    const c = sifrele(p, acik, m, tohum + 1000);
    const cozulen = coz(p, gizli, c);
    const hata = cozulen.m.filter((b, i) => b !== m[i]).length;
    return { acik, gizli, m, c, cozulen, hata };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tohum, eta]);
  const W = 480;
  const H = 120;
  const q = p.q;
  const xi = (i: number) => 14 + (i * (W - 28)) / (p.n - 1);
  const yv = (v: number) => H / 2 - (v / (q / 2)) * (H / 2 - 6);
  const enBuyuk = Math.max(...BOYLAR.map((b) => b.acik + b.sifreli));
  return (
    <div className="sf">
      <div className="sf-ust">
        <div className="sf-satir">
          <button type="button" className="cip" onClick={() => setTohum((t) => t + 1)}>
            Yeni anahtar ve kapsülleme
          </button>
          <label className="sf-satir">
            Gürültü (η) {eta}
            <input type="range" min={1} max={40} value={eta} onChange={(e) => setEta(Number(e.target.value))} aria-label="Gürültü genişliği" />
          </label>
        </div>
        <Rozet tur="oyuncak" />
      </div>
      <p className="sf-not">
        Oyuncak parametreler: n = {p.n}, k = {p.k}, q = {q}. Mert'in açık anahtarı (A, t = A·s + e). Ayşe rastgele {p.n} bitlik bir sır m seçer, onu q/2'ye ölçekleyip gürültünün arkasına gizler: u = Aᵀ·r + e₁, v = tᵀ·r + e₂ + ⌈q/2⌋·m. Mert v − sᵀ·u hesaplar; kalan her katsayı 0'a yakınsa 0, ±q/2'ye yakınsa 1'dir.
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} className="sf-cpa" role="img" aria-label="Çözmede kalan katsayılar ve karar eşikleri">
        <rect x={0} y={yv(q / 4)} width={W} height={yv(-q / 4) - yv(q / 4)} className="sf-kem-sifir" />
        <line x1={0} y1={H / 2} x2={W} y2={H / 2} className="sf-eksen-cizgi" />
        {d.cozulen.kalan.map((v, i) => (
          <circle key={i} cx={xi(i)} cy={yv(v)} r={4} className={d.cozulen.m[i] === d.m[i] ? "sf-kem-dogru" : "sf-kem-yanlis"} />
        ))}
      </svg>
      <p className="sf-not">Ortadaki bant "0" bölgesi (|değer| &lt; q/4); dışı "1". Noktaların ortadan ya da kenardan ne kadar saptığı gürültüdür.</p>
      <div className="sf-kutu sf-mono">
        <div>Ayşe'nin sırrı: {d.m.join("")}</div>
        <div>Mert'in çözdüğü: {d.cozulen.m.join("")}</div>
      </div>
      <p className={`sf-sonuc ${d.hata ? "sf-kotu" : "sf-iyi"}`}>
        {d.hata
          ? `${d.hata} bit yanlış çözüldü: gürültü q/4 sınırını aştı. Gerçek ML-KEM gürültüyü öyle seçer ki bu olasılık 2^-138'in altında kalır.`
          : "İki taraf aynı sırra ulaştı. Gerçek ML-KEM bu sırrı bir hash'ten geçirip 32 baytlık ortak anahtar yapar; şifreli metni de yeniden şifreleyerek denetler (Fujisaki-Okamoto dönüşümü)."}
      </p>
      <div className="sf-kutu">
        <h4>Gerçek boylar (bayt)</h4>
        {BOYLAR.map((b) => (
          <div key={b.ad} className="sf-boy">
            <span className="sf-boy-ad">{b.ad}</span>
            <span className="sf-boy-cubuk" style={{ width: `${(100 * (b.acik + b.sifreli)) / enBuyuk}%` }} />
            <span className="sf-not">
              açık {b.acik} · şifreli {b.sifreli} · {b.not}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
