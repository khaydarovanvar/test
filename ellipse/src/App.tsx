import { useEffect } from "react";
import { Home, BookOpen, Dumbbell, TrendingUp, User, Sparkles } from "lucide-react";
import { useApp, root, addStudySeconds, type AppState } from "./lib/store";
import { t } from "./lib/i18n";
import { Celebration, Ellie } from "./components/ui";
import HomePage from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import LearnPage from "./pages/Learn";
import LessonPage from "./pages/Lesson";
import PracticePage from "./pages/Practice";
import ReviewPage from "./pages/Review";
import PlacementPage from "./pages/Placement";
import ProgressPage from "./pages/Progress";
import ProfilePage from "./pages/Profile";
import CoachPage from "./pages/Coach";
import ScenariosPage from "./pages/Scenarios";

const TABS = [
  { id: "home", icon: Home, label: "nav_home" },
  { id: "learn", icon: BookOpen, label: "nav_learn" },
  { id: "practice", icon: Dumbbell, label: "nav_practice" },
  { id: "progress", icon: TrendingUp, label: "nav_progress" },
  { id: "profile", icon: User, label: "nav_profile" },
];

const LEARNING_PAGES = new Set(["lesson", "practice-session", "review-session", "placement-run", "scenario", "coach"]);

function applyTheme(s: AppState) {
  const dark = s.theme === "dark" || (s.theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
}

export default function App() {
  const s = useApp();
  const page = s.route.page;

  useEffect(() => { applyTheme(s); }, [s.theme]);
  useEffect(() => {
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const fn = () => applyTheme(s);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, [s.theme]);

  // study-time heartbeat while on learning surfaces
  useEffect(() => {
    if (!LEARNING_PAGES.has(page)) return;
    const id = setInterval(() => { if (document.visibilityState === "visible") addStudySeconds(15); }, 15000);
    return () => clearInterval(id);
  }, [page]);

  if (!s.onboarded) return <><Onboarding />{s.celebration && <Celebration {...s.celebration} />}</>;

  const view = (() => {
    switch (page) {
      case "home": return <HomePage />;
      case "learn": case "level": return <LearnPage />;
      case "lesson": return <LessonPage />;
      case "practice": case "practice-session": return <PracticePage />;
      case "review-session": return <ReviewPage />;
      case "placement-run": return <PlacementPage />;
      case "progress": return <ProgressPage />;
      case "profile": return <ProfilePage />;
      case "coach": return <CoachPage />;
      case "scenarios": case "scenario": return <ScenariosPage />;
      default: return <HomePage />;
    }
  })();

  const activeTab = page === "level" || page === "lesson" ? "learn"
    : page === "practice-session" || page === "review-session" ? "practice"
    : page === "scenario" || page === "scenarios" || page === "coach" ? "learn"
    : TABS.some((x) => x.id === page) ? page : "home";

  const immersive = ["lesson", "practice-session", "review-session", "placement-run", "scenario"].includes(page);

  return (
    <div className="min-h-full lg:flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-60 xl:w-64 shrink-0 border-r border-mist/70 dark:border-night-800 bg-surface dark:bg-night-900 sticky top-0 h-screen px-4 py-6">
        <button onClick={() => root("home")} className="flex items-center gap-2.5 px-2 mb-8">
          <Ellie size={40} />
          <div className="text-left leading-tight">
            <div className="font-extrabold tracking-tight text-[17px]">ELLIPSE</div>
            <div className="text-[10px] font-bold tracking-[0.28em] text-brand-600">ENGLISH</div>
          </div>
        </button>
        <nav className="space-y-1">
          {TABS.map(({ id, icon: Icon, label }) => (
            <button key={id} onClick={() => root(id)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors ${activeTab === id ? "bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400" : "text-ink-2 dark:text-slate-400 hover:bg-mist/40 dark:hover:bg-night-800"}`}>
              <Icon size={19} strokeWidth={2.4} /> {t(label)}
            </button>
          ))}
        </nav>
        <div className="mt-auto">
          <button onClick={() => root("coach")}
            className="w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white font-bold text-sm shadow-soft hover:shadow-lift transition-all">
            <Sparkles size={18} /> {t("ask_ellie")}
          </button>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex-1 min-w-0">
        <main className={`mx-auto w-full max-w-2xl lg:max-w-3xl px-4 sm:px-6 pt-4 ${immersive ? "pb-8" : "pb-28 lg:pb-10"}`}>
          {view}
        </main>
      </div>

      {/* Mobile bottom nav */}
      {!immersive && (
        <nav className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-surface/95 dark:bg-night-900/95 backdrop-blur border-t border-mist/70 dark:border-night-800 px-2 pb-[max(6px,env(safe-area-inset-bottom))] pt-1.5">
          <div className="max-w-2xl mx-auto flex">
            {TABS.map(({ id, icon: Icon, label }) => (
              <button key={id} onClick={() => root(id)}
                className={`flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-xl text-[10px] font-bold transition-colors ${activeTab === id ? "text-brand-600 dark:text-brand-400" : "text-slate-400 dark:text-slate-500"}`}>
                <Icon size={21} strokeWidth={activeTab === id ? 2.6 : 2} />
                {t(label)}
              </button>
            ))}
          </div>
        </nav>
      )}

      {s.celebration && <Celebration {...s.celebration} />}
    </div>
  );
}
