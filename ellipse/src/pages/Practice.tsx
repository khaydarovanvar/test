import { useMemo, useState } from "react";
import { X, Zap, Shuffle, ArrowRight } from "lucide-react";
import { useApp, go, back, recordAnswer, addXp, dueWords, skillScore } from "../lib/store";
import { level as getLevel, type LevelId, type SkillId, type QuizQ, type Word } from "../lib/content";
import { t } from "../lib/i18n";
import { Card, Button, Chip, QuizRunner, SectionTitle, Ellie, ProgressRing, ProgressBar } from "../components/ui";

type Diff = "all" | "easy" | "medium" | "hard";

function poolFor(lvl: LevelId, skill: SkillId | "mixed", uiLang: string, diff: Diff): { q: string; o: string[]; a: number; e?: string; skill: SkillId }[] {
  const L = getLevel(lvl);
  const out: { q: string; o: string[]; a: number; e?: string; skill: SkillId; d: string }[] = [];
  const push = (qs: QuizQ[], sk: SkillId) => qs.forEach((q) => out.push({ ...q, skill: sk, d: q.d || "medium" }));
  if (skill === "grammar" || skill === "mixed") L.skills.grammar.forEach((l) => push(l.quiz, "grammar"));
  if (skill === "reading" || skill === "mixed") L.skills.reading.forEach((l) => push(l.quiz, "reading"));
  if (skill === "listening" || skill === "mixed") L.skills.listening.forEach((l) => push(l.quiz, "listening"));
  if (skill === "vocabulary" || skill === "mixed") {
    const meaning = (w: Word) => (uiLang === "ru" ? w.ru : uiLang === "uz" ? w.uz : (w.def || w.uz));
    L.skills.vocabulary.forEach((u) => u.words.forEach((w) => {
      const wrong = u.words.filter((x) => x.w !== w.w).sort(() => Math.random() - 0.5).slice(0, 3).map(meaning);
      if (wrong.length < 3) return;
      const o = [meaning(w), ...wrong].sort(() => Math.random() - 0.5);
      out.push({ q: `“${w.w}” — ?`, o, a: o.indexOf(meaning(w)), e: `${w.w} = ${meaning(w)}`, skill: "vocabulary", d: "medium" });
    }));
  }
  const filtered = diff === "all" ? out : out.filter((q) => q.d === diff);
  return (filtered.length >= 5 ? filtered : out).sort(() => Math.random() - 0.5);
}

export default function PracticePage() {
  const s = useApp();
  if (s.route.page === "practice-session") return <Session />;
  return <Hub />;
}

function countFor(lvl: LevelId, skill: SkillId | "mixed"): number {
  const L = getLevel(lvl);
  let n = 0;
  if (skill === "grammar" || skill === "mixed") L.skills.grammar.forEach((l) => (n += l.quiz.length));
  if (skill === "reading" || skill === "mixed") L.skills.reading.forEach((l) => (n += l.quiz.length));
  if (skill === "listening" || skill === "mixed") L.skills.listening.forEach((l) => (n += l.quiz.length));
  if (skill === "vocabulary" || skill === "mixed") L.skills.vocabulary.forEach((u) => (n += u.words.length));
  return n;
}

