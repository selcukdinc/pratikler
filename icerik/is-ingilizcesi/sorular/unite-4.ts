// 4. ünite: Solar energy systems.
// Hedef kelimeler: solar panel, photovoltaic (PV) cell, inverter, grid connection,
// renewable energy, irradiance, efficiency, energy storage, solar farm, off-grid.

import { k, quiz, turet, type Soru } from "./yardimci.ts";

const U = 4;

export const unite4: Soru[] = [
  ...quiz(U, [
    {
      grup: "A", no: 2, kavram: "u4-grid",
      soru: k("anlam", "What does “grid connection” mean?"),
      secenekler: [
        "Extra skills or experience that an employer would like",
        "A part that carries out a physical action",
        "A link to the public electricity network",
        "Operating without a connection to the electricity grid",
        "Recovering energy while a vehicle slows down",
      ],
      dogru: 2,
      aciklama: "Şebeke bağlantısı, sistemin genel elektrik şebekesine (public electricity network) bağlı olmasıdır.",
    },
    {
      grup: "A", no: 5, kavram: "u4-offgrid",
      soru: k("anlam", "What does “off-grid” mean?"),
      secenekler: [
        "Recovering energy while a vehicle slows down",
        "A link to the public electricity network",
        "Extra skills or experience that an employer would like",
        "A part that carries out a physical action",
        "Operating without a connection to the electricity grid",
      ],
      dogru: 4,
      aciklama: "*Off-grid* = şebekeden bağımsız; elektrik şebekesine bağlı olmadan çalışan. Ters anlamlısı *grid connection*.",
    },
    {
      grup: "A", no: 8, kavram: "u4-irradiance",
      soru: k("kelime", "On cloudy days, lower _____ can reduce a panel’s output."),
      secenekler: ["precision", "torque", "range", "firmware", "irradiance"],
      dogru: 4,
      aciklama: "Bulutlu havada panele ulaşan güneş ışığı, yani **ışınım** (irradiance) azalır; panelin çıkışı da düşer.",
    },
    {
      grup: "A", no: 13, kavram: "u4-renewable",
      soru: k("paragraf", "(1) The applicant has experience with firmware. (2) Our company designs solar systems. (3) We install panels for small businesses. (4) We also offer energy storage. (5) Our goal is to provide reliable renewable power."),
      secenekler: ["(5)", "(1)", "(2)", "(4)", "(3)"],
      dogru: 1,
      aciklama: "Paragraf güneş sistemleri kuran bir şirketi tanıtıyor (We, Our). Başvuru sahibinin firmware deneyiminden söz eden **1. cümle** iş ilanı konusudur.",
    },
    {
      grup: "A", no: 18, kavram: "u4-storage",
      soru: k("tr", "“Energy storage can supply power when sunlight is unavailable.”"),
      secenekler: [
        "Güneş ışığı enerji depolamayı devre dışı bırakır.",
        "Enerji depolama ışınımı ölçmek için kullanılır.",
        "Enerji depolama yalnızca güneş ışığı varken çalışır.",
        "Güneş ışığı yokken enerji depolama güç sağlayabilir.",
        "Güneş ışığı yokken şebeke bağlantısı zorunlu olarak kesilir.",
      ],
      dogru: 3,
      aciklama: "*can supply power* = güç sağlayabilir, *when sunlight is unavailable* = güneş ışığı yokken.",
    },
    {
      grup: "A", no: 23, kavram: "u4-offgrid",
      soru: k("en", "“Şirketimiz şebekeden bağımsız güneş sistemleri sağlıyor.”"),
      secenekler: [
        "Our company provides solar systems of the grid.",
        "Off-grid solar systems provide our company.",
        "Our company provides off-grid solar systems.",
        "Our company is provided by off-grid solar systems.",
        "Our company provides on-grid motor systems.",
      ],
      dogru: 2,
      aciklama: "Özne *our company*, fiil *provides*, nesne *off-grid solar systems* (şebekeden bağımsız güneş sistemleri).",
    },
    {
      grup: "B", no: 3, kavram: "u4-irradiance",
      soru: k("anlam", "What does “irradiance” mean?"),
      secenekler: [
        "Information available as events happen",
        "The duties of the person in the role",
        "A charger built into a vehicle",
        "Adjusting how fast a motor runs",
        "The amount of sunlight reaching a surface",
      ],
      dogru: 4,
      aciklama: "Işınım (irradiance) bir yüzeye ulaşan güneş ışığının miktarıdır.",
    },
    {
      grup: "B", no: 8, kavram: "u4-inverter",
      soru: k("kelime", "A solar system needs an _____ to change DC output into AC power."),
      secenekler: ["actuator", "inverter", "microcontroller", "on-board charger", "rotor"],
      dogru: 1,
      aciklama: "Panel DC üretir; ev ve şebeke AC kullanır. DC'yi AC'ye **inverter** çevirir.",
    },
    {
      grup: "B", no: 13, kavram: "u4-inverter",
      soru: k("paragraf", "(1) A solar panel produces DC electricity. (2) A job ad lists the applicant’s responsibilities. (3) An inverter can change it to AC. (4) The system may connect to the grid. (5) A battery can store unused energy."),
      secenekler: ["(1)", "(4)", "(3)", "(5)", "(2)"],
      dogru: 4,
      aciklama: "Paragraf bir güneş sisteminin parçalarını anlatıyor. İş ilanındaki sorumluluklardan söz eden **2. cümle** konunun dışında.",
    },
    {
      grup: "B", no: 18, kavram: "u4-irradiance",
      soru: k("tr", "“The panels produce less power when irradiance is low.”"),
      secenekler: [
        "Işınım düşük olduğunda paneller daha fazla güç üretir.",
        "Işınım panelin gücünü depolar.",
        "Paneller yalnızca ışınım yokken güç üretir.",
        "Işınım düşük olduğunda paneller daha az güç üretir.",
        "Paneller düşük gücü ışınıma dönüştürür.",
      ],
      dogru: 3,
      aciklama: "*produce less power* = daha az güç üretir, *when irradiance is low* = ışınım düşük olduğunda.",
    },
    {
      grup: "B", no: 23, kavram: "u4-storage",
      soru: k("en", "“Enerji depolama gece elektrik sağlayabilir.”"),
      secenekler: [
        "Electricity can store energy at night.",
        "Energy storage supplies night with electricity.",
        "Energy storage can measure electricity at night.",
        "Energy storage must produce sunlight at night.",
        "Energy storage can supply electricity at night.",
      ],
      dogru: 4,
      aciklama: "*sağlayabilir* = *can supply*, *gece* = *at night*. Özne *energy storage*.",
    },
  ]),

  ...turet(U, "u4-panel", [
    {
      id: "ie-u4-panel-nasil", tip: "mcq", zorluk: 1,
      soru: "How does a solar panel produce electricity, in simple words?",
      secenekler: [
        "Its PV cells turn sunlight directly into electricity",
        "It burns fuel to heat water",
        "It uses a motor to turn a rotor",
        "It stores wind energy in a battery",
        "It takes electricity from the grid and sells it back",
      ],
      dogru: 0,
      aciklama: "Güneş panelindeki fotovoltaik (PV) hücreler güneş ışığını doğrudan elektriğe (DC) çevirir.",
    },
    {
      id: "ie-u4-pv-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is a “photovoltaic (PV) cell”?"),
      secenekler: [
        "A cell that converts sunlight into electricity",
        "A cell that stores fuel for a car",
        "A part of a motor that stays still",
        "A small computer inside a device",
        "A cable that links a house to the grid",
      ],
      dogru: 0,
      aciklama: "Fotovoltaik hücre güneş ışığını elektriğe çeviren hücredir; paneller bu hücrelerden oluşur.",
    },
    {
      id: "ie-u4-pv-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "A solar panel is made of many _____ cells."),
      secenekler: ["PV", "battery", "rotor", "firmware", "kWh"],
      dogru: 0,
      aciklama: "Güneş paneli birçok **PV (fotovoltaik) hücreden** oluşur.",
    },
    {
      id: "ie-u4-panel-dc", tip: "tf", zorluk: 1,
      soru: "Solar panels produce AC electricity, so they do not need an inverter to power home appliances.",
      dogru: false,
      aciklama: "Yanlış. Paneller **DC** üretir; ev aletleri ve şebeke AC kullandığı için bir inverter gerekir.",
    },
  ]),

  ...turet(U, "u4-inverter", [
    {
      id: "ie-u4-inverter-neden", tip: "mcq", zorluk: 1,
      soru: "Why do we need an inverter in a solar system?",
      secenekler: [
        "To change the panels' DC output into AC for homes and the grid",
        "To measure the amount of sunlight that reaches the panels",
        "To clean the solar panels automatically",
        "To store energy for the night",
        "To turn the panels toward the sun during the day",
      ],
      dogru: 0,
      aciklama: "Panel DC üretir; evdeki cihazlar ve şebeke AC kullanır. **Inverter** DC'yi AC'ye çevirir.",
    },
    {
      id: "ie-u4-inverter-en", tip: "mcq", zorluk: 2,
      soru: k("en", "“Evirici panellerden gelen DC gücü AC güce çevirir.”"),
      secenekler: [
        "The inverter changes AC power from the grid into sunlight.",
        "The panels change the inverter into DC power.",
        "The inverter changes DC power from the panels into AC power.",
        "DC power changes the inverter into AC panels.",
        "The inverter stores DC power from the panels.",
      ],
      dogru: 2,
      aciklama: "Özne *the inverter*, *changes A into B* = A'yı B'ye çevirir: *DC power from the panels* → *AC power*.",
    },
  ]),

  ...turet(U, "u4-grid", [
    {
      id: "ie-u4-grid-anlam", tip: "mcq", zorluk: 2,
      soru: "What does “grid connection” mean for a solar system?",
      secenekler: [
        "It is linked to the public network and can send extra power to it",
        "The system works only in a desert far from cities",
        "The panels are connected to each other with a strong metal frame",
        "The system uses no inverter and no cables",
        "The panels are placed on a grid of trees",
      ],
      dogru: 0,
      aciklama: "Şebeke bağlantılı sistem genel elektrik şebekesine bağlıdır: fazla elektriği şebekeye verir, güneş yokken şebekeden alır.",
    },
    {
      id: "ie-u4-grid-tr", tip: "mcq", zorluk: 2,
      soru: k("tr", "“With a grid connection, extra solar power can be sold to the grid.”"),
      secenekler: [
        "Şebeke bağlantısıyla fazla güneş enerjisi şebekeye satılabilir.",
        "Şebeke bağlantısı fazla güneş enerjisini depolar.",
        "Şebeke bağlantısı olmadan güneş enerjisi satılamaz ve depolanamaz.",
        "Şebeke bağlantısıyla şebekeden güneş paneli satın alınır.",
        "Fazla güneş enerjisi şebeke bağlantısını keser.",
      ],
      dogru: 0,
      aciklama: "*with a grid connection* = şebeke bağlantısıyla, *extra solar power* = fazla güneş enerjisi, *can be sold to the grid* = şebekeye satılabilir (edilgen).",
    },
    {
      id: "ie-u4-grid-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "Our house has a _____ connection, so we can buy electricity at night."),
      secenekler: ["grid", "wireless", "rotor", "fast", "firmware"],
      dogru: 0,
      aciklama: "Güneş yokken şebekeden elektrik alabilmek için **grid connection** (şebeke bağlantısı) gerekir.",
    },
  ]),

  ...turet(U, "u4-offgrid", [
    {
      id: "ie-u4-offgrid-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "The mountain cabin is _____, so it uses solar panels and batteries for all its power."),
      secenekler: ["off-grid", "on-board", "real-time", "fast", "wireless"],
      dogru: 0,
      aciklama: "Şebekeye bağlı olmayan yer **off-grid**dir; bütün elektriğini panel ve bataryadan alır.",
    },
    {
      id: "ie-u4-offgrid-tf", tip: "tf", zorluk: 2,
      soru: "An off-grid solar system usually needs energy storage, because it cannot take power from the grid at night.",
      dogru: true,
      aciklama: "Doğru. Şebekeden bağımsız sistem gece şebekeden elektrik alamaz; bu yüzden bataryayla enerji depolar.",
    },
  ]),

  ...turet(U, "u4-renewable", [
    {
      id: "ie-u4-renewable-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What does “renewable energy” mean?"),
      secenekler: [
        "Energy from sources that do not run out, like sunlight and wind",
        "Energy that comes only from burning coal, oil and gas",
        "Energy stored in a phone battery",
        "Energy lost as heat in a motor",
        "Energy that must always be bought from other countries",
      ],
      dogru: 0,
      aciklama: "Yenilenebilir enerji güneş, rüzgâr, su gibi tükenmeyen kaynaklardan gelen enerjidir.",
    },
    {
      id: "ie-u4-avantaj", tip: "mcq", zorluk: 1,
      soru: "Which of these is a main advantage of solar energy?",
      secenekler: [
        "It is clean and renewable, and it lowers electricity bills",
        "It works the same at night as during the day",
        "It never needs any space",
        "It does not need any equipment",
        "It produces more power on cloudy days",
      ],
      dogru: 0,
      aciklama: "Güneş enerjisi temiz ve yenilenebilirdir, faturayı düşürür ve bakımı azdır. Gece üretim yapmaz, bulutlu havada daha az üretir.",
    },
    {
      id: "ie-u4-gelecek-en", tip: "mcq", zorluk: 2,
      soru: k("en", "“Güneş enerjisi karbon salımını azaltmaya yardımcı olur.”"),
      secenekler: [
        "Solar energy helps reduce carbon emissions.",
        "Carbon emissions help reduce solar energy.",
        "Solar energy helps increase carbon emissions.",
        "Solar energy is reduced by carbon emissions.",
        "Solar energy helps carbon emissions to grow.",
      ],
      dogru: 0,
      aciklama: "*helps reduce* = azaltmaya yardımcı olur, *carbon emissions* = karbon salımı. Güneşin gelecek için önemli olmasının nedeni budur.",
    },
    {
      id: "ie-u4-gelecek", tip: "tf", zorluk: 1,
      soru: "Solar energy is important for the future because fossil fuels will run out and they cause climate change.",
      dogru: true,
      aciklama: "Doğru. Fosil yakıtlar tükenir ve iklim değişikliğine yol açar; güneş enerjisi temiz ve yenilenebilirdir.",
    },
  ]),

  ...turet(U, "u4-irradiance", [
    {
      id: "ie-u4-hava", tip: "mcq", zorluk: 2,
      soru: "Which weather condition reduces the output of solar panels the most?",
      secenekler: [
        "A clear, sunny summer day",
        "A cool, sunny spring morning",
        "Heavy clouds and snow covering the panels",
        "A light wind on a sunny day",
        "A bright day after rain has cleaned the panels",
      ],
      dogru: 2,
      aciklama: "Yoğun bulut ve panelin üstünü örten kar ışınımı en çok azaltır. Aşırı sıcak, toz ve gölge de çıkışı düşürür; serin ve güneşli hava panel için iyidir.",
    },
    {
      id: "ie-u4-sicak", tip: "tf", zorluk: 3,
      soru: "Very high temperatures can lower the efficiency of solar panels, even on a sunny day.",
      dogru: true,
      aciklama: "Doğru. PV hücreleri ısındıkça verimleri düşer; bu yüzden serin ve güneşli günler en iyi koşuldur.",
    },
    {
      id: "ie-u4-irr-fill", tip: "fill", zorluk: 2,
      soru: "Complete with one word: The amount of sunlight that reaches the surface of a panel is called ____.",
      bosluklar: [["irradiance"]],
      aciklama: "**Irradiance**: ışınım.",
    },
  ]),

  ...turet(U, "u4-efficiency", [
    {
      id: "ie-u4-sinir", tip: "mcq", zorluk: 2,
      soru: "Which of these is a limitation of solar energy?",
      secenekler: [
        "It produces no power at night",
        "It has no fuel costs",
        "It is a renewable source",
        "It produces no exhaust gases",
        "It can be used in off-grid places",
      ],
      dogru: 0,
      aciklama: "Güneşin sınırlılıkları: gece üretim yok, hava koşullarına bağlı, yüksek kurulum maliyeti, geniş alan ihtiyacı. Diğer şıklar avantajdır.",
    },
    {
      id: "ie-u4-eff-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "This panel has 22% _____, which means it turns 22% of the sunlight into electricity."),
      secenekler: ["efficiency", "irradiance", "range", "torque", "storage"],
      dogru: 0,
      aciklama: "Panel **verimi** (efficiency) güneş ışığının ne kadarının elektriğe dönüştüğüdür.",
    },
    {
      id: "ie-u4-maliyet-tr", tip: "mcq", zorluk: 2,
      soru: k("tr", "“The installation cost is high, but the panels pay for themselves over time.”"),
      secenekler: [
        "Kurulum maliyeti düşüktür ama paneller zamanla pahalılaşır.",
        "Kurulum maliyeti yüksektir ama paneller zamanla kendini amorti eder.",
        "Paneller kurulum maliyetini zamanla artırır.",
        "Kurulum maliyeti yüksek olduğu için paneller satılamaz.",
        "Paneller zamanla kurulum maliyetini öder ve kapanır.",
      ],
      dogru: 1,
      aciklama: "*the installation cost is high* = kurulum maliyeti yüksek, *pay for themselves over time* = zamanla kendi maliyetini çıkarır (amorti eder).",
    },
  ]),

  ...turet(U, "u4-storage", [
    {
      id: "ie-u4-storage-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What does “energy storage” mean?"),
      secenekler: [
        "Keeping energy, for example in batteries, to use later",
        "Sending all energy to the grid immediately",
        "Measuring the amount of sunlight",
        "Changing DC power into AC power",
        "Turning a motor faster",
      ],
      dogru: 0,
      aciklama: "Enerji depolama, üretilen enerjiyi sonra kullanmak üzere (örneğin bataryada) saklamaktır.",
    },
    {
      id: "ie-u4-storage-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "We added a battery for energy _____, so we can use solar power in the evening."),
      secenekler: ["storage", "range", "torque", "control", "farm"],
      dogru: 0,
      aciklama: "Gündüz üretilen enerjiyi akşam kullanmak için **energy storage** (enerji depolama) gerekir.",
    },
  ]),

  ...turet(U, "u4-farm", [
    {
      id: "ie-u4-farm-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is a “solar farm”?"),
      secenekler: [
        "A large area of solar panels that produces power for the grid",
        "A farm that grows its vegetables using only natural sunlight",
        "A small solar panel on top of a calculator",
        "A battery that stores sunlight",
        "A charger built into a vehicle",
      ],
      dogru: 0,
      aciklama: "Güneş tarlası (solar farm), çok sayıda panelden oluşan ve şebekeye elektrik veren büyük güneş santralidir.",
    },
    {
      id: "ie-u4-farm-paragraf", tip: "mcq", zorluk: 2,
      soru: k("paragraf", "(1) A new solar farm was built near the city. (2) It has thousands of solar panels. (3) It supplies power to about 10,000 homes. (4) The rotor turns inside the stator. (5) The farm also has large batteries for energy storage."),
      secenekler: ["(1)", "(2)", "(3)", "(4)", "(5)"],
      dogru: 3,
      aciklama: "Paragraf yeni bir güneş tarlasını anlatıyor. Rotor ve statordan söz eden **4. cümle** elektrik motoru konusudur.",
    },
  ]),
];
