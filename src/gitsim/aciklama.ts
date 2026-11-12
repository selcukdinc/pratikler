// Sandbox terminalindeki "Ne oldu?" notları: Git'in İngilizce çıktısını
// Türkçe, kısa ve ne yapılacağını söyleyen bir cümleyle açıklar. Önce hata ve
// uyarı kalıplarına, sonra başarılı komutun ne değiştirdiğine bakılır.
import { belirtecle, type KabukSonucu } from "./kabuk";
import { dalAdi, gecerliDal, headCommit, kisa } from "./depo";
import type { Ortam } from "./tipler";

type Kalip = [RegExp, (m: RegExpMatchArray) => string];

const HATALAR: Kalip[] = [
  [/not a git repository/, () => "Burada henüz bir Git deposu yok. Önce `git init` ile klasörü depoya çevir (ya da `cd /proje` ile proje köküne dön)."],
  [/Author identity unknown|Please tell me who you are/, () =>
    "Git commit'e kimin adını yazacağını bilmiyor. Bir kez `git config --global user.name \"Adın\"` ve `git config --global user.email \"posta@adresin\"` yaz, sonra commit'i tekrarla."],
  [/^nothing to commit, working tree clean/m, () => "Kaydedilecek bir değişiklik yok: çalışma dizini son commit ile aynı. Önce bir dosyayı değiştir."],
  [/nothing added to commit but untracked files present/, () =>
    "Yeni dosyalar var ama hazırlık alanına (staging) eklenmemiş. Commit'ten önce `git add <dosya>` ile seç."],
  [/no changes added to commit/, () =>
    "Değişiklikler çalışma dizininde duruyor, hazırlık alanında değil. `git add <dosya>` ile ekle ya da `git commit -a` kullan."],
  [/Aborting commit due to empty commit message/, () => "Commit mesajı boş kaldı. Mesajı `-m \"...\"` ile ver."],
  [/pathspec '([^']*)' did not match any file/, (m) => `Git '${m[1]}' adında bir dosya bulamadı. Adı \`ls\` ile kontrol et; büyük-küçük harf de önemlidir.`],
  [/The following paths are ignored by one of your \.gitignore files/, () =>
    "Bu dosya .gitignore'daki bir kurala uyduğu için eklenmedi. Gerçekten gerekiyorsa `git add -f`; çoğu zaman eklenmemesi doğrudur."],
  [/Your local changes to the following files would be overwritten by (checkout|merge)/, (m) =>
    `Commit'lenmemiş değişikliklerin bu ${m[1] === "merge" ? "birleştirmede" : "geçişte"} ezilecekti; Git durdu. Önce commit'le ya da \`git stash\` ile kenara koy.`],
  [/untracked working tree files would be (overwritten|removed)/, () =>
    "İzlenmeyen bir dosyan hedefteki bir dosyayla çakışıyor. Dosyayı taşı, sil ya da önce ekleyip commit'le."],
  [/CONFLICT \(([^)]*)\)/, () =>
    "Çakışma: iki taraf aynı satırları farklı değiştirmiş. Dosyayı aç, <<<<<<< ======= >>>>>>> işaretleri arasında doğru hâli bırak, sonra `git add` ve `git commit` (ya da işlemin `--continue`'su)."],
  [/you have unmerged files|you need to resolve your current index first|is unmerged/, () =>
    "Çözülmemiş çakışma var. Çakışan dosyaları düzeltip `git add` ile çözüldü olarak işaretle; vazgeçmek için `git merge --abort`."],
  [/not fully merged/, () =>
    "Bu dalın commit'leri başka bir dala birleşmemiş; silersen ulaşması zorlaşır. Eminsen `git branch -D` ile zorla sil."],
  [/a branch named '([^']*)' already exists/, (m) => `'${m[1]}' adında bir dal zaten var. Ona geçmek için \`git switch ${m[1]}\`.`],
  [/invalid reference: (.*)|did not match any file\(s\) known to git/, () =>
    "Böyle bir dal ya da commit yok. Dalları `git branch`, commit'leri `git log --oneline` ile gör; yeni dal için `git switch -c <ad>`."],
  [/Cannot delete branch '([^']*)' checked out/, (m) => `Şu an '${m[1]}' dalındasın; üzerinde durduğun dal silinemez. Önce başka bir dala geç.`],
  [/is not a valid branch name/, () => "Dal adında boşluk, `..`, `~`, `^`, `:` gibi karakterler olamaz. Örnek: feature/giris-sayfasi."],
  [/does not have any commits yet/, () => "Bu dalda henüz commit yok. Önce bir commit oluştur."],
  [/ambiguous argument '([^']*)': unknown revision/, (m) => `Git '${m[1]}' adını bir commit'e ya da dosyaya çeviremedi. Yazımı kontrol et.`],
  [/Not possible to fast-forward/, () => "İki dal ayrışmış; ileri sarma (fast-forward) yapılamıyor. Birleştirme commit'i için `--ff-only` olmadan dene."],
  [/is not a git command/, () => "Böyle bir git komutu yok; yazım hatası olabilir. Git'in önerisine bak."],
  [/command not found/, () => "Bu sandbox yalnızca git ve temel kabuk komutlarını (ls, cd, cat, echo, touch, mkdir, rm, mv, cp, nano) tanır."],
  [/No stash entries found/, () => "Kenarda bekleyen bir stash yok."],
  [/You have nothing to amend/, () => "Düzeltilecek bir commit yok; önce ilk commit'i oluştur."],
  [/You have not concluded your (merge|cherry-pick|revert|rebase)/, (m) => `Yarım kalmış bir ${m[1]} var. Önce bitir (\`--continue\`) ya da vazgeç (\`--abort\`).`],
  [/cannot switch branch while/, () => "Yarıda kalmış bir işlem varken dal değiştirilemez. Önce işlemi bitir ya da `--abort` ile vazgeç."],
  [/tag '([^']*)' already exists/, (m) => `'${m[1]}' etiketi zaten var. Etiketler genelde taşınmaz; yeni bir ad seç.`],
  [/key does not contain a section/, () => "Ayar adı `bolum.ad` biçiminde olmalı, örneğin `user.name`."],
  [/hint: Waiting for your editor/, () => "Gerçek Git burada bir editör açardı. Sandbox'ta mesajı komutun içinde `-m \"...\"` ile ver."],
];

