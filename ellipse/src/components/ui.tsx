import { useEffect, useRef, useState, type ReactNode } from "react";
import { Volume2 } from "lucide-react";
import { speak } from "../lib/content";
import { t } from "../lib/i18n";

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */
export function Card({ children, className = "", onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      onClick={onClick}
      className={`block w-full text-left rounded-[20px] bg-surface dark:bg-night-900 backdrop-blur-xl border border-mist/70 dark:border-night-700 shadow-soft ${onClick ? "transition-all duration-150 hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Button({ children, onClick, variant = "primary", className = "", disabled, size = "md" }: {
  children: ReactNode; onClick?: () => void; variant?: "primary" | "secondary" | "accent" | "ghost" | "danger";
  className?: string; disabled?: boolean; size?: "md" | "lg" | "sm";
}) {
  const base = "inline-flex items-center justify-center gap-2 font-bold rounded-[14px] transition-all duration-150 active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none";
  const sizes = { sm: "px-3.5 py-2 text-sm", md: "px-5 py-3 text-[15px]", lg: "px-6 py-4 text-base w-full" };
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white shadow-soft",
    secondary: "bg-surface dark:bg-night-800 border border-mist dark:border-night-700 text-ink dark:text-slate-100 hover:border-brand-500/50",
    accent: "bg-accent-500 hover:bg-accent-600 text-white shadow-soft",
    ghost: "text-ink-2 dark:text-slate-400 hover:bg-mist/40 dark:hover:bg-night-800",
    danger: "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 hover:bg-red-100",
  };
  return <button onClick={onClick} disabled={disabled} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>{children}</button>;
}

export function ProgressBar({ value, className = "", tone = "brand" }: { value: number; className?: string; tone?: "brand" | "accent" }) {
  return (
    <div className={`h-2 rounded-full bg-mist/70 dark:bg-night-700 overflow-hidden ${className}`}>
      <div
        className={`h-full rounded-full transition-[width] duration-700 ease-out ${tone === "brand" ? "bg-gradient-to-r from-brand-600 to-brand-400" : "bg-gradient-to-r from-accent-500 to-accent-400"}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export function ProgressRing({ value, size = 96, stroke = 9, label, sub }: { value: number; size?: number; stroke?: number; label?: string; sub?: string }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} className="stroke-mist/70 dark:stroke-night-700" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} strokeLinecap="round"
          className="stroke-brand-500 transition-[stroke-dashoffset] duration-700 ease-out"
          strokeDasharray={c} strokeDashoffset={c - (c * Math.min(100, value)) / 100} />
      </svg>
      <div className="absolute text-center leading-tight">
        <div className="font-extrabold" style={{ fontSize: size / 4.4 }}>{label ?? `${Math.round(value)}%`}</div>
        {sub && <div className="text-[10px] font-semibold text-ink-2 dark:text-slate-400 uppercase tracking-wide">{sub}</div>}
      </div>
    </div>
  );
}

