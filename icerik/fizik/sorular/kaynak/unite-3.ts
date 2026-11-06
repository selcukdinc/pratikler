// 3. bölüm: Bir boyutta hareket
// Sunu örnekleri metinleriyle; şıklar ve adım adım çözümler bizim. Sayısal sorularda g = 10 m/s².
// Formüller LaTeX ($…$ satır içi, $$…$$ ayrı satır; src/lib/matematik.ts).
// Sunudaki düzeltmeler: Örnek 10 (e) konum −25 m olmalı (sunu 25 m yazmış);
// sunuda iki ayrı "Örnek 13" var, ikincisi "13, s. 32" diye anılır.

import { sunu, turet, type Soru } from "./tipler.ts";

const U = 3;
const K = "u3";

const ORNEK2 = "Bir cismin konumu zamanla $x(t) = 2t^3 - 5t + 20\\ \\mathrm{m}$ şeklinde değişiyor.";
const ORNEK3 = "Bir cismin konumu zamanla $x(t) = t^3 - 5t^2 + 4\\ \\mathrm{m}$ şeklinde değişiyor.";
const ORNEK10 = "Bir taş bir binanın tepesinden düşey ve yukarı yönde $20\\ \\mathrm{m/s}$'lik ilk hızla fırlatılmıştır. Bina $50\\ \\mathrm{m}$ yüksekliğindedir. ($g = 10\\ \\mathrm{m/s^2}$)";
const ORNEK11 = "Yerden $35\\ \\mathrm{m}$ yükseklikteki bir binanın çatısından bir taş yukarı yönde $30\\ \\mathrm{m/s}$ hızla fırlatılıyor. ($g = 10\\ \\mathrm{m/s^2}$)";
const ORNEK12 = "Bir top $15\\ \\mathrm{m/s}$ hızla yerden yukarı doğru fırlatılıyor. ($g = 10\\ \\mathrm{m/s^2}$)";
const ORNEK13B = "Yerden bir top $12\\ \\mathrm{m/s}$ hızla yukarı doğru atıldığı anda, $32\\ \\mathrm{m}$ yükseklikteki bir binanın çatısından ikinci bir top $4\\ \\mathrm{m/s}$ hızla aşağı yönde fırlatılıyor. ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S3-01]]";

