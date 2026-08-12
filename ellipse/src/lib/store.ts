import { useSyncExternalStore } from "react";
import { LEVELS, SKILLS, lessonKey, level as getLevel, levelLessonCount, skillItems, type LevelId, type SkillId } from "./content";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */
export type UiLang = "en" | "ru" | "uz";
export type Theme = "light" | "dark" | "system";
export type WordStatus = 0 | 1 | 2 | 3; // new, learning, review, mastered

export interface WordState { status: WordStatus; due: number; seen: number; lapses: number; lvl: LevelId; unit: string; w: string }
export interface LessonResult { score: number; total: number; ts: number }
export interface PlacementResult { level: LevelId; confidence: number; skills: Record<string, string> }

export interface Route { page: string; params?: Record<string, string> }

export interface AppState {
  onboarded: boolean;
  name: string;
  uiLang: UiLang;
  theme: Theme;
  goal: string | null;
  focus: SkillId[];
  dailyMinutes: number;
  level: LevelId;
  placement: PlacementResult | null;
  xp: number;
  streak: number;
  bestStreak: number;
  lastActive: string;
  days: Record<string, { min: number; xp: number }>;
  done: Record<string, LessonResult>;
  skillStats: Record<string, { answered: number; correct: number }>;
  words: Record<string, WordState>;
  achievements: string[];
  scenariosDone: string[];
  lastLesson: { lvl: LevelId; skill: SkillId; id: string } | null;
  route: Route;
  stack: Route[];
  celebration: { title: string; sub: string; xp?: number } | null;
}

const KEY = "ellipse_v1";

function defaults(): AppState {
  return {
    onboarded: false, name: "", uiLang: "en", theme: "system",
    goal: null, focus: [], dailyMinutes: 20, level: "A1", placement: null,
    xp: 0, streak: 0, bestStreak: 0, lastActive: "", days: {},
    done: {}, skillStats: {}, words: {}, achievements: [], scenariosDone: [],
    lastLesson: null, route: { page: "home" }, stack: [], celebration: null,
  };
}

/* ------------------------------------------------------------------ */
/* Store                                                               */
/* ------------------------------------------------------------------ */
function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaults();
    const d = defaults();
    const s = { ...d, ...JSON.parse(raw) };
    s.route = { page: s.onboarded ? "home" : "onboarding" };
    s.stack = []; s.celebration = null;
    return s;
  } catch { return defaults(); }
}

let state: AppState = load();
const listeners = new Set<() => void>();

function persist() {
  try {
    const { route, stack, celebration, ...rest } = state;
    localStorage.setItem(KEY, JSON.stringify(rest));
  } catch { /* full or blocked */ }
}

export function update(fn: (s: AppState) => void) {
  const next = { ...state };
  fn(next);
  state = next;
  persist();
  listeners.forEach((l) => l());
}

