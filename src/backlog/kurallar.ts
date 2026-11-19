// Backlog pratiğinin metin kuralları: story kalıbı ve Given/When/Then denetimi. Lab
// deneyleri (icerik/backlog/istemci/etkilesim/ozel.tsx) ve Backlog Atölyesi'nin motoru
// (motor.ts) aynı kuralları kullanır. Anlama değil yapıya bakar; tarayıcıda çalışır.

export const GENEL_ROLLER = /^(bir )?(kullanıcı|geliştirici|sistem|admin|yazılımcı)$/i;
// \b Türkçe harfleri (ı, ş, ü...) kelime harfi saymaz; sınırlar \p{L} ile yazılır
const BELIRSIZ = /(?<!\p{L})(hızlı|kolay|kullanışlı|kullanıcı dostu|güzel|modern|esnek|basit)(?!\p{L})/iu;
const TEKNIK = /(?<!\p{L})(tablo|tablosu|tablosuna|indeks|veritabanı|servis|api|sunucu|kod)(?!\p{L})/iu;

export interface StoryDenetimi {
  uyarilar: string[];
  iyi: boolean;
}

export function storyDenetle(rol: string, istek: string, fayda: string): StoryDenetimi {
  const u: string[] = [];
  const r = rol.trim();
  const i = istek.trim();
  const f = fayda.trim();
  if (!r) u.push("Rol boş: kimin ihtiyacı?");
  else if (GENEL_ROLLER.test(r)) u.push(`"${r}" ihtiyacı olan gerçek bir kişiyi anlatmıyor; somut bir kullanıcı rolü yaz.`);
  if (!i) u.push("İstek boş: ne istiyor?");
  else {
    if (/(?<!\p{L})ve(?!\p{L})|,/u.test(i)) u.push("İstek birden çok şey içeriyor; her biri ayrı story olabilir.");
    if (BELIRSIZ.test(i)) u.push("İstekte ölçülemeyen bir kelime var (hızlı, kolay, kullanışlı...); ne kadar ve nasıl anlaşılacak?");
    if (TEKNIK.test(i)) u.push("İstek bir çözüm adımı gibi; kullanıcının ihtiyacını yaz, nasıl yapılacağını takıma bırak.");
  }
  if (!f) u.push("Fayda yok: neden istendiğini bilmeyen takım daha iyi bir çözüm öneremez.");
  return { uyarilar: u, iyi: u.length === 0 };
}

const ARAYUZ = /(?<!\p{L})(tıkla\p{L}*|buton\p{L}*|düğme\p{L}*|sayfa\p{L}*|kutu\p{L}*|yeşil|kırmızı|ekranda)(?!\p{L})/iu;
const GHERKIN_BELIRSIZ = /(?<!\p{L})(hızlı|düzgün|kolay|makul|uygun|kullanıcı dostu|doğru şekilde|sorunsuz)(?!\p{L})/iu;

export function gherkinDenetle(given: string, when: string, then: string): StoryDenetimi {
  const u: string[] = [];
  if (!given.trim()) u.push("Given boş: senaryo hangi durumda başlıyor?");
  if (!when.trim()) u.push("When boş: hangi eylem ya da olay oluyor?");
  if (!then.trim()) u.push("Then boş: beklenen sonuç yoksa senaryo test edilemez.");
  if (/(?<!\p{L})(ve sonra|sonra da|ardından)(?!\p{L})/iu.test(when)) u.push("When birden çok eylem içeriyor; her davranış ayrı senaryo olsun.");
  if (GHERKIN_BELIRSIZ.test(then) || GHERKIN_BELIRSIZ.test(when)) u.push("Ölçülemeyen bir kelime var (hızlı, düzgün, makul...); gözlenebilir bir sonuç yaz.");
  if (ARAYUZ.test(`${given} ${when} ${then}`)) u.push("Senaryo arayüz adımlarıyla yazılmış; davranışı iş dilinde anlat (\"ayırtmak istediğinde\"), ekranı değil.");
  return { uyarilar: u, iyi: u.length === 0 };
}

