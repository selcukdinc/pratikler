// Git ve GitHub derslerinin etkileşimli şekilleri. Hepsi tarayıcıda çalışır;
// commit kimlikleri gerçek Git'in biçimiyle hesaplanır (src/gitsim).
import { useMemo, useState, type ComponentType } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { satirFarki, satirlar } from "../../../../src/gitsim/fark";
import { nesneKimligi } from "../../../../src/gitsim/nesne";
import { CakismaEditoru, DalIsaretcisi, PullRequest, ResetKipleri } from "./kademe2";
import { FetchPull, MergeRebase, RebaseListesi } from "./kademe3";
import { IsAkisi, KorumaPaneli, UcOrtamAkisi } from "./platform";
import { AnahtarAvi, SizintiTatbikati } from "./guvenlik";
import "./etkilesim.css";

type Ozellik = { g: Gorsel };

function Secim<T extends string>({ ad, secenekler, deger, degis }: { ad: string; secenekler: [T, string][]; deger: T; degis: (v: T) => void }) {
  return (
    <div className="ge-secim" role="group" aria-label={ad}>
      {secenekler.map(([v, yazi]) => (
        <button key={v} type="button" className="cip" aria-pressed={deger === v} onClick={() => degis(v)}>
          {yazi}
        </button>
      ))}
    </div>
  );
}

// ---------------- G-H1-01: zaman makinesi ----------------

const KAOS = ["rapor.docx", "rapor_son.docx", "rapor_son_v2.docx", "rapor_SON_gercekten.docx", "rapor_son_v2_Ayse_duzeltti.docx", "rapor_son_v3 (1).docx"];

const SURUMLER = [
  { kim: "Ayşe", ne: "Rapor iskeleti", metin: "# Deney Raporu\n\n## Amaç\n\n## Sonuç\n" },
  { kim: "Mert", ne: "Amaç bölümü yazıldı", metin: "# Deney Raporu\n\n## Amaç\nDirencin sıcaklıkla değişimini ölçmek.\n\n## Sonuç\n" },
  { kim: "Ayşe", ne: "Ölçüm tablosu eklendi", metin: "# Deney Raporu\n\n## Amaç\nDirencin sıcaklıkla değişimini ölçmek.\n\n## Ölçümler\n| °C | Ω |\n| 20 | 100 |\n| 60 | 116 |\n\n## Sonuç\n" },
  { kim: "Mert", ne: "Sonuç yazıldı", metin: "# Deney Raporu\n\n## Amaç\nDirencin sıcaklıkla değişimini ölçmek.\n\n## Ölçümler\n| °C | Ω |\n| 20 | 100 |\n| 60 | 116 |\n\n## Sonuç\nDirenç sıcaklıkla doğrusal arttı.\n" },
  { kim: "Ayşe", ne: "Amaç cümlesi kısaltıldı", metin: "# Deney Raporu\n\n## Amaç\nDirenç ve sıcaklık ilişkisi.\n\n## Ölçümler\n| °C | Ω |\n| 20 | 100 |\n| 60 | 116 |\n\n## Sonuç\nDirenç sıcaklıkla doğrusal arttı.\n" },
];
const KIMLIKLER = ["3f1c2aa", "8b07d41", "c41e9f0", "1d2ab77", "e90c35b"];
const TARIHLER = ["3 Mart 10:12", "3 Mart 14:40", "4 Mart 09:05", "5 Mart 16:21", "6 Mart 11:58"];

