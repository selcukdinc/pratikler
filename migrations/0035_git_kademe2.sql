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
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-dal-tanim', 'git', 'gt-u6', 6, 'mcq', 'derived', 'Git''te bir dal (branch) teknik olarak nedir?', '{"choices":["Bir commit''i gösteren ve yeni commit''le ilerleyen bir işaretçi","Projenin bütün dosyalarının ayrı bir klasördeki kopyası","Sunucuda tutulan ve yalnızca yöneticinin açabildiği bir alan","Commit''lerin tarih sırasına göre dizildiği bir liste dosyası"]}', '{"index":0}', 'Dal yalnızca bir commit kimliğini tutan küçük bir işaretçidir (`.git/refs/heads/` altında 41 baytlık bir dosya). O dalda commit atınca işaretçi yeni commit''e kayar. Dosyalar kopyalanmaz.', 1, '6. ünite · Dal nedir, neden ucuzdur', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-neden-dal', 'git', 'gt-u6', 6, 'mcq', 'derived', 'Yeni bir özelliği ayrı bir dalda geliştirmenin asıl kazancı nedir?', '{"choices":["Yarım iş ana dalı bozmadan ilerler, hazır olunca birleştirilir","Dalda yazılan kod daha hızlı çalışır","Dallar commit mesajı yazma zorunluluğunu kaldırır","Dalda yapılan değişiklikler otomatik olarak yedeklenir"]}', '{"index":0}', 'Dallar işleri birbirinden yalıtır: `main` her an çalışır durumda kalırken yeni özellik, deneme ya da hata düzeltmesi kendi dalında ilerler. İş bitince birleştirilir, vazgeçilirse dal silinir.', 1, '6. ünite · Dal nedir, neden ucuzdur', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-ucuz', 'git', 'gt-u6', 6, 'tf', 'derived', 'Git''te yeni bir dal açmak, proje ne kadar büyük olursa olsun neredeyse anında biter; çünkü dosyalar kopyalanmaz.', '{}', '{"value":true}', 'Doğru. Dal açmak yalnızca bir commit kimliğini yazan küçük bir dosya oluşturmaktır. Bu yüzden Git''te her iş için dal açmak olağandır.', 1, '6. ünite · Dal nedir, neden ucuzdur', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-deneme', 'git', 'gt-u6', 6, 'mcq', 'derived', 'Çalışan bir projede riskli bir yeniden düzenleme denemek istiyorsun; işe yaramazsa hiç olmamış gibi dönmek istiyorsun. En uygun yol hangisi?', '{"choices":["Yeni bir dal açıp orada denemek; olmazsa dalı silmek","Proje klasörünü kopyalayıp kopyada çalışmak","Doğrudan main''de çalışıp gerekirse commit''leri elle geri yazmak","Denemeyi commit''lemeden günlerce çalışma dizininde tutmak"]}', '{"index":0}', 'Deneme dalı tam bunun içindir: `git switch -c deneme` ile aç, çalış, commit''le. İşe yaramazsa `main`''e dön ve `git branch -D deneme` ile sil; `main` hiç etkilenmez.', 1, '6. ünite · Dal nedir, neden ucuzdur', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-main-ozel-mi', 'git', 'gt-u6', 6, 'tf', 'derived', '`main` dalı Git''in içinde özel olarak işaretlenmiş, diğer dallardan teknik olarak farklı bir daldır.', '{}', '{"value":false}', 'Yanlış. `main` (ya da `master`) yalnızca bir adlandırma alışkanlığıdır; teknik olarak diğer dallar gibi bir işaretçidir. Onu "ana" yapan ekibin kuralları ve platformdaki varsayılan dal ayarıdır.', 2, '6. ünite · Dal nedir, neden ucuzdur', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-switch-c', 'git', 'gt-u6', 6, 'fill', 'derived', '`giris-formu` adında yeni bir dal açıp hemen ona geçen komutu yaz.', '{"blanks":1}', '{"blanks":[["git switch -c giris-formu","git checkout -b giris-formu","git switch --create giris-formu"]]}', '`git switch -c giris-formu` dalı bulunduğun commit''te açar ve ona geçer. Eski yazımı `git checkout -b giris-formu` da aynı işi yapar.', 1, '6. ünite · Dal açmak ve dallar arasında geçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-branch-ac', 'git', 'gt-u6', 6, 'mcq', 'derived', '`git branch rapor` komutu ne yapar?', '{"choices":["rapor dalını açar ama bulunduğun dalda kalırsın","rapor dalını açar ve hemen ona geçer","rapor dalına geçer; dal yoksa hata verir","rapor dalını uzak depoya gönderir"]}', '{"index":0}', '`git branch ad` yalnızca dalı oluşturur; HEAD yerinde kalır. Bu yüzden yeni yeni başlayanlar sık sık "dal açtım ama commit eski dala gitti" der. Açıp geçmek için `git switch -c ad`.', 1, '6. ünite · Dal açmak ve dallar arasında geçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-switch-gec', 'git', 'gt-u6', 6, 'fill', 'derived', 'Var olan `main` dalına geçmek için yazılan komutu yaz.', '{"blanks":1}', '{"blanks":[["git switch main","git checkout main"]]}', '`git switch main` HEAD''i `main`''e taşır ve çalışma dizinini o dalın son commit''ine göre günceller. Eski yazım `git checkout main`.', 1, '6. ünite · Dal açmak ve dallar arasında geçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-gecince-dosyalar', 'git', 'gt-u6', 6, 'mcq', 'derived', 'İki dalda farklı dosyalar varken `git switch` ile dal değiştirince çalışma dizininde ne olur?', '{"choices":["Dosyalar geçilen dalın son commit''indeki hâline getirilir","Hiçbir dosya değişmez, yalnızca istem satırındaki ad değişir","İki dalın dosyaları birleştirilip klasöre yazılır","Bütün dosyalar silinir, yeniden indirmek gerekir"]}', '{"index":0}', 'Dal değiştirmek, çalışma dizinini o dalın anlık görüntüsüne çevirir: o dalda olmayan dosyalar kaybolur, farklı olanlar değişir. Commit''lenmiş hiçbir şey kaybolmaz; geri geçince eski hâl döner.', 1, '6. ünite · Dal açmak ve dallar arasında geçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-kirli-gecis', 'git', 'gt-u6', 6, 'mcq', 'derived', '`ozellik` dalında `app.js`''yi değiştirdin ama commit''lemedin. `git switch main` yazınca şunu gördün:

```
error: Your local changes to the following files would be overwritten by checkout:
	app.js
Please commit your changes or stash them before you switch branches.
```