function Hub() {
  const s = useApp();
  const due = dueWords(s);
  const [diff, setDiff] = useState<Diff>("all");
  const acc = (sk: SkillId) => skillScore(s, sk);
  const modes: { id: string; icon: string; title: string; sub: string; skill?: SkillId | "mixed"; meta?: string; accuracy?: number | null }[] = [
    { id: "quick", icon: "⚡", title: t("quick"), sub: t("quick_sub"), skill: "mixed", meta: `~3 ${t("min")} · +25 XP` },
    { id: "mixed", icon: "🔀", title: t("mixed"), sub: t("mixed_sub"), skill: "mixed", meta: `10 ${t("questions_n")} · ${countFor(s.level, "mixed").toLocaleString()} ${t("questions_n")} ${s.level}` },
    { id: "grammar", icon: "📘", title: t("grammar"), sub: `${countFor(s.level, "grammar")} ${t("questions_n")} · ~7 ${t("min")}`, skill: "grammar", accuracy: acc("grammar") },
    { id: "vocabulary", icon: "🃏", title: t("vocabulary"), sub: `${countFor(s.level, "vocabulary")} ${t("words")} · ~6 ${t("min")}`, skill: "vocabulary", accuracy: acc("vocabulary") },
    { id: "reading", icon: "📖", title: t("reading"), sub: `${countFor(s.level, "reading")} ${t("questions_n")} · ~8 ${t("min")}`, skill: "reading", accuracy: acc("reading") },
    { id: "listening", icon: "🎧", title: t("listening"), sub: `${countFor(s.level, "listening")} ${t("questions_n")} · ~6 ${t("min")}`, skill: "listening", accuracy: acc("listening") },
  ];
  const doneCount = (sk: SkillId) => getLevel(s.level).skills[sk === "speaking" ? "speaking" : "writing"].filter((x: { id: string }) => s.done[`${s.level}.${sk}.${x.id}`]).length;
  return (
    <div className="animate-rise">
      <div className="pt-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t("practice_hub")}</h1>
        <p className="text-ink-2 dark:text-slate-400 text-sm mt-0.5">{getLevel(s.level).name} · {s.level}</p>
      </div>

      {due.length > 0 && (
        <Card className="mt-5 p-5 bg-gradient-to-br from-brand-900 to-brand-700 border-0" onClick={() => go("review-session")}>
          <div className="flex items-center justify-between text-white">
            <div>
              <div className="text-[11px] font-extrabold tracking-[0.15em] uppercase text-white/60">{t("review_now")}</div>
              <div className="font-extrabold text-lg mt-0.5">{t("review_waiting", { n: due.length })}</div>
              <div className="text-xs text-white/70">{t("review_sub")}</div>
            </div>
            <div className="w-11 h-11 grid place-items-center rounded-full bg-white/15"><ArrowRight size={20} className="text-white" /></div>
          </div>
        </Card>
      )}

      <SectionTitle>{t("difficulty")}</SectionTitle>
      <div className="flex gap-2">
        {(["all", "easy", "medium", "hard"] as Diff[]).map((d) => (
          <button key={d} onClick={() => setDiff(d)}
            className={`px-4 py-2 rounded-full text-[13px] font-bold border-[1.5px] transition-colors ${diff === d ? "bg-brand-600 border-brand-600 text-white" : "border-mist dark:border-night-700 text-ink-2 dark:text-slate-300"}`}>
            {d === "all" ? "∀" : ""} {d === "all" ? t("mixed") : t(d)}
          </button>
        ))}
      </div>

      <SectionTitle>{t("practice_hub")}</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        {modes.map((m) => (
          <Card key={m.id} className="p-5" onClick={() => go("practice-session", { mode: m.id, skill: m.skill ?? "mixed", diff })}>
            <div className="flex items-start justify-between">
              <div className="text-2xl">{m.icon}</div>
              {m.accuracy != null && (
                <Chip tone={m.accuracy < 60 ? "bad" : m.accuracy < 75 ? "accent" : "good"}>{m.accuracy}%</Chip>
              )}
            </div>
            <div className="font-extrabold mt-2 text-[15px]">{m.title}</div>
            <div className="text-xs text-ink-2 dark:text-slate-400 mt-0.5">{m.sub}</div>
            {m.meta && <div className="text-[11px] font-bold text-brand-600 dark:text-brand-400 mt-1.5">{m.meta}</div>}
            {m.accuracy != null && <ProgressBar value={m.accuracy} className="mt-2.5" tone={m.accuracy < 70 ? "accent" : "brand"} />}
          </Card>
        ))}
      </div>

      <SectionTitle>{t("speaking")} · {t("writing")}</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-5" onClick={() => go("level", { lvl: s.level, skill: "speaking" })}>
          <div className="flex items-start justify-between">
            <div className="text-2xl">🎤</div>
            {skillScore(s, "speaking") != null && <Chip tone="brand">{skillScore(s, "speaking")}%</Chip>}
          </div>
          <div className="font-extrabold mt-2 text-[15px]">{t("speaking")}</div>
          <div className="text-xs text-ink-2 dark:text-slate-400 mt-0.5">
            {doneCount("speaking")}/{getLevel(s.level).skills.speaking.length} {t("done_of")} · 60–120s
          </div>
          <ProgressBar value={(doneCount("speaking") / Math.max(1, getLevel(s.level).skills.speaking.length)) * 100} className="mt-2.5" />
        </Card>
        <Card className="p-5" onClick={() => go("level", { lvl: s.level, skill: "writing" })}>
          <div className="flex items-start justify-between">
            <div className="text-2xl">✍️</div>
            {skillScore(s, "writing") != null && <Chip tone="brand">{skillScore(s, "writing")}%</Chip>}
          </div>
          <div className="font-extrabold mt-2 text-[15px]">{t("writing")}</div>
          <div className="text-xs text-ink-2 dark:text-slate-400 mt-0.5">
            {doneCount("writing")}/{getLevel(s.level).skills.writing.length} {t("done_of")} · 80–260 {t("words")}
          </div>
          <ProgressBar value={(doneCount("writing") / Math.max(1, getLevel(s.level).skills.writing.length)) * 100} className="mt-2.5" />
        </Card>
      </div>
    </div>
  );
}

