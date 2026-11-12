// Ü14 etkileşimli şekilleri: hızlandırılmış saatli sızıntı tatbikatı (bot radarı,
// zarar sayacı, müdahale sırası ve rapor) ve anahtar avı. Ekrandaki anahtar biçimli
// değerler parçalardan birleştirilir; depoda gerçek biçimli değer durmaz.
import { useEffect, useState } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";

type Ozellik = { g: Gorsel };

const ANAHTAR = ["kp", "live", "Q7mZ2xR9tLw4Hc8Ny3Vb6Kd1"].join("_");
const maske = (s: string) => `${s.slice(0, 8)}••••${s.slice(-4)}`;

// ---------------- G-H14-01: sızıntı tatbikatı ----------------

type Eylem = "iptal" | "kayit" | "temizle" | "haber" | "onlem" | "sil" | "gizle";

const EYLEMLER: { id: Eylem; ad: string }[] = [
  { id: "sil", ad: "Dosyayı silip yeni commit at" },
  { id: "gizle", ad: "Depoyu private yap" },
  { id: "iptal", ad: "Anahtarı iptal et, yenisini üret" },
  { id: "kayit", ad: "Erişim kayıtlarını incele" },
  { id: "temizle", ad: "Geçmişi temizle, force push" },
  { id: "haber", ad: "Ekibe haber ver" },
  { id: "onlem", ad: "Önleme kur (.gitignore, push protection)" },
];
const DOGRU: Eylem[] = ["iptal", "kayit", "temizle", "haber", "onlem"];

// Sanal saniye: gerçek 0,5 saniyede 10 sanal saniye geçer, her eylem 60 sanal saniye sürer
const ADIM = 10;
const EYLEM_SURESI = 60;
const CEKIM = 2400;

