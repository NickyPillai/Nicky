"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Map,
  Zap,
  Rocket,
  GitBranch,
  FileText,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target size={28} />,
  Map: <Map size={28} />,
  Zap: <Zap size={28} />,
  Rocket: <Rocket size={28} />,
  GitBranch: <GitBranch size={28} />,
  FileText: <FileText size={28} />,
};

export default function ServicesOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Consulting Services"
          subtitle="Connect with me for paid services. I help businesses build better products through strategic consulting and hands-on execution."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-primary-300 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-heading mb-2 text-lg font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button href="/services" size="lg">
            Explore Services & Connect
          </Button>
        </div>
      </div>
    </section>
  );
}
