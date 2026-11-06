// 5. ünite: Kesim 1.5 İç İçe Niceleyiciler

import { kitap, turet, type Soru } from "./tipler.ts";

const U = 5;
const K = "u5";
const B = "1.5";

const REEL = "Tanım kümesi tüm reel sayılar olsun.";

export const unite5: Soru[] = [
  ...kitap(U, K, B, [
    {
      id: "u5-k1", no: "1", tip: "yaz", kavram: "u5-ceviri", zorluk: 2,
      soru: `Aşağıdaki ifadeleri Türkçeye tercüme ediniz. (Her değişkenin tanım bölgesi tüm reel sayılar kümesidir.)\n\na) ∀x∃y(x < y)\nb) ∀x∀y(((x ≥ 0) ∧ (y ≥ 0)) → (xy ≥ 0))\nc) ∀x∀y∃z(xy = z)`,
      aciklama: "a) Her x reel sayısı için x'ten büyük bir y reel sayısı vardır.\nb) Her x ve y reel sayısı için x ve y negatif değilse çarpımları da negatif değildir.\nc) Her x ve y reel sayısı için xy = z olacak şekilde bir z reel sayısı vardır.",
    },
    {
      id: "u5-k3", no: "3", tip: "yaz", kavram: "u5-ceviri", zorluk: 2,
      soru: "Q(x, y) \"x, y'ye bir mesaj göndermiştir\" olsun; x ve y'nin tanım kümesi sınıfınızdaki öğrencilerdir. Aşağıdakileri Türkçeye çeviriniz.\n\nb) ∃x∀yQ(x, y)\nc) ∀x∃yQ(x, y)\nd) ∃y∀xQ(x, y)\ne) ∀y∃xQ(x, y)",
      aciklama: "b) Sınıfta, sınıftaki her öğrenciye mesaj göndermiş bir öğrenci vardır.\nc) Sınıftaki her öğrenci sınıftan en az bir öğrenciye mesaj göndermiştir.\nd) Sınıfta, sınıftaki her öğrencinin mesaj gönderdiği bir öğrenci vardır.\ne) Sınıftaki her öğrenciye sınıftan en az bir öğrenci mesaj göndermiştir.",
    },
    {
      id: "u5-k9", no: "9", tip: "fill", kavram: "u5-ceviri", zorluk: 2, semboller: true,
      soru: "L(x, y) \"x, y'yi sever\" olsun; tanım kümesi dünyadaki tüm insanlardır.\n\nb) Herkes birilerini sever.\nc) Herkesin sevdiği biri vardır.\nd) Hiç kimse herkesi sevmez.\n\nBoşluk 1: b), Boşluk 2: c), Boşluk 3: d)",
      bosluklar: [["∀x∃yL(x, y)"], ["∃y∀xL(x, y)"], ["∀x∃y¬L(x, y)", "¬∃x∀yL(x, y)"]],
      aciklama: "b) ∀x∃yL(x, y). c) ∃y∀xL(x, y): tek bir y herkes tarafından sevilir. d) \"Herkesi seven biri yoktur\": ¬∃x∀yL(x, y) ≡ ∀x∃y¬L(x, y).",
    },
    {
      id: "u5-k15", no: "15", tip: "fill", kavram: "u5-ceviri", zorluk: 2, semboller: true,
      soru: "P(x, y) \"x, y dersini almıştır\" olsun; x'in tanım kümesi bu sınıftaki öğrenciler, y'ninki bilgisayar bilimleri dersleridir. \"Bu sınıftaki her öğrenci en az bir bilgisayar bilimleri dersi almıştır\" ifadesini yazınız.",
      bosluklar: [["∀x∃yP(x, y)"]],
      aciklama: "Her x için (en az) bir y vardır: ∀x∃yP(x, y).",
    },
  ]),

  ...turet(U, K, "u5-sira", [
    {
      id: "u5-t-tamsayi-dyy", tip: "fill", zorluk: 2,
      soru: "Tanım kümesi tam sayılar olsun. Aşağıdakilerin doğruluk değerlerini (D/Y) yazınız.\n\nBoşluk 1: ∀x∃y(x + y = 0), Boşluk 2: ∃y∀x(x + y = 0), Boşluk 3: ∃x∀y(xy = 0), Boşluk 4: ∀x∃y(x + y = 1)",
      bosluklar: [["D", "doğru"], ["Y", "yanlış"], ["D", "doğru"], ["D", "doğru"]],
      aciklama: "1) Her x için y = −x seçilir. 2) Her x için aynı y işe yaramaz. 3) x = 0 her y için xy = 0 yapar. 4) Her x için y = 1 − x seçilir.",
    },
    {
      id: "u5-t-sira-onemli", tip: "tf", zorluk: 1,
      soru: "∀x∃yP(x, y) ve ∃y∀xP(x, y) ifadeleri her zaman aynı anlamdadır.",
      dogru: false,
      aciklama: "Yanlış. Birincisinde y, x'e göre değişebilir; ikincisinde tek bir y bütün x'ler için çalışmalıdır. Farklı niceleyicilerde sıra önemlidir.",
    },
    {
      id: "u5-t-ayni-niceleyici", tip: "tf", zorluk: 1,
      soru: "∀x∀yP(x, y) ile ∀y∀xP(x, y) aynı doğruluk değerine sahiptir.",
      dogru: true,
      aciklama: "Doğru. Niceleyicilerin hepsi evrensel (ya da hepsi varoluşsal) ise sıranın önemi yoktur.",
    },
    {
      id: "u5-t-gerektirir", tip: "mcq", zorluk: 2,
      soru: "Aşağıdaki gerektirmelerden hangisi her zaman doğrudur?",
      secenekler: ["∃y∀xP(x, y) → ∀x∃yP(x, y)", "∀x∃yP(x, y) → ∃y∀xP(x, y)", "∃x∃yP(x, y) → ∀x∀yP(x, y)", "∀x∃yP(x, y) → ∀x∀yP(x, y)"],
      dogru: 0,
      aciklama: "Tüm x'ler için çalışan bir y varsa, her x için o y seçilebilir. Ters yön genelde doğru değildir (ör. x + y = 0).",
    },
    {
      id: "u5-t-xy-carpim", tip: "mcq", zorluk: 2,
      soru: "Tanım kümesi reel sayılar olsun. Aşağıdakilerden hangisi doğrudur?",
      secenekler: ["∀x∃y(xy = 0)", "∀x∃y(xy = 1)", "∃y∀x(x + y > x²)", "∀x∀y(x + y = y + 1)"],
      dogru: 0,
      aciklama: "Her x için y = 0 seçilirse xy = 0 olur. ∀x∃y(xy = 1) x = 0 için sağlanmaz.",
    },
    {
      id: "u5-t-dongu", tip: "mcq", zorluk: 2,
      soru: "Kitapta iç içe niceleyiciler hangi programlama yapısına benzetilir?",
      secenekler: ["İç içe döngüler", "Özyinelemeli fonksiyonlar", "Koşullu dallanmalar", "Diziler"],
      dogru: 0,
      aciklama: "∀x∀y için dış döngü x'ler, iç döngü y'ler üzerinde dolaşır; ∀x∃y için iç döngüde bir y bulunca durulur.",
    },
    {
      id: "u5-t-toplam", tip: "fill", zorluk: 2,
      soru: "Tanım kümesi reel sayılar olmak üzere ∃x∀y(x + y = y) ifadesinin doğruluk değeri nedir? (D/Y)",
      bosluklar: [["D", "doğru"]],
      aciklama: "x = 0 her y için 0 + y = y yapar; ifade doğrudur.",
    },
  ]),

  ...turet(U, K, "u5-ceviri", [
    {
      id: "u5-t-toplam-degisme", tip: "fill", zorluk: 2, semboller: true,
      soru: `${REEL} "İki reel sayının toplamı değişme özelliğine sahiptir" ifadesini iç içe niceleyicilerle yazınız.`,
      bosluklar: [["∀x∀y(x + y = y + x)"]],
      aciklama: "∀x∀y(x + y = y + x).",
    },
    {
      id: "u5-t-toplamsal-ters", tip: "fill", zorluk: 2, semboller: true,
      soru: `${REEL} "Her reel sayının bir toplamsal tersi vardır" ifadesini yazınız.`,
      bosluklar: [["∀x∃y(x + y = 0)"]],
      aciklama: "Her x için x + y = 0 yapan bir y vardır: ∀x∃y(x + y = 0).",
    },
    {
      id: "u5-t-iki-negatif", tip: "mcq", zorluk: 2,
      soru: "Tanım kümesi reel sayılar olmak üzere ∀x∀y((x < 0) ∧ (y < 0) → (xy > 0)) ifadesi Türkçede ne der?",
      secenekler: ["İki negatif reel sayının çarpımı pozitiftir.", "Bazı negatif reel sayıların çarpımı pozitiftir.", "Çarpımı pozitif olan iki sayı negatiftir.", "Her reel sayının negatif bir çarpanı vardır."],
      dogru: 0,
      aciklama: "Her x ve y için, ikisi de negatifse çarpım pozitiftir.",
    },
    {
      id: "u5-t-anne", tip: "fill", zorluk: 3, semboller: true,
      soru: "M(x, y) \"x, y'nin annesidir\" olsun; tanım kümesi tüm insanlar. \"Herkesin tam bir annesi vardır\" ifadesini yazınız. (Teklik niceleyicisi ∃! kullanabilirsiniz.)",
      bosluklar: [["∀y∃!xM(x, y)", "∀y∃!x M(x, y)"]],
      aciklama: "Her y için annesi olan tek bir x vardır: ∀y∃!xM(x, y).",
    },
  ]),

  ...turet(U, K, "u5-degil", [
    {
      id: "u5-t-degil-ic", tip: "yaz", zorluk: 2,
      soru: "Değil işaretlerini niceleyicilerin içine taşıyarak (tüm değil işaretleri yüklemin hemen önünde olacak şekilde) aşağıdakilerin değilini yazınız.\n\na) ∀x∃yP(x, y)\nb) ∀y∃xP(x, y)\nc) ∃y∃x(P(x, y) ∧ Q(x, y))",
      aciklama: "Her adımda ¬∀ ≡ ∃¬ ve ¬∃ ≡ ∀¬ uygulanır.\n\na) ¬∀x∃yP(x, y) ≡ ∃x∀y¬P(x, y)\nb) ¬∀y∃xP(x, y) ≡ ∃y∀x¬P(x, y)\nc) ¬∃y∃x(P ∧ Q) ≡ ∀y∀x¬(P(x, y) ∧ Q(x, y)) ≡ ∀y∀x(¬P(x, y) ∨ ¬Q(x, y))",
    },
    {
      id: "u5-t-degil-1", tip: "fill", zorluk: 2, semboller: true,
      soru: "¬∀x∃y(xy = 1) ifadesini, değil işareti niceleyicilerden geçirilmiş biçimde yazınız.",
      bosluklar: [["∃x∀y(xy ≠ 1)", "∃x∀y¬(xy = 1)"]],
      aciklama: "¬∀x∃y ≡ ∃x∀y¬: ∃x∀y(xy ≠ 1). Bu reel sayılarda doğrudur (x = 0).",
    },
    {
      id: "u5-t-degil-2", tip: "mcq", zorluk: 2,
      soru: "\"Dünyadaki her havayolunda uçmuş bir kadın yoktur\" ifadesi ¬∃w∀a∃f(P(w, f) ∧ Q(f, a)) ile yazılır. Değil işareti içeri taşınınca hangi ifade elde edilir?",
      secenekler: ["∀w∃a∀f(¬P(w, f) ∨ ¬Q(f, a))", "∀w∀a∀f(¬P(w, f) ∧ ¬Q(f, a))", "∃w∃a∃f(¬P(w, f) ∨ ¬Q(f, a))", "∀w∃a∃f(¬P(w, f) ∧ Q(f, a))"],
      dogru: 0,
      aciklama: "Her niceleyici tersine döner (∃→∀, ∀→∃), sonra De Morgan ile ¬(P ∧ Q) ≡ ¬P ∨ ¬Q.",
    },
    {
      id: "u5-t-limit", tip: "yaz", zorluk: 3,
      soru: "\"Her x için x'ten büyük bir y vardır\" ifadesini (tanım kümesi reel sayılar) niceleyicilerle yazın, değilini alın ve değilin anlamını Türkçe söyleyin. Hangisi doğrudur?",
      aciklama: "İfade: ∀x∃y(y > x).\nDeğili: ∃x∀y(y ≤ x), yani \"Bütün reel sayılardan büyük ya da eşit olan bir x vardır\" (en büyük reel sayı vardır).\nReel sayılarda en büyük sayı olmadığı için asıl ifade doğru, değili yanlıştır.",
    },
  ]),
];
