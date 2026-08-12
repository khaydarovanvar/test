// Authored content localized for Uzbek learners: C1 listening, extra scenarios,
// and the metadata for grammar-practice lessons built from the shared question bank.

export const C1_LISTENING = [
  {
    id: "l1", title: "Lecture: The Aral Sea",
    script: "Good afternoon, everyone. Today I want to talk about one of the most dramatic environmental transformations of the twentieth century: the shrinking of the Aral Sea. Once the fourth-largest lake in the world, it lost over ninety percent of its volume within two generations, after the rivers that fed it were diverted to irrigate cotton fields. The consequences reached far beyond the shoreline. Fishing towns like Moynaq found themselves dozens of kilometres from the water, and dust storms began carrying salt across the region, affecting agriculture and public health. Yet the story is not only one of loss. In recent years, cooperation on the Kazakh side led to the construction of a dam that has partially revived the northern basin, and fish have returned to some waters. Scientists now treat the Aral as a case study — a warning about short-term planning, but also evidence that determined intervention can reverse at least part of the damage.",
    quiz: [
      { q: "What caused the Aral Sea to shrink?", o: ["Climate change alone", "Rivers were diverted for irrigation", "An earthquake changed its basin", "Overfishing removed its ecosystem"], a: 1, e: "The lecturer says the rivers that fed it were diverted to irrigate cotton fields.", d: "medium" },
      { q: "What does the speaker say about Moynaq?", o: ["It was flooded by the sea", "It became a major port", "It ended up far from the water", "It built the northern dam"], a: 2, e: "Fishing towns like Moynaq found themselves dozens of kilometres from the water.", d: "medium" },
      { q: "Why does the speaker mention the northern dam?", o: ["To criticise cotton farming", "To show partial recovery is possible", "To explain the dust storms", "To compare two lakes"], a: 1, e: "The dam partially revived the northern basin — evidence that intervention can reverse damage.", d: "hard" },
      { q: "The speaker's overall tone is best described as…", o: ["entirely pessimistic", "angry and accusing", "balanced — warning plus hope", "humorous"], a: 2, e: "The story is 'not only one of loss': a warning, but also evidence of recovery.", d: "hard" },
    ],
  },
  {
    id: "l2", title: "Interview: Studying abroad",
    script: "Interviewer: You spent four years studying in another country. What surprised you most? — Speaker: Honestly, it wasn't the language or the weather. It was how differently people approached disagreement. In my first seminar, a student openly challenged the professor's interpretation, and instead of taking offence, the professor thanked him and adjusted her argument. Where I grew up, questioning a teacher in public would have felt disrespectful. It took me a full semester to realise that debate was not an attack but a form of participation — and another semester to actually join in. — Interviewer: And did that change you? — Speaker: Completely. I still value politeness, but I no longer confuse silence with respect. If I disagree now, I say so — carefully, with evidence, but I say so. I think that skill has helped my career more than any single course I took.",
    quiz: [
      { q: "What surprised the speaker most abroad?", o: ["The difficult language", "The attitude to disagreement", "The cost of living", "The weather"], a: 1, e: "It wasn't language or weather — it was how differently people approached disagreement.", d: "medium" },
      { q: "How did the professor react to being challenged?", o: ["She was offended", "She ignored the student", "She thanked him and adjusted her argument", "She ended the seminar"], a: 2, e: "Instead of taking offence, the professor thanked him.", d: "medium" },
      { q: "What does the speaker mean by 'I no longer confuse silence with respect'?", o: ["Silence is always rude", "Respect requires agreement", "Staying quiet is not the only way to show respect", "Speaking loudly shows confidence"], a: 2, e: "He still values politeness but now expresses disagreement carefully — silence isn't the only respectful option.", d: "hard" },
      { q: "Which skill does the speaker say helped his career most?", o: ["Fluent writing", "Constructive disagreement", "Time management", "Public speaking"], a: 1, e: "\"That skill has helped my career more than any single course\" — voicing disagreement with evidence.", d: "hard" },
    ],
  },
  {
    id: "l3", title: "Podcast: How polyglots learn",
    script: "Welcome back to the show. Our topic today: what do successful language learners actually do differently? We interviewed thirty people who each speak five or more languages, and three patterns kept appearing. First, none of them waited to feel ready. They started speaking from day one, tolerating mistakes that would make most learners blush. Second, they built the language into their routine instead of adding it on top: podcasts while commuting, shopping lists in the target language, a diary of three sentences every night. The effort felt almost invisible, which is precisely why it survived busy weeks. And third — this one surprised us — they were selective about vocabulary. Rather than memorising long lists, they tracked words they had personally needed and missed in real conversations. One participant put it beautifully: a word you needed yesterday is worth twenty words you might need someday.",
    quiz: [
      { q: "How many patterns did the researchers identify?", o: ["Two", "Three", "Five", "Thirty"], a: 1, e: "Three patterns kept appearing.", d: "medium" },
      { q: "What did polyglots do 'from day one'?", o: ["Memorise word lists", "Take formal exams", "Start speaking", "Hire tutors"], a: 2, e: "None of them waited to feel ready — they started speaking from day one.", d: "medium" },
      { q: "Why did routine-based learning survive busy weeks?", o: ["It was scheduled by teachers", "The effort felt almost invisible", "It was rewarded with prizes", "It required no materials"], a: 1, e: "Built into the routine, the effort felt almost invisible — so it survived.", d: "hard" },
      { q: "Which words did polyglots prioritise?", o: ["The most frequent 1,000 words", "Words from academic lists", "Words they personally needed and missed", "Words that are easy to spell"], a: 2, e: "They tracked words they had needed and missed in real conversations.", d: "hard" },
    ],
  },
];

