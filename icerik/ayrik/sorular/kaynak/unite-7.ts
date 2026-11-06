// 7. ünite: Kesim 1.7 İspatlara Giriş

import { kitap, turet, type Soru } from "./tipler.ts";

const U = 7;
const K = "u7";
const B = "1.7";

export const unite7: Soru[] = [
  ...kitap(U, K, B, [
    {
      id: "u7-k2", no: "2", tip: "yaz", kavram: "u7-dogrudan", zorluk: 1,
      soru: "İki çift tam sayının toplamının çift olduğunu doğrudan ispat kullanarak gösteriniz.",
      aciklama: "m ve n çift olsun. O halde m = 2k ve n = 2l olacak şekilde k ve l tam sayıları vardır.\n\nm + n = 2k + 2l = 2(k + l).\n\nk + l bir tam sayı olduğundan m + n, 2'nin bir katıdır; yani çifttir. ∎",
    },
    {
      id: "u7-k6", no: "6", tip: "yaz", kavram: "u7-dogrudan", zorluk: 2,
      soru: "İki tek tam sayının çarpımının tek olduğunu doğrudan ispat kullanarak gösteriniz.",
      aciklama: "m = 2k + 1 ve n = 2l + 1 olsun.\n\nmn = (2k + 1)(2l + 1) = 4kl + 2k + 2l + 1 = 2(2kl + k + l) + 1.\n\n2kl + k + l bir tam sayı olduğundan mn tektir. ∎",
    },
    {
      id: "u7-k9", no: "9", tip: "yaz", kavram: "u7-celiski", zorluk: 2,
      soru: "İrrasyonel ve rasyonel sayının toplamının irrasyonel olduğunu çelişki ile ispat kullanarak gösteriniz.",
      aciklama: "r rasyonel, i irrasyonel olsun ve r + i'nin rasyonel olduğunu varsayalım (çelişki varsayımı).\n\nr = a/b ve r + i = c/d (a, b, c, d tam sayı, b, d ≠ 0) yazılabilir. O zaman\n\ni = (r + i) − r = c/d − a/b = (bc − ad)/(bd).\n\nbc − ad ve bd tam sayıdır, bd ≠ 0; yani i rasyoneldir. Bu, i'nin irrasyonel olmasıyla çelişir. Demek ki r + i irrasyoneldir. ∎",
    },
    {
      id: "u7-k11", no: "11", tip: "mcq", kavram: "u7-terim", zorluk: 2,
      soru: "\"İki irrasyonel sayının çarpımı her zaman irrasyoneldir\" iddiası için hangisi doğrudur?",
      secenekler: ["Yanlıştır; √2 · √2 = 2 bir karşı örnektir.", "Doğrudur; çelişki ile ispatlanır.", "Doğrudur; doğrudan ispatla gösterilir.", "Ne doğru ne yanlış olduğu bilinmemektedir."],
      dogru: 0,
      aciklama: "√2 irrasyoneldir ama √2 · √2 = 2 rasyoneldir. Tek bir karşı örnek iddiayı çürütür.",
    },
    {
      id: "u7-k16", no: "16", tip: "yaz", kavram: "u7-zitpozitif", zorluk: 2,
      soru: "Eğer m ve n tam sayılar ve mn çift ise, o zaman ya m çift ya da n çifttir. İspatlayınız.",
      aciklama: "Zıt-pozitif ile ispat: m ve n'nin ikisi de tek ise mn'nin tek olduğunu gösterelim.\n\nm = 2k + 1, n = 2l + 1 ise mn = 2(2kl + k + l) + 1, yani tektir.\n\nZıt-pozitif doğru olduğu için asıl ifade de doğrudur: mn çift ise m veya n çifttir. ∎",
    },
    {
      id: "u7-k18", no: "18", tip: "yaz", kavram: "u7-zitpozitif", zorluk: 2,
      soru: "Eğer n tam sayı ve 3n + 2 çift ise, o zaman n'nin çift olduğunu a) zıt-pozitif ile ispat, b) çelişki ile ispat kullanarak gösteriniz.",
      aciklama: "a) Zıt-pozitif: n tek ise 3n + 2 tektir. n = 2k + 1 ise 3n + 2 = 6k + 5 = 2(3k + 2) + 1, tektir. ∎\n\nb) Çelişki: 3n + 2 çift ve n tek olsun. n = 2k + 1 için 3n + 2 = 2(3k + 2) + 1 tek olur; 3n + 2'nin çift olmasıyla çelişir. O halde n çifttir. ∎",
    },
    {
      id: "u7-k19", no: "19", tip: "mcq", kavram: "u7-dogrudan", zorluk: 2,
      soru: "P(n): \"Eğer n > 1 pozitif tam sayı ise, o zaman n² > n\" olsun. P(0) önermesini ispatlamak için hangi tür ispat kullanılır?",
      secenekler: ["İçi boş ispat", "Aşikar ispat", "Çelişki ile ispat", "Karşı örnek"],
      dogru: 0,
      aciklama: "n = 0 için hipotez \"0 > 1\" yanlıştır; şartlı ifade hipotez yanlış olduğundan doğrudur. Buna içi boş ispat denir.",
    },
    {
      id: "u7-k22", no: "22", tip: "yaz", kavram: "u7-celiski", zorluk: 2,
      soru: "Sadece mavi ve siyah çorapların olduğu bir çekmeceden 3 çorap seçilirse, bunlardan en az ikisinin aynı renkte olacağını ispatlayınız.",
      aciklama: "Çelişki ile ispat: Seçilen 3 çoraptan hiçbir ikisinin aynı renkte olmadığını varsayalım. O zaman en fazla bir mavi ve en fazla bir siyah çorap vardır; toplam en fazla 2 çorap eder. Bu, 3 çorap seçilmesiyle çelişir. ∎",
    },
    {
      id: "u7-k26", no: "26", tip: "yaz", kavram: "u7-cift", zorluk: 2,
      soru: "n pozitif tam sayı ise, n'nin ancak ve ancak 7n + 4 çift ise çift olduğunu ispatlayınız.",
      aciklama: "Çift şartlı ifade için iki yön ispatlanır.\n\n(→) n = 2k ise 7n + 4 = 14k + 4 = 2(7k + 2), çifttir.\n\n(←) Zıt-pozitif: n = 2k + 1 tek ise 7n + 4 = 14k + 11 = 2(7k + 5) + 1, tektir. Yani 7n + 4 çift ise n çifttir. ∎",
    },
    {
      id: "u7-k35", no: "35", tip: "yaz", kavram: "u7-cift", zorluk: 3,
      soru: "√(x + 3) = 3 − x denkleminin çözümlerini bulmak için şu adımlar atılıyor:\n\n(1) √(x + 3) = 3 − x verilmiş olsun.\n(2) İki tarafın karesi alınarak x + 3 = x² − 6x + 9 elde edilir.\n(3) İki taraftan x + 3 çıkarılarak 0 = x² − 7x + 6 elde edilir.\n(4) Çarpanlara ayırarak 0 = (x − 1)(x − 6) elde edilir.\n(5) x = 1 veya x = 6.\n\nAdımlar doğru mudur? Bulunan değerlerin hepsi çözüm müdür?",
      aciklama: "Her adım bir sonrakini gerektirir ama (2) adımı geri döndürülemez: kare almak, 3 − x'in negatif olduğu durumları da ekler. Bu yüzden bulunan değerler kontrol edilmelidir.\n\nx = 1: √4 = 2 ve 3 − 1 = 2, çözümdür.\nx = 6: √9 = 3 ama 3 − 6 = −3, çözüm değildir.\n\nDenklemin tek çözümü x = 1'dir.",
    },
  ]),

  ...turet(U, K, "u7-terim", [
    {
      id: "u7-t-teorem", tip: "mcq", zorluk: 1,
      soru: "Doğruluğu ispatlanabilen bir ifadeye ne ad verilir?",
      secenekler: ["Teorem", "Aksiyom", "Hipotez", "Sanı"],
      dogru: 0,
      aciklama: "Teorem, doğru olduğu gösterilebilen ifadedir. Daha az önemli teoremlere önerme de denir.",
    },
    {
      id: "u7-t-aksiyom", tip: "fill", zorluk: 1,
      soru: "İspat yapılmadan doğru olduğu kabul edilen ifadelere ____ (veya postülat) denir.",
      bosluklar: [["aksiyom", "aksiyomlar", "belit"]],
      aciklama: "Aksiyomlar ispatsız doğru kabul edilir; ispatlar aksiyomları ve daha önce ispatlanmış teoremleri kullanır.",
    },
    {
      id: "u7-t-lem", tip: "mcq", zorluk: 1,
      soru: "Diğer teoremleri ispatlamakta yardımcı olan, kendi başına çok önemli olmayan teoreme ne denir?",
      secenekler: ["Lem", "Sonuç", "Sanı", "Aksiyom"],
      dogru: 0,
      aciklama: "Lem yardımcı teoremdir. Bir teoremden doğrudan çıkan sonuçlara ise sonuç (corollary) denir.",
    },
    {
      id: "u7-t-sani", tip: "tf", zorluk: 1,
      soru: "Sanı (conjecture), doğru olduğu önerilen ama henüz ispatlanmamış bir ifadedir; ispatlanırsa teorem olur.",
      dogru: true,
      aciklama: "Doğru. Sanı ispatlanırsa teorem olur, yanlış olduğu gösterilirse çürür.",
    },
  ]),

  ...turet(U, K, "u7-dogrudan", [
    {
      id: "u7-t-dogrudan-tanim", tip: "mcq", zorluk: 1,
      soru: "p → q'nun doğrudan ispatında ne yapılır?",
      secenekler: ["p'nin doğru olduğu varsayılır ve q'nun doğru olması gerektiği gösterilir.", "q'nun yanlış olduğu varsayılır ve p'nin yanlış olduğu gösterilir.", "p ve ¬q birlikte varsayılıp çelişki elde edilir.", "q'nun doğru olduğu gösterilir; p'ye bakılmaz."],
      dogru: 0,
      aciklama: "Doğrudan ispatta hipotez doğru kabul edilip çıkarım kurallarıyla sonucun doğruluğu gösterilir.",
    },
    {
      id: "u7-t-cift-tanim", tip: "fill", zorluk: 1,
      soru: "n tam sayısı, n = 2k olacak şekilde bir k tam sayısı varsa çifttir; n = ____ olacak şekilde bir k tam sayısı varsa tektir.",
      bosluklar: [["2k + 1", "2k+1"]],
      aciklama: "Tek tam sayı n = 2k + 1 biçimindedir. Bir tam sayı ya çifttir ya tektir, ikisi birden olamaz.",
    },
    {
      id: "u7-t-kare", tip: "yaz", zorluk: 2,
      soru: "n tek tam sayı ise n²'nin de tek olduğunu doğrudan ispatla gösteriniz.",
      aciklama: "n = 2k + 1 olsun. n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1. 2k² + 2k tam sayı olduğundan n² tektir. ∎",
    },
    {
      id: "u7-t-basit", tip: "tf", zorluk: 2,
      soru: "p → q ifadesinde q'nun doğru olduğu gösterilirse, p → q de doğru olur; buna aşikar ispat denir.",
      dogru: true,
      aciklama: "Doğru. Sonuç doğruysa şartlı ifade doğrudur; bu yolla yapılan ispata aşikar ispat denir.",
    },
  ]),

  ...turet(U, K, "u7-zitpozitif", [
    {
      id: "u7-t-zp-tanim", tip: "mcq", zorluk: 1,
      soru: "p → q'yu zıt-pozitif ile ispatlarken hangi ifade ispatlanır?",
      secenekler: ["¬q → ¬p", "q → p", "¬p → ¬q", "p ∧ ¬q"],
      dogru: 0,
      aciklama: "p → q ≡ ¬q → ¬p olduğu için zıt-pozitif ispatlanır. Bu dolaylı ispatın bir türüdür.",
    },
    {
      id: "u7-t-zp-ornek", tip: "yaz", zorluk: 2,
      soru: "n tam sayı olmak üzere \"n² çift ise n çifttir\" ifadesini zıt-pozitif ile ispatlayınız.",
      aciklama: "Zıt-pozitif: n tek ise n² tektir.\nn = 2k + 1 için n² = 2(2k² + 2k) + 1 tektir.\nZıt-pozitif doğru olduğundan asıl ifade de doğrudur. ∎",
    },
    {
      id: "u7-t-ab-n", tip: "yaz", zorluk: 3,
      soru: "n = ab (a, b pozitif tam sayılar) ise a ≤ √n veya b ≤ √n olduğunu ispatlayınız.",
      aciklama: "Zıt-pozitif: a > √n ve b > √n olduğunu varsayalım. O zaman ab > √n · √n = n olur, yani ab ≠ n. Zıt-pozitif doğru olduğundan asıl ifade de doğrudur. ∎",
    },
  ]),

  ...turet(U, K, "u7-celiski", [
    {
      id: "u7-t-celiski-tanim", tip: "mcq", zorluk: 1,
      soru: "p'yi çelişki ile ispatlarken hangi adım atılır?",
      secenekler: ["¬p doğru varsayılır ve bir çelişkiye ulaşılır.", "p doğru varsayılır ve buradan q gösterilir.", "¬q doğru varsayılır ve buradan ¬p gösterilir.", "p için tek bir örnek bulunup gösterilir."],
      dogru: 0,
      aciklama: "¬p → (r ∧ ¬r) doğruysa ¬p yanlıştır, yani p doğrudur.",
    },
    {
      id: "u7-t-kok2", tip: "yaz", zorluk: 3,
      soru: "√2'nin irrasyonel olduğunu çelişki ile ispatlayınız.",
      aciklama: "√2'nin rasyonel olduğunu varsayalım: √2 = a/b, a ve b ortak çarpanı olmayan tam sayılar, b ≠ 0.\n\n2 = a²/b², yani a² = 2b². a² çift olduğundan a çifttir: a = 2c. O zaman 4c² = 2b², yani b² = 2c²; b² çift olduğundan b de çifttir.\n\na ve b'nin ikisi de 2'ye bölünür; bu, ortak çarpanları olmamasıyla çelişir. Demek ki √2 irrasyoneldir. ∎",
    },
    {
      id: "u7-t-gun", tip: "fill", zorluk: 2,
      soru: "Herhangi 22 gün seçildiğinde, en az kaç tanesinin haftanın aynı gününe düştüğü çelişki ile ispatlanabilir?",
      bosluklar: [["4", "dört"]],
      aciklama: "Kitaptaki örnek: her güne en fazla 3 gün düşseydi toplam en fazla 7 · 3 = 21 gün olurdu; 22 ile çelişir. En az 4 gün aynı haftanın gününe düşer.",
    },
  ]),

  ...turet(U, K, "u7-cift", [
    {
      id: "u7-t-cift-yon", tip: "mcq", zorluk: 1,
      soru: "p ↔ q biçimindeki bir teoremi ispatlamak için ne gösterilmelidir?",
      secenekler: ["p → q ve q → p", "Yalnız p → q", "p ∧ q", "¬p → ¬q ve ¬q → ¬p'den yalnız biri"],
      dogru: 0,
      aciklama: "p ↔ q ≡ (p → q) ∧ (q → p); iki yön ayrı ayrı ispatlanır.",
    },
    {
      id: "u7-t-hata-bolme", tip: "yaz", zorluk: 3,
      soru: "Aşağıdaki \"ispat\"ta 1 = 2 elde ediliyor. Hangi adım hatalıdır?\n\n1. a = b\n2. a² = ab\n3. a² − b² = ab − b²\n4. (a − b)(a + b) = b(a − b)\n5. a + b = b\n6. 2b = b\n7. 2 = 1",
      aciklama: "5. adım hatalıdır. 4. adımdan 5. adıma geçerken iki taraf (a − b)'ye bölünmüştür; ama a = b olduğundan a − b = 0'dır ve sıfıra bölme yapılamaz.",
    },
    {
      id: "u7-t-dongusel", tip: "tf", zorluk: 2,
      soru: "İspatlanmak istenen ifadeye denk bir ifadeyi ispatın bir adımında kullanmak, \"döngüsel mantık\" (soruyu soru ile cevaplamak) denilen bir hatadır.",
      dogru: true,
      aciklama: "Doğru. Bu hata, ispatlanacak şeyin doğru olduğunu baştan varsaymaktır.",
    },
  ]),
];
