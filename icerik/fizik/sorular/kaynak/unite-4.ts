// 4. bölüm: İki boyutta hareket
// Sunu örnekleri metinleriyle; şıklar ve adım adım çözümler bizim. Sayısal sorularda,
// sununun kendisi 9,8 kullanmadıysa g = 10 m/s².
// Formüller LaTeX ($…$ satır içi, $$…$$ ayrı satır; src/lib/matematik.ts).
// Sunudaki düzeltmeler: Örnek 5'te "tan 37° = 4/3" yazılmış, kullanılan tan 53° = 4/3;
// Örnek 6'nın sonuçları (0,816 ve 686 m) g = 9,8 ile çıkıyor; Örnek 7'de 40 × 4,47 ≈ 179 m;
// Örnek 12 (c) t_b = 2 / 19,4 sa ≈ 6,2 dk.

import { sunu, turet, type Soru } from "./tipler.ts";

const U = 4;
const K = "u4";

const ORNEK1 = "Düzlemde bir hareketlinin koordinatları $x = t^3 - 2t^2 + 5$ ve $y = 3t^2 - 4t + 4$ olarak veriliyor (SI birimleri).";
const ORNEK2 = "Düzlemde Hareket: Bir parçacık $20\\ \\mathrm{m/s}$'lik $x$ bileşenli ve $-15\\ \\mathrm{m/s}$'lik $y$ bileşenli ilk hızla $t = 0$'da başlangıç noktasından harekete geçmektedir. Parçacık sadece $a_x = 4\\ \\mathrm{m/s^2}$ ile verilen ivmenin $x$ bileşeniyle $xy$ düzleminde hareket etmektedir.";
const ORNEK4 = "Bir futbolcunun vurduğu top $30\\ \\mathrm{m/s}$ ilk hızla ve yatayla $37^\\circ$ açı altında yükseliyor. ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\ \\mathrm{m/s^2}$)";
const ORNEK8 = "Bir motosikletli yerden $20\\ \\mathrm{m}$ yükseklikteki bir uçurumdan $v_0$ yatay hızıyla atlayıp $9\\ \\mathrm{m}$ genişliğindeki bir nehrin öte tarafına geçebilmek istiyor. ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S4-02]]";
const ORNEK9 = "Bir top $33\\ \\mathrm{m}$ yükseklikte bir binanın çatısından, yatayla $53^\\circ$ açı altında $5\\ \\mathrm{m/s}$ hızıyla atılıyor. Yerde, binanın kapısında beklemekte olan bir çocuk topla aynı anda ve aynı yönde, sabit $a$ ivmesiyle koşmaya başlıyor. ($\\sin 53^\\circ = 0{,}8$; $\\cos 53^\\circ = 0{,}6$; $g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S4-03]]";
const ORNEK11 = "Bir binanın dış asansörü yerden $8\\ \\mathrm{m}$ yükseklikteyken sabit bir $u$ hızıyla inmeye başlıyor. Aynı anda, binadan $6\\ \\mathrm{m}$ yatay uzaklıkta beklemekte olan bir çocuk, elindeki topu $20\\ \\mathrm{m/s}$ hızla ve $53^\\circ$ açıyla, asansöre doğru fırlatıyor. ($\\sin 53^\\circ = 0{,}8$; $\\cos 53^\\circ = 0{,}6$; $g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S4-05]]";
const ORNEK12 = "Durgun sudaki hızı $20\\ \\mathrm{km/saat}$ olan bir motor, genişliği $2\\ \\mathrm{km}$ olan bir nehri geçmeyi deniyor. Nehirde akıntı hızı $5\\ \\mathrm{km/saat}$'tir.\n\n[[G-S4-06]]";

