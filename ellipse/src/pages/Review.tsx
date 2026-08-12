import { useMemo, useState } from "react";
import { X, Volume2 } from "lucide-react";
import { useApp, back, dueWords, gradeWord, wordKey, type WordState } from "../lib/store";
import { level as getLevel, speak, type LevelId, type Word } from "../lib/content";
import { t } from "../lib/i18n";
import { Card, Button, ProgressBar, Ellie, Chip, EmptyState } from "../components/ui";

function findWord(ws: WordState): Word | null {
  const L = getLevel(ws.lvl as LevelId);
  const unit = L.skills.vocabulary.find((u) => u.id === ws.unit);
  return unit?.words.find((w) => w.w === ws.w) ?? null;
}

/* Varied question types: recall card, choose meaning, choose word, spelling */
type Task =
  | { kind: "recall"; ws: WordState; w: Word }
  | { kind: "meaning"; ws: WordState; w: Word; o: string[]; a: number }
  | { kind: "word"; ws: WordState; w: Word; o: string[]; a: number }
  | { kind: "spell"; ws: WordState; w: Word };

export default function ReviewPage() {
  const s = useApp();
  const meaning = (w: Word) => (s.uiLang === "ru" ? w.ru : s.uiLang === "uz" ? w.uz : (w.def || w.uz));

  const tasks = useMemo<Task[]>(() => {
    const due = dueWords(s).slice(0, 20);
    const all = due.map(findWord).filter(Boolean) as Word[];
    return due.flatMap((ws, i) => {
      const w = findWord(ws); if (!w) return [];
      const kind = (["recall", "meaning", "word", "spell"] as const)[i % 4];
      if (kind === "meaning" || kind === "word") {
        const others = all.filter((x) => x.w !== w.w).sort(() => Math.random() - 0.5).slice(0, 3);
        if (others.length < 3) return [{ kind: "recall", ws, w } as Task];
        if (kind === "meaning") {
          const o = [meaning(w), ...others.map(meaning)].sort(() => Math.random() - 0.5);
          return [{ kind, ws, w, o, a: o.indexOf(meaning(w)) } as Task];
        }
        const o = [w.w, ...others.map((x) => x.w)].sort(() => Math.random() - 0.5);
        return [{ kind, ws, w, o, a: o.indexOf(w.w) } as Task];
      }
      return [{ kind, ws, w } as Task];
    });
  }, []);

  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const [spelled, setSpelled] = useState("");
  const [spellChecked, setSpellChecked] = useState<boolean | null>(null);
  const [correct, setCorrect] = useState(0);

  if (!tasks.length) return (
    <div className="pt-6">
      <EmptyState emoji="🎉" title={t("nothing_due")} action={<Button onClick={() => back()}>{t("close")}</Button>} />
    </div>
  );

  if (i >= tasks.length) return (
    <div className="flex flex-col items-center text-center pt-10 animate-pop">
      <Ellie pose="cheer" size={120} />
      <h2 className="text-2xl font-extrabold mt-4">{t("review_done")}</h2>
      <Chip tone="good" className="mt-3">{correct}/{tasks.length} · +{correct * 2} XP</Chip>
      <Button size="lg" className="mt-8 max-w-sm" onClick={() => back()}>{t("continue")}</Button>
    </div>
  );

  const task = tasks[i];
  const w = task.w;
  const key = wordKey(task.ws.lvl as LevelId, task.ws.unit, task.ws.w);
  const advance = (ok: boolean) => {
    gradeWord(key, ok);
    if (ok) setCorrect((c) => c + 1);
    setTimeout(() => { setI(i + 1); setRevealed(false); setPicked(null); setSpelled(""); setSpellChecked(null); }, task.kind === "recall" ? 0 : 900);
  };

  return (
    <div className="animate-rise">
      <header className="flex items-center gap-3 pt-1 pb-4">
        <button onClick={() => back()} className="w-9 h-9 grid place-items-center rounded-xl bg-mist/50 dark:bg-night-800 text-ink-2 dark:text-slate-300"><X size={17} /></button>
        <div className="flex-1">
          <h1 className="font-extrabold text-[17px]">{t("review")}</h1>
        </div>
        <span className="text-xs font-bold text-ink-2 dark:text-slate-400 tabular-nums">{i + 1}/{tasks.length}</span>
      </header>
      <ProgressBar value={(i / tasks.length) * 100} className="mb-5" />

      <Card className="p-7 text-center" key={i}>
        <div className="animate-rise">
          {task.kind === "recall" && (
            <>
              <div className="text-3xl font-extrabold">{w.w}</div>
              <div className="text-sm text-ink-2 dark:text-slate-400 mt-1">{w.ipa}</div>
              <button onClick={() => speak(`${w.w}. ${w.ex}`)} className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-night-800 text-brand-600 dark:text-brand-400 text-sm font-bold"><Volume2 size={15} /> {t("play")}</button>
              {revealed ? (
                <div className="animate-rise mt-5">
                  <div className="text-xl font-extrabold text-brand-600 dark:text-brand-400">{meaning(w)}</div>
                  <div className="text-sm italic text-ink-2 dark:text-slate-400 mt-1.5">“{w.ex}”</div>
                  <div className="flex gap-2.5 mt-6">
                    <Button className="flex-1" onClick={() => advance(true)}>✓ {t("got_it")}</Button>
                    <Button className="flex-1" variant="secondary" onClick={() => advance(false)}>✗ {t("forgot")}</Button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-sm text-ink-2 dark:text-slate-400 mt-4">{t("review_recall")}</p>
                  <Button size="lg" className="mt-4" onClick={() => setRevealed(true)}>{t("show_answer")}</Button>
                </>
              )}
            </>
          )}

          {(task.kind === "meaning" || task.kind === "word") && (
            <>
              <div className="text-sm font-bold text-ink-2 dark:text-slate-400 mb-1">{task.kind === "meaning" ? `“${w.w}” — ?` : meaning(w)}</div>
              {task.kind === "meaning" && <div className="text-xs text-slate-400 mb-4">{w.ipa}</div>}
              {task.kind === "word" && <div className="text-xs text-slate-400 mb-4 italic">“{w.ex.replace(new RegExp(w.w, "ig"), "____")}”</div>}
              <div className="space-y-2.5 text-left">
                {task.o.map((o, j) => {
                  let cls = "border-mist dark:border-night-700 hover:border-brand-500/60";
                  if (picked != null && j === task.a) cls = "border-brand-500 bg-brand-50 dark:bg-brand-950";
                  else if (picked === j) cls = "border-red-400 bg-red-50 dark:bg-red-950/40 animate-shake";
                  else if (picked != null) cls = "border-mist dark:border-night-700 opacity-50";
                  return (
                    <button key={j} disabled={picked != null}
                      onClick={() => { setPicked(j); advance(j === task.a); }}
                      className={`w-full text-left px-4 py-3 rounded-2xl border-[1.5px] font-semibold text-[14.5px] transition-all ${cls}`}>
                      {o}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {task.kind === "spell" && (
            <>
              <div className="text-sm font-bold text-ink-2 dark:text-slate-400">{meaning(w)}</div>
              <button onClick={() => speak(w.w)} className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-night-800 text-brand-600 dark:text-brand-400 text-sm font-bold"><Volume2 size={15} /> {t("play")}</button>
              <input
                value={spelled} onChange={(e) => setSpelled(e.target.value)} disabled={spellChecked != null}
                placeholder="Type the word…" autoCapitalize="none" autoCorrect="off"
                className={`mt-4 w-full max-w-xs mx-auto block text-center px-4 py-3 rounded-2xl border-[1.5px] bg-transparent outline-none font-bold text-lg transition-colors
                  ${spellChecked == null ? "border-mist dark:border-night-700 focus:border-brand-500" : spellChecked ? "border-brand-500 text-brand-600" : "border-red-400 text-red-500 animate-shake"}`}
              />
              {spellChecked === false && <div className="mt-2 text-sm font-bold text-brand-600 dark:text-brand-400">{w.w}</div>}
              <Button size="lg" className="mt-5" disabled={!spelled.trim() || spellChecked != null}
                onClick={() => { const ok = spelled.trim().toLowerCase() === w.w.toLowerCase(); setSpellChecked(ok); advance(ok); }}>
                {t("check")}
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
