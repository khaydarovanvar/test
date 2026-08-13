import { useEffect, useRef, useState } from "react";
import { X, Play, Square, Mic, ArrowRight, RotateCcw, Volume2 } from "lucide-react";
import { useApp, back, go, recordAnswer, completeLesson, learnWord, celebrate, getState } from "../lib/store";
import { level as getLevel, speak, stopSpeaking, skillItems, lessonKey, type VoiceGender, type LevelId, type SkillId, type GrammarLesson, type VocabUnit, type ReadingLesson, type ListeningLesson, type SpeakingTask, type WritingTask, type Word } from "../lib/content";
import { t } from "../lib/i18n";
import { Button, Card, ProgressBar, QuizRunner, Ellie, Chip, SpeakButton } from "../components/ui";

export default function LessonPage() {
  const s = useApp();
  const lvl = (s.route.params?.lvl ?? s.level) as LevelId;
  const skill = (s.route.params?.skill ?? "grammar") as SkillId;
  const id = s.route.params?.id ?? "";
  const L = getLevel(lvl);

  useEffect(() => () => stopSpeaking(), []);

  const item =
    skill === "grammar" ? L.skills.grammar.find((x) => x.id === id) :
    skill === "vocabulary" ? L.skills.vocabulary.find((x) => x.id === id) :
    skill === "reading" ? L.skills.reading.find((x) => x.id === id) :
    skill === "listening" ? L.skills.listening.find((x) => x.id === id) :
    skill === "speaking" ? L.skills.speaking.find((x) => x.id === id) :
    L.skills.writing.find((x) => x.id === id);

  if (!item) return <div className="p-8 text-center text-ink-2">Lesson not found. <Button onClick={() => back()}>{t("back")}</Button></div>;

  const idx = skillItems(lvl, skill).findIndex((x) => x.id === id);
  const count = skillItems(lvl, skill).length;

  return (
    <div className="animate-rise">
      <header className="flex items-center gap-3 pt-1 pb-4">
        <button onClick={() => back()} className="w-9 h-9 grid place-items-center rounded-xl bg-mist/50 dark:bg-night-800 text-ink-2 dark:text-slate-300"><X size={17} /></button>
        <div className="flex-1 min-w-0">
          <div className="text-[10.5px] font-extrabold tracking-[0.14em] uppercase text-brand-600 dark:text-brand-400">{lvl} {t(skill)} · {t("lesson")} {idx + 1}/{count}</div>
          <h1 className="font-extrabold text-[17px] leading-tight truncate">{item.title}</h1>
        </div>
      </header>
      {skill === "grammar" && <GrammarPlayer lvl={lvl} lesson={item as GrammarLesson} />}
      {skill === "vocabulary" && <VocabPlayer lvl={lvl} unit={item as VocabUnit} />}
      {skill === "reading" && <ReadingPlayer lvl={lvl} lesson={item as ReadingLesson} />}
      {skill === "listening" && <ListeningPlayer lvl={lvl} lesson={item as ListeningLesson} />}
      {skill === "speaking" && <SpeakingPlayer lvl={lvl} task={item as SpeakingTask} />}
      {skill === "writing" && <WritingPlayer lvl={lvl} task={item as WritingTask} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
function CompleteScreen({ lvl, skill, id, score, total, onRetry }: { lvl: LevelId; skill: SkillId; id: string; score: number; total: number; onRetry?: () => void }) {
  const [first] = useState(() => completeLesson(lvl, skill, id, score, total));
  const items = skillItems(lvl, skill);
  const idx = items.findIndex((x) => x.id === id);
  const nxt = items[idx + 1];
  const pct = total ? Math.round((score / total) * 100) : 100;
  return (
    <div className="flex flex-col items-center text-center pt-6 animate-pop">
      <Ellie pose="cheer" size={130} />
      <h2 className="text-2xl font-extrabold mt-4">🎉 {t("lesson_complete")}</h2>
      <div className="flex gap-2 mt-3">
        {total > 0 && <Chip tone={pct >= 70 ? "good" : "accent"}>{pct}% {t("mastery")}</Chip>}
        {first && <Chip tone="accent">+80 XP</Chip>}
        <Chip tone="brand">🔥 {getState().streak}</Chip>
      </div>
      <div className="w-full max-w-sm mt-8 space-y-2.5">
        {nxt && <Button size="lg" onClick={() => go("lesson", { lvl, skill, id: nxt.id })}>{t("next_lesson")} <ArrowRight size={17} /></Button>}
        {onRetry && <Button size="lg" variant="secondary" onClick={onRetry}><RotateCcw size={16} /> {t("practice_again")}</Button>}
        <Button size="lg" variant="ghost" onClick={() => back()}>{t("close")}</Button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Explanation-language toggle (EN | UZ | RU)                          */
type ExpLang = "en" | "uz" | "ru";
function LangSeg({ value, onChange }: { value: ExpLang; onChange: (l: ExpLang) => void }) {
  return (
    <div className="inline-flex gap-1 p-1 rounded-full bg-mist/50 dark:bg-night-800">
      {(["en", "uz", "ru"] as ExpLang[]).map((l) => (
        <button key={l} onClick={() => onChange(l)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-colors ${value === l ? "bg-brand-600 text-white shadow-soft" : "text-ink-2 dark:text-slate-400"}`}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
const pickTr = (lang: ExpLang, pair: { uz: string; ru: string } | null | undefined, fallback: string) =>
  lang === "en" || !pair || !pair[lang] ? fallback : pair[lang];

function GrammarPlayer({ lvl, lesson }: { lvl: LevelId; lesson: GrammarLesson }) {
  const s = useApp();
  const [stage, setStage] = useState<"learn" | "quiz" | "done">("learn");
  const [score, setScore] = useState(0);
  const [expLang, setExpLang] = useState<ExpLang>(s.uiLang);
  const tr = lesson.tr;

  const quizQs = lesson.quiz.map((q, i) => ({
    ...q,
    e: expLang !== "en" && tr?.quiz?.[i]?.[expLang] ? tr.quiz[i]![expLang] : q.e,
  }));

  if (stage === "done") return <CompleteScreen lvl={lvl} skill="grammar" id={lesson.id} score={score} total={lesson.quiz.length} onRetry={() => { setScore(0); setStage("quiz"); }} />;

  if (stage === "quiz") return (
    <div>
      <div className="mb-3"><LangSeg value={expLang} onChange={setExpLang} /></div>
      <Card className="p-5">
        <QuizRunner
          questions={quizQs}
          onAnswer={(ok) => recordAnswer("grammar", ok)}
          onDone={(sc) => { setScore(sc); setStage("done"); }}
        />
      </Card>
    </div>
  );

  return (
    <div className="space-y-4 pb-6">
      <LangSeg value={expLang} onChange={setExpLang} />
      <Card className="p-5">
        <p className="text-[15px] leading-relaxed">{pickTr(expLang, lesson.leadTr, lesson.lead)}</p>
        {expLang !== "en" && lesson.leadTr && (
          <p className="mt-3 pl-3 border-l-[3px] border-accent-500 text-[13px] italic text-ink-2 dark:text-slate-400 leading-relaxed">🇬🇧 {lesson.lead}</p>
        )}
      </Card>
      {lesson.situation && (
        <Card className="p-5">
          <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-ink-2 dark:text-slate-400 mb-2">{t("situation")}</div>
          <p className="text-[14px] leading-relaxed">{pickTr(expLang, tr?.situation, lesson.situation)}</p>
        </Card>
      )}
      {lesson.timeline && (
        <Card className="p-5">
          <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-ink-2 dark:text-slate-400 mb-2">{t("timeline")}</div>
          <pre className="font-mono text-[12.5px] leading-relaxed text-brand-700 dark:text-brand-400 overflow-x-auto whitespace-pre">{lesson.timeline.art.join("\n")}</pre>
          {lesson.timeline.note && <p className="text-[13px] text-ink-2 dark:text-slate-400 mt-2">{lesson.timeline.note}</p>}
        </Card>
      )}
      {lesson.compare && (
        <Card className="p-5">
          <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-ink-2 dark:text-slate-400 mb-3">{t("compare")}</div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[lesson.compare.a, lesson.compare.b].map((side, si) => (
              <div key={si} className={`rounded-2xl p-4 ${si === 0 ? "bg-brand-50/80 dark:bg-brand-950" : "bg-accent-100/70 dark:bg-night-800"}`}>
                <div className="font-extrabold text-[13.5px] mb-2">{side.h}</div>
                {side.ex.map((x, j) => (
                  <div key={j} className="flex items-center gap-2 text-[13.5px] py-1">
                    <span className="flex-1">{x}</span>
                    <SpeakButton text={x} className="!w-7 !h-7" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Card>
      )}
      {lesson.blocks.map((b, i) => (
        <Card key={i} className="p-5">
          <h3 className="font-extrabold mb-2">{pickTr(expLang, tr?.blocks?.[i]?.h, b.h)}</h3>
          {b.p.map((p, j) => (
            <p key={j} className="text-[14px] text-ink-2 dark:text-slate-300 leading-relaxed mb-2">
              {pickTr(expLang, tr?.blocks?.[i]?.p?.[j], p)}
            </p>
          ))}
          {b.ex.map((x, j) => (
            <div key={j} className="flex items-center gap-2 bg-brand-50/70 dark:bg-night-800 rounded-xl px-3.5 py-2.5 text-[14px] font-medium mt-2">
              <span className="flex-1">{x}</span>
              <SpeakButton text={x} />
            </div>
          ))}
        </Card>
      ))}
      {lesson.tip && (
        <div className="rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 px-5 py-4 text-[14px] font-medium">💡 <b>{t("tip")}:</b> {pickTr(expLang, tr?.tip, lesson.tip)}</div>
      )}
      {lesson.examples.length > 0 && (
        <Card className="p-5">
          <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-ink-2 dark:text-slate-400 mb-3">{t("examples")}</div>
          {lesson.examples.map((x, i) => (
            <div key={i} className="flex items-center gap-2 border-b last:border-0 border-mist/60 dark:border-night-800 py-2.5 text-[14px]">
              <span className="flex-1">{x}</span><SpeakButton text={x} />
            </div>
          ))}
        </Card>
      )}
      {lesson.mistakes.length > 0 && (
        <Card className="p-5">
          <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-ink-2 dark:text-slate-400 mb-3">{t("mistakes_tab")}</div>
          <div className="space-y-2.5">
            {lesson.mistakes.map((m, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-mist dark:border-night-700">
                <div className="px-4 py-2.5 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-[13.5px] font-medium">✗ {m.x}</div>
                <div className="px-4 py-2.5 bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-[13.5px] font-medium">✓ {m.v}</div>
              </div>
            ))}
          </div>
        </Card>
      )}
      {lesson.quiz.length > 0 && (
        <Button size="lg" variant="accent" onClick={() => setStage("quiz")}>🏁 {t("start_quiz")} ({lesson.quiz.length})</Button>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
function VocabPlayer({ lvl, unit }: { lvl: LevelId; unit: VocabUnit }) {
  const s = useApp();
  const [stage, setStage] = useState<"browse" | "cards" | "quiz" | "done">("browse");
  const [ci, setCi] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const meaning = (w: Word) => (s.uiLang === "ru" ? w.ru : s.uiLang === "uz" ? w.uz : (w.def || w.uz));

  const quiz = useRef<{ q: string; o: string[]; a: number; e: string }[]>([]);
  const buildQuiz = () => {
    const pool = [...unit.words].sort(() => Math.random() - 0.5).slice(0, Math.min(8, unit.words.length));
    quiz.current = pool.map((w) => {
      const wrong = unit.words.filter((x) => x.w !== w.w).sort(() => Math.random() - 0.5).slice(0, 3).map(meaning);
      const o = [meaning(w), ...wrong].sort(() => Math.random() - 0.5);
      return { q: `“${w.w}” — ?`, o, a: o.indexOf(meaning(w)), e: `${w.w} = ${meaning(w)} · ${w.ex}` };
    });
  };

  if (stage === "done") return <CompleteScreen lvl={lvl} skill="vocabulary" id={unit.id} score={score} total={quiz.current.length} onRetry={() => { buildQuiz(); setScore(0); setStage("quiz"); }} />;

  if (stage === "quiz") return (
    <Card className="p-5">
      <QuizRunner questions={quiz.current} onAnswer={(ok) => recordAnswer("vocabulary", ok)} onDone={(sc) => { setScore(sc); setStage("done"); }} />
    </Card>
  );

  if (stage === "cards") {
    const w = unit.words[ci];
    if (!w) { buildQuiz(); setStage("quiz"); return null; }
    return (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <ProgressBar value={(ci / unit.words.length) * 100} className="flex-1" />
          <span className="text-xs font-bold text-ink-2 dark:text-slate-400 tabular-nums">{ci + 1}/{unit.words.length}</span>
        </div>
        <Card className="p-8 text-center" key={w.w}>
          <div className="animate-rise">
            <div className="text-3xl font-extrabold tracking-tight">{w.w}</div>
            <div className="text-ink-2 dark:text-slate-400 text-sm mt-1">{w.ipa} · {w.pos}</div>
            <button onClick={() => speak(`${w.w}. ${w.ex}`)} className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-night-800 text-brand-600 dark:text-brand-400 text-sm font-bold"><Volume2 size={15} /> {t("play")}</button>
            {revealed ? (
              <div className="animate-rise mt-5">
                <div className="text-xl font-extrabold text-brand-600 dark:text-brand-400">{meaning(w)}</div>
                {s.uiLang === "en" && <div className="text-sm text-ink-2 dark:text-slate-400 mt-0.5">{w.uz} · {w.ru}</div>}
                <div className="text-sm italic text-ink-2 dark:text-slate-400 mt-2">“{w.ex}”</div>
                {w.syn && <div className="text-xs text-ink-2 dark:text-slate-400 mt-1">≈ {w.syn}{w.ant ? ` · ≠ ${w.ant}` : ""}</div>}
                <div className="flex gap-2.5 mt-6">
                  <Button className="flex-1" onClick={() => { learnWord(lvl, unit.id, w.w, true); setCi(ci + 1); setRevealed(false); }}>✓ {t("know_it")}</Button>
                  <Button className="flex-1" variant="secondary" onClick={() => { learnWord(lvl, unit.id, w.w, false); setCi(ci + 1); setRevealed(false); }}>{t("still_learning")}</Button>
                </div>
              </div>
            ) : (
              <Button size="lg" className="mt-6" onClick={() => setRevealed(true)}>{t("show_answer")}</Button>
            )}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="pb-6">
      <p className="text-sm text-ink-2 dark:text-slate-400 mb-4">{t("words_to_learn")}</p>
      <Card>
        {unit.words.map((w) => (
          <div key={w.w} className="flex items-start gap-3 px-5 py-3.5 border-b last:border-0 border-mist/60 dark:border-night-800">
            <div className="flex-1 min-w-0">
              <div className="font-extrabold text-[15px]">{w.w} <span className="text-xs font-semibold text-slate-400">{w.pos}</span></div>
              <div className="text-xs text-ink-2 dark:text-slate-400">{w.ipa}</div>
              <div className="text-[13.5px] mt-0.5">{meaning(w)}{s.uiLang === "en" && <span className="text-ink-2 dark:text-slate-400"> · {w.uz} · {w.ru}</span>}</div>
              <div className="text-xs italic text-slate-400 mt-0.5">“{w.ex}”</div>
              {(w.syn || w.ant) && (
                <div className="text-[11.5px] text-ink-2 dark:text-slate-400 mt-1">
                  {w.syn && <span className="mr-2">≈ {w.syn}</span>}
                  {w.ant && <span>≠ {w.ant}</span>}
                </div>
              )}
            </div>
            <SpeakButton text={`${w.w}. ${w.ex}`} />
          </div>
        ))}
      </Card>
      <Button size="lg" variant="accent" className="mt-5" onClick={() => setStage("cards")}>🃏 {t("start")} ({unit.words.length} {t("words")})</Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
function ReadingPlayer({ lvl, lesson }: { lvl: LevelId; lesson: ReadingLesson }) {
  const s = useApp();
  const [stage, setStage] = useState<"read" | "quiz" | "done">("read");
  const [score, setScore] = useState(0);
  const [expLang, setExpLang] = useState<ExpLang>(s.uiLang);
  const quizQs = lesson.quiz.map((q, i) => ({
    ...q,
    e: expLang !== "en" && lesson.quizTr?.[i]?.[expLang] ? lesson.quizTr[i]![expLang] : q.e,
  }));
  if (stage === "done") return <CompleteScreen lvl={lvl} skill="reading" id={lesson.id} score={score} total={lesson.quiz.length} onRetry={() => { setScore(0); setStage("quiz"); }} />;
  if (stage === "quiz") return (
    <div>
      <div className="mb-3"><LangSeg value={expLang} onChange={setExpLang} /></div>
      <Card className="p-5"><QuizRunner questions={quizQs} onAnswer={(ok) => recordAnswer("reading", ok)} onDone={(sc) => { setScore(sc); setStage("done"); }} /></Card>
    </div>
  );
  return (
    <div className="pb-6">
      <p className="text-sm text-ink-2 dark:text-slate-400 mb-4">{t("read_then_answer")}</p>
      <Card className="p-6">
        {lesson.text.split("\n").map((p, i) => <p key={i} className="text-[15px] leading-[1.8] mb-3 last:mb-0">{p}</p>)}
        <button onClick={() => speak(lesson.text, 0.92)} className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-night-800 text-brand-600 dark:text-brand-400 text-sm font-bold"><Volume2 size={15} /> {t("play")}</button>
      </Card>
      <Button size="lg" variant="accent" className="mt-5" onClick={() => setStage("quiz")}>🏁 {t("start_quiz")} ({lesson.quiz.length})</Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
function ListeningPlayer({ lvl, lesson }: { lvl: LevelId; lesson: ListeningLesson }) {
  const s = useApp();
  const [stage, setStage] = useState<"listen" | "quiz" | "done">("listen");
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [rate, setRate] = useState(0.92);
  const [transcript, setTranscript] = useState(false);
  const [played, setPlayed] = useState(false);
  const [expLang, setExpLang] = useState<ExpLang>(s.uiLang);
  const quizQs = lesson.quiz.map((q, i) => ({
    ...q,
    e: expLang !== "en" && lesson.quizTr?.[i]?.[expLang] ? lesson.quizTr[i]![expLang] : q.e,
  }));

  useEffect(() => () => stopSpeaking(), []);
  // alternate narrator per lesson: half the audio lessons male, half female
  const narrator = (parseInt(lesson.id.replace(/\D/g, ""), 10) || 0) % 2 === 0 ? "f" : "m";
  const toggle = () => {
    if (playing) { stopSpeaking(); setPlaying(false); return; }
    setPlaying(true); setPlayed(true);
    speak(lesson.script, rate, narrator as VoiceGender, () => setPlaying(false));
  };

  if (stage === "done") return <CompleteScreen lvl={lvl} skill="listening" id={lesson.id} score={score} total={lesson.quiz.length} onRetry={() => { setScore(0); setStage("quiz"); }} />;
  if (stage === "quiz") return (
    <div>
      <div className="mb-3"><LangSeg value={expLang} onChange={setExpLang} /></div>
      <Card className="p-5"><QuizRunner questions={quizQs} onAnswer={(ok) => recordAnswer("listening", ok)} onDone={(sc) => { setScore(sc); setStage("done"); }} /></Card>
    </div>
  );

  return (
    <div className="pb-6">
      <p className="text-sm text-ink-2 dark:text-slate-400 mb-4">{t("listen_first")}</p>
      <Card className="p-7 text-center">
        <div className="flex items-end justify-center gap-1 h-12 mb-5" aria-hidden>
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className={`w-1.5 rounded-full bg-brand-500 ${playing ? "animate-glow" : "opacity-25"}`}
              style={{ height: `${18 + Math.abs(Math.sin(i * 1.7)) * 78}%`, animationDelay: `${i * 70}ms` }} />
          ))}
        </div>
        <button onClick={toggle}
          className="w-20 h-20 rounded-full bg-brand-600 hover:bg-brand-700 text-white grid place-items-center mx-auto shadow-lift transition-all active:scale-95">
          {playing ? <Square size={26} /> : <Play size={30} className="ml-1" />}
        </button>
        <div className="flex items-center justify-center gap-2 mt-5">
          <span className="text-xs font-bold text-ink-2 dark:text-slate-400">{t("playback_speed")}:</span>
          {[0.75, 0.92, 1.1].map((r) => (
            <button key={r} onClick={() => setRate(r)}
              className={`px-3 py-1 rounded-full text-xs font-extrabold border ${rate === r ? "bg-brand-600 border-brand-600 text-white" : "border-mist dark:border-night-700 text-ink-2 dark:text-slate-400"}`}>
              {r === 0.92 ? "1×" : r < 1 ? "0.75×" : "1.25×"}
            </button>
          ))}
        </div>
        {played && (
          <button onClick={() => setTranscript(!transcript)} className="mt-5 text-sm font-bold text-brand-600 dark:text-brand-400">
            {transcript ? t("hide_transcript") : t("reveal")}
          </button>
        )}
        {transcript && <p className="animate-rise mt-4 text-left text-[14px] leading-relaxed bg-mist/30 dark:bg-night-800 rounded-2xl p-4">{lesson.script}</p>}
      </Card>
      <Button size="lg" variant="accent" className="mt-5" disabled={!played} onClick={() => setStage("quiz")}>🏁 {t("start_quiz")} ({lesson.quiz.length})</Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Speaking — recorder with a clean integration layer for speech AI    */
function SpeakingPlayer({ lvl, task }: { lvl: LevelId; task: SpeakingTask }) {
  const [stage, setStage] = useState<"speak" | "done">("speak");
  const [recording, setRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [result, setResult] = useState<{ fluency: number; vocab: number; length: number } | null>(null);
  const recRef = useRef<any>(null);
  const timerRef = useRef<number | null>(null);
  const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  useEffect(() => () => { stop(); }, []);
  const stop = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    try { recRef.current?.stop(); } catch { /* */ }
    setRecording(false);
  };

  const finish = (text: string, secs: number) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const unique = new Set(words.map((w) => w.toLowerCase())).size;
    const wpm = secs ? (words.length / secs) * 60 : 0;
    setResult({
      fluency: Math.min(100, Math.round((wpm / 110) * 100)),
      vocab: words.length ? Math.round((unique / words.length) * 100) : 0,
      length: Math.min(100, Math.round((secs / task.seconds) * 100)),
    });
    recordAnswer("speaking", words.length >= 8);
  };

  const start = () => {
    setTranscript(""); setResult(null); setElapsed(0); setRecording(true);
    const t0 = Date.now();
    timerRef.current = window.setInterval(() => {
      const e = Math.floor((Date.now() - t0) / 1000);
      setElapsed(e);
      if (e >= task.seconds) { stop(); if (!SR) finish("", e); }
    }, 250);
    if (SR) {
      const r = new SR(); recRef.current = r;
      r.lang = "en-US"; r.continuous = true; r.interimResults = true;
      let final = "";
      r.onresult = (ev: any) => {
        let interim = "";
        for (let i = ev.resultIndex; i < ev.results.length; i++) {
          if (ev.results[i].isFinal) final += ev.results[i][0].transcript + " ";
          else interim += ev.results[i][0].transcript;
        }
        setTranscript((final + interim).trim());
      };
      r.onend = () => { setRecording(false); if (timerRef.current) clearInterval(timerRef.current); finish(final, Math.max(1, Math.floor((Date.now() - t0) / 1000))); };
      try { r.start(); } catch { /* */ }
    }
  };

  if (stage === "done") return <CompleteScreen lvl={lvl} skill="speaking" id={task.id} score={result ? Math.round(((result.fluency + result.vocab + result.length) / 300) * 10) : 7} total={10} />;

  return (
    <div className="pb-6">
      <Card className="p-6">
        <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-brand-600 dark:text-brand-400 mb-1.5">{t("speaking_timer")} {task.seconds}s</div>
        <p className="text-[17px] font-bold leading-relaxed">{task.prompt}</p>
        <div className="mt-4">
          <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-ink-2 dark:text-slate-400 mb-2">{t("target_words")}</div>
          <div className="flex flex-wrap gap-1.5">{task.tips.map((tip, i) => <Chip key={i} tone="brand">{tip}</Chip>)}</div>
        </div>
      </Card>

      <Card className="p-7 mt-4 text-center">
        {/* waveform */}
        <div className="flex items-end justify-center gap-1 h-10 mb-4" aria-hidden>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className={`w-1.5 rounded-full ${recording ? "bg-accent-500 animate-glow" : "bg-mist dark:bg-night-700"}`}
              style={{ height: `${20 + Math.abs(Math.sin(i * 2.3)) * 75}%`, animationDelay: `${i * 60}ms` }} />
          ))}
        </div>
        <button onClick={recording ? stop : start}
          className={`w-20 h-20 rounded-full grid place-items-center mx-auto shadow-lift transition-all active:scale-95 ${recording ? "bg-red-500 text-white" : "bg-accent-500 text-white"}`}>
          {recording ? <Square size={26} /> : <Mic size={30} />}
        </button>
        <div className="mt-3 font-bold text-sm text-ink-2 dark:text-slate-400">
          {recording ? `${t("rec_recording")} ${elapsed}s / ${task.seconds}s` : result ? t("rec_done") : t("rec_tap")}
        </div>
        {!SR && <div className="mt-2 text-xs text-slate-400 max-w-xs mx-auto">{t("rec_unsupported")}</div>}
        {transcript && (
          <div className="mt-4 text-left text-[14px] bg-mist/30 dark:bg-night-800 rounded-2xl p-4">
            <b className="text-xs uppercase tracking-wide text-ink-2 dark:text-slate-400 block mb-1">{t("you_said")}:</b>“{transcript}”
          </div>
        )}
        {result && (
          <div className="animate-rise mt-5 space-y-3 text-left">
            {([["Fluency", result.fluency], ["Vocabulary variety", result.vocab], ["Length", result.length]] as const).map(([label, v]) => (
              <div key={label}>
                <div className="flex justify-between text-xs font-bold mb-1"><span>{label}</span><span className="tabular-nums">{v}%</span></div>
                <ProgressBar value={v} tone={v < 55 ? "accent" : "brand"} />
              </div>
            ))}
          </div>
        )}
      </Card>
      <Button size="lg" variant="accent" className="mt-5" disabled={!result && !elapsed} onClick={() => { if (!result) finish(transcript, elapsed || task.seconds); setStage("done"); }}>
        {t("finish")}
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
function WritingPlayer({ lvl, task }: { lvl: LevelId; task: WritingTask }) {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState<{ score: number; notes: string[] } | null>(null);
  const [stage, setStage] = useState<"write" | "done">("write");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const LINKERS = ["because", "however", "although", "therefore", "moreover", "first", "then", "finally", "for example", "in my opinion", "on the other hand"];

  const grade = () => {
    const notes: string[] = [];
    let score = 50;
    if (words >= task.min && words <= task.max + 20) { score += 20; notes.push(`✓ ${t("wr_good_length")} (${words} ${t("words")})`); }
    else if (words < task.min) { notes.push(`✗ ${t("wr_too_short", { n: task.min })}`); score -= 10; }
    const sentences = text.split(/[.!?]+/).filter((x) => x.trim().length > 2);
    const caps = sentences.filter((x) => /^[A-Z“"]/.test(x.trim()));
    if (sentences.length >= 3) { score += 10; notes.push(`✓ ${sentences.length} sentences — good structure.`); }
    if (caps.length === sentences.length && sentences.length > 0) { score += 5; notes.push("✓ Every sentence starts with a capital letter."); }
    else if (sentences.length) notes.push("✗ Check capital letters at the start of sentences.");
    const used = LINKERS.filter((l) => text.toLowerCase().includes(l));
    if (used.length) { score += Math.min(15, used.length * 5); notes.push(`✓ Linking words: ${used.slice(0, 3).join(", ")}.`); }
    else notes.push("• Try linking words: because, however, for example…");
    const rep = Object.entries(text.toLowerCase().match(/\b[a-z]{4,}\b/g)?.reduce((m: Record<string, number>, w) => ((m[w] = (m[w] || 0) + 1), m), {}) ?? {}).filter(([, n]) => n >= 4);
    if (rep.length) notes.push(`• Repeated words: ${rep.slice(0, 2).map(([w]) => `“${w}”`).join(", ")} — try synonyms.`);
    setFeedback({ score: Math.max(20, Math.min(98, score)), notes });
    recordAnswer("writing", score >= 60);
  };

  if (stage === "done") return <CompleteScreen lvl={lvl} skill="writing" id={task.id} score={feedback ? Math.round(feedback.score / 10) : 6} total={10} />;

  return (
    <div className="pb-6">
      <Card className="p-6">
        <p className="text-[16px] font-bold leading-relaxed">{task.prompt}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">{task.hints.map((h, i) => <Chip key={i} tone="brand">{h}</Chip>)}</div>
      </Card>
      <Card className="mt-4 p-1.5">
        <textarea value={text} onChange={(e) => { setText(e.target.value); setFeedback(null); }} rows={9}
          placeholder="Start writing in English…"
          className="w-full resize-none bg-transparent outline-none p-4 text-[15px] leading-relaxed" />
        <div className="flex items-center justify-between px-4 pb-3">
          <span className={`text-xs font-bold tabular-nums ${words >= task.min ? "text-brand-600 dark:text-brand-400" : "text-slate-400"}`}>
            {t("word_count")}: {words} / {task.min}–{task.max}
          </span>
          <Button size="sm" disabled={words < 10} onClick={grade}>{t("check")}</Button>
        </div>
      </Card>
      {feedback && (
        <Card className="mt-4 p-5 animate-rise">
          <div className="flex items-center justify-between mb-3">
            <b className="text-sm uppercase tracking-wide text-ink-2 dark:text-slate-400">{t("wr_feedback")}</b>
            <Chip tone={feedback.score >= 70 ? "good" : "accent"}>{feedback.score}/100</Chip>
          </div>
          <ul className="space-y-1.5 text-[13.5px] font-medium">{feedback.notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </Card>
      )}
      <Button size="lg" variant="accent" className="mt-5" disabled={!feedback} onClick={() => setStage("done")}>{t("wr_submit")}</Button>
    </div>
  );
}
