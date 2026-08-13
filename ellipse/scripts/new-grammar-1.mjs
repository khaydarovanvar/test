// New authored grammar lessons for A1 and A2 (trilingual).
const P = (uz, ru) => ({ uz, ru });
export const NEW_GRAMMAR_1 = {
  A1: [
    {
      id: "g16",
      title: "Adverbs of frequency",
      lead: "Words like always, usually, often, sometimes and never tell us how often something happens. In this lesson you learn where to put them in a sentence.",
      leadTr: P(
        "always, usually, often, sometimes va never so'zlari ish-harakat qanchalik tez-tez bo'lishini bildiradi. Bu darsda ularni gapda qayerga qo'yishni o'rganasiz.",
        "Слова always, usually, often, sometimes и never показывают, как часто что-то происходит. В этом уроке вы узнаете, куда ставить их в предложении."
      ),
      situation: "Aziz: \"Do you eat plov every day?\" Lola: \"No! I usually eat plov on Thursdays. I never cook it at home — my mother always makes it.\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "From always to never",
          p: [
            "Adverbs of frequency make a scale: always (100%), usually, often, sometimes, rarely, never (0%).",
            "They answer the question \"How often?\"",
          ],
          ex: [
            "I always drink tea in the morning.",
            "She sometimes walks to school.",
            "We never watch TV at breakfast.",
          ],
        },
        {
          h: "Before the main verb",
          p: [
            "With normal verbs (eat, go, play…), the adverb goes BEFORE the verb: subject + adverb + verb.",
          ],
          ex: [
            "Aziz often plays football on Sundays.",
            "They usually go to the bazaar on Saturday.",
          ],
        },
        {
          h: "After the verb be",
          p: [
            "With am / is / are, the adverb goes AFTER the verb be, not before it.",
          ],
          ex: [
            "Lola is always happy in the morning.",
            "The buses are often late in Tashkent.",
            "I am never tired on holiday.",
          ],
        },
        {
          h: "How often…? and time phrases",
          p: [
            "To ask about frequency, use How often…? You can answer with phrases like every day, once a week, twice a month. These phrases go at the END of the sentence.",
          ],
          ex: [
            "How often do you visit your grandmother? — Once a week.",
            "I clean my room every day.",
          ],
        },
      ],
      tip: "Remember the rule in three words: BEFORE normal verbs, AFTER be. \"I often read\" but \"I am often busy\".",
      examples: [
        "My father always drinks green tea after lunch.",
        "We sometimes have dinner at my uncle's house.",
        "Lola is usually at home in the evening.",
        "How often do you play chess? — Twice a week.",
      ],
      mistakes: [
        { x: "I go always to school by bus.", v: "I always go to school by bus. — the adverb goes before a normal verb." },
        { x: "She always is late.", v: "She is always late. — with be, the adverb comes after it." },
        { x: "I every day eat breakfast.", v: "I eat breakfast every day. — time phrases like every day go at the end." },
      ],
      quiz: [
        {
          q: "Which word means 100% of the time?",
          o: ["sometimes", "always", "never", "often"],
          a: 1,
          e: "always = 100%, never = 0%.",
          d: "easy",
        },
        {
          q: "I ___ drink coffee at night. (0%)",
          o: ["always", "usually", "never", "often"],
          a: 2,
          e: "0% of the time = never.",
          d: "easy",
        },
        {
          q: "Choose the correct sentence.",
          o: [
            "She often visits her aunt.",
            "She visits often her aunt.",
            "Often she visits always her aunt.",
            "She visits her often aunt.",
          ],
          a: 0,
          e: "The adverb goes before a normal verb: often visits.",
          d: "easy",
        },
        {
          q: "Aziz ___ late for class. He is a good student.",
          o: ["is never", "never is", "never be", "is never be"],
          a: 0,
          e: "With be, the adverb comes after it: is never.",
          d: "medium",
        },
        {
          q: "Put the words in order: usually / we / at home / have lunch",
          o: [
            "We have usually lunch at home.",
            "Usually we have at home lunch.",
            "We usually have lunch at home.",
            "We have lunch usually at home.",
          ],
          a: 2,
          e: "Subject + adverb + verb: We usually have…",
          d: "medium",
        },
        {
          q: "___ do you go to the bazaar?",
          o: ["How much", "How often", "How many", "How long"],
          a: 1,
          e: "We ask about frequency with How often…?",
          d: "easy",
        },
        {
          q: "Choose the correct sentence.",
          o: [
            "I am sometimes tired after work.",
            "I sometimes am tired after work.",
            "I am tired sometimes am after work.",
            "Sometimes am I tired after work.",
          ],
          a: 0,
          e: "After be: am sometimes tired.",
          d: "medium",
        },
        {
          q: "They play football ___.",
          o: ["twice a week", "twice week", "two a week", "twice in week a"],
          a: 0,
          e: "The correct phrase is twice a week.",
          d: "medium",
        },
        {
          q: "Which sentence is correct?",
          o: [
            "My mother cooks every day plov.",
            "My mother every day cooks plov.",
            "Every day cooks my mother plov.",
            "My mother cooks plov every day.",
          ],
          a: 3,
          e: "Time phrases like every day go at the end of the sentence.",
          d: "hard",
        },
        {
          q: "Choose the sentence with the correct word order.",
          o: [
            "The metro always is busy, and I often take it.",
            "The metro is always busy, and I often take it.",
            "The metro is always busy, and I take often it.",
            "Always the metro is busy, and often I take.",
          ],
          a: 1,
          e: "After be (is always busy) but before a normal verb (often take).",
          d: "hard",
        },
      ],
      tr: {
        situation: P(
          "Aziz: \"Do you eat plov every day?\" Lola: \"No! I usually eat plov on Thursdays.\" — usually va never fe'ldan oldin, always ham shunday: my mother always makes it.",
          "Азиз спрашивает, ест ли Лола плов каждый день. В ответе usually, never и always стоят перед смысловым глаголом: I usually eat, I never cook, my mother always makes."
        ),
        tip: P(
          "Qoidani uch so'zda eslang: oddiy fe'ldan OLDIN, be dan KEYIN. \"I often read\", lekin \"I am often busy\".",
          "Запомните правило: ПЕРЕД обычным глаголом, ПОСЛЕ be. \"I often read\", но \"I am often busy\"."
        ),
        blocks: [
          {
            h: P("always dan never gacha", "От always до never"),
            p: [
              P(
                "Takrorlanish ravishlari shkala hosil qiladi: always (100%), usually, often, sometimes, rarely, never (0%).",
                "Наречия частотности образуют шкалу: always (100%), usually, often, sometimes, rarely, never (0%)."
              ),
              P(
                "Ular \"How often?\" (qanchalik tez-tez?) savoliga javob beradi.",
                "Они отвечают на вопрос \"How often?\" (как часто?)."
              ),
            ],
          },
          {
            h: P("Asosiy fe'ldan oldin", "Перед смысловым глаголом"),
            p: [
              P(
                "Oddiy fe'llar (eat, go, play…) bilan ravish fe'ldan OLDIN keladi: ega + ravish + fe'l.",
                "С обычными глаголами (eat, go, play…) наречие стоит ПЕРЕД глаголом: подлежащее + наречие + глагол."
              ),
            ],
          },
          {
            h: P("be fe'lidan keyin", "После глагола be"),
            p: [
              P(
                "am / is / are bilan ravish be dan KEYIN keladi, oldin emas.",
                "С am / is / are наречие стоит ПОСЛЕ be, а не перед ним."
              ),
            ],
          },
          {
            h: P("How often…? va vaqt iboralari", "How often…? и выражения времени"),
            p: [
              P(
                "Tezlik haqida so'rash uchun How often…? ishlatiladi. Javobda every day, once a week, twice a month kabi iboralar bo'lishi mumkin — ular gap OXIRIDA keladi.",
                "Чтобы спросить о частоте, используйте How often…? Отвечать можно фразами every day, once a week, twice a month — они ставятся в КОНЦЕ предложения."
              ),
            ],
          },
        ],
        quiz: [
          P("always = 100%, never = 0%.", "always = 100%, never = 0%."),
          P("0% — bu never.", "0% времени = never."),
          P("Ravish oddiy fe'ldan oldin: often visits.", "Наречие перед обычным глаголом: often visits."),
          P("be bilan ravish undan keyin keladi: is never.", "С be наречие идёт после него: is never."),
          P("Ega + ravish + fe'l: We usually have…", "Подлежащее + наречие + глагол: We usually have…"),
          P("Tezlikni How often…? bilan so'raymiz.", "О частоте спрашиваем с How often…?"),
          P("be dan keyin: am sometimes tired.", "После be: am sometimes tired."),
          P("To'g'ri ibora: twice a week.", "Правильная фраза: twice a week."),
          P("every day kabi iboralar gap oxirida keladi.", "Фразы типа every day ставятся в конце предложения."),
          P("be dan keyin (is always busy), oddiy fe'ldan oldin (often take).", "После be (is always busy), но перед обычным глаголом (often take)."),
        ],
      },
    },
    {
      id: "g17",
      title: "Object pronouns",
      lead: "Me, you, him, her, it, us and them are object pronouns. We use them after verbs and prepositions instead of repeating a noun.",
      leadTr: P(
        "Me, you, him, her, it, us va them — vositali (obyekt) olmoshlar. Ularni otni takrorlamaslik uchun fe'l va predloglardan keyin ishlatamiz.",
        "Me, you, him, her, it, us и them — объектные местоимения. Мы используем их после глаголов и предлогов, чтобы не повторять существительное."
      ),
      situation: "Lola: \"Do you know Aziz?\" Karim: \"Yes, I know him well. I play football with him every week. He often helps me with English.\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "Subject and object pairs",
          p: [
            "Every subject pronoun has an object partner: I → me, you → you, he → him, she → her, it → it, we → us, they → them.",
            "The subject does the action; the object receives it.",
          ],
          ex: [
            "I like her. She likes me.",
            "We help them. They help us.",
          ],
        },
        {
          h: "After the verb",
          p: [
            "The object pronoun comes after the verb: verb + object pronoun.",
          ],
          ex: [
            "Aziz has a new phone. He bought it yesterday.",
            "Where is Lola? I can't see her.",
            "Call me tonight, please.",
          ],
        },
        {
          h: "After prepositions",
          p: [
            "After words like with, for, to, at, about, we also use object pronouns, never subject pronouns.",
          ],
          ex: [
            "This present is for you.",
            "Come with us to the bazaar!",
            "She is talking about him.",
          ],
        },
        {
          h: "Don't repeat the noun",
          p: [
            "Use the pronoun instead of the noun — do not say the noun and the pronoun together in one place.",
          ],
          ex: [
            "I love plov. I eat it every Thursday.",
            "My grandparents live in Samarkand. We visit them in summer.",
          ],
        },
      ],
      tip: "After a preposition, always use the object form: \"with me\", \"for him\", \"to us\" — never \"with I\" or \"for he\".",
      examples: [
        "This is my sister. Do you know her?",
        "The teacher gave us a lot of homework.",
        "I like these shoes. Can I try them on?",
        "Wait for me at the metro station!",
      ],
      mistakes: [
        { x: "I saw she at the market.", v: "I saw her at the market. — after a verb we need the object form." },
        { x: "Come with I.", v: "Come with me. — after a preposition, use the object pronoun." },
        { x: "I like Aziz. I like he very much.", v: "I like him very much. — he is a subject form; after a verb use him." },
      ],
      quiz: [
        {
          q: "What is the object pronoun for \"he\"?",
          o: ["his", "him", "he", "her"],
          a: 1,
          e: "he → him. (his is possessive.)",
          d: "easy",
        },
        {
          q: "I have a dog. I walk ___ every morning.",
          o: ["he", "him", "it", "its"],
          a: 2,
          e: "A dog is it → object form it.",
          d: "easy",
        },
        {
          q: "Where is Lola? I want to talk to ___.",
          o: ["she", "hers", "him", "her"],
          a: 3,
          e: "After the preposition to → her.",
          d: "easy",
        },
        {
          q: "My parents are at home. I am cooking dinner for ___.",
          o: ["them", "they", "their", "us"],
          a: 0,
          e: "they → them after the preposition for.",
          d: "easy",
        },
        {
          q: "Can you help ___? We don't understand this exercise.",
          o: ["we", "our", "us", "they"],
          a: 2,
          e: "we → us after the verb help.",
          d: "medium",
        },
        {
          q: "Choose the correct sentence.",
          o: [
            "I saw they at the bazaar.",
            "I saw them at the bazaar.",
            "I saw their at the bazaar.",
            "I saw themselves at the bazaar.",
          ],
          a: 1,
          e: "After the verb saw → object form them.",
          d: "medium",
        },
        {
          q: "This is a photo of my brother. Do you know ___?",
          o: ["he", "his", "her", "him"],
          a: 3,
          e: "my brother = he → object form him.",
          d: "medium",
        },
        {
          q: "Lola and I are going to the park. Come with ___!",
          o: ["we", "us", "they", "I"],
          a: 1,
          e: "Lola and I = we → with us.",
          d: "medium",
        },
        {
          q: "Which sentence is correct?",
          o: [
            "Give the book to she.",
            "Give the book to hers.",
            "Give her the book.",
            "Give she the book.",
          ],
          a: 2,
          e: "Give + object pronoun + thing: Give her the book.",
          d: "hard",
        },
        {
          q: "I bought apples at the bazaar and gave ___ to my neighbour.",
          o: ["they", "it", "their", "them"],
          a: 3,
          e: "apples (plural) → them.",
          d: "hard",
        },
      ],
      tr: {
        situation: P(
          "\"Do you know Aziz?\" \"Yes, I know him well.\" — Aziz o'rniga him ishlatiladi: fe'ldan keyin (know him) va predlogdan keyin (with him).",
          "«Ты знаешь Азиза?» «Да, я хорошо его знаю.» — Вместо имени используется him: после глагола (know him) и после предлога (with him)."
        ),
        tip: P(
          "Predlogdan keyin doim obyekt shaklini ishlating: \"with me\", \"for him\", \"to us\" — hech qachon \"with I\" yoki \"for he\" emas.",
          "После предлога всегда объектная форма: \"with me\", \"for him\", \"to us\" — никогда \"with I\" или \"for he\"."
        ),
        blocks: [
          {
            h: P("Ega va obyekt juftliklari", "Пары: подлежащее и дополнение"),
            p: [
              P(
                "Har bir ega olmoshining obyekt jufti bor: I → me, you → you, he → him, she → her, it → it, we → us, they → them.",
                "У каждого личного местоимения есть объектная пара: I → me, you → you, he → him, she → her, it → it, we → us, they → them."
              ),
              P(
                "Ega ish-harakatni bajaradi; obyekt uni qabul qiladi.",
                "Подлежащее выполняет действие; дополнение его получает."
              ),
            ],
          },
          {
            h: P("Fe'ldan keyin", "После глагола"),
            p: [
              P(
                "Obyekt olmoshi fe'ldan keyin keladi: fe'l + obyekt olmoshi.",
                "Объектное местоимение стоит после глагола: глагол + объектное местоимение."
              ),
            ],
          },
          {
            h: P("Predloglardan keyin", "После предлогов"),
            p: [
              P(
                "with, for, to, at, about kabi so'zlardan keyin ham obyekt olmoshlari ishlatiladi, ega olmoshlari emas.",
                "После слов with, for, to, at, about тоже используются объектные местоимения, а не именительные."
              ),
            ],
          },
          {
            h: P("Otni takrorlamang", "Не повторяйте существительное"),
            p: [
              P(
                "Ot o'rniga olmosh ishlating — bitta joyda otni ham, olmoshni ham birga aytmang.",
                "Используйте местоимение вместо существительного — не называйте их вместе в одном месте."
              ),
            ],
          },
        ],
        quiz: [
          P("he → him. (his — egalik shakli.)", "he → him. (his — притяжательная форма.)"),
          P("Hayvon it deyiladi → obyekt shakli it.", "Собака — это it → объектная форма it."),
          P("to predlogidan keyin → her.", "После предлога to → her."),
          P("they → them, for predlogidan keyin.", "they → them после предлога for."),
          P("help fe'lidan keyin we → us.", "После глагола help: we → us."),
          P("saw fe'lidan keyin → obyekt shakli them.", "После глагола saw → объектная форма them."),
          P("my brother = he → obyekt shakli him.", "my brother = he → объектная форма him."),
          P("Lola and I = we → with us.", "Lola and I = we → with us."),
          P("Give + obyekt olmoshi + narsa: Give her the book.", "Give + объектное местоимение + предмет: Give her the book."),
          P("apples (ko'plik) → them.", "apples (мн. число) → them."),
        ],
      },
    },
    {
      id: "g18",
      title: "Possessive 's & whose",
      lead: "To say that something belongs to a person, add 's to their name: Aziz's car. To ask who the owner is, use whose.",
      leadTr: P(
        "Biror narsa kimgadir tegishli ekanini aytish uchun ismga 's qo'shiladi: Aziz's car. Egasi kimligini so'rash uchun whose ishlatiladi.",
        "Чтобы сказать, что вещь принадлежит человеку, добавьте 's к имени: Aziz's car. Чтобы спросить, чья это вещь, используйте whose."
      ),
      situation: "Teacher: \"Whose bag is this?\" Lola: \"It's Aziz's bag. And this phone is my sister's — she left it here.\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "One owner: name + 's",
          p: [
            "For one person or animal, add 's after the name or noun: Aziz's, my mother's, the cat's.",
          ],
          ex: [
            "This is Lola's book.",
            "My father's car is white.",
            "The cat's bowl is empty.",
          ],
        },
        {
          h: "Plural owners: s'",
          p: [
            "If a plural noun already ends in -s, add only an apostrophe after it: my parents' house.",
            "Irregular plurals without -s take 's: the children's room.",
          ],
          ex: [
            "My grandparents' garden is beautiful.",
            "The children's toys are on the floor.",
          ],
        },
        {
          h: "Asking with whose",
          p: [
            "Whose asks about the owner: Whose + noun + is/are…? You can answer with a name + 's or a possessive like mine, hers, theirs.",
          ],
          ex: [
            "Whose phone is this? — It's Karim's.",
            "Whose shoes are these? — They're mine.",
          ],
        },
        {
          h: "'s: possession or is?",
          p: [
            "'s can also be the short form of is: Aziz's tired = Aziz is tired. Look at the next word: if a noun follows, it is usually possession; if an adjective or -ing verb follows, it is is.",
          ],
          ex: [
            "Aziz's bike is new. ('s = possession)",
            "Aziz's riding his bike now. ('s = is)",
          ],
        },
      ],
      tip: "Word order is different from Uzbek: in English the OWNER comes first — \"Aziz's car\", not \"car of Aziz's\". For things, use of: \"the door of the house\".",
      examples: [
        "Lola's brother works in Samarkand.",
        "This is my teacher's desk.",
        "Whose keys are on the table? — They're my father's.",
        "The students' books are in the classroom.",
      ],
      mistakes: [
        { x: "This is the car of Aziz.", v: "This is Aziz's car. — for people, use name + 's, not of." },
        { x: "My parent's are doctors.", v: "My parents are doctors. — no apostrophe in a simple plural; 's is only for possession." },
        { x: "Who's bag is this?", v: "Whose bag is this? — whose asks about the owner; who's = who is." },
      ],
      quiz: [
        {
          q: "Choose the correct form: This is ___ phone.",
          o: ["Lola", "Lola's", "Lolas", "Lola is"],
          a: 1,
          e: "One owner → name + 's: Lola's phone.",
          d: "easy",
        },
        {
          q: "___ book is this? — It's mine.",
          o: ["Who", "Whose", "Who's", "Which"],
          a: 1,
          e: "Whose asks about the owner.",
          d: "easy",
        },
        {
          q: "My ___ house is near the bazaar. (two grandparents)",
          o: ["grandparent's", "grandparents", "grandparents's", "grandparents'"],
          a: 3,
          e: "Plural noun ending in -s → only an apostrophe: grandparents'.",
          d: "medium",
        },
        {
          q: "The ___ room is upstairs. (the children)",
          o: ["children's", "childrens'", "children", "childrens"],
          a: 0,
          e: "Irregular plural without -s → children's.",
          d: "medium",
        },
        {
          q: "Whose pen is this? — It's ___.",
          o: ["Karim", "of Karim", "Karim's", "the Karim"],
          a: 2,
          e: "Answer with name + 's: It's Karim's.",
          d: "easy",
        },
        {
          q: "Which sentence uses 's for possession?",
          o: [
            "Aziz's very tall.",
            "Aziz's playing football.",
            "Aziz's jacket is black.",
            "Aziz's at school now.",
          ],
          a: 2,
          e: "A noun (jacket) follows, so 's shows possession; the others mean Aziz is.",
          d: "hard",
        },
        {
          q: "Choose the correct sentence.",
          o: [
            "This is the bag of my sister.",
            "This is my sister's bag.",
            "This is my sisters bag.",
            "This is my sister bag's.",
          ],
          a: 1,
          e: "For a person: my sister's bag, owner first.",
          d: "medium",
        },
        {
          q: "The door ___ is broken.",
          o: ["of the house", "the house's", "of house's", "houses"],
          a: 0,
          e: "For things we normally use of: the door of the house.",
          d: "hard",
        },
        {
          q: "___ shoes are these? — They're my brother's.",
          o: ["Who's", "Whose", "Whom", "What"],
          a: 1,
          e: "Whose + noun asks about the owner; who's = who is.",
          d: "medium",
        },
        {
          q: "Choose the correct sentence.",
          o: [
            "My two brothers' names are Aziz and Karim.",
            "My two brother's names are Aziz and Karim.",
            "My two brothers names' are Aziz and Karim.",
            "My two brothers's names are Aziz and Karim.",
          ],
          a: 0,
          e: "Two brothers = plural in -s → brothers'.",
          d: "hard",
        },
      ],
      tr: {
        situation: P(
          "O'qituvchi: \"Whose bag is this?\" (Bu kimning sumkasi?) Lola: \"It's Aziz's bag.\" — Egasi ism + 's bilan ko'rsatiladi: Aziz's, my sister's.",
          "Учитель: \"Whose bag is this?\" (Чья это сумка?) Лола: \"It's Aziz's bag.\" — Владелец обозначается именем + 's: Aziz's, my sister's."
        ),
        tip: P(
          "So'z tartibi o'zbekchaga o'xshaydi: EGASI oldin keladi — \"Aziz's car\" (Azizning mashinasi). Narsalar uchun of ishlatiladi: \"the door of the house\".",
          "В английском ВЛАДЕЛЕЦ идёт первым: \"Aziz's car\", а не \"car of Aziz's\". Для предметов используйте of: \"the door of the house\"."
        ),
        blocks: [
          {
            h: P("Bitta egasi: ism + 's", "Один владелец: имя + 's"),
            p: [
              P(
                "Bitta odam yoki hayvon uchun ism yoki otdan keyin 's qo'shiladi: Aziz's, my mother's, the cat's.",
                "Для одного человека или животного добавьте 's после имени или существительного: Aziz's, my mother's, the cat's."
              ),
            ],
          },
          {
            h: P("Ko'plikdagi egalar: s'", "Владельцы во множественном числе: s'"),
            p: [
              P(
                "Ko'plikdagi ot -s bilan tugasa, faqat apostrof qo'shiladi: my parents' house.",
                "Если существительное во множественном числе уже оканчивается на -s, добавьте только апостроф: my parents' house."
              ),
              P(
                "-s siz tuzilgan noodatiy ko'pliklar 's oladi: the children's room.",
                "Нерегулярные формы без -s получают 's: the children's room."
              ),
            ],
          },
          {
            h: P("whose bilan so'rash", "Вопрос с whose"),
            p: [
              P(
                "Whose egasini so'raydi: Whose + ot + is/are…? Javobda ism + 's yoki mine, hers, theirs kabi egalik olmoshi bo'ladi.",
                "Whose спрашивает о владельце: Whose + существительное + is/are…? Отвечают именем + 's или формами mine, hers, theirs."
              ),
            ],
          },
          {
            h: P("'s: egalikmi yoki is?", "'s: принадлежность или is?"),
            p: [
              P(
                "'s shuningdek is ning qisqa shakli bo'lishi mumkin: Aziz's tired = Aziz is tired. Keyingi so'zga qarang: ot kelsa — odatda egalik; sifat yoki -ing fe'l kelsa — bu is.",
                "'s может быть и краткой формой is: Aziz's tired = Aziz is tired. Смотрите на следующее слово: существительное — обычно принадлежность; прилагательное или глагол на -ing — это is."
              ),
            ],
          },
        ],
        quiz: [
          P("Bitta egasi → ism + 's: Lola's phone.", "Один владелец → имя + 's: Lola's phone."),
          P("Whose egasini so'raydi.", "Whose спрашивает о владельце."),
          P("-s bilan tugagan ko'plik → faqat apostrof: grandparents'.", "Множественное на -s → только апостроф: grandparents'."),
          P("-s siz noodatiy ko'plik → children's.", "Нерегулярное множественное без -s → children's."),
          P("Javob: ism + 's — It's Karim's.", "Ответ: имя + 's — It's Karim's."),
          P("Keyin ot (jacket) kelgan, demak 's — egalik; qolganlari Aziz is degani.", "Дальше идёт существительное (jacket), значит 's — принадлежность; остальные значат Aziz is."),
          P("Odam uchun: my sister's bag — egasi oldin.", "Для человека: my sister's bag — владелец первым."),
          P("Narsalar uchun odatda of: the door of the house.", "Для предметов обычно of: the door of the house."),
          P("Whose + ot egasini so'raydi; who's = who is.", "Whose + существительное спрашивает о владельце; who's = who is."),
          P("Two brothers — -s li ko'plik → brothers'.", "Two brothers — множественное на -s → brothers'."),
        ],
      },
    },
  ],
  A2: [
    {
      id: "g16",
      title: "Present perfect with just, already & yet",
      lead: "Just, already and yet make the present perfect more exact: just = a very short time ago, already = sooner than expected, yet = until now (in questions and negatives).",
      leadTr: P(
        "Just, already va yet present perfect ni aniqroq qiladi: just = hozirgina, already = kutilganidan erta, yet = hozirgacha (savol va inkorlarda).",
        "Just, already и yet уточняют present perfect: just = только что, already = раньше, чем ожидалось, yet = ещё / уже (в вопросах и отрицаниях)."
      ),
      situation: "Lola: \"Have you finished your homework yet?\" Aziz: \"Yes, I've already finished it. And I've just made some tea — do you want a cup?\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "just — a moment ago",
          p: [
            "Use just for something that happened a very short time ago. It goes between have/has and the past participle.",
          ],
          ex: [
            "I've just seen Karim at the metro.",
            "The bus has just left — we're too late!",
          ],
        },
        {
          h: "already — sooner than expected",
          p: [
            "Use already in positive sentences when something happened earlier than expected. It also goes between have/has and the past participle.",
          ],
          ex: [
            "She's already bought the tickets.",
            "It's only 10 a.m., but I've already drunk three cups of tea.",
          ],
        },
        {
          h: "yet — in questions and negatives",
          p: [
            "Use yet in questions and negative sentences about something we expect to happen. It goes at the END of the sentence.",
          ],
          ex: [
            "Have you tried Lola's plov yet?",
            "I haven't called my grandmother yet.",
          ],
        },
        {
          h: "Putting it all together",
          p: [
            "just and already go in the middle (have + just/already + participle); yet goes at the end of questions and negatives.",
            "A typical mini-conversation: \"Have you done it yet?\" \"Yes, I've already done it.\" / \"No, not yet.\"",
          ],
          ex: [
            "\"Has the film started yet?\" \"Yes, it's just started.\"",
            "\"Have you packed yet?\" \"No, I haven't packed yet.\"",
          ],
        },
      ],
      tip: "yet almost always stands at the end of the sentence, and only in questions and negatives. If the sentence is positive, you probably need already or just instead.",
      examples: [
        "I've just come back from the bazaar.",
        "We've already eaten, thanks.",
        "Aziz hasn't found a job yet.",
        "Have you seen the new film yet?",
      ],
      mistakes: [
        { x: "I have finished just my work.", v: "I have just finished my work. — just goes between have and the participle." },
        { x: "I haven't eaten already.", v: "I haven't eaten yet. — in negatives use yet, not already." },
        { x: "Have you yet washed the dishes?", v: "Have you washed the dishes yet? — yet goes at the end." },
      ],
      quiz: [
        {
          q: "The train has ___ left. It left one minute ago!",
          o: ["yet", "just", "never", "since"],
          a: 1,
          e: "A very short time ago → just.",
          d: "easy",
        },
        {
          q: "Have you finished the report ___?",
          o: ["already yet", "just", "yet", "still"],
          a: 2,
          e: "In questions, yet goes at the end.",
          d: "easy",
        },
        {
          q: "I've ___ seen this film twice, so let's watch another one.",
          o: ["yet", "just now", "already", "ever yet"],
          a: 2,
          e: "Positive sentence, earlier than expected → already.",
          d: "easy",
        },
        {
          q: "She hasn't answered my message ___.",
          o: ["already", "just", "now", "yet"],
          a: 3,
          e: "Negative sentence → yet at the end.",
          d: "easy",
        },
        {
          q: "Choose the correct sentence.",
          o: [
            "I've just made some coffee.",
            "I've made just some coffee.",
            "Just I've made some coffee.",
            "I've made some coffee just.",
          ],
          a: 0,
          e: "just goes between have and the past participle.",
          d: "medium",
        },
        {
          q: "\"Is Lola here?\" \"No, she's ___ left.\"",
          o: ["yet", "just", "ever", "for"],
          a: 1,
          e: "She left a moment ago → just.",
          d: "medium",
        },
        {
          q: "Choose the correct sentence.",
          o: [
            "Have you already been to Bukhara yet?",
            "Haven't you been yet already to Bukhara?",
            "Have you been to Bukhara yet?",
            "Have you been yet to Bukhara?",
          ],
          a: 2,
          e: "Question + yet at the end; don't mix already and yet.",
          d: "medium",
        },
        {
          q: "\"Have you done the shopping?\" \"No, not ___.\"",
          o: ["already", "just", "yet", "ever"],
          a: 2,
          e: "The short answer is \"Not yet.\"",
          d: "medium",
        },
        {
          q: "It's only Tuesday, but they ___ finished the project.",
          o: ["haven't yet", "have already", "have yet", "already have been"],
          a: 1,
          e: "Sooner than expected, positive → have already finished.",
          d: "hard",
        },
        {
          q: "Which sentence is wrong?",
          o: [
            "I've just spoken to him.",
            "We haven't decided yet.",
            "She has already left.",
            "They have finished already yet.",
          ],
          a: 3,
          e: "already and yet cannot be used together like this.",
          d: "hard",
        },
      ],
      tr: {
        situation: P(
          "\"Have you finished your homework yet?\" \"Yes, I've already finished it. And I've just made some tea.\" — yet savolda oxirida, already va just have bilan fe'l orasida keladi.",
          "«Ты уже закончил домашнее задание?» «Да, уже закончил. И я только что заварил чай.» — yet стоит в конце вопроса, already и just — между have и глаголом."
        ),
        tip: P(
          "yet deyarli har doim gap oxirida turadi va faqat savol hamda inkorlarda ishlatiladi. Gap tasdiq bo'lsa, sizga already yoki just kerak.",
          "yet почти всегда стоит в конце предложения и только в вопросах и отрицаниях. В утвердительном предложении нужны already или just."
        ),
        blocks: [
          {
            h: P("just — hozirgina", "just — только что"),
            p: [
              P(
                "Juda yaqinda bo'lgan ish uchun just ishlating. U have/has va past participle orasida keladi.",
                "Используйте just для действия, которое произошло совсем недавно. Оно ставится между have/has и причастием."
              ),
            ],
          },
          {
            h: P("already — kutilganidan erta", "already — раньше, чем ожидалось"),
            p: [
              P(
                "Biror ish kutilganidan erta bo'lganida tasdiq gaplarda already ishlating. U ham have/has va past participle orasida keladi.",
                "Используйте already в утвердительных предложениях, когда что-то произошло раньше, чем ожидалось. Оно тоже стоит между have/has и причастием."
              ),
            ],
          },
          {
            h: P("yet — savol va inkorlarda", "yet — в вопросах и отрицаниях"),
            p: [
              P(
                "Bo'lishini kutayotgan ish haqidagi savol va inkor gaplarda yet ishlating. U gap OXIRIDA keladi.",
                "Используйте yet в вопросах и отрицаниях о том, что мы ожидаем. Оно ставится в КОНЦЕ предложения."
              ),
            ],
          },
          {
            h: P("Hammasini birlashtiramiz", "Собираем всё вместе"),
            p: [
              P(
                "just va already o'rtada keladi (have + just/already + participle); yet savol va inkorlarning oxirida turadi.",
                "just и already стоят в середине (have + just/already + причастие); yet — в конце вопросов и отрицаний."
              ),
              P(
                "Odatiy mini-suhbat: \"Have you done it yet?\" \"Yes, I've already done it.\" / \"No, not yet.\"",
                "Типичный мини-диалог: \"Have you done it yet?\" \"Yes, I've already done it.\" / \"No, not yet.\""
              ),
            ],
          },
        ],
        quiz: [
          P("Juda yaqinda bo'ldi → just.", "Совсем недавно → just."),
          P("Savollarda yet oxirida keladi.", "В вопросах yet ставится в конце."),
          P("Tasdiq gap, kutilganidan erta → already.", "Утверждение, раньше ожидаемого → already."),
          P("Inkor gap → oxirida yet.", "Отрицание → yet в конце."),
          P("just have va past participle orasida keladi.", "just стоит между have и причастием."),
          P("Bir lahza oldin ketdi → just.", "Ушла минуту назад → just."),
          P("Savol + oxirida yet; already va yet ni aralashtirmang.", "Вопрос + yet в конце; не смешивайте already и yet."),
          P("Qisqa javob: \"Not yet.\"", "Краткий ответ: \"Not yet.\""),
          P("Kutilganidan erta, tasdiq → have already finished.", "Раньше ожидаемого, утверждение → have already finished."),
          P("already va yet bunday birga ishlatilmaydi.", "already и yet так вместе не используются."),
        ],
      },
    },
    {
      id: "g17",
      title: "Phrasal verbs: basics",
      lead: "A phrasal verb is a verb + a small word (up, on, off, after…) with a new meaning: get up, turn on, look after. This lesson shows you the most useful ones and how to use them.",
      leadTr: P(
        "Phrasal verb — bu fe'l + kichik so'z (up, on, off, after…) va yangi ma'no: get up, turn on, look after. Bu darsda eng kerakli phrasal verb lar va ulardan foydalanishni ko'rasiz.",
        "Фразовый глагол — это глагол + частица (up, on, off, after…) с новым значением: get up, turn on, look after. В уроке — самые полезные из них и как их употреблять."
      ),
      situation: "Mother: \"Aziz, wake up! Get up and turn off your alarm!\" Aziz: \"Five more minutes… OK, OK, I'm getting up. Can you turn on the light, please?\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "What is a phrasal verb?",
          p: [
            "A phrasal verb = verb + particle (up, on, off, out, after…). Together they often have a meaning you cannot guess from the two words alone.",
          ],
          ex: [
            "I get up at 6 o'clock. (= leave my bed)",
            "The plane took off on time. (= left the ground)",
          ],
        },
        {
          h: "Everyday phrasal verbs",
          p: [
            "Learn these common ones first: wake up, get up, turn on/off, put on, take off (clothes), go out, come back, look for.",
          ],
          ex: [
            "Put on your coat — it's cold outside.",
            "I'm looking for my keys. Have you seen them?",
            "We went out for dinner and came back at ten.",
          ],
        },
        {
          h: "Separable: turn it on",
          p: [
            "With many phrasal verbs, a noun can go after the particle or between: turn on the TV / turn the TV on.",
            "But a pronoun (it, them, him…) MUST go in the middle: turn it on — never \"turn on it\".",
          ],
          ex: [
            "Take off your shoes. = Take your shoes off.",
            "These are new words. Write them down, please.",
          ],
        },
        {
          h: "Inseparable: look after",
          p: [
            "Some phrasal verbs never split. The noun or pronoun always comes after the particle: look after, look for, get on/off (a bus).",
          ],
          ex: [
            "Lola looks after her little brother on Sundays.",
            "We got on the bus near the bazaar.",
          ],
        },
      ],
      tip: "When you learn a new phrasal verb, learn it in a full sentence — \"I turned off the light\" — not as a lonely pair of words. The sentence shows you where the object goes.",
      examples: [
        "I wake up at seven and get up at ten past seven.",
        "Can you turn the music down? The baby is sleeping.",
        "He took off his shoes at the door.",
        "She is looking for a new job in Tashkent.",
      ],
      mistakes: [
        { x: "Please turn on it.", v: "Please turn it on. — a pronoun goes between the verb and the particle." },
        { x: "She looks her grandmother after.", v: "She looks after her grandmother. — look after never splits." },
        { x: "I look forward my holiday.", v: "I'm looking for / I look after… — check the particle: every phrasal verb has its own." },
      ],
      quiz: [
        {
          q: "I ___ at 6:30 every morning, but I stay in bed until 7.",
          o: ["get up", "wake up", "take off", "turn on"],
          a: 1,
          e: "wake up = stop sleeping; get up = leave the bed.",
          d: "easy",
        },
        {
          q: "It's dark in here. Can you ___ the light?",
          o: ["turn off", "take off", "turn on", "put on"],
          a: 2,
          e: "turn on = start a light or machine.",
          d: "easy",
        },
        {
          q: "It's cold. ___ your jacket.",
          o: ["Take off", "Put on", "Turn on", "Look after"],
          a: 1,
          e: "put on = start wearing clothes.",
          d: "easy",
        },
        {
          q: "The TV is too loud. Please turn ___.",
          o: ["it off", "off it", "off", "it of"],
          a: 0,
          e: "A pronoun goes in the middle: turn it off.",
          d: "medium",
        },
        {
          q: "Who ___ your children when you are at work?",
          o: ["looks for", "looks after", "looks up", "looks at"],
          a: 1,
          e: "look after = take care of someone.",
          d: "medium",
        },
        {
          q: "I can't find my phone. I've been ___ it all morning.",
          o: ["looking after", "looking for", "taking off", "putting on"],
          a: 1,
          e: "look for = try to find.",
          d: "easy",
        },
        {
          q: "Choose the correct sentence.",
          o: [
            "She took off them.",
            "She took them off.",
            "She took off they.",
            "She them took off.",
          ],
          a: 1,
          e: "Pronoun between verb and particle: took them off.",
          d: "medium",
        },
        {
          q: "We ___ the bus at the last stop.",
          o: ["got off", "took off", "turned off", "put off"],
          a: 0,
          e: "get off a bus/train = leave it.",
          d: "medium",
        },
        {
          q: "Which phrasal verb CANNOT be separated?",
          o: ["turn on", "put on", "look after", "write down"],
          a: 2,
          e: "look after is inseparable: look after him, never \"look him after\".",
          d: "hard",
        },
        {
          q: "Choose the correct sentence.",
          o: [
            "Please write down them in your notebook.",
            "Please write them down in your notebook.",
            "Please write down they in your notebook.",
            "Please them write down in your notebook.",
          ],
          a: 1,
          e: "write down is separable, and a pronoun must go in the middle.",
          d: "hard",
        },
      ],
      tr: {
        situation: P(
          "Ona: \"Aziz, wake up! Get up and turn off your alarm!\" — Bir sahnada to'rtta phrasal verb: wake up (uyg'onmoq), get up (turmoq), turn off (o'chirmoq), turn on (yoqmoq).",
          "Мама: \"Aziz, wake up! Get up and turn off your alarm!\" — В одной сцене четыре фразовых глагола: wake up (проснуться), get up (встать), turn off (выключить), turn on (включить)."
        ),
        tip: P(
          "Yangi phrasal verb ni to'liq gap ichida yodlang — \"I turned off the light\" — ikki so'zni alohida emas. Gap obyekt qayerga qo'yilishini ko'rsatadi.",
          "Учите новый фразовый глагол в полном предложении — \"I turned off the light\", а не как пару слов. Предложение показывает, куда ставить дополнение."
        ),
        blocks: [
          {
            h: P("Phrasal verb nima?", "Что такое фразовый глагол?"),
            p: [
              P(
                "Phrasal verb = fe'l + yuklama (up, on, off, out, after…). Birgalikda ular ko'pincha ikki so'zdan taxmin qilib bo'lmaydigan yangi ma'no beradi.",
                "Фразовый глагол = глагол + частица (up, on, off, out, after…). Вместе они часто имеют значение, которое нельзя угадать по отдельным словам."
              ),
            ],
          },
          {
            h: P("Kundalik phrasal verb lar", "Повседневные фразовые глаголы"),
            p: [
              P(
                "Avvalo shu keng tarqalganlarini o'rganing: wake up, get up, turn on/off, put on, take off (kiyim), go out, come back, look for.",
                "Сначала выучите самые частые: wake up, get up, turn on/off, put on, take off (одежда), go out, come back, look for."
              ),
            ],
          },
          {
            h: P("Ajraladigan: turn it on", "Разделяемые: turn it on"),
            p: [
              P(
                "Ko'p phrasal verb larda ot yuklamadan keyin ham, o'rtada ham kela oladi: turn on the TV / turn the TV on.",
                "У многих фразовых глаголов существительное может стоять после частицы или между: turn on the TV / turn the TV on."
              ),
              P(
                "Lekin olmosh (it, them, him…) ALBATTA o'rtada keladi: turn it on — hech qachon \"turn on it\" emas.",
                "Но местоимение (it, them, him…) ОБЯЗАТЕЛЬНО стоит в середине: turn it on — никогда \"turn on it\"."
              ),
            ],
          },
          {
            h: P("Ajralmaydigan: look after", "Неразделяемые: look after"),
            p: [
              P(
                "Ba'zi phrasal verb lar hech qachon ajralmaydi. Ot yoki olmosh doim yuklamadan keyin keladi: look after, look for, get on/off (avtobus).",
                "Некоторые фразовые глаголы никогда не разделяются. Существительное или местоимение всегда идёт после частицы: look after, look for, get on/off (автобус)."
              ),
            ],
          },
        ],
        quiz: [
          P("wake up = uyg'onmoq; get up = o'rindan turmoq.", "wake up = проснуться; get up = встать с кровати."),
          P("turn on = chiroq yoki asbobni yoqmoq.", "turn on = включить свет или прибор."),
          P("put on = kiyim kiymoq.", "put on = надеть одежду."),
          P("Olmosh o'rtada keladi: turn it off.", "Местоимение стоит в середине: turn it off."),
          P("look after = g'amxo'rlik qilmoq.", "look after = заботиться о ком-то."),
          P("look for = qidirmoq.", "look for = искать."),
          P("Olmosh fe'l va yuklama orasida: took them off.", "Местоимение между глаголом и частицей: took them off."),
          P("get off (avtobus/poyezd) = undan tushmoq.", "get off (автобус/поезд) = выйти из него."),
          P("look after ajralmaydi: look after him, hech qachon \"look him after\" emas.", "look after не разделяется: look after him, никогда \"look him after\"."),
          P("write down ajraladi, olmosh esa o'rtada bo'lishi shart.", "write down разделяется, а местоимение обязано стоять в середине."),
        ],
      },
    },
    {
      id: "g18",
      title: "Infinitive of purpose",
      lead: "To explain WHY we do something, we use to + verb: \"I went to the bazaar to buy fruit.\" This is called the infinitive of purpose.",
      leadTr: P(
        "Nima UCHUN qilishimizni tushuntirish uchun to + fe'l ishlatamiz: \"I went to the bazaar to buy fruit.\" Bu infinitive of purpose (maqsad infinitivi) deyiladi.",
        "Чтобы объяснить, ЗАЧЕМ мы что-то делаем, используем to + глагол: \"I went to the bazaar to buy fruit.\" Это называется инфинитивом цели."
      ),
      situation: "Karim: \"Why are you learning English?\" Lola: \"To get a better job. And I'm saving money to travel to London one day.\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "to + verb answers \"Why?\"",
          p: [
            "Use to + the base verb to give a reason or purpose. It can answer a Why…? question alone.",
          ],
          ex: [
            "I went to the market to buy vegetables.",
            "She called me to ask about the homework.",
            "\"Why did you go to the bank?\" \"To open an account.\"",
          ],
        },
        {
          h: "Not \"for + verb\"",
          p: [
            "In many languages purpose is said with \"for\", but in English we do NOT say \"for buy\" or \"for to buy\". Use to + verb.",
          ],
          ex: [
            "I came here to see you. (NOT: for see you)",
            "He is studying hard to pass the exam.",
          ],
        },
        {
          h: "for + noun",
          p: [
            "for is correct before a NOUN: for bread, for a walk, for lunch. Compare: to buy bread (verb) / for bread (noun).",
          ],
          ex: [
            "I went out for bread. = I went out to buy bread.",
            "We stopped at a choyxona for tea.",
          ],
        },
        {
          h: "in order to — more formal",
          p: [
            "In order to + verb means the same as to + verb but sounds more formal. In everyday speech, simple to is more common.",
          ],
          ex: [
            "In order to improve your English, practise every day.",
            "He moved to Tashkent in order to find work.",
          ],
        },
      ],
      tip: "If the next word is a verb, use to: \"to buy milk\". If the next word is a noun, use for: \"for milk\". Never \"for buy milk\".",
      examples: [
        "Aziz went online to check the football results.",
        "I'm learning English to talk with tourists at the bazaar.",
        "She got up early to catch the first train to Samarkand.",
        "We stopped for lunch on the way home.",
      ],
      mistakes: [
        { x: "I went to the shop for buy milk.", v: "I went to the shop to buy milk. — before a verb, use to, not for." },
        { x: "She is saving money for to travel.", v: "She is saving money to travel. — never combine for and to before a verb." },
        { x: "I went out to bread.", v: "I went out for bread. — before a noun, use for." },
      ],
      quiz: [
        {
          q: "I went to the post office ___ some stamps.",
          o: ["for buy", "to buy", "for to buy", "buying"],
          a: 1,
          e: "Purpose before a verb → to buy.",
          d: "easy",
        },
        {
          q: "\"Why did you call Aziz?\" \"___ him to the party.\"",
          o: ["For invite", "To inviting", "To invite", "For inviting him"],
          a: 2,
          e: "to + base verb answers Why…?",
          d: "easy",
        },
        {
          q: "She went to the kitchen ___ some tea.",
          o: ["to make", "for make", "make", "to making"],
          a: 0,
          e: "to + base verb: to make.",
          d: "easy",
        },
        {
          q: "We went to the choyxona ___ lunch.",
          o: ["to", "for to", "to have for", "for"],
          a: 3,
          e: "Before a noun (lunch) → for.",
          d: "medium",
        },
        {
          q: "Choose the correct sentence.",
          o: [
            "I'm saving money for to buy a car.",
            "I'm saving money to buy a car.",
            "I'm saving money for buy a car.",
            "I'm saving money buy a car.",
          ],
          a: 1,
          e: "Purpose = to + verb, never for to / for + verb.",
          d: "medium",
        },
        {
          q: "He is learning Russian ___ with his colleagues in Moscow.",
          o: ["for speak", "for speaking to", "to speak", "speak"],
          a: 2,
          e: "Purpose → to speak.",
          d: "medium",
        },
        {
          q: "___ pass the IELTS exam, you need to practise writing.",
          o: ["In order to", "For", "In order for", "To order"],
          a: 0,
          e: "In order to + verb = formal purpose.",
          d: "medium",
        },
        {
          q: "\"Why are you going to the bazaar?\" — Choose the best short answer.",
          o: ["For buy fruit.", "To buy fruit.", "For fruit buying.", "Buy fruit."],
          a: 1,
          e: "to + verb can answer Why…? on its own: To buy fruit.",
          d: "medium",
        },
        {
          q: "Which sentence is wrong?",
          o: [
            "I went out for bread.",
            "I went out to buy bread.",
            "I went out for to buy bread.",
            "I went out to get some bread.",
          ],
          a: 2,
          e: "for to + verb is never correct in English.",
          d: "hard",
        },
        {
          q: "She turned on her laptop ___ her emails before the meeting.",
          o: ["for checking", "for check", "check", "to check"],
          a: 3,
          e: "Purpose before a verb → to check.",
          d: "hard",
        },
      ],
      tr: {
        situation: P(
          "\"Why are you learning English?\" \"To get a better job.\" — Maqsad to + fe'l bilan aytiladi: to get, to travel. U yolg'iz o'zi ham Why…? savoliga javob bo'la oladi.",
          "«Зачем ты учишь английский?» «Чтобы получить работу получше.» — Цель выражается через to + глагол: to get, to travel. Такой ответ может стоять и отдельно."
        ),
        tip: P(
          "Keyingi so'z fe'l bo'lsa — to: \"to buy milk\". Keyingi so'z ot bo'lsa — for: \"for milk\". Hech qachon \"for buy milk\" emas.",
          "Если дальше глагол — to: \"to buy milk\". Если существительное — for: \"for milk\". Никогда \"for buy milk\"."
        ),
        blocks: [
          {
            h: P("to + fe'l \"Why?\" ga javob beradi", "to + глагол отвечает на \"Why?\""),
            p: [
              P(
                "Sabab yoki maqsadni aytish uchun to + fe'lning asosiy shakli ishlatiladi. U Why…? savoliga yolg'iz o'zi ham javob bo'la oladi.",
                "Чтобы назвать причину или цель, используйте to + начальную форму глагола. Он может сам по себе отвечать на вопрос Why…?"
              ),
            ],
          },
          {
            h: P("\"for + fe'l\" emas", "Не \"for + глагол\""),
            p: [
              P(
                "Ko'p tillarda maqsad \"uchun\" bilan aytiladi, lekin inglizchada \"for buy\" yoki \"for to buy\" deyilmaydi. to + fe'l ishlating.",
                "Во многих языках цель выражается через «для», но по-английски нельзя сказать \"for buy\" или \"for to buy\". Используйте to + глагол."
              ),
            ],
          },
          {
            h: P("for + ot", "for + существительное"),
            p: [
              P(
                "for OTdan oldin to'g'ri: for bread, for a walk, for lunch. Solishtiring: to buy bread (fe'l) / for bread (ot).",
                "for правильно перед СУЩЕСТВИТЕЛЬНЫМ: for bread, for a walk, for lunch. Сравните: to buy bread (глагол) / for bread (существительное)."
              ),
            ],
          },
          {
            h: P("in order to — rasmiyroq", "in order to — более формально"),
            p: [
              P(
                "In order to + fe'l to + fe'l bilan bir xil ma'noni beradi, lekin rasmiyroq eshitiladi. Kundalik nutqda oddiy to ko'proq ishlatiladi.",
                "In order to + глагол значит то же, что to + глагол, но звучит формальнее. В повседневной речи чаще простое to."
              ),
            ],
          },
        ],
        quiz: [
          P("Fe'ldan oldin maqsad → to buy.", "Цель перед глаголом → to buy."),
          P("to + asosiy fe'l Why…? ga javob beradi.", "to + начальная форма отвечает на Why…?"),
          P("to + asosiy fe'l: to make.", "to + начальная форма: to make."),
          P("Otdan oldin (lunch) → for.", "Перед существительным (lunch) → for."),
          P("Maqsad = to + fe'l, hech qachon for to / for + fe'l emas.", "Цель = to + глагол, никогда for to / for + глагол."),
          P("Maqsad → to speak.", "Цель → to speak."),
          P("In order to + fe'l = rasmiy maqsad.", "In order to + глагол = формальная цель."),
          P("to + fe'l Why…? ga yolg'iz javob bo'la oladi: To buy fruit.", "to + глагол может сам отвечать на Why…?: To buy fruit."),
          P("for to + fe'l inglizchada hech qachon to'g'ri emas.", "for to + глагол в английском всегда неверно."),
          P("Fe'ldan oldin maqsad → to check.", "Цель перед глаголом → to check."),
        ],
      },
    },
  ],
};
