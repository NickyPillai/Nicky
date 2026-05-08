"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_BIO } from "@/lib/constants";

const domainChips = [
  "HRMS", "Telematics", "Smart Mobility",
  "IoT", "Fleet & Logistics", "Gov B2G",
  "SaaS B2B", "Digital Transformation",
];

export default function About() {
  return (
    <section id="about" style={{ background: "#FAF7F4" }} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section label */}
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
            About Me
          </span>
          <h2
            className="font-heading text-3xl font-bold md:text-4xl"
            style={{ color: "#1C1410" }}
          >
            The person behind the products
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: Avatar only */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/avatar-standing.png"
                alt="Nicky Pillai"
                width={340}
                height={520}
                className="object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Bio + chips */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4 text-base leading-relaxed md:text-lg" style={{ color: "#4A3728" }}>
              {ABOUT_BIO.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {domainChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{ background: "#F0E8DF", color: "#4A3728" }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
