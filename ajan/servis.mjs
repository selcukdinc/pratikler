#!/usr/bin/env node
// Yerel ajanı macOS'ta oturum açıkken hep çalışan bir servis (LaunchAgent) olarak
// kurar ya da kaldırır. Kurduktan sonra Terminal açmaya gerek kalmaz; bilgisayar
// açılıp oturum açılınca ajan kendiliğinden başlar, çökerse yeniden başlar.
// Anahtar dosyaya yazılmaz: ajan onu Anahtar Zinciri'nden ("pratikler-ajan") okur.
//
//   npm run ajan:servis -- kur      kurar ve başlatır
//   npm run ajan:servis -- kaldir   durdurur ve kaldırır
//   npm run ajan:servis -- durum    çalışıyor mu
// Günlük: ~/Library/Logs/pratikler-ajan.log

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ETIKET = "dev.selcukdinc.pratikler-ajan";
const PLIST = join(homedir(), "Library", "LaunchAgents", `${ETIKET}.plist`);
const GUNLUK = join(homedir(), "Library", "Logs", "pratikler-ajan.log");
const DEPO = resolve(join(dirname(fileURLToPath(import.meta.url)), ".."));
const komut = process.argv[2] ?? "durum";
const uid = process.getuid?.() ?? 501;
const xml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const launchctl = (...a) => execFileSync("launchctl", a, { stdio: "inherit" });

if (process.platform !== "darwin") {
  console.error("Servis kurulumu yalnızca macOS içindir. Başka sistemde `npm run ajan` ile çalıştır.");
  process.exit(1);
}

if (komut === "kur") {
  try {
    execFileSync("security", ["find-generic-password", "-s", "pratikler-ajan"], { stdio: "ignore" });
  } catch {
    console.error("Önce anahtarı Anahtar Zinciri'ne ekle:\n  security add-generic-password -U -s pratikler-ajan -a \"$USER\" -w '<anahtar>'");
    process.exit(1);
  }
  mkdirSync(dirname(PLIST), { recursive: true });
  // Giriş kabuğu (zsh -l) üzerinden: node, claude ve gh PATH'te bulunsun
  writeFileSync(PLIST, `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>${ETIKET}</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/zsh</string><string>-lc</string>
    <string>cd ${xml(JSON.stringify(DEPO))} &amp;&amp; exec node ajan/pratikler-ajan.mjs</string>
  </array>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>ThrottleInterval</key><integer>60</integer>
  <key>StandardOutPath</key><string>${xml(GUNLUK)}</string>
  <key>StandardErrorPath</key><string>${xml(GUNLUK)}</string>
</dict>
</plist>
`);
  try {
    execFileSync("launchctl", ["bootout", `gui/${uid}/${ETIKET}`], { stdio: "ignore" });
  } catch {
    // kurulu değildi
  }
  launchctl("bootstrap", `gui/${uid}`, PLIST);
  console.log(`Ajan servis olarak kuruldu ve başladı. Günlük: ${GUNLUK}`);
} else if (komut === "kaldir") {
  try {
    launchctl("bootout", `gui/${uid}/${ETIKET}`);
  } catch {
    // zaten durmuş
  }
  if (existsSync(PLIST)) rmSync(PLIST);
  console.log("Ajan servisi kaldırıldı.");
} else {
  try {
    execFileSync("launchctl", ["print", `gui/${uid}/${ETIKET}`], { stdio: "ignore" });
    console.log(`Servis kurulu. Günlük: ${GUNLUK}`);
  } catch {
    console.log("Servis kurulu değil. Kurmak için: npm run ajan:servis -- kur");
  }
}
