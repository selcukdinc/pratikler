// Git sandbox'ının görevleri. Hedefler ortamın son hâline bakar; aynı sonuca
// giden her yol kabul edilir. Her görevin örnek çözümü gorevler.test.ts'te
// çalıştırılır: başlangıçta hedefler tutmamalı, çözümden sonra hepsi tutmalı.
import type { Gorev } from "../../../src/gitsim/gorev";
import {
  commitSayisi, dalAdiniAl, gecmisteVarMi, headDosyalari, izleniyor, sonMesaj, temizMi,
} from "../../../src/gitsim/gorev";
import { ataMi, commitAgaci, commitOku, gecmis, icerik, soy } from "../../../src/gitsim/depo";
import { prCi } from "../../../src/gitsim/platform";
import { uzakBul, uzakDalUcu } from "../../../src/gitsim/uzak";
import {
  BOT_OLAYI, CI_LINT, envHazir, glDosya, glPlatform, glUc, KAFE_GL, KAFE_GL_TEMEL, KAFE_TEMEL, mrVar, ODEME_TEMEL, odemeDosyasi, odemedeVar, odemePlatformu, ORNEK_ANAHTAR, ornekIptal, platform, prVar, sizdi,
  UC_ORTAM, uzakDosya, uzakUc as kafeUc,
} from "./kafe";
import type { Ortam } from "../../../src/gitsim/tipler";
import { uzakGecmisteYol } from "./dersler/unite-18";

const HESAP_JS = "function topla(a, b) {\n  return a + b;\n}\n";

// Bir commit'te dosyanın içeriği
function dosyaCommitte(o: Ortam, commit: string, yol: string): string | null {
  const d = o.depo!;
  const h = commitAgaci(d, commit)[yol];
  return h ? icerik(d, h) : null;
}

// ---------------- Kademe 1: Acemi ----------------

const kimlik: Gorev = {
  id: "kimlik",
  kademe: 1,
  unite: 2,
  baslik: "Kendini tanıt",
  hikaye:
    "Yeni bilgisayarına Git'i kurdun. Commit'lerin üstüne kimin adı yazılacak? Git henüz bilmiyor. " +
    "Adını ve e-posta adresini bütün depoların için (global) ayarla.",
  globalConfig: {},
  hedefler: [
    { aciklama: "user.name global olarak ayarlı", denetle: (o) => !!o.globalConfig["user.name"]?.trim() },
    { aciklama: "user.email global olarak ayarlı ve içinde @ var", denetle: (o) => /\S+@\S+/.test(o.globalConfig["user.email"] ?? "") },
  ],
  ipuclari: [
    "Ayarlar `git config` ile yazılır; bütün depolar için `--global` eklenir.",
    "Ad için: `git config --global user.name \"Adın Soyadın\"` (boşluk varsa tırnak şart).",
  ],
  cozum: ['git config --global user.name "Deniz Kaya"', 'git config --global user.email "deniz@ornek.dev"'],
  sonNot: "Bu ayarlar ~/.gitconfig dosyasına yazılır ve her commit'in yazar satırına girer. GitHub'daki e-postanla aynı olursa commit'lerin profiline bağlanır.",
};

const ilkDepo: Gorev = {
  id: "ilk-depo",
  kademe: 1,
  unite: 3,
  baslik: "Klasörü depoya çevir",
  hikaye: "Kişisel web sayfan için bir klasör açtın, içinde iki dosya var. Git bu klasörü henüz takip etmiyor. Klasörü bir Git deposuna çevir.",
  dosyalar: { "index.html": "<h1>Merhaba</h1>\n", "stil.css": "h1 { color: teal; }\n" },
  hedefler: [{ aciklama: "Proje klasöründe bir Git deposu var", denetle: (o) => o.depo !== null }],
  ipuclari: ["Bir klasörü depoya çeviren komut tek kelimedir: `git ...`", "`git init`"],
  cozum: ["git init"],
  sonNot: "git init yalnızca gizli bir .git klasörü açar; dosyaların henüz izlenmiyor. `git status` yazıp kırmızı 'Untracked files' listesine bak.",
};

const ilkCommit: Gorev = {
  id: "ilk-commit",
  kademe: 1,
  unite: 3,
  baslik: "İlk anlık görüntü",
  hikaye: "Depo hazır ama boş. index.html ve stil.css dosyalarını ilk commit'le kaydet. Mesaj ne yaptığını anlatsın.",
  dosyalar: { "index.html": "<h1>Merhaba</h1>\n", "stil.css": "h1 { color: teal; }\n" },
  kurulum: ["git init"],
  hedefler: [
    { aciklama: "En az bir commit var", denetle: (o) => commitSayisi(o) >= 1 },
    { aciklama: "Son commit'te iki dosya da var", denetle: (o) => "index.html" in headDosyalari(o) && "stil.css" in headDosyalari(o) },
    { aciklama: "Çalışma dizini temiz (commit'lenmemiş değişiklik yok)", denetle: (o) => temizMi(o, true) },
  ],
  ipuclari: [
    "Commit iki adımdır: önce hazırlık alanına ekle (`git add`), sonra kaydet (`git commit`).",
    "`git add .` bulunduğun klasördeki her şeyi ekler. Mesajı `-m \"...\"` ile verirsin.",
  ],
  cozum: ["git add .", 'git commit -m "İlk sayfa ve stil"'],
};

const secerekEkle: Gorev = {
  id: "secerek-ekle",
  kademe: 1,
  unite: 3,
  baslik: "Yalnızca gerekeni kaydet",
  hikaye:
    "hesap.js'e çıkarma fonksiyonu ekledin; aynı anda notlar.txt'ye kendine yapılacaklar listesi yazdın. " +
    "Commit yalnızca hesap.js'teki değişikliği içermeli; notlar.txt depoya girmemeli ama silinmemeli de.",
  dosyalar: { "hesap.js": HESAP_JS },
  kurulum: [
    "git init",
    "git add hesap.js",
    'git commit -m "Toplama fonksiyonu"',
    'printf "function cikar(a, b) {\\n  return a - b;\\n}\\n" >> hesap.js',
    'echo "yarın: çarpmayı ekle" > notlar.txt',
  ],
  hedefler: [
    { aciklama: "Yeni bir commit var ve hesap.js'teki çıkarma fonksiyonu kaydedildi", denetle: (o) => commitSayisi(o) >= 2 && /cikar/.test(headDosyalari(o)["hesap.js"] ?? "") },
    { aciklama: "notlar.txt hiçbir commit'e girmedi", denetle: (o) => !gecmisteVarMi(o, "notlar.txt") },
    { aciklama: "notlar.txt diskte duruyor", denetle: (o) => "notlar.txt" in o.dosyalar },
  ],
  ipuclari: [
    "`git status` iki dosyayı ayrı ayrı gösterir. `git add .` her şeyi alır; burada istemiyorsun.",
    "`git add hesap.js` yalnızca o dosyayı hazırlık alanına koyar.",
  ],
  cozum: ["git add hesap.js", 'git commit -m "Çıkarma fonksiyonu"'],
  sonNot: "Hazırlık alanı (staging) tam bunun için var: neyin commit'e gireceğini sen seçersin.",
};

const geriCek: Gorev = {
  id: "geri-cek",
  kademe: 1,
  unite: 3,
  baslik: "Yanlışlıkla eklenen dosya",
  hikaye:
    "`git add .` yazdın ve sifreler.txt de hazırlık alanına girdi. Henüz commit atmadın, şansın yaver gitti. " +
    "sifreler.txt'yi hazırlık alanından çıkar (dosya silinmesin), app.js'i commit'le.",
  dosyalar: { "app.js": "console.log('çalışıyor');\n", "sifreler.txt": "veritabani: P@rola123\n" },
  kurulum: ["git init", "git add ."],
  hedefler: [
    { aciklama: "app.js commit'lendi", denetle: (o) => "app.js" in headDosyalari(o) },
    { aciklama: "sifreler.txt hiçbir commit'e girmedi", denetle: (o) => !!o.depo && !gecmisteVarMi(o, "sifreler.txt") },
    { aciklama: "sifreler.txt hazırlık alanında değil", denetle: (o) => !!o.depo && !izleniyor(o, "sifreler.txt") },
    { aciklama: "sifreler.txt diskte duruyor", denetle: (o) => "sifreler.txt" in o.dosyalar },
  ],
  ipuclari: [
    "`git status` hazırlık alanından çıkarmanın komutunu parantez içinde söyler.",
    "Henüz hiç commit yokken `git rm --cached <dosya>`, commit varken `git restore --staged <dosya>` kullanılır.",
  ],
  cozum: ["git rm --cached sifreler.txt", 'git commit -m "Uygulama girişi"'],
  sonNot: "Commit'ten önce yakalamak en ucuz kurtuluştur. Commit'e, hele push'a girmiş bir şifre ise geçmişte kalır; 14. ünitede göreceğiz.",
};

const gitignore: Gorev = {
  id: "gitignore",
  kademe: 1,
  unite: 4,
  baslik: "Gürültüyü sustur",
  hikaye:
    "Projende logs/ klasörü ve kocaman bir node_modules/ var; `git status` her seferinde bunları gösteriyor. " +
    "Bir .gitignore yazıp ikisini de yok say ve .gitignore'u commit'le.",
  dosyalar: {
    "index.js": "require('express');\n",
    "package.json": '{ "name": "site" }\n',
    "logs/sunucu.log": "09:00 basladi\n",
    "node_modules/express/index.js": "module.exports = {};\n",
  },
  kurulum: ["git init", "git add index.js package.json", 'git commit -m "Başlangıç"'],
  hedefler: [
    { aciklama: ".gitignore commit'lendi", denetle: (o) => ".gitignore" in headDosyalari(o) },
    { aciklama: "git status'ta izlenmeyen dosya kalmadı", denetle: (o) => temizMi(o, true) },
    { aciklama: "logs ve node_modules depoya girmedi", denetle: (o) => !gecmisteVarMi(o, "logs/sunucu.log") && !gecmisteVarMi(o, "node_modules/express/index.js") },
  ],
  ipuclari: [
    "Dosyaya satır eklemek için `echo \"logs/\" >> .gitignore` yazabilir ya da `nano .gitignore` ile açabilirsin.",
    "Her satır bir kural: `logs/` ve `node_modules/`. Sonra yalnızca .gitignore'u ekleyip commit'le.",
  ],
  cozum: ['echo "logs/" > .gitignore', 'echo "node_modules/" >> .gitignore', "git add .gitignore", 'git commit -m ".gitignore eklendi"'],
};

const DEDEKTIF_SATIR = "const indirim = 0.5;";
const dedektif: Gorev = {
  id: "dedektif",
  kademe: 1,
  unite: 4,
  baslik: "Geçmişte dedektif",
  hikaye:
    "Mağazada bütün ürünler yarı fiyatına satılıyor! kampanya.js'teki `" + DEDEKTIF_SATIR + "` satırı bir commit'le girmiş. " +
    "O satırı ekleyen commit'i bul ve üzerine `bulgu` adında bir etiket koy.",
  dosyalar: { "kampanya.js": "const indirim = 0;\n" },
  kurulum: [
    "git init",
    "git add .",
    'git commit -m "Kampanya modülü"',
    'echo "// yaz kampanyası hazırlığı" >> kampanya.js',
    'git commit -am "Yaz kampanyası notu"',
    'echo "const indirim = 0.5;" > kampanya.js',
    'git commit -am "Biçim düzeltmeleri"',
    'echo "export default indirim;" >> kampanya.js',
    'git commit -am "Dışa aktarım eklendi"',
    'echo "// TODO: testler" >> kampanya.js',
    'git commit -am "Not eklendi"',
  ],
  hedefler: [
    {
      aciklama: "`bulgu` etiketi satırı ekleyen commit'te",
      denetle: (o) => {
        const d = o.depo;
        const r = d?.refs["refs/tags/bulgu"];
        if (!d || !r) return false;
        const c = soy(d, r);
        const ebeveyn = commitOku(d, c).ebeveynler[0];
        const has = (h: string | undefined) => !!h && (dosyaCommitte(o, h, "kampanya.js") ?? "").includes(DEDEKTIF_SATIR);
        return has(c) && !has(ebeveyn);
      },
    },
  ],
  ipuclari: [
    "`git log --oneline` commit'leri listeler; mesajlar her zaman doğruyu söylemez.",
    "`git log -p` ya da `git show <kimlik>` her commit'in neyi değiştirdiğini gösterir. `+` ile başlayan satırı ara.",
    "Bulunca: `git tag bulgu <kimlik>`.",
  ],
  cozum: ["git log -p", "git tag bulgu HEAD~2"],
  sonNot: "Mesajı 'Biçim düzeltmeleri' olan commit fiyatı değiştirmiş. İyi commit mesajı, değişikliği dürüstçe anlatan mesajdır.",
};

