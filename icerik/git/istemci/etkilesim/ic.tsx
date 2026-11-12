// Ü17-18 etkileşimli şekilleri: nesne gezgini, SHA hesaplayıcı, felaket odası ve
// clone türleri. Nesneler ve kimlikler sanal Git'in nesne katmanıyla (gerçek Git
// biçiminde) hesaplanır.
import { useMemo, useState } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { agacYaz, blobYaz, nesneKimligi, yaz } from "../../../../src/gitsim/nesne";
import type { Depo, Nesne } from "../../../../src/gitsim/tipler";

type Ozellik = { g: Gorsel };

// ---------------- G-H17-01: nesne gezgini ----------------

const ILK_DOSYALAR: Record<string, string> = {
  "README.md": "# Kafe Mavi\n",
  "src/app.js": "console.log(1)\n",
  "src/stil.css": "body {}\n",
  "belge/menu.txt": "kahve 40\n",
};

interface Surum {
  commit: string;
  mesaj: string;
}

function cocuklar(n: Nesne): string[] {
  if (n.tur === "commit") return [n.agac, ...n.ebeveynler];
  if (n.tur === "tree") return n.girdiler.map((g) => g.hash);
  return [];
}

// Bir commit'ten (ebeveynlere inmeden) ulaşılan nesneler
function anlikNesneler(d: Depo, commit: string): Set<string> {
  const s = new Set<string>([commit]);
  const n = d.nesneler[commit];
  const yigin = n?.tur === "commit" ? [n.agac] : [];
  while (yigin.length) {
    const h = yigin.pop()!;
    if (s.has(h)) continue;
    s.add(h);
    const x = d.nesneler[h];
    if (x?.tur === "tree") yigin.push(...cocuklar(x));
  }
  return s;
}

