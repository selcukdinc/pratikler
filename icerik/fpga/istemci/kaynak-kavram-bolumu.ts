// fpga-pratik deposundaki src/dersler/bolumBul.ts'nin KAVRAM_BOLUMU'su (eski kavram adlarıyla).
// Çatıda kavramlar u<hafta>- önekini alır (../index.ts).
// Hafta -> kavram -> bölümün sırası (0'dan). Kavramlar shared/kavramlar.ts'de.
export const KAVRAM_BOLUMU: Record<number, Record<string, number>> = {
  1: { "fpga-yapi": 0, "fpga-asic": 1, "fpga-cpu": 2, "entegre-olcek": 3 },
  2: {
    "fpga-yapi": 1, "pld-diziler": 0, "pla-tasarim": 0, "lut-clb": 2, "tasarim-akisi": 3, modelleme: 4, vivado: 4,
  },
  3: {
    "vhdl-yapi": 0, "port-modlari": 0, toplayici: 1, "mantik-operatorleri": 2, "mod-rem": 2, karsilastirma: 2,
    "kaydirma-birlestirme": 2, "atama-zamani": 2, "aritmetik-tasma": 3, "numeric-std-islem": 3, "others-atama": 4,
    "dizi-nitelikleri": 4, "sinyal-nitelikleri": 5, "enum-nitelikleri": 6, "kullanici-nitelik": 6, generic: 7,
  },
  4: {
    "port-modlari": 0, "variable-kullanim": 0, "atama-zamani": 0, tanimlayicilar: 2, "std-logic-degerleri": 3,
    cozumleme: 3, "numeric-std-islem": 4, "signed-unsigned": 4, "tip-donusumu": 4, "sayi-tabani": 5,
    "vektor-indeks": 6, "tip-uyumu": 6, "integer-aralik": 6, diziler: 6,
  },
  5: {
    "others-atama": 0, "with-select": 0, "when-else": 0, "process-hassasiyet": 1, "variable-kullanim": 1,
    "if-case": 2, donguler: 3, "saatli-devre": 4,
  },
  6: {
    "saat-periyot": 0, "kenar-tetikleme": 1, "sayac-yapisi": 2, "mod-n-sayac": 3, "saat-bolme": 3, "ucgen-dalga": 4,
    "tek-cift": 5, "isaretli-karsilastirma": 5, "odul-kodu": 5,
  },
};
