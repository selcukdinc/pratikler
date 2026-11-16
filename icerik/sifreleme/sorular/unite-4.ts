// 4. ünite (Temeller): Sezar, tek alfabeli yerine koyma, frekans analizi, Vigenère ve
// kırılması (Kasiski, çakışma indeksi), aktarım şifreleri, Enigma ve klasik şifrelerin
// bugüne bıraktığı dersler. Bütün şifreler 29 harfli Türk alfabesiyle çalışır
// (ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ); meydan okumaların şifreli metinleri sorular.test.ts'te
// src/kripto/oyuncak/klasik.ts ile sınanır.
import { sorular, type Soru } from "./yardimci.ts";

const U = 4;

// Yerine koyma meydan okumasının şifreli metni (anahtar sorular.test.ts'te)
export const YERINE_KOYMA_METNI =
  "ÖDOSÜUĞDZYOVA ĞIGATMOÖ ZMĞUDOÜÇZTNT ĞOJMOMOŞOTA VAŞOM ZTZRÜZDNT ĞOJMOMOŞOTA VZHZTND. CZMVNDĞZT COCÜAÇO EOMCA EOMA ZTZRÜZDN EOMÇAVOÖİA ÇACZLN UÖFHZÇZJ. EF HIJVAT ZMĞUDOÜÇZMZD RADÖACA ZİNÖ HZHNÇMZTND GA HNMMZDKZ OTKAMATOD.";

