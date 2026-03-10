"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const placeholderTestimonials = [
  {
    quote:
      "LinkedIn recommendation coming soon.",
    name: "Coming Soon",
    title: "Colleague / Client",
  },
  {
    quote:
      "LinkedIn recommendation coming soon.",
    name: "Coming Soon",
    title: "Colleague / Client",
  },
  {
    quote:
      "LinkedIn recommendation coming soon.",
    name: "Coming Soon",
    title: "Colleague / Client",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What People Say"
          subtitle="Testimonials from colleagues and stakeholders I've worked with."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {placeholderTestimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6"
            >
              <Quote className="mb-4 text-primary-300" size={32} />
              <p className="italic text-gray-500">{testimonial.quote}</p>
              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-400">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
