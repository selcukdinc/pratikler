// 16. ünite (Görsel kriptografi ve steganografi): Naor-Shamir payları, eşik sır paylaşımı,
// steganografi, LSB, steganaliz ve görüntü şifreleme. Sayısal cevaplar sorular.test.ts'te.
import { sorular, type Soru } from "./yardimci.ts";

const U = 16;

export const unite16: Soru[] = [
  ...sorular(U, "u16-gorsel", [
    {
      ad: "tek-pay",
      dy: true,
      soru: "Naor-Shamir'in 2'den 2 görsel kriptografisinde tek bir pay, mesaj hakkında hiçbir bilgi taşımaz.",
      aciklama: "Doğru. Her pikselin yerinde aynı oranda siyah hücre vardır ve birinci pay mesajdan tamamen bağımsız üretilir. İkinci pay, aynı birinci payla herhangi bir mesajı verecek biçimde seçilebilir.",
    },
    {
      ad: "nasil-coz",
      soru: "Görsel kriptografide mesaj nasıl çözülür?",
      secenekler: ["Saydam paylar üst üste konup gözle bakılır", "Paylar bilgisayarda AES ile çözülür", "Paylar XOR'lanıp hash'lenir", "Her pay ayrı ayrı büyütülür"],
      aciklama: "1994'te Moni Naor ile Adi Shamir'in önerdiği yöntemin güzelliği budur: çözmek için hiçbir hesap gerekmez. Asetat kâğıdına basılmış iki pay üst üste konunca insan gözü mesajı okur.",
    },
    {
      ad: "alt-hucre",
      sayi: [4800],
      soru: "Her pikselin 2×2 alt hücreyle temsil edildiği bir şemada 40×30 piksellik bir mesajdan üretilen her pay kaç alt hücre içerir?",
      aciklama: "Pay $80 \\times 60$ hücredir: $80 \\times 60 =$ **4800**. Görsel kriptografinin bedeli budur: paylar mesajdan dört kat büyüktür.",
    },
    {
      ad: "gri",
      soru: "Üst üste konunca siyah pikseller 4 hücrenin 4'ünü, beyaz pikseller 2'sini siyah gösteriyor. Arka plan neden beyaz değil de gri görünür?",
      secenekler: ["Beyaz piksellerde de hücrelerin yarısı siyah kalır", "Paylar hiçbir zaman tam olarak hizalanamaz", "Asetat kâğıdı ışığın hepsini geçirmez", "Mesaj paylara sıkıştırılarak yazılır"],
      aciklama: "Beyaz pikselde iki pay aynı deseni taşır; üst üste gelince yine 2 hücre siyah, 2 hücre saydamdır. Karşıtlık siyahla gri arasındadır, siyahla beyaz arasında değil.",
    },
    {
      ad: "otp",
      zorluk: 2,
      soru: "Görsel kriptografide tek payın bilgi sızdırmaması, hangi şifrenin özelliğine benzer?",
      secenekler: ["One-time pad", "Sezar şifresi", "ECB modunda AES", "Vigenère şifresi"],
      aciklama: "Birinci pay tek kullanımlık rastgele bir anahtardır; ikinci pay mesajın bu anahtarla \"XOR'u\" gibidir. One-time pad gibi her pay yalnız bir kez kullanılmalıdır: aynı birinci payla iki mesaj paylaşılırsa ikinci paylar karşılaştırılıp farkları görülür.",
    },
  ]),
  ...sorular(U, "u16-esik", [
    {
      ad: "k-n",
      soru: "3'ten 5 (k = 3, n = 5) eşikli bir sır paylaşımı için hangisi doğrudur?",
      secenekler: ["Herhangi üç pay açar, iki pay hiçbir şey söylemez", "Beş payın hepsinin bir araya gelmesi gerekir", "Tek bir pay sırrın üçte birini açığa çıkarır", "Yalnız ilk üç numaralı pay sırrı açabilir"],
      aciklama: "Eşik şemalarında pay sayısı $k$'ye ulaşana kadar sır hakkında hiçbir bilgi edinilmez; $k$'ye ulaşınca sır tamamen açılır. Hangi payların geldiği önemli değildir.",
    },
    {
      ad: "shamir",
      zorluk: 2,
      sayi: [21],
      soru: "Shamir sır paylaşımında sır $f(0)$'dır ve paylar $f(1), f(2), \\dots$ değerleridir. $f(x) = 7 + 3x + 2x^2$ ise 2 numaralı payın değeri nedir?",
      aciklama: "$f(2) = 7 + 3 \\cdot 2 + 2 \\cdot 4 =$ **21**.\n---\nİkinci dereceden bir polinomu üç nokta belirler; bu yüzden bu şema 3'ten n eşiklidir. Gerçek uygulamada hesaplar büyük bir asalın modunda yapılır ve sır $7$ gibi küçük bir sayı değil, bir anahtardır.",
    },
    {
      ad: "kok-anahtar",
      dy: true,
      soru: "Bir sertifika otoritesinin kök anahtarını, üç yöneticiden en az ikisi olmadan kullanılamayacak biçimde bölmek eşik sır paylaşımının tipik bir kullanımıdır.",
      aciklama: "Doğru. Böylece tek bir kişi ne anahtarı kötüye kullanabilir ne de kaybederek erişimi bitirebilir. Kök anahtar törenleri (12. ünite) ve kripto para cüzdanları bu yöntemi kullanır.",
    },
  ]),
  ...sorular(U, "u16-stegano", [
    {
      ad: "fark",
      soru: "Steganografi ile şifreleme arasındaki temel fark hangisidir?",
      secenekler: ["Steganografi mesajın varlığını, şifreleme içeriğini gizler", "Steganografi daha güçlü bir şifreleme türüdür", "Şifreleme yalnız görsellerde kullanılabilir", "İkisi aynı şeyin farklı adlarıdır"],
      aciklama: "Şifreli bir mesajı gören herkes bir sır olduğunu anlar. Steganografide ise görsel sıradan bir tatil fotoğrafı gibi görünür; kimse içinde bir şey aramaz.",
    },
    {
      ad: "birlikte",
      dy: true,
      soru: "Mesaj gizlenmeden önce şifrelenirse, steganaliz mesajın varlığını ortaya çıkarsa bile içeriğini okuyamaz.",
      aciklama: "Doğru. İkisi birbirini tamamlar: şifreleme içeriği, steganografi varlığı korur. Ayrıca şifreli bayt rastgele göründüğü için gizlenen bitler düz metninkinden daha az desen bırakır.",
    },
    {
      ad: "kerckhoffs",
      zorluk: 2,
      soru: "Güvenliği yalnız \"kimse en düşük bitlere bakmaz\" varsayımına dayanan bir gizleme yöntemi hangi ilkeyi çiğner?",
      secenekler: ["Kerckhoffs ilkesini", "İleri gizliliği", "Doğum günü sınırını", "En az ayrıcalık ilkesini"],
      aciklama: "Kerckhoffs ilkesine göre sistem, yöntemi düşman bilse bile güvenli kalmalıdır (1. ünite). LSB yöntemini bilen biri bitleri doğrudan okur; gizlilik ancak mesaj bir anahtarla şifrelenirse ya da bitlerin yeri anahtara bağlıysa kalır.",
    },
  ]),
  ...sorular(U, "u16-lsb", [
    {
      ad: "kapasite",
      sayi: [7500],
      soru: "200×100 piksellik, 24 bit renkli bir görselde her renk kanalının en düşük bitine veri yazılırsa en çok kaç bayt gizlenebilir? (Uzunluk alanını yok say.)",
      aciklama: "$200 \\times 100 = 20\\,000$ piksel, her pikselde 3 kanal: $60\\,000$ bit.\n---\n$60\\,000 / 8 =$ **7500 bayt**. Bu, birkaç sayfalık bir metne yeter.",
    },
    {
      ad: "degisim",
      soru: "LSB yöntemiyle bir renk kanalına veri yazılınca o kanalın değeri en fazla ne kadar değişir?",
      secenekler: ["1", "8", "128", "255"],
      aciklama: "Yalnız en düşük bit değişir: değer ya aynı kalır ya 1 artar ya da 1 azalır. 0-255 aralığında 1 birimlik fark gözle görülmez.",
    },
    {
      ad: "bit-yaz",
      sayi: [183],
      soru: "Bir pikselin kırmızı kanalı ikilik tabanda 10110110 (182). En düşük bite 1 yazılınca kanalın yeni değeri kaçtır?",
      aciklama: "$10110110 \\to 10110111$, yani $182 + 1 =$ **183**. En düşük bit zaten 1 olsaydı değer değişmezdi; ortalamada bitlerin yarısı hiç değişmez.",
    },
    {
      ad: "sosyal-medya",
      etiket: "hata-bul",
      soru: "Biri mesajını bir PNG görselin LSB'lerine gizleyip görseli sosyal medyaya yüklüyor; alıcı indirince mesaj okunamıyor. En olası sebep nedir?",
      secenekler: ["Platform görseli yeniden sıkıştırıp düşük bitleri değiştirdi", "LSB yöntemi yalnız siyah beyaz görselde işe yarar", "Mesaj gizlemek için fazla kısa kaldı", "Alıcının ekranı renkleri farklı gösterdi"],
      aciklama: "Sosyal medya platformları görselleri küçültür ve JPEG gibi kayıplı biçimlerde yeniden kaydeder; en düşük bitler bu işlemde ilk kaybolan bilgidir. Kalıcı gizleme için sıkıştırmaya dayanıklı (ör. frekans katsayılarına yazan) yöntemler gerekir.",
    },
  ]),
  ...sorular(U, "u16-steganaliz", [
    {
      ad: "duzlem",
      soru: "Bir görselin en düşük bit düzlemine bakan biri hangi gözlemde gizli veriden şüphelenir?",
      secenekler: ["Düz renkli alanlarda düzlemin gürültüye dönmesine", "Düzlemin görselin hatlarını göstermesine", "Görselin piksel boyutunun büyük olmasına", "Görselin PNG biçiminde kaydedilmesine"],
      aciklama: "Doğal bir görselde düz bir gökyüzü ya da duvarın en düşük bitleri de düzenlidir. Mesaj yazılan bölgede bu düzen rastgele bir gürültüye döner ve bit düzlemi görüntüsünde göze çarpar.",
    },
    {
      ad: "ki-kare",
      zorluk: 2,
      dy: true,
      soru: "LSB gizlemesi, değeri 2k ve 2k+1 olan piksel sayılarını birbirine yaklaştırır; ki-kare gibi istatistiksel testler bunu yakalayabilir.",
      aciklama: "Doğru. En düşük bite rastgele bit yazmak 2k ile 2k+1 arasında gidip gelmek demektir; mesaj uzunsa bu çiftlerin sayıları eşitlenir. 1999'da yayımlanan ki-kare saldırısı bu imzaya bakar.",
    },
    {
      ad: "rastgele-yer",
      zorluk: 2,
      soru: "Mesaj bitleri görselin başından sırayla değil, anahtardan türeyen rastgele piksellere yazılırsa ne kazanılır?",
      secenekler: ["Değişiklik tek bir bölgede yoğunlaşmaz", "Kapasite iki katına çıkar", "Mesaj kendiliğinden şifrelenir", "JPEG sıkıştırmasına dayanıklı olur"],
      aciklama: "Sıralı yazım, değişikliği görselin üst kısmında toplar ve bit düzleminde keskin bir sınır bırakır. Dağıtılmış yazım bu sınırı yok eder; yine de toplam istatistik değişir ve kısa mesajlar daha zor yakalanır.",
    },
  ]),
  ...sorular(U, "u16-goruntu", [
    {
      ad: "histogram",
      soru: "Bir görselin piksellerini anahtarlı bir permütasyonla karıştırmak neyi değiştirmez?",
      secenekler: ["Renklerin histogramını", "Piksellerin yerini", "Görselin görünümünü", "Dosyadaki bayt sırasını"],
      aciklama: "Karıştırma pikselleri yer değiştirir ama değerlerine dokunmaz. Hangi rengin ne kadar bulunduğu, görselin karanlık ya da aydınlık olduğu karıştırılmış haline bakınca da okunur.",
    },
    {
      ad: "secilmis",
      zorluk: 2,
      etiket: "hata-bul",
      soru: "Bir görsel şifreleme yöntemi yalnız pikselleri anahtarlı bir permütasyonla karıştırıyor. Saldırgan kendi seçtiği bir görseli aynı anahtarla şifretebilirse ne olur?",
      secenekler: ["Permütasyonu bulur ve bütün görselleri açar", "Yalnız kendi görselini açabilir", "Anahtar hakkında hiçbir şey öğrenemez", "Anahtar kendiliğinden değişir"],
      aciklama: "Her pikseline kendi sıra numarasını yazdığı bir görseli şifretirse, şifreli görseldeki her piksel nereden geldiğini söyler: permütasyon tamamen ortaya çıkar. Seçilmiş açık metin saldırısına dayanmak modern şifrelerin en temel şartıdır.",
    },
    {
      ad: "kaotik",
      dy: false,
      soru: "Kaotik haritalara dayanan görüntü şifreleme yöntemleri AES'ten daha çok incelendiği için gerçek ürünlerde tercih edilir.",
      aciklama: "Yanlış. Akademik yayınlarda çok sayıda kaotik görüntü şifreleme önerisi var, ama bunların büyük kısmı sonradan kırıldı ve hiçbiri AES kadar incelenmedi. Gerçek ürünler görseli sıradan bir dosya gibi AES-GCM ya da ChaCha20-Poly1305 ile şifreler.",
    },
    {
      ad: "dogru-yol",
      soru: "Bir uygulama fotoğrafları şifreli saklamak istiyor. En doğru yaklaşım hangisi?",
      secenekler: ["Dosya baytlarını AES-GCM gibi bir AEAD ile şifrelemek", "Pikselleri parola tohumlu bir permütasyonla karıştırmak", "Fotoğrafı ECB modunda AES ile şifrelemek", "Fotoğrafı başka bir görselin içine gizlemek"],
      aciklama: "Görselin \"görsel\" olması şifreleme için önemsizdir: baytları standart bir AEAD ile şifrelemek hem gizliliği hem bütünlüğü sağlar. ECB deseni sızdırır (6. ünite), karıştırma histogramı bırakır, gizleme anahtar değildir.",
    },
  ]),
];