Ne yapmalısın?', '{"choices":["Değişikliği commit''lemek ya da git stash ile kenara koymak","Hatayı yok saymak için komutu tekrar tekrar yazmak","app.js''yi silip dal değiştirmek","Depoyu yeniden clone''lamak"]}', '{"index":0}', 'Git, kaydedilmemiş değişikliğini ezmemek için durdu. Ya iş bitti sayıp commit''le, ya da `git stash` ile kenara koy, dal değiştir, döndüğünde `git stash pop` ile geri al (9. ünite).', 2, '6. ünite · Dal açmak ve dallar arasında geçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-yanlis-dalda-commit', 'git', 'gt-u6', 6, 'mcq', 'derived', 'Yeni özelliğin ilk commit''ini attıktan sonra fark ettin: dal açmayı unutmuşsun, commit doğrudan yerel `main`''e girdi (henüz push etmedin). Hangisi temiz bir çözümdür?', '{"choices":["Bulunduğun yerde yeni dal açıp main''i bir commit geri almak","Commit''i silip bütün kodu yeniden yazmak","main''i olduğu gibi push edip özelliği orada bitirmek","Projeyi yeni bir klasöre kopyalayıp orada dal açmak"]}', '{"index":0}', '`git branch ozellik` commit''i yeni dalda korur; ardından `git reset --hard HEAD~1` ile `main` bir geri alınır (push edilmediği için güvenli). Sonra `git switch ozellik` ile devam edersin.', 2, '6. ünite · Dal açmak ve dallar arasında geçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-head-nedir', 'git', 'gt-u6', 6, 'mcq', 'derived', 'Bir daldayken HEAD neyi gösterir?', '{"choices":["Bulunduğun dalı ve onun son commit''ini","Deponun en eski, ilk commit''ini","Uzak depodaki main dalını","Hazırlık alanındaki ilk dosyayı"]}', '{"index":0}', 'HEAD "şu an neredesin" işaretçisidir. Normalde bir dalı gösterir (`HEAD -> main`); yeni commit atınca o dal ilerler, HEAD de onunla gider.', 1, '6. ünite · HEAD ve kopuk HEAD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-kopuk-tanim', 'git', 'gt-u6', 6, 'mcq', 'derived', '`git switch --detach 3f1c2aa` ya da `git checkout 3f1c2aa` ile eski bir commit''e geçince "detached HEAD" uyarısı çıkar. Bu ne demektir?', '{"choices":["HEAD bir dalı değil, doğrudan commit''i gösteriyor","Depo bozuldu, son commit''ler silindi","Uzak depo ile bağlantı koptu, push yapılamaz","Hazırlık alanı boşaltıldı, dosyalar silindi"]}', '{"index":0}', 'Kopuk HEAD''de hiçbir dal üzerinde değilsin. Eski kodu incelemek için güvenlidir; ama burada atılan commit''ler hiçbir dala bağlı olmadığından, başka yere geçince kolayca kaybolur.', 1, '6. ünite · HEAD ve kopuk HEAD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-kopukta-commit', 'git', 'gt-u6', 6, 'mcq', 'derived', 'Kopuk HEAD''deyken iki deneme commit''i attın ve beğendin. Bunları korumak için ilk ne yapmalısın?', '{"choices":["Bulunduğun yerde git switch -c ile yeni bir dal açmak","Hemen git switch main yazıp main''e dönmek","git push yazıp commit''leri göndermek","git reset --hard ile çalışma dizinini temizlemek"]}', '{"index":0}', '`git switch -c deneme` commit''leri yeni bir dala bağlar. Önce main''e dönersen commit''ler sahipsiz kalır; reflog''dan bulunabilir ama zahmetlidir (9. ünite).', 3, '6. ünite · HEAD ve kopuk HEAD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-eski-surume-bak', 'git', 'gt-u6', 6, 'tf', 'derived', 'Eski bir commit''in kodunu çalıştırıp denemek için o commit''e geçmek (kopuk HEAD) güvenlidir; commit atmadıkça hiçbir şey kaybolmaz.', '{}', '{"value":true}', 'Doğru. Yalnızca bakıp çalıştırmak için kopuk HEAD idealdir. İşin bitince `git switch main` ile dalına dönersin.', 1, '6. ünite · HEAD ve kopuk HEAD', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-merge-komut', 'git', 'gt-u6', 6, 'fill', 'derived', 'Şu an `main` dalındasın. `ozellik` dalındaki değişiklikleri `main`''e birleştiren komutu yaz.', '{"blanks":1}', '{"blanks":[["git merge ozellik"]]}', '`git merge ozellik`, `ozellik` dalını **bulunduğun** dala (`main`) birleştirir. Yön önemlidir: önce hedef dala geçilir, sonra kaynak dal birleştirilir.', 1, '6. ünite · Birleştirme: ileri sarma ve üç yollu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-ff', 'git', 'gt-u6', 6, 'mcq', 'derived', '`ozellik` dalı `main`''den ayrıldıktan sonra `main`''e hiç commit atılmadı. `main` üzerindeyken `git merge ozellik` yazınca ne olur?', '{"choices":["main ileri sarılır, yeni bir birleştirme commit''i oluşmaz","İki ebeveynli bir birleştirme commit''i oluşur","Git çakışma bildirir ve durur","ozellik dalı silinir, main değişmez"]}', '{"index":0}', 'Bu bir **fast-forward**''dır: `main`''in ucu zaten `ozellik`''in atasıdır, Git yalnızca `main` işaretçisini öne kaydırır. Çıktıda "Fast-forward" yazar.', 2, '6. ünite · Birleştirme: ileri sarma ve üç yollu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-uc-yollu', 'git', 'gt-u6', 6, 'mcq', 'derived', '`main` ve `ozellik` ayrıldıktan sonra ikisine de commit atıldı. Birleştirince Git ne yapar?', '{"choices":["İki ebeveynli yeni bir birleştirme commit''i oluşturur","Yalnızca main''i ozellik dalının ucuna kaydırır","ozellik dalındaki commit''leri tek tek siler","Hiçbir şey yapmaz, önce rebase yapılmasını ister"]}', '{"index":0}', 'Bu **üç yollu birleştirme**dir: Git ortak atayı ve iki dalın ucunu karşılaştırır, değişiklikleri birleştirir ve iki ebeveynli bir birleştirme commit''i (merge commit) oluşturur. Aynı satırlar iki tarafta farklı değiştiyse çakışma çıkar.', 2, '6. ünite · Birleştirme: ileri sarma ve üç yollu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-no-ff', 'git', 'gt-u6', 6, 'mcq', 'derived', 'İleri sarma mümkün olsa bile birleştirme commit''i oluşturulmasını isteyen `git merge` seçeneği hangisidir?', '{"choices":["`--no-ff`","`--ff-only`","`--squash`","`--abort`"]}', '{"index":0}', '`--no-ff` her zaman birleştirme commit''i oluşturur; geçmişte "bu commit''ler bir özellik dalından geldi" bilgisi kalır. `--ff-only` tersidir: ileri sarma olmuyorsa birleştirmeyi reddeder.', 3, '6. ünite · Birleştirme: ileri sarma ve üç yollu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-yon', 'git', 'gt-u6', 6, 'mcq', 'derived', 'Ekip arkadaşın "`ozellik`''teki işi `main`''e aldım" dedi ama `main`''de hiçbir şey değişmemiş; `ozellik` dalına ise `main`''in commit''leri gelmiş. Ne olmuş olabilir?', '{"choices":["ozellik dalındayken git merge main yazmış","main dalındayken git merge ozellik yazmış","git merge yerine git switch yazmış","Birleştirme commit''i yerine etiket oluşturmuş"]}', '{"index":0}', '`git merge X`, X''i **bulunduğun** dala alır. `ozellik`''teyken `git merge main` yazınca `main` ozellik''e gelir. Doğrusu: `git switch main`, sonra `git merge ozellik`.', 1, '6. ünite · Birleştirme: ileri sarma ve üç yollu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-merge-graf', 'git', 'gt-u6', 6, 'tf', 'derived', 'Bir birleştirme commit''inin iki ebeveyni vardır.', '{}', '{"value":true}', 'Doğru. Biri birleştirmenin yapıldığı dalın önceki ucu, diğeri birleştirilen dalın ucudur. `git log --graph` bu yüzden iki çizginin birleştiğini gösterir.', 1, '6. ünite · Birleştirme: ileri sarma ve üç yollu', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-branch-liste', 'git', 'gt-u6', 6, 'fill', 'derived', 'Yerel dalları listeleyen ve bulunduğun dalı `*` ile işaretleyen komutu yaz.', '{"blanks":1}', '{"blanks":[["git branch","git branch --list"]]}', 'Argümansız `git branch` yerel dalları listeler; bulunduğun dalın başında `*` vardır. Uzak dallarla birlikte görmek için `git branch -a`.', 1, '6. ünite · Dalları listelemek, silmek, adlandırmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-branch-d', 'git', 'gt-u6', 6, 'fill', 'derived', 'Birleştirdiğin `ozellik` dalını silen komutu yaz.', '{"blanks":1}', '{"blanks":[["git branch -d ozellik","git branch --delete ozellik"]]}', '`git branch -d ozellik` dalı siler; dal birleştirilmemişse Git güvenlik için reddeder. Birleşmemiş dalı bilerek silmek için `-D`.', 1, '6. ünite · Dalları listelemek, silmek, adlandırmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-not-fully-merged', 'git', 'gt-u6', 6, 'mcq', 'derived', '`git branch -d deneme` yazınca "error: the branch ''deneme'' is not fully merged" uyarısını aldın. Bu ne anlatıyor?', '{"choices":["deneme dalında başka hiçbir dala girmemiş commit''ler var","deneme dalı uzak depoda bulunamadı","Şu an deneme dalının üzerindesin","deneme dalının adı geçersiz karakter içeriyor"]}', '{"index":0}', 'Git, silersen ulaşması zorlaşacak commit''ler olduğunu söylüyor. Gerçekten istemiyorsan `git branch -D deneme`; emin değilsen önce birleştir ya da `git log main..deneme` ile neyin gideceğine bak.', 2, '6. ünite · Dalları listelemek, silmek, adlandırmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-adlandirma', 'git', 'gt-u6', 6, 'mcq', 'derived', 'Ekip kuralına göre dallar iş türü ve iş numarasıyla adlandırılıyor. US-D12 numaralı giriş doğrulama hatasını düzelteceksin. Hangisi bu kurala uyan bir dal adıdır?', '{"choices":["`bugfix/US-D12-login-validation`","`Login Validation Fix`","`duzeltme`","`ahmet-yeni-dal-2`"]}', '{"index":0}', '`bugfix/` ya da `feature/` öneki, ardından iş numarası ve kısa açıklama: dalın neden var olduğunu adından okursun. Dal adında boşluk olamaz; `ahmet-yeni-dal-2` gibi adlar birkaç gün sonra kimseye bir şey söylemez.', 1, '6. ünite · Dalları listelemek, silmek, adlandırmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-rename', 'git', 'gt-u6', 6, 'mcq', 'derived', 'Bulunduğun dalın adını `yeni-ad` yapan komut hangisidir?', '{"choices":["`git branch -m yeni-ad`","`git rename yeni-ad`","`git switch -m yeni-ad`","`git branch -d yeni-ad`"]}', '{"index":0}', '`git branch -m` (move) dalı yeniden adlandırır; commit''ler aynı kalır. Push edilmiş bir dalın adını değiştirmek uzak tarafta ayrıca silme ve yeniden push gerektirir.', 1, '6. ünite · Dalları listelemek, silmek, adlandırmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u6-silince-commit', 'git', 'gt-u6', 6, 'tf', 'derived', '`git branch -d ozellik` ile birleştirilmiş bir dalı silmek, o dalda atılmış commit''leri de geçmişten siler.', '{}', '{"value":false}', 'Yanlış. Yalnızca işaretçi silinir. Dal birleştirildiği için commit''ler zaten `main`''in geçmişinde durur.', 2, '6. ünite · Dalları listelemek, silmek, adlandırmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-tanim', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Birleştirmede çakışma (merge conflict) en çok hangi durumda çıkar?', '{"choices":["Aynı satırlar iki dalda farklı değiştirildiğinde","İki dal aynı gün içinde commit aldığında","İki dalda farklı dosyalar değiştirildiğinde","Bir dalda yalnızca yeni dosya eklendiğinde"]}', '{"index":0}', 'Git farklı dosyalardaki ya da aynı dosyanın farklı yerlerindeki değişiklikleri kendisi birleştirir. Aynı satırlar iki tarafta farklı değiştiyse hangisinin doğru olduğuna karar veremez ve sana sorar.', 1, '7. ünite · Çakışma neden olur', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-farkli-satir', 'git', 'gt-u7', 7, 'tf', 'derived', 'İki dal aynı dosyayı değiştirdiyse, değişiklikler farklı satırlarda olsa bile birleştirmede her zaman çakışma çıkar.', '{}', '{"value":false}', 'Yanlış. Değişiklikler birbirinden uzak satırlardaysa Git ikisini de alır. Çakışma, aynı ya da bitişik satırlar iki tarafta farklı değiştiğinde çıkar.', 1, '7. ünite · Çakışma neden olur', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-sil-degistir', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Bir dalda `eski.js` silinmiş, diğer dalda aynı dosya değiştirilmiş. Birleştirince ne olur?', '{"choices":["Çakışma çıkar; dosyanın kalıp kalmayacağına sen karar verirsin","Git dosyayı her zaman siler","Git dosyayı her zaman değiştirilmiş hâliyle tutar","Birleştirme hiç başlamaz, Git hata verir"]}', '{"index":0}', 'Bu bir "modify/delete" çakışmasıdır: `git status` dosyayı "deleted by us" ya da "deleted by them" diye gösterir. Tutmak için `git add eski.js`, silmek için `git rm eski.js`, sonra commit.', 2, '7. ünite · Çakışma neden olur', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-kotu-degil', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Takıma yeni katılan biri ilk çakışmasını görünce "Git''i bozdum" diye paniğe kapıldı. Ona en doğru açıklama hangisi?', '{"choices":["Çakışma olağandır; Git hangisinin kalacağını soruyor","Depo bozuldu, en son yedekten geri dönmek gerekiyor","Çakışma çıkan dosya artık kullanılamaz, yeniden yazılmalı","Bir daha çakışma olmaması için dal kullanmayı bırakmalı"]}', '{"index":0}', 'Çakışma bir hata değil, bir sorudur. Hiçbir commit kaybolmaz; dosyayı düzenleyip kararını verirsin ya da `git merge --abort` ile birleştirmeden önceki hâle dönersin.', 1, '7. ünite · Çakışma neden olur', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-head-kismi', 'git', 'gt-u7', 7, 'mcq', 'derived', '`main` dalındayken `git merge fiyat-guncelle` yazdın ve dosyada şunu gördün:

