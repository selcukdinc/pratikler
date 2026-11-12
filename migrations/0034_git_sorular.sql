-- Bu dosya scripts/sorular-sql.ts ile icerik/git/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u1', 'git', 'Sürüm Kontrolü Neden Var?', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u2', 'git', 'Kurulum ve Terminal', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u3', 'git', 'İlk Depo ve Üç Alan', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u4', 'git', 'Geçmişe Bakmak', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u5', 'git', 'GitHub''a İlk Adım', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u6', 'git', 'Dallar', 6, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u7', 'git', 'Çakışmalar', 7, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u8', 'git', 'GitHub''da Birlikte Çalışmak', 8, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u9', 'git', 'Geri Almak', 9, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u10', 'git', 'Uzak Depolar Derinlemesine', 10, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u11', 'git', 'Rebase', 11, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u12', 'git', 'Takım Akışları', 12, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u13', 'git', 'Korumalar ve Otomasyon', 13, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u14', 'git', 'Gizli Anahtarlar ve Depo Güvenliği', 14, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u15', 'git', 'GitLab', 15, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u16', 'git', 'İleri Araçlar', 16, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u17', 'git', 'Git''in İçi', 17, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, practice_id, title, week, sort) VALUES ('gt-u18', 'git', 'Geçmişi Onarmak ve Kurtarma', 18, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-tanim', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Sürüm kontrol sisteminin temel görevi aşağıdakilerden hangisidir?', '{"choices":["Dosyalardaki değişiklikleri zaman içinde kaydedip eski hallere dönmeyi sağlamak","Yazılan kodu daha hızlı çalışacak biçimde derleyip paketlemek","Koddaki yazım ve mantık hatalarını otomatik olarak bulup düzeltmek","Projeyi internette yayınlanacak bir web sitesine çevirmek"]}', '{"index":0}', 'Sürüm kontrol sistemi bir projedeki dosyaların **değişiklik geçmişini** tutar: kim, neyi, ne zaman ve neden değiştirdi; gerektiğinde eski bir hale dönülebilir. Derleme, yazım denetimi ya da yayınlama başka araçların işidir.', 1, '1. ünite · Sürüm kontrolünün çözdüğü sorunlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-dosya-adi-kaosu', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Bir öğrencinin proje klasöründe şu dosyalar var: `rapor.docx`, `rapor_son.docx`, `rapor_son_v2.docx`, `rapor_GERCEK_son.docx`. Bu durum hangi sorunu en iyi anlatır?', '{"choices":["Hangi kopyanın güncel olduğu ve aralarındaki fark bilinmiyor","Aynı belgenin kopyaları diskte gereksiz yer kaplıyor","Dosyalar farklı programlarla açıldığı için bozulmuş","Dosya adlarında Türkçe karakter kullanılmamış"]}', '{"index":0}', 'Elle kopyalayarak sürüm tutmak, **hangisinin son hal olduğunu** ve **aralarındaki farkı** belirsiz bırakır. Sürüm kontrolünde tek bir dosya vardır; geçmişi ve her değişikliğin açıklaması Git''in içinde durur.', 1, '1. ünite · Sürüm kontrolünün çözdüğü sorunlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-kazanimlar', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi sürüm kontrolü kullanmanın sağladığı bir kazanım **değildir**?', '{"choices":["Kodun hatasız olmasını garanti etmek","Bir hatanın hangi değişiklikle geldiğini bulabilmek","Birden çok kişinin aynı proje üzerinde düzenli çalışabilmesi","Bozulan bir dosyayı önceki çalışan haline döndürebilmek"]}', '{"index":0}', 'Sürüm kontrolü hataları bulmayı ve geri almayı kolaylaştırır ama **kodun doğruluğunu garanti etmez**; bunun için test yazılır.', 1, '1. ünite · Sürüm kontrolünün çözdüğü sorunlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-yalniz-calisan', 'git', 'gt-u1', 1, 'tf', 'derived', 'Sürüm kontrolü yalnızca kalabalık ekipler için değil, tek başına çalışan biri için de yararlıdır.', '{}', '{"value":true}', 'Doğru. Tek başına çalışan da yaptığı denemeleri geri almak, eski bir hale bakmak ya da işini başka bir bilgisayara güvenle taşımak için Git''ten yararlanır.', 1, '1. ünite · Sürüm kontrolünün çözdüğü sorunlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-yedek-farki', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Ekip arkadaşın "Her akşam proje klasörünü zipleyip buluta yüklüyorum, Git''e ne gerek var?" diyor. Git''in bu yönteme göre en önemli üstünlüğü hangisidir?', '{"choices":["Her değişikliğin kimden, neden geldiğini ve tam farkını göstermesi","Dosyaları sıkıştırarak bulutta daha az yer kaplaması","Bilgisayar kapalıyken de buluta otomatik yedek alabilmesi","Zip dosyalarının virüs taşıyabilmesine karşı koruma sağlaması"]}', '{"index":0}', 'Günlük zip yalnızca o anın kopyasıdır. Git her değişikliği **açıklamasıyla, yazarıyla ve satır satır farkıyla** saklar; iki kişinin işini birleştirmeyi ve hatanın kaynağını bulmayı da sağlar.', 2, '1. ünite · Sürüm kontrolünün çözdüğü sorunlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-kod-disi', 'git', 'gt-u1', 1, 'tf', 'derived', 'Git yalnızca programlama dillerindeki kaynak kod dosyalarını izleyebilir; Markdown belgeleri ya da ayar dosyaları Git ile izlenemez.', '{}', '{"value":true}', 'Yanlış. Git her türlü dosyayı izler. Satır satır fark göstermek en çok **metin** dosyalarında (kod, Markdown, ayar dosyaları, LaTeX) işe yarar; resim ya da büyük ikili dosyalar da saklanabilir ama farkları okunaklı gösterilemez.', 2, '1. ünite · Sürüm kontrolünün çözdüğü sorunlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-git-nedir', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Git en doğru biçimde nasıl tanımlanır?', '{"choices":["Bilgisayarında çalışan, dağıtık bir sürüm kontrol aracı","Kod depolarını barındıran bir web sitesi","Microsoft''un geliştirdiği bir kod editörü","Yalnızca Linux''ta çalışan bir programlama dili"]}', '{"index":0}', '**Git** bir araçtır: bilgisayarına kurulur ve internet olmadan da çalışır. Depoları barındıran web hizmetleri (GitHub, GitLab) Git''in üstüne kurulmuştur.', 1, '1. ünite · Git, GitHub ve GitLab farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-github-nedir', 'git', 'gt-u1', 1, 'mcq', 'derived', 'GitHub ile Git arasındaki ilişki için hangisi doğrudur?', '{"choices":["GitHub, Git depolarını barındıran ve işbirliği araçları sunan bir hizmettir","GitHub, Git''in yeni sürümünün adıdır","Git, GitHub''ın bilgisayara kurulan masaüstü uygulamasıdır","İkisi aynı şeyin farklı adlarıdır"]}', '{"index":0}', 'Git sürüm kontrol aracıdır; **GitHub** ise Git depolarını internette barındıran, üstüne pull request, issue, kod incelemesi ve otomasyon gibi işbirliği araçları ekleyen bir hizmettir.', 1, '1. ünite · Git, GitHub ve GitLab farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-gitsiz-github', 'git', 'gt-u1', 1, 'tf', 'derived', 'Git kullanmak için mutlaka bir GitHub hesabı açmak gerekir.', '{}', '{"value":false}', 'Yanlış. Git kendi başına, yalnızca kendi bilgisayarında da kullanılabilir. GitHub hesabı, depoyu internette paylaşmak ve başkalarıyla çalışmak istediğinde gerekir.', 1, '1. ünite · Git, GitHub ve GitLab farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-gitlab', 'git', 'gt-u1', 1, 'mcq', 'derived', 'GitLab için hangisi doğrudur?', '{"choices":["GitHub''a benzer, Git depolarını barındıran ve kendi sunucuna da kurulabilen bir platformdur","Git''in yerine geçen, Git''le uyumsuz başka bir sürüm kontrol aracıdır","GitHub''ın yalnızca şirketlere satılan sürümünün adıdır","Git komutlarını görsel olarak gösteren bir masaüstü programıdır"]}', '{"index":0}', '**GitLab** da Git depolarını barındıran bir platformdur. Bulut hizmeti olarak kullanılabildiği gibi kurumlar onu **kendi sunucularına** da kurabilir. Altta yine Git çalışır; aynı depo GitHub''dan GitLab''a taşınabilir.', 1, '1. ünite · Git, GitHub ve GitLab farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-hangisi-arac', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Aşağıdaki işlerden hangisi GitHub''a özgü olup Git''in kendi işi **değildir**?', '{"choices":["Pull request açıp kod incelemesi istemek","Commit oluşturmak","Dal açmak","İki dalı birleştirmek"]}', '{"index":0}', 'Commit, dal ve birleştirme Git''in kendi işlemleridir, internet olmadan da yapılır. **Pull request** ve kod incelemesi ise GitHub gibi barındırma hizmetlerinin sunduğu işbirliği özellikleridir (GitLab''da adı merge request).', 2, '1. ünite · Git, GitHub ve GitLab farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-internetsiz', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Uçakta, internet yokken projen üzerinde çalışıyorsun. Hangisini **yapamazsın**?', '{"choices":["Commit''lerini GitHub''daki depoya göndermek","Yeni bir commit oluşturup mesaj yazmak","Projenin eski commit''lerine göz atmak","Yeni bir dal açıp o dala geçmek"]}', '{"index":0}', 'Git bütün geçmişi bilgisayarında tuttuğu için commit, dal ve geçmiş internet olmadan çalışır. Yalnızca **uzak depoyla konuşan** işler (GitHub''a göndermek ya da oradan almak) bağlantı ister.', 1, '1. ünite · Git, GitHub ve GitLab farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-dagitik-tanim', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Git''in "dağıtık" bir sürüm kontrol sistemi olması ne anlama gelir?', '{"choices":["Her geliştiricinin bilgisayarında projenin bütün geçmişini içeren tam bir kopya bulunur","Proje dosyaları farklı sunuculara parça parça bölünerek saklanır","Geçmiş yalnızca merkezdeki sunucuda durur, geliştiriciler son hali indirir","Her dosya ayrı bir depoda tutulur"]}', '{"index":0}', 'Dağıtık sistemde her **clone**, bütün geçmişi içeren tam bir depodur. Merkezi sistemlerde (ör. Subversion) geçmiş sunucudadır ve geliştiricide yalnızca çalışılan kopya bulunur.', 1, '1. ünite · Merkezi ve dağıtık sürüm kontrolü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-sunucu-coktu', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Ekibin depoyu tuttuğu sunucunun diski bozuldu ve bütün veriler gitti. Ekip Git kullanıyorsa en olası sonuç hangisidir?', '{"choices":["Depo, bir geliştiricideki tam kopyadan geri kurulabilir","Projenin bütün geçmişi kalıcı olarak kaybolur","Yalnızca son commit kurtarılabilir, eski geçmiş kaybolur","Sunucu yeniden kurulana kadar kimse commit oluşturamaz"]}', '{"index":0}', 'Dağıtık sistemde her clone bütün geçmişi taşır; sunucudaki depo, güncel bir clone''dan **yeniden kurulabilir**. Merkezi bir sistemde sunucunun kaybı geçmişin kaybı demektir.', 2, '1. ünite · Merkezi ve dağıtık sürüm kontrolü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-merkezi-ornek', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi merkezi bir sürüm kontrol sistemine örnektir?', '{"choices":["Subversion","Git","Mercurial","Fossil"]}', '{"index":0}', '**Subversion** merkezi bir sistemdir: geçmiş sunucudadır, commit için sunucuya bağlanmak gerekir. Git, Mercurial ve Fossil dağıtık sistemlerdir. (Subversion kısaca SVN diye anılır.)', 1, '1. ünite · Merkezi ve dağıtık sürüm kontrolü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-merkezi-commit', 'git', 'gt-u1', 1, 'tf', 'derived', 'Merkezi bir sürüm kontrol sisteminde commit oluşturmak genellikle sunucuya bağlantı gerektirirken Git''te commit tamamen yerel bir işlemdir.', '{}', '{"value":true}', 'Doğru. Git''te commit kendi bilgisayarındaki depoya yazılır; sunucuya göndermek (push) ayrı bir adımdır.', 2, '1. ünite · Merkezi ve dağıtık sürüm kontrolü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-hiz', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Git''te geçmişe bakmak ve dallar arasında geçmek neden genellikle çok hızlıdır?', '{"choices":["Bütün geçmiş yerel diskte olduğu için ağ beklenmez","Git her işlemde sunucudan yalnızca küçük parçalar indirir","Git geçmişin yalnızca son on commit''ini saklar","Git dosyaları bulutta önbelleğe alır"]}', '{"index":0}', 'Git işlemlerinin çoğu **yerel** depoyla yapılır; ağ gecikmesi yoktur. Bu, dağıtık olmasının pratik kazanımlarından biridir.', 1, '1. ünite · Merkezi ve dağıtık sürüm kontrolü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-yaratici', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Git''i 2005 yılında hangi proje için kim geliştirmeye başladı?', '{"choices":["Linus Torvalds, Linux çekirdeğinin geliştirilmesi için","Bill Gates, Windows''un geliştirilmesi için","GitHub''ın kurucuları, kendi web siteleri için","Google, Android''in geliştirilmesi için"]}', '{"index":0}', 'Linux çekirdeği ekibinin kullandığı araç ücretsiz kullanılamaz hale gelince **Linus Torvalds** 2005''te Git''i yazmaya başladı. Kısa süre sonra bakımını Junio Hamano üstlendi.', 1, '1. ünite · Git''in doğuşu ve anlık görüntü yaklaşımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-anlik-goruntu', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Git bir commit''i kavramsal olarak nasıl saklar?', '{"choices":["Projenin o anki bütün dosyalarının anlık görüntüsü olarak","Yalnızca önceki commit''e göre değişen satırların listesi olarak","Yalnızca değişen dosyaların adları olarak","Projenin sıkıştırılmış bir zip arşivi olarak"]}', '{"index":0}', 'Git her commit''i projenin o andaki **anlık görüntüsü** (snapshot) olarak görür. Değişmeyen dosyalar yeniden kopyalanmaz, öncekine bağlanır; bu yüzden anlık görüntüler yer israf etmez.', 2, '1. ünite · Git''in doğuşu ve anlık görüntü yaklaşımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-acik-kaynak', 'git', 'gt-u1', 1, 'tf', 'derived', 'Git ücretsiz ve açık kaynaklı bir yazılımdır.', '{}', '{"value":true}', 'Doğru. Git açık kaynaklıdır (GPLv2 lisansı); kaynak kodu herkese açıktır ve ücretsiz kullanılır.', 1, '1. ünite · Git''in doğuşu ve anlık görüntü yaklaşımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-github-sahibi', 'git', 'gt-u1', 1, 'tf', 'derived', 'Git, Microsoft''a ait bir yazılımdır.', '{}', '{"value":false}', 'Yanlış. **GitHub** 2018''de Microsoft tarafından satın alındı ama **Git** bağımsız, açık kaynaklı bir projedir; hiçbir şirkete ait değildir.', 2, '1. ünite · Git''in doğuşu ve anlık görüntü yaklaşımı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-depo', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Git''te "depo" (repository) neyi ifade eder?', '{"choices":["Dosyaları ve bütün geçmişlerini birlikte tutan yapıyı","Yalnızca projenin GitHub''da duran kopyasını","Bilgisayardaki proje klasörlerinin tamamını","Projenin son halinin yedeğini"]}', '{"index":0}', 'Depo, proje dosyalarıyla birlikte **bütün geçmişi** tutan yapıdır. Bilgisayarındaki depoya yerel depo, GitHub''daki kopyaya uzak depo denir.', 1, '1. ünite · Depo, commit ve geçmiş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-commit', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Commit için en doğru tanım hangisidir?', '{"choices":["Projenin o anki halini mesajıyla geçmişe kaydeden nokta","Değiştirilen dosyaları GitHub''a yüklemek","Bir dosyayı kaydetmek için editörde Ctrl+S''ye basmak","Projeyi başka bir klasöre kopyalamak"]}', '{"index":0}', '**Commit**, projenin o anki halini yazarı, tarihi ve mesajıyla geçmişe kaydeder. Editörde dosyayı kaydetmek commit değildir; GitHub''a göndermek de ayrı bir adımdır (push).', 1, '1. ünite · Depo, commit ve geçmiş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-commit-icerik', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi bir commit''in içinde saklanan bilgilerden **değildir**?', '{"choices":["Commit''i yapanın parolası","Commit mesajı","Yazarın adı ve e-postası","Bir önceki commit''e bağlantı"]}', '{"index":0}', 'Commit; anlık görüntüyü, **yazarın adını ve e-postasını**, tarihi, **mesajı** ve **önceki commit''e** (ebeveyne) bağlantıyı tutar. Parola hiçbir zaman commit''e girmez.', 2, '1. ünite · Depo, commit ve geçmiş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-zincir', 'git', 'gt-u1', 1, 'tf', 'derived', 'Her commit kendinden önceki commit''i gösterdiği için commit''ler birbirine bağlı bir zincir (geçmiş) oluşturur.', '{}', '{"value":true}', 'Doğru. İlk commit dışında her commit en az bir **ebeveyn** commit''i gösterir; Git''in geçmişi bu bağlantılardan oluşan bir yapıdır.', 2, '1. ünite · Depo, commit ve geçmiş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-kaydet-commit', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Arkadaşın editörde dosyayı kaydettiğini, bu yüzden Git''in değişikliği zaten geçmişe aldığını söylüyor. Ne dersin?', '{"choices":["Dosyayı kaydetmek yetmez; değişikliği geçmişe almak için commit oluşturmak gerekir","Haklı, Git kaydedilen her dosyayı otomatik olarak geçmişe ekler","Haklı ama yalnızca dosya GitHub''da açıksa","Git yalnızca bilgisayar kapanırken geçmişi günceller"]}', '{"index":0}', 'Git hiçbir değişikliği kendiliğinden geçmişe almaz. Değişikliği seçip (`git add`) **commit** oluşturduğunda geçmişe girer. Bu, neyin ne zaman kaydedileceğine senin karar vermeni sağlar.', 1, '1. ünite · Depo, commit ve geçmiş', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-eposta-word', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Üç kişi aynı raporu e-postayla birbirine gönderip düzenliyor. Ayşe ile Mert aynı gün farklı bölümleri değiştirince birinin değişiklikleri kayboldu. Sürüm kontrolü bu sorunu nasıl çözer?', '{"choices":["İki kişinin değişikliklerini birleştirir, aynı yere dokunulduysa uyarır","Aynı anda yalnızca bir kişinin dosyayı açmasına izin verir","Son kaydedilen dosyayı her zaman doğru kabul eder","Değişiklikleri otomatik olarak e-postayla herkese gönderir"]}', '{"index":0}', 'Git iki kişinin ayrı ayrı yaptığı değişiklikleri **birleştirir** (merge). Aynı satırlara dokunulmuşsa sessizce birini seçmez, **çakışma** bildirir ve kararı sana bırakır (7. ünite).', 2, '1. ünite · Sürüm kontrolünün çözdüğü sorunlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-barindirma-degil', 'git', 'gt-u1', 1, 'mcq', 'derived', 'Aşağıdakilerden hangisi Git depolarını barındıran bir hizmet **değildir**?', '{"choices":["Visual Studio Code","GitHub","GitLab","Bitbucket"]}', '{"index":0}', 'GitHub, GitLab ve Bitbucket Git depolarını barındıran hizmetlerdir. **Visual Studio Code** bir kod editörüdür; Git''le çalışabilir ama depo barındırmaz.', 1, '1. ünite · Git, GitHub ve GitLab farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u1-yalniz-acik-kaynak', 'git', 'gt-u1', 1, 'tf', 'derived', 'GitHub''da yalnızca herkese açık, açık kaynaklı projeler barındırılabilir.', '{}', '{"value":false}', 'Yanlış. GitHub''da private depolar da açılabilir; şirketler kapalı kaynak projelerini de GitHub''da tutar.', 1, '1. ünite · Git, GitHub ve GitLab farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-surum-komut', 'git', 'gt-u2', 2, 'fill', 'derived', 'Git''in bilgisayarında kurulu olup olmadığını ve sürümünü öğrenmek için terminale ne yazarsın?', '{"blanks":1}', '{"blanks":[["git --version","git version"]]}', '`git --version` kurulu Git''in sürümünü yazar (ör. `git version 2.47.0`). Komut bulunamazsa Git kurulu değildir ya da PATH''e eklenmemiştir.', 1, '2. ünite · Git''i kurmak ve sürümünü denetlemek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-bulunamadi', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Windows''ta Git''i yeni kurdun ama açık olan terminale `git --version` yazınca şu çıktıyı aldın:

