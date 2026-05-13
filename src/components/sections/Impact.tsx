"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, Bot, Zap } from "lucide-react";

/* ── Panel 1: Gauge (half-circle arc) ─────────────────────────── */
function GaugeArc({
  pct,
  value,
  prefix = "",
  suffix = "",
  label,
  color,
  radius = 72,
  active,
  size = "lg",
}: {
  pct: number;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  color: string;
  radius?: number;
  active: boolean;
  size?: "lg" | "sm";
}) {
  const circ = Math.PI * radius; // half-circle circumference
  const dash = (pct / 100) * circ;
  const cx = radius + 12;
  const cy = radius + 12;
  const svgSize = (radius + 12) * 2;
  const strokeW = size === "lg" ? 10 : 7;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: svgSize, height: svgSize / 2 + 16 }}>
        <svg
          width={svgSize}
          height={svgSize / 2 + 16}
          style={{ overflow: "visible" }}
        >
          {/* Track */}
          <path
            d={`M ${12} ${cy} A ${radius} ${radius} 0 0 1 ${cx * 2 - 12} ${cy}`}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={strokeW}
            strokeLinecap="round"
          />
          {/* Fill */}
          <path
            d={`M ${12} ${cy} A ${radius} ${radius} 0 0 1 ${cx * 2 - 12} ${cy}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeW}
            strokeLinecap="round"
            strokeDasharray={`${circ} ${circ}`}
            strokeDashoffset={active ? circ - dash : circ}
            style={{ transition: "stroke-dashoffset 1.4s ease-out 0.2s" }}
          />
        </svg>
        {/* Center number */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
          style={{ bottom: -2 }}
        >
          <div
            className={`font-heading font-bold leading-none ${size === "lg" ? "text-3xl" : "text-xl"}`}
            style={{ color }}
          >
            {active ? (
              <>
                {prefix}
                <CountUp end={value} duration={1.6} decimals={0} />
                {suffix}
              </>
            ) : (
              `${prefix}${value}${suffix}`
            )}
          </div>
        </div>
      </div>
      <p className="text-center text-xs font-medium" style={{ color: "rgba(250,247,244,0.6)" }}>
        {label}
      </p>
    </div>
  );
}

/* ── Panel 2: Concentric rings ─────────────────────────────────── */
function ConcentricRings({
  metrics,
  color,
  active,
}: {
  metrics: { value: number; pct: number; prefix?: string; suffix?: string; label: string }[];
  color: string;
  active: boolean;
}) {
  const radii = [90, 62, 38];
  const strokeW = 8;
  const cx = 110;
  const cy = 110;
  const svgSize = 220;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: svgSize, height: svgSize }}>
        <svg width={svgSize} height={svgSize}>
          {metrics.map((m, i) => {
            const r = radii[i];
            const circ = 2 * Math.PI * r;
            const dash = (m.pct / 100) * circ;
            return (
              <g key={i}>
                {/* Track */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth={strokeW}
                />
                {/* Fill — starts at top (-90°) */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke={color}
                  strokeWidth={strokeW}
                  strokeLinecap="round"
                  strokeDasharray={`${circ} ${circ}`}
                  strokeDashoffset={active ? circ - dash : circ}
                  transform={`rotate(-90 ${cx} ${cy})`}
                  style={{
                    transition: `stroke-dashoffset 1.3s ease-out ${0.15 + i * 0.15}s`,
                    opacity: 1 - i * 0.1,
                  }}
                />
              </g>
            );
          })}
        </svg>
        {/* Center label stack */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <span
                className={`font-heading font-bold leading-none ${i === 0 ? "text-lg" : "text-sm"}`}
                style={{ color: i === 0 ? color : `${color}99` }}
              >
                {active ? (
                  <>
                    {m.prefix}
                    <CountUp end={m.value} duration={1.5 - i * 0.1} decimals={0} />
                    {m.suffix}
                  </>
                ) : (
                  `${m.prefix ?? ""}${m.value}${m.suffix ?? ""}`
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Legend */}
      <div className="flex flex-col gap-1.5 w-full">
        {metrics.map((m, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: color, opacity: 1 - i * 0.25 }}
            />
            <span className="text-xs" style={{ color: "rgba(250,247,244,0.55)" }}>
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Panel 3: Lollipop chart ───────────────────────────────────── */
function LollipopChart({
  metrics,
  color,
  active,
}: {
  metrics: { value: number; pct: number; prefix?: string; suffix?: string; label: string }[];
  color: string;
  active: boolean;
}) {
  return (
    <div className="flex flex-col gap-6 w-full">
      {metrics.map((m, i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <span className="text-xs font-medium" style={{ color: "rgba(250,247,244,0.6)" }}>
            {m.label}
          </span>
          <div className="relative flex items-center" style={{ height: 36 }}>
            {/* Track line */}
            <div
              className="absolute left-0 h-0.5 w-full rounded-full"
              style={{ background: "rgba(255,255,255,0.07)" }}
            />
            {/* Animated fill line */}
            <div
              className="absolute left-0 h-0.5 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${color}44, ${color})`,
                width: active ? `${m.pct}%` : "0%",
                transition: `width 1.1s ease-out ${0.1 + i * 0.18}s`,
              }}
            />
            {/* Lollipop circle */}
            <div
              className="absolute flex items-center justify-center rounded-full font-heading text-xs font-bold shadow-lg"
              style={{
                left: active ? `calc(${m.pct}% - 22px)` : "0%",
                width: 44,
                height: 44,
                background: color,
                color: "#FAF7F4",
                transition: `left 1.1s ease-out ${0.1 + i * 0.18}s`,
                zIndex: 2,
                fontSize: "0.65rem",
              }}
            >
              {m.prefix}{m.value}{m.suffix}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Group panel wrapper ───────────────────────────────────────── */
