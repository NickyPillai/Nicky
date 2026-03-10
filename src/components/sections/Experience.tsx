"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Code, Rocket, TrendingUp, Award, Calendar, MapPin, Building2 } from "lucide-react";
import { EXPERIENCE_ROLES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const careerMilestones = [
  {
    year: "2011",
    role: "Programmer Analyst",
    company: "Cognizant",
    location: "India",
    icon: Code,
    color: "from-gray-400 to-gray-500",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-300",
    metric: "Enterprise Delivery",
    description: "Software development across enterprise client projects",
  },
  {
    year: "2014",
    role: "Software Developer",
    company: "Dubai Technologies",
    location: "Dubai, UAE",
    icon: Code,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    metric: "100% On-Time",
    description: "Full-stack development with perfect release adherence",
  },
  {
    year: "2016",
    role: "Product Owner",
    company: "Dubai Technologies",
    location: "Dubai, UAE",
    icon: Rocket,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300",
    metric: "10+ Enterprises",
    description: "Architected B2B AI platform · Led 9 cross-functional teams",
  },
  {
    year: "2020",
    role: "Product Manager",
    company: "Dubai Technologies",
    location: "Dubai, UAE",
    icon: TrendingUp,
    color: "from-primary-400 to-primary-600",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-300",
    metric: "$5M Revenue",
    description: "AI co-pilot for RTA · SaaS transformation · RFP leadership",
  },
  {
    year: "2022",
    role: "Product Manager",
    company: "Yomly",
    location: "Dubai, UAE",
    icon: Award,
    color: "from-primary-500 to-primary-700",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-400",
    metric: "40K+ Users",
    description: "40% TAM expansion · AI automation · HRMS SaaS at scale",
  },
];

const keyStats = [
  { label: "Years in Tech", value: "14+", icon: Calendar },
  { label: "In Product", value: "5+", icon: Briefcase },
  { label: "Enterprise Clients", value: "10+", icon: Building2 },
  { label: "Based in", value: "Dubai", icon: MapPin },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Professional Experience"
          subtitle="14 years from developer to strategic product leader — building, shipping, and scaling products that matter."
        />

        {/* Career Infographic */}
        <motion.div
          ref={infoRef}
          initial="hidden"
          animate={infoInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          {/* Quick Stats Bar */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {keyStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="rounded-lg bg-primary-50 p-2">
                  <stat.icon size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-primary-600">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Career Journey Visual */}
          <motion.div variants={fadeInUp} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
            <h3 className="font-heading mb-6 text-center text-lg font-bold text-gray-900">
              Career Journey
            </h3>

            {/* Horizontal timeline for desktop */}
            <div className="hidden lg:block">
              {/* Progress bar */}
              <div className="relative mx-auto mb-8 h-2 max-w-4xl rounded-full bg-gray-100">
                <div className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-gray-400 via-purple-500 to-primary-600" />
                {/* Dot markers */}
                {careerMilestones.map((m, i) => (
                  <div
                    key={m.year}
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{ left: `${(i / (careerMilestones.length - 1)) * 100}%` }}
                  >
                    <div className={`h-5 w-5 -ml-2.5 rounded-full border-[3px] border-white bg-gradient-to-br ${m.color} shadow-md`} />
                  </div>
                ))}
              </div>

              {/* Cards */}
              <div className="grid grid-cols-5 gap-4">
                {careerMilestones.map((m) => (
                  <div
                    key={m.year}
                    className={`group rounded-xl border ${m.borderColor} ${m.bgColor} p-4 transition-all hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <div className={`rounded-lg bg-gradient-to-br ${m.color} p-1.5`}>
                        <m.icon size={14} className="text-white" />
                      </div>
                      <span className="text-xs font-bold text-gray-400">{m.year}</span>
                    </div>
                    <p className="font-heading text-sm font-bold text-gray-900 leading-tight">{m.role}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{m.company}</p>
                    <div className="mt-2 rounded-md bg-white/80 px-2 py-1">
                      <p className="text-xs font-bold text-primary-600">{m.metric}</p>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical timeline for mobile/tablet */}
            <div className="lg:hidden">
              <div className="relative space-y-4 pl-8">
                <div className="absolute top-0 bottom-0 left-3 w-0.5 rounded-full bg-gradient-to-b from-gray-400 via-purple-500 to-primary-600" />
                {careerMilestones.map((m) => (
                  <div key={m.year} className="relative">
                    <div className={`absolute -left-[22px] top-4 h-4 w-4 rounded-full border-[3px] border-white bg-gradient-to-br ${m.color} shadow-md`} />
                    <div className={`rounded-xl border ${m.borderColor} ${m.bgColor} p-4`}>
                      <div className="flex items-center gap-2">
                        <div className={`rounded-lg bg-gradient-to-br ${m.color} p-1.5`}>
                          <m.icon size={14} className="text-white" />
                        </div>
                        <span className="text-xs font-bold text-gray-400">{m.year}</span>
                        <span className="text-xs text-gray-400">·</span>
                        <span className="text-xs text-gray-500">{m.company}</span>
                      </div>
                      <p className="mt-2 font-heading text-sm font-bold text-gray-900">{m.role}</p>
                      <p className="mt-1 text-xs text-gray-500">{m.description}</p>
                      <div className="mt-2 inline-block rounded-md bg-white/80 px-2 py-1">
                        <p className="text-xs font-bold text-primary-600">{m.metric}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill progression bar */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { label: "Engineering Foundation", years: "2011–2016", width: "w-full", color: "bg-blue-500" },
                { label: "Product Ownership", years: "2016–2020", width: "w-full", color: "bg-purple-500" },
                { label: "Product Management", years: "2020–Present", width: "w-full", color: "bg-primary-600" },
              ].map((phase) => (
                <div key={phase.label} className="rounded-lg bg-gray-50 p-3">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-700">{phase.label}</span>
                    <span className="text-xs text-gray-400">{phase.years}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className={`h-full rounded-full ${phase.color} ${phase.width}`} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Detailed Timeline */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative pl-8"
        >
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-primary-500 to-primary-100" />

          {EXPERIENCE_ROLES.map((exp) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={fadeInUp}
              className="relative mb-12 pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-1 h-3 w-3 rounded-full border-[3px] border-primary-500 bg-white shadow-sm" />

              <div className="rounded-xl bg-white p-6 shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  <strong className="text-gray-700">{exp.company}</strong> · {exp.companyDetail}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed"
                    >
                      <span className="mt-1 text-primary-500 font-semibold flex-shrink-0">&rarr;</span>
                      <span dangerouslySetInnerHTML={{
                        __html: highlight.replace(
                          /^([^—]+(?:—)?\s*)/,
                          (match) => {
                            const boldMatch = highlight.match(/^([^—]+?)(\s*—|\s+by\s|\s+through\s|\s+via\s)/);
                            if (boldMatch) {
                              return `<strong class="text-gray-900">${boldMatch[1]}</strong>${boldMatch[2]}`;
                            }
                            return match;
                          }
                        )
                      }} />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
