// New C1 grammar lessons (g4–g6): hedging & distancing, nominalisation, participle clauses.
const P = (uz, ru) => ({ uz, ru });

export const NEW_GRAMMAR_3 = {
  C1: [
    {
      id: "g4",
      title: "Hedging & distancing language",
      lead: "Present claims without full commitment: seem, appear, reportedly, and passive reporting structures let you sound cautious, objective and professionally careful.",
      leadTr: P(
        "Fikrni to'liq zimmangizga olmasdan bayon qiling: seem, appear, reportedly va passiv reporting tuzilmalari ehtiyotkor, xolis va professional ohang beradi.",
        "Излагайте утверждения без полной ответственности за них: seem, appear, reportedly и пассивные конструкции сообщения придают осторожный, объективный тон."
      ),
      situation: "A journalist writes: 'The minister is believed to have approved the deal, which allegedly took place last spring.' Not a single claim is stated as bare fact — every statement is carefully distanced from the writer.",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "Why hedge? The commitment scale",
          p: [
            "In academic and professional English, stating everything as certain fact sounds naive — or legally risky. Hedging places your claim on a scale from full commitment ('X causes Y') down to cautious suggestion ('X may contribute to Y').",
            "Compare the registers: neutral speech says 'This proves the drug works'; a careful paper says 'These results would suggest that the drug is effective.' The second writer can still be right — and can never be accused of overclaiming.",
          ],
          ex: [
            "The data suggest a link between screen time and sleep quality.",
            "There would seem to be a flaw in this argument.",
            "This is arguably the most significant finding of the decade.",
          ],
        },
        {
          h: "seem and appear",
          p: [
            "Both verbs take three main patterns: subject + seem/appear + to-infinitive ('He seems to know'); It seems/appears + that-clause ('It appears that prices will fall'); and There seems/appears to be + noun ('There seems to be a problem').",
            "To refer to the past, use the perfect infinitive: 'She seems to have left early' = it looks as though she left early. 'It would seem/appear that…' is one degree more tentative than 'It seems that…'.",
          ],
          ex: [
            "The committee appears to have ignored the warning.",
            "It would appear that the files were deleted deliberately.",
            "There seems to be no record of the payment.",
          ],
        },
        {
          h: "Passive reporting structures",
          p: [
            "Formal writing distances a claim by attributing it to unnamed sources. Pattern A: It + passive reporting verb + that-clause — 'It is said/thought/believed/reported that the company is in trouble.'",
            "Pattern B moves the person into subject position: subject + passive verb + to-infinitive — 'He is said to be in trouble.' For past reference, use the perfect infinitive: 'He is believed to have left the country.'",
          ],
          ex: [
            "It is widely believed that the talks have stalled.",
            "The painting is thought to be worth two million pounds.",
            "The suspects are reported to have crossed the border on Friday.",
          ],
        },
        {
          h: "Adverbs and other softeners",
          p: [
            "Distancing adverbs compress a whole reporting structure into one word: reportedly (= it is reported that), allegedly (= it is claimed, but unproven — essential in journalism), apparently, presumably, seemingly.",
            "Other common hedges: 'tend to' for cautious generalisations ('Reviewers tend to favour longer papers'), 'may well' / 'could well' for likely possibilities, and 'is likely/unlikely to' for predictions without promises.",
          ],
          ex: [
            "The CEO has reportedly resigned, though the company has not confirmed it.",
            "The defendant allegedly transferred the funds to an offshore account.",
            "Interest rates may well rise again before December.",
          ],
        },
      ],
      tip: "For past reference inside seem/appear and passive reporting patterns, switch to the perfect infinitive: 'She is thought to have resigned' (past), not 'She is thought to resign.' The tense of the reporting verb stays present.",
      examples: [
        "It would seem that the original estimate was far too optimistic.",
        "The virus is believed to have originated in wild bird populations.",
        "The two ministers allegedly met in private, and the government has presumably known about it for weeks.",
      ],
      mistakes: [
        { x: "It seems that he to be tired.", v: "It seems that he is tired — after 'It seems that', use a normal finite clause, not an infinitive." },
        { x: "He is said that he lives abroad.", v: "He is said to live abroad — with a personal subject, the pattern is passive verb + to-infinitive." },
        { x: "She is thought to resign last month.", v: "She is thought to have resigned last month — past reference needs the perfect infinitive." },
      ],
      quiz: [
        {
          q: "Choose the most distanced version: '___ the CEO has resigned.'",
          o: ["It is believed that", "Everyone knows that", "I'm certain that", "Obviously"],
          a: 0,
          e: "The passive reporting verb 'It is believed that' detaches the claim from the writer.",
          d: "medium",
        },
        {
          q: "The company is reported ___ heavy losses last year.",
          o: ["to suffer", "to have suffered", "suffering", "that it suffered"],
          a: 1,
          e: "Past reference ('last year') after a reporting passive needs the perfect infinitive.",
          d: "hard",
        },
        {
          q: "There ___ to be a mistake in these figures.",
          o: ["appears", "is appearing", "appear", "appearing"],
          a: 0,
          e: "'There appears to be' — a fixed hedging pattern; appear is a state verb here, so no continuous.",
          d: "medium",
        },
        {
          q: "Which adverb marks an accusation as unproven?",
          o: ["undoubtedly", "certainly", "clearly", "allegedly"],
          a: 3,
          e: "'Allegedly' flags a claim as unverified — standard in careful journalism.",
          d: "medium",
        },
        {
          q: "He ___ said to live somewhere in Scotland.",
          o: ["is being", "has", "is", "was being"],
          a: 2,
          e: "Personal-subject pattern: subject + is said + to-infinitive.",
          d: "medium",
        },
        {
          q: "Most natural academic hedge: 'The results ___ that the drug is effective.'",
          o: ["prove", "insist", "claim", "suggest"],
          a: 3,
          e: "'Suggest' keeps the claim cautious; 'prove' commits the writer completely.",
          d: "medium",
        },
        {
          q: "It would ___ that the samples were contaminated.",
          o: ["seem", "seems", "seeming", "to seem"],
          a: 0,
          e: "'It would seem that…' — the bare infinitive after would; an extra-tentative version of 'it seems'.",
          d: "medium",
        },
        {
          q: "The minister is thought ___ the meeting yesterday, though nothing is confirmed.",
          o: ["to attend", "attending", "to have attended", "that he attended"],
          a: 2,
          e: "'Yesterday' points to the past, so the perfect infinitive 'to have attended' is required.",
          d: "hard",
        },
        {
          q: "Which sentence contains a hedge?",
          o: ["The plan will fail.", "The plan tends to attract criticism.", "The plan failed.", "The plan is a failure."],
          a: 1,
          e: "'Tends to' turns a blunt claim into a cautious generalisation.",
          d: "hard",
        },
        {
          q: "'She didn't reply to my email.' Choose the most distanced, diplomatic rewrite.",
          o: ["She ignored me.", "She refuses to answer.", "She appears not to have received my email.", "She never answers anyone."],
          a: 2,
          e: "'Appears not to have received' offers an innocent explanation instead of an accusation.",
          d: "hard",
        },
      ],
      tr: {
        situation: P(
          "Jurnalist yozadi: 'The minister is believed to have approved the deal, which allegedly took place last spring.' Birorta ham fikr quruq fakt sifatida aytilmagan — har bir gap muallifdan ehtiyotkorlik bilan uzoqlashtirilgan.",
          "Журналист пишет: 'The minister is believed to have approved the deal, which allegedly took place last spring.' Ни одно утверждение не подано как голый факт — каждое аккуратно отстранено от автора."
        ),
        tip: P(
          "seem/appear va passiv reporting qoliplarida o'tgan zamonga ishora uchun perfect infinitive ishlating: 'She is thought to have resigned' (o'tgan), 'She is thought to resign' emas. Reporting fe'lning zamoni hozirgi bo'lib qolaveradi.",
          "Для отсылки к прошлому внутри seem/appear и пассивных конструкций используйте перфектный инфинитив: 'She is thought to have resigned' (прошлое), а не 'She is thought to resign'. Время самого глагола сообщения остаётся настоящим."
        ),
        blocks: [
          {
            h: P("Nega hedging kerak? Ishonch shkalasi", "Зачем хеджировать? Шкала уверенности"),
            p: [
              P(
                "Akademik va professional ingliz tilida hamma narsani aniq fakt sifatida aytish sodda — yoki huquqiy jihatdan xavfli — eshitiladi. Hedging fikringizni to'liq ishonchdan ('X causes Y') ehtiyotkor taxmin darajasigacha ('X may contribute to Y') joylashtiradi.",
                "В академическом и профессиональном английском подавать всё как несомненный факт звучит наивно — или юридически рискованно. Хеджирование помещает утверждение на шкалу от полной уверенности ('X causes Y') до осторожного предположения ('X may contribute to Y')."
              ),
              P(
                "Registrlarni solishtiring: oddiy nutqda 'This proves the drug works' deyiladi; ehtiyotkor maqolada esa 'These results would suggest that the drug is effective.' Ikkinchi muallif baribir haq bo'lishi mumkin — lekin uni hech qachon mubolag'ada ayblab bo'lmaydi.",
                "Сравните регистры: в нейтральной речи — 'This proves the drug works'; в аккуратной статье — 'These results would suggest that the drug is effective.' Второй автор может быть прав — и его никогда не обвинят в преувеличении."
              ),
            ],
          },
          {
            h: P("seem va appear", "seem и appear"),
            p: [
              P(
                "Ikkala fe'l uchta asosiy qolipda keladi: ega + seem/appear + to-infinitive ('He seems to know'); It seems/appears + that-gap ('It appears that prices will fall'); There seems/appears to be + ot ('There seems to be a problem').",
                "Оба глагола употребляются в трёх основных моделях: подлежащее + seem/appear + to-инфинитив ('He seems to know'); It seems/appears + придаточное с that ('It appears that prices will fall'); There seems/appears to be + существительное ('There seems to be a problem')."
              ),
              P(
                "O'tgan zamonga ishora uchun perfect infinitive ishlatiladi: 'She seems to have left early' = u erta ketganga o'xshaydi. 'It would seem/appear that…' — 'It seems that…' dan yana bir daraja ehtiyotkorroq.",
                "Для отсылки к прошлому используется перфектный инфинитив: 'She seems to have left early' = похоже, она рано ушла. 'It would seem/appear that…' — ещё на ступень осторожнее, чем 'It seems that…'."
              ),
            ],
          },
          {
            h: P("Passiv reporting tuzilmalari", "Пассивные конструкции сообщения"),
            p: [
              P(
                "Rasmiy matn fikrni noma'lum manbalarga bog'lab uzoqlashtiradi. A qolip: It + passiv reporting fe'l + that-gap — 'It is said/thought/believed/reported that the company is in trouble.'",
                "Формальный текст отстраняет утверждение, приписывая его неназванным источникам. Модель A: It + пассивный глагол сообщения + придаточное с that — 'It is said/thought/believed/reported that the company is in trouble.'"
              ),
              P(
                "B qolipda shaxs ega o'rniga chiqadi: ega + passiv fe'l + to-infinitive — 'He is said to be in trouble.' O'tgan zamon uchun perfect infinitive: 'He is believed to have left the country.'",
                "В модели B лицо становится подлежащим: подлежащее + пассивный глагол + to-инфинитив — 'He is said to be in trouble.' Для прошлого — перфектный инфинитив: 'He is believed to have left the country.'"
              ),
            ],
          },
          {
            h: P("Ravishlar va boshqa yumshatuvchilar", "Наречия и другие смягчители"),
            p: [
              P(
                "Distancing ravishlari butun reporting tuzilmani bitta so'zga siqadi: reportedly (= it is reported that), allegedly (= da'vo qilinadi, lekin isbotlanmagan — jurnalistikada zarur), apparently, presumably, seemingly.",
                "Дистанцирующие наречия сжимают целую конструкцию сообщения в одно слово: reportedly (= it is reported that), allegedly (= утверждается, но не доказано — необходимо в журналистике), apparently, presumably, seemingly."
              ),
              P(
                "Boshqa keng tarqalgan hedgelar: ehtiyotkor umumlashtirish uchun 'tend to' ('Reviewers tend to favour longer papers'), ehtimoli yuqori holatlar uchun 'may well' / 'could well', va'dasiz bashorat uchun 'is likely/unlikely to'.",
                "Другие частые хеджи: 'tend to' для осторожных обобщений ('Reviewers tend to favour longer papers'), 'may well' / 'could well' для вероятных возможностей, 'is likely/unlikely to' для прогнозов без обещаний."
              ),
            ],
          },
        ],
        quiz: [
          P("Passiv reporting fe'li 'It is believed that' fikrni muallifdan uzoqlashtiradi.", "Пассивная конструкция 'It is believed that' отстраняет утверждение от автора."),
          P("O'tgan zamonga ishora ('last year') reporting passivdan keyin perfect infinitive talab qiladi: to have suffered.", "Отсылка к прошлому ('last year') после пассива сообщения требует перфектного инфинитива: to have suffered."),
          P("'There appears to be' — turg'un hedging qolipi; appear holat fe'li, continuous ishlatilmaydi.", "'There appears to be' — устойчивая модель хеджирования; appear — глагол состояния, continuous не нужен."),
          P("'Allegedly' ayblovni isbotlanmagan deb belgilaydi — ehtiyotkor jurnalistikaning standarti.", "'Allegedly' помечает обвинение как недоказанное — стандарт аккуратной журналистики."),
          P("Shaxs-ega qolipi: ega + is said + to-infinitive.", "Модель с личным подлежащим: подлежащее + is said + to-инфинитив."),
          P("'Suggest' fikrni ehtiyotkor saqlaydi; 'prove' muallifni to'liq majburiyatga soladi.", "'Suggest' сохраняет осторожность; 'prove' полностью связывает автора обязательством."),
          P("'It would seem that…' — would dan keyin yalang'och infinitiv; 'it seems' ning yanada ehtiyotkor varianti.", "'It would seem that…' — после would голый инфинитив; ещё более осторожный вариант 'it seems'."),
          P("'Yesterday' o'tgan zamonni ko'rsatadi, shuning uchun perfect infinitive 'to have attended' kerak.", "'Yesterday' указывает на прошлое, поэтому нужен перфектный инфинитив 'to have attended'."),
          P("'Tends to' keskin da'voni ehtiyotkor umumlashtirishga aylantiradi.", "'Tends to' превращает резкое заявление в осторожное обобщение."),
          P("'Appears not to have received' ayblash o'rniga begunoh izoh taklif qiladi.", "'Appears not to have received' предлагает невинное объяснение вместо обвинения."),
        ],
      },
    },
    {
      id: "g5",
      title: "Nominalisation & academic style",
      lead: "Turn verbs and adjectives into nouns — 'we analysed the data' becomes 'our analysis of the data' — to write the dense, impersonal prose of reports and academic papers.",
      leadTr: P(
        "Fe'l va sifatlarni otga aylantiring — 'we analysed the data' 'our analysis of the data' bo'ladi — hisobot va ilmiy maqolalarning zich, shaxssiz uslubida yozish uchun.",
        "Превращайте глаголы и прилагательные в существительные — 'we analysed the data' становится 'our analysis of the data' — так пишется плотная, безличная проза отчётов и научных статей."
      ),
      situation: "A colleague's email says: 'We decided to expand quickly, and this caused problems.' The annual report renders the same idea as: 'The decision to expand rapidly gave rise to a number of difficulties.' Same facts — entirely different register, built on nouns.",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "What nominalisation is",
          p: [
            "Nominalisation converts a verb or adjective into a noun: decide → decision, grow → growth, fail → failure, refuse → refusal, accurate → accuracy, reluctant → reluctance. The action or quality becomes a 'thing' you can then describe, measure and connect.",
            "Once nominalised, the idea takes adjectives instead of adverbs: 'prices grew rapidly' → 'the rapid growth in prices'. The grammar of the whole sentence reorganises itself around the new noun.",
          ],
          ex: [
            "They refused to cooperate. → Their refusal to cooperate surprised us.",
            "The engine failed. → The failure of the engine delayed the launch.",
            "She argued persuasively. → Her persuasive argument won the debate.",
          ],
        },
        {
          h: "Why formal writing prefers nouns",
          p: [
            "Nominalisation packs a full clause into a noun phrase, freeing the verb slot for a new claim: 'The growth in exports [whole previous idea] has masked a decline in quality [new idea].' It also removes people, making prose impersonal: 'we analysed' → 'the analysis'.",
            "This is why official and academic English feels noun-heavy: each sentence stands on the compressed shoulders of the previous one.",
          ],
          ex: [
            "The committee's rejection of the proposal ended the negotiations.",
            "A further reduction in staff numbers is expected.",
            "The investigation revealed serious shortcomings in the process.",
          ],
        },
        {
          h: "Patterns and light-verb partners",
          p: [
            "The commonest frame is the + noun + of/in/to + noun: 'the introduction of the tax', 'the rise in unemployment', 'the response to the crisis'. Choose the preposition the noun demands — it often differs from the verb's.",
            "Nominalisations also pair with specific 'light' verbs: make a decision/an assessment, reach a conclusion/an agreement, hold a discussion, undergo a transformation, give rise to problems. The light verb carries the grammar; the noun carries the meaning.",
          ],
          ex: [
            "The board reached an agreement on the merger terms.",
            "The industry has undergone a profound transformation.",
            "Management held a discussion about the restructuring.",
          ],
        },
        {
          h: "Cohesion — and knowing when to stop",
          p: [
            "A powerful cohesive trick: summarise the previous sentence with this + nominalisation. 'Many staff refused to relocate. This refusal forced a rethink of the whole plan.' The noun bundles the old information and pushes the text forward.",
            "But over-nominalisation kills prose: 'We carried out an investigation into the causes of the failure of the engine' says nothing that 'We investigated why the engine failed' doesn't say better. In plain, direct writing — emails, instructions — prefer strong verbs; save dense noun style for formal reports.",
          ],
          ex: [
            "Sales fell sharply in March. This decline alarmed investors.",
            "Heavy: The implementation of the improvement of the process… → Better: Improving the process…",
            "The minister resigned. Her resignation triggered a leadership contest.",
          ],
        },
      ],
      tip: "Use 'this + nominalisation' to link sentences: '…they refused to sign. This refusal…' — it compresses the previous clause into given information and keeps the new information at the end of the sentence, where English wants it.",
      examples: [
        "The rapid expansion of the company masked a steady erosion of its margins.",
        "Her appointment as director came as no surprise; her subsequent resignation did.",
        "Any reduction in funding would have serious implications for the project.",
      ],
      mistakes: [
        { x: "The improve of the results was clear.", v: "The improvement in the results was clear — use the noun form 'improvement', not the bare verb." },
        { x: "There has been a significant grow in exports.", v: "a significant growth in exports — 'grow' is the verb; the noun is 'growth'." },
        { x: "The government made a discussion about taxes.", v: "The government held a discussion — each nominalisation takes its own light verb; 'discussion' pairs with hold, not make." },
      ],
      quiz: [
        {
          q: "Choose the nominalised version of 'They decided to close the plant.'",
          o: ["They made closing the plant.", "The decision to close the plant", "They were deciding on the plant.", "Closing the plant decided them."],
          a: 1,
          e: "'Decision' is the noun form of 'decide' — the clause becomes a noun phrase.",
          d: "medium",
        },
        {
          q: "The noun form of 'fail' is ___.",
          o: ["failing", "failness", "failment", "failure"],
          a: 3,
          e: "fail → failure; the -ure suffix, like press → pressure.",
          d: "medium",
        },
        {
          q: "Formal register: 'Prices grew quickly, which surprised analysts.' →",
          o: ["The rapid growth in prices surprised analysts.", "Prices' quick growing surprised analysts.", "That prices grew quick surprised analysts.", "Growing prices quickly surprised analysts."],
          a: 0,
          e: "Verb 'grew' becomes the noun 'growth'; the adverb 'quickly' becomes the adjective 'rapid'.",
          d: "medium",
        },
        {
          q: "Which light verb collocates: '___ an assessment of the risks'?",
          o: ["do", "take", "make", "give"],
          a: 2,
          e: "'Make an assessment' — nominalisations pair with fixed light verbs.",
          d: "hard",
        },
        {
          q: "Cohesive follow-up to 'Many staff refused to relocate.':",
          o: ["This refusal forced a rethink.", "This refusing forced a rethink.", "Refuse forced a rethink.", "They refusal forced a rethink."],
          a: 0,
          e: "'This + nominalisation' ('this refusal') summarises the previous clause and links forward.",
          d: "hard",
        },
        {
          q: "The noun form of 'accurate' is ___.",
          o: ["accurateness", "accuration", "accuratity", "accuracy"],
          a: 3,
          e: "accurate → accuracy, like private → privacy.",
          d: "medium",
        },
        {
          q: "Which sentence is over-nominalised (worst style)?",
          o: ["We investigated why the engine failed.", "We carried out an investigation into the causes of the failure of the engine.", "We investigated the engine failure.", "The investigation focused on the engine."],
          a: 1,
          e: "Three stacked nominalisations bury the meaning — plain verbs say it more clearly.",
          d: "hard",
        },
        {
          q: "'The company expanded into Asia' → formal noun phrase:",
          o: ["the company's expand into Asia", "the expanding of company into Asia", "the company's expansion into Asia", "expansion company into Asia"],
          a: 2,
          e: "expand → expansion; possessive + noun + preposition is the standard frame.",
          d: "medium",
        },
        {
          q: "Which verb typically pairs with 'a transformation'?",
          o: ["undergo", "suffer under", "make under", "do"],
          a: 0,
          e: "'Undergo a transformation' — a fixed formal collocation.",
          d: "hard",
        },
        {
          q: "Impersonal academic style prefers:",
          o: ["I think we should analyse the data again.", "You must analyse the data again.", "A further analysis of the data is required.", "Let's analyse the data again!"],
          a: 2,
          e: "The nominalisation 'a further analysis' removes the personal subject entirely.",
          d: "medium",
        },
      ],
      tr: {
        situation: P(
          "Hamkasbning emailida: 'We decided to expand quickly, and this caused problems.' Yillik hisobotda xuddi shu fikr: 'The decision to expand rapidly gave rise to a number of difficulties.' Faktlar bir xil — registr butunlay boshqa, va u otlar ustiga qurilgan.",
          "В письме коллеги: 'We decided to expand quickly, and this caused problems.' В годовом отчёте та же мысль: 'The decision to expand rapidly gave rise to a number of difficulties.' Факты те же — регистр совершенно иной, и построен он на существительных."
        ),
        tip: P(
          "Gaplarni bog'lash uchun 'this + nominalisation' ishlating: '…they refused to sign. This refusal…' — u oldingi gapni ma'lum axborotga siqadi va yangi axborotni gap oxirida qoldiradi — ingliz tili aynan shuni xohlaydi.",
          "Связывайте предложения через 'this + номинализация': '…they refused to sign. This refusal…' — она сжимает предыдущую мысль в данное и оставляет новую информацию в конце предложения, как того требует английский."
        ),
        blocks: [
          {
            h: P("Nominalisation nima?", "Что такое номинализация"),
            p: [
              P(
                "Nominalisation fe'l yoki sifatni otga aylantiradi: decide → decision, grow → growth, fail → failure, refuse → refusal, accurate → accuracy, reluctant → reluctance. Harakat yoki xususiyat 'narsa'ga aylanadi — endi uni tasvirlash, o'lchash va bog'lash mumkin.",
                "Номинализация превращает глагол или прилагательное в существительное: decide → decision, grow → growth, fail → failure, refuse → refusal, accurate → accuracy, reluctant → reluctance. Действие или качество становится «предметом», который можно описывать, измерять и связывать."
              ),
              P(
                "Otga aylangach, fikr ravish o'rniga sifat oladi: 'prices grew rapidly' → 'the rapid growth in prices'. Butun gapning grammatikasi yangi ot atrofida qayta quriladi.",
                "После номинализации идея берёт прилагательные вместо наречий: 'prices grew rapidly' → 'the rapid growth in prices'. Грамматика всего предложения перестраивается вокруг нового существительного."
              ),
            ],
          },
          {
            h: P("Nega rasmiy matn otlarni afzal ko'radi", "Почему формальный текст предпочитает существительные"),
            p: [
              P(
                "Nominalisation butun gapni ot iborasiga siqadi va fe'l o'rnini yangi fikr uchun bo'shatadi: 'The growth in exports [oldingi fikr] has masked a decline in quality [yangi fikr].' U odamlarni ham olib tashlaydi va matnni shaxssiz qiladi: 'we analysed' → 'the analysis'.",
                "Номинализация сжимает целое предложение в именную группу, освобождая позицию глагола для нового утверждения: 'The growth in exports [прежняя мысль] has masked a decline in quality [новая мысль].' Она также убирает людей, делая текст безличным: 'we analysed' → 'the analysis'."
              ),
              P(
                "Shuning uchun rasmiy va akademik ingliz tili otlarga boy tuyuladi: har bir gap oldingisining siqilgan yelkasida turadi.",
                "Поэтому официальный и академический английский кажется перегруженным существительными: каждое предложение стоит на сжатых плечах предыдущего."
              ),
            ],
          },
          {
            h: P("Qoliplar va light verb sheriklar", "Модели и партнёрские light verbs"),
            p: [
              P(
                "Eng keng tarqalgan qolip: the + ot + of/in/to + ot — 'the introduction of the tax', 'the rise in unemployment', 'the response to the crisis'. Ot talab qiladigan predlogni tanlang — u ko'pincha fe'lnikidan farq qiladi.",
                "Самая частая рамка: the + существительное + of/in/to + существительное — 'the introduction of the tax', 'the rise in unemployment', 'the response to the crisis'. Выбирайте предлог, которого требует существительное — он часто отличается от глагольного."
              ),
              P(
                "Nominalisationlar maxsus 'light' fe'llar bilan juftlashadi: make a decision/an assessment, reach a conclusion/an agreement, hold a discussion, undergo a transformation, give rise to problems. Light verb grammatikani, ot esa ma'noni ko'taradi.",
                "Номинализации сочетаются с определёнными «лёгкими» глаголами: make a decision/an assessment, reach a conclusion/an agreement, hold a discussion, undergo a transformation, give rise to problems. Лёгкий глагол несёт грамматику, существительное — смысл."
              ),
            ],
          },
          {
            h: P("Kohesiya — va qachon to'xtashni bilish", "Связность — и умение вовремя остановиться"),
            p: [
              P(
                "Kuchli bog'lash usuli: oldingi gapni this + nominalisation bilan umumlashtiring. 'Many staff refused to relocate. This refusal forced a rethink of the whole plan.' Ot eski axborotni o'raydi va matnni oldinga suradi.",
                "Мощный приём связности: обобщите предыдущее предложение через this + номинализация. 'Many staff refused to relocate. This refusal forced a rethink of the whole plan.' Существительное упаковывает старую информацию и двигает текст вперёд."
              ),
              P(
                "Lekin ortiqcha nominalisation matnni o'ldiradi: 'We carried out an investigation into the causes of the failure of the engine' — 'We investigated why the engine failed' dan yaxshiroq hech narsa demaydi. Oddiy, to'g'ridan-to'g'ri matnda — email, ko'rsatmalarda — kuchli fe'llarni tanlang; zich ot uslubini rasmiy hisobotlarga qoldiring.",
                "Но избыточная номинализация убивает текст: 'We carried out an investigation into the causes of the failure of the engine' не говорит ничего, что 'We investigated why the engine failed' не сказало бы лучше. В простом прямом письме — email, инструкциях — предпочитайте сильные глаголы; плотный именной стиль оставьте для формальных отчётов."
              ),
            ],
          },
        ],
        quiz: [
          P("'Decision' — 'decide' fe'lining ot shakli; gap ot iborasiga aylanadi.", "'Decision' — именная форма глагола 'decide'; предложение становится именной группой."),
          P("fail → failure; -ure qo'shimchasi, press → pressure kabi.", "fail → failure; суффикс -ure, как press → pressure."),
          P("'grew' fe'li 'growth' otiga, 'quickly' ravishi 'rapid' sifatiga aylanadi.", "Глагол 'grew' становится существительным 'growth', наречие 'quickly' — прилагательным 'rapid'."),
          P("'Make an assessment' — nominalisationlar turg'un light verblar bilan keladi.", "'Make an assessment' — номинализации идут с фиксированными light verbs."),
          P("'This + nominalisation' ('this refusal') oldingi gapni umumlashtirib, matnni bog'laydi.", "'This + номинализация' ('this refusal') обобщает предыдущее предложение и связывает текст."),
          P("accurate → accuracy, private → privacy kabi.", "accurate → accuracy, как private → privacy."),
          P("Uchta ustma-ust nominalisation ma'noni ko'mib yuboradi — oddiy fe'llar aniqroq aytadi.", "Три нагромождённые номинализации хоронят смысл — простые глаголы яснее."),
          P("expand → expansion; egalik + ot + predlog — standart qolip.", "expand → expansion; притяжательная форма + существительное + предлог — стандартная рамка."),
          P("'Undergo a transformation' — turg'un rasmiy birikma.", "'Undergo a transformation' — устойчивое формальное сочетание."),
          P("'A further analysis' nominalisationi shaxsiy egani butunlay olib tashlaydi.", "Номинализация 'a further analysis' полностью убирает личное подлежащее."),
        ],
      },
    },
    {
      id: "g6",
      title: "Participle clauses & reduced relatives",
      lead: "Tighten your sentences: 'anyone wishing to attend', 'the issues raised', 'Having finished the report, she…' — participle clauses do the work of full clauses in half the words.",
      leadTr: P(
        "Gaplaringizni ixchamlashtiring: 'anyone wishing to attend', 'the issues raised', 'Having finished the report, she…' — participle gaplar to'liq gaplarning ishini ikki barobar kam so'z bilan bajaradi.",
        "Сжимайте предложения: 'anyone wishing to attend', 'the issues raised', 'Having finished the report, she…' — причастные обороты выполняют работу полных придаточных вдвое меньшим числом слов."
      ),
      situation: "A conference notice reads: 'Delegates arriving after 9 a.m. should register at the main desk. Having collected your badge, please proceed to the hall. Any documents left unattended will be removed.' Three participle structures, not a single relative pronoun.",
      timeline: null,
      compare: null,
      blocks: [
        {
          h: "Reduced relative clauses",
          p: [
            "When the relative pronoun is the subject of its clause, you can delete it and reduce the verb: active meaning takes -ing — 'the man who is standing there' → 'the man standing there'; passive meaning takes the past participle — 'the issues that were raised' → 'the issues raised'.",
            "The -ing form works even for state verbs and other tenses: 'anyone who wants a refund' → 'anyone wanting a refund'. But if the pronoun is the object ('the book that she wrote'), no reduction is possible — you can only drop the pronoun: 'the book she wrote'.",
          ],
          ex: [
            "Passengers travelling with children may board first.",
            "The proposals put forward by the committee were rejected.",
            "Applications received after the deadline will not be considered.",
          ],
        },
        {
          h: "Participle clauses for time and reason",
          p: [
            "A fronted -ing clause can replace a time or reason clause: 'Feeling exhausted, she cancelled the meeting' (= because she felt); 'Opening the letter, he began to smile' (= when/as he opened). The reader infers the connector from context.",
            "One iron rule: the unstated subject of the participle must be the subject of the main clause. That is what makes the shortcut safe — and what breaks it when ignored.",
          ],
          ex: [
            "Realising her mistake, she apologised at once.",
            "Living so far from town, we rarely get visitors.",
            "Not knowing the password, he couldn't open the file.",
          ],
        },
        {
          h: "Perfect and passive participles",
          p: [
            "Having + past participle marks an action clearly earlier than the main verb: 'Having signed the contract, they celebrated.' The negative puts not first: 'Not having received a reply, I wrote again.'",
            "For passive meaning, use having been + past participle or a bare past participle: 'Having been warned twice, he was finally dismissed'; 'Seen from above, the island resembles a bird.'",
          ],
          ex: [
            "Having spent all the budget, the team asked for more funding.",
            "Having been translated into forty languages, the novel needs no introduction.",
            "Built in the 1890s, the bridge still carries daily traffic.",
          ],
        },
        {
          h: "After conjunctions — and the dangling trap",
          p: [
            "Participles follow time conjunctions and prepositions directly: 'after checking the figures', 'while waiting for the results', 'before signing anything', 'on entering the room' (formal: = as soon as). This is the backbone of instructions and formal notices.",
            "The classic error is the dangling participle: 'Walking down the street, the trees looked beautiful' — grammatically, the trees are walking. Fix it by matching the subjects ('Walking down the street, I admired the trees') or by restoring a full clause ('As I walked down the street…').",
          ],
          ex: [
            "After reviewing the evidence, the panel dismissed the claim.",
            "On hearing the verdict, the family burst into tears.",
            "When using this device, always wear protective gloves.",
          ],
        },
      ],
      tip: "Test every fronted participle: ask 'who is doing this?' — the answer must be the subject of the main clause. 'Having read the report, the plan seemed weak' fails the test (the plan didn't read anything); 'Having read the report, I found the plan weak' passes.",
      examples: [
        "Anyone wishing to speak at the meeting should notify the chair in advance.",
        "Having been delayed twice already, the project is now under intense scrutiny.",
        "The figures quoted in the article, taken from last year's report, are already out of date.",
      ],
      mistakes: [
        { x: "Walking down the street, the trees looked beautiful.", v: "Walking down the street, I thought the trees looked beautiful — the participle's implied subject must be the main-clause subject." },
        { x: "The report publishing last week caused a stir.", v: "The report published last week — passive meaning ('which was published') needs the past participle." },
        { x: "After to finish the meeting, we went for lunch.", v: "After finishing the meeting — after a conjunction or preposition, use the -ing form, never the infinitive." },
      ],
      quiz: [
        {
          q: "Reduce: 'The people who are waiting outside are getting impatient.'",
          o: ["The people waited outside…", "The people to wait outside…", "The people are waiting outside…", "The people waiting outside…"],
          a: 3,
          e: "Active meaning with a subject pronoun → the -ing participle replaces 'who are waiting'.",
          d: "medium",
        },
        {
          q: "The questions ___ at the meeting were difficult to answer.",
          o: ["raising", "raised", "being raise", "that raised"],
          a: 1,
          e: "Passive meaning ('which were raised') → past participle.",
          d: "medium",
        },
        {
          q: "___ the report, she emailed it to the board.",
          o: ["Finishing", "Finished", "To finish", "Having finished"],
          a: 3,
          e: "'Having + past participle' clearly marks the earlier of two actions.",
          d: "medium",
        },
        {
          q: "Which sentence has a dangling participle?",
          o: ["Driving to work, Tom saw an accident.", "Having eaten, we left the restaurant.", "Opening the box, the smell was awful.", "While cooking, she cut her finger."],
          a: 2,
          e: "The smell didn't open the box — the participle has no matching subject in the main clause.",
          d: "hard",
        },
        {
          q: "___ twice about the deadline, he still submitted late.",
          o: ["Having been warned", "Warning", "Been warned", "Having warning"],
          a: 0,
          e: "Passive meaning plus earlier action → 'Having been warned'.",
          d: "hard",
        },
        {
          q: "After ___ the contract, read the appendix carefully.",
          o: ["sign", "signed", "signing", "to sign"],
          a: 2,
          e: "After a conjunction or preposition, use the -ing form.",
          d: "medium",
        },
        {
          q: "Which reduction is impossible?",
          o: ["the man who lives next door → the man living next door", "the book that she wrote → the book she writing", "anyone who wants tickets → anyone wanting tickets", "the money that was stolen → the money stolen"],
          a: 1,
          e: "Participle reduction only works when the relative pronoun is the subject; here 'she' is the subject, so only pronoun-dropping is possible.",
          d: "hard",
        },
        {
          q: "___ received no reply, I wrote to them again.",
          o: ["Having", "Being", "Having been", "To have"],
          a: 0,
          e: "Earlier active action → 'Having received no reply'.",
          d: "medium",
        },
        {
          q: "Formal notice: 'Passengers ___ to change trains should alight here.'",
          o: ["wish", "wished", "wishing", "to wish"],
          a: 2,
          e: "'Wishing' reduces 'who wish' — the typical style of formal notices.",
          d: "medium",
        },
        {
          q: "'On ___ at the hotel, guests are asked to present ID.'",
          o: ["arrive", "arriving", "arrival at", "arrived"],
          a: 1,
          e: "'On + -ing' = 'as soon as' in formal style; a preposition needs the -ing form.",
          d: "hard",
        },
      ],
      tr: {
        situation: P(
          "Konferensiya e'lonida: 'Delegates arriving after 9 a.m. should register at the main desk. Having collected your badge, please proceed to the hall. Any documents left unattended will be removed.' Uchta participle tuzilma — birorta ham nisbiy olmosh yo'q.",
          "В объявлении конференции: 'Delegates arriving after 9 a.m. should register at the main desk. Having collected your badge, please proceed to the hall. Any documents left unattended will be removed.' Три причастные конструкции — и ни одного относительного местоимения."
        ),
        tip: P(
          "Har bir gap boshidagi participle ni tekshiring: 'buni kim qilyapti?' deb so'rang — javob bosh gapning egasi bo'lishi shart. 'Having read the report, the plan seemed weak' testdan o'tmaydi (plan hech narsa o'qimagan); 'Having read the report, I found the plan weak' — o'tadi.",
          "Проверяйте каждое начальное причастие вопросом «кто это делает?» — ответом должно быть подлежащее главного предложения. 'Having read the report, the plan seemed weak' тест не проходит (план ничего не читал); 'Having read the report, I found the plan weak' — проходит."
        ),
        blocks: [
          {
            h: P("Qisqartirilgan nisbiy gaplar", "Редуцированные относительные придаточные"),
            p: [
              P(
                "Nisbiy olmosh o'z gapining egasi bo'lsa, uni tushirib, fe'lni qisqartirish mumkin: faol ma'no -ing oladi — 'the man who is standing there' → 'the man standing there'; passiv ma'no past participle oladi — 'the issues that were raised' → 'the issues raised'.",
                "Если относительное местоимение — подлежащее своего придаточного, его можно убрать и свернуть глагол: активное значение берёт -ing — 'the man who is standing there' → 'the man standing there'; пассивное — причастие прошедшего времени: 'the issues that were raised' → 'the issues raised'."
              ),
              P(
                "-ing shakli holat fe'llari va boshqa zamonlar uchun ham ishlaydi: 'anyone who wants a refund' → 'anyone wanting a refund'. Lekin olmosh to'ldiruvchi bo'lsa ('the book that she wrote'), qisqartirish mumkin emas — faqat olmoshni tushirish mumkin: 'the book she wrote'.",
                "Форма -ing работает и для глаголов состояния, и для других времён: 'anyone who wants a refund' → 'anyone wanting a refund'. Но если местоимение — дополнение ('the book that she wrote'), редукция невозможна — можно лишь опустить местоимение: 'the book she wrote'."
              ),
            ],
          },
          {
            h: P("Vaqt va sabab uchun participle gaplar", "Причастные обороты времени и причины"),
            p: [
              P(
                "Gap boshidagi -ing gap vaqt yoki sabab ergash gapini almashtira oladi: 'Feeling exhausted, she cancelled the meeting' (= chunki charchagan edi); 'Opening the letter, he began to smile' (= ochganida). O'quvchi bog'lovchini kontekstdan topadi.",
                "Начальный оборот с -ing может заменять придаточное времени или причины: 'Feeling exhausted, she cancelled the meeting' (= потому что устала); 'Opening the letter, he began to smile' (= когда открыл). Связку читатель выводит из контекста."
              ),
              P(
                "Temir qoida: participle ning aytilmagan egasi bosh gapning egasi bo'lishi shart. Aynan shu qoida qisqartmani xavfsiz qiladi — unga rioya qilinmasa, gap buziladi.",
                "Железное правило: невыраженное подлежащее причастия должно совпадать с подлежащим главного предложения. Именно это делает сокращение безопасным — и ломает его при нарушении."
              ),
            ],
          },
          {
            h: P("Perfect va passiv participle lar", "Перфектные и пассивные причастия"),
            p: [
              P(
                "Having + past participle harakat bosh fe'ldan aniq oldin bo'lganini bildiradi: 'Having signed the contract, they celebrated.' Inkorda not oldin keladi: 'Not having received a reply, I wrote again.'",
                "Having + причастие прошедшего времени показывает действие, явно предшествующее главному: 'Having signed the contract, they celebrated.' В отрицании not ставится первым: 'Not having received a reply, I wrote again.'"
              ),
              P(
                "Passiv ma'no uchun having been + past participle yoki yolg'iz past participle ishlatiladi: 'Having been warned twice, he was finally dismissed'; 'Seen from above, the island resembles a bird.'",
                "Для пассивного значения — having been + причастие или одиночное причастие прошедшего времени: 'Having been warned twice, he was finally dismissed'; 'Seen from above, the island resembles a bird.'"
              ),
            ],
          },
          {
            h: P("Bog'lovchilardan keyin — va dangling xavfi", "После союзов — и ловушка висячего причастия"),
            p: [
              P(
                "Participle lar vaqt bog'lovchilari va predloglardan keyin to'g'ridan-to'g'ri keladi: 'after checking the figures', 'while waiting for the results', 'before signing anything', 'on entering the room' (rasmiy: = kirishi bilanoq). Bu ko'rsatmalar va rasmiy e'lonlarning asosiy usuli.",
                "Причастия идут сразу после временных союзов и предлогов: 'after checking the figures', 'while waiting for the results', 'before signing anything', 'on entering the room' (формально: = как только вошёл). Это основа инструкций и официальных объявлений."
              ),
              P(
                "Klassik xato — dangling participle: 'Walking down the street, the trees looked beautiful' — grammatik jihatdan daraxtlar yurmoqda. Egalarni moslashtirib ('Walking down the street, I admired the trees') yoki to'liq gapni qaytarib ('As I walked down the street…') tuzating.",
                "Классическая ошибка — висячее причастие: 'Walking down the street, the trees looked beautiful' — грамматически идут деревья. Исправьте, согласовав подлежащие ('Walking down the street, I admired the trees') или вернув полное придаточное ('As I walked down the street…')."
              ),
            ],
          },
        ],
        quiz: [
          P("Faol ma'no, olmosh ega bo'lgani uchun -ing participle 'who are waiting' ni almashtiradi.", "Активное значение при местоимении-подлежащем → причастие -ing заменяет 'who are waiting'."),
          P("Passiv ma'no ('which were raised') → past participle.", "Пассивное значение ('which were raised') → причастие прошедшего времени."),
          P("'Having + past participle' ikki harakatdan oldingisini aniq belgilaydi.", "'Having + причастие' чётко отмечает более раннее из двух действий."),
          P("Hid qutini ochmagan — participle ning bosh gapda mos egasi yo'q.", "Запах не открывал коробку — у причастия нет соответствующего подлежащего в главном предложении."),
          P("Passiv ma'no + oldingi harakat → 'Having been warned'.", "Пассивное значение + предшествующее действие → 'Having been warned'."),
          P("Bog'lovchi yoki predlogdan keyin -ing shakli ishlatiladi.", "После союза или предлога используется форма -ing."),
          P("Qisqartirish faqat nisbiy olmosh ega bo'lganda ishlaydi; bu yerda ega 'she', shuning uchun faqat olmoshni tushirish mumkin.", "Редукция работает только когда относительное местоимение — подлежащее; здесь подлежащее 'she', возможно лишь опустить местоимение."),
          P("Oldingi faol harakat → 'Having received no reply'.", "Предшествующее активное действие → 'Having received no reply'."),
          P("'Wishing' — 'who wish' ning qisqargan shakli; rasmiy e'lonlarning odatiy uslubi.", "'Wishing' — редукция 'who wish'; типичный стиль официальных объявлений."),
          P("'On + -ing' rasmiy uslubda = 'as soon as'; predlogdan keyin -ing kerak.", "'On + -ing' в формальном стиле = 'as soon as'; после предлога нужна форма -ing."),
        ],
      },
    },
  ],
};