const envCikar: Gorev = {
  id: "env-cikar",
  kademe: 1,
  unite: 4,
  baslik: ".env depodan çıksın",
  hikaye:
    "Bir önceki commit'te .env dosyası da depoya girmiş; içinde veritabanı parolası var. Henüz push etmedin. " +
    ".env'i Git'in takibinden çıkar (dosya senin diskinde kalsın), bir daha eklenmesin diye .gitignore'a yaz ve commit'le.",
  dosyalar: { "app.js": "require('dotenv').config();\n", ".env": "DB_PAROLA=gizli-deger\n" },
  kurulum: ["git init", "git add .", 'git commit -m "Uygulama ve ayarlar"'],
  hedefler: [
    { aciklama: ".env son commit'te yok", denetle: (o) => !!o.depo && commitSayisi(o) >= 2 && !(".env" in headDosyalari(o)) },
    { aciklama: ".env diskte duruyor", denetle: (o) => ".env" in o.dosyalar },
    { aciklama: ".gitignore .env'i yok sayıyor ve commit'lendi", denetle: (o) => /^\/?\.env\s*$/m.test(headDosyalari(o)[".gitignore"] ?? "") },
    { aciklama: "Çalışma dizini temiz", denetle: (o) => temizMi(o, true) },
  ],
  ipuclari: [
    "`git rm --cached <dosya>` dosyayı takipten çıkarır ama silmez.",
    "Sonra `echo \".env\" > .gitignore`, ardından .gitignore'u ekle ve commit'le.",
  ],
  cozum: ["git rm --cached .env", 'echo ".env" > .gitignore', "git add .gitignore", 'git commit -m ".env takipten çıkarıldı"'],
  sonNot:
    "Dikkat: parola hâlâ ilk commit'te duruyor. `git show HEAD~1:.env` ile görebilirsin. Push edilmiş bir sırrı silmek yetmez, sır değiştirilir (14. ünite).",
};

const kurtar: Gorev = {
  id: "kurtar",
  kademe: 1,
  unite: 4,
  baslik: "Bozulan dosyaları kurtar",
  hikaye:
    "Gece yarısı çalışırken stil.css'i yanlışlıkla sildin, index.html'i de bozdun. İkisi de son commit'te sağlamdı. " +
    "Yeni commit atmadan ikisini de son commit'teki hâline döndür.",
  dosyalar: { "index.html": "<h1>Merhaba</h1>\n", "stil.css": "h1 { color: teal; }\n" },
  kurulum: ["git init", "git add .", 'git commit -m "Sayfa"', "rm stil.css", 'echo "<h1>asdfgh" > index.html'],
  hedefler: [
    { aciklama: "stil.css geri geldi", denetle: (o) => o.dosyalar["stil.css"] === "h1 { color: teal; }\n" },
    { aciklama: "index.html son commit'teki hâlinde", denetle: (o) => o.dosyalar["index.html"] === "<h1>Merhaba</h1>\n" },
    { aciklama: "Yeni commit atılmadı", denetle: (o) => commitSayisi(o) === 1 },
  ],
  ipuclari: ["`git status` ne yapacağını parantez içinde yazar.", "`git restore <dosya>` dosyayı son kaydedilen hâline döndürür; birden çok dosya verebilirsin."],
  cozum: ["git restore stil.css index.html"],
  sonNot: "restore çalışma dizinindeki değişikliği geri dönüşü olmadan atar. Kaydetmediğin bir şeyi Git bilemez.",
};

const mesajDuzelt: Gorev = {
  id: "mesaj-duzelt",
  kademe: 1,
  unite: 4,
  baslik: "Son commit'i düzelt",
  hikaye:
    "Az önce commit attın ama iki şey ters gitti: mesaja 'Giriş sayfsı' yazdın ve giris.css'i eklemeyi unuttun. " +
    "Henüz push etmedin. Yeni bir commit açmadan son commit'i düzelt: mesaj 'Giriş sayfası' olsun, giris.css de içinde olsun.",
  dosyalar: { "giris.html": "<form></form>\n", "giris.css": "form { margin: auto; }\n" },
  kurulum: ["git init", "git add giris.html", 'git commit -m "Giriş sayfsı"'],
  hedefler: [
    { aciklama: "Depoda yine tek commit var", denetle: (o) => commitSayisi(o) === 1 },
    { aciklama: "Mesaj 'Giriş sayfası'", denetle: (o) => sonMesaj(o) === "Giriş sayfası" },
    { aciklama: "giris.css commit'in içinde", denetle: (o) => "giris.css" in headDosyalari(o) },
  ],
  ipuclari: ["Unutulan dosyayı önce hazırlık alanına ekle.", "`git commit --amend -m \"yeni mesaj\"` son commit'i yeniden yazar."],
  cozum: ["git add giris.css", 'git commit --amend -m "Giriş sayfası"'],
  sonNot: "--amend yeni bir commit kimliği üretir. Paylaşılmış (push edilmiş) commit'lerde kullanma; ekip arkadaşlarının geçmişi bozulur.",
};

const mainYap: Gorev = {
  id: "main-yap",
  kademe: 1,
  unite: 5,
  baslik: "master değil main",
  hikaye:
    "Eski bir Git ile açtığın depo `master` dalında başlamış. GitHub'da yeni depoların varsayılan dalı `main`. " +
    "Push etmeden önce dalın adını `main` yap.",
  globalConfig: { "user.name": "Deniz Kaya", "user.email": "deniz@ornek.dev" },
  dosyalar: { "README.md": "# Proje\n" },
  kurulum: ["git init", "git add .", 'git commit -m "README"'],
  hedefler: [
    { aciklama: "Üzerinde durduğun dalın adı main", denetle: (o) => dalAdiniAl(o) === "main" },
    { aciklama: "master dalı kalmadı", denetle: (o) => !!o.depo && !o.depo.refs["refs/heads/master"] },
    { aciklama: "Commit kaybolmadı", denetle: (o) => commitSayisi(o) === 1 },
  ],
  ipuclari: ["Dalları `git branch` gösterir; yeniden adlandırmak için bir seçeneği var.", "`git branch -m main`"],
  cozum: ["git branch -m main"],
  sonNot: "Bundan sonraki depolar için `git config --global init.defaultBranch main` yazarsan bu adımı hiç yaşamazsın.",
};

// ---------------- Kademe 2: Başlangıç ----------------

const dalUcu = (o: Ortam, ad: string) => o.depo?.refs["refs/heads/" + ad] ?? null;
const ebeveynSayisi = (o: Ortam, h: string | null) => (o.depo && h ? commitOku(o.depo, h).ebeveynler.length : 0);
const dalCommitSayisi = (o: Ortam, ad: string) => {
  const d = o.depo;
  const h = dalUcu(o, ad);
  if (!d || !h) return 0;
  let n = 0;
  const yigin = [h];
  const gorulen = new Set<string>();
  while (yigin.length) {
    const c = yigin.pop()!;
    if (gorulen.has(c)) continue;
    gorulen.add(c);
    n++;
    yigin.push(...commitOku(d, c).ebeveynler);
  }
  return n;
};
const ISARET = /^(<{7}|={7}|>{7})/m;

const SEPET = { "sepet.js": "export function toplam(sepet) {\n  return sepet.tutar;\n}\n", "README.md": "# Kafe Mavi sipariş\n" };
const SEPET_KUR = ["git init", "git add .", 'git commit -m "Sepet"'];

const dalAc: Gorev = {
  id: "dal-ac",
  kademe: 2,
  unite: 6,
  baslik: "İş kendi dalında",
  hikaye:
    "Sprint panosunda sana US-D21 atandı: sepete indirim kodu. Ekip kuralı: main'e doğrudan commit yok, her iş kendi dalında. " +
    "`feature/US-D21-indirim-kodu` dalını aç, `indirim.js` dosyasını oluşturup o dalda commit'le. main'e dokunma.",
  dosyalar: SEPET,
  kurulum: SEPET_KUR,
  hedefler: [
    { aciklama: "feature/US-D21-indirim-kodu dalı var", denetle: (o) => !!dalUcu(o, "feature/US-D21-indirim-kodu") },
    { aciklama: "indirim.js o dalda commit'lendi", denetle: (o) => { const h = dalUcu(o, "feature/US-D21-indirim-kodu"); return !!h && "indirim.js" in commitAgaci(o.depo!, h); } },
    { aciklama: "main hâlâ tek commit'te", denetle: (o) => dalCommitSayisi(o, "main") === 1 },
  ],
  ipuclari: ["Dalı açıp aynı anda ona geçen komut: `git switch -c <ad>`.", "Sonra her zamanki gibi: dosyayı oluştur, `git add`, `git commit`."],
  cozum: ["git switch -c feature/US-D21-indirim-kodu", 'echo "export const KODLAR = {};" > indirim.js', "git add indirim.js", 'git commit -m "İndirim kodları tablosu"'],
  sonNot: "Dal adındaki `feature/` öneki ve iş numarası, PR listesinde ve geçmişte işin ne olduğunu bir bakışta söyler.",
};

const ileriSar: Gorev = {
  id: "ileri-sar",
  kademe: 2,
  unite: 6,
  baslik: "Dalı al, dalı sil",
  hikaye:
    "`ozellik` dalındaki iki commit hazır ve main dal açıldığından beri hiç ilerlemedi. ozellik'i main'e birleştir (yeni birleştirme commit'i oluşmasın) ve işi biten dalı sil.",
  dosyalar: SEPET,
  kurulum: [...SEPET_KUR, "git switch -c ozellik", 'echo "// KDV dahil" >> sepet.js', 'git commit -am "KDV notu"', 'echo "## Kurulum" >> README.md', 'git commit -am "Kurulum başlığı"'],
  hedefler: [
    { aciklama: "main üç commit'te ve iki değişiklik de içinde", denetle: (o) => dalCommitSayisi(o, "main") === 3 },
    { aciklama: "Birleştirme commit'i yok (ileri sarma)", denetle: (o) => ebeveynSayisi(o, dalUcu(o, "main")) === 1 },
    { aciklama: "ozellik dalı silindi", denetle: (o) => !!o.depo && !dalUcu(o, "ozellik") },
    { aciklama: "main dalındasın", denetle: (o) => dalAdiniAl(o) === "main" },
  ],
  ipuclari: ["Birleştirme, almak istediğin dalda yapılır: önce main'e geç.", "`git merge ozellik` ileri sarar; sonra `git branch -d ozellik`."],
  cozum: ["git switch main", "git merge ozellik", "git branch -d ozellik"],
  sonNot: "main ilerlemediği için Git yalnızca işaretçiyi kaydırdı (Fast-forward). Birleşmiş dalı silmek commit'leri silmez.",
};

const izBirak: Gorev = {
  id: "iz-birak",
  kademe: 2,
  unite: 6,
  baslik: "Birleştirmenin izi kalsın",
  hikaye:
    "Ekip kuralı: main'e alınan her özellik geçmişte bir birleştirme commit'iyle görünmeli; ileri sarma istenmiyor. " +
    "`menu` dalını bu kurala uyarak main'e birleştir.",
  dosyalar: SEPET,
  kurulum: [...SEPET_KUR, "git switch -c menu", 'echo "export const MENU = [];" > menu.js', "git add menu.js", 'git commit -m "Menü listesi"', "git switch main"],
  hedefler: [
    { aciklama: "main'in ucunda iki ebeveynli bir birleştirme commit'i var", denetle: (o) => ebeveynSayisi(o, dalUcu(o, "main")) === 2 },
    { aciklama: "menu.js main'de", denetle: (o) => { const h = dalUcu(o, "main"); return !!h && "menu.js" in commitAgaci(o.depo!, h); } },
  ],
  ipuclari: ["Burada düz `git merge` ileri sarar. İleri sarmayı yasaklayan bir seçenek var.", "`git merge --no-ff menu`"],
  cozum: ["git merge --no-ff menu"],
  sonNot: "--no-ff, ileri sarma mümkün olsa bile birleştirme commit'i oluşturur. GitHub'daki \"Create a merge commit\" düğmesi de böyle çalışır.",
};

const yanlisDal: Gorev = {
  id: "yanlis-dal",
  kademe: 2,
  unite: 6,
  baslik: "Yanlış dalda iki commit",
  hikaye:
    "Giriş formu doğrulamasını yazdın, iki commit attın ve sonra fark ettin: main'deydin! Henüz push etmedin. " +
    "Bu iki commit `bugfix/US-D12-login-validation` dalında olmalı, main ise ilk commit'e geri dönmeli. Sonunda o dalda ol.",
  dosyalar: { "giris.js": "export function dogrula(eposta) {\n  return true;\n}\n" },
  kurulum: [
    "git init", "git add .", 'git commit -m "Giriş iskeleti"',
    "printf 'export function dogrula(eposta) {\\n  return eposta.includes(\"@\");\\n}\\n' > giris.js", 'git commit -am "E-posta denetimi"',
    'echo "// boş girişe izin yok" >> giris.js', 'git commit -am "Boş giriş notu"',
  ],
  hedefler: [
    { aciklama: "bugfix/US-D12-login-validation dalında üç commit var", denetle: (o) => dalCommitSayisi(o, "bugfix/US-D12-login-validation") === 3 },
    { aciklama: "main tek commit'e döndü", denetle: (o) => dalCommitSayisi(o, "main") === 1 },
    { aciklama: "bugfix dalındasın ve çalışma dizini temiz", denetle: (o) => dalAdiniAl(o) === "bugfix/US-D12-login-validation" && temizMi(o) },
  ],
  ipuclari: [
    "Önce commit'leri kaybetmemek için bulunduğun yerde yeni bir dal aç (geçmeden): `git branch <ad>`.",
    "Sonra main'i iki commit geri sar: `git reset --hard HEAD~2`. Commit'ler yeni dalda güvende.",
    "Son olarak yeni dala geç.",
  ],
  cozum: ["git branch bugfix/US-D12-login-validation", "git reset --hard HEAD~2", "git switch bugfix/US-D12-login-validation"],
  sonNot: "Sıra önemli: önce dal, sonra reset. Tersini yapsaydın commit'leri ancak reflog'dan bulabilirdin. Push etmiş olsaydın reset yerine revert gerekirdi.",
};