export const EXTRA_SCENARIOS = [
  {
    id: "registan", title: "A tourist at Registan", emoji: "🕌", level: "A2",
    steps: [
      { ai: "Excuse me! This place is amazing. Do you live here in Samarkand?", hints: ["Yes, I'm from here. Welcome!", "I'm visiting too, but I know the city."], expects: ["yes", "welcome", "from", "live", "visiting"] },
      { ai: "Lucky you! Can you tell me what this building is called?", hints: ["This is the Registan — three old madrasahs.", "It's called Registan. It's very famous."], expects: ["registan", "madrasah", "school", "old", "famous"] },
      { ai: "Beautiful! And where can I try real Uzbek food near here?", hints: ["You should try plov at…", "There is a good choyxona near the square."], expects: ["plov", "choyxona", "restaurant", "try", "near", "food"] },
      { ai: "Plov sounds perfect. Thank you so much for your help!", hints: ["You're welcome! Enjoy Samarkand!"], expects: ["welcome", "enjoy", "thank"] },
    ],
  },
  {
    id: "choyxona", title: "At a choyxona", emoji: "🍵", level: "A1",
    steps: [
      { ai: "Assalomu alaykum! Welcome! A table for how many people?", hints: ["A table for two, please."], expects: ["table", "two", "one", "three", "please"] },
      { ai: "Of course. Here is the menu. What would you like to drink — green tea or black tea?", hints: ["Green tea, please.", "Black tea for me, please."], expects: ["green", "black", "tea", "please"] },
      { ai: "Good choice. And to eat? Today we have fresh plov, lagman and somsa.", hints: ["One plov and one somsa, please.", "Lagman, please."], expects: ["plov", "lagman", "somsa", "please", "one"] },
      { ai: "Excellent! Your food will be ready in ten minutes. Enjoy!", hints: ["Thank you very much!"], expects: ["thank"] },
    ],
  },
  {
    id: "itpark", title: "Job chat at IT Park", emoji: "💻", level: "B2",
    steps: [
      { ai: "Hi! I saw your CV — impressive English score. Tell me, why do you want to work in an international team?", hints: ["Talk about growth and learning from others.", "Mention using English daily."], expects: ["learn", "grow", "team", "english", "experience", "international"] },
      { ai: "Makes sense. Our clients are mostly in Europe. How comfortable are you with video calls in English?", hints: ["I'm comfortable — I practise speaking every day.", "I've done presentations in English before."], expects: ["comfortable", "practise", "practice", "presentation", "confident", "call"] },
      { ai: "Great. One more thing — remote work needs discipline. How do you organise your day?", hints: ["Describe your routine and priorities.", "Mention tools or a daily plan."], expects: ["plan", "morning", "schedule", "list", "priorit", "routine", "organise", "organize"] },
      { ai: "That's exactly the attitude we look for. We'll be in touch this week. Rahmat — and good luck!", hints: ["Thank you! Looking forward to it."], expects: ["thank", "forward", "great"] },
    ],
  },
];

