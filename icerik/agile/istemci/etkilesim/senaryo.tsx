// Zor durumlar (12-13. üniteler): "Scrum Master şimdi ne yapar?" dallanan senaryoları,
// anti-pattern avı ve bağımlılık panosu. Senaryo verisi düz nesnedir; senaryo.test.ts her
// dalın bir sona ulaştığını ve her adımda Rehber'e uygun bir seçenek olduğunu denetler.
// Hepsi tarayıcıda çalışır, istek atmaz.
import { useState } from "react";

// ---------------- dallanan senaryolar ----------------

export type SenaryoUyum = "uygun" | "riskli" | "aykiri";

export interface SenaryoSecenegi {
  metin: string;
  uyum: SenaryoUyum;
  sonuc: string;
  // Sonraki adım; verilmezse senaryo biter
  sonra?: string;
}

export interface SenaryoAdimi {
  metin: string;
  secenekler: SenaryoSecenegi[];
}

export interface DallananSenaryo {
  id: string;
  ad: string;
  baslangic: string;
  adimlar: Record<string, SenaryoAdimi>;
}

export const SENARYOLAR: DallananSenaryo[] = [
  {
    id: "yonetici",
    ad: "Sprint'in ortasında yönetici",
    baslangic: "a",
    adimlar: {
      a: {
        metin: "Sprint'in altıncı günü. Bölüm yöneticisi doğrudan Ayşe'nin masasına gelip yeni bir raporun bu Sprint'te yetişmesini istedi. Ayşe sana bakıyor.",
        secenekler: [
          { metin: "Yöneticiyle birlikte Elif'in (PO) yanına git", uyum: "uygun", sonuc: "Yeni iş PO'dan geçer; Product Backlog tek iş kaynağıdır. Ayşe'yi aradan çıkardın.", sonra: "b" },
          { metin: "Ayşe'ye \"yap, sonra konuşuruz\" de", uyum: "aykiri", sonuc: "Görünmeyen iş Sprint Goal'ü riske attı ve PO'yu devre dışı bıraktı. Üç gün sonra hedef öğelerinden biri yetişmedi; Review'da kimse nedenini bilmiyordu.", sonra: "c" },
          { metin: "Yöneticiye Scrum'da Sprint ortasında iş alınmadığını söyle ve gönder", uyum: "riskli", sonuc: "Kural doğru ama yönetici dinlenmedi ve isteğin nereye gideceğini öğrenmedi. Ertesi gün doğrudan Can'a gitti.", sonra: "c" },
        ],
      },
      b: {
        metin: "Elif raporun değerli olduğunu ama Sprint Goal'ü bozmadan sığmayacağını söyledi. Yönetici \"rektörlük bekliyor, iki hafta bekleyemem\" diye ısrar ediyor.",
        secenekler: [
          { metin: "Elif rapor için en küçük işe yarar parçayı bulsun; Developers bunun Sprint Goal'ü riske atıp atmadığına baksın", uyum: "uygun", sonuc: "Developers kapsamı PO ile yeniden görüştü: hedefe katkısı olmayan bir öğe Product Backlog'a döndü, raporun tek tablosu sığdı. Sprint Goal korundu, yönetici de bir şey aldı." },
          { metin: "Sprint'i iptal edip rapor için yeni Sprint başlat", uyum: "aykiri", sonuc: "Sprint Goal geçersizleşmedi; iptal bütün planlama emeğini boşa harcadı ve takım bir sonraki planı ciddiye almadı." },
          { metin: "Kararı tamamen Elif'e bırak, sen konuşmadan çık", uyum: "riskli", sonuc: "Sıralama Elif'in kararıdır, doğru. Ama SM organizasyona da hizmet eder: yöneticiye Sprint'in neden korunduğunu anlatacak kişi sendin." },
        ],
      },
      c: {
        metin: "Bir hafta sonra Retro. Takım \"yönetici her Sprint araya giriyor\" diye yakınıyor.",
        secenekler: [
          { metin: "Yöneticiyi Sprint Review'a davet et ve isteklerini orada Product Backlog'a nasıl ekleyeceğini birlikte kurun", uyum: "uygun", sonuc: "Yönetici artık isteğinin nereye gideceğini biliyor; Review'da gördüğüne göre Elif'le sıralamayı konuşuyor. Kesintiler azaldı." },
          { metin: "Takıma \"yönetici bu, yapacak bir şey yok\" de", uyum: "aykiri", sonuc: "Engel sahipsiz kaldı. SM'nin işi engelin kaldırılmasına neden olmaktır." },
        ],
      },
    },
  },
  {
    id: "onay",
    ad: "Onaya giden story",
    baslangic: "a",
    adimlar: {
      a: {
        metin: "Elif her story'yi yazdıktan sonra Teknik Liderlik'in onayına götürüyor. Onay ortalama dokuz gün sürüyor; Sprint Planning'de seçilecek hazır öğe kalmadı.",
        secenekler: [
          { metin: "Akışı görünür kıl: story'lerin onayda beklediği süreyi ölç ve Teknik Liderlik'le Elif'i aynı masaya getir", uyum: "uygun", sonuc: "Dokuz günlük bekleme bir sayı olunca konuşulabilir oldu. Teknik Liderlik onayın aslında mimari riskler için istendiğini söyledi.", sonra: "b" },
          { metin: "Story'leri onay beklemeden Sprint'e al", uyum: "riskli", sonuc: "Akış hızlandı ama kurum kuralını tek başına çiğnedin; iki hafta sonra Teknik Liderlik bütün story'leri yeniden onaya çağırdı.", sonra: "b" },
          { metin: "Onay sürecini olduğu gibi kabul et, Planning'i iki hafta ertele", uyum: "aykiri", sonuc: "Sprint'ler sabit uzunluktadır; Planning ertelenmez. Sorun da yerinde duruyor." },
        ],
      },
      b: {
        metin: "Teknik Liderlik mimari riski olan işleri görmek istiyor. Elif ise sıralama kararının kendisinde olmasını istiyor.",
        secenekler: [
          { metin: "Teknik Liderlik refinement'a katılsın ve riskli öğeleri orada konuşsun; onay kapısı kalksın, sıralama Elif'te kalsın", uyum: "uygun", sonuc: "Teknik bilgi akışa girdi, bekleme kalktı. Rehber: PO'nun kararlarına organizasyon saygı duyar; PB'yi değiştirmek isteyen PO'yu ikna eder." },
          { metin: "Sıralamayı Teknik Liderlik'e devret, Elif yalnızca story yazsın", uyum: "aykiri", sonuc: "PO bir vekile dönüştü; Product Backlog'dan hesap verebilir kimse kalmadı." },
          { metin: "Onayı haftada bir toplu toplantıya çevir", uyum: "riskli", sonuc: "Bekleme dokuz günden ortalama üç güne indi ama kapı hâlâ duruyor." },
        ],
      },
    },
  },
  {
    id: "smsiz",
    ad: "Scrum Master'sız squad",
    baslangic: "a",
    adimlar: {
      a: {
        metin: "Yeni katıldığın squad'da Scrum Master yok. Retro'lar on dakikada bitiyor, hep aynı üç madde yazılıyor. Sen bir geliştiricisin.",
        secenekler: [
          { metin: "Bir sonraki Retro'yu kolaylaştırmayı öner; tek bir iyileştirme seçip Sprint Backlog'a koyun", uyum: "uygun", sonuc: "Retro'dan ilk kez sahibi ve ölçüsü olan bir madde çıktı. Takım iki hafta sonra işe yarayıp yaramadığına baktı.", sonra: "b" },
          { metin: "Retro'ları kaldırmayı öner, zaten işe yaramıyor", uyum: "aykiri", sonuc: "Takım iyileşme noktasını kaybetti; aynı sorunlar artık hiç konuşulmuyor." },
          { metin: "Bir şey söyleme, yeni geldin", uyum: "riskli", sonuc: "Anlaşılır bir çekingenlik. Ama Retro herkesin; gözlemin değerliydi." },
        ],
      },
      b: {
        metin: "İyileştirmeler işe yarıyor ama her Sprint biri kolaylaştırmak zorunda kalıyor ve organizasyondaki engelleri kimse üstlenmiyor.",
        secenekler: [
          { metin: "Tribe yönetimiyle Scrum Master hesap verebilirliğinin neden gerektiğini, yaşanan örneklerle konuş", uyum: "uygun", sonuc: "Rehber Scrum Takımı'nı PO, SM ve Developers olarak tanımlar. Somut örnekler (sahipsiz engeller, biçimselleşen etkinlikler) talebi güçlendirdi." },
          { metin: "SM işlerini sessizce sen üstlen, kodlamayı bırak", uyum: "riskli", sonuc: "Takım rahatladı ama bu bir karar değil, bir yük kayması; kimse bunu tanımlamadı." },
        ],
      },
    },
  },
  {
    id: "buyuk",
    ad: "On dört kişilik squad",
    baslangic: "a",
    adimlar: {
      a: {
        metin: "Squad on dört kişiye çıktı. Daily 30 dakika sürüyor, Planning yarım gün; iki grup birbirinin ne yaptığını bilmiyor.",
        secenekler: [
          { metin: "Takımla birlikte bölünmeyi konuş: aynı Product Goal, Product Backlog ve PO'yu paylaşan iki takım", uyum: "uygun", sonuc: "Rehber: takım çok büyürse aynı ürüne odaklanan birden çok uyumlu Scrum Takımı'na bölünmesi düşünülmelidir.", sonra: "b" },
          { metin: "Daily'yi haftada üçe indir", uyum: "aykiri", sonuc: "Daily her gün yapılır; seyrekleşince takım eski planla çalışır. Kök neden takımın büyüklüğü." },
          { metin: "Herkes Daily'de 1 dakika konuşsun", uyum: "riskli", sonuc: "Süre kısaldı ama Daily hâlâ kişi kişi bir rapor turu." },
        ],
      },
      b: {
        metin: "İki takım nasıl ayrılmalı? Bir öneri: arayüz takımı ve servis takımı.",
        secenekler: [
          { metin: "Her takım bir müşteri özelliğini uçtan uca bitirebilsin (özellik takımı)", uyum: "uygun", sonuc: "Her öğe tek takımda bitiyor; takımlar arası bağımlılık az. Bağımlılık panosu deneyinde farkı sayılarla görebilirsin." },
          { metin: "Teknik katmana göre ayır: arayüz takımı ve servis takımı", uyum: "riskli", sonuc: "Her özellik iki takıma dokunuyor; bir takım bitirince öteki bekliyor. Entegrasyon sorunları Review'da çıkıyor." },
          { metin: "Her takıma ayrı PO ve ayrı Product Backlog ver", uyum: "aykiri", sonuc: "Aynı ürün için iki backlog, iki ayrı sıralama demek; hangisinin önce geleceğine kimse karar veremiyor." },
        ],
      },
    },
  },
];

