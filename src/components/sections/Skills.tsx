"use client";

import { motion } from "framer-motion";
import {
  ClipboardList, Zap, Search, Wrench, Bot, Globe,
} from "lucide-react";
import { SKILLS } from "@/lib/constants";

const skillIconMap: Record<string, React.ReactNode> = {
  ClipboardList: <ClipboardList size={15} />,
  Zap: <Zap size={15} />,
  Search: <Search size={15} />,
  Wrench: <Wrench size={15} />,
  Bot: <Bot size={15} />,
  Globe: <Globe size={15} />,
};

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#F0E8DF" }} className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span
            className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "#FAF7F4", color: "#C2553A" }}
          >
            Skills & Expertise
          </span>
          <h2 className="font-heading text-3xl font-bold md:text-4xl" style={{ color: "#1C1410" }}>
            Tools of the Trade
          </h2>
        </motion.div>

        {/* 3×2 skill grid — all categories at once */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl p-5"
              style={{ background: "#FAF7F4" }}
            >
              {/* Category header */}
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="flex-shrink-0 rounded-lg p-1.5"
                  style={{ background: "#C2553A", color: "#FAF7F4" }}
                >
                  {skillIconMap[skill.icon]}
                </span>
                <h3 className="font-heading text-sm font-bold" style={{ color: "#1C1410" }}>
                  {skill.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-default"
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
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
