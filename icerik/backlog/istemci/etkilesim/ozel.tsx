// Backlog pratiğinin hesaplı şekilleri: araç çevirmeni (G-S2-02), story map ve sürüm
// dilimi (G-S3-02), story kurucu (G-S4-01). Saf denetimler ayrı işlevlerdedir ve test
// edilir (ozel.test.ts). Hepsi tarayıcıda çalışır, istek atmaz.
import { useMemo, useState } from "react";
import { monteCarlo, yuzdelik } from "../../../agile/istemci/etkilesim/olcum";
import { gherkinDenetle, storyDenetle } from "../../../../src/backlog/kurallar";

export { gherkinDenetle, storyDenetle };

// ---------------- G-S2-02: araç çevirmeni ----------------

export const SEVIYE_ADLARI = ["Theme / girişim", "Epic", "Feature", "Story", "Task"] as const;

// Her aracın varsayılan düzeninde seviyelerin karşılığı; null: varsayılan düzende yok
export const ARACLAR: { ad: string; not: string; seviyeler: (string | null)[] }[] = [
  {
    ad: "SAFe",
    not: "Büyük çözümlerde epic ile feature arasında Capability seviyesi de vardır. Epic portföy düzeyinde bir iş gerekçesiyle onaylanır.",
    seviyeler: ["Strategic theme", "Epic (→ Capability)", "Feature", "Story", "Task"],
  },
  {
    ad: "Azure Boards (Agile)",
    not: "Scrum şablonunda User Story yerine Product Backlog Item, Basic şablonunda Issue geçer.",
    seviyeler: [null, "Epic", "Feature", "User Story", "Task"],
  },
  {
    ad: "Jira",
    not: "Varsayılan düzende story, task ve bug aynı seviyededir; epic'in üstüne seviye eklemek ücretli planlarda ya da özel ayarla mümkündür.",
    seviyeler: [null, "Epic", null, "Story / Task / Bug", "Sub-task"],
  },
  {
    ad: "ClickUp",
    not: "Kendi düzeni Space → Folder → List → Task → Subtask'tır. Epic ve feature genelde özel görev türleri (custom task types) ya da klasör ve listelerle kurulur, ilişkilerle bağlanır.",
    seviyeler: ["Space ya da Folder", "Özel görev türü: Epic", "Özel görev türü: Feature", "Task", "Subtask"],
  },
  {
    ad: "Scrum Rehberi",
    not: "Rehber yalnızca Product Backlog öğesinden söz eder; hiyerarşi takımın seçimidir.",
    seviyeler: [null, null, null, "Product Backlog öğesi", "Sprint Planning'de bir günlük ya da daha kısa iş parçaları"],
  },
];

export function AracCevirmeni() {
  const [secili, setSecili] = useState(1);
  const a = ARACLAR[secili]!;
  return (
    <div className="ag">
      <div className="ag-secim" role="group" aria-label="Araç ya da çerçeve">
        {ARACLAR.map((x, i) => (
          <button key={x.ad} type="button" className="cip" aria-pressed={i === secili} onClick={() => setSecili(i)}>
            {x.ad}
          </button>
        ))}
      </div>
      <ol className="ag-liste">
        {SEVIYE_ADLARI.map((s, i) => (
          <li key={s} className="ag-kutu bl-cevir-satir">
            <span className="ag-not">{s}</span>
            <strong>{a.seviyeler[i] ?? "—"}</strong>
          </li>
        ))}
      </ol>
      <p className="ag-sonuc">{a.not}</p>
    </div>
  );
}

// ---------------- G-S3-02: story map ve sürüm dilimi ----------------

export interface MapKart {
  id: string;
  metin: string;
  puan: number;
}

