// Kart sınıflandırma şekilleri: her kartta bir durum, altında kategoriler. Seçim
// yapılınca doğru kategori ve gerekçesi görünür. Cynefin, Manifesto değerleri ve
// ilkeleri, israf avı, empirizmin sütunları, "Rehber'de var mı?" ve terim haritası
// aynı bileşeni kendi verisiyle kullanır. Hepsi tarayıcıda çalışır, istek atmaz.
import { useState } from "react";

export interface Kart {
  metin: string;
  dogru: string;
  neden: string;
  // Burndown okuma kartları: 10 günlük kalan iş (ilk değer Sprint başı)
  cizim?: number[];
}

function MiniBurndown({ d }: { d: number[] }) {
  const W = 160;
  const H = 70;
  const ust = Math.max(...d, 1);
  const x = (i: number) => 4 + (i / 10) * (W - 8);
  const y = (v: number) => 4 + (1 - v / ust) * (H - 8);
  return (
    <svg className="ag-mini" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Kalan iş günlere göre: ${d.join(", ")}`}>
      <line className="ag-eksen" x1={4} y1={H - 4} x2={W - 4} y2={H - 4} />
      <line className="ag-ideal" x1={x(0)} y1={y(d[0]!)} x2={x(10)} y2={y(0)} />
      <polyline className="ag-gercek" points={d.map((v, i) => `${x(i)},${y(v)}`).join(" ")} />
    </svg>
  );
}

export function Siniflandir({ kategoriler, kartlar, soru }: { kategoriler: string[]; kartlar: Kart[]; soru?: string }) {
  const [cevaplar, setCevaplar] = useState<Record<number, string>>({});
  const dogru = kartlar.filter((k, i) => cevaplar[i] === k.dogru).length;
  const yanit = Object.keys(cevaplar).length;
  return (
    <div className="ag">
      {soru && <p className="ag-not">{soru}</p>}
      <ol className="ag-liste">
        {kartlar.map((k, i) => {
          const c = cevaplar[i];
          return (
            <li key={i} className="ag-kutu">
              <span>{k.metin}</span>
              {k.cizim && <MiniBurndown d={k.cizim} />}
              <div className="ag-secim" role="group" aria-label="Kategori">
                {kategoriler.map((h) => (
                  <button key={h} type="button" className="cip" aria-pressed={c === h} onClick={() => setCevaplar({ ...cevaplar, [i]: h })}>
                    {h}
                  </button>
                ))}
              </div>
              {c && (
                <span className={`ag-sonuc ${c === k.dogru ? "ag-iyi" : "ag-kotu"}`}>
                  {c === k.dogru ? "✓ " : `✗ Doğrusu: ${k.dogru}. `}
                  {k.neden}
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <div className="ag-satir">
        <p className="ag-not">
          {yanit} / {kartlar.length} kart yanıtlandı, {dogru} doğru.
        </p>
        {yanit > 0 && (
          <button type="button" className="cip" onClick={() => setCevaplar({})}>
            Baştan başla
          </button>
        )}
      </div>
    </div>
  );
}

// ---------------- G-A1-02: Cynefin sınıflandırıcı ----------------

const CYNEFIN = ["Açık", "Karmaşık", "Kompleks", "Kaotik"];
export const CYNEFIN_KARTLARI: Kart[] = [
  { metin: "Yeni dönemde yemekhane menüsünü uygulamaya her hafta aynı adımlarla yüklemek.", dogru: "Açık", neden: "Adımlar belli, herkes biliyor: kontrol listesi yeter (algıla, sınıflandır, karşılık ver)." },
  { metin: "Ödeme sayfasının yoğun saatte neden 8 saniyede açıldığını bulmak.", dogru: "Karmaşık", neden: "Neden-sonuç ilişkisi var ama görmek için uzman analizi gerekir: profil çıkar, sorgu planına bak." },
  { metin: "Öğrencilerin uygulamadan sipariş verip vermeyeceğini, verirse hangi özelliği seveceğini anlamak.", dogru: "Kompleks", neden: "Cevap ancak denedikçe ortaya çıkar: küçük bir sürüm yayınla, davranışı gözle, uyarla." },
  { metin: "Canlı sistem çöktü, öğle yemeği kuyruğunda yüzlerce öğrenci bekliyor.", dogru: "Kaotik", neden: "Önce dengeyi sağla (eski sisteme dön, kasayı elle aç); analiz kriz geçince yapılır." },
  { metin: "Sunucuya bilinen bir güvenlik yamasını belgelenmiş yönergeyle kurmak.", dogru: "Açık", neden: "En iyi uygulama belli ve tekrarlanabilir." },
  { metin: "Mevcut bilgi işlem altyapısına uyacak veritabanı mimarisini seçmek.", dogru: "Karmaşık", neden: "Birden çok iyi seçenek var; uzmanlar ölçüp karşılaştırarak birini seçer." },
  { metin: "Kampüste yeni bir \"önceden sipariş, sırasız teslim\" hizmeti tasarlamak.", dogru: "Kompleks", neden: "Öğrencilerin ve yemekhane çalışanlarının davranışı önceden kestirilemez; deneyle öğrenilir." },
  { metin: "Kişisel veriler sızmış olabilir ve ne kadarının sızdığı bilinmiyor.", dogru: "Kaotik", neden: "Önce sızıntıyı durdur, erişimleri kes; sonra durumu algılayıp kompleks alana taşı." },
  { metin: "Squad'ın büyüdükçe neden yavaşladığını ve hangi düzenin işe yarayacağını bulmak.", dogru: "Kompleks", neden: "İnsanlar ve etkileşimler içeren bir sistem: tek doğru cevap yok, küçük deneylerle (Daily'yi bölmek, iki alt hedef) ilerlenir." },
  { metin: "Bir kütüphaneyi yeni ana sürümüne geçirmek için resmi geçiş kılavuzunu izlemek.", dogru: "Karmaşık", neden: "Kılavuz var ama projeye uygulamak deneyim ve inceleme ister; çoğunlukla analizle çözülür." },
];
export const CynefinSiniflandirici = () => (
  <Siniflandir kategoriler={CYNEFIN} kartlar={CYNEFIN_KARTLARI} soru="Her durum Cynefin'in hangi alanına düşer?" />
);

// ---------------- G-A2-01: Manifesto değerleri ----------------

const DEGERLER = ["Bireyler ve etkileşimler", "Çalışan yazılım", "Müşteriyle iş birliği", "Değişime karşılık vermek"];
export const DEGER_KARTLARI: Kart[] = [
  { metin: "Ayşe ile Deniz bir hatayı araç üzerinde yorum yazışarak değil, yan yana oturup birlikte çözüyor.", dogru: "Bireyler ve etkileşimler", neden: "Süreç ve aracın yerine doğrudan konuşma ve birlikte çalışma." },
  { metin: "Sprint Review'da slayt yerine öğrenciler gerçek telefonda sipariş veriyor.", dogru: "Çalışan yazılım", neden: "İlerlemenin kanıtı belge ya da sunum değil, kullanılan ürün." },
  { metin: "Nurten Hanım her Sprint Review'a katılıyor ve gördüğüne göre öncelikleri birlikte değiştiriyorlar.", dogru: "Müşteriyle iş birliği", neden: "Sözleşmedeki maddeyi savunmak yerine doğru ürünü birlikte bulmak." },
  { metin: "Yeni yönetmelik çıkınca Elif planı bir kenara bırakıp alerjen bilgisini backlog'un başına alıyor.", dogru: "Değişime karşılık vermek", neden: "Yeni bilgi gelince plana sadık kalmak yerine planı değiştirmek." },
  { metin: "Gereksinim belgesi 120 sayfa ama ilk çalışan ekran henüz yok; squad ekranı önce çıkarıp belgeyi kısaltıyor.", dogru: "Çalışan yazılım", neden: "Belge değerli ama çalışan yazılımın önüne geçmemeli." },
  { metin: "Kerem yeni bir onay aracı kurmadan önce takımın gerçekte nasıl çalıştığını bir hafta gözlüyor.", dogru: "Bireyler ve etkileşimler", neden: "Araç insanlara uydurulur, insanlar araca değil." },
  { metin: "Sabit kapsamlı sözleşmeye rağmen bilgi işlemle her ay kapsamı birlikte yeniden sıralıyorlar.", dogru: "Müşteriyle iş birliği", neden: "Sözleşme var ama ilişki pazarlık üzerine değil, ortak hedef üzerine." },
  { metin: "Öğrenci geri bildirimi gelince bir sonraki Sprint'in hedefini değiştiriyorlar.", dogru: "Değişime karşılık vermek", neden: "Plan, öğrenilene göre her Sprint'te güncellenir." },
];
export const DegerTerazisi = () => (
  <Siniflandir kategoriler={DEGERLER} kartlar={DEGER_KARTLARI} soru="Squad her sahnede Manifesto'nun hangi değerinin sol tarafını yaşatıyor?" />
);

// ---------------- G-A2-02: 12 ilke, dört grup ----------------

const ILKE_GRUPLARI = ["1-3 Teslim", "4-6 İnsanlar", "7-10 İlerleme", "11-12 Takım"];
export const ILKE_KARTLARI: Kart[] = [
  { metin: "İlk iki hafta sonunda öğrenciler menüyü telefondan görebiliyor.", dogru: "1-3 Teslim", neden: "1. ilke: değerli yazılımı erken ve sürekli teslim et." },
  { metin: "Son aya gelinmişken gelen alerjen isteği memnuniyetle backlog'a alınıyor.", dogru: "1-3 Teslim", neden: "2. ilke: değişen gereksinimleri geç aşamada bile karşıla." },
  { metin: "Squad iki aylık sürümlerden iki haftalık sürümlere geçiyor.", dogru: "1-3 Teslim", neden: "3. ilke: sık teslim, kısa aralığı tercih ederek." },
  { metin: "Nurten Hanım her gün squad'ın sorularını cevaplayabiliyor.", dogru: "4-6 İnsanlar", neden: "4. ilke: iş tarafı ve geliştiriciler her gün birlikte çalışır." },
  { metin: "Yönetim squad'a hedefi veriyor, nasıl yapılacağını onlara bırakıyor.", dogru: "4-6 İnsanlar", neden: "5. ilke: motive bireylere ortam ver ve güven." },
  { metin: "Uzun e-posta zinciri yerine on dakikalık bir görüntülü görüşme yapılıyor.", dogru: "4-6 İnsanlar", neden: "6. ilke: en etkili iletişim yüz yüze konuşmadır." },
  { metin: "\"Yüzde 90 bitti\" raporu yerine canlıda çalışan özellik sayılıyor.", dogru: "7-10 İlerleme", neden: "7. ilke: ilerlemenin birincil ölçüsü çalışan yazılım." },
  { metin: "Squad fazla mesaiyi bırakıp her Sprint'i aynı tempoda sürdürüyor.", dogru: "7-10 İlerleme", neden: "8. ilke: sürdürülebilir hız." },
  { metin: "Her Sprint'te kodun karmaşık bir kısmı yeniden düzenleniyor ve testleri artırılıyor.", dogru: "7-10 İlerleme", neden: "9. ilke: teknik mükemmellik ve iyi tasarım çevikliği artırır." },
  { metin: "Kimsenin kullanmadığı rapor ekranı yapılmaktan vazgeçiliyor.", dogru: "7-10 İlerleme", neden: "10. ilke: sadelik, yapılmayan işi en çoklama sanatı." },
  { metin: "Mimariyi dışarıdaki bir kurul değil, squad'ın kendisi şekillendiriyor.", dogru: "11-12 Takım", neden: "11. ilke: en iyi tasarımlar kendi kendini örgütleyen takımlardan çıkar." },
  { metin: "Her Sprint sonunda squad nasıl daha iyi çalışacağını konuşup bir şeyi değiştiriyor.", dogru: "11-12 Takım", neden: "12. ilke: düzenli aralıklarla yansıt ve ayarla." },
];
export const IlkeEslestir = () => (
  <Siniflandir kategoriler={ILKE_GRUPLARI} kartlar={ILKE_KARTLARI} soru="Her sahne 12 ilkenin hangi grubuna örnek?" />
);

// ---------------- G-A2-03: Agile mı, yanılgı mı? ----------------

const AGILE_MI = ["Manifesto'yla uyumlu", "Yaygın yanılgı"];
export const AGILE_MI_KARTLARI: Kart[] = [
  { metin: "Agile'da dokümantasyon yazılmaz.", dogru: "Yaygın yanılgı", neden: "Manifesto kapsamlı belgeye değil, çalışan yazılıma öncelik verir; gereken belge yazılır." },
  { metin: "Agile'da plan sık yapılır ve öğrenilene göre değişir.", dogru: "Manifesto'yla uyumlu", neden: "Plan değerlidir; değişime karşılık vermek daha değerlidir." },
  { metin: "Agile, aynı işi yarı sürede bitirmenin yoludur.", dogru: "Yaygın yanılgı", neden: "Vaadi hız değil; değeri erken teslim etmek ve yanlış yönü erken fark etmek." },
  { metin: "Agile = Scrum.", dogru: "Yaygın yanılgı", neden: "Scrum agile çerçevelerden biridir; Kanban, XP ve başkaları da agile'dır." },
  { metin: "Kalite pazarlık konusu değildir; tarih yaklaşınca kapsam esner.", dogru: "Manifesto'yla uyumlu", neden: "Ters üçgen: zaman ve maliyet sabit, kapsam esnek, kalite sabit." },
  { metin: "Agile takımda kimse sorumluluk almaz, herkes istediğini yapar.", dogru: "Yaygın yanılgı", neden: "Kendi kendini yöneten takım, ortak bir hedefe karşı hesap veren takımdır." },
  { metin: "Sözleşmeler agile'da da vardır; ilişki iş birliğine dayanır.", dogru: "Manifesto'yla uyumlu", neden: "Sağdaki maddelerin de değeri vardır." },
  { metin: "Agile yalnızca yazılım için kullanılabilir.", dogru: "Yaygın yanılgı", neden: "Manifesto yazılım için yazıldı ama fikirleri pazarlamada, donanımda, eğitimde de kullanılıyor; Scrum Rehberi 2020 bilerek yazılım dışı bir dil seçti." },
];
export const AgileMi = () => <Siniflandir kategoriler={AGILE_MI} kartlar={AGILE_MI_KARTLARI} />;

// ---------------- G-A3-04: israf avı ----------------

const ISRAFLAR = ["Yarım iş", "Fazla özellik", "Devir teslim", "Bağlam değiştirme", "Bekleme", "Hata"];
export const ISRAF_KARTLARI: Kart[] = [
  { metin: "On dört özellik \"test bekliyor\" sütununda duruyor.", dogru: "Yarım iş", neden: "Başlanmış ama teslim edilmemiş iş, fabrikadaki stok gibidir." },
  { metin: "Kimsenin istemediği \"menüyü PDF olarak indir\" özelliği iki haftada yapıldı.", dogru: "Fazla özellik", neden: "Fazla üretimin yazılımdaki karşılığı." },
  { metin: "Analist belgeyi tasarımcıya, tasarımcı ekranları geliştiriciye, geliştirici kodu test ekibine veriyor.", dogru: "Devir teslim", neden: "Her devirde bilgi kaybolur ve bekleme oluşur." },
  { metin: "Okan aynı gün dört farklı işe atlıyor.", dogru: "Bağlam değiştirme", neden: "Her geçişte zihinsel hazırlık süresi kaybolur." },
  { metin: "Çekme isteği üç gündür onay bekliyor.", dogru: "Bekleme", neden: "İş hazır ama ilerleyemiyor; teslim süresinin çoğu böyle geçer." },
  { metin: "Canlıda çıkan hata yüzünden sprintin üç günü düzeltmeye gitti.", dogru: "Hata", neden: "Hatalar hem düzeltme emeği hem kayıp güven demektir." },
  { metin: "Altı ay önce yapılan bir modülü kimse hatırlamadığı için baştan öğrenmek gerekiyor.", dogru: "Bağlam değiştirme", neden: "Poppendieck'lerin \"yeniden öğrenme\" israfı; bağlam kaybolunca bilgi yeniden kurulur." },
  { metin: "Bilgi işlem müdürünün imzası için iş bir hafta bekliyor.", dogru: "Bekleme", neden: "Onay kuyrukları akış verimliliğini düşürür." },
];
export const IsrafAvi = () => (
  <Siniflandir kategoriler={ISRAFLAR} kartlar={ISRAF_KARTLARI} soru="Squad'ın panosunda ve günlerinde gördüğün her durum hangi israf?" />
);

// ---------------- G-A4-01: sütun dedektifi ----------------

const SUTUNLAR = ["Şeffaflık", "Denetim", "Uyarlama"];
export const SUTUN_KARTLARI: Kart[] = [
  { metin: "Daily'de herkes \"her şey yolunda\" diyor ama Sprint sonunda işlerin yarısı bitmemiş çıkıyor.", dogru: "Şeffaflık", neden: "Gerçek durum görünmüyor; bu yüzden denetim de yanıltıcı oluyor." },
  { metin: "Sprint Review'u iki Sprint'tir \"zaman yok\" diye atlıyorlar.", dogru: "Denetim", neden: "Increment paydaşlarla incelenmiyor; sapma fark edilemez." },
  { metin: "Retro'da aynı sorunlar yazılıyor ama hiçbiri için bir şey değişmiyor.", dogru: "Uyarlama", neden: "Sorun görülüyor ve konuşuluyor ama ayar yapılmıyor." },
  { metin: "\"Bitti\" sütunundaki işlerin bir kısmı test edilmemiş, bunu yalnızca Can biliyor.", dogru: "Şeffaflık", neden: "Definition of Done herkes için aynı değilse \"bitti\" kelimesi yanıltır." },
  { metin: "Paydaşların istekleri e-postalarda kalıyor, Product Backlog'a hiç girmiyor.", dogru: "Şeffaflık", neden: "Product Backlog işin tamamını göstermiyor." },
  { metin: "Daily Scrum'da Sprint Goal'e ilerlemeye kimse bakmıyor, herkes yalnızca ne yaptığını sayıyor.", dogru: "Denetim", neden: "Daily, Sprint Goal'e ilerlemeyi denetleme yeridir; görev sayımı bunu yapmaz." },
  { metin: "Review'da paydaşlar ödeme akışını beğenmedi ama Product Backlog aynı kaldı.", dogru: "Uyarlama", neden: "Denetimden öğrenilen, Product Backlog'a yansımadı." },
];
export const SutunDedektifi = () => (
  <Siniflandir kategoriler={SUTUNLAR} kartlar={SUTUN_KARTLARI} soru="Her sahnede empirizmin hangi sütunu çöküyor?" />
);

// ---------------- G-A4-02: Rehber'de var mı? ----------------

const REHBER = ["Rehber'de var", "Rehber dışı uygulama"];
export const REHBER_KARTLARI: Kart[] = [
  { metin: "Sprint Goal", dogru: "Rehber'de var", neden: "Sprint Backlog'un taahhüdü." },
  { metin: "Story point", dogru: "Rehber dışı uygulama", neden: "Yaygın bir büyüklük tahmini birimi; Rehber yalnızca \"büyüklük\" niteliğinden söz eder." },
  { metin: "Product Goal", dogru: "Rehber'de var", neden: "2020'de eklendi; Product Backlog'un taahhüdü." },
  { metin: "Definition of Ready", dogru: "Rehber dışı uygulama", neden: "Rehber'de yalnızca Definition of Done var; \"hazır\" öğeler refinement'tan söz edilirken anılır." },
  { metin: "Burndown grafiği", dogru: "Rehber dışı uygulama", neden: "2011'de zorunlu olmaktan çıktı, 2020 Rehberi'nde hiç geçmiyor; takım isterse kullanır." },
  { metin: "Product Backlog refinement", dogru: "Rehber'de var", neden: "Sürekli bir faaliyet olarak anlatılır; ayrı bir etkinlik değildir." },
  { metin: "Sprint 0", dogru: "Rehber dışı uygulama", neden: "Her Sprint bir Increment üretmeyi hedefler." },
  { metin: "Daily Scrum'da üç soru", dogru: "Rehber dışı uygulama", neden: "2020'de çıkarıldı; Developers istedikleri yapıyı seçer." },
  { metin: "User story", dogru: "Rehber dışı uygulama", neden: "Product Backlog öğesi için yaygın bir yazım biçimi (Backlog pratiği)." },
  { metin: "Sprint'i iptal etme yetkisi", dogru: "Rehber'de var", neden: "Yalnızca Product Owner, Sprint Goal eskirse iptal edebilir." },
  { metin: "Velocity", dogru: "Rehber dışı uygulama", neden: "Rehber'de geçmez; 9. ünitede tuzaklarıyla işlenir." },
  { metin: "Definition of Done", dogru: "Rehber'de var", neden: "Increment'in taahhüdü." },
];
export const RehberdeVarMi = () => (
  <Siniflandir kategoriler={REHBER} kartlar={REHBER_KARTLARI} soru="Her kavram Scrum Rehberi 2020'nin parçası mı, yoksa yaygın ama Rehber dışı bir uygulama mı?" />
);

// ---------------- G-A4-03: terim haritası ----------------

const KAYNAKLAR = ["Scrum Rehberi", "Spotify modeli", "SAFe ve araçlar", "Şirket rolü"];
export const TERIM_KARTLARI: Kart[] = [
  { metin: "Squad", dogru: "Spotify modeli", neden: "Kendi kendini yöneten ürün takımı; Rehber'deki karşılığı kabaca Scrum Takımı." },
  { metin: "Tribe", dogru: "Spotify modeli", neden: "Aynı ürün alanındaki squad'ların topluluğu; Rehber'de karşılığı yok (Ölçekli Agile pratiği)." },
  { metin: "Chapter (QA, DevOps, Engineering)", dogru: "Spotify modeli", neden: "Aynı uzmanlıktakilerin squad'lar arası grubu; Rehber'de bu kişilerin hepsi Developers." },
  { metin: "Product Owner", dogru: "Scrum Rehberi", neden: "Ürünün değerini en çoklamaktan ve Product Backlog'dan hesap veren tek kişi." },
  { metin: "Scrum Master", dogru: "Scrum Rehberi", neden: "Scrum'un yerleşmesinden ve takımın etkinliğinden hesap verir; şemada yoksa birinin üstlenmesi gerekir." },
  { metin: "Epic", dogru: "SAFe ve araçlar", neden: "Büyük bir iş paketi; SAFe ve Jira, ClickUp gibi araçların hiyerarşisinden (Backlog pratiği)." },
  { metin: "Feature", dogru: "SAFe ve araçlar", neden: "Epic ile story arasındaki seviye; SAFe'te bir Program Increment'e sığan iş." },
  { metin: "Task", dogru: "SAFe ve araçlar", neden: "Araçlardaki en küçük iş birimi; Rehber yalnızca Sprint Backlog'daki işin \"plan\"ından söz eder." },
  { metin: "Tech Lead", dogru: "Şirket rolü", neden: "Rehber'de unvan yok, Spotify modelinin temel rollerinde de yok; şirketlerin kendi teknik liderlik rolü." },
  { metin: "Developers", dogru: "Scrum Rehberi", neden: "Increment'in herhangi bir parçasını oluşturan herkes: yazılımcı, testçi, DevOps mühendisi." },
  { metin: "Guild", dogru: "Spotify modeli", neden: "Tribe'lar arası gönüllü ilgi topluluğu." },
  { metin: "Teknik Liderlik onayı", dogru: "Şirket rolü", neden: "Rehber'de Product Backlog'u değiştirmek isteyen PO'yu ikna eder; onay katmanı şirketin kendi kararıdır." },
];
export const TerimHaritasi = () => (
  <Siniflandir kategoriler={KAYNAKLAR} kartlar={TERIM_KARTLARI} soru="Organizasyon şemalarında gördüğün her terim nereden geliyor?" />
);

// ---------------- G-S5-01: Kim karar verir? ----------------

const KIMLER = ["Product Owner", "Scrum Master", "Developers", "Bütün takım"];
export const KIM_KARTLARI: Kart[] = [
  { metin: "Ödeme ekranı mı önce gelsin, alerjen etiketi mi?", dogru: "Product Owner", neden: "Product Backlog'un sırası PO'nun hesap verebilirliğidir." },
  { metin: "Sipariş servisi hangi veritabanını kullanacak?", dogru: "Developers", neden: "Seçilen işin nasıl yapılacağı yalnızca Developers'ın takdirindedir." },
  { metin: "Bu Sprint'e kaç öğe alınacak?", dogru: "Developers", neden: "Developers PO ile konuşarak seçer; kapasiteyi en iyi onlar bilir." },
  { metin: "Bu Sprint'in Sprint Goal'ü ne olacak?", dogru: "Bütün takım", neden: "PO önerir, Sprint Goal'ü bütün Scrum Takımı Sprint Planning'de birlikte tanımlar." },
  { metin: "Yemekhane ihalesi başka firmaya geçti; Sprint iptal edilsin mi?", dogru: "Product Owner", neden: "Sprint'i yalnızca PO iptal edebilir; Sprint Goal geçersizleştiyse anlamlıdır." },
  { metin: "Daily her gün 35 dakika sürüyor; etkinliği yeniden düzenlemek için kim harekete geçmeli?", dogru: "Scrum Master", neden: "SM etkinliklerin yapılmasını, verimli ve time-box içinde olmasını sağlar. Daily'nin içeriği yine Developers'ındır." },
  { metin: "\"Sipariş geçmişi\" öğesi kaç puan?", dogru: "Developers", neden: "Büyüklüğü işi yapacak Developers tahmin eder." },
  { metin: "Bilgi işlem müdürü takımların ortamına erişim vermiyor; organizasyondaki bu engeli kim kaldırtmalı?", dogru: "Scrum Master", neden: "SM paydaşlar ile takımlar arasındaki engellerin kaldırılmasına neden olur." },
  { metin: "Product Goal \"dönem sonunda öğrencilerin yarısı uygulamadan sipariş versin\" olsun mu?", dogru: "Product Owner", neden: "Product Goal'ü geliştirmek ve iletmek PO'nun işidir." },
  { metin: "\"Alerjen filtresi\" öğesi hangi görevlere bölünecek?", dogru: "Developers", neden: "Sprint Backlog'daki plan Developers tarafından, Developers için yapılır." },
  { metin: "Retro'da hangi iyileştirme bir sonraki Sprint'e alınacak?", dogru: "Bütün takım", neden: "Retro bütün Scrum Takımı'nın etkinliğidir; iyileştirmeyi takım birlikte seçer." },
  { metin: "Testi geliştiriciler de paylaşsın mı, iş nasıl bölünsün?", dogru: "Developers", neden: "Kimin neyi nasıl yapacağına kendi kendini yöneten takım içeride karar verir." },
];
export const KimKararVerir = () => (
  <Siniflandir kategoriler={KIMLER} kartlar={KIM_KARTLARI} soru="Her kararın son sahibi kim? (Rehber 2020)" />
);

// ---------------- G-S6-02: Daily mi, durum raporu mu? ----------------

const DAILY = ["Sprint Goal'e hizmet ediyor", "Durum raporu ya da başka toplantı"];
export const DAILY_KARTLARI: Kart[] = [
  { metin: "\"Ödeme kartı iki gündür testte bekliyor; Sprint Goal için şart. Deniz'le öğleden sonra birlikte bakalım mı?\"", dogru: "Sprint Goal'e hizmet ediyor", neden: "Takılan işi görünür kılıp planı uyarlıyor." },
  { metin: "\"Dün üç toplantıya girdim, e-postaları cevapladım, bugün de toplantım var.\"", dogru: "Durum raporu ya da başka toplantı", neden: "Sprint Goal'le bağı yok; kişisel faaliyet raporu." },
  { metin: "Yönetici herkese tek tek \"bu iş neden hâlâ bitmedi?\" diye soruyor.", dogru: "Durum raporu ya da başka toplantı", neden: "Daily Developers içindir; hesap verme toplantısına dönüşmüş." },
  { metin: "Pano sağdan sola yürünüyor; Done'a en yakın işten başlanıyor.", dogru: "Sprint Goal'e hizmet ediyor", neden: "İşin akışına ve bitirmeye odaklı bir yapı." },
  { metin: "Mert ile Selin veritabanı şemasını 20 dakikadır tartışıyor, kalan on kişi dinliyor.", dogru: "Durum raporu ya da başka toplantı", neden: "Ayrıntılı tartışma Daily'den sonra ilgili kişilerle yapılmalı (park alanı)." },
  { metin: "\"Alerjen filtresi bugün biterse yarın sipariş ekranına geçebiliriz; Ece bana katılabilir mi?\"", dogru: "Sprint Goal'e hizmet ediyor", neden: "Ertesi güne uygulanabilir bir plan üretiyor." },
  { metin: "PO Elif Daily'de Developers'a o günün görevlerini dağıtıyor.", dogru: "Durum raporu ya da başka toplantı", neden: "Görev dağıtmak kendi kendini yönetmeye aykırı; Daily'nin sahibi Developers." },
  { metin: "\"Bu gidişle Sprint Goal'e yetişemeyiz; sipariş geçmişini Elif'le konuşup kapsamdan çıkaralım.\"", dogru: "Sprint Goal'e hizmet ediyor", neden: "İlerlemeyi denetleyip kapsamı PO ile yeniden görüşmeye karar veriyor." },
];
export const DailyMi = () => (
  <Siniflandir kategoriler={DAILY} kartlar={DAILY_KARTLARI} soru="Daily'de duyulan her cümle hangisine benziyor?" />
);

// ---------------- G-S7-01: Retro tahtası ----------------

const RETRO = ["Uygulanabilir iyileştirme", "Belirsiz dilek"];
export const RETRO_KARTLARI: Kart[] = [
  { metin: "Daha iyi iletişim kuralım.", dogru: "Belirsiz dilek", neden: "Sahibi, ölçüsü ve ne zaman yapılacağı yok." },
  { metin: "Kerem bu Sprint test ortamı kurulumunu betiğe döker; kurulum süresini Retro'da karşılaştırırız.", dogru: "Uygulanabilir iyileştirme", neden: "Küçük, sahibi belli, ölçülebilir." },
  { metin: "Kod kalitesine daha çok önem verelim.", dogru: "Belirsiz dilek", neden: "Ne yapılacağı belli değil; DoD'a somut bir madde eklemek daha iyi." },
  { metin: "24 saatten uzun inceleme bekleyen çekme isteklerini Daily'de söyleyeceğiz.", dogru: "Uygulanabilir iyileştirme", neden: "Somut bir davranış; bekleme süresiyle ölçülebilir." },
  { metin: "Herkes daha çok çalışsın.", dogru: "Belirsiz dilek", neden: "Sürdürülebilir hız ilkesine de ters; sorunun kök nedenine inmiyor." },
  { metin: "DoD'a \"ekran okuyucuyla denendi\" maddesini ekliyoruz.", dogru: "Uygulanabilir iyileştirme", neden: "Kaliteyi her öğe için görünür bir ölçüte bağlıyor." },
  { metin: "Paydaşlar bizi daha iyi anlasın.", dogru: "Belirsiz dilek", neden: "Takımın kontrolündeki bir adım yok; ör. \"Review'da paydaş ürünü kendisi kullanır\" olabilirdi." },
  { metin: "Daily'yi panoyu sağdan sola yürüyerek yapacağız; süreyi iki hafta ölçeceğiz.", dogru: "Uygulanabilir iyileştirme", neden: "Denenebilir, ölçülebilir ve bir sonraki Retro'da değerlendirilebilir." },
];
export const RetroTahtasi = () => (
  <Siniflandir kategoriler={RETRO} kartlar={RETRO_KARTLARI} soru="Retro tahtasındaki her madde bir sonraki Sprint'te bir şey değiştirir mi?" />
);

// ---------------- G-S8-02: Artefakt ve taahhüt ----------------

const ARTEFAKT = ["Product Goal", "Sprint Goal", "Definition of Done", "Kabul ölçütü"];
export const ARTEFAKT_KARTLARI: Kart[] = [
  { metin: "Dönem sonunda öğrencilerin yarısı yemeğini uygulamadan sipariş edip sırasız alsın.", dogru: "Product Goal", neden: "Ürünün birkaç Sprint sürecek gelecekteki durumu." },
  { metin: "Bu Sprint öğrenciler alerjenli yemekleri menüden filtreleyebilsin.", dogru: "Sprint Goal", neden: "Bu Sprint'in tek amacı." },
  { metin: "Her değişiklik kod incelemesinden geçer ve otomatik testleri geçer.", dogru: "Definition of Done", neden: "Her öğe için ortak kalite çıtası." },
  { metin: "Fıstık alerjisi seçilince fıstık içeren yemekler listeden çıkar.", dogru: "Kabul ölçütü", neden: "Tek bir öğenin ne yapması gerektiği." },
  { metin: "Test ortamına kurulur ve erişilebilirlik denetiminden geçer.", dogru: "Definition of Done", neden: "Bütün öğelere uygulanan kalite koşulu." },
  { metin: "Sipariş iptal edilince öğrencinin bakiyesine para geri yüklenir.", dogru: "Kabul ölçütü", neden: "\"Sipariş iptali\" öğesine özel davranış." },
  { metin: "Bu Sprint öğrenciler siparişini telefondan verebilsin.", dogru: "Sprint Goal", neden: "Sprint'e odak veren, esneklik bırakan amaç." },
  { metin: "Yemekhane kuyruğunu ortadan kaldıran bir sipariş deneyimi.", dogru: "Product Goal", neden: "Ürünün uzun vadeli hedefi; Product Backlog'un taahhüdü." },
];
export const ArtefaktTaahhut = () => (
  <Siniflandir kategoriler={ARTEFAKT} kartlar={ARTEFAKT_KARTLARI} soru="Her cümle hangi taahhüt ya da kabul ölçütü?" />
);

// ---------------- G-S9-01: burndown okuma ----------------

const BURNDOWN = ["Sağlıklı", "Sona yığılma", "Kapsam eklendi", "Takıldı", "Hedef bitmeyecek"];
export const BURNDOWN_KARTLARI: Kart[] = [
  { metin: "Squad'ın 14. Sprint'i.", cizim: [40, 37, 33, 31, 27, 22, 20, 15, 11, 5, 0], dogru: "Sağlıklı", neden: "İş her gün parça parça Done oluyor; ideal çizgiden küçük sapmalar normaldir." },
  { metin: "Squad'ın 15. Sprint'i.", cizim: [40, 40, 39, 39, 38, 38, 37, 36, 35, 12, 0], dogru: "Sona yığılma", neden: "İşler paralel açılmış, test ve entegrasyon sona kalmış. Son gün inen çizgi çoğu zaman eksik testi gizler." },
  { metin: "Squad'ın 16. Sprint'i.", cizim: [40, 36, 33, 30, 42, 39, 34, 29, 24, 19, 14], dogru: "Kapsam eklendi", neden: "Kalan iş arttı: Sprint'e iş eklendi ya da bir öğe yeniden tahmin edildi. Burnup bunu ayrı bir çizgide gösterirdi." },
  { metin: "Squad'ın 17. Sprint'i.", cizim: [40, 35, 31, 27, 27, 27, 27, 24, 20, 16, 12], dogru: "Takıldı", neden: "Bir engel var ya da herkes yarım işte; Daily'de konuşulması gereken şey tam bu." },
  { metin: "Squad'ın 18. Sprint'i, 5. gün.", cizim: [40, 38, 36, 34, 32, 30], dogru: "Hedef bitmeyecek", neden: "Squad ancak yarısını bitirecek. Erken görüldüyse PO ile kapsam yeniden konuşulur; Sprint Goal korunur." },
  { metin: "Squad'ın 19. Sprint'i.", cizim: [40, 33, 26, 19, 11, 4, 0, 0, 0, 0, 0], dogru: "Sağlıklı", neden: "Erken bitti; Sprint Goal'e hizmet eden yeni iş PO ile konuşularak çekilir. Sürekli oluyorsa tahminler fazla temkinli olabilir." },
];
export const BurndownOkuma = () => (
  <Siniflandir kategoriler={BURNDOWN} kartlar={BURNDOWN_KARTLARI} soru="Kesik çizgi ideal iniş, düz çizgi kalan iş. Her burndown neyi anlatıyor?" />
);

// ---------------- G-S10-02: Scrum mı, Kanban mı? ----------------

const SCRUM_KANBAN = ["Scrum", "Kanban", "İkisinde de"];
export const SCRUM_KANBAN_KARTLARI: Kart[] = [
  { metin: "Sabit uzunlukta, hedefi olan zaman dilimleri.", dogru: "Scrum", neden: "Sprint ve Sprint Goal Scrum'ındır; Kanban'da zorunlu bir ritim yoktur." },
  { metin: "Aşama başına açık bir WIP sınırı.", dogru: "Kanban", neden: "Kanban Rehberi'nin üç pratiğinden biri WIP'i sınırlamaktır. Scrum'da WIP'i Sprint kapsamı dolaylı sınırlar." },
  { metin: "Product Owner, Scrum Master ve Developers rolleri.", dogru: "Scrum", neden: "Kanban yeni rol tanımlamaz; var olan rollerle başlar." },
  { metin: "İşin görünür olduğu bir pano.", dogru: "İkisinde de", neden: "Şeffaflık iki yöntemin de temelidir; Scrum panoyu zorunlu tutmaz ama hemen her takım kullanır." },
  { metin: "Cycle time, throughput ve iş öğesinin yaşı.", dogru: "Kanban", neden: "Kanban'ın dört zorunlu ölçütünden üçü. Scrum takımları da kullanabilir ama Rehber'de geçmez." },
  { metin: "Düzenli aralıklarla süreci gözden geçirip iyileştirmek.", dogru: "İkisinde de", neden: "Scrum'da Retrospective; Kanban'da akışı iyileştirmek ve Definition of Workflow'u güncellemek." },
  { metin: "Planlanmış işin yanında gün içinde gelen acil destek talepleri.", dogru: "Kanban", neden: "Sürekli akış, gün içinde yeni iş çekmeye uygundur. Scrum takımı bunun için bir kapasite payı ayırır." },
  { metin: "Her Sprint sonunda paydaşlarla ürünü denetlemek.", dogru: "Scrum", neden: "Sprint Review Scrum etkinliğidir; Kanban'da teslim ve geri bildirim ritmi takıma kalmıştır." },
];
export const ScrumMiKanban = () => (
  <Siniflandir kategoriler={SCRUM_KANBAN} kartlar={SCRUM_KANBAN_KARTLARI} soru="Bu öğe Scrum'a mı, Kanban'a mı ait, yoksa ikisinde de var mı?" />
);

// ---------------- G-S11-02: XP pratikleri ----------------

const XP = ["TDD", "Eşli programlama", "Sürekli entegrasyon", "Yeniden düzenleme"];
export const XP_KARTLARI: Kart[] = [
  { metin: "Mert önce başarısız olan bir test yazıyor, sonra onu geçirecek en az kodu.", dogru: "TDD", neden: "Kırmızı, yeşil, düzenle döngüsü." },
  { metin: "Selin yazarken Can yanında oturup kodu okuyor ve sorular soruyor; yarım saatte bir yer değiştiriyorlar.", dogru: "Eşli programlama", neden: "Sürücü ve yol gösterici; inceleme yazım sırasında olur." },
  { metin: "Her birleştirmede bütün testler otomatik çalışıyor, kırmızı derleme önce düzeltiliyor.", dogru: "Sürekli entegrasyon", neden: "Ana dala günde birkaç kez birleştirilir ve her birleştirme doğrulanır." },
  { metin: "Davranışı değiştirmeden 300 satırlık işlevi dört küçük işleve bölüyorlar.", dogru: "Yeniden düzenleme", neden: "Dış davranış aynı kalır, iç yapı iyileşir; testler bunun güvencesidir." },
  { metin: "Okan uzun süren bir dalda çalışmak yerine işini küçük parçalara bölüp her gün ana dala alıyor.", dogru: "Sürekli entegrasyon", neden: "Dal ne kadar uzun yaşarsa birleştirme o kadar acı verir." },
  { metin: "Yeni bir indirim kuralı için önce “öğrenci kartıyla %10” testini yazıp çalıştırıyorlar, test kırmızı.", dogru: "TDD", neden: "Testin önce kırmızı olması, gerçekten yeni davranışı sınadığını gösterir." },
  { metin: "Kod tekrarını gidermek için iki benzer sınıfı birleştiriyorlar, testler yeşil kalıyor.", dogru: "Yeniden düzenleme", neden: "Basit tasarıma doğru küçük adım; teknik borcun düzenli ödenmesi." },
  { metin: "Yeni katılan geliştirici ilk haftasında deneyimli biriyle aynı klavyede çalışıyor.", dogru: "Eşli programlama", neden: "Bilgi yayılır, takımda tek kişiye bağımlı alan azalır." },
];
export const XpPratikleri = () => (
  <Siniflandir kategoriler={XP} kartlar={XP_KARTLARI} soru="Squad her sahnede hangi XP pratiğini uyguluyor?" />
);