const GROUPS = [
  {
    icon: TrendingUp,
    title: "Revenue & Growth",
    color: "#C9974A",
    elevated: false,
    chart: "gauge" as const,
    metrics: [
      { value: 5, pct: 100, prefix: "$", suffix: "M+", label: "Revenue Generated" },
      { value: 27, pct: 27, prefix: "", suffix: "%", label: "TAM Expansion" },
    ],
  },
  {
    icon: Bot,
    title: "Efficiency & Automation",
    color: "#E8956D",
    elevated: true,
    chart: "rings" as const,
    metrics: [
      { value: 90, pct: 90, prefix: "", suffix: "%", label: "Documentation Time Saved" },
      { value: 50, pct: 50, prefix: "~", suffix: "%", label: "Payroll Discrepancies Reduced" },
      { value: 33, pct: 33, prefix: "", suffix: "%", label: "Examiner Logic Automated" },
    ],
  },
  {
    icon: Zap,
    title: "Delivery & Quality",
    color: "#C2553A",
    elevated: false,
    chart: "lollipop" as const,
    metrics: [
      { value: 53, pct: 53, prefix: "", suffix: "%", label: "Monthly Incidents Reduced" },
      { value: 24, pct: 24, prefix: "+", suffix: "%", label: "Sprint Velocity Improvement" },
      { value: 19, pct: 19, prefix: "", suffix: "%", label: "L2 Escalations Reduced" },
    ],
  },
];

function GroupPanel({ group, index }: { group: (typeof GROUPS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, margin: "-60px" });
  const Icon = group.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.14 }}
      className="flex flex-col rounded-2xl p-6 transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `3px solid ${group.color}`,
        marginTop: group.elevated ? 0 : 24,
        marginBottom: group.elevated ? 24 : 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `rgba(${group.color === "#C9974A" ? "201,151,74" : group.color === "#E8956D" ? "232,149,109" : "194,85,58"},0.08)`;
        e.currentTarget.style.borderColor = `${group.color}55`;
        e.currentTarget.style.boxShadow = `0 0 40px ${group.color}18`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Header */}
      <div className="mb-6 flex items-center gap-2">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ background: `${group.color}22` }}
        >
          <Icon size={15} style={{ color: group.color }} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: group.color }}>
          {group.title}
        </span>
      </div>

      {/* Chart */}
      <div className="flex flex-1 items-center justify-center">
        {group.chart === "gauge" && (
          <div className="flex flex-col items-center gap-6 w-full">
            <GaugeArc
              pct={100}
              value={5}
              prefix="$"
              suffix="M+"
              label="Revenue Generated"
              color={group.color}
              radius={72}
              active={active}
              size="lg"
            />
            <GaugeArc
              pct={27}
              value={27}
              suffix="%"
              label="TAM Expansion"
              color={group.color}
              radius={50}
              active={active}
              size="sm"
            />
          </div>
        )}
        {group.chart === "rings" && (
          <ConcentricRings metrics={group.metrics} color={group.color} active={active} />
        )}
        {group.chart === "lollipop" && (
          <LollipopChart metrics={group.metrics} color={group.color} active={active} />
        )}
      </div>
    </motion.div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */
export default function Impact() {
  return (
    <section
      id="impact"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "#1C1410" }}
    >
      {/* Dot-grid background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(250,247,244,0.045)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span
            className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "rgba(194,85,58,0.2)", color: "#E8956D" }}
          >
            Impact
          </span>
          <h2 className="font-heading text-3xl font-bold md:text-4xl" style={{ color: "#FAF7F4" }}>
            Numbers that matter
          </h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(250,247,244,0.55)" }}>
            Measured outcomes across 14 years of product work
          </p>
        </motion.div>

        {/* 3-panel grid */}
        <div className="grid gap-4 lg:grid-cols-3">
          {GROUPS.map((group, i) => (
            <GroupPanel key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
