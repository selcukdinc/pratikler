// 1. bölüm: Ölçme ve birim sistemleri
// Sunu örnekleri metinleriyle; şıklar ve adım adım çözümler bizim.
// Formüller LaTeX ($…$ satır içi, $$…$$ ayrı satır; src/lib/matematik.ts).
// Sunudaki düzeltme: Örnek 2'de yoğunluk 5,59 × 10⁻³ kg/m³ yazılmış; doğrusu 5,59 × 10³ kg/m³.

import { sunu, turet, type Soru } from "./tipler.ts";

const U = 1;
const K = "u1";

export const unite1: Soru[] = [
  ...sunu(U, K, [
    {
      id: "u1-s01", ornek: 1, kavram: "u1-boyut", zorluk: 1,
      soru: "$v = v_0 + at$ ifadesinin boyutunun doğruluğunu gösteriniz. Buna göre $at$ teriminin boyutu nedir?",
      secenekler: ["$[L/T]$; hızın boyutuyla aynı olduğu için denklem tutarlıdır", "$[L/T^2]$; denklem tutarsızdır", "$[L]$; denklem tutarsızdır", "$[L\\cdot T]$; denklem tutarsızdır", "$[L/T]$; ama $v_0$ boyutsuz olduğu için denklem tutarsızdır"],
      dogru: 0,
      aciklama: "Bir eşitliğin bütün terimleri aynı boyutta olmalıdır; toplanan terimler de birbiriyle aynı boyutta olmalıdır. Her terimin boyutunu temel boyutlar ($L$, $T$) cinsinden yaz ve karşılaştır.",
      adimlar: [
        "**Sol taraf:** $v$ hızdır: $$[v] = \\frac{L}{T}$$",
        "**İlk terim:** $v_0$ da hızdır: $$[v_0] = \\frac{L}{T}$$",
        "**İkinci terim:** ivme $[a] = L/T^2$, zaman $[t] = T$. Çarpım: $$[at] = \\frac{L}{T^2}\\cdot T = \\frac{L}{T}$$",
        "**Karşılaştır:** $$\\frac{L}{T} = \\frac{L}{T} + \\frac{L}{T}$$ Üç terim de hız boyutunda, eşitlik boyutça doğrudur.",
      ],
    },
    {
      id: "u1-s02", ornek: 2, kavram: "u1-yogunluk",
      soru: "Katı bir kübün kütlesi 856 g ve her bir kenarı 5,35 cm uzunluğa sahiptir. SI birim sisteminde kübün yoğunluğunu bulunuz.",
      secenekler: ["$\\approx 5{,}59\\times 10^{3}\\ \\mathrm{kg/m^3}$", "$\\approx 5{,}59\\times 10^{-3}\\ \\mathrm{kg/m^3}$", "$\\approx 5{,}59\\ \\mathrm{kg/m^3}$", "$\\approx 160\\ \\mathrm{kg/m^3}$", "$\\approx 5{,}59\\times 10^{6}\\ \\mathrm{kg/m^3}$"],
      dogru: 0,
      aciklama: "Önce kütleyi kg'a, kenarı m'ye çevir; hacmi kenarın küpüyle bul; sonra $\\rho = m/V$. Not: sunu sonucu $5{,}59\\times10^{-3}\\ \\mathrm{kg/m^3}$ yazmış; işlem $5{,}59\\times10^{3}\\ \\mathrm{kg/m^3}$ verir ($5{,}59\\ \\mathrm{g/cm^3}$, demirden biraz hafif).",
      adimlar: [
        "**Kütle:** $$m = 856\\ \\mathrm{g}\\times 10^{-3}\\ \\frac{\\mathrm{kg}}{\\mathrm{g}} = 0{,}856\\ \\mathrm{kg}$$",
        "**Kenar:** $$L = 5{,}35\\ \\mathrm{cm}\\times 10^{-2}\\ \\frac{\\mathrm{m}}{\\mathrm{cm}} = 5{,}35\\times 10^{-2}\\ \\mathrm{m}$$",
        "**Hacim:** $$V = L^3 = (5{,}35\\times 10^{-2})^3\\ \\mathrm{m^3} \\approx 1{,}53\\times 10^{-4}\\ \\mathrm{m^3}$$ Dikkat: $10^{-2}$'nin küpü $10^{-6}$'dır.",
        "**Yoğunluk:** $$\\rho = \\frac{m}{V} = \\frac{0{,}856}{1{,}53\\times 10^{-4}} \\approx 5{,}59\\times 10^{3}\\ \\mathrm{kg/m^3}$$",
        "**Kontrol:** g/cm³ ile: $$\\rho = \\frac{856}{5{,}35^3} = \\frac{856}{153} \\approx 5{,}59\\ \\mathrm{g/cm^3}$$ $1\\ \\mathrm{g/cm^3} = 1000\\ \\mathrm{kg/m^3}$ olduğundan $5{,}59\\times10^3\\ \\mathrm{kg/m^3}$ ✓",
      ],
    },
  ]),

  ...turet(U, K, "u1-si", [
    {
      id: "u1-t01", tip: "mcq", zorluk: 1,
      soru: "Mekanikte kullanılan üç temel büyüklük hangileridir?",
      secenekler: ["Uzunluk, kütle, zaman", "Uzunluk, kuvvet, zaman", "Kütle, hız, zaman", "Uzunluk, kütle, sıcaklık", "Kuvvet, enerji, zaman"],
      dogru: 0,
      aciklama: "Mekanikteki bütün nicelikler uzunluk $[L]$, kütle $[M]$ ve zaman $[T]$ cinsinden yazılabilir. Hız, kuvvet ve enerji bunlardan türetilir.",
    },
    {
      id: "u1-t02", tip: "mcq", zorluk: 1,
      soru: "Aşağıdakilerden hangisi SI sistemindeki 7 temel birimden biri değildir?",
      secenekler: ["Newton", "Kelvin", "Amper", "Mol", "Kandela"],
      dogru: 0,
      aciklama: "SI'nın 7 temel birimi: metre, kilogram, saniye, amper, kelvin, mol, kandela. Newton türetilmiş bir birimdir: $1\\ \\mathrm{N} = 1\\ \\mathrm{kg\\cdot m/s^2}$.",
    },
    {
      id: "u1-t03", tip: "fill", zorluk: 1,
      soru: "SI sisteminde sıcaklığın birimi ____, madde miktarının birimi ____'dür.\n\nBoşluk 1: sıcaklık, Boşluk 2: madde miktarı",
      bosluklar: [["kelvin", "K"], ["mol"]],
      aciklama: "Sıcaklık **kelvin** (K), madde miktarı **mol**. Diğer temel birimler: metre (m), kilogram (kg), saniye (s), amper (A), kandela (cd).",
    },
    {
      id: "u1-t04", tip: "mcq",
      soru: "Sunudaki tanıma göre 1 saniye nasıl tanımlanır?",
      secenekler: ["Sezyum-133 atomunun 9 192 631 770 titreşiminin süresi", "Bir günün 86 400'de biri", "Işığın 1 metreyi alma süresi", "Bir sarkacın bir tam salınım süresi", "Dünyanın Güneş çevresindeki turunun $3{,}2\\times10^{7}$'de biri"],
      dogru: 0,
      aciklama: "1967'den beri saniye atomik saatle tanımlanır: sezyum-133 atomunun 9 192 631 770 titreşimi 1 s'dir. Metre de buna dayanır: ışığın vakumda $\\tfrac{1}{299\\,792\\,458}$ saniyede aldığı yol.",
    },
    {
      id: "u1-t05", tip: "tf", zorluk: 1,
      soru: "Bir ölçümün sonucu birimi yazılmadan da tam olarak anlaşılabilir; örneğin \"masanın boyu 90\" demek yeterlidir.",
      dogru: false,
      aciklama: "Her ölçüm sonucu birimiyle verilmelidir. \"90\" santimetre mi, inç mi belli değildir; \"90 cm\" anlamlıdır.",
    },
  ]),

  ...turet(U, K, "u1-onek", [
    {
      id: "u1-t06", tip: "mcq", zorluk: 1,
      soru: "\"mikro\" ön ekinin anlamı ve sembolü nedir?",
      secenekler: ["$10^{-6}$, $\\mu$", "$10^{-3}$, m", "$10^{-9}$, n", "$10^{6}$, M", "$10^{-12}$, p"],
      dogru: 0,
      aciklama: "Alt katlar: mili (m) $10^{-3}$, mikro ($\\mu$) $10^{-6}$, nano (n) $10^{-9}$, piko (p) $10^{-12}$. Üst katlarda mega (M) $10^{6}$; büyük M ile küçük m'yi karıştırma.",
    },
    {
      id: "u1-t07", tip: "mcq",
      soru: "72 km/sa kaç m/s'dir?",
      secenekler: ["20 m/s", "72 000 m/s", "259,2 m/s", "7,2 m/s", "2 m/s"],
      dogru: 0,
      aciklama: "1 km = 1000 m, 1 saat = 3600 s. Birimleri kesir gibi çarpanlarla çevir; kısa yol: km/sa değerini 3,6'ya böl.",
      adimlar: [
        "**Çarpanlar:** $$72\\ \\frac{\\mathrm{km}}{\\mathrm{sa}}\\times\\frac{1000\\ \\mathrm{m}}{1\\ \\mathrm{km}}\\times\\frac{1\\ \\mathrm{sa}}{3600\\ \\mathrm{s}}$$",
        "**Hesap:** $$\\frac{72\\,000}{3600} = 20\\ \\mathrm{m/s}$$",
        "**Tuzak:** $72\\times 3{,}6 = 259{,}2$; çevirme yönünü ters almak.",
      ],
    },
    {
      id: "u1-t08", tip: "mcq",
      soru: "1 cm³ kaç m³'tür?",
      secenekler: ["$10^{-6}\\ \\mathrm{m^3}$", "$10^{-2}\\ \\mathrm{m^3}$", "$10^{-3}\\ \\mathrm{m^3}$", "$10^{-4}\\ \\mathrm{m^3}$", "$10^{-9}\\ \\mathrm{m^3}$"],
      dogru: 0,
      aciklama: "Hacim uzunluğun küpüdür; çevirme çarpanının da küpü alınır.",
      adimlar: [
        "**Uzunluk:** $$1\\ \\mathrm{cm} = 10^{-2}\\ \\mathrm{m}$$",
        "**Küp:** $$1\\ \\mathrm{cm^3} = (10^{-2}\\ \\mathrm{m})^3 = 10^{-6}\\ \\mathrm{m^3}$$",
      ],
    },
    {
      id: "u1-t09", tip: "mcq",
      soru: "Bir yarış pisti 5 mil uzunluğundadır. Bu uzunluk kaç km'dir? (1 mil = 1609 m)",
      secenekler: ["≈ 8,0 km", "≈ 3,1 km", "8045 km", "≈ 0,8 km", "≈ 80 km"],
      dogru: 0,
      aciklama: "1 mil = 1,609 km. Mil, km'den uzun olduğu için km cinsinden sayı büyümelidir.",
      adimlar: [
        "**Çarp:** $$5\\times 1609\\ \\mathrm{m} = 8045\\ \\mathrm{m}$$",
        "**km:** $$8045\\ \\mathrm{m} = 8{,}045\\ \\mathrm{km} \\approx 8{,}0\\ \\mathrm{km}$$",
      ],
    },
    {
      id: "u1-t10", tip: "fill",
      soru: "1 inç 2,54 cm'dir. 10 inç kaç santimetredir? (Yalnız sayıyı yazın.)",
      bosluklar: [["25,4", "25.4", "25,4 cm"]],
      aciklama: "$10\\times 2{,}54\\ \\mathrm{cm} = 25{,}4\\ \\mathrm{cm}$.",
    },
    {
      id: "u1-t11", tip: "mcq",
      soru: "5 mg kütle kaç kg'dır?",
      secenekler: ["$5\\times10^{-6}\\ \\mathrm{kg}$", "$5\\times10^{-3}\\ \\mathrm{kg}$", "$5\\times10^{-9}\\ \\mathrm{kg}$", "$5\\times10^{3}\\ \\mathrm{kg}$", "$5\\times10^{-4}\\ \\mathrm{kg}$"],
      dogru: 0,
      aciklama: "Mili $10^{-3}$ demektir: $1\\ \\mathrm{mg} = 10^{-3}\\ \\mathrm{g}$. Gramı da kg'a çevirmek için bir $10^{-3}$ daha gerekir.",
      adimlar: [
        "**mg → g:** $$5\\ \\mathrm{mg} = 5\\times10^{-3}\\ \\mathrm{g}$$",
        "**g → kg:** $$5\\times10^{-3}\\times10^{-3}\\ \\mathrm{kg} = 5\\times10^{-6}\\ \\mathrm{kg}$$",
      ],
    },
  ]),

  ...turet(U, K, "u1-boyut", [
    {
      id: "u1-t12", tip: "mcq", zorluk: 1,
      soru: "İvmenin boyutu nedir?",
      secenekler: ["$[L/T^2]$", "$[L/T]$", "$[L\\cdot T^2]$", "$[M\\cdot L/T^2]$", "$[L^2/T]$"],
      dogru: 0,
      aciklama: "İvme hızın zamana bölümüdür: $$[a] = \\frac{L/T}{T} = \\frac{L}{T^2}$$ $[M\\cdot L/T^2]$ ise kuvvetin boyutudur.",
    },
    {
      id: "u1-t13", tip: "mcq",
      soru: "$x$ uzunluk, $v$ hız, $t$ zaman ve $a$ ivme olmak üzere aşağıdaki eşitliklerden hangisi boyutça tutarsızdır?",
      secenekler: ["$x = v\\,t^2$", "$x = v\\,t$", "$v^2 = 2ax$", "$x = \\tfrac{1}{2}at^2$", "$v = at$"],
      dogru: 0,
      aciklama: "Her terimin boyutunu yaz: iki taraf aynı çıkmazsa eşitlik kesinlikle yanlıştır. (Boyutça tutarlı olmak doğruluğun garantisi değildir; sayısal çarpanları denetlemez.)",
      adimlar: [
        "**$x = vt^2$:** $$\\frac{L}{T}\\cdot T^2 = L\\cdot T \\neq L$$ Tutarsız.",
        "**$v^2 = 2ax$:** $$\\left(\\frac{L}{T}\\right)^2 = \\frac{L^2}{T^2},\\qquad \\frac{L}{T^2}\\cdot L = \\frac{L^2}{T^2}$$ Tutarlı.",
        "**$x = \\tfrac12 at^2$:** $$\\frac{L}{T^2}\\cdot T^2 = L$$ Tutarlı ($\\tfrac12$ boyutsuzdur).",
      ],
    },
    {
      id: "u1-t14", tip: "tf",
      soru: "Boyut analizi bir eşitlikteki $\\tfrac12$ veya $2\\pi$ gibi sayısal çarpanların doğru olup olmadığını gösterir.",
      dogru: false,
      aciklama: "Sayısal çarpanlar boyutsuzdur; boyut analizi onları göremez. $x = at^2$ ve $x = \\tfrac12 at^2$ ikisi de boyutça tutarlıdır ama yalnız ikincisi doğrudur.",
    },
    {
      id: "u1-t15", tip: "mcq", zorluk: 3,
      soru: "Bir sarkacın periyodu $T$'nin, ipin uzunluğu $\\ell$ ve yerçekimi ivmesi $g$'ye $T \\propto \\ell^{m} g^{n}$ biçiminde bağlı olduğu biliniyor. Boyut analizine göre $m$ ve $n$ nedir?",
      secenekler: ["$m = \\tfrac12,\\ n = -\\tfrac12$", "$m = 1,\\ n = -1$", "$m = -\\tfrac12,\\ n = \\tfrac12$", "$m = \\tfrac12,\\ n = \\tfrac12$", "$m = 2,\\ n = -1$"],
      dogru: 0,
      aciklama: "İki tarafın boyutlarını eşitle: $$[T] = L^{m}\\left(\\frac{L}{T^2}\\right)^{n}$$ $L$'nin ve $T$'nin üsleri ayrı ayrı eşit olmalı.",
      adimlar: [
        "**Sağ taraf:** $$L^{m}\\cdot L^{n}\\cdot T^{-2n} = L^{m+n}\\,T^{-2n}$$",
        "**$T$ için:** sol tarafta $T^1$ var: $$-2n = 1 \\;\\Rightarrow\\; n = -\\tfrac12$$",
        "**$L$ için:** sol tarafta $L$ yok: $$m + n = 0 \\;\\Rightarrow\\; m = \\tfrac12$$",
        "**Sonuç:** $$T \\propto \\sqrt{\\frac{\\ell}{g}}$$ Gerçek formül $T = 2\\pi\\sqrt{\\ell/g}$; $2\\pi$'yi boyut analizi veremez.",
      ],
    },
  ]),

  ...turet(U, K, "u1-yogunluk", [
    {
      id: "u1-t16", tip: "mcq",
      soru: "Alüminyumun yoğunluğu 2,7 g/cm³'tür. 20 cm³ hacmindeki bir alüminyum parçanın kütlesi nedir?",
      secenekler: ["54 g", "7,4 g", "22,7 g", "540 g", "0,135 g"],
      dogru: 0,
      aciklama: "$\\rho = m/V$'den $m = \\rho V$.",
      adimlar: ["**Hesap:** $$m = 2{,}7\\ \\mathrm{g/cm^3}\\times 20\\ \\mathrm{cm^3} = 54\\ \\mathrm{g}$$"],
    },
    {
      id: "u1-t17", tip: "mcq",
      soru: "Kurşunun yoğunluğu 11,3 g/cm³'tür. Bu değer SI biriminde kaçtır?",
      secenekler: ["11 300 kg/m³", "11,3 kg/m³", "0,0113 kg/m³", "1130 kg/m³", "113 000 kg/m³"],
      dogru: 0,
      aciklama: "g/cm³'ten kg/m³'e geçerken 1000 ile çarpılır.",
      adimlar: [
        "**Çevirme:** $$1\\ \\frac{\\mathrm{g}}{\\mathrm{cm^3}} = \\frac{10^{-3}\\ \\mathrm{kg}}{10^{-6}\\ \\mathrm{m^3}} = 1000\\ \\frac{\\mathrm{kg}}{\\mathrm{m^3}}$$",
        "**Sonuç:** $$11{,}3\\times 1000 = 11\\,300\\ \\mathrm{kg/m^3}$$",
      ],
    },
    {
      id: "u1-t18", tip: "tf",
      soru: "Alüminyum ile kurşunun yoğunlukları arasındaki fark yalnızca atom kütlelerinin farklı olmasından kaynaklanır.",
      dogru: false,
      aciklama: "Atom kütlesi farkı (Al: 27, Pb: 207) yoğunluk farkının bir kısmını açıklar. Kalanı kristal yapıdaki atomlar arası uzaklık ve diziliş farkından gelir.",
    },
  ]),

  ...turet(U, K, "u1-anlamli", [
    {
      id: "u1-t19", tip: "mcq", zorluk: 1,
      soru: "0,00000039 sayısında kaç anlamlı rakam vardır?",
      secenekler: ["2", "8", "9", "7", "3"],
      dogru: 0,
      aciklama: "Baştaki sıfırlar yalnız ondalık virgülün yerini gösterir, anlamlı değildir. $3{,}9\\times10^{-7}$ yazınca iki anlamlı rakam olduğu görülür.",
    },
    {
      id: "u1-t20", tip: "mcq",
      soru: "Uzunluğu 16,3 cm, genişliği 4,5 cm ölçülen bir plakanın alanı anlamlı rakam kurallarına göre nasıl yazılmalıdır?",
      secenekler: ["73 cm²", "73,35 cm²", "73,4 cm²", "70 cm²", "73,3 cm²"],
      dogru: 0,
      aciklama: "Çarpma ve bölmede sonuç, en az anlamlı rakamı olan çarpan kadar anlamlı rakam taşır.",
      adimlar: [
        "**Çarpım:** $$16{,}3\\times 4{,}5 = 73{,}35$$",
        "**Anlamlı rakamlar:** 16,3 üç, 4,5 iki anlamlı rakamlı. Sonuç iki anlamlı rakamla yazılır.",
        "**Sonuç:** $$A = 73\\ \\mathrm{cm^2}$$",
      ],
    },
    {
      id: "u1-t21", tip: "mcq",
      soru: "9,12 − 5,4917 işleminin sonucu anlamlı rakam kurallarına göre nasıl yazılır?",
      secenekler: ["3,63", "3,6283", "3,628", "3,6", "4"],
      dogru: 0,
      aciklama: "Toplama ve çıkarmada sonuç, ondalık basamak sayısı en az olan terim kadar ondalık basamakla yazılır.",
      adimlar: [
        "**İşlem:** $$9{,}12 - 5{,}4917 = 3{,}6283$$",
        "**Basamak:** 9,12'nin iki ondalık basamağı var; sonuç iki ondalığa yuvarlanır: 3,63.",
      ],
    },
    {
      id: "u1-t22", tip: "tf",
      soru: "2,70 sayısının sonundaki sıfır anlamlıdır; sayı üç anlamlı rakam içerir.",
      dogru: true,
      aciklama: "Ondalık kısımda sona yazılan sıfır ölçülmüş demektir: 2,70, ölçümün yüzde birler basamağına kadar yapıldığını söyler. Bu yüzden üç anlamlı rakam vardır.",
    },
  ]),
];
