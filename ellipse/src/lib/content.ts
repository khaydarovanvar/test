import raw from "../content/content.json";

export type LevelId = "A1" | "A2" | "B1" | "B2" | "C1";
export type SkillId = "grammar" | "vocabulary" | "reading" | "listening" | "speaking" | "writing";

export interface QuizQ { q: string; o: string[]; a: number; e: string; d?: string }
export interface LangPair { uz: string; ru: string }
export interface GrammarLesson {
  id: string; title: string; lead: string;
  leadTr: LangPair | null;
  situation: string;
  timeline: { art: string[]; note: string } | null;
  compare: { a: { h: string; ex: string[] }; b: { h: string; ex: string[] } } | null;
  blocks: { h: string; p: string[]; ex: string[] }[];
  tip: string; examples: string[];
  mistakes: { x: string; v: string }[];
  quiz: QuizQ[];
  tr?: {
    situation: LangPair | null;
    tip: LangPair | null;
    blocks: { h: LangPair | null; p: (LangPair | null)[] }[];
    quiz: (LangPair | null)[];
  } | null;
}
export interface Word { w: string; pos: string; ipa: string; uz: string; ru: string; def: string; ex: string; syn?: string; ant?: string }
export interface VocabUnit { id: string; title: string; words: Word[] }
export interface ReadingLesson { id: string; title: string; text: string; quiz: QuizQ[]; quizTr?: (LangPair | null)[] | null }
export interface ListeningLesson { id: string; title: string; script: string; quiz: QuizQ[]; quizTr?: (LangPair | null)[] | null }
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

/* -------------------------------------------------------------------------
 * Audio — 50% male / 50% female voices.
 * Today: browser TTS picks a male or female English voice per item, split
 * deterministically so half the content speaks with each voice.
 * Later: scripts/generate-audio.mjs pre-renders the same manifest through
 * ElevenLabs (same gender split); drop the MP3s in and they take priority.
 * ------------------------------------------------------------------------- */
export type VoiceGender = "m" | "f";
const FEMALE_RE = /female|samantha|victoria|karen|zira|susan|hazel|serena|kate|allison|ava|joanna|jenny|aria|libby|sonia|moira|tessa|fiona|google uk english female|google us english/i;
const MALE_RE = /(?<!fe)male|daniel|david|alex|fred|george|guy|ryan|thomas|oliver|james|arthur|william|christopher|eric|brian|google uk english male/i;

let voiceF: SpeechSynthesisVoice | null = null;
let voiceM: SpeechSynthesisVoice | null = null;
function pickVoices() {
  try {
    const en = speechSynthesis.getVoices().filter((v) => /^en[-_]?(US|GB)?/i.test(v.lang));
    voiceF = en.find((v) => FEMALE_RE.test(v.name)) ?? en[0] ?? null;
    voiceM = en.find((v) => MALE_RE.test(v.name) && !FEMALE_RE.test(v.name)) ?? en.find((v) => v !== voiceF) ?? voiceF;
  } catch { /* no tts */ }
}
if (typeof speechSynthesis !== "undefined") { pickVoices(); speechSynthesis.onvoiceschanged = pickVoices; }

/** Deterministic 50/50 split: the same text always gets the same voice. */
export function genderFor(text: string): VoiceGender {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) | 0;
  return (h & 1) === 0 ? "f" : "m";
}

export function speak(text: string, rate = 0.95, gender?: VoiceGender, onEnd?: () => void) {
  if (typeof speechSynthesis === "undefined") { onEnd?.(); return; }
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const g = gender ?? genderFor(text);
    const v = g === "m" ? voiceM : voiceF;
    u.lang = "en-US"; if (v) u.voice = v; u.rate = rate;
    if (onEnd) u.onend = onEnd;
    speechSynthesis.speak(u);
  } catch { onEnd?.(); }
}
export function stopSpeaking() { try { speechSynthesis.cancel(); } catch { /* ignore */ } }