export const OMURGA: { ad: string; kartlar: MapKart[] }[] = [
  {
    ad: "Menüye bak",
    kartlar: [
      { id: "m1", metin: "Günün menüsünü gör", puan: 2 },
      { id: "m2", metin: "Alerjen bilgisini gör", puan: 3 },
      { id: "m3", metin: "Haftalık menü ve fotoğraflar", puan: 5 },
    ],
  },
  {
    ad: "Yemek seç",
    kartlar: [
      { id: "s1", metin: "Tek bir menüyü seç", puan: 2 },
      { id: "s2", metin: "Ek yemek (tatlı, içecek) ekle", puan: 3 },
      { id: "s3", metin: "Favori menüyü kaydet", puan: 5 },
    ],
  },
  {
    ad: "Öde",
    kartlar: [
      { id: "o1", metin: "Bakiyeden öde", puan: 3 },
      { id: "o2", metin: "Kartla bakiye yükle", puan: 5 },
      { id: "o3", metin: "Kupon ve indirim kullan", puan: 8 },
    ],
  },
  {
    ad: "Teslim al",
    kartlar: [
      { id: "t1", metin: "Sıra numarasını gör", puan: 2 },
      { id: "t2", metin: "Hazır olunca bildirim al", puan: 5 },
      { id: "t3", metin: "Teslim noktasını seç", puan: 5 },
    ],
  },
  {
    ad: "Değerlendir",
    kartlar: [
      { id: "d1", metin: "Yemeği tek dokunuşla puanla", puan: 2 },
      { id: "d2", metin: "Yorum yaz", puan: 3 },
      { id: "d3", metin: "Şikâyeti fotoğrafla bildir", puan: 5 },
    ],
  },
];

// Yolculuğu yürümek için şart adımlar (değerlendirme ilk sürümde olmasa da yolculuk tamamlanır)
export const SART_ADIMLAR = ["Menüye bak", "Yemek seç", "Öde", "Teslim al"];
export const KAPASITE = 16;

export interface DilimSonucu {
  puan: number;
  eksikAdimlar: string[];
  iskelet: boolean;
  kapasiteAsildi: boolean;
  // Bir adımı derinleştirip başka bir şart adımı boş bırakmak
  dikeyDerin: boolean;
}

export function dilimDegerlendir(secili: Iterable<string>): DilimSonucu {
  const s = new Set(secili);
  const puan = OMURGA.flatMap((a) => a.kartlar).filter((k) => s.has(k.id)).reduce((t, k) => t + k.puan, 0);
  const eksikAdimlar = OMURGA.filter((a) => SART_ADIMLAR.includes(a.ad) && !a.kartlar.some((k) => s.has(k.id))).map((a) => a.ad);
  const dikeyDerin = eksikAdimlar.length > 0 && OMURGA.some((a) => a.kartlar.filter((k) => s.has(k.id)).length >= 2);
  return { puan, eksikAdimlar, iskelet: eksikAdimlar.length === 0, kapasiteAsildi: puan > KAPASITE, dikeyDerin };
}

export function StoryMap() {
  const [secili, setSecili] = useState<Set<string>>(new Set());
  const d = dilimDegerlendir(secili);
  const degistir = (id: string) => {
    const y = new Set(secili);
    if (y.has(id)) y.delete(id);
    else y.add(id);
    setSecili(y);
  };
  let sonuc: string;
  let iyi = false;
  if (secili.size === 0) sonuc = "Kartlara dokunarak ilk sürümün dilimine al.";
  else if (d.kapasiteAsildi) sonuc = `Dilim ${d.puan} puan; squad'ın ilk sürüm için ayırdığı ${KAPASITE} puanı aşıyor. Bir adımı inceltmeyi dene.`;
  else if (!d.iskelet)
    sonuc = `Yolculuk yarım kalıyor: ${d.eksikAdimlar.join(", ")} adımında hiç kart yok. ${d.dikeyDerin ? "Bir adımı derinleştirmek yerine her adımdan en ince kartı al." : ""}`;
  else {
    iyi = true;
    sonuc = `Yürüyen iskelet: öğrenci ilk sürümde yemeğini baştan sona alabiliyor (${d.puan} / ${KAPASITE} puan).${secili.size > 4 ? " Kalan puanla en çok öğrenme getirecek kartı seçtin mi?" : ""}`;
  }
  return (
    <div className="ag">
      <p className="ag-not">Üstteki satır omurga: öğrencinin yolculuğu. Kartlar her adımın altında basitten zengine dizili. İlk sürüm {KAPASITE} puana sığmalı.</p>
      <div className="bl-harita">
        {OMURGA.map((a) => (
          <div key={a.ad} className="bl-sutun">
            <h4>{a.ad}</h4>
            {a.kartlar.map((k) => (
              <button key={k.id} type="button" className="cip bl-map-kart" aria-pressed={secili.has(k.id)} onClick={() => degistir(k.id)}>
                {k.metin} <small>{k.puan}</small>
              </button>
            ))}
          </div>
        ))}
      </div>
      <p className={`ag-sonuc ${secili.size === 0 ? "" : iyi ? "ag-iyi" : "ag-kotu"}`}>{sonuc}</p>
      {secili.size > 0 && (
        <div className="ag-satir">
          <button type="button" className="cip" onClick={() => setSecili(new Set())}>
            Baştan başla
          </button>
        </div>
      )}
    </div>
  );
}