export function Chip({ children, tone = "neutral", className = "" }: { children: ReactNode; tone?: "neutral" | "brand" | "accent" | "good" | "bad"; className?: string }) {
  const tones = {
    neutral: "bg-mist/60 dark:bg-night-800 text-ink-2 dark:text-slate-300",
    brand: "bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400",
    accent: "bg-accent-100 dark:bg-accent-600/20 text-accent-600 dark:text-accent-400",
    good: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400",
    bad: "bg-red-50 dark:bg-red-950/40 text-red-500 dark:text-red-400",
  };
  return <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${tones[tone]} ${className}`}>{children}</span>;
}

export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between mt-7 mb-3 px-0.5">
      <h2 className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-ink-2 dark:text-slate-400">{children}</h2>
      {action}
    </div>
  );
}

export function SpeakButton({ text, className = "", rate }: { text: string; className?: string; rate?: number }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); speak(text, rate); }}
      className={`shrink-0 w-9 h-9 grid place-items-center rounded-xl bg-brand-50 dark:bg-night-800 text-brand-600 dark:text-brand-400 hover:bg-brand-100 dark:hover:bg-night-700 transition-colors ${className}`}
      aria-label="Listen"
    >
      <Volume2 size={17} />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Ellie — the mascot, drawn entirely from ellipses                    */
/* ------------------------------------------------------------------ */
export function Ellie({ pose = "happy", size = 96, className = "" }: { pose?: "happy" | "cheer" | "think" | "wave"; size?: number; className?: string }) {
  const tilt = pose === "think" ? -8 : 0;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className} aria-hidden style={{ transform: `rotate(${tilt}deg)` }}>
      {/* shadow */}
      <ellipse cx="60" cy="112" rx="30" ry="5" className="fill-black/10 dark:fill-black/40" />
      {/* body */}
      <ellipse cx="60" cy="66" rx="40" ry="44" fill="#059669" />
      <ellipse cx="60" cy="70" rx="33" ry="36" fill="#10B981" />
      {/* belly */}
      <ellipse cx="60" cy="80" rx="22" ry="22" fill="#ECFDF5" />
      {/* headphones — Ellie loves listening */}
      <path d="M28 52 Q28 18 60 18 Q92 18 92 52" fill="none" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="27" cy="56" rx="7" ry="10" fill="#F59E0B" />
      <ellipse cx="93" cy="56" rx="7" ry="10" fill="#F59E0B" />
      {/* eyes */}
      {pose === "cheer" ? (
        <>
          <path d="M42 52 Q47 46 52 52" stroke="#07130F" strokeWidth="3.4" fill="none" strokeLinecap="round" />
          <path d="M68 52 Q73 46 78 52" stroke="#07130F" strokeWidth="3.4" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <ellipse cx="47" cy="53" rx="6.5" ry="8" fill="#07130F" />
          <ellipse cx="73" cy="53" rx="6.5" ry="8" fill="#07130F" />
          <ellipse cx="49" cy="50" rx="2.2" ry="2.8" fill="#fff" />
          <ellipse cx="75" cy="50" rx="2.2" ry="2.8" fill="#fff" />
        </>
      )}
      {/* cheeks */}
      <ellipse cx="38" cy="63" rx="4.5" ry="3" fill="#F59E0B" opacity="0.5" />
      <ellipse cx="82" cy="63" rx="4.5" ry="3" fill="#F59E0B" opacity="0.5" />
      {/* mouth */}
      {pose === "cheer"
        ? <ellipse cx="60" cy="68" rx="8" ry="6.5" fill="#07130F" />
        : <path d="M52 66 Q60 74 68 66" stroke="#07130F" strokeWidth="3.2" fill="none" strokeLinecap="round" />}
      {pose === "cheer" && <ellipse cx="60" cy="71" rx="4.5" ry="2.6" fill="#F87171" />}
      {/* arms */}
      {pose === "cheer" ? (
        <>
          <ellipse cx="20" cy="42" rx="7" ry="14" fill="#059669" transform="rotate(28 20 42)" />
          <ellipse cx="100" cy="42" rx="7" ry="14" fill="#059669" transform="rotate(-28 100 42)" />
        </>
      ) : pose === "wave" ? (
        <>
          <ellipse cx="22" cy="70" rx="7" ry="13" fill="#059669" transform="rotate(12 22 70)" />
          <ellipse cx="100" cy="46" rx="7" ry="14" fill="#059669" transform="rotate(-40 100 46)" />
        </>
      ) : (
        <>
          <ellipse cx="24" cy="74" rx="7" ry="13" fill="#059669" transform="rotate(18 24 74)" />
          <ellipse cx="96" cy="74" rx="7" ry="13" fill="#059669" transform="rotate(-18 96 74)" />
        </>
      )}
      {/* feet */}
      <ellipse cx="46" cy="108" rx="9" ry="4.5" fill="#F59E0B" />
      <ellipse cx="74" cy="108" rx="9" ry="4.5" fill="#F59E0B" />
      {/* think bubble */}
      {pose === "think" && (
        <>
          <ellipse cx="97" cy="24" rx="10" ry="8" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="97" y="28" textAnchor="middle" fontSize="10" fontWeight="800" fill="#059669">?</text>
        </>
      )}
      {/* cheer stars */}
      {pose === "cheer" && (
        <>
          <text x="14" y="22" fontSize="12" fill="#F59E0B">✦</text>
          <text x="98" y="16" fontSize="10" fill="#10B981">✦</text>
          <text x="106" y="30" fontSize="8" fill="#F59E0B">✦</text>
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Celebration overlay                                                 */
/* ------------------------------------------------------------------ */
export function Celebration({ title, sub, xp }: { title: string; sub: string; xp?: number }) {
  return (
    <div className="fixed inset-0 z-[90] grid place-items-center pointer-events-none">
      <div className="animate-pop flex flex-col items-center gap-2 bg-surface/95 dark:bg-night-900/95 backdrop-blur rounded-3xl px-10 py-8 shadow-lift border border-mist dark:border-night-700">
        <Ellie pose="cheer" size={110} />
        <div className="text-xl font-extrabold mt-1">{title}</div>
        <div className="text-sm text-ink-2 dark:text-slate-400">{sub}</div>
        {xp != null && <Chip tone="accent" className="mt-1 animate-pop">+{xp} XP</Chip>}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Shared quiz runner                                                  */
/* ------------------------------------------------------------------ */
export interface RunnerQ { q: string; o: string[]; a: number; e?: string }
export function QuizRunner({ questions, onAnswer, onDone, translateExpl }: {
  questions: RunnerQ[];
  onAnswer?: (ok: boolean, idx: number) => void;
  onDone: (score: number) => void;
  translateExpl?: (idx: number) => string | null;
}) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const q = questions[idx];
  if (!q) return null;
  const answered = picked != null;
  const ok = answered && picked === q.a;

  const pick = (i: number) => {
    if (answered) return;
    setPicked(i);
    const good = i === q.a;
    if (good) setScore((s) => s + 1);
    onAnswer?.(good, idx);
  };
  const next = () => {
    if (idx + 1 >= questions.length) { onDone(score); return; }
    setIdx(idx + 1); setPicked(null);
  };
  const extra = answered && translateExpl ? translateExpl(idx) : null;

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <ProgressBar value={(idx / questions.length) * 100} className="flex-1" />
        <span className="text-xs font-bold text-ink-2 dark:text-slate-400 tabular-nums">{idx + 1}/{questions.length}</span>
      </div>
      <div key={idx} className="animate-rise">
        <p className="text-[17px] font-bold leading-relaxed mb-4 whitespace-pre-line">{q.q}</p>
        <div className="space-y-2.5">
          {q.o.map((o, i) => {
            let cls = "border-mist dark:border-night-700 bg-surface dark:bg-night-900 hover:border-brand-500/60";
            if (answered && i === q.a) cls = "border-brand-500 bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400";
            else if (answered && i === picked) cls = "border-red-400 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 animate-shake";
            else if (answered) cls = "border-mist dark:border-night-700 opacity-55";
            return (
              <button key={i} onClick={() => pick(i)}
                className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-2xl border-[1.5px] font-semibold text-[15px] transition-all duration-150 ${cls}`}>
                <span className="shrink-0 w-7 h-7 grid place-items-center rounded-lg bg-mist/50 dark:bg-night-800 text-xs font-extrabold text-ink-2 dark:text-slate-400">
                  {"ABCD"[i]}
                </span>
                {o}
              </button>
            );
          })}
        </div>
        {answered && (
          <div className={`animate-rise mt-4 rounded-2xl px-4 py-3.5 text-sm font-medium ${ok ? "bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400" : "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400"}`}>
            <b>{ok ? t("correct") : t("incorrect")}</b>{q.e ? ` — ${q.e}` : ""}
            {extra && <div className="mt-1.5 italic opacity-85">🌐 {extra}</div>}
          </div>
        )}
        {answered && (
          <Button size="lg" className="mt-4" onClick={next}>
            {idx + 1 >= questions.length ? t("finish") : t("next")}
          </Button>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Misc                                                                */
/* ------------------------------------------------------------------ */
export function EmptyState({ emoji, title, sub, action }: { emoji: string; title: string; sub?: string; action?: ReactNode }) {
  return (
    <Card className="p-10 text-center">
      <div className="text-4xl mb-3">{emoji}</div>
      <div className="font-extrabold text-lg">{title}</div>
      {sub && <div className="text-sm text-ink-2 dark:text-slate-400 mt-1">{sub}</div>}
      {action && <div className="mt-5 flex justify-center">{action}</div>}
    </Card>
  );
}

export function useCountUp(target: number, duration = 800): number {
  const [v, setV] = useState(0);
  const ref = useRef(target);
  useEffect(() => {
    ref.current = target;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return v;
}
