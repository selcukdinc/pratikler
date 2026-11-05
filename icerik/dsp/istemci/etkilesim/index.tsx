// Etkileşimli ders şekilleri (dsp-pratik deposundaki src/components/etkilesim/index.tsx)
import type { ComponentType } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { Adc, Gauss, Histogram, Istatistik, Kutulama, RndToplam } from "./Hafta1";
import { Indeksleme, IstatBoyutu, MatrisIndeks } from "./Hafta2";
import { Donusum, KarmasikUstel, Sistem, TemelDiziler, Ustel } from "./Hafta3";
import { Dogrudan, GrafikYontem, HareketliOrtalama, Kaydirma, Korelasyon, Superpozisyon, Tablo, Zar } from "./Hafta4";
import { Cember, Darbe, FourierSerisi, Sarma, Sinus, SinusToplam, Sure } from "./Hafta5";
import { Baglanti, DikdortgenDtft, DogrusalFaz, FrekansYaniti, KonvTeorem, Modulasyon, Ozfonksiyon } from "./Hafta6";
import { DaireselDogrusal, DaireselKaydirma, DaireselKonv, DftOrnek, DftSimetri, DftTaban } from "./Hafta7";
import { FftAkis, FftIslem, KarmaN, Kelebek, Spektrum } from "./Hafta8";
import { FiltreAilesi } from "./Proje";

export const ETKILESIMLER: Record<string, ComponentType<{ g: Gorsel }>> = {
  adc: Adc,
  istatistik: Istatistik,
  histogram: Histogram,
  kutulama: Kutulama,
  gauss: Gauss,
  rndtoplam: RndToplam,
  indeksleme: Indeksleme,
  matrisindeks: MatrisIndeks,
  istatboyut: IstatBoyutu,
  temeldizi: TemelDiziler,
  ustel: Ustel,
  karmasikustel: KarmasikUstel,
  donusum: Donusum,
  sistem: Sistem,
  superpozisyon: Superpozisyon,
  dogrudan: Dogrudan,
  grafikyontem: GrafikYontem,
  kaydirma: Kaydirma,
  tablo: Tablo,
  zar: Zar,
  hareketliortalama: HareketliOrtalama,
  korelasyon: Korelasyon,
  cember: Cember,
  sinus: Sinus,
  sinustoplam: SinusToplam,
  fourierserisi: FourierSerisi,
  darbe: Darbe,
  sarma: Sarma,
  sure: Sure,
  ozfonksiyon: Ozfonksiyon,
  frekansyaniti: FrekansYaniti,
  dogrusalfaz: DogrusalFaz,
  baglanti: Baglanti,
  dikdortgendtft: DikdortgenDtft,
  modulasyon: Modulasyon,
  konvteorem: KonvTeorem,
  dftornek: DftOrnek,
  dfttaban: DftTaban,
  dftsimetri: DftSimetri,
  daireselkaydirma: DaireselKaydirma,
  daireselkonv: DaireselKonv,
  daireseldogrusal: DaireselDogrusal,
  fftislem: FftIslem,
  kelebek: Kelebek,
  fftakis: FftAkis,
  karman: KarmaN,
  spektrum: Spektrum,
  filtreailesi: FiltreAilesi,
};