```
''git'' is not recognized as an internal or external command
```

İlk denemen gereken şey hangisidir?', '{"choices":["Terminali kapatıp yeniden açmak, sonra komutu tekrar denemek","Bilgisayarı biçimlendirip Git''i yeniden kurmak","GitHub''a giriş yapmak","Proje klasörünü silmek"]}', '{"index":0}', 'Kurulum PATH değişkenini günceller ama **önceden açık olan terminal** eski PATH''i kullanır. Terminali yeniden açmak çoğu zaman yeter; yetmezse kurulumda Git''in PATH''e eklendiği denetlenir.', 1, '2. ünite · Git''i kurmak ve sürümünü denetlemek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-macos', 'git', 'gt-u2', 2, 'mcq', 'derived', 'macOS''ta Git''i kurmanın yaygın yollarından biri hangisidir?', '{"choices":["Xcode komut satırı araçlarını ya da Homebrew''u kullanmak","App Store''dan GitHub uygulamasını indirmek","Terminale \"install git\" yazmak","Git yalnızca Windows ve Linux''ta çalışır"]}', '{"index":0}', 'macOS''ta Git, **Xcode komut satırı araçlarıyla** (`xcode-select --install`) ya da **Homebrew** ile (`brew install git`) kurulur. Linux''ta dağıtımın paket yöneticisi (`apt`, `dnf`), Windows''ta "Git for Windows" kullanılır.', 2, '2. ünite · Git''i kurmak ve sürümünü denetlemek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-git-bash', 'git', 'gt-u2', 2, 'tf', 'derived', 'Git for Windows ile gelen Git Bash, Windows''ta Linux''takine benzer bir terminal (ls, cd, pwd gibi komutlar) sunar.', '{}', '{"value":true}', 'Doğru. Git Bash, Windows''ta Git komutlarının yanında `ls`, `pwd` gibi Unix kabuk komutlarını da kullanmayı sağlar. Bu sitedeki örnekler de bu kabuk tarzındadır.', 2, '2. ünite · Git''i kurmak ve sürümünü denetlemek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-ad-komut', 'git', 'gt-u2', 2, 'fill', 'derived', 'Bütün depolarında kullanılmak üzere adını "Ayse Yilmaz" olarak ayarlayan komutu yaz.', '{"blanks":1}', '{"blanks":[["git config --global user.name \"Ayse Yilmaz\"","git config --global user.name Ayse Yilmaz"]]}', '`git config --global user.name "Ayse Yilmaz"` adını kullanıcı düzeyinde kaydeder. Ad boşluk içerdiği için tırnak içinde yazılır. E-posta için `user.email` kullanılır.', 1, '2. ünite · git config: kimlik ve ayar düzeyleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-neden-kimlik', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Git''te `user.name` ve `user.email` ayarları ne işe yarar?', '{"choices":["Oluşturduğun her commit''e yazar bilgisi olarak işlenir","GitHub hesabına giriş yapmak için parola yerine kullanılır","Git''i yükseltirken lisans anahtarı olarak kullanılır","Yalnızca hata raporlarını göndermek için kullanılır"]}', '{"index":0}', 'Bu iki ayar her commit''e **yazar** olarak yazılır. Bunlar kimlik doğrulama değildir: GitHub''a giriş için parola, token ya da SSH anahtarı gerekir. Yine de GitHub''daki e-postanla aynı olursa commit''lerin profiline bağlanır.', 1, '2. ünite · git config: kimlik ve ayar düzeyleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-kimlik-yok', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Yeni bir bilgisayarda ilk commit''ini oluşturmaya çalışınca şu mesajı aldın:

```
Author identity unknown
*** Please tell me who you are.
```

