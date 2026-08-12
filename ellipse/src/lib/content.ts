import raw from "../content/content.json";

export type LevelId = "A1" | "A2" | "B1" | "B2" | "C1";
export type SkillId = "grammar" | "vocabulary" | "reading" | "listening" | "speaking" | "writing";

export interface QuizQ { q: string; o: string[]; a: number; e: string; d?: string }
export interface GrammarLesson {
  id: string; title: string; lead: string;
  leadTr: { uz: string; ru: string } | null;
  situation: string;
  blocks: { h: string; p: string[]; ex: string[] }[];
  tip: string; examples: string[];
  mistakes: { x: string; v: string }[];
  quiz: QuizQ[];
}
export interface Word { w: string; pos: string; ipa: string; uz: string; ru: string; def: string; ex: string }
export interface VocabUnit { id: string; title: string; words: Word[] }
export interface ReadingLesson { id: string; title: string; text: string; quiz: QuizQ[] }
export interface ListeningLesson { id: string; title: string; script: string; quiz: QuizQ[] }
export interface SpeakingTask { id: string; title: string; prompt: string; seconds: number; tips: string[] }
export interface WritingTask { id: string; title: string; prompt: string; min: number; max: number; hints: string[] }
export interface Level {
  id: LevelId; name: string; tagline: string; weeks: number;
  skills: {
    grammar: GrammarLesson[]; vocabulary: VocabUnit[]; reading: ReadingLesson[];
    listening: ListeningLesson[]; speaking: SpeakingTask[]; writing: WritingTask[];
  };
}
export interface PlacementQ { b: string; q: string; o: string[]; a: number; skill: string }
export interface ScenarioStep { ai: string; hints: string[]; expects: string[] }
export interface Scenario { id: string; title: string; emoji: string; level: string; steps: ScenarioStep[] }

export const CONTENT = raw as unknown as { levels: Level[]; placement: PlacementQ[]; scenarios: Scenario[] };

export const LEVELS: LevelId[] = ["A1", "A2", "B1", "B2", "C1"];
export const SKILLS: SkillId[] = ["grammar", "vocabulary", "reading", "listening", "speaking", "writing"];

export const level = (id: LevelId): Level => CONTENT.levels.find((l) => l.id === id)!;

export function skillItems(lvl: LevelId, skill: SkillId): { id: string; title: string }[] {
  const s = level(lvl).skills;
  switch (skill) {
    case "grammar": return s.grammar;
    case "vocabulary": return s.vocabulary;
    case "reading": return s.reading;
    case "listening": return s.listening;
    case "speaking": return s.speaking;
    case "writing": return s.writing;
  }
}

export const lessonKey = (lvl: LevelId, skill: SkillId, id: string) => `${lvl}.${skill}.${id}`;

export function levelLessonCount(lvl: LevelId): number {
  return SKILLS.reduce((n, s) => n + skillItems(lvl, s).length, 0);
}

export function levelWordCount(lvl: LevelId): number {
  return level(lvl).skills.vocabulary.reduce((n, u) => n + u.words.length, 0);
}

/* Text-to-speech helper (offline, built into the browser) */
let voice: SpeechSynthesisVoice | null = null;
function pickVoice() {
  try {
    const vs = speechSynthesis.getVoices();
    voice = vs.find((v) => /en[-_](GB|US)/i.test(v.lang) && /Google|Samantha|Daniel|Karen/i.test(v.name)) ?? vs.find((v) => /^en/i.test(v.lang)) ?? null;
  } catch { /* no tts */ }
}
if (typeof speechSynthesis !== "undefined") { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }

export function speak(text: string, rate = 0.95) {
  if (typeof speechSynthesis === "undefined") return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; if (voice) u.voice = voice; u.rate = rate;
    speechSynthesis.speak(u);
  } catch { /* ignore */ }
}
export function stopSpeaking() { try { speechSynthesis.cancel(); } catch { /* ignore */ } }
