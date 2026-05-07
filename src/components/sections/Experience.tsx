"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { EXPERIENCE_ROLES } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" style={{ background: "#FAF7F4" }} className="py-20 lg:py-28">
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
            style={{ background: "#F0E8DF", color: "#C2553A" }}
          >
            Experience
          </span>
          <h2 className="font-heading text-3xl font-bold md:text-4xl" style={{ color: "#1C1410" }}>
            14 years of building products
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 h-full w-0.5 md:left-8"
            style={{ background: "linear-gradient(to bottom, #C2553A, #F0E8DF)" }}
          />

          <div className="space-y-10">
            {EXPERIENCE_ROLES.map((role, i) => (
              <motion.div
                key={`${role.company}-${role.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-6 md:gap-10"
              >
                {/* Node */}
                <div className="relative flex-shrink-0">
                  <div
                    className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold md:h-16 md:w-16 md:text-sm"
                    style={
                      i === 0
                        ? { background: "#C2553A", color: "#FAF7F4", boxShadow: "0 0 0 4px #F0E8DF, 0 0 0 6px #C2553A" }
                        : { background: "#F0E8DF", color: "#C2553A", border: "2px solid #C2553A" }
                    }
                  >
                    <span className="hidden md:block">{String(i + 1).padStart(2, "0")}</span>
                    <span className="md:hidden" style={{ width: 8, height: 8, borderRadius: "50%", background: i === 0 ? "#FAF7F4" : "#C2553A", display: "block" }} />
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl p-6 md:p-8"
                  style={{
                    background: i === 0 ? "#FFF5F2" : "#FFFFFF",
                    border: i === 0 ? "2px solid #C2553A" : "2px solid #F0E8DF",
                  }}
                >
                  {/* Top row */}
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-heading text-lg font-bold md:text-xl" style={{ color: "#1C1410" }}>
                          {role.role}
                        </h3>
                        {i === 0 && (
                          <span
                            className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                            style={{ background: "#C9974A", color: "#FAF7F4" }}
                          >
                            Most Recent
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 font-semibold" style={{ color: "#C2553A" }}>
                        {role.company}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#8B6A52" }}>
                        {role.companyDetail}
                      </p>
                    </div>
                    <span
                      className="rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap"
                      style={{ background: "#F0E8DF", color: "#4A3728" }}
                    >
                      {role.duration}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {role.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#4A3728" }}>
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: "#C2553A" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
