// 5. bölüm: Newton kanunları
// Sunu örnekleri metinleriyle; şıklar ve adım adım çözümler bizim. Sununun kendisi 9,8
// kullanmadıysa g = 10 m/s².
// Formüller LaTeX ($…$ satır içi, $$…$$ ayrı satır; src/lib/matematik.ts).
// Sunudaki düzeltmeler: Örnek 2'de ağırlık "5 N" yazılmış, çözümde 50 N kullanılmış;
// Örnek 9'daki son ivme formülü işaret hatalı; Örnek 10'da μ_k = 0,177 (sunu 0,117);
// Örnek 13'ün sonucu hatalı (doğrusu a₂ = 10/3, a₁ = 20/3 m/s², T ≈ 6,7 N);
// Örnek 23 (b)'de verilen 14 N ve 8 N temas kuvvetleri, bloklara etki eden bileşke kuvvetler 4, 6 ve 8 N.

import { sunu, turet, type Soru } from "./tipler.ts";

const U = 5;
const K = "u5";

const ORNEK3 = "Sürtünmesiz eğik düzlem: Şekilde görülen sürtünmesiz, $\\theta$ eğim açılı bir eğik düzlem üzerine $m$ kütleli bir sandık konulmuştur.\n\n[[G-S5-03]]";
const ORNEK4 = "Sürtünmesiz yatay bir düzlem üzerinde durmakta olan $m = 3\\ \\mathrm{kg}$ kütleli bir cisme, yatayla $37^\\circ$ açı yapan $F = 12\\ \\mathrm{N}$'luk bir kuvvet uygulanıyor. ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-04]]";
const ORNEK6 = "$m = 3\\ \\mathrm{kg}$ kütleli bir cisim yatay bir düzlem üzerindedir. Cisimle düzlem arasındaki statik ve kinetik sürtünme katsayıları eşit olup $\\mu = 0{,}5$ değerindedir. ($g = 10\\ \\mathrm{m/s^2}$)";
const ORNEK13 = "Şekilde gösterilen ipin kütlesi sıfır, yüzeyler ve makara sürtünmesizdir. Masadaki blok $1\\ \\mathrm{kg}$, hareketli makaraya asılı blok $2\\ \\mathrm{kg}$'dır. ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-10]]";
const ORNEK18 = "Kütlesi $1200\\ \\mathrm{kg}$ olan bir otomobil $r = 200\\ \\mathrm{m}$ yarıçaplı yatay ve dairesel bir virajı $72\\ \\mathrm{km/saat}$ hızıyla dönmektedir. ($g = 10\\ \\mathrm{m/s^2}$)";
const ORNEK21 = "Sallanan Top: $0{,}5\\ \\mathrm{m}$ uzunluğunda bir sicimin ucuna bağlanan bir top, şekildeki gibi, yerçekiminin etkisi altında düşey bir daire çevresinde salınmaktadır. Sicim, düşeyle $\\theta = 20^\\circ$'lik açı yaptığı zaman top $1{,}5\\ \\mathrm{m/s}$'lik hıza sahiptir. ($g = 9{,}8\\ \\mathrm{m/s^2}$; $\\sin 20^\\circ \\approx 0{,}34$)\n\n[[G-S5-15]]";
const ORNEK23 = "Sürtünmesiz bir düzlem üzerindeki üç kütleye şekildeki gibi $F = 18\\ \\mathrm{N}$'luk bir kuvvet $m_1$ kütlesi tarafından etkimektedir. $m_1 = 2{,}00\\ \\mathrm{kg}$, $m_2 = 3{,}00\\ \\mathrm{kg}$, $m_3 = 4{,}00\\ \\mathrm{kg}$ olarak verilmektedir.\n\n[[G-S5-17]]";