```
<<<<<<< HEAD
const KDV = 0.20;
=======
const KDV = 0.18;
>>>>>>> fiyat-guncelle
```

`<<<<<<< HEAD` ile `=======` arasındaki satır kimin?', '{"choices":["Bulunduğun dalın, yani main''in","fiyat-guncelle dalının","İki dalın ortak atasının","Git''in önerdiği birleşik hâlin"]}', '{"index":0}', 'HEAD bulunduğun daldır: üst kısım `main`''deki hâl (0.20), `=======` ile `>>>>>>>` arası birleştirilen daldaki hâl (0.18). İşaretlerin hepsini silip doğru satırı bırakırsın.', 1, '7. ünite · Çakışma işaretlerini okumak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-isaret-kalirsa', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Çakışmayı çözdüğünü sanıp `git add` ve commit yaptın; ama dosyada `<<<<<<<` ve `>>>>>>>` satırları kalmış. Ne olur?', '{"choices":["Git bunları sıradan metin sayar; bozuk dosya commit''lenir","Git commit''i reddeder ve çakışmayı yeniden açar","Git işaretleri otomatik olarak siler","Dosya hazırlık alanından kendiliğinden çıkar"]}', '{"index":0}', '`git add` "çözdüm" demektir; Git dosyanın içine bakmaz. İşaretli dosya derlenmez ya da bozuk çalışır. Commit''ten önce `git diff --check` ya da editörde arama ile işaret kalmadığından emin ol.', 2, '7. ünite · Çakışma işaretlerini okumak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-ucu-de', 'git', 'gt-u7', 7, 'tf', 'derived', 'Çakışmada doğru cevap iki tarafın hiçbiri olmayabilir; iki değişikliği birleştiren üçüncü bir hâl yazmak da geçerli bir çözümdür.', '{}', '{"value":true}', 'Doğru. Örneğin bir taraf fonksiyonun adını, diğeri gövdesini değiştirdiyse doğru sonuç ikisini birlikte içerir. Önemli olan son hâlin doğru çalışması ve işaretlerin silinmesidir.', 2, '7. ünite · Çakışma işaretlerini okumak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-isaret-sayisi', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Git''in çakışan bölgeyi işaretlerken kullandığı üç ayırıcı satır hangileridir?', '{"choices":["`<<<<<<<`, `=======` ve `>>>>>>>`","`[[[[`, `----` ve `]]]]`","`/*`, `--` ve `*/`","`BEGIN`, `SPLIT` ve `END`"]}', '{"index":0}', '`<<<<<<< HEAD` senin tarafını, `=======` ayrımı, `>>>>>>> dal-adı` diğer tarafın sonunu gösterir. `merge.conflictStyle diff3` ayarıyla araya ortak atanın hâli de (`|||||||`) eklenir.', 1, '7. ünite · Çakışma işaretlerini okumak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-sira', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Bir birleştirme çakışmasını çözmenin doğru sırası hangisidir?', '{"choices":["Dosyayı düzenle, işaretleri sil, git add, git commit","git commit, dosyayı düzenle, git add","git add, git commit, sonra dosyayı düzenle","Dosyayı sil, git merge yaz, git push"]}', '{"index":0}', 'Önce dosyada doğru hâli bırakıp işaretleri silersin; `git add` ile o dosyayı çözüldü olarak işaretlersin; bütün dosyalar bitince `git commit` birleştirme commit''ini oluşturur.', 1, '7. ünite · Çakışmayı çözmek ve vazgeçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-add-anlami', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Çakışma sırasında bir dosyaya `git add` yapmak Git''e ne söyler?', '{"choices":["Bu dosyanın çakışmasını çözdüğünü","Bu dosyayı birleştirmeden çıkarmak istediğini","Dosyanın bulunduğun daldaki hâlinin seçileceğini","Birleştirmenin baştan başlatılacağını"]}', '{"index":0}', 'Çakışma sırasında index''te dosyanın üç hâli (ortak ata, senin, onların) durur. `git add` bunların yerine dosyanın şu anki hâlini koyar; Git bunu "çözüldü" diye okur.', 1, '7. ünite · Çakışmayı çözmek ve vazgeçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-abort', 'git', 'gt-u7', 7, 'fill', 'derived', 'Çakışmayla dolu bir birleştirmeden vazgeçip birleştirmeden önceki hâle dönen komutu yaz.', '{"blanks":1}', '{"blanks":[["git merge --abort"]]}', '`git merge --abort` birleştirmeyi iptal eder: index ve çalışma dizini `git merge` yazmadan önceki hâline döner. Birleştirmeden önce commit''lenmemiş değişiklik yoksa güvenle kullanılır.', 1, '7. ünite · Çakışmayı çözmek ve vazgeçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-commit-reddi', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Çakışan iki dosyadan yalnızca birini düzeltip `git add` yaptın ve `git commit` yazdın. Git "Committing is not possible because you have unmerged files" dedi. Neden?', '{"choices":["Diğer çakışan dosya henüz çözüldü olarak işaretlenmedi","Commit mesajı yazılmadığı için","Birleştirme commit''leri yalnızca GitHub''da oluşturulabildiği için","Çözülen dosya hazırlık alanına iki kez eklendiği için"]}', '{"index":0}', 'Birleştirme commit''i ancak **bütün** çakışmalar çözülünce oluşur. `git status` "Unmerged paths" altında kalan dosyaları gösterir.', 1, '7. ünite · Çakışmayı çözmek ve vazgeçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-continue', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Bir `cherry-pick` ya da `rebase` çakışmasını çözüp `git add` yaptıktan sonra işleme devam etmek için hangi seçenek kullanılır?', '{"choices":["`--continue`","`--abort`","`--skip`","`--force`"]}', '{"index":0}', '`git rebase --continue` ya da `git cherry-pick --continue` işlemi kaldığı yerden sürdürür. `--abort` tamamen vazgeçer, `--skip` o commit''i atlar.', 2, '7. ünite · Çakışmayı çözmek ve vazgeçmek', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-status-unmerged', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Çakışma sırasında `git status` çakışan dosyaları hangi başlık altında gösterir?', '{"choices":["`Unmerged paths`","`Untracked files`","`Changes to be committed`","`Ignored files`"]}', '{"index":0}', '"Unmerged paths" altında her dosya `both modified`, `deleted by us` gibi bir açıklamayla listelenir. Çözüp `git add` yaptıkça dosyalar bu listeden çıkar.', 1, '7. ünite · Çakışma araçları: status, diff, ours/theirs, editörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-theirs', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Çakışmalı bir birleştirmede `paket-kilidi.json` dosyası için doğrudan birleştirilen dalın (gelen tarafın) hâlini almak istiyorsun. Hangi komut bunu yapar?', '{"choices":["`git checkout --theirs paket-kilidi.json`","`git checkout --ours paket-kilidi.json`","`git merge --abort paket-kilidi.json`","`git reset --hard paket-kilidi.json`"]}', '{"index":0}', '`--theirs` birleştirilen dalın, `--ours` bulunduğun dalın hâlini çalışma dizinine yazar. Ardından `git add` ile çözüldü işaretlenir. (Rebase''de ours ve theirs yer değiştirir; dikkat!)', 3, '7. ünite · Çakışma araçları: status, diff, ours/theirs, editörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-editor', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Büyük bir dosyada on yerde çakışma var ve işaretleri elle aramak yorucu. Hangisi işini en çok kolaylaştırır?', '{"choices":["VS Code gibi bir editörün birleştirme görünümünü kullanmak","Dosyayı silip baştan yazmak","Her çakışmada `git merge --abort` deyip yeniden denemek","Dosyayı e-postayla ekip arkadaşına gönderip beklemek"]}', '{"index":0}', 'Modern editörler çakışmaları vurgular ve her biri için "Accept Current / Incoming / Both" gibi düğmeler sunar. `git mergetool` de yapılandırılmış bir birleştirme aracını açar.', 1, '7. ünite · Çakışma araçları: status, diff, ours/theirs, editörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-diff-cakisma', 'git', 'gt-u7', 7, 'tf', 'derived', 'Çakışma sırasında `git diff` çakışan dosyaların iki tarafını bir arada gösterir.', '{}', '{"value":true}', 'Doğru. Çakışma anında `git diff` birleşik (combined) bir görünüm verir: her satırın başında iki sütun vardır ve hangi taraftan geldiği görünür.', 2, '7. ünite · Çakışma araçları: status, diff, ours/theirs, editörler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-kucuk-dal', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Ekip her birleştirmede saatlerce çakışma çözüyor. Dallar genelde iki üç hafta açık kalıyor. Hangi alışkanlık en çok fayda sağlar?', '{"choices":["Dalları kısa ömürlü tutup küçük parçalar hâlinde sık birleştirmek","Herkesin yalnızca kendi klasöründe çalışması için kodu bölmek","Birleştirmeleri ay sonunda tek seferde yapmak","Çakışmayı önlemek için dal kullanmayı bırakmak"]}', '{"index":0}', 'Dal ne kadar uzun yaşarsa ana daldan o kadar uzaklaşır. Küçük ve sık birleştirmeler çakışmaları küçük ve anlaşılır tutar.', 1, '7. ünite · Çakışmayı azaltan alışkanlıklar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-ana-dali-al', 'git', 'gt-u7', 7, 'mcq', 'derived', 'Bir haftadır kendi dalında çalışıyorsun; bu sürede `main`''e çok şey birleştirildi. PR açmadan önce ne yapmak çakışmayı erkenden yakalamanı sağlar?', '{"choices":["main''deki son değişiklikleri kendi dalına almak","Kendi dalını silip yeniden açmak","PR''ı açıp çakışmayı inceleyenin çözmesini beklemek","Bütün değişiklikleri tek bir commit''e sıkıştırmak"]}', '{"index":0}', '`git pull origin main` (ya da `git merge main` / `git rebase main`) ile ana dalı kendi dalına alırsan çakışma kendi bilgisayarında, işin bağlamını bildiğin anda çıkar.', 2, '7. ünite · Çakışmayı azaltan alışkanlıklar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-bicimlendirici', 'git', 'gt-u7', 7, 'tf', 'derived', 'Ekipte herkesin aynı kod biçimlendiricisini (formatter) kullanması, yalnızca boşluk ve girinti farkından doğan çakışmaları azaltır.', '{}', '{"value":true}', 'Doğru. Biri dosyayı başka bir girintiyle kaydedince bütün satırlar "değişmiş" görünür ve gerçek değişikliklerle çakışır. Ortak biçimlendirici ve `.editorconfig` bunu önler.', 2, '7. ünite · Çakışmayı azaltan alışkanlıklar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u7-kilit-dosya', 'git', 'gt-u7', 7, 'mcq', 'derived', '`package-lock.json` gibi otomatik üretilen bir dosyada çakışma çıktı. Genelde en sağlıklı yol hangisidir?', '{"choices":["Bir tarafı alıp paket yöneticisiyle dosyayı yeniden üretmek","İşaretlerin arasındaki satırları elle tek tek birleştirmek","Dosyayı depodan tamamen silmek","İki tarafın satırlarını işaretleriyle birlikte bırakmak"]}', '{"index":0}', 'Üretilen dosyalar elle birleştirilmeye uygun değildir. Bir tarafı al (ör. `git checkout --theirs`), ardından `npm install` ile dosyayı tutarlı biçimde yeniden üret ve `git add` yap.', 2, '7. ünite · Çakışmayı azaltan alışkanlıklar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-pr-nedir', 'git', 'gt-u8', 8, 'mcq', 'derived', 'GitHub''da pull request (PR) nedir?', '{"choices":["Bir daldaki değişikliklerin başka dala alınma isteği","Uzak depodaki değişiklikleri bilgisayarına indiren komut","Bir depoyu kendi hesabına kopyalama işlemi, yani çatallama","Depo sahibine gönderilen erişim izni başvurusu"]}', '{"index":0}', 'PR "bu dalımdaki değişiklikleri şu dala almanızı istiyorum" demektir. Değişiklikler, tartışma, inceleme ve otomatik kontroller tek sayfada toplanır; onay gelince birleştirilir. Adı karıştırılmasın: `git pull` komutuyla ilgisi yoktur.', 1, '8. ünite · Pull request', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-pr-oncesi', 'git', 'gt-u8', 8, 'mcq', 'derived', 'Bir PR açmadan önce bilgisayarında yapman gereken adımlar hangisidir?', '{"choices":["Dal aç, commit''le, dalı uzak depoya push et","main''e commit''le, sonra GitHub''da PR düğmesine bas","Depoyu ZIP olarak indir, düzenle, yeniden yükle","Yalnızca dosyaları kaydetmek yeterlidir, PR gerisini halleder"]}', '{"index":0}', 'PR bir dal üzerinden açılır: `git switch -c ozellik`, commit''ler, `git push -u origin ozellik`. GitHub push''tan sonra "Compare & pull request" düğmesini gösterir.', 1, '8. ünite · Pull request', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-base-compare', 'git', 'gt-u8', 8, 'mcq', 'derived', 'PR açarken seçilen "base" ve "compare" dalları neyi anlatır?', '{"choices":["base değişikliklerin gideceği dal, compare değişiklikleri getiren dal","base değişiklikleri getiren dal, compare hedef dal","base uzak depo, compare yerel depo","İkisi de aynı dalı gösterir, yalnızca görünüm farklıdır"]}', '{"index":0}', '`base: main ← compare: feature/giris` okunuşu: giris dalındaki değişiklikler main''e alınmak isteniyor. Yanlış base seçmek (ör. dev yerine main) sık yapılan bir hatadır.', 2, '8. ünite · Pull request', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-pr-guncelleme', 'git', 'gt-u8', 8, 'mcq', 'derived', 'PR''ına inceleme yorumu geldi ve bir düzeltme yapman istendi. Düzeltmeyi PR''a nasıl eklersin?', '{"choices":["Aynı dala commit atıp push etmek","PR''ı kapatıp düzeltmeyle yeni bir PR açmak","Düzeltmeyi main''e doğrudan push etmek","Düzeltmeyi yorum olarak PR''a yapıştırmak"]}', '{"index":0}', 'PR bir dalı izler; o dala yeni commit push edince PR''a eklenir, inceleme ve kontroller yeniden çalışır. Yeni PR açmak tartışma geçmişini dağıtır.', 1, '8. ünite · Pull request', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-draft', 'git', 'gt-u8', 8, 'tf', 'derived', 'GitHub''da taslak (draft) PR açmak, işin bitmediğini belirtir ve hazır olarak işaretlenene kadar birleştirilmesini engeller.', '{}', '{"value":true}', 'Doğru. Taslak PR erken geri bildirim almak ve kontrolleri çalıştırmak için kullanışlıdır; "Ready for review" denince normal PR olur.', 1, '8. ünite · Pull request', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-kucuk-pr', 'git', 'gt-u8', 8, 'mcq', 'derived', '3000 satırlık bir PR iki haftadır incelenmeyi bekliyor. Ekip arkadaşların açmaktan çekiniyor. Bundan sonrası için en iyi ders hangisi?', '{"choices":["İşi küçük, tek amaçlı PR''lara bölmek","PR açıklamasını kısaltmak","İncelemeyi atlayıp doğrudan birleştirmek","Bütün commit''leri tek commit''e sıkıştırmak"]}', '{"index":0}', 'Küçük PR''lar hızlı ve dikkatli incelenir, çakışma riski düşer, sorun çıkınca geri almak kolaydır. Büyük bir özellik birbirinin üstüne kurulan birkaç PR''a bölünebilir.', 2, '8. ünite · Pull request', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-review-turleri', 'git', 'gt-u8', 8, 'mcq', 'derived', 'GitHub''da bir PR incelemesini bitirirken seçilebilen üç sonuç hangileridir?', '{"choices":["Comment, Approve, Request changes","Merge, Close, Delete","Push, Pull, Fetch","Open, Draft, Archive"]}', '{"index":0}', '**Comment** yalnızca yorum bırakır, **Approve** onaylar, **Request changes** düzeltme ister ve korumalı dallarda birleştirmeyi engeller.', 1, '8. ünite · Kod incelemesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-iyi-yorum', 'git', 'gt-u8', 8, 'mcq', 'derived', 'Arkadaşının PR''ında bir fonksiyonun boş listede hata vereceğini fark ettin. Hangisi en yararlı inceleme yorumudur?', '{"choices":["İlgili satıra: \"Liste boşsa hata verir, kontrol ekleyelim mi?\"","PR''ın geneline: \"Kod kötü olmuş, baştan yaz.\"","Hiç yorum yazmadan PR''ı hemen onaylamak","Hatayı kendin düzeltip arkadaşına haber vermeden main''e push etmek"]}', '{"index":0}', 'İyi inceleme yorumu ilgili satıra yazılır, sorunu ve nedenini söyler, çözüm önerir ve kişiyi değil kodu konuşur. GitHub''ın "suggestion" özelliğiyle önerilen satırı doğrudan da yazabilirsin.', 1, '8. ünite · Kod incelemesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-neden-inceleme', 'git', 'gt-u8', 8, 'mcq', 'derived', 'Kod incelemesinin hata yakalamanın dışındaki önemli kazancı hangisidir?', '{"choices":["Bilginin ekipte yayılması, kodun ortak sahiplenilmesi","Kodun daha hızlı derlenip çalışması","Depodaki commit sayısının azalması","Deponun diskte kapladığı yerin küçülmesi"]}', '{"index":0}', 'İnceleyen kişi değişikliği öğrenir; yazan kişi geri bildirim alır. Böylece bir modülü yalnızca bir kişinin bildiği "bus factor" riski azalır.', 1, '8. ünite · Kod incelemesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-kendi-onay', 'git', 'gt-u8', 8, 'tf', 'derived', 'GitHub''da bir PR''ın yazarı kendi PR''ını onaylayarak (Approve) zorunlu inceleme kuralını karşılayabilir.', '{}', '{"value":false}', 'Yanlış. GitHub yazarın kendi PR''ını onaylamasına izin vermez; zorunlu inceleme için başka bir kişinin onayı gerekir.', 1, '8. ünite · Kod incelemesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-onay-sonrasi', 'git', 'gt-u8', 8, 'mcq', 'derived', 'PR''ın onaylandı. Birleştirmeden hemen önce küçük bir değişiklik daha push ettin ve ekipte "yeni push eski onayları düşürür" kuralı açık. Ne olur?', '{"choices":["Onay geçersiz olur; değişikliğin yeniden incelenmesi gerekir","Onay geçerli kalır, PR hemen birleştirilebilir","PR otomatik olarak kapanır","Yeni commit PR''a eklenmez, ayrı PR gerekir"]}', '{"index":0}', '"Dismiss stale approvals" kuralı, onaydan sonra gelen değişikliğin incelenmeden girmesini önler. Bu yüzden son düzeltmeler onaydan önce yapılır.', 3, '8. ünite · Kod incelemesi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-squash', 'git', 'gt-u8', 8, 'mcq', 'derived', 'GitHub''daki "Squash and merge" seçeneği ne yapar?', '{"choices":["PR''ın bütün commit''lerini hedef dalda tek bir commit''e sıkıştırır","PR''ın commit''lerini olduğu gibi ve bir birleştirme commit''iyle alır","Commit''leri hedef dalın ucuna tek tek yeniden yazar","PR''ı birleştirmeden kapatır"]}', '{"index":0}', 'Squash, dalda "düzeltme", "yazım" gibi ara commit''ler olsa bile hedef dalda tek ve temiz bir commit bırakır. Dalın kendi commit''leri hedef dalın geçmişine girmez.', 1, '8. ünite · Merge, squash ve rebase ile birleştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-merge-commit', 'git', 'gt-u8', 8, 'mcq', 'derived', '"Create a merge commit" seçeneğinin hedef dalın geçmişine etkisi nedir?', '{"choices":["Dalın bütün commit''leri ve bir birleştirme commit''i geçmişe girer","Yalnızca tek bir sıkıştırılmış commit girer","Hiçbir commit girmez, yalnızca dosyalar kopyalanır","Dalın commit''leri yeni kimliklerle doğrusal olarak eklenir"]}', '{"index":0}', 'Birleştirme commit''i iki ebeveynlidir; dalın bütün geçmişi korunur ve `git log --graph`''ta dalın nerede ayrılıp nerede birleştiği görünür.', 1, '8. ünite · Merge, squash ve rebase ile birleştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-rebase-merge', 'git', 'gt-u8', 8, 'mcq', 'derived', '"Rebase and merge" seçeneği hedef dalın geçmişini nasıl bırakır?', '{"choices":["PR commit''leri uca tek tek eklenmiş, doğrusal bir geçmiş","PR''ın bütün commit''leri tek commit''e sıkıştırılmış bir geçmiş","İki ebeveynli bir birleştirme commit''iyle dallanmış bir geçmiş","Hiç değişmemiş bir geçmiş; PR yalnızca etiketlenir"]}', '{"index":0}', 'Rebase ile commit''ler hedef dalın ucuna yeniden yazılır (kimlikleri değişir) ve geçmiş düz bir çizgi olur. Rebase''in ayrıntısı 11. ünitede.', 2, '8. ünite · Merge, squash ve rebase ile birleştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-squash-ne-zaman', 'git', 'gt-u8', 8, 'mcq', 'derived', 'Bir PR''da "wip", "düzeltme", "yazım hatası", "bir daha dene" gibi 14 ara commit var; değişiklik tek bir özelliği ekliyor. main''in geçmişinin okunur kalması için hangi yöntem uygundur?', '{"choices":["Squash and merge","Create a merge commit","PR''ı kapatıp yeniden açmak","Commit''leri olduğu gibi main''e push etmek"]}', '{"index":0}', 'Squash ile main''de "Kullanıcı profili sayfası (#42)" gibi tek, anlamlı bir commit kalır. Ara adımların geçmişte durması gereken PR''larda merge commit seçilir.', 2, '8. ünite · Merge, squash ve rebase ile birleştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-fork-nedir', 'git', 'gt-u8', 8, 'mcq', 'derived', 'GitHub''da bir depoyu fork etmek ne demektir?', '{"choices":["Depoyu GitHub''da kendi hesabına kopyalamak","Depoyu bütün geçmişiyle bilgisayarına indirmek","Asıl depoda kendine yeni bir dal açmak","Depoyu arşivleyip salt okunur yapmak"]}', '{"index":0}', 'Fork, başkasının deposunun GitHub''da **senin hesabındaki** kopyasıdır. Yazma yetkin olmayan bir açık kaynak projeye katkı vermek için forkta dal açar, push eder ve asıl depoya PR gönderirsin.', 1, '8. ünite · Fork ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-fork-vs-clone', 'git', 'gt-u8', 8, 'mcq', 'derived', 'Fork ile clone arasındaki fark hangisinde doğru anlatılmıştır?', '{"choices":["Fork GitHub''da sunucu tarafında kopyalar, clone bilgisayarına indirir","Fork yalnızca son commit''i alır, clone bütün geçmişi alır","Fork bir Git komutudur, clone yalnızca GitHub''da yapılır","İkisi aynı işi yapar, yalnızca adları farklıdır"]}', '{"index":0}', 'Fork bir platform özelliğidir ve kopya GitHub''da durur. Sonra o forku `git clone` ile bilgisayarına indirirsin. Git''te `fork` diye bir komut yoktur.', 2, '8. ünite · Fork ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-upstream', 'git', 'gt-u8', 8, 'fill', 'derived', 'Bir forkta çalışırken asıl (kaynak) depoyu `upstream` adıyla uzak depo olarak ekleyen komutu yaz. Asıl deponun adresi `https://github.com/acik/proje.git`.', '{"blanks":1}', '{"blanks":[["git remote add upstream https://github.com/acik/proje.git","git remote add upstream https://github.com/acik/proje"]]}', 'Alışkanlık: `origin` senin forkun, `upstream` asıl depo. Asıl depodaki yenilikleri `git fetch upstream` ve `git merge upstream/main` ile kendi dalına alırsın.', 1, '8. ünite · Fork ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-fork-guncel', 'git', 'gt-u8', 8, 'mcq', 'derived', 'Üç ay önce fork ettiğin projeye katkı vereceksin ama forkun asıl deponun çok gerisinde. PR açmadan önce ne yapmalısın?', '{"choices":["upstream''deki yenilikleri alıp dalını güncellemek","Forku silip asıl depoya doğrudan push etmek","Eski hâliyle PR açıp bakımcının birleştirmesini beklemek","Asıl depoyu ZIP indirip forkun üstüne kopyalamak"]}', '{"index":0}', '`git fetch upstream`, ardından dalını `upstream/main` üzerine kur (merge ya da rebase). GitHub''daki "Sync fork" düğmesi de forkun main''ini günceller.', 2, '8. ünite · Fork ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-yetki', 'git', 'gt-u8', 8, 'tf', 'derived', 'Bir depoya collaborator (katkıcı) olarak eklenmişsen fork açmadan doğrudan o depoda dal açıp PR gönderebilirsin.', '{}', '{"value":true}', 'Doğru. Fork daha çok yazma yetkin olmayan projeler içindir. Ekip içinde genelde aynı depoda dallar ve PR''larla çalışılır.', 1, '8. ünite · Fork ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-issue-nedir', 'git', 'gt-u8', 8, 'mcq', 'derived', 'GitHub''da issue ne için kullanılır?', '{"choices":["Hata, öneri ve yapılacak işleri kaydetmek için","Kodu bir daldan diğer dala taşımak için","Deponun görünürlük ayarlarını değiştirmek için","Commit''leri geri almak için"]}', '{"index":0}', 'Issue bir iş kaydıdır: başlık, açıklama, etiketler, atanan kişi ve tartışma. `#12` gibi numarasıyla commit''lerden ve PR''lardan anılır.', 1, '8. ünite · Issue ve PR''ı issue''ya bağlamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-closes', 'git', 'gt-u8', 8, 'mcq', 'derived', 'PR açıklamasına hangi ifade yazılırsa PR main''e birleştiğinde 12 numaralı issue otomatik kapanır?', '{"choices":["`Closes #12`","`See #12`","`Issue 12`","`@12`"]}', '{"index":0}', '`Closes`, `Fixes` ya da `Resolves` ve ardından `#12` yazılırsa PR varsayılan dala birleşince issue kapanır. Yalnızca `#12` yazmak bağlantı kurar ama kapatmaz.', 1, '8. ünite · Issue ve PR''ı issue''ya bağlamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-iyi-issue', 'git', 'gt-u8', 8, 'mcq', 'derived', 'Uygulamada bir hata buldun ve issue açacaksın. Hangisi en yararlı hata kaydıdır?', '{"choices":["Adımlar, beklenen ve gerçekleşen sonuç, sürüm ve ekran görüntüsü","Yalnızca \"çalışmıyor\" başlığı","Hatanın kimin yüzünden olduğunu tahmin eden bir paragraf","Uygulamanın bütün kaynak kodunu yapıştırmak"]}', '{"index":0}', 'Hatayı yeniden üretebilmek için adımlar, beklenen davranış, gerçekleşen davranış ve ortam bilgisi gerekir. Birçok proje bunun için issue şablonları kullanır.', 1, '8. ünite · Issue ve PR''ı issue''ya bağlamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u8-etiket-atama', 'git', 'gt-u8', 8, 'tf', 'derived', 'Issue''lara etiket (label) eklemek ve kişi atamak, işlerin sınıflandırılıp kimde olduğunun görülmesini sağlar.', '{}', '{"value":true}', 'Doğru. `bug`, `enhancement`, `good first issue` gibi etiketler ve atanan kişi, proje panolarında işleri düzenlemeyi kolaylaştırır.', 1, '8. ünite · Issue ve PR''ı issue''ya bağlamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-restore-dosya', 'git', 'gt-u9', 9, 'fill', 'derived', '`ayarlar.js`''de commit''lemediğin değişikliklerden vazgeçip dosyayı son commit''teki hâline döndüren komutu yaz.', '{"blanks":1}', '{"blanks":[["git restore ayarlar.js","git checkout -- ayarlar.js","git checkout ayarlar.js"]]}', '`git restore ayarlar.js` dosyayı hazırlık alanındaki (yoksa son commit''teki) hâline döndürür. Commit''lenmemiş değişiklik geri getirilemez biçimde silinir.', 1, '9. ünite · Dosyaları geri almak: restore', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-restore-source', 'git', 'gt-u9', 9, 'mcq', 'derived', '`stil.css` dosyasını üç commit önceki hâline getirmek, ama dal ve diğer dosyalara dokunmamak istiyorsun. Hangi komut uygundur?', '{"choices":["`git restore --source=HEAD~3 stil.css`","`git reset --hard HEAD~3`","`git revert HEAD~3`","`git switch HEAD~3`"]}', '{"index":0}', '`--source` dosyanın hangi commit''ten alınacağını söyler; yalnızca o dosya değişir. `reset --hard` bütün dalı ve bütün dosyaları geri alırdı.', 3, '9. ünite · Dosyaları geri almak: restore', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-restore-geri-donus', 'git', 'gt-u9', 9, 'tf', 'derived', '`git restore dosya` ile attığın commit''lenmemiş değişiklikleri `git reflog` ile geri getirebilirsin.', '{}', '{"value":false}', 'Yanlış. reflog yalnızca dalların ve HEAD''in commit''ler arasındaki hareketlerini tutar. Hiç commit''lenmemiş (ve stash''lenmemiş) bir değişiklik Git''e hiç girmediği için geri getirilemez.', 1, '9. ünite · Dosyaları geri almak: restore', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-soft', 'git', 'gt-u9', 9, 'mcq', 'derived', '`git reset --soft HEAD~1` ne yapar?', '{"choices":["Son commit''i geri alır; değişiklikler hazırlık alanında kalır","Son commit''i ve bütün değişiklikleri tamamen siler","Son commit''in tersini yapan yeni bir commit ekler","Yalnızca hazırlık alanını boşaltır, dal yerinde kalır"]}', '{"index":0}', '`--soft` yalnızca dal işaretçisini geri alır; index ve çalışma dizini olduğu gibi kalır. Son commit''i farklı biçimde yeniden yapmak için kullanışlıdır.', 2, '9. ünite · reset: soft, mixed, hard', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-mixed', 'git', 'gt-u9', 9, 'mcq', 'derived', 'Seçeneksiz `git reset HEAD~1` (varsayılan `--mixed`) sonrasında son commit''teki değişiklikler nerede olur?', '{"choices":["Çalışma dizininde, hazırlık alanının dışında","Hazırlık alanında, commit''e hazır","Hiçbir yerde, tamamen silinmiş","Uzak depoda, push edilmeyi bekliyor"]}', '{"index":0}', '`--mixed` dalı ve index''i geri alır ama çalışma dizinine dokunmaz. Değişiklikler dosyalarında durur; yeniden `git add` ile seçebilirsin.', 2, '9. ünite · reset: soft, mixed, hard', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-hard', 'git', 'gt-u9', 9, 'mcq', 'derived', '`git reset --hard HEAD~1` için hangisi doğrudur?', '{"choices":["Dal, index ve çalışma dizini bir önceki commit''e döner; kaydedilmemiş iş kaybolur","Yalnızca dal işaretçisi geri alınır, dosyalar değişmez","Geri alınan commit hemen ve kalıcı olarak silinir, reflog''da da bulunmaz","Değişiklikler stash''e kaydedilir"]}', '{"index":0}', '`--hard` en güçlü ve en tehlikeli kiptir: commit''lenmemiş değişiklikler gider. Geri alınan commit ise bir süre reflog''da bulunur.', 1, '9. ünite · reset: soft, mixed, hard', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-unstage-reset', 'git', 'gt-u9', 9, 'tf', 'derived', '`git reset dosya` (dosya adıyla, kip olmadan) dosyayı hazırlık alanından çıkarır ve çalışma dizinindeki değişikliğe dokunmaz.', '{}', '{"value":true}', 'Doğru. Dosya adıyla kullanılan `git reset`, `git restore --staged dosya` ile aynı işi yapar.', 1, '9. ünite · reset: soft, mixed, hard', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-paylasilmis-reset', 'git', 'gt-u9', 9, 'mcq', 'derived', 'Dün push ettiğin ve ekibin üzerine çalıştığı bir commit''i `git reset --hard HEAD~1` ve `git push --force` ile main''den kaldırmayı düşünüyorsun. Neden kötü bir fikir?', '{"choices":["Ekibin geçmişindeki commit''i yeniden yazar, karmaşa çıkar","reset komutu push edilmiş commit''lerde hiç çalışmaz","Force push yalnızca GitHub''ın ücretli sürümünde vardır","Commit''in dosyaları başka dallardan da silinir"]}', '{"index":0}', 'Paylaşılmış geçmişi yeniden yazmak, ekip arkadaşlarının yerel geçmişiyle çelişir; bir sonraki pull''da karmaşa ve kayıp riski doğar. Paylaşılmış commit''i geri almanın güvenli yolu `git revert`''tür. Korumalı dallarda force push zaten kapalıdır.', 3, '9. ünite · reset: soft, mixed, hard', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-revert-nedir', 'git', 'gt-u9', 9, 'mcq', 'derived', '`git revert a1b2c3d` ne yapar?', '{"choices":["Onun değişikliklerini tersine çeviren yeni commit ekler","a1b2c3d commit''ini geçmişten tamamen siler","Dalı a1b2c3d commit''ine geri taşır, sonrası gider","a1b2c3d''ye geçip kopuk HEAD''de kalır"]}', '{"index":0}', 'revert geçmişi silmez, üstüne ekler: eski commit de, onu geri alan commit de geçmişte görünür. Bu yüzden paylaşılmış dallarda güvenlidir.', 1, '9. ünite · revert: paylaşılmış commit''i geri almak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-revert-komut', 'git', 'gt-u9', 9, 'fill', 'derived', 'En son commit''i, geçmişi yeniden yazmadan geri alan yeni bir commit oluşturan komutu yaz.', '{"blanks":1}', '{"blanks":[["git revert HEAD"]]}', '`git revert HEAD` son commit''in tersini yapan bir commit oluşturur. Mesaj olarak "Revert ..." önerilir; `--no-edit` ile editör açılmadan kabul edilir.', 1, '9. ünite · revert: paylaşılmış commit''i geri almak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-canlida-hata', 'git', 'gt-u9', 9, 'mcq', 'derived', 'main''e birleşen ve canlıya çıkan bir commit ödeme sayfasını bozdu. Ekip main''de çalışmaya devam ediyor. Hangisi en güvenli hızlı çözümdür?', '{"choices":["Bozan commit''i git revert ile geri alıp normal akışla göndermek","main''i git reset --hard ile geri alıp force push etmek","Bozan commit''in dosyalarını elle eski hâline kopyalamadan beklemek","Depoyu silip son sağlam yedekten yeniden oluşturmak"]}', '{"index":0}', 'revert geçmişi bozmadan hatayı geri alır ve herkes normal pull ile alır. Sorun düzelince özellik ayrı bir PR ile yeniden getirilebilir.', 2, '9. ünite · revert: paylaşılmış commit''i geri almak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-revert-cakisma', 'git', 'gt-u9', 9, 'tf', 'derived', 'Eski bir commit''i revert ederken, o commit''ten sonra aynı satırlar değiştirildiyse çakışma çıkabilir.', '{}', '{"value":true}', 'Doğru. revert, eski değişikliğin tersini bugünkü kodun üstüne uygular; araya giren değişiklikler aynı satırlara dokunduysa çakışma çıkar ve çözüp `git revert --continue` dersin.', 2, '9. ünite · revert: paylaşılmış commit''i geri almak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-amend-mesaj', 'git', 'gt-u9', 9, 'fill', 'derived', 'Henüz push etmediğin son commit''in mesajını "Giris formu duzeltildi" olarak değiştiren komutu yaz.', '{"blanks":1}', '{"blanks":[["git commit --amend -m \"Giris formu duzeltildi\"","git commit --amend -m \"Giriş formu düzeltildi\"","git commit --amend -m Giris formu duzeltildi"]]}', '`git commit --amend` son commit''i, hazırlık alanındakilerle ve yeni mesajla yeniden yazar. Unutulan bir dosyayı da önce `git add` yapıp amend ile ekleyebilirsin.', 1, '9. ünite · Son commit''i düzeltmek: --amend', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-amend-kimlik', 'git', 'gt-u9', 9, 'mcq', 'derived', '`--amend` ile düzeltilen commit için hangisi doğrudur?', '{"choices":["Yeni bir kimlik alır; eski commit dalın geçmişinden çıkar","Kimliği aynı kalır, yalnızca mesajı değişir","Eski commit''in üstüne ikinci bir commit eklenir","Commit uzak depoda da kendiliğinden güncellenir"]}', '{"index":0}', 'Commit''in kimliği içeriğinden hesaplandığı için amend yeni bir commit üretir. Push edilmiş bir commit''i amend''lersen uzak taraf ile geçmişin ayrışır; bu yüzden yalnızca paylaşılmamış commit''lerde kullan.', 2, '9. ünite · Son commit''i düzeltmek: --amend', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-amend-unutulan', 'git', 'gt-u9', 9, 'mcq', 'derived', 'Commit attın ve hemen ardından `stil.css`''i eklemeyi unuttuğunu fark ettin; push etmedin. En temiz yol hangisi?', '{"choices":["git add stil.css ve git commit --amend --no-edit","Yeni bir \"stil.css unutulmuş\" commit''i ile push edip geçmek","git reset --hard ile her şeyi silip baştan yazmak","git revert HEAD ile commit''i geri alıp yeniden commit''lemek"]}', '{"index":0}', '`--no-edit` mesajı olduğu gibi bırakır; unutulan dosya aynı commit''e girer. Push edilmişse ayrı bir commit atmak daha doğrudur.', 1, '9. ünite · Son commit''i düzeltmek: --amend', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-stash-nedir', 'git', 'gt-u9', 9, 'mcq', 'derived', '`git stash` ne işe yarar?', '{"choices":["Commit''lenmemiş değişiklikleri geçici olarak kenara koyar","Son commit''i uzak depoya hemen gönderir","Bir dalı başka bir dala sessizce birleştirir","Geçmişteki büyük dosyaları bulup sıkıştırır"]}', '{"index":0}', 'stash yarım işi geçici bir yığına kaydeder ve çalışma dizinini son commit''e döndürür. Acil bir işe geçip dönünce `git stash pop` ile kaldığın yerden devam edersin.', 1, '9. ünite · stash: işi kenara koymak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-stash-pop', 'git', 'gt-u9', 9, 'fill', 'derived', 'Kenara koyduğun son stash''i çalışma dizinine geri getirip yığından silen komutu yaz.', '{"blanks":1}', '{"blanks":[["git stash pop"]]}', '`git stash pop` son stash''i uygular ve listeden siler. `git stash apply` uygular ama listede bırakır; `git stash list` bütün kayıtları gösterir.', 1, '9. ünite · stash: işi kenara koymak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-acil-hata', 'git', 'gt-u9', 9, 'mcq', 'derived', '`feature/rapor` dalında yarım bir iş varken canlıda acil bir hata çıktı; hemen `main`''den bir düzeltme dalı açman lazım. Yarım işi commit''lemek istemiyorsun. Ne yaparsın?', '{"choices":["git stash, dal değiştir, düzeltmeyi yap, sonra dönüp git stash pop","Yarım işi silip düzeltmeden sonra yeniden yazmak","Yarım işle birlikte main''e geçip düzeltmeyi aynı commit''e koymak","Düzeltmeyi feature/rapor dalında yapıp onu canlıya çıkarmak"]}', '{"index":0}', 'stash tam bu iş içindir. Uzun sürecekse yarım işi `wip` mesajlı bir commit olarak dalında bırakmak da geçerli bir yoldur; ama başka dala taşımamak gerekir.', 1, '9. ünite · stash: işi kenara koymak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-izlenmeyen', 'git', 'gt-u9', 9, 'tf', 'derived', 'Seçeneksiz `git stash`, izlenmeyen (yeni ve hiç eklenmemiş) dosyaları da kenara koyar.', '{}', '{"value":false}', 'Yanlış. Varsayılan stash yalnızca izlenen dosyalardaki değişiklikleri alır. İzlenmeyenleri de almak için `git stash -u` (`--include-untracked`).', 2, '9. ünite · stash: işi kenara koymak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-reflog-nedir', 'git', 'gt-u9', 9, 'mcq', 'derived', '`git reflog` neyi gösterir?', '{"choices":["HEAD''in yakın zamanda gösterdiği commit''leri","Uzak depodaki bütün açık PR''ları","Silinmiş dosyaların içeriğini","Depo ayarlarının değişiklik geçmişini"]}', '{"index":0}', 'reflog, HEAD her hareket ettiğinde (commit, reset, switch, rebase...) bir satır yazar. Bu kayıt yalnızca senin bilgisayarındadır ve varsayılan olarak 90 gün tutulur.', 1, '9. ünite · reflog ile kayıp commit''i bulmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-hard-kurtar', 'git', 'gt-u9', 9, 'mcq', 'derived', 'Yanlışlıkla `git reset --hard HEAD~3` yazdın ve son üç commit''in kayboldu sanıyorsun. Nasıl kurtarırsın?', '{"choices":["git reflog ile eski yeri bulup reset ile ona dönmek","Kurtarılamaz; commit''ler kalıcı olarak silindi","git revert HEAD ile üç commit geri gelir","git stash pop ile commit''ler geri gelir"]}', '{"index":0}', 'Commit''ler silinmez, yalnızca sahipsiz kalır. `git reflog` çıktısında `HEAD@{1}` reset''ten önceki yeri gösterir: `git reset --hard HEAD@{1}` ile geri dönülür.', 3, '9. ünite · reflog ile kayıp commit''i bulmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-silinen-dal', 'git', 'gt-u9', 9, 'mcq', 'derived', 'Birleşmemiş `deneme` dalını `git branch -D` ile sildin, sonra pişman oldun. Hangisi dalı geri getirir?', '{"choices":["Reflog''dan dalın son commit''ini bulup o commit''te aynı adla dal açmak","git branch -d deneme komutunu yeniden çalıştırmak","git pull ile dalı uzak depodan geri almak, push edilmemiş olsa bile","Silinen dallar geri getirilemez"]}', '{"index":0}', 'Silme çıktısı dalın son kimliğini de yazar (`Deleted branch deneme (was 3f1c2aa)`). O kimlikle ya da reflog''dan bulup `git branch deneme 3f1c2aa` dersin.', 3, '9. ünite · reflog ile kayıp commit''i bulmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u9-reflog-yerel', 'git', 'gt-u9', 9, 'tf', 'derived', 'reflog yalnızca senin yerel deponda tutulur; GitHub''a push edilmez ve clone ile gelmez.', '{}', '{"value":true}', 'Doğru. Bu yüzden reflog kendi bilgisayarındaki kazaları kurtarmak için birebirdir ama başkasının deposundaki kaybı kurtarmaz.', 1, '9. ünite · reflog ile kayıp commit''i bulmak', 1)
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
UPDATE questions SET kavram = 'u6-dal-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-dal-tanim';
UPDATE questions SET kavram = 'u6-dal-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-neden-dal';
UPDATE questions SET kavram = 'u6-dal-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-ucuz';
UPDATE questions SET kavram = 'u6-dal-nedir', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u6-deneme';
UPDATE questions SET kavram = 'u6-dal-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-main-ozel-mi';
UPDATE questions SET kavram = 'u6-olustur-gec', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u6-switch-c';
UPDATE questions SET kavram = 'u6-olustur-gec', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-branch-ac';
UPDATE questions SET kavram = 'u6-olustur-gec', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u6-switch-gec';
UPDATE questions SET kavram = 'u6-olustur-gec', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-gecince-dosyalar';
UPDATE questions SET kavram = 'u6-olustur-gec', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u6-kirli-gecis';
UPDATE questions SET kavram = 'u6-olustur-gec', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u6-yanlis-dalda-commit';
UPDATE questions SET kavram = 'u6-kopuk-head', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-head-nedir';
UPDATE questions SET kavram = 'u6-kopuk-head', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-kopuk-tanim';
UPDATE questions SET kavram = 'u6-kopuk-head', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u6-kopukta-commit';
UPDATE questions SET kavram = 'u6-kopuk-head', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-eski-surume-bak';
UPDATE questions SET kavram = 'u6-merge', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u6-merge-komut';
UPDATE questions SET kavram = 'u6-merge', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-ff';
UPDATE questions SET kavram = 'u6-merge', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-uc-yollu';
UPDATE questions SET kavram = 'u6-merge', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-no-ff';
UPDATE questions SET kavram = 'u6-merge', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u6-yon';
UPDATE questions SET kavram = 'u6-merge', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-merge-graf';
UPDATE questions SET kavram = 'u6-dal-yonetimi', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u6-branch-liste';
UPDATE questions SET kavram = 'u6-dal-yonetimi', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u6-branch-d';
UPDATE questions SET kavram = 'u6-dal-yonetimi', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u6-not-fully-merged';
UPDATE questions SET kavram = 'u6-dal-yonetimi', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u6-adlandirma';
UPDATE questions SET kavram = 'u6-dal-yonetimi', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-rename';
UPDATE questions SET kavram = 'u6-dal-yonetimi', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u6-silince-commit';
UPDATE questions SET kavram = 'u7-neden', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-tanim';
UPDATE questions SET kavram = 'u7-neden', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-farkli-satir';
UPDATE questions SET kavram = 'u7-neden', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-sil-degistir';
UPDATE questions SET kavram = 'u7-neden', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u7-kotu-degil';
UPDATE questions SET kavram = 'u7-isaretler', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-head-kismi';
UPDATE questions SET kavram = 'u7-isaretler', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u7-isaret-kalirsa';
UPDATE questions SET kavram = 'u7-isaretler', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-ucu-de';
UPDATE questions SET kavram = 'u7-isaretler', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-isaret-sayisi';
UPDATE questions SET kavram = 'u7-cozum', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-sira';
UPDATE questions SET kavram = 'u7-cozum', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-add-anlami';
UPDATE questions SET kavram = 'u7-cozum', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u7-abort';
UPDATE questions SET kavram = 'u7-cozum', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u7-commit-reddi';
UPDATE questions SET kavram = 'u7-cozum', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-continue';
UPDATE questions SET kavram = 'u7-araclar', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-status-unmerged';
UPDATE questions SET kavram = 'u7-araclar', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-theirs';
UPDATE questions SET kavram = 'u7-araclar', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u7-editor';
UPDATE questions SET kavram = 'u7-araclar', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-diff-cakisma';
UPDATE questions SET kavram = 'u7-onlem', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u7-kucuk-dal';
UPDATE questions SET kavram = 'u7-onlem', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u7-ana-dali-al';
UPDATE questions SET kavram = 'u7-onlem', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-bicimlendirici';
UPDATE questions SET kavram = 'u7-onlem', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u7-kilit-dosya';
UPDATE questions SET kavram = 'u8-pr', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-pr-nedir';
UPDATE questions SET kavram = 'u8-pr', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-pr-oncesi';
UPDATE questions SET kavram = 'u8-pr', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-base-compare';
UPDATE questions SET kavram = 'u8-pr', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u8-pr-guncelleme';
UPDATE questions SET kavram = 'u8-pr', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-draft';
UPDATE questions SET kavram = 'u8-pr', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u8-kucuk-pr';
UPDATE questions SET kavram = 'u8-inceleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-review-turleri';
UPDATE questions SET kavram = 'u8-inceleme', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u8-iyi-yorum';
UPDATE questions SET kavram = 'u8-inceleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-neden-inceleme';
UPDATE questions SET kavram = 'u8-inceleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-kendi-onay';
UPDATE questions SET kavram = 'u8-inceleme', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u8-onay-sonrasi';
UPDATE questions SET kavram = 'u8-birlestirme-yontemi', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-squash';
UPDATE questions SET kavram = 'u8-birlestirme-yontemi', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-merge-commit';
UPDATE questions SET kavram = 'u8-birlestirme-yontemi', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-rebase-merge';
UPDATE questions SET kavram = 'u8-birlestirme-yontemi', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u8-squash-ne-zaman';
UPDATE questions SET kavram = 'u8-fork', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-fork-nedir';
UPDATE questions SET kavram = 'u8-fork', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-fork-vs-clone';
UPDATE questions SET kavram = 'u8-fork', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u8-upstream';
UPDATE questions SET kavram = 'u8-fork', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u8-fork-guncel';
UPDATE questions SET kavram = 'u8-fork', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-yetki';
UPDATE questions SET kavram = 'u8-issue', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-issue-nedir';
UPDATE questions SET kavram = 'u8-issue', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-closes';
UPDATE questions SET kavram = 'u8-issue', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u8-iyi-issue';
UPDATE questions SET kavram = 'u8-issue', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u8-etiket-atama';
UPDATE questions SET kavram = 'u9-restore', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u9-restore-dosya';
UPDATE questions SET kavram = 'u9-restore', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-restore-source';
UPDATE questions SET kavram = 'u9-restore', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-restore-geri-donus';
UPDATE questions SET kavram = 'u9-reset', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-soft';
UPDATE questions SET kavram = 'u9-reset', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-mixed';
UPDATE questions SET kavram = 'u9-reset', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-hard';
UPDATE questions SET kavram = 'u9-reset', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-unstage-reset';
UPDATE questions SET kavram = 'u9-reset', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u9-paylasilmis-reset';
UPDATE questions SET kavram = 'u9-revert', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-revert-nedir';
UPDATE questions SET kavram = 'u9-revert', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u9-revert-komut';
UPDATE questions SET kavram = 'u9-revert', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u9-canlida-hata';
UPDATE questions SET kavram = 'u9-revert', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-revert-cakisma';
UPDATE questions SET kavram = 'u9-amend', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u9-amend-mesaj';
UPDATE questions SET kavram = 'u9-amend', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-amend-kimlik';
UPDATE questions SET kavram = 'u9-amend', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u9-amend-unutulan';
UPDATE questions SET kavram = 'u9-stash', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-stash-nedir';
UPDATE questions SET kavram = 'u9-stash', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u9-stash-pop';
UPDATE questions SET kavram = 'u9-stash', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u9-acil-hata';
UPDATE questions SET kavram = 'u9-stash', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-izlenmeyen';
UPDATE questions SET kavram = 'u9-reflog', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-reflog-nedir';
UPDATE questions SET kavram = 'u9-reflog', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u9-hard-kurtar';
UPDATE questions SET kavram = 'u9-reflog', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u9-silinen-dal';
UPDATE questions SET kavram = 'u9-reflog', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u9-reflog-yerel';