export const unite3: Soru[] = [
  ...sunu(U, K, [
    {
      id: "u3-s01", ornek: 1, kavram: "u3-temel", zorluk: 1,
      soru: "$x$ ekseni boyunca hareket eden bir parçacığın konumu $t_i = 1\\ \\mathrm{s}$'de $x_i = 12\\ \\mathrm{m}$ ve $t_s = 3\\ \\mathrm{s}$'de $x_s = 4\\ \\mathrm{m}$'dir. Bu zaman aralığında parçacığın yerdeğiştirmesini ve ortalama hızını bulun.",
      secenekler: ["$\\Delta x = -8\\ \\mathrm{m}$; $\\bar{v} = -4\\ \\mathrm{m/s}$", "$\\Delta x = 8\\ \\mathrm{m}$; $\\bar{v} = 4\\ \\mathrm{m/s}$", "$\\Delta x = -8\\ \\mathrm{m}$; $\\bar{v} = -2{,}7\\ \\mathrm{m/s}$", "$\\Delta x = 16\\ \\mathrm{m}$; $\\bar{v} = 8\\ \\mathrm{m/s}$", "$\\Delta x = -8\\ \\mathrm{m}$; $\\bar{v} = -8\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Yerdeğiştirme son konum eksi ilk konumdur ($\\Delta x = x_s - x_i$); izlenen yola bakmaz, işareti yönü gösterir. Ortalama hız yerdeğiştirmenin geçen süreye oranıdır.",
      adimlar: [
        "**Yerdeğiştirme:** $$\\Delta x = x_s - x_i = 4 - 12 = -8\\ \\mathrm{m}$$ Eksi işaret parçacığın $-x$ yönünde gittiğini söyler.",
        "**Süre:** $$\\Delta t = t_s - t_i = 3 - 1 = 2\\ \\mathrm{s}$$ Süre $3\\ \\mathrm{s}$ değil; saat 1. saniyede başlıyor.",
        "**Ortalama hız:** $$\\bar{v} = \\frac{\\Delta x}{\\Delta t} = \\frac{-8\\ \\mathrm{m}}{2\\ \\mathrm{s}} = -4\\ \\mathrm{m/s}$$",
      ],
    },
    {
      id: "u3-s02a", ornek: 2, parca: "a", kavram: "u3-temel", zorluk: 1,
      soru: `${ORNEK2} Hareketlinin $t = 2\\ \\mathrm{s}$ anındaki konumunu bulun.`,
      secenekler: ["26 m", "36 m", "16 m", "20 m", "46 m"],
      dogru: 0,
      aciklama: "Konum fonksiyonu verildiğinde bir andaki konum, $t$ yerine o anın değerini koyarak bulunur.",
      adimlar: [
        "**$t = 2$ yaz:** $$x(2) = 2 \\cdot 2^3 - 5 \\cdot 2 + 20$$",
        "**Hesapla:** $$x(2) = 16 - 10 + 20 = 26\\ \\mathrm{m}$$",
      ],
    },
    {
      id: "u3-s02b", ornek: 2, parca: "b ve c", kavram: "u3-temel",
      soru: `${ORNEK2} $t = 3\\ \\mathrm{s}$ ve $t = 5\\ \\mathrm{s}$ arası yerdeğiştirmesini ve ortalama hızını bulun.`,
      secenekler: ["$\\Delta x = 186\\ \\mathrm{m}$; $\\bar{v} = 93\\ \\mathrm{m/s}$", "$\\Delta x = 245\\ \\mathrm{m}$; $\\bar{v} = 122{,}5\\ \\mathrm{m/s}$", "$\\Delta x = 186\\ \\mathrm{m}$; $\\bar{v} = 37{,}2\\ \\mathrm{m/s}$", "$\\Delta x = 304\\ \\mathrm{m}$; $\\bar{v} = 152\\ \\mathrm{m/s}$", "$\\Delta x = 59\\ \\mathrm{m}$; $\\bar{v} = 29{,}5\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Önce iki andaki konumu bul, farkını al. Ortalama hız bu farkın süreye bölümüdür; $t = 5$'e bölmek yaygın bir hatadır, süre $5 - 3 = 2\\ \\mathrm{s}$.",
      adimlar: [
        "**$t = 3\\ \\mathrm{s}$'deki konum:** $$x(3) = 2 \\cdot 27 - 15 + 20 = 59\\ \\mathrm{m}$$",
        "**$t = 5\\ \\mathrm{s}$'deki konum:** $$x(5) = 2 \\cdot 125 - 25 + 20 = 245\\ \\mathrm{m}$$",
        "**Yerdeğiştirme:** $$\\Delta x = x(5) - x(3) = 245 - 59 = 186\\ \\mathrm{m}$$",
        "**Ortalama hız:** $$\\bar{v} = \\frac{\\Delta x}{\\Delta t} = \\frac{186\\ \\mathrm{m}}{(5 - 3)\\ \\mathrm{s}} = 93\\ \\mathrm{m/s}$$",
      ],
    },
    {
      id: "u3-s02c", ornek: 2, parca: "d ve e", kavram: "u3-turev",
      soru: `${ORNEK2} Hızın zamana göre fonksiyonunu ve $t = 4\\ \\mathrm{s}$ anındaki anlık hızı bulun.`,
      secenekler: ["$v(t) = 6t^2 - 5$; $v(4) = 91\\ \\mathrm{m/s}$", "$v(t) = 6t^2 - 5t$; $v(4) = 76\\ \\mathrm{m/s}$", "$v(t) = 2t^2 - 5$; $v(4) = 27\\ \\mathrm{m/s}$", "$v(t) = 6t^2 + 20$; $v(4) = 116\\ \\mathrm{m/s}$", "$v(t) = 6t - 5$; $v(4) = 19\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Anlık hız konumun zamana göre türevidir: $v = \\dfrac{dx}{dt}$. $t^n$'nin türevi $n\\,t^{n-1}$, sabitin türevi sıfırdır.",
      adimlar: [
        "**Terim terim türev al:** $$\\frac{d}{dt}(2t^3) = 6t^2, \\qquad \\frac{d}{dt}(-5t) = -5, \\qquad \\frac{d}{dt}(20) = 0$$",
        "**Hız fonksiyonu:** $$v(t) = 6t^2 - 5\\ \\mathrm{m/s}$$ Sabit $20\\ \\mathrm{m}$ (başlangıç konumu) hıza katkı vermez.",
        "**$t = 4\\ \\mathrm{s}$:** $$v(4) = 6 \\cdot 16 - 5 = 96 - 5 = 91\\ \\mathrm{m/s}$$",
      ],
    },
    {
      id: "u3-s02d", ornek: 2, parca: "f", kavram: "u3-turev", zorluk: 1,
      soru: `${ORNEK2} İvmenin zamana göre fonksiyonunu bulun.`,
      secenekler: ["$a(t) = 12t\\ \\mathrm{m/s^2}$", "$a(t) = 6t^2\\ \\mathrm{m/s^2}$", "$a(t) = 12\\ \\mathrm{m/s^2}$", "$a(t) = 12t - 5\\ \\mathrm{m/s^2}$", "$a(t) = 6t\\ \\mathrm{m/s^2}$"],
      dogru: 0,
      aciklama: "İvme hızın zamana göre türevidir: $a = \\dfrac{dv}{dt} = \\dfrac{d^2x}{dt^2}$ (konumun ikinci türevi).",
      adimlar: [
        "**Hız:** $v(t) = 6t^2 - 5$ (önceki parçadan).",
        "**Türev:** $$a(t) = \\frac{d}{dt}(6t^2 - 5) = 12t\\ \\mathrm{m/s^2}$$",
        "**Yorum:** İvme zamanla artıyor; bu hareket sabit ivmeli değildir, o yüzden sabit ivme formülleri burada kullanılamaz.",
      ],
    },
    {
      id: "u3-s03a", ornek: 3, parca: "a", kavram: "u3-turev", zorluk: 1,
      soru: `${ORNEK3} Hız ve ivmenin zamana göre fonksiyonlarını bulun.`,
      secenekler: ["$v = 3t^2 - 10t$; $a = 6t - 10$", "$v = 3t^2 - 5t$; $a = 6t - 5$", "$v = t^2 - 10t$; $a = 2t - 10$", "$v = 3t^2 - 10t + 4$; $a = 6t - 10$", "$v = 3t^2 - 10$; $a = 6t$"],
      dogru: 0,
      aciklama: "$v = \\dfrac{dx}{dt}$ ve $a = \\dfrac{dv}{dt}$. Türev alırken her terimi ayrı ayrı türevle; sabit terim ($4$) düşer.",
      adimlar: [
        "**Hız:** $$v(t) = \\frac{d}{dt}(t^3 - 5t^2 + 4) = 3t^2 - 10t\\ \\mathrm{m/s}$$",
        "**İvme:** $$a(t) = \\frac{d}{dt}(3t^2 - 10t) = 6t - 10\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u3-s03b", ornek: 3, parca: "b", kavram: "u3-turev",
      soru: `${ORNEK3} Cismin $t = 1\\ \\mathrm{s}$ ve $t = 5\\ \\mathrm{s}$ anındaki hızlarını bulun.`,
      secenekler: ["$v(1) = -7\\ \\mathrm{m/s}$; $v(5) = 25\\ \\mathrm{m/s}$", "$v(1) = 7\\ \\mathrm{m/s}$; $v(5) = 25\\ \\mathrm{m/s}$", "$v(1) = -7\\ \\mathrm{m/s}$; $v(5) = 75\\ \\mathrm{m/s}$", "$v(1) = -4\\ \\mathrm{m/s}$; $v(5) = 20\\ \\mathrm{m/s}$", "$v(1) = 0$; $v(5) = 4\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Hız fonksiyonu $v(t) = 3t^2 - 10t$'ye $t$ değerlerini koy. Eksi hız, cismin o anda $-x$ yönünde gittiğini gösterir.",
      adimlar: [
        "**$t = 1\\ \\mathrm{s}$:** $$v(1) = 3 \\cdot 1 - 10 \\cdot 1 = -7\\ \\mathrm{m/s}$$ Cisim $-x$ yönünde gidiyor.",
        "**$t = 5\\ \\mathrm{s}$:** $$v(5) = 3 \\cdot 25 - 10 \\cdot 5 = 75 - 50 = 25\\ \\mathrm{m/s}$$ Cisim $+x$ yönünde gidiyor.",
      ],
    },
    {
      id: "u3-s03c", ornek: 3, parca: "c", kavram: "u3-temel",
      soru: `${ORNEK3} Cismin $t = 1\\ \\mathrm{s}$ ile $t = 5\\ \\mathrm{s}$ zaman aralığındaki ortalama ivmesini hesaplayın.`,
      secenekler: ["8 m/s²", "4,5 m/s²", "6 m/s²", "32 m/s²", "−8 m/s²"],
      dogru: 0,
      aciklama: "Ortalama ivme hız değişiminin süreye oranıdır: $\\bar{a} = \\Delta v/\\Delta t$. Ani ivmelerin ortalaması alınmaz, uçlardaki hızlar kullanılır.",
      adimlar: [
        "**Hız değişimi:** $$\\Delta v = v(5) - v(1) = 25 - (-7) = 32\\ \\mathrm{m/s}$$ Eksinin eksisi artı olur; burası en sık hata yapılan yer.",
        "**Süre:** $$\\Delta t = 5 - 1 = 4\\ \\mathrm{s}$$",
        "**Ortalama ivme:** $$\\bar{a} = \\frac{\\Delta v}{\\Delta t} = \\frac{32}{4} = 8\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u3-s03d", ornek: 3, parca: "d", kavram: "u3-turev",
      soru: `${ORNEK3} Cismin $t = 1\\ \\mathrm{s}$ ve $t = 5\\ \\mathrm{s}$ anındaki ivmelerini bulun.`,
      secenekler: ["$a(1) = -4\\ \\mathrm{m/s^2}$; $a(5) = 20\\ \\mathrm{m/s^2}$", "$a(1) = 4\\ \\mathrm{m/s^2}$; $a(5) = 20\\ \\mathrm{m/s^2}$", "$a(1) = -4\\ \\mathrm{m/s^2}$; $a(5) = 30\\ \\mathrm{m/s^2}$", "$a(1) = -10\\ \\mathrm{m/s^2}$; $a(5) = 20\\ \\mathrm{m/s^2}$", "$a(1) = 8\\ \\mathrm{m/s^2}$; $a(5) = 8\\ \\mathrm{m/s^2}$"],
      dogru: 0,
      aciklama: "Ani ivme, ivme fonksiyonu $a(t) = 6t - 10$'un o andaki değeridir. Sonucu ortalama ivmeyle ($8\\ \\mathrm{m/s^2}$) karşılaştırmak iki kavramın farkını gösterir.",
      adimlar: [
        "**$t = 1\\ \\mathrm{s}$:** $$a(1) = 6 \\cdot 1 - 10 = -4\\ \\mathrm{m/s^2}$$",
        "**$t = 5\\ \\mathrm{s}$:** $$a(5) = 6 \\cdot 5 - 10 = 20\\ \\mathrm{m/s^2}$$",
        "**Karşılaştır:** Ortalama ivme $8\\ \\mathrm{m/s^2}$ idi; ani ivme bu aralıkta $-4$'ten $20$'ye değişiyor. İvme doğrusal değiştiği için ortalama, uçların ortası olan $8$'e eşit çıktı.",
      ],
    },
    {
      id: "u3-s03e", ornek: 3, parca: "e", kavram: "u3-turev",
      soru: `${ORNEK3} İvmenin sıfır olduğu anı bulun.`,
      secenekler: ["$t \\approx 1{,}7\\ \\mathrm{s}$", "$t \\approx 3{,}3\\ \\mathrm{s}$", "$t = 0$", "$t = 10\\ \\mathrm{s}$", "$t = 0{,}6\\ \\mathrm{s}$"],
      dogru: 0,
      aciklama: "İvme fonksiyonunu sıfıra eşitle ve $t$'yi çöz.",
      adimlar: [
        "**Denklem:** $$a(t) = 6t - 10 = 0$$",
        "**Çöz:** $$t = \\frac{10}{6} = \\frac{5}{3} \\approx 1{,}7\\ \\mathrm{s}$$",
        "**Yorum:** Bu anda hız en küçük (en negatif) değerindedir: $$v\\!\\left(\\tfrac{5}{3}\\right) = 3 \\cdot \\frac{25}{9} - \\frac{50}{3} \\approx -8{,}3\\ \\mathrm{m/s}$$ Hızın türevi sıfır olduğu için hız-zaman eğrisinin dip noktasıdır.",
      ],
    },
    {
      id: "u3-s04", ornek: 4, kavram: "u3-sabit-ivme",
      soru: "Bir cisim yatay bir buz tabakası üzerinde itiliyor ve $5\\ \\mathrm{s}$ sonra $25\\ \\mathrm{m}$ uzakta duruyor. Cisme verilen ilk hızı ve ivmeyi hesaplayın.",
      secenekler: ["$v_0 = 10\\ \\mathrm{m/s}$; $a = -2\\ \\mathrm{m/s^2}$", "$v_0 = 5\\ \\mathrm{m/s}$; $a = -1\\ \\mathrm{m/s^2}$", "$v_0 = 10\\ \\mathrm{m/s}$; $a = -4\\ \\mathrm{m/s^2}$", "$v_0 = 5\\ \\mathrm{m/s}$; $a = -2\\ \\mathrm{m/s^2}$", "$v_0 = 25\\ \\mathrm{m/s}$; $a = -5\\ \\mathrm{m/s^2}$"],
      dogru: 0,
      aciklama: "Cisim düzgün yavaşlayıp durduğu için son hız sıfırdır. Sabit ivmede yerdeğiştirme ortalama hız ile süre çarpımıdır: $\\Delta x = \\tfrac{1}{2}(v_0 + v)\\,t$. Bu bağıntı ivmeyi bilmeden $v_0$'ı verir.",
      adimlar: [
        "**Bilinenler:** $t = 5\\ \\mathrm{s}$, $\\Delta x = 25\\ \\mathrm{m}$, $v = 0$ (duruyor). Bilinmeyenler: $v_0$ ve $a$.",
        "**İlk hız:** $$\\Delta x = \\tfrac{1}{2}(v_0 + v)\\,t \\quad\\Rightarrow\\quad 25 = \\tfrac{1}{2}(v_0 + 0) \\cdot 5 \\quad\\Rightarrow\\quad v_0 = 10\\ \\mathrm{m/s}$$",
        "**İvme:** $$v = v_0 + at \\quad\\Rightarrow\\quad 0 = 10 + 5a \\quad\\Rightarrow\\quad a = -2\\ \\mathrm{m/s^2}$$ Eksi işaret ivmenin harekete ters, yani yavaşlatıcı olduğunu gösterir.",
        "**Kontrol:** $$x = v_0 t + \\tfrac{1}{2}at^2 = 10 \\cdot 5 + \\tfrac{1}{2}(-2)(25) = 50 - 25 = 25\\ \\mathrm{m}\\ ✓$$",
      ],
    },
    {
      id: "u3-s05a", ornek: 5, parca: "a", kavram: "u3-sabit-ivme", zorluk: 1,
      soru: "Durmakta olan bir araba sabit $2\\ \\mathrm{m/s^2}$ ivme ile hızlanıyor. $3\\ \\mathrm{s}$ sonra hızı ve aldığı yol ne kadar olur?",
      secenekler: ["$v = 6\\ \\mathrm{m/s}$; $x = 9\\ \\mathrm{m}$", "$v = 6\\ \\mathrm{m/s}$; $x = 18\\ \\mathrm{m}$", "$v = 5\\ \\mathrm{m/s}$; $x = 9\\ \\mathrm{m}$", "$v = 6\\ \\mathrm{m/s}$; $x = 6\\ \\mathrm{m}$", "$v = 3\\ \\mathrm{m/s}$; $x = 4{,}5\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "\"Durmakta olan\" ifadesi $v_0 = 0$ demektir. Başlangıç noktasını $x_0 = 0$ alınca denklemler $v = at$ ve $x = \\tfrac{1}{2}at^2$ olur.",
      adimlar: [
        "**Denklemleri sadeleştir:** $v_0 = 0$, $a = 2$: $$v = 2t, \\qquad x = \\tfrac{1}{2} \\cdot 2 \\cdot t^2 = t^2$$",
        "**Hız:** $$v = 2 \\cdot 3 = 6\\ \\mathrm{m/s}$$",
        "**Yol:** $$x = 3^2 = 9\\ \\mathrm{m}$$",
      ],
    },
    {
      id: "u3-s05b", ornek: 5, parca: "b", kavram: "u3-sabit-ivme", zorluk: 1,
      soru: "Durmakta olan bir araba sabit $2\\ \\mathrm{m/s^2}$ ivme ile hızlanıyor. $10\\ \\mathrm{m/s}$ hıza kaç saniyede ulaşır?",
      secenekler: ["$5\\ \\mathrm{s}$", "$20\\ \\mathrm{s}$", "$10\\ \\mathrm{s}$", "$\\sqrt{10}\\ \\mathrm{s}$", "$2{,}5\\ \\mathrm{s}$"],
      dogru: 0,
      aciklama: "Hız denklemi $v = v_0 + at$'de $v_0 = 0$ olduğundan $t = v/a$.",
      adimlar: [
        "**Hız denklemi:** $v = 2t$.",
        "**Çöz:** $$10 = 2t \\quad\\Rightarrow\\quad t = 5\\ \\mathrm{s}$$",
      ],
    },
    {
      id: "u3-s05c", ornek: 5, parca: "c", kavram: "u3-sabit-ivme",
      soru: "Durmakta olan bir araba sabit $2\\ \\mathrm{m/s^2}$ ivme ile hızlanıyor. $64\\ \\mathrm{m}$ uzaklığa kaç saniyede ulaşır?",
      secenekler: ["8 s", "32 s", "16 s", "4 s", "64 s"],
      dogru: 0,
      aciklama: "Konum denklemi $x = \\tfrac{1}{2}at^2$; $v_0 = 0$ ve $a = 2$ olduğunda $x = t^2$ olur.",
      adimlar: [
        "**Konum denklemi:** $x = t^2$.",
        "**Çöz:** $$64 = t^2 \\quad\\Rightarrow\\quad t = 8\\ \\mathrm{s}$$ Negatif kök fiziksel değil.",
      ],
    },
    {
      id: "u3-s06a", ornek: 6, parca: "a", kavram: "u3-sabit-ivme",
      soru: "Uçak gemisine iniş: Bir jet, uçak gemisine $140$ mil/saat ($63\\ \\mathrm{m/s}$) hızla iniyor ve $2$ saniye içinde duruyor. Uçağın ivmesi nedir?",
      secenekler: ["−31,5 m/s²", "−63 m/s²", "−126 m/s²", "31,5 m/s²", "−15,75 m/s²"],
      dogru: 0,
      aciklama: "Son hız sıfır, süre biliniyor: ivme hızdaki değişimin süreye bölümüdür, $a = \\dfrac{v_s - v_i}{t}$.",
      adimlar: [
        "**Bilinenler:** $v_i = 63\\ \\mathrm{m/s}$, $v_s = 0$, $t = 2\\ \\mathrm{s}$.",
        "**İvme:** $$a = \\frac{0 - 63}{2} = -31{,}5\\ \\mathrm{m/s^2}$$ Bu yerçekimi ivmesinin üç katından fazla; pilot öne doğru güçlü bir itme hisseder.",
      ],
    },
    {
      id: "u3-s06b", ornek: 6, parca: "b", kavram: "u3-sabit-ivme",
      soru: "Uçak gemisine iniş: Bir jet, uçak gemisine $140$ mil/saat ($63\\ \\mathrm{m/s}$) hızla iniyor ve $2$ saniye içinde duruyor. Bu süre içinde uçağın yer değiştirmesi nedir?",
      secenekler: ["63 m", "126 m", "31,5 m", "252 m", "94,5 m"],
      dogru: 0,
      aciklama: "Sabit ivmede ortalama hız ilk ve son hızın ortalamasıdır; yerdeğiştirme bu ortalama hız ile sürenin çarpımıdır: $x_s - x_i = \\tfrac{1}{2}(v_i + v_s)\\,t$.",
      adimlar: [
        "**Ortalama hız:** $$\\bar{v} = \\tfrac{1}{2}(63 + 0) = 31{,}5\\ \\mathrm{m/s}$$",
        "**Yerdeğiştirme:** $$\\Delta x = 31{,}5 \\times 2 = 63\\ \\mathrm{m}$$",
        "**Kontrol:** $$x = v_i t + \\tfrac{1}{2}at^2 = 63 \\cdot 2 + \\tfrac{1}{2}(-31{,}5)(4) = 126 - 63 = 63\\ \\mathrm{m}\\ ✓$$",
      ],
    },
    {
      id: "u3-s07", ornek: 7, kavram: "u3-sabit-ivme",
      soru: "Bir uçak havalanırken pistte sabit ivme ile $30\\ \\mathrm{s}$ gittikten sonra havalanmaktadır. Pistte aldığı yol $x = 1{,}2\\ \\mathrm{km}$ olduğuna göre havalanma anındaki hızı hesaplayınız.",
      secenekler: ["80 m/s (288 km/sa)", "40 m/s (144 km/sa)", "2,67 m/s (9,6 km/sa)", "160 m/s (576 km/sa)", "80 m/s (22 km/sa)"],
      dogru: 0,
      aciklama: "Uçak durgun başlar ($v_0 = 0$). Önce $x = \\tfrac{1}{2}at^2$'den ivme, sonra $v = at$'den hız bulunur. Birim dönüşümünde $1\\ \\mathrm{m/s} = 3{,}6\\ \\mathrm{km/sa}$.",
      adimlar: [
        "**Birim:** $x = 1{,}2\\ \\mathrm{km} = 1200\\ \\mathrm{m}$.",
        "**İvme:** $$x = \\tfrac{1}{2}at^2 \\quad\\Rightarrow\\quad a = \\frac{2x}{t^2} = \\frac{2 \\cdot 1200}{30^2} = \\frac{2400}{900} \\approx 2{,}67\\ \\mathrm{m/s^2}$$",
        "**Hız:** $$v = at = \\frac{24}{9} \\cdot 30 = 80\\ \\mathrm{m/s}$$",
        "**km/sa'e çevir:** $$80\\ \\mathrm{m/s} \\times 3{,}6 = 288\\ \\mathrm{km/sa}$$",
        "**Kısa yol:** $v_0 = 0$ iken $x = \\tfrac{1}{2}vt$ olduğundan $$v = \\frac{2x}{t} = \\frac{2400}{30} = 80\\ \\mathrm{m/s}$$ ivmeye hiç gerek kalmaz.",
      ],
    },
    {
      id: "u3-s08a", ornek: 8, parca: "a", kavram: "u3-sabit-ivme",
      soru: "$72\\ \\mathrm{km/sa}$ hızla gitmekte olan bir otomobil frene basarak yavaşlatılıyor ve $5\\ \\mathrm{s}$ içinde hızı $36\\ \\mathrm{km/sa}$ düşürülüyor. Arabanın sabit ivmesi nedir?",
      secenekler: ["−2 m/s²", "−7,2 m/s²", "−10 m/s²", "2 m/s²", "−4 m/s²"],
      dogru: 0,
      aciklama: "Hızlar km/sa verildi; saniye ile birlikte kullanmadan önce m/s'ye çevir ($\\div 3{,}6$). Sonra $a = \\dfrac{v - v_0}{t}$.",
      adimlar: [
        "**Birimler:** $$v_0 = \\frac{72}{3{,}6} = 20\\ \\mathrm{m/s}, \\qquad v = \\frac{36}{3{,}6} = 10\\ \\mathrm{m/s}$$",
        "**İvme:** $$v = v_0 + at \\quad\\Rightarrow\\quad 10 = 20 + 5a \\quad\\Rightarrow\\quad a = -2\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u3-s08b", ornek: 8, parca: "b", kavram: "u3-sabit-ivme",
      soru: "$72\\ \\mathrm{km/sa}$ hızla gitmekte olan bir otomobil frene basarak yavaşlatılıyor ve $5\\ \\mathrm{s}$ içinde hızı $36\\ \\mathrm{km/sa}$ düşürülüyor. Bu süre içinde ne kadar yol alır?",
      secenekler: ["75 m", "100 m", "50 m", "25 m", "270 m"],
      dogru: 0,
      aciklama: "İvme bulunduktan sonra $x = v_0 t + \\tfrac{1}{2}at^2$ kullanılır.",
      adimlar: [
        "**Değerler:** $v_0 = 20\\ \\mathrm{m/s}$, $a = -2\\ \\mathrm{m/s^2}$, $t = 5\\ \\mathrm{s}$.",
        "**Yol:** $$x = 20 \\cdot 5 + \\tfrac{1}{2}(-2) \\cdot 5^2 = 100 - 25 = 75\\ \\mathrm{m}$$",
        "**Kontrol:** Ortalama hız $\\tfrac{1}{2}(20 + 10) = 15\\ \\mathrm{m/s}$; $15 \\times 5 = 75\\ \\mathrm{m}$ ✓",
      ],
    },
    {
      id: "u3-s08c", ornek: 8, parca: "c", kavram: "u3-sabit-ivme",
      soru: "$72\\ \\mathrm{km/sa}$ hızla gitmekte olan bir otomobil frene basarak yavaşlatılıyor ve $5\\ \\mathrm{s}$ içinde hızı $36\\ \\mathrm{km/sa}$ düşürülüyor. Başlangıçtan itibaren arabanın tamamen durması için geçen süre ne kadardır?",
      secenekler: ["10 s", "5 s", "15 s", "20 s", "7,5 s"],
      dogru: 0,
      aciklama: "Aynı ivmeyle frenlemeye devam ederse son hız sıfır olana kadar geçen süreyi $v = v_0 + at$ verir.",
      adimlar: [
        "**Denklem:** $$0 = 20 + (-2)\\,t$$",
        "**Çöz:** $t = 10\\ \\mathrm{s}$. Hızın yarısını $5\\ \\mathrm{s}$'de kaybetti, kalan yarısını da $5\\ \\mathrm{s}$'de kaybeder.",
      ],
    },
    {
      id: "u3-s09a", ornek: 9, parca: "a", kavram: "u3-sabit-ivme",
      soru: "$4\\ \\mathrm{m/s}$ hızla koşmakta olan bir yarışçı aniden hızlanmaya başlıyor ve $11\\ \\mathrm{m}$ yol sonunda $7\\ \\mathrm{m/s}$ hıza ulaşıyor. Yarışçının sabit ivmesi ne kadardır?",
      secenekler: ["1,5 m/s²", "3 m/s²", "0,27 m/s²", "2,2 m/s²", "0,75 m/s²"],
      dogru: 0,
      aciklama: "Süre verilmemiş: zamansız hız denklemi $v^2 = v_0^2 + 2a\\,\\Delta x$ doğrudan ivmeyi verir.",
      adimlar: [
        "**Zamansız denklem:** $$v^2 = v_0^2 + 2a\\,\\Delta x$$",
        "**Yerine koy:** $$49 = 16 + 2a \\cdot 11 \\quad\\Rightarrow\\quad 33 = 22a$$",
        "**Çöz:** $$a = \\frac{33}{22} = 1{,}5\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u3-s09b", ornek: 9, parca: "b", kavram: "u3-sabit-ivme",
      soru: "$4\\ \\mathrm{m/s}$ hızla koşmakta olan bir yarışçı aniden hızlanmaya başlıyor ve $11\\ \\mathrm{m}$ yol sonunda $7\\ \\mathrm{m/s}$ hıza ulaşıyor. Yarışçının hızlanması ne kadar sürmüştür?",
      secenekler: ["2 s", "1 s", "3 s", "4,7 s", "1,6 s"],
      dogru: 0,
      aciklama: "İvme bulunduktan sonra $v = v_0 + at$; ya da ivmeye gerek duymadan $\\Delta x = \\tfrac{1}{2}(v_0 + v)\\,t$.",
      adimlar: [
        "**Hız denklemi:** $$7 = 4 + 1{,}5\\,t \\quad\\Rightarrow\\quad t = \\frac{3}{1{,}5} = 2\\ \\mathrm{s}$$",
        "**Kontrol:** Ortalama hız $\\tfrac{1}{2}(4 + 7) = 5{,}5\\ \\mathrm{m/s}$: $$t = \\frac{11\\ \\mathrm{m}}{5{,}5\\ \\mathrm{m/s}} = 2\\ \\mathrm{s}\\ ✓$$",
      ],
    },
    {
      id: "u3-s10a", ornek: 10, parca: "a ve b", kavram: "u3-serbest",
      soru: `${ORNEK10} Taşın maksimum yüksekliğe ulaşması için geçen zamanı ve maksimum yüksekliği (atıldığı noktaya göre) bulunuz.`,
      secenekler: ["$t = 2\\ \\mathrm{s}$; $y_{\\max} = 20\\ \\mathrm{m}$", "$t = 2\\ \\mathrm{s}$; $y_{\\max} = 40\\ \\mathrm{m}$", "$t = 4\\ \\mathrm{s}$; $y_{\\max} = 20\\ \\mathrm{m}$", "$t = 2\\ \\mathrm{s}$; $y_{\\max} = 70\\ \\mathrm{m}$", "$t = 0{,}5\\ \\mathrm{s}$; $y_{\\max} = 10\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "Orijini atış noktasında, $+y$'yi yukarı al; ivme $-g$. Tepe noktasında hız sıfırdır: $v = v_0 - gt = 0$.",
      adimlar: [
        "**Tepe anı:** $$0 = 20 - 10\\,t_1 \\quad\\Rightarrow\\quad t_1 = 2\\ \\mathrm{s}$$",
        "**Yükseklik:** $$y_{\\max} = v_0 t_1 - \\tfrac{1}{2}g t_1^2 = 20 \\cdot 2 - 5 \\cdot 4 = 40 - 20 = 20\\ \\mathrm{m}$$ Bu atıldığı noktadan yüksekliktir; yerden $50 + 20 = 70\\ \\mathrm{m}$.",
        "**Kısa yol:** $$y_{\\max} = \\frac{v_0^2}{2g} = \\frac{400}{20} = 20\\ \\mathrm{m}$$",
      ],
    },
    {
      id: "u3-s10b", ornek: 10, parca: "c ve d", kavram: "u3-serbest",
      soru: `${ORNEK10} Taşın atıldığı seviyeye geri gelmesi için geçen zamanı ve taşın bu andaki hızını bulunuz.`,
      secenekler: ["$t = 4\\ \\mathrm{s}$; $v = -20\\ \\mathrm{m/s}$", "$t = 2\\ \\mathrm{s}$; $v = 0$", "$t = 4\\ \\mathrm{s}$; $v = 20\\ \\mathrm{m/s}$", "$t = 4\\ \\mathrm{s}$; $v = -40\\ \\mathrm{m/s}$", "$t = 5\\ \\mathrm{s}$; $v = -30\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Düşey atış simetriktir: çıkış süresi iniş süresine eşittir ve aynı seviyeye aynı büyüklükte ama ters yönde hızla döner.",
      adimlar: [
        "**Süre:** $$t_2 = 2t_1 = 2 \\cdot 2 = 4\\ \\mathrm{s}$$ Ya da $y = 20t - 5t^2 = 0$ denkleminden $t = 4\\ \\mathrm{s}$.",
        "**Hız:** $$v = v_0 - g\\,t_2 = 20 - 10 \\cdot 4 = -20\\ \\mathrm{m/s}$$",
        "**Yorum:** Büyüklük atış hızıyla aynı ($20\\ \\mathrm{m/s}$), eksi işaret aşağı doğru gittiğini gösterir.",
      ],
    },
    {
      id: "u3-s10c", ornek: 10, parca: "e", kavram: "u3-serbest",
      soru: `${ORNEK10} $t = 5$ saniyede taşın hızını ve konumunu (atıldığı noktaya göre) bulunuz.`,
      secenekler: ["$v = -30\\ \\mathrm{m/s}$; $y = -25\\ \\mathrm{m}$", "$v = -30\\ \\mathrm{m/s}$; $y = 25\\ \\mathrm{m}$", "$v = 30\\ \\mathrm{m/s}$; $y = -25\\ \\mathrm{m}$", "$v = -50\\ \\mathrm{m/s}$; $y = -125\\ \\mathrm{m}$", "$v = -30\\ \\mathrm{m/s}$; $y = -45\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "Aynı denklemler ($v = v_0 - gt$, $y = v_0 t - \\tfrac{1}{2}gt^2$) taş hangi yönde giderse gitsin geçerlidir; hareketi parçalara ayırmaya gerek yok. Not: sunu bu konumu $25\\ \\mathrm{m}$ yazmış; işlem $100 - 125 = -25\\ \\mathrm{m}$ verir.",
      adimlar: [
        "**Hız:** $$v = 20 - 10 \\cdot 5 = -30\\ \\mathrm{m/s}$$",
        "**Konum:** $$y = 20 \\cdot 5 - 5 \\cdot 5^2 = 100 - 125 = -25\\ \\mathrm{m}$$",
        "**Yorum:** Eksi konum taşın atıldığı noktanın $25\\ \\mathrm{m}$ altında, yani yerden $50 - 25 = 25\\ \\mathrm{m}$ yükseklikte olduğunu söyler. Sunudaki \"25 m\" bu yerden yüksekliğe denk gelir; atış noktasına göre konum $-25\\ \\mathrm{m}$'dir.",
      ],
    },
    {
      id: "u3-s11a", ornek: 11, parca: "a ve b", kavram: "u3-serbest",
      soru: `${ORNEK11} Yer hizasını orijin ve yukarı yönü pozitif alarak maksimum yüksekliği (yerden) ve çıkış zamanını hesaplayın.`,
      secenekler: ["$t = 3\\ \\mathrm{s}$; $y_{\\max} = 80\\ \\mathrm{m}$", "$t = 3\\ \\mathrm{s}$; $y_{\\max} = 45\\ \\mathrm{m}$", "$t = 6\\ \\mathrm{s}$; $y_{\\max} = 80\\ \\mathrm{m}$", "$t = 3\\ \\mathrm{s}$; $y_{\\max} = 125\\ \\mathrm{m}$", "$t = 30\\ \\mathrm{s}$; $y_{\\max} = 80\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "Orijin yerde olduğundan $y_0 = 35\\ \\mathrm{m}$. Hareket denklemleri: $v = 30 - 10t$ ve $y = 35 + 30t - 5t^2$. Tepede $v = 0$.",
      adimlar: [
        "**Denklemler:** $$v = v_0 + at = 30 - 10t, \\qquad y = y_0 + v_0 t + \\tfrac{1}{2}at^2 = 35 + 30t - 5t^2$$",
        "**Çıkış zamanı:** $$0 = 30 - 10t \\quad\\Rightarrow\\quad t = 3\\ \\mathrm{s}$$",
        "**Maksimum yükseklik:** $$y_{\\max} = 35 + 30 \\cdot 3 - 5 \\cdot 9 = 35 + 90 - 45 = 80\\ \\mathrm{m}$$ Bu yerden yüksekliktir.",
        "**Atıldığı yerden:** $80 - 35 = 45\\ \\mathrm{m}$.",
      ],
    },
    {
      id: "u3-s11b", ornek: 11, parca: "c ve d", kavram: "u3-serbest",
      soru: `${ORNEK11} Yere düşünceye kadar kaç saniye geçer ve taş yere hangi hızla çarpar?`,
      secenekler: ["$t = 7\\ \\mathrm{s}$; $v = -40\\ \\mathrm{m/s}$", "$t = 6\\ \\mathrm{s}$; $v = -30\\ \\mathrm{m/s}$", "$t = 7\\ \\mathrm{s}$; $v = 40\\ \\mathrm{m/s}$", "$t = 4\\ \\mathrm{s}$; $v = -40\\ \\mathrm{m/s}$", "$t = 7\\ \\mathrm{s}$; $v = -70\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Yere düşmek $y = 0$ demektir. İkinci dereceden denklem iki kök verir; negatif zaman fiziksel değildir.",
      adimlar: [
        "**Denklem:** $$0 = 35 + 30t - 5t^2 \\quad\\xrightarrow{\\ \\div(-5)\\ }\\quad t^2 - 6t - 7 = 0$$",
        "**Çarpanlara ayır:** $$(t - 7)(t + 1) = 0 \\quad\\Rightarrow\\quad t = 7\\ \\mathrm{s} \\ \\text{ ya da } \\ t = -1\\ \\mathrm{s}$$ Negatif kök atılır: $t = 7\\ \\mathrm{s}$.",
        "**Çarpma hızı:** $$v = 30 - 10 \\cdot 7 = -40\\ \\mathrm{m/s}$$ Eksi işaret aşağı yönü gösterir.",
        "**Kontrol:** Zamansız denklem: $$v^2 = 30^2 + 2(-10)(0 - 35) = 900 + 700 = 1600 \\quad\\Rightarrow\\quad |v| = 40\\ \\mathrm{m/s}\\ ✓$$",
      ],
    },
    {
      id: "u3-s12a", ornek: 12, parca: "a ve b", kavram: "u3-serbest", zorluk: 1,
      soru: `${ORNEK12} Atıldığı yeri orijin, yukarıyı pozitif alarak $t = 1\\ \\mathrm{s}$ sonraki konumu ve hızı bulun.`,
      secenekler: ["$y = 10\\ \\mathrm{m}$; $v = 5\\ \\mathrm{m/s}$", "$y = 15\\ \\mathrm{m}$; $v = 5\\ \\mathrm{m/s}$", "$y = 10\\ \\mathrm{m}$; $v = -5\\ \\mathrm{m/s}$", "$y = 20\\ \\mathrm{m}$; $v = 25\\ \\mathrm{m/s}$", "$y = 5\\ \\mathrm{m}$; $v = 10\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Hareket denklemleri $v = 15 - 10t$ ve $y = 15t - 5t^2$. Bir andaki hız ve konum doğrudan yerine koyarak bulunur.",
      adimlar: [
        "**Denklemler:** $$v = v_0 - gt = 15 - 10t, \\qquad y = v_0 t - \\tfrac{1}{2}gt^2 = 15t - 5t^2$$",
        "**Hız ($t = 1\\ \\mathrm{s}$):** $$v = 15 - 10 = 5\\ \\mathrm{m/s}$$ Top hâlâ yukarı çıkıyor.",
        "**Konum ($t = 1\\ \\mathrm{s}$):** $$y = 15 - 5 = 10\\ \\mathrm{m}$$",
      ],
    },
    {
      id: "u3-s12b", ornek: 12, parca: "c ve d", kavram: "u3-serbest",
      soru: `${ORNEK12} Maksimum yüksekliğe kaç saniyede çıkar ve maksimum yükseklik ne kadardır?`,
      secenekler: ["$t = 1{,}5\\ \\mathrm{s}$; $y \\approx 11{,}3\\ \\mathrm{m}$", "$t = 1{,}5\\ \\mathrm{s}$; $y = 22{,}5\\ \\mathrm{m}$", "$t = 3\\ \\mathrm{s}$; $y \\approx 11{,}3\\ \\mathrm{m}$", "$t = 1\\ \\mathrm{s}$; $y = 10\\ \\mathrm{m}$", "$t = 1{,}5\\ \\mathrm{s}$; $y = 15\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "Tepede hız sıfırdır; bu koşul zamanı, zaman da konum denklemiyle yüksekliği verir.",
      adimlar: [
        "**Zaman:** $$0 = 15 - 10t \\quad\\Rightarrow\\quad t = 1{,}5\\ \\mathrm{s}$$",
        "**Yükseklik:** $$y = 15 \\cdot 1{,}5 - 5 \\cdot 1{,}5^2 = 22{,}5 - 11{,}25 = 11{,}25 \\approx 11{,}3\\ \\mathrm{m}$$",
        "**Kontrol:** $$\\frac{v_0^2}{2g} = \\frac{225}{20} = 11{,}25\\ \\mathrm{m}\\ ✓$$",
      ],
    },
    {
      id: "u3-s12c", ornek: 12, parca: "e", kavram: "u3-serbest",
      soru: `${ORNEK12} Top yerden $10\\ \\mathrm{m}$ yükseklikten hangi zamanlarda geçer?`,
      secenekler: ["$t = 1\\ \\mathrm{s}$ ve $t = 2\\ \\mathrm{s}$", "Yalnız $t = 1\\ \\mathrm{s}$", "$t = 0{,}5\\ \\mathrm{s}$ ve $t = 2{,}5\\ \\mathrm{s}$", "Yalnız $t = 2\\ \\mathrm{s}$", "$t = 1\\ \\mathrm{s}$ ve $t = 3\\ \\mathrm{s}$"],
      dogru: 0,
      aciklama: "Konum denklemini $10\\ \\mathrm{m}$'ye eşitle. Top bu yükseklikten bir kez çıkarken, bir kez inerken geçer; iki kök de geçerlidir.",
      adimlar: [
        "**Denklem:** $$10 = 15t - 5t^2 \\quad\\Rightarrow\\quad t^2 - 3t + 2 = 0$$",
        "**Çarpanlar:** $$(t - 1)(t - 2) = 0 \\quad\\Rightarrow\\quad t = 1\\ \\mathrm{s},\\ \\ t = 2\\ \\mathrm{s}$$",
        "**Yorum:** $t = 1\\ \\mathrm{s}$'de yukarı çıkarken ($v = +5\\ \\mathrm{m/s}$), $t = 2\\ \\mathrm{s}$'de aşağı inerken ($v = -5\\ \\mathrm{m/s}$) geçer. İki an tepe anı $1{,}5\\ \\mathrm{s}$'ye göre simetriktir.",
      ],
    },
    {
      id: "u3-s12d", ornek: 12, parca: "f", kavram: "u3-serbest", zorluk: 1,
      soru: `${ORNEK12} Atıldığından itibaren kaç saniye sonra yere düşer?`,
      secenekler: ["3 s", "1,5 s", "2 s", "4,5 s", "6 s"],
      dogru: 0,
      aciklama: "Yere dönmek $y = 0$ demektir. Çıkış süresi iniş süresine eşit olduğu için tepe zamanının iki katı da aynı sonucu verir.",
      adimlar: [
        "**Denklem:** $$0 = 15t - 5t^2 = t\\,(15 - 5t)$$",
        "**Kökler:** $t = 0$ (başlangıç anı) ve $t = 3\\ \\mathrm{s}$ (düşüş anı).",
        "**Kontrol:** $2 \\times 1{,}5\\ \\mathrm{s} = 3\\ \\mathrm{s}$ ✓",
      ],
    },
    {
      id: "u3-s13", ornek: 13, kavram: "u3-serbest", zorluk: 3,
      soru: "Yerden $45\\ \\mathrm{m}$ yükseklikteki bir binanın çatısından $1\\ \\mathrm{s}$ aralıklarla su damlıyor. Bir damla yere çarptığı anda ikinci damlanın yüksekliği ne kadardır? ($g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["25 m", "20 m", "35 m", "40 m", "5 m"],
      dogru: 0,
      aciklama: "Her damlaya kendi kronometresini ver: ikinci damla birinciden $1\\ \\mathrm{s}$ sonra yola çıktığı için $t_2 = t_1 - 1$. Orijini çatıda, aşağıyı pozitif almak denklemleri sadeleştirir: $y = \\tfrac{1}{2}gt^2$.",
      adimlar: [
        "**Birinci damlanın düşüş süresi:** $$45 = \\tfrac{1}{2} \\cdot 10 \\cdot t_1^2 \\quad\\Rightarrow\\quad t_1^2 = 9 \\quad\\Rightarrow\\quad t_1 = 3\\ \\mathrm{s}$$",
        "**İkinci damlanın süresi:** $$t_2 = t_1 - 1 = 2\\ \\mathrm{s}$$",
        "**İkinci damlanın düştüğü yol:** $$y_2 = \\tfrac{1}{2} \\cdot 10 \\cdot 2^2 = 20\\ \\mathrm{m}$$ Bu çatıdan aşağı ölçülen uzaklıktır.",
        "**Yerden yükseklik:** $45 - 20 = 25\\ \\mathrm{m}$.",
      ],
    },
    {
      id: "u3-s14a", ornek: "13, s. 32", parca: "b ve c", kavram: "u3-serbest", zorluk: 3,
      soru: `${ORNEK13B}\n\nİki top ne zaman ve hangi yükseklikte çarpışırlar?`,
      secenekler: ["$t = 2\\ \\mathrm{s}$; $y = 4\\ \\mathrm{m}$", "$t = 2\\ \\mathrm{s}$; $y = 12\\ \\mathrm{m}$", "$t = 4\\ \\mathrm{s}$; $y = 4\\ \\mathrm{m}$", "$t = 1{,}6\\ \\mathrm{s}$; $y = 6{,}4\\ \\mathrm{m}$", "$t = 2\\ \\mathrm{s}$; $y = 0$"],
      dogru: 0,
      aciklama: "İki topu aynı koordinat sisteminde yaz: orijin yerde, $+y$ yukarı. Çarpışma anında iki topun $y$ konumu aynıdır.",
      adimlar: [
        "**1. top:** $y_{10} = 0$, $v_{10} = +12\\ \\mathrm{m/s}$: $$y_1 = 12t - 5t^2$$",
        "**2. top:** $y_{20} = 32\\ \\mathrm{m}$, $v_{20} = -4\\ \\mathrm{m/s}$ (aşağı): $$y_2 = 32 - 4t - 5t^2$$",
        "**Eşitle:** $$12t - 5t^2 = 32 - 4t - 5t^2 \\quad\\Rightarrow\\quad 16t = 32 \\quad\\Rightarrow\\quad t = 2\\ \\mathrm{s}$$ $-5t^2$ terimleri iki yanda da olduğu için sadeleşir.",
        "**Yükseklik:** $$y_1 = 12 \\cdot 2 - 5 \\cdot 4 = 24 - 20 = 4\\ \\mathrm{m}$$ Kontrol: $y_2 = 32 - 8 - 20 = 4\\ \\mathrm{m}$ ✓",
      ],
    },
    {
      id: "u3-s14b", ornek: "13, s. 32", parca: "d", kavram: "u3-serbest", zorluk: 3,
      soru: `${ORNEK13B}\n\nÇarpıştıkları anda her birinin hızı ne kadardır?`,
      secenekler: ["$v_1 = -8\\ \\mathrm{m/s}$; $v_2 = -24\\ \\mathrm{m/s}$", "$v_1 = 8\\ \\mathrm{m/s}$; $v_2 = -24\\ \\mathrm{m/s}$", "$v_1 = -8\\ \\mathrm{m/s}$; $v_2 = -16\\ \\mathrm{m/s}$", "$v_1 = 12\\ \\mathrm{m/s}$; $v_2 = -4\\ \\mathrm{m/s}$", "$v_1 = 32\\ \\mathrm{m/s}$; $v_2 = -24\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Çarpışma anı $t = 2\\ \\mathrm{s}$'yi iki topun hız denklemine koy: $v_1 = 12 - 10t$, $v_2 = -4 - 10t$.",
      adimlar: [
        "**Çarpışma anı:** $t = 2\\ \\mathrm{s}$ (önceki parça).",
        "**1. top:** $$v_1 = 12 - 10 \\cdot 2 = -8\\ \\mathrm{m/s}$$",
        "**2. top:** $$v_2 = -4 - 10 \\cdot 2 = -24\\ \\mathrm{m/s}$$",
        "**Yorum:** $v_1$ negatif: 1. top $1{,}2\\ \\mathrm{s}$'de tepeye çıkmış, geri dönmüş ve aşağı inerken çarpışmıştır.",
      ],
    },
  ]),

  ...turet(U, K, "u3-temel", [
    {
      id: "u3-t01", tip: "mcq",
      soru: "Bir koşucu $10\\ \\mathrm{s}$'de doğuya $30\\ \\mathrm{m}$ gidiyor, sonra $5\\ \\mathrm{s}$'de batıya $10\\ \\mathrm{m}$ geri dönüyor. Bu $15\\ \\mathrm{s}$ için ortalama hızın büyüklüğü ve ortalama sürat nedir?",
      secenekler: ["$\\bar{v} \\approx 1{,}33\\ \\mathrm{m/s}$; sürat $\\approx 2{,}67\\ \\mathrm{m/s}$", "$\\bar{v} \\approx 2{,}67\\ \\mathrm{m/s}$; sürat $\\approx 1{,}33\\ \\mathrm{m/s}$", "$\\bar{v} = 2\\ \\mathrm{m/s}$; sürat $= 2\\ \\mathrm{m/s}$", "$\\bar{v} \\approx 1{,}33\\ \\mathrm{m/s}$; sürat $\\approx 1{,}33\\ \\mathrm{m/s}$", "$\\bar{v} = 4\\ \\mathrm{m/s}$; sürat $\\approx 2{,}67\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Ortalama hız yerdeğiştirmeyi (son − ilk konum), ortalama sürat ise toplam yolu kullanır. Geri dönüş olduğunda ikisi farklı çıkar.",
      adimlar: [
        "**Yerdeğiştirme:** doğu $+$ alınırsa $$\\Delta x = +30 - 10 = +20\\ \\mathrm{m}$$",
        "**Toplam yol:** $30 + 10 = 40\\ \\mathrm{m}$.",
        "**Süre:** $10 + 5 = 15\\ \\mathrm{s}$.",
        "**Sonuç:** $$\\bar{v} = \\frac{20}{15} \\approx 1{,}33\\ \\mathrm{m/s}\\ \\text{(doğuya)}, \\qquad \\text{ortalama sürat} = \\frac{40}{15} \\approx 2{,}67\\ \\mathrm{m/s}$$",
      ],
    },
    {
      id: "u3-t02", tip: "tf", zorluk: 1,
      soru: "Bir cisim hareket ettiği sürece yerdeğiştirmesi her zaman sıfırdan farklıdır.",
      dogru: false,
      aciklama: "Yerdeğiştirme yalnız ilk ve son konuma bakar. Başladığı yere dönen bir cismin (ör. pistte bir tur atan koşucu) yolu sıfırdan büyük ama yerdeğiştirmesi sıfırdır; ortalama hızı da sıfır olur.",
    },
    {
      id: "u3-t03", tip: "mcq",
      soru: "$x$ ekseninde hareket eden bir cisim $t = 2\\ \\mathrm{s}$'de $x = -6\\ \\mathrm{m}$, $t = 6\\ \\mathrm{s}$'de $x = 10\\ \\mathrm{m}$ konumundadır. Bu aralıktaki ortalama hızı nedir?",
      secenekler: ["4 m/s", "1 m/s", "−4 m/s", "2,5 m/s", "16 m/s"],
      dogru: 0,
      aciklama: "$\\bar{v} = \\dfrac{x_s - x_i}{t_s - t_i}$. İlk konum negatif olduğu için eksiyi dikkatle çıkar.",
      adimlar: [
        "**Yerdeğiştirme:** $$\\Delta x = 10 - (-6) = 16\\ \\mathrm{m}$$",
        "**Süre:** $$\\Delta t = 6 - 2 = 4\\ \\mathrm{s}$$",
        "**Ortalama hız:** $$\\bar{v} = \\frac{16}{4} = 4\\ \\mathrm{m/s}$$",
      ],
    },
    {
      id: "u3-t04", tip: "fill", zorluk: 1,
      soru: "Toplam yolun geçen süreye oranına ortalama ____ denir; bu büyüklük skalerdir ve hiçbir zaman negatif olmaz.",
      bosluklar: [["sürat", "surat"]],
      aciklama: "**Ortalama sürat** = toplam yol / süre. Ortalama hız ise yerdeğiştirme / süredir ve işaretli (vektörel) bir büyüklüktür.",
    },
  ]),

  ...turet(U, K, "u3-turev", [
    {
      id: "u3-t05", tip: "mcq",
      soru: "Bir cismin konumu $x(t) = 4t^2 - 3t + 2\\ \\mathrm{m}$ ile veriliyor. $t = 2\\ \\mathrm{s}$ anındaki hızı nedir?",
      secenekler: ["13 m/s", "12 m/s", "16 m/s", "8 m/s", "5 m/s"],
      dogru: 0,
      aciklama: "Ani hız konumun türevidir: $v = \\dfrac{dx}{dt}$.",
      adimlar: [
        "**Türev:** $$v(t) = \\frac{dx}{dt} = 8t - 3$$",
        "**$t = 2$:** $$v(2) = 16 - 3 = 13\\ \\mathrm{m/s}$$",
        "**Tuzak:** $x(2) = 16 - 6 + 2 = 12\\ \\mathrm{m}$ konumdur, hız değil.",
      ],
    },
    {
      id: "u3-t06", tip: "mcq",
      soru: "Konumu $x(t) = t^3 - 6t^2 + 9t\\ \\mathrm{m}$ olan bir cisim hangi anlarda anlık olarak durur?",
      secenekler: ["$t = 1\\ \\mathrm{s}$ ve $t = 3\\ \\mathrm{s}$", "$t = 0$ ve $t = 3\\ \\mathrm{s}$", "Yalnız $t = 2\\ \\mathrm{s}$", "$t = 1\\ \\mathrm{s}$ ve $t = 2\\ \\mathrm{s}$", "$t = 3\\ \\mathrm{s}$ ve $t = 9\\ \\mathrm{s}$"],
      dogru: 0,
      aciklama: "Cismin durduğu an hızın sıfır olduğu andır. Konumun sıfır olduğu an değil; $v = \\dfrac{dx}{dt} = 0$ çözülür.",
      adimlar: [
        "**Hız:** $$v(t) = 3t^2 - 12t + 9$$",
        "**Sıfıra eşitle:** $$3t^2 - 12t + 9 = 0 \\quad\\Rightarrow\\quad t^2 - 4t + 3 = 0$$",
        "**Çarpanlar:** $$(t - 1)(t - 3) = 0 \\quad\\Rightarrow\\quad t = 1\\ \\mathrm{s},\\ \\ t = 3\\ \\mathrm{s}$$",
        "**Yorum:** Cisim $t = 1\\ \\mathrm{s}$'de yön değiştirip geri gelir, $t = 3\\ \\mathrm{s}$'de yeniden yön değiştirir.",
      ],
    },
    {
      id: "u3-t07", tip: "mcq",
      soru: "Konumu $x(t) = 5t^3\\ \\mathrm{m}$ olan bir cismin $t = 2\\ \\mathrm{s}$ anındaki ivmesi nedir?",
      secenekler: ["60 m/s²", "40 m/s²", "30 m/s²", "120 m/s²", "15 m/s²"],
      dogru: 0,
      aciklama: "İvme konumun ikinci türevidir: önce $v = \\dfrac{dx}{dt}$, sonra $a = \\dfrac{dv}{dt}$.",
      adimlar: [
        "**Hız:** $$v = \\frac{dx}{dt} = 15t^2$$",
        "**İvme:** $$a = \\frac{dv}{dt} = 30t$$",
        "**$t = 2\\ \\mathrm{s}$:** $$a = 30 \\cdot 2 = 60\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u3-t08", tip: "tf",
      soru: "Bir cismin hızı bir anda sıfırsa o andaki ivmesi de sıfır olmak zorundadır.",
      dogru: false,
      aciklama: "Hız ve ivme ayrı büyüklüklerdir. Yukarı atılan taş tepede bir an durur ($v = 0$) ama ivmesi hâlâ $g$'dir, aşağı yönlüdür. İvme sıfır olsaydı taş tepede asılı kalırdı.",
    },
  ]),

  ...turet(U, K, "u3-grafik", [
    {
      id: "u3-t09", tip: "mcq",
      soru: "Konum-zaman ($x$-$t$) grafiğinde bir noktadaki teğetin eğimi neyi verir?",
      secenekler: ["O andaki ani hızı", "O andaki ivmeyi", "O ana kadar alınan yolu", "O andaki konumu", "Ortalama ivmeyi"],
      dogru: 0,
      aciklama: "$x$-$t$ grafiğinde eğim $\\Delta x/\\Delta t$'dir. İki nokta arasındaki kirişin eğimi ortalama hızı, bir noktadaki teğetin eğimi ani hızı verir: $v = \\dfrac{dx}{dt}$.",
    },
    {
      id: "u3-t10", tip: "mcq",
      soru: "Hız-zaman ($v$-$t$) grafiğinde eğri ile zaman ekseni arasında kalan alan neyi verir?",
      secenekler: ["Yerdeğiştirmeyi", "İvmeyi", "Ortalama hızı", "Hız değişimini", "Ani hızı"],
      dogru: 0,
      aciklama: "$v$-$t$ grafiğinde alan $v \\times t$, yani yerdeğiştirmedir: $\\Delta x = \\int v\\,dt$. Eksenin altında kalan alan negatif yerdeğiştirme sayılır. Eğim ise ivmeyi verir.",
    },
    {
      id: "u3-t11", tip: "mcq", zorluk: 3,
      soru: "Bir araba durgun hâlden $4\\ \\mathrm{s}$ içinde düzgün hızlanarak $20\\ \\mathrm{m/s}$'ye çıkıyor, sonra $6\\ \\mathrm{s}$ boyunca bu hızla gidiyor. $v$-$t$ grafiğinden $10\\ \\mathrm{s}$'de aldığı yol nedir?",
      secenekler: ["160 m", "200 m", "120 m", "40 m", "180 m"],
      dogru: 0,
      aciklama: "$v$-$t$ grafiğinin altındaki alanı parça parça hesapla: önce bir üçgen (hızlanma), sonra bir dikdörtgen (sabit hız).",
      adimlar: [
        "**Üçgen (0–4 s):** $$\\tfrac{1}{2} \\cdot 4 \\cdot 20 = 40\\ \\mathrm{m}$$",
        "**Dikdörtgen (4–10 s):** $$6 \\cdot 20 = 120\\ \\mathrm{m}$$",
        "**Toplam:** $$40 + 120 = 160\\ \\mathrm{m}$$",
        "**Tuzak:** $20\\ \\mathrm{m/s} \\times 10\\ \\mathrm{s} = 200\\ \\mathrm{m}$ hesabı, ilk $4\\ \\mathrm{s}$'de arabanın $20\\ \\mathrm{m/s}$'den yavaş gittiğini unutur.",
      ],
    },
    {
      id: "u3-t12", tip: "tf",
      soru: "Hız-zaman grafiği yatay bir doğru olan bir cismin ivmesi sıfırdır.",
      dogru: true,
      aciklama: "$v$-$t$ grafiğinin eğimi ivmedir. Yatay doğrunun eğimi sıfır olduğu için ivme sıfırdır; cisim sabit hızla gider (hız sıfır değilse).",
    },
    {
      id: "u3-t13", tip: "mcq",
      soru: "Hız-zaman grafiği $0$–$5\\ \\mathrm{s}$ arasında $10\\ \\mathrm{m/s}$'den $0$'a doğrusal inen bir cismin ivmesi ve bu sürede aldığı yol nedir?",
      secenekler: ["$a = -2\\ \\mathrm{m/s^2}$; $25\\ \\mathrm{m}$", "$a = 2\\ \\mathrm{m/s^2}$; $25\\ \\mathrm{m}$", "$a = -2\\ \\mathrm{m/s^2}$; $50\\ \\mathrm{m}$", "$a = -0{,}5\\ \\mathrm{m/s^2}$; $25\\ \\mathrm{m}$", "$a = -10\\ \\mathrm{m/s^2}$; $5\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "Eğim ivmeyi, altında kalan alan yerdeğiştirmeyi verir.",
      adimlar: [
        "**Eğim:** $$a = \\frac{0 - 10}{5} = -2\\ \\mathrm{m/s^2}$$",
        "**Alan (üçgen):** $$\\Delta x = \\tfrac{1}{2} \\cdot 5 \\cdot 10 = 25\\ \\mathrm{m}$$",
      ],
    },
  ]),

  ...turet(U, K, "u3-sabit-ivme", [
    {
      id: "u3-t14", tip: "mcq",
      soru: "$15\\ \\mathrm{m/s}$ hızla giden bir bisikletli $-3\\ \\mathrm{m/s^2}$ ivmeyle fren yapıyor. Durana kadar kaç metre yol alır?",
      secenekler: ["37,5 m", "75 m", "5 m", "45 m", "22,5 m"],
      dogru: 0,
      aciklama: "Süre sorulmuyor ve verilmiyor; zamansız hız denklemi $v^2 = v_0^2 + 2a\\,\\Delta x$ en kısa yoldur.",
      adimlar: [
        "**Denklem:** $$0 = 15^2 + 2(-3)\\,\\Delta x$$",
        "**Çöz:** $$6\\,\\Delta x = 225 \\quad\\Rightarrow\\quad \\Delta x = 37{,}5\\ \\mathrm{m}$$",
        "**Kontrol:** Durma süresi $15/3 = 5\\ \\mathrm{s}$; ortalama hız $7{,}5\\ \\mathrm{m/s}$; $7{,}5 \\times 5 = 37{,}5\\ \\mathrm{m}$ ✓",
      ],
    },
    {
      id: "u3-t15", tip: "mcq",
      soru: "$108\\ \\mathrm{km/sa}$ hızla giden bir otomobil sabit ivmeyle yavaşlayarak $6\\ \\mathrm{s}$'de duruyor. İvmesi ve durana kadar aldığı yol nedir?",
      secenekler: ["$a = -5\\ \\mathrm{m/s^2}$; $90\\ \\mathrm{m}$", "$a = -18\\ \\mathrm{m/s^2}$; $324\\ \\mathrm{m}$", "$a = -5\\ \\mathrm{m/s^2}$; $180\\ \\mathrm{m}$", "$a = -30\\ \\mathrm{m/s^2}$; $90\\ \\mathrm{m}$", "$a = -2{,}5\\ \\mathrm{m/s^2}$; $90\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "Önce birimi çevir: $108\\ \\mathrm{km/sa} \\div 3{,}6 = 30\\ \\mathrm{m/s}$. Sonra $a = \\Delta v/t$ ve $\\Delta x = \\tfrac{1}{2}(v_0 + v)\\,t$.",
      adimlar: [
        "**Birim:** $$v_0 = \\frac{108}{3{,}6} = 30\\ \\mathrm{m/s}$$",
        "**İvme:** $$a = \\frac{0 - 30}{6} = -5\\ \\mathrm{m/s^2}$$",
        "**Yol:** $$\\Delta x = \\tfrac{1}{2}(30 + 0) \\cdot 6 = 90\\ \\mathrm{m}$$",
      ],
    },
    {
      id: "u3-t16", tip: "mcq",
      soru: "$6\\ \\mathrm{m/s}$ hızla giden bir cisim $2\\ \\mathrm{m/s^2}$ sabit ivmeyle hızlanıyor. $40\\ \\mathrm{m}$ sonra hızı ne olur ve bu ne kadar sürer?",
      secenekler: ["$v = 14\\ \\mathrm{m/s}$; $t = 4\\ \\mathrm{s}$", "$v = 14\\ \\mathrm{m/s}$; $t = 7\\ \\mathrm{s}$", "$v = 10\\ \\mathrm{m/s}$; $t = 2\\ \\mathrm{s}$", "$v = 86\\ \\mathrm{m/s}$; $t = 40\\ \\mathrm{s}$", "$v = 16\\ \\mathrm{m/s}$; $t = 5\\ \\mathrm{s}$"],
      dogru: 0,
      aciklama: "Önce zamansız denklemle son hızı, sonra $v = v_0 + at$ ile süreyi bul.",
      adimlar: [
        "**Son hız:** $$v^2 = 6^2 + 2 \\cdot 2 \\cdot 40 = 36 + 160 = 196 \\quad\\Rightarrow\\quad v = 14\\ \\mathrm{m/s}$$",
        "**Süre:** $$14 = 6 + 2t \\quad\\Rightarrow\\quad t = 4\\ \\mathrm{s}$$",
        "**Kontrol:** $$x = 6 \\cdot 4 + \\tfrac{1}{2} \\cdot 2 \\cdot 16 = 24 + 16 = 40\\ \\mathrm{m}\\ ✓$$",
      ],
    },
    {
      id: "u3-t17", tip: "fill",
      soru: "Durgun hâlden $4\\ \\mathrm{m/s^2}$ sabit ivmeyle harekete başlayan bir araç $5\\ \\mathrm{s}$ sonunda kaç metre yol almış olur? (Yalnız sayıyı yazın.)",
      bosluklar: [["50", "50 m"]],
      aciklama: "$v_0 = 0$ olduğundan $x = \\tfrac{1}{2}at^2$.",
      adimlar: [
        "**Denklem:** $$x = \\tfrac{1}{2} \\cdot 4 \\cdot 5^2$$",
        "**Hesap:** $$x = 2 \\cdot 25 = 50\\ \\mathrm{m}$$ Bu anda hızı $4 \\cdot 5 = 20\\ \\mathrm{m/s}$'dir.",
      ],
    },
    {
      id: "u3-t18", tip: "tf",
      soru: "Sabit ivmeli harekette bir zaman aralığındaki ortalama hız, ilk ve son hızların aritmetik ortalamasına eşittir.",
      dogru: true,
      aciklama: "İvme sabitken $v$-$t$ grafiği bir doğrudur; altındaki yamuğun alanı $\\tfrac{1}{2}(v_0 + v)\\,t$ olduğundan $\\bar{v} = \\tfrac{1}{2}(v_0 + v)$. İvme değişiyorsa bu bağıntı genelde geçerli değildir.",
    },
  ]),

  ...turet(U, K, "u3-serbest", [
    {
      id: "u3-t19", tip: "mcq",
      soru: "$80\\ \\mathrm{m}$ yükseklikten serbest bırakılan bir taş kaç saniyede yere düşer ve yere hangi hızla çarpar? ($g = 10\\ \\mathrm{m/s^2}$, hava direnci yok)",
      secenekler: ["$t = 4\\ \\mathrm{s}$; $v = 40\\ \\mathrm{m/s}$", "$t = 8\\ \\mathrm{s}$; $v = 80\\ \\mathrm{m/s}$", "$t = 4\\ \\mathrm{s}$; $v = 80\\ \\mathrm{m/s}$", "$t = 16\\ \\mathrm{s}$; $v = 40\\ \\mathrm{m/s}$", "$t = 2\\ \\mathrm{s}$; $v = 20\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Serbest bırakılan cismin $v_0 = 0$'dır. Aşağıyı pozitif alırsak $h = \\tfrac{1}{2}gt^2$ ve $v = gt$.",
      adimlar: [
        "**Süre:** $$80 = 5t^2 \\quad\\Rightarrow\\quad t^2 = 16 \\quad\\Rightarrow\\quad t = 4\\ \\mathrm{s}$$",
        "**Hız:** $$v = gt = 10 \\cdot 4 = 40\\ \\mathrm{m/s}$$ (aşağı).",
        "**Kontrol:** $$v^2 = 2gh = 2 \\cdot 10 \\cdot 80 = 1600 \\quad\\Rightarrow\\quad v = 40\\ \\mathrm{m/s}\\ ✓$$",
      ],
    },
    {
      id: "u3-t20", tip: "mcq",
      soru: "Yerden $30\\ \\mathrm{m/s}$ hızla düşey yukarı atılan bir topun çıkabileceği en büyük yükseklik ve havada kalma süresi nedir? ($g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["$h = 45\\ \\mathrm{m}$; $6\\ \\mathrm{s}$", "$h = 90\\ \\mathrm{m}$; $6\\ \\mathrm{s}$", "$h = 45\\ \\mathrm{m}$; $3\\ \\mathrm{s}$", "$h = 30\\ \\mathrm{m}$; $6\\ \\mathrm{s}$", "$h = 45\\ \\mathrm{m}$; $9\\ \\mathrm{s}$"],
      dogru: 0,
      aciklama: "Tepede $v = 0$: çıkış süresi $v_0/g$, yükseklik $v_0^2/2g$. Havada kalma süresi çıkış süresinin iki katıdır.",
      adimlar: [
        "**Çıkış süresi:** $$t = \\frac{v_0}{g} = \\frac{30}{10} = 3\\ \\mathrm{s}$$",
        "**Yükseklik:** $$h = \\frac{v_0^2}{2g} = \\frac{900}{20} = 45\\ \\mathrm{m}$$",
        "**Havada kalma:** $2 \\times 3 = 6\\ \\mathrm{s}$.",
      ],
    },
    {
      id: "u3-t21", tip: "mcq", zorluk: 3,
      soru: "Yerden $60\\ \\mathrm{m}$ yükseklikteki bir çatıdan bir taş $20\\ \\mathrm{m/s}$ hızla düşey yukarı atılıyor. Taş kaç saniye sonra yere düşer ve yere hangi hızla çarpar? ($g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["$t = 6\\ \\mathrm{s}$; $v = -40\\ \\mathrm{m/s}$", "$t = 4\\ \\mathrm{s}$; $v = -20\\ \\mathrm{m/s}$", "$t = 6\\ \\mathrm{s}$; $v = -60\\ \\mathrm{m/s}$", "$t = 2\\ \\mathrm{s}$; $v = 0$", "$t = 8\\ \\mathrm{s}$; $v = -40\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Orijini yerde, $+y$'yi yukarı al: $y = 60 + 20t - 5t^2$. Yere düşmek $y = 0$ demektir.",
      adimlar: [
        "**Denklem:** $$0 = 60 + 20t - 5t^2 \\quad\\Rightarrow\\quad t^2 - 4t - 12 = 0$$",
        "**Çarpanlar:** $$(t - 6)(t + 2) = 0 \\quad\\Rightarrow\\quad t = 6\\ \\mathrm{s}$$ Negatif kök atılır.",
        "**Hız:** $$v = 20 - 10 \\cdot 6 = -40\\ \\mathrm{m/s}$$",
        "**Kontrol:** $$v^2 = 20^2 + 2 \\cdot 10 \\cdot 60 = 400 + 1200 = 1600 \\quad\\Rightarrow\\quad |v| = 40\\ \\mathrm{m/s}\\ ✓$$",
      ],
    },
    {
      id: "u3-t22", tip: "mcq", zorluk: 3,
      soru: "Yerden $80\\ \\mathrm{m}$ yükseklikteki bir çatıdan $1\\ \\mathrm{s}$ aralıklarla su damlıyor. Bir damla yere çarptığı anda bir sonraki damla yerden kaç metre yüksektedir? ($g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["35 m", "45 m", "5 m", "20 m", "75 m"],
      dogru: 0,
      aciklama: "Her damlanın kendi kronometresi olsun: ikinci damla $1\\ \\mathrm{s}$ geç başladığı için $t_2 = t_1 - 1$. Orijin çatıda, aşağı pozitif.",
      adimlar: [
        "**İlk damla:** $$80 = 5t_1^2 \\quad\\Rightarrow\\quad t_1 = 4\\ \\mathrm{s}$$",
        "**İkinci damla:** $t_2 = 3\\ \\mathrm{s}$: $$y_2 = 5 \\cdot 3^2 = 45\\ \\mathrm{m}$$",
        "**Yerden yükseklik:** $80 - 45 = 35\\ \\mathrm{m}$.",
      ],
    },
    {
      id: "u3-t23", tip: "mcq", zorluk: 3,
      soru: "Yerden bir top $20\\ \\mathrm{m/s}$ hızla yukarı atıldığı anda, $40\\ \\mathrm{m}$ yükseklikteki bir çatıdan ikinci bir top serbest bırakılıyor. İki top ne zaman ve yerden hangi yükseklikte karşılaşır? ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S3-02]]",
      secenekler: ["$t = 2\\ \\mathrm{s}$; $y = 20\\ \\mathrm{m}$", "$t = 2\\ \\mathrm{s}$; $y = 0$", "$t = 1\\ \\mathrm{s}$; $y = 15\\ \\mathrm{m}$", "$t = 4\\ \\mathrm{s}$; $y = 20\\ \\mathrm{m}$", "$t = 2\\ \\mathrm{s}$; $y = 40\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "Aynı koordinat sistemi (orijin yerde, $+y$ yukarı) iki topa da uygulanır. Karşılaşmada $y_1 = y_2$; $-5t^2$ terimleri iki yanda da olduğu için sadeleşir.",
      adimlar: [
        "**1. top:** $$y_1 = 20t - 5t^2$$",
        "**2. top ($v_0 = 0$):** $$y_2 = 40 - 5t^2$$",
        "**Eşitle:** $$20t = 40 \\quad\\Rightarrow\\quad t = 2\\ \\mathrm{s}$$",
        "**Yükseklik:** $$y_1 = 40 - 20 = 20\\ \\mathrm{m}$$",
        "**Hızlar:** $v_1 = 20 - 20 = 0$ (1. top tam tepede), $v_2 = -20\\ \\mathrm{m/s}$.",
      ],
    },
    {
      id: "u3-t24", tip: "tf", zorluk: 1,
      soru: "Hava direnci ihmal edildiğinde aynı yükseklikten aynı anda bırakılan ağır ve hafif iki cisim yere aynı anda düşer.",
      dogru: true,
      aciklama: "Serbest düşmede ivme $g$'dir ve kütleye bağlı değildir. Düşme süresi $t = \\sqrt{2h/g}$ yalnız yüksekliğe bağlıdır.",
    },
    {
      id: "u3-t25", tip: "tf",
      soru: "Düşey yukarı atılan bir cismin tepe noktasındaki ivmesi sıfırdır.",
      dogru: false,
      aciklama: "Tepe noktasında sıfır olan hızdır. İvme hareket boyunca $g = 10\\ \\mathrm{m/s^2}$, aşağı yönlüdür; tepede de değişmez.",
    },
  ]),
];
