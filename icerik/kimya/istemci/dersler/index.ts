// Kimya ünitelerinin ders sayfaları. Her ünite kısa anlatımlar, Sanal Lab
// deneylerine bağlantılar ve soru havuzundan seçilmiş bir konu sonu testi içerir.
// Üniteler vize (1-9) ve final (10-16) olarak iki döneme ayrılır.
//
// İçeriği henüz yazılmamış ünitelerin bolumler listesi boştur; listede
// "Hazırlanıyor" diye görünürler. Bir ünite yazılınca kendi dosyasına
// (ör. unite-5.ts) taşınır ve buradaki iskeletin yerini alır.

import type { Ders, Donem } from "../../../../src/dersler/tipler";
import { UNITE_1 } from "./unite-1";
import { UNITE_2 } from "./unite-2";
import { UNITE_3 } from "./unite-3";
import { UNITE_4 } from "./unite-4";

const iskelet = (hafta: number, donem: Donem, baslik: string, ozet: string): Ders => ({
  hafta, donem, baslik, ozet, bolumler: [], test: [],
});

export const DERSLER: Ders[] = [
  UNITE_1,
  UNITE_2,
  UNITE_3,
  UNITE_4,
  iskelet(5, "vize", "Periyodik tablo ve periyodik özellikler", "Periyot ve grup; atom yarıçapı, iyonlaşma enerjisi, elektron ilgisi ve elektronegatiflik."),
  iskelet(6, "vize", "Mol kavramı ve kimyasal bileşikler", "Mol, Avogadro sayısı, mol kütlesi; basit ve molekül formülü; bileşiklerin adlandırılması."),
  iskelet(7, "vize", "Kimyasal bağlar ve molekül geometrisi", "İyonik, kovalent ve metalik bağ; Lewis yapıları; hibritleşme ve VSEPR."),
  iskelet(8, "vize", "Moleküller arası etkileşimler, sıvılar ve katılar", "Dipol-dipol, London ve hidrojen bağı; kaynama ve erime; birim hücre ve kristal yapı."),
  iskelet(9, "vize", "Metaller, yarı iletkenler ve korozyon", "Metal ve ametallerin özellikleri; n ve p tipi yarı iletkenler; korozyon türleri ve korunma."),
  iskelet(10, "final", "Kimyasal tepkimeler ve stokiyometri", "Denklem denkleştirme, sınırlayıcı bileşen, verim ve gaz hacimleriyle hesaplar."),
  iskelet(11, "final", "Sulu çözeltiler, asitler ve bazlar", "Çözünme-çökelme, asit-baz tanımları, pH, nötrleşme ve redoks tepkimeleri."),
  iskelet(12, "final", "Gazlar", "Basınç, gaz kanunları, ideal gaz denklemi, kısmi basınç ve difüzyon."),
  iskelet(13, "final", "Termokimya", "Isı, iş, entalpi; kalorimetri; Hess yasası ve standart oluşum entalpileri."),
  iskelet(14, "final", "Çözeltiler ve derişim", "Derişim birimleri, çözünürlük, buhar basıncı düşmesi, kaynama noktası yükselmesi ve donma noktası alçalması."),
  iskelet(15, "final", "Kimyasal kinetik", "Tepkime hızı, hız denklemi, tepkime derecesi ve aktivasyon enerjisi."),
  iskelet(16, "final", "Elektrokimya", "Galvanik hücre, standart elektrot potansiyeli, Nernst denklemi ve elektroliz."),
];

// Ünite -> kavram -> soru kartındaki "Derste oku" bağlantısının bölümü (0'dan)
export const KAVRAM_BOLUMU: Record<number, Record<string, number>> = {
  1: { "u1-madde-sinif": 0, "u1-karisim-ozellik": 0, "u1-fiziksel-kimyasal": 1, "u1-ayirma-yontemi": 2, "u1-kristallendirme": 3 },
  2: { "u2-birim-donusum": 0, "u2-anlamli-rakam": 0, "u2-sicaklik-olcegi": 1, "u2-yogunluk": 2, "u2-kimya-kanunlari": 3 },
  3: { "u3-dalton-modeli": 0, "u3-rutherford-modeli": 1, "u3-atom-tanecikleri": 2, "u3-bohr-modeli": 3 },
  4: { "u4-foton-enerjisi": 0, "u4-de-broglie": 1, "u4-kuantum-sayilari": 2, "u4-dizilim-kurallari": 3 },
};