export function NesneGezgini(_: Ozellik) {
  const depo = useMemo(() => ({ nesneler: {} }) as unknown as Depo, []);
  const [dosyalar, setDosyalar] = useState<Record<string, string>>(ILK_DOSYALAR);
  const [surumler, setSurumler] = useState<Surum[]>(() => {
    const agac = agacYaz(depo, Object.fromEntries(Object.entries(ILK_DOSYALAR).map(([y, c]) => [y, blobYaz(depo, c)])));
    const kisi = { ad: "Deniz Kaya", eposta: "deniz@ornek.dev", zaman: 1767258000 };
    return [{ commit: yaz(depo, { tur: "commit", agac, ebeveynler: [], yazar: kisi, isleyen: kisi, mesaj: "İlk sürüm\n" }), mesaj: "İlk sürüm" }];
  });
  const son = surumler[surumler.length - 1]!;
  const [secili, setSecili] = useState<string>(son.commit);
  const [duzenlenen, setDuzenlenen] = useState("src/app.js");
  const [metin, setMetin] = useState(ILK_DOSYALAR["src/app.js"]!.trimEnd());

  const commitEt = () => {
    const yeni = { ...dosyalar, [duzenlenen]: metin + "\n" };
    const agac = agacYaz(depo, Object.fromEntries(Object.entries(yeni).map(([y, c]) => [y, blobYaz(depo, c)])));
    const onceki = depo.nesneler[son.commit] as Extract<Nesne, { tur: "commit" }>;
    if (onceki.agac === agac) return;
    const kisi = { ad: "Deniz Kaya", eposta: "deniz@ornek.dev", zaman: 1767258000 + surumler.length * 60 };
    const mesaj = `${duzenlenen} değişti`;
    const commit = yaz(depo, { tur: "commit", agac, ebeveynler: [son.commit], yazar: kisi, isleyen: kisi, mesaj: mesaj + "\n" });
    setDosyalar(yeni);
    setSurumler([...surumler, { commit, mesaj }]);
    setSecili(commit);
  };

  // Seçili nesnenin hangi commit'e ait olduğuna göre "yeni" ve "paylaşılan" nesneler
  const sahip = [...surumler].reverse().find((s) => anlikNesneler(depo, s.commit).has(secili)) ?? son;
  const sahipNesneleri = anlikNesneler(depo, sahip.commit);
  const sahipCommit = depo.nesneler[sahip.commit] as Extract<Nesne, { tur: "commit" }>;
  const oncekiNesneler = sahipCommit.ebeveynler[0] ? anlikNesneler(depo, sahipCommit.ebeveynler[0]) : new Set<string>();
  const yeniler = [...sahipNesneleri].filter((h) => !oncekiNesneler.has(h));
  const say = (tur: string) => yeniler.filter((h) => depo.nesneler[h]?.tur === tur).length;

  const kimlik = (h: string) => (
    <button type="button" className={`ge-ng-kimlik${oncekiNesneler.size && !oncekiNesneler.has(h) ? " ge-ng-yeni" : ""}`} onClick={() => setSecili(h)} title={h}>
      {h.slice(0, 7)}
    </button>
  );
  const n = depo.nesneler[secili]!;

  return (
    <div className="ge">
      <div className="ge-ng">
        <div className="ge-ng-gecmis">
          <strong>Commit'ler</strong>
          <ol>
            {[...surumler].reverse().map((s) => (
              <li key={s.commit}>
                <button type="button" className="ge-ng-kimlik" aria-pressed={secili === s.commit} onClick={() => setSecili(s.commit)}>{s.commit.slice(0, 7)}</button> {s.mesaj}
              </li>
            ))}
          </ol>
          <label className="ge-ng-duzen">
            <span>Dosya</span>
            <select value={duzenlenen} onChange={(e) => { setDuzenlenen(e.target.value); setMetin(dosyalar[e.target.value]!.trimEnd()); }}>
              {Object.keys(dosyalar).map((y) => <option key={y}>{y}</option>)}
            </select>
          </label>
          <input className="ge-ng-girdi" value={metin} onChange={(e) => setMetin(e.target.value)} aria-label="Dosyanın yeni içeriği" />
          <button type="button" className="cip" onClick={commitEt} disabled={metin + "\n" === dosyalar[duzenlenen]}>Değiştir ve commit'le</button>
        </div>
        <div className="ge-ng-nesne" aria-live="polite">
          <div className="ge-ng-baslik">
            <span className={`ge-ng-tur ge-ng-${n.tur}`}>{n.tur}</span> <code>{secili}</code>
          </div>
          {n.tur === "commit" && (
            <pre>
              tree {kimlik(n.agac)}
              {"\n"}
              {n.ebeveynler.map((p) => <span key={p}>parent {kimlik(p)}{"\n"}</span>)}
              author {n.yazar.ad} &lt;{n.yazar.eposta}&gt; {n.yazar.zaman} +0000{"\n\n"}
              {n.mesaj.trimEnd()}
            </pre>
          )}
          {n.tur === "tree" && (
            <pre>
              {n.girdiler.map((g) => (
                <span key={g.ad}>
                  {g.mod === "40000" ? "040000 tree " : "100644 blob "}
                  {kimlik(g.hash)} {g.ad}
                  {"\n"}
                </span>
              ))}
            </pre>
          )}
          {n.tur === "blob" && <pre>{n.icerik}</pre>}
          <p className="ge-not">Kimliklere tıklayarak in. Turuncu kimlikler bu commit'le gelen yeni nesneler; ötekiler önceki commit'le paylaşılıyor.</p>
        </div>
      </div>
      <p className="ge-sonuc" aria-live="polite">
        {sahipCommit.ebeveynler.length
          ? `"${sahip.mesaj}" commit'i ${yeniler.length} yeni nesne ekledi: ${say("commit")} commit, ${say("tree")} tree, ${say("blob")} blob. Öteki ${sahipNesneleri.size - yeniler.length} nesne önceki commit'le paylaşılıyor.`
          : `İlk commit: ${sahipNesneleri.size} nesne (${say("commit")} commit, ${say("tree")} tree, ${say("blob")} blob). Bir dosyayı değiştirip commit'le, hangi nesnelerin yenilendiğini gör.`}
      </p>
    </div>
  );
}

// ---------------- G-H17-02: SHA hesaplayıcı ----------------

