// /sinavlar/<id>: sınav kağıdı düzenleyici. Solda soru seçimi ve kağıt ayarları,
// sağda kağıdın gerçek boyutunda canlı önizlemesi. Kağıttaki başlık, soru metni ve
// şıklar tıklanınca yerinde düzenlenir; değişiklikler 1,5 sn sonra sunucuya yazılır
// (başka cihazdan aynı yerden devam edilir). "PDF indir" kağıdı tarayıcının yazdırma
// motoruyla basar: önizlemede ne görünüyorsa kağıtta o çıkar.

import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { api } from "../lib/api";
import { useOturum } from "../lib/oturum";
import { PRATIK, uniteYazi } from "../lib/pratik";
import { href } from "../lib/router";
import { havuzBaglantisi } from "../lib/havuz";
import { Markdown } from "../components/Markdown";
import { FormHatasi } from "../components/Form";
import { Iskelet } from "../components/Iskelet";
import { sinavYetkisi } from "./Sinavlar";
import {
  GRUP_ADLARI, SIK_HARFLERI, cevapYazisi, grupKagidi, kagitMm, sayfala, toplamPuan, varsayilanGruplar,
  type GrupAyari, type GrupOgesi, type GrupSorusu, type HavuzOzeti, type SinavAyari, type SinavBelgesi, type SinavOgesi, type SinavSorusu,
} from "../../shared/sinav";

// CSS'te 1 mm = 96 / 25.4 px
const PX_MM = 96 / 25.4;
const SUTUN_ARASI_MM = 8;
const OGE_ARASI_MM = 4;

const TUR_ADI: Record<string, string> = { mcq: "Çoktan seçmeli", tf: "Doğru / Yanlış", fill: "Boşluk doldurma", num: "Sayısal", yaz: "Yazılı" };
const yeniKimlik = () => Math.random().toString(36).slice(2, 10);
const duzMetin = (s: string) => s.replace(/\[\[[^\]]+\]\]/g, "[şekil]").replace(/[$*`_]/g, "").replace(/\s+/g, " ").trim();
const tarihYazi = (t: string) => (t ? new Date(`${t}T12:00:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }) : "");

// ---- Yerinde düzenlenen metin ----
// Görünürken biçimli (formül, şekil) çizilir; tıklanınca düz metin kutusuna döner.
function Duzenlenir({ deger, onDegis, markdown = true, cok = true, bos = "Yazmak için tıkla", sinif }: {
  deger: string; onDegis?: (s: string) => void; markdown?: boolean; cok?: boolean; bos?: string; sinif?: string;
}) {
  const [acik, setAcik] = useState(false);
  const [taslak, setTaslak] = useState(deger);
  const kutu = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => {
    const k = kutu.current;
    if (!k) return;
    k.style.height = "auto";
    k.style.height = `${k.scrollHeight}px`;
  }, [acik, taslak]);
  if (!onDegis) return <div className={sinif}>{markdown ? <Markdown text={deger} /> : deger}</div>;
  if (acik) {
    return (
      <textarea
        ref={kutu}
        className={`kagit-duzenle ${sinif ?? ""}`}
        value={taslak}
        autoFocus
        rows={1}
        onChange={(e) => setTaslak(cok ? e.target.value : e.target.value.replace(/\n/g, " "))}
        onBlur={() => {
          setAcik(false);
          if (taslak !== deger) onDegis(taslak);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setTaslak(deger);
            setAcik(false);
          } else if (e.key === "Enter" && !cok) e.currentTarget.blur();
        }}
      />
    );
  }
  return (
    <div
      className={`kagit-tikla ${sinif ?? ""}${deger ? "" : " kagit-bos"}`}
      role="button"
      tabIndex={0}
      title="Düzenlemek için tıkla"
      onClick={() => {
        setTaslak(deger);
        setAcik(true);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setTaslak(deger);
          setAcik(true);
        }
      }}
    >
      {deger ? (markdown ? <Markdown text={deger} /> : deger) : <span className="kagit-ipucu">{bos}</span>}
    </div>
  );
}

// ---- Kağıttaki bir soru ----
type Degistir = (id: string, f: (o: SinavOgesi) => SinavOgesi) => void;

function SoruBlogu({ s, no, ayar, degistir, araclar }: {
  s: GrupSorusu; no: number; ayar: SinavAyari; degistir?: Degistir; araclar?: ReactNode;
}) {
  const q = s.soru;
  // Yalnızca kağıttaki (A grubu) soru yerinde düzenlenir
  const d = s.duzenli ? degistir : undefined;
  const metniDegistir = d && ((m: string) => d(s.ogeId, (x) => ({ ...x, metin: m }) as SinavOgesi));
  // Şıklar karışık görünür ama kağıtta asıl sırasıyla saklanır
  const sikDegistir = d && ((i: number, m: string) => d(s.ogeId, (x) => {
    const asil: string[] = [];
    s.sira.forEach((k, j) => (asil[k] = j === i ? m : s.siklar[j]!));
    return { ...x, siklar: asil } as SinavOgesi;
  }));
  return (
    <div className="kagit-soru">
      {araclar}
      <div className="kagit-soru-govde">
        <span className="kagit-no">{no}.</span>
        <div className="kagit-soru-metin">
          {ayar.puanGoster && s.puan ? <span className="kagit-puan">({s.puan} puan)</span> : null}
          {q.type === "tf" && <span className="kagit-dy">(&nbsp;&nbsp;&nbsp;&nbsp;) </span>}
          <Duzenlenir deger={s.metin} onDegis={metniDegistir} />
        </div>
      </div>
      {s.siklar.length > 0 && (
        <ol className="kagit-siklar">
          {s.siklar.map((m, i) => (
            <li key={i}>
              <span className="kagit-harf">{SIK_HARFLERI[i]})</span>
              <Duzenlenir deger={m} onDegis={sikDegistir && ((x) => sikDegistir(i, x))} />
            </li>
          ))}
        </ol>
      )}
      {(q.type === "yaz" || q.type === "num") && <div className={`kagit-cevap-yeri ${q.type === "yaz" ? "uzun" : ""}`} aria-hidden="true" />}
    </div>
  );
}

