// Karışım ayırma tezgâhı: bir karışım ve bir yöntem seçilir; yöntem karışımın
// bileşenleri arasındaki bir fiziksel özellik farkını kullanıyorsa ayırma olur,
// kullanmıyorsa nedeni gösterilir.

import { useState } from "react";

type YontemId = "suzme" | "miknatis" | "huni" | "buharlastirma" | "damitma" | "ayrimsal" | "kristal";

interface Yontem {
  id: YontemId;
  ad: string;
  fark: string;
}

const YONTEMLER: Yontem[] = [
  { id: "suzme", ad: "Süzme", fark: "tanecik boyutu, çözünmeme" },
  { id: "miknatis", ad: "Mıknatısla ayırma", fark: "manyetik özellik" },
  { id: "huni", ad: "Ayırma hunisi", fark: "yoğunluk, birbirinde çözünmeme" },
  { id: "buharlastirma", ad: "Buharlaştırma", fark: "uçuculuk" },
  { id: "damitma", ad: "Basit damıtma", fark: "kaynama noktası" },
  { id: "ayrimsal", ad: "Ayrımsal damıtma", fark: "yakın kaynama noktaları" },
  { id: "kristal", ad: "Kristallendirme", fark: "çözünürlüğün sıcaklıkla değişmesi" },
];

interface Karisim {
  id: string;
  ad: string;
  tur: "homojen" | "heterojen";
  // Bileşenlerin rengi (şekil için): [alt/katı, üst/sıvı]
  renk: [string, string];
  // Doğru yöntemler ve sonuçları; ilk yöntem en uygun olandır
  dogru: Partial<Record<YontemId, string>>;
  // Yanlış yöntemlerin neden işe yaramadığı; yazılmayanlar için genel açıklama kullanılır
  yanlis: Partial<Record<YontemId, string>>;
}

const KARISIMLAR: Karisim[] = [
  {
    id: "kum-su", ad: "Kum ve su", tur: "heterojen", renk: ["#c9a46b", "#8ec5ff"],
    dogru: {
      suzme: "Kum süzgeç kâğıdında kaldı, su süzgeçten geçti. Kum suda çözünmediği için tanecikleri süzgecin gözeneklerinden büyüktür.",
      damitma: "Su buharlaşıp toplama kabında yoğunlaştı, kum balonda kaldı. Çalışır ama gereksiz enerji harcar; süzme daha basittir.",
      buharlastirma: "Su buharlaştı ve kum kaldı. Kum geri alındı ama su kayboldu; ikisini de almak için süzme daha iyidir.",
    },
    yanlis: {
      miknatis: "Kum da su da mıknatısa çekilmez; manyetik özellik farkı yok.",
      huni: "Ayırma hunisi birbirinde çözünmeyen iki sıvı içindir. Kum hunide dibe çöker ve musluğu tıkar.",
    },
  },
  {
    id: "demir-kukurt", ad: "Demir tozu ve kükürt tozu", tur: "heterojen", renk: ["#6b6b6b", "#e8d33f"],
    dogru: {
      miknatis: "Demir tozu mıknatısa yapıştı, sarı kükürt tozu geride kaldı. Karışım ısıtılmadığı için demir kendi manyetik özelliğini koruyor.",
    },
    yanlis: {
      suzme: "İkisi de suda çözünmeyen katılardır; süzgeç kâğıdında birlikte kalırlar.",
      damitma: "İki katıyı damıtmak için önce eritmek ve buharlaştırmak gerekir; demirin kaynama noktası 2800 °C'un üstündedir.",
    },
  },
  {
    id: "tuzlu-su", ad: "Tuzlu su (tuz ve suyun ikisi de istenir)", tur: "homojen", renk: ["#ffffff", "#8ec5ff"],
    dogru: {
      damitma: "Su buharlaştı, soğutucuda yoğunlaşıp toplama kabına damladı; tuz balonda kaldı. İki bileşen de geri alındı.",
    },
    yanlis: {
      suzme: "Tuz suda çözündüğü için iyonları süzgeçten suyla birlikte geçti. Süzüntü hâlâ tuzlu.",
      buharlastirma: "Tuz geri alındı ama su havaya karıştı ve kayboldu. İkisini birden almak için damıtma gerekir.",
      huni: "Tuzlu su tek fazlı homojen bir karışımdır; hunide ayrılacak iki katman oluşmaz.",
      kristal: "Kristallendirme tuzun bir kısmını geri verir ama suyu ayrıca toplamaz. Saf suyu da almak için damıtma gerekir.",
    },
  },
  {
    id: "yag-su", ad: "Zeytinyağı ve su", tur: "heterojen", renk: ["#8ec5ff", "#d8c34a"],
    dogru: {
      huni: "Yoğunluğu küçük olan yağ üstte toplandı; musluk açılınca alttaki su akıtıldı, yağ hunide kaldı.",
    },
    yanlis: {
      suzme: "İki sıvı da süzgeç kâğıdından geçer; tanecik boyutu farkı yok.",
      miknatis: "İki sıvı da mıknatısa çekilmez.",
      damitma: "Damıtma çalışabilir ama yağ yüksek sıcaklıkta bozunabilir; iki katman zaten ayrık olduğu için ayırma hunisi daha basittir.",
    },
  },
  {
    id: "su-alkol", ad: "Su ve etil alkol", tur: "homojen", renk: ["#8ec5ff", "#cfe9ff"],
    dogru: {
      ayrimsal: "Kolon boyunca tekrarlanan buharlaşma ve yoğunlaşma sayesinde önce 78 °C'ta alkol, sonra 100 °C'ta su toplandı.",
      damitma: "Önce alkolce zengin bir sıvı toplandı ama içinde su da var. Kaynama noktaları yakın olduğu için basit damıtma keskin ayırmaz; ayrımsal damıtma daha iyidir.",
    },
    yanlis: {
      suzme: "Su ve alkol birbirinde çözünür; iki sıvı da süzgeçten geçer.",
      huni: "Su ve alkol birbirinde tamamen çözünür; hunide iki katman oluşmaz.",
      buharlastirma: "İki bileşen de uçucudur; buharlaştırınca ikisi de kaybolur.",
    },
  },
  {
    id: "kirli-tuz", ad: "Kirli şap (çözünmeyen toz içeren)", tur: "heterojen", renk: ["#9c8f80", "#e9f3ff"],
    dogru: {
      kristal: "Şap sıcak suda çözüldü, toz sıcak süzmeyle ayrıldı; süzüntü soğuyunca saf şap kristalleri oluştu ve soğuk süzmeyle alındı.",
    },
    yanlis: {
      suzme: "Katıyı doğrudan süzmek tozu ayırmaz; şap ve toz süzgeçte birlikte kalır. Önce sıcak suda çözmek gerekir.",
      miknatis: "Şap da toz da mıknatısa çekilmez.",
      damitma: "Katı bir karışım doğrudan damıtılmaz.",
    },
  },
];

