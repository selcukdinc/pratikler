// Backlog Atölyesi (Backlog pratiği, /backlog/atolye): Sprint başlamadan önceki iş. Nurten
// Hanım'ın isteğinden epic, feature ve story ağacı kurulur; story'ler yazılır, kabul
// kriterleri eklenir, sanal takımla Planning Poker oynanır, backlog kurgusal Teknik
// Liderlik'in onayına gönderilir. Motor src/backlog/motor.ts; senaryo ve görevler pratiğin
// istemci içeriğinden (icerik/backlog/istemci/atolye) sayfa açılınca yüklenir. Çalışma ve
// tamamlanan görevler yalnızca bu tarayıcıda saklanır; sunucuya hiç istek atılmaz.
import { useEffect, useState, type ReactNode } from "react";
import {
  altlar,
  baslat,
  dikeyMi,
  invest,
  karne,
  KATMAN_ADI,
  KATMANLAR,
  ogeBul,
  oneriHamleleri,
  oyna,
  poker,
  PUANLAR,
  SPRINT_SINIRI,
  storyler,
  wsjf,
  type Backlog,
  type Hamle,
  type Katman,
  type Kriter,
  type Oge,
  type Senaryo,
  type Tur,
} from "../backlog/motor";
import { gherkinDenetle, storyDenetle } from "../backlog/kurallar";
import { tamamlananlariOku, tamamlananlariYaz, type AtolyeGorevi, type AtolyeIcerigi } from "../backlog/gorev";
import "./sprint.css";
import "./atolye.css";

const KAYIT = "backlog:atolye";
const TUR_ADI: Record<Tur, string> = { epic: "Epic", feature: "Feature", story: "Story" };

interface Kayitli {
  gorev: string | null;
  backlog: Backlog;
}

function kayitliOku(): Kayitli | null {
  try {
    const s = localStorage.getItem(KAYIT);
    const k = s ? (JSON.parse(s) as Kayitli) : null;
    return k?.backlog?.surum === 1 ? k : null;
  } catch {
    return null;
  }
}

function kayitliYaz(k: Kayitli) {
  try {
    localStorage.setItem(KAYIT, JSON.stringify(k));
  } catch {
    // Depolama kapalı: çalışma yalnız bu sekmede sürer
  }
}

const yeniTohum = () => Math.floor(Math.random() * 1e6) + 1;

export function BacklogAtolyesi({ yukle }: { yukle: () => Promise<AtolyeIcerigi> }) {
  const [icerik, setIcerik] = useState<AtolyeIcerigi | null>(null);
  useEffect(() => {
    let iptal = false;
    void yukle().then((i) => !iptal && setIcerik(i));
    return () => {
      iptal = true;
    };
  }, [yukle]);
  if (!icerik) return <p className="empty">Atölye yükleniyor…</p>;
  return <Atolye senaryo={icerik.senaryo} gorevler={icerik.gorevler} />;
}

// Serbest çalışma: yalnızca Teknik Liderlik'in epic'i
function serbestBaslangic(s: Senaryo): Oge[] {
  const e = s.havuz.find((k) => k.tur === "epic");
  return e ? [{ id: "E-1", tur: "epic", ust: null, baslik: e.baslik, kart: e.id }] : [];
}

const ogeAdi = (o: Oge) => (o.tur === "story" && !o.spike && !o.baslik.trim() ? o.istek?.trim() || "(yeni story)" : o.baslik.trim() || `(yeni ${TUR_ADI[o.tur].toLocaleLowerCase("tr")})`);

