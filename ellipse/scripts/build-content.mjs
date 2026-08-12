// Transforms the source curriculum (content-src/) into the Ellipse content schema (src/content/content.json).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { LEAD_TR } from "./lead-translations.mjs";
import { C1_LISTENING, EXTRA_SCENARIOS, GRAMMAR_PRACTICE, READING_SETS } from "./uz-extras.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const rich = JSON.parse(readFileSync(join(root, "content-src/eng_rich.json"), "utf8"));
const placementSrc = JSON.parse(readFileSync(join(root, "content-src/placement.json"), "utf8"));
const satVocab = JSON.parse(readFileSync(join(root, "content-src/sat_vocab.json"), "utf8"));
const satEnglish = JSON.parse(readFileSync(join(root, "content-src/sat_english.json"), "utf8"));

const LEVEL_META = {
  A1: { name: "Beginner", tagline: "Build your English foundation", weeks: 8, color: "emerald" },
  A2: { name: "Elementary", tagline: "Become confident in everyday English", weeks: 10, color: "emerald" },
  B1: { name: "Intermediate", tagline: "Communicate independently", weeks: 12, color: "emerald" },
  B2: { name: "Upper-Intermediate", tagline: "Speak with confidence and precision", weeks: 14, color: "emerald" },
  C1: { name: "Advanced", tagline: "Master advanced English", weeks: 16, color: "amber" },
};

const strip = (s) => String(s ?? "").replace(/<[^>]+>/g, "");

function mapQuiz(q) {
  return (q || []).map((x) => ({ q: strip(x.q), o: x.o.map(strip), a: x.a, e: strip(x.e || ""), d: x.d || "medium" }));
}

function grammarLessons(lvl) {
  const g = rich[lvl].GRAMMAR || [];
  const gmore = rich[lvl].GMORE || {};
  const tr = rich[lvl].TR || {};
  return g.map((l) => {
    const extra = gmore[l.id] || {};
    const trans = tr[l.id] || {};
    return {
      id: l.id, title: l.title, lead: strip(l.lead),
      leadTr: trans.lead || LEAD_TR[lvl]?.[l.id] || null,
      situation: strip(extra.situation || ""),
      blocks: (l.blocks || []).map((b) => ({ h: strip(b.h), p: (b.p || []).map(strip), ex: (b.ex || []).map(strip) })),
      tip: strip(l.tip || ""),
      examples: (l.examples || []).map(strip),
      mistakes: (extra.mistakes || []).map((m) => ({ x: strip(m.x), v: strip(m.v) })),
      quiz: mapQuiz(l.q),
    };
  });
}

function vocabUnits(lvl) {
  return (rich[lvl].VOCAB || []).map((u) => ({
    id: u.id, title: u.title,
    words: (u.words || []).map((w) => ({ w: w.w, pos: w.pos, ipa: w.ipa || "", uz: w.uz, ru: w.ru, def: w.def || "", ex: w.ex })),
  }));
}

const readingLessons = (lvl) => (rich[lvl].READING || []).map((l) => ({ id: l.id, title: l.title, text: l.text, quiz: mapQuiz(l.q) }));
const listeningLessons = (lvl) => (rich[lvl].LISTENING || []).map((l) => ({ id: l.id, title: l.title, script: l.script, quiz: mapQuiz(l.q) }));