// Grammar-practice lessons assembled from the shared question bank (topic → lesson).
// `pick` = [domain, topic, count]; leads authored with uz/ru for Uzbek learners.
export const GRAMMAR_PRACTICE = {
  B2: [
    {
      id: "p1", title: "Subject–verb agreement in long sentences",
      pick: ["Standard English Conventions", "Subject-Verb Agreement", 12],
      lead: "When the subject and the verb are separated by long phrases, it becomes easy to match the verb to the wrong noun. Train yourself to find the true subject first — then choose the verb form.",
      leadTr: { uz: "Ega va kesim orasida uzun iboralar bo'lsa, fe'lni noto'g'ri otga moslashtirish oson. Avval haqiqiy egani toping — keyin fe'l shaklini tanlang.", ru: "Когда подлежащее и сказуемое разделены длинными оборотами, легко согласовать глагол не с тем словом. Сначала найдите настоящее подлежащее — затем выбирайте форму глагола." },
    },
    {
      id: "p2", title: "Pronouns: agreement & clear reference",
      pick: ["Standard English Conventions", "Pronoun Agreement", 12],
      lead: "A pronoun must match its noun in number and refer to it unambiguously. These exercises train both: choosing the right pronoun and keeping the reference clear.",
      leadTr: { uz: "Olmosh o'z oti bilan son jihatdan mos kelishi va unga aniq ishora qilishi kerak. Bu mashqlar ikkalasini ham rivojlantiradi: to'g'ri olmoshni tanlash va ishorani aniq saqlash.", ru: "Местоимение должно совпадать с существительным в числе и однозначно на него указывать. Эти упражнения тренируют и выбор местоимения, и ясность ссылки." },
    },
    {
      id: "p3", title: "Commas & semicolons",
      pick: ["Standard English Conventions", "Commas & Semicolons", 12],
      lead: "The comma and the semicolon are where most writing mistakes live. Learn when two ideas need a semicolon, when a comma is enough, and when neither belongs.",
      leadTr: { uz: "Vergul va nuqtali vergul — yozuvdagi xatolarning ko'pchiligi shu yerda. Ikki fikr qachon nuqtali vergul talab qilishini, qachon vergul yetarli ekanini o'rganing.", ru: "Запятая и точка с запятой — где живёт большинство ошибок письма. Учитесь понимать, когда двум идеям нужна точка с запятой, когда достаточно запятой, а когда не нужно ничего." },
    },
    {
      id: "p4", title: "Verb tense in context",
      pick: ["Standard English Conventions", "Verb Tense", 12],
      lead: "Real texts mix tenses constantly. These items give you a sentence with surrounding context — your job is to keep the timeline consistent.",
      leadTr: { uz: "Haqiqiy matnlarda zamonlar doim aralashadi. Bu mashqlarda kontekstli gap beriladi — vazifangiz voqealar chizig'ini izchil saqlash.", ru: "В настоящих текстах времена постоянно смешиваются. Здесь дано предложение с контекстом — ваша задача сохранить хронологию последовательной." },
    },
    {
      id: "p5", title: "Transitions between ideas",
      pick: ["Craft and Structure", "Transitions", 12],
      lead: "However, therefore, meanwhile, in contrast… The right connector shows the logical relationship between two sentences. Read both sides of the blank before choosing.",
      leadTr: { uz: "However, therefore, meanwhile… To'g'ri bog'lovchi ikki gap orasidagi mantiqiy aloqani ko'rsatadi. Tanlashdan oldin bo'sh joyning ikkala tomonini ham o'qing.", ru: "However, therefore, meanwhile… Правильная связка показывает логическую связь между предложениями. Прочитайте обе стороны пропуска, прежде чем выбирать." },
    },
  ],
  C1: [
    {
      id: "p1", title: "Colons & dashes",
      pick: ["Standard English Conventions", "Colons & Dashes", 12],
      lead: "Colons introduce and dashes interrupt — both add sophistication when used precisely, and both are tested mercilessly in formal writing. Master the exact rules.",
      leadTr: { uz: "Ikki nuqta kiritadi, tire esa to'xtatadi — ikkalasi ham aniq ishlatilganda uslubni boyitadi. Aniq qoidalarni o'zlashtiring.", ru: "Двоеточие вводит, тире прерывает — оба знака делают стиль изящнее при точном использовании. Освойте точные правила." },
    },
    {
      id: "p2", title: "Apostrophes & possession",
      pick: ["Standard English Conventions", "Apostrophes", 12],
      lead: "Its or it's? Students' or student's? The apostrophe is small but ruthless. These exercises cover possession, contractions and the classic traps.",
      leadTr: { uz: "Its yoki it's? Students' yoki student's? Apostrof kichik, lekin shafqatsiz. Bu mashqlar egalik, qisqartma va klassik tuzoqlarni qamrab oladi.", ru: "Its или it's? Students' или student's? Апостроф мал, но беспощаден. Здесь — принадлежность, сокращения и классические ловушки." },
    },
    {
      id: "p3", title: "Sentence boundaries",
      pick: ["Standard English Conventions", "Sentence Boundaries", 12],
      lead: "Run-ons and fragments are the two ways a sentence can fail. Learn to detect where one complete thought ends and the next must begin.",
      leadTr: { uz: "Qo'shilib ketgan gaplar va chala gaplar — gap buzilishining ikki yo'li. Bitta to'liq fikr qayerda tugashini va keyingisi qayerda boshlanishi kerakligini aniqlashni o'rganing.", ru: "Слипшиеся предложения и фрагменты — два способа сломать предложение. Учитесь видеть, где заканчивается одна законченная мысль и должна начаться следующая." },
    },
    {
      id: "p4", title: "Modifiers & parallelism",
      pick: ["Standard English Conventions", "Modifiers & Parallelism", 12],
      lead: "'Walking to work, the rain started' — who was walking? Dangling modifiers and broken parallel structures are subtle errors that mark the difference between B2 and C1 writing.",
      leadTr: { uz: "'Walking to work, the rain started' — kim yurayotgan edi? Noto'g'ri bog'langan aniqlovchilar va buzilgan parallel tuzilmalar B2 va C1 yozuvini ajratib turadigan nozik xatolardir.", ru: "'Walking to work, the rain started' — кто шёл? Висячие обороты и нарушенный параллелизм — тонкие ошибки, отличающие письмо C1 от B2." },
    },
    {
      id: "p5", title: "Words in context",
      pick: ["Craft and Structure", "Words in Context", 12],
      lead: "Advanced texts choose words for precision, not decoration. Use the logic of the passage — contrast, cause, tone — to select the word that fits exactly.",
      leadTr: { uz: "Murakkab matnlar so'zni bezak uchun emas, aniqlik uchun tanlaydi. Matn mantig'idan — qarama-qarshilik, sabab, ohang — foydalanib, aynan mos so'zni tanlang.", ru: "Сложные тексты выбирают слова ради точности, а не украшения. Опирайтесь на логику текста — контраст, причину, тон — чтобы выбрать точное слово." },
    },
    {
      id: "p6", title: "Concision & precision",
      pick: ["Expression of Ideas", "Wordiness", 12],
      lead: "Strong English says more with fewer words. Spot redundancy, cut empty phrases, and keep the sentence's full meaning intact.",
      leadTr: { uz: "Kuchli ingliz tili kam so'z bilan ko'p ma'no beradi. Ortiqchalikni toping, bo'sh iboralarni olib tashlang, gapning to'liq ma'nosini saqlang.", ru: "Сильный английский говорит больше меньшим числом слов. Находите избыточность, убирайте пустые фразы, сохраняя полный смысл." },
    },
  ],
};

