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
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-origin-main-nedir', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Yerel depondaki `origin/main` nedir?', '{"choices":["Uzaktaki main''in son görüldüğü hâlini gösteren yerel işaretçi","GitHub''daki main dalının kendisi; her an canlı güncellenir","main dalının yedeği; her commit''te kendiliğinden kopyalanır","origin adlı ekip arkadaşının kişisel dalı"]}', '{"index":0}', '`origin/main` bir **uzak izleme dalıdır**: Git onu yalnızca `fetch`, `pull` ve `push` sırasında günceller. Arada GitHub''da olanları bilmez; bu yüzden "son görülen hâl" denir.', 1, '10. ünite · Uzak izleme dalları ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-origin-adi', 'git', 'gt-u10', 10, 'tf', 'derived', '`origin` özel bir anahtar kelime değildir; `git clone` uzak depoya varsayılan olarak bu adı verir ve istersen değiştirebilirsin.', '{}', '{"value":true}', 'Doğru. `origin` yalnızca bir takma addır. `git remote rename origin github` ile değiştirilebilir; fork akışında ikinci uzak depo genellikle `upstream` adını alır.', 1, '10. ünite · Uzak izleme dalları ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-origin-commit', 'git', 'gt-u10', 10, 'mcq', 'derived', '`git switch origin/main` yazıp orada commit atmaya çalışan biri ne yaşar?', '{"choices":["Kopuk HEAD''e düşer; uzak izleme dalına commit atılmaz","Commit doğrudan GitHub''daki main''e gider","origin/main ilerler, sonra push gerekmez","Git commit''i reddeder ve depoyu kilitler"]}', '{"index":0}', 'Uzak izleme dalları yalnızca Git''in kendisi tarafından taşınır. Onlara geçince HEAD kopuk olur; çalışmak için `git switch main` (ya da `git switch -c yeni-dal`) gerekir.', 2, '10. ünite · Uzak izleme dalları ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-upstream-nedir', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Bir dalın **upstream**''i (izlediği dal) ne işe yarar?', '{"choices":["Düz git push ve git pull''un hangi uzak dalla çalışacağını söyler","Dalın hangi daldan açıldığını kaydeder","Dalın silinmesini engeller","Dalın commit''lerini her push''ta otomatik olarak uzağa yedekler"]}', '{"index":0}', 'Upstream ayarlıysa `git push` ve `git pull` argümansız çalışır; `git status` de "ahead 2" ya da "behind 1" diye bu dalla karşılaştırır.', 1, '10. ünite · Uzak izleme dalları ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-push-u', 'git', 'gt-u10', 10, 'fill', 'derived', '`ozellik` dalını ilk kez `origin`''e gönderen ve aynı anda upstream''ini ayarlayan komutu yaz.', '{"blanks":1}', '{"blanks":[["git push -u origin ozellik","git push --set-upstream origin ozellik"]]}', '`-u` (`--set-upstream`) push ile birlikte `branch.ozellik.remote` ve `branch.ozellik.merge` ayarlarını yazar. Sonraki seferlerde düz `git push` yeter.', 1, '10. ünite · Uzak izleme dalları ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-ahead-behind', 'git', 'gt-u10', 10, 'mcq', 'derived', '`git status` şunu yazıyor: `Your branch is ahead of ''origin/main'' by 2 commits.` Bu ne demektir?', '{"choices":["Yerelde henüz push edilmemiş iki commit var","Uzakta senin almadığın iki commit var","İki commit çakışıyor","main ile origin/main arasında iki dosya farklı"]}', '{"index":0}', '"ahead" senin önde olduğun, yani push bekleyen commit sayısıdır. "behind" ise uzakta olup henüz almadığın commit''lerdir; ikisi birden varsa dallar ayrışmıştır.', 2, '10. ünite · Uzak izleme dalları ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-status-guncel-mi', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Sabah `git status` "Your branch is up to date with ''origin/main''" diyor. Ekip arkadaşın ise gece main''e push ettiğini söylüyor. Neden çelişki var?', '{"choices":["status yalnızca son fetch''teki origin/main''e bakar; önce fetch gerekir","Ekip arkadaşının push''u başarısız olmuştur","status yalnızca yerel dalları karşılaştırmaz, hata vermiştir","GitHub push''ları yalnızca ertesi gün görünür"]}', '{"index":0}', '`git status` ağa çıkmaz; `origin/main`''in yerelde kayıtlı hâline bakar. `git fetch` yaptıktan sonra "behind 1" der.', 2, '10. ünite · Uzak izleme dalları ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-branch-vv', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Yerel dalların hangi uzak dalı izlediğini ve kaç commit önde ya da geride olduklarını gösteren komut hangisidir?', '{"choices":["`git branch -vv`","`git remote -v`","`git log --all`","`git status -s`"]}', '{"index":0}', '`git branch -vv` her dalın yanında `[origin/main: ahead 1, behind 2]` gibi bir not yazar. `git remote -v` yalnızca uzak depoların adreslerini listeler.', 1, '10. ünite · Uzak izleme dalları ve upstream', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-fetch-ne-yapar', 'git', 'gt-u10', 10, 'mcq', 'derived', '`git fetch` ne yapar?', '{"choices":["Uzaktaki yenilikleri indirip origin/... dallarını günceller","Uzaktaki yenilikleri indirip bulunduğun dala birleştirir","Yerel commit''leri uzak depoya gönderir","Uzak deponun yeni bir kopyasını ayrı klasöre açar"]}', '{"index":0}', 'fetch güvenlidir: senin dalına ve dosyalarına dokunmaz, yalnızca uzak izleme dallarını günceller. Ne geldiğini `git log main..origin/main` ile inceleyip sonra birleştirebilirsin.', 1, '10. ünite · fetch ile pull farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-pull-esittir', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Varsayılan ayarlarla `git pull` hangi iki adımın birleşimidir?', '{"choices":["fetch ve merge","fetch ve push","clone ve merge","commit ve push"]}', '{"index":0}', '`git pull` önce `git fetch` yapar, sonra upstream dalı bulunduğun dala birleştirir. `--rebase` ile ikinci adım birleştirme yerine rebase olur.', 1, '10. ünite · fetch ile pull farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-fetch-komut', 'git', 'gt-u10', 10, 'fill', 'derived', '`origin`''deki yenilikleri, kendi dalına dokunmadan indiren komutu yaz.', '{"blanks":1}', '{"blanks":[["git fetch","git fetch origin"]]}', '`git fetch` (upstream''in uzak deposundan) ya da açıkça `git fetch origin`. Sonra `git status` "behind" sayısını doğru gösterir.', 1, '10. ünite · fetch ile pull farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-once-bak', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Uzun bir aradan sonra projeye döndün. Ekibin ne yaptığını görmeden kendi dalına hiçbir şey karışsın istemiyorsun. Ne yaparsın?', '{"choices":["git fetch, sonra git log ile origin/main''e bakarım","git pull, sonra beğenmezsem silerim","Depoyu silip yeniden klonlarım","git push --force ile kendi hâlimi korurum"]}', '{"index":0}', 'fetch gelenleri yalnızca `origin/...` dallarına koyar; `git log --oneline main..origin/main` gelecek commit''leri listeler. Karar verince `git merge` ya da `git pull`.', 1, '10. ünite · fetch ile pull farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-ayrismis-pull', 'git', 'gt-u10', 10, 'mcq', 'derived', '`git pull` şu hatayı veriyor: `fatal: Need to specify how to reconcile divergent branches.` Bu ne anlama gelir?', '{"choices":["İki tarafta da öbüründe olmayan commit var; birleştirme yolunu seçmelisin","Uzak depo silinmiş","Çalışma dizininde henüz commit''lenmemiş değişiklikler duruyor","Upstream ayarı yapılmamış"]}', '{"index":0}', 'Git 2.27''den beri ayrışmış dallarda pull sessizce birleştirme yapmaz. `git pull --no-rebase` (birleştir), `git pull --rebase` (üstüne diz) ya da kalıcı ayar `git config pull.rebase true`.', 2, '10. ünite · fetch ile pull farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-pull-rebase-komut', 'git', 'gt-u10', 10, 'fill', 'derived', 'Uzaktaki commit''leri alıp kendi yerel commit''lerini onların üstüne dizen pull komutunu yaz.', '{"blanks":1}', '{"blanks":[["git pull --rebase","git pull -r","git pull --rebase origin main"]]}', '`git pull --rebase` birleştirme commit''i oluşturmaz; geçmiş düz kalır. Yerel commit''lerinin kimlikleri değişir, ama henüz push etmediğin için sorun olmaz.', 1, '10. ünite · fetch ile pull farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-pull-ff', 'git', 'gt-u10', 10, 'tf', 'derived', 'Yerelde yeni commit yoksa `git pull` yalnızca ileri sarar (fast-forward); birleştirme commit''i oluşmaz.', '{}', '{"value":true}', 'Doğru. Dal ayrışmadıysa merge de rebase de gerekmez; Git dalı uzaktakinin ucuna kaydırır.', 1, '10. ünite · fetch ile pull farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-fetch-first', 'git', 'gt-u10', 10, 'mcq', 'derived', '`git push` şunu söylüyor: `! [rejected] main -> main (fetch first)`. En doğru adım hangisidir?', '{"choices":["Önce git pull ile uzaktakini alır, sonra yeniden push ederim","git push --force ile kendi hâlimi gönderirim","Yeni bir dal açıp oraya push ederim, main''i unuturum","Depoyu silip yeniden klonlarım"]}', '{"index":0}', 'Reddin nedeni, biri senden önce push etmiş olmasıdır. `git pull` (ya da `git pull --rebase`) onun işini alır; çakışma varsa çözülür; sonra push geçer. `--force` onun commit''lerini siler.', 1, '10. ünite · Reddedilen push ve çözümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-neden-red', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Git bir push''u neden reddeder?', '{"choices":["Uzak dalın ucu, gönderdiğin geçmişin içinde yer almıyorsa","Gönderilen commit''ler bir günden eskiyse","Commit mesajları İngilizce değilse","Aynı dosya aynı gün iki farklı kişi tarafından düzenlendiyse"]}', '{"index":0}', 'Push yalnızca ileri sarma ise kabul edilir: uzaktaki uç, senin geçmişinin bir atası olmalı. Değilse kabul etmek uzaktaki commit''leri kaybettirirdi.', 1, '10. ünite · Reddedilen push ve çözümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-fetch-first-non-ff', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Ret mesajında "fetch first" ile "non-fast-forward" arasındaki fark nedir?', '{"choices":["fetch first: uzaktaki commit''ler sende hiç yok; non-ff: var ama gerisindesin","fetch first yalnızca ilk push''ta, non-ff sonraki push''larda çıkar","fetch first --force ile, non-ff --force olmadan çözülür","İkisi aynıdır, yalnızca Git sürümüne göre değişir"]}', '{"index":0}', 'Git, uzaktaki ucu yerel nesnelerinde bulamazsa "fetch first" der. fetch yaptıysan ama birleştirmediysen ucu tanır ve "non-fast-forward" der. İkisinin çözümü de önce birleştirmektir.', 3, '10. ünite · Reddedilen push ve çözümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-red-sonra-cakisma', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Push reddedildi, `git pull` yaptın ve aynı dosyada çakışma çıktı. Sıradaki adımlar hangisidir?', '{"choices":["Çakışmayı çöz, git add, git commit, sonra git push","git push --force, çakışma kendiliğinden kaybolur","git merge --abort, sonra yine git push","Dosyayı silip git push"]}', '{"index":0}', 'pull bir birleştirmedir; çakışma 7. ünitedeki gibi çözülür. Birleştirme commit''iyle birlikte geçmişin uzaktakini içerir ve push artık ileri sarmadır.', 2, '10. ünite · Reddedilen push ve çözümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-korumali-red', 'git', 'gt-u10', 10, 'tf', 'derived', 'Push reddi her zaman başkasının senden önce push etmesinden kaynaklanır.', '{}', '{"value":false}', 'Yanlış. Korumalı dala doğrudan push yasağı (13. ünite), yetki eksikliği ya da push protection''ın gizli anahtar bulması (14. ünite) da push''u reddettirir. Mesajı okumak her zaman ilk adımdır.', 1, '10. ünite · Reddedilen push ve çözümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-kucuk-sik-push', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Ekibinle aynı dalda çalışıyorsun ve sık sık ret alıyorsun. Hangi alışkanlık en çok işe yarar?', '{"choices":["Push''tan önce pull --rebase ve sık, küçük push''lar","Bütün işi hafta sonunda tek push''ta göndermek","Her push''u --force ile yapmak","Push''tan önce dosyaları kilitlemek"]}', '{"index":0}', 'Ne kadar sık alıp gönderirsen ayrışma o kadar küçük kalır. Daha da iyisi herkesin kendi dalında çalışıp PR açmasıdır.', 1, '10. ünite · Reddedilen push ve çözümü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-force-tehlike', 'git', 'gt-u10', 10, 'mcq', 'derived', '`git push --force` neden tehlikelidir?', '{"choices":["Uzak dalı seninkiyle ezer, başkalarının commit''leri kaybolabilir","Yerel commit''lerini siler","Yerel dallarının hepsini aynı anda uzak depoya gönderir","Depoyu herkese açık yapar"]}', '{"index":0}', '--force "uzaktaki ne olursa olsun benimkini yaz" demektir. Arada biri push ettiyse onun commit''leri dalda görünmez olur.', 1, '10. ünite · --force ve --force-with-lease', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-lease', 'git', 'gt-u10', 10, 'mcq', 'derived', '`--force-with-lease` düz `--force`''tan farklı olarak neyi denetler?', '{"choices":["Uzak dalın hâlâ son gördüğün yerde olup olmadığını","Gönderilen commit''lerin GPG ile imzalı olup olmadığını","Dalın korumalı olup olmadığını","Push edilen commit sayısını"]}', '{"index":0}', 'Lease, uzaktaki ucun `origin/dal`''da kayıtlı değerle aynı olmasını şart koşar. Biri arada push ettiyse `(stale info)` ile reddedilir ve onun işi ezilmez.', 2, '10. ünite · --force ve --force-with-lease', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-lease-komut', 'git', 'gt-u10', 10, 'fill', 'derived', 'Kendi özellik dalında rebase yaptın; dalı, başkasının arada push ettiği bir şeyi ezmeden zorla gönderen komutu yaz.', '{"blanks":1}', '{"blanks":[["git push --force-with-lease","git push --force-with-lease origin"]]}', '`git push --force-with-lease` yeniden yazılmış geçmişi gönderir ama uzak dal beklenmedik biçimde değiştiyse durur.', 1, '10. ünite · --force ve --force-with-lease', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-force-ne-zaman', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Hangi durumda zorla push (with-lease) makul bir seçimdir?', '{"choices":["Yalnızca senin çalıştığın özellik dalını rebase ettiğinde","main''de bir commit''i beğenmediğinde","Push reddedildiğinde, pull yapmaya üşendiğinde","Ekip arkadaşının hatalı commit''ini silmek istediğinde"]}', '{"index":0}', 'Zorla push, dalın geçmişini yeniden yazdığını bilen tek kişi sensen kabul edilebilir. Paylaşılan dallarda (main, dev, test) hata revert ile geri alınır.', 1, '10. ünite · --force ve --force-with-lease', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-force-kurtarma', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Ekip arkadaşın main''e yanlışlıkla `--force` push etti ve senin dünkü iki commit''in uzaktan kayboldu. Senin bilgisayarında main hâlâ eski hâlinde. Ne yaparsın?', '{"choices":["Kendi main''imdeki commit''leri bir dala alır, PR ile geri getiririm","git pull yapıp kaybı kabul ederim","Hemen ben de --force ile kendi main''imi gönderirim","Depoyu silip yeniden klonlarım"]}', '{"index":0}', 'Commit''ler senin deponda duruyor: `git branch kurtarma main` ile koru, sonra ekiple konuşup PR''la ya da cherry-pick''le geri getir. Karşı --force, arkadaşının o arada attığı commit''leri de silebilir. Kalıcı çözüm main''i korumaya almaktır.', 3, '10. ünite · --force ve --force-with-lease', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-remote-v', 'git', 'gt-u10', 10, 'fill', 'derived', 'Depoya bağlı uzak depoların adlarını ve adreslerini gösteren komutu yaz.', '{"blanks":1}', '{"blanks":[["git remote -v","git remote --verbose"]]}', '`git remote -v` her uzak depo için fetch ve push adresini yazar. Yalnızca adlar için `git remote`.', 1, '10. ünite · Uzak depoları yönetmek ve budamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-set-url', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Depo GitHub''da başka bir organizasyona taşındı ve adresi değişti. Yereldeki bağlantıyı nasıl güncellersin?', '{"choices":["git remote set-url origin <yeni adres>","git remote add origin <yeni adres>","Depoyu silip yeni adresten klonlarım","git push --force <yeni adres>"]}', '{"index":0}', '`set-url` adresi değiştirir, geçmiş ve dallar yerinde kalır. `remote add origin` ise "remote origin already exists" hatası verir.', 1, '10. ünite · Uzak depoları yönetmek ve budamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-prune', 'git', 'gt-u10', 10, 'mcq', 'derived', 'GitHub''da silinmiş dallar `git branch -r` listende hâlâ `origin/eski-dal` olarak görünüyor. Bunları temizleyen komut hangisidir?', '{"choices":["`git fetch --prune`","`git branch -D origin/eski-dal`","`git remote remove origin`","`git pull --all`"]}', '{"index":0}', '`git fetch --prune` (`-p`) uzakta artık olmayan uzak izleme dallarını siler. Hep böyle olsun istersen `git config --global fetch.prune true`.', 2, '10. ünite · Uzak depoları yönetmek ve budamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-uzak-dal-sil', 'git', 'gt-u10', 10, 'fill', 'derived', 'Birleşmiş `ozellik` dalını uzak depodan (origin) silen komutu yaz.', '{"blanks":1}', '{"blanks":[["git push origin --delete ozellik","git push origin -d ozellik","git push --delete origin ozellik","git push origin :ozellik"]]}', '`git push origin --delete ozellik` uzak dalı siler. Yerel dal için ayrıca `git branch -d ozellik` gerekir; GitHub''da PR birleşince "Delete branch" düğmesi aynı işi yapar.', 1, '10. ünite · Uzak depoları yönetmek ve budamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-uzaktan-dal-al', 'git', 'gt-u10', 10, 'mcq', 'derived', 'Ekip arkadaşın `ozellik` dalını push etti. `git fetch`''ten sonra `git switch ozellik` yazınca ne olur?', '{"choices":["origin/ozellik''i izleyen yerel bir ozellik dalı açılır","Hata verir; önce git branch ozellik gerekir","Kopuk HEAD''de origin/ozellik''e geçilir","Arkadaşının bilgisayarındaki dala bağlanılır"]}', '{"index":0}', 'Yerelde o adla dal yoksa ve tek bir uzak depoda varsa `git switch` izleyen bir dal açar: `branch ''ozellik'' set up to track ''origin/ozellik''.`', 1, '10. ünite · Uzak depoları yönetmek ve budamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u10-iki-remote', 'git', 'gt-u10', 10, 'tf', 'derived', 'Bir depo aynı anda birden çok uzak depoya bağlı olabilir; örneğin `origin` GitHub''a, `gitlab` GitLab''a.', '{}', '{"value":true}', 'Doğru. Her uzak depo ayrı adla eklenir; `git push gitlab main` gibi adla seçilir. Fork akışındaki `origin` ve `upstream` de böyledir.', 1, '10. ünite · Uzak depoları yönetmek ve budamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-ne-yapar', 'git', 'gt-u11', 11, 'mcq', 'derived', '`ozellik` dalındayken `git rebase main` ne yapar?', '{"choices":["ozellik''in kendi commit''lerini main''in ucunun üstüne yeniden uygular","main''i ozellik dalının içine birleştirme commit''iyle katar","ozellik dalını silip main''e geçer","main dalını ozellik''in ucuna taşır"]}', '{"index":0}', 'Rebase, dalın main''den ayrıldıktan sonraki commit''lerini tek tek alır ve main''in şu anki ucunun üstüne yeniden uygular. Sonuçta geçmiş düz bir çizgi olur, birleştirme commit''i oluşmaz.', 1, '11. ünite · Rebase nedir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-yeni-hash', 'git', 'gt-u11', 11, 'tf', 'derived', 'Rebase''den sonra taşınan commit''lerin içeriği aynı kalsa bile hash''leri değişir.', '{}', '{"value":true}', 'Doğru. Commit''in hash''i ebeveynini de kapsar. Ebeveyn değişince yeni bir commit nesnesi yazılır; eski commit''ler bir süre reflog''da kalır.', 1, '11. ünite · Rebase nedir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-eski-commitler', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Rebase''den sonra eski (taşınmadan önceki) commit''lere ne olur?', '{"choices":["Hemen silinmez, reflog''dan bulunup geri alınabilir","Rebase biter bitmez diskten kalıcı olarak silinir","Uzak depoya yedek olarak gönderilir","main dalına otomatik olarak eklenir"]}', '{"index":0}', 'Eski commit''ler artık hiçbir dalda görünmez ama nesne deposunda durur. `git reflog` ile eski hash bulunur ve `git reset --hard <hash>` ile rebase geri alınabilir.', 2, '11. ünite · Rebase nedir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-rebase-komut', 'git', 'gt-u11', 11, 'fill', 'derived', 'Bulunduğun dalı `main` dalının ucunun üstüne taşıyan komutu yaz.', '{"blanks":1}', '{"blanks":[["git rebase main"]]}', '`git rebase main` dalın main''den sonra gelen commit''lerini main''in ucuna yeniden uygular.', 1, '11. ünite · Rebase nedir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-zaten-guncel', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Dalın zaten main''in ucundan açılmışsa ve main o zamandan beri ilerlememişse `git rebase main` ne der?', '{"choices":["Dalın zaten güncel olduğunu söyler, hiçbir şey yapmaz","Bütün commit''leri yine de yeni hash''lerle yeniden yazar","Hata verip rebase''i yarıda bırakır","main''i dalın ucuna ileri sarar"]}', '{"index":0}', 'Taşınacak bir taban farkı yoksa Git "Current branch ozellik is up to date." yazar ve geçmişe dokunmaz.', 2, '11. ünite · Rebase nedir', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-fark', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Merge ile rebase arasındaki temel fark nedir?', '{"choices":["Merge geçmişi olduğu gibi korur, rebase commit''leri yeniden yazarak düz bir çizgi kurar","Merge yalnızca uzak dallarda, rebase yalnızca yerel dallarda çalışır","Rebase çakışma çıkarmaz, merge çıkarır","Merge commit''leri siler, rebase saklar"]}', '{"index":0}', 'İkisi de iki dalın işini bir araya getirir. Merge bir birleştirme commit''iyle olanı olduğu gibi kaydeder; rebase ise commit''leri yeni tabana taşır ve geçmişi doğrusal gösterir.', 1, '11. ünite · Merge mi rebase mi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-duz-gecmis', 'git', 'gt-u11', 11, 'tf', 'derived', 'Rebase ile birleştirilen dallarda çakışma hiç çıkmaz; çakışmadan kaçmak için rebase kullanılır.', '{}', '{"value":false}', 'Yanlış. Aynı satırlara iki taraf dokunduysa rebase de çakışır; üstelik her commit ayrı uygulandığından aynı çakışmayla birden çok kez karşılaşılabilir.', 1, '11. ünite · Merge mi rebase mi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-ne-zaman-rebase', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Kendi bilgisayarındaki, henüz kimseyle paylaşmadığın `ozellik` dalını main''deki son değişikliklerle güncellemek istiyorsun. Ekip düz geçmiş seviyor. Ne yaparsın?', '{"choices":["git rebase main ile dalı main''in ucuna taşırım","main''i ozellik''e merge eder, sonra main''i siler","git push --force origin main yaparım","Dalı silip baştan yazarım"]}', '{"index":0}', 'Dal yalnızca sende olduğu için geçmişini yeniden yazmak kimseyi etkilemez. Rebase, dalı main''in ucundan açılmış gibi gösterir ve ileride düz bir PR çıkarır.', 2, '11. ünite · Merge mi rebase mi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-ne-zaman-merge', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Üç kişinin birlikte çalıştığı ve GitHub''a gönderilmiş `test` dalına `dev`''deki bir düzeltmeyi taşımak gerekiyor. Hangisi daha güvenlidir?', '{"choices":["Ortak dalda geçmişi yeniden yazmayan bir yol: merge ya da PR","test dalını dev''in üstüne rebase edip force push","test dalını silip dev''den yeniden açmak","Herkese git reset --hard yaptırmak"]}', '{"index":0}', 'Paylaşılmış bir dalın geçmişi yeniden yazılırsa herkesin yerel kopyası ayrışır. Ortak dallarda merge (ya da PR ile birleştirme) kullanılır; rebase yalnızca kendi dalında yapılır.', 2, '11. ünite · Merge mi rebase mi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-rebase-merge-pr', 'git', 'gt-u11', 11, 'mcq', 'derived', 'GitHub''da PR birleştirirken "Rebase and merge" seçilirse ne olur?', '{"choices":["Commit''ler hedefin ucuna tek tek yeniden yazılır, çatal kalmaz","Bütün commit''ler tek bir commit''e sıkıştırılır","Bir birleştirme commit''i oluşur ve kaynak dal hemen silinir","PR kapatılır ama değişiklikler hedefe girmez"]}', '{"index":0}', '"Rebase and merge" dalın commit''lerini sırasıyla hedefin üstüne koyar. "Squash and merge" hepsini tek commit yapar; "Create a merge commit" ise birleştirme commit''i yazar.', 3, '11. ünite · Merge mi rebase mi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-graf-okuma', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Bir dalın geçmişinde iki ebeveynli commit''ler yok, her şey tek çizgi hâlinde. Bu ekip büyük olasılıkla nasıl birleştiriyor?', '{"choices":["Rebase ya da squash ile","Her zaman --no-ff merge ile","Cherry-pick''i hiç kullanmadan merge ile","Bu geçmişten hiçbir şey anlaşılamaz"]}', '{"index":0}', 'Birleştirme commit''i iki ebeveynlidir ve grafikte çatal bırakır. Tamamen düz bir geçmiş, dalların rebase ya da squash ile birleştirildiğini gösterir.', 2, '11. ünite · Merge mi rebase mi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-i-ne', 'git', 'gt-u11', 11, 'mcq', 'derived', '`git rebase -i HEAD~3` ne yapar?', '{"choices":["Son üç commit''i düzenlemen için bir yapılacaklar listesinde açar","Son üç commit''i siler","Son üç commit''i tek tek yeniden imzalayıp uzak depoya gönderir","Üç commit öncesine kopuk HEAD olarak geçer"]}', '{"index":0}', 'Etkileşimli rebase bir yapılacaklar listesi (todo) açar. Her satırın başındaki komutu (pick, reword, squash, fixup, drop, edit) değiştirip satırların yerini oynatarak geçmişi düzenlersin.', 1, '11. ünite · Etkileşimli rebase: squash, reword, drop, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-squash', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Todo listesinde bir satırın başına `squash` yazmak ne yapar?', '{"choices":["Commit''i bir öncekine katar, iki mesajı birlikte düzenletir","O commit''i tamamen siler","O commit''in yalnızca mesajını değiştirir","O commit''te durur, dosyaları düzenlemene izin verir"]}', '{"index":0}', '`squash` commit''i bir üstteki satırla birleştirir ve mesajları birlikte düzenlemeni ister. Mesajı atıp yalnızca değişikliği katmak istersen `fixup` kullanılır.', 1, '11. ünite · Etkileşimli rebase: squash, reword, drop, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-fixup', 'git', 'gt-u11', 11, 'mcq', 'derived', '`squash` ile `fixup` arasındaki fark nedir?', '{"choices":["fixup mesajı atar, squash mesajları birleştirmeni ister","fixup commit''i siler, squash saklar","fixup yalnızca listedeki son commit''te kullanılabilir","İkisi arasında hiçbir fark yoktur"]}', '{"index":0}', 'İkisi de commit''i bir öncekine katar. `fixup` yeni commit''in mesajını sessizce atar; "yazım hatası düzelt" gibi küçük commit''leri temizlemek için idealdir.', 2, '11. ünite · Etkileşimli rebase: squash, reword, drop, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-reword', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Todo listesinde yalnızca bir commit''in mesajını değiştirmek için hangi komut kullanılır?', '{"choices":["reword","edit","pick","drop"]}', '{"index":0}', '`reword` commit''i olduğu gibi uygular, sonra mesajını düzenlemen için düzenleyiciyi açar. `edit` ise commit''te durur ve içeriğini de değiştirmene izin verir.', 1, '11. ünite · Etkileşimli rebase: squash, reword, drop, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-drop', 'git', 'gt-u11', 11, 'tf', 'derived', 'Etkileşimli rebase''de bir satırı silmek ya da başına `drop` yazmak o commit''i geçmişten çıkarır.', '{}', '{"value":true}', 'Doğru. `drop` yazılan (ya da listeden silinen) commit yeniden uygulanmaz; değişikliği yeni geçmişte yer almaz.', 1, '11. ünite · Etkileşimli rebase: squash, reword, drop, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-sira', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Todo listesinde iki satırın yerini değiştirirsen ne olur?', '{"choices":["Commit''ler yeni sırayla uygulanır","Git listeyi kendi sırasına geri çevirir","Rebase hemen iptal edilir","İki commit tek commit''e birleşir"]}', '{"index":0}', 'Liste yukarıdan aşağıya uygulanır; satırların sırası yeni geçmişin sırasıdır. Birbirine bağlı değişikliklerin sırası değişirse çakışma çıkabilir.', 2, '11. ünite · Etkileşimli rebase: squash, reword, drop, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-squash-ilk', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Todo listesinin **ilk** satırına `squash` yazarsan ne olur?', '{"choices":["Git hata verir, katılacak bir önceki commit yoktur","İlk commit silinir","Listedeki bütün commit''ler tek bir commit olur","Git satırı sessizce pick sayar"]}', '{"index":0}', 'squash ve fixup kendinden önceki commit''e katılır. İlk satırda böyle bir commit olmadığından Git "cannot ''squash'' without a previous commit" der ve listeyi düzeltmeni ister.', 3, '11. ünite · Etkileşimli rebase: squash, reword, drop, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-pr-oncesi', 'git', 'gt-u11', 11, 'mcq', 'derived', 'PR açmadan önce dalında şu commit''ler var: "login formu", "yazım hatası", "bir yazım hatası daha", "login testleri". Henüz kimseye göndermedin. İnceleyen için en temiz geçmişi nasıl kurarsın?', '{"choices":["rebase -i ile yazım düzeltmelerini fixup yapıp forma katarım","Dört commit''i olduğu gibi gönderirim, inceleyen anlar","Dalı silip bütün işi tek dosyaya kopyalarım","git push --force ile main''e gönderirim"]}', '{"index":0}', 'Yazım düzeltmeleri anlamlı birer adım değildir. `fixup` ile ilgili commit''e katılırlar ve PR''da iki net commit kalır: form ve testler.', 2, '11. ünite · Etkileşimli rebase: squash, reword, drop, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-i-komut', 'git', 'gt-u11', 11, 'fill', 'derived', '`ozellik` dalındasın. Dalın `main`''den ayrıldıktan sonraki bütün commit''lerini etkileşimli olarak düzenlemeyi açan komutu yaz.', '{"blanks":1}', '{"blanks":[["git rebase -i main","git rebase --interactive main"]]}', '`git rebase -i main` dalın main''de olmayan commit''lerini yapılacaklar listesinde açar. Taban aynı kaldığından yalnızca bu commit''ler düzenlenir; `HEAD~4` gibi bir sayı da verilebilir.', 1, '11. ünite · Etkileşimli rebase: squash, reword, drop, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-edit', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Todo listesinde `edit` yazılan commit''e gelince Git ne yapar?', '{"choices":["Durur; commit''i --amend ile değiştirip --continue dersin","Commit''i siler ve devam eder","Yalnızca commit mesajını düzenlemen için düzenleyici açar","Commit''i başka bir dala taşır"]}', '{"index":0}', '`edit` commit''i uygular ve durur. Bu sırada commit''i değiştirebilir, hatta ikiye bölebilirsin. Bitince `git rebase --continue` kalan satırları uygular.', 3, '11. ünite · Etkileşimli rebase: squash, reword, drop, sıra', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-kural', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Rebase''in "altın kuralı" nedir?', '{"choices":["Başkalarının da kullandığı, gönderilmiş commit''leri rebase etme","Rebase''i yalnızca main dalında yap","Her commit''ten sonra rebase yap","Rebase''den önce depoyu her zaman yeniden klonla"]}', '{"index":0}', 'Paylaşılmış commit''ler yeniden yazılırsa ekip arkadaşlarının elindeki kopyalar eski commit''lere dayanır ve geçmişler ayrışır. Kendi gönderilmemiş commit''lerin ise serbestçe düzenlenebilir.', 1, '11. ünite · Paylaşılmış geçmişi yeniden yazmamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-push-sonrasi', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Kendi özellik dalını GitHub''a gönderdin, PR açık; dalda yalnızca sen çalışıyorsun. İncelemeden sonra commit''leri squash etmek istiyorsun. Rebase sonrası push reddedilir. Doğru hamle nedir?', '{"choices":["Dalın yalnızca sende olduğundan emin olup git push --force-with-lease yaparım","git pull ile eski commit''leri geri çekip yeniden gönderirim","Dalı main''e doğrudan push ederim","Rebase''i bırakıp main''i force push ederim"]}', '{"index":0}', 'Kendi PR dalında geçmişi düzenlemek yaygındır. Push reddi beklenen bir şeydir; `--force-with-lease` arada başkası push ettiyse yine reddeder, bu yüzden düz `--force`''tan güvenlidir. Burada `git pull` eski commit''leri geri birleştirir ve temizliği bozar.', 2, '11. ünite · Paylaşılmış geçmişi yeniden yazmamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-ortak-dal', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Bir ekip arkadaşın ortak `dev` dalını rebase edip force push etmiş. Senin yerel `dev`''inde push edilmemiş bir commit var ve `git pull` çok sayıda tuhaf çakışma veriyor. En temiz kurtarma hangisi?', '{"choices":["Commit''imi bir dala saklar, dev''i origin/dev''e eşitler, üstüne alırım","git push --force ile kendi dev''imi geri yüklerim","Bütün çakışmaları tek tek elle çözüp birleştirme commit''ini gönderirim","Depoyu silip işimi kaybetmeyi kabul ederim"]}', '{"index":0}', 'Eski geçmişi yeni geçmişle birleştirmek aynı değişiklikleri iki kez getirir. Önce kendi commit''ini bir dalla koru, `git reset --hard origin/dev` ile eşitle, sonra commit''ini `cherry-pick` ya da rebase ile yeni ucun üstüne al. Ardından ekiple ortak dalı yeniden yazmamayı konuş.', 3, '11. ünite · Paylaşılmış geçmişi yeniden yazmamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-korumali', 'git', 'gt-u11', 11, 'tf', 'derived', 'GitHub''da korumalı dallarda force push genellikle tamamen kapalıdır; bu da altın kuralı platform düzeyinde uygular.', '{}', '{"value":true}', 'Doğru. Dal koruma kuralları varsayılan olarak force push''u ve dal silmeyi engeller. Cargo Pilot akışında main, test ve dev bu yüzden korumalıdır.', 1, '11. ünite · Paylaşılmış geçmişi yeniden yazmamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-kendi-dal', 'git', 'gt-u11', 11, 'tf', 'derived', 'Henüz hiç push etmediğin yerel dalında da rebase yapmak tehlikelidir; çünkü ekip arkadaşların bu commit''leri kullanıyor olabilir.', '{}', '{"value":false}', 'Yanlış. Commit''ler hiç gönderilmediyse kimsenin elinde değildir. Kural yalnızca paylaşılmış geçmiş içindir; yerel dalını istediğin kadar düzenleyebilirsin.', 1, '11. ünite · Paylaşılmış geçmişi yeniden yazmamak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-continue', 'git', 'gt-u11', 11, 'fill', 'derived', 'Rebase bir commit''te çakışmayla durdu. Dosyayı düzelttin ve `git add` ile hazırladın. Devam etmek için ne yazarsın?', '{"blanks":1}', '{"blanks":[["git rebase --continue"]]}', '`git rebase --continue` çözülen commit''i yazar ve listedeki sıradaki commit''e geçer. Rebase sırasında `git commit` yazmaya gerek yoktur.', 1, '11. ünite · Rebase''de çakışma: continue, skip, abort', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-abort', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Rebase''in ortasında işler karıştı ve her şeyi rebase başlamadan önceki hâline döndürmek istiyorsun. Hangi komut?', '{"choices":["git rebase --abort","git rebase --skip","git reset --soft HEAD","git rebase --quit"]}', '{"index":0}', '`--abort` dalı ve çalışma alanını rebase''den önceki hâline geri koyar. `--skip` yalnızca o anki commit''i atlar; `--quit` ise rebase''i bırakır ama HEAD''i olduğu yerde bırakır.', 1, '11. ünite · Rebase''de çakışma: continue, skip, abort', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-skip', 'git', 'gt-u11', 11, 'mcq', 'derived', '`git rebase --skip` ne yapar?', '{"choices":["Çakışan commit''i yeni geçmişe almadan sıradakine geçer","Çakışmayı otomatik çözer","Rebase''i iptal edip başa döner","Kalan bütün commit''leri atlayıp rebase''i bitirir"]}', '{"index":0}', '`--skip` o anki commit''i bırakır; değişikliği yeni geçmişte yer almaz. Commit''in işi hedefte zaten varsa (örneğin main''e başka yoldan girmişse) işe yarar.', 2, '11. ünite · Rebase''de çakışma: continue, skip, abort', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-ours-theirs', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Rebase sırasında çakışmada `--ours` hangi tarafı gösterir?', '{"choices":["Üstüne taşındığın tabanı ve o ana kadar uygulananları","Senin dalının o an taşınmakta olan commit''ini","Ortak atayı","Uzak depodaki hâli"]}', '{"index":0}', 'Rebase, taban üstünde yeni bir HEAD kurup senin commit''lerini ona uygular. Bu yüzden merge''tekinin tersine `--ours` taban tarafı, `--theirs` ise senin taşınan commit''indir.', 3, '11. ünite · Rebase''de çakışma: continue, skip, abort', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-tekrar-cakisma', 'git', 'gt-u11', 11, 'mcq', 'derived', 'Beş commit''lik dalını rebase ediyorsun ve aynı dosyada üçüncü kez çakışma çıkıyor. Ne düşünmelisin?', '{"choices":["Commit''ler tek tek uygulandığı için aynı yer yine çakışabilir","Git bozulmuştur, depoyu yeniden klonlarım","Her çakışmada --skip yaparım","Rebase''de üç çakışmadan fazlası olmaz, sonraki otomatik çözülür"]}', '{"index":0}', 'Rebase commit''leri tek tek uyguladığından aynı bölgeye dokunan her commit yeniden çakışabilir. Ya sabırla çözülür ya da önce `git rebase -i` ile commit''ler birleştirilip çakışma tek seferde çözülür. `--skip` işini kaybettirir.', 2, '11. ünite · Rebase''de çakışma: continue, skip, abort', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u11-status-rebase', 'git', 'gt-u11', 11, 'tf', 'derived', 'Rebase çakışmayla durduğunda `git status` rebase''in sürdüğünü, hangi commit''lerin uygulandığını ve sırada ne olduğunu gösterir.', '{}', '{"value":true}', 'Doğru. `git status` "interactive rebase in progress" ya da "You are currently rebasing" yazar ve çözüm için `--continue`, `--skip` ve `--abort` seçeneklerini hatırlatır.', 1, '11. ünite · Rebase''de çakışma: continue, skip, abort', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-neden', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Bir ekibin yazılı bir dal akışı (branching strategy) belirlemesinin asıl amacı nedir?', '{"choices":["Herkesin işi aynı yoldan canlıya taşıması","Git komutlarının sayısını en aza indirmek","Commit mesajlarını tek bir kalıba sokmak","GitHub''a daha az para ödemek"]}', '{"index":0}', 'Akış, "dal nereden açılır, nereye birleşir, ne zaman canlıya çıkar" sorularının ortak cevabıdır. Herkes aynı kurala uyunca kimse yarım işi canlıya taşımaz, kimse ne yapacağını tahmin etmek zorunda kalmaz.', 1, '12. ünite · Neden bir dal akışı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-tek-dogru', 'git', 'gt-u12', 12, 'tf', 'derived', 'Her ekip için doğru olan tek bir dal akışı vardır; diğerleri yanlıştır.', '{}', '{"value":false}', 'Yanlış. Günde birçok kez canlıya çıkan küçük bir ekip için GitHub Flow, sürüm sürüm ilerleyen ve ayrı test ortamı olan bir ekip için üç ortamlı akış ya da Git Flow uygun olabilir. Akış ekibin ihtiyacına göre seçilir.', 1, '12. ünite · Neden bir dal akışı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-karar', 'git', 'gt-u12', 12, 'mcq', 'derived', 'İki kişilik bir ekip bir web sitesini her gün birkaç kez canlıya çıkarıyor, ayrı bir test ortamı yok. Hangi akış en az yük getirir?', '{"choices":["GitHub Flow: main''den dal, PR, birleşince canlı","Git Flow: develop, release ve hotfix dalları","Üç ortamlı akış: dev, test ve main","Herkesin doğrudan main''e push etmesi"]}', '{"index":0}', 'GitHub Flow tek bir uzun ömürlü dalla (main) çalışır: kısa ömürlü dal, PR, inceleme, birleştirme, canlı. Ayrı bir test ortamı ve sürüm takvimi yoksa ek dallar yalnızca yük getirir. Doğrudan main''e push ise incelemeyi atlar.', 2, '12. ünite · Neden bir dal akışı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-adimlar', 'git', 'gt-u12', 12, 'mcq', 'derived', 'GitHub Flow''un sırası hangisidir?', '{"choices":["main''den dal aç, commit''le, PR aç, incelet, birleştir","develop''tan dal aç, release dalına birleştir, etiketle","main''e doğrudan commit''le, sonra PR aç","Dal aç, main''i dala birleştir, dalı canlıya çıkar"]}', '{"index":0}', 'GitHub Flow''da main her zaman canlıya çıkabilir durumdadır. Her iş main''den açılan kısa ömürlü bir dalda yapılır ve PR ile incelenip main''e birleştirilir.', 1, '12. ünite · GitHub Flow ve trunk-based geliştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-main-hazir', 'git', 'gt-u12', 12, 'tf', 'derived', 'GitHub Flow''un temel kuralı, main dalının her an canlıya çıkarılabilir durumda olmasıdır.', '{}', '{"value":true}', 'Doğru. Bu yüzden main''e yalnızca incelenmiş ve testleri geçmiş PR''lar girer.', 1, '12. ünite · GitHub Flow ve trunk-based geliştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-trunk', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Trunk-based geliştirmede dallar nasıldır?', '{"choices":["Çok kısa ömürlüdür; en geç bir iki günde ana dala girer","Aylarca yaşar, sürüm bitince birleştirilir","Hiç kullanılmaz, herkes kendi kopyasında çalışır","Her geliştiricinin kalıcı bir kişisel dalı olur"]}', '{"index":0}', 'Trunk-based geliştirmede herkes sık sık (günde en az bir kez) ana dala (trunk) birleşir. Yarım özellikler "özellik bayrağı" (feature flag) ile gizlenir; uzun ömürlü dallar ve büyük çakışmalar oluşmaz.', 1, '12. ünite · GitHub Flow ve trunk-based geliştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-uzun-dal', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Bir geliştirici bir özellik dalında üç hafta tek başına çalıştı, şimdi PR açınca yüzlerce satırlık çakışma çıktı. Akış açısından asıl sorun nedir?', '{"choices":["Dal çok uzun yaşadı, iş bölünmeliydi","Git''in birleştirme algoritması eskidir","PR yerine doğrudan push etmeliydi","Dalın adı kurallara uygun değildi"]}', '{"index":0}', 'Bir dal ne kadar uzun yaşarsa ana daldan o kadar uzaklaşır. İşi küçük PR''lara bölmek ve ana dalı sık sık kendi dalına almak (merge ya da rebase) çakışmaları küçük tutar.', 2, '12. ünite · GitHub Flow ve trunk-based geliştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-feature-flag', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Trunk-based geliştirmede bitmemiş bir özelliğin kodu ana dala girdiğinde kullanıcılar onu neden görmez?', '{"choices":["Özellik bayrağı kapalı olduğu için kod çalışmaz","Git bitmemiş commit''leri canlıya göndermez","Ana dal canlıya hiç çıkmaz","Kod ayrı bir depoda tutulur"]}', '{"index":0}', 'Özellik bayrağı (feature flag), kodun içinde açılıp kapanabilen bir anahtardır. Kod canlıda durur ama bayrak açılana kadar devreye girmez; böylece yarım iş uzun ömürlü bir dalda beklemez.', 3, '12. ünite · GitHub Flow ve trunk-based geliştirme', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-dallar', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Klasik Git Flow''da günlük geliştirme hangi dalda toplanır?', '{"choices":["develop","main","release","hotfix"]}', '{"index":0}', 'Git Flow''da özellik dalları develop''tan açılır ve develop''a birleşir. main yalnızca yayımlanan sürümleri tutar; release dalı sürüm hazırlığı, hotfix dalı canlıdaki acil hatalar içindir.', 1, '12. ünite · Git Flow: develop, release, hotfix', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-hotfix', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Git Flow''da canlıdaki acil bir hata için hotfix dalı nereden açılır ve nereye birleşir?', '{"choices":["main''den açılır; hem main''e hem develop''a birleşir","develop''tan açılır; yalnızca develop''a birleşir","release''ten açılır; yalnızca release''e birleşir","Herhangi bir daldan açılır; birleştirilmez"]}', '{"index":0}', 'Hotfix canlıdaki kodu düzeltir, bu yüzden main''den açılır. Düzeltme hem main''e (ve yeni bir sürüm etiketine) hem develop''a birleşir; yoksa bir sonraki sürümde hata geri gelir.', 2, '12. ünite · Git Flow: develop, release, hotfix', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-release', 'git', 'gt-u12', 12, 'tf', 'derived', 'Git Flow''da release dalı açıldıktan sonra o dala yeni özellik eklenmez; yalnızca sürüm hazırlığı ve hata düzeltmesi yapılır.', '{}', '{"value":true}', 'Doğru. Yeni özellikler develop''ta birikmeye devam eder; release dalı sürümü dondurur ve hazır olunca main''e birleşip etiketlenir.', 1, '12. ünite · Git Flow: develop, release, hotfix', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-agir', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Ekip Git Flow kullanıyor ama ürün bir web sitesi ve her birleştirme hemen canlıya çıkıyor; release dalları hep tek commit''lik kalıyor. Ne önerirsin?', '{"choices":["Daha hafif bir akışa, GitHub Flow''a geçmeyi","Release dallarının sayısını artırmayı","develop dalını silmeyi ve main''e doğrudan push etmeyi","Her özellik için ayrı bir depo açmayı"]}', '{"index":0}', 'Git Flow sürümleri ayrı ayrı çıkan ürünler için tasarlandı. Sürekli canlıya çıkan bir sitede release adımı boş tören olur; GitHub Flow aynı güvenliği daha az dalla sağlar.', 2, '12. ünite · Git Flow: develop, release, hotfix', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-dallar-ne', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Üç ortamlı akışta main, test ve dev dalları neyi temsil eder?', '{"choices":["Sırasıyla canlı, QA ve geliştirme ortamı","Üç farklı geliştiricinin kişisel dalları","Sırasıyla eski, şimdiki ve gelecek sürüm","Üç ayrı GitHub deposu"]}', '{"index":0}', 'Her ortamın bir dalı vardır: dev''e birleşen kod geliştirme ortamına, test''e birleşen QA''nın denediği test ortamına, main''e birleşen canlıya çıkar.', 1, '12. ünite · Üç ortamlı akış: dev, test, main', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-nereden', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Üç ortamlı akışta (Cargo Pilot kuralları) yeni bir feature dalı hangi daldan açılır?', '{"choices":["test","dev","main","Bir önceki feature dalından"]}', '{"index":0}', 'Dal test''ten açılır. test, canlıya çıkmaya aday ve doğrulanmış kodu tutar. dev''den açılan dal, dev''deki başkalarının yarım işlerini de taşır ve onları test''e sızdırır.', 1, '12. ünite · Üç ortamlı akış: dev, test, main', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-sira', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Bir feature dalının canlıya kadar izlediği yol hangisidir?', '{"choices":["Dal dev''e, sonra test''e PR''lanır; test main''e çıkar","dev''den test''e toptan birleştirme, sonra main''e push","Doğrudan main''e PR, sonra main''den dev''e ve test''e","PR 1 ile test''e, sonra dev''i main''e birleştirme"]}', '{"index":0}', 'Aynı dal iki ayrı PR açar: önce dev''e (geliştirme ortamında dene), sorun yoksa test''e (QA doğrulaması). Canlıya çıkış, test''ten main''e açılan Release PR ile olur.', 2, '12. ünite · Üç ortamlı akış: dev, test, main', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-dev-toptan', 'git', 'gt-u12', 12, 'tf', 'derived', 'Üç ortamlı akışta işler bitince dev dalı toptan test''e birleştirilir.', '{}', '{"value":false}', 'Yanlış. dev''de herkesin yarım ya da henüz onaylanmamış işleri vardır. Toptan birleştirme hepsini test''e (ve sonra canlıya) taşır. Her özellik test''e kendi dalından, kendi PR''ıyla gider.', 1, '12. ünite · Üç ortamlı akış: dev, test, main', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-dev-kirli', 'git', 'gt-u12', 12, 'mcq', 'derived', 'dev''de Mert''in yarım bir ödeme özelliği var. Senin düzeltmen dev''de denendi, şimdi test''e çıkması gerekiyor. Ne yaparsın?', '{"choices":["Kendi feature dalımdan test''e ikinci bir PR açarım","dev''den test''e bir PR açarım","Mert''in işini dev''den silerim","test''i dev''e eşitleyip force push ederim"]}', '{"index":0}', 'Dalın test''ten açıldığı için yalnızca senin commit''lerini taşır. Aynı daldan test''e PR açınca Mert''in yarım işi dev''de kalır. dev''den PR açmak onu da test''e götürür.', 3, '12. ünite · Üç ortamlı akış: dev, test, main', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-yanlis-yer', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Yeni işe başlarken dalını yanlışlıkla dev''den açtın, iki commit attın, henüz push etmedin. En temiz düzeltme hangisi?', '{"choices":["Commit''lerimi test''in üstüne taşırım","Dalı olduğu gibi push edip PR''ı test''e açarım","dev''i test''e birleştiririm ki fark kalmasın","Commit''leri silip işi baştan yazarım"]}', '{"index":0}', 'Dal dev''den açıldıysa dev''deki başkalarının commit''lerini de içerir. `git rebase --onto origin/test origin/dev` (ya da test''ten yeni bir dal açıp kendi commit''lerini cherry-pick etmek) yalnızca senin commit''lerini test''in üstüne taşır.', 2, '12. ünite · Üç ortamlı akış: dev, test, main', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-dal-ac-komut', 'git', 'gt-u12', 12, 'fill', 'derived', '`test`''in GitHub''daki son hâlinden `feature/US-D03e-docker-compose-local` dalını açıp ona geçen komutu yaz (önce fetch yaptığını varsay).', '{"blanks":1}', '{"blanks":[["git switch -c feature/US-D03e-docker-compose-local origin/test","git checkout -b feature/US-D03e-docker-compose-local origin/test"]]}', '`origin/test` uzaktaki test''in son görülen hâlidir. Yerel test eskiyse ondan açmak eski koddan başlamak olur; bu yüzden önce `git fetch`, sonra `origin/test`''ten dal.', 1, '12. ünite · Üç ortamlı akış: dev, test, main', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-release-pr', 'git', 'gt-u12', 12, 'tf', 'derived', 'Üç ortamlı akışta canlıya çıkış, test''ten main''e açılan bir Release PR ile yapılır.', '{}', '{"value":true}', 'Doğru. test''te QA''nın doğruladığı işler Release PR ile main''e birleşir ve canlıya çıkar. Release PR genellikle bir sürüm etiketiyle (v1.4.0 gibi) işaretlenir.', 1, '12. ünite · Üç ortamlı akış: dev, test, main', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-dal-silme', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Feature dalı test''e birleştikten sonra ne yapılır?', '{"choices":["Dal silinir; iş artık ortam dallarında","Dal bir sonraki iş için saklanır","Dal main''e de doğrudan push edilir","Dal yeni bir adla yeniden açılır"]}', '{"index":0}', 'İşi biten dal silinir (GitHub''da birleştirme sonrası düğme ya da `gh pr merge --delete-branch`). Eski dalları biriktirmek listeyi karıştırır; herkes `git fetch --prune` ile kendi izini temizler.', 1, '12. ünite · Üç ortamlı akış: dev, test, main', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-onek', 'git', 'gt-u12', 12, 'mcq', 'derived', '`bugfix/US-D12-login-validation` dal adındaki parçalar neyi anlatır?', '{"choices":["İşin türü, iş kaydının numarası ve kısa açıklaması","Geliştiricinin adı, tarih ve sürüm numarası","Hedef ortam, onaylayan kişi ve test sonucu","Dalın açıldığı dal, saat ve commit sayısı"]}', '{"index":0}', '`bugfix/` (ya da `feature/`) işin türünü, `US-D12` iş takip sistemindeki kaydı, `login-validation` ise ne yapıldığını söyler. PR listesinde ve geçmişte iş bir bakışta anlaşılır.', 1, '12. ünite · Dal adları ve commit kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-bosluk', 'git', 'gt-u12', 12, 'tf', 'derived', 'Dal adlarında boşluk ve Türkçe karakter kullanmak iyi bir alışkanlıktır; okunabilirliği artırır.', '{}', '{"value":false}', 'Yanlış. Boşluk komut satırında tırnak gerektirir, Türkçe karakterler bazı araçlarda sorun çıkarır. Kısa çizgiyle ayrılmış küçük harfler (`login-validation`) en güvenlisidir.', 1, '12. ünite · Dal adları ve commit kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-conventional', 'git', 'gt-u12', 12, 'mcq', 'derived', '"Conventional Commits" kuralına uyan commit mesajı hangisidir?', '{"choices":["fix: boş parola artık reddediliyor","Düzeltmeler yapıldı","login.js güncellendi","son hali"]}', '{"index":0}', 'Conventional Commits `tür(kapsam): açıklama` biçimini kullanır (`feat`, `fix`, `docs`, `refactor`...). Böylece sürüm notları ve sürüm numarası commit''lerden otomatik çıkarılabilir.', 2, '12. ünite · Dal adları ve commit kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-is-numarasi', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Ekip panosunda sana US-D21 numaralı "sepete indirim kodu" işi atandı. Hangi dal adı ekip kuralına en uygun?', '{"choices":["feature/US-D21-indirim-kodu","deniz-yeni-is","indirim kodu","US-D21"]}', '{"index":0}', 'Tür öneki, iş numarası ve kısa açıklama birlikte olunca dal, hem iş kaydına hem PR''a bağlanır. Boşluklu ad komut satırında sorun çıkarır.', 1, '12. ünite · Dal adları ve commit kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-semver', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Anlamsal sürümlemede (SemVer) `2.4.1`''den sonra yalnızca bir hata düzeltmesi yayımlanırsa yeni sürüm ne olur?', '{"choices":["2.4.2","2.5.0","3.0.0","2.4.1.1"]}', '{"index":0}', 'SemVer `MAJOR.MINOR.PATCH` biçimindedir. Geriye uyumlu hata düzeltmesi PATCH''i, geriye uyumlu yeni özellik MINOR''u, uyumu bozan değişiklik MAJOR''u artırır.', 1, '12. ünite · Sürüm numaraları, etiket ve release', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-major', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Bir API''deki bir alanın adı değişti ve eski istemciler artık çalışmıyor. SemVer''e göre `1.7.3`''ten sonra hangi sürüm gelir?', '{"choices":["2.0.0","1.8.0","1.7.4","1.7.3-yeni"]}', '{"index":0}', 'Geriye uyumu bozan değişiklik MAJOR''u artırır, MINOR ve PATCH sıfırlanır: `2.0.0`.', 2, '12. ünite · Sürüm numaraları, etiket ve release', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-etiket', 'git', 'gt-u12', 12, 'mcq', 'derived', 'Sürüm etiketi (tag) ne işe yarar?', '{"choices":["Bir commit''e kalıcı, taşınmayan bir ad verir","Dalı başkalarının push''una karşı korur","Commit''leri sıkıştırır","Uzak depoya otomatik push eder"]}', '{"index":0}', 'Dal ilerler, etiket ilerlemez. `v1.2.0` etiketi hep aynı commit''i gösterir; canlıdaki sürümün hangi kod olduğu her zaman bilinir.', 1, '12. ünite · Sürüm numaraları, etiket ve release', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-etiket-komut', 'git', 'gt-u12', 12, 'fill', 'derived', 'Bulunduğun commit''e `v1.2.0` adında açıklamalı (annotated) bir etiket koyan komutu yaz (mesajı `-m` ile vermeyi düşünme, yalnızca etiketi aç).', '{"blanks":1}', '{"blanks":[["git tag -a v1.2.0"]]}', '`git tag -a v1.2.0 -m "Sürüm 1.2.0"` açıklamalı etiket oluşturur: kim, ne zaman ve neden bilgisini taşır. `-a` olmadan hafif (lightweight) etiket oluşur.', 1, '12. ünite · Sürüm numaraları, etiket ve release', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-etiket-push', 'git', 'gt-u12', 12, 'tf', 'derived', '`git push` etiketleri kendiliğinden göndermez; `git push origin v1.2.0` ya da `git push --tags` gerekir.', '{}', '{"value":true}', 'Doğru. Etiketler ayrıca gönderilir. GitHub''daki Releases sayfası da bir etikete bağlanarak oluşturulur.', 2, '12. ünite · Sürüm numaraları, etiket ve release', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-github-release', 'git', 'gt-u12', 12, 'mcq', 'derived', 'GitHub''daki bir "Release" ile etiket arasındaki ilişki nedir?', '{"choices":["Release bir etikete bağlanıp sürüm notu ekler","Release etiketin yerine geçer, etiket silinir","Release yalnızca main dalına push ile oluşur","İkisi arasında bir ilişki yoktur"]}', '{"index":0}', 'Etiket Git''in kavramıdır; Release ise GitHub''ın onun üstüne koyduğu sayfadır: sürüm notları, indirilebilir dosyalar ve otomatik kaynak arşivi.', 2, '12. ünite · Sürüm numaraları, etiket ve release', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u12-etiket-tasima', 'git', 'gt-u12', 12, 'mcq', 'derived', '`v2.0.0` etiketini push ettin, sonra son anda bir düzeltme commit''i geldi. Etiketi yeni commit''e taşıyıp zorla göndermek mi, yoksa `v2.0.1` mi?', '{"choices":["v2.0.1 çıkarırım; yayımlanmış etiket taşınmaz","Etiketi taşıyıp git push --force --tags yaparım","Etiketi silip aynı adla yeniden açarım, kimse fark etmez","Düzeltmeyi bir sonraki büyük sürüme bırakırım"]}', '{"index":0}', 'Başkaları `v2.0.0`''ı çekmiş ya da canlıya çıkarmış olabilir; etiketin altındaki kodun değişmesi "aynı sürüm, farklı kod" karışıklığı yaratır. Yeni bir PATCH sürümü güvenli yoldur.', 3, '12. ünite · Sürüm numaraları, etiket ve release', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-ne-ise', 'git', 'gt-u13', 13, 'mcq', 'derived', 'GitHub''da bir dala koruma kuralı (branch protection) koymak ne sağlar?', '{"choices":["Dala doğrudan push''u ve kuralsız birleştirmeyi engeller","Dalın kodunu şifreler","Dalı yalnızca okunur bir yedeğe çevirir","Dalın commit''lerini otomatik olarak sıkıştırır"]}', '{"index":0}', 'Koruma kuralı "bu dala ancak şu şartlarla girilir" der: PR zorunlu, en az N onay, CI yeşil, force push ve silme kapalı. Kural Git''te değil platformda (GitHub, GitLab) uygulanır.', 1, '13. ünite · Dal koruma kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-red-mesaji', 'git', 'gt-u13', 13, 'mcq', 'derived', 'Korumalı `main`''e `git push` yapınca "GH006: Protected branch update failed... Changes must be made through a pull request" çıktı. Doğru hamle nedir?', '{"choices":["Kendi dalımı açıp oraya push eder, PR açarım","git push --force ile tekrar denerim","Depo ayarlarından korumayı kapatırım","main''i silip yeniden oluştururum"]}', '{"index":0}', 'Red bir hata değil, kuralın işlediğinin kanıtıdır. Commit''i bir feature dalına taşı (`git switch -c ...`), dalı push et ve PR aç. Korumayı kapatmak kuralı herkes için anlamsız kılar.', 1, '13. ünite · Dal koruma kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-force-kapali', 'git', 'gt-u13', 13, 'tf', 'derived', 'Korumalı dallarda force push ve dal silme varsayılan olarak kapalıdır.', '{}', '{"value":true}', 'Doğru. GitHub''da koruma kuralı açıldığında "Allow force pushes" ve "Allow deletions" ayrıca izin verilmedikçe kapalıdır; paylaşılan geçmiş yeniden yazılamaz.', 1, '13. ünite · Dal koruma kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-git-mi', 'git', 'gt-u13', 13, 'mcq', 'derived', 'Dal koruması nerede uygulanır?', '{"choices":["Uzak depoyu barındıran platformda","Herkesin bilgisayarındaki Git ayarlarında","Yalnızca .gitignore dosyasında","Git''in commit komutunda"]}', '{"index":0}', 'Koruma bir platform özelliğidir. Kendi bilgisayarında main''e istediğin kadar commit atabilirsin; kural, bu commit''leri GitHub''a göndermeye çalıştığında devreye girer.', 2, '13. ünite · Dal koruma kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-yerel-commit', 'git', 'gt-u13', 13, 'mcq', 'derived', 'Korumalı `main`''de yerelde iki commit attın, push reddedildi. İşini kaybetmeden akışa nasıl dönersin?', '{"choices":["Commit''leri yeni dala alıp main''i geri sararım","Commit''leri silip işi baştan yaparım","Koruma kalkana kadar beklerim","Commit''leri amend ederek mesajlarını değiştiririm"]}', '{"index":0}', '`git switch -c feature/...` ile commit''leri yeni dala al, `git switch main` ve `git reset --hard origin/main` ile main''i uzaktakine eşitle. Sonra feature dalını push edip PR aç. (Sandbox''ta bu senaryoyu bir görev olarak deneyebilirsin.)', 2, '13. ünite · Dal koruma kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-uc-ortam-koruma', 'git', 'gt-u13', 13, 'mcq', 'derived', 'Üç ortamlı akışta hangi dallar korumalı olmalıdır?', '{"choices":["main, test ve dev","Yalnızca main","Yalnızca feature dalları","Hiçbiri; ekip güvene dayanır"]}', '{"index":0}', 'Üç ortam dalı da korumalıdır: doğrudan push yok, PR zorunlu, CI geçmeli; dev''e en az bir onay. Feature dalları ise kişiye aittir ve korunmaz.', 2, '13. ünite · Dal koruma kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-kendi-onay', 'git', 'gt-u13', 13, 'tf', 'derived', 'PR''ı açan kişi kendi PR''ını onaylayarak zorunlu onay şartını karşılayabilir.', '{}', '{"value":false}', 'Yanlış. GitHub kişinin kendi PR''ını onaylamasına izin vermez. İncelemenin amacı ikinci bir gözdür.', 1, '13. ünite · Zorunlu inceleme, onay ve CODEOWNERS', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-codeowners', 'git', 'gt-u13', 13, 'mcq', 'derived', '`CODEOWNERS` dosyası ne işe yarar?', '{"choices":["Hangi dosyaları kimin inceleyeceğini söyler","Deponun sahibini başka bir hesaba aktarır","Kimin push edebileceğini listeler","Lisans bilgisini tutar"]}', '{"index":0}', '`.github/CODEOWNERS` içindeki `/odeme/ @odeme-ekibi` gibi satırlar, o dosyalara dokunan PR''lara ilgili kişileri otomatik olarak inceleyici ekler. Koruma kuralında "Require review from Code Owners" açıksa onları onaylamadan birleştirilemez.', 1, '13. ünite · Zorunlu inceleme, onay ve CODEOWNERS', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-degisiklik-istegi', 'git', 'gt-u13', 13, 'mcq', 'derived', 'Bir inceleyici PR''a "Request changes" dedi. Bu ne anlama gelir?', '{"choices":["Kişi onayını verene kadar PR birleştirilemez","PR otomatik olarak kapanır","Değişiklikleri inceleyicinin kendisi yapar","PR yalnızca squash ile birleştirilebilir"]}', '{"index":0}', 'Değişiklik isteği birleştirmeyi engeller. Yazar istenenleri aynı dala commit''leyip push eder; PR kendiliğinden güncellenir, inceleyici yeniden bakıp onaylar.', 2, '13. ünite · Zorunlu inceleme, onay ve CODEOWNERS', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-yeni-commit', 'git', 'gt-u13', 13, 'mcq', 'derived', 'PR''ın onaylandı. Birleştirmeden hemen önce dalına küçük bir commit daha push ettin ve onay "stale" olarak düştü. Neden böyle bir ayar vardır?', '{"choices":["Onaydan sonra gelen kod incelenmeden birleşmesin diye","GitHub''ın bir hatasıdır","Commit sayısı sınırını aşmamak için","Push eden kişinin yetkisini denetlemek için"]}', '{"index":0}', '"Dismiss stale approvals" ayarı açıkken yeni commit eski onayı geçersiz kılar. Aksi hâlde biri onay aldıktan sonra incelenmemiş kodu sessizce ekleyebilir.', 3, '13. ünite · Zorunlu inceleme, onay ve CODEOWNERS', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-inceleme-ne', 'git', 'gt-u13', 13, 'mcq', 'derived', 'İyi bir kod incelemesinde inceleyici önce neye bakar?', '{"choices":["Değişikliğin amacına ve risklerine","Yazarın bu dalda kaç commit attığına","Dosya adlarının alfabetik sırasına","PR''ın kaç saat önce açıldığına"]}', '{"index":0}', 'İnceleme önce "doğru şey mi, doğru mu yapılmış" sorusunu sorar: amaç, hatalar, güvenlik, test. Biçim konularını linter ve CI üstlenir.', 1, '13. ünite · Zorunlu inceleme, onay ve CODEOWNERS', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-ci-nedir', 'git', 'gt-u13', 13, 'mcq', 'derived', 'Sürekli entegrasyon (CI) nedir?', '{"choices":["Her push''ta testlerin kendiliğinden çalışması","Kodun her gece elle canlıya çıkarılması","Bütün dalların her gün main''e birleştirilmesi","Kodun yalnızca tek bir bilgisayarda derlenmesi"]}', '{"index":0}', 'CI, değişiklikleri sık sık birleştirip her seferinde otomatik denetler: derleme, testler, lint. Hata, kod ana dala girmeden yakalanır.', 1, '13. ünite · CI ve durum denetimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-durum-denetimi', 'git', 'gt-u13', 13, 'mcq', 'derived', 'Koruma kuralında "Require status checks to pass" açıksa ne olur?', '{"choices":["CI yeşil olmadan PR birleştirilemez","CI kırmızıysa PR kendiliğinden kapanır","CI yalnızca main''de çalışır","Onaylar yok sayılır"]}', '{"index":0}', 'Durum denetimi (status check) CI''ın sonucudur. Zorunlu denetim kırmızıysa birleştirme düğmesi kapanır; dalda düzeltip push edince CI yeniden çalışır.', 1, '13. ünite · CI ve durum denetimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-kirmizi', 'git', 'gt-u13', 13, 'mcq', 'derived', 'PR''ında CI "lint" adımında kırmızı: `console.log` satırı kalmış. Ne yaparsın?', '{"choices":["Satırı silip aynı dala commit''ler, push ederim","Yeni bir PR açarım","CI''ı depo ayarlarından kapatırım","Yöneticiden zorla birleştirmesini isterim"]}', '{"index":0}', 'PR bir dala bağlıdır: dala yeni commit gelince PR güncellenir ve CI yeniden çalışır. Kuralı kapatmak ya da atlamak sorunu canlıya taşır.', 2, '13. ünite · CI ve durum denetimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-checks-komut', 'git', 'gt-u13', 13, 'fill', 'derived', 'Bulunduğun dalın PR''ındaki CI sonuçlarını terminalde gösteren GitHub CLI komutunu yaz.', '{"blanks":1}', '{"blanks":[["gh pr checks"]]}', '`gh pr checks` her denetimi ✓ ya da X ile listeler; kırmızı varsa çıkış kodu 1 olur. `gh pr view` ise onayları ve birleştirme engellerini de gösterir.', 1, '13. ünite · CI ve durum denetimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-yerelde-gecti', 'git', 'gt-u13', 13, 'tf', 'derived', 'Kod benim bilgisayarımda çalışıyorsa CI''ın kırmızı olması önemsizdir; birleştirilebilir.', '{}', '{"value":false}', 'Yanlış. CI temiz bir ortamda çalışır; senin bilgisayarındaki eksik bir dosya, unutulan bir bağımlılık ya da kalan bir hata ayıklama satırı orada ortaya çıkar. "Bende çalışıyor" CI''ın yakalamak için var olduğu durumdur.', 1, '13. ünite · CI ve durum denetimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-cd', 'git', 'gt-u13', 13, 'mcq', 'derived', 'CI ile CD (sürekli teslimat / dağıtım) arasındaki fark nedir?', '{"choices":["CI kodu denetler; CD denetlenen kodu ortama otomatik çıkarır","CI yalnızca main''de, CD yalnızca feature dallarında çalışır","İkisi aynı şeyin farklı adıdır","CD testleri, CI dağıtımı yapar"]}', '{"index":0}', 'CI derler ve test eder; CD testten geçen kodu dev, test ya da canlı ortama otomatik dağıtır. Üç ortamlı akışta her ortam dalına birleşme, o ortama dağıtımı tetikleyebilir.', 2, '13. ünite · CI ve durum denetimleri', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-nerede', 'git', 'gt-u13', 13, 'mcq', 'derived', 'GitHub Actions iş akışı (workflow) dosyaları depoda nerede durur?', '{"choices":[".github/workflows/ klasöründe","Deponun kökündeki actions.txt dosyasında",".git/hooks/ klasöründe","GitHub ayarlarında; depoda durmaz"]}', '{"index":0}', 'İş akışları `.github/workflows/` altındaki YAML dosyalarıdır ve kodla birlikte sürümlenir. Değişiklikleri de PR ile incelenir.', 1, '13. ünite · GitHub Actions iş akışı dosyası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-on', 'git', 'gt-u13', 13, 'mcq', 'derived', 'Bir iş akışı dosyasındaki `on: pull_request` satırı ne söyler?', '{"choices":["İş akışı bir PR açıldığında ya da güncellendiğinde çalışır","İş akışı yalnızca PR birleştikten sonra çalışır","PR''lar için onay gerekir","PR açmak yasaktır"]}', '{"index":0}', '`on` tetikleyicidir: `push`, `pull_request`, `schedule` (zamanlanmış) gibi olaylardan hangisinde çalışacağını söyler.', 2, '13. ünite · GitHub Actions iş akışı dosyası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-jobs-steps', 'git', 'gt-u13', 13, 'mcq', 'derived', 'Bir iş akışında `jobs` ve `steps` arasındaki ilişki nedir?', '{"choices":["Her job bir makinede çalışır ve sırayla çalışan step''lerden oluşur","Her step ayrı bir depoda çalışır","jobs yalnızca main''de, steps yalnızca PR''da çalışır","İkisi aynı şeyin farklı adıdır"]}', '{"index":0}', 'Bir job `runs-on` ile seçilen bir makinede (ör. `ubuntu-latest`) çalışır; içindeki step''ler sırayla yürür: kodu al (`actions/checkout`), bağımlılıkları kur, testleri çalıştır. Job''lar varsayılan olarak paralel çalışır.', 2, '13. ünite · GitHub Actions iş akışı dosyası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-checkout', 'git', 'gt-u13', 13, 'tf', 'derived', 'Bir iş akışında kodu kullanabilmek için önce `actions/checkout` adımıyla depo makineye alınır.', '{}', '{"value":true}', 'Doğru. İş akışı boş bir makinede başlar; `uses: actions/checkout@v4` deponun ilgili commit''ini o makineye klonlar.', 1, '13. ünite · GitHub Actions iş akışı dosyası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-gizli', 'git', 'gt-u13', 13, 'mcq', 'derived', 'İş akışının canlıya dağıtım için bir API anahtarına ihtiyacı var. Anahtarı nereye koyarsın?', '{"choices":["Depo ayarlarındaki Secrets bölümüne","İş akışı dosyasına düz metin olarak","README''ye, ekip kolay bulsun diye","Ayrı bir .env dosyasına ve commit''lerim"]}', '{"index":0}', 'GitHub Actions gizli değerleri depo (ya da ortam) ayarlarındaki Secrets''ta saklar; iş akışında `secrets.API_ANAHTARI` ifadesiyle okunur ve günlüklerde maskelenir. Depoya giren her anahtar, geçmişte sonsuza kadar kalır (14. ünite).', 3, '13. ünite · GitHub Actions iş akışı dosyası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-pr-create', 'git', 'gt-u13', 13, 'fill', 'derived', 'Bulunduğun ve push ettiğin feature dalından `dev`''e PR açan GitHub CLI komutunun başını yaz (başlık seçeneği olmadan).', '{"blanks":1}', '{"blanks":[["gh pr create --base dev","gh pr create -B dev"]]}', '`gh pr create --base dev --title "..."` bulunduğun daldan dev''e PR açar. Dal önce GitHub''a push edilmiş olmalıdır.', 1, '13. ünite · Birleştirme engelleri ve gh ile PR yönetimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-engel', 'git', 'gt-u13', 13, 'mcq', 'derived', '`gh pr merge` şunu yazdı: "At least 1 approving review is required". Ne eksik?', '{"choices":["Bir ekip arkadaşının onayı","CI''ın yeniden çalışması","Dalın yeniden push edilmesi","Commit mesajının düzeltilmesi"]}', '{"index":0}', 'Hedef dalın kuralı en az bir onay istiyor. Bir ekip arkadaşın PR''ı inceleyip onaylayınca (`gh pr review --approve`) birleştirme açılır.', 1, '13. ünite · Birleştirme engelleri ve gh ile PR yönetimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-cakisan-pr', 'git', 'gt-u13', 13, 'mcq', 'derived', 'PR''ın onaylı ve CI yeşil ama GitHub "This branch has conflicts that must be resolved" diyor. Ne yaparsın?', '{"choices":["Hedefi dalıma alıp çözer, push ederim","PR''ı kapatıp hedefe doğrudan push ederim","Onayı geri çekip yeniden isterim","CI''ı yeniden çalıştırırım"]}', '{"index":0}', 'Çakışma, hedef dal sen çalışırken ilerlediği için çıkar. `git fetch`, sonra `git merge origin/dev` (ya da kendi dalın için rebase), çakışmayı çöz ve push et. PR güncellenir; ayara göre yeniden onay gerekebilir.', 2, '13. ünite · Birleştirme engelleri ve gh ile PR yönetimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-squash-sil', 'git', 'gt-u13', 13, 'mcq', 'derived', '`gh pr merge 7 --squash --delete-branch` ne yapar?', '{"choices":["Tek commit olarak birleştirip dalı siler","PR''ı kapatır ve commit''leri siler","Dalı yerelde siler, PR açık kalır","PR''ı rebase ile birleştirir, dal kalır"]}', '{"index":0}', '`--squash` dalın bütün commit''lerini hedefte tek commit yapar; `--delete-branch` işi biten dalı siler. Yereldeki dalı ve izini sen temizlersin (`git branch -d`, `git fetch --prune`).', 2, '13. ünite · Birleştirme engelleri ve gh ile PR yönetimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-admin', 'git', 'gt-u13', 13, 'mcq', 'derived', 'Cuma akşamı acil bir düzeltme var, onay verecek kimse yok. Yöneticisin ve kuralları atlayıp birleştirme yetkin var. En sağlıklı yol hangisi?', '{"choices":["Kuralı atlamam, nöbetçi birine incelettiririm","Korumayı kapatıp main''e push eder, sonra açarım","Kendi PR''ımı ikinci bir hesapla onaylarım","Düzeltmeyi CI''sız doğrudan canlıya kopyalarım"]}', '{"index":0}', 'Acil anlar hataların en çok yapıldığı anlardır; kural tam da bunun için var. Ekipler acil durumlar için nöbetçi inceleyici belirler. Kuralı atlamak gerekiyorsa bile bu kayıtlı ve istisna olmalı, alışkanlık değil.', 3, '13. ünite · Birleştirme engelleri ve gh ile PR yönetimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u13-pr-guncellenir', 'git', 'gt-u13', 13, 'tf', 'derived', 'Açık bir PR''ın dalına yeni commit push edilince PR kendiliğinden güncellenir; yeni bir PR açmaya gerek yoktur.', '{}', '{"value":true}', 'Doğru. PR bir dalı izler; dala gelen her commit PR''a da girer ve CI yeniden çalışır.', 1, '13. ünite · Birleştirme engelleri ve gh ile PR yönetimi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-hangisi-gizli', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Aşağıdakilerden hangisi bir depoya hiç girmemesi gereken gizli bilgidir?', '{"choices":["Veritabanının üretim parolası","Uygulamanın herkese açık web adresi","Kullanılan kütüphanelerin listesi","README''deki kurulum adımları"]}', '{"index":0}', 'Parola, API anahtarı, erişim token''ı ve özel SSH anahtarı gizli bilgidir: ele geçiren kişi senin adına iş yapabilir. Web adresi, bağımlılık listesi ve kurulum adımları herkesin görebileceği bilgilerdir.', 1, '14. ünite · Gizli bilgi nedir, neden depoya girmez', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-neden-tehlike', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Bir API anahtarının sızması neden yalnızca "kod göründü" sorunundan büyüktür?', '{"choices":["Anahtarı bulan, hesabın adına iş yapabilir","Anahtar sızınca depo kendiliğinden silinir","Git anahtarlı commit''leri push etmez","Anahtarın sızması yalnızca derleme süresini uzatır"]}', '{"index":0}', 'Anahtar bir kimlik kartı gibidir: ödeme hizmetinde para çekebilir, bulut hesabında sunucu açabilir, veritabanını okuyabilir. Fatura ve veri kaybı hesap sahibine kalır.', 1, '14. ünite · Gizli bilgi nedir, neden depoya girmez', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-env-dosyasi', 'git', 'gt-u14', 14, 'tf', 'derived', 'Gizli değerleri tutan .env dosyası .gitignore''a eklenmeli, depoya yalnızca değerleri boş bir .env.example girmelidir.', '{}', '{"value":true}', 'Doğru. .env.example hangi değişkenlerin gerektiğini anlatır, .env ise yalnızca senin bilgisayarında (ya da sunucuda) durur.', 1, '14. ünite · Gizli bilgi nedir, neden depoya girmez', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-private-depo', 'git', 'gt-u14', 14, 'mcq', 'derived', '"Depomuz private, anahtarı koda yazmamızın sakıncası yok." Bu düşüncedeki hata nedir?', '{"choices":["Depoya erişen herkes anahtarı görür","Private depolarda .gitignore çalışmaz","Private depolar push edilemez","GitHub private depolardaki dosyaları şifresiz siler"]}', '{"index":0}', 'Private depo da çok el değiştirir: ekipten ayrılanlar, depoya bağlanan araçlar, bilgisayarlardaki clone''lar, ileride depoyu public yapma kararı. Gizli bilgi depo görünürlüğüne güvenilerek saklanmaz.', 2, '14. ünite · Gizli bilgi nedir, neden depoya girmez', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-ne-kadar-hizli', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Public bir depoya push edilen geçerli bir anahtar ne kadar sürede bulunabilir?', '{"choices":["Dakikalar, hatta saniyeler içinde","Ancak birkaç ay sonra","Depo yıldız almadıkça hiç","Yalnızca depo sahibi paylaşırsa"]}', '{"index":0}', 'Botlar GitHub''ın herkese açık olay akışını sürekli izler; her yeni push''u bilinen anahtar biçimlerine karşı tarar ve bulduğunu hemen dener. Deponun tanınmış olması gerekmez.', 1, '14. ünite · Public depoları tarayan botlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-nasil-bulur', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Botlar sızan anahtarları nasıl bulur?', '{"choices":["Yeni push''ları izleyip bilinen anahtar biçimlerini arar","Geliştiricinin bilgisayarına sızar","GitHub''dan anahtar listesini satın alır","Yalnızca arama motorundan dosya adı sorgular"]}', '{"index":0}', 'Pek çok sağlayıcının anahtarı tanınabilir bir önekle başlar (GitHub token''ları `ghp_`, AWS erişim anahtarları `AKIA` gibi). Botlar bu kalıpları ve .env gibi dosya adlarını arar.', 1, '14. ünite · Public depoları tarayan botlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-kucuk-depo', 'git', 'gt-u14', 14, 'tf', 'derived', 'Kimsenin bilmediği, yeni açılmış küçük bir public depoya düşen anahtar güvendedir.', '{}', '{"value":false}', 'Yanlış. Botlar depoyu değil push''u izler; yeni ve küçük bir depoya gelen push da aynı akışta görünür.', 1, '14. ünite · Public depoları tarayan botlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-tuzak-anahtar', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Bir güvenlik ekibi bilerek geçersiz görünmeyen bir tuzak anahtarı public depoya koyuyor ve izliyor. Ne görmeyi bekler?', '{"choices":["Anahtarın kısa sürede tanımadığı yerlerden denenmesini","Kimsenin anahtara aylarca dokunmamasını","GitHub''ın depoyu hemen kapatmasını","Anahtarın kendiliğinden geçersiz olmasını"]}', '{"index":0}', 'Bu tür deneylerde tuzak anahtarlar çoğu zaman dakikalar içinde, bilinmeyen IP''lerden denenir. Sızıntıya "sonra bakarım" denecek süre yoktur.', 2, '14. ünite · Public depoları tarayan botlar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-sil-commit', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Anahtarlı .env''i push ettin, sonra dosyayı silip yeni bir commit attın. Anahtar neden hâlâ açıkta?', '{"choices":["Önceki commit''te duruyor, geçmişte herkes görebilir","Silme commit''i push edilemez","Git silinen dosyaları geri getirir","Yeni commit anahtarı başka dosyaya kopyalar"]}', '{"index":0}', 'Commit bir anlık görüntüdür. Dosyayı sildiğin commit''ten öncekinde anahtar olduğu gibi durur; `git log -p` ya da GitHub''da o commit''in sayfası onu gösterir.', 1, '14. ünite · Silmek neden yetmez: geçmiş, fork ve kopyalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-gecmis-temizle-yeter-mi', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Geçmişi yeniden yazıp `git push --force` ile anahtarı GitHub''dan kaldırdın. Anahtar neden hâlâ tehlikede?', '{"choices":["Kopyası çoktan alınmış olabilir ve anahtar hâlâ geçerli","Force push geçmişi değiştirmez","GitHub force push''u geri alır","Anahtar başka dallara kendiliğinden kopyalanır"]}', '{"index":0}', 'Push ile temizlik arasında geçen sürede botlar, fork''lar, clone''lar ve önbellekler değeri almış olabilir. Ortadan kaldıramayacağın kopyalara karşı tek çare anahtarı iptal etmektir.', 2, '14. ünite · Silmek neden yetmez: geçmiş, fork ve kopyalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-private-yap', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Anahtarın public depoya düştüğünü fark eden ekip arkadaşın "depoyu hemen private yapalım, sorun çözülür" diyor. Ne dersin?', '{"choices":["Yetmez; önce anahtarı iptal edip yenilemeliyiz","Haklısın, private olunca kopyalar da silinir","Depoyu silip yeniden açarsak yeter","Bir sonraki sürümde bakarız"]}', '{"index":0}', 'Görünürlüğü değiştirmek yeni ziyaretçiyi durdurur ama alınmış kopyaları geri getirmez. Sızan değerin işe yaramaz hâle gelmesi için sağlayıcıda iptal edilmesi gerekir.', 1, '14. ünite · Silmek neden yetmez: geçmiş, fork ve kopyalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-log-p', 'git', 'gt-u14', 14, 'fill', 'derived', 'Geçmişte .env dosyasına dokunan bütün commit''leri değişiklikleriyle listeleyen komutu yaz.', '{"blanks":1}', '{"blanks":[["git log -p -- .env","git log --patch -- .env","git log -p .env"]]}', '`git log -p -- .env` dosyanın geçmişini farklarıyla gösterir; silinmiş olsa bile eski commit''lerdeki içeriği görürsün. Botlar ve meraklılar da aynı şeyi yapabilir.', 2, '14. ünite · Silmek neden yetmez: geçmiş, fork ve kopyalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-ilk-adim', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Public depoya anahtar sızdırdığını fark ettin. İlk adım ne olmalı?', '{"choices":["Anahtarı iptal edip yenisini üretmek","Dosyayı silip commit atmak","Geçmişi temizleyip force push etmek","Depoyu private yapmak"]}', '{"index":0}', 'Önce kanamayı durdur: anahtar iptal edilince kopyası olanların elinde işe yaramaz bir metin kalır. Geçmişi temizlemek, kayıtları incelemek ve ekibe haber vermek ondan sonra gelir.', 1, '14. ünite · Sızıntıya doğru müdahale sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-sira', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Sızıntıya müdahalede doğru sıra hangisidir? I. Erişim kayıtlarını incele  II. Anahtarı iptal et ve yenile  III. Geçmişi temizle  IV. Önleme kur', '{"choices":["II, I, III, IV","III, II, I, IV","I, III, II, IV","IV, III, I, II"],"sabit":true}', '{"index":0}', 'İptal (II) zararı durdurur; kayıtlar (I) anahtarın kullanılıp kullanılmadığını ve neyin etkilendiğini söyler; temizlik (III) değerin yeni kopyalarını önler; önleme (IV) aynı hatanın tekrarını engeller.', 2, '14. ünite · Sızıntıya doğru müdahale sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-kayitlar', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Anahtarı iptal ettin. Sağlayıcının erişim kayıtlarında sızıntıdan sonra tanımadığın IP''lerden ödeme istekleri görüyorsun. Sıradaki doğru adım nedir?', '{"choices":["Etkilenenleri belirleyip ekibe ve sağlayıcıya bildirmek","Kayıtları silip konuyu kapatmak","Eski anahtarı yeniden etkinleştirmek","Hiçbir şey; iptal etmek her şeyi geri alır"]}', '{"index":0}', 'İptal yeni zararı durdurur ama olanı geri almaz. Kayıtlarda kötüye kullanım varsa ekibe, gerekirse sağlayıcının destek birimine haber verilir; para ya da veri kaybı buna göre ele alınır.', 1, '14. ünite · Sızıntıya doğru müdahale sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-yenile-env', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Yeni anahtar üretildi. Değeri nereye koyarsın?', '{"choices":["Git''in izlemediği .env dosyasına","Kodun en üstüne, yorum satırı olarak","README''nin kurulum bölümüne","Commit mesajına"]}', '{"index":0}', 'Yeni değer de eskisi gibi kodun dışında durur: yerelde .env, sunucuda ortam değişkeni ya da gizli bilgi yöneticisi. Koda yazılan yeni anahtar da sızar.', 1, '14. ünite · Sızıntıya doğru müdahale sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-haber', 'git', 'gt-u14', 14, 'tf', 'derived', 'Anahtarı tek başına iptal edip yenilesen bile ekibe haber vermen gerekir.', '{}', '{"value":true}', 'Doğru. Eski anahtarı kullanan sunucular, CI ve ekip arkadaşlarının ortamları bozulur; yeni değerin güvenli yoldan dağıtılması gerekir. Ayrıca ekip aynı hatanın nasıl tekrarlanmayacağını konuşmalıdır.', 2, '14. ünite · Sızıntıya doğru müdahale sırası', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-ortam-degiskeni', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Kodda anahtarı yazmak yerine `process.env.KAFEPAY_KEY` okumak ne sağlar?', '{"choices":["Değer koddan ayrılır, her ortamda ayrı verilir","Anahtarı şifreler ve depoya güvenle koyar","Anahtarı her gün kendiliğinden yeniler","Kodu daha hızlı çalıştırır"]}', '{"index":0}', 'Ortam değişkeni değeri kodun dışına alır: kod depoya girer, değer girmez. Geliştirmede .env, sunucuda platformun gizli ayarları, CI''da depo secret''ları değeri sağlar.', 1, '14. ünite · Önleme: .gitignore, ortam değişkenleri, gizli bilgi yöneticisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-gitignore-sonra', 'git', 'gt-u14', 14, 'mcq', 'derived', '.env commit''lendikten sonra .gitignore''a eklendi. Git onu izlemeyi bırakır mı?', '{"choices":["Hayır; önce git rm --cached ile izlemeden çıkarılmalı","Evet, hemen bırakır ve geçmişten de siler","Evet, ama yalnızca bir sonraki push''ta","Hayır, .env dosyaları yok sayılamaz"]}', '{"index":0}', '.gitignore yalnızca izlenmeyen dosyalara uygulanır. Zaten izlenen .env''i `git rm --cached .env` ile index''ten çıkarırsın; dosya diskte kalır. Geçmişteki kopyası ise ayrıca ele alınır.', 2, '14. ünite · Önleme: .gitignore, ortam değişkenleri, gizli bilgi yöneticisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-rm-cached', 'git', 'gt-u14', 14, 'fill', 'derived', 'İzlenen .env dosyasını diskten silmeden Git''in izlemesinden çıkaran komutu yaz.', '{"blanks":1}', '{"blanks":[["git rm --cached .env"]]}', '`git rm --cached .env` dosyayı index''ten çıkarır, çalışma dizininde bırakır. Ardından .gitignore''a ekleyip commit''lersin.', 1, '14. ünite · Önleme: .gitignore, ortam değişkenleri, gizli bilgi yöneticisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-en-az-yetki', 'git', 'gt-u14', 14, 'mcq', 'derived', 'CI''ın yalnızca paketi yayımlaması gerekiyor. Ona nasıl bir token verilir?', '{"choices":["Yalnız yayımlama yetkisi olan, süresi kısa bir token","Hesabın bütün yetkilerine sahip, süresiz bir token","Ekipteki herkesin kullandığı ortak parola","Yöneticinin kişisel token''ı"]}', '{"index":0}', 'En az yetki ilkesi: token yalnızca gereken işi yapabilsin ve kendiliğinden süresi dolsun. Sızarsa zarar o işle ve o süreyle sınırlı kalır.', 2, '14. ünite · Önleme: .gitignore, ortam değişkenleri, gizli bilgi yöneticisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-yonetici', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Gizli bilgi yöneticisi (ör. bulut sağlayıcının secret manager''ı ya da kasa yazılımı) ne işe yarar?', '{"choices":["Değerleri tek yerde saklar, erişimi yönetir","Kodun içindeki anahtarları görünmez yapar","Commit geçmişini şifreler","Ekip üyelerinin parolalarını tahmin eder"]}', '{"index":0}', 'Değerler dosyalara dağılmaz; kimin hangi değere erişebildiği, ne zaman okunduğu kaydedilir ve anahtarlar merkezi olarak yenilenebilir.', 1, '14. ünite · Önleme: .gitignore, ortam değişkenleri, gizli bilgi yöneticisi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-push-protection', 'git', 'gt-u14', 14, 'mcq', 'derived', 'GitHub''ın push protection özelliği ne yapar?', '{"choices":["Gizli bilgi içeren push''u GitHub''a ulaşmadan reddeder","Push edilen anahtarları kendiliğinden iptal eder","Depoyu sızıntıda private yapar","Commit''lerdeki anahtarları yıldızla değiştirir"]}', '{"index":0}', 'Push sırasında yeni commit''ler taranır; tanınan bir anahtar biçimi varsa push "GH013: Repository rule violations" ile reddedilir. Anahtar sunucuya hiç yazılmadığı için iptal gerekmez; koddan çıkarıp tekrar push edersin.', 1, '14. ünite · Secret scanning, push protection ve pre-commit tarayıcıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-gh013-sonra', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Push''un GH013 ile reddedildi; çıktı anahtarın son commit''inde odeme.js:3''te olduğunu söylüyor. Ne yaparsın?', '{"choices":["Anahtarı .env''e taşır, commit''i düzeltirim","Push''u --force ile zorlarım","Yeni bir commit''te anahtarı silip push ederim","Push protection''ı depo ayarlarından kapatırım"]}', '{"index":0}', 'Reddedilen commit''in kendisini düzeltmen gerekir: yeni bir silme commit''i eklersen anahtar hâlâ önceki commit''te durur ve push yine reddedilir. Anahtar daha eski bir commit''teyse `git rebase -i` ile o commit düzeltilir.', 1, '14. ünite · Secret scanning, push protection ve pre-commit tarayıcıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-secret-scanning', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Secret scanning (gizli bilgi taraması) push protection''dan nasıl ayrılır?', '{"choices":["Depodaki kodu ve geçmişi tarayıp uyarır","Yalnızca commit mesajlarını tarar","Push''ları engeller, geçmişe bakmaz","Yalnızca private depolarda çalışır"]}', '{"index":0}', 'Push protection kapıda durdurur; secret scanning içeri girmiş olanı bulur ve uyarı açar. GitHub, bazı sağlayıcılara (partner programı) public depoda bulunan anahtarlarını ayrıca bildirir; sağlayıcı da anahtarı iptal edebilir.', 1, '14. ünite · Secret scanning, push protection ve pre-commit tarayıcıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-pre-commit', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Anahtarı daha commit''lenmeden, geliştiricinin kendi bilgisayarında yakalamak için ne kullanılır?', '{"choices":["Pre-commit kancasında bir tarayıcı","GitHub''daki dal koruma kuralı","Release PR''ındaki onay","git log --oneline"]}', '{"index":0}', 'Git''in pre-commit kancası (hook) her commit''ten önce bir betik çalıştırır. Gitleaks gibi tarayıcılar burada anahtar bulursa commit''i durdurur; en erken savunma hattıdır.', 2, '14. ünite · Secret scanning, push protection ve pre-commit tarayıcıları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-vite-onek', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Bir Vite projesinde `VITE_KAFEPAY_SECRET` adlı değişkene gizli anahtar konuldu. Sorun nedir?', '{"choices":["Değer tarayıcıya giden pakete girer","Vite bu değişkeni hiç okumaz","Değişken adı büyük harfle yazılamaz","Değer yalnızca CI''da görünür"]}', '{"index":0}', 'Vite `VITE_`, Next.js `NEXT_PUBLIC_` önekli değerleri ön yüz koduna gömer. Tarayıcıya giden her şey herkese açıktır; gizli anahtar yalnızca sunucu tarafında kullanılır.', 2, '14. ünite · Gözden kaçan yerler: ön yüz paketi, CI günlüğü, defter çıktısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-ci-gunluk', 'git', 'gt-u14', 14, 'mcq', 'derived', 'CI''da hata ayıklamak için gizli değeri `echo` ile günlüğe basmanın riski nedir?', '{"choices":["Günlüğü görebilen herkes değeri okuyabilir","CI adımı kendiliğinden yeşil olur","Değer kendiliğinden yenilenir","Günlükler hiçbir zaman saklanmaz"]}', '{"index":0}', 'GitHub Actions depo secret''larını günlükte maskeler (*** olarak gösterir), ama değer dönüştürülürse (ör. base64) ya da başka yoldan gelirse maskeleme tutmaz. Gizli değer günlüğe hiç yazdırılmaz.', 2, '14. ünite · Gözden kaçan yerler: ön yüz paketi, CI günlüğü, defter çıktısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-defter', 'git', 'gt-u14', 14, 'tf', 'derived', 'Bir Jupyter defterinin kaydedilmiş çıktı hücresinde görünen anahtar, kod hücresinden silinse bile depoda durabilir.', '{}', '{"value":true}', 'Doğru. .ipynb dosyası çıktıları da saklar. Commit''lemeden önce çıktıları temizle ve anahtarı defterde hiç yazdırma.', 2, '14. ünite · Gözden kaçan yerler: ön yüz paketi, CI günlüğü, defter çıktısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u14-env-example', 'git', 'gt-u14', 14, 'mcq', 'derived', 'Depoya giren hangi dosya güvenlidir?', '{"choices":[".env.example: değeri boş KAFEPAY_KEY=",".env: KAFEPAY_KEY= ve gerçek değer","config.js: anahtar sabit olarak yazılmış","docker-compose.yml: üretim parolası açıkça"]}', '{"index":0}', 'Örnek dosya yalnızca değişkenlerin adını söyler, değer içermez. Ötekilerin hepsi gerçek bir değeri depoya taşır.', 1, '14. ünite · Gözden kaçan yerler: ön yüz paketi, CI günlüğü, defter çıktısı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-ne', 'git', 'gt-u15', 15, 'mcq', 'derived', 'GitLab nedir?', '{"choices":["Git depolarını barındıran, CI/CD''si içinde bir platform","Git''in yerine geçen başka bir sürüm kontrol aracı","Yalnızca GitHub''a bağlanan bir masaüstü programı","Bir kod editörü eklentisi"]}', '{"index":0}', 'GitLab da GitHub gibi Git depolarını barındırır; altta aynı Git çalışır. Fark platform özelliklerindedir: GitLab CI/CD, paket ve konteyner kayıtları, issue panoları gibi araçları tek uygulamada sunar.', 1, '15. ünite · GitLab nedir, GitHub''dan farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-ayni-git', 'git', 'gt-u15', 15, 'tf', 'derived', 'GitHub''da kullandığın git commit, branch, merge ve push komutları GitLab''daki bir depoda da aynen çalışır.', '{}', '{"value":true}', 'Doğru. Git aynı Git''tir; değişen yalnızca uzak deponun adresi ve platformun arayüzü, terimleri ve kurallarıdır.', 1, '15. ünite · GitLab nedir, GitHub''dan farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-neden-gitlab', 'git', 'gt-u15', 15, 'mcq', 'derived', 'Bir hastane, kaynak kodunun kurum dışındaki bir sunucuda durmasını yasaklıyor. Neden GitLab''ı seçebilir?', '{"choices":["GitLab kurumun kendi sunucusuna kurulabilir","GitLab depoları şifresiz tutar","GitLab''da commit geçmişi tutulmaz","GitLab yalnızca hastanelere açıktır"]}', '{"index":0}', 'GitLab''ın topluluk sürümü (Community Edition) açık kaynaklıdır ve kurumun kendi sunucusuna kurulabilir (self-managed). Kod kurumun ağından çıkmaz. GitHub''ın da kuruma kurulan bir sürümü (Enterprise Server) vardır ama ücretlidir.', 2, '15. ünite · GitLab nedir, GitHub''dan farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-ce-ee', 'git', 'gt-u15', 15, 'mcq', 'derived', 'GitLab Community Edition (CE) için hangisi doğrudur?', '{"choices":["Açık kaynaklı, kendi sunucuna kurulur","Yalnızca gitlab.com''da çalışır","Git komutlarını desteklemez","Merge request özelliği yoktur"]}', '{"index":0}', 'CE açık kaynaklı temel sürümdür; Enterprise Edition (EE) ek ücretli özellikler getirir. gitlab.com ise GitLab''ın kendi barındırdığı hizmettir.', 2, '15. ünite · GitLab nedir, GitHub''dan farkı', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-pr-mr', 'git', 'gt-u15', 15, 'mcq', 'derived', 'GitHub''daki pull request''in GitLab''daki karşılığı nedir?', '{"choices":["Merge request","Push request","Branch request","Commit request"]}', '{"index":0}', 'İkisi aynı işi görür: bir dalın değişikliklerini incelemeye açıp hedef dala birleştirmek. GitLab adı "birleştirme isteği"ni öne çıkarır.', 1, '15. ünite · GitHub ↔ GitLab terim karşılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-unlem', 'git', 'gt-u15', 15, 'mcq', 'derived', 'GitLab''da bir yorumda "!42" yazılması neyi gösterir?', '{"choices":["42 numaralı merge request''i","42 numaralı issue''yu","42. commit''i","42 dosyalık değişikliği"]}', '{"index":0}', 'GitLab''da issue''lar #42, merge request''ler !42 diye anılır. GitHub''da ikisi de # ile yazılır.', 1, '15. ünite · GitHub ↔ GitLab terim karşılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-group', 'git', 'gt-u15', 15, 'mcq', 'derived', 'GitHub''daki organization''ın (kuruluş hesabı) GitLab''daki karşılığı nedir?', '{"choices":["Group","Pipeline","Runner","Milestone"]}', '{"index":0}', 'GitLab''da projeler group''larda toplanır; group''ların alt group''ları olabilir (kafe-mavi/odeme/api gibi).', 1, '15. ünite · GitHub ↔ GitLab terim karşılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-actions-ci', 'git', 'gt-u15', 15, 'mcq', 'derived', 'GitHub Actions''ın iş akışı dosyasının GitLab''daki karşılığı hangisidir?', '{"choices":[".gitlab-ci.yml",".github/workflows/ci.yml","Makefile",".gitignore"]}', '{"index":0}', 'GitLab CI/CD, deponun kökündeki .gitlab-ci.yml dosyasını okur. GitHub Actions ise .github/workflows altındaki YAML dosyalarını.', 1, '15. ünite · GitHub ↔ GitLab terim karşılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-maintainer', 'git', 'gt-u15', 15, 'mcq', 'derived', 'GitLab''da proje ayarlarını değiştirip korumalı dallara birleştirme hakkı genellikle hangi role verilir?', '{"choices":["Maintainer","Guest","Reporter","Visitor"]}', '{"index":0}', 'GitLab rolleri yetkiye göre sıralanır: Guest, Reporter, Developer, Maintainer, Owner. Developer kod yazar ve MR açar; korumalı dalın kuralları çoğu ekipte birleştirmeyi Maintainer''a bırakır.', 2, '15. ünite · GitHub ↔ GitLab terim karşılıkları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-glab-create', 'git', 'gt-u15', 15, 'fill', 'derived', 'GitLab''da bulunduğun daldan main''e merge request açan glab komutunu yaz (başlık olmadan).', '{"blanks":1}', '{"blanks":[["glab mr create --target-branch main","glab mr create -b main"]]}', '`glab mr create --target-branch main --title "..."` dalını main''e birleştirmek için MR açar. gh''daki `--base` burada `--target-branch`''tir.', 1, '15. ünite · Merge request ve glab', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-push-ipucu', 'git', 'gt-u15', 15, 'mcq', 'derived', 'GitLab''a yeni bir dal push edince terminalde bir bağlantı çıkar. Bu bağlantı ne içindir?', '{"choices":["O daldan merge request açmak için","Dalı silmek için","Push''u geri almak için","Depoyu public yapmak için"]}', '{"index":0}', '"To create a merge request for ..., visit:" satırındaki adres MR formunu kaynak dal seçili olarak açar. GitHub''daki "Create a pull request for ..." ipucunun karşılığıdır.', 1, '15. ünite · Merge request ve glab', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-yeni-commit', 'git', 'gt-u15', 15, 'mcq', 'derived', 'İnceleyen kişi MR''ında bir düzeltme istedi. Ne yaparsın?', '{"choices":["Aynı dala commit''leyip push ederim; MR güncellenir","MR''ı kapatıp yeni dal ve yeni MR açarım","Düzeltmeyi doğrudan main''e push ederim","MR''ı onaylanmış sayıp birleştiririm"]}', '{"index":0}', 'MR bir dala bakar: dala gelen her push MR''a eklenir, pipeline yeniden çalışır. GitHub''daki PR''la aynı davranış.', 1, '15. ünite · Merge request ve glab', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-remove-source', 'git', 'gt-u15', 15, 'mcq', 'derived', 'MR birleşince kaynak dalı da silen glab seçeneği hangisidir?', '{"choices":["--remove-source-branch","--delete-target","--prune-all","--close-branch"]}', '{"index":0}', '`glab mr merge !5 --remove-source-branch` birleştirir ve dalı siler. MR formunda da "Delete source branch" kutusu vardır; çoğu ekip bunu varsayılan yapar.', 2, '15. ünite · Merge request ve glab', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-red', 'git', 'gt-u15', 15, 'mcq', 'derived', '"remote: GitLab: You are not allowed to push code to protected branches on this project." ne demektir?', '{"choices":["Dal korumalı; değişiklik MR ile girmeli","Depo silinmiş","İnternet bağlantısı kopmuş","Commit mesajı çok uzun"]}', '{"index":0}', 'GitHub''daki GH006''nın karşılığı. Korumalı dalda "Allowed to push" senin rolüne kapalı. Kendi dalını push edip MR aç.', 1, '15. ünite · Protected branches ve onay kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-allowed', 'git', 'gt-u15', 15, 'mcq', 'derived', 'GitLab''da korumalı bir dal için "Allowed to push and merge: No one", "Allowed to merge: Maintainers" seçildi. Sonuç nedir?', '{"choices":["Push yok, MR''ı Maintainer birleştirir","Herkes doğrudan push edebilir","Yalnızca Developer''lar birleştirebilir","Dal silinir"]}', '{"index":0}', 'GitLab korumayı iki ayrı izinle anlatır: kimin doğrudan push edebileceği ve kimin MR birleştirebileceği. Bu ayar "değişiklik yalnızca MR ile, birleştirmeyi Maintainer yapar" demektir.', 2, '15. ünite · Protected branches ve onay kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-onay', 'git', 'gt-u15', 15, 'tf', 'derived', 'GitLab''da onay kuralı (approval rule) en az bir onay isterken onay olmadan MR birleştirilemez.', '{}', '{"value":true}', 'Doğru. Onay kuralları hangi kişi ya da grubun, kaç onay vereceğini belirler; eksikken birleştirme düğmesi kapalıdır. Ekipler çoğunlukla yazarın kendi MR''ını onaylamasını da kapatır.', 2, '15. ünite · Protected branches ve onay kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-pipeline-kosul', 'git', 'gt-u15', 15, 'mcq', 'derived', 'MR onaylandı ama birleştirme düğmesi kapalı ve "Pipeline must succeed" yazıyor. Ne yaparsın?', '{"choices":["Kırmızı işi dalımda düzeltip push ederim","Onayı geri çekip yeniden onaylatırım","Hedef dalı silerim","MR''ı kapatıp main''e doğrudan push ederim"]}', '{"index":0}', 'Projede "Pipelines must succeed" açık: son pipeline başarısız. `glab ci status` hangi işin kırıldığını gösterir. Düzeltip push edince pipeline yeniden çalışır.', 1, '15. ünite · Protected branches ve onay kuralları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-stages', 'git', 'gt-u15', 15, 'mcq', 'derived', '.gitlab-ci.yml''deki `stages` ne belirler?', '{"choices":["Aşamaların çalışma sırasını","Hangi dalların korunacağını","Kaç kişinin onay vereceğini","Depoya kimlerin erişeceğini"]}', '{"index":0}', 'Örneğin `stages: [test, build, deploy]`. Aynı aşamadaki işler paralel çalışır; bir aşamada iş kırılırsa sonraki aşamalar çalışmaz.', 1, '15. ünite · .gitlab-ci.yml, aşamalar ve runner', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-script', 'git', 'gt-u15', 15, 'mcq', 'derived', '.gitlab-ci.yml''de bir işin çalıştıracağı komutlar hangi anahtarın altına yazılır?', '{"choices":["script","steps","run","commands"]}', '{"index":0}', 'Her iş (job) bir `stage`''e bağlanır ve `script` altındaki komutları sırayla çalıştırır. GitHub Actions''ta bunun karşılığı `steps` altındaki `run` satırlarıdır.', 1, '15. ünite · .gitlab-ci.yml, aşamalar ve runner', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-runner', 'git', 'gt-u15', 15, 'mcq', 'derived', 'GitLab CI''da işleri gerçekte kim çalıştırır?', '{"choices":["Runner","Maintainer","Merge request","Webhook"]}', '{"index":0}', 'Runner, işleri alıp çalıştıran ajandır. gitlab.com paylaşılan runner''lar sunar; kurumlar kendi makinelerine runner kurabilir.', 2, '15. ünite · .gitlab-ci.yml, aşamalar ve runner', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-ci-status', 'git', 'gt-u15', 15, 'fill', 'derived', 'Bulunduğun dalın pipeline durumunu terminalde gösteren glab komutunu yaz.', '{"blanks":1}', '{"blanks":[["glab ci status"]]}', '`glab ci status` dalın son pipeline''ındaki işleri ve sonuçlarını listeler. GitHub''daki `gh pr checks`''in karşılığıdır.', 1, '15. ünite · .gitlab-ci.yml, aşamalar ve runner', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-neden', 'git', 'gt-u15', 15, 'mcq', 'derived', 'Bir kurum GitLab''ı kendi sunucusunda çalıştırırsa ne kazanır?', '{"choices":["Kod ve veriler kurumun kendi altyapısında kalır","Git komutları daha kısa yazılır","Yedek almaya gerek kalmaz","Güncellemeleri kimse yapmak zorunda kalmaz"]}', '{"index":0}', 'Veri kurumda kalır, ağ ve erişim kuralları kuruma göre ayarlanır. Bedeli de vardır: kurulum, güncelleme, yedek ve güvenlik yamaları kurumun işidir.', 1, '15. ünite · Kendi sunucunda GitLab', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-bedel', 'git', 'gt-u15', 15, 'tf', 'derived', 'Kendi sunucusunda GitLab çalıştıran kurum güvenlik güncellemelerini düşünmek zorunda değildir; onları GitLab şirketi uzaktan yapar.', '{}', '{"value":false}', 'Yanlış. Self-managed kurulumda sürüm yükseltmesi ve güvenlik yamaları kurumun sorumluluğundadır. Güncel tutulmayan bir sunucu bilinen açıklarla saldırıya açık kalır.', 2, '15. ünite · Kendi sunucunda GitLab', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-adres', 'git', 'gt-u15', 15, 'mcq', 'derived', 'Kurumun GitLab''ı `git.kurum.edu.tr` adresinde. Depoyu nasıl klonlarsın?', '{"choices":["Kurumun kendi adresiyle git clone ile","Yalnızca gitlab.com adresiyle","glab olmadan klonlanamaz","Önce GitHub''a taşımak gerekir"]}', '{"index":0}', 'Git için adres yalnızca bir adrestir: `git clone https://git.kurum.edu.tr/grup/proje.git`. Kimlik doğrulama kurumun hesabıyla yapılır.', 1, '15. ünite · Kendi sunucunda GitLab', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-ikinci-remote', 'git', 'gt-u15', 15, 'fill', 'derived', 'Mevcut depona GitLab''daki boş projeyi `gitlab` adıyla ikinci uzak depo olarak ekleyen komutu yaz (adresin yerine URL yaz).', '{"blanks":1}', '{"blanks":[["git remote add gitlab URL"]]}', 'Bir deponun birden çok uzak deposu olabilir: `origin` GitHub''ı, `gitlab` GitLab''ı gösterir. Push ederken hangisine gideceğini adıyla söylersin.', 1, '15. ünite · Depoyu bir platformdan ötekine taşımak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-all-tags', 'git', 'gt-u15', 15, 'mcq', 'derived', 'Bütün dalları ve etiketleri yeni uzak depoya göndermek için hangi iki komut kullanılır?', '{"choices":["git push gitlab --all ve git push gitlab --tags","git push gitlab main ve git tag --push","git clone gitlab ve git pull --all","git fetch gitlab --all ve git merge --tags"]}', '{"index":0}', '`--all` bütün yerel dalları, `--tags` bütün etiketleri gönderir. Yalnızca `git push gitlab main` derseniz öteki dallar eski platformda kalır.', 1, '15. ünite · Depoyu bir platformdan ötekine taşımak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-gecmis-tasinir', 'git', 'gt-u15', 15, 'tf', 'derived', 'Depo GitHub''dan GitLab''a push ile taşınınca commit geçmişi ve commit kimlikleri aynen korunur.', '{}', '{"value":true}', 'Doğru. Commit''ler aynı nesnelerdir; kimlikleri içeriklerinden hesaplanır. Ama issue''lar, PR''lar ve CI ayarları Git''in parçası değildir; onlar için platformun içe aktarma aracı kullanılır.', 1, '15. ünite · Depoyu bir platformdan ötekine taşımak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u15-set-url', 'git', 'gt-u15', 15, 'mcq', 'derived', 'Ekip tamamen GitLab''a geçti. `origin` hâlâ GitHub''ı gösteriyor. En temiz çözüm nedir?', '{"choices":["git remote set-url origin ile adresi GitLab''a çevirmek","Depoyu silip baştan git init yapmak","Her push''ta adresi elle yazmak","origin''i silip hiç uzak depo kullanmamak"]}', '{"index":0}', '`git remote set-url origin https://gitlab.com/...` adı aynı bırakır, adresi değiştirir. Dalların izleme ayarları `origin` adına bağlı olduğu için bozulmaz.', 2, '15. ünite · Depoyu bir platformdan ötekine taşımak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-cp-ne', 'git', 'gt-u16', 16, 'mcq', 'derived', '`git cherry-pick <commit>` ne yapar?', '{"choices":["O commit''in farkını buraya uygular","O commit''i geçmişten siler","İki dalı tamamen birleştirir","O commit''e geçip kopuk HEAD yapar"]}', '{"index":0}', 'cherry-pick tek bir commit''in getirdiği farkı alır ve bulunduğun dala uygular. Yeni commit''in içeriği aynı olabilir ama ebeveyni farklı olduğu için kimliği farklıdır.', 1, '16. ünite · cherry-pick ile tek commit taşımak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-cp-hotfix', 'git', 'gt-u16', 16, 'mcq', 'derived', 'dev''de beş commit var; biri canlıdaki bir hatayı düzeltiyor, öteki dördü yarım iş. Düzeltme hemen canlı dala (release) gitmeli. Ne yaparsın?', '{"choices":["Düzeltmeyi release''e cherry-pick ederim","dev''i release''e merge ederim","release''i dev''e rebase ederim","Beş commit''i de release''e push ederim"]}', '{"index":0}', 'Merge bütün dalı getirir, yarım işler de canlıya gider. cherry-pick yalnızca istenen commit''i taşır. (Üç ortamlı akışta ideal olan, düzeltmeyi baştan doğru daldan açmaktır.)', 1, '16. ünite · cherry-pick ile tek commit taşımak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-cp-kimlik', 'git', 'gt-u16', 16, 'tf', 'derived', 'cherry-pick ile taşınan commit, hedef dalda kaynaktakiyle aynı kimliği (hash) taşır.', '{}', '{"value":false}', 'Yanlış. Kimlik ebeveyni ve zamanı da kapsar; cherry-pick yeni bir commit yazar. `-x` seçeneği mesajın sonuna "(cherry picked from commit ...)" ekleyerek bağı belgeler.', 1, '16. ünite · cherry-pick ile tek commit taşımak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-cp-komut', 'git', 'gt-u16', 16, 'fill', 'derived', '`a1b2c3d` kimlikli commit''i bulunduğun dala uygulayan komutu yaz.', '{"blanks":1}', '{"blanks":[["git cherry-pick a1b2c3d"]]}', '`git cherry-pick a1b2c3d`. Çakışırsa merge''deki gibi çözer, `git add` ve `git cherry-pick --continue` dersin.', 1, '16. ünite · cherry-pick ile tek commit taşımak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-cp-cakisma', 'git', 'gt-u16', 16, 'fill', 'derived', 'cherry-pick çakışmayla durdu. Çakışmayı çözüp dosyayı `git add` ile işaretledin. Sıradaki komutu yaz.', '{"blanks":1}', '{"blanks":[["git cherry-pick --continue"]]}', '`git cherry-pick --continue` commit''i tamamlar. Vazgeçmek istersen `git cherry-pick --abort` her şeyi başladığın yere döndürür.', 2, '16. ünite · cherry-pick ile tek commit taşımak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-bisect-ne', 'git', 'gt-u16', 16, 'mcq', 'derived', '`git bisect` ne işe yarar?', '{"choices":["Hatayı getiren commit''i ikiye bölerek bulur","Dalı iki parçaya ayırır","İki commit arasındaki farkı gösterir","Çakışmaları kendiliğinden çözer"]}', '{"index":0}', 'Bir iyi (hatasız) ve bir kötü (hatalı) commit verirsin; Git ortadakini açar, sen dener ve iyi ya da kötü dersin. Her cevap aday sayısını yarıya indirir.', 1, '16. ünite · bisect ile hatayı getiren commit''i bulmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-bisect-adim-sayisi', 'git', 'gt-u16', 16, 'mcq', 'derived', 'İyi ve kötü commit arasında yaklaşık 1000 commit var. bisect hatalı commit''i en fazla kaç denemede bulur?', '{"choices":["Yaklaşık 10","Yaklaşık 100","Yaklaşık 500","1000"]}', '{"index":0}', 'İkili arama her adımda yarıya böler: 2^10 = 1024. Commit''leri tek tek denemek yüzlerce adım sürerdi.', 2, '16. ünite · bisect ile hatayı getiren commit''i bulmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-bisect-baslat', 'git', 'gt-u16', 16, 'fill', 'derived', 'Şu anki commit hatalı. bisect''i başlatıp bunu kötü olarak işaretledin. Hatasız olduğunu bildiğin `v1.0` etiketini işaretleyen komutu yaz.', '{"blanks":1}', '{"blanks":[["git bisect good v1.0"]]}', '`git bisect good v1.0`. İkisi de işaretlenince Git ortadaki commit''i açar ve "Bisecting: N revisions left to test" der.', 1, '16. ünite · bisect ile hatayı getiren commit''i bulmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-bisect-reset', 'git', 'gt-u16', 16, 'mcq', 'derived', 'bisect hatalı commit''i buldu. Başladığın dala dönmek için ne dersin?', '{"choices":["git bisect reset","git reset --hard","git bisect stop","git switch -"]}', '{"index":0}', '`git bisect reset` bisect durumunu temizler (refs/bisect altındaki işaretler dahil) ve başladığın dala döner.', 1, '16. ünite · bisect ile hatayı getiren commit''i bulmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-bisect-kopuk', 'git', 'gt-u16', 16, 'tf', 'derived', 'bisect sırasında Git commit''leri sırayla açtığı için HEAD kopuktur (detached).', '{}', '{"value":true}', 'Doğru. `git status` "HEAD detached at ..." ve "You are currently bisecting" der. Bu sırada commit atmak yerine yalnızca dener ve işaretlersin.', 2, '16. ünite · bisect ile hatayı getiren commit''i bulmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-bisect-good-yanlis', 'git', 'gt-u16', 16, 'mcq', 'derived', 'bisect sırasında dikkatsizce hatalı bir commit''e "good" dedin. Ne olur?', '{"choices":["Arama yanlış yöne gider, sonuç yanlış commit olur","Git hatayı kendiliğinden fark edip düzeltir","bisect hemen durur","Hiçbir şey; good ve bad aynı anlama gelir"]}', '{"index":0}', 'bisect cevaplarına güvenir; yanlış bir işaret yanlış yarıyı eler. `git bisect log` verdiğin cevapları gösterir; hatalıysa `git bisect reset` ile baştan başlarsın (ya da log''u düzeltip `git bisect replay`).', 3, '16. ünite · bisect ile hatayı getiren commit''i bulmak', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-blame-ne', 'git', 'gt-u16', 16, 'mcq', 'derived', '`git blame menu.txt` ne gösterir?', '{"choices":["Her satırı son değiştiren commit''i","Dosyadaki hataları","Dosyanın kaç kez açıldığını","Dosyayı silen kişiyi"]}', '{"index":0}', 'blame ("suçla") adına rağmen suçlu aramak için değil, bir satırın neden öyle olduğunu anlamak için kullanılır: commit''i bulur, `git show` ile mesajını ve bağlamını okursun.', 1, '16. ünite · blame ile satırın geçmişi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-blame-satir-araligi', 'git', 'gt-u16', 16, 'fill', 'derived', 'menu.txt''nin yalnızca 10-20. satırlarının blame''ini gösteren komutu yaz.', '{"blanks":1}', '{"blanks":[["git blame -L 10,20 menu.txt"]]}', '`-L 10,20` satır aralığını seçer. Büyük dosyalarda yalnız ilgilendiğin parçaya bakmanı sağlar.', 2, '16. ünite · blame ile satırın geçmişi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-blame-sonraki', 'git', 'gt-u16', 16, 'mcq', 'derived', 'blame bir satırın "a41c9e2" commit''inde değiştiğini gösterdi. Bu değişikliğin nedenini öğrenmek için ne yaparsın?', '{"choices":["git show a41c9e2 ile commit''e bakarım","git reset a41c9e2 yaparım","git revert a41c9e2 yaparım","Satırı silip yeniden yazarım"]}', '{"index":0}', 'Commit mesajı ve aynı commit''teki öteki değişiklikler "neden"i anlatır. İyi commit mesajlarının değeri tam bu anda ortaya çıkar.', 1, '16. ünite · blame ile satırın geçmişi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-blame-sinir', 'git', 'gt-u16', 16, 'tf', 'derived', 'blame bir satırı ilk yazanı değil, en son değiştireni gösterir.', '{}', '{"value":true}', 'Doğru. Satırdaki bir boşluk düzeltmesi bile sahipliği değiştirir. Daha eskiye inmek için `git blame <commit>^ -- dosya` ile bir önceki duruma bakılır ya da `git log -L` kullanılır.', 3, '16. ünite · blame ile satırın geçmişi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-blame-sapka', 'git', 'gt-u16', 16, 'mcq', 'derived', 'blame çıktısında bir satırın kimliğinin başında `^` var (`^5c1e2a0`). Bu ne demektir?', '{"choices":["İlk commit''ten beri değişmemiş","Satırın commit''i silinmiş","Satırda çözülmemiş çakışma var","Satırın commit''i imzasız"]}', '{"index":0}', '`^` sınır commit''ini gösterir: blame daha geriye gidemez. Bütün geçmişe bakıldığında bu, deponun ilk commit''idir.', 2, '16. ünite · blame ile satırın geçmişi', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-worktree-ne', 'git', 'gt-u16', 16, 'mcq', 'derived', '`git worktree add ../acil hotfix` ne yapar?', '{"choices":["../acil''de hotfix dalıyla ikinci çalışma dizini açar","Depoyu ../acil klasörüne kopyalar ve bağı koparır","hotfix dalını siler","../acil klasörünü .gitignore''a ekler"]}', '{"index":0}', 'worktree, tek bir .git deposuna bağlı birden çok çalışma klasörü açar. Yarım işini stash''lemeden başka dalda çalışabilirsin; commit''ler aynı depoya yazılır.', 1, '16. ünite · worktree: aynı depodan ikinci çalışma klasörü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-worktree-senaryo', 'git', 'gt-u16', 16, 'mcq', 'derived', 'Uzun süren bir özelliğin ortasındasın, dosyaların dağınık. Acil bir hata için main''de çalışman gerek ve testlerin yarım saat sürüyor. En rahat yol hangisi?', '{"choices":["git worktree ile main''i ayrı klasörde açmak","Her şeyi silip main''e geçmek","Yarım işi main''e commit''lemek","Depoyu baştan klonlayıp ayarları kopyalamak"]}', '{"index":0}', 'worktree iki dalı aynı anda, ayrı klasörlerde açık tutar. Stash da bir yoldur ama uzun testler sürerken öteki dalda çalışmana izin vermez.', 2, '16. ünite · worktree: aynı depodan ikinci çalışma klasörü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-worktree-ayni-dal', 'git', 'gt-u16', 16, 'tf', 'derived', 'Aynı dal iki ayrı worktree''de aynı anda açık olabilir.', '{}', '{"value":false}', 'Yanlış. Git bir dalın yalnızca bir worktree''de açık olmasına izin verir; ikisi aynı dalı ilerletmeye çalışırsa karışırdı. İkinci klasörde başka bir dal ya da yeni bir dal açarsın.', 2, '16. ünite · worktree: aynı depodan ikinci çalışma klasörü', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-submodule-ne', 'git', 'gt-u16', 16, 'mcq', 'derived', 'Submodule için hangisi doğrudur?', '{"choices":["Ana depo, alt deponun belirli bir commit''ini kaydeder","Alt deponun dosyaları ana depoya kopyalanır","Alt depo her zaman en son hâliyle gelir","Submodule yalnızca GitLab''da çalışır"]}', '{"index":0}', 'Ana depo alt deponun yalnızca hangi commit''te durduğunu tutar. Alt depo güncellenince ana depoda bunu ayrıca commit''lemen gerekir.', 1, '16. ünite · Submodule: depo içinde depo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-submodule-clone', 'git', 'gt-u16', 16, 'mcq', 'derived', 'Submodule''lü bir depoyu klonladın, alt modülün klasörü boş. Ne yapmalıydın?', '{"choices":["git submodule update --init","git pull --all","git fetch --tags","Klasörü elle doldurmak"]}', '{"index":0}', 'Düz `git clone` submodule''leri indirmez. Sonradan `git submodule update --init` dersin; baştan `git clone --recurse-submodules` ile klonlamak da aynı işi görür.', 2, '16. ünite · Submodule: depo içinde depo', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-hook-ne', 'git', 'gt-u16', 16, 'mcq', 'derived', 'Git hook''u (kanca) nedir?', '{"choices":["Git''in olaylarda kendiliğinden çalıştırdığı betik","Bir dalı başka dala bağlayan işaretçi","GitHub''daki bir onay türü","Commit''leri birleştiren bir komut"]}', '{"index":0}', 'Hook''lar .git/hooks klasöründeki betiklerdir: pre-commit, commit-msg, pre-push gibi. Sıfır olmayan çıkış kodu işlemi durdurur.', 1, '16. ünite · Git hook''ları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-hook-paylasilmaz', 'git', 'gt-u16', 16, 'tf', 'derived', '.git/hooks klasöründeki betikler clone ile ekip arkadaşlarına gitmez.', '{}', '{"value":true}', 'Doğru. .git klasörü depo içeriği değildir. Ekipler hook''ları depoda bir klasörde tutar ve `core.hooksPath` ayarıyla ya da husky, pre-commit gibi araçlarla kurar. Asıl güvence yine sunucudaki CI''dır.', 2, '16. ünite · Git hook''ları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-hook-commit-msg', 'git', 'gt-u16', 16, 'mcq', 'derived', 'Commit mesajının "feat: ..." biçiminde olup olmadığını commit sırasında denetlemek için hangi hook uygundur?', '{"choices":["commit-msg","post-merge","pre-rebase","post-checkout"]}', '{"index":0}', 'commit-msg hook''u mesaj dosyasını argüman olarak alır; biçim tutmazsa sıfırdan farklı çıkış koduyla commit''i durdurur.', 2, '16. ünite · Git hook''ları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-hook-atla', 'git', 'gt-u16', 16, 'mcq', 'derived', 'Ekip pre-commit hook''u ile lint denetimi kurdu. Bir arkadaşın `git commit --no-verify` ile hook''u atladı. Bunu ne yakalar?', '{"choices":["Sunucudaki CI ve dal koruması","Başka bir yerel hook","Git''in kendisi, --no-verify''ı reddeder","Hiçbir şey yakalayamaz"]}', '{"index":0}', 'Yerel hook''lar bir kolaylıktır ve atlanabilir. Kuralın gerçek güvencesi, herkesin değişikliğinin geçmek zorunda olduğu sunucudaki CI ve korumalı daldır.', 2, '16. ünite · Git hook''ları', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-lfs-ne', 'git', 'gt-u16', 16, 'mcq', 'derived', 'Git LFS ne işe yarar?', '{"choices":["Büyük dosyaları depo dışında tutar","Depoyu sıkıştırıp küçültür","Commit''leri imzalar","Dalları birleştirir"]}', '{"index":0}', 'Video, model, büyük veri gibi dosyalar her sürümüyle geçmişe girerse depo şişer. LFS bunları ayrı bir depolamada tutar, depoya küçük bir işaretçi dosyası girer.', 1, '16. ünite · Git LFS ve büyük dosyalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-lfs-sinir', 'git', 'gt-u16', 16, 'mcq', 'derived', '300 MB''lık bir dosyayı içeren push GitHub tarafından reddedildi. Bundan sonra büyük dosyalar için ne yaparsın?', '{"choices":["Git LFS ile izler ya da depo dışında tutarım","Dosyayı ikiye bölüp iki commit''te gönderirim","Push''u --force ile zorlarım","Depoyu private yaparım"]}', '{"index":0}', 'GitHub tek dosyada 100 MB''ı geçen push''u reddeder. Dosya zaten bir commit''teyse önce geçmişten çıkarılmalıdır (18. ünite); sonra LFS ya da depo dışı depolama kullanılır.', 1, '16. ünite · Git LFS ve büyük dosyalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-lfs-gitattributes', 'git', 'gt-u16', 16, 'mcq', 'derived', '`git lfs track "*.mp4"` kuralı hangi dosyaya yazılır ve commit''lenmelidir?', '{"choices":[".gitattributes",".gitignore",".git/config",".gitmodules"]}', '{"index":0}', 'LFS kuralları `.gitattributes` dosyasına yazılır. Bu dosya commit''lenmezse ekip arkadaşlarının bilgisayarında aynı dosyalar LFS''e değil doğrudan depoya girer.', 2, '16. ünite · Git LFS ve büyük dosyalar', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-imza-neden', 'git', 'gt-u16', 16, 'mcq', 'derived', 'Commit''leri imzalamak neden önemlidir?', '{"choices":["Commit''in yazarını kanıtlamak","Commit''leri daha küçük yapmak","Commit''leri gizlemek","Push''u hızlandırmak"]}', '{"index":0}', 'user.name ve user.email''e herkes istediğini yazabilir; Git commit''in yazar alanına ne yazarsan onu kabul eder, biri senin adınla commit atabilir. GPG ya da SSH anahtarıyla imzalanan commit''leri GitHub ve GitLab "Verified" diye işaretler.', 1, '16. ünite · İmzalı commit''ler', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, practice_id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('gt-u16-imza-bayrak', 'git', 'gt-u16', 16, 'mcq', 'derived', 'Tek bir commit''i imzalamak için `git commit`''e hangi seçenek eklenir?', '{"choices":["-S","-s","-v","-i"]}', '{"index":0}', 'Büyük `-S` imzalar (gpg-sign). Küçük `-s` ise yalnızca mesajın sonuna "Signed-off-by" satırı ekler; kriptografik bir imza değildir.', 2, '16. ünite · İmzalı commit''ler', 1)
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
UPDATE questions SET kavram = 'u10-izleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-origin-main-nedir';
UPDATE questions SET kavram = 'u10-izleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-origin-adi';
UPDATE questions SET kavram = 'u10-izleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-origin-commit';
UPDATE questions SET kavram = 'u10-izleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-upstream-nedir';
UPDATE questions SET kavram = 'u10-izleme', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u10-push-u';
UPDATE questions SET kavram = 'u10-izleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-ahead-behind';
UPDATE questions SET kavram = 'u10-izleme', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u10-status-guncel-mi';
UPDATE questions SET kavram = 'u10-izleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-branch-vv';
UPDATE questions SET kavram = 'u10-fetch-pull', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-fetch-ne-yapar';
UPDATE questions SET kavram = 'u10-fetch-pull', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-pull-esittir';
UPDATE questions SET kavram = 'u10-fetch-pull', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u10-fetch-komut';
UPDATE questions SET kavram = 'u10-fetch-pull', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u10-once-bak';
UPDATE questions SET kavram = 'u10-fetch-pull', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-ayrismis-pull';
UPDATE questions SET kavram = 'u10-fetch-pull', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u10-pull-rebase-komut';
UPDATE questions SET kavram = 'u10-fetch-pull', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-pull-ff';
UPDATE questions SET kavram = 'u10-push-reddi', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u10-fetch-first';
UPDATE questions SET kavram = 'u10-push-reddi', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-neden-red';
UPDATE questions SET kavram = 'u10-push-reddi', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-fetch-first-non-ff';
UPDATE questions SET kavram = 'u10-push-reddi', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u10-red-sonra-cakisma';
UPDATE questions SET kavram = 'u10-push-reddi', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-korumali-red';
UPDATE questions SET kavram = 'u10-push-reddi', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u10-kucuk-sik-push';
UPDATE questions SET kavram = 'u10-force', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-force-tehlike';
UPDATE questions SET kavram = 'u10-force', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-lease';
UPDATE questions SET kavram = 'u10-force', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u10-lease-komut';
UPDATE questions SET kavram = 'u10-force', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u10-force-ne-zaman';
UPDATE questions SET kavram = 'u10-force', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u10-force-kurtarma';
UPDATE questions SET kavram = 'u10-remote-yonetimi', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u10-remote-v';
UPDATE questions SET kavram = 'u10-remote-yonetimi', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u10-set-url';
UPDATE questions SET kavram = 'u10-remote-yonetimi', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-prune';
UPDATE questions SET kavram = 'u10-remote-yonetimi', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u10-uzak-dal-sil';
UPDATE questions SET kavram = 'u10-remote-yonetimi', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-uzaktan-dal-al';
UPDATE questions SET kavram = 'u10-remote-yonetimi', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u10-iki-remote';
UPDATE questions SET kavram = 'u11-rebase-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-ne-yapar';
UPDATE questions SET kavram = 'u11-rebase-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-yeni-hash';
UPDATE questions SET kavram = 'u11-rebase-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-eski-commitler';
UPDATE questions SET kavram = 'u11-rebase-nedir', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u11-rebase-komut';
UPDATE questions SET kavram = 'u11-rebase-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-zaten-guncel';
UPDATE questions SET kavram = 'u11-merge-rebase', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-fark';
UPDATE questions SET kavram = 'u11-merge-rebase', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-duz-gecmis';
UPDATE questions SET kavram = 'u11-merge-rebase', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u11-ne-zaman-rebase';
UPDATE questions SET kavram = 'u11-merge-rebase', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u11-ne-zaman-merge';
UPDATE questions SET kavram = 'u11-merge-rebase', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-rebase-merge-pr';
UPDATE questions SET kavram = 'u11-merge-rebase', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-graf-okuma';
UPDATE questions SET kavram = 'u11-etkilesimli', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-i-ne';
UPDATE questions SET kavram = 'u11-etkilesimli', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-squash';
UPDATE questions SET kavram = 'u11-etkilesimli', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-fixup';
UPDATE questions SET kavram = 'u11-etkilesimli', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-reword';
UPDATE questions SET kavram = 'u11-etkilesimli', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-drop';
UPDATE questions SET kavram = 'u11-etkilesimli', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-sira';
UPDATE questions SET kavram = 'u11-etkilesimli', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-squash-ilk';
UPDATE questions SET kavram = 'u11-etkilesimli', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u11-pr-oncesi';
UPDATE questions SET kavram = 'u11-etkilesimli', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u11-i-komut';
UPDATE questions SET kavram = 'u11-etkilesimli', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-edit';
UPDATE questions SET kavram = 'u11-altin-kural', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-kural';
UPDATE questions SET kavram = 'u11-altin-kural', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u11-push-sonrasi';
UPDATE questions SET kavram = 'u11-altin-kural', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u11-ortak-dal';
UPDATE questions SET kavram = 'u11-altin-kural', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-korumali';
UPDATE questions SET kavram = 'u11-altin-kural', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-kendi-dal';
UPDATE questions SET kavram = 'u11-cakisma', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u11-continue';
UPDATE questions SET kavram = 'u11-cakisma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-abort';
UPDATE questions SET kavram = 'u11-cakisma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-skip';
UPDATE questions SET kavram = 'u11-cakisma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-ours-theirs';
UPDATE questions SET kavram = 'u11-cakisma', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u11-tekrar-cakisma';
UPDATE questions SET kavram = 'u11-cakisma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u11-status-rebase';
UPDATE questions SET kavram = 'u12-neden-akis', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-neden';
UPDATE questions SET kavram = 'u12-neden-akis', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-tek-dogru';
UPDATE questions SET kavram = 'u12-neden-akis', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u12-karar';
UPDATE questions SET kavram = 'u12-github-flow', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-adimlar';
UPDATE questions SET kavram = 'u12-github-flow', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-main-hazir';
UPDATE questions SET kavram = 'u12-github-flow', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-trunk';
UPDATE questions SET kavram = 'u12-github-flow', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u12-uzun-dal';
UPDATE questions SET kavram = 'u12-github-flow', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-feature-flag';
UPDATE questions SET kavram = 'u12-git-flow', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-dallar';
UPDATE questions SET kavram = 'u12-git-flow', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-hotfix';
UPDATE questions SET kavram = 'u12-git-flow', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-release';
UPDATE questions SET kavram = 'u12-git-flow', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u12-agir';
UPDATE questions SET kavram = 'u12-uc-ortam', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-dallar-ne';
UPDATE questions SET kavram = 'u12-uc-ortam', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-nereden';
UPDATE questions SET kavram = 'u12-uc-ortam', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-sira';
UPDATE questions SET kavram = 'u12-uc-ortam', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-dev-toptan';
UPDATE questions SET kavram = 'u12-uc-ortam', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u12-dev-kirli';
UPDATE questions SET kavram = 'u12-uc-ortam', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u12-yanlis-yer';
UPDATE questions SET kavram = 'u12-uc-ortam', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u12-dal-ac-komut';
UPDATE questions SET kavram = 'u12-uc-ortam', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-release-pr';
UPDATE questions SET kavram = 'u12-uc-ortam', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-dal-silme';
UPDATE questions SET kavram = 'u12-adlandirma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-onek';
UPDATE questions SET kavram = 'u12-adlandirma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-bosluk';
UPDATE questions SET kavram = 'u12-adlandirma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-conventional';
UPDATE questions SET kavram = 'u12-adlandirma', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u12-is-numarasi';
UPDATE questions SET kavram = 'u12-surum', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-semver';
UPDATE questions SET kavram = 'u12-surum', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-major';
UPDATE questions SET kavram = 'u12-surum', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-etiket';
UPDATE questions SET kavram = 'u12-surum', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u12-etiket-komut';
UPDATE questions SET kavram = 'u12-surum', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-etiket-push';
UPDATE questions SET kavram = 'u12-surum', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u12-github-release';
UPDATE questions SET kavram = 'u12-surum', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u12-etiket-tasima';
UPDATE questions SET kavram = 'u13-koruma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-ne-ise';
UPDATE questions SET kavram = 'u13-koruma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-red-mesaji';
UPDATE questions SET kavram = 'u13-koruma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-force-kapali';
UPDATE questions SET kavram = 'u13-koruma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-git-mi';
UPDATE questions SET kavram = 'u13-koruma', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u13-yerel-commit';
UPDATE questions SET kavram = 'u13-koruma', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-uc-ortam-koruma';
UPDATE questions SET kavram = 'u13-onay', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-kendi-onay';
UPDATE questions SET kavram = 'u13-onay', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-codeowners';
UPDATE questions SET kavram = 'u13-onay', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-degisiklik-istegi';
UPDATE questions SET kavram = 'u13-onay', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u13-yeni-commit';
UPDATE questions SET kavram = 'u13-onay', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-inceleme-ne';
UPDATE questions SET kavram = 'u13-ci', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-ci-nedir';
UPDATE questions SET kavram = 'u13-ci', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-durum-denetimi';
UPDATE questions SET kavram = 'u13-ci', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u13-kirmizi';
UPDATE questions SET kavram = 'u13-ci', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u13-checks-komut';
UPDATE questions SET kavram = 'u13-ci', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-yerelde-gecti';
UPDATE questions SET kavram = 'u13-ci', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-cd';
UPDATE questions SET kavram = 'u13-actions', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-nerede';
UPDATE questions SET kavram = 'u13-actions', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-on';
UPDATE questions SET kavram = 'u13-actions', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-jobs-steps';
UPDATE questions SET kavram = 'u13-actions', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-checkout';
UPDATE questions SET kavram = 'u13-actions', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u13-gizli';
UPDATE questions SET kavram = 'u13-birlestirme-kurallari', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u13-pr-create';
UPDATE questions SET kavram = 'u13-birlestirme-kurallari', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-engel';
UPDATE questions SET kavram = 'u13-birlestirme-kurallari', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u13-cakisan-pr';
UPDATE questions SET kavram = 'u13-birlestirme-kurallari', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-squash-sil';
UPDATE questions SET kavram = 'u13-birlestirme-kurallari', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u13-admin';
UPDATE questions SET kavram = 'u13-birlestirme-kurallari', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u13-pr-guncellenir';
UPDATE questions SET kavram = 'u14-gizli-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-hangisi-gizli';
UPDATE questions SET kavram = 'u14-gizli-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-neden-tehlike';
UPDATE questions SET kavram = 'u14-gizli-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-env-dosyasi';
UPDATE questions SET kavram = 'u14-gizli-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-private-depo';
UPDATE questions SET kavram = 'u14-botlar', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-ne-kadar-hizli';
UPDATE questions SET kavram = 'u14-botlar', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-nasil-bulur';
UPDATE questions SET kavram = 'u14-botlar', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-kucuk-depo';
UPDATE questions SET kavram = 'u14-botlar', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u14-tuzak-anahtar';
UPDATE questions SET kavram = 'u14-silmek-yetmez', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-sil-commit';
UPDATE questions SET kavram = 'u14-silmek-yetmez', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-gecmis-temizle-yeter-mi';
UPDATE questions SET kavram = 'u14-silmek-yetmez', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u14-private-yap';
UPDATE questions SET kavram = 'u14-silmek-yetmez', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u14-log-p';
UPDATE questions SET kavram = 'u14-mudahale', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-ilk-adim';
UPDATE questions SET kavram = 'u14-mudahale', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-sira';
UPDATE questions SET kavram = 'u14-mudahale', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u14-kayitlar';
UPDATE questions SET kavram = 'u14-mudahale', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-yenile-env';
UPDATE questions SET kavram = 'u14-mudahale', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-haber';
UPDATE questions SET kavram = 'u14-onleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-ortam-degiskeni';
UPDATE questions SET kavram = 'u14-onleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-gitignore-sonra';
UPDATE questions SET kavram = 'u14-onleme', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u14-rm-cached';
UPDATE questions SET kavram = 'u14-onleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-en-az-yetki';
UPDATE questions SET kavram = 'u14-onleme', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-yonetici';
UPDATE questions SET kavram = 'u14-tarama', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-push-protection';
UPDATE questions SET kavram = 'u14-tarama', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u14-gh013-sonra';
UPDATE questions SET kavram = 'u14-tarama', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-secret-scanning';
UPDATE questions SET kavram = 'u14-tarama', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-pre-commit';
UPDATE questions SET kavram = 'u14-on-yuz', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-vite-onek';
UPDATE questions SET kavram = 'u14-on-yuz', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-ci-gunluk';
UPDATE questions SET kavram = 'u14-on-yuz', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-defter';
UPDATE questions SET kavram = 'u14-on-yuz', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u14-env-example';
UPDATE questions SET kavram = 'u15-gitlab-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-ne';
UPDATE questions SET kavram = 'u15-gitlab-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-ayni-git';
UPDATE questions SET kavram = 'u15-gitlab-nedir', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u15-neden-gitlab';
UPDATE questions SET kavram = 'u15-gitlab-nedir', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-ce-ee';
UPDATE questions SET kavram = 'u15-karsilik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-pr-mr';
UPDATE questions SET kavram = 'u15-karsilik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-unlem';
UPDATE questions SET kavram = 'u15-karsilik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-group';
UPDATE questions SET kavram = 'u15-karsilik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-actions-ci';
UPDATE questions SET kavram = 'u15-karsilik', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-maintainer';
UPDATE questions SET kavram = 'u15-mr', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u15-glab-create';
UPDATE questions SET kavram = 'u15-mr', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-push-ipucu';
UPDATE questions SET kavram = 'u15-mr', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u15-yeni-commit';
UPDATE questions SET kavram = 'u15-mr', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-remove-source';
UPDATE questions SET kavram = 'u15-korumali', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-red';
UPDATE questions SET kavram = 'u15-korumali', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-allowed';
UPDATE questions SET kavram = 'u15-korumali', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-onay';
UPDATE questions SET kavram = 'u15-korumali', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u15-pipeline-kosul';
UPDATE questions SET kavram = 'u15-gitlab-ci', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-stages';
UPDATE questions SET kavram = 'u15-gitlab-ci', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-script';
UPDATE questions SET kavram = 'u15-gitlab-ci', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-runner';
UPDATE questions SET kavram = 'u15-gitlab-ci', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u15-ci-status';
UPDATE questions SET kavram = 'u15-self-hosted', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-neden';
UPDATE questions SET kavram = 'u15-self-hosted', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-bedel';
UPDATE questions SET kavram = 'u15-self-hosted', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u15-adres';
UPDATE questions SET kavram = 'u15-tasima', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u15-ikinci-remote';
UPDATE questions SET kavram = 'u15-tasima', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-all-tags';
UPDATE questions SET kavram = 'u15-tasima', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u15-gecmis-tasinir';
UPDATE questions SET kavram = 'u15-tasima', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u15-set-url';
UPDATE questions SET kavram = 'u16-cherry-pick', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-cp-ne';
UPDATE questions SET kavram = 'u16-cherry-pick', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u16-cp-hotfix';
UPDATE questions SET kavram = 'u16-cherry-pick', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-cp-kimlik';
UPDATE questions SET kavram = 'u16-cherry-pick', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u16-cp-komut';
UPDATE questions SET kavram = 'u16-cherry-pick', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u16-cp-cakisma';
UPDATE questions SET kavram = 'u16-bisect', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-bisect-ne';
UPDATE questions SET kavram = 'u16-bisect', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-bisect-adim-sayisi';
UPDATE questions SET kavram = 'u16-bisect', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u16-bisect-baslat';
UPDATE questions SET kavram = 'u16-bisect', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-bisect-reset';
UPDATE questions SET kavram = 'u16-bisect', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-bisect-kopuk';
UPDATE questions SET kavram = 'u16-bisect', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u16-bisect-good-yanlis';
UPDATE questions SET kavram = 'u16-blame', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-blame-ne';
UPDATE questions SET kavram = 'u16-blame', yedek = 0, etiketler = 'komut' WHERE id = 'gt-u16-blame-satir-araligi';
UPDATE questions SET kavram = 'u16-blame', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u16-blame-sonraki';
UPDATE questions SET kavram = 'u16-blame', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-blame-sinir';
UPDATE questions SET kavram = 'u16-blame', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-blame-sapka';
UPDATE questions SET kavram = 'u16-worktree', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-worktree-ne';
UPDATE questions SET kavram = 'u16-worktree', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u16-worktree-senaryo';
UPDATE questions SET kavram = 'u16-worktree', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-worktree-ayni-dal';
UPDATE questions SET kavram = 'u16-submodule', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-submodule-ne';
UPDATE questions SET kavram = 'u16-submodule', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u16-submodule-clone';
UPDATE questions SET kavram = 'u16-hooks', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-hook-ne';
UPDATE questions SET kavram = 'u16-hooks', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-hook-paylasilmaz';
UPDATE questions SET kavram = 'u16-hooks', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-hook-commit-msg';
UPDATE questions SET kavram = 'u16-hooks', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u16-hook-atla';
UPDATE questions SET kavram = 'u16-lfs', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-lfs-ne';
UPDATE questions SET kavram = 'u16-lfs', yedek = 0, etiketler = 'senaryo' WHERE id = 'gt-u16-lfs-sinir';
UPDATE questions SET kavram = 'u16-lfs', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-lfs-gitattributes';
UPDATE questions SET kavram = 'u16-imza', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-imza-neden';
UPDATE questions SET kavram = 'u16-imza', yedek = 0, etiketler = 'kavram' WHERE id = 'gt-u16-imza-bayrak';