const kopukKurtar: Gorev = {
  id: "kopuk-kurtar",
  kademe: 2,
  unite: 6,
  baslik: "Kopuk HEAD'de kalan commit",
  hikaye:
    "Eski bir sürümü açıp (kopuk HEAD) üstüne 'Koyu tema denemesi' commit'ini attın, sonra main'e döndün. Deneme beğenildi ama commit hiçbir dalda yok! " +
    "Onu `koyu-tema` adında bir dala kurtar.",
  dosyalar: { "stil.css": "body { background: white; }\n" },
  kurulum: ["git init", "git add .", 'git commit -m "Açık tema"', "git switch --detach HEAD", 'echo "body { background: #111; }" > stil.css', 'git commit -am "Koyu tema denemesi"', "git switch main"],
  hedefler: [
    { aciklama: "koyu-tema dalı var", denetle: (o) => !!dalUcu(o, "koyu-tema") },
    { aciklama: "koyu-tema dalının ucu 'Koyu tema denemesi' commit'i", denetle: (o) => { const h = dalUcu(o, "koyu-tema"); return !!h && commitOku(o.depo!, h).mesaj.trim() === "Koyu tema denemesi"; } },
  ],
  ipuclari: ["Commit silinmedi, yalnızca onu gösteren bir işaretçi yok. HEAD'in gittiği her yeri `git reflog` listeler.", "Kimliği bulunca: `git branch koyu-tema <kimlik>` (ya da `HEAD@{1}`)."],
  cozum: ["git branch koyu-tema HEAD@{1}"],
  sonNot: "Git main'e dönerken seni uyarmıştı: 'Warning: you are leaving 1 commit behind'. Kopuk HEAD'de iş yapacaksan baştan `git switch -c` ile dal aç.",
};

const FIYAT_JS = "const KDV = 0.20;\nfunction fiyat(net) {\n  return net * (1 + KDV);\n}\n";
const CAKISMA = [
  "git init", "git add .", 'git commit -m "Fiyat hesabı"',
  "git switch -c indirim",
  "printf 'const KDV = 0.20;\\nfunction fiyat(net, indirim = 0) {\\n  return net * (1 - indirim) * (1 + KDV);\\n}\\n' > fiyat.js",
  'git commit -am "İndirim parametresi"',
  "git switch main",
  "printf 'const KDV = 0.18;\\nfunction fiyat(net) {\\n  return net * (1 + KDV);\\n}\\n' > fiyat.js",
  'git commit -am "KDV yüzde 18"',
];

const cakismaCoz: Gorev = {
  id: "cakisma-coz",
  kademe: 2,
  unite: 7,
  baslik: "İki doğru, bir dosya",
  hikaye:
    "main'de KDV 0.18 yapıldı, `indirim` dalında da fiyat fonksiyonuna indirim eklendi. İkisi de doğru. " +
    "indirim'i main'e birleştir; sonuçta KDV 0.18 olsun ve indirim parametresi kalsın.",
  dosyalar: { "fiyat.js": FIYAT_JS },
  kurulum: CAKISMA,
  hedefler: [
    { aciklama: "Birleştirme commit'i oluştu", denetle: (o) => ebeveynSayisi(o, dalUcu(o, "main")) === 2 && !o.depo!.islem },
    { aciklama: "fiyat.js'te çakışma işareti yok", denetle: (o) => !ISARET.test(headDosyalari(o)["fiyat.js"] ?? "<<<<<<<") },
    { aciklama: "KDV 0.18 ve indirim parametresi var", denetle: (o) => { const f = headDosyalari(o)["fiyat.js"] ?? ""; return f.includes("0.18") && f.includes("1 - indirim"); } },
  ],
  ipuclari: [
    "`git merge indirim` çakışmayla duracak; `git status` hangi dosya olduğunu söyler.",
    "Dosyayı `nano fiyat.js` ile aç (ya da dosya şeridinden dokun), işaretleri sil ve iki değişikliği birleştir.",
    "Bitince `git add fiyat.js` ve `git commit -m \"...\"`.",
  ],
  cozum: [
    "git merge indirim",
    "printf 'const KDV = 0.18;\\nfunction fiyat(net, indirim = 0) {\\n  return net * (1 - indirim) * (1 + KDV);\\n}\\n' > fiyat.js",
    "git add fiyat.js",
    'git commit -m "indirim birleşti"',
  ],
  sonNot: "Git ilk satırdaki KDV değişikliğini neden kendisi alamadı? Çünkü iki değişiklik birbirine yapışık satırlardaydı ve tek bir çakışma bölgesine düştü.",
};

const vazgec: Gorev = {
  id: "vazgec",
  kademe: 2,
  unite: 7,
  baslik: "Birleştirmeden vazgeç",
  hikaye:
    "`indirim` dalını birleştirmeye başladın, çakışma çıktı. Tam o sırada takım lideri yazdı: 'indirim dalı daha bitmedi, birleştirme!' " +
    "Birleştirmeyi iptal et; depo birleştirmeden önceki hâline dönsün.",
  dosyalar: { "fiyat.js": FIYAT_JS },
  kurulum: [...CAKISMA, "! git merge indirim"],
  hedefler: [
    { aciklama: "Süren bir birleştirme yok", denetle: (o) => !!o.depo && !o.depo.islem && !Object.keys(o.depo.catisma).length },
    { aciklama: "main'de birleştirme commit'i yok", denetle: (o) => ebeveynSayisi(o, dalUcu(o, "main")) === 1 && dalCommitSayisi(o, "main") === 2 },
    { aciklama: "Çalışma dizini temiz", denetle: (o) => temizMi(o) },
  ],
  ipuclari: ["`git status` sana birleştirmeyi nasıl iptal edeceğini parantez içinde söyler.", "`git merge --abort`"],
  cozum: ["git merge --abort"],
  sonNot: "--abort birleştirmeden önceki duruma döner. Çakışmayı yarım çözmüş olsan bile o değişiklikler gider; işine yarayan bir şey varsa önce bir kenara kopyala.",
};

const BUTCE = { "odeme.js": "export const LIMIT = 1000;\n", "kargo.js": "export const UCRET = 30;\n" };

const canliGeriAl: Gorev = {
  id: "canli-geri-al",
  kademe: 2,
  unite: 9,
  baslik: "Canlıdaki hatayı geri al",
  hikaye:
    "Dün 'Ödeme limitini kaldır' commit'i main'e girdi ve push edildi; bugün üstüne kargo ücreti commit'i geldi. Ödeme limiti kalkınca dolandırıcılık başladı! " +
    "Geçmişi silmeden yalnızca limit commit'inin etkisini geri al; kargo değişikliği kalsın.",
  dosyalar: BUTCE,
  kurulum: [
    "git init", "git add .", 'git commit -m "Ödeme ve kargo"',
    'echo "export const LIMIT = Infinity;" > odeme.js', 'git commit -am "Ödeme limitini kaldır"',
    'echo "export const UCRET = 25;" > kargo.js', 'git commit -am "Kargo ücreti indirildi"',
  ],
  hedefler: [
    { aciklama: "Geçmiş silinmedi, üstüne yeni commit geldi", denetle: (o) => commitSayisi(o) === 4 },
    { aciklama: "Ödeme limiti 1000'e döndü", denetle: (o) => (headDosyalari(o)["odeme.js"] ?? "").includes("1000") },
    { aciklama: "Kargo ücreti 25 olarak kaldı", denetle: (o) => (headDosyalari(o)["kargo.js"] ?? "").includes("25") },
  ],
  ipuclari: ["Paylaşılmış commit için reset değil `git revert`.", "Geri alınacak commit son commit değil, bir öncesi: `git revert HEAD~1` ya da `git log --oneline`'daki kimliği."],
  cozum: ["git revert HEAD~1"],
  sonNot: "revert, verilen commit'in tersini yeni bir commit olarak ekler. Ekip arkadaşlarının geçmişi bozulmaz, geri alma da kayıtta kalır.",
};

const acilStash: Gorev = {
  id: "acil-stash",
  kademe: 2,
  unite: 9,
  baslik: "Yarım iş ve acil hata",
  hikaye:
    "`kampanya` dalında yarım bir iş var: kargo.js değişti ve yeni bir kampanya.js dosyası açtın (henüz hiç eklenmedi). Canlıda acil bir hata var: main'de odeme.js'teki limit 500 olmalı. " +
    "Yarım işini kaybetmeden main'e geç, düzeltmeyi commit'le, kampanya'ya dön ve yarım işini (yeni dosya dahil) geri getir.",
  dosyalar: BUTCE,
  kurulum: ["git init", "git add .", 'git commit -m "Ödeme ve kargo"', "git switch -c kampanya", 'echo "export const UCRET = 0;" > kargo.js', 'echo "export const KOD = \\"YAZ25\\";" > kampanya.js'],
  hedefler: [
    { aciklama: "main'de limit 500", denetle: (o) => { const h = dalUcu(o, "main"); return !!h && icerik(o.depo!, commitAgaci(o.depo!, h)["odeme.js"]!).includes("500"); } },
    { aciklama: "kampanya dalındasın", denetle: (o) => dalAdiniAl(o) === "kampanya" },
    { aciklama: "Yarım iş geri geldi: kargo.js değişikliği ve kampanya.js", denetle: (o) => (o.dosyalar["kargo.js"] ?? "").includes("= 0") && "kampanya.js" in o.dosyalar },
    { aciklama: "Kenarda bir şey kalmadı", denetle: (o) => !!o.depo && o.depo.stash.length === 0 },
  ],
  ipuclari: [
    "`git stash` izlenmeyen dosyaları almaz; `-u` ekle.",
    "Sıra: `git stash -u`, `git switch main`, düzelt ve commit'le, `git switch kampanya`, `git stash pop`.",
  ],
  cozum: ["git stash -u", "git switch main", 'echo "export const LIMIT = 500;" > odeme.js', 'git commit -am "Acil: ödeme limiti 500"', "git switch kampanya", "git stash pop"],
  sonNot: "-u olmadan kampanya.js çalışma dizininde kalır ve main'e geçtiğinde seninle gelir; yanlışlıkla main'e commit'lenebilir.",
};

const reflogKurtar: Gorev = {
  id: "reflog-kurtar",
  kademe: 2,
  unite: 9,
  baslik: "Kaybolan üç commit",
  hikaye:
    "Bir arkadaşın 'temizlik' için `git reset --hard HEAD~3` yazdı ve son üç commit 'yok oldu'. Hiçbiri push edilmemişti. " +
    "main'i reset'ten önceki hâline geri getir.",
  dosyalar: SEPET,
  kurulum: [
    ...SEPET_KUR,
    'echo "// 1" >> sepet.js', 'git commit -am "Ara toplam"',
    'echo "// 2" >> sepet.js', 'git commit -am "Vergi"',
    'echo "// 3" >> sepet.js', 'git commit -am "Kupon"',
    "git reset --hard HEAD~3",
  ],
  hedefler: [
    { aciklama: "main'de dört commit var", denetle: (o) => dalCommitSayisi(o, "main") === 4 },
    { aciklama: "Son commit 'Kupon'", denetle: (o) => sonMesaj(o) === "Kupon" },
    { aciklama: "Çalışma dizini temiz", denetle: (o) => temizMi(o) },
  ],
  ipuclari: ["`git log` artık o commit'leri göstermez ama `git reflog` gösterir.", "reset'ten hemen önceki konum `HEAD@{1}`: `git reset --hard HEAD@{1}`."],
  cozum: ["git reset --hard HEAD@{1}"],
  sonNot: "reflog yereldir ve kayıtlar varsayılan olarak 90 gün durur. Hiç commit'lenmemiş değişiklikleri ise hiçbir şey kurtaramaz.",
};

// ---------------- Kademe 3: Kalfa (uzak depolar, rebase) ----------------

