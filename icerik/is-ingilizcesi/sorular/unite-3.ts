// 3. ünite: Embedded systems & IoT.
// Hedef kelimeler: embedded system, microcontroller, sensor, firmware, Internet of
// Things (IoT), wireless connection, real-time, data, actuator, smart device.

import { k, quiz, turet, type Soru } from "./yardimci.ts";

const U = 3;

export const unite3: Soru[] = [
  ...quiz(U, [
    {
      grup: "A", no: 4, kavram: "u3-sensor-actuator",
      soru: k("anlam", "What is an “actuator”?"),
      secenekler: [
        "Operating without a connection to the electricity grid",
        "Recovering energy while a vehicle slows down",
        "A link to the public electricity network",
        "Extra skills or experience that an employer would like",
        "A part that carries out a physical action",
      ],
      dogru: 4,
      aciklama: "Aktüatör (eyleyici) fiziksel bir eylem yapan parçadır: motor, valf, röle. Sensör ölçer, aktüatör harekete geçer.",
    },
    {
      grup: "A", no: 9, kavram: "u3-sensor-actuator",
      soru: k("kelime", "The device reads the sensor and then activates the _____."),
      secenekler: ["actuator", "charger", "solar farm", "inverter", "stator"],
      dogru: 0,
      aciklama: "Gömülü sistemde akış: sensör okunur, karar verilir, **aktüatör** çalıştırılır (activate).",
    },
    {
      grup: "A", no: 14, kavram: "u3-iot",
      soru: k("paragraf", "(1) A smart thermostat reads room temperature. (2) Its sensor sends data to a microcontroller. (3) The controller decides when to turn on heating. (4) Fast charging can shorten an EV trip. (5) The device can report data through a wireless connection."),
      secenekler: ["(5)", "(1)", "(3)", "(4)", "(2)"],
      dogru: 3,
      aciklama: "Paragraf akıllı termostatın nasıl çalıştığını anlatıyor. Hızlı şarjın EV yolculuğunu kısaltması (**4. cümle**) elektrikli araç konusudur.",
    },
    {
      grup: "A", no: 19, kavram: "u3-firmware",
      soru: k("tr", "“The firmware processes sensor data before sending a command.”"),
      secenekler: [
        "Sensör verisi yalnızca kablosuz ağda depolanır.",
        "Cihaz yazılımı komuttan sonra sensörü üretir.",
        "Cihaz yazılımı komutu almadan sensörü kapatır.",
        "Cihaz yazılımı komut göndermeden önce sensör verisini işler.",
        "Sensör verisi komut göndermeden önce cihaz yazılımını siler.",
      ],
      dogru: 3,
      aciklama: "*processes sensor data* = sensör verisini işler, *before sending a command* = komut göndermeden önce.",
    },
    {
      grup: "A", no: 24, kavram: "u3-mcu",
      soru: k("en", "“Mikrodenetleyici sensörden gelen veriyi işler.”"),
      secenekler: [
        "Data from the sensor processes the microcontroller.",
        "The sensor processes data from the microcontroller.",
        "The microcontroller stores the sensor in data.",
        "The microcontroller processes data from the sensor.",
        "The microcontroller is processed by the sensor data.",
      ],
      dogru: 3,
      aciklama: "Özne *the microcontroller*, fiil *processes* (işler), nesne *data from the sensor* (sensörden gelen veri).",
    },
    {
      grup: "B", no: 4, kavram: "u3-realtime",
      soru: k("anlam", "What does “real-time data” mean?"),
      secenekler: [
        "The duties of the person in the role",
        "A charger built into a vehicle",
        "Information available as events happen",
        "Adjusting how fast a motor runs",
        "The amount of sunlight reaching a surface",
      ],
      dogru: 2,
      aciklama: "Gerçek zamanlı veri, olay olurken gecikmeden elde edilen bilgidir.",
    },
    {
      grup: "B", no: 9, kavram: "u3-realtime",
      soru: k("kelime", "The device sends _____ to the cloud through a wireless network."),
      secenekler: ["data", "range", "irradiance", "energy storage", "torque"],
      dogru: 0,
      aciklama: "IoT cihazı ölçtüğü **veriyi** (data) kablosuz ağ üzerinden buluta gönderir.",
    },
    {
      grup: "B", no: 14, kavram: "u3-sensor-actuator",
      soru: k("paragraf", "(1) The IoT sensor reads air temperature. (2) Firmware checks the reading. (3) The microcontroller sends an instruction to an actuator. (4) The actuator switches on a fan. (5) An EV’s range depends on several factors."),
      secenekler: ["(3)", "(1)", "(4)", "(5)", "(2)"],
      dogru: 3,
      aciklama: "Paragraf sensörden aktüatöre bir IoT döngüsünü anlatıyor. EV menzilinden söz eden **5. cümle** konunun dışında.",
    },
    {
      grup: "B", no: 19, kavram: "u3-wireless",
      soru: k("tr", "“A wireless connection lets the device report data remotely.”"),
      secenekler: [
        "Kablosuz bağlantı, cihazın veriyi uzaktan iletmesini sağlar.",
        "Cihaz kablosuz bağlantı olmadan veri ölçemez.",
        "Kablosuz bağlantı cihazı uzaktan şarj eder.",
        "Cihaz uzaktan veriyi yalnızca depolar.",
        "Kablosuz bağlantı, cihazın veriyi silmesini sağlar.",
      ],
      dogru: 0,
      aciklama: "*lets the device report data* = cihazın veriyi iletmesini sağlar, *remotely* = uzaktan.",
    },
    {
      grup: "B", no: 24, kavram: "u3-firmware",
      soru: k("en", "“Aygıt yazılımı sensör verisini gerçek zamanlı işler.”"),
      secenekler: [
        "The firmware stores a sensor in real time.",
        "The firmware processes sensor data in real time.",
        "The firmware processes data after the device is off.",
        "The firmware is processing real time by data.",
        "The sensor processes firmware data in real time.",
      ],
      dogru: 1,
      aciklama: "Özne *the firmware*, fiil *processes*, nesne *sensor data*, *in real time* = gerçek zamanlı.",
    },
  ]),

  ...turet(U, "u3-embedded", [
    {
      id: "ie-u3-embedded-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is an “embedded system”?"),
      secenekler: [
        "A small computer built into a device to do one specific job",
        "A large group of solar panels that supplies power to a city",
        "A plug that connects an electric car to a fast charger",
        "The part of a motor that stays still",
        "A list of duties in a job ad",
      ],
      dogru: 0,
      aciklama: "Gömülü sistem, bir cihazın içine yerleştirilmiş ve belirli bir işi yapan küçük bilgisayar sistemidir.",
    },
    {
      id: "ie-u3-embedded-ornek", tip: "mcq", zorluk: 1,
      soru: "Which of these is a good example of an embedded system?",
      secenekler: [
        "The control board inside a washing machine",
        "A paper map of the city centre",
        "A wooden table in the kitchen",
        "A printed English textbook for students",
        "A glass bottle of water",
      ],
      dogru: 0,
      aciklama: "Çamaşır makinesinin kontrol kartı tek bir işi (yıkama programını) yürüten gömülü bir sistemdir. Mikrodalga fırın, akıllı saat ve araçlardaki kontrol birimleri de örnektir.",
    },
    {
      id: "ie-u3-embedded-tr", tip: "mcq", zorluk: 2,
      soru: k("tr", "“An embedded system is designed to perform one specific task.”"),
      secenekler: [
        "Gömülü sistem birçok görevi aynı anda yapmak için tasarlanır.",
        "Gömülü sistem belirli bir görevi yerine getirmek için tasarlanır.",
        "Belirli bir görev gömülü sistemi tasarlar.",
        "Gömülü sistem görevini bitirince kapanmak için tasarlanır.",
        "Gömülü sistem yalnızca bilgisayarlarda tasarlanabilir.",
      ],
      dogru: 1,
      aciklama: "*is designed to* = ... için tasarlanır, *perform one specific task* = belirli bir görevi yerine getirmek.",
    },
  ]),

  ...turet(U, "u3-iot", [
    {
      id: "ie-u3-iot-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What does “Internet of Things (IoT)” mean?"),
      secenekler: [
        "Everyday devices that connect to the internet and share data",
        "A website that sells electronic devices to companies",
        "A cable that connects an electric motor to its drive",
        "A large battery inside an electric car",
        "Power that comes from sunlight",
      ],
      dogru: 0,
      aciklama: "Nesnelerin interneti (IoT), birbirine ve internete bağlanıp veri paylaşan günlük cihazlardır: akıllı termostat, akıllı saat, akıllı priz.",
    },
    {
      id: "ie-u3-smart-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "A smart _____ such as a smart plug can be controlled from your phone."),
      secenekler: ["device", "range", "stator", "farm", "grid"],
      dogru: 0,
      aciklama: "**Smart device**: internete bağlanıp uzaktan kontrol edilebilen cihaz.",
    },
    {
      id: "ie-u3-fayda", tip: "mcq", zorluk: 2,
      soru: "What is a benefit of smart/IoT devices at home?",
      secenekler: [
        "They can save energy by turning off lights automatically",
        "They never need electricity",
        "They make the internet slower for everyone",
        "They cannot be controlled from a phone",
        "They remove the need for any security",
      ],
      dogru: 0,
      aciklama: "Evde akıllı cihazlar konfor, uzaktan kontrol, enerji tasarrufu ve güvenlik sağlar; ör. ışıkları otomatik kapatmak.",
    },
    {
      id: "ie-u3-iot-en", tip: "mcq", zorluk: 2,
      soru: k("en", "“Akıllı cihazları telefonumuzdan uzaktan kontrol edebiliriz.”"),
      secenekler: [
        "Our phone can be controlled by smart devices remotely.",
        "We can control smart devices remotely from our phone.",
        "Smart devices can control our phone remotely.",
        "We can remotely control our phone from smart devices.",
        "We control smart phones to make devices remote.",
      ],
      dogru: 1,
      aciklama: "Özne *we*, *can control* = kontrol edebiliriz, nesne *smart devices*, *remotely from our phone* = telefonumuzdan uzaktan.",
    },
  ]),

  ...turet(U, "u3-mcu", [
    {
      id: "ie-u3-mcu-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is a “microcontroller”?"),
      secenekler: [
        "A small computer on a single chip that controls a device",
        "A cable that carries data to the cloud",
        "A device that changes DC power into AC power",
        "A station where vehicles are charged",
        "The amount of sunlight on a panel",
      ],
      dogru: 0,
      aciklama: "Mikrodenetleyici; işlemci, bellek ve giriş-çıkışları tek yongada toplayan, bir cihazı kontrol eden küçük bilgisayardır.",
    },
    {
      id: "ie-u3-mcu-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "The _____ reads the sensor, makes a decision and controls the motor."),
      secenekler: ["microcontroller", "solar farm", "connector", "battery pack", "stator"],
      dogru: 0,
      aciklama: "Gömülü sistemin \"beyni\" **mikrodenetleyicidir**: sensörü okur, karar verir ve aktüatörü kontrol eder.",
    },
    {
      id: "ie-u3-mcu-tf", tip: "tf", zorluk: 1,
      soru: "A microcontroller is the “brain” of an embedded system: it runs the firmware and controls inputs and outputs.",
      dogru: true,
      aciklama: "Doğru. Mikrodenetleyici aygıt yazılımını çalıştırır, sensörlerden giriş alır ve aktüatörlere çıkış verir.",
    },
  ]),

  ...turet(U, "u3-sensor-actuator", [
    {
      id: "ie-u3-sensor-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is a “sensor”?"),
      secenekler: [
        "A part that measures something like temperature or light",
        "A part that carries out a physical action like opening a valve",
        "A program stored inside a device",
        "A charger that is built into an electric vehicle",
        "A link to the public electricity network",
      ],
      dogru: 0,
      aciklama: "Sensör sıcaklık, ışık, hareket gibi bir büyüklüğü ölçer. Fiziksel eylemi yapan parça ise aktüatördür.",
    },
    {
      id: "ie-u3-sensor-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "A motion _____ turns on the light when someone enters the room."),
      secenekler: ["sensor", "inverter", "range", "rotor", "grid"],
      dogru: 0,
      aciklama: "Hareketi algılayan parça **hareket sensörü**dür (motion sensor).",
    },
    {
      id: "ie-u3-actuator-tf", tip: "tf", zorluk: 1,
      soru: "In a smart irrigation system, the valve that opens to let water flow is an actuator.",
      dogru: true,
      aciklama: "Doğru. Valf fiziksel bir eylem (açılma) yaptığı için aktüatördür; toprak nemini ölçen parça ise sensördür.",
    },
    {
      id: "ie-u3-actuator-en", tip: "mcq", zorluk: 2,
      soru: k("en", "“Sensör ölçer, aktüatör harekete geçer.”"),
      secenekler: [
        "The actuator measures, and the sensor acts.",
        "The sensor measures, and the actuator acts.",
        "The sensor and the actuator only measure.",
        "The sensor acts after the actuator measures.",
        "The sensor is measured by the actuator.",
      ],
      dogru: 1,
      aciklama: "Sensör = *the sensor measures* (ölçer), aktüatör = *the actuator acts* (harekete geçer). Rolleri ters çeviren cümle yanlıştır.",
    },
  ]),

  ...turet(U, "u3-firmware", [
    {
      id: "ie-u3-firmware-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What is “firmware” in simple words?"),
      secenekler: [
        "Software stored in a device that controls its hardware",
        "The metal case that protects a device from damage",
        "A cable that connects two devices to each other",
        "A large battery inside a car",
        "The part of a motor that turns",
      ],
      dogru: 0,
      aciklama: "Aygıt yazılımı (firmware), cihazın donanımında kayıtlı olan ve onu çalıştıran yazılımdır.",
    },
    {
      id: "ie-u3-firmware-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "The company sent a _____ update to fix a bug in the smart lock."),
      secenekler: ["firmware", "torque", "irradiance", "range", "stator"],
      dogru: 0,
      aciklama: "Cihazdaki hatayı düzeltmek için gönderilen yazılım güncellemesi **firmware update**tir.",
    },
    {
      id: "ie-u3-firmware-fill", tip: "fill", zorluk: 1,
      soru: "Complete with one word: The software that is stored inside a microcontroller and controls the device is called ____.",
      bosluklar: [["firmware"]],
      aciklama: "**Firmware**: aygıt yazılımı.",
    },
  ]),

  ...turet(U, "u3-wireless", [
    {
      id: "ie-u3-iletisim", tip: "mcq", zorluk: 2,
      soru: "How do IoT devices usually communicate with each other?",
      secenekler: [
        "Through wireless connections such as Wi-Fi or Bluetooth",
        "Only through printed letters sent by post",
        "Through the motor's stator",
        "By changing DC power into AC power with an inverter",
        "Only by regenerative braking",
      ],
      dogru: 0,
      aciklama: "IoT cihazları çoğunlukla Wi-Fi, Bluetooth, Zigbee gibi **kablosuz bağlantılarla** birbirleriyle ve bulutla iletişim kurar.",
    },
    {
      id: "ie-u3-wireless-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "The smartwatch sends your heart rate to your phone over a _____ connection."),
      secenekler: ["wireless", "grid", "solar", "rotor", "fast"],
      dogru: 0,
      aciklama: "Akıllı saat telefona Bluetooth gibi bir **kablosuz bağlantıyla** veri gönderir.",
    },
    {
      id: "ie-u3-wireless-paragraf", tip: "mcq", zorluk: 2,
      soru: k("paragraf", "(1) Our smart garden uses a soil moisture sensor. (2) The data goes to the cloud over Wi-Fi. (3) The app shows the moisture level on the phone. (4) An inverter changes the panel's DC output into AC. (5) The user can water the plants from anywhere."),
      secenekler: ["(1)", "(2)", "(3)", "(4)", "(5)"],
      dogru: 3,
      aciklama: "Paragraf akıllı bahçe sulama sistemini anlatıyor. Güneş panelinin inverteri (**4. cümle**) güneş enerjisi konusudur.",
    },
  ]),

  ...turet(U, "u3-realtime", [
    {
      id: "ie-u3-realtime-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "A car's airbag system must react in _____ time, without any delay."),
      secenekler: ["real", "charging", "range", "storage", "grid"],
      dogru: 0,
      aciklama: "**Real-time**: gecikmeden, olay olurken. Hava yastığı çarpışma anında açılmalıdır.",
    },
    {
      id: "ie-u3-data-tr", tip: "mcq", zorluk: 2,
      soru: k("tr", "“The app shows real-time data from the sensors.”"),
      secenekler: [
        "Uygulama sensörlerden gelen eski verileri siler.",
        "Sensörler uygulamadan gerçek zamanlı veri alır.",
        "Uygulama sensörlerden gelen gerçek zamanlı verileri gösterir.",
        "Uygulama yalnızca gerçek zamanlı sensörleri satar.",
        "Gerçek zamanlı veriler uygulamayı kapatır.",
      ],
      dogru: 2,
      aciklama: "*shows* = gösterir, *real-time data* = gerçek zamanlı veri, *from the sensors* = sensörlerden gelen.",
    },
  ]),

  ...turet(U, "u3-risks", [
    {
      id: "ie-u3-risk", tip: "mcq", zorluk: 2,
      soru: "What is a risk of connecting everything to the internet?",
      secenekler: [
        "Hackers may access devices and personal data",
        "Devices will always use less energy",
        "Devices will never need updates",
        "The internet will stop working at home",
        "Sensors will stop measuring temperature",
      ],
      dogru: 0,
      aciklama: "Her şeyi internete bağlamanın riskleri: bilgisayar korsanları (hackers), kişisel verilerin sızması (privacy), internet kesilince cihazın çalışmaması.",
    },
    {
      id: "ie-u3-risk-en", tip: "mcq", zorluk: 2,
      soru: k("en", "“Zayıf parolalar akıllı cihazları saldırılara açık hale getirebilir.”"),
      secenekler: [
        "Smart devices can make weak passwords open to attacks.",
        "Weak passwords can make smart devices open to attacks.",
        "Attacks can make weak passwords smart.",
        "Strong passwords can make smart devices open to attacks.",
        "Weak passwords are made by smart device attacks.",
      ],
      dogru: 1,
      aciklama: "Özne *weak passwords* (zayıf parolalar), *can make ... open to attacks* = saldırılara açık hale getirebilir.",
    },
    {
      id: "ie-u3-urun", tip: "tf", zorluk: 1,
      soru: "A smart plant pot that measures soil moisture and sends a message to your phone is an example of a useful IoT product.",
      dogru: true,
      aciklama: "Doğru. Sensör (nem), mikrodenetleyici, kablosuz bağlantı ve telefona bildirim; bir IoT ürününün bütün parçaları var.",
    },
  ]),
];
