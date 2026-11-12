// Ü15-16 etkileşimli şekilleri: aynı işin GitHub ve GitLab'daki adları, GitLab
// pipeline'ı, bisect oyunu ve "hangi araç?" kartları.
import { useEffect, useMemo, useState } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";

type Ozellik = { g: Gorsel };

// ---------------- G-H15-01: aynı iş iki platformda ----------------

const AKIS: { adim: string; github: [string, string]; gitlab: [string, string] }[] = [
  { adim: "Dal aç, commit'le", github: ["git switch -c feature/limonata", "Git aynı"], gitlab: ["git switch -c feature/limonata", "Git aynı"] },
  { adim: "Dalı gönder", github: ["git push -u origin feature/limonata", "remote: Create a pull request for 'feature/limonata' on GitHub"], gitlab: ["git push -u origin feature/limonata", "remote: To create a merge request for feature/limonata, visit:"] },
  { adim: "İnceleme isteği aç", github: ['gh pr create --base main --title "Limonata"', "Pull request #12"], gitlab: ['glab mr create --target-branch main --title "Limonata"', "Merge request !12"] },
  { adim: "Otomatik denetim", github: ["gh pr checks", "GitHub Actions: .github/workflows/ci.yml, check'ler"], gitlab: ["glab ci status", "GitLab CI/CD: .gitlab-ci.yml, pipeline ve job'lar"] },
  { adim: "Onay", github: ["gh pr review 12 --approve", "Branch protection: required approvals"], gitlab: ["glab mr approve 12", "Approval rules; birleştirmeyi çoğunlukla Maintainer yapar"] },
  { adim: "Birleştir, dalı sil", github: ["gh pr merge 12 --merge --delete-branch", "Merge pull request #12 from kafe-mavi/feature/limonata"], gitlab: ["glab mr merge 12 --remove-source-branch", "Merge branch 'feature/limonata' into 'main'"] },
];

