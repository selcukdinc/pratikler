// Kapalı uçlu soruların puanlaması. Sunucuda çalışır; doğru cevaplar
// istemciye hiç gönderilmez.

export type QuestionType = "tf" | "mcq" | "fill" | "code" | "wave";

export type Answer =
  | { value: boolean }
  | { index: number }
  | { blanks: string[] };

// fill sorularında her boşluk için kabul edilen yazımlar
type Expected =
  | { value: boolean }
  | { index: number }
  | { blanks: string[][] };

// Büyük/küçük harf, boşluklar, noktalama ve Türkçe karakterler önemsizdir
// (Türkçe klavyesi olmayan da "ozyeterlilik" yazabilsin)
const TR: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", â: "a", î: "i", û: "u" };
export function normalize(s: string): string {
  return s
    .toLocaleLowerCase("tr-TR")
    .replace(/[çğıöşüâîû]/g, (c) => TR[c] ?? c)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\s.,;:!?'"’()]+/g, "");
}

// fill sorularında her boşluğun ayrı ayrı doğru olup olmadığı; öğrenci yalnızca
// yanlış boşluğa odaklanabilsin. Boşluk sayısı tutmazsa null.
export function boslukSonuclari(expected: Expected, answer: Answer): boolean[] | null {
  if (!("blanks" in expected) || !("blanks" in answer)) return null;
  const want = expected.blanks as string[][];
  const got = answer.blanks as string[];
  if (!Array.isArray(got) || got.length !== want.length) return null;
  return want.map((options, i) => options.some((o) => normalize(o) === normalize(String(got[i] ?? ""))));
}

export function grade(type: QuestionType, expected: Expected, answer: Answer): boolean {
  switch (type) {
    case "tf":
      return "value" in expected && "value" in answer && expected.value === answer.value;
    case "mcq":
      return "index" in expected && "index" in answer && expected.index === answer.index;
    case "fill":
      return boslukSonuclari(expected, answer)?.every(Boolean) ?? false;
    default:
      // code ve wave soruları tohumlu iz karşılaştırmasıyla puanlanacak
      return false;
  }
}
