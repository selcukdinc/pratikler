-- Bu dosya scripts/sorular-sql.ts ile icerik/fizik/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('fz-u1', 'fizik', 'Ölçme ve Birim Sistemleri', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('fz-u2', 'fizik', 'Vektörler', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('fz-u3', 'fizik', 'Bir Boyutta Hareket', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('fz-u4', 'fizik', 'İki Boyutta Hareket', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('fz-u5', 'fizik', 'Newton Kanunları', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-s01', 'fizik', 'fz-u1', 1, 'mcq', 'original', '$v = v_0 + at$ ifadesinin boyutunun doğruluğunu gösteriniz. Buna göre $at$ teriminin boyutu nedir?', '{"choices":["$[L/T]$; hızın boyutuyla aynı olduğu için denklem tutarlıdır","$[L/T^2]$; denklem tutarsızdır","$[L]$; denklem tutarsızdır","$[L\\cdot T]$; denklem tutarsızdır","$[L/T]$; ama $v_0$ boyutsuz olduğu için denklem tutarsızdır"]}', '{"index":0}', 'Bir eşitliğin bütün terimleri aynı boyutta olmalıdır; toplanan terimler de birbiriyle aynı boyutta olmalıdır. Her terimin boyutunu temel boyutlar ($L$, $T$) cinsinden yaz ve karşılaştır.

---

**Sol taraf:** $v$ hızdır: $$[v] = \frac{L}{T}$$

---

**İlk terim:** $v_0$ da hızdır: $$[v_0] = \frac{L}{T}$$

---

**İkinci terim:** ivme $[a] = L/T^2$, zaman $[t] = T$. Çarpım: $$[at] = \frac{L}{T^2}\cdot T = \frac{L}{T}$$

---

**Karşılaştır:** $$\frac{L}{T} = \frac{L}{T} + \frac{L}{T}$$ Üç terim de hız boyutunda, eşitlik boyutça doğrudur.', 1, 'Sunu, Bölüm 1, Örnek 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-s02', 'fizik', 'fz-u1', 1, 'mcq', 'original', 'Katı bir kübün kütlesi 856 g ve her bir kenarı 5,35 cm uzunluğa sahiptir. SI birim sisteminde kübün yoğunluğunu bulunuz.', '{"choices":["$\\approx 5{,}59\\times 10^{3}\\ \\mathrm{kg/m^3}$","$\\approx 5{,}59\\times 10^{-3}\\ \\mathrm{kg/m^3}$","$\\approx 5{,}59\\ \\mathrm{kg/m^3}$","$\\approx 160\\ \\mathrm{kg/m^3}$","$\\approx 5{,}59\\times 10^{6}\\ \\mathrm{kg/m^3}$"]}', '{"index":0}', 'Önce kütleyi kg''a, kenarı m''ye çevir; hacmi kenarın küpüyle bul; sonra $\rho = m/V$. Not: sunu sonucu $5{,}59\times10^{-3}\ \mathrm{kg/m^3}$ yazmış; işlem $5{,}59\times10^{3}\ \mathrm{kg/m^3}$ verir ($5{,}59\ \mathrm{g/cm^3}$, demirden biraz hafif).

---

**Kütle:** $$m = 856\ \mathrm{g}\times 10^{-3}\ \frac{\mathrm{kg}}{\mathrm{g}} = 0{,}856\ \mathrm{kg}$$

---

**Kenar:** $$L = 5{,}35\ \mathrm{cm}\times 10^{-2}\ \frac{\mathrm{m}}{\mathrm{cm}} = 5{,}35\times 10^{-2}\ \mathrm{m}$$

---

**Hacim:** $$V = L^3 = (5{,}35\times 10^{-2})^3\ \mathrm{m^3} \approx 1{,}53\times 10^{-4}\ \mathrm{m^3}$$ Dikkat: $10^{-2}$''nin küpü $10^{-6}$''dır.

---

**Yoğunluk:** $$\rho = \frac{m}{V} = \frac{0{,}856}{1{,}53\times 10^{-4}} \approx 5{,}59\times 10^{3}\ \mathrm{kg/m^3}$$

---

**Kontrol:** g/cm³ ile: $$\rho = \frac{856}{5{,}35^3} = \frac{856}{153} \approx 5{,}59\ \mathrm{g/cm^3}$$ $1\ \mathrm{g/cm^3} = 1000\ \mathrm{kg/m^3}$ olduğundan $5{,}59\times10^3\ \mathrm{kg/m^3}$ ✓', 2, 'Sunu, Bölüm 1, Örnek 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t01', 'fizik', 'fz-u1', 1, 'mcq', 'derived', 'Mekanikte kullanılan üç temel büyüklük hangileridir?', '{"choices":["Uzunluk, kütle, zaman","Uzunluk, kuvvet, zaman","Kütle, hız, zaman","Uzunluk, kütle, sıcaklık","Kuvvet, enerji, zaman"]}', '{"index":0}', 'Mekanikteki bütün nicelikler uzunluk $[L]$, kütle $[M]$ ve zaman $[T]$ cinsinden yazılabilir. Hız, kuvvet ve enerji bunlardan türetilir.', 1, '1. bölüm, Temel büyüklükler ve SI birimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t02', 'fizik', 'fz-u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi SI sistemindeki 7 temel birimden biri değildir?', '{"choices":["Newton","Kelvin","Amper","Mol","Kandela"]}', '{"index":0}', 'SI''nın 7 temel birimi: metre, kilogram, saniye, amper, kelvin, mol, kandela. Newton türetilmiş bir birimdir: $1\ \mathrm{N} = 1\ \mathrm{kg\cdot m/s^2}$.', 1, '1. bölüm, Temel büyüklükler ve SI birimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t03', 'fizik', 'fz-u1', 1, 'fill', 'derived', 'SI sisteminde sıcaklığın birimi ____, madde miktarının birimi ____''dür.

Boşluk 1: sıcaklık, Boşluk 2: madde miktarı', '{"blanks":2}', '{"blanks":[["kelvin","K"],["mol"]]}', 'Sıcaklık **kelvin** (K), madde miktarı **mol**. Diğer temel birimler: metre (m), kilogram (kg), saniye (s), amper (A), kandela (cd).', 1, '1. bölüm, Temel büyüklükler ve SI birimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t04', 'fizik', 'fz-u1', 1, 'mcq', 'derived', 'Sunudaki tanıma göre 1 saniye nasıl tanımlanır?', '{"choices":["Sezyum-133 atomunun 9 192 631 770 titreşiminin süresi","Bir günün 86 400''de biri","Işığın 1 metreyi alma süresi","Bir sarkacın bir tam salınım süresi","Dünyanın Güneş çevresindeki turunun $3{,}2\\times10^{7}$''de biri"]}', '{"index":0}', '1967''den beri saniye atomik saatle tanımlanır: sezyum-133 atomunun 9 192 631 770 titreşimi 1 s''dir. Metre de buna dayanır: ışığın vakumda $\tfrac{1}{299\,792\,458}$ saniyede aldığı yol.', 2, '1. bölüm, Temel büyüklükler ve SI birimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t05', 'fizik', 'fz-u1', 1, 'tf', 'derived', 'Bir ölçümün sonucu birimi yazılmadan da tam olarak anlaşılabilir; örneğin "masanın boyu 90" demek yeterlidir.', '{}', '{"value":false}', 'Her ölçüm sonucu birimiyle verilmelidir. "90" santimetre mi, inç mi belli değildir; "90 cm" anlamlıdır.', 1, '1. bölüm, Temel büyüklükler ve SI birimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t06', 'fizik', 'fz-u1', 1, 'mcq', 'derived', '"mikro" ön ekinin anlamı ve sembolü nedir?', '{"choices":["$10^{-6}$, $\\mu$","$10^{-3}$, m","$10^{-9}$, n","$10^{6}$, M","$10^{-12}$, p"]}', '{"index":0}', 'Alt katlar: mili (m) $10^{-3}$, mikro ($\mu$) $10^{-6}$, nano (n) $10^{-9}$, piko (p) $10^{-12}$. Üst katlarda mega (M) $10^{6}$; büyük M ile küçük m''yi karıştırma.', 1, '1. bölüm, 10''un katları ve birim çevirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t07', 'fizik', 'fz-u1', 1, 'mcq', 'derived', '72 km/sa kaç m/s''dir?', '{"choices":["20 m/s","72 000 m/s","259,2 m/s","7,2 m/s","2 m/s"]}', '{"index":0}', '1 km = 1000 m, 1 saat = 3600 s. Birimleri kesir gibi çarpanlarla çevir; kısa yol: km/sa değerini 3,6''ya böl.

---

**Çarpanlar:** $$72\ \frac{\mathrm{km}}{\mathrm{sa}}\times\frac{1000\ \mathrm{m}}{1\ \mathrm{km}}\times\frac{1\ \mathrm{sa}}{3600\ \mathrm{s}}$$

---

**Hesap:** $$\frac{72\,000}{3600} = 20\ \mathrm{m/s}$$

---

**Tuzak:** $72\times 3{,}6 = 259{,}2$; çevirme yönünü ters almak.', 2, '1. bölüm, 10''un katları ve birim çevirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t08', 'fizik', 'fz-u1', 1, 'mcq', 'derived', '1 cm³ kaç m³''tür?', '{"choices":["$10^{-6}\\ \\mathrm{m^3}$","$10^{-2}\\ \\mathrm{m^3}$","$10^{-3}\\ \\mathrm{m^3}$","$10^{-4}\\ \\mathrm{m^3}$","$10^{-9}\\ \\mathrm{m^3}$"]}', '{"index":0}', 'Hacim uzunluğun küpüdür; çevirme çarpanının da küpü alınır.

---

**Uzunluk:** $$1\ \mathrm{cm} = 10^{-2}\ \mathrm{m}$$

---

**Küp:** $$1\ \mathrm{cm^3} = (10^{-2}\ \mathrm{m})^3 = 10^{-6}\ \mathrm{m^3}$$', 2, '1. bölüm, 10''un katları ve birim çevirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t09', 'fizik', 'fz-u1', 1, 'mcq', 'derived', 'Bir yarış pisti 5 mil uzunluğundadır. Bu uzunluk kaç km''dir? (1 mil = 1609 m)', '{"choices":["≈ 8,0 km","≈ 3,1 km","8045 km","≈ 0,8 km","≈ 80 km"]}', '{"index":0}', '1 mil = 1,609 km. Mil, km''den uzun olduğu için km cinsinden sayı büyümelidir.

---

**Çarp:** $$5\times 1609\ \mathrm{m} = 8045\ \mathrm{m}$$

---

**km:** $$8045\ \mathrm{m} = 8{,}045\ \mathrm{km} \approx 8{,}0\ \mathrm{km}$$', 2, '1. bölüm, 10''un katları ve birim çevirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t10', 'fizik', 'fz-u1', 1, 'fill', 'derived', '1 inç 2,54 cm''dir. 10 inç kaç santimetredir? (Yalnız sayıyı yazın.)', '{"blanks":1}', '{"blanks":[["25,4","25.4","25,4 cm"]]}', '$10\times 2{,}54\ \mathrm{cm} = 25{,}4\ \mathrm{cm}$.', 2, '1. bölüm, 10''un katları ve birim çevirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t11', 'fizik', 'fz-u1', 1, 'mcq', 'derived', '5 mg kütle kaç kg''dır?', '{"choices":["$5\\times10^{-6}\\ \\mathrm{kg}$","$5\\times10^{-3}\\ \\mathrm{kg}$","$5\\times10^{-9}\\ \\mathrm{kg}$","$5\\times10^{3}\\ \\mathrm{kg}$","$5\\times10^{-4}\\ \\mathrm{kg}$"]}', '{"index":0}', 'Mili $10^{-3}$ demektir: $1\ \mathrm{mg} = 10^{-3}\ \mathrm{g}$. Gramı da kg''a çevirmek için bir $10^{-3}$ daha gerekir.

---

**mg → g:** $$5\ \mathrm{mg} = 5\times10^{-3}\ \mathrm{g}$$

---

**g → kg:** $$5\times10^{-3}\times10^{-3}\ \mathrm{kg} = 5\times10^{-6}\ \mathrm{kg}$$', 2, '1. bölüm, 10''un katları ve birim çevirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t12', 'fizik', 'fz-u1', 1, 'mcq', 'derived', 'İvmenin boyutu nedir?', '{"choices":["$[L/T^2]$","$[L/T]$","$[L\\cdot T^2]$","$[M\\cdot L/T^2]$","$[L^2/T]$"]}', '{"index":0}', 'İvme hızın zamana bölümüdür: $$[a] = \frac{L/T}{T} = \frac{L}{T^2}$$ $[M\cdot L/T^2]$ ise kuvvetin boyutudur.', 1, '1. bölüm, Boyut ve boyut analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t13', 'fizik', 'fz-u1', 1, 'mcq', 'derived', '$x$ uzunluk, $v$ hız, $t$ zaman ve $a$ ivme olmak üzere aşağıdaki eşitliklerden hangisi boyutça tutarsızdır?', '{"choices":["$x = v\\,t^2$","$x = v\\,t$","$v^2 = 2ax$","$x = \\tfrac{1}{2}at^2$","$v = at$"]}', '{"index":0}', 'Her terimin boyutunu yaz: iki taraf aynı çıkmazsa eşitlik kesinlikle yanlıştır. (Boyutça tutarlı olmak doğruluğun garantisi değildir; sayısal çarpanları denetlemez.)

---

**$x = vt^2$:** $$\frac{L}{T}\cdot T^2 = L\cdot T \neq L$$ Tutarsız.

---

**$v^2 = 2ax$:** $$\left(\frac{L}{T}\right)^2 = \frac{L^2}{T^2},\qquad \frac{L}{T^2}\cdot L = \frac{L^2}{T^2}$$ Tutarlı.

---

**$x = \tfrac12 at^2$:** $$\frac{L}{T^2}\cdot T^2 = L$$ Tutarlı ($\tfrac12$ boyutsuzdur).', 2, '1. bölüm, Boyut ve boyut analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t14', 'fizik', 'fz-u1', 1, 'tf', 'derived', 'Boyut analizi bir eşitlikteki $\tfrac12$ veya $2\pi$ gibi sayısal çarpanların doğru olup olmadığını gösterir.', '{}', '{"value":false}', 'Sayısal çarpanlar boyutsuzdur; boyut analizi onları göremez. $x = at^2$ ve $x = \tfrac12 at^2$ ikisi de boyutça tutarlıdır ama yalnız ikincisi doğrudur.', 2, '1. bölüm, Boyut ve boyut analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t15', 'fizik', 'fz-u1', 1, 'mcq', 'derived', 'Bir sarkacın periyodu $T$''nin, ipin uzunluğu $\ell$ ve yerçekimi ivmesi $g$''ye $T \propto \ell^{m} g^{n}$ biçiminde bağlı olduğu biliniyor. Boyut analizine göre $m$ ve $n$ nedir?', '{"choices":["$m = \\tfrac12,\\ n = -\\tfrac12$","$m = 1,\\ n = -1$","$m = -\\tfrac12,\\ n = \\tfrac12$","$m = \\tfrac12,\\ n = \\tfrac12$","$m = 2,\\ n = -1$"]}', '{"index":0}', 'İki tarafın boyutlarını eşitle: $$[T] = L^{m}\left(\frac{L}{T^2}\right)^{n}$$ $L$''nin ve $T$''nin üsleri ayrı ayrı eşit olmalı.

---

**Sağ taraf:** $$L^{m}\cdot L^{n}\cdot T^{-2n} = L^{m+n}\,T^{-2n}$$

---

**$T$ için:** sol tarafta $T^1$ var: $$-2n = 1 \;\Rightarrow\; n = -\tfrac12$$

---

**$L$ için:** sol tarafta $L$ yok: $$m + n = 0 \;\Rightarrow\; m = \tfrac12$$

---

**Sonuç:** $$T \propto \sqrt{\frac{\ell}{g}}$$ Gerçek formül $T = 2\pi\sqrt{\ell/g}$; $2\pi$''yi boyut analizi veremez.', 3, '1. bölüm, Boyut ve boyut analizi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t16', 'fizik', 'fz-u1', 1, 'mcq', 'derived', 'Alüminyumun yoğunluğu 2,7 g/cm³''tür. 20 cm³ hacmindeki bir alüminyum parçanın kütlesi nedir?', '{"choices":["54 g","7,4 g","22,7 g","540 g","0,135 g"]}', '{"index":0}', '$\rho = m/V$''den $m = \rho V$.

---

**Hesap:** $$m = 2{,}7\ \mathrm{g/cm^3}\times 20\ \mathrm{cm^3} = 54\ \mathrm{g}$$', 2, '1. bölüm, Yoğunluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t17', 'fizik', 'fz-u1', 1, 'mcq', 'derived', 'Kurşunun yoğunluğu 11,3 g/cm³''tür. Bu değer SI biriminde kaçtır?', '{"choices":["11 300 kg/m³","11,3 kg/m³","0,0113 kg/m³","1130 kg/m³","113 000 kg/m³"]}', '{"index":0}', 'g/cm³''ten kg/m³''e geçerken 1000 ile çarpılır.

---

**Çevirme:** $$1\ \frac{\mathrm{g}}{\mathrm{cm^3}} = \frac{10^{-3}\ \mathrm{kg}}{10^{-6}\ \mathrm{m^3}} = 1000\ \frac{\mathrm{kg}}{\mathrm{m^3}}$$

---

**Sonuç:** $$11{,}3\times 1000 = 11\,300\ \mathrm{kg/m^3}$$', 2, '1. bölüm, Yoğunluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t18', 'fizik', 'fz-u1', 1, 'tf', 'derived', 'Alüminyum ile kurşunun yoğunlukları arasındaki fark yalnızca atom kütlelerinin farklı olmasından kaynaklanır.', '{}', '{"value":false}', 'Atom kütlesi farkı (Al: 27, Pb: 207) yoğunluk farkının bir kısmını açıklar. Kalanı kristal yapıdaki atomlar arası uzaklık ve diziliş farkından gelir.', 2, '1. bölüm, Yoğunluk', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t19', 'fizik', 'fz-u1', 1, 'mcq', 'derived', '0,00000039 sayısında kaç anlamlı rakam vardır?', '{"choices":["2","8","9","7","3"]}', '{"index":0}', 'Baştaki sıfırlar yalnız ondalık virgülün yerini gösterir, anlamlı değildir. $3{,}9\times10^{-7}$ yazınca iki anlamlı rakam olduğu görülür.', 1, '1. bölüm, Anlamlı rakamlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t20', 'fizik', 'fz-u1', 1, 'mcq', 'derived', 'Uzunluğu 16,3 cm, genişliği 4,5 cm ölçülen bir plakanın alanı anlamlı rakam kurallarına göre nasıl yazılmalıdır?', '{"choices":["73 cm²","73,35 cm²","73,4 cm²","70 cm²","73,3 cm²"]}', '{"index":0}', 'Çarpma ve bölmede sonuç, en az anlamlı rakamı olan çarpan kadar anlamlı rakam taşır.

---

**Çarpım:** $$16{,}3\times 4{,}5 = 73{,}35$$

---

**Anlamlı rakamlar:** 16,3 üç, 4,5 iki anlamlı rakamlı. Sonuç iki anlamlı rakamla yazılır.

---

**Sonuç:** $$A = 73\ \mathrm{cm^2}$$', 2, '1. bölüm, Anlamlı rakamlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t21', 'fizik', 'fz-u1', 1, 'mcq', 'derived', '9,12 − 5,4917 işleminin sonucu anlamlı rakam kurallarına göre nasıl yazılır?', '{"choices":["3,63","3,6283","3,628","3,6","4"]}', '{"index":0}', 'Toplama ve çıkarmada sonuç, ondalık basamak sayısı en az olan terim kadar ondalık basamakla yazılır.

---

**İşlem:** $$9{,}12 - 5{,}4917 = 3{,}6283$$

---

**Basamak:** 9,12''nin iki ondalık basamağı var; sonuç iki ondalığa yuvarlanır: 3,63.', 2, '1. bölüm, Anlamlı rakamlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u1-t22', 'fizik', 'fz-u1', 1, 'tf', 'derived', '2,70 sayısının sonundaki sıfır anlamlıdır; sayı üç anlamlı rakam içerir.', '{}', '{"value":true}', 'Ondalık kısımda sona yazılan sıfır ölçülmüş demektir: 2,70, ölçümün yüzde birler basamağına kadar yapıldığını söyler. Bu yüzden üç anlamlı rakam vardır.', 2, '1. bölüm, Anlamlı rakamlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s01', 'fizik', 'fz-u2', 2, 'mcq', 'original', 'Bir noktanın Kartezyen koordinatları $(x, y) = (-3{,}5;\ -2{,}5)\ \mathrm{m}$ olarak verilmektedir. Bu noktanın kutupsal koordinatlarını $(r, \theta)$ bulun.', '{"choices":["$r = 4{,}3\\ \\mathrm{m}$; $\\theta = 216^\\circ$","$r = 4{,}3\\ \\mathrm{m}$; $\\theta = 36^\\circ$","$r = 6{,}0\\ \\mathrm{m}$; $\\theta = 216^\\circ$","$r = 4{,}3\\ \\mathrm{m}$; $\\theta = 144^\\circ$","$r = 18{,}5\\ \\mathrm{m}$; $\\theta = 216^\\circ$"]}', '{"index":0}', 'Kutupsal koordinatta $r$ orijine uzaklık, $\theta$ ise $+x$ ekseninden saat yönünün tersine ölçülen açıdır. $\tan\theta$ iki açı verir; doğrusunu noktanın hangi çeyrekte olduğu seçer.

---

**Uzaklık:** $$r = \sqrt{x^2 + y^2} = \sqrt{(-3{,}5)^2 + (-2{,}5)^2} = \sqrt{12{,}25 + 6{,}25} = \sqrt{18{,}5} \approx 4{,}3\ \mathrm{m}$$

---

**Açının tanjantı:** $$\tan\theta = \frac{y}{x} = \frac{-2{,}5}{-3{,}5} = 0{,}714$$ Hesap makinesi $\tan^{-1}(0{,}714) \approx 36^\circ$ verir.

---

**Çeyreği kontrol et:** $x$ ve $y$ ikisi de negatif, yani nokta **üçüncü çeyrekte**. $36^\circ$ birinci çeyrekte kalır; tanjantı aynı olan üçüncü çeyrek açısı $$\theta = 180^\circ + 36^\circ = 216^\circ$$

---

**Sonuç:** $(r, \theta) = (4{,}3\ \mathrm{m};\ 216^\circ)$.', 2, 'Sunu, Bölüm 2, Örnek 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s02', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$xy$ düzleminde yer alan ve $\vec{A} = 2\hat{\imath} + 2\hat{\jmath}\ \mathrm{m}$ ve $\vec{B} = 2\hat{\imath} - 4\hat{\jmath}\ \mathrm{m}$ ile verilen $\vec{A}$ ve $\vec{B}$ vektörlerinin toplamını (büyüklük ve $+x$ ekseniyle yaptığı açı) bulunuz.', '{"choices":["$|\\vec{R}| = \\sqrt{20} \\approx 4{,}5\\ \\mathrm{m}$; $\\theta = 333^\\circ$","$|\\vec{R}| = \\sqrt{20} \\approx 4{,}5\\ \\mathrm{m}$; $\\theta = 27^\\circ$","$|\\vec{R}| = 6\\ \\mathrm{m}$; $\\theta = 333^\\circ$","$|\\vec{R}| = \\sqrt{20} \\approx 4{,}5\\ \\mathrm{m}$; $\\theta = 153^\\circ$","$|\\vec{R}| = \\sqrt{52} \\approx 7{,}2\\ \\mathrm{m}$; $\\theta = 304^\\circ$"]}', '{"index":0}', 'Vektörler bileşen bileşen toplanır: aynı birim vektörün katsayıları kendi aralarında toplanır. Sonra büyüklük Pisagor''la, yön tanjantla bulunur.

---

**Bileşenleri yaz:** $A_x = 2\ \mathrm{m}$, $A_y = 2\ \mathrm{m}$; $B_x = 2\ \mathrm{m}$, $B_y = -4\ \mathrm{m}$.

---

**Topla:** $$\vec{R} = \vec{A} + \vec{B} = (2 + 2)\,\hat{\imath} + (2 - 4)\,\hat{\jmath} = 4\hat{\imath} - 2\hat{\jmath}\ \mathrm{m}$$ Yani $R_x = 4\ \mathrm{m}$, $R_y = -2\ \mathrm{m}$.

---

**Büyüklük:** $$|\vec{R}| = \sqrt{R_x^2 + R_y^2} = \sqrt{16 + 4} = \sqrt{20} \approx 4{,}5\ \mathrm{m}$$

---

**Yön:** $$\tan\theta = \frac{R_y}{R_x} = \frac{-2}{4} = -0{,}5 \quad\Rightarrow\quad \tan^{-1}(-0{,}5) \approx -27^\circ$$ $R_x$ pozitif, $R_y$ negatif olduğu için vektör **dördüncü çeyrekte**; $+x$''ten saat yönünün tersine ölçersek $\theta = 360^\circ - 27^\circ = 333^\circ$.', 2, 'Sunu, Bölüm 2, Örnek 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s03a', 'fizik', 'fz-u2', 2, 'mcq', 'original', 'Şekilde boyları ve açıları belirtilmiş olan $\vec{A}$, $\vec{B}$, $\vec{C}$, $\vec{D}$ vektörlerinin bileşenlerini hesaplayın. Buna göre $\vec{A}$ vektörünün bileşenleri nedir? ($\cos 60^\circ = 0{,}5$; $\sin 60^\circ = 0{,}87$)

[[G-S2-01]]', '{"choices":["$A_x = 5$; $A_y = 8{,}7$","$A_x = 8{,}7$; $A_y = 5$","$A_x = 5$; $A_y = -8{,}7$","$A_x = 10$; $A_y = 0$","$A_x = 8{,}7$; $A_y = -5$"]}', '{"index":0}', 'Bileşen formülleri $A_x = A\cos\theta$ ve $A_y = A\sin\theta$''daki $\theta$, **$+x$ ekseninden** ölçülen açıdır. Şekilde açı $y$ ekseninden verildiyse önce $+x$''e göre açıya çevir.

---

**Açıyı $+x$ eksenine göre yaz:** $\vec{A}$, $y$ ekseninden $30^\circ$ sağda. $+x$ ekseniyle yaptığı açı $$\theta = 90^\circ - 30^\circ = 60^\circ$$

---

**$x$ bileşeni:** $$A_x = A\cos 60^\circ = 10 \times 0{,}5 = 5$$

---

**$y$ bileşeni:** $$A_y = A\sin 60^\circ = 10 \times 0{,}87 = 8{,}7$$

---

**Kontrol:** $\vec{A}$ birinci çeyrekte, iki bileşen de pozitif olmalı. $$\sqrt{5^2 + 8{,}7^2} \approx 10\ ✓$$', 1, 'Sunu, Bölüm 2, Örnek 3 (A)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s03b', 'fizik', 'fz-u2', 2, 'mcq', 'original', 'Şekilde boyları ve açıları belirtilmiş olan $\vec{A}$, $\vec{B}$, $\vec{C}$, $\vec{D}$ vektörlerinin bileşenlerini hesaplayın. Buna göre $\vec{B}$ vektörünün bileşenleri nedir? ($\cos 37^\circ = 0{,}8$; $\sin 37^\circ = 0{,}6$)

[[G-S2-01]]', '{"choices":["$B_x = -4{,}8$; $B_y = 3{,}6$","$B_x = 4{,}8$; $B_y = 3{,}6$","$B_x = -3{,}6$; $B_y = 4{,}8$","$B_x = -4{,}8$; $B_y = -3{,}6$","$B_x = 3{,}6$; $B_y = -4{,}8$"]}', '{"index":0}', '$\vec{B}$ ikinci çeyrekte: $x$ bileşeni negatif, $y$ bileşeni pozitif çıkmalı. $+x$''ten ölçülen açıyla formül işareti kendiliğinden verir.

---

**Açıyı $+x$ eksenine göre yaz:** $\vec{B}$, $y$ ekseninden $53^\circ$ solda. $+x$ ekseniyle açısı $$\theta = 90^\circ + 53^\circ = 143^\circ = 180^\circ - 37^\circ$$

---

**$x$ bileşeni:** $$B_x = B\cos(180^\circ - 37^\circ) = 6\,(-\cos 37^\circ) = -6 \times 0{,}8 = -4{,}8$$

---

**$y$ bileşeni:** $$B_y = B\sin(180^\circ - 37^\circ) = 6\sin 37^\circ = 6 \times 0{,}6 = 3{,}6$$

---

**Kontrol:** İkinci çeyrek: $(-, +)$ ✓', 2, 'Sunu, Bölüm 2, Örnek 3 (B)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s03c', 'fizik', 'fz-u2', 2, 'mcq', 'original', 'Şekilde boyları ve açıları belirtilmiş olan $\vec{A}$, $\vec{B}$, $\vec{C}$, $\vec{D}$ vektörlerinin bileşenlerini hesaplayın. Buna göre $\vec{C}$ ve $\vec{D}$ vektörlerinin bileşenleri nedir? ($\cos 25^\circ = 0{,}91$; $\sin 25^\circ = 0{,}42$)

[[G-S2-01]]', '{"choices":["$C_x = -7{,}3$; $C_y = -3{,}4$; $D_x = 0$; $D_y = -3$","$C_x = -3{,}4$; $C_y = -7{,}3$; $D_x = 0$; $D_y = -3$","$C_x = 7{,}3$; $C_y = 3{,}4$; $D_x = 0$; $D_y = 3$","$C_x = -7{,}3$; $C_y = -3{,}4$; $D_x = -3$; $D_y = 0$","$C_x = -7{,}3$; $C_y = 3{,}4$; $D_x = 0$; $D_y = -3$"]}', '{"index":0}', '$\vec{C}$ üçüncü çeyrekte, iki bileşeni de negatif. Bir eksenin üzerinde duran vektörün öbür eksendeki bileşeni sıfırdır.

---

**$\vec{C}$''nin açısı:** $\vec{C}$, $-x$ ekseninden $25^\circ$ aşağıda. Bu durumda büyüklüğü $-x$ yönüne göre bileşenlere ayırmak kolaydır.

---

**$C_x$:** $$C_x = -C\cos 25^\circ = -8 \times 0{,}91 \approx -7{,}3$$

---

**$C_y$:** $$C_y = -C\sin 25^\circ = -8 \times 0{,}42 \approx -3{,}4$$

---

**$\vec{D}$:** $\vec{D}$ tamamen $-y$ yönünde: $D_x = 0$ ve $D_y = -3$.', 2, 'Sunu, Bölüm 2, Örnek 3 (C ve D)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s04a', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$\vec{F}$ vektörünün bileşenleri $F_x = 3$, $F_y = -4$ olarak verilmiştir. Bu vektörün şiddetini ve yönünü ($+x$ ekseniyle açısını) bulun.', '{"choices":["$F = 5$; $\\theta = -53^\\circ$","$F = 5$; $\\theta = 127^\\circ$","$F = 7$; $\\theta = -53^\\circ$","$F = 5$; $\\theta = -37^\\circ$","$F = 1$; $\\theta = 53^\\circ$"]}', '{"index":0}', 'Şiddet $F = \sqrt{F_x^2 + F_y^2}$. $\tan\theta = F_y/F_x$ iki açı verir (aralarında $180^\circ$ fark var); hangisi olduğuna bileşenlerin işaretine bakarak karar verilir.

---

**Şiddet:** $$F = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

---

**Tanjant:** $$\tan\theta = \frac{F_y}{F_x} = \frac{-4}{3} \approx -1{,}33$$ Tanjantı $-1{,}33$ olan iki açı: $+127^\circ$ ve $-53^\circ$.

---

**Çeyrek:** $F_x$ pozitif, $F_y$ negatif, yani vektör **dördüncü çeyrekte**. $127^\circ$ ikinci çeyrekte kalır, o halde $\theta = -53^\circ$ (yani $307^\circ$).', 2, 'Sunu, Bölüm 2, Örnek 4 (F)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s04b', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$\vec{G}$ vektörünün bileşenleri $G_x = -5$, $G_y = -12$ olarak verilmiştir. Bu vektörün şiddetini ve yönünü ($+x$ ekseniyle açısını) bulun.', '{"choices":["$G = 13$; $\\theta = -113^\\circ$","$G = 13$; $\\theta = 67^\\circ$","$G = 17$; $\\theta = -113^\\circ$","$G = 13$; $\\theta = 113^\\circ$","$G = 13$; $\\theta = -67^\\circ$"]}', '{"index":0}', 'Tanjant pozitif çıksa bile vektör birinci çeyrekte olmayabilir: iki bileşen de negatifse açı üçüncü çeyrektedir.

---

**Şiddet:** $$G = \sqrt{(-5)^2 + (-12)^2} = \sqrt{25 + 144} = \sqrt{169} = 13$$

---

**Tanjant:** $$\tan\theta = \frac{G_y}{G_x} = \frac{-12}{-5} = 2{,}4$$ Tanjantı $2{,}4$ olan iki açı: $+67^\circ$ ve $-113^\circ$ (ya da $247^\circ$).

---

**Çeyrek:** İki bileşen de negatif, vektör **üçüncü çeyrekte**. Bu yüzden $\theta = -113^\circ$.', 2, 'Sunu, Bölüm 2, Örnek 4 (G)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s05a', 'fizik', 'fz-u2', 2, 'mcq', 'original', 'Şekilde $\vec{A}$ ve $\vec{B}$ vektörlerinin boyları ve açıları verilmiştir. Bileşenleri hesaplayın ve bu iki vektörü birim vektörler cinsinden ifade edin. ($\sin 53^\circ = 0{,}8$; $\cos 53^\circ = 0{,}6$)

[[G-S2-02]]', '{"choices":["$\\vec{A} = 3\\hat{\\imath} + 4\\hat{\\jmath}$; $\\vec{B} = -6{,}4\\hat{\\imath} - 4{,}8\\hat{\\jmath}$","$\\vec{A} = 4\\hat{\\imath} + 3\\hat{\\jmath}$; $\\vec{B} = -6{,}4\\hat{\\imath} - 4{,}8\\hat{\\jmath}$","$\\vec{A} = 3\\hat{\\imath} + 4\\hat{\\jmath}$; $\\vec{B} = -4{,}8\\hat{\\imath} - 6{,}4\\hat{\\jmath}$","$\\vec{A} = 3\\hat{\\imath} + 4\\hat{\\jmath}$; $\\vec{B} = 6{,}4\\hat{\\imath} + 4{,}8\\hat{\\jmath}$","$\\vec{A} = 3\\hat{\\imath} - 4\\hat{\\jmath}$; $\\vec{B} = -6{,}4\\hat{\\imath} + 4{,}8\\hat{\\jmath}$"]}', '{"index":0}', 'Her vektör $\vec{A} = A_x\hat{\imath} + A_y\hat{\jmath}$ biçiminde yazılır. $\vec{B}$ üçüncü çeyrekte olduğu için iki bileşeni de negatiftir.

---

**$\vec{A}$''nın bileşenleri:** $$A_x = 5\cos 53^\circ = 5 \times 0{,}6 = 3, \qquad A_y = 5\sin 53^\circ = 5 \times 0{,}8 = 4$$

---

**$\vec{B}$''nin bileşenleri:** $\vec{B}$, $-x$ ekseninden $37^\circ$ aşağıda: $$B_x = -8\cos 37^\circ = -8 \times 0{,}8 = -6{,}4, \qquad B_y = -8\sin 37^\circ = -8 \times 0{,}6 = -4{,}8$$

---

**Birim vektörlerle:** $$\vec{A} = 3\hat{\imath} + 4\hat{\jmath}, \qquad \vec{B} = -6{,}4\hat{\imath} - 4{,}8\hat{\jmath}$$', 2, 'Sunu, Bölüm 2, Örnek 5 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s05b', 'fizik', 'fz-u2', 2, 'mcq', 'original', 'Şekildeki $\vec{A} = 3\hat{\imath} + 4\hat{\jmath}$ ve $\vec{B} = -6{,}4\hat{\imath} - 4{,}8\hat{\jmath}$ vektörleri için $\vec{R} = 3\vec{A} - 2\vec{B}$ olan $\vec{R}$ vektörünü hesaplayın.

[[G-S2-02]]', '{"choices":["$\\vec{R} = 21{,}8\\hat{\\imath} + 21{,}6\\hat{\\jmath}$","$\\vec{R} = -3{,}8\\hat{\\imath} + 2{,}4\\hat{\\jmath}$","$\\vec{R} = 9\\hat{\\imath} + 12\\hat{\\jmath}$","$\\vec{R} = 21{,}8\\hat{\\imath} + 2{,}4\\hat{\\jmath}$","$\\vec{R} = -3{,}8\\hat{\\imath} + 21{,}6\\hat{\\jmath}$"]}', '{"index":0}', 'Skalerle çarpım her bileşeni çarpar; çıkarma, eksi işaretli vektörü eklemektir: $3\vec{A} - 2\vec{B} = 3\vec{A} + (-2\vec{B})$.

---

**$3\vec{A}$:** $$3\,(3\hat{\imath} + 4\hat{\jmath}) = 9\hat{\imath} + 12\hat{\jmath}$$

---

**$-2\vec{B}$:** $$-2\,(-6{,}4\hat{\imath} - 4{,}8\hat{\jmath}) = 12{,}8\hat{\imath} + 9{,}6\hat{\jmath}$$ Eksi işareti iki bileşeni de pozitif yapar.

---

**Topla:** $$\vec{R} = (9 + 12{,}8)\,\hat{\imath} + (12 + 9{,}6)\,\hat{\jmath} = 21{,}8\hat{\imath} + 21{,}6\hat{\jmath}$$', 2, 'Sunu, Bölüm 2, Örnek 5 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s05c', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$\vec{R} = 21{,}8\hat{\imath} + 21{,}6\hat{\jmath}$ vektörünün şiddetini ve yönünü ($+x$ ekseniyle açısını) tayin edin.', '{"choices":["$R \\approx 31$; $\\theta \\approx 45^\\circ$","$R \\approx 43$; $\\theta \\approx 45^\\circ$","$R \\approx 31$; $\\theta \\approx 225^\\circ$","$R \\approx 22$; $\\theta \\approx 45^\\circ$","$R \\approx 31$; $\\theta \\approx 90^\\circ$"]}', '{"index":0}', 'Bileşenler neredeyse eşit ve ikisi de pozitif: vektör birinci çeyrekte, açıortaya çok yakın.

---

**Şiddet:** $$R = \sqrt{21{,}8^2 + 21{,}6^2} = \sqrt{475{,}2 + 466{,}6} = \sqrt{941{,}8} \approx 30{,}7 \approx 31$$

---

**Yön:** $$\tan\theta = \frac{21{,}6}{21{,}8} \approx 0{,}99 \approx 1 \quad\Rightarrow\quad \theta \approx 45^\circ$$

---

**Çeyrek:** İki bileşen de pozitif, birinci çeyrek; $225^\circ$ değil $45^\circ$.', 2, 'Sunu, Bölüm 2, Örnek 5 (c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s06a', 'fizik', 'fz-u2', 2, 'mcq', 'original', 'Şekilde gösterilmiş olan $\vec{A}$, $\vec{B}$ ve $\vec{C}$ vektörlerinin birbirleriyle skaler çarpımlarını tayin edin. Buna göre $\vec{A}\cdot\vec{B}$ kaçtır? ($\cos 37^\circ = 0{,}8$)

[[G-S2-03]]', '{"choices":["−12","12","−9","15","0"]}', '{"index":0}', '$\vec{A}\cdot\vec{B} = AB\cos\theta$ formülündeki $\theta$, iki vektörün **arasındaki** açıdır. Şekilden bulunur; vektörler aynı noktadan çıkacak biçimde düşünülür.

---

**Aradaki açı:** $\vec{A}$, $-y$ yönünde (aşağı). $\vec{B}$, $+y$ ekseninden $37^\circ$ sağda. $+y$ ile $-y$ arası $180^\circ$ olduğundan $$\theta = 180^\circ - 37^\circ = 143^\circ$$

---

**Kosinüs:** $$\cos 143^\circ = \cos(180^\circ - 37^\circ) = -\cos 37^\circ = -0{,}8$$

---

**Çarpım:** $$\vec{A}\cdot\vec{B} = 3 \times 5 \times (-0{,}8) = -12$$ Açı $90^\circ$''den büyük olduğu için sonuç negatif.', 2, 'Sunu, Bölüm 2, Örnek 6 (A · B)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s06b', 'fizik', 'fz-u2', 2, 'mcq', 'original', 'Şekilde gösterilmiş olan $\vec{A}$, $\vec{B}$ ve $\vec{C}$ vektörlerinin birbirleriyle skaler çarpımlarını tayin edin. Buna göre $\vec{A}\cdot\vec{C}$ kaçtır? ($\cos 60^\circ = 0{,}5$)

[[G-S2-03]]', '{"choices":["6","−6","10,4","12","0"]}', '{"index":0}', 'Önce iki vektörün arasındaki açıyı şekilden bul, sonra $AB\cos\theta$''yı uygula.

---

**Aradaki açı:** $\vec{A}$, $-y$ yönünde. $\vec{C}$, $-x$ ekseninden $30^\circ$ aşağıda; $-y$ ekseninden ölçersek $90^\circ - 30^\circ = 60^\circ$ uzakta.

---

**Çarpım:** $$\vec{A}\cdot\vec{C} = AC\cos 60^\circ = 3 \times 4 \times 0{,}5 = 6$$', 2, 'Sunu, Bölüm 2, Örnek 6 (A · C)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s06c', 'fizik', 'fz-u2', 2, 'mcq', 'original', 'Şekilde gösterilmiş olan $\vec{A}$, $\vec{B}$ ve $\vec{C}$ vektörlerinin birbirleriyle skaler çarpımlarını tayin edin. Buna göre $\vec{B}\cdot\vec{C}$ kaçtır? ($\cos 23^\circ = 0{,}92$)

[[G-S2-03]]', '{"choices":["−18","18","−20","−9","8"]}', '{"index":0}', 'Açıyı $+x$ eksenine göre iki vektör için ayrı ayrı yazıp farkını almak en güvenli yoldur.

---

**Açıları $+x$''e göre yaz:** $\vec{B}$, $y$ ekseninden $37^\circ$ sağda, yani $+x$ ile $53^\circ$. $\vec{C}$, $-x$''ten $30^\circ$ aşağıda, yani $+x$ ile $210^\circ$.

---

**Aradaki açı:** $$\theta = 210^\circ - 53^\circ = 157^\circ = 90^\circ + 67^\circ$$

---

**Kosinüs:** $$\cos 157^\circ = -\cos 23^\circ = -0{,}92$$

---

**Çarpım:** $$\vec{B}\cdot\vec{C} = 5 \times 4 \times (-0{,}92) = 20 \times (-0{,}92) \approx -18$$', 3, 'Sunu, Bölüm 2, Örnek 6 (B · C)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s07a', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$\vec{p} = 3\hat{\imath} - 8\hat{\jmath}$ ve $\vec{q} = 8\hat{\imath} + 7\hat{\jmath}$ vektörleri veriliyor. $\vec{p}\cdot\vec{q}$ skaler çarpımını bulun.

(Sunuda $\vec{q}$''nun ikinci bileşeni $\hat{k}$ ile yazılmış; çözüm onu $\hat{\jmath}$ olarak aldığı için soru $\hat{\jmath}$ ile verildi.)', '{"choices":["−32","80","24","−56","32"]}', '{"index":0}', 'Bileşenler biliniyorsa skaler çarpım: $\vec{p}\cdot\vec{q} = p_x q_x + p_y q_y + p_z q_z$. Sonuç bir sayıdır, vektör değil.

---

**Bileşenleri eşle:** $p_x = 3$, $p_y = -8$; $q_x = 8$, $q_y = 7$.

---

**Çarp ve topla:** $$\vec{p}\cdot\vec{q} = 3 \times 8 + (-8) \times 7 = 24 - 56 = -32$$', 1, 'Sunu, Bölüm 2, Örnek 7 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s07b', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$\vec{p} = 3\hat{\imath} - 8\hat{\jmath}$ ve $\vec{q} = 8\hat{\imath} + 7\hat{\jmath}$ vektörleri arasındaki açıyı tayin edin. ($\vec{p}\cdot\vec{q} = -32$)', '{"choices":["$\\theta \\approx 110^\\circ$","$\\theta \\approx 70^\\circ$","$\\theta \\approx 20^\\circ$","$\\theta \\approx 160^\\circ$","$\\theta = 90^\\circ$"]}', '{"index":0}', '$\vec{p}\cdot\vec{q} = pq\cos\theta$ eşitliğinden $\cos\theta = \dfrac{\vec{p}\cdot\vec{q}}{pq}$. Skaler çarpım negatifse açı $90^\circ$''den büyüktür.

---

**Şiddetler:** $$p = \sqrt{3^2 + (-8)^2} = \sqrt{73} \approx 8{,}5, \qquad q = \sqrt{8^2 + 7^2} = \sqrt{113} \approx 10{,}6$$

---

**Kosinüs:** $$\cos\theta = \frac{-32}{8{,}5 \times 10{,}6} \approx -0{,}355$$

---

**Açı:** $$\theta = \cos^{-1}(-0{,}355) \approx 110^\circ$$ Skaler çarpım eksi olduğundan geniş açı çıkması beklenir.', 2, 'Sunu, Bölüm 2, Örnek 7 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s08', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$\vec{A} = A_x\hat{\imath} + 12\hat{\jmath}$ ve $\vec{B} = 4\hat{\imath} + 5\hat{\jmath}$ veriliyor. Bu iki vektörün birbirine dik olması için bilinmeyen $A_x$ bileşeni ne olmalıdır?', '{"choices":["$-15$","$15$","$-\\dfrac{48}{5}$","$3$","$0$"]}', '{"index":0}', 'Diklik şartı: aradaki açı $90^\circ$ ise $\cos 90^\circ = 0$ olduğundan $\vec{A}\cdot\vec{B} = 0$.

---

**Diklik şartını yaz:** $$\vec{A}\cdot\vec{B} = A_x B_x + A_y B_y = 0$$

---

**Değerleri koy:** $$4A_x + 12 \times 5 = 0 \quad\Rightarrow\quad 4A_x + 60 = 0$$

---

**Çöz:** $$A_x = -\frac{60}{4} = -15$$', 1, 'Sunu, Bölüm 2, Örnek 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s09a', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$\vec{A} = 3\hat{\imath} + 2\hat{\jmath} + \hat{k}$ ve $\vec{B} = -\hat{\imath} + 4\hat{\jmath} - 3\hat{k}$ veriliyor. Her vektörün büyüklüğünü bulun.', '{"choices":["$A = \\sqrt{14}$; $B = \\sqrt{26}$","$A = 6$; $B = 0$","$A = \\sqrt{14}$; $B = \\sqrt{8}$","$A = 14$; $B = 26$","$A = \\sqrt{6}$; $B = \\sqrt{26}$"]}', '{"index":0}', 'Üç boyutta büyüklük: $A = \sqrt{A_x^2 + A_y^2 + A_z^2}$. Eksi bileşenin karesi pozitiftir.

---

**$A$:** $$A = \sqrt{3^2 + 2^2 + 1^2} = \sqrt{9 + 4 + 1} = \sqrt{14} \approx 3{,}74$$

---

**$B$:** $$B = \sqrt{(-1)^2 + 4^2 + (-3)^2} = \sqrt{1 + 16 + 9} = \sqrt{26} \approx 5{,}1$$', 1, 'Sunu, Bölüm 2, Örnek 9 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s09b', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$\vec{A} = 3\hat{\imath} + 2\hat{\jmath} + \hat{k}$ ve $\vec{B} = -\hat{\imath} + 4\hat{\jmath} - 3\hat{k}$ veriliyor. $\vec{A} + \vec{B} = ?$', '{"choices":["$2\\hat{\\imath} + 6\\hat{\\jmath} - 2\\hat{k}$","$4\\hat{\\imath} - 2\\hat{\\jmath} + 4\\hat{k}$","$2\\hat{\\imath} + 6\\hat{\\jmath} + 4\\hat{k}$","$-3\\hat{\\imath} + 8\\hat{\\jmath} - 3\\hat{k}$","$3\\hat{\\imath} + 6\\hat{\\jmath} - 2\\hat{k}$"]}', '{"index":0}', 'Toplamda aynı birim vektörün katsayıları toplanır: $$\vec{A} + \vec{B} = (A_x + B_x)\,\hat{\imath} + (A_y + B_y)\,\hat{\jmath} + (A_z + B_z)\,\hat{k}$$

---

**$\hat{\imath}$:** $3 + (-1) = 2$.

---

**$\hat{\jmath}$:** $2 + 4 = 6$.

---

**$\hat{k}$:** $1 + (-3) = -2$.

---

**Sonuç:** $$\vec{A} + \vec{B} = 2\hat{\imath} + 6\hat{\jmath} - 2\hat{k}$$', 1, 'Sunu, Bölüm 2, Örnek 9 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s09c', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$\vec{A} = 3\hat{\imath} + 2\hat{\jmath} + \hat{k}$ ve $\vec{B} = -\hat{\imath} + 4\hat{\jmath} - 3\hat{k}$ veriliyor. $\vec{A}\cdot\vec{B} = ?$', '{"choices":["$2$","$-3\\hat{\\imath} + 8\\hat{\\jmath} - 3\\hat{k}$","$14$","$-2$","$8$"]}', '{"index":0}', 'Skaler çarpımın sonucu bir **sayıdır**: $\vec{A}\cdot\vec{B} = A_x B_x + A_y B_y + A_z B_z$.

---

**Terimler:** $$A_x B_x = 3 \times (-1) = -3, \quad A_y B_y = 2 \times 4 = 8, \quad A_z B_z = 1 \times (-3) = -3$$

---

**Topla:** $$\vec{A}\cdot\vec{B} = -3 + 8 - 3 = 2$$', 1, 'Sunu, Bölüm 2, Örnek 9 (c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s09d', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$\vec{A} = 3\hat{\imath} + 2\hat{\jmath} + \hat{k}$ ve $\vec{B} = -\hat{\imath} + 4\hat{\jmath} - 3\hat{k}$ vektörleri arasındaki açıyı bulun. ($\vec{A}\cdot\vec{B} = 2$, $A = \sqrt{14}$, $B = \sqrt{26}$)', '{"choices":["$\\theta \\approx 84^\\circ$","$\\theta \\approx 6^\\circ$","$\\theta \\approx 96^\\circ$","$\\theta = 90^\\circ$","$\\theta \\approx 45^\\circ$"]}', '{"index":0}', '$\cos\theta = \dfrac{\vec{A}\cdot\vec{B}}{AB}$. Skaler çarpım küçük ve pozitif: açı $90^\circ$''ye yakın ama biraz küçük.

---

**Paydayı hesapla:** $$AB = \sqrt{14}\,\sqrt{26} \approx 3{,}74 \times 5{,}1 \approx 19{,}1$$

---

**Kosinüs:** $$\cos\theta = \frac{2}{19{,}1} \approx 0{,}104$$

---

**Açı:** $$\theta = \cos^{-1}(0{,}104) \approx 84^\circ$$', 2, 'Sunu, Bölüm 2, Örnek 9 (d)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s10a', 'fizik', 'fz-u2', 2, 'mcq', 'original', 'Şekilde $xy$-düzleminde yer alan $\vec{a}$, $\vec{b}$ vektörlerinin boyları sırasıyla $a = 15$ ve $b = 12$ birimdir. $\vec{c} = \vec{a} \times \vec{b}$ çarpımı olan $\vec{c}$ vektörünün şiddeti nedir? ($\sin 37^\circ = 0{,}6$)

[[G-S2-04]]', '{"choices":["108 birim","144 birim","180 birim","54 birim","0"]}', '{"index":0}', 'Vektörel çarpımın büyüklüğü $|\vec{a} \times \vec{b}| = ab\sin\theta$; $\theta$ iki vektör arasındaki açıdır.

---

**Aradaki açı:** $x$ ile $y$ ekseni arası $90^\circ$. $\vec{a}$, $y$ ekseninden $23^\circ$ içeride; $\vec{b}$, $x$ ekseninden $30^\circ$ içeride. $$\theta = 90^\circ - (23^\circ + 30^\circ) = 37^\circ$$

---

**Büyüklük:** $$c = ab\sin 37^\circ = 15 \times 12 \times 0{,}6 = 108\ \text{birim}$$

---

Not: sunu sonucu "108 m/s" yazmış; verilen boylar birimsiz olduğu için sonuç da birimdir.', 2, 'Sunu, Bölüm 2, Örnek 10 (şiddet)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s10b', 'fizik', 'fz-u2', 2, 'mcq', 'original', 'Şekilde $xy$-düzleminde yer alan $\vec{a}$ ($y$ ekseninden $23^\circ$ $x$''e doğru) ve $\vec{b}$ ($x$ ekseninden $30^\circ$ $y$''ye doğru) vektörleri veriliyor. $\vec{c} = \vec{a} \times \vec{b}$ vektörünün yönü nedir?

[[G-S2-04]]', '{"choices":["$-z$ yönünde","$+z$ yönünde","$xy$-düzleminde, $\\vec{a}$ ile $\\vec{b}$''nin açıortayında","$+x$ yönünde","Yönü yoktur, $\\vec{c}$ bir skalerdir"]}', '{"index":0}', '$\vec{a} \times \vec{b}$, $\vec{a}$ ve $\vec{b}$''nin oluşturduğu düzleme diktir; iki dik yönden hangisi olduğunu sağ el kuralı söyler.

---

**Doğrultu:** $\vec{a}$ ve $\vec{b}$ $xy$-düzleminde, o halde $\vec{c}$ bu düzleme dik: $z$ doğrultusunda.

---

**Sağ el kuralı:** Sağ elin parmakları önce $\vec{a}$''yı göstersin, sonra küçük açıdan $\vec{b}$''ye doğru kıvrılsın. $\vec{a}$, $y$ eksenine yakın; $\vec{b}$, $x$ eksenine yakın: dönüş $y$''den $x$''e doğru, yani $\hat{\imath} \times \hat{\jmath} = \hat{k}$ dönüşünün tersi.

---

**Sonuç:** Başparmak $-z$ yönünü gösterir. Kontrol: $$\hat{\jmath} \times \hat{\imath} = -\hat{k}$$', 2, 'Sunu, Bölüm 2, Örnek 10 (yön)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-s11', 'fizik', 'fz-u2', 2, 'mcq', 'original', '$\vec{D} = 3\hat{\imath} - 5\hat{\jmath}$ ve $\vec{E} = 7\hat{\imath} - 3\hat{k}$ vektörleri veriliyor. $\vec{F} = \vec{D} \times \vec{E}$ vektörel çarpımı olan $\vec{F}$ vektörünün bileşenlerini hesaplayın.', '{"choices":["$\\vec{F} = 15\\hat{\\imath} + 9\\hat{\\jmath} + 35\\hat{k}$","$\\vec{F} = 15\\hat{\\imath} + 9\\hat{\\jmath} - 35\\hat{k}$","$\\vec{F} = -15\\hat{\\imath} - 9\\hat{\\jmath} + 35\\hat{k}$","$\\vec{F} = 21\\hat{\\imath} + 15\\hat{\\jmath}$","$\\vec{F} = 15\\hat{\\imath} - 9\\hat{\\jmath} + 35\\hat{k}$"]}', '{"index":0}', 'Vektörel çarpım bir determinantla hesaplanır; bileşen formülleri döner permütasyonla da hatırlanabilir: $$F_x = D_y E_z - D_z E_y,\quad F_y = D_z E_x - D_x E_z,\quad F_z = D_x E_y - D_y E_x$$ Sonucu, $\vec{F}$''nin $\vec{D}$''ye dik olup olmadığına bakarak kontrol et. Not: sunu son satırda $-35\hat{k}$ yazmış; doğrusu $+35\hat{k}$.

---

**Determinantı kur:** $D_z = 0$, $E_y = 0$: $$\vec{F} = \begin{vmatrix} \hat{\imath} & \hat{\jmath} & \hat{k} \\ 3 & -5 & 0 \\ 7 & 0 & -3 \end{vmatrix}$$

---

**$F_x$:** $$F_x = D_y E_z - D_z E_y = (-5)(-3) - 0 \cdot 0 = 15$$

---

**$F_y$:** $$F_y = D_z E_x - D_x E_z = 0 \cdot 7 - 3\,(-3) = 9$$

---

**$F_z$:** $$F_z = D_x E_y - D_y E_x = 3 \cdot 0 - (-5)(7) = +35$$

---

**Kontrol:** $\vec{F}$, $\vec{D}$''ye dik olmalı: $$\vec{D}\cdot\vec{F} = 3 \times 15 + (-5) \times 9 + 0 = 45 - 45 = 0\ ✓$$ Sonuç: $\vec{F} = 15\hat{\imath} + 9\hat{\jmath} + 35\hat{k}$.', 3, 'Sunu, Bölüm 2, Örnek 11', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t01', 'fizik', 'fz-u2', 2, 'mcq', 'derived', 'Aşağıdakilerden hangisi skaler bir büyüklüktür?', '{"choices":["Kütle","Hız","Kuvvet","Yerdeğiştirme","Moment"]}', '{"index":0}', 'Skaler büyüklük yalnız bir sayı ve birimle tam belirtilir; vektörel büyüklüğün ayrıca yönü vardır.

---

Her seçenek için "hangi yönde?" diye sor. Hız, kuvvet, yerdeğiştirme ve moment için bu sorunun cevabı gerekir; bunlar vektördür.

---

"$5\ \mathrm{kg}$" dediğimizde başka bilgiye gerek yoktur. Kütle skalerdir (sunudaki öbür örnekler: hacim, uzunluk, enerji, periyot, sıcaklık).', 1, '2. bölüm, Skaler ve vektörel büyüklükler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t02', 'fizik', 'fz-u2', 2, 'tf', 'derived', '"Bir geminin hızı $10\ \mathrm{km/sa}$''tir" ifadesi, geminin hız vektörünü tam olarak belirtir.', '{}', '{"value":false}', 'Hız vektörel bir büyüklüktür: büyüklüğü ($10\ \mathrm{km/sa}$) yanında yönü de söylenmelidir, örneğin "kuzeydoğu yönünde $10\ \mathrm{km/sa}$".', 1, '2. bölüm, Skaler ve vektörel büyüklükler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t03', 'fizik', 'fz-u2', 2, 'mcq', 'derived', 'Kartezyen koordinatları $(x, y) = (-4;\ 3)\ \mathrm{m}$ olan noktanın kutupsal koordinatları nedir? ($\tan 37^\circ = 0{,}75$)', '{"choices":["$r = 5\\ \\mathrm{m}$; $\\theta = 143^\\circ$","$r = 5\\ \\mathrm{m}$; $\\theta = -37^\\circ$","$r = 7\\ \\mathrm{m}$; $\\theta = 143^\\circ$","$r = 5\\ \\mathrm{m}$; $\\theta = 37^\\circ$","$r = 5\\ \\mathrm{m}$; $\\theta = 217^\\circ$"]}', '{"index":0}', 'Sunudaki Örnek 1''in aynısı, bu kez nokta ikinci çeyrekte. $\tan\theta$''nın verdiği açıyı çeyreğe göre düzeltmeyi unutma.

---

**Uzaklık:** $$r = \sqrt{(-4)^2 + 3^2} = \sqrt{25} = 5\ \mathrm{m}$$

---

**Tanjant:** $$\tan\theta = \frac{3}{-4} = -0{,}75$$ Hesap makinesi $-37^\circ$ verir.

---

**Çeyrek:** $x$ negatif, $y$ pozitif: nokta **ikinci çeyrekte**. Tanjantı $-0{,}75$ olan ikinci çeyrek açısı $$\theta = 180^\circ - 37^\circ = 143^\circ$$

---

**Sonuç:** $(r, \theta) = (5\ \mathrm{m};\ 143^\circ)$.', 2, '2. bölüm, Kartezyen ve kutupsal koordinatlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t04', 'fizik', 'fz-u2', 2, 'mcq', 'derived', 'Kutupsal koordinatları $(r, \theta) = (10\ \mathrm{m};\ 240^\circ)$ olan noktanın Kartezyen koordinatları nedir? ($\cos 60^\circ = 0{,}5$; $\sin 60^\circ = 0{,}87$)', '{"choices":["$(-5;\\ -8{,}7)\\ \\mathrm{m}$","$(5;\\ 8{,}7)\\ \\mathrm{m}$","$(-8{,}7;\\ -5)\\ \\mathrm{m}$","$(-5;\\ 8{,}7)\\ \\mathrm{m}$","$(5;\\ -8{,}7)\\ \\mathrm{m}$"]}', '{"index":0}', '$x = r\cos\theta$ ve $y = r\sin\theta$. $240^\circ$ üçüncü çeyrekte olduğundan iki koordinat da negatif çıkar.

---

**Açıyı parçala:** $240^\circ = 180^\circ + 60^\circ$: $$\cos 240^\circ = -\cos 60^\circ = -0{,}5, \qquad \sin 240^\circ = -\sin 60^\circ = -0{,}87$$

---

**$x$:** $$x = 10 \times (-0{,}5) = -5\ \mathrm{m}$$

---

**$y$:** $$y = 10 \times (-0{,}87) = -8{,}7\ \mathrm{m}$$', 2, '2. bölüm, Kartezyen ve kutupsal koordinatlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t05', 'fizik', 'fz-u2', 2, 'tf', 'derived', 'İki vektör birbirine bölünebilir; sonuç yine bir vektördür.', '{}', '{"value":false}', 'Vektörlerin yön özelliği bölme işlemine yansıtılamaz; bu yüzden vektörel bölme **tanımsızdır**. Toplama, çıkarma, skalerle çarpma, skaler ve vektörel çarpım tanımlıdır.', 1, '2. bölüm, Vektörlerin eşitliği, negatifi, skalerle çarpımı, toplama ve çıkarma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t06', 'fizik', 'fz-u2', 2, 'mcq', 'derived', 'Büyüklüğü 4 birim olan $\vec{A}$ vektörü $-2$ sayısıyla çarpılıyor. $\vec{B} = -2\vec{A}$ vektörü için ne söylenebilir?', '{"choices":["Büyüklüğü 8, yönü $\\vec{A}$''ya zıt","Büyüklüğü 8, yönü $\\vec{A}$ ile aynı","Büyüklüğü −8, yönü $\\vec{A}$ ile aynı","Büyüklüğü 2, yönü $\\vec{A}$''ya zıt","Büyüklüğü 8, $\\vec{A}$''ya dik"]}', '{"index":0}', 'Vektörü bir $k$ sayısıyla çarpınca büyüklük $|k|$ katına çıkar; $k$ negatifse yön ters döner. Büyüklük hiçbir zaman negatif olmaz.

---

**Büyüklük:** $$|\vec{B}| = |-2| \times 4 = 8$$

---

**Yön:** Çarpan negatif olduğu için $\vec{B}$, $\vec{A}$''ya zıt yönlüdür.', 1, '2. bölüm, Vektörlerin eşitliği, negatifi, skalerle çarpımı, toplama ve çıkarma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t07', 'fizik', 'fz-u2', 2, 'mcq', 'derived', '$\vec{A} + (-\vec{A})$ işleminin sonucu nedir?', '{"choices":["Sıfır vektörü","$2\\vec{A}$","$\\vec{A}$ ile aynı yönde, büyüklüğü $2A$ olan vektör","$\\vec{A}$''ya dik bir vektör","Tanımsızdır"]}', '{"index":0}', 'Bir vektörün negatifi aynı büyüklükte ve zıt yönlü vektördür; toplamları sıfır vektörünü verir: $-\vec{A} + \vec{A} = \vec{0}$.', 2, '2. bölüm, Vektörlerin eşitliği, negatifi, skalerle çarpımı, toplama ve çıkarma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t08', 'fizik', 'fz-u2', 2, 'mcq', 'derived', '$\vec{A} = 4\hat{\imath} + 3\hat{\jmath}$ ve $\vec{B} = 6\hat{\imath} + 8\hat{\jmath}$ ise $\vec{R} = 2\vec{A} - \vec{B}$ vektörünün büyüklüğü ve $+x$ ekseniyle açısı nedir?', '{"choices":["$|\\vec{R}| \\approx 2{,}8$; $\\theta = 315^\\circ$","$|\\vec{R}| \\approx 2{,}8$; $\\theta = 45^\\circ$","$|\\vec{R}| = 4$; $\\theta = 315^\\circ$","$|\\vec{R}| \\approx 2{,}8$; $\\theta = 135^\\circ$","$|\\vec{R}| \\approx 15{,}6$; $\\theta = 50^\\circ$"]}', '{"index":0}', 'Sunudaki Örnek 5(b) ve (c) kalıbı: önce skalerle çarp, sonra bileşen bileşen çıkar, en son büyüklük ve yön.

---

**$2\vec{A}$:** $$2\,(4\hat{\imath} + 3\hat{\jmath}) = 8\hat{\imath} + 6\hat{\jmath}$$

---

**Çıkar:** $$\vec{R} = (8 - 6)\,\hat{\imath} + (6 - 8)\,\hat{\jmath} = 2\hat{\imath} - 2\hat{\jmath}$$

---

**Büyüklük:** $$|\vec{R}| = \sqrt{2^2 + (-2)^2} = \sqrt{8} \approx 2{,}8$$

---

**Yön:** $$\tan\theta = \frac{-2}{2} = -1 \quad\Rightarrow\quad -45^\circ$$ $R_x > 0$, $R_y < 0$: dördüncü çeyrek, $\theta = 360^\circ - 45^\circ = 315^\circ$.', 2, '2. bölüm, Vektörlerin eşitliği, negatifi, skalerle çarpımı, toplama ve çıkarma', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t09', 'fizik', 'fz-u2', 2, 'mcq', 'derived', '$\vec{A} = 3\hat{\imath} + 4\hat{\jmath}$ ve $\vec{B} = -\hat{\imath} + 2\hat{\jmath}$ vektörlerinin toplamının büyüklüğü ve $+x$ ekseniyle açısı nedir? ($\tan 71{,}6^\circ = 3$)', '{"choices":["$|\\vec{R}| \\approx 6{,}3$; $\\theta \\approx 71{,}6^\\circ$","$|\\vec{R}| \\approx 6{,}3$; $\\theta \\approx 18{,}4^\\circ$","$|\\vec{R}| = 8$; $\\theta \\approx 71{,}6^\\circ$","$|\\vec{R}| \\approx 6{,}3$; $\\theta \\approx 251{,}6^\\circ$","$|\\vec{R}| \\approx 4{,}5$; $\\theta \\approx 63{,}4^\\circ$"]}', '{"index":0}', 'Sunudaki Örnek 2''nin kalıbı: bileşenleri topla, büyüklüğü Pisagor''la, yönü tanjantla bul, çeyreği kontrol et.

---

**Topla:** $$\vec{R} = (3 - 1)\,\hat{\imath} + (4 + 2)\,\hat{\jmath} = 2\hat{\imath} + 6\hat{\jmath}$$

---

**Büyüklük:** $$|\vec{R}| = \sqrt{4 + 36} = \sqrt{40} \approx 6{,}3$$

---

**Yön:** $$\tan\theta = \frac{6}{2} = 3 \quad\Rightarrow\quad \theta \approx 71{,}6^\circ$$ İki bileşen de pozitif, birinci çeyrek; $251{,}6^\circ$ değil.', 2, '2. bölüm, Bileşenler ve birim vektörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t10', 'fizik', 'fz-u2', 2, 'mcq', 'derived', '$\vec{F}$ vektörünün bileşenleri $F_x = -6$, $F_y = 8$''dir. Şiddeti ve $+x$ ekseniyle açısı nedir?', '{"choices":["$F = 10$; $\\theta = 127^\\circ$","$F = 10$; $\\theta = -53^\\circ$","$F = 14$; $\\theta = 127^\\circ$","$F = 10$; $\\theta = 53^\\circ$","$F = 2$; $\\theta = 127^\\circ$"]}', '{"index":0}', 'Sunudaki Örnek 4 ile aynı kalıp; bu kez vektör ikinci çeyrekte.

---

**Şiddet:** $$F = \sqrt{36 + 64} = \sqrt{100} = 10$$

---

**Tanjant:** $$\tan\theta = \frac{8}{-6} \approx -1{,}33$$ Tanjantı $-1{,}33$ olan açılar: $-53^\circ$ ve $127^\circ$.

---

**Çeyrek:** $F_x < 0$, $F_y > 0$: ikinci çeyrek, $\theta = 127^\circ$.', 2, '2. bölüm, Bileşenler ve birim vektörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t11', 'fizik', 'fz-u2', 2, 'mcq', 'derived', 'Büyüklüğü $20\ \mathrm{N}$ olan bir kuvvet $+x$ ekseniyle $150^\circ$ açı yapmaktadır. Kuvvetin bileşenleri nedir? ($\cos 30^\circ = 0{,}87$; $\sin 30^\circ = 0{,}5$)', '{"choices":["$F_x \\approx -17{,}4\\ \\mathrm{N}$; $F_y = 10\\ \\mathrm{N}$","$F_x \\approx 17{,}4\\ \\mathrm{N}$; $F_y = 10\\ \\mathrm{N}$","$F_x = -10\\ \\mathrm{N}$; $F_y \\approx 17{,}4\\ \\mathrm{N}$","$F_x \\approx -17{,}4\\ \\mathrm{N}$; $F_y = -10\\ \\mathrm{N}$","$F_x = 10\\ \\mathrm{N}$; $F_y \\approx -17{,}4\\ \\mathrm{N}$"]}', '{"index":0}', '$150^\circ$ ikinci çeyrekte: $x$ bileşeni negatif, $y$ bileşeni pozitif. $150^\circ = 180^\circ - 30^\circ$ yazmak hesabı kolaylaştırır.

---

**$x$:** $$F_x = 20\cos 150^\circ = 20\,(-\cos 30^\circ) = 20 \times (-0{,}87) \approx -17{,}4\ \mathrm{N}$$

---

**$y$:** $$F_y = 20\sin 150^\circ = 20\sin 30^\circ = 20 \times 0{,}5 = 10\ \mathrm{N}$$', 2, '2. bölüm, Bileşenler ve birim vektörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t12', 'fizik', 'fz-u2', 2, 'mcq', 'derived', 'Şekildeki $\vec{P}$, $\vec{Q}$ ve $\vec{S}$ vektörlerinin toplamı $\vec{R} = \vec{P} + \vec{Q} + \vec{S}$ nedir? ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$)

[[G-S2-05]]', '{"choices":["$\\vec{R} = 3\\hat{\\imath}$, $+x$ yönünde","$\\vec{R} = 3\\hat{\\imath} + 6\\hat{\\jmath}$","$\\vec{R} = 13\\hat{\\imath}$","$\\vec{R} = -3\\hat{\\imath}$","$\\vec{R} = 3\\hat{\\imath} - 12\\hat{\\jmath}$"]}', '{"index":0}', 'Üç ya da daha çok vektör toplanırken paralelkenar kuralı kullanışsızdır; bileşenlere ayırıp her eksende ayrı toplamak en sağlam yoldur.

---

**$\vec{P}$:** $$P_x = 10\cos 37^\circ = 8, \qquad P_y = 10\sin 37^\circ = 6$$

---

**$\vec{Q}$:** $-x$ yönünde: $Q_x = -5$, $Q_y = 0$.

---

**$\vec{S}$:** $-y$ yönünde: $S_x = 0$, $S_y = -6$.

---

**$x$''te topla:** $$R_x = 8 - 5 + 0 = 3$$

---

**$y$''de topla:** $$R_y = 6 + 0 - 6 = 0$$

---

**Sonuç:** $\vec{R} = 3\hat{\imath}$; büyüklüğü 3 ve $+x$ yönünde.', 2, '2. bölüm, Bileşenler ve birim vektörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t13', 'fizik', 'fz-u2', 2, 'fill', 'derived', 'Büyüklüğü 1 olan, yönü belli bir doğrultu boyunca seçilen ve boyutsuz olan vektöre ____ vektör denir ($\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$ gibi).', '{"blanks":1}', '{"blanks":[["birim"]]}', '**Birim vektör**: $|\hat{\imath}| = |\hat{\jmath}| = |\hat{k}| = 1$. Yalnızca yön belirtir, başka fiziksel anlamı yoktur. Her vektör kendi yönündeki birim vektörle $\vec{A} = A\,\hat{A}$ biçiminde yazılabilir.', 1, '2. bölüm, Bileşenler ve birim vektörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t14', 'fizik', 'fz-u2', 2, 'tf', 'derived', 'Bir vektör $x$ ekseni üzerinde duruyorsa $y$ bileşeni sıfırdır.', '{}', '{"value":true}', 'Eksen üzerindeki vektörün öbür eksene izdüşümü yoktur. Sunudaki Örnek 3''te $-y$ yönündeki $\vec{D}$ vektörü için $D_x = 0$ bulunur.', 1, '2. bölüm, Bileşenler ve birim vektörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t15', 'fizik', 'fz-u2', 2, 'mcq', 'derived', 'Büyüklükleri $A = 6$ ve $B = 4$ olan iki vektör arasındaki açı $120^\circ$''dir. $\vec{A}\cdot\vec{B}$ kaçtır? ($\cos 120^\circ = -0{,}5$)', '{"choices":["−12","12","24","−20,8","0"]}', '{"index":0}', '$\vec{A}\cdot\vec{B} = AB\cos\theta$. Açı $90^\circ$''den büyük olduğunda kosinüs negatif, skaler çarpım da negatiftir.

---

**Formül:** $$\vec{A}\cdot\vec{B} = AB\cos 120^\circ$$

---

**Değerler:** $$6 \times 4 \times (-0{,}5) = -12$$', 1, '2. bölüm, Skaler (nokta) çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t16', 'fizik', 'fz-u2', 2, 'mcq', 'derived', '$\vec{A} = 4\hat{\imath} - 2\hat{\jmath} + \hat{k}$ ve $\vec{B} = 2\hat{\imath} + 3\hat{\jmath} - 2\hat{k}$ vektörleri arasındaki açı kaç derecedir?', '{"choices":["$90^\\circ$","$0^\\circ$","$45^\\circ$","$180^\\circ$","$60^\\circ$"]}', '{"index":0}', 'Önce skaler çarpımı hesapla. Sonuç sıfırsa $\cos\theta = 0$ olur: vektörler diktir (diklik şartı).

---

**Skaler çarpım:** $$\vec{A}\cdot\vec{B} = 4 \cdot 2 + (-2) \cdot 3 + 1 \cdot (-2) = 8 - 6 - 2 = 0$$

---

**Yorum:** $\vec{A}\cdot\vec{B} = AB\cos\theta = 0$ ve $A$, $B$ sıfır değil; o halde $$\cos\theta = 0 \quad\Rightarrow\quad \theta = 90^\circ$$', 2, '2. bölüm, Skaler (nokta) çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t17', 'fizik', 'fz-u2', 2, 'mcq', 'derived', '$\vec{A} = 2\hat{\imath} + b\,\hat{\jmath}$ ve $\vec{B} = 3\hat{\imath} - 6\hat{\jmath}$ vektörlerinin birbirine dik olması için $b$ kaç olmalıdır?', '{"choices":["1","−1","4","−4","0"]}', '{"index":0}', 'Sunudaki Örnek 8 kalıbı: diklik şartı $\vec{A}\cdot\vec{B} = 0$.

---

**Şart:** $$\vec{A}\cdot\vec{B} = 2 \cdot 3 + b\,(-6) = 0$$

---

**Çöz:** $$6 - 6b = 0 \quad\Rightarrow\quad b = 1$$', 1, '2. bölüm, Skaler (nokta) çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t18', 'fizik', 'fz-u2', 2, 'mcq', 'derived', '$\vec{A} = 3\hat{\imath} + 4\hat{\jmath}$ ve $\vec{B} = 4\hat{\imath} + 3\hat{\jmath}$ vektörleri arasındaki açının kosinüsü kaçtır?', '{"choices":["0,96","0,28","1","0","0,48"]}', '{"index":0}', '$\cos\theta = \dfrac{\vec{A}\cdot\vec{B}}{AB}$. İki vektör birbirine çok yakın yönlü olduğu için kosinüs 1''e yakın çıkar ($\theta \approx 16^\circ$).

---

**Skaler çarpım:** $$\vec{A}\cdot\vec{B} = 3 \cdot 4 + 4 \cdot 3 = 24$$

---

**Büyüklükler:** $$A = \sqrt{9 + 16} = 5, \qquad B = 5$$

---

**Kosinüs:** $$\cos\theta = \frac{24}{25} = 0{,}96$$', 2, '2. bölüm, Skaler (nokta) çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t19', 'fizik', 'fz-u2', 2, 'mcq', 'derived', 'Şekildeki $\vec{A}$ ve $\vec{B}$ vektörleri için $\vec{A}\cdot\vec{B}$ kaçtır? ($\cos 53^\circ = 0{,}6$)

[[G-S2-06]]', '{"choices":["12","−12","16","20","0"]}', '{"index":0}', 'Sunudaki Örnek 6 kalıbı: önce iki vektörün arasındaki açıyı şekilden bul.

---

**Açılar:** $\vec{A}$, $+y$ yönünde ($90^\circ$). $\vec{B}$, $-x$''ten $37^\circ$ yukarıda: $+x$''e göre $180^\circ - 37^\circ = 143^\circ$.

---

**Aradaki açı:** $$\theta = 143^\circ - 90^\circ = 53^\circ$$

---

**Çarpım:** $$\vec{A}\cdot\vec{B} = 4 \times 5 \times \cos 53^\circ = 20 \times 0{,}6 = 12$$', 2, '2. bölüm, Skaler (nokta) çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t20', 'fizik', 'fz-u2', 2, 'tf', 'derived', 'İki vektörün skaler çarpımı negatifse aralarındaki açı $90^\circ$ ile $180^\circ$ arasındadır.', '{}', '{"value":true}', '$\vec{A}\cdot\vec{B} = AB\cos\theta$; büyüklükler pozitif olduğundan işaret $\cos\theta$''dan gelir. $\cos\theta < 0$ ise $\theta$ geniş açıdır (sunudaki Örnek 7''de $-32$ için $\theta \approx 110^\circ$).', 2, '2. bölüm, Skaler (nokta) çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t21', 'fizik', 'fz-u2', 2, 'mcq', 'derived', '$\vec{A} = 2\hat{\imath} + 3\hat{\jmath}$ ve $\vec{B} = -\hat{\imath} + 4\hat{\jmath}$ ise $\vec{A} \times \vec{B}$ nedir?', '{"choices":["$11\\hat{k}$","$5\\hat{k}$","$-11\\hat{k}$","$-2\\hat{\\imath} + 12\\hat{\\jmath}$","$10$"]}', '{"index":0}', 'İki vektör de $xy$-düzleminde olduğundan çarpım yalnız $z$ bileşenine sahiptir: $C_z = A_x B_y - A_y B_x$.

---

**$x$ ve $y$ bileşenleri:** $A_z = B_z = 0$ olduğu için $$C_x = A_y B_z - A_z B_y = 0, \qquad C_y = A_z B_x - A_x B_z = 0$$

---

**$z$ bileşeni:** $$C_z = A_x B_y - A_y B_x = 2 \cdot 4 - 3\,(-1) = 8 + 3 = 11$$

---

**Sonuç:** $$\vec{A} \times \vec{B} = 11\hat{k}$$', 2, '2. bölüm, Vektörel çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t22', 'fizik', 'fz-u2', 2, 'mcq', 'derived', '$\vec{A} = \hat{\imath} + 2\hat{\jmath} - \hat{k}$ ve $\vec{B} = 3\hat{\imath} - \hat{\jmath} + 2\hat{k}$ ise $\vec{C} = \vec{A} \times \vec{B}$ nedir?', '{"choices":["$3\\hat{\\imath} - 5\\hat{\\jmath} - 7\\hat{k}$","$3\\hat{\\imath} + 5\\hat{\\jmath} - 7\\hat{k}$","$-3\\hat{\\imath} + 5\\hat{\\jmath} + 7\\hat{k}$","$5\\hat{\\imath} - 5\\hat{\\jmath} - 7\\hat{k}$","$3\\hat{\\imath} - 2\\hat{\\jmath} - 2\\hat{k}$"]}', '{"index":0}', 'Sunudaki Örnek 11 kalıbı. Sonucu, $\vec{C}$''nin hem $\vec{A}$''ya hem $\vec{B}$''ye dik olduğunu doğrulayarak kontrol et.

---

**Determinant:** $$\vec{C} = \begin{vmatrix} \hat{\imath} & \hat{\jmath} & \hat{k} \\ 1 & 2 & -1 \\ 3 & -1 & 2 \end{vmatrix}$$

---

**$C_x$:** $$C_x = A_y B_z - A_z B_y = 2 \cdot 2 - (-1)(-1) = 4 - 1 = 3$$

---

**$C_y$:** $$C_y = A_z B_x - A_x B_z = (-1)(3) - 1 \cdot 2 = -3 - 2 = -5$$

---

**$C_z$:** $$C_z = A_x B_y - A_y B_x = 1\,(-1) - 2 \cdot 3 = -1 - 6 = -7$$

---

**Kontrol:** $$\vec{A}\cdot\vec{C} = 3 - 10 + 7 = 0\ ✓, \qquad \vec{B}\cdot\vec{C} = 9 + 5 - 14 = 0\ ✓$$ Sonuç: $\vec{C} = 3\hat{\imath} - 5\hat{\jmath} - 7\hat{k}$.', 3, '2. bölüm, Vektörel çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t23', 'fizik', 'fz-u2', 2, 'mcq', 'derived', 'Büyüklükleri 8 ve 5 olan iki vektör arasındaki açı $30^\circ$''dir. Vektörel çarpımlarının büyüklüğü kaçtır? ($\sin 30^\circ = 0{,}5$)', '{"choices":["20","34,6","40","13","0"]}', '{"index":0}', '$|\vec{A} \times \vec{B}| = AB\sin\theta$. Skaler çarpım $\cos$, vektörel çarpım $\sin$ kullanır; karıştırma.

---

**Formül:** $$|\vec{A} \times \vec{B}| = 8 \times 5 \times \sin 30^\circ$$

---

**Hesap:** $$40 \times 0{,}5 = 20$$', 1, '2. bölüm, Vektörel çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t24', 'fizik', 'fz-u2', 2, 'mcq', 'derived', '$xy$-düzleminde $\vec{a}$ vektörü $+x$ yönünde ve $a = 10$''dur. $\vec{b}$ vektörü ise $+x$ ile $+y$ arasında, $x$ ekseniyle $30^\circ$ açı yapar ve $b = 6$''dır. $\vec{c} = \vec{a} \times \vec{b}$ nedir?', '{"choices":["30, $+z$ yönünde","30, $-z$ yönünde","52, $+z$ yönünde","60, $+z$ yönünde","30, $+y$ yönünde"]}', '{"index":0}', 'Sunudaki Örnek 10 kalıbı: büyüklük $ab\sin\theta$, yön sağ el kuralıyla.

---

**Büyüklük:** $$c = 10 \times 6 \times \sin 30^\circ = 60 \times 0{,}5 = 30$$

---

**Yön:** Dönüş $\vec{a}$''dan ($x$''ten) $\vec{b}$''ye ($y$''ye doğru): $\hat{\imath} \times \hat{\jmath} = \hat{k}$ dönüşüyle aynı. Başparmak $+z$''yi gösterir.', 2, '2. bölüm, Vektörel çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t25', 'fizik', 'fz-u2', 2, 'tf', 'derived', 'Vektörel çarpımda sıra önemlidir: $\vec{B} \times \vec{A} = -(\vec{A} \times \vec{B})$.', '{}', '{"value":true}', 'Sıra değişince sağ el kuralında dönüş yönü tersine döner; büyüklük aynı kalır, yön ters olur. Skaler çarpımda ise $\vec{A}\cdot\vec{B} = \vec{B}\cdot\vec{A}$''dır.', 1, '2. bölüm, Vektörel çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u2-t26', 'fizik', 'fz-u2', 2, 'mcq', 'derived', '$\hat{\imath} \times \hat{\jmath}$ işleminin sonucu nedir?', '{"choices":["$\\hat{k}$","$-\\hat{k}$","$0$","$1$","$\\hat{\\imath} + \\hat{\\jmath}$"]}', '{"index":0}', 'Döner permütasyon: $$\hat{\imath} \times \hat{\jmath} = \hat{k},\qquad \hat{\jmath} \times \hat{k} = \hat{\imath},\qquad \hat{k} \times \hat{\imath} = \hat{\jmath}$$ Ters sırada eksi gelir; bir birim vektörün kendisiyle çarpımı sıfırdır ($\hat{\imath} \times \hat{\imath} = \vec{0}$).', 1, '2. bölüm, Vektörel çarpım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s01', 'fizik', 'fz-u3', 3, 'mcq', 'original', '$x$ ekseni boyunca hareket eden bir parçacığın konumu $t_i = 1\ \mathrm{s}$''de $x_i = 12\ \mathrm{m}$ ve $t_s = 3\ \mathrm{s}$''de $x_s = 4\ \mathrm{m}$''dir. Bu zaman aralığında parçacığın yerdeğiştirmesini ve ortalama hızını bulun.', '{"choices":["$\\Delta x = -8\\ \\mathrm{m}$; $\\bar{v} = -4\\ \\mathrm{m/s}$","$\\Delta x = 8\\ \\mathrm{m}$; $\\bar{v} = 4\\ \\mathrm{m/s}$","$\\Delta x = -8\\ \\mathrm{m}$; $\\bar{v} = -2{,}7\\ \\mathrm{m/s}$","$\\Delta x = 16\\ \\mathrm{m}$; $\\bar{v} = 8\\ \\mathrm{m/s}$","$\\Delta x = -8\\ \\mathrm{m}$; $\\bar{v} = -8\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Yerdeğiştirme son konum eksi ilk konumdur ($\Delta x = x_s - x_i$); izlenen yola bakmaz, işareti yönü gösterir. Ortalama hız yerdeğiştirmenin geçen süreye oranıdır.

---

**Yerdeğiştirme:** $$\Delta x = x_s - x_i = 4 - 12 = -8\ \mathrm{m}$$ Eksi işaret parçacığın $-x$ yönünde gittiğini söyler.

---

**Süre:** $$\Delta t = t_s - t_i = 3 - 1 = 2\ \mathrm{s}$$ Süre $3\ \mathrm{s}$ değil; saat 1. saniyede başlıyor.

---

**Ortalama hız:** $$\bar{v} = \frac{\Delta x}{\Delta t} = \frac{-8\ \mathrm{m}}{2\ \mathrm{s}} = -4\ \mathrm{m/s}$$', 1, 'Sunu, Bölüm 3, Örnek 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s02a', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir cismin konumu zamanla $x(t) = 2t^3 - 5t + 20\ \mathrm{m}$ şeklinde değişiyor. Hareketlinin $t = 2\ \mathrm{s}$ anındaki konumunu bulun.', '{"choices":["26 m","36 m","16 m","20 m","46 m"]}', '{"index":0}', 'Konum fonksiyonu verildiğinde bir andaki konum, $t$ yerine o anın değerini koyarak bulunur.

---

**$t = 2$ yaz:** $$x(2) = 2 \cdot 2^3 - 5 \cdot 2 + 20$$

---

**Hesapla:** $$x(2) = 16 - 10 + 20 = 26\ \mathrm{m}$$', 1, 'Sunu, Bölüm 3, Örnek 2 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s02b', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir cismin konumu zamanla $x(t) = 2t^3 - 5t + 20\ \mathrm{m}$ şeklinde değişiyor. $t = 3\ \mathrm{s}$ ve $t = 5\ \mathrm{s}$ arası yerdeğiştirmesini ve ortalama hızını bulun.', '{"choices":["$\\Delta x = 186\\ \\mathrm{m}$; $\\bar{v} = 93\\ \\mathrm{m/s}$","$\\Delta x = 245\\ \\mathrm{m}$; $\\bar{v} = 122{,}5\\ \\mathrm{m/s}$","$\\Delta x = 186\\ \\mathrm{m}$; $\\bar{v} = 37{,}2\\ \\mathrm{m/s}$","$\\Delta x = 304\\ \\mathrm{m}$; $\\bar{v} = 152\\ \\mathrm{m/s}$","$\\Delta x = 59\\ \\mathrm{m}$; $\\bar{v} = 29{,}5\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Önce iki andaki konumu bul, farkını al. Ortalama hız bu farkın süreye bölümüdür; $t = 5$''e bölmek yaygın bir hatadır, süre $5 - 3 = 2\ \mathrm{s}$.

---

**$t = 3\ \mathrm{s}$''deki konum:** $$x(3) = 2 \cdot 27 - 15 + 20 = 59\ \mathrm{m}$$

---

**$t = 5\ \mathrm{s}$''deki konum:** $$x(5) = 2 \cdot 125 - 25 + 20 = 245\ \mathrm{m}$$

---

**Yerdeğiştirme:** $$\Delta x = x(5) - x(3) = 245 - 59 = 186\ \mathrm{m}$$

---

**Ortalama hız:** $$\bar{v} = \frac{\Delta x}{\Delta t} = \frac{186\ \mathrm{m}}{(5 - 3)\ \mathrm{s}} = 93\ \mathrm{m/s}$$', 2, 'Sunu, Bölüm 3, Örnek 2 (b ve c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s02c', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir cismin konumu zamanla $x(t) = 2t^3 - 5t + 20\ \mathrm{m}$ şeklinde değişiyor. Hızın zamana göre fonksiyonunu ve $t = 4\ \mathrm{s}$ anındaki anlık hızı bulun.', '{"choices":["$v(t) = 6t^2 - 5$; $v(4) = 91\\ \\mathrm{m/s}$","$v(t) = 6t^2 - 5t$; $v(4) = 76\\ \\mathrm{m/s}$","$v(t) = 2t^2 - 5$; $v(4) = 27\\ \\mathrm{m/s}$","$v(t) = 6t^2 + 20$; $v(4) = 116\\ \\mathrm{m/s}$","$v(t) = 6t - 5$; $v(4) = 19\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Anlık hız konumun zamana göre türevidir: $v = \dfrac{dx}{dt}$. $t^n$''nin türevi $n\,t^{n-1}$, sabitin türevi sıfırdır.

---

**Terim terim türev al:** $$\frac{d}{dt}(2t^3) = 6t^2, \qquad \frac{d}{dt}(-5t) = -5, \qquad \frac{d}{dt}(20) = 0$$

---

**Hız fonksiyonu:** $$v(t) = 6t^2 - 5\ \mathrm{m/s}$$ Sabit $20\ \mathrm{m}$ (başlangıç konumu) hıza katkı vermez.

---

**$t = 4\ \mathrm{s}$:** $$v(4) = 6 \cdot 16 - 5 = 96 - 5 = 91\ \mathrm{m/s}$$', 2, 'Sunu, Bölüm 3, Örnek 2 (d ve e)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s02d', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir cismin konumu zamanla $x(t) = 2t^3 - 5t + 20\ \mathrm{m}$ şeklinde değişiyor. İvmenin zamana göre fonksiyonunu bulun.', '{"choices":["$a(t) = 12t\\ \\mathrm{m/s^2}$","$a(t) = 6t^2\\ \\mathrm{m/s^2}$","$a(t) = 12\\ \\mathrm{m/s^2}$","$a(t) = 12t - 5\\ \\mathrm{m/s^2}$","$a(t) = 6t\\ \\mathrm{m/s^2}$"]}', '{"index":0}', 'İvme hızın zamana göre türevidir: $a = \dfrac{dv}{dt} = \dfrac{d^2x}{dt^2}$ (konumun ikinci türevi).

---

**Hız:** $v(t) = 6t^2 - 5$ (önceki parçadan).

---

**Türev:** $$a(t) = \frac{d}{dt}(6t^2 - 5) = 12t\ \mathrm{m/s^2}$$

---

**Yorum:** İvme zamanla artıyor; bu hareket sabit ivmeli değildir, o yüzden sabit ivme formülleri burada kullanılamaz.', 1, 'Sunu, Bölüm 3, Örnek 2 (f)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s03a', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir cismin konumu zamanla $x(t) = t^3 - 5t^2 + 4\ \mathrm{m}$ şeklinde değişiyor. Hız ve ivmenin zamana göre fonksiyonlarını bulun.', '{"choices":["$v = 3t^2 - 10t$; $a = 6t - 10$","$v = 3t^2 - 5t$; $a = 6t - 5$","$v = t^2 - 10t$; $a = 2t - 10$","$v = 3t^2 - 10t + 4$; $a = 6t - 10$","$v = 3t^2 - 10$; $a = 6t$"]}', '{"index":0}', '$v = \dfrac{dx}{dt}$ ve $a = \dfrac{dv}{dt}$. Türev alırken her terimi ayrı ayrı türevle; sabit terim ($4$) düşer.

---

**Hız:** $$v(t) = \frac{d}{dt}(t^3 - 5t^2 + 4) = 3t^2 - 10t\ \mathrm{m/s}$$

---

**İvme:** $$a(t) = \frac{d}{dt}(3t^2 - 10t) = 6t - 10\ \mathrm{m/s^2}$$', 1, 'Sunu, Bölüm 3, Örnek 3 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s03b', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir cismin konumu zamanla $x(t) = t^3 - 5t^2 + 4\ \mathrm{m}$ şeklinde değişiyor. Cismin $t = 1\ \mathrm{s}$ ve $t = 5\ \mathrm{s}$ anındaki hızlarını bulun.', '{"choices":["$v(1) = -7\\ \\mathrm{m/s}$; $v(5) = 25\\ \\mathrm{m/s}$","$v(1) = 7\\ \\mathrm{m/s}$; $v(5) = 25\\ \\mathrm{m/s}$","$v(1) = -7\\ \\mathrm{m/s}$; $v(5) = 75\\ \\mathrm{m/s}$","$v(1) = -4\\ \\mathrm{m/s}$; $v(5) = 20\\ \\mathrm{m/s}$","$v(1) = 0$; $v(5) = 4\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Hız fonksiyonu $v(t) = 3t^2 - 10t$''ye $t$ değerlerini koy. Eksi hız, cismin o anda $-x$ yönünde gittiğini gösterir.

---

**$t = 1\ \mathrm{s}$:** $$v(1) = 3 \cdot 1 - 10 \cdot 1 = -7\ \mathrm{m/s}$$ Cisim $-x$ yönünde gidiyor.

---

**$t = 5\ \mathrm{s}$:** $$v(5) = 3 \cdot 25 - 10 \cdot 5 = 75 - 50 = 25\ \mathrm{m/s}$$ Cisim $+x$ yönünde gidiyor.', 2, 'Sunu, Bölüm 3, Örnek 3 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s03c', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir cismin konumu zamanla $x(t) = t^3 - 5t^2 + 4\ \mathrm{m}$ şeklinde değişiyor. Cismin $t = 1\ \mathrm{s}$ ile $t = 5\ \mathrm{s}$ zaman aralığındaki ortalama ivmesini hesaplayın.', '{"choices":["8 m/s²","4,5 m/s²","6 m/s²","32 m/s²","−8 m/s²"]}', '{"index":0}', 'Ortalama ivme hız değişiminin süreye oranıdır: $\bar{a} = \Delta v/\Delta t$. Ani ivmelerin ortalaması alınmaz, uçlardaki hızlar kullanılır.

---

**Hız değişimi:** $$\Delta v = v(5) - v(1) = 25 - (-7) = 32\ \mathrm{m/s}$$ Eksinin eksisi artı olur; burası en sık hata yapılan yer.

---

**Süre:** $$\Delta t = 5 - 1 = 4\ \mathrm{s}$$

---

**Ortalama ivme:** $$\bar{a} = \frac{\Delta v}{\Delta t} = \frac{32}{4} = 8\ \mathrm{m/s^2}$$', 2, 'Sunu, Bölüm 3, Örnek 3 (c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s03d', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir cismin konumu zamanla $x(t) = t^3 - 5t^2 + 4\ \mathrm{m}$ şeklinde değişiyor. Cismin $t = 1\ \mathrm{s}$ ve $t = 5\ \mathrm{s}$ anındaki ivmelerini bulun.', '{"choices":["$a(1) = -4\\ \\mathrm{m/s^2}$; $a(5) = 20\\ \\mathrm{m/s^2}$","$a(1) = 4\\ \\mathrm{m/s^2}$; $a(5) = 20\\ \\mathrm{m/s^2}$","$a(1) = -4\\ \\mathrm{m/s^2}$; $a(5) = 30\\ \\mathrm{m/s^2}$","$a(1) = -10\\ \\mathrm{m/s^2}$; $a(5) = 20\\ \\mathrm{m/s^2}$","$a(1) = 8\\ \\mathrm{m/s^2}$; $a(5) = 8\\ \\mathrm{m/s^2}$"]}', '{"index":0}', 'Ani ivme, ivme fonksiyonu $a(t) = 6t - 10$''un o andaki değeridir. Sonucu ortalama ivmeyle ($8\ \mathrm{m/s^2}$) karşılaştırmak iki kavramın farkını gösterir.

---

**$t = 1\ \mathrm{s}$:** $$a(1) = 6 \cdot 1 - 10 = -4\ \mathrm{m/s^2}$$

---

**$t = 5\ \mathrm{s}$:** $$a(5) = 6 \cdot 5 - 10 = 20\ \mathrm{m/s^2}$$

---

**Karşılaştır:** Ortalama ivme $8\ \mathrm{m/s^2}$ idi; ani ivme bu aralıkta $-4$''ten $20$''ye değişiyor. İvme doğrusal değiştiği için ortalama, uçların ortası olan $8$''e eşit çıktı.', 2, 'Sunu, Bölüm 3, Örnek 3 (d)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s03e', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir cismin konumu zamanla $x(t) = t^3 - 5t^2 + 4\ \mathrm{m}$ şeklinde değişiyor. İvmenin sıfır olduğu anı bulun.', '{"choices":["$t \\approx 1{,}7\\ \\mathrm{s}$","$t \\approx 3{,}3\\ \\mathrm{s}$","$t = 0$","$t = 10\\ \\mathrm{s}$","$t = 0{,}6\\ \\mathrm{s}$"]}', '{"index":0}', 'İvme fonksiyonunu sıfıra eşitle ve $t$''yi çöz.

---

**Denklem:** $$a(t) = 6t - 10 = 0$$

---

**Çöz:** $$t = \frac{10}{6} = \frac{5}{3} \approx 1{,}7\ \mathrm{s}$$

---

**Yorum:** Bu anda hız en küçük (en negatif) değerindedir: $$v\!\left(\tfrac{5}{3}\right) = 3 \cdot \frac{25}{9} - \frac{50}{3} \approx -8{,}3\ \mathrm{m/s}$$ Hızın türevi sıfır olduğu için hız-zaman eğrisinin dip noktasıdır.', 2, 'Sunu, Bölüm 3, Örnek 3 (e)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s04', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir cisim yatay bir buz tabakası üzerinde itiliyor ve $5\ \mathrm{s}$ sonra $25\ \mathrm{m}$ uzakta duruyor. Cisme verilen ilk hızı ve ivmeyi hesaplayın.', '{"choices":["$v_0 = 10\\ \\mathrm{m/s}$; $a = -2\\ \\mathrm{m/s^2}$","$v_0 = 5\\ \\mathrm{m/s}$; $a = -1\\ \\mathrm{m/s^2}$","$v_0 = 10\\ \\mathrm{m/s}$; $a = -4\\ \\mathrm{m/s^2}$","$v_0 = 5\\ \\mathrm{m/s}$; $a = -2\\ \\mathrm{m/s^2}$","$v_0 = 25\\ \\mathrm{m/s}$; $a = -5\\ \\mathrm{m/s^2}$"]}', '{"index":0}', 'Cisim düzgün yavaşlayıp durduğu için son hız sıfırdır. Sabit ivmede yerdeğiştirme ortalama hız ile süre çarpımıdır: $\Delta x = \tfrac{1}{2}(v_0 + v)\,t$. Bu bağıntı ivmeyi bilmeden $v_0$''ı verir.

---

**Bilinenler:** $t = 5\ \mathrm{s}$, $\Delta x = 25\ \mathrm{m}$, $v = 0$ (duruyor). Bilinmeyenler: $v_0$ ve $a$.

---

**İlk hız:** $$\Delta x = \tfrac{1}{2}(v_0 + v)\,t \quad\Rightarrow\quad 25 = \tfrac{1}{2}(v_0 + 0) \cdot 5 \quad\Rightarrow\quad v_0 = 10\ \mathrm{m/s}$$

---

**İvme:** $$v = v_0 + at \quad\Rightarrow\quad 0 = 10 + 5a \quad\Rightarrow\quad a = -2\ \mathrm{m/s^2}$$ Eksi işaret ivmenin harekete ters, yani yavaşlatıcı olduğunu gösterir.

---

**Kontrol:** $$x = v_0 t + \tfrac{1}{2}at^2 = 10 \cdot 5 + \tfrac{1}{2}(-2)(25) = 50 - 25 = 25\ \mathrm{m}\ ✓$$', 2, 'Sunu, Bölüm 3, Örnek 4', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s05a', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Durmakta olan bir araba sabit $2\ \mathrm{m/s^2}$ ivme ile hızlanıyor. $3\ \mathrm{s}$ sonra hızı ve aldığı yol ne kadar olur?', '{"choices":["$v = 6\\ \\mathrm{m/s}$; $x = 9\\ \\mathrm{m}$","$v = 6\\ \\mathrm{m/s}$; $x = 18\\ \\mathrm{m}$","$v = 5\\ \\mathrm{m/s}$; $x = 9\\ \\mathrm{m}$","$v = 6\\ \\mathrm{m/s}$; $x = 6\\ \\mathrm{m}$","$v = 3\\ \\mathrm{m/s}$; $x = 4{,}5\\ \\mathrm{m}$"]}', '{"index":0}', '"Durmakta olan" ifadesi $v_0 = 0$ demektir. Başlangıç noktasını $x_0 = 0$ alınca denklemler $v = at$ ve $x = \tfrac{1}{2}at^2$ olur.

---

**Denklemleri sadeleştir:** $v_0 = 0$, $a = 2$: $$v = 2t, \qquad x = \tfrac{1}{2} \cdot 2 \cdot t^2 = t^2$$

---

**Hız:** $$v = 2 \cdot 3 = 6\ \mathrm{m/s}$$

---

**Yol:** $$x = 3^2 = 9\ \mathrm{m}$$', 1, 'Sunu, Bölüm 3, Örnek 5 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s05b', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Durmakta olan bir araba sabit $2\ \mathrm{m/s^2}$ ivme ile hızlanıyor. $10\ \mathrm{m/s}$ hıza kaç saniyede ulaşır?', '{"choices":["$5\\ \\mathrm{s}$","$20\\ \\mathrm{s}$","$10\\ \\mathrm{s}$","$\\sqrt{10}\\ \\mathrm{s}$","$2{,}5\\ \\mathrm{s}$"]}', '{"index":0}', 'Hız denklemi $v = v_0 + at$''de $v_0 = 0$ olduğundan $t = v/a$.

---

**Hız denklemi:** $v = 2t$.

---

**Çöz:** $$10 = 2t \quad\Rightarrow\quad t = 5\ \mathrm{s}$$', 1, 'Sunu, Bölüm 3, Örnek 5 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s05c', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Durmakta olan bir araba sabit $2\ \mathrm{m/s^2}$ ivme ile hızlanıyor. $64\ \mathrm{m}$ uzaklığa kaç saniyede ulaşır?', '{"choices":["8 s","32 s","16 s","4 s","64 s"]}', '{"index":0}', 'Konum denklemi $x = \tfrac{1}{2}at^2$; $v_0 = 0$ ve $a = 2$ olduğunda $x = t^2$ olur.

---

**Konum denklemi:** $x = t^2$.

---

**Çöz:** $$64 = t^2 \quad\Rightarrow\quad t = 8\ \mathrm{s}$$ Negatif kök fiziksel değil.', 2, 'Sunu, Bölüm 3, Örnek 5 (c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s06a', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Uçak gemisine iniş: Bir jet, uçak gemisine $140$ mil/saat ($63\ \mathrm{m/s}$) hızla iniyor ve $2$ saniye içinde duruyor. Uçağın ivmesi nedir?', '{"choices":["−31,5 m/s²","−63 m/s²","−126 m/s²","31,5 m/s²","−15,75 m/s²"]}', '{"index":0}', 'Son hız sıfır, süre biliniyor: ivme hızdaki değişimin süreye bölümüdür, $a = \dfrac{v_s - v_i}{t}$.

---

**Bilinenler:** $v_i = 63\ \mathrm{m/s}$, $v_s = 0$, $t = 2\ \mathrm{s}$.

---

**İvme:** $$a = \frac{0 - 63}{2} = -31{,}5\ \mathrm{m/s^2}$$ Bu yerçekimi ivmesinin üç katından fazla; pilot öne doğru güçlü bir itme hisseder.', 2, 'Sunu, Bölüm 3, Örnek 6 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s06b', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Uçak gemisine iniş: Bir jet, uçak gemisine $140$ mil/saat ($63\ \mathrm{m/s}$) hızla iniyor ve $2$ saniye içinde duruyor. Bu süre içinde uçağın yer değiştirmesi nedir?', '{"choices":["63 m","126 m","31,5 m","252 m","94,5 m"]}', '{"index":0}', 'Sabit ivmede ortalama hız ilk ve son hızın ortalamasıdır; yerdeğiştirme bu ortalama hız ile sürenin çarpımıdır: $x_s - x_i = \tfrac{1}{2}(v_i + v_s)\,t$.

---

**Ortalama hız:** $$\bar{v} = \tfrac{1}{2}(63 + 0) = 31{,}5\ \mathrm{m/s}$$

---

**Yerdeğiştirme:** $$\Delta x = 31{,}5 \times 2 = 63\ \mathrm{m}$$

---

**Kontrol:** $$x = v_i t + \tfrac{1}{2}at^2 = 63 \cdot 2 + \tfrac{1}{2}(-31{,}5)(4) = 126 - 63 = 63\ \mathrm{m}\ ✓$$', 2, 'Sunu, Bölüm 3, Örnek 6 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s07', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir uçak havalanırken pistte sabit ivme ile $30\ \mathrm{s}$ gittikten sonra havalanmaktadır. Pistte aldığı yol $x = 1{,}2\ \mathrm{km}$ olduğuna göre havalanma anındaki hızı hesaplayınız.', '{"choices":["80 m/s (288 km/sa)","40 m/s (144 km/sa)","2,67 m/s (9,6 km/sa)","160 m/s (576 km/sa)","80 m/s (22 km/sa)"]}', '{"index":0}', 'Uçak durgun başlar ($v_0 = 0$). Önce $x = \tfrac{1}{2}at^2$''den ivme, sonra $v = at$''den hız bulunur. Birim dönüşümünde $1\ \mathrm{m/s} = 3{,}6\ \mathrm{km/sa}$.

---

**Birim:** $x = 1{,}2\ \mathrm{km} = 1200\ \mathrm{m}$.

---

**İvme:** $$x = \tfrac{1}{2}at^2 \quad\Rightarrow\quad a = \frac{2x}{t^2} = \frac{2 \cdot 1200}{30^2} = \frac{2400}{900} \approx 2{,}67\ \mathrm{m/s^2}$$

---

**Hız:** $$v = at = \frac{24}{9} \cdot 30 = 80\ \mathrm{m/s}$$

---

**km/sa''e çevir:** $$80\ \mathrm{m/s} \times 3{,}6 = 288\ \mathrm{km/sa}$$

---

**Kısa yol:** $v_0 = 0$ iken $x = \tfrac{1}{2}vt$ olduğundan $$v = \frac{2x}{t} = \frac{2400}{30} = 80\ \mathrm{m/s}$$ ivmeye hiç gerek kalmaz.', 2, 'Sunu, Bölüm 3, Örnek 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s08a', 'fizik', 'fz-u3', 3, 'mcq', 'original', '$72\ \mathrm{km/sa}$ hızla gitmekte olan bir otomobil frene basarak yavaşlatılıyor ve $5\ \mathrm{s}$ içinde hızı $36\ \mathrm{km/sa}$ düşürülüyor. Arabanın sabit ivmesi nedir?', '{"choices":["−2 m/s²","−7,2 m/s²","−10 m/s²","2 m/s²","−4 m/s²"]}', '{"index":0}', 'Hızlar km/sa verildi; saniye ile birlikte kullanmadan önce m/s''ye çevir ($\div 3{,}6$). Sonra $a = \dfrac{v - v_0}{t}$.

---

**Birimler:** $$v_0 = \frac{72}{3{,}6} = 20\ \mathrm{m/s}, \qquad v = \frac{36}{3{,}6} = 10\ \mathrm{m/s}$$

---

**İvme:** $$v = v_0 + at \quad\Rightarrow\quad 10 = 20 + 5a \quad\Rightarrow\quad a = -2\ \mathrm{m/s^2}$$', 2, 'Sunu, Bölüm 3, Örnek 8 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s08b', 'fizik', 'fz-u3', 3, 'mcq', 'original', '$72\ \mathrm{km/sa}$ hızla gitmekte olan bir otomobil frene basarak yavaşlatılıyor ve $5\ \mathrm{s}$ içinde hızı $36\ \mathrm{km/sa}$ düşürülüyor. Bu süre içinde ne kadar yol alır?', '{"choices":["75 m","100 m","50 m","25 m","270 m"]}', '{"index":0}', 'İvme bulunduktan sonra $x = v_0 t + \tfrac{1}{2}at^2$ kullanılır.

---

**Değerler:** $v_0 = 20\ \mathrm{m/s}$, $a = -2\ \mathrm{m/s^2}$, $t = 5\ \mathrm{s}$.

---

**Yol:** $$x = 20 \cdot 5 + \tfrac{1}{2}(-2) \cdot 5^2 = 100 - 25 = 75\ \mathrm{m}$$

---

**Kontrol:** Ortalama hız $\tfrac{1}{2}(20 + 10) = 15\ \mathrm{m/s}$; $15 \times 5 = 75\ \mathrm{m}$ ✓', 2, 'Sunu, Bölüm 3, Örnek 8 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s08c', 'fizik', 'fz-u3', 3, 'mcq', 'original', '$72\ \mathrm{km/sa}$ hızla gitmekte olan bir otomobil frene basarak yavaşlatılıyor ve $5\ \mathrm{s}$ içinde hızı $36\ \mathrm{km/sa}$ düşürülüyor. Başlangıçtan itibaren arabanın tamamen durması için geçen süre ne kadardır?', '{"choices":["10 s","5 s","15 s","20 s","7,5 s"]}', '{"index":0}', 'Aynı ivmeyle frenlemeye devam ederse son hız sıfır olana kadar geçen süreyi $v = v_0 + at$ verir.

---

**Denklem:** $$0 = 20 + (-2)\,t$$

---

**Çöz:** $t = 10\ \mathrm{s}$. Hızın yarısını $5\ \mathrm{s}$''de kaybetti, kalan yarısını da $5\ \mathrm{s}$''de kaybeder.', 2, 'Sunu, Bölüm 3, Örnek 8 (c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s09a', 'fizik', 'fz-u3', 3, 'mcq', 'original', '$4\ \mathrm{m/s}$ hızla koşmakta olan bir yarışçı aniden hızlanmaya başlıyor ve $11\ \mathrm{m}$ yol sonunda $7\ \mathrm{m/s}$ hıza ulaşıyor. Yarışçının sabit ivmesi ne kadardır?', '{"choices":["1,5 m/s²","3 m/s²","0,27 m/s²","2,2 m/s²","0,75 m/s²"]}', '{"index":0}', 'Süre verilmemiş: zamansız hız denklemi $v^2 = v_0^2 + 2a\,\Delta x$ doğrudan ivmeyi verir.

---

**Zamansız denklem:** $$v^2 = v_0^2 + 2a\,\Delta x$$

---

**Yerine koy:** $$49 = 16 + 2a \cdot 11 \quad\Rightarrow\quad 33 = 22a$$

---

**Çöz:** $$a = \frac{33}{22} = 1{,}5\ \mathrm{m/s^2}$$', 2, 'Sunu, Bölüm 3, Örnek 9 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s09b', 'fizik', 'fz-u3', 3, 'mcq', 'original', '$4\ \mathrm{m/s}$ hızla koşmakta olan bir yarışçı aniden hızlanmaya başlıyor ve $11\ \mathrm{m}$ yol sonunda $7\ \mathrm{m/s}$ hıza ulaşıyor. Yarışçının hızlanması ne kadar sürmüştür?', '{"choices":["2 s","1 s","3 s","4,7 s","1,6 s"]}', '{"index":0}', 'İvme bulunduktan sonra $v = v_0 + at$; ya da ivmeye gerek duymadan $\Delta x = \tfrac{1}{2}(v_0 + v)\,t$.

---

**Hız denklemi:** $$7 = 4 + 1{,}5\,t \quad\Rightarrow\quad t = \frac{3}{1{,}5} = 2\ \mathrm{s}$$

---

**Kontrol:** Ortalama hız $\tfrac{1}{2}(4 + 7) = 5{,}5\ \mathrm{m/s}$: $$t = \frac{11\ \mathrm{m}}{5{,}5\ \mathrm{m/s}} = 2\ \mathrm{s}\ ✓$$', 2, 'Sunu, Bölüm 3, Örnek 9 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s10a', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir taş bir binanın tepesinden düşey ve yukarı yönde $20\ \mathrm{m/s}$''lik ilk hızla fırlatılmıştır. Bina $50\ \mathrm{m}$ yüksekliğindedir. ($g = 10\ \mathrm{m/s^2}$) Taşın maksimum yüksekliğe ulaşması için geçen zamanı ve maksimum yüksekliği (atıldığı noktaya göre) bulunuz.', '{"choices":["$t = 2\\ \\mathrm{s}$; $y_{\\max} = 20\\ \\mathrm{m}$","$t = 2\\ \\mathrm{s}$; $y_{\\max} = 40\\ \\mathrm{m}$","$t = 4\\ \\mathrm{s}$; $y_{\\max} = 20\\ \\mathrm{m}$","$t = 2\\ \\mathrm{s}$; $y_{\\max} = 70\\ \\mathrm{m}$","$t = 0{,}5\\ \\mathrm{s}$; $y_{\\max} = 10\\ \\mathrm{m}$"]}', '{"index":0}', 'Orijini atış noktasında, $+y$''yi yukarı al; ivme $-g$. Tepe noktasında hız sıfırdır: $v = v_0 - gt = 0$.

---

**Tepe anı:** $$0 = 20 - 10\,t_1 \quad\Rightarrow\quad t_1 = 2\ \mathrm{s}$$

---

**Yükseklik:** $$y_{\max} = v_0 t_1 - \tfrac{1}{2}g t_1^2 = 20 \cdot 2 - 5 \cdot 4 = 40 - 20 = 20\ \mathrm{m}$$ Bu atıldığı noktadan yüksekliktir; yerden $50 + 20 = 70\ \mathrm{m}$.

---

**Kısa yol:** $$y_{\max} = \frac{v_0^2}{2g} = \frac{400}{20} = 20\ \mathrm{m}$$', 2, 'Sunu, Bölüm 3, Örnek 10 (a ve b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s10b', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir taş bir binanın tepesinden düşey ve yukarı yönde $20\ \mathrm{m/s}$''lik ilk hızla fırlatılmıştır. Bina $50\ \mathrm{m}$ yüksekliğindedir. ($g = 10\ \mathrm{m/s^2}$) Taşın atıldığı seviyeye geri gelmesi için geçen zamanı ve taşın bu andaki hızını bulunuz.', '{"choices":["$t = 4\\ \\mathrm{s}$; $v = -20\\ \\mathrm{m/s}$","$t = 2\\ \\mathrm{s}$; $v = 0$","$t = 4\\ \\mathrm{s}$; $v = 20\\ \\mathrm{m/s}$","$t = 4\\ \\mathrm{s}$; $v = -40\\ \\mathrm{m/s}$","$t = 5\\ \\mathrm{s}$; $v = -30\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Düşey atış simetriktir: çıkış süresi iniş süresine eşittir ve aynı seviyeye aynı büyüklükte ama ters yönde hızla döner.

---

**Süre:** $$t_2 = 2t_1 = 2 \cdot 2 = 4\ \mathrm{s}$$ Ya da $y = 20t - 5t^2 = 0$ denkleminden $t = 4\ \mathrm{s}$.

---

**Hız:** $$v = v_0 - g\,t_2 = 20 - 10 \cdot 4 = -20\ \mathrm{m/s}$$

---

**Yorum:** Büyüklük atış hızıyla aynı ($20\ \mathrm{m/s}$), eksi işaret aşağı doğru gittiğini gösterir.', 2, 'Sunu, Bölüm 3, Örnek 10 (c ve d)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s10c', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir taş bir binanın tepesinden düşey ve yukarı yönde $20\ \mathrm{m/s}$''lik ilk hızla fırlatılmıştır. Bina $50\ \mathrm{m}$ yüksekliğindedir. ($g = 10\ \mathrm{m/s^2}$) $t = 5$ saniyede taşın hızını ve konumunu (atıldığı noktaya göre) bulunuz.', '{"choices":["$v = -30\\ \\mathrm{m/s}$; $y = -25\\ \\mathrm{m}$","$v = -30\\ \\mathrm{m/s}$; $y = 25\\ \\mathrm{m}$","$v = 30\\ \\mathrm{m/s}$; $y = -25\\ \\mathrm{m}$","$v = -50\\ \\mathrm{m/s}$; $y = -125\\ \\mathrm{m}$","$v = -30\\ \\mathrm{m/s}$; $y = -45\\ \\mathrm{m}$"]}', '{"index":0}', 'Aynı denklemler ($v = v_0 - gt$, $y = v_0 t - \tfrac{1}{2}gt^2$) taş hangi yönde giderse gitsin geçerlidir; hareketi parçalara ayırmaya gerek yok. Not: sunu bu konumu $25\ \mathrm{m}$ yazmış; işlem $100 - 125 = -25\ \mathrm{m}$ verir.

---

**Hız:** $$v = 20 - 10 \cdot 5 = -30\ \mathrm{m/s}$$

---

**Konum:** $$y = 20 \cdot 5 - 5 \cdot 5^2 = 100 - 125 = -25\ \mathrm{m}$$

---

**Yorum:** Eksi konum taşın atıldığı noktanın $25\ \mathrm{m}$ altında, yani yerden $50 - 25 = 25\ \mathrm{m}$ yükseklikte olduğunu söyler. Sunudaki "25 m" bu yerden yüksekliğe denk gelir; atış noktasına göre konum $-25\ \mathrm{m}$''dir.', 2, 'Sunu, Bölüm 3, Örnek 10 (e)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s11a', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Yerden $35\ \mathrm{m}$ yükseklikteki bir binanın çatısından bir taş yukarı yönde $30\ \mathrm{m/s}$ hızla fırlatılıyor. ($g = 10\ \mathrm{m/s^2}$) Yer hizasını orijin ve yukarı yönü pozitif alarak maksimum yüksekliği (yerden) ve çıkış zamanını hesaplayın.', '{"choices":["$t = 3\\ \\mathrm{s}$; $y_{\\max} = 80\\ \\mathrm{m}$","$t = 3\\ \\mathrm{s}$; $y_{\\max} = 45\\ \\mathrm{m}$","$t = 6\\ \\mathrm{s}$; $y_{\\max} = 80\\ \\mathrm{m}$","$t = 3\\ \\mathrm{s}$; $y_{\\max} = 125\\ \\mathrm{m}$","$t = 30\\ \\mathrm{s}$; $y_{\\max} = 80\\ \\mathrm{m}$"]}', '{"index":0}', 'Orijin yerde olduğundan $y_0 = 35\ \mathrm{m}$. Hareket denklemleri: $v = 30 - 10t$ ve $y = 35 + 30t - 5t^2$. Tepede $v = 0$.

---

**Denklemler:** $$v = v_0 + at = 30 - 10t, \qquad y = y_0 + v_0 t + \tfrac{1}{2}at^2 = 35 + 30t - 5t^2$$

---

**Çıkış zamanı:** $$0 = 30 - 10t \quad\Rightarrow\quad t = 3\ \mathrm{s}$$

---

**Maksimum yükseklik:** $$y_{\max} = 35 + 30 \cdot 3 - 5 \cdot 9 = 35 + 90 - 45 = 80\ \mathrm{m}$$ Bu yerden yüksekliktir.

---

**Atıldığı yerden:** $80 - 35 = 45\ \mathrm{m}$.', 2, 'Sunu, Bölüm 3, Örnek 11 (a ve b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s11b', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Yerden $35\ \mathrm{m}$ yükseklikteki bir binanın çatısından bir taş yukarı yönde $30\ \mathrm{m/s}$ hızla fırlatılıyor. ($g = 10\ \mathrm{m/s^2}$) Yere düşünceye kadar kaç saniye geçer ve taş yere hangi hızla çarpar?', '{"choices":["$t = 7\\ \\mathrm{s}$; $v = -40\\ \\mathrm{m/s}$","$t = 6\\ \\mathrm{s}$; $v = -30\\ \\mathrm{m/s}$","$t = 7\\ \\mathrm{s}$; $v = 40\\ \\mathrm{m/s}$","$t = 4\\ \\mathrm{s}$; $v = -40\\ \\mathrm{m/s}$","$t = 7\\ \\mathrm{s}$; $v = -70\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Yere düşmek $y = 0$ demektir. İkinci dereceden denklem iki kök verir; negatif zaman fiziksel değildir.

---

**Denklem:** $$0 = 35 + 30t - 5t^2 \quad\xrightarrow{\ \div(-5)\ }\quad t^2 - 6t - 7 = 0$$

---

**Çarpanlara ayır:** $$(t - 7)(t + 1) = 0 \quad\Rightarrow\quad t = 7\ \mathrm{s} \ \text{ ya da } \ t = -1\ \mathrm{s}$$ Negatif kök atılır: $t = 7\ \mathrm{s}$.

---

**Çarpma hızı:** $$v = 30 - 10 \cdot 7 = -40\ \mathrm{m/s}$$ Eksi işaret aşağı yönü gösterir.

---

**Kontrol:** Zamansız denklem: $$v^2 = 30^2 + 2(-10)(0 - 35) = 900 + 700 = 1600 \quad\Rightarrow\quad |v| = 40\ \mathrm{m/s}\ ✓$$', 2, 'Sunu, Bölüm 3, Örnek 11 (c ve d)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s12a', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir top $15\ \mathrm{m/s}$ hızla yerden yukarı doğru fırlatılıyor. ($g = 10\ \mathrm{m/s^2}$) Atıldığı yeri orijin, yukarıyı pozitif alarak $t = 1\ \mathrm{s}$ sonraki konumu ve hızı bulun.', '{"choices":["$y = 10\\ \\mathrm{m}$; $v = 5\\ \\mathrm{m/s}$","$y = 15\\ \\mathrm{m}$; $v = 5\\ \\mathrm{m/s}$","$y = 10\\ \\mathrm{m}$; $v = -5\\ \\mathrm{m/s}$","$y = 20\\ \\mathrm{m}$; $v = 25\\ \\mathrm{m/s}$","$y = 5\\ \\mathrm{m}$; $v = 10\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Hareket denklemleri $v = 15 - 10t$ ve $y = 15t - 5t^2$. Bir andaki hız ve konum doğrudan yerine koyarak bulunur.

---

**Denklemler:** $$v = v_0 - gt = 15 - 10t, \qquad y = v_0 t - \tfrac{1}{2}gt^2 = 15t - 5t^2$$

---

**Hız ($t = 1\ \mathrm{s}$):** $$v = 15 - 10 = 5\ \mathrm{m/s}$$ Top hâlâ yukarı çıkıyor.

---

**Konum ($t = 1\ \mathrm{s}$):** $$y = 15 - 5 = 10\ \mathrm{m}$$', 1, 'Sunu, Bölüm 3, Örnek 12 (a ve b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s12b', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir top $15\ \mathrm{m/s}$ hızla yerden yukarı doğru fırlatılıyor. ($g = 10\ \mathrm{m/s^2}$) Maksimum yüksekliğe kaç saniyede çıkar ve maksimum yükseklik ne kadardır?', '{"choices":["$t = 1{,}5\\ \\mathrm{s}$; $y \\approx 11{,}3\\ \\mathrm{m}$","$t = 1{,}5\\ \\mathrm{s}$; $y = 22{,}5\\ \\mathrm{m}$","$t = 3\\ \\mathrm{s}$; $y \\approx 11{,}3\\ \\mathrm{m}$","$t = 1\\ \\mathrm{s}$; $y = 10\\ \\mathrm{m}$","$t = 1{,}5\\ \\mathrm{s}$; $y = 15\\ \\mathrm{m}$"]}', '{"index":0}', 'Tepede hız sıfırdır; bu koşul zamanı, zaman da konum denklemiyle yüksekliği verir.

---

**Zaman:** $$0 = 15 - 10t \quad\Rightarrow\quad t = 1{,}5\ \mathrm{s}$$

---

**Yükseklik:** $$y = 15 \cdot 1{,}5 - 5 \cdot 1{,}5^2 = 22{,}5 - 11{,}25 = 11{,}25 \approx 11{,}3\ \mathrm{m}$$

---

**Kontrol:** $$\frac{v_0^2}{2g} = \frac{225}{20} = 11{,}25\ \mathrm{m}\ ✓$$', 2, 'Sunu, Bölüm 3, Örnek 12 (c ve d)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s12c', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir top $15\ \mathrm{m/s}$ hızla yerden yukarı doğru fırlatılıyor. ($g = 10\ \mathrm{m/s^2}$) Top yerden $10\ \mathrm{m}$ yükseklikten hangi zamanlarda geçer?', '{"choices":["$t = 1\\ \\mathrm{s}$ ve $t = 2\\ \\mathrm{s}$","Yalnız $t = 1\\ \\mathrm{s}$","$t = 0{,}5\\ \\mathrm{s}$ ve $t = 2{,}5\\ \\mathrm{s}$","Yalnız $t = 2\\ \\mathrm{s}$","$t = 1\\ \\mathrm{s}$ ve $t = 3\\ \\mathrm{s}$"]}', '{"index":0}', 'Konum denklemini $10\ \mathrm{m}$''ye eşitle. Top bu yükseklikten bir kez çıkarken, bir kez inerken geçer; iki kök de geçerlidir.

---

**Denklem:** $$10 = 15t - 5t^2 \quad\Rightarrow\quad t^2 - 3t + 2 = 0$$

---

**Çarpanlar:** $$(t - 1)(t - 2) = 0 \quad\Rightarrow\quad t = 1\ \mathrm{s},\ \ t = 2\ \mathrm{s}$$

---

**Yorum:** $t = 1\ \mathrm{s}$''de yukarı çıkarken ($v = +5\ \mathrm{m/s}$), $t = 2\ \mathrm{s}$''de aşağı inerken ($v = -5\ \mathrm{m/s}$) geçer. İki an tepe anı $1{,}5\ \mathrm{s}$''ye göre simetriktir.', 2, 'Sunu, Bölüm 3, Örnek 12 (e)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s12d', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Bir top $15\ \mathrm{m/s}$ hızla yerden yukarı doğru fırlatılıyor. ($g = 10\ \mathrm{m/s^2}$) Atıldığından itibaren kaç saniye sonra yere düşer?', '{"choices":["3 s","1,5 s","2 s","4,5 s","6 s"]}', '{"index":0}', 'Yere dönmek $y = 0$ demektir. Çıkış süresi iniş süresine eşit olduğu için tepe zamanının iki katı da aynı sonucu verir.

---

**Denklem:** $$0 = 15t - 5t^2 = t\,(15 - 5t)$$

---

**Kökler:** $t = 0$ (başlangıç anı) ve $t = 3\ \mathrm{s}$ (düşüş anı).

---

**Kontrol:** $2 \times 1{,}5\ \mathrm{s} = 3\ \mathrm{s}$ ✓', 1, 'Sunu, Bölüm 3, Örnek 12 (f)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s13', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Yerden $45\ \mathrm{m}$ yükseklikteki bir binanın çatısından $1\ \mathrm{s}$ aralıklarla su damlıyor. Bir damla yere çarptığı anda ikinci damlanın yüksekliği ne kadardır? ($g = 10\ \mathrm{m/s^2}$)', '{"choices":["25 m","20 m","35 m","40 m","5 m"]}', '{"index":0}', 'Her damlaya kendi kronometresini ver: ikinci damla birinciden $1\ \mathrm{s}$ sonra yola çıktığı için $t_2 = t_1 - 1$. Orijini çatıda, aşağıyı pozitif almak denklemleri sadeleştirir: $y = \tfrac{1}{2}gt^2$.

---

**Birinci damlanın düşüş süresi:** $$45 = \tfrac{1}{2} \cdot 10 \cdot t_1^2 \quad\Rightarrow\quad t_1^2 = 9 \quad\Rightarrow\quad t_1 = 3\ \mathrm{s}$$

---

**İkinci damlanın süresi:** $$t_2 = t_1 - 1 = 2\ \mathrm{s}$$

---

**İkinci damlanın düştüğü yol:** $$y_2 = \tfrac{1}{2} \cdot 10 \cdot 2^2 = 20\ \mathrm{m}$$ Bu çatıdan aşağı ölçülen uzaklıktır.

---

**Yerden yükseklik:** $45 - 20 = 25\ \mathrm{m}$.', 3, 'Sunu, Bölüm 3, Örnek 13', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s14a', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Yerden bir top $12\ \mathrm{m/s}$ hızla yukarı doğru atıldığı anda, $32\ \mathrm{m}$ yükseklikteki bir binanın çatısından ikinci bir top $4\ \mathrm{m/s}$ hızla aşağı yönde fırlatılıyor. ($g = 10\ \mathrm{m/s^2}$)

[[G-S3-01]]

İki top ne zaman ve hangi yükseklikte çarpışırlar?', '{"choices":["$t = 2\\ \\mathrm{s}$; $y = 4\\ \\mathrm{m}$","$t = 2\\ \\mathrm{s}$; $y = 12\\ \\mathrm{m}$","$t = 4\\ \\mathrm{s}$; $y = 4\\ \\mathrm{m}$","$t = 1{,}6\\ \\mathrm{s}$; $y = 6{,}4\\ \\mathrm{m}$","$t = 2\\ \\mathrm{s}$; $y = 0$"]}', '{"index":0}', 'İki topu aynı koordinat sisteminde yaz: orijin yerde, $+y$ yukarı. Çarpışma anında iki topun $y$ konumu aynıdır.

---

**1. top:** $y_{10} = 0$, $v_{10} = +12\ \mathrm{m/s}$: $$y_1 = 12t - 5t^2$$

---

**2. top:** $y_{20} = 32\ \mathrm{m}$, $v_{20} = -4\ \mathrm{m/s}$ (aşağı): $$y_2 = 32 - 4t - 5t^2$$

---

**Eşitle:** $$12t - 5t^2 = 32 - 4t - 5t^2 \quad\Rightarrow\quad 16t = 32 \quad\Rightarrow\quad t = 2\ \mathrm{s}$$ $-5t^2$ terimleri iki yanda da olduğu için sadeleşir.

---

**Yükseklik:** $$y_1 = 12 \cdot 2 - 5 \cdot 4 = 24 - 20 = 4\ \mathrm{m}$$ Kontrol: $y_2 = 32 - 8 - 20 = 4\ \mathrm{m}$ ✓', 3, 'Sunu, Bölüm 3, Örnek 13, s. 32 (b ve c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-s14b', 'fizik', 'fz-u3', 3, 'mcq', 'original', 'Yerden bir top $12\ \mathrm{m/s}$ hızla yukarı doğru atıldığı anda, $32\ \mathrm{m}$ yükseklikteki bir binanın çatısından ikinci bir top $4\ \mathrm{m/s}$ hızla aşağı yönde fırlatılıyor. ($g = 10\ \mathrm{m/s^2}$)

[[G-S3-01]]

Çarpıştıkları anda her birinin hızı ne kadardır?', '{"choices":["$v_1 = -8\\ \\mathrm{m/s}$; $v_2 = -24\\ \\mathrm{m/s}$","$v_1 = 8\\ \\mathrm{m/s}$; $v_2 = -24\\ \\mathrm{m/s}$","$v_1 = -8\\ \\mathrm{m/s}$; $v_2 = -16\\ \\mathrm{m/s}$","$v_1 = 12\\ \\mathrm{m/s}$; $v_2 = -4\\ \\mathrm{m/s}$","$v_1 = 32\\ \\mathrm{m/s}$; $v_2 = -24\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Çarpışma anı $t = 2\ \mathrm{s}$''yi iki topun hız denklemine koy: $v_1 = 12 - 10t$, $v_2 = -4 - 10t$.

---

**Çarpışma anı:** $t = 2\ \mathrm{s}$ (önceki parça).

---

**1. top:** $$v_1 = 12 - 10 \cdot 2 = -8\ \mathrm{m/s}$$

---

**2. top:** $$v_2 = -4 - 10 \cdot 2 = -24\ \mathrm{m/s}$$

---

**Yorum:** $v_1$ negatif: 1. top $1{,}2\ \mathrm{s}$''de tepeye çıkmış, geri dönmüş ve aşağı inerken çarpışmıştır.', 3, 'Sunu, Bölüm 3, Örnek 13, s. 32 (d)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t01', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Bir koşucu $10\ \mathrm{s}$''de doğuya $30\ \mathrm{m}$ gidiyor, sonra $5\ \mathrm{s}$''de batıya $10\ \mathrm{m}$ geri dönüyor. Bu $15\ \mathrm{s}$ için ortalama hızın büyüklüğü ve ortalama sürat nedir?', '{"choices":["$\\bar{v} \\approx 1{,}33\\ \\mathrm{m/s}$; sürat $\\approx 2{,}67\\ \\mathrm{m/s}$","$\\bar{v} \\approx 2{,}67\\ \\mathrm{m/s}$; sürat $\\approx 1{,}33\\ \\mathrm{m/s}$","$\\bar{v} = 2\\ \\mathrm{m/s}$; sürat $= 2\\ \\mathrm{m/s}$","$\\bar{v} \\approx 1{,}33\\ \\mathrm{m/s}$; sürat $\\approx 1{,}33\\ \\mathrm{m/s}$","$\\bar{v} = 4\\ \\mathrm{m/s}$; sürat $\\approx 2{,}67\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Ortalama hız yerdeğiştirmeyi (son − ilk konum), ortalama sürat ise toplam yolu kullanır. Geri dönüş olduğunda ikisi farklı çıkar.

---

**Yerdeğiştirme:** doğu $+$ alınırsa $$\Delta x = +30 - 10 = +20\ \mathrm{m}$$

---

**Toplam yol:** $30 + 10 = 40\ \mathrm{m}$.

---

**Süre:** $10 + 5 = 15\ \mathrm{s}$.

---

**Sonuç:** $$\bar{v} = \frac{20}{15} \approx 1{,}33\ \mathrm{m/s}\ \text{(doğuya)}, \qquad \text{ortalama sürat} = \frac{40}{15} \approx 2{,}67\ \mathrm{m/s}$$', 2, '3. bölüm, Konum, yerdeğiştirme, ortalama hız ve sürat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t02', 'fizik', 'fz-u3', 3, 'tf', 'derived', 'Bir cisim hareket ettiği sürece yerdeğiştirmesi her zaman sıfırdan farklıdır.', '{}', '{"value":false}', 'Yerdeğiştirme yalnız ilk ve son konuma bakar. Başladığı yere dönen bir cismin (ör. pistte bir tur atan koşucu) yolu sıfırdan büyük ama yerdeğiştirmesi sıfırdır; ortalama hızı da sıfır olur.', 1, '3. bölüm, Konum, yerdeğiştirme, ortalama hız ve sürat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t03', 'fizik', 'fz-u3', 3, 'mcq', 'derived', '$x$ ekseninde hareket eden bir cisim $t = 2\ \mathrm{s}$''de $x = -6\ \mathrm{m}$, $t = 6\ \mathrm{s}$''de $x = 10\ \mathrm{m}$ konumundadır. Bu aralıktaki ortalama hızı nedir?', '{"choices":["4 m/s","1 m/s","−4 m/s","2,5 m/s","16 m/s"]}', '{"index":0}', '$\bar{v} = \dfrac{x_s - x_i}{t_s - t_i}$. İlk konum negatif olduğu için eksiyi dikkatle çıkar.

---

**Yerdeğiştirme:** $$\Delta x = 10 - (-6) = 16\ \mathrm{m}$$

---

**Süre:** $$\Delta t = 6 - 2 = 4\ \mathrm{s}$$

---

**Ortalama hız:** $$\bar{v} = \frac{16}{4} = 4\ \mathrm{m/s}$$', 2, '3. bölüm, Konum, yerdeğiştirme, ortalama hız ve sürat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t04', 'fizik', 'fz-u3', 3, 'fill', 'derived', 'Toplam yolun geçen süreye oranına ortalama ____ denir; bu büyüklük skalerdir ve hiçbir zaman negatif olmaz.', '{"blanks":1}', '{"blanks":[["sürat","surat"]]}', '**Ortalama sürat** = toplam yol / süre. Ortalama hız ise yerdeğiştirme / süredir ve işaretli (vektörel) bir büyüklüktür.', 1, '3. bölüm, Konum, yerdeğiştirme, ortalama hız ve sürat', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t05', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Bir cismin konumu $x(t) = 4t^2 - 3t + 2\ \mathrm{m}$ ile veriliyor. $t = 2\ \mathrm{s}$ anındaki hızı nedir?', '{"choices":["13 m/s","12 m/s","16 m/s","8 m/s","5 m/s"]}', '{"index":0}', 'Ani hız konumun türevidir: $v = \dfrac{dx}{dt}$.

---

**Türev:** $$v(t) = \frac{dx}{dt} = 8t - 3$$

---

**$t = 2$:** $$v(2) = 16 - 3 = 13\ \mathrm{m/s}$$

---

**Tuzak:** $x(2) = 16 - 6 + 2 = 12\ \mathrm{m}$ konumdur, hız değil.', 2, '3. bölüm, Ani hız ve ivme (türevle)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t06', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Konumu $x(t) = t^3 - 6t^2 + 9t\ \mathrm{m}$ olan bir cisim hangi anlarda anlık olarak durur?', '{"choices":["$t = 1\\ \\mathrm{s}$ ve $t = 3\\ \\mathrm{s}$","$t = 0$ ve $t = 3\\ \\mathrm{s}$","Yalnız $t = 2\\ \\mathrm{s}$","$t = 1\\ \\mathrm{s}$ ve $t = 2\\ \\mathrm{s}$","$t = 3\\ \\mathrm{s}$ ve $t = 9\\ \\mathrm{s}$"]}', '{"index":0}', 'Cismin durduğu an hızın sıfır olduğu andır. Konumun sıfır olduğu an değil; $v = \dfrac{dx}{dt} = 0$ çözülür.

---

**Hız:** $$v(t) = 3t^2 - 12t + 9$$

---

**Sıfıra eşitle:** $$3t^2 - 12t + 9 = 0 \quad\Rightarrow\quad t^2 - 4t + 3 = 0$$

---

**Çarpanlar:** $$(t - 1)(t - 3) = 0 \quad\Rightarrow\quad t = 1\ \mathrm{s},\ \ t = 3\ \mathrm{s}$$

---

**Yorum:** Cisim $t = 1\ \mathrm{s}$''de yön değiştirip geri gelir, $t = 3\ \mathrm{s}$''de yeniden yön değiştirir.', 2, '3. bölüm, Ani hız ve ivme (türevle)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t07', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Konumu $x(t) = 5t^3\ \mathrm{m}$ olan bir cismin $t = 2\ \mathrm{s}$ anındaki ivmesi nedir?', '{"choices":["60 m/s²","40 m/s²","30 m/s²","120 m/s²","15 m/s²"]}', '{"index":0}', 'İvme konumun ikinci türevidir: önce $v = \dfrac{dx}{dt}$, sonra $a = \dfrac{dv}{dt}$.

---

**Hız:** $$v = \frac{dx}{dt} = 15t^2$$

---

**İvme:** $$a = \frac{dv}{dt} = 30t$$

---

**$t = 2\ \mathrm{s}$:** $$a = 30 \cdot 2 = 60\ \mathrm{m/s^2}$$', 2, '3. bölüm, Ani hız ve ivme (türevle)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t08', 'fizik', 'fz-u3', 3, 'tf', 'derived', 'Bir cismin hızı bir anda sıfırsa o andaki ivmesi de sıfır olmak zorundadır.', '{}', '{"value":false}', 'Hız ve ivme ayrı büyüklüklerdir. Yukarı atılan taş tepede bir an durur ($v = 0$) ama ivmesi hâlâ $g$''dir, aşağı yönlüdür. İvme sıfır olsaydı taş tepede asılı kalırdı.', 2, '3. bölüm, Ani hız ve ivme (türevle)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t09', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Konum-zaman ($x$-$t$) grafiğinde bir noktadaki teğetin eğimi neyi verir?', '{"choices":["O andaki ani hızı","O andaki ivmeyi","O ana kadar alınan yolu","O andaki konumu","Ortalama ivmeyi"]}', '{"index":0}', '$x$-$t$ grafiğinde eğim $\Delta x/\Delta t$''dir. İki nokta arasındaki kirişin eğimi ortalama hızı, bir noktadaki teğetin eğimi ani hızı verir: $v = \dfrac{dx}{dt}$.', 2, '3. bölüm, Konum-zaman ve hız-zaman grafikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t10', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Hız-zaman ($v$-$t$) grafiğinde eğri ile zaman ekseni arasında kalan alan neyi verir?', '{"choices":["Yerdeğiştirmeyi","İvmeyi","Ortalama hızı","Hız değişimini","Ani hızı"]}', '{"index":0}', '$v$-$t$ grafiğinde alan $v \times t$, yani yerdeğiştirmedir: $\Delta x = \int v\,dt$. Eksenin altında kalan alan negatif yerdeğiştirme sayılır. Eğim ise ivmeyi verir.', 2, '3. bölüm, Konum-zaman ve hız-zaman grafikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t11', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Bir araba durgun hâlden $4\ \mathrm{s}$ içinde düzgün hızlanarak $20\ \mathrm{m/s}$''ye çıkıyor, sonra $6\ \mathrm{s}$ boyunca bu hızla gidiyor. $v$-$t$ grafiğinden $10\ \mathrm{s}$''de aldığı yol nedir?', '{"choices":["160 m","200 m","120 m","40 m","180 m"]}', '{"index":0}', '$v$-$t$ grafiğinin altındaki alanı parça parça hesapla: önce bir üçgen (hızlanma), sonra bir dikdörtgen (sabit hız).

---

**Üçgen (0–4 s):** $$\tfrac{1}{2} \cdot 4 \cdot 20 = 40\ \mathrm{m}$$

---

**Dikdörtgen (4–10 s):** $$6 \cdot 20 = 120\ \mathrm{m}$$

---

**Toplam:** $$40 + 120 = 160\ \mathrm{m}$$

---

**Tuzak:** $20\ \mathrm{m/s} \times 10\ \mathrm{s} = 200\ \mathrm{m}$ hesabı, ilk $4\ \mathrm{s}$''de arabanın $20\ \mathrm{m/s}$''den yavaş gittiğini unutur.', 3, '3. bölüm, Konum-zaman ve hız-zaman grafikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t12', 'fizik', 'fz-u3', 3, 'tf', 'derived', 'Hız-zaman grafiği yatay bir doğru olan bir cismin ivmesi sıfırdır.', '{}', '{"value":true}', '$v$-$t$ grafiğinin eğimi ivmedir. Yatay doğrunun eğimi sıfır olduğu için ivme sıfırdır; cisim sabit hızla gider (hız sıfır değilse).', 2, '3. bölüm, Konum-zaman ve hız-zaman grafikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t13', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Hız-zaman grafiği $0$–$5\ \mathrm{s}$ arasında $10\ \mathrm{m/s}$''den $0$''a doğrusal inen bir cismin ivmesi ve bu sürede aldığı yol nedir?', '{"choices":["$a = -2\\ \\mathrm{m/s^2}$; $25\\ \\mathrm{m}$","$a = 2\\ \\mathrm{m/s^2}$; $25\\ \\mathrm{m}$","$a = -2\\ \\mathrm{m/s^2}$; $50\\ \\mathrm{m}$","$a = -0{,}5\\ \\mathrm{m/s^2}$; $25\\ \\mathrm{m}$","$a = -10\\ \\mathrm{m/s^2}$; $5\\ \\mathrm{m}$"]}', '{"index":0}', 'Eğim ivmeyi, altında kalan alan yerdeğiştirmeyi verir.

---

**Eğim:** $$a = \frac{0 - 10}{5} = -2\ \mathrm{m/s^2}$$

---

**Alan (üçgen):** $$\Delta x = \tfrac{1}{2} \cdot 5 \cdot 10 = 25\ \mathrm{m}$$', 2, '3. bölüm, Konum-zaman ve hız-zaman grafikleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t14', 'fizik', 'fz-u3', 3, 'mcq', 'derived', '$15\ \mathrm{m/s}$ hızla giden bir bisikletli $-3\ \mathrm{m/s^2}$ ivmeyle fren yapıyor. Durana kadar kaç metre yol alır?', '{"choices":["37,5 m","75 m","5 m","45 m","22,5 m"]}', '{"index":0}', 'Süre sorulmuyor ve verilmiyor; zamansız hız denklemi $v^2 = v_0^2 + 2a\,\Delta x$ en kısa yoldur.

---

**Denklem:** $$0 = 15^2 + 2(-3)\,\Delta x$$

---

**Çöz:** $$6\,\Delta x = 225 \quad\Rightarrow\quad \Delta x = 37{,}5\ \mathrm{m}$$

---

**Kontrol:** Durma süresi $15/3 = 5\ \mathrm{s}$; ortalama hız $7{,}5\ \mathrm{m/s}$; $7{,}5 \times 5 = 37{,}5\ \mathrm{m}$ ✓', 2, '3. bölüm, Sabit ivmeli hareket denklemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t15', 'fizik', 'fz-u3', 3, 'mcq', 'derived', '$108\ \mathrm{km/sa}$ hızla giden bir otomobil sabit ivmeyle yavaşlayarak $6\ \mathrm{s}$''de duruyor. İvmesi ve durana kadar aldığı yol nedir?', '{"choices":["$a = -5\\ \\mathrm{m/s^2}$; $90\\ \\mathrm{m}$","$a = -18\\ \\mathrm{m/s^2}$; $324\\ \\mathrm{m}$","$a = -5\\ \\mathrm{m/s^2}$; $180\\ \\mathrm{m}$","$a = -30\\ \\mathrm{m/s^2}$; $90\\ \\mathrm{m}$","$a = -2{,}5\\ \\mathrm{m/s^2}$; $90\\ \\mathrm{m}$"]}', '{"index":0}', 'Önce birimi çevir: $108\ \mathrm{km/sa} \div 3{,}6 = 30\ \mathrm{m/s}$. Sonra $a = \Delta v/t$ ve $\Delta x = \tfrac{1}{2}(v_0 + v)\,t$.

---

**Birim:** $$v_0 = \frac{108}{3{,}6} = 30\ \mathrm{m/s}$$

---

**İvme:** $$a = \frac{0 - 30}{6} = -5\ \mathrm{m/s^2}$$

---

**Yol:** $$\Delta x = \tfrac{1}{2}(30 + 0) \cdot 6 = 90\ \mathrm{m}$$', 2, '3. bölüm, Sabit ivmeli hareket denklemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t16', 'fizik', 'fz-u3', 3, 'mcq', 'derived', '$6\ \mathrm{m/s}$ hızla giden bir cisim $2\ \mathrm{m/s^2}$ sabit ivmeyle hızlanıyor. $40\ \mathrm{m}$ sonra hızı ne olur ve bu ne kadar sürer?', '{"choices":["$v = 14\\ \\mathrm{m/s}$; $t = 4\\ \\mathrm{s}$","$v = 14\\ \\mathrm{m/s}$; $t = 7\\ \\mathrm{s}$","$v = 10\\ \\mathrm{m/s}$; $t = 2\\ \\mathrm{s}$","$v = 86\\ \\mathrm{m/s}$; $t = 40\\ \\mathrm{s}$","$v = 16\\ \\mathrm{m/s}$; $t = 5\\ \\mathrm{s}$"]}', '{"index":0}', 'Önce zamansız denklemle son hızı, sonra $v = v_0 + at$ ile süreyi bul.

---

**Son hız:** $$v^2 = 6^2 + 2 \cdot 2 \cdot 40 = 36 + 160 = 196 \quad\Rightarrow\quad v = 14\ \mathrm{m/s}$$

---

**Süre:** $$14 = 6 + 2t \quad\Rightarrow\quad t = 4\ \mathrm{s}$$

---

**Kontrol:** $$x = 6 \cdot 4 + \tfrac{1}{2} \cdot 2 \cdot 16 = 24 + 16 = 40\ \mathrm{m}\ ✓$$', 2, '3. bölüm, Sabit ivmeli hareket denklemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t17', 'fizik', 'fz-u3', 3, 'fill', 'derived', 'Durgun hâlden $4\ \mathrm{m/s^2}$ sabit ivmeyle harekete başlayan bir araç $5\ \mathrm{s}$ sonunda kaç metre yol almış olur? (Yalnız sayıyı yazın.)', '{"blanks":1}', '{"blanks":[["50","50 m"]]}', '$v_0 = 0$ olduğundan $x = \tfrac{1}{2}at^2$.

---

**Denklem:** $$x = \tfrac{1}{2} \cdot 4 \cdot 5^2$$

---

**Hesap:** $$x = 2 \cdot 25 = 50\ \mathrm{m}$$ Bu anda hızı $4 \cdot 5 = 20\ \mathrm{m/s}$''dir.', 2, '3. bölüm, Sabit ivmeli hareket denklemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t18', 'fizik', 'fz-u3', 3, 'tf', 'derived', 'Sabit ivmeli harekette bir zaman aralığındaki ortalama hız, ilk ve son hızların aritmetik ortalamasına eşittir.', '{}', '{"value":true}', 'İvme sabitken $v$-$t$ grafiği bir doğrudur; altındaki yamuğun alanı $\tfrac{1}{2}(v_0 + v)\,t$ olduğundan $\bar{v} = \tfrac{1}{2}(v_0 + v)$. İvme değişiyorsa bu bağıntı genelde geçerli değildir.', 2, '3. bölüm, Sabit ivmeli hareket denklemleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t19', 'fizik', 'fz-u3', 3, 'mcq', 'derived', '$80\ \mathrm{m}$ yükseklikten serbest bırakılan bir taş kaç saniyede yere düşer ve yere hangi hızla çarpar? ($g = 10\ \mathrm{m/s^2}$, hava direnci yok)', '{"choices":["$t = 4\\ \\mathrm{s}$; $v = 40\\ \\mathrm{m/s}$","$t = 8\\ \\mathrm{s}$; $v = 80\\ \\mathrm{m/s}$","$t = 4\\ \\mathrm{s}$; $v = 80\\ \\mathrm{m/s}$","$t = 16\\ \\mathrm{s}$; $v = 40\\ \\mathrm{m/s}$","$t = 2\\ \\mathrm{s}$; $v = 20\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Serbest bırakılan cismin $v_0 = 0$''dır. Aşağıyı pozitif alırsak $h = \tfrac{1}{2}gt^2$ ve $v = gt$.

---

**Süre:** $$80 = 5t^2 \quad\Rightarrow\quad t^2 = 16 \quad\Rightarrow\quad t = 4\ \mathrm{s}$$

---

**Hız:** $$v = gt = 10 \cdot 4 = 40\ \mathrm{m/s}$$ (aşağı).

---

**Kontrol:** $$v^2 = 2gh = 2 \cdot 10 \cdot 80 = 1600 \quad\Rightarrow\quad v = 40\ \mathrm{m/s}\ ✓$$', 2, '3. bölüm, Serbest düşme ve düşey atış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t20', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Yerden $30\ \mathrm{m/s}$ hızla düşey yukarı atılan bir topun çıkabileceği en büyük yükseklik ve havada kalma süresi nedir? ($g = 10\ \mathrm{m/s^2}$)', '{"choices":["$h = 45\\ \\mathrm{m}$; $6\\ \\mathrm{s}$","$h = 90\\ \\mathrm{m}$; $6\\ \\mathrm{s}$","$h = 45\\ \\mathrm{m}$; $3\\ \\mathrm{s}$","$h = 30\\ \\mathrm{m}$; $6\\ \\mathrm{s}$","$h = 45\\ \\mathrm{m}$; $9\\ \\mathrm{s}$"]}', '{"index":0}', 'Tepede $v = 0$: çıkış süresi $v_0/g$, yükseklik $v_0^2/2g$. Havada kalma süresi çıkış süresinin iki katıdır.

---

**Çıkış süresi:** $$t = \frac{v_0}{g} = \frac{30}{10} = 3\ \mathrm{s}$$

---

**Yükseklik:** $$h = \frac{v_0^2}{2g} = \frac{900}{20} = 45\ \mathrm{m}$$

---

**Havada kalma:** $2 \times 3 = 6\ \mathrm{s}$.', 2, '3. bölüm, Serbest düşme ve düşey atış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t21', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Yerden $60\ \mathrm{m}$ yükseklikteki bir çatıdan bir taş $20\ \mathrm{m/s}$ hızla düşey yukarı atılıyor. Taş kaç saniye sonra yere düşer ve yere hangi hızla çarpar? ($g = 10\ \mathrm{m/s^2}$)', '{"choices":["$t = 6\\ \\mathrm{s}$; $v = -40\\ \\mathrm{m/s}$","$t = 4\\ \\mathrm{s}$; $v = -20\\ \\mathrm{m/s}$","$t = 6\\ \\mathrm{s}$; $v = -60\\ \\mathrm{m/s}$","$t = 2\\ \\mathrm{s}$; $v = 0$","$t = 8\\ \\mathrm{s}$; $v = -40\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Orijini yerde, $+y$''yi yukarı al: $y = 60 + 20t - 5t^2$. Yere düşmek $y = 0$ demektir.

---

**Denklem:** $$0 = 60 + 20t - 5t^2 \quad\Rightarrow\quad t^2 - 4t - 12 = 0$$

---

**Çarpanlar:** $$(t - 6)(t + 2) = 0 \quad\Rightarrow\quad t = 6\ \mathrm{s}$$ Negatif kök atılır.

---

**Hız:** $$v = 20 - 10 \cdot 6 = -40\ \mathrm{m/s}$$

---

**Kontrol:** $$v^2 = 20^2 + 2 \cdot 10 \cdot 60 = 400 + 1200 = 1600 \quad\Rightarrow\quad |v| = 40\ \mathrm{m/s}\ ✓$$', 3, '3. bölüm, Serbest düşme ve düşey atış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t22', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Yerden $80\ \mathrm{m}$ yükseklikteki bir çatıdan $1\ \mathrm{s}$ aralıklarla su damlıyor. Bir damla yere çarptığı anda bir sonraki damla yerden kaç metre yüksektedir? ($g = 10\ \mathrm{m/s^2}$)', '{"choices":["35 m","45 m","5 m","20 m","75 m"]}', '{"index":0}', 'Her damlanın kendi kronometresi olsun: ikinci damla $1\ \mathrm{s}$ geç başladığı için $t_2 = t_1 - 1$. Orijin çatıda, aşağı pozitif.

---

**İlk damla:** $$80 = 5t_1^2 \quad\Rightarrow\quad t_1 = 4\ \mathrm{s}$$

---

**İkinci damla:** $t_2 = 3\ \mathrm{s}$: $$y_2 = 5 \cdot 3^2 = 45\ \mathrm{m}$$

---

**Yerden yükseklik:** $80 - 45 = 35\ \mathrm{m}$.', 3, '3. bölüm, Serbest düşme ve düşey atış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t23', 'fizik', 'fz-u3', 3, 'mcq', 'derived', 'Yerden bir top $20\ \mathrm{m/s}$ hızla yukarı atıldığı anda, $40\ \mathrm{m}$ yükseklikteki bir çatıdan ikinci bir top serbest bırakılıyor. İki top ne zaman ve yerden hangi yükseklikte karşılaşır? ($g = 10\ \mathrm{m/s^2}$)

[[G-S3-02]]', '{"choices":["$t = 2\\ \\mathrm{s}$; $y = 20\\ \\mathrm{m}$","$t = 2\\ \\mathrm{s}$; $y = 0$","$t = 1\\ \\mathrm{s}$; $y = 15\\ \\mathrm{m}$","$t = 4\\ \\mathrm{s}$; $y = 20\\ \\mathrm{m}$","$t = 2\\ \\mathrm{s}$; $y = 40\\ \\mathrm{m}$"]}', '{"index":0}', 'Aynı koordinat sistemi (orijin yerde, $+y$ yukarı) iki topa da uygulanır. Karşılaşmada $y_1 = y_2$; $-5t^2$ terimleri iki yanda da olduğu için sadeleşir.

---

**1. top:** $$y_1 = 20t - 5t^2$$

---

**2. top ($v_0 = 0$):** $$y_2 = 40 - 5t^2$$

---

**Eşitle:** $$20t = 40 \quad\Rightarrow\quad t = 2\ \mathrm{s}$$

---

**Yükseklik:** $$y_1 = 40 - 20 = 20\ \mathrm{m}$$

---

**Hızlar:** $v_1 = 20 - 20 = 0$ (1. top tam tepede), $v_2 = -20\ \mathrm{m/s}$.', 3, '3. bölüm, Serbest düşme ve düşey atış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t24', 'fizik', 'fz-u3', 3, 'tf', 'derived', 'Hava direnci ihmal edildiğinde aynı yükseklikten aynı anda bırakılan ağır ve hafif iki cisim yere aynı anda düşer.', '{}', '{"value":true}', 'Serbest düşmede ivme $g$''dir ve kütleye bağlı değildir. Düşme süresi $t = \sqrt{2h/g}$ yalnız yüksekliğe bağlıdır.', 1, '3. bölüm, Serbest düşme ve düşey atış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u3-t25', 'fizik', 'fz-u3', 3, 'tf', 'derived', 'Düşey yukarı atılan bir cismin tepe noktasındaki ivmesi sıfırdır.', '{}', '{"value":false}', 'Tepe noktasında sıfır olan hızdır. İvme hareket boyunca $g = 10\ \mathrm{m/s^2}$, aşağı yönlüdür; tepede de değişmez.', 2, '3. bölüm, Serbest düşme ve düşey atış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s01a', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Düzlemde bir hareketlinin koordinatları $x = t^3 - 2t^2 + 5$ ve $y = 3t^2 - 4t + 4$ olarak veriliyor (SI birimleri). Hız ve ivmeyi zamanın fonksiyonları olarak ifade edin.', '{"choices":["$\\vec{v} = (3t^2 - 4t)\\,\\hat{\\imath} + (6t - 4)\\,\\hat{\\jmath}$; $\\vec{a} = (6t - 4)\\,\\hat{\\imath} + 6\\,\\hat{\\jmath}$","$\\vec{v} = (3t^2 - 4t)\\,\\hat{\\imath} + (6t - 4)\\,\\hat{\\jmath}$; $\\vec{a} = (6t - 4)\\,\\hat{\\imath} + 6t\\,\\hat{\\jmath}$","$\\vec{v} = (3t^2 - 2t)\\,\\hat{\\imath} + (3t - 4)\\,\\hat{\\jmath}$; $\\vec{a} = (6t - 2)\\,\\hat{\\imath} + 3\\,\\hat{\\jmath}$","$\\vec{v} = (t^2 - 4t)\\,\\hat{\\imath} + (6t - 4)\\,\\hat{\\jmath}$; $\\vec{a} = (2t - 4)\\,\\hat{\\imath} + 6\\,\\hat{\\jmath}$","$\\vec{v} = (3t^2 - 4t + 5)\\,\\hat{\\imath} + (6t - 4)\\,\\hat{\\jmath}$; $\\vec{a} = (6t - 4)\\,\\hat{\\imath} + 6\\,\\hat{\\jmath}$"]}', '{"index":0}', 'İki boyutta her bileşen kendi başına türevlenir: $v_x = \dfrac{dx}{dt}$, $v_y = \dfrac{dy}{dt}$; $a_x = \dfrac{dv_x}{dt}$, $a_y = \dfrac{dv_y}{dt}$.

---

**$x$ bileşeni:** $$v_x = \frac{d}{dt}(t^3 - 2t^2 + 5) = 3t^2 - 4t, \qquad a_x = 6t - 4$$

---

**$y$ bileşeni:** $$v_y = \frac{d}{dt}(3t^2 - 4t + 4) = 6t - 4, \qquad a_y = 6\ \text{(sabit)}$$

---

**Vektör olarak:** $$\vec{v} = (3t^2 - 4t)\,\hat{\imath} + (6t - 4)\,\hat{\jmath}\ \mathrm{m/s}, \qquad \vec{a} = (6t - 4)\,\hat{\imath} + 6\,\hat{\jmath}\ \mathrm{m/s^2}$$', 2, 'Sunu, Bölüm 4, Örnek 1 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s01b', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Düzlemde bir hareketlinin koordinatları $x = t^3 - 2t^2 + 5$ ve $y = 3t^2 - 4t + 4$ olarak veriliyor (SI birimleri). $t = 1\ \mathrm{s}$ anında konum, hız ve ivme vektörlerini bulun.', '{"choices":["$\\vec{r} = 4\\hat{\\imath} + 3\\hat{\\jmath}$; $\\vec{v} = -\\hat{\\imath} + 2\\hat{\\jmath}$; $\\vec{a} = 2\\hat{\\imath} + 6\\hat{\\jmath}$","$\\vec{r} = 4\\hat{\\imath} + 3\\hat{\\jmath}$; $\\vec{v} = \\hat{\\imath} + 2\\hat{\\jmath}$; $\\vec{a} = 2\\hat{\\imath} + 6\\hat{\\jmath}$","$\\vec{r} = 3\\hat{\\imath} + 4\\hat{\\jmath}$; $\\vec{v} = -\\hat{\\imath} + 2\\hat{\\jmath}$; $\\vec{a} = 6\\hat{\\imath} + 2\\hat{\\jmath}$","$\\vec{r} = 4\\hat{\\imath} + 3\\hat{\\jmath}$; $\\vec{v} = -\\hat{\\imath} - 2\\hat{\\jmath}$; $\\vec{a} = -2\\hat{\\imath} + 6\\hat{\\jmath}$","$\\vec{r} = 5\\hat{\\imath} + 4\\hat{\\jmath}$; $\\vec{v} = -\\hat{\\imath} + 2\\hat{\\jmath}$; $\\vec{a} = 2\\hat{\\imath} + 6\\hat{\\jmath}$"]}', '{"index":0}', 'Bir andaki vektörleri bulmak için zaman fonksiyonlarına $t = 1$ koyulur; her bileşen ayrı hesaplanır.

---

**Konum:** $x(1) = 1 - 2 + 5 = 4$, $y(1) = 3 - 4 + 4 = 3$: $$\vec{r} = 4\hat{\imath} + 3\hat{\jmath}\ \mathrm{m}$$

---

**Hız:** $v_x(1) = 3 - 4 = -1$, $v_y(1) = 6 - 4 = 2$: $$\vec{v} = -\hat{\imath} + 2\hat{\jmath}\ \mathrm{m/s}$$

---

**İvme:** $a_x(1) = 6 - 4 = 2$, $a_y = 6$: $$\vec{a} = 2\hat{\imath} + 6\hat{\jmath}\ \mathrm{m/s^2}$$', 2, 'Sunu, Bölüm 4, Örnek 1 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s01c', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Düzlemde bir hareketlinin koordinatları $x = t^3 - 2t^2 + 5$ ve $y = 3t^2 - 4t + 4$ olarak veriliyor (SI birimleri). $t = 1\ \mathrm{s}$ anında hız ve ivmenin büyüklüğünü ve hız ile ivme arasındaki açıyı bulun.', '{"choices":["$|\\vec{v}| = \\sqrt{5}\\ \\mathrm{m/s}$; $|\\vec{a}| = \\sqrt{40}\\ \\mathrm{m/s^2}$; $\\theta = 45^\\circ$","$|\\vec{v}| = \\sqrt{5}\\ \\mathrm{m/s}$; $|\\vec{a}| = \\sqrt{40}\\ \\mathrm{m/s^2}$; $\\theta = 90^\\circ$","$|\\vec{v}| = 3\\ \\mathrm{m/s}$; $|\\vec{a}| = 8\\ \\mathrm{m/s^2}$; $\\theta = 45^\\circ$","$|\\vec{v}| = \\sqrt{5}\\ \\mathrm{m/s}$; $|\\vec{a}| = \\sqrt{40}\\ \\mathrm{m/s^2}$; $\\theta = 135^\\circ$","$|\\vec{v}| = \\sqrt{3}\\ \\mathrm{m/s}$; $|\\vec{a}| = \\sqrt{32}\\ \\mathrm{m/s^2}$; $\\theta = 60^\\circ$"]}', '{"index":0}', 'Büyüklükler Pisagor''la bulunur. İki vektör arasındaki açıyı skaler çarpım verir: $\cos\theta = \dfrac{\vec{v}\cdot\vec{a}}{|\vec{v}|\,|\vec{a}|}$.

---

**Büyüklükler:** $$|\vec{v}| = \sqrt{(-1)^2 + 2^2} = \sqrt{5}\ \mathrm{m/s}, \qquad |\vec{a}| = \sqrt{2^2 + 6^2} = \sqrt{40}\ \mathrm{m/s^2}$$

---

**Skaler çarpım:** $$\vec{v}\cdot\vec{a} = (-1)(2) + (2)(6) = -2 + 12 = 10$$

---

**Kosinüs:** $$\cos\theta = \frac{10}{\sqrt{5}\,\sqrt{40}} = \frac{10}{\sqrt{200}} = \frac{10}{10\sqrt{2}} = \frac{\sqrt{2}}{2}$$

---

**Açı:** $$\theta = \cos^{-1}\!\left(\frac{\sqrt{2}}{2}\right) = 45^\circ$$', 3, 'Sunu, Bölüm 4, Örnek 1 (c ve d)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s02a', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Düzlemde Hareket: Bir parçacık $20\ \mathrm{m/s}$''lik $x$ bileşenli ve $-15\ \mathrm{m/s}$''lik $y$ bileşenli ilk hızla $t = 0$''da başlangıç noktasından harekete geçmektedir. Parçacık sadece $a_x = 4\ \mathrm{m/s^2}$ ile verilen ivmenin $x$ bileşeniyle $xy$ düzleminde hareket etmektedir. Zamanın fonksiyonu olarak herhangi bir andaki hız vektörünü bulunuz.', '{"choices":["$\\vec{v} = (20 + 4t)\\,\\hat{\\imath} - 15\\,\\hat{\\jmath}\\ \\mathrm{m/s}$","$\\vec{v} = (20 + 4t)\\,\\hat{\\imath} + (-15 + 4t)\\,\\hat{\\jmath}\\ \\mathrm{m/s}$","$\\vec{v} = 20\\,\\hat{\\imath} + (-15 + 4t)\\,\\hat{\\jmath}\\ \\mathrm{m/s}$","$\\vec{v} = (20 + 2t^2)\\,\\hat{\\imath} - 15\\,\\hat{\\jmath}\\ \\mathrm{m/s}$","$\\vec{v} = (20 - 4t)\\,\\hat{\\imath} - 15\\,\\hat{\\jmath}\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Sabit ivmede her bileşen için $v = v_0 + at$ ayrı yazılır. İvmenin $y$ bileşeni sıfır olduğundan $v_y$ değişmez.

---

**Verilenler:** $v_{0x} = 20\ \mathrm{m/s}$, $v_{0y} = -15\ \mathrm{m/s}$, $a_x = 4\ \mathrm{m/s^2}$, $a_y = 0$.

---

**$x$ bileşeni:** $$v_x = v_{0x} + a_x t = 20 + 4t$$

---

**$y$ bileşeni:** $$v_y = -15 + 0 \cdot t = -15\ \mathrm{m/s}\ \text{(sabit)}$$

---

**Vektör:** $$\vec{v} = (20 + 4t)\,\hat{\imath} - 15\,\hat{\jmath}\ \mathrm{m/s}$$', 2, 'Sunu, Bölüm 4, Örnek 2 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s02b', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Düzlemde Hareket: Bir parçacık $20\ \mathrm{m/s}$''lik $x$ bileşenli ve $-15\ \mathrm{m/s}$''lik $y$ bileşenli ilk hızla $t = 0$''da başlangıç noktasından harekete geçmektedir. Parçacık sadece $a_x = 4\ \mathrm{m/s^2}$ ile verilen ivmenin $x$ bileşeniyle $xy$ düzleminde hareket etmektedir. $t = 5\ \mathrm{s}$''de parçacığın hızının büyüklüğünü ve yönünü hesaplayınız.', '{"choices":["$|\\vec{v}| \\approx 43\\ \\mathrm{m/s}$; $\\theta \\approx -21^\\circ$","$|\\vec{v}| \\approx 43\\ \\mathrm{m/s}$; $\\theta \\approx 21^\\circ$","$|\\vec{v}| = 25\\ \\mathrm{m/s}$; $\\theta \\approx -37^\\circ$","$|\\vec{v}| \\approx 55\\ \\mathrm{m/s}$; $\\theta \\approx -21^\\circ$","$|\\vec{v}| \\approx 43\\ \\mathrm{m/s}$; $\\theta \\approx -69^\\circ$"]}', '{"index":0}', 'Önce $t = 5\ \mathrm{s}$''deki bileşenleri bul, sonra büyüklük için Pisagor, yön için $\tan\theta = v_y/v_x$.

---

**Bileşenler:** $v_x = 20 + 4 \cdot 5 = 40\ \mathrm{m/s}$, $v_y = -15\ \mathrm{m/s}$: $$\vec{v} = 40\,\hat{\imath} - 15\,\hat{\jmath}\ \mathrm{m/s}$$

---

**Büyüklük:** $$|\vec{v}| = \sqrt{40^2 + 15^2} = \sqrt{1600 + 225} = \sqrt{1825} \approx 43\ \mathrm{m/s}$$

---

**Yön:** $$\theta = \tan^{-1}\!\left(\frac{-15}{40}\right) \approx -21^\circ$$ $v_x$ pozitif, $v_y$ negatif: dördüncü çeyrek, yani $+x$''in $21^\circ$ altı.', 2, 'Sunu, Bölüm 4, Örnek 2 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s03', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Maksimum atış uzaklığı (menzil): Yatay bir düzlemdeki cisim hangi açıda atılırsa en uzağa düşer, yani menzili (erimi) maksimum olur?', '{"choices":["45°","30°","60°","90°","37°"]}', '{"index":0}', 'Yatay düzlemde menzil $R = \dfrac{v_0^2 \sin 2\theta}{g}$. Aynı $v_0$ için $R$''nin en büyük olması $\sin 2\theta$''nın en büyük ($1$) olmasını ister.

---

**Yörünge denklemi:** $$y = (\tan\theta)\,x - \frac{g\,x^2}{2v_0^2\cos^2\theta}$$ Yere dönüşte $y = 0$.

---

**Çöz:** $x = 0$ (atış noktası) ya da $$x = \frac{2v_0^2 \cos^2\theta \tan\theta}{g} = \frac{2v_0^2 \sin\theta\cos\theta}{g}$$

---

**Menzil:** $2\sin\theta\cos\theta = \sin 2\theta$ olduğundan $$R = \frac{v_0^2 \sin 2\theta}{g}$$

---

**Maksimum:** $$\sin 2\theta = 1 \quad\Rightarrow\quad 2\theta = 90^\circ \quad\Rightarrow\quad \theta = 45^\circ$$', 1, 'Sunu, Bölüm 4, Örnek 3', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s04a', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir futbolcunun vurduğu top $30\ \mathrm{m/s}$ ilk hızla ve yatayla $37^\circ$ açı altında yükseliyor. ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$; $g = 10\ \mathrm{m/s^2}$) $t = 1\ \mathrm{s}$ anında topun konum ve hız bileşenleri ne olur?', '{"choices":["$x = 24\\ \\mathrm{m}$, $y = 13\\ \\mathrm{m}$; $v_x = 24\\ \\mathrm{m/s}$, $v_y = 8\\ \\mathrm{m/s}$","$x = 24\\ \\mathrm{m}$, $y = 18\\ \\mathrm{m}$; $v_x = 24\\ \\mathrm{m/s}$, $v_y = 18\\ \\mathrm{m/s}$","$x = 18\\ \\mathrm{m}$, $y = 19\\ \\mathrm{m}$; $v_x = 18\\ \\mathrm{m/s}$, $v_y = 14\\ \\mathrm{m/s}$","$x = 24\\ \\mathrm{m}$, $y = 13\\ \\mathrm{m}$; $v_x = 14\\ \\mathrm{m/s}$, $v_y = 8\\ \\mathrm{m/s}$","$x = 24\\ \\mathrm{m}$, $y = 23\\ \\mathrm{m}$; $v_x = 24\\ \\mathrm{m/s}$, $v_y = 28\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Eğik atışta yatay hareket sabit hızlı ($a_x = 0$), düşey hareket sabit ivmelidir ($a_y = -g$). Önce ilk hızın bileşenleri bulunur.

---

**İlk hız bileşenleri:** $$v_{0x} = 30\cos 37^\circ = 24\ \mathrm{m/s}, \qquad v_{0y} = 30\sin 37^\circ = 18\ \mathrm{m/s}$$

---

**Denklemler:** $$x = 24t, \quad y = 18t - 5t^2, \quad v_x = 24, \quad v_y = 18 - 10t$$

---

**Konum ($t = 1\ \mathrm{s}$):** $$x = 24\ \mathrm{m}, \qquad y = 18 - 5 = 13\ \mathrm{m}$$

---

**Hız ($t = 1\ \mathrm{s}$):** $$v_x = 24\ \mathrm{m/s}\ \text{(değişmez)}, \qquad v_y = 18 - 10 = 8\ \mathrm{m/s}$$', 2, 'Sunu, Bölüm 4, Örnek 4 (a ve b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s04b', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir futbolcunun vurduğu top $30\ \mathrm{m/s}$ ilk hızla ve yatayla $37^\circ$ açı altında yükseliyor. ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$; $g = 10\ \mathrm{m/s^2}$) Top maksimum yüksekliğe kaç saniyede çıkar ve maksimum yükseklik ne kadardır?', '{"choices":["$t = 1{,}8\\ \\mathrm{s}$; $y_{\\max} = 16{,}2\\ \\mathrm{m}$","$t = 3{,}6\\ \\mathrm{s}$; $y_{\\max} = 16{,}2\\ \\mathrm{m}$","$t = 1{,}8\\ \\mathrm{s}$; $y_{\\max} = 32{,}4\\ \\mathrm{m}$","$t = 2{,}4\\ \\mathrm{s}$; $y_{\\max} = 28{,}8\\ \\mathrm{m}$","$t = 1{,}8\\ \\mathrm{s}$; $y_{\\max} = 45\\ \\mathrm{m}$"]}', '{"index":0}', 'Tepe noktasında hız tamamen yataydır: $v_y = 0$. Bu anı $y$ denklemine koymak yüksekliği verir.

---

**Tepe anı:** $$v_y = 18 - 10t = 0 \quad\Rightarrow\quad t = 1{,}8\ \mathrm{s}$$

---

**Yükseklik:** $$y_{\max} = 18 \cdot 1{,}8 - 5 \cdot 1{,}8^2 = 32{,}4 - 16{,}2 = 16{,}2\ \mathrm{m}$$

---

**Kontrol:** $$\frac{v_{0y}^2}{2g} = \frac{324}{20} = 16{,}2\ \mathrm{m}\ ✓$$', 2, 'Sunu, Bölüm 4, Örnek 4 (c ve d)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s04c', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir futbolcunun vurduğu top $30\ \mathrm{m/s}$ ilk hızla ve yatayla $37^\circ$ açı altında yükseliyor. ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$; $g = 10\ \mathrm{m/s^2}$) Top ne kadar uzağa düşer?', '{"choices":["≈ 86 m","≈ 43 m","90 m","≈ 108 m","≈ 65 m"]}', '{"index":0}', 'Yatay düzlemde uçuş süresi tepe süresinin iki katıdır; menzil yatay hız ile uçuş süresinin çarpımıdır.

---

**Uçuş süresi:** $$t_u = 2 \times 1{,}8 = 3{,}6\ \mathrm{s}$$

---

**Menzil:** $$R = v_{0x}\,t_u = 24 \times 3{,}6 = 86{,}4 \approx 86\ \mathrm{m}$$

---

**Formülle kontrol:** $$R = \frac{v_0^2 \sin 2\theta}{g} = \frac{900 \times \sin 74^\circ}{10} = \frac{900 \times 0{,}96}{10} = 86{,}4\ \mathrm{m}\ ✓$$', 2, 'Sunu, Bölüm 4, Örnek 4 (e)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s05', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir top $9\ \mathrm{m}$ ötedeki bir duvara yatayla $53^\circ$ açı altında atılıyor. Top duvara yerden $7\ \mathrm{m}$ yükseklikte çarpıyor. Topun ilk hızı ne idi? ($\cos 53^\circ = 0{,}6$; $\tan 53^\circ = 4/3$; $g = 10\ \mathrm{m/s^2}$)

[[G-S4-01]]', '{"choices":["15 m/s","10 m/s","20 m/s","12 m/s","225 m/s"]}', '{"index":0}', 'Zaman verilmediği için yörünge denklemini kullanmak en hızlı yoldur: $$y = (\tan\theta)\,x - \frac{g\,x^2}{2v_0^2\cos^2\theta}$$ Not: sunu "$\tan 37^\circ = 4/3$" yazmış; kullanılan değer $\tan 53^\circ = 4/3$''tür.

---

**Bilinenler:** $x = 9\ \mathrm{m}$, $y = 7\ \mathrm{m}$, $\tan 53^\circ = 4/3$, $\cos 53^\circ = 0{,}6$.

---

**Yerine koy:** $$7 = \frac{4}{3} \cdot 9 - \frac{10 \cdot 81}{2v_0^2 \cdot 0{,}36}$$

---

**Sadeleştir:** $$7 = 12 - \frac{810}{0{,}72\,v_0^2} \quad\Rightarrow\quad \frac{810}{0{,}72\,v_0^2} = 5$$

---

**Çöz:** $$v_0^2 = \frac{810}{3{,}6} = 225 \quad\Rightarrow\quad v_0 = 15\ \mathrm{m/s}$$

---

**Zamanla kontrol:** $v_{0x} = 9\ \mathrm{m/s}$, duvara $t = 1\ \mathrm{s}$''de varır: $$y = 12 \cdot 1 - 5 \cdot 1^2 = 7\ \mathrm{m}\ ✓$$', 3, 'Sunu, Bölüm 4, Örnek 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s06a', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Liman ağzından $560\ \mathrm{m}$ açıkta bir gemi vardır. Liman ağzında deniz düzeyinde bulunan bir savunma topu $82\ \mathrm{m/s}$ ilk hızıyla gülleler atıyor. Gemiyi vurmak için gülleler yatayla hangi $\theta$ açısıyla atılmalıdır? ($g = 9{,}8\ \mathrm{m/s^2}$)', '{"choices":["$\\theta \\approx 27^\\circ$ ya da $\\theta \\approx 63^\\circ$","Yalnız $\\theta \\approx 27^\\circ$","$\\theta \\approx 45^\\circ$","$\\theta \\approx 54^\\circ$ ya da $\\theta \\approx 36^\\circ$","Yalnız $\\theta \\approx 63^\\circ$"]}', '{"index":0}', 'Menzil $R = \dfrac{v_0^2 \sin 2\theta}{g}$''den $\sin 2\theta$ bulunur. $\sin 2\theta = k$ denkleminin $0^\circ$–$90^\circ$ arasında iki çözümü vardır: $\theta$ ve $90^\circ - \theta$ (tümler açılar aynı menzili verir). Not: sunu $g$''yi 10 yazmış, sayılar $g = 9{,}8$ ile çıkıyor.

---

**Menzil formülü:** $$560 = \frac{82^2 \sin 2\theta}{9{,}8}$$

---

**$\sin 2\theta$:** $$\sin 2\theta = \frac{560 \cdot 9{,}8}{6724} \approx 0{,}816$$

---

**İlk açı:** $$2\theta = \sin^{-1}(0{,}816) \approx 54{,}7^\circ \quad\Rightarrow\quad \theta \approx 27^\circ$$

---

**İkinci açı:** $\sin(180^\circ - 54{,}7^\circ)$ de $0{,}816$''dır: $$2\theta \approx 125{,}3^\circ \quad\Rightarrow\quad \theta \approx 63^\circ$$ İki açı tümler: $27^\circ + 63^\circ = 90^\circ$.', 3, 'Sunu, Bölüm 4, Örnek 6 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s06b', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Liman ağzında deniz düzeyinde bulunan bir savunma topu $82\ \mathrm{m/s}$ ilk hızıyla gülleler atıyor. Güllelerin maksimum menzili nedir? ($g = 9{,}8\ \mathrm{m/s^2}$)', '{"choices":["≈ 686 m","≈ 343 m","≈ 672 m","≈ 560 m","≈ 1372 m"]}', '{"index":0}', 'Maksimum menzil $\theta = 45^\circ$''de, $\sin 90^\circ = 1$ iken elde edilir: $R_{\max} = v_0^2/g$.

---

**Açı:** $\theta = 45^\circ$, dolayısıyla $\sin 2\theta = 1$.

---

**Menzil:** $$R_{\max} = \frac{82^2}{9{,}8} = \frac{6724}{9{,}8} \approx 686\ \mathrm{m}$$ $g = 10$ alınsaydı $672\ \mathrm{m}$ çıkardı.', 2, 'Sunu, Bölüm 4, Örnek 6 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s07', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir uçak zor durumdaki bir kısım kaşife acil kumanya paketi atıyor. Uçak yerden $100\ \mathrm{m}$ yükseklikte $40\ \mathrm{m/s}$ hızla yatay olarak yol alıyor ise paket bırakıldığı noktaya göre nerede yere çarpar? ($g = 10\ \mathrm{m/s^2}$)', '{"choices":["≈ 179 m ileride","≈ 89 m ileride","400 m ileride","100 m ileride","≈ 253 m ileride"]}', '{"index":0}', 'Paket bırakıldığı anda uçağın yatay hızını taşır, düşey ilk hızı sıfırdır. Düşme süresini yalnız yükseklik belirler; yatay mesafe bu süre ile yatay hızın çarpımıdır. Not: sunu $t$''yi $4{,}5\ \mathrm{s}$''ye yuvarlayıp $181\ \mathrm{m}$ bulmuş; $\sqrt{20} \approx 4{,}47$ ile $179\ \mathrm{m}$ çıkar.

---

**İlk hız:** $v_{0x} = 40\ \mathrm{m/s}$, $v_{0y} = 0$.

---

**Düşme süresi:** $$0 = 100 - \tfrac{1}{2} \cdot 10 \cdot t^2 \quad\Rightarrow\quad t^2 = 20 \quad\Rightarrow\quad t = \sqrt{20} \approx 4{,}47\ \mathrm{s}$$

---

**Yatay uzaklık:** $$x = 40 \times 4{,}47 \approx 179\ \mathrm{m}$$', 2, 'Sunu, Bölüm 4, Örnek 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s08a', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir motosikletli yerden $20\ \mathrm{m}$ yükseklikteki bir uçurumdan $v_0$ yatay hızıyla atlayıp $9\ \mathrm{m}$ genişliğindeki bir nehrin öte tarafına geçebilmek istiyor. ($g = 10\ \mathrm{m/s^2}$)

[[G-S4-02]]

Motosikletin uçuş süresi ne kadardır ve ilk hızı ne olmalıdır ki nehri geçebilsin?', '{"choices":["$t = 2\\ \\mathrm{s}$; $v_0 = 4{,}5\\ \\mathrm{m/s}$","$t = 4\\ \\mathrm{s}$; $v_0 = 2{,}25\\ \\mathrm{m/s}$","$t = 2\\ \\mathrm{s}$; $v_0 = 9\\ \\mathrm{m/s}$","$t = 1\\ \\mathrm{s}$; $v_0 = 9\\ \\mathrm{m/s}$","$t = 2\\ \\mathrm{s}$; $v_0 = 20\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Yatay atış eğik atışın $\theta = 0$ hâlidir. Uçuş süresini düşey hareket ($20\ \mathrm{m}$ düşüş) belirler; yatay hız bu sürede $9\ \mathrm{m}$ gitmeye yetmelidir.

---

**Denklemler:** Orijin uçurumun dibinde: $$x = v_0 t, \qquad y = 20 - 5t^2$$

---

**Süre:** $$0 = 20 - 5t^2 \quad\Rightarrow\quad t = 2\ \mathrm{s}$$

---

**İlk hız:** $$9 = v_0 \cdot 2 \quad\Rightarrow\quad v_0 = 4{,}5\ \mathrm{m/s}$$ Bu, gereken en küçük hızdır.', 2, 'Sunu, Bölüm 4, Örnek 8 (a ve b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s08b', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir motosikletli yerden $20\ \mathrm{m}$ yükseklikteki bir uçurumdan $v_0$ yatay hızıyla atlayıp $9\ \mathrm{m}$ genişliğindeki bir nehrin öte tarafına geçebilmek istiyor. ($g = 10\ \mathrm{m/s^2}$)

[[G-S4-02]]

Motosiklet $v_0 = 4{,}5\ \mathrm{m/s}$ ile atlarsa yere çarpmadan hemen önceki hızı ne olur?', '{"choices":["≈ 21 m/s","≈ 24,5 m/s","20 m/s","4,5 m/s","≈ 15,5 m/s"]}', '{"index":0}', 'Çarpma anındaki hız iki bileşenin vektörel toplamıdır; yatay bileşen değişmez, düşey bileşen $-gt$ olur. Bileşenler toplanmaz, Pisagor uygulanır.

---

**Yatay bileşen:** $v_x = 4{,}5\ \mathrm{m/s}$.

---

**Düşey bileşen:** $$v_y = -gt = -10 \cdot 2 = -20\ \mathrm{m/s}$$ (aşağı).

---

**Büyüklük:** $$v = \sqrt{4{,}5^2 + 20^2} = \sqrt{20{,}25 + 400} \approx \sqrt{420} \approx 21\ \mathrm{m/s}$$', 2, 'Sunu, Bölüm 4, Örnek 8 (c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s09a', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir top $33\ \mathrm{m}$ yükseklikte bir binanın çatısından, yatayla $53^\circ$ açı altında $5\ \mathrm{m/s}$ hızıyla atılıyor. Yerde, binanın kapısında beklemekte olan bir çocuk topla aynı anda ve aynı yönde, sabit $a$ ivmesiyle koşmaya başlıyor. ($\sin 53^\circ = 0{,}8$; $\cos 53^\circ = 0{,}6$; $g = 10\ \mathrm{m/s^2}$)

[[G-S4-03]]

Topun yere düşünceye kadar uçuş süresi ne olur?', '{"choices":["3 s","0,8 s","2,6 s","3,8 s","2,2 s"]}', '{"index":0}', 'Orijini çocuğun bulunduğu yerde (binanın dibinde) al. Topun düşey denklemi $y = 33 + 4t - 5t^2$; yere düşmek $y = 0$ demektir.

---

**İlk hız bileşenleri:** $$v_{0x} = 5 \times 0{,}6 = 3\ \mathrm{m/s}, \qquad v_{0y} = 5 \times 0{,}8 = 4\ \mathrm{m/s}$$

---

**Denklem:** $$y = 33 + 4t - 5t^2 = 0 \quad\Rightarrow\quad 5t^2 - 4t - 33 = 0$$

---

**Kökler:** $$t = \frac{4 \pm \sqrt{16 + 660}}{10} = \frac{4 \pm 26}{10} \quad\Rightarrow\quad t = 3\ \mathrm{s} \ \text{ ya da } \ t = -2{,}2\ \mathrm{s}$$

---

**Sonuç:** Negatif kök atılır, $t = 3\ \mathrm{s}$.', 3, 'Sunu, Bölüm 4, Örnek 9 (a ve b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s09b', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir top $33\ \mathrm{m}$ yükseklikte bir binanın çatısından, yatayla $53^\circ$ açı altında $5\ \mathrm{m/s}$ hızıyla atılıyor. Yerde, binanın kapısında beklemekte olan bir çocuk topla aynı anda ve aynı yönde, sabit $a$ ivmesiyle koşmaya başlıyor. ($\sin 53^\circ = 0{,}8$; $\cos 53^\circ = 0{,}6$; $g = 10\ \mathrm{m/s^2}$)

[[G-S4-03]]

Top binadan ne kadar uzağa düşer ve çocuğun ivmesi ne olmalıdır ki top yere düşmeden onu tutabilsin?', '{"choices":["$x = 9\\ \\mathrm{m}$; $a = 2\\ \\mathrm{m/s^2}$","$x = 15\\ \\mathrm{m}$; $a = 3{,}3\\ \\mathrm{m/s^2}$","$x = 9\\ \\mathrm{m}$; $a = 6\\ \\mathrm{m/s^2}$","$x = 9\\ \\mathrm{m}$; $a = 1\\ \\mathrm{m/s^2}$","$x = 12\\ \\mathrm{m}$; $a = 2{,}7\\ \\mathrm{m/s^2}$"]}', '{"index":0}', 'Top ile çocuk aynı anda aynı $x$ konumunda olmalı. Çocuğun hareketi durgun hâlden sabit ivmeli: $x_2 = \tfrac{1}{2}at^2$.

---

**Topun yatay yolu:** $$x_1 = 3t = 3 \cdot 3 = 9\ \mathrm{m}$$

---

**Çocuğun denklemi:** $$x_2 = \tfrac{1}{2}at^2$$

---

**Eşitle ($t = 3\ \mathrm{s}$):** $$9 = \tfrac{1}{2} \cdot a \cdot 9 \quad\Rightarrow\quad a = 2\ \mathrm{m/s^2}$$', 3, 'Sunu, Bölüm 4, Örnek 9 (c ve d)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s10', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir taş, yüksekliği $45\ \mathrm{m}$ olan bir binanın tepesinden yatayla $30^\circ$ açı yapacak şekilde $20\ \mathrm{m/s}$''lik ilk hızla fırlatılıyor. Taş ne kadar sürede yere düşer ve yere hangi hızla çarpar? ($g = 9{,}8\ \mathrm{m/s^2}$)

[[G-S4-04]]', '{"choices":["$t \\approx 4{,}22\\ \\mathrm{s}$; $v \\approx 35{,}9\\ \\mathrm{m/s}$","$t \\approx 3{,}03\\ \\mathrm{s}$; $v \\approx 35{,}9\\ \\mathrm{m/s}$","$t \\approx 4{,}22\\ \\mathrm{s}$; $v \\approx 31{,}4\\ \\mathrm{m/s}$","$t \\approx 4{,}22\\ \\mathrm{s}$; $v \\approx 48{,}7\\ \\mathrm{m/s}$","$t \\approx 2{,}04\\ \\mathrm{s}$; $v = 20\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Orijini atış noktasına koy; yer $y = -45\ \mathrm{m}$''dedir. Düşey denklemden süre, sonra iki bileşenden çarpma hızı bulunur.

---

**Bileşenler:** $$v_{0x} = 20\cos 30^\circ \approx 17{,}3\ \mathrm{m/s}, \qquad v_{0y} = 20\sin 30^\circ = 10\ \mathrm{m/s}$$

---

**Düşey denklem:** $$-45 = 10t - 4{,}9t^2 \quad\Rightarrow\quad 4{,}9t^2 - 10t - 45 = 0$$

---

**Kök:** $$t = \frac{10 + \sqrt{100 + 882}}{9{,}8} = \frac{10 + 31{,}3}{9{,}8} \approx 4{,}22\ \mathrm{s}$$

---

**Düşey hız:** $$v_y = 10 - 9{,}8 \times 4{,}22 \approx -31{,}4\ \mathrm{m/s}$$

---

**Çarpma hızı:** $$v = \sqrt{17{,}3^2 + 31{,}4^2} \approx \sqrt{299 + 986} \approx 35{,}9\ \mathrm{m/s}$$

---

**Enerjiyle kontrol:** $$v^2 = v_0^2 + 2gh = 400 + 882 = 1282 \quad\Rightarrow\quad v \approx 35{,}8\ \mathrm{m/s}\ ✓$$ Aradaki fark yuvarlamadan gelir.', 3, 'Sunu, Bölüm 4, Örnek 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s11a', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir binanın dış asansörü yerden $8\ \mathrm{m}$ yükseklikteyken sabit bir $u$ hızıyla inmeye başlıyor. Aynı anda, binadan $6\ \mathrm{m}$ yatay uzaklıkta beklemekte olan bir çocuk, elindeki topu $20\ \mathrm{m/s}$ hızla ve $53^\circ$ açıyla, asansöre doğru fırlatıyor. ($\sin 53^\circ = 0{,}8$; $\cos 53^\circ = 0{,}6$; $g = 10\ \mathrm{m/s^2}$)

[[G-S4-05]]

Top duvara kaç saniye sonra ve hangi yükseklikte çarpar?', '{"choices":["$t = 0{,}5\\ \\mathrm{s}$; $y = 6{,}75\\ \\mathrm{m}$","$t = 0{,}5\\ \\mathrm{s}$; $y = 8\\ \\mathrm{m}$","$t = 0{,}3\\ \\mathrm{s}$; $y = 4{,}35\\ \\mathrm{m}$","$t = 0{,}5\\ \\mathrm{s}$; $y = 1{,}25\\ \\mathrm{m}$","$t = 0{,}75\\ \\mathrm{s}$; $y = 9{,}2\\ \\mathrm{m}$"]}', '{"index":0}', 'Topun yatay hızı sabittir; $6\ \mathrm{m}$''yi ne kadar sürede aldığı çarpma anını verir. O anı düşey denkleme koy.

---

**Bileşenler:** $$v_{0x} = 20 \times 0{,}6 = 12\ \mathrm{m/s}, \qquad v_{0y} = 20 \times 0{,}8 = 16\ \mathrm{m/s}$$

---

**Denklemler (orijin top):** $$x_1 = 12t, \qquad y_1 = 16t - 5t^2$$

---

**Çarpma anı:** $$6 = 12t \quad\Rightarrow\quad t = 0{,}5\ \mathrm{s}$$

---

**Yükseklik:** $$y_1 = 16 \times 0{,}5 - 5 \times 0{,}25 = 8 - 1{,}25 = 6{,}75\ \mathrm{m}$$', 2, 'Sunu, Bölüm 4, Örnek 11 (b ve c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s11b', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir binanın dış asansörü yerden $8\ \mathrm{m}$ yükseklikteyken sabit bir $u$ hızıyla inmeye başlıyor. Aynı anda, binadan $6\ \mathrm{m}$ yatay uzaklıkta beklemekte olan bir çocuk, elindeki topu $20\ \mathrm{m/s}$ hızla ve $53^\circ$ açıyla, asansöre doğru fırlatıyor. ($\sin 53^\circ = 0{,}8$; $\cos 53^\circ = 0{,}6$; $g = 10\ \mathrm{m/s^2}$)

[[G-S4-05]]

Asansörün $u$ hızı ne olmalıdır ki top asansöre çarpsın?', '{"choices":["2,5 m/s","1,25 m/s","6,75 m/s","16 m/s","3,5 m/s"]}', '{"index":0}', 'Asansör sabit hızla iner: $y_2 = 8 - ut$. Top asansöre çarpacaksa çarpma anında ikisinin yüksekliği aynı olmalı.

---

**Asansör:** $$y_2 = 8 - u\,t$$

---

**Çarpma anı:** $t = 0{,}5\ \mathrm{s}$, topun yüksekliği $6{,}75\ \mathrm{m}$ (önceki parça).

---

**Eşitle:** $$6{,}75 = 8 - 0{,}5\,u \quad\Rightarrow\quad 0{,}5\,u = 1{,}25 \quad\Rightarrow\quad u = 2{,}5\ \mathrm{m/s}$$', 2, 'Sunu, Bölüm 4, Örnek 11 (d)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s12a', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Durgun sudaki hızı $20\ \mathrm{km/saat}$ olan bir motor, genişliği $2\ \mathrm{km}$ olan bir nehri geçmeyi deniyor. Nehirde akıntı hızı $5\ \mathrm{km/saat}$''tir.

[[G-S4-06]]

Kaptan tekneyi kıyıya dik olarak sürmek istediğinde, motorun yere göre hızı ve yönü ne olur?', '{"choices":["≈ 21 km/sa; dik doğrultudan akıntı yönüne ≈ 14°","25 km/sa; akıntı yönüne 14°","15 km/sa; dik doğrultudan akıntıya karşı ≈ 14°","≈ 19 km/sa; akıntı yönüne ≈ 15°","20 km/sa; tam karşıya"]}', '{"index":0}', 'Hız toplama: $\vec{v}_{MO} = \vec{v}_{MN} + \vec{v}_{NO}$ (motorun yere göre hızı = motorun nehre göre hızı + nehrin yere göre hızı). Tekne kıyıya dik tutulursa iki vektör birbirine diktir.

---

**Vektörler:** $v_{MN} = 20\ \mathrm{km/sa}$ (karşıya), $v_{NO} = 5\ \mathrm{km/sa}$ (akıntı yönünde), aralarında $90^\circ$.

---

**Büyüklük:** $$v_{MO} = \sqrt{20^2 + 5^2} = \sqrt{425} \approx 21\ \mathrm{km/sa}$$

---

**Yön:** $$\tan\theta = \frac{5}{20} = 0{,}25 \quad\Rightarrow\quad \theta \approx 14^\circ$$ Tekne karşıya dik doğrultudan akıntı yönüne $14^\circ$ sapar.', 2, 'Sunu, Bölüm 4, Örnek 12 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s12b', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Durgun sudaki hızı $20\ \mathrm{km/saat}$ olan bir motor, genişliği $2\ \mathrm{km}$ olan bir nehri geçmeyi deniyor. Nehirde akıntı hızı $5\ \mathrm{km/saat}$''tir.

[[G-S4-06]]

Kaptan bu kez nehri dikine geçmek istiyor. Teknenin burnunu hangi yönde tutmalıdır ki yerden gözlenen hızı kıyıya dik olsun? Bu durumda yere göre hızı ne olur?', '{"choices":["Akıntıya karşı ≈ 15°; ≈ 19 km/sa","Akıntı yönüne ≈ 15°; ≈ 19 km/sa","Akıntıya karşı ≈ 14°; ≈ 21 km/sa","Akıntıya karşı 45°; 15 km/sa","Tam karşıya; 20 km/sa"]}', '{"index":0}', 'Bu kez toplam $\vec{v}_{MO}$ kıyıya dik olmalı. $\vec{v}_{MN}$ hipotenüs olur; akıntıyı dengelemek için burun akıntıya karşı çevrilir.

---

**Üçgen:** $v_{MN} = 20$ (hipotenüs), $v_{NO} = 5$, $\vec{v}_{MO}$ kıyıya dik.

---

**Açı:** $$\sin\theta = \frac{v_{NO}}{v_{MN}} = \frac{5}{20} = 0{,}25 \quad\Rightarrow\quad \theta \approx 15^\circ$$ Burun akıntıya karşı çevrilir.

---

**Hız:** $$v_{MO} = \sqrt{20^2 - 5^2} = \sqrt{375} \approx 19\ \mathrm{km/sa}$$', 3, 'Sunu, Bölüm 4, Örnek 12 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s12c', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Durgun sudaki hızı $20\ \mathrm{km/saat}$ olan bir motor, genişliği $2\ \mathrm{km}$ olan bir nehri geçmeyi deniyor. Nehirde akıntı hızı $5\ \mathrm{km/saat}$''tir.

[[G-S4-06]]

Her iki durumda karşıya geçiş sürelerini hesaplayın.', '{"choices":["$t_a = 6\\ \\mathrm{dk}$; $t_b \\approx 6{,}2\\ \\mathrm{dk}$","$t_a \\approx 5{,}7\\ \\mathrm{dk}$; $t_b = 6\\ \\mathrm{dk}$","$t_a = 6\\ \\mathrm{dk}$; $t_b = 6\\ \\mathrm{dk}$","$t_a \\approx 6{,}2\\ \\mathrm{dk}$; $t_b = 6\\ \\mathrm{dk}$","$t_a = 8\\ \\mathrm{dk}$; $t_b \\approx 6{,}2\\ \\mathrm{dk}$"]}', '{"index":0}', 'Karşıya geçiş süresini yalnız kıyıya dik hız bileşeni belirler. Not: sunu $t_b$''yi $0{,}11\ \mathrm{sa} = 6{,}5\ \mathrm{dk}$''ya yuvarlamış; $2/19{,}4 \approx 0{,}103\ \mathrm{sa} \approx 6{,}2\ \mathrm{dk}$.

---

**(a) durumu:** Kıyıya dik bileşen $v_{MN} = 20\ \mathrm{km/sa}$: $$t_a = \frac{2\ \mathrm{km}}{20\ \mathrm{km/sa}} = 0{,}10\ \mathrm{sa} = 6\ \mathrm{dk}$$ Sunudaki gibi çapraz yolu ($L/\cos 14^\circ$) $21\ \mathrm{km/sa}$''e bölmek de aynı sonucu verir.

---

**(b) durumu:** Kıyıya dik hız $v_{MO} = \sqrt{375} \approx 19{,}4\ \mathrm{km/sa}$: $$t_b = \frac{2}{19{,}4} \approx 0{,}103\ \mathrm{sa} \approx 6{,}2\ \mathrm{dk}$$

---

**Yorum:** En kısa sürede geçmek için burun kıyıya dik tutulur; en kısa yoldan geçmek için akıntıya karşı çevrilir ve biraz daha uzun sürer.', 3, 'Sunu, Bölüm 4, Örnek 12 (c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-s13', 'fizik', 'fz-u4', 4, 'mcq', 'original', 'Bir bot, doğuya doğru (yere göre) sabit $5\ \mathrm{km/saat}$ hızla akan bir nehir üzerinde nehre göre $10\ \mathrm{km/saat}$ hızla kuzeye doğru hareket etmektedir. Botun hızını kenardaki bank üzerinde bulunan gözlemciye göre hesaplayınız.

[[G-S4-07]]', '{"choices":["≈ 11,2 km/sa; kuzeyden doğuya ≈ 26,6°","15 km/sa; kuzeyden doğuya ≈ 26,6°","≈ 11,2 km/sa; kuzeyden doğuya ≈ 63,4°","5 km/sa; kuzeye","≈ 8,7 km/sa; kuzeyden batıya ≈ 30°"]}', '{"index":0}', '$\vec{v}_{bE} = \vec{v}_{br} + \vec{v}_{rE}$: botun yere göre hızı, botun nehre göre hızı ile nehrin yere göre hızının vektör toplamıdır. İki vektör dik olduğu için Pisagor kullanılır.

---

**Vektörler:** $v_{br} = 10\ \mathrm{km/sa}$ kuzey, $v_{rE} = 5\ \mathrm{km/sa}$ doğu.

---

**Büyüklük:** $$v_{bE} = \sqrt{10^2 + 5^2} = \sqrt{125} \approx 11{,}2\ \mathrm{km/sa}$$

---

**Yön:** $$\theta = \tan^{-1}\!\left(\frac{5}{10}\right) \approx 26{,}6^\circ$$ Kuzeyden doğuya doğru.', 2, 'Sunu, Bölüm 4, Örnek 13', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t01', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Bir parçacığın konum vektörü $\vec{r} = 2t^2\,\hat{\imath} + 3t\,\hat{\jmath}\ \mathrm{m}$ ile veriliyor. $t = 2\ \mathrm{s}$''de hızının büyüklüğü nedir?', '{"choices":["≈ 8,5 m/s","11 m/s","≈ 8,9 m/s","≈ 10 m/s","≈ 7 m/s"]}', '{"index":0}', 'Hız vektörü konumun türevidir; her bileşen ayrı türevlenir. Büyüklük Pisagor''la bulunur.

---

**Türev:** $$\vec{v} = \frac{d\vec{r}}{dt} = 4t\,\hat{\imath} + 3\,\hat{\jmath}$$

---

**$t = 2\ \mathrm{s}$:** $$\vec{v} = 8\,\hat{\imath} + 3\,\hat{\jmath}\ \mathrm{m/s}$$

---

**Büyüklük:** $$|\vec{v}| = \sqrt{64 + 9} = \sqrt{73} \approx 8{,}5\ \mathrm{m/s}$$

---

**Tuzak:** $8 + 3 = 11$ diye bileşenleri doğrudan toplamak; vektör büyüklüğü öyle bulunmaz.', 2, '4. bölüm, Düzlemde konum, hız ve ivme vektörleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t02', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Bir cisim $\vec{v}_0 = 5\,\hat{\imath}\ \mathrm{m/s}$ hızla harekete başlıyor ve sabit $\vec{a} = 2\,\hat{\jmath}\ \mathrm{m/s^2}$ ivmesiyle hareket ediyor. $t = 3\ \mathrm{s}$''de hızının büyüklüğü nedir?', '{"choices":["≈ 7,8 m/s","11 m/s","6 m/s","5 m/s","≈ 9,4 m/s"]}', '{"index":0}', 'Sabit ivmede $\vec{v} = \vec{v}_0 + \vec{a}\,t$ vektörel olarak geçerlidir. İvme yalnız $y$ yönünde olduğundan $v_x$ değişmez.

---

**Hız:** $$\vec{v} = 5\,\hat{\imath} + 2 \cdot 3\,\hat{\jmath} = 5\,\hat{\imath} + 6\,\hat{\jmath}\ \mathrm{m/s}$$

---

**Büyüklük:** $$|\vec{v}| = \sqrt{25 + 36} = \sqrt{61} \approx 7{,}8\ \mathrm{m/s}$$', 2, '4. bölüm, Düzlemde konum, hız ve ivme vektörleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t03', 'fizik', 'fz-u4', 4, 'tf', 'derived', 'İki boyutlu sabit ivmeli harekette $x$ ve $y$ yönündeki hareketler birbirinden bağımsız olarak incelenebilir; ortak olan yalnızca zamandır.', '{}', '{"value":true}', 'Bileşenlere ayırınca $x$ ve $y$ için ayrı birer bir boyutlu hareket denklemi yazılır. Eğik atışta da yatay hareket düzgün, düşey hareket sabit ivmelidir; ikisini bağlayan $t$''dir.', 2, '4. bölüm, Düzlemde konum, hız ve ivme vektörleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t04', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Yatay zeminden yatayla $30^\circ$ açıyla $20\ \mathrm{m/s}$ hızla atılan bir topun maksimum yüksekliği ve menzili nedir? ($g = 10\ \mathrm{m/s^2}$, $\sqrt{3} \approx 1{,}73$)', '{"choices":["$h = 5\\ \\mathrm{m}$; $R \\approx 34{,}6\\ \\mathrm{m}$","$h = 10\\ \\mathrm{m}$; $R \\approx 34{,}6\\ \\mathrm{m}$","$h = 5\\ \\mathrm{m}$; $R = 40\\ \\mathrm{m}$","$h = 15\\ \\mathrm{m}$; $R = 20\\ \\mathrm{m}$","$h = 5\\ \\mathrm{m}$; $R \\approx 17{,}3\\ \\mathrm{m}$"]}', '{"index":0}', '$h = \dfrac{v_{0y}^2}{2g}$ ve $R = \dfrac{v_0^2 \sin 2\theta}{g}$. Önce ilk hız bileşenlerini bulmak hata riskini azaltır.

---

**Bileşenler:** $$v_{0x} = 20\cos 30^\circ \approx 17{,}3\ \mathrm{m/s}, \qquad v_{0y} = 20\sin 30^\circ = 10\ \mathrm{m/s}$$

---

**Yükseklik:** $$h = \frac{10^2}{2 \cdot 10} = 5\ \mathrm{m}$$

---

**Uçuş süresi:** $$t_u = 2 \cdot \frac{v_{0y}}{g} = 2 \cdot \frac{10}{10} = 2\ \mathrm{s}$$

---

**Menzil:** $$R = 17{,}3 \times 2 \approx 34{,}6\ \mathrm{m}$$ Formülle: $R = 400 \sin 60^\circ / 10 \approx 34{,}6\ \mathrm{m}$.', 2, '4. bölüm, Eğik atış: maksimum yükseklik ve menzil', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t05', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Yatay zeminden yatayla $53^\circ$ açıyla $40\ \mathrm{m/s}$ hızla atılan bir cismin uçuş süresi, maksimum yüksekliği ve menzili nedir? ($\sin 53^\circ = 0{,}8$; $\cos 53^\circ = 0{,}6$; $g = 10\ \mathrm{m/s^2}$)', '{"choices":["$t = 6{,}4\\ \\mathrm{s}$; $h = 51{,}2\\ \\mathrm{m}$; $R = 153{,}6\\ \\mathrm{m}$","$t = 3{,}2\\ \\mathrm{s}$; $h = 51{,}2\\ \\mathrm{m}$; $R = 76{,}8\\ \\mathrm{m}$","$t = 6{,}4\\ \\mathrm{s}$; $h = 28{,}8\\ \\mathrm{m}$; $R = 153{,}6\\ \\mathrm{m}$","$t = 4{,}8\\ \\mathrm{s}$; $h = 28{,}8\\ \\mathrm{m}$; $R = 115{,}2\\ \\mathrm{m}$","$t = 6{,}4\\ \\mathrm{s}$; $h = 102{,}4\\ \\mathrm{m}$; $R = 153{,}6\\ \\mathrm{m}$"]}', '{"index":0}', 'Tepe süresi $v_{0y}/g$, uçuş süresi onun iki katı. Yükseklik $v_{0y}^2/2g$, menzil $v_{0x} \times$ uçuş süresi.

---

**Bileşenler:** $$v_{0x} = 40 \times 0{,}6 = 24\ \mathrm{m/s}, \qquad v_{0y} = 40 \times 0{,}8 = 32\ \mathrm{m/s}$$

---

**Süreler:** $$t_{\text{tepe}} = \frac{32}{10} = 3{,}2\ \mathrm{s} \quad\Rightarrow\quad t_u = 6{,}4\ \mathrm{s}$$

---

**Yükseklik:** $$h = \frac{32^2}{20} = \frac{1024}{20} = 51{,}2\ \mathrm{m}$$

---

**Menzil:** $$R = 24 \times 6{,}4 = 153{,}6\ \mathrm{m}$$', 2, '4. bölüm, Eğik atış: maksimum yükseklik ve menzil', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t06', 'fizik', 'fz-u4', 4, 'tf', 'derived', 'Yatay düzlemde aynı ilk hızla $30^\circ$ ve $60^\circ$ açılarla atılan iki cisim aynı uzaklığa düşer.', '{}', '{"value":true}', '$R = \dfrac{v_0^2 \sin 2\theta}{g}$. $\sin 60^\circ = \sin 120^\circ$ olduğu için tümler açılar ($\theta$ ve $90^\circ - \theta$) aynı menzili verir. Büyük açıyla atılan daha yükseğe çıkar ve havada daha uzun kalır.', 2, '4. bölüm, Eğik atış: maksimum yükseklik ve menzil', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t07', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Eğik atılan bir cisim yörüngesinin tepe noktasındayken hızı ve ivmesi için hangisi doğrudur?', '{"choices":["Hız yatay ve sıfırdan farklı; ivme $g$, aşağı","Hız sıfır; ivme $g$, aşağı yönlü","Hız yatay ve sıfırdan farklı; ivme sıfır","Hız sıfır; ivme de sıfır","Hız düşey ve aşağı; ivme $g$, aşağı"]}', '{"index":0}', 'Tepe noktasında yalnız düşey hız bileşeni sıfırlanır; yatay bileşen $v_0\cos\theta$ hareket boyunca değişmez. İvme her noktada $g$''dir, aşağı yönlüdür.', 2, '4. bölüm, Eğik atış: maksimum yükseklik ve menzil', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t08', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Bir top $24\ \mathrm{m}$ ötedeki bir duvara yatayla $37^\circ$ açıyla, $20\ \mathrm{m/s}$ hızla atılıyor. Top duvara yerden hangi $h$ yüksekliğinde çarpar? ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$; $g = 10\ \mathrm{m/s^2}$)

[[G-S4-08]]', '{"choices":["6,75 m","18 m","11,25 m","4,5 m","9 m"]}', '{"index":0}', 'Yatay hız sabit: duvara varış süresi $24/v_{0x}$. Bu süreyi düşey konum denklemine koy.

---

**Bileşenler:** $$v_{0x} = 20 \times 0{,}8 = 16\ \mathrm{m/s}, \qquad v_{0y} = 20 \times 0{,}6 = 12\ \mathrm{m/s}$$

---

**Varış süresi:** $$t = \frac{24}{16} = 1{,}5\ \mathrm{s}$$

---

**Yükseklik:** $$h = 12 \times 1{,}5 - 5 \times 1{,}5^2 = 18 - 11{,}25 = 6{,}75\ \mathrm{m}$$

---

**Yorum:** Tepe $1{,}2\ \mathrm{s}$''de olduğu için top duvara inerken çarpar.', 3, '4. bölüm, Eğik atış: maksimum yükseklik ve menzil', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t09', 'fizik', 'fz-u4', 4, 'mcq', 'derived', '$45\ \mathrm{m}$ yükseklikteki bir uçurumdan yatay olarak $10\ \mathrm{m/s}$ hızla atılan bir taş, uçurumun dibinden ne kadar uzağa düşer ve yere hangi hızla çarpar? ($g = 10\ \mathrm{m/s^2}$)', '{"choices":["$x = 30\\ \\mathrm{m}$; $v \\approx 31{,}6\\ \\mathrm{m/s}$","$x = 30\\ \\mathrm{m}$; $v = 40\\ \\mathrm{m/s}$","$x = 45\\ \\mathrm{m}$; $v \\approx 31{,}6\\ \\mathrm{m/s}$","$x = 30\\ \\mathrm{m}$; $v = 30\\ \\mathrm{m/s}$","$x = 90\\ \\mathrm{m}$; $v \\approx 31{,}6\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Düşey ilk hız sıfır; düşme süresini yükseklik belirler. Çarpma hızı yatay ve düşey bileşenlerin Pisagor toplamıdır.

---

**Süre:** $$45 = 5t^2 \quad\Rightarrow\quad t = 3\ \mathrm{s}$$

---

**Yatay uzaklık:** $$x = 10 \times 3 = 30\ \mathrm{m}$$

---

**Düşey hız:** $$v_y = 10 \times 3 = 30\ \mathrm{m/s}$$ (aşağı).

---

**Çarpma hızı:** $$v = \sqrt{10^2 + 30^2} = \sqrt{1000} \approx 31{,}6\ \mathrm{m/s}$$', 2, '4. bölüm, Yatay atış ve yüksekten atış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t10', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Yerden $500\ \mathrm{m}$ yükseklikte $50\ \mathrm{m/s}$ hızla yatay uçan bir uçak bir paket bırakıyor. Paket yere düştüğünde uçak paketin neresindedir? (Hava direnci yok, $g = 10\ \mathrm{m/s^2}$)', '{"choices":["Tam paketin üstünde","Paketin 500 m gerisinde","Paketin 500 m önünde","Paketin 50 m önünde","Paketin 250 m önünde"]}', '{"index":0}', 'Paket bırakıldığında uçağın yatay hızını taşır ve hava direnci olmadığı için yatayda uçakla aynı hızla gider. Bu yüzden düşerken hep uçağın altındadır.

---

**Düşme süresi:** $$500 = 5t^2 \quad\Rightarrow\quad t = 10\ \mathrm{s}$$

---

**Paketin yatay yolu:** $$50 \times 10 = 500\ \mathrm{m}$$

---

**Uçağın yatay yolu:** $50 \times 10 = 500\ \mathrm{m}$. İkisi aynı: uçak paketin tam üstündedir.', 2, '4. bölüm, Yatay atış ve yüksekten atış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t11', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Bir motosikletli $5\ \mathrm{m}$ yüksekliğindeki bir uçurumdan yatay olarak atlayıp $8\ \mathrm{m}$ genişliğindeki dereyi geçmek istiyor. Uçuş süresi ve gereken en küçük yatay hız nedir? ($g = 10\ \mathrm{m/s^2}$)

[[G-S4-09]]', '{"choices":["$t = 1\\ \\mathrm{s}$; $v_0 = 8\\ \\mathrm{m/s}$","$t = 2\\ \\mathrm{s}$; $v_0 = 4\\ \\mathrm{m/s}$","$t = 1\\ \\mathrm{s}$; $v_0 = 5\\ \\mathrm{m/s}$","$t = 0{,}5\\ \\mathrm{s}$; $v_0 = 16\\ \\mathrm{m/s}$","$t = 1\\ \\mathrm{s}$; $v_0 = 10\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Uçuş süresini yalnız düşüş yüksekliği belirler (yatay hızdan bağımsız). Yatay hız bu sürede $8\ \mathrm{m}$ almaya yetmeli.

---

**Süre:** $$5 = 5t^2 \quad\Rightarrow\quad t = 1\ \mathrm{s}$$

---

**Hız:** $$8 = v_0 \times 1 \quad\Rightarrow\quad v_0 = 8\ \mathrm{m/s}$$ Bu, gereken en küçük hızdır.', 2, '4. bölüm, Yatay atış ve yüksekten atış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t12', 'fizik', 'fz-u4', 4, 'tf', 'derived', 'Aynı yükseklikten biri serbest bırakılan, öbürü yatay olarak atılan iki top yere aynı anda düşer.', '{}', '{"value":true}', 'İkisinin de düşey ilk hızı sıfırdır ve düşey ivmeleri $g$''dir. Yatay hız düşey hareketi etkilemez; düşme süresi $t = \sqrt{2h/g}$ ikisi için aynıdır.', 2, '4. bölüm, Yatay atış ve yüksekten atış', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t13', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Yarıçapı $50\ \mathrm{m}$ olan dairesel bir pistte $20\ \mathrm{m/s}$ sabit süratle giden bir arabanın merkezcil ivmesi nedir?', '{"choices":["8 m/s²","0,4 m/s²","2,5 m/s²","1000 m/s²","4 m/s²"]}', '{"index":0}', 'Düzgün dairesel harekette sürat sabit olsa da hızın yönü sürekli değişir; bunu sağlayan merkezcil ivme $a_r = v^2/r$''dir, merkeze yönelir.

---

**Formül:** $$a_r = \frac{v^2}{r}$$

---

**Hesap:** $$a_r = \frac{20^2}{50} = \frac{400}{50} = 8\ \mathrm{m/s^2}$$', 2, '4. bölüm, Düzgün dairesel hareket ve merkezcil ivme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t14', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Bir cisim yarıçapı $2\ \mathrm{m}$ olan bir çemberde bir turu $4\ \mathrm{s}$''de atıyor. Sürati ve merkezcil ivmesi yaklaşık nedir? ($\pi \approx 3{,}14$)', '{"choices":["$v \\approx 3{,}14\\ \\mathrm{m/s}$; $a \\approx 4{,}93\\ \\mathrm{m/s^2}$","$v \\approx 3{,}14\\ \\mathrm{m/s}$; $a \\approx 1{,}57\\ \\mathrm{m/s^2}$","$v \\approx 1{,}57\\ \\mathrm{m/s}$; $a \\approx 1{,}23\\ \\mathrm{m/s^2}$","$v \\approx 6{,}28\\ \\mathrm{m/s}$; $a \\approx 19{,}7\\ \\mathrm{m/s^2}$","$v = 0{,}5\\ \\mathrm{m/s}$; $a = 0{,}125\\ \\mathrm{m/s^2}$"]}', '{"index":0}', 'Bir turda alınan yol çemberin çevresi $2\pi r$, süre periyot $T$. Sürat $v = 2\pi r/T$, merkezcil ivme $v^2/r$.

---

**Sürat:** $$v = \frac{2\pi r}{T} = \frac{2\pi \cdot 2}{4} = \pi \approx 3{,}14\ \mathrm{m/s}$$

---

**Merkezcil ivme:** $$a_r = \frac{v^2}{r} = \frac{\pi^2}{2} \approx \frac{9{,}86}{2} \approx 4{,}93\ \mathrm{m/s^2}$$', 2, '4. bölüm, Düzgün dairesel hareket ve merkezcil ivme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t15', 'fizik', 'fz-u4', 4, 'tf', 'derived', 'Düzgün dairesel hareket yapan bir cismin sürati sabit olduğu için ivmesi sıfırdır.', '{}', '{"value":false}', 'İvme hız vektörünün değişimidir. Süratin büyüklüğü sabit kalsa da yön sürekli değiştiği için bir ivme vardır: merkeze doğru $a_r = v^2/r$.', 2, '4. bölüm, Düzgün dairesel hareket ve merkezcil ivme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t16', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Dairesel bir yörüngede hızlanan bir cismin bir anda merkezcil ivmesi $3\ \mathrm{m/s^2}$, teğetsel ivmesi $4\ \mathrm{m/s^2}$''dir. Toplam ivmenin büyüklüğü nedir?', '{"choices":["5 m/s²","7 m/s²","1 m/s²","12 m/s²","3,5 m/s²"]}', '{"index":0}', 'Teğetsel ivme hıza paralel, merkezcil ivme hıza diktir. Birbirine dik iki bileşen Pisagor''la toplanır.

---

**Bileşenler dik:** $$a = \sqrt{a_r^2 + a_t^2}$$

---

**Hesap:** $$a = \sqrt{9 + 16} = 5\ \mathrm{m/s^2}$$', 2, '4. bölüm, Düzgün dairesel hareket ve merkezcil ivme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t17', 'fizik', 'fz-u4', 4, 'fill', 'derived', 'Düzgün dairesel harekette ivme her an çemberin ____ doğru yönelir.', '{"blanks":1}', '{"blanks":[["merkezine","merkeze","merkez"]]}', '**Merkezcil** (radyal) ivme hız vektörüne diktir ve çemberin merkezine yönelir; büyüklüğü $a_r = v^2/r$''dir.', 1, '4. bölüm, Düzgün dairesel hareket ve merkezcil ivme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t18', 'fizik', 'fz-u4', 4, 'mcq', 'derived', '$20\ \mathrm{m/s}$ hızla giden bir trenin içinde bir yolcu trenin gidiş yönünde trene göre $2\ \mathrm{m/s}$ hızla yürüyor. Yolcunun yere göre hızı nedir?', '{"choices":["22 m/s","18 m/s","20 m/s","2 m/s","40 m/s"]}', '{"index":0}', 'Bağıl hız toplama: $\vec{v}_{\text{yolcu,yer}} = \vec{v}_{\text{yolcu,tren}} + \vec{v}_{\text{tren,yer}}$. Aynı doğrultuda ve yönde oldukları için doğrudan toplanır.

---

**Topla:** $$v = 2 + 20 = 22\ \mathrm{m/s}$$ Trenin yönünde.

---

**Ters yönde yürüseydi:** $20 - 2 = 18\ \mathrm{m/s}$ olurdu.', 1, '4. bölüm, Bağıl hız', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t19', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Nehre göre $4\ \mathrm{m/s}$ hızla burnu kuzeye (karşı kıyıya) tutulan bir sandal, doğuya $3\ \mathrm{m/s}$ hızla akan bir nehirde ilerliyor. Sandalın yere göre hızı nedir? ($\tan 37^\circ = 0{,}75$)', '{"choices":["5 m/s; kuzeyden doğuya 37°","7 m/s; kuzeyden doğuya 37°","5 m/s; kuzeyden doğuya 53°","1 m/s; kuzeye","5 m/s; kuzeyden batıya 37°"]}', '{"index":0}', '$\vec{v}_{\text{sandal,yer}} = \vec{v}_{\text{sandal,nehir}} + \vec{v}_{\text{nehir,yer}}$. İki vektör dik olduğundan büyüklük Pisagor''la, yön tanjantla bulunur.

---

**Büyüklük:** $$v = \sqrt{4^2 + 3^2} = 5\ \mathrm{m/s}$$

---

**Yön:** $$\tan\theta = \frac{3}{4} = 0{,}75 \quad\Rightarrow\quad \theta = 37^\circ$$ Kuzeyden doğuya; akıntı sandalı doğuya sürükler.', 2, '4. bölüm, Bağıl hız', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u4-t20', 'fizik', 'fz-u4', 4, 'mcq', 'derived', 'Genişliği $100\ \mathrm{m}$ olan bir nehirde akıntı hızı $3\ \mathrm{m/s}$''dir. Nehre göre $4\ \mathrm{m/s}$ hızı olan sandalın burnu karşı kıyıya dik tutuluyor. Sandal karşıya kaç saniyede geçer ve akıntı yönünde ne kadar sürüklenir?', '{"choices":["25 s; 75 m","20 s; 60 m","25 s; 100 m","33 s; 100 m","≈ 38 s; 113 m"]}', '{"index":0}', 'Karşıya geçiş süresini yalnız kıyıya dik hız ($4\ \mathrm{m/s}$) belirler. Akıntı bu sürede sandalı akıntı yönünde sürükler.

---

**Süre:** $$t = \frac{100}{4} = 25\ \mathrm{s}$$

---

**Sürüklenme:** $$x = 3 \times 25 = 75\ \mathrm{m}$$

---

**Tuzak:** Yere göre hız $5\ \mathrm{m/s}$ ile $100/5 = 20\ \mathrm{s}$ hesaplamak; sandal $100\ \mathrm{m}$ değil, çapraz bir yol alır.', 3, '4. bölüm, Bağıl hız', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s01', 'fizik', 'fz-u5', 5, 'mcq', 'original', '$0{,}30\ \mathrm{kg}$ kütleli bir hokey diski yatay, sürtünmesiz bir buz zemini üzerinde kaymaktadır. Diske şekilde görüldüğü gibi iki kuvvet etki eder. $\vec{F}_1$ kuvvetinin büyüklüğü $5\ \mathrm{N}$, $\vec{F}_2$ kuvvetinin büyüklüğü ise $8\ \mathrm{N}$''dur. Diskin ivmesinin büyüklüğünü ve yönünü bulunuz. ($\cos 20^\circ = 0{,}94$; $\sin 20^\circ = 0{,}34$; $\cos 60^\circ = 0{,}5$; $\sin 60^\circ = 0{,}87$)

[[G-S5-01]]', '{"choices":["$|\\vec{a}| \\approx 34\\ \\mathrm{m/s^2}$; $\\theta \\approx 30^\\circ$","$|\\vec{a}| \\approx 43\\ \\mathrm{m/s^2}$; $\\theta \\approx 30^\\circ$","$|\\vec{a}| \\approx 34\\ \\mathrm{m/s^2}$; $\\theta \\approx 60^\\circ$","$|\\vec{a}| \\approx 10\\ \\mathrm{m/s^2}$; $\\theta \\approx 30^\\circ$","$|\\vec{a}| \\approx 34\\ \\mathrm{m/s^2}$; $\\theta \\approx -20^\\circ$"]}', '{"index":0}', 'Newton''un ikinci yasası her eksende ayrı yazılır: $\sum F_x = m a_x$, $\sum F_y = m a_y$. Kuvvetlerin büyüklükleri toplanmaz; bileşenleri toplanır.

---

**$x$ bileşenleri:** $$\sum F_x = 5\cos(-20^\circ) + 8\cos 60^\circ = 5 \times 0{,}94 + 8 \times 0{,}5 = 4{,}7 + 4 = 8{,}7\ \mathrm{N}$$

---

**$y$ bileşenleri:** $$\sum F_y = 5\sin(-20^\circ) + 8\sin 60^\circ = -1{,}7 + 7{,}0 \approx 5{,}3\ \mathrm{N}$$ $\vec{F}_1$ $x$ ekseninin altında, $y$ bileşeni eksi.

---

**İvme bileşenleri:** $$a_x = \frac{8{,}7}{0{,}3} = 29\ \mathrm{m/s^2}, \qquad a_y = \frac{5{,}26}{0{,}3} \approx 17{,}5\ \mathrm{m/s^2}$$ Yani $\vec{a} \approx 29\,\hat{\imath} + 17{,}5\,\hat{\jmath}\ \mathrm{m/s^2}$.

---

**Büyüklük:** $$|\vec{a}| = \sqrt{29^2 + 17{,}5^2} = \sqrt{841 + 306} \approx 34\ \mathrm{m/s^2}$$

---

**Yön:** $$\theta = \tan^{-1}\!\left(\frac{17{,}5}{29}\right) \approx 31^\circ \approx 30^\circ$$ $+x$ ekseninden yukarı.', 2, 'Sunu, Bölüm 5, Örnek 1', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s02', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Bir trafik lambası şekilde görüldüğü gibi kablolarla bir desteğe asılmıştır. Üst taraftaki kablolar yatayla $37^\circ$ ve $53^\circ$''lik açılar yapmaktadır ve lambanın ağırlığı $50\ \mathrm{N}$''dur. Her üç kablodaki gerilmeyi bulunuz. ($\cos 53^\circ = 0{,}6$; $\sin 53^\circ = 0{,}8$; $\cos 37^\circ = 0{,}8$; $\sin 37^\circ = 0{,}6$)

[[G-S5-02]]', '{"choices":["$T_1 = 30\\ \\mathrm{N}$; $T_2 = 40\\ \\mathrm{N}$; $T_3 = 50\\ \\mathrm{N}$","$T_1 = 40\\ \\mathrm{N}$; $T_2 = 30\\ \\mathrm{N}$; $T_3 = 50\\ \\mathrm{N}$","$T_1 = 25\\ \\mathrm{N}$; $T_2 = 25\\ \\mathrm{N}$; $T_3 = 50\\ \\mathrm{N}$","$T_1 = 30\\ \\mathrm{N}$; $T_2 = 40\\ \\mathrm{N}$; $T_3 = 70\\ \\mathrm{N}$","$T_1 = 37{,}5\\ \\mathrm{N}$; $T_2 = 50\\ \\mathrm{N}$; $T_3 = 50\\ \\mathrm{N}$"]}', '{"index":0}', 'Lamba ve düğüm noktası dengededir: $\sum F_x = 0$ ve $\sum F_y = 0$. Önce lambadan $T_3 = W$, sonra düğümde iki denklem iki bilinmeyenle çözülür. Not: sunu soruda ağırlığı $5\ \mathrm{N}$ yazmış ama çözümde $50\ \mathrm{N}$ kullanmış; sonuçlar $50\ \mathrm{N}$''a aittir.

---

**Lamba:** $$T_3 - W = 0 \quad\Rightarrow\quad T_3 = 50\ \mathrm{N}$$

---

**Düğümde $x$:** $$-T_1\cos 37^\circ + T_2\cos 53^\circ = 0 \quad\Rightarrow\quad 0{,}8\,T_1 = 0{,}6\,T_2 \quad\Rightarrow\quad T_2 = \tfrac{4}{3}T_1$$

---

**Düğümde $y$:** $$T_1\sin 37^\circ + T_2\sin 53^\circ - 50 = 0 \quad\Rightarrow\quad 0{,}6\,T_1 + 0{,}8 \cdot \tfrac{4}{3}T_1 = 50$$

---

**Çöz:** $$\tfrac{5}{3}T_1 = 50 \quad\Rightarrow\quad T_1 = 30\ \mathrm{N}, \qquad T_2 = 40\ \mathrm{N}$$

---

**Kontrol:** Daha dik kablo ($53^\circ$) yükün daha büyük kısmını taşır: $T_2 > T_1$ ✓', 2, 'Sunu, Bölüm 5, Örnek 2', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s03a', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Sürtünmesiz eğik düzlem: Şekilde görülen sürtünmesiz, $\theta$ eğim açılı bir eğik düzlem üzerine $m$ kütleli bir sandık konulmuştur.

[[G-S5-03]]

Sandık serbest bırakılınca sahip olacağı ivmeyi ve normal kuvveti bulunuz.', '{"choices":["$a = g\\sin\\theta$; $n = mg\\cos\\theta$","$a = g\\cos\\theta$; $n = mg\\sin\\theta$","$a = g$; $n = mg$","$a = g\\sin\\theta$; $n = mg$","$a = g\\tan\\theta$; $n = mg\\cos\\theta$"]}', '{"index":0}', '$x$ eksenini eğik düzlem boyunca, $y$ eksenini düzleme dik al. Ağırlık bu eksenlerde $mg\sin\theta$ (düzlem boyunca) ve $mg\cos\theta$ (düzleme dik) bileşenlerine ayrılır.

---

**Bileşenler:** Düzlem boyunca $mg\sin\theta$, düzleme dik $mg\cos\theta$.

---

**$y$ ekseni (hareket yok):** $$\sum F_y = n - mg\cos\theta = 0 \quad\Rightarrow\quad n = mg\cos\theta$$

---

**$x$ ekseni:** $$\sum F_x = mg\sin\theta = m a_x \quad\Rightarrow\quad a_x = g\sin\theta$$

---

**Yorum:** İvme kütleden bağımsızdır; $\theta = 90^\circ$''de $g$''ye (serbest düşme), $\theta = 0$''da sıfıra gider.', 1, 'Sunu, Bölüm 5, Örnek 3 (A)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s03b', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Sürtünmesiz eğik düzlem: Şekilde görülen sürtünmesiz, $\theta$ eğim açılı bir eğik düzlem üzerine $m$ kütleli bir sandık konulmuştur.

[[G-S5-03]]

Sandığın eğik düzlemin tepesinden serbest bırakıldığını varsayalım. Tepeden itibaren alt uca kadar olan uzaklık $d$ olsun. Bloğun alt uca varması için geçen zaman nedir ve tam alt uçta sandığın hızı ne olacaktır?', '{"choices":["$t = \\sqrt{\\dfrac{2d}{g\\sin\\theta}}$; $v = \\sqrt{2gd\\sin\\theta}$","$t = \\sqrt{\\dfrac{2d}{g}}$; $v = \\sqrt{2gd}$","$t = \\sqrt{\\dfrac{d}{g\\sin\\theta}}$; $v = \\sqrt{gd\\sin\\theta}$","$t = \\sqrt{\\dfrac{2d}{g\\cos\\theta}}$; $v = \\sqrt{2gd\\cos\\theta}$","$t = \\dfrac{2d}{g\\sin\\theta}$; $v = 2gd\\sin\\theta$"]}', '{"index":0}', 'İvme sabit ($g\sin\theta$) ve ilk hız sıfır olduğundan bir boyutlu sabit ivmeli hareket denklemleri düzlem boyunca uygulanır.

---

**Konum:** $d = \tfrac{1}{2}at^2$ ve $a = g\sin\theta$: $$t = \sqrt{\frac{2d}{g\sin\theta}}$$

---

**Hız:** $$v^2 = 0 + 2ad \quad\Rightarrow\quad v = \sqrt{2gd\sin\theta}$$

---

**Kontrol:** $d\sin\theta$ eğik düzlemin yüksekliği $h$''dir; $v = \sqrt{2gh}$, yani aynı yükseklikten serbest düşen cismin hızıyla aynı.', 2, 'Sunu, Bölüm 5, Örnek 3 (B)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s04a', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Sürtünmesiz yatay bir düzlem üzerinde durmakta olan $m = 3\ \mathrm{kg}$ kütleli bir cisme, yatayla $37^\circ$ açı yapan $F = 12\ \mathrm{N}$''luk bir kuvvet uygulanıyor. ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$; $g = 10\ \mathrm{m/s^2}$)

[[G-S5-04]]

Cismin ivmesi ne kadardır?', '{"choices":["3,2 m/s²","4 m/s²","2,4 m/s²","1,6 m/s²","7,6 m/s²"]}', '{"index":0}', 'Cisim yalnız yatayda hareket edebilir; ivmeyi kuvvetin yatay bileşeni $F\cos 37^\circ$ verir.

---

**Yatay bileşen:** $$F_x = F\cos 37^\circ = 12 \times 0{,}8 = 9{,}6\ \mathrm{N}$$

---

**İkinci yasa:** $$9{,}6 = 3a \quad\Rightarrow\quad a = 3{,}2\ \mathrm{m/s^2}$$

---

**Tuzak:** $12/3 = 4\ \mathrm{m/s^2}$ hesabı kuvvetin tamamının yatay olduğunu varsayar.', 2, 'Sunu, Bölüm 5, Örnek 4 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s04b', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Sürtünmesiz yatay bir düzlem üzerinde durmakta olan $m = 3\ \mathrm{kg}$ kütleli bir cisme, yatayla $37^\circ$ açı yapan $F = 12\ \mathrm{N}$''luk bir kuvvet uygulanıyor. ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$; $g = 10\ \mathrm{m/s^2}$)

[[G-S5-04]]

Masanın normal tepki kuvveti ne kadar olur?', '{"choices":["22,8 N","30 N","37,2 N","20,4 N","7,2 N"]}', '{"index":0}', 'Düşeyde hareket yok: $\sum F_y = 0$. $F$''nin düşey bileşeni cismi yukarı çektiği için normal kuvvet $mg$''den küçük çıkar.

---

**Düşey bileşen:** $$F_y = F\sin 37^\circ = 12 \times 0{,}6 = 7{,}2\ \mathrm{N}$$ (yukarı).

---

**Denge:** $$N + F\sin 37^\circ - mg = 0 \quad\Rightarrow\quad N + 7{,}2 - 30 = 0$$

---

**Sonuç:** $N = 22{,}8\ \mathrm{N}$. Normal kuvvet her zaman $mg$''ye eşit değildir.', 2, 'Sunu, Bölüm 5, Örnek 4 (c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s05', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Kütlesi $m$ olan bir blok $4\ \mathrm{m/s}$ hızla sürtünmeli yatay bir düzleme paralel fırlatılıyor. Blok ne kadar gittikten sonra durur? ($\mu = 0{,}25$; $g = 10\ \mathrm{m/s^2}$)', '{"choices":["3,2 m","1,6 m","6,4 m","0,8 m","16 m"]}', '{"index":0}', 'Yatayda tek kuvvet sürtünmedir: $-\mu mg = ma$, dolayısıyla $a = -\mu g$. Kütle sadeleşir, bu yüzden $m$ verilmeden çözülür. Sonra zamansız hız denklemi.

---

**Normal kuvvet:** $\sum F_y = 0$, dolayısıyla $N = mg$.

---

**İvme:** $$-\mu mg = ma \quad\Rightarrow\quad a = -\mu g = -0{,}25 \times 10 = -2{,}5\ \mathrm{m/s^2}$$

---

**Yol:** $$0 = 4^2 + 2(-2{,}5)\,x \quad\Rightarrow\quad x = \frac{16}{5} = 3{,}2\ \mathrm{m}$$', 2, 'Sunu, Bölüm 5, Örnek 5', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s06a', 'fizik', 'fz-u5', 5, 'mcq', 'original', '$m = 3\ \mathrm{kg}$ kütleli bir cisim yatay bir düzlem üzerindedir. Cisimle düzlem arasındaki statik ve kinetik sürtünme katsayıları eşit olup $\mu = 0{,}5$ değerindedir. ($g = 10\ \mathrm{m/s^2}$) Bu cisme yatay $F_1 = 12\ \mathrm{N}$ kuvveti uygulanıyor. Sürtünme kuvveti ne kadardır?', '{"choices":["12 N","15 N","6 N","3 N","0"]}', '{"index":0}', 'Statik sürtünme kuvveti sabit değildir: en fazla $\mu N$''ye kadar çıkar ve uygulanan kuvveti tam karşılar. Önce maksimum değeri hesapla, uygulanan kuvvetle karşılaştır.

---

**Maksimum statik sürtünme:** $$f_{\max} = \mu N = \mu mg = 0{,}5 \times 3 \times 10 = 15\ \mathrm{N}$$

---

**Karşılaştır:** $F_1 = 12\ \mathrm{N} < 15\ \mathrm{N}$, cisim harekete geçmez.

---

**Sürtünme:** Cisim durduğu için net kuvvet sıfır: $f = F_1 = 12\ \mathrm{N}$. $15\ \mathrm{N}$ değil; $15\ \mathrm{N}$ yalnız sınır değer.', 2, 'Sunu, Bölüm 5, Örnek 6 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s06b', 'fizik', 'fz-u5', 5, 'mcq', 'original', '$m = 3\ \mathrm{kg}$ kütleli bir cisim yatay bir düzlem üzerindedir. Cisimle düzlem arasındaki statik ve kinetik sürtünme katsayıları eşit olup $\mu = 0{,}5$ değerindedir. ($g = 10\ \mathrm{m/s^2}$) Bu kez yatay $F_2 = 18\ \mathrm{N}$''luk bir kuvvet uygulanıyor. Cismin ivmesi ne kadar olur?', '{"choices":["1 m/s²","6 m/s²","2 m/s²","0","11 m/s²"]}', '{"index":0}', '$F_2$ maksimum statik sürtünmeyi aştığı için cisim kayar; kayma sırasında sürtünme kinetik sürtünmedir, $f_k = \mu_k N$.

---

**Hareket var mı:** $18\ \mathrm{N} > f_{\max} = 15\ \mathrm{N}$, cisim hareket eder.

---

**Sürtünme:** $\mu_s = \mu_k$ olduğundan $f_k = \mu_k N = 15\ \mathrm{N}$.

---

**İkinci yasa:** $$18 - 15 = 3a \quad\Rightarrow\quad a = 1\ \mathrm{m/s^2}$$', 2, 'Sunu, Bölüm 5, Örnek 6 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s07', 'fizik', 'fz-u5', 5, 'mcq', 'original', '$m = 3\ \mathrm{kg}$ kütleli bir cisim yatay bir düzlem üzerindedir. Cisimle düzlem arasındaki statik ve kinetik sürtünme katsayıları eşit olup $\mu = 0{,}3$ değerindedir. Bu cisme yatayın altında $37^\circ$ açı yapan $F = 20\ \mathrm{N}$ kuvveti uygulanıyor. Normal tepki kuvvetini ve cismin ivmesini hesaplayın. ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$; $g = 10\ \mathrm{m/s^2}$)

[[G-S5-05]]', '{"choices":["$N = 42\\ \\mathrm{N}$; $a \\approx 1{,}1\\ \\mathrm{m/s^2}$","$N = 30\\ \\mathrm{N}$; $a \\approx 2{,}3\\ \\mathrm{m/s^2}$","$N = 18\\ \\mathrm{N}$; $a \\approx 3{,}5\\ \\mathrm{m/s^2}$","$N = 42\\ \\mathrm{N}$; $a \\approx 5{,}3\\ \\mathrm{m/s^2}$","$N = 42\\ \\mathrm{N}$; $a = 0$"]}', '{"index":0}', 'Aşağı doğru iten kuvvetin düşey bileşeni cismi zemine bastırır, normal kuvvet ve dolayısıyla sürtünme artar. Önce cismin kayıp kaymadığını kontrol et.

---

**Düşey:** $$N - F\sin 37^\circ - mg = 0 \quad\Rightarrow\quad N = 30 + 20 \times 0{,}6 = 42\ \mathrm{N}$$

---

**Maksimum sürtünme:** $$f = \mu N = 0{,}3 \times 42 = 12{,}6\ \mathrm{N}$$

---

**Hareket var mı:** $F\cos 37^\circ = 20 \times 0{,}8 = 16\ \mathrm{N} > 12{,}6\ \mathrm{N}$, cisim hareket eder.

---

**İvme:** $$16 - 12{,}6 = 3a \quad\Rightarrow\quad a = \frac{3{,}4}{3} \approx 1{,}1\ \mathrm{m/s^2}$$', 3, 'Sunu, Bölüm 5, Örnek 7', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s08', 'fizik', 'fz-u5', 5, 'mcq', 'original', '$37^\circ$ eğimli bir düzlem üzerine $m = 5\ \mathrm{kg}$ kütlesi konulmuştur. Eğik düzlemle cisim arasındaki statik ve kinetik sürtünme katsayıları eşit olup $\mu = 0{,}2$ değerindedir. Sürtünme kuvveti ne kadardır? Buna göre cisim hareket eder mi? Ederse ivmesi ne kadar olur? ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$; $g = 10\ \mathrm{m/s^2}$)

[[G-S5-06]]', '{"choices":["$f = 8\\ \\mathrm{N}$; hareket eder, $a = 4{,}4\\ \\mathrm{m/s^2}$","$f = 6\\ \\mathrm{N}$; hareket eder, $a = 4{,}8\\ \\mathrm{m/s^2}$","$f = 30\\ \\mathrm{N}$; hareket etmez","$f = 8\\ \\mathrm{N}$; hareket eder, $a = 6\\ \\mathrm{m/s^2}$","$f = 10\\ \\mathrm{N}$; hareket eder, $a = 4\\ \\mathrm{m/s^2}$"]}', '{"index":0}', 'Eğik düzlemde normal kuvvet $mg\cos\theta$''dır. Cismi aşağı çeken $mg\sin\theta$ ile maksimum sürtünmeyi karşılaştır; aşıyorsa net kuvvet farkıdır.

---

**Normal kuvvet:** $$N = mg\cos 37^\circ = 50 \times 0{,}8 = 40\ \mathrm{N}$$

---

**Maksimum sürtünme:** $$f_{\max} = 0{,}2 \times 40 = 8\ \mathrm{N}$$ Yukarı yönde, harekete ters.

---

**Aşağı çeken bileşen:** $mg\sin 37^\circ = 50 \times 0{,}6 = 30\ \mathrm{N} > 8\ \mathrm{N}$, cisim kayar.

---

**İvme:** $$30 - 8 = 5a \quad\Rightarrow\quad a = 4{,}4\ \mathrm{m/s^2}$$ (aşağı).', 2, 'Sunu, Bölüm 5, Örnek 8', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s09', 'fizik', 'fz-u5', 5, 'mcq', 'original', '$m_1$ kütleli bir blok şekilde görüldüğü gibi yatay pürüzlü bir masa üzerinde ağırlıksız bir iple sürtünmesiz bir makaradan geçirildikten sonra $m_2$ kütlesine bağlanmıştır. $F$ büyüklüğünde bir kuvvet şekilde görüldüğü gibi $m_1$ kütlesine uygulanmıştır. $m_1$ ile yüzey arasındaki sürtünme katsayısı $\mu$''dür. $m_2$ yukarı çıktığına göre ivme nedir?

[[G-S5-07]]', '{"choices":["$a = \\dfrac{F(\\cos\\theta + \\mu\\sin\\theta) - g(m_2 + \\mu m_1)}{m_1 + m_2}$","$a = \\dfrac{F(\\cos\\theta - \\mu\\sin\\theta) - g(m_1 + \\mu m_2)}{m_1 + m_2}$","$a = \\dfrac{F(\\cos\\theta - \\mu\\sin\\theta) - g(m_2 + \\mu m_1)}{m_1 + m_2}$","$a = \\dfrac{F\\cos\\theta - g(m_2 + \\mu m_1)}{m_1 + m_2}$","$a = \\dfrac{F(\\cos\\theta + \\mu\\sin\\theta) - g(m_2 - \\mu m_1)}{m_1 - m_2}$"]}', '{"index":0}', 'Her kütle için ikinci yasayı ayrı yaz. $F$''nin düşey bileşeni $F\sin\theta$ $m_1$''i yukarı çektiği için normal kuvveti, dolayısıyla sürtünmeyi azaltır. Not: sununun son satırındaki formül $[F(\cos\theta - \mu\sin\theta) - g(m_1 + \mu m_2)]$ işaret ve kütle hatası içeriyor; adımlar doğrusunu türetir.

---

**$m_1$ düşey:** $$N + F\sin\theta - m_1 g = 0 \quad\Rightarrow\quad N = m_1 g - F\sin\theta, \qquad f = \mu\,(m_1 g - F\sin\theta)$$

---

**$m_1$ yatay:** $$F\cos\theta - f - T = m_1 a$$

---

**$m_2$ (yukarı çıkıyor):** $$T - m_2 g = m_2 a \quad\Rightarrow\quad T = m_2(g + a)$$

---

**Yerine koy:** $$F\cos\theta - \mu m_1 g + \mu F\sin\theta - m_2 g - m_2 a = m_1 a$$

---

**Topla:** $$a = \frac{F(\cos\theta + \mu\sin\theta) - g(m_2 + \mu m_1)}{m_1 + m_2}$$ Gerilme $T = m_2(g + a)$.

---

**Kontrol:** $\mu = 0$ ve $\theta = 0$ iken $a = \dfrac{F - m_2 g}{m_1 + m_2}$: ip ve masa sürtünmesiz iken beklenen sonuç ✓', 3, 'Sunu, Bölüm 5, Örnek 9', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s10', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Donmuş bir havuzda bir hokey diskine vurulsun ve ona $20\ \mathrm{m/s}$''lik bir hız kazandırılmış olsun. Disk, buz yüzeyi üzerinde durmadan önce $115\ \mathrm{m}$ kayarsa disk ile buz yüzeyi arasındaki kinetik sürtünme katsayısını bulunuz. ($g = 9{,}8\ \mathrm{m/s^2}$)', '{"choices":["$\\mu_k \\approx 0{,}177$","$\\mu_k \\approx 0{,}117$","$\\mu_k \\approx 0{,}35$","$\\mu_k \\approx 0{,}087$","$\\mu_k \\approx 1{,}74$"]}', '{"index":0}', 'Tek yatay kuvvet kinetik sürtünme: $a = -\mu_k g$. Zamansız hız denklemiyle $\mu_k$ bulunur. Not: sunu sonucu $0{,}117$ yazmış; $400/2254 \approx 0{,}177$''dir.

---

**İvme:** $$-\mu_k mg = ma \quad\Rightarrow\quad a = -\mu_k g$$

---

**Zamansız denklem:** $$0 = v_i^2 + 2ax \quad\Rightarrow\quad 0 = 400 - 2\mu_k g \cdot 115$$

---

**Çöz:** $$\mu_k = \frac{400}{2 \times 9{,}8 \times 115} = \frac{400}{2254} \approx 0{,}177$$', 2, 'Sunu, Bölüm 5, Örnek 10', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s11', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Sürtünmesiz yatay bir düzlem üzerindeki $m_1 = 1\ \mathrm{kg}$ ve $m_2 = 2\ \mathrm{kg}$ kütleleri bir iple birbirlerine bağlanmışlardır. $m_1$ kütlesine yatay $F = 5\ \mathrm{N}$ kuvveti uygulanıyor. Kütleleri ayrı ayrı ele alarak ivmeyi ve ipteki gerilmeyi bulun.

[[G-S5-08]]', '{"choices":["$a \\approx 1{,}7\\ \\mathrm{m/s^2}$; $T \\approx 3{,}3\\ \\mathrm{N}$","$a = 5\\ \\mathrm{m/s^2}$; $T = 5\\ \\mathrm{N}$","$a \\approx 1{,}7\\ \\mathrm{m/s^2}$; $T \\approx 1{,}7\\ \\mathrm{N}$","$a = 2{,}5\\ \\mathrm{m/s^2}$; $T = 5\\ \\mathrm{N}$","$a \\approx 1{,}7\\ \\mathrm{m/s^2}$; $T = 5\\ \\mathrm{N}$"]}', '{"index":0}', 'İple bağlı cisimlerin ivmesi aynıdır. Sistemi bütün olarak ele almak ivmeyi verir (gerilme iç kuvvettir, sadeleşir); gerilmeyi bulmak için bir kütleyi ayrı incelemek gerekir.

---

**$m_1$:** $$F - T = m_1 a \quad\Rightarrow\quad 5 - T = a$$

---

**$m_2$:** $$T = m_2 a \quad\Rightarrow\quad T = 2a$$

---

**Topla:** $$5 = 3a \quad\Rightarrow\quad a = \frac{5}{3} \approx 1{,}7\ \mathrm{m/s^2}$$

---

**Gerilme:** $$T = 2 \times \frac{5}{3} = \frac{10}{3} \approx 3{,}3\ \mathrm{N}$$', 2, 'Sunu, Bölüm 5, Örnek 11', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s12', 'fizik', 'fz-u5', 5, 'mcq', 'original', '$m = 1\ \mathrm{kg}$''lık kütle, sürtünme katsayısı $\mu = 0{,}3$ ve eğim açısı $37^\circ$ olan eğik bir düzlem üzerine konulmuştur. $F = 20\ \mathrm{N}$ kuvveti cisme yatay doğrultuda etkiyor. Cisim hangi yönde gider ve ivmesi nedir? ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$; $g = 10\ \mathrm{m/s^2}$)

[[G-S5-09]]', '{"choices":["Yukarı; $a = 4\\ \\mathrm{m/s^2}$","Aşağı; $a = 4\\ \\mathrm{m/s^2}$","Yukarı; $a = 10\\ \\mathrm{m/s^2}$","Yukarı; $a \\approx 7{,}6\\ \\mathrm{m/s^2}$","Hareket etmez"]}', '{"index":0}', 'Sürtünmenin yönü hareket yönüne bağlı olduğu için önce yönü bul: $F\cos\theta$ (yukarı) ile $mg\sin\theta$ (aşağı) karşılaştırılır. $F$''nin düzleme dik bileşeni normal kuvveti artırır.

---

**Yön:** $mg\sin 37^\circ = 6\ \mathrm{N}$, $F\cos 37^\circ = 16\ \mathrm{N}$. $16 > 6$, cisim yukarı gitmek ister.

---

**Normal kuvvet:** $$N = mg\cos 37^\circ + F\sin 37^\circ = 8 + 12 = 20\ \mathrm{N}$$

---

**Sürtünme:** $$f = \mu N = 0{,}3 \times 20 = 6\ \mathrm{N}$$ Aşağı yönde.

---

**İvme:** $$16 - 6 - 6 = 1 \cdot a \quad\Rightarrow\quad a = 4\ \mathrm{m/s^2}$$ Yukarı; artı çıktığı için cisim gerçekten hareket eder.', 3, 'Sunu, Bölüm 5, Örnek 12', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s13a', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Şekilde gösterilen ipin kütlesi sıfır, yüzeyler ve makara sürtünmesizdir. Masadaki blok $1\ \mathrm{kg}$, hareketli makaraya asılı blok $2\ \mathrm{kg}$''dır. ($g = 10\ \mathrm{m/s^2}$)

[[G-S5-10]]

İvmeler arasındaki ilişki nedir? ($a_1$: masadaki bloğun, $a_2$: asılı bloğun ivmesi)', '{"choices":["$a_1 = 2a_2$","$a_2 = 2a_1$","$a_1 = a_2$","$a_1 = 4a_2$","$a_1 = a_2/4$"]}', '{"index":0}', 'İpin boyu sabittir. Hareketli makara iki ip parçası tarafından taşındığı için makara bir miktar inince iki parçanın her biri o kadar uzar.

---

**Geometri:** Makara (ve $2\ \mathrm{kg}$) $x$ kadar inerse makaranın iki yanındaki ip parçalarının her biri $x$ kadar uzar; toplam $2x$ ip masadan çekilir.

---

**Yer değiştirmeler:** Masadaki blok $2x$ giderken asılı blok $x$ iner.

---

**İvmeler:** Aynı oran ivmelere geçer: $$a_1 = 2a_2$$', 2, 'Sunu, Bölüm 5, Örnek 13 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s13b', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Şekilde gösterilen ipin kütlesi sıfır, yüzeyler ve makara sürtünmesizdir. Masadaki blok $1\ \mathrm{kg}$, hareketli makaraya asılı blok $2\ \mathrm{kg}$''dır. ($g = 10\ \mathrm{m/s^2}$)

[[G-S5-10]]

İvmeleri ve ipteki gerilmeyi hesaplayın.', '{"choices":["$a_1 \\approx 6{,}7\\ \\mathrm{m/s^2}$; $a_2 \\approx 3{,}3\\ \\mathrm{m/s^2}$; $T \\approx 6{,}7\\ \\mathrm{N}$","$a_1 = 20\\ \\mathrm{m/s^2}$; $a_2 = 10\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$","$a_1 = 5\\ \\mathrm{m/s^2}$; $a_2 = 2{,}5\\ \\mathrm{m/s^2}$; $T = 5\\ \\mathrm{N}$","$a_1 \\approx 3{,}3\\ \\mathrm{m/s^2}$; $a_2 \\approx 6{,}7\\ \\mathrm{m/s^2}$; $T \\approx 3{,}3\\ \\mathrm{N}$","$a_1 = 10\\ \\mathrm{m/s^2}$; $a_2 = 5\\ \\mathrm{m/s^2}$; $T = 10\\ \\mathrm{N}$"]}', '{"index":0}', 'Üç bilinmeyen ($a_1$, $a_2$, $T$) için iki hareket denklemi ve ivme ilişkisi yeterlidir. Asılı blok aşağı indiği için ağırlığı $2T$''den büyük olmalı. Not: sununun sonucu ($T = 20\ \mathrm{N}$, $a_1 = 20$, $a_2 = 10$) bir işaret hatasından geliyor; $T = 20\ \mathrm{N}$ olsaydı $2T = 40\ \mathrm{N} > 20\ \mathrm{N}$ ağırlık ve asılı blok yukarı çıkardı.

---

**Masadaki blok ($1\ \mathrm{kg}$):** $$T = m_1 a_1 \quad\Rightarrow\quad T = a_1$$

---

**Asılı blok ($2\ \mathrm{kg}$, aşağı pozitif):** $$m_2 g - 2T = m_2 a_2 \quad\Rightarrow\quad 20 - 2T = 2a_2$$

---

**İlişkiyi koy:** $T = a_1 = 2a_2$: $$20 - 4a_2 = 2a_2 \quad\Rightarrow\quad a_2 = \frac{20}{6} = \frac{10}{3} \approx 3{,}3\ \mathrm{m/s^2}$$

---

**Kalanlar:** $$a_1 = \frac{20}{3} \approx 6{,}7\ \mathrm{m/s^2}, \qquad T = \frac{20}{3} \approx 6{,}7\ \mathrm{N}$$

---

**Kontrol:** $2T \approx 13{,}3\ \mathrm{N} < 20\ \mathrm{N}$, asılı blok gerçekten aşağı ivmelenir ✓', 3, 'Sunu, Bölüm 5, Örnek 13 (c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s14', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Sürtünmesiz ve $30^\circ$ eğimli bir eğik düzlem üzerindeki $m_1 = 7\ \mathrm{kg}$ kütlesi makaradan geçen ipin bir ucuna bağlıdır. İpin diğer ucuna $m_2 = 5\ \mathrm{kg}$ kütlesi asılmıştır. Hareket yönünü tayin edin; ivmeyi ve ipteki gerilme kuvvetini hesaplayın. ($g = 10\ \mathrm{m/s^2}$)

[[G-S5-11]]', '{"choices":["$m_2$ aşağı iner; $a = 1{,}25\\ \\mathrm{m/s^2}$; $T \\approx 44\\ \\mathrm{N}$","$m_1$ aşağı kayar; $a = 1{,}25\\ \\mathrm{m/s^2}$; $T \\approx 44\\ \\mathrm{N}$","$m_2$ aşağı iner; $a \\approx 4{,}2\\ \\mathrm{m/s^2}$; $T = 50\\ \\mathrm{N}$","$m_2$ aşağı iner; $a = 1{,}25\\ \\mathrm{m/s^2}$; $T = 35\\ \\mathrm{N}$","Hareket etmez; $T = 50\\ \\mathrm{N}$"]}', '{"index":0}', 'Yönü bulmak için $m_2$''yi aşağı çeken $m_2 g$ ile $m_1$''i düzlem boyunca aşağı çeken $m_1 g\sin 30^\circ$ karşılaştırılır. Sonra her kütle için hareket yönünde ikinci yasa.

---

**Yön:** $m_2 g = 50\ \mathrm{N}$; $m_1 g\sin 30^\circ = 70 \times 0{,}5 = 35\ \mathrm{N}$. $50 > 35$: $m_2$ aşağı, $m_1$ yukarı gider.

---

**$m_1$:** $$T - 35 = 7a$$

---

**$m_2$:** $$50 - T = 5a$$

---

**Topla:** $$15 = 12a \quad\Rightarrow\quad a = 1{,}25\ \mathrm{m/s^2}$$

---

**Gerilme:** $$T = 35 + 7 \times 1{,}25 = 43{,}75 \approx 44\ \mathrm{N}$$', 2, 'Sunu, Bölüm 5, Örnek 14', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s15', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Kütlesi $2\ \mathrm{kg}$ olan bir blok, bir duvara yatay yönde $F = 30\ \mathrm{N}$ kuvvetiyle bastırılırken aşağı doğru kayabiliyor. Blok ile duvar arasında sürtünme katsayısı $\mu = 0{,}5$''tir. Bloğun ivmesini bulun. ($g = 10\ \mathrm{m/s^2}$)

[[G-S5-12]]', '{"choices":["2,5 m/s²","10 m/s²","5 m/s²","7,5 m/s²","0"]}', '{"index":0}', 'Normal kuvvet her zaman $mg$''ye eşit değildir; yüzeye dik kuvvetleri karşılar. Burada yüzeye dik tek kuvvet $F$''dir, bu yüzden $N = F$.

---

**Normal kuvvet:** $$N - F = 0 \quad\Rightarrow\quad N = 30\ \mathrm{N}$$

---

**Sürtünme:** $$f = \mu N = 0{,}5 \times 30 = 15\ \mathrm{N}$$ Yukarı, harekete ters.

---

**İkinci yasa (aşağı pozitif):** $$mg - f = ma \quad\Rightarrow\quad 20 - 15 = 2a$$

---

**Sonuç:** $a = 2{,}5\ \mathrm{m/s^2}$.', 2, 'Sunu, Bölüm 5, Örnek 15', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s16', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Atwood aleti. Şekildeki iki eşit $M = 10\ \mathrm{kg}$ kütleleri bir makaradan geçirilen ipin iki ucuna asılmışlardır. Makara sürtünmesiz ve ipin kütlesi önemsizdir. Kütlelerden biri üzerine ilave küçük bir $m = 1\ \mathrm{kg}$ kütlesi konuluyor. İvmeyi ve ipteki gerilmeyi hesaplayın. ($g = 10\ \mathrm{m/s^2}$)

[[G-S5-13]]', '{"choices":["$a \\approx 0{,}5\\ \\mathrm{m/s^2}$; $T \\approx 105\\ \\mathrm{N}$","$a = 1\\ \\mathrm{m/s^2}$; $T = 110\\ \\mathrm{N}$","$a \\approx 0{,}5\\ \\mathrm{m/s^2}$; $T = 100\\ \\mathrm{N}$","$a = 10\\ \\mathrm{m/s^2}$; $T = 0$","$a \\approx 0{,}9\\ \\mathrm{m/s^2}$; $T \\approx 109\\ \\mathrm{N}$"]}', '{"index":0}', 'İp gerilmesi iki yanda eşit, ivmeler aynı büyüklükte. Ağır taraf ($M + m$) aşağı, hafif taraf $M$ yukarı ivmelenir.

---

**$(M + m)$ kütlesi:** $$(M + m)g - T = (M + m)a \quad\Rightarrow\quad 110 - T = 11a$$

---

**$M$ kütlesi:** $$T - Mg = Ma \quad\Rightarrow\quad T - 100 = 10a$$

---

**Topla:** $$10 = 21a \quad\Rightarrow\quad a = \frac{10}{21} \approx 0{,}48 \approx 0{,}5\ \mathrm{m/s^2}$$

---

**Gerilme:** $$T = 100 + 10 \times 0{,}476 \approx 104{,}8 \approx 105\ \mathrm{N}$$

---

**Yorum:** Küçük bir $m$ ile büyük $M$''ler kolayca ivmelendirilir; asansör ve füniküler karşı ağırlığı bu ilkeyle çalışır.', 2, 'Sunu, Bölüm 5, Örnek 16', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s17', 'fizik', 'fz-u5', 5, 'mcq', 'original', '$0{,}5\ \mathrm{kg}$ kütleli bir top, $1{,}5\ \mathrm{m}$ uzunluğunda kablonun ucuna bağlanmıştır. Top, yatay düzlemde dairesel yörüngede hızla döndürülüyor. Kablo $50\ \mathrm{N}$''luk maksimum gerilmeye dayanabiliyorsa, kopmadan önce topun sahip olabileceği maksimum sürat nedir?', '{"choices":["≈ 12,2 m/s","≈ 8,7 m/s","150 m/s","≈ 5,5 m/s","≈ 17,3 m/s"]}', '{"index":0}', 'Yatay dairesel harekette merkezcil kuvveti ipteki gerilme sağlar: $T = \dfrac{mv^2}{r}$. Gerilmenin üst sınırı hızın üst sınırını belirler.

---

**Merkezcil kuvvet:** $$T = \frac{mv^2}{r} \quad\Rightarrow\quad v = \sqrt{\frac{rT}{m}}$$

---

**Yerine koy:** $$v_{\max} = \sqrt{\frac{1{,}5 \times 50}{0{,}5}} = \sqrt{150}$$

---

**Sonuç:** $v_{\max} \approx 12{,}2\ \mathrm{m/s}$.', 2, 'Sunu, Bölüm 5, Örnek 17', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s18a', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Kütlesi $1200\ \mathrm{kg}$ olan bir otomobil $r = 200\ \mathrm{m}$ yarıçaplı yatay ve dairesel bir virajı $72\ \mathrm{km/saat}$ hızıyla dönmektedir. ($g = 10\ \mathrm{m/s^2}$) Tekerlekler ile yol arasındaki sürtünme kuvveti ne kadardır?', '{"choices":["2400 N","31 104 N","120 N","12 000 N","4800 N"]}', '{"index":0}', 'Yatay virajda arabayı merkeze doğru çeken tek kuvvet tekerlek-yol sürtünmesidir: $f = \dfrac{mv^2}{r}$. Önce hızı m/s''ye çevir.

---

**Birim:** $$v = \frac{72}{3{,}6} = 20\ \mathrm{m/s}$$

---

**Merkezcil kuvvet:** $$f = \frac{mv^2}{r} = \frac{1200 \times 20^2}{200} = 1200 \times 2 = 2400\ \mathrm{N}$$

---

**Tuzak:** $72^2$ ile hesaplamak $31\,104\ \mathrm{N}$ verir; birim çevrilmemiştir.', 2, 'Sunu, Bölüm 5, Örnek 18 (a)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s18b', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Kütlesi $1200\ \mathrm{kg}$ olan bir otomobil $r = 200\ \mathrm{m}$ yarıçaplı yatay ve dairesel bir virajı $72\ \mathrm{km/saat}$ hızıyla dönmektedir. ($g = 10\ \mathrm{m/s^2}$) Bu yoldaki sürtünme katsayısı $\mu = 0{,}8$ ise, otomobilin kaymadan dönebileceği maksimum hız ne kadar olur?', '{"choices":["40 m/s (144 km/sa)","20 m/s (72 km/sa)","1600 m/s (5760 km/sa)","≈ 28 m/s (≈ 102 km/sa)","≈ 44,7 m/s (≈ 161 km/sa)"]}', '{"index":0}', 'Sürtünmenin sağlayabileceği en büyük merkezcil kuvvet $\mu mg$''dir: $$\mu mg = \frac{mv^2}{r} \quad\Rightarrow\quad v = \sqrt{\mu g r}$$ Kütle sadeleşir.

---

**Sınır:** $$\mu mg = \frac{mv^2}{r} \quad\Rightarrow\quad v^2 = \mu g r$$

---

**Hesap:** $$v^2 = 0{,}8 \times 10 \times 200 = 1600 \quad\Rightarrow\quad v = 40\ \mathrm{m/s}$$

---

**km/sa:** $40 \times 3{,}6 = 144\ \mathrm{km/sa}$.', 2, 'Sunu, Bölüm 5, Örnek 18 (b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s19', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Bir otomobil $r = 100\ \mathrm{m}$ yarıçaplı ve yatayla $30^\circ$ açı yapan sürtünmesiz bir virajı $v$ hızıyla alıyor. Otomobil savrulmadan hangi hızla dönebilir? ($g = 10\ \mathrm{m/s^2}$; $\tan 30^\circ \approx 0{,}58$)

[[G-S5-14]]', '{"choices":["≈ 24 m/s (≈ 87 km/sa)","≈ 32 m/s (≈ 114 km/sa)","≈ 17 m/s (≈ 61 km/sa)","58 m/s (≈ 209 km/sa)","≈ 22 m/s (≈ 80 km/sa)"]}', '{"index":0}', 'Sürtünme yok; merkezcil kuvveti normal kuvvetin yatay bileşeni $N\sin\theta$ sağlar. Düşey bileşen $N\cos\theta$ ağırlığı dengeler.

---

**Yatay:** $$N\sin\theta = \frac{mv^2}{r}$$

---

**Düşey:** $$N\cos\theta = mg$$

---

**Böl:** $$\tan\theta = \frac{v^2}{gr} \quad\Rightarrow\quad v = \sqrt{gr\tan\theta}$$

---

**Hesap:** $$v = \sqrt{10 \times 100 \times 0{,}58} = \sqrt{580} \approx 24\ \mathrm{m/s} \approx 87\ \mathrm{km/sa}$$', 3, 'Sunu, Bölüm 5, Örnek 19', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s20', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Sürtünmesiz yatay bir düzlemde $80\ \mathrm{cm}$ uzunluktaki bir ipin ucunda sabit hızla dönen $m = 200\ \mathrm{g}$ kütleli blok $3$ dakikada $500$ devir yapmaktadır. Bloğun merkezcil ivmesini ve ipteki gerilme kuvvetini hesaplayın.', '{"choices":["$a_r \\approx 245\\ \\mathrm{m/s^2}$; $T \\approx 49\\ \\mathrm{N}$","$a_r \\approx 17{,}5\\ \\mathrm{m/s^2}$; $T \\approx 3{,}5\\ \\mathrm{N}$","$a_r \\approx 245\\ \\mathrm{m/s^2}$; $T \\approx 49\\,000\\ \\mathrm{N}$","$a_r \\approx 196\\ \\mathrm{m/s^2}$; $T \\approx 39\\ \\mathrm{N}$","$a_r \\approx 14\\ \\mathrm{m/s^2}$; $T \\approx 2{,}8\\ \\mathrm{N}$"]}', '{"index":0}', 'Önce sürat: bir devirde $2\pi r$ yol, toplam yol bölü toplam süre. Merkezcil ivme $v^2/r$, gerilme $m\,a_r$. Birimleri SI''ya çevir ($80\ \mathrm{cm} = 0{,}8\ \mathrm{m}$, $200\ \mathrm{g} = 0{,}2\ \mathrm{kg}$, $3\ \mathrm{dk} = 180\ \mathrm{s}$).

---

**Sürat:** $$v = \frac{500 \times 2\pi \times 0{,}8}{180} \approx \frac{2513}{180} \approx 14\ \mathrm{m/s}$$

---

**Merkezcil ivme:** $$a_r = \frac{v^2}{r} = \frac{14^2}{0{,}8} = \frac{196}{0{,}8} = 245\ \mathrm{m/s^2}$$

---

**Gerilme:** $$T = m\,a_r = 0{,}2 \times 245 = 49\ \mathrm{N}$$

---

**Tuzak:** $200\ \mathrm{g}$''yi $200\ \mathrm{kg}$ diye kullanmak $49\,000\ \mathrm{N}$ verir.', 2, 'Sunu, Bölüm 5, Örnek 20', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s21a', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Sallanan Top: $0{,}5\ \mathrm{m}$ uzunluğunda bir sicimin ucuna bağlanan bir top, şekildeki gibi, yerçekiminin etkisi altında düşey bir daire çevresinde salınmaktadır. Sicim, düşeyle $\theta = 20^\circ$''lik açı yaptığı zaman top $1{,}5\ \mathrm{m/s}$''lik hıza sahiptir. ($g = 9{,}8\ \mathrm{m/s^2}$; $\sin 20^\circ \approx 0{,}34$)

[[G-S5-15]]

İvmenin bu andaki çapsal ($a_r$) bileşenini ve teğetsel ivmenin ($a_t$) büyüklüğünü bulunuz.', '{"choices":["$a_r = 4{,}5\\ \\mathrm{m/s^2}$; $a_t \\approx 3{,}4\\ \\mathrm{m/s^2}$","$a_r = 3\\ \\mathrm{m/s^2}$; $a_t \\approx 3{,}4\\ \\mathrm{m/s^2}$","$a_r = 4{,}5\\ \\mathrm{m/s^2}$; $a_t \\approx 9{,}2\\ \\mathrm{m/s^2}$","$a_r \\approx 3{,}4\\ \\mathrm{m/s^2}$; $a_t = 4{,}5\\ \\mathrm{m/s^2}$","$a_r = 4{,}5\\ \\mathrm{m/s^2}$; $a_t = 0$"]}', '{"index":0}', 'Çapsal (merkezcil) ivme o anki hızdan bulunur: $a_r = v^2/r$. Teğetsel ivmeyi ağırlığın yörüngeye teğet bileşeni $mg\sin\theta$ sağlar: $a_t = g\sin\theta$.

---

**Çapsal:** $$a_r = \frac{v^2}{r} = \frac{1{,}5^2}{0{,}5} = \frac{2{,}25}{0{,}5} = 4{,}5\ \mathrm{m/s^2}$$ İpe doğru, merkeze.

---

**Teğetsel:** $$a_t = g\sin 20^\circ = 9{,}8 \times 0{,}34 \approx 3{,}4\ \mathrm{m/s^2}$$', 2, 'Sunu, Bölüm 5, Örnek 21 (a ve b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s21b', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Sallanan Top: $0{,}5\ \mathrm{m}$ uzunluğunda bir sicimin ucuna bağlanan bir top, şekildeki gibi, yerçekiminin etkisi altında düşey bir daire çevresinde salınmaktadır. Sicim, düşeyle $\theta = 20^\circ$''lik açı yaptığı zaman top $1{,}5\ \mathrm{m/s}$''lik hıza sahiptir. ($g = 9{,}8\ \mathrm{m/s^2}$; $\sin 20^\circ \approx 0{,}34$)

[[G-S5-15]]

$\theta = 20^\circ$''de toplam ivmenin ($a$) büyüklüğünü ve doğrultusunu (ip ile yaptığı açı) bulunuz. ($a_r = 4{,}5\ \mathrm{m/s^2}$, $a_t = 3{,}4\ \mathrm{m/s^2}$)', '{"choices":["$a \\approx 5{,}6\\ \\mathrm{m/s^2}$; ip ile $\\approx 37^\\circ$","$a \\approx 7{,}9\\ \\mathrm{m/s^2}$; ip ile $\\approx 37^\\circ$","$a \\approx 5{,}6\\ \\mathrm{m/s^2}$; ip ile $\\approx 53^\\circ$","$a \\approx 1{,}1\\ \\mathrm{m/s^2}$; ip ile $\\approx 20^\\circ$","$a = 9{,}8\\ \\mathrm{m/s^2}$; düşey"]}', '{"index":0}', 'Çapsal ve teğetsel bileşenler birbirine diktir: büyüklük Pisagor''la, ip (çapsal doğrultu) ile açı $\tan\varphi = a_t/a_r$ ile bulunur.

---

**Büyüklük:** $$a = \sqrt{4{,}5^2 + 3{,}4^2} = \sqrt{20{,}25 + 11{,}56} \approx \sqrt{31{,}8} \approx 5{,}6\ \mathrm{m/s^2}$$

---

**Doğrultu:** $$\varphi = \tan^{-1}\!\left(\frac{3{,}4}{4{,}5}\right) \approx 37^\circ$$ İp doğrultusundan ölçülür.', 2, 'Sunu, Bölüm 5, Örnek 21 (c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s22', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Şekildeki sistemler dengededir. Ölçü aleti Newton''a göre skalalandırılmıştır. Okunacak değerler neler olabilir? Makaralarda ve düzlemlerde sürtünmenin olmadığını kabul ediniz. ($g = 10\ \mathrm{m/s^2}$, bütün kütleler $5\ \mathrm{kg}$)

[[G-S5-16]]', '{"choices":["(a) 50 N; (b) 100 N; (c) 25 N","(a) 100 N; (b) 100 N; (c) 50 N","(a) 50 N; (b) 50 N; (c) 25 N","(a) 0; (b) 100 N; (c) 25 N","(a) 50 N; (b) 100 N; (c) 43 N"]}', '{"index":0}', 'Dinamometre bağlı olduğu ipteki gerilmeyi okur. Bir ipin iki ucunda kütle varken gerilme toplam ağırlık değil, tek bir kütlenin ağırlığıdır.

---

**(a):** Her kütle için $T - mg = 0$, yani $T = 50\ \mathrm{N}$. Dinamometre ipin içinde, $50\ \mathrm{N}$ okur (iki ucu da $50\ \mathrm{N}$ ile çekilir).

---

**(b):** İpteki gerilme yine $T = 50\ \mathrm{N}$. Makara iki ip parçasıyla aşağı çekilir; makarayı tutan dinamometre $2T = 100\ \mathrm{N}$ okur.

---

**(c):** Eğik düzlemde dengede: $$T - mg\sin 30^\circ = 0 \quad\Rightarrow\quad T = 50 \times 0{,}5 = 25\ \mathrm{N}$$', 2, 'Sunu, Bölüm 5, Örnek 22', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s23a', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Sürtünmesiz bir düzlem üzerindeki üç kütleye şekildeki gibi $F = 18\ \mathrm{N}$''luk bir kuvvet $m_1$ kütlesi tarafından etkimektedir. $m_1 = 2{,}00\ \mathrm{kg}$, $m_2 = 3{,}00\ \mathrm{kg}$, $m_3 = 4{,}00\ \mathrm{kg}$ olarak verilmektedir.

[[G-S5-17]]

Kütlelerin sahip olduğu ivmeyi ve her bloğa uygulanan bileşke kuvveti hesaplayınız.', '{"choices":["$a = 2\\ \\mathrm{m/s^2}$; 4 N, 6 N, 8 N","$a = 2\\ \\mathrm{m/s^2}$; 18 N, 14 N, 8 N","$a = 6\\ \\mathrm{m/s^2}$; 12 N, 18 N, 24 N","$a = 2\\ \\mathrm{m/s^2}$; 6 N, 6 N, 6 N","$a = 9\\ \\mathrm{m/s^2}$; 18 N, 27 N, 36 N"]}', '{"index":0}', 'Bloklar birlikte hareket ettiği için ivmeleri aynıdır; sistemin ivmesi $F$ bölü toplam kütle. Her bloğun bileşke kuvveti kendi kütlesi çarpı ivmedir. Not: sunu (b)''de $14\ \mathrm{N}$ ve $8\ \mathrm{N}$ vermiş; bunlar bloklar arası temas kuvvetleri, bileşke kuvvetler $4$, $6$ ve $8\ \mathrm{N}$''dur.

---

**İvme:** $$a = \frac{F}{m_1 + m_2 + m_3} = \frac{18}{9} = 2\ \mathrm{m/s^2}$$

---

**Bileşke kuvvetler:** $$F_{1,\text{net}} = 2 \times 2 = 4\ \mathrm{N}, \quad F_{2,\text{net}} = 3 \times 2 = 6\ \mathrm{N}, \quad F_{3,\text{net}} = 4 \times 2 = 8\ \mathrm{N}$$

---

**Kontrol:** $4 + 6 + 8 = 18\ \mathrm{N}$, dış kuvvete eşit ✓', 2, 'Sunu, Bölüm 5, Örnek 23 (a ve b)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-s23b', 'fizik', 'fz-u5', 5, 'mcq', 'original', 'Sürtünmesiz bir düzlem üzerindeki üç kütleye şekildeki gibi $F = 18\ \mathrm{N}$''luk bir kuvvet $m_1$ kütlesi tarafından etkimektedir. $m_1 = 2{,}00\ \mathrm{kg}$, $m_2 = 3{,}00\ \mathrm{kg}$, $m_3 = 4{,}00\ \mathrm{kg}$ olarak verilmektedir.

[[G-S5-17]]

Bloklar arası kontak kuvvetlerini hesaplayınız.', '{"choices":["$P_{12} = 14\\ \\mathrm{N}$; $P_{23} = 8\\ \\mathrm{N}$","$P_{12} = 6\\ \\mathrm{N}$; $P_{23} = 8\\ \\mathrm{N}$","$P_{12} = 18\\ \\mathrm{N}$; $P_{23} = 18\\ \\mathrm{N}$","$P_{12} = 4\\ \\mathrm{N}$; $P_{23} = 6\\ \\mathrm{N}$","$P_{12} = 16\\ \\mathrm{N}$; $P_{23} = 10\\ \\mathrm{N}$"]}', '{"index":0}', '$m_1$''in $m_2$''ye uyguladığı kuvvet $m_2$ ile $m_3$''ü birlikte ivmelendirir; $m_2$''nin $m_3$''e uyguladığı kuvvet yalnız $m_3$''ü ivmelendirir. Üçüncü yasaya göre $\vec{P}_{12} = -\vec{P}_{21}$.

---

**$P_{12}$:** $$P_{12} = (m_2 + m_3)\,a = (3 + 4) \times 2 = 14\ \mathrm{N}$$

---

**$P_{23}$:** $$P_{23} = m_3\,a = 4 \times 2 = 8\ \mathrm{N}$$

---

**Kontrol ($m_1$):** $$F - P_{21} = m_1 a \quad\Rightarrow\quad 18 - 14 = 4 = 2 \times 2\ ✓$$', 2, 'Sunu, Bölüm 5, Örnek 23 (c)', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t01', 'fizik', 'fz-u5', 5, 'tf', 'derived', 'Bir astronotun kütlesi Ay''da Dünya''dakinden küçüktür.', '{}', '{"value":false}', 'Kütle cismin eylemsizlik ölçüsüdür, konuma bağlı değildir. Ay''da değişen ağırlıktır: $W = mg$ ve Ay''da $g$ daha küçük.', 1, '5. bölüm, Kuvvet, kütle ve ağırlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t02', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Kütlesi $60\ \mathrm{kg}$ olan bir astronotun Ay''daki ağırlığı nedir? ($g_{\text{Ay}} \approx 1{,}6\ \mathrm{m/s^2}$)', '{"choices":["96 N","600 N","60 N","37,5 N","9,6 N"]}', '{"index":0}', 'Ağırlık $W = mg$; $g$ bulunduğun yere bağlıdır.

---

**Formül:** $$W = m\,g_{\text{Ay}}$$

---

**Hesap:** $$W = 60 \times 1{,}6 = 96\ \mathrm{N}$$ Dünya''da $600\ \mathrm{N}$ olurdu.', 2, '5. bölüm, Kuvvet, kütle ve ağırlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t03', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Aynı $F$ kuvveti $m_1$ kütlesine $6\ \mathrm{m/s^2}$, $m_2$ kütlesine $2\ \mathrm{m/s^2}$ ivme kazandırıyor. $m_1/m_2$ oranı nedir?', '{"choices":["$\\tfrac{1}{3}$","$3$","$\\tfrac{1}{2}$","$2$","$\\tfrac{1}{6}$"]}', '{"index":0}', 'Aynı kuvvet için ivme kütleyle ters orantılıdır: $m_1 a_1 = m_2 a_2$, dolayısıyla $\dfrac{m_1}{m_2} = \dfrac{a_2}{a_1}$.

---

**Eşitle:** $$F = m_1 \times 6 = m_2 \times 2$$

---

**Oran:** $$\frac{m_1}{m_2} = \frac{2}{6} = \frac{1}{3}$$ Daha çok ivmelenen cisim daha hafiftir.', 2, '5. bölüm, Kuvvet, kütle ve ağırlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t04', 'fizik', 'fz-u5', 5, 'fill', 'derived', 'Bir cismin hız değişimine karşı gösterdiği direnç ____ olarak adlandırılır; bu direncin ölçüsü kütledir.', '{"blanks":1}', '{"blanks":[["eylemsizlik","eylemsizlik (atalet)","atalet"]]}', '**Eylemsizlik** (atalet): cisim hızını korumak ister. Kütlesi büyük olanı ivmelendirmek zordur; uzayda 1 tonluk kayayı tutabilirsin ama tekmeleyip hızlandırmaya çalışırsan ayağını kırabilirsin.', 1, '5. bölüm, Kuvvet, kütle ve ağırlık', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t05', 'fizik', 'fz-u5', 5, 'mcq', 'derived', '$5\ \mathrm{kg}$ kütleli bir cisme sürtünmesiz yatay düzlemde $20\ \mathrm{N}$ yatay net kuvvet uygulanıyor. Cismin ivmesi nedir?', '{"choices":["4 m/s²","100 m/s²","0,25 m/s²","25 m/s²","15 m/s²"]}', '{"index":0}', 'Newton''un ikinci yasası: $\sum \vec{F} = m\vec{a}$, dolayısıyla $a = \sum F/m$.

---

**Hesap:** $$a = \frac{20}{5} = 4\ \mathrm{m/s^2}$$', 1, '5. bölüm, Newton''un üç yasası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t06', 'fizik', 'fz-u5', 5, 'tf', 'derived', 'Etki ve tepki kuvvetleri eşit büyüklükte ve zıt yönlü oldukları için aynı cisme etki ederek birbirini dengeler.', '{}', '{"value":false}', 'Üçüncü yasadaki etki-tepki çifti **farklı cisimlere** etki eder ($\vec{P}_{12}$ $m_2$''ye, $\vec{P}_{21}$ $m_1$''e). Bu yüzden birbirini dengeleyemezler. Masadaki kitapta ağırlık ve normal kuvvet birbirini dengeler ama bunlar etki-tepki çifti değildir.', 2, '5. bölüm, Newton''un üç yasası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t07', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Üzerine etki eden net kuvvet sıfır olan bir cisim için hangisi kesinlikle doğrudur?', '{"choices":["İvmesi sıfırdır","Durmaktadır","Üzerine hiç kuvvet etki etmiyordur","Yavaşlamaktadır","Dairesel hareket yapmaktadır"]}', '{"index":0}', 'Birinci yasa: net kuvvet sıfırsa cisim durumunu korur, yani ya durur ya da sabit hızla gider; her iki durumda ivme sıfırdır. Cismin üzerinde birbirini dengeleyen kuvvetler olabilir.', 2, '5. bölüm, Newton''un üç yasası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t08', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Bir at arabayı çekiyor. At arabaya $F$ kuvveti uyguluyorsa araba ata ne kadar kuvvet uygular?', '{"choices":["$F$, ters yönde","$F$''den küçük","$F$''den büyük","Araba hızlanıyorsa sıfır","$2F$, ters yönde"]}', '{"index":0}', 'Üçüncü yasa koşulsuzdur: araba hızlansa da yavaşlasa da $\vec{P}_{\text{araba}\to\text{at}} = -\vec{P}_{\text{at}\to\text{araba}}$. Arabanın hızlanmasını, attan aldığı kuvvetin yolun sürtünmesinden büyük olması açıklar.', 2, '5. bölüm, Newton''un üç yasası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t09', 'fizik', 'fz-u5', 5, 'mcq', 'derived', '$40\ \mathrm{N}$ ağırlığındaki bir lamba, yatayla $30^\circ$ açı yapan iki eş kabloyla şekildeki gibi asılıdır. Her bir kablodaki gerilme nedir? ($\sin 30^\circ = 0{,}5$)

[[G-S5-18]]', '{"choices":["40 N","20 N","80 N","≈ 23 N","≈ 46 N"]}', '{"index":0}', 'Simetrik durumda iki gerilme eşittir; yatay bileşenler birbirini götürür, düşey bileşenlerin toplamı ağırlığı dengeler.

---

**Düşey denge:** $$2T\sin 30^\circ = 40$$

---

**Çöz:** $$2T \times 0{,}5 = 40 \quad\Rightarrow\quad T = 40\ \mathrm{N}$$

---

**Yorum:** Kablolar yataya yaklaştıkça (açı küçüldükçe) gerilme artar; $30^\circ$''de her kablo lambanın tüm ağırlığı kadar gerilir.', 2, '5. bölüm, Denge ve gerilme kuvveti', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t10', 'fizik', 'fz-u5', 5, 'tf', 'derived', 'Sabit hızla düz bir yolda giden bir arabaya etki eden net kuvvet sıfırdır.', '{}', '{"value":true}', 'Sabit hız (yön ve büyüklük sabit) ivme sıfır demektir; ikinci yasaya göre net kuvvet de sıfırdır. Motorun itişi sürtünme ve hava direnciyle dengelenir.', 2, '5. bölüm, Denge ve gerilme kuvveti', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t11', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Sürtünmesiz yatay düzlemdeki $2\ \mathrm{kg}$ kütleli bir bloğa yatayla $53^\circ$ açı yapan $F = 10\ \mathrm{N}$ kuvveti yukarı doğru uygulanıyor. Bloğun ivmesi ve normal kuvvet nedir? ($\sin 53^\circ = 0{,}8$; $\cos 53^\circ = 0{,}6$; $g = 10\ \mathrm{m/s^2}$)

[[G-S5-21]]', '{"choices":["$a = 3\\ \\mathrm{m/s^2}$; $N = 12\\ \\mathrm{N}$","$a = 5\\ \\mathrm{m/s^2}$; $N = 20\\ \\mathrm{N}$","$a = 4\\ \\mathrm{m/s^2}$; $N = 14\\ \\mathrm{N}$","$a = 3\\ \\mathrm{m/s^2}$; $N = 28\\ \\mathrm{N}$","$a = 3\\ \\mathrm{m/s^2}$; $N = 20\\ \\mathrm{N}$"]}', '{"index":0}', 'Yatay bileşen ivmeyi verir; düşey bileşen yukarı çektiği için normal kuvveti azaltır.

---

**Yatay:** $$F\cos 53^\circ = 10 \times 0{,}6 = 6\ \mathrm{N} \quad\Rightarrow\quad a = \frac{6}{2} = 3\ \mathrm{m/s^2}$$

---

**Düşey:** $$N + F\sin 53^\circ - mg = 0 \quad\Rightarrow\quad N = 20 - 8 = 12\ \mathrm{N}$$', 2, '5. bölüm, İkinci yasanın uygulanması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t12', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Bir blok $30^\circ$ eğimli sürtünmesiz bir düzlemin tepesinden serbest bırakılıyor. Eğik yüzey boyunca uzunluk $10\ \mathrm{m}$''dir. Bloğun ivmesi ve alt uca vardığındaki hızı nedir? ($g = 10\ \mathrm{m/s^2}$)

[[G-S5-19]]', '{"choices":["$a = 5\\ \\mathrm{m/s^2}$; $v = 10\\ \\mathrm{m/s}$","$a = 10\\ \\mathrm{m/s^2}$; $v \\approx 14\\ \\mathrm{m/s}$","$a \\approx 8{,}7\\ \\mathrm{m/s^2}$; $v \\approx 13\\ \\mathrm{m/s}$","$a = 5\\ \\mathrm{m/s^2}$; $v = 100\\ \\mathrm{m/s}$","$a = 5\\ \\mathrm{m/s^2}$; $v \\approx 7{,}1\\ \\mathrm{m/s}$"]}', '{"index":0}', 'Sürtünmesiz eğik düzlemde $a = g\sin\theta$; ilk hız sıfır olduğundan $v^2 = 2ad$.

---

**İvme:** $$a = 10 \times \sin 30^\circ = 5\ \mathrm{m/s^2}$$

---

**Hız:** $$v^2 = 2 \times 5 \times 10 = 100 \quad\Rightarrow\quad v = 10\ \mathrm{m/s}$$

---

**Kontrol:** Yükseklik $h = 10 \times \sin 30^\circ = 5\ \mathrm{m}$: $$\sqrt{2gh} = \sqrt{100} = 10\ \mathrm{m/s}\ ✓$$', 2, '5. bölüm, İkinci yasanın uygulanması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t13', 'fizik', 'fz-u5', 5, 'mcq', 'derived', '$70\ \mathrm{kg}$ kütleli bir kişi asansörde bir baskülün üzerinde duruyor. Asansör $2\ \mathrm{m/s^2}$ ivmeyle yukarı doğru hızlanırken baskül kaç N gösterir? ($g = 10\ \mathrm{m/s^2}$)', '{"choices":["840 N","700 N","560 N","140 N","1400 N"]}', '{"index":0}', 'Baskül normal kuvveti gösterir. Kişi asansörle birlikte yukarı ivmelendiği için $N - mg = ma$.

---

**İkinci yasa (yukarı pozitif):** $$N - 700 = 70 \times 2$$

---

**Sonuç:** $N = 840\ \mathrm{N}$. Aşağı yönde $2\ \mathrm{m/s^2}$ ivmelenseydi $560\ \mathrm{N}$ gösterirdi.', 2, '5. bölüm, İkinci yasanın uygulanması', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t14', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Yatay zemindeki $4\ \mathrm{kg}$ kütleli bir kutuya $30\ \mathrm{N}$ yatay kuvvet uygulanıyor. Kinetik sürtünme katsayısı $0{,}5$ ise kutunun ivmesi nedir? ($g = 10\ \mathrm{m/s^2}$)', '{"choices":["2,5 m/s²","7,5 m/s²","5 m/s²","0","12,5 m/s²"]}', '{"index":0}', 'Önce sürtünme kuvveti $\mu mg$, sonra net kuvvet.

---

**Sürtünme:** $$f = 0{,}5 \times 4 \times 10 = 20\ \mathrm{N}$$

---

**Net kuvvet:** $$F_{\text{net}} = 30 - 20 = 10\ \mathrm{N}$$

---

**İvme:** $$a = \frac{10}{4} = 2{,}5\ \mathrm{m/s^2}$$', 2, '5. bölüm, Statik ve kinetik sürtünme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t15', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Yatay zemindeki $10\ \mathrm{kg}$ kütleli bir dolaba $30\ \mathrm{N}$ yatay kuvvet uygulanıyor. Statik sürtünme katsayısı $0{,}4$ ise dolaba etki eden sürtünme kuvveti nedir? ($g = 10\ \mathrm{m/s^2}$)', '{"choices":["30 N","40 N","10 N","0","70 N"]}', '{"index":0}', 'Statik sürtünmenin üst sınırı $\mu_s N$''dir ama değeri uygulanan kuvvete göre ayarlanır.

---

**Üst sınır:** $$f_{\max} = 0{,}4 \times 100 = 40\ \mathrm{N}$$

---

**Karşılaştır:** $30\ \mathrm{N} < 40\ \mathrm{N}$, dolap kımıldamaz.

---

**Sürtünme:** Net kuvvet sıfır olmalı, dolayısıyla $f = 30\ \mathrm{N}$.', 2, '5. bölüm, Statik ve kinetik sürtünme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t16', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Yatay bir yüzeyde $10\ \mathrm{m/s}$ hızla kaymaya başlayan bir blok, kinetik sürtünme katsayısı $0{,}5$ olan yüzeyde kaç metre sonra durur? ($g = 10\ \mathrm{m/s^2}$)', '{"choices":["10 m","20 m","5 m","2 m","100 m"]}', '{"index":0}', '$a = -\mu g$ (kütle sadeleşir), sonra zamansız hız denklemi.

---

**İvme:** $$a = -0{,}5 \times 10 = -5\ \mathrm{m/s^2}$$

---

**Yol:** $$0 = 100 + 2(-5)\,x \quad\Rightarrow\quad x = 10\ \mathrm{m}$$', 2, '5. bölüm, Statik ve kinetik sürtünme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t17', 'fizik', 'fz-u5', 5, 'mcq', 'derived', '$37^\circ$ eğimli bir düzlemdeki $2\ \mathrm{kg}$ kütleli bloğun düzlemle kinetik sürtünme katsayısı $0{,}5$''tir. Blok aşağı kayarken ivmesi nedir? ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$; $g = 10\ \mathrm{m/s^2}$)

[[G-S5-20]]', '{"choices":["2 m/s²","6 m/s²","10 m/s²","4 m/s²","1 m/s²"]}', '{"index":0}', 'Aşağı çeken $mg\sin\theta$, karşı koyan $\mu mg\cos\theta$. Net kuvvet farklarıdır.

---

**Aşağı bileşen:** $$mg\sin 37^\circ = 20 \times 0{,}6 = 12\ \mathrm{N}$$

---

**Sürtünme:** $$\mu mg\cos 37^\circ = 0{,}5 \times 20 \times 0{,}8 = 8\ \mathrm{N}$$

---

**İvme:** $$a = \frac{12 - 8}{2} = 2\ \mathrm{m/s^2}$$

---

**Formülle kontrol:** $$a = g(\sin\theta - \mu\cos\theta) = 10\,(0{,}6 - 0{,}4) = 2\ \mathrm{m/s^2}\ ✓$$', 2, '5. bölüm, Statik ve kinetik sürtünme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t18', 'fizik', 'fz-u5', 5, 'mcq', 'derived', '$37^\circ$ eğimli bir düzlemde $2\ \mathrm{kg}$ kütleli bir blok duruyor. Statik sürtünme katsayısı $0{,}8$''dir. Bloğa etki eden sürtünme kuvveti nedir? ($\sin 37^\circ = 0{,}6$; $\cos 37^\circ = 0{,}8$; $g = 10\ \mathrm{m/s^2}$)', '{"choices":["12 N","12,8 N","16 N","0","20 N"]}', '{"index":0}', 'Önce kayıp kaymadığını kontrol et: $\mu_s \geq \tan\theta$ ise blok durur. Duruyorsa sürtünme $\mu N$ değil, aşağı çeken bileşen kadardır.

---

**Kayar mı:** $\tan 37^\circ = 0{,}75 < 0{,}8$, blok durur. Ya da: $$f_{\max} = 0{,}8 \times 16 = 12{,}8\ \mathrm{N} > 12\ \mathrm{N}$$

---

**Sürtünme:** Denge: $$f = mg\sin 37^\circ = 20 \times 0{,}6 = 12\ \mathrm{N}$$

---

**Tuzak:** $12{,}8\ \mathrm{N}$ yalnız üst sınırdır; bloğa etki eden sürtünme $12\ \mathrm{N}$''dur.', 3, '5. bölüm, Statik ve kinetik sürtünme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t19', 'fizik', 'fz-u5', 5, 'mcq', 'derived', '$4\ \mathrm{kg}$ kütleli bir blok bir duvara $F = 100\ \mathrm{N}$ yatay kuvvetle bastırılıyor. Blok ile duvar arasındaki statik sürtünme katsayısı $0{,}5$''tir. Blok kayar mı, sürtünme kuvveti ne kadardır? ($g = 10\ \mathrm{m/s^2}$)

[[G-S5-24]]', '{"choices":["Kaymaz; $f = 40\\ \\mathrm{N}$","Kaymaz; $f = 50\\ \\mathrm{N}$","Kayar; $f = 50\\ \\mathrm{N}$","Kayar; $f = 40\\ \\mathrm{N}$","Kaymaz; $f = 100\\ \\mathrm{N}$"]}', '{"index":0}', 'Normal kuvvet bastırma kuvvetine eşittir ($N = F$). Duvardaki sürtünmenin üst sınırı ağırlıktan büyükse blok durur ve sürtünme ağırlık kadardır.

---

**Normal kuvvet:** $N = F = 100\ \mathrm{N}$.

---

**Üst sınır:** $$f_{\max} = 0{,}5 \times 100 = 50\ \mathrm{N}$$

---

**Ağırlık:** $mg = 40\ \mathrm{N} < 50\ \mathrm{N}$, blok kaymaz.

---

**Sürtünme:** Denge: $f = 40\ \mathrm{N}$ (yukarı).', 3, '5. bölüm, Statik ve kinetik sürtünme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t20', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Sürtünmesiz bir makaradan geçen ipin bir ucunda $3\ \mathrm{kg}$, öbür ucunda $2\ \mathrm{kg}$ kütle asılıdır. Sistemin ivmesi ve ipteki gerilme nedir? ($g = 10\ \mathrm{m/s^2}$)

[[G-S5-25]]', '{"choices":["$a = 2\\ \\mathrm{m/s^2}$; $T = 24\\ \\mathrm{N}$","$a = 10\\ \\mathrm{m/s^2}$; $T = 0$","$a = 2\\ \\mathrm{m/s^2}$; $T = 30\\ \\mathrm{N}$","$a = 2\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$","$a = 5\\ \\mathrm{m/s^2}$; $T = 25\\ \\mathrm{N}$"]}', '{"index":0}', 'Atwood aletinde net kuvvet ağırlıkların farkıdır ve toplam kütleyi ivmelendirir. Gerilme iki ağırlığın arasında bir değer olmalı.

---

**İvme:** $$a = \frac{30 - 20}{3 + 2} = 2\ \mathrm{m/s^2}$$

---

**Gerilme (2 kg, yukarı):** $$T - 20 = 2 \times 2 \quad\Rightarrow\quad T = 24\ \mathrm{N}$$

---

**Kontrol (3 kg):** $$30 - 24 = 6 = 3 \times 2\ ✓$$', 2, '5. bölüm, Bağlı cisimler ve makaralar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t21', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Sürtünmesiz bir masadaki $3\ \mathrm{kg}$ blok, masanın kenarındaki makaradan geçen iple asılı $2\ \mathrm{kg}$ bloğa bağlıdır. İvme ve gerilme nedir? ($g = 10\ \mathrm{m/s^2}$)

[[G-S5-22]]', '{"choices":["$a = 4\\ \\mathrm{m/s^2}$; $T = 12\\ \\mathrm{N}$","$a = 10\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$","$a \\approx 6{,}7\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$","$a = 4\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$","$a = 4\\ \\mathrm{m/s^2}$; $T = 8\\ \\mathrm{N}$"]}', '{"index":0}', 'Sistemi hareket ettiren tek kuvvet asılı bloğun ağırlığıdır; iki kütleyi birlikte ivmelendirir. Gerilme masadaki bloğu ivmelendiren kuvvettir.

---

**İvme:** $$a = \frac{20}{3 + 2} = 4\ \mathrm{m/s^2}$$

---

**Gerilme:** $$T = 3 \times 4 = 12\ \mathrm{N}$$

---

**Kontrol (2 kg):** $$20 - 12 = 8 = 2 \times 4\ ✓$$ Gerilme asılı bloğun ağırlığından küçük çıkar, çünkü blok aşağı ivmelenir.', 2, '5. bölüm, Bağlı cisimler ve makaralar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t22', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Sürtünmesiz düzlemde yan yana duran $1\ \mathrm{kg}$, $2\ \mathrm{kg}$ ve $3\ \mathrm{kg}$ kütleli bloklardan soldakine $F = 24\ \mathrm{N}$ yatay kuvvet uygulanıyor. İvme ve bloklar arası temas kuvvetleri nedir?

[[G-S5-26]]', '{"choices":["$a = 4\\ \\mathrm{m/s^2}$; $P_{12} = 20\\ \\mathrm{N}$; $P_{23} = 12\\ \\mathrm{N}$","$a = 4\\ \\mathrm{m/s^2}$; $P_{12} = 8\\ \\mathrm{N}$; $P_{23} = 12\\ \\mathrm{N}$","$a = 4\\ \\mathrm{m/s^2}$; $P_{12} = 24\\ \\mathrm{N}$; $P_{23} = 24\\ \\mathrm{N}$","$a = 24\\ \\mathrm{m/s^2}$; $P_{12} = 20\\ \\mathrm{N}$; $P_{23} = 12\\ \\mathrm{N}$","$a = 4\\ \\mathrm{m/s^2}$; $P_{12} = 4\\ \\mathrm{N}$; $P_{23} = 8\\ \\mathrm{N}$"]}', '{"index":0}', 'Önce bütün sistemin ivmesi; sonra her temas kuvveti, kendisinden sonraki blokların toplam kütlesini ivmelendirir.

---

**İvme:** $$a = \frac{24}{6} = 4\ \mathrm{m/s^2}$$

---

**$P_{12}$:** $$P_{12} = (2 + 3) \times 4 = 20\ \mathrm{N}$$

---

**$P_{23}$:** $$P_{23} = 3 \times 4 = 12\ \mathrm{N}$$', 2, '5. bölüm, Bağlı cisimler ve makaralar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t23', 'fizik', 'fz-u5', 5, 'mcq', 'derived', '$30^\circ$ eğimli sürtünmesiz düzlemdeki $4\ \mathrm{kg}$ blok, tepedeki makaradan geçen iple asılı $4\ \mathrm{kg}$ bloğa bağlıdır. Sistemin ivmesi ve ipteki gerilme nedir? ($g = 10\ \mathrm{m/s^2}$)

[[G-S5-23]]', '{"choices":["$a = 2{,}5\\ \\mathrm{m/s^2}$; $T = 30\\ \\mathrm{N}$","$a = 0$; $T = 40\\ \\mathrm{N}$","$a = 5\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$","$a = 2{,}5\\ \\mathrm{m/s^2}$; $T = 40\\ \\mathrm{N}$","$a = 2{,}5\\ \\mathrm{m/s^2}$; $T = 20\\ \\mathrm{N}$"]}', '{"index":0}', 'Kütleler eşit olsa da düzlemdeki bloğu aşağı çeken yalnız ağırlığın $mg\sin 30^\circ$ bileşenidir. Bu yüzden asılı blok iner.

---

**Yön:** Asılı: $40\ \mathrm{N}$; düzlemdeki: $40 \times 0{,}5 = 20\ \mathrm{N}$. Asılı blok aşağı iner.

---

**İvme:** $$a = \frac{40 - 20}{4 + 4} = 2{,}5\ \mathrm{m/s^2}$$

---

**Gerilme (asılı):** $$40 - T = 4 \times 2{,}5 \quad\Rightarrow\quad T = 30\ \mathrm{N}$$', 3, '5. bölüm, Bağlı cisimler ve makaralar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t24', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Yarıçapı $50\ \mathrm{m}$ olan yatay, düz bir virajda tekerlek-yol sürtünme katsayısı $0{,}5$''tir. Bir araba bu virajı kaymadan en fazla hangi hızla dönebilir? ($g = 10\ \mathrm{m/s^2}$)', '{"choices":["≈ 15,8 m/s","25 m/s","250 m/s","≈ 22,4 m/s","≈ 11,2 m/s"]}', '{"index":0}', 'Sürtünmenin sağlayabileceği en büyük merkezcil kuvvet $\mu mg$: $v_{\max} = \sqrt{\mu g r}$.

---

**Formül:** $$v^2 = \mu g r = 0{,}5 \times 10 \times 50 = 250$$

---

**Sonuç:** $$v = \sqrt{250} \approx 15{,}8\ \mathrm{m/s}$$ Yaklaşık $57\ \mathrm{km/sa}$.', 2, '5. bölüm, Dairesel harekette Newton''un ikinci yasası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t25', 'fizik', 'fz-u5', 5, 'mcq', 'derived', '$0{,}2\ \mathrm{kg}$ kütleli bir taş $1\ \mathrm{m}$ uzunluğundaki bir ipin ucunda sürtünmesiz yatay düzlemde $5\ \mathrm{m/s}$ süratle döndürülüyor. İpteki gerilme nedir?', '{"choices":["5 N","1 N","25 N","2 N","0,5 N"]}', '{"index":0}', 'Yatay düzlemde merkezcil kuvveti tek başına ip sağlar: $T = \dfrac{mv^2}{r}$.

---

**Hesap:** $$T = \frac{0{,}2 \times 5^2}{1} = 5\ \mathrm{N}$$', 2, '5. bölüm, Dairesel harekette Newton''un ikinci yasası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t26', 'fizik', 'fz-u5', 5, 'mcq', 'derived', 'Yarıçapı $80\ \mathrm{m}$ olan ve yatayla $37^\circ$ eğimli sürtünmesiz bir virajı bir araba kaymadan hangi hızla dönebilir? ($\tan 37^\circ = 0{,}75$; $g = 10\ \mathrm{m/s^2}$)', '{"choices":["≈ 24,5 m/s","≈ 28,3 m/s","600 m/s","≈ 17,3 m/s","≈ 21,2 m/s"]}', '{"index":0}', 'Eğimli virajda merkezcil kuvveti $N\sin\theta$ sağlar, $N\cos\theta$ ağırlığı dengeler: $v = \sqrt{gr\tan\theta}$.

---

**Formül:** $$v^2 = gr\tan\theta = 10 \times 80 \times 0{,}75 = 600$$

---

**Sonuç:** $$v = \sqrt{600} \approx 24{,}5\ \mathrm{m/s}$$ Yaklaşık $88\ \mathrm{km/sa}$.', 3, '5. bölüm, Dairesel harekette Newton''un ikinci yasası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('fz-u5-t27', 'fizik', 'fz-u5', 5, 'tf', 'derived', 'Düzgün dairesel hareket yapan bir cisme etki eden net kuvvet çemberin merkezine yönelir.', '{}', '{"value":true}', 'İkinci yasa: $\sum \vec{F} = m\vec{a}$. Düzgün dairesel harekette ivme merkezcildir ($a_r = v^2/r$), bu yüzden net kuvvet de merkeze yönelir. "Merkezcil kuvvet" ayrı bir kuvvet değil; bu rolü ip gerilmesi, sürtünme ya da normal kuvvet üstlenir.', 2, '5. bölüm, Dairesel harekette Newton''un ikinci yasası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-boyut', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u1-s01';
UPDATE questions SET kavram = 'u1-yogunluk', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u1-s02';
UPDATE questions SET kavram = 'u1-si', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t01';
UPDATE questions SET kavram = 'u1-si', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t02';
UPDATE questions SET kavram = 'u1-si', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t03';
UPDATE questions SET kavram = 'u1-si', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t04';
UPDATE questions SET kavram = 'u1-si', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t05';
UPDATE questions SET kavram = 'u1-onek', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t06';
UPDATE questions SET kavram = 'u1-onek', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t07';
UPDATE questions SET kavram = 'u1-onek', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t08';
UPDATE questions SET kavram = 'u1-onek', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t09';
UPDATE questions SET kavram = 'u1-onek', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t10';
UPDATE questions SET kavram = 'u1-onek', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t11';
UPDATE questions SET kavram = 'u1-boyut', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t12';
UPDATE questions SET kavram = 'u1-boyut', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t13';
UPDATE questions SET kavram = 'u1-boyut', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t14';
UPDATE questions SET kavram = 'u1-boyut', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t15';
UPDATE questions SET kavram = 'u1-yogunluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t16';
UPDATE questions SET kavram = 'u1-yogunluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t17';
UPDATE questions SET kavram = 'u1-yogunluk', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t18';
UPDATE questions SET kavram = 'u1-anlamli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t19';
UPDATE questions SET kavram = 'u1-anlamli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t20';
UPDATE questions SET kavram = 'u1-anlamli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t21';
UPDATE questions SET kavram = 'u1-anlamli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u1-t22';
UPDATE questions SET kavram = 'u2-koordinat', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s01';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s02';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s03a';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s03b';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s03c';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s04a';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s04b';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s05a';
UPDATE questions SET kavram = 'u2-ozellik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s05b';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s05c';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s06a';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s06b';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s06c';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s07a';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s07b';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s08';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s09a';
UPDATE questions SET kavram = 'u2-ozellik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s09b';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s09c';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s09d';
UPDATE questions SET kavram = 'u2-vektorel-carpim', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s10a';
UPDATE questions SET kavram = 'u2-vektorel-carpim', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s10b';
UPDATE questions SET kavram = 'u2-vektorel-carpim', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u2-s11';
UPDATE questions SET kavram = 'u2-skaler', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t01';
UPDATE questions SET kavram = 'u2-skaler', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t02';
UPDATE questions SET kavram = 'u2-koordinat', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t03';
UPDATE questions SET kavram = 'u2-koordinat', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t04';
UPDATE questions SET kavram = 'u2-ozellik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t05';
UPDATE questions SET kavram = 'u2-ozellik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t06';
UPDATE questions SET kavram = 'u2-ozellik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t07';
UPDATE questions SET kavram = 'u2-ozellik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t08';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t09';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t10';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t11';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t12';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t13';
UPDATE questions SET kavram = 'u2-bilesen', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t14';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t15';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t16';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t17';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t18';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t19';
UPDATE questions SET kavram = 'u2-skaler-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t20';
UPDATE questions SET kavram = 'u2-vektorel-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t21';
UPDATE questions SET kavram = 'u2-vektorel-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t22';
UPDATE questions SET kavram = 'u2-vektorel-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t23';
UPDATE questions SET kavram = 'u2-vektorel-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t24';
UPDATE questions SET kavram = 'u2-vektorel-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t25';
UPDATE questions SET kavram = 'u2-vektorel-carpim', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u2-t26';
UPDATE questions SET kavram = 'u3-temel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s01';
UPDATE questions SET kavram = 'u3-temel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s02a';
UPDATE questions SET kavram = 'u3-temel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s02b';
UPDATE questions SET kavram = 'u3-turev', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s02c';
UPDATE questions SET kavram = 'u3-turev', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s02d';
UPDATE questions SET kavram = 'u3-turev', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s03a';
UPDATE questions SET kavram = 'u3-turev', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s03b';
UPDATE questions SET kavram = 'u3-temel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s03c';
UPDATE questions SET kavram = 'u3-turev', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s03d';
UPDATE questions SET kavram = 'u3-turev', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s03e';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s04';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s05a';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s05b';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s05c';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s06a';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s06b';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s07';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s08a';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s08b';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s08c';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s09a';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s09b';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s10a';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s10b';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s10c';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s11a';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s11b';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s12a';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s12b';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s12c';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s12d';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s13';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s14a';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u3-s14b';
UPDATE questions SET kavram = 'u3-temel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t01';
UPDATE questions SET kavram = 'u3-temel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t02';
UPDATE questions SET kavram = 'u3-temel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t03';
UPDATE questions SET kavram = 'u3-temel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t04';
UPDATE questions SET kavram = 'u3-turev', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t05';
UPDATE questions SET kavram = 'u3-turev', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t06';
UPDATE questions SET kavram = 'u3-turev', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t07';
UPDATE questions SET kavram = 'u3-turev', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t08';
UPDATE questions SET kavram = 'u3-grafik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t09';
UPDATE questions SET kavram = 'u3-grafik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t10';
UPDATE questions SET kavram = 'u3-grafik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t11';
UPDATE questions SET kavram = 'u3-grafik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t12';
UPDATE questions SET kavram = 'u3-grafik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t13';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t14';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t15';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t16';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t17';
UPDATE questions SET kavram = 'u3-sabit-ivme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t18';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t19';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t20';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t21';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t22';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t23';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t24';
UPDATE questions SET kavram = 'u3-serbest', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u3-t25';
UPDATE questions SET kavram = 'u4-vektorel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s01a';
UPDATE questions SET kavram = 'u4-vektorel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s01b';
UPDATE questions SET kavram = 'u4-vektorel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s01c';
UPDATE questions SET kavram = 'u4-vektorel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s02a';
UPDATE questions SET kavram = 'u4-vektorel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s02b';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s03';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s04a';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s04b';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s04c';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s05';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s06a';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s06b';
UPDATE questions SET kavram = 'u4-yatay', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s07';
UPDATE questions SET kavram = 'u4-yatay', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s08a';
UPDATE questions SET kavram = 'u4-yatay', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s08b';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s09a';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s09b';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s10';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s11a';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s11b';
UPDATE questions SET kavram = 'u4-bagil', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s12a';
UPDATE questions SET kavram = 'u4-bagil', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s12b';
UPDATE questions SET kavram = 'u4-bagil', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s12c';
UPDATE questions SET kavram = 'u4-bagil', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u4-s13';
UPDATE questions SET kavram = 'u4-vektorel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t01';
UPDATE questions SET kavram = 'u4-vektorel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t02';
UPDATE questions SET kavram = 'u4-vektorel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t03';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t04';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t05';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t06';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t07';
UPDATE questions SET kavram = 'u4-egik', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t08';
UPDATE questions SET kavram = 'u4-yatay', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t09';
UPDATE questions SET kavram = 'u4-yatay', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t10';
UPDATE questions SET kavram = 'u4-yatay', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t11';
UPDATE questions SET kavram = 'u4-yatay', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t12';
UPDATE questions SET kavram = 'u4-dairesel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t13';
UPDATE questions SET kavram = 'u4-dairesel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t14';
UPDATE questions SET kavram = 'u4-dairesel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t15';
UPDATE questions SET kavram = 'u4-dairesel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t16';
UPDATE questions SET kavram = 'u4-dairesel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t17';
UPDATE questions SET kavram = 'u4-bagil', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t18';
UPDATE questions SET kavram = 'u4-bagil', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t19';
UPDATE questions SET kavram = 'u4-bagil', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u4-t20';
UPDATE questions SET kavram = 'u5-ikinci', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s01';
UPDATE questions SET kavram = 'u5-denge', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s02';
UPDATE questions SET kavram = 'u5-ikinci', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s03a';
UPDATE questions SET kavram = 'u5-ikinci', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s03b';
UPDATE questions SET kavram = 'u5-ikinci', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s04a';
UPDATE questions SET kavram = 'u5-ikinci', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s04b';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s05';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s06a';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s06b';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s07';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s08';
UPDATE questions SET kavram = 'u5-bagli', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s09';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s10';
UPDATE questions SET kavram = 'u5-bagli', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s11';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s12';
UPDATE questions SET kavram = 'u5-bagli', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s13a';
UPDATE questions SET kavram = 'u5-bagli', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s13b';
UPDATE questions SET kavram = 'u5-bagli', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s14';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s15';
UPDATE questions SET kavram = 'u5-bagli', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s16';
UPDATE questions SET kavram = 'u5-dairesel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s17';
UPDATE questions SET kavram = 'u5-dairesel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s18a';
UPDATE questions SET kavram = 'u5-dairesel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s18b';
UPDATE questions SET kavram = 'u5-dairesel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s19';
UPDATE questions SET kavram = 'u5-dairesel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s20';
UPDATE questions SET kavram = 'u5-dairesel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s21a';
UPDATE questions SET kavram = 'u5-dairesel', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s21b';
UPDATE questions SET kavram = 'u5-denge', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s22';
UPDATE questions SET kavram = 'u5-yasalar', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s23a';
UPDATE questions SET kavram = 'u5-yasalar', yedek = 0, etiketler = 'sunu' WHERE id = 'fz-u5-s23b';
UPDATE questions SET kavram = 'u5-kavram', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t01';
UPDATE questions SET kavram = 'u5-kavram', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t02';
UPDATE questions SET kavram = 'u5-kavram', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t03';
UPDATE questions SET kavram = 'u5-kavram', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t04';
UPDATE questions SET kavram = 'u5-yasalar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t05';
UPDATE questions SET kavram = 'u5-yasalar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t06';
UPDATE questions SET kavram = 'u5-yasalar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t07';
UPDATE questions SET kavram = 'u5-yasalar', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t08';
UPDATE questions SET kavram = 'u5-denge', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t09';
UPDATE questions SET kavram = 'u5-denge', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t10';
UPDATE questions SET kavram = 'u5-ikinci', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t11';
UPDATE questions SET kavram = 'u5-ikinci', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t12';
UPDATE questions SET kavram = 'u5-ikinci', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t13';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t14';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t15';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t16';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t17';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t18';
UPDATE questions SET kavram = 'u5-surtunme', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t19';
UPDATE questions SET kavram = 'u5-bagli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t20';
UPDATE questions SET kavram = 'u5-bagli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t21';
UPDATE questions SET kavram = 'u5-bagli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t22';
UPDATE questions SET kavram = 'u5-bagli', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t23';
UPDATE questions SET kavram = 'u5-dairesel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t24';
UPDATE questions SET kavram = 'u5-dairesel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t25';
UPDATE questions SET kavram = 'u5-dairesel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t26';
UPDATE questions SET kavram = 'u5-dairesel', yedek = 0, etiketler = 'turetilmis' WHERE id = 'fz-u5-t27';