const genelYanlis = (k: Karisim, y: Yontem) =>
  `${y.ad}, bileşenler arasında ${y.fark} farkı olduğunda işe yarar. ${k.ad} karışımında bu fark ayırma için kullanılamıyor.`;

function Duzenek({ yontem, karisim, sonuc }: { yontem: YontemId | null; karisim: Karisim; sonuc: "dogru" | "yanlis" | null }) {
  const [alt, ust] = karisim.renk;
  const ayrildi = sonuc === "dogru";
  // Basit, şematik düzenekler: kap, süzgeç, mıknatıs, huni ya da damıtma balonu
  return (
    <svg viewBox="0 0 320 200" className="lab-svg" role="img" aria-label={`${karisim.ad} için ${yontem ? YONTEMLER.find((y) => y.id === yontem)!.ad : "yöntem seçilmedi"} düzeneği`}>
      <rect x="0" y="0" width="320" height="200" fill="none" />
      {(!yontem || yontem === "buharlastirma" || yontem === "kristal") && (
        <g>
          <path d="M110 70 L110 170 Q110 180 120 180 L200 180 Q210 180 210 170 L210 70" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="112" y={ayrildi && yontem === "buharlastirma" ? 160 : 110} width="96" height={ayrildi && yontem === "buharlastirma" ? 18 : 68} fill={ust} opacity="0.6" />
          {karisim.tur === "heterojen" && !ayrildi && [0, 1, 2, 3, 4, 5].map((i) => <circle key={i} cx={125 + i * 14} cy={165 - (i % 2) * 20} r="4" fill={alt} />)}
          {ayrildi && yontem === "kristal" && [0, 1, 2, 3].map((i) => <rect key={i} x={124 + i * 18} y="164" width="10" height="10" fill="#fff" stroke="currentColor" transform={`rotate(45 ${129 + i * 18} 169)`} />)}
          {yontem && <path d="M130 195 L190 195" stroke="#e8673c" strokeWidth="4" />}
          {yontem === "buharlastirma" && ayrildi && <path d="M140 60 q5 -10 0 -20 M160 60 q5 -10 0 -20 M180 60 q5 -10 0 -20" stroke="currentColor" fill="none" opacity="0.5" />}
        </g>
      )}
      {yontem === "suzme" && (
        <g>
          <path d="M120 30 L200 30 L165 90 L155 90 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M155 90 L155 115 M165 90 L165 115" stroke="currentColor" strokeWidth="2" />
          <path d="M128 36 L192 36 L162 84 L158 84 Z" fill={ayrildi ? alt : ust} opacity="0.7" />
          <path d="M120 120 L120 180 L200 180 L200 120" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="122" y="140" width="76" height="38" fill={ust} opacity={karisim.id === "tuzlu-su" ? 0.9 : 0.5} />
        </g>
      )}
      {yontem === "miknatis" && (
        <g>
          <path d="M80 160 L240 160 L230 180 L90 180 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <circle key={i} cx={100 + i * 16} cy="168" r="4" fill={i % 2 && !ayrildi ? alt : ust} />)}
          <path d="M140 40 L140 90 Q160 110 180 90 L180 40" fill="none" stroke="#d64545" strokeWidth="10" />
          <path d="M140 40 L140 55 M180 40 L180 55" stroke="#4a6fd6" strokeWidth="10" />
          {ayrildi && [0, 1, 2, 3].map((i) => <circle key={i} cx={150 + i * 7} cy="105" r="4" fill={alt} />)}
        </g>
      )}
      {yontem === "huni" && (
        <g>
          <path d="M130 20 Q110 90 155 140 L155 165 M165 165 L165 140 Q210 90 190 20" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M150 158 L170 158" stroke="currentColor" strokeWidth="4" />
          <path d="M126 50 Q118 90 150 125 L170 125 Q202 90 194 50 Z" fill={ust} opacity="0.6" />
          <path d="M150 125 L170 125 L160 138 Z" fill={alt} opacity="0.8" />
          {ayrildi && <rect x="135" y="175" width="50" height="20" fill={alt} opacity="0.7" />}
        </g>
      )}
      {(yontem === "damitma" || yontem === "ayrimsal") && (
        <g>
          <circle cx="70" cy="140" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M37 150 A35 35 0 0 0 103 150 Z" fill={ust} opacity="0.6" />
          <path d="M60 175 L80 175" stroke="#e8673c" strokeWidth="4" />
          <path d={yontem === "ayrimsal" ? "M65 106 L65 40 L75 40 L75 106" : "M65 106 L65 70 L75 70 L75 106"} fill="none" stroke="currentColor" strokeWidth="2" />
          {yontem === "ayrimsal" && [50, 62, 74, 86].map((y) => <path key={y} d={`M65 ${y} L75 ${y + 6}`} stroke="currentColor" />)}
          <path d={yontem === "ayrimsal" ? "M75 45 L250 120" : "M75 75 L250 120"} stroke="currentColor" strokeWidth="2" />
          <path d={yontem === "ayrimsal" ? "M95 45 L255 112" : "M95 75 L255 112"} stroke="#4a8fd6" strokeWidth="8" opacity="0.4" />
          <path d="M240 130 L240 185 L290 185 L290 130" fill="none" stroke="currentColor" strokeWidth="2" />
          {ayrildi && <rect x="242" y="160" width="46" height="23" fill={karisim.id === "su-alkol" ? "#cfe9ff" : "#8ec5ff"} opacity="0.8" />}
        </g>
      )}
    </svg>
  );
}