export function ZamanMakinesi(_: Ozellik) {
  const [kip, setKip] = useState<"kaos" | "git">("kaos");
  const [secili, setSecili] = useState(SURUMLER.length - 1);
  const [acik, setAcik] = useState<string | null>(null);
  const fark = useMemo(() => satirFarki(satirlar(secili ? SURUMLER[secili - 1]!.metin : ""), satirlar(SURUMLER[secili]!.metin)), [secili]);
  return (
    <div className="ge">
      <Secim ad="Görünüm" secenekler={[["kaos", "Git olmadan"], ["git", "Git ile"]]} deger={kip} degis={setKip} />
      {kip === "kaos" ? (
        <>
          <p className="ge-not">Hangisi son hâli? Bir dosyaya tıkla.</p>
          <ul className="ge-kaos">
            {KAOS.map((d) => (
              <li key={d}>
                <button type="button" onClick={() => setAcik(d)} aria-pressed={acik === d}>📄 {d}</button>
              </li>
            ))}
          </ul>
          {acik && (
            <p className="ge-sonuc ge-kotu" aria-live="polite">
              <strong>{acik}</strong>: Kim değiştirdi? Neyi değiştirdi? Neden? Bir önceki hâli hangisi? Dosyanın adı bunların hiçbirini söylemiyor.
            </p>
          )}
        </>
      ) : (
        <>
          <p className="ge-not">Tek dosya, beş kayıt. Bir commit'e tıkla: dosyanın o anki hâli ve o commit'in değiştirdiği satırlar.</p>
          <ol className="ge-zaman">
            {SURUMLER.map((s, i) => (
              <li key={i}>
                <button type="button" aria-pressed={secili === i} onClick={() => setSecili(i)}>
                  <span className="ge-hash">{KIMLIKLER[i]}</span> {s.ne}
                  <span className="ge-kim">{s.kim} · {TARIHLER[i]}</span>
                </button>
              </li>
            ))}
          </ol>
          <pre className="ge-dosya" aria-label="rapor.md">
            {fark.filter((s) => s.tur !== "-" || secili > 0).map((s, i) => (
              <span key={i} className={s.tur === "+" && secili > 0 ? "ge-ekle" : s.tur === "-" ? "ge-sil" : undefined}>
                {s.tur === " " ? "  " : s.tur + " "}{s.metin}
              </span>
            ))}
          </pre>
          <p className="ge-sonuc ge-iyi">Her kayıtta kim, ne zaman, neden ve tam olarak hangi satırlar belli. İstediğin ana dönebilirsin.</p>
        </>
      )}
    </div>
  );
}

// ---------------- G-H1-02: merkezi ve dağıtık ----------------

const ISLER = [
  { ad: "Commit oluşturmak", sunucu: true },
  { ad: "Geçmişe bakmak (log)", sunucu: true },
  { ad: "Yeni dal açmak", sunucu: true },
  { ad: "Ekibe göndermek (push)", sunucu: true, herZaman: true },
];

export function MerkeziDagitik(_: Ozellik) {
  const [model, setModel] = useState<"merkezi" | "dagitik">("merkezi");
  const [olay, setOlay] = useState<"normal" | "internet" | "cokme">("normal");
  const sunucuVar = olay !== "cokme";
  const baglanti = olay === "normal";
  const yapilir = (is: (typeof ISLER)[number]) => (is.herZaman || model === "merkezi" ? baglanti : true);
  const gecmisSende = model === "dagitik";
  return (
    <div className="ge">
      <Secim ad="Model" secenekler={[["merkezi", "Merkezi (SVN gibi)"], ["dagitik", "Dağıtık (Git)"]]} deger={model} degis={setModel} />
      <Secim ad="Olay" secenekler={[["normal", "Her şey yolunda"], ["internet", "İnternetin kesildi"], ["cokme", "Sunucunun diski bozuldu"]]} deger={olay} degis={setOlay} />
      <div className="ge-ag">
        <div className={`ge-kutu ge-sunucu${sunucuVar ? "" : " ge-cokmus"}`}>
          <strong>Sunucu</strong>
          <span>{sunucuVar ? "Tam geçmiş" : "Veri yok!"}</span>
        </div>
        <div className="ge-gelistiriciler">
          {["Sen", "Ayşe", "Mert"].map((k) => (
            <div key={k} className={`ge-kutu${k === "Sen" && olay === "internet" ? " ge-kopuk" : ""}`}>
              <strong>{k}</strong>
              <span>{gecmisSende ? "Tam geçmiş" : "Yalnızca son hâl"}</span>
            </div>
          ))}
        </div>
      </div>
      <ul className="ge-isler">
        {ISLER.map((is) => (
          <li key={is.ad} className={yapilir(is) ? "ge-evet" : "ge-hayir"}>
            {yapilir(is) ? "✓" : "✗"} {is.ad}
          </li>
        ))}
      </ul>
      <p className="ge-sonuc" aria-live="polite">
        {olay === "cokme"
          ? model === "dagitik"
            ? "Herkesin bilgisayarında geçmişin tam bir kopyası var: herhangi birinden yeni bir sunucu kurulur, hiçbir commit kaybolmaz."
            : "Geçmiş yalnızca sunucudaydı. Yedek yoksa bütün eski sürümler gitti; elde yalnızca herkesin son hâli kaldı."
          : olay === "internet"
            ? model === "dagitik"
              ? "Uçakta bile commit atar, geçmişe bakar, dal açarsın. Yalnızca ekibe göndermek bağlantı bekler."
              : "Commit sunucuya yazıldığı için bağlantı gelene kadar kayıt alamazsın."
            : "Bağlantı varken iki model de çalışır. Farkı bir şey ters gidince görürsün: yukarıdan bir olay seç."}
      </p>
    </div>
  );
}