// Kafe Mavi'nin GitHub deposu: Ayşe açar, main ve test dallarını gönderir, sen klonlarsın
const KAFE = "https://github.com/kafe-mavi/siparis.git";
const KAFE_KUR = [
  `@uzak ${KAFE}`,
  `@ayse git clone ${KAFE}`,
  '@ayse echo "kahve 40" > menu.txt',
  '@ayse echo "# Kafe Mavi sipariş" > README.md',
  "@ayse git add .",
  '@ayse git commit -m "İlk sürüm"',
  "@ayse git push",
];
const uzakUc = (o: Ortam, dal: string) => uzakDalUcu(o, KAFE, dal);
const uzakMesajlar = (o: Ortam, dal: string): string[] => {
  const u = uzakBul(o, KAFE);
  const h = uzakUc(o, dal);
  return u && h ? gecmis(u, [h]).map((c) => commitOku(u, c).mesaj.trim()) : [];
};
const uzakDuzMu = (o: Ortam, dal: string) => {
  const u = uzakBul(o, KAFE);
  const h = uzakUc(o, dal);
  return !!u && !!h && gecmis(u, [h]).every((c) => commitOku(u, c).ebeveynler.length < 2);
};
const uzakAtaMi = (o: Ortam, ata: string | null, dal: string) => {
  const u = uzakBul(o, KAFE);
  const h = uzakUc(o, dal);
  return !!u && !!h && !!ata && ataMi(u, ata, h);
};
// Dalın main'de olmayan commit'leri (yeniden eskiye)
const dalinKendi = (o: Ortam, dal: string, taban = "main"): string[] => {
  const d = o.depo;
  const h = dalUcu(o, dal);
  const t = dalUcu(o, taban);
  return d && h ? gecmis(d, [h], t ? [t] : []) : [];
};

const ilkPush: Gorev = {
  id: "ilk-push",
  kademe: 3,
  unite: 10,
  baslik: "test'ten aç, kendi dalını gönder",
  hikaye:
    "Ekip akışı: özellik dalları `test`'ten açılır. Depoyu zaten klonladın. US-D03e için `feature/US-D03e-docker-compose-local` dalını " +
    "GitHub'daki `test`'in ucundan aç, `docker-compose.yml` ekleyip commit'le ve dalı upstream'iyle birlikte GitHub'a gönder.",
  kurulum: [...KAFE_KUR, "@ayse git switch -c test", '@ayse echo "test ortamı" > ortam.txt', "@ayse git add .", '@ayse git commit -m "Test ortamı"', "@ayse git push -u origin test", `git clone ${KAFE}`],
  hedefler: [
    { aciklama: "GitHub'da feature/US-D03e-docker-compose-local var", denetle: (o) => !!uzakUc(o, "feature/US-D03e-docker-compose-local") },
    { aciklama: "Dal test'in ucundan açıldı", denetle: (o) => uzakAtaMi(o, uzakUc(o, "test"), "feature/US-D03e-docker-compose-local") },
    { aciklama: "docker-compose.yml commit'lendi", denetle: (o) => { const h = uzakUc(o, "feature/US-D03e-docker-compose-local"); const u = uzakBul(o, KAFE); return !!u && !!h && "docker-compose.yml" in commitAgaci(u, h); } },
    { aciklama: "Yerel dal upstream'ini izliyor", denetle: (o) => !!o.depo?.config["branch.feature/US-D03e-docker-compose-local.merge"] },
  ],
  ipuclari: [
    "Klonda yalnızca main yerel dal olarak var; test'i `origin/test` olarak görürsün (`git branch -a`).",
    "`git switch -c feature/US-D03e-docker-compose-local origin/test` dalı test'in ucundan açar.",
    "İlk gönderimde upstream'i kur: `git push -u origin <dal>`.",
  ],
  cozum: [
    "git switch -c feature/US-D03e-docker-compose-local origin/test",
    'echo "services: {}" > docker-compose.yml',
    "git add docker-compose.yml",
    'git commit -m "Yerel docker compose"',
    "git push -u origin feature/US-D03e-docker-compose-local",
  ],
  sonNot: "Sıradaki adım GitHub'da PR açmak: önce bu dal → dev, sorun yoksa aynı dal → test. 12. ünitede bu akışı korumalarıyla birlikte göreceksin.",
};

const pushReddi: Gorev = {
  id: "push-reddi",
  kademe: 3,
  unite: 10,
  baslik: "Reddedilen push",
  hikaye:
    "main'e küçük bir düzeltme gönderen tek kişi olduğunu sanıyorsun. `kampanya.txt` dosyasını oluşturup commit'le ve GitHub'a gönder. " +
    "Bu arada Ayşe de boş durmayacak. Geçmişte gereksiz birleştirme commit'i olmasın.",
  kurulum: [...KAFE_KUR, `git clone ${KAFE}`],
  olaylar: [
    {
      id: "ayse-push",
      // Sen main'de ilk yerel commit'ini attığında
      kosul: (o) => { const d = o.depo; const h = dalUcu(o, "main"); const u = d?.refs["refs/remotes/origin/main"]; return !!d && !!h && !!u && h !== u && ataMi(d, u, h); },
      kim: "ayse",
      komutlar: ['echo "su 10" >> menu.txt', 'git commit -am "Su eklendi"', "git push"],
      bildirim: "Ayşe az önce main'e \"Su eklendi\" commit'ini push etti.",
    },
  ],
  hedefler: [
    { aciklama: "GitHub'daki main'de senin kampanya commit'in var", denetle: (o) => { const u = uzakBul(o, KAFE); const h = uzakUc(o, "main"); return !!u && !!h && "kampanya.txt" in commitAgaci(u, h); } },
    { aciklama: "Ayşe'nin commit'i kaybolmadı", denetle: (o) => uzakMesajlar(o, "main").includes("Su eklendi") },
    { aciklama: "Birleştirme commit'i yok", denetle: (o) => uzakDuzMu(o, "main") },
  ],
  ipuclari: [
    "Push \"fetch first\" diye reddedilirse GitHub'da sende olmayan commit vardır.",
    "Uzaktakini alıp kendi commit'ini onun üstüne taşı: `git pull --rebase`, sonra yeniden `git push`.",
  ],
  cozum: ['echo "Kış kampanyası" > kampanya.txt', "git add kampanya.txt", 'git commit -m "Kampanya metni"', "git pull --rebase", "git push"],
  enAz: 5,
  sonNot: "`git config --global pull.rebase true` ile düz `git pull` da hep rebase yapar. Push'u önce deneyip reddedilmek olağandır; üç yıldız bu bir komutluk payı bırakır.",
};

const guvenliForce: Gorev = {
  id: "guvenli-force",
  kademe: 3,
  unite: 10,
  baslik: "PR dalını güncel tut",
  hikaye:
    "`ozellik` dalını GitHub'a gönderip PR açtın. İncelemede \"main çok ilerledi, dalını main'in üstüne al\" denildi. Dal yalnızca senin. " +
    "Dalı GitHub'daki main'in son hâlinin üstüne taşı ve GitHub'daki dalı güvenli biçimde güncelle.",
  kurulum: [
    ...KAFE_KUR,
    `git clone ${KAFE}`,
    "git switch -c ozellik", 'echo "%20" > indirim.txt', "git add .", 'git commit -m "İndirim oranı"', "git push -u origin ozellik",
    '@ayse echo "Adres: Liman Cad. 5" >> README.md', '@ayse git commit -am "Adres"', "@ayse git push",
  ],
  hedefler: [
    { aciklama: "GitHub'daki ozellik, GitHub'daki main'in üstünde", denetle: (o) => uzakAtaMi(o, uzakUc(o, "main"), "ozellik") && uzakUc(o, "ozellik") !== uzakUc(o, "main") },
    { aciklama: "Birleştirme commit'i yok", denetle: (o) => uzakDuzMu(o, "ozellik") },
    { aciklama: "Yerel ozellik GitHub'la aynı", denetle: (o) => !!uzakUc(o, "ozellik") && uzakUc(o, "ozellik") === dalUcu(o, "ozellik") },
  ],
  ipuclari: [
    "Önce uzaktaki main'i indir: `git fetch`.",
    "`git rebase origin/main` dalını yeni main'in üstüne taşır.",
    "Geçmiş değiştiği için düz push reddedilir. Düz `--force` yerine `git push --force-with-lease`.",
  ],
  cozum: ["git fetch", "git rebase origin/main", "git push --force-with-lease"],
  sonNot: "`--force-with-lease`, GitHub'daki dal hâlâ senin son gördüğün yerdeyse ezer; arada biri push ettiyse reddeder. Ortak dallarda (main, test, dev) hiçbiri kullanılmaz.",
};

const budama: Gorev = {
  id: "budama",
  kademe: 3,
  unite: 10,
  baslik: "Dal mezarlığını temizle",
  hikaye:
    "`git branch -a` listen ölü dallarla dolu. Ayşe birleşen `eski-deneme` dalını GitHub'dan sildi ama sende izi duruyor. " +
    "Senin `gecici` dalın da işini bitirdi. Ölü izi buda, `gecici`'yi hem GitHub'dan hem bilgisayarından sil.",
  kurulum: [
    ...KAFE_KUR,
    "@ayse git switch -c eski-deneme", '@ayse echo "x" > deneme.txt', "@ayse git add .", '@ayse git commit -m "Deneme"', "@ayse git push -u origin eski-deneme",
    `git clone ${KAFE}`,
    "git switch -c gecici", "git push -u origin gecici", "git switch main",
    "@ayse git push origin --delete eski-deneme",
  ],
  hedefler: [
    { aciklama: "origin/eski-deneme izi temizlendi", denetle: (o) => !!o.depo && !o.depo.refs["refs/remotes/origin/eski-deneme"] },
    { aciklama: "GitHub'da gecici yok", denetle: (o) => !!uzakUc(o, "main") && !uzakUc(o, "gecici") },
    { aciklama: "Yerelde gecici yok", denetle: (o) => !!o.depo && !dalUcu(o, "gecici") },
  ],
  ipuclari: ["`git fetch --prune` uzakta silinmiş dalların izlerini siler.", "Uzaktaki dalı silmek: `git push origin --delete gecici`; yereldeki: `git branch -d gecici`."],
  cozum: ["git fetch --prune", "git push origin --delete gecici", "git branch -d gecici"],
  sonNot: "`git config --global fetch.prune true` dersen her fetch kendiliğinden budar.",
};

const WIP = {
  dosyalar: SEPET,
  kurulum: [
    ...SEPET_KUR,
    "git switch -c kupon",
    'echo "export const KUPON = 10;" > kupon.js', "git add kupon.js", 'git commit -m "Kupon"',
    'echo "// wip" >> kupon.js', 'git commit -am "wip"',
    'echo "export const ALT = 50;" >> kupon.js', 'git commit -am "wip 2"',
    'echo "test kupon" > kupon.test.js', "git add kupon.test.js", 'git commit -m "asdf"',
  ],
};

const tekCommit: Gorev = {
  id: "tek-commit",
  kademe: 3,
  unite: 11,
  baslik: "Dağınık dalı tek commit yap",
  hikaye:
    "`kupon` dalında dört commit var: \"Kupon\", \"wip\", \"wip 2\" ve \"asdf\". Ekip kuralı: küçük işler PR'a tek commit olarak gelir. " +
    "Etkileşimli rebase ile hepsini \"Kupon\" commit'ine kat. Hiçbir dosya kaybolmasın.",
  ...WIP,
  hedefler: [
    { aciklama: "kupon dalında main'den sonra tek commit var", denetle: (o) => !o.depo?.islem && dalinKendi(o, "kupon").length === 1 },
    { aciklama: "\"wip\" ya da \"asdf\" mesajı kalmadı", denetle: (o) => !!o.depo && !!dalUcu(o, "kupon") && !/wip|asdf/.test(commitOku(o.depo, dalUcu(o, "kupon")!).mesaj) },
    { aciklama: "kupon.js ve kupon.test.js duruyor", denetle: (o) => { const f = headDosyalari(o); return (f["kupon.js"] ?? "").includes("ALT") && "kupon.test.js" in f; } },
  ],
  ipuclari: [
    "`git rebase -i main` dalın main'de olmayan commit'lerini bir listede açar.",
    "İlk satır pick kalsın; diğer üçünün başındaki pick'i `fixup` (ya da `f`) yap ve Kaydet.",
  ],
  cozum: ["git rebase -i main"],
  editorCozum: [(m) => m.replace(/^pick (\w+) (wip|wip 2|asdf)$/gm, "fixup $1 $2")],
  sonNot: "`squash` seçseydin Git mesajları birleştirmen için düzenleyiciyi bir kez daha açardı. Yeni commit'in kimliği değişti: dal push edilmişse güncellemek için `--force-with-lease` gerekir.",
};