export function getState() { return state; }
export function useApp(): AppState {
  return useSyncExternalStore((l) => { listeners.add(l); return () => listeners.delete(l); }, () => state);
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
export function go(page: string, params?: Record<string, string>) {
  update((s) => { s.stack = [...s.stack, s.route]; s.route = { page, params }; });
  window.scrollTo(0, 0);
}
export function back(fallback = "home") {
  update((s) => {
    const prev = s.stack[s.stack.length - 1];
    s.stack = s.stack.slice(0, -1);
    s.route = prev ?? { page: fallback };
  });
  window.scrollTo(0, 0);
}
export function root(page: string) {
  update((s) => { s.stack = []; s.route = { page }; });
  window.scrollTo(0, 0);
}

/* ------------------------------------------------------------------ */
/* Time / XP / streak                                                  */
/* ------------------------------------------------------------------ */
export const todayStr = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const yesterdayStr = () => todayStr(new Date(Date.now() - 864e5));

function touchDay(s: AppState) {
  const td = todayStr();
  if (s.lastActive !== td) {
    s.streak = s.lastActive === yesterdayStr() ? s.streak + 1 : 1;
    s.bestStreak = Math.max(s.bestStreak, s.streak);
    s.lastActive = td;
  }
  if (!s.days[td]) s.days = { ...s.days, [td]: { min: 0, xp: 0 } };
}

export function addXp(n: number) {
  update((s) => {
    touchDay(s);
    const td = todayStr();
    s.xp += n;
    s.days = { ...s.days, [td]: { ...s.days[td], xp: s.days[td].xp + n } };
  });
  checkAchievements();
}

export function addStudySeconds(sec: number) {
  update((s) => {
    touchDay(s);
    const td = todayStr();
    s.days = { ...s.days, [td]: { ...s.days[td], min: +(s.days[td].min + sec / 60).toFixed(2) } };
  });
}

export function recordAnswer(skill: SkillId, ok: boolean) {
  update((s) => {
    const st = s.skillStats[skill] ?? { answered: 0, correct: 0 };
    s.skillStats = { ...s.skillStats, [skill]: { answered: st.answered + 1, correct: st.correct + (ok ? 1 : 0) } };
  });
  if (ok) addXp(5);
}

export function completeLesson(lvl: LevelId, skill: SkillId, id: string, score: number, total: number) {
  const key = lessonKey(lvl, skill, id);
  const first = !getState().done[key];
  update((s) => {
    const prev = s.done[key];
    if (!prev || score > prev.score) s.done = { ...s.done, [key]: { score, total, ts: Date.now() } };
    s.lastLesson = { lvl, skill, id };
  });
  if (first) addXp(80);
  checkAchievements();
  return first;
}

/* ------------------------------------------------------------------ */
/* Vocabulary / SRS                                                    */
/* ------------------------------------------------------------------ */
const INTERVALS_D = [0, 1, 4, 12]; // by status after grading; mastered reviews every 30d
export const wordKey = (lvl: LevelId, unit: string, w: string) => `${lvl}.${unit}.${w}`;

export function learnWord(lvl: LevelId, unit: string, w: string, known: boolean) {
  update((s) => {
    const k = wordKey(lvl, unit, w);
    const cur = s.words[k];
    if (cur) return;
    const status: WordStatus = known ? 2 : 1;
    s.words = { ...s.words, [k]: { status, due: Date.now() + INTERVALS_D[status] * 864e5, seen: 1, lapses: 0, lvl, unit, w } };
  });
  checkAchievements();
}

export function gradeWord(key: string, ok: boolean) {
  update((s) => {
    const cur = s.words[key]; if (!cur) return;
    let status = cur.status;
    let lapses = cur.lapses;
    if (ok) status = Math.min(3, status + 1) as WordStatus;
    else { status = 1; lapses += 1; }
    const days = status === 3 ? 30 : INTERVALS_D[status];
    s.words = { ...s.words, [key]: { ...cur, status, lapses, seen: cur.seen + 1, due: Date.now() + days * 864e5 } };
  });
  if (ok) addXp(2);
  checkAchievements();
}

export function dueWords(s: AppState = state): WordState[] {
  const now = Date.now();
  return Object.values(s.words).filter((w) => w.due <= now).sort((a, b) => a.due - b.due);
}
export const wordsByStatus = (s: AppState, st: WordStatus) => Object.values(s.words).filter((w) => w.status === st).length;
export const wordsLearned = (s: AppState) => Object.values(s.words).filter((w) => w.status >= 2).length;

/* ------------------------------------------------------------------ */
/* Progress selectors                                                  */
/* ------------------------------------------------------------------ */
export function levelProgress(s: AppState, lvl: LevelId): number {
  const total = levelLessonCount(lvl);
  if (!total) return 0;
  let done = 0;
  for (const sk of SKILLS) for (const it of skillItems(lvl, sk)) if (s.done[lessonKey(lvl, sk, it.id)]) done++;
  return Math.round((done / total) * 100);
}

export function skillProgress(s: AppState, lvl: LevelId, skill: SkillId): { done: number; total: number } {
  const items = skillItems(lvl, skill);
  const done = items.filter((it) => s.done[lessonKey(lvl, skill, it.id)]).length;
  return { done, total: items.length };
}

export function skillScore(s: AppState, skill: SkillId): number | null {
  const st = s.skillStats[skill];
  if (!st || st.answered < 4) return null;
  return Math.round((st.correct / st.answered) * 100);
}

export function masteryScore(s: AppState): number {
  const scores = SKILLS.map((sk) => skillScore(s, sk)).filter((x): x is number => x != null);
  const prog = levelProgress(s, s.level);
  if (!scores.length) return Math.round(prog * 0.6);
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length * 0.7 + prog * 0.3);
}

