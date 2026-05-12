"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ArrowDown, ChevronRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import JourneyRoad from "@/components/sections/JourneyRoad";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const floatingBadges = [
  { text: "$5M+", sub: "Revenue", cls: "float-1", pos: "top-4 -right-4 md:-right-10" },
  { text: "27%", sub: "TAM Growth", cls: "float-2", pos: "-bottom-6 -right-2 md:-right-8" },
  { text: "40K+", sub: "Users", cls: "float-3", pos: "top-1/3 -left-4 md:-left-12" },
];

export default function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(145deg, #C2553A 0%, #9B3D25 55%, #8B3320 100%)" }}
    >
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-10"
          style={{ background: "#FAF7F4" }}
        />
        <div
          className="absolute bottom-32 -left-16 h-64 w-64 rounded-full opacity-8"
          style={{ background: "#C9974A" }}
        />
        <div
          className="absolute top-1/2 right-1/4 h-40 w-40 rotate-45 opacity-5"
          style={{ background: "#FAF7F4" }}
        />
        <div
          className="absolute top-20 left-1/3 h-20 w-20 rounded-full opacity-8"
          style={{ background: "#C9974A" }}
        />
      </div>

      {/* Main content */}
      <div className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* ── Left: Text ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                style={{
                  background: "rgba(250,247,244,0.12)",
                  border: "1px solid rgba(250,247,244,0.28)",
                }}
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="text-sm font-medium" style={{ color: "#FAF7F4" }}>
                  Open to Opportunities · Dubai, UAE
                </span>
              </motion.div>

              {/* Name */}
              <h1
                className="font-heading mb-4 text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl"
                style={{ color: "#FAF7F4" }}
              >
                NICKY PILLAI
              </h1>

              {/* Typewriter role */}
              <div
                className="mb-6 flex h-10 items-center text-xl font-semibold md:text-2xl"
                style={{ color: "rgba(250,247,244,0.82)" }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Product Manager",
                      "Digital Transformer",
                      "AI Builder",
                      "B2B SaaS Strategist",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 35,
                  }}
                />
              </div>

              {/* One-liner */}
              <p
                className="mb-5 max-w-md text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(250,247,244,0.7)" }}
              >
                14 years in tech · 9 in product
              </p>

              {/* Certification badges */}
              <div className="mb-8 flex flex-wrap gap-2">
                {["CSM", "CSPO", "SAFe® POPM"].map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                    style={{
                      background: "rgba(250,247,244,0.15)",
                      border: "1px solid rgba(250,247,244,0.35)",
                      color: "#FAF7F4",
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mb-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("projects")}
                  className="inline-flex items-center gap-1.5 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: "#FAF7F4", color: "#C2553A" }}
                >
                  See My Work
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-1.5 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    border: "2px solid rgba(250,247,244,0.55)",
                    color: "#FAF7F4",
                  }}
                >
                  Book a Call
                </button>
              </div>

              {/* Social row */}
              <div className="flex items-center gap-5">
                {[
                  { href: SOCIAL_LINKS.linkedin, icon: <Linkedin size={19} />, label: "LinkedIn" },
                  { href: SOCIAL_LINKS.github, icon: <Github size={19} />, label: "GitHub" },
                  { href: `mailto:${SOCIAL_LINKS.email}`, icon: <Mail size={19} />, label: "Email" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="transition-opacity hover:opacity-60"
                    style={{ color: "#FAF7F4" }}
                  >
                    {icon}
                  </a>
                ))}
                <span className="ml-1 text-sm" style={{ color: "rgba(250,247,244,0.5)" }}>
                  {SOCIAL_LINKS.email}
                </span>
              </div>
            </motion.div>

            {/* ── Right: Avatar + floating badges ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow ring */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-30"
                  style={{ background: "#C9974A", transform: "scale(1.1)" }}
                />

                {/* Avatar */}
                <div
                  className="relative h-64 w-64 overflow-hidden rounded-full sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[22rem] lg:w-[22rem]"
                  style={{
                    border: "4px solid rgba(250,247,244,0.3)",
                    boxShadow: "0 0 60px rgba(201,151,74,0.25)",
                  }}
                >
                  <Image
                    src="/avatar-cartoon.png"
                    alt="Nicky Pillai"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Floating badges */}
                {floatingBadges.map(({ text, sub, cls, pos }) => (
                  <div
                    key={text}
                    className={`absolute ${pos} ${cls} rounded-xl px-3.5 py-2 shadow-xl`}
                    style={{
                      background: "#FAF7F4",
                      border: "1px solid rgba(194,85,58,0.18)",
                    }}
                  >
                    <div className="font-heading text-lg font-bold leading-none" style={{ color: "#C2553A" }}>
                      {text}
                    </div>
                    <div className="mt-0.5 text-xs" style={{ color: "#4A3728" }}>{sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Journey Road ── */}
      <JourneyRoad />

      {/* Scroll indicator */}
      <div className="flex justify-center pb-5">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "rgba(250,247,244,0.4)" }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </div>
    </section>
  );
}
