// Kademe 2 (Ü6-9) etkileşimli şekilleri: dal işaretçileri, çakışma editörü,
// pull request sayfası ve reset kipleri.
import { useState } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";

type Ozellik = { g: Gorsel };

// ---------------- G-H6-01: dal bir işaretçidir ----------------

interface Durum6 {
  commitler: { id: string; ebeveyn: string[]; serit: number }[];
  dallar: Record<string, string>;
  head: string;
  mesaj: string;
}

const BASLANGIC6: Durum6 = {
  commitler: [{ id: "A", ebeveyn: [], serit: 0 }, { id: "B", ebeveyn: ["A"], serit: 0 }],
  dallar: { main: "B" },
  head: "main",
  mesaj: "main dalı B commit'ini gösteriyor; HEAD de main'i. Bir düğmeye bas.",
};

export function DalIsaretcisi(_: Ozellik) {
  const [d, setD] = useState<Durum6>(BASLANGIC6);
  const yeniId = () => String.fromCharCode(65 + d.commitler.length);
  const serit = (dal: string) => (dal === "main" ? 0 : 1);
  const commit = () => {
    const id = yeniId();
    const uc = d.dallar[d.head]!;
    setD({
      ...d,
      commitler: [...d.commitler, { id, ebeveyn: [uc], serit: serit(d.head) }],
      dallar: { ...d.dallar, [d.head]: id },
      mesaj: `git commit: ${id} oluştu ve yalnızca '${d.head}' işaretçisi ona kaydı. Diğer dallar yerinde.`,
    });
  };
  const dalAc = () => {
    if (d.dallar.ozellik) return setD({ ...d, mesaj: "fatal: a branch named 'ozellik' already exists" });
    setD({ ...d, dallar: { ...d.dallar, ozellik: d.dallar[d.head]! }, mesaj: `git branch ozellik: yeni işaretçi ${d.dallar[d.head]} commit'inde açıldı. Hiçbir dosya kopyalanmadı. HEAD hâlâ ${d.head}'de.` });
  };
  const gec = (dal: string) => {
    if (!d.dallar[dal]) return setD({ ...d, mesaj: `fatal: invalid reference: ${dal}` });
    setD({ ...d, head: dal, mesaj: `git switch ${dal}: HEAD artık ${dal}'i gösteriyor; çalışma dizini ${d.dallar[dal]} commit'inin hâline geldi.` });
  };
  const birlestir = () => {
    if (d.head !== "main" || !d.dallar.ozellik) return setD({ ...d, mesaj: "Önce ozellik dalını aç ve main'e geç; birleştirme bulunduğun dala yapılır." });
    const m = d.dallar.main!;
    const o = d.dallar.ozellik!;
    const ata = (h: string, hedef: string): boolean => h === hedef || (d.commitler.find((c) => c.id === h)?.ebeveyn.some((p) => ata(p, hedef)) ?? false);
    if (ata(m, o)) return setD({ ...d, mesaj: "Already up to date: ozellik'in commit'leri zaten main'de." });
    if (ata(o, m)) return setD({ ...d, dallar: { ...d.dallar, main: o }, mesaj: `Fast-forward: main yalnızca ${o}'ya kaydırıldı; yeni commit gerekmedi.` });
    const id = yeniId();
    setD({
      ...d,
      commitler: [...d.commitler, { id, ebeveyn: [m, o], serit: 0 }],
      dallar: { ...d.dallar, main: id },
      mesaj: `Üç yollu birleştirme: iki ebeveynli ${id} commit'i oluştu (${m} ve ${o}).`,
    });
  };
  const etiketler = (id: string) => Object.entries(d.dallar).filter(([, h]) => h === id).map(([ad]) => ad);
  return (
    <div className="ge">
      <div className="ge-dal-izgara" aria-label="Commit grafiği">
        {[0, 1].map((s) => (
          <div key={s} className="ge-serit">
            <span className="ge-serit-ad">{s === 0 ? "main çizgisi" : "ozellik çizgisi"}</span>
            {d.commitler.map((c) => (
              <span key={c.id} className={`ge-hucre${c.serit === s ? " dolu" : ""}`}>
                {c.serit === s && (
                  <>
                    <span className={`ge-nokta ge-${s === 0 ? "sen" : "ayse"}${c.ebeveyn.length > 1 ? " ge-birlesim" : ""}`}>{c.id}</span>
                    <span className="ge-isaretciler">
                      {etiketler(c.id).map((ad) => (
                        <span key={ad} className={`ge-isaretci${d.head === ad ? " etkin" : ""}`}>{d.head === ad ? "HEAD → " : ""}{ad}</span>
                      ))}
                    </span>
                  </>
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="ge-satir">
        <button type="button" className="cip" onClick={commit}>git commit</button>
        <button type="button" className="cip" onClick={dalAc}>git branch ozellik</button>
        <button type="button" className="cip" onClick={() => gec("ozellik")}>git switch ozellik</button>
        <button type="button" className="cip" onClick={() => gec("main")}>git switch main</button>
        <button type="button" className="cip" onClick={birlestir}>git merge ozellik</button>
        <button type="button" onClick={() => setD(BASLANGIC6)}>Baştan</button>
      </div>
      <p className="ge-sonuc" aria-live="polite">{d.mesaj}</p>
      <p className="ge-not">Dene: dal aç, ona geç, iki commit at, main'e dön ve birleştir (ileri sarma). Sonra baştan başla ve birleştirmeden önce main'e de bir commit at (üç yollu).</p>
    </div>
  );
}

// ---------------- G-H7-01: çakışma editörü ----------------

const CAKISMALI = `const KDV = 0.20;
<<<<<<< HEAD
function fiyat(net) {
  return net * (1 + KDV);
}
=======
function fiyat(net, indirim = 0) {
  return net * (1 - indirim) * (1 + KDV);
}
>>>>>>> indirim
`;
const BIZ = "const KDV = 0.20;\nfunction fiyat(net) {\n  return net * (1 + KDV);\n}\n";
const ONLAR = "const KDV = 0.20;\nfunction fiyat(net, indirim = 0) {\n  return net * (1 - indirim) * (1 + KDV);\n}\n";
const IKISI = "const KDV = 0.20;\nfunction fiyat(net) {\n  return net * (1 + KDV);\n}\nfunction fiyat(net, indirim = 0) {\n  return net * (1 - indirim) * (1 + KDV);\n}\n";

export function CakismaEditoru(_: Ozellik) {
  const [metin, setMetin] = useState(CAKISMALI);
  const [sonuc, setSonuc] = useState<{ iyi: boolean; yazi: string } | null>(null);
  const isaretVar = /^(<{7}|={7}|>{7})/m.test(metin);
  const ekle = () => {
    if (isaretVar) return setSonuc({ iyi: false, yazi: "git add yaptın ama dosyada hâlâ çakışma işaretleri var. Git bunu fark etmez ve bozuk dosyayı commit'ler! Önce işaretleri sil." });
    if ((metin.match(/function fiyat/g) ?? []).length > 1)
      return setSonuc({ iyi: false, yazi: "İşaretler gitti ama dosyada aynı adla iki fonksiyon var: \"ikisini birden al\" her zaman doğru değildir. Son hâlin çalışacağından emin ol." });
    setSonuc({ iyi: true, yazi: "Çakışma çözüldü: git add dosyayı çözüldü olarak işaretler, git commit birleştirmeyi bitirir." });
  };
  const sec = (m: string) => {
    setMetin(m);
    setSonuc(null);
  };
  return (
    <div className="ge">
      <p className="ge-not">main'deyken <code>git merge indirim</code> yazdın, <code>fiyat.js</code> çakıştı. Üstteki (HEAD) senin, alttaki gelen dalın. Düğmelerle bir tarafı seç ya da metni kendin düzenle.</p>
      <div className="ge-satir">
        <button type="button" className="cip" onClick={() => sec(BIZ)}>Bizimkini al (HEAD)</button>
        <button type="button" className="cip" onClick={() => sec(ONLAR)}>Gelenini al (indirim)</button>
        <button type="button" className="cip" onClick={() => sec(IKISI)}>İkisini birden</button>
        <button type="button" className="cip" onClick={() => sec(CAKISMALI)}>Baştan</button>
      </div>
      <textarea className="ge-cakisma" value={metin} onChange={(e) => sec(e.target.value)} rows={11} spellCheck={false} aria-label="fiyat.js" />
      <div className="ge-satir">
        <span className={isaretVar ? "ge-hayir" : "ge-evet"}>{isaretVar ? "İşaretler duruyor" : "İşaret kalmadı"}</span>
        <button type="button" className="primary" onClick={ekle}>git add fiyat.js</button>
      </div>
      {sonuc && <p className={`ge-sonuc ${sonuc.iyi ? "ge-iyi" : "ge-kotu"}`} aria-live="polite">{sonuc.yazi}</p>}
    </div>
  );
}

// ---------------- G-H8-01: pull request sayfası ----------------

type Yontem = "merge" | "squash" | "rebase";

export function PullRequest(_: Ozellik) {
  const [sekme, setSekme] = useState<"konusma" | "dosyalar">("konusma");
  const [kontrol, setKontrol] = useState<"bekliyor" | "kirmizi" | "yesil">("kirmizi");
  const [onay, setOnay] = useState(false);
  const [yorum, setYorum] = useState(false);
  const [yontem, setYontem] = useState<Yontem>("merge");
  const [birlesti, setBirlesti] = useState(false);
  const hazir = kontrol === "yesil" && onay;
  const duzelt = () => {
    setKontrol("bekliyor");
    setOnay(false);
    setTimeout(() => setKontrol("yesil"), 900);
  };
  return (
    <div className="ge ge-pr">
      <div className="ge-pr-baslik">
        <strong>Sepete indirim kodu ekle</strong> <span className="ge-pr-no">#42</span>
        <span className={`ge-pr-durum${birlesti ? " birlesti" : ""}`}>{birlesti ? "Merged" : "Open"}</span>
        <div className="ge-pr-dal"><code>main</code> ← <code>feature/US-D21-indirim-kodu</code> · 3 commit</div>
      </div>
      <div className="ge-secim" role="tablist">
        <button type="button" role="tab" className="cip" aria-pressed={sekme === "konusma"} onClick={() => setSekme("konusma")}>Konuşma</button>
        <button type="button" role="tab" className="cip" aria-pressed={sekme === "dosyalar"} onClick={() => setSekme("dosyalar")}>Değişen dosyalar (1)</button>
      </div>
      {sekme === "konusma" ? (
        <ul className="ge-pr-akis">
          <li><b>deniz</b> açtı: "İndirim kodu alanı ve hesaplama. Closes #37"</li>
          {yorum && <li><b>ayse</b> satıra yorum yazdı: "Kod boşsa hata veriyor; kontrol ekleyelim mi?"</li>}
          {kontrol !== "kirmizi" && <li><b>deniz</b> düzeltme commit'i push etti: "Boş indirim kodunu kontrol et"</li>}
          {onay && <li className="ge-evet"><b>ayse</b> onayladı ✓</li>}
        </ul>
      ) : (
        <pre className="ge-dosya">
          <span>  function toplam(sepet, kod) {"{"}</span>
          {kontrol === "kirmizi" ? <span className="ge-ekle">+   const oran = INDIRIMLER[kod].oran;</span> : <span className="ge-ekle">+   const oran = kod ? INDIRIMLER[kod]?.oran ?? 0 : 0;</span>}
          <span className="ge-ekle">+   return sepet.tutar * (1 - oran);</span>
          <span className="ge-sil">-   return sepet.tutar;</span>
          <span>  {"}"}</span>
        </pre>
      )}
      <div className="ge-pr-kontroller">
        <div className={kontrol === "yesil" ? "ge-evet" : kontrol === "kirmizi" ? "ge-hayir" : ""}>
          {kontrol === "yesil" ? "✓ Testler geçti" : kontrol === "kirmizi" ? "✗ Testler başarısız: toplam() boş kodla hata veriyor" : "… Testler çalışıyor"}
        </div>
        <div className={onay ? "ge-evet" : "ge-hayir"}>{onay ? "✓ 1 onay" : "✗ En az 1 onay gerekli"}</div>
      </div>
      {!birlesti && (
        <div className="ge-satir">
          {!yorum && <button type="button" className="cip" onClick={() => setYorum(true)}>Ayşe incelesin</button>}
          {yorum && kontrol === "kirmizi" && <button type="button" className="cip" onClick={duzelt}>Düzeltmeyi push et</button>}
          {yorum && kontrol === "yesil" && !onay && <button type="button" className="cip" onClick={() => setOnay(true)}>Ayşe onaylasın</button>}
        </div>
      )}
      <div className="ge-pr-birlestir">
        <select value={yontem} onChange={(e) => setYontem(e.target.value as Yontem)} disabled={birlesti} aria-label="Birleştirme yöntemi">
          <option value="merge">Create a merge commit</option>
          <option value="squash">Squash and merge</option>
          <option value="rebase">Rebase and merge</option>
        </select>
        <button type="button" className="primary" disabled={!hazir || birlesti} onClick={() => setBirlesti(true)}>Birleştir</button>
        {!hazir && !birlesti && <span className="ge-not">Kontroller yeşil ve onay gelmeden düğme açılmaz (dal koruması).</span>}
      </div>
      {birlesti && (
        <div className="ge-sonuc ge-iyi" aria-live="polite">
          <p>main'in geçmişi:</p>
          <pre className="ge-gecmis">
            {yontem === "merge"
              ? "*   e1f  Merge pull request #42\n|\\\n| * c3c  Boş indirim kodunu kontrol et\n| * b2b  Hesaplama\n| * a1a  İndirim kodu alanı\n|/\n*   9f0  (önceki main)"
              : yontem === "squash"
                ? "* 5d2  Sepete indirim kodu ekle (#42)\n* 9f0  (önceki main)"
                : "* c3c' Boş indirim kodunu kontrol et\n* b2b' Hesaplama\n* a1a' İndirim kodu alanı\n* 9f0  (önceki main)"}
          </pre>
          <p>{yontem === "merge" ? "Dalın bütün commit'leri ve iki ebeveynli bir birleştirme commit'i." : yontem === "squash" ? "Üç commit tek commit'e sıkıştırıldı." : "Commit'ler yeni kimliklerle (') uca dizildi; birleştirme commit'i yok."} Issue #37 kapandı; dal artık silinebilir.</p>
          <button type="button" className="cip" onClick={() => { setBirlesti(false); setOnay(false); setYorum(false); setKontrol("kirmizi"); }}>Baştan</button>
        </div>
      )}
    </div>
  );
}

// ---------------- G-H9-01: reset kipleri ----------------

type Kip = "soft" | "mixed" | "hard";

export function ResetKipleri(_: Ozellik) {
  const [kip, setKip] = useState<Kip>("mixed");
  const [yapildi, setYapildi] = useState(false);
  const alan = (ad: string, once: string, sonra: string, degisir: boolean) => (
    <div className={`ge-alan${yapildi && degisir ? " ge-degisti" : ""}`}>
      <strong>{ad}</strong>
      <span className="ge-surum">{yapildi && degisir ? sonra : once}</span>
    </div>
  );
  return (
    <div className="ge">
      <p className="ge-not">Son commit C'de <code>fiyat.js</code>'ye indirim satırı eklendi. <code>git reset --{kip} HEAD~1</code> çalışınca hangi alan değişir?</p>
      <div className="ge-secim">
        {(["soft", "mixed", "hard"] as Kip[]).map((k) => (
          <button key={k} type="button" className="cip" aria-pressed={kip === k} onClick={() => { setKip(k); setYapildi(false); }}>--{k}</button>
        ))}
        <button type="button" className="primary" onClick={() => setYapildi(!yapildi)}>{yapildi ? "Geri sar" : "Çalıştır"}</button>
      </div>
      <div className="ge-ucalan">
        {alan("Dal (main)", "C'yi gösteriyor", "B'yi gösteriyor", true)}
        {alan("Hazırlık alanı", "indirim satırı var", "indirim satırı yok", kip !== "soft")}
        {alan("Çalışma dizini", "indirim satırı var", "indirim satırı SİLİNDİ", kip === "hard")}
      </div>
      <p className={`ge-sonuc${yapildi && kip === "hard" ? " ge-kotu" : ""}`} aria-live="polite">
        {!yapildi
          ? "Bir kip seçip Çalıştır'a bas."
          : kip === "soft"
            ? "--soft: yalnızca dal geri gitti. Değişiklik hazırlık alanında, hemen yeniden commit'lenebilir."
            : kip === "mixed"
              ? "--mixed (varsayılan): dal ve hazırlık alanı geri gitti. Değişiklik dosyada duruyor, git add ile yeniden seçilir."
              : "--hard: üç alan da B'ye döndü. Dosyadaki değişiklik gitti; C commit'i yalnızca reflog'dan bulunabilir."}
      </p>
    </div>
  );
}
