// Additional authored reading & listening lessons (Uzbek-relevant topics),
// each with a built-in quiz and uz/ru explanations, plus quiz translations
// for the authored C1 listening set.
const P = (uz, ru) => ({ uz, ru });

export const EXTRA_READING = {
  A1: [
    {
      id: "r6", title: "Aziz's Morning",
      text: "Aziz lives in Tashkent with his family. Every morning he gets up at seven o'clock. His mother makes fresh non and green tea for breakfast. Aziz eats breakfast with his little sister, Madina. At eight o'clock he takes the metro to school. The metro station is beautiful — it has big lamps and pictures on the walls. School starts at nine o'clock. Aziz likes Mondays because he has an English lesson. His English teacher is from India, and her lessons are fun. After school, Aziz plays football with his friends in the yard.",
      quiz: [
        { q: "What time does Aziz get up?", o: ["At six o'clock", "At seven o'clock", "At eight o'clock", "At nine o'clock"], a: 1, e: "The text says: every morning he gets up at seven o'clock.", d: "easy" },
        { q: "What does his mother make for breakfast?", o: ["Plov and salad", "Eggs and coffee", "Non and green tea", "Soup and bread"], a: 2, e: "His mother makes fresh non and green tea for breakfast.", d: "easy" },
        { q: "How does Aziz go to school?", o: ["By bus", "By car", "On foot", "By metro"], a: 3, e: "At eight o'clock he takes the metro to school.", d: "easy" },
        { q: "Why does Aziz like Mondays?", o: ["He plays football", "He has an English lesson", "School finishes early", "His sister visits him"], a: 1, e: "He likes Mondays because he has an English lesson.", d: "easy" },
      ],
      quizTr: [
        P("Matnda: har kuni ertalab u soat yettida turadi.", "В тексте: каждое утро он встаёт в семь часов."),
        P("Onasi nonushtaga yangi non va ko'k choy tayyorlaydi.", "Мама готовит на завтрак свежий нон и зелёный чай."),
        P("Soat sakkizda u maktabga metroda boradi.", "В восемь часов он едет в школу на метро."),
        P("U dushanbani yaxshi ko'radi, chunki ingliz tili darsi bor.", "Он любит понедельник, потому что есть урок английского."),
      ],
    },
    {
      id: "r7", title: "A Postcard from Bukhara",
      text: "Dear Tom,\n\nHello from Bukhara! I am here with my parents for three days. Bukhara is a very old city in Uzbekistan. Today we visited the Ark fortress — it is very big and very old. Then we drank tea near a small lake called Lyabi-Hauz. The weather is sunny and warm. In the evening we eat shashlik and watch the lights on the old buildings. Tomorrow we want to buy presents at the market. I love this city!\n\nSee you soon,\nLola",
      quiz: [
        { q: "Who is Lola in Bukhara with?", o: ["Her friends", "Her parents", "Her class", "Her sister"], a: 1, e: "She writes: I am here with my parents for three days.", d: "easy" },
        { q: "What is the Ark?", o: ["A lake", "A market", "A fortress", "A restaurant"], a: 2, e: "Today we visited the Ark fortress.", d: "easy" },
        { q: "What is the weather like?", o: ["Cold and rainy", "Sunny and warm", "Windy", "Cloudy"], a: 1, e: "The weather is sunny and warm.", d: "easy" },
        { q: "What does Lola want to do tomorrow?", o: ["Visit the fortress", "Swim in the lake", "Go home", "Buy presents"], a: 3, e: "Tomorrow we want to buy presents at the market.", d: "easy" },
      ],
      quizTr: [
        P("U yozadi: men bu yerda ota-onam bilan uch kunga keldim.", "Она пишет: я здесь с родителями на три дня."),
        P("Bugun biz Ark qal'asiga bordik — Ark bu qal'a.", "Сегодня мы посетили крепость Арк — Арк это крепость."),
        P("Ob-havo quyoshli va iliq.", "Погода солнечная и тёплая."),
        P("Ertaga bozordan sovg'alar sotib olmoqchimiz.", "Завтра мы хотим купить подарки на рынке."),
      ],
    },
  ],
  A2: [
    {
      id: "r6", title: "Navruz in Our Mahalla",
      text: "Last March our mahalla celebrated Navruz, and it was the best day of spring. The women started cooking sumalak the night before. Sumalak is a sweet dish made from young wheat, and it must cook slowly for almost twenty-four hours. People took turns stirring the big pot and made wishes. In the morning, the men set up long tables in the yard, and every family brought a plate of food. There was plov, somsa, fresh salads and a lot of sweets. Children ran everywhere, and my grandfather told old stories about his childhood. In the afternoon there was a small concert: our neighbours sang songs and one boy played the doira. When the sumalak was finally ready, everyone got a small bowl to take home. I was tired at the end of the day, but very happy.",
      quiz: [
        { q: "When did the women start cooking sumalak?", o: ["In the morning", "The night before", "After the concert", "A week before"], a: 1, e: "They started cooking the night before, because sumalak cooks for almost 24 hours.", d: "medium" },
        { q: "What did people do while stirring the pot?", o: ["Sang songs", "Told stories", "Made wishes", "Played the doira"], a: 2, e: "People took turns stirring the big pot and made wishes.", d: "easy" },
        { q: "What did every family bring?", o: ["A plate of food", "A musical instrument", "A table", "A present"], a: 0, e: "Every family brought a plate of food to the long tables.", d: "easy" },
        { q: "What happened when the sumalak was ready?", o: ["The concert began", "Everyone got a bowl to take home", "The children ran away", "Grandfather told a story"], a: 1, e: "When it was finally ready, everyone got a small bowl to take home.", d: "medium" },
      ],
      quizTr: [
        P("Ular bir kun oldin kechqurun pishirishni boshladilar, chunki sumalak deyarli 24 soat pishadi.", "Готовить начали накануне вечером, потому что сумаляк варится почти 24 часа."),
        P("Odamlar navbat bilan qozonni aralashtirib, niyat qilishdi.", "Люди по очереди мешали котёл и загадывали желания."),
        P("Har bir oila bitta laganda taom olib keldi.", "Каждая семья принесла блюдо с едой."),
        P("Sumalak tayyor bo'lgach, hamma uyiga olib ketish uchun kichik kosa oldi.", "Когда сумаляк был готов, каждый получил маленькую пиалу с собой."),
      ],
    },
    {
      id: "r7", title: "The Tashkent Metro",
      text: "The Tashkent metro opened in 1977, and it was the first metro in Central Asia. Today it has more than fifty stations, and many of them look like small museums. Kosmonavtlar station, for example, is decorated with pictures of famous astronauts, and Alisher Navoiy station has beautiful blue domes like an old madrasah. For many years it was forbidden to take photos in the metro, because it was also a bomb shelter. The rule changed in 2018, and now tourists come with their cameras every day. The metro is cheap and fast. Trains come every four or five minutes, and you can cross the whole city in half an hour. Many people say it is the most beautiful way to travel in Tashkent — and the coolest place in the hot summer!",
      quiz: [
        { q: "Why was the Tashkent metro special in 1977?", o: ["It was the biggest in the world", "It was the first in Central Asia", "It had fifty stations", "It was free"], a: 1, e: "It was the first metro in Central Asia.", d: "easy" },
        { q: "What is special about Kosmonavtlar station?", o: ["It has blue domes", "It is the oldest station", "It shows famous astronauts", "It is a museum now"], a: 2, e: "Kosmonavtlar is decorated with pictures of famous astronauts.", d: "easy" },
        { q: "Why were photos forbidden for many years?", o: ["The stations were too dark", "The metro was also a bomb shelter", "Cameras were expensive", "Tourists were noisy"], a: 1, e: "Photos were forbidden because the metro was also a bomb shelter; the rule changed in 2018.", d: "medium" },
        { q: "How often do trains come?", o: ["Every ten minutes", "Every half an hour", "Every four or five minutes", "Every minute"], a: 2, e: "Trains come every four or five minutes.", d: "easy" },
      ],
      quizTr: [
        P("U Markaziy Osiyodagi birinchi metro edi.", "Это было первое метро в Центральной Азии."),
        P("Kosmonavtlar bekati mashhur kosmonavtlar tasvirlari bilan bezatilgan.", "Станция Космонавтлар украшена изображениями известных космонавтов."),
        P("Suratga olish taqiqlangan edi, chunki metro ayni paytda bomba boshpanasi ham edi; qoida 2018-yilda o'zgardi.", "Фотографировать было запрещено, потому что метро было также бомбоубежищем; правило изменили в 2018 году."),
        P("Poyezdlar har to'rt-besh daqiqada keladi.", "Поезда приходят каждые четыре-пять минут."),
      ],
    },
  ],
  B1: [
    {
      id: "r6", title: "The Silk Road, Then and Now",
      text: "For almost two thousand years, the cities of Samarkand, Bukhara and Khiva stood at the heart of the Silk Road — the network of trade routes that connected China with Europe. Caravans carried silk, paper, spices and glass, but historians argue that the most valuable cargo was invisible: ideas. Mathematics, medicine, religions and even recipes travelled with the merchants, which is why the region produced scholars like Al-Khwarizmi, whose name gave us the word 'algorithm'.\n\nThe caravans disappeared centuries ago, yet the idea of the Silk Road is having a second life. High-speed trains now link Tashkent and Samarkand in just over two hours, and container trains from China cross Central Asia on their way to European markets. Tourism is growing even faster: visitors who once knew Uzbekistan only from history books now walk through Registan Square with audio guides in a dozen languages. The challenge, locals say, is to welcome the world without turning living cities into museums. A trader from the old bazaar put it simply: 'Our ancestors sold silk to strangers. We sell them memories — but we still live here.'",
      quiz: [
        { q: "According to historians, what was the most valuable cargo on the Silk Road?", o: ["Silk and spices", "Ideas", "Paper and glass", "Gold"], a: 1, e: "Historians argue the most valuable cargo was invisible: ideas.", d: "medium" },
        { q: "Why is Al-Khwarizmi mentioned?", o: ["He built Registan Square", "He was a famous merchant", "He shows how the region produced great scholars", "He invented the high-speed train"], a: 2, e: "He is an example of the scholars the region produced — his name gave us 'algorithm'.", d: "medium" },
        { q: "What does 'a second life' refer to?", o: ["The rebuilding of old caravans", "The modern revival of Silk Road connections", "A famous book about the region", "The reopening of the old bazaar"], a: 1, e: "Modern trains, trade and tourism are reviving the idea of the Silk Road.", d: "medium" },
        { q: "What is the locals' main concern about tourism?", o: ["Tourists don't spend enough money", "Cities could become museums instead of living places", "Trains are too fast", "Audio guides are inaccurate"], a: 1, e: "The challenge is to welcome the world without turning living cities into museums.", d: "hard" },
      ],
      quizTr: [
        P("Tarixchilar fikricha, eng qimmatli yuk ko'rinmas edi: g'oyalar.", "По мнению историков, самым ценным грузом были невидимые вещи: идеи."),
        P("U mintaqa yetishtirgan olimlarga misol — uning nomidan 'algoritm' so'zi kelib chiqqan.", "Он пример учёных региона — от его имени произошло слово «алгоритм»."),
        P("Zamonaviy poyezdlar, savdo va turizm Ipak yo'li g'oyasini qayta jonlantirmoqda.", "Современные поезда, торговля и туризм возрождают идею Шёлкового пути."),
        P("Muammo — dunyoni kutib olishda jonli shaharlarni muzeyga aylantirib qo'ymaslik.", "Задача — принимать мир, не превращая живые города в музеи."),
      ],
    },
  ],
  B2: [
    {
      id: "r6", title: "A Startup Story from IT Park",
      text: "When Dilnoza left her stable accounting job to join a three-person startup at Tashkent's IT Park, her relatives were sceptical. 'They thought I had lost my mind,' she laughs. 'In their world, a good job meant a desk you kept for thirty years.' Four years later, her company employs sixty people and sells education software to schools in five countries.\n\nHer story reflects a wider shift. A decade ago, ambitious graduates in Uzbekistan generally faced a narrow choice: a government position, a bank, or emigration. The growth of the IT sector has added a fourth path, one in which fluency in English matters more than family connections. Companies serving foreign clients conduct interviews, meetings and code reviews in English, and salaries at successful firms can rival those abroad — without the cost of leaving home.\n\nYet Dilnoza warns against romanticising the sector. 'People see the beanbags and the free coffee, not the deadlines,' she says. Roughly half of new startups fail within two years, and the pressure to keep learning never stops. Her advice to students is unglamorous: master English first, learn to write clearly, and treat failure as tuition. 'My first startup collapsed in eight months,' she admits. 'It was the most expensive and most useful course I ever took.'",
      quiz: [
        { q: "How did Dilnoza's relatives react to her career change?", o: ["They encouraged her", "They thought it was a mistake", "They invested in her startup", "They asked her to emigrate"], a: 1, e: "They were sceptical — 'they thought I had lost my mind'.", d: "medium" },
        { q: "What 'wider shift' does the text describe?", o: ["Graduates now prefer banks", "More people are emigrating", "The IT sector has created a new career path", "Government jobs pay more than before"], a: 2, e: "The growth of the IT sector added a fourth path beyond government, banks or emigration.", d: "medium" },
        { q: "Why does English matter in this sector, according to the text?", o: ["It is required by law", "Companies work with foreign clients in English", "Universities teach only in English", "Family connections require it"], a: 1, e: "Companies serving foreign clients hold interviews, meetings and code reviews in English.", d: "medium" },
        { q: "What does Dilnoza mean by calling failure 'tuition'?", o: ["Startups should pay for courses", "Failure is expensive but teaches valuable lessons", "Education software is costly", "Students should avoid risk"], a: 1, e: "Her failed startup was 'the most expensive and most useful course' — failure teaches like a paid course.", d: "hard" },
      ],
      quizTr: [
        P("Ular ishonqiramay qarashdi — 'meni aqldan ozgan deb o'ylashdi'.", "Они отнеслись скептически — «думали, что я сошла с ума»."),
        P("IT sohasining o'sishi davlat ishi, bank yoki emigratsiyadan tashqari to'rtinchi yo'lni ochdi.", "Рост IT-сектора добавил четвёртый путь помимо госслужбы, банка или эмиграции."),
        P("Xorijiy mijozlar bilan ishlaydigan kompaniyalar suhbat va yig'ilishlarni ingliz tilida o'tkazadi.", "Компании с иностранными клиентами проводят собеседования и встречи на английском."),
        P("Muvaffaqiyatsizlik — pullik kursdek saboq beradi: qimmat, lekin juda foydali.", "Неудача учит, как платный курс: дорого, но очень полезно."),
      ],
    },
  ],
};

