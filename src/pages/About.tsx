import { PRATIK, SITE_ADI } from "../lib/pratik";
import { catiAdresi } from "../../icerik/index";
import { Markdown } from "../components/Markdown";
import { REPO_URL } from "../lib/api";
import { tabanaEkle } from "../lib/router";
import { BAGIMSIZLIK_BASLIK, BAGIMSIZLIK_METNI } from "../lib/bagimsizlik";

const GELISTIRICI_URL = "https://github.com/selcukdinc";

export function About() {
  return (
    <div className="about">
      <h2>{SITE_ADI}</h2>
      <p>{PRATIK.aciklama} Açık kaynaklı, ücretsiz bir pratik sitesidir ve <a href={catiAdresi}>Pratikler</a> çatısı altındaki diğer sitelerle aynı hesabı kullanır.</p>
      <h3>Kaynak</h3>
      <Markdown text={PRATIK.kaynakAciklamasi} />
      <h3>Bağımsızlık</h3>
      <p>
        <strong>{BAGIMSIZLIK_BASLIK}</strong> {BAGIMSIZLIK_METNI}
      </p>
      {PRATIK.bagimsizlikNotu && <p>{PRATIK.bagimsizlikNotu}</p>}
      <h3>Gizlilik</h3>
      <ul>
        <li>Reklam yok, analitik ya da takip çerezi yok.</li>
        <li>İlk cevabını gönderdiğinde ilerlemeni tutmak için tek bir oturum çerezi yazılır.</li>
        <li>Tema ve karma test ayarların yalnızca bu tarayıcıda saklanır.</li>
      </ul>
      <p>
        Ayrıntılar <a href={tabanaEkle("/gizlilik")}>gizlilik metninde</a>.
      </p>
      <h3>Geliştirici</h3>
      <div className="kunye">
        {/* Fotoğraf sitenin kendisinden gelir; GitHub'a istek gitmez */}
        <img src="/gelistirici.jpg" alt="" width={72} height={72} className="kunye-foto" />
        <div>
          <strong className="kunye-ad">Selçuk Dinç</strong>
          <ul className="kunye-baglantilar">
            <li><a href={GELISTIRICI_URL} target="_blank" rel="noreferrer">GitHub profili</a></li>
            <li><a href={REPO_URL} target="_blank" rel="noreferrer">Projenin deposu</a> (GPL-3.0)</li>
          </ul>
        </div>
      </div>

      <h3>Proje</h3>
      <p>
        Kaynak kodu açık. Bir hata ya da yanlış soru gördüysen{" "}
        <a href={`${REPO_URL}/issues/new`} target="_blank" rel="noreferrer">GitHub'da bildirebilirsin</a>. Projeyi beğendiysen
        depoya <a href={REPO_URL} target="_blank" rel="noreferrer">yıldız verebilirsin</a>.
      </p>
    </div>
  );
}
