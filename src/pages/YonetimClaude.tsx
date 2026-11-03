// Yönetim > Claude: işi kuyruğa yazma, ajanın durumu ve işler. Pratik panelinde
// iş o pratiğe verilir; çatı panelinde (pratikler.) yeni pratik açılır.
// İşleri yöneticinin bilgisayarındaki yerel ajan yapar (ajan/pratikler-ajan.mjs).

import { useEffect, useState, type ComponentProps, type FormEvent } from "react";
import { api } from "../lib/api";
import { PRATIK_YA_DA_KATALOG } from "../lib/pratik";
import { FormHatasi } from "../components/Form";
import { CLAUDE_ISTEK_EN_UZUN, type AjanDurumu, type ClaudeIsi, type YeniPratikGirdi } from "../../shared/yonetim";

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
  if (!d) return <section className="ayar-bolum"><p className="empty">Ajan durumu yükleniyor…</p></section>;

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

  return (
    <section className="ayar-bolum ajan-karti">
      <h3>
        Yerel ajan:{" "}
        {!d.anahtarTanimli ? <span className="bad">kurulmamış</span> : acik ? <span className="ok">açık</span> : <span className="bad">kapalı</span>}
      </h3>
      {n && (
        <p className="hint">
          Son yoklama {gecen! < 90 ? `${gecen} sn` : `${Math.round(gecen! / 60)} dk`} önce, {n.makine} ({n.depo}).
          Claude: {n.claude ?? "bulunamadı"} · gh: {n.gh ?? "bulunamadı"} · Node {n.node} · {n.aralikSn} sn arayla yokluyor.
        </p>
      )}
      {!n && d.anahtarTanimli && <p className="hint">Ajan bu sunucuya hiç bağlanmadı.</p>}
      {acik ? (
        <button type="button" onClick={onTest}>Ajanı dene</button>
      ) : null}
      <p className="hint">
        {acik
          ? "\"Ajanı dene\" Claude'u çalıştırmadan ajanın makinesindeki claude, gh ve depo durumunu aşağıdaki işler listesine yazar."
          : "Ajan kapalıyken işler kuyrukta bekler. Açmak için:"}
        {acik && " "}
        {acik && <button type="button" className="baglanti-dugme" onClick={() => setAyrinti(!ayrinti)}>{ayrinti ? "Kurulumu gizle" : "Kurulumu göster"}</button>}
      </p>
      {(!acik || ayrinti) && (
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
    <section className="ayar-bolum">
      <h3>Claude ile yeni pratik aç</h3>
      <p className="hint">
        Kaynakları (.md'ye çevrilmiş ders notları, kitap bölümleri) bilgisayarında bir klasöre koy ve yolunu yaz. Ajan
        Claude'a o klasörü okutur; meta bilgisini, üniteleri, soruları, alan adı satırını ve migration'ları hazırlatıp
        denetimlerden geçerse PR açar. Birleştirip <code>npm run db:migrate:remote</code> ve <code>npm run deploy</code>
        çalıştırınca pratik yeni alt alan adında yayına çıkar.
      </p>
      <form onSubmit={gonder} className="yeni-pratik">
        {alan("ad", "Ad", { placeholder: "Devre Analizi", maxLength: 60 })}
        {alan("id", "Kimlik", { placeholder: "devre-analizi" })}
        {alan("alt", "Alt alan adı", { placeholder: "devreanalizi" })}
        {alan("onek", "Soru öneki", { placeholder: "da", maxLength: 4 })}
        {alan("alan", "Katalog alanı", { placeholder: "Mühendislik" })}
        {alan("kaynakKlasoru", "Kaynak klasörü", { placeholder: "~/Belgeler/dersler/devre-analizi" })}
        <label className="form-alani tam">
          <span>Notlar (isteğe bağlı)</span>
          <textarea rows={3} maxLength={2000} value={g.notlar} onChange={(e) => setG({ ...g, notlar: e.target.value })}
            placeholder="Örnek: haftalar ünite olsun; 1-4. hafta notları var; formüller LaTeX ile yazılsın." />
        </label>
        {g.alt && <p className="hint tam">Adres: {g.alt}.selcukdinc.dev · konu kimlikleri {g.onek || "?"}-u1, {g.onek || "?"}-u2…</p>}
        <div className="tam"><button type="submit" className="primary" disabled={mesgul || !g.ad.trim()}>Pratiği kuyruğa ekle</button></div>
      </form>
      <FormHatasi hata={hata} />
    </section>
  );
}

function PratikIsFormu({ eklendi }: { eklendi: () => void }) {
  const [istek, setIstek] = useState("");
  const [hata, setHata] = useState<string | null>(null);
  const [mesgul, setMesgul] = useState(false);
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
    <section className="ayar-bolum">
      <h3>{PRATIK_YA_DA_KATALOG!.ad} için Claude'a iş ver</h3>
      <p className="hint">
        Ajan işi alır, Claude Code ile depoda değişikliği yapar, yerel denetimlerden (tsc, testler, build) geçerse bir PR
        açar. Birleştirmek ve yayına almak sende.
      </p>
      <form onSubmit={gonder}>
        <textarea rows={4} maxLength={CLAUDE_ISTEK_EN_UZUN} value={istek} onChange={(e) => setIstek(e.target.value)}
          placeholder="Örnek: 3. üniteye Wheatstone köprüsü çıkış gerilimi hesabıyla ilgili iki soru ekle." />
        <button type="submit" className="primary" disabled={mesgul || istek.trim().length < 10}>İşi kuyruğa ekle</button>
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
      return `Yeni pratik: ${g.ad} (${g.alt}.selcukdinc.dev) · kaynak ${g.kaynakKlasoru}`;
    } catch {
      return "Yeni pratik";
    }
  }
  return i.istek;
}

export function ClaudeIsleri() {
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

  return (
    <div className="panel-genel">
      <AjanKarti onTest={test} />
      {PRATIK_YA_DA_KATALOG ? <PratikIsFormu eklendi={yukle} /> : <YeniPratikFormu eklendi={yukle} />}
      <FormHatasi hata={hata} />
      <section className="ayar-bolum">
        <h3>İşler</h3>
        {!liste ? <p className="empty">Yükleniyor…</p> : liste.length === 0 ? <p className="empty">Henüz iş yok.</p> : (
          <ul className="claude-isleri">
            {liste.map((i) => (
              <li key={i.id}>
                <div><strong>{IS_DURUMU[i.durum]}</strong> · {zaman(i.olusturuldu)}{i.olusturan ? ` · ${i.olusturan}` : ""}</div>
                <p>{isBasligi(i)}</p>
                {i.prUrl && <a href={i.prUrl} target="_blank" rel="noreferrer">{i.prUrl.replace("https://github.com/", "")}</a>}
                {i.sonuc && (i.tur === "test" ? <pre className="code">{i.sonuc}</pre> : <details><summary>Ajanın notu</summary><pre className="code">{i.sonuc}</pre></details>)}
                {i.durum === "bekliyor" && <button onClick={() => api.yonetim.claudeIptal(i.id).then(() => yukle())}>İptal et</button>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
