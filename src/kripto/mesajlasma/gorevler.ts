// Mesajlaşma simülatörünün görevleri: her hedef komuta değil tasarımın durumuna bakar
// (model.ts'teki görünürlük kuralları ve zaman çizelgesi). Her görevin örnek çözümü
// gorevler.test.ts'te kendi hedefini sağlar; varsayılan tasarım hiçbirini sağlamaz.
import { gorunum, ORNEK_YAZISMA, ROLLER, zamanCizelgesi, type Mesaj, type Rol, type Tasarim } from "./model";

export interface Gorev {
  id: string;
  baslik: string;
  aciklama: string;
  ipucu: string;
  // İlgili ders ünitesi
  unite: number;
  hedef: (t: Tasarim) => boolean;
  ornek: Tasarim;
}

const M: Mesaj[] = ORNEK_YAZISMA;
// Zaman çizelgesi görevlerinde anahtar 12. mesajı gönderen cihazdan çalınır
const CALINMA = 12;

const okuyamaz = (t: Tasarim, rol: Rol, m: Mesaj[] = M) => m.every((x) => gorunum(t, rol, x).duzey !== "metin");
const hepsiniOkur = (t: Tasarim, rol: Rol) => M.every((x) => gorunum(t, rol, x).duzey === "metin");
const eski = (gun: number) => M.filter((m) => m.gun > gun);

const iyi: Tasarim = { koruma: "e2ee-ratchet", anahtarYeri: "cihaz", yedek: "kapali", metadata: "yok", dogrulandi: false, kaybolan: null, ekranKilidi: true };

