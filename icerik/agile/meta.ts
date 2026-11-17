// Agile ve Scrum Pratik (pratikler.selcukdinc.dev/agile): agile'ın köklerini (neden agile,
// Manifesto, Lean ve akış), Scrum çerçevesini (Scrum Rehberi 2020) ve sahadaki uygulamayı
// (ölçüm, Kanban, XP, anti-pattern'ler, ölçekleme) üç grupta 13 ünitede işleyen pratik.
// Üçlü dizinin ilki: 2. pratik Backlog (Epic, Feature, User Story; yol user-story, önek us-),
// 3. pratik Ölçekli Agile (Tribe, Squad, Canvas; yol olcekli-agile, önek oa-).
// Plan: proje kütüphanesinde planlar/plan-agile-scrum-pratigi.md, depoda docs/plan-agile-scrum-pratigi.md.
//
// Sorular kendi cümlelerimizle yazılır. Dayanak: Scrum Rehberi 2020 (Schwaber ve Sutherland,
// CC BY-SA 4.0), Agile Manifesto ve 12 ilkesi, Kanban Rehberi; sertifika sınavlarının soruları
// kullanılmaz.
//
// Kurgusal takım (bütün sahnelerde, senaryolarda ve Sprint Simülatörü'nde aynı): "Kampüs
// Yemekhanesi" uygulamasını geliştiren büyük bir squad (Selçuk'un kararı, 17 Kasım 2026).
// Product Owner Elif, Scrum Master Burak, Tech Lead Can; QA chapter'ından Deniz ve Tuba,
// DevOps chapter'ından Kerem, Engineering chapter'ından Ayşe, Mert, Selin, Okan, Ece ve
// Hakan (12 kişi). Paydaşlar: yemekhane müdürü Nurten Hanım, öğrenci temsilcisi Arda,
// bilgi işlem müdürü Sinan Bey. Gerçek kurum ya da kişi adı kullanılmaz.
//
// Her kavramın en az bir sorusu olmalı (shared/kavramlar.test.ts). Soruları henüz
// yazılmamış ünitelerin kavramları, soruları eklenirken açılır.
import type { PratikMeta } from "../tipler.ts";

export const GRUPLAR = [
  { ad: "Agile'ın kökleri", aciklama: "Neden agile, Agile Manifesto ve 12 ilke, Lean düşünce ve akış.", uniteler: [1, 2, 3] },
  { ad: "Scrum çerçevesi", aciklama: "Scrum Rehberi 2020: empirizm, Scrum Takımı, etkinlikler, artefaktlar ve taahhütleri.", uniteler: [4, 5, 6, 7, 8] },
  { ad: "Sahada agile", aciklama: "Ölçüm ve grafikler, Kanban, XP, anti-pattern'ler ve takımdan organizasyona geçiş.", uniteler: [9, 10, 11, 12, 13] },
];

