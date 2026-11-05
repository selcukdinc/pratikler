// DSP Pratik'in kimlik dönüşümleri. Soru, ders ve şekil dosyaları dsp-pratik
// deposundan olduğu gibi alındı (kaynak/ klasörleri); çatıya yüklenirken
// kimlikler burada önek alır. Böylece eski dosyalar elle düzenlenmeden kalır.
//
// - Soru ve konu kimlikleri: "ds-" öneki (h1-adc-seviye -> ds-h1-adc-seviye)
// - Kavramlar: sorunun haftasıyla "u<hafta>-" öneki (rms -> u1-rms). Eski sitede
//   haftaları aşan kavramlar (ör. konvolüsyon) çatıda her hafta için ayrı kavramdır.

export const ONEK = "ds-";
export const soruKimligi = (id: string) => `${ONEK}${id}`;
export const konuKimligi = (id: string) => `${ONEK}${id}`;
export const kavramKimligi = (hafta: number, kavram: string) => `u${hafta}-${kavram}`;
