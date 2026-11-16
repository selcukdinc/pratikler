// Mesajlaşma simülatörünün görünürlük modeli: tasarım ayarları + saldırgan rolü + mesaj
// → o saldırganın mesajdan ne gördüğü (okunur metin, rastgele görünen bayt, yalnız metadata,
// hiçbir şey), nedeni ve nasıl kapatılacağı. Anahtar ele geçirme zaman çizelgesi de buradadır
// (ileri gizlilik ve ele geçirme sonrası güvenlik). Saf TypeScript; ekrandaki gerçek şifreli
// baytlar ./gercek.ts'ten gelir. Kurallar model.test.ts'te tablo testleriyle sınanır.
// Bu bir öğretim modelidir: gerçek ürünlerin ayrıntılarını sadeleştirir.

export type Koruma = "yok" | "tls" | "e2ee-sabit" | "e2ee-ratchet";
export type AnahtarYeri = "sunucu" | "cihaz" | "ikisi";
export type Yedek = "kapali" | "sifresiz" | "saglayici" | "parola";
export type Metadata = "yok" | "gizli-gonderen";

export interface Tasarim {
  koruma: Koruma;
  anahtarYeri: AnahtarYeri;
  yedek: Yedek;
  metadata: Metadata;
  // Güvenlik numarası iki tarafça karşılaştırıldı mı
  dogrulandi: boolean;
  // Kaybolan mesajlar: kaç günden eski mesajlar cihazdan (ve yedekten) silinir; null kapalı
  kaybolan: number | null;
  ekranKilidi: boolean;
}

export const VARSAYILAN: Tasarim = {
  koruma: "tls",
  anahtarYeri: "sunucu",
  yedek: "kapali",
  metadata: "yok",
  dogrulandi: false,
  kaybolan: null,
  ekranKilidi: true,
};

export type Rol = "ag" | "gelistirici" | "sunucu" | "telefon-kilitli" | "telefon-acik" | "yedek" | "guncelleme";

export const ROLLER: { id: Rol; ad: string; aciklama: string }[] = [
  { id: "ag", ad: "Ağı dinleyen", aciklama: "Kafe Wi-Fi'ı ya da internet servis sağlayıcısı: kablodan geçen her paketi görür." },
  { id: "gelistirici", ad: "Veritabanına erişen geliştirici", aciklama: "Sunucunun veritabanını okuyabilir, canlı trafiğe erişimi yoktur." },
  { id: "sunucu", ad: "Sunucu yöneticisi", aciklama: "Canlı trafik, veritabanı ve anahtar dizini elindedir; sunucuyu istediği gibi değiştirebilir." },
  { id: "telefon-kilitli", ad: "Çalınan telefon (kilitli)", aciklama: "Ayşe'nin telefonunu kilitliyken çaldı." },
  { id: "telefon-acik", ad: "Çalınan telefon (kilidi açık)", aciklama: "Ayşe'nin telefonunu kilidi açıkken kaptı." },
  { id: "yedek", ad: "Bulut yedeğe erişen", aciklama: "Yedeklerin saklandığı bulut hizmetinin bir çalışanı ya da Ayşe'nin bulut hesabını ele geçiren biri." },
  { id: "guncelleme", ad: "Kötü niyetli güncelleme", aciklama: "Uygulamanın yeni sürümüne gizlice mesajları dışarı gönderen kod eklendi." },
];

export type Duzey = "metin" | "bayt" | "metadata" | "hicbiri";

export const DUZEY_ADI: Record<Duzey, string> = {
  metin: "Okunur metin",
  bayt: "Rastgele görünen bayt",
  metadata: "Yalnız metadata",
  hicbiri: "Hiçbir şey",
};

export interface Mesaj {
  no: number;
  gonderen: "ayse" | "mert";
  metin: string;
  // Kaç gün önce gönderildi
  gun: number;
}

export type MetaAlan = "gönderen" | "alıcı" | "zaman" | "boyut";