export function ShaHesaplayici(_: Ozellik) {
  const [metin, setMetin] = useState("merhaba");
  const [satirSonu, setSatirSonu] = useState(true);
  const icerik = satirSonu ? metin + "\n" : metin;
  const boy = new TextEncoder().encode(icerik).length;
  const h = nesneKimligi({ tur: "blob", icerik });
  const [onceki, setOnceki] = useState(h);
  const ayni = [...h].filter((c, i) => c === onceki[i]).length;
  return (
    <div className="ge">
      <label className="ge-sha-girdi">
        <span>Dosyanın içeriği</span>
        <input value={metin} onChange={(e) => { setOnceki(h); setMetin(e.target.value); }} />
      </label>
      <label className="ge-sha-kutu">
        <input type="checkbox" checked={satirSonu} onChange={(e) => { setOnceki(h); setSatirSonu(e.target.checked); }} /> Sonunda satır sonu var (echo böyle yazar)
      </label>
      <pre className="ge-sha-cikti">
        {`özetlenen: "blob ${boy}\\0${icerik.replace(/\n/g, "\\n")}"\nkimlik:    ${h}`}
      </pre>
      <p className="ge-sonuc" aria-live="polite">
        {h === onceki
          ? "Aynı içerik her bilgisayarda bu kimliği verir. İçeriği tek karakter değiştir."
          : `Önceki kimlikle aynı konumda yalnızca ${ayni} karakter ortak (rastgele iki kimlik için beklenen ~2,5). Küçük bir değişiklik kimliği tamamen değiştirir.`}
      </p>
    </div>
  );
}

// ---------------- G-H18-01: felaket odası ----------------

const FELAKETLER: { durum: string; secenekler: string[]; dogru: number; neden: string }[] = [
  {
    durum: "git reset --hard HEAD~3 yaptın; push edilmemiş üç commit gitti.",
    secenekler: ["git reset --hard HEAD@{1}", "git revert HEAD~3", "git pull"],
    dogru: 0,
    neden: "Reset'ten önceki konum reflog'da HEAD@{1}. revert yeni commit yazar, kayıp commit'leri getirmez.",
  },
  {
    durum: "Birleştirilmemiş ozellik dalını git branch -D ile sildin.",
    secenekler: ["git pull origin ozellik", "git branch ozellik <reflog'daki kimlik>", "git switch -c ozellik"],
    dogru: 1,
    neden: "Dal yalnızca bir ref'ti; commit'ler duruyor. Silme çıktısındaki ya da reflog'daki kimlikle dal yeniden açılır.",
  },
  {
    durum: "git stash drop ile bir günlük işi attın.",
    secenekler: ["git stash pop", "reflog'da ararım", "git fsck, sonra git stash apply <kimlik>"],
    dogru: 2,
    neden: "Düşürülen stash'in commit'i reflog'da da yoktur ama sahipsiz olarak durur; fsck onu \"dangling commit\" diye listeler.",
  },
  {
    durum: "Etkileşimli rebase bitti; bir commit'i yanlışlıkla drop etmişsin.",
    secenekler: ["git rebase --abort", "Reflog'da rebase öncesini bulup reset --hard", "git cherry-pick --continue"],
    dogru: 1,
    neden: "Rebase bitince --abort işe yaramaz. reflog'da \"rebase (start)\" satırının altı rebase öncesidir; ORIG_HEAD de oraya işaret eder.",
  },
  {
    durum: "Biri main'i force push ile ezdi. Sen henüz fetch etmedin.",
    secenekler: ["git branch kurtarma origin/main", "git pull --rebase", "git push --force"],
    dogru: 0,
    neden: "Senin origin/main'in hâlâ eski geçmişi gösteriyor; önce sabitle. Fetch etmiş olsan bile origin/main@{1} reflog'da durur.",
  },
  {
    durum: "Hiç git add etmediğin değişiklikler git reset --hard ile gitti.",
    secenekler: ["git fsck --lost-found", "git reset --hard HEAD@{1}", "Git'te kaydı yok; editörün yerel geçmişine bakarım"],
    dogru: 2,
    neden: "Git yalnızca bir kez nesne olarak yazdığı içeriği kurtarabilir. add edilmiş olsaydı fsck sahipsiz blob olarak bulurdu.",
  },
];