// ---------------- G-H1-03: Git mi, platform mu? ----------------

const OGELER: { ad: string; git: boolean; neden: string }[] = [
  { ad: "Commit oluşturmak", git: true, neden: "Commit Git'in kendi işi; internet ve hesap gerekmez." },
  { ad: "Pull request açmak", git: false, neden: "Pull request bir platform özelliği (GitLab'da merge request)." },
  { ad: "Dal açmak", git: true, neden: "Dallar Git'in içinde; bilgisayarında yerel olarak açılır." },
  { ad: "Issue ile hata bildirmek", git: false, neden: "Issue takibi platformun sunduğu bir hizmet." },
  { ad: "İki dalı birleştirmek (merge)", git: true, neden: "Birleştirmeyi Git yapar; platform yalnızca düğmesini sunar." },
  { ad: "Depoyu web'de yıldızlamak", git: false, neden: "Yıldız, takip, profil: hepsi platformun sosyal özellikleri." },
  { ad: "Geçmişi listelemek (log)", git: true, neden: "Geçmiş senin bilgisayarındaki .git klasöründe." },
  { ad: "Her push'ta testleri çalıştırmak", git: false, neden: "GitHub Actions ya da GitLab CI: platformun otomasyonu." },
];

export function GitMiPlatformMu(_: Ozellik) {
  const [cevaplar, setCevaplar] = useState<Record<number, boolean>>({});
  const dogru = OGELER.filter((o, i) => cevaplar[i] === o.git).length;
  const bitti = Object.keys(cevaplar).length === OGELER.length;
  return (
    <div className="ge">
      <p className="ge-not">Her iş için seç: bunu Git mi yapar, yoksa GitHub/GitLab gibi bir platform mu?</p>
      <ul className="ge-oyun">
        {OGELER.map((o, i) => {
          const c = cevaplar[i];
          return (
            <li key={o.ad} className={c === undefined ? "" : c === o.git ? "ge-evet" : "ge-hayir"}>
              <span className="ge-oyun-ad">{o.ad}</span>
              <span className="ge-oyun-dugmeler">
                <button type="button" className="cip" aria-pressed={c === true} onClick={() => setCevaplar({ ...cevaplar, [i]: true })}>Git</button>
                <button type="button" className="cip" aria-pressed={c === false} onClick={() => setCevaplar({ ...cevaplar, [i]: false })}>Platform</button>
              </span>
              {c !== undefined && <span className="ge-oyun-neden">{c === o.git ? "Doğru. " : "Değil. "}{o.neden}</span>}
            </li>
          );
        })}
      </ul>
      <p className="ge-sonuc" aria-live="polite">
        {bitti ? `${dogru}/${OGELER.length} doğru. ` : ""}Git bilgisayarındaki araçtır; GitHub ve GitLab, Git depolarını barındırıp üstüne ekip çalışması araçları koyan hizmetlerdir.
        {bitti && <button type="button" className="cip ge-yeniden" onClick={() => setCevaplar({})}>Yeniden</button>}
      </p>
    </div>
  );
}