// Reading sets: multi-passage lessons assembled from passage-style questions.
export const READING_SETS = {
  B2: [
    { id: "s1", title: "Reading set: Ideas & evidence I", domain: "Information and Ideas", diff: ["Easy", "Medium"], count: 4 },
    { id: "s2", title: "Reading set: Ideas & evidence II", domain: "Information and Ideas", diff: ["Medium"], count: 4 },
    { id: "s3", title: "Reading set: Author's craft", domain: "Craft and Structure", diff: ["Medium"], count: 4 },
  ],
  C1: [
    { id: "s1", title: "Reading set: Inference & implication", domain: "Information and Ideas", diff: ["Medium", "Hard", "Challenge"], count: 4, topic: "Inference" },
    { id: "s2", title: "Reading set: Tone & perspective", domain: "Craft and Structure", diff: ["Medium", "Hard", "Challenge"], count: 4, topic: "Tone & Perspective" },
    { id: "s3", title: "Reading set: Cross-text analysis", domain: "Craft and Structure", diff: ["Medium", "Hard"], count: 3, topic: "Cross-Text" },
    { id: "s4", title: "Reading set: Rhetorical synthesis", domain: "Expression of Ideas", diff: ["Medium", "Hard"], count: 4, topic: "Rhetorical Synthesis" },
  ],
};
