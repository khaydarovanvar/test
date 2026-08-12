/**
 * ElevenLabs audio pre-rendering — 50% male / 50% female voices.
 *
 * The app already speaks everything with browser TTS using the same
 * deterministic gender split (see src/lib/content.ts → genderFor).
 * This script renders the exact same manifest through ElevenLabs so you
 * can ship studio-quality MP3s later.
 *
 * Usage:
 *   ELEVENLABS_API_KEY=sk_... node scripts/generate-audio.mjs [--limit 20] [--dry]
 *
 * Voices (change to any from your ElevenLabs account):
 *   female: "Rachel" 21m00Tcm4TlvDq8ikWAM
 *   male:   "Adam"   pNInz6obpgDQGcFmaJgB
 *
 * Output: public/audio/<sha1(text)>.mp3 + public/audio/manifest.json
 * Costs: ~1 credit/char on the free tier — run with --limit first.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const content = JSON.parse(readFileSync(join(root, "src/content/content.json"), "utf8"));

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_F = process.env.ELEVEN_VOICE_F || "21m00Tcm4TlvDq8ikWAM"; // Rachel
const VOICE_M = process.env.ELEVEN_VOICE_M || "pNInz6obpgDQGcFmaJgB"; // Adam
const args = process.argv.slice(2);
const LIMIT = args.includes("--limit") ? parseInt(args[args.indexOf("--limit") + 1], 10) : Infinity;
const DRY = args.includes("--dry");

/* same hash split as the app */
const genderFor = (text) => {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) | 0;
  return (h & 1) === 0 ? "f" : "m";
};
const idFor = (text) => createHash("sha1").update(text).digest("hex").slice(0, 20);

/* ---- collect every speakable string ---- */
const items = new Map(); // text -> {gender, kind}
const add = (text, kind, gender) => {
  const ttext = String(text || "").trim();
  if (ttext.length < 2) return;
  if (!items.has(ttext)) items.set(ttext, { gender: gender ?? genderFor(ttext), kind });
};
for (const lvl of content.levels) {
  const S = lvl.skills;
  S.grammar.forEach((l) => {
    l.examples.forEach((x) => add(x, "example"));
    l.blocks.forEach((b) => b.ex.forEach((x) => add(x, "example")));
    if (l.compare) [l.compare.a, l.compare.b].forEach((s) => s.ex.forEach((x) => add(x, "example")));
  });
  S.vocabulary.forEach((u) => u.words.forEach((w) => add(`${w.w}. ${w.ex}`, "word")));
  S.reading.forEach((l) => add(l.text, "passage"));
  // listening narrators alternate by lesson number, matching the app
  S.listening.forEach((l) => add(l.script, "script", (parseInt(l.id.replace(/\D/g, ""), 10) || 0) % 2 === 0 ? "f" : "m"));
}
content.scenarios.forEach((sc) => sc.steps.forEach((st) => add(st.ai, "scenario")));

const list = [...items.entries()].slice(0, LIMIT);
const chars = list.reduce((n, [t]) => n + t.length, 0);
const byGender = { m: list.filter(([, v]) => v.gender === "m").length, f: list.filter(([, v]) => v.gender === "f").length };
console.log(`clips: ${list.length} (${byGender.f} female / ${byGender.m} male) · ~${chars.toLocaleString()} chars`);

if (DRY) process.exit(0);
if (!API_KEY) { console.error("Set ELEVENLABS_API_KEY (get one at elevenlabs.io → Profile → API keys). Use --dry to preview."); process.exit(1); }

const outDir = join(root, "public/audio");
mkdirSync(outDir, { recursive: true });
const manifest = existsSync(join(outDir, "manifest.json")) ? JSON.parse(readFileSync(join(outDir, "manifest.json"), "utf8")) : {};

let done = 0;
for (const [text, meta] of list) {
  const id = idFor(text);
  const file = join(outDir, `${id}.mp3`);
  if (existsSync(file)) { manifest[id] = { gender: meta.gender, kind: meta.kind }; continue; }
  const voice = meta.gender === "m" ? VOICE_M : VOICE_F;
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_64`, {
    method: "POST",
    headers: { "xi-api-key": API_KEY, "content-type": "application/json" },
    body: JSON.stringify({ text, model_id: "eleven_multilingual_v2", voice_settings: { stability: 0.5, similarity_boost: 0.7 } }),
  });
  if (!res.ok) { console.error(`FAIL ${id}: ${res.status} ${await res.text().catch(() => "")}`); continue; }
  writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  manifest[id] = { gender: meta.gender, kind: meta.kind };
  done++;
  if (done % 10 === 0) console.log(`${done}/${list.length}…`);
}
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 1));
console.log(`done: ${done} new clips → public/audio/`);
