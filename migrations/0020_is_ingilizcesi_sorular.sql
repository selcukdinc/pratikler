-- Bu dosya scripts/sorular-sql.ts ile icerik/is-ingilizcesi/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ie-u1', 'is-ingilizcesi', 'Electric Motors & Motor Drives', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ie-u2', 'is-ingilizcesi', 'Electric Vehicles & Charging Systems', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ie-u3', 'is-ingilizcesi', 'Embedded Systems & IoT', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ie-u4', 'is-ingilizcesi', 'Solar Energy Systems', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('ie-u5', 'is-ingilizcesi', 'Job Ads & Applications', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa07', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'original', '**Choose the word that completes the sentence.**

A motor drive adjusts speed and _____ for the machine.', '{"choices":["torque","range","sunlight","firmware","grid"]}', '{"index":0}', 'Motor sürücüsü hızı (speed) ve **torku** (torque) ayarlar. Range araç menzili, firmware cihaz yazılımı, grid elektrik şebekesidir.', 1, 'Quiz (26.10.2026), Grup A, soru 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa12', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'original', '**Choose the sentence that does not fit the paragraph.**

(1) The engineer tests a motor drive. (2) First, she measures the motor speed. (3) Then, she checks whether torque changes as expected. (4) Finally, she records the efficiency result. (5) The solar farm produces power on sunny days.', '{"choices":["(3)","(2)","(4)","(1)","(5)"]}', '{"index":4}', 'Paragraf bir motor sürücüsünün test adımlarını (First, Then, Finally) anlatıyor. Güneş tarlasının güneşli günlerde güç ürettiğini söyleyen **5. cümle** konunun dışında.', 1, 'Quiz (26.10.2026), Grup A, soru 12', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa17', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'original', '**Choose the correct Turkish translation.**

“The drive adjusts torque when the load changes.”', '{"choices":["Sürücü yükü değiştirmek için motoru kapatır.","Yük değiştiğinde sürücü torku ayarlar.","Sürücü torku sabit tutmak için veriyi siler.","Yük değiştiğinde sürücü ışınımı ölçer.","Tork değiştiğinde sürücü yükü kaldırır."]}', '{"index":1}', '*adjusts torque* = torku ayarlar, *when the load changes* = yük değiştiğinde. Özne sürücü (the drive), değişen şey yük.', 1, 'Quiz (26.10.2026), Grup A, soru 17', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa22', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'original', '**Choose the correct English translation.**

“Motor sürücüsü değişen yüke göre hızı ayarlar.”', '{"choices":["The motor drive adjusts speed as the load changes.","The motor drive changes the load into speed.","The motor drive is adjusted by speed changes the load.","The motor changes the drive as speed loads.","The motor drive adjusts sunlight as the load changes."]}', '{"index":0}', 'Özne *the motor drive*, fiil *adjusts speed* (hızı ayarlar), *as the load changes* = yük değiştikçe. Diğer cümlelerde özne-nesne yer değiştirmiş ya da edilgen yapı bozuk.', 1, 'Quiz (26.10.2026), Grup A, soru 22', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb02', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'original', '**Choose the correct meaning.**

What does “speed control” mean?', '{"choices":["The amount of sunlight reaching a surface","Information available as events happen","The duties of the person in the role","A charger built into a vehicle","Adjusting how fast a motor runs"]}', '{"index":4}', '*Speed control* motorun ne kadar hızlı döndüğünü ayarlamaktır. Diğerleri sırasıyla irradiance, real-time data, responsibilities ve on-board charger tanımları.', 1, 'Quiz (26.10.2026), Grup B, soru 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb07', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'original', '**Choose the word that completes the sentence.**

The _____ is the rotating part of an electric motor.', '{"choices":["inverter","rotor","connector","stator","sensor"]}', '{"index":1}', '**Rotor** motorun dönen (rotating) parçasıdır; **stator** ise sabit (stationary) kalan parçadır.', 1, 'Quiz (26.10.2026), Grup B, soru 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb12', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'original', '**Choose the sentence that does not fit the paragraph.**

(1) The smart thermostat sends room data online. (2) A factory uses an AC motor. (3) Its drive adjusts the motor speed. (4) The team measures energy use at different loads. (5) They use the results to discuss efficiency.', '{"choices":["(1)","(2)","(3)","(5)","(4)"]}', '{"index":0}', 'Paragraf bir fabrikadaki AC motorun hızını ve verimini anlatıyor. Akıllı termostatın veri göndermesi (**1. cümle**) IoT konusudur, paragrafa uymaz.', 1, 'Quiz (26.10.2026), Grup B, soru 12', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb17', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'original', '**Choose the correct Turkish translation.**

“The stator stays still while the rotor turns.”', '{"choices":["Stator ve rotor güneş ışığını ölçer.","Rotor dönerken stator sabit kalır.","Stator dönerken rotor sabit kalır.","Rotor ve stator aynı hızda döner.","Rotor dururken stator hızlanır."]}', '{"index":1}', '*stays still* = sabit kalır, *while the rotor turns* = rotor dönerken. Sabit kalan stator, dönen rotordur; tersini söyleyen çeviri yanlıştır.', 1, 'Quiz (26.10.2026), Grup B, soru 17', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb22', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'original', '**Choose the correct English translation.**

“Stator sabit kalırken rotor döner.”', '{"choices":["The rotor and stator turn while still.","The stator turns while the rotor stays still.","The rotor stays still when the stator turns.","The rotor turns while the stator stays still.","The stator is turned by the rotor stays still."]}', '{"index":3}', 'Ana cümle *the rotor turns* (rotor döner), yan cümle *while the stator stays still* (stator sabit kalırken).', 1, 'Quiz (26.10.2026), Grup B, soru 22', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-motor-anlam', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the correct meaning.**

What is an “electric motor”?', '{"choices":["A machine that changes electrical energy into motion","A device that stores energy for later use","A device that measures temperature or light","A cable that connects a vehicle to a charger","A program stored inside a device"]}', '{"index":0}', 'Elektrik motoru elektrik enerjisini harekete (mekanik enerjiye) çeviren makinedir. Diğerleri energy storage, sensor, connector ve firmware tanımları.', 1, '1. ünite, Electric motor ve kullanım alanları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-motor-kullanim', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', 'Which of these devices does **not** need an electric motor to do its main job?', '{"choices":["A washing machine","An elevator","A ceiling fan","A solar panel","A water pump"]}', '{"index":3}', 'Çamaşır makinesi, asansör, vantilatör ve su pompası hareket üretmek için motor kullanır. Güneş paneli hareket etmez; ışıktan elektrik üretir.', 1, '1. ünite, Electric motor ve kullanım alanları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-motor-tr', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the correct Turkish translation.**

“Electric motors change electrical energy into mechanical motion.”', '{"choices":["Elektrik motorları mekanik hareketi elektrik enerjisine çevirir.","Elektrik motorları elektrik enerjisini mekanik harekete çevirir.","Elektrik motorları elektrik enerjisini bataryada depolar.","Mekanik hareket elektrik motorlarını durdurur.","Elektrik motorları yalnızca mekanik enerjiyle çalışır."]}', '{"index":1}', '*change A into B* = A''yı B''ye çevirmek. Burada A elektrik enerjisi, B mekanik hareket; yönü ters çeviren şık yanlıştır.', 1, '1. ünite, Electric motor ve kullanım alanları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-drive-anlam', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the correct meaning.**

What is a “motor drive”?', '{"choices":["The rotating part that turns inside the stator of a motor","An electronic unit that controls a motor''s speed and torque","A cable that carries extra power from a house to the grid","The distance a vehicle can travel","A part that measures sunlight"]}', '{"index":1}', 'Motor sürücüsü (motor drive) motora giden gücü ayarlayarak hızı ve torku kontrol eden elektronik birimdir.', 1, '1. ünite, Motor drive: neden gerekir, ne kontrol eder', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-drive-neden', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', 'Why do electric motors need drives?', '{"choices":["To change the color of the motor","To make the motor heavier and more stable","To control speed and torque and save energy","To stop the motor from using electricity","To replace the rotor and the stator"]}', '{"index":2}', 'Sürücü motorun hızını ve torkunu yüke göre ayarlar; motor gereğinden hızlı dönmediği için enerji tasarrufu sağlar ve yumuşak kalkış yapar.', 2, '1. ünite, Motor drive: neden gerekir, ne kontrol eder', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-drive-surucusuz', 'is-ingilizcesi', 'ie-u1', 1, 'tf', 'derived', 'If a motor runs without a drive, it may start suddenly, draw a high current and waste energy because it always runs at full speed.', '{}', '{"value":true}', 'Doğru. Sürücüsüz motor ani kalkış yapar (sudden start), yüksek akım çeker (high current) ve hep tam hızda döndüğü için enerji israf eder; makine de daha çabuk yıpranır.', 1, '1. ünite, Motor drive: neden gerekir, ne kontrol eder', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-drive-paragraf', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the sentence that does not fit the paragraph.**

(1) A conveyor belt carries boxes in a factory. (2) Its motor is controlled by a drive. (3) When more boxes arrive, the drive increases the torque. (4) The car''s range depends on the battery pack. (5) This keeps the belt moving at a steady speed.', '{"choices":["(1)","(2)","(3)","(4)","(5)"]}', '{"index":3}', 'Paragraf bir konveyör bandının motor sürücüsünü anlatıyor. Aracın menzili ve batarya paketinden söz eden **4. cümle** elektrikli araç konusudur, paragrafa uymaz.', 2, '1. ünite, Motor drive: neden gerekir, ne kontrol eder', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-drive-ornek', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', 'Which machine is a good example of a machine that uses a motor drive?', '{"choices":["A paper notebook","A ceramic cup","An elevator","A wooden chair","A glass window"]}', '{"index":2}', 'Asansör (elevator) yumuşak kalkış ve duruş için motor sürücüsü kullanır. Konveyör bantları, pompalar, fanlar ve elektrikli araçlar da örnektir.', 1, '1. ünite, Motor drive: neden gerekir, ne kontrol eder', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-speed-kelime', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the word that completes the sentence.**

The fan has three levels of speed _____, so you can choose low, medium or high.', '{"choices":["control","range","storage","connector","grid"]}', '{"index":0}', '*Speed control* hızı ayarlamaktır; vantilatördeki düşük, orta, yüksek kademeleri hız kontrolüdür.', 1, '1. ünite, Speed control', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-speed-en', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the correct English translation.**

“Hız kontrolü motorun daha az enerji kullanmasına yardımcı olur.”', '{"choices":["Speed control helps the motor use less energy.","The motor helps speed control use more energy.","Speed control uses the motor to make energy.","Less energy helps the motor control speed.","Speed control helps the motor use more torque."]}', '{"index":0}', '*help someone do something* = birinin bir şey yapmasına yardımcı olmak; *use less energy* = daha az enerji kullanmak.', 2, '1. ünite, Speed control', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-speed-fill', 'is-ingilizcesi', 'ie-u1', 1, 'fill', 'derived', 'Complete with one word: A motor drive uses speed ____ to make the motor run slower when the load is light.', '{"blanks":1}', '{"blanks":[["control"]]}', '**Speed control**: motorun hızını ayarlamak. Yük hafifken motoru yavaşlatmak enerji tasarrufu sağlar.', 1, '1. ünite, Speed control', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-torque-anlam', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the correct meaning.**

What does “torque” mean?', '{"choices":["The turning force that makes something rotate","The amount of sunlight reaching a surface","The distance an EV can travel on one charge","The time needed to charge a battery","The part of a motor that stays still"]}', '{"index":0}', 'Tork (torque) bir şeyi döndüren kuvvettir. Diğerleri irradiance, range, charging time ve stator tanımları.', 1, '1. ünite, Torque', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-torque-aciklama', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', 'How would you explain “torque” to a non-engineer?', '{"choices":["It is how hot a motor gets after one hour","It is the twisting force you use to open a tight jar lid","It is the total number of copper wires inside a motor","It is the price you pay for electricity every hour","It is the speed of light in a cable"]}', '{"index":1}', 'Torku mühendis olmayan birine anlatmanın kolay yolu günlük bir örnektir: sıkı bir kavanoz kapağını açmak ya da anahtarla cıvatayı çevirmek için uygulanan **döndürme kuvveti**.', 2, '1. ünite, Torque', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-torque-kelime', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the word that completes the sentence.**

An electric bus needs high _____ to start moving up a steep hill.', '{"choices":["irradiance","firmware","torque","connector","range"]}', '{"index":2}', 'Ağır bir aracı yokuşta harekete geçirmek büyük **döndürme kuvveti**, yani tork ister.', 1, '1. ünite, Torque', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-torque-hiz', 'is-ingilizcesi', 'ie-u1', 1, 'tf', 'derived', '“Torque” and “speed” mean the same thing: both tell us how fast a motor turns.', '{}', '{"value":false}', 'Yanlış. Hız (speed) motorun ne kadar hızlı döndüğünü, tork (torque) ise ne kadar güçlü çevirdiğini anlatır. Sürücü ikisini ayrı ayrı kontrol eder.', 2, '1. ünite, Torque', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-acdc-fark', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', 'What is the difference between AC and DC motors, in simple words?', '{"choices":["AC motors run on alternating current, DC motors run on direct current","AC motors run on sunlight, DC motors run on fuel","AC motors have no rotor, DC motors have no stator","AC motors are only used in toys, DC motors only in factories","AC motors store energy, DC motors produce sunlight"]}', '{"index":0}', 'AC motor alternatif akımla (ör. şebeke elektriği), DC motor doğru akımla (ör. batarya) çalışır. İkisinde de rotor ve stator vardır.', 1, '1. ünite, AC motor ve DC motor', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-acdc-kelime', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the word that completes the sentence.**

A toy car uses a small _____ motor because it runs on batteries.', '{"choices":["DC","solar","grid","AC","off-grid"]}', '{"index":0}', 'Bataryalar doğru akım (DC) verir; bu yüzden pille çalışan oyuncaklarda küçük **DC motor** kullanılır.', 1, '1. ünite, AC motor ve DC motor', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-acdc-fabrika', 'is-ingilizcesi', 'ie-u1', 1, 'tf', 'derived', 'AC motors are common in factories, pumps and fans because they can run directly from the electricity grid.', '{}', '{"value":true}', 'Doğru. Şebeke elektriği alternatif akımdır; fabrikalardaki pompa, fan ve konveyörlerde AC motorlar yaygındır.', 1, '1. ünite, AC motor ve DC motor', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-inverter-anlam', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the correct meaning.**

What is an “inverter”?', '{"choices":["A device that changes DC power into AC power","A part of a motor that turns","A small computer inside a device","A place where EVs are charged","A link to the public electricity network"]}', '{"index":0}', 'Evirici (inverter) doğru akımı (DC) alternatif akıma (AC) çevirir. Motor sürücüleri AC motorun hızını ayarlamak için inverter kullanır.', 1, '1. ünite, Motor sürücüsünde inverter', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-inverter-tr', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the correct Turkish translation.**

“The inverter in the drive changes the frequency to control the motor speed.”', '{"choices":["Sürücüdeki evirici motoru durdurmak için frekansı siler.","Motor hızı sürücüdeki eviricinin frekansını ölçer.","Sürücüdeki evirici motor hızını kontrol etmek için frekansı değiştirir.","Sürücüdeki evirici frekansı bataryada depolar.","Evirici, motor hızını değiştirmek için sürücüyü kapatır."]}', '{"index":2}', '*changes the frequency* = frekansı değiştirir, *to control the motor speed* = motor hızını kontrol etmek için. AC motorun hızı beslemenin frekansıyla değişir.', 2, '1. ünite, Motor sürücüsünde inverter', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-eff-anlam', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the correct meaning.**

What does “efficiency” mean?', '{"choices":["How fast a motor turns","How much input energy becomes useful output","How far an EV can travel","How much sunlight reaches a panel","How long a battery takes to charge"]}', '{"index":1}', 'Verim (efficiency) giren enerjinin ne kadarının işe yarar çıkışa dönüştüğüdür. Geri kalanı çoğunlukla ısı olarak kaybolur.', 1, '1. ünite, Motorlarda energy efficiency', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-eff-neden', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', 'Why is energy efficiency important in motors?', '{"choices":["Because motors use a lot of electricity, so small savings lower costs","Because efficient motors never need any maintenance or repair","Because efficient motors do not need electricity","Because higher efficiency makes the motor louder and heavier","Because inefficient motors cannot turn"]}', '{"index":0}', 'Motorlar sanayide elektriğin büyük kısmını tüketir. Verimdeki küçük bir artış elektrik faturasını, ısı kaybını ve karbon salımını azaltır.', 2, '1. ünite, Motorlarda energy efficiency', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-eff-kelime', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the word that completes the sentence.**

A motor with high _____ wastes less energy as heat.', '{"choices":["range","efficiency","connector","irradiance","firmware"]}', '{"index":1}', 'Verimi (efficiency) yüksek motor enerjinin daha azını ısı olarak kaybeder.', 1, '1. ünite, Motorlarda energy efficiency', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-eff-en', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the correct English translation.**

“Verimli motorlar şirketin elektrik maliyetini düşürür.”', '{"choices":["The company reduces efficient motors with electricity.","Efficient motors increase the company''s electricity costs.","Electricity costs reduce the company''s efficient motors.","Efficient motors reduce the company''s electricity costs.","Efficient motors are reduced by the company''s costs."]}', '{"index":3}', 'Özne *efficient motors*, fiil *reduce* (düşürür), nesne *the company''s electricity costs*. *increase* ters anlamdadır.', 2, '1. ünite, Motorlarda energy efficiency', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-stator-anlam', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the correct meaning.**

What is a “stator”?', '{"choices":["The rotating part of a motor","The part of a motor that stays still","A charger built into a vehicle","A device that changes DC into AC","A small computer on a single chip"]}', '{"index":1}', 'Stator motorun sabit kalan parçasıdır; rotor onun içinde döner.', 1, '1. ünite, Rotor ve stator', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-stator-kelime', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the word that completes the sentence.**

The rotor spins inside the _____.', '{"choices":["sensor","stator","connector","battery pack","solar farm"]}', '{"index":1}', 'Rotor, sabit duran **stator**un içinde döner.', 1, '1. ünite, Rotor ve stator', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-rotor-fill', 'is-ingilizcesi', 'ie-u1', 1, 'fill', 'derived', 'Complete with one word: The part of an electric motor that turns is called the ____.', '{"blanks":1}', '{"blanks":[["rotor"]]}', 'Dönen parça **rotor**, duran parça **stator**dur.', 1, '1. ünite, Rotor ve stator', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u1-stator-paragraf', 'is-ingilizcesi', 'ie-u1', 1, 'mcq', 'derived', '**Choose the sentence that does not fit the paragraph.**

(1) An electric motor has two main parts. (2) The stator stays still. (3) The rotor turns inside it. (4) The rotor''s shaft drives the machine. (5) A wireless connection lets the device report data.', '{"choices":["(5)","(4)","(3)","(2)","(1)"]}', '{"index":0}', 'Paragraf motorun iki ana parçasını (stator ve rotor) anlatıyor. Kablosuz bağlantıyla veri gönderme (**5. cümle**) IoT konusudur.', 2, '1. ünite, Rotor ve stator', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa01', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'original', '**Choose the correct meaning.**

What does “regenerative braking” mean?', '{"choices":["A link to the public electricity network","Extra skills or experience that an employer would like","Recovering energy while a vehicle slows down","A part that carries out a physical action","Operating without a connection to the electricity grid"]}', '{"index":2}', 'Rejeneratif frenleme, araç yavaşlarken enerjinin geri kazanılmasıdır: motor jeneratör gibi çalışır ve bataryayı biraz şarj eder.', 1, 'Quiz (26.10.2026), Grup A, soru 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa06', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'original', '**Choose the word that completes the sentence.**

The charger is available, but its _____ does not fit the vehicle.', '{"choices":["irradiance","connector","rotor","firmware","stator"]}', '{"index":1}', 'Araca takılan fiş **connector**dur. Şarj cihazı boş olsa da fiş tipi araca uymazsa şarj yapılamaz; şarj istasyonlarındaki yaygın sorunlardan biridir.', 1, 'Quiz (26.10.2026), Grup A, soru 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa11', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'original', '**Choose the sentence that does not fit the paragraph.**

(1) The driver wants to travel farther. (2) They check the EV’s range before leaving. (3) A motor’s stator stays still during operation. (4) They locate a charging station on the route. (5) They compare charging times at two stations.', '{"choices":["(3)","(2)","(5)","(4)","(1)"]}', '{"index":0}', 'Paragraf bir EV sürücüsünün yolculuk planını anlatıyor (menzil, şarj istasyonu, şarj süresi). Motorun statorundan söz eden **3. cümle** paragrafa uymaz.', 1, 'Quiz (26.10.2026), Grup A, soru 11', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa16', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'original', '**Choose the correct Turkish translation.**

“The on-board charger limits how quickly the car accepts AC power.”', '{"choices":["Araç içi şarj cihazı AC gücünü şebekeye satar.","Araç içi şarj cihazı, aracın AC gücü ne kadar hızlı alacağını sınırlar.","Araç içi şarj cihazı motor torkunu artırır.","AC güç, araç içi şarj cihazını tamamen kapatır.","Araç AC gücünü yalnızca güneş panelinden alır."]}', '{"index":1}', '*limits* = sınırlar, *how quickly the car accepts AC power* = aracın AC gücü ne kadar hızlı kabul edeceğini. AC şarjda hızı araçtaki şarj cihazı belirler.', 1, 'Quiz (26.10.2026), Grup A, soru 16', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa21', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'original', '**Choose the correct English translation.**

“Hızlı şarj yolculuk sırasında bekleme süresini azaltabilir.”', '{"choices":["Fast charging reduces the trip before waiting.","Fast charging can increase waiting time during a trip.","Fast charging can reduce waiting time during a trip.","Fast charging can reduce range during a trip.","Waiting time can charge a fast trip."]}', '{"index":2}', '*-abilir* = *can*, *azaltmak* = *reduce*, *bekleme süresi* = *waiting time*, *yolculuk sırasında* = *during a trip*.', 1, 'Quiz (26.10.2026), Grup A, soru 21', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb01', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'original', '**Choose the correct meaning.**

What is an “on-board charger”?', '{"choices":["Adjusting how fast a motor runs","The amount of sunlight reaching a surface","A charger built into a vehicle","Information available as events happen","The duties of the person in the role"]}', '{"index":2}', '*On-board* = aracın üstünde, içinde. Araç içi şarj cihazı araca yerleşik olan şarj cihazıdır.', 1, 'Quiz (26.10.2026), Grup B, soru 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb06', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'original', '**Choose the word that completes the sentence.**

The EV’s _____ is lower when the battery is nearly empty.', '{"choices":["range","firmware","irradiance","stator","torque"]}', '{"index":0}', 'Batarya boşaldıkça aracın gidebileceği mesafe, yani **menzili** (range) azalır.', 1, 'Quiz (26.10.2026), Grup B, soru 6', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb11', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'original', '**Choose the sentence that does not fit the paragraph.**

(1) The EV’s battery is almost empty. (2) The driver checks the nearest charging station. (3) The available connector fits the car. (4) PV cells produce electricity from sunlight. (5) The driver estimates the charging time.', '{"choices":["(2)","(4)","(5)","(3)","(1)"]}', '{"index":1}', 'Paragraf bataryası biten bir aracın şarj edilmesini anlatıyor. PV hücrelerinin güneşten elektrik üretmesi (**4. cümle**) güneş enerjisi konusudur.', 1, 'Quiz (26.10.2026), Grup B, soru 11', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb16', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'original', '**Choose the correct Turkish translation.**

“Regenerative braking sends some energy back to the battery.”', '{"choices":["Rejeneratif frenleme yalnızca bataryayı soğutur.","Frenleme batarya kapasitesini ölçer.","Rejeneratif frenleme enerjinin bir kısmını bataryaya geri gönderir.","Rejeneratif frenleme bataryadaki tüm enerjiyi kullanır.","Batarya frenleme sırasında motoru şebekeden şarj eder."]}', '{"index":2}', '*sends some energy back* = enerjinin bir kısmını geri gönderir. *some* "bir kısmı" demektir, "tümü" değil.', 1, 'Quiz (26.10.2026), Grup B, soru 16', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb21', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'original', '**Choose the correct English translation.**

“Araç içi şarj cihazı AC gücü batarya için dönüştürür.”', '{"choices":["The on-board charger stores AC power in the motor.","The battery converts the on-board charger into AC power.","The on-board charger converts AC power for the battery.","The on-board charger measures the battery’s range.","AC power converts the battery into an on-board charger."]}', '{"index":2}', 'Özne *the on-board charger*, fiil *converts* (dönüştürür), nesne *AC power*, *for the battery* = batarya için. Batarya DC ile dolar; araç içi şarj cihazı şebekenin AC gücünü DC''ye çevirir.', 1, 'Quiz (26.10.2026), Grup B, soru 21', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-ev-anlam', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct meaning.**

What is an “electric vehicle (EV)”?', '{"choices":["A vehicle that runs on a battery and an electric motor","A vehicle that runs only on diesel fuel","A machine that produces electricity from sunlight","A station where batteries are sold","A small computer inside a car"]}', '{"index":0}', 'Elektrikli araç benzin ya da dizel yerine bataryadaki elektrikle ve elektrik motoruyla gider.', 1, '2. ünite, Electric vehicle (EV) ve yaygınlaşması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-ev-fark', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', 'How is an electric vehicle different from a normal car?', '{"choices":["It has no wheels and no brakes","It uses a battery and an electric motor instead of a fuel engine","It can only drive on sunny days","It needs more oil changes and more fuel than a normal car","It always produces more exhaust gas than a diesel car"]}', '{"index":1}', 'Normal araç yakıtla çalışan içten yanmalı motor kullanır; EV ise batarya paketi ve elektrik motoru kullanır, egzoz gazı çıkarmaz ve yağ değişimi gerektirmez.', 1, '2. ünite, Electric vehicle (EV) ve yaygınlaşması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-ev-populer', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', 'Why are electric vehicles becoming more popular today?', '{"choices":["Because fuel prices are falling everywhere","Because they have lower running costs and zero exhaust emissions","Because charging stations are no longer needed","Because their batteries never lose any capacity over the years","Because they are always cheaper to buy than other cars"]}', '{"index":1}', 'EV''ler kilometre başına daha ucuza gider, egzoz salımı yoktur ve devletler teşvik verir; şarj altyapısı da genişledikçe yaygınlaşıyorlar.', 2, '2. ünite, Electric vehicle (EV) ve yaygınlaşması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-ev-tr', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct Turkish translation.**

“Electric vehicles produce no exhaust emissions.”', '{"choices":["Elektrikli araçlar egzoz salımı üretmez.","Elektrikli araçlar daha fazla egzoz salımı üretir.","Egzoz salımı elektrikli araçları üretir.","Elektrikli araçlar egzozu bataryada depolar.","Elektrikli araçlar yalnızca egzozla çalışır."]}', '{"index":0}', '*produce no exhaust emissions* = egzoz salımı üretmez. *no* olumsuzluk verir.', 1, '2. ünite, Electric vehicle (EV) ve yaygınlaşması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-station-anlam', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct meaning.**

What is a “charging station”?', '{"choices":["A place where electric vehicles are charged","A part of a motor that stays still","A large group of solar panels","A program stored in a device","The distance a car can travel"]}', '{"index":0}', 'Şarj istasyonu elektrikli araçların şarj edildiği yerdir.', 1, '2. ünite, Charging station, slow ve fast charging', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-turler', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', 'What are the main types of EV charging?', '{"choices":["Slow AC charging at home and fast DC charging at stations","Solar charging and wind charging only","Fuel charging and oil charging","Wireless charging only, with no cables or connectors at all","Charging only by regenerative braking while driving downhill"]}', '{"index":0}', 'İki ana tür vardır: evde ya da işte saatler süren **yavaş (AC) şarj** ve istasyonlarda dakikalar süren **hızlı (DC) şarj**.', 2, '2. ünite, Charging station, slow ve fast charging', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-fast-kelime', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the word that completes the sentence.**

On a long trip, drivers prefer _____ charging because they do not want to wait for hours.', '{"choices":["fast","slow","off-grid","wireless","real-time"]}', '{"index":0}', 'Uzun yolculukta saatlerce beklememek için **hızlı şarj** (fast charging) tercih edilir.', 1, '2. ünite, Charging station, slow ve fast charging', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-yavas-ev', 'is-ingilizcesi', 'ie-u2', 2, 'tf', 'derived', 'Slow charging is usually done at home overnight, while fast charging is common at stations on highways.', '{}', '{"value":true}', 'Doğru. Yavaş şarj gece boyunca evde, hızlı şarj ise otoyol üstündeki istasyonlarda yaygındır.', 1, '2. ünite, Charging station, slow ve fast charging', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-station-paragraf', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the sentence that does not fit the paragraph.**

(1) A new charging station opened in the city centre. (2) It has four fast chargers. (3) Drivers can pay with a mobile app. (4) The microcontroller reads data from a sensor. (5) The station is open 24 hours a day.', '{"choices":["(1)","(2)","(3)","(4)","(5)"]}', '{"index":3}', 'Paragraf yeni açılan bir şarj istasyonunu anlatıyor. Mikrodenetleyicinin sensörden veri okuması (**4. cümle**) gömülü sistemler konusudur.', 2, '2. ünite, Charging station, slow ve fast charging', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-time-kelime', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the word that completes the sentence.**

With a home charger, the _____ time is about eight hours.', '{"choices":["charging","torque","irradiance","firmware","stator"]}', '{"index":0}', '**Charging time** bataryanın dolması için geçen süredir.', 1, '2. ünite, Charging time ve kilowatt-hour (kWh)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-kwh-anlam', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct meaning.**

What does “kilowatt-hour (kWh)” measure?', '{"choices":["The amount of energy used or stored","The turning force of a motor","The amount of sunlight on a surface","The speed of a wireless connection","The number of cells in a solar panel"]}', '{"index":0}', 'Kilovatsaat (kWh) bir **enerji** birimidir: batarya kapasitesi ve tüketilen elektrik kWh ile ölçülür. Örneğin 60 kWh''lik batarya.', 2, '2. ünite, Charging time ve kilowatt-hour (kWh)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-neden-onemli', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', 'Why does charging speed matter for drivers?', '{"choices":["Because long charging times make trips slower and less convenient","Because fast charging increases the car''s weight","Because slow charging damages the connector every time","Because charging speed changes the color of the battery","Because drivers must charge only at night"]}', '{"index":0}', 'Şarj ne kadar uzun sürerse yolculuk o kadar uzar ve sürücü beklemek zorunda kalır; bu yüzden şarj hızı sürücüler için önemlidir.', 2, '2. ünite, Charging time ve kilowatt-hour (kWh)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-kwh-en', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct English translation.**

“Batarya paketi 60 kilovatsaat enerji depolar.”', '{"choices":["The battery pack uses 60 kilowatt-hours of range.","The battery pack stores 60 kilowatt-hours of energy.","Energy stores the battery pack in 60 kilowatt-hours.","The battery pack is stored by 60 kilowatt-hours.","The battery pack charges 60 hours of energy."]}', '{"index":1}', '*depolar* = *stores*, *60 kilovatsaat enerji* = *60 kilowatt-hours of energy*. Özne *the battery pack*.', 2, '2. ünite, Charging time ve kilowatt-hour (kWh)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-range-anlam', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct meaning.**

What does “range” mean for an EV?', '{"choices":["The distance a vehicle can travel on one charge","The time needed to fully charge the battery","The turning force of the motor","The plug that connects the car to a charger","The price of one kilowatt-hour"]}', '{"index":0}', 'Menzil (range) aracın tek şarjla gidebileceği mesafedir. Diğerleri charging time, torque, connector tanımları.', 1, '2. ünite, Range', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-range-kaygi', 'is-ingilizcesi', 'ie-u2', 2, 'tf', 'derived', 'Range is important for an EV because drivers worry about running out of battery before they reach a charging station.', '{}', '{"value":true}', 'Doğru. Bu kaygıya "range anxiety" denir: sürücü bir sonraki şarj istasyonuna yetişemeyeceğinden endişe eder.', 2, '2. ünite, Range', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-range-soguk', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct Turkish translation.**

“Cold weather can reduce an EV’s range.”', '{"choices":["Soğuk hava elektrikli aracın menzilini artırır.","Soğuk hava elektrikli aracın menzilini azaltabilir.","Elektrikli aracın menzili soğuk havayı azaltır.","Soğuk havada elektrikli araç şarj edilemez.","Elektrikli araçlar soğuk havada daha hızlı şarj olur."]}', '{"index":1}', '*can reduce* = azaltabilir, *an EV''s range* = elektrikli aracın menzili. Soğuk batarya daha az enerji verir.', 2, '2. ünite, Range', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-range-fill', 'is-ingilizcesi', 'ie-u2', 2, 'fill', 'derived', 'Complete with one word: This EV has a ____ of 400 km, so it can travel 400 km on one charge.', '{"blanks":1}', '{"blanks":[["range"]]}', 'Tek şarjla gidilebilecek mesafe **range** (menzil).', 1, '2. ünite, Range', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-battery-anlam', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct meaning.**

What is a “battery pack”?', '{"choices":["A large battery made of many cells that powers the vehicle","A long cable that connects the car to the public grid","A program that controls a smart device","A large group of solar panels in a field outside the city","The rotating part of an electric motor"]}', '{"index":0}', 'Batarya paketi, birçok hücreden oluşan ve aracı besleyen büyük bataryadır.', 1, '2. ünite, Battery pack', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-battery-kelime', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the word that completes the sentence.**

The _____ is the most expensive part of an electric vehicle.', '{"choices":["connector","battery pack","solar farm","firmware","sensor"]}', '{"index":1}', 'Elektrikli aracın en pahalı parçası genellikle **batarya paketi**dir; bu yüzden EV''lerin satın alma fiyatı yüksektir.', 1, '2. ünite, Battery pack', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-regen-kelime', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the word that completes the sentence.**

When the car slows down, regenerative _____ sends energy back to the battery.', '{"choices":["braking","charging","range","storage","connection"]}', '{"index":0}', '**Regenerative braking**: araç yavaşlarken motor jeneratör gibi çalışır ve enerjiyi bataryaya geri gönderir.', 1, '2. ünite, Regenerative braking', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-regen-en', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct English translation.**

“Rejeneratif frenleme şehir içi sürüşte menzili artırır.”', '{"choices":["Regenerative braking reduces range in city driving.","City driving increases regenerative braking range.","Regenerative braking increases range in city driving.","Range increases regenerative braking in the city.","Regenerative braking is increased by city range."]}', '{"index":2}', '*artırır* = *increases*, *menzili* = *range*, *şehir içi sürüşte* = *in city driving*. Şehirde sık fren yapıldığı için geri kazanılan enerji fazladır.', 2, '2. ünite, Regenerative braking', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-connector-anlam', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct meaning.**

What is a “connector” at a charging station?', '{"choices":["The plug that connects the charging cable to the car","The distance a car can travel on one full charge","The program that runs inside the charging station","The part of a motor that turns","The amount of sunlight on the station"]}', '{"index":0}', 'Konnektör, şarj kablosunu araca bağlayan fiştir. Farklı araçlar farklı konnektör tipleri kullanabilir.', 1, '2. ünite, Connector ve şarj istasyonundaki sorunlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-sorunlar', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', 'Which of these is **not** a typical problem at charging stations?', '{"choices":["Long queues of cars waiting to charge","A broken charger that does not work","A connector that does not fit the car","A payment app that does not accept the card","Too much sunlight on the car''s roof"]}', '{"index":4}', 'Şarj istasyonlarındaki tipik sorunlar kuyruklar, bozuk şarj cihazı, uymayan konnektör ve ödeme sorunlarıdır. Aracın tavanına düşen güneş ışığı bir şarj sorunu değildir.', 2, '2. ünite, Connector ve şarj istasyonundaki sorunlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-connector-tr', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct Turkish translation.**

“Some charging stations have connectors that do not fit every car.”', '{"choices":["Her araç bütün şarj istasyonlarına uyar.","Bazı şarj istasyonlarında her araca uymayan konnektörler vardır.","Bazı araçların şarj istasyonunda konnektörü yoktur.","Konnektörler bazı şarj istasyonlarını kapatır.","Bazı şarj istasyonları her araca konnektör satar."]}', '{"index":1}', '*have connectors* = konnektörleri vardır, *that do not fit every car* = her araca uymayan.', 2, '2. ünite, Connector ve şarj istasyonundaki sorunlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-obc-kelime', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the word that completes the sentence.**

At a slow AC charger, the car''s _____ changes AC power into DC for the battery.', '{"choices":["on-board charger","stator","solar farm","actuator","rotor"]}', '{"index":0}', 'AC şarjda şebekenin alternatif akımını bataryanın istediği doğru akıma araç içindeki **on-board charger** çevirir.', 2, '2. ünite, On-board charger', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-obc-fill', 'is-ingilizcesi', 'ie-u2', 2, 'fill', 'derived', 'Complete: A charger that is built into the vehicle is called an ____ charger.', '{"blanks":1}', '{"blanks":[["on-board","onboard","on board"]]}', '**On-board charger**: araç içi şarj cihazı.', 2, '2. ünite, On-board charger', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-dezavantaj', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', 'Which of these is a **disadvantage** of electric vehicles?', '{"choices":["Low running costs","Quiet driving","Long charging time","Zero exhaust emissions","Regenerative braking"]}', '{"index":2}', 'Uzun şarj süresi, sınırlı menzil, yüksek batarya fiyatı ve yetersiz istasyon EV''lerin dezavantajlarıdır. Düşük işletme maliyeti, sessizlik ve sıfır egzoz avantajdır.', 2, '2. ünite, EV''lerin avantaj ve dezavantajları, şarjın geleceği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-gelecek', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', 'How are charging systems likely to improve in the future?', '{"choices":["Faster chargers, more stations and wireless charging","Fewer stations and longer charging times","Charging only with diesel generators","Removing connectors from all cars","Charging only on sunny days"]}', '{"index":0}', 'Gelecekte daha hızlı şarj cihazları, daha çok istasyon, kablosuz şarj ve araçtan şebekeye enerji verme (vehicle-to-grid) beklenir.', 2, '2. ünite, EV''lerin avantaj ve dezavantajları, şarjın geleceği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u2-avantaj-en', 'is-ingilizcesi', 'ie-u2', 2, 'mcq', 'derived', '**Choose the correct English translation.**

“Elektrikli araçların bakım maliyeti daha düşüktür.”', '{"choices":["Electric vehicles have higher maintenance costs.","Maintenance costs are lower than electric vehicles.","Electric vehicles have lower maintenance costs.","Electric vehicles lower the cost of fuel engines.","Electric vehicles need maintenance to lower costs."]}', '{"index":2}', '*daha düşük* = *lower*, *bakım maliyeti* = *maintenance costs*. EV''de yağ değişimi ve egzoz sistemi olmadığı için bakım ucuzdur.', 2, '2. ünite, EV''lerin avantaj ve dezavantajları, şarjın geleceği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa04', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'original', '**Choose the correct meaning.**

What is an “actuator”?', '{"choices":["Operating without a connection to the electricity grid","Recovering energy while a vehicle slows down","A link to the public electricity network","Extra skills or experience that an employer would like","A part that carries out a physical action"]}', '{"index":4}', 'Aktüatör (eyleyici) fiziksel bir eylem yapan parçadır: motor, valf, röle. Sensör ölçer, aktüatör harekete geçer.', 1, 'Quiz (26.10.2026), Grup A, soru 4', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa09', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'original', '**Choose the word that completes the sentence.**

The device reads the sensor and then activates the _____.', '{"choices":["actuator","charger","solar farm","inverter","stator"]}', '{"index":0}', 'Gömülü sistemde akış: sensör okunur, karar verilir, **aktüatör** çalıştırılır (activate).', 1, 'Quiz (26.10.2026), Grup A, soru 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa14', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'original', '**Choose the sentence that does not fit the paragraph.**

(1) A smart thermostat reads room temperature. (2) Its sensor sends data to a microcontroller. (3) The controller decides when to turn on heating. (4) Fast charging can shorten an EV trip. (5) The device can report data through a wireless connection.', '{"choices":["(5)","(1)","(3)","(4)","(2)"]}', '{"index":3}', 'Paragraf akıllı termostatın nasıl çalıştığını anlatıyor. Hızlı şarjın EV yolculuğunu kısaltması (**4. cümle**) elektrikli araç konusudur.', 1, 'Quiz (26.10.2026), Grup A, soru 14', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa19', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'original', '**Choose the correct Turkish translation.**

“The firmware processes sensor data before sending a command.”', '{"choices":["Sensör verisi yalnızca kablosuz ağda depolanır.","Cihaz yazılımı komuttan sonra sensörü üretir.","Cihaz yazılımı komutu almadan sensörü kapatır.","Cihaz yazılımı komut göndermeden önce sensör verisini işler.","Sensör verisi komut göndermeden önce cihaz yazılımını siler."]}', '{"index":3}', '*processes sensor data* = sensör verisini işler, *before sending a command* = komut göndermeden önce.', 1, 'Quiz (26.10.2026), Grup A, soru 19', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa24', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'original', '**Choose the correct English translation.**

“Mikrodenetleyici sensörden gelen veriyi işler.”', '{"choices":["Data from the sensor processes the microcontroller.","The sensor processes data from the microcontroller.","The microcontroller stores the sensor in data.","The microcontroller processes data from the sensor.","The microcontroller is processed by the sensor data."]}', '{"index":3}', 'Özne *the microcontroller*, fiil *processes* (işler), nesne *data from the sensor* (sensörden gelen veri).', 1, 'Quiz (26.10.2026), Grup A, soru 24', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb04', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'original', '**Choose the correct meaning.**

What does “real-time data” mean?', '{"choices":["The duties of the person in the role","A charger built into a vehicle","Information available as events happen","Adjusting how fast a motor runs","The amount of sunlight reaching a surface"]}', '{"index":2}', 'Gerçek zamanlı veri, olay olurken gecikmeden elde edilen bilgidir.', 1, 'Quiz (26.10.2026), Grup B, soru 4', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb09', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'original', '**Choose the word that completes the sentence.**

The device sends _____ to the cloud through a wireless network.', '{"choices":["data","range","irradiance","energy storage","torque"]}', '{"index":0}', 'IoT cihazı ölçtüğü **veriyi** (data) kablosuz ağ üzerinden buluta gönderir.', 1, 'Quiz (26.10.2026), Grup B, soru 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb14', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'original', '**Choose the sentence that does not fit the paragraph.**

(1) The IoT sensor reads air temperature. (2) Firmware checks the reading. (3) The microcontroller sends an instruction to an actuator. (4) The actuator switches on a fan. (5) An EV’s range depends on several factors.', '{"choices":["(3)","(1)","(4)","(5)","(2)"]}', '{"index":3}', 'Paragraf sensörden aktüatöre bir IoT döngüsünü anlatıyor. EV menzilinden söz eden **5. cümle** konunun dışında.', 1, 'Quiz (26.10.2026), Grup B, soru 14', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb19', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'original', '**Choose the correct Turkish translation.**

“A wireless connection lets the device report data remotely.”', '{"choices":["Kablosuz bağlantı, cihazın veriyi uzaktan iletmesini sağlar.","Cihaz kablosuz bağlantı olmadan veri ölçemez.","Kablosuz bağlantı cihazı uzaktan şarj eder.","Cihaz uzaktan veriyi yalnızca depolar.","Kablosuz bağlantı, cihazın veriyi silmesini sağlar."]}', '{"index":0}', '*lets the device report data* = cihazın veriyi iletmesini sağlar, *remotely* = uzaktan.', 1, 'Quiz (26.10.2026), Grup B, soru 19', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb24', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'original', '**Choose the correct English translation.**

“Aygıt yazılımı sensör verisini gerçek zamanlı işler.”', '{"choices":["The firmware stores a sensor in real time.","The firmware processes sensor data in real time.","The firmware processes data after the device is off.","The firmware is processing real time by data.","The sensor processes firmware data in real time."]}', '{"index":1}', 'Özne *the firmware*, fiil *processes*, nesne *sensor data*, *in real time* = gerçek zamanlı.', 1, 'Quiz (26.10.2026), Grup B, soru 24', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-embedded-anlam', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the correct meaning.**

What is an “embedded system”?', '{"choices":["A small computer built into a device to do one specific job","A large group of solar panels that supplies power to a city","A plug that connects an electric car to a fast charger","The part of a motor that stays still","A list of duties in a job ad"]}', '{"index":0}', 'Gömülü sistem, bir cihazın içine yerleştirilmiş ve belirli bir işi yapan küçük bilgisayar sistemidir.', 1, '3. ünite, Embedded system', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-embedded-ornek', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', 'Which of these is a good example of an embedded system?', '{"choices":["The control board inside a washing machine","A paper map of the city centre","A wooden table in the kitchen","A printed English textbook for students","A glass bottle of water"]}', '{"index":0}', 'Çamaşır makinesinin kontrol kartı tek bir işi (yıkama programını) yürüten gömülü bir sistemdir. Mikrodalga fırın, akıllı saat ve araçlardaki kontrol birimleri de örnektir.', 1, '3. ünite, Embedded system', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-embedded-tr', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the correct Turkish translation.**

“An embedded system is designed to perform one specific task.”', '{"choices":["Gömülü sistem birçok görevi aynı anda yapmak için tasarlanır.","Gömülü sistem belirli bir görevi yerine getirmek için tasarlanır.","Belirli bir görev gömülü sistemi tasarlar.","Gömülü sistem görevini bitirince kapanmak için tasarlanır.","Gömülü sistem yalnızca bilgisayarlarda tasarlanabilir."]}', '{"index":1}', '*is designed to* = ... için tasarlanır, *perform one specific task* = belirli bir görevi yerine getirmek.', 2, '3. ünite, Embedded system', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-iot-anlam', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the correct meaning.**

What does “Internet of Things (IoT)” mean?', '{"choices":["Everyday devices that connect to the internet and share data","A website that sells electronic devices to companies","A cable that connects an electric motor to its drive","A large battery inside an electric car","Power that comes from sunlight"]}', '{"index":0}', 'Nesnelerin interneti (IoT), birbirine ve internete bağlanıp veri paylaşan günlük cihazlardır: akıllı termostat, akıllı saat, akıllı priz.', 1, '3. ünite, Internet of Things (IoT) ve smart device', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-smart-kelime', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the word that completes the sentence.**

A smart _____ such as a smart plug can be controlled from your phone.', '{"choices":["device","range","stator","farm","grid"]}', '{"index":0}', '**Smart device**: internete bağlanıp uzaktan kontrol edilebilen cihaz.', 1, '3. ünite, Internet of Things (IoT) ve smart device', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-fayda', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', 'What is a benefit of smart/IoT devices at home?', '{"choices":["They can save energy by turning off lights automatically","They never need electricity","They make the internet slower for everyone","They cannot be controlled from a phone","They remove the need for any security"]}', '{"index":0}', 'Evde akıllı cihazlar konfor, uzaktan kontrol, enerji tasarrufu ve güvenlik sağlar; ör. ışıkları otomatik kapatmak.', 2, '3. ünite, Internet of Things (IoT) ve smart device', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-iot-en', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the correct English translation.**

“Akıllı cihazları telefonumuzdan uzaktan kontrol edebiliriz.”', '{"choices":["Our phone can be controlled by smart devices remotely.","We can control smart devices remotely from our phone.","Smart devices can control our phone remotely.","We can remotely control our phone from smart devices.","We control smart phones to make devices remote."]}', '{"index":1}', 'Özne *we*, *can control* = kontrol edebiliriz, nesne *smart devices*, *remotely from our phone* = telefonumuzdan uzaktan.', 2, '3. ünite, Internet of Things (IoT) ve smart device', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-mcu-anlam', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the correct meaning.**

What is a “microcontroller”?', '{"choices":["A small computer on a single chip that controls a device","A cable that carries data to the cloud","A device that changes DC power into AC power","A station where vehicles are charged","The amount of sunlight on a panel"]}', '{"index":0}', 'Mikrodenetleyici; işlemci, bellek ve giriş-çıkışları tek yongada toplayan, bir cihazı kontrol eden küçük bilgisayardır.', 1, '3. ünite, Microcontroller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-mcu-kelime', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the word that completes the sentence.**

The _____ reads the sensor, makes a decision and controls the motor.', '{"choices":["microcontroller","solar farm","connector","battery pack","stator"]}', '{"index":0}', 'Gömülü sistemin "beyni" **mikrodenetleyicidir**: sensörü okur, karar verir ve aktüatörü kontrol eder.', 1, '3. ünite, Microcontroller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-mcu-tf', 'is-ingilizcesi', 'ie-u3', 3, 'tf', 'derived', 'A microcontroller is the “brain” of an embedded system: it runs the firmware and controls inputs and outputs.', '{}', '{"value":true}', 'Doğru. Mikrodenetleyici aygıt yazılımını çalıştırır, sensörlerden giriş alır ve aktüatörlere çıkış verir.', 1, '3. ünite, Microcontroller', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-sensor-anlam', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the correct meaning.**

What is a “sensor”?', '{"choices":["A part that measures something like temperature or light","A part that carries out a physical action like opening a valve","A program stored inside a device","A charger that is built into an electric vehicle","A link to the public electricity network"]}', '{"index":0}', 'Sensör sıcaklık, ışık, hareket gibi bir büyüklüğü ölçer. Fiziksel eylemi yapan parça ise aktüatördür.', 1, '3. ünite, Sensor ve actuator', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-sensor-kelime', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the word that completes the sentence.**

A motion _____ turns on the light when someone enters the room.', '{"choices":["sensor","inverter","range","rotor","grid"]}', '{"index":0}', 'Hareketi algılayan parça **hareket sensörü**dür (motion sensor).', 1, '3. ünite, Sensor ve actuator', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-actuator-tf', 'is-ingilizcesi', 'ie-u3', 3, 'tf', 'derived', 'In a smart irrigation system, the valve that opens to let water flow is an actuator.', '{}', '{"value":true}', 'Doğru. Valf fiziksel bir eylem (açılma) yaptığı için aktüatördür; toprak nemini ölçen parça ise sensördür.', 1, '3. ünite, Sensor ve actuator', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-actuator-en', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the correct English translation.**

“Sensör ölçer, aktüatör harekete geçer.”', '{"choices":["The actuator measures, and the sensor acts.","The sensor measures, and the actuator acts.","The sensor and the actuator only measure.","The sensor acts after the actuator measures.","The sensor is measured by the actuator."]}', '{"index":1}', 'Sensör = *the sensor measures* (ölçer), aktüatör = *the actuator acts* (harekete geçer). Rolleri ters çeviren cümle yanlıştır.', 2, '3. ünite, Sensor ve actuator', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-firmware-anlam', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the correct meaning.**

What is “firmware” in simple words?', '{"choices":["Software stored in a device that controls its hardware","The metal case that protects a device from damage","A cable that connects two devices to each other","A large battery inside a car","The part of a motor that turns"]}', '{"index":0}', 'Aygıt yazılımı (firmware), cihazın donanımında kayıtlı olan ve onu çalıştıran yazılımdır.', 1, '3. ünite, Firmware', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-firmware-kelime', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the word that completes the sentence.**

The company sent a _____ update to fix a bug in the smart lock.', '{"choices":["firmware","torque","irradiance","range","stator"]}', '{"index":0}', 'Cihazdaki hatayı düzeltmek için gönderilen yazılım güncellemesi **firmware update**tir.', 1, '3. ünite, Firmware', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-firmware-fill', 'is-ingilizcesi', 'ie-u3', 3, 'fill', 'derived', 'Complete with one word: The software that is stored inside a microcontroller and controls the device is called ____.', '{"blanks":1}', '{"blanks":[["firmware"]]}', '**Firmware**: aygıt yazılımı.', 1, '3. ünite, Firmware', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-iletisim', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', 'How do IoT devices usually communicate with each other?', '{"choices":["Through wireless connections such as Wi-Fi or Bluetooth","Only through printed letters sent by post","Through the motor''s stator","By changing DC power into AC power with an inverter","Only by regenerative braking"]}', '{"index":0}', 'IoT cihazları çoğunlukla Wi-Fi, Bluetooth, Zigbee gibi **kablosuz bağlantılarla** birbirleriyle ve bulutla iletişim kurar.', 2, '3. ünite, Wireless connection ve IoT iletişimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-wireless-kelime', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the word that completes the sentence.**

The smartwatch sends your heart rate to your phone over a _____ connection.', '{"choices":["wireless","grid","solar","rotor","fast"]}', '{"index":0}', 'Akıllı saat telefona Bluetooth gibi bir **kablosuz bağlantıyla** veri gönderir.', 1, '3. ünite, Wireless connection ve IoT iletişimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-wireless-paragraf', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the sentence that does not fit the paragraph.**

(1) Our smart garden uses a soil moisture sensor. (2) The data goes to the cloud over Wi-Fi. (3) The app shows the moisture level on the phone. (4) An inverter changes the panel''s DC output into AC. (5) The user can water the plants from anywhere.', '{"choices":["(1)","(2)","(3)","(4)","(5)"]}', '{"index":3}', 'Paragraf akıllı bahçe sulama sistemini anlatıyor. Güneş panelinin inverteri (**4. cümle**) güneş enerjisi konusudur.', 2, '3. ünite, Wireless connection ve IoT iletişimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-realtime-kelime', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the word that completes the sentence.**

A car''s airbag system must react in _____ time, without any delay.', '{"choices":["real","charging","range","storage","grid"]}', '{"index":0}', '**Real-time**: gecikmeden, olay olurken. Hava yastığı çarpışma anında açılmalıdır.', 1, '3. ünite, Real-time ve data', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-data-tr', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the correct Turkish translation.**

“The app shows real-time data from the sensors.”', '{"choices":["Uygulama sensörlerden gelen eski verileri siler.","Sensörler uygulamadan gerçek zamanlı veri alır.","Uygulama sensörlerden gelen gerçek zamanlı verileri gösterir.","Uygulama yalnızca gerçek zamanlı sensörleri satar.","Gerçek zamanlı veriler uygulamayı kapatır."]}', '{"index":2}', '*shows* = gösterir, *real-time data* = gerçek zamanlı veri, *from the sensors* = sensörlerden gelen.', 2, '3. ünite, Real-time ve data', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-risk', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', 'What is a risk of connecting everything to the internet?', '{"choices":["Hackers may access devices and personal data","Devices will always use less energy","Devices will never need updates","The internet will stop working at home","Sensors will stop measuring temperature"]}', '{"index":0}', 'Her şeyi internete bağlamanın riskleri: bilgisayar korsanları (hackers), kişisel verilerin sızması (privacy), internet kesilince cihazın çalışmaması.', 2, '3. ünite, Akıllı cihazların faydaları ve riskleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-risk-en', 'is-ingilizcesi', 'ie-u3', 3, 'mcq', 'derived', '**Choose the correct English translation.**

“Zayıf parolalar akıllı cihazları saldırılara açık hale getirebilir.”', '{"choices":["Smart devices can make weak passwords open to attacks.","Weak passwords can make smart devices open to attacks.","Attacks can make weak passwords smart.","Strong passwords can make smart devices open to attacks.","Weak passwords are made by smart device attacks."]}', '{"index":1}', 'Özne *weak passwords* (zayıf parolalar), *can make ... open to attacks* = saldırılara açık hale getirebilir.', 2, '3. ünite, Akıllı cihazların faydaları ve riskleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u3-urun', 'is-ingilizcesi', 'ie-u3', 3, 'tf', 'derived', 'A smart plant pot that measures soil moisture and sends a message to your phone is an example of a useful IoT product.', '{}', '{"value":true}', 'Doğru. Sensör (nem), mikrodenetleyici, kablosuz bağlantı ve telefona bildirim; bir IoT ürününün bütün parçaları var.', 1, '3. ünite, Akıllı cihazların faydaları ve riskleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa02', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'original', '**Choose the correct meaning.**

What does “grid connection” mean?', '{"choices":["Extra skills or experience that an employer would like","A part that carries out a physical action","A link to the public electricity network","Operating without a connection to the electricity grid","Recovering energy while a vehicle slows down"]}', '{"index":2}', 'Şebeke bağlantısı, sistemin genel elektrik şebekesine (public electricity network) bağlı olmasıdır.', 1, 'Quiz (26.10.2026), Grup A, soru 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa05', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'original', '**Choose the correct meaning.**

What does “off-grid” mean?', '{"choices":["Recovering energy while a vehicle slows down","A link to the public electricity network","Extra skills or experience that an employer would like","A part that carries out a physical action","Operating without a connection to the electricity grid"]}', '{"index":4}', '*Off-grid* = şebekeden bağımsız; elektrik şebekesine bağlı olmadan çalışan. Ters anlamlısı *grid connection*.', 1, 'Quiz (26.10.2026), Grup A, soru 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa08', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'original', '**Choose the word that completes the sentence.**

On cloudy days, lower _____ can reduce a panel’s output.', '{"choices":["precision","torque","range","firmware","irradiance"]}', '{"index":4}', 'Bulutlu havada panele ulaşan güneş ışığı, yani **ışınım** (irradiance) azalır; panelin çıkışı da düşer.', 1, 'Quiz (26.10.2026), Grup A, soru 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa13', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'original', '**Choose the sentence that does not fit the paragraph.**

(1) The applicant has experience with firmware. (2) Our company designs solar systems. (3) We install panels for small businesses. (4) We also offer energy storage. (5) Our goal is to provide reliable renewable power.', '{"choices":["(5)","(1)","(2)","(4)","(3)"]}', '{"index":1}', 'Paragraf güneş sistemleri kuran bir şirketi tanıtıyor (We, Our). Başvuru sahibinin firmware deneyiminden söz eden **1. cümle** iş ilanı konusudur.', 1, 'Quiz (26.10.2026), Grup A, soru 13', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa18', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'original', '**Choose the correct Turkish translation.**

“Energy storage can supply power when sunlight is unavailable.”', '{"choices":["Güneş ışığı enerji depolamayı devre dışı bırakır.","Enerji depolama ışınımı ölçmek için kullanılır.","Enerji depolama yalnızca güneş ışığı varken çalışır.","Güneş ışığı yokken enerji depolama güç sağlayabilir.","Güneş ışığı yokken şebeke bağlantısı zorunlu olarak kesilir."]}', '{"index":3}', '*can supply power* = güç sağlayabilir, *when sunlight is unavailable* = güneş ışığı yokken.', 1, 'Quiz (26.10.2026), Grup A, soru 18', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa23', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'original', '**Choose the correct English translation.**

“Şirketimiz şebekeden bağımsız güneş sistemleri sağlıyor.”', '{"choices":["Our company provides solar systems of the grid.","Off-grid solar systems provide our company.","Our company provides off-grid solar systems.","Our company is provided by off-grid solar systems.","Our company provides on-grid motor systems."]}', '{"index":2}', 'Özne *our company*, fiil *provides*, nesne *off-grid solar systems* (şebekeden bağımsız güneş sistemleri).', 1, 'Quiz (26.10.2026), Grup A, soru 23', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb03', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'original', '**Choose the correct meaning.**

What does “irradiance” mean?', '{"choices":["Information available as events happen","The duties of the person in the role","A charger built into a vehicle","Adjusting how fast a motor runs","The amount of sunlight reaching a surface"]}', '{"index":4}', 'Işınım (irradiance) bir yüzeye ulaşan güneş ışığının miktarıdır.', 1, 'Quiz (26.10.2026), Grup B, soru 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb08', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'original', '**Choose the word that completes the sentence.**

A solar system needs an _____ to change DC output into AC power.', '{"choices":["actuator","inverter","microcontroller","on-board charger","rotor"]}', '{"index":1}', 'Panel DC üretir; ev ve şebeke AC kullanır. DC''yi AC''ye **inverter** çevirir.', 1, 'Quiz (26.10.2026), Grup B, soru 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb13', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'original', '**Choose the sentence that does not fit the paragraph.**

(1) A solar panel produces DC electricity. (2) A job ad lists the applicant’s responsibilities. (3) An inverter can change it to AC. (4) The system may connect to the grid. (5) A battery can store unused energy.', '{"choices":["(1)","(4)","(3)","(5)","(2)"]}', '{"index":4}', 'Paragraf bir güneş sisteminin parçalarını anlatıyor. İş ilanındaki sorumluluklardan söz eden **2. cümle** konunun dışında.', 1, 'Quiz (26.10.2026), Grup B, soru 13', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb18', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'original', '**Choose the correct Turkish translation.**

“The panels produce less power when irradiance is low.”', '{"choices":["Işınım düşük olduğunda paneller daha fazla güç üretir.","Işınım panelin gücünü depolar.","Paneller yalnızca ışınım yokken güç üretir.","Işınım düşük olduğunda paneller daha az güç üretir.","Paneller düşük gücü ışınıma dönüştürür."]}', '{"index":3}', '*produce less power* = daha az güç üretir, *when irradiance is low* = ışınım düşük olduğunda.', 1, 'Quiz (26.10.2026), Grup B, soru 18', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb23', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'original', '**Choose the correct English translation.**

“Enerji depolama gece elektrik sağlayabilir.”', '{"choices":["Electricity can store energy at night.","Energy storage supplies night with electricity.","Energy storage can measure electricity at night.","Energy storage must produce sunlight at night.","Energy storage can supply electricity at night."]}', '{"index":4}', '*sağlayabilir* = *can supply*, *gece* = *at night*. Özne *energy storage*.', 1, 'Quiz (26.10.2026), Grup B, soru 23', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-panel-nasil', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', 'How does a solar panel produce electricity, in simple words?', '{"choices":["Its PV cells turn sunlight directly into electricity","It burns fuel to heat water","It uses a motor to turn a rotor","It stores wind energy in a battery","It takes electricity from the grid and sells it back"]}', '{"index":0}', 'Güneş panelindeki fotovoltaik (PV) hücreler güneş ışığını doğrudan elektriğe (DC) çevirir.', 1, '4. ünite, Solar panel ve photovoltaic (PV) cell', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-pv-anlam', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the correct meaning.**

What is a “photovoltaic (PV) cell”?', '{"choices":["A cell that converts sunlight into electricity","A cell that stores fuel for a car","A part of a motor that stays still","A small computer inside a device","A cable that links a house to the grid"]}', '{"index":0}', 'Fotovoltaik hücre güneş ışığını elektriğe çeviren hücredir; paneller bu hücrelerden oluşur.', 1, '4. ünite, Solar panel ve photovoltaic (PV) cell', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-pv-kelime', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the word that completes the sentence.**

A solar panel is made of many _____ cells.', '{"choices":["PV","battery","rotor","firmware","kWh"]}', '{"index":0}', 'Güneş paneli birçok **PV (fotovoltaik) hücreden** oluşur.', 1, '4. ünite, Solar panel ve photovoltaic (PV) cell', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-panel-dc', 'is-ingilizcesi', 'ie-u4', 4, 'tf', 'derived', 'Solar panels produce AC electricity, so they do not need an inverter to power home appliances.', '{}', '{"value":false}', 'Yanlış. Paneller **DC** üretir; ev aletleri ve şebeke AC kullandığı için bir inverter gerekir.', 1, '4. ünite, Solar panel ve photovoltaic (PV) cell', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-inverter-neden', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', 'Why do we need an inverter in a solar system?', '{"choices":["To change the panels'' DC output into AC for homes and the grid","To measure the amount of sunlight that reaches the panels","To clean the solar panels automatically","To store energy for the night","To turn the panels toward the sun during the day"]}', '{"index":0}', 'Panel DC üretir; evdeki cihazlar ve şebeke AC kullanır. **Inverter** DC''yi AC''ye çevirir.', 1, '4. ünite, Güneş sisteminde inverter', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-inverter-en', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the correct English translation.**

“Evirici panellerden gelen DC gücü AC güce çevirir.”', '{"choices":["The inverter changes AC power from the grid into sunlight.","The panels change the inverter into DC power.","The inverter changes DC power from the panels into AC power.","DC power changes the inverter into AC panels.","The inverter stores DC power from the panels."]}', '{"index":2}', 'Özne *the inverter*, *changes A into B* = A''yı B''ye çevirir: *DC power from the panels* → *AC power*.', 2, '4. ünite, Güneş sisteminde inverter', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-grid-anlam', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', 'What does “grid connection” mean for a solar system?', '{"choices":["It is linked to the public network and can send extra power to it","The system works only in a desert far from cities","The panels are connected to each other with a strong metal frame","The system uses no inverter and no cables","The panels are placed on a grid of trees"]}', '{"index":0}', 'Şebeke bağlantılı sistem genel elektrik şebekesine bağlıdır: fazla elektriği şebekeye verir, güneş yokken şebekeden alır.', 2, '4. ünite, Grid connection', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-grid-tr', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the correct Turkish translation.**

“With a grid connection, extra solar power can be sold to the grid.”', '{"choices":["Şebeke bağlantısıyla fazla güneş enerjisi şebekeye satılabilir.","Şebeke bağlantısı fazla güneş enerjisini depolar.","Şebeke bağlantısı olmadan güneş enerjisi satılamaz ve depolanamaz.","Şebeke bağlantısıyla şebekeden güneş paneli satın alınır.","Fazla güneş enerjisi şebeke bağlantısını keser."]}', '{"index":0}', '*with a grid connection* = şebeke bağlantısıyla, *extra solar power* = fazla güneş enerjisi, *can be sold to the grid* = şebekeye satılabilir (edilgen).', 2, '4. ünite, Grid connection', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-grid-kelime', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the word that completes the sentence.**

Our house has a _____ connection, so we can buy electricity at night.', '{"choices":["grid","wireless","rotor","fast","firmware"]}', '{"index":0}', 'Güneş yokken şebekeden elektrik alabilmek için **grid connection** (şebeke bağlantısı) gerekir.', 1, '4. ünite, Grid connection', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-offgrid-kelime', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the word that completes the sentence.**

The mountain cabin is _____, so it uses solar panels and batteries for all its power.', '{"choices":["off-grid","on-board","real-time","fast","wireless"]}', '{"index":0}', 'Şebekeye bağlı olmayan yer **off-grid**dir; bütün elektriğini panel ve bataryadan alır.', 1, '4. ünite, Off-grid', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-offgrid-tf', 'is-ingilizcesi', 'ie-u4', 4, 'tf', 'derived', 'An off-grid solar system usually needs energy storage, because it cannot take power from the grid at night.', '{}', '{"value":true}', 'Doğru. Şebekeden bağımsız sistem gece şebekeden elektrik alamaz; bu yüzden bataryayla enerji depolar.', 2, '4. ünite, Off-grid', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-renewable-anlam', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the correct meaning.**

What does “renewable energy” mean?', '{"choices":["Energy from sources that do not run out, like sunlight and wind","Energy that comes only from burning coal, oil and gas","Energy stored in a phone battery","Energy lost as heat in a motor","Energy that must always be bought from other countries"]}', '{"index":0}', 'Yenilenebilir enerji güneş, rüzgâr, su gibi tükenmeyen kaynaklardan gelen enerjidir.', 1, '4. ünite, Renewable energy ve güneşin avantajları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-avantaj', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', 'Which of these is a main advantage of solar energy?', '{"choices":["It is clean and renewable, and it lowers electricity bills","It works the same at night as during the day","It never needs any space","It does not need any equipment","It produces more power on cloudy days"]}', '{"index":0}', 'Güneş enerjisi temiz ve yenilenebilirdir, faturayı düşürür ve bakımı azdır. Gece üretim yapmaz, bulutlu havada daha az üretir.', 1, '4. ünite, Renewable energy ve güneşin avantajları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-gelecek-en', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the correct English translation.**

“Güneş enerjisi karbon salımını azaltmaya yardımcı olur.”', '{"choices":["Solar energy helps reduce carbon emissions.","Carbon emissions help reduce solar energy.","Solar energy helps increase carbon emissions.","Solar energy is reduced by carbon emissions.","Solar energy helps carbon emissions to grow."]}', '{"index":0}', '*helps reduce* = azaltmaya yardımcı olur, *carbon emissions* = karbon salımı. Güneşin gelecek için önemli olmasının nedeni budur.', 2, '4. ünite, Renewable energy ve güneşin avantajları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-gelecek', 'is-ingilizcesi', 'ie-u4', 4, 'tf', 'derived', 'Solar energy is important for the future because fossil fuels will run out and they cause climate change.', '{}', '{"value":true}', 'Doğru. Fosil yakıtlar tükenir ve iklim değişikliğine yol açar; güneş enerjisi temiz ve yenilenebilirdir.', 1, '4. ünite, Renewable energy ve güneşin avantajları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-hava', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', 'Which weather condition reduces the output of solar panels the most?', '{"choices":["A clear, sunny summer day","A cool, sunny spring morning","Heavy clouds and snow covering the panels","A light wind on a sunny day","A bright day after rain has cleaned the panels"]}', '{"index":2}', 'Yoğun bulut ve panelin üstünü örten kar ışınımı en çok azaltır. Aşırı sıcak, toz ve gölge de çıkışı düşürür; serin ve güneşli hava panel için iyidir.', 2, '4. ünite, Irradiance ve hava koşulları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-sicak', 'is-ingilizcesi', 'ie-u4', 4, 'tf', 'derived', 'Very high temperatures can lower the efficiency of solar panels, even on a sunny day.', '{}', '{"value":true}', 'Doğru. PV hücreleri ısındıkça verimleri düşer; bu yüzden serin ve güneşli günler en iyi koşuldur.', 3, '4. ünite, Irradiance ve hava koşulları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-irr-fill', 'is-ingilizcesi', 'ie-u4', 4, 'fill', 'derived', 'Complete with one word: The amount of sunlight that reaches the surface of a panel is called ____.', '{"blanks":1}', '{"blanks":[["irradiance"]]}', '**Irradiance**: ışınım.', 2, '4. ünite, Irradiance ve hava koşulları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-sinir', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', 'Which of these is a limitation of solar energy?', '{"choices":["It produces no power at night","It has no fuel costs","It is a renewable source","It produces no exhaust gases","It can be used in off-grid places"]}', '{"index":0}', 'Güneşin sınırlılıkları: gece üretim yok, hava koşullarına bağlı, yüksek kurulum maliyeti, geniş alan ihtiyacı. Diğer şıklar avantajdır.', 2, '4. ünite, Panel efficiency ve güneşin sınırlılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-eff-kelime', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the word that completes the sentence.**

This panel has 22% _____, which means it turns 22% of the sunlight into electricity.', '{"choices":["efficiency","irradiance","range","torque","storage"]}', '{"index":0}', 'Panel **verimi** (efficiency) güneş ışığının ne kadarının elektriğe dönüştüğüdür.', 1, '4. ünite, Panel efficiency ve güneşin sınırlılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-maliyet-tr', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the correct Turkish translation.**

“The installation cost is high, but the panels pay for themselves over time.”', '{"choices":["Kurulum maliyeti düşüktür ama paneller zamanla pahalılaşır.","Kurulum maliyeti yüksektir ama paneller zamanla kendini amorti eder.","Paneller kurulum maliyetini zamanla artırır.","Kurulum maliyeti yüksek olduğu için paneller satılamaz.","Paneller zamanla kurulum maliyetini öder ve kapanır."]}', '{"index":1}', '*the installation cost is high* = kurulum maliyeti yüksek, *pay for themselves over time* = zamanla kendi maliyetini çıkarır (amorti eder).', 2, '4. ünite, Panel efficiency ve güneşin sınırlılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-storage-anlam', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the correct meaning.**

What does “energy storage” mean?', '{"choices":["Keeping energy, for example in batteries, to use later","Sending all energy to the grid immediately","Measuring the amount of sunlight","Changing DC power into AC power","Turning a motor faster"]}', '{"index":0}', 'Enerji depolama, üretilen enerjiyi sonra kullanmak üzere (örneğin bataryada) saklamaktır.', 1, '4. ünite, Energy storage', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-storage-kelime', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the word that completes the sentence.**

We added a battery for energy _____, so we can use solar power in the evening.', '{"choices":["storage","range","torque","control","farm"]}', '{"index":0}', 'Gündüz üretilen enerjiyi akşam kullanmak için **energy storage** (enerji depolama) gerekir.', 1, '4. ünite, Energy storage', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-farm-anlam', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the correct meaning.**

What is a “solar farm”?', '{"choices":["A large area of solar panels that produces power for the grid","A farm that grows its vegetables using only natural sunlight","A small solar panel on top of a calculator","A battery that stores sunlight","A charger built into a vehicle"]}', '{"index":0}', 'Güneş tarlası (solar farm), çok sayıda panelden oluşan ve şebekeye elektrik veren büyük güneş santralidir.', 1, '4. ünite, Solar farm', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u4-farm-paragraf', 'is-ingilizcesi', 'ie-u4', 4, 'mcq', 'derived', '**Choose the sentence that does not fit the paragraph.**

(1) A new solar farm was built near the city. (2) It has thousands of solar panels. (3) It supplies power to about 10,000 homes. (4) The rotor turns inside the stator. (5) The farm also has large batteries for energy storage.', '{"choices":["(1)","(2)","(3)","(4)","(5)"]}', '{"index":3}', 'Paragraf yeni bir güneş tarlasını anlatıyor. Rotor ve statordan söz eden **4. cümle** elektrik motoru konusudur.', 2, '4. ünite, Solar farm', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa03', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'original', '**Choose the correct meaning.**

What are “preferred qualifications” in a job ad?', '{"choices":["A part that carries out a physical action","Extra skills or experience that an employer would like","Operating without a connection to the electricity grid","Recovering energy while a vehicle slows down","A link to the public electricity network"]}', '{"index":1}', '*Preferred qualifications* zorunlu değildir; işverenin olmasını tercih ettiği ek beceri ya da deneyimlerdir. Zorunlu olanlar *requirements*tır.', 1, 'Quiz (26.10.2026), Grup A, soru 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa10', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'original', '**Choose the word that completes the sentence.**

I think I am a good _____ because I have built IoT prototypes.', '{"choices":["drive","range","task","fit","grid"]}', '{"index":3}', '*a good fit (for the job)* = pozisyona uygun aday. Başvuruda sık kullanılan bir kalıptır.', 1, 'Quiz (26.10.2026), Grup A, soru 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa15', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'original', '**Choose the sentence that does not fit the paragraph.**

(1) The job ad asks for embedded-system experience. (2) PV cells convert sunlight into electrical energy. (3) It lists firmware testing among the responsibilities. (4) The candidate has used microcontrollers in a project. (5) She explains how her project meets the requirement.', '{"choices":["(4)","(5)","(2)","(1)","(3)"]}', '{"index":2}', 'Paragraf bir iş ilanını ve adayın ilana uygunluğunu anlatıyor. PV hücrelerinin güneşten elektrik üretmesi (**2. cümle**) güneş enerjisi konusudur.', 1, 'Quiz (26.10.2026), Grup A, soru 15', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa20', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'original', '**Choose the correct Turkish translation.**

“I meet the requirement because I have tested wireless devices.”', '{"choices":["Gereklilikleri karşılasam da kablosuz cihazları test etmedim.","Kablosuz cihazları satmak için iş ilanı yazıyorum.","Kablosuz cihazları test etmeden gerekliliği karşılıyorum.","Kablosuz cihazları test etmek için gereklilikleri değiştiriyorum.","Kablosuz cihazları test ettiğim için gerekliliği karşılıyorum."]}', '{"index":4}', '*I meet the requirement* = gerekliliği karşılıyorum, *because I have tested* = test ettiğim için.', 1, 'Quiz (26.10.2026), Grup A, soru 20', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qa25', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'original', '**Choose the correct English translation.**

“Bu pozisyon hem cihaz testini hem de ekip çalışmasını gerektiriyor.”', '{"choices":["This position requires both device testing and teamwork.","Both device testing and teamwork requires this position.","This position requires either device testing nor teamwork.","This position is required both device testing and teamwork.","This position provides both device testing and teamwork."]}', '{"index":0}', '*hem ... hem de* = *both ... and*, *gerektiriyor* = *requires*. *either ... nor* hatalı bir kalıptır (doğrusu *either ... or* ya da *neither ... nor*).', 1, 'Quiz (26.10.2026), Grup A, soru 25', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb05', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'original', '**Choose the correct meaning.**

What are “responsibilities” in a job ad?', '{"choices":["A charger built into a vehicle","Adjusting how fast a motor runs","The duties of the person in the role","The amount of sunlight reaching a surface","Information available as events happen"]}', '{"index":2}', '*Responsibilities* pozisyondaki kişinin yapacağı görevlerdir (duties).', 1, 'Quiz (26.10.2026), Grup B, soru 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb10', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'original', '**Choose the word that completes the sentence.**

One area I still need to _____ is firmware testing.', '{"choices":["improve","measure","charge","connect","provide"]}', '{"index":0}', '*One area I still need to improve is ...* = hâlâ geliştirmem gereken bir alan ... Mülakatta zayıf yönü anlatmanın kalıbıdır.', 1, 'Quiz (26.10.2026), Grup B, soru 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb15', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'original', '**Choose the sentence that does not fit the paragraph.**

(1) A company needs an IoT engineer. (2) The position requires wireless-network knowledge. (3) A motor’s rotor spins inside the stator. (4) The applicant describes a relevant class project. (5) The interviewer asks how the project matches the role.', '{"choices":["(2)","(4)","(5)","(1)","(3)"]}', '{"index":4}', 'Paragraf bir IoT mühendisi pozisyonunu ve mülakatı anlatıyor. Rotor ve statordan söz eden **3. cümle** konunun dışında.', 1, 'Quiz (26.10.2026), Grup B, soru 15', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb20', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'original', '**Choose the correct Turkish translation.**

“Among the requirements are programming skills and teamwork.”', '{"choices":["Gereklilikler programlama becerilerini ortadan kaldırır.","Programlama ve ekip çalışması bu işte yasaktır.","Programlama becerileri ekip çalışmasının yerini alır.","Gereklilikler arasında programlama becerileri ve ekip çalışması vardır.","Ekip çalışması yalnızca programcılar içindir."]}', '{"index":3}', '*Among the requirements are ...* = gereklilikler arasında ... vardır. Cümle devrik: özne (programming skills and teamwork) fiilden sonra gelir.', 1, 'Quiz (26.10.2026), Grup B, soru 20', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-qb25', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'original', '**Choose the correct English translation.**

“Bu gerekliliği karşılıyorum çünkü kablosuz sistemlerle çalıştım.”', '{"choices":["I have worked wireless systems because this requirement meets me.","I meet this requirement although I have worked with wireless systems.","I require this work because wireless systems meet me.","I meet this requirement because I have worked with wireless systems.","I meet this requirement because I am worked with wireless systems."]}', '{"index":3}', '*karşılıyorum* = *I meet*, *çünkü* = *because* (although "-e rağmen" demektir), *çalıştım* = *I have worked with*. *I am worked* dilbilgisi olarak yanlıştır.', 1, 'Quiz (26.10.2026), Grup B, soru 25', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u5-req-anlam', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'derived', '**Choose the correct meaning.**

What are “requirements” in a job ad?', '{"choices":["Skills and experience that the applicant must have","Extra skills that are nice to have but not necessary","The salary and holidays of the job","The address of the company","The duties of the person in the role"]}', '{"index":0}', '*Requirements* adayda mutlaka bulunması gereken beceri ve deneyimlerdir. "Olsa iyi olur" olanlar *preferred qualifications*, görevler *responsibilities*tir.', 1, '5. ünite, İş ilanı: position, requirements, responsibilities, preferred qualifications', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u5-pref-kelime', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'derived', '**Choose the word that completes the sentence.**

Experience with solar systems is not required, but it is listed under preferred _____.', '{"choices":["qualifications","responsibilities","connections","devices","requirements"]}', '{"index":0}', 'Zorunlu olmayan ama tercih sebebi olan beceriler **preferred qualifications** başlığında listelenir.', 2, '5. ünite, İş ilanı: position, requirements, responsibilities, preferred qualifications', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u5-resp-kelime', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'derived', '**Choose the word that completes the sentence.**

Testing firmware and writing reports are among the main _____ of this role.', '{"choices":["responsibilities","qualifications","applicants","connectors","sensors"]}', '{"index":0}', 'Pozisyondaki kişinin yapacağı görevler **responsibilities**tir.', 1, '5. ünite, İş ilanı: position, requirements, responsibilities, preferred qualifications', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u5-pozisyon-tr', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'derived', '**Choose the correct Turkish translation.**

“The position requires experience with motor drives.”', '{"choices":["Pozisyon motor sürücüleri deneyimi gerektirir.","Pozisyon motor sürücülerini test etmez.","Motor sürücüleri bu pozisyonu gerektirir.","Pozisyon için motor sürücüsü satın almak gerekir.","Motor sürücüleri deneyimi bu pozisyonda yasaktır."]}', '{"index":0}', '*requires* = gerektirir, *experience with motor drives* = motor sürücüleri deneyimi. Özne *the position*.', 2, '5. ünite, İş ilanı: position, requirements, responsibilities, preferred qualifications', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u5-ilan-tf', 'is-ingilizcesi', 'ie-u5', 5, 'tf', 'derived', 'In a job ad, “responsibilities” are the duties of the job, while “requirements” are what the applicant must have.', '{}', '{"value":true}', 'Doğru. Sorumluluklar işte yapılacakları, gereklilikler adayda aranan şartları anlatır.', 1, '5. ünite, İş ilanı: position, requirements, responsibilities, preferred qualifications', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u5-fit-anlam', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'derived', '**Choose the correct meaning.**

What does “I am a good fit for this role” mean?', '{"choices":["My skills and experience match the job well","I am physically strong enough for the job","I want to change the job''s requirements","I am looking for a different job","The job ad has a mistake in it"]}', '{"index":0}', '*A good fit* = uygun aday; becerilerin ve deneyimin pozisyonla örtüşmesi.', 1, '5. ünite, Başvuru dili: meet the requirement, good fit, experience, improve', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u5-meet-en', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'derived', '**Choose the correct English translation.**

“Mikrodenetleyicilerle bir proje yaptığım için bu gerekliliği karşılıyorum.”', '{"choices":["I meet this requirement because I have done a project with microcontrollers.","This requirement meets me because microcontrollers did a project.","I meet this requirement although I have done a project with microcontrollers.","I require this project because I have met microcontrollers.","I have done this requirement because microcontrollers meet a project."]}', '{"index":0}', '*... için* (sebep) = *because*, *karşılıyorum* = *I meet*, *bir proje yaptım* = *I have done a project*. *although* "-e rağmen" anlamına gelir.', 2, '5. ünite, Başvuru dili: meet the requirement, good fit, experience, improve', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u5-applicant-kelime', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'derived', '**Choose the word that completes the sentence.**

Every _____ must send a CV and a short cover letter.', '{"choices":["applicant","actuator","inverter","connector","stator"]}', '{"index":0}', 'İşe başvuran kişi **applicant**tır (başvuru sahibi).', 1, '5. ünite, Başvuru dili: meet the requirement, good fit, experience, improve', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u5-improve-tr', 'is-ingilizcesi', 'ie-u5', 5, 'mcq', 'derived', '**Choose the correct Turkish translation.**

“I am working to improve my teamwork skills.”', '{"choices":["Ekip çalışması becerilerimi geliştirmek için çalışıyorum.","Ekip çalışması becerilerim çok iyi olduğu için çalışmıyorum.","Ekibim benim becerilerimi geliştiriyor.","Ekip çalışması yerine tek başıma çalışıyorum.","Becerilerimi ölçmek için ekip kuruyorum."]}', '{"index":0}', '*I am working to improve* = geliştirmek için çalışıyorum, *my teamwork skills* = ekip çalışması becerilerim.', 2, '5. ünite, Başvuru dili: meet the requirement, good fit, experience, improve', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('ie-u5-teamwork-fill', 'is-ingilizcesi', 'ie-u5', 5, 'fill', 'derived', 'Complete with one word: The job needs someone who can work well with others, so ____ is one of the requirements.', '{"blanks":1}', '{"blanks":[["teamwork","team work"]]}', 'Başkalarıyla iyi çalışabilmek **teamwork**tür (ekip çalışması).', 1, '5. ünite, Başvuru dili: meet the requirement, good fit, experience, improve', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-torque', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa07';
UPDATE questions SET kavram = 'u1-drive', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa12';
UPDATE questions SET kavram = 'u1-torque', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa17';
UPDATE questions SET kavram = 'u1-speed', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa22';
UPDATE questions SET kavram = 'u1-speed', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb02';
UPDATE questions SET kavram = 'u1-rotor-stator', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb07';
UPDATE questions SET kavram = 'u1-efficiency', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb12';
UPDATE questions SET kavram = 'u1-rotor-stator', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb17';
UPDATE questions SET kavram = 'u1-rotor-stator', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb22';
UPDATE questions SET kavram = 'u1-motor', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-motor-anlam';
UPDATE questions SET kavram = 'u1-motor', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-motor-kullanim';
UPDATE questions SET kavram = 'u1-motor', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-motor-tr';
UPDATE questions SET kavram = 'u1-drive', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-drive-anlam';
UPDATE questions SET kavram = 'u1-drive', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-drive-neden';
UPDATE questions SET kavram = 'u1-drive', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-drive-surucusuz';
UPDATE questions SET kavram = 'u1-drive', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-drive-paragraf';
UPDATE questions SET kavram = 'u1-drive', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-drive-ornek';
UPDATE questions SET kavram = 'u1-speed', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-speed-kelime';
UPDATE questions SET kavram = 'u1-speed', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-speed-en';
UPDATE questions SET kavram = 'u1-speed', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-speed-fill';
UPDATE questions SET kavram = 'u1-torque', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-torque-anlam';
UPDATE questions SET kavram = 'u1-torque', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-torque-aciklama';
UPDATE questions SET kavram = 'u1-torque', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-torque-kelime';
UPDATE questions SET kavram = 'u1-torque', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-torque-hiz';
UPDATE questions SET kavram = 'u1-acdc', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-acdc-fark';
UPDATE questions SET kavram = 'u1-acdc', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-acdc-kelime';
UPDATE questions SET kavram = 'u1-acdc', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-acdc-fabrika';
UPDATE questions SET kavram = 'u1-inverter', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-inverter-anlam';
UPDATE questions SET kavram = 'u1-inverter', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-inverter-tr';
UPDATE questions SET kavram = 'u1-efficiency', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-eff-anlam';
UPDATE questions SET kavram = 'u1-efficiency', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-eff-neden';
UPDATE questions SET kavram = 'u1-efficiency', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-eff-kelime';
UPDATE questions SET kavram = 'u1-efficiency', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-eff-en';
UPDATE questions SET kavram = 'u1-rotor-stator', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-stator-anlam';
UPDATE questions SET kavram = 'u1-rotor-stator', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-stator-kelime';
UPDATE questions SET kavram = 'u1-rotor-stator', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-rotor-fill';
UPDATE questions SET kavram = 'u1-rotor-stator', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u1-stator-paragraf';
UPDATE questions SET kavram = 'u2-regen', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa01';
UPDATE questions SET kavram = 'u2-connector', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa06';
UPDATE questions SET kavram = 'u2-range', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa11';
UPDATE questions SET kavram = 'u2-obc', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa16';
UPDATE questions SET kavram = 'u2-charging', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa21';
UPDATE questions SET kavram = 'u2-obc', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb01';
UPDATE questions SET kavram = 'u2-range', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb06';
UPDATE questions SET kavram = 'u2-connector', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb11';
UPDATE questions SET kavram = 'u2-regen', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb16';
UPDATE questions SET kavram = 'u2-obc', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb21';
UPDATE questions SET kavram = 'u2-ev', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-ev-anlam';
UPDATE questions SET kavram = 'u2-ev', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-ev-fark';
UPDATE questions SET kavram = 'u2-ev', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-ev-populer';
UPDATE questions SET kavram = 'u2-ev', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-ev-tr';
UPDATE questions SET kavram = 'u2-charging', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-station-anlam';
UPDATE questions SET kavram = 'u2-charging', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-turler';
UPDATE questions SET kavram = 'u2-charging', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-fast-kelime';
UPDATE questions SET kavram = 'u2-charging', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-yavas-ev';
UPDATE questions SET kavram = 'u2-charging', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-station-paragraf';
UPDATE questions SET kavram = 'u2-time', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-time-kelime';
UPDATE questions SET kavram = 'u2-time', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-kwh-anlam';
UPDATE questions SET kavram = 'u2-time', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-neden-onemli';
UPDATE questions SET kavram = 'u2-time', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-kwh-en';
UPDATE questions SET kavram = 'u2-range', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-range-anlam';
UPDATE questions SET kavram = 'u2-range', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-range-kaygi';
UPDATE questions SET kavram = 'u2-range', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-range-soguk';
UPDATE questions SET kavram = 'u2-range', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-range-fill';
UPDATE questions SET kavram = 'u2-battery', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-battery-anlam';
UPDATE questions SET kavram = 'u2-battery', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-battery-kelime';
UPDATE questions SET kavram = 'u2-regen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-regen-kelime';
UPDATE questions SET kavram = 'u2-regen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-regen-en';
UPDATE questions SET kavram = 'u2-connector', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-connector-anlam';
UPDATE questions SET kavram = 'u2-connector', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-sorunlar';
UPDATE questions SET kavram = 'u2-connector', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-connector-tr';
UPDATE questions SET kavram = 'u2-obc', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-obc-kelime';
UPDATE questions SET kavram = 'u2-obc', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-obc-fill';
UPDATE questions SET kavram = 'u2-proscons', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-dezavantaj';
UPDATE questions SET kavram = 'u2-proscons', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-gelecek';
UPDATE questions SET kavram = 'u2-proscons', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u2-avantaj-en';
UPDATE questions SET kavram = 'u3-sensor-actuator', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa04';
UPDATE questions SET kavram = 'u3-sensor-actuator', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa09';
UPDATE questions SET kavram = 'u3-iot', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa14';
UPDATE questions SET kavram = 'u3-firmware', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa19';
UPDATE questions SET kavram = 'u3-mcu', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa24';
UPDATE questions SET kavram = 'u3-realtime', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb04';
UPDATE questions SET kavram = 'u3-realtime', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb09';
UPDATE questions SET kavram = 'u3-sensor-actuator', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb14';
UPDATE questions SET kavram = 'u3-wireless', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb19';
UPDATE questions SET kavram = 'u3-firmware', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb24';
UPDATE questions SET kavram = 'u3-embedded', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-embedded-anlam';
UPDATE questions SET kavram = 'u3-embedded', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-embedded-ornek';
UPDATE questions SET kavram = 'u3-embedded', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-embedded-tr';
UPDATE questions SET kavram = 'u3-iot', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-iot-anlam';
UPDATE questions SET kavram = 'u3-iot', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-smart-kelime';
UPDATE questions SET kavram = 'u3-iot', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-fayda';
UPDATE questions SET kavram = 'u3-iot', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-iot-en';
UPDATE questions SET kavram = 'u3-mcu', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-mcu-anlam';
UPDATE questions SET kavram = 'u3-mcu', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-mcu-kelime';
UPDATE questions SET kavram = 'u3-mcu', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-mcu-tf';
UPDATE questions SET kavram = 'u3-sensor-actuator', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-sensor-anlam';
UPDATE questions SET kavram = 'u3-sensor-actuator', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-sensor-kelime';
UPDATE questions SET kavram = 'u3-sensor-actuator', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-actuator-tf';
UPDATE questions SET kavram = 'u3-sensor-actuator', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-actuator-en';
UPDATE questions SET kavram = 'u3-firmware', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-firmware-anlam';
UPDATE questions SET kavram = 'u3-firmware', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-firmware-kelime';
UPDATE questions SET kavram = 'u3-firmware', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-firmware-fill';
UPDATE questions SET kavram = 'u3-wireless', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-iletisim';
UPDATE questions SET kavram = 'u3-wireless', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-wireless-kelime';
UPDATE questions SET kavram = 'u3-wireless', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-wireless-paragraf';
UPDATE questions SET kavram = 'u3-realtime', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-realtime-kelime';
UPDATE questions SET kavram = 'u3-realtime', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-data-tr';
UPDATE questions SET kavram = 'u3-risks', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-risk';
UPDATE questions SET kavram = 'u3-risks', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-risk-en';
UPDATE questions SET kavram = 'u3-risks', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u3-urun';
UPDATE questions SET kavram = 'u4-grid', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa02';
UPDATE questions SET kavram = 'u4-offgrid', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa05';
UPDATE questions SET kavram = 'u4-irradiance', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa08';
UPDATE questions SET kavram = 'u4-renewable', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa13';
UPDATE questions SET kavram = 'u4-storage', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa18';
UPDATE questions SET kavram = 'u4-offgrid', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa23';
UPDATE questions SET kavram = 'u4-irradiance', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb03';
UPDATE questions SET kavram = 'u4-inverter', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb08';
UPDATE questions SET kavram = 'u4-inverter', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb13';
UPDATE questions SET kavram = 'u4-irradiance', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb18';
UPDATE questions SET kavram = 'u4-storage', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb23';
UPDATE questions SET kavram = 'u4-panel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-panel-nasil';
UPDATE questions SET kavram = 'u4-panel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-pv-anlam';
UPDATE questions SET kavram = 'u4-panel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-pv-kelime';
UPDATE questions SET kavram = 'u4-panel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-panel-dc';
UPDATE questions SET kavram = 'u4-inverter', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-inverter-neden';
UPDATE questions SET kavram = 'u4-inverter', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-inverter-en';
UPDATE questions SET kavram = 'u4-grid', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-grid-anlam';
UPDATE questions SET kavram = 'u4-grid', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-grid-tr';
UPDATE questions SET kavram = 'u4-grid', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-grid-kelime';
UPDATE questions SET kavram = 'u4-offgrid', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-offgrid-kelime';
UPDATE questions SET kavram = 'u4-offgrid', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-offgrid-tf';
UPDATE questions SET kavram = 'u4-renewable', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-renewable-anlam';
UPDATE questions SET kavram = 'u4-renewable', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-avantaj';
UPDATE questions SET kavram = 'u4-renewable', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-gelecek-en';
UPDATE questions SET kavram = 'u4-renewable', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-gelecek';
UPDATE questions SET kavram = 'u4-irradiance', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-hava';
UPDATE questions SET kavram = 'u4-irradiance', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-sicak';
UPDATE questions SET kavram = 'u4-irradiance', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-irr-fill';
UPDATE questions SET kavram = 'u4-efficiency', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-sinir';
UPDATE questions SET kavram = 'u4-efficiency', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-eff-kelime';
UPDATE questions SET kavram = 'u4-efficiency', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-maliyet-tr';
UPDATE questions SET kavram = 'u4-storage', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-storage-anlam';
UPDATE questions SET kavram = 'u4-storage', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-storage-kelime';
UPDATE questions SET kavram = 'u4-farm', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-farm-anlam';
UPDATE questions SET kavram = 'u4-farm', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u4-farm-paragraf';
UPDATE questions SET kavram = 'u5-ilan', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa03';
UPDATE questions SET kavram = 'u5-basvuru', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa10';
UPDATE questions SET kavram = 'u5-ilan', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa15';
UPDATE questions SET kavram = 'u5-basvuru', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa20';
UPDATE questions SET kavram = 'u5-ilan', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qa25';
UPDATE questions SET kavram = 'u5-ilan', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb05';
UPDATE questions SET kavram = 'u5-basvuru', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb10';
UPDATE questions SET kavram = 'u5-basvuru', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb15';
UPDATE questions SET kavram = 'u5-ilan', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb20';
UPDATE questions SET kavram = 'u5-basvuru', yedek = 0, etiketler = 'cikmis' WHERE id = 'ie-qb25';
UPDATE questions SET kavram = 'u5-ilan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u5-req-anlam';
UPDATE questions SET kavram = 'u5-ilan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u5-pref-kelime';
UPDATE questions SET kavram = 'u5-ilan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u5-resp-kelime';
UPDATE questions SET kavram = 'u5-ilan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u5-pozisyon-tr';
UPDATE questions SET kavram = 'u5-ilan', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u5-ilan-tf';
UPDATE questions SET kavram = 'u5-basvuru', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u5-fit-anlam';
UPDATE questions SET kavram = 'u5-basvuru', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u5-meet-en';
UPDATE questions SET kavram = 'u5-basvuru', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u5-applicant-kelime';
UPDATE questions SET kavram = 'u5-basvuru', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u5-improve-tr';
UPDATE questions SET kavram = 'u5-basvuru', yedek = 0, etiketler = 'turetilmis' WHERE id = 'ie-u5-teamwork-fill';
