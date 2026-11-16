// 6. ünite (Simetrik dünya): blok modları (ECB, CBC, CTR), dolgu (PKCS#7), kimlik
// doğrulamalı şifreleme (AEAD, GCM, ek veri), akış şifreleri ve ChaCha20, mod ve algoritma
// seçimi. Hesap sorularının cevapları sorular.test.ts'te oyuncak modlarla sınanır.
import { sorular, type Soru } from "./yardimci.ts";

const U = 6;

export const unite6: Soru[] = [
  ...sorular(U, "u6-ecb", [
    {
      ad: "ecb-tanim",
      soru: "ECB (Electronic Codebook) modunda bloklar nasıl şifrelenir?",
      secenekler: [
        "Her blok aynı anahtarla, ötekilerden bağımsız olarak ayrı ayrı şifrelenir",
        "Her blok şifrelenmeden önce bir önceki şifreli blokla XOR'lanır",
        "Bir sayaç şifrelenir ve çıkan anahtar akışı açık metinle XOR'lanır",
        "Her blok farklı ve rastgele seçilmiş bir anahtarla şifrelenir",
      ],
      aciklama: "ECB en saf haldir: $C_i = E_K(P_i)$. Bloklar birbirinden habersizdir. Bu yüzden aynı açık blok her yerde aynı şifreli bloğu verir.",
    },
    {
      ad: "penguen",
      soru: "Geniş tek renkli alanları olan bir resim ECB ile şifrelenince ne görülür?",
      secenekler: [
        "Resmin ana hatları seçilebilir; aynı renkli bloklar aynı şifreli bloğa dönüşür",
        "Tamamen düzgün gri bir yüzey; şifreleme bütün renkleri ortalamaya çeker",
        "Rastgele görünen gürültü; resim hakkında hiçbir şey anlaşılmaz",
        "Resmin renkleri ters dönmüş hali; şekiller aynen kalır",
      ],
      aciklama: "Tek renkli bir alandaki her 16 baytlık blok aynıdır, ECB ile şifrelenince de aynı kalır. Renkler bozulur ama **desen** kalır: penguenin hatları gürültü içinde seçilir. CBC ve CTR'de aynı resim gürültüye döner.",
    },
    {
      ad: "ecb-tekrar",
      dy: true,
      soru: "ECB ile şifrelenmiş iki mesajın 3. blokları aynıysa, açık metinlerin 3. blokları da aynıdır.",
      aciklama: "Doğru. Aynı anahtarla blok şifre bire bir eşlemedir: aynı şifreli blok yalnızca aynı açık bloktan çıkar. Saldırgan anahtarı bilmeden hangi blokların tekrar ettiğini görür; örneğin aynı maaş bilgisini taşıyan kayıtları eşleştirir.",
    },
    {
      ad: "ecb-kod",
      etiket: "hata-bul",
      zorluk: 2,
      soru: "Bir geliştirici kullanıcı kayıtlarını şifrelerken şu ayarı seçiyor: ~AES-256, ECB, sabit anahtar~. \"256 bit anahtar kullandığım için güvenli\" diyor. Asıl sorun nedir?",
      secenekler: [
        "Mod: ECB aynı alanları aynı şifreli bloğa çevirip veri desenlerini sızdırır",
        "256 bitlik anahtar AES için fazla uzundur ve tur sayısını bozar",
        "AES-256 yalnız devlet kurumlarına izin verilen bir algoritmadır",
        "Anahtar 256 bit olunca blok boyu da 256 bit olur ve kayıtlar bölünür",
      ],
      aciklama: "Anahtar uzunluğu kaba kuvvete karşı korur; ama ECB'nin zayıflığı kaba kuvvetle ilgili değildir. Aynı içerikli bloklar aynı görünür. Doğrusu AES-GCM gibi bir AEAD moduyla her kayıtta yeni nonce kullanmaktır.",
    },
  ]),
  ...sorular(U, "u6-cbc", [
    {
      ad: "cbc-tanim",
      soru: "CBC modunda şifreleme formülü hangisidir?",
      secenekler: ["$C_i = E_K(P_i ⊕ C_{i-1})$, $C_0 = IV$", "$C_i = E_K(P_i)$", "$C_i = P_i \\oplus E_K(N_i)$", "$C_i = E_K(P_i) \\oplus P_{i-1}$"],
      aciklama: "CBC her açık bloğu şifrelemeden önce bir önceki **şifreli** blokla XOR'lar; ilk blok için IV kullanılır. Böylece aynı açık bloklar farklı yerlerde farklı şifreli bloklar verir.",
    },
    {
      ad: "iv-gizli",
      dy: false,
      soru: "CBC'de IV anahtar gibi gizli tutulmalıdır; şifreli metinle birlikte gönderilirse güvenlik kaybolur.",
      aciklama: "Yanlış. IV gizli değildir ve genellikle şifreli metnin başına eklenerek gönderilir; alıcının çözebilmesi için gereklidir. CBC'de IV'nin **öngörülemez** (rastgele) olması gerekir. Tahmin edilebilir IV, TLS 1.0'a karşı BEAST saldırısına yol açtı.",
    },
    {
      ad: "sabit-iv",
      etiket: "hata-bul",
      soru: "Bir uygulama CBC modunda her mesaj için IV olarak 16 sıfır bayt kullanıyor. Bu neyi sızdırır?",
      secenekler: [
        "Aynı başlangıca sahip mesajlar aynı ilk şifreli bloğu verir; ortak önekler görünür",
        "Anahtarın ilk 16 baytı doğrudan şifreli metnin başında görünür",
        "Hiçbir şey; IV'nin değeri yalnız hızı etkiler",
        "Mesajlar çözülemez hale gelir çünkü sıfır IV geçersizdir",
      ],
      aciklama: "Sabit IV'yle aynı anahtar ve aynı ilk blok her zaman aynı $C_1$'i verir. Saldırgan \"bu iki mesaj aynı şekilde başlıyor\" bilgisini alır; ECB'nin sorunu mesajlar arası düzeyde geri gelir.",
    },
    {
      ad: "cbc-hata",
      zorluk: 2,
      soru: "CBC ile şifrelenmiş bir mesajda saldırgan $C_3$ bloğunun tek bir bitini çevirir. Çözülen açık metinde ne olur?",
      secenekler: [
        "$P_3$ tamamen bozulur, $P_4$'te aynı konumdaki tek bit çevrilir",
        "Yalnız $P_3$'te aynı konumdaki tek bit çevrilir",
        "$P_3$'ten sonraki bütün bloklar bozulur",
        "Çözme hata verir ve hiçbir blok elde edilemez",
      ],
      aciklama: "$P_3 = D_K(C_3) \\oplus C_2$: değişen $C_3$ şifre çözmeden geçer, çığ etkisiyle $P_3$ rastgeleleşir. $P_4 = D_K(C_4) \\oplus C_3$: burada $C_3$ yalnız XOR'lanır, yani $P_4$'te aynı bit çevrilir. Saldırgan bir bloğu feda ederek sonrakinde istediği biti değiştirebilir; CBC tek başına bütünlük sağlamaz.",
    },
  ]),
  ...sorular(U, "u6-dolgu", [
    {
      ad: "dolgu-21",
      sayi: [11],
      soru: "21 baytlık bir mesaj AES-CBC ile PKCS#7 dolgusuyla şifrelenecek. Kaç dolgu baytı eklenir?",
      aciklama: "Blok 16 bayt. 21 baytı tamamlayan en küçük kat 32'dir: $32 - 21 =$ **11** bayt eklenir, her birinin değeri 0x0B'dir.",
    },
    {
      ad: "dolgu-tam",
      zorluk: 2,
      sayi: [48],
      soru: "32 baytlık (tam iki blok) bir mesaj PKCS#7 dolgusuyla şifrelenince şifreli metin kaç bayt olur?",
      aciklama: "PKCS#7 dolgusu **her zaman** eklenir. Mesaj tam bloksa 16 tane 0x10 baytından oluşan koca bir dolgu bloğu eklenir: $32 + 16 =$ **48** bayt. Yoksa alıcı, 0x01 ile biten bir mesajın son baytını dolgu sanabilirdi.",
    },
    {
      ad: "blok-sayisi",
      sayi: [63],
      soru: "1000 baytlık bir dosya AES-CBC ve PKCS#7 dolgusuyla şifrelenince kaç blok şifreli metin çıkar (IV hariç)?",
      aciklama: "$1000 = 62 \\times 16 + 8$. Son blokta 8 bayt var; 8 dolgu baytı (0x08) eklenir ve 1008 bayt olur: $1008 / 16 =$ **63** blok.",
    },
    {
      ad: "dolgu-deger",
      cevap: ["05 05 05 05 05"],
      soru: "11 baytlık bir mesaja PKCS#7 dolgusu eklenince sona hangi baytlar gelir? Hex olarak boşlukla ayırarak yaz.",
      aciklama: "$16 - 11 = 5$ bayt eksik. PKCS#7'de her dolgu baytının değeri eklenen bayt sayısıdır: **05 05 05 05 05**.",
    },
    {
      ad: "dolgu-oracle",
      zorluk: 2,
      soru: "Bir sunucu çözdüğü mesajın dolgusu hatalıysa \"dolgu hatalı\", doğruysa ama içerik geçersizse \"geçersiz istek\" yanıtı veriyor. Bu neden tehlikelidir?",
      secenekler: [
        "Saldırgan bu farkı kullanarak anahtarı bilmeden şifreli metni bayt bayt çözebilir",
        "Hata mesajı kullanıcıyı korkutur ve uygulamadan vazgeçirir",
        "Sunucu her hatalı mesajda yeni anahtar üretmek zorunda kalır",
        "Hiçbir tehlikesi yoktur; hata mesajları yalnız günlüğe yazılır",
      ],
      aciklama: "Buna **padding oracle** denir (Vaudenay, 2002). Saldırgan $C_{i-1}$'in baytlarını değiştirip sunucuya yollar; \"dolgu doğru\" yanıtı, $P_i$'nin bir baytı hakkında kesin bilgi verir. 17. ünitede oyuncak bir kâhinle bunu kendin yapacaksın. Çözüm: kimlik doğrulamalı şifreleme ve tek tip hata.",
    },
  ]),
  ...sorular(U, "u6-ctr", [
    {
      ad: "ctr-tanim",
      soru: "CTR modunda şifreleme nasıl yapılır?",
      secenekler: [
        "Nonce ve sayaçtan oluşan blok şifrelenir, çıkan anahtar akışı açık metinle XOR'lanır",
        "Her açık blok bir önceki şifreli blokla XOR'lanıp şifrelenir",
        "Her açık blok ayrı ayrı şifrelenir ve sırası sayaçla karıştırılır",
        "Açık metin şifrelenir, sonra sayaç değeri şifreli metnin sonuna eklenir",
      ],
      aciklama: "CTR blok şifreyi bir **akış şifresine** çevirir: $C_i = P_i \\oplus E_K(\\text{nonce} \\| i)$. Açık metin blok şifreden hiç geçmez. Bloklar birbirinden bağımsız olduğu için paralel şifrelenebilir ve rastgele erişilebilir.",
    },
    {
      ad: "ctr-dolgu",
      dy: true,
      soru: "CTR modunda dolgu gerekmez; şifreli metin açık metinle aynı uzunluktadır.",
      aciklama: "Doğru. Anahtar akışının yalnız gereken kadarı kullanılır; son bloktaki fazla baytlar atılır. Bu yüzden padding oracle saldırısı CTR'ye uygulanmaz.",
    },
    {
      ad: "ctr-nonce",
      zorluk: 2,
      soru: "CTR'de aynı anahtarla aynı nonce iki farklı mesajda kullanılırsa ne olur?",
      secenekler: [
        "Aynı anahtar akışı iki kez kullanılır ve açık metinlerin XOR'u sızar",
        "İkinci mesaj çözülemez hale gelir ama birinci mesaj güvende kalır",
        "Yalnızca şifreleme yavaşlar; güvenlik etkilenmez",
        "Anahtar doğrudan şifreli metinden okunabilir hale gelir",
      ],
      aciklama: "Aynı anahtar ve nonce aynı $E_K(\\text{nonce} \\| i)$ dizisini üretir. $C_1 \\oplus C_2 = P_1 \\oplus P_2$: one-time pad'in tekrar kullanılmasıyla aynı. CTR'de nonce'un gizli olması gerekmez ama **asla tekrar etmemesi** gerekir.",
    },
    {
      ad: "bit-cevir",
      etiket: "ctf",
      zorluk: 3,
      cevap: ["52", "0x52"],
      soru: "AES-CTR ile şifrelenmiş bir ödeme mesajında tutarın ilk rakamının ~1~ (ASCII 0x31) olduğunu biliyorsun; o konumdaki şifreli bayt 0x5A. Anahtarı bilmeden bu rakamı ~9~ (ASCII 0x39) yapmak için şifreli baytı ne yapmalısın? Yeni baytı iki hex rakamıyla yaz.",
      aciklama: "CTR'de $C = P \\oplus S$ ($S$ anahtar akışı). $C' = C \\oplus P \\oplus P'$ yazarsan çözülünce $C' \\oplus S = P'$ olur.\n---\n$P \\oplus P' = $ 0x31 ⊕ 0x39 = 0x08.\n---\n$C' = $ 0x5A ⊕ 0x08 = **0x52**. Ödeme artık 9 ile başlıyor; CTR bunu fark etmez. Bu yüzden şifreleme tek başına bütünlük sağlamaz.",
    },
    {
      ad: "ctr-paralel",
      soru: "CTR'nin CBC'ye göre bir avantajı hangisidir?",
      secenekler: [
        "Bloklar paralel işlenir ve ortadaki bir bloğa doğrudan erişilir",
        "Nonce tekrar kullanılsa bile güvenli kalır",
        "Şifreli metinde yapılan değişiklikleri kendiliğinden fark eder",
        "Blok şifre yerine hash fonksiyonu kullandığı için daha güvenlidir",
      ],
      aciklama: "CBC'de şifreleme sıralıdır: her blok bir öncekini bekler. CTR'de $i$. bloğun anahtar akışı yalnız $i$'ye bağlıdır; bloklar paralel ve istenen sırada işlenir. Ama CTR değişiklikleri fark etmez ve nonce tekrarına hiç dayanıklı değildir.",
    },
  ]),
  ...sorular(U, "u6-aead", [
    {
      ad: "aead-tanim",
      soru: "AEAD (kimlik doğrulamalı şifreleme) neyi sağlar?",
      secenekler: [
        "Gizliliği ve bütünlüğü birlikte; değiştirilmiş şifreli metin çözülmeden reddedilir",
        "Yalnız gizliliği; bütünlük için ayrıca dijital imza gerekir",
        "Yalnız bütünlüğü; mesaj şifrelenmeden gönderilir",
        "Göndericinin kimliğini herkese karşı kanıtlayan inkâr edilemezliği",
      ],
      aciklama: "AEAD şifreli metne bir **doğrulama etiketi** (tag) ekler. Çözme sırasında etiket yeniden hesaplanır; tek bir bit bile değiştiyse çözme hiçbir açık metin vermeden başarısız olur. Simetrik anahtarı iki taraf paylaştığı için inkâr edilemezlik sağlamaz; onu imzalar sağlar (11. ünite).",
    },
    {
      ad: "gcm-yapi",
      zorluk: 2,
      soru: "AES-GCM hangi iki parçadan oluşur?",
      secenekler: [
        "Şifreleme için CTR modu, doğrulama etiketi için GF(2¹²⁸)'de çalışan GHASH",
        "Şifreleme için CBC modu, doğrulama etiketi için SHA-256",
        "Şifreleme için ECB modu, doğrulama etiketi için CRC-32",
        "Şifreleme için ChaCha20, doğrulama etiketi için Poly1305",
      ],
      aciklama: "GCM (Galois/Counter Mode) = CTR ile şifreleme + GHASH ile etiket. GHASH, şifreli bloklarla $H = E_K(0)$ arasında GF(2¹²⁸)'de bir polinom hesaplar. ChaCha20 + Poly1305 öteki yaygın AEAD'dir.",
    },
    {
      ad: "gcm-nonce",
      sayi: [96],
      soru: "AES-GCM'de önerilen nonce uzunluğu kaç bittir?",
      aciklama: "GCM için önerilen nonce **96 bit**tir (12 bayt); kalan 32 bit blok sayacıdır. Web Crypto'daki ~iv: rastgeleBayt(12)~ bu yüzden 12 bayttır.",
    },
    {
      ad: "aad",
      soru: "AEAD'deki \"ek veri\" (AAD) ne için kullanılır?",
      secenekler: [
        "Açık kalacak ama değiştirilmemesi gereken veriyi etiketle korumak için",
        "Anahtarı şifreli metnin içine gizlemek için",
        "Şifreli metni sıkıştırıp boyutunu küçültmek için",
        "Nonce'u gizli tutmak için şifreli metnin sonuna eklenen veri için",
      ],
      aciklama: "Bir ağ paketinin başlığı yönlendirme için açık kalmalıdır ama saldırgan onu değiştirememelidir. AAD şifrelenmez, ama etikete katılır; bir bit değişirse çözme reddedilir. Örneğin mesajlaşmada \"kimden, hangi sohbet, kaçıncı mesaj\" bilgisi AAD olabilir.",
    },
    {
      ad: "gcm-tekrar",
      zorluk: 3,
      soru: "AES-GCM'de aynı anahtar ve nonce ile iki mesaj şifrelenirse ne olur?",
      secenekler: [
        "Açık metinlerin XOR'u sızar ve saldırgan sahte etiket üretebilir",
        "Yalnız iki mesajın uzunluklarının aynı olduğu anlaşılır",
        "İkinci mesajın etiketi geçersiz olur ama başka bir şey sızmaz",
        "GCM nonce tekrarını kendiliğinden fark edip ikinci şifrelemeyi reddeder",
      ],
      aciklama: "GCM'nin şifreleme kısmı CTR'dir: nonce tekrarı açık metinlerin XOR'unu verir. Daha kötüsü, iki etiketten doğrulama anahtarı $H$ için bir denklem çıkar; $H$ bulununca saldırgan istediği mesaja geçerli etiket üretir. Nonce'u sayaçla ya da yeterince büyük rastgele değerle üretmek şarttır.",
    },
    {
      ad: "once-dogrula",
      etiket: "hata-bul",
      zorluk: 2,
      soru: "Bir uygulama AES-CBC ile şifreliyor, ayrıca HMAC hesaplıyor. Alıcı tarafta önce şifreyi çözüp dolguyu denetliyor, sonra HMAC'e bakıyor. Sorun nedir?",
      secenekler: [
        "Doğrulanmamış veriyi çözüp dolgu hatası verdiği için padding oracle saldırısına açık kalır",
        "HMAC ile CBC aynı anahtarı paylaştığı için çakışır ve çözme başarısız olur",
        "HMAC şifreli metni değil açık metni doğrulamalıydı; sıralama önemsizdir",
        "CBC kimlik doğrulamalı bir mod olduğu için HMAC gereksizdir",
      ],
      aciklama: "Doğru sıra **şifrele, sonra MAC** (encrypt-then-MAC): alıcı önce etiketi sabit zamanda doğrular, tutmazsa hiçbir şey çözmeden reddeder. Önce çözmek, dolgu kâhinine kapı açar. AEAD modları bu sıralamayı kendileri yapar; elle birleştirmek yerine AES-GCM ya da ChaCha20-Poly1305 kullan.",
    },
  ]),
  ...sorular(U, "u6-akis", [
    {
      ad: "akis-tanim",
      soru: "Akış şifresi nasıl çalışır?",
      secenekler: [
        "Anahtar ve nonce'tan uzun bir sözde rastgele anahtar akışı üretir ve açık metinle XOR'lar",
        "Mesajı 16 baytlık bloklara bölüp her bloğu ayrı bir anahtarla şifreler",
        "Mesajın her harfini alfabede anahtardaki sayı kadar kaydırır",
        "Mesajı açık anahtarla şifreler, özel anahtarla çözer",
      ],
      aciklama: "Akış şifresi one-time pad'i taklit eder: gerçek rastgele anahtar yerine kısa anahtardan **anahtar akışı** üretilir. Bu yüzden one-time pad'in kuralı burada da geçerlidir: aynı anahtar ve nonce ile anahtar akışı asla tekrar kullanılmaz.",
    },
    {
      ad: "chacha-anahtar",
      sayi: [256],
      soru: "ChaCha20'nin anahtarı kaç bittir?",
      aciklama: "ChaCha20 **256 bitlik** anahtar, 96 bitlik nonce ve 32 bitlik blok sayacı kullanır (RFC 8439). Her blok 64 baytlık anahtar akışı verir.",
    },
    {
      ad: "chacha-tur",
      sayi: [20],
      soru: "ChaCha20 adındaki sayı tur sayısıdır. ChaCha20 kaç tur uygular?",
      aciklama: "ChaCha20 **20 tur** uygular: 10 kez art arda bir sütun turu ve bir köşegen turu. Her tur 4 çeyrek turdan oluşur. ChaCha8 ve ChaCha12 daha az turlu, daha hızlı varyantlardır.",
    },
    {
      ad: "arx",
      soru: "ChaCha20'nin çeyrek turunda hangi üç işlem kullanılır?",
      secenekler: ["32 bit toplama, döndürme ve XOR", "S-kutusu, satır kaydırma ve sütun karıştırma", "Modüler üs alma, çarpma ve bölme", "Hash, dolgu ve sıkıştırma"],
      aciklama: "**ARX**: Add (mod $2^{32}$ toplama), Rotate (bit döndürme) ve XOR. Toplama doğrusal olmayanlığı sağlar. Bu üç işlem her işlemcide sabit sürede çalışır; tablo araması olmadığı için önbellek zamanlaması gibi yan kanallara daha dayanıklıdır.",
    },
    {
      ad: "dondurme",
      zorluk: 2,
      soru: "ChaCha20 çeyrek turunda kullanılan döndürme miktarları hangileridir?",
      secenekler: ["16, 12, 8 ve 7 bit", "1, 2, 4 ve 8 bit", "7, 9, 13 ve 18 bit", "2, 13, 22 ve 25 bit"],
      aciklama: "Sırasıyla 16, 12, 8 ve 7 bit. Salsa20 (ChaCha'nın öncülü) 7, 9, 13 ve 18 kullanır; 2, 13, 22 ve 25 ise SHA-256'nın döndürmeleridir (7. ünite). Çeyrek tur gezgininde her adımı izleyebilirsin.",
    },
    {
      ad: "poly",
      soru: "ChaCha20-Poly1305'te Poly1305'in görevi nedir?",
      secenekler: [
        "Şifreli metin ve ek veri için doğrulama etiketi üretmek",
        "ChaCha20'nin anahtarını paroladan türetmek",
        "Nonce'u rastgele üretmek",
        "Şifreli metni sıkıştırmak",
      ],
      aciklama: "Poly1305 tek kullanımlık bir MAC'tir: her mesajda ChaCha20'nin ilk anahtar akışı bloğundan yeni bir Poly1305 anahtarı türetilir. ChaCha20 gizliliği, Poly1305 bütünlüğü sağlar; birlikte bir AEAD oluştururlar.",
    },
  ]),
  ...sorular(U, "u6-secim", [
    {
      ad: "aes-ni",
      soru: "Bir uygulama donanımsal AES desteği (AES-NI ya da ARMv8 şifreleme uzantıları) olmayan eski telefonlarda da hızlı çalışmalı. Hangi AEAD daha uygundur?",
      secenekler: ["ChaCha20-Poly1305", "AES-GCM", "AES-ECB", "AES-CBC, MAC olmadan"],
      aciklama: "Donanım desteği olmadan AES yazılımda yavaştır ve tablo tabanlı uygulamalar önbellek zamanlamasına açıktır. ChaCha20 yalnız toplama, döndürme ve XOR kullandığı için yazılımda hızlı ve sabit zamanlıdır. Google bu yüzden 2014'te Android'de TLS için ChaCha20-Poly1305'i öne çıkardı. Donanım desteği olan işlemcilerde AES-GCM daha hızlıdır.",
    },
    {
      ad: "tls13",
      dy: true,
      soru: "TLS 1.3 yalnızca kimlik doğrulamalı şifreleme (AEAD) kullanan şifre takımlarına izin verir; CBC tabanlı takımlar çıkarılmıştır.",
      aciklama: "Doğru. TLS 1.3'te kalan takımlar AES-GCM, AES-CCM ve ChaCha20-Poly1305'tir. CBC ile MAC'i elle birleştiren eski takımlar BEAST, Lucky13 ve POODLE gibi saldırılara yol açmıştı.",
    },
    {
      ad: "disk",
      zorluk: 2,
      soru: "Disk şifrelemede (BitLocker, FileVault, LUKS) neden genellikle GCM yerine XTS modu kullanılır?",
      secenekler: [
        "Şifreli sektör aynı boyutta kalmalı; etiket ve nonce için yer yoktur",
        "XTS, GCM'den daha güçlü bütünlük koruması sağlar",
        "GCM yalnız ağ trafiğinde kullanılabilen, lisanslı bir moddur",
        "XTS anahtar gerektirmediği için kurtarma kolaylaşır",
      ],
      aciklama: "Bir 4096 baytlık sektör şifrelenince yine 4096 bayt olmalıdır; etiket ve nonce saklayacak yer yoktur. XTS, sektör numarasını \"ince ayar\" (tweak) olarak kullanır: aynı veri farklı sektörlerde farklı şifrelenir. Bedeli: XTS değişikliği fark etmez, yalnız gizlilik sağlar.",
    },
    {
      ad: "kendi-modun",
      etiket: "hata-bul",
      soru: "Bir ekip \"AES-GCM karmaşık, AES-CTR ile şifreleyip sonuna mesajın SHA-256'sını ekleyelim\" diyor. Sorun nedir?",
      secenekler: [
        "Hash anahtarsızdır; saldırgan değiştirdiği metnin hash'ini kendisi hesaplar",
        "SHA-256 çıktısı 32 bayt olduğu için mesaj boyutu çok büyür",
        "CTR ile SHA-256 aynı anda kullanılamaz",
        "Hiçbir sorun yoktur; bu yöntem GCM ile eşdeğerdir",
      ],
      aciklama: "Bütünlük için **anahtarlı** bir yapı gerekir (MAC, 8. ünite). Saldırgan CTR'de bit çevirerek açık metni öngörülebilir biçimde değiştirebilir. Hash açık metnin hash'iyse, değişen açık metni bildiği için hash'i de güncelleyebilir. Hazır bir AEAD kullanmak hem daha kısa hem güvenlidir.",
    },
    {
      ad: "wifi",
      soru: "Ev Wi-Fi'ında WPA2 ya da WPA3 kullanıldığında havadaki trafik hangi yapıyla korunur?",
      secenekler: [
        "AES tabanlı kimlik doğrulamalı şifreleme",
        "Sezar şifresinin 256 farklı kaydırmayla uygulanması",
        "Her paketin SHA-256 hash'i, şifreleme olmadan",
        "One-time pad; anahtar yönlendiricinin etiketinde yazar",
      ],
      aciklama: "WPA2 AES-CCMP kullanır (CTR + CBC-MAC); WPA3 buna ek olarak GCMP-256'yı tanımlar. Wi-Fi parolası doğrudan anahtar değildir; el sıkışmada her oturum için ayrı anahtarlar türetilir (9. ve 12. ünitelerdeki fikirler).",
    },
  ]),
];