/* ---------------- authored: speaking tasks ---------------- */
const SPEAKING = {
  A1: [
    { id: "s1", title: "Introduce yourself", prompt: "Say your name, your age, and where you are from.", seconds: 30, tips: ["My name is…", "I am … years old.", "I am from…"] },
    { id: "s2", title: "My family", prompt: "Talk about your family. Who do you live with?", seconds: 40, tips: ["I have a brother / a sister.", "My mother is a…", "We live in…"] },
    { id: "s3", title: "My day", prompt: "Describe your typical morning.", seconds: 40, tips: ["I get up at…", "I have breakfast.", "I go to school / work."] },
    { id: "s4", title: "My favourite food", prompt: "Talk about food you like and don't like.", seconds: 40, tips: ["I like…", "I don't like…", "My favourite food is…"] },
    { id: "s5", title: "My room", prompt: "Describe your room. What is in it?", seconds: 45, tips: ["There is a…", "There are…", "Next to the… / on the…"] },
    { id: "s6", title: "Numbers & time", prompt: "Say what time you do three things every day.", seconds: 40, tips: ["At seven o'clock I…", "Then at… I…"] },
  ],
  A2: [
    { id: "s1", title: "Last weekend", prompt: "Talk about what you did last weekend.", seconds: 60, tips: ["Use past simple: went, saw, played…", "First…, then…, after that…"] },
    { id: "s2", title: "My town", prompt: "Describe your town or city. What can visitors do there?", seconds: 60, tips: ["There is / there are…", "You can visit…", "The best place is…"] },
    { id: "s3", title: "Future plans", prompt: "What are you going to do next summer?", seconds: 60, tips: ["I'm going to…", "I want to…", "Maybe I will…"] },
    { id: "s4", title: "Shopping", prompt: "Describe the last thing you bought and why.", seconds: 60, tips: ["I bought…", "It cost…", "I chose it because…"] },
    { id: "s5", title: "Comparing", prompt: "Compare two places you know: which is better and why?", seconds: 60, tips: ["… is bigger than…", "… is more interesting…", "I prefer… because…"] },
    { id: "s6", title: "Giving directions", prompt: "Explain how to get from your home to the nearest shop.", seconds: 60, tips: ["Go straight…", "Turn left / right…", "It's next to…"] },
  ],
  B1: [
    { id: "s1", title: "Your weekend", prompt: "Talk about your weekend for 60 seconds — what you did and how you felt.", seconds: 60, tips: ["Mix past simple and present perfect.", "Add opinions: it was surprisingly…", "Finish with what you'd do differently."] },
    { id: "s2", title: "A memorable trip", prompt: "Describe a trip you will never forget.", seconds: 75, tips: ["Set the scene: where, when, who with.", "Use narrative tenses.", "Say why it was memorable."] },
    { id: "s3", title: "Technology in your life", prompt: "How has technology changed the way you study or work?", seconds: 75, tips: ["Present perfect: has changed / has made…", "Give two concrete examples.", "Mention one downside."] },
    { id: "s4", title: "Giving advice", prompt: "A friend wants to learn English fast. Give them advice.", seconds: 60, tips: ["You should…", "If I were you, I'd…", "It's worth + -ing…"] },
    { id: "s5", title: "Describing a person", prompt: "Describe someone you admire and explain why.", seconds: 75, tips: ["Personality adjectives: determined, generous…", "Give an example of what they did.", "Explain their influence on you."] },
    { id: "s6", title: "Problems & solutions", prompt: "What is one problem in your city and how would you solve it?", seconds: 75, tips: ["State the problem clearly.", "Second conditional: If the city…, it would…", "End with the benefit."] },
  ],
  B2: [
    { id: "s1", title: "Arguing a position", prompt: "Should social media be regulated? Argue your position for 90 seconds.", seconds: 90, tips: ["State your thesis in one sentence.", "Concede one opposing point, then refute it.", "Use linkers: nevertheless, what's more…"] },
    { id: "s2", title: "Describing change", prompt: "How has your country changed in the last ten years?", seconds: 90, tips: ["Trends: there has been a steady rise in…", "Contrast past and present.", "Speculate about the future."] },
    { id: "s3", title: "Job interview", prompt: "Answer: 'Tell me about a challenge you overcame.'", seconds: 90, tips: ["STAR: situation, task, action, result.", "Keep it concrete.", "Finish with what you learned."] },
    { id: "s4", title: "Hypothetical", prompt: "If you could change one law, what would it be and why?", seconds: 75, tips: ["Conditionals: If … were…, I would…", "Justify with consequences.", "Address a counter-argument."] },
    { id: "s5", title: "Explaining a process", prompt: "Explain how something you know well works, to a beginner.", seconds: 90, tips: ["Passive voice: it is heated / it gets stored…", "Sequence: initially, subsequently, finally.", "Check understanding: in other words…"] },
    { id: "s6", title: "Culture", prompt: "What should a visitor know about your culture before arriving?", seconds: 90, tips: ["Tend to / are likely to…", "Give do's and don'ts.", "Explain one custom's origin."] },
  ],
  C1: [
    { id: "s1", title: "Nuanced opinion", prompt: "To what extent does language shape the way we think? Speak for two minutes.", seconds: 120, tips: ["Hedge: arguably, to some degree…", "Cite an example or study you know.", "Distinguish correlation from causation."] },
    { id: "s2", title: "Impromptu defence", prompt: "Defend an opinion you personally disagree with, convincingly.", seconds: 120, tips: ["Steel-man the position.", "Use concessive clauses: while it may seem…", "Maintain a persuasive register."] },
    { id: "s3", title: "Abstract description", prompt: "Describe the feeling of learning something difficult, without naming the skill.", seconds: 90, tips: ["Rich metaphor and imagery.", "Vary sentence rhythm.", "Land on a resonant closing line."] },
  ],
};