function MetinBlogu({ o, degistir, araclar }: { o: Extract<GrupOgesi, { tur: "metin" }>; degistir?: Degistir; araclar?: ReactNode }) {
  return (
    <div className="kagit-ortak">
      {araclar}
      <Duzenlenir deger={o.metin} onDegis={degistir && ((s) => degistir(o.ogeId, (x) => ({ ...x, metin: s }) as SinavOgesi))} bos="Ortak metin ya da yönerge" />
    </div>
  );
}

// ---- Kağıt başlığı (ilk sayfa) ----
function Baslik({ ayar, toplam, grup, ayarDegistir }: { ayar: SinavAyari; toplam: number; grup?: string; ayarDegistir?: (a: Partial<SinavAyari>) => void }) {
  const alan = (k: "universite" | "fakulte" | "ders" | "sinavAdi", bos: string) => (
    <Duzenlenir deger={ayar[k]} markdown={false} cok={false} bos={bos} onDegis={ayarDegistir && ((s) => ayarDegistir({ [k]: s }))} />
  );
  const bilgi = [ayar.tarih && `Tarih: ${tarihYazi(ayar.tarih)}`, ayar.sure > 0 && `Süre: ${ayar.sure} dakika`, ayar.puanGoster && toplam > 0 && `Toplam: ${toplam} puan`].filter(Boolean);
  return (
    <header className="kagit-baslik">
      {grup && <div className="kagit-grup" aria-label={`${grup} grubu`}><small>GRUP</small>{grup}</div>}
      <div className="kagit-baslik-ust">{alan("universite", "Üniversite")}{alan("fakulte", "Fakülte / bölüm")}</div>
      <div className="kagit-baslik-ad">{alan("ders", "Ders adı")}{alan("sinavAdi", "Sınav: ör. 2026-2027 Güz Vize")}</div>
      {bilgi.length > 0 && <div className="kagit-bilgi">{bilgi.join("   ·   ")}</div>}
      {(ayar.adSoyad || ayar.numara || ayar.imza) && (
        <div className="kagit-kimlik">
          {ayar.adSoyad && <span>Adı Soyadı: <i /></span>}
          {ayar.numara && <span>Numarası: <i /></span>}
          {ayar.imza && <span>İmza: <i /></span>}
        </div>
      )}
      {(ayar.yonerge || ayarDegistir) && (
        <div className="kagit-yonerge">
          <Duzenlenir deger={ayar.yonerge} bos="Yönerge (isteğe bağlı)" onDegis={ayarDegistir && ((s) => ayarDegistir({ yonerge: s }))} />
        </div>
      )}
    </header>
  );
}

