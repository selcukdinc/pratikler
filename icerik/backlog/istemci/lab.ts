// Backlog Sanal Lab'i: derslerdeki şekillerin tek başına açılan halleri.
// Bileşenler ayrı parçalar olarak yalnızca açıldıklarında yüklenir.
import { createElement, lazy } from "react";
import type { Deney } from "../../../src/lab/deneyler";

const kart = (ad: "BacklogBuzdagi" | "SaglikKontrolu" | "HiyerarsiAgaci" | "EtkiHaritasi" | "IyiMiKotuMu") =>
  lazy(() => import("./etkilesim/kartlar").then((m) => ({ default: () => createElement(m[ad]) })));
const ozel = (ad: "AracCevirmeni" | "StoryMap" | "StoryKurucu") =>
  lazy(() => import("./etkilesim/ozel").then((m) => ({ default: () => createElement(m[ad]) })));

export const DENEYLER: Deney[] = [
  { id: "buzdagi", ad: "Backlog buzdağı", unite: 1, bilesen: kart("BacklogBuzdagi"), ozet: "Öğeleri ayrıntı düzeyine göre buzdağının katmanlarına yerleştir: Sprint'e hazır, yakında, uzak." },
  { id: "saglik", ad: "Backlog sağlık kontrolü", unite: 1, bilesen: kart("SaglikKontrolu"), ozet: "Squad'ın backlog'undaki durumlarda DEEP sorunlarını bul: erken ayrıntı, tahminsiz öğe, kopya, mezarlık." },
  { id: "hiyerarsi", ad: "Hiyerarşi ağacı", unite: 2, bilesen: kart("HiyerarsiAgaci"), ozet: "On öğeyi theme, epic, feature, story ya da task seviyesine koy." },
  { id: "arac-cevirmeni", ad: "Araç çevirmeni", unite: 2, bilesen: ozel("AracCevirmeni"), ozet: "Aynı hiyerarşi SAFe, Azure Boards, Jira, ClickUp ve Scrum Rehberi'nde nasıl adlandırılıyor?" },
  { id: "etki-haritasi", ad: "Etki haritası", unite: 3, bilesen: kart("EtkiHaritasi"), ozet: "Hedef, aktör, davranış değişimi ve teslimat kartlarını haritanın doğru seviyesine yerleştir." },
  { id: "story-map", ad: "Story map ve sürüm dilimi", unite: 3, bilesen: ozel("StoryMap"), ozet: "Öğrencinin yolculuğundan 16 puanlık bir ilk sürüm dilimi kes; yürüyen iskeleti bul." },
  { id: "story-kurucu", ad: "Story kurucu", unite: 4, bilesen: ozel("StoryKurucu"), ozet: "Rol, istek ve faydadan story kur ya da kendin yaz; kalıbın tipik kokuları anında uyarılır." },
  { id: "iyi-mi-kotu-mu", ad: "İyi mi, kötü mü?", unite: 4, bilesen: kart("IyiMiKotuMu"), ozet: "Sekiz story'nin hangisi iyi, hangisinde rol, fayda ya da istek sorunu var?" },
];
