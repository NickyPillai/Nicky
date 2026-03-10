"use client";

import { motion } from "framer-motion";
import { TrendingUp, Rocket, Zap, Users } from "lucide-react";
import { HERO_CONTENT, HERO_STATS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={24} className="text-primary-600" />,
  Rocket: <Rocket size={24} className="text-primary-600" />,
  Zap: <Zap size={24} className="text-primary-600" />,
  Users: <Users size={24} className="text-primary-600" />,
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
          className="text-center lg:text-left"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary-500" />
            <span className="text-xs font-semibold tracking-wide text-primary-700 uppercase">
              Available for new opportunities
            </span>
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Senior Product
            <br />
            <span className="text-primary-600">Manager</span>
            <br />
            <span className="font-normal text-gray-400">& Digital Strategist</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            <strong className="text-gray-900">14 years in tech. 5 years in product.</strong>{" "}
            I bridge engineering, business, and UX to ship products that generate revenue, expand markets, and actually get adopted.
            Specialised in <strong className="text-gray-900">HRMS, Telematics, SaaS & AI-driven products</strong> across B2B and B2G.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="#impact" size="lg">
              {HERO_CONTENT.ctaPrimary} &rarr;
            </Button>
            <Button
              href={HERO_CONTENT.linkedinUrl}
              variant="secondary"
              size="lg"
              external
            >
              {HERO_CONTENT.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col gap-4"
        >
          {HERO_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInRight}
              className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md"
            >
              <div className="flex-shrink-0 rounded-lg bg-primary-50 p-2.5 transition-colors group-hover:bg-primary-100">
                {iconMap[stat.icon]}
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-primary-600">
                  {stat.number}
                </div>
                <p className="mt-0.5 text-sm text-gray-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary-50 opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-primary-100 opacity-30 blur-3xl" />
    </section>
  );
}
