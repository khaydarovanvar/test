import { Check, Trophy } from "lucide-react";
import { useApp, go, levelProgress, masteryScore, skillScore, totalMinutes, wordsLearned, wordsByStatus, weekData, isLevelUnlocked, leaderboard, ACHIEVEMENTS } from "../lib/store";
import { LEVELS, SKILLS, level as getLevel, levelLessonCount, levelWordCount } from "../lib/content";
import { t } from "../lib/i18n";
import { Card, ProgressBar, ProgressRing, SectionTitle, Chip, useCountUp } from "../components/ui";

const SKILL_EMOJI: Record<string, string> = { grammar: "📘", vocabulary: "🃏", reading: "📖", listening: "🎧", speaking: "🎤", writing: "✍️" };

export default function ProgressPage() {
  const s = useApp();
  const mastery = masteryScore(s);
  const total = totalMinutes(s);
  const week = weekData(s);
  const xpAnim = useCountUp(s.xp);
  const rows = leaderboard(s);
  const myRank = rows.findIndex((r) => r.you) + 1;

  return (
    <div className="animate-rise">
      <div className="pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t("progress_title")}</h1>
          <p className="text-ink-2 dark:text-slate-400 text-sm mt-0.5">{t("current_level")}: <b className="text-brand-600 dark:text-brand-400">{s.level}</b> · ⭐ {xpAnim.toLocaleString()} XP</p>
        </div>
        <ProgressRing value={mastery} size={84} stroke={9} sub={t("english_mastery")} />
      </div>

      {/* Skill cards */}
      <SectionTitle>{t("skill_breakdown")}</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {SKILLS.map((sk) => {
          const score = skillScore(s, sk);
          return (
            <Card key={sk} className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-xl">{SKILL_EMOJI[sk]}</span>
                <b className={`tabular-nums ${score == null ? "text-slate-400 text-sm" : score < 60 ? "text-red-500" : score < 75 ? "text-accent-500" : "text-brand-600 dark:text-brand-400"}`}>
                  {score == null ? "—" : `${score}%`}
                </b>
              </div>
              <div className="font-bold text-[13.5px] mt-2">{t(sk)}</div>
              <ProgressBar value={score ?? 0} className="mt-2" tone={score != null && score < 70 ? "accent" : "brand"} />
            </Card>
          );
        })}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <Card className="p-4 text-center"><b className="text-xl tabular-nums">{Math.floor(total / 60)}h {total % 60}m</b><div className="text-[10.5px] font-bold text-ink-2 dark:text-slate-400 uppercase tracking-wide mt-1">{t("time_invested")}</div></Card>
        <Card className="p-4 text-center"><b className="text-xl tabular-nums">{wordsLearned(s)}</b><div className="text-[10.5px] font-bold text-ink-2 dark:text-slate-400 uppercase tracking-wide mt-1">{t("words_learned")}</div></Card>
        <Card className="p-4 text-center"><b className="text-xl tabular-nums">{Object.keys(s.done).length}</b><div className="text-[10.5px] font-bold text-ink-2 dark:text-slate-400 uppercase tracking-wide mt-1">{t("lessons")}</div></Card>
      </div>

      {/* Vocabulary pipeline */}
      <SectionTitle>{t("vocabulary")}</SectionTitle>
      <Card className="p-5">
        <div className="grid grid-cols-4 gap-2 text-center">
          {([["new_w", 0], ["learning_w", 1], ["review_w", 2], ["mastered_w", 3]] as const).map(([label, st]) => (
            <div key={label}>
              <b className="text-lg tabular-nums">{wordsByStatus(s, st as 0 | 1 | 2 | 3)}</b>
              <div className="text-[10.5px] font-bold text-ink-2 dark:text-slate-400 uppercase tracking-wide">{t(label)}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Consistency */}
      <SectionTitle>{t("consistency")}</SectionTitle>
      <Card className="p-5">
        <div className="flex items-end justify-between gap-2 h-24">
          {week.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <div className="w-full max-w-8 rounded-lg bg-gradient-to-t from-brand-600 to-brand-400 min-h-1 transition-all"
                style={{ height: `${(d.min / Math.max(...week.map((x) => x.min), 10)) * 100}%`, opacity: d.min ? 1 : 0.15 }} />
              <span className={`text-[10px] font-extrabold ${d.today ? "text-brand-600" : "text-slate-400"}`}>{d.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-3 text-xs font-bold text-ink-2 dark:text-slate-400">
          <span>🔥 {s.streak} {t("day_streak")}</span><span>best: {s.bestStreak}</span>
        </div>
      </Card>

      {/* CEFR roadmap */}
      <SectionTitle>{t("roadmap")}</SectionTitle>
      <div className="space-y-3">
        {LEVELS.map((lvl) => {
          const meta = getLevel(lvl);
          const onTrack = isLevelUnlocked(s, lvl);
          const prog = levelProgress(s, lvl);
          const prevIdx = LEVELS.indexOf(lvl) - 1;
          return (
            <Card key={lvl} className="p-5" onClick={() => go("level", { lvl })}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`w-12 h-12 grid place-items-center rounded-2xl font-extrabold ${prog >= 100 ? "bg-brand-600 text-white" : "bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400"}`}>
                    {prog >= 100 ? <Check size={20} /> : lvl}
                  </span>
                  <div>
                    <b className="uppercase tracking-wide text-[13px]">{lvl} {meta.name}</b>
                    <div className="text-xs text-ink-2 dark:text-slate-400">
                      {prog}% · {levelLessonCount(lvl)} {t("lessons")} · {levelWordCount(lvl)} {t("words")}
                    </div>
                  </div>
                </div>
                {!onTrack && <Chip>{t("recommended_later", { lvl: LEVELS[prevIdx] })}</Chip>}
                {prog >= 100 && <Chip tone="good">✓</Chip>}
              </div>
              <ProgressBar value={prog} className="mt-3" />
            </Card>
          );
        })}
      </div>

      {/* Achievements */}
      <SectionTitle>{t("achievements")} · {s.achievements.length}/{ACHIEVEMENTS.length}</SectionTitle>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {ACHIEVEMENTS.map((a) => {
          const got = s.achievements.includes(a.id);
          return (
            <Card key={a.id} className={`p-4 text-center ${got ? "" : "opacity-40 grayscale"}`}>
              <div className="text-2xl">{a.emoji}</div>
              <div className="text-[11px] font-bold mt-1.5 leading-tight">{t(`ach_${a.id}`)}</div>
            </Card>
          );
        })}
      </div>

      {/* Leaderboard */}
      <SectionTitle action={<Chip tone="brand"><Trophy size={12} /> {t("your_position")}: #{myRank}</Chip>}>{t("leaderboard")}</SectionTitle>
      <Card>
        {rows.slice(0, 8).map((r, i) => (
          <div key={r.name + i} className={`flex items-center gap-3 px-5 py-3 border-b last:border-0 border-mist/60 dark:border-night-800 ${r.you ? "bg-brand-50/60 dark:bg-brand-950/40" : ""}`}>
            <span className={`w-7 text-center font-extrabold text-sm ${i < 3 ? "text-accent-500" : "text-slate-400"}`}>{i + 1}</span>
            <span className={`flex-1 font-bold text-[14.5px] ${r.you ? "text-brand-700 dark:text-brand-400" : ""}`}>{r.name}{r.you ? " (you)" : ""}</span>
            <span className="tabular-nums text-sm font-bold text-ink-2 dark:text-slate-400">{r.xp.toLocaleString()} XP</span>
          </div>
        ))}
        {myRank > 8 && (
          <div className="flex items-center gap-3 px-5 py-3 bg-brand-50/60 dark:bg-brand-950/40">
            <span className="w-7 text-center font-extrabold text-sm text-slate-400">{myRank}</span>
            <span className="flex-1 font-bold text-[14.5px] text-brand-700 dark:text-brand-400">{s.name} (you)</span>
            <span className="tabular-nums text-sm font-bold text-ink-2 dark:text-slate-400">{s.xp.toLocaleString()} XP</span>
          </div>
        )}
      </Card>
    </div>
  );
}
