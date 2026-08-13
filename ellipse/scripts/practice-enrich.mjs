// Teaching bodies + uz/ru translations for the question-bank practice lessons.
const P = (uz, ru) => ({ uz, ru });
export const ENRICH = {
  B2: {
    p1: {
      situation: "\"The box of old photographs were in the attic... or was it?\" An editor pauses: what is actually in the attic — the box or the photographs? The box. So: 'The box of old photographs WAS in the attic.'",
      blocks: [
        {
          h: "Find the true subject — cross out the middle",
          p: [
            "Long sentences hide the subject behind prepositional phrases ('of...', 'from...', 'in...') and interrupters ('along with...', 'together with...'). None of these change the number of the subject. Mentally cross them out, and the agreement becomes obvious.",
            "The noun closest to the verb is often NOT the subject — that is exactly the trap test writers set.",
          ],
          ex: [
            "The collection of handwritten letters HAS been donated. (subject = collection)",
            "The report, together with its appendices, WAS submitted. (subject = the report)",
            "The policy changes announced by the administration HAVE sparked debate. (subject = changes)",
          ],
        },
        {
          h: "Collective nouns: committee, team, jury, series",
          p: [
            "In American English, collective nouns that act as a single unit — committee, team, jury, government, series — take a SINGULAR verb. The group votes, decides, or deliberates as one body.",
          ],
          ex: [
            "The committee HAS voted to adopt stricter regulations.",
            "The jury WAS still deliberating when the judge called a recess.",
            "There IS a series of unresolved questions. (a series = singular)",
          ],
        },
        {
          h: "'A number of' vs. 'the number of' — and each/every",
          p: [
            "'A number of X' means 'many X' and is PLURAL. 'The number of X' refers to the quantity itself and is SINGULAR. Meanwhile 'each' and 'every' are always singular — even before a long compound like 'every student, teacher, and administrator.'",
          ],
          ex: [
            "A number of studies HAVE produced alarming results.",
            "The number of species HAS grown dramatically.",
            "Each of the participating countries HAS agreed to the target.",
          ],
        },
        {
          h: "Neither...nor and inverted sentences",
          p: [
            "With 'neither...nor' (and 'either...or'), the verb agrees with the CLOSEST subject. In sentences starting with 'There is/are', the subject comes AFTER the verb — find it before you choose.",
          ],
          ex: [
            "Neither the budget nor the alternative plans HAVE received support. (closest = plans)",
            "There IS a series of questions about its safety. (subject = a series)",
          ],
        },
      ],
      tip: "Cross out everything between the subject and the verb. If the sentence still makes sense, you have found the true subject — now match the verb to it and nothing else.",
      examples: [
        "The quality of the applicants' essays varies enormously.",
        "A number of residents have complained about the noise.",
        "Every laptop, tablet, and phone in the building is encrypted.",
        "Neither the manager nor her assistants were aware of the change.",
      ],
      mistakes: [
        { x: "The box of old photographs were in the attic.", v: "The box of old photographs was in the attic. — subject is 'box', not 'photographs'." },
        { x: "A number of studies has confirmed the effect.", v: "A number of studies have confirmed the effect. — 'a number of' is plural." },
        { x: "The team, along with its coaches, were celebrating.", v: "The team, along with its coaches, was celebrating. — 'along with...' does not make the subject plural." },
      ],
      tr: {
        situation: P(
          "\"The box of old photographs were in the attic...\" — to'g'rimi? Chodirda aslida nima bor — box yoki photographs? Box. Demak: 'The box ... WAS in the attic.' Ega bilan fe'lni to'g'ri moslashtirish uchun avval haqiqiy egani toping.",
          "«The box of old photographs were in the attic...» — верно ли? Что на самом деле на чердаке — box или photographs? Box. Значит: 'The box ... WAS in the attic.' Сначала найдите настоящее подлежащее, затем выбирайте форму глагола."
        ),
        tip: P(
          "Ega bilan fe'l orasidagi hamma narsani o'chirib tashlang. Gap ma'nosini saqlasa — haqiqiy egani topdingiz; fe'lni faqat unga moslang.",
          "Вычеркните всё между подлежащим и глаголом. Если смысл сохранился — вы нашли настоящее подлежащее; согласуйте глагол только с ним."
        ),
        blocks: [
          {
            h: P("Haqiqiy egani toping — o'rtadagini o'chiring", "Найдите настоящее подлежащее — вычеркните середину"),
            p: [
              P(
                "Uzun gaplarda ega predlogli iboralar ('of...', 'from...', 'in...') va oradagi qo'shimchalar ('along with...', 'together with...') orqasiga yashirinadi. Ular eganing sonini o'zgartirmaydi — ularni xayolan o'chirsangiz, moslashuv oson ko'rinadi.",
                "В длинных предложениях подлежащее прячется за предложными оборотами ('of...', 'from...', 'in...') и вставками ('along with...', 'together with...'). Они не меняют число подлежащего — мысленно вычеркните их, и согласование станет очевидным."
              ),
              P(
                "Fe'lga eng yaqin ot ko'pincha ega EMAS — testlar aynan shu tuzoqni qo'yadi.",
                "Существительное, стоящее ближе всего к глаголу, часто НЕ является подлежащим — именно на этом строится ловушка в тестах."
              ),
            ],
          },
          {
            h: P("Jamlovchi otlar: committee, team, jury, series", "Собирательные существительные: committee, team, jury, series"),
            p: [
              P(
                "Amerika inglizchasida bir butun sifatida harakat qiladigan jamlovchi otlar — committee, team, jury, government, series — BIRLIKDAGI fe'l oladi.",
                "В американском английском собирательные существительные, действующие как единое целое — committee, team, jury, government, series — принимают глагол в ЕДИНСТВЕННОМ числе."
              ),
            ],
          },
          {
            h: P("'A number of' va 'the number of' — hamda each/every", "'A number of' и 'the number of' — а также each/every"),
            p: [
              P(
                "'A number of X' — 'ko'p X' degani, KO'PLIK. 'The number of X' — miqdorning o'zi, BIRLIK. 'Each' va 'every' esa doim birlik — hatto uzun qo'shma egadan oldin kelsa ham.",
                "'A number of X' значит «много X» — МНОЖЕСТВЕННОЕ число. 'The number of X' — само количество, ЕДИНСТВЕННОЕ число. 'Each' и 'every' всегда единственное число — даже перед длинным составным подлежащим."
              ),
            ],
          },
          {
            h: P("Neither...nor va teskari tartibli gaplar", "Neither...nor и предложения с инверсией"),
            p: [
              P(
                "'Neither...nor' (va 'either...or') bilan fe'l ENG YAQIN egaga mos keladi. 'There is/are' bilan boshlangan gaplarda ega fe'ldan KEYIN keladi — avval uni toping.",
                "С 'neither...nor' (и 'either...or') глагол согласуется с БЛИЖАЙШИМ подлежащим. В предложениях с 'There is/are' подлежащее стоит ПОСЛЕ глагола — сначала найдите его."
              ),
            ],
          },
        ],
        quiz: [
          P("'of handwritten letters...' ni o'chiring: ega — 'collection' (birlik) → has.", "Вычеркните 'of handwritten letters...': подлежащее — 'collection' (ед. ч.) → has."),
          P("'Committee' — jamlovchi ot, Amerika inglizchasida birlik → has.", "'Committee' — собирательное существительное, в американском английском ед. ч. → has."),
          P("'A number of X' — KO'PLIK → have ('the number of' esa birlik bo'lardi).", "'A number of X' — МНОЖЕСТВЕННОЕ число → have (а 'the number of' было бы ед. ч.)."),
          P("'Along with...' — oradagi ibora, o'chiring; ega — 'the team' (birlik) → has.", "'Along with...' — вставка, вычеркните; подлежащее — 'the team' (ед. ч.) → has."),
          P("'The number of X' — BIRLIK → has; 'of species...' ni o'chiring.", "'The number of X' — ЕДИНСТВЕННОЕ число → has; вычеркните 'of species...'."),
          P("'Every' bilan kelgan qo'shma ega baribir BIRLIK hisoblanadi → is.", "Составное подлежащее с 'every' всё равно считается ЕДИНСТВЕННЫМ числом → is."),
          P("'Together with...' — oradagi ibora; ega — 'the report' (birlik) → was.", "'Together with...' — вставка; подлежащее — 'the report' (ед. ч.) → was."),
          P("Oradagi iborani o'chiring: ega — 'changes' (ko'plik) → have.", "Вычеркните вставку: подлежащее — 'changes' (мн. ч.) → have."),
          P("Teskari tartib: ega 'there' dan keyin — 'a series' (birlik) → is.", "Инверсия: подлежащее после 'there' — 'a series' (ед. ч.) → is."),
          P("'Jury' — jamlovchi ot, birlik → was.", "'Jury' — собирательное существительное, ед. ч. → was."),
          P("'Neither...nor': fe'l eng yaqin egaga mos — 'plans' (ko'plik) → have.", "'Neither...nor': глагол согласуется с ближайшим — 'plans' (мн. ч.) → have."),
          P("'Each' doim birlik → has; 'of the participating countries' ni o'chiring.", "'Each' всегда ед. ч. → has; вычеркните 'of the participating countries'."),
        ],
      },
    },
    p2: {
      situation: "\"The company revised their policy.\" A careful editor stops: a company is ONE thing, so it needs 'its'. — 'The company revised ITS policy.' Small word, big difference in formal writing.",
      blocks: [
        {
          h: "Match the pronoun to its antecedent in number",
          p: [
            "A pronoun must agree with the noun it replaces (its antecedent). Singular antecedent → singular pronoun; plural antecedent → plural pronoun. The most tested case: institutions and organizations — company, government, university, corporation — are SINGULAR and take 'its', not 'their'.",
          ],
          ex: [
            "The government announced ITS intention to reform the tax code.",
            "The university updated ITS admissions policy.",
            "Both the director and the lead actor acknowledged THEIR debt to the playwright.",
          ],
        },
        {
          h: "Indefinite pronouns: each, every, no one, neither",
          p: [
            "'Each', 'every', 'no one', 'anyone', 'neither' are grammatically SINGULAR. In formal written English they take 'his or her' (or a rewritten plural sentence), not 'their'. Informal English increasingly accepts singular 'they', but exam-style formal writing still expects the singular form.",
          ],
          ex: [
            "Each candidate must prepare HIS OR HER own statement.",
            "No one should compromise HIS OR HER principles.",
            "Neither of the researchers would retract HIS OR HER findings.",
          ],
        },
        {
          h: "Collective nouns take 'its'",
          p: [
            "When a committee, team, or board acts as one unit — publishing a report, approving a merger — it takes 'its'. Only when members act separately as individuals does plural phrasing become natural, and formal tests almost always frame the group as a unit.",
          ],
          ex: [
            "The committee published ITS annual report.",
            "The board of directors voiced ITS concerns about the valuation.",
          ],
        },
        {
          h: "Keep the reference clear — and don't confuse its/it's",
          p: [
            "A pronoun should point to exactly one noun. If 'it' or 'they' could refer to two different things, rewrite. And remember: 'its' = possessive; 'it's' = 'it is' — never a possessive.",
          ],
          ex: [
            "The company and ITS subsidiary both reported strong earnings.",
            "It's clear that the plan failed. (= it is)",
          ],
        },
      ],
      tip: "Ask: is the antecedent ONE thing or MANY? Companies, committees, and countries are one thing — 'its'. 'Each', 'every', 'no one', 'neither' are also one — 'his or her' in formal writing.",
      examples: [
        "The corporation restructured its operations to cut costs.",
        "Every employee must badge in with his or her ID card.",
        "Both partners defended their decision to sell.",
        "Each country pledged to increase its defense budget.",
      ],
      mistakes: [
        { x: "The company revised their policy.", v: "The company revised its policy. — a company is singular." },
        { x: "Each student must bring their own laptop. (formal writing)", v: "Each student must bring his or her own laptop. — 'each' is singular in formal register." },
        { x: "The committee published it's report.", v: "The committee published its report. — 'it's' means 'it is'." },
      ],
      tr: {
        situation: P(
          "\"The company revised their policy.\" Diqqatli muharrir to'xtaydi: kompaniya — BITTA narsa, demak 'its' kerak: 'The company revised ITS policy.' Kichkina so'z, lekin rasmiy yozuvda katta farq.",
          "«The company revised their policy.» Внимательный редактор останавливается: компания — ОДНА, значит нужно 'its': 'The company revised ITS policy.' Маленькое слово — большая разница в формальном письме."
        ),
        tip: P(
          "So'rang: oldingi ot BITTAMI yoki KO'PMI? Kompaniya, qo'mita, davlat — bitta narsa → 'its'. 'Each', 'every', 'no one', 'neither' ham birlik → rasmiy yozuvda 'his or her'.",
          "Спросите себя: антецедент — ОДИН или МНОГО? Компания, комитет, страна — одно целое → 'its'. 'Each', 'every', 'no one', 'neither' тоже ед. ч. → в формальном письме 'his or her'."
        ),
        blocks: [
          {
            h: P("Olmoshni oldingi ot bilan sonda moslang", "Согласуйте местоимение с антецедентом в числе"),
            p: [
              P(
                "Olmosh o'zi almashtirayotgan otga (antecedent) mos kelishi kerak: birlik ot → birlik olmosh, ko'plik → ko'plik. Eng ko'p tekshiriladigan holat: tashkilotlar — company, government, university, corporation — BIRLIK va 'their' emas, 'its' oladi.",
                "Местоимение должно согласовываться с существительным, которое оно заменяет (антецедентом): ед. ч. → ед. ч., мн. ч. → мн. ч. Самый частый тестовый случай: организации — company, government, university, corporation — ЕДИНСТВЕННОЕ число и берут 'its', а не 'their'."
              ),
            ],
          },
          {
            h: P("Noaniq olmoshlar: each, every, no one, neither", "Неопределённые местоимения: each, every, no one, neither"),
            p: [
              P(
                "'Each', 'every', 'no one', 'anyone', 'neither' grammatik jihatdan BIRLIK. Rasmiy yozma inglizchada ular 'their' emas, 'his or her' oladi. Norasmiy tilda singular 'they' tobora ko'p qabul qilinadi, lekin imtihon uslubidagi rasmiy yozuv hali ham birlik shaklni kutadi.",
                "'Each', 'every', 'no one', 'anyone', 'neither' грамматически ЕДИНСТВЕННОЕ число. В формальном письменном английском они требуют 'his or her', а не 'their'. В неформальной речи всё чаще допустимо singular 'they', но экзаменационный формальный стиль по-прежнему ожидает форму ед. ч."
              ),
            ],
          },
          {
            h: P("Jamlovchi otlar 'its' oladi", "Собирательные существительные берут 'its'"),
            p: [
              P(
                "Qo'mita, jamoa yoki kengash bir butun sifatida harakat qilsa — hisobot chiqarsa, qo'shilishni tasdiqlasa — 'its' oladi. Rasmiy testlar deyarli har doim guruhni bir butun sifatida ko'rsatadi.",
                "Когда комитет, команда или совет действуют как единое целое — публикуют отчёт, одобряют сделку — используется 'its'. Формальные тесты почти всегда подают группу как единое целое."
              ),
            ],
          },
          {
            h: P("Havolani aniq saqlang — its/it's ni adashtirmang", "Сохраняйте ясность ссылки — не путайте its/it's"),
            p: [
              P(
                "Olmosh aynan bitta otga ishora qilishi kerak; 'it' yoki 'they' ikki narsaga tegishli bo'lishi mumkin bo'lsa, gapni qayta yozing. Va esda tuting: 'its' — egalik, 'it's' — 'it is'.",
                "Местоимение должно указывать ровно на одно существительное; если 'it' или 'they' могут относиться к двум вещам — перепишите. И помните: 'its' — притяжательное, 'it's' — это 'it is'."
              ),
            ],
          },
        ],
        quiz: [
          P("'The government' — jamlovchi ot, birlik → 'its'.", "'The government' — собирательное существительное, ед. ч. → 'its'."),
          P("'Each' — birlik; rasmiy yozuvda 'his or her'.", "'Each' — ед. ч.; в формальном письме 'his or her'."),
          P("'Research team' bir butun sifatida harakat qiladi → 'its'.", "'Research team' действует как единое целое → 'its'."),
          P("'The corporation' — birlik → 'its'.", "'The corporation' — ед. ч. → 'its'."),
          P("Sho'ba korxona birlikdagi kompaniyaga tegishli → 'its'.", "Дочерняя компания принадлежит компании в ед. ч. → 'its'."),
          P("'No one' — birlikdagi noaniq olmosh → rasmiy uslubda 'his or her'.", "'No one' — неопределённое местоимение ед. ч. → в формальном стиле 'his or her'."),
          P("'The committee' — birlik → 'its'; 'it's' = 'it is', xato.", "'The committee' — ед. ч. → 'its'; 'it's' = 'it is' — не то слово."),
          P("'Both X and Y' — ko'plik → 'their'.", "'Both X and Y' — мн. ч. → 'their'."),
          P("'The university' — birlik → 'its'.", "'The university' — ед. ч. → 'its'."),
          P("'Each country' — 'each' birlik otni aniqlaydi → 'its'.", "'Each country' — 'each' определяет существительное в ед. ч. → 'its'."),
          P("'Neither' — birlik → 'his or her'.", "'Neither' — ед. ч. → 'his or her'."),
          P("'The board of directors' — jamlovchi ot, birlik → 'its'.", "'The board of directors' — собирательное существительное, ед. ч. → 'its'."),
        ],
      },
    },
    p3: {
      situation: "\"The results were clear, the team celebrated.\" Something feels off — two complete sentences glued with only a comma. Either write '...clear; the team celebrated' or '...clear, and the team celebrated.'",
      blocks: [
        {
          h: "Semicolon: two independent clauses, no conjunction",
          p: [
            "A semicolon joins two complete sentences that are closely related. A comma alone in that position is the classic 'comma splice' error. Test: can each side stand alone as a sentence? If yes, you need a semicolon, a period, or a comma PLUS a conjunction.",
          ],
          ex: [
            "The experiment produced unexpected results; the team redesigned the protocol.",
            "Scientists have long studied sleep deprivation; researchers continue to find new consequences.",
          ],
        },
        {
          h: "Comma + FANBOYS, and introductory elements",
          p: [
            "When two independent clauses are joined by a coordinating conjunction (for, and, nor, but, or, yet, so — FANBOYS), put a comma before it. An introductory dependent clause or phrase ('Although...', 'After analyzing the data...') is always followed by a comma.",
          ],
          ex: [
            "The architect designed the museum, but the city lacked funding.",
            "Although the forecast predicted rain, the ceremony proceeded as planned.",
            "After analyzing three years of data, the researchers published their conclusions.",
          ],
        },
        {
          h: "Restrictive vs. nonrestrictive: commas in pairs",
          p: [
            "Nonrestrictive elements — extra information that could be deleted — take commas on BOTH sides: 'The bridge, which was built in 1923, still stands.' Restrictive elements identify WHICH one you mean and take NO commas: 'The students who complete the coursework will graduate.'",
            "The most common exam trap: the opening comma is given, and you must supply the CLOSING comma of the pair.",
          ],
          ex: [
            "Dr. Chen, the lead researcher, presented her findings. (nonrestrictive appositive)",
            "The students who complete all coursework will graduate. (restrictive — no commas)",
            "The novel, written over ten years, draws on her life abroad.",
          ],
        },
        {
          h: "Commas in a series",
          p: [
            "Separate three or more items with commas, including before the final 'and' (the Oxford comma, standard in American academic style). Use semicolons between items only when the items themselves contain commas.",
          ],
          ex: [
            "The park features hiking trails, a botanical garden, and an amphitheater.",
            "The bill was praised by economists, criticized by unions, and debated in the press.",
          ],
        },
      ],
      tip: "Two complete sentences can NEVER be joined by a comma alone. Your options: period, semicolon, comma + FANBOYS, or making one clause dependent (because, although, when...).",
      examples: [
        "The data was incomplete; the committee postponed its decision.",
        "Although the trial was small, the results were striking.",
        "Her latest book, published last spring, has already been translated twice.",
        "We packed water, sunscreen, and a map.",
      ],
      mistakes: [
        { x: "The results were clear, the team celebrated.", v: "The results were clear; the team celebrated. — comma splice: use a semicolon." },
        { x: "The bridge, which was built in 1923 has withstood earthquakes.", v: "The bridge, which was built in 1923, has withstood earthquakes. — nonrestrictive clauses need commas on both sides." },
        { x: "The students, who complete all coursework, will graduate in May.", v: "The students who complete all coursework will graduate in May. — restrictive clause: no commas." },
      ],
      tr: {
        situation: P(
          "\"The results were clear, the team celebrated.\" Nimadir noto'g'ri — ikkita to'liq gap faqat vergul bilan yopishtirilgan. To'g'risi: '...clear; the team celebrated' yoki '...clear, and the team celebrated.'",
          "«The results were clear, the team celebrated.» Что-то не так — два полных предложения склеены одной запятой. Правильно: '...clear; the team celebrated' или '...clear, and the team celebrated.'"
        ),
        tip: P(
          "Ikkita to'liq gapni faqat vergul bilan bog'lab BO'LMAYDI. Variantlar: nuqta, nuqtali vergul, vergul + FANBOYS, yoki bir gapni ergash gapga aylantirish (because, although, when...).",
          "Два полных предложения НЕЛЬЗЯ соединить одной запятой. Варианты: точка, точка с запятой, запятая + FANBOYS или превращение одного из них в придаточное (because, although, when...)."
        ),
        blocks: [
          {
            h: P("Nuqtali vergul: ikkita mustaqil gap, bog'lovchisiz", "Точка с запятой: два независимых предложения без союза"),
            p: [
              P(
                "Nuqtali vergul o'zaro yaqin ikkita to'liq gapni bog'laydi. Bu o'rinda faqat vergul — mashhur 'comma splice' xatosi. Tekshiruv: har ikki tomon alohida gap bo'la oladimi? Ha bo'lsa — nuqtali vergul, nuqta yoki vergul + bog'lovchi kerak.",
                "Точка с запятой соединяет два тесно связанных полных предложения. Одна запятая в этой позиции — классическая ошибка 'comma splice'. Проверка: может ли каждая часть быть отдельным предложением? Если да — нужна точка с запятой, точка или запятая + союз."
              ),
            ],
          },
          {
            h: P("Vergul + FANBOYS va kirish elementlari", "Запятая + FANBOYS и вводные элементы"),
            p: [
              P(
                "Ikkita mustaqil gap muvofiqlashtiruvchi bog'lovchi (for, and, nor, but, or, yet, so — FANBOYS) bilan bog'lansa, bog'lovchidan oldin vergul qo'yiladi. Kirish ergash gap yoki ibora ('Although...', 'After analyzing...') dan keyin doim vergul keladi.",
                "Если два независимых предложения соединены сочинительным союзом (for, and, nor, but, or, yet, so — FANBOYS), перед союзом ставится запятая. После вводного придаточного или оборота ('Although...', 'After analyzing...') всегда идёт запятая."
              ),
            ],
          },
          {
            h: P("Restrictive va nonrestrictive: vergullar juft bo'ladi", "Restrictive и nonrestrictive: запятые парами"),
            p: [
              P(
                "Nonrestrictive elementlar — olib tashlansa ham gap buzilmaydigan qo'shimcha ma'lumot — IKKI tomondan vergul oladi. Restrictive elementlar QAYSI birini nazarda tutayotganingizni aniqlaydi va vergul OLMAYDI.",
                "Nonrestrictive элементы — дополнительная информация, которую можно убрать — выделяются запятыми с ОБЕИХ сторон. Restrictive элементы определяют, О КАКОМ именно предмете речь, и запятых НЕ получают."
              ),
              P(
                "Eng keng tarqalgan imtihon tuzog'i: ochuvchi vergul berilgan, siz juftlikning YOPUVCHI vergulini qo'yishingiz kerak.",
                "Самая частая экзаменационная ловушка: открывающая запятая уже стоит, а вам нужно поставить ЗАКРЫВАЮЩУЮ запятую пары."
              ),
            ],
          },
          {
            h: P("Sanashda vergullar", "Запятые при перечислении"),
            p: [
              P(
                "Uch va undan ortiq elementni vergul bilan ajrating, oxirgi 'and' dan oldin ham (Oxford comma — Amerika akademik uslubida standart). Elementlar ichida vergul bo'lsagina ular orasida nuqtali vergul ishlatiladi.",
                "Три и более элемента разделяются запятыми, включая запятую перед финальным 'and' (Oxford comma — стандарт американского академического стиля). Точки с запятой между элементами нужны только когда сами элементы содержат запятые."
              ),
            ],
          },
        ],
        quiz: [
          P("Ikkita mustaqil gap → nuqtali vergul.", "Два независимых предложения → точка с запятой."),
          P("Nonrestrictive gap ikki tomondan vergul oladi — yopuvchi vergul kerak.", "Nonrestrictive оборот выделяется запятыми с двух сторон — нужна закрывающая запятая."),
          P("Kirish iborasidan keyin asosiy gapdan oldin vergul kerak.", "После вводного оборота перед главным предложением нужна запятая."),
          P("Restrictive gap — qaysi talabalar ekanini aniqlaydi → vergul yo'q.", "Restrictive оборот определяет, какие именно студенты → без запятых."),
          P("Nonrestrictive ibora — juftlikning yopuvchi verguli kerak.", "Nonrestrictive оборот — нужна закрывающая запятая пары."),
          P("Ikkita mustaqil gap: faqat vergul — comma splice; nuqtali vergul to'g'ri.", "Два независимых предложения: одна запятая — comma splice; верна точка с запятой."),
          P("Uchta elementli sanash: 'and' dan oldin standart vergul.", "Перечисление из трёх элементов: стандартная запятая перед 'and'."),
          P("'Because' ikkinchi gapni ergash gapga aylantiradi — tabiiy va to'g'ri.", "'Because' делает вторую часть придаточной — естественно и правильно."),
          P("'But' (FANBOYS) bilan bog'langan ikki mustaqil gap → 'but' dan oldin vergul.", "Два независимых предложения с 'but' (FANBOYS) → запятая перед 'but'."),
          P("Nonrestrictive appositive — ikki tomondan vergul; yopuvchisi kerak.", "Nonrestrictive приложение — запятые с двух сторон; нужна закрывающая."),
          P("'Although...' — kirish ergash gap → undan keyin vergul.", "'Although...' — вводное придаточное → после него запятая."),
          P("Sanash: birinchi va ikkinchi elementni ajratish uchun vergul kerak.", "Перечисление: запятая отделяет первый элемент от второго."),
        ],
      },
    },
    p4: {
      situation: "\"By the time the ambulance arrived, the crowd had already moved the injured cyclist.\" One sentence, two past events — and the earlier one is marked with past perfect. Context decides the tense.",
      blocks: [
        {
          h: "Ordering past events: simple past, past progressive, past perfect",
          p: [
            "Simple past narrates completed events in sequence ('excavated... found'). Past progressive shows an action in progress at a past moment ('mold WAS KILLING the bacteria when Fleming noticed'). Past perfect ('had dropped') marks the EARLIER of two past events — the signal phrase 'by the time + past event' almost always demands it.",
          ],
          ex: [
            "When the archaeologists excavated the site, they found older ruins.",
            "Fleming noticed that mold was killing the bacteria.",
            "By the time the team reached them, temperatures had dropped for eighteen hours.",
          ],
        },
        {
          h: "Present perfect and future perfect: linking to a reference point",
          p: [
            "Present perfect ('have concluded') connects a past action to NOW — current scientific understanding, results that still matter. Future perfect ('will have converted') looks back from a future deadline: 'by 2030' + will have + past participle.",
          ],
          ex: [
            "Researchers have concluded that the species went extinct 65 million years ago.",
            "Scientists have estimated a rise of 1.1°C since pre-industrial times.",
            "By 2030, the company will have converted all operations to renewables.",
          ],
        },
        {
          h: "The subjunctive after demand-type verbs",
          p: [
            "After 'recommend that', 'require that', 'insist that', 'suggest that', formal English uses the BASE form of the verb for all subjects — no -s, no tense marking: 'recommended that the facilities BE accessible', 'required that every employee COMPLETE the training'.",
          ],
          ex: [
            "The committee recommended that the facilities be accessible.",
            "The policy required that every employee complete the course.",
            "The judge insisted that the witness read the entire transcript.",
          ],
        },
        {
          h: "Unreal conditionals: were / had been",
          p: [
            "Present unreal: 'If the treatment WERE more affordable, patients WOULD benefit' — 'were' for all subjects. Past unreal: 'If the proposal HAD BEEN submitted, it WOULD HAVE BEEN considered' — had + past participle in the if-clause, would have + past participle in the result.",
          ],
          ex: [
            "If the treatment were cheaper, more patients would benefit.",
            "If renewable energy had become cheaper faster, the transition would have occurred earlier.",
          ],
        },
      ],
      tip: "Scan for time anchors before choosing: 'by the time + past' → had done; 'by + future year' → will have done; 'recommend/require/insist that' → base verb; 'if... would have' → had done.",
      examples: [
        "By the time the votes were counted, the challenger had conceded.",
        "The board demanded that the CEO resign immediately.",
        "If the dam had been reinforced, the flood would have caused far less damage.",
        "By next June, she will have completed her residency.",
      ],
      mistakes: [
        { x: "By the time we arrived, the lecture already started.", v: "By the time we arrived, the lecture had already started. — the earlier past event needs past perfect." },
        { x: "The committee recommended that the report is published.", v: "The committee recommended that the report be published. — subjunctive: base verb after 'recommended that'." },
        { x: "If the proposal was submitted on time, it would have been funded.", v: "If the proposal had been submitted on time, it would have been funded. — past unreal condition takes 'had been'." },
      ],
      tr: {
        situation: P(
          "\"By the time the ambulance arrived, the crowd had already moved the injured cyclist.\" Bitta gap, ikkita o'tgan voqea — oldinroq bo'lgani past perfect bilan belgilanadi. Zamonni kontekst hal qiladi.",
          "«By the time the ambulance arrived, the crowd had already moved the injured cyclist.» Одно предложение, два прошлых события — более раннее отмечено past perfect. Время выбирает контекст."
        ),
        tip: P(
          "Tanlashdan oldin vaqt belgilarini qidiring: 'by the time + o'tgan zamon' → had done; 'by + kelasi yil' → will have done; 'recommend/require/insist that' → asosiy shakl; 'if... would have' → had done.",
          "Перед выбором ищите временные ориентиры: 'by the time + прошедшее' → had done; 'by + будущий год' → will have done; 'recommend/require/insist that' → базовая форма; 'if... would have' → had done."
        ),
        blocks: [
          {
            h: P("O'tgan voqealar tartibi: simple past, past progressive, past perfect", "Порядок прошлых событий: simple past, past progressive, past perfect"),
            p: [
              P(
                "Simple past ketma-ket tugagan voqealarni bayon qiladi. Past progressive o'tgan paytdagi davom etayotgan harakatni ko'rsatadi. Past perfect ikki o'tgan voqeadan OLDINROQ bo'lganini belgilaydi — 'by the time + o'tgan zamon' iborasi deyarli har doim uni talab qiladi.",
                "Simple past описывает завершённые события по порядку. Past progressive показывает действие в процессе в прошлый момент. Past perfect отмечает БОЛЕЕ РАННЕЕ из двух прошлых событий — сигнал 'by the time + прошедшее' почти всегда требует его."
              ),
            ],
          },
          {
            h: P("Present perfect va future perfect: tayanch nuqtaga bog'lash", "Present perfect и future perfect: привязка к опорной точке"),
            p: [
              P(
                "Present perfect ('have concluded') o'tgan harakatni HOZIR bilan bog'laydi — hozirgi ilmiy xulosa, hali ham muhim natijalar. Future perfect ('will have converted') kelajakdagi muddatdan orqaga qaraydi: 'by 2030' + will have + past participle.",
                "Present perfect ('have concluded') связывает прошлое действие с НАСТОЯЩИМ — текущий научный вывод, всё ещё значимые результаты. Future perfect ('will have converted') смотрит назад от будущего срока: 'by 2030' + will have + past participle."
              ),
            ],
          },
          {
            h: P("Talab fe'llaridan keyin subjunctive", "Subjunctive после глаголов требования"),
            p: [
              P(
                "'Recommend that', 'require that', 'insist that', 'suggest that' dan keyin rasmiy inglizchada barcha egalar uchun fe'lning ASOSIY shakli ishlatiladi — -s siz, zamon belgisisiz.",
                "После 'recommend that', 'require that', 'insist that', 'suggest that' формальный английский использует БАЗОВУЮ форму глагола для всех лиц — без -s и без показателей времени."
              ),
            ],
          },
          {
            h: P("Noreal shartlar: were / had been", "Нереальные условия: were / had been"),
            p: [
              P(
                "Hozirgi noreal: 'If the treatment WERE more affordable...' — hamma egalar uchun 'were'. O'tgan noreal: if-gapda had + past participle, natijada would have + past participle.",
                "Нереальное настоящее: 'If the treatment WERE more affordable...' — 'were' для всех лиц. Нереальное прошлое: в if-части had + past participle, в результате would have + past participle."
              ),
            ],
          },
        ],
        quiz: [
          P("1928-yildagi voqea: kuzatuv paytida davom etayotgan harakat → past progressive 'was killing'.", "Событие 1928 года: действие в процессе в момент наблюдения → past progressive 'was killing'."),
          P("'By the time + o'tgan voqea' → oldinroq bo'lgan harakat past perfect: 'had dropped'.", "'By the time + прошлое событие' → более раннее действие в past perfect: 'had dropped'."),
          P("'Recommended that' + subjunctive: asosiy shakl 'be'.", "'Recommended that' + subjunctive: базовая форма 'be'."),
          P("Haqiqatga zid hozirgi shart → hamma egalar uchun 'were'.", "Нереальное условие в настоящем → 'were' для всех лиц."),
          P("Hozirgi ilmiy xulosa → present perfect 'have concluded'.", "Текущий научный вывод → present perfect 'have concluded'."),
          P("O'tgan noreal shart: 'if it HAD BEEN submitted' + 'would have been considered'.", "Нереальное прошлое: 'if it HAD BEEN submitted' + 'would have been considered'."),
          P("'Required that' + subjunctive: asosiy shakl 'complete'.", "'Required that' + subjunctive: базовая форма 'complete'."),
          P("'By 2030' — kelajak muddati → future perfect 'will have converted'.", "'By 2030' — будущий срок → future perfect 'will have converted'."),
          P("Ketma-ket o'tgan voqealar → ikkalasi simple past: 'excavated... found'.", "Последовательные прошлые события → оба в simple past: 'excavated... found'."),
          P("'Insisted that' + subjunctive: asosiy shakl 'read'.", "'Insisted that' + subjunctive: базовая форма 'read'."),
          P("O'tmishdan hozirgacha dolzarb xulosa → present perfect 'have estimated'.", "Вывод, актуальный от прошлого до настоящего → present perfect 'have estimated'."),
          P("O'tgan noreal shart: 'had become' + 'would have occurred'.", "Нереальное прошлое: 'had become' + 'would have occurred'."),
        ],
      },
    },
    p5: {
      situation: "\"The lab results were promising. However, the clinical trial failed.\" Change 'However' to 'Therefore' and the paragraph stops making sense. The connector IS the logic of the text.",
      blocks: [
        {
          h: "Contrast: however, nevertheless, yet, by contrast",
          p: [
            "'However' and 'yet' signal a simple reversal of direction. 'Nevertheless' is stronger: something happens DESPITE what the first sentence established. 'By contrast' sets two different subjects or views side by side (internal causes vs. external causes, proponents vs. critics).",
          ],
          ex: [
            "The drug worked in the lab. However, human trials revealed side effects.",
            "The harms are well documented. Nevertheless, sleep deprivation keeps rising.",
            "Some blame internal corruption. By contrast, others emphasize external pressures.",
          ],
        },
        {
          h: "Addition: moreover, additionally, furthermore",
          p: [
            "Use addition connectors when the second sentence points in the SAME direction as the first — another benefit, another piece of confirming evidence. If sentence two supports or extends sentence one, do not reach for a contrast word.",
          ],
          ex: [
            "The pottery suggests 3000 BCE. Moreover, carbon dating confirms the early date.",
            "Transit cut commute times. Additionally, it lowered carbon emissions.",
          ],
        },
        {
          h: "Cause and effect: consequently, as a result, therefore",
          p: [
            "When sentence one is the cause and sentence two is its outcome, use a result connector. Check the direction: the cause must come first for 'consequently / as a result / therefore' to fit.",
          ],
          ex: [
            "Costs fell 40%. Consequently, retail prices dropped.",
            "The libraries lost funding. As a result, many branches reduced their hours.",
          ],
        },
        {
          h: "Clarification: that is, in other words",
          p: [
            "Sometimes sentence two neither contrasts nor results — it RESTATES or explains the mechanism behind sentence one. 'That is' and 'in other words' introduce this reformulation. Confusing clarification with cause/effect is a favorite distractor.",
          ],
          ex: [
            "Moderate pressure improves decisions. That is, some deadline stress focuses attention.",
            "The signal is costly. In other words, only a fit bird can afford the tail.",
          ],
        },
      ],
      tip: "Read the sentence BEFORE the blank and the sentence AFTER it, and ask: same direction (addition), opposite direction (contrast), cause → effect (result), or a restatement (that is)? Choose the relationship, then the word.",
      examples: [
        "Sales rose steadily. Meanwhile, profits barely moved.",
        "The theory was elegant. However, the data refused to cooperate.",
        "Rainfall doubled. As a result, the reservoirs refilled within months.",
        "The design is minimalist; that is, every element serves a function.",
      ],
      mistakes: [
        { x: "The study found no effect. Therefore, real-world data suggested benefits.", v: "The study found no effect. Nevertheless, real-world data suggested benefits. — the second sentence defies the first, so contrast, not result." },
        { x: "The system cut commutes. However, it also lowered emissions.", v: "The system cut commutes. Additionally, it also lowered emissions. — both sentences point the same way: addition." },
        { x: "Costs fell sharply. By contrast, prices for consumers dropped.", v: "Costs fell sharply. Consequently, prices for consumers dropped. — this is cause and effect, not contrast." },
      ],
      tr: {
        situation: P(
          "\"The lab results were promising. However, the clinical trial failed.\" 'However' ni 'Therefore' ga almashtirsangiz — abzats ma'nosini yo'qotadi. Bog'lovchi — matnning mantig'i.",
          "«The lab results were promising. However, the clinical trial failed.» Замените 'However' на 'Therefore' — и абзац потеряет смысл. Коннектор — это логика текста."
        ),
        tip: P(
          "Bo'sh joydan OLDINGI va KEYINGI gapni o'qing va so'rang: bir xil yo'nalishmi (addition), qarama-qarshimi (contrast), sabab → natijami (result) yoki qayta ifodami (that is)? Avval munosabatni, keyin so'zni tanlang.",
          "Прочитайте предложение ДО пропуска и ПОСЛЕ него и спросите: то же направление (addition), противоположное (contrast), причина → следствие (result) или переформулировка (that is)? Сначала выберите отношение, потом слово."
        ),
        blocks: [
          {
            h: P("Qarama-qarshilik: however, nevertheless, yet, by contrast", "Противопоставление: however, nevertheless, yet, by contrast"),
            p: [
              P(
                "'However' va 'yet' oddiy yo'nalish o'zgarishini bildiradi. 'Nevertheless' kuchliroq: birinchi gap o'rnatgan narsaga QARAMAY nimadir yuz beradi. 'By contrast' ikki xil mavzu yoki qarashni yonma-yon qo'yadi.",
                "'However' и 'yet' обозначают простой разворот направления. 'Nevertheless' сильнее: что-то происходит ВОПРЕКИ сказанному в первом предложении. 'By contrast' ставит рядом два разных предмета или взгляда."
              ),
            ],
          },
          {
            h: P("Qo'shimcha: moreover, additionally, furthermore", "Добавление: moreover, additionally, furthermore"),
            p: [
              P(
                "Ikkinchi gap birinchisi bilan BIR yo'nalishda bo'lsa — yana bir foyda, yana bir tasdiqlovchi dalil — qo'shimcha bog'lovchilarini ishlating. Ikkinchi gap birinchisini qo'llab-quvvatlasa, contrast so'ziga qo'l urmang.",
                "Если второе предложение идёт в ТОМ ЖЕ направлении, что и первое — ещё одна выгода, ещё одно подтверждение — используйте коннекторы добавления. Если второе поддерживает первое, слово контраста не подходит."
              ),
            ],
          },
          {
            h: P("Sabab va natija: consequently, as a result, therefore", "Причина и следствие: consequently, as a result, therefore"),
            p: [
              P(
                "Birinchi gap sabab, ikkinchisi natija bo'lsa — natija bog'lovchisini ishlating. Yo'nalishni tekshiring: 'consequently / as a result / therefore' mos kelishi uchun sabab oldin kelishi kerak.",
                "Когда первое предложение — причина, а второе — её результат, используйте коннектор следствия. Проверьте направление: причина должна идти первой, чтобы подошли 'consequently / as a result / therefore'."
              ),
            ],
          },
          {
            h: P("Izohlash: that is, in other words", "Пояснение: that is, in other words"),
            p: [
              P(
                "Ba'zan ikkinchi gap qarshilik ham, natija ham emas — birinchisining mexanizmini QAYTA IFODALAB beradi. 'That is' va 'in other words' shu qayta ifodani kiritadi; buni sabab-natija bilan adashtirish testlarning sevimli chalg'ituvchisi.",
                "Иногда второе предложение — не контраст и не следствие, а ПЕРЕФОРМУЛИРОВКА механизма первого. 'That is' и 'in other words' вводят такое пояснение; спутать его с причиной-следствием — любимый дистрактор тестов."
              ),
            ],
          },
        ],
        quiz: [
          P("Umidli natijalar va jiddiy nojo'ya ta'sirlar — qarama-qarshilik → However.", "Обнадёживающие результаты против серьёзных побочных эффектов — контраст → However."),
          P("Ikkinchi gap tasdiqlovchi dalil qo'shadi — ADDITION → Moreover.", "Второе предложение добавляет подтверждающее свидетельство — ADDITION → Moreover."),
          P("Dalillarga QARAMAY holat davom etmoqda → Nevertheless.", "Явление продолжается ВОПРЕКИ данным → Nevertheless."),
          P("Arzon xarajat (sabab) → past narxlar (natija) → Consequently.", "Низкие затраты (причина) → низкие цены (следствие) → Consequently."),
          P("Ichki omillar va tashqi omillar — ikki qarash yonma-yon → By contrast.", "Внутренние и внешние факторы — два взгляда рядом → By contrast."),
          P("Ikkinchi gap yana bir foydani qo'shadi → Additionally.", "Второе предложение добавляет ещё одну выгоду → Additionally."),
          P("Nazorat tadqiqotiga QARAMAY real foydali natijalar → Nevertheless.", "Польза в реальных данных ВОПРЕКИ контролируемому исследованию → Nevertheless."),
          P("Treningga sarmoya (sabab) → kam ketish (natija) → As a result.", "Инвестиции в обучение (причина) → низкая текучесть (следствие) → As a result."),
          P("Va'da va aksincha harakat — aniq burilish → Yet.", "Обещание и противоположное действие — явный разворот → Yet."),
          P("Ikkinchi gap birinchisining mexanizmini izohlaydi → That is.", "Второе предложение поясняет механизм первого → That is."),
          P("Byudjet qisqarishi (sabab) → soatlar qisqarishi (natija) → As a result.", "Сокращение бюджета (причина) → сокращение часов (следствие) → As a result."),
          P("Tarafdorlar va tanqidchilar — qarama-qarshi qarashlar → However.", "Сторонники против критиков — противоположные взгляды → However."),
        ],
      },
    },
  },
  C1: {
    p1: {
      situation: "\"Her thesis needed one thing: evidence.\" The colon promises an explanation and delivers it. Swap it for a dash — \"Her thesis needed one thing — evidence.\" — and the register shifts from formal to dramatic.",
      blocks: [
        {
          h: "The colon: a complete clause, then the payoff",
          p: [
            "A colon may only follow a COMPLETE independent clause. What comes after it — a list, an explanation, a single word — answers the expectation the clause creates: 'The study identified three risk factors: poor diet, sedentary lifestyle, and chronic stress.'",
          ],
          ex: [
            "Three cities were considered for the summit: Geneva, Singapore, and Nairobi.",
            "Her conclusion was simple: the current model was fundamentally flawed.",
            "The finding had one major implication: the treatment needed revision.",
          ],
        },
        {
          h: "Where a colon is forbidden",
          p: [
            "Never place a colon after a preposition or a verb that flows directly into its object: 'The success depended on: innovation...' is wrong because 'depended on' is not a complete clause. If the words before the colon cannot stand alone as a sentence, use no punctuation at all.",
          ],
          ex: [
            "The company's success depended on innovation, partnerships, and timing. (no colon)",
            "The panel consists of three economists and a historian. (no colon after 'consists of')",
          ],
        },
        {
          h: "Em dashes come in pairs mid-sentence",
          p: [
            "A parenthetical interruption in the middle of a sentence takes an em dash on BOTH sides — never a dash on one side and a comma on the other. Delete the material between the dashes and the sentence must still work.",
          ],
          ex: [
            "The scientist — who had spent 30 years on the topic — finally announced her breakthrough.",
            "The award — never before given to a non-citizen — recognized her contributions.",
          ],
        },
        {
          h: "Colon or dash? Register decides",
          p: [
            "Both can introduce an explanation after a complete clause. The colon is the formal, academic choice; the single dash is more dramatic and conversational. On formal-writing questions where both appear as options, the colon is usually the intended answer.",
          ],
          ex: [
            "Formal: The data pointed to one culprit: the cooling system.",
            "Dramatic: The data pointed to one culprit — the cooling system.",
          ],
        },
      ],
      tip: "Cover everything after the colon: do the remaining words form a complete sentence? If not, the colon is illegal there. For dashes mid-sentence, count them — interruptions always need two.",
      examples: [
        "The recipe requires three things: patience, butter, and more patience.",
        "The verdict — reached after nine hours of deliberation — surprised everyone.",
        "One question remained: who would fund the second phase?",
        "The committee was divided: half supported the proposal, and half opposed it.",
      ],
      mistakes: [
        { x: "The success depended on: innovation and timing.", v: "The success depended on innovation and timing. — no colon after a preposition." },
        { x: "The scientist — who led the study, announced the result.", v: "The scientist — who led the study — announced the result. — mid-sentence dashes come in pairs." },
        { x: "Included in the kit: a manual and two cables.", v: "The kit includes two things: a manual and two cables. — a colon needs a complete clause before it." },
      ],
      tr: {
        situation: P(
          "\"Her thesis needed one thing: evidence.\" Ikki nuqta izoh va'da qiladi va uni beradi. Uni tirega almashtirsangiz — \"...one thing — evidence.\" — ohang rasmiylikdan dramatiklikka o'tadi.",
          "«Her thesis needed one thing: evidence.» Двоеточие обещает пояснение и даёт его. Замените его на тире — «...one thing — evidence.» — и регистр сместится с формального на драматичный."
        ),
        tip: P(
          "Ikki nuqtadan keyingi hamma narsani yoping: qolgan so'zlar to'liq gap bo'ladimi? Bo'lmasa — ikki nuqta u yerda mumkin emas. Gap o'rtasidagi tirelerni sanang — uzilishlar doim ikkitasini talab qiladi.",
          "Закройте всё после двоеточия: образуют ли оставшиеся слова полное предложение? Если нет — двоеточие там недопустимо. Тире в середине предложения считайте — вставке всегда нужны два."
        ),
        blocks: [
          {
            h: P("Ikki nuqta: to'liq gap, keyin javob", "Двоеточие: полное предложение, затем развязка"),
            p: [
              P(
                "Ikki nuqta faqat TO'LIQ mustaqil gapdan keyin kela oladi. Undan keyingisi — ro'yxat, izoh yoki bitta so'z — gap yaratgan kutishga javob beradi.",
                "Двоеточие может стоять только после ПОЛНОГО независимого предложения. То, что идёт после — список, пояснение или одно слово — отвечает на ожидание, созданное предложением."
              ),
            ],
          },
          {
            h: P("Ikki nuqta qayerda taqiqlangan", "Где двоеточие запрещено"),
            p: [
              P(
                "Predlogdan yoki to'ldiruvchisiga bevosita o'tadigan fe'ldan keyin hech qachon ikki nuqta qo'ymang: 'depended on: innovation...' xato, chunki 'depended on' to'liq gap emas. Ikki nuqtadan oldingi so'zlar alohida gap bo'la olmasa — umuman tinish belgisi kerak emas.",
                "Никогда не ставьте двоеточие после предлога или глагола, переходящего прямо в дополнение: 'depended on: innovation...' — ошибка, потому что 'depended on' не полное предложение. Если слова перед двоеточием не образуют предложение — знак не нужен вовсе."
              ),
            ],
          },
          {
            h: P("Em dash gap o'rtasida juft keladi", "Em dash в середине предложения парой"),
            p: [
              P(
                "Gap o'rtasidagi kirish ma'lumot IKKI tomondan em dash oladi — bir tomonda tire, ikkinchisida vergul bo'lishi mumkin emas. Tireler orasidagi qismni o'chirsangiz, gap baribir ishlashi kerak.",
                "Вставка в середине предложения выделяется em dash с ОБЕИХ сторон — нельзя с одной стороны тире, а с другой запятая. Удалите часть между тире — предложение должно остаться корректным."
              ),
            ],
          },
          {
            h: P("Ikki nuqta yoki tire? Uslub hal qiladi", "Двоеточие или тире? Решает регистр"),
            p: [
              P(
                "Ikkalasi ham to'liq gapdan keyin izoh kirita oladi. Ikki nuqta — rasmiy, akademik tanlov; yakka tire — dramatikroq va so'zlashuvga yaqin. Rasmiy yozuv savollarida ikkalasi ham variant bo'lsa, odatda ikki nuqta kutiladi.",
                "Оба могут вводить пояснение после полного предложения. Двоеточие — формальный, академический выбор; одиночное тире — более драматичное и разговорное. В вопросах о формальном письме, где есть оба варианта, обычно ожидается двоеточие."
              ),
            ],
          },
        ],
        quiz: [
          P("To'liq gap + ro'yxat → ikki nuqta; rasmiy yozuvda u afzal.", "Полное предложение + список → двоеточие; в формальном письме оно предпочтительно."),
          P("Kirish ma'lumot — em dash JUFT bo'lishi kerak.", "Вставка — em dash должны идти ПАРОЙ."),
          P("To'liq gap + izoh → ikki nuqta (rasmiy tanlov).", "Полное предложение + пояснение → двоеточие (формальный выбор)."),
          P("Kirish ma'lumot atrofida em dash juft keladi.", "Вокруг вставки em dash ставятся парой."),
          P("To'liq gap + izoh → ikki nuqta; tire ham mumkin, lekin ikki nuqta rasmiyroq.", "Полное предложение + пояснение → двоеточие; тире тоже возможно, но двоеточие формальнее."),
          P("To'liq gap + shaharlar ro'yxati → ikki nuqta.", "Полное предложение + список городов → двоеточие."),
          P("Gap o'rtasidagi kirish ma'lumot → juft em dash.", "Вставка в середине предложения → парные em dash."),
          P("To'liq gap + izoh → ikki nuqta.", "Полное предложение + пояснение → двоеточие."),
          P("To'liq gap + ro'yxat → ikki nuqta.", "Полное предложение + список → двоеточие."),
          P("Predlog ('on') dan keyin ikki nuqta qo'yib BO'LMAYDI → tinish belgisisiz.", "После предлога ('on') двоеточие ставить НЕЛЬЗЯ → без знака."),
          P("To'liq gap + xulosa izohi → ikki nuqta.", "Полное предложение + пояснение вывода → двоеточие."),
          P("'The committee was divided' — to'liq gap; izohni ikki nuqta kiritadi.", "'The committee was divided' — полное предложение; пояснение вводит двоеточие."),
        ],
      },
    },
    p2: {
      situation: "\"The dogs bowl\" — whose bowl? One dog ('the dog's bowl') or several ('the dogs' bowl')? Without the apostrophe the sentence cannot say. That is the entire job of this small mark.",
      blocks: [
        {
          h: "Singular 's vs. plural s'",
          p: [
            "One owner: add 's — 'the government's initiative'. Multiple owners whose plural ends in -s: add only the apostrophe AFTER the s — 'the professors' lectures', 'both departments' offices'. Never double the s into 'professors's'.",
          ],
          ex: [
            "The government's new initiative targets emissions. (one government)",
            "The professors' lectures drew huge crowds. (several professors)",
            "The two departments' offices share one building.",
          ],
        },
        {
          h: "Irregular plurals: children's, women's, people's",
          p: [
            "Plurals that do NOT end in -s form the possessive like singulars: add 's. 'The children's responses', 'women's rights', 'people's choices'. The same logic covers -ies plurals: 'the factories' impact' (apostrophe after the s).",
          ],
          ex: [
            "The children's responses varied by age group.",
            "The factories' impact on the ecosystem was studied for years.",
          ],
        },
        {
          h: "Possessive pronouns never take apostrophes",
          p: [
            "'Its', 'hers', 'theirs', 'yours', 'whose' are already possessive — adding an apostrophe creates a different word or a non-word. 'It's' = it is; 'who's' = who is; 'they're' = they are. 'Her's' and 'hers'' simply do not exist.",
          ],
          ex: [
            "The company released its report. / It's been a decade since the discovery.",
            "The scientist whose research won the prize gave a lecture.",
            "Despite their best efforts, the results never replicated.",
          ],
        },
        {
          h: "The expand test",
          p: [
            "Whenever you hesitate between its/it's or whose/who's, expand the contraction and reread: 'It's been a decade' → 'It has been a decade' — works, so keep the apostrophe. 'The company released it's report' → 'released it is report' — nonsense, so use 'its'.",
          ],
          ex: [
            "It's expanding into three new markets. (= it is — correct)",
            "The scientist who's presenting today studies deep-sea life. (= who is)",
          ],
        },
      ],
      tip: "Apostrophe decision in two questions: (1) Contraction? Expand it and check. (2) Possessive noun? Find how many owners: one → 's; plural in -s → s'; irregular plural → 's.",
      examples: [
        "The candidates' proposals were reviewed by the committee. (six candidates)",
        "It's been raining since the ceremony's opening minutes.",
        "The women's team broke the men's record.",
        "Whose thesis is this — and who's supervising it?",
      ],
      mistakes: [
        { x: "The company released it's annual report.", v: "The company released its annual report. — 'it's' = 'it is'; the possessive is 'its'." },
        { x: "The professors's lectures were popular.", v: "The professors' lectures were popular. — plural in -s takes only the apostrophe." },
        { x: "The childrens' responses were recorded.", v: "The children's responses were recorded. — irregular plural: apostrophe before the s." },
      ],
      tr: {
        situation: P(
          "\"The dogs bowl\" — kimning idishi? Bitta itnikimi ('the dog's bowl') yoki bir nechtanikimi ('the dogs' bowl')? Apostrofsiz gap buni ayta olmaydi. Bu kichkina belgining butun vazifasi shu.",
          "«The dogs bowl» — чья миска? Одной собаки ('the dog's bowl') или нескольких ('the dogs' bowl')? Без апострофа предложение не может этого сказать. В этом вся работа маленького знака."
        ),
        tip: P(
          "Apostrof qarori ikki savolda: (1) Qisqartmami? Yoyib tekshiring. (2) Egalik otimi? Egalar sonini toping: bitta → 's; -s bilan tugagan ko'plik → s'; noto'g'ri ko'plik → 's.",
          "Решение об апострофе в два вопроса: (1) Сокращение? Разверните и проверьте. (2) Притяжательное существительное? Определите число владельцев: один → 's; мн. ч. на -s → s'; неправильное мн. ч. → 's."
        ),
        blocks: [
          {
            h: P("Birlikda 's, ko'plikda s'", "Единственное число 's, множественное s'"),
            p: [
              P(
                "Bitta ega: 's qo'shiladi — 'the government's initiative'. -s bilan tugagan ko'plikdagi egalar: faqat s dan KEYIN apostrof — 'the professors' lectures'. Hech qachon 'professors's' deb s ni ikkilantirmang.",
                "Один владелец: добавьте 's — 'the government's initiative'. Владельцы во мн. ч. на -s: только апостроф ПОСЛЕ s — 'the professors' lectures'. Никогда не удваивайте s в 'professors's'."
              ),
            ],
          },
          {
            h: P("Noto'g'ri ko'pliklar: children's, women's, people's", "Неправильные формы мн. ч.: children's, women's, people's"),
            p: [
              P(
                "-s bilan tugamaydigan ko'pliklar egalikni birlik kabi yasaydi: 's qo'shiladi — 'the children's responses'. -ies ko'pliklari uchun esa apostrof s dan keyin: 'the factories' impact'.",
                "Множественные числа, не оканчивающиеся на -s, образуют притяжательную форму как ед. ч.: добавляется 's — 'the children's responses'. А у форм на -ies апостроф после s: 'the factories' impact'."
              ),
            ],
          },
          {
            h: P("Egalik olmoshlari hech qachon apostrof olmaydi", "Притяжательные местоимения никогда не берут апостроф"),
            p: [
              P(
                "'Its', 'hers', 'theirs', 'yours', 'whose' allaqachon egalik shakllari — apostrof qo'shsangiz boshqa so'z yoki mavjud bo'lmagan so'z hosil bo'ladi. 'It's' = it is; 'who's' = who is; 'they're' = they are. 'Her's' degan so'z yo'q.",
                "'Its', 'hers', 'theirs', 'yours', 'whose' уже притяжательные — апостроф даст другое слово или несуществующее. 'It's' = it is; 'who's' = who is; 'they're' = they are. Слова 'her's' не существует."
              ),
            ],
          },
          {
            h: P("Yoyish testi", "Тест разворачивания"),
            p: [
              P(
                "Its/it's yoki whose/who's orasida ikkilansangiz, qisqartmani yoyib qayta o'qing: 'It's been a decade' → 'It has been a decade' — ishlaydi, apostrof qoladi. 'released it's report' → 'released it is report' — bema'ni, demak 'its'.",
                "Сомневаетесь между its/it's или whose/who's — разверните сокращение и перечитайте: 'It's been a decade' → 'It has been a decade' — работает, апостроф остаётся. 'released it's report' → 'released it is report' — бессмыслица, значит 'its'."
              ),
            ],
          },
        ],
        quiz: [
          P("Egalik → 'its' (apostrofsiz); 'it is' yoyilmasi bema'ni bo'lardi.", "Притяжательное → 'its' (без апострофа); разворот 'it is' дал бы бессмыслицу."),
          P("Bir nechta professor → ko'plik egalik: professors' (s dan keyin apostrof).", "Несколько профессоров → притяжательное мн. ч.: professors' (апостроф после s)."),
          P("'Hers' — tayyor egalik olmoshi, apostrof kerak emas.", "'Hers' — готовое притяжательное местоимение, апостроф не нужен."),
          P("'Their' — egalik olmoshi; 'they're' = they are.", "'Their' — притяжательное местоимение; 'they're' = they are."),
          P("'Children' — noto'g'ri ko'plik → 's qo'shiladi: children's.", "'Children' — неправильное мн. ч. → добавляется 's: children's."),
          P("Oltita nomzod → ko'plik egalik: candidates'.", "Шесть кандидатов → притяжательное мн. ч.: candidates'."),
          P("Bitta hukumat → birlik egalik: government's.", "Одно правительство → притяжательное ед. ч.: government's."),
          P("'It's been' = 'It has been' — qisqartma → apostrof kerak.", "'It's been' = 'It has been' — сокращение → нужен апостроф."),
          P("'Whose' — egalik nisbiy olmoshi; 'who's' = who is bema'ni bo'lardi.", "'Whose' — притяжательное относительное местоимение; 'who's' = who is дало бы бессмыслицу."),
          P("Ikkita bo'lim → ko'plik egalik: departments'.", "Два отдела → притяжательное мн. ч.: departments'."),
          P("Bir nechta zavod (-ies ko'pligi) → factories' (s dan keyin apostrof).", "Несколько фабрик (мн. ч. на -ies) → factories' (апостроф после s)."),
          P("'It's expanding' = 'it is expanding' — qisqartma → it's.", "'It's expanding' = 'it is expanding' — сокращение → it's."),
        ],
      },
    },
    p3: {
      situation: "\"Having analyzed all available data.\" A reviewer writes in the margin: 'And then what?' The phrase promises a sentence that never arrives — a fragment. The opposite failure: two sentences fused with nothing between them.",
      blocks: [
        {
          h: "What makes a clause independent",
          p: [
            "An independent clause has a subject and a main verb and expresses a complete thought. Every sentence needs at least one. The two boundary errors are mirror images: a RUN-ON jams two independent clauses together (with no punctuation, or with only a comma — the comma splice); a FRAGMENT punctuates less than a full clause as if it were a sentence.",
          ],
          ex: [
            "Run-on: The weather delayed the launch engineers rescheduled for next week.",
            "Comma splice: The data was compelling, the board approved the project.",
            "Complete: The test results were inconclusive, but the study continued.",
          ],
        },
        {
          h: "Four legal ways to join two independent clauses",
          p: [
            "(1) A period — two sentences. (2) A semicolon. (3) A comma plus a coordinating conjunction (FANBOYS). (4) Subordination — turn one clause into a dependent clause with 'because', 'although', 'when'. A conjunctive adverb like 'however' or 'nevertheless' needs the pattern '; however,' — semicolon before, comma after.",
          ],
          ex: [
            "Solar panels became cheaper; many households can now afford them.",
            "The novel got mixed reviews; however, it is now considered a masterpiece.",
            "The population is declining; yet, conservationists cannot find the cause.",
          ],
        },
        {
          h: "Spotting and fixing fragments",
          p: [
            "Typical fragments: a participial phrase ('Having analyzed all available data.'), a prepositional opener ('After years of painstaking research.'), or a relative clause cut loose ('Which proved the hypothesis was correct.'). The fix is always attachment: connect the fragment to the main clause it belongs to, or give it its own subject and verb.",
          ],
          ex: [
            "The paintings, discovered in a remote cave, date back 30,000 years.",
            "The experiment was a success, which proved the hypothesis was correct.",
            "After years of research, the team finally published.",
          ],
        },
      ],
      tip: "Read each candidate 'sentence' alone and ask: subject? main verb? complete thought? All three yes — independent clause. Then check every junction between two independent clauses for one of the four legal connectors.",
      examples: [
        "The funding fell through; nevertheless, the lab stayed open.",
        "Because the survey sample was tiny, the findings were treated with caution.",
        "The mayor promised reform, and the council delivered it.",
        "Exhausted but satisfied, the crew docked the ship. (participial opener attached — not a fragment)",
      ],
      mistakes: [
        { x: "The results were published. Which surprised the reviewers.", v: "The results were published, which surprised the reviewers. — a relative clause cannot stand alone." },
        { x: "The trial ended, the verdict shocked everyone.", v: "The trial ended; the verdict shocked everyone. — comma splice: use a semicolon or a conjunction." },
        { x: "The storm intensified overnight the city closed all schools.", v: "The storm intensified overnight, so the city closed all schools. — fused run-on: add punctuation plus a connector." },
      ],
      tr: {
        situation: P(
          "\"Having analyzed all available data.\" Muharrir chetiga yozadi: 'Xo'sh, keyin nima?' Ibora gap va'da qiladi, lekin gap kelmaydi — bu fragment. Teskari xato: ikkita gap orasiga hech narsa qo'ymay yopishtiriladi.",
          "«Having analyzed all available data.» Рецензент пишет на полях: «И что дальше?» Оборот обещает предложение, которое так и не приходит — это fragment. Противоположная ошибка: два предложения слиты вообще без знака."
        ),
        tip: P(
          "Har bir 'gap'ni alohida o'qib so'rang: ega bormi? asosiy fe'l bormi? fikr tugalmi? Uchalasi ham ha — mustaqil gap. Keyin ikki mustaqil gap orasidagi har bir tutashuvda to'rt qonuniy bog'lagichdan biri borligini tekshiring.",
          "Прочитайте каждое «предложение» отдельно и спросите: подлежащее? главный глагол? законченная мысль? Три «да» — независимое предложение. Затем проверьте каждый стык двух независимых предложений на один из четырёх законных соединителей."
        ),
        blocks: [
          {
            h: P("Gapni mustaqil qiladigan narsa", "Что делает предложение независимым"),
            p: [
              P(
                "Mustaqil gapda ega, asosiy fe'l va tugal fikr bor. Ikki chegara xatosi bir-birining aksi: RUN-ON ikkita mustaqil gapni belgisiz (yoki faqat vergul bilan — comma splice) yopishtiradi; FRAGMENT esa to'liq gapdan kamroq narsani gap kabi rasmiylashtiradi.",
                "У независимого предложения есть подлежащее, главный глагол и законченная мысль. Две ошибки границ зеркальны: RUN-ON слепляет два независимых предложения без знака (или только запятой — comma splice); FRAGMENT оформляет как предложение то, что предложением не является."
              ),
            ],
          },
          {
            h: P("Ikki mustaqil gapni bog'lashning to'rt qonuniy yo'li", "Четыре законных способа соединить два независимых предложения"),
            p: [
              P(
                "(1) Nuqta — ikkita gap. (2) Nuqtali vergul. (3) Vergul + muvofiqlashtiruvchi bog'lovchi (FANBOYS). (4) Ergashtirish — 'because', 'although', 'when' bilan. 'However' yoki 'nevertheless' kabi bog'lovchi ravishlar '; however,' qolipini talab qiladi — oldin nuqtali vergul, keyin vergul.",
                "(1) Точка — два предложения. (2) Точка с запятой. (3) Запятая + сочинительный союз (FANBOYS). (4) Подчинение — с 'because', 'although', 'when'. Союзные наречия вроде 'however' и 'nevertheless' требуют схемы '; however,' — точка с запятой до, запятая после."
              ),
            ],
          },
          {
            h: P("Fragmentlarni topish va tuzatish", "Найти и исправить фрагменты"),
            p: [
              P(
                "Odatiy fragmentlar: participial ibora ('Having analyzed...'), predlogli boshlanish ('After years of research.') yoki uzilib qolgan nisbiy gap ('Which proved...'). Yechim doim biriktirish: fragmentni tegishli asosiy gapga ulang yoki unga o'z egasi va fe'lini bering.",
                "Типичные фрагменты: причастный оборот ('Having analyzed...'), предложное начало ('After years of research.') или оторванное относительное придаточное ('Which proved...'). Решение всегда одно — присоединение: прикрепите фрагмент к главному предложению или дайте ему своё подлежащее и глагол."
              ),
            ],
          },
        ],
        quiz: [
          P("Ikki mustaqil gap faqat vergul bilan — comma splice.", "Два независимых предложения с одной запятой — comma splice."),
          P("Ikki mustaqil gap belgisiz yopishtirilgan — fused run-on.", "Два независимых предложения без знака — слитный run-on."),
          P("Qarama-qarshi ikki mustaqil gap → '; however,' qolipi.", "Два контрастных независимых предложения → схема '; however,'."),
          P("'After years of painstaking research' — asosiy gapi yo'q → fragment.", "'After years of painstaking research' — нет главного предложения → фрагмент."),
          P("Ikki mustaqil gap → nuqtali vergul; vergul splice, hech narsa run-on bo'lardi.", "Два независимых предложения → точка с запятой; запятая — splice, ничего — run-on."),
          P("Participial ibora asosiy gapga biriktiriladi — fragment yo'qoladi.", "Причастный оборот присоединяется к главному предложению — фрагмент исчезает."),
          P("Ikki mustaqil gap → nuqtali vergul.", "Два независимых предложения → точка с запятой."),
          P("Faqat participial ibora — ega ham, fe'l ham yo'q → fragment.", "Только причастный оборот — ни подлежащего, ни глагола → фрагмент."),
          P("Qarama-qarshilik → '; yet,' — nuqtali vergul + vergul.", "Контраст → '; yet,' — точка с запятой + запятая."),
          P("Ega va asosiy fe'l bor variantgina to'liq gap.", "Только вариант с подлежащим и главным глаголом — полное предложение."),
          P("Mustahkam, lekin baribir yopilgan — qarama-qarshilik → '; nevertheless,'.", "Мост прочный, но всё же закрыт — контраст → '; nevertheless,'."),
          P("'Which proved...' nonrestrictive nisbiy gap sifatida biriktiriladi — endi fragment emas.", "'Which proved...' присоединяется как nonrestrictive придаточное — больше не фрагмент."),
        ],
      },
    },
    p4: {
      situation: "\"Walking to work, the rain started.\" So the rain was walking to work? The opening phrase grabs the nearest subject — and finds the wrong one. C1 writing is where these ghosts get exorcised.",
      blocks: [
        {
          h: "Dangling modifiers: the doer must follow the comma",
          p: [
            "An opening participial or infinitive phrase ('Returning from the field,...', 'Having examined the patient,...', 'To pass the course,...') silently claims the subject of the main clause as its doer. If that subject did not perform the action, the modifier dangles. Fix it by making the true doer the subject, or by rewriting the phrase as a full clause.",
          ],
          ex: [
            "Returning from the field, the team labeled the samples. (the team returned)",
            "Having examined the patient, the doctor made a diagnosis.",
            "To pass the course, students must attend regularly.",
          ],
        },
        {
          h: "Misplaced modifiers: keep them next to what they modify",
          p: [
            "Modifiers attach to the nearest plausible word, so position changes meaning: 'The storm NEARLY destroyed every home' (came close, destroyed none) vs. 'The storm destroyed NEARLY every home' (destroyed most). Phrases behave the same way — 'She served cake on paper plates to the children' puts the cake, not the children, on the plates.",
          ],
          ex: [
            "The storm destroyed nearly every home in the neighborhood.",
            "She served cake on paper plates to the children.",
            "Using a high-powered microscope, the scientist observed the samples.",
          ],
        },
        {
          h: "Parallelism in lists",
          p: [
            "Items in a series must share one grammatical shape: all nouns, all adjectives, or all matching verb phrases. 'Talented, dedicated, and works very hard' breaks the pattern — two adjectives and a verb phrase. Repeating a marker word ('her vision, her work ethic, her willingness') makes the parallelism audible.",
          ],
          ex: [
            "The CEO was praised for her vision, her work ethic, and her willingness to take risks.",
            "He is talented, dedicated, and hardworking.",
          ],
        },
        {
          h: "Correlatives and comparisons",
          p: [
            "'Not only... but also' and 'both... and' must frame grammatically identical pieces: 'not only PREVENTS the disease but also REDUCES its severity.' Comparisons must match like with like: compare Tokyo's population with New York's population — not with New York itself.",
          ],
          ex: [
            "The vaccine not only prevents the disease but also reduces its severity.",
            "The policy is both controversial and widely criticized.",
            "Tokyo's population is larger than New York's.",
          ],
        },
      ],
      tip: "After any opening phrase with a comma, point at the next noun and ask: 'Did YOU do this?' If it couldn't have, the modifier is dangling. For lists and correlatives, read each item against the same frame word.",
      examples: [
        "Hoping to win the grant, the lab submitted three proposals.",
        "The committee wants a plan that is bold, feasible, and fundable.",
        "The course covers not only theory but also practice.",
        "Her salary is higher than her manager's.",
      ],
      mistakes: [
        { x: "Having examined the patient, the diagnosis was made.", v: "Having examined the patient, the doctor made a diagnosis. — the doctor, not the diagnosis, did the examining." },
        { x: "He is talented, dedicated, and works very hard.", v: "He is talented, dedicated, and hardworking. — keep all three items adjectives." },
        { x: "Tokyo's population is larger than New York.", v: "Tokyo's population is larger than New York's. — compare population with population." },
      ],
      tr: {
        situation: P(
          "\"Walking to work, the rain started.\" Demak, yomg'ir ishga piyoda ketayotgan ekanmi? Boshlovchi ibora eng yaqin egani o'ziniki qilib oladi — va noto'g'risini topadi. C1 yozuvida ana shu 'sharpalar' tuzatiladi.",
          "«Walking to work, the rain started.» Выходит, дождь шёл на работу пешком? Начальный оборот присваивает себе ближайшее подлежащее — и находит не то. Именно на уровне C1 эти «призраки» изгоняются."
        ),
        tip: P(
          "Vergulli boshlovchi iboradan keyin keyingi otga ishora qilib so'rang: 'Buni SEN qildingmi?' Qila olmagan bo'lsa — modifier osilib qolgan. Ro'yxat va korrelativlarda har bir elementni bir xil qolipga solib o'qing.",
          "После любого начального оборота с запятой укажите на следующее существительное и спросите: «Это сделал ТЫ?» Если не мог — модификатор повис. В списках и коррелятивах читайте каждый элемент через одну и ту же рамку."
        ),
        blocks: [
          {
            h: P("Osilgan modifierlar: verguldan keyin bajaruvchi kelishi kerak", "Висячие модификаторы: после запятой должен идти деятель"),
            p: [
              P(
                "Boshlovchi participial yoki infinitive ibora asosiy gapning egasini o'z bajaruvchisi deb biladi. Ega bu harakatni bajarmagan bo'lsa, modifier osilib qoladi. Tuzatish: haqiqiy bajaruvchini ega qiling yoki iborani to'liq gapga aylantiring.",
                "Начальный причастный или инфинитивный оборот молча объявляет подлежащее главного предложения своим деятелем. Если подлежащее действие не выполняло — модификатор повисает. Исправление: сделайте настоящего деятеля подлежащим или перепишите оборот полным предложением."
              ),
            ],
          },
          {
            h: P("Noto'g'ri joylashgan modifierlar: aniqlanayotgan so'z yonida saqlang", "Смещённые модификаторы: держите их рядом с определяемым словом"),
            p: [
              P(
                "Modifier eng yaqin mos so'zga yopishadi, shuning uchun o'rin ma'noni o'zgartiradi: 'NEARLY destroyed every home' (deyarli vayron qildi, lekin qilmadi) va 'destroyed NEARLY every home' (deyarli hammasini vayron qildi) — butunlay boshqa gaplar. Iboralar ham xuddi shunday ishlaydi.",
                "Модификатор цепляется к ближайшему подходящему слову, поэтому позиция меняет смысл: 'NEARLY destroyed every home' (чуть не разрушил) и 'destroyed NEARLY every home' (разрушил почти все) — совсем разные предложения. Обороты ведут себя так же."
              ),
            ],
          },
          {
            h: P("Ro'yxatlarda parallelizm", "Параллелизм в перечислениях"),
            p: [
              P(
                "Sanashdagi elementlar bitta grammatik shaklda bo'lishi kerak: hammasi ot, hammasi sifat yoki hammasi mos fe'l iborasi. Belgi so'zni takrorlash ('her vision, her work ethic, her willingness') parallelizmni yaqqol qiladi.",
                "Элементы перечисления должны иметь одну грамматическую форму: все существительные, все прилагательные или все одинаковые глагольные группы. Повтор опорного слова ('her vision, her work ethic, her willingness') делает параллелизм наглядным."
              ),
            ],
          },
          {
            h: P("Korrelativlar va qiyoslashlar", "Коррелятивы и сравнения"),
            p: [
              P(
                "'Not only... but also' va 'both... and' grammatik jihatdan bir xil bo'laklarni qamrashi shart: 'not only PREVENTS... but also REDUCES...'. Qiyoslashda o'xshash narsalar solishtiriladi: Tokioning aholisi Nyu-Yorkning AHOLISI bilan — Nyu-Yorkning o'zi bilan emas.",
                "'Not only... but also' и 'both... and' должны обрамлять грамматически одинаковые части: 'not only PREVENTS... but also REDUCES...'. В сравнении сопоставляют подобное с подобным: население Токио — с НАСЕЛЕНИЕМ Нью-Йорка, а не с самим городом."
              ),
            ],
          },
        ],
        quiz: [
          P("'Returning from the field' — kim qaytdi? Jamoa; verguldan keyin 'the team' kelishi kerak.", "'Returning from the field' — кто вернулся? Команда; после запятой должно идти 'the team'."),
          P("Uchta parallel egalik ot iborasi: 'her vision, her work ethic, her willingness'.", "Три параллельные притяжательные группы: 'her vision, her work ethic, her willingness'."),
          P("Bemorni shifokor ko'rdi → verguldan keyin ega 'the doctor'.", "Пациента осматривал врач → после запятой подлежащее 'the doctor'."),
          P("Ikki sifat + fe'l iborasi — parallelizm buzilgan.", "Два прилагательных + глагольная группа — параллелизм нарушен."),
          P("'Nearly every home' — 'nearly' to'g'ridan-to'g'ri 'every home' ni aniqlaydi.", "'Nearly every home' — 'nearly' напрямую определяет 'every home'."),
          P("'not only PREVENTS... but also REDUCES' — ikkala fe'l parallel.", "'not only PREVENTS... but also REDUCES' — оба глагола параллельны."),
          P("'On paper plates' tort yonida turishi kerak — bolalar emas, tort likopchada.", "'On paper plates' должно стоять рядом с 'cake' — на тарелках торт, а не дети."),
          P("'Written during the Great Depression' romanni aniqlaydi — modifier 'the novel' yoniga qo'yiladi.", "'Written during the Great Depression' определяет роман — модификатор ставится рядом с 'the novel'."),
          P("Ikkala variant ham aholini aholi bilan qiyoslaydi — ikkalasi to'g'ri.", "Оба варианта сравнивают население с населением — верны оба."),
          P("Kursdan talabalar o'tadi, davomat emas — ikkala qayta yozuv ham to'g'ri.", "Курс сдают студенты, а не посещаемость — обе переработки верны."),
          P("Ikkala variant ham mikroskopni olimga bog'laydi — ikkalasi aniq va to'g'ri.", "Оба варианта относят микроскоп к учёному — оба ясны и верны."),
          P("'both CONTROVERSIAL and WIDELY CRITICIZED' — ikkala sifat ibora parallel.", "'both CONTROVERSIAL and WIDELY CRITICIZED' — обе адъективные группы параллельны."),
        ],
      },
    },
    p5: {
      situation: "\"The speaker's tone was measured.\" Measured — with a ruler? No: in this sentence the word means 'carefully controlled'. Advanced vocabulary questions test the sense a word carries HERE, not its dictionary headline.",
      blocks: [
        {
          h: "Context selects the sense",
          p: [
            "Most sophisticated words have several senses, and 'as used in the text' questions ask which one is active. The passage always contains the evidence: 'measured' next to 'neither contempt nor enthusiasm' must mean restrained; 'costly' next to 'metabolically expensive' must mean resource-intensive, not pricey.",
          ],
          ex: [
            "The speaker's tone was measured — carefully controlled and restrained.",
            "The peacock's tail is a costly signal — requiring significant biological resources.",
          ],
        },
        {
          h: "Beware the literal-meaning distractor",
          p: [
            "Wrong answers love the most familiar sense of the word: 'measured' = quantified, 'synthesize' = produce chemically, 'harbored' = sheltered a ship, 'articulate' = speak clearly. Substitute the candidate meaning back into the sentence — if it produces nonsense or the wrong register, it is the distractor.",
          ],
          ex: [
            "Secondary sources synthesize primary materials — combine them into a coherent whole.",
            "The president harbored reservations — held them privately within himself.",
            "Gift-giving articulates social hierarchies — expresses and gives form to them.",
          ],
        },
        {
          h: "Use the passage's logic: contrast, cause, definition",
          p: [
            "Passages often define the word for you: an appositive ('primary sources — documents produced at the time'), a contrast ('broad support BUT entrenched resistance'), or an elaboration ('austere, stripped of ornamentation'). Read the frame before the options.",
            "Also check intensity: 'tarnished' means damaged, not destroyed; 'tentative' means not yet certain, not temporary. The right answer matches the strength of the original word.",
          ],
          ex: [
            "The novelist's prose is austere — severely simple, without decoration.",
            "Her reputation was tarnished — diminished, but not destroyed.",
            "The findings were tentative — not fully committed or certain.",
          ],
        },
      ],
      tip: "Treat the tested word as a blank. Read the sentence, predict your own word for the blank, THEN look at the options — the answer closest to your prediction wins, and the flashy dictionary-first sense loses.",
      examples: [
        "Profitability remained elusive — not yet achieved despite record revenues.",
        "Entrenched interests resisted the reform — firmly established and resistant to change.",
        "The canon was codified in the nineteenth century — arranged into a systematic body.",
        "The findings warrant replication — they justify and necessitate it.",
      ],
      mistakes: [
        { x: "Reading 'The tone was measured' as 'the tone was quantified'.", v: "'Measured' here means carefully controlled — the context of restraint, not numbers, decides." },
        { x: "Reading 'harbored reservations' as 'concealed them from the authorities'.", v: "'Harbored' means held privately within oneself — no illegality is implied." },
        { x: "Choosing 'completely destroyed' for 'tarnished'.", v: "'Tarnished' means damaged or diminished — match the word's intensity, not the strongest option." },
      ],
      tr: {
        situation: P(
          "\"The speaker's tone was measured.\" Measured — chizg'ich bilan o'lchanganmi? Yo'q: bu gapda so'z 'ehtiyotkorona jilovlangan' degani. Yuqori darajadagi lug'at savollari so'zning SHU YERDAGI ma'nosini tekshiradi, lug'atdagi birinchi ma'nosini emas.",
          "«The speaker's tone was measured.» Measured — измерен линейкой? Нет: в этом предложении слово значит «тщательно сдержанный». Продвинутые вопросы по лексике проверяют смысл слова ЗДЕСЬ, а не заглавное словарное значение."
        ),
        tip: P(
          "Tekshirilayotgan so'zni bo'sh joy deb hisoblang. Gapni o'qing, bo'sh joyga o'z so'zingizni bashorat qiling, KEYIN variantlarga qarang — bashoratingizga eng yaqini yutadi, lug'atdagi 'yaltiroq' birinchi ma'no esa yutqazadi.",
          "Считайте проверяемое слово пропуском. Прочитайте предложение, предскажите своё слово для пропуска, ПОТОМ смотрите варианты — побеждает ближайший к вашему прогнозу, а броское первое словарное значение проигрывает."
        ),
        blocks: [
          {
            h: P("Ma'noni kontekst tanlaydi", "Смысл выбирает контекст"),
            p: [
              P(
                "Aksariyat murakkab so'zlarning bir nechta ma'nosi bor, 'as used in the text' savollari qaysi biri faol ekanini so'raydi. Dalil doim matnning o'zida: 'measured' 'neither contempt nor enthusiasm' yonida — demak jilovlangan; 'costly' 'metabolically expensive' yonida — demak resurs talab qiladigan.",
                "У большинства сложных слов несколько значений, и вопросы 'as used in the text' спрашивают, какое из них активно. Доказательство всегда в тексте: 'measured' рядом с 'neither contempt nor enthusiasm' — значит сдержанный; 'costly' рядом с 'metabolically expensive' — значит ресурсозатратный."
              ),
            ],
          },
          {
            h: P("To'g'ridan-to'g'ri ma'no tuzog'idan ehtiyot bo'ling", "Остерегайтесь дистрактора с буквальным значением"),
            p: [
              P(
                "Noto'g'ri javoblar so'zning eng tanish ma'nosini yaxshi ko'radi: 'measured' = o'lchangan, 'synthesize' = kimyoviy ishlab chiqarish, 'articulate' = ravon gapirish. Nomzod ma'noni gapga qaytarib qo'yib ko'ring — bema'nilik chiqsa, bu chalg'ituvchi.",
                "Неверные ответы обожают самое привычное значение слова: 'measured' = измеренный, 'synthesize' = синтезировать химически, 'articulate' = чётко говорить. Подставьте значение-кандидат обратно в предложение — если выходит бессмыслица, это дистрактор."
              ),
            ],
          },
          {
            h: P("Matn mantig'idan foydalaning: qarama-qarshilik, sabab, ta'rif", "Используйте логику текста: контраст, причина, определение"),
            p: [
              P(
                "Matn ko'pincha so'zni o'zi ta'riflab beradi: appositive ('primary sources — documents produced at the time'), qarama-qarshilik yoki kengaytma ('austere, stripped of ornamentation'). Variantlardan oldin shu ramkani o'qing.",
                "Текст часто сам определяет слово: приложение ('primary sources — documents produced at the time'), контраст или уточнение ('austere, stripped of ornamentation'). Прочитайте эту рамку до вариантов."
              ),
              P(
                "Kuchni ham tekshiring: 'tarnished' — shikastlangan, vayron qilingan emas; 'tentative' — hali aniq emas, vaqtinchalik emas. To'g'ri javob asl so'zning kuchiga mos keladi.",
                "Проверяйте и силу слова: 'tarnished' — повреждённый, а не уничтоженный; 'tentative' — ещё не окончательный, а не временный. Правильный ответ соответствует силе исходного слова."
              ),
            ],
          },
        ],
        quiz: [
          P("Kanon tartibga solingan tizimga aylantirilgan — 'codified' = qoidalar tizimiga keltirilgan.", "Канон превращён в упорядоченную систему — 'codified' = сведён в систему норм."),
          P("Ohang mo''tadil — 'measured' = ehtiyotkorona jilovlangan; 'o'lchangan' boshqa ma'no.", "Тон умеренный — 'measured' = тщательно сдержанный; «измеренный» — другой смысл."),
          P("'Entrenched' = chuqur o'rnashgan va o'zgarishga qarshi.", "'Entrenched' = прочно укоренившийся и сопротивляющийся переменам."),
          P("Bezaklardan xoli uslub — 'austere' = qat'iy sodda, bezaksiz.", "Стиль без украшений — 'austere' = строго простой, без декора."),
          P("Foyda harakatlarga qaramay qo'lga kirmadi — 'elusive' = hali erishilmagan.", "Прибыль не достигнута несмотря на усилия — 'elusive' = ещё не достигнутый."),
          P("'Synthesize' = elementlarni yaxlit butunlikka birlashtirish; kimyoviy ma'no mos emas.", "'Synthesize' = соединять элементы в связное целое; химический смысл не подходит."),
          P("'Harbored' = ichida yashirin saqlagan, oshkor qilmagan.", "'Harbored' = держал внутри себя, не выражая публично."),
          P("Matnning o'zi izohlaydi: 'metabolically expensive' — biologik resurs talab qiladigan.", "Текст сам поясняет: 'metabolically expensive' — требующий биологических ресурсов."),
          P("'Tarnished' = shikastlangan, xiralashgan — 'butunlay vayron' juda kuchli.", "'Tarnished' = повреждённый, потускневший — «полностью разрушен» слишком сильно."),
          P("'Tentative' = dastlabki, hali aniq emas, qayta ko'rishga ochiq.", "'Tentative' = предварительный, ещё не окончательный, открытый для пересмотра."),
          P("Sovg'a berish ierarxiyalarni ifodalaydi — 'articulate' = ifodalash, shakl berish.", "Дарение выражает иерархии — 'articulate' = выражать, придавать форму."),
          P("Natijalar takrorlashni talab qiladi — 'warranting' = asoslaydigan, zarur qiladigan.", "Результаты требуют репликации — 'warranting' = обосновывающий, делающий необходимым."),
        ],
      },
    },
    p6: {
      situation: "\"The council decided to postpone and delay the vote until a later date in the future.\" Cross out everything the sentence already said once: 'The council decided to postpone the vote.' Nothing was lost — nine words were.",
      blocks: [
        {
          h: "Redundant pairs: say it once",
          p: [
            "English test sentences love doubled synonyms: 'postpone and delay', 'unexpected and surprising', 'document and record', 'important and significant', 'unique and one-of-a-kind'. Each pair carries one idea — keep one word, cut the twin.",
          ],
          ex: [
            "Scientists made a surprising discovery. (not 'unexpected and surprising')",
            "Researchers should document all observations. (not 'document and record')",
            "The findings were significant. (not 'important and significant')",
          ],
        },
        {
          h: "Empty phrases: compress the machinery",
          p: [
            "Multi-word constructions often collapse into one word with no loss: 'due to the fact that' → 'because'; 'in the event that' → 'if'; 'has the ability to' → 'can'; 'help facilitate the improvement of' → 'help improve'. Formal does not mean wordy — the compressed version is usually MORE formal.",
          ],
          ex: [
            "Because the medication can cause side effects, patients should consult their doctors.",
            "If the experiment produces unexpected results, document them.",
            "The new policy will help improve working conditions.",
          ],
        },
        {
          h: "Cut what the sentence already implies",
          p: [
            "'Was able to successfully complete' — completing IS succeeding, and doing it proves ability: 'completed' says everything. Likewise 'crossed the finish line at the end of the race', 'future advancement', 'ancient ruins which were old'. If deleting a phrase changes nothing, the phrase was noise.",
          ],
          ex: [
            "The athlete completed the marathon in under three hours.",
            "The exhausted runners crossed the finish line.",
            "The findings were significant for the advancement of the field.",
          ],
        },
        {
          h: "One structural trap: 'the reason is that'",
          p: [
            "'The reason... was because' doubles the cause marker — 'because' already means 'for the reason that'. Formal English requires 'the reason... was THAT': 'The reason the project failed was that the team lacked resources.' Or simpler still: 'The project failed because the team lacked resources.'",
          ],
          ex: [
            "The reason the project failed was that the team lacked resources.",
            "The project failed because the team lacked resources.",
          ],
        },
      ],
      tip: "For every candidate revision, run the deletion test: remove the suspect words and reread. If the meaning is fully intact, the shorter version is the answer — concision questions almost never reward added words.",
      examples: [
        "The board approved the merger. (not 'made the decision to approve')",
        "The design incorporates several unique features.",
        "If demand rises, prices will follow.",
        "The report is significant for the field's advancement.",
      ],
      mistakes: [
        { x: "The reason the launch slipped was because the vendor was late.", v: "The reason the launch slipped was that the vendor was late. — 'the reason... was because' doubles the cause marker." },
        { x: "The athlete was able to successfully complete the race.", v: "The athlete completed the race. — 'was able to' and 'successfully' are implied by 'completed'." },
        { x: "We will revisit this at a later date in the future.", v: "We will revisit this later. — 'a later date' and 'in the future' say the same thing." },
      ],
      tr: {
        situation: P(
          "\"The council decided to postpone and delay the vote until a later date in the future.\" Gap bir marta aytgan hamma narsani o'chiring: 'The council decided to postpone the vote.' Ma'no yo'qolmadi — to'qqizta so'z yo'qoldi.",
          "«The council decided to postpone and delay the vote until a later date in the future.» Вычеркните всё, что предложение уже сказало один раз: 'The council decided to postpone the vote.' Смысл не потерян — потеряны девять слов."
        ),
        tip: P(
          "Har bir taklif qilingan tahrir uchun o'chirish testini o'tkazing: shubhali so'zlarni olib tashlab qayta o'qing. Ma'no to'liq saqlansa — qisqa varianti javob; concision savollari deyarli hech qachon qo'shimcha so'zlarni mukofotlamaydi.",
          "Для каждой предложенной правки проведите тест удаления: уберите подозрительные слова и перечитайте. Если смысл полностью цел — ответ короче; вопросы на лаконичность почти никогда не вознаграждают добавленные слова."
        ),
        blocks: [
          {
            h: P("Takroriy juftliklar: bir marta ayting", "Избыточные пары: скажите один раз"),
            p: [
              P(
                "Test gaplari ikkilangan sinonimlarni yaxshi ko'radi: 'postpone and delay', 'unexpected and surprising', 'document and record', 'unique and one-of-a-kind'. Har bir juftlik bitta fikrni tashiydi — bittasini qoldiring, egizagini o'chiring.",
                "Тестовые предложения любят удвоенные синонимы: 'postpone and delay', 'unexpected and surprising', 'document and record', 'unique and one-of-a-kind'. Каждая пара несёт одну мысль — оставьте одно слово, уберите близнеца."
              ),
            ],
          },
          {
            h: P("Bo'sh iboralar: mexanizmni siqing", "Пустые обороты: сожмите механизм"),
            p: [
              P(
                "Ko'p so'zli qurilmalar ko'pincha bitta so'zga yig'iladi: 'due to the fact that' → 'because'; 'in the event that' → 'if'; 'has the ability to' → 'can'. Rasmiylik ko'p so'zlilik degani emas — siqilgan variant odatda RASMIYROQ.",
                "Многословные конструкции часто сворачиваются в одно слово: 'due to the fact that' → 'because'; 'in the event that' → 'if'; 'has the ability to' → 'can'. Формальность — не многословие: сжатый вариант обычно ФОРМАЛЬНЕЕ."
              ),
            ],
          },
          {
            h: P("Gap allaqachon anglatgan narsani o'chiring", "Уберите то, что предложение уже подразумевает"),
            p: [
              P(
                "'Was able to successfully complete' — tugatishning o'zi muvaffaqiyat va qobiliyat isboti: 'completed' hammasini aytadi. Xuddi shunday 'future advancement', 'ancient ruins which were old'. Iborani o'chirish hech narsani o'zgartirmasa — u shovqin edi.",
                "'Was able to successfully complete' — само завершение и есть успех и доказательство способности: 'completed' говорит всё. Так же 'future advancement', 'ancient ruins which were old'. Если удаление оборота ничего не меняет — это был шум."
              ),
            ],
          },
          {
            h: P("Bitta tuzilma tuzog'i: 'the reason is that'", "Одна структурная ловушка: 'the reason is that'"),
            p: [
              P(
                "'The reason... was because' sabab belgisini ikkilantiradi — 'because' allaqachon 'shu sababdan' degani. Rasmiy inglizcha 'the reason... was THAT' ni talab qiladi; yoki yanada sodda: 'The project failed because...'.",
                "'The reason... was because' удваивает показатель причины — 'because' уже значит «по той причине, что». Формальный английский требует 'the reason... was THAT'; или ещё проще: 'The project failed because...'."
              ),
            ],
          },
        ],
        quiz: [
          P("'Postpone' va 'delay' — sinonimlar; 'later date in the future' ham takror — faqat mohiyat qoladi.", "'Postpone' и 'delay' — синонимы; 'later date in the future' тоже повтор — остаётся только суть."),
          P("'The reason was because' — takror; to'g'ri shakl: 'the reason was that'.", "'The reason was because' — избыточно; правильная форма: 'the reason was that'."),
          P("'Completely' — bo'sh kuchaytirgich; 'at the end of the race' marra chizig'ida yotadi — ikkalasi o'chadi.", "'Completely' — пустой усилитель; 'at the end of the race' уже в финишной черте — оба убираются."),
          P("'Due to the fact that' → 'because'; 'has the ability to' → 'can'.", "'Due to the fact that' → 'because'; 'has the ability to' → 'can'."),
          P("'Unexpected' va 'surprising' — sinonim juftlik; bittasi qoladi.", "'Unexpected' и 'surprising' — пара синонимов; остаётся одно."),
          P("'Help facilitate the improvement of' → 'help improve'; 'at the company' kontekstdan ma'lum.", "'Help facilitate the improvement of' → 'help improve'; 'at the company' ясно из контекста."),
          P("'Ancient' bilan 'old' takror; yoshni 'dated back thousands of years' ko'rsatib turibdi.", "'Ancient' и 'old' — повтор; возраст уже показывает 'dated back thousands of years'."),
          P("'In the event that' → 'if'; 'document and record' — takroriy juftlik.", "'In the event that' → 'if'; 'document and record' — избыточная пара."),
          P("'Was able to' va 'successfully' — 'completed' ichida allaqachon bor.", "'Was able to' и 'successfully' уже содержатся в 'completed'."),
          P("'Important and significant' — sinonim juftlik; 'future advancement' dagi 'future' ortiqcha.", "'Important and significant' — пара синонимов; 'future' в 'future advancement' лишнее."),
          P("'Several different', 'unique and one-of-a-kind', 'that are' — hammasi qisqaradi: 'several unique features'.", "'Several different', 'unique and one-of-a-kind', 'that are' — всё сжимается до 'several unique features'."),
          P("'Greatest' va 'most celebrated' ma'no jihatdan ustma-ust tushadi — 'greatest' yetarli.", "'Greatest' и 'most celebrated' пересекаются по смыслу — достаточно 'greatest'."),
        ],
      },
    },
  },
};
