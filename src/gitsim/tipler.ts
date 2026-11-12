// Tarayıcıda çalışan Git modelinin durumu. Her şey düz JSON'dur: geri alma için
// anlık görüntüsü alınabilir, paylaşılabilir bağlantıya gömülebilir. Nesne
// kimlikleri gerçek Git'teki gibi SHA-1 ile hesaplanır (nesne.ts); aynı komutlar
// aynı saatle çalıştırılınca gerçek Git ile aynı kimlikler çıkar (gitsim.test.ts).

export interface Blob {
  tur: "blob";
  icerik: string;
}

export interface AgacGirdisi {
  ad: string;
  // "100644" dosya, "40000" klasör
  mod: "100644" | "40000";
  hash: string;
}

export interface Agac {
  tur: "tree";
  girdiler: AgacGirdisi[];
}

export interface Kisi {
  ad: string;
  eposta: string;
  // Unix saniyesi; saat dilimi her zaman +0000
  zaman: number;
}

export interface Commit {
  tur: "commit";
  agac: string;
  ebeveynler: string[];
  yazar: Kisi;
  isleyen: Kisi;
  // Sonunda "\n" ile, Git'in sakladığı biçimde
  mesaj: string;
}

export interface Etiket {
  tur: "tag";
  nesne: string;
  nesneTuru: "commit";
  ad: string;
  etiketleyen: Kisi;
  mesaj: string;
}

export type Nesne = Blob | Agac | Commit | Etiket;

// HEAD bir dalı ya da (kopuk HEAD) doğrudan bir commit'i gösterir
export type Head = { tur: "ref"; ref: string } | { tur: "kopuk"; hash: string };

export interface ReflogKaydi {
  hash: string;
  mesaj: string;
}

// Çakışmalı dosyada index'in 1 (ortak ata), 2 (bizimki) ve 3 (onlarınki) aşamaları
export interface CatismaGirdisi {
  taban?: string;
  biz?: string;
  onlar?: string;
}

// Yarıda kalmış birleştirme, cherry-pick, revert ya da rebase
export type SuregelenIslem =
  | { tur: "merge"; onlar: string; mesaj: string; catismalar?: string[] }
  | { tur: "cherry-pick"; commit: string; mesaj: string; yazar: Kisi }
  | { tur: "revert"; commit: string; mesaj: string }
  | {
      tur: "rebase";
      // Rebase edilen dalın ref'i (kopuk HEAD'den başlandıysa null)
      dal: string | null;
      // Rebase'in başladığı yerdeki commit (abort için)
      eskiUc: string;
      onto: string;
      // Sırada bekleyen commit'ler (eskiden yeniye)
      kalan: string[];
      // Çakışmada duran commit
      duran?: string;
      // Etkileşimli rebase: sıradaki komutlar (kalan'ın yerine) ve editörde bekleyen adım
      etkilesimli?: boolean;
      komutlar?: RebaseKomutu[];
      editor?: "todo" | "mesaj";
      // Editörde düzenlenen metin ve editör kapanınca yazılacak commit
      editorMetni?: string;
      bekleyen?: { agac: string; ebeveynler: string[]; yazar: Kisi; tur: "reword" | "squash" };
      // Komutun başladığı saat (editörden sonra yazılan commit'ler aynı zamanı alır)
      saat?: number;
      // reflog'daki "checkout <...>" adı ve edit'te durulan commit
      baslangic?: string;
      durdu?: string;
      // Yapılan komutlar ("pick a1b2c3d mesaj"), git status için
      yapilan?: string[];
    };

export interface RebaseKomutu {
  islem: "pick" | "reword" | "squash" | "fixup" | "drop" | "edit";
  hash: string;
}

export interface StashKaydi {
  // Stash commit'i (ebeveynleri: HEAD ve index commit'i)
  hash: string;
  mesaj: string;
}