const UYUM_ADI: Record<SenaryoUyum, string> = { uygun: "Rehber'e uygun", riskli: "Riskli", aykiri: "Rehber'e aykırı" };
const UYUM_SINIF: Record<SenaryoUyum, string> = { uygun: "ag-iyi", riskli: "", aykiri: "ag-kotu" };

export function DallananSenaryolar() {
  const [sec, setSec] = useState(0);
  const [yol, setYol] = useState<{ adim: string; secim: number }[]>([]);
  const s = SENARYOLAR[sec]!;
  const sonAdim = yol.length ? s.adimlar[yol.at(-1)!.adim]!.secenekler[yol.at(-1)!.secim]!.sonra : s.baslangic;
  const bitti = yol.length > 0 && !sonAdim;
  const degistir = (i: number) => {
    setSec(i);
    setYol([]);
  };
  return (
    <div className="ag">
      <div className="ag-secim" role="group" aria-label="Senaryo">
        {SENARYOLAR.map((x, i) => (
          <button key={x.id} type="button" className="cip" aria-pressed={i === sec} onClick={() => degistir(i)}>
            {x.ad}
          </button>
        ))}
      </div>
      <ol className="ag-liste">
        {yol.map((y, i) => {
          const a = s.adimlar[y.adim]!;
          const c = a.secenekler[y.secim]!;
          return (
            <li key={i} className="ag-kutu">
              <span>{a.metin}</span>
              <span className="ag-not">Seçimin: {c.metin}</span>
              <span className={`ag-sonuc ${UYUM_SINIF[c.uyum]}`}>
                <strong>{UYUM_ADI[c.uyum]}.</strong> {c.sonuc}
              </span>
            </li>
          );
        })}
        {sonAdim && (
          <li className="ag-kutu">
            <span>{s.adimlar[sonAdim]!.metin}</span>
            <div className="ag-liste">
              {s.adimlar[sonAdim]!.secenekler.map((c, i) => (
                <button key={i} type="button" className="cip ag-senaryo-sec" onClick={() => setYol([...yol, { adim: sonAdim, secim: i }])}>
                  {c.metin}
                </button>
              ))}
            </div>
          </li>
        )}
      </ol>
      <div className="ag-satir">
        {bitti && <p className="ag-not">Senaryo bitti. Başka bir yolu da dene: her seçimin sonucu farklı.</p>}
        {yol.length > 0 && (
          <button type="button" className="cip" onClick={() => setYol([])}>
            Baştan başla
          </button>
        )}
      </div>
    </div>
  );
}

