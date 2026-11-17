// Agile ve Scrum Sanal Lab'i: derslerdeki şekillerin tek başına açılan halleri.
// Bileşenler ayrı parçalar olarak yalnızca açıldıklarında yüklenir.
import { createElement, lazy } from "react";
import type { Deney } from "../../../src/lab/deneyler";

const akis = (ad: "DegerEgrisi" | "PartiOyunu" | "LittleHesap" | "DarbogazSeridi") =>
  lazy(() => import("./etkilesim/akis").then((m) => ({ default: () => createElement(m[ad]) })));
const scrum = (ad: "TimeboxHesap" | "DodKurucu") =>
  lazy(() => import("./etkilesim/scrum").then((m) => ({ default: () => createElement(m[ad]) })));
const olcum = (ad: "CfdGezgini" | "KanbanTahtasi" | "MonteCarlo" | "TeknikBorc") =>
  lazy(() => import("./etkilesim/olcum").then((m) => ({ default: () => createElement(m[ad]) })));
const kart = (
  ad:
    | "CynefinSiniflandirici"
    | "DegerTerazisi"
    | "IlkeEslestir"
    | "IsrafAvi"
    | "SutunDedektifi"
    | "RehberdeVarMi"
    | "TerimHaritasi"
    | "KimKararVerir"
    | "DailyMi"
    | "RetroTahtasi"
    | "ArtefaktTaahhut"
    | "BurndownOkuma"
    | "ScrumMiKanban"
    | "XpPratikleri",
) =>
  lazy(() => import("./etkilesim/siniflandir").then((m) => ({ default: () => createElement(m[ad]) })));

export const DENEYLER: Deney[] = [
  { id: "deger-egrisi", ad: "Değer eğrisi", unite: 1, bilesen: akis("DegerEgrisi"), ozet: "Aynı projeyi bir kez sonda ve iki haftalık Sprint'lerle teslim et; gereksinim yarıda değişince hangisinin ne kaybettiğini gör." },
  { id: "cynefin", ad: "Cynefin sınıflandırıcı", unite: 1, bilesen: kart("CynefinSiniflandirici"), ozet: "On durumu açık, karmaşık, kompleks ve kaotik alanlara yerleştir." },
  { id: "manifesto", ad: "Manifesto değerleri", unite: 2, bilesen: kart("DegerTerazisi"), ozet: "Squad'ın sahnelerini Manifesto'nun dört değeriyle eşleştir." },
  { id: "ilkeler", ad: "12 ilke", unite: 2, bilesen: kart("IlkeEslestir"), ozet: "On iki sahneyi ilkelerin dört grubuyla eşleştir." },
  { id: "parti", ad: "Parti büyüklüğü oyunu", unite: 3, bilesen: akis("PartiOyunu"), ozet: "Yirmi parçayı farklı parti büyüklükleriyle dört istasyondan geçir; ilk teslimi ve toplam süreyi karşılaştır." },
  { id: "little", ad: "Little yasası", unite: 3, bilesen: akis("LittleHesap"), ozet: "WIP ve verimi değiştir, çevrim süresinin nasıl değiştiğini gör." },
  { id: "darbogaz", ad: "Darboğaz şeridi", unite: 3, bilesen: akis("DarbogazSeridi"), ozet: "Adımların kapasitesiyle oyna; kuyruğun nerede biriktiğini ve verimi neyin belirlediğini bul." },
  { id: "israf", ad: "İsraf avı", unite: 3, bilesen: kart("IsrafAvi"), ozet: "Squad'ın panosundaki durumları israf türlerine ayır." },
  { id: "sutunlar", ad: "Sütun dedektifi", unite: 4, bilesen: kart("SutunDedektifi"), ozet: "Her sahnede şeffaflık, denetim ve uyarlamadan hangisinin çöktüğünü bul." },
  { id: "rehber", ad: "Rehber'de var mı?", unite: 4, bilesen: kart("RehberdeVarMi"), ozet: "Sprint Goal, story point, DoR, Sprint 0: hangisi Scrum Rehberi'nde, hangisi Rehber dışı uygulama?" },
  { id: "terim-haritasi", ad: "Terim haritası", unite: 4, bilesen: kart("TerimHaritasi"), ozet: "Squad, tribe, chapter, epic, Tech Lead: organizasyon şemandaki terimler nereden geliyor?" },
  { id: "kim-karar", ad: "Kim karar verir?", unite: 5, bilesen: kart("KimKararVerir"), ozet: "Sıralama, teknik tasarım, Sprint Goal, iptal: on iki kararı son sahibiyle eşleştir." },
  { id: "timebox", ad: "Time-box hesaplayıcı", unite: 6, bilesen: scrum("TimeboxHesap"), ozet: "Sprint uzunluğunu değiştir; etkinliklerin üst sınırlarını ve Sprint'teki paylarını gör." },
  { id: "daily", ad: "Daily mi, durum raporu mu?", unite: 6, bilesen: kart("DailyMi"), ozet: "Daily'de duyulan cümleleri Sprint Goal'e hizmet eden ve durum raporuna dönüşen diye ayır." },
  { id: "retro", ad: "Retro tahtası", unite: 7, bilesen: kart("RetroTahtasi"), ozet: "Retro maddelerinden hangisi bir sonraki Sprint'te gerçekten bir şey değiştirir?" },
  { id: "dod", ad: "DoD kurucu", unite: 8, bilesen: scrum("DodKurucu"), ozet: "Squad'ın Definition of Done'ını kur ve bir öğenin Done olup olmadığına karar ver." },
  { id: "artefaktlar", ad: "Artefakt ve taahhüt", unite: 8, bilesen: kart("ArtefaktTaahhut"), ozet: "Cümleleri Product Goal, Sprint Goal, DoD ya da kabul ölçütüyle eşleştir." },
  { id: "burndown", ad: "Burndown okuma", unite: 9, bilesen: kart("BurndownOkuma"), ozet: "Altı burndown'ın her biri neyi anlatıyor: sona yığılma, eklenen kapsam, takılan iş?" },
  { id: "cfd", ad: "CFD gezgini", unite: 9, bilesen: olcum("CfdGezgini"), ozet: "Gelen işi ve WIP sınırını değiştir; kümülatif akış diyagramındaki bantların, cycle time'ın ve WIP'in nasıl değiştiğini gör." },
  { id: "monte-carlo", ad: "Monte Carlo tahmini", unite: 9, bilesen: olcum("MonteCarlo"), ozet: "Geçmiş throughput'tan 2000 olası gelecek üret; %50, %85 ve %95 olasılıklı teslim sürelerini ortalamayla karşılaştır." },
  { id: "kanban", ad: "Kanban tahtası", unite: 10, bilesen: olcum("KanbanTahtasi"), ozet: "Günleri ilerlet, WIP sınırını aç kapat; kartların yaşını ve sütunların dolmasını izle." },
  { id: "scrum-kanban", ad: "Scrum mı, Kanban mı?", unite: 10, bilesen: kart("ScrumMiKanban"), ozet: "Sekiz öğeyi Scrum'a, Kanban'a ya da ikisine birden ait diye ayır." },
  { id: "teknik-borc", ad: "Teknik borç faizi", unite: 11, bilesen: olcum("TeknikBorc"), ozet: "On Sprint boyunca kısayol, normal ya da temizlik seç; hızın ve toplam teslimin nasıl değiştiğini gör." },
  { id: "xp", ad: "XP pratikleri", unite: 11, bilesen: kart("XpPratikleri"), ozet: "Squad'ın sahnelerini TDD, eşli programlama, sürekli entegrasyon ve yeniden düzenlemeyle eşleştir." },
];
