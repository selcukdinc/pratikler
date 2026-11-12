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
  | { tur: "merge"; onlar: string; mesaj: string }
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
    };

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
}

export interface Sonuc {
  cikti: string;
  // 0 başarı; Git'in fatal/error durumlarında 128 ya da 1
  kod: number;
}
