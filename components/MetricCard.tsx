import { cn } from "@/lib/utils";

type MetricCardProps = {
  label: string;
  value: number;
  suffix?: string;
  accent: string;
};

export function MetricCard({ label, value, suffix, accent }: MetricCardProps) {
  return (
    <div className="neu-card flex h-full flex-col justify-between gap-6 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
        {label}
      </span>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-semibold text-white">
          {value}
          {suffix}
        </span>
        <div
          className={cn(
            "h-1.5 flex-1 rounded-full bg-gradient-to-r opacity-80",
            accent
          )}
        />
      </div>
    </div>
  );
}
