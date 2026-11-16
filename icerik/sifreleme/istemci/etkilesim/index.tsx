// Şifreleme derslerinin etkileşimli şekilleri: Gorsel.etkilesim adı -> bileşen.
// Gerçek işlemler Web Crypto ile, eğitim uygulamaları src/kripto/oyuncak ile yapılır;
// her şekil hangisini kullandığını rozetiyle söyler (src/kripto/Rozet.tsx).
import type { ComponentType } from "react";
import type { Gorsel } from "../../../../src/gorseller/tip";
import { BaytDonusturucu, EntropiOlcer, HedefEslestir, LcgOyunu, RastgeleMi, UcKutu } from "./temeller";
import { KareCarp, ModulerSaat, OklidTablosu } from "./matematik";
import { EnigmaMakinesi, FrekansTezgahi, SezarCarki, VigenereKirici } from "./klasik";
import { AesTurGezgini, BitCevirme, ChachaCeyrek, EcbMaskot, ModOynatici, XorTuvali } from "./simetrik";
import { CakismaAvi, CigEtkisi, DogumGunu, HkdfTuretici, HmacAdimlari, KabaKuvvetSure, LengthExtension, Pbkdf2Olcer, Sha256Gezgini, SizanVeritabani } from "./hash";
import { DhRenk, DhSayilar, EgriFp, EgriReel, ImzaTezgahi, MitmSahnesi, RsaTezgahi, SertifikaZinciri, TlsEl } from "./acik";
import { Circir, GrupAnahtari, GuvenlikNumarasi, MetadataDedektifi, X3dhUcgeni } from "./mesajlasma";
import { AnahtarZinciri, KurtarmaSenaryosu, NotDefteri } from "./depolama";
import { GorselPaylar, GoruntuSifreleme, LsbGizleyici } from "./gizleme";
import "./etkilesim.css";

export const ETKILESIMLER: Record<string, ComponentType<{ g: Gorsel }>> = {
  ucKutu: UcKutu,
  baytDonusturucu: BaytDonusturucu,
  hedefEslestir: HedefEslestir,
  entropiOlcer: EntropiOlcer,
  rastgeleMi: RastgeleMi,
  lcgOyunu: LcgOyunu,
  modulerSaat: ModulerSaat,
  oklidTablosu: OklidTablosu,
  kareCarp: KareCarp,
  sezarCarki: SezarCarki,
  frekansTezgahi: () => <FrekansTezgahi />,
  vigenereKirici: () => <VigenereKirici />,
  enigma: EnigmaMakinesi,
  xorTuvali: XorTuvali,
  aesTurGezgini: AesTurGezgini,
  ecbMaskot: EcbMaskot,
  modOynatici: ModOynatici,
  bitCevirme: BitCevirme,
  chachaCeyrek: ChachaCeyrek,
  cigEtkisi: CigEtkisi,
  sha256Gezgini: Sha256Gezgini,
  cakismaAvi: CakismaAvi,
  dogumGunu: DogumGunu,
  lengthExtension: LengthExtension,
  hmacAdimlari: HmacAdimlari,
  kabaKuvvetSure: KabaKuvvetSure,
  sizanVeritabani: SizanVeritabani,
  pbkdf2Olcer: Pbkdf2Olcer,
  hkdfTuretici: HkdfTuretici,
  dhRenk: DhRenk,
  dhSayilar: DhSayilar,
  rsaTezgahi: RsaTezgahi,
  egriReel: EgriReel,
  egriFp: EgriFp,
  imzaTezgahi: ImzaTezgahi,
  tlsEl: TlsEl,
  sertifikaZinciri: SertifikaZinciri,
  mitmSahnesi: MitmSahnesi,
  circir: Circir,
  x3dhUcgeni: X3dhUcgeni,
  guvenlikNumarasi: GuvenlikNumarasi,
  grupAnahtari: GrupAnahtari,
  metadataDedektifi: MetadataDedektifi,
  anahtarZinciri: AnahtarZinciri,
  kurtarmaSenaryosu: KurtarmaSenaryosu,
  notDefteri: NotDefteri,
  gorselPaylar: GorselPaylar,
  lsbGizleyici: LsbGizleyici,
  goruntuSifreleme: GoruntuSifreleme,
};