function Atolye({ senaryo, gorevler }: { senaryo: Senaryo; gorevler: AtolyeGorevi[] }) {
  const ilkGorev = gorevler[0] ?? null;
  const [oyun, setOyun] = useState<Kayitli>(
    () => kayitliOku() ?? { gorev: ilkGorev?.id ?? null, backlog: baslat(ilkGorev?.baslangic ?? serbestBaslangic(senaryo), yeniTohum()) },
  );
  const [tamam, setTamam] = useState<Set<string>>(() => tamamlananlariOku());
  const [secili, setSecili] = useState<string | null>(null);
  const [acik, setAcik] = useState<Set<string>>(new Set());
  const gorev = gorevler.find((g) => g.id === oyun.gorev) ?? null;
  const b = oyun.backlog;
  const basarili = !!gorev && gorev.hedef(b, senaryo);

  useEffect(() => kayitliYaz(oyun), [oyun]);
  useEffect(() => {
    if (gorev && basarili && !tamam.has(gorev.id)) {
      const y = new Set(tamam).add(gorev.id);
      setTamam(y);
      tamamlananlariYaz(y);
    }
  }, [gorev, basarili, tamam]);

  const uygula = (h: Hamle | Hamle[]): Backlog => {
    const y = oyna(b, Array.isArray(h) ? h : [h], senaryo);
    setOyun({ ...oyun, backlog: y });
    return y;
  };
  const basla = (g: AtolyeGorevi | null) => {
    setOyun({ gorev: g?.id ?? null, backlog: baslat(g ? g.baslangic : serbestBaslangic(senaryo), yeniTohum()) });
    setSecili(null);
    setAcik(new Set());
  };
  const o = ogeBul(b, secili) ?? null;

  return (
    <div className="sp ba">
      <section className="sp-ust" aria-label="Görevler">
        <div className="sp-cipler" role="group" aria-label="Görev seç">
          {gorevler.map((g, i) => (
            <button key={g.id} type="button" className="cip" aria-pressed={gorev?.id === g.id} onClick={() => basla(g)}>
              {tamam.has(g.id) ? "✓ " : ""}
              {i + 1}. {g.ad}
            </button>
          ))}
          <button type="button" className="cip" aria-pressed={!gorev} onClick={() => basla(null)}>
            Serbest çalışma
          </button>
        </div>
        <div className={`sp-gorev ${basarili ? "sp-iyi" : ""}`}>
          {gorev ? (
            <>
              <strong>{gorev.ad}</strong>
              <span>{gorev.ozet}</span>
              <span className="sp-not">{gorev.durum(b, senaryo)}</span>
              {basarili && <span className="sp-rozet sp-r-uygun">Görev tamamlandı</span>}
              <details>
                <summary>İpucu</summary>
                {gorev.ipucu}
              </details>
            </>
          ) : (
            <>
              <strong>Serbest çalışma</strong>
              <span>Epic'ten başla: feature'ları bağla, story'leri yaz ve böl, kabul kriterlerini ekle, takımla tahmin et, sırala ve onaya gönder.</span>
            </>
          )}
          <div className="sp-satir">
            <button type="button" className="cip" onClick={() => basla(gorev)}>
              Baştan başla
            </button>
          </div>
        </div>
      </section>

      <div className="ba-izgara">
        <section className="sp-kutu ba-sol" aria-label="Backlog">
          <blockquote className="ba-istek">
            “{senaryo.istek.metin}”
            <footer>{senaryo.istek.kim}</footer>
          </blockquote>
          <Agac b={b} secili={secili} sec={setSecili} />
          <Ekle b={b} s={senaryo} secili={o} uygula={uygula} sec={setSecili} />
          <Sira b={b} secili={secili} sec={setSecili} uygula={uygula} />
        </section>
        <section className="sp-kutu ba-orta" aria-label="Seçili öğe">
          {o ? <Duzenleyici o={o} b={b} s={senaryo} uygula={uygula} sec={setSecili} /> : <p className="sp-not">Soldaki ağaçtan bir öğe seç ya da yeni bir öğe ekle.</p>}
        </section>
        <section className="sp-kutu ba-sag" aria-label="Takım masası">
          <Poker o={o} b={b} s={senaryo} uygula={uygula} acik={o ? acik.has(o.id) : false} ac={() => o && setAcik(new Set(acik).add(o.id))} />
          <Onay b={b} uygula={uygula} sec={setSecili} />
          <KarneKutusu b={b} s={senaryo} />
        </section>
      </div>
    </div>
  );
}

