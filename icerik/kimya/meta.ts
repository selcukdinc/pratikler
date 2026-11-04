// Kimya Pratik (kimya.selcukdinc.dev): Genel Kimya dersi. Site bugün kendi
// deposunda (selcukdinc/kimya-pratik) yayında; buradaki kopya Faz 3 taşımasıdır.
// Alan adı çatıya alınana kadar yayinda: false kalır (docs/tasima.md).
// Ders anlatımları, Sanal Lab ve çıkmış sınavlar istemci/ içindedir.
import type { PratikMeta } from "../tipler.ts";

export const kimya: PratikMeta = {
  id: "kimya",
  alt: "kimya",
  ad: "Kimya",
  alan: "Temel bilimler",
  aciklama:
    "Genel Kimya için vize ve final konularına ayrılmış ünite anlatımları, tarayıcıda çalışan Sanal Lab deneyleri, çıkmış sorular ve onlardan türetilen soru havuzu.",
  kaynakAdi: "Genel Kimya dersi ve çıkmış sınavlar",
  kaynakAciklamasi:
    "İki tür soru var ve her soru etiketlidir:\n" +
    "- **Çıkmış**: önceki yılların vize ve final sınavlarında sorulmuş sorular. Sınavdaki cevap anahtarı gösterilir; anahtarda tartışmalı bir nokta varsa açıklamada ayrıca belirtilir.\n" +
    "- **Türetilmiş**: aynı konulardan kendi cümlelerimizle yazılan yeni sorular. Sayısal cevaplı soruların sonuçları hesaplanarak denetlenir; virgüllü ya da üslü yazım (ör. `0,75`, `4.52e23`) kabul edilir.\n\n" +
    "Anlatımlar, şekiller ve sorular bu site için yeniden yazılmıştır; kitaplardan, ders notlarından ve sınav kâğıtlarından görsel alınmaz.",
  tanitim: {
    baslik: "Kimyayı görerek ve deneyerek öğren",
    giris:
      "Kimya Pratik, Genel Kimya dersine hazırlanmak için ücretsiz ve açık kaynaklı bir çalışma alanı. Vize ve final konularına ayrılmış üniteler, tarayıcında çalışan Sanal Lab deneyleri, çıkmış sorular ve onlardan türetilen soru havuzu, yanlışlar için aralıklı tekrar tek yerde. Kurulum gerekmez.",
    kitleler: [
      { baslik: "Genel Kimya dersini alan öğrenciler", metin: "Vize ve finale hazırlanırken konuları üniteler halinde tekrar et, çıkmış sorularla ve onlardan türetilen yeni sorularla kendini dene. Yanlış yaptığın sorular aralıklı tekrarla unutmadan önce yeniden karşına çıkar; ilerleme sayfası zayıf konularını gösterir." },
      { baslik: "Konuyu görerek anlamak isteyenler", metin: "Orbital doldurma, karışım ayırma ve sıcaklık ölçekleri gibi konuları Sanal Lab'da kendin dene: bir elektron ekle, bir yöntemi değiştir, sonucun nasıl değiştiğini hemen gör." },
      { baslik: "Laboratuvara erişimi olmayanlar", metin: "Karışım ayırma gibi deneyleri tarayıcında, hiçbir malzeme ve kurulum olmadan yapabilirsin." },
    ],
  },
  uniteAdi: "ünite",
  uniteKisa: "Ü",
  yayinda: true,
  latex: true,
  anaSayfa: "lab",
  etiketler: [
    { id: "cikmis", ad: "Çıkmış", renk: "cikmis", gercek: true, aciklama: "Önceki yılların vize ya da final sınavında çıkmış soru" },
    { id: "turetilmis", ad: "Türetilmiş", renk: "turetilmis", aciklama: "Aynı konudan kendi cümlelerimizle yazılmış yeni soru" },
  ],
  uniteler: [
    { no: 1, baslik: "Madde, karışımlar ve ayırma yöntemleri" },
    { no: 2, baslik: "Ölçme, birimler ve kimya kanunları" },
    { no: 3, baslik: "Atom modelleri ve atomun yapısı" },
    { no: 4, baslik: "Kuantum sayıları ve elektron dizilimi" },
    { no: 5, baslik: "Periyodik tablo ve periyodik özellikler" },
    { no: 6, baslik: "Mol kavramı ve kimyasal bileşikler" },
    { no: 7, baslik: "Kimyasal bağlar ve molekül geometrisi" },
    { no: 8, baslik: "Moleküller arası etkileşimler, sıvılar ve katılar" },
    { no: 9, baslik: "Metaller, yarı iletkenler ve korozyon" },
    { no: 10, baslik: "Kimyasal tepkimeler ve stokiyometri" },
    { no: 11, baslik: "Sulu çözeltiler, asitler ve bazlar" },
    { no: 12, baslik: "Gazlar" },
    { no: 13, baslik: "Termokimya" },
    { no: 14, baslik: "Çözeltiler ve derişim" },
    { no: 15, baslik: "Kimyasal kinetik" },
    { no: 16, baslik: "Elektrokimya" },
  ],
  // Kimlik biçimi: u<ünite>-<kısa ad>. Aralıklı tekrarda bir soruyu yanlış yapan
  // kişiye aynı kavramdan henüz çözmediği sorular da eklenir.
  kavramlar: {
    // 1. ünite
    "u1-madde-sinif": { ad: "Saf madde, element, bileşik ve karışım" },
    "u1-fiziksel-kimyasal": { ad: "Fiziksel ve kimyasal değişim" },
    "u1-karisim-ozellik": { ad: "Karışımların özellikleri" },
    "u1-ayirma-yontemi": { ad: "Karışımları ayırma yöntemleri" },
    "u1-kristallendirme": { ad: "Kristallendirme" },
    // 2. ünite
    "u2-birim-donusum": { ad: "SI birimleri ve birim dönüştürme" },
    "u2-anlamli-rakam": { ad: "Anlamlı rakamlar" },
    "u2-sicaklik-olcegi": { ad: "Sıcaklık ölçekleri arasında dönüşüm" },
    "u2-yogunluk": { ad: "Yoğunluk" },
    "u2-kimya-kanunlari": { ad: "Kütlenin korunumu, sabit ve katlı oranlar" },
    // 3. ünite
    "u3-dalton-modeli": { ad: "Dalton atom modeli" },
    "u3-rutherford-modeli": { ad: "Thomson ve Rutherford atom modelleri" },
    "u3-atom-tanecikleri": { ad: "Proton, nötron, elektron ve izotoplar" },
    "u3-bohr-modeli": { ad: "Bohr atom modeli" },
    // 4. ünite
    "u4-foton-enerjisi": { ad: "Işığın dalga boyu, frekansı ve foton enerjisi" },
    "u4-de-broglie": { ad: "De Broglie dalga boyu" },
    "u4-kuantum-sayilari": { ad: "Kuantum sayıları" },
    "u4-dizilim-kurallari": { ad: "Aufbau, Pauli ve Hund kuralları" },
    // 5. ünite
    "u5-periyot-grup": { ad: "Elektron diziliminden periyot ve grup bulma" },
    "u5-elektronegatiflik": { ad: "Elektronegatiflik" },
    // 6. ünite
    "u6-mol-kutle": { ad: "Mol, kütle ve tanecik sayısı" },
    // 7. ünite
    "u7-bag-turu": { ad: "İyonik ve kovalent bağ" },
    "u7-kovalent-bag-kosul": { ad: "Kovalent bağ oluşumunun koşulları" },
    "u7-hibritlesme": { ad: "Hibritleşme" },
    "u7-vsepr": { ad: "Molekül geometrisi ve polarlık" },
    // 8. ünite
    "u8-etkilesim-turu": { ad: "Moleküller arası etkileşim türleri" },
    "u8-hidrojen-bagi": { ad: "Hidrojen bağı" },
    "u8-birim-hucre": { ad: "Birim hücre ve katı yoğunluğu" },
    // 9. ünite
    "u9-ametal-ozellik": { ad: "Metal ve ametallerin özellikleri" },
    "u9-yari-iletken": { ad: "n ve p tipi yarı iletkenler" },
    "u9-korozyon-turu": { ad: "Korozyon türleri ve etkenleri" },
    "u9-korozyon-koruma": { ad: "Korozyondan korunma" },
  },
  // Sık geçen genel sözcükler (madde, atom, molekül) bilerek listede yok: her
  // kullanımda İngilizcesi yazılırsa metin okunmaz olur.
  terimler: [
  { tr: "homojen karışım", en: "homogeneous mixture", aciklama: "Her yerinde aynı bileşimde olan karışım; çözelti" },
  { tr: "heterojen karışım", en: "heterogeneous mixture", aciklama: "Bileşenleri ayırt edilebilen karışım" },
  { tr: "saf madde", en: "pure substance", aciklama: "Her yerinde aynı bileşimde olan, belirli erime ve kaynama noktası olan madde" },
  { tr: "süzme", en: "filtration", aciklama: "Katı tanecikleri sıvıdan süzgeçle ayırma" },
  { tr: "damıtma", en: "distillation", aciklama: "Kaynama noktası farkıyla sıvıları ayırma" },
  { tr: "ayrımsal damıtma", en: "fractional distillation", aciklama: "Kaynama noktaları yakın sıvıları kolonla ayırma" },
  { tr: "kromatografi", en: "chromatography" },
  { tr: "kristallendirme", en: "crystallization", aciklama: "Çözünürlük farkıyla katıyı çözeltiden kristal olarak ayırma" },
  { tr: "anlamlı rakam", en: "significant figure" },
  { tr: "yoğunluk", en: "density", aciklama: "Birim hacmin kütlesi, d = m / V" },
  { tr: "katlı oranlar kanunu", en: "law of multiple proportions" },
  { tr: "sabit oranlar kanunu", en: "law of definite proportions" },
  { tr: "kütlenin korunumu kanunu", en: "law of conservation of mass" },
  { tr: "çekirdek", en: "nucleus" },
  { tr: "izotop", en: "isotope", aciklama: "Proton sayısı aynı, nötron sayısı farklı atomlar" },
  { tr: "foton", en: "photon", aciklama: "Işığın enerji paketi, E = hν" },
  { tr: "dalga boyu", en: "wavelength" },
  { tr: "belirsizlik ilkesi", en: "uncertainty principle" },
  { tr: "kuantum sayısı", en: "quantum number" },
  { tr: "Aufbau ilkesi", en: "Aufbau principle" },
  { tr: "Pauli dışarlama ilkesi", en: "Pauli exclusion principle" },
  { tr: "Hund kuralı", en: "Hund's rule" },
  { tr: "orbital", en: "orbital", aciklama: "Elektronun bulunma olasılığının yüksek olduğu bölge" },
  { tr: "elektron dizilimi", en: "electron configuration" },
  { tr: "iyonlaşma enerjisi", en: "ionization energy", aciklama: "Gaz hâlindeki atomdan bir elektron koparmak için gereken enerji" },
  { tr: "elektron ilgisi", en: "electron affinity" },
  { tr: "elektronegatiflik", en: "electronegativity", aciklama: "Atomun bağ elektronlarını kendine çekme yeteneği" },
  { tr: "hibritleşme", en: "hybridization" },
  { tr: "hidrojen bağı", en: "hydrogen bond" },
  { tr: "dipol-dipol etkileşimi", en: "dipole-dipole interaction" },
  { tr: "London kuvvetleri", en: "London dispersion forces" },
  { tr: "birim hücre", en: "unit cell" },
  { tr: "koordinasyon sayısı", en: "coordination number" },
  { tr: "yarı iletken", en: "semiconductor" },
  { tr: "korozyon", en: "corrosion" },
  { tr: "katodik koruma", en: "cathodic protection" },
  { tr: "stokiyometri", en: "stoichiometry" },
  { tr: "sınırlayıcı bileşen", en: "limiting reactant" },
  { tr: "entalpi", en: "enthalpy" },
  { tr: "molarite", en: "molarity", aciklama: "Bir litre çözeltideki çözünenin mol sayısı" },
  { tr: "molalite", en: "molality", aciklama: "Bir kilogram çözücüdeki çözünenin mol sayısı" },
  { tr: "elektroliz", en: "electrolysis" },
  { tr: "VSEPR", en: "valence shell electron pair repulsion", buyuk: true },
  ],
  benzerler: [],
};
