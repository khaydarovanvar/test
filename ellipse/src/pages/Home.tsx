import { Flame, Star, Clock, BookOpen, ArrowRight, Zap, Target, RefreshCw } from "lucide-react";
import { useApp, go, levelProgress, nextLesson, minutesToday, totalMinutes, wordsLearned, dueWords, weekData, weakestSkills, recommendation } from "../lib/store";
import { LEVELS, level as getLevel, type LevelId } from "../lib/content";
import { t } from "../lib/i18n";
import { Card, Button, ProgressBar, ProgressRing, SectionTitle, Chip, Ellie, useCountUp } from "../components/ui";

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? t("greeting_morning") : h < 18 ? t("greeting_day") : t("greeting_evening");
}

const SKILL_EMOJI: Record<string, string> = { grammar: "📘", vocabulary: "🃏", reading: "📖", listening: "🎧", speaking: "🎤", writing: "✍️" };

export default function HomePage() {
  const s = useApp();
  const prog = levelProgress(s, s.level);
  const lvl = getLevel(s.level);
  const nextLvl = LEVELS[Math.min(LEVELS.indexOf(s.level) + 1, LEVELS.length - 1)] as LevelId;
  const nx = nextLesson(s);
  const due = dueWords(s);
  const mins = minutesToday(s);
  const total = totalMinutes(s);
  const week = weekData(s);
  const weak = weakestSkills(s, 4);
  const rec = recommendation(s);
  const xpAnim = useCountUp(s.xp);
  const maxMin = Math.max(...week.map((d) => d.min), 10);

  return (
    <div className="animate-rise">
      {/* Greeting */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{greeting()}, {s.name} 👋</h1>
          <p className="text-ink-2 dark:text-slate-400 text-sm mt-0.5">{t("home_sub")}</p>
        </div>
        <button onClick={() => go("coach")} className="shrink-0 hover:scale-105 transition-transform" aria-label="Ellie">
          <Ellie size={56} pose="happy" />
        </button>
      </div>

      {/* Hero journey card — glass (light) / aurora (dark) */}
      <Card className="mt-5 overflow-hidden">
        <div className="p-6">
          <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-accent-500 dark:text-brand-400">{t("journey")}</div>
          <div className="flex items-end justify-between mt-2">
            <div>
              <div className="text-5xl font-extrabold tracking-tight">{s.level}</div>
              <div className="font-semibold text-ink-2 dark:text-slate-300 mt-1">{lvl.name}</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-accent-500 dark:text-brand-400">{prog}%</div>
              {s.level !== nextLvl && <div className="text-xs text-ink-2 dark:text-slate-400 font-semibold">{t("away_from", { n: 100 - prog, lvl: nextLvl })}</div>}
            </div>
          </div>
          <div className="mt-4 h-2.5 rounded-full bg-mist/60 dark:bg-night-700 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-500 transition-[width] duration-700" style={{ width: `${prog}%` }} />
          </div>
          {nx && (
            <button onClick={() => go("lesson", { lvl: nx.lvl, skill: nx.skill, id: nx.id })}
              className="mt-5 w-full flex items-center justify-center gap-2 bg-white text-brand-900 dark:bg-brand-600 font-extrabold py-3.5 rounded-2xl hover:opacity-95 transition-all active:scale-[0.98]">
              {t("continue_learning")} <ArrowRight size={18} />
            </button>
          )}
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        <Card className="p-4"><div className="flex items-center gap-2 text-accent-500"><Flame size={18} /><b className="text-xl text-ink dark:text-slate-100 tabular-nums">{s.streak}</b></div><div className="text-[11px] font-bold text-ink-2 dark:text-slate-400 mt-1 uppercase tracking-wide">{t("day_streak")}</div></Card>
        <Card className="p-4"><div className="flex items-center gap-2 text-brand-500"><Star size={18} /><b className="text-xl text-ink dark:text-slate-100 tabular-nums">{xpAnim.toLocaleString()}</b></div><div className="text-[11px] font-bold text-ink-2 dark:text-slate-400 mt-1 uppercase tracking-wide">XP</div></Card>
        <Card className="p-4"><div className="flex items-center gap-2 text-brand-600"><Clock size={18} /><b className="text-xl text-ink dark:text-slate-100 tabular-nums">{Math.floor(total / 60)}h {total % 60}m</b></div><div className="text-[11px] font-bold text-ink-2 dark:text-slate-400 mt-1 uppercase tracking-wide">{t("learning_time")}</div></Card>
        <Card className="p-4"><div className="flex items-center gap-2 text-accent-600"><BookOpen size={18} /><b className="text-xl text-ink dark:text-slate-100 tabular-nums">{wordsLearned(s)}</b></div><div className="text-[11px] font-bold text-ink-2 dark:text-slate-400 mt-1 uppercase tracking-wide">{t("words_learned")}</div></Card>
      </div>

      {/* Daily goal + review */}
      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        <Card className="p-5 flex items-center gap-4">
          <ProgressRing value={(mins / s.dailyMinutes) * 100} size={78} stroke={8} label={`${mins}`} sub={`/ ${s.dailyMinutes} ${t("min")}`} />
          <div>
            <div className="text-[11px] font-extrabold tracking-[0.15em] uppercase text-ink-2 dark:text-slate-400">{t("todays_goal")}</div>
            <div className="font-extrabold text-lg mt-0.5">{s.dailyMinutes} {t("min")}</div>
            {mins >= s.dailyMinutes && <Chip tone="good" className="mt-1">✓ {t("correct")}</Chip>}
          </div>
        </Card>
        <Card className="p-5" onClick={() => due.length && go("review-session")}>
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400"><RefreshCw size={16} /><span className="text-[11px] font-extrabold tracking-[0.15em] uppercase">{t("review_now")}</span></div>
          {due.length ? (
            <>
              <div className="font-extrabold text-lg mt-1">{t("review_waiting", { n: due.length })}</div>
              <div className="text-xs text-ink-2 dark:text-slate-400 mt-0.5">{t("review_sub")}</div>
              <div className="mt-2 text-sm font-bold text-brand-600 dark:text-brand-400 inline-flex items-center gap-1">{t("start_review")} <ArrowRight size={14} /></div>
            </>
          ) : (
            <div className="font-semibold text-sm text-ink-2 dark:text-slate-400 mt-2">🎉 {t("nothing_due")}</div>
          )}
        </Card>
      </div>

      {/* Daily challenge + recommendation */}
      <SectionTitle>{t("daily_challenge")}</SectionTitle>
      <div className="grid sm:grid-cols-2 gap-3">
        <Card className="p-5" onClick={() => go("practice-session", { mode: "daily" })}>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 font-extrabold"><Zap size={17} className="text-accent-500" /> {t("daily_challenge")}</div>
              <div className="text-xs text-ink-2 dark:text-slate-400 mt-1">{t("challenge_sub")}</div>
            </div>
            <Chip tone="accent">+25 XP</Chip>
          </div>
        </Card>
        {rec && (
          <Card className="p-5" onClick={() => go("lesson", { lvl: rec.lvl, skill: rec.skill, id: rec.id })}>
            <div className="flex items-center gap-2 text-[11px] font-extrabold tracking-[0.15em] uppercase text-brand-600 dark:text-brand-400"><Target size={14} /> {t("recommended")}</div>
            <div className="font-extrabold mt-1.5 leading-snug">{SKILL_EMOJI[rec.skill]} {rec.title}</div>
            <div className="text-xs text-ink-2 dark:text-slate-400 mt-0.5">{t(rec.skill)} · {rec.lvl}{rec.reason ? ` · ${t(rec.reason)} ↓` : ""}</div>
          </Card>
        )}
      </div>

      {/* Weak areas */}
      {weak.length > 0 && (
        <>
          <SectionTitle action={
            <button onClick={() => go("practice")} className="text-xs font-bold text-brand-600 dark:text-brand-400">{t("practice_weak")} →</button>
          }>{t("improve_skills")}</SectionTitle>
          <Card className="p-5 space-y-3.5">
            {weak.map((w) => (
              <div key={w.skill}>
                <div className="flex justify-between text-sm font-bold mb-1.5">
                  <span>{SKILL_EMOJI[w.skill]} {t(w.skill)}</span>
                  <span className={`tabular-nums ${w.score < 60 ? "text-red-500" : w.score < 75 ? "text-accent-500" : "text-brand-600"}`}>{w.score}%</span>
                </div>
                <ProgressBar value={w.score} tone={w.score < 70 ? "accent" : "brand"} />
              </div>
            ))}
          </Card>
        </>
      )}

      {/* Weekly activity */}
      <SectionTitle>{t("weekly_activity")}</SectionTitle>
      <Card className="p-5">
        <div className="flex items-end justify-between gap-2 h-28">
          {week.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <div className="w-full max-w-8 rounded-lg bg-gradient-to-t from-brand-600 to-brand-400 transition-all duration-500 min-h-1"
                style={{ height: `${(d.min / maxMin) * 100}%`, opacity: d.min ? 1 : 0.15 }} />
              <span className={`text-[10px] font-extrabold ${d.today ? "text-brand-600 dark:text-brand-400" : "text-slate-400"}`}>{d.label}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