Ne yaparsın?', '{"choices":["`git config --global user.name` ve `user.email` ile adını ve e-postanı ayarlarım","GitHub''dan çıkış yapıp yeniden giriş yaparım","Depoyu silip `git init` ile yeniden oluştururum","Commit yerine dosyaları doğrudan GitHub''a yüklerim"]}', '{"index":0}', 'Git commit''e yazacağı kişiyi bilmiyor. Adını ve e-postanı `git config` ile ayarladıktan sonra commit çalışır; depoyu silmeye gerek yoktur.', 1, '2. ünite · git config: kimlik ve ayar düzeyleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-duzeyler', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Aynı ayar hem `--global` hem de bir deponun içinde `--local` olarak farklı değerlerle verilmişse o depoda hangisi geçerli olur?', '{"choices":["Depo düzeyindeki değer","Kullanıcı düzeyindeki değer","Sistem düzeyindeki değer","Git hata verir ve iki değeri de yok sayar"]}', '{"index":0}', 'Git ayarları üç düzeyde okunur: sistem (`--system`), kullanıcı (`--global`) ve depo (`--local`). **Daha dar olan kazanır**: depodaki ayar kullanıcı ayarının üstüne yazılır.', 2, '2. ünite · git config: kimlik ve ayar düzeyleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-is-eposta', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Kişisel projelerinde kişisel e-postanı, yalnızca iş deposunda şirket e-postanı kullanmak istiyorsun. En uygun yol hangisi?', '{"choices":["Global ayarda kişisel e-postayı bırakıp iş deposunun içinde `--local` ile şirket e-postasını ayarlamak","Her commit''ten önce global e-postayı değiştirip sonra geri almak","İş için ayrı bir bilgisayar almak","Şirket deposunda e-posta ayarını hiç yapmamak"]}', '{"index":0}', 'Depo içinde `git config user.email ...` (ya da `--local`) yalnız o depoyu etkiler ve global ayarın önüne geçer. Böylece her commit''te ayar değiştirmek gerekmez.', 2, '2. ünite · git config: kimlik ve ayar düzeyleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-liste', 'git', 'gt-u2', 2, 'fill', 'derived', 'Geçerli bütün Git ayarlarını listeleyen komutu yaz.', '{"blanks":1}', '{"blanks":[["git config --list","git config -l"]]}', '`git config --list` (kısaca `-l`) okunan bütün ayarları listeler. Her ayarın hangi dosyadan geldiğini görmek için `--show-origin` eklenebilir.', 1, '2. ünite · git config: kimlik ve ayar düzeyleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-global-dosya', 'git', 'gt-u2', 2, 'tf', 'derived', '`--global` ile yapılan ayarlar kullanıcının ev klasöründeki `~/.gitconfig` dosyasına yazılır.', '{}', '{"value":true}', 'Doğru. Kullanıcı düzeyindeki ayarlar ev klasöründeki `.gitconfig` dosyasında, depo ayarları ise deponun `.git/config` dosyasında durur.', 3, '2. ünite · git config: kimlik ve ayar düzeyleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-varsayilan-dal', 'git', 'gt-u2', 2, 'mcq', 'derived', '`git init` ile açılan yeni depolarda ilk dalın adının `main` olmasını sağlayan ayar hangisidir?', '{"choices":["`init.defaultBranch`","`core.mainBranch`","`user.branch`","`remote.origin.branch`"]}', '{"index":0}', '`git config --global init.defaultBranch main` ayarı yeni depolarda ilk dalın adını belirler. GitHub''da açılan yeni depoların varsayılan dalı da `main`''dir.', 2, '2. ünite · git config: kimlik ve ayar düzeyleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-pwd', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Terminalde şu an hangi klasörde olduğunu gösteren komut hangisidir?', '{"choices":["`pwd`","`ls`","`cd`","`mkdir`"]}', '{"index":0}', '`pwd` (print working directory) bulunduğun klasörün tam yolunu yazar. `ls` klasördekileri listeler, `cd` klasör değiştirir, `mkdir` yeni klasör açar.', 1, '2. ünite · Terminal temelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-ls', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Bulunduğun klasördeki dosya ve klasörleri listeleyen komut hangisidir?', '{"choices":["`ls`","`pwd`","`cd ..`","`git log`"]}', '{"index":0}', '`ls` klasörün içeriğini listeler. Gizli dosyaları (adı nokta ile başlayan, `.git` gibi) görmek için `ls -a` kullanılır.', 1, '2. ünite · Terminal temelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-cd-ust', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Terminalde bir üst klasöre çıkmak için hangi komut kullanılır?', '{"choices":["`cd ..`","`cd /`","`cd -up`","`ls ..`"]}', '{"index":0}', '`..` bir üst klasör demektir: `cd ..` bir üst klasöre çıkar. `cd /` ise dosya sisteminin köküne gider.', 1, '2. ünite · Terminal temelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-mkdir', 'git', 'gt-u2', 2, 'fill', 'derived', 'Bulunduğun yerde `proje` adında yeni bir klasör açan komutu yaz.', '{"blanks":1}', '{"blanks":[["mkdir proje"]]}', '`mkdir proje` (make directory) yeni bir klasör açar. İçine girmek için `cd proje` yazılır.', 1, '2. ünite · Terminal temelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-gizli-git', 'git', 'gt-u2', 2, 'mcq', 'derived', '`git init` yaptığın klasörde `ls` yazınca `.git` klasörünü göremiyorsun. Neden?', '{"choices":["Adı nokta ile başlayan klasörler gizlidir; `ls -a` ile görünür","`git init` başarısız olmuştur, depo oluşmamıştır","`.git` klasörü GitHub''da durur, bilgisayarda değil","`.git` klasörü yalnızca ilk commit''ten sonra oluşur"]}', '{"index":0}', 'Unix tarzı sistemlerde adı **nokta** ile başlayan dosya ve klasörler gizlidir. `ls -a` ile görünür. `.git` klasörü `git init` anında oluşur.', 2, '2. ünite · Terminal temelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-yanlis-klasor', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Ev klasöründeyken (`pwd` çıktısı `/home/ayse`) yanlışlıkla `git init` yazdın. Bunun en önemli sakıncası hangisidir?', '{"choices":["Ev klasörünün tamamı tek bir dev depo gibi görünmeye başlar","Bilgisayardaki bütün dosyalar silinir","GitHub hesabın güvenlik nedeniyle kilitlenir","Hiçbir sakıncası yoktur, Git ev klasörünü yok sayar"]}', '{"index":0}', 'Git, `.git` klasörünün bulunduğu klasörü ve **bütün alt klasörlerini** depo sayar. Ev klasöründe açılan depo her yerde `git status`''u karıştırır. Çözüm, yanlış açılan `.git` klasörünü silmektir; dosyalarına bir şey olmaz.', 2, '2. ünite · Terminal temelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-editor', 'git', 'gt-u2', 2, 'mcq', 'derived', '`git commit` komutunu `-m` olmadan çalıştırınca açılan editörü değiştirmek için hangi ayar kullanılır?', '{"choices":["`core.editor`","`user.editor`","`commit.program`","`init.editor`"]}', '{"index":0}', '`git config --global core.editor "code --wait"` gibi bir ayar, commit mesajı için açılacak editörü belirler. Ayar yoksa çoğu sistemde Vim ya da Nano açılır.', 2, '2. ünite · Editör, satır sonları ve yardım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-vim-cikis', 'git', 'gt-u2', 2, 'mcq', 'derived', '`git commit` yazdın ve tanımadığın bir editör (Vim) açıldı. Mesajını yazdın, şimdi kaydedip çıkmak istiyorsun. Ne yaparsın?', '{"choices":["`Esc`''ye basıp `:wq` yazar ve Enter''a basarım","Terminal penceresini kapatırım","`Ctrl+S` ile kaydederim, commit kendiliğinden oluşur","`git save` yazarım"]}', '{"index":0}', 'Vim''de `Esc` ile komut kipine geçilir, `:wq` kaydedip çıkar. Mesajı boş bırakıp `:q!` ile çıkarsan commit iptal olur. Bir daha karşılaşmamak için `core.editor` ayarlanabilir ya da `-m` ile mesaj komutta verilebilir.', 2, '2. ünite · Editör, satır sonları ve yardım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-satir-sonu', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Windows ve macOS kullanan iki kişinin aynı depoda çalışırken dosyaların her satırı değişmiş gibi görünmesi en çok hangi ayarla ilgilidir?', '{"choices":["`core.autocrlf` (satır sonu dönüşümü)","`user.email`","`init.defaultBranch`","`core.editor`"]}', '{"index":0}', 'Windows satır sonlarını CRLF, macOS ve Linux LF yazar. `core.autocrlf` (ya da depoda bir `.gitattributes` dosyası) satır sonlarının nasıl dönüştürüleceğini belirler; yanlış ayarda her satır değişmiş görünür.', 3, '2. ünite · Editör, satır sonları ve yardım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-yardim', 'git', 'gt-u2', 2, 'fill', 'derived', '`commit` komutunun ayrıntılı yardım sayfasını açan komutu yaz.', '{"blanks":1}', '{"blanks":[["git help commit","git commit --help"]]}', '`git help commit` (ya da `git commit --help`) komutun kılavuz sayfasını açar. Kısa bir seçenek özeti için `git commit -h` kullanılır.', 1, '2. ünite · Editör, satır sonları ve yardım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-eposta-komut', 'git', 'gt-u2', 2, 'fill', 'derived', 'Bütün depolarında kullanılmak üzere e-postanı `ayse@example.com` olarak ayarlayan komutu yaz.', '{"blanks":1}', '{"blanks":[["git config --global user.email ayse@example.com","git config --global user.email \"ayse@example.com\""]]}', '`git config --global user.email ayse@example.com` e-postanı kullanıcı düzeyinde kaydeder. GitHub''daki e-postanla aynı olursa commit''lerin profiline bağlanır.', 1, '2. ünite · git config: kimlik ve ayar düzeyleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-global-tek-depo', 'git', 'gt-u2', 2, 'tf', 'derived', '`git config --global` ile yapılan bir ayar yalnızca o an içinde bulunduğun depoyu etkiler.', '{}', '{"value":false}', 'Yanlış. `--global` ayarı kullanıcının **bütün** depolarında geçerlidir. Yalnızca bir depoyu etkilemek için depo içinde `--local` (ya da seçeneksiz `git config`) kullanılır.', 1, '2. ünite · git config: kimlik ve ayar düzeyleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-bosluklu-klasor', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Terminalde `cd Proje Dosyalarım` yazınca "too many arguments" ya da "no such file or directory" hatası alıyorsun. Klasör gerçekten var. Sorun ne?', '{"choices":["Addaki boşluk adı ikiye böldü, ad tırnakla yazılmalı","Türkçe karakterli klasörlere terminalden hiç girilemez","`cd` komutu yalnızca Git deposu olan klasörlerde çalışır","Önce `git init` yazmak gerekir"]}', '{"index":0}', 'Kabuk boşlukları argüman ayırıcı sayar. `cd "Proje Dosyalarım"` ya da `cd Proje\ Dosyalarım` yazılmalı. Bu yüzden proje klasörlerine boşluksuz ad vermek (`proje-dosyalari`) işleri kolaylaştırır.', 2, '2. ünite · Terminal temelleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u2-kisa-yardim', 'git', 'gt-u2', 2, 'mcq', 'derived', 'Bir Git komutunun seçeneklerinin kısa özetini terminalde gösteren hangisidir?', '{"choices":["`git commit -h`","`git commit --about`","`git info commit`","`git commit -?`"]}', '{"index":0}', '`-h` kısa bir kullanım özeti yazar. Ayrıntılı kılavuz için `git help commit` ya da `git commit --help` kullanılır.', 1, '2. ünite · Editör, satır sonları ve yardım', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-init-komut', 'git', 'gt-u3', 3, 'fill', 'derived', 'Bulunduğun klasörü yeni bir Git deposuna çeviren komutu yaz.', '{"blanks":1}', '{"blanks":[["git init"]]}', '`git init` klasörde gizli bir `.git` klasörü oluşturur; Git geçmişi ve ayarları burada tutar. Dosyaların yerinde kalır, hiçbiri silinmez.', 1, '3. ünite · git init ve .git klasörü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-git-klasoru', 'git', 'gt-u3', 3, 'mcq', 'derived', 'Bir projede `.git` klasörü neyi içerir?', '{"choices":["Deponun bütün geçmişini, dallarını ve ayarlarını","Yalnızca GitHub şifreni ve kullanıcı adını","Projenin derlenmiş, çalışmaya hazır halini","Git programının kendisini ve eklentilerini"]}', '{"index":0}', '`.git` klasörü **deponun kendisidir**: commit''ler, dallar, hazırlık alanı ve depo ayarları burada durur. Bu klasör silinirse dosyalar kalır ama bütün geçmiş kaybolur.', 1, '3. ünite · git init ve .git klasörü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-git-sil', 'git', 'gt-u3', 3, 'mcq', 'derived', 'Bir arkadaşın yer açmak için proje klasöründeki `.git` klasörünü sildi. Projede hiç push yapılmamıştı. Ne olur?', '{"choices":["Dosyaların son hali kalır ama bütün commit geçmişi ve dallar kaybolur","Bütün proje dosyaları da silinir","Hiçbir şey olmaz, Git klasörü bir sonraki komutta yeniden oluşturur","Yalnızca son commit kaybolur"]}', '{"index":0}', 'Geçmiş yalnızca `.git` klasöründedir. Silinince çalışma dizinindeki dosyalar kalır ama geçmiş gider; daha önce bir uzak depoya push edilmemişse geri getirilemez.', 2, '3. ünite · git init ve .git klasörü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-init-tekrar', 'git', 'gt-u3', 3, 'tf', 'derived', '`git init` yalnızca boş bir klasörde çalıştırılabilir; içinde dosya olan klasörde hata verir.', '{}', '{"value":false}', 'Yanlış. `git init` dolu bir klasörde de çalışır; var olan dosyalar izlenmeyen (untracked) dosyalar olarak görünür ve istersen commit''lenir.', 2, '3. ünite · git init ve .git klasörü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-repo-degil', 'git', 'gt-u3', 3, 'mcq', 'derived', 'Terminalde `git status` yazınca şu mesajı aldın:

```
fatal: not a git repository (or any of the parent directories): .git
```

