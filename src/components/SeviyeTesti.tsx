// "Nereden başlamalıyım?" seviye testi: ders listesinin başında açılır. Sorular
// pratiğin istemci içeriğinden gelir (seviyeTesti), her biri bir ünite grubuna
// (kademeye) aittir. Değerlendirme tarayıcıda yapılır, sunucuya istek atılmaz;
// sonuç yalnızca bu tarayıcıda hatırlanır.
import { useState } from "react";
import { inline } from "./Markdown";
import { PRATIK } from "../lib/pratik";
import { href } from "../lib/router";

export interface SeviyeSorusu {
  // Ünite grubunun sırası (0'dan; meta.uniteGruplari)
  grup: number;
  soru: string;
  secenekler: string[];
  // Doğru şıkkın sırası
  dogru: number;
}

export interface SeviyeTestiTanimi {
  sorular: SeviyeSorusu[];
  // Bir grubu geçmiş saymak için o grubun sorularından en az kaç doğru gerekir
  gecme: number;
  // Hepsini geçene öneri (ör. sandbox'ın son kademesi)
  hepsiGectiNotu?: string;
}

const BILMIYORUM = -1;

function anahtar() {
  return `pratik:seviye:${PRATIK.id}`;
}

export function kayitliSeviye(): number | null {
  try {
    const v = localStorage.getItem(anahtar());
    return v === null ? null : Number(v);
  } catch {
    return null;
  }
}

// Sonuç: geçilemeyen ilk grup (hepsi geçildiyse grup sayısı)
export function seviyeHesapla(t: SeviyeTestiTanimi, cevaplar: Record<number, number>): { baslangic: number; dogrular: number[] } {
  const grupSayisi = Math.max(...t.sorular.map((s) => s.grup)) + 1;
  const dogrular = Array.from({ length: grupSayisi }, () => 0);
  t.sorular.forEach((s, i) => {
    if (cevaplar[i] === s.dogru) dogrular[s.grup]!++;
  });
  const baslangic = dogrular.findIndex((d) => d < t.gecme);
  return { baslangic: baslangic < 0 ? grupSayisi : baslangic, dogrular };
}

export function SeviyeTesti({ tanim, onSonuc }: { tanim: SeviyeTestiTanimi; onSonuc: (grup: number) => void }) {
  const [acik, setAcik] = useState(false);
  const [cevaplar, setCevaplar] = useState<Record<number, number>>({});
  const [sonuc, setSonuc] = useState<ReturnType<typeof seviyeHesapla> | null>(null);
  const gruplar = PRATIK.uniteGruplari ?? [];
  const eksik = tanim.sorular.length - Object.keys(cevaplar).length;

  if (!acik)
    return (
      <div className="seviye-kart">
        <div>
          <strong>Nereden başlamalıyım?</strong>
          <span className="hint"> {tanim.sorular.length} soruluk seviye testi, yaklaşık 3 dakika. Bilmediğin soruda "Bilmiyorum" de; tahmin etme.</span>
        </div>
        <button type="button" className="primary" onClick={() => setAcik(true)}>Seviye testini başlat</button>
      </div>
    );

  const bitir = () => {
    const s = seviyeHesapla(tanim, cevaplar);
    setSonuc(s);
    onSonuc(s.baslangic);
    try {
      localStorage.setItem(anahtar(), String(s.baslangic));
    } catch {
      // gizli pencere: sonuç yalnızca bu oturumda görünür
    }
  };

  if (sonuc) {
    const g = gruplar[sonuc.baslangic];
    const ilkUnite = g?.uniteler[0];
    return (
      <div className="seviye-kart seviye-sonuc" aria-live="polite">
        <div>
          <strong>{g ? `Önerilen başlangıç: ${sonuc.baslangic + 1}. ${g.ad}` : "Bütün kademeleri geçtin"}</strong>
          <ul className="seviye-dokum">
            {gruplar.map((x, i) => (
              <li key={x.ad} className={sonuc.dogrular[i]! >= tanim.gecme ? "seviye-gecti" : undefined}>
                {x.ad}: {sonuc.dogrular[i]}/{tanim.sorular.filter((s) => s.grup === i).length}
              </li>
            ))}
          </ul>
          <span className="hint">
            {g
              ? sonuc.baslangic === 0
                ? "En baştan başlamak en sağlamı; ilk üniteler hızlı geçer."
                : `Önceki kademelerin sorularını bildin. Takıldığın bir konu olursa o üniteye dönebilirsin.`
              : tanim.hepsiGectiNotu ?? "Her ünitenin sonundaki testle eksiklerini yoklayabilirsin."}
          </span>
        </div>
        <div className="seviye-dugmeler">
          {ilkUnite !== undefined && <a className="seviye-git" href={href({ page: "ders", hafta: ilkUnite })}>{ilkUnite}. üniteye git</a>}
          <button type="button" onClick={() => { setSonuc(null); setCevaplar({}); }}>Yeniden çöz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="seviye-kart seviye-acik">
      <ol className="seviye-sorular">
        {tanim.sorular.map((s, i) => (
          <li key={i}>
            <fieldset>
              <legend>{inline(s.soru)}</legend>
              {[...s.secenekler.map((x, j) => [x, j] as const), ["Bilmiyorum", BILMIYORUM] as const].map(([x, j]) => (
                <label key={j} className="seviye-sik">
                  <input type="radio" name={`seviye-${i}`} checked={cevaplar[i] === j} onChange={() => setCevaplar({ ...cevaplar, [i]: j })} />
                  <span>{inline(x)}</span>
                </label>
              ))}
            </fieldset>
          </li>
        ))}
      </ol>
      <div className="seviye-dugmeler">
        <button type="button" className="primary" disabled={eksik > 0} onClick={bitir}>
          {eksik > 0 ? `${eksik} soru kaldı` : "Sonucu gör"}
        </button>
        <button type="button" onClick={() => setAcik(false)}>Kapat</button>
      </div>
    </div>
  );
}
