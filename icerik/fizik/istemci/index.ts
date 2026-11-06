// Fizik'in istemcide yüklenen içeriği (src/lib/icerik.ts): soru şekilleri
// (G-S<bölüm>-<sıra>). Dosyalar fizik-pratik deposundan olduğu gibi alındı.
// Ders anlatımları eski sitede de henüz yazılmamıştı.
import type { PratikIstemciIcerigi } from "../../../src/lib/icerik";
import { SORU_SEKILLERI } from "./gorseller/sorular";

const icerik: PratikIstemciIcerigi = {
  gorseller: SORU_SEKILLERI,
};

export default icerik;
