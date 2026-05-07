"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock, Sparkles } from "lucide-react";
import { AI_PROJECTS } from "@/lib/constants";

export default function AIShowcase() {
  return (
    <section
      id="ai"
      style={{ background: "#1C1410" }}
      className="py-20 lg:py-28"
    >
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
            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "rgba(201,151,74,0.15)", color: "#C9974A" }}
          >
            <Sparkles size={12} />
            AI Projects
          </span>
          <h2 className="font-heading text-3xl font-bold md:text-4xl" style={{ color: "#FAF7F4" }}>
            Building with AI
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(250,247,244,0.55)" }}>
            Personal experiments and prototypes demonstrating hands-on AI product thinking —
            not just strategy, but actual builds.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {AI_PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glow-pulse group flex flex-col rounded-2xl p-6 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(194,85,58,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(194,85,58,0.08)";
                e.currentTarget.style.borderColor = "#C2553A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(194,85,58,0.25)";
              }}
            >
              {/* Status badge */}
              <div className="mb-4 flex items-center justify-between">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
                  style={
                    project.status === "live"
                      ? { background: "rgba(34,197,94,0.15)", color: "#4ade80" }
                      : { background: "rgba(201,151,74,0.15)", color: "#C9974A" }
                  }
                >
                  {project.status === "live" ? (
                    <><span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />Live</>
                  ) : (
                    <><Clock size={10} />In Progress</>
                  )}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading mb-2 text-lg font-bold" style={{ color: "#FAF7F4" }}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="flex-1 mb-4 text-sm leading-relaxed" style={{ color: "rgba(250,247,244,0.65)" }}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{ background: "rgba(201,151,74,0.15)", color: "#C9974A" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 self-start rounded-lg px-4 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ background: "#C2553A", color: "#FAF7F4" }}
                >
                  Live Demo
                  <ExternalLink size={12} />
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-1.5 self-start rounded-lg px-4 py-2 text-xs font-semibold"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(250,247,244,0.4)" }}
                >
                  <Clock size={12} />
                  Coming Soon
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