export default function Ayirma() {
  const [karisimId, setKarisimId] = useState(KARISIMLAR[0]!.id);
  const [yontem, setYontem] = useState<YontemId | null>(null);
  const k = KARISIMLAR.find((x) => x.id === karisimId)!;
  const y = yontem ? YONTEMLER.find((x) => x.id === yontem)! : null;
  const dogruMetin = yontem ? k.dogru[yontem] : undefined;
  const enIyi = Object.keys(k.dogru)[0] as YontemId;
  const sonuc = !yontem ? null : dogruMetin ? "dogru" : "yanlis";

  return (
    <div className="lab-tezgah">
      <fieldset className="lab-secim">
        <legend>1. Karışımı seç</legend>
        <div className="lab-cipler">
          {KARISIMLAR.map((x) => (
            <button key={x.id} className="cip" aria-pressed={x.id === karisimId} onClick={() => { setKarisimId(x.id); setYontem(null); }}>
              {x.ad}
            </button>
          ))}
        </div>
        <p className="hint">Bu bir <strong>{k.tur}</strong> karışımdır.</p>
      </fieldset>
      <fieldset className="lab-secim">
        <legend>2. Yöntemi seç</legend>
        <div className="lab-cipler">
          {YONTEMLER.map((x) => (
            <button key={x.id} className="cip" aria-pressed={x.id === yontem} onClick={() => setYontem(x.id)}>
              {x.ad}
            </button>
          ))}
        </div>
      </fieldset>
      <Duzenek yontem={yontem} karisim={k} sonuc={sonuc} />
      <div className={`lab-sonuc ${sonuc ?? ""}`} aria-live="polite">
        {!y && <p>Bir yöntem seçince düzenek kurulur ve sonucu burada görürsün.</p>}
        {y && dogruMetin && (
          <p>
            <strong>{yontem === enIyi ? "Ayrıldı." : "Ayrıldı, ama en uygun yöntem bu değil."}</strong> {dogruMetin}
          </p>
        )}
        {y && !dogruMetin && (
          <p>
            <strong>Ayrılmadı.</strong> {k.yanlis[y.id] ?? genelYanlis(k, y)}
          </p>
        )}
        {y && <p className="hint">{y.ad} şu farkı kullanır: {y.fark}.</p>}
      </div>
    </div>
  );
}

export { KARISIMLAR, YONTEMLER };