const mesajDegistir: Gorev = {
  id: "mesaj-degistir",
  kademe: 3,
  unite: 11,
  baslik: "Ortadaki mesajı düzelt",
  hikaye:
    "Son commit değil, ondan önceki commit'in mesajı hatalı: \"Sepet tutari yanlis\" yazıyor, oysa commit vergi hesabını ekliyor. " +
    "Mesajı \"Vergi hesabı eklendi\" yap. Diğer commit'ler ve içerikleri aynen kalsın.",
  dosyalar: SEPET,
  kurulum: [
    ...SEPET_KUR,
    'echo "export const VERGI = 0.2;" > vergi.js', "git add vergi.js", 'git commit -m "Sepet tutari yanlis"',
    'echo "# Vergi" >> README.md', 'git commit -am "README güncellendi"',
  ],
  hedefler: [
    { aciklama: "\"Vergi hesabı eklendi\" mesajlı commit var", denetle: (o) => { const d = o.depo; const h = dalUcu(o, "main"); return !!d && !!h && gecmis(d, [h]).some((c) => commitOku(d, c).mesaj.trim() === "Vergi hesabı eklendi"); } },
    { aciklama: "Hatalı mesaj kalmadı, toplam üç commit", denetle: (o) => { const d = o.depo; const h = dalUcu(o, "main"); return !!d && !!h && dalCommitSayisi(o, "main") === 3 && !gecmis(d, [h]).some((c) => commitOku(d, c).mesaj.includes("yanlis")); } },
    { aciklama: "Son commit hâlâ \"README güncellendi\"", denetle: (o) => !o.depo?.islem && sonMesaj(o) === "README güncellendi" },
  ],
  ipuclari: [
    "`--amend` yalnızca son commit'i düzeltir. Daha eskisi için `git rebase -i HEAD~2`.",
    "Hatalı satırın başındaki pick'i `reword` yap, kaydet; Git sonra mesajı soracak.",
  ],
  cozum: ["git rebase -i HEAD~2"],
  editorCozum: [
    (m) => m.replace(/^pick (\w+) Sepet tutari yanlis/m, "reword $1 Sepet tutari yanlis"),
    (m) => m.replace(/^Sepet tutari yanlis$/m, "Vergi hesabı eklendi"),
  ],
  sonNot: "reword, commit'in içeriğine dokunmaz; ama mesaj da hash'in parçası olduğu için o commit ve ondan sonraki her commit yeni kimlik alır.",
};

const sirDrop: Gorev = {
  id: "sir-drop",
  kademe: 3,
  unite: 11,
  baslik: "Anahtarı push'tan önce çıkar",
  hikaye:
    "`odeme` dalında üç commit var. Ortadaki commit'e yanlışlıkla ödeme servisinin gizli anahtarını içeren `.env` dosyası girmiş. Neyse ki henüz push etmedin. " +
    "O commit'i geçmişten tamamen çıkar; diğer iki commit kalsın.",
  dosyalar: SEPET,
  kurulum: [
    ...SEPET_KUR,
    "git switch -c odeme",
    'echo "export function ode() {}" > odeme.js', "git add odeme.js", 'git commit -m "Ödeme iskeleti"',
    'echo "ODEME_ANAHTARI=sk_live_51Hx9Q2eZvKYlo2C" > .env', "git add .env", 'git commit -m "Ayarlar"',
    'echo "test ode" > odeme.test.js', "git add odeme.test.js", 'git commit -m "Ödeme testleri"',
  ],
  hedefler: [
    { aciklama: "Dalın hiçbir commit'inde .env yok", denetle: (o) => { const d = o.depo; const h = dalUcu(o, "odeme"); return !!d && !!h && !d.islem && gecmis(d, [h]).every((c) => !(".env" in commitAgaci(d, c))); } },
    { aciklama: "Ödeme iskeleti ve testleri duruyor", denetle: (o) => { const f = headDosyalari(o); return "odeme.js" in f && "odeme.test.js" in f; } },
    { aciklama: "Dalda main'den sonra iki commit var", denetle: (o) => dalinKendi(o, "odeme").length === 2 },
  ],
  ipuclari: [
    "Yeni bir commit'le .env'i silmek yetmez: anahtar eski commit'te durur ve push edince herkes görür.",
    "`git rebase -i main` aç; \"Ayarlar\" satırının başını `drop` yap.",
  ],
  cozum: ["git rebase -i main"],
  editorCozum: [(m) => m.replace(/^pick (\w+) Ayarlar$/m, "drop $1 Ayarlar")],
  sonNot: "Sonraki adım: `.env`'i `.gitignore`'a ekle. Anahtar push edilmiş olsaydı geçmişi temizlemek yetmezdi; anahtarı hemen iptal edip yenilemek gerekirdi (14. ünite).",
};

const rebaseCakisma: Gorev = {
  id: "rebase-cakisma",
  kademe: 3,
  unite: 11,
  baslik: "Rebase yarıda kaldı",
  hikaye:
    "`ozellik` dalını main'in üstüne taşımak istiyorsun ama ikisi de `menu.txt`'te kahvenin fiyatını değiştirmiş. " +
    "Rebase'i yap; çakışmada main'deki fiyat (kahve 50) kalsın, senin eklediğin süt satırı da korunsun.",
  dosyalar: { "menu.txt": "kahve 40\ncay 20\n" },
  kurulum: [
    "git init", "git add .", 'git commit -m "Menü"',
    "git switch -c ozellik", "printf 'kahve 45\\ncay 20\\nsut 15\\n' > menu.txt", 'git commit -am "Süt ve kahve zammı"',
    "git switch main", "printf 'kahve 50\\ncay 20\\n' > menu.txt", 'git commit -am "Kahve 50"',
    "git switch ozellik",
  ],
  hedefler: [
    { aciklama: "Rebase bitti, ozellik main'in üstünde", denetle: (o) => { const d = o.depo; const m = dalUcu(o, "main"); const h = dalUcu(o, "ozellik"); return !!d && !d.islem && !!m && !!h && m !== h && ataMi(d, m, h); } },
    { aciklama: "menu.txt'te işaret yok, kahve 50 ve süt var", denetle: (o) => { const f = headDosyalari(o)["menu.txt"] ?? ""; return !ISARET.test(f) && f.includes("kahve 50") && f.includes("sut 15"); } },
  ],
  ipuclari: [
    "`git rebase main` çakışmada durur; `git status` ne yapacağını söyler.",
    "Dosyayı düzelt (nano ya da printf), `git add menu.txt`, sonra `git rebase --continue`.",
  ],
  cozum: ["git rebase main", "printf 'kahve 50\\ncay 20\\nsut 15\\n' > menu.txt", "git add menu.txt", "git rebase --continue"],
  sonNot: "Rebase'de `--ours` main tarafı, `--theirs` senin taşınan commit'indir; merge'tekinin tersi. İşler karışırsa `git rebase --abort` her şeyi başa alır.",
};

// ---------------- Kademe 3-4: korumalar, PR, CI ve üç ortamlı akış ----------------

const korumaliMain: Gorev = {
  id: "korumali-main",
  kademe: 3,
  unite: 13,
  baslik: "Korumalı main'e push",
  hikaye:
    "Menüye limonata ekleyip main'de commit'ledin. Ama GitHub'da main korumalı: doğrudan push kabul edilmiyor. " +
    "İşini kaybetmeden commit'i `feature/menu-limonata` dalına taşı, yerel main'i GitHub'dakine eşitle ve main'e PR aç.",
  kurulum: [...KAFE_TEMEL, platform({ korumalar: { main: { prZorunlu: true } } }), `git clone ${KAFE}`, 'echo "limonata 30" >> menu.txt', 'git commit -am "Limonata eklendi"'],
  hedefler: [
    { aciklama: "Yerel main GitHub'daki main'le aynı", denetle: (o) => !!kafeUc(o, "main") && dalUcu(o, "main") === kafeUc(o, "main") },
    { aciklama: "Limonata GitHub'da feature/menu-limonata dalında", denetle: (o) => (uzakDosya(o, "feature/menu-limonata", "menu.txt") ?? "").includes("limonata") },
    { aciklama: "main'e PR açıldı", denetle: (o) => prVar(o, (p) => p.hedef === "main" && p.kaynak === "feature/menu-limonata") },
  ],
  ipuclari: [
    "Önce `git push` deneyip reddi okuyabilirsin: GH006, \"Changes must be made through a pull request\".",
    "`git branch feature/menu-limonata` commit'in olduğu yerde dal açar; sonra `git reset --hard origin/main` ile main'i geri al.",
    "Dala geç, `git push -u origin feature/menu-limonata`, sonra `gh pr create --base main --title \"Limonata\"`.",
  ],
  cozum: [
    "git branch feature/menu-limonata",
    "git reset --hard origin/main",
    "git switch feature/menu-limonata",
    "git push -u origin feature/menu-limonata",
    'gh pr create --base main --title "Limonata"',
  ],
  enAz: 6,
  sonNot: "Korumalı dalda red bir hata değil, kuralın işlediğinin kanıtı. Commit'i bir dala almak işini korur; main'i geri sarmak yalnızca yerel kopyanı düzeltir.",
};

const ciKirmizi: Gorev = {
  id: "ci-kirmizi",
  kademe: 3,
  unite: 13,
  baslik: "Kırmızı CI",
  hikaye:
    "Hazırlık süresi PR'ını açtın ama birleşmiyor. main'in kuralı: CI yeşil olmalı ve bir onay gerekli. " +
    "CI'ın neden kırmızı olduğunu bul, dalında düzelt; Ayşe yeşili görünce onaylayacak. Sonra PR'ı birleştir.",
  kurulum: [
    ...KAFE_TEMEL,
    platform({ korumalar: { main: { prZorunlu: true, onay: 1, ci: true } }, ci: [CI_LINT] }),
    `git clone ${KAFE}`,
    "git switch -c feature/hazirlik-suresi",
    "printf 'export const SURE = 5;\\nconsole.log(SURE);\\n' > siparis.js",
    "git add siparis.js",
    'git commit -m "Hazırlık süresi"',
    "git push -u origin feature/hazirlik-suresi",
    'gh pr create --base main --title "Hazırlık süresi"',
  ],
  olaylar: [
    {
      id: "ayse-onay",
      kosul: (o) => { const f = uzakDosya(o, "feature/hazirlik-suresi", "siparis.js"); return f !== null && !f.includes("console.log"); },
      kim: "ayse",
      komutlar: ["gh pr review feature/hazirlik-suresi --approve"],
      bildirim: "CI yeşile döndü; Ayşe PR'ı inceleyip onayladı.",
    },
  ],
  hedefler: [
    { aciklama: "PR birleşti", denetle: (o) => prVar(o, (p) => p.durum === "birlesti") },
    { aciklama: "GitHub'daki main'de console.log yok", denetle: (o) => { const f = uzakDosya(o, "main", "siparis.js"); return f !== null && !f.includes("console.log"); } },
  ],
  ipuclari: ["`gh pr checks` hangi adımın neden kırmızı olduğunu söyler.", "Satırı silip aynı dala commit'le ve push et; PR kendiliğinden güncellenir.", "Onay gelince `gh pr merge --merge`."],
  cozum: ['echo "export const SURE = 5;" > siparis.js', 'git commit -am "console.log kaldırıldı"', "git push", "gh pr merge --merge"],
  sonNot: "Kuralı kapatmak ya da yöneticiden zorla birleştirmesini istemek sorunu canlıya taşırdı. CI'ın işi tam olarak bu satırı yakalamaktı.",
};

const surumEtiketi: Gorev = {
  id: "surum-etiketi",
  kademe: 3,
  unite: 12,
  baslik: "Yeni sürümü işaretle",
  hikaye:
    "v1.2.0 eski bir commit'te duruyor ve GitHub'da. O günden beri main'e iki yeni özellik (geriye uyumlu) girdi. " +
    "SemVer'e göre doğru numarayla son commit'e açıklamalı bir etiket koy ve GitHub'a gönder. Eski etikete dokunma.",
  kurulum: [
    ...KAFE_TEMEL,
    `git clone ${KAFE}`,
    'git tag -a v1.2.0 -m "Sürüm 1.2.0"',
    "git push origin v1.2.0",
    'echo "cay 20" >> menu.txt', 'git commit -am "feat: çay"',
    'echo "su 10" >> menu.txt', 'git commit -am "feat: su"',
    "git push",
  ],
  hedefler: [
    { aciklama: "GitHub'da v1.3.0 etiketi var", denetle: (o) => !!uzakBul(o, KAFE)?.refs["refs/tags/v1.3.0"] },
    { aciklama: "v1.3.0 açıklamalı ve main'in son commit'inde", denetle: (o) => { const u = uzakBul(o, KAFE); const h = u?.refs["refs/tags/v1.3.0"]; const n = h ? u!.nesneler[h] : undefined; return n?.tur === "tag" && n.nesne === kafeUc(o, "main"); } },
    { aciklama: "v1.2.0 yerinde duruyor", denetle: (o) => { const u = uzakBul(o, KAFE); const h = u?.refs["refs/tags/v1.2.0"]; const n = h ? u!.nesneler[h] : undefined; return n?.tur === "tag" && n.nesne !== kafeUc(o, "main"); } },
  ],
  ipuclari: [
    "Geriye uyumlu yeni özellik MINOR'u artırır: 1.2.0 → 1.3.0.",
    "`git tag -a v1.3.0 -m \"Sürüm 1.3.0\"`, sonra `git push origin v1.3.0` (düz push etiketi göndermez).",
  ],
  cozum: ['git tag -a v1.3.0 -m "Sürüm 1.3.0"', "git push origin v1.3.0"],
  sonNot: "Etiket hep aynı commit'i gösterir; canlıdaki sürümün hangi kod olduğu her zaman bilinir. Hata düzeltmesi olsaydı v1.2.1, uyumu bozan değişiklik olsaydı v2.0.0 olurdu.",
};

