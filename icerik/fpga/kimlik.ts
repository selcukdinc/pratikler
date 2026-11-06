// FPGA Pratik'in kimlik dönüşümleri. Soru, ders ve şekil dosyaları fpga-pratik
// deposundan olduğu gibi alındı (kaynak/ klasörleri); çatıya yüklenirken
// kimlikler burada önek alır. Böylece eski dosyalar elle düzenlenmeden kalır.
//
// - Soru ve konu kimlikleri: "fp-" öneki (h3-uc-bolum -> fp-h3-uc-bolum)
// - Kavramlar: sorunun haftasıyla "u<hafta>-" öneki (port-modlari -> u3-port-modlari).
//   Eski sitede haftaları aşan kavramlar çatıda her hafta için ayrı kavramdır.

export const ONEK = "fp-";
export const soruKimligi = (id: string) => `${ONEK}${id}`;
export const konuKimligi = (id: string) => `${ONEK}${id}`;
export const kavramKimligi = (hafta: number, kavram: string) => `u${hafta}-${kavram}`;
