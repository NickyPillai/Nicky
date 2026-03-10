"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A full-stack PM toolkit built over 14 years — from developer roots to strategic product leadership."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.category}
              variants={fadeInUp}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-md"
            >
              <h3 className="font-heading mb-4 border-b border-gray-100 pb-3 text-sm font-bold tracking-wide text-primary-600 uppercase">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge key={item} text={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