// ---------------- G-H3-01: üç alan ----------------

interface DosyaHali {
  ad: string;
  calisma: number;
  hazirlik: number;
  depo: number;
}
const ILK_DOSYALAR: DosyaHali[] = [
  { ad: "index.html", calisma: 1, hazirlik: 1, depo: 1 },
  { ad: "stil.css", calisma: 1, hazirlik: 1, depo: 1 },
  { ad: "notlar.txt", calisma: 1, hazirlik: 0, depo: 0 },
];

export function UcAlanAkisi(_: Ozellik) {
  const [dosyalar, setDosyalar] = useState(ILK_DOSYALAR);
  const [commitler, setCommitler] = useState(1);
  const [son, setSon] = useState("Bir dosyayı düzenleyerek başla.");
  const degis = (ad: string, f: (d: DosyaHali) => DosyaHali, mesaj: string) => {
    setDosyalar(dosyalar.map((d) => (d.ad === ad ? f(d) : d)));
    setSon(mesaj);
  };
  const hazirdakiler = dosyalar.filter((d) => d.hazirlik !== d.depo);
  const commit = () => {
    if (!hazirdakiler.length) return setSon("git commit: hazırlık alanı son commit'le aynı, kaydedilecek bir şey yok (\"nothing to commit\").");
    setDosyalar(dosyalar.map((d) => ({ ...d, depo: d.hazirlik })));
    setCommitler(commitler + 1);
    setSon(`git commit: hazırlık alanındaki ${hazirdakiler.map((d) => d.ad).join(", ")} yeni bir anlık görüntü oldu (commit ${commitler + 1}). Çalışma dizininde kalan değişiklikler commit'e girmedi.`);
  };
  const durumu = (d: DosyaHali) =>
    d.depo === 0 && d.hazirlik === 0 ? "izlenmiyor" : d.calisma !== d.hazirlik ? "değişti, eklenmedi" : d.hazirlik !== d.depo ? "commit'e hazır" : "temiz";
  return (
    <div className="ge">
      <div className="ge-ucalan">
        {(["calisma", "hazirlik", "depo"] as const).map((alan) => (
          <div key={alan} className="ge-alan">
            <strong>{{ calisma: "Çalışma dizini", hazirlik: "Hazırlık alanı", depo: `Depo (${commitler} commit)` }[alan]}</strong>
            {dosyalar.map((d) =>
              d[alan] > 0 ? (
                <span key={d.ad} className={`ge-surum${alan !== "depo" && d[alan] !== (alan === "calisma" ? d.hazirlik : d.depo) ? " ge-farkli" : ""}`}>
                  {d.ad} <em>s{d[alan]}</em>
                </span>
              ) : null,
            )}
          </div>
        ))}
      </div>
      <table className="ge-tablo">
        <tbody>
          {dosyalar.map((d) => (
            <tr key={d.ad}>
              <td className="mono">{d.ad}</td>
              <td className="ge-durum">{durumu(d)}</td>
              <td>
                <button type="button" className="cip" onClick={() => degis(d.ad, (x) => ({ ...x, calisma: Math.max(x.calisma, x.hazirlik, x.depo) + 1 }), `${d.ad} düzenlendi: yalnızca çalışma dizinindeki hâli değişti.`)}>Düzenle</button>
                <button type="button" className="cip" onClick={() => degis(d.ad, (x) => ({ ...x, hazirlik: x.calisma }), `git add ${d.ad}: dosyanın şu anki hâli hazırlık alanına kopyalandı.`)}>git add</button>
                <button type="button" className="cip" disabled={d.hazirlik === d.depo} onClick={() => degis(d.ad, (x) => ({ ...x, hazirlik: x.depo }), `git restore --staged ${d.ad}: hazırlık alanı son commit'e döndü, çalışma dizinindeki değişiklik duruyor.`)}>restore --staged</button>
                <button type="button" className="cip" disabled={d.calisma === d.hazirlik || d.hazirlik === 0} onClick={() => degis(d.ad, (x) => ({ ...x, calisma: x.hazirlik }), `git restore ${d.ad}: çalışma dizinindeki değişiklik atıldı, dosya hazırlık alanındaki hâline döndü. Geri getirilemez!`)}>git restore</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="ge-satir">
        <button type="button" className="primary" onClick={commit}>git commit</button>
        <button type="button" onClick={() => { setDosyalar(ILK_DOSYALAR); setCommitler(1); setSon("Baştan başladı."); }}>Baştan</button>
      </div>
      <p className="ge-sonuc" aria-live="polite">{son}</p>
    </div>
  );
}

// ---------------- G-H4-01: commit kimliği ----------------

const YAZAR = { ad: "Ayse Yilmaz", eposta: "ayse@example.com", zaman: 1767258000 };

function commitKimligi(icerik: string, mesaj: string, ad: string): { blob: string; agac: string; commit: string } {
  const blob = nesneKimligi({ tur: "blob", icerik });
  const agac = nesneKimligi({ tur: "tree", girdiler: [{ ad: "README.md", mod: "100644", hash: blob }] });
  const kisi = { ...YAZAR, ad: ad || "?" };
  const commit = nesneKimligi({ tur: "commit", agac, ebeveynler: [], yazar: kisi, isleyen: kisi, mesaj: (mesaj || " ") + "\n" });
  return { blob, agac, commit };
}

export function CommitKimligi(_: Ozellik) {
  const [icerik, setIcerik] = useState("# Proje\n");
  const [mesaj, setMesaj] = useState("README eklendi");
  const [ad, setAd] = useState(YAZAR.ad);
  const k = useMemo(() => commitKimligi(icerik, mesaj, ad), [icerik, mesaj, ad]);
  const ilk = useMemo(() => commitKimligi("# Proje\n", "README eklendi", YAZAR.ad).commit, []);
  return (
    <div className="ge">
      <p className="ge-not">Commit kimliği (hash) içeriğin, mesajın, yazarın, zamanın ve önceki commit'in özetidir. Herhangi birini bir harf değiştir:</p>
      <div className="ge-form">
        <label>README.md içeriği <textarea rows={2} value={icerik} onChange={(e) => setIcerik(e.target.value)} spellCheck={false} /></label>
        <label>Commit mesajı <input value={mesaj} onChange={(e) => setMesaj(e.target.value)} /></label>
        <label>Yazar <input value={ad} onChange={(e) => setAd(e.target.value)} /></label>
      </div>
      <dl className="ge-kimlik">
        <dt>commit</dt>
        <dd className="mono">{[...k.commit].map((c, i) => <span key={i} className={c !== ilk[i] ? "ge-farkli-harf" : undefined}>{c}</span>)}</dd>
        <dt>kısa hâli</dt>
        <dd className="mono">{k.commit.slice(0, 7)}</dd>
      </dl>
      <p className="ge-sonuc" aria-live="polite">
        {k.commit === ilk
          ? "Başlangıçtaki commit. Git'te aynı içerik, aynı mesaj ve aynı zamanla her bilgisayarda aynı kimlik çıkar."
          : "Tek bir harf bile bütün kimliği değiştirdi (değişen karakterler işaretli). Bu yüzden commit'ler sessizce değiştirilemez: değişen commit yeni bir commit'tir."}
      </p>
    </div>
  );
}

// ---------------- G-H5-01: yerel ve uzak ----------------

interface Commit_ {
  id: string;
  kim: "sen" | "ayse";
}

export function YerelUzak(_: Ozellik) {
  const [yerel, setYerel] = useState<Commit_[]>([{ id: "A", kim: "sen" }]);
  const [uzak, setUzak] = useState<Commit_[]>([{ id: "A", kim: "sen" }]);
  const [sayac, setSayac] = useState(1);
  const [mesaj, setMesaj] = useState("İki depo da aynı: A commit'i hem sende hem GitHub'da.");
  const harf = (n: number) => String.fromCharCode(65 + n);
  const ileride = yerel.filter((c) => !uzak.some((u) => u.id === c.id)).length;
  const geride = uzak.filter((c) => !yerel.some((u) => u.id === c.id)).length;
  const commitAt = () => {
    const c = { id: harf(sayac), kim: "sen" as const };
    setSayac(sayac + 1);
    setYerel([...yerel, c]);
    setMesaj(`git commit: ${c.id} yalnızca senin bilgisayarında. GitHub'daki depo bundan habersiz.`);
  };
  const push = () => {
    if (geride) return setMesaj("git push reddedildi (rejected, fetch first): GitHub'da sende olmayan commit var. Önce git pull ile onları al.");
    if (!ileride) return setMesaj("git push: Everything up-to-date. Gönderilecek yeni commit yok.");
    setUzak(yerel);
    setMesaj(`git push: ${ileride} commit GitHub'a gönderildi. Artık ekip de görüyor.`);
  };
  const arkadas = () => {
    const c = { id: harf(sayac), kim: "ayse" as const };
    setSayac(sayac + 1);
    setUzak([...uzak, c]);
    setMesaj(`Ayşe ${c.id} commit'ini GitHub'a push etti. Senin bilgisayarında henüz yok.`);
  };
  const pull = () => {
    if (!geride) return setMesaj("git pull: Already up to date.");
    const yeni = [...uzak, ...yerel.filter((c) => !uzak.some((u) => u.id === c.id))];
    setYerel(yeni);
    setMesaj(ileride ? "git pull: Ayşe'nin commit'leri geldi ve seninkilerle birleştirildi. Şimdi push edebilirsin." : "git pull: Ayşe'nin commit'leri bilgisayarına geldi.");
  };
  const Seri = ({ l }: { l: Commit_[] }) => (
    <div className="ge-seri">
      {l.map((c) => <span key={c.id} className={`ge-nokta ge-${c.kim}`} title={c.kim === "sen" ? "senin commit'in" : "Ayşe'nin commit'i"}>{c.id}</span>)}
    </div>
  );
  return (
    <div className="ge">
      <div className="ge-yu">
        <div className="ge-kutu"><strong>Senin bilgisayarın (yerel depo)</strong><Seri l={yerel} />
          <span className="ge-durum">{ileride || geride ? `${ileride} ileride, ${geride} geride` : "origin/main ile aynı"}</span>
        </div>
        <div className="ge-oklar" aria-hidden="true"><span>push →</span><span>← pull</span></div>
        <div className="ge-kutu"><strong>GitHub (origin)</strong><Seri l={uzak} /></div>
      </div>
      <div className="ge-satir">
        <button type="button" className="cip" onClick={commitAt}>git commit</button>
        <button type="button" className="cip" onClick={push}>git push</button>
        <button type="button" className="cip" onClick={pull}>git pull</button>
        <button type="button" className="cip" onClick={arkadas}>Ayşe push etsin</button>
      </div>
      <p className="ge-sonuc" aria-live="polite">{mesaj}</p>
    </div>
  );
}

export const ETKILESIMLER: Record<string, ComponentType<Ozellik>> = {
  zamanMakinesi: ZamanMakinesi,
  merkeziDagitik: MerkeziDagitik,
  gitMiPlatformMu: GitMiPlatformMu,
  ucAlan: UcAlanAkisi,
  commitKimligi: CommitKimligi,
  yerelUzak: YerelUzak,
  dalIsaretcisi: DalIsaretcisi,
  cakismaEditoru: CakismaEditoru,
  pullRequest: PullRequest,
  resetKipleri: ResetKipleri,
  fetchPull: FetchPull,
  mergeRebase: MergeRebase,
  rebaseListesi: RebaseListesi,
  ucOrtamAkisi: UcOrtamAkisi,
  korumaPaneli: KorumaPaneli,
  isAkisi: IsAkisi,
  sizintiTatbikati: SizintiTatbikati,
  anahtarAvi: AnahtarAvi,
};