export const GOREVLER: Gorev[] = [
  {
    id: "vt-sizinti",
    baslik: "Veritabanı sızsa da okunmasın",
    aciklama: "Bir geliştirici sunucunun veritabanını kopyaladı. Kopyada okunur tek bir mesaj bulunmasın.",
    ipucu: "TLS yalnız yolu korur; sunucu mesajı çözüp saklar. Anahtar nerede durmalı?",
    unite: 13,
    hedef: (t) => okuyamaz(t, "gelistirici"),
    ornek: iyi,
  },
  {
    id: "emanet",
    baslik: "Adı uçtan uca, kendisi değil",
    aciklama: "Uçtan uca şifrelemeyi aç, ama sunucu yöneticisi yine de bütün mesajları okuyabilsin. Hangi ayar şifrelemeyi boşa çıkarır?",
    ipucu: "Özel anahtarların bir kopyası sunucuda durursa ne olur?",
    unite: 13,
    hedef: (t) => t.koruma === "e2ee-ratchet" && hepsiniOkur(t, "sunucu") && t.anahtarYeri !== "cihaz",
    ornek: { ...iyi, anahtarYeri: "ikisi" },
  },
  {
    id: "sahte-anahtar",
    baslik: "Sunucu araya giremesin",
    aciklama: "Sunucu yöneticisi, anahtar dizinine sahte anahtar koymak gibi etkin bir saldırıyla bile hiçbir mesajı okuyamasın.",
    ipucu: "Uçtan uca şifreleme tek başına yetmez; Ayşe aldığı anahtarın Mert'in olduğunu nasıl bilir?",
    unite: 13,
    hedef: (t) => M.every((m) => { const g = gorunum(t, "sunucu", m); return g.duzey !== "metin" && !g.aktif; }),
    ornek: { ...iyi, dogrulandi: true },
  },
  {
    id: "ileri-gizlilik",
    baslik: "Geçmişi koru",
    aciklama: "Saldırgan bütün şifreli trafiği kaydetti ve 13. mesajda telefondan oturum durumunu çaldı. Daha önceki 12 mesajın hiçbiri açılmasın.",
    ipucu: "Her mesajda anahtarı değişen ve eski anahtarları silen bir yapı gerekir.",
    unite: 13,
    hedef: (t) => zamanCizelgesi(t, M, CALINMA, "durum").slice(0, CALINMA).every((x) => !x.acik),
    ornek: iyi,
  },
  {
    id: "iyilesme",
    baslik: "Oturum kendiliğinden iyileşsin",
    aciklama: "Aynı saldırıda, çalınmadan sonraki birkaç mesaj açılabilir; ama konuşmanın son mesajları yeniden kilitlensin.",
    ipucu: "Yalnız simetrik zincir yetmez; saldırganın bilmediği taze bir Diffie-Hellman sırrı karışmalı.",
    unite: 13,
    hedef: (t) => !zamanCizelgesi(t, M, CALINMA, "durum").at(-1)!.acik,
    ornek: iyi,
  },
  {
    id: "sabit-anahtar",
    baslik: "Tek anahtarın bedeli",
    aciklama: "Anahtarlar yalnız cihazda olsun, yedek de kapalı kalsın; ama oturum durumu çalınınca geçmiş ve gelecek bütün mesajlar açılsın. Hangi tasarım bunu yapar?",
    ipucu: "Koruma düzeylerinden biri her mesajda aynı anahtarı kullanıyor.",
    unite: 13,
    hedef: (t) => t.anahtarYeri === "cihaz" && t.yedek === "kapali" && zamanCizelgesi(t, M, CALINMA, "durum").every((x) => x.acik),
    ornek: { ...iyi, koruma: "e2ee-sabit" },
  },
  {
    id: "gizli-gonderen",
    baslik: "Sunucu göndereni görmesin",
    aciklama: "Sunucu yöneticisi hiçbir mesajın içeriğini okuyamasın ve mesajı kimin gönderdiğini de görmesin.",
    ipucu: "Gönderenin kimliği, yalnız alıcının açabildiği zarfın içine konabilir.",
    unite: 14,
    hedef: (t) => M.every((m) => { const g = gorunum(t, "sunucu", m); return g.duzey !== "metin" && !g.meta.includes("gönderen"); }),
    ornek: { ...iyi, dogrulandi: true, metadata: "gizli-gonderen" },
  },
  {
    id: "sifresiz-yedek",
    baslik: "En zayıf halka",
    aciklama: "Double Ratchet açık ve anahtarlar yalnız cihazda olsun; buna rağmen bulut yedeğine erişen biri bütün sohbeti okuyabilsin.",
    ipucu: "Şifreleme yalnız yolu korur; aynı sohbetin başka bir kopyası nerede durabilir?",
    unite: 14,
    hedef: (t) => t.koruma === "e2ee-ratchet" && t.anahtarYeri === "cihaz" && hepsiniOkur(t, "yedek"),
    ornek: { ...iyi, yedek: "sifresiz" },
  },
  {
    id: "yedek-acik",
    baslik: "Yedek açık, bulut kör",
    aciklama: "Sohbet yedeği açık kalsın, ama bulut sağlayıcısı (ya da Ayşe'nin bulut hesabını ele geçiren biri) hiçbir mesajı okuyamasın.",
    ipucu: "Yedeğin anahtarı sağlayıcıda değil, Ayşe'nin bildiği bir şeyden türetilmeli.",
    unite: 14,
    hedef: (t) => t.yedek !== "kapali" && okuyamaz(t, "yedek"),
    ornek: { ...iyi, yedek: "parola" },
  },
  {
    id: "kilitsiz",
    baslik: "Kilidin işi",
    aciklama: "Ayşe'nin telefonu kilitliyken çalındı ve hırsız bütün sohbeti okuyabildi. Bunu mümkün kılan tasarımı kur.",
    ipucu: "Cihaz depolaması neyle şifrelenir?",
    unite: 14,
    hedef: (t) => hepsiniOkur(t, "telefon-kilitli"),
    ornek: { ...iyi, ekranKilidi: false },
  },
  {
    id: "yedi-gun",
    baslik: "Çalınan telefonda eski mesaj kalmasın",
    aciklama: "Telefon kilidi açıkken kapıldı. Hırsız 7 günden eski hiçbir mesajı göremesin.",
    ipucu: "Şifreleme cihazdaki çözülmüş mesajı korumaz; mesaj orada hiç birikmemeli.",
    unite: 14,
    hedef: (t) => okuyamaz(t, "telefon-acik", eski(7)),
    ornek: { ...iyi, kaybolan: 7 },
  },
  {
    id: "guncelleme",
    baslik: "Kötü niyetli güncellemenin zararını sınırla",
    aciklama: "Uygulamanın yeni sürümüne gizlice mesajları dışarı gönderen kod eklendi. Bunu hiçbir ayar engelleyemez; ama güncelleme en fazla son bir günün mesajlarını görebilsin.",
    ipucu: "İstemcide olmayan bir mesajı kötü niyetli istemci de göremez.",
    unite: 14,
    hedef: (t) => okuyamaz(t, "guncelleme", eski(1)),
    ornek: { ...iyi, kaybolan: 1 },
  },
  {
    id: "en-kotu",
    baslik: "En kötü tasarım",
    aciklama: "Bu kez tersini yap: saldırgan listesindeki herkes bütün mesajları okuyabilsin.",
    ipucu: "Ağ, sunucu, yedek ve kilitli telefon: her birini açık bırakan ayarı bul.",
    unite: 14,
    hedef: (t) => ROLLER.every((r) => hepsiniOkur(t, r.id)),
    ornek: { koruma: "yok", anahtarYeri: "sunucu", yedek: "sifresiz", metadata: "yok", dogrulandi: false, kaybolan: null, ekranKilidi: false },
  },
  {
    id: "gizlilik-odakli",
    baslik: "Gizlilik odaklı uygulama",
    aciklama: "Hepsi birden: ağ, veritabanı, sunucu (etkin saldırıyla bile), bulut yedeği ve kilitli telefon hiçbir mesajı okuyamasın; yedek açık olsun, sunucu göndereni görmesin, ileri gizlilik olsun ve kilidi açık çalınan telefonda 7 günden eski mesaj kalmasın.",
    ipucu: "Önceki görevlerin çözümlerini birleştir.",
    unite: 14,
    hedef: (t) =>
      (["ag", "gelistirici", "yedek", "telefon-kilitli"] as Rol[]).every((r) => okuyamaz(t, r)) &&
      GOREVLER_HEDEF["sahte-anahtar"]!(t) &&
      GOREVLER_HEDEF["gizli-gonderen"]!(t) &&
      GOREVLER_HEDEF["ileri-gizlilik"]!(t) &&
      t.yedek !== "kapali" &&
      okuyamaz(t, "telefon-acik", eski(7)),
    ornek: { koruma: "e2ee-ratchet", anahtarYeri: "cihaz", yedek: "parola", metadata: "gizli-gonderen", dogrulandi: true, kaybolan: 7, ekranKilidi: true },
  },
];

const GOREVLER_HEDEF: Record<string, (t: Tasarim) => boolean> = Object.fromEntries(GOREVLER.map((g) => [g.id, g.hedef]));

// Tamamlanan görevler tarayıcıda saklanır (yalnız bu cihazda; sunucuya istek atılmaz)
const ANAHTAR = "sifreleme:mesajlasma-gorevleri";

export function tamamlananlariOku(): Set<string> {
  try {
    const s = localStorage.getItem(ANAHTAR);
    const dizi: unknown = s ? JSON.parse(s) : [];
    return new Set(Array.isArray(dizi) ? dizi.filter((x): x is string => typeof x === "string") : []);
  } catch {
    return new Set();
  }
}

export function tamamlananlariYaz(s: Set<string>) {
  try {
    localStorage.setItem(ANAHTAR, JSON.stringify([...s]));
  } catch {
    // Gizli pencere ya da kapalı depolama: ilerleme yalnız bu oturumda kalır
  }
}
