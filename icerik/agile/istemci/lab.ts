// Agile ve Scrum Sanal Lab'i: derslerdeki şekillerin tek başına açılan halleri.
// Bileşenler ayrı parçalar olarak yalnızca açıldıklarında yüklenir.
import { createElement, lazy } from "react";
import type { Deney } from "../../../src/lab/deneyler";

const akis = (ad: "DegerEgrisi" | "PartiOyunu" | "LittleHesap" | "DarbogazSeridi") =>
  lazy(() => import("./etkilesim/akis").then((m) => ({ default: () => createElement(m[ad]) })));
const kart = (ad: "CynefinSiniflandirici" | "DegerTerazisi" | "IlkeEslestir" | "IsrafAvi" | "SutunDedektifi" | "RehberdeVarMi" | "TerimHaritasi") =>
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
];
