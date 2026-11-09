import { useEffect, useState } from "react";
import { inline } from "../components/Markdown";
import { gorunurYenilikler, hepsiGoruldu, useSonGorulen, uyeRolu } from "../lib/yenilik";
import { useOturum } from "../lib/oturum";
import type { Kitle } from "../yenilikler";

const tarihYaz = (t: string) =>
  new Date(`${t}T12:00:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

const KITLE_ADI: Record<Exclude<Kitle, "herkes">, { ad: string; aciklama: string }> = {
  akademisyen: { ad: "Akademisyen", aciklama: "Yalnızca akademisyenler ve yöneticiler görür" },
  yonetici: { ad: "Yönetici", aciklama: "Yalnızca yöneticiler görür" },
};
// Yönetici kimin neyi gördüğünü bilsin diye herkese açık olmayan kayıt ve maddelerde etiket
const KitleEtiketi = ({ k }: { k: Kitle }) =>
  k === "herkes" ? null : <span className={`tag kitle-etiketi kitle-${k}`} title={KITLE_ADI[k].aciklama}>{KITLE_ADI[k].ad}</span>;

export function Yenilikler() {
  const { me, yuklendi } = useOturum();
  // Sayfa açıldığı andaki durum: hangi kayıtlar yeni olarak işaretlenecek
  const son = useSonGorulen();
  const [acilistaGorulen] = useState(son);
  useEffect(() => {
    if (yuklendi) hepsiGoruldu(me);
  }, [yuklendi, me]);
  const rol = uyeRolu(me);
  const etiketli = rol === "admin" || rol === "akademisyen";

  return (
    <div className="yenilikler">
      <p className="hint">
        Sitede değişen her şey burada, en yenisi en üstte. Bir hata ya da öneri için giriş yapıp Mesajlarım'dan yazabilirsin.
      </p>
      <ol className="yenilik-listesi">
        {gorunurYenilikler(rol).map((y) => (
          <li key={y.pr} className={y.pr > acilistaGorulen ? "yenilik yeni" : "yenilik"}>
            <header>
              <time dateTime={y.tarih}>{tarihYaz(y.tarih)}</time>
              {y.pr > acilistaGorulen && <span className="tag yeni-etiket">Yeni</span>}
              {etiketli && <KitleEtiketi k={y.kitle} />}
            </header>
            <h3>{y.baslik}</h3>
            <ul>
              {y.maddeler.map((m, i) => (
                <li key={i}>
                  {inline(m.metin)}
                  {etiketli && m.kitle !== y.kitle && <> <KitleEtiketi k={m.kitle} /></>}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
