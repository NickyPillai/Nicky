"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Github, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <p className="mb-2 text-sm font-semibold tracking-wider text-primary-600 uppercase">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Let&apos;s build something great
          </h2>
          <p className="mt-4 text-gray-600">
            I&apos;m currently open to new product management opportunities — both full-time roles and consulting engagements. Let&apos;s connect.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-all hover:border-primary-300 hover:text-primary-600 hover:shadow-md"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-all hover:border-primary-300 hover:text-primary-600 hover:shadow-md"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="inline-flex items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-all hover:border-primary-300 hover:text-primary-600 hover:shadow-md"
            >
              <Mail size={18} />
              {SOCIAL_LINKS.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