export interface Gorunum {
  duzey: Duzey;
  // Yalnız etkin (araya giren, sahte anahtar veren) bir saldırıyla
  aktif?: boolean;
  // Saldırganın görebildiği metadata alanları
  meta: MetaAlan[];
  neden: string;
  nasil: string;
}

const TUM_META: MetaAlan[] = ["gönderen", "alıcı", "zaman", "boyut"];
const e2ee = (t: Tasarim) => t.koruma === "e2ee-sabit" || t.koruma === "e2ee-ratchet";
// Mesaj cihazdan (ve yedekten) silinmiş mi
export const silinmis = (t: Tasarim, m: Mesaj) => t.kaybolan !== null && m.gun > t.kaybolan;
const sunucuMetasi = (t: Tasarim): MetaAlan[] => (t.metadata === "gizli-gonderen" ? ["alıcı", "zaman", "boyut"] : TUM_META);

export function gorunum(t: Tasarim, rol: Rol, m: Mesaj): Gorunum {
  const sil = silinmis(t, m);
  const silNeden = `Kaybolan mesajlar açık: ${t.kaybolan} günden eski mesajlar cihazdan silindi.`;
  switch (rol) {
    case "ag":
      if (t.koruma === "yok")
        return { duzey: "metin", meta: TUM_META, neden: "Mesaj ağda şifresiz gidiyor; paketi yakalayan okur.", nasil: "En az TLS aç: bağlantı şifrelenir." };
      return {
        duzey: "bayt",
        meta: ["zaman", "boyut"],
        neden: "Bağlantı TLS ile şifreli. Ağ yalnız sunucuya bağlandığını, zamanı ve paketin boyunu görür; kime yazdığın TLS'in içinde.",
        nasil: "Boy ve zaman da gizlenmek istenirse dolgu ve karışım ağları gerekir (ileride).",
      };
    case "gelistirici":
      if (!e2ee(t))
        return { duzey: "metin", meta: TUM_META, neden: "Sunucu mesajı çözüp veritabanına açık metin olarak yazıyor. TLS yalnız yolu korur.", nasil: "Uçtan uca şifrelemeye geç: sunucu yalnız şifreli bayt saklar." };
      if (t.anahtarYeri !== "cihaz")
        return { duzey: "metin", meta: TUM_META, neden: "Mesajlar şifreli, ama anahtarlar da aynı sunucuda saklanıyor; veritabanını okuyan ikisini birleştirir.", nasil: "Özel anahtarlar yalnız cihazda kalsın." };
      return { duzey: "bayt", meta: sunucuMetasi(t), neden: "Veritabanında yalnız iletilmeyi bekleyen şifreli bayt var; anahtar cihazlarda.", nasil: t.metadata === "yok" ? "Gönderen bilgisini de gizlemek için gizli gönderen (sealed sender) aç." : "İçerik ve gönderen gizli; alıcı ve zaman sunucunun işi için görünür." };
    case "sunucu":
      if (!e2ee(t))
        return { duzey: "metin", meta: TUM_META, neden: "TLS sunucuda biter; sunucu her mesajı çözer ve okuyabilir.", nasil: "Uçtan uca şifrelemeye geç." };
      if (t.anahtarYeri !== "cihaz")
        return { duzey: "metin", meta: TUM_META, neden: t.anahtarYeri === "sunucu" ? "Özel anahtarlar sunucuda; sunucu her mesajı çözebilir. Bu, adı uçtan uca olan ama olmayan bir tasarımdır." : "Sunucuda anahtarların emanet kopyası var; yönetici onlarla çözebilir.", nasil: "Özel anahtarlar yalnız cihazda kalsın." };
      if (!t.dogrulandi)
        return { duzey: "metin", aktif: true, meta: TUM_META, neden: "Anahtar dizinini sunucu yönetiyor. Ayşe'ye Mert'in anahtarı yerine kendi anahtarını verirse araya girer (ortadaki adam). Bu etkin bir saldırıdır ve iz bırakabilir.", nasil: "Güvenlik numarasını yüz yüze ya da başka bir kanaldan doğrulayın." };
      return { duzey: "bayt", meta: sunucuMetasi(t), neden: "Uçtan uca şifreli ve anahtarlar doğrulanmış: sunucu yalnız şifreli baytı ve iletmek için gereken bilgiyi görür.", nasil: t.metadata === "yok" ? "Gizli gönderen açılırsa sunucu mesajı kimin gönderdiğini de görmez." : "Alıcı ve zaman iletim için gerekir; tamamen gizlemek karışım ağı ister." };
    case "telefon-kilitli":
      if (sil) return { duzey: "hicbiri", meta: [], neden: silNeden, nasil: "" };
      if (t.ekranKilidi)
        return { duzey: "hicbiri", meta: [], neden: "Telefon kilitli ve depolaması cihaz parolasından türetilen anahtarla şifreli; mesajlara ulaşamaz.", nasil: "Güçlü bir ekran kilidi parolası kullan; kısa PIN'ler denenebilir." };
      return { duzey: "metin", meta: TUM_META, neden: "Ekran kilidi yok; telefonu açan uygulamayı da açar.", nasil: "Ekran kilidi aç: cihaz depolaması onunla şifrelenir." };
    case "telefon-acik":
      if (sil) return { duzey: "hicbiri", meta: [], neden: silNeden, nasil: "" };
      return { duzey: "metin", meta: TUM_META, neden: "Uçtan uca şifreleme yolu korur; cihazdaki çözülmüş mesajı korumaz.", nasil: "Kaybolan mesajları aç: eski mesajlar cihazda birikmez. Uygulamaya ayrı kilit de eklenebilir." };
    case "yedek":
      if (t.yedek === "kapali") return { duzey: "hicbiri", meta: [], neden: "Yedek kapalı; bulutta bu sohbetin kopyası yok.", nasil: "" };
      if (sil) return { duzey: "hicbiri", meta: [], neden: `${silNeden} Silinen mesaj sonraki yedeğe girmez.`, nasil: "" };
      if (t.yedek === "sifresiz") return { duzey: "metin", meta: TUM_META, neden: "Yedek şifresiz; uçtan uca şifreleme ne kadar iyi olursa olsun buluttaki kopya açık.", nasil: "Yedeği kullanıcının parolasıyla (uçtan uca şifreli yedek) şifrele." };
      if (t.yedek === "saglayici") return { duzey: "metin", meta: TUM_META, neden: "Yedek şifreli, ama anahtarı bulut sağlayıcısında; sağlayıcı (ya da ona gelen bir talep) açabilir.", nasil: "Yedeği kullanıcının parolasıyla şifrele; anahtar sağlayıcıya gitmesin." };
      return { duzey: "bayt", meta: ["boyut"], neden: "Yedek, kullanıcının parolasından türetilen anahtarla şifreli; sağlayıcı yalnız şifreli bayt görür.", nasil: "Parola zayıfsa yedek çevrimdışı kaba kuvvetle kırılabilir: uzun bir parola ve yavaş bir KDF kullan (9. ünite)." };
    case "guncelleme":
      if (sil) return { duzey: "hicbiri", meta: [], neden: `${silNeden} Güncelleme geldiğinde artık yoklardı.`, nasil: "" };
      return { duzey: "metin", meta: TUM_META, neden: "Uçtan uca şifreleme istemciye güvenir: kötü niyetli istemci mesajı şifrelemeden önce ya da çözdükten sonra görür.", nasil: "Simülatördeki hiçbir ayar bunu kapatmaz. Gerçek dünyada açık kaynak ve tekrarlanabilir derleme, uygulama şeffaflık kayıtları ve güncelleme imzaları riski azaltır." };
  }
}

