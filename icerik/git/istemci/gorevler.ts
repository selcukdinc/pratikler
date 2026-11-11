// Git sandbox'ının görevleri. Hedefler ortamın son hâline bakar; aynı sonuca
// giden her yol kabul edilir. Her görevin örnek çözümü gorevler.test.ts'te
// çalıştırılır: başlangıçta hedefler tutmamalı, çözümden sonra hepsi tutmalı.
import type { Gorev } from "../../../src/gitsim/gorev";
import {
  commitSayisi, dalAdiniAl, gecmisteVarMi, headDosyalari, izleniyor, sonMesaj, temizMi,
} from "../../../src/gitsim/gorev";
import { commitAgaci, commitOku, icerik, soy } from "../../../src/gitsim/depo";
import type { Ortam } from "../../../src/gitsim/tipler";

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

export const GOREVLER: Gorev[] = [kimlik, ilkDepo, ilkCommit, secerekEkle, geriCek, gitignore, dedektif, envCikar, kurtar, mesajDuzelt, mainYap];
