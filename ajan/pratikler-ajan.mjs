#!/usr/bin/env node
// pratikler-ajan: yönetim panelinden Claude'a verilen işleri yöneticinin kendi
// bilgisayarında yapan yerel ajan (Faz 2). GitHub Actions kullanılmaz; bilgisayar
// kapalıyken iş kuyrukta bekler.
//
// Döngü: /api/ajan/sonraki ile işi al -> origin/main'den ayrı bir worktree aç ->
// `claude -p` ile değişikliği yaptır -> `npm run denetle` (tsc, testler, build) ->
// geçerse commit, push ve `gh pr create` -> sonucu /api/ajan/isler/<id>'ye bildir.
// Çalışırken Claude'un adımları ve komut çıktıları saniyede bir /api/ajan/isler/<id>/olaylar'a
// yollanır; panel bunları canlı gösterir. Panelden "Durdur" denirse bu ucun cevabı
// iptal: true olur, ajan çalışan süreci durdurur ve işi iptal olarak bildirir.
// Birleştirme ve yayına alma her zaman yöneticidedir.
//
// Anahtar: AJAN_TOKEN ortam değişkeni ya da (macOS) Anahtar Zinciri'ndeki
// "pratikler-ajan" kaydı. Kayıt bir kez şöyle eklenir (anahtar dosyaya yazılmaz):
//   security add-generic-password -U -s pratikler-ajan -a "$USER" -w '<anahtar>'
//
// Ortam değişkenleri:
//   AJAN_TOKEN       Worker'daki `wrangler secret put AJAN_TOKEN` ile aynı değer
//   PRATIKLER_API    Varsayılan https://pratikler.selcukdinc.dev
//   DEPO             Deponun yerel kopyası; varsayılan bu dosyanın iki üst klasörü
//   ARALIK           Kuyruğu yoklama aralığı, saniye (varsayılan 120)
//   GITHUB_DEPO      Varsayılan selcukdinc/pratikler
// Kullanım: npm run ajan            (sürekli)
//           npm run ajan -- --bir-kez (tek iş alıp çıkar)

