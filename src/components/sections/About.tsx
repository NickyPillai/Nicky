"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Target, Settings, Bot, Globe, Handshake } from "lucide-react";
import { ABOUT_BIO, ABOUT_HIGHLIGHTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target size={22} className="text-primary-600" />,
  Settings: <Settings size={22} className="text-primary-600" />,
  Bot: <Bot size={22} className="text-primary-600" />,
  Globe: <Globe size={22} className="text-primary-600" />,
  Handshake: <Handshake size={22} className="text-primary-600" />,
};

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="bg-gray-50 pt-24 pb-14 lg:pt-28 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: Photo + Name + Bio */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12"
        >
          {/* Photo */}
          <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
            <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-lg ring-4 ring-primary-100 sm:h-48 sm:w-48">
              <Image
                src="/nicky-headshot.jpg"
                alt="Nicky Pillai"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Name + Bio */}
          <motion.div variants={fadeInUp} className="text-center lg:text-left">
            <div className="mb-1">
              <h1 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">Nicky Pillai</h1>
              <p className="mt-1 text-base text-gray-500">Senior Product Manager · Dubai, UAE</p>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                <span className="text-xs font-medium text-amber-700">Open to new opportunities</span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {ABOUT_BIO.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-600 leading-relaxed text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button href="#impact" size="md">
                See My Impact &rarr;
              </Button>
              <Button href="#projects" variant="secondary" size="md">
                Projects
              </Button>
              <Button href="#skills" variant="secondary" size="md">
                Skills
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ABOUT_HIGHLIGHTS.map((highlight) => (
            <motion.div
              key={highlight.title}
              variants={fadeInUp}
              className="flex gap-3 rounded-lg border border-primary-100 bg-white p-4 shadow-sm transition-all hover:border-primary-300 hover:shadow-md"
            >
              <div className="flex-shrink-0 rounded-lg bg-primary-50 p-2.5">
                {iconMap[highlight.icon]}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{highlight.title}</p>
                <p className="mt-0.5 text-xs text-gray-500">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