function saat(t: number) {
  const s = Math.floor(t);
  return `${String(Math.floor(s / 3600)).padStart(2, "0")}:${String(Math.floor(s / 60) % 60).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

// t anına kadar (anahtar iptal edilmediyse) radarın gördükleri
function olaylar(t: number, iptal: number | null): { t: number; metin: string; kotu?: boolean }[] {
  const son = iptal ?? t;
  const l: { t: number; metin: string; kotu?: boolean }[] = [{ t: 0, metin: "Push GitHub'a ulaştı: .env dosyası public depoda." }];
  if (son >= 41) l.push({ t: 41, metin: "Bir bot herkese açık olay akışında push'u gördü, .env'de KafePay anahtarı buldu.", kotu: true });
  if (son >= 90) l.push({ t: 90, metin: "Anahtar denendi: GET /v1/balance → 200, anahtar geçerli.", kotu: true });
  for (let c = 180; c <= son; c += 60) l.push({ t: c, metin: `POST /v1/payouts → 200: ${CEKIM.toLocaleString("tr-TR")} TL yabancı bir hesaba aktarıldı.`, kotu: true });
  if (iptal !== null) l.push({ t: iptal, metin: "Anahtar iptal edildi: bundan sonraki istekler 401 ile reddediliyor." });
  return l.filter((x) => x.t <= t);
}

const zarar = (t: number, iptal: number | null) => {
  const son = iptal ?? t;
  return son < 180 ? 0 : (Math.floor((son - 180) / 60) + 1) * CEKIM;
};

const GERI_BILDIRIM: Record<Eylem, (iptalEdildi: boolean) => string> = {
  sil: () => "Dosya son commit'ten gitti ama anahtar önceki commit'te duruyor; bot geçmişi de okuyor. Zarar sürüyor.",
  gizle: (i) => (i ? "Depo private oldu; yeni ziyaretçi göremez. Ama alınmış kopyalar geri gelmez." : "Depo private oldu ama anahtar çoktan kopyalandı; bot elindeki kopyayla para çekmeye devam ediyor."),
  iptal: () => "Anahtar iptal edildi, yenisi .env'e yazıldı. Botun elindeki kopya artık işe yaramıyor: kanama durdu.",
  kayit: (i) => (i ? "Kayıtlar: sızıntıdan sonra iki yabancı IP, bir bakiye sorgusu ve para çekme istekleri. Hangi işlemlerin etkilendiği belli." : "Kayıtlara bakarken anahtar hâlâ geçerli ve kullanılıyor. Önce kanamayı durdur."),
  temizle: (i) => (i ? "Geçmiş yeniden yazıldı, anahtar GitHub'daki dallardan çıktı. Değer artık geçersiz olsa da yeni kopyalar önlendi." : "Geçmiş temiz ama anahtar hâlâ geçerli: kopyası botun elinde, çekimler sürüyor."),
  haber: (i) => (i ? "Ekip bilgilendirildi: yeni anahtar sunuculara ve CI'a dağıtılacak, eski anahtarı kullanan servisler güncellenecek." : "Ekibe haber verdin; ama anahtar hâlâ geçerli ve kullanılıyor."),
  onlem: () => ".env .gitignore'da, depoda push protection açık. Aynı hata bir daha kapıdan geçemez.",
};

export function SizintiTatbikati(_: Ozellik) {
  const [koruma, setKoruma] = useState(false);
  const [t, setT] = useState<number | null>(null);
  const [iptal, setIptal] = useState<number | null>(null);
  const [yapilan, setYapilan] = useState<Eylem[]>([]);
  const [son, setSon] = useState<string | null>(null);
  const [red, setRed] = useState(false);
  const bitti = DOGRU.every((e) => yapilan.includes(e));
  const calisiyor = t !== null && !bitti;

  useEffect(() => {
    if (!calisiyor) return;
    const z = setInterval(() => setT((x) => (x === null ? x : x + ADIM)), 500);
    return () => clearInterval(z);
  }, [calisiyor]);

  const basla = () => {
    setYapilan([]);
    setIptal(null);
    setSon(null);
    if (koruma) {
      setT(null);
      setRed(true);
      return;
    }
    setRed(false);
    setT(0);
  };
  const yap = (e: Eylem) => {
    if (t === null || bitti) return;
    const yeniT = t + EYLEM_SURESI;
    const iptalEdildi = iptal !== null || e === "iptal";
    if (e === "iptal" && iptal === null) setIptal(t + 30);
    setT(yeniT);
    setYapilan((y) => (y.includes(e) ? y : [...y, e]));
    setSon(GERI_BILDIRIM[e](iptalEdildi));
  };

  const radar = t === null ? [] : olaylar(t, iptal);
  const tl = t === null ? 0 : zarar(t, iptal);
  // Rapor: doğru sıradan sapmalar
  const dogruSira = yapilan.filter((e) => DOGRU.includes(e));
  const sapmalar: string[] = [];
  if (dogruSira[0] && dogruSira[0] !== "iptal") sapmalar.push("İlk iş anahtarı iptal etmek olmalıydı; ondan önceki her adım zararı büyüttü.");
  if (yapilan.includes("sil")) sapmalar.push("Dosyayı silmek geçmişteki kopyaya dokunmadı.");
  if (yapilan.includes("gizle")) sapmalar.push("Depoyu gizlemek alınmış kopyaları geri getirmedi.");
  const iTemizle = yapilan.indexOf("temizle");
  const iIptal = yapilan.indexOf("iptal");
  if (iTemizle >= 0 && iTemizle < iIptal) sapmalar.push("Geçmişi anahtarı iptal etmeden temizledin; anahtar o sırada hâlâ geçerliydi.");

  return (
    <div className="ge">
      <div className="ge-satir">
        <label><input type="checkbox" checked={koruma} onChange={(e) => { setKoruma(e.target.checked); setT(null); setRed(false); setSon(null); }} /> Depoda push protection açık</label>
        <button type="button" className="primary" disabled={calisiyor} onClick={basla}>git push</button>
      </div>
      <pre className="ge-dosya" aria-label="Push edilen .env">
        <span className="ge-yaml-ad">.env (Kafe Mavi ödeme modülü, public depo)</span>
        <span>KAFEPAY_KEY={red || t === null ? ANAHTAR : maske(ANAHTAR)}</span>
      </pre>
      {red && (
        <p className="ge-sonuc ge-iyi" aria-live="polite">
          <code>remote: error: GH013: Repository rule violations found for refs/heads/main.</code> Push protection anahtarı tanıdı, push reddedildi. Anahtar GitHub'a hiç ulaşmadı: iptal etmen gerekmiyor. Değeri koddan çıkar, <code>.env</code>'i <code>.gitignore</code>'a ekle, commit'i düzelt ve yeniden push et.
        </p>
      )}
      {t !== null && (
        <>
          <div className="ge-radar">
            <div className="ge-radar-ust">
              <strong>Bot radarı</strong>
              <span className="mono">{saat(t)}</span>
              <span className={tl ? "ge-hayir" : undefined}>Zarar: {tl.toLocaleString("tr-TR")} TL</span>
            </div>
            <ol>
              {radar.map((o, i) => (
                <li key={i} className={o.kotu ? "ge-hayir" : "ge-evet"}><span className="mono">{saat(o.t)}</span> {o.metin}</li>
              ))}
            </ol>
          </div>
          {!bitti && <p className="ge-not">Müdahaleyi sen sırala. Her adım bir dakika sürer; saat işlemeye devam ediyor.</p>}
          <div className="ge-satir">
            {EYLEMLER.map((e) => (
              <button key={e.id} type="button" className="cip" aria-pressed={yapilan.includes(e.id)} disabled={bitti} onClick={() => yap(e.id)}>
                {yapilan.includes(e.id) ? `${yapilan.indexOf(e.id) + 1}. ` : ""}{e.ad}
              </button>
            ))}
          </div>
          {son && !bitti && <p className="ge-sonuc" aria-live="polite">{son}</p>}
          {bitti && (
            <div className={`ge-sonuc ${sapmalar.length ? "ge-kotu" : "ge-iyi"}`} aria-live="polite">
              <strong>Rapor.</strong> Anahtarı sızıntıdan {saat(iptal ?? 0)} sonra iptal ettin; toplam zarar {tl.toLocaleString("tr-TR")} TL.{" "}
              {sapmalar.length ? sapmalar.join(" ") : "Sıra doğruydu: önce iptal, sonra kayıtlar, temizlik, haber ve önleme."}{" "}
              Şimdi kutuyu işaretleyip aynı push'u push protection açıkken dene.
            </div>
          )}
        </>
      )}
      {t === null && !red && (
        <p className="ge-sonuc">Anahtarlı <code>.env</code>'i public depoya göndermek üzeresin. Saat push'la birlikte başlar: botların ne kadar hızlı olduğunu gör ve müdahaleyi sırala.</p>
      )}
    </div>
  );
}

// ---------------- G-H14-02: anahtar avı ----------------

const GH = ["ghp", "R4nd0mL00k1ngT0k3nF0rD3m0nstr4t10n1"].join("_");
const OZEL = ["-----BEGIN OPENSSH", "PRIVATE KEY-----"].join(" ");

const AV: { dosya: string; metin: string; sizinti: boolean; neden: string }[] = [
  { dosya: ".env (commit'lenmiş)", metin: "DB_HOST=localhost\nDB_PASSWORD=KafeMavi2026!", sizinti: true, neden: "Parola düz metin olarak depoda. .env .gitignore'da olmalıydı." },
  { dosya: ".env.example", metin: "DB_HOST=localhost\nDB_PASSWORD=\nKAFEPAY_KEY=", sizinti: false, neden: "Yalnızca değişken adları var, değerler boş. Depoya girmesi için yazılmış bir dosya." },
  { dosya: "src/github.js", metin: `const token = "${GH}";\nfetch(url, { headers: { Authorization: \`Bearer \${token}\` } });`, sizinti: true, neden: "ghp_ ile başlayan bir GitHub token'ı koda gömülü. Botların ilk aradığı biçimlerden." },
  { dosya: "src/odeme.js", metin: "const anahtar = process.env.KAFEPAY_KEY;\nif (!anahtar) throw new Error(\"KAFEPAY_KEY yok\");", sizinti: false, neden: "Değer koddan değil ortam değişkeninden okunuyor." },
  { dosya: "git show a41c9e2", metin: "-DB_PASSWORD=KafeMavi2026!\n+DB_PASSWORD=", sizinti: true, neden: "Bu commit parolayı siliyor, ama silinen satır bir önceki commit'te duruyor; geçmişte görünür." },
  { dosya: "docker-compose.yml", metin: "services:\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_PASSWORD: uretim-parola-2026", sizinti: true, neden: "Üretim parolası compose dosyasına yazılmış; dosya depoda." },
  { dosya: "docker-compose.yml", metin: "services:\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}", sizinti: false, neden: "Değer ortamdan geliyor; dosyada yalnızca değişkenin adı var." },
  { dosya: "analiz.ipynb (çıktı hücresi)", metin: `In [3]: print(ayarlar)\nOut[3]: {'kafepay': '${ANAHTAR}'}`, sizinti: true, neden: "Defter çıktıları da dosyada saklanır. Kod hücresi silinse bile çıktı duruyor." },
  { dosya: "Actions günlüğü", metin: "Run ./yayinla.sh\n  KAFEPAY_KEY: ***\nYayın tamam.", sizinti: false, neden: "GitHub depo secret'larını günlükte *** ile maskeler. Yine de değeri bilerek günlüğe basma; dönüştürülmüş değer maskelenmez." },
  { dosya: ".env.production (Vite)", metin: `VITE_API_URL=https://api.kafemavi.example\nVITE_KAFEPAY_SECRET=${ANAHTAR}`, sizinti: true, neden: "VITE_ önekli her değer tarayıcıya giden pakete girer. Gizli anahtar ön yüzde olmaz." },
  { dosya: ".env.production (Vite)", metin: "VITE_API_URL=https://api.kafemavi.example", sizinti: false, neden: "Herkese açık bir adres; tarayıcının bilmesi gereken, gizli olmayan bir değer." },
  { dosya: "~/.ssh/id_ed25519 (depoya kopyalanmış)", metin: `${OZEL}\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQ...`, sizinti: true, neden: "Özel SSH anahtarı. Sahibinin sunuculara ve GitHub'a erişimi demek; yalnızca .pub uzantılı açık anahtar paylaşılır." },
];

export function AnahtarAvi(_: Ozellik) {
  const [cevap, setCevap] = useState<Record<number, boolean>>({});
  const verilen = Object.keys(cevap).length;
  const dogru = Object.entries(cevap).filter(([i, c]) => AV[Number(i)]!.sizinti === c).length;
  return (
    <div className="ge">
      <p className="ge-not">Her parça bir depodan. Sızıntı mı, güvenli mi?</p>
      <ul className="ge-av">
        {AV.map((x, i) => {
          const c = cevap[i];
          const verildi = c !== undefined;
          return (
            <li key={i} className={verildi ? (c === x.sizinti ? "ge-evet" : "ge-hayir") : undefined}>
              <span className="ge-av-dosya">{x.dosya}</span>
              <pre className="ge-dosya">{x.metin}</pre>
              <div className="ge-oyun-dugmeler">
                <button type="button" className="cip" disabled={verildi} aria-pressed={c === true} onClick={() => setCevap({ ...cevap, [i]: true })}>Sızıntı</button>
                <button type="button" className="cip" disabled={verildi} aria-pressed={c === false} onClick={() => setCevap({ ...cevap, [i]: false })}>Güvenli</button>
              </div>
              {verildi && <span className="ge-oyun-neden">{c === x.sizinti ? "✓ " : "✗ "}{x.sizinti ? "Sızıntı. " : "Güvenli. "}{x.neden}</span>}
            </li>
          );
        })}
      </ul>
      <p className={`ge-sonuc${verilen === AV.length ? (dogru >= 10 ? " ge-iyi" : " ge-kotu") : ""}`} aria-live="polite">
        {verilen < AV.length ? `${verilen}/${AV.length} parça, ${dogru} doğru.` : `${AV.length} parçada ${dogru} doğru.${dogru >= 10 ? " Gözün keskin." : " Kaçırdıklarının açıklamalarını oku; botlar bunları kaçırmıyor."}`}
        {verilen > 0 && <button type="button" className="cip ge-yeniden" onClick={() => setCevap({})}>Baştan</button>}
      </p>
    </div>
  );
}