export function FelaketOdasi(_: Ozellik) {
  const [secim, setSecim] = useState<Record<number, number>>({});
  const cevaplanan = Object.keys(secim).length;
  const dogru = Object.entries(secim).filter(([i, s]) => FELAKETLER[Number(i)]!.dogru === s).length;
  return (
    <div className="ge">
      <ol className="ge-felaket">
        {FELAKETLER.map((f, i) => {
          const s = secim[i];
          return (
            <li key={i} className={s === undefined ? undefined : s === f.dogru ? "ge-evet" : "ge-hayir"}>
              <span className="ge-felaket-durum">🔥 {f.durum}</span>
              <div className="ge-secim" role="group" aria-label="Kurtarma">
                {f.secenekler.map((x, j) => (
                  <button key={j} type="button" className="cip" disabled={s !== undefined} aria-pressed={s === j} onClick={() => setSecim({ ...secim, [i]: j })}>
                    {/^git [^']*$/.test(x) ? <code>{x}</code> : x}
                  </button>
                ))}
              </div>
              {s !== undefined && <span className="ge-oyun-neden">{s === f.dogru ? "✓ " : `✗ Doğrusu: ${f.secenekler[f.dogru]}. `}{f.neden}</span>}
            </li>
          );
        })}
      </ol>
      <p className={`ge-sonuc${cevaplanan === FELAKETLER.length ? (dogru === cevaplanan ? " ge-iyi" : " ge-kotu") : ""}`} aria-live="polite">
        {cevaplanan}/{FELAKETLER.length} felaket, {dogru} kurtarma.
        {cevaplanan > 0 && <button type="button" className="cip ge-yeniden" onClick={() => setSecim({})}>Baştan</button>}
      </p>
    </div>
  );
}

// ---------------- G-H18-02: clone türleri ----------------

const CLONELAR = [
  { id: "tam", ad: "git clone", commit: "hepsi", agac: "hepsi", blob: "hepsi", calisma: "hepsi", boyut: "2,1 GB", not: "Her şey gelir; geçmişteki her büyük dosya dahil." },
  { id: "sig", ad: "--depth 1", commit: "son", agac: "son", blob: "son", calisma: "hepsi", boyut: "180 MB", not: "Yalnızca son commit. CI için ideal; log ve blame eksik kalır." },
  { id: "kismi", ad: "--filter=blob:none", commit: "hepsi", agac: "hepsi", blob: "gerektikce", calisma: "hepsi", boyut: "210 MB", not: "Geçmiş tam; dosya içerikleri ilk ihtiyaçta iner. Geliştirici için iyi bir denge." },
  { id: "seyrek", ad: "kısmi + sparse-checkout", commit: "hepsi", agac: "hepsi", blob: "gerektikce", calisma: "secili", boyut: "35 MB", not: "Çalışma dizininde yalnızca uygulamalar/kasa; monorepo'da günlük kullanım." },
] as const;

const DURUM_ADI: Record<string, string> = { hepsi: "hepsi", son: "yalnızca son commit", gerektikce: "gerektikçe", secili: "seçilen klasörler" };

export function CloneTurleri(_: Ozellik) {
  const [secili, setSecili] = useState<(typeof CLONELAR)[number]["id"]>("tam");
  const c = CLONELAR.find((x) => x.id === secili)!;
  const satirlar: [string, string][] = [["Commit'ler", c.commit], ["Tree'ler", c.agac], ["Dosya içerikleri (blob)", c.blob], ["Çalışma dizini", c.calisma]];
  return (
    <div className="ge">
      <div className="ge-secim" role="group" aria-label="Clone türü">
        {CLONELAR.map((x) => (
          <button key={x.id} type="button" className="cip" aria-pressed={secili === x.id} onClick={() => setSecili(x.id)}>{x.ad}</button>
        ))}
      </div>
      <table className="ge-clone">
        <tbody>
          {satirlar.map(([ad, d]) => (
            <tr key={ad}>
              <th scope="row">{ad}</th>
              <td className={`ge-clone-${d}`}>{DURUM_ADI[d]}</td>
            </tr>
          ))}
          <tr>
            <th scope="row">İndirilen (örnek monorepo)</th>
            <td>{c.boyut}</td>
          </tr>
        </tbody>
      </table>
      <p className="ge-sonuc" aria-live="polite">{c.not}</p>
    </div>
  );
}
