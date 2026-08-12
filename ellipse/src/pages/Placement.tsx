import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { useApp, back, root, update, recordAnswer, checkAchievements, celebrate } from "../lib/store";
import { CONTENT, type LevelId } from "../lib/content";
import { t } from "../lib/i18n";
import { Card, Button, ProgressBar, ProgressRing, Ellie, Chip } from "../components/ui";

const BANDS = ["A1", "A2", "B1", "B2", "C1"];

export default function PlacementPage() {
  const s = useApp();
  const questions = useMemo(() => CONTENT.placement, []);
  const [i, setI] = useState(-1); // -1 intro
  const [picked, setPicked] = useState<number | null>(null);
  const [byBand, setByBand] = useState<Record<string, { a: number; c: number }>>({});
  const [bySkill, setBySkill] = useState<Record<string, { a: number; c: number }>>({});
  const [missStreak, setMissStreak] = useState(0);
  const [result, setResult] = useState<{ level: LevelId; confidence: number; skills: Record<string, string> } | null>(null);

  const computeResult = (bands: Record<string, { a: number; c: number }>, skills: Record<string, { a: number; c: number }>) => {
    // walk up bands while accuracy ≥ 50%
    let lvl: LevelId = "A1";
    const order: LevelId[] = ["A1", "A2", "B1", "B2"];
    for (const b of order) {
      const st = bands[b];
      if (st && st.a > 0 && st.c / st.a >= 0.5) lvl = b === "A1" ? "A1" : b;
      else break;
    }
    const c1 = bands["C1"];
    if (lvl === "B2" && c1 && c1.a > 0 && c1.c / c1.a >= 0.5) lvl = "C1";
    const answered = Object.values(bands).reduce((n, x) => n + x.a, 0);
    const confidence = Math.min(95, 50 + Math.round((answered / questions.length) * 40));
    const skillLevels: Record<string, string> = {};
    for (const [sk, st] of Object.entries(skills)) {
      const acc = st.a ? st.c / st.a : 0;
      const li = Math.max(0, Math.min(4, Math.round(acc * 4) + (BANDS.indexOf(lvl) - 2)));
      skillLevels[sk] = BANDS[Math.max(0, Math.min(BANDS.indexOf(lvl) + (acc >= 0.75 ? 1 : acc < 0.4 ? -1 : 0), 4))] ?? lvl;
    }
    return { level: lvl, confidence, skills: skillLevels };
  };

  const finish = (bands = byBand, skills = bySkill) => {
    const r = computeResult(bands, skills);
    setResult(r);
    update((st) => { st.placement = r; });
    checkAchievements();
  };

  /* intro */
  if (i === -1) return (
    <div className="animate-rise max-w-lg mx-auto pt-4">
      <header className="flex items-center gap-3 pb-4">
        <button onClick={() => back()} className="w-9 h-9 grid place-items-center rounded-xl bg-mist/50 dark:bg-night-800"><X size={17} /></button>
        <h1 className="font-extrabold text-[17px]">{t("placement")}</h1>
      </header>
      <Card className="p-8 text-center">
        <Ellie pose="think" size={100} className="mx-auto" />
        <h2 className="text-2xl font-extrabold mt-4">{t("placement")}</h2>
        <p className="text-sm text-ink-2 dark:text-slate-400 mt-2">{t("placement_intro")}</p>
        <Chip tone="brand" className="mt-3">{t("placement_sub")}</Chip>
        <Button size="lg" className="mt-7" onClick={() => setI(0)}>{t("start")}</Button>
      </Card>
    </div>
  );

  /* result */
  if (result) return (
    <div className="animate-pop max-w-lg mx-auto pt-6 text-center">
      <Ellie pose="cheer" size={110} className="mx-auto" />
      <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-ink-2 dark:text-slate-400 mt-5">{t("your_level")}</div>
      <div className="text-7xl font-extrabold tracking-tight text-brand-600 dark:text-brand-400 mt-1">{result.level}</div>
      <div className="mt-3 flex justify-center"><Chip tone="accent">{result.confidence}% {t("confidence")}</Chip></div>
      <Card className="mt-7 p-6 text-left">
        <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-ink-2 dark:text-slate-400 mb-4">{t("skill_breakdown")}</div>
        <div className="space-y-3">
          {Object.entries(result.skills).map(([sk, lv]) => (
            <div key={sk} className="flex items-center justify-between">
              <span className="font-bold text-[14.5px] capitalize">{t(sk)}</span>
              <Chip tone="brand">{lv}</Chip>
            </div>
          ))}
        </div>
      </Card>
      <Button size="lg" variant="accent" className="mt-6" onClick={() => {
        update((st) => { st.level = result.level; });
        root("home");
        celebrate(`${result.level} — ${t("your_level")}`, t("home_sub"));
      }}>
        {t("build_plan")}
      </Button>
    </div>
  );

  const q = questions[i];
  const answered = picked != null;

  const pick = (j: number) => {
    if (answered) return;
    setPicked(j);
    const ok = j === q.a;
    const bands = { ...byBand, [q.b]: { a: (byBand[q.b]?.a ?? 0) + 1, c: (byBand[q.b]?.c ?? 0) + (ok ? 1 : 0) } };
    const skills = { ...bySkill, [q.skill]: { a: (bySkill[q.skill]?.a ?? 0) + 1, c: (bySkill[q.skill]?.c ?? 0) + (ok ? 1 : 0) } };
    setByBand(bands); setBySkill(skills);
    const streak = ok ? 0 : missStreak + 1;
    setMissStreak(streak);
    setTimeout(() => {
      // adaptive early stop: 4 misses in a row → we already know the ceiling
      if (streak >= 4 || i + 1 >= questions.length) finish(bands, skills);
      else { setI(i + 1); setPicked(null); }
    }, 750);
  };

  return (
    <div className="animate-rise max-w-lg mx-auto pt-4">
      <header className="flex items-center gap-3 pb-4">
        <button onClick={() => back()} className="w-9 h-9 grid place-items-center rounded-xl bg-mist/50 dark:bg-night-800"><X size={17} /></button>
        <div className="flex-1"><h1 className="font-extrabold text-[17px]">{t("placement")}</h1></div>
        <Chip tone="brand">{q.b}</Chip>
      </header>
      <ProgressBar value={(i / questions.length) * 100} className="mb-5" />
      <Card className="p-6" key={i}>
        <p className="text-[17px] font-bold leading-relaxed mb-4 animate-rise">{q.q}</p>
        <div className="space-y-2.5">
          {q.o.map((o, j) => {
            let cls = "border-mist dark:border-night-700 hover:border-brand-500/60";
            if (answered && j === q.a) cls = "border-brand-500 bg-brand-50 dark:bg-brand-950";
            else if (answered && j === picked) cls = "border-red-400 bg-red-50 dark:bg-red-950/40 animate-shake";
            else if (answered) cls = "opacity-50 border-mist dark:border-night-700";
            return (
              <button key={j} onClick={() => pick(j)}
                className={`w-full text-left px-4 py-3.5 rounded-2xl border-[1.5px] font-semibold text-[15px] transition-all ${cls}`}>
                {o}
              </button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
