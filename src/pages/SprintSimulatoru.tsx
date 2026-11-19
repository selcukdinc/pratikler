// Sprint simülatörü (Agile ve Scrum, /agile/sprint): 12 kişilik Kampüs Yemekhanesi
// squad'ıyla Sprint Planning, on iş günü, Review ve Retro. Motor src/scrum/motor.ts,
// senaryo ve görevler pratiğin istemci içeriğinden (icerik/agile/istemci/simulasyon)
// sayfa açılınca yüklenir. Oyun ve tamamlanan görevler yalnızca bu tarayıcıda saklanır;
// sunucuya hiç istek atılmaz.
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  adim,
  baslat,
  bittiMi,
  hedefOgeleri,
  karne,
  secilenPuan,
  tahminiHiz,
  type Durum,
  type Hamle,
  type Oge,
  type Rol,
  type Senaryo,
  type Uyum,
} from "../scrum/motor";
import { tamamlananlariOku, tamamlananlariYaz, type SprintGorevi, type SprintIcerigi } from "../scrum/gorev";
import { aktarimOku, type Aktarim } from "../backlog/aktar";
import "./sprint.css";

const OYUN = "agile:sprint-oyun";
const UYUM_ADI: Record<Uyum, string> = { uygun: "Rehber'e uygun", aykiri: "Rehber'e aykırı", notr: "Etkisiz" };
const ROL_ADI: Record<Rol, string> = { sm: "Scrum Master", po: "Product Owner" };

interface Kayitli {
  gorev: string | null;
  durum: Durum;
  // Backlog Atölyesi'nden aktarılan backlog'la oynanıyor mu
  aktarim?: boolean;
}

function kayitliOku(): Kayitli | null {
  try {
    const s = localStorage.getItem(OYUN);
    const k = s ? (JSON.parse(s) as Kayitli) : null;
    return k?.durum?.surum === 1 ? k : null;
  } catch {
    return null;
  }
}

function kayitliYaz(k: Kayitli) {
  try {
    localStorage.setItem(OYUN, JSON.stringify(k));
  } catch {
    // Depolama kapalı: oyun yalnız bu sekmede sürer
  }
}

const yeniTohum = () => Math.floor(Math.random() * 1e6) + 1;

export function SprintSimulatoru({ yukle }: { yukle: () => Promise<SprintIcerigi> }) {
  const [icerik, setIcerik] = useState<SprintIcerigi | null>(null);
  useEffect(() => {
    let iptal = false;
    void yukle().then((i) => !iptal && setIcerik(i));
    return () => {
      iptal = true;
    };
  }, [yukle]);
  if (!icerik) return <p className="empty">Simülatör yükleniyor…</p>;
  return <Oyun ana={icerik.senaryo} gorevler={icerik.gorevler} />;
}

// Atölyeden gelen backlog, senaryonun ürününün yerine geçer; takım, olaylar ve iyileştirmeler aynı kalır
const aktarilmis = (s: Senaryo, a: Aktarim): Senaryo => ({ ...s, backlog: a.backlog, hedefler: a.hedefler, geriBildirim: a.geriBildirim });

