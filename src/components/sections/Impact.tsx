"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { IMPACT_CARDS } from "@/lib/constants";

function MetricCard({ card, index }: { card: (typeof IMPACT_CARDS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const numericRaw = card.number.replace(/[^0-9.]/g, "");
  const numeric = parseFloat(numericRaw) || 0;
  const prefix = card.number.startsWith("$") ? "$" : card.number.startsWith("+") ? "+" : card.number.startsWith("~") ? "~" : "";
  const suffix = card.number.includes("M+") ? "M+" : card.number.includes("%") ? "%" : card.number.includes("K+") ? "K+" : card.number.includes("+") && !card.number.startsWith("+") ? "+" : "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group rounded-2xl p-6 transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(194,85,58,0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(194,85,58,0.12)";
        e.currentTarget.style.borderColor = "rgba(194,85,58,0.5)";
        e.currentTarget.style.boxShadow = "0 0 30px rgba(194,85,58,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        e.currentTarget.style.borderColor = "rgba(194,85,58,0.2)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="font-heading mb-2 text-4xl font-bold leading-none md:text-5xl"
        style={{ color: "#E8956D" }}
      >
        {inView && numeric > 0 ? (
          <>{prefix}<CountUp end={numeric} duration={1.8} decimals={numericRaw.includes(".") ? 1 : 0} />{suffix}</>
        ) : (
          <span>{card.number}</span>
        )}
      </div>
      <p className="mb-2 font-semibold text-sm" style={{ color: "#FAF7F4" }}>
        {card.metric}
      </p>
      <p className="text-xs leading-relaxed" style={{ color: "rgba(250,247,244,0.55)" }}>
        {card.context}
      </p>
    </motion.div>
  );
}

export default function Impact() {
  return (
    <section id="impact" style={{ background: "#1C1410" }} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_CARDS.map((card, i) => (
            <MetricCard key={card.metric} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
