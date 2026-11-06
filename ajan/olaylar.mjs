// `claude -p --output-format stream-json --verbose` çıktısını panelin canlı
// günlüğüne uygun kısa olaylara çevirir. Saf fonksiyonlar; ajan/olaylar.test.ts denetler.
//
// Her satır bir JSON nesnesidir:
//   {type:"system", subtype:"init", model, ...}
//   {type:"assistant", message:{content:[{type:"text",text} | {type:"tool_use",name,input}]}}
//   {type:"user", message:{content:[{type:"tool_result",content,is_error}]}}
//   {type:"result", subtype, result, duration_ms, total_cost_usd, num_turns, is_error}

const KISA = 300;
const ORTA = 2000;

const kes = (s, n) => (s.length > n ? `${s.slice(0, n)}… (+${s.length - n} karakter)` : s);
const tekSatir = (s) => s.replace(/\s+/g, " ").trim();

// Araç çağrısının tek satırlık özeti: hangi dosya, hangi komut, hangi arama
export function aracOzeti(ad, girdi) {
  const g = girdi ?? {};
  const yol = g.file_path ?? g.path ?? g.notebook_path;
  switch (ad) {
    case "Bash":
      return `$ ${kes(tekSatir(String(g.command ?? "")), KISA)}`;
    case "Read":
    case "Write":
    case "Edit":
    case "MultiEdit":
    case "NotebookEdit":
      return `${ad} ${yol ?? ""}`.trim();
    case "Glob":
    case "Grep":
      return `${ad} ${kes(String(g.pattern ?? ""), KISA)}${yol ? ` (${yol})` : ""}`;
    case "TodoWrite":
      return `Yapılacaklar: ${(g.todos ?? [])
        .map((t) => `${t.status === "completed" ? "✓" : t.status === "in_progress" ? "✱" : "○"} ${t.content}`)
        .join(" · ")}`;
    default:
      return `${ad} ${kes(tekSatir(JSON.stringify(g)), KISA)}`;
  }
}

function sonucMetni(icerik) {
  if (typeof icerik === "string") return icerik;
  if (Array.isArray(icerik)) return icerik.map((p) => (p?.type === "text" ? p.text : "")).join("\n");
  return "";
}

// Bir JSON satırını sıfır ya da daha çok olaya çevirir. Bitiş satırında ozet (Claude'un son mesajı) da döner.
export function satirdanOlaylar(satir) {
  let v;
  try {
    v = JSON.parse(satir);
  } catch {
    return satir.trim() ? { olaylar: [{ tur: "cikti", metin: kes(satir, ORTA) }] } : { olaylar: [] };
  }
  const olaylar = [];
  if (v.type === "system" && v.subtype === "init") {
    olaylar.push({ tur: "bilgi", metin: `Claude başladı${v.model ? ` · ${v.model}` : ""}` });
  } else if (v.type === "assistant") {
    for (const p of v.message?.content ?? []) {
      if (p.type === "text" && p.text?.trim()) olaylar.push({ tur: "metin", metin: kes(p.text.trim(), ORTA) });
      else if (p.type === "tool_use") olaylar.push({ tur: "arac", metin: aracOzeti(p.name, p.input) });
    }
  } else if (v.type === "user") {
    for (const p of v.message?.content ?? []) {
      if (p.type !== "tool_result") continue;
      const m = sonucMetni(p.content).trim();
      if (p.is_error) olaylar.push({ tur: "hata", metin: kes(m || "Araç hata verdi", ORTA) });
      else if (m) olaylar.push({ tur: "sonuc", metin: kes(m, 600) });
    }
  } else if (v.type === "result") {
    const parcalar = [
      v.duration_ms ? `${Math.round(v.duration_ms / 1000)} sn` : null,
      v.num_turns ? `${v.num_turns} adım` : null,
      typeof v.total_cost_usd === "number" ? `$${v.total_cost_usd.toFixed(2)}` : null,
    ].filter(Boolean);
    olaylar.push({ tur: v.is_error ? "hata" : "bilgi", metin: `Claude bitti${parcalar.length ? ` · ${parcalar.join(" · ")}` : ""}` });
    return { olaylar, ozet: typeof v.result === "string" ? v.result : "" };
  }
  return { olaylar };
}

// Akan metni satırlara böler; yarım kalan son satırı bir sonraki parçaya saklar
export function satirBolucu(her) {
  let artik = "";
  return {
    ekle(parca) {
      artik += parca;
      const satirlar = artik.split("\n");
      artik = satirlar.pop() ?? "";
      for (const s of satirlar) if (s.trim()) her(s);
    },
    bitir() {
      if (artik.trim()) her(artik);
      artik = "";
    },
  };
}