function Oyun({ ana, gorevler }: { ana: Senaryo; gorevler: SprintGorevi[] }) {
  const [aktarim] = useState<Aktarim | null>(() => aktarimOku());
  const [oyun, setOyun] = useState<Kayitli>(() => {
    const k = kayitliOku();
    return k && (!k.aktarim || aktarim) ? k : { gorev: null, durum: baslat(ana, { tohum: yeniTohum() }) };
  });
  const senaryo = oyun.aktarim && aktarim ? aktarilmis(ana, aktarim) : ana;
  const [tamam, setTamam] = useState<Set<string>>(() => tamamlananlariOku());
  const gorev = gorevler.find((g) => g.id === oyun.gorev) ?? null;
  const d = oyun.durum;
  const basarili = !!gorev && gorev.hedef(d, senaryo);

  useEffect(() => kayitliYaz(oyun), [oyun]);
  useEffect(() => {
    if (gorev && basarili && !tamam.has(gorev.id)) {
      const y = new Set(tamam).add(gorev.id);
      setTamam(y);
      tamamlananlariYaz(y);
    }
  }, [gorev, basarili, tamam]);

  const oyna = (h: Hamle) => setOyun({ ...oyun, durum: adim(d, h, senaryo) });
  const basla = (g: SprintGorevi | null, rol: Rol = d.rol, atolye = false) => {
    const s = atolye && aktarim && !g ? aktarilmis(ana, aktarim) : ana;
    setOyun({ gorev: g?.id ?? null, durum: baslat(s, g ? g.ayar : { tohum: yeniTohum(), rol }), aktarim: atolye && !g });
  };

  return (
    <div className="sp">
      <section className="sp-ust" aria-label="Görevler">
        <div className="sp-cipler" role="group" aria-label="Görev seç">
          <button type="button" className="cip" aria-pressed={!gorev && !oyun.aktarim} onClick={() => basla(null)}>
            Serbest oyun
          </button>
          {aktarim && (
            <button type="button" className="cip" aria-pressed={!!oyun.aktarim} onClick={() => basla(null, d.rol, true)}>
              Backlog Atölyesi'ndeki backlog'un
            </button>
          )}
          {gorevler.map((g, i) => (
            <button key={g.id} type="button" className="cip" aria-pressed={gorev?.id === g.id} onClick={() => basla(g)}>
              {tamam.has(g.id) ? "✓ " : ""}
              {i + 1}. {g.ad}
            </button>
          ))}
        </div>
        {gorev ? (
          <div className={`sp-gorev ${basarili ? "sp-iyi" : ""}`}>
            <strong>{gorev.ad}</strong>
            <span>{gorev.ozet}</span>
            {basarili ? <span className="sp-rozet sp-r-uygun">Görev tamamlandı</span> : d.asama === "bitti" ? <span className="sp-rozet sp-r-aykiri">Hedefe ulaşılamadı; yeniden dene.</span> : null}
            <details>
              <summary>İpucu</summary>
              {gorev.ipucu}
            </details>
          </div>
        ) : (
          <div className="sp-gorev">
            <strong>{oyun.aktarim ? "Backlog Atölyesi'nden gelen backlog" : "Serbest oyun"}: {d.sprintSayisi} Sprint</strong>
            {oyun.aktarim && aktarim && aktarim.notlar.length > 0 && (
              <details>
                <summary>Hazırlığın oyuna yansıması ({aktarim.notlar.length} not)</summary>
                <ul>
                  {aktarim.notlar.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </details>
            )}
            <span>
              Rolün:{" "}
              {(["sm", "po"] as Rol[]).map((r) => (
                <button key={r} type="button" className="cip" aria-pressed={d.rol === r} onClick={() => basla(null, r, !!oyun.aktarim)}>
                  {ROL_ADI[r]}
                </button>
              ))}{" "}
              Olaylar her oyunda farklıdır (oyun no {d.tohum}).
            </span>
          </div>
        )}
        <div className="sp-satir">
          <span className="sp-asama">
            Sprint {d.sprint}/{d.sprintSayisi} · {ASAMA_ADI[d.asama]}
            {d.asama === "gun" ? ` · ${d.gun}. gün` : ""}
          </span>
          <button type="button" className="cip" onClick={() => basla(gorev, d.rol, !!oyun.aktarim)}>
            Yeniden başla
          </button>
        </div>
      </section>
      {d.mesaj && <p className="sp-mesaj" role="alert">{d.mesaj}</p>}
      <div className="sp-izgara">
        <div className="sp-sol">
          {d.asama === "planning" && <Planning d={d} s={senaryo} oyna={oyna} />}
          {d.asama === "gun" && <Pano d={d} s={senaryo} />}
          {d.asama === "review" && <Review d={d} s={senaryo} oyna={oyna} />}
          {d.asama === "retro" && <Retro d={d} s={senaryo} oyna={oyna} />}
          {d.asama === "bitti" && <KarneGoster d={d} s={senaryo} />}
        </div>
        <div className="sp-sag">
          <Burndown d={d} s={senaryo} />
          <Gostergeler d={d} />
          {d.asama === "gun" && <Karar d={d} s={senaryo} oyna={oyna} />}
        </div>
      </div>
    </div>
  );
}

const ASAMA_ADI: Record<Durum["asama"], string> = { planning: "Sprint Planning", gun: "Sprint", review: "Sprint Review", retro: "Sprint Retrospective", bitti: "Oyun bitti" };

function OgeSatiri({ o, hedefte, sag }: { o: Oge; hedefte: boolean; sag?: ReactNode }) {
  return (
    <li className="sp-oge">
      <span className="sp-oge-ad">
        {hedefte && <span title="Sprint Goal'e katkı verir" aria-label="Sprint Goal'e katkı verir">★ </span>}
        {o.ad}
      </span>
      <span className="sp-oge-bilgi">
        {o.puan} puan · değer {o.deger}
      </span>
      {sag}
    </li>
  );
}

function Planning({ d, s, oyna }: { d: Durum; s: Senaryo; oyna: (h: Hamle) => void }) {
  const hedef = s.hedefler.find((h) => h.id === d.hedef);
  const katki = (o: Oge) => !!hedef && hedef.etiketler.includes(o.etiket);
  const tahmin = tahminiHiz(d, s);
  const sp = secilenPuan(d);
  return (
    <div className="sp-kutu">
      <h3>Sprint Planning</h3>
      <p className="sp-not">1. Neden: bu Sprint neden değerli? Bir Sprint Goal seç.</p>
      <div className="sp-cipler" role="group" aria-label="Sprint Goal">
        {s.hedefler.map((h) => (
          <button key={h.id} type="button" className="cip" aria-pressed={d.hedef === h.id} onClick={() => oyna({ tur: "hedef", id: h.id })}>
            {h.metin}
          </button>
        ))}
      </div>
      <p className="sp-not">
        2. Ne: Product Backlog'dan öğe seç. Takımın son Sprint'lerdeki hızı yaklaşık <strong>{tahmin} puan</strong>.
      </p>
      <div className="sp-olcek" aria-label={`Seçilen ${sp} puan, tahmini hız ${tahmin}`}>
        <span className={sp > tahmin ? "sp-asim" : ""} style={{ width: `${Math.min(100, (sp / (tahmin * 1.5)) * 100)}%` }} />
        <i style={{ left: `${(1 / 1.5) * 100}%` }} />
      </div>
      <p className="sp-not">
        Sprint Backlog: {sp} puan{sp > tahmin ? " · tahmini hızın üstünde" : ""}
      </p>
      <div className="sp-iki">
        <div>
          <h4>Product Backlog</h4>
          <ol className="sp-liste">
            {d.backlog.map((o) => (
              <OgeSatiri key={o.id} o={o} hedefte={katki(o)} sag={<button type="button" className="cip" onClick={() => oyna({ tur: "sec", id: o.id })}>Ekle</button>} />
            ))}
          </ol>
        </div>
        <div>
          <h4>Sprint Backlog</h4>
          {d.ogeler.length ? (
            <ol className="sp-liste">
              {d.ogeler.map((o) => (
                <OgeSatiri key={o.id} o={o} hedefte={katki(o)} sag={<button type="button" className="cip" onClick={() => oyna({ tur: "birak", id: o.id })}>Çıkar</button>} />
              ))}
            </ol>
          ) : (
            <p className="sp-not">Henüz öğe yok.</p>
          )}
        </div>
      </div>
      <p className="sp-not">3. Nasıl: planı Developers yapar; simülasyonda iş günlere kendiliğinden dağılır.</p>
      <button type="button" className="primary" onClick={() => oyna({ tur: "planlaBitir" })}>
        Sprint'i başlat
      </button>
    </div>
  );
}

function Pano({ d, s }: { d: Durum; s: Senaryo }) {
  const hedef = new Set(hedefOgeleri(d, s).map((o) => o.id));
  const sutunlar: [string, Oge[]][] = [
    ["Yapılacak", d.ogeler.filter((o) => d.kalan[o.id] === o.puan)],
    ["Yapılıyor", d.ogeler.filter((o) => !bittiMi(d, o.id) && d.kalan[o.id]! < o.puan)],
    ["Bitti", d.ogeler.filter((o) => bittiMi(d, o.id))],
  ];
  return (
    <div className="sp-kutu">
      <h3>Sprint panosu</h3>
      <p className="sp-not">Sprint Goal: {s.hedefler.find((h) => h.id === d.hedef)?.metin}</p>
      <div className="sp-pano">
        {sutunlar.map(([ad, liste]) => (
          <div key={ad} className="sp-sutun">
            <h4>
              {ad} <span className="sp-not">({liste.length})</span>
            </h4>
            {liste.map((o) => (
              <div key={o.id} className={`sp-kart ${hedef.has(o.id) ? "sp-hedef" : ""}`}>
                <span>
                  {hedef.has(o.id) ? "★ " : ""}
                  {o.ad}
                </span>
                {!bittiMi(d, o.id) && (
                  <div className="sp-cubuk" aria-hidden="true">
                    <span style={{ width: `${(1 - d.kalan[o.id]! / o.puan) * 100}%` }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="sp-not">
        {d.ayarlar.wip ? `WIP sınırı ${d.ayarlar.wip}: takım yeni işe başlamadan önce başlanmış işi bitiriyor.` : "WIP sınırı yok: herkes her işe başlıyor, iş öğelere eşit bölünüyor."}{" "}
        {d.ayarlar.dodTest ? "DoD'da otomatik test var." : "DoD'da otomatik test yok: biten her öğe teknik borç bırakıyor."}
      </p>
    </div>
  );
}

function Karar({ d, s, oyna }: { d: Durum; s: Senaryo; oyna: (h: Hamle) => void }) {
  const olay = s.olaylar.find((o) => o.id === d.olay);
  const son = d.kayit.at(-1);
  const sonOlay = son && son.sprint === d.sprint ? s.olaylar.find((o) => o.id === son.olay) : undefined;
  const sonSecenek = sonOlay?.secenekler[son!.secim];
  return (
    <div className="sp-kutu">
      {sonSecenek && son && (
        <div className={`sp-geri sp-g-${son.uyum}`}>
          <span className={`sp-rozet sp-r-${son.uyum}`}>{UYUM_ADI[son.uyum]}</span> <strong>{sonOlay!.baslik}:</strong> {sonSecenek.metin}. {sonSecenek.aciklama}
        </div>
      )}
      {olay ? (
        <>
          <h3>
            {d.gun}. gün · {olay.baslik}
          </h3>
          <p>{olay.metin}</p>
          <p className="sp-not">{ROL_ADI[d.rol]} olarak ne yaparsın?</p>
          <div className="sp-secenekler">
            {olay.secenekler.map((sec, i) => (
              <button key={i} type="button" className="sp-secenek" onClick={() => oyna({ tur: "olay", secim: i })}>
                {sec.metin}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h3>{d.gun}. gün</h3>
          <p className="sp-not">Bugün sakin geçiyor. Daily'de Developers Sprint Goal'e ilerlemeyi denetledi ve planı uyarladı.</p>
          <button type="button" className="primary" onClick={() => oyna({ tur: "ilerle" })}>
            {d.gun >= s.gunSayisi ? "Sprint'i bitir" : "Günü bitir"}
          </button>
        </>
      )}
    </div>
  );
}

function Review({ d, s, oyna }: { d: Durum; s: Senaryo; oyna: (h: Hamle) => void }) {
  const son = d.gecmis.at(-1)!;
  const ad = (id: string) => [...d.ogeler, ...d.backlog].find((o) => o.id === id)?.ad ?? id;
  return (
    <div className="sp-kutu">
      <h3>Sprint Review</h3>
      <p className={`sp-geri ${son.hedefTuttu ? "sp-g-uygun" : "sp-g-aykiri"}`}>
        Sprint Goal ({s.hedefler.find((h) => h.id === son.hedef)?.metin}): {son.hedefTuttu ? "tuttu." : "tutmadı."} Bitirilen {son.puan} puan, seçilen{" "}
        {son.secilenPuan} puan; paydaşlar için değer {son.deger}.
      </p>
      <div className="sp-iki">
        <div>
          <h4>Increment'e girenler (Done)</h4>
          <ul className="sp-liste">{son.biten.map((id) => <li key={id}>{ad(id)}</li>)}</ul>
        </div>
        <div>
          <h4>Product Backlog'a dönenler</h4>
          {son.donen.length ? <ul className="sp-liste">{son.donen.map((id) => <li key={id}>{ad(id)}</li>)}</ul> : <p className="sp-not">Yok: seçilen her öğe bitti.</p>}
        </div>
      </div>
      {son.geriBildirim.length > 0 && (
        <>
          <h4>Paydaşların geri bildirimi</h4>
          <ul className="sp-liste">
            {son.geriBildirim.map((g, i) => (
              <li key={i}>
                <strong>{g.kim}:</strong> "{g.metin}"{g.oge ? ` Product Owner bunu Product Backlog'a ekledi: ${g.oge.ad}.` : ""}
              </li>
            ))}
          </ul>
        </>
      )}
      <p className="sp-not">DoD'u karşılamayan iş Increment'e girmez ve gösterilmez; Product Backlog'a döner.</p>
      <button type="button" className="primary" onClick={() => oyna({ tur: "reviewBitir" })}>
        Retrospective'e geç
      </button>
    </div>
  );
}

function KararListesi({ d, s, sprint }: { d: Durum; s: Senaryo; sprint?: number }) {
  const liste = d.kayit.filter((k) => sprint === undefined || k.sprint === sprint);
  if (!liste.length) return <p className="sp-not">Bu Sprint'te karar gerektiren bir olay olmadı.</p>;
  return (
    <ol className="sp-liste">
      {liste.map((k, i) => {
        const o = s.olaylar.find((x) => x.id === k.olay)!;
        const sec = o.secenekler[k.secim]!;
        return (
          <li key={i} className="sp-karar">
            <span className={`sp-rozet sp-r-${k.uyum}`}>{UYUM_ADI[k.uyum]}</span>{" "}
            <strong>
              Sprint {k.sprint}, {k.gun}. gün · {o.baslik}:
            </strong>{" "}
            {sec.metin}. <span className="sp-not">{sec.aciklama}</span>
          </li>
        );
      })}
    </ol>
  );
}

function Retro({ d, s, oyna }: { d: Durum; s: Senaryo; oyna: (h: Hamle) => void }) {
  return (
    <div className="sp-kutu">
      <h3>Sprint Retrospective</h3>
      <p className="sp-not">Bu Sprint'teki kararlar:</p>
      <KararListesi d={d} s={s} sprint={d.sprint} />
      <p className="sp-not">Bir iyileştirme seç; bir sonraki Sprint'te etkisini göreceksin.</p>
      <div className="sp-secenekler">
        {s.iyilestirmeler.map((iy) => (
          <button key={iy.id} type="button" className="sp-secenek" disabled={d.iyilestirmeler.includes(iy.id) && iy.id !== "hicbiri"} onClick={() => oyna({ tur: "iyilestir", id: iy.id })}>
            <strong>{iy.ad}</strong>
            <span className="sp-not">{d.iyilestirmeler.includes(iy.id) && iy.id !== "hicbiri" ? "Zaten uygulanıyor." : iy.aciklama}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function KarneGoster({ d, s }: { d: Durum; s: Senaryo }) {
  const k = karne(d);
  return (
    <div className="sp-kutu">
      <h3>Karne · {k.puan}/100</h3>
      <div className="sp-olcuer">
        <div>
          <span className="sp-olcu">{k.hedefSayisi}/{k.sprintSayisi}</span>
          <span className="sp-not">Sprint Goal tuttu</span>
        </div>
        <div>
          <span className="sp-olcu">{k.teslim}</span>
          <span className="sp-not">Teslim edilen değer</span>
        </div>
        <div>
          <span className="sp-olcu">{k.uygun}/{k.uygun + k.aykiri + k.notr}</span>
          <span className="sp-not">Rehber'e uygun karar</span>
        </div>
      </div>
      <h4>Kararların ve Rehber'e göre açıklamaları</h4>
      <KararListesi d={d} s={s} />
      <p className="sp-not">Yeni bir oyun için "Yeniden başla"ya bas; serbest oyunda olaylar her seferinde değişir.</p>
    </div>
  );
}

function Burndown({ d, s }: { d: Durum; s: Senaryo }) {
  const W = 320;
  const H = 150;
  const p = { l: 30, r: 8, t: 10, b: 22 };
  const ust = Math.max(1, d.burndown[0] ?? secilenPuan(d), ...d.burndown);
  const x = (g: number) => p.l + (g / s.gunSayisi) * (W - p.l - p.r);
  const y = (v: number) => p.t + (1 - v / ust) * (H - p.t - p.b);
  const gercek = d.burndown.map((v, g) => `${x(g)},${y(v)}`).join(" ");
  const bas = d.burndown[0];
  return (
    <div className="sp-kutu">
      <h3>Burndown</h3>
      {d.burndown.length ? (
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Kalan iş: ${d.burndown.map((v) => Math.round(v)).join(", ")} puan`}>
          <line className="sp-eksen" x1={p.l} y1={H - p.b} x2={W - p.r} y2={H - p.b} />
          <line className="sp-eksen" x1={p.l} y1={p.t} x2={p.l} y2={H - p.b} />
          {bas !== undefined && <line className="sp-ideal" x1={x(0)} y1={y(bas)} x2={x(s.gunSayisi)} y2={y(0)} />}
          <polyline className="sp-gercek" points={gercek} />
          <text className="sp-yazi" x={p.l - 4} y={y(ust) + 4} textAnchor="end">
            {Math.round(ust)}
          </text>
          <text className="sp-yazi" x={p.l - 4} y={H - p.b + 4} textAnchor="end">
            0
          </text>
          <text className="sp-yazi" x={x(s.gunSayisi)} y={H - 6} textAnchor="end">
            {s.gunSayisi}. gün
          </text>
        </svg>
      ) : (
        <p className="sp-not">Sprint başlayınca kalan iş burada günlük çizilir.</p>
      )}
      <p className="sp-not">Kesikli çizgi ideal düşüş, düz çizgi kalan iş.</p>
    </div>
  );
}

function Gostergeler({ d }: { d: Durum }) {
  const liste: [string, number, boolean][] = useMemo(
    () => [
      ["Moral", d.g.moral, false],
      ["Odak", d.g.odak, false],
      ["Teknik borç", d.g.borc, true],
      ["Paydaş güveni", d.g.guven, false],
    ],
    [d.g],
  );
  return (
    <div className="sp-kutu">
      <h3>Takım</h3>
      {liste.map(([ad, v, ters]) => (
        <div key={ad} className="sp-gosterge">
          <span>{ad}</span>
          <div className={`sp-cubuk ${(ters ? v > 60 : v < 40) ? "sp-c-kotu" : ""}`} role="meter" aria-valuenow={v} aria-valuemin={0} aria-valuemax={100} aria-label={ad}>
            <span style={{ width: `${v}%` }} />
          </div>
          <span className="sp-sayi">{v}</span>
        </div>
      ))}
    </div>
  );
}
