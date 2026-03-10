"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const tagColorClasses: Record<string, string> = {
  green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  purple: "bg-violet-50 text-violet-700 border-violet-200",
  gold: "bg-amber-50 text-amber-700 border-amber-200",
};

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const featuredProject = PROJECTS.find((p) => p.title === "HR Performance Calibration Tool");
  const otherProjects = PROJECTS.filter((p) => p.title !== "HR Performance Calibration Tool");

  return (
    <section id="projects" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects & Clients"
          subtitle="From government infrastructure to SaaS platforms — enterprise solutions with real-world impact."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Featured AI Project */}
          {featuredProject && (
            <motion.div variants={fadeInUp} className="mb-8">
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl border-2 border-primary-200 bg-gradient-to-r from-primary-50 to-violet-50 p-8 transition-all hover:border-primary-400 hover:shadow-lg">
                  <div className="absolute top-4 right-4 rounded bg-primary-100 px-2.5 py-1 text-[10px] font-bold tracking-widest text-primary-700 uppercase">
                    Featured Project
                  </div>
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {featuredProject.tags.map((tag, i) => (
                          <span
                            key={tag}
                            className={`rounded border px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                              i === 0 ? tagColorClasses.green : i === 1 ? tagColorClasses.purple : tagColorClasses.gold
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-gray-900 lg:text-2xl">
                        {featuredProject.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{featuredProject.description}</p>
                      <span className="mt-4 inline-flex items-center gap-2 font-semibold text-primary-600 transition-all group-hover:gap-3">
                        View Live Project <ExternalLink size={16} />
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <span className="text-5xl">🤖</span>
                      <span className="mt-2 text-xs tracking-wide text-gray-400 uppercase">
                        Deployed on Vercel
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          )}

          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded border px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                          tagColorClasses[project.tagColor || "green"]
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                    {project.description}
                  </p>
                  {project.client && (
                    <p className="mt-3 text-xs font-semibold text-primary-600">
                      📍 {project.client}
                    </p>
                  )}
                  {project.link && project.type === "case-study" && (
                    <Link
                      href={project.link}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-all hover:gap-2.5"
                    >
                      Read Case Study <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