export function isLevelUnlocked(s: AppState, lvl: LevelId): boolean {
  const idx = LEVELS.indexOf(lvl);
  const cur = LEVELS.indexOf(s.level);
  if (idx <= cur) return true;
  // next level unlocks when current is ≥70% complete
  return idx === cur + 1 && levelProgress(s, s.level) >= 70;
}

export function nextLesson(s: AppState, lvl: LevelId = s.level): { lvl: LevelId; skill: SkillId; id: string; title: string } | null {
  for (const sk of SKILLS) {
    for (const it of skillItems(lvl, sk)) {
      if (!s.done[lessonKey(lvl, sk, it.id)]) return { lvl, skill: sk, id: it.id, title: it.title };
    }
  }
  return null;
}

export function weakestSkills(s: AppState, n = 3): { skill: SkillId; score: number }[] {
  return SKILLS.map((sk) => ({ skill: sk, score: skillScore(s, sk) }))
    .filter((x): x is { skill: SkillId; score: number } => x.score != null)
    .sort((a, b) => a.score - b.score)
    .slice(0, n);
}

export function recommendation(s: AppState): { reason: string; lvl: LevelId; skill: SkillId; id: string; title: string } | null {
  const weak = weakestSkills(s, 1)[0];
  if (weak && weak.score < 75) {
    const items = skillItems(s.level, weak.skill);
    const next = items.find((it) => !s.done[lessonKey(s.level, weak.skill, it.id)]);
    if (next) return { reason: weak.skill, lvl: s.level, skill: weak.skill, id: next.id, title: next.title };
  }
  const nx = nextLesson(s);
  return nx ? { reason: "", ...nx } : null;
}

export function minutesToday(s: AppState): number {
  return Math.round(s.days[todayStr()]?.min ?? 0);
}
export function totalMinutes(s: AppState): number {
  return Math.round(Object.values(s.days).reduce((a, d) => a + d.min, 0));
}
export function weekData(s: AppState): { label: string; min: number; xp: number; today: boolean }[] {
  const out = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 864e5);
    const k = todayStr(d);
    out.push({ label: "MTWTFSS"[(d.getDay() + 6) % 7], min: Math.round(s.days[k]?.min ?? 0), xp: s.days[k]?.xp ?? 0, today: i === 0 });
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Achievements                                                        */
/* ------------------------------------------------------------------ */
export interface AchievementDef { id: string; emoji: string; check: (s: AppState) => boolean }
export const ACHIEVEMENTS: AchievementDef[] = [
  { id: "first_lesson", emoji: "🎓", check: (s) => Object.keys(s.done).length >= 1 },
  { id: "streak_3", emoji: "🔥", check: (s) => s.bestStreak >= 3 },
  { id: "streak_7", emoji: "🔥", check: (s) => s.bestStreak >= 7 },
  { id: "streak_30", emoji: "🏅", check: (s) => s.bestStreak >= 30 },
  { id: "words_50", emoji: "📚", check: (s) => wordsLearned(s) >= 50 },
  { id: "words_100", emoji: "📚", check: (s) => wordsLearned(s) >= 100 },
  { id: "words_500", emoji: "📖", check: (s) => wordsLearned(s) >= 500 },
  { id: "xp_1000", emoji: "🚀", check: (s) => s.xp >= 1000 },
  { id: "xp_5000", emoji: "🌟", check: (s) => s.xp >= 5000 },
  { id: "lessons_10", emoji: "🎯", check: (s) => Object.keys(s.done).length >= 10 },
  { id: "lessons_50", emoji: "🏆", check: (s) => Object.keys(s.done).length >= 50 },
  { id: "listening_5", emoji: "🎧", check: (s) => Object.keys(s.done).filter((k) => k.includes(".listening.")).length >= 5 },
  { id: "speaking_first", emoji: "🗣️", check: (s) => Object.keys(s.done).some((k) => k.includes(".speaking.")) },
  { id: "writing_first", emoji: "✍️", check: (s) => Object.keys(s.done).some((k) => k.includes(".writing.")) },
  { id: "scenario_first", emoji: "💬", check: (s) => s.scenariosDone.length >= 1 },
  { id: "level_a1", emoji: "🥇", check: (s) => levelProgress(s, "A1") >= 100 },
  { id: "placement_done", emoji: "🧭", check: (s) => s.placement != null },
];