const LOGIN = "feature/US-D12-login-validation";

const devdenAcilan: Gorev = {
  id: "devden-acilan",
  kademe: 4,
  unite: 12,
  baslik: "Yanlış yerden açılan dal",
  hikaye:
    `Giriş doğrulaması için \`${LOGIN}\` dalını açıp bir commit attın; henüz push etmedin. Sonra fark ettin: dalı test'ten değil dev'den açmışsın ` +
    "ve dev'de Mert'in yarım ödeme işi var. Dalı test'in üstüne taşı, gönder ve test'e PR aç. CI'daki akış kuralı yeşil olmalı.",
  kurulum: [...UC_ORTAM, `git switch -c ${LOGIN} origin/dev`, 'echo "export const gecerli = (p) => p.length > 0;" > giris.js', "git add giris.js", 'git commit -m "Boş parola reddediliyor"'],
  hedefler: [
    { aciklama: "Dal GitHub'da ve giris.js içinde", denetle: (o) => uzakDosya(o, LOGIN, "giris.js") !== null },
    { aciklama: "Dalda Mert'in yarım işi yok", denetle: (o) => !!kafeUc(o, LOGIN) && uzakDosya(o, LOGIN, "odeme.js") === null },
    { aciklama: "test'e PR açıldı ve CI yeşil", denetle: (o) => { const u = uzakBul(o, KAFE); return !!u && (u.platform?.prler ?? []).some((p) => p.hedef === "test" && p.kaynak === LOGIN && prCi(u, p).every((c) => c.gecti)); } },
  ],
  ipuclari: [
    "Dalında dev'e özgü commit'ler var: `git log --oneline origin/test..HEAD` ile gör.",
    "`git rebase --onto origin/test origin/dev` yalnızca dev'den sonraki (senin) commit'lerini test'in üstüne taşır.",
    `Sonra \`git push -u origin ${LOGIN}\` ve \`gh pr create --base test --title "..."\`.`,
  ],
  cozum: ["git rebase --onto origin/test origin/dev", `git push -u origin ${LOGIN}`, 'gh pr create --base test --title "Giriş doğrulaması"'],
  sonNot: "Dal dev'den açılsaydı PR test'e Mert'in yarım işini de taşırdı. Henüz push etmediğin için geçmişi yeniden yazmak serbestti; push etmiş olsaydın taşıdıktan sonra --force-with-lease gerekirdi.",
};

const FEATURE = "feature/US-D03e-docker-compose-local";

const ucOrtam: Gorev = {
  id: "uc-ortam",
  kademe: 4,
  unite: 12,
  baslik: "Tatbikat: dev → test → main",
  hikaye:
    "Üç ortamlı akışın tamamı. main, test ve dev korumalı; dev ve main için bir onay gerekli, CI'da lint ve akış kuralı var. dev'de Mert'in yarım ödeme işi bekliyor. " +
    `US-D03e için \`${FEATURE}\` dalında \`docker-compose.yml\` ekle; dev'e, sonra test'e taşı, Release PR ile canlıya (main) çıkar ve dalı sil. Mert'in yarım işi canlıya gitmesin.`,
  kurulum: UC_ORTAM,
  olaylar: [
    {
      id: "ayse-dev",
      kosul: (o) => prVar(o, (p) => p.durum === "acik" && p.hedef === "dev" && !p.onaylar.length),
      kim: "ayse",
      komutlar: [`gh pr review ${FEATURE} --approve`],
      bildirim: "Ayşe dev'e açtığın PR'ı inceledi ve onayladı.",
    },
    {
      id: "mert-release",
      kosul: (o) => prVar(o, (p) => p.durum === "acik" && p.hedef === "main" && p.kaynak === "test" && !p.onaylar.length),
      kim: "mert",
      komutlar: ["gh pr review test --approve"],
      bildirim: "QA test ortamında doğruladı; Mert Release PR'ı onayladı.",
    },
  ],
  hedefler: [
    { aciklama: "docker-compose.yml dev'de", denetle: (o) => uzakDosya(o, "dev", "docker-compose.yml") !== null },
    { aciklama: "docker-compose.yml test'te", denetle: (o) => uzakDosya(o, "test", "docker-compose.yml") !== null },
    { aciklama: "docker-compose.yml canlıda (main)", denetle: (o) => uzakDosya(o, "main", "docker-compose.yml") !== null },
    { aciklama: "Mert'in yarım işi test'e ve main'e gitmedi", denetle: (o) => !!kafeUc(o, "main") && uzakDosya(o, "main", "odeme.js") === null && uzakDosya(o, "test", "odeme.js") === null },
    { aciklama: "Feature dalı GitHub'dan silindi", denetle: (o) => !!kafeUc(o, "main") && !kafeUc(o, FEATURE) && prVar(o, () => true) },
  ],
  ipuclari: [
    "Dal test'ten açılır: `git fetch`, sonra `git switch -c <dal> origin/test`.",
    "PR 1: `gh pr create --base dev --title \"...\"`; Ayşe onaylayınca `gh pr merge --merge`.",
    "PR 2 aynı daldan: `gh pr create --base test ...`; birleştirirken `--delete-branch` ile dalı da sil.",
    "Release PR: `gh pr create --base main --head test --title \"Sürüm 1.4\"`, onay gelince `gh pr merge test --merge`.",
  ],
  cozum: [
    "git fetch",
    `git switch -c ${FEATURE} origin/test`,
    'echo "services: {}" > docker-compose.yml',
    "git add docker-compose.yml",
    'git commit -m "Yerel docker compose"',
    `git push -u origin ${FEATURE}`,
    'gh pr create --base dev --title "Docker compose"',
    "gh pr merge --merge",
    'gh pr create --base test --title "Docker compose"',
    "gh pr merge --merge --delete-branch",
    'gh pr create --base main --head test --title "Sürüm 1.4"',
    "gh pr merge test --merge",
  ],
  sonNot: "Kağıttaki süreç: test'ten dal, PR 1 → dev, aynı dal PR 2 → test, QA doğrulaması, Release PR test → main, dal silinir. dev hiçbir zaman toptan test'e taşınmadı; Mert'in yarım işi dev'de kendi PR'ını bekliyor.",
};

const hotfix: Gorev = {
  id: "hotfix",
  kademe: 4,
  unite: 12,
  baslik: "Cuma akşamı hotfix",
  hikaye:
    "Canlıda kahvenin fiyatı 40 görünüyor, 45 olmalı; kasada sorun çıkıyor. Düzeltme canlıdan (main'den) açılan bir hotfix dalıyla yapılır ve önce main'e girer. " +
    "Ama orada kalırsa bir sonraki sürümde hata geri gelir: aynı düzeltme test'e ve dev'e de ulaşmalı. main ve dev'e Ayşe onay verecek.",
  kurulum: UC_ORTAM,
  olaylar: [
    {
      id: "ayse-main",
      kosul: (o) => prVar(o, (p) => p.durum === "acik" && p.hedef === "main" && !p.onaylar.length),
      kim: "ayse",
      komutlar: ["gh pr review hotfix/kahve-fiyati --approve"],
      bildirim: "Ayşe hotfix PR'ını hemen inceleyip onayladı.",
    },
    {
      id: "ayse-dev",
      kosul: (o) => prVar(o, (p) => p.durum === "acik" && p.hedef === "dev" && !p.onaylar.length),
      kim: "ayse",
      komutlar: ["gh pr review hotfix/kahve-fiyati --approve"],
      bildirim: "Ayşe dev'e açılan PR'ı da onayladı.",
    },
  ],
  hedefler: [
    { aciklama: "Canlıda (main) kahve 45", denetle: (o) => (uzakDosya(o, "main", "menu.txt") ?? "").includes("kahve 45") },
    { aciklama: "test'te kahve 45", denetle: (o) => (uzakDosya(o, "test", "menu.txt") ?? "").includes("kahve 45") },
    { aciklama: "dev'de kahve 45", denetle: (o) => (uzakDosya(o, "dev", "menu.txt") ?? "").includes("kahve 45") },
    { aciklama: "main'e yarım ödeme işi girmedi", denetle: (o) => !!kafeUc(o, "main") && uzakDosya(o, "main", "odeme.js") === null },
  ],
  ipuclari: [
    "Hotfix canlıdaki koddan açılır: `git switch -c hotfix/kahve-fiyati origin/main`.",
    "Düzelt, push et, `gh pr create --base main ...`; onay gelince birleştir.",
    "Aynı daldan test'e ve dev'e de PR aç ve birleştir.",
  ],
  cozum: [
    "git switch -c hotfix/kahve-fiyati origin/main",
    'echo "kahve 45" > menu.txt',
    'git commit -am "Kahve fiyatı 45"',
    "git push -u origin hotfix/kahve-fiyati",
    'gh pr create --base main --title "Kahve fiyatı"',
    "gh pr merge --merge",
    'gh pr create --base test --title "Kahve fiyatı"',
    "gh pr merge --merge",
    'gh pr create --base dev --title "Kahve fiyatı"',
    "gh pr merge --merge",
  ],
  sonNot: "Git Flow'daki hotfix kuralının üç ortamlı karşılığı: canlıdan aç, önce canlıya, sonra bütün ortamlara. Düzeltme yalnızca main'de kalsaydı bir sonraki Release PR (test → main) onu geri alırdı.",
};

// ---------------- Kademe 4: Usta ----------------

const gecmisteAnahtar: Gorev = {
  id: "gecmiste-anahtar",
  kademe: 4,
  unite: 14,
  baslik: "Push protection eski commit'i gösteriyor",
  hikaye:
    "Ödeme modülünde üç commit'in push bekliyor. İlkinde KafePay anahtarını koda yazmışsın, üçüncüsünde fark edip `.env`'e taşımışsın. " +
    "Ama depoda push protection açık ve push reddediliyor: anahtar hâlâ ilk commit'te. Geçmişi düzelt ve üç commit'in işini GitHub'a gönder.",
  kurulum: [
    ...ODEME_TEMEL,
    odemePlatformu({ gizliKoruma: true }),
    `echo 'const anahtar = "${ORNEK_ANAHTAR}";' > odeme.js`,
    "git add odeme.js",
    'git commit -m "Ödeme modülü"',
    'echo "export function fis() {}" > fis.js',
    "git add fis.js",
    'git commit -m "Fiş yazdırma"',
    `echo "KAFEPAY_KEY=${ORNEK_ANAHTAR}" > .env`,
    'echo ".env" >> .gitignore',
    "echo 'const anahtar = process.env.KAFEPAY_KEY;' > odeme.js",
    "git add odeme.js .gitignore",
    'git commit -m "Anahtar ortamdan okunuyor"',
  ],
  hedefler: [
    { aciklama: "GitHub'da ödeme modülü ve fiş yazdırma var", denetle: (o) => (odemeDosyasi(o, "odeme.js") ?? "").includes("process.env") && odemeDosyasi(o, "fis.js") !== null },
    { aciklama: "GitHub'daki geçmişte anahtar yok", denetle: (o) => !odemedeVar(o, ORNEK_ANAHTAR) },
    { aciklama: ".env'de anahtar duruyor, Git onu izlemiyor", denetle: envHazir },
  ],
  ipuclari: [
    "Önce `git push` deneyip GH013 çıktısını oku: anahtar hangi commit'te, hangi satırda?",
    "Yeni bir commit eklemek yetmez; reddedilen commit push'un içinde kalır. `git rebase -i origin/main` ile geçmişi düzenle.",
    "Listede \"Anahtar ortamdan okunuyor\" satırını \"Ödeme modülü\"nün hemen altına taşı ve başını `fixup` yap. Sonra `git push`.",
  ],
  cozum: ["git rebase -i origin/main", "git push"],
  editorCozum: [
    (m) => {
      const s = m.split("\n");
      const i = s.findIndex((x) => x.endsWith("Anahtar ortamdan okunuyor"));
      const [satir] = s.splice(i, 1);
      const j = s.findIndex((x) => x.endsWith("Ödeme modülü"));
      s.splice(j + 1, 0, satir!.replace(/^pick/, "fixup"));
      return s.join("\n");
    },
  ],
  sonNot: "Push protection kapıda durdurdu: anahtar GitHub'a hiç ulaşmadı, iptal gerekmedi. Fixup düzeltmeyi hatalı commit'in içine kattı; geçmişte anahtarın hiç olmadığı bir sürüm kaldı.",
};

