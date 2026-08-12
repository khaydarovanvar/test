import { ChevronRight, Check, MessagesSquare, Sparkles } from "lucide-react";
import { useApp, go, update, levelProgress, isLevelUnlocked, skillProgress } from "../lib/store";
import { LEVELS, SKILLS, level as getLevel, skillItems, lessonKey, levelWordCount, type LevelId, type SkillId } from "../lib/content";
import { t } from "../lib/i18n";
import { Card, ProgressBar, SectionTitle, Chip, ProgressRing } from "../components/ui";

const SKILL_META: Record<SkillId, { emoji: string; est: string }> = {
  grammar: { emoji: "📘", est: "10–15" }, vocabulary: { emoji: "🃏", est: "8–12" },
  reading: { emoji: "📖", est: "10" }, listening: { emoji: "🎧", est: "8" },
  speaking: { emoji: "🎤", est: "5" }, writing: { emoji: "✍️", est: "15" },
};

export default function LearnPage() {
  const s = useApp();
  if (s.route.page === "level") return <LevelDetail lvl={(s.route.params?.lvl as LevelId) ?? s.level} skill={(s.route.params?.skill as SkillId) ?? "grammar"} />;
  return <Roadmap />;
}

function Roadmap() {
  const s = useApp();
  return (
    <div className="animate-rise">
      <div className="pt-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t("your_journey")}</h1>
        <p className="text-ink-2 dark:text-slate-400 text-sm mt-0.5">{s.level} {getLevel(s.level).name}</p>
      </div>

      {/* Level roadmap */}
      <div className="mt-5 space-y-3">
        {LEVELS.map((lvl, i) => {
          const meta = getLevel(lvl);
          const onTrack = isLevelUnlocked(s, lvl);
          const prog = levelProgress(s, lvl);
          const current = lvl === s.level;
          const complete = prog >= 100;
          return (
            <div key={lvl} className="relative">
              {i > 0 && <div className="absolute -top-3 left-9 w-0.5 h-3 bg-mist dark:bg-night-700" />}
              <Card
                onClick={() => go("level", { lvl })}
                className={`p-5 ${current ? "ring-2 ring-brand-500/60" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`shrink-0 w-[52px] h-[52px] grid place-items-center rounded-2xl font-extrabold text-lg
                    ${complete ? "bg-brand-600 text-white" : current ? "bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400" : "bg-mist/60 dark:bg-night-800 text-ink-2 dark:text-slate-300"}`}>
                    {complete ? <Check size={22} /> : lvl}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <b className="text-[15.5px]">{lvl} — {meta.name}</b>
                      {current && <Chip tone="brand">{t("current_level")}</Chip>}
                      {!onTrack && <Chip>{t("recommended_later", { lvl: LEVELS[i - 1] })}</Chip>}
                    </div>
                    <div className="text-[12.5px] text-ink-2 dark:text-slate-400 mt-0.5">“{meta.tagline}”</div>
                    <div className="flex items-center gap-2 mt-2">
                      <ProgressBar value={prog} className="flex-1" />
                      <span className="text-xs font-bold tabular-nums text-ink-2 dark:text-slate-400">{prog}% · ≈{levelWordCount(lvl)} {t("words")}</span>
                    </div>
                  </div>
                  <ChevronRight className="text-slate-300 dark:text-slate-600 shrink-0" size={20} />
                </div>
              </Card>
            </div>
          );
        })}
        {/* C2 teaser */}
        <Card className="p-5 opacity-50">
          <div className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] grid place-items-center rounded-2xl bg-mist/40 dark:bg-night-800 text-slate-400 font-extrabold">C2</div>
            <div><b>C2 — Proficiency</b><div className="text-xs text-ink-2 dark:text-slate-400 mt-0.5">{t("coming_soon")}</div></div>
          </div>
        </Card>
      </div>

      {/* Real English + Ellie */}
      <SectionTitle>{t("real_english")}</SectionTitle>
      <div className="grid sm:grid-cols-2 gap-3">
        <Card className="p-5" onClick={() => go("scenarios")}>
          <div className="flex items-center gap-2 font-extrabold"><MessagesSquare size={17} className="text-brand-600" /> {t("real_english")}</div>
          <div className="text-xs text-ink-2 dark:text-slate-400 mt-1">{t("real_english_sub")} — 🏨 ✈️ 💼 🍽️</div>
        </Card>
        <Card className="p-5" onClick={() => go("coach")}>
          <div className="flex items-center gap-2 font-extrabold"><Sparkles size={17} className="text-accent-500" /> {t("ask_ellie")}</div>
          <div className="text-xs text-ink-2 dark:text-slate-400 mt-1">{t("ellie_sub")}</div>
        </Card>
      </div>
    </div>
  );
}

function LevelDetail({ lvl, skill }: { lvl: LevelId; skill: SkillId }) {
  const s = useApp();
  const meta = getLevel(lvl);
  const prog = levelProgress(s, lvl);

  return (
    <div className="animate-rise">
      <button onClick={() => go("learn")} className="text-sm font-bold text-ink-2 dark:text-slate-400 mt-1">‹ {t("your_journey")}</button>
      <div className="flex items-center justify-between mt-3">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">{lvl} <span className="text-ink-2 dark:text-slate-400 font-bold text-xl">{meta.name}</span></h1>
          <p className="text-sm text-ink-2 dark:text-slate-400 mt-0.5">“{meta.tagline}”</p>
          {lvl !== s.level && (
            <button
              onClick={() => update((st) => { st.level = lvl; })}
              className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-600 text-white text-xs font-extrabold hover:bg-brand-700 transition-colors active:scale-95">
              ⭐ {t("set_my_level")}
            </button>
          )}
        </div>
        <ProgressRing value={prog} size={64} stroke={7} />
      </div>

      {/* Skill tabs */}
      <div className="flex gap-2 mt-5 overflow-x-auto no-scrollbar -mx-4 px-4">
        {SKILLS.map((sk) => {
          const p = skillProgress(s, lvl, sk);
          const on = sk === skill;
          if (!p.total) return null;
          return (
            <button key={sk} onClick={() => go("level", { lvl, skill: sk })}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full font-bold text-[13px] border-[1.5px] transition-colors
                ${on ? "bg-brand-600 border-brand-600 text-white" : "bg-surface dark:bg-night-900 border-mist dark:border-night-700 text-ink-2 dark:text-slate-300"}`}>
              {SKILL_META[sk].emoji} {t(sk)}
              <span className={`text-[10.5px] font-extrabold ${on ? "text-white/70" : "text-slate-400"}`}>{p.done}/{p.total}</span>
            </button>
          );
        })}
      </div>

      {/* Lesson list */}
      <div className="mt-4 space-y-2.5">
        {skillItems(lvl, skill).map((it, i) => {
          const done = s.done[lessonKey(lvl, skill, it.id)];
          const pct = done ? Math.round((done.score / Math.max(1, done.total)) * 100) : 0;
          return (
            <Card key={it.id} className="p-4" onClick={() => go("lesson", { lvl, skill, id: it.id })}>
              <div className="flex items-center gap-3.5">
                <div className={`shrink-0 w-10 h-10 grid place-items-center rounded-xl font-extrabold text-sm
                  ${done ? "bg-brand-600 text-white" : "bg-mist/50 dark:bg-night-800 text-ink-2 dark:text-slate-300"}`}>
                  {done ? <Check size={17} /> : i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <b className="text-[14.5px] leading-snug block truncate">{it.title}</b>
                  <span className="text-xs text-ink-2 dark:text-slate-400">
                    {t(skill)} · ~{SKILL_META[skill].est} {t("min")}{done ? ` · ${pct}% ${t("mastery")}` : ""}
                  </span>
                </div>
                <ChevronRight className="text-slate-300 dark:text-slate-600 shrink-0" size={18} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