/* ---------------- authored: writing tasks ---------------- */
const WRITING = {
  A1: [
    { id: "w1", title: "About me", prompt: "Write 30–50 words about yourself: name, age, family, what you like.", min: 30, max: 60, hints: ["I am…", "I have…", "I like…"] },
    { id: "w2", title: "My best friend", prompt: "Write 30–50 words about your best friend.", min: 30, max: 60, hints: ["His/Her name is…", "He/She is… years old.", "We like to…"] },
    { id: "w3", title: "My house", prompt: "Describe your house or flat in 40–60 words.", min: 40, max: 70, hints: ["There is / there are…", "My favourite room is…"] },
    { id: "w4", title: "A postcard", prompt: "Write a short postcard to a friend from a holiday (40–60 words).", min: 40, max: 70, hints: ["Dear…", "I am in…", "The weather is…", "See you soon!"] },
  ],
  A2: [
    { id: "w1", title: "Last holiday", prompt: "Write 60–80 words about your last holiday. Use the past simple.", min: 60, max: 90, hints: ["Last summer I went to…", "We visited…", "The best part was…"] },
    { id: "w2", title: "An invitation", prompt: "Write an email inviting a friend to your birthday (60–80 words).", min: 60, max: 90, hints: ["Would you like to…?", "It starts at…", "Let me know if…"] },
    { id: "w3", title: "My favourite place", prompt: "Write 80–100 words about your favourite place.", min: 80, max: 110, hints: ["It is located…", "I go there when…", "It makes me feel…"] },
    { id: "w4", title: "Daily routine", prompt: "Describe your daily routine in 60–80 words with time expressions.", min: 60, max: 90, hints: ["I usually…", "After that…", "In the evening…"] },
  ],
  B1: [
    { id: "w1", title: "For and against", prompt: "Write 100–120 words: 'Studying online is better than studying at school.' Give both sides.", min: 100, max: 140, hints: ["On the one hand…", "On the other hand…", "In my opinion…"] },
    { id: "w2", title: "A narrative", prompt: "Write a 100–120 word story that begins: 'When I opened the door, I couldn't believe my eyes.'", min: 100, max: 140, hints: ["Use narrative tenses.", "Describe feelings.", "End with a twist."] },
    { id: "w3", title: "A formal email", prompt: "Write a formal email (100–120 words) asking a language school for course information.", min: 100, max: 140, hints: ["Dear Sir or Madam,", "I am writing to enquire about…", "I look forward to your reply."] },
    { id: "w4", title: "A review", prompt: "Write a 100–120 word review of a film or book you recently enjoyed.", min: 100, max: 140, hints: ["Brief plot without spoilers.", "What impressed you.", "Who you'd recommend it to."] },
  ],
  B2: [
    { id: "w1", title: "Opinion essay", prompt: "Write 140–180 words: 'Cities should ban private cars from their centres.' Do you agree?", min: 140, max: 200, hints: ["Clear thesis in paragraph one.", "One paragraph per argument.", "Concede and refute a counter-argument."] },
    { id: "w2", title: "A report", prompt: "Write a 140–180 word report on how students in your school use technology, with a recommendation.", min: 140, max: 200, hints: ["Use headings: Introduction, Findings, Recommendation.", "Passive voice where natural.", "Quantify: the majority of…, one in three…"] },
    { id: "w3", title: "A complaint", prompt: "Write a formal complaint (140–180 words) about a product that arrived damaged.", min: 140, max: 200, hints: ["State facts and dates precisely.", "Firm but polite register.", "Say exactly what you expect to happen."] },
    { id: "w4", title: "An article", prompt: "Write a magazine article (140–180 words): 'Three habits that changed my life.'", min: 140, max: 200, hints: ["Hook the reader in line one.", "One vivid example per habit.", "End with encouragement."] },
  ],
  C1: [
    { id: "w1", title: "Discursive essay", prompt: "Write 220–260 words: 'Universal basic income is inevitable.' Discuss with reference to work, technology, and society.", min: 220, max: 300, hints: ["Frame the debate before taking a side.", "Acknowledge complexity; avoid absolutes.", "Use precise, low-frequency vocabulary naturally."] },
    { id: "w2", title: "A proposal", prompt: "Write a 220–260 word proposal to your city council for improving public spaces.", min: 220, max: 300, hints: ["Sections: Aim, Current situation, Proposal, Benefits.", "Persuasive but measured tone.", "Anticipate objections."] },
  ],
};