export function checkAchievements() {
  const s = getState();
  const fresh = ACHIEVEMENTS.filter((a) => !s.achievements.includes(a.id) && a.check(s));
  if (!fresh.length) return;
  update((st) => { st.achievements = [...st.achievements, ...fresh.map((a) => a.id)]; });
  return fresh;
}

export function celebrate(title: string, sub: string, xp?: number) {
  update((s) => { s.celebration = { title, sub, xp }; });
  setTimeout(() => update((s) => { s.celebration = null; }), 2600);
}

/* ------------------------------------------------------------------ */
/* Leaderboard (local mock until backend)                              */
/* ------------------------------------------------------------------ */
export interface LeaderRow { name: string; xp: number; you?: boolean }
const PEERS = [
  ["Malika", 6120], ["Timur", 5480], ["Aisha", 4930], ["Javlon", 4410], ["Dana", 3890],
  ["Sardor", 3350], ["Nilufar", 2760], ["Bek", 2210], ["Kamila", 1680], ["Olim", 990],
] as const;
export function leaderboard(s: AppState): LeaderRow[] {
  const rows: LeaderRow[] = PEERS.map(([name, xp]) => ({ name, xp }));
  rows.push({ name: s.name || "You", xp: s.xp, you: true });
  return rows.sort((a, b) => b.xp - a.xp);
}

/* ------------------------------------------------------------------ */
/* Ellie AI — integration layer                                        */
/* ------------------------------------------------------------------ */
/** Single integration point for a real model later:
 *  swap the body for `await fetch(YOUR_ENDPOINT, {...})` and return its text. */
export async function ellieReply(prompt: string, s: AppState): Promise<string> {
  const p = prompt.toLowerCase();
  const weak = weakestSkills(s, 2);
  if (/plan|study|schedule/.test(p)) {
    return `Here's a plan for your level (${s.level}), ${s.dailyMinutes} min/day:\n\n• 1 lesson from ${weak[0]?.skill ?? "grammar"} (10 min)\n• Review due vocabulary (5 min)\n• One quick practice (5 min)\n\nConsistency beats intensity — small daily sessions grow your streak and your English together.`;
  }
  if (/weak|improve|focus/.test(p)) {
    if (!weak.length) return "I don't have enough data yet. Complete a few lessons and quizzes, and I'll spot your weak areas precisely.";
    return `Right now your weakest areas are:\n\n${weak.map((w) => `• ${w.skill} — ${w.score}%`).join("\n")}\n\nOpen Practice → choose one of these skills, and I'll be here after to explain anything you missed.`;
  }
  if (/present perfect|past simple/.test(p)) {
    return "Quick rule: **Past simple** = finished time (yesterday, in 2020, last week). **Present perfect** = result now or unfinished time (today, ever, just, yet).\n\n• I *saw* that film last week. (finished time)\n• I *have seen* that film. (experience — time doesn't matter)\n\nAsk me about any other grammar point!";
  }
  if (/conditional/.test(p)) {
    return "The big three:\n\n• **First** — real future: If it rains, I'll stay home.\n• **Second** — unreal present: If I had time, I would travel.\n• **Third** — unreal past: If I had known, I would have called.\n\nWant a mini-quiz on these? Open Practice → Grammar → Conditionals.";
  }
  if (/word|vocab/.test(p)) {
    return `You've learned ${wordsLearned(s)} words so far, and ${dueWords(s).length} are waiting for review. The fastest way to grow vocabulary is the Review queue — 5 minutes right now would lock in what you already studied.`;
  }
  return "I can explain grammar, build you a study plan, point at your weak areas, or set up practice. Try:\n\n• \"Explain present perfect vs past simple\"\n• \"Build me a study plan\"\n• \"What are my weak areas?\"\n\n(Live conversational AI plugs in here when connected — the app is ready for it.)";
}
