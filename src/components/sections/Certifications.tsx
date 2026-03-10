"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BadgeCheck } from "lucide-react";
import { CERTIFICATIONS, AWARDS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications & Awards"
          subtitle="Recognized expertise and continuous learning in product management and agile methodologies."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          {/* Certifications */}
          <div>
            <h3 className="font-heading mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
              <BadgeCheck className="text-primary-600" size={24} />
              Certifications
            </h3>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={fadeInUp}
                  className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm"
                >
                  <div className="flex-shrink-0 rounded-full bg-primary-50 p-2">
                    <BadgeCheck className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{cert.name}</p>
                    <p className="text-sm text-gray-500">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="font-heading mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
              <Award className="text-primary-600" size={24} />
              Awards & Recognition
            </h3>
            <div className="space-y-4">
              {AWARDS.map((award) => (
                <motion.div
                  key={award.name}
                  variants={fadeInUp}
                  className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm"
                >
                  <div className="flex-shrink-0 rounded-full bg-primary-50 p-2">
                    <Award className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{award.name}</p>
                    <p className="text-sm text-gray-500">{award.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
