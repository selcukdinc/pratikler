// Mesajlaşma simülatörü: "Kendi mesajlaşma uygulamanı tasarla". Solda tasarım ayarları,
// ortada Ayşe ile Mert'in yazışması, sağda seçilen saldırganın her mesajdan gördüğü, altta
// anahtar ele geçirme zaman çizelgesi. Kurallar src/kripto/mesajlasma/model.ts'te, ekrandaki
// şifreli baytlar ve anahtarlar Web Crypto ile gerçekten üretilir (gercek.ts). Sunucuya hiç
// istek atılmaz; tasarım adres çubuğundaki #tasarim= parçasıyla paylaşılır.
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Rozet } from "../kripto/Rozet";
import { metindenBayt } from "../kripto/bayt";
import {
  CALINAN_ADI,
  DUZEY_ADI,
  gorunum,
  ORNEK_YAZISMA,
  ROLLER,
  tasarimOku,
  tasarimYaz,
  VARSAYILAN,
  zamanCizelgesi,
  type CalinanAnahtar,
  type Duzey,
  type Mesaj,
  type Rol,
  type Tasarim,
} from "../kripto/mesajlasma/model";
import { gercekOturum, type GercekOturum } from "../kripto/mesajlasma/gercek";
import "./mesajlasma.css";

const AD = { ayse: "Ayşe", mert: "Mert" } as const;
const ADIN = { ayse: "Ayşe'nin", mert: "Mert'in" } as const;
const kisa = (s: string | undefined, n = 12) => (!s ? "" : s.length > n * 2 ? `${s.slice(0, n)}…${s.slice(-6)}` : s);
const gunYazi = (g: number) => (g === 0 ? "bugün" : `${g} gün önce`);

function Cipler<T extends string>({ ad, secenekler, deger, degis }: { ad: string; secenekler: [T, string][]; deger: T; degis: (v: T) => void }) {
  return (
    <div className="ms-cipler" role="group" aria-label={ad}>
      {secenekler.map(([v, y]) => (
        <button key={v} type="button" className="cip" aria-pressed={deger === v} onClick={() => degis(v)}>
          {y}
        </button>
      ))}
    </div>
  );
}

function Alan({ baslik, children, not }: { baslik: string; children: ReactNode; not?: string }) {
  return (
    <fieldset className="ms-alan">
      <legend>{baslik}</legend>
      {children}
      {not && <p className="ms-not">{not}</p>}
    </fieldset>
  );
}

function hashtenTasarim(): Tasarim {
  const m = /tasarim=([^&]+)/.exec(location.hash);
  return (m && tasarimOku(decodeURIComponent(m[1]!))) || VARSAYILAN;
}

type Sekme = "tasarim" | "sohbet" | "saldirgan";