export const agile: PratikMeta = {
  id: "agile",
  alt: "agile",
  yol: "agile",
  ad: "Agile ve Scrum",
  alan: "Yazılım",
  aciklama:
    "Agile'ın neden doğduğundan Scrum'un her etkinliğine, Kanban ve XP'den sahadaki zor durumlara 13 ünite. Okuduğunu sanal bir squad'la sprint yöneterek ve \"Scrum Master şimdi ne yapmalı?\" senaryolarıyla dene.",
  kaynakAdi: "Scrum Rehberi 2020, Agile Manifesto ve Kanban Rehberi",
  kaynakAciklamasi:
    "Sorular ve dersler herkese açık birincil kaynaklara dayanılarak **kendi cümlelerimizle** yazıldı: Scrum Rehberi 2020 (Ken Schwaber ve Jeff Sutherland, CC BY-SA 4.0 lisanslı), Agile Manifesto ve 12 ilkesi, Kanban Rehberi. Lean, XP ve akış konularında alanın bilinen kitaplarından yararlanıldı; metin kopyalanmadı. Sertifika sınavlarının soruları kullanılmadı.\n\n" +
    "Soruların etiketi kaynağını söyler: **Rehber** etiketli soruların cevabı doğrudan Rehber'in ya da Manifesto'nun metnine dayanır; **Sahada** etiketli sorular yaygın iyi uygulamayı, **Senaryo** etiketli sorular bir durumda en uygun hamleyi sorar. Rehber'de olmayan ama yaygın uygulamalar (story point, Definition of Ready, burndown) açıkça öyle anılır.",
  tanitim: {
    baslik: "Bir Scrum takımını sanal olarak yöneterek öğren",
    giris:
      "Agile ve Scrum Pratik, agile'ın köklerini, Scrum çerçevesini ve sahadaki uygulamasını adım adım öğreten ücretsiz bir çalışma sitesi. Her konuyu önce Rehber'in ne dediğiyle, sonra gerçek takımlarda nasıl göründüğüyle görür, en son kendin denersin.",
    kitleler: [
      { baslik: "Scrum takımında çalışanlar", metin: "Etkinliklerin amacını, kimin neye karar verdiğini ve takımında gördüğün terimlerin nereden geldiğini netleştir." },
      { baslik: "Sertifikaya hazırlananlar", metin: "Rehber'e harfiyen dayanan sorular ve senaryo sorularıyla PSM I ve PSPO I tarzı sorulara alış." },
      { baslik: "Takım yönetenler", metin: "Büyük squad'larda, sabit kapsamlı işlerde ve sprint ortasında gelen isteklerde Rehber'e uygun ve insanca hamleleri dene." },
    ],
  },
  uniteAdi: "ünite",
  uniteKisa: "Ü",
  yayinda: false,
  latex: false,
  // Açılış sayfası derslerin listesi (gruplarıyla)
  anaSayfa: "ders",
  uniteGruplari: GRUPLAR,
  logo: "/logolar/agile.svg",
  etiketler: [
    { id: "rehber", ad: "Rehber", renk: "kitap", aciklama: "Cevabı doğrudan Scrum Rehberi'nin, Agile Manifesto'nun ya da Kanban Rehberi'nin metnine dayanan soru" },
    { id: "kavram", ad: "Kavram", renk: "turetilmis", aciklama: "Bir kavramı, modeli ya da terimin nereden geldiğini soran soru" },
    { id: "sahada", ad: "Sahada", renk: "ders", aciklama: "Gerçek takımlardaki yaygın iyi uygulamayı ya da yanılgıyı soran soru" },
    { id: "senaryo", ad: "Senaryo", renk: "cikmis", aciklama: "Kurgusal squad'da yaşanan bir durumda en uygun hamleyi seçtiğin soru" },
    { id: "hesap", ad: "Hesap", renk: "ders", aciklama: "Little yasası, parti büyüklüğü, iletişim yolları gibi küçük hesaplar" },
  ],
  uniteler: [
    { no: 1, baslik: "Neden Agile?" },
    { no: 2, baslik: "Agile Manifesto ve 12 İlke" },
    { no: 3, baslik: "Lean ve Akış Düşüncesi" },
    { no: 4, baslik: "Scrum'a Giriş" },
    { no: 5, baslik: "Scrum Takımı" },
    { no: 6, baslik: "Sprint, Sprint Planning ve Daily Scrum" },
    { no: 7, baslik: "Sprint Review ve Sprint Retrospective" },
    { no: 8, baslik: "Artefaktlar ve Taahhütleri" },
    { no: 9, baslik: "Görünürlük ve Ölçüm" },
    { no: 10, baslik: "Kanban ve Scrum" },
    { no: 11, baslik: "XP ve Teknik Mükemmellik" },
    { no: 12, baslik: "Anti-pattern'ler ve Zor Durumlar" },
    { no: 13, baslik: "Takımdan Organizasyona" },
  ],
  kavramlar: {
    // 1. ünite
    "u1-tahmin-empirik": { ad: "Tahmine dayalı ve deneysel (empirik) süreç kontrolü" },
    "u1-waterfall": { ad: "Waterfall, V-model ve Royce'un 1970 makalesi" },
    "u1-belirsizlik": { ad: "Gereksinim ve teknoloji belirsizliği: Stacey matrisi" },
    "u1-cynefin": { ad: "Cynefin: açık, karmaşık, kompleks ve kaotik alanlar" },
    "u1-iteratif": { ad: "İteratif ve artımlı geliştirme, erken geri bildirim" },
    "u1-ucgen": { ad: "Demir üçgen ve agile'ın ters üçgeni" },
    "u1-tarihce": { ad: "Agile'a giden yol: Lean, XP, Scrum ve Snowbird" },
    // 2. ünite
    "u2-degerler": { ad: "Manifesto'nun dört değer cümlesi" },
    "u2-sagdakiler": { ad: "\"Sağdakilerin de değeri var\": değerlerin doğru okunması" },
    "u2-ilke-teslim": { ad: "İlkeler 1-3: müşteri memnuniyeti, değişime açıklık, sık teslim" },
    "u2-ilke-insan": { ad: "İlkeler 4-6: iş birliği, motive bireyler, yüz yüze iletişim" },
    "u2-ilke-ilerleme": { ad: "İlkeler 7-10: çalışan yazılım, sürdürülebilir hız, teknik mükemmellik, sadelik" },
    "u2-ilke-takim": { ad: "İlkeler 11-12: kendi kendini örgütleyen takım ve düzenli yansıtma" },
    "u2-yanilgilar": { ad: "Agile hakkında yaygın yanılgılar" },
    // 3. ünite
    "u3-lean": { ad: "Toyota Üretim Sistemi ve Lean yazılım ilkeleri" },
    "u3-israf": { ad: "İsraf türleri ve yazılımdaki karşılıkları" },
    "u3-cekme": { ad: "Çekme (pull) ve itme (push) sistemleri" },
    "u3-parti": { ad: "Parti büyüklüğü ve tek parça akış" },
    "u3-wip": { ad: "Devam eden iş (WIP) ve bağlam değiştirme" },
    "u3-little": { ad: "Little yasası: WIP, verim ve çevrim süresi" },
    "u3-darbogaz": { ad: "Darboğaz ve kısıtlar teorisi" },
    "u3-deger-akisi": { ad: "Değer akışı haritası ve akış verimliliği" },
    // 4. ünite
    "u4-tanim": { ad: "Scrum'un tanımı: hafif ve bilerek eksik bırakılmış bir çerçeve" },
    "u4-sutunlar": { ad: "Empirizmin üç sütunu: şeffaflık, denetim, uyarlama" },
    "u4-degerler": { ad: "Beş Scrum değeri" },
    "u4-yapi": { ad: "Scrum'un yapısı: takım, etkinlikler, artefaktlar" },
    "u4-2020": { ad: "Scrum Rehberi 2020'deki değişiklikler" },
    "u4-rehberde-yok": { ad: "Rehber'de olmayan ama yaygın uygulamalar" },
    "u4-terim-haritasi": { ad: "Terim haritası: Scrum, Spotify modeli, SAFe ve araçların dili" },
    "u4-tarihce": { ad: "Scrum'un tarihçesi" },
  },
  terimler: [
    { tr: "çevik", en: "agile", aciklama: "Belirsizlik altında kısa döngülerle teslim edip geri bildirimle uyum sağlayan çalışma anlayışı" },
    { tr: "şelale modeli", en: "waterfall", aciklama: "Analiz, tasarım, kodlama, test ve teslimin sırayla ve birer kez yapıldığı tahmine dayalı süreç" },
    { tr: "deneysel süreç kontrolü", en: "empirical process control", aciklama: "Kararları önceden yapılan plana değil, gözleme ve deneyime dayandırma; şeffaflık, denetim ve uyarlamayla işler" },
    { tr: "tahmine dayalı süreç", en: "predictive (defined) process", aciklama: "Girdiler ve adımlar baştan bilindiği için sonucun önceden planlanabildiği süreç" },
    { tr: "iteratif geliştirme", en: "iterative development", aciklama: "Aynı ürünü tekrar tekrar ele alıp her turda iyileştirme" },
    { tr: "artımlı geliştirme", en: "incremental development", aciklama: "Ürünü kullanılabilir parçalar ekleyerek büyütme" },
    { tr: "Cynefin", en: "Cynefin framework", aciklama: "Durumları açık, karmaşık, kompleks ve kaotik diye ayırıp her birine uygun karar biçimini öneren model (Dave Snowden)" },
    { tr: "Stacey matrisi", en: "Stacey matrix", aciklama: "İşleri gereksinim üzerindeki uzlaşma ve teknoloji kesinliğine göre sınıflandıran tablo" },
    { tr: "demir üçgen", en: "iron triangle", aciklama: "Kapsam, zaman ve maliyetin birbirine bağlı olduğu proje yönetimi modeli" },
    { tr: "Agile Manifesto", en: "Manifesto for Agile Software Development", aciklama: "17 yazılımcının Şubat 2001'de Utah, Snowbird'de yazdığı dört değer cümlesi ve 12 ilke" },
    { tr: "Lean", en: "lean thinking", aciklama: "Toyota Üretim Sistemi'nden doğan, israfı azaltıp akışı hızlandırmayı amaçlayan düşünce" },
    { tr: "israf", en: "waste, muda", aciklama: "Müşteri için değer üretmeyen her etkinlik" },
    { tr: "çekme sistemi", en: "pull system", aciklama: "Yeni işin, kapasite boşaldığında sonraki adım tarafından çekildiği sistem" },
    { tr: "devam eden iş", en: "work in progress, WIP", aciklama: "Başlanmış ama bitmemiş işlerin sayısı" },
    { tr: "çevrim süresi", en: "cycle time", aciklama: "Bir işin başlanmasından bitmesine kadar geçen süre" },
    { tr: "teslim süresi", en: "lead time", aciklama: "Bir işin istenmesinden teslim edilmesine kadar geçen süre" },
    { tr: "verim", en: "throughput", aciklama: "Birim zamanda biten iş sayısı" },
    { tr: "Little yasası", en: "Little's law", aciklama: "Kararlı bir sistemde ortalama WIP = ortalama verim × ortalama çevrim süresi" },
    { tr: "darboğaz", en: "bottleneck", aciklama: "Bütün sistemin hızını belirleyen en yavaş adım" },
    { tr: "değer akışı haritası", en: "value stream map", aciklama: "Bir işin istekten teslime kadar geçtiği adımları, bekleme ve çalışma süreleriyle gösteren harita" },
    { tr: "Scrum Rehberi", en: "The Scrum Guide", aciklama: "Scrum'un resmi tanımı; Ken Schwaber ve Jeff Sutherland yazar, son sürümü Kasım 2020" },
    { tr: "şeffaflık", en: "transparency", aciklama: "Sürecin ve işin, işi yapanlar ve alanlar tarafından görülebilmesi" },
    { tr: "denetim", en: "inspection", aciklama: "Artefaktların ve hedefe ilerlemenin sık sık incelenmesi" },
    { tr: "uyarlama", en: "adaptation", aciklama: "Denetimde sapma görülünce süreç ya da ürünün olabildiğince çabuk ayarlanması" },
    { tr: "hesap verebilirlik", en: "accountability", aciklama: "Scrum Rehberi 2020'nin \"rol\" yerine kullandığı terim: bir sonuçtan kimin sorumlu olduğu" },
    { tr: "Ürün Sahibi", en: "Product Owner", aciklama: "Scrum Takımı'nın çalışmasından doğan ürünün değerini en çoklamaktan hesap veren tek kişi" },
    { tr: "Scrum Master", en: "Scrum Master", aciklama: "Scrum'u Rehber'deki gibi yerleştirmekten ve Scrum Takımı'nın etkinliğinden hesap veren kişi" },
    { tr: "Geliştiriciler", en: "Developers", aciklama: "Her Sprint'te kullanılabilir bir Increment'in herhangi bir parçasını oluşturan Scrum Takımı üyeleri" },
    { tr: "Sprint", en: "Sprint", aciklama: "Bir ay ya da daha kısa, sabit uzunluklu, fikirlerin değere dönüştürüldüğü etkinlik" },
    { tr: "Ürün İş Listesi", en: "Product Backlog", aciklama: "Ürünü iyileştirmek için gerekenlerin sıralı, sürekli gelişen listesi" },
    { tr: "Ürün Hedefi", en: "Product Goal", aciklama: "Ürünün gelecekteki istenen durumu; Product Backlog'un taahhüdü" },
    { tr: "Artırım", en: "Increment", aciklama: "Product Goal'e doğru atılan somut, Definition of Done'ı karşılayan adım" },
    { tr: "Bitti Tanımı", en: "Definition of Done, DoD", aciklama: "Increment'in ürün için gereken kalite ölçütlerini karşıladığı durumun resmi tanımı" },
    { tr: "squad", en: "squad", aciklama: "Spotify modelinde kendi kendini yöneten, uzun ömürlü ürün takımı; kabaca bir Scrum Takımı'na karşılık gelir" },
    { tr: "tribe", en: "tribe", aciklama: "Spotify modelinde aynı ürün alanında çalışan squad'ların topluluğu" },
    { tr: "chapter", en: "chapter", aciklama: "Spotify modelinde aynı tribe içinde, farklı squad'larda aynı uzmanlıkla çalışanların grubu (QA, DevOps gibi)" },
    { tr: "guild", en: "guild", aciklama: "Spotify modelinde tribe'lar arası, gönüllü katılımlı ilgi topluluğu" },
  ],
  benzerler: [],
};
