import { md, type Ders } from "../../../../src/dersler/tipler";

const p = (ad: string) => `bl-u4-${ad}`;

export const UNITE_4: Ders = {
  hafta: 4,
  baslik: "User Story Nedir?",
  ozet: "User story'nin XP'deki kökünü, Ron Jeffries'in 3C'sini, \"Bir ... olarak ... istiyorum, böylece ...\" kalıbını ve en sık yanlış kullanımlarını, job story'yi ve story'nin neden bir şartname değil konuşma vaadi olduğunu öğren; kendi story'ni kur.",
  bolumler: [
    {
      baslik: "Kökeni: XP'nin kartları",
      metin: md(`
User story Scrum'dan değil **Extreme Programming**'den (XP) gelir. Kent Beck 1990'ların sonunda XP'nin planlama oyununda (Planning Game) müşterinin ihtiyaçlarını kısa cümlelerle küçük kâğıt kartlara yazdırıyordu. Kartın küçük olması bilinçliydi: her şeyi yazmaya yer yoktu, ayrıntı **konuşmada** ortaya çıkmalıydı.

Bugün bildiğimiz kalıp sonra geldi: "**As a** [rol], **I want** [istek], **so that** [fayda]." 2001 dolaylarında Londra'daki **Connextra** şirketinin takımında doğdu (Rachel Davies ve arkadaşları). Mike Cohn'un 2004'teki *User Stories Applied* kitabı kalıbı, kullanıcı rollerini, INVEST'i ve tahmini bir arada anlatarak story'yi bugünkü yaygınlığına taşıdı.

> **Kaynak ne der:** Scrum Rehberi user story'den **hiç söz etmez**. Story, Product Backlog öğesi yazmanın en yaygın biçimidir ama Scrum'un kuralı değildir (1. ünite).
`),
      dene: [p("koken"), p("cohn-kitap"), p("kart")],
    },
    {
      baslik: "3C: Card, Conversation, Confirmation",
      metin: md(`
Ron Jeffries 2001'de bir story'nin üç parçadan oluştuğunu yazdı:

- **Card (kart):** ihtiyacın kısa yazılı hâli. Bir hatırlatıcı; bütün ayrıntıyı taşımaz.
- **Conversation (konuşma):** ihtiyacı bilen (Product Owner, paydaş), yapacak olan (Developers) ve doğrulayacak olan (test uzmanı) arasında, ayrıntının ortaya çıktığı sohbet.
- **Confirmation (doğrulama):** story'nin tamamlandığını gösteren testler. Bugün çoğunlukla **kabul kriterleri** olarak yazılır (6. ünite).

Sahada en sık atlanan C **konuşmadır**. Story bir araçta ayrıntılı yazılır ve "gönderilen iş" gibi takıma iletilir. Herkes kartı kendi kafasındaki resimle okur; Sprint sonunda "ben böyle anlamamıştım" ortaya çıkar.

> **Sahada:** Squad'da bir story ancak Elif, en az bir geliştirici ve Deniz ya da Tuba'dan biri onu birlikte konuştuktan sonra Sprint'e alınabiliyor. Konuşma uzun sürmüyor; çoğu story için 10-15 dakika yetiyor. Ama konuşmadan çıkan üç soru, Sprint'te üç günlük yanlış işi önlüyor.
`),
      dene: [p("uc-c"), p("confirmation"), p("en-onemli")],
    },
    {
      baslik: "Kalıp: kim, ne, neden",
      metin: md(`
Kalıbın Türkçesi: "**Bir** [rol] **olarak** [istek] **istiyorum, böylece** [fayda]."

> **Sahada:** Bir yurt öğrencisi olarak akşam yemeğini önceden ayırtmak istiyorum, böylece derse geç kaldığımda yemeksiz kalmam.

Üç parçanın her biri bir iş görür:

- **Kim:** konuşmayı somut bir kişiye bağlar. Yurt öğrencisinin ihtiyacı ile akademisyeninki aynı ekranda bile farklıdır.
- **Ne:** kullanıcının ne yapabilmek istediği. Nasıl yapılacağı değil.
- **Neden:** isteğin altındaki gerçek ihtiyaç. En çok atlanan ama en değerli parça: "yemeksiz kalmamak" ihtiyacını bilen takım, ayırtma yerine "akşam porsiyonu bitmeden bildirim" gibi daha basit bir çözüm önerebilir. Fayda yazılamıyorsa story'nin değeri sorgulanmalıdır.

Birkaç yazım alışkanlığı:

- **Doğal Türkçe** yaz. "As a kasiyer, I want iade tek tuş" gibi melez cümleler okunurluğu düşürür.
- **"Ve" kelimesine dikkat:** "menüyü görmek, yemeği ayırtmak ve bakiyemi yüklemek" üç ayrı story'dir; ayrı değerlenir, ayrı sıralanır, ayrı test edilir.
- Kalıp bir **yardımcıdır**, story'nin tanımı değildir. Kent Beck'in ilk story'leri kısa cümlelerdi. Önemli olan kimin hangi ihtiyacının neden karşılandığının konuşulabilmesidir.

[[G-S4-01]]
`),
      dene: [p("uc-parca"), p("fayda-onemi"), p("ve-ile")],
      lab: "story-kurucu",
    },
    {
      baslik: "Kalıbın yanlış kullanımları",
      metin: md(`
Kalıbı doldurmak kolaydır; iyi bir story yazmak değil. En sık görülen dört koku:

**"Bir geliştirici olarak ..."** Çoğunlukla kılık değiştirmiş bir task'tır: "Bir geliştirici olarak ödeme tablosuna indeks eklemek istiyorum." Altındaki ihtiyacı sor: neden? "Öğle saatinde ödeme 6 saniye sürüyor." Story bu ihtiyaçla yazılırsa ("Bir öğrenci olarak ödememin 2 saniyede bitmesini istiyorum, böylece sırayı tutmam") Product Owner değeri tartabilir, takım da indeks dışındaki çözümleri düşünebilir.

**"Bir kullanıcı olarak ..."** Herkes için yazılan story kimseyi anlatmaz. Rolü somut yaz: yurt öğrencisi, akademisyen, yemekhane görevlisi.

**"Bir Product Owner olarak ..."** Story'yi yazan kişinin rolü çoğu zaman gerçek kullanıcıyı gizler. "Raporlarda filtre istiyorum, böylece toplantıda gösterebilirim" story'sinin asıl kullanıcısı porsiyon kararı veren yemekhane müdürüyse story onun rolüyle ve onun kararıyla yazılır.

**"Bir sistem olarak ..."** Sistem bir şey istemez. Gerçekten makineler arası bir iş varsa o sistemin sahibinin ya da etkilenen kullanıcının ihtiyacı yazılır. Teknik işlerin backlog'da nasıl duracağı 8. ünitede.

[[G-S4-02]]
`),
      dene: [p("gelistirici"), p("kullanici"), p("sistem")],
      lab: "iyi-mi-kotu-mu",
    },
    {
      baslik: "Job story ve diğer biçimler",
      metin: md(`
Klasik kalıp **rolü** öne alır. Ama bazen belirleyici olan rol değil **durumdur**: aynı öğrenci sınav haftasında, akşam yurda dönerken ve misafiriyle gelirken farklı şeyler ister.

**Job story** (Intercom ekibinin Jobs to Be Done yaklaşımından) durumu öne alır:

> **Sahada:** Ders 12.50'de bittiğinde, en kısa sıradaki yemekhaneyi görmek istiyorum, böylece öğle arasında yemek yiyebilirim.

Kalıbı: "**Şu durumda** ..., ... **istiyorum, böylece** ..." Aynı rolün durumdan duruma ihtiyacı değiştiğinde job story ihtiyacı daha net anlatır.

Başka biçimler de vardır: kısa bir başlık artı kabul kriterleri; bir problem cümlesi ("Öğrenciler öğle arasında yemeğe yetişemiyor"); bir hipotez ("Sıra uzunluğunu gösterirsek öğle saatindeki yoğunluk iki yemekhaneye yayılır").

> **Kaynak ne der:** Rehber biçim şart koşmaz; öğelerin şeffaf, anlaşılır ve sıralı olmasını ister. Takım hangi biçimin kendine yaradığına karar verir; önemli olan takımın ve paydaşların ortak anlayışıdır.
`),
      dene: [p("kalip"), p("ne-zaman")],
    },
    {
      baslik: "Story bir şartname değil, konuşma vaadi",
      metin: md(`
Alistair Cockburn'e atfedilen bir söz: **bir story, bir konuşmanın vaadidir.** Kart ayrıntıyı taşımaz; ayrıntı, iş yaklaştıkça yapılacak konuşmada ortaya çıkar.

Bu, story'yi şartnameden ayıran şeydir. İki sayfalık ayrıntılı bir şartname eklenmiş ve okunmadan Sprint'e alınmış bir story, konuşmanın yerini tutmaz: okuyan herkes farklı bir resim kurar, soru sorulmaz, yanlış anlamalar iş bitmişken ortaya çıkar.

Konuşmanın kararları ise kaybolmamalıdır. Mert "ayırtma" story'si için Elif'e "Ayırtma iptal edilebiliyor mu?" diye sorduğunda cevap story'ye **kabul kriteri** olarak eklenir: "Ayırtma, yemek saatinden 30 dakika öncesine kadar iptal edilebilir." Böylece Confirmation konuşmanın sonucunu taşır ve bir sonraki okuyucu aynı soruyu sormak zorunda kalmaz.

> **Sahada:** İyi bir story kartının sonunda üç şey vardır: kısa bir kart, konuşmadan çıkan kararlar (kabul kriterleri, birkaç not ya da bir taslak çizim) ve açık kalan sorular. Açık soru kalmadıysa Sprint'e hazırdır. Kabul kriterlerinin nasıl yazılacağı 6. ünitede.
`),
      dene: [p("vaat"), p("sartname")],
    },
  ],
  test: [
    p("connextra"), p("kim-konusur"), p("turkce"), p("kalip-zorunlu"), p("po-rol"), p("rehber-bicim"), p("uzlasma"),
  ],
};
