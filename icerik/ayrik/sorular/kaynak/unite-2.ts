// 2. ünite: Kesim 1.2 Önermeli Mantık Uygulamaları

import { kitap, turet, type Soru } from "./tipler.ts";

const U = 2;
const K = "u2";
const B = "1.2";

const SOVALYE = "Şövalyeler her zaman doğruyu, sahtekarlar her zaman yalan söyler.";

export const unite2: Soru[] = [
  ...kitap(U, K, B, [
    {
      id: "u2-k1", no: "1", tip: "fill", kavram: "u2-ceviri", zorluk: 2, semboller: true,
      soru: "\"Eğer bir yönetici değilseniz korunumlu Wikipedia alanlarını güncelleyemezsiniz.\" cümlesini e: \"Bir Wikipedia alanını güncelleyebilirsiniz\" ve a: \"Siz bir yöneticisiniz\" önermeleriyle yazınız.",
      bosluklar: [["¬a → ¬e", "e → a"]],
      aciklama: "Hipotez \"yönetici değilsiniz\" (¬a), sonuç \"güncelleyemezsiniz\" (¬e): ¬a → ¬e. Zıt-pozitifi e → a da aynı anlamdadır.",
    },
    {
      id: "u2-k3", no: "3", tip: "fill", kavram: "u2-ceviri", zorluk: 3, semboller: true,
      soru: "\"Mezun olabilmeniz için müfredatın tüm gereksinimlerini tamamlamış olmanız, üniversiteye herhangi bir borcunuz olmaması ve kütüphaneden almış olduğunuz tüm kitapların iade edilmiş olması gerekmektedir.\"\n\ng: \"Mezun olabilirsiniz\", m: \"Üniversiteye borcunuz var\", r: \"Müfredatın tüm gereksinimlerini tamamlamış durumdasınız\", b: \"Kütüphaneye iade etmemiş olduğunuz en az bir kitap bulunmaktadır\" önermeleriyle yazınız.",
      bosluklar: [["g → (r ∧ ¬m ∧ ¬b)", "g → (r ∧ ¬b ∧ ¬m)", "g → (¬m ∧ r ∧ ¬b)"]],
      aciklama: "\"Mezun olmak için ... gereklidir\" g → (şartlar) demektir: g → (r ∧ ¬m ∧ ¬b).",
    },
    {
      id: "u2-k7", no: "7", tip: "fill", kavram: "u2-sistem", zorluk: 2, semboller: true,
      soru: "p: \"Mesaj virüslere karşı taranır\", q: \"Mesaj bilinmeyen bir sistemden gönderildi\" olsun.\n\na) Mesaj bilinmeyen bir sistemden gönderildiği zaman virüsler için taranır.\nb) Mesaj bilinmeyen bir sistemden gönderildi ancak virüs taramasından geçmedi.\nd) Bir mesaj bilinmeyen bir sistemden gönderilmediği zaman virüs taraması yapılmaz.\n\nBoşluk 1: a), Boşluk 2: b), Boşluk 3: d)",
      bosluklar: [["q → p"], ["q ∧ ¬p", "¬p ∧ q"], ["¬q → ¬p"]],
      aciklama: "a) q → p. b) q ∧ ¬p (\"ancak\" ve demektir). d) ¬q → ¬p.",
    },
    {
      id: "u2-k9", no: "9", tip: "tf", kavram: "u2-sistem", zorluk: 3,
      soru: "\"Sistem ancak ve ancak normal çalışıyorsa çok kullanıcılı durumda olabilir. Sistem normal olarak çalışıyorsa, çekirdek çalışıyor demektir. Çekirdek çalışmıyor veya sistem kesme modunda. Sistem çok kullanıcılı durumda değilse, o zaman kesme modundadır. Sistem kesme modunda değildir.\"\n\nBu sistem özellikleri tutarlıdır.",
      dogru: false,
      aciklama: "Yanlış, tutarsızdır. Son özellikten sistem kesme modunda değil. \"Çekirdek çalışmıyor veya kesme modunda\" için çekirdek çalışmıyor olmalı; o zaman sistem normal çalışmıyor, dolayısıyla çok kullanıcılı da değil. Bu durumda \"çok kullanıcılı değilse kesme modundadır\" özelliği kesme modunu gerektirir; çelişki.",
    },
    {
      id: "u2-k11", no: "11", tip: "yaz", kavram: "u2-sistem", zorluk: 3,
      soru: "Bu sistem özellikleri tutarlı mı? \"Eğer yönlendirici yeni adres alanını destekliyorsa komşu sisteme paketlerini gönderebilir. Yönlendiricinin yeni adres alanını desteklemek için üzerinde son yazılım sürümünün yüklü olması gereklidir. Yönlendiricide en son yazılım sürümü yüklü ise yönlendirici komşu sisteme paketlerini gönderebilir. Yönlendirici yeni adres alanını desteklemiyor.\"",
      aciklama: "a: yeni adres alanını destekler, p: paket gönderebilir, s: son sürüm yüklü olsun. Özellikler: a → p, a → s, s → p, ¬a.\n\na yanlış olmalı. a yanlışken ilk iki şartlı ifade doğrudur. s → p için örneğin s ve p'yi doğru (ya da ikisini de yanlış) seçmek yeter.\n\nÖrnek: a = Y, s = D, p = D bütün özellikleri doğru yapar; özellikler tutarlıdır.",
    },
    {
      id: "u2-k13", no: "13", tip: "yaz", kavram: "u2-arama", zorluk: 2,
      soru: "New Jersey plajları hakkındaki Web sayfalarını aramak için hangi Boole aramasını kullanırsınız? İngiliz Kanalı üzerinde bulunan Jersey adası üzerindeki plajlar hakkındaki Web sayfalarını bulmak isterseniz ne yaparsınız?",
      aciklama: "New Jersey plajları için: NEW AND JERSEY AND BEACHES (Türkçe: YENİ AND JERSEY AND PLAJ).\n\nJersey adasındaki plajlar için New Jersey sayfalarını dışlamak gerekir: (JERSEY AND BEACHES) NOT NEW.",
    },
    {
      id: "u2-k19", no: "19", tip: "mcq", kavram: "u2-bulmaca", zorluk: 2,
      soru: `${SOVALYE} A "En az birimiz sahtekardır" diyor ve B hiçbir şey söylemiyor. A ve B hangi türdendir?`,
      secenekler: ["A şövalye, B sahtekar", "A sahtekar, B şövalye", "İkisi de şövalye", "İkisi de sahtekar"],
      dogru: 0,
      aciklama: "A sahtekar olsaydı söylediği yanlış olurdu, yani ikisi de şövalye olurdu; bu A'nın sahtekar olmasıyla çelişir. Demek A şövalye, söylediği doğru, B sahtekardır.",
    },
    {
      id: "u2-k21", no: "21", tip: "mcq", kavram: "u2-bulmaca", zorluk: 2,
      soru: `${SOVALYE} A "Ben bir sahtekarım veya B bir şövalyedir" diyor ve B hiçbir şey söylemiyor. A ve B hangi türdendir?`,
      secenekler: ["İkisi de şövalye", "A şövalye, B sahtekar", "A sahtekar, B şövalye", "İkisi de sahtekar"],
      dogru: 0,
      aciklama: "A sahtekar olsaydı \"ben sahtekarım\" kısmı doğru olur, cümle doğru olurdu; çelişki. A şövalyedir; o zaman \"ben sahtekarım\" yanlış olduğundan \"B şövalyedir\" doğru olmalıdır.",
    },
    {
      id: "u2-k25", no: "25", tip: "yaz", kavram: "u2-bulmaca", zorluk: 3,
      soru: "Bir adada her zaman doğruyu söyleyen şövalyeler, her zaman yalan söyleyen sahtekarlar ve doğruyu da yalanı da söyleyebilen casuslar yaşıyor. A, B ve C'den biri şövalye, biri sahtekar, biri casustur. A \"Ben şövalyeyim\", B \"Ben sahtekarım\", C \"B şövalyedir\" diyor. Kim hangi türdendir?",
      aciklama: "B şövalye olamaz (\"sahtekarım\" derse yalan söylemiş olur), sahtekar da olamaz (doğru söylemiş olur). B casustur.\n\nC'nin \"B şövalyedir\" sözü yanlıştır, yani C şövalye değildir; geriye sahtekar kalır.\n\nA şövalyedir; \"Ben şövalyeyim\" sözü de doğrudur. Tek çözüm: A şövalye, B casus, C sahtekar.",
    },
    {
      id: "u2-k37", no: "37", tip: "mcq", kavram: "u2-bulmaca", zorluk: 3,
      soru: "Birinci kapıdaki tabelada \"Bu odada bir kız bulunmaktadır, diğer odada da bir kaplan bulunmaktadır.\" yazıyor; ikinci kapıdaki tabelada \"Odalardan birinde bir kız, diğerinde de bir kaplan vardır.\" yazıyor. Tabelalardan biri doğru, diğeri yanlıştır. Kız hangi odadadır?",
      secenekler: ["İkinci odada", "Birinci odada", "İki odada da", "Hiçbir odada"],
      dogru: 0,
      aciklama: "Birinci tabela doğru olsaydı ikinci tabela da doğru olurdu; ikisi birden doğru olamaz. O halde ikinci tabela doğru, birinci yanlıştır: bir odada kız, diğerinde kaplan var ve kız birinci odada değil. Kız ikinci odadadır.",
    },
    {
      id: "u2-k42", no: "42", tip: "yaz", kavram: "u2-devre", zorluk: 2,
      soru: "Tersleyiciler, VEYA kapıları ve VE kapılarını kullanarak p, q ve r bitleri girdi olarak verildiğinde (p ∧ ¬r) ∨ (¬q ∧ r) çıktısı üreten bileşik devreyi tarif ediniz.",
      aciklama: "1. r'yi bir tersleyiciden geçir: ¬r. p ile ¬r'yi bir VE kapısına ver: p ∧ ¬r.\n2. q'yu bir tersleyiciden geçir: ¬q. ¬q ile r'yi ikinci bir VE kapısına ver: ¬q ∧ r.\n3. İki VE kapısının çıktısını bir VEYA kapısına ver: (p ∧ ¬r) ∨ (¬q ∧ r).\n\nToplam: 2 tersleyici, 2 VE kapısı, 1 VEYA kapısı.",
    },
  ]),

  ...turet(U, K, "u2-ceviri", [
    {
      id: "u2-t-film", tip: "fill", zorluk: 2, semboller: true,
      soru: "\"Filmi sadece 18 yaşından büyükseniz veya anne/babanızdan izin aldıysanız izleyebilirsiniz.\" cümlesini m: \"Filmi izleyebilirsiniz\", e: \"18 yaşından büyüksünüz\", p: \"Anne/babanızdan izin aldınız\" ile yazınız.",
      bosluklar: [["m → (e ∨ p)", "m → (p ∨ e)"]],
      aciklama: "\"m sadece A ise\" m → A demektir: m → (e ∨ p).",
    },
    {
      id: "u2-t-hata", tip: "mcq", zorluk: 2,
      soru: "\"Boyunuz 1,2 metreden kısaysa, 16 yaşından büyük değilseniz hız trenine binemezsiniz.\" cümlesi q: \"Hız trenine binebilirsiniz\", r: \"Boyunuz 1,2 metreden kısa\", s: \"16 yaşından büyüksünüz\" ile nasıl yazılır?",
      secenekler: ["(r ∧ ¬s) → ¬q", "(r ∨ ¬s) → ¬q", "q → (r ∧ ¬s)", "(r ∧ s) → q"],
      dogru: 0,
      aciklama: "Kitaptaki örnek: iki şart birlikte (boy kısa ve 16'dan büyük değil) gerçekleşince binemezsiniz: (r ∧ ¬s) → ¬q.",
    },
    {
      id: "u2-t-belirsiz", tip: "tf", zorluk: 1,
      soru: "Doğal dildeki cümleler bazen belirsiz olduğundan, onları mantık ifadesine çevirirken cümlenin anlamı hakkında makul varsayımlar yapmak gerekebilir.",
      dogru: true,
      aciklama: "Doğru. Kitap, çeviride belirsizliği gidermek için anlam üzerine varsayım yapmak gerektiğini vurgular.",
    },
  ]),

  ...turet(U, K, "u2-sistem", [
    {
      id: "u2-t-tutarli-tanim", tip: "mcq", zorluk: 1,
      soru: "Sistem özellikleri hangi durumda tutarlıdır?",
      secenekler: ["Hepsini aynı anda doğru yapan bir atama varsa", "Özelliklerin hepsi şartlı ifade biçimindeyse", "Her bir özellik tek başına bir totolojiyse", "Hiçbir özellikte değil bağlacı kullanılmıyorsa"],
      dogru: 0,
      aciklama: "Özellikler, hepsini birden doğru yapan en az bir değer ataması varsa tutarlıdır.",
    },
    {
      id: "u2-t-tutarsiz", tip: "tf", zorluk: 2,
      soru: "\"p ∨ q\", \"¬p\" ve \"¬q\" özelliklerinden oluşan sistem tutarlıdır.",
      dogru: false,
      aciklama: "Yanlış. ¬p ve ¬q doğru olmak için p ve q yanlış olmalı; o zaman p ∨ q yanlış olur. Hepsini doğru yapan atama yoktur.",
    },
    {
      id: "u2-t-tutarli-ekle", tip: "yaz", zorluk: 3,
      soru: "\"Tanılama mesajı tampona kaydedilir veya yeniden gönderilir.\", \"Tanılama mesajı tampona kaydedilmez.\", \"Tanılama mesajı tampona kaydedilirse yeniden gönderilir.\" özellikleri tutarlı mıdır? Sisteme \"Tanılama mesajı yeniden gönderilmez.\" eklenirse ne olur?",
      aciklama: "p: tampona kaydedilir, q: yeniden gönderilir. Özellikler: p ∨ q, ¬p, p → q.\n\n¬p için p = Y. O zaman p ∨ q için q = D. p → q de doğrudur. Atama p = Y, q = D tek çözümdür; özellikler tutarlıdır.\n\n¬q eklenirse q = Y olmak zorunda kalır ve p ∨ q yanlış olur. Yeni sistem tutarsızdır.",
    },
  ]),

  ...turet(U, K, "u2-arama", [
    {
      id: "u2-t-and", tip: "mcq", zorluk: 1,
      soru: "Boolean aramada iki terimi de içeren sayfaları bulmak için hangi bağlaç kullanılır?",
      secenekler: ["AND", "OR", "NOT", "XOR"],
      dogru: 0,
      aciklama: "AND (ve) iki terimi birlikte içeren kayıtları getirir; OR en az birini, NOT ise bir terimi dışlar.",
    },
    {
      id: "u2-t-not", tip: "fill", zorluk: 2,
      soru: "\"Anadolu'daki yürüyüş parkurları\" sayfalarını isteyip Batı Anadolu'dakileri dışlamak için arama: (ANADOLU AND YÜRÜYÜŞ AND PARKUR) ____ BATI. Boşluğa hangi Boolean bağlaç gelir?",
      bosluklar: [["NOT", "DEĞİL", "AND NOT"]],
      aciklama: "Bir terimi içeren sayfaları dışlamak için NOT kullanılır.",
    },
  ]),

  ...turet(U, K, "u2-bulmaca", [
    {
      id: "u2-t-ikisi-sovalye", tip: "mcq", zorluk: 2,
      soru: `${SOVALYE} A "B bir şövalyedir" diyor, B "İkimiz farklı türdeniz" diyor. A ve B hangi türdendir?`,
      secenekler: ["İkisi de sahtekar", "İkisi de şövalye", "A şövalye, B sahtekar", "A sahtekar, B şövalye"],
      dogru: 0,
      aciklama: "Kitaptaki örnek. A şövalye olsaydı B de şövalye olurdu; ama B'nin \"farklı türdeniz\" sözü yalan olurdu. A sahtekarsa B sahtekardır ve B'nin sözü yalan olur; tutarlı. İkisi de sahtekardır.",
    },
    {
      id: "u2-t-camur", tip: "yaz", zorluk: 3,
      soru: "İki çocuğun alnı çamurlanmıştır; her çocuk diğerinin alnını görür ama kendininkini göremez. Baba \"En az biriniz çamurlu\" der ve iki kez \"Alnınız çamurlu mu?\" diye sorar. İlk soruda ikisi de \"Bilmiyorum\" der. İkinci soruda ne derler, neden?",
      aciklama: "İkisi de \"Evet\" der.\n\nBir çocuk yalnız kendisi temiz olsaydı, diğer çocuk tek çamurlu kişinin kendisi olduğunu ilk soruda anlardı. İlk soruda ikisi de \"bilmiyorum\" dediği için, her çocuk diğerinin de kendisini çamurlu gördüğü sonucuna varır.",
    },
  ]),

  ...turet(U, K, "u2-devre", [
    {
      id: "u2-t-tersleyici", tip: "mcq", zorluk: 1,
      soru: "Girdi olarak aldığı bitin değilini üreten mantık kapısı hangisidir?",
      secenekler: ["Tersleyici", "VE kapısı", "VEYA kapısı", "Dışlayıcı VEYA kapısı"],
      dogru: 0,
      aciklama: "Tersleyici (DEĞİL kapısı) p girdisinden ¬p çıktısını üretir.",
    },
    {
      id: "u2-t-devre-cikti", tip: "fill", zorluk: 2, semboller: true,
      soru: "p ve ¬q bir VE kapısına, çıkan sonuç ile r bir VEYA kapısına giriyor. Devrenin çıktısını yazınız.",
      bosluklar: [["(p ∧ ¬q) ∨ r", "r ∨ (p ∧ ¬q)"]],
      aciklama: "VE kapısı p ∧ ¬q üretir; VEYA kapısı bunu r ile birleştirir: (p ∧ ¬q) ∨ r.",
    },
    {
      id: "u2-t-devre-deger", tip: "fill", zorluk: 2,
      soru: "(p ∧ ¬r) ∨ (¬q ∧ r) devresine p = 1, q = 0, r = 1 verilirse çıktı kaç olur?",
      bosluklar: [["1"]],
      aciklama: "p ∧ ¬r = 1 ∧ 0 = 0; ¬q ∧ r = 1 ∧ 1 = 1; 0 ∨ 1 = 1.",
    },
  ]),
];