const sizintiGorevi: Gorev = {
  id: "sizinti",
  kademe: 4,
  unite: 14,
  baslik: "Sızıntı tatbikatı",
  hikaye:
    "Ödeme modülünün deposu herkese açık (public). İki commit'in hazır: \"Ödeme ayarları\" ve \"Fiş yazdırma\". Push et. " +
    "Bir sorun çıkarsa doğru sırayla müdahale et: anahtar yeni ve geçerli olsun, GitHub'daki geçmişte eski anahtar kalmasın, `.env` bir daha commit'e girmesin.",
  kurulum: [
    ...ODEME_TEMEL,
    odemePlatformu({ herkeseAcik: true }),
    `echo "KAFEPAY_KEY=${ORNEK_ANAHTAR}" > .env`,
    "echo 'const anahtar = process.env.KAFEPAY_KEY;' > odeme.js",
    "git add .",
    'git commit -m "Ödeme ayarları"',
    'echo "export function fis() {}" > fis.js',
    "git add fis.js",
    'git commit -m "Fiş yazdırma"',
  ],
  olaylar: [BOT_OLAYI],
  hedefler: [
    { aciklama: "İki commit'in işi GitHub'da", denetle: (o) => odemeDosyasi(o, "odeme.js") !== null && odemeDosyasi(o, "fis.js") !== null },
    { aciklama: "Anahtar sızdıysa iptal edildi", denetle: (o) => !sizdi(o) || ornekIptal(o) },
    { aciklama: ".env'de geçerli bir anahtar var, Git onu izlemiyor", denetle: envHazir },
    { aciklama: "GitHub'daki geçmişte eski anahtar yok", denetle: (o) => !odemedeVar(o, ORNEK_ANAHTAR) },
    { aciklama: "GitHub'daki .gitignore .env'i yok sayıyor", denetle: (o) => (odemeDosyasi(o, ".gitignore") ?? "").split("\n").includes(".env") },
  ],
  ipuclari: [
    "Bot anahtarı bulduysa ilk iş iptal: `kafepay keys revoke`. `kafepay logs` ne olduğunu gösterir. Yeni anahtarı geçmişi temizledikten sonra `kafepay keys create > .env` ile üret (rebase, değişmiş izlenen dosyayla başlamaz).",
    "Anahtar \"Ödeme ayarları\" commit'inde. Push ettiğin için `origin/main` artık senin commit'lerinle aynı; `git rebase -i HEAD~2` ile son iki commit'i aç ve \"Ödeme ayarları\" satırını `edit` yap; durunca `git rm --cached .env`, .gitignore'a `.env` ekle, `git add .gitignore`, `git commit --amend --no-edit`, `git rebase --continue`.",
    "Geçmiş değişti: `git push --force` ile gönder.",
  ],
  cozum: [
    "git push",
    "kafepay keys revoke",
    "kafepay logs",
    "git rebase -i HEAD~2",
    "git rm --cached .env",
    'echo ".env" >> .gitignore',
    "git add .gitignore",
    "git commit --amend --no-edit",
    "git rebase --continue",
    "kafepay keys create > .env",
    "git push --force",
  ],
  editorCozum: [(m) => m.replace(/^pick (\w+) Ödeme ayarları$/m, "edit $1 Ödeme ayarları")],
  sonNot: "Sıra doğruysa zarar birkaç dakikayla sınırlı kaldı. Push etmeden önce `git status` ve `git show --stat` ile neyi gönderdiğine bakmak bu tatbikatın hiç yaşanmamasını sağlardı.",
};

// ---------------- Kademe 4: GitLab ve ileri araçlar ----------------

const glAkis: Gorev = {
  id: "gitlab-mr",
  kademe: 4,
  unite: 15,
  baslik: "GitLab'da kampanya MR'ı",
  hikaye:
    "Kafe Mavi'nin projesi GitLab'da. main korumalı: bir onay ve yeşil pipeline şart. `feature/kampanya` dalın push edildi ama MR açılmadı. " +
    "MR'ı aç, pipeline'ı geçir; Ayşe yalnızca pipeline yeşilse onaylar. Ekip kuralı: main'e tek commit girer (squash) ve kaynak dal birleşince silinir.",
  kurulum: [
    ...KAFE_GL_TEMEL,
    glPlatform({ korumalar: { main: { prZorunlu: true, onay: 1, ci: true } }, ci: [CI_LINT] }),
    `git clone ${KAFE_GL}`,
    "git switch -c feature/kampanya",
    'echo "function kampanya() { console.log(\'indirim\') }" > kampanya.js',
    "git add kampanya.js",
    'git commit -m "Kampanya"',
    "git push -u origin feature/kampanya",
  ],
  olaylar: [
    {
      id: "ayse-onay",
      kosul: (o) => {
        const u = uzakBul(o, KAFE_GL);
        return !!u && mrVar(o, (p) => p.durum === "acik" && !p.onaylar.length && prCi(u, p).every((c) => c.gecti));
      },
      kim: "ayse",
      komutlar: ["glab mr approve feature/kampanya"],
      bildirim: "Ayşe pipeline'ın yeşil olduğunu gördü ve merge request'i onayladı.",
    },
  ],
  hedefler: [
    { aciklama: "Merge request birleşti", denetle: (o) => mrVar(o, (p) => p.durum === "birlesti") },
    { aciklama: "GitLab'daki main'de kampanya var, console.log yok", denetle: (o) => { const f = glDosya(o, "main", "kampanya.js"); return !!f && !f.includes("console.log"); } },
    { aciklama: "main'e tek commit girdi (squash)", denetle: (o) => { const u = uzakBul(o, KAFE_GL); const h = glUc(o, "main"); return !!u && !!h && gecmis(u, [h]).length === 2; } },
    { aciklama: "Kaynak dal GitLab'dan silindi", denetle: (o) => !!glUc(o, "main") && !glUc(o, "feature/kampanya") },
  ],
  ipuclari: [
    "`glab mr create --target-branch main --title \"Kampanya\"` ile MR'ı aç, sonra `glab ci status` ile pipeline'a bak.",
    "Lint `console.log` istemiyor: kampanya.js'ten çıkar, commit'le ve push et; Ayşe yeşili görünce onaylar.",
    "`glab mr merge --squash --remove-source-branch` iki commit'i tek commit olarak main'e katar ve dalı siler.",
  ],
  cozum: [
    'glab mr create --target-branch main --title "Kampanya"',
    'echo "function kampanya() { return 0.1 }" > kampanya.js',
    'git commit -am "console.log kaldırıldı"',
    "git push",
    "glab mr merge --squash --remove-source-branch",
  ],
  sonNot: "GitLab'da kural adları farklı (Protected branches, approval rules, Pipelines must succeed) ama akış GitHub'dakiyle aynı. Squash, düzeltme commit'lerini main'in geçmişine taşımaz.",
};

const cherryPickGorevi: Gorev = {
  id: "cherry-pick",
  kademe: 4,
  unite: 16,
  baslik: "Sürüme tek düzeltme",
  hikaye:
    "`release/1.2` dalı yarın kasalara kurulacak. `dev`'de üç yeni commit var: iki yarım özellik ve fiş toplamını düzelten bir commit. " +
    "Sürüme yalnızca düzeltme girmeli; dev olduğu gibi kalmalı.",
  kurulum: [
    "git init",
    'echo "function toplam(f) { return 0; }" > fis.js',
    'echo "kahve 40" > menu.txt',
    "git add .",
    'git commit -m "Fiş ve menü"',
    "git branch release/1.2",
    "git switch -c dev",
    'echo "export function puan() {}" > sadakat.js',
    "git add sadakat.js",
    'git commit -m "Sadakat puanı (yarım)"',
    'echo "function toplam(f) { return f.reduce((a, x) => a + x, 0); }" > fis.js',
    'git commit -am "Fiş toplamı düzeltildi"',
    'echo "export function qr() {}" > qr.js',
    "git add qr.js",
    'git commit -m "QR menü (yarım)"',
    "git switch release/1.2",
  ],
  hedefler: [
    { aciklama: "release/1.2'de fiş toplamı düzeltildi", denetle: (o) => { const h = dalUcu(o, "release/1.2"); return !!h && (dosyaCommitte(o, h, "fis.js") ?? "").includes("reduce"); } },
    { aciklama: "release/1.2'ye yarım özellikler girmedi", denetle: (o) => { const h = dalUcu(o, "release/1.2"); const a = h ? commitAgaci(o.depo!, h) : {}; return !!h && !("sadakat.js" in a) && !("qr.js" in a); } },
    { aciklama: "dev'in geçmişi değişmedi (4 commit)", denetle: (o) => { const h = dalUcu(o, "dev"); return !!h && dalCommitSayisi(o, "dev") === 4 && !!commitAgaci(o.depo!, h)["qr.js"]; } },
  ],
  ipuclari: [
    "`git log --oneline dev` ile düzeltme commit'inin kimliğini bul.",
    "release/1.2'deyken `git cherry-pick <kimlik>` yalnızca o commit'in farkını uygular. `-x` eklersen mesaj kaynağını da yazar.",
  ],
  cozum: ["git log --oneline dev", "git cherry-pick -x dev~1"],
  sonNot: "Merge dev'in her şeyini getirirdi. cherry-pick yeni bir commit yazar: içeriği aynı, kimliği farklı. -x'in eklediği satır, düzeltmenin hangi commit'ten geldiğini sonra bulmayı kolaylaştırır.",
};

const BISECT_MESAJLARI = [
  "Menüye çay", "Fiş başlığı", "Masa numarası", "Tatlı menüsü", "Kasa ekranı", "Yazım düzeltmesi", "Kampanya rozeti",
  "Fiyat hesabı sadeleştirildi", "Kampanya kodu", "Menü sırası", "Logo güncellendi", "Fiş alt bilgisi", "README güncellendi",
  "Kasa kısayolları", "Teslim süresi", "Günün kahvesi", "Masa planı", "Bahşiş satırı",
];
const BISECT_HATALI_GOREV = "Fiyat hesabı sadeleştirildi";
const bisectGorevi: Gorev = {
  id: "bisect",
  kademe: 4,
  unite: 16,
  baslik: "Hangi commit KDV'yi bozdu?",
  hikaye:
    "Kasada fiyatlar KDV'siz çıkıyor. `v2.0` sürümünde doğruydu, o günden beri 18 commit girdi. Hepsini tek tek okumak yerine ikili aramayla hatalı commit'i bul, " +
    "ona `hatali` etiketini koy ve geçmişi yeniden yazmadan geri al. Doğru hesap: `return net * 1.2`.",
  kurulum: [
    "git init",
    'echo "function fiyat(net) { return net * 1.2; }" > fiyat.js',
    'echo "# Kasa" > README.md',
    "git add .",
    'git commit -m "Kasa"',
    "git tag v2.0",
    ...BISECT_MESAJLARI.flatMap((m, i) => [
      // Hatalı commit yalnızca fiyat.js'i değiştirir (revert temiz uygulanır)
      m === BISECT_HATALI_GOREV ? 'echo "function fiyat(net) { return net; }" > fiyat.js' : `echo "surum ${i + 2}" > surum.txt`,
      "git add .",
      `git commit -m "${m}"`,
    ]),
  ],
  hedefler: [
    {
      aciklama: "hatali etiketi KDV'yi bozan commit'te",
      denetle: (o) => { const d = o.depo!; const h = d.refs["refs/tags/hatali"]; return !!h && commitOku(d, h).mesaj.trim() === BISECT_HATALI_GOREV; },
    },
    { aciklama: "bisect bitirildi, main'e dönüldü", denetle: (o) => !o.depo!.bisect && dalAdiniAl(o) === "main" },
    { aciklama: "fiyat.js yine KDV'li", denetle: (o) => (headDosyalari(o)["fiyat.js"] ?? "").includes("1.2") },
    { aciklama: "Geçmiş yeniden yazılmadı (hatalı commit hâlâ geçmişte)", denetle: (o) => { const d = o.depo!; const h = d.refs["refs/tags/hatali"]; const ana = dalUcu(o, "main"); return !!h && !!ana && ataMi(d, h, ana) && dalCommitSayisi(o, "main") === 20; } },
  ],
  ipuclari: [
    "`git bisect start`, `git bisect bad` (şu an bozuk), `git bisect good v2.0`.",
    "Git ortadaki bir commit'i açar: `cat fiyat.js`; KDV varsa `git bisect good`, yoksa `git bisect bad`. Git ilk kötü commit'i yazana kadar sürdür.",
    "Bulunca `git tag hatali refs/bisect/bad`, `git bisect reset`, sonra `git revert --no-edit hatali`.",
  ],
  cozum: [
    "git bisect start", "git bisect bad", "git bisect good v2.0",
    "cat fiyat.js", "git bisect bad", "cat fiyat.js", "git bisect good", "cat fiyat.js", "git bisect good",
    "cat fiyat.js", "git bisect bad", "cat fiyat.js", "git bisect good",
    "git tag hatali refs/bisect/bad", "git bisect reset", "git revert --no-edit hatali",
  ],
  sonNot: "18 commit yaklaşık 4 adımda tarandı: her cevap aralığı yarıya indirir. Testi bir betiğe bağlarsan `git bisect run ./test.sh` adımları kendisi yürütür.",
};

