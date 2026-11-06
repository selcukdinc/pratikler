// 5. ünite: Job ads & applications. Haftalık listede yok; quizde iş ilanı ve
// başvuru kelimeleri (requirements, responsibilities, preferred qualifications,
// good fit, meet the requirement) sorulduğu için ayrı ünite olarak eklendi.

import { k, quiz, turet, type Soru } from "./yardimci.ts";

const U = 5;

export const unite5: Soru[] = [
  ...quiz(U, [
    {
      grup: "A", no: 3, kavram: "u5-ilan",
      soru: k("anlam", "What are “preferred qualifications” in a job ad?"),
      secenekler: [
        "A part that carries out a physical action",
        "Extra skills or experience that an employer would like",
        "Operating without a connection to the electricity grid",
        "Recovering energy while a vehicle slows down",
        "A link to the public electricity network",
      ],
      dogru: 1,
      aciklama: "*Preferred qualifications* zorunlu değildir; işverenin olmasını tercih ettiği ek beceri ya da deneyimlerdir. Zorunlu olanlar *requirements*tır.",
    },
    {
      grup: "A", no: 10, kavram: "u5-basvuru",
      soru: k("kelime", "I think I am a good _____ because I have built IoT prototypes."),
      secenekler: ["drive", "range", "task", "fit", "grid"],
      dogru: 3,
      aciklama: "*a good fit (for the job)* = pozisyona uygun aday. Başvuruda sık kullanılan bir kalıptır.",
    },
    {
      grup: "A", no: 15, kavram: "u5-ilan",
      // Quiz kağıdında ilk iki şıkkın numaraları basılmamış (yalnızca "( )");
      // paragrafta geriye kalan iki cümle (4) ve (5) olduğu için onlar yazıldı.
      soru: k("paragraf", "(1) The job ad asks for embedded-system experience. (2) PV cells convert sunlight into electrical energy. (3) It lists firmware testing among the responsibilities. (4) The candidate has used microcontrollers in a project. (5) She explains how her project meets the requirement."),
      secenekler: ["(4)", "(5)", "(2)", "(1)", "(3)"],
      dogru: 2,
      aciklama: "Paragraf bir iş ilanını ve adayın ilana uygunluğunu anlatıyor. PV hücrelerinin güneşten elektrik üretmesi (**2. cümle**) güneş enerjisi konusudur.",
    },
    {
      grup: "A", no: 20, kavram: "u5-basvuru",
      soru: k("tr", "“I meet the requirement because I have tested wireless devices.”"),
      secenekler: [
        "Gereklilikleri karşılasam da kablosuz cihazları test etmedim.",
        "Kablosuz cihazları satmak için iş ilanı yazıyorum.",
        "Kablosuz cihazları test etmeden gerekliliği karşılıyorum.",
        "Kablosuz cihazları test etmek için gereklilikleri değiştiriyorum.",
        "Kablosuz cihazları test ettiğim için gerekliliği karşılıyorum.",
      ],
      dogru: 4,
      aciklama: "*I meet the requirement* = gerekliliği karşılıyorum, *because I have tested* = test ettiğim için.",
    },
    {
      grup: "A", no: 25, kavram: "u5-ilan",
      soru: k("en", "“Bu pozisyon hem cihaz testini hem de ekip çalışmasını gerektiriyor.”"),
      secenekler: [
        "This position requires both device testing and teamwork.",
        "Both device testing and teamwork requires this position.",
        "This position requires either device testing nor teamwork.",
        "This position is required both device testing and teamwork.",
        "This position provides both device testing and teamwork.",
      ],
      dogru: 0,
      aciklama: "*hem ... hem de* = *both ... and*, *gerektiriyor* = *requires*. *either ... nor* hatalı bir kalıptır (doğrusu *either ... or* ya da *neither ... nor*).",
    },
    {
      grup: "B", no: 5, kavram: "u5-ilan",
      soru: k("anlam", "What are “responsibilities” in a job ad?"),
      secenekler: [
        "A charger built into a vehicle",
        "Adjusting how fast a motor runs",
        "The duties of the person in the role",
        "The amount of sunlight reaching a surface",
        "Information available as events happen",
      ],
      dogru: 2,
      aciklama: "*Responsibilities* pozisyondaki kişinin yapacağı görevlerdir (duties).",
    },
    {
      grup: "B", no: 10, kavram: "u5-basvuru",
      soru: k("kelime", "One area I still need to _____ is firmware testing."),
      secenekler: ["improve", "measure", "charge", "connect", "provide"],
      dogru: 0,
      aciklama: "*One area I still need to improve is ...* = hâlâ geliştirmem gereken bir alan ... Mülakatta zayıf yönü anlatmanın kalıbıdır.",
    },
    {
      grup: "B", no: 15, kavram: "u5-basvuru",
      soru: k("paragraf", "(1) A company needs an IoT engineer. (2) The position requires wireless-network knowledge. (3) A motor’s rotor spins inside the stator. (4) The applicant describes a relevant class project. (5) The interviewer asks how the project matches the role."),
      secenekler: ["(2)", "(4)", "(5)", "(1)", "(3)"],
      dogru: 4,
      aciklama: "Paragraf bir IoT mühendisi pozisyonunu ve mülakatı anlatıyor. Rotor ve statordan söz eden **3. cümle** konunun dışında.",
    },
    {
      grup: "B", no: 20, kavram: "u5-ilan",
      soru: k("tr", "“Among the requirements are programming skills and teamwork.”"),
      secenekler: [
        "Gereklilikler programlama becerilerini ortadan kaldırır.",
        "Programlama ve ekip çalışması bu işte yasaktır.",
        "Programlama becerileri ekip çalışmasının yerini alır.",
        "Gereklilikler arasında programlama becerileri ve ekip çalışması vardır.",
        "Ekip çalışması yalnızca programcılar içindir.",
      ],
      dogru: 3,
      aciklama: "*Among the requirements are ...* = gereklilikler arasında ... vardır. Cümle devrik: özne (programming skills and teamwork) fiilden sonra gelir.",
    },
    {
      grup: "B", no: 25, kavram: "u5-basvuru",
      soru: k("en", "“Bu gerekliliği karşılıyorum çünkü kablosuz sistemlerle çalıştım.”"),
      secenekler: [
        "I have worked wireless systems because this requirement meets me.",
        "I meet this requirement although I have worked with wireless systems.",
        "I require this work because wireless systems meet me.",
        "I meet this requirement because I have worked with wireless systems.",
        "I meet this requirement because I am worked with wireless systems.",
      ],
      dogru: 3,
      aciklama: "*karşılıyorum* = *I meet*, *çünkü* = *because* (although \"-e rağmen\" demektir), *çalıştım* = *I have worked with*. *I am worked* dilbilgisi olarak yanlıştır.",
    },
  ]),

  ...turet(U, "u5-ilan", [
    {
      id: "ie-u5-req-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What are “requirements” in a job ad?"),
      secenekler: [
        "Skills and experience that the applicant must have",
        "Extra skills that are nice to have but not necessary",
        "The salary and holidays of the job",
        "The address of the company",
        "The duties of the person in the role",
      ],
      dogru: 0,
      aciklama: "*Requirements* adayda mutlaka bulunması gereken beceri ve deneyimlerdir. \"Olsa iyi olur\" olanlar *preferred qualifications*, görevler *responsibilities*tir.",
    },
    {
      id: "ie-u5-pref-kelime", tip: "mcq", zorluk: 2,
      soru: k("kelime", "Experience with solar systems is not required, but it is listed under preferred _____."),
      secenekler: ["qualifications", "responsibilities", "connections", "devices", "requirements"],
      dogru: 0,
      aciklama: "Zorunlu olmayan ama tercih sebebi olan beceriler **preferred qualifications** başlığında listelenir.",
    },
    {
      id: "ie-u5-resp-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "Testing firmware and writing reports are among the main _____ of this role."),
      secenekler: ["responsibilities", "qualifications", "applicants", "connectors", "sensors"],
      dogru: 0,
      aciklama: "Pozisyondaki kişinin yapacağı görevler **responsibilities**tir.",
    },
    {
      id: "ie-u5-pozisyon-tr", tip: "mcq", zorluk: 2,
      soru: k("tr", "“The position requires experience with motor drives.”"),
      secenekler: [
        "Pozisyon motor sürücüleri deneyimi gerektirir.",
        "Pozisyon motor sürücülerini test etmez.",
        "Motor sürücüleri bu pozisyonu gerektirir.",
        "Pozisyon için motor sürücüsü satın almak gerekir.",
        "Motor sürücüleri deneyimi bu pozisyonda yasaktır.",
      ],
      dogru: 0,
      aciklama: "*requires* = gerektirir, *experience with motor drives* = motor sürücüleri deneyimi. Özne *the position*.",
    },
    {
      id: "ie-u5-ilan-tf", tip: "tf", zorluk: 1,
      soru: "In a job ad, “responsibilities” are the duties of the job, while “requirements” are what the applicant must have.",
      dogru: true,
      aciklama: "Doğru. Sorumluluklar işte yapılacakları, gereklilikler adayda aranan şartları anlatır.",
    },
  ]),

  ...turet(U, "u5-basvuru", [
    {
      id: "ie-u5-fit-anlam", tip: "mcq", zorluk: 1,
      soru: k("anlam", "What does “I am a good fit for this role” mean?"),
      secenekler: [
        "My skills and experience match the job well",
        "I am physically strong enough for the job",
        "I want to change the job's requirements",
        "I am looking for a different job",
        "The job ad has a mistake in it",
      ],
      dogru: 0,
      aciklama: "*A good fit* = uygun aday; becerilerin ve deneyimin pozisyonla örtüşmesi.",
    },
    {
      id: "ie-u5-meet-en", tip: "mcq", zorluk: 2,
      soru: k("en", "“Mikrodenetleyicilerle bir proje yaptığım için bu gerekliliği karşılıyorum.”"),
      secenekler: [
        "I meet this requirement because I have done a project with microcontrollers.",
        "This requirement meets me because microcontrollers did a project.",
        "I meet this requirement although I have done a project with microcontrollers.",
        "I require this project because I have met microcontrollers.",
        "I have done this requirement because microcontrollers meet a project.",
      ],
      dogru: 0,
      aciklama: "*... için* (sebep) = *because*, *karşılıyorum* = *I meet*, *bir proje yaptım* = *I have done a project*. *although* \"-e rağmen\" anlamına gelir.",
    },
    {
      id: "ie-u5-applicant-kelime", tip: "mcq", zorluk: 1,
      soru: k("kelime", "Every _____ must send a CV and a short cover letter."),
      secenekler: ["applicant", "actuator", "inverter", "connector", "stator"],
      dogru: 0,
      aciklama: "İşe başvuran kişi **applicant**tır (başvuru sahibi).",
    },
    {
      id: "ie-u5-improve-tr", tip: "mcq", zorluk: 2,
      soru: k("tr", "“I am working to improve my teamwork skills.”"),
      secenekler: [
        "Ekip çalışması becerilerimi geliştirmek için çalışıyorum.",
        "Ekip çalışması becerilerim çok iyi olduğu için çalışmıyorum.",
        "Ekibim benim becerilerimi geliştiriyor.",
        "Ekip çalışması yerine tek başıma çalışıyorum.",
        "Becerilerimi ölçmek için ekip kuruyorum.",
      ],
      dogru: 0,
      aciklama: "*I am working to improve* = geliştirmek için çalışıyorum, *my teamwork skills* = ekip çalışması becerilerim.",
    },
    {
      id: "ie-u5-teamwork-fill", tip: "fill", zorluk: 1,
      soru: "Complete with one word: The job needs someone who can work well with others, so ____ is one of the requirements.",
      bosluklar: [["teamwork", "team work"]],
      aciklama: "Başkalarıyla iyi çalışabilmek **teamwork**tür (ekip çalışması).",
    },
  ]),
];