export function Mesajlasma() {
  const [tasarim, setTasarim] = useState<Tasarim>(hashtenTasarim);
  const [rol, setRol] = useState<Rol>("sunucu");
  const [mesajlar, setMesajlar] = useState<Mesaj[]>(ORNEK_YAZISMA);
  const [secili, setSecili] = useState(20);
  const [gercek, setGercek] = useState<GercekOturum | null>(null);
  const [calinma, setCalinma] = useState(10);
  const [anahtar, setAnahtar] = useState<CalinanAnahtar>("durum");
  const [sekme, setSekme] = useState<Sekme>("tasarim");
  const [yeni, setYeni] = useState("");
  const [yazan, setYazan] = useState<"ayse" | "mert">("ayse");
  const [kopyalandi, setKopyalandi] = useState(false);
  const sohbetRef = useRef<HTMLOListElement>(null);
  // Açılışta sohbetin sonu görünsün
  useEffect(() => {
    const el = sohbetRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [mesajlar.length]);
  const ayarla = <K extends keyof Tasarim>(k: K, v: Tasarim[K]) => setTasarim((t) => ({ ...t, [k]: v }));

  useEffect(() => {
    history.replaceState(null, "", `${location.pathname}${location.search}#tasarim=${tasarimYaz(tasarim)}`);
  }, [tasarim]);
  useEffect(() => {
    let iptal = false;
    setGercek(null);
    gercekOturum(tasarim.koruma, mesajlar).then((o) => !iptal && setGercek(o));
    return () => {
      iptal = true;
    };
  }, [tasarim.koruma, mesajlar]);

  const gorunumler = useMemo(() => mesajlar.map((m) => gorunum(tasarim, rol, m)), [tasarim, rol, mesajlar]);
  const k = Math.min(calinma, mesajlar.length - 1);
  const cizelge = useMemo(() => zamanCizelgesi(tasarim, mesajlar, k, anahtar), [tasarim, mesajlar, k, anahtar]);
  const sayilar = gorunumler.reduce<Record<Duzey, number>>((a, g) => ({ ...a, [g.duzey]: a[g.duzey] + 1 }), { metin: 0, bayt: 0, metadata: 0, hicbiri: 0 });
  const sm = mesajlar[secili] ?? mesajlar[0]!;
  const sg = gorunumler[secili] ?? gorunumler[0]!;
  const sr = gercek?.mesajlar[secili];
  const e2ee = tasarim.koruma.startsWith("e2ee");

  const gonder = () => {
    const metin = yeni.trim();
    if (!metin) return;
    setMesajlar((l) => [...l, { no: l.length, gonderen: yazan, metin, gun: 0 }]);
    setSecili(mesajlar.length);
    setYeni("");
  };
  const kopyala = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      setKopyalandi(true);
      setTimeout(() => setKopyalandi(false), 2000);
    } catch {
      // pano izni yoksa adres çubuğundaki bağlantı yeterli
    }
  };

  const gorulen = (m: Mesaj, i: number) => {
    const g = gorunumler[i]!;
    const boy = metindenBayt(m.metin).length + 16;
    const meta = g.meta.map((x) => (x === "gönderen" ? AD[m.gonderen] : x === "alıcı" ? `→ ${AD[m.gonderen === "ayse" ? "mert" : "ayse"]}` : x === "zaman" ? gunYazi(m.gun) : `${boy} bayt`)).join(" · ");
    if (g.duzey === "metin") return m.metin;
    if (g.duzey === "bayt") return `${kisa(gercek?.mesajlar[i]?.bayt, 10) || "…"}${meta ? `  (${meta})` : ""}`;
    if (g.duzey === "metadata") return meta;
    return "—";
  };

  const tasarimPaneli = (
    <section className="ms-panel" aria-label="Tasarım">
      <h3>Tasarım</h3>
      <Alan baslik="Koruma katmanı">
        <Cipler
          ad="Koruma katmanı"
          secenekler={[["yok", "Şifreleme yok"], ["tls", "Yalnız TLS"], ["e2ee-sabit", "Uçtan uca, sabit anahtar"], ["e2ee-ratchet", "Uçtan uca, Double Ratchet"]]}
          deger={tasarim.koruma}
          degis={(v) => ayarla("koruma", v)}
        />
      </Alan>
      <Alan baslik="Özel anahtarlar nerede" not={e2ee ? undefined : "Yalnız uçtan uca şifrelemede anlamlı."}>
        <Cipler ad="Anahtarlar nerede" secenekler={[["cihaz", "Yalnız cihazda"], ["sunucu", "Sunucuda"], ["ikisi", "Cihazda + sunucuda emanet"]]} deger={tasarim.anahtarYeri} degis={(v) => ayarla("anahtarYeri", v)} />
      </Alan>
      <Alan baslik="Bulut yedeği">
        <Cipler
          ad="Bulut yedeği"
          secenekler={[["kapali", "Kapalı"], ["sifresiz", "Açık, şifresiz"], ["saglayici", "Açık, sağlayıcının anahtarıyla"], ["parola", "Açık, kullanıcının parolasıyla"]]}
          deger={tasarim.yedek}
          degis={(v) => ayarla("yedek", v)}
        />
      </Alan>
      <Alan baslik="Metadata">
        <Cipler ad="Metadata" secenekler={[["yok", "Gizleme yok"], ["gizli-gonderen", "Gizli gönderen"]]} deger={tasarim.metadata} degis={(v) => ayarla("metadata", v)} />
      </Alan>
      <Alan baslik="Ek">
        <label className="ms-kutucuk">
          <input type="checkbox" checked={tasarim.dogrulandi} onChange={(e) => ayarla("dogrulandi", e.target.checked)} /> Güvenlik numarası karşılaştırıldı
        </label>
        <label className="ms-kutucuk">
          <input type="checkbox" checked={tasarim.ekranKilidi} onChange={(e) => ayarla("ekranKilidi", e.target.checked)} /> Telefonda ekran kilidi var
        </label>
        <label className="ms-kutucuk">
          Kaybolan mesajlar{" "}
          <select value={tasarim.kaybolan ?? ""} onChange={(e) => ayarla("kaybolan", e.target.value === "" ? null : Number(e.target.value))}>
            <option value="">Kapalı</option>
            <option value="1">1 gün</option>
            <option value="7">7 gün</option>
            <option value="14">14 gün</option>
          </select>
        </label>
      </Alan>
      <div className="ms-satir">
        <button type="button" className="cip" onClick={kopyala}>
          {kopyalandi ? "Kopyalandı" : "Tasarımın bağlantısını kopyala"}
        </button>
        <button type="button" className="cip" onClick={() => setTasarim(VARSAYILAN)}>
          Baştan başla
        </button>
      </div>
    </section>
  );

  const sohbetPaneli = (
    <section className="ms-panel" aria-label="Sohbet">
      <h3>Sohbet</h3>
      <ol className="ms-sohbet" ref={sohbetRef}>
        {mesajlar.map((m, i) => (
          <li key={m.no} className={`ms-balon ms-${m.gonderen} ${i === secili ? "ms-secili" : ""} ${tasarim.kaybolan !== null && m.gun > tasarim.kaybolan ? "ms-silinmis" : ""}`}>
            <button type="button" onClick={() => setSecili(i)} aria-label={`${AD[m.gonderen]}, ${gunYazi(m.gun)}: ${m.metin}. Saldırgan: ${DUZEY_ADI[gorunumler[i]!.duzey]}`}>
              <span className="ms-balon-ust">
                {AD[m.gonderen]} · {gunYazi(m.gun)}
                <span className={`ms-nokta ms-d-${gorunumler[i]!.duzey}`} aria-hidden="true" />
              </span>
              <span>{m.metin}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="ms-yaz">
        <select value={yazan} onChange={(e) => setYazan(e.target.value as "ayse" | "mert")} aria-label="Gönderen">
          <option value="ayse">Ayşe</option>
          <option value="mert">Mert</option>
        </select>
        <input type="text" value={yeni} placeholder="Mesaj yaz" onChange={(e) => setYeni(e.target.value)} onKeyDown={(e) => e.key === "Enter" && gonder()} aria-label="Yeni mesaj" />
        <button type="button" className="cip" onClick={gonder}>
          Gönder
        </button>
      </div>
    </section>
  );

  const saldirganPaneli = (
    <section className="ms-panel" aria-label="Saldırgan gözü">
      <h3>Saldırgan gözü</h3>
      <select value={rol} onChange={(e) => setRol(e.target.value as Rol)} aria-label="Saldırgan rolü" className="ms-rol">
        {ROLLER.map((r) => (
          <option key={r.id} value={r.id}>
            {r.ad}
          </option>
        ))}
      </select>
      <p className="ms-not">{ROLLER.find((r) => r.id === rol)!.aciklama}</p>
      <div className="ms-ozet">
        {(Object.keys(sayilar) as Duzey[]).map((d) => (
          <span key={d} className={`ms-etiket ms-d-${d}`}>
            {DUZEY_ADI[d]}: {sayilar[d]}
          </span>
        ))}
      </div>
      <div className={`ms-neden ms-d-${sg.duzey}`}>
        <strong>
          {secili + 1}. mesaj: {DUZEY_ADI[sg.duzey]}
          {sg.aktif ? " (etkin saldırıyla)" : ""}
        </strong>
        <span>Neden? {sg.neden}</span>
        {sg.nasil && <span>Nasıl kapatılır? {sg.nasil}</span>}
      </div>
      <ol className="ms-gorulen">
        {mesajlar.map((m, i) => (
          <li key={m.no} className={i === secili ? "ms-secili" : ""}>
            <button type="button" onClick={() => setSecili(i)}>
              <span className={`ms-nokta ms-d-${gorunumler[i]!.duzey}`} aria-hidden="true" />
              <span className={gorunumler[i]!.duzey === "bayt" ? "ms-mono" : ""}>{gorulen(m, i)}</span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );

  return (
    <div className="ms">
      <div className="ms-ust">
        <p>
          Ayarları değiştir, saldırgan rolünü seç ve her mesajdan ne gördüğüne bak. Bu bir öğretim modelidir; gerçek uygulamaları sadeleştirir.
        </p>
        <Rozet tur="webcrypto" />
      </div>
      <div className="ms-sekmeler">
        <Cipler ad="Bölüm" secenekler={[["tasarim", "Tasarım"], ["sohbet", "Sohbet"], ["saldirgan", "Saldırgan gözü"]]} deger={sekme} degis={setSekme} />
      </div>
      <div className="ms-izgara" data-sekme={sekme}>
        <div className="ms-sutun ms-s-tasarim">{tasarimPaneli}</div>
        <div className="ms-sutun ms-s-sohbet">{sohbetPaneli}</div>
        <div className="ms-sutun ms-s-saldirgan">{saldirganPaneli}</div>
      </div>

      <section className="ms-panel" aria-label="Gerçek değerler">
        <h3>
          {secili + 1}. mesajın gerçek değerleri <span className="ms-not">({gercek?.tur ?? (tasarim.koruma === "yok" ? "şifresiz" : tasarim.koruma === "tls" ? "TLS oturumu" : "…")})</span>
        </h3>
        {sr ? (
          <dl className="ms-degerler">
            <dt>{tasarim.koruma === "yok" ? "Ağdaki bayt (açık metin)" : "Şifreli bayt (AES-GCM)"}</dt>
            <dd>{kisa(sr.bayt, 24)}</dd>
            {sr.mesajAnahtari && (
              <>
                <dt>{tasarim.koruma === "tls" ? "TLS anahtarı (sunucu da bilir)" : tasarim.koruma === "e2ee-sabit" ? "Ortak anahtar (her mesajda aynı)" : "Mesaj anahtarı"}</dt>
                <dd>{sr.mesajAnahtari}</dd>
              </>
            )}
            {sr.zincirAnahtari && (
              <>
                <dt>Zincir anahtarı</dt>
                <dd>{sr.zincirAnahtari}</dd>
                <dt>Kök anahtar</dt>
                <dd>{sr.kokAnahtari}</dd>
              </>
            )}
            {sr.dhAcik && (
              <>
                <dt>Cırcır döndü: {ADIN[sm.gonderen]} yeni DH açık anahtarı</dt>
                <dd>{sr.dhAcik}</dd>
              </>
            )}
          </dl>
        ) : (
          <p className="ms-not">Hesaplanıyor…</p>
        )}
        {tasarim.koruma === "e2ee-ratchet" && <p className="ms-not">Mesajları sırayla seç: aynı turdaki her mesajda zincir anahtarı ilerler, karşı taraf yanıt verince yeni bir DH adımıyla kök anahtar da değişir. Double Ratchet sadeleştirilmiştir.</p>}
      </section>

      <section className="ms-panel" aria-label="Anahtar ele geçirme zaman çizelgesi">
        <h3>Anahtar ele geçirme zaman çizelgesi</h3>
        <p className="ms-not">Saldırgan şifreli trafiğin hepsini kaydetti. Seçilen mesajı gönderen cihazdan bir anahtar çalınırsa hangi mesajları okuyabilir?</p>
        <div className="ms-satir">
          <label>
            Çalındığı mesaj{" "}
            <input type="range" min={0} max={mesajlar.length - 1} value={k} onChange={(e) => setCalinma(Number(e.target.value))} /> {k + 1} ({AD[mesajlar[k]!.gonderen]})
          </label>
          <select value={anahtar} onChange={(e) => setAnahtar(e.target.value as CalinanAnahtar)} aria-label="Çalınan anahtar">
            {(Object.keys(CALINAN_ADI) as CalinanAnahtar[]).map((a) => (
              <option key={a} value={a}>
                {CALINAN_ADI[a]}
              </option>
            ))}
          </select>
        </div>
        <ol className="ms-cizelge">
          {mesajlar.map((m, i) => (
            <li key={m.no}>
              <button
                type="button"
                className={`${cizelge[i]!.acik ? "ms-acik" : "ms-guvende"} ${i === k ? "ms-calinan" : ""} ${i === secili ? "ms-secili" : ""}`}
                onClick={() => setSecili(i)}
                title={cizelge[i]!.neden}
                aria-label={`${i + 1}. mesaj, ${AD[m.gonderen]}: ${cizelge[i]!.acik ? "saldırgan okur" : "güvende"}`}
              >
                {m.gonderen === "ayse" ? "A" : "M"}
              </button>
            </li>
          ))}
        </ol>
        <p className={`ms-neden ${cizelge[secili]?.acik ? "ms-d-metin" : "ms-d-bayt"}`}>
          <strong>{secili + 1}. mesaj: {cizelge[secili]?.acik ? "saldırgan okur" : "güvende"}</strong>
          <span>{cizelge[secili]?.neden}</span>
        </p>
        <p className="ms-not">
          Kırmızı: saldırgan okur. Yeşil: güvende. Çerçeveli kutu anahtarın çalındığı an. Double Ratchet'te geçmişin yeşil kalması ileri gizlilik, birkaç mesaj sonra yeniden yeşile dönmesi ele geçirme sonrası güvenliktir.
        </p>
      </section>
    </div>
  );
}
