"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IMPACT_CARDS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Impact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="impact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Results that matter"
          subtitle="Product management is about outcomes. Here's the evidence."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {IMPACT_CARDS.map((card) => (
            <motion.div
              key={card.metric}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg"
            >
              <div className="pointer-events-none absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-primary-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="font-heading text-4xl font-bold text-primary-600 lg:text-5xl">
                {card.number}
              </div>
              <p className="mt-2 font-semibold text-gray-900">{card.metric}</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                {card.context}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
