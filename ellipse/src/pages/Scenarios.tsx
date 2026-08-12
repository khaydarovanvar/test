import { useEffect, useRef, useState } from "react";
import { Send, Check, X } from "lucide-react";
import { useApp, go, back, update, addXp, celebrate } from "../lib/store";
import { CONTENT, speak, type Scenario } from "../lib/content";
import { t } from "../lib/i18n";
import { Card, Chip, Ellie, Button, ProgressBar, SpeakButton } from "../components/ui";

export default function ScenariosPage() {
  const s = useApp();
  if (s.route.page === "scenario") {
    const sc = CONTENT.scenarios.find((x) => x.id === s.route.params?.id);
    if (sc) return <ScenarioPlayer sc={sc} />;
  }
  return (
    <div className="animate-rise">
      <button onClick={() => back()} className="text-sm font-bold text-ink-2 dark:text-slate-400 mt-1">‹ {t("back")}</button>
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2">{t("real_english")}</h1>
      <p className="text-ink-2 dark:text-slate-400 text-sm mt-0.5">{t("real_english_sub")}</p>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        {CONTENT.scenarios.map((sc) => {
          const done = s.scenariosDone.includes(sc.id);
          return (
            <Card key={sc.id} className="p-5" onClick={() => go("scenario", { id: sc.id })}>
              <div className="flex items-start justify-between">
                <div className="text-3xl">{sc.emoji}</div>
                <div className="flex gap-1.5">
                  <Chip tone="brand">{sc.level}</Chip>
                  {done && <Chip tone="good"><Check size={11} /></Chip>}
                </div>
              </div>
              <div className="font-extrabold mt-3 text-[15px]">{sc.title}</div>
              <div className="text-xs text-ink-2 dark:text-slate-400 mt-0.5">{sc.steps.length} {t("conversation").toLowerCase()} · +40 XP</div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

interface Turn { who: "ai" | "you"; text: string; good?: boolean }

function ScenarioPlayer({ sc }: { sc: Scenario }) {
  const s = useApp();
  const [step, setStep] = useState(0);
  const [turns, setTurns] = useState<Turn[]>([{ who: "ai", text: sc.steps[0].ai }]);
  const [input, setInput] = useState("");
  const [finished, setFinished] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { speak(sc.steps[0].ai); return () => { try { speechSynthesis.cancel(); } catch { /* */ } }; }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [turns]);

  const send = () => {
    const text = input.trim(); if (!text || finished) return;
    setInput("");
    const cur = sc.steps[step];
    const good = cur.expects.some((e) => text.toLowerCase().includes(e));
    setTurns((tt) => [...tt, { who: "you", text, good }]);
    const nextIdx = step + 1;
    setTimeout(() => {
      if (nextIdx < sc.steps.length) {
        setStep(nextIdx);
        setTurns((tt) => [...tt, { who: "ai", text: sc.steps[nextIdx].ai }]);
        speak(sc.steps[nextIdx].ai);
      } else {
        setFinished(true);
        const first = !s.scenariosDone.includes(sc.id);
        update((st) => { if (!st.scenariosDone.includes(sc.id)) st.scenariosDone = [...st.scenariosDone, sc.id]; });
        if (first) addXp(40);
        celebrate(t("scenario_done"), sc.title, first ? 40 : undefined);
      }
    }, 600);
  };

  const cur = sc.steps[Math.min(step, sc.steps.length - 1)];

  return (
    <div className="animate-rise flex flex-col" style={{ minHeight: "calc(100dvh - 120px)" }}>
      <header className="flex items-center gap-3 pt-1 pb-3">
        <button onClick={() => back()} className="w-9 h-9 grid place-items-center rounded-xl bg-mist/50 dark:bg-night-800"><X size={17} /></button>
        <div className="flex-1 min-w-0">
          <h1 className="font-extrabold text-[16px] truncate">{sc.emoji} {sc.title}</h1>
          <ProgressBar value={(step / sc.steps.length) * 100} className="mt-1.5" />
        </div>
      </header>

      <div className="flex-1 space-y-3 py-3">
        {turns.map((m, i) => (
          <div key={i} className={`flex ${m.who === "you" ? "justify-end" : "justify-start"} animate-rise`}>
            {m.who === "ai" && <Ellie size={30} className="mr-2 mt-1 shrink-0" />}
            <div className={`max-w-[82%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed font-medium flex items-start gap-2
              ${m.who === "you" ? "bg-brand-600 text-white rounded-br-md" : "bg-surface dark:bg-night-900 border border-mist dark:border-night-700 rounded-bl-md shadow-soft"}`}>
              <span className="flex-1">{m.text}</span>
              {m.who === "ai" && <SpeakButton text={m.text} className="!w-7 !h-7 -mr-1" />}
              {m.who === "you" && m.good != null && <span className="mt-0.5">{m.good ? "✓" : ""}</span>}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {finished ? (
        <div className="text-center py-6 animate-pop">
          <Ellie pose="cheer" size={100} className="mx-auto" />
          <h2 className="text-xl font-extrabold mt-3">🎉 {t("scenario_done")}</h2>
          <Button size="lg" className="mt-5 max-w-sm mx-auto" onClick={() => back()}>{t("continue")}</Button>
        </div>
      ) : (
        <div className="sticky bottom-4">
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {cur.hints.map((h, i) => (
              <button key={i} onClick={() => setInput(h)} className="text-[11.5px] font-bold px-3 py-1.5 rounded-full bg-brand-50 dark:bg-night-800 text-brand-700 dark:text-brand-400 border border-brand-100 dark:border-night-700">
                💡 {h}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-surface dark:bg-night-900 border border-mist dark:border-night-700 rounded-full pl-5 pr-1.5 py-1.5 shadow-lift">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder={t("say_or_type")} className="flex-1 bg-transparent outline-none text-[14.5px] font-medium" />
            <button onClick={send} disabled={!input.trim()}
              className="w-10 h-10 grid place-items-center rounded-full bg-brand-600 text-white disabled:opacity-40 transition-all active:scale-90">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
