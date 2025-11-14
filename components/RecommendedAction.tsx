import { cn } from "@/lib/utils";
import {
  CalendarDaysIcon,
  PencilSquareIcon,
  Squares2X2Icon,
  SparklesIcon
} from "@heroicons/react/24/outline";

type RecommendedActionProps = {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  icon: "sparkles" | "pen" | "calendar" | "chart";
  accent: string;
};

const iconMap = {
  sparkles: SparklesIcon,
  pen: PencilSquareIcon,
  calendar: CalendarDaysIcon,
  chart: Squares2X2Icon
};

const priorityColor = {
  High: "bg-aero-magenta/15 text-aero-magenta",
  Medium: "bg-aero-amber/15 text-aero-amber",
  Low: "bg-aero-lime/15 text-aero-lime"
};

export function RecommendedAction({
  title,
  description,
  priority,
  icon,
  accent
}: RecommendedActionProps) {
  const Icon = iconMap[icon];

  return (
    <div className="neu-card flex flex-col gap-4 p-6 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <div className={cn("flex items-center gap-3 text-lg font-semibold", accent)}>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5">
            <Icon className="h-6 w-6" />
          </span>
          {title}
        </div>
        <span
          className={cn(
            "rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
            priorityColor[priority]
          )}
        >
          {priority}
        </span>
      </div>
      <p className="text-sm text-white/70">{description}</p>
    </div>
  );
}
