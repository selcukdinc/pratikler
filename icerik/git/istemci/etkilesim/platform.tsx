// Ü12-13 etkileşimli şekilleri: üç ortamlı akışın oynatılabilir hâli, dal koruma
// paneli ve bir GitHub Actions iş akışının adım adım çalışması.
import { useEffect, useState } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";

type Ozellik = { g: Gorsel };

// ---------------- G-H12-01: üç ortamlı akış ----------------

type Ortam3 = "dev" | "test" | "main";
interface Durum12 {
  adim: number;
  // Her ortamda hangi işler var
  icerik: Record<Ortam3, string[]>;
  dal: string | null;
  mesaj: string;
  hata?: boolean;
}

const BASLA12: Durum12 = {
  adim: 0,
  icerik: { main: ["v1.3"], test: ["v1.3"], dev: ["v1.3", "Mert: yarım ödeme"] },
  dal: null,
  mesaj: "dev'de Mert'in yarım ödeme işi var; test ve main canlıdaki v1.3'le aynı. Sıradaki adıma bas.",
};

const DAL = "feature/US-D03e-docker-compose-local";

const ADIMLAR: { dugme: string; uygula: (d: Durum12) => Durum12 }[] = [
  {
    dugme: "1. test'in son hâlini çek",
    uygula: (d) => ({ ...d, mesaj: "git fetch: origin/test güncel. Dal buradan açılacak; dev'den değil." }),
  },
  {
    dugme: "2. test'ten dal aç",
    uygula: (d) => ({ ...d, dal: DAL, mesaj: `git switch -c ${DAL} origin/test: dal yalnızca test'teki kodu taşıyor. Mert'in yarım işi içinde yok.` }),
  },
  {
    dugme: "3. Geliştir, push et",
    uygula: (d) => ({ ...d, mesaj: "Commit'ler atıldı, git push -u origin ile dal GitHub'a gönderildi." }),
  },
  {
    dugme: "4. PR 1 → dev",
    uygula: (d) => ({ ...d, icerik: { ...d.icerik, dev: [...d.icerik.dev, "Docker compose"] }, mesaj: "PR 1 dev'e açıldı. CI yeşil, Ayşe onayladı (dev için en az 1 onay), birleşti. Geliştirme ortamında deneniyor." }),
  },
  {
    dugme: "5. Aynı daldan PR 2 → test",
    uygula: (d) => ({ ...d, icerik: { ...d.icerik, test: [...d.icerik.test, "Docker compose"] }, mesaj: "Aynı dal bu kez test'e PR açtı. Dal test'ten açıldığı için yalnızca senin işin gitti; Mert'in yarım işi dev'de kaldı." }),
  },
  {
    dugme: "6. QA test ortamında doğrular",
    uygula: (d) => ({ ...d, mesaj: "QA test ortamında senaryoları denedi ve onay verdi." }),
  },
  {
    dugme: "7. Release PR test → main",
    uygula: (d) => ({ ...d, icerik: { ...d.icerik, main: [...d.icerik.test] }, mesaj: "Release PR ile test main'e birleşti, v1.4 etiketlendi: canlıda. Mert'in yarım işi hâlâ yalnızca dev'de." }),
  },
  {
    dugme: "8. Dalı sil",
    uygula: (d) => ({ ...d, dal: null, mesaj: "İşi biten dal silindi. Herkes git fetch --prune ile izini temizler. Akış tamam!" }),
  },
];