/* ---------------- authored: C1 seed lessons ---------------- */
const C1_GRAMMAR = [
  {
    id: "g1", title: "Inversion for emphasis", lead: "Advanced English uses inversion — putting the auxiliary before the subject — to add drama and formality. It is common in writing, speeches, and formal speaking.",
    leadTr: { uz: "Ilg'or ingliz tilida urg'u berish uchun inversiya ishlatiladi — yordamchi fe'l egadan oldin keladi. Bu yozma nutq va rasmiy uslubda ko'p uchraydi.", ru: "В продвинутом английском для усиления используется инверсия — вспомогательный глагол ставится перед подлежащим. Это характерно для письменной и формальной речи." },
    situation: "", blocks: [
      { h: "Negative adverbials", p: ["After never, rarely, seldom, little, no sooner, not only — invert subject and auxiliary."], ex: ["Never have I seen such dedication.", "Not only did she win, but she also broke the record."] },
      { h: "Conditionals without 'if'", p: ["Had / Should / Were can replace 'if' in formal conditionals."], ex: ["Had I known, I would have called.", "Should you need anything, ask."] },
      { h: "So / Such … that", p: ["So + adjective and Such + noun phrase can open the sentence with inversion."], ex: ["So intense was the storm that flights stopped.", "Such was the noise that nobody slept."] },
    ],
    tip: "Inversion is a spice, not a staple — one per paragraph is plenty.",
    examples: ["Rarely does a film capture a book so well.", "Little did they know what awaited them.", "No sooner had we arrived than it started to rain."],
    mistakes: [
      { x: "Never I have seen such a thing.", v: "Never have I seen such a thing — auxiliary before subject." },
      { x: "Not only she sings, but she dances.", v: "Not only does she sing, but she also dances." },
    ],
    quiz: [
      { q: "___ had the meeting started when the fire alarm rang.", o: ["No sooner", "Not only", "Rarely", "Should"], a: 0, e: "No sooner had X happened than Y — paired with 'than'.", d: "hard" },
      { q: "___ you require assistance, our team is available around the clock.", o: ["Were", "Should", "Had", "So"], a: 1, e: "Should = if, in formal conditionals: Should you require…", d: "hard" },
      { q: "Not only ___ the deadline, she exceeded every target.", o: ["she met", "met she", "did she meet", "she did meet"], a: 2, e: "After 'not only' use auxiliary + subject + verb: did she meet.", d: "hard" },
      { q: "___ was the demand that the servers crashed.", o: ["So", "Such", "Never", "Little"], a: 1, e: "Such + was + noun phrase: Such was the demand that…", d: "hard" },
      { q: "Had I known about the traffic, I ___ earlier.", o: ["would leave", "left", "would have left", "had left"], a: 2, e: "Had I known = If I had known → would have left (third conditional).", d: "hard" },
    ],
  },
  {
    id: "g2", title: "Cleft sentences", lead: "Cleft sentences (It was… that…, What I need is…) split one message into two clauses to control emphasis — a hallmark of fluent, natural English.",
    leadTr: { uz: "Cleft gaplar (It was… that…, What I need is…) bitta fikrni ikki qismga bo'lib, urg'uni boshqaradi — bu ravon ingliz tilining belgisi.", ru: "Расщеплённые предложения (It was… that…, What I need is…) делят одну мысль на две части, управляя акцентом — признак свободного владения языком." },
    situation: "", blocks: [
      { h: "It-clefts", p: ["Emphasise who, what, when or where with It + be + focus + that/who."], ex: ["It was Maria who solved it.", "It was in 2019 that everything changed."] },
      { h: "Wh-clefts", p: ["What + clause + be + focus emphasises the thing itself."], ex: ["What I need is a long holiday.", "What annoyed me was the silence afterwards."] },
      { h: "All-clefts", p: ["All + clause + be + focus means 'the only thing'."], ex: ["All I asked for was five minutes.", "All it takes is practice."] },
    ],
    tip: "In speech, wh-clefts buy you thinking time while sounding sophisticated.",
    examples: ["It's the small details that matter.", "What makes her different is her patience.", "All we can do is wait."],
    mistakes: [
      { x: "It was Maria which solved it.", v: "Use who for people: It was Maria who solved it." },
      { x: "What I need it is a holiday.", v: "No extra pronoun: What I need is a holiday." },
    ],
    quiz: [
      { q: "___ the ending that ruined the film for me.", o: ["What was", "It was", "All was", "That was"], a: 1, e: "It-cleft: It was + focus + that…", d: "hard" },
      { q: "What impressed the panel ___ her honesty.", o: ["was", "were", "it was", "that was"], a: 0, e: "Wh-cleft takes singular be: What impressed them was…", d: "hard" },
      { q: "___ I'm saying is that we need more time.", o: ["All", "What", "It", "Such"], a: 1, e: "What I'm saying is… — emphasising the message.", d: "medium" },
      { q: "It was only when I reread the letter ___ I understood.", o: ["when", "which", "that", "then"], a: 2, e: "It-cleft closes with that: …that I understood.", d: "hard" },
    ],
  },
  {
    id: "g3", title: "The subjunctive & formal structures", lead: "Formal English preserves the subjunctive after verbs like suggest, demand, insist — and fixed phrases like 'be that as it may'. Mastering it lifts your writing register instantly.",
    leadTr: { uz: "Rasmiy ingliz tilida suggest, demand, insist kabi fe'llardan keyin subjunktiv saqlanadi. Uni egallash yozuv uslubingizni darhol ko'taradi.", ru: "Формальный английский сохраняет сослагательное наклонение после глаголов suggest, demand, insist. Владение им сразу повышает регистр письма." },
    situation: "", blocks: [
      { h: "Mandative subjunctive", p: ["After suggest/recommend/demand/insist + that, use the base form for all persons."], ex: ["They insisted that she be present.", "We recommend that he take the earlier train."] },
      { h: "Formal fixed phrases", p: ["Some subjunctives survive only in set expressions."], ex: ["Be that as it may…", "Suffice it to say…", "Far be it from me to judge."] },
      { h: "Were-subjunctive", p: ["Use 'were' for all persons in hypotheticals."], ex: ["If I were in your position…", "I wish it were simpler."] },
    ],
    tip: "In American English the mandative subjunctive is standard; British English often uses 'should' instead — both are correct.",
    examples: ["The board demanded that the report be rewritten.", "It is essential that every voice be heard.", "If he were honest, he'd admit it."],
    mistakes: [
      { x: "They suggested that he goes home.", v: "Base form after suggest: …that he go home." },
      { x: "If I was you, I'd wait.", v: "Hypothetical: If I were you, I'd wait." },
    ],
    quiz: [
      { q: "The committee insisted that the policy ___ reviewed annually.", o: ["is", "be", "was", "were"], a: 1, e: "Mandative subjunctive: insisted that it be reviewed.", d: "hard" },
      { q: "It is vital that she ___ informed immediately.", o: ["is", "was", "be", "will be"], a: 2, e: "It is vital that + base form: …that she be informed.", d: "hard" },
      { q: "I wish it ___ possible to be in two places at once.", o: ["was", "is", "were", "be"], a: 2, e: "Wish + were-subjunctive: I wish it were possible.", d: "medium" },
    ],
  },
];