export const EXTRA_LISTENING = {
  A1: [
    {
      id: "l5", title: "At the Bazaar",
      script: "Seller: Good morning! Welcome! What would you like? — Customer: Good morning. How much are the tomatoes? — Seller: They are eight thousand som for one kilo. Very fresh, from Fergana! — Customer: OK, one kilo of tomatoes, please. And do you have apples? — Seller: Yes, red apples and green apples. The red ones are sweet. — Customer: Two kilos of red apples, please. How much is that together? — Seller: Tomatoes and apples… twenty-four thousand som. — Customer: Here you are. Thank you! — Seller: Thank you! Come again!",
      quiz: [
        { q: "How much are the tomatoes for one kilo?", o: ["Six thousand som", "Eight thousand som", "Ten thousand som", "Twenty-four thousand som"], a: 1, e: "The seller says: eight thousand som for one kilo.", d: "easy" },
        { q: "Where are the tomatoes from?", o: ["Tashkent", "Samarkand", "Fergana", "Bukhara"], a: 2, e: "Very fresh, from Fergana!", d: "easy" },
        { q: "Which apples does the customer buy?", o: ["Green apples", "Red apples", "Both kinds", "No apples"], a: 1, e: "The customer asks for two kilos of red apples.", d: "easy" },
        { q: "How much does the customer pay in total?", o: ["Eight thousand som", "Sixteen thousand som", "Twenty thousand som", "Twenty-four thousand som"], a: 3, e: "Tomatoes and apples together cost twenty-four thousand som.", d: "easy" },
      ],
      quizTr: [
        P("Sotuvchi aytadi: bir kilosi sakkiz ming so'm.", "Продавец говорит: восемь тысяч сумов за кило."),
        P("Juda yangi, Farg'onadan!", "Очень свежие, из Ферганы!"),
        P("Xaridor ikki kilo qizil olma so'raydi.", "Покупатель просит два кило красных яблок."),
        P("Pomidor va olma birgalikda yigirma to'rt ming so'm turadi.", "Помидоры и яблоки вместе стоят двадцать четыре тысячи сумов."),
      ],
    },
    {
      id: "l6", title: "Dilshod's Week",
      script: "Hello! My name is Dilshod. I am a student, and my week is very busy. From Monday to Friday I have classes at university. My favourite day is Wednesday, because we have English in the morning and sport in the afternoon. On Saturday I work in my uncle's shop. I help him from nine to five. It is hard work, but I like talking to people. Sunday is my free day. In the morning I play football with my friends, and in the evening we all have dinner at my grandmother's house. She makes the best plov in our city!",
      quiz: [
        { q: "What is Dilshod's favourite day?", o: ["Monday", "Wednesday", "Saturday", "Sunday"], a: 1, e: "His favourite day is Wednesday — English in the morning, sport in the afternoon.", d: "easy" },
        { q: "What does he do on Saturday?", o: ["He plays football", "He has classes", "He works in a shop", "He visits his grandmother"], a: 2, e: "On Saturday he works in his uncle's shop from nine to five.", d: "easy" },
        { q: "When does he play football?", o: ["On Wednesday afternoon", "On Saturday evening", "On Sunday morning", "Every day"], a: 2, e: "On Sunday morning he plays football with his friends.", d: "easy" },
        { q: "Who makes the best plov?", o: ["His uncle", "His mother", "Dilshod", "His grandmother"], a: 3, e: "She makes the best plov in our city — his grandmother.", d: "easy" },
      ],
      quizTr: [
        P("Uning sevimli kuni — chorshanba: ertalab ingliz tili, tushdan keyin sport.", "Его любимый день — среда: утром английский, днём спорт."),
        P("Shanba kuni u amakisining do'konida to'qqizdan beshgacha ishlaydi.", "В субботу он работает в магазине дяди с девяти до пяти."),
        P("Yakshanba ertalab u do'stlari bilan futbol o'ynaydi.", "В воскресенье утром он играет в футбол с друзьями."),
        P("Shahrimizdagi eng zo'r oshni buvisi tayyorlaydi.", "Лучший плов в городе готовит его бабушка."),
      ],
    },
  ],
  A2: [
    {
      id: "l5", title: "Ordering a Taxi",
      script: "Operator: City Taxi, good evening. How can I help you? — Caller: Good evening. I need a taxi to the airport, please. — Operator: Of course. Where are you now? — Caller: I'm at the Grand Hotel on Amir Temur Street. — Operator: And what time is your flight? — Caller: At eleven thirty tonight. I want to leave at eight thirty, to be safe. — Operator: Good idea. The evening traffic is heavy. A white car will come at eight thirty. The driver's name is Rustam. — Caller: How much will it cost? — Operator: About sixty thousand som. You can pay by card or cash. — Caller: Perfect, thank you very much. — Operator: Thank you for calling. Have a good flight!",
      quiz: [
        { q: "Where does the caller want to go?", o: ["To the Grand Hotel", "To Amir Temur Street", "To the airport", "To the city centre"], a: 2, e: "I need a taxi to the airport, please.", d: "easy" },
        { q: "Why does the caller want to leave at eight thirty?", o: ["The flight is at nine", "To be safe because of traffic", "The driver is busy later", "The hotel closes"], a: 1, e: "'I want to leave at eight thirty, to be safe' — the operator adds that evening traffic is heavy.", d: "medium" },
        { q: "Who is Rustam?", o: ["The caller", "The hotel manager", "The taxi driver", "The operator"], a: 2, e: "The driver's name is Rustam.", d: "easy" },
        { q: "How can the caller pay?", o: ["Only cash", "Only by card", "By card or cash", "At the airport"], a: 2, e: "You can pay by card or cash.", d: "easy" },
      ],
      quizTr: [
        P("Menga aeroportga taksi kerak, iltimos.", "Мне нужно такси в аэропорт, пожалуйста."),
        P("'Ehtiyot bo'lish uchun 8:30 da chiqmoqchiman' — operator kechki tirbandlik kuchli deydi.", "«Хочу выехать в 8:30 для надёжности» — оператор добавляет, что вечером сильные пробки."),
        P("Haydovchining ismi — Rustam.", "Имя водителя — Рустам."),
        P("Karta yoki naqd pul bilan to'lash mumkin.", "Оплатить можно картой или наличными."),
      ],
    },
    {
      id: "l6", title: "A School Trip to Samarkand",
      script: "Teacher: Good morning, everyone! Listen carefully, please. Tomorrow is our trip to Samarkand. The bus leaves at six o'clock in the morning, so don't be late! The journey takes about four hours. First we will visit Registan Square, and a guide will tell us about its history. After that, we will have lunch at a café near the square. In the afternoon we will see Ulugbek's observatory — he was a great astronomer, and he built it almost six hundred years ago. Please bring water, a hat and comfortable shoes, because we will walk a lot. And don't forget your student cards — the tickets are cheaper with them. Any questions?",
      quiz: [
        { q: "What time does the bus leave?", o: ["At four o'clock", "At six o'clock", "At nine o'clock", "At ten o'clock"], a: 1, e: "The bus leaves at six o'clock in the morning.", d: "easy" },
        { q: "What will the students do first in Samarkand?", o: ["Have lunch", "Visit the observatory", "Visit Registan Square", "Buy tickets"], a: 2, e: "First we will visit Registan Square, with a guide.", d: "easy" },
        { q: "Who was Ulugbek?", o: ["A guide", "A great astronomer", "A café owner", "A bus driver"], a: 1, e: "He was a great astronomer who built the observatory almost six hundred years ago.", d: "medium" },
        { q: "Why should students bring their student cards?", o: ["To enter the bus", "To get cheaper tickets", "To show the teacher", "To visit the café"], a: 1, e: "The tickets are cheaper with student cards.", d: "easy" },
      ],
      quizTr: [
        P("Avtobus ertalab soat oltida jo'naydi.", "Автобус отправляется в шесть утра."),
        P("Avval Registon maydoniga boramiz, gid tarixini so'zlab beradi.", "Сначала посетим площадь Регистан, гид расскажет её историю."),
        P("U buyuk astronom bo'lgan va rasadxonani qariyb olti yuz yil oldin qurgan.", "Он был великим астрономом и построил обсерваторию почти шестьсот лет назад."),
        P("Talaba guvohnomasi bilan chiptalar arzonroq.", "Со студенческим билетом билеты дешевле."),
      ],
    },
  ],
  B1: [
    {
      id: "l5", title: "Podcast: How I Finally Learned English",
      script: "Welcome back to Language Stories. Today's guest is Kamola, a designer from Tashkent. — Kamola: Thanks for having me. So, I studied English at school for seven years, and honestly, I couldn't order a coffee. I knew grammar rules, but speaking felt impossible. — Host: What changed? — Kamola: Two things. First, I stopped studying and started using the language. I changed my phone to English, I watched series with subtitles, and I joined a speaking club near Amir Temur square. The first meeting was terrifying — I forgot the word 'window'! But nobody laughed. Everyone there was making mistakes, and that's exactly why it worked. — Host: And the second thing? — Kamola: I made English part of my job. I started reading design articles in English, then writing short posts. When something is useful, you don't need motivation. My advice? Stop waiting until you're ready. You learn to speak by speaking badly first.",
      quiz: [
        { q: "What was Kamola's problem after seven years of school English?", o: ["She failed her exams", "She knew rules but couldn't speak", "She hated grammar", "She had no teacher"], a: 1, e: "She knew grammar rules, but speaking felt impossible — she couldn't even order a coffee.", d: "medium" },
        { q: "Why did the speaking club work for her?", o: ["The teachers were excellent", "It was free", "Everyone made mistakes, so she felt safe", "It met every day"], a: 2, e: "Everyone was making mistakes, 'and that's exactly why it worked'.", d: "medium" },
        { q: "How did she connect English to her job?", o: ["She translated documents", "She read design articles and wrote posts", "She taught design in English", "She moved abroad"], a: 1, e: "She started reading design articles in English, then writing short posts.", d: "medium" },
        { q: "What is her main advice?", o: ["Study grammar first", "Wait until you feel ready", "Find a good teacher", "Start speaking before you feel ready"], a: 3, e: "Stop waiting until you're ready — you learn to speak by speaking badly first.", d: "medium" },
      ],
      quizTr: [
        P("U grammatika qoidalarini bilardi, lekin gapirish imkonsiz tuyulardi — hatto kofe ham buyurtma qila olmasdi.", "Она знала правила грамматики, но говорить не могла — даже кофе заказать."),
        P("Hamma xato qilardi, 'aynan shuning uchun bu ish berdi'.", "Все ошибались, «именно поэтому это сработало»."),
        P("U ingliz tilida dizayn maqolalarini o'qib, keyin qisqa postlar yoza boshladi.", "Она начала читать статьи о дизайне на английском и писать короткие посты."),
        P("Tayyor bo'lishni kutmang — avval xato qilib gapirish orqali gapirishni o'rganasiz.", "Не ждите готовности — говорить учатся, сначала говоря с ошибками."),
      ],
    },
    {
      id: "l6", title: "Interview with a Plov Master",
      script: "Host: I'm standing in the Central Asian Plov Centre, and next to me is usta Karim, who has been making plov for thirty years. Usta, what's the secret? — Karim: People think the secret is a recipe. It isn't. It's attention. The rice, the carrots, the oil — they are a little different every day, and you must feel it. — Host: You cook in a kazan for two hundred people. Isn't that difficult? — Karim: The big kazan is actually more forgiving than a small pot. But you cannot leave it. Plov punishes impatient people. If you stir too early, you break the rice. If you're late with the fire, it burns. — Host: You trained your son as well? — Karim: Five years he only watched and prepared ingredients. People called me cruel! But when he finally cooked alone, his first plov was better than my first one. Watching is also learning. — Host: And your dream? — Karim: Simple. That my grandchildren eat plov made by their father, not bought in a package.",
      quiz: [
        { q: "According to Karim, what is the real secret of plov?", o: ["A family recipe", "Attention", "Expensive rice", "A big kazan"], a: 1, e: "People think the secret is a recipe. It isn't. It's attention.", d: "medium" },
        { q: "What does 'plov punishes impatient people' mean?", o: ["Cooking too fast ruins the dish", "Plov takes years to learn", "Customers must wait", "The fire is dangerous"], a: 0, e: "Stirring too early breaks the rice; being late with the fire burns it — impatience ruins it.", d: "hard" },
        { q: "How did Karim train his son at first?", o: ["He let him cook immediately", "He sent him to a school", "The son only watched and prepared ingredients", "They cooked together"], a: 2, e: "For five years his son only watched and prepared ingredients.", d: "medium" },
        { q: "What is Karim's dream?", o: ["To open more restaurants", "That his family keeps cooking plov themselves", "To write a recipe book", "To cook for a thousand people"], a: 1, e: "That his grandchildren eat plov made by their father, not bought in a package.", d: "medium" },
      ],
      quizTr: [
        P("Odamlar siri retseptda deb o'ylaydi. Yo'q. Siri — e'tibor.", "Люди думают, что секрет в рецепте. Нет. Секрет — внимание."),
        P("Erta aralashtirsangiz guruch sinadi; olovga kechiksangiz kuyadi — sabrsizlik oshni buzadi.", "Помешаешь рано — сломаешь рис; опоздаешь с огнём — подгорит: нетерпение губит плов."),
        P("Besh yil o'g'li faqat kuzatdi va masalliqlarni tayyorladi.", "Пять лет сын только наблюдал и готовил ингредиенты."),
        P("Nabiralari paketdan emas, otasi pishirgan oshni yeyishini orzu qiladi.", "Он мечтает, чтобы внуки ели плов, приготовленный их отцом, а не купленный в упаковке."),
      ],
    },
  ],
  B2: [
    {
      id: "l5", title: "Radio: Tourism Boom in Uzbekistan",
      script: "Good evening. Tonight we look at tourism in Uzbekistan, a sector that has grown dramatically since visa-free travel was introduced for dozens of countries. Before the reforms, visitors faced paperwork that could take weeks; today, most European tourists simply board a plane. The results are visible in the arrival numbers, which have multiplied several times over, and in the hotels of Samarkand, where finding a room in high season has become a challenge. But rapid growth brings dilemmas. Preservation experts warn that historic monuments were never designed for millions of feet, and some restoration work has been criticised for prioritising appearance over authenticity — fresh tiles where worn ones told a story. There is also the question of who benefits. Large hotels are often owned by international chains, while family guesthouses fight for visibility on booking platforms. Still, most economists agree the boom is an opportunity rather than a threat, provided the country invests revenue in training, infrastructure, and — crucially — in the language skills of the young people who will welcome the world.",
      quiz: [
        { q: "What triggered the tourism boom, according to the report?", o: ["New hotels in Samarkand", "Visa-free travel for many countries", "Cheaper flights", "Restoration of monuments"], a: 1, e: "The sector has grown dramatically since visa-free travel was introduced.", d: "medium" },
        { q: "What do preservation experts warn about?", o: ["Hotels are too expensive", "Monuments were not designed for mass tourism", "Tourists behave badly", "Restoration is too slow"], a: 1, e: "Historic monuments were never designed for millions of feet.", d: "medium" },
        { q: "What criticism is made of some restoration work?", o: ["It is too expensive", "It uses foreign workers", "It prioritises appearance over authenticity", "It takes too long"], a: 2, e: "Fresh tiles replaced worn ones that 'told a story' — appearance over authenticity.", d: "hard" },
        { q: "Under what condition do economists see the boom positively?", o: ["If hotels lower their prices", "If revenue is invested in training, infrastructure and language skills", "If fewer tourists come", "If monuments are closed"], a: 1, e: "An opportunity — provided revenue is invested in training, infrastructure and language skills.", d: "hard" },
      ],
      quizTr: [
        P("Soha ko'plab davlatlar uchun vizasiz rejim joriy etilgach keskin o'sdi.", "Сектор резко вырос после введения безвизового режима для многих стран."),
        P("Tarixiy obidalar millionlab odamlar uchun mo'ljallanmagan.", "Исторические памятники не рассчитаны на миллионы посетителей."),
        P("Eskirgan koshinlar o'rniga yangilari qo'yilgan — haqiqiylikdan ko'ra tashqi ko'rinish ustun qo'yilgan.", "Старые изразцы заменили новыми — внешний вид поставили выше подлинности."),
        P("Imkoniyat — agar daromad ta'lim, infratuzilma va til ko'nikmalariga sarflansa.", "Возможность — при условии инвестиций в обучение, инфраструктуру и языковые навыки."),
      ],
    },
    {
      id: "l6", title: "Talk: The Bilingual Brain",
      script: "Thank you all for coming. As a neuroscientist who grew up speaking two languages, I'm often asked whether bilingualism makes you smarter. The honest answer is: not exactly — but it changes how your brain works in fascinating ways. Every time a bilingual person speaks, both languages are active simultaneously. The brain must constantly select one and suppress the other, and this invisible workout strengthens what we call executive control — the ability to focus, switch between tasks, and ignore distractions. Studies also suggest that lifelong bilingualism may delay the symptoms of dementia by several years, although researchers still debate the size of the effect. What I find most striking, however, is the flexibility argument. Bilinguals report that each language carries its own personality, its own humour, even its own way of apologising. Switching languages is not just translation — it is a slight change of perspective. And in a world that rewards those who can see problems from more than one angle, that may be the real advantage — greater than any test score could show.",
      quiz: [
        { q: "What happens in the brain when a bilingual person speaks?", o: ["One language switches off", "Both languages are active at the same time", "The brain translates word by word", "Executive control is suppressed"], a: 1, e: "Both languages are active simultaneously; the brain selects one and suppresses the other.", d: "medium" },
        { q: "What is 'executive control'?", o: ["Knowledge of grammar", "The ability to focus, switch tasks and ignore distractions", "The speed of translation", "Memory for vocabulary"], a: 1, e: "Executive control is defined as focusing, switching between tasks, and ignoring distractions.", d: "medium" },
        { q: "What do researchers still debate about dementia?", o: ["Whether bilinguals get dementia at all", "The size of the delay effect", "Whether dementia exists", "Which language protects better"], a: 1, e: "Bilingualism may delay symptoms by several years, but researchers debate the size of the effect.", d: "hard" },
        { q: "What does the speaker consider the 'real advantage' of bilingualism?", o: ["Higher test scores", "Better memory", "Seeing problems from more than one perspective", "Faster speech"], a: 2, e: "Switching languages is a change of perspective — valuable in a world that rewards multiple angles.", d: "hard" },
      ],
      quizTr: [
        P("Ikkala til bir vaqtda faol bo'ladi; miya birini tanlab, ikkinchisini bosib turadi.", "Оба языка активны одновременно; мозг выбирает один и подавляет другой."),
        P("Executive control — diqqatni jamlash, vazifalar orasida almashish va chalg'ituvchi narsalarni e'tiborsiz qoldirish qobiliyati.", "Executive control — способность концентрироваться, переключаться между задачами и игнорировать отвлечения."),
        P("Bilingvizm alomatlarni bir necha yilga kechiktirishi mumkin, ammo olimlar ta'sir hajmi haqida bahslashadi.", "Билингвизм может отсрочить симптомы на несколько лет, но учёные спорят о размере эффекта."),
        P("Tillarni almashtirish — nuqtai nazarni o'zgartirish; muammoga bir necha tomondan qaray olish — asosiy afzallik.", "Смена языка — смена перспективы; главное преимущество — видеть проблему с разных сторон."),
      ],
    },
  ],
  C1: [
    {
      id: "l4", title: "Panel: Should Universities Teach in English?",
      script: "Moderator: Our topic tonight: the growing number of universities in non-English-speaking countries that teach entirely in English. Professor Rahimova, you're in favour? — Rahimova: With reservations, yes. Science today is published overwhelmingly in English. If we teach our brightest students in a language the global research community cannot read, we are, in effect, building them a beautiful room with no doors. — Moderator: Dr Bennett, you've called this trend 'linguistic outsourcing'. — Bennett: Because that's what it often is. When a country stops developing academic vocabulary in its own language, entire fields become unthinkable in that language within a generation. Medicine, law, engineering — if these can only be discussed in English, the national language is slowly demoted to the kitchen and the market. That has consequences for democracy: citizens cannot debate what they cannot name. — Rahimova: I'd push back on the fatalism. Bilingual academia is possible — publish internationally in English, teach and popularise in the national language. The real failure is not English-medium instruction; it is neglecting translation and terminology work at home. — Bennett: On that, at least, we agree entirely: the danger is not learning English. It is forgetting to keep the other language growing.",
      quiz: [
        { q: "What does Rahimova's 'room with no doors' metaphor describe?", o: ["Universities with poor facilities", "Education isolated from global research", "Students who refuse to study", "Libraries without English books"], a: 1, e: "Teaching in a language the global research community cannot read isolates students — a beautiful room with no doors.", d: "hard" },
        { q: "What does Bennett mean by 'linguistic outsourcing'?", o: ["Hiring foreign teachers", "Translating textbooks abroad", "Letting another language take over entire academic fields", "Teaching translation at universities"], a: 2, e: "When academic vocabulary stops developing, whole fields become discussable only in English.", d: "hard" },
        { q: "Why does Bennett link the issue to democracy?", o: ["Universities should be elected", "Citizens cannot debate what they cannot name", "English is the language of politics", "Laws must be written in English"], a: 1, e: "If law or medicine can't be discussed in the national language, citizens are excluded from those debates.", d: "hard" },
        { q: "On what do both speakers finally agree?", o: ["English-medium teaching should stop", "The national language must be kept growing", "Universities should teach only sciences", "Translation work is a waste of resources"], a: 1, e: "The danger is not learning English — it is forgetting to keep the other language growing.", d: "medium" },
      ],
      quizTr: [
        P("Jahon ilmiy jamoasi o'qiy olmaydigan tilda o'qitish talabalarni yakkalab qo'yadi — eshiksiz chiroyli xona.", "Обучение на языке, который мировое научное сообщество не читает, изолирует студентов — красивая комната без дверей."),
        P("Ilmiy lug'at rivojlanishdan to'xtasa, butun sohalar faqat ingliz tilida muhokama qilinadigan bo'lib qoladi.", "Когда научная лексика перестаёт развиваться, целые области можно обсуждать только по-английски."),
        P("Huquq yoki tibbiyotni milliy tilda muhokama qilib bo'lmasa, fuqarolar bu bahslardan chetda qoladi.", "Если право или медицину нельзя обсуждать на родном языке, граждане исключены из этих дебатов."),
        P("Xavf ingliz tilini o'rganishda emas — boshqa tilning o'sishini unutishda.", "Опасность не в изучении английского, а в том, чтобы забыть развивать другой язык."),
      ],
    },
  ],
};