function Session() {
  const s = useApp();
  const mode = s.route.params?.mode ?? "quick";
  const skill = (s.route.params?.skill ?? "mixed") as SkillId | "mixed";
  const diff = (s.route.params?.diff ?? "all") as Diff;
  const n = mode === "quick" || mode === "daily" ? 5 : 10;
  const questions = useMemo(() => poolFor(s.level, mode === "daily" ? "mixed" : skill, s.uiLang, diff).slice(0, n), []);
  const [done, setDone] = useState<number | null>(null);

  if (done != null) {
    const pct = Math.round((done / questions.length) * 100);
    const bonus = mode === "daily" && done === questions.length;
    return (
      <div className="flex flex-col items-center text-center pt-10 animate-pop">
        <Ellie pose={pct >= 60 ? "cheer" : "think"} size={120} />
        <h2 className="text-2xl font-extrabold mt-4">{t("session_result")}</h2>
        <div className="mt-5"><ProgressRing value={pct} size={120} stroke={11} label={`${done}/${questions.length}`} sub={t("accuracy")} /></div>
        {bonus && <Chip tone="accent" className="mt-4 animate-pop">🎉 5/5 — +25 XP bonus!</Chip>}
        <div className="w-full max-w-sm mt-8 space-y-2.5">
          <Button size="lg" onClick={() => { back(); }}>{t("continue")}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-rise">
      <header className="flex items-center gap-3 pt-1 pb-4">
        <button onClick={() => back()} className="w-9 h-9 grid place-items-center rounded-xl bg-mist/50 dark:bg-night-800 text-ink-2 dark:text-slate-300"><X size={17} /></button>
        <div>
          <div className="text-[10.5px] font-extrabold tracking-[0.14em] uppercase text-brand-600 dark:text-brand-400 flex items-center gap-1">
            {mode === "daily" ? <><Zap size={12} /> {t("daily_challenge")}</> : <><Shuffle size={12} /> {t("practice_hub")}</>}
          </div>
          <h1 className="font-extrabold text-[17px]">{mode === "daily" ? t("challenge_sub") : `${t(skill === "mixed" ? "mixed" : skill)} · ${s.level}`}</h1>
        </div>
      </header>
      <Card className="p-5">
        <QuizRunner
          questions={questions}
          onAnswer={(ok, i) => recordAnswer((questions[i] as any).skill ?? "grammar", ok)}
          onDone={(sc) => { if (mode === "daily" && sc === questions.length) addXp(25); setDone(sc); }}
        />
      </Card>
    </div>
  );
}