const C1_VOCAB = [
  {
    id: "v1", title: "Precision & nuance",
    words: [
      { w: "ubiquitous", pos: "adj", ipa: "/juːˈbɪkwɪtəs/", uz: "hamma joyda uchraydigan", ru: "вездесущий", def: "present or found everywhere", ex: "Smartphones have become ubiquitous." },
      { w: "ambivalent", pos: "adj", ipa: "/æmˈbɪvələnt/", uz: "ikkilangan", ru: "двойственный", def: "having mixed feelings", ex: "She felt ambivalent about the move." },
      { w: "scrutinise", pos: "v", ipa: "/ˈskruːtənaɪz/", uz: "sinchiklab tekshirmoq", ru: "тщательно изучать", def: "to examine very carefully", ex: "Auditors scrutinised every transaction." },
      { w: "tenuous", pos: "adj", ipa: "/ˈtenjuəs/", uz: "zaif, asossiz", ru: "слабый, шаткий", def: "very weak or slight", ex: "The link between the events is tenuous." },
      { w: "exacerbate", pos: "v", ipa: "/ɪɡˈzæsəbeɪt/", uz: "og'irlashtirmoq", ru: "усугублять", def: "to make a problem worse", ex: "Panic buying exacerbated the shortage." },
      { w: "pragmatic", pos: "adj", ipa: "/præɡˈmætɪk/", uz: "amaliy", ru: "прагматичный", def: "dealing with things practically", ex: "We need a pragmatic solution, not theory." },
      { w: "salient", pos: "adj", ipa: "/ˈseɪliənt/", uz: "eng muhim", ru: "существенный", def: "most noticeable or important", ex: "Summarise the salient points." },
      { w: "mitigate", pos: "v", ipa: "/ˈmɪtɪɡeɪt/", uz: "yumshatmoq", ru: "смягчать", def: "to make less severe", ex: "Trees mitigate the heat in cities." },
      { w: "candid", pos: "adj", ipa: "/ˈkændɪd/", uz: "ochiqko'ngil, samimiy", ru: "откровенный", def: "truthful and straightforward", ex: "She was candid about her doubts." },
      { w: "resilient", pos: "adj", ipa: "/rɪˈzɪliənt/", uz: "bardoshli", ru: "стойкий", def: "able to recover quickly from difficulty", ex: "She is remarkably resilient." },
    ],
  },
];

