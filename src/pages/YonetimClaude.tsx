// Yönetim > Claude: işi kuyruğa yazma, ajanın durumu ve işler. Pratik panelinde
// iş o pratiğe verilir; çatı panelinde (pratikler.) yeni pratik açılır.
// İşleri yöneticinin bilgisayarındaki yerel ajan yapar (ajan/pratikler-ajan.mjs).

import { useEffect, useRef, useState, type ComponentProps, type FormEvent } from "react";
import { api } from "../lib/api";
import { PRATIK_YA_DA_KATALOG } from "../lib/pratik";
import { FormHatasi } from "../components/Form";
import { Daktilo, hareketAzaltilmis, useDaktilo } from "../components/Daktilo";
import { href } from "../lib/router";
import { CLAUDE_ISTEK_EN_UZUN, type AjanDurumu, type ClaudeIsi, type ClaudeOlayi, type YeniPratikGirdi } from "../../shared/yonetim";

const zaman = (ms: number) =>
  new Date(ms).toLocaleString("tr-TR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

const IS_DURUMU: Record<ClaudeIsi["durum"], string> = {
  bekliyor: "Ajanı bekliyor",
  calisiyor: "Çalışıyor",
  pr: "PR açıldı",
  tamam: "Cevaplandı",
  hata: "Hata",
  iptal: "İptal edildi",
};

const DEPO_ANAHTARI = "pratikler:ajan-depo";
const okuDepo = () => {
  try {
    return localStorage.getItem(DEPO_ANAHTARI) ?? "";
  } catch {
    return "";
  }
};

function Kopyala({ metin }: { metin: string }) {
  const [oldu, setOldu] = useState(false);
  return (
    <div className="kopyala">
      <pre className="code">{metin}</pre>
      <button type="button" onClick={() => navigator.clipboard?.writeText(metin).then(() => { setOldu(true); setTimeout(() => setOldu(false), 1500); })}>
        {oldu ? "Kopyalandı" : "Kopyala"}
      </button>
    </div>
  );
}

// macOS'ta çift tıklayınca Terminal'de ajanı başlatan dosya. Anahtar içermez: ajan
// onu Anahtar Zinciri'nden okur.
function commandDosyasi(depo: string): string {
  const yol = depo.replace(/"/g, '\\"');
  return [
    "#!/bin/zsh -l",
    "# Pratikler yerel ajanı. Anahtar Anahtar Zinciri'nden (pratikler-ajan) okunur.",
    `cd "${yol}" || { echo "Depo bulunamadı: ${yol}"; read; exit 1; }`,
    "git pull -q --ff-only origin main || echo 'git pull yapılamadı, mevcut sürümle devam ediliyor'",
    "npm run ajan",
    "",
  ].join("\n");
}

function AjanKarti({ onTest }: { onTest: () => void }) {
  const [d, setD] = useState<AjanDurumu | null>(null);
  const [simdi, setSimdi] = useState(Date.now());
  const [depo, setDepo] = useState(okuDepo);
  const [ayrinti, setAyrinti] = useState(false);
  useEffect(() => {
    const yukle = () => api.yonetim.ajan().then((r) => {
      setD(r);
      setSimdi(Date.now());
      if (r.nabiz?.depo && !okuDepo()) setDepo(r.nabiz.depo);
    }, () => {});
    void yukle();
    const t = setInterval(yukle, 15_000);
    return () => clearInterval(t);
  }, []);
  const depoKaydet = (v: string) => {
    setDepo(v);
    try {
      localStorage.setItem(DEPO_ANAHTARI, v);
    } catch {
      // yalnızca bu oturum
    }
  };
  if (!d) return <section className="ajan-serit"><span className="parilti">Ajan durumu soruluyor</span></section>;

  const n = d.nabiz;
  const gecen = n ? Math.round((simdi - n.zaman) / 1000) : null;
  const acik = n !== null && gecen! <= n.aralikSn * 2.5 + 30;
  const indir = () => {
    const url = URL.createObjectURL(new Blob([commandDosyasi(depo)], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "Pratikler ajanı.command";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const durum = !d.anahtarTanimli ? "kurulmamis" : acik ? "acik" : "kapali";
  const kurulumAcik = !acik || ayrinti;

  return (
    <section className={`ajan-serit ajan-${durum}`} aria-label="Yerel ajan">
      <div className="ajan-serit-ust">
        <span className="ajan-isik" aria-hidden="true" />
        <div className="ajan-serit-metin">
          <strong>
            {durum === "acik" ? "Ajan açık, işleri alıyor" : durum === "kapali" ? "Ajan kapalı; işler sırada bekler" : "Ajan henüz kurulmadı"}
          </strong>
          <span className="hint">
            {n
              ? `${n.makine} üzerinde, son yoklama ${gecen! < 90 ? `${gecen} sn` : `${Math.round(gecen! / 60)} dk`} önce. Claude ${n.claude ?? "bulunamadı"}, gh ${n.gh ?? "bulunamadı"}, Node ${n.node}; ${n.aralikSn} sn arayla yokluyor.`
              : d.anahtarTanimli
                ? "Ajan bu sunucuya hiç bağlanmadı. Aşağıdaki adımlarla bilgisayarında başlat."
                : "İşleri senin bilgisayarındaki ajan yapar. Bir kez kurman yeterli."}
          </span>
        </div>
        <div className="ajan-serit-dugmeler">
          {acik && <button type="button" onClick={onTest} title="Claude'u çalıştırmadan ajanın makinesindeki claude, gh ve depo durumunu işler listesine yazar">Ajanı dene</button>}
          {acik && <button type="button" onClick={() => setAyrinti(!ayrinti)} aria-expanded={ayrinti}>{ayrinti ? "Kurulumu gizle" : "Kurulum"}</button>}
        </div>
      </div>
      {kurulumAcik && (
        <div className="ajan-kurulum">
        <ol className="ajan-adimlar">
          {!d.anahtarTanimli && (
            <li>
              Bir anahtar üret ve Worker'a ver (deponun klasöründe):
              <Kopyala metin={"openssl rand -hex 32\nnpx wrangler secret put AJAN_TOKEN"} />
            </li>
          )}
          <li>
            Aynı anahtarı bir kez Mac'inin Anahtar Zinciri'ne ekle. Anahtar hiçbir dosyaya yazılmaz, bu sayfa da onu bilmez:
            <Kopyala metin={`security add-generic-password -U -s pratikler-ajan -a "$USER" -w '<anahtar>'`} />
          </li>
          <li>
            <strong>Önerilen:</strong> ajanı servis olarak kur. Oturum açıkken hep çalışır, bir daha Terminal açman gerekmez:
            <Kopyala metin={`cd ${depo || "<depo klasörü>"} && npm run ajan:servis -- kur`} />
          </li>
          <li>
            Ya da tek seferlik başlat. Depo klasörünü yaz, dosyayı indir ve çift tıkla; Terminal'de ajan açılır.
            İlk açılışta macOS izin isterse dosyaya sağ tıklayıp <em>Aç</em>'ı seç.
            <div className="satir-form">
              <input value={depo} onChange={(e) => depoKaydet(e.target.value)} placeholder="/Users/selcuk/Projeler/pratikler" aria-label="Depo klasörü" />
              <button type="button" onClick={indir} disabled={!depo.startsWith("/")}>Başlatma dosyasını indir</button>
            </div>
            Terminal'den elle: <Kopyala metin={`cd ${depo || "<depo klasörü>"} && npm run ajan`} />
          </li>
        </ol>
        </div>
      )}
    </section>
  );
}

const slug = (s: string) =>
  s.toLocaleLowerCase("tr").replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

function YeniPratikFormu({ eklendi }: { eklendi: () => void }) {
  const [g, setG] = useState<YeniPratikGirdi>({ ad: "", id: "", alt: "", onek: "", alan: "Mühendislik", kaynakKlasoru: "", notlar: "" });
  const [elle, setElle] = useState(false);
  const [hata, setHata] = useState<string | null>(null);
  const [mesgul, setMesgul] = useState(false);
  const adDegisti = (ad: string) => {
    if (elle) return setG({ ...g, ad });
    const id = slug(ad);
    const onek = id.split("-").map((p) => p[0]).join("").slice(0, 4) || "";
    setG({ ...g, ad, id, alt: id.replace(/-/g, ""), onek: onek.length >= 2 ? onek : id.slice(0, 2) });
  };
  const gonder = async (e: FormEvent) => {
    e.preventDefault();
    setHata(null);
    setMesgul(true);
    const r = await api.yonetim.claudePratik(g);
    setMesgul(false);
    if (!r.ok) return setHata(r.hata.error);
    setG({ ad: "", id: "", alt: "", onek: "", alan: g.alan, kaynakKlasoru: "", notlar: "" });
    eklendi();
  };
  const alan = (ad: keyof YeniPratikGirdi, etiket: string, ek: ComponentProps<"input"> = {}) => (
    <label className="form-alani">
      <span>{etiket}</span>
      <input value={g[ad]} onChange={(e) => { if (ad !== "ad") setElle(true); ad === "ad" ? adDegisti(e.target.value) : setG({ ...g, [ad]: e.target.value }); }} {...ek} />
    </label>
  );
  return (
    <section className="claude-yazici" aria-labelledby="yeni-pratik-baslik">
      <h3 id="yeni-pratik-baslik">Claude ile yeni pratik aç</h3>
      <p className="hint">
        Kaynakları (.md'ye çevrilmiş ders notları, kitap bölümleri) bilgisayarında bir klasöre koy ve yolunu yaz. Ajan
        Claude'a o klasörü okutur; meta bilgisini, üniteleri, soruları ve migration'ları hazırlatıp
        denetimlerden geçerse PR açar. Birleştirip <code>npm run db:migrate:remote</code> ve <code>npm run deploy</code>
        çalıştırınca pratik <code>pratikler.selcukdinc.dev</code> altındaki kendi adresinde yayına çıkar; alt alan adı açılmaz.
      </p>
      <form onSubmit={gonder} className="yeni-pratik">
        {alan("ad", "Ad", { placeholder: "Devre Analizi", maxLength: 60 })}
        {alan("id", "Kimlik", { placeholder: "devre-analizi" })}
        {alan("alt", "Adresteki ad", { placeholder: "devreanalizi" })}
        {alan("onek", "Soru öneki", { placeholder: "da", maxLength: 4 })}
        {alan("alan", "Katalog alanı", { placeholder: "Mühendislik" })}
        {alan("kaynakKlasoru", "Kaynak klasörü", { placeholder: "~/Belgeler/dersler/devre-analizi" })}
        <label className="form-alani tam">
          <span>Notlar (isteğe bağlı)</span>
          <textarea rows={3} maxLength={2000} value={g.notlar} onChange={(e) => setG({ ...g, notlar: e.target.value })}
            placeholder="Örnek: haftalar ünite olsun; 1-4. hafta notları var; formüller LaTeX ile yazılsın." />
        </label>
        <div className="tam claude-yazici-alt">
          <p className="hint">
            {g.alt ? <>Adres <strong>pratikler.selcukdinc.dev/{g.alt}</strong> olacak; konu kimlikleri {g.onek || "?"}-u1, {g.onek || "?"}-u2 diye gider.</> : "Adı yazınca kimlik, adres ve önek kendiliğinden dolar; istersen değiştir."}
          </p>
          <button type="submit" className="primary" disabled={mesgul || !g.ad.trim()}>{mesgul ? "Ekleniyor…" : "Pratiği sıraya ekle"}</button>
        </div>
      </form>
      <FormHatasi hata={hata} />
    </section>
  );
}

const ORNEK_ISLER = [
  "3. üniteye Wheatstone köprüsü çıkış gerilimi hesabıyla ilgili iki soru ekle.",
  "2. ünitedeki türetilmiş soruların açıklamalarını kısalt, kaynağı belirt.",
  "Doğru şıkkı diğerlerinden uzun kalan soruları bul ve düzelt.",
  "Terimler sayfasına EKG ile ilgili eksik kavramları ekle.",
];

// Kutu boşken ve odakta değilken örnek istekleri daktiloyla yazan yer tutucu
function DaktiloYerTutucu({ goster }: { goster: boolean }) {
  const [i, setI] = useState(0);
  const { metin, bitti } = useDaktilo(goster ? ORNEK_ISLER[i]! : "", { hiz: 28, silmeHizi: 10 });
  useEffect(() => {
    if (!goster || !bitti || hareketAzaltilmis()) return;
    const t = setTimeout(() => setI((x) => (x + 1) % ORNEK_ISLER.length), 2600);
    return () => clearTimeout(t);
  }, [goster, bitti]);
  if (!goster) return null;
  return <Daktilo className="daktilo-yer-tutucu" metin={metin} />;
}

function PratikIsFormu({ eklendi }: { eklendi: () => void }) {
  const [istek, setIstek] = useState("");
  const [odak, setOdak] = useState(false);
  const [hata, setHata] = useState<string | null>(null);
  const [mesgul, setMesgul] = useState(false);
  const kutu = useRef<HTMLTextAreaElement>(null);
  const gonder = async (e: FormEvent) => {
    e.preventDefault();
    setHata(null);
    setMesgul(true);
    const r = await api.yonetim.claudeIsiVer(istek);
    setMesgul(false);
    if (!r.ok) return setHata(r.hata.error);
    setIstek("");
    eklendi();
  };
  return (
    <section className="claude-yazici" aria-labelledby="claude-yazici-baslik">
      <h3 id="claude-yazici-baslik">{PRATIK_YA_DA_KATALOG!.ad} için Claude'a ne yaptırmak istiyorsun?</h3>
      <form onSubmit={gonder}>
        <div className="claude-kutu">
          <textarea ref={kutu} rows={4} maxLength={CLAUDE_ISTEK_EN_UZUN} value={istek} onChange={(e) => setIstek(e.target.value)}
            onFocus={() => setOdak(true)} onBlur={() => setOdak(false)} aria-label="Claude'a verilecek iş"
            aria-describedby="claude-yazici-not" placeholder={odak ? ORNEK_ISLER[0] : undefined} />
          <DaktiloYerTutucu goster={!istek && !odak} />
        </div>
        <div className="claude-ornekler" aria-label="Örnek istekler">
          {ORNEK_ISLER.slice(0, 3).map((o) => (
            <button key={o} type="button" onClick={() => { setIstek(o); kutu.current?.focus(); }}>{o}</button>
          ))}
        </div>
        <div className="claude-yazici-alt">
          <p id="claude-yazici-not" className="hint">
            Ajan işi alır, değişikliği yapar, denetimlerden (tsc, testler, build) geçerse PR açar. Birleştirmek ve yayına almak sende.
          </p>
          <span className="hint sayac">{istek.length} / {CLAUDE_ISTEK_EN_UZUN}</span>
          <button type="submit" className="primary" disabled={mesgul || istek.trim().length < 10}>{mesgul ? "Ekleniyor…" : "İşi sıraya ekle"}</button>
        </div>
      </form>
      <FormHatasi hata={hata} />
    </section>
  );
}

function isBasligi(i: ClaudeIsi): string {
  if (i.tur === "test") return "Ajan testi";
  if (i.tur === "pratik") {
    try {
      const g = JSON.parse(i.istek) as YeniPratikGirdi;
      return `Yeni pratik: ${g.ad} (pratikler.selcukdinc.dev/${g.alt}) · kaynak ${g.kaynakKlasoru}`;
    } catch {
      return "Yeni pratik";
    }
  }
  return i.istek;
}

const bitti = (d: ClaudeIsi["durum"]) => d !== "bekliyor" && d !== "calisiyor";
const sure = (ms: number) => {
  const sn = Math.max(0, Math.round(ms / 1000));
  return sn < 60 ? `${sn} sn` : `${Math.floor(sn / 60)} dk ${sn % 60} sn`;
};
const saat = (ms: number) => new Date(ms).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

// Ajanın geçtiği aşamalar; günlükteki "asama" olaylarından hangisinde olunduğu çıkarılır
const ASAMALAR = [
  { ad: "Hazırlık", anahtar: "Çalışma kopyası" },
  { ad: "Claude", anahtar: "Claude" },
  { ad: "Denetim", anahtar: "Denetimler" },
  { ad: "PR", anahtar: "Commit" },
] as const;
function asamaNo(olaylar: ClaudeOlayi[], is: ClaudeIsi): number {
  if (is.durum === "pr" || is.durum === "tamam") return ASAMALAR.length;
  let no = -1;
  for (const o of olaylar) {
    if (o.tur !== "asama") continue;
    const i = ASAMALAR.findIndex((a) => o.metin.startsWith(a.anahtar));
    if (i > no) no = i;
  }
  return no;
}

const OLAY_ISARETI: Record<ClaudeOlayi["tur"], string> = { asama: "▸", metin: "", arac: "⚙", sonuc: "↳", cikti: "", bilgi: "ℹ", hata: "✗" };

// Seçili işin canlı günlüğü: çalışırken 1,5 sn'de bir yalnızca yeni olaylar çekilir
function IsGunlugu({ id, degisti }: { id: string; degisti: () => void }) {
  const [is, setIs] = useState<ClaudeIsi | null>(null);
  const [olaylar, setOlaylar] = useState<ClaudeOlayi[]>([]);
  const [iptalIstendi, setIptalIstendi] = useState(false);
  const [hata, setHata] = useState<string | null>(null);
  const [takip, setTakip] = useState(true);
  const [ayrinti, setAyrinti] = useState(false);
  const [simdi, setSimdi] = useState(Date.now());
  const son = useRef(0);
  const kutu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIs(null);
    setOlaylar([]);
    son.current = 0;
    let dur = false;
    let zaman: ReturnType<typeof setTimeout>;
    let onceki: ClaudeIsi["durum"] | null = null;
    const cek = async () => {
      try {
        const r = await api.yonetim.claudeGunluk(id, son.current);
        if (dur) return;
        setIs(r.is);
        setIptalIstendi(r.iptalIstendi);
        setHata(null);
        if (r.olaylar.length) {
          son.current = r.olaylar[r.olaylar.length - 1]!.id;
          setOlaylar((o) => [...o, ...r.olaylar]);
        }
        if (onceki && onceki !== r.is.durum) degisti();
        onceki = r.is.durum;
        // 500'den çok olay birikmişse hemen devam; bitmiş işte bir kez daha bakıp durur
        if (r.olaylar.length >= 500) zaman = setTimeout(cek, 0);
        else if (!bitti(r.is.durum)) zaman = setTimeout(cek, r.is.durum === "calisiyor" ? 1500 : 5000);
      } catch (e) {
        if (dur) return;
        setHata(String(e));
        zaman = setTimeout(cek, 5000);
      }
    };
    void cek();
    const saniye = setInterval(() => setSimdi(Date.now()), 1000);
    return () => {
      dur = true;
      clearTimeout(zaman);
      clearInterval(saniye);
    };
  }, [id]);

  // Takip açıkken yeni satırlar gelince en alta kaydır
  useEffect(() => {
    if (takip && kutu.current) kutu.current.scrollTop = kutu.current.scrollHeight;
  }, [olaylar, takip, ayrinti]);

  if (!is) return <section className="is-gunlugu"><p className="empty">{hata ?? "Günlük açılıyor…"}</p></section>;
  const asama = asamaNo(olaylar, is);
  const gorunen = ayrinti ? olaylar : olaylar.filter((o) => o.tur !== "cikti" && o.tur !== "sonuc");
  const durdur = async () => {
    const r = await api.yonetim.claudeIptal(is.id);
    if (r.ok) setIptalIstendi(true);
    else setHata(r.hata.error);
  };
  const baslangic = olaylar[0]?.zaman ?? is.guncellendi;

  return (
    <section className="is-gunlugu" aria-label="İşin canlı günlüğü">
      <header className="is-gunlugu-ust">
        <div>
          <strong className={`is-durum is-durum-${is.durum}${is.durum === "calisiyor" ? " parilti" : ""}`}>{IS_DURUMU[is.durum]}</strong>
          {is.durum === "calisiyor" && <span className="canli-nokta" title="Canlı" />}
          {(olaylar.length > 0 || !bitti(is.durum)) && (
            <span className="soluk">, {bitti(is.durum) ? `${sure(is.guncellendi - baslangic)} sürdü` : is.durum === "calisiyor" ? sure(simdi - baslangic) : "sırada"}</span>
          )}
        </div>
        <p className="is-gunlugu-istek">{isBasligi(is)}</p>
        <div className="is-gunlugu-dugmeler">
          {is.prUrl && <a className="pr-baglanti" href={is.prUrl} target="_blank" rel="noreferrer">PR'ı aç</a>}
          {!bitti(is.durum) && (
            <button onClick={durdur} disabled={iptalIstendi}>{iptalIstendi ? "Durduruluyor…" : is.durum === "bekliyor" ? "İptal et" : "Durdur"}</button>
          )}
          <label><input type="checkbox" checked={ayrinti} onChange={(e) => setAyrinti(e.target.checked)} /> Komut çıktıları</label>
          <label><input type="checkbox" checked={takip} onChange={(e) => setTakip(e.target.checked)} /> Otomatik kaydır</label>
        </div>
        {is.tur !== "test" && (
          <ol className="asama-cubugu" aria-label="Aşamalar">
            {ASAMALAR.map((a, i) => (
              <li key={a.ad} className={i < asama || (i === asama && bitti(is.durum)) ? "tamam" : i === asama ? (is.durum === "hata" ? "hata" : "simdi") : ""}>
                <span className="asama-isaret" aria-hidden="true">{i + 1}</span>
                <span className={i === asama && is.durum === "calisiyor" ? "parilti" : undefined}>{a.ad}</span>
              </li>
            ))}
          </ol>
        )}
      </header>
      <div className={`terminal${gorunen.length === 0 ? " terminal-kisa" : ""}`} ref={kutu} role="log" aria-live="polite"
        onScroll={(e) => {
          const k = e.currentTarget;
          const altta = k.scrollHeight - k.scrollTop - k.clientHeight < 24;
          if (altta !== takip) setTakip(altta);
        }}>
        {gorunen.length === 0 ? (
          <p className="terminal-bos">{is.durum === "bekliyor" ? "Ajan işi alınca adımlar burada akacak." : bitti(is.durum) ? "Bu iş için günlük yok (canlı günlükten önce yapılmış olabilir)." : "Bekleniyor…"}</p>
        ) : gorunen.map((o) => (
          <div key={o.id} className={`terminal-satir t-${o.tur}`}>
            <span className="t-saat">{saat(o.zaman)}</span>
            <span className="t-isaret" aria-hidden="true">{OLAY_ISARETI[o.tur]}</span>
            <span className="t-metin">{o.metin}</span>
          </div>
        ))}
      </div>
      {is.sonuc && bitti(is.durum) && (
        <details open={is.tur === "test" || is.durum === "hata"}>
          <summary>{is.tur === "test" ? "Ajanın cevabı" : is.durum === "hata" ? "Hata ayrıntısı" : "Claude'un özeti"}</summary>
          <pre className="code">{is.sonuc}</pre>
        </details>
      )}
      <FormHatasi hata={hata} />
    </section>
  );
}

export function ClaudeIsleri({ secili }: { secili?: string }) {
  const [liste, setListe] = useState<ClaudeIsi[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const yukle = () => api.yonetim.claudeIsleri().then(setListe, (e) => setHata(String(e)));
  useEffect(() => {
    void yukle();
    const t = setInterval(() => void yukle(), 10_000);
    return () => clearInterval(t);
  }, []);
  const test = async () => {
    const r = await api.yonetim.claudeTest();
    if (!r.ok) setHata(r.hata.error);
    void yukle();
  };
  // Seçili iş yoksa çalışan iş, o da yoksa en son verilen iş açılır
  const acik = secili ?? (liste?.find((i) => i.durum === "calisiyor") ?? liste?.[0])?.id;

  return (
    <div className="panel-genel panel-genis claude-paneli">
      <AjanKarti onTest={test} />
      {PRATIK_YA_DA_KATALOG ? <PratikIsFormu eklendi={yukle} /> : <YeniPratikFormu eklendi={yukle} />}
      <FormHatasi hata={hata} />
      <section className="claude-isler" aria-labelledby="isler-baslik">
        <h3 id="isler-baslik">İşler{liste && liste.length > 0 ? <span className="soluk"> ({liste.length})</span> : null}</h3>
        {!liste ? <p className="empty">Yükleniyor…</p> : liste.length === 0 ? <p className="empty">Henüz iş yok. Yukarıya ilk isteğini yaz; ajan alınca adımları burada canlı izlersin.</p> : (
          <div className="claude-calisma">
            <ul className="claude-isleri">
              {liste.map((i) => (
                <li key={i.id} className={i.id === acik ? "secili" : undefined}>
                  <a href={href({ page: "yonetim", bolum: "claude", alt: i.id })} aria-current={i.id === acik ? "true" : undefined}>
                    <span className="is-ozet">{isBasligi(i)}</span>
                    <span className="is-meta">
                      <span className={`is-nokta is-nokta-${i.durum}`} aria-hidden="true" />
                      <strong className={`is-durum is-durum-${i.durum}${i.durum === "calisiyor" ? " parilti" : ""}`}>{IS_DURUMU[i.durum]}</strong>
                      <span className="soluk">{zaman(i.olusturuldu)}{i.olusturan ? `, ${i.olusturan}` : ""}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            {acik ? <IsGunlugu key={acik} id={acik} degisti={() => void yukle()} /> : <p className="empty is-gunlugu">Canlı günlüğünü görmek için bir iş seç.</p>}
          </div>
        )}
      </section>
    </div>
  );
}
