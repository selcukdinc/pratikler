// 1. ünite: Electric motors & motor drives.
// Hedef kelimeler: electric motor, motor drive, torque, speed control, AC motor,
// DC motor, inverter, efficiency, rotor, stator.

import { k, quiz, turet, type Soru } from "./yardimci.ts";

const U = 1;

export const unite1: Soru[] = [
  ...quiz(U, [
    {
      grup: "A", no: 7, kavram: "u1-torque",
      soru: k("kelime", "A motor drive adjusts speed and _____ for the machine."),
      secenekler: ["torque", "range", "sunlight", "firmware", "grid"],
      dogru: 0,
      aciklama: "Motor sürücüsü hızı (speed) ve **torku** (torque) ayarlar. Range araç menzili, firmware cihaz yazılımı, grid elektrik şebekesidir.",
    },
    {
      grup: "A", no: 12, kavram: "u1-drive",
      soru: k("paragraf", "(1) The engineer tests a motor drive. (2) First, she measures the motor speed. (3) Then, she checks whether torque changes as expected. (4) Finally, she records the efficiency result. (5) The solar farm produces power on sunny days."),
      secenekler: ["(3)", "(2)", "(4)", "(1)", "(5)"],
      dogru: 4,
      aciklama: "Paragraf bir motor sürücüsünün test adımlarını (First, Then, Finally) anlatıyor. Güneş tarlasının güneşli günlerde güç ürettiğini söyleyen **5. cümle** konunun dışında.",
    },
    {
      grup: "A", no: 17, kavram: "u1-torque",
      soru: k("tr", "“The drive adjusts torque when the load changes.”"),
      secenekler: [
        "Sürücü yükü değiştirmek için motoru kapatır.",
        "Yük değiştiğinde sürücü torku ayarlar.",
        "Sürücü torku sabit tutmak için veriyi siler.",
        "Yük değiştiğinde sürücü ışınımı ölçer.",
        "Tork değiştiğinde sürücü yükü kaldırır.",
      ],
      dogru: 1,
      aciklama: "*adjusts torque* = torku ayarlar, *when the load changes* = yük değiştiğinde. Özne sürücü (the drive), değişen şey yük.",
    },
    {
      grup: "A", no: 22, kavram: "u1-speed",
      soru: k("en", "“Motor sürücüsü değişen yüke göre hızı ayarlar.”"),
      secenekler: [
        "The motor drive adjusts speed as the load changes.",
        "The motor drive changes the load into speed.",
        "The motor drive is adjusted by speed changes the load.",
        "The motor changes the drive as speed loads.",
        "The motor drive adjusts sunlight as the load changes.",
      ],
      dogru: 0,
      aciklama: "Özne *the motor drive*, fiil *adjusts speed* (hızı ayarlar), *as the load changes* = yük değiştikçe. Diğer cümlelerde özne-nesne yer değiştirmiş ya da edilgen yapı bozuk.",
    },
    {
      grup: "B", no: 2, kavram: "u1-speed",
      soru: k("anlam", "What does “speed control” mean?"),
      secenekler: [
        "The amount of sunlight reaching a surface",
        "Information available as events happen",
        "The duties of the person in the role",
        "A charger built into a vehicle",
        "Adjusting how fast a motor runs",
      ],
      dogru: 4,
      aciklama: "*Speed control* motorun ne kadar hızlı döndüğünü ayarlamaktır. Diğerleri sırasıyla irradiance, real-time data, responsibilities ve on-board charger tanımları.",
    },
    {
      grup: "B", no: 7, kavram: "u1-rotor-stator",
      soru: k("kelime", "The _____ is the rotating part of an electric motor."),
      secenekler: ["inverter", "rotor", "connector", "stator", "sensor"],
      dogru: 1,
      aciklama: "**Rotor** motorun dönen (rotating) parçasıdır; **stator** ise sabit (stationary) kalan parçadır.",
    },
    {
      grup: "B", no: 12, kavram: "u1-efficiency",
      soru: k("paragraf", "(1) The smart thermostat sends room data online. (2) A factory uses an AC motor. (3) Its drive adjusts the motor speed. (4) The team measures energy use at different loads. (5) They use the results to discuss efficiency."),
      secenekler: ["(1)", "(2)", "(3)", "(5)", "(4)"],
      dogru: 0,
      aciklama: "Paragraf bir fabrikadaki AC motorun hızını ve verimini anlatıyor. Akıllı termostatın veri göndermesi (**1. cümle**) IoT konusudur, paragrafa uymaz.",
    },
    {
      grup: "B", no: 17, kavram: "u1-rotor-stator",
      soru: k("tr", "“The stator stays still while the rotor turns.”"),
      secenekler: [
        "Stator ve rotor güneş ışığını ölçer.",
        "Rotor dönerken stator sabit kalır.",
        "Stator dönerken rotor sabit kalır.",
        "Rotor ve stator aynı hızda döner.",
        "Rotor dururken stator hızlanır.",
      ],
      dogru: 1,
      aciklama: "*stays still* = sabit kalır, *while the rotor turns* = rotor dönerken. Sabit kalan stator, dönen rotordur; tersini söyleyen çeviri yanlıştır.",
    },
    {
      grup: "B", no: 22, kavram: "u1-rotor-stator",
      soru: k("en", "“Stator sabit kalırken rotor döner.”"),
      secenekler: [
        "The rotor and stator turn while still.",
        "The stator turns while the rotor stays still.",
        "The rotor stays still when the stator turns.",
        "The rotor turns while the stator stays still.",
        "The stator is turned by the rotor stays still.",
      ],
      dogru: 3,
      aciklama: "Ana cümle *the rotor turns* (rotor döner), yan cümle *while the stator stays still* (stator sabit kalırken).",
    },
  ]),

  ...turet(U, "u1-motor", [
    {
      id: "ie-u1-motor-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is an “electric motor”?"),
      secenekler: [
        "A machine that changes electrical energy into motion",
        "A device that stores energy for later use",
        "A device that measures temperature or light",
        "A cable that connects a vehicle to a charger",
        "A program stored inside a device",
      ],
      dogru: 0,
      aciklama: "Elektrik motoru elektrik enerjisini harekete (mekanik enerjiye) çeviren makinedir. Diğerleri energy storage, sensor, connector ve firmware tanımları.",
    },
    {
      id: "ie-u1-motor-kullanim", tip: "mcq", zorluk: 1,
      soru: "Which of these devices does **not** need an electric motor to do its main job?",
      secenekler: ["A washing machine", "An elevator", "A ceiling fan", "A solar panel", "A water pump"],
      dogru: 3,
      aciklama: "Çamaşır makinesi, asansör, vantilatör ve su pompası hareket üretmek için motor kullanır. Güneş paneli hareket etmez; ışıktan elektrik üretir.",
    },
    {
      id: "ie-u1-motor-tr", tip: "mcq", zorluk: 1,
      soru: k("tr", "“Electric motors change electrical energy into mechanical motion.”"),
      secenekler: [
        "Elektrik motorları mekanik hareketi elektrik enerjisine çevirir.",
        "Elektrik motorları elektrik enerjisini mekanik harekete çevirir.",
        "Elektrik motorları elektrik enerjisini bataryada depolar.",
        "Mekanik hareket elektrik motorlarını durdurur.",
        "Elektrik motorları yalnızca mekanik enerjiyle çalışır.",
      ],
      dogru: 1,
      aciklama: "*change A into B* = A'yı B'ye çevirmek. Burada A elektrik enerjisi, B mekanik hareket; yönü ters çeviren şık yanlıştır.",
    },
  ]),

  ...turet(U, "u1-drive", [
    {
      id: "ie-u1-drive-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is a “motor drive”?"),
      secenekler: [
        "The rotating part that turns inside the stator of a motor",
        "An electronic unit that controls a motor's speed and torque",
        "A cable that carries extra power from a house to the grid",
        "The distance a vehicle can travel",
        "A part that measures sunlight",
      ],
      dogru: 1,
      aciklama: "Motor sürücüsü (motor drive) motora giden gücü ayarlayarak hızı ve torku kontrol eden elektronik birimdir.",
    },
    {
      id: "ie-u1-drive-neden", tip: "mcq", zorluk: 2,
      soru: "Why do electric motors need drives?",
      secenekler: [
        "To change the color of the motor",
        "To make the motor heavier and more stable",
        "To control speed and torque and save energy",
        "To stop the motor from using electricity",
        "To replace the rotor and the stator",
      ],
      dogru: 2,
      aciklama: "Sürücü motorun hızını ve torkunu yüke göre ayarlar; motor gereğinden hızlı dönmediği için enerji tasarrufu sağlar ve yumuşak kalkış yapar.",
    },
    {
      id: "ie-u1-drive-surucusuz", tip: "tf", zorluk: 1,
      soru: "If a motor runs without a drive, it may start suddenly, draw a high current and waste energy because it always runs at full speed.",
      dogru: true,
      aciklama: "Doğru. Sürücüsüz motor ani kalkış yapar (sudden start), yüksek akım çeker (high current) ve hep tam hızda döndüğü için enerji israf eder; makine de daha çabuk yıpranır.",
    },
    {
      id: "ie-u1-drive-paragraf", tip: "mcq", zorluk: 2,
      soru: k("paragraf", "(1) A conveyor belt carries boxes in a factory. (2) Its motor is controlled by a drive. (3) When more boxes arrive, the drive increases the torque. (4) The car's range depends on the battery pack. (5) This keeps the belt moving at a steady speed."),
      secenekler: ["(1)", "(2)", "(3)", "(4)", "(5)"],
      dogru: 3,
      aciklama: "Paragraf bir konveyör bandının motor sürücüsünü anlatıyor. Aracın menzili ve batarya paketinden söz eden **4. cümle** elektrikli araç konusudur, paragrafa uymaz.",
    },
    {
      id: "ie-u1-drive-ornek", tip: "mcq", zorluk: 1,
      soru: "Which machine is a good example of a machine that uses a motor drive?",
      secenekler: ["A paper notebook", "A ceramic cup", "An elevator", "A wooden chair", "A glass window"],
      dogru: 2,
      aciklama: "Asansör (elevator) yumuşak kalkış ve duruş için motor sürücüsü kullanır. Konveyör bantları, pompalar, fanlar ve elektrikli araçlar da örnektir.",
    },
  ]),

  ...turet(U, "u1-speed", [
    {
      id: "ie-u1-speed-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "The fan has three levels of speed _____, so you can choose low, medium or high."),
      secenekler: ["control", "range", "storage", "connector", "grid"],
      dogru: 0,
      aciklama: "*Speed control* hızı ayarlamaktır; vantilatördeki düşük, orta, yüksek kademeleri hız kontrolüdür.",
    },
    {
      id: "ie-u1-speed-en", tip: "mcq", zorluk: 2,
      soru: k("en", "“Hız kontrolü motorun daha az enerji kullanmasına yardımcı olur.”"),
      secenekler: [
        "Speed control helps the motor use less energy.",
        "The motor helps speed control use more energy.",
        "Speed control uses the motor to make energy.",
        "Less energy helps the motor control speed.",
        "Speed control helps the motor use more torque.",
      ],
      dogru: 0,
      aciklama: "*help someone do something* = birinin bir şey yapmasına yardımcı olmak; *use less energy* = daha az enerji kullanmak.",
    },
    {
      id: "ie-u1-speed-fill", tip: "fill", zorluk: 1,
      soru: "Complete with one word: A motor drive uses speed ____ to make the motor run slower when the load is light.",
      bosluklar: [["control"]],
      aciklama: "**Speed control**: motorun hızını ayarlamak. Yük hafifken motoru yavaşlatmak enerji tasarrufu sağlar.",
    },
  ]),

  ...turet(U, "u1-torque", [
    {
      id: "ie-u1-torque-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What does “torque” mean?"),
      secenekler: [
        "The turning force that makes something rotate",
        "The amount of sunlight reaching a surface",
        "The distance an EV can travel on one charge",
        "The time needed to charge a battery",
        "The part of a motor that stays still",
      ],
      dogru: 0,
      aciklama: "Tork (torque) bir şeyi döndüren kuvvettir. Diğerleri irradiance, range, charging time ve stator tanımları.",
    },
    {
      id: "ie-u1-torque-aciklama", tip: "mcq", zorluk: 2,
      soru: "How would you explain “torque” to a non-engineer?",
      secenekler: [
        "It is how hot a motor gets after one hour",
        "It is the twisting force you use to open a tight jar lid",
        "It is the total number of copper wires inside a motor",
        "It is the price you pay for electricity every hour",
        "It is the speed of light in a cable",
      ],
      dogru: 1,
      aciklama: "Torku mühendis olmayan birine anlatmanın kolay yolu günlük bir örnektir: sıkı bir kavanoz kapağını açmak ya da anahtarla cıvatayı çevirmek için uygulanan **döndürme kuvveti**.",
    },
    {
      id: "ie-u1-torque-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "An electric bus needs high _____ to start moving up a steep hill."),
      secenekler: ["irradiance", "firmware", "torque", "connector", "range"],
      dogru: 2,
      aciklama: "Ağır bir aracı yokuşta harekete geçirmek büyük **döndürme kuvveti**, yani tork ister.",
    },
    {
      id: "ie-u1-torque-hiz", tip: "tf", zorluk: 2,
      soru: "“Torque” and “speed” mean the same thing: both tell us how fast a motor turns.",
      dogru: false,
      aciklama: "Yanlış. Hız (speed) motorun ne kadar hızlı döndüğünü, tork (torque) ise ne kadar güçlü çevirdiğini anlatır. Sürücü ikisini ayrı ayrı kontrol eder.",
    },
  ]),

  ...turet(U, "u1-acdc", [
    {
      id: "ie-u1-acdc-fark", tip: "mcq", zorluk: 1,
      soru: "What is the difference between AC and DC motors, in simple words?",
      secenekler: [
        "AC motors run on alternating current, DC motors run on direct current",
        "AC motors run on sunlight, DC motors run on fuel",
        "AC motors have no rotor, DC motors have no stator",
        "AC motors are only used in toys, DC motors only in factories",
        "AC motors store energy, DC motors produce sunlight",
      ],
      dogru: 0,
      aciklama: "AC motor alternatif akımla (ör. şebeke elektriği), DC motor doğru akımla (ör. batarya) çalışır. İkisinde de rotor ve stator vardır.",
    },
    {
      id: "ie-u1-acdc-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "A toy car uses a small _____ motor because it runs on batteries."),
      secenekler: ["DC", "solar", "grid", "AC", "off-grid"],
      dogru: 0,
      aciklama: "Bataryalar doğru akım (DC) verir; bu yüzden pille çalışan oyuncaklarda küçük **DC motor** kullanılır.",
    },
    {
      id: "ie-u1-acdc-fabrika", tip: "tf", zorluk: 1,
      soru: "AC motors are common in factories, pumps and fans because they can run directly from the electricity grid.",
      dogru: true,
      aciklama: "Doğru. Şebeke elektriği alternatif akımdır; fabrikalardaki pompa, fan ve konveyörlerde AC motorlar yaygındır.",
    },
  ]),

  ...turet(U, "u1-inverter", [
    {
      id: "ie-u1-inverter-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is an “inverter”?"),
      secenekler: [
        "A device that changes DC power into AC power",
        "A part of a motor that turns",
        "A small computer inside a device",
        "A place where EVs are charged",
        "A link to the public electricity network",
      ],
      dogru: 0,
      aciklama: "Evirici (inverter) doğru akımı (DC) alternatif akıma (AC) çevirir. Motor sürücüleri AC motorun hızını ayarlamak için inverter kullanır.",
    },
    {
      id: "ie-u1-inverter-tr", tip: "mcq", zorluk: 2,
      soru: k("tr", "“The inverter in the drive changes the frequency to control the motor speed.”"),
      secenekler: [
        "Sürücüdeki evirici motoru durdurmak için frekansı siler.",
        "Motor hızı sürücüdeki eviricinin frekansını ölçer.",
        "Sürücüdeki evirici motor hızını kontrol etmek için frekansı değiştirir.",
        "Sürücüdeki evirici frekansı bataryada depolar.",
        "Evirici, motor hızını değiştirmek için sürücüyü kapatır.",
      ],
      dogru: 2,
      aciklama: "*changes the frequency* = frekansı değiştirir, *to control the motor speed* = motor hızını kontrol etmek için. AC motorun hızı beslemenin frekansıyla değişir.",
    },
  ]),

  ...turet(U, "u1-efficiency", [
    {
      id: "ie-u1-eff-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What does “efficiency” mean?"),
      secenekler: [
        "How fast a motor turns",
        "How much input energy becomes useful output",
        "How far an EV can travel",
        "How much sunlight reaches a panel",
        "How long a battery takes to charge",
      ],
      dogru: 1,
      aciklama: "Verim (efficiency) giren enerjinin ne kadarının işe yarar çıkışa dönüştüğüdür. Geri kalanı çoğunlukla ısı olarak kaybolur.",
    },
    {
      id: "ie-u1-eff-neden", tip: "mcq", zorluk: 2,
      soru: "Why is energy efficiency important in motors?",
      secenekler: [
        "Because motors use a lot of electricity, so small savings lower costs",
        "Because efficient motors never need any maintenance or repair",
        "Because efficient motors do not need electricity",
        "Because higher efficiency makes the motor louder and heavier",
        "Because inefficient motors cannot turn",
      ],
      dogru: 0,
      aciklama: "Motorlar sanayide elektriğin büyük kısmını tüketir. Verimdeki küçük bir artış elektrik faturasını, ısı kaybını ve karbon salımını azaltır.",
    },
    {
      id: "ie-u1-eff-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "A motor with high _____ wastes less energy as heat."),
      secenekler: ["range", "efficiency", "connector", "irradiance", "firmware"],
      dogru: 1,
      aciklama: "Verimi (efficiency) yüksek motor enerjinin daha azını ısı olarak kaybeder.",
    },
    {
      id: "ie-u1-eff-en", tip: "mcq", zorluk: 2,
      soru: k("en", "“Verimli motorlar şirketin elektrik maliyetini düşürür.”"),
      secenekler: [
        "The company reduces efficient motors with electricity.",
        "Efficient motors increase the company's electricity costs.",
        "Electricity costs reduce the company's efficient motors.",
        "Efficient motors reduce the company's electricity costs.",
        "Efficient motors are reduced by the company's costs.",
      ],
      dogru: 3,
      aciklama: "Özne *efficient motors*, fiil *reduce* (düşürür), nesne *the company's electricity costs*. *increase* ters anlamdadır.",
    },
  ]),

  ...turet(U, "u1-rotor-stator", [
    {
      id: "ie-u1-stator-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is a “stator”?"),
      secenekler: [
        "The rotating part of a motor",
        "The part of a motor that stays still",
        "A charger built into a vehicle",
        "A device that changes DC into AC",
        "A small computer on a single chip",
      ],
      dogru: 1,
      aciklama: "Stator motorun sabit kalan parçasıdır; rotor onun içinde döner.",
    },
    {
      id: "ie-u1-stator-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "The rotor spins inside the _____."),
      secenekler: ["sensor", "stator", "connector", "battery pack", "solar farm"],
      dogru: 1,
      aciklama: "Rotor, sabit duran **stator**un içinde döner.",
    },
    {
      id: "ie-u1-rotor-fill", tip: "fill", zorluk: 1,
      soru: "Complete with one word: The part of an electric motor that turns is called the ____.",
      bosluklar: [["rotor"]],
      aciklama: "Dönen parça **rotor**, duran parça **stator**dur.",
    },
    {
      id: "ie-u1-stator-paragraf", tip: "mcq", zorluk: 2,
      soru: k("paragraf", "(1) An electric motor has two main parts. (2) The stator stays still. (3) The rotor turns inside it. (4) The rotor's shaft drives the machine. (5) A wireless connection lets the device report data."),
      secenekler: ["(5)", "(4)", "(3)", "(2)", "(1)"],
      dogru: 0,
      aciklama: "Paragraf motorun iki ana parçasını (stator ve rotor) anlatıyor. Kablosuz bağlantıyla veri gönderme (**5. cümle**) IoT konusudur.",
    },
  ]),
];
