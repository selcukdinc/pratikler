// "Nereden başlamalıyım?" seviye testi: her ünite grubundan (Agile'ın kökleri, Scrum
// çerçevesi, Sahada agile) üç soru. Bir grubun en az iki sorusunu bilen o grubu geçmiş
// sayılır; öneri geçilemeyen ilk gruptur. Sorular soru havuzunda yoktur.
import type { SeviyeTestiTanimi } from "../../../src/components/SeviyeTesti";

export const SEVIYE_TESTI: SeviyeTestiTanimi = {
  gecme: 2,
  hepsiGectiNotu: "Sprint simülatöründeki \"Dört Sprint, bir ürün\" göreviyle kendini dene ve 12. ünitenin dallanan senaryolarına bak.",
  sorular: [
    // Agile'ın kökleri
    {
      grup: 0,
      soru: "Agile yaklaşım en çok hangi tür işte waterfall'a üstün gelir?",
      secenekler: ["Adımları baştan belli, tekrarlanan işlerde", "Gereksinimi ve çözümü belirsiz, öğrendikçe netleşen işlerde", "Hiç değişiklik beklenmeyen kısa işlerde", "Yalnızca donanım projelerinde"],
      dogru: 1,
    },
    {
      grup: 0,
      soru: "Agile Manifesto \"kapsamlı belgeler yerine çalışan yazılım\" der. Bu ne demektir?",
      secenekler: ["Belge yazılmaz", "Belgenin de değeri var ama çalışan yazılım daha değerli", "Belgeyi yalnızca müşteri yazar", "Belgeler proje sonunda yazılır"],
      dogru: 1,
    },
    {
      grup: 0,
      soru: "Little yasasına göre verim aynı kalırken devam eden iş (WIP) yarıya inerse ortalama çevrim süresi ne olur?",
      secenekler: ["İki katına çıkar", "Değişmez", "Yarıya iner", "Sıfıra iner"],
      dogru: 2,
    },
    // Scrum çerçevesi
    {
      grup: 1,
      soru: "Product Backlog'un sıralanmasından kim hesap verebilirdir?",
      secenekler: ["Scrum Master", "Developers", "Product Owner", "Bölüm yöneticisi"],
      dogru: 2,
    },
    {
      grup: 1,
      soru: "Increment'in taahhüdü hangisidir?",
      secenekler: ["Sprint Goal", "Product Goal", "Definition of Done", "Definition of Ready"],
      dogru: 2,
    },
    {
      grup: 1,
      soru: "Sprint'in ortasında bir öğenin beklenenden büyük olduğu anlaşıldı. Rehber'e göre ne yapılır?",
      secenekler: ["Sprint uzatılır", "Developers kapsamı PO ile yeniden görüşür; Sprint Goal korunur", "Sprint Goal öğeye göre yeniden yazılır", "Scrum Master Sprint'i iptal eder"],
      dogru: 1,
    },
    // Sahada agile
    {
      grup: 2,
      soru: "Yönetim iki takımı velocity'lerine göre karşılaştırıyor. Temel sorun nedir?",
      secenekler: ["Velocity takımın kendi göreli ölçeğidir, takımlar arasında karşılaştırılamaz", "Velocity yalnızca Kanban'da ölçülür", "Velocity'yi yalnızca PO hesaplayabilir", "Sorun yok, doğru bir karşılaştırma"],
      dogru: 0,
    },
    {
      grup: 2,
      soru: "Squad her dört Sprint'te bir yalnızca hata düzelten bir \"sertleştirme Sprint'i\" yapıyor. Bu en çok neyi gösterir?",
      secenekler: ["Sprint'ler fazla kısa", "Definition of Done yetersiz; iş bitmeden Done sayılıyor", "Takım fazla kalabalık", "PO çok sık değişiklik istiyor"],
      dogru: 1,
    },
    {
      grup: 2,
      soru: "Aynı ürüne çalışan üç Scrum Takımı Rehber'e göre neyi paylaşmalıdır?",
      secenekler: ["Aynı Daily Scrum'ı", "Aynı Sprint Backlog'u", "Aynı Product Goal, Product Backlog ve Product Owner'ı", "Aynı Scrum Master'ı"],
      dogru: 2,
    },
  ],
};