// ---- Kağıt: ölçüm, sayfalama, çizim ----
function Kagit({ belge, ogeler, grup, degistir, ayarDegistir, oge }: {
  belge: SinavBelgesi; ogeler: GrupOgesi[]; grup?: string; degistir?: Degistir; ayarDegistir?: (a: Partial<SinavAyari>) => void;
  oge?: (o: GrupOgesi) => ReactNode;
}) {
  const { ayar } = belge;
  const mm = kagitMm(ayar);
  const icEn = mm.en - 2 * ayar.kenar;
  const sutunEn = (icEn - (ayar.sutun - 1) * SUTUN_ARASI_MM) / ayar.sutun;
  const icBoy = mm.boy - 2 * ayar.kenar - 8; // altbilgi için 8 mm
  const no = new Map<string, number>();
  ogeler.forEach((o) => o.tur === "soru" && no.set(o.id, no.size + 1));
  const toplam = toplamPuan(belge);

  // Görünmeyen ölçüm alanı: her öğe sütun genişliğinde çizilip yüksekliği okunur
  const olcum = useRef<HTMLDivElement>(null);
  const [boylar, setBoylar] = useState<{ baslik: number; ogeler: Map<string, number> } | null>(null);
  useLayoutEffect(() => {
    const kok = olcum.current;
    if (!kok) return;
    const olc = () => {
      const m = new Map<string, number>();
      kok.querySelectorAll<HTMLElement>("[data-oge]").forEach((e) => m.set(e.dataset.oge!, e.offsetHeight));
      const b = kok.querySelector<HTMLElement>("[data-baslik]")?.offsetHeight ?? 0;
      setBoylar({ baslik: b, ogeler: m });
    };
    olc();
    // Şekiller ve formül yazı tipleri sonradan yüklenince yükseklik değişir
    const ro = new ResizeObserver(olc);
    ro.observe(kok);
    return () => ro.disconnect();
  }, [belge, ogeler]);

  const duzen = useMemo(() => {
    if (!boylar) return null;
    return sayfala(ogeler.map((o) => ({ id: o.id, yukseklik: boylar.ogeler.get(o.id) ?? 0 })), {
      sutunYuksekligi: icBoy * PX_MM,
      ilkSayfaBaslik: boylar.baslik + 4 * PX_MM,
      sutun: ayar.sutun,
      aralik: OGE_ARASI_MM * PX_MM,
    });
  }, [boylar, ogeler, icBoy, ayar.sutun]);

  const blok = (o: GrupOgesi, duzenle: boolean) =>
    o.tur === "soru" ? (
      <SoruBlogu s={o} no={no.get(o.id)!} ayar={ayar} degistir={duzenle ? degistir : undefined} araclar={duzenle ? oge?.(o) : undefined} />
    ) : (
      <MetinBlogu o={o} degistir={duzenle ? degistir : undefined} araclar={duzenle ? oge?.(o) : undefined} />
    );
  const kagitStil = { fontSize: `${ayar.yazi}pt`, "--sutun-arasi": `${SUTUN_ARASI_MM}mm`, "--oge-arasi": `${OGE_ARASI_MM}mm` } as CSSProperties;
  const ogeMap = new Map(ogeler.map((o) => [o.id, o]));

  return (
    <>
      <div className="kagit kagit-olcum" ref={olcum} style={{ ...kagitStil, width: `${icEn}mm` }} aria-hidden="true">
        <div data-baslik><Baslik ayar={ayar} toplam={toplam} grup={grup} /></div>
        <div style={{ width: `${sutunEn}mm` }}>
          {ogeler.map((o) => <div key={o.id} data-oge={o.id}>{blok(o, false)}</div>)}
        </div>
      </div>
      <div className="kagit-sayfalar">
        {(duzen?.sayfalar ?? [[[]]]).map((sayfa, si, hepsi) => (
          <section key={si} className="kagit kagit-sayfa" style={{ ...kagitStil, width: `${mm.en}mm`, height: `${mm.boy}mm`, padding: `${ayar.kenar}mm` }}>
            {si === 0 && <Baslik ayar={ayar} toplam={toplam} grup={grup} ayarDegistir={ayarDegistir} />}
            <div className={`kagit-sutunlar sutun-${ayar.sutun}`}>
              {Array.from({ length: ayar.sutun }, (_, i) => (
                <div key={i} className="kagit-sutun" style={{ width: `${sutunEn}mm` }}>
                  {(sayfa[i] ?? []).map((id) => {
                    const o = ogeMap.get(id);
                    return o ? <div key={id} className="kagit-oge">{blok(o, true)}</div> : null;
                  })}
                </div>
              ))}
            </div>
            <footer className="kagit-alt">
              {[ayar.ders, ayar.sinavAdi, grup && `${grup} grubu`].filter(Boolean).join(" · ")}
              <span>Sayfa {si + 1} / {hepsi.length}</span>
            </footer>
          </section>
        ))}
      </div>
    </>
  );
}