Bu mesaj ne anlatıyor?', '{"choices":["Bulunduğun klasör bir Git deposunun içinde değil","Git bilgisayarında kurulu değil ya da bozuk","GitHub''daki depoya bağlanılamıyor","Depoda henüz hiç commit oluşturulmamış"]}', '{"index":0}', 'Git, bulunduğun klasörde ve üstlerinde `.git` klasörü bulamadı. Ya yanlış klasördesin (`pwd` ile denetle, `cd` ile proje klasörüne geç) ya da depo henüz `git init` ile oluşturulmadı.', 1, '3. ünite · git init ve .git klasörü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-uc-alan', 'git', 'gt-u3', 3, 'mcq', 'derived', 'Git''in yerel olarak kullandığı üç alan hangileridir?', '{"choices":["Çalışma dizini, hazırlık alanı ve depo","Yerel depo, uzak depo ve bulut yedeği","Dal, etiket ve commit geçmişi","Kaynak kod, derleme çıktısı ve testler"]}', '{"index":0}', 'Dosyaları **çalışma dizininde** düzenlersin, commit''e girecekleri `git add` ile **hazırlık alanına** alırsın, `git commit` ile **depoya** (geçmişe) kaydedersin.', 1, '3. ünite · Çalışma dizini, hazırlık alanı ve depo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-staging-amac', 'git', 'gt-u3', 3, 'mcq', 'derived', 'Hazırlık alanının (staging area) varlık nedeni hangisidir?', '{"choices":["Sonraki commit''e girecek değişiklikleri tek tek seçmek","Dosyaları GitHub''a göndermeden önce sıkıştırmak","Silinen dosyaları geri dönüşüm kutusunda tutmak","Commit mesajlarını taslak olarak saklamak"]}', '{"index":0}', 'Hazırlık alanı sayesinde aynı anda yaptığın değişiklikleri **ayrı, anlamlı commit''lere** bölebilirsin: önce hata düzeltmesini, sonra yeni özelliği commit''lersin.', 2, '3. ünite · Çalışma dizini, hazırlık alanı ve depo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-akis-sira', 'git', 'gt-u3', 3, 'mcq', 'derived', 'Yeni bir dosyanın geçmişe girmesi için doğru sıra hangisidir?', '{"choices":["Dosyayı düzenle → `git add` → `git commit`","`git commit` → `git add` → dosyayı düzenle","`git add` → dosyayı düzenle → `git push`","Dosyayı düzenle → `git push` → `git commit`"]}', '{"index":0}', 'Değişiklik önce çalışma dizininde yapılır, `git add` ile hazırlık alanına alınır, `git commit` ile depoya kaydedilir. `git push` ise commit''leri uzak depoya gönderir.', 1, '3. ünite · Çalışma dizini, hazırlık alanı ve depo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-add-sonrasi-degisiklik', 'git', 'gt-u3', 3, 'mcq', 'derived', '`app.js`''yi düzenleyip `git add app.js` yaptın, sonra aynı dosyaya bir satır daha ekledin ve hemen `git commit -m "Düzelt"` yazdın. Commit''te ne olur?', '{"choices":["Yalnızca `git add` anındaki hal commit''e girer; sonra eklenen satır çalışma dizininde kalır","Dosyanın son hali, eklenen satırla birlikte commit''e girer","Git, dosya değiştiği için commit''i reddeder","Commit boş olur"]}', '{"index":0}', '`git add` dosyanın **o anki halini** hazırlık alanına koyar. Sonradan yapılan değişiklik ayrıca `git add` edilmedikçe commit''e girmez; `git status` dosyayı hem "staged" hem "not staged" bölümünde gösterir.', 3, '3. ünite · Çalışma dizini, hazırlık alanı ve depo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-status-komut', 'git', 'gt-u3', 3, 'fill', 'derived', 'Hangi dosyaların değiştiğini, hangilerinin hazırlık alanında olduğunu gösteren komutu yaz.', '{"blanks":1}', '{"blanks":[["git status"]]}', '`git status` çalışma dizini ile hazırlık alanının durumunu özetler. Ne yapacağını bilmediğin her an ilk çalıştıracağın komuttur.', 1, '3. ünite · git status ve dosya durumları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-untracked', 'git', 'gt-u3', 3, 'mcq', 'derived', '`git status` çıktısında "Untracked files" başlığı altında görünen dosya ne demektir?', '{"choices":["Git''in henüz izlemediği yeni bir dosya","Silinmiş ama geçmişte duran bir dosya","GitHub''a gönderilmiş bir dosya","Bozuk olduğu için okunamayan bir dosya"]}', '{"index":0}', '**İzlenmeyen** (untracked) dosya Git''in tanımadığı yeni dosyadır. `git add` ile hazırlık alanına alınınca izlenmeye başlar.', 1, '3. ünite · git status ve dosya durumları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-clean', 'git', 'gt-u3', 3, 'mcq', 'derived', '`git status` şu çıktıyı veriyor: `nothing to commit, working tree clean`. Bu ne demektir?', '{"choices":["Çalışma dizini son commit''le aynı, yeni dosya da yok","Depoda henüz hiç dosya ya da commit yok","Bütün değişiklikler geri alınıp silinmiş","Bütün değişiklikler GitHub''a gönderilmiş"]}', '{"index":0}', 'Çalışma dizini son commit''le aynıdır ve izlenmeyen dosya yoktur. Bu, push edildiği anlamına gelmez; push durumu "Your branch is up to date with ''origin/main''" satırında görünür.', 1, '3. ünite · git status ve dosya durumları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-kisa-cikti', 'git', 'gt-u3', 3, 'mcq', 'derived', '`git status -s` (kısa çıktı) şunu gösteriyor:

```
M  index.html
 M style.css
?? notlar.txt
```

Hangisi doğrudur?', '{"choices":["`index.html` hazırlık alanında, `style.css` değişmiş ama hazırlıkta değil, `notlar.txt` izlenmiyor","Üç dosyanın da hepsi hazırlık alanında","`style.css` hazırlık alanında, `index.html` değişmiş ama hazırlıkta değil, `notlar.txt` silinmiş","`notlar.txt` hazırlık alanında, diğer ikisi izlenmiyor"]}', '{"index":0}', 'Kısa çıktıda **sol sütun hazırlık alanını, sağ sütun çalışma dizinini** gösterir. `M` solda ise değişiklik hazırlıkta, sağda ise yalnızca çalışma dizinindedir. `??` izlenmeyen dosyadır.', 3, '3. ünite · git status ve dosya durumları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-bos-klasor', 'git', 'gt-u3', 3, 'tf', 'derived', 'Git boş klasörleri izlemez; içi boş bir klasör `git status`''ta görünmez.', '{}', '{"value":true}', 'Doğru. Git dosyaları izler, klasörler yalnızca dosyaların yolu olarak vardır. Boş bir klasörü depoda tutmak için içine genellikle `.gitkeep` adlı boş bir dosya konur (bu bir gelenektir, Git''in özel dosyası değildir).', 3, '3. ünite · git status ve dosya durumları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-add-dosya', 'git', 'gt-u3', 3, 'fill', 'derived', 'Yalnızca `README.md` dosyasını hazırlık alanına alan komutu yaz.', '{"blanks":1}', '{"blanks":[["git add README.md"]]}', '`git add README.md` yalnızca bu dosyanın şu anki halini hazırlık alanına alır. Birden çok dosya boşlukla ayrılarak yazılabilir.', 1, '3. ünite · git add ve hazırlıktan çıkarmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-add-nokta', 'git', 'gt-u3', 3, 'mcq', 'derived', '`git add .` komutu ne yapar?', '{"choices":["Bu klasör ve altındaki bütün değişiklikleri hazırlık alanına alır","Yalnızca adı nokta ile başlayan gizli dosyaları hazırlık alanına alır","Hazırlık alanını boşaltır","Son commit''i geri alır"]}', '{"index":0}', '`.` "bu klasör" demektir. `git add .` bu klasörün altındaki bütün değişiklikleri alır; `.gitignore` ile dışarıda bırakılan dosyalar alınmaz. Neyin eklendiğini görmek için ardından `git status` çalıştırmak iyi bir alışkanlıktır.', 1, '3. ünite · git add ve hazırlıktan çıkarmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-unstage', 'git', 'gt-u3', 3, 'mcq', 'derived', '`git add .` yaptın ve `sifreler.txt` dosyasının da hazırlık alanına girdiğini fark ettin. Henüz commit yapmadın. Dosyayı silmeden hazırlık alanından çıkarmak için ne yaparsın?', '{"choices":["`git restore --staged sifreler.txt`","`rm sifreler.txt`","`git commit -m \"sifreler\"`","`git push --force`"]}', '{"index":0}', '`git restore --staged <dosya>` dosyayı hazırlık alanından çıkarır, çalışma dizinindeki dosyaya dokunmaz. Commit''ten **önce** fark etmek en ucuz kurtuluştur. Dosyanın bir daha eklenmemesi için `.gitignore`''a yazılır.', 1, '3. ünite · git add ve hazırlıktan çıkarmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-add-p', 'git', 'gt-u3', 3, 'mcq', 'derived', 'Bir dosyada iki ayrı iş için değişiklik yaptın ve yalnızca birini commit''lemek istiyorsun. Değişiklikleri parça parça seçmeni sağlayan komut hangisidir?', '{"choices":["`git add -p`","`git add -A`","`git commit -a`","`git add --all`"]}', '{"index":0}', '`git add -p` (patch) değişiklikleri parça parça gösterir ve her biri için "eklensin mi?" diye sorar. Böylece tek dosyadaki değişiklikler ayrı commit''lere bölünebilir.', 3, '3. ünite · git add ve hazırlıktan çıkarmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-add-bos-cikti', 'git', 'gt-u3', 3, 'tf', 'derived', '`git add` komutu başarılı olduğunda genellikle hiçbir çıktı yazmaz; sonucu görmek için `git status` kullanılır.', '{}', '{"value":true}', 'Doğru. Git''in birçok komutu başarıda sessizdir. Neyin hazırlık alanına girdiğini `git status` ya da `git diff --staged` gösterir.', 1, '3. ünite · git add ve hazırlıktan çıkarmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-commit-m', 'git', 'gt-u3', 3, 'fill', 'derived', 'Hazırlık alanındaki değişiklikleri "Ilk surum" mesajıyla commit''leyen komutu yaz.', '{"blanks":1}', '{"blanks":[["git commit -m \"Ilk surum\"","git commit -m \"İlk sürüm\"","git commit -m Ilk surum"]]}', '`git commit -m "mesaj"` hazırlık alanındaki her şeyi verilen mesajla commit''ler. `-m` verilmezse mesaj yazmak için editör açılır.', 1, '3. ünite · git commit', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-commit-a', 'git', 'gt-u3', 3, 'mcq', 'derived', '`git commit -a -m "mesaj"` komutu için hangisi doğrudur?', '{"choices":["İzlenen dosyaların değişikliklerini ekler, yeni dosyaları eklemez","Klasördeki bütün dosyaları, yeni olanlar dahil, otomatik ekler","Yalnızca hazırlık alanındaki dosyaları commit''ler, başka şey eklemez","Bütün dallardaki değişiklikleri aynı anda commit''ler"]}', '{"index":0}', '`-a` yalnızca **zaten izlenen** dosyalardaki değişiklikleri ve silmeleri ekler. Yeni bir dosya önce `git add` ile izlemeye alınmalıdır; bu yüzden `-a` ile yeni dosyalar sessizce dışarıda kalabilir.', 2, '3. ünite · git commit', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-bos-commit', 'git', 'gt-u3', 3, 'mcq', 'derived', 'Dosyalarını düzenledin ve hemen `git commit -m "Güncelle"` yazdın. Git şunu söyledi:

```
no changes added to commit (use "git add" and/or "git commit -a")
```

