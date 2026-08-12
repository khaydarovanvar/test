// Full C1 grammar translations (g1–g3) — tip, blocks, quiz explanations.
const P = (uz, ru) => ({ uz, ru });
export const C1_TR = {
  g1: {
    situation: null,
    tip: P("Inversiya — ziravor, asosiy taom emas: har bir xatboshiga bittasi yetarli.", "Инверсия — приправа, а не основное блюдо: одной на абзац вполне достаточно."),
    blocks: [
      { h: P("Inkor ravishlari", "Отрицательные наречия"), p: [P("never, rarely, seldom, little, no sooner, not only dan keyin ega va yordamchi fe'l o'rin almashadi.", "После never, rarely, seldom, little, no sooner, not only подлежащее и вспомогательный глагол меняются местами.")] },
      { h: P("'if'siz shart gaplar", "Условные без 'if'"), p: [P("Rasmiy shart gaplarda Had / Should / Were 'if' o'rnini bosa oladi.", "В формальных условных Had / Should / Were могут заменять 'if'.")] },
      { h: P("So / Such … that", "So / Such … that"), p: [P("So + sifat va Such + ot birikmasi gapni inversiya bilan boshlashi mumkin.", "So + прилагательное и Such + именная группа могут открывать предложение с инверсией.")] },
    ],
    quiz: [
      P("No sooner had X happened than Y — 'than' bilan juftlikda keladi.", "No sooner had X happened than Y — в паре с 'than'."),
      P("Should = if, rasmiy shart gaplarda: Should you require…", "Should = if в формальных условных: Should you require…"),
      P("'Not only' dan keyin yordamchi fe'l + ega + fe'l: did she meet.", "После 'not only': вспомогательный глагол + подлежащее + глагол: did she meet."),
      P("Such + was + ot birikmasi: Such was the demand that…", "Such + was + именная группа: Such was the demand that…"),
      P("Had I known = If I had known → would have left (uchinchi shart mayli).", "Had I known = If I had known → would have left (третий кондиционал)."),
    ],
  },
  g2: {
    situation: null,
    tip: P("Og'zaki nutqda wh-cleft o'ylab olish uchun vaqt beradi va nutqni jozibali qiladi.", "В устной речи wh-клефт даёт время подумать и звучит изысканно."),
    blocks: [
      { h: P("It-cleft", "It-клефты"), p: [P("Kim, nima, qachon yoki qayerdaligini It + be + urg'u + that/who bilan ta'kidlang.", "Подчёркивайте кто, что, когда или где с помощью It + be + фокус + that/who.")] },
      { h: P("Wh-cleft", "Wh-клефты"), p: [P("What + gap + be + urg'u narsaning o'zini ta'kidlaydi.", "What + придаточное + be + фокус подчёркивает саму вещь.")] },
      { h: P("All-cleft", "All-клефты"), p: [P("All + gap + be + urg'u 'yagona narsa' degan ma'noni beradi.", "All + придаточное + be + фокус означает «единственное».")] },
    ],
    quiz: [
      P("It-cleft: It was + urg'u + that…", "It-клефт: It was + фокус + that…"),
      P("Wh-cleft birlikdagi be oladi: What impressed them was…", "Wh-клефт берёт be в единственном числе: What impressed them was…"),
      P("What I'm saying is… — asosiy fikrni ta'kidlash.", "What I'm saying is… — подчёркивание сути сказанного."),
      P("It-cleft that bilan yopiladi: …that I understood.", "It-клефт закрывается словом that: …that I understood."),
    ],
  },
  g3: {
    situation: null,
    tip: P("Amerika inglizchasida mandativ subjunktiv odatiy; Britaniya inglizchasida ko'pincha 'should' ishlatiladi — ikkalasi ham to'g'ri.", "В американском английском мандативный субжунктив — норма; в британском чаще 'should' — оба варианта верны."),
    blocks: [
      { h: P("Mandativ subjunktiv", "Мандативный субжунктив"), p: [P("suggest/recommend/demand/insist + that dan keyin barcha shaxslar uchun fe'lning asosiy shakli ishlatiladi.", "После suggest/recommend/demand/insist + that используется базовая форма глагола для всех лиц.")] },
      { h: P("Rasmiy turg'un iboralar", "Формальные устойчивые фразы"), p: [P("Ba'zi subjunktivlar faqat turg'un iboralarda saqlanib qolgan.", "Некоторые формы субжунктива сохранились только в устойчивых выражениях.")] },
      { h: P("Were-subjunktiv", "Were-субжунктив"), p: [P("Faraziy gaplarda barcha shaxslar uchun 'were' ishlatiladi.", "В гипотетических предложениях 'were' используется для всех лиц.")] },
    ],
    quiz: [
      P("Mandativ subjunktiv: insisted that it be reviewed.", "Мандативный субжунктив: insisted that it be reviewed."),
      P("It is vital that + asosiy shakl: …that she be informed.", "It is vital that + базовая форма: …that she be informed."),
      P("Wish + were-subjunktiv: I wish it were possible.", "Wish + were-субжунктив: I wish it were possible."),
    ],
  },
};
