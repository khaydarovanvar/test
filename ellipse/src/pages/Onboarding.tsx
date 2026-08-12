import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { update, go, root, celebrate } from "../lib/store";
import type { SkillId, LevelId } from "../lib/content";
import { t } from "../lib/i18n";
import { Button, Ellie, ProgressBar, Chip } from "../components/ui";

const GOALS = ["g_speak", "g_abroad", "g_work", "g_travel", "g_school", "g_uni", "g_everyday", "g_fluent"];
const GOAL_EMOJI = ["🗣️", "✈️", "💼", "🌍", "🏫", "🎓", "☕", "🚀"];
const LEVELS_OPT: { id: LevelId; name: string }[] = [
  { id: "A1", name: "Beginner" }, { id: "A2", name: "Elementary" }, { id: "B1", name: "Intermediate" },
  { id: "B2", name: "Upper-Intermediate" }, { id: "C1", name: "Advanced" },
];
const SKILL_OPTS: { id: SkillId; label: string }[] = [
  { id: "grammar", label: "grammar" }, { id: "vocabulary", label: "vocabulary" }, { id: "speaking", label: "speaking" },
  { id: "listening", label: "listening" }, { id: "reading", label: "reading" }, { id: "writing", label: "writing" },
];
const TIMES = [10, 20, 30, 45, 60];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<string | null>(null);
  const [lvl, setLvl] = useState<LevelId | "unsure" | null>(null);
  const [focus, setFocus] = useState<SkillId[]>([]);
  const [minutes, setMinutes] = useState(20);
  const [name, setName] = useState("");
  const [lang, setLang] = useState<"en" | "ru" | "uz">("en");

  const totalSteps = 7;
  const finish = (targetLevel: LevelId, thenPlacement = false) => {
    update((s) => {
      s.onboarded = true; s.name = name.trim() || "Friend"; s.uiLang = lang;
      s.goal = goal; s.focus = focus; s.dailyMinutes = minutes; s.level = targetLevel;
      s.stack = []; s.route = { page: "home" };
    });
    if (thenPlacement) go("placement-run");
    else {
      const h = new Date().getHours();
      const key = h < 12 ? "greeting_morning" : h < 18 ? "greeting_day" : "greeting_evening";
      celebrate(`${t(key)}, ${name.trim() || "friend"}!`, t("home_sub"));
    }
  };

  const Screen = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen flex flex-col max-w-xl mx-auto px-6 pt-6 pb-10 animate-rise" key={step}>
      {step > 0 && (
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setStep(step - 1)} className="text-ink-2 dark:text-slate-400 font-bold text-sm">‹ {t("back")}</button>
          <ProgressBar value={(step / (totalSteps - 1)) * 100} className="flex-1" />
        </div>
      )}
      {children}
    </div>
  );

  /* 0 — hero */
  if (step === 0) return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-brand-950 via-brand-900 to-brand-700 text-white">
      <div className="animate-pop"><Ellie pose="wave" size={150} /></div>
      <div className="mt-6 font-extrabold tracking-tight text-[15px] opacity-80">ELLIPSE <span className="tracking-[0.3em] text-brand-400">ENGLISH</span></div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 leading-[1.1]">{t("ob_hero")}</h1>
      <p className="mt-4 text-white/70 max-w-sm">Learn English. Level Up. — A1 → C1</p>
      <div className="flex gap-2 mt-8">
        {(["en", "ru", "uz"] as const).map((l) => (
          <button key={l} onClick={() => setLang(l)}
            className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${lang === l ? "bg-white text-brand-900 border-white" : "border-white/30 text-white/80 hover:border-white/60"}`}>
            {l === "en" ? "English" : l === "ru" ? "Русский" : "O'zbekcha"}
          </button>
        ))}
      </div>
      <button onClick={() => setStep(1)}
        className="mt-10 inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-brand-950 font-extrabold px-8 py-4 rounded-2xl text-lg shadow-lift transition-all active:scale-95">
        {t("ob_start")} <ArrowRight size={20} />
      </button>
    </div>
  );

  /* 1 — name */
  if (step === 1) return (
    <Screen>
      <Ellie pose="happy" size={72} />
      <h1 className="text-3xl font-extrabold tracking-tight mt-4 mb-6">{t("ob_name")}</h1>
      <input autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder={t("ob_name_ph")}
        className="w-full px-5 py-4 rounded-2xl border-[1.5px] border-mist dark:border-night-700 bg-surface dark:bg-night-900 text-lg font-semibold outline-none focus:border-brand-500 transition-colors" />
      <div className="mt-auto pt-8">
        <Button size="lg" disabled={!name.trim()} onClick={() => setStep(2)}>{t("next")} <ArrowRight size={18} /></Button>
      </div>
    </Screen>
  );

  /* 2 — goal */
  if (step === 2) return (
    <Screen>
      <h1 className="text-3xl font-extrabold tracking-tight mb-6">{t("ob_goal")}</h1>
      <div className="grid grid-cols-2 gap-3">
        {GOALS.map((g, i) => (
          <button key={g} onClick={() => { setGoal(g); setStep(3); }}
            className={`p-4 rounded-2xl border-[1.5px] text-left font-bold text-[14px] leading-snug transition-all hover:-translate-y-0.5 hover:shadow-soft ${goal === g ? "border-brand-500 bg-brand-50 dark:bg-brand-950" : "border-mist dark:border-night-700 bg-surface dark:bg-night-900"}`}>
            <div className="text-2xl mb-2">{GOAL_EMOJI[i]}</div>{t(g)}
          </button>
        ))}
      </div>
    </Screen>
  );

  /* 3 — self level */
  if (step === 3) return (
    <Screen>
      <h1 className="text-3xl font-extrabold tracking-tight mb-6">{t("ob_level_q")}</h1>
      <div className="space-y-2.5">
        {LEVELS_OPT.map((o) => (
          <button key={o.id} onClick={() => { setLvl(o.id); setStep(4); }}
            className="w-full flex items-center gap-4 p-4 rounded-2xl border-[1.5px] border-mist dark:border-night-700 bg-surface dark:bg-night-900 font-bold hover:border-brand-500/60 transition-all text-left">
            <span className="w-11 h-11 grid place-items-center rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 font-extrabold">{o.id}</span>
            {o.name}
          </button>
        ))}
        <button onClick={() => { setLvl("unsure"); setStep(4); }}
          className="w-full p-4 rounded-2xl border-[1.5px] border-dashed border-mist dark:border-night-700 font-bold text-ink-2 dark:text-slate-400 hover:border-brand-500/60 transition-all">
          🤔 {t("ob_not_sure")} → {t("take_placement")}
        </button>
      </div>
    </Screen>
  );

  /* 4 — focus skills */
  if (step === 4) return (
    <Screen>
      <h1 className="text-3xl font-extrabold tracking-tight mb-6">{t("ob_improve")}</h1>
      <div className="grid grid-cols-2 gap-3">
        {SKILL_OPTS.map((sk) => {
          const on = focus.includes(sk.id);
          return (
            <button key={sk.id} onClick={() => setFocus(on ? focus.filter((x) => x !== sk.id) : [...focus, sk.id])}
              className={`flex items-center justify-between p-4 rounded-2xl border-[1.5px] font-bold transition-all ${on ? "border-brand-500 bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400" : "border-mist dark:border-night-700 bg-surface dark:bg-night-900"}`}>
              {t(sk.label)} {on && <Check size={17} />}
            </button>
          );
        })}
      </div>
      <div className="mt-auto pt-8">
        <Button size="lg" disabled={!focus.length} onClick={() => setStep(5)}>{t("next")} <ArrowRight size={18} /></Button>
      </div>
    </Screen>
  );

  /* 5 — time */
  if (step === 5) return (
    <Screen>
      <h1 className="text-3xl font-extrabold tracking-tight mb-6">{t("ob_time")}</h1>
      <div className="space-y-2.5">
        {TIMES.map((m) => (
          <button key={m} onClick={() => { setMinutes(m); setStep(6); }}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border-[1.5px] font-bold transition-all ${minutes === m ? "border-brand-500 bg-brand-50 dark:bg-brand-950" : "border-mist dark:border-night-700 bg-surface dark:bg-night-900 hover:border-brand-500/50"}`}>
            <span>{m}{m === 60 ? "+" : ""} {t("min")}</span>
            <span className="text-xs text-ink-2 dark:text-slate-400 font-semibold">
              {m <= 10 ? "☕" : m <= 20 ? "👍 " : m <= 30 ? "🔥" : "🚀"}
            </span>
          </button>
        ))}
      </div>
    </Screen>
  );

  /* 6 — plan */
  const startLvl: LevelId = lvl === "unsure" || lvl == null ? "A1" : lvl;
  const target: LevelId = startLvl === "C1" ? "C1" : (["A2", "B1", "B2", "C1"] as LevelId[])[["A1", "A2", "B1", "B2"].indexOf(startLvl)];
  const weeks = { A1: 8, A2: 10, B1: 12, B2: 14, C1: 16 }[target];
  return (
    <Screen>
      <div className="flex flex-col items-center text-center">
        <Ellie pose="cheer" size={100} />
        <h1 className="text-3xl font-extrabold tracking-tight mt-4">{t("ob_plan")}</h1>
        <div className="mt-6 w-full rounded-3xl bg-gradient-to-br from-brand-900 to-brand-700 text-white p-7 shadow-lift text-left">
          <div className="flex items-end gap-3">
            <span className="text-4xl font-extrabold">{startLvl}</span>
            <ArrowRight className="mb-2 opacity-70" />
            <span className="text-4xl font-extrabold text-accent-400">{target}</span>
          </div>
          <div className="mt-3 text-white/80 font-semibold">{weeks} weeks · {minutes} {t("min")}/day</div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <span className="text-[11px] uppercase tracking-wider font-bold text-white/60 w-full">{t("ob_focus")}</span>
            {focus.map((f) => <Chip key={f} tone="accent">{t(f)}</Chip>)}
          </div>
        </div>
        <div className="w-full mt-auto pt-8 space-y-2.5">
          <Button size="lg" variant="accent" onClick={() => finish(startLvl, lvl === "unsure")}>
            {lvl === "unsure" ? t("take_placement") : t("ob_start_learning")} <ArrowRight size={18} />
          </Button>
          {lvl === "unsure" && (
            <Button size="lg" variant="ghost" onClick={() => finish("A1")}>{t("skip")}</Button>
          )}
        </div>
      </div>
    </Screen>
  );
}
