import { useEffect, useRef, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { useApp, getState, ellieReply, back } from "../lib/store";
import { t } from "../lib/i18n";
import { Ellie, Card } from "../components/ui";

interface Msg { who: "you" | "ellie"; text: string }

const TOPICS = [
  { emoji: "💬", label: "conversation", prompt: "Let's practice conversation." },
  { emoji: "📚", label: "grammar", prompt: "Explain present perfect vs past simple." },
  { emoji: "🧠", label: "vocabulary", prompt: "How is my vocabulary going?" },
  { emoji: "🎧", label: "listening", prompt: "What are my weak areas?" },
  { emoji: "✍️", label: "writing", prompt: "Build me a study plan." },
  { emoji: "🗣", label: "speaking", prompt: "Give me a speaking prompt." },
];

export default function CoachPage() {
  const s = useApp();
  const [msgs, setMsgs] = useState<Msg[]>([{ who: "ellie", text: t("ellie_hello") }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

  const send = async (text: string) => {
    const q = text.trim(); if (!q || typing) return;
    setInput("");
    setMsgs((m) => [...m, { who: "you", text: q }]);
    setTyping(true);
    const reply = await ellieReply(q, getState());
    await new Promise((r) => setTimeout(r, 500));
    setTyping(false);
    setMsgs((m) => [...m, { who: "ellie", text: reply }]);
  };

  return (
    <div className="animate-rise flex flex-col" style={{ minHeight: "calc(100dvh - 140px)" }}>
      <header className="flex items-center gap-3 pt-2 pb-4">
        <button onClick={() => back()} className="text-sm font-bold text-ink-2 dark:text-slate-400">‹ {t("back")}</button>
        <div className="flex items-center gap-2.5">
          <Ellie size={42} />
          <div>
            <h1 className="font-extrabold text-[17px] leading-tight flex items-center gap-1.5">Ellie AI <Sparkles size={14} className="text-accent-500" /></h1>
            <p className="text-xs text-ink-2 dark:text-slate-400">{t("ellie_sub")}</p>
          </div>
        </div>
      </header>

      {msgs.length <= 1 && (
        <div className="grid grid-cols-3 gap-2 mb-4">
          {TOPICS.map((tp) => (
            <Card key={tp.label} className="p-3 text-center" onClick={() => send(tp.prompt)}>
              <div className="text-xl">{tp.emoji}</div>
              <div className="text-[11px] font-bold mt-1">{t(tp.label)}</div>
            </Card>
          ))}
        </div>
      )}

      <div className="flex-1 space-y-3 pb-4">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.who === "you" ? "justify-end" : "justify-start"} animate-rise`}>
            {m.who === "ellie" && <Ellie size={30} className="mr-2 mt-1 shrink-0" />}
            <div className={`max-w-[82%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed whitespace-pre-wrap font-medium
              ${m.who === "you" ? "bg-brand-600 text-white rounded-br-md" : "bg-surface dark:bg-night-900 border border-mist dark:border-night-700 rounded-bl-md shadow-soft"}`}>
              {m.text.split(/\*\*(.+?)\*\*/g).map((part, j) => (j % 2 ? <b key={j}>{part}</b> : part))}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex items-center gap-2">
            <Ellie size={30} pose="think" />
            <div className="bg-surface dark:bg-night-900 border border-mist dark:border-night-700 rounded-2xl px-4 py-3 flex gap-1">
              {[0, 1, 2].map((i) => <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-glow" style={{ animationDelay: `${i * 200}ms` }} />)}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="sticky bottom-20 lg:bottom-4">
        <div className="flex items-center gap-2 bg-surface dark:bg-night-900 border border-mist dark:border-night-700 rounded-full pl-5 pr-1.5 py-1.5 shadow-lift">
          <input
            value={input} onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder={t("ellie_ph")}
            className="flex-1 bg-transparent outline-none text-[14.5px] font-medium"
          />
          <button onClick={() => send(input)} disabled={!input.trim()}
            className="w-10 h-10 grid place-items-center rounded-full bg-brand-600 text-white disabled:opacity-40 transition-all active:scale-90">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