Ne oldu?', '{"choices":["Hazırlık alanı boş olduğu için commit''lenecek bir şey yok","Commit mesajı çok kısa olduğu için reddedildi","Dosyaların bozuk olduğu için Git onları okuyamadı","Commit oluştu ama GitHub''a gönderilemedi"]}', '{"index":0}', 'Commit yalnızca **hazırlık alanındakini** kaydeder. Önce `git add` ile değişiklikleri seç, sonra commit''le.', 1, '3. ünite · git commit', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-kucuk-commit', 'git', 'gt-u3', 3, 'mcq', 'derived', 'Commit''lerin büyüklüğü için iyi uygulama hangisidir?', '{"choices":["Her commit tek bir mantıklı değişikliği içermeli","Bir haftalık bütün iş tek bir commit''te toplanmalı","Her dosya kaydedişinde ayrı bir commit yapılmalı","Commit sayısı az olsun diye işler ay sonunda commit''lenmeli"]}', '{"index":0}', '**Küçük ve tek amaçlı** commit''ler geçmişi okunur yapar, bir hatayı bulmayı ve tek bir değişikliği geri almayı kolaylaştırır.', 2, '3. ünite · git commit', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-commit-yerel', 'git', 'gt-u3', 3, 'tf', 'derived', '`git commit` komutu değişiklikleri hemen GitHub''daki depoya da gönderir.', '{}', '{"value":false}', 'Yanlış. Commit yalnızca **yerel** depoya yazılır. Uzak depoya göndermek için ayrıca `git push` gerekir.', 1, '3. ünite · git commit', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-restore-staged-komut', 'git', 'gt-u3', 3, 'fill', 'derived', 'Hazırlık alanına aldığın `app.js` dosyasını, değişikliklerini kaybetmeden hazırlık alanından çıkaran komutu yaz.', '{"blanks":1}', '{"blanks":[["git restore --staged app.js","git reset app.js","git reset HEAD app.js","git reset -- app.js"]]}', '`git restore --staged app.js` dosyayı hazırlık alanından çıkarır, çalışma dizinindeki değişikliğe dokunmaz. Eski sürümlerde aynı iş `git reset app.js` ile yapılırdı.', 1, '3. ünite · git add ve hazırlıktan çıkarmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-iki-commit', 'git', 'gt-u3', 3, 'mcq', 'derived', 'Bugün iki ilgisiz iş yaptın: `giris.js`''de bir hatayı düzelttin, `tema.css`''de renkleri değiştirdin. Geçmişin okunur olması için ne yaparsın?', '{"choices":["Önce `giris.js`''yi ekleyip commit''lerim, sonra `tema.css`''yi ekleyip ayrı commit''lerim","`git add .` ile ikisini birlikte \"güncellemeler\" mesajıyla commit''lerim","Değişikliklerden birini silip yalnızca birini commit''lerim","Commit''lemeden önce hafta sonunu beklerim"]}', '{"index":0}', 'Hazırlık alanı tam da bunun için var: ilgisiz değişiklikler **ayrı commit''lere** bölünür. Böylece renk değişikliği geri alınmak istenirse hata düzeltmesi etkilenmez.', 2, '3. ünite · git add ve hazırlıktan çıkarmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-restore-dosya', 'git', 'gt-u3', 3, 'mcq', 'derived', '`ayarlar.js`''de yarım saattir denemeler yaptın, hiçbiri işe yaramadı ve dosyanın son commit''teki haline dönmek istiyorsun. Dosya hazırlık alanında değil. Hangisi işini görür?', '{"choices":["`git restore ayarlar.js`","`git add ayarlar.js`","`git commit ayarlar.js`","`git status ayarlar.js`"]}', '{"index":0}', '`git restore <dosya>` dosyayı hazırlık alanındaki (o da değişmediyse son commit''teki) haline döndürür. **Dikkat:** commit''lenmemiş bu değişiklikler geri getirilemez; emin değilsen önce bir kopyasını al.', 2, '3. ünite · Çalışma dizini, hazırlık alanı ve depo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u3-git-rm', 'git', 'gt-u3', 3, 'tf', 'derived', '`git rm eski.txt` komutu dosyayı diskten siler ve bu silmeyi hazırlık alanına alır; bir sonraki commit''te dosya depodan çıkar.', '{}', '{"value":true}', 'Doğru. `git rm` silme işlemini doğrudan hazırlık alanına koyar. Dosyayı elle silip `git add` yapmak da aynı sonucu verir. Dosya eski commit''lerde durmaya devam eder.', 2, '3. ünite · git commit', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-log-komut', 'git', 'gt-u4', 4, 'fill', 'derived', 'Deponun commit geçmişini listeleyen komutu yaz.', '{"blanks":1}', '{"blanks":[["git log"]]}', '`git log` commit''leri en yeniden eskiye doğru, kimliği, yazarı, tarihi ve mesajıyla listeler.', 1, '4. ünite · git log', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-oneline', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Geçmişi her commit tek satır olacak biçimde kısa gösteren seçenek hangisidir?', '{"choices":["`git log --oneline`","`git log --short`","`git log -1`","`git status -s`"]}', '{"index":0}', '`--oneline` her commit''i kısa kimliği ve mesajının ilk satırıyla tek satırda gösterir. `-1` ise yalnızca son commit''i gösterir.', 1, '4. ünite · git log', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-graph-all', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Bütün dalların geçmişini dallanma ve birleşmeleri çizerek göstermek için hangi komut kullanılır?', '{"choices":["`git log --oneline --graph --all`","`git log --branches-only`","`git show --all`","`git status --graph`"]}', '{"index":0}', '`--graph` geçmişi metin grafiğiyle çizer, `--all` yalnızca bulunduğun dalı değil bütün dalları gösterir. Takımda çalışırken en çok kullanılan görünümlerden biridir.', 2, '4. ünite · git log', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-pager', 'git', 'gt-u4', 4, 'mcq', 'derived', '`git log` yazdın, ekran commit''lerle doldu ve en altta `:` işareti beliriyor; terminal komut kabul etmiyor gibi. Ne yaparsın?', '{"choices":["`q` tuşuna basarak sayfalayıcıdan çıkarım","Terminali kapatırım, Git dondu","`Ctrl+S`''ye basarım","`git stop` yazarım"]}', '{"index":0}', 'Uzun çıktılar bir **sayfalayıcıda** (genellikle `less`) açılır. Boşluk ile sayfa ilerler, `q` ile çıkılır.', 1, '4. ünite · git log', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-yazar-suzgec', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Yalnızca "Mert" adlı kişinin commit''lerini listelemek için hangisi kullanılır?', '{"choices":["`git log --author=Mert`","`git log --user Mert`","`git show Mert`","`git blame Mert`"]}', '{"index":0}', '`--author` yazar adına ya da e-postasına göre süzer. Mesaja göre süzmek için `--grep`, belirli bir dosyanın geçmişi için `git log -- dosya` kullanılır.', 2, '4. ünite · git log', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-log-dosya', 'git', 'gt-u4', 4, 'tf', 'derived', '`git log -p` her commit''in yanında o commit''te yapılan değişiklikleri (farkı) de gösterir.', '{}', '{"value":true}', 'Doğru. `-p` (patch) her commit''in farkını da yazar. Yalnızca hangi dosyalarda kaç satır değiştiğini görmek için `--stat` kullanılır.', 2, '4. ünite · git log', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-diff-varsayilan', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Hiçbir seçenek vermeden çalıştırılan `git diff` neyi neyle karşılaştırır?', '{"choices":["Çalışma dizinini hazırlık alanıyla","Hazırlık alanını son commit''le","Yerel depoyu GitHub''daki depoyla","Son commit''i bir önceki commit''le"]}', '{"index":0}', 'Yalın `git diff` yalnızca **henüz `git add` edilmemiş** değişiklikleri gösterir. Hazırlık alanındakileri görmek için `git diff --staged` kullanılır.', 2, '4. ünite · git diff', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-diff-staged', 'git', 'gt-u4', 4, 'fill', 'derived', 'Hazırlık alanına aldığın, yani bir sonraki commit''e girecek değişiklikleri gösteren komutu yaz.', '{"blanks":1}', '{"blanks":[["git diff --staged","git diff --cached"]]}', '`git diff --staged` (eşdeğeri `--cached`) hazırlık alanını son commit''le karşılaştırır. Commit''ten önce son bir kez bakmak için idealdir.', 1, '4. ünite · git diff', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-diff-bos', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Dosyayı değiştirip `git add` yaptın. Şimdi `git diff` yazınca hiçbir şey görünmüyor. Neden?', '{"choices":["Değişiklik hazırlık alanına geçtiği için yalın `git diff` onu göstermez; `git diff --staged` gösterir","`git add` değişikliği sildi","Değişiklik otomatik olarak commit''lendi","Dosya `.gitignore` içinde olduğu için fark gösterilmez"]}', '{"index":0}', 'Yalın `git diff` çalışma dizini ile hazırlık alanı arasındaki farkı gösterir. Değişiklik hazırlığa alınınca bu fark sıfırlanır; `git diff --staged` onu gösterir.', 2, '4. ünite · git diff', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-diff-isaret', 'git', 'gt-u4', 4, 'mcq', 'derived', '`git diff` çıktısında satırın başındaki `+` ve `-` işaretleri ne anlatır?', '{"choices":["`+` eklenen, `-` silinen satırı gösterir","`+` hatasız, `-` hatalı satırı gösterir","`+` yeni dosyayı, `-` silinen dosyayı gösterir","`+` senin, `-` ekip arkadaşının satırını gösterir"]}', '{"index":0}', 'Farkta `+` ile başlayan satırlar eklenmiş, `-` ile başlayanlar silinmiştir. Değiştirilen bir satır, eski halinin silinmesi ve yeni halinin eklenmesi olarak görünür.', 1, '4. ünite · git diff', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-diff-head', 'git', 'gt-u4', 4, 'tf', 'derived', '`git diff HEAD` hem hazırlık alanındaki hem de henüz eklenmemiş bütün değişiklikleri son commit''e göre gösterir.', '{}', '{"value":true}', 'Doğru. `HEAD` son commit''i gösterir; `git diff HEAD` çalışma dizinini doğrudan son commit''le karşılaştırır, hazırlık alanında olup olmamaya bakmaz.', 3, '4. ünite · git diff', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-hash-nedir', 'git', 'gt-u4', 4, 'mcq', 'derived', '`git log` çıktısında her commit''in başında görünen `a1b2c3d...` gibi uzun dizi nedir?', '{"choices":["Commit''in içeriğinden hesaplanan kimliği","Commit''in oluşturulduğu tarihin kodlanmış halini","Commit''i yapanın GitHub kullanıcı numarasını","Commit''in kaçıncı commit olduğunu gösteren sıra numarasını"]}', '{"index":0}', 'Her commit''in kimliği, içeriğinden (anlık görüntü, yazar, tarih, mesaj, ebeveyn) hesaplanan bir **hash**''tir (varsayılan olarak 40 karakterlik SHA-1). Sıra numarası değildir.', 1, '4. ünite · git show ve commit kimliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-kisa-hash', 'git', 'gt-u4', 4, 'tf', 'derived', 'Komutlarda bir commit''i göstermek için hash''in tamamını yazmak gerekmez; depoda tek olduğu sürece ilk birkaç karakteri (ör. 7 karakter) yeter.', '{}', '{"value":true}', 'Doğru. `git show a1b2c3d` gibi kısa kimlikler, depoda başka bir nesneyle karışmadığı sürece kabul edilir.', 1, '4. ünite · git show ve commit kimliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-show', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Belirli bir commit''in mesajını ve yaptığı değişiklikleri görmek için hangisi kullanılır?', '{"choices":["`git show <hash>`","`git status <hash>`","`git add <hash>`","`git init <hash>`"]}', '{"index":0}', '`git show <hash>` commit''in bilgilerini ve farkını gösterir. Kimlik verilmezse son commit''i (`HEAD`) gösterir.', 1, '4. ünite · git show ve commit kimliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-head', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Git''te `HEAD` neyi gösterir?', '{"choices":["Şu an üzerinde bulunduğun commit''i","Deponun en eski, ilk commit''ini","GitHub''daki varsayılan ana dalı","Değişen dosyanın ilk satırını"]}', '{"index":0}', '`HEAD` "şu an buradayım" işaretidir; genellikle bulunduğun dalı, dolayısıyla o dalın son commit''ini gösterir. Bir sonraki commit HEAD''in üstüne eklenir.', 2, '4. ünite · git show ve commit kimliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-hash-degisir', 'git', 'gt-u4', 4, 'tf', 'derived', 'Bir commit''in mesajında tek bir harf bile değiştirilirse o commit''in hash''i de değişir.', '{}', '{"value":true}', 'Doğru. Hash commit''in bütün içeriğinden hesaplanır; mesaj, yazar ya da tarihteki en küçük değişiklik yeni bir hash üretir. Bu, geçmişin sessizce değiştirilememesini sağlar.', 3, '4. ünite · git show ve commit kimliği', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-iyi-mesaj', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Aşağıdakilerden hangisi en iyi commit mesajıdır?', '{"choices":["Boş e-postayla girişi engelle","düzeltmeler","son hali kesin bu","Bugün yaptığım her şey"]}', '{"index":0}', 'İyi bir mesaj **ne yapıldığını** tek bakışta söyler. "düzeltmeler" ya da "son hali kesin bu" aylar sonra geçmişte arama yaparken hiçbir şey anlatmaz.', 1, '4. ünite · İyi commit mesajı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-kalip', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Yaygın commit mesajı alışkanlığına göre hangisi doğrudur?', '{"choices":["İlk satır kısa bir özettir, ayrıntı boş satırdan sonra gelir","Mesaj tek satır olmalı ve en az 200 karakter içermeli","Mesajın ilk satırı değiştirilen dosyaların listesi olmalı","Mesajda neden değil, yalnızca hangi dosyanın değiştiği yazılmalı"]}', '{"index":0}', 'Kısa bir **özet satırı**, ardından boş satır ve gerekiyorsa **neden** yapıldığını anlatan gövde yaygın bir alışkanlıktır. `git log --oneline` ve GitHub arayüzü yalnızca ilk satırı gösterir. Hangi dosyaların değiştiği zaten commit''in içinde yazılıdır.', 2, '4. ünite · İyi commit mesajı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-emir-kipi', 'git', 'gt-u4', 4, 'tf', 'derived', 'Birçok projede commit mesajının özet satırı emir kipiyle yazılır ("Giriş hatasını düzelt" gibi).', '{}', '{"value":true}', 'Doğru. Git''in kendi ürettiği mesajlar da ("Merge branch...", "Revert...") bu biçimdedir. Bazı ekipler "feat:", "fix:" gibi önekler (Conventional Commits) de kullanır; önemli olan ekip içinde tutarlılıktır.', 2, '4. ünite · İyi commit mesajı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-mesaj-senaryo', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Altı ay sonra bir hatanın hangi commit''le geldiğini arıyorsun. Geçmişte "update", "fix", "son hali" gibi mesajlar var. Bu durum en çok neyi zorlaştırır?', '{"choices":["Hangi commit''in ne amaçla yapıldığını anlamayı","Commit''leri GitHub''a sorunsuz göndermeyi","Yeni commit''ler oluşturmayı","Depoyu başka bir bilgisayara clone''lamayı"]}', '{"index":0}', 'Kötü mesajlar geçmişi **okunmaz** yapar; her commit''i açıp farkını incelemek zorunda kalırsın. Mesaj yazmak için harcanan birkaç saniye sonradan saatler kazandırır.', 2, '4. ünite · İyi commit mesajı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-amac', 'git', 'gt-u4', 4, 'mcq', 'derived', '`.gitignore` dosyasının görevi nedir?', '{"choices":["Git''in hangi dosyaları izlemeyip yok sayacağını belirtmek","Silinen dosyaların listesini tutmak","Commit''lerde hangi ekip üyelerinin yok sayılacağını belirtmek","GitHub''da gizli kalacak depoları listelemek"]}', '{"index":0}', '`.gitignore` içine yazılan kalıplara uyan izlenmeyen dosyalar `git status`''ta görünmez ve `git add .` ile eklenmez: derleme çıktıları, `node_modules/`, kişisel ayar ve gizli bilgi dosyaları gibi.', 1, '4. ünite · .gitignore', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-kalip-log', 'git', 'gt-u4', 4, 'mcq', 'derived', '`.gitignore` içine yazılan `*.log` satırı neyi yok saydırır?', '{"choices":["Uzantısı .log olan bütün dosyaları","Adı tam olarak \"*.log\" olan tek bir dosyayı","Yalnızca kök klasördeki log klasörünü","Bütün dosyaları"]}', '{"index":0}', '`*` herhangi bir karakter dizisi demektir; `*.log` hangi klasörde olursa olsun uzantısı `.log` olan dosyalara uyar.', 1, '4. ünite · .gitignore', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-zaten-izlenen', 'git', 'gt-u4', 4, 'mcq', 'derived', '`config.local.json` dosyasını aylardır commit''liyordun. Bugün `.gitignore`''a ekledin ama dosya `git status`''ta değişmiş olarak görünmeye devam ediyor. Neden?', '{"choices":["`.gitignore` yalnızca izlenmeyen dosyaları etkiler; zaten izlenen dosyayı izlemeden çıkarmak için `git rm --cached` gerekir","`.gitignore` değişiklikleri ancak bilgisayar yeniden başlatılınca etkili olur","Dosya adında nokta olduğu için kalıp çalışmaz","`.gitignore` yalnızca GitHub''da çalışır"]}', '{"index":0}', 'Git zaten izlediği dosyayı izlemeye devam eder. `git rm --cached config.local.json` dosyayı diskte bırakıp izlemeden çıkarır; commit''ten sonra `.gitignore` kuralı devreye girer. Dosya eski commit''lerde yine durur.', 2, '4. ünite · .gitignore', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-rm-cached', 'git', 'gt-u4', 4, 'fill', 'derived', 'Diskten silmeden `.env` dosyasını Git''in izlemesinden çıkaran komutu yaz.', '{"blanks":1}', '{"blanks":[["git rm --cached .env"]]}', '`git rm --cached .env` dosyayı hazırlık alanından ve izlemeden çıkarır, diskteki dosyaya dokunmaz. Ardından commit''lenir ve `.env` `.gitignore`''a yazılır. Dosyada gizli bilgi varsa eski commit''lerde durmaya devam eder: anahtarlar değiştirilmelidir (14. ünite).', 3, '4. ünite · .gitignore', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-node-modules', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Bir JavaScript projesinde ilk commit''te `node_modules/` klasörü de eklendi ve depo yüzlerce megabayta çıktı. Bundan sonrası için doğru alışkanlık hangisidir?', '{"choices":["`node_modules/`''ı `.gitignore`''a yazmak; bağımlılıkları `package.json`''dan yeniden kurmak","Her commit''te `node_modules/`''ı da güncel tutmak","`node_modules/`''ı zip''leyip depoya eklemek","Depoyu private yapmak"]}', '{"index":0}', 'Yeniden üretilebilen dosyalar (bağımlılıklar, derleme çıktıları) depoya konmaz. `package.json` ve kilit dosyası yeterlidir; bağımlılıklar `npm install` ile kurulur.', 1, '4. ünite · .gitignore', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-unlem', 'git', 'gt-u4', 4, 'tf', 'derived', '`.gitignore` içinde `*.log` satırından sonra yazılan `!onemli.log` satırı, `onemli.log` dosyasını yok sayma kuralının dışında tutar.', '{}', '{"value":true}', 'Doğru. `!` ile başlayan satır önceki bir kuralı geri çevirir. Bir istisna: dosyanın bulunduğu klasörün tamamı yok sayılmışsa içindeki dosya `!` ile geri alınamaz.', 3, '4. ünite · .gitignore', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-son-uc', 'git', 'gt-u4', 4, 'fill', 'derived', 'Geçmişteki yalnızca son 3 commit''i gösteren komutu yaz.', '{"blanks":1}', '{"blanks":[["git log -3","git log -n 3","git log -n3","git log --max-count=3"]]}', '`git log -3` (ya da `-n 3`) yalnızca son üç commit''i gösterir. `--oneline` ile birleştirilebilir: `git log --oneline -3`.', 1, '4. ünite · git log', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-stat', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Her commit''te hangi dosyalarda kaç satır eklendiğini ve silindiğini özetleyen seçenek hangisidir?', '{"choices":["`git log --stat`","`git log --oneline`","`git log --graph`","`git log --all`"]}', '{"index":0}', '`--stat` her commit''in altına değişen dosyaları ve eklenen/silinen satır sayısını yazar; ayrıntılı fark için `-p` kullanılır.', 2, '4. ünite · git log', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u4-ne-zaman', 'git', 'gt-u4', 4, 'mcq', 'derived', 'Yeni bir projeye başlıyorsun; projede `.env` dosyasında veritabanı parolası olacak. `.gitignore`''u ne zaman oluşturmalısın?', '{"choices":["İlk commit''ten önce, `.env` hiç hazırlık alanına girmeden","Proje bitip GitHub''a koyulmadan hemen önce","`.env` ilk kez commit''lendikten sonra","Gerek yok, Git `.env` dosyalarını kendiliğinden yok sayar"]}', '{"index":0}', '`.gitignore` projenin **başında** kurulur. Bir dosya bir kez commit''lenirse geçmişte kalır; sonradan eklenen kural onu geçmişten silmez. Git `.env` dosyalarını kendiliğinden yok saymaz.', 2, '4. ünite · .gitignore', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-bos-depo', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Bilgisayarında commit''leri olan bir projeyi GitHub''a koyacaksın. GitHub''da yeni depo açarken README ekleme kutusu da var. Hangisi daha az sorun çıkarır?', '{"choices":["Depoyu README olmadan boş açıp yerel depoyu ona push etmek","README ekleyip açmak, sonra yerel depoyu doğrudan push etmek","Yerel depoyu silip GitHub''daki depoyu clone''lamak, dosyaları elle kopyalamak","Fark etmez, GitHub iki geçmişi otomatik olarak birleştirir"]}', '{"index":0}', 'README ile açılan depoda zaten bir commit vardır; yerel geçmişinle ortak noktası olmadığı için ilk push **reddedilir**. Var olan bir projeyi koyarken depoyu **boş** açmak en temiz yoldur. Yeni bir projeye sıfırdan başlıyorsan README ile açıp clone''lamak da olur.', 2, '5. ünite · GitHub hesabı ve depo açmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-depo-adresi', 'git', 'gt-u5', 5, 'mcq', 'derived', '"ayse" kullanıcısının "hesap-makinesi" deposunun GitHub''daki web adresi hangisidir?', '{"choices":["`https://github.com/ayse/hesap-makinesi`","`https://hesap-makinesi.github.com/ayse`","`https://github.com/hesap-makinesi/ayse`","`https://ayse.github.com/hesap-makinesi`"]}', '{"index":0}', 'GitHub depo adresleri `github.com/<sahip>/<depo>` biçimindedir. Sahip bir kullanıcı ya da bir organizasyon olabilir.', 1, '5. ünite · GitHub hesabı ve depo açmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-organizasyon', 'git', 'gt-u5', 5, 'tf', 'derived', 'GitHub''da depolar bir kişinin hesabı yerine bir organizasyonun altında da açılabilir; ekipler genellikle ortak projeleri organizasyon altında tutar.', '{}', '{"value":true}', 'Doğru. Organizasyonlar ekipleri, yetkileri ve ortak depoları yönetmeyi kolaylaştırır; bir kişi ayrılsa da depolar organizasyonda kalır.', 2, '5. ünite · GitHub hesabı ve depo açmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-public', 'git', 'gt-u5', 5, 'mcq', 'derived', 'GitHub''da public (herkese açık) bir depo için hangisi doğrudur?', '{"choices":["İnternetteki herkes depoyu ve bütün geçmişini görebilir ve clone''layabilir","Herkes depoya doğrudan push edebilir","Yalnızca GitHub hesabı olanlar dosyaları görebilir","Yalnızca son commit herkese görünür, geçmiş gizli kalır"]}', '{"index":0}', 'Public depoyu **herkes** okur ve clone''lar, **geçmiş dahil**. Push etmek ise yalnızca yetki verilen kişilerin işidir; diğerleri fork açıp pull request gönderir.', 1, '5. ünite · Public ve private depolar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-private', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Private bir depoyu kimler görebilir?', '{"choices":["Sahibi ve erişim verilen kişiler","Depo bağlantısını bilen herkes","GitHub''a giriş yapmış herkes","Yalnızca sahibi; başka kimseye erişim verilemez"]}', '{"index":0}', 'Private depo, sahibi ve **açıkça erişim verilen** kişiler dışında görünmez. Bağlantıyı bilmek yetmez; giriş yapmamış biri bu depo yokmuş gibi bir hata sayfası görür.', 1, '5. ünite · Public ve private depolar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-privatetan-publice', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Bir yıldır private tuttuğun depoyu, portfolyonda göstermek için public yapmak istiyorsun. Eskiden bir commit''te veritabanı parolasını yazıp sonraki commit''te silmiştin. Ne yapmalısın?', '{"choices":["Önce parolayı değiştirip geçmişi temizlemeliyim, eski commit''ler de görünür","Sorun yok, parola son halde olmadığı için kimse göremez","Yalnızca README''yi güncelleyip parolayı oradan silmem yeter","Depoyu public yapıp ardından son commit''i silmem yeter"]}', '{"index":0}', 'Public yapınca **bütün geçmiş** herkese açılır; silinmiş parola eski commit''te durmaya devam eder. Önce parola değiştirilir (artık geçersiz olur), sonra geçmiş temizlenir ya da yeni, temiz bir depoyla paylaşılır. Bu konu 14. ünitede ayrıntılı işleniyor.', 3, '5. ünite · Public ve private depolar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-public-yazma', 'git', 'gt-u5', 5, 'tf', 'derived', 'Bir depo public ise herkes o depoya doğrudan commit gönderebilir.', '{}', '{"value":false}', 'Yanlış. Public yalnızca **okuma** açıklığıdır. Doğrudan push için depo sahibinin yetki vermesi gerekir; başkaları katkı yapmak için fork ve pull request kullanır.', 1, '5. ünite · Public ve private depolar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-gizli-ama-public', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Ekip arkadaşın "Depomuz public ama adresini kimseyle paylaşmadık, kimse bulamaz" diyor. Ne dersin?', '{"choices":["Public depolar botlarca sürekli taranır, gizli kalmaz","Haklı, adresini bilmeyen depoya ulaşamaz","Haklı, ama yalnızca depo adı uzunsa","Public depolar zaten yalnızca arkadaşlara görünür"]}', '{"index":0}', 'Public depolar arama sonuçlarında ve herkese açık etkinlik akışında görünür; **botlar** bu akışı sürekli tarar. "Kimse bilmiyor" bir güvenlik önlemi değildir: gizli kalması gereken bir şey varsa depo private olmalı, gizli bilgi hiç commit''lenmemelidir.', 2, '5. ünite · Public ve private depolar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-readme', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Deponun kökündeki `README.md` dosyasının GitHub''daki görevi nedir?', '{"choices":["Deponun ana sayfasında gösterilip projeyi tanıtır","Depoyu yalnızca ekibe görünür yapar","Projeyi GitHub''da derleyip çalıştırır","Commit mesajlarının özetini saklar"]}', '{"index":0}', 'GitHub kökteki `README.md` dosyasını deponun ana sayfasında Markdown olarak gösterir. Projenin ne olduğunu, nasıl kurulup çalıştırılacağını anlatan ilk belgedir.', 1, '5. ünite · README ve LICENSE', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-lisans-yok', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Public bir depoda hiçbir lisans dosyası yoksa başkaları için hukuken durum genellikle nedir?', '{"choices":["Kod görülebilir ama kullanım, değiştirme ve dağıtma hakları açıkça verilmemiş olur","Kod otomatik olarak herkesin her amaçla kullanabileceği hale gelir","Kod otomatik olarak MIT lisansı altına girer","Kod GitHub''ın malı olur"]}', '{"index":0}', 'Lisans yoksa varsayılan telif hakları geçerlidir: kodu görmek mümkündür ama başkalarına kullanma ve dağıtma izni verilmemiş olur. Açık kaynak yapmak istiyorsan bir **LICENSE** dosyası (MIT, Apache 2.0, GPL gibi) eklemelisin.', 3, '5. ünite · README ve LICENSE', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-mit-gpl', 'git', 'gt-u5', 5, 'mcq', 'derived', 'MIT lisansı ile GPL lisansı arasındaki temel fark hangisidir?', '{"choices":["GPL, değiştirilmiş sürümün kaynağının da açılmasını ister","MIT ücretli, GPL ücretsizdir","MIT yalnızca şirketler, GPL yalnızca bireyler içindir","GPL''li kod GitHub''da barındırılamaz"]}', '{"index":0}', '**MIT** serbest (permissive) bir lisanstır: telif notu korunduğu sürece kapalı ürünlerde bile kullanılabilir. **GPL** "copyleft"tir: değiştirilmiş sürümü dağıtan, kaynak kodunu da aynı lisansla açmak zorundadır.', 3, '5. ünite · README ve LICENSE', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-markdown', 'git', 'gt-u5', 5, 'tf', 'derived', '`README.md` dosyasındaki `.md` uzantısı dosyanın Markdown biçiminde yazıldığını gösterir; GitHub başlıkları, listeleri ve kod bloklarını biçimlendirerek gösterir.', '{}', '{"value":true}', 'Doğru. Markdown, `#` ile başlık, `-` ile liste, ters tırnaklarla kod yazılan basit bir biçimdir; GitHub README''leri, issue''ları ve pull request''leri Markdown ile gösterir.', 1, '5. ünite · README ve LICENSE', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-clone-komut', 'git', 'gt-u5', 5, 'fill', 'derived', '`https://github.com/ayse/proje.git` adresindeki depoyu bilgisayarına indiren komutu yaz.', '{"blanks":1}', '{"blanks":[["git clone https://github.com/ayse/proje.git","git clone https://github.com/ayse/proje"]]}', '`git clone <adres>` depoyu bütün geçmişiyle indirir, `proje` adlı bir klasöre çıkarır ve uzak depoyu `origin` adıyla kaydeder.', 1, '5. ünite · git clone', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-clone-ne-indirir', 'git', 'gt-u5', 5, 'mcq', 'derived', '`git clone` ne indirir?', '{"choices":["Deponun bütün geçmişini ve dosyaların son halini","Yalnızca dosyaların son halini, geçmiş olmadan","Yalnızca README ve lisans dosyalarını","Yalnızca son 10 commit''i ve dosyaları"]}', '{"index":0}', 'Clone tam bir kopyadır: bütün commit''ler ve dallar gelir, çalışma dizinine varsayılan dal çıkarılır. (Çok büyük depolar için geçmişi kısaltan `--depth` gibi seçenekler 18. ünitede.)', 1, '5. ünite · git clone', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-zip-clone', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Arkadaşın GitHub''daki "Download ZIP" düğmesiyle projeyi indirdi, düzenledi ve şimdi `git push` yapmaya çalışıyor; `fatal: not a git repository` hatası alıyor. Neden?', '{"choices":["ZIP yalnızca dosyaların kopyasıdır, `.git` klasörü ve geçmiş içermez; depoyu `git clone` ile almalıydı","GitHub''ın sunucusu çökmüştür","ZIP''i açarken parola girmediği için","Push etmeden önce bilgisayarı yeniden başlatması gerekir"]}', '{"index":0}', '"Download ZIP" deponun yalnızca o anki dosyalarını verir; Git deposu değildir. Katkı yapmak için `git clone` kullanılır. Yapılan değişiklikler, clone''lanan klasöre kopyalanarak kurtarılabilir.', 1, '5. ünite · git clone', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-origin', 'git', 'gt-u5', 5, 'tf', 'derived', '`git clone` ile alınan depoda, indirilen uzak depo varsayılan olarak `origin` adıyla kaydedilir.', '{}', '{"value":true}', 'Doğru. `origin` bir gelenek addır; `git remote -v` ile görülebilir. İstenirse başka adla da eklenebilir.', 2, '5. ünite · git clone', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-remote-add', 'git', 'gt-u5', 5, 'fill', 'derived', 'Yerel deponu `https://github.com/ayse/blog.git` adresindeki boş GitHub deposuna `origin` adıyla bağlayan komutu yaz.', '{"blanks":1}', '{"blanks":[["git remote add origin https://github.com/ayse/blog.git","git remote add origin https://github.com/ayse/blog"]]}', '`git remote add origin <adres>` uzak depoyu kaydeder. Bağlantıları görmek için `git remote -v` kullanılır.', 1, '5. ünite · remote, push ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-push-u', 'git', 'gt-u5', 5, 'mcq', 'derived', '`git push -u origin main` komutundaki `-u` ne işe yarar?', '{"choices":["Yerel `main`''i `origin/main`''i izleyecek şekilde bağlar; sonra yalnızca `git push` yazmak yeter","Push''u geri alınamaz yapar","Yalnızca güncellenmiş (updated) dosyaları gönderir","Uzak depodaki değişiklikleri silerek gönderir"]}', '{"index":0}', '`-u` (`--set-upstream`) yerel dalı uzak dala bağlar. Bundan sonra `git push` ve `git pull` nereye gideceklerini bilir, dalın uzaktakine göre kaç commit önde ya da geride olduğu `git status`''ta görünür.', 2, '5. ünite · remote, push ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-ilk-push', 'git', 'gt-u5', 5, 'fill', 'derived', 'Yerel `main` dalını ilk kez `origin`''e gönderip izleme bağlantısını kuran komutu yaz.', '{"blanks":1}', '{"blanks":[["git push -u origin main","git push --set-upstream origin main"]]}', '`git push -u origin main` ilk push''ta kullanılır; sonraki push''larda yalnızca `git push` yeter.', 1, '5. ünite · remote, push ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-origin-var', 'git', 'gt-u5', 5, 'mcq', 'derived', 'GitHub''daki talimatları ikinci kez yapıştırdın ve şu hatayı aldın:

```
error: remote origin already exists.
```

Bu ne anlatıyor?', '{"choices":["Depoda `origin` adlı uzak depo zaten kayıtlı; adresi `git remote -v` ile denetlenip gerekirse `git remote set-url` ile değiştirilir","GitHub''daki depo silinmiş","İnternet bağlantısı kopmuş","Push başarılı olmuş, bu yalnızca bir uyarıdır"]}', '{"index":0}', 'Aynı adla ikinci bir uzak depo eklenemez. Adres doğruysa bir şey yapmaya gerek yoktur; yanlışsa `git remote set-url origin <yeni-adres>` ile değiştirilir.', 2, '5. ünite · remote, push ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-push-red', 'git', 'gt-u5', 5, 'mcq', 'derived', '`git push` yazınca şu çıktıyı aldın:

```
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs
hint: Updates were rejected because the remote contains work that you do not have locally.
```

En doğru sonraki adım hangisidir?', '{"choices":["Önce `git pull` ile uzak depodaki yeni commit''leri alıp kendi işimle birleştirmek, sonra tekrar push etmek","`git push --force` ile uzak depodakileri ezerek göndermek","Depoyu silip yeniden clone''lamak","Commit''lerimi silip değişiklikleri unutmak"]}', '{"index":0}', 'Uzak depoda senin olmayan commit''ler var (ör. ekip arkadaşın push etti). Önce onları alıp birleştirmelisin. `--force` arkadaşının işini **silerdi**; paylaşılan dallarda kullanılmaz (10. ünitede güvenli seçenek `--force-with-lease`).', 2, '5. ünite · remote, push ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-push-commit', 'git', 'gt-u5', 5, 'tf', 'derived', '`git push` commit''lenmemiş (yalnızca kaydedilmiş) değişiklikleri de uzak depoya gönderir.', '{}', '{"value":false}', 'Yanlış. `git push` yalnızca **commit''leri** gönderir. Commit''lenmemiş değişiklikler bilgisayarında kalır.', 1, '5. ünite · remote, push ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-pull-ne', 'git', 'gt-u5', 5, 'mcq', 'derived', '`git pull` ne yapar?', '{"choices":["Uzak depodaki yeni commit''leri indirip bulunduğun dala birleştirir","Yerel commit''leri uzak depoya gönderir","Uzak depoyu siler","Yalnızca uzak depodaki dalların listesini gösterir"]}', '{"index":0}', '`git pull` iki adımdır: önce **fetch** (yenileri indir), sonra bulunduğun dala **birleştir** (ya da ayarına göre rebase et). Ayrıntısı 10. ünitede.', 1, '5. ünite · git pull ile güncellemek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-sabah-pull', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Ekip olarak aynı depoda çalışıyorsunuz. Sabah işe başlarken ilk ne yapmak çakışmaları en aza indirir?', '{"choices":["`git pull` ile ekibin dün gönderdiklerini almak","Hemen yeni dosyalar oluşturmaya başlamak","Depoyu silip yeniden clone''lamak","Akşam `git push --force` yapmak"]}', '{"index":0}', 'Çalışmaya **güncel** halden başlamak, başkalarının değiştirdiği yerlerle çakışma olasılığını azaltır ve push''un reddedilmesini önler.', 1, '5. ünite · git pull ile güncellemek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-pull-calisma', 'git', 'gt-u5', 5, 'tf', 'derived', 'Commit''lenmemiş değişikliklerin, pull ile gelen değişikliklerle aynı dosyalara dokunuyorsa Git pull''u durdurup seni uyarabilir.', '{}', '{"value":true}', 'Doğru. Git commit''lenmemiş işini ezmemek için pull''u durdurur ("Your local changes would be overwritten"). Önce işini commit''lemek ya da geçici olarak kenara koymak (`git stash`, 16. ünite) gerekir.', 2, '5. ünite · git pull ile güncellemek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-parola-yok', 'git', 'gt-u5', 5, 'mcq', 'derived', 'HTTPS adresiyle push ederken kullanıcı adını ve GitHub hesap parolanı girdin; şu mesajı aldın:

