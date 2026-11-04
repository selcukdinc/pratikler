// Kimyanın Sanal Lab deneyleri. Bileşenler ayrı parçalar olarak yalnızca
// açıldıklarında yüklenir; bileşeni olmayan deneyler katalogda "Yakında" görünür.

import { lazy } from "react";
import type { Deney } from "../../../../src/lab/deneyler";

const Ayirma = lazy(() => import("./Ayirma"));
const Sicaklik = lazy(() => import("./Sicaklik"));
const Orbital = lazy(() => import("./Orbital"));

export const DENEYLER: Deney[] = [
  { id: "ayirma", ad: "Karışım ayırma tezgâhı", unite: 1, bilesen: Ayirma, ozet: "Bir karışım ve bir yöntem seç: süzme, mıknatıs, damıtma ya da kristallendirme. Doğru yöntem karışımı ayırır, yanlışsa nedenini görürsün." },
  { id: "sicaklik", ad: "Termometre ve birim dönüştürücü", unite: 2, bilesen: Sicaklik, ozet: "°C, °F ve K ölçekleri arasında sürükleyerek dönüşüm yap; suyun donma ve kaynama noktalarını üç ölçekte karşılaştır." },
  { id: "orbital", ad: "Orbital doldurma", unite: 4, bilesen: Orbital, ozet: "Elektronları orbital kutularına yerleştir. Aufbau, Pauli ve Hund kurallarını çiğnersen uyarı alırsın; dizilimden periyot ve grubu bul." },
  { id: "periyodik", ad: "Periyodik eğilim haritası", unite: 5, ozet: "Atom yarıçapı, iyonlaşma enerjisi, elektron ilgisi ve elektronegatifliği renk ölçeğiyle tablo üzerinde gör." },
  { id: "mol", ad: "Mol terazisi", unite: 6, ozet: "Bir maddeyi tart; mol sayısını, molekül sayısını ve atom sayısını sırasıyla hesapla." },
  { id: "vsepr", ad: "VSEPR molekül kurucu", unite: 7, ozet: "Merkez atoma bağ ve ortaklanmamış elektron çifti ekle; geometri, bağ açısı, hibritleşme ve polarlık hesaplanır." },
  { id: "birim-hucre", ad: "Birim hücre görüntüleyici", unite: 8, ozet: "Basit, hacim merkezli ve yüzey merkezli kübik hücreleri döndür; tanecik ve koordinasyon sayısını say." },
  { id: "yari-iletken", ad: "Yarı iletken katkılama", unite: 9, ozet: "Silisyum örgüsüne fosfor ya da bor ekle; n tipi ve p tipi yarı iletkenin nasıl oluştuğunu gör." },
  { id: "galvanik", ad: "Galvanik hücre ve korozyon", unite: 16, ozet: "İki metal seç; anot, katot ve hücre potansiyelini bul, hangi metalin aşınacağını ve katodik korumayı gör." },
];