/* ---------------- authored: Real English scenarios ---------------- */
const SCENARIOS = [
  {
    id: "hotel", title: "Checking into a hotel", emoji: "🏨", level: "A2",
    steps: [
      { ai: "Good evening. Welcome to the Grand Hotel. How can I help you?", hints: ["I have a reservation under the name…", "I'd like to check in, please."], expects: ["reservation", "check in", "booking", "room"] },
      { ai: "Of course. May I see your passport, please? And how many nights will you be staying?", hints: ["Here you are.", "Three nights, until Friday."], expects: ["night", "here", "until", "passport"] },
      { ai: "Thank you. You're in room 412 on the fourth floor. Breakfast is from 7 to 10. Anything else?", hints: ["What time is check-out?", "Is there Wi-Fi in the room?"], expects: ["check-out", "wifi", "wi-fi", "time", "breakfast", "thank"] },
      { ai: "Check-out is at noon, and the Wi-Fi password is in your key folder. Enjoy your stay!", hints: ["Thank you very much!"], expects: ["thank"] },
    ],
  },
  {
    id: "restaurant", title: "At a restaurant", emoji: "🍽️", level: "A2",
    steps: [
      { ai: "Good afternoon! Table for how many?", hints: ["A table for two, please."], expects: ["table", "two", "one", "for"] },
      { ai: "Right this way. Here are the menus. Can I get you something to drink first?", hints: ["Still water, please.", "Two lemonades, please."], expects: ["water", "juice", "tea", "coffee", "lemonade", "please"] },
      { ai: "Excellent. And are you ready to order, or do you need a few minutes?", hints: ["I'll have the grilled chicken, please.", "Could we have a few more minutes?"], expects: ["have", "order", "minutes", "chicken", "salad", "soup"] },
      { ai: "Great choice. I'll be right back with your order. Enjoy!", hints: ["Thank you!"], expects: ["thank"] },
    ],
  },
  {
    id: "airport", title: "At the airport", emoji: "✈️", level: "B1",
    steps: [
      { ai: "Good morning. May I see your passport and booking reference, please?", hints: ["Good morning, here's my passport.", "Here you are — the reference is on my phone."], expects: ["passport", "here", "reference", "morning"] },
      { ai: "Thank you. Are you checking in any luggage today?", hints: ["Yes, one suitcase, please.", "No, I only have hand luggage."], expects: ["suitcase", "luggage", "bag", "hand", "one", "no"] },
      { ai: "Noted. Would you prefer a window or an aisle seat?", hints: ["A window seat, please."], expects: ["window", "aisle", "seat"] },
      { ai: "Done — seat 23A. Boarding starts at 9:40 at gate B7. Have a pleasant flight!", hints: ["What time does boarding finish?", "Thank you very much."], expects: ["thank", "time", "boarding", "gate"] },
    ],
  },
  {
    id: "interview", title: "Job interview", emoji: "💼", level: "B2",
    steps: [
      { ai: "Thanks for coming in. To start — could you tell me a little about yourself?", hints: ["Focus on experience relevant to the role.", "Keep it to 30–45 seconds."], expects: ["experience", "work", "study", "years", "i am", "i've"] },
      { ai: "Interesting. And why are you interested in this particular position?", hints: ["Connect your goals to the company's mission.", "Mention something specific about the company."], expects: ["because", "company", "team", "grow", "opportunity", "interested"] },
      { ai: "Tell me about a challenge you faced and how you handled it.", hints: ["Use STAR: situation, task, action, result.", "Finish with what you learned."], expects: ["challenge", "problem", "solved", "learned", "result", "when"] },
      { ai: "Great. Do you have any questions for us?", hints: ["Ask about the team, growth, or next steps."], expects: ["question", "team", "next", "when", "what", "how"] },
    ],
  },
  {
    id: "doctor", title: "At the doctor", emoji: "🩺", level: "B1",
    steps: [
      { ai: "Come in, take a seat. What seems to be the problem?", hints: ["I've had a sore throat for three days.", "I've been feeling dizzy lately."], expects: ["throat", "head", "pain", "hurt", "feel", "days", "fever", "cough"] },
      { ai: "I see. Have you taken any medicine for it? Any allergies I should know about?", hints: ["Just paracetamol.", "I'm allergic to penicillin."], expects: ["paracetamol", "nothing", "allergic", "no", "yes", "medicine"] },
      { ai: "Alright. It looks like a mild infection. I'll prescribe something — take it twice a day after meals.", hints: ["How long should I take it?", "Should I stay home from work?"], expects: ["how long", "days", "work", "thank", "should"] },
      { ai: "Five days should do it, and rest for at least two. Come back if it gets worse. Take care!", hints: ["Thank you, doctor."], expects: ["thank"] },
    ],
  },
  {
    id: "phone", title: "Making a phone call", emoji: "📞", level: "B1",
    steps: [
      { ai: "Good morning, Brightline Agency, Sarah speaking. How can I help you?", hints: ["Hello, could I speak to Mr Adams, please?", "I'm calling about the advertisement."], expects: ["speak", "calling", "hello", "could", "about"] },
      { ai: "I'm afraid Mr Adams is in a meeting right now. Would you like to leave a message?", hints: ["Yes, please. Could you tell him that… called?", "When would be a good time to call back?"], expects: ["message", "call back", "tell", "yes", "when"] },
      { ai: "Of course, I'll pass that on. Could I take your name and number?", hints: ["It's… — my number is…", "Spell your name if it's unusual."], expects: ["name", "number", "my", "is"] },
      { ai: "Perfect, I've got that. He'll get back to you this afternoon. Thanks for calling!", hints: ["Thank you, goodbye!"], expects: ["thank", "bye"] },
    ],
  },
];

