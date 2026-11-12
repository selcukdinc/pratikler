// Git ve GitHub derslerinin şekilleri. Hepsi etkileşimlidir (./etkilesim); buradaki
// SVG yalnızca yönetim listesinde ve ekran okuyucu açıklamasıyla gösterilen özettir.
import type { Gorsel } from "../../../src/gorseller/tip";

const ozet = (yazi: string) =>
  `<rect x="1" y="1" width="398" height="78" rx="8" fill="none" stroke="currentColor"/><text x="200" y="45" text-anchor="middle" font-size="14" fill="currentColor">${yazi}</text>`;

export const GORSELLER: Gorsel[] = [
  { kod: "G-H1-01", baslik: "Zaman makinesi: Git olmadan ve Git ile", aciklama: "Aynı raporun dosya adlarıyla tutulan sürümleri ile Git geçmişindeki beş commit karşılaştırılır; bir commit seçilince dosyanın o anki hâli ve değişen satırlar görünür.", en: 400, boy: 80, icerik: ozet("rapor_son_v2.docx mı, commit geçmişi mi?"), etkilesim: "zamanMakinesi" },
  { kod: "G-H1-02", baslik: "Merkezi ve dağıtık sürüm kontrolü", aciklama: "Sunucu çöktüğünde ya da internet kesildiğinde merkezi ve dağıtık modelde hangi işlerin yapılabildiği ve geçmişin nerede kaldığı gösterilir.", en: 400, boy: 80, icerik: ozet("Sunucu çökerse geçmiş nerede kalır?"), etkilesim: "merkeziDagitik" },
  { kod: "G-H1-03", baslik: "Bunu Git mi yapar, platform mu?", aciklama: "Commit, dal, birleştirme, pull request, issue gibi işler Git'e ya da GitHub/GitLab'a ait olarak sınıflandırılır.", en: 400, boy: 80, icerik: ozet("Git ↔ GitHub / GitLab"), etkilesim: "gitMiPlatformMu" },
  { kod: "G-H3-01", baslik: "Üç alan: çalışma dizini, hazırlık alanı, depo", aciklama: "Üç dosyanın sürümleri üç alanda izlenir; düzenle, git add, git restore ve git commit düğmeleri dosyaları alanlar arasında taşır.", en: 400, boy: 80, icerik: ozet("çalışma dizini → git add → hazırlık → git commit → depo"), etkilesim: "ucAlan" },
  { kod: "G-H4-01", baslik: "Commit kimliği nasıl oluşur?", aciklama: "Dosya içeriği, mesaj ya da yazar değiştirildiğinde commit'in SHA-1 kimliğinin tamamen değiştiği gösterilir.", en: 400, boy: 80, icerik: ozet("içerik + mesaj + yazar + zaman → SHA-1"), etkilesim: "commitKimligi" },
  { kod: "G-H5-01", baslik: "Yerel depo ve GitHub", aciklama: "Commit, push, pull ve ekip arkadaşının push'u ile yerel depo ve uzak depo arasındaki ileride ve geride olma durumu gösterilir; geride iken push reddedilir.", en: 400, boy: 80, icerik: ozet("yerel ⇄ origin"), etkilesim: "yerelUzak" },
];
