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

export const GOREVLER: Gorev[] = [
  kimlik, ilkDepo, ilkCommit, secerekEkle, geriCek, gitignore, dedektif, envCikar, kurtar, mesajDuzelt, mainYap,
  dalAc, ileriSar, izBirak, yanlisDal, kopukKurtar, cakismaCoz, vazgec, canliGeriAl, acilStash, reflogKurtar,
];