```
remote: Support for password authentication was removed.
```

Ne yapmalısın?', '{"choices":["Erişim token''ı ya da SSH anahtarı kullanmak","GitHub parolanı değiştirip tekrar denemek","Depoyu public yapıp yeniden denemek","Git''i kaldırıp yeniden kurmak"]}', '{"index":0}', 'GitHub, Git işlemlerinde hesap parolasını artık kabul etmez. HTTPS için **kişisel erişim token''ı** (ya da bir kimlik yöneticisi / GitHub CLI ile giriş), alternatif olarak **SSH anahtarı** kullanılır.', 2, '5. ünite · HTTPS, token, SSH anahtarı ve 2FA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-ssh-ozel', 'git', 'gt-u5', 5, 'mcq', 'derived', 'SSH anahtar çiftinde hangisi GitHub''a eklenir?', '{"choices":["Açık anahtar (genellikle `.pub` uzantılı dosya)","Özel anahtar","İkisi birlikte","Hiçbiri, GitHub anahtarı kendisi üretir"]}', '{"index":0}', 'GitHub''a **açık anahtar** (`id_ed25519.pub` gibi) eklenir. **Özel anahtar** bilgisayarından hiç çıkmaz, kimseyle paylaşılmaz; onu paylaşmak hesabının anahtarını vermek demektir.', 1, '5. ünite · HTTPS, token, SSH anahtarı ve 2FA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-ssh-keygen', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Yeni bir SSH anahtar çifti üretmek için hangi komut kullanılır?', '{"choices":["`ssh-keygen -t ed25519 -C \"e-posta\"`","`git keygen`","`git config --ssh`","`ssh-add --new`"]}', '{"index":0}', '`ssh-keygen -t ed25519` modern ve kısa bir anahtar çifti üretir; `-C` anahtara açıklama ekler. Açık anahtar GitHub''da Settings → SSH and GPG keys bölümüne eklenir.', 2, '5. ünite · HTTPS, token, SSH anahtarı ve 2FA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-ssh-adres', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Aşağıdakilerden hangisi bir GitHub deposunun SSH ile kullanılan adresidir?', '{"choices":["`git@github.com:ayse/proje.git`","`https://github.com/ayse/proje.git`","`ssh://ayse.github.com/proje`","`github.com/ayse/proje.zip`"]}', '{"index":0}', 'SSH adresi `git@github.com:<sahip>/<depo>.git` biçimindedir. `https://` ile başlayan adres HTTPS adresidir. Var olan bir depoyu SSH''ye geçirmek için `git remote set-url origin git@github.com:...` kullanılır.', 2, '5. ünite · HTTPS, token, SSH anahtarı ve 2FA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-publickey', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Yeni bilgisayarında SSH adresiyle clone''larken şu hatayı aldın:

```
git@github.com: Permission denied (publickey).
```

