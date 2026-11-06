// /havuz/<kod>: hocanın öğrencilere açtığı soru havuzu. Öğrenci "Çalışmaya başla"
// deyince soru listesi, karma test ve tekrar yalnızca bu sorularla çalışır.

import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { aktifHavuz, havuzaGir, havuzdanCik } from "../lib/havuz";
import { href } from "../lib/router";
import { PRATIK } from "../lib/pratik";
import { Iskelet } from "../components/Iskelet";
import type { HavuzBilgisi } from "../../shared/sinav";

const tarihYazi = (t: string) => new Date(`${t}T12:00:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

export function HavuzGiris({ kod }: { kod: string }) {
  const [h, setH] = useState<HavuzBilgisi | null>(null);
  const [yok, setYok] = useState(false);
  useEffect(() => {
    api.havuz.bilgi(kod).then(setH, () => setYok(true));
  }, [kod]);

  if (yok) {
    return (
      <div className="havuz-giris">
        <h2>Bu havuz bulunamadı</h2>
        <p>Bağlantı yanlış yazılmış ya da hoca havuzu kaldırmış olabilir. <a href={href({ page: "sorular", topic: undefined })}>Bütün sorulara git</a></p>
      </div>
    );
  }
  if (!h) return <Iskelet satir={4} />;
  const acik = aktifHavuz()?.kod === h.kod;
  const oran = h.cozulen !== null && h.soruSayisi ? Math.round((100 * h.cozulen) / h.soruSayisi) : 0;
  return (
    <div className="havuz-giris">
      <p className="soluk">{PRATIK.ad} · soru havuzu</p>
      <h2>{h.ad}</h2>
      <p>
        {h.hoca ? <><strong>{h.hoca}</strong> bu {h.soruSayisi} soruyu seçti.</> : <>Bu havuzda {h.soruSayisi} soru var.</>}
        {h.sonTarih && <> Sınav tarihi: <strong>{tarihYazi(h.sonTarih)}</strong>.</>}
      </p>
      {h.cozulen !== null && h.cozulen > 0 && (
        <div className="havuz-ilerleme">
          <div className="havuz-cubuk" role="progressbar" aria-valuenow={oran} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${oran}%` }} /></div>
          <span>{h.soruSayisi} sorudan {h.cozulen} tanesini doğru çözdün.</span>
        </div>
      )}
      <p>
        Havuza girince <strong>Soru havuzu</strong>, <strong>Karma test</strong> ve <strong>Tekrar</strong> yalnızca bu sorularla çalışır.
        Üst taraftaki şeritten istediğin an çıkıp bütün sorulara dönebilirsin.
      </p>
      <div className="havuz-dugmeler">
        <button className="primary" onClick={() => havuzaGir({ kod: h.kod, ad: h.ad }, href({ page: "sorular", topic: undefined }))}>
          {acik ? "Sorulara devam et" : "Çalışmaya başla"}
        </button>
        {acik && <button onClick={() => havuzdanCik(href({ page: "sorular", topic: undefined }))}>Havuzdan çık</button>}
      </div>
    </div>
  );
}