export const unite4: Soru[] = [
  ...sunu(U, K, [
    {
      id: "u4-s01a", ornek: 1, parca: "a", kavram: "u4-vektorel",
      soru: `${ORNEK1} Hız ve ivmeyi zamanın fonksiyonları olarak ifade edin.`,
      secenekler: [
        "$\\vec{v} = (3t^2 - 4t)\\,\\hat{\\imath} + (6t - 4)\\,\\hat{\\jmath}$; $\\vec{a} = (6t - 4)\\,\\hat{\\imath} + 6\\,\\hat{\\jmath}$",
        "$\\vec{v} = (3t^2 - 4t)\\,\\hat{\\imath} + (6t - 4)\\,\\hat{\\jmath}$; $\\vec{a} = (6t - 4)\\,\\hat{\\imath} + 6t\\,\\hat{\\jmath}$",
        "$\\vec{v} = (3t^2 - 2t)\\,\\hat{\\imath} + (3t - 4)\\,\\hat{\\jmath}$; $\\vec{a} = (6t - 2)\\,\\hat{\\imath} + 3\\,\\hat{\\jmath}$",
        "$\\vec{v} = (t^2 - 4t)\\,\\hat{\\imath} + (6t - 4)\\,\\hat{\\jmath}$; $\\vec{a} = (2t - 4)\\,\\hat{\\imath} + 6\\,\\hat{\\jmath}$",
        "$\\vec{v} = (3t^2 - 4t + 5)\\,\\hat{\\imath} + (6t - 4)\\,\\hat{\\jmath}$; $\\vec{a} = (6t - 4)\\,\\hat{\\imath} + 6\\,\\hat{\\jmath}$",
      ],
      dogru: 0,
      aciklama: "İki boyutta her bileşen kendi başına türevlenir: $v_x = \\dfrac{dx}{dt}$, $v_y = \\dfrac{dy}{dt}$; $a_x = \\dfrac{dv_x}{dt}$, $a_y = \\dfrac{dv_y}{dt}$.",
      adimlar: [
        "**$x$ bileşeni:** $$v_x = \\frac{d}{dt}(t^3 - 2t^2 + 5) = 3t^2 - 4t, \\qquad a_x = 6t - 4$$",
        "**$y$ bileşeni:** $$v_y = \\frac{d}{dt}(3t^2 - 4t + 4) = 6t - 4, \\qquad a_y = 6\\ \\text{(sabit)}$$",
        "**Vektör olarak:** $$\\vec{v} = (3t^2 - 4t)\\,\\hat{\\imath} + (6t - 4)\\,\\hat{\\jmath}\\ \\mathrm{m/s}, \\qquad \\vec{a} = (6t - 4)\\,\\hat{\\imath} + 6\\,\\hat{\\jmath}\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u4-s01b", ornek: 1, parca: "b", kavram: "u4-vektorel",
      soru: `${ORNEK1} $t = 1\\ \\mathrm{s}$ anında konum, hız ve ivme vektörlerini bulun.`,
      secenekler: [
        "$\\vec{r} = 4\\hat{\\imath} + 3\\hat{\\jmath}$; $\\vec{v} = -\\hat{\\imath} + 2\\hat{\\jmath}$; $\\vec{a} = 2\\hat{\\imath} + 6\\hat{\\jmath}$",
        "$\\vec{r} = 4\\hat{\\imath} + 3\\hat{\\jmath}$; $\\vec{v} = \\hat{\\imath} + 2\\hat{\\jmath}$; $\\vec{a} = 2\\hat{\\imath} + 6\\hat{\\jmath}$",
        "$\\vec{r} = 3\\hat{\\imath} + 4\\hat{\\jmath}$; $\\vec{v} = -\\hat{\\imath} + 2\\hat{\\jmath}$; $\\vec{a} = 6\\hat{\\imath} + 2\\hat{\\jmath}$",
        "$\\vec{r} = 4\\hat{\\imath} + 3\\hat{\\jmath}$; $\\vec{v} = -\\hat{\\imath} - 2\\hat{\\jmath}$; $\\vec{a} = -2\\hat{\\imath} + 6\\hat{\\jmath}$",
        "$\\vec{r} = 5\\hat{\\imath} + 4\\hat{\\jmath}$; $\\vec{v} = -\\hat{\\imath} + 2\\hat{\\jmath}$; $\\vec{a} = 2\\hat{\\imath} + 6\\hat{\\jmath}$",
      ],
      dogru: 0,
      aciklama: "Bir andaki vektörleri bulmak için zaman fonksiyonlarına $t = 1$ koyulur; her bileşen ayrı hesaplanır.",
      adimlar: [
        "**Konum:** $x(1) = 1 - 2 + 5 = 4$, $y(1) = 3 - 4 + 4 = 3$: $$\\vec{r} = 4\\hat{\\imath} + 3\\hat{\\jmath}\\ \\mathrm{m}$$",
        "**Hız:** $v_x(1) = 3 - 4 = -1$, $v_y(1) = 6 - 4 = 2$: $$\\vec{v} = -\\hat{\\imath} + 2\\hat{\\jmath}\\ \\mathrm{m/s}$$",
        "**İvme:** $a_x(1) = 6 - 4 = 2$, $a_y = 6$: $$\\vec{a} = 2\\hat{\\imath} + 6\\hat{\\jmath}\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u4-s01c", ornek: 1, parca: "c ve d", kavram: "u4-vektorel", zorluk: 3,
      soru: `${ORNEK1} $t = 1\\ \\mathrm{s}$ anında hız ve ivmenin büyüklüğünü ve hız ile ivme arasındaki açıyı bulun.`,
      secenekler: ["$|\\vec{v}| = \\sqrt{5}\\ \\mathrm{m/s}$; $|\\vec{a}| = \\sqrt{40}\\ \\mathrm{m/s^2}$; $\\theta = 45^\\circ$", "$|\\vec{v}| = \\sqrt{5}\\ \\mathrm{m/s}$; $|\\vec{a}| = \\sqrt{40}\\ \\mathrm{m/s^2}$; $\\theta = 90^\\circ$", "$|\\vec{v}| = 3\\ \\mathrm{m/s}$; $|\\vec{a}| = 8\\ \\mathrm{m/s^2}$; $\\theta = 45^\\circ$", "$|\\vec{v}| = \\sqrt{5}\\ \\mathrm{m/s}$; $|\\vec{a}| = \\sqrt{40}\\ \\mathrm{m/s^2}$; $\\theta = 135^\\circ$", "$|\\vec{v}| = \\sqrt{3}\\ \\mathrm{m/s}$; $|\\vec{a}| = \\sqrt{32}\\ \\mathrm{m/s^2}$; $\\theta = 60^\\circ$"],
      dogru: 0,
      aciklama: "Büyüklükler Pisagor'la bulunur. İki vektör arasındaki açıyı skaler çarpım verir: $\\cos\\theta = \\dfrac{\\vec{v}\\cdot\\vec{a}}{|\\vec{v}|\\,|\\vec{a}|}$.",
      adimlar: [
        "**Büyüklükler:** $$|\\vec{v}| = \\sqrt{(-1)^2 + 2^2} = \\sqrt{5}\\ \\mathrm{m/s}, \\qquad |\\vec{a}| = \\sqrt{2^2 + 6^2} = \\sqrt{40}\\ \\mathrm{m/s^2}$$",
        "**Skaler çarpım:** $$\\vec{v}\\cdot\\vec{a} = (-1)(2) + (2)(6) = -2 + 12 = 10$$",
        "**Kosinüs:** $$\\cos\\theta = \\frac{10}{\\sqrt{5}\\,\\sqrt{40}} = \\frac{10}{\\sqrt{200}} = \\frac{10}{10\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$",
        "**Açı:** $$\\theta = \\cos^{-1}\\!\\left(\\frac{\\sqrt{2}}{2}\\right) = 45^\\circ$$",
      ],
    },
    {
      id: "u4-s02a", ornek: 2, parca: "a", kavram: "u4-vektorel",
      soru: `${ORNEK2} Zamanın fonksiyonu olarak herhangi bir andaki hız vektörünü bulunuz.`,
      secenekler: ["$\\vec{v} = (20 + 4t)\\,\\hat{\\imath} - 15\\,\\hat{\\jmath}\\ \\mathrm{m/s}$", "$\\vec{v} = (20 + 4t)\\,\\hat{\\imath} + (-15 + 4t)\\,\\hat{\\jmath}\\ \\mathrm{m/s}$", "$\\vec{v} = 20\\,\\hat{\\imath} + (-15 + 4t)\\,\\hat{\\jmath}\\ \\mathrm{m/s}$", "$\\vec{v} = (20 + 2t^2)\\,\\hat{\\imath} - 15\\,\\hat{\\jmath}\\ \\mathrm{m/s}$", "$\\vec{v} = (20 - 4t)\\,\\hat{\\imath} - 15\\,\\hat{\\jmath}\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Sabit ivmede her bileşen için $v = v_0 + at$ ayrı yazılır. İvmenin $y$ bileşeni sıfır olduğundan $v_y$ değişmez.",
      adimlar: [
        "**Verilenler:** $v_{0x} = 20\\ \\mathrm{m/s}$, $v_{0y} = -15\\ \\mathrm{m/s}$, $a_x = 4\\ \\mathrm{m/s^2}$, $a_y = 0$.",
        "**$x$ bileşeni:** $$v_x = v_{0x} + a_x t = 20 + 4t$$",
        "**$y$ bileşeni:** $$v_y = -15 + 0 \\cdot t = -15\\ \\mathrm{m/s}\\ \\text{(sabit)}$$",
        "**Vektör:** $$\\vec{v} = (20 + 4t)\\,\\hat{\\imath} - 15\\,\\hat{\\jmath}\\ \\mathrm{m/s}$$",
      ],
    },
    {
      id: "u4-s02b", ornek: 2, parca: "b", kavram: "u4-vektorel",
      soru: `${ORNEK2} $t = 5\\ \\mathrm{s}$'de parçacığın hızının büyüklüğünü ve yönünü hesaplayınız.`,
      secenekler: ["$|\\vec{v}| \\approx 43\\ \\mathrm{m/s}$; $\\theta \\approx -21^\\circ$", "$|\\vec{v}| \\approx 43\\ \\mathrm{m/s}$; $\\theta \\approx 21^\\circ$", "$|\\vec{v}| = 25\\ \\mathrm{m/s}$; $\\theta \\approx -37^\\circ$", "$|\\vec{v}| \\approx 55\\ \\mathrm{m/s}$; $\\theta \\approx -21^\\circ$", "$|\\vec{v}| \\approx 43\\ \\mathrm{m/s}$; $\\theta \\approx -69^\\circ$"],
      dogru: 0,
      aciklama: "Önce $t = 5\\ \\mathrm{s}$'deki bileşenleri bul, sonra büyüklük için Pisagor, yön için $\\tan\\theta = v_y/v_x$.",
      adimlar: [
        "**Bileşenler:** $v_x = 20 + 4 \\cdot 5 = 40\\ \\mathrm{m/s}$, $v_y = -15\\ \\mathrm{m/s}$: $$\\vec{v} = 40\\,\\hat{\\imath} - 15\\,\\hat{\\jmath}\\ \\mathrm{m/s}$$",
        "**Büyüklük:** $$|\\vec{v}| = \\sqrt{40^2 + 15^2} = \\sqrt{1600 + 225} = \\sqrt{1825} \\approx 43\\ \\mathrm{m/s}$$",
        "**Yön:** $$\\theta = \\tan^{-1}\\!\\left(\\frac{-15}{40}\\right) \\approx -21^\\circ$$ $v_x$ pozitif, $v_y$ negatif: dördüncü çeyrek, yani $+x$'in $21^\\circ$ altı.",
      ],
    },
    {
      id: "u4-s03", ornek: 3, kavram: "u4-egik", zorluk: 1,
      soru: "Maksimum atış uzaklığı (menzil): Yatay bir düzlemdeki cisim hangi açıda atılırsa en uzağa düşer, yani menzili (erimi) maksimum olur?",
      secenekler: ["45°", "30°", "60°", "90°", "37°"],
      dogru: 0,
      aciklama: "Yatay düzlemde menzil $R = \\dfrac{v_0^2 \\sin 2\\theta}{g}$. Aynı $v_0$ için $R$'nin en büyük olması $\\sin 2\\theta$'nın en büyük ($1$) olmasını ister.",
      adimlar: [
        "**Yörünge denklemi:** $$y = (\\tan\\theta)\\,x - \\frac{g\\,x^2}{2v_0^2\\cos^2\\theta}$$ Yere dönüşte $y = 0$.",
        "**Çöz:** $x = 0$ (atış noktası) ya da $$x = \\frac{2v_0^2 \\cos^2\\theta \\tan\\theta}{g} = \\frac{2v_0^2 \\sin\\theta\\cos\\theta}{g}$$",
        "**Menzil:** $2\\sin\\theta\\cos\\theta = \\sin 2\\theta$ olduğundan $$R = \\frac{v_0^2 \\sin 2\\theta}{g}$$",
        "**Maksimum:** $$\\sin 2\\theta = 1 \\quad\\Rightarrow\\quad 2\\theta = 90^\\circ \\quad\\Rightarrow\\quad \\theta = 45^\\circ$$",
      ],
    },
    {
      id: "u4-s04a", ornek: 4, parca: "a ve b", kavram: "u4-egik",
      soru: `${ORNEK4} $t = 1\\ \\mathrm{s}$ anında topun konum ve hız bileşenleri ne olur?`,
      secenekler: ["$x = 24\\ \\mathrm{m}$, $y = 13\\ \\mathrm{m}$; $v_x = 24\\ \\mathrm{m/s}$, $v_y = 8\\ \\mathrm{m/s}$", "$x = 24\\ \\mathrm{m}$, $y = 18\\ \\mathrm{m}$; $v_x = 24\\ \\mathrm{m/s}$, $v_y = 18\\ \\mathrm{m/s}$", "$x = 18\\ \\mathrm{m}$, $y = 19\\ \\mathrm{m}$; $v_x = 18\\ \\mathrm{m/s}$, $v_y = 14\\ \\mathrm{m/s}$", "$x = 24\\ \\mathrm{m}$, $y = 13\\ \\mathrm{m}$; $v_x = 14\\ \\mathrm{m/s}$, $v_y = 8\\ \\mathrm{m/s}$", "$x = 24\\ \\mathrm{m}$, $y = 23\\ \\mathrm{m}$; $v_x = 24\\ \\mathrm{m/s}$, $v_y = 28\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Eğik atışta yatay hareket sabit hızlı ($a_x = 0$), düşey hareket sabit ivmelidir ($a_y = -g$). Önce ilk hızın bileşenleri bulunur.",
      adimlar: [
        "**İlk hız bileşenleri:** $$v_{0x} = 30\\cos 37^\\circ = 24\\ \\mathrm{m/s}, \\qquad v_{0y} = 30\\sin 37^\\circ = 18\\ \\mathrm{m/s}$$",
        "**Denklemler:** $$x = 24t, \\quad y = 18t - 5t^2, \\quad v_x = 24, \\quad v_y = 18 - 10t$$",
        "**Konum ($t = 1\\ \\mathrm{s}$):** $$x = 24\\ \\mathrm{m}, \\qquad y = 18 - 5 = 13\\ \\mathrm{m}$$",
        "**Hız ($t = 1\\ \\mathrm{s}$):** $$v_x = 24\\ \\mathrm{m/s}\\ \\text{(değişmez)}, \\qquad v_y = 18 - 10 = 8\\ \\mathrm{m/s}$$",
      ],
    },
    {
      id: "u4-s04b", ornek: 4, parca: "c ve d", kavram: "u4-egik",
      soru: `${ORNEK4} Top maksimum yüksekliğe kaç saniyede çıkar ve maksimum yükseklik ne kadardır?`,
      secenekler: ["$t = 1{,}8\\ \\mathrm{s}$; $y_{\\max} = 16{,}2\\ \\mathrm{m}$", "$t = 3{,}6\\ \\mathrm{s}$; $y_{\\max} = 16{,}2\\ \\mathrm{m}$", "$t = 1{,}8\\ \\mathrm{s}$; $y_{\\max} = 32{,}4\\ \\mathrm{m}$", "$t = 2{,}4\\ \\mathrm{s}$; $y_{\\max} = 28{,}8\\ \\mathrm{m}$", "$t = 1{,}8\\ \\mathrm{s}$; $y_{\\max} = 45\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "Tepe noktasında hız tamamen yataydır: $v_y = 0$. Bu anı $y$ denklemine koymak yüksekliği verir.",
      adimlar: [
        "**Tepe anı:** $$v_y = 18 - 10t = 0 \\quad\\Rightarrow\\quad t = 1{,}8\\ \\mathrm{s}$$",
        "**Yükseklik:** $$y_{\\max} = 18 \\cdot 1{,}8 - 5 \\cdot 1{,}8^2 = 32{,}4 - 16{,}2 = 16{,}2\\ \\mathrm{m}$$",
        "**Kontrol:** $$\\frac{v_{0y}^2}{2g} = \\frac{324}{20} = 16{,}2\\ \\mathrm{m}\\ ✓$$",
      ],
    },
    {
      id: "u4-s04c", ornek: 4, parca: "e", kavram: "u4-egik",
      soru: `${ORNEK4} Top ne kadar uzağa düşer?`,
      secenekler: ["≈ 86 m", "≈ 43 m", "90 m", "≈ 108 m", "≈ 65 m"],
      dogru: 0,
      aciklama: "Yatay düzlemde uçuş süresi tepe süresinin iki katıdır; menzil yatay hız ile uçuş süresinin çarpımıdır.",
      adimlar: [
        "**Uçuş süresi:** $$t_u = 2 \\times 1{,}8 = 3{,}6\\ \\mathrm{s}$$",
        "**Menzil:** $$R = v_{0x}\\,t_u = 24 \\times 3{,}6 = 86{,}4 \\approx 86\\ \\mathrm{m}$$",
        "**Formülle kontrol:** $$R = \\frac{v_0^2 \\sin 2\\theta}{g} = \\frac{900 \\times \\sin 74^\\circ}{10} = \\frac{900 \\times 0{,}96}{10} = 86{,}4\\ \\mathrm{m}\\ ✓$$",
      ],
    },
    {
      id: "u4-s05", ornek: 5, kavram: "u4-egik", zorluk: 3,
      soru: "Bir top $9\\ \\mathrm{m}$ ötedeki bir duvara yatayla $53^\\circ$ açı altında atılıyor. Top duvara yerden $7\\ \\mathrm{m}$ yükseklikte çarpıyor. Topun ilk hızı ne idi? ($\\cos 53^\\circ = 0{,}6$; $\\tan 53^\\circ = 4/3$; $g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S4-01]]",
      secenekler: ["15 m/s", "10 m/s", "20 m/s", "12 m/s", "225 m/s"],
      dogru: 0,
      aciklama: "Zaman verilmediği için yörünge denklemini kullanmak en hızlı yoldur: $$y = (\\tan\\theta)\\,x - \\frac{g\\,x^2}{2v_0^2\\cos^2\\theta}$$ Not: sunu \"$\\tan 37^\\circ = 4/3$\" yazmış; kullanılan değer $\\tan 53^\\circ = 4/3$'tür.",
      adimlar: [
        "**Bilinenler:** $x = 9\\ \\mathrm{m}$, $y = 7\\ \\mathrm{m}$, $\\tan 53^\\circ = 4/3$, $\\cos 53^\\circ = 0{,}6$.",
        "**Yerine koy:** $$7 = \\frac{4}{3} \\cdot 9 - \\frac{10 \\cdot 81}{2v_0^2 \\cdot 0{,}36}$$",
        "**Sadeleştir:** $$7 = 12 - \\frac{810}{0{,}72\\,v_0^2} \\quad\\Rightarrow\\quad \\frac{810}{0{,}72\\,v_0^2} = 5$$",
        "**Çöz:** $$v_0^2 = \\frac{810}{3{,}6} = 225 \\quad\\Rightarrow\\quad v_0 = 15\\ \\mathrm{m/s}$$",
        "**Zamanla kontrol:** $v_{0x} = 9\\ \\mathrm{m/s}$, duvara $t = 1\\ \\mathrm{s}$'de varır: $$y = 12 \\cdot 1 - 5 \\cdot 1^2 = 7\\ \\mathrm{m}\\ ✓$$",
      ],
    },
    {
      id: "u4-s06a", ornek: 6, parca: "a", kavram: "u4-egik", zorluk: 3,
      soru: "Liman ağzından $560\\ \\mathrm{m}$ açıkta bir gemi vardır. Liman ağzında deniz düzeyinde bulunan bir savunma topu $82\\ \\mathrm{m/s}$ ilk hızıyla gülleler atıyor. Gemiyi vurmak için gülleler yatayla hangi $\\theta$ açısıyla atılmalıdır? ($g = 9{,}8\\ \\mathrm{m/s^2}$)",
      secenekler: ["$\\theta \\approx 27^\\circ$ ya da $\\theta \\approx 63^\\circ$", "Yalnız $\\theta \\approx 27^\\circ$", "$\\theta \\approx 45^\\circ$", "$\\theta \\approx 54^\\circ$ ya da $\\theta \\approx 36^\\circ$", "Yalnız $\\theta \\approx 63^\\circ$"],
      dogru: 0,
      aciklama: "Menzil $R = \\dfrac{v_0^2 \\sin 2\\theta}{g}$'den $\\sin 2\\theta$ bulunur. $\\sin 2\\theta = k$ denkleminin $0^\\circ$–$90^\\circ$ arasında iki çözümü vardır: $\\theta$ ve $90^\\circ - \\theta$ (tümler açılar aynı menzili verir). Not: sunu $g$'yi 10 yazmış, sayılar $g = 9{,}8$ ile çıkıyor.",
      adimlar: [
        "**Menzil formülü:** $$560 = \\frac{82^2 \\sin 2\\theta}{9{,}8}$$",
        "**$\\sin 2\\theta$:** $$\\sin 2\\theta = \\frac{560 \\cdot 9{,}8}{6724} \\approx 0{,}816$$",
        "**İlk açı:** $$2\\theta = \\sin^{-1}(0{,}816) \\approx 54{,}7^\\circ \\quad\\Rightarrow\\quad \\theta \\approx 27^\\circ$$",
        "**İkinci açı:** $\\sin(180^\\circ - 54{,}7^\\circ)$ de $0{,}816$'dır: $$2\\theta \\approx 125{,}3^\\circ \\quad\\Rightarrow\\quad \\theta \\approx 63^\\circ$$ İki açı tümler: $27^\\circ + 63^\\circ = 90^\\circ$.",
      ],
    },
    {
      id: "u4-s06b", ornek: 6, parca: "b", kavram: "u4-egik",
      soru: "Liman ağzında deniz düzeyinde bulunan bir savunma topu $82\\ \\mathrm{m/s}$ ilk hızıyla gülleler atıyor. Güllelerin maksimum menzili nedir? ($g = 9{,}8\\ \\mathrm{m/s^2}$)",
      secenekler: ["≈ 686 m", "≈ 343 m", "≈ 672 m", "≈ 560 m", "≈ 1372 m"],
      dogru: 0,
      aciklama: "Maksimum menzil $\\theta = 45^\\circ$'de, $\\sin 90^\\circ = 1$ iken elde edilir: $R_{\\max} = v_0^2/g$.",
      adimlar: [
        "**Açı:** $\\theta = 45^\\circ$, dolayısıyla $\\sin 2\\theta = 1$.",
        "**Menzil:** $$R_{\\max} = \\frac{82^2}{9{,}8} = \\frac{6724}{9{,}8} \\approx 686\\ \\mathrm{m}$$ $g = 10$ alınsaydı $672\\ \\mathrm{m}$ çıkardı.",
      ],
    },
    {
      id: "u4-s07", ornek: 7, kavram: "u4-yatay",
      soru: "Bir uçak zor durumdaki bir kısım kaşife acil kumanya paketi atıyor. Uçak yerden $100\\ \\mathrm{m}$ yükseklikte $40\\ \\mathrm{m/s}$ hızla yatay olarak yol alıyor ise paket bırakıldığı noktaya göre nerede yere çarpar? ($g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["≈ 179 m ileride", "≈ 89 m ileride", "400 m ileride", "100 m ileride", "≈ 253 m ileride"],
      dogru: 0,
      aciklama: "Paket bırakıldığı anda uçağın yatay hızını taşır, düşey ilk hızı sıfırdır. Düşme süresini yalnız yükseklik belirler; yatay mesafe bu süre ile yatay hızın çarpımıdır. Not: sunu $t$'yi $4{,}5\\ \\mathrm{s}$'ye yuvarlayıp $181\\ \\mathrm{m}$ bulmuş; $\\sqrt{20} \\approx 4{,}47$ ile $179\\ \\mathrm{m}$ çıkar.",
      adimlar: [
        "**İlk hız:** $v_{0x} = 40\\ \\mathrm{m/s}$, $v_{0y} = 0$.",
        "**Düşme süresi:** $$0 = 100 - \\tfrac{1}{2} \\cdot 10 \\cdot t^2 \\quad\\Rightarrow\\quad t^2 = 20 \\quad\\Rightarrow\\quad t = \\sqrt{20} \\approx 4{,}47\\ \\mathrm{s}$$",
        "**Yatay uzaklık:** $$x = 40 \\times 4{,}47 \\approx 179\\ \\mathrm{m}$$",
      ],
    },
    {
      id: "u4-s08a", ornek: 8, parca: "a ve b", kavram: "u4-yatay",
      soru: `${ORNEK8}\n\nMotosikletin uçuş süresi ne kadardır ve ilk hızı ne olmalıdır ki nehri geçebilsin?`,
      secenekler: ["$t = 2\\ \\mathrm{s}$; $v_0 = 4{,}5\\ \\mathrm{m/s}$", "$t = 4\\ \\mathrm{s}$; $v_0 = 2{,}25\\ \\mathrm{m/s}$", "$t = 2\\ \\mathrm{s}$; $v_0 = 9\\ \\mathrm{m/s}$", "$t = 1\\ \\mathrm{s}$; $v_0 = 9\\ \\mathrm{m/s}$", "$t = 2\\ \\mathrm{s}$; $v_0 = 20\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Yatay atış eğik atışın $\\theta = 0$ hâlidir. Uçuş süresini düşey hareket ($20\\ \\mathrm{m}$ düşüş) belirler; yatay hız bu sürede $9\\ \\mathrm{m}$ gitmeye yetmelidir.",
      adimlar: [
        "**Denklemler:** Orijin uçurumun dibinde: $$x = v_0 t, \\qquad y = 20 - 5t^2$$",
        "**Süre:** $$0 = 20 - 5t^2 \\quad\\Rightarrow\\quad t = 2\\ \\mathrm{s}$$",
        "**İlk hız:** $$9 = v_0 \\cdot 2 \\quad\\Rightarrow\\quad v_0 = 4{,}5\\ \\mathrm{m/s}$$ Bu, gereken en küçük hızdır.",
      ],
    },
    {
      id: "u4-s08b", ornek: 8, parca: "c", kavram: "u4-yatay",
      soru: `${ORNEK8}\n\nMotosiklet $v_0 = 4{,}5\\ \\mathrm{m/s}$ ile atlarsa yere çarpmadan hemen önceki hızı ne olur?`,
      secenekler: ["≈ 21 m/s", "≈ 24,5 m/s", "20 m/s", "4,5 m/s", "≈ 15,5 m/s"],
      dogru: 0,
      aciklama: "Çarpma anındaki hız iki bileşenin vektörel toplamıdır; yatay bileşen değişmez, düşey bileşen $-gt$ olur. Bileşenler toplanmaz, Pisagor uygulanır.",
      adimlar: [
        "**Yatay bileşen:** $v_x = 4{,}5\\ \\mathrm{m/s}$.",
        "**Düşey bileşen:** $$v_y = -gt = -10 \\cdot 2 = -20\\ \\mathrm{m/s}$$ (aşağı).",
        "**Büyüklük:** $$v = \\sqrt{4{,}5^2 + 20^2} = \\sqrt{20{,}25 + 400} \\approx \\sqrt{420} \\approx 21\\ \\mathrm{m/s}$$",
      ],
    },
    {
      id: "u4-s09a", ornek: 9, parca: "a ve b", kavram: "u4-egik", zorluk: 3,
      soru: `${ORNEK9}\n\nTopun yere düşünceye kadar uçuş süresi ne olur?`,
      secenekler: ["3 s", "0,8 s", "2,6 s", "3,8 s", "2,2 s"],
      dogru: 0,
      aciklama: "Orijini çocuğun bulunduğu yerde (binanın dibinde) al. Topun düşey denklemi $y = 33 + 4t - 5t^2$; yere düşmek $y = 0$ demektir.",
      adimlar: [
        "**İlk hız bileşenleri:** $$v_{0x} = 5 \\times 0{,}6 = 3\\ \\mathrm{m/s}, \\qquad v_{0y} = 5 \\times 0{,}8 = 4\\ \\mathrm{m/s}$$",
        "**Denklem:** $$y = 33 + 4t - 5t^2 = 0 \\quad\\Rightarrow\\quad 5t^2 - 4t - 33 = 0$$",
        "**Kökler:** $$t = \\frac{4 \\pm \\sqrt{16 + 660}}{10} = \\frac{4 \\pm 26}{10} \\quad\\Rightarrow\\quad t = 3\\ \\mathrm{s} \\ \\text{ ya da } \\ t = -2{,}2\\ \\mathrm{s}$$",
        "**Sonuç:** Negatif kök atılır, $t = 3\\ \\mathrm{s}$.",
      ],
    },
    {
      id: "u4-s09b", ornek: 9, parca: "c ve d", kavram: "u4-egik", zorluk: 3,
      soru: `${ORNEK9}\n\nTop binadan ne kadar uzağa düşer ve çocuğun ivmesi ne olmalıdır ki top yere düşmeden onu tutabilsin?`,
      secenekler: ["$x = 9\\ \\mathrm{m}$; $a = 2\\ \\mathrm{m/s^2}$", "$x = 15\\ \\mathrm{m}$; $a = 3{,}3\\ \\mathrm{m/s^2}$", "$x = 9\\ \\mathrm{m}$; $a = 6\\ \\mathrm{m/s^2}$", "$x = 9\\ \\mathrm{m}$; $a = 1\\ \\mathrm{m/s^2}$", "$x = 12\\ \\mathrm{m}$; $a = 2{,}7\\ \\mathrm{m/s^2}$"],
      dogru: 0,
      aciklama: "Top ile çocuk aynı anda aynı $x$ konumunda olmalı. Çocuğun hareketi durgun hâlden sabit ivmeli: $x_2 = \\tfrac{1}{2}at^2$.",
      adimlar: [
        "**Topun yatay yolu:** $$x_1 = 3t = 3 \\cdot 3 = 9\\ \\mathrm{m}$$",
        "**Çocuğun denklemi:** $$x_2 = \\tfrac{1}{2}at^2$$",
        "**Eşitle ($t = 3\\ \\mathrm{s}$):** $$9 = \\tfrac{1}{2} \\cdot a \\cdot 9 \\quad\\Rightarrow\\quad a = 2\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u4-s10", ornek: 10, kavram: "u4-egik", zorluk: 3,
      soru: "Bir taş, yüksekliği $45\\ \\mathrm{m}$ olan bir binanın tepesinden yatayla $30^\\circ$ açı yapacak şekilde $20\\ \\mathrm{m/s}$'lik ilk hızla fırlatılıyor. Taş ne kadar sürede yere düşer ve yere hangi hızla çarpar? ($g = 9{,}8\\ \\mathrm{m/s^2}$)\n\n[[G-S4-04]]",
      secenekler: ["$t \\approx 4{,}22\\ \\mathrm{s}$; $v \\approx 35{,}9\\ \\mathrm{m/s}$", "$t \\approx 3{,}03\\ \\mathrm{s}$; $v \\approx 35{,}9\\ \\mathrm{m/s}$", "$t \\approx 4{,}22\\ \\mathrm{s}$; $v \\approx 31{,}4\\ \\mathrm{m/s}$", "$t \\approx 4{,}22\\ \\mathrm{s}$; $v \\approx 48{,}7\\ \\mathrm{m/s}$", "$t \\approx 2{,}04\\ \\mathrm{s}$; $v = 20\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Orijini atış noktasına koy; yer $y = -45\\ \\mathrm{m}$'dedir. Düşey denklemden süre, sonra iki bileşenden çarpma hızı bulunur.",
      adimlar: [
        "**Bileşenler:** $$v_{0x} = 20\\cos 30^\\circ \\approx 17{,}3\\ \\mathrm{m/s}, \\qquad v_{0y} = 20\\sin 30^\\circ = 10\\ \\mathrm{m/s}$$",
        "**Düşey denklem:** $$-45 = 10t - 4{,}9t^2 \\quad\\Rightarrow\\quad 4{,}9t^2 - 10t - 45 = 0$$",
        "**Kök:** $$t = \\frac{10 + \\sqrt{100 + 882}}{9{,}8} = \\frac{10 + 31{,}3}{9{,}8} \\approx 4{,}22\\ \\mathrm{s}$$",
        "**Düşey hız:** $$v_y = 10 - 9{,}8 \\times 4{,}22 \\approx -31{,}4\\ \\mathrm{m/s}$$",
        "**Çarpma hızı:** $$v = \\sqrt{17{,}3^2 + 31{,}4^2} \\approx \\sqrt{299 + 986} \\approx 35{,}9\\ \\mathrm{m/s}$$",
        "**Enerjiyle kontrol:** $$v^2 = v_0^2 + 2gh = 400 + 882 = 1282 \\quad\\Rightarrow\\quad v \\approx 35{,}8\\ \\mathrm{m/s}\\ ✓$$ Aradaki fark yuvarlamadan gelir.",
      ],
    },
    {
      id: "u4-s11a", ornek: 11, parca: "b ve c", kavram: "u4-egik",
      soru: `${ORNEK11}\n\nTop duvara kaç saniye sonra ve hangi yükseklikte çarpar?`,
      secenekler: ["$t = 0{,}5\\ \\mathrm{s}$; $y = 6{,}75\\ \\mathrm{m}$", "$t = 0{,}5\\ \\mathrm{s}$; $y = 8\\ \\mathrm{m}$", "$t = 0{,}3\\ \\mathrm{s}$; $y = 4{,}35\\ \\mathrm{m}$", "$t = 0{,}5\\ \\mathrm{s}$; $y = 1{,}25\\ \\mathrm{m}$", "$t = 0{,}75\\ \\mathrm{s}$; $y = 9{,}2\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "Topun yatay hızı sabittir; $6\\ \\mathrm{m}$'yi ne kadar sürede aldığı çarpma anını verir. O anı düşey denkleme koy.",
      adimlar: [
        "**Bileşenler:** $$v_{0x} = 20 \\times 0{,}6 = 12\\ \\mathrm{m/s}, \\qquad v_{0y} = 20 \\times 0{,}8 = 16\\ \\mathrm{m/s}$$",
        "**Denklemler (orijin top):** $$x_1 = 12t, \\qquad y_1 = 16t - 5t^2$$",
        "**Çarpma anı:** $$6 = 12t \\quad\\Rightarrow\\quad t = 0{,}5\\ \\mathrm{s}$$",
        "**Yükseklik:** $$y_1 = 16 \\times 0{,}5 - 5 \\times 0{,}25 = 8 - 1{,}25 = 6{,}75\\ \\mathrm{m}$$",
      ],
    },
    {
      id: "u4-s11b", ornek: 11, parca: "d", kavram: "u4-egik",
      soru: `${ORNEK11}\n\nAsansörün $u$ hızı ne olmalıdır ki top asansöre çarpsın?`,
      secenekler: ["2,5 m/s", "1,25 m/s", "6,75 m/s", "16 m/s", "3,5 m/s"],
      dogru: 0,
      aciklama: "Asansör sabit hızla iner: $y_2 = 8 - ut$. Top asansöre çarpacaksa çarpma anında ikisinin yüksekliği aynı olmalı.",
      adimlar: [
        "**Asansör:** $$y_2 = 8 - u\\,t$$",
        "**Çarpma anı:** $t = 0{,}5\\ \\mathrm{s}$, topun yüksekliği $6{,}75\\ \\mathrm{m}$ (önceki parça).",
        "**Eşitle:** $$6{,}75 = 8 - 0{,}5\\,u \\quad\\Rightarrow\\quad 0{,}5\\,u = 1{,}25 \\quad\\Rightarrow\\quad u = 2{,}5\\ \\mathrm{m/s}$$",
      ],
    },
    {
      id: "u4-s12a", ornek: 12, parca: "a", kavram: "u4-bagil",
      soru: `${ORNEK12}\n\nKaptan tekneyi kıyıya dik olarak sürmek istediğinde, motorun yere göre hızı ve yönü ne olur?`,
      secenekler: ["≈ 21 km/sa; dik doğrultudan akıntı yönüne ≈ 14°", "25 km/sa; akıntı yönüne 14°", "15 km/sa; dik doğrultudan akıntıya karşı ≈ 14°", "≈ 19 km/sa; akıntı yönüne ≈ 15°", "20 km/sa; tam karşıya"],
      dogru: 0,
      aciklama: "Hız toplama: $\\vec{v}_{MO} = \\vec{v}_{MN} + \\vec{v}_{NO}$ (motorun yere göre hızı = motorun nehre göre hızı + nehrin yere göre hızı). Tekne kıyıya dik tutulursa iki vektör birbirine diktir.",
      adimlar: [
        "**Vektörler:** $v_{MN} = 20\\ \\mathrm{km/sa}$ (karşıya), $v_{NO} = 5\\ \\mathrm{km/sa}$ (akıntı yönünde), aralarında $90^\\circ$.",
        "**Büyüklük:** $$v_{MO} = \\sqrt{20^2 + 5^2} = \\sqrt{425} \\approx 21\\ \\mathrm{km/sa}$$",
        "**Yön:** $$\\tan\\theta = \\frac{5}{20} = 0{,}25 \\quad\\Rightarrow\\quad \\theta \\approx 14^\\circ$$ Tekne karşıya dik doğrultudan akıntı yönüne $14^\\circ$ sapar.",
      ],
    },
    {
      id: "u4-s12b", ornek: 12, parca: "b", kavram: "u4-bagil", zorluk: 3,
      soru: `${ORNEK12}\n\nKaptan bu kez nehri dikine geçmek istiyor. Teknenin burnunu hangi yönde tutmalıdır ki yerden gözlenen hızı kıyıya dik olsun? Bu durumda yere göre hızı ne olur?`,
      secenekler: ["Akıntıya karşı ≈ 15°; ≈ 19 km/sa", "Akıntı yönüne ≈ 15°; ≈ 19 km/sa", "Akıntıya karşı ≈ 14°; ≈ 21 km/sa", "Akıntıya karşı 45°; 15 km/sa", "Tam karşıya; 20 km/sa"],
      dogru: 0,
      aciklama: "Bu kez toplam $\\vec{v}_{MO}$ kıyıya dik olmalı. $\\vec{v}_{MN}$ hipotenüs olur; akıntıyı dengelemek için burun akıntıya karşı çevrilir.",
      adimlar: [
        "**Üçgen:** $v_{MN} = 20$ (hipotenüs), $v_{NO} = 5$, $\\vec{v}_{MO}$ kıyıya dik.",
        "**Açı:** $$\\sin\\theta = \\frac{v_{NO}}{v_{MN}} = \\frac{5}{20} = 0{,}25 \\quad\\Rightarrow\\quad \\theta \\approx 15^\\circ$$ Burun akıntıya karşı çevrilir.",
        "**Hız:** $$v_{MO} = \\sqrt{20^2 - 5^2} = \\sqrt{375} \\approx 19\\ \\mathrm{km/sa}$$",
      ],
    },
    {
      id: "u4-s12c", ornek: 12, parca: "c", kavram: "u4-bagil", zorluk: 3,
      soru: `${ORNEK12}\n\nHer iki durumda karşıya geçiş sürelerini hesaplayın.`,
      secenekler: ["$t_a = 6\\ \\mathrm{dk}$; $t_b \\approx 6{,}2\\ \\mathrm{dk}$", "$t_a \\approx 5{,}7\\ \\mathrm{dk}$; $t_b = 6\\ \\mathrm{dk}$", "$t_a = 6\\ \\mathrm{dk}$; $t_b = 6\\ \\mathrm{dk}$", "$t_a \\approx 6{,}2\\ \\mathrm{dk}$; $t_b = 6\\ \\mathrm{dk}$", "$t_a = 8\\ \\mathrm{dk}$; $t_b \\approx 6{,}2\\ \\mathrm{dk}$"],
      dogru: 0,
      aciklama: "Karşıya geçiş süresini yalnız kıyıya dik hız bileşeni belirler. Not: sunu $t_b$'yi $0{,}11\\ \\mathrm{sa} = 6{,}5\\ \\mathrm{dk}$'ya yuvarlamış; $2/19{,}4 \\approx 0{,}103\\ \\mathrm{sa} \\approx 6{,}2\\ \\mathrm{dk}$.",
      adimlar: [
        "**(a) durumu:** Kıyıya dik bileşen $v_{MN} = 20\\ \\mathrm{km/sa}$: $$t_a = \\frac{2\\ \\mathrm{km}}{20\\ \\mathrm{km/sa}} = 0{,}10\\ \\mathrm{sa} = 6\\ \\mathrm{dk}$$ Sunudaki gibi çapraz yolu ($L/\\cos 14^\\circ$) $21\\ \\mathrm{km/sa}$'e bölmek de aynı sonucu verir.",
        "**(b) durumu:** Kıyıya dik hız $v_{MO} = \\sqrt{375} \\approx 19{,}4\\ \\mathrm{km/sa}$: $$t_b = \\frac{2}{19{,}4} \\approx 0{,}103\\ \\mathrm{sa} \\approx 6{,}2\\ \\mathrm{dk}$$",
        "**Yorum:** En kısa sürede geçmek için burun kıyıya dik tutulur; en kısa yoldan geçmek için akıntıya karşı çevrilir ve biraz daha uzun sürer.",
      ],
    },
    {
      id: "u4-s13", ornek: 13, kavram: "u4-bagil",
      soru: "Bir bot, doğuya doğru (yere göre) sabit $5\\ \\mathrm{km/saat}$ hızla akan bir nehir üzerinde nehre göre $10\\ \\mathrm{km/saat}$ hızla kuzeye doğru hareket etmektedir. Botun hızını kenardaki bank üzerinde bulunan gözlemciye göre hesaplayınız.\n\n[[G-S4-07]]",
      secenekler: ["≈ 11,2 km/sa; kuzeyden doğuya ≈ 26,6°", "15 km/sa; kuzeyden doğuya ≈ 26,6°", "≈ 11,2 km/sa; kuzeyden doğuya ≈ 63,4°", "5 km/sa; kuzeye", "≈ 8,7 km/sa; kuzeyden batıya ≈ 30°"],
      dogru: 0,
      aciklama: "$\\vec{v}_{bE} = \\vec{v}_{br} + \\vec{v}_{rE}$: botun yere göre hızı, botun nehre göre hızı ile nehrin yere göre hızının vektör toplamıdır. İki vektör dik olduğu için Pisagor kullanılır.",
      adimlar: [
        "**Vektörler:** $v_{br} = 10\\ \\mathrm{km/sa}$ kuzey, $v_{rE} = 5\\ \\mathrm{km/sa}$ doğu.",
        "**Büyüklük:** $$v_{bE} = \\sqrt{10^2 + 5^2} = \\sqrt{125} \\approx 11{,}2\\ \\mathrm{km/sa}$$",
        "**Yön:** $$\\theta = \\tan^{-1}\\!\\left(\\frac{5}{10}\\right) \\approx 26{,}6^\\circ$$ Kuzeyden doğuya doğru.",
      ],
    },
  ]),

  ...turet(U, K, "u4-vektorel", [
    {
      id: "u4-t01", tip: "mcq",
      soru: "Bir parçacığın konum vektörü $\\vec{r} = 2t^2\\,\\hat{\\imath} + 3t\\,\\hat{\\jmath}\\ \\mathrm{m}$ ile veriliyor. $t = 2\\ \\mathrm{s}$'de hızının büyüklüğü nedir?",
      secenekler: ["≈ 8,5 m/s", "11 m/s", "≈ 8,9 m/s", "≈ 10 m/s", "≈ 7 m/s"],
      dogru: 0,
      aciklama: "Hız vektörü konumun türevidir; her bileşen ayrı türevlenir. Büyüklük Pisagor'la bulunur.",
      adimlar: [
        "**Türev:** $$\\vec{v} = \\frac{d\\vec{r}}{dt} = 4t\\,\\hat{\\imath} + 3\\,\\hat{\\jmath}$$",
        "**$t = 2\\ \\mathrm{s}$:** $$\\vec{v} = 8\\,\\hat{\\imath} + 3\\,\\hat{\\jmath}\\ \\mathrm{m/s}$$",
        "**Büyüklük:** $$|\\vec{v}| = \\sqrt{64 + 9} = \\sqrt{73} \\approx 8{,}5\\ \\mathrm{m/s}$$",
        "**Tuzak:** $8 + 3 = 11$ diye bileşenleri doğrudan toplamak; vektör büyüklüğü öyle bulunmaz.",
      ],
    },
    {
      id: "u4-t02", tip: "mcq",
      soru: "Bir cisim $\\vec{v}_0 = 5\\,\\hat{\\imath}\\ \\mathrm{m/s}$ hızla harekete başlıyor ve sabit $\\vec{a} = 2\\,\\hat{\\jmath}\\ \\mathrm{m/s^2}$ ivmesiyle hareket ediyor. $t = 3\\ \\mathrm{s}$'de hızının büyüklüğü nedir?",
      secenekler: ["≈ 7,8 m/s", "11 m/s", "6 m/s", "5 m/s", "≈ 9,4 m/s"],
      dogru: 0,
      aciklama: "Sabit ivmede $\\vec{v} = \\vec{v}_0 + \\vec{a}\\,t$ vektörel olarak geçerlidir. İvme yalnız $y$ yönünde olduğundan $v_x$ değişmez.",
      adimlar: [
        "**Hız:** $$\\vec{v} = 5\\,\\hat{\\imath} + 2 \\cdot 3\\,\\hat{\\jmath} = 5\\,\\hat{\\imath} + 6\\,\\hat{\\jmath}\\ \\mathrm{m/s}$$",
        "**Büyüklük:** $$|\\vec{v}| = \\sqrt{25 + 36} = \\sqrt{61} \\approx 7{,}8\\ \\mathrm{m/s}$$",
      ],
    },
    {
      id: "u4-t03", tip: "tf",
      soru: "İki boyutlu sabit ivmeli harekette $x$ ve $y$ yönündeki hareketler birbirinden bağımsız olarak incelenebilir; ortak olan yalnızca zamandır.",
      dogru: true,
      aciklama: "Bileşenlere ayırınca $x$ ve $y$ için ayrı birer bir boyutlu hareket denklemi yazılır. Eğik atışta da yatay hareket düzgün, düşey hareket sabit ivmelidir; ikisini bağlayan $t$'dir.",
    },
  ]),

  ...turet(U, K, "u4-egik", [
    {
      id: "u4-t04", tip: "mcq",
      soru: "Yatay zeminden yatayla $30^\\circ$ açıyla $20\\ \\mathrm{m/s}$ hızla atılan bir topun maksimum yüksekliği ve menzili nedir? ($g = 10\\ \\mathrm{m/s^2}$, $\\sqrt{3} \\approx 1{,}73$)",
      secenekler: ["$h = 5\\ \\mathrm{m}$; $R \\approx 34{,}6\\ \\mathrm{m}$", "$h = 10\\ \\mathrm{m}$; $R \\approx 34{,}6\\ \\mathrm{m}$", "$h = 5\\ \\mathrm{m}$; $R = 40\\ \\mathrm{m}$", "$h = 15\\ \\mathrm{m}$; $R = 20\\ \\mathrm{m}$", "$h = 5\\ \\mathrm{m}$; $R \\approx 17{,}3\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "$h = \\dfrac{v_{0y}^2}{2g}$ ve $R = \\dfrac{v_0^2 \\sin 2\\theta}{g}$. Önce ilk hız bileşenlerini bulmak hata riskini azaltır.",
      adimlar: [
        "**Bileşenler:** $$v_{0x} = 20\\cos 30^\\circ \\approx 17{,}3\\ \\mathrm{m/s}, \\qquad v_{0y} = 20\\sin 30^\\circ = 10\\ \\mathrm{m/s}$$",
        "**Yükseklik:** $$h = \\frac{10^2}{2 \\cdot 10} = 5\\ \\mathrm{m}$$",
        "**Uçuş süresi:** $$t_u = 2 \\cdot \\frac{v_{0y}}{g} = 2 \\cdot \\frac{10}{10} = 2\\ \\mathrm{s}$$",
        "**Menzil:** $$R = 17{,}3 \\times 2 \\approx 34{,}6\\ \\mathrm{m}$$ Formülle: $R = 400 \\sin 60^\\circ / 10 \\approx 34{,}6\\ \\mathrm{m}$.",
      ],
    },
    {
      id: "u4-t05", tip: "mcq",
      soru: "Yatay zeminden yatayla $53^\\circ$ açıyla $40\\ \\mathrm{m/s}$ hızla atılan bir cismin uçuş süresi, maksimum yüksekliği ve menzili nedir? ($\\sin 53^\\circ = 0{,}8$; $\\cos 53^\\circ = 0{,}6$; $g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["$t = 6{,}4\\ \\mathrm{s}$; $h = 51{,}2\\ \\mathrm{m}$; $R = 153{,}6\\ \\mathrm{m}$", "$t = 3{,}2\\ \\mathrm{s}$; $h = 51{,}2\\ \\mathrm{m}$; $R = 76{,}8\\ \\mathrm{m}$", "$t = 6{,}4\\ \\mathrm{s}$; $h = 28{,}8\\ \\mathrm{m}$; $R = 153{,}6\\ \\mathrm{m}$", "$t = 4{,}8\\ \\mathrm{s}$; $h = 28{,}8\\ \\mathrm{m}$; $R = 115{,}2\\ \\mathrm{m}$", "$t = 6{,}4\\ \\mathrm{s}$; $h = 102{,}4\\ \\mathrm{m}$; $R = 153{,}6\\ \\mathrm{m}$"],
      dogru: 0,
      aciklama: "Tepe süresi $v_{0y}/g$, uçuş süresi onun iki katı. Yükseklik $v_{0y}^2/2g$, menzil $v_{0x} \\times$ uçuş süresi.",
      adimlar: [
        "**Bileşenler:** $$v_{0x} = 40 \\times 0{,}6 = 24\\ \\mathrm{m/s}, \\qquad v_{0y} = 40 \\times 0{,}8 = 32\\ \\mathrm{m/s}$$",
        "**Süreler:** $$t_{\\text{tepe}} = \\frac{32}{10} = 3{,}2\\ \\mathrm{s} \\quad\\Rightarrow\\quad t_u = 6{,}4\\ \\mathrm{s}$$",
        "**Yükseklik:** $$h = \\frac{32^2}{20} = \\frac{1024}{20} = 51{,}2\\ \\mathrm{m}$$",
        "**Menzil:** $$R = 24 \\times 6{,}4 = 153{,}6\\ \\mathrm{m}$$",
      ],
    },
    {
      id: "u4-t06", tip: "tf",
      soru: "Yatay düzlemde aynı ilk hızla $30^\\circ$ ve $60^\\circ$ açılarla atılan iki cisim aynı uzaklığa düşer.",
      dogru: true,
      aciklama: "$R = \\dfrac{v_0^2 \\sin 2\\theta}{g}$. $\\sin 60^\\circ = \\sin 120^\\circ$ olduğu için tümler açılar ($\\theta$ ve $90^\\circ - \\theta$) aynı menzili verir. Büyük açıyla atılan daha yükseğe çıkar ve havada daha uzun kalır.",
    },
    {
      id: "u4-t07", tip: "mcq",
      soru: "Eğik atılan bir cisim yörüngesinin tepe noktasındayken hızı ve ivmesi için hangisi doğrudur?",
      secenekler: ["Hız yatay ve sıfırdan farklı; ivme $g$, aşağı", "Hız sıfır; ivme $g$, aşağı yönlü", "Hız yatay ve sıfırdan farklı; ivme sıfır", "Hız sıfır; ivme de sıfır", "Hız düşey ve aşağı; ivme $g$, aşağı"],
      dogru: 0,
      aciklama: "Tepe noktasında yalnız düşey hız bileşeni sıfırlanır; yatay bileşen $v_0\\cos\\theta$ hareket boyunca değişmez. İvme her noktada $g$'dir, aşağı yönlüdür.",
    },
    {
      id: "u4-t08", tip: "mcq", zorluk: 3,
      soru: "Bir top $24\\ \\mathrm{m}$ ötedeki bir duvara yatayla $37^\\circ$ açıyla, $20\\ \\mathrm{m/s}$ hızla atılıyor. Top duvara yerden hangi $h$ yüksekliğinde çarpar? ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S4-08]]",
      secenekler: ["6,75 m", "18 m", "11,25 m", "4,5 m", "9 m"],
      dogru: 0,
      aciklama: "Yatay hız sabit: duvara varış süresi $24/v_{0x}$. Bu süreyi düşey konum denklemine koy.",
      adimlar: [
        "**Bileşenler:** $$v_{0x} = 20 \\times 0{,}8 = 16\\ \\mathrm{m/s}, \\qquad v_{0y} = 20 \\times 0{,}6 = 12\\ \\mathrm{m/s}$$",
        "**Varış süresi:** $$t = \\frac{24}{16} = 1{,}5\\ \\mathrm{s}$$",
        "**Yükseklik:** $$h = 12 \\times 1{,}5 - 5 \\times 1{,}5^2 = 18 - 11{,}25 = 6{,}75\\ \\mathrm{m}$$",
        "**Yorum:** Tepe $1{,}2\\ \\mathrm{s}$'de olduğu için top duvara inerken çarpar.",
      ],
    },
  ]),

  ...turet(U, K, "u4-yatay", [
    {
      id: "u4-t09", tip: "mcq",
      soru: "$45\\ \\mathrm{m}$ yükseklikteki bir uçurumdan yatay olarak $10\\ \\mathrm{m/s}$ hızla atılan bir taş, uçurumun dibinden ne kadar uzağa düşer ve yere hangi hızla çarpar? ($g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["$x = 30\\ \\mathrm{m}$; $v \\approx 31{,}6\\ \\mathrm{m/s}$", "$x = 30\\ \\mathrm{m}$; $v = 40\\ \\mathrm{m/s}$", "$x = 45\\ \\mathrm{m}$; $v \\approx 31{,}6\\ \\mathrm{m/s}$", "$x = 30\\ \\mathrm{m}$; $v = 30\\ \\mathrm{m/s}$", "$x = 90\\ \\mathrm{m}$; $v \\approx 31{,}6\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Düşey ilk hız sıfır; düşme süresini yükseklik belirler. Çarpma hızı yatay ve düşey bileşenlerin Pisagor toplamıdır.",
      adimlar: [
        "**Süre:** $$45 = 5t^2 \\quad\\Rightarrow\\quad t = 3\\ \\mathrm{s}$$",
        "**Yatay uzaklık:** $$x = 10 \\times 3 = 30\\ \\mathrm{m}$$",
        "**Düşey hız:** $$v_y = 10 \\times 3 = 30\\ \\mathrm{m/s}$$ (aşağı).",
        "**Çarpma hızı:** $$v = \\sqrt{10^2 + 30^2} = \\sqrt{1000} \\approx 31{,}6\\ \\mathrm{m/s}$$",
      ],
    },
    {
      id: "u4-t10", tip: "mcq",
      soru: "Yerden $500\\ \\mathrm{m}$ yükseklikte $50\\ \\mathrm{m/s}$ hızla yatay uçan bir uçak bir paket bırakıyor. Paket yere düştüğünde uçak paketin neresindedir? (Hava direnci yok, $g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["Tam paketin üstünde", "Paketin 500 m gerisinde", "Paketin 500 m önünde", "Paketin 50 m önünde", "Paketin 250 m önünde"],
      dogru: 0,
      aciklama: "Paket bırakıldığında uçağın yatay hızını taşır ve hava direnci olmadığı için yatayda uçakla aynı hızla gider. Bu yüzden düşerken hep uçağın altındadır.",
      adimlar: [
        "**Düşme süresi:** $$500 = 5t^2 \\quad\\Rightarrow\\quad t = 10\\ \\mathrm{s}$$",
        "**Paketin yatay yolu:** $$50 \\times 10 = 500\\ \\mathrm{m}$$",
        "**Uçağın yatay yolu:** $50 \\times 10 = 500\\ \\mathrm{m}$. İkisi aynı: uçak paketin tam üstündedir.",
      ],
    },
    {
      id: "u4-t11", tip: "mcq",
      soru: "Bir motosikletli $5\\ \\mathrm{m}$ yüksekliğindeki bir uçurumdan yatay olarak atlayıp $8\\ \\mathrm{m}$ genişliğindeki dereyi geçmek istiyor. Uçuş süresi ve gereken en küçük yatay hız nedir? ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S4-09]]",
      secenekler: ["$t = 1\\ \\mathrm{s}$; $v_0 = 8\\ \\mathrm{m/s}$", "$t = 2\\ \\mathrm{s}$; $v_0 = 4\\ \\mathrm{m/s}$", "$t = 1\\ \\mathrm{s}$; $v_0 = 5\\ \\mathrm{m/s}$", "$t = 0{,}5\\ \\mathrm{s}$; $v_0 = 16\\ \\mathrm{m/s}$", "$t = 1\\ \\mathrm{s}$; $v_0 = 10\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Uçuş süresini yalnız düşüş yüksekliği belirler (yatay hızdan bağımsız). Yatay hız bu sürede $8\\ \\mathrm{m}$ almaya yetmeli.",
      adimlar: [
        "**Süre:** $$5 = 5t^2 \\quad\\Rightarrow\\quad t = 1\\ \\mathrm{s}$$",
        "**Hız:** $$8 = v_0 \\times 1 \\quad\\Rightarrow\\quad v_0 = 8\\ \\mathrm{m/s}$$ Bu, gereken en küçük hızdır.",
      ],
    },
    {
      id: "u4-t12", tip: "tf",
      soru: "Aynı yükseklikten biri serbest bırakılan, öbürü yatay olarak atılan iki top yere aynı anda düşer.",
      dogru: true,
      aciklama: "İkisinin de düşey ilk hızı sıfırdır ve düşey ivmeleri $g$'dir. Yatay hız düşey hareketi etkilemez; düşme süresi $t = \\sqrt{2h/g}$ ikisi için aynıdır.",
    },
  ]),

  ...turet(U, K, "u4-dairesel", [
    {
      id: "u4-t13", tip: "mcq",
      soru: "Yarıçapı $50\\ \\mathrm{m}$ olan dairesel bir pistte $20\\ \\mathrm{m/s}$ sabit süratle giden bir arabanın merkezcil ivmesi nedir?",
      secenekler: ["8 m/s²", "0,4 m/s²", "2,5 m/s²", "1000 m/s²", "4 m/s²"],
      dogru: 0,
      aciklama: "Düzgün dairesel harekette sürat sabit olsa da hızın yönü sürekli değişir; bunu sağlayan merkezcil ivme $a_r = v^2/r$'dir, merkeze yönelir.",
      adimlar: [
        "**Formül:** $$a_r = \\frac{v^2}{r}$$",
        "**Hesap:** $$a_r = \\frac{20^2}{50} = \\frac{400}{50} = 8\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u4-t14", tip: "mcq",
      soru: "Bir cisim yarıçapı $2\\ \\mathrm{m}$ olan bir çemberde bir turu $4\\ \\mathrm{s}$'de atıyor. Sürati ve merkezcil ivmesi yaklaşık nedir? ($\\pi \\approx 3{,}14$)",
      secenekler: ["$v \\approx 3{,}14\\ \\mathrm{m/s}$; $a \\approx 4{,}93\\ \\mathrm{m/s^2}$", "$v \\approx 3{,}14\\ \\mathrm{m/s}$; $a \\approx 1{,}57\\ \\mathrm{m/s^2}$", "$v \\approx 1{,}57\\ \\mathrm{m/s}$; $a \\approx 1{,}23\\ \\mathrm{m/s^2}$", "$v \\approx 6{,}28\\ \\mathrm{m/s}$; $a \\approx 19{,}7\\ \\mathrm{m/s^2}$", "$v = 0{,}5\\ \\mathrm{m/s}$; $a = 0{,}125\\ \\mathrm{m/s^2}$"],
      dogru: 0,
      aciklama: "Bir turda alınan yol çemberin çevresi $2\\pi r$, süre periyot $T$. Sürat $v = 2\\pi r/T$, merkezcil ivme $v^2/r$.",
      adimlar: [
        "**Sürat:** $$v = \\frac{2\\pi r}{T} = \\frac{2\\pi \\cdot 2}{4} = \\pi \\approx 3{,}14\\ \\mathrm{m/s}$$",
        "**Merkezcil ivme:** $$a_r = \\frac{v^2}{r} = \\frac{\\pi^2}{2} \\approx \\frac{9{,}86}{2} \\approx 4{,}93\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u4-t15", tip: "tf",
      soru: "Düzgün dairesel hareket yapan bir cismin sürati sabit olduğu için ivmesi sıfırdır.",
      dogru: false,
      aciklama: "İvme hız vektörünün değişimidir. Süratin büyüklüğü sabit kalsa da yön sürekli değiştiği için bir ivme vardır: merkeze doğru $a_r = v^2/r$.",
    },
    {
      id: "u4-t16", tip: "mcq",
      soru: "Dairesel bir yörüngede hızlanan bir cismin bir anda merkezcil ivmesi $3\\ \\mathrm{m/s^2}$, teğetsel ivmesi $4\\ \\mathrm{m/s^2}$'dir. Toplam ivmenin büyüklüğü nedir?",
      secenekler: ["5 m/s²", "7 m/s²", "1 m/s²", "12 m/s²", "3,5 m/s²"],
      dogru: 0,
      aciklama: "Teğetsel ivme hıza paralel, merkezcil ivme hıza diktir. Birbirine dik iki bileşen Pisagor'la toplanır.",
      adimlar: [
        "**Bileşenler dik:** $$a = \\sqrt{a_r^2 + a_t^2}$$",
        "**Hesap:** $$a = \\sqrt{9 + 16} = 5\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u4-t17", tip: "fill", zorluk: 1,
      soru: "Düzgün dairesel harekette ivme her an çemberin ____ doğru yönelir.",
      bosluklar: [["merkezine", "merkeze", "merkez"]],
      aciklama: "**Merkezcil** (radyal) ivme hız vektörüne diktir ve çemberin merkezine yönelir; büyüklüğü $a_r = v^2/r$'dir.",
    },
  ]),

  ...turet(U, K, "u4-bagil", [
    {
      id: "u4-t18", tip: "mcq", zorluk: 1,
      soru: "$20\\ \\mathrm{m/s}$ hızla giden bir trenin içinde bir yolcu trenin gidiş yönünde trene göre $2\\ \\mathrm{m/s}$ hızla yürüyor. Yolcunun yere göre hızı nedir?",
      secenekler: ["22 m/s", "18 m/s", "20 m/s", "2 m/s", "40 m/s"],
      dogru: 0,
      aciklama: "Bağıl hız toplama: $\\vec{v}_{\\text{yolcu,yer}} = \\vec{v}_{\\text{yolcu,tren}} + \\vec{v}_{\\text{tren,yer}}$. Aynı doğrultuda ve yönde oldukları için doğrudan toplanır.",
      adimlar: [
        "**Topla:** $$v = 2 + 20 = 22\\ \\mathrm{m/s}$$ Trenin yönünde.",
        "**Ters yönde yürüseydi:** $20 - 2 = 18\\ \\mathrm{m/s}$ olurdu.",
      ],
    },
    {
      id: "u4-t19", tip: "mcq",
      soru: "Nehre göre $4\\ \\mathrm{m/s}$ hızla burnu kuzeye (karşı kıyıya) tutulan bir sandal, doğuya $3\\ \\mathrm{m/s}$ hızla akan bir nehirde ilerliyor. Sandalın yere göre hızı nedir? ($\\tan 37^\\circ = 0{,}75$)",
      secenekler: ["5 m/s; kuzeyden doğuya 37°", "7 m/s; kuzeyden doğuya 37°", "5 m/s; kuzeyden doğuya 53°", "1 m/s; kuzeye", "5 m/s; kuzeyden batıya 37°"],
      dogru: 0,
      aciklama: "$\\vec{v}_{\\text{sandal,yer}} = \\vec{v}_{\\text{sandal,nehir}} + \\vec{v}_{\\text{nehir,yer}}$. İki vektör dik olduğundan büyüklük Pisagor'la, yön tanjantla bulunur.",
      adimlar: [
        "**Büyüklük:** $$v = \\sqrt{4^2 + 3^2} = 5\\ \\mathrm{m/s}$$",
        "**Yön:** $$\\tan\\theta = \\frac{3}{4} = 0{,}75 \\quad\\Rightarrow\\quad \\theta = 37^\\circ$$ Kuzeyden doğuya; akıntı sandalı doğuya sürükler.",
      ],
    },
    {
      id: "u4-t20", tip: "mcq", zorluk: 3,
      soru: "Genişliği $100\\ \\mathrm{m}$ olan bir nehirde akıntı hızı $3\\ \\mathrm{m/s}$'dir. Nehre göre $4\\ \\mathrm{m/s}$ hızı olan sandalın burnu karşı kıyıya dik tutuluyor. Sandal karşıya kaç saniyede geçer ve akıntı yönünde ne kadar sürüklenir?",
      secenekler: ["25 s; 75 m", "20 s; 60 m", "25 s; 100 m", "33 s; 100 m", "≈ 38 s; 113 m"],
      dogru: 0,
      aciklama: "Karşıya geçiş süresini yalnız kıyıya dik hız ($4\\ \\mathrm{m/s}$) belirler. Akıntı bu sürede sandalı akıntı yönünde sürükler.",
      adimlar: [
        "**Süre:** $$t = \\frac{100}{4} = 25\\ \\mathrm{s}$$",
        "**Sürüklenme:** $$x = 3 \\times 25 = 75\\ \\mathrm{m}$$",
        "**Tuzak:** Yere göre hız $5\\ \\mathrm{m/s}$ ile $100/5 = 20\\ \\mathrm{s}$ hesaplamak; sandal $100\\ \\mathrm{m}$ değil, çapraz bir yol alır.",
      ],
    },
  ]),
];