/* ---------------- placement: tag skills ---------------- */
const placement = placementSrc.map((q, i) => ({
  b: q.b, q: q.q, o: q.o, a: q.a,
  skill: /read|passage|text/i.test(q.q) ? "reading" : i % 4 === 3 ? "vocabulary" : "grammar",
}));

/* ---------------- assemble ---------------- */
const levels = ["A1", "A2", "B1", "B2", "C1"].map((lvl) => {
  const meta = LEVEL_META[lvl];
  const isC1 = lvl === "C1";
  return {
    id: lvl, name: meta.name, tagline: meta.tagline, weeks: meta.weeks,
    skills: {
      grammar: isC1 ? C1_GRAMMAR : grammarLessons(lvl),
      vocabulary: isC1 ? C1_VOCAB : vocabUnits(lvl),
      reading: isC1 ? [] : readingLessons(lvl),
      listening: isC1 ? [] : listeningLessons(lvl),
      speaking: SPEAKING[lvl] || [],
      writing: WRITING[lvl] || [],
    },
  };
});

/* ---------------- enrichment from the shared question/vocab bank ---------------- */
const usable = (q) => !/chart|graph|table|figure|diagram|axis|SAT/i.test(q[0]) && !/SAT/i.test(q[7] || "");
const toQuiz = (q) => ({ q: strip(q[0]), o: q[1].map(strip), a: q[2], e: strip(q[7] || ""), d: (q[3] || "Medium").toLowerCase() });
const used = new Set();
function takeQuestions(domain, count, { topic, diff } = {}) {
  const pool = (satEnglish[domain] || []).filter((q) =>
    usable(q) && !used.has(q[0]) &&
    (!topic || q[4] === topic) &&
    (!diff || diff.includes(q[3])) &&
    String(q[0]).length < 1400);
  const picked = pool.slice(0, count);
  picked.forEach((q) => used.add(q[0]));
  return picked.map(toQuiz);
}