En olası neden hangisidir?', '{"choices":["Bu bilgisayarın anahtarı GitHub''a eklenmemiş","Depo silinmiş ya da başka hesaba taşınmış","Bilgisayardaki Git sürümü SSH için çok eski","`user.email` ayarı yapılmamış"]}', '{"index":0}', 'GitHub bu bilgisayarın anahtarını tanımıyor. Anahtar üretilir (ya da var olan bulunur), açık anahtar GitHub''a eklenir ve `ssh -T git@github.com` ile bağlantı denenir. `user.email` kimlik doğrulamayla ilgili değildir.', 3, '5. ünite · HTTPS, token, SSH anahtarı ve 2FA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-token-gizli', 'git', 'gt-u5', 5, 'tf', 'derived', 'Kişisel erişim token''ı bir parola gibi gizli tutulmalıdır; koda yazılıp commit''lenirse ve depo public ise başkalarının eline geçebilir.', '{}', '{"value":true}', 'Doğru. Token, sahibinin yetkileriyle işlem yapar. Mümkün olan en dar yetkiyle ve son kullanma tarihiyle üretilmeli, asla koda yazılmamalıdır. Sızan token hemen iptal edilir (14. ünite).', 2, '5. ünite · HTTPS, token, SSH anahtarı ve 2FA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-2fa', 'git', 'gt-u5', 5, 'mcq', 'derived', 'GitHub hesabında iki adımlı doğrulamanın (2FA) sağladığı koruma hangisidir?', '{"choices":["Parola çalınsa bile ikinci adım olmadan girilemez","Depoların otomatik olarak private olması","Commit''lerin iki ayrı sunucuda kaydedilmesi","Push işlemlerinin iki kat hızlanması"]}', '{"index":0}', '2FA, girişte paroladan başka bir kanıt (doğrulama uygulamasındaki kod, güvenlik anahtarı ya da passkey) ister. GitHub kod katkısı yapan hesaplarda 2FA''yı zorunlu tutar; kurtarma kodlarını güvenli bir yerde saklamak gerekir.', 1, '5. ünite · HTTPS, token, SSH anahtarı ve 2FA', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-remote-v', 'git', 'gt-u5', 5, 'fill', 'derived', 'Deponun bağlı olduğu uzak depoları adresleriyle listeleyen komutu yaz.', '{"blanks":1}', '{"blanks":[["git remote -v","git remote --verbose"]]}', '`git remote -v` her uzak deponun adını ve fetch/push adreslerini gösterir. Yalın `git remote` yalnızca adları listeler.', 1, '5. ünite · remote, push ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u5-buyuk-dosya', 'git', 'gt-u5', 5, 'mcq', 'derived', 'Projeye 150 MB''lık bir tanıtım videosu commit''leyip push ettin; GitHub push''u reddetti ve dosya boyutu sınırından söz etti. Bundan sonrası için doğru yaklaşım hangisidir?', '{"choices":["Büyük dosyaları depo dışında ya da Git LFS ile tutmak","Videoyu zip''leyip aynı commit''e tekrar eklemek","Push''u `--force` ile zorlayıp yeniden denemek","Depoyu private yapıp yeniden denemek"]}', '{"index":0}', 'GitHub tek dosyada 100 MB''ın üstünü kabul etmez, 50 MB''ın üstü için uyarır. Büyük ikili dosyalar ya depo dışında tutulur ya da **Git LFS** ile saklanır. Dosya zaten bir commit''te olduğu için önce o commit''ten çıkarılması gerekir (9. ve 18. ünite).', 3, '5. ünite · remote, push ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'u1-neden', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-tanim';
UPDATE questions SET kavram = 'u1-neden', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u1-dosya-adi-kaosu';
UPDATE questions SET kavram = 'u1-neden', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-kazanimlar';
UPDATE questions SET kavram = 'u1-neden', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-yalniz-calisan';
UPDATE questions SET kavram = 'u1-neden', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u1-yedek-farki';
UPDATE questions SET kavram = 'u1-neden', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-kod-disi';
UPDATE questions SET kavram = 'u1-git-github', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-git-nedir';
UPDATE questions SET kavram = 'u1-git-github', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-github-nedir';
UPDATE questions SET kavram = 'u1-git-github', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-gitsiz-github';
UPDATE questions SET kavram = 'u1-git-github', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-gitlab';
UPDATE questions SET kavram = 'u1-git-github', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-hangisi-arac';
UPDATE questions SET kavram = 'u1-git-github', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u1-internetsiz';
UPDATE questions SET kavram = 'u1-merkezi-dagitik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-dagitik-tanim';
UPDATE questions SET kavram = 'u1-merkezi-dagitik', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u1-sunucu-coktu';
UPDATE questions SET kavram = 'u1-merkezi-dagitik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-merkezi-ornek';
UPDATE questions SET kavram = 'u1-merkezi-dagitik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-merkezi-commit';
UPDATE questions SET kavram = 'u1-merkezi-dagitik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-hiz';
UPDATE questions SET kavram = 'u1-tarihce', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-yaratici';
UPDATE questions SET kavram = 'u1-tarihce', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-anlik-goruntu';
UPDATE questions SET kavram = 'u1-tarihce', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-acik-kaynak';
UPDATE questions SET kavram = 'u1-tarihce', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-github-sahibi';
UPDATE questions SET kavram = 'u1-temel', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-depo';
UPDATE questions SET kavram = 'u1-temel', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-commit';
UPDATE questions SET kavram = 'u1-temel', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-commit-icerik';
UPDATE questions SET kavram = 'u1-temel', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-zincir';
UPDATE questions SET kavram = 'u1-temel', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u1-kaydet-commit';
UPDATE questions SET kavram = 'u1-neden', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u1-eposta-word';
UPDATE questions SET kavram = 'u1-git-github', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-barindirma-degil';
UPDATE questions SET kavram = 'u1-git-github', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u1-yalniz-acik-kaynak';
UPDATE questions SET kavram = 'u2-kurulum', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u2-surum-komut';
UPDATE questions SET kavram = 'u2-kurulum', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u2-bulunamadi';
UPDATE questions SET kavram = 'u2-kurulum', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-macos';
UPDATE questions SET kavram = 'u2-kurulum', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-git-bash';
UPDATE questions SET kavram = 'u2-config', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u2-ad-komut';
UPDATE questions SET kavram = 'u2-config', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-neden-kimlik';
UPDATE questions SET kavram = 'u2-config', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u2-kimlik-yok';
UPDATE questions SET kavram = 'u2-config', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-duzeyler';
UPDATE questions SET kavram = 'u2-config', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u2-is-eposta';
UPDATE questions SET kavram = 'u2-config', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u2-liste';
UPDATE questions SET kavram = 'u2-config', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-global-dosya';
UPDATE questions SET kavram = 'u2-config', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-varsayilan-dal';
UPDATE questions SET kavram = 'u2-terminal', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-pwd';
UPDATE questions SET kavram = 'u2-terminal', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-ls';
UPDATE questions SET kavram = 'u2-terminal', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-cd-ust';
UPDATE questions SET kavram = 'u2-terminal', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u2-mkdir';
UPDATE questions SET kavram = 'u2-terminal', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u2-gizli-git';
UPDATE questions SET kavram = 'u2-terminal', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u2-yanlis-klasor';
UPDATE questions SET kavram = 'u2-editor-yardim', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-editor';
UPDATE questions SET kavram = 'u2-editor-yardim', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u2-vim-cikis';
UPDATE questions SET kavram = 'u2-editor-yardim', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-satir-sonu';
UPDATE questions SET kavram = 'u2-editor-yardim', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u2-yardim';
UPDATE questions SET kavram = 'u2-config', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u2-eposta-komut';
UPDATE questions SET kavram = 'u2-config', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-global-tek-depo';
UPDATE questions SET kavram = 'u2-terminal', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u2-bosluklu-klasor';
UPDATE questions SET kavram = 'u2-editor-yardim', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u2-kisa-yardim';
UPDATE questions SET kavram = 'u3-init', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u3-init-komut';
UPDATE questions SET kavram = 'u3-init', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-git-klasoru';
UPDATE questions SET kavram = 'u3-init', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u3-git-sil';
UPDATE questions SET kavram = 'u3-init', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-init-tekrar';
UPDATE questions SET kavram = 'u3-init', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u3-repo-degil';
UPDATE questions SET kavram = 'u3-uc-alan', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-uc-alan';
UPDATE questions SET kavram = 'u3-uc-alan', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-staging-amac';
UPDATE questions SET kavram = 'u3-uc-alan', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-akis-sira';
UPDATE questions SET kavram = 'u3-uc-alan', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u3-add-sonrasi-degisiklik';
UPDATE questions SET kavram = 'u3-status', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u3-status-komut';
UPDATE questions SET kavram = 'u3-status', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-untracked';
UPDATE questions SET kavram = 'u3-status', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-clean';
UPDATE questions SET kavram = 'u3-status', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-kisa-cikti';
UPDATE questions SET kavram = 'u3-status', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-bos-klasor';
UPDATE questions SET kavram = 'u3-add', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u3-add-dosya';
UPDATE questions SET kavram = 'u3-add', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-add-nokta';
UPDATE questions SET kavram = 'u3-add', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u3-unstage';
UPDATE questions SET kavram = 'u3-add', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-add-p';
UPDATE questions SET kavram = 'u3-add', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-add-bos-cikti';
UPDATE questions SET kavram = 'u3-commit', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u3-commit-m';
UPDATE questions SET kavram = 'u3-commit', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-commit-a';
UPDATE questions SET kavram = 'u3-commit', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u3-bos-commit';
UPDATE questions SET kavram = 'u3-commit', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-kucuk-commit';
UPDATE questions SET kavram = 'u3-commit', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-commit-yerel';
UPDATE questions SET kavram = 'u3-add', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u3-restore-staged-komut';
UPDATE questions SET kavram = 'u3-add', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u3-iki-commit';
UPDATE questions SET kavram = 'u3-uc-alan', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u3-restore-dosya';
UPDATE questions SET kavram = 'u3-commit', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u3-git-rm';
UPDATE questions SET kavram = 'u4-log', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u4-log-komut';
UPDATE questions SET kavram = 'u4-log', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-oneline';
UPDATE questions SET kavram = 'u4-log', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-graph-all';
UPDATE questions SET kavram = 'u4-log', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u4-pager';
UPDATE questions SET kavram = 'u4-log', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-yazar-suzgec';
UPDATE questions SET kavram = 'u4-log', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-log-dosya';
UPDATE questions SET kavram = 'u4-diff', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-diff-varsayilan';
UPDATE questions SET kavram = 'u4-diff', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u4-diff-staged';
UPDATE questions SET kavram = 'u4-diff', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u4-diff-bos';
UPDATE questions SET kavram = 'u4-diff', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-diff-isaret';
UPDATE questions SET kavram = 'u4-diff', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-diff-head';
UPDATE questions SET kavram = 'u4-show-hash', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-hash-nedir';
UPDATE questions SET kavram = 'u4-show-hash', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-kisa-hash';
UPDATE questions SET kavram = 'u4-show-hash', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-show';
UPDATE questions SET kavram = 'u4-show-hash', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-head';
UPDATE questions SET kavram = 'u4-show-hash', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-hash-degisir';
UPDATE questions SET kavram = 'u4-mesaj', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-iyi-mesaj';
UPDATE questions SET kavram = 'u4-mesaj', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-kalip';
UPDATE questions SET kavram = 'u4-mesaj', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-emir-kipi';
UPDATE questions SET kavram = 'u4-mesaj', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u4-mesaj-senaryo';
UPDATE questions SET kavram = 'u4-gitignore', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-amac';
UPDATE questions SET kavram = 'u4-gitignore', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-kalip-log';
UPDATE questions SET kavram = 'u4-gitignore', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u4-zaten-izlenen';
UPDATE questions SET kavram = 'u4-gitignore', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u4-rm-cached';
UPDATE questions SET kavram = 'u4-gitignore', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u4-node-modules';
UPDATE questions SET kavram = 'u4-gitignore', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-unlem';
UPDATE questions SET kavram = 'u4-log', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u4-son-uc';
UPDATE questions SET kavram = 'u4-log', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u4-stat';
UPDATE questions SET kavram = 'u4-gitignore', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u4-ne-zaman';
UPDATE questions SET kavram = 'u5-hesap-depo', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u5-bos-depo';
UPDATE questions SET kavram = 'u5-hesap-depo', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-depo-adresi';
UPDATE questions SET kavram = 'u5-hesap-depo', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-organizasyon';
UPDATE questions SET kavram = 'u5-gorunurluk', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-public';
UPDATE questions SET kavram = 'u5-gorunurluk', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-private';
UPDATE questions SET kavram = 'u5-gorunurluk', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u5-privatetan-publice';
UPDATE questions SET kavram = 'u5-gorunurluk', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-public-yazma';
UPDATE questions SET kavram = 'u5-gorunurluk', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u5-gizli-ama-public';
UPDATE questions SET kavram = 'u5-readme-lisans', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-readme';
UPDATE questions SET kavram = 'u5-readme-lisans', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-lisans-yok';
UPDATE questions SET kavram = 'u5-readme-lisans', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-mit-gpl';
UPDATE questions SET kavram = 'u5-readme-lisans', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-markdown';
UPDATE questions SET kavram = 'u5-clone', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u5-clone-komut';
UPDATE questions SET kavram = 'u5-clone', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-clone-ne-indirir';
UPDATE questions SET kavram = 'u5-clone', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u5-zip-clone';
UPDATE questions SET kavram = 'u5-clone', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-origin';
UPDATE questions SET kavram = 'u5-remote-push', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u5-remote-add';
UPDATE questions SET kavram = 'u5-remote-push', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-push-u';
UPDATE questions SET kavram = 'u5-remote-push', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u5-ilk-push';
UPDATE questions SET kavram = 'u5-remote-push', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u5-origin-var';
UPDATE questions SET kavram = 'u5-remote-push', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u5-push-red';
UPDATE questions SET kavram = 'u5-remote-push', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-push-commit';
UPDATE questions SET kavram = 'u5-pull', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-pull-ne';
UPDATE questions SET kavram = 'u5-pull', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u5-sabah-pull';
UPDATE questions SET kavram = 'u5-pull', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-pull-calisma';
UPDATE questions SET kavram = 'u5-kimlik', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u5-parola-yok';
UPDATE questions SET kavram = 'u5-kimlik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-ssh-ozel';
UPDATE questions SET kavram = 'u5-kimlik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-ssh-keygen';
UPDATE questions SET kavram = 'u5-kimlik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-ssh-adres';
UPDATE questions SET kavram = 'u5-kimlik', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u5-publickey';
UPDATE questions SET kavram = 'u5-kimlik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-token-gizli';
UPDATE questions SET kavram = 'u5-kimlik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u5-2fa';
UPDATE questions SET kavram = 'u5-remote-push', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u5-remote-v';
UPDATE questions SET kavram = 'u5-remote-push', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u5-buyuk-dosya';