// uz/ru quiz explanations for the authored C1 listening lessons (l1–l3 in uz-extras.mjs).
export const C1_LISTENING_TR = {
  l1: [
    P("Ma'ruzachi aytadi: uni to'ydiradigan daryolar paxta dalalarini sug'orish uchun burib yuborilgan.", "Лектор говорит: питавшие его реки отвели на орошение хлопковых полей."),
    P("Mo'ynoq kabi baliqchi shaharlar suvdan o'nlab kilometr uzoqda qolib ketdi.", "Рыбацкие города вроде Муйнака оказались в десятках километров от воды."),
    P("To'g'on shimoliy havzani qisman tikladi — aralashuv zararni qaytarishi mumkinligiga dalil.", "Дамба частично возродила северную часть — доказательство, что вмешательство может обратить ущерб."),
    P("Hikoya 'faqat yo'qotish haqida emas': ogohlantirish, ammo tiklanish dalili ham.", "История «не только о потере»: предупреждение, но и свидетельство восстановления."),
  ],
  l2: [
    P("Til yoki ob-havo emas — odamlarning kelishmovchilikka munosabati hayratlantirgan.", "Не язык и не погода — удивило отношение людей к несогласию."),
    P("Professor xafa bo'lish o'rniga unga rahmat aytdi.", "Вместо обиды профессор поблагодарила его."),
    P("U hali ham xushmuomalalikni qadrlaydi, lekin jim turish hurmatning yagona yo'li emasligini tushundi.", "Он по-прежнему ценит вежливость, но понял: молчание — не единственный способ уважения."),
    P("Dalil bilan ehtiyotkorona e'tiroz bildirish ko'nikmasi kareraga eng ko'p yordam berdi.", "Навык аргументированно возражать больше всего помог карьере."),
  ],
  l3: [
    P("Uchta umumiy xususiyat aniqlangan.", "Выявили три общие закономерности."),
    P("Hech biri tayyor bo'lishni kutmadi — birinchi kundanoq gapira boshlashdi.", "Никто не ждал готовности — заговорили с первого дня."),
    P("Kundalik odatlarga singdirilgani uchun harakat deyarli sezilmasdi — shuning uchun davom etdi.", "Встроенное в рутину усилие почти не ощущалось — потому и сохранилось."),
    P("Ular haqiqiy suhbatlarda o'zlariga kerak bo'lgan va yetishmagan so'zlarni kuzatib borishdi.", "Они отслеживали слова, которых им реально не хватило в разговорах."),
  ],
};