export function UcOrtamAkisi(_: Ozellik) {
  const [d, setD] = useState<Durum12>(BASLA12);
  const sonraki = ADIMLAR[d.adim];
  const tuzak = (tur: "toptan" | "devden") =>
    setD({
      ...d,
      hata: true,
      mesaj:
        tur === "toptan"
          ? "DUR: dev'i toptan test'e birleştirmek Mert'in yarım ödeme işini de test'e, oradan canlıya taşır. Her iş test'e kendi dalından, kendi PR'ıyla gider."
          : "DUR: dev'den açılan dal Mert'in yarım işini de içinde taşır. PR 2'yi test'e açınca o da gider. Dal test'ten açılır.",
    });
  return (
    <div className="ge">
      <div className="ge-ortamlar">
        {(["main", "test", "dev"] as const).map((o) => (
          <div key={o} className="ge-kutu ge-ortam">
            <strong>{o} {o === "main" ? "(canlı)" : o === "test" ? "(QA)" : "(geliştirme)"} 🔒</strong>
            <div className="ge-isler-liste">
              {d.icerik[o].map((x) => (
                <span key={x} className={`ge-is${x.startsWith("Mert") ? " ge-is-yarim" : x === "Docker compose" ? " ge-is-sen" : ""}`}>{x}</span>
              ))}
            </div>
          </div>
        ))}
        <div className="ge-kutu ge-ortam ge-feature">
          <strong>feature dalı</strong>
          <span className="mono">{d.dal ?? "yok"}</span>
        </div>
      </div>
      <div className="ge-satir">
        {sonraki ? (
          <button type="button" className="primary" onClick={() => setD({ ...sonraki.uygula(d), adim: d.adim + 1, hata: false })}>{sonraki.dugme}</button>
        ) : (
          <span>Akış tamamlandı.</span>
        )}
        <button type="button" className="cip ge-tuzak" onClick={() => tuzak("toptan")}>Tuzak: dev'i test'e birleştir</button>
        <button type="button" className="cip ge-tuzak" onClick={() => tuzak("devden")}>Tuzak: dalı dev'den aç</button>
        <button type="button" onClick={() => setD(BASLA12)}>Baştan</button>
      </div>
      <p className={`ge-sonuc${d.hata ? " ge-kotu" : ""}`} aria-live="polite">{d.mesaj}</p>
    </div>
  );
}

// ---------------- G-H13-01: dal koruma paneli ----------------

interface Kural {
  pr: boolean;
  onay: number;
  ci: boolean;
  force: boolean;
}

const DENEMELER: { ad: string; sonuc: (k: Kural) => [boolean, string] }[] = [
  { ad: "main'e doğrudan push", sonuc: (k) => (k.pr ? [false, "GH006: Changes must be made through a pull request. Push reddedildi."] : [true, "Push kabul edildi: kod incelenmeden doğrudan main'e girdi."]) },
  { ad: "main'e force push", sonuc: (k) => (k.force ? [true, "Force push kabul edildi: main'in geçmişi yeniden yazıldı, başkalarının commit'leri gidebilir."] : [false, "Cannot force-push to this branch. Reddedildi."]) },
  { ad: "Onaysız PR'ı birleştir", sonuc: (k) => (k.onay > 0 ? [false, `Birleştirme kapalı: en az ${k.onay} onay gerekiyor.`] : [true, "Birleşti: kimse bakmadan main'e girdi."]) },
  { ad: "CI kırmızıyken birleştir", sonuc: (k) => (k.ci ? [false, "Birleştirme kapalı: zorunlu durum denetimi \"test\" kırmızı."] : [true, "Birleşti: testleri geçmeyen kod main'de."]) },
  { ad: "Kendi PR'ını onayla", sonuc: () => [false, "GitHub buna hiç izin vermez: kendi PR'ını onaylayamazsın."] },
];