const blameGorevi: Gorev = {
  id: "blame",
  kademe: 4,
  unite: 16,
  baslik: "Bedava su kimden?",
  hikaye:
    "Menüde `su 0` satırı var; su bedava olmamalı. Satırı hangi commit'in eklediğini bul ve o commit'i `git revert` ile geri al. " +
    "Geçmiş paylaşılıyor, yeniden yazılmaz; düzeltmeyi GitHub'a gönder.",
  kurulum: [
    ...KAFE_TEMEL,
    '@ayse echo "cay 20" >> menu.txt',
    '@ayse git commit -am "Çay"',
    "@ayse git push",
    `@mert git clone ${KAFE}`,
    '@mert echo "su 0" >> menu.txt',
    '@mert git commit -am "Menü güncellendi"',
    "@mert git push",
    "@ayse git pull",
    '@ayse printf "kahve 45\\ncay 20\\nsu 0\\n" > menu.txt',
    '@ayse git commit -am "Kahve 45"',
    "@ayse git push",
    `git clone ${KAFE}`,
  ],
  hedefler: [
    { aciklama: "GitHub'daki menüde su 0 yok, diğer satırlar duruyor", denetle: (o) => { const m = uzakDosya(o, "main", "menu.txt") ?? ""; return !m.includes("su 0") && m.includes("kahve 45") && m.includes("cay 20"); } },
    {
      aciklama: "Düzeltme, satırı ekleyen commit'in revert'i",
      denetle: (o) => {
        const d = o.depo!;
        const h = d.refs["refs/remotes/origin/main"];
        if (!h) return false;
        const ekleyen = gecmis(d, [h]).find((c) => commitOku(d, c).mesaj.trim() === "Menü güncellendi");
        return !!ekleyen && commitOku(d, h).mesaj.includes(`This reverts commit ${ekleyen}`);
      },
    },
  ],
  ipuclari: [
    "`git blame menu.txt` her satırın yanında commit'ini ve yazarını gösterir.",
    "Satırı ekleyen commit'in mesajı satırı anlatmıyor; kimliğini blame'den al ve `git show <kimlik>` ile bak.",
    "`git revert --no-edit <kimlik>`, sonra `git push`.",
  ],
  cozum: ["git blame menu.txt", "git revert --no-edit HEAD~1", "git push"],
  sonNot: "blame suçlu aramak için değil, bağlamı bulmak içindir: commit'i bulunca Mert'e neden eklediğini sorabilirsin. Mesajı \"Menü güncellendi\" yerine \"Su bedava\" olsaydı arama hiç gerekmezdi.",
};

// ---------------- Kademe 5: Profesyonel (Git'in içi, kurtarma) ----------------

const nesneNotu: Gorev = {
  id: "nesne-notu",
  kademe: 5,
  unite: 17,
  baslik: "Nesne veritabanındaki not",
  hikaye:
    "Ayşe ayrılmadan önce depoya bir not bıraktı ama dosya olarak değil: `git hash-object -w` ile yalnızca nesne veritabanına yazdı. Kimliğinin `f26b` ile başladığını söyledi. " +
    "Notu oku, `not.txt` adıyla kaydet ve commit'le.",
  kurulum: [
    "git init",
    'echo "# Kasa" > README.md',
    "git add .",
    'git commit -m "Kasa"',
    'echo "Kasa şifresi değişti, yeni şifre yöneticide." > gecici',
    "git hash-object -w gecici",
    "rm gecici",
  ],
  hedefler: [
    { aciklama: "not.txt'de Ayşe'nin notu var", denetle: (o) => (o.dosyalar["not.txt"] ?? "").includes("yöneticide") },
    { aciklama: "Not commit'lendi", denetle: (o) => (headDosyalari(o)["not.txt"] ?? "").includes("yöneticide") },
  ],
  ipuclari: [
    "`git cat-file -t f26b` nesnenin türünü, `-p` içeriğini gösterir.",
    "Çıktıyı dosyaya yönlendir: `git cat-file -p f26b > not.txt`, sonra `git add` ve `git commit`.",
  ],
  cozum: ["git cat-file -t f26b", "git cat-file -p f26b > not.txt", "git add not.txt", 'git commit -m "Ayşe\'nin notu"'],
  sonNot: "Blob'un adı yoktu; adı ona tree verir. `git add` tam olarak bunu yaptı: içeriği (zaten var olan) blob'a, adı index'e yazdı.",
};

const resetFelaketi: Gorev = {
  id: "reset-felaketi",
  kademe: 5,
  unite: 18,
  baslik: "Reset'ten sonra bir commit daha",
  hikaye:
    "Dün akşam yorgunken `git reset --hard HEAD~2` yaptın; \"Ödeme\" ve \"İndirim\" commit'leri gitti (push edilmemişlerdi). Bu sabah fark etmeden üstüne \"Fiş\" commit'ini attın. " +
    "Üç işin de main'de olsun; bu sabahki commit kaybolmasın.",
  kurulum: [
    "git init",
    'echo "kahve 40" > menu.txt',
    "git add .",
    'git commit -m "Menü"',
    'echo "export function ode() {}" > odeme.js',
    "git add .",
    'git commit -m "Ödeme"',
    'echo "export const INDIRIM = 0.1;" > indirim.js',
    "git add .",
    'git commit -m "İndirim"',
    "git reset --hard HEAD~2",
    'echo "export function fis() {}" > fis.js',
    "git add .",
    'git commit -m "Fiş"',
  ],
  hedefler: [
    { aciklama: "main'de odeme.js, indirim.js ve fis.js var", denetle: (o) => { const f = headDosyalari(o); return "odeme.js" in f && "indirim.js" in f && "fis.js" in f; } },
    { aciklama: "Fiş commit'i main'in geçmişinde", denetle: (o) => { const d = o.depo!; const h = dalUcu(o, "main"); return !!h && gecmis(d, [h]).some((c) => commitOku(d, c).mesaj.trim() === "Fiş"); } },
    { aciklama: "Çalışma dizini temiz, main'desin", denetle: (o) => temizMi(o) && dalAdiniAl(o) === "main" },
  ],
  ipuclari: [
    "`git reflog`: reset'ten önce HEAD neredeydi? \"İndirim\" commit'inin kimliğini bul.",
    "Reset'e geri dönmek bu sabahki commit'i kaybettirir. Kayıp iki commit'i bugünkünün üstüne `git cherry-pick` ile getir (ya da o commit'i `git merge` et).",
    "Reset ORIG_HEAD'i eski yere yazdı: `git cherry-pick ORIG_HEAD~1`, sonra `git cherry-pick ORIG_HEAD`.",
  ],
  cozum: ["git reflog", "git cherry-pick ORIG_HEAD~1", "git cherry-pick ORIG_HEAD"],
  sonNot: "Kayıp commit'ler reflog'da duruyordu. `reset --hard HEAD@{n}` bu sabahki işi silerdi; cherry-pick ikisini de korudu. Kimlikleri yeni, içerikleri aynı.",
};

const stashKurtar: Gorev = {
  id: "stash-kurtar",
  kademe: 5,
  unite: 18,
  baslik: "Düşen stash",
  hikaye:
    "Yarım kampanya kodunu stash'e koymuştun. Sonra listeyi temizlerken yanlışlıkla `git stash clear` yaptın ve üstüne bir commit attın. Kampanya kodu reflog'da da yok. " +
    "Kodu geri getir ve commit'le.",
  kurulum: [
    "git init",
    'echo "kahve 40" > menu.txt',
    "git add .",
    'git commit -m "Menü"',
    'echo "export function kampanya() { return 0.15; }" > kampanya.js',
    "git add kampanya.js",
    'git stash push -m "kampanya"',
    "git stash clear",
    'echo "cay 20" >> menu.txt',
    'git commit -am "Çay"',
  ],
  hedefler: [
    { aciklama: "kampanya.js geri geldi ve commit'lendi", denetle: (o) => (headDosyalari(o)["kampanya.js"] ?? "").includes("0.15") },
    { aciklama: "Çay commit'i duruyor", denetle: (o) => (headDosyalari(o)["menu.txt"] ?? "").includes("cay") },
  ],
  ipuclari: [
    "`git fsck` hiçbir yerden ulaşılamayan (dangling) commit'leri listeler.",
    "`git show <kimlik>` ile kampanya stash'i olduğunu doğrula, `git stash apply <kimlik>` ile uygula, sonra commit'le.",
  ],
  cozum: ["git fsck", "git show 473ef8a", "git stash apply 473ef8a", "git add kampanya.js", 'git commit -m "Kampanya"'],
  sonNot: "Stash de bir commit'tir: düşürülünce silinmez, sahipsiz kalır. Birkaç hafta içinde `git gc` budayana kadar fsck ile bulunabilir.",
};

const VERI = "https://github.com/kafe-mavi/kasa.git";
const filtreGorevi: Gorev = {
  id: "gecmis-temizligi",
  kademe: 5,
  unite: 18,
  baslik: "Geçmişteki veritabanı dökümü",
  hikaye:
    "Kasa deposunun geçmişinde, aylar önce yanlışlıkla commit'lenip sonra silinmiş `yedek.sql` var: müşteri adları ve telefonları. Depo herkese kapalı ama yeni bir ajans erişim alacak. " +
    "Dosyayı main'in, dev'in ve v1.0 etiketinin geçmişinden çıkar ve GitHub'ı güncelle. Hiçbir dal ya da etiket kaybolmasın.",
  kurulum: [
    `@uzak ${VERI}`,
    `@ayse git clone ${VERI}`,
    '@ayse echo "# Kasa" > README.md',
    "@ayse git add .",
    '@ayse git commit -m "İlk sürüm"',
    '@ayse echo "INSERT INTO musteri VALUES (\'Ali\', \'0555 000 00 00\');" > yedek.sql',
    '@ayse echo "export function kasa() {}" > kasa.js',
    "@ayse git add .",
    '@ayse git commit -m "Kasa modülü"',
    "@ayse git rm yedek.sql",
    '@ayse git commit -m "Yedek silindi"',
    "@ayse git tag -a v1.0 -m v1.0",
    "@ayse git push --tags",
    "@ayse git push",
    "@ayse git switch -c dev",
    '@ayse echo "export function rapor() {}" > rapor.js',
    "@ayse git add .",
    '@ayse git commit -m "Rapor"',
    "@ayse git push -u origin dev",
    `git clone ${VERI}`,
  ],
  hedefler: [
    { aciklama: "GitHub'daki hiçbir commit'te yedek.sql yok", denetle: (o) => !!uzakBul(o, VERI) && !uzakGecmisteYol(o, VERI, "yedek.sql") },
    {
      aciklama: "GitHub'da main, dev ve v1.0 duruyor; kasa.js ve rapor.js yerinde",
      denetle: (o) => {
        const u = uzakBul(o, VERI);
        const m = u?.refs["refs/heads/main"];
        const dv = u?.refs["refs/heads/dev"];
        return !!u && !!m && !!dv && !!u.refs["refs/tags/v1.0"] && "kasa.js" in commitAgaci(u, m) && "rapor.js" in commitAgaci(u, dv);
      },
    },
  ],
  ipuclari: [
    "`git filter-repo --path yedek.sql --invert-paths` bütün dalları ve etiketleri yeniden yazar; taze clone'daki origin/dev de yerel dala çevrilir.",
    "filter-repo origin'i kaldırır: `git remote add origin <adres>` ile geri ekle (adres: `" + VERI + "`).",
    "`git push --force --all` dalları, `git push --force --tags` etiketleri gönderir.",
  ],
  cozum: ["git filter-repo --path yedek.sql --invert-paths", `git remote add origin ${VERI}`, "git push --force --all", "git push --force --tags"],
  sonNot: "Yeniden yazılmış geçmiş bütün kimlikleri değiştirdi: ekipteki herkes yeniden clone etmeli, eski clone'lardan push edilirse dosya geri gelir. Kişisel veri sızdıysa veri sorumlusuna bildirmek de işin parçasıdır.",
};

export const GOREVLER: Gorev[] = [
  kimlik, ilkDepo, ilkCommit, secerekEkle, geriCek, gitignore, dedektif, envCikar, kurtar, mesajDuzelt, mainYap,
  dalAc, ileriSar, izBirak, yanlisDal, kopukKurtar, cakismaCoz, vazgec, canliGeriAl, acilStash, reflogKurtar,
  ilkPush, pushReddi, guvenliForce, budama, tekCommit, mesajDegistir, sirDrop, rebaseCakisma,
  korumaliMain, ciKirmizi, surumEtiketi, devdenAcilan, ucOrtam, hotfix,
  gecmisteAnahtar, sizintiGorevi, glAkis, cherryPickGorevi, bisectGorevi, blameGorevi,
  nesneNotu, resetFelaketi, stashKurtar, filtreGorevi,
];
