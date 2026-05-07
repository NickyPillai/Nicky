"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardList, Zap, Search, Wrench, Bot, Globe,
  Target, Settings, Users,
} from "lucide-react";
import { SKILLS, ABOUT_HIGHLIGHTS } from "@/lib/constants";

const skillIconMap: Record<string, React.ReactNode> = {
  ClipboardList: <ClipboardList size={18} />,
  Zap: <Zap size={18} />,
  Search: <Search size={18} />,
  Wrench: <Wrench size={18} />,
  Bot: <Bot size={18} />,
  Globe: <Globe size={18} />,
};

const highlightIconMap: Record<string, React.ReactNode> = {
  Target: <Target size={18} />,
  Settings: <Settings size={18} />,
  Bot: <Bot size={18} />,
  Globe: <Globe size={18} />,
  Users: <Users size={18} />,
};

export default function Skills() {
  const [active, setActive] = useState(0);
  const current = SKILLS[active];

  return (
    <section id="skills" style={{ background: "#F0E8DF" }} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span
            className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "#FAF7F4", color: "#C2553A" }}
          >
            Skills & Expertise
          </span>
          <h2 className="font-heading text-3xl font-bold md:text-4xl" style={{ color: "#1C1410" }}>
            What I Bring & Tools of the Trade
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left: What I Bring */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3
              className="font-heading mb-5 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#C2553A" }}
            >
              What I Bring
            </h3>
            <div className="space-y-3">
              {ABOUT_HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 rounded-xl p-4"
                  style={{ background: "#FAF7F4" }}
                >
                  <span
                    className="mt-0.5 flex-shrink-0 rounded-lg p-1.5"
                    style={{ background: "#C2553A", color: "#FAF7F4" }}
                  >
                    {highlightIconMap[h.icon]}
                  </span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#1C1410" }}>{h.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "#4A3728" }}>{h.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3
              className="font-heading mb-5 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#C2553A" }}
            >
              Tools of the Trade
            </h3>

            {/* Tab row */}
            <div className="mb-4 flex flex-wrap gap-2">
              {SKILLS.map((skill, i) => (
                <button
                  key={skill.category}
                  onClick={() => setActive(i)}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all"
                  style={
                    active === i
                      ? { background: "#C2553A", color: "#FAF7F4", boxShadow: "0 2px 10px rgba(194,85,58,0.35)" }
                      : { background: "#FAF7F4", color: "#4A3728" }
                  }
                >
                  <span>{skillIconMap[skill.icon]}</span>
                  {skill.category}
                </button>
              ))}
            </div>

            {/* Badge grid */}
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              className="rounded-2xl p-6"
              style={{ background: "#FAF7F4" }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="rounded-lg p-2"
                  style={{ background: "#C2553A", color: "#FAF7F4" }}
                >
                  {skillIconMap[current.icon]}
                </span>
                <h4 className="font-heading text-sm font-bold" style={{ color: "#1C1410" }}>
                  {current.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {current.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.18, delay: i * 0.04 }}
                    className="rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-default"
                    style={{ background: "#F0E8DF", color: "#4A3728" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#C2553A";
                      e.currentTarget.style.color = "#FAF7F4";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#F0E8DF";
                      e.currentTarget.style.color = "#4A3728";
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              <p className="mt-4 text-xs" style={{ color: "#8B6A52" }}>
                {current.items.length} skills · {SKILLS.reduce((a, s) => a + s.items.length, 0)} total across all categories
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
