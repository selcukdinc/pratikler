// 2. ünite: Electric vehicles & charging systems.
// Hedef kelimeler: electric vehicle (EV), charging station, fast charging, range,
// battery pack, regenerative braking, connector, charging time, on-board charger,
// kilowatt-hour (kWh).

import { k, quiz, turet, type Soru } from "./yardimci.ts";

const U = 2;

export const unite2: Soru[] = [
  ...quiz(U, [
    {
      grup: "A", no: 1, kavram: "u2-regen",
      soru: k("anlam", "What does “regenerative braking” mean?"),
      secenekler: [
        "A link to the public electricity network",
        "Extra skills or experience that an employer would like",
        "Recovering energy while a vehicle slows down",
        "A part that carries out a physical action",
        "Operating without a connection to the electricity grid",
      ],
      dogru: 2,
      aciklama: "Rejeneratif frenleme, araç yavaşlarken enerjinin geri kazanılmasıdır: motor jeneratör gibi çalışır ve bataryayı biraz şarj eder.",
    },
    {
      grup: "A", no: 6, kavram: "u2-connector",
      soru: k("kelime", "The charger is available, but its _____ does not fit the vehicle."),
      secenekler: ["irradiance", "connector", "rotor", "firmware", "stator"],
      dogru: 1,
      aciklama: "Araca takılan fiş **connector**dur. Şarj cihazı boş olsa da fiş tipi araca uymazsa şarj yapılamaz; şarj istasyonlarındaki yaygın sorunlardan biridir.",
    },
    {
      grup: "A", no: 11, kavram: "u2-range",
      soru: k("paragraf", "(1) The driver wants to travel farther. (2) They check the EV’s range before leaving. (3) A motor’s stator stays still during operation. (4) They locate a charging station on the route. (5) They compare charging times at two stations."),
      secenekler: ["(3)", "(2)", "(5)", "(4)", "(1)"],
      dogru: 0,
      aciklama: "Paragraf bir EV sürücüsünün yolculuk planını anlatıyor (menzil, şarj istasyonu, şarj süresi). Motorun statorundan söz eden **3. cümle** paragrafa uymaz.",
    },
    {
      grup: "A", no: 16, kavram: "u2-obc",
      soru: k("tr", "“The on-board charger limits how quickly the car accepts AC power.”"),
      secenekler: [
        "Araç içi şarj cihazı AC gücünü şebekeye satar.",
        "Araç içi şarj cihazı, aracın AC gücü ne kadar hızlı alacağını sınırlar.",
        "Araç içi şarj cihazı motor torkunu artırır.",
        "AC güç, araç içi şarj cihazını tamamen kapatır.",
        "Araç AC gücünü yalnızca güneş panelinden alır.",
      ],
      dogru: 1,
      aciklama: "*limits* = sınırlar, *how quickly the car accepts AC power* = aracın AC gücü ne kadar hızlı kabul edeceğini. AC şarjda hızı araçtaki şarj cihazı belirler.",
    },
    {
      grup: "A", no: 21, kavram: "u2-charging",
      soru: k("en", "“Hızlı şarj yolculuk sırasında bekleme süresini azaltabilir.”"),
      secenekler: [
        "Fast charging reduces the trip before waiting.",
        "Fast charging can increase waiting time during a trip.",
        "Fast charging can reduce waiting time during a trip.",
        "Fast charging can reduce range during a trip.",
        "Waiting time can charge a fast trip.",
      ],
      dogru: 2,
      aciklama: "*-abilir* = *can*, *azaltmak* = *reduce*, *bekleme süresi* = *waiting time*, *yolculuk sırasında* = *during a trip*.",
    },
    {
      grup: "B", no: 1, kavram: "u2-obc",
      soru: k("anlam", "What is an “on-board charger”?"),
      secenekler: [
        "Adjusting how fast a motor runs",
        "The amount of sunlight reaching a surface",
        "A charger built into a vehicle",
        "Information available as events happen",
        "The duties of the person in the role",
      ],
      dogru: 2,
      aciklama: "*On-board* = aracın üstünde, içinde. Araç içi şarj cihazı araca yerleşik olan şarj cihazıdır.",
    },
    {
      grup: "B", no: 6, kavram: "u2-range",
      soru: k("kelime", "The EV’s _____ is lower when the battery is nearly empty."),
      secenekler: ["range", "firmware", "irradiance", "stator", "torque"],
      dogru: 0,
      aciklama: "Batarya boşaldıkça aracın gidebileceği mesafe, yani **menzili** (range) azalır.",
    },
    {
      grup: "B", no: 11, kavram: "u2-connector",
      soru: k("paragraf", "(1) The EV’s battery is almost empty. (2) The driver checks the nearest charging station. (3) The available connector fits the car. (4) PV cells produce electricity from sunlight. (5) The driver estimates the charging time."),
      secenekler: ["(2)", "(4)", "(5)", "(3)", "(1)"],
      dogru: 1,
      aciklama: "Paragraf bataryası biten bir aracın şarj edilmesini anlatıyor. PV hücrelerinin güneşten elektrik üretmesi (**4. cümle**) güneş enerjisi konusudur.",
    },
    {
      grup: "B", no: 16, kavram: "u2-regen",
      soru: k("tr", "“Regenerative braking sends some energy back to the battery.”"),
      secenekler: [
        "Rejeneratif frenleme yalnızca bataryayı soğutur.",
        "Frenleme batarya kapasitesini ölçer.",
        "Rejeneratif frenleme enerjinin bir kısmını bataryaya geri gönderir.",
        "Rejeneratif frenleme bataryadaki tüm enerjiyi kullanır.",
        "Batarya frenleme sırasında motoru şebekeden şarj eder.",
      ],
      dogru: 2,
      aciklama: "*sends some energy back* = enerjinin bir kısmını geri gönderir. *some* \"bir kısmı\" demektir, \"tümü\" değil.",
    },
    {
      grup: "B", no: 21, kavram: "u2-obc",
      soru: k("en", "“Araç içi şarj cihazı AC gücü batarya için dönüştürür.”"),
      secenekler: [
        "The on-board charger stores AC power in the motor.",
        "The battery converts the on-board charger into AC power.",
        "The on-board charger converts AC power for the battery.",
        "The on-board charger measures the battery’s range.",
        "AC power converts the battery into an on-board charger.",
      ],
      dogru: 2,
      aciklama: "Özne *the on-board charger*, fiil *converts* (dönüştürür), nesne *AC power*, *for the battery* = batarya için. Batarya DC ile dolar; araç içi şarj cihazı şebekenin AC gücünü DC'ye çevirir.",
    },
  ]),

  ...turet(U, "u2-ev", [
    {
      id: "ie-u2-ev-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is an “electric vehicle (EV)”?"),
      secenekler: [
        "A vehicle that runs on a battery and an electric motor",
        "A vehicle that runs only on diesel fuel",
        "A machine that produces electricity from sunlight",
        "A station where batteries are sold",
        "A small computer inside a car",
      ],
      dogru: 0,
      aciklama: "Elektrikli araç benzin ya da dizel yerine bataryadaki elektrikle ve elektrik motoruyla gider.",
    },
    {
      id: "ie-u2-ev-fark", tip: "mcq", zorluk: 1,
      soru: "How is an electric vehicle different from a normal car?",
      secenekler: [
        "It has no wheels and no brakes",
        "It uses a battery and an electric motor instead of a fuel engine",
        "It can only drive on sunny days",
        "It needs more oil changes and more fuel than a normal car",
        "It always produces more exhaust gas than a diesel car",
      ],
      dogru: 1,
      aciklama: "Normal araç yakıtla çalışan içten yanmalı motor kullanır; EV ise batarya paketi ve elektrik motoru kullanır, egzoz gazı çıkarmaz ve yağ değişimi gerektirmez.",
    },
    {
      id: "ie-u2-ev-populer", tip: "mcq", zorluk: 2,
      soru: "Why are electric vehicles becoming more popular today?",
      secenekler: [
        "Because fuel prices are falling everywhere",
        "Because they have lower running costs and zero exhaust emissions",
        "Because charging stations are no longer needed",
        "Because their batteries never lose any capacity over the years",
        "Because they are always cheaper to buy than other cars",
      ],
      dogru: 1,
      aciklama: "EV'ler kilometre başına daha ucuza gider, egzoz salımı yoktur ve devletler teşvik verir; şarj altyapısı da genişledikçe yaygınlaşıyorlar.",
    },
    {
      id: "ie-u2-ev-tr", tip: "mcq", zorluk: 1,
      soru: k("tr", "“Electric vehicles produce no exhaust emissions.”"),
      secenekler: [
        "Elektrikli araçlar egzoz salımı üretmez.",
        "Elektrikli araçlar daha fazla egzoz salımı üretir.",
        "Egzoz salımı elektrikli araçları üretir.",
        "Elektrikli araçlar egzozu bataryada depolar.",
        "Elektrikli araçlar yalnızca egzozla çalışır.",
      ],
      dogru: 0,
      aciklama: "*produce no exhaust emissions* = egzoz salımı üretmez. *no* olumsuzluk verir.",
    },
  ]),

  ...turet(U, "u2-charging", [
    {
      id: "ie-u2-station-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is a “charging station”?"),
      secenekler: [
        "A place where electric vehicles are charged",
        "A part of a motor that stays still",
        "A large group of solar panels",
        "A program stored in a device",
        "The distance a car can travel",
      ],
      dogru: 0,
      aciklama: "Şarj istasyonu elektrikli araçların şarj edildiği yerdir.",
    },
    {
      id: "ie-u2-turler", tip: "mcq", zorluk: 2,
      soru: "What are the main types of EV charging?",
      secenekler: [
        "Slow AC charging at home and fast DC charging at stations",
        "Solar charging and wind charging only",
        "Fuel charging and oil charging",
        "Wireless charging only, with no cables or connectors at all",
        "Charging only by regenerative braking while driving downhill",
      ],
      dogru: 0,
      aciklama: "İki ana tür vardır: evde ya da işte saatler süren **yavaş (AC) şarj** ve istasyonlarda dakikalar süren **hızlı (DC) şarj**.",
    },
    {
      id: "ie-u2-fast-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "On a long trip, drivers prefer _____ charging because they do not want to wait for hours."),
      secenekler: ["fast", "slow", "off-grid", "wireless", "real-time"],
      dogru: 0,
      aciklama: "Uzun yolculukta saatlerce beklememek için **hızlı şarj** (fast charging) tercih edilir.",
    },
    {
      id: "ie-u2-yavas-ev", tip: "tf", zorluk: 1,
      soru: "Slow charging is usually done at home overnight, while fast charging is common at stations on highways.",
      dogru: true,
      aciklama: "Doğru. Yavaş şarj gece boyunca evde, hızlı şarj ise otoyol üstündeki istasyonlarda yaygındır.",
    },
    {
      id: "ie-u2-station-paragraf", tip: "mcq", zorluk: 2,
      soru: k("paragraf", "(1) A new charging station opened in the city centre. (2) It has four fast chargers. (3) Drivers can pay with a mobile app. (4) The microcontroller reads data from a sensor. (5) The station is open 24 hours a day."),
      secenekler: ["(1)", "(2)", "(3)", "(4)", "(5)"],
      dogru: 3,
      aciklama: "Paragraf yeni açılan bir şarj istasyonunu anlatıyor. Mikrodenetleyicinin sensörden veri okuması (**4. cümle**) gömülü sistemler konusudur.",
    },
  ]),

  ...turet(U, "u2-time", [
    {
      id: "ie-u2-time-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "With a home charger, the _____ time is about eight hours."),
      secenekler: ["charging", "torque", "irradiance", "firmware", "stator"],
      dogru: 0,
      aciklama: "**Charging time** bataryanın dolması için geçen süredir.",
    },
    {
      id: "ie-u2-kwh-anlam", tip: "mcq", zorluk: 2,
      soru: k("anlam", "What does “kilowatt-hour (kWh)” measure?"),
      secenekler: [
        "The amount of energy used or stored",
        "The turning force of a motor",
        "The amount of sunlight on a surface",
        "The speed of a wireless connection",
        "The number of cells in a solar panel",
      ],
      dogru: 0,
      aciklama: "Kilovatsaat (kWh) bir **enerji** birimidir: batarya kapasitesi ve tüketilen elektrik kWh ile ölçülür. Örneğin 60 kWh'lik batarya.",
    },
    {
      id: "ie-u2-neden-onemli", tip: "mcq", zorluk: 2,
      soru: "Why does charging speed matter for drivers?",
      secenekler: [
        "Because long charging times make trips slower and less convenient",
        "Because fast charging increases the car's weight",
        "Because slow charging damages the connector every time",
        "Because charging speed changes the color of the battery",
        "Because drivers must charge only at night",
      ],
      dogru: 0,
      aciklama: "Şarj ne kadar uzun sürerse yolculuk o kadar uzar ve sürücü beklemek zorunda kalır; bu yüzden şarj hızı sürücüler için önemlidir.",
    },
    {
      id: "ie-u2-kwh-en", tip: "mcq", zorluk: 2,
      soru: k("en", "“Batarya paketi 60 kilovatsaat enerji depolar.”"),
      secenekler: [
        "The battery pack uses 60 kilowatt-hours of range.",
        "The battery pack stores 60 kilowatt-hours of energy.",
        "Energy stores the battery pack in 60 kilowatt-hours.",
        "The battery pack is stored by 60 kilowatt-hours.",
        "The battery pack charges 60 hours of energy.",
      ],
      dogru: 1,
      aciklama: "*depolar* = *stores*, *60 kilovatsaat enerji* = *60 kilowatt-hours of energy*. Özne *the battery pack*.",
    },
  ]),

  ...turet(U, "u2-range", [
    {
      id: "ie-u2-range-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What does “range” mean for an EV?"),
      secenekler: [
        "The distance a vehicle can travel on one charge",
        "The time needed to fully charge the battery",
        "The turning force of the motor",
        "The plug that connects the car to a charger",
        "The price of one kilowatt-hour",
      ],
      dogru: 0,
      aciklama: "Menzil (range) aracın tek şarjla gidebileceği mesafedir. Diğerleri charging time, torque, connector tanımları.",
    },
    {
      id: "ie-u2-range-kaygi", tip: "tf", zorluk: 2,
      soru: "Range is important for an EV because drivers worry about running out of battery before they reach a charging station.",
      dogru: true,
      aciklama: "Doğru. Bu kaygıya \"range anxiety\" denir: sürücü bir sonraki şarj istasyonuna yetişemeyeceğinden endişe eder.",
    },
    {
      id: "ie-u2-range-soguk", tip: "mcq", zorluk: 2,
      soru: k("tr", "“Cold weather can reduce an EV’s range.”"),
      secenekler: [
        "Soğuk hava elektrikli aracın menzilini artırır.",
        "Soğuk hava elektrikli aracın menzilini azaltabilir.",
        "Elektrikli aracın menzili soğuk havayı azaltır.",
        "Soğuk havada elektrikli araç şarj edilemez.",
        "Elektrikli araçlar soğuk havada daha hızlı şarj olur.",
      ],
      dogru: 1,
      aciklama: "*can reduce* = azaltabilir, *an EV's range* = elektrikli aracın menzili. Soğuk batarya daha az enerji verir.",
    },
    {
      id: "ie-u2-range-fill", tip: "fill", zorluk: 1,
      soru: "Complete with one word: This EV has a ____ of 400 km, so it can travel 400 km on one charge.",
      bosluklar: [["range"]],
      aciklama: "Tek şarjla gidilebilecek mesafe **range** (menzil).",
    },
  ]),

  ...turet(U, "u2-battery", [
    {
      id: "ie-u2-battery-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is a “battery pack”?"),
      secenekler: [
        "A large battery made of many cells that powers the vehicle",
        "A long cable that connects the car to the public grid",
        "A program that controls a smart device",
        "A large group of solar panels in a field outside the city",
        "The rotating part of an electric motor",
      ],
      dogru: 0,
      aciklama: "Batarya paketi, birçok hücreden oluşan ve aracı besleyen büyük bataryadır.",
    },
    {
      id: "ie-u2-battery-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "The _____ is the most expensive part of an electric vehicle."),
      secenekler: ["connector", "battery pack", "solar farm", "firmware", "sensor"],
      dogru: 1,
      aciklama: "Elektrikli aracın en pahalı parçası genellikle **batarya paketi**dir; bu yüzden EV'lerin satın alma fiyatı yüksektir.",
    },
  ]),

  ...turet(U, "u2-regen", [
    {
      id: "ie-u2-regen-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "When the car slows down, regenerative _____ sends energy back to the battery."),
      secenekler: ["braking", "charging", "range", "storage", "connection"],
      dogru: 0,
      aciklama: "**Regenerative braking**: araç yavaşlarken motor jeneratör gibi çalışır ve enerjiyi bataryaya geri gönderir.",
    },
    {
      id: "ie-u2-regen-en", tip: "mcq", zorluk: 2,
      soru: k("en", "“Rejeneratif frenleme şehir içi sürüşte menzili artırır.”"),
      secenekler: [
        "Regenerative braking reduces range in city driving.",
        "City driving increases regenerative braking range.",
        "Regenerative braking increases range in city driving.",
        "Range increases regenerative braking in the city.",
        "Regenerative braking is increased by city range.",
      ],
      dogru: 2,
      aciklama: "*artırır* = *increases*, *menzili* = *range*, *şehir içi sürüşte* = *in city driving*. Şehirde sık fren yapıldığı için geri kazanılan enerji fazladır.",
    },
  ]),

  ...turet(U, "u2-connector", [
    {
      id: "ie-u2-connector-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is a “connector” at a charging station?"),
      secenekler: [
        "The plug that connects the charging cable to the car",
        "The distance a car can travel on one full charge",
        "The program that runs inside the charging station",
        "The part of a motor that turns",
        "The amount of sunlight on the station",
      ],
      dogru: 0,
      aciklama: "Konnektör, şarj kablosunu araca bağlayan fiştir. Farklı araçlar farklı konnektör tipleri kullanabilir.",
    },
    {
      id: "ie-u2-sorunlar", tip: "mcq", zorluk: 2,
      soru: "Which of these is **not** a typical problem at charging stations?",
      secenekler: [
        "Long queues of cars waiting to charge",
        "A broken charger that does not work",
        "A connector that does not fit the car",
        "A payment app that does not accept the card",
        "Too much sunlight on the car's roof",
      ],
      dogru: 4,
      aciklama: "Şarj istasyonlarındaki tipik sorunlar kuyruklar, bozuk şarj cihazı, uymayan konnektör ve ödeme sorunlarıdır. Aracın tavanına düşen güneş ışığı bir şarj sorunu değildir.",
    },
    {
      id: "ie-u2-connector-tr", tip: "mcq", zorluk: 2,
      soru: k("tr", "“Some charging stations have connectors that do not fit every car.”"),
      secenekler: [
        "Her araç bütün şarj istasyonlarına uyar.",
        "Bazı şarj istasyonlarında her araca uymayan konnektörler vardır.",
        "Bazı araçların şarj istasyonunda konnektörü yoktur.",
        "Konnektörler bazı şarj istasyonlarını kapatır.",
        "Bazı şarj istasyonları her araca konnektör satar.",
      ],
      dogru: 1,
      aciklama: "*have connectors* = konnektörleri vardır, *that do not fit every car* = her araca uymayan.",
    },
  ]),

  ...turet(U, "u2-obc", [
    {
      id: "ie-u2-obc-kelime", tip: "mcq", zorluk: 2,
      soru: k("kelime", "At a slow AC charger, the car's _____ changes AC power into DC for the battery."),
      secenekler: ["on-board charger", "stator", "solar farm", "actuator", "rotor"],
      dogru: 0,
      aciklama: "AC şarjda şebekenin alternatif akımını bataryanın istediği doğru akıma araç içindeki **on-board charger** çevirir.",
    },
    {
      id: "ie-u2-obc-fill", tip: "fill", zorluk: 2,
      soru: "Complete: A charger that is built into the vehicle is called an ____ charger.",
      bosluklar: [["on-board", "onboard", "on board"]],
      aciklama: "**On-board charger**: araç içi şarj cihazı.",
    },
  ]),

  ...turet(U, "u2-proscons", [
    {
      id: "ie-u2-dezavantaj", tip: "mcq", zorluk: 2,
      soru: "Which of these is a **disadvantage** of electric vehicles?",
      secenekler: [
        "Low running costs",
        "Quiet driving",
        "Long charging time",
        "Zero exhaust emissions",
        "Regenerative braking",
      ],
      dogru: 2,
      aciklama: "Uzun şarj süresi, sınırlı menzil, yüksek batarya fiyatı ve yetersiz istasyon EV'lerin dezavantajlarıdır. Düşük işletme maliyeti, sessizlik ve sıfır egzoz avantajdır.",
    },
    {
      id: "ie-u2-gelecek", tip: "mcq", zorluk: 2,
      soru: "How are charging systems likely to improve in the future?",
      secenekler: [
        "Faster chargers, more stations and wireless charging",
        "Fewer stations and longer charging times",
        "Charging only with diesel generators",
        "Removing connectors from all cars",
        "Charging only on sunny days",
      ],
      dogru: 0,
      aciklama: "Gelecekte daha hızlı şarj cihazları, daha çok istasyon, kablosuz şarj ve araçtan şebekeye enerji verme (vehicle-to-grid) beklenir.",
    },
    {
      id: "ie-u2-avantaj-en", tip: "mcq", zorluk: 2,
      soru: k("en", "“Elektrikli araçların bakım maliyeti daha düşüktür.”"),
      secenekler: [
        "Electric vehicles have higher maintenance costs.",
        "Maintenance costs are lower than electric vehicles.",
        "Electric vehicles have lower maintenance costs.",
        "Electric vehicles lower the cost of fuel engines.",
        "Electric vehicles need maintenance to lower costs.",
      ],
      dogru: 2,
      aciklama: "*daha düşük* = *lower*, *bakım maliyeti* = *maintenance costs*. EV'de yağ değişimi ve egzoz sistemi olmadığı için bakım ucuzdur.",
    },
  ]),
];