// ---------------- Sol: ağaç, ekleme, sıra ----------------

function Agac({ b, secili, sec }: { b: Backlog; secili: string | null; sec: (id: string) => void }) {
  const sira = (id: string) => b.sira.indexOf(id) + 1;
  const satir = (o: Oge, derinlik: number): ReactNode => (
    <li key={o.id}>
      <button type="button" className={`ba-oge ba-${o.tur}`} aria-pressed={secili === o.id} style={{ paddingLeft: 6 + derinlik * 14 }} onClick={() => sec(o.id)}>
        <span className="ba-kimlik">{o.id}</span>
        <span className="ba-ad">{ogeAdi(o)}</span>
        {o.tur === "story" && (
          <span className="ba-rozetler">
            {o.spike ? <span className="sp-rozet sp-r-notr">spike</span> : !dikeyMi(o) && <span className="sp-rozet sp-r-aykiri">yatay</span>}
            {o.puan != null && <span className={`sp-rozet ${o.puan > SPRINT_SINIRI ? "sp-r-aykiri" : "sp-r-notr"}`}>{o.puan}</span>}
            <span className="ba-sira">#{sira(o.id)}</span>
          </span>
        )}
      </button>
      {altlar(b, o.id).length > 0 && <ul className="ba-agac">{altlar(b, o.id).map((c) => satir(c, derinlik + 1))}</ul>}
    </li>
  );
  const kokler = b.ogeler.filter((o) => !o.ust || !ogeBul(b, o.ust));
  return (
    <>
      <h3>Backlog</h3>
      {kokler.length ? <ul className="ba-agac">{kokler.map((o) => satir(o, 0))}</ul> : <p className="sp-not">Backlog boş.</p>}
    </>
  );
}

// Yeni öğenin bağlanacağı yer: seçili öğeye göre en yakın uygun üst
function ustBul(b: Backlog, secili: Oge | null, tur: Tur): string | null {
  if (tur === "epic") return null;
  const hedef: Tur = tur === "feature" ? "epic" : "feature";
  let x: Oge | undefined = secili ?? undefined;
  while (x && x.tur !== hedef) x = ogeBul(b, x.ust);
  if (x) return x.id;
  const ilk = b.ogeler.filter((o) => o.tur === hedef);
  return ilk.length === 1 ? ilk[0]!.id : null;
}

function Ekle({ b, s, secili, uygula, sec }: { b: Backlog; s: Senaryo; secili: Oge | null; uygula: (h: Hamle | Hamle[]) => Backlog; sec: (id: string) => void }) {
  const kalan = s.havuz.filter((k) => !b.ogeler.some((o) => o.kart === k.id));
  const [kart, setKart] = useState("");
  const secilen = kalan.find((k) => k.id === kart) ?? kalan[0];
  const yer = (tur: Tur) => {
    const u = ustBul(b, secili, tur);
    return u ? `${u} altına` : "bağımsız olarak";
  };
  const yeniSec = (y: Backlog) => {
    const son = y.ogeler.at(-1);
    if (son) sec(son.id);
  };
  const yaz = (tur: Tur) =>
    yeniSec(
      uygula({
        tur: "yaz",
        oge: tur === "story"
          ? { tur, ust: ustBul(b, secili, tur), baslik: "", rol: "", istek: "", fayda: "", katmanlar: [], kriterler: [], puan: null }
          : { tur, ust: ustBul(b, secili, tur), baslik: "" },
      }),
    );
  return (
    <div className="ba-ekle">
      <h4>Ekle</h4>
      {secilen ? (
        <div className="ba-ekle-satir">
          <select value={secilen.id} onChange={(e) => setKart(e.target.value)} aria-label="Havuzdan kart">
            {(["epic", "feature", "story"] as Tur[]).map((t) => {
              const liste = kalan.filter((k) => k.tur === t);
              return liste.length ? (
                <optgroup key={t} label={TUR_ADI[t]}>
                  {liste.map((k) => (
                    <option key={k.id} value={k.id}>
                      {k.tur === "story" ? `${k.rol} olarak ${k.istek}` : k.baslik}
                    </option>
                  ))}
                </optgroup>
              ) : null;
            })}
          </select>
          <button type="button" className="cip" onClick={() => yeniSec(uygula({ tur: "kartEkle", kart: secilen.id, ust: ustBul(b, secili, secilen.tur) }))}>
            Havuzdan ekle ({yer(secilen.tur)})
          </button>
        </div>
      ) : (
        <p className="sp-not">Havuzdaki bütün kartlar backlog'da.</p>
      )}
      <div className="ba-ekle-satir">
        <span className="sp-not">Kendin yaz:</span>
        {(["epic", "feature", "story"] as Tur[]).map((t) => (
          <button key={t} type="button" className="cip" onClick={() => yaz(t)}>
            + {TUR_ADI[t]}
          </button>
        ))}
      </div>
    </div>
  );
}