// ---------------- anti-pattern avı ----------------

export interface GunlukSatiri {
  metin: string;
  // Sorunlu satırsa nedeni; değilse undefined
  sorun?: string;
  neden?: string;
}

export const GUNLUK: GunlukSatiri[] = [
  { metin: "1. Sprint, Planning: Elif hedefi \"menü ve ödemeden ne yetişirse\" diye yazdı.", sorun: "Sprint Goal yok", neden: "Öğe listesi hedef değildir; tek bir amaç seçilmeliydi." },
  { metin: "1. Sprint, 2. gün: Daily 15 dakikada bitti, takım takılan siparişi konuştu.", neden: "Sprint Goal'e odaklı, time-box içinde bir Daily." },
  { metin: "1. Sprint, 5. gün: Bölüm yöneticisi Mert'e doğrudan bir rapor işi verdi; panoya yazılmadı.", sorun: "Görünmeyen iş", neden: "PO atlandı, iş şeffaf değil; burndown gerçeği göstermiyor." },
  { metin: "1. Sprint, 9. gün: Hedef yetişmeyecek; Sprint iki gün uzatıldı.", sorun: "Uzayan Sprint", neden: "Sprint'ler sabit uzunluktadır; kapsam PO ile görüşülmeliydi." },
  { metin: "1. Sprint, Review: Paydaşlar telefonda menüyü kullandı, iki öneri Product Backlog'a girdi.", neden: "Çalışan Increment ve uyarlanan backlog: Review'un amacı bu." },
  { metin: "1. Sprint, Retro: \"Zaman yok\" denerek atlandı.", sorun: "ScrumBut", neden: "Retro atlanınca sorunlar konuşulmadan tekrar eder." },
  { metin: "2. Sprint, Planning: Takım geçen Sprint'ten 10 puan fazla iş aldı, \"velocity hedefimiz bu\" dendi.", sorun: "Velocity hedefi", neden: "Velocity bir tahmindir; hedefe dönüşünce şişer (Goodhart)." },
  { metin: "2. Sprint, 3. gün: Testler kırıldı; Kerem önce düzeltti, sonra yeni işe geçildi.", neden: "Sürekli entegrasyonda kırık derleme ilk iştir." },
  { metin: "2. Sprint, 6. gün: Ödeme öğesi %90 bitti, \"Done\" sayılıp kapatıldı.", sorun: "Zayıf DoD", neden: "DoD'u karşılamayan iş Increment'e girmez; %90 bitti diye bir durum yok." },
  { metin: "2. Sprint, 8. gün: Burak Daily'de herkese tek tek ne yaptığını sordu ve not aldı.", sorun: "Durum raporu", neden: "Daily Developers içindir ve Sprint Goal'e odaklanır; SM'nin denetim toplantısı değildir." },
  { metin: "2. Sprint, Retro: Takım bir iyileştirme seçti ve sahibiyle Sprint Backlog'a koydu.", neden: "Uygulanabilir bir iyileştirme; Rehber bunun Sprint Backlog'a eklenebileceğini söyler." },
  { metin: "3. Sprint: Her dört Sprint'te bir \"sertleştirme Sprint'i\" planlandı.", sorun: "Sertleştirme Sprint'i", neden: "Increment her Sprint kullanılabilir olmalı; ihtiyaç DoD'un zayıflığını gösterir." },
  { metin: "3. Sprint, Planning: Elif'in seçtiği öğeler Teknik Liderlik'ten onay gelene kadar bekletildi.", sorun: "Onay kapısı", neden: "PO'nun sıralama kararı başka bir onaya bağlanınca akış durur." },
  { metin: "3. Sprint, 4. gün: Canlıda hata çıktı; düzeltildi ve Sprint Backlog'a yazıldı.", neden: "Kullanıcı korundu, iş görünür kaldı." },
];