// ---------------- Anahtar ele geçirme zaman çizelgesi ----------------

// Saldırgan şifreli trafiğin hepsini kaydetmiştir (sunucu ya da ağ); bir anda bir anahtar çalınır.
export type CalinanAnahtar = "durum" | "zincir" | "kimlik" | "yedek";

export const CALINAN_ADI: Record<CalinanAnahtar, string> = {
  durum: "Oturum durumu (kök ve zincir anahtarları, DH özel anahtarı)",
  zincir: "Yalnız gönderme zinciri anahtarı",
  kimlik: "Uzun ömürlü kimlik anahtarı",
  yedek: "Yedeğin anahtarı",
};

export interface Ifsa {
  acik: boolean;
  neden: string;
}

// Ardışık aynı göndericili mesajlar bir "tur"dur; Double Ratchet her turda yeni bir DH adımı atar
export function turlar(mesajlar: Mesaj[]): number[] {
  let tur = 0;
  return mesajlar.map((m, i) => (i > 0 && m.gonderen !== mesajlar[i - 1]!.gonderen ? ++tur : tur));
}

// Çalınma anı: k. mesajı gönderen cihazdan (mesaj dizisindeki sıra) anahtar çalındı
export function zamanCizelgesi(t: Tasarim, mesajlar: Mesaj[], k: number, anahtar: CalinanAnahtar): Ifsa[] {
  const tur = turlar(mesajlar);
  const kTur = tur[k] ?? 0;
  return mesajlar.map((m, i) => {
    if (!e2ee(t)) return { acik: true, neden: "Uçtan uca şifreleme yok: sunucu her mesajı zaten okuyor." };
    if (t.anahtarYeri !== "cihaz") return { acik: true, neden: "Anahtarlar sunucuda da var; kaydedilen her mesaj çözülebilir." };
    if (t.yedek === "sifresiz" || t.yedek === "saglayici") {
      if (!silinmis(t, m)) return { acik: true, neden: "Mesaj bulut yedeğinde açık ya da sağlayıcının anahtarıyla duruyor; şifreleme protokolü ne olursa olsun yedekten okunur." };
    }
    if (anahtar === "yedek") {
      if (t.yedek === "parola" && !silinmis(t, m)) return { acik: true, neden: "Yedeğin anahtarı çalındı; yedekteki her mesaj açılır." };
      return { acik: false, neden: t.yedek === "kapali" ? "Yedek yok; yedek anahtarı işe yaramaz." : "Bu mesaj silindiği için yedekte değil." };
    }
    if (anahtar === "kimlik" && t.koruma === "e2ee-ratchet")
      return { acik: false, neden: "Kimlik anahtarı yalnız oturum kurarken kimliği kanıtlar; mesaj anahtarları geçici DH'lerden gelir. Kaydedilmiş trafik çözülemez, ama saldırgan yeni oturumlarda anahtarın sahibini taklit edebilir." };
    if (t.koruma === "e2ee-sabit") return { acik: true, neden: "Her mesaj aynı anahtarla şifreli: tek anahtar geçmişi de geleceği de açar." };
    // Double Ratchet
    if (i < k) return { acik: false, neden: "İleri gizlilik: zincir anahtarı tek yönlü KDF ile ilerler ve eski anahtarlar silinir; geçmiş mesajlar türetilemez." };
    if (anahtar === "zincir")
      return tur[i] === kTur
        ? { acik: true, neden: "Çalınan zincir anahtarından bu turun sonraki mesaj anahtarları türetilir." }
        : { acik: false, neden: "Karşı taraf yanıt verince yeni bir DH adımı atılır ve yeni bir zincir başlar; çalınan zincir işe yaramaz." };
    if (tur[i] === kTur) return { acik: true, neden: "Oturum durumu elinde: bu turun mesaj anahtarlarını türetir." };
    if (tur[i] === kTur + 1) return { acik: true, neden: "Karşı tarafın yeni DH anahtarı, çalınan DH özel anahtarıyla birleşiyor; saldırgan bu turu da hesaplar." };
    return { acik: false, neden: "Ele geçirme sonrası güvenlik: anahtarı çalınan taraf yeni bir DH anahtarı üretti ve saldırgan onu bilmiyor. Cırcır döndü, oturum iyileşti." };
  });
}