// ---------------- G-S4-01: story kurucu ----------------

export const ROLLER = ["bir yurt öğrencisi", "bir akademisyen", "bir yemekhane görevlisi", "bir kullanıcı", "bir geliştirici", "sistem"];
export const ISTEKLER = [
  "akşam yemeğini önceden ayırtmak",
  "siparişimin hazır olduğunu bildirimle öğrenmek",
  "menüyü görmek, yemek ayırtmak ve bakiye yüklemek",
  "uygulamanın hızlı ve kullanışlı olmasını",
  "ödeme tablosuna indeks eklemek",
];
export const FAYDALAR = [
  "derse geç kaldığımda yemeksiz kalmayayım",
  "sırada beklemeyeyim",
  "ertesi gün kaç porsiyon pişireceğimi bileyim",
  "",
];

export function StoryKurucu() {
  const [rol, setRol] = useState(ROLLER[0]!);
  const [istek, setIstek] = useState(ISTEKLER[0]!);
  const [fayda, setFayda] = useState(FAYDALAR[0]!);
  const d = storyDenetle(rol, istek, fayda);
  const secim = (baslik: string, liste: string[], deger: string, ayarla: (x: string) => void) => (
    <div className="ag-kutu">
      <h4>{baslik}</h4>
      <div className="ag-secim" role="group" aria-label={baslik}>
        {liste.map((x) => (
          <button key={x || "yok"} type="button" className="cip" aria-pressed={x === deger} onClick={() => ayarla(x)}>
            {x || "(fayda yazma)"}
          </button>
        ))}
      </div>
      <input className="bl-girdi" value={deger} onChange={(e) => ayarla(e.target.value)} aria-label={`${baslik}: kendin yaz`} />
    </div>
  );
  const cumle = `${rol ? rol.charAt(0).toLocaleUpperCase("tr") + rol.slice(1) : "…"} olarak ${istek || "…"} istiyorum${fayda ? `, böylece ${fayda}` : ""}.`;
  return (
    <div className="ag">
      {secim("Kim? (rol)", ROLLER, rol, setRol)}
      {secim("Ne? (istek)", ISTEKLER, istek, setIstek)}
      {secim("Neden? (fayda)", FAYDALAR, fayda, setFayda)}
      <p className="bl-story">{cumle}</p>
      <div className={`ag-sonuc ${d.iyi ? "ag-iyi" : "ag-kotu"}`}>
        {d.iyi ? (
          "✓ Kalıp sağlam: somut rol, tek istek, açık fayda. Şimdi bunu takımla konuşma ve kabul kriteri zamanı."
        ) : (
          <ul className="bl-uyarilar">
            {d.uyarilar.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        )}
      </div>
      <p className="ag-not">Bu denetim yalnızca kalıba bakar; bir story'nin gerçekten değerli olup olmadığını ancak kullanıcıyla ve takımla konuşmak gösterir.</p>
    </div>
  );
}

// ---------------- G-S6-01: Gherkin kurucu ----------------

export const GHERKIN_ORNEKLERI: { ad: string; given: string; when: string; then: string }[] = [
  { ad: "İyi örnek", given: "öğrencinin bakiyesi 30 TL", when: "öğrenci 45 TL'lik menüyü ayırtmak istediğinde", then: "ayırtma yapılmaz ve \"15 TL eksik\" mesajı görünür" },
  { ad: "Sonuç yok", given: "öğrencinin bakiyesi 30 TL", when: "öğrenci 45 TL'lik menüyü ayırtmak istediğinde", then: "" },
  { ad: "Belirsiz", given: "öğrenci giriş yapmış", when: "menüyü açtığında", then: "menü hızlı ve düzgün görünür" },
  { ad: "Arayüz adımları", given: "öğrenci ana sayfada", when: "Menü butonuna tıklayıp tarihi seçip Ayırt butonuna bastığında", then: "ekranda yeşil kutu çıkar" },
  { ad: "İki davranış", given: "öğrencinin bakiyesi 100 TL", when: "öğrenci yemeği ayırttığında ve sonra iptal ettiğinde", then: "bakiye önce düşer sonra geri gelir" },
];

export function GherkinKurucu() {
  const [g, setG] = useState(GHERKIN_ORNEKLERI[0]!.given);
  const [w, setW] = useState(GHERKIN_ORNEKLERI[0]!.when);
  const [t, setT] = useState(GHERKIN_ORNEKLERI[0]!.then);
  const d = gherkinDenetle(g, w, t);
  const alan = (etiket: string, deger: string, ayarla: (x: string) => void) => (
    <label className="bl-gherkin-satir">
      <strong>{etiket}</strong>
      <input className="bl-girdi" value={deger} onChange={(e) => ayarla(e.target.value)} />
    </label>
  );
  return (
    <div className="ag">
      <div className="ag-secim" role="group" aria-label="Hazır senaryolar">
        {GHERKIN_ORNEKLERI.map((o) => (
          <button
            key={o.ad}
            type="button"
            className="cip"
            aria-pressed={o.given === g && o.when === w && o.then === t}
            onClick={() => {
              setG(o.given);
              setW(o.when);
              setT(o.then);
            }}
          >
            {o.ad}
          </button>
        ))}
      </div>
      <div className="ag-kutu">
        {alan("Verilen (Given)", g, setG)}
        {alan("Olduğunda (When)", w, setW)}
        {alan("O zaman (Then)", t, setT)}
      </div>
      <div className={`ag-sonuc ${d.iyi ? "ag-iyi" : "ag-kotu"}`}>
        {d.iyi ? (
          "✓ Tek davranış, gözlenebilir sonuç, iş dili. Şimdi sınırdaki örneği de yaz: bakiye tam 45 TL olsaydı?"
        ) : (
          <ul className="bl-uyarilar">
            {d.uyarilar.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// ---------------- G-S7-01: pasta dilimleyici ----------------

export type BolmeTuru = "yatay" | "dikey";

// Aynı "önceden sipariş" feature'ı (toplam 24 puan, Sprint başına 8 puan) iki türlü bölünür
export const BOLMELER: Record<BolmeTuru, { story: string; puan: number; kullanici: string | null }[]> = {
  yatay: [
    { story: "Sipariş ve bakiye tabloları", puan: 8, kullanici: null },
    { story: "Sipariş ve ödeme servisleri", puan: 8, kullanici: null },
    { story: "Sipariş ekranları ve bildirim", puan: 8, kullanici: "Öğrenci menü seçip öder, sıra numarası ve hazır bildirimi alır." },
  ],
  dikey: [
    { story: "Günün tek menüsünü bakiyeden öde, sıra numarası al", puan: 8, kullanici: "Öğrenci günün menüsünü önceden ödeyip sıra numarasıyla alabilir." },
    { story: "Ek yemek ve içecek ekle; sipariş hazır bildirimi", puan: 8, kullanici: "Öğrenci tatlı ve içecek ekleyebilir, hazır olunca bildirim alır." },
    { story: "Teslim noktası seç; siparişi iptal et", puan: 8, kullanici: "Öğrenci teslim noktasını seçer, planı değişirse iptal eder." },
  ],
};

export function ilkDegerSprinti(tur: BolmeTuru): number {
  return BOLMELER[tur].findIndex((s) => s.kullanici !== null) + 1;
}

export function PastaDilimleyici() {
  const [tur, setTur] = useState<BolmeTuru>("yatay");
  const [sprint, setSprint] = useState(1);
  const plan = BOLMELER[tur];
  const ilk = ilkDegerSprinti(tur);
  return (
    <div className="ag">
      <div className="ag-satir">
        <div className="ag-secim" role="group" aria-label="Bölme türü">
          <button type="button" className="cip" aria-pressed={tur === "yatay"} onClick={() => setTur("yatay")}>
            Katmanlara böl (yatay)
          </button>
          <button type="button" className="cip" aria-pressed={tur === "dikey"} onClick={() => setTur("dikey")}>
            Değer dilimlerine böl (dikey)
          </button>
        </div>
        <div className="ag-secim" role="group" aria-label="Sprint">
          {[1, 2, 3].map((n) => (
            <button key={n} type="button" className="cip" aria-pressed={sprint === n} onClick={() => setSprint(n)}>
              {n}. Sprint sonu
            </button>
          ))}
        </div>
      </div>
      <ol className="ag-liste">
        {plan.map((s, i) => (
          <li key={s.story} className={`ag-kutu ${i < sprint ? "" : "bl-soluk"}`}>
            <span>
              <strong>{i + 1}. Sprint:</strong> {s.story} <small className="ag-not">({s.puan} puan)</small>
            </span>
            {i < sprint && <span className="ag-not">{s.kullanici ? `Öğrenci için: ${s.kullanici}` : "Öğrenci için: henüz hiçbir şey değişmedi."}</span>}
          </li>
        ))}
      </ol>
      <p className={`ag-sonuc ${sprint >= ilk ? "ag-iyi" : "ag-kotu"}`}>
        {sprint >= ilk
          ? `Öğrenciler ${ilk}. Sprint'in sonunda ilk kez bir şey kullanabildi${tur === "yatay" ? "; geri bildirim ve entegrasyon riski en sona kaldı." : "; sonraki dilimler bu geri bildirimle şekillenebilir."}`
          : `${sprint}. Sprint'in sonunda ${sprint * 8} puanlık iş bitti ama öğrencinin kullanabildiği hiçbir şey yok.`}
      </p>
    </div>
  );
}

// ---------------- G-S10-02: WSJF hesaplayıcı ----------------

export interface WsjfOge {
  ad: string;
  deger: number;
  zaman: number;
  risk: number;
  buyukluk: number;
}

export const WSJF_OLCEK = [1, 2, 3, 5, 8, 13, 20];
export const WSJF_OGELERI: WsjfOge[] = [
  { ad: "Önceden sipariş", deger: 8, zaman: 8, risk: 5, buyukluk: 13 },
  { ad: "Kasada temassız ödeme", deger: 8, zaman: 3, risk: 3, buyukluk: 8 },
  { ad: "Hazır olunca bildirim", deger: 5, zaman: 5, risk: 2, buyukluk: 3 },
  { ad: "Kalabalık saat göstergesi", deger: 5, zaman: 3, risk: 1, buyukluk: 5 },
  { ad: "Kayıt haftası hoş geldin bakiyesi", deger: 3, zaman: 13, risk: 1, buyukluk: 2 },
];

export const gecikmeMaliyeti = (o: WsjfOge) => o.deger + o.zaman + o.risk;
export const wsjfPuani = (o: WsjfOge) => Math.round((gecikmeMaliyeti(o) / o.buyukluk) * 10) / 10;

export function wsjfSirala(ogeler: WsjfOge[]): WsjfOge[] {
  return [...ogeler].sort((a, b) => wsjfPuani(b) - wsjfPuani(a) || gecikmeMaliyeti(b) - gecikmeMaliyeti(a));
}

export function degereGoreSirala(ogeler: WsjfOge[]): WsjfOge[] {
  return [...ogeler].sort((a, b) => b.deger - a.deger || gecikmeMaliyeti(b) - gecikmeMaliyeti(a));
}

// Sırayla yapıldığında her işin bitene kadar ödediği gecikme maliyetinin toplamı
export function toplamGecikme(sira: WsjfOge[]): number {
  let zaman = 0;
  return sira.reduce((t, o) => {
    zaman += o.buyukluk;
    return t + gecikmeMaliyeti(o) * zaman;
  }, 0);
}

export function WsjfHesaplayici() {
  const [ogeler, setOgeler] = useState(WSJF_OGELERI);
  const ayarla = (i: number, alan: keyof Omit<WsjfOge, "ad">, x: number) => setOgeler(ogeler.map((o, j) => (j === i ? { ...o, [alan]: x } : o)));
  const w = wsjfSirala(ogeler);
  const d = degereGoreSirala(ogeler);
  const sec = (i: number, alan: keyof Omit<WsjfOge, "ad">, ad: string) => (
    <select value={ogeler[i]![alan]} aria-label={`${ogeler[i]!.ad}: ${ad}`} onChange={(e) => ayarla(i, alan, Number(e.target.value))}>
      {WSJF_OLCEK.map((x) => (
        <option key={x} value={x}>
          {x}
        </option>
      ))}
    </select>
  );
  const liste = (baslik: string, sira: WsjfOge[]) => (
    <div className="ag-kutu">
      <h4>{baslik}</h4>
      <ol className="bl-wsjf-sira">
        {sira.map((o) => (
          <li key={o.ad}>{o.ad}</li>
        ))}
      </ol>
      <p className="ag-not">Toplam gecikme maliyeti: {toplamGecikme(sira)}</p>
    </div>
  );
  return (
    <div className="ag">
      <div className="bl-tablo-kap">
        <table className="bl-tablo">
          <thead>
            <tr>
              <th>Feature</th>
              <th>İş değeri</th>
              <th>Zaman kritikliği</th>
              <th>Risk azaltma</th>
              <th>Büyüklük</th>
              <th>Gecikme maliyeti</th>
              <th>WSJF</th>
            </tr>
          </thead>
          <tbody>
            {ogeler.map((o, i) => (
              <tr key={o.ad}>
                <td>{o.ad}</td>
                <td>{sec(i, "deger", "iş değeri")}</td>
                <td>{sec(i, "zaman", "zaman kritikliği")}</td>
                <td>{sec(i, "risk", "risk azaltma")}</td>
                <td>{sec(i, "buyukluk", "büyüklük")}</td>
                <td>{gecikmeMaliyeti(o)}</td>
                <td>
                  <strong>{wsjfPuani(o)}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bl-iki">
        {liste("WSJF'ye göre", w)}
        {liste("Yalnızca iş değerine göre", d)}
      </div>
      <p className={`ag-sonuc ${toplamGecikme(w) <= toplamGecikme(d) ? "ag-iyi" : "ag-kotu"}`}>
        WSJF sırası toplam gecikme maliyetini {toplamGecikme(d) - toplamGecikme(w)} birim azaltıyor. Küçük ve acil işler, daha değerli görünen büyük işlerin önüne geçer.
      </p>
      <p className="ag-not">Gecikme maliyeti = iş değeri + zaman kritikliği + risk azaltma; WSJF = gecikme maliyeti / büyüklük. Toplam gecikme, her işin bitene kadar beklediği sürenin gecikme maliyetiyle çarpımlarının toplamıdır.</p>
    </div>
  );
}

// ---------------- G-S12-01: sürüm tahmincisi ----------------

export const SURUM_GECMIS = [18, 26, 22, 30, 20, 24];
export const SURUM_BITEN = 140;

export function surumAraligi(kalan: number, gecmis: number[], artis: number) {
  const net = gecmis.map((h) => h - artis);
  const enAz = Math.min(...net);
  const enCok = Math.max(...net);
  const ort = net.reduce((a, b) => a + b, 0) / net.length;
  const sprint = (h: number) => (h > 0 ? Math.ceil(kalan / h) : Infinity);
  return { iyimser: sprint(enCok), ortalama: sprint(ort), kotumser: sprint(enAz) };
}

export function SurumTahmincisi() {
  const [kalan, setKalan] = useState(120);
  const [artis, setArtis] = useState(0);
  const a = surumAraligi(kalan, SURUM_GECMIS, artis);
  const mc = useMemo(() => monteCarlo(SURUM_GECMIS.map((h) => Math.max(0, h - artis)), kalan, 2000, 7), [kalan, artis]);
  const p50 = yuzdelik(mc, 50);
  const p85 = yuzdelik(mc, 85);
  // Burnup: geçmiş Sprint'ler, sonra kötümser ve iyimser izdüşüm
  const gecmisN = SURUM_GECMIS.length;
  const toplamN = gecmisN + (Number.isFinite(a.kotumser) ? a.kotumser : 12);
  const kapsamSon = SURUM_BITEN + kalan + artis * (toplamN - gecmisN);
  const W = 640;
  const H = 240;
  const x = (i: number) => 36 + (i / toplamN) * (W - 50);
  const y = (v: number) => H - 24 - (v / kapsamSon) * (H - 40);
  const birikim = SURUM_GECMIS.reduce<number[]>((d, h) => [...d, (d.at(-1) ?? 0) + h], [0]);
  const olcek = SURUM_BITEN / birikim.at(-1)!;
  const biten = birikim.map((v) => v * olcek);
  const kapsam = (i: number) => SURUM_BITEN + kalan + Math.max(0, i - gecmisN) * artis;
  const izdusum = (hiz: number) => {
    const n = hiz > 0 ? Math.min(toplamN - gecmisN, Math.ceil(kalan / hiz)) : 0;
    return `${x(gecmisN)},${y(SURUM_BITEN)} ${x(gecmisN + n)},${y(Math.min(kapsam(gecmisN + n), SURUM_BITEN + (hiz + artis) * n))}`;
  };
  const net = SURUM_GECMIS.map((h) => h - artis);
  return (
    <div className="ag">
      <div className="ag-satir">
        <label className="bl-kaydirac">
          Kalan kapsam: <strong>{kalan} puan</strong>
          <input type="range" min={40} max={240} step={10} value={kalan} onChange={(e) => setKalan(Number(e.target.value))} />
        </label>
        <label className="bl-kaydirac">
          Her Sprint eklenen kapsam: <strong>{artis} puan</strong>
          <input type="range" min={0} max={14} step={2} value={artis} onChange={(e) => setArtis(Number(e.target.value))} />
        </label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Sürüm burnup grafiği">
        <line className="bl-eksen" x1={36} y1={H - 24} x2={W - 10} y2={H - 24} />
        <line className="bl-eksen" x1={36} y1={10} x2={36} y2={H - 24} />
        <polyline className="bl-kapsam" points={Array.from({ length: toplamN + 1 }, (_, i) => `${x(i)},${y(kapsam(i))}`).join(" ")} />
        <polyline className="bl-gercek" points={biten.map((v, i) => `${x(i)},${y(v)}`).join(" ")} />
        <polyline className="bl-ideal" points={izdusum(Math.max(...net))} />
        <polyline className="bl-ideal" points={izdusum(Math.min(...net))} />
        <text className="bl-yazi" x={x(gecmisN)} y={H - 8} textAnchor="middle">bugün</text>
        <text className="bl-yazi" x={W - 12} y={y(kapsamSon) - 4} textAnchor="end">kapsam</text>
      </svg>
      <div className="bl-iki">
        <div className="ag-kutu">
          <h4>Aralık (geçmiş hızların en iyisi ve en kötüsü)</h4>
          <p>
            {Number.isFinite(a.kotumser) ? `${a.iyimser} ile ${a.kotumser} Sprint arası; ortalamayla ${a.ortalama}.` : "Kapsam en yavaş Sprint'teki hızdan hızlı büyüyor; bu hızla sürüm hiç bitmeyebilir."}
          </p>
        </div>
        <div className="ag-kutu">
          <h4>Monte Carlo (2000 deneme)</h4>
          <p>{mc.length ? `%50 olasılıkla ${p50}, %85 olasılıkla ${p85} Sprint içinde.` : "Net hız sıfır; sürüm bitmez."}</p>
        </div>
      </div>
      <p className="ag-not">
        Son altı Sprint'in hızları: {SURUM_GECMIS.join(", ")}. Paydaşa tek tarih yerine aralık söyle: "%85 olasılıkla {p85 || "?"} Sprint içinde". Kapsam artışı burnup'ta kapsam çizgisinin yükselmesi olarak görünür; burndown bunu gizlerdi.
      </p>
    </div>
  );
}
