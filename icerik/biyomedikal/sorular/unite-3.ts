// 3. ünite (Biyomedikal Sinyaller 1-2 sunumları): EMG ve ENMG, biyopotansiyeller,
// MÜAP, klinik EMG, elektrotlar, ENG ve sinir iletimi, kas seğirmesi, kas hastalıkları.

import { sunum, type Soru } from "./yardimci.ts";

const U = 3;

export const unite3: Soru[] = [
  ...sunum(U, "u3-tanim", [
    {
      id: "bm-u3-enmg", tip: "mcq", zorluk: 1,
      soru: "\"Elektronöromiyografi\" (ENMG) teriminin parçaları neyi anlatır?",
      secenekler: [
        "Sinirlerin ve kasların elektriksel sinyallerinin yazdırılması",
        "Beynin elektriksel sinyallerinin yazdırılması",
        "Kalbin ve damarların elektriksel sinyallerinin yazdırılması",
        "Kasların ses dalgalarıyla görüntülenmesi",
      ],
      dogru: 0,
      aciklama: "elektro (elektriksel) + nöro (sinir) + miyo (kas) + grafi (yazı): **sinir ve kasların elektriksel sinyallerinin yazdırılması**. Yerleşmiş adı EMG'dir.",
    },
    {
      id: "bm-u3-testler", tip: "mcq", zorluk: 2,
      soru: "Bir EMG incelemesinde en çok uygulanan iki test hangileridir?",
      secenekler: ["Sinir ileti çalışmaları ve iğne elektromiyografisi", "Sintigrafi ve iğne elektromiyografisi", "Elektrokortikografi ve sinir ileti çalışmaları", "Holter kaydı ve yüzey elektromiyografisi"],
      dogru: 0,
      aciklama: "En çok uygulanan testler **sinir ileti çalışmaları** ve **iğne elektromiyografisi**dir.",
    },
    {
      id: "bm-u3-kimlere", tip: "tf", zorluk: 1,
      soru: "Bel ve boyun fıtığı, kas hastalıkları, motor nöron hastalığı ve nöropati ön tanısı olan hastalara EMG yapılabilir.",
      dogru: true,
      aciklama: "Doğru. Sunumdaki listeye sinir hasarı da eklenir.",
    },
  ]),

  ...sunum(U, "u3-potansiyel", [
    {
      id: "bm-u3-iki-potansiyel", tip: "mcq", zorluk: 1,
      soru: "Uyarılabilen dokularda (sinir ve kas) sunumda sözü edilen iki potansiyel tipi hangileridir?",
      secenekler: ["Dinlenim ve aksiyon potansiyeli", "Uyarılmış ve kendiliğinden potansiyel", "Bipolar ve unipolar potansiyel", "Statik ve dinamik potansiyel"],
      dogru: 0,
      aciklama: "İki tip potansiyel vardır: **dinlenim potansiyeli** ve **aksiyon potansiyeli**.",
    },
    {
      id: "bm-u3-muap", tip: "fill", zorluk: 2,
      soru: "Kasların kasılması, kısaltması MUAP olan motor ünite ____ potansiyelleri sayesinde olur.",
      bosluklar: [["aksiyon"]],
      aciklama: "MUAP: Motor Unit **Action** Potential, yani motor ünite **aksiyon** potansiyeli.",
    },
    {
      id: "bm-u3-kasilma-miktar", tip: "mcq", zorluk: 2,
      soru: "Kasılmanın miktarı MÜAP'larla nasıl ilişkilidir?",
      secenekler: ["MÜAP'ların sayısı ve sıklığı arttıkça artar", "MÜAP'ların genliği azaldıkça artar", "MÜAP'ların sayısından bağımsızdır", "Yalnızca tek bir MÜAP'ın süresine bağlıdır"],
      dogru: 0,
      aciklama: "Kasılmanın miktarı **MÜAP'ların sayısı ve sıklığı** arttıkça artar.",
    },
    {
      id: "bm-u3-istemli", tip: "tf", zorluk: 1,
      soru: "İstemli kas hareketleri, beyinde oluşan elektriksel uyarıların sinirlerle kaslara iletilmesiyle meydana gelir.",
      dogru: true,
      aciklama: "Doğru. Kasılmanın kendisi de elektriksel bir işaret üretir ve EMG elektrotlarıyla ölçülür.",
    },
  ]),

  ...sunum(U, "u3-klinik", [
    {
      id: "bm-u3-mup-param", tip: "mcq", zorluk: 2,
      soru: "Klinik EMG'de kas ve sinir hastalıklarını ayırmada kullanılan MUP parametreleri hangileridir?",
      secenekler: ["Devamlılık süresi, genlik ve aşama", "Frekans, renk ve sıcaklık", "Kalp hızı, PR ve QT aralığı", "Yoğunluk, kontrast ve histogram"],
      dogru: 0,
      aciklama: "MUP özellikleri zaman esaslıdır: **devamlılık süresi, genlik ve aşama (faz)**.",
    },
    {
      id: "bm-u3-mup-tek", tip: "tf", zorluk: 2,
      soru: "MUP, tek bir anatomik motor ünitenin elektriksel hareketini, yani elektrodun kayıt alanındaki kas liflerinin birleşik potansiyelini yansıtır.",
      dogru: true,
      aciklama: "Doğru. MUP iğne elektrotla, hafif kasılma sırasında kaydedilir.",
    },
    {
      id: "bm-u3-hoparlor", tip: "tf", zorluk: 2,
      soru: "İğne EMG'sinde kas sinyalleri ekranda izlenmenin yanında hoparlörden de dinlenir ve bu, doktorun değerlendirmesine katkı sağlar.",
      dogru: true,
      aciklama: "Doğru. Sinyaller özel kuvvetlendiricilerle büyütülür, hem görülür hem işitilir.",
    },
  ]),

  ...sunum(U, "u3-elektrot", [
    {
      id: "bm-u3-yuzey", tip: "mcq", zorluk: 1,
      soru: "En genel anlamda EMG işaretleri nasıl alınır?",
      secenekler: ["Kasın üzerindeki deriye yüzey elektrotları yerleştirilerek", "Kafatası çevresine 21 elektrot yerleştirilerek", "Damara kontrast madde enjekte edilerek", "Göğüs duvarına altı elektrot yerleştirilerek"],
      dogru: 0,
      aciklama: "EMG işaretleri en genel olarak test edilen kasın üzerindeki deriye **yüzey elektrotları** konarak alınır.",
    },
    {
      id: "bm-u3-farksal", tip: "fill", zorluk: 2,
      soru: "Yüzey elektrotlarıyla alınan EMG işaretlerinin kuvvetlendirilmesinde ____ kuvvetlendiriciler kullanılır.",
      bosluklar: [["farksal", "fark", "diferansiyel"]],
      aciklama: "İki elektrot arasındaki farkı kuvvetlendiren **farksal** kuvvetlendiriciler kullanılır.",
    },
    {
      id: "bm-u3-konsantrik", tip: "mcq", zorluk: 2,
      soru: "İğne EMG'sinde genellikle hangi tür iğne kullanılır?",
      secenekler: ["İçine ince bir tel konmuş konsantrik iğne", "Kontrast madde veren enjeksiyon iğnesi", "Uyarı akımı veren yüksek gerilim iğnesi", "Kafatasına dokundurulan mikroelektrot"],
      dogru: 0,
      aciklama: "Genellikle enjektör iğnesinin içine çok ince bir tel konarak yapılmış **konsantrik iğneler** kullanılır.",
    },
    {
      id: "bm-u3-uyari-yok", tip: "tf", zorluk: 1,
      soru: "İğne EMG'sinde kasa iğne üzerinden elektriksel uyarı verilir.",
      dogru: false,
      aciklama: "Yanlış. İğne EMG'sinde **hiçbir elektriksel uyarı verilmez**; iğne yalnızca kastaki elektriksel etkinliği kaydeder. Uyarı, sinir iletim ölçümünde deriden verilir.",
    },
    {
      id: "bm-u3-protez", tip: "tf", zorluk: 1,
      soru: "EMG işaretleri, uzuv kaybında kullanılan protezlere hareket sağlayacak kaynak işaret olarak da kullanılır.",
      dogru: true,
      aciklama: "Doğru. EMG hem tanıda hem de protez denetiminde kullanılır.",
    },
    {
      id: "bm-u3-kas-sayisi", tip: "mcq", zorluk: 2,
      soru: "Sunuma göre bir EMG tetkikinde genellikle kaç kas incelenir?",
      secenekler: ["1–10", "20–30", "Yalnızca 1", "50'den fazla"],
      dogru: 0,
      aciklama: "Düşünülen tanıya göre değişir; genellikle **1–10** kas incelenir. Sinir iletim ölçümünde ise 5–10 sinirden ölçüm alınır.",
    },
  ]),

  ...sunum(U, "u3-eng", [
    {
      id: "bm-u3-eng-tanim", tip: "mcq", zorluk: 1,
      soru: "ENG (elektronörografi) neyin elektriksel incelemesidir?",
      secenekler: ["Sinirlerin", "Kasların", "Beynin", "Kalbin"],
      dogru: 0,
      aciklama: "ENG **sinirlerin**, EMG kasların elektriksel incelemesidir. Çoğu kez birlikte uygulandıkları için ikisine birden EMG denir.",
    },
    {
      id: "bm-u3-uyari-gerilim", tip: "mcq", zorluk: 2,
      soru: "Sinir iletim ölçümünde deriden verilen uyarı akımı için sunumda hangi bilgi verilir?",
      secenekler: ["100 V'a kadar çıkar ama milisaniyeden kısa sürer", "1 mV'luk sürekli bir doğru akımdır", "Birkaç saniye süren düşük gerilimli bir akımdır", "50 Hz şebeke geriliminin doğrudan uygulanmasıdır"],
      dogru: 0,
      aciklama: "Uyarı **100 volt kadar** yüksek gerilimlidir ama **saniyenin binde birinden kısa** sürer ve zararsızdır; genellikle ağrı olarak algılanmaz.",
    },
    {
      id: "bm-u3-kraniyal", tip: "num", zorluk: 1,
      soru: "Doğrudan beyinden çıkan kraniyal sinirler kaç çifttir?",
      bosluklar: [["12"]],
      aciklama: "Kraniyal sinirler **12 çift**tir; omurilikten çıkan spinal sinirler ise 31 çifttir.",
    },
    {
      id: "bm-u3-spinal", tip: "num", zorluk: 2,
      soru: "Omurilikten çıkan spinal sinirler kaç çifttir?",
      bosluklar: [["31"]],
      aciklama: "Periferik sinir sisteminin en büyük kısmını omurilikten çıkan **31 çift** spinal sinir oluşturur.",
    },
    {
      id: "bm-u3-vagus", tip: "tf", zorluk: 2,
      soru: "Kraniyal sinirlerden vagus siniri baş ve boyun dışına çıkarak kalp, akciğer ve mide gibi organlara kadar uzanır.",
      dogru: true,
      aciklama: "Doğru. Kraniyal sinirler genellikle baş ve boyunu yönetir, vagus siniri bunun istisnasıdır.",
    },
    {
      id: "bm-u3-iletim-hiz", tip: "mcq", zorluk: 2,
      soru: "Sinir iletim ölçümünde kayıttan yararlanılarak ne ölçülür?",
      secenekler: ["Sinirin iletim hızı ve cevabın derecesi", "Kasın kontrast madde tutulumu", "Beyin dalgalarının frekans bandı", "Kalbin R-R aralığı"],
      dogru: 0,
      aciklama: "Uyarılan sinirde yayılan etkinlik başka bir elektrotla kaydedilir; buradan **iletim hızı** ve **cevabın derecesi** bulunur.",
    },
  ]),

  ...sunum(U, "u3-segirme", [
    {
      id: "bm-u3-segirme-tanim", tip: "fill", zorluk: 1,
      soru: "Kasın bir uyarı sonucu kasılması olayına kas ____ denir.",
      bosluklar: [["seğirmesi", "seğirme"]],
      aciklama: "Uyarıyla oluşan tek kasılma ve ardından gelen gevşemeye **kas seğirmesi** denir.",
    },
    {
      id: "bm-u3-segirme-sure", tip: "mcq", zorluk: 2,
      soru: "Sunuma göre hızlı ve hassas hareket sağlayan kaslarda seğirme süresi kaç ms'ye kadar inebilir?",
      secenekler: ["7,5 ms", "100 ms", "1 ms", "500 ms"],
      dogru: 0,
      aciklama: "Hızlı kaslarda **7,5 ms**'ye kadar iner; kaba ve kuvvetli hareket yapan kaslarda 100 ms olabilir.",
    },
    {
      id: "bm-u3-gecikme", tip: "tf", zorluk: 1,
      soru: "Kasa uyarının gelmesiyle kasın kasılmaya başlaması arasında bir gecikme süresi vardır.",
      dogru: true,
      aciklama: "Doğru. Uyarıdan sonra kısa bir gecikme, ardından kasılma ve gevşeme fazları gelir.",
    },
  ]),

  ...sunum(U, "u3-hastalik", [
    {
      id: "bm-u3-noropati", tip: "mcq", zorluk: 1,
      soru: "Vücuttaki periferik sinirlerin hasarını ifade eden hastalıklara ne ad verilir?",
      secenekler: ["Nöropati", "Miyopati", "Distrofi", "Miyozit"],
      dogru: 0,
      aciklama: "**Nöropati** periferik sinir hasarıdır. **Miyopati** ise kas dokusunu etkileyen hastalıklardır.",
    },
    {
      id: "bm-u3-miyastenia", tip: "mcq", zorluk: 2,
      soru: "Miyastenia gravis hangi kas hastalığı grubunun örneğidir?",
      secenekler: ["Sinir-kas kavşağı hastalıkları", "Musküler distrofiler", "Motor nöron hastalıkları", "İltihaplı kas hastalıkları"],
      dogru: 0,
      aciklama: "Miyastenia gravis, sinirlerin kaslara sinyal iletmesini engelleyen otoimmün bir **sinir-kas kavşağı** hastalığıdır. DMD distrofiye, ALS motor nörona, polimiyozit iltihaplı kas hastalığına örnektir.",
    },
    {
      id: "bm-u3-als", tip: "tf", zorluk: 2,
      soru: "ALS ve SMA, omurilikteki sinir hücrelerinin kaybıyla ilerleyen motor nöron hastalıklarıdır.",
      dogru: true,
      aciklama: "Doğru. Motor nöron hastalıkları ilerleyici kas zayıflığına yol açar.",
    },
  ]),
];
