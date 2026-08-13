// New grammar lessons batch 2 — B1: g16–g18, B2: g16–g18. Fully trilingual (EN + UZ/RU).
const P = (uz, ru) => ({ uz, ru });

export const NEW_GRAMMAR_2 = {
  B1: [
    // ============================================================
    // B1 g16 — Agreeing: so do I / neither do I
    // ============================================================
    {
      id: "g16",
      title: "Agreeing: so do I / neither do I",
      lead: "Learn to agree quickly and naturally with 'So do I' and 'Neither do I' — the short echo responses English speakers use all the time.",
      leadTr: P(
        "'So do I' va 'Neither do I' bilan tez va tabiiy rozilik bildirishni o'rganing — ingliz tilida doim ishlatiladigan qisqa javoblar.",
        "Научитесь быстро и естественно соглашаться с помощью 'So do I' и 'Neither do I' — коротких ответов-эхо, которые англичане используют постоянно."
      ),
      situation: "Kamola: \"I love green tea.\" Rustam: \"So do I. But I can't drink it late at night.\" Kamola: \"Neither can I — I don't sleep well after it.\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "Agreeing with a positive statement: So + auxiliary + subject",
          p: [
            "To say that the same positive thing is true for you, use So + auxiliary verb + subject. Notice the inverted word order: the auxiliary comes before the subject, like in a question.",
            "The auxiliary must match the verb in the first sentence: be stays be, a modal stays the same modal, and present or past simple use do/does/did.",
          ],
          ex: [
            "\"I'm from Tashkent.\" \"So am I.\"",
            "\"Kamola works in IT Park.\" \"So does her brother.\"",
            "\"We went to Samarkand last spring.\" \"So did we.\"",
          ],
        },
        {
          h: "Agreeing with a negative statement: Neither / Nor + auxiliary + subject",
          p: [
            "When the first statement is negative, agree with Neither (or Nor) + auxiliary + subject. The auxiliary is positive — the negative idea is already inside 'neither', so never say 'Neither can't I'.",
          ],
          ex: [
            "\"I don't eat meat.\" \"Neither do I.\"",
            "\"Rustam hasn't seen that film.\" \"Neither has Kamola.\"",
            "\"I can't drive.\" \"Nor can I.\"",
          ],
        },
        {
          h: "Choosing the right auxiliary",
          p: [
            "Copy the auxiliary that is already in the sentence: am/is/are, was/were, have/has, will, would, can, could, must. If there is no auxiliary — that is, present simple or past simple — borrow do, does or did.",
            "This is the same trick you use for question tags, so if you know 'She has finished, hasn't she?', you also know 'So have I.'",
          ],
          ex: [
            "\"I'd love to visit Bukhara.\" \"So would I.\" (would → would)",
            "\"She speaks three languages.\" \"So does he.\" (present simple → does)",
            "\"They were late.\" \"So were we.\" (were → were)",
          ],
        },
        {
          h: "Disagreeing, and the informal 'Me too / Me neither'",
          p: [
            "To say the opposite is true for you, use subject + auxiliary in normal order: \"I love winter.\" \"Really? I don't.\" / \"I can't cook.\" \"Oh, I can.\"",
            "In informal speech you can simply say 'Me too' after a positive statement and 'Me neither' after a negative one. Both are very common in conversation but too casual for formal writing.",
          ],
          ex: [
            "\"I hate queues.\" \"Me too.\"",
            "\"I've never been to London.\" \"Me neither.\"",
            "\"I'm staying home tonight.\" \"I'm not — I'm meeting friends.\"",
          ],
        },
      ],
      tip: "Word order is the trap: after 'so' and 'neither' the auxiliary jumps in front of the subject — So do I, Neither can I — never 'So I do' for agreement.",
      examples: [
        "\"I'm learning English online.\" \"So am I.\"",
        "\"Rustam doesn't like horror films.\" \"Neither does Kamola.\"",
        "\"We've already had lunch.\" \"So have we.\"",
      ],
      mistakes: [
        { x: "\"I like plov.\" \"So I do.\"", v: "\"So do I.\" — after 'so', put the auxiliary before the subject" },
        { x: "\"I can't swim.\" \"Neither can't I.\"", v: "\"Neither can I.\" — 'neither' is already negative, so the auxiliary stays positive" },
        { x: "\"She went home early.\" \"So does I.\"", v: "\"So did I.\" — match the tense (past simple → did) and the subject" },
      ],
      quiz: [
        { q: "\"I love green tea.\" \"___\"", o: ["So do I.", "So am I.", "So have I.", "Neither do I."], a: 0, e: "'love' is present simple, so the auxiliary is 'do': So do I.", d: "easy" },
        { q: "\"I'm really tired today.\" \"___\"", o: ["So do I.", "So am I.", "So did I.", "Neither am I."], a: 1, e: "'am' is the verb be, so it repeats: So am I.", d: "easy" },
        { q: "\"I can't swim very well.\" \"___\"", o: ["So can I.", "Neither do I.", "Neither can I.", "So can't I."], a: 2, e: "Negative statement with 'can' → Neither can I.", d: "easy" },
        { q: "\"We went to Samarkand last week.\" \"___\"", o: ["So have I.", "So went I.", "So did I.", "So do I."], a: 2, e: "Past simple has no auxiliary, so borrow 'did': So did I.", d: "medium" },
        { q: "\"I've never tried sushi.\" \"___\"", o: ["Neither have I.", "So have I.", "Neither did I.", "Neither I have."], a: 0, e: "'never' makes it negative; the perfect auxiliary is 'have': Neither have I.", d: "medium" },
        { q: "Kamola doesn't like horror films. Neither ___ Rustam.", o: ["do", "does", "is", "did"], a: 1, e: "Present simple with a third-person subject → does.", d: "medium" },
        { q: "\"I won't be at the meeting tomorrow.\" \"___\"", o: ["So will I.", "Neither will I.", "Neither won't I.", "So do I."], a: 1, e: "'won't' is negative → Neither will I (positive auxiliary after 'neither').", d: "medium" },
        { q: "\"I love cold winters.\" \"Really? I ___ — I prefer summer.\"", o: ["don't", "do too", "am not", "neither"], a: 0, e: "To disagree with a positive statement, use normal order: I don't.", d: "medium" },
        { q: "You can reply 'Me neither' after…", o: ["a positive statement", "a question", "a negative statement", "a suggestion"], a: 2, e: "'Me neither' agrees with a negative statement; 'Me too' agrees with a positive one.", d: "easy" },
        { q: "Which reply correctly agrees with \"She has already finished the report\"?", o: ["So I have.", "So have I.", "So has I.", "So did I."], a: 1, e: "Invert after 'so' and match 'has/have' to the new subject 'I': So have I.", d: "hard" },
      ],
      tr: {
        situation: P(
          "Kamola: \"I love green tea.\" Rustam: \"So do I. But I can't drink it late at night.\" Kamola: \"Neither can I.\" — qisqa javoblar suhbatda roziligimizni takrorlamasdan bildiradi.",
          "Kamola: «I love green tea.» Rustam: «So do I. But I can't drink it late at night.» Kamola: «Neither can I.» — короткие ответы выражают согласие без повторения всей фразы."
        ),
        tip: P(
          "So'z tartibi — asosiy tuzoq: 'so' va 'neither' dan keyin yordamchi fe'l egadan oldin keladi — So do I, Neither can I. Rozilik uchun 'So I do' demang.",
          "Главная ловушка — порядок слов: после 'so' и 'neither' вспомогательный глагол ставится перед подлежащим — So do I, Neither can I. Для согласия не говорите 'So I do'."
        ),
        blocks: [
          {
            h: P("Ijobiy gapga qo'shilish: So + yordamchi fe'l + ega", "Согласие с утверждением: So + вспомогательный глагол + подлежащее"),
            p: [
              P("Xuddi shu ijobiy narsa sizga ham tegishli ekanini aytish uchun So + yordamchi fe'l + ega ishlatiladi. So'z tartibi teskari: yordamchi fe'l xuddi savoldagidek egadan oldin keladi.", "Чтобы сказать, что то же положительное верно и для вас, используйте So + вспомогательный глагол + подлежащее. Порядок слов инвертирован: вспомогательный глагол стоит перед подлежащим, как в вопросе."),
              P("Yordamchi fe'l birinchi gapdagi fe'lga mos bo'lishi kerak: be — be bo'lib qoladi, modal fe'l o'sha modal bo'lib qoladi, present yoki past simple esa do/does/did oladi.", "Вспомогательный глагол должен совпадать с глаголом первого предложения: be остаётся be, модальный глагол — тем же модальным, а present и past simple берут do/does/did."),
            ],
          },
          {
            h: P("Inkor gapga qo'shilish: Neither / Nor + yordamchi fe'l + ega", "Согласие с отрицанием: Neither / Nor + вспомогательный глагол + подлежащее"),
            p: [
              P("Birinchi gap inkor bo'lsa, Neither (yoki Nor) + yordamchi fe'l + ega bilan qo'shiling. Yordamchi fe'l ijobiy shaklda — inkor ma'nosi 'neither' ichida bor, shuning uchun hech qachon 'Neither can't I' demang.", "Если первое высказывание отрицательное, соглашайтесь через Neither (или Nor) + вспомогательный глагол + подлежащее. Глагол стоит в положительной форме — отрицание уже заложено в 'neither', поэтому никогда не говорите 'Neither can't I'."),
            ],
          },
          {
            h: P("To'g'ri yordamchi fe'lni tanlash", "Выбор правильного вспомогательного глагола"),
            p: [
              P("Gapda bor yordamchi fe'lni takrorlang: am/is/are, was/were, have/has, will, would, can, could, must. Yordamchi fe'l bo'lmasa — ya'ni present yoki past simple bo'lsa — do, does yoki did oling.", "Повторяйте тот вспомогательный глагол, который уже есть в предложении: am/is/are, was/were, have/has, will, would, can, could, must. Если его нет — то есть в present или past simple — берите do, does или did."),
              P("Bu question tags dagi usulning o'zi: 'She has finished, hasn't she?' ni bilsangiz, 'So have I.' ni ham bilasiz.", "Это тот же приём, что и в question tags: если вы знаете 'She has finished, hasn't she?', то знаете и 'So have I.'"),
            ],
          },
          {
            h: P("Qo'shilmaslik va norasmiy 'Me too / Me neither'", "Несогласие и разговорные 'Me too / Me neither'"),
            p: [
              P("Sizda aksincha ekanini aytish uchun oddiy tartibda ega + yordamchi fe'l ishlating: \"I love winter.\" \"Really? I don't.\" / \"I can't cook.\" \"Oh, I can.\"", "Чтобы сказать, что у вас наоборот, используйте обычный порядок: подлежащее + вспомогательный глагол: «I love winter.» «Really? I don't.» / «I can't cook.» «Oh, I can.»"),
              P("Og'zaki nutqda ijobiy gapdan keyin shunchaki 'Me too', inkor gapdan keyin 'Me neither' deyish mumkin. Ikkalasi ham suhbatda juda keng tarqalgan, lekin rasmiy yozuv uchun juda erkin.", "В устной речи после утверждения можно просто сказать 'Me too', после отрицания — 'Me neither'. Оба варианта очень частотны в разговоре, но слишком неформальны для официального письма."),
            ],
          },
        ],
        quiz: [
          P("'love' — present simple, yordamchi fe'l 'do': So do I.", "'love' — present simple, вспомогательный глагол 'do': So do I."),
          P("'am' — be fe'li, u takrorlanadi: So am I.", "'am' — глагол be, он повторяется: So am I."),
          P("'can' bilan inkor gap → Neither can I.", "Отрицание с 'can' → Neither can I."),
          P("Past simple da yordamchi fe'l yo'q, 'did' olinadi: So did I.", "В past simple нет вспомогательного глагола, берём 'did': So did I."),
          P("'never' gapni inkor qiladi; perfect'ning yordamchisi 'have': Neither have I.", "'never' делает фразу отрицательной; вспомогательный глагол перфекта — 'have': Neither have I."),
          P("Present simple, uchinchi shaxs → does.", "Present simple, третье лицо → does."),
          P("'won't' — inkor → Neither will I ('neither' dan keyin fe'l ijobiy).", "'won't' — отрицание → Neither will I (после 'neither' глагол положительный)."),
          P("Ijobiy gapga qo'shilmaslik uchun oddiy tartib: I don't.", "Чтобы не согласиться с утверждением — обычный порядок: I don't."),
          P("'Me neither' inkor gapga qo'shiladi; 'Me too' — ijobiy gapga.", "'Me neither' — согласие с отрицанием; 'Me too' — с утверждением."),
          P("'so' dan keyin inversiya va yangi ega 'I' ga mos 'have': So have I.", "После 'so' — инверсия, и 'has/have' согласуется с новым подлежащим 'I': So have I."),
        ],
      },
    },

    // ============================================================
    // B1 g17 — Phrasal verbs: separable & inseparable
    // ============================================================
    {
      id: "g17",
      title: "Phrasal verbs: separable & inseparable",
      lead: "Turn off, look after, give up — phrasal verbs are everywhere in real English. Learn which ones you can split and where the object goes.",
      leadTr: P(
        "Turn off, look after, give up — phrasal verbs jonli ingliz tilida hamma joyda. Qaysilarini bo'lish mumkinligini va to'ldiruvchi qayerga qo'yilishini o'rganing.",
        "Turn off, look after, give up — фразовые глаголы встречаются в живом английском повсюду. Узнайте, какие из них можно разделять и куда ставить дополнение."
      ),
      situation: "Rustam is leaving the office in IT Park: \"Can you turn off the lights? And don't forget to hand the report in — Kamola is waiting for it. If any problem comes up, call me.\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "What is a phrasal verb?",
          p: [
            "A phrasal verb is a verb plus one or two small words (particles like up, off, on, after) that together create a new meaning. 'Give up' means 'stop trying' — the meaning is not simply 'give' + 'up'.",
            "Because the meaning is often idiomatic, learn each phrasal verb as one piece of vocabulary, with an example sentence.",
          ],
          ex: [
            "The meeting was called off. (= cancelled)",
            "Kamola takes after her mother. (= is similar to)",
            "I need to look up this word. (= find in a dictionary)",
          ],
        },
        {
          h: "Separable phrasal verbs",
          p: [
            "With separable phrasal verbs, a noun object can go after the particle or between the verb and the particle: 'turn off the light' or 'turn the light off' — both are correct.",
            "But when the object is a pronoun (it, them, her…), it MUST go in the middle: 'turn it off', never 'turn off it'. This is the most important rule of the lesson.",
          ],
          ex: [
            "Please fill in this form. / Please fill this form in.",
            "She picked up the keys. → She picked them up.",
            "Turn the music down — the baby is sleeping. → Turn it down.",
          ],
        },
        {
          h: "Inseparable phrasal verbs",
          p: [
            "Inseparable phrasal verbs never split: the object — noun or pronoun — always comes after the particle. Many verbs of this type describe relationships and situations: look after, get on with, run into, deal with.",
          ],
          ex: [
            "Who looks after your little brother? → Who looks after him?",
            "I ran into an old classmate at Chorsu bazaar.",
            "Rustam gets on well with his colleagues.",
          ],
        },
        {
          h: "Three-word phrasal verbs and how to learn them",
          p: [
            "Some phrasal verbs have two particles: look forward to, run out of, put up with, get away with. These are always inseparable — the object follows the whole chain: 'I'm looking forward to the holidays.'",
            "A good dictionary shows separability: 'turn sth off' (separable, sth can move) versus 'look after sb' (inseparable). Record phrasal verbs in that format in your notebook.",
          ],
          ex: [
            "We've run out of sugar — can you buy some?",
            "I'm looking forward to your visit. → I'm looking forward to it.",
            "How do you put up with the noise? (= tolerate)",
          ],
        },
      ],
      tip: "The pronoun test: if you can say 'verb + it + particle' (turn it off), the verb is separable. If the pronoun must follow the particle (look after it), it is inseparable.",
      examples: [
        "Can you turn the TV off? I'm trying to study.",
        "My grandmother looked after me when I was small.",
        "We're looking forward to the Navruz holidays.",
      ],
      mistakes: [
        { x: "Please turn off it.", v: "Please turn it off. — with separable verbs a pronoun object must go between verb and particle" },
        { x: "She looks her nephew after.", v: "She looks after her nephew. — 'look after' is inseparable and never splits" },
        { x: "I'm looking forward to see you.", v: "I'm looking forward to seeing you. — here 'to' is a preposition, so the verb takes -ing" },
      ],
      quiz: [
        { q: "Which sentence is correct?", o: ["Please turn off it.", "Please turn it off.", "Please turn off it now.", "Please it turn off."], a: 1, e: "With separable phrasal verbs, a pronoun object goes between the verb and the particle.", d: "easy" },
        { q: "'The concert was called off.' What does 'called off' mean?", o: ["announced", "started", "cancelled", "recorded"], a: 2, e: "'Call off' means 'cancel'.", d: "easy" },
        { q: "Choose the correct sentence with 'look after'.", o: ["She looks her cat after.", "She looks after it.", "She looks it after.", "She after looks the cat."], a: 1, e: "'Look after' is inseparable: the object always follows the particle.", d: "easy" },
        { q: "We've run ___ milk — I'll buy some on the way home.", o: ["out of", "off", "out", "away with"], a: 0, e: "'Run out of something' = have none left.", d: "medium" },
        { q: "Which sentence is NOT possible?", o: ["Fill in the form.", "Fill the form in.", "Fill it in.", "Fill in it."], a: 3, e: "'Fill in' is separable, so a pronoun must go in the middle: fill it in.", d: "medium" },
        { q: "I ___ an old friend at the airport yesterday. (= met by chance)", o: ["ran out of", "ran into", "ran up", "ran it into"], a: 1, e: "'Run into somebody' = meet by chance; it is inseparable.", d: "medium" },
        { q: "I'm looking forward ___ you again.", o: ["to see", "seeing", "to seeing", "for seeing"], a: 2, e: "In 'look forward to', 'to' is a preposition, so it is followed by -ing.", d: "hard" },
        { q: "Kamola ___ her mother — they have the same smile.", o: ["takes off", "takes up", "takes after", "takes her mother after"], a: 2, e: "'Take after somebody' = look or behave like an older relative; inseparable.", d: "medium" },
        { q: "The music is too loud. Turn ___, please.", o: ["down it", "it down", "down", "it off down"], a: 1, e: "'Turn down' is separable: with a pronoun, say 'turn it down'.", d: "medium" },
        { q: "Which shows that 'put up with' cannot be separated?", o: ["I can't put up with it.", "I can't put it up with.", "I can't put up it with.", "I can't put with it up."], a: 0, e: "Three-word phrasal verbs are always inseparable: put up with + object.", d: "hard" },
      ],
      tr: {
        situation: P(
          "Rustam IT Parkdagi ofisdan chiqmoqda: \"Can you turn off the lights? And don't forget to hand the report in.\" — phrasal verbs kundalik ish nutqining ajralmas qismi.",
          "Rustam уходит из офиса в IT Park: «Can you turn off the lights? And don't forget to hand the report in.» — фразовые глаголы — неотъемлемая часть повседневной речи."
        ),
        tip: P(
          "Olmosh testi: 'verb + it + particle' deb ayta olsangiz (turn it off) — fe'l bo'linadigan (separable). Olmosh particle'dan keyin kelishi shart bo'lsa (look after it) — bo'linmaydigan (inseparable).",
          "Тест с местоимением: если можно сказать 'verb + it + particle' (turn it off) — глагол разделяемый (separable). Если местоимение обязано стоять после частицы (look after it) — неразделяемый (inseparable)."
        ),
        blocks: [
          {
            h: P("Phrasal verb nima?", "Что такое фразовый глагол?"),
            p: [
              P("Phrasal verb — fe'l va bir yoki ikki kichik so'z (up, off, on, after kabi particle'lar) birikib, yangi ma'no hosil qiladi. 'Give up' — 'urinishni to'xtatish' degani; ma'no oddiygina 'give' + 'up' emas.", "Фразовый глагол — это глагол плюс одно-два коротких слова (частицы up, off, on, after и т.п.), вместе создающие новое значение. 'Give up' значит 'перестать пытаться' — это не просто 'give' + 'up'."),
              P("Ma'no ko'pincha idiomatik bo'lgani uchun har bir phrasal verb'ni misol gap bilan alohida lug'at birligi sifatida yodlang.", "Поскольку значение часто идиоматично, учите каждый фразовый глагол как отдельную лексическую единицу, с примером."),
            ],
          },
          {
            h: P("Bo'linadigan (separable) phrasal verbs", "Разделяемые (separable) фразовые глаголы"),
            p: [
              P("Bo'linadigan phrasal verb'larda ot bo'lgan to'ldiruvchi particle'dan keyin ham, fe'l bilan particle orasida ham kela oladi: 'turn off the light' yoki 'turn the light off' — ikkalasi ham to'g'ri.", "У разделяемых глаголов дополнение-существительное может стоять после частицы или между глаголом и частицей: 'turn off the light' и 'turn the light off' — оба варианта верны."),
              P("Lekin to'ldiruvchi olmosh bo'lsa (it, them, her…), u ALBATTA o'rtada turadi: 'turn it off', hech qachon 'turn off it' emas. Bu darsning eng muhim qoidasi.", "Но если дополнение — местоимение (it, them, her…), оно ОБЯЗАНО стоять в середине: 'turn it off', и никогда 'turn off it'. Это главное правило урока."),
            ],
          },
          {
            h: P("Bo'linmaydigan (inseparable) phrasal verbs", "Неразделяемые (inseparable) фразовые глаголы"),
            p: [
              P("Bo'linmaydigan phrasal verb'lar hech qachon ajralmaydi: to'ldiruvchi — ot ham, olmosh ham — doim particle'dan keyin keladi. Bu turdagi ko'p fe'llar munosabat va vaziyatlarni bildiradi: look after, get on with, run into, deal with.", "Неразделяемые глаголы никогда не расщепляются: дополнение — и существительное, и местоимение — всегда идёт после частицы. Многие такие глаголы описывают отношения и ситуации: look after, get on with, run into, deal with."),
            ],
          },
          {
            h: P("Uch so'zli phrasal verbs va ularni o'rganish", "Трёхсловные фразовые глаголы и как их учить"),
            p: [
              P("Ba'zi phrasal verb'larda ikkita particle bor: look forward to, run out of, put up with, get away with. Ular doim bo'linmaydi — to'ldiruvchi butun zanjirdan keyin keladi: 'I'm looking forward to the holidays.'", "У некоторых глаголов две частицы: look forward to, run out of, put up with, get away with. Они всегда неразделяемы — дополнение идёт после всей цепочки: 'I'm looking forward to the holidays.'"),
              P("Yaxshi lug'at bo'linishni ko'rsatadi: 'turn sth off' (bo'linadigan, sth joyini o'zgartira oladi) va 'look after sb' (bo'linmaydigan). Daftaringizga phrasal verb'larni shu formatda yozing.", "Хороший словарь показывает разделяемость: 'turn sth off' (разделяемый, sth может перемещаться) против 'look after sb' (неразделяемый). Записывайте фразовые глаголы в тетрадь именно в этом формате."),
            ],
          },
        ],
        quiz: [
          P("Bo'linadigan phrasal verb'da olmosh fe'l bilan particle orasida turadi: turn it off.", "У разделяемого глагола местоимение стоит между глаголом и частицей: turn it off."),
          P("'Call off' — 'bekor qilish' degani.", "'Call off' значит 'отменить'."),
          P("'Look after' bo'linmaydi: to'ldiruvchi doim particle'dan keyin.", "'Look after' неразделяем: дополнение всегда после частицы."),
          P("'Run out of something' — tugab qolmoq.", "'Run out of something' — закончиться, иссякнуть."),
          P("'Fill in' bo'linadigan, shuning uchun olmosh o'rtada bo'lishi kerak: fill it in.", "'Fill in' разделяемый, поэтому местоимение должно стоять в середине: fill it in."),
          P("'Run into somebody' — tasodifan uchratmoq; bo'linmaydi.", "'Run into somebody' — случайно встретить; неразделяемый."),
          P("'Look forward to' dagi 'to' — predlog, undan keyin -ing keladi.", "В 'look forward to' 'to' — предлог, после него идёт -ing."),
          P("'Take after somebody' — kattaroq qarindoshga o'xshamoq; bo'linmaydi.", "'Take after somebody' — быть похожим на старшего родственника; неразделяемый."),
          P("'Turn down' bo'linadigan: olmosh bilan 'turn it down'.", "'Turn down' разделяемый: с местоимением — 'turn it down'."),
          P("Uch so'zli phrasal verb'lar doim bo'linmaydi: put up with + to'ldiruvchi.", "Трёхсловные фразовые глаголы всегда неразделяемы: put up with + дополнение."),
        ],
      },
    },

    // ============================================================
    // B1 g18 — Indirect questions
    // ============================================================
    {
      id: "g18",
      title: "Indirect questions",
      lead: "'Could you tell me where the station is?' Indirect questions make you sound polite and professional — but they follow surprising word-order rules.",
      leadTr: P(
        "'Could you tell me where the station is?' Bilvosita savollar sizni muloyim va professional qilib ko'rsatadi — lekin ularda kutilmagan so'z tartibi qoidalari bor.",
        "'Could you tell me where the station is?' Косвенные вопросы делают речь вежливой и профессиональной — но в них действуют неожиданные правила порядка слов."
      ),
      situation: "A tourist in Tashkent: \"Excuse me, could you tell me where the metro station is?\" Kamola: \"Of course — it's just around the corner. Do you know which line you need?\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "Why use indirect questions?",
          p: [
            "A direct question — 'Where is the bank?' — can sound abrupt, especially with strangers. Wrapping it in a polite opener softens it: 'Could you tell me where the bank is?', 'Do you know what time the museum opens?'",
            "Common openers: Could you tell me…, Do you know…, I wonder…, I'd like to know…, Can you remember…, Have you any idea….",
          ],
          ex: [
            "Could you tell me where the ticket office is?",
            "Do you know when the next train to Samarkand leaves?",
            "I wonder why the flight was delayed.",
          ],
        },
        {
          h: "The key rule: statement word order",
          p: [
            "Inside an indirect question, use statement order — subject before verb — and drop the auxiliary do/does/did completely. Direct: 'Where does Rustam work?' → Indirect: 'Do you know where Rustam works?'",
            "With the verb be, the subject moves in front of it: 'Where is the station?' → '…where the station is.'",
          ],
          ex: [
            "What time does the shop close? → Could you tell me what time the shop closes?",
            "Why did she leave? → I don't know why she left.",
            "How much is this carpet? → Can you tell me how much this carpet is?",
          ],
        },
        {
          h: "Yes/no questions: if or whether",
          p: [
            "When the direct question has no question word (Is it…? Does he…? Did they…?), introduce the indirect version with if or whether. 'Does this bus go to Chilonzor?' → 'Do you know if this bus goes to Chilonzor?'",
            "'Whether' is slightly more formal and is preferred before 'or not': 'I don't know whether or not to apply.'",
          ],
          ex: [
            "Is the office open on Saturdays? → Do you know if the office is open on Saturdays?",
            "Did Kamola get the job? → I wonder whether Kamola got the job.",
            "Can I pay by card? → Could you tell me if I can pay by card?",
          ],
        },
        {
          h: "Question mark or full stop?",
          p: [
            "If the opener itself is a question (Could you tell me…? Do you know…?), the whole sentence ends with a question mark. If the opener is a statement (I wonder…, I don't know…, I'd like to know…), it ends with a full stop, even though a question hides inside.",
          ],
          ex: [
            "Do you know where he lives?",
            "I don't know where he lives.",
            "I wonder if the report is ready.",
          ],
        },
      ],
      tip: "One change, one rule: after the opener, turn the question back into a statement — subject + verb, no do/does/did. 'Where does she live?' → '…where she lives.'",
      examples: [
        "Could you tell me how I can get to Registan Square?",
        "Do you know if the IT Park cafeteria is still open?",
        "I'd like to know why the meeting was cancelled.",
      ],
      mistakes: [
        { x: "Could you tell me where is the station?", v: "Could you tell me where the station is? — statement order after the question word" },
        { x: "Do you know what time does the bank open?", v: "Do you know what time the bank opens? — drop 'does' and add -s to the verb" },
        { x: "I wonder that he is at home.", v: "I wonder if/whether he is at home. — yes/no questions need if or whether, not 'that'" },
      ],
      quiz: [
        { q: "Could you tell me where ___?", o: ["is the bank", "the bank is", "does the bank", "the bank does be"], a: 1, e: "Indirect questions use statement order: subject + verb.", d: "easy" },
        { q: "Do you know what time ___?", o: ["does the shop close", "the shop closes", "closes the shop", "the shop does close"], a: 1, e: "Drop 'does' and put the verb after the subject: the shop closes.", d: "easy" },
        { q: "Direct: 'Does this bus go to the airport?' → Do you know ___ this bus goes to the airport?", o: ["that", "what", "if", "does"], a: 2, e: "Yes/no questions become indirect with if or whether.", d: "easy" },
        { q: "I wonder why ___ the meeting.", o: ["did she miss", "she missed", "she did missed", "missed she"], a: 1, e: "No 'did' inside an indirect question — the verb takes the past form: she missed.", d: "medium" },
        { q: "Which sentence is correct?", o: ["Do you know where does Rustam work?", "Do you know where Rustam works?", "Do you know where works Rustam?", "Do you know where Rustam does work?"], a: 1, e: "Statement order and no 'does': where Rustam works.", d: "medium" },
        { q: "Which opener needs a full stop, not a question mark?", o: ["Could you tell me…", "Do you know…", "I'd like to know…", "Have you any idea…"], a: 2, e: "'I'd like to know…' is a statement, so the sentence ends with a full stop.", d: "medium" },
        { q: "'Is Kamola at the office?' → I'm not sure ___ at the office.", o: ["is Kamola", "that is Kamola", "whether Kamola is", "if is Kamola"], a: 2, e: "Yes/no question → if/whether + statement order: whether Kamola is.", d: "medium" },
        { q: "Choose the most natural polite question to a stranger.", o: ["Where is the metro?", "Tell me where the metro is.", "Could you tell me where the metro is?", "You know where is the metro?"], a: 2, e: "'Could you tell me…?' plus statement order is the polite pattern.", d: "easy" },
        { q: "'How much did the tickets cost?' → Can you remember how much ___?", o: ["did the tickets cost", "the tickets cost", "do the tickets cost", "the tickets did cost"], a: 1, e: "Remove 'did'; past simple stays on the main verb: the tickets cost (past).", d: "hard" },
        { q: "I don't know whether ___ to accept the offer.", o: ["or not", "not", "if", "that"], a: 0, e: "'Whether or not' is the standard combination; 'if or not' is not used directly like this.", d: "hard" },
      ],
      tr: {
        situation: P(
          "Toshkentdagi sayyoh: \"Excuse me, could you tell me where the metro station is?\" — bilvosita savol notanish kishiga murojaatni muloyim qiladi.",
          "Турист в Ташкенте: «Excuse me, could you tell me where the metro station is?» — косвенный вопрос делает обращение к незнакомцу вежливым."
        ),
        tip: P(
          "Bitta o'zgarish, bitta qoida: kirish iboradan keyin savolni yana darak gapga aylantiring — ega + fe'l, do/does/did yo'q. 'Where does she live?' → '…where she lives.'",
          "Одно изменение, одно правило: после вводной фразы превратите вопрос обратно в утверждение — подлежащее + глагол, без do/does/did. 'Where does she live?' → '…where she lives.'"
        ),
        blocks: [
          {
            h: P("Nega bilvosita savollar kerak?", "Зачем нужны косвенные вопросы?"),
            p: [
              P("To'g'ridan-to'g'ri savol — 'Where is the bank?' — ayniqsa notanishlarga qo'pol eshitilishi mumkin. Muloyim kirish ibora uni yumshatadi: 'Could you tell me where the bank is?', 'Do you know what time the museum opens?'", "Прямой вопрос — 'Where is the bank?' — может звучать резко, особенно с незнакомыми людьми. Вежливая вводная фраза смягчает его: 'Could you tell me where the bank is?', 'Do you know what time the museum opens?'"),
              P("Keng tarqalgan kirish iboralar: Could you tell me…, Do you know…, I wonder…, I'd like to know…, Can you remember…, Have you any idea….", "Частые вводные фразы: Could you tell me…, Do you know…, I wonder…, I'd like to know…, Can you remember…, Have you any idea…."),
            ],
          },
          {
            h: P("Asosiy qoida: darak gap tartibi", "Главное правило: порядок слов утверждения"),
            p: [
              P("Bilvosita savol ichida darak gap tartibi ishlatiladi — ega fe'ldan oldin — va do/does/did butunlay tushib qoladi. To'g'ridan-to'g'ri: 'Where does Rustam work?' → Bilvosita: 'Do you know where Rustam works?'", "Внутри косвенного вопроса используется порядок утверждения — подлежащее перед глаголом — а do/does/did полностью исчезает. Прямой: 'Where does Rustam work?' → Косвенный: 'Do you know where Rustam works?'"),
              P("Be fe'li bilan ega uning oldiga o'tadi: 'Where is the station?' → '…where the station is.'", "С глаголом be подлежащее ставится перед ним: 'Where is the station?' → '…where the station is.'"),
            ],
          },
          {
            h: P("Ha/yo'q savollari: if yoki whether", "Вопросы да/нет: if или whether"),
            p: [
              P("To'g'ridan-to'g'ri savolda so'roq so'zi bo'lmasa (Is it…? Does he…? Did they…?), bilvosita variant if yoki whether bilan boshlanadi. 'Does this bus go to Chilonzor?' → 'Do you know if this bus goes to Chilonzor?'", "Если в прямом вопросе нет вопросительного слова (Is it…? Does he…? Did they…?), косвенный вариант вводится через if или whether. 'Does this bus go to Chilonzor?' → 'Do you know if this bus goes to Chilonzor?'"),
              P("'Whether' biroz rasmiyroq va 'or not' oldidan afzal ko'riladi: 'I don't know whether or not to apply.'", "'Whether' чуть формальнее и предпочтителен перед 'or not': 'I don't know whether or not to apply.'"),
            ],
          },
          {
            h: P("So'roq belgisimi yoki nuqta?", "Вопросительный знак или точка?"),
            p: [
              P("Kirish iboraning o'zi savol bo'lsa (Could you tell me…? Do you know…?), butun gap so'roq belgisi bilan tugaydi. Kirish ibora darak gap bo'lsa (I wonder…, I don't know…, I'd like to know…), ichida savol yashiringan bo'lsa ham, gap nuqta bilan tugaydi.", "Если вводная фраза сама — вопрос (Could you tell me…? Do you know…?), всё предложение заканчивается вопросительным знаком. Если вводная фраза — утверждение (I wonder…, I don't know…, I'd like to know…), предложение заканчивается точкой, хотя внутри спрятан вопрос."),
            ],
          },
        ],
        quiz: [
          P("Bilvosita savolda darak gap tartibi: ega + fe'l.", "В косвенном вопросе — порядок утверждения: подлежащее + глагол."),
          P("'does' tushib qoladi, fe'l egadan keyin keladi: the shop closes.", "'does' убирается, глагол идёт после подлежащего: the shop closes."),
          P("Ha/yo'q savollari bilvosita shaklda if yoki whether oladi.", "Вопросы да/нет в косвенной форме вводятся через if или whether."),
          P("Bilvosita savol ichida 'did' yo'q — fe'l o'tgan zamon shaklini oladi: she missed.", "Внутри косвенного вопроса нет 'did' — глагол в прошедшей форме: she missed."),
          P("Darak tartibi va 'does'siz: where Rustam works.", "Порядок утверждения и без 'does': where Rustam works."),
          P("'I'd like to know…' — darak gap, shuning uchun gap nuqta bilan tugaydi.", "'I'd like to know…' — утверждение, поэтому предложение заканчивается точкой."),
          P("Ha/yo'q savoli → if/whether + darak tartibi: whether Kamola is.", "Вопрос да/нет → if/whether + порядок утверждения: whether Kamola is."),
          P("'Could you tell me…?' + darak tartibi — muloyim qolip.", "'Could you tell me…?' + порядок утверждения — вежливый шаблон."),
          P("'did' olib tashlanadi; o'tgan zamon asosiy fe'lda qoladi: the tickets cost (o'tgan zamon).", "'did' убирается; прошедшее время остаётся на основном глаголе: the tickets cost (прошедшее)."),
          P("'Whether or not' — standart birikma; 'if' bu o'rinda 'or not' bilan bevosita ishlatilmaydi.", "'Whether or not' — стандартное сочетание; 'if' так напрямую с 'or not' не используется."),
        ],
      },
    },
  ],

  B2: [
    // ============================================================
    // B2 g16 — Participle clauses
    // ============================================================
    {
      id: "g16",
      title: "Participle clauses",
      lead: "'Feeling tired, she went home early.' Participle clauses compress two sentences into one elegant line — a hallmark of good written English.",
      leadTr: P(
        "'Feeling tired, she went home early.' Participle clauses ikki gapni bitta nafis qatorga siqadi — bu yaxshi yozma ingliz tilining belgisidir.",
        "'Feeling tired, she went home early.' Причастные обороты сжимают два предложения в одну изящную строку — признак хорошего письменного английского."
      ),
      situation: "From a company report: \"Founded in 2019, the startup now employs forty people. Having secured new investment, it plans to open an office in Samarkand, creating dozens of new jobs.\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "Present participle (-ing) clauses",
          p: [
            "An -ing clause can replace a clause about reason, time, or result when both parts share the same subject: 'Because she felt tired, she left' → 'Feeling tired, she left.'",
            "The -ing form here has active meaning and can refer to present or past — the tense is understood from the main clause.",
          ],
          ex: [
            "Knowing the city well, Rustam offered to be our guide.",
            "She sat by the window, watching the rain.",
            "The road was closed, causing long delays.",
          ],
        },
        {
          h: "Past participle (-ed) clauses",
          p: [
            "A past participle clause has passive meaning: 'Built in the 15th century, the madrasa attracts thousands of visitors' = 'which was built…'. It often replaces a passive relative clause.",
          ],
          ex: [
            "Written in simple English, the report was easy to follow.",
            "The products sold in this shop are all handmade. (= which are sold)",
            "Shocked by the news, Kamola couldn't speak.",
          ],
        },
        {
          h: "Perfect participle: having + past participle",
          p: [
            "Use 'having + past participle' to make clear that one action finished before another began: 'Having finished the report, she emailed it to the client.'",
            "Compare: 'Finishing the report, she noticed a mistake' (during) vs 'Having finished the report, she went home' (after). Use the perfect form when the sequence matters.",
          ],
          ex: [
            "Having lived in Tashkent for years, he knows every street.",
            "Having passed IELTS, Kamola applied to a university abroad.",
            "Having been warned twice, the driver finally slowed down.",
          ],
        },
        {
          h: "The danger: dangling participles",
          p: [
            "The unspoken subject of the participle must be the subject of the main clause. 'Walking to work, the rain started' is wrong — the rain was not walking. Fix it by changing the subject or restoring a full clause: 'Walking to work, I got caught in the rain.'",
            "Participle clauses are common after conjunctions too: 'while waiting', 'when asked', 'if necessary', 'although exhausted'.",
          ],
          ex: [
            "Walking to work, I saw an accident. (I was walking)",
            "When asked about the delay, the manager apologised.",
            "While living in Bukhara, she learned to weave carpets.",
          ],
        },
      ],
      tip: "Ask: who is doing the -ing action? If it is not the subject of the main clause, the sentence collapses — that is the famous 'dangling participle'.",
      examples: [
        "Founded in 2019, the company has grown rapidly.",
        "Having checked the figures twice, the accountant signed the report.",
        "Students taking the exam tomorrow should arrive by 8:30.",
      ],
      mistakes: [
        { x: "Driving to Samarkand, the mountains looked beautiful.", v: "Driving to Samarkand, we thought the mountains looked beautiful. — the participle's subject must match the main clause" },
        { x: "Having finish the project, the team celebrated.", v: "Having finished the project, the team celebrated. — perfect participle is having + past participle" },
        { x: "The letter sending yesterday arrived today.", v: "The letter sent yesterday arrived today. — passive meaning needs the past participle" },
      ],
      quiz: [
        { q: "___ tired after the flight, Kamola went straight to bed.", o: ["Felt", "Feeling", "To feel", "Being felt"], a: 1, e: "Same subject, active meaning → present participle: Feeling tired.", d: "easy" },
        { q: "___ in the 15th century, the madrasa is now a museum.", o: ["Building", "Having built", "Built", "To build"], a: 2, e: "Passive meaning ('it was built') → past participle: Built.", d: "easy" },
        { q: "___ the report, she sent it to her manager.", o: ["Having finished", "Finished", "Being finished", "To finishing"], a: 0, e: "One action completed before another → having + past participle.", d: "medium" },
        { q: "Which sentence contains a dangling participle?", o: ["Opening the window, I let in some air.", "Opening the window, the room felt cooler.", "Having opened the window, I sat down.", "I opened the window, letting in some air."], a: 1, e: "The room did not open the window — the participle's subject does not match.", d: "hard" },
        { q: "The candidates ___ for the interview should wait in room 4.", o: ["selecting", "selected", "having selecting", "select"], a: 1, e: "The candidates were selected (passive) → past participle: selected.", d: "medium" },
        { q: "'Having been warned twice, the driver slowed down.' The participle form is…", o: ["present participle", "past participle", "perfect passive participle", "gerund"], a: 2, e: "'Having been + past participle' is the perfect passive participle.", d: "hard" },
        { q: "While ___ in Bukhara, she learned to weave carpets.", o: ["lived", "living", "was living", "to live"], a: 1, e: "After conjunctions like while, use the -ing participle: while living.", d: "medium" },
        { q: "The bridge collapsed, ___ traffic chaos across the city.", o: ["caused", "having been caused", "causing", "to causing"], a: 2, e: "A result of the main clause → -ing clause: causing chaos.", d: "medium" },
        { q: "Which is the best one-sentence version of 'Because he knew the answer, he raised his hand'?", o: ["Known the answer, he raised his hand.", "Knowing the answer, he raised his hand.", "Having knowing the answer, he raised his hand.", "The answer knowing, he raised his hand."], a: 1, e: "Reason + same subject + active → Knowing the answer, ….", d: "easy" },
        { q: "When ___ about the project's delay, the director refused to comment.", o: ["asking", "asked", "having asked", "he asking"], a: 1, e: "The director was asked (passive) → when asked.", d: "medium" },
      ],
      tr: {
        situation: P(
          "Kompaniya hisobotidan: \"Founded in 2019, the startup now employs forty people. Having secured new investment, it plans to open an office in Samarkand.\" — participle clauses rasmiy yozuvni ixcham qiladi.",
          "Из отчёта компании: «Founded in 2019, the startup now employs forty people. Having secured new investment, it plans to open an office in Samarkand.» — причастные обороты делают деловой текст компактным."
        ),
        tip: P(
          "So'rang: -ing harakatini kim bajaryapti? Agar bu bosh gapning egasi bo'lmasa, gap buziladi — bu mashhur 'dangling participle' xatosi.",
          "Спросите себя: кто выполняет действие с -ing? Если это не подлежащее главного предложения, конструкция рушится — это и есть знаменитый 'dangling participle'."
        ),
        blocks: [
          {
            h: P("Hozirgi zamon sifatdoshi (-ing) bilan qurilmalar", "Обороты с причастием настоящего времени (-ing)"),
            p: [
              P("-ing qurilma sabab, vaqt yoki natija ergash gapining o'rnini bosa oladi, agar ikkala qismning egasi bir xil bo'lsa: 'Because she felt tired, she left' → 'Feeling tired, she left.'", "Оборот с -ing может заменить придаточное причины, времени или следствия, если у обеих частей одно подлежащее: 'Because she felt tired, she left' → 'Feeling tired, she left.'"),
              P("Bu yerda -ing shakli faol ma'noga ega va hozirgi yoki o'tgan zamonga tegishli bo'lishi mumkin — zamon bosh gapdan anglashiladi.", "Форма -ing здесь имеет активное значение и может относиться к настоящему или прошлому — время понятно из главного предложения."),
            ],
          },
          {
            h: P("O'tgan zamon sifatdoshi (-ed) bilan qurilmalar", "Обороты с причастием прошедшего времени (-ed)"),
            p: [
              P("O'tgan zamon sifatdoshli qurilma majhul (passiv) ma'noga ega: 'Built in the 15th century, the madrasa attracts thousands of visitors' = 'which was built…'. U ko'pincha passiv relative clause o'rnini bosadi.", "Оборот с past participle имеет пассивное значение: 'Built in the 15th century, the madrasa attracts thousands of visitors' = 'which was built…'. Он часто заменяет пассивное относительное придаточное."),
            ],
          },
          {
            h: P("Perfect participle: having + past participle", "Перфектное причастие: having + past participle"),
            p: [
              P("Bir harakat ikkinchisidan oldin tugaganini aniq ko'rsatish uchun 'having + past participle' ishlating: 'Having finished the report, she emailed it to the client.'", "Чтобы ясно показать, что одно действие завершилось до начала другого, используйте 'having + past participle': 'Having finished the report, she emailed it to the client.'"),
              P("Solishtiring: 'Finishing the report, she noticed a mistake' (jarayonda) va 'Having finished the report, she went home' (tugagandan keyin). Ketma-ketlik muhim bo'lsa, perfect shaklni ishlating.", "Сравните: 'Finishing the report, she noticed a mistake' (в процессе) и 'Having finished the report, she went home' (после завершения). Когда важна последовательность — используйте перфектную форму."),
            ],
          },
          {
            h: P("Xavf: dangling participles", "Опасность: висячие причастия"),
            p: [
              P("Sifatdoshning aytilmagan egasi bosh gapning egasi bo'lishi shart. 'Walking to work, the rain started' — xato: yomg'ir yurmaydi. Egani o'zgartirib yoki to'liq gapni qaytarib tuzating: 'Walking to work, I got caught in the rain.'", "Невысказанное подлежащее причастия должно совпадать с подлежащим главного предложения. 'Walking to work, the rain started' — ошибка: дождь не шёл на работу. Исправьте, поменяв подлежащее или вернув полное придаточное: 'Walking to work, I got caught in the rain.'"),
              P("Participle qurilmalar bog'lovchilardan keyin ham keng tarqalgan: 'while waiting', 'when asked', 'if necessary', 'although exhausted'.", "Причастные обороты часто идут и после союзов: 'while waiting', 'when asked', 'if necessary', 'although exhausted'."),
            ],
          },
        ],
        quiz: [
          P("Bir xil ega, faol ma'no → hozirgi zamon sifatdoshi: Feeling tired.", "Одно подлежащее, активное значение → причастие настоящего времени: Feeling tired."),
          P("Majhul ma'no ('it was built') → past participle: Built.", "Пассивное значение ('it was built') → past participle: Built."),
          P("Bir harakat ikkinchisidan oldin tugagan → having + past participle.", "Одно действие завершилось до другого → having + past participle."),
          P("Xona derazani ochmagan — sifatdoshning egasi mos kelmaydi.", "Комната не открывала окно — подлежащее причастия не совпадает."),
          P("Nomzodlar tanlab olingan (passiv) → past participle: selected.", "Кандидатов отобрали (пассив) → past participle: selected."),
          P("'Having been + past participle' — perfect passiv sifatdosh.", "'Having been + past participle' — перфектное пассивное причастие."),
          P("While kabi bog'lovchilardan keyin -ing sifatdosh keladi: while living.", "После союзов вроде while используется причастие на -ing: while living."),
          P("Bosh gapning natijasi → -ing qurilma: causing chaos.", "Следствие главного предложения → оборот с -ing: causing chaos."),
          P("Sabab + bir xil ega + faol ma'no → Knowing the answer, ….", "Причина + одно подлежащее + актив → Knowing the answer, …."),
          P("Direktordan so'rashdi (passiv) → when asked.", "Директора спросили (пассив) → when asked."),
        ],
      },
    },

    // ============================================================
    // B2 g17 — Future in the past
    // ============================================================
    {
      id: "g17",
      title: "Future in the past",
      lead: "'I was going to call you, but my phone died.' Learn to talk about the future as it looked from a point in the past — plans, promises and near-misses.",
      leadTr: P(
        "'I was going to call you, but my phone died.' O'tmishdagi nuqtadan qaraganda kelajak qanday ko'ringanini aytishni o'rganing — rejalar, va'dalar va amalga oshmagan niyatlar.",
        "'I was going to call you, but my phone died.' Научитесь говорить о будущем, каким оно виделось из прошлого — планы, обещания и несбывшиеся намерения."
      ),
      situation: "Rustam: \"You missed the meeting yesterday!\" Kamola: \"I know, I'm sorry. I was going to join online, but just as the call was about to start, the electricity went off. I knew you would manage without me, though.\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "The idea: yesterday's tomorrow",
          p: [
            "English shifts future forms into the past to describe what was still ahead at a past moment. Will becomes would, is going to becomes was going to, is about to becomes was about to.",
            "You need this constantly in storytelling and reported speech: 'She said she would call' reports 'I will call' from the past.",
          ],
          ex: [
            "In 2015 nobody knew the area would become IT Park.",
            "He promised he would help us move house.",
            "We were sure the plan was going to work.",
          ],
        },
        {
          h: "was/were going to: past plans and intentions",
          p: [
            "'Was/were going to + verb' describes a plan that existed in the past. Very often the plan did NOT happen, and the sentence continues with but: 'I was going to study abroad, but my visa was refused.'",
            "It can also describe a past prediction that came true: 'I knew it was going to rain — and it did.'",
          ],
          ex: [
            "We were going to drive to Samarkand, but the car broke down.",
            "Kamola was going to resign; luckily, her manager offered her a new role.",
            "The sky was dark — it was clearly going to storm.",
          ],
        },
        {
          h: "would: the future seen from a narrative past",
          p: [
            "In stories and reports, 'would' marks events that were still in the future at that point: 'At twenty he moved to Tashkent, where he would spend the rest of his life.'",
            "This is common in biographies and history writing — the narrator already knows the outcome and looks forward from a past moment.",
          ],
          ex: [
            "She joined the startup in 2020; two years later she would become its CEO.",
            "They said the results would be announced on Friday.",
            "He didn't realise then how important that decision would be.",
          ],
        },
        {
          h: "was about to / was to / was due to",
          p: [
            "'Was about to + verb' = on the point of doing something: 'I was about to leave when the phone rang.' Add 'just' for extra immediacy.",
            "'Was to + verb' (formal) marks a destined or officially arranged event: 'The president was to visit the region in May.' 'Was due to' is similar for schedules: 'The train was due to arrive at six, but it was late.'",
          ],
          ex: [
            "I was just about to email you when you called.",
            "The two leaders were to meet again the following year.",
            "The flight was due to depart at 9:40, but it was delayed by fog.",
          ],
        },
      ],
      tip: "'Was going to' very often signals a broken plan — listeners expect a 'but'. If the plan actually happened, past simple is usually enough: 'I visited Bukhara', not 'I was going to visit Bukhara.'",
      examples: [
        "I was going to text you, but I fell asleep.",
        "Nobody guessed the small company would grow so fast.",
        "The conference was due to start at nine, but the speaker was about to cancel.",
      ],
      mistakes: [
        { x: "She said she will call me yesterday evening.", v: "She said she would call me. — in past reporting, will shifts to would" },
        { x: "I was going to called you.", v: "I was going to call you. — after 'going to', use the base form of the verb" },
        { x: "I was about leaving when he arrived.", v: "I was about to leave when he arrived. — the pattern is 'be about to + infinitive'" },
      ],
      quiz: [
        { q: "I ___ call you, but my phone died.", o: ["will", "was going to", "am going to", "would to"], a: 1, e: "A past intention that failed → was going to + verb.", d: "easy" },
        { q: "She promised she ___ help us with the move.", o: ["will", "is going to", "would", "shall"], a: 2, e: "Reported from the past: will → would.", d: "easy" },
        { q: "I was just ___ leave when the phone rang.", o: ["about to", "going", "about", "due"], a: 0, e: "'Be about to + verb' = on the point of doing something.", d: "easy" },
        { q: "He moved to Tashkent in 1998, where he ___ the next twenty years.", o: ["will spend", "was spending", "would spend", "spends"], a: 2, e: "Narrative future in the past → would spend.", d: "medium" },
        { q: "The train ___ arrive at six, but it was forty minutes late.", o: ["was due to", "would due to", "is due to", "was due"], a: 0, e: "Scheduled past event → was due to + verb.", d: "medium" },
        { q: "Which sentence most strongly suggests the plan did NOT happen?", o: ["We drove to Samarkand last weekend.", "We were going to drive to Samarkand.", "We would often drive to Samarkand.", "We had driven to Samarkand."], a: 1, e: "'Was/were going to' typically introduces an unfulfilled plan.", d: "medium" },
        { q: "'The ceremony was to take place in Registan Square.' 'Was to' expresses…", o: ["a habit", "an official arrangement", "an ability", "a regret"], a: 1, e: "Formal 'was to + verb' marks an official or destined arrangement.", d: "hard" },
        { q: "Direct: 'The results will be published on Friday.' → They said the results ___ on Friday.", o: ["will be published", "would be published", "were published", "would publish"], a: 1, e: "Shift will → would and keep the passive: would be published.", d: "medium" },
        { q: "Looking at the black clouds, we knew it ___ rain.", o: ["was going to", "would to", "will", "is about to"], a: 0, e: "A past prediction from evidence → was going to rain.", d: "medium" },
        { q: "Which sentence is wrong?", o: ["I was about to call you.", "I was going to call you.", "I would call you the next day, I promised.", "I was going to called you."], a: 3, e: "After 'going to' the verb stays in the base form: going to call.", d: "hard" },
      ],
      tr: {
        situation: P(
          "Rustam: \"You missed the meeting yesterday!\" Kamola: \"I was going to join online, but the electricity went off.\" — o'tmishdagi reja amalga oshmadi, buni 'was going to' ko'rsatadi.",
          "Rustam: «You missed the meeting yesterday!» Kamola: «I was going to join online, but the electricity went off.» — план из прошлого не сбылся, на это указывает 'was going to'."
        ),
        tip: P(
          "'Was going to' ko'pincha buzilgan rejani bildiradi — tinglovchi 'but' kutadi. Reja amalga oshgan bo'lsa, odatda past simple kifoya: 'I visited Bukhara', 'I was going to visit Bukhara' emas.",
          "'Was going to' чаще всего сигнализирует о сорвавшемся плане — слушатель ждёт 'but'. Если план осуществился, обычно достаточно past simple: 'I visited Bukhara', а не 'I was going to visit Bukhara'."
        ),
        blocks: [
          {
            h: P("G'oya: kechagi kunning ertasi", "Идея: завтра, увиденное из вчера"),
            p: [
              P("Ingliz tili o'tmishdagi paytda hali oldinda turgan voqealarni aytish uchun kelasi zamon shakllarini o'tgan zamonga suradi. Will — would, is going to — was going to, is about to — was about to bo'ladi.", "Английский сдвигает будущие формы в прошлое, чтобы описать то, что ещё было впереди в прошлый момент. Will становится would, is going to — was going to, is about to — was about to."),
              P("Bu hikoya qilishda va reported speech'da doim kerak: 'She said she would call' o'tmishdan turib 'I will call' ni yetkazadi.", "Это постоянно нужно в повествовании и в reported speech: 'She said she would call' передаёт 'I will call' из прошлого."),
            ],
          },
          {
            h: P("was/were going to: o'tmishdagi rejalar va niyatlar", "was/were going to: планы и намерения в прошлом"),
            p: [
              P("'Was/were going to + fe'l' o'tmishda mavjud bo'lgan rejani bildiradi. Ko'pincha reja amalga OSHMAGAN bo'ladi va gap but bilan davom etadi: 'I was going to study abroad, but my visa was refused.'", "'Was/were going to + глагол' описывает план, существовавший в прошлом. Очень часто план НЕ осуществился, и предложение продолжается с but: 'I was going to study abroad, but my visa was refused.'"),
              P("U amalga oshgan o'tmish bashoratini ham bildira oladi: 'I knew it was going to rain — and it did.'", "Он может описывать и сбывшийся прогноз из прошлого: 'I knew it was going to rain — and it did.'"),
            ],
          },
          {
            h: P("would: hikoya o'tmishidan ko'ringan kelajak", "would: будущее, увиденное из повествовательного прошлого"),
            p: [
              P("Hikoya va hisobotlarda 'would' o'sha paytda hali kelajakda bo'lgan voqealarni belgilaydi: 'At twenty he moved to Tashkent, where he would spend the rest of his life.'", "В рассказах и отчётах 'would' отмечает события, которые в тот момент были ещё впереди: 'At twenty he moved to Tashkent, where he would spend the rest of his life.'"),
              P("Bu biografiya va tarixiy matnlarda keng tarqalgan — hikoyachi natijani allaqachon biladi va o'tmishdagi nuqtadan oldinga qaraydi.", "Это типично для биографий и исторических текстов — рассказчик уже знает исход и смотрит вперёд из прошлого момента."),
            ],
          },
          {
            h: P("was about to / was to / was due to", "was about to / was to / was due to"),
            p: [
              P("'Was about to + fe'l' = biror ishni qilish arafasida bo'lmoq: 'I was about to leave when the phone rang.' Yana ham yaqinlik uchun 'just' qo'shing.", "'Was about to + глагол' = быть на грани действия: 'I was about to leave when the phone rang.' Для большей непосредственности добавьте 'just'."),
              P("'Was to + fe'l' (rasmiy) taqdir qilingan yoki rasmiy belgilangan voqeani bildiradi: 'The president was to visit the region in May.' Jadval uchun 'was due to' o'xshash: 'The train was due to arrive at six, but it was late.'", "'Was to + глагол' (формально) отмечает предначертанное или официально запланированное событие: 'The president was to visit the region in May.' Для расписаний похоже работает 'was due to': 'The train was due to arrive at six, but it was late.'"),
            ],
          },
        ],
        quiz: [
          P("Amalga oshmagan o'tmish niyati → was going to + fe'l.", "Несбывшееся намерение в прошлом → was going to + глагол."),
          P("O'tmishdan yetkazilgan gap: will → would.", "Передача из прошлого: will → would."),
          P("'Be about to + fe'l' = biror ishni qilish arafasida bo'lmoq.", "'Be about to + глагол' = быть на грани действия."),
          P("Hikoyada o'tmishdan ko'ringan kelajak → would spend.", "Повествовательное будущее в прошлом → would spend."),
          P("O'tmishdagi jadval bo'yicha voqea → was due to + fe'l.", "Событие по расписанию в прошлом → was due to + глагол."),
          P("'Was/were going to' odatda amalga oshmagan rejani kiritadi.", "'Was/were going to' обычно вводит несбывшийся план."),
          P("Rasmiy 'was to + fe'l' rasmiy yoki taqdir qilingan kelishuvni bildiradi.", "Формальное 'was to + глагол' отмечает официальную или предначертанную договорённость."),
          P("Will → would ga suriladi, passiv saqlanadi: would be published.", "Will сдвигается в would, пассив сохраняется: would be published."),
          P("Dalilga asoslangan o'tmish bashorati → was going to rain.", "Прогноз в прошлом на основе признаков → was going to rain."),
          P("'Going to' dan keyin fe'l asosiy shaklda qoladi: going to call.", "После 'going to' глагол остаётся в начальной форме: going to call."),
        ],
      },
    },

    // ============================================================
    // B2 g18 — Unreal past: it's time, would rather, as if
    // ============================================================
    {
      id: "g18",
      title: "Unreal past: it's time, would rather, as if",
      lead: "'It's time we left.' 'I'd rather you didn't.' English uses past forms with present meaning to sound diplomatic, critical or hypothetical — master this hidden system.",
      leadTr: P(
        "'It's time we left.' 'I'd rather you didn't.' Ingliz tili diplomatik, tanqidiy yoki farazli ohang uchun hozirgi ma'noda o'tgan zamon shakllarini ishlatadi — bu yashirin tizimni egallang.",
        "'It's time we left.' 'I'd rather you didn't.' Английский использует прошедшие формы с настоящим значением, чтобы звучать дипломатично, критично или гипотетично — освойте эту скрытую систему."
      ),
      situation: "It's 11 p.m. at the office. Kamola: \"It's high time we went home — you look as if you hadn't slept for days.\" Rustam: \"One more email…\" Kamola: \"I'd rather you finished it tomorrow. Suppose the system crashed right now — you'd lose it all anyway.\"",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "It's time + past simple",
          p: [
            "After 'It's time + subject', use the past simple with present or future meaning: 'It's time we left' = we should leave now. Adding 'high' or 'about' adds impatience: 'It's high time the government fixed these roads.'",
            "Compare the neutral infinitive version: 'It's time to leave' simply states the time; 'It's time we left' hints that we are already late.",
          ],
          ex: [
            "It's time you found your own apartment.",
            "It's high time this old bridge was repaired.",
            "It's time to go. / It's time we went.",
          ],
        },
        {
          h: "would rather + subject + past",
          p: [
            "When you prefer that ANOTHER person do something, use 'would rather + subject + past simple': 'I'd rather you didn't smoke here.' The past form refers to now or the future.",
            "When the same person is the subject of both, use the bare infinitive instead: 'I'd rather stay home tonight.' Do not mix the two patterns up.",
          ],
          ex: [
            "I'd rather you paid me in cash.",
            "She'd rather her son studied medicine, but he loves design.",
            "I'd rather walk than take the bus. (same subject → infinitive)",
          ],
        },
        {
          h: "as if / as though + unreal past",
          p: [
            "Use a past form after 'as if / as though' when the comparison is unreal or doubtful: 'He talks as if he owned the company' — he doesn't. For an unreal past comparison, use the past perfect: 'She looked as if she had seen a ghost.'",
            "If the comparison may well be true, a present form is fine: 'It looks as if it's going to rain.'",
          ],
          ex: [
            "He spends money as if he were a millionaire.",
            "You look as though you hadn't slept at all.",
            "It sounds as if the meeting went well. (probably real)",
          ],
        },
        {
          h: "suppose / what if / imagine + past",
          p: [
            "'Suppose', 'supposing', 'what if' and 'imagine' also take the unreal past for hypothetical situations now or in the future: 'Suppose you lost your job — what would you do?'",
            "With the past perfect they reach back to unreal past situations: 'Imagine we had never met.' In all these patterns, formal English prefers 'were' for all persons: 'as if he were', 'suppose she were'.",
          ],
          ex: [
            "What if we moved the launch to September?",
            "Suppose Kamola were the team lead — would anything change?",
            "Imagine you had grown up in Samarkand.",
          ],
        },
      ],
      tip: "Past form ≠ past time. In all these structures the past simple points at the present or future; only the past perfect points at the past: 'as if he knew' (now) vs 'as if he had known' (then).",
      examples: [
        "It's high time we booked the tickets — prices keep rising.",
        "I'd rather you told me the truth now than apologised later.",
        "He gives orders as if he were the director.",
      ],
      mistakes: [
        { x: "It's time we go home.", v: "It's time we went home. — after 'it's time + subject', use the past simple" },
        { x: "I'd rather you don't call me after 10 p.m.", v: "I'd rather you didn't call me after 10 p.m. — 'would rather + subject' takes the past form" },
        { x: "She acts as if she knows everything about it. (she clearly doesn't)", v: "She acts as if she knew everything about it. — unreal comparisons take the past form" },
      ],
      quiz: [
        { q: "It's high time we ___ home — it's almost midnight.", o: ["go", "went", "will go", "have gone"], a: 1, e: "'It's (high) time + subject' takes the past simple with present meaning.", d: "easy" },
        { q: "I'd rather you ___ me tomorrow, not tonight.", o: ["call", "called", "will call", "to call"], a: 1, e: "'Would rather + different subject' takes the past simple.", d: "easy" },
        { q: "He talks as if he ___ the company. (he doesn't)", o: ["owns", "owned", "will own", "had owning"], a: 1, e: "Unreal present comparison after 'as if' → past simple: owned.", d: "easy" },
        { q: "She looked as if she ___ a ghost.", o: ["sees", "saw", "had seen", "has seen"], a: 2, e: "Unreal comparison about an earlier moment → past perfect: had seen.", d: "medium" },
        { q: "I'd rather ___ at home tonight. (same subject)", o: ["stayed", "to stay", "stay", "staying"], a: 2, e: "Same subject after 'would rather' → bare infinitive: stay.", d: "medium" },
        { q: "Suppose you ___ your job — what would you do?", o: ["lose", "lost", "will lose", "are losing"], a: 1, e: "'Suppose' + hypothetical present/future → past simple: lost.", d: "medium" },
        { q: "Which sentence suggests we are already late?", o: ["It's time to leave.", "It's time we left.", "It's time for leaving.", "It will be time to leave."], a: 1, e: "'It's time we left' (past form) implies the action is overdue.", d: "hard" },
        { q: "'It looks as if it ___ going to rain.' (a real possibility)", o: ["were", "is", "had been", "would"], a: 1, e: "When the comparison is probably true, use a present form: it looks as if it is going to rain.", d: "medium" },
        { q: "Choose the most formal version: 'He behaves as if he ___ the boss.'", o: ["was", "were", "is", "be"], a: 1, e: "Formal English prefers 'were' for all persons in unreal comparisons.", d: "hard" },
        { q: "Imagine we ___ in Samarkand instead of Tashkent. (unreal past)", o: ["grew up", "had grown up", "have grown up", "grow up"], a: 1, e: "An unreal situation in the past → past perfect: had grown up.", d: "medium" },
      ],
      tr: {
        situation: P(
          "Kechki soat 11, ofis. Kamola: \"It's high time we went home — you look as if you hadn't slept for days.\" — o'tgan zamon shakllari bu yerda hozirgi vaziyat haqida.",
          "11 вечера, офис. Kamola: «It's high time we went home — you look as if you hadn't slept for days.» — прошедшие формы здесь говорят о настоящем."
        ),
        tip: P(
          "O'tgan zamon shakli ≠ o'tgan vaqt. Bu qurilmalarning barchasida past simple hozirgi yoki kelajakka ishora qiladi; faqat past perfect o'tmishga qaraydi: 'as if he knew' (hozir) va 'as if he had known' (o'shanda).",
          "Прошедшая форма ≠ прошедшее время. Во всех этих конструкциях past simple указывает на настоящее или будущее; только past perfect — на прошлое: 'as if he knew' (сейчас) и 'as if he had known' (тогда)."
        ),
        blocks: [
          {
            h: P("It's time + past simple", "It's time + past simple"),
            p: [
              P("'It's time + ega' dan keyin hozirgi yoki kelajak ma'nosida past simple ishlatiladi: 'It's time we left' = hozir ketishimiz kerak. 'High' yoki 'about' qo'shilsa, sabrsizlik ohang qo'shiladi: 'It's high time the government fixed these roads.'", "После 'It's time + подлежащее' используется past simple со значением настоящего или будущего: 'It's time we left' = нам пора уходить. 'High' или 'about' добавляют нетерпение: 'It's high time the government fixed these roads.'"),
              P("Neytral infinitivli variant bilan solishtiring: 'It's time to leave' shunchaki vaqtni aytadi; 'It's time we left' allaqachon kechikayotganimizga ishora qiladi.", "Сравните с нейтральным инфинитивным вариантом: 'It's time to leave' просто констатирует время; 'It's time we left' намекает, что мы уже опаздываем."),
            ],
          },
          {
            h: P("would rather + ega + o'tgan zamon", "would rather + подлежащее + прошедшее время"),
            p: [
              P("BOSHQA odam biror ish qilishini istasangiz, 'would rather + ega + past simple' ishlating: 'I'd rather you didn't smoke here.' O'tgan shakl hozirgi yoki kelajakka tegishli.", "Когда вы предпочитаете, чтобы что-то сделал ДРУГОЙ человек, используйте 'would rather + подлежащее + past simple': 'I'd rather you didn't smoke here.' Прошедшая форма относится к настоящему или будущему."),
              P("Ikkala qismda ham bir kishi bo'lsa, to'siqsiz infinitiv ishlatiladi: 'I'd rather stay home tonight.' Ikki qolipni aralashtirib yubormang.", "Если субъект один и тот же, используется инфинитив без to: 'I'd rather stay home tonight.' Не путайте эти два шаблона."),
            ],
          },
          {
            h: P("as if / as though + noreal o'tgan zamon", "as if / as though + нереальное прошедшее"),
            p: [
              P("Qiyoslash noreal yoki shubhali bo'lsa, 'as if / as though' dan keyin o'tgan shakl ishlating: 'He talks as if he owned the company' — aslida egasi emas. Noreal o'tmish qiyosi uchun past perfect: 'She looked as if she had seen a ghost.'", "Используйте прошедшую форму после 'as if / as though', когда сравнение нереально или сомнительно: 'He talks as if he owned the company' — компанией он не владеет. Для нереального сравнения о прошлом — past perfect: 'She looked as if she had seen a ghost.'"),
              P("Qiyoslash haqiqatga yaqin bo'lsa, hozirgi shakl ham bo'laveradi: 'It looks as if it's going to rain.'", "Если сравнение вполне может быть правдой, допустима форма настоящего: 'It looks as if it's going to rain.'"),
            ],
          },
          {
            h: P("suppose / what if / imagine + o'tgan zamon", "suppose / what if / imagine + прошедшее время"),
            p: [
              P("'Suppose', 'supposing', 'what if' va 'imagine' ham hozirgi yoki kelajakdagi farazlar uchun noreal o'tgan zamonni oladi: 'Suppose you lost your job — what would you do?'", "'Suppose', 'supposing', 'what if' и 'imagine' тоже берут нереальное прошедшее для гипотез о настоящем или будущем: 'Suppose you lost your job — what would you do?'"),
              P("Past perfect bilan ular noreal o'tmish vaziyatlariga qaytadi: 'Imagine we had never met.' Bu qoliplarning barchasida rasmiy ingliz tili barcha shaxslar uchun 'were' ni afzal ko'radi: 'as if he were', 'suppose she were'.", "С past perfect они обращаются к нереальным ситуациям прошлого: 'Imagine we had never met.' Во всех этих шаблонах формальный английский предпочитает 'were' для всех лиц: 'as if he were', 'suppose she were'."),
            ],
          },
        ],
        quiz: [
          P("'It's (high) time + ega' hozirgi ma'noda past simple oladi.", "'It's (high) time + подлежащее' берёт past simple со значением настоящего."),
          P("'Would rather + boshqa ega' past simple oladi.", "'Would rather + другое подлежащее' берёт past simple."),
          P("'As if' dan keyingi noreal hozirgi qiyos → past simple: owned.", "Нереальное сравнение о настоящем после 'as if' → past simple: owned."),
          P("Oldinroq bo'lgan noreal qiyos → past perfect: had seen.", "Нереальное сравнение о более раннем моменте → past perfect: had seen."),
          P("'Would rather' dan keyin bir xil ega → to'siqsiz infinitiv: stay.", "После 'would rather' при одном субъекте → инфинитив без to: stay."),
          P("'Suppose' + hozirgi/kelajak farazi → past simple: lost.", "'Suppose' + гипотеза о настоящем/будущем → past simple: lost."),
          P("'It's time we left' (o'tgan shakl) ish kechikkanini bildiradi.", "'It's time we left' (прошедшая форма) намекает, что действие запаздывает."),
          P("Qiyos haqiqatga yaqin bo'lsa, hozirgi shakl ishlatiladi: it looks as if it is going to rain.", "Если сравнение правдоподобно, используется форма настоящего: it looks as if it is going to rain."),
          P("Rasmiy ingliz tili noreal qiyoslarda barcha shaxslar uchun 'were' ni afzal ko'radi.", "Формальный английский предпочитает 'were' для всех лиц в нереальных сравнениях."),
          P("O'tmishdagi noreal vaziyat → past perfect: had grown up.", "Нереальная ситуация в прошлом → past perfect: had grown up."),
        ],
      },
    },
  ],
};