export interface Depo {
  nesneler: Record<string, Nesne>;
  // "refs/heads/main" -> commit kimliği; "refs/tags/v1.0" -> commit ya da etiket nesnesi
  refs: Record<string, string>;
  head: Head;
  // Hazırlık alanı: yol -> blob kimliği (aşama 0)
  index: Record<string, string>;
  // Çakışmalı yollar (index'te aşama 1-3); çözülünce silinir
  catisma: Record<string, CatismaGirdisi>;
  config: Record<string, string>;
  // HEAD'in hareket kaydı, en yenisi sonda
  reflog: ReflogKaydi[];
  // Dalların hareket kaydı
  dalReflog: Record<string, ReflogKaydi[]>;
  stash: StashKaydi[];
  islem: SuregelenIslem | null;
  origHead?: string;
  // Sembolik uzak ref'ler: "refs/remotes/origin/HEAD" -> "refs/remotes/origin/main"
  semboller?: Record<string, string>;
  // Uzak depo GitHub'daysa platformun durumu: dal korumaları, pull request'ler, CI
  platform?: Platform;
}

// GitHub'daki dal koruma kuralı (branch protection / ruleset)
export interface DalKorumasi {
  // Doğrudan push yok, değişiklik yalnızca PR ile
  prZorunlu?: boolean;
  // Birleştirmek için gereken onay sayısı
  onay?: number;
  // Durum denetimi (CI) geçmeden birleştirilemez
  ci?: boolean;
  // Varsayılan olarak korumalı dalda force push ve silme kapalıdır
  zorlaSerbest?: boolean;
  silmeSerbest?: boolean;
}

// Sanal CI'ın bir adımı: dalın son commit'indeki dosyalara bakar
export interface CiAdimi {
  ad: string;
  // Hiçbir dosyada geçmemesi gereken metin (ör. "console.log")
  yasak?: string;
  // Bulunması gereken dosya (ör. "CHANGELOG.md")
  dosya?: string;
  // Akış kuralı: PR'da hedefte olmayan birleştirme commit'i ya da PR sahibinden başka
  // birinin commit'i olmasın (dev'i toptan taşımak, dalı yanlış yerden açmak)
  akis?: boolean;
  // Kalınca gösterilen ileti
  mesaj: string;
}

export interface PullRequest {
  no: number;
  baslik: string;
  kaynak: string;
  hedef: string;
  yazar: string;
  durum: "acik" | "birlesti" | "kapali";
  // Onaylayanlar ve değişiklik isteyenler (ad)
  onaylar: string[];
  degisiklik: string[];
  yontem?: "merge" | "squash" | "rebase";
  birlesmeCommit?: string;
}

export interface Platform {
  // "kafe-mavi/siparis"
  ad: string;
  korumalar: Record<string, DalKorumasi>;
  ci?: CiAdimi[];
  prler: PullRequest[];
  // Push protection: gizli bilgi içeren push reddedilir (GH013)
  gizliKoruma?: boolean;
  // Herkese açık depo: botlar her push'u tarar, buldukları etkin anahtarı kullanır
  herkeseAcik?: boolean;
}

// Sanal ödeme hizmetindeki (KafePay) bir API anahtarı
export interface BulutAnahtari {
  ad: string;
  deger: string;
  durum: "aktif" | "iptal";
  olusturma: number;
  // Botların anahtarı public depoda bulduğu an
  sizdi?: number;
}

export interface Ortam {
  // Çalışma dizini: depo köküne göre yol -> içerik
  dosyalar: Record<string, string>;
  // Elle açılmış (boş olabilecek) klasörler
  klasorler: string[];
  // Kabuğun bulunduğu klasör, depo köküne göre ("" kök)
  cwd: string;
  depo: Depo | null;
  // Kullanıcı düzeyindeki ayarlar (git config --global)
  globalConfig: Record<string, string>;
  // Bir sonraki commit'in zamanı (Unix saniyesi); her komuttan sonra ilerler
  saat: number;
  // Sanal uzak depolar (GitHub/GitLab): normalleştirilmiş adres -> çıplak depo
  uzaklar?: Record<string, Depo>;
  // Sanal ekip arkadaşlarının kendi bilgisayarları (aynı uzak depolarla çalışır)
  ekip?: Record<string, Ortam>;
  // git clone ile açılan klasörün adı (istemde gösterilir)
  kokAd?: string;
  // Görev olaylarından tetiklenmiş olanlar
  tetiklenen?: string[];
  // Kullanıcının sanal ödeme hizmeti hesabı (kafepay komutu, gizli.ts)
  bulut?: { anahtarlar: BulutAnahtari[]; kayitlar: string[] };
}

export interface Sonuc {
  cikti: string;
  // 0 başarı; Git'in fatal/error durumlarında 128 ya da 1
  kod: number;
}
