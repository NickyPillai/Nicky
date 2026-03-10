"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { staggerContainer, scaleIn } from "@/lib/animations";

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-primary-600 py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={scaleIn}
            className="text-center"
          >
            <div className="font-heading text-4xl font-bold text-white lg:text-5xl">
              {stat.label === "Revenue Generated" && "$"}
              {inView ? (
                <CountUp end={stat.value} duration={2.5} />
              ) : (
                0
              )}
              {stat.suffix}
            </div>
            <p className="mt-2 text-sm font-medium text-white/80">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
