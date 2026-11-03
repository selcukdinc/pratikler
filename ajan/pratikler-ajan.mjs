#!/usr/bin/env node
// pratikler-ajan: yönetim panelinden Claude'a verilen işleri yöneticinin kendi
// bilgisayarında yapan yerel ajan (Faz 2). GitHub Actions kullanılmaz; bilgisayar
// kapalıyken iş kuyrukta bekler.
//
// Döngü: /api/ajan/sonraki ile işi al -> origin/main'den ayrı bir worktree aç ->
// `claude -p` ile değişikliği yaptır -> `npm run denetle` (tsc, testler, build) ->
// geçerse commit, push ve `gh pr create` -> sonucu /api/ajan/isler/<id>'ye bildir.
// Birleştirme ve yayına alma her zaman yöneticidedir.
//
// Ortam değişkenleri:
//   AJAN_TOKEN       Worker'daki `wrangler secret put AJAN_TOKEN` ile aynı değer (zorunlu)
//   PRATIKLER_API    Varsayılan https://pratikler.selcukdinc.dev
//   DEPO             Deponun yerel kopyası; varsayılan bu dosyanın iki üst klasörü
//   ARALIK           Kuyruğu yoklama aralığı, saniye (varsayılan 120)
//   GITHUB_DEPO      Varsayılan selcukdinc/pratikler
// Kullanım: npm run ajan            (sürekli)
//           npm run ajan -- --bir-kez (tek iş alıp çıkar)

import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const API = (process.env.PRATIKLER_API ?? "https://pratikler.selcukdinc.dev").replace(/\/$/, "");
const TOKEN = process.env.AJAN_TOKEN;
const DEPO = resolve(process.env.DEPO ?? join(dirname(fileURLToPath(import.meta.url)), ".."));
const ARALIK = Number(process.env.ARALIK ?? 120) * 1000;
const GITHUB_DEPO = process.env.GITHUB_DEPO ?? "selcukdinc/pratikler";
const BIR_KEZ = process.argv.includes("--bir-kez");
const CLAUDE_SURE = 30 * 60 * 1000;

if (!TOKEN) {
  console.error("AJAN_TOKEN tanımlı değil. Worker'a `npx wrangler secret put AJAN_TOKEN` ile verdiğin değeri burada da ver.");
  process.exit(1);
}

const log = (...a) => console.log(new Date().toLocaleTimeString("tr-TR"), ...a);

// Komutu çalıştırır; çıktıyı toplar. hataVer: çıkış kodu 0 değilse hata fırlatır
function calistir(komut, argumanlar, { cwd = DEPO, sure = 10 * 60 * 1000, hataVer = true, girdi } = {}) {
  return new Promise((ok, red) => {
    const p = spawn(komut, argumanlar, { cwd, env: process.env, stdio: ["pipe", "pipe", "pipe"] });
    let cikti = "";
    p.stdout.on("data", (d) => (cikti += d));
    p.stderr.on("data", (d) => (cikti += d));
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

async function isYap(is) {
  const kisa = is.id.slice(0, 8);
  const dal = `ajan/${kisa}`;
  const klasor = mkdtempSync(join(tmpdir(), `pratikler-${kisa}-`));
  log(`iş ${kisa} (${is.pratik}): ${is.istek.split("\n")[0].slice(0, 80)}`);
  try {
    await calistir("git", ["fetch", "origin", "main"]);
    await calistir("git", ["worktree", "add", "-B", dal, klasor, "origin/main"]);
    // Bağımlılıklar ana kopyadan paylaşılır (npm install her işte tekrarlanmasın)
    if (existsSync(join(DEPO, "node_modules"))) symlinkSync(join(DEPO, "node_modules"), join(klasor, "node_modules"), "dir");

    const prNo = await siradakiPr();
    const claude = (ek = "") =>
      calistir("claude", [
        "-p",
        "--permission-mode", "acceptEdits",
        "--allowedTools", "Read,Edit,Write,Glob,Grep,Bash(npm run denetle),Bash(npm run sorular\\:sql:*),Bash(npx tsc:*),Bash(npx vitest:*),Bash(ls:*)",
        "--output-format", "text",
      ], { cwd: klasor, sure: CLAUDE_SURE, girdi: istem(is, prNo) + ek });

    let { cikti: ozet } = await claude();
    const degisti = (await calistir("git", ["status", "--porcelain"], { cwd: klasor })).cikti.trim();
    if (!degisti) return bildir(is.id, "hata", `Claude depoda bir değişiklik yapmadı.\n\n${ozet}`);

    let denetim = await calistir("npm", ["run", "denetle"], { cwd: klasor, hataVer: false });
    if (denetim.kod !== 0) {
      log("denetimler geçmedi, Claude'a bir kez düzelttiriliyor");
      ({ cikti: ozet } = await claude(`\n\nÖnceki denemende \`npm run denetle\` geçmedi. Çıktının sonu:\n\n${denetim.cikti.slice(-4000)}\n\nHatayı düzelt.`));
      denetim = await calistir("npm", ["run", "denetle"], { cwd: klasor, hataVer: false });
      if (denetim.kod !== 0) return bildir(is.id, "hata", `Denetimler geçmedi:\n\n${denetim.cikti.slice(-4000)}`);
    }

    const baslik = `Claude: ${is.istek.split("\n")[0].slice(0, 70)}`;
    await calistir("git", ["add", "-A"], { cwd: klasor });
    await calistir("git", ["commit", "-q", "-m", `${baslik}\n\nYönetim panelinden verilen iş ${is.id}; yerel ajanla yapıldı.`], { cwd: klasor });
    await calistir("git", ["push", "-u", "origin", dal, "--force-with-lease"], { cwd: klasor });
    const govde = `## İstek\n\n${is.istek}\n\n## Yapılan\n\n${ozet.trim()}\n\nYerel denetimler (\`npm run denetle\`: tsc, testler, build) geçti. Yönetim panelindeki iş: \`${is.id}\`.`;
    let pr = null;
    try {
      const { cikti } = await calistir("gh", ["pr", "create", "--repo", GITHUB_DEPO, "--head", dal, "--base", "main", "--title", baslik, "--body-file", "-"], { cwd: klasor, girdi: govde });
      pr = cikti.match(/https:\/\/github\.com\/\S+\/pull\/\d+/)?.[0] ?? null;
    } catch (e) {
      log("PR açılamadı (gh kurulu ve giriş yapılmış mı?):", e.message.split("\n")[0]);
    }
    await bildir(is.id, "pr", pr ? ozet : `PR açılamadı; dal ${dal} gönderildi.\n\n${ozet}`, pr ?? undefined);
    log(pr ? `PR açıldı: ${pr}` : `dal gönderildi: ${dal}`);
  } catch (e) {
    log("hata:", e.message.split("\n")[0]);
    await bildir(is.id, "hata", String(e.message));
  } finally {
    await calistir("git", ["worktree", "remove", "--force", klasor], { hataVer: false }).catch(() => {});
    rmSync(klasor, { recursive: true, force: true });
  }
}

async function dongu() {
  log(`ajan çalışıyor: ${API}, depo ${DEPO}, ${ARALIK / 1000} sn arayla`);
  for (;;) {
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