import { execFileSync, spawn } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync, symlinkSync } from "node:fs";
import { homedir, hostname, tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { satirBolucu, satirdanOlaylar } from "./olaylar.mjs";

const API = (process.env.PRATIKLER_API ?? "https://pratikler.selcukdinc.dev").replace(/\/$/, "");
// Anahtar önce ortamdan, yoksa macOS Anahtar Zinciri'nden okunur
function anahtarBul() {
  if (process.env.AJAN_TOKEN) return process.env.AJAN_TOKEN;
  if (process.platform !== "darwin") return null;
  try {
    return execFileSync("security", ["find-generic-password", "-s", "pratikler-ajan", "-w"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim() || null;
  } catch {
    return null;
  }
}
const TOKEN = anahtarBul();
const DEPO = resolve(process.env.DEPO ?? join(dirname(fileURLToPath(import.meta.url)), ".."));
const ARALIK = Number(process.env.ARALIK ?? 120) * 1000;
const GITHUB_DEPO = process.env.GITHUB_DEPO ?? "selcukdinc/pratikler";
const BIR_KEZ = process.argv.includes("--bir-kez");
const CLAUDE_SURE = 30 * 60 * 1000;

if (!TOKEN) {
  console.error(
    "Ajan anahtarı bulunamadı. Worker'a `npx wrangler secret put AJAN_TOKEN` ile verdiğin değeri bir kez\n" +
      "Anahtar Zinciri'ne ekle:  security add-generic-password -U -s pratikler-ajan -a \"$USER\" -w '<anahtar>'\n" +
      "ya da AJAN_TOKEN ortam değişkeniyle ver.",
  );
  process.exit(1);
}
// Servis ve .command içinde ~/.zshrc okunmaz; claude, gh ve node'un yaygın kurulum yerlerini PATH'e ekle
process.env.PATH = [
  process.env.PATH,
  join(homedir(), ".local", "bin"),
  join(homedir(), ".claude", "local"),
  "/opt/homebrew/bin",
  "/usr/local/bin",
]
  .filter(Boolean)
  .join(":");

const SURUM = JSON.parse(readFileSync(join(DEPO, "package.json"), "utf8")).version ?? "?";

const log = (...a) => console.log(new Date().toLocaleTimeString("tr-TR"), ...a);

// İptal istenince durdurulacak, o an çalışan alt süreçler
const calisanlar = new Set();

// Komutu çalıştırır; çıktıyı toplar. hataVer: çıkış kodu 0 değilse hata fırlatır.
// akis: çıktı parçaları geldikçe çağrılır (canlı günlük için)
function calistir(komut, argumanlar, { cwd = DEPO, sure = 10 * 60 * 1000, hataVer = true, girdi, akis } = {}) {
  return new Promise((ok, red) => {
    const p = spawn(komut, argumanlar, { cwd, env: process.env, stdio: ["pipe", "pipe", "pipe"] });
    calisanlar.add(p);
    p.on("exit", () => calisanlar.delete(p));
    let cikti = "";
    p.stdout.on("data", (d) => {
      cikti += d;
      akis?.(String(d));
    });
    p.stderr.on("data", (d) => {
      cikti += d;
      akis?.(String(d));
    });
    if (girdi) p.stdin.end(girdi);
    else p.stdin.end();
    const zaman = setTimeout(() => p.kill("SIGTERM"), sure);
    p.on("error", (e) => {
      clearTimeout(zaman);
      red(e);
    });
    p.on("close", (kod) => {
      clearTimeout(zaman);
      if (kod !== 0 && hataVer) red(Object.assign(new Error(`${komut} ${argumanlar.join(" ")} (${kod})\n${cikti.slice(-3000)}`), { cikti }));
      else ok({ kod, cikti });
    });
  });
}

async function api(yol, govde) {
  const r = await fetch(`${API}/api/ajan${yol}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(govde ?? {}),
  });
  const veri = await r.json().catch(() => null);
  if (!r.ok) throw new Error(`${yol}: ${r.status} ${veri?.error ?? ""}`);
  return veri;
}

// Bir işin canlı günlüğü: olaylar kuyrukta birikir, saniyede bir toplu gönderilir.
// Sunucu iptal derse çalışan süreçler durdurulur.
function gunlukAc(isId) {
  let kuyruk = [];
  let iptal = false;
  let gonderiyor = false;
  const gonder = async () => {
    if (gonderiyor) return;
    gonderiyor = true;
    try {
      // Boş kuyrukta da yoklanır ki uzun süren adımlarda iptal geç kalmasın
      do {
        const parca = kuyruk.slice(0, 50);
        kuyruk = kuyruk.slice(50);
        const r = await api(`/isler/${isId}/olaylar`, { olaylar: parca });
        if (r?.iptal && !iptal) {
          iptal = true;
          log("panelden durdurma istendi");
          for (const p of calisanlar) p.kill("SIGTERM");
        }
      } while (kuyruk.length);
    } catch (e) {
      log("günlük gönderilemedi:", e.message);
    } finally {
      gonderiyor = false;
    }
  };
  const zaman = setInterval(() => void gonder(), 1000);
  return {
    ekle: (tur, metin) => kuyruk.push({ tur, metin }),
    asama: (metin) => {
      log(metin);
      kuyruk.push({ tur: "asama", metin });
    },
    get iptal() {
      return iptal;
    },
    async kapat() {
      clearInterval(zaman);
      while (gonderiyor) await new Promise((r) => setTimeout(r, 100));
      if (kuyruk.length) await gonder();
    },
  };
}

// Komut çıktısını satır satır "cikti" olayı olarak günlüğe yazar
const ciktiAkisi = (gunluk) => {
  const b = satirBolucu((s) => gunluk.ekle("cikti", s.slice(0, 1000)));
  return { akis: (d) => b.ekle(d), bitir: () => b.bitir() };
};

const bildir = (id, durum, sonuc, prUrl) => api(`/isler/${id}`, { durum, sonuc: sonuc?.slice(-8000), prUrl }).catch((e) => log("bildirilemedi:", e.message));

// Sıradaki PR numarası: yenilikler.ts kaydı PR numarasıyla açılır (issue ve PR'lar aynı sayacı paylaşır)
async function siradakiPr() {
  try {
    const { cikti } = await calistir("gh", ["api", `repos/${GITHUB_DEPO}/issues?state=all&per_page=1&sort=created&direction=desc`, "--jq", ".[0].number // 0"]);
    return Number(cikti.trim()) + 1;
  } catch {
    return null;
  }
}

function istem(is, prNo) {
  return [
    `Pratikler deposunda (çatı platformu) yöneticinin şu isteğini yap. Pratik: ${is.pratik}.`,
    "",
    "İSTEK:",
    is.istek,
    "",
    "Kurallar:",
    "- Önce CLAUDE.md'yi oku ve oradaki kurallara uy. Pratiğin içeriği icerik/" + is.pratik + "/ altındadır.",
    "- Yalnızca isteğin gerektirdiği değişikliği yap; başka pratiklerin içeriğine dokunma.",
    prNo
      ? `- Kullanıcıya görünen bir değişiklikse src/yenilikler.ts'in en üstüne pr: ${prNo} ve bugünün tarihiyle bir kayıt ekle.`
      : "- Kullanıcıya görünen bir değişiklikse src/yenilikler.ts'e kayıt ekle (PR numarası bilinmiyor; mevcut en büyük numaranın bir fazlasını kullan).",
    `- Soru eklediysen ya da değiştirdiysen migrations/ altındaki son numaradan sonraki numarayla migration üret: npm run sorular:sql -- ${is.pratik} migrations/NNNN_kisa_ad.sql`,
    "- Bitirmeden önce `npm run denetle` çalıştır ve geçtiğinden emin ol.",
    "- git commit, push ya da PR açma; bunları ajan yapacak.",
    "- Son mesajında yaptığın değişikliği Türkçe, iki üç cümleyle özetle; bu özet PR açıklamasına girecek.",
  ].join("\n");
}

const genisYol = (y) => (y.startsWith("~/") ? join(homedir(), y.slice(2)) : y);

function pratikIstemi(g, prNo) {
  return [
    "Pratikler deposunda (çatı platformu) yeni bir pratik aç. CLAUDE.md'yi ve mevcut Tıp Elektroniği pratiğini (icerik/tip-elektronigi/) örnek al.",
    "",
    `Ad: ${g.ad}`,
    `Kimlik: ${g.id}  (icerik/${g.id}/)`,
    `Alt alan adı: ${g.alt}.selcukdinc.dev`,
    `Soru ve konu kimliği öneki: ${g.onek}-  (konular ${g.onek}-u1, ${g.onek}-u2 ...)`,
    `Katalog alanı: ${g.alan}`,
    `Kaynaklar: ${genisYol(g.kaynakKlasoru)} klasöründeki .md dosyaları (ders notları, kitap bölümleri)`,
    g.notlar ? `Yöneticinin notları: ${g.notlar}` : "",
    "",
    "Yapılacaklar:",
    `- icerik/${g.id}/meta.ts: üniteler kaynakların bölüm/hafta yapısından; kavramlar u<ünite>- önekli; etiketler kaynağın türüne göre (ders notu, kitap...); latex formül varsa true; yayinda: true.`,
    `- icerik/${g.id}/sorular/: her ünite için kaynağa dayanan, kendi cümlelerimizle yazılmış türetilmiş sorular (tf, mcq, fill karışık); her kavramın en az bir sorusu olsun. Kaynakta açıkça olmayan bilgiyi soru yapma.`,
    "- icerik/index.ts ve icerik/sorular.ts'e kaydet.",
    `- wrangler.jsonc routes'a { "pattern": "${g.alt}.selcukdinc.dev", "custom_domain": true } ekle. Başka alan adına dokunma.`,
    `- migrations/ altında sıradaki numarayla bir ayar migration'ı: INSERT INTO settings (key, value) VALUES ('${g.id}:current_week', '<ünite sayısı>'), ('${g.id}:show_original', '1'), ('${g.id}:announcement', '');`,
    `- Soruların migration'ı: npm run sorular:sql -- ${g.id} migrations/NNNN_${g.id.replace(/-/g, "_")}.sql`,
    prNo ? `- src/yenilikler.ts'in en üstüne pr: ${prNo} ve bugünün tarihiyle "${g.ad} Pratik açıldı" kaydı ekle.` : "- src/yenilikler.ts'e kayıt ekle.",
    "- README.md'deki pratik tablosuna bir satır ekle.",
    "- `npm run denetle` geçmeli. git commit, push ya da PR açma; bunları ajan yapacak.",
    "- Son mesajında kaç ünite ve kaç soru eklediğini, hangi kaynakları kullandığını Türkçe özetle.",
  ].filter(Boolean).join("\n");
}

// Ajanı dene: Claude çalıştırılmaz, makinedeki araçların durumu bildirilir
async function testYap(is) {
  const satir = async (ad, komut, arg) => {
    const r = await calistir(komut, arg, { hataVer: false, sure: 20_000 }).catch((e) => ({ kod: -1, cikti: e.message }));
    return `${r.kod === 0 ? "✓" : "✗"} ${ad}: ${r.cikti.trim().split("\n").slice(0, 3).join(" | ") || "(çıktı yok)"}`;
  };
  const satirlar = [
    `Makine: ${hostname()} · Node ${process.version} · ajan ${SURUM}`,
    `Depo: ${DEPO}`,
    await satir("claude", "claude", ["--version"]),
    await satir("gh", "gh", ["auth", "status"]),
    await satir("git", "git", ["remote", "get-url", "origin"]),
    `${existsSync(join(DEPO, "node_modules")) ? "✓" : "✗"} node_modules${existsSync(join(DEPO, "node_modules")) ? "" : " yok: depoda bir kez npm install çalıştır"}`,
  ];
  await bildir(is.id, "tamam", satirlar.join("\n"));
  log("test işi cevaplandı");
}

async function isYap(is) {
  if (is.tur === "test") return testYap(is);
  const kisa = is.id.slice(0, 8);
  const dal = `ajan/${kisa}`;
  const klasor = mkdtempSync(join(tmpdir(), `pratikler-${kisa}-`));
  const yeni = is.tur === "pratik" ? JSON.parse(is.istek) : null;
  log(`iş ${kisa} (${is.pratik}${yeni ? `, yeni pratik ${yeni.id}` : ""}): ${(yeni?.ad ?? is.istek).split("\n")[0].slice(0, 80)}`);
  const gunluk = gunlukAc(is.id);
  // İptal edildiyse sonucu iptal olarak bildirir ve true döner
  const durduysa = async () => {
    if (!gunluk.iptal) return false;
    gunluk.asama("İş panelden durduruldu");
    await gunluk.kapat();
    await bildir(is.id, "iptal", "Panelden durduruldu.");
    return true;
  };
  try {
    gunluk.asama(`Çalışma kopyası hazırlanıyor (${hostname()}, dal ${dal})`);
    await calistir("git", ["fetch", "origin", "main"]);
    await calistir("git", ["worktree", "add", "-B", dal, klasor, "origin/main"]);
    // Bağımlılıklar ana kopyadan paylaşılır (npm install her işte tekrarlanmasın)
    if (existsSync(join(DEPO, "node_modules"))) symlinkSync(join(DEPO, "node_modules"), join(klasor, "node_modules"), "dir");

    const prNo = await siradakiPr();
    const kaynak = yeni ? genisYol(yeni.kaynakKlasoru) : null;
    if (kaynak && !(existsSync(kaynak) && statSync(kaynak).isDirectory())) return bildir(is.id, "hata", `Kaynak klasörü bulunamadı: ${kaynak}`);
    // stream-json: her adım bir JSON satırı; günlüğe olay olarak akar, son satır özeti verir
    const claude = async (ek = "") => {
      gunluk.asama(ek ? "Claude denetim hatasını düzeltiyor" : "Claude çalışıyor");
      let ozet = "";
      const b = satirBolucu((s) => {
        const r = satirdanOlaylar(s);
        for (const o of r.olaylar) gunluk.ekle(o.tur, o.metin);
        if (r.ozet !== undefined) ozet = r.ozet;
      });
      const r = await calistir("claude", [
        "-p",
        ...(kaynak ? ["--add-dir", kaynak] : []),
        "--permission-mode", "acceptEdits",
        "--allowedTools", "Read,Edit,Write,Glob,Grep,TodoWrite,Bash(npm run denetle),Bash(npm run sorular\\:sql:*),Bash(npx tsc:*),Bash(npx vitest:*),Bash(ls:*)",
        "--output-format", "stream-json",
        "--verbose",
      ], { cwd: klasor, sure: yeni ? 2 * CLAUDE_SURE : CLAUDE_SURE, girdi: (yeni ? pratikIstemi(yeni, prNo) : istem(is, prNo)) + ek, akis: (d) => b.ekle(d), hataVer: false });
      b.bitir();
      if (r.kod !== 0 && !gunluk.iptal) throw new Error(`claude ${r.kod} koduyla bitti\n${(ozet || r.cikti).slice(-3000)}`);
      return ozet;
    };
    const denetle = async () => {
      gunluk.asama("Denetimler: npm run denetle (tsc, testler, build)");
      const c = ciktiAkisi(gunluk);
      const r = await calistir("npm", ["run", "denetle"], { cwd: klasor, hataVer: false, akis: c.akis });
      c.bitir();
      gunluk.ekle(r.kod === 0 ? "bilgi" : "hata", r.kod === 0 ? "Denetimler geçti" : `Denetimler geçmedi (çıkış ${r.kod})`);
      return r;
    };

    let ozet = await claude();
    if (await durduysa()) return;
    const degisti = (await calistir("git", ["status", "--porcelain"], { cwd: klasor })).cikti.trim();
    if (!degisti) {
      await gunluk.kapat();
      return bildir(is.id, "hata", `Claude depoda bir değişiklik yapmadı.\n\n${ozet}`);
    }
    gunluk.ekle("bilgi", `Değişen dosyalar:\n${degisti}`);

    let denetim = await denetle();
    if (await durduysa()) return;
    if (denetim.kod !== 0) {
      ozet = await claude(`\n\nÖnceki denemende \`npm run denetle\` geçmedi. Çıktının sonu:\n\n${denetim.cikti.slice(-4000)}\n\nHatayı düzelt.`);
      if (await durduysa()) return;
      denetim = await denetle();
      if (await durduysa()) return;
      if (denetim.kod !== 0) {
        await gunluk.kapat();
        return bildir(is.id, "hata", `Denetimler geçmedi:\n\n${denetim.cikti.slice(-4000)}`);
      }
    }
    gunluk.asama("Commit, push ve PR");

    const baslik = yeni ? `Yeni pratik: ${yeni.ad}` : `Claude: ${is.istek.split("\n")[0].slice(0, 70)}`;
    await calistir("git", ["add", "-A"], { cwd: klasor });
    await calistir("git", ["commit", "-q", "-m", `${baslik}\n\nYönetim panelinden verilen iş ${is.id}; yerel ajanla yapıldı.`], { cwd: klasor });
    await calistir("git", ["push", "-u", "origin", dal, "--force-with-lease"], { cwd: klasor });
    const istekMetni = yeni ? `Yeni pratik: **${yeni.ad}** (\`${yeni.id}\`, ${yeni.alt}.selcukdinc.dev), kaynaklar \`${yeni.kaynakKlasoru}\`${yeni.notlar ? `\n\n${yeni.notlar}` : ""}` : is.istek;
    const govde = `## İstek\n\n${istekMetni}\n\n## Yapılan\n\n${ozet.trim()}\n\nYerel denetimler (\`npm run denetle\`: tsc, testler, build) geçti. Yönetim panelindeki iş: \`${is.id}\`.`;
    let pr = null;
    try {
      const { cikti } = await calistir("gh", ["pr", "create", "--repo", GITHUB_DEPO, "--head", dal, "--base", "main", "--title", baslik, "--body-file", "-"], { cwd: klasor, girdi: govde });
      pr = cikti.match(/https:\/\/github\.com\/\S+\/pull\/\d+/)?.[0] ?? null;
    } catch (e) {
      log("PR açılamadı (gh kurulu ve giriş yapılmış mı?):", e.message.split("\n")[0]);
    }
    gunluk.asama(pr ? `PR açıldı: ${pr}` : `PR açılamadı; dal ${dal} gönderildi`);
    await gunluk.kapat();
    await bildir(is.id, "pr", pr ? ozet : `PR açılamadı; dal ${dal} gönderildi.\n\n${ozet}`, pr ?? undefined);
  } catch (e) {
    if (await durduysa()) return;
    log("hata:", e.message.split("\n")[0]);
    gunluk.ekle("hata", e.message.split("\n")[0]);
    await gunluk.kapat();
    await bildir(is.id, "hata", String(e.message));
  } finally {
    await gunluk.kapat();
    await calistir("git", ["worktree", "remove", "--force", klasor], { hataVer: false }).catch(() => {});
    rmSync(klasor, { recursive: true, force: true });
  }
}

// Nabız: panel ajanın açık olduğunu ve makinedeki araçları buradan görür
let araclar = null;
async function nabiz() {
  if (!araclar) {
    const surum = async (k, a) => (await calistir(k, a, { hataVer: false, sure: 15_000 }).catch(() => ({ kod: -1, cikti: "" })));
    const cl = await surum("claude", ["--version"]);
    const gh = await surum("gh", ["--version"]);
    araclar = { claude: cl.kod === 0 ? cl.cikti.trim().split("\n")[0] : null, gh: gh.kod === 0 ? gh.cikti.trim().split("\n")[0] : null };
  }
  await api("/nabiz", { makine: hostname(), depo: DEPO, surum: SURUM, node: process.version, aralikSn: ARALIK / 1000, ...araclar }).catch((e) =>
    log("nabız gönderilemedi:", e.message),
  );
}

async function dongu() {
  log(`ajan çalışıyor: ${API}, depo ${DEPO}, ${ARALIK / 1000} sn arayla`);
  for (;;) {
    await nabiz();
    try {
      const is = await api("/sonraki");
      if (is) await isYap(is);
      else if (BIR_KEZ) log("bekleyen iş yok");
    } catch (e) {
      log("kuyruğa ulaşılamadı:", e.message);
    }
    if (BIR_KEZ) return;
    await new Promise((r) => setTimeout(r, ARALIK));
  }
}

await dongu();
