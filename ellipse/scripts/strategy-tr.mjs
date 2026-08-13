// uz/ru translations for the strategy grammar lessons (B2, C1).
const P = (uz, ru) => ({ uz, ru });
export const STRATEGY_TR = {
  B2: {
    st1: {
      lead: P(
        "Subject-verb agreement savollarida bo'sh joyli gap beriladi va qaysi fe'l shakli Standard English qoidalariga mos kelishi so'raladi. Qoida oddiy: birlikdagi ega — birlikdagi fe'l, ko'plikdagi ega — ko'plikdagi fe'l. Qiyinchilik — gap HAQIQIY egani yashirganda uni topishda. Eng keng tarqalgan tuzoq: ega bilan fe'l orasidagi ORALIQ IBORA (intervening phrase). of, in, with, among, along with, together with, as well as, including, excluding bilan boshlanadigan predlogli iboralar eganing sonini O'ZGARTIRMAYDI. Har doim fe'ldan oldingi asosiy otni toping, ular orasidagi hamma narsani e'tiborsiz qoldiring.",
        "Вопросы на subject-verb agreement дают предложение с пропуском и спрашивают, какая форма глагола соответствует нормам Standard English. Правило простое: единственное число подлежащего — глагол в единственном числе, множественное — во множественном. Трудность — найти НАСТОЯЩЕЕ подлежащее, когда предложение его прячет. Самая частая ловушка: ВСТАВНАЯ ФРАЗА между подлежащим и глаголом. Предложные обороты с of, in, with, among, along with, together with, as well as, including, excluding НЕ меняют число подлежащего. Всегда находите главное существительное перед глаголом, игнорируя всё, что стоит между ними."
      ),
      tip: null,
      blocks: [
        {
          h: P("Qanday ishlaydi", "Как это работает"),
          p: [
            P(
              "ORALIQ IBORA strategiyasi: ega bilan fe'l orasidagi hamma narsani chizib tashlang. 'The collection of rare manuscripts [was/were] donated' → 'of rare manuscripts'ni o'chiring → 'The collection ___ donated' → birlik → was. 'A team of engineers [has/have] designed' → 'of engineers'ni o'chiring → 'A team ___ designed' → birlik → has. Fe'lga eng yaqin ot har doim ham ega EMAS — ega bu fe'l harakatini bajarayotgan ASOSIY ot.",
              "Стратегия ВСТАВНОЙ ФРАЗЫ: вычеркните всё между подлежащим и глаголом. 'The collection of rare manuscripts [was/were] donated' → убираем 'of rare manuscripts' → 'The collection ___ donated' → ед. число → was. 'A team of engineers [has/have] designed' → убираем 'of engineers' → 'A team ___ designed' → ед. число → has. Ближайшее к глаголу существительное — НЕ обязательно подлежащее; подлежащее — это ГЛАВНОЕ существительное, действие которого описывает глагол."
            ),
            P(
              "Uchta asosiy naqsh: (1) 'The number of X' = BIRLIK ('The number of applicants has increased'). (2) 'A number of X' = KO'PLIK ('A number of applicants have applied'). (3) AND bilan bog'langan egalar = KO'PLIK, faqat bir butunlikni anglatganda emas ('peanut butter and jelly IS my favorite sandwich'). Yodlang: 'the number' = birlik; 'a number' = ko'plik. Bu farq deyarli har bir imtihonda uchraydi.",
              "Три ключевых шаблона: (1) 'The number of X' = ЕДИНСТВЕННОЕ число ('The number of applicants has increased'). (2) 'A number of X' = МНОЖЕСТВЕННОЕ ('A number of applicants have applied'). (3) Подлежащие, соединённые AND, = множественное число, КРОМЕ случаев, когда они образуют одно целое ('peanut butter and jelly IS my favorite sandwich'). Запомните: 'the number' = ед. число; 'a number' = мн. число. Это различие встречается почти на каждом экзамене."
            ),
          ],
        },
        {
          h: P("Asosiy fikrlar", "Ключевые моменты"),
          p: [
            P("Oraliq ibora usuli: ega bilan fe'l orasidagi hamma narsani chizib tashlang", "Приём вставной фразы: вычеркните всё между подлежащим и глаголом"),
            P("'The number of X' = BIRLIK | 'A number of X' = KO'PLIK", "'The number of X' = ЕД. число | 'A number of X' = МН. число"),
            P("Predlogli iboralar (of, in, with, among) eganing soniga TA'SIR QILMAYDI", "Предложные обороты (of, in, with, among) НЕ влияют на число подлежащего"),
            P("AND bilan bog'langan egalar → ko'plik (bir butunlikni bildirmasa)", "Подлежащие с AND → мн. число (если это не одно целое)"),
            P("Neither/either ega bo'lsa → BIRLIK", "Neither/either как подлежащее → ЕД. число"),
            P("Jamlovchi otlar (team, committee, jury) → Amerika inglizchasida BIRLIK", "Собирательные существительные (team, committee, jury) → ЕД. число в американском английском"),
            P("Who/that/which: fe'l ANTETSEDENT (who/that/which nimaga ishora qilsa, o'sha) bilan moslashadi", "Who/that/which: глагол согласуется с АНТЕЦЕДЕНТОМ (тем, к чему отсылает who/that/which)"),
          ],
        },
      ],
      quiz: [
        P("'of new antibiotic compounds'ni o'chiring: 'The discovery ___ offered' — ega 'discovery' (birlik) → has.", "Уберите 'of new antibiotic compounds': 'The discovery ___ offered' — подлежащее 'discovery' (ед. число) → has."),
        P("'A number of X' = ko'plik → have; 'the number of X' esa birlik bo'lardi.", "'A number of X' = мн. число → have; а 'the number of X' было бы ед. числом."),
        P("Jury bir butun sifatida BITTA hukm chiqardi → Amerika inglizchasida birlik → has.", "Jury как единое целое вынесло ОДИН вердикт → в американском английском ед. число → has."),
        P("'who' 'members'ga (ko'plik) ishora qiladi, 'committee'ga emas → have.", "'who' отсылает к 'members' (мн. число), а не к 'committee' → have."),
        P("Uzun oraliq iborani o'chiring: ega 'influence' (birlik) → has.", "Вычеркните длинную вставную фразу: подлежащее 'influence' (ед. число) → has."),
      ],
    },
    st2: {
      lead: P(
        "OR / NOR bilan MURAKKAB EGALAR: fe'l o'ziga ENG YAQIN ega bilan moslashadi. 'Either the manager or the employees are responsible' (employees = ko'plik → are). 'Either the employees or the manager is responsible' (manager = birlik → is). AND bilan: deyarli har doim ko'plik. Istisno: 'bread and butter IS expensive' (bir narsa sifatida qaraladi). TESKARI TARTIBLI GAPLAR: fe'l egadan oldin kelganda ('here', 'there' bilan yoki predlogli ibora bilan boshlanadigan gaplar), haqiqiy egani fe'ldan KEYIN toping. 'There are several problems' (problems = ko'plik → are). 'There is a problem' (problem = birlik → is).",
        "СОСТАВНЫЕ ПОДЛЕЖАЩИЕ с OR / NOR: глагол согласуется с БЛИЖАЙШИМ подлежащим. 'Either the manager or the employees are responsible' (employees = мн. число → are). 'Either the employees or the manager is responsible' (manager = ед. число → is). С AND: почти всегда мн. число. Исключение: 'bread and butter IS expensive' (воспринимается как одно целое). ИНВЕРСИЯ: когда глагол стоит перед подлежащим (предложения с 'here', 'there' или начинающиеся с предложного оборота), ищите настоящее подлежащее ПОСЛЕ глагола. 'There are several problems' (problems = мн. число → are). 'There is a problem' (problem = ед. число → is)."
      ),
      tip: null,
      blocks: [
        {
          h: P("Qanday ishlaydi", "Как это работает"),
          p: [
            P(
              "NOANIQ OLMOSHLAR: bu guruhlarni yodlang. HAR DOIM BIRLIK: each, every, either, neither, one, anyone, everyone, someone, no one, anybody, everybody, somebody, nobody, anything, everything, something, nothing, another, much. HAR DOIM KO'PLIK: both, few, many, others, several. IKKALASI HAM BO'LISHI MUMKIN (keyingi 'of' iborasiga bog'liq): all, any, more, most, none, some. 'Some of the water IS contaminated' (water = birlik → is). 'Some of the samples ARE contaminated' (samples = ko'plik → are).",
              "НЕОПРЕДЕЛЁННЫЕ МЕСТОИМЕНИЯ: выучите группы. ВСЕГДА ЕД. ЧИСЛО: each, every, either, neither, one, anyone, everyone, someone, no one, anybody, everybody, somebody, nobody, anything, everything, something, nothing, another, much. ВСЕГДА МН. ЧИСЛО: both, few, many, others, several. МОГУТ БЫТЬ И ТЕМ И ДРУГИМ (зависит от последующей фразы с 'of'): all, any, more, most, none, some. 'Some of the water IS contaminated' (water = ед. число → is). 'Some of the samples ARE contaminated' (samples = мн. число → are)."
            ),
            P(
              "WHO/THAT/WHICH NISBIY GAPLAR: bu olmoshlar kiritadigan gapda fe'l antetsedent bilan moslashishi kerak. 'She is one of the scientists who HAVE published on this topic' — 'who' 'scientists'ga (ko'plik) ishora qiladi → have. Solishtiring: 'She is the only one of the scientists who HAS published on this topic' — 'the only one' bitta odamga cheklaydi → has. 'One of those who' va 'the only one who' farqi imtihonda tez-tez uchraydi.",
              "ОТНОСИТЕЛЬНЫЕ ПРИДАТОЧНЫЕ с WHO/THAT/WHICH: в них глагол согласуется с антецедентом. 'She is one of the scientists who HAVE published on this topic' — 'who' отсылает к 'scientists' (мн. число) → have. Сравните: 'She is the only one of the scientists who HAS published on this topic' — 'the only one' ограничивает до одного человека → has. Различие 'one of those who' и 'the only one who' — регулярный экзаменационный пункт."
            ),
          ],
        },
        {
          h: P("Asosiy fikrlar", "Ключевые моменты"),
          p: [
            P("Or/nor: fe'l ENG YAQIN ega bilan moslashadi ('manager or employees ARE')", "Or/nor: глагол согласуется с БЛИЖАЙШИМ подлежащим ('manager or employees ARE')"),
            P("There is/are: egani 'there'dan KEYIN toping", "There is/are: ищите подлежащее ПОСЛЕ 'there'"),
            P("BIRLIKDAGI noaniq olmoshlar: each, every, either, neither, everyone, anyone, no one", "Неопределённые местоимения ЕД. числа: each, every, either, neither, everyone, anyone, no one"),
            P("KO'PLIKDAGI noaniq olmoshlar: both, few, many, several", "Неопределённые местоимения МН. числа: both, few, many, several"),
            P("MOSLASHUVCHAN olmoshlar (all, some, none, most): 'of X'dagi ot bilan moslashadi", "ГИБКИЕ местоимения (all, some, none, most): согласуются с существительным в 'of X'"),
            P("'One of the X who' → KO'PLIK fe'l | 'The only one of the X who' → BIRLIK", "'One of the X who' → глагол МН. числа | 'The only one of the X who' → ЕД. число"),
            P("Every/each + murakkab ega: baribir BIRLIK ('Each student and teacher IS present')", "Every/each + составное подлежащее: всё равно ЕД. число ('Each student and teacher IS present')"),
          ],
        },
      ],
      quiz: [
        P("'Neither...nor'da fe'l eng yaqin egaga qaraydi: 'teachers' (ko'plik) → have.", "При 'neither...nor' глагол согласуется с ближайшим подлежащим: 'teachers' (мн. число) → have."),
        P("'A number of reasons' = ko'plik → are.", "'A number of reasons' = мн. число → are."),
        P("'of the proposed solutions'ni o'chiring: ega 'each' (birlik) → has.", "Уберите 'of the proposed solutions': подлежащее 'each' (ед. число) → has."),
        P("'Most of the evidence' — 'evidence' sanalmaydigan ot (birlik) → has.", "'Most of the evidence' — 'evidence' неисчисляемое (ед. число) → has."),
        P("'one of the few scientists who' → 'who' 'scientists'ga (ko'plik) ishora qiladi → have.", "'one of the few scientists who' → 'who' отсылает к 'scientists' (мн. число) → have."),
      ],
    },
    st3: {
      lead: P(
        "Pronoun agreement savollari olmosh o'z antetsedenti (u ishora qiladigan ot) bilan SON (birlik/ko'plik) va SHAXS jihatidan to'g'ri moslashganini tekshiradi. Savol formati odatda: olmosh yoki olmoshli ibora tushirilgan bo'sh joyli matn. Imtihondagi eng keng tarqalgan xato — antetsedent BIRLIK bo'lganda KO'PLIKDAGI olmosh ('they/their/them') ishlatish. Bu ayniqsa quyidagilarda qiyin: (1) noaniq olmoshlar ('everyone left their bag' — 'everyone' birlik, shuning uchun 'their' rasman xato; 'his or her' ishlating), (2) jamlovchi otlar va (3) kontekst tufayli ko'plikdek tuyuladigan birlikdagi otlar.",
        "Вопросы на pronoun agreement проверяют, согласуется ли местоимение со своим антецедентом (существительным, к которому оно отсылает) в ЧИСЛЕ (ед./мн.) и ЛИЦЕ. Формат обычно такой: отрывок с пропуском на месте местоимения. Самая частая ошибка на экзамене — местоимение МН. числа ('they/their/them') при антецеденте в ЕД. числе. Особенно коварны: (1) неопределённые местоимения ('everyone left their bag' — 'everyone' ед. числа, поэтому 'their' формально неверно; используйте 'his or her'), (2) собирательные существительные и (3) существительные ед. числа, которые из-за контекста кажутся множественными."
      ),
      tip: null,
      blocks: [
        {
          h: P("Qanday ishlaydi", "Как это работает"),
          p: [
            P(
              "BIRLIKDAGI THEY: imtihon qoidalari yangilangan — shaxsning jinsi noma'lum bo'lganda yoki they/them olmoshlarini ishlatadigan odam haqida gap ketganda 'they/their/them' birlik sifatida qabul qilinadi. Biroq antetsedent noaniq olmosh (everyone, each, neither) yoki rasmiy uslubda aniq birlikdagi ot bo'lsa, imtihon hali ham an'anaviy qoidani tekshiradi. Matnni diqqat bilan o'qing: aniq shaxs tasvirlansa, jinsga mos olmosh yoki jinsi ko'rsatilmagan bo'lsa 'they' ishlating. Umumiy/noaniq antetsedent uchun an'anaviy rasmiy variant — 'his or her'.",
              "СИНГУЛЯРНОЕ THEY: экзамен обновил нормы и принимает 'they/their/them' как местоимения ед. числа, когда пол человека неизвестен или человек использует местоимения they/them. Однако если антецедент — неопределённое местоимение (everyone, each, neither) или явно единственное существительное в формальном стиле, экзамен по-прежнему проверяет традиционное правило. Читайте внимательно: если описан конкретный человек, используйте местоимение его пола или 'they', если пол не указан. Для обобщённого/неопределённого антецедента традиционный формальный вариант — 'his or her'."
            ),
            P(
              "ASOSIY MOSLASHUV NAQSHLARI: (1) Jamlovchi otlar (company, government, team) birlik → its, their emas. 'The company increased its revenue.' (2) Noaniq olmoshlar (everyone, each, neither, anyone) → birlikdagi olmosh. 'Each student must bring his or her own materials.' (3) Ot ham narsalar, ham odamlarga tegishli bo'lganda — 'the jury' odamlarni bildiradi, lekin birlikdagi 'its verdict' oladi. (4) Antetsedent-olmosh moslashuvi eng yaqin ot bilan emas, butun gap bo'ylab mos kelishi kerak.",
              "КЛЮЧЕВЫЕ ШАБЛОНЫ СОГЛАСОВАНИЯ: (1) Собирательные существительные (company, government, team) — ед. число → its, а не their. 'The company increased its revenue.' (2) Неопределённые местоимения (everyone, each, neither, anyone) → местоимение ед. числа. 'Each student must bring his or her own materials.' (3) Когда существительное обозначает и людей, и организацию — 'the jury' обозначает людей, но берёт единственное 'its verdict'. (4) Согласование должно выдерживаться по всему предложению, а не только с ближайшим существительным."
            ),
          ],
        },
        {
          h: P("Asosiy fikrlar", "Ключевые моменты"),
          p: [
            P("Olmosh antetsedent bilan SON (birlik/ko'plik) va SHAXSda mos kelishi shart", "Местоимение должно совпадать с антецедентом в ЧИСЛЕ (ед./мн.) и ЛИЦЕ"),
            P("Jamlovchi otlar (company, team, committee) → its (birlik)", "Собирательные существительные (company, team, committee) → its (ед. число)"),
            P("Everyone/each/neither/anyone → his or her / their (birlik)", "Everyone/each/neither/anyone → his or her / their (ед. число)"),
            P("AND bilan bog'langan ikki antetsedent → their (ko'plik)", "Два антецедента с AND → their (мн. число)"),
            P("OR/NOR bilan bog'langan ikki antetsedent → ENG YAQINI bilan moslashing", "Два антецедента с OR/NOR → согласуйте с БЛИЖАЙШИМ"),
            P("Imtihon jinsi ko'rsatilmaganda birlikdagi 'they'ni qabul qiladi; moslashuv baribir tekshiriladi", "Экзамен принимает сингулярное 'they' при неуказанном поле; согласование всё равно проверяется"),
            P("AVVAL antetsedentni toping, keyin tekshiring: olmosh uning soniga mosmi?", "СНАЧАЛА найдите антецедент, потом проверьте: совпадает ли число местоимения?"),
          ],
        },
      ],
      quiz: [
        P("'The company' — jamlovchi ot, birlik → its; 'their' uni ko'plik deb hisoblaydi.", "'The company' — собирательное существительное, ед. число → its; 'their' трактует его как мн. число."),
        P("'Each' birlik, rasmiy uslubda birlikdagi olmosh kerak → his or her.", "'Each' — ед. число, в формальном стиле нужно местоимение ед. числа → his or her."),
        P("Universitet — birlikdagi tashkilot → it; 'they' norasmiy ishlatish.", "Университет — организация в ед. числе → it; 'they' — неформальный вариант."),
        P("Or/nor bilan olmosh eng yaqin antetsedentga qaraydi: 'board members' (ko'plik) → their.", "При or/nor местоимение согласуется с ближайшим антецедентом: 'board members' (мн. число) → their."),
        P("Jamoa alohida shaxslar sifatida bahs yuritgan — imtihon bunda 'they'ni qabul qiladi.", "Команда действует как отдельные люди — экзамен принимает здесь 'they'."),
      ],
    },
    st4: {
      lead: P(
        "Pronoun REFERENCE savollari olmoshning antetsedenti ANIQ va BIR MA'NOLI ekanini tekshiradi. Agar olmosh gapdagi yoki kontekstdagi bir nechta otga mantiqan ishora qilishi mumkin bo'lsa, u noaniq hisoblanadi va aniq ot bilan almashtirilishi kerak. Bu Sentence Revision (10-kun)da ko'rgan muammomizning o'zi, endi alohida grammatik qoida sifatida tekshiriladi. Testda odatda 'it', 'they', 'this' yoki 'that' ishlatilgan, lekin nimaga ishora qilishi noaniq gap beriladi va eng aniq tahrirni topish so'raladi.",
        "Вопросы на pronoun REFERENCE проверяют, ЯСЕН и ОДНОЗНАЧЕН ли антецедент местоимения. Если местоимение может логически отсылать к нескольким существительным в предложении или контексте, оно двусмысленно и должно быть заменено конкретным существительным. Это та же проблема, что и в Sentence Revision (день 10), но теперь как отдельное грамматическое правило. Тест обычно даёт предложение с 'it', 'they', 'this' или 'that', где референт неясен, и просит выбрать самую ясную правку."
      ),
      tip: null,
      blocks: [
        {
          h: P("Qanday ishlaydi", "Как это работает"),
          p: [
            P(
              "WHO va WHOM: 'Who' — ega olmoshi (he/she/they o'rnida); 'whom' — to'ldiruvchi olmoshi (him/her/them o'rnida). Usul: xayolan 'he/she' yoki 'him/her' qo'yib ko'ring. 'Who called?' → 'He called' (ega) → who. 'Whom did you call?' → 'You called him' (to'ldiruvchi) → whom. Nisbiy gaplarda: 'the scientist who won the prize' (who = 'won'ning egasi) va 'the scientist whom we interviewed' (whom = 'interviewed'ning to'ldiruvchisi). Imtihonda 'who' xatolari 'whom' xatolaridan ko'proq uchraydi — ko'pchilik 'who' to'g'ri bo'lganda ham 'whom' ishlatib, ortiqcha tuzatadi.",
              "WHO и WHOM: 'Who' — местоимение-подлежащее (заменяет he/she/they); 'whom' — местоимение-дополнение (заменяет him/her/them). Приём: мысленно подставьте 'he/she' или 'him/her'. 'Who called?' → 'He called' (подлежащее) → who. 'Whom did you call?' → 'You called him' (дополнение) → whom. В придаточных: 'the scientist who won the prize' (who = подлежащее 'won') и 'the scientist whom we interviewed' (whom = дополнение 'interviewed'). На экзамене ошибки с 'who' чаще, чем с 'whom' — многие «переисправляют», ставя 'whom' там, где верно 'who'."
            ),
            P(
              "OLMOSH KELISHIGI — EGA va TO'LDIRUVCHI: 'I/he/she/we/they' — ega olmoshlari, gap egasi yoki ega komplementi sifatida ishlatiladi. 'Me/him/her/us/them' — to'ldiruvchi olmoshlari, fe'l yoki predlog to'ldiruvchisi sifatida keladi. Qiyin naqsh: 'between you and me' ('between you and I' emas) — 'between' predlog, shuning uchun to'ldiruvchi olmoshi talab qiladi. 'She and I went' (egalar). 'He invited her and me' (to'ldiruvchilar). Ikkilanganingizda: ikki otdan birini olib tashlab, qaysi olmosh to'g'ri eshitilishini tekshiring. 'He invited I' → xato → 'He invited me' → to'g'ri.",
              "ПАДЕЖ МЕСТОИМЕНИЙ — СУБЪЕКТ и ОБЪЕКТ: 'I/he/she/we/they' — субъектные местоимения, употребляются как подлежащее или именная часть сказуемого. 'Me/him/her/us/them' — объектные, идут как дополнения глаголов и предлогов. Коварный шаблон: 'between you and me' (не 'between you and I') — 'between' предлог, значит нужны объектные местоимения. 'She and I went' (подлежащие). 'He invited her and me' (дополнения). Сомневаетесь — уберите одно из двух и проверьте на слух: 'He invited I' → неверно → 'He invited me' → верно."
            ),
          ],
        },
        {
          h: P("Asosiy fikrlar", "Ключевые моменты"),
          p: [
            P("Noaniq olmosh: 'it/they/this' 2+ otga ishora qilishi mumkin bo'lsa → aniq ot bilan almashtiring", "Двусмысленное местоимение: если 'it/they/this' может отсылать к 2+ существительным → замените конкретным существительным"),
            P("Who = ega (he/she/they bilan almashtiring) | Whom = to'ldiruvchi (him/her/them bilan)", "Who = подлежащее (заменяется he/she/they) | Whom = дополнение (him/her/them)"),
            P("Test: 'he/she' yoki 'him/her' qo'yib ko'ring — qaysi to'g'ri eshitilsa, who/whom shu", "Тест: подставьте 'he/she' или 'him/her' — что звучит верно, то и определяет who/whom"),
            P("Predloglar TO'LDIRUVCHI olmoshlarini oladi: 'between you and ME' (I emas)", "Предлоги требуют ОБЪЕКТНЫХ местоимений: 'between you and ME' (не I)"),
            P("Murakkab ega: 'She and I went' | Murakkab to'ldiruvchi: 'He called her and me'", "Составное подлежащее: 'She and I went' | Составное дополнение: 'He called her and me'"),
            P("Tekshirish uchun bir kishini olib tashlang: 'He called I' yoki 'He called me' → me", "Уберите одного для проверки: 'He called I' или 'He called me' → me"),
            P("Nisbiy gapda who/whom: olmosh harakatni bajaryaptimi (who) yoki qabul qilyaptimi (whom)?", "Who/whom в придаточном: местоимение выполняет действие (who) или принимает его (whom)?"),
          ],
        },
      ],
      quiz: [
        P("'He developed' (ega) → who; 'whom' to'ldiruvchi uchun bo'lardi.", "'He developed' (подлежащее) → who; 'whom' было бы для дополнения."),
        P("'Recommend him' — 'recommend'ning to'ldiruvchisi → whom.", "'Recommend him' — дополнение глагола 'recommend' → whom."),
        P("'They' olimlarga ham, dasturchilarga ham tegishli bo'lishi mumkin — tahrir egani aniq 'the scientists' qiladi.", "'They' может отсылать и к учёным, и к программистам — правка делает подлежащим именно 'the scientists'."),
        P("'Between' predlog → to'ldiruvchi shakli 'me'; 'I' predlogdan keyin kelmaydi.", "'Between' — предлог → объектная форма 'me'; 'I' после предлога не ставится."),
        P("'The dean invited me' — 'me' 'invited'ning to'ldiruvchisi; 'invited I' xato.", "'The dean invited me' — 'me' дополнение 'invited'; 'invited I' неверно."),
      ],
    },
  },
  C1: {
    st2: {
      lead: P(
        "RUN-ON gap — ikkita mustaqil gap hech qanday tinish belgisi yoki bog'lovchisiz qo'shilganda paydo bo'ladi. COMMA SPLICE — run-onning bir turi: ikkita mustaqil gapni faqat vergul (bog'lovchisiz) bog'laydi. Ikkalasi ham imtihonda to'g'ridan-to'g'ri tekshiriladigan xatolar. Run-on yoki comma splice'ni tuzatishning to'rt yo'li: (1) NUQTA qo'ying — ikkita gap qiling. (2) Gaplar orasiga NUQTALI VERGUL qo'ying. (3) VERGUL + FANBOYS (for, and, nor, but, or, yet, so) qo'shing. (4) ERGASHTIRUVCHI BOG'LOVCHI (although, because, since, while, when, after, before, if, unless) qo'shib, bir gapni ergash gapga aylantiring.",
        "RUN-ON — это два независимых предложения, соединённые без знаков препинания и без союза. COMMA SPLICE — разновидность run-on, где два независимых предложения соединяет только запятая (без союза). Обе ошибки экзамен проверяет напрямую. Четыре способа исправления: (1) ТОЧКА — сделать два предложения. (2) ТОЧКА С ЗАПЯТОЙ между частями. (3) ЗАПЯТАЯ + FANBOYS (for, and, nor, but, or, yet, so). (4) ПОДЧИНИТЕЛЬНЫЙ СОЮЗ (although, because, since, while, when, after, before, if, unless), делающий одну часть придаточной."
      ),
      tip: null,
      blocks: [
        {
          h: P("Qanday ishlaydi", "Как это работает"),
          p: [
            P(
              "XATONI TANISH: asosiy ko'nikma — bog'lanish nuqtasidan oldingi va keyingi qism mustaqil gap bo'la oladimi, aniqlash. 'The study was flawed, the researchers retracted it' — har qismni tekshiring: 'The study was flawed' ✓ to'liq. 'The researchers retracted it' ✓ to'liq. Faqat vergul bilan qo'shilgan ikki to'liq gap = comma splice. Imtihonda javob variantlari turli tinish belgilari va ba'zan turli bog'lovchi so'zlarni taklif qiladi. Tanlangan bog'lovchi g'oyalar orasidagi munosabatga mos kelishini har doim tekshiring.",
              "РАСПОЗНАВАНИЕ ОШИБКИ: ключевой навык — определить, может ли каждая часть до и после точки соединения стоять как отдельное предложение. 'The study was flawed, the researchers retracted it' — проверяем: 'The study was flawed' ✓ полное. 'The researchers retracted it' ✓ полное. Два полных предложения только с запятой = comma splice. На экзамене варианты предлагают разную пунктуацию и иногда разные связки. Всегда проверяйте, что выбранный коннектор соответствует отношению между идеями."
            ),
            P(
              "TO'G'RI TUZATISHNI TANLASH: hamma tuzatishlar bir xil yaxshi emas. Bog'lovchi so'z munosabatni bildiradi. 'The experiment failed; however, the data was valuable' (qarama-qarshilik). 'The experiment failed because the temperature was too high' (sabab). 'The experiment failed, but the data was valuable' (FANBOYS bilan qarama-qarshilik). Imtihon ba'zan bir nechta grammatik jihatdan to'g'ri variant beradi — bunda ikki g'oya orasidagi mantiqiy munosabatni kontekstga ko'ra eng yaxshi aks ettiruvchisini tanlang.",
              "ВЫБОР ПРАВИЛЬНОГО ИСПРАВЛЕНИЯ: не все исправления одинаково хороши. Связующее слово сигнализирует об отношении. 'The experiment failed; however, the data was valuable' (контраст). 'The experiment failed because the temperature was too high' (причина). 'The experiment failed, but the data was valuable' (контраст с FANBOYS). Иногда экзамен даёт несколько грамматически верных вариантов — тогда выбирайте тот, что лучше всего отражает логическую связь идей в контексте."
            ),
          ],
        },
        {
          h: P("Asosiy fikrlar", "Ключевые моменты"),
          p: [
            P("Run-on: [gap][gap] — hech qanday bog'lovchi yo'q", "Run-on: [часть][часть] — вообще без связки"),
            P("Comma splice: [gap], [gap] — faqat vergul, bog'lovchisiz", "Comma splice: [часть], [часть] — только запятая, без союза"),
            P("1-tuzatish: Nuqta → ikkita gap | 2-tuzatish: Nuqtali vergul", "Исправление 1: точка → два предложения | Исправление 2: точка с запятой"),
            P("3-tuzatish: Vergul + FANBOYS | 4-tuzatish: Ergashtiruvchi bog'lovchi", "Исправление 3: запятая + FANBOYS | Исправление 4: подчинительный союз"),
            P("Ergashtiruvchi bog'lovchilar: although, because, since, while, when, if, unless, after", "Подчинительные союзы: although, because, since, while, when, if, unless, after"),
            P("Har tomonni tekshiring: mustaqil tura oladimi? Ikkalasi ham ha bo'lsa → to'g'ri bog'lash shart", "Проверьте каждую часть: стоит ли отдельно? Если да × 2 → нужна правильная связка"),
            P("MANTIQIY munosabatga (qarama-qarshilik/sabab/yon berish) mos bog'lovchini tanlang", "Выбирайте коннектор по ЛОГИЧЕСКОЙ связи (контраст/причина/уступка)"),
          ],
        },
      ],
      quiz: [
        P("Nuqtali vergul + 'however' qarama-qarshilikni to'g'ri ko'rsatadi; 'because' mantiqsiz sabab yaratadi.", "Точка с запятой + 'however' верно передаёт контраст; 'because' создало бы нелогичную причину."),
        P("Ikkita mustaqil gap bog'lovchisiz va tinish belgisisiz — fused run-on.", "Два независимых предложения без связки и пунктуации — fused run-on."),
        P("'; instead,' kutilgan va yuz bergan narsa orasidagi qarama-qarshilikni aniq ifodalaydi.", "'; instead,' точно передаёт контраст между ожиданием и случившимся."),
      ],
    },
    st3: {
      lead: P(
        "FRAGMENT — ega, asosiy fe'l yoki ikkalasi ham yetishmaydigan so'zlar guruhi; u mustaqil gap bo'la olmaydi. Imtihon fragmentning uch turini tekshiradi: (1) EGA YO'Q: 'Discovered a new species in the rainforest.' (kim kashf qildi?) (2) FE'L YO'Q yoki faqat SIFATDOSH bor: 'The researchers studying the effects of sleep deprivation.' (studying — sifatdosh, asosiy fe'l emas — harakat tugallanmagan). (3) YOLG'IZ ERGASH GAP: 'Although the results were promising.' (ergashtiruvchi bog'lovchi bilan boshlanadi, lekin bosh gap yo'q).",
        "FRAGMENT — группа слов без подлежащего, основного глагола или того и другого; она не может стоять как полное предложение. Экзамен проверяет три типа фрагментов: (1) НЕТ ПОДЛЕЖАЩЕГО: 'Discovered a new species in the rainforest.' (кто открыл?) (2) НЕТ ГЛАГОЛА или только ПРИЧАСТИЕ: 'The researchers studying the effects of sleep deprivation.' (studying — причастие, не основной глагол — действие не завершено). (3) ПРИДАТОЧНОЕ ОТДЕЛЬНО: 'Although the results were promising.' (начинается с подчинительного союза, но без главного предложения)."
      ),
      tip: null,
      blocks: [
        {
          h: P("Qanday ishlaydi", "Как это работает"),
          p: [
            P(
              "FRAGMENTNI ANIQLASH: ikki savol bering. (1) Ega bormi? (2) To'liq fe'l bormi — yordamchi fe'lsiz sifatdosh (-ing, -ed) yoki infinitiv emas? 'Running through the park' — ega bormi? Yo'q. Fragment. 'The team running through the park' — fe'l bormi? Yo'q — 'running' sifatdosh. Fragment. 'The team was running through the park' — ega (team) + to'liq fe'l (was running). Gap. Imtihonda fragment hosil qiladigan javob variantlari har doim noto'g'ri.",
              "ВЫЯВЛЕНИЕ ФРАГМЕНТОВ: задайте два вопроса. (1) Есть подлежащее? (2) Есть полный глагол — а не просто причастие (-ing, -ed без вспомогательного) или инфинитив? 'Running through the park' — подлежащее есть? Нет. Фрагмент. 'The team running through the park' — глагол есть? Нет — 'running' причастие. Фрагмент. 'The team was running through the park' — подлежащее (team) + полный глагол (was running). Предложение. На экзамене варианты, создающие фрагмент, всегда неверны."
            ),
            P(
              "FRAGMENTNI TUZATISH: (1) Yetishmayotgan ega yoki fe'lni qo'shing. (2) Fragmentni qo'shni gapga qo'shing. (3) Ergashtiruvchi bog'lovchini olib tashlab, ergash gapni mustaqil qiling. 'Although the results were promising. Researchers continued.' → 'Although the results were promising, researchers continued.' Imtihonda fragmentlar odatda sifatdoshli ibora yoki bosh gapdan uzilgan ergash gap bilan boshlanadigan javob variantlari sifatida keladi.",
              "ИСПРАВЛЕНИЕ ФРАГМЕНТОВ: (1) Добавьте недостающее подлежащее или глагол. (2) Присоедините фрагмент к соседнему предложению. (3) Уберите подчинительный союз, сделав придаточное независимым. 'Although the results were promising. Researchers continued.' → 'Although the results were promising, researchers continued.' На экзамене фрагменты обычно появляются как варианты, начинающиеся с причастных оборотов или придаточных, оторванных от главного предложения."
            ),
          ],
        },
        {
          h: P("Asosiy fikrlar", "Ключевые моменты"),
          p: [
            P("Fragment testi: EGA va to'liq ASOSIY FE'L bormi?", "Тест на фрагмент: есть ли ПОДЛЕЖАЩЕЕ и полный ОСНОВНОЙ ГЛАГОЛ?"),
            P("Yolg'iz -ing to'liq fe'l EMAS: 'The team working...' = fragment", "-ing в одиночку — НЕ полный глагол: 'The team working...' = фрагмент"),
            P("Yolg'iz ergash gap = fragment: 'Because the data showed...' o'zi = fragment", "Придаточное отдельно = фрагмент: 'Because the data showed...' само по себе = фрагмент"),
            P("Tuzatish: qo'shni gapga biriktiring yoki yetishmayotgan ega/fe'lni qo'shing", "Исправление: присоедините к соседнему предложению или добавьте подлежащее/глагол"),
            P("Sifatdoshli ibora bilan boshlanish: '[Sifatdosh ibora], EGA FE'L' = to'liq gap", "Причастный оборот в начале: '[оборот], ПОДЛЕЖАЩЕЕ ГЛАГОЛ' = полное предложение"),
            P("Fragment hosil qiladigan javobni hech qachon tanlamang", "Никогда не выбирайте вариант, создающий фрагмент"),
            P("Infinitivlar (to + fe'l) asosiy fe'l EMAS: 'To solve the problem' = fragment", "Инфинитивы (to + глагол) — НЕ основные глаголы: 'To solve the problem' = фрагмент"),
          ],
        },
      ],
      quiz: [
        P("'Having reviewed all the evidence carefully' — ega ham, asosiy fe'l ham yo'q → fragment.", "'Having reviewed all the evidence carefully' — нет ни подлежащего, ни основного глагола → фрагмент."),
        P("Ergash gap vergul bilan bosh gapga to'g'ri biriktirilgan.", "Придаточное правильно присоединено к главному через запятую."),
        P("Kirish sifatdoshli iboradan keyin ega + to'liq fe'l bor → to'liq gap.", "После вводного причастного оборота идёт подлежащее + полный глагол → полное предложение."),
        P("Fragment oldingi gapga vergul bilan biriktirilib, bitta to'liq gap hosil bo'ladi.", "Фрагмент присоединяется к предыдущему предложению запятой, образуя одно полное предложение."),
        P("'Stood' — to'liq fe'l; 'standing'/'having stood' sifatdosh, 'which stood' ergash gap qiladi.", "'Stood' — полный глагол; 'standing'/'having stood' — причастия, а 'which stood' делает часть придаточной."),
      ],
    },
    st4: {
      lead: P(
        "MODIFIER — boshqa narsani tasvirlaydigan so'z, ibora yoki gap. Imtihon ikki xil modifier xatosini tekshiradi. (1) NOTO'G'RI JOYLASHGAN MODIFIER (misplaced): modifier noto'g'ri o'rinda — tasvirlanayotgan narsadan uzoq, bu gapni noaniq yoki mantiqsiz qiladi. 'She almost drove her children to school every day' (almost 'drove'ni aniqlaydi — deyarli haydadi, lekin haydamadimi?) va 'She drove her children to almost every school' (to'g'ri joylashuv). (2) OSILIB QOLGAN MODIFIER (dangling): tasvirlanayotgan narsa gapda umuman yo'q yoki bosh gapning egasi emas. 'Walking down the street, the trees were beautiful.' — daraxtlar yurmagan. Tuzatish: 'Walking down the street, I noticed the trees were beautiful.'",
        "MODIFIER — слово, оборот или придаточное, описывающее что-то другое. Экзамен проверяет две ошибки. (1) НЕВЕРНО РАЗМЕЩЁННЫЙ MODIFIER (misplaced): модификатор стоит не там — слишком далеко от определяемого, делая предложение двусмысленным или нелогичным. 'She almost drove her children to school every day' (almost относится к drove — почти повезла, но не повезла?) и 'She drove her children to almost every school' (верное размещение). (2) ВИСЯЧИЙ MODIFIER (dangling): определяемое вообще отсутствует в предложении или не является подлежащим главной части. 'Walking down the street, the trees were beautiful.' — деревья не гуляли. Исправление: 'Walking down the street, I noticed the trees were beautiful.'"
      ),
      tip: null,
      blocks: [
        {
          h: P("Qanday ishlaydi", "Как это работает"),
          p: [
            P(
              "DANGLING MODIFIERNI ANIQLASH: gap sifatdoshli ibora (-ing yoki -ed) bilan boshlansa, bosh gapning egasi shu iboradagi harakatni bajarayotgan yoki boshdan kechirayotgan narsa BO'LISHI SHART. Test: -ing harakatini kim bajaryapti? O'sha shaxs verguldan keyin darhol ega bo'lishi kerak. 'Exhausted after the long hike, the tent was pitched' — chodir charchamagan. To'g'ri: 'Exhausted after the long hike, the hikers pitched their tent.' Ega ('hikers') kirish iborasidan keyin darhol kelishi kerak.",
              "ВЫЯВЛЕНИЕ ВИСЯЧИХ МОДИФИКАТОРОВ: если предложение открывается причастным оборотом (-ing или -ed), подлежащее главной части ОБЯЗАНО быть тем, кто выполняет или испытывает действие оборота. Тест: кто делает действие на -ing? Именно эта сущность должна стоять сразу после запятой. 'Exhausted after the long hike, the tent was pitched' — палатка не устала. Верно: 'Exhausted after the long hike, the hikers pitched their tent.' Подлежащее ('hikers') должно идти сразу за вводным оборотом."
            ),
            P(
              "ONLY, ALMOST, NEARLY, JUST, EVEN: bu cheklovchi modifierlar aniqlanayotgan so'zdan bevosita oldin turishi kerak, chunki joylashuvi ma'noni o'zgartiradi. 'Only I told him the truth' (boshqa hech kim aytmadi). 'I only told him the truth' (faqat aytdim, boshqa hech narsa qilmadim). 'I told only him the truth' (faqat unga aytdim). 'I told him only the truth' (faqat haqiqatni aytdim). Imtihonda bu so'zlarning javob variantlaridagi o'rniga alohida e'tibor bering.",
              "ONLY, ALMOST, NEARLY, JUST, EVEN: эти ограничительные модификаторы должны стоять непосредственно перед определяемым словом, поскольку их позиция меняет смысл. 'Only I told him the truth' (никто другой не сказал). 'I only told him the truth' (я лишь сказал, больше ничего не делал). 'I told only him the truth' (сказал только ему). 'I told him only the truth' (сказал только правду). На экзамене внимательно смотрите, где эти слова стоят в вариантах ответа."
            ),
          ],
        },
        {
          h: P("Asosiy fikrlar", "Ключевые моменты"),
          p: [
            P("Modifier tasvirlanayotgan narsaga YONMA-YON turishi kerak", "Модификатор должен стоять РЯДОМ с тем, что он описывает"),
            P("Dangling modifier: kirish iborasi bosh gap EGASIga mos kelishi shart", "Висячий модификатор: вводный оборот должен соответствовать ПОДЛЕЖАЩЕМУ главной части"),
            P("'Kirish ibora, EGA FE'L' — ega iboradagi harakatni bajarayotgan bo'lishi kerak", "'Вводный оборот, ПОДЛЕЖАЩЕЕ ГЛАГОЛ' — подлежащее должно выполнять действие оборота"),
            P("Only/almost/just/nearly: cheklaydigan so'zdan bevosita oldin qo'ying", "Only/almost/just/nearly: ставьте непосредственно перед ограничиваемым словом"),
            P("Dangling testi: 'kim [fe'l]-ing qilyapti?' deb so'rang — o'sha shaxs ega bo'lishi kerak", "Тест на dangling: спросите «КТО делает действие на -ing?» — эта сущность должна быть подлежащим"),
            P("Misplaced: noaniq | Dangling: mantiqsiz (ega bu harakatni bajara olmaydi)", "Misplaced: двусмысленно | Dangling: нелогично (подлежащее не может выполнить действие)"),
            P("Danglingni tuzatish: egani o'zgartiring YOKI iborani qayta tuzing", "Исправление dangling: смените подлежащее ИЛИ перестройте оборот"),
          ],
        },
      ],
      quiz: [
        P("'only' 'in patients who exercised'dan bevosita oldin turibdi — yaxshilanish faqat shu guruhda topilgan.", "'only' стоит прямо перед 'in patients who exercised' — улучшение найдено только в этой группе."),
        P("'Designed to withstand extreme weather' ko'prikni tasvirlaydi → verguldan keyingi ega 'the bridge' bo'lishi kerak.", "'Designed to withstand extreme weather' описывает мост → подлежащим после запятой должен быть 'the bridge'."),
        P("'almost' 'every species'dan oldin turishi kerak — deyarli barcha turlar hujjatlashtirilgan.", "'almost' должно стоять перед 'every species' — задокументированы почти все виды."),
      ],
    },
    st5: {
      lead: P(
        "PARALLEL STRUCTURE (parallelizm) qatordagi yoki qiyoslashdagi so'zlar, iboralar yoki gaplar bir xil grammatik shaklda bo'lishini talab qiladi. Gap narsalarni sanasa yoki qiyoslasa, hammasi shaklan mos bo'lishi kerak: hammasi ot, hammasi infinitiv, hammasi -ing ibora, hammasi gap va h.k. 'She likes swimming, hiking, and to run' parallelizmni buzadi — gerundiy va infinitiv aralashgan. To'g'ri: 'She likes swimming, hiking, and running' YOKI 'She likes to swim, to hike, and to run.' Imtihon parallelizmni ro'yxatlarda (and/or), juft bog'lovchilarda (both/and, either/or, not only/but also, neither/nor) va qiyosiy tuzilmalarda tekshiradi.",
        "PARALLEL STRUCTURE (параллелизм) требует, чтобы слова, обороты или части в перечислении или сравнении имели одинаковую грамматическую форму. Если предложение перечисляет или сравнивает, все элементы должны совпадать по форме: все существительные, все инфинитивы, все -ing формы, все придаточные и т.д. 'She likes swimming, hiking, and to run' нарушает параллелизм — смесь герундиев и инфинитива. Верно: 'She likes swimming, hiking, and running' ИЛИ 'She likes to swim, to hike, and to run.' Экзамен проверяет параллелизм в перечислениях (and/or), парных союзах (both/and, either/or, not only/but also, neither/nor) и сравнительных конструкциях."
      ),
      tip: null,
      blocks: [
        {
          h: P("Qanday ishlaydi", "Как это работает"),
          p: [
            P(
              "JUFT BOG'LOVCHILAR qat'iy parallelizmni talab qiladi: birinchi bog'lovchidan keyin kelgan narsa ikkinchisidan keyin kelgani bilan grammatik jihatdan mos bo'lishi kerak. 'Both working late AND to skip lunch' — xato. 'Both working late AND skipping lunch' — to'g'ri (ikkalasi ham gerundiy). 'Not only DID she win the competition BUT ALSO received a standing ovation' — xato. 'Not only DID she win the competition BUT ALSO DID she receive a standing ovation' yoki 'Not only did she win but also receive...' Ikki tomondagi tuzilmalar mos kelishi shart.",
              "ПАРНЫЕ СОЮЗЫ требуют строгого параллелизма: то, что стоит после первого союза, должно грамматически совпадать с тем, что после второго. 'Both working late AND to skip lunch' — неверно. 'Both working late AND skipping lunch' — верно (оба герундии). 'Not only DID she win the competition BUT ALSO received a standing ovation' — неверно. 'Not only DID she win the competition BUT ALSO DID she receive a standing ovation' или 'Not only did she win but also receive...' Структуры по обе стороны должны совпадать."
            ),
            P(
              "O'XSHASHNI O'XSHASH BILAN QIYOSLASH: parallelizm qiyoslashlar grammatik jihatdan teng va mantiqan qiyoslanadigan narsalar orasida bo'lishini ham talab qiladi. 'The climate in Norway is colder than Spain' — xato (iqlim Ispaniya bilan qiyoslanyapti). 'The climate in Norway is colder than the climate in Spain' yoki 'The climate in Norway is colder than Spain's.' 'She worked harder than her colleague did' yoki 'than her colleague.' Ikkalasida ham odamlarning ishi qiyoslanadi. Bu turdagi xato imtihondagi akademik matnlarda ayniqsa ko'p uchraydi.",
              "СРАВНИВАТЬ ПОДОБНОЕ С ПОДОБНЫМ: параллелизм требует, чтобы сравнивались грамматически эквивалентные и логически сопоставимые вещи. 'The climate in Norway is colder than Spain' — неверно (климат сравнивается с Испанией). 'The climate in Norway is colder than the climate in Spain' или 'The climate in Norway is colder than Spain's.' 'She worked harder than her colleague did' или 'than her colleague.' В обоих случаях сравнивается работа людей. Этот тип ошибки особенно част в академических текстах на экзамене."
            ),
          ],
        },
        {
          h: P("Asosiy fikrlar", "Ключевые моменты"),
          p: [
            P("Qatordagi barcha elementlar bir xil grammatik shaklda bo'lishi kerak", "Все элементы перечисления должны иметь одну грамматическую форму"),
            P("Gerundiylar: swimming, hiking, running ('to run' emas)", "Герундии: swimming, hiking, running (не 'to run')"),
            P("Infinitivlar: to swim, to hike, to run ('running' emas)", "Инфинитивы: to swim, to hike, to run (не 'running')"),
            P("Juft bog'lovchilar: both X and Y | not only X but also Y | neither X nor Y", "Парные союзы: both X and Y | not only X but also Y | neither X nor Y"),
            P("Juft bog'lovchining ikki tomoni grammatik jihatdan mos bo'lishi shart", "Обе части парного союза должны грамматически совпадать"),
            P("Qiyoslash: O'XSHASHNI O'XSHASH bilan qiyoslang (iqlimni iqlim bilan, mamlakat bilan emas)", "Сравнения: сравнивайте ПОДОБНОЕ с ПОДОБНЫМ (климат с климатом, а не со страной)"),
            P("Tuzatish: naqshni aniqlang, keyin barcha elementlarni unga moslang", "Исправление: определите шаблон, затем приведите все элементы к нему"),
          ],
        },
      ],
      quiz: [
        P("Uchta gerundiy bir xil -ing shaklida: reading, writing, solving — parallel.", "Три герундия в одной -ing форме: reading, writing, solving — параллельно."),
        P("'not only REDUCE but also IMPROVE' — ikkala tomonda ham yalang'och infinitiv, parallel.", "'not only REDUCE but also IMPROVE' — с обеих сторон голый инфинитив, параллельно."),
        P("Uchta bir xil tuzilishdagi 'how' gapi — to'liq parallel.", "Три однотипных придаточных с 'how' — полностью параллельно."),
        P("Maosh maosh bilan qiyoslanadi: 'average salary...in Germany' va 'average salary...in France'.", "Зарплата сравнивается с зарплатой: 'average salary...in Germany' и 'average salary...in France'."),
        P("'neither thoroughly researched nor clearly presented' — ikkala tomonda ham sifat ibora, parallel.", "'neither thoroughly researched nor clearly presented' — обе части адъективные, параллельно."),
      ],
    },
    st6: {
      lead: P(
        "VERB TENSE o'quvchiga harakat QACHON sodir bo'lishini aytadi. Imtihon ikkita asosiy zamon ko'nikmasini tekshiradi: (1) ZAMON IZCHILLIGI — matn ichida zamonlarni sababsiz almashtirmang. Matn tarixiy voqealarni o'tgan zamonda tasvirlasa, aniq sabab bo'lmaguncha (masalan, hozirgi haqiqat va tarixiy voqea farqi) barcha fe'llar o'tgan zamonda qolishi kerak. 'Galileo observed the moons of Jupiter. He publishes his findings' — o'tgandan hozirgiga noto'g'ri o'tish. (2) ZAMONLAR KETMA-KETLIGI — voqealar turli vaqtlarda sodir bo'lganda, fe'llar perfect zamonlar yordamida to'g'ri vaqt munosabatini aks ettirishi kerak.",
        "VERB TENSE сообщает читателю, КОГДА происходит действие. Экзамен проверяет два навыка: (1) СОГЛАСОВАННОСТЬ ВРЕМЁН — не меняйте время без необходимости внутри отрывка. Если текст описывает исторические события в прошедшем времени, все глаголы должны оставаться в прошедшем, если нет ясной причины для сдвига (например, текущая истина против исторического факта). 'Galileo observed the moons of Jupiter. He publishes his findings' — неверный сдвиг из прошедшего в настоящее. (2) ПОСЛЕДОВАТЕЛЬНОСТЬ ВРЕМЁН — когда события происходят в разное время, глаголы должны отражать временные отношения с помощью перфектных времён."
      ),
      tip: null,
      blocks: [
        {
          h: P("Qanday ishlaydi", "Как это работает"),
          p: [
            P(
              "PERFECT ZAMONLAR: PAST PERFECT ('had + past participle') bir o'tgan harakat boshqa o'tgan harakatdan OLDIN sodir bo'lganini ko'rsatadi. 'By the time the rescue team arrived, the survivors had built a shelter.' (qurish kelishdan oldin bo'lgan). PRESENT PERFECT ('have/has + past participle') hozirgiga aloqador o'tgan harakatni yoki o'tmishda boshlanib davom etayotgan harakatni bildiradi. 'Scientists have discovered three new species this year.' FUTURE PERFECT ('will have + past participle') kelajakdagi nuqtadan oldin tugallanadigan harakatni ko'rsatadi. 'By 2050, renewables will have replaced most fossil fuels.'",
              "ПЕРФЕКТНЫЕ ВРЕМЕНА: PAST PERFECT ('had + past participle') показывает, что одно прошедшее действие произошло ДО другого прошедшего. 'By the time the rescue team arrived, the survivors had built a shelter.' (постройка была до прибытия). PRESENT PERFECT ('have/has + past participle') — прошедшее действие с актуальностью в настоящем или действие, начавшееся в прошлом и продолжающееся. 'Scientists have discovered three new species this year.' FUTURE PERFECT ('will have + past participle') — действие завершится до момента в будущем. 'By 2050, renewables will have replaced most fossil fuels.'"
            ),
            P(
              "Imtihondagi KENG TARQALGAN ZAMON XATOLARI: (1) Matn o'rtasida sababsiz zamon almashinuvi. (2) Oldinroq sodir bo'lganini ko'rsatish uchun past perfect kerak bo'lganda simple past ishlatish. 'When the inspector arrived, someone already removed the evidence' — 'someone had already removed' bo'lishi kerak (olib tashlash kelishdan oldin). (3) Tarixiy yoki hikoya matnlarida hozirgi va o'tgan zamonni aralashtirish. Strategiya: matnning ASOSIY ZAMONINI toping. Vaqt signali (before, after, already, by the time, since) boshqa zamonni talab qilmaguncha barcha fe'llar shu zamonda bo'lishi kerak.",
              "ЧАСТЫЕ ОШИБКИ ВРЕМЁН на экзамене: (1) Немотивированный сдвиг времени посреди текста. (2) Simple past там, где нужен past perfect для более раннего события. 'When the inspector arrived, someone already removed the evidence' — должно быть 'someone had already removed' (удаление до прибытия). (3) Смешение настоящего и прошедшего в исторических или повествовательных текстах. Стратегия: определите БАЗОВОЕ ВРЕМЯ отрывка. Все глаголы должны стоять в нём, пока сигнал времени (before, after, already, by the time, since) не потребует другого."
            ),
          ],
        },
        {
          h: P("Asosiy fikrlar", "Ключевые моменты"),
          p: [
            P("Zamon izchilligi: asosiy zamonni aniqlang va oxirigacha unda qoling", "Согласованность: установите базовое время и держитесь его до конца"),
            P("Past perfect (had + PP): boshqa o'tgan harakatdan oldingi harakat", "Past perfect (had + PP): более раннее прошедшее действие перед другим прошедшим"),
            P("Present perfect (have/has + PP): hozirgiga aloqador o'tmish yoki o'tmishdan davom etayotgan", "Present perfect (have/has + PP): прошлое с актуальностью сейчас или длящееся с прошлого"),
            P("Signal so'zlar → past perfect: before, after, already, by the time, when (ikki o'tgan voqea)", "Сигнальные слова → past perfect: before, after, already, by the time, when (два прошедших события)"),
            P("Future perfect (will have + PP): kelajakdagi nuqtadan oldin tugallangan", "Future perfect (will have + PP): завершено до точки в будущем"),
            P("HOZIRGI HAQIQATLAR uchun tarixiy matnda ham hozirgi zamon: 'Water freezes at 0°C'", "Настоящее время для ТЕКУЩИХ ИСТИН даже в исторических текстах: 'Water freezes at 0°C'"),
            P("Qochish kerak: ketma-ketlik past perfect talab qilganda simple past ishlatish", "Избегайте: simple past там, где последовательность требует past perfect"),
          ],
        },
      ],
      quiz: [
        P("Olib tashlash kelishdan oldin bo'lgan → past perfect: 'had already removed'.", "Удаление произошло до прибытия → past perfect: 'had already removed'."),
        P("Yashash kashfiyotdan oldin bo'lgan → 'occupied' o'rniga 'had occupied' kerak.", "Проживание было до открытия → вместо 'occupied' нужно 'had occupied'."),
        P("2028 yilgacha tugallanadigan harakat → future perfect: 'will have spent'.", "Действие завершится к 2028 году → future perfect: 'will have spent'."),
      ],
    },
    st7: {
      lead: P(
        "MOOD — fe'lning harakatga munosabatni bildiruvchi shakli. INDICATIVE mayl faktlarni bayon qiladi ('She is a scientist'). SUBJUNCTIVE mayl istak, shubha, faraz, tavsiya yoki haqiqatga zid shartlarni ifodalaydi. Imtihon ikkita subjunctive naqshini tekshiradi: (1) tavsiya, talab, taklif, iltimos yoki majburiyat fe'llaridan keyingi 'that' gaplarida PRESENT SUBJUNCTIVE: 'The committee recommended that she PRESENT her findings' ('presents' emas). Har doim asosiy shakl (-s siz, -ed siz, -ing siz). Keng tarqalgan trigger fe'llar: recommend, suggest, require, demand, insist, propose, ask, request, urge.",
        "MOOD (наклонение) — форма глагола, выражающая отношение к действию. INDICATIVE констатирует факты ('She is a scientist'). SUBJUNCTIVE выражает желания, сомнения, гипотезы, рекомендации или условия, противоречащие фактам. Экзамен проверяет два шаблона: (1) PRESENT SUBJUNCTIVE в придаточных с 'that' после глаголов рекомендации, требования, предложения, просьбы: 'The committee recommended that she PRESENT her findings' (не 'presents'). Всегда базовая форма (без -s, -ed, -ing). Частые глаголы-триггеры: recommend, suggest, require, demand, insist, propose, ask, request, urge."
      ),
      tip: null,
      blocks: [
        {
          h: P("Qanday ishlaydi", "Как это работает"),
          p: [
            P(
              "HAQIQATGA ZID shartlar uchun PAST SUBJUNCTIVE: barcha egalar bilan 'were' ('was' emas) ishlating. 'If I were president...' ('if I was' emas) — bu faraz, real shart emas. 'If she were taller...' 'If the data were complete...' 'As if he were an expert...' Test: shart YOLG'ONMI yoki FARAZIYMI? Ha bo'lsa → 'were'. Shart ROST bo'lishi mumkin bo'lsa → oddiy 'was'. 'If the report was accurate, we can proceed' (rost bo'lishi mumkin) va 'If the report were accurate, we could proceed' (rost emas — faraz).",
              "PAST SUBJUNCTIVE для условий, ПРОТИВОРЕЧАЩИХ ФАКТАМ: используйте 'were' (не 'was') со всеми подлежащими. 'If I were president...' (не 'if I was') — это гипотеза, не реальное условие. 'If she were taller...' 'If the data were complete...' 'As if he were an expert...' Тест: условие ЛОЖНО или ГИПОТЕТИЧНО? Если да → 'were'. Если условие может быть ИСТИННЫМ → обычное 'was'. 'If the report was accurate, we can proceed' (может быть точным) и 'If the report were accurate, we could proceed' (не точен — гипотеза)."
            ),
            P(
              "SHART TUZILMALARI: 'If...would' naqshlari. Real/mumkin shartlar: simple present + simple future: 'If she studies, she will pass.' Faraziy shartlar: past + would: 'If she studied, she would pass.' O'tmishdagi haqiqatga zid shartlar: past perfect + would have: 'If she had studied, she would have passed.' Imtihondagi xato: darajalarni aralashtirish. 'If she studies, she would pass' — real shart (hozirgi) faraziy natija (would) bilan aralashgan — xato. Darajani izchil moslang.",
              "УСЛОВНЫЕ КОНСТРУКЦИИ: шаблоны 'If...would'. Реальные/возможные условия: simple present + simple future: 'If she studies, she will pass.' Гипотетические: past + would: 'If she studied, she would pass.' Противоречащие фактам в прошлом: past perfect + would have: 'If she had studied, she would have passed.' Экзаменационная ошибка — смешение уровней. 'If she studies, she would pass' смешивает реальное условие (настоящее) с гипотетическим результатом (would) — неверно. Выдерживайте уровень последовательно."
            ),
          ],
        },
        {
          h: P("Asosiy fikrlar", "Ключевые моменты"),
          p: [
            P("Subjunctive: recommend/require/insist/suggest + that + EGA + ASOSIY FE'L", "Subjunctive: recommend/require/insist/suggest + that + ПОДЛЕЖАЩЕЕ + БАЗОВЫЙ ГЛАГОЛ"),
            P("'Recommend that she GO' ('goes' emas) | 'Require that he BE' ('is' emas)", "'Recommend that she GO' (не 'goes') | 'Require that he BE' (не 'is')"),
            P("Haqiqatga zid: barcha egalar uchun 'If I WERE...' ('was' emas)", "Противоречит фактам: 'If I WERE...' (не 'was') для всех подлежащих"),
            P("Real shart: If + present → will + asosiy fe'l", "Реальное условие: If + present → will + базовый глагол"),
            P("Faraziy: If + past → would + asosiy fe'l", "Гипотетическое: If + past → would + базовый глагол"),
            P("O'tmishdagi haqiqatga zid: If + past perfect → would have + past participle", "Противоречащее фактам в прошлом: If + past perfect → would have + past participle"),
            P("Hech qachon: 'If she would study' — 'if' gapida hech qachon 'would' bo'lmaydi", "Никогда: 'If she would study' — 'would' никогда не ставится в 'if'-части"),
          ],
        },
      ],
      quiz: [
        P("'Required that' + subjunctive → asosiy shakl 'submit', -s siz.", "'Required that' + subjunctive → базовая форма 'submit', без -s."),
        P("Haqiqatga zid faraz → barcha egalar bilan 'were': 'If the population were larger'.", "Гипотеза, противоречащая фактам → 'were' для всех подлежащих: 'If the population were larger'."),
        P("Real/mumkin shart: If + present ('is approved') → will + asosiy fe'l.", "Реальное/возможное условие: If + present ('is approved') → will + базовый глагол."),
        P("O'tmishdagi haqiqatga zid: If + past perfect ('had planned') → would have + PP.", "Противоречащее фактам в прошлом: If + past perfect ('had planned') → would have + PP."),
        P("'Suggested that' + subjunctive → asosiy shakl 'revise', -s siz.", "'Suggested that' + subjunctive → базовая форма 'revise', без -s."),
      ],
    },
  },
};
