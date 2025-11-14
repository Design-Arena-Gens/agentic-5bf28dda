"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

type ProgressChartProps = {
  data: Array<{ name: string; applications: number; interviews: number }>;
};

export function ProgressChart({ data }: ProgressChartProps) {
  return (
    <div className="neu-card relative overflow-hidden p-6 sm:p-8">
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-aero-neon/10 blur-3xl" />
      <div className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-aero-magenta/10 blur-3xl" />

      <div className="relative z-10 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-2xl font-semibold text-white">My Progress</h3>
          <p className="text-sm text-white/60">
            Weekly cadence of applications and interview traction.
          </p>
        </div>
        <div className="flex gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
          <span className="flex items-center gap-2">
            <span className="h-2 w-8 rounded-full bg-aero-neon" />
            Applications
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-8 rounded-full bg-aero-magenta" />
            Interviews
          </span>
        </div>
      </div>

      <div className="relative z-10 h-64 w-full">
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="applications" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5BD8FF" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#5BD8FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="interviews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF5BF1" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#FF5BF1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="8 8" />
            <XAxis
              dataKey="name"
              stroke="rgba(255,255,255,0.45)"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="rgba(255,255,255,0.45)"
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
            />
            <Tooltip
              contentStyle={{
                background: "rgba(10,10,10,0.92)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                fontSize: "0.85rem",
                backdropFilter: "blur(12px)"
              }}
            />
            <Area
              type="monotone"
              dataKey="applications"
              stroke="#5BD8FF"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#applications)"
            />
            <Area
              type="monotone"
              dataKey="interviews"
              stroke="#FF5BF1"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#interviews)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