function Sira({ b, secili, sec, uygula }: { b: Backlog; secili: string | null; sec: (id: string) => void; uygula: (h: Hamle) => Backlog }) {
  const st = storyler(b);
  if (st.length < 2) return null;
  return (
    <div>
      <h4>Sıra (en üstte en önemli)</h4>
      <ol className="ba-sira-liste">
        {st.map((o, i) => (
          <li key={o.id} className={secili === o.id ? "ba-secili" : ""}>
            <button type="button" className="ba-link" onClick={() => sec(o.id)}>
              {o.id} {ogeAdi(o)}
            </button>
            <span className="ba-oklar">
              <button type="button" className="cip" disabled={i === 0} aria-label={`${o.id} yukarı`} onClick={() => uygula({ tur: "tasi", id: o.id, yon: -1 })}>
                ↑
              </button>
              <button type="button" className="cip" disabled={i === st.length - 1} aria-label={`${o.id} aşağı`} onClick={() => uygula({ tur: "tasi", id: o.id, yon: 1 })}>
                ↓
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// ---------------- Orta: seçili öğe ----------------

function Duzenleyici({ o, b, s, uygula, sec }: { o: Oge; b: Backlog; s: Senaryo; uygula: (h: Hamle | Hamle[]) => Backlog; sec: (id: string | null) => void }) {
  const guncelle = (alanlar: Partial<Omit<Oge, "id" | "tur">>) => uygula({ tur: "guncelle", id: o.id, alanlar });
  const ustTur: Tur | null = o.tur === "feature" ? "epic" : o.tur === "story" ? "feature" : null;
  const metin = (etiket: string, deger: string | undefined, alan: "baslik" | "rol" | "istek" | "fayda", ipucu?: string) => (
    <label className="ba-alan">
      <span>{etiket}</span>
      <input className="bl-girdi" value={deger ?? ""} placeholder={ipucu} onChange={(e) => guncelle({ [alan]: e.target.value })} />
    </label>
  );
  return (
    <div className="ba-duzen">
      <div className="sp-satir">
        <h3>
          {o.id} · {o.spike ? "Spike" : TUR_ADI[o.tur]}
        </h3>
        <button
          type="button"
          className="cip"
          onClick={() => {
            uygula({ tur: "sil", id: o.id });
            sec(null);
          }}
        >
          Sil
        </button>
      </div>
      {ustTur && (
        <label className="ba-alan">
          <span>Bağlı olduğu {TUR_ADI[ustTur].toLocaleLowerCase("tr")}</span>
          <select value={o.ust ?? ""} onChange={(e) => guncelle({ ust: e.target.value || null })}>
            <option value="">(bağlı değil)</option>
            {b.ogeler
              .filter((x) => x.tur === ustTur)
              .map((x) => (
                <option key={x.id} value={x.id}>
                  {x.id} {ogeAdi(x)}
                </option>
              ))}
          </select>
        </label>
      )}
      {o.tur !== "story" || o.spike ? (
        metin(o.spike ? "Cevaplanacak soru" : "Ad", o.baslik, "baslik", o.spike ? "Ör. ödeme sağlayıcıyla nasıl test ederiz? (2 gün)" : undefined)
      ) : (
        <StoryAlanlari o={o} metin={metin} guncelle={guncelle} />
      )}
      {o.tur === "feature" && <WsjfAlani o={o} b={b} guncelle={guncelle} />}
      {o.tur === "story" && <InvestGostergesi o={o} b={b} s={s} />}
    </div>
  );
}

function StoryAlanlari({ o, metin, guncelle }: {
  o: Oge;
  metin: (etiket: string, deger: string | undefined, alan: "baslik" | "rol" | "istek" | "fayda", ipucu?: string) => ReactNode;
  guncelle: (alanlar: Partial<Omit<Oge, "id" | "tur">>) => Backlog;
}) {
  const sd = storyDenetle(o.rol ?? "", o.istek ?? "", o.fayda ?? "");
  const kriterler = o.kriterler ?? [];
  const kriterYaz = (i: number, k: Partial<Kriter>) => guncelle({ kriterler: kriterler.map((x, j) => (j === i ? { ...x, ...k } : x)) });
  const katman = (k: Katman, var_: boolean) => guncelle({ katmanlar: KATMANLAR.filter((x) => (x === k ? var_ : o.katmanlar?.includes(x))) });
  const rol = o.rol?.trim() ?? "";
  return (
    <>
      {metin("Kısa ad", o.baslik, "baslik", "Ağaçta görünen ad")}
      {metin("Kim? (rol)", o.rol, "rol", "bir yurt öğrencisi")}
      {metin("Ne? (istek)", o.istek, "istek", "öğle menüsünü önceden sipariş etmek")}
      {metin("Neden? (fayda)", o.fayda, "fayda", "kasada sıra beklemeyeyim")}
      <p className="bl-story">
        {rol ? rol.charAt(0).toLocaleUpperCase("tr") + rol.slice(1) : "…"} olarak {o.istek?.trim() || "…"} istiyorum
        {o.fayda?.trim() ? `, böylece ${o.fayda.trim()}` : ""}.
      </p>
      {!sd.iyi && (
        <ul className="bl-uyarilar">
          {sd.uyarilar.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      )}
      <fieldset className="ba-katman">
        <legend>Dokunduğu katmanlar</legend>
        {KATMANLAR.map((k) => (
          <label key={k}>
            <input type="checkbox" checked={!!o.katmanlar?.includes(k)} onChange={(e) => katman(k, e.target.checked)} /> {KATMAN_ADI[k]}
          </label>
        ))}
        <span className={`sp-rozet ${dikeyMi(o) ? "sp-r-uygun" : "sp-r-aykiri"}`}>{dikeyMi(o) ? "dikey dilim" : "yatay dilim"}</span>
      </fieldset>
      <div className="ba-puan" role="group" aria-label="Tahmin (puan)">
        <span>Tahmin:</span>
        {[null, ...PUANLAR].map((p) => (
          <button key={p ?? "yok"} type="button" className="cip" aria-pressed={o.puan === p} onClick={() => guncelle({ puan: p })}>
            {p ?? "?"}
          </button>
        ))}
      </div>
      <h4>Kabul kriterleri</h4>
      {kriterler.length === 0 && <p className="sp-not">Henüz yok. Story'nin ne zaman bittiğini Given/When/Then ile yaz.</p>}
      {kriterler.map((k, i) => {
        const d = gherkinDenetle(k.given, k.when, k.then);
        return (
          <div key={i} className={`ba-kriter ${d.iyi ? "" : "ba-kriter-kotu"}`}>
            {(["given", "when", "then"] as const).map((alan) => (
              <label key={alan} className="bl-gherkin-satir">
                <strong>{alan === "given" ? "Verilen" : alan === "when" ? "Olduğunda" : "O zaman"}</strong>
                <input className="bl-girdi" value={k[alan]} onChange={(e) => kriterYaz(i, { [alan]: e.target.value })} />
              </label>
            ))}
            <div className="sp-satir">
              <label>
                <input type="checkbox" checked={k.olumsuz} onChange={(e) => kriterYaz(i, { olumsuz: e.target.checked })} /> Olumsuz yol
              </label>
              <button type="button" className="cip" onClick={() => guncelle({ kriterler: kriterler.filter((_, j) => j !== i) })}>
                Kriteri sil
              </button>
            </div>
            {!d.iyi && <p className="ba-uyari">{d.uyarilar[0]}</p>}
          </div>
        );
      })}
      <button type="button" className="cip" onClick={() => guncelle({ kriterler: [...kriterler, { given: "", when: "", then: "", olumsuz: false }] })}>
        + Kabul kriteri
      </button>
    </>
  );
}

function WsjfAlani({ o, b, guncelle }: { o: Oge; b: Backlog; guncelle: (alanlar: Partial<Omit<Oge, "id" | "tur">>) => Backlog }) {
  const w = o.wsjf ?? { deger: 5, zaman: 5, risk: 5 };
  const puan = wsjf({ ...o, wsjf: w }, b);
  const alan = (ad: string, k: "deger" | "zaman" | "risk") => (
    <label className="ba-alan ba-sayi">
      <span>{ad}</span>
      <input type="number" min={1} max={10} value={w[k]} onChange={(e) => guncelle({ wsjf: { ...w, [k]: Math.min(10, Math.max(1, Number(e.target.value) || 1)) } })} />
    </label>
  );
  return (
    <div>
      <h4>WSJF</h4>
      <div className="ba-wsjf">
        {alan("İş değeri", "deger")}
        {alan("Zaman kritikliği", "zaman")}
        {alan("Risk azaltma", "risk")}
      </div>
      <p className="sp-not">
        {puan == null
          ? "İş büyüklüğü, altındaki story'lerin puanlarından hesaplanır; önce story'leri tahmin et."
          : `Gecikme maliyeti ${w.deger + w.zaman + w.risk} / iş büyüklüğü = WSJF ${puan}`}
      </p>
    </div>
  );
}

function InvestGostergesi({ o, b, s }: { o: Oge; b: Backlog; s: Senaryo }) {
  const harfler = invest(o, b, s);
  return (
    <div>
      <h4>INVEST</h4>
      <div className="ba-invest">
        {harfler.map((h) => (
          <span key={h.harf} className={`ba-harf ${h.tamam ? "ba-harf-iyi" : "ba-harf-kotu"}`} title={h.neden}>
            {h.harf}
          </span>
        ))}
      </div>
      <ul className="ba-nedenler">
        {harfler
          .filter((h) => !h.tamam)
          .map((h) => (
            <li key={h.harf}>
              <strong>{h.harf}:</strong> {h.neden}
            </li>
          ))}
      </ul>
    </div>
  );
}

// ---------------- Sağ: takım masası ----------------

function Poker({ o, b, s, uygula, acik, ac }: { o: Oge | null; b: Backlog; s: Senaryo; uygula: (h: Hamle | Hamle[]) => Backlog; acik: boolean; ac: () => void }) {
  if (!o || o.tur !== "story" || o.spike) {
    return (
      <div>
        <h3>Planning Poker</h3>
        <p className="sp-not">Tahmin için bir story seç.</p>
      </div>
    );
  }
  const kartlar = poker(o, b, s);
  const enAz = Math.min(...kartlar.map((k) => k.kart));
  const enCok = Math.max(...kartlar.map((k) => k.kart));
  const bulunan = kartlar.map((k) => k.bilgi).filter((g, i, d): g is NonNullable<typeof g> => !!g && b.bulunan.includes(g.id) && d.indexOf(g) === i);
  const ortak = enAz === enCok ? enAz : null;
  return (
    <div>
      <h3>Planning Poker: {o.id}</h3>
      {!acik ? (
        <button type="button" className="cip" onClick={ac}>
          Kartları aç
        </button>
      ) : (
        <>
          <ul className="ba-poker">
            {kartlar.map(({ kisi, kart }) => (
              <li key={kisi.id} className={enAz !== enCok && (kart === enAz || kart === enCok) ? "ba-uc" : ""}>
                <span className="ba-kart">{kart}</span>
                <span>
                  <strong>{kisi.ad}</strong> <span className="sp-not">{kisi.rol}</span>
                </span>
                <button type="button" className="cip" onClick={() => uygula({ tur: "sor", id: o.id, kisi: kisi.id })}>
                  Neden {kart}?
                </button>
              </li>
            ))}
          </ul>
          {b.mesaj && <p className="sp-geri">{b.mesaj}</p>}
          {bulunan.map((g) => (
            <div key={g.id} className="sp-geri sp-g-uygun">
              <p>
                <strong>{s.takim.find((k) => k.id === g.kisi)?.ad}:</strong> {g.metin}
              </p>
              <button type="button" className="cip" onClick={() => uygula(oneriHamleleri(g, o))}>
                Öneriyi uygula: {[g.sonuc.spike && "spike ekle", g.sonuc.puan && `tahmini ${g.sonuc.puan} yap`, g.sonuc.kriter && "olumsuz yolu ekle"].filter(Boolean).join(", ")}
              </button>
            </div>
          ))}
          {ortak != null && o.puan !== ortak && (
            <button type="button" className="cip" onClick={() => uygula({ tur: "guncelle", id: o.id, alanlar: { puan: ortak } })}>
              Takım {ortak}'te anlaştı: tahmine yaz
            </button>
          )}
          {enAz !== enCok && <p className="sp-not">Kartlar {enAz} ile {enCok} arasında. En düşük ve en yüksek kartı açanlara sor.</p>}
        </>
      )}
    </div>
  );
}

function Onay({ b, uygula, sec }: { b: Backlog; uygula: (h: Hamle) => Backlog; sec: (id: string) => void }) {
  const { tur, onaylandi, bulgular } = b.onay;
  return (
    <div>
      <h3>Teknik Liderlik onayı</h3>
      <button type="button" className="cip" onClick={() => uygula({ tur: "onayaGonder" })}>
        Onaya gönder{tur ? ` (${tur + 1}. tur)` : ""}
      </button>
      {bulgular && (
        <div className={`sp-geri ${onaylandi ? "sp-g-uygun" : "sp-g-aykiri"}`}>
          {onaylandi ? (
            <p>{tur}. turda onaylandı. Levent Bey: "Story'ler dikey, test edilebilir ve tahminli. Sprint'e hazır."</p>
          ) : (
            <>
              <p>
                {tur}. turda geri döndü ({bulgular.length} not):
              </p>
              <ul className="ba-bulgular">
                {bulgular.map((x, i) => (
                  <li key={i}>
                    {x.id && (
                      <button type="button" className="ba-link" onClick={() => sec(x.id)}>
                        {x.id}
                      </button>
                    )}{" "}
                    {x.metin}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function KarneKutusu({ b, s }: { b: Backlog; s: Senaryo }) {
  const k = karne(b, s);
  return (
    <div>
      <h3>Karne</h3>
      <div className="sp-olcuer">
        <div>
          <span className="sp-olcu">%{k.investYuzde}</span>
          <span className="sp-not">INVEST harfleri</span>
        </div>
        <div>
          <span className="sp-olcu">%{k.tahminYuzde}</span>
          <span className="sp-not">tahmin edilmiş story</span>
        </div>
        <div>
          <span className="sp-olcu">{k.ayrintili ? "✓" : "✗"}</span>
          <span className="sp-not">üstteki 3 story ayrıntılı</span>
        </div>
        <div>
          <span className="sp-olcu">
            {k.gizliBulunan}/{k.gizliToplam}
          </span>
          <span className="sp-not">konuşulan gizli bilgi</span>
        </div>
        <div>
          <span className="sp-olcu">{k.onayTuru}</span>
          <span className="sp-not">onay turu{k.onaylandi ? " (onaylandı)" : ""}</span>
        </div>
      </div>
    </div>
  );
}
