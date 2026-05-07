"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, CalendarDays, ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const calendarUrl = process.env.NEXT_PUBLIC_GCAL_BOOKING_URL;

export default function BookingSection() {
  return (
    <section
      id="contact"
      style={{ background: "linear-gradient(145deg, #C2553A 0%, #8B3320 100%)" }}
      className="py-20 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span
            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "rgba(250,247,244,0.15)", color: "#FAF7F4" }}
          >
            <CalendarDays size={12} />
            Get in Touch
          </span>
          <h2
            className="font-heading text-3xl font-bold md:text-4xl"
            style={{ color: "#FAF7F4" }}
          >
            Let&apos;s Talk Product
          </h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(250,247,244,0.75)" }}>
            Pick a time that works for you — no back-and-forth emails needed.
          </p>
        </motion.div>

        {/* Booking card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-2xl"
          style={{ background: "#FAF7F4", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}
        >
          <div className="flex flex-col items-center gap-8 px-8 py-16 text-center md:px-16">
            {/* Icon ring */}
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(145deg, #C2553A, #C9974A)" }}
            >
              <CalendarDays size={36} style={{ color: "#FAF7F4" }} />
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold md:text-3xl" style={{ color: "#1C1410" }}>
                Book a 30-Minute Call
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed md:text-base" style={{ color: "#4A3728" }}>
                Whether you&apos;re exploring a collaboration, need product advisory, or just want to connect — pick a slot and let&apos;s talk.
              </p>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap justify-center gap-2">
              {["No prep needed", "Video or audio", "30 mins", "Free"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: "#F0E8DF", color: "#4A3728" }}
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTA button */}
            {calendarUrl ? (
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg, #C2553A 0%, #C9974A 100%)", color: "#FAF7F4" }}
              >
                <CalendarDays size={18} />
                Schedule a Call
                <ArrowRight size={16} />
              </a>
            ) : (
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg, #C2553A 0%, #C9974A 100%)", color: "#FAF7F4" }}
              >
                <Mail size={18} />
                Email me instead
              </a>
            )}
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { href: SOCIAL_LINKS.linkedin, icon: <Linkedin size={18} />, label: "LinkedIn", text: "linkedin.com/in/nicky-pillai" },
            { href: SOCIAL_LINKS.github, icon: <Github size={18} />, label: "GitHub", text: "github.com/NickyPillai" },
            { href: `mailto:${SOCIAL_LINKS.email}`, icon: <Mail size={18} />, label: "Email", text: SOCIAL_LINKS.email },
          ].map(({ href, icon, label, text }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(250,247,244,0.15)", color: "#FAF7F4", border: "1px solid rgba(250,247,244,0.2)" }}
            >
              {icon}
              <span>{text}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