export function IkiPlatform(_: Ozellik) {
  const [p, setP] = useState<"github" | "gitlab" | "ikisi">("ikisi");
  const [adim, setAdim] = useState(0);
  const sutunlar = p === "ikisi" ? (["github", "gitlab"] as const) : ([p] as const);
  return (
    <div className="ge">
      <div className="ge-secim" role="group" aria-label="Platform">
        {([["github", "GitHub"], ["gitlab", "GitLab"], ["ikisi", "Yan yana"]] as const).map(([v, ad]) => (
          <button key={v} type="button" className="cip" aria-pressed={p === v} onClick={() => setP(v)}>{ad}</button>
        ))}
      </div>
      <ol className="ge-iki-akis">
        {AKIS.map((a, i) => (
          <li key={a.adim} className={i === adim ? "ge-secili" : undefined}>
            <button type="button" className="ge-iki-adim" onClick={() => setAdim(i)} aria-pressed={i === adim}>{i + 1}. {a.adim}</button>
            {i === adim && (
              <div className="ge-iki-sutun">
                {sutunlar.map((s) => (
                  <div key={s} className={`ge-iki-kutu ge-${s}`}>
                    <strong>{s === "github" ? "GitHub" : "GitLab"}</strong>
                    <code>{a[s][0]}</code>
                    <span>{a[s][1]}</span>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
      <div className="ge-satir">
        <button type="button" className="cip" disabled={adim === 0} onClick={() => setAdim(adim - 1)}>← Önceki</button>
        <button type="button" className="cip" disabled={adim === AKIS.length - 1} onClick={() => setAdim(adim + 1)}>Sonraki →</button>
      </div>
      <p className="ge-sonuc">Git komutları iki tarafta da aynı. Değişen yalnızca platformun adları, araçları (gh / glab) ve iş akışı dosyası.</p>
    </div>
  );
}

// ---------------- G-H15-02: GitLab pipeline ----------------

const ASAMALAR: { ad: string; isler: string[] }[] = [
  { ad: "test", isler: ["lint", "birim-testleri"] },
  { ad: "build", isler: ["paket"] },
  { ad: "deploy", isler: ["canliya"] },
];

export function GitlabHatti(_: Ozellik) {
  const [hata, setHata] = useState(false);
  const [dal, setDal] = useState<"main" | "feature">("feature");
  const [asama, setAsama] = useState(-1);
  const deployVar = dal === "main";
  const son = deployVar ? 2 : 1;
  const kirik = hata ? 0 : -1;
  const calisiyor = asama >= 0 && asama <= son && !(kirik >= 0 && asama > kirik);
  useEffect(() => {
    if (!calisiyor) return;
    const t = setTimeout(() => setAsama((a) => a + 1), 900);
    return () => clearTimeout(t);
  }, [asama, calisiyor]);
  const bitti = asama > son || (kirik >= 0 && asama > kirik);
  const isDurumu = (ai: number, ad: string) => {
    if (ai === 2 && !deployVar) return { yazi: "kural dışı", sinif: "" };
    if (asama < 0) return { yazi: "bekliyor", sinif: "" };
    if (kirik >= 0 && ai > kirik && asama > kirik) return { yazi: "atlandı", sinif: "" };
    if (asama === ai) return { yazi: "çalışıyor…", sinif: "ge-calisiyor" };
    if (asama > ai) return hata && ad === "lint" ? { yazi: "başarısız", sinif: "ge-hayir" } : { yazi: "başarılı", sinif: "ge-evet" };
    return { yazi: "bekliyor", sinif: "" };
  };
  return (
    <div className="ge">
      <div className="ge-satir">
        <label><input type="checkbox" checked={hata} onChange={(e) => { setHata(e.target.checked); setAsama(-1); }} /> Kodda lint hatası var</label>
        <select value={dal} onChange={(e) => { setDal(e.target.value as "main" | "feature"); setAsama(-1); }} aria-label="Dal">
          <option value="feature">feature dalına push</option>
          <option value="main">main'e birleşme</option>
        </select>
        <button type="button" className="primary" disabled={calisiyor} onClick={() => setAsama(0)}>Pipeline'ı çalıştır</button>
      </div>
      <div className="ge-hat">
        {ASAMALAR.map((a, ai) => (
          <div key={a.ad} className="ge-hat-asama">
            <strong>{a.ad}</strong>
            {a.isler.map((is) => {
              const d = isDurumu(ai, is);
              return (
                <div key={is} className={`ge-hat-is ${d.sinif}`}>
                  <span className="mono">{is}</span>
                  <span>{d.yazi}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <p className={`ge-sonuc${bitti ? (hata ? " ge-kotu" : " ge-iyi") : ""}`} aria-live="polite">
        {asama < 0
          ? "Aynı aşamadaki işler paralel, aşamalar sırayla çalışır. deploy işi rules ile yalnızca main'de çalışır."
          : !bitti
            ? `Aşama: ${ASAMALAR[asama]!.ad}`
            : hata
              ? "lint başarısız: test aşaması kırıldı, build ve deploy hiç başlamadı. MR'da pipeline kırmızı; \"Pipelines must succeed\" açıksa birleştirme kapalı."
              : deployVar
                ? "Bütün aşamalar yeşil; main'de deploy da çalıştı."
                : "test ve build yeşil. deploy bu dalda kural gereği çalışmadı; main'e birleşince çalışacak."}
      </p>
    </div>
  );
}

// ---------------- G-H16-01: bisect oyunu ----------------

const N = 32;

function rastgele(tohum: number) {
  return () => {
    tohum = (tohum * 1103515245 + 12345) % 2147483648;
    return tohum / 2147483648;
  };
}

export function BisectOyunu(_: Ozellik) {
  const [tur, setTur] = useState(1);
  // Hatanın girdiği commit (1..N-1; 0 iyi, N-1 kötü olarak bilinir)
  const hatali = useMemo(() => 1 + Math.floor(rastgele(tur * 7919)() * (N - 1)), [tur]);
  const [iyi, setIyi] = useState(0);
  const [kotu, setKotu] = useState(N - 1);
  const [denenen, setDenenen] = useState<Record<number, boolean>>({});
  const [kip, setKip] = useState<"serbest" | "bisect">("bisect");
  const bitti = kotu - iyi === 1;
  const deneme = Object.keys(denenen).length;
  const orta = Math.floor((iyi + kotu) / 2);
  const dene = (i: number) => {
    if (bitti || i <= iyi || i >= kotu || i in denenen) return;
    const k = i >= hatali;
    setDenenen({ ...denenen, [i]: k });
    if (k) setKotu(i);
    else setIyi(i);
  };
  const yeni = () => {
    setTur(tur + 1);
    setIyi(0);
    setKotu(N - 1);
    setDenenen({});
  };
  const enAz = Math.ceil(Math.log2(N - 1));
  return (
    <div className="ge">
      <div className="ge-secim" role="group" aria-label="Kip">
        <button type="button" className="cip" aria-pressed={kip === "bisect"} onClick={() => setKip("bisect")}>Git bisect gibi (ortadakini dene)</button>
        <button type="button" className="cip" aria-pressed={kip === "serbest"} onClick={() => setKip("serbest")}>Kendin seç</button>
      </div>
      <p className="ge-not">c0 iyi (hata yok), c31 kötü (hata var). Bir commit'e tıklayıp dene; hatanın girdiği ilk commit'i bul.</p>
      <div className="ge-bisect" role="group" aria-label="Commit'ler">
        {Array.from({ length: N }, (_, i) => {
          const aday = i > iyi && i <= kotu;
          const sinif = i <= iyi ? "ge-b-iyi" : i >= kotu ? "ge-b-kotu" : "";
          const oneri = kip === "bisect" && !bitti && i === orta && i > iyi;
          return (
            <button
              key={i}
              type="button"
              className={`ge-b ${sinif}${oneri ? " ge-b-oneri" : ""}${aday ? " ge-b-aday" : ""}`}
              disabled={bitti || i <= iyi || i >= kotu || (kip === "bisect" && i !== orta)}
              onClick={() => dene(i)}
              title={`c${i}`}
            >
              {i in denenen ? (denenen[i] ? "✗" : "✓") : `c${i}`}
            </button>
          );
        })}
      </div>
      <p className={`ge-sonuc${bitti ? (deneme <= enAz ? " ge-iyi" : " ge-kotu") : ""}`} aria-live="polite">
        {bitti
          ? `c${kotu} hatayı getiren ilk commit. ${deneme} denemede buldun; ikili arama en fazla ${enAz} denemede bulur. ${deneme <= enAz ? "Tam bisect hızı." : "Her seferinde ortadakini denesen daha az sürerdi."}`
          : `Aday: ${kotu - iyi} commit, deneme: ${deneme}. ${kip === "bisect" ? `Git ortadakini açtı: c${orta}.` : "Hangisini denersin?"}`}
        {(bitti || deneme > 0) && <button type="button" className="cip ge-yeniden" onClick={yeni}>Yeni tur</button>}
      </p>
    </div>
  );
}

// ---------------- G-H16-02: hangi araç? ----------------

const ARACLAR = ["cherry-pick", "bisect", "blame", "worktree", "submodule", "hook", "LFS", "imzalı commit"] as const;
type Arac = (typeof ARACLAR)[number];

const DURUMLAR: { metin: string; dogru: Arac; neden: string }[] = [
  { metin: "Geçen sürümde çalışan rapor ekranı şimdi bozuk; arada 300 commit var.", dogru: "bisect", neden: "İyi ve kötü commit arasını ikiye bölerek yaklaşık 9 denemede bulur." },
  { metin: "Bu hesaplamadaki 0.18 katsayısı neden yazılmış, kim koymuş?", dogru: "blame", neden: "Satırı son değiştiren commit'i verir; git show ile nedenini okursun." },
  { metin: "dev'deki tek bir güvenlik düzeltmesi, öteki yarım işler olmadan canlı dala gitmeli.", dogru: "cherry-pick", neden: "Tek commit'in farkını başka dala uygular." },
  { metin: "Yarım bir özelliğin ortasındasın; testler sürerken başka dalda acil bir hataya bakman gerekiyor.", dogru: "worktree", neden: "Aynı depodan ikinci bir çalışma klasörü açar; ikisi aynı anda açık kalır." },
  { metin: "Üç proje aynı tasarım kütüphanesinin belirli bir sürümünü kullanmalı.", dogru: "submodule", neden: "Ana depo alt deponun belirli bir commit'ini kaydeder. (Paket yöneticisi de bir seçenektir.)" },
  { metin: "Kimse console.log'lu kodu commit'leyemesin; denetim commit'ten önce çalışsın.", dogru: "hook", neden: "pre-commit hook'u commit'ten önce çalışır ve sıfır olmayan kodla durdurur." },
  { metin: "Oyun projesine 2 GB'lık ses ve doku dosyaları girecek.", dogru: "LFS", neden: "Büyük dosyalar ayrı depolamada durur, depoya işaretçi girer." },
  { metin: "Biri senin adını ve e-postanı yazıp commit atmış; seninkilerin gerçekten senden olduğu nasıl anlaşılır?", dogru: "imzalı commit", neden: "Anahtarla imzalanan commit'ler platformda Verified görünür; adı yazmak yetmez." },
];

export function HangiArac(_: Ozellik) {
  const [secim, setSecim] = useState<Record<number, Arac>>({});
  const dogru = Object.entries(secim).filter(([i, a]) => DURUMLAR[Number(i)]!.dogru === a).length;
  return (
    <div className="ge">
      <ul className="ge-oyun">
        {DURUMLAR.map((d, i) => {
          const s = secim[i];
          return (
            <li key={i} className={s ? (s === d.dogru ? "ge-evet" : "ge-hayir") : undefined}>
              <span className="ge-oyun-ad">{d.metin}</span>
              <select value={s ?? ""} disabled={!!s} onChange={(e) => setSecim({ ...secim, [i]: e.target.value as Arac })} aria-label="Araç">
                <option value="" disabled>Araç seç</option>
                {ARACLAR.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
              {s && <span className="ge-oyun-neden">{s === d.dogru ? "✓ " : `✗ Doğrusu ${d.dogru}. `}{d.neden}</span>}
            </li>
          );
        })}
      </ul>
      <p className="ge-sonuc" aria-live="polite">
        {Object.keys(secim).length}/{DURUMLAR.length} durum, {dogru} doğru.
        {Object.keys(secim).length > 0 && <button type="button" className="cip ge-yeniden" onClick={() => setSecim({})}>Baştan</button>}
      </p>
    </div>
  );
}