const ilkKelimeler = (satir: string): string[] => {
  try {
    return belirtecle(satir).flatMap((b) => (b.tur === "kelime" ? [b.deger] : []));
  } catch {
    return [];
  }
};

function dalYazi(o: Ortam): string {
  const d = o.depo;
  if (!d) return "";
  const r = gecerliDal(d);
  return r ? dalAdi(r) : "kopuk HEAD";
}

// Başarılı komutun ne değiştirdiği; null: söylenecek bir şey yok
function basari(satir: string, once: Ortam, sonra: Ortam, cikti: string): string | null {
  const [ad, alt, ...args] = ilkKelimeler(satir);
  if (ad !== "git") return null;
  const d = sonra.depo;
  const head = d && headCommit(d);
  const onceHead = once.depo && headCommit(once.depo);
  switch (alt) {
    case "init":
      return once.depo ? "Depo zaten vardı; Git yalnızca yeniden başlattı, hiçbir şey silinmedi." : "Klasör artık bir Git deposu: gizli .git klasörü geçmişi tutacak. Henüz hiçbir dosya izlenmiyor.";
    case "add":
      return "Seçtiğin değişiklikler hazırlık alanına (staging) kondu. Bir sonraki commit tam olarak buradakileri kaydedecek.";
    case "commit":
      if (!d || !head || head === onceHead) return null;
      if (args.includes("--amend")) return `Son commit yerine yenisi yazıldı (${kisa(head)}). Kimliği değişti: paylaşılmış bir commit'te --amend kullanma.`;
      return `Yeni bir anlık görüntü kaydedildi: ${kisa(head)}, '${dalYazi(sonra)}' dalı ona ilerledi.`;
    case "status":
      return null;
    case "restore":
      return args.includes("--staged") || args.includes("-S")
        ? "Dosya hazırlık alanından geri çekildi; çalışma dizinindeki hâli olduğu gibi duruyor."
        : "Dosya hazırlık alanındaki (ya da son commit'teki) hâline döndü. Bu geri alınamaz: kaydedilmemiş değişiklik gitti.";
    case "rm":
      return args.includes("--cached") ? "Dosya Git'in takibinden çıkarıldı ama diskte duruyor. Bir sonraki commit'le depodan silinecek; eski commit'lerde hâlâ var." : "Dosya hem diskten hem hazırlık alanından silindi; silinme bir sonraki commit'e girecek.";
    case "mv":
      return "Dosya yeniden adlandırıldı ve bu değişiklik hazırlık alanına girdi.";
    case "switch":
    case "checkout":
      if (!d) return null;
      if (d.head.tur === "kopuk") return `HEAD artık bir dala değil doğrudan ${kisa(d.head.hash)} commit'ine bakıyor (kopuk HEAD). Burada commit atacaksan önce \`git switch -c <yeni-dal>\`.`;
      return `Artık '${dalYazi(sonra)}' dalındasın; çalışma dizini o dalın son commit'ine göre güncellendi.`;
    case "branch":
      if (args.includes("-m") || args.includes("-M")) return "Dalın adı değişti; commit'ler aynı kaldı.";
      if (args.includes("-d") || args.includes("-D")) return "Dal etiketi silindi. Commit'ler hemen yok olmaz; reflog'dan bulunabilir.";
      if (args.length && !args[0]!.startsWith("-")) return `'${args[0]}' dalı oluşturuldu ama hâlâ '${dalYazi(sonra)}' dalındasın. Geçmek için \`git switch ${args[0]}\`.`;
      return null;
    case "merge":
      if (/Fast-forward/.test(cikti)) return "İleri sarma (fast-forward): dal yalnızca öne kaydırıldı, birleştirme commit'i gerekmedi.";
      if (/Merge made by/.test(cikti)) return "İki dalın geçmişi birleşti; iki ebeveynli bir birleştirme commit'i oluştu.";
      if (/Already up to date/.test(cikti)) return "Birleştirilecek yeni bir şey yok; o dalın bütün commit'leri zaten burada.";
      return null;
    case "reset":
      if (args.includes("--hard")) return "Dal geri alındı ve çalışma dizini de o commit'e döndü. Kaydedilmemiş değişiklikler gitti; commit'ler reflog'da bir süre bulunur.";
      if (args.includes("--soft")) return "Dal geri alındı ama değişiklikler hazırlık alanında duruyor; yeniden commit'leyebilirsin.";
      return head !== onceHead ? "Dal geri alındı; değişiklikler çalışma dizininde duruyor, hazırlık alanı boşaltıldı." : "Hazırlık alanı son commit'e döndü; çalışma dizinine dokunulmadı.";
    case "revert":
      return head !== onceHead ? "Eski commit'in tersini yapan yeni bir commit eklendi. Geçmiş silinmedi: paylaşılmış dallarda güvenli yol budur." : null;
    case "tag":
      return args.length && !args[0]!.startsWith("-l") ? "Etiket bu commit'e sabitlendi; dal gibi ilerlemez." : null;
    case "stash":
      if (!args.length || args[0] === "push") return "Değişiklikler kenara kondu; çalışma dizini son commit'e döndü. Geri getirmek için `git stash pop`.";
      if (args[0] === "pop" || args[0] === "apply") return "Kenardaki değişiklikler çalışma dizinine geri geldi.";
      return null;
    case "config":
      return args.includes("--global") && args.length >= 3 ? "Ayar bütün depoların için kaydedildi (~/.gitconfig)." : null;
    case "cherry-pick":
      return head !== onceHead ? "Seçilen commit'in değişikliği bu dala yeni bir commit olarak kopyalandı." : null;
    case "rebase":
      return head !== onceHead && !/CONFLICT/.test(cikti) ? "Dalın commit'leri yeni tabanın üstüne yeniden yazıldı; kimlikleri değişti." : null;
    default:
      return null;
  }
}

export function aciklama(satir: string, sonuc: KabukSonucu, once: Ortam, sonra: Ortam): string | null {
  for (const [k, f] of HATALAR) {
    const m = sonuc.cikti.match(k);
    if (m) return f(m);
  }
  if (sonuc.kod !== 0) return null;
  if (/HEAD detached/.test(sonuc.cikti) || /You are in 'detached HEAD' state/.test(sonuc.cikti)) {
    const d = sonra.depo;
    return d && d.head.tur === "kopuk" ? `Kopuk HEAD: ${kisa(d.head.hash)} commit'ine bakıyorsun, bir dalda değilsin.` : null;
  }
  return basari(satir, once, sonra, sonuc.cikti);
}
