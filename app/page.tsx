import { MetricCard } from "@/components/MetricCard";
import { ProgressChart } from "@/components/ProgressChart";
import { RecommendedAction } from "@/components/RecommendedAction";
import { metrics, progressData, recommendedActions } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          Job seeker cockpit
        </span>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Welcome back, <span className="text-aero-neon">Taylor</span>!
        </h1>
        <p className="max-w-2xl text-base text-white/60">
          Here’s a pulse-check on your momentum this week. The command center
          surfaces the most important signals to help you land the next offer faster.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <ProgressChart data={progressData} />
        <div className="neu-card flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">Career Momentum</h3>
              <p className="text-sm text-white/60">
                Snapshot of your active search funnels this week.
              </p>
            </div>
            <div className="grid gap-2 text-right text-xs text-white/50">
              <span>
                Applications: <strong className="text-white">25</strong>
              </span>
              <span>
                Interviews: <strong className="text-white">6</strong>
              </span>
              <span>
                Offers: <strong className="text-white">1</strong>
              </span>
            </div>
          </div>
          <div className="grid gap-4 text-sm text-white/70">
            <p>
              Your outreach has increased by{" "}
              <span className="text-aero-amber font-semibold">18%</span> compared
              to last week. Keep nurturing high-signal companies that align with your
              target role archetype.
            </p>
            <div className="grid gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-xs uppercase tracking-[0.2em] text-white/60">
              <span className="flex items-center justify-between">
                <span>Pipeline Confidence</span>
                <span className="text-aero-neon text-sm font-semibold">72%</span>
              </span>
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-aero-neon to-aero-magenta" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-white">Recommended Actions</h2>
            <p className="text-sm text-white/60">
              Tactical moves curated from your current pipeline and target roles.
            </p>
          </div>
          <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:border-white/20 hover:text-white">
            View planner
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {recommendedActions.map((action) => (
            <RecommendedAction key={action.title} {...action} />
          ))}
        </div>
      </section>
    </div>
  );
}
