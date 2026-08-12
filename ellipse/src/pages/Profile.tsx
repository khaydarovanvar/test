import { Sun, Moon, Monitor, Compass, Trash2, Globe, Clock } from "lucide-react";
import { useApp, update, go, wordsLearned } from "../lib/store";
import { t } from "../lib/i18n";
import { Card, SectionTitle, Chip, Ellie } from "../components/ui";

export default function ProfilePage() {
  const s = useApp();
  const firstDay = Object.keys(s.days).sort()[0];

  return (
    <div className="animate-rise">
      <div className="pt-4 flex flex-col items-center text-center">
        <Ellie size={90} pose="happy" />
        <h1 className="text-2xl font-extrabold tracking-tight mt-3">{s.name}</h1>
        <div className="flex gap-2 mt-2">
          <Chip tone="brand">{s.level}</Chip>
          <Chip tone="accent">⭐ {s.xp.toLocaleString()} XP</Chip>
          <Chip>🔥 {s.streak}</Chip>
        </div>
        {firstDay && <p className="text-xs text-slate-400 mt-2">{t("member_since")} {firstDay}</p>}
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        <Card className="p-4 text-center"><b className="text-lg tabular-nums">{Object.keys(s.done).length}</b><div className="text-[10.5px] font-bold text-ink-2 dark:text-slate-400 uppercase mt-1">{t("lessons")}</div></Card>
        <Card className="p-4 text-center"><b className="text-lg tabular-nums">{wordsLearned(s)}</b><div className="text-[10.5px] font-bold text-ink-2 dark:text-slate-400 uppercase mt-1">{t("words")}</div></Card>
        <Card className="p-4 text-center"><b className="text-lg tabular-nums">{s.achievements.length}</b><div className="text-[10.5px] font-bold text-ink-2 dark:text-slate-400 uppercase mt-1">{t("achievements")}</div></Card>
      </div>

      <SectionTitle>{t("settings")}</SectionTitle>
      <Card>
        {/* language */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-mist/60 dark:border-night-800">
          <Globe size={18} className="text-ink-2 dark:text-slate-400" />
          <span className="flex-1 font-bold text-[14.5px]">{t("language")}</span>
          <div className="flex gap-1.5">
            {(["en", "ru", "uz"] as const).map((l) => (
              <button key={l} onClick={() => update((st) => { st.uiLang = l; })}
                className={`px-3 py-1.5 rounded-full text-xs font-extrabold border transition-colors ${s.uiLang === l ? "bg-brand-600 border-brand-600 text-white" : "border-mist dark:border-night-700 text-ink-2 dark:text-slate-400"}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        {/* theme */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-mist/60 dark:border-night-800">
          <Sun size={18} className="text-ink-2 dark:text-slate-400" />
          <span className="flex-1 font-bold text-[14.5px]">{t("theme")}</span>
          <div className="flex gap-1.5">
            {([["light", Sun], ["dark", Moon], ["system", Monitor]] as const).map(([mode, Icon]) => (
              <button key={mode} onClick={() => update((st) => { st.theme = mode; })}
                aria-label={mode}
                className={`w-9 h-9 grid place-items-center rounded-xl border transition-colors ${s.theme === mode ? "bg-brand-600 border-brand-600 text-white" : "border-mist dark:border-night-700 text-ink-2 dark:text-slate-400"}`}>
                <Icon size={15} />
              </button>
            ))}
          </div>
        </div>
        {/* daily goal */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-mist/60 dark:border-night-800">
          <Clock size={18} className="text-ink-2 dark:text-slate-400" />
          <span className="flex-1 font-bold text-[14.5px]">{t("daily_goal_set")}</span>
          <div className="flex gap-1.5">
            {[10, 20, 30, 45, 60].map((m) => (
              <button key={m} onClick={() => update((st) => { st.dailyMinutes = m; })}
                className={`px-2.5 py-1.5 rounded-full text-xs font-extrabold border transition-colors ${s.dailyMinutes === m ? "bg-brand-600 border-brand-600 text-white" : "border-mist dark:border-night-700 text-ink-2 dark:text-slate-400"}`}>
                {m}
              </button>
            ))}
          </div>
        </div>
        {/* placement */}
        <button onClick={() => go("placement-run")} className="w-full flex items-center gap-3 px-5 py-4 border-b border-mist/60 dark:border-night-800 hover:bg-mist/20 dark:hover:bg-night-800 transition-colors text-left">
          <Compass size={18} className="text-brand-600" />
          <span className="flex-1 font-bold text-[14.5px]">{t("retake_placement")}</span>
          {s.placement && <Chip tone="brand">{s.placement.level}</Chip>}
        </button>
        {/* reset */}
        <button onClick={() => { if (confirm(t("reset_confirm"))) { localStorage.removeItem("ellipse_v1"); location.reload(); } }}
          className="w-full flex items-center gap-3 px-5 py-4 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors text-left">
          <Trash2 size={18} className="text-red-500" />
          <span className="flex-1 font-bold text-[14.5px] text-red-500">{t("reset")}</span>
        </button>
      </Card>

      <p className="text-center text-[11px] text-slate-400 mt-8 leading-relaxed">
        ELLIPSE <b className="tracking-[0.2em]">ENGLISH</b> · Learn English. Level Up.<br />
        A1 → C1 · offline-first · your progress lives on this device
      </p>
    </div>
  );
}
