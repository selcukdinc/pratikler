// 6. ünite: Kesim 1.6 Çıkarım Kuralları
// Kural adları kitaptaki gibi: modus ponens, modus tollens, varsayıma dayalı kıyas,
// ayırıcı kıyas, toplama, sadeleştirme, birleştirme.

import { kitap, turet, type Soru } from "./tipler.ts";

const U = 6;
const K = "u6";
const B = "1.6";

const KURALLAR = ["Modus ponens", "Modus tollens", "Varsayıma dayalı kıyas", "Ayırıcı kıyas", "Toplama", "Sadeleştirme"];

export const unite6: Soru[] = [
  ...kitap(U, K, B, [
    {
      id: "u6-k1", no: "1", tip: "mcq", kavram: "u6-gecerli",
      soru: "\"Sokrates insansa, Sokrates ölümlüdür. Sokrates insandır. ∴ Sokrates ölümlüdür.\" ifadesinin formu nedir ve geçerli midir?",
      secenekler: ["Modus ponens; geçerlidir, ön koşullar doğru olduğundan sonuç da doğrudur.", "Modus tollens; geçerlidir ama sonuç yanlış olabilir.", "Sonucu teyit eden yanıltmaca; geçersizdir.", "Hipotezi inkar eden yanıltmaca; geçersizdir."],
      dogru: 0,
      aciklama: "Form: p → q, p ∴ q. Bu modus ponenstir ve geçerlidir; ön koşullar doğru olduğu için sonuç doğrudur.",
    },
    {
      id: "u6-k3a", no: "3a", tip: "mcq", kavram: "u6-kural",
      soru: "\"Ayşe matematik öğrencisidir. Bundan dolayı, Ayşe ya matematik öğrencisidir ya da bilgisayar bilimi öğrencisidir.\" ifadesinde hangi çıkarım kuralı kullanılır?",
      secenekler: KURALLAR, dogru: 4,
      aciklama: "p ∴ p ∨ q formu toplamadır.",
    },
    {
      id: "u6-k3b", no: "3b", tip: "mcq", kavram: "u6-kural",
      soru: "\"Ersin matematik ve bilgisayar bilimi öğrencisidir. Bundan dolayı, Ersin matematik öğrencisidir.\" ifadesinde hangi çıkarım kuralı kullanılır?",
      secenekler: KURALLAR, dogru: 5,
      aciklama: "p ∧ q ∴ p formu sadeleştirmedir.",
    },
    {
      id: "u6-k3d", no: "3d", tip: "mcq", kavram: "u6-kural",
      soru: "\"Bugün kar yağarsa, üniversite kapanacak. Bugün üniversite kapalı değil. Bundan dolayı, bugün kar yağmadı.\" ifadesinde hangi çıkarım kuralı kullanılır?",
      secenekler: KURALLAR, dogru: 1,
      aciklama: "p → q, ¬q ∴ ¬p formu modus tollenstir.",
    },
    {
      id: "u6-k3e", no: "3e", tip: "mcq", kavram: "u6-kural",
      soru: "\"Yüzmeye gidersem, güneşte uzun süre kalacağım. Uzun süre güneşte kalırsam, güneş yanığım olacak. Bundan dolayı, yüzmeye gidersem güneş yanığım olacak.\" ifadesinde hangi çıkarım kuralı kullanılır?",
      secenekler: KURALLAR, dogru: 2,
      aciklama: "p → q, q → r ∴ p → r formu varsayıma dayalı kıyastır.",
    },
    {
      id: "u6-k5", no: "5", tip: "yaz", kavram: "u6-kural", zorluk: 2,
      soru: "Çıkarım kurallarını kullanarak \"Remzi çok çalışır\", \"Remzi çok çalışırsa, aptal bir çocuktur\" ve \"Remzi aptal bir çocuksa, işe giremeyecek\" hipotezlerinin \"Remzi işe giremeyecek\" sonucunu verdiğini gösteriniz.",
      aciklama: "w: Remzi çok çalışır, d: Remzi aptal bir çocuktur, j: Remzi işe girer.\n\n1. w (hipotez)\n2. w → d (hipotez)\n3. d (1 ve 2'den modus ponens)\n4. d → ¬j (hipotez)\n5. ¬j (3 ve 4'ten modus ponens)",
    },
    {
      id: "u6-k7", no: "7", tip: "yaz", kavram: "u6-nicel", zorluk: 2,
      soru: "\"Bütün insanlar ölümlüdür. Sokrates bir insandır. Bundan dolayı, Sokrates ölümlüdür.\" ifadesinde hangi çıkarım kuralları kullanılmıştır?",
      aciklama: "1. ∀x(İ(x) → Ö(x)) ön koşulundan evrensel özelleme ile İ(Sokrates) → Ö(Sokrates).\n2. İ(Sokrates) ön koşulu ile modus ponens: Ö(Sokrates).\n\nBu iki kuralın birlikte kullanımına evrensel modus ponens de denir.",
    },
    {
      id: "u6-k9c", no: "9c", tip: "fill", kavram: "u6-kural", zorluk: 2,
      soru: "\"Ya zekiyim ya da şanslıyım.\" \"Şanslı değilim.\" \"Şanslıysam, piyango kazanacağım.\" ön koşullarından hangi sonuç çıkar? (Kısa bir cümleyle yazınız: \"... zekiyim\")",
      bosluklar: [["zekiyim", "ben zekiyim"]],
      aciklama: "z ∨ ş ve ¬ş ön koşullarından ayırıcı kıyasla z: \"Zekiyim.\" Üçüncü ön koşul, ş yanlış olduğu için bir şey vermez.",
    },
    {
      id: "u6-k15b", no: "15b", tip: "tf", kavram: "u6-yanilgi", zorluk: 2,
      soru: "\"Her bilgisayar bilimi öğrencisi ayrık matematik alır. Ayşe ayrık matematik alıyor. Bundan dolayı, Ayşe bilgisayar bilimi öğrencisidir.\" çıkarımı geçerlidir.",
      dogru: false,
      aciklama: "Yanlış. Bu sonucu teyit eden yanıltmacadır: p → q ve q'dan p çıkmaz. Ayşe başka bir bölümden olup ayrık matematik alıyor olabilir.",
    },
    {
      id: "u6-k15c", no: "15c", tip: "tf", kavram: "u6-yanilgi", zorluk: 2,
      soru: "\"Bütün papağanlar meyve sever. Evcil kuşum papağan değildir. Bundan dolayı, evcil kuşum meyve sevmez.\" çıkarımı geçerlidir.",
      dogru: false,
      aciklama: "Yanlış. Bu hipotezi inkar eden yanıltmacadır: p → q ve ¬p'den ¬q çıkmaz.",
    },
    {
      id: "u6-k15d", no: "15d", tip: "tf", kavram: "u6-nicel", zorluk: 2,
      soru: "\"Her gün granola yiyen kişi sağlıklıdır. Lara sağlıksızdır. Bundan dolayı, Lara her gün granola yemez.\" çıkarımı geçerlidir.",
      dogru: true,
      aciklama: "Doğru. Evrensel özelleme ve modus tollens (evrensel modus tollens) kullanılır.",
    },
    {
      id: "u6-k19", no: "19", tip: "yaz", kavram: "u6-yanilgi", zorluk: 3,
      soru: "Aşağıdaki ifadelerin geçerli olup olmadığını belirleyiniz. Geçerliyse hangi çıkarım kuralı kullanılmıştır? Değilse ne tür mantıksal hata vardır?\n\na) n reel bir sayı ve n > 1 ise n² > 1'dir. Farz edelim ki n² > 1. O zaman, n > 1'dir.\nb) n reel bir sayı ve n > 3 ise n² > 9. Farz edelim ki n² ≤ 9. O zaman, n ≤ 3.\nc) n reel bir sayı ve n > 2 ise n² > 4. Farz edelim ki n ≤ 2. O zaman, n² ≤ 4.",
      aciklama: "a) Geçersiz: sonucu teyit eden yanıltmaca. (n = −2 için n² > 1 ama n > 1 değil.)\nb) Geçerli: modus tollens (p → q, ¬q ∴ ¬p).\nc) Geçersiz: hipotezi inkar eden yanıltmaca. (n = −3 için n ≤ 2 ama n² = 9 > 4.)",
    },
  ]),

  ...turet(U, K, "u6-gecerli", [
    {
      id: "u6-t-gecerli-tanim", tip: "mcq", zorluk: 1,
      soru: "Bir argüman (ifade formu) ne zaman geçerlidir?",
      secenekler: ["Ön koşulların hepsi doğruyken sonucun da doğru olması gerekiyorsa", "Sonuç her zaman doğruysa", "Ön koşullardan en az biri doğruysa", "Ön koşullar ve sonuç aynı değişkenleri içeriyorsa"],
      dogru: 0,
      aciklama: "Geçerlilik, (p₁ ∧ p₂ ∧ ... ∧ pₙ) → q'nun totoloji olması demektir.",
    },
    {
      id: "u6-t-gecerli-yanlis", tip: "tf", zorluk: 2,
      soru: "Geçerli bir argümanın sonucu yanlış olabilir.",
      dogru: true,
      aciklama: "Doğru. Ön koşullardan biri yanlışsa geçerli bir argüman yanlış bir sonuç verebilir. Kitaptaki örnek: √2 > 3/2 ise (√2)² > (3/2)² argümanı geçerlidir ama ön koşul yanlıştır.",
    },
    {
      id: "u6-t-arguman-sonuc", tip: "fill", zorluk: 1,
      soru: "Bir argümanda son önermeye sonuç, diğer önermelere ise ____ denir.",
      bosluklar: [["ön koşul", "öncül", "hipotez", "ön koşullar", "öncüller"]],
      aciklama: "Sonuçtan önceki önermeler ön koşullardır (öncüller).",
    },
  ]),

  ...turet(U, K, "u6-kural", [
    {
      id: "u6-t-mp", tip: "fill", zorluk: 1, semboller: true,
      soru: "Modus ponens'in totolojisini yazınız: (p ∧ (p → q)) → ____",
      bosluklar: [["q"]],
      aciklama: "Modus ponens: (p ∧ (p → q)) → q.",
    },
    {
      id: "u6-t-ayirici", tip: "mcq", zorluk: 1,
      soru: "p ∨ q ve ¬p ön koşullarından q sonucunu çıkaran kural hangisidir?",
      secenekler: ["Ayırıcı kıyas", "Varsayıma dayalı kıyas", "Toplama", "Modus tollens"],
      dogru: 0,
      aciklama: "Ayırıcı kıyas: (p ∨ q) ∧ ¬p → q.",
    },
    {
      id: "u6-t-birlestirme", tip: "mcq", zorluk: 1,
      soru: "p ve q ön koşullarından p ∧ q sonucunu çıkaran kural hangisidir?",
      secenekler: ["Birleştirme", "Sadeleştirme", "Toplama", "Ayırıcı kıyas"],
      dogru: 0,
      aciklama: "Birleştirme: ((p) ∧ (q)) → (p ∧ q).",
    },
    {
      id: "u6-t-yelken", tip: "yaz", zorluk: 3,
      soru: "\"Yağmur yağmazsa veya hava sisli değilse, yelken yarışı yapılacak ve hayat kurtarma gösterisi devam edecek\", \"Yelken yarışı yapılırsa, kupa verilecek\" ve \"Kupa verilmedi\" hipotezlerinden \"Yağmur yağdı\" sonucunu çıkarım kurallarıyla elde ediniz.",
      aciklama: "r: yağmur yağar, f: sisli, s: yarış yapılır, l: gösteri devam eder, t: kupa verilir.\n\n1. ¬t (hipotez)\n2. s → t (hipotez)\n3. ¬s (1, 2 modus tollens)\n4. (¬r ∨ ¬f) → (s ∧ l) (hipotez)\n5. ¬(s ∧ l) → ¬(¬r ∨ ¬f) (4'ün zıt-pozitifi)\n6. ¬s ∨ ¬l (3'ten toplama), yani ¬(s ∧ l)\n7. ¬(¬r ∨ ¬f) (5, 6 modus ponens), yani r ∧ f\n8. r (sadeleştirme)",
    },
    {
      id: "u6-t-cozum-kurali", tip: "tf", zorluk: 2,
      soru: "p ∨ q ve ¬p ∨ r ön koşullarından q ∨ r sonucu çıkarılabilir.",
      dogru: true,
      aciklama: "Doğru. Bu, ((p ∨ q) ∧ (¬p ∨ r)) → (q ∨ r) totolojisine dayanan kuraldır (resolution). p doğruysa r, yanlışsa q doğru olmalıdır.",
    },
  ]),

  ...turet(U, K, "u6-yanilgi", [
    {
      id: "u6-t-teyit", tip: "mcq", zorluk: 2,
      soru: "p → q ve q ön koşullarından p sonucunu çıkarmak hangi hatadır?",
      secenekler: ["Sonucu teyit eden yanıltmaca", "Hipotezi inkar eden yanıltmaca", "Modus tollens", "Ayırıcı kıyas"],
      dogru: 0,
      aciklama: "((p → q) ∧ q) → p bir totoloji değildir (p yanlış, q doğru iken yanlıştır). Bu hata sonucu teyit eden yanıltmacadır.",
    },
    {
      id: "u6-t-inkar", tip: "mcq", zorluk: 2,
      soru: "p → q ve ¬p ön koşullarından ¬q sonucunu çıkarmak hangi hatadır?",
      secenekler: ["Hipotezi inkar eden yanıltmaca", "Sonucu teyit eden yanıltmaca", "Modus ponens", "Varsayıma dayalı kıyas"],
      dogru: 0,
      aciklama: "((p → q) ∧ ¬p) → ¬q totoloji değildir; bu hata hipotezi inkar eden yanıltmacadır.",
    },
    {
      id: "u6-t-kitap-problem", tip: "tf", zorluk: 2,
      soru: "\"Bu kitaptaki her problemi yaparsanız ayrık matematiği öğrenirsiniz. Ayrık matematiği öğrendiniz. Öyleyse kitaptaki her problemi yaptınız.\" argümanı geçerlidir.",
      dogru: false,
      aciklama: "Yanlış. Kitaptaki örnek: bu, sonucu teyit eden yanıltmacadır. Ayrık matematik başka yollarla da öğrenilebilir.",
    },
  ]),

  ...turet(U, K, "u6-nicel", [
    {
      id: "u6-t-evrensel-ozelleme", tip: "mcq", zorluk: 1,
      soru: "∀xP(x) ön koşulundan, tanım kümesinin belirli bir c elemanı için P(c) sonucunu çıkaran kural hangisidir?",
      secenekler: ["Evrensel özelleme", "Evrensel genelleme", "Varoluşsal özelleme", "Varoluşsal genelleme"],
      dogru: 0,
      aciklama: "Evrensel özelleme: ∀xP(x) ∴ P(c). Örnek: \"Bütün kadınlar bilgedir\" → \"Nisa bilgedir\".",
    },
    {
      id: "u6-t-varolussal-genelleme", tip: "mcq", zorluk: 2,
      soru: "P(c)'nin belirli bir c için doğru olduğu biliniyorsa ∃xP(x) sonucunu çıkaran kural hangisidir?",
      secenekler: ["Varoluşsal genelleme", "Varoluşsal özelleme", "Evrensel genelleme", "Evrensel özelleme"],
      dogru: 0,
      aciklama: "Tek bir örnek, varlık iddiası için yeterlidir: P(c) ∴ ∃xP(x).",
    },
    {
      id: "u6-t-evrensel-genelleme", tip: "tf", zorluk: 2,
      soru: "Evrensel genellemeyle ∀xP(x) sonucuna varmak için c'nin rastgele (keyfi) seçilmiş bir eleman olması ve P(c)'nin bu c için gösterilmesi gerekir.",
      dogru: true,
      aciklama: "Doğru. c özel bir eleman değil, tanım kümesinden keyfi bir eleman olmalıdır.",
    },
    {
      id: "u6-t-ferda", tip: "yaz", zorluk: 3,
      soru: "H(x) \"x mutludur\" olsun. \"∃xH(x) verilmiş olsun, H(Ferda) sonucuna varırız. Bundan dolayı, Ferda mutludur.\" çıkarımında ne yanlıştır?",
      aciklama: "Varoluşsal özelleme, ∃xH(x)'ten H(c) çıkarmaya izin verir ama c'nin kim olduğunu bilmeyiz; c belirli bir kişi (Ferda) olarak seçilemez. Mutlu olan biri vardır, ama bu kişinin Ferda olduğu sonucu çıkmaz.",
    },
  ]),
];
