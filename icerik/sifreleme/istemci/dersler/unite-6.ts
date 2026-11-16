import { md, type Ders } from "../../../../src/dersler/tipler";

export const UNITE_6: Ders = {
  hafta: 6,
  baslik: "Blok Modları, AEAD ve Akış Şifreleri",
  ozet: "AES tek bir 16 baytlık bloğu şifreler; gerçek mesajlar daha uzundur. Blokları birbirine bağlamanın yollarını (ECB, CBC, CTR), dolguyu, \"şifreledim ama doğrulamadım\" hatasını ve bugünün standart çözümü olan kimlik doğrulamalı şifrelemeyi (AES-GCM, ChaCha20-Poly1305) gör.",
  bolumler: [
    {
      baslik: "ECB: aynı blok, aynı şifre",
      metin: md(`
AES yalnız 16 baytlık bir bloğu şifreler. Daha uzun bir mesaj için akla gelen ilk yol onu 16 baytlık parçalara bölüp her parçayı ayrı ayrı şifrelemektir: $C_i = E_K(P_i)$. Bu yolun adı **ECB**'dir (Electronic Codebook, elektronik kod kitabı). Adı yerindedir: aynı anahtarla her açık blok hep aynı şifreli bloğa gider, sanki dev bir kod kitabından bakılıyormuş gibi.

Bunun sonucunu tahmin etmek için aşağıdaki maskotu kullan. Önce tahminini seç, sonra ECB, CBC ve CTR ile şifrelenmiş hallerini gör. İstersen kendi görselini de yükleyebilirsin; görsel yalnız tarayıcında işlenir.

[[G-S6-01]]

Maskotun düz renkli alanlarında her blok aynıdır, ECB ile şifrelenince de aynı kalır. Renkler bozulur ama **şekil sızar**. Aynı şey metinde de olur: aynı içerikli kayıtlar (aynı maaş, aynı tanı, aynı parola) şifreli halde de birbirinin aynısıdır. Bu yüzden ECB **hiçbir zaman** birden fazla bloğu olan veri için kullanılmaz. Anahtarın 128 ya da 256 bit olması bunu düzeltmez; sorun kaba kuvvet değil, desendir.

> **Gerçek dünyada:** 2013'te Adobe'den sızan 150 milyon kullanıcılık veritabanında parolalar 3DES-ECB ile "şifrelenmişti". Anahtar hiç bulunmadı, ama aynı parolalar aynı şifreli bloğu verdiği için en yaygın parolalar, kullanıcıların yanlarına yazdığı ipuçlarıyla birlikte kolayca tahmin edildi.
`),
      dene: ["sf-u6-ecb-tanim", "sf-u6-penguen", "sf-u6-ecb-tekrar"],
      lab: "ecb",
    },
    {
      baslik: "CBC ve başlangıç vektörü",
      metin: md(`
Deseni kırmanın yolu her bloğun şifresini **konumuna** bağlamaktır. **CBC** (Cipher Block Chaining, şifreli blok zincirleme) her açık bloğu, şifrelemeden önce bir önceki **şifreli** blokla XOR'lar:

$$C_i = E_K(P_i \\oplus C_{i-1}), \\qquad C_0 = IV$$

İlk blok için bir **başlangıç vektörü** (IV) kullanılır. IV gizli değildir; şifreli metnin başına eklenip gönderilir. Ama her mesajda **yeni ve öngörülemez** (rastgele) olmalıdır. Sabit bir IV ile aynı şekilde başlayan iki mesaj aynı ilk şifreli bloğu verir; tahmin edilebilir IV ise TLS 1.0'a karşı BEAST saldırısına yol açtı.

Çözme $P_i = D_K(C_i) \\oplus C_{i-1}$'dir. Bu formülün bir yan etkisi var: $C_i$'de tek bir bit bozulursa $P_i$ çığ etkisiyle tamamen bozulur, ama $P_{i+1}$'de **yalnız aynı konumdaki bit** çevrilir. Rastgele bir iletim hatası için bu zararsızdır. Ama kasıtlı bir saldırganın elinde bir silahtır: bir bloğu feda edip sonraki blokta istediği biti değiştirebilir. CBC tek başına **bütünlük sağlamaz**.

> **Matematiğe in:** CBC'de şifreleme sıralıdır: $C_i$ için $C_{i-1}$ beklenir, paralel yapılamaz. Çözme ise paraleldir, çünkü bütün $C_{i-1}$ değerleri zaten eldedir. CBC'nin güvenliği IV'nin saldırganca tahmin edilememesine dayanır (IND-CPA güvenliği); sayaç gibi öngörülebilir bir IV bu kanıtı bozar.
`),
      dene: ["sf-u6-cbc-tanim", "sf-u6-iv-gizli", "sf-u6-cbc-hata"],
    },
    {
      baslik: "Dolgu: son bloğu tamamlamak",
      metin: md(`
ECB ve CBC bütün bloklarla çalışır; 21 baytlık bir mesajın son bloğu yarımdır. Bu yüzden mesajın sonuna **dolgu** (padding) eklenir. En yaygın biçim **PKCS#7**'dir: $n$ bayt eksikse, değeri $n$ olan $n$ bayt eklenir.

- 21 bayt: 11 bayt eksik, sona 11 tane 0x0B eklenir, toplam 32 bayt.
- 11 bayt: sona 05 05 05 05 05 eklenir.
- 32 bayt (tam iki blok): yine de dolgu eklenir, bu kez 16 tane 0x10. Yoksa alıcı 0x01 ile biten bir mesajın son baytını dolgu sanardı.

Alıcı çözdükten sonra son bayta bakar, o kadar baytı kontrol edip atar. Burada tehlikeli bir ayrıntı vardır: sunucu "dolgu hatalı" ile "içerik geçersiz" durumlarına **farklı** yanıt verirse, saldırgan bu farkı bir kâhin (oracle) gibi kullanıp şifreli metni anahtar olmadan bayt bayt çözebilir. Bu **padding oracle** saldırısıdır (Vaudenay, 2002); ASP.NET, Java sunucuları ve TLS'in bazı uygulamaları bu yüzden yamalandı. 17. ünitede oyuncak bir kâhinle bunu kendin yapacaksın.
`),
      dene: ["sf-u6-dolgu-21", "sf-u6-dolgu-tam", "sf-u6-dolgu-oracle"],
    },
    {
      baslik: "CTR: blok şifreden akış şifresine",
      metin: md(`
**CTR** (Counter, sayaç) modu farklı bir yol izler: açık metni blok şifreden hiç geçirmez. Bir **nonce** ile bir **sayacı** birleştirip şifreler ve çıkan baytları bir **anahtar akışı** olarak kullanır:

$$C_i = P_i \\oplus E_K(\\text{nonce} \\| i)$$

Bu, one-time pad'in pratik halidir: gerçek rastgele anahtar yerine AES'in ürettiği, rastgeleden ayırt edilemeyen bir akış. Sonuçları:

- **Dolgu gerekmez.** Akışın gerektiği kadarı kullanılır; şifreli metin açık metinle aynı uzunluktadır. Padding oracle'a da yer kalmaz.
- **Paraleldir.** $i$. bloğun akışı yalnız $i$'ye bağlıdır; bloklar herhangi bir sırada işlenir, dosyanın ortasındaki bir bloğa doğrudan erişilir.
- **Şifreleme ile çözme aynı işlemdir.** Alıcı aynı akışı üretip XOR'lar.

Bedeli de one-time pad'den gelir. Aynı anahtar ve aynı nonce **iki kez** kullanılırsa aynı akış iki kez kullanılmış olur ve $C_1 \\oplus C_2 = P_1 \\oplus P_2$ sızar. Nonce gizli değildir ama **asla tekrar etmemelidir**.

Aşağıda aynı mesaj üç modda şifrelendi. Şifreli baytlardan birine tıklayıp bir biti çevir ve çözülen metinde nelerin bozulduğunu karşılaştır:

[[G-S6-02]]

CTR'de tek bir bit, açık metinde tam aynı konumdaki tek biti çevirir; başka hiçbir yer bozulmaz. Bu iletim hatası için güzel bir özelliktir. Saldırgan için ise daha da güzel.
`),
      dene: ["sf-u6-ctr-tanim", "sf-u6-ctr-dolgu", "sf-u6-ctr-nonce", "sf-u6-ctr-paralel"],
      lab: "modlar",
    },
    {
      baslik: "Şifreledim ama doğrulamadım: AEAD",
      metin: md(`
Bir bankanın CTR ile şifrelediği ödeme mesajını düşün. Saldırgan anahtarı bilmez, ama mesajın biçimini bilir: tutarın mesajdaki yeri bellidir ve ilk rakamı 0'dır. CTR'de $C = P \\oplus S$ olduğu için şifreli bayta $P \\oplus P'$ değerini XOR'larsa, alıcı çözünce $P'$ görür. Hiçbir uyarı çıkmaz.

[[G-S6-03]]

Bu özelliğe **değiştirilebilirlik** (malleability) denir ve şunu öğretir: **şifreleme bütünlük sağlamaz**. Bütünlük için şifreli metne bir **doğrulama etiketi** eklenir. Alıcı önce etiketi doğrular, tutmazsa hiçbir şey çözmeden mesajı reddeder. Bunu tek adımda yapan yapılara **kimlik doğrulamalı şifreleme** (AEAD, Authenticated Encryption with Associated Data) denir.

**AES-GCM** bugün en yaygın AEAD'dir: şifreleme kısmı CTR'dir, etiketi ise GF(2¹²⁸)'de çalışan **GHASH** hesaplar. Nonce önerilen haliyle **96 bit**tir, etiket 128 bittir. AEAD bir de **ek veri** (AAD) alır: şifrelenmeyen ama etikete katılan veri. Bir paket başlığı, bir mesajın "kimden, hangi sohbet, kaçıncı mesaj" bilgisi açık kalmalıdır ama değiştirilmemelidir; AAD tam bunun içindir.

AEAD'den önce geliştiriciler şifreleme ile MAC'i (8. ünite) elle birleştiriyordu ve sıra çoğu zaman yanlış oluyordu. Doğru sıra **önce şifrele, sonra MAC'le** ve alıcıda **önce doğrula, sonra çöz**dür. Önce çözüp dolguyu denetleyen sistemler padding oracle'a açık kaldı.

> **Matematiğe in:** GCM'de doğrulama anahtarı $H = E_K(0^{128})$'dir. Etiket, şifreli blokları ve AAD'yi katsayı kabul eden bir polinomun $H$ noktasındaki değeridir (GF(2¹²⁸)'de), sonuna $E_K(\\text{nonce} \\| 1)$ eklenir. Aynı nonce iki kez kullanılırsa iki etiketin farkı, $H$'yi kök kabul eden bilinen bir polinom verir. Bu polinomun kökleri bulunabilir; $H$ ele geçince saldırgan istediği mesaja geçerli etiket üretir. GCM'de nonce tekrarı yalnız gizliliği değil bütünlüğü de yok eder. Rastgele 96 bitlik nonce'larda çakışma doğum günü sınırına göre yaklaşık $2^{48}$ mesajda beklenir; NIST bu yüzden bir anahtarla rastgele nonce'la en çok $2^{32}$ mesaj şifrelenmesini önerir.
`),
      dene: ["sf-u6-aead-tanim", "sf-u6-gcm-yapi", "sf-u6-aad", "sf-u6-once-dogrula"],
      lab: "bit-cevirme",
    },
    {
      baslik: "Akış şifreleri ve ChaCha20",
      metin: md(`
CTR blok şifreyi akış şifresine çevirmişti. Baştan **akış şifresi** olarak tasarlanmış algoritmalar da vardır: anahtar ve nonce'tan doğrudan uzun bir anahtar akışı üretir, açık metinle XOR'larlar. Bugünün yıldızı Daniel J. Bernstein'ın **ChaCha20**'sidir (2008, RFC 8439):

- 256 bit anahtar, 96 bit nonce ve 32 bit blok sayacı,
- her blokta 64 baytlık anahtar akışı,
- 4×4'lük 32 bitlik kelimelerden oluşan bir durum: 4 sabit, 8 anahtar kelimesi, 1 sayaç ve 3 nonce kelimesi.

Durum **20 tur** karıştırılır (10 kez bir sütun turu ve bir köşegen turu). Her tur dört **çeyrek turdan** oluşur ve çeyrek tur yalnız üç işlem kullanır: 32 bitlik **toplama** (Add), **döndürme** (Rotate) ve **XOR**. Bu yapıya **ARX** denir:

[[G-S6-04]]

ARX'in büyük bir avantajı vardır: bu üç işlem her işlemcide tek komuttur ve verinin değerinden bağımsız sürede çalışır. AES'in yazılımda tablo kullanan uygulamaları ise önbellek zamanlamasıyla anahtar sızdırabilir (17. ünite). ChaCha20 donanım desteği olmayan bir telefonda bile hızlı ve sabit zamanlıdır.

ChaCha20'nin etiketi **Poly1305**'tir: her mesajda ChaCha20'nin ilk akış bloğundan yeni bir anahtar türetilen, tek kullanımlık bir MAC. İkisi birlikte **ChaCha20-Poly1305** AEAD'ini oluşturur. Aynı nonce kuralı burada da geçerlidir; nonce'u rastgele seçmek isteyenler için 192 bitlik nonce'lu **XChaCha20** varyantı vardır.
`),
      dene: ["sf-u6-akis-tanim", "sf-u6-chacha-anahtar", "sf-u6-arx", "sf-u6-poly"],
      lab: "chacha",
    },
    {
      baslik: "Hangisini seçmeli?",
      metin: md(`
Uygulama yazarken soru genellikle "hangi mod?" değil, "hangi AEAD?" sorusudur. Kısa bir rehber:

| Durum | Seçim | Neden |
|---|---|---|
| Ağ trafiği, dosya, veritabanı alanı | AES-GCM ya da ChaCha20-Poly1305 | Gizlilik ve bütünlük birlikte; her ikisi de TLS 1.3'te standart |
| Donanım AES desteği olmayan cihazlar | ChaCha20-Poly1305 | Yazılımda hızlı ve sabit zamanlı |
| Rastgele nonce, çok sayıda mesaj | XChaCha20-Poly1305 ya da AES-GCM-SIV | Büyük nonce ya da nonce tekrarına dayanıklı mod |
| Disk sektörü | AES-XTS | Şifreli sektör aynı boyutta kalmalı; etiket için yer yok |
| Herhangi bir şey | ECB değil, MAC'siz CBC ya da CTR değil | Desen sızar ya da değiştirilebilir |

Bu kararları kendin vermek yerine iyi bir kütüphaneye bırakmak çoğu zaman en güvenli yoldur: tarayıcıda Web Crypto, başka dillerde libsodium (~crypto_secretbox~, ~crypto_aead_xchacha20poly1305~) ya da Google'ın Tink'i nonce üretimini ve doğru sırayı senin yerine yapar. "AES-CTR ile şifreleyip sonuna SHA-256 ekleyelim" gibi kendi yapımın her zaman bir açığı vardır: hash'in anahtarı yoktur, saldırgan değiştirdiği metnin hash'ini kendisi hesaplar.

> **Gerçek dünyada nerede karşına çıkar:**
> - **HTTPS (TLS 1.3):** Yalnız AEAD takımları kaldı: AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305 (ve AES-CCM). Google 2014'te Android'de ChaCha20-Poly1305'i öne çıkardı.
> - **Wi-Fi:** WPA2 AES-CCMP (CTR + CBC-MAC), WPA3 ayrıca GCMP-256 kullanır.
> - **Disk şifreleme:** BitLocker, FileVault ve LUKS AES-XTS kullanır.
> - **VPN ve mesajlaşma:** WireGuard ChaCha20-Poly1305 kullanır; Signal mesajları AES ile şifreler ve HMAC ile doğrular (13. ünite).
> - **Kötü örnekler:** ECB ile saklanmış parolalar (Adobe, 2013), nonce'u tekrar eden GCM uygulamaları (2016'da bir araştırma, internette nonce'u tekrarlayan yüzlerce HTTPS sunucusu buldu).
`),
      dene: ["sf-u6-aes-ni", "sf-u6-tls13", "sf-u6-kendi-modun"],
    },
  ],
  test: [
    "sf-u6-ecb-kod", "sf-u6-sabit-iv", "sf-u6-blok-sayisi", "sf-u6-dolgu-deger", "sf-u6-bit-cevir", "sf-u6-gcm-nonce",
    "sf-u6-gcm-tekrar", "sf-u6-chacha-tur", "sf-u6-dondurme", "sf-u6-disk", "sf-u6-wifi",
  ],
};
