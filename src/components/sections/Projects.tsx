"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import TiltCard from "@/components/ui/TiltCard";

const tagColorMap: Record<string, { bg: string; text: string }> = {
  green:  { bg: "rgba(34,197,94,0.12)",  text: "#16a34a" },
  purple: { bg: "rgba(139,92,246,0.12)", text: "#7c3aed" },
  gold:   { bg: "rgba(201,151,74,0.18)", text: "#92600a" },
};

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#FAF7F4" }} className="py-20 lg:py-28">
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
            Case Studies
          </span>
          <h2 className="font-heading text-3xl font-bold md:text-4xl" style={{ color: "#1C1410" }}>
            Products I&apos;ve shipped
          </h2>
          <p className="mt-3 text-sm" style={{ color: "#8B6A52" }}>
            Hover cards to explore · click to read the full case study
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const colors = tagColorMap[project.tagColor ?? "gold"];
            const hasLink = !!project.link;
            const isExternal = project.type === "external";

            const cardContent = (
              <TiltCard
                className="group flex h-full flex-col rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: "#FFFFFF",
                  border: "2px solid #F0E8DF",
                  boxShadow: "0 2px 12px rgba(28,20,16,0.06)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <div className="flex flex-1 flex-col p-6">
                  {/* Tags */}
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                        style={{ background: colors.bg, color: colors.text }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading mb-2 text-base font-bold md:text-lg" style={{ color: "#1C1410" }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed" style={{ color: "#4A3728" }}>
                    {project.description}
                  </p>

                  {/* Client */}
                  {project.client && (
                    <p className="mt-3 text-xs font-medium" style={{ color: "#8B6A52" }}>
                      {project.client}
                    </p>
                  )}
                </div>

                {/* Footer CTA */}
                {hasLink && (
                  <div
                    className="flex items-center justify-between border-t px-6 py-3 text-xs font-semibold transition-colors group-hover:bg-primary-50"
                    style={{ borderColor: "#F0E8DF", color: "#C2553A" }}
                  >
                    <span>{isExternal ? "Live Project" : "View Case Study"}</span>
                    {isExternal ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                  </div>
                )}
              </TiltCard>
            );

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex"
                onMouseEnter={(e) => {
                  const card = e.currentTarget.querySelector(".group") as HTMLElement;
                  if (card) { card.style.borderColor = "#C2553A"; card.style.boxShadow = "0 8px 30px rgba(194,85,58,0.18)"; }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget.querySelector(".group") as HTMLElement;
                  if (card) { card.style.borderColor = "#F0E8DF"; card.style.boxShadow = "0 2px 12px rgba(28,20,16,0.06)"; }
                }}
              >
                {hasLink ? (
                  isExternal ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-1">
                      {cardContent}
                    </a>
                  ) : (
                    <Link href={project.link} className="flex flex-1">
                      {cardContent}
                    </Link>
                  )
                ) : (
                  <div className="flex flex-1">{cardContent}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