export const unite4: Soru[] = [
  ...sorular(U, "u4-sezar", [
    {
      ad: "sezar-tanim",
      soru: "Sezar şifresi nasıl çalışır?",
      secenekler: [
        "Her harf alfabede sabit sayıda ileri kaydırılır",
        "Harflerin yerleri ters sırayla yazılır",
        "Her harf rastgele seçilen başka bir harfle değiştirilir",
        "Her kelimenin yalnız ilk harfi değiştirilir",
      ],
      aciklama: "Sezar şifresinde anahtar tek bir sayıdır: kayma miktarı. 3 kaymayla A → Ç, B → D olur (Türk alfabesinde). Matematik diliyle $C = (M + k) \\bmod 29$.",
    },
    {
      ad: "anahtar-sayisi",
      sayi: [28],
      soru: "29 harfli Türk alfabesinde Sezar şifresinin, metni değiştirmeyen sıfır kayma dışında kaç farklı anahtarı vardır?",
      aciklama: "Kayma 0 ile 28 arasında olabilir; 0 metni değiştirmez. Kalan **28** anahtar elle bile birkaç dakikada denenir. Kaba kuvvet için bilgisayara bile gerek yok.",
    },
    {
      ad: "coz-3",
      etiket: "ctf",
      cevap: ["BULUŞMA YERİ KÜTÜPHANE"],
      soru: "Bir arkadaşın sana Sezar şifresiyle, 3 kaymayla şifrelenmiş şu notu bıraktı: ~DYOYÜÖÇ BĞTL NZVZŞJÇPĞ~. Not ne diyor?",
      aciklama: "Her harfi alfabede 3 geri kaydır: D → B, Y → U, O → L... (Türk alfabesi: ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ).\n---\nSonuç: **BULUŞMA YERİ KÜTÜPHANE**.",
    },
    {
      ad: "kaba-kuvvet",
      etiket: "ctf",
      zorluk: 2,
      cevap: ["ANAHTAR KAPININ ALTINDA"],
      soru: "Kaymayı bilmediğin bir Sezar şifreli metin buldun: ~İYİREİC UİBSYSY İÜESYMİ~. Bütün kaymaları dene ve açık metni yaz.",
      aciklama: "28 kaymayı tek tek dene; yalnız biri anlamlı Türkçe verir. Kısa yol: ilk kelimede üç, son kelimede iki ~İ~ var ve son kelime ~İ~ ile başlayıp bitiyor; Türkçenin en sık harfi A olabilir. İ (11) → A (0), yani 11 geri kayma.\n---\n11 kaymayla: **ANAHTAR KAPININ ALTINDA**.",
    },
    {
      ad: "rot13",
      dy: false,
      soru: "Bir metni iki kez farklı Sezar kaymalarıyla şifrelemek, onu tek kaymalı Sezar'dan daha güvenli yapar.",
      aciklama: "Yanlış. 5 kayma ardından 7 kayma, tek bir 12 kaymayla aynıdır: $(M + 5 + 7) \\bmod 29$. Anahtar uzayı yine 28'dir. Bir şifreyi kendisiyle art arda uygulamak her zaman güç katmaz.",
    },
  ]),
  ...sorular(U, "u4-yerine-koyma", [
    {
      ad: "anahtar-uzayi",
      zorluk: 2,
      soru: "29 harfli alfabede tek alfabeli yerine koyma şifresinin anahtar sayısı ($29!$) yaklaşık kaç bitlik anahtara karşılık gelir?",
      secenekler: ["Yaklaşık 103 bit", "Yaklaşık 5 bit", "Yaklaşık 29 bit", "Yaklaşık 841 bit"],
      aciklama: "$29! \\approx 8{,}8 \\times 10^{30}$ ve $\\log_2(29!) \\approx 103$. Kaba kuvvetle denemek imkânsızdır, yine de bu şifre frekans analiziyle bir sayfa metinden kolayca kırılır. **Büyük anahtar uzayı tek başına güvenlik değildir.**",
    },
    {
      ad: "atbas",
      etiket: "ctf",
      cevap: ["GİZLİ MESAJ"],
      soru: "Atbaş şifresi alfabeyi ters çevirir: A ↔ Z, B ↔ Y, C ↔ V... ~SOALO KTGZN~ metnini çöz.",
      aciklama: "Türk alfabesini (ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ) tersiyle eşleştir: S ↔ G, O ↔ İ, A ↔ Z, L ↔ M...\n---\nSonuç: **GİZLİ MESAJ**. Atbaş anahtarsız, sabit bir yerine koymadır; kendisinin tersidir.",
    },
    {
      ad: "harf-deseni",
      soru: "Yerine koyma şifresinde açık metindeki hangi özellik şifreli metinde **değişmeden** kalır?",
      secenekler: [
        "Aynı harflerin tekrar ettiği yerler",
        "Harflerin alfabedeki sırası",
        "Metindeki ünlülerin kendisi",
        "Kelimelerin anlamı",
      ],
      aciklama: "Her A hep aynı harfe döner; bu yüzden ~ANNE~ gibi bir kelimenin \"1-2-2-3\" deseni şifrede de görünür. Boşluklar bırakılırsa kelime uzunlukları da sızar. Kırıcılar bu desenlerden yararlanır.",
    },
  ]),
  ...sorular(U, "u4-frekans", [
    {
      ad: "fikir",
      soru: "Frekans analizi neden tek alfabeli şifreleri kırar?",
      secenekler: [
        "Her dilde harflerin sıklıkları belirgindir ve yerine koyma bu sıklıkları korur",
        "Şifreli metinde harf sayısı açık metinden her zaman fazladır",
        "Şifreleyen kişi en sık harfleri hiç kullanamaz",
        "Bilgisayarlar harf sıklıklarını şifreli metne ekler",
      ],
      aciklama: "Türkçede A, E, İ, N, R, L harfleri çok sıktır. Yerine koyma yalnız harflerin adını değiştirir, sayılarını değil: şifreli metnin en sık harfi büyük olasılıkla A ya da E'dir. Bu yöntemi 9. yüzyılda el-Kindî anlattı.",
    },
    {
      ad: "en-sik",
      etiket: "ctf",
      zorluk: 2,
      soru: `Tek alfabeli yerine koymayla şifrelenmiş Türkçe bir metin: ~${YERINE_KOYMA_METNI}~ En sık geçen şifreli harf ve onun en olası karşılığı hangisidir?`,
      secenekler: ["Z, büyük olasılıkla A", "O, büyük olasılıkla K", "M, büyük olasılıkla Ş", "Ç, büyük olasılıkla Ğ"],
      aciklama: "Harfleri say: ~Z~ 24 kez geçiyor, ikinci sırada ~O~ var. Türkçede en sık harf A olduğu için Z → A en güçlü tahmindir.\n---\nSonra kısa kelimelere bak: ~EF~ iki harfli ve sık; ~GA~ (\"ve\") gibi bağlaçlar da ipucudur. Tahminleri yerleştirdikçe metin açılır: \"KRİPTOGRAFİDE GÜVENLİK...\".",
    },
    {
      ad: "kisa-metin",
      dy: false,
      soru: "Frekans analizi, 15-20 harflik çok kısa bir şifreli metinde de en az uzun metindeki kadar güvenilir çalışır.",
      aciklama: "Yanlış. Sıklıklar ancak yeterince uzun metinde dilin ortalamasına yaklaşır. Kısa metinde \"en sık harf A\" tahmini sık sık yanılır; o zaman kelime desenleri ve olası kelimeler (\"bilinen açık metin\") kullanılır.",
    },
    {
      ad: "dil",
      zorluk: 2,
      soru: "İngilizce bir metin aynı yöntemle şifrelenmiş olsaydı, frekans analizinde ilk tahmin hangi harf olurdu?",
      secenekler: ["E", "A", "İ", "Ş"],
      aciklama: "İngilizcede en sık harf E'dir (yaklaşık %12), ardından T ve A gelir. Dilin bilinmesi kırmanın ilk adımıdır; bu yüzden tezgahta hem Türkçe hem İngilizce dağılım vardır.",
    },
  ]),
  ...sorular(U, "u4-vigenere", [
    {
      ad: "vigenere-tanim",
      soru: "Vigenère şifresini Sezar'dan ayıran özellik nedir?",
      secenekler: [
        "Kayma miktarı anahtar kelimenin harflerine göre harften harfe değişir",
        "Harfler kaydırılmaz, yalnız sıraları değiştirilir",
        "Her mesajda alfabenin harfleri yeniden icat edilir",
        "Yalnız sesli harfler şifrelenir, sessizler olduğu gibi kalır",
      ],
      aciklama: "Anahtar \"KOD\" ise 1., 4., 7. harfler K kadar, 2., 5., 8. harfler O kadar, 3., 6., 9. harfler D kadar kayar. Aynı harf farklı yerlerde farklı harflere döner: **çok alfabeli** şifre.",
    },
    {
      ad: "vigenere-coz",
      etiket: "ctf",
      zorluk: 2,
      cevap: ["SALDIRI ŞAFAKTA BAŞLAR"],
      soru: "Anahtarı ~KOD~ olan Vigenère şifreli metni çöz: ~EOÖOYUT IDPOOGO EKIÖKĞ~ (Boşluklar anahtarı ilerletmez.)",
      aciklama: "K = 13, O = 17, D = 4 (A = 0'dan sayınca). Her harfi sırayla 13, 17, 4, 13, 17, 4... geri kaydır.\n---\nE (5) − 13 = −8 ≡ 21 → S; O (17) − 17 = 0 → A; Ö (18) − 4 = 14 → L...\n---\nSonuç: **SALDIRI ŞAFAKTA BAŞLAR**.",
    },
    {
      ad: "bilinen",
      etiket: "ctf",
      zorluk: 3,
      cevap: ["LİMON"],
      soru: "Ele geçirdiğin Vigenère şifreli bir mesajın ~ANFVNMİ PKÇJİ~ olduğunu ve \"MERHABA\" diye başladığını biliyorsun. Anahtarın 5 harfli olduğu da biliniyor. Anahtar nedir?",
      aciklama: "Bilinen açık metin saldırısı: anahtar harfi = şifreli harf − açık harf. A (0) − M (15) ≡ 14 → L; N (16) − E (5) = 11 → İ; F (6) − R (20) ≡ 15 → M; V (26) − H (9) = 17 → O; N (16) − A (0) = 16 → N.\n---\nAnahtar **LİMON**; altıncı ve yedinci harfler (L, İ) anahtarın tekrar ettiğini doğrular. Mesajın tamamı \"MERHABA DÜNYA\".",
    },
  ]),
  ...sorular(U, "u4-vigenere-kirma", [
    {
      ad: "kasiski",
      sayi: [6],
      zorluk: 2,
      soru: "Kasiski yöntemiyle bir Vigenère şifreli metinde tekrar eden üç harflik dizilerin aralarında 12, 18 ve 30 harf olduğunu buldun. Anahtar uzunluğu için en olası değer kaçtır?",
      aciklama: "Aynı açık metin parçası anahtarın aynı yerine denk gelince aynı şifreli dizi çıkar; aradaki uzaklık anahtar uzunluğunun katıdır. $\\text{EBOB}(12, 18, 30) = 6$.\n---\n2 ve 3 de böler ama hepsini açıklayan en büyük değer 6'dır; çakışma indeksiyle doğrulanır.",
    },
    {
      ad: "sonra",
      soru: "Vigenère anahtarının uzunluğu (diyelim 6) bulunduktan sonra şifre nasıl kırılır?",
      secenekler: [
        "Metin 6 gruba ayrılır; her grup ayrı bir Sezar gibi frekans analiziyle çözülür",
        "Bütün 6 harfli anahtarlar sırayla denenir, başka yol yoktur",
        "Metnin ilk 6 harfi atılır, kalanı doğrudan okunur",
        "Anahtar uzunluğu bilinince şifre kendiliğinden çözülür",
      ],
      aciklama: "1., 7., 13. harfler aynı anahtar harfiyle kaydırıldı: bu grup tek bir Sezar şifresidir. Her grubun en sık harfi bulunur ve kayma hesaplanır. Böylece $29^6$ yerine $6 \\times 28$ deneme yeter.",
    },
    {
      ad: "ic",
      zorluk: 3,
      soru: "Çakışma indeksi (metinden rastgele seçilen iki harfin aynı çıkma olasılığı), şifreli bir metinde İngilizce düz metne yakın (yaklaşık 0,066) çıkıyor. Bu ne düşündürür?",
      secenekler: [
        "Tek alfabeli bir şifre; harf sıklıkları korunmuş",
        "Çok alfabeli uzun anahtarlı bir şifre",
        "Metin tamamen rastgele harflerden oluşuyor",
        "Metin kesinlikle Türkçedir",
      ],
      aciklama: "Yerine koyma ve aktarım şifreleri sıklıkların dağılımını korur, bu yüzden indeks dilinkine yakın kalır. Uzun anahtarlı Vigenère dağılımı düzleştirir ve indeksi tekdüze değere ($1/26 \\approx 0{,}038$) yaklaştırır.",
    },
  ]),
  ...sorular(U, "u4-aktarim", [
    {
      ad: "aktarim-tanim",
      soru: "Aktarım (yer değiştirme) şifresi ile yerine koyma şifresi arasındaki fark nedir?",
      secenekler: [
        "Aktarım harfleri değiştirmez, yerlerini karıştırır",
        "Aktarım yalnız sayılarla, yerine koyma yalnız harflerle çalışır",
        "Aktarımın anahtarı yoktur, yerine koymanın vardır",
        "Aktarım şifreli metni her zaman iki kat uzatır",
      ],
      aciklama: "Aktarımda harf sıklıkları **tamamen aynı** kalır (çakışma indeksi düz metinle aynı); yalnız sıra değişir. Modern blok şifreler iki fikri birleştirir: yerine koyma (karıştırma) ve aktarım (yayılma).",
    },
    {
      ad: "cit",
      etiket: "ctf",
      zorluk: 2,
      cevap: ["YARIN SAAT ONDA GEL"],
      soru: "İki raylı çit şifresinde harfler sırayla üst ve alt satıra zikzak yazılır, sonra üst satır ve alt satır art arda okunur (boşluklar atılır). ~YRNATNAEAISAODGL~ metnini çöz.",
      aciklama: "16 harf: ilk 8'i üst ray (~YRNATNAE~), son 8'i alt ray (~AISAODGL~).\n---\nSırayla bir üstten bir alttan oku: Y-A-R-I-N-S-A-A-T-O-N-D-A-G-E-L → **YARIN SAAT ONDA GEL**.",
    },
    {
      ad: "frekans-ayni",
      dy: true,
      soru: "Bir aktarım şifresinin şifreli metnindeki harf sıklıkları, açık metindekilerle birebir aynıdır.",
      aciklama: "Doğru. Harfler yalnız yer değiştirdiği için her harften kaç tane olduğu korunur. Bu, şifrenin türünü anlamak için güçlü bir ipucudur: sıklıklar Türkçeye benziyorsa ama metin okunmuyorsa aktarım düşünülür.",
    },
  ]),
  ...sorular(U, "u4-enigma", [
    {
      ad: "rotor",
      soru: "Enigma makinesinde rotorların görevi neydi?",
      secenekler: [
        "Her basışta dönüp harf eşlemesini değiştirmek",
        "Şifreli metni kâğıda basıp saklamak",
        "Mesajı radyo dalgasına çevirip yollamak",
        "Operatörün parolasını her sabah doğrulamak",
      ],
      aciklama: "Her rotor 26 harflik bir yerine koymadır. Her tuşa basışta en sağdaki rotor bir adım döner, belli noktalarda yanındakini de döndürür (kilometre sayacı gibi). Böylece aynı harf her basışta farklı bir harfe döner: çok uzun dönemli çok alfabeli bir şifre.",
    },
    {
      ad: "kendine",
      dy: true,
      zorluk: 2,
      soru: "Enigma'da hiçbir harf kendisine şifrelenemezdi ve bu, kırıcıların yararlandığı bir zayıflıktı.",
      aciklama: "Doğru. Yansıtıcı (reflector) akımı aynı rotorlardan geri gönderdiği için A asla A'ya dönmez. Kırıcılar bunu \"bu şifreli metinde hangi konuma 'WETTERBERICHT' (hava raporu) gelebilir?\" sorusunda kullanarak olasılıkları büyük ölçüde azalttı.",
    },
    {
      ad: "ayni-ayar",
      zorluk: 2,
      soru: "Yansıtıcı sayesinde Enigma'nın hangi özelliği vardı?",
      secenekler: [
        "Aynı ayarla şifreli metin yazılınca açık metin çıkıyordu",
        "Şifre çözmek için ayrı bir makine gerekiyordu",
        "Her mesaj iki kez gönderilmek zorundaydı",
        "Anahtar her mesajın içine açıkça yazılıyordu",
      ],
      aciklama: "Yansıtıcı eşlemeyi kendi kendinin tersi (involüsyon) yapar: A → K ise aynı konumda K → A. Alıcı makinesini aynı başlangıç ayarına getirip şifreli metni yazınca açık metni okur. Kolaylık sağlayan bu yapı, kendine şifrelenmeme zayıflığının da kaynağıdır.",
    },
    {
      ad: "kirilma",
      zorluk: 2,
      soru: "Enigma'nın kırılmasında en büyük payı olan etken hangisidir?",
      secenekler: [
        "Tahmin edilen kalıplar, operatör hataları ve arama makineleri",
        "Makinenin algoritmasının hiçbir zaman öğrenilememiş olması",
        "Anahtar uzayının yalnız 26 olasılıktan oluşması",
        "Mesajların şifrelenmeden gönderilmesi",
      ],
      aciklama: "Polonyalı matematikçiler (Rejewski ve arkadaşları) yapıyı 1930'larda çözdü; Bletchley Park'ta Turing ve ekibi \"bombe\" makineleriyle, tahmin edilen kelimelerden (crib) yola çıkarak günlük ayarları buldu. Kerckhoffs ilkesinin dersi: makine ele geçebilir, güvenlik anahtar ve kullanım disiplinindedir.",
    },
  ]),
  ...sorular(U, "u4-dersler", [
    {
      ad: "anahtar-uzayi-yetmez",
      etiket: "hata-bul",
      zorluk: 2,
      soru: "Bir öğrenci \"Yerine koyma şifremin 2^103 anahtarı var, AES-128'den bile büyük; o halde AES kadar güvenli\" diyor. Hata nerede?",
      secenekler: [
        "Saldırgan anahtarları denemez; harf sıklıklarından kısa yoldan kırar",
        "2^103, 2^128'den büyük bir sayıdır, bu yüzden hesap yanlış",
        "Yerine koyma şifresinin anahtarı yoktur",
        "AES'in anahtar uzayı yerine koymanınkinden küçüktür",
      ],
      aciklama: "Kaba kuvvete dayanmak gerekli ama yeterli değildir. İyi bir şifre, kaba kuvvetten **daha kısa** bir yol bırakmamalıdır. Yerine koyma istatistik sızdırır; AES'te bugüne kadar kaba kuvvetten belirgin hızlı bir saldırı bulunmadı.",
    },
    {
      ad: "istatistik",
      soru: "Klasik şifrelerin ortak zayıflığı nedir?",
      secenekler: [
        "Açık metnin istatistiğini şifreli metne taşımaları",
        "Bilgisayar olmadan hiç uygulanamamaları",
        "Anahtarlarının herkese açık yayımlanması",
        "Yalnız sayıları şifreleyebiliyor olmaları",
      ],
      aciklama: "Harf sıklıkları, tekrar eden diziler ve kelime desenleri şifreli metne sızar. Modern şifrelerden beklenen, şifreli metnin anahtarı bilmeyen için **rastgele bayttan ayırt edilemez** olmasıdır.",
    },
    {
      ad: "bugun",
      dy: true,
      soru: "Klasik şifreler bugün gerçek gizlilik için kullanılmaz, ama kırılmaları kriptanalizin temel yöntemlerini öğretir.",
      aciklama: "Doğru. Frekans analizi, bilinen açık metin saldırısı, anahtar uzunluğunu bulma ve kaba kuvvet, modern saldırıların da temel fikirleridir. Bu ünitedeki şifreler **oyuncaktır**.",
    },
  ]),
];