// ---------------- Paylaşılan tasarım bağlantısı (#tasarim=) ----------------

const KORUMALAR: Koruma[] = ["yok", "tls", "e2ee-sabit", "e2ee-ratchet"];
const YERLER: AnahtarYeri[] = ["sunucu", "cihaz", "ikisi"];
const YEDEKLER: Yedek[] = ["kapali", "sifresiz", "saglayici", "parola"];
const METALAR: Metadata[] = ["yok", "gizli-gonderen"];

// Kısa ve okunur: "e2ee-ratchet.cihaz.parola.gizli-gonderen.d1.k7.e1"
export function tasarimYaz(t: Tasarim): string {
  return [t.koruma, t.anahtarYeri, t.yedek, t.metadata, `d${t.dogrulandi ? 1 : 0}`, `k${t.kaybolan ?? "-"}`, `e${t.ekranKilidi ? 1 : 0}`].join(".");
}

export function tasarimOku(s: string): Tasarim | null {
  const [k, y, ye, m, d, ka, e] = s.split(".");
  if (!KORUMALAR.includes(k as Koruma) || !YERLER.includes(y as AnahtarYeri) || !YEDEKLER.includes(ye as Yedek) || !METALAR.includes(m as Metadata)) return null;
  if (!/^d[01]$/.test(d ?? "") || !/^k(-|\d{1,3})$/.test(ka ?? "") || !/^e[01]$/.test(e ?? "")) return null;
  return {
    koruma: k as Koruma,
    anahtarYeri: y as AnahtarYeri,
    yedek: ye as Yedek,
    metadata: m as Metadata,
    dogrulandi: d === "d1",
    kaybolan: ka === "k-" ? null : Number(ka!.slice(1)),
    ekranKilidi: e === "e1",
  };
}