export function KorumaPaneli(_: Ozellik) {
  const [k, setK] = useState<Kural>({ pr: false, onay: 0, ci: false, force: true });
  const [son, setSon] = useState<{ ad: string; ok: boolean; mesaj: string } | null>(null);
  return (
    <div className="ge">
      <div className="ge-koruma">
        <strong>Settings → Branches → main için kural</strong>
        <label><input type="checkbox" checked={k.pr} onChange={(e) => setK({ ...k, pr: e.target.checked })} /> Require a pull request before merging</label>
        <label className="ge-girinti">
          Required approvals
          <select value={k.onay} onChange={(e) => setK({ ...k, onay: Number(e.target.value) })} disabled={!k.pr}>
            {[0, 1, 2].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        <label><input type="checkbox" checked={k.ci} onChange={(e) => setK({ ...k, ci: e.target.checked })} /> Require status checks to pass</label>
        <label><input type="checkbox" checked={k.force} onChange={(e) => setK({ ...k, force: e.target.checked })} /> Allow force pushes</label>
      </div>
      <div className="ge-satir">
        {DENEMELER.map((x) => (
          <button key={x.ad} type="button" className="cip" onClick={() => { const [ok, mesaj] = x.sonuc({ ...k, onay: k.pr ? k.onay : 0 }); setSon({ ad: x.ad, ok, mesaj }); }}>{x.ad}</button>
        ))}
      </div>
      <p className={`ge-sonuc ${son ? (son.ok ? "ge-kotu" : "ge-iyi") : ""}`} aria-live="polite">
        {son ? `${son.ad}: ${son.mesaj}${son.ok ? " Kural olsaydı engellenirdi." : " Kural işini yaptı."}` : "Kutuları aç ya da kapat, sonra bir şey dene. Hiç kural yokken her şey serbest: tehlikeli olan da."}
      </p>
    </div>
  );
}

// ---------------- G-H13-02: iş akışı dosyası ----------------

const YAML = [
  { satir: "name: CI", adim: -1 },
  { satir: "on: [push, pull_request]", adim: -1 },
  { satir: "jobs:", adim: -1 },
  { satir: "  test:", adim: -1 },
  { satir: "    runs-on: ubuntu-latest", adim: 0 },
  { satir: "    steps:", adim: -1 },
  { satir: "      - uses: actions/checkout@v4", adim: 1 },
  { satir: "      - uses: actions/setup-node@v4", adim: 2 },
  { satir: "        with: { node-version: 22 }", adim: 2 },
  { satir: "      - run: npm ci", adim: 3 },
  { satir: "      - run: npm run lint", adim: 4 },
  { satir: "      - run: npm test", adim: 5 },
];
const ADIM_ADI = ["Makine açılıyor (ubuntu-latest)", "Kod makineye alınıyor", "Node kuruluyor", "Bağımlılıklar kuruluyor", "Lint", "Testler"];

export function IsAkisi(_: Ozellik) {
  const [hata, setHata] = useState(false);
  const [adim, setAdim] = useState(-1);
  const calisiyor = adim >= 0 && adim < ADIM_ADI.length && !(hata && adim > 4);
  useEffect(() => {
    if (!calisiyor) return;
    const t = setTimeout(() => setAdim((a) => a + 1), 700);
    return () => clearTimeout(t);
  }, [adim, calisiyor]);
  const bitti = adim >= ADIM_ADI.length || (hata && adim > 4);
  const durum = (i: number) => (hata && i > 4 && adim > 4 ? "– atlandı:" : adim > i ? (hata && i === 4 ? "✗" : "✓") : adim === i ? "…" : "○");
  return (
    <div className="ge">
      <div className="ge-yaml-izgara">
        <pre className="ge-dosya" aria-label=".github/workflows/ci.yml">
          <span className="ge-yaml-ad">.github/workflows/ci.yml</span>
          {YAML.map((y, i) => (
            <span key={i} className={calisiyor && y.adim >= 0 && y.adim === adim ? "ge-ekle" : undefined}>{y.satir}</span>
          ))}
        </pre>
        <ol className="ge-adimlar">
          {ADIM_ADI.map((a, i) => (
            <li key={a} className={adim > i ? (hata && i === 4 ? "ge-hayir" : "ge-evet") : undefined}>{durum(i)} {a}</li>
          ))}
        </ol>
      </div>
      <div className="ge-satir">
        <label><input type="checkbox" checked={hata} onChange={(e) => { setHata(e.target.checked); setAdim(-1); }} /> Kodda <code>console.log</code> unutuldu</label>
        <button type="button" className="primary" disabled={calisiyor} onClick={() => setAdim(0)}>Push et (iş akışını tetikle)</button>
      </div>
      <p className={`ge-sonuc${bitti ? (hata ? " ge-kotu" : " ge-iyi") : ""}`} aria-live="polite">
        {!bitti
          ? adim < 0
            ? "Push ya da PR olunca GitHub boş bir makine açar, dosyadaki adımları sırayla çalıştırır. Düğmeye bas."
            : `Çalışıyor: ${ADIM_ADI[adim]}`
          : hata
            ? "Lint kırmızı, sonraki adımlar çalışmadı. PR'da durum denetimi ✗; koruma kuralı birleştirmeyi kapatır. Satırı silip push et, iş akışı yeniden çalışır."
            : "Bütün adımlar yeşil: PR'da ✓ görünür ve (onay da varsa) birleştirilebilir."}
      </p>
    </div>
  );
}