export const unite5: Soru[] = [
  ...sunu(U, K, [
    {
      id: "u5-s01", ornek: 1, kavram: "u5-ikinci",
      soru: "$0{,}30\\ \\mathrm{kg}$ kütleli bir hokey diski yatay, sürtünmesiz bir buz zemini üzerinde kaymaktadır. Diske şekilde görüldüğü gibi iki kuvvet etki eder. $\\vec{F}_1$ kuvvetinin büyüklüğü $5\\ \\mathrm{N}$, $\\vec{F}_2$ kuvvetinin büyüklüğü ise $8\\ \\mathrm{N}$'dur. Diskin ivmesinin büyüklüğünü ve yönünü bulunuz. ($\\cos 20^\\circ = 0{,}94$; $\\sin 20^\\circ = 0{,}34$; $\\cos 60^\\circ = 0{,}5$; $\\sin 60^\\circ = 0{,}87$)\n\n[[G-S5-01]]",
      secenekler: ["$|\\vec{a}| \\approx 34\\ \\mathrm{m/s^2}$; $\\theta \\approx 30^\\circ$", "$|\\vec{a}| \\approx 43\\ \\mathrm{m/s^2}$; $\\theta \\approx 30^\\circ$", "$|\\vec{a}| \\approx 34\\ \\mathrm{m/s^2}$; $\\theta \\approx 60^\\circ$", "$|\\vec{a}| \\approx 10\\ \\mathrm{m/s^2}$; $\\theta \\approx 30^\\circ$", "$|\\vec{a}| \\approx 34\\ \\mathrm{m/s^2}$; $\\theta \\approx -20^\\circ$"],
      dogru: 0,
      aciklama: "Newton'un ikinci yasası her eksende ayrı yazılır: $\\sum F_x = m a_x$, $\\sum F_y = m a_y$. Kuvvetlerin büyüklükleri toplanmaz; bileşenleri toplanır.",
      adimlar: [
        "**$x$ bileşenleri:** $$\\sum F_x = 5\\cos(-20^\\circ) + 8\\cos 60^\\circ = 5 \\times 0{,}94 + 8 \\times 0{,}5 = 4{,}7 + 4 = 8{,}7\\ \\mathrm{N}$$",
        "**$y$ bileşenleri:** $$\\sum F_y = 5\\sin(-20^\\circ) + 8\\sin 60^\\circ = -1{,}7 + 7{,}0 \\approx 5{,}3\\ \\mathrm{N}$$ $\\vec{F}_1$ $x$ ekseninin altında, $y$ bileşeni eksi.",
        "**İvme bileşenleri:** $$a_x = \\frac{8{,}7}{0{,}3} = 29\\ \\mathrm{m/s^2}, \\qquad a_y = \\frac{5{,}26}{0{,}3} \\approx 17{,}5\\ \\mathrm{m/s^2}$$ Yani $\\vec{a} \\approx 29\\,\\hat{\\imath} + 17{,}5\\,\\hat{\\jmath}\\ \\mathrm{m/s^2}$.",
        "**Büyüklük:** $$|\\vec{a}| = \\sqrt{29^2 + 17{,}5^2} = \\sqrt{841 + 306} \\approx 34\\ \\mathrm{m/s^2}$$",
        "**Yön:** $$\\theta = \\tan^{-1}\\!\\left(\\frac{17{,}5}{29}\\right) \\approx 31^\\circ \\approx 30^\\circ$$ $+x$ ekseninden yukarı.",
      ],
    },
    {
      id: "u5-s02", ornek: 2, kavram: "u5-denge",
      soru: "Bir trafik lambası şekilde görüldüğü gibi kablolarla bir desteğe asılmıştır. Üst taraftaki kablolar yatayla $37^\\circ$ ve $53^\\circ$'lik açılar yapmaktadır ve lambanın ağırlığı $50\\ \\mathrm{N}$'dur. Her üç kablodaki gerilmeyi bulunuz. ($\\cos 53^\\circ = 0{,}6$; $\\sin 53^\\circ = 0{,}8$; $\\cos 37^\\circ = 0{,}8$; $\\sin 37^\\circ = 0{,}6$)\n\n[[G-S5-02]]",
      secenekler: ["$T_1 = 30\\ \\mathrm{N}$; $T_2 = 40\\ \\mathrm{N}$; $T_3 = 50\\ \\mathrm{N}$", "$T_1 = 40\\ \\mathrm{N}$; $T_2 = 30\\ \\mathrm{N}$; $T_3 = 50\\ \\mathrm{N}$", "$T_1 = 25\\ \\mathrm{N}$; $T_2 = 25\\ \\mathrm{N}$; $T_3 = 50\\ \\mathrm{N}$", "$T_1 = 30\\ \\mathrm{N}$; $T_2 = 40\\ \\mathrm{N}$; $T_3 = 70\\ \\mathrm{N}$", "$T_1 = 37{,}5\\ \\mathrm{N}$; $T_2 = 50\\ \\mathrm{N}$; $T_3 = 50\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "Lamba ve düğüm noktası dengededir: $\\sum F_x = 0$ ve $\\sum F_y = 0$. Önce lambadan $T_3 = W$, sonra düğümde iki denklem iki bilinmeyenle çözülür. Not: sunu soruda ağırlığı $5\\ \\mathrm{N}$ yazmış ama çözümde $50\\ \\mathrm{N}$ kullanmış; sonuçlar $50\\ \\mathrm{N}$'a aittir.",
      adimlar: [
        "**Lamba:** $$T_3 - W = 0 \\quad\\Rightarrow\\quad T_3 = 50\\ \\mathrm{N}$$",
        "**Düğümde $x$:** $$-T_1\\cos 37^\\circ + T_2\\cos 53^\\circ = 0 \\quad\\Rightarrow\\quad 0{,}8\\,T_1 = 0{,}6\\,T_2 \\quad\\Rightarrow\\quad T_2 = \\tfrac{4}{3}T_1$$",
        "**Düğümde $y$:** $$T_1\\sin 37^\\circ + T_2\\sin 53^\\circ - 50 = 0 \\quad\\Rightarrow\\quad 0{,}6\\,T_1 + 0{,}8 \\cdot \\tfrac{4}{3}T_1 = 50$$",
        "**Çöz:** $$\\tfrac{5}{3}T_1 = 50 \\quad\\Rightarrow\\quad T_1 = 30\\ \\mathrm{N}, \\qquad T_2 = 40\\ \\mathrm{N}$$",
        "**Kontrol:** Daha dik kablo ($53^\\circ$) yükün daha büyük kısmını taşır: $T_2 > T_1$ ✓",
      ],
    },
    {
      id: "u5-s03a", ornek: 3, parca: "A", kavram: "u5-ikinci", zorluk: 1,
      soru: `${ORNEK3}\n\nSandık serbest bırakılınca sahip olacağı ivmeyi ve normal kuvveti bulunuz.`,
      secenekler: ["$a = g\\sin\\theta$; $n = mg\\cos\\theta$", "$a = g\\cos\\theta$; $n = mg\\sin\\theta$", "$a = g$; $n = mg$", "$a = g\\sin\\theta$; $n = mg$", "$a = g\\tan\\theta$; $n = mg\\cos\\theta$"],
      dogru: 0,
      aciklama: "$x$ eksenini eğik düzlem boyunca, $y$ eksenini düzleme dik al. Ağırlık bu eksenlerde $mg\\sin\\theta$ (düzlem boyunca) ve $mg\\cos\\theta$ (düzleme dik) bileşenlerine ayrılır.",
      adimlar: [
        "**Bileşenler:** Düzlem boyunca $mg\\sin\\theta$, düzleme dik $mg\\cos\\theta$.",
        "**$y$ ekseni (hareket yok):** $$\\sum F_y = n - mg\\cos\\theta = 0 \\quad\\Rightarrow\\quad n = mg\\cos\\theta$$",
        "**$x$ ekseni:** $$\\sum F_x = mg\\sin\\theta = m a_x \\quad\\Rightarrow\\quad a_x = g\\sin\\theta$$",
        "**Yorum:** İvme kütleden bağımsızdır; $\\theta = 90^\\circ$'de $g$'ye (serbest düşme), $\\theta = 0$'da sıfıra gider.",
      ],
    },
    {
      id: "u5-s03b", ornek: 3, parca: "B", kavram: "u5-ikinci",
      soru: `${ORNEK3}\n\nSandığın eğik düzlemin tepesinden serbest bırakıldığını varsayalım. Tepeden itibaren alt uca kadar olan uzaklık $d$ olsun. Bloğun alt uca varması için geçen zaman nedir ve tam alt uçta sandığın hızı ne olacaktır?`,
      secenekler: ["$t = \\sqrt{\\dfrac{2d}{g\\sin\\theta}}$; $v = \\sqrt{2gd\\sin\\theta}$", "$t = \\sqrt{\\dfrac{2d}{g}}$; $v = \\sqrt{2gd}$", "$t = \\sqrt{\\dfrac{d}{g\\sin\\theta}}$; $v = \\sqrt{gd\\sin\\theta}$", "$t = \\sqrt{\\dfrac{2d}{g\\cos\\theta}}$; $v = \\sqrt{2gd\\cos\\theta}$", "$t = \\dfrac{2d}{g\\sin\\theta}$; $v = 2gd\\sin\\theta$"],
      dogru: 0,
      aciklama: "İvme sabit ($g\\sin\\theta$) ve ilk hız sıfır olduğundan bir boyutlu sabit ivmeli hareket denklemleri düzlem boyunca uygulanır.",
      adimlar: [
        "**Konum:** $d = \\tfrac{1}{2}at^2$ ve $a = g\\sin\\theta$: $$t = \\sqrt{\\frac{2d}{g\\sin\\theta}}$$",
        "**Hız:** $$v^2 = 0 + 2ad \\quad\\Rightarrow\\quad v = \\sqrt{2gd\\sin\\theta}$$",
        "**Kontrol:** $d\\sin\\theta$ eğik düzlemin yüksekliği $h$'dir; $v = \\sqrt{2gh}$, yani aynı yükseklikten serbest düşen cismin hızıyla aynı.",
      ],
    },
    {
      id: "u5-s04a", ornek: 4, parca: "b", kavram: "u5-ikinci",
      soru: `${ORNEK4}\n\nCismin ivmesi ne kadardır?`,
      secenekler: ["3,2 m/s²", "4 m/s²", "2,4 m/s²", "1,6 m/s²", "7,6 m/s²"],
      dogru: 0,
      aciklama: "Cisim yalnız yatayda hareket edebilir; ivmeyi kuvvetin yatay bileşeni $F\\cos 37^\\circ$ verir.",
      adimlar: [
        "**Yatay bileşen:** $$F_x = F\\cos 37^\\circ = 12 \\times 0{,}8 = 9{,}6\\ \\mathrm{N}$$",
        "**İkinci yasa:** $$9{,}6 = 3a \\quad\\Rightarrow\\quad a = 3{,}2\\ \\mathrm{m/s^2}$$",
        "**Tuzak:** $12/3 = 4\\ \\mathrm{m/s^2}$ hesabı kuvvetin tamamının yatay olduğunu varsayar.",
      ],
    },
    {
      id: "u5-s04b", ornek: 4, parca: "c", kavram: "u5-ikinci",
      soru: `${ORNEK4}\n\nMasanın normal tepki kuvveti ne kadar olur?`,
      secenekler: ["22,8 N", "30 N", "37,2 N", "20,4 N", "7,2 N"],
      dogru: 0,
      aciklama: "Düşeyde hareket yok: $\\sum F_y = 0$. $F$'nin düşey bileşeni cismi yukarı çektiği için normal kuvvet $mg$'den küçük çıkar.",
      adimlar: [
        "**Düşey bileşen:** $$F_y = F\\sin 37^\\circ = 12 \\times 0{,}6 = 7{,}2\\ \\mathrm{N}$$ (yukarı).",
        "**Denge:** $$N + F\\sin 37^\\circ - mg = 0 \\quad\\Rightarrow\\quad N + 7{,}2 - 30 = 0$$",
        "**Sonuç:** $N = 22{,}8\\ \\mathrm{N}$. Normal kuvvet her zaman $mg$'ye eşit değildir.",
      ],
    },
    {
      id: "u5-s05", ornek: 5, kavram: "u5-surtunme",
      soru: "Kütlesi $m$ olan bir blok $4\\ \\mathrm{m/s}$ hızla sürtünmeli yatay bir düzleme paralel fırlatılıyor. Blok ne kadar gittikten sonra durur? ($\\mu = 0{,}25$; $g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["3,2 m", "1,6 m", "6,4 m", "0,8 m", "16 m"],
      dogru: 0,
      aciklama: "Yatayda tek kuvvet sürtünmedir: $-\\mu mg = ma$, dolayısıyla $a = -\\mu g$. Kütle sadeleşir, bu yüzden $m$ verilmeden çözülür. Sonra zamansız hız denklemi.",
      adimlar: [
        "**Normal kuvvet:** $\\sum F_y = 0$, dolayısıyla $N = mg$.",
        "**İvme:** $$-\\mu mg = ma \\quad\\Rightarrow\\quad a = -\\mu g = -0{,}25 \\times 10 = -2{,}5\\ \\mathrm{m/s^2}$$",
        "**Yol:** $$0 = 4^2 + 2(-2{,}5)\\,x \\quad\\Rightarrow\\quad x = \\frac{16}{5} = 3{,}2\\ \\mathrm{m}$$",
      ],
    },
    {
      id: "u5-s06a", ornek: 6, parca: "a", kavram: "u5-surtunme",
      soru: `${ORNEK6} Bu cisme yatay $F_1 = 12\\ \\mathrm{N}$ kuvveti uygulanıyor. Sürtünme kuvveti ne kadardır?`,
      secenekler: ["12 N", "15 N", "6 N", "3 N", "0"],
      dogru: 0,
      aciklama: "Statik sürtünme kuvveti sabit değildir: en fazla $\\mu N$'ye kadar çıkar ve uygulanan kuvveti tam karşılar. Önce maksimum değeri hesapla, uygulanan kuvvetle karşılaştır.",
      adimlar: [
        "**Maksimum statik sürtünme:** $$f_{\\max} = \\mu N = \\mu mg = 0{,}5 \\times 3 \\times 10 = 15\\ \\mathrm{N}$$",
        "**Karşılaştır:** $F_1 = 12\\ \\mathrm{N} < 15\\ \\mathrm{N}$, cisim harekete geçmez.",
        "**Sürtünme:** Cisim durduğu için net kuvvet sıfır: $f = F_1 = 12\\ \\mathrm{N}$. $15\\ \\mathrm{N}$ değil; $15\\ \\mathrm{N}$ yalnız sınır değer.",
      ],
    },
    {
      id: "u5-s06b", ornek: 6, parca: "b", kavram: "u5-surtunme",
      soru: `${ORNEK6} Bu kez yatay $F_2 = 18\\ \\mathrm{N}$'luk bir kuvvet uygulanıyor. Cismin ivmesi ne kadar olur?`,
      secenekler: ["1 m/s²", "6 m/s²", "2 m/s²", "0", "11 m/s²"],
      dogru: 0,
      aciklama: "$F_2$ maksimum statik sürtünmeyi aştığı için cisim kayar; kayma sırasında sürtünme kinetik sürtünmedir, $f_k = \\mu_k N$.",
      adimlar: [
        "**Hareket var mı:** $18\\ \\mathrm{N} > f_{\\max} = 15\\ \\mathrm{N}$, cisim hareket eder.",
        "**Sürtünme:** $\\mu_s = \\mu_k$ olduğundan $f_k = \\mu_k N = 15\\ \\mathrm{N}$.",
        "**İkinci yasa:** $$18 - 15 = 3a \\quad\\Rightarrow\\quad a = 1\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u5-s07", ornek: 7, kavram: "u5-surtunme", zorluk: 3,
      soru: "$m = 3\\ \\mathrm{kg}$ kütleli bir cisim yatay bir düzlem üzerindedir. Cisimle düzlem arasındaki statik ve kinetik sürtünme katsayıları eşit olup $\\mu = 0{,}3$ değerindedir. Bu cisme yatayın altında $37^\\circ$ açı yapan $F = 20\\ \\mathrm{N}$ kuvveti uygulanıyor. Normal tepki kuvvetini ve cismin ivmesini hesaplayın. ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-05]]",
      secenekler: ["$N = 42\\ \\mathrm{N}$; $a \\approx 1{,}1\\ \\mathrm{m/s^2}$", "$N = 30\\ \\mathrm{N}$; $a \\approx 2{,}3\\ \\mathrm{m/s^2}$", "$N = 18\\ \\mathrm{N}$; $a \\approx 3{,}5\\ \\mathrm{m/s^2}$", "$N = 42\\ \\mathrm{N}$; $a \\approx 5{,}3\\ \\mathrm{m/s^2}$", "$N = 42\\ \\mathrm{N}$; $a = 0$"],
      dogru: 0,
      aciklama: "Aşağı doğru iten kuvvetin düşey bileşeni cismi zemine bastırır, normal kuvvet ve dolayısıyla sürtünme artar. Önce cismin kayıp kaymadığını kontrol et.",
      adimlar: [
        "**Düşey:** $$N - F\\sin 37^\\circ - mg = 0 \\quad\\Rightarrow\\quad N = 30 + 20 \\times 0{,}6 = 42\\ \\mathrm{N}$$",
        "**Maksimum sürtünme:** $$f = \\mu N = 0{,}3 \\times 42 = 12{,}6\\ \\mathrm{N}$$",
        "**Hareket var mı:** $F\\cos 37^\\circ = 20 \\times 0{,}8 = 16\\ \\mathrm{N} > 12{,}6\\ \\mathrm{N}$, cisim hareket eder.",
        "**İvme:** $$16 - 12{,}6 = 3a \\quad\\Rightarrow\\quad a = \\frac{3{,}4}{3} \\approx 1{,}1\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u5-s08", ornek: 8, kavram: "u5-surtunme",
      soru: "$37^\\circ$ eğimli bir düzlem üzerine $m = 5\\ \\mathrm{kg}$ kütlesi konulmuştur. Eğik düzlemle cisim arasındaki statik ve kinetik sürtünme katsayıları eşit olup $\\mu = 0{,}2$ değerindedir. Sürtünme kuvveti ne kadardır? Buna göre cisim hareket eder mi? Ederse ivmesi ne kadar olur? ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-06]]",
      secenekler: ["$f = 8\\ \\mathrm{N}$; hareket eder, $a = 4{,}4\\ \\mathrm{m/s^2}$", "$f = 6\\ \\mathrm{N}$; hareket eder, $a = 4{,}8\\ \\mathrm{m/s^2}$", "$f = 30\\ \\mathrm{N}$; hareket etmez", "$f = 8\\ \\mathrm{N}$; hareket eder, $a = 6\\ \\mathrm{m/s^2}$", "$f = 10\\ \\mathrm{N}$; hareket eder, $a = 4\\ \\mathrm{m/s^2}$"],
      dogru: 0,
      aciklama: "Eğik düzlemde normal kuvvet $mg\\cos\\theta$'dır. Cismi aşağı çeken $mg\\sin\\theta$ ile maksimum sürtünmeyi karşılaştır; aşıyorsa net kuvvet farkıdır.",
      adimlar: [
        "**Normal kuvvet:** $$N = mg\\cos 37^\\circ = 50 \\times 0{,}8 = 40\\ \\mathrm{N}$$",
        "**Maksimum sürtünme:** $$f_{\\max} = 0{,}2 \\times 40 = 8\\ \\mathrm{N}$$ Yukarı yönde, harekete ters.",
        "**Aşağı çeken bileşen:** $mg\\sin 37^\\circ = 50 \\times 0{,}6 = 30\\ \\mathrm{N} > 8\\ \\mathrm{N}$, cisim kayar.",
        "**İvme:** $$30 - 8 = 5a \\quad\\Rightarrow\\quad a = 4{,}4\\ \\mathrm{m/s^2}$$ (aşağı).",
      ],
    },
    {
      id: "u5-s09", ornek: 9, kavram: "u5-bagli", zorluk: 3,
      soru: "$m_1$ kütleli bir blok şekilde görüldüğü gibi yatay pürüzlü bir masa üzerinde ağırlıksız bir iple sürtünmesiz bir makaradan geçirildikten sonra $m_2$ kütlesine bağlanmıştır. $F$ büyüklüğünde bir kuvvet şekilde görüldüğü gibi $m_1$ kütlesine uygulanmıştır. $m_1$ ile yüzey arasındaki sürtünme katsayısı $\\mu$'dür. $m_2$ yukarı çıktığına göre ivme nedir?\n\n[[G-S5-07]]",
      secenekler: [
        "$a = \\dfrac{F(\\cos\\theta + \\mu\\sin\\theta) - g(m_2 + \\mu m_1)}{m_1 + m_2}$",
        "$a = \\dfrac{F(\\cos\\theta - \\mu\\sin\\theta) - g(m_1 + \\mu m_2)}{m_1 + m_2}$",
        "$a = \\dfrac{F(\\cos\\theta - \\mu\\sin\\theta) - g(m_2 + \\mu m_1)}{m_1 + m_2}$",
        "$a = \\dfrac{F\\cos\\theta - g(m_2 + \\mu m_1)}{m_1 + m_2}$",
        "$a = \\dfrac{F(\\cos\\theta + \\mu\\sin\\theta) - g(m_2 - \\mu m_1)}{m_1 - m_2}$",
      ],
      dogru: 0,
      aciklama: "Her kütle için ikinci yasayı ayrı yaz. $F$'nin düşey bileşeni $F\\sin\\theta$ $m_1$'i yukarı çektiği için normal kuvveti, dolayısıyla sürtünmeyi azaltır. Not: sununun son satırındaki formül $[F(\\cos\\theta - \\mu\\sin\\theta) - g(m_1 + \\mu m_2)]$ işaret ve kütle hatası içeriyor; adımlar doğrusunu türetir.",
      adimlar: [
        "**$m_1$ düşey:** $$N + F\\sin\\theta - m_1 g = 0 \\quad\\Rightarrow\\quad N = m_1 g - F\\sin\\theta, \\qquad f = \\mu\\,(m_1 g - F\\sin\\theta)$$",
        "**$m_1$ yatay:** $$F\\cos\\theta - f - T = m_1 a$$",
        "**$m_2$ (yukarı çıkıyor):** $$T - m_2 g = m_2 a \\quad\\Rightarrow\\quad T = m_2(g + a)$$",
        "**Yerine koy:** $$F\\cos\\theta - \\mu m_1 g + \\mu F\\sin\\theta - m_2 g - m_2 a = m_1 a$$",
        "**Topla:** $$a = \\frac{F(\\cos\\theta + \\mu\\sin\\theta) - g(m_2 + \\mu m_1)}{m_1 + m_2}$$ Gerilme $T = m_2(g + a)$.",
        "**Kontrol:** $\\mu = 0$ ve $\\theta = 0$ iken $a = \\dfrac{F - m_2 g}{m_1 + m_2}$: ip ve masa sürtünmesiz iken beklenen sonuç ✓",
      ],
    },
    {
      id: "u5-s10", ornek: 10, kavram: "u5-surtunme",
      soru: "Donmuş bir havuzda bir hokey diskine vurulsun ve ona $20\\ \\mathrm{m/s}$'lik bir hız kazandırılmış olsun. Disk, buz yüzeyi üzerinde durmadan önce $115\\ \\mathrm{m}$ kayarsa disk ile buz yüzeyi arasındaki kinetik sürtünme katsayısını bulunuz. ($g = 9{,}8\\ \\mathrm{m/s^2}$)",
      secenekler: ["$\\mu_k \\approx 0{,}177$", "$\\mu_k \\approx 0{,}117$", "$\\mu_k \\approx 0{,}35$", "$\\mu_k \\approx 0{,}087$", "$\\mu_k \\approx 1{,}74$"],
      dogru: 0,
      aciklama: "Tek yatay kuvvet kinetik sürtünme: $a = -\\mu_k g$. Zamansız hız denklemiyle $\\mu_k$ bulunur. Not: sunu sonucu $0{,}117$ yazmış; $400/2254 \\approx 0{,}177$'dir.",
      adimlar: [
        "**İvme:** $$-\\mu_k mg = ma \\quad\\Rightarrow\\quad a = -\\mu_k g$$",
        "**Zamansız denklem:** $$0 = v_i^2 + 2ax \\quad\\Rightarrow\\quad 0 = 400 - 2\\mu_k g \\cdot 115$$",
        "**Çöz:** $$\\mu_k = \\frac{400}{2 \\times 9{,}8 \\times 115} = \\frac{400}{2254} \\approx 0{,}177$$",
      ],
    },
    {
      id: "u5-s11", ornek: 11, kavram: "u5-bagli",
      soru: "Sürtünmesiz yatay bir düzlem üzerindeki $m_1 = 1\\ \\mathrm{kg}$ ve $m_2 = 2\\ \\mathrm{kg}$ kütleleri bir iple birbirlerine bağlanmışlardır. $m_1$ kütlesine yatay $F = 5\\ \\mathrm{N}$ kuvveti uygulanıyor. Kütleleri ayrı ayrı ele alarak ivmeyi ve ipteki gerilmeyi bulun.\n\n[[G-S5-08]]",
      secenekler: ["$a \\approx 1{,}7\\ \\mathrm{m/s^2}$; $T \\approx 3{,}3\\ \\mathrm{N}$", "$a = 5\\ \\mathrm{m/s^2}$; $T = 5\\ \\mathrm{N}$", "$a \\approx 1{,}7\\ \\mathrm{m/s^2}$; $T \\approx 1{,}7\\ \\mathrm{N}$", "$a = 2{,}5\\ \\mathrm{m/s^2}$; $T = 5\\ \\mathrm{N}$", "$a \\approx 1{,}7\\ \\mathrm{m/s^2}$; $T = 5\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "İple bağlı cisimlerin ivmesi aynıdır. Sistemi bütün olarak ele almak ivmeyi verir (gerilme iç kuvvettir, sadeleşir); gerilmeyi bulmak için bir kütleyi ayrı incelemek gerekir.",
      adimlar: [
        "**$m_1$:** $$F - T = m_1 a \\quad\\Rightarrow\\quad 5 - T = a$$",
        "**$m_2$:** $$T = m_2 a \\quad\\Rightarrow\\quad T = 2a$$",
        "**Topla:** $$5 = 3a \\quad\\Rightarrow\\quad a = \\frac{5}{3} \\approx 1{,}7\\ \\mathrm{m/s^2}$$",
        "**Gerilme:** $$T = 2 \\times \\frac{5}{3} = \\frac{10}{3} \\approx 3{,}3\\ \\mathrm{N}$$",
      ],
    },
    {
      id: "u5-s12", ornek: 12, kavram: "u5-surtunme", zorluk: 3,
      soru: "$m = 1\\ \\mathrm{kg}$'lık kütle, sürtünme katsayısı $\\mu = 0{,}3$ ve eğim açısı $37^\\circ$ olan eğik bir düzlem üzerine konulmuştur. $F = 20\\ \\mathrm{N}$ kuvveti cisme yatay doğrultuda etkiyor. Cisim hangi yönde gider ve ivmesi nedir? ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-09]]",
      secenekler: ["Yukarı; $a = 4\\ \\mathrm{m/s^2}$", "Aşağı; $a = 4\\ \\mathrm{m/s^2}$", "Yukarı; $a = 10\\ \\mathrm{m/s^2}$", "Yukarı; $a \\approx 7{,}6\\ \\mathrm{m/s^2}$", "Hareket etmez"],
      dogru: 0,
      aciklama: "Sürtünmenin yönü hareket yönüne bağlı olduğu için önce yönü bul: $F\\cos\\theta$ (yukarı) ile $mg\\sin\\theta$ (aşağı) karşılaştırılır. $F$'nin düzleme dik bileşeni normal kuvveti artırır.",
      adimlar: [
        "**Yön:** $mg\\sin 37^\\circ = 6\\ \\mathrm{N}$, $F\\cos 37^\\circ = 16\\ \\mathrm{N}$. $16 > 6$, cisim yukarı gitmek ister.",
        "**Normal kuvvet:** $$N = mg\\cos 37^\\circ + F\\sin 37^\\circ = 8 + 12 = 20\\ \\mathrm{N}$$",
        "**Sürtünme:** $$f = \\mu N = 0{,}3 \\times 20 = 6\\ \\mathrm{N}$$ Aşağı yönde.",
        "**İvme:** $$16 - 6 - 6 = 1 \\cdot a \\quad\\Rightarrow\\quad a = 4\\ \\mathrm{m/s^2}$$ Yukarı; artı çıktığı için cisim gerçekten hareket eder.",
      ],
    },
    {
      id: "u5-s13a", ornek: 13, parca: "b", kavram: "u5-bagli",
      soru: `${ORNEK13}\n\nİvmeler arasındaki ilişki nedir? ($a_1$: masadaki bloğun, $a_2$: asılı bloğun ivmesi)`,
      secenekler: ["$a_1 = 2a_2$", "$a_2 = 2a_1$", "$a_1 = a_2$", "$a_1 = 4a_2$", "$a_1 = a_2/4$"],
      dogru: 0,
      aciklama: "İpin boyu sabittir. Hareketli makara iki ip parçası tarafından taşındığı için makara bir miktar inince iki parçanın her biri o kadar uzar.",
      adimlar: [
        "**Geometri:** Makara (ve $2\\ \\mathrm{kg}$) $x$ kadar inerse makaranın iki yanındaki ip parçalarının her biri $x$ kadar uzar; toplam $2x$ ip masadan çekilir.",
        "**Yer değiştirmeler:** Masadaki blok $2x$ giderken asılı blok $x$ iner.",
        "**İvmeler:** Aynı oran ivmelere geçer: $$a_1 = 2a_2$$",
      ],
    },
    {
      id: "u5-s13b", ornek: 13, parca: "c", kavram: "u5-bagli", zorluk: 3,
      soru: `${ORNEK13}\n\nİvmeleri ve ipteki gerilmeyi hesaplayın.`,
      secenekler: ["$a_1 \\approx 6{,}7\\ \\mathrm{m/s^2}$; $a_2 \\approx 3{,}3\\ \\mathrm{m/s^2}$; $T \\approx 6{,}7\\ \\mathrm{N}$", "$a_1 = 20\\ \\mathrm{m/s^2}$; $a_2 = 10\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$", "$a_1 = 5\\ \\mathrm{m/s^2}$; $a_2 = 2{,}5\\ \\mathrm{m/s^2}$; $T = 5\\ \\mathrm{N}$", "$a_1 \\approx 3{,}3\\ \\mathrm{m/s^2}$; $a_2 \\approx 6{,}7\\ \\mathrm{m/s^2}$; $T \\approx 3{,}3\\ \\mathrm{N}$", "$a_1 = 10\\ \\mathrm{m/s^2}$; $a_2 = 5\\ \\mathrm{m/s^2}$; $T = 10\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "Üç bilinmeyen ($a_1$, $a_2$, $T$) için iki hareket denklemi ve ivme ilişkisi yeterlidir. Asılı blok aşağı indiği için ağırlığı $2T$'den büyük olmalı. Not: sununun sonucu ($T = 20\\ \\mathrm{N}$, $a_1 = 20$, $a_2 = 10$) bir işaret hatasından geliyor; $T = 20\\ \\mathrm{N}$ olsaydı $2T = 40\\ \\mathrm{N} > 20\\ \\mathrm{N}$ ağırlık ve asılı blok yukarı çıkardı.",
      adimlar: [
        "**Masadaki blok ($1\\ \\mathrm{kg}$):** $$T = m_1 a_1 \\quad\\Rightarrow\\quad T = a_1$$",
        "**Asılı blok ($2\\ \\mathrm{kg}$, aşağı pozitif):** $$m_2 g - 2T = m_2 a_2 \\quad\\Rightarrow\\quad 20 - 2T = 2a_2$$",
        "**İlişkiyi koy:** $T = a_1 = 2a_2$: $$20 - 4a_2 = 2a_2 \\quad\\Rightarrow\\quad a_2 = \\frac{20}{6} = \\frac{10}{3} \\approx 3{,}3\\ \\mathrm{m/s^2}$$",
        "**Kalanlar:** $$a_1 = \\frac{20}{3} \\approx 6{,}7\\ \\mathrm{m/s^2}, \\qquad T = \\frac{20}{3} \\approx 6{,}7\\ \\mathrm{N}$$",
        "**Kontrol:** $2T \\approx 13{,}3\\ \\mathrm{N} < 20\\ \\mathrm{N}$, asılı blok gerçekten aşağı ivmelenir ✓",
      ],
    },
    {
      id: "u5-s14", ornek: 14, kavram: "u5-bagli",
      soru: "Sürtünmesiz ve $30^\\circ$ eğimli bir eğik düzlem üzerindeki $m_1 = 7\\ \\mathrm{kg}$ kütlesi makaradan geçen ipin bir ucuna bağlıdır. İpin diğer ucuna $m_2 = 5\\ \\mathrm{kg}$ kütlesi asılmıştır. Hareket yönünü tayin edin; ivmeyi ve ipteki gerilme kuvvetini hesaplayın. ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-11]]",
      secenekler: ["$m_2$ aşağı iner; $a = 1{,}25\\ \\mathrm{m/s^2}$; $T \\approx 44\\ \\mathrm{N}$", "$m_1$ aşağı kayar; $a = 1{,}25\\ \\mathrm{m/s^2}$; $T \\approx 44\\ \\mathrm{N}$", "$m_2$ aşağı iner; $a \\approx 4{,}2\\ \\mathrm{m/s^2}$; $T = 50\\ \\mathrm{N}$", "$m_2$ aşağı iner; $a = 1{,}25\\ \\mathrm{m/s^2}$; $T = 35\\ \\mathrm{N}$", "Hareket etmez; $T = 50\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "Yönü bulmak için $m_2$'yi aşağı çeken $m_2 g$ ile $m_1$'i düzlem boyunca aşağı çeken $m_1 g\\sin 30^\\circ$ karşılaştırılır. Sonra her kütle için hareket yönünde ikinci yasa.",
      adimlar: [
        "**Yön:** $m_2 g = 50\\ \\mathrm{N}$; $m_1 g\\sin 30^\\circ = 70 \\times 0{,}5 = 35\\ \\mathrm{N}$. $50 > 35$: $m_2$ aşağı, $m_1$ yukarı gider.",
        "**$m_1$:** $$T - 35 = 7a$$",
        "**$m_2$:** $$50 - T = 5a$$",
        "**Topla:** $$15 = 12a \\quad\\Rightarrow\\quad a = 1{,}25\\ \\mathrm{m/s^2}$$",
        "**Gerilme:** $$T = 35 + 7 \\times 1{,}25 = 43{,}75 \\approx 44\\ \\mathrm{N}$$",
      ],
    },
    {
      id: "u5-s15", ornek: 15, kavram: "u5-surtunme",
      soru: "Kütlesi $2\\ \\mathrm{kg}$ olan bir blok, bir duvara yatay yönde $F = 30\\ \\mathrm{N}$ kuvvetiyle bastırılırken aşağı doğru kayabiliyor. Blok ile duvar arasında sürtünme katsayısı $\\mu = 0{,}5$'tir. Bloğun ivmesini bulun. ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-12]]",
      secenekler: ["2,5 m/s²", "10 m/s²", "5 m/s²", "7,5 m/s²", "0"],
      dogru: 0,
      aciklama: "Normal kuvvet her zaman $mg$'ye eşit değildir; yüzeye dik kuvvetleri karşılar. Burada yüzeye dik tek kuvvet $F$'dir, bu yüzden $N = F$.",
      adimlar: [
        "**Normal kuvvet:** $$N - F = 0 \\quad\\Rightarrow\\quad N = 30\\ \\mathrm{N}$$",
        "**Sürtünme:** $$f = \\mu N = 0{,}5 \\times 30 = 15\\ \\mathrm{N}$$ Yukarı, harekete ters.",
        "**İkinci yasa (aşağı pozitif):** $$mg - f = ma \\quad\\Rightarrow\\quad 20 - 15 = 2a$$",
        "**Sonuç:** $a = 2{,}5\\ \\mathrm{m/s^2}$.",
      ],
    },
    {
      id: "u5-s16", ornek: 16, kavram: "u5-bagli",
      soru: "Atwood aleti. Şekildeki iki eşit $M = 10\\ \\mathrm{kg}$ kütleleri bir makaradan geçirilen ipin iki ucuna asılmışlardır. Makara sürtünmesiz ve ipin kütlesi önemsizdir. Kütlelerden biri üzerine ilave küçük bir $m = 1\\ \\mathrm{kg}$ kütlesi konuluyor. İvmeyi ve ipteki gerilmeyi hesaplayın. ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-13]]",
      secenekler: ["$a \\approx 0{,}5\\ \\mathrm{m/s^2}$; $T \\approx 105\\ \\mathrm{N}$", "$a = 1\\ \\mathrm{m/s^2}$; $T = 110\\ \\mathrm{N}$", "$a \\approx 0{,}5\\ \\mathrm{m/s^2}$; $T = 100\\ \\mathrm{N}$", "$a = 10\\ \\mathrm{m/s^2}$; $T = 0$", "$a \\approx 0{,}9\\ \\mathrm{m/s^2}$; $T \\approx 109\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "İp gerilmesi iki yanda eşit, ivmeler aynı büyüklükte. Ağır taraf ($M + m$) aşağı, hafif taraf $M$ yukarı ivmelenir.",
      adimlar: [
        "**$(M + m)$ kütlesi:** $$(M + m)g - T = (M + m)a \\quad\\Rightarrow\\quad 110 - T = 11a$$",
        "**$M$ kütlesi:** $$T - Mg = Ma \\quad\\Rightarrow\\quad T - 100 = 10a$$",
        "**Topla:** $$10 = 21a \\quad\\Rightarrow\\quad a = \\frac{10}{21} \\approx 0{,}48 \\approx 0{,}5\\ \\mathrm{m/s^2}$$",
        "**Gerilme:** $$T = 100 + 10 \\times 0{,}476 \\approx 104{,}8 \\approx 105\\ \\mathrm{N}$$",
        "**Yorum:** Küçük bir $m$ ile büyük $M$'ler kolayca ivmelendirilir; asansör ve füniküler karşı ağırlığı bu ilkeyle çalışır.",
      ],
    },
    {
      id: "u5-s17", ornek: 17, kavram: "u5-dairesel",
      soru: "$0{,}5\\ \\mathrm{kg}$ kütleli bir top, $1{,}5\\ \\mathrm{m}$ uzunluğunda kablonun ucuna bağlanmıştır. Top, yatay düzlemde dairesel yörüngede hızla döndürülüyor. Kablo $50\\ \\mathrm{N}$'luk maksimum gerilmeye dayanabiliyorsa, kopmadan önce topun sahip olabileceği maksimum sürat nedir?",
      secenekler: ["≈ 12,2 m/s", "≈ 8,7 m/s", "150 m/s", "≈ 5,5 m/s", "≈ 17,3 m/s"],
      dogru: 0,
      aciklama: "Yatay dairesel harekette merkezcil kuvveti ipteki gerilme sağlar: $T = \\dfrac{mv^2}{r}$. Gerilmenin üst sınırı hızın üst sınırını belirler.",
      adimlar: [
        "**Merkezcil kuvvet:** $$T = \\frac{mv^2}{r} \\quad\\Rightarrow\\quad v = \\sqrt{\\frac{rT}{m}}$$",
        "**Yerine koy:** $$v_{\\max} = \\sqrt{\\frac{1{,}5 \\times 50}{0{,}5}} = \\sqrt{150}$$",
        "**Sonuç:** $v_{\\max} \\approx 12{,}2\\ \\mathrm{m/s}$.",
      ],
    },
    {
      id: "u5-s18a", ornek: 18, parca: "a", kavram: "u5-dairesel",
      soru: `${ORNEK18} Tekerlekler ile yol arasındaki sürtünme kuvveti ne kadardır?`,
      secenekler: ["2400 N", "31 104 N", "120 N", "12 000 N", "4800 N"],
      dogru: 0,
      aciklama: "Yatay virajda arabayı merkeze doğru çeken tek kuvvet tekerlek-yol sürtünmesidir: $f = \\dfrac{mv^2}{r}$. Önce hızı m/s'ye çevir.",
      adimlar: [
        "**Birim:** $$v = \\frac{72}{3{,}6} = 20\\ \\mathrm{m/s}$$",
        "**Merkezcil kuvvet:** $$f = \\frac{mv^2}{r} = \\frac{1200 \\times 20^2}{200} = 1200 \\times 2 = 2400\\ \\mathrm{N}$$",
        "**Tuzak:** $72^2$ ile hesaplamak $31\\,104\\ \\mathrm{N}$ verir; birim çevrilmemiştir.",
      ],
    },
    {
      id: "u5-s18b", ornek: 18, parca: "b", kavram: "u5-dairesel",
      soru: `${ORNEK18} Bu yoldaki sürtünme katsayısı $\\mu = 0{,}8$ ise, otomobilin kaymadan dönebileceği maksimum hız ne kadar olur?`,
      secenekler: ["40 m/s (144 km/sa)", "20 m/s (72 km/sa)", "1600 m/s (5760 km/sa)", "≈ 28 m/s (≈ 102 km/sa)", "≈ 44,7 m/s (≈ 161 km/sa)"],
      dogru: 0,
      aciklama: "Sürtünmenin sağlayabileceği en büyük merkezcil kuvvet $\\mu mg$'dir: $$\\mu mg = \\frac{mv^2}{r} \\quad\\Rightarrow\\quad v = \\sqrt{\\mu g r}$$ Kütle sadeleşir.",
      adimlar: [
        "**Sınır:** $$\\mu mg = \\frac{mv^2}{r} \\quad\\Rightarrow\\quad v^2 = \\mu g r$$",
        "**Hesap:** $$v^2 = 0{,}8 \\times 10 \\times 200 = 1600 \\quad\\Rightarrow\\quad v = 40\\ \\mathrm{m/s}$$",
        "**km/sa:** $40 \\times 3{,}6 = 144\\ \\mathrm{km/sa}$.",
      ],
    },
    {
      id: "u5-s19", ornek: 19, kavram: "u5-dairesel", zorluk: 3,
      soru: "Bir otomobil $r = 100\\ \\mathrm{m}$ yarıçaplı ve yatayla $30^\\circ$ açı yapan sürtünmesiz bir virajı $v$ hızıyla alıyor. Otomobil savrulmadan hangi hızla dönebilir? ($g = 10\\ \\mathrm{m/s^2}$; $\\tan 30^\\circ \\approx 0{,}58$)\n\n[[G-S5-14]]",
      secenekler: ["≈ 24 m/s (≈ 87 km/sa)", "≈ 32 m/s (≈ 114 km/sa)", "≈ 17 m/s (≈ 61 km/sa)", "58 m/s (≈ 209 km/sa)", "≈ 22 m/s (≈ 80 km/sa)"],
      dogru: 0,
      aciklama: "Sürtünme yok; merkezcil kuvveti normal kuvvetin yatay bileşeni $N\\sin\\theta$ sağlar. Düşey bileşen $N\\cos\\theta$ ağırlığı dengeler.",
      adimlar: [
        "**Yatay:** $$N\\sin\\theta = \\frac{mv^2}{r}$$",
        "**Düşey:** $$N\\cos\\theta = mg$$",
        "**Böl:** $$\\tan\\theta = \\frac{v^2}{gr} \\quad\\Rightarrow\\quad v = \\sqrt{gr\\tan\\theta}$$",
        "**Hesap:** $$v = \\sqrt{10 \\times 100 \\times 0{,}58} = \\sqrt{580} \\approx 24\\ \\mathrm{m/s} \\approx 87\\ \\mathrm{km/sa}$$",
      ],
    },
    {
      id: "u5-s20", ornek: 20, kavram: "u5-dairesel",
      soru: "Sürtünmesiz yatay bir düzlemde $80\\ \\mathrm{cm}$ uzunluktaki bir ipin ucunda sabit hızla dönen $m = 200\\ \\mathrm{g}$ kütleli blok $3$ dakikada $500$ devir yapmaktadır. Bloğun merkezcil ivmesini ve ipteki gerilme kuvvetini hesaplayın.",
      secenekler: ["$a_r \\approx 245\\ \\mathrm{m/s^2}$; $T \\approx 49\\ \\mathrm{N}$", "$a_r \\approx 17{,}5\\ \\mathrm{m/s^2}$; $T \\approx 3{,}5\\ \\mathrm{N}$", "$a_r \\approx 245\\ \\mathrm{m/s^2}$; $T \\approx 49\\,000\\ \\mathrm{N}$", "$a_r \\approx 196\\ \\mathrm{m/s^2}$; $T \\approx 39\\ \\mathrm{N}$", "$a_r \\approx 14\\ \\mathrm{m/s^2}$; $T \\approx 2{,}8\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "Önce sürat: bir devirde $2\\pi r$ yol, toplam yol bölü toplam süre. Merkezcil ivme $v^2/r$, gerilme $m\\,a_r$. Birimleri SI'ya çevir ($80\\ \\mathrm{cm} = 0{,}8\\ \\mathrm{m}$, $200\\ \\mathrm{g} = 0{,}2\\ \\mathrm{kg}$, $3\\ \\mathrm{dk} = 180\\ \\mathrm{s}$).",
      adimlar: [
        "**Sürat:** $$v = \\frac{500 \\times 2\\pi \\times 0{,}8}{180} \\approx \\frac{2513}{180} \\approx 14\\ \\mathrm{m/s}$$",
        "**Merkezcil ivme:** $$a_r = \\frac{v^2}{r} = \\frac{14^2}{0{,}8} = \\frac{196}{0{,}8} = 245\\ \\mathrm{m/s^2}$$",
        "**Gerilme:** $$T = m\\,a_r = 0{,}2 \\times 245 = 49\\ \\mathrm{N}$$",
        "**Tuzak:** $200\\ \\mathrm{g}$'yi $200\\ \\mathrm{kg}$ diye kullanmak $49\\,000\\ \\mathrm{N}$ verir.",
      ],
    },
    {
      id: "u5-s21a", ornek: 21, parca: "a ve b", kavram: "u5-dairesel",
      soru: `${ORNEK21}\n\nİvmenin bu andaki çapsal ($a_r$) bileşenini ve teğetsel ivmenin ($a_t$) büyüklüğünü bulunuz.`,
      secenekler: ["$a_r = 4{,}5\\ \\mathrm{m/s^2}$; $a_t \\approx 3{,}4\\ \\mathrm{m/s^2}$", "$a_r = 3\\ \\mathrm{m/s^2}$; $a_t \\approx 3{,}4\\ \\mathrm{m/s^2}$", "$a_r = 4{,}5\\ \\mathrm{m/s^2}$; $a_t \\approx 9{,}2\\ \\mathrm{m/s^2}$", "$a_r \\approx 3{,}4\\ \\mathrm{m/s^2}$; $a_t = 4{,}5\\ \\mathrm{m/s^2}$", "$a_r = 4{,}5\\ \\mathrm{m/s^2}$; $a_t = 0$"],
      dogru: 0,
      aciklama: "Çapsal (merkezcil) ivme o anki hızdan bulunur: $a_r = v^2/r$. Teğetsel ivmeyi ağırlığın yörüngeye teğet bileşeni $mg\\sin\\theta$ sağlar: $a_t = g\\sin\\theta$.",
      adimlar: [
        "**Çapsal:** $$a_r = \\frac{v^2}{r} = \\frac{1{,}5^2}{0{,}5} = \\frac{2{,}25}{0{,}5} = 4{,}5\\ \\mathrm{m/s^2}$$ İpe doğru, merkeze.",
        "**Teğetsel:** $$a_t = g\\sin 20^\\circ = 9{,}8 \\times 0{,}34 \\approx 3{,}4\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u5-s21b", ornek: 21, parca: "c", kavram: "u5-dairesel",
      soru: `${ORNEK21}\n\n$\\theta = 20^\\circ$'de toplam ivmenin ($a$) büyüklüğünü ve doğrultusunu (ip ile yaptığı açı) bulunuz. ($a_r = 4{,}5\\ \\mathrm{m/s^2}$, $a_t = 3{,}4\\ \\mathrm{m/s^2}$)`,
      secenekler: ["$a \\approx 5{,}6\\ \\mathrm{m/s^2}$; ip ile $\\approx 37^\\circ$", "$a \\approx 7{,}9\\ \\mathrm{m/s^2}$; ip ile $\\approx 37^\\circ$", "$a \\approx 5{,}6\\ \\mathrm{m/s^2}$; ip ile $\\approx 53^\\circ$", "$a \\approx 1{,}1\\ \\mathrm{m/s^2}$; ip ile $\\approx 20^\\circ$", "$a = 9{,}8\\ \\mathrm{m/s^2}$; düşey"],
      dogru: 0,
      aciklama: "Çapsal ve teğetsel bileşenler birbirine diktir: büyüklük Pisagor'la, ip (çapsal doğrultu) ile açı $\\tan\\varphi = a_t/a_r$ ile bulunur.",
      adimlar: [
        "**Büyüklük:** $$a = \\sqrt{4{,}5^2 + 3{,}4^2} = \\sqrt{20{,}25 + 11{,}56} \\approx \\sqrt{31{,}8} \\approx 5{,}6\\ \\mathrm{m/s^2}$$",
        "**Doğrultu:** $$\\varphi = \\tan^{-1}\\!\\left(\\frac{3{,}4}{4{,}5}\\right) \\approx 37^\\circ$$ İp doğrultusundan ölçülür.",
      ],
    },
    {
      id: "u5-s22", ornek: 22, kavram: "u5-denge",
      soru: "Şekildeki sistemler dengededir. Ölçü aleti Newton'a göre skalalandırılmıştır. Okunacak değerler neler olabilir? Makaralarda ve düzlemlerde sürtünmenin olmadığını kabul ediniz. ($g = 10\\ \\mathrm{m/s^2}$, bütün kütleler $5\\ \\mathrm{kg}$)\n\n[[G-S5-16]]",
      secenekler: ["(a) 50 N; (b) 100 N; (c) 25 N", "(a) 100 N; (b) 100 N; (c) 50 N", "(a) 50 N; (b) 50 N; (c) 25 N", "(a) 0; (b) 100 N; (c) 25 N", "(a) 50 N; (b) 100 N; (c) 43 N"],
      dogru: 0,
      aciklama: "Dinamometre bağlı olduğu ipteki gerilmeyi okur. Bir ipin iki ucunda kütle varken gerilme toplam ağırlık değil, tek bir kütlenin ağırlığıdır.",
      adimlar: [
        "**(a):** Her kütle için $T - mg = 0$, yani $T = 50\\ \\mathrm{N}$. Dinamometre ipin içinde, $50\\ \\mathrm{N}$ okur (iki ucu da $50\\ \\mathrm{N}$ ile çekilir).",
        "**(b):** İpteki gerilme yine $T = 50\\ \\mathrm{N}$. Makara iki ip parçasıyla aşağı çekilir; makarayı tutan dinamometre $2T = 100\\ \\mathrm{N}$ okur.",
        "**(c):** Eğik düzlemde dengede: $$T - mg\\sin 30^\\circ = 0 \\quad\\Rightarrow\\quad T = 50 \\times 0{,}5 = 25\\ \\mathrm{N}$$",
      ],
    },
    {
      id: "u5-s23a", ornek: 23, parca: "a ve b", kavram: "u5-yasalar",
      soru: `${ORNEK23}\n\nKütlelerin sahip olduğu ivmeyi ve her bloğa uygulanan bileşke kuvveti hesaplayınız.`,
      secenekler: ["$a = 2\\ \\mathrm{m/s^2}$; 4 N, 6 N, 8 N", "$a = 2\\ \\mathrm{m/s^2}$; 18 N, 14 N, 8 N", "$a = 6\\ \\mathrm{m/s^2}$; 12 N, 18 N, 24 N", "$a = 2\\ \\mathrm{m/s^2}$; 6 N, 6 N, 6 N", "$a = 9\\ \\mathrm{m/s^2}$; 18 N, 27 N, 36 N"],
      dogru: 0,
      aciklama: "Bloklar birlikte hareket ettiği için ivmeleri aynıdır; sistemin ivmesi $F$ bölü toplam kütle. Her bloğun bileşke kuvveti kendi kütlesi çarpı ivmedir. Not: sunu (b)'de $14\\ \\mathrm{N}$ ve $8\\ \\mathrm{N}$ vermiş; bunlar bloklar arası temas kuvvetleri, bileşke kuvvetler $4$, $6$ ve $8\\ \\mathrm{N}$'dur.",
      adimlar: [
        "**İvme:** $$a = \\frac{F}{m_1 + m_2 + m_3} = \\frac{18}{9} = 2\\ \\mathrm{m/s^2}$$",
        "**Bileşke kuvvetler:** $$F_{1,\\text{net}} = 2 \\times 2 = 4\\ \\mathrm{N}, \\quad F_{2,\\text{net}} = 3 \\times 2 = 6\\ \\mathrm{N}, \\quad F_{3,\\text{net}} = 4 \\times 2 = 8\\ \\mathrm{N}$$",
        "**Kontrol:** $4 + 6 + 8 = 18\\ \\mathrm{N}$, dış kuvvete eşit ✓",
      ],
    },
    {
      id: "u5-s23b", ornek: 23, parca: "c", kavram: "u5-yasalar",
      soru: `${ORNEK23}\n\nBloklar arası kontak kuvvetlerini hesaplayınız.`,
      secenekler: ["$P_{12} = 14\\ \\mathrm{N}$; $P_{23} = 8\\ \\mathrm{N}$", "$P_{12} = 6\\ \\mathrm{N}$; $P_{23} = 8\\ \\mathrm{N}$", "$P_{12} = 18\\ \\mathrm{N}$; $P_{23} = 18\\ \\mathrm{N}$", "$P_{12} = 4\\ \\mathrm{N}$; $P_{23} = 6\\ \\mathrm{N}$", "$P_{12} = 16\\ \\mathrm{N}$; $P_{23} = 10\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "$m_1$'in $m_2$'ye uyguladığı kuvvet $m_2$ ile $m_3$'ü birlikte ivmelendirir; $m_2$'nin $m_3$'e uyguladığı kuvvet yalnız $m_3$'ü ivmelendirir. Üçüncü yasaya göre $\\vec{P}_{12} = -\\vec{P}_{21}$.",
      adimlar: [
        "**$P_{12}$:** $$P_{12} = (m_2 + m_3)\\,a = (3 + 4) \\times 2 = 14\\ \\mathrm{N}$$",
        "**$P_{23}$:** $$P_{23} = m_3\\,a = 4 \\times 2 = 8\\ \\mathrm{N}$$",
        "**Kontrol ($m_1$):** $$F - P_{21} = m_1 a \\quad\\Rightarrow\\quad 18 - 14 = 4 = 2 \\times 2\\ ✓$$",
      ],
    },
  ]),

  ...turet(U, K, "u5-kavram", [
    {
      id: "u5-t01", tip: "tf", zorluk: 1,
      soru: "Bir astronotun kütlesi Ay'da Dünya'dakinden küçüktür.",
      dogru: false,
      aciklama: "Kütle cismin eylemsizlik ölçüsüdür, konuma bağlı değildir. Ay'da değişen ağırlıktır: $W = mg$ ve Ay'da $g$ daha küçük.",
    },
    {
      id: "u5-t02", tip: "mcq",
      soru: "Kütlesi $60\\ \\mathrm{kg}$ olan bir astronotun Ay'daki ağırlığı nedir? ($g_{\\text{Ay}} \\approx 1{,}6\\ \\mathrm{m/s^2}$)",
      secenekler: ["96 N", "600 N", "60 N", "37,5 N", "9,6 N"],
      dogru: 0,
      aciklama: "Ağırlık $W = mg$; $g$ bulunduğun yere bağlıdır.",
      adimlar: [
        "**Formül:** $$W = m\\,g_{\\text{Ay}}$$",
        "**Hesap:** $$W = 60 \\times 1{,}6 = 96\\ \\mathrm{N}$$ Dünya'da $600\\ \\mathrm{N}$ olurdu.",
      ],
    },
    {
      id: "u5-t03", tip: "mcq",
      soru: "Aynı $F$ kuvveti $m_1$ kütlesine $6\\ \\mathrm{m/s^2}$, $m_2$ kütlesine $2\\ \\mathrm{m/s^2}$ ivme kazandırıyor. $m_1/m_2$ oranı nedir?",
      secenekler: ["$\\tfrac{1}{3}$", "$3$", "$\\tfrac{1}{2}$", "$2$", "$\\tfrac{1}{6}$"],
      dogru: 0,
      aciklama: "Aynı kuvvet için ivme kütleyle ters orantılıdır: $m_1 a_1 = m_2 a_2$, dolayısıyla $\\dfrac{m_1}{m_2} = \\dfrac{a_2}{a_1}$.",
      adimlar: [
        "**Eşitle:** $$F = m_1 \\times 6 = m_2 \\times 2$$",
        "**Oran:** $$\\frac{m_1}{m_2} = \\frac{2}{6} = \\frac{1}{3}$$ Daha çok ivmelenen cisim daha hafiftir.",
      ],
    },
    {
      id: "u5-t04", tip: "fill", zorluk: 1,
      soru: "Bir cismin hız değişimine karşı gösterdiği direnç ____ olarak adlandırılır; bu direncin ölçüsü kütledir.",
      bosluklar: [["eylemsizlik", "eylemsizlik (atalet)", "atalet"]],
      aciklama: "**Eylemsizlik** (atalet): cisim hızını korumak ister. Kütlesi büyük olanı ivmelendirmek zordur; uzayda 1 tonluk kayayı tutabilirsin ama tekmeleyip hızlandırmaya çalışırsan ayağını kırabilirsin.",
    },
  ]),

  ...turet(U, K, "u5-yasalar", [
    {
      id: "u5-t05", tip: "mcq", zorluk: 1,
      soru: "$5\\ \\mathrm{kg}$ kütleli bir cisme sürtünmesiz yatay düzlemde $20\\ \\mathrm{N}$ yatay net kuvvet uygulanıyor. Cismin ivmesi nedir?",
      secenekler: ["4 m/s²", "100 m/s²", "0,25 m/s²", "25 m/s²", "15 m/s²"],
      dogru: 0,
      aciklama: "Newton'un ikinci yasası: $\\sum \\vec{F} = m\\vec{a}$, dolayısıyla $a = \\sum F/m$.",
      adimlar: ["**Hesap:** $$a = \\frac{20}{5} = 4\\ \\mathrm{m/s^2}$$"],
    },
    {
      id: "u5-t06", tip: "tf",
      soru: "Etki ve tepki kuvvetleri eşit büyüklükte ve zıt yönlü oldukları için aynı cisme etki ederek birbirini dengeler.",
      dogru: false,
      aciklama: "Üçüncü yasadaki etki-tepki çifti **farklı cisimlere** etki eder ($\\vec{P}_{12}$ $m_2$'ye, $\\vec{P}_{21}$ $m_1$'e). Bu yüzden birbirini dengeleyemezler. Masadaki kitapta ağırlık ve normal kuvvet birbirini dengeler ama bunlar etki-tepki çifti değildir.",
    },
    {
      id: "u5-t07", tip: "mcq",
      soru: "Üzerine etki eden net kuvvet sıfır olan bir cisim için hangisi kesinlikle doğrudur?",
      secenekler: ["İvmesi sıfırdır", "Durmaktadır", "Üzerine hiç kuvvet etki etmiyordur", "Yavaşlamaktadır", "Dairesel hareket yapmaktadır"],
      dogru: 0,
      aciklama: "Birinci yasa: net kuvvet sıfırsa cisim durumunu korur, yani ya durur ya da sabit hızla gider; her iki durumda ivme sıfırdır. Cismin üzerinde birbirini dengeleyen kuvvetler olabilir.",
    },
    {
      id: "u5-t08", tip: "mcq",
      soru: "Bir at arabayı çekiyor. At arabaya $F$ kuvveti uyguluyorsa araba ata ne kadar kuvvet uygular?",
      secenekler: ["$F$, ters yönde", "$F$'den küçük", "$F$'den büyük", "Araba hızlanıyorsa sıfır", "$2F$, ters yönde"],
      dogru: 0,
      aciklama: "Üçüncü yasa koşulsuzdur: araba hızlansa da yavaşlasa da $\\vec{P}_{\\text{araba}\\to\\text{at}} = -\\vec{P}_{\\text{at}\\to\\text{araba}}$. Arabanın hızlanmasını, attan aldığı kuvvetin yolun sürtünmesinden büyük olması açıklar.",
    },
  ]),

  ...turet(U, K, "u5-denge", [
    {
      id: "u5-t09", tip: "mcq",
      soru: "$40\\ \\mathrm{N}$ ağırlığındaki bir lamba, yatayla $30^\\circ$ açı yapan iki eş kabloyla şekildeki gibi asılıdır. Her bir kablodaki gerilme nedir? ($\\sin 30^\\circ = 0{,}5$)\n\n[[G-S5-18]]",
      secenekler: ["40 N", "20 N", "80 N", "≈ 23 N", "≈ 46 N"],
      dogru: 0,
      aciklama: "Simetrik durumda iki gerilme eşittir; yatay bileşenler birbirini götürür, düşey bileşenlerin toplamı ağırlığı dengeler.",
      adimlar: [
        "**Düşey denge:** $$2T\\sin 30^\\circ = 40$$",
        "**Çöz:** $$2T \\times 0{,}5 = 40 \\quad\\Rightarrow\\quad T = 40\\ \\mathrm{N}$$",
        "**Yorum:** Kablolar yataya yaklaştıkça (açı küçüldükçe) gerilme artar; $30^\\circ$'de her kablo lambanın tüm ağırlığı kadar gerilir.",
      ],
    },
    {
      id: "u5-t10", tip: "tf",
      soru: "Sabit hızla düz bir yolda giden bir arabaya etki eden net kuvvet sıfırdır.",
      dogru: true,
      aciklama: "Sabit hız (yön ve büyüklük sabit) ivme sıfır demektir; ikinci yasaya göre net kuvvet de sıfırdır. Motorun itişi sürtünme ve hava direnciyle dengelenir.",
    },
  ]),

  ...turet(U, K, "u5-ikinci", [
    {
      id: "u5-t11", tip: "mcq",
      soru: "Sürtünmesiz yatay düzlemdeki $2\\ \\mathrm{kg}$ kütleli bir bloğa yatayla $53^\\circ$ açı yapan $F = 10\\ \\mathrm{N}$ kuvveti yukarı doğru uygulanıyor. Bloğun ivmesi ve normal kuvvet nedir? ($\\sin 53^\\circ = 0{,}8$; $\\cos 53^\\circ = 0{,}6$; $g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-21]]",
      secenekler: ["$a = 3\\ \\mathrm{m/s^2}$; $N = 12\\ \\mathrm{N}$", "$a = 5\\ \\mathrm{m/s^2}$; $N = 20\\ \\mathrm{N}$", "$a = 4\\ \\mathrm{m/s^2}$; $N = 14\\ \\mathrm{N}$", "$a = 3\\ \\mathrm{m/s^2}$; $N = 28\\ \\mathrm{N}$", "$a = 3\\ \\mathrm{m/s^2}$; $N = 20\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "Yatay bileşen ivmeyi verir; düşey bileşen yukarı çektiği için normal kuvveti azaltır.",
      adimlar: [
        "**Yatay:** $$F\\cos 53^\\circ = 10 \\times 0{,}6 = 6\\ \\mathrm{N} \\quad\\Rightarrow\\quad a = \\frac{6}{2} = 3\\ \\mathrm{m/s^2}$$",
        "**Düşey:** $$N + F\\sin 53^\\circ - mg = 0 \\quad\\Rightarrow\\quad N = 20 - 8 = 12\\ \\mathrm{N}$$",
      ],
    },
    {
      id: "u5-t12", tip: "mcq",
      soru: "Bir blok $30^\\circ$ eğimli sürtünmesiz bir düzlemin tepesinden serbest bırakılıyor. Eğik yüzey boyunca uzunluk $10\\ \\mathrm{m}$'dir. Bloğun ivmesi ve alt uca vardığındaki hızı nedir? ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-19]]",
      secenekler: ["$a = 5\\ \\mathrm{m/s^2}$; $v = 10\\ \\mathrm{m/s}$", "$a = 10\\ \\mathrm{m/s^2}$; $v \\approx 14\\ \\mathrm{m/s}$", "$a \\approx 8{,}7\\ \\mathrm{m/s^2}$; $v \\approx 13\\ \\mathrm{m/s}$", "$a = 5\\ \\mathrm{m/s^2}$; $v = 100\\ \\mathrm{m/s}$", "$a = 5\\ \\mathrm{m/s^2}$; $v \\approx 7{,}1\\ \\mathrm{m/s}$"],
      dogru: 0,
      aciklama: "Sürtünmesiz eğik düzlemde $a = g\\sin\\theta$; ilk hız sıfır olduğundan $v^2 = 2ad$.",
      adimlar: [
        "**İvme:** $$a = 10 \\times \\sin 30^\\circ = 5\\ \\mathrm{m/s^2}$$",
        "**Hız:** $$v^2 = 2 \\times 5 \\times 10 = 100 \\quad\\Rightarrow\\quad v = 10\\ \\mathrm{m/s}$$",
        "**Kontrol:** Yükseklik $h = 10 \\times \\sin 30^\\circ = 5\\ \\mathrm{m}$: $$\\sqrt{2gh} = \\sqrt{100} = 10\\ \\mathrm{m/s}\\ ✓$$",
      ],
    },
    {
      id: "u5-t13", tip: "mcq",
      soru: "$70\\ \\mathrm{kg}$ kütleli bir kişi asansörde bir baskülün üzerinde duruyor. Asansör $2\\ \\mathrm{m/s^2}$ ivmeyle yukarı doğru hızlanırken baskül kaç N gösterir? ($g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["840 N", "700 N", "560 N", "140 N", "1400 N"],
      dogru: 0,
      aciklama: "Baskül normal kuvveti gösterir. Kişi asansörle birlikte yukarı ivmelendiği için $N - mg = ma$.",
      adimlar: [
        "**İkinci yasa (yukarı pozitif):** $$N - 700 = 70 \\times 2$$",
        "**Sonuç:** $N = 840\\ \\mathrm{N}$. Aşağı yönde $2\\ \\mathrm{m/s^2}$ ivmelenseydi $560\\ \\mathrm{N}$ gösterirdi.",
      ],
    },
  ]),

  ...turet(U, K, "u5-surtunme", [
    {
      id: "u5-t14", tip: "mcq",
      soru: "Yatay zemindeki $4\\ \\mathrm{kg}$ kütleli bir kutuya $30\\ \\mathrm{N}$ yatay kuvvet uygulanıyor. Kinetik sürtünme katsayısı $0{,}5$ ise kutunun ivmesi nedir? ($g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["2,5 m/s²", "7,5 m/s²", "5 m/s²", "0", "12,5 m/s²"],
      dogru: 0,
      aciklama: "Önce sürtünme kuvveti $\\mu mg$, sonra net kuvvet.",
      adimlar: [
        "**Sürtünme:** $$f = 0{,}5 \\times 4 \\times 10 = 20\\ \\mathrm{N}$$",
        "**Net kuvvet:** $$F_{\\text{net}} = 30 - 20 = 10\\ \\mathrm{N}$$",
        "**İvme:** $$a = \\frac{10}{4} = 2{,}5\\ \\mathrm{m/s^2}$$",
      ],
    },
    {
      id: "u5-t15", tip: "mcq",
      soru: "Yatay zemindeki $10\\ \\mathrm{kg}$ kütleli bir dolaba $30\\ \\mathrm{N}$ yatay kuvvet uygulanıyor. Statik sürtünme katsayısı $0{,}4$ ise dolaba etki eden sürtünme kuvveti nedir? ($g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["30 N", "40 N", "10 N", "0", "70 N"],
      dogru: 0,
      aciklama: "Statik sürtünmenin üst sınırı $\\mu_s N$'dir ama değeri uygulanan kuvvete göre ayarlanır.",
      adimlar: [
        "**Üst sınır:** $$f_{\\max} = 0{,}4 \\times 100 = 40\\ \\mathrm{N}$$",
        "**Karşılaştır:** $30\\ \\mathrm{N} < 40\\ \\mathrm{N}$, dolap kımıldamaz.",
        "**Sürtünme:** Net kuvvet sıfır olmalı, dolayısıyla $f = 30\\ \\mathrm{N}$.",
      ],
    },
    {
      id: "u5-t16", tip: "mcq",
      soru: "Yatay bir yüzeyde $10\\ \\mathrm{m/s}$ hızla kaymaya başlayan bir blok, kinetik sürtünme katsayısı $0{,}5$ olan yüzeyde kaç metre sonra durur? ($g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["10 m", "20 m", "5 m", "2 m", "100 m"],
      dogru: 0,
      aciklama: "$a = -\\mu g$ (kütle sadeleşir), sonra zamansız hız denklemi.",
      adimlar: [
        "**İvme:** $$a = -0{,}5 \\times 10 = -5\\ \\mathrm{m/s^2}$$",
        "**Yol:** $$0 = 100 + 2(-5)\\,x \\quad\\Rightarrow\\quad x = 10\\ \\mathrm{m}$$",
      ],
    },
    {
      id: "u5-t17", tip: "mcq",
      soru: "$37^\\circ$ eğimli bir düzlemdeki $2\\ \\mathrm{kg}$ kütleli bloğun düzlemle kinetik sürtünme katsayısı $0{,}5$'tir. Blok aşağı kayarken ivmesi nedir? ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-20]]",
      secenekler: ["2 m/s²", "6 m/s²", "10 m/s²", "4 m/s²", "1 m/s²"],
      dogru: 0,
      aciklama: "Aşağı çeken $mg\\sin\\theta$, karşı koyan $\\mu mg\\cos\\theta$. Net kuvvet farklarıdır.",
      adimlar: [
        "**Aşağı bileşen:** $$mg\\sin 37^\\circ = 20 \\times 0{,}6 = 12\\ \\mathrm{N}$$",
        "**Sürtünme:** $$\\mu mg\\cos 37^\\circ = 0{,}5 \\times 20 \\times 0{,}8 = 8\\ \\mathrm{N}$$",
        "**İvme:** $$a = \\frac{12 - 8}{2} = 2\\ \\mathrm{m/s^2}$$",
        "**Formülle kontrol:** $$a = g(\\sin\\theta - \\mu\\cos\\theta) = 10\\,(0{,}6 - 0{,}4) = 2\\ \\mathrm{m/s^2}\\ ✓$$",
      ],
    },
    {
      id: "u5-t18", tip: "mcq", zorluk: 3,
      soru: "$37^\\circ$ eğimli bir düzlemde $2\\ \\mathrm{kg}$ kütleli bir blok duruyor. Statik sürtünme katsayısı $0{,}8$'dir. Bloğa etki eden sürtünme kuvveti nedir? ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["12 N", "12,8 N", "16 N", "0", "20 N"],
      dogru: 0,
      aciklama: "Önce kayıp kaymadığını kontrol et: $\\mu_s \\geq \\tan\\theta$ ise blok durur. Duruyorsa sürtünme $\\mu N$ değil, aşağı çeken bileşen kadardır.",
      adimlar: [
        "**Kayar mı:** $\\tan 37^\\circ = 0{,}75 < 0{,}8$, blok durur. Ya da: $$f_{\\max} = 0{,}8 \\times 16 = 12{,}8\\ \\mathrm{N} > 12\\ \\mathrm{N}$$",
        "**Sürtünme:** Denge: $$f = mg\\sin 37^\\circ = 20 \\times 0{,}6 = 12\\ \\mathrm{N}$$",
        "**Tuzak:** $12{,}8\\ \\mathrm{N}$ yalnız üst sınırdır; bloğa etki eden sürtünme $12\\ \\mathrm{N}$'dur.",
      ],
    },
    {
      id: "u5-t19", tip: "mcq", zorluk: 3,
      soru: "$4\\ \\mathrm{kg}$ kütleli bir blok bir duvara $F = 100\\ \\mathrm{N}$ yatay kuvvetle bastırılıyor. Blok ile duvar arasındaki statik sürtünme katsayısı $0{,}5$'tir. Blok kayar mı, sürtünme kuvveti ne kadardır? ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-24]]",
      secenekler: ["Kaymaz; $f = 40\\ \\mathrm{N}$", "Kaymaz; $f = 50\\ \\mathrm{N}$", "Kayar; $f = 50\\ \\mathrm{N}$", "Kayar; $f = 40\\ \\mathrm{N}$", "Kaymaz; $f = 100\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "Normal kuvvet bastırma kuvvetine eşittir ($N = F$). Duvardaki sürtünmenin üst sınırı ağırlıktan büyükse blok durur ve sürtünme ağırlık kadardır.",
      adimlar: [
        "**Normal kuvvet:** $N = F = 100\\ \\mathrm{N}$.",
        "**Üst sınır:** $$f_{\\max} = 0{,}5 \\times 100 = 50\\ \\mathrm{N}$$",
        "**Ağırlık:** $mg = 40\\ \\mathrm{N} < 50\\ \\mathrm{N}$, blok kaymaz.",
        "**Sürtünme:** Denge: $f = 40\\ \\mathrm{N}$ (yukarı).",
      ],
    },
  ]),

  ...turet(U, K, "u5-bagli", [
    {
      id: "u5-t20", tip: "mcq",
      soru: "Sürtünmesiz bir makaradan geçen ipin bir ucunda $3\\ \\mathrm{kg}$, öbür ucunda $2\\ \\mathrm{kg}$ kütle asılıdır. Sistemin ivmesi ve ipteki gerilme nedir? ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-25]]",
      secenekler: ["$a = 2\\ \\mathrm{m/s^2}$; $T = 24\\ \\mathrm{N}$", "$a = 10\\ \\mathrm{m/s^2}$; $T = 0$", "$a = 2\\ \\mathrm{m/s^2}$; $T = 30\\ \\mathrm{N}$", "$a = 2\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$", "$a = 5\\ \\mathrm{m/s^2}$; $T = 25\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "Atwood aletinde net kuvvet ağırlıkların farkıdır ve toplam kütleyi ivmelendirir. Gerilme iki ağırlığın arasında bir değer olmalı.",
      adimlar: [
        "**İvme:** $$a = \\frac{30 - 20}{3 + 2} = 2\\ \\mathrm{m/s^2}$$",
        "**Gerilme (2 kg, yukarı):** $$T - 20 = 2 \\times 2 \\quad\\Rightarrow\\quad T = 24\\ \\mathrm{N}$$",
        "**Kontrol (3 kg):** $$30 - 24 = 6 = 3 \\times 2\\ ✓$$",
      ],
    },
    {
      id: "u5-t21", tip: "mcq",
      soru: "Sürtünmesiz bir masadaki $3\\ \\mathrm{kg}$ blok, masanın kenarındaki makaradan geçen iple asılı $2\\ \\mathrm{kg}$ bloğa bağlıdır. İvme ve gerilme nedir? ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-22]]",
      secenekler: ["$a = 4\\ \\mathrm{m/s^2}$; $T = 12\\ \\mathrm{N}$", "$a = 10\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$", "$a \\approx 6{,}7\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$", "$a = 4\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$", "$a = 4\\ \\mathrm{m/s^2}$; $T = 8\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "Sistemi hareket ettiren tek kuvvet asılı bloğun ağırlığıdır; iki kütleyi birlikte ivmelendirir. Gerilme masadaki bloğu ivmelendiren kuvvettir.",
      adimlar: [
        "**İvme:** $$a = \\frac{20}{3 + 2} = 4\\ \\mathrm{m/s^2}$$",
        "**Gerilme:** $$T = 3 \\times 4 = 12\\ \\mathrm{N}$$",
        "**Kontrol (2 kg):** $$20 - 12 = 8 = 2 \\times 4\\ ✓$$ Gerilme asılı bloğun ağırlığından küçük çıkar, çünkü blok aşağı ivmelenir.",
      ],
    },
    {
      id: "u5-t22", tip: "mcq",
      soru: "Sürtünmesiz düzlemde yan yana duran $1\\ \\mathrm{kg}$, $2\\ \\mathrm{kg}$ ve $3\\ \\mathrm{kg}$ kütleli bloklardan soldakine $F = 24\\ \\mathrm{N}$ yatay kuvvet uygulanıyor. İvme ve bloklar arası temas kuvvetleri nedir?\n\n[[G-S5-26]]",
      secenekler: ["$a = 4\\ \\mathrm{m/s^2}$; $P_{12} = 20\\ \\mathrm{N}$; $P_{23} = 12\\ \\mathrm{N}$", "$a = 4\\ \\mathrm{m/s^2}$; $P_{12} = 8\\ \\mathrm{N}$; $P_{23} = 12\\ \\mathrm{N}$", "$a = 4\\ \\mathrm{m/s^2}$; $P_{12} = 24\\ \\mathrm{N}$; $P_{23} = 24\\ \\mathrm{N}$", "$a = 24\\ \\mathrm{m/s^2}$; $P_{12} = 20\\ \\mathrm{N}$; $P_{23} = 12\\ \\mathrm{N}$", "$a = 4\\ \\mathrm{m/s^2}$; $P_{12} = 4\\ \\mathrm{N}$; $P_{23} = 8\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "Önce bütün sistemin ivmesi; sonra her temas kuvveti, kendisinden sonraki blokların toplam kütlesini ivmelendirir.",
      adimlar: [
        "**İvme:** $$a = \\frac{24}{6} = 4\\ \\mathrm{m/s^2}$$",
        "**$P_{12}$:** $$P_{12} = (2 + 3) \\times 4 = 20\\ \\mathrm{N}$$",
        "**$P_{23}$:** $$P_{23} = 3 \\times 4 = 12\\ \\mathrm{N}$$",
      ],
    },
    {
      id: "u5-t23", tip: "mcq", zorluk: 3,
      soru: "$30^\\circ$ eğimli sürtünmesiz düzlemdeki $4\\ \\mathrm{kg}$ blok, tepedeki makaradan geçen iple asılı $4\\ \\mathrm{kg}$ bloğa bağlıdır. Sistemin ivmesi ve ipteki gerilme nedir? ($g = 10\\ \\mathrm{m/s^2}$)\n\n[[G-S5-23]]",
      secenekler: ["$a = 2{,}5\\ \\mathrm{m/s^2}$; $T = 30\\ \\mathrm{N}$", "$a = 0$; $T = 40\\ \\mathrm{N}$", "$a = 5\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$", "$a = 2{,}5\\ \\mathrm{m/s^2}$; $T = 40\\ \\mathrm{N}$", "$a = 2{,}5\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$"],
      dogru: 0,
      aciklama: "Kütleler eşit olsa da düzlemdeki bloğu aşağı çeken yalnız ağırlığın $mg\\sin 30^\\circ$ bileşenidir. Bu yüzden asılı blok iner.",
      adimlar: [
        "**Yön:** Asılı: $40\\ \\mathrm{N}$; düzlemdeki: $40 \\times 0{,}5 = 20\\ \\mathrm{N}$. Asılı blok aşağı iner.",
        "**İvme:** $$a = \\frac{40 - 20}{4 + 4} = 2{,}5\\ \\mathrm{m/s^2}$$",
        "**Gerilme (asılı):** $$40 - T = 4 \\times 2{,}5 \\quad\\Rightarrow\\quad T = 30\\ \\mathrm{N}$$",
      ],
    },
  ]),

  ...turet(U, K, "u5-dairesel", [
    {
      id: "u5-t24", tip: "mcq",
      soru: "Yarıçapı $50\\ \\mathrm{m}$ olan yatay, düz bir virajda tekerlek-yol sürtünme katsayısı $0{,}5$'tir. Bir araba bu virajı kaymadan en fazla hangi hızla dönebilir? ($g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["≈ 15,8 m/s", "25 m/s", "250 m/s", "≈ 22,4 m/s", "≈ 11,2 m/s"],
      dogru: 0,
      aciklama: "Sürtünmenin sağlayabileceği en büyük merkezcil kuvvet $\\mu mg$: $v_{\\max} = \\sqrt{\\mu g r}$.",
      adimlar: [
        "**Formül:** $$v^2 = \\mu g r = 0{,}5 \\times 10 \\times 50 = 250$$",
        "**Sonuç:** $$v = \\sqrt{250} \\approx 15{,}8\\ \\mathrm{m/s}$$ Yaklaşık $57\\ \\mathrm{km/sa}$.",
      ],
    },
    {
      id: "u5-t25", tip: "mcq",
      soru: "$0{,}2\\ \\mathrm{kg}$ kütleli bir taş $1\\ \\mathrm{m}$ uzunluğundaki bir ipin ucunda sürtünmesiz yatay düzlemde $5\\ \\mathrm{m/s}$ süratle döndürülüyor. İpteki gerilme nedir?",
      secenekler: ["5 N", "1 N", "25 N", "2 N", "0,5 N"],
      dogru: 0,
      aciklama: "Yatay düzlemde merkezcil kuvveti tek başına ip sağlar: $T = \\dfrac{mv^2}{r}$.",
      adimlar: ["**Hesap:** $$T = \\frac{0{,}2 \\times 5^2}{1} = 5\\ \\mathrm{N}$$"],
    },
    {
      id: "u5-t26", tip: "mcq", zorluk: 3,
      soru: "Yarıçapı $80\\ \\mathrm{m}$ olan ve yatayla $37^\\circ$ eğimli sürtünmesiz bir virajı bir araba kaymadan hangi hızla dönebilir? ($\\tan 37^\\circ = 0{,}75$; $g = 10\\ \\mathrm{m/s^2}$)",
      secenekler: ["≈ 24,5 m/s", "≈ 28,3 m/s", "600 m/s", "≈ 17,3 m/s", "≈ 21,2 m/s"],
      dogru: 0,
      aciklama: "Eğimli virajda merkezcil kuvveti $N\\sin\\theta$ sağlar, $N\\cos\\theta$ ağırlığı dengeler: $v = \\sqrt{gr\\tan\\theta}$.",
      adimlar: [
        "**Formül:** $$v^2 = gr\\tan\\theta = 10 \\times 80 \\times 0{,}75 = 600$$",
        "**Sonuç:** $$v = \\sqrt{600} \\approx 24{,}5\\ \\mathrm{m/s}$$ Yaklaşık $88\\ \\mathrm{km/sa}$.",
      ],
    },
    {
      id: "u5-t27", tip: "tf",
      soru: "Düzgün dairesel hareket yapan bir cisme etki eden net kuvvet çemberin merkezine yönelir.",
      dogru: true,
      aciklama: "İkinci yasa: $\\sum \\vec{F} = m\\vec{a}$. Düzgün dairesel harekette ivme merkezcildir ($a_r = v^2/r$), bu yüzden net kuvvet de merkeze yönelir. \"Merkezcil kuvvet\" ayrı bir kuvvet değil; bu rolü ip gerilmesi, sürtünme ya da normal kuvvet üstlenir.",
    },
  ]),
];