export function AntiPatternAvi() {
  const [secili, setSecili] = useState<Set<number>>(new Set());
  const [kontrol, setKontrol] = useState(false);
  const sorunlu = GUNLUK.filter((g) => g.sorun).length;
  const bulunan = [...secili].filter((i) => GUNLUK[i]!.sorun).length;
  const yanlis = [...secili].filter((i) => !GUNLUK[i]!.sorun).length;
  const cevir = (i: number) => {
    const y = new Set(secili);
    if (y.has(i)) y.delete(i);
    else y.add(i);
    setSecili(y);
  };
  return (
    <div className="ag">
      <p className="ag-not">Squad'ın üç Sprint'lik günlüğü. Sorunlu gördüğün satırları işaretle, sonra kontrol et. Sağlıklı satırlar da var.</p>
      <ol className="ag-liste">
        {GUNLUK.map((g, i) => (
          <li key={i} className="ag-kutu">
            <label className="ag-gunluk">
              <input type="checkbox" checked={secili.has(i)} onChange={() => cevir(i)} disabled={kontrol} />
              <span>{g.metin}</span>
            </label>
            {kontrol && (secili.has(i) || g.sorun) && (
              <span className={`ag-sonuc ${secili.has(i) === !!g.sorun ? "ag-iyi" : "ag-kotu"}`}>
                {g.sorun ? `${secili.has(i) ? "✓" : "Kaçırdın:"} ${g.sorun}. ` : "✗ Bu satır sağlıklı. "}
                {g.neden}
              </span>
            )}
          </li>
        ))}
      </ol>
      <div className="ag-satir">
        {!kontrol ? (
          <button type="button" className="cip" onClick={() => setKontrol(true)} disabled={!secili.size}>
            Kontrol et
          </button>
        ) : (
          <>
            <p className="ag-not">
              {sorunlu} sorundan {bulunan} tanesini buldun{yanlis ? `, ${yanlis} sağlıklı satırı sorunlu sandın` : ""}.
            </p>
            <button
              type="button"
              className="cip"
              onClick={() => {
                setSecili(new Set());
                setKontrol(false);
              }}
            >
              Baştan başla
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ---------------- G-S13-01: bağımlılık panosu ----------------

export type Katman = "Arayüz" | "Servis" | "Veritabanı" | "Ödeme";
export const KATMANLAR: Katman[] = ["Arayüz", "Servis", "Veritabanı", "Ödeme"];

export const OZELLIKLER: { ad: string; katmanlar: Katman[] }[] = [
  { ad: "Menüde fiyat", katmanlar: ["Arayüz", "Servis"] },
  { ad: "Telefondan sipariş", katmanlar: ["Arayüz", "Servis", "Veritabanı"] },
  { ad: "Kartla ödeme", katmanlar: ["Arayüz", "Servis", "Ödeme"] },
  { ad: "Alerjen filtresi", katmanlar: ["Arayüz", "Servis", "Veritabanı"] },
  { ad: "Bakiye yükleme", katmanlar: ["Arayüz", "Servis", "Veritabanı", "Ödeme"] },
  { ad: "Mutfak ekranı", katmanlar: ["Arayüz", "Servis"] },
];

export type TakimDuzeni = "bilesen" | "ozellik" | "uzman";

// Bir özelliğin dokunduğu takım sayısı: bileşen takımlarında her katman ayrı takım;
// özellik takımlarında tek takım; "uzman"da özellik takımları var ama ödeme yalnız bir
// uzman takımda.
export function takimSayisi(katmanlar: Katman[], d: TakimDuzeni): number {
  if (d === "bilesen") return katmanlar.length;
  if (d === "ozellik") return 1;
  return katmanlar.includes("Ödeme") ? 2 : 1;
}

// Her takımlar arası el değiştirme Sprint içinde bitme olasılığını düşürür
export function sprintteBitme(takim: number, p = 0.8): number {
  return Math.pow(p, takim - 1);
}

export function panoOzeti(d: TakimDuzeni) {
  const takimlar = OZELLIKLER.map((o) => takimSayisi(o.katmanlar, d));
  const bagimlilik = takimlar.reduce((t, n) => t + (n - 1), 0);
  const beklenen = takimlar.reduce((t, n) => t + sprintteBitme(n), 0);
  return { takimlar, bagimlilik, beklenen };
}

const DUZEN_ADI: Record<TakimDuzeni, string> = { bilesen: "Bileşen takımları", ozellik: "Özellik takımları", uzman: "Özellik takımları ve ödeme uzmanı" };

export function BagimlilikPanosu() {
  const [d, setD] = useState<TakimDuzeni>("bilesen");
  const o = panoOzeti(d);
  return (
    <div className="ag">
      <p className="ag-not">Birkaç takım aynı ürüne çalışıyor. Altı özelliğin hangi teknik katmanlara dokunduğu belli; takımları nasıl kurarsan bağımlılık o kadar değişir.</p>
      <div className="ag-secim" role="group" aria-label="Takım düzeni">
        {(Object.keys(DUZEN_ADI) as TakimDuzeni[]).map((k) => (
          <button key={k} type="button" className="cip" aria-pressed={d === k} onClick={() => setD(k)}>
            {DUZEN_ADI[k]}
          </button>
        ))}
      </div>
      <ol className="ag-liste">
        {OZELLIKLER.map((x, i) => (
          <li key={x.ad} className="ag-kutu ag-pano-satir">
            <span>{x.ad}</span>
            <span className="ag-katmanlar">
              {x.katmanlar.map((k) => (
                <span key={k} className="ag-kanban-kart">
                  {k}
                </span>
              ))}
            </span>
            <span className={`ag-sayi ${o.takimlar[i]! > 1 ? "ag-uyari-yazi" : ""}`}>
              {o.takimlar[i]} takım · %{Math.round(sprintteBitme(o.takimlar[i]!) * 100)}
            </span>
          </li>
        ))}
      </ol>
      <div className="ag-izgara">
        <div className="ag-kutu">
          <h4>Takımlar arası bağımlılık</h4>
          <span className="ag-olcu">{o.bagimlilik}</span>
        </div>
        <div className="ag-kutu">
          <h4>Sprint'te bitmesi beklenen</h4>
          <span className="ag-olcu">
            {o.beklenen.toFixed(1).replace(".", ",")} <small>/ 6 özellik</small>
          </span>
        </div>
      </div>
      <p className="ag-not">
        Varsayım: her takım değişikliği bir el değiştirmedir ve özelliğin aynı Sprint'te bitme olasılığını %80'le çarpar. Bileşen takımlarında her özellik birkaç takımı bekler; özellik takımlarında çoğu tek takımda biter. Nadir bir uzmanlık (ödeme) ayrı kalınca bağımlılık yalnızca o özelliklerde kalır.
      </p>
    </div>
  );
}