// 1) Trilingual academic vocabulary: 25 units → B1 (1–8), B2 (9–17), C1 (18–25)
const toUnit = (u, n) => ({
  id: `sv${u.unit}`, title: `Academic words · Set ${n}`,
  words: u.words.map((w) => ({
    w: w.word, pos: w.pos, ipa: w.pron ? `/${w.pron}/` : "", uz: w.uz, ru: w.ru,
    def: w.def || "", ex: w.sentence || "", syn: w.syn || "", ant: w.ant || "",
  })),
});
const vocabFor = (lvl) => {
  const range = { B1: [0, 8], B2: [8, 17], C1: [17, 25] }[lvl];
  return range ? satVocab.slice(range[0], range[1]).map((u, i) => toUnit(u, i + 1)) : [];
};

// 2) Grammar-practice lessons from convention/craft topics (with uz/ru leads)
const practiceLesson = (def) => ({
  id: def.id, title: def.title, lead: def.lead, leadTr: def.leadTr, situation: "",
  blocks: [], tip: "", examples: [], mistakes: [],
  quiz: takeQuestions(def.pick[0], def.pick[2], { topic: def.pick[1] }),
});

// 3) Reading sets: passage-based question collections
const readingSet = (def) => ({
  id: def.id, title: def.title,
  text: "Each task below contains its own short passage. Read it closely, then answer — this trains exactly the kind of reading you will meet in real academic texts and exams.\n\nQuyida har bir topshiriqning o'z qisqa matni bor. Diqqat bilan o'qing, so'ng javob bering.",
  quiz: takeQuestions(def.domain, def.count, { topic: def.topic, diff: def.diff }),
});

for (const level of levels) {
  const extraVocab = vocabFor(level.id);
  if (extraVocab.length) level.skills.vocabulary = [...level.skills.vocabulary, ...extraVocab];
  const gp = GRAMMAR_PRACTICE[level.id];
  if (gp) level.skills.grammar = [...level.skills.grammar, ...gp.map(practiceLesson).filter((l) => l.quiz.length >= 6)];
  const rs = READING_SETS[level.id];
  if (rs) level.skills.reading = [...level.skills.reading, ...rs.map(readingSet).filter((l) => l.quiz.length >= 3)];
  if (level.id === "C1") level.skills.listening = [...level.skills.listening, ...C1_LISTENING];
}

const out = { levels, placement, scenarios: [...SCENARIOS, ...EXTRA_SCENARIOS] };
const blob = JSON.stringify(out);
const satHits = (blob.match(/\bSAT\b/g) || []).length;
if (satHits) console.warn(`WARNING: ${satHits} 'SAT' mentions leaked into content`);
mkdirSync(join(root, "src/content"), { recursive: true });
writeFileSync(join(root, "src/content/content.json"), JSON.stringify(out));
const counts = levels.map((l) => `${l.id}: g${l.skills.grammar.length} v${l.skills.vocabulary.length} r${l.skills.reading.length} li${l.skills.listening.length} s${l.skills.speaking.length} w${l.skills.writing.length}`);
console.log("content.json written.", counts.join(" | "), "| placement:", placement.length, "| scenarios:", SCENARIOS.length);
