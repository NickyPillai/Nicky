"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Star, ExternalLink } from "lucide-react";
import { CERTIFICATIONS, AWARDS } from "@/lib/constants";

function AwardImage({ src, alt, accent }: { src: string; alt: string; accent: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-44 w-full items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${accent}22, ${accent}55)` }}
      >
        <Star size={40} style={{ color: accent, opacity: 0.6 }} />
      </div>
    );
  }

  return (
    <div className="relative h-44 w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => setFailed(true)}
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(to top, ${accent}cc 0%, transparent 55%)` }}
      />
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: "#F0E8DF" }} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span
            className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "#FAF7F4", color: "#C2553A" }}
          >
            Credentials
          </span>
          <h2 className="font-heading text-3xl font-bold md:text-4xl" style={{ color: "#1C1410" }}>
            Certifications & Recognition
          </h2>
        </motion.div>

        {/* Certifications row */}
        <div className="mb-14">
          <h3
            className="font-heading mb-6 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#C2553A" }}
          >
            Certifications
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4 rounded-xl p-5"
                style={{ background: "#FAF7F4" }}
              >
                <span
                  className="mt-0.5 flex-shrink-0 rounded-lg p-2"
                  style={{ background: "#C2553A", color: "#FAF7F4" }}
                >
                  <BadgeCheck size={18} />
                </span>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#1C1410" }}>{cert.name}</p>
                  <p className="mt-0.5 text-xs" style={{ color: "#8B6A52" }}>{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards grid */}
        <div>
          <h3
            className="font-heading mb-6 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#C2553A" }}
          >
            Awards & Recognition
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AWARDS.map((award, i) => {
              const accent = award.accent ?? "#C2553A";

              const cardInner = (
                <motion.div
                  key={award.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl h-full"
                  style={{
                    background: "#FAF7F4",
                    border: `2px solid ${accent}33`,
                    boxShadow: `0 4px 20px ${accent}18`,
                  }}
                >
                  {award.image ? (
                    <AwardImage src={award.image} alt={award.name} accent={accent} />
                  ) : (
                    <div
                      className="flex h-44 w-full items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${accent}22, ${accent}55)` }}
                    >
                      <Star size={40} style={{ color: accent, opacity: 0.6 }} />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col gap-1 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-heading text-sm font-bold leading-snug" style={{ color: "#1C1410" }}>
                        {award.name}
                      </p>
                      {award.link && (
                        <ExternalLink size={13} className="mt-0.5 flex-shrink-0" style={{ color: accent }} />
                      )}
                    </div>
                    <span
                      className="mt-auto inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{ background: `${accent}18`, color: accent }}
                    >
                      {award.year}
                    </span>
                  </div>
                </motion.div>
              );

              return award.link ? (
                <a
                  key={award.name}
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:-translate-y-1"
                  aria-label={award.name}
                >
                  {cardInner}
                </a>
              ) : (
                <div key={award.name}>{cardInner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
