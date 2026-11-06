// 8. ünite (Dalgacık Dönüşümü sunumu): STFT'nin sınırı, dalgacık ve ana
// dalgacık, skala ve öteleme, sürekli ve ayrık dalgacık dönüşümü, Mallat
// algoritması, 2B dalgacık dönüşümü ve gürültü giderme.

import { sunum, type Soru } from "./yardimci.ts";

const U = 8;

export const unite8: Soru[] = [
  ...sunum(U, "u8-stft", [
    {
      id: "bm-u8-duragan", tip: "mcq", zorluk: 1,
      soru: "Fourier dönüşümü hangi tür sinyaller için yeterli kabul edilir?",
      secenekler: ["Bütün sinyal boyunca aynı spektral özellikleri gösteren durağan sinyaller", "Spektral özellikleri zamanla değişen durağan olmayan sinyaller", "Yalnızca keskin geçişler içeren kısa süreli sinyaller", "Yalnızca görüntü gibi iki boyutlu sinyaller"],
      dogru: 0,
      aciklama: "Fourier dönüşümü **durağan** sinyaller için yeterlidir. Spektrumu zamanla değişen sinyallerde hangi frekansın ne zaman olduğunu da gösteren bir yönteme gerek vardır.",
    },
    {
      id: "bm-u8-stft-pencere", tip: "mcq", zorluk: 2,
      soru: "STFT'nin çözünürlük sorununun kaynağı nedir?",
      secenekler: ["Pencere boyunun bütün frekanslarda sabit olması", "Pencerenin her frekansta farklı olması", "Faz bilgisini hiç hesaplamaması", "Yalnızca 2'nin kuvveti uzunlukta çalışması"],
      dogru: 0,
      aciklama: "STFT'de **pencere bütün frekanslarda sabittir**; bu yüzden zaman-frekans bilgisi sınırlı hassasiyetle elde edilir. Dalgacık dönüşümü pencereyi ölçekle değiştirir.",
    },
    {
      id: "bm-u8-alternatif", tip: "tf", zorluk: 1,
      soru: "Dalgacık dönüşümü, kısa zamanlı Fourier dönüşümünün çözünürlük sorununu aşmak için bir alternatif olarak ortaya atılmıştır.",
      dogru: true,
      aciklama: "Doğru. Ölçeklenebilir dalgacıklar işareti farklı çözünürlüklerde inceler.",
    },
  ]),

  ...sunum(U, "u8-dalgacik", [
    {
      id: "bm-u8-dalgacik-ozellik", tip: "mcq", zorluk: 1,
      soru: "Dalgacık dönüşümünde kullanılan dalgacıkları Fourier analizindeki sinüslerden ayıran özellik hangisidir?",
      secenekler: ["Sınırlı uzunlukta ve sıfır ortalamalı olmaları", "Sonsuza dek salınım yapmaları", "Yalnızca tek bir frekans içermeleri", "Her zaman pozitif değerli olmaları"],
      dogru: 0,
      aciklama: "Sinüsler sonsuza dek salınır. Dalgacıklar **sınırlı uzunluktadır ve ortalamaları sıfırdır**.",
    },
    {
      id: "bm-u8-ana", tip: "fill", zorluk: 1,
      soru: "Bütün dalgacıkların farklı skala ve kaydırma değerleriyle türetildiği temel fonksiyona ____ dalgacık denir.",
      bosluklar: [["ana", "mother"]],
      aciklama: "**Ana dalgacık** (mother wavelet) ölçeklenip kaydırılarak bütün dalgacıklar elde edilir.",
    },
    {
      id: "bm-u8-mikroskop", tip: "tf", zorluk: 2,
      soru: "Dalgacık dönüşümü zaman-ölçek yöntemine dayandığı için işaretin farklı kısımlarına odaklanabilen bir matematik mikroskobuna benzetilir.",
      dogru: true,
      aciklama: "Doğru. Ölçek değiştirildikçe işaretin kaba ya da ince ayrıntılarına bakılır.",
    },
  ]),

  ...sunum(U, "u8-skala", [
    {
      id: "bm-u8-skala-anlam", tip: "mcq", zorluk: 1,
      soru: "Dalgacık dönüşümünde skala (ölçek) neyi ifade eder?",
      secenekler: ["Sinyali sıkıştırma ya da genişletmeyi", "Sinyali zamanda geciktirmeyi", "Sinyalin fazını değiştirmeyi", "Sinyali gri seviyeye çevirmeyi"],
      dogru: 0,
      aciklama: "Skala **sıkıştırma ya da genişletme**dir. Sinyali zamanda kaydırmak öteleme parametresinin işidir.",
    },
    {
      id: "bm-u8-sin4t", tip: "mcq", zorluk: 2,
      soru: "Sunumdaki örnekte $f(t) = \\sin(t)$ için $a = 1$ ise $f(t) = \\sin(4t)$ için skala faktörü $a$ kaçtır?",
      secenekler: ["$1/4$", "$4$", "$1/2$", "$2$"],
      dogru: 0,
      aciklama: "$\\sin(2t)$ için $a = 1/2$, $\\sin(4t)$ için $a = 1/4$'tür. Küçük skala sıkışmış, yüksek frekanslı dalga demektir.",
    },
    {
      id: "bm-u8-kucuk-skala", tip: "tf", zorluk: 2,
      soru: "Skala küçüldükçe dalgacık sıkışır ve sinyalin daha yüksek frekanslı, hızlı değişen ayrıntılarıyla eşleşir.",
      dogru: true,
      aciklama: "Doğru. Büyük skala genişlemiş dalgacıktır ve yavaş, düşük frekanslı yapıları yakalar.",
    },
    {
      id: "bm-u8-oteleme", tip: "mcq", zorluk: 1,
      soru: "Dalgacık dönüşümündeki öteleme (kaydırma, $\\tau$) parametresi ne yapar?",
      secenekler: ["Dalgacığı zaman ekseninde geciktirir ya da öne alır", "Dalgacığı zamanda sıkıştırır ya da genişletir", "Dalgacığın genliğini ikiye katlar", "Dalgacığı frekans ortamına taşır"],
      dogru: 0,
      aciklama: "Öteleme dalgacığı **zamanda kaydırır**; sıkıştırma ve genişletme skalanın işidir.",
    },
  ]),

  ...sunum(U, "u8-cwt", [
    {
      id: "bm-u8-cwt-hesap", tip: "mcq", zorluk: 2,
      soru: "Sürekli dalgacık dönüşümünde C katsayıları nasıl elde edilir?",
      secenekler: ["İşaret, ölçeklenmiş ve kaydırılmış dalgacıkla çarpılıp bütün zaman boyunca toplanır", "İşaret sabit bir pencereyle çarpılıp FFT'si alınır", "İşaret alçak ve yüksek geçiren filtrelerden geçirilip 2 ile seyreltilir", "İşaretin histogramı bütün aralığa yayılır"],
      dogru: 0,
      aciklama: "CWT'de işaret, **ölçeklenmiş ve ötelenmiş** dalgacıkla çarpılıp zaman boyunca toplanır; sonuç ölçek ve ötelemenin fonksiyonu olan C katsayılarıdır.",
    },
    {
      id: "bm-u8-cwt-dezavantaj", tip: "tf", zorluk: 2,
      soru: "Sürekli dalgacık dönüşümünde katsayılar bütün ölçekler için bütün zaman ekseni boyunca hesaplandığından çok fazla veri ve işlem yükü oluşur.",
      dogru: true,
      aciklama: "Doğru. Bu dezavantajı gidermek için ayrık dalgacık dönüşümü geliştirilmiştir.",
    },
    {
      id: "bm-u8-shannon", tip: "mcq", zorluk: 3,
      soru: "Sunumda örnek olarak verilen Shannon dalgacığının ifadesi hangisidir?",
      secenekler: ["$\\psi(t) = 2\\,\\text{sinc}(2t) - \\text{sinc}(t)$", "$\\psi(t) = \\sin(t)$", "$\\psi(t) = e^{-t^2}$", "$\\psi(t) = 2\\,\\text{sinc}(t) + \\text{sinc}(2t)$"],
      dogru: 0,
      aciklama: "Shannon dalgacığı $\\psi(t) = 2\\,\\text{sinc}(2t) - \\text{sinc}(t)$ biçimindedir.",
    },
  ]),

  ...sunum(U, "u8-dwt", [
    {
      id: "bm-u8-dyadic", tip: "mcq", zorluk: 2,
      soru: "Ayrık dalgacık dönüşümünde ölçek değerleri nasıl seçilir?",
      secenekler: ["2'nin kuvvetleri şeklinde", "Her tamsayı ölçek için ayrı ayrı", "Rastgele seçilmiş ölçeklerle", "Yalnızca tek bir sabit ölçekle"],
      dogru: 0,
      aciklama: "ADD'de ölçekler **dyadic** (2'nin kuvvetleri) seçilir; böylece yalnızca belirli noktalarda katsayı hesaplanır ve işlem azalır.",
    },
    {
      id: "bm-u8-mallat", tip: "mcq", zorluk: 2,
      soru: "Ayrık dalgacık dönüşümünü filtrelerle hızlı uygulayan algoritma 1988'de kim tarafından geliştirilmiştir?",
      secenekler: ["Mallat", "Fourier", "Shannon", "Otsu"],
      dogru: 0,
      aciklama: "**Mallat** algoritması iki kanallı alt bant kodlayıcı olarak bilinen, filtrelerle çalışan pratik bir hızlı dalgacık dönüşümüdür.",
    },
    {
      id: "bm-u8-yaklasim", tip: "mcq", zorluk: 1,
      soru: "Ayrık dalgacık dönüşümünde yaklaşım (A) katsayıları hangi filtreyle elde edilir ve neyi taşır?",
      secenekler: ["Alçak geçiren filtreyle; işaretin ana hatlarını", "Yüksek geçiren filtreyle; hızlı değişimleri", "Bant söndüren filtreyle; şebeke gürültüsünü", "Medyan filtreyle; ani sıçramaları"],
      dogru: 0,
      aciklama: "**A katsayıları alçak geçiren** filtreden gelir ve gerçek işarete benzer. **D katsayıları yüksek geçiren** filtreden gelir ve detayları taşır.",
    },
    {
      id: "bm-u8-detay", tip: "fill", zorluk: 1,
      soru: "Ayrık dalgacık dönüşümünde yüksek geçiren filtreden gelen ve hızlı değişimleri gösteren katsayılara ____ katsayıları denir.",
      bosluklar: [["detay", "ayrıntı", "detail"]],
      aciklama: "**Detay (D)** katsayıları yüksek frekanslı bileşenleri taşır.",
    },
    {
      id: "bm-u8-n-yari", tip: "num", zorluk: 2,
      soru: "N = 1024 örneklik bir sinyale ayrık dalgacık dönüşümü uygulanıyor. Birinci seviyede kaç detay katsayısı çıkar?",
      bosluklar: [["512"]],
      aciklama: "Her seviyede filtreden sonra 2 ile aşağı örnekleme yapılır; birinci seviyede $N/2 = 512$ detay katsayısı çıkar.",
    },
    {
      id: "bm-u8-n-3", tip: "num", zorluk: 3,
      soru: "N = 1024 örneklik sinyalin üç seviyeli ayrık dalgacık dönüşümünde üçüncü seviyenin detay katsayısı sayısı kaçtır?",
      bosluklar: [["128"]],
      aciklama: "D1: N/2 = 512, D2: N/4 = 256, **D3: N/8 = 128**. A3 de 128 katsayıdır; toplam yine N = 1024 olur.",
    },
    {
      id: "bm-u8-sonraki", tip: "tf", zorluk: 2,
      soru: "Çok seviyeli ayrık dalgacık dönüşümünde her seviyede bir önceki seviyenin detay katsayıları yeniden ayrıştırılır.",
      dogru: false,
      aciklama: "Yanlış. Her seviyede bir önceki seviyenin **yaklaşım (A)** katsayılarına dönüşüm uygulanır.",
    },
    {
      id: "bm-u8-asagi-ornek", tip: "mcq", zorluk: 2,
      soru: "Aşağı örneklemede $y(n) = x(2n)$ alınınca ne olur?",
      secenekler: ["Eleman sayısı ve örnekleme frekansı yarıya düşer", "Eleman sayısı ve örnekleme frekansı iki katına çıkar", "Eleman sayısı aynı kalır, genlik yarıya düşer", "Eleman sayısı aynı kalır, faz tersine döner"],
      dogru: 0,
      aciklama: "Her ikinci örnek alınır: **eleman sayısı ve örnekleme frekansı yarıya** iner.",
    },
  ]),

  ...sunum(U, "u8-2d", [
    {
      id: "bm-u8-4bant", tip: "mcq", zorluk: 1,
      soru: "Bir seviyelik 2B ayrık dalgacık dönüşümü görüntüyü kaç alt banda ayırır?",
      secenekler: ["4", "2", "3", "8"],
      dogru: 0,
      aciklama: "Satır ve sütunlara filtre uygulanınca **4 alt bant** çıkar: bir yaklaşım (LL) ve üç detay (LH, HL, HH).",
    },
    {
      id: "bm-u8-ll", tip: "mcq", zorluk: 1,
      soru: "2B dalgacık dönüşümünde LL alt bandı neyi içerir?",
      secenekler: ["Görüntünün düşük frekanslı, kaba yapısını", "Yalnızca köşegen ve çapraz detayları", "Yalnızca yatay yönlü kenarları ve çizgileri", "Yalnızca yüksek frekanslı gürültüyü"],
      dogru: 0,
      aciklama: "**LL** yaklaşım görüntüsüdür; özgün görüntünün küçültülmüş hali gibidir. Bir sonraki seviye LL'ye uygulanır.",
    },
    {
      id: "bm-u8-hh", tip: "fill", zorluk: 2,
      soru: "2B dalgacık dönüşümünde köşegen (çapraz) detayları taşıyan alt bant ____ alt bandıdır.",
      bosluklar: [["hh"]],
      aciklama: "**HH** (High-High) her iki yönde de yüksek geçiren filtreden gelir ve köşegen detayları taşır.",
    },
    {
      id: "bm-u8-denoise", tip: "mcq", zorluk: 2,
      soru: "Sunumdaki örnekte Gauss gürültülü \"Boats\" görüntüsü dalgacıkla nasıl temizlenir?",
      secenekler: ["Detay katsayılarına sert eşikleme uygulanıp ters dönüşüm alınır", "Yaklaşım katsayıları sıfırlanıp ters dönüşüm alınır", "Görüntü gri seviyeye çevrilip histogramı eşitlenir", "Bütün katsayılar 255'e bölünür"],
      dogru: 0,
      aciklama: "Gürültü çoğunlukla küçük detay katsayılarındadır; bunlar **sert eşikleme** (hard thresholding) ile sıfırlanır ve ters dalgacık dönüşümüyle görüntü geri kurulur.",
    },
    {
      id: "bm-u8-ayrilabilir", tip: "tf", zorluk: 2,
      soru: "Görüntüler için ayrılabilir dalgacık dönüşümünde önce satırlara 1B filtre bankası uygulanır, sonra aynı dönüşüm sonucun sütunlarına uygulanır.",
      dogru: true,
      aciklama: "Doğru. Satır ve sütun filtrelemesi birlikte LL, LH, HL ve HH alt bantlarını verir.",
    },
  ]),
];
