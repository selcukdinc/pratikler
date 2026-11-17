// Kart sınıflandırma şekilleri: her kartta bir durum, altında kategoriler. Seçim
// yapılınca doğru kategori ve gerekçesi görünür. Cynefin, Manifesto değerleri ve
// ilkeleri, israf avı, empirizmin sütunları, "Rehber'de var mı?" ve terim haritası
// aynı bileşeni kendi verisiyle kullanır. Hepsi tarayıcıda çalışır, istek atmaz.
import { useState } from "react";

export interface Kart {
  metin: string;
  dogru: string;
  neden: string;
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