// ---------------- Örnek yazışma ----------------

export const ORNEK_YAZISMA: Mesaj[] = [
  ["ayse", "Selam! Hafta sonu proje toplantısı hâlâ geçerli mi?", 30],
  ["mert", "Evet, cumartesi 14.00, kütüphanede.", 30],
  ["ayse", "Tamam. Sunumu ben hazırlarım.", 29],
  ["ayse", "Bu arada laboratuvar raporunu yükledin mi?", 29],
  ["mert", "Dün gece yükledim, sistem bir ara çöktü ama gitti.", 28],
  ["mert", "Sen de kontrol et istersen.", 28],
  ["ayse", "Baktım, görünüyor. Sağ ol!", 21],
  ["mert", "Kardeşimin doğum günü için hediye fikrin var mı?", 20],
  ["ayse", "Kulaklık? Geçen sefer seninkini çok beğenmişti.", 20],
  ["mert", "İyi fikir. Bütçem biraz sıkışık ama bakarım.", 19],
  ["ayse", "İstersen sana biraz borç verebilirim.", 14],
  ["mert", "Çok iyisin, ay sonunda öderim.", 14],
  ["mert", "IBAN'ımı birazdan atıyorum.", 13],
  ["ayse", "Tamam, gönderdim.", 13],
  ["mert", "Geldi, teşekkürler!", 9],
  ["ayse", "Yarın sınav var, notları paylaşır mısın?", 6],
  ["mert", "Klasöre koydum, şifresi grup sohbetinde.", 6],
  ["ayse", "Buldum. Akşam birlikte çalışalım mı?", 5],
  ["mert", "Olur, 20.00'de kafede buluşalım.", 5],
  ["mert", "Bu arada kafenin Wi-Fi'ı şifresiz, dikkat.", 4],
  ["ayse", "Sorun değil, uygulama uçtan uca şifreli. Değil mi?", 2],
  ["mert", "Ayarlarına bakmak lazım :)", 1],
  ["ayse", "Simülatörde deneyelim o zaman.", 0],
  ["mert", "Anlaştık!", 0],
].map(([g, metin, gun], no) => ({ no, gonderen: g as "ayse" | "mert", metin: metin as string, gun: gun as number }));
