import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `ag-u7-${ad}`;

export const UNITE_7: Ders = {
  hafta: 7,
  baslik: "Sprint Review ve Sprint Retrospective",
  ozet: "Sprint'i kapatan iki etkinliği ayırt et: Review ürünü paydaşlarla denetler, Retro takımın çalışma biçimini. Review'u sunumdan, Retro'yu dilek listesinden kurtaran teknikleri ve 12 kişilik bir squad'da herkesin sesini duyurmanın yollarını öğren.",
  bolumler: [
    {
      baslik: "Sprint Review: ürünü birlikte denetlemek",
      metin: md(`
Sprint Review'un amacı Sprint'in **sonucunu denetlemek** ve **gelecekteki uyarlamaları belirlemektir**. Scrum Takımı çalışmasının sonuçlarını **önemli paydaşlara** sunar; Product Goal'e doğru ilerleme konuşulur; ortamda nelerin değiştiği tartışılır. Sonuçta **Product Backlog** yeni fırsatları karşılamak için uyarlanabilir.

Sprint Review Sprint'in sondan bir önceki etkinliğidir; bir aylık Sprint için en fazla **4 saattir**. Ardından gelen Retrospective, Review'da öğrenilenleri de değerlendirebilir.

> **Rehber ne der:** Sprint Review bir **çalışma oturumudur** ve Scrum Takımı onu **bir sunuma indirgememelidir**. Review, değerin yayına çıkmasının önünde **bir kapı da değildir**: DoD'u karşılayan bir Increment Sprint bitmeden yayınlanabilir.
`),
      dene: [p("review-sirasi"), p("kapi-degil")],
    },
    {
      baslik: "Review mi, sunum mu?",
      metin: md(`
Squad'ın ilk Review'ları şöyleydi: Can 40 slaytlık bir mimari sunum yapıyor, Elif bitmiş hikâyelerin listesini okuyor, paydaşlar sonunda iki soru soruyordu. Kimse ürüne dokunmuyordu.

Şimdiki biçim:

1. Elif Sprint Goal'ü ve neyin bittiğini iki dakikada söyler.
2. Öğrenci temsilcisi Arda kendi telefonundan **gerçek bir sipariş** verir; Nurten Hanım mutfak ekranında siparişin düştüğünü görür.
3. Paydaşlar soruları ve fikirleri doğrudan söyler: "Siparişi iptal edebilir miyim?", "Öğle yoğunluğunda ekran kilitlenir mi?"
4. Takım ve paydaşlar Product Goal'e ne kadar yaklaşıldığını ve sırada ne olması gerektiğini konuşur.
5. Elif Product Backlog'u buna göre günceller.

> **Sahada:** Review'da yalnızca **Done** iş gösterilir. "Kod bitti, sadece test kaldı" denen bir öğe Increment'in parçası değildir; onu göstermek paydaşa yanlış bir ilerleme duygusu verir (8. ünite).
`),
      dene: [p("iyi-review")],
    },
    {
      baslik: "Sprint Retrospective: takımın kendini denetlemesi",
      metin: md(`
Sprint Retrospective'in amacı **kaliteyi ve etkinliği artırmanın yollarını planlamaktır**. Bütün Scrum Takımı katılır; Product Owner da takımın bir üyesidir. Retro Sprint'i kapatır ve bir aylık Sprint için en fazla **3 saattir**.

Takım son Sprint'i **bireyler, etkileşimler, süreçler, araçlar ve Definition of Done** açısından denetler: neyin iyi gittiği, hangi sorunlarla karşılaşıldığı, bunların nasıl çözüldüğü ya da çözülmediği konuşulur. Örneğin yayından sonra erişilebilirlik hataları çıktıysa takım DoD'a "ekran okuyucuyla denendi" maddesini ekleyebilir.

> **Rehber ne der:** Takım etkinliği artıracak en yararlı değişiklikleri belirler. En etkili olanlar **mümkün olan en kısa sürede** ele alınır; **bir sonraki Sprint'in Sprint Backlog'una** bile eklenebilir.
`),
      dene: [p("retro-dod")],
    },
    {
      baslik: "Dilek listesinden iyileştirmeye",
      metin: md(`
Squad'ın son dört Retro'sunda "test ortamı yavaş" maddesi çıktı ve hiçbir şey değişmedi. Bu Retro'nun en sık görülen hastalığıdır: çok madde, hiç sahip, hiç ölçü.

İyi bir iyileştirme maddesi:

- **tektir** ya da en fazla ikidir (on madde hiçbir madde demektir),
- **küçüktür**, bir Sprint'te denenebilir,
- **sahibi** bellidir,
- **ölçülebilir**dir ve bir sonraki Retro'da "işe yaradı mı?" sorusuna cevap verir,
- **Sprint Backlog'da görünür**dür.

"Daha iyi iletişim kuralım" bir dilektir. "24 saatten uzun inceleme bekleyen çekme isteklerini Daily'de söyleyeceğiz; bir sonraki Retro'da bekleme süresine bakacağız" bir iyileştirmedir.

Squad'ın Retro tahtasındaki maddeleri ayır:

[[G-S7-01]]
`),
      dene: [p("ayni-sorun"), p("smart")],
      lab: "retro",
    },
    {
      baslik: "Retro biçimleri ve kök neden",
      metin: md(`
Rehber Retro'nun biçimini dayatmaz. Esther Derby ve Diana Larsen'in *Agile Retrospectives* kitabındaki beş aşama sahada en yaygın iskelettir:

1. **Ortamı hazırla:** amaç ve kurallar; herkes bir kelimeyle Sprint'i anlatır.
2. **Veri topla:** zaman çizelgesi, olaylar, ölçüler (çevrim süresi, hata sayısı).
3. **İçgörü üret:** neden oldu?
4. **Karar ver:** bir ya da iki iyileştirme.
5. **Kapat:** Retro'nun kendisi için kısa bir geri bildirim.

"İçgörü üret" aşamasının iki klasik aracı:

- **5 Neden:** belirtiden başlayıp art arda "neden?" diye sorarak kök nedene inmek. "Yayın gecikti → test ortamı hazır değildi → kurulum elle yapılıyor → betik yok → kimse sahiplenmedi."
- **Balık kılçığı (Ishikawa):** olası nedenleri insanlar, süreç, araç, ortam gibi başlıklar altında toplamak.

Sık kullanılan veri toplama biçimleri: **Başla / Bırak / Sürdür**, **Mutlu / Üzgün / Kızgın**, **Yelkenli** (rüzgâr, çapa, kayalar, ada).
`),
      dene: [p("bes-neden")],
    },
    {
      baslik: "Kolaylaştırmak: herkesin sesi",
      metin: md(`
Rehber'e göre Scrum Master etkinliklerin yapılmasını, **olumlu, verimli ve time-box içinde** olmasını sağlar; kolaylaştırıcının kim olacağını dayatmaz. Birçok takımda kolaylaştırma sırayla döner.

12 kişilik bir odada serbest konuşma çoğunlukla üç kişinin sesine dönüşür. İşe yarayan teknikler:

- **Sessiz yazma:** önce herkes yapışkan notlara kendi başına yazar, sonra paylaşılır.
- **1-2-4-hepsi:** bir dakika tek başına, iki dakika ikili, dört dakika dörtlü düşünülür, sonra bütün grup.
- **Nokta oylaması:** 20 konu çıktıysa herkes üç noktayı konulara dağıtır; en çok nokta alan iki konu konuşulur.
- **Temel yönerge:** Norm Kerth'in cümlesi Retro'nun başında okunur: "Herkesin, o gün bildikleriyle, becerileriyle ve elindeki imkânlarla yapabileceğinin en iyisini yaptığına inanıyoruz."

> **Sahada:** Retro'larda kimse sorun söylemiyor ama hatalar sürüyorsa önce **psikolojik güvenliğe** bak. Retro'ya yöneticiyi çağırmak çoğunlukla sessizliği artırır; isimsiz veri toplama ve "kimse suçlanmaz" kuralı daha iyi bir başlangıçtır.
`),
      dene: [p("sessiz"), p("guvenlik")],
    },
  ],
  test: [
    p("review-amac"), p("review-kim"), p("review-cikti"), p("sunum-degil"), p("retro-amac"), p("retro-kapsam"), p("retro-kim"),
    p("sonraki-sprint"), p("bes-asama"), p("balik-kilcigi"), p("kolay-kim"), p("noktalama"),
  ],
};
