"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function FeaturedWork() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="work" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Work"
          subtitle="Select projects showcasing product strategy, AI implementation, and digital transformation."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={fadeInUp}>
              {project.type === "case-study" ? (
                <Link href={project.link} className="group block">
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700">
                      <span className="font-heading text-2xl font-bold text-white">
                        {project.title}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} text={tag} variant="outline" />
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-2 font-semibold text-primary-600">
                        Read Case Study <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <div className="flex h-48 items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                      <span className="font-heading text-2xl font-bold text-white">
                        {project.title}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} text={tag} variant="outline" />
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-2 font-semibold text-primary-600">
                        View Live App <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