// Bütün grupların cevap anahtarı: tek sayfada, grup başına bir sütun
function CevapAnahtari({ belge, gruplar }: { belge: SinavBelgesi; gruplar: GrupOgesi[][] }) {
  const { ayar } = belge;
  const mm = kagitMm({ ...ayar, yon: "dikey" });
  const sorular = gruplar.map((g) => g.filter((o): o is GrupSorusu => o.tur === "soru"));
  const n = Math.max(0, ...sorular.map((l) => l.length));
  return (
    <div className="kagit-sayfalar">
      <section className="kagit kagit-sayfa kagit-anahtar" style={{ width: `${mm.en}mm`, minHeight: `${mm.boy}mm`, padding: `${ayar.kenar}mm`, fontSize: "11pt" }}>
        <h3>Cevap anahtarı</h3>
        <p>{[ayar.ders, ayar.sinavAdi, belge.ad].filter(Boolean).join(" · ")}</p>
        <table>
          <thead>
            <tr><th>Soru</th>{sorular.map((_, g) => <th key={g}>{sorular.length > 1 ? `${GRUP_ADLARI[g]} grubu` : "Cevap"}</th>)}</tr>
          </thead>
          <tbody>
            {Array.from({ length: n }, (_, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                {sorular.map((l, g) => <td key={g}>{l[i] ? cevapYazisi(l[i]!) : ""}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

// Kağıdı ayrı bir çerçevede yazdırır: yalnızca sayfalar ve sitenin stilleri
function yazdir(kok: HTMLElement | null, ayar: SinavAyari, ad: string) {
  if (!kok) return;
  const cerceve = document.createElement("iframe");
  cerceve.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
  document.body.append(cerceve);
  const d = cerceve.contentDocument!;
  const stiller = [...document.querySelectorAll('style, link[rel="stylesheet"]')].map((e) => e.outerHTML).join("\n");
  const kopya = document.createElement("div");
  kopya.className = "kagit-sayfalar";
  kok.querySelectorAll(".kagit-sayfalar .kagit-sayfa").forEach((e) => kopya.append(e.cloneNode(true)));
  kopya.querySelectorAll(".kagit-arac, .kagit-ipucu").forEach((e) => e.remove());
  const mm = kagitMm(ayar);
  d.open();
  d.write(`<!doctype html><html lang="tr" data-theme="light"><head><meta charset="utf-8"><title>${ad.replace(/</g, "")}</title>${stiller}
<style>@page { size: ${mm.en}mm ${mm.boy}mm; margin: 0 } html, body { margin: 0; background: #fff; height: auto; overflow: visible }
.kagit-sayfalar { zoom: 1 !important; gap: 0 !important; padding: 0 !important } .kagit-sayfa { box-shadow: none !important; margin: 0 !important; break-after: page }</style>
</head><body>${kopya.outerHTML}</body></html>`);
  d.close();
  const bas = () => {
    cerceve.contentWindow!.focus();
    cerceve.contentWindow!.print();
    setTimeout(() => cerceve.remove(), 1000);
  };
  // Stil ve yazı tipleri yüklensin
  void Promise.all([...d.querySelectorAll("link")].map((l) => new Promise((r) => { l.addEventListener("load", r); l.addEventListener("error", r); }))).then(() =>
    (d.fonts?.ready ?? Promise.resolve()).then(() => setTimeout(bas, 200)),
  );
}

// ---- Soru seçici ----
function SoruSecici({ sorular, ogeler, ekle, cikar }: {
  sorular: SinavSorusu[]; ogeler: SinavOgesi[]; ekle: (q: SinavSorusu) => void; cikar: (soruId: string) => void;
}) {
  const [unite, setUnite] = useState(0);
  const [tur, setTur] = useState("");
  const [ara, setAra] = useState("");
  const secili = new Set(ogeler.flatMap((o) => (o.tur === "soru" ? [o.soruId] : [])));
  const ara2 = ara.trim().toLocaleLowerCase("tr-TR");
  const liste = sorular.filter((q) =>
    (!unite || q.week === unite) && (!tur || q.type === tur) && (!ara2 || q.prompt.toLocaleLowerCase("tr-TR").includes(ara2)),
  );
  const turler = [...new Set(sorular.map((q) => q.type))];
  return (
    <div className="soru-secici">
      <div className="soru-secici-filtre">
        <select value={unite} onChange={(e) => setUnite(Number(e.target.value))} aria-label="Ünite">
          <option value={0}>Bütün {PRATIK.uniteAdi}ler</option>
          {PRATIK.uniteler.map((u) => <option key={u.no} value={u.no}>{uniteYazi(u.no)}: {u.baslik}</option>)}
        </select>
        <select value={tur} onChange={(e) => setTur(e.target.value)} aria-label="Soru türü">
          <option value="">Bütün türler</option>
          {turler.map((t) => <option key={t} value={t}>{TUR_ADI[t] ?? t}</option>)}
        </select>
        <input type="search" value={ara} onChange={(e) => setAra(e.target.value)} placeholder="Soruda ara" />
      </div>
      <div className="soru-secici-ozet">
        {liste.length} soru · {secili.size} seçili
        {liste.length > 0 && (
          <button onClick={() => liste.filter((q) => !secili.has(q.id)).forEach(ekle)} disabled={liste.every((q) => secili.has(q.id))}>
            Görünenlerin hepsini ekle
          </button>
        )}
      </div>
      <ul className="soru-secici-liste">
        {liste.map((q) => {
          const var_ = secili.has(q.id);
          return (
            <li key={q.id} className={var_ ? "secili" : undefined}>
              <button className="soru-secici-dugme" onClick={() => (var_ ? cikar(q.id) : ekle(q))} aria-pressed={var_}
                title={var_ ? "Kağıttan çıkar" : "Kağıda ekle"}>
                {var_ ? "✓" : "+"}
              </button>
              <div>
                <span className="soru-secici-meta">{uniteYazi(q.week)} · {TUR_ADI[q.type] ?? q.type} · zorluk {q.difficulty}</span>
                <span className="soru-secici-metin">{duzMetin(q.prompt).slice(0, 220)}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ---- Kağıt ayarları ----
function KagitAyarlari({ ayar, degistir, puanDagit }: { ayar: SinavAyari; degistir: (a: Partial<SinavAyari>) => void; puanDagit: () => void }) {
  const sayi = (k: "yazi" | "kenar" | "sure", min: number, max: number, etiket: string, birim: string) => (
    <label>
      {etiket}
      <span className="ayar-satir-ic">
        <input type="number" min={min} max={max} value={ayar[k]} onChange={(e) => {
          const v = Math.round(Number(e.target.value));
          if (v >= min && v <= max) degistir({ [k]: v });
        }} /> {birim}
      </span>
    </label>
  );
  const kutu = (k: "adSoyad" | "numara" | "imza" | "puanGoster", etiket: string) => (
    <label className="ayar-kutu"><input type="checkbox" checked={ayar[k]} onChange={(e) => degistir({ [k]: e.target.checked })} /> {etiket}</label>
  );
  return (
    <div className="kagit-ayarlari">
      <fieldset>
        <legend>Kağıt</legend>
        <label>Boyut
          <select value={ayar.boyut} onChange={(e) => degistir({ boyut: e.target.value as SinavAyari["boyut"] })}>
            <option value="A4">A4</option><option value="A3">A3</option>
          </select>
        </label>
        <label>Yön
          <select value={ayar.yon} onChange={(e) => degistir({ yon: e.target.value as SinavAyari["yon"] })}>
            <option value="dikey">Dikey</option><option value="yatay">Yatay</option>
          </select>
        </label>
        <label>Düzen
          <select value={ayar.sutun} onChange={(e) => degistir({ sutun: Number(e.target.value) as SinavAyari["sutun"] })}>
            <option value={1}>Tek sütun</option><option value={2}>İki sütun</option><option value={3}>Üç sütun</option>
          </select>
        </label>
        {sayi("yazi", 8, 16, "Yazı boyutu", "punto")}
        {sayi("kenar", 5, 30, "Kenar boşluğu", "mm")}
        <label>Şık sayısı
          <select value={ayar.sikSayisi} onChange={(e) => degistir({ sikSayisi: Number(e.target.value) as 4 | 5 })}>
            <option value={4}>4 şık (A-D)</option><option value={5}>5 şık (A-E)</option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <legend>Başlık</legend>
        {(["universite", "fakulte", "ders", "sinavAdi"] as const).map((k) => (
          <label key={k}>{{ universite: "Üniversite", fakulte: "Fakülte / bölüm", ders: "Ders", sinavAdi: "Sınav" }[k]}
            <input value={ayar[k]} maxLength={200} onChange={(e) => degistir({ [k]: e.target.value })} />
          </label>
        ))}
        <label>Tarih<input type="date" value={ayar.tarih} onChange={(e) => degistir({ tarih: e.target.value })} /></label>
        {sayi("sure", 0, 600, "Süre", "dakika (0: yazma)")}
        {kutu("adSoyad", "Adı Soyadı alanı")}
        {kutu("numara", "Numara alanı")}
        {kutu("imza", "İmza alanı")}
        {kutu("puanGoster", "Puanları göster")}
        <button type="button" onClick={puanDagit}>Puanları eşit dağıt (100)</button>
      </fieldset>
    </div>
  );
}

// ---- Grup ayarları ----
function GrupAyarlari({ ayar, degistir, gruplar }: { ayar: GrupAyari; degistir: (g: Partial<GrupAyari>) => void; gruplar: GrupOgesi[][] }) {
  // Benzer kipte yerine başka soru bulunamayan sorular (B grubuna bakılır)
  const ayni = ayar.kip === "benzer" && gruplar[1] ? gruplar[1].filter((o) => o.tur === "soru" && o.duzenli).length : 0;
  return (
    <>
      <fieldset>
        <legend>Gruplar</legend>
        <label>Grup sayısı
          <select value={ayar.sayi} onChange={(e) => degistir({ sayi: Number(e.target.value) as GrupAyari["sayi"] })}>
            <option value={1}>Tek grup</option>
            <option value={2}>A ve B</option>
            <option value={3}>A, B ve C</option>
            <option value={4}>A, B, C ve D</option>
          </select>
        </label>
        <label className="ayar-kutu"><input type="radio" name="grup-kip" checked={ayar.kip === "karisik"} onChange={() => degistir({ kip: "karisik" })} />
          Aynı sorular, karışık
        </label>
        <p className="soluk ayar-aciklama">Her grupta aynı sorular var; soruların sırası ve şıkların yeri değişir.</p>
        <label className="ayar-kutu"><input type="radio" name="grup-kip" checked={ayar.kip === "benzer"} onChange={() => degistir({ kip: "benzer" })} />
          Benzer ama farklı sorular
        </label>
        <p className="soluk ayar-aciklama">B, C ve D gruplarında her sorunun yerine aynı kavramdan başka bir soru gelir, sonra karıştırılır.</p>
        {ayni > 0 && <p className="ayar-uyari">{ayni} sorunun benzeri yok; bu sorular gruplarda aynı kalıp yalnızca karıştırılıyor.</p>}
        <label className="ayar-kutu"><input type="checkbox" checked={ayar.sikKaristir !== false} onChange={(e) => degistir({ sikKaristir: e.target.checked })} />
          Şıkları A grubunda da karıştır
        </label>
        <p className="soluk ayar-aciklama">Sitedeki sorularda doğru cevap çoğu zaman aynı harflerde toplanır; açık kalması önerilir.</p>
        <p className="soluk ayar-aciklama">A grubu kağıttaki soru sırasıyla basılır. Ortak metinler yerinde kalır, aralarındaki sorular kendi içinde karışır. Başka şıklara atıf yapan sorularda şıklar karışmaz.</p>
        <button type="button" onClick={() => degistir({ tohum: (ayar.tohum % 1_000_000) + 1 })} disabled={ayar.sayi === 1 && ayar.sikKaristir === false}>Yeniden karıştır</button>
      </fieldset>
    </>
  );
}

// ---- Öğrencilere soru havuzu ----
function HavuzPaneli({ sinavId, belge, gruplar, sorular }: { sinavId: string; belge: SinavBelgesi; gruplar: GrupOgesi[][]; sorular: SinavSorusu[] }) {
  const [havuz, setHavuz] = useState<HavuzOzeti | null | undefined>(undefined);
  const [ad, setAd] = useState(belge.ayar.sinavAdi || belge.ad);
  const [sonTarih, setSonTarih] = useState(belge.ayar.tarih);
  const [kapsam, setKapsam] = useState<"sinav" | "kavram">("sinav");
  const [mesgul, setMesgul] = useState(false);
  const [hata, setHata] = useState<string | null>(null);
  const [kopyalandi, setKopyalandi] = useState(false);
  useEffect(() => {
    api.havuz.liste().then((l) => {
      const h = l.find((x) => x.sinavId === sinavId) ?? null;
      setHavuz(h);
      if (h) {
        setAd(h.ad);
        setSonTarih(h.sonTarih ?? "");
      }
    }, () => setHavuz(null));
  }, [sinavId]);

  // Sınavdaki bütün gruplardaki sorular; istenirse aynı kavramlardaki bütün sorular
  const sinavdakiler = new Set(gruplar.flat().flatMap((o) => (o.tur === "soru" ? [o.soru.id] : [])));
  const kavramlar = new Set(sorular.filter((q) => sinavdakiler.has(q.id)).map((q) => q.kavram ?? `konu:${q.topicId}`));
  const genis = sorular.filter((q) => sinavdakiler.has(q.id) || kavramlar.has(q.kavram ?? `konu:${q.topicId}`)).map((q) => q.id);
  const secilen = kapsam === "sinav" ? [...sinavdakiler] : genis;

  const ac = async () => {
    setMesgul(true);
    setHata(null);
    const r = await api.havuz.ac({ ad, sonTarih: sonTarih || null, sorular: secilen, sinav: sinavId });
    setMesgul(false);
    if (!r.ok) return setHata(r.hata.error);
    setHavuz(r.data);
  };
  const kaldir = async () => {
    if (!havuz || !confirm("Havuz kaldırılsın mı? Bağlantı artık açılmaz.")) return;
    const r = await api.havuz.sil(havuz.kod);
    if (!r.ok) return setHata(r.hata.error);
    setHavuz(null);
  };
  const baglanti = havuz ? havuzBaglantisi(havuz.kod) : "";
  return (
    <fieldset className="havuz-paneli">
      <legend>Öğrencilere soru havuzu</legend>
      <p className="soluk ayar-aciklama" style={{ marginLeft: 0 }}>
        Öğrencilere "sınav bu sorulardan gelecek" diye bir bağlantı ver. Bağlantıyı açan öğrenci sitede yalnızca bu soruları çözer; cevaplar ve kağıdın kendisi görünmez.
      </p>
      <label>Havuzun adı<input value={ad} maxLength={120} onChange={(e) => setAd(e.target.value)} /></label>
      <label>Sınav tarihi (isteğe bağlı)<input type="date" value={sonTarih} onChange={(e) => setSonTarih(e.target.value)} /></label>
      <label className="ayar-kutu"><input type="radio" name="havuz-kapsam" checked={kapsam === "sinav"} onChange={() => setKapsam("sinav")} />
        Sınavdaki sorular ({sinavdakiler.size})
      </label>
      <label className="ayar-kutu"><input type="radio" name="havuz-kapsam" checked={kapsam === "kavram"} onChange={() => setKapsam("kavram")} />
        Sınavın kavramlarındaki bütün sorular ({genis.length})
      </label>
      <button type="button" className="primary" onClick={ac} disabled={mesgul || !ad.trim() || secilen.length === 0 || havuz === undefined}>
        {havuz ? "Havuzu güncelle" : "Havuzu aç"}
      </button>
      {hata && <p className="ayar-uyari">{hata}</p>}
      {havuz && (
        <>
          <span className="soluk" style={{ fontSize: 12 }}>{havuz.soruSayisi} soru · bağlantı:</span>
          <div className="havuz-baglanti">
            <input readOnly value={baglanti} onFocus={(e) => e.currentTarget.select()} aria-label="Havuz bağlantısı" />
            <button type="button" onClick={() => void navigator.clipboard?.writeText(baglanti).then(() => {
              setKopyalandi(true);
              setTimeout(() => setKopyalandi(false), 1500);
            })}>{kopyalandi ? "Kopyalandı" : "Kopyala"}</button>
          </div>
          <button type="button" onClick={kaldir}>Havuzu kaldır</button>
        </>
      )}
    </fieldset>
  );
}

// ---- Sayfa ----
type KayitDurumu = "kayitli" | "bekliyor" | "kaydediliyor" | "hata";

export function SinavKagidi({ id }: { id: string }) {
  const { me, yuklendi } = useOturum();
  const [belge, setBelge] = useState<SinavBelgesi | null>(null);
  const [sorular, setSorular] = useState<SinavSorusu[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [durum, setDurum] = useState<KayitDurumu>("kayitli");
  const [sekme, setSekme] = useState<"sorular" | "kagit" | "gruplar">("sorular");
  // Önizlemede görünen: grup sırası (0 = A), cevap anahtarı ya da hepsi
  const [gorunum, setGorunum] = useState<number | "anahtar" | "hepsi">(0);
  const [olcek, setOlcek] = useState(0.8);
  const guncellendi = useRef(0);
  const ilk = useRef(true);
  const sayfalar = useRef<HTMLDivElement>(null);
  const yetkili = sinavYetkisi(me?.role);

  useEffect(() => {
    if (!yetkili) return;
    ilk.current = true;
    api.sinav.al(id).then((s) => {
      guncellendi.current = s.guncellendi;
      setBelge(s.belge);
    }, (e) => setHata(String(e).includes("404") ? "Bu sınav bulunamadı." : String(e)));
    api.sinav.sorular().then(setSorular, (e) => setHata(String(e)));
  }, [id, yetkili]);

  // Otomatik kayıt: son değişiklikten 1,5 sn sonra
  useEffect(() => {
    if (!belge) return;
    if (ilk.current) {
      ilk.current = false;
      return;
    }
    setDurum("bekliyor");
    const t = setTimeout(async () => {
      setDurum("kaydediliyor");
      const r = await api.sinav.kaydet(id, belge, guncellendi.current);
      if (r.ok) {
        guncellendi.current = r.data.guncellendi;
        setDurum("kayitli");
      } else {
        setDurum("hata");
        setHata(r.hata.error);
      }
    }, 1500);
    return () => clearTimeout(t);
  }, [belge, id]);

  // Kaydedilmemiş değişiklik varken sayfadan çıkarken uyar
  useEffect(() => {
    if (durum === "kayitli") return;
    const uyar = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", uyar);
    return () => window.removeEventListener("beforeunload", uyar);
  }, [durum]);

  const soruMap = useMemo(() => new Map((sorular ?? []).map((q) => [q.id, q])), [sorular]);
  const grupAyari = belge?.gruplar ?? varsayilanGruplar();
  const gruplar = useMemo(
    () => (belge ? Array.from({ length: grupAyari.sayi }, (_, g) => grupKagidi(belge, soruMap, g)) : []),
    [belge, soruMap, grupAyari.sayi],
  );
  const [wordHazirlaniyor, setWordHazirlaniyor] = useState(false);

  if (!yuklendi) return <Iskelet />;
  if (!yetkili) return <p className="empty">Bu sayfa akademisyen hesapları içindir. <a href="/sinavlar">Ayrıntı</a></p>;
  if (hata && !belge) return <p className="empty">{hata} <a href={href({ page: "sinavlar" })}>Sınavlarım</a></p>;
  if (!belge || !sorular) return <Iskelet satir={6} />;

  const guncelle = (f: (b: SinavBelgesi) => SinavBelgesi) => setBelge((b) => (b ? f(b) : b));
  const ayarDegistir = (a: Partial<SinavAyari>) => guncelle((b) => ({ ...b, ayar: { ...b.ayar, ...a } }));
  const degistir: Degistir = (oid, f) => guncelle((b) => ({ ...b, ogeler: b.ogeler.map((o) => (o.id === oid ? f(o) : o)) }));
  const ekle = (q: SinavSorusu) => guncelle((b) => ({ ...b, ogeler: [...b.ogeler, { tur: "soru", id: yeniKimlik(), soruId: q.id }] }));
  const cikar = (soruId: string) => guncelle((b) => ({ ...b, ogeler: b.ogeler.filter((o) => o.tur !== "soru" || o.soruId !== soruId) }));
  const tasi = (oid: string, yon: -1 | 1) => guncelle((b) => {
    const i = b.ogeler.findIndex((o) => o.id === oid);
    const j = i + yon;
    if (i < 0 || j < 0 || j >= b.ogeler.length) return b;
    const l = [...b.ogeler];
    [l[i], l[j]] = [l[j]!, l[i]!];
    return { ...b, ogeler: l };
  });
  const sil = (oid: string) => guncelle((b) => ({ ...b, ogeler: b.ogeler.filter((o) => o.id !== oid) }));
  const ortakMetin = () => guncelle((b) => ({ ...b, ogeler: [...b.ogeler, { tur: "metin", id: yeniKimlik(), metin: "" }] }));
  const puanDagit = () => guncelle((b) => {
    const n = b.ogeler.filter((o) => o.tur === "soru").length;
    if (!n) return b;
    const taban = Math.floor(100 / n);
    let artan = 100 - taban * n;
    return { ...b, ogeler: b.ogeler.map((o) => (o.tur === "soru" ? { ...o, puan: taban + (artan-- > 0 ? 1 : 0) } : o)) };
  });

  const gruplariDegistir = (g: Partial<GrupAyari>) => guncelle((b) => ({ ...b, gruplar: { ...(b.gruplar ?? varsayilanGruplar()), ...g } }));
  const ogeBul = new Map(belge.ogeler.map((o) => [o.id, o]));
  const oge = (go: GrupOgesi) => {
    const o = ogeBul.get(go.ogeId);
    if (!o) return null;
    return (
      <span className="kagit-arac">
        {o.tur === "soru" && (
          <label title="Puan">
            <input type="number" min={0} max={100} value={o.puan ?? ""} placeholder="puan"
              onChange={(e) => degistir(o.id, (x) => ({ ...x, puan: e.target.value === "" ? undefined : Math.min(100, Math.max(0, Number(e.target.value))) }) as SinavOgesi)} />
          </label>
        )}
        {o.tur === "soru" && (o.metin !== undefined || o.siklar !== undefined) && (
          <button onClick={() => degistir(o.id, (x) => ({ ...x, metin: undefined, siklar: undefined }) as SinavOgesi)} title="Sorunun sitedeki haline dön">Aslına dön</button>
        )}
        <button onClick={() => tasi(o.id, -1)} title="Yukarı taşı" aria-label="Yukarı taşı">↑</button>
        <button onClick={() => tasi(o.id, 1)} title="Aşağı taşı" aria-label="Aşağı taşı">↓</button>
        <button onClick={() => sil(o.id)} title="Kağıttan çıkar" aria-label="Kağıttan çıkar">✕</button>
      </span>
    );
  };
  const grupAdi = (g: number) => (grupAyari.sayi > 1 ? GRUP_ADLARI[g] : undefined);
  const gorunen = typeof gorunum === "number" && gorunum >= grupAyari.sayi ? 0 : gorunum;
  const wordIndir = async () => {
    setWordHazirlaniyor(true);
    try {
      const { sinaviWordeCevir } = await import("../lib/sinav-word");
      const blob = await sinaviWordeCevir(belge, gruplar);
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${(belge.ad || "sinav").replace(/[\\/:*?"<>|]/g, "-")}.docx`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    } catch (e) {
      setHata(`Word dosyası hazırlanamadı: ${String(e)}`);
    } finally {
      setWordHazirlaniyor(false);
    }
  };

  const DURUM_YAZI: Record<KayitDurumu, string> = { kayitli: "Kaydedildi", bekliyor: "Değişiklik var…", kaydediliyor: "Kaydediliyor…", hata: "Kaydedilemedi" };

  return (
    <div className="sinav-duzenleyici">
      <div className="sinav-arac-cubugu">
        <a href={href({ page: "sinavlar" })}>← Sınavlarım</a>
        <input className="sinav-adi" value={belge.ad} maxLength={120} aria-label="Sınavın adı" onChange={(e) => guncelle((b) => ({ ...b, ad: e.target.value }))} />
        <span className={`kayit-durumu kayit-${durum}`} role="status">{DURUM_YAZI[durum]}</span>
        <span className="bosluk" />
        <label className="olcek-secici">Yakınlık
          <input type="range" min={0.4} max={1.2} step={0.05} value={olcek} onChange={(e) => setOlcek(Number(e.target.value))} />
        </label>
        <button onClick={wordIndir} disabled={wordHazirlaniyor || belge.ogeler.length === 0}
          title="Bütün gruplar ve cevap anahtarı tek Word dosyasında">
          {wordHazirlaniyor ? "Hazırlanıyor…" : "Word indir"}
        </button>
        <button className="primary" onClick={() => yazdir(sayfalar.current, belge.ayar, belge.ad)}
          title="Önizlemede görüneni basar. Yazdırma penceresinde hedef olarak 'PDF olarak kaydet'i seç">
          PDF indir / yazdır
        </button>
      </div>
      {durum === "hata" && <FormHatasi hata={hata} />}
      <div className="sinav-govde">
        <aside className="sinav-yan">
          <div className="tabs" role="tablist">
            <button role="tab" aria-selected={sekme === "sorular"} className={sekme === "sorular" ? "active" : ""} onClick={() => setSekme("sorular")}>Sorular</button>
            <button role="tab" aria-selected={sekme === "kagit"} className={sekme === "kagit" ? "active" : ""} onClick={() => setSekme("kagit")}>Kağıt ve başlık</button>
            <button role="tab" aria-selected={sekme === "gruplar"} className={sekme === "gruplar" ? "active" : ""} onClick={() => setSekme("gruplar")}>Gruplar ve havuz</button>
          </div>
          {sekme === "sorular" ? (
            <>
              <SoruSecici sorular={sorular} ogeler={belge.ogeler} ekle={ekle} cikar={cikar} />
              <button className="ortak-metin-dugme" onClick={ortakMetin}>+ Ortak metin ya da yönerge ekle</button>
            </>
          ) : sekme === "kagit" ? (
            <KagitAyarlari ayar={belge.ayar} degistir={ayarDegistir} puanDagit={puanDagit} />
          ) : (
            <div className="kagit-ayarlari">
              <GrupAyarlari ayar={grupAyari} degistir={gruplariDegistir} gruplar={gruplar} />
              <HavuzPaneli sinavId={id} belge={belge} gruplar={gruplar} sorular={sorular} />
            </div>
          )}
        </aside>
        <div className="sinav-onizleme-kap">
          <div className="sinav-gorunum" role="tablist" aria-label="Önizleme">
            {gruplar.map((_, g) => (
              <button key={g} role="tab" aria-selected={gorunen === g} onClick={() => setGorunum(g)}>
                {grupAyari.sayi > 1 ? `${GRUP_ADLARI[g]} grubu` : "Kağıt"}
              </button>
            ))}
            <button role="tab" aria-selected={gorunen === "anahtar"} onClick={() => setGorunum("anahtar")}>Cevap anahtarı</button>
            {grupAyari.sayi > 1 && <button role="tab" aria-selected={gorunen === "hepsi"} onClick={() => setGorunum("hepsi")}>Hepsi</button>}
            {typeof gorunen === "number" && gorunen > 0 && <span className="soluk">Bu grup A'dan üretilir; düzenlemeyi A grubunda yap.</span>}
          </div>
          <div className="sinav-onizleme" ref={sayfalar} style={{ "--kagit-olcek": olcek } as CSSProperties}>
            {belge.ogeler.length === 0 && <p className="sinav-ipucu">Soldan soru ekledikçe kağıt burada oluşur. Başlıktaki yazılara tıklayıp düzenleyebilirsin.</p>}
            {gorunen === "anahtar" ? (
              <CevapAnahtari belge={belge} gruplar={gruplar} />
            ) : gorunen === "hepsi" ? (
              <>
                {gruplar.map((g, i) => <Kagit key={i} belge={belge} ogeler={g} grup={grupAdi(i)} />)}
                <CevapAnahtari belge={belge} gruplar={gruplar} />
              </>
            ) : gorunen === 0 ? (
              <Kagit belge={belge} ogeler={gruplar[0] ?? []} grup={grupAdi(0)} degistir={degistir} ayarDegistir={ayarDegistir} oge={oge} />
            ) : (
              <Kagit key={gorunen} belge={belge} ogeler={gruplar[gorunen] ?? []} grup={grupAdi(gorunen)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
