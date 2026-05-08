"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const milestones = [
  { year: 2011, achievement: "Joined Cognizant. Career begins." },
  { year: 2012, achievement: "Learnt what is software development." },
  { year: 2013, achievement: "Strengthened development muscles." },
  { year: 2014, achievement: "Relocated to Dubai. New chapter begins." },
  { year: 2015, achievement: "Shipped Rent-a-car project for Emirates Transport." },
  { year: 2016, achievement: "Became Product Owner at Dubai Technologies." },
  { year: 2017, achievement: "Delivered Telematics & Fleet products generating $5M+." },
  { year: 2018, achievement: "Reduced 19% escalations & 53% monthly incidents." },
  { year: 2019, achievement: "Expanded to IoT & Government B2G." },
  { year: 2020, achievement: "Delivered 10+ enterprise projects. Promoted to PM." },
  { year: 2021, achievement: "Certified CSM & CSPO. 33% automation for Dubai RTA." },
  { year: 2022, achievement: "Joined Yomly. Certified in SAFe POPM." },
  { year: 2023, achievement: "Shift & Scheduling shipped. +27% TAM growth." },
  { year: 2024, achievement: "Halved payroll discrepancies. AI journey begins." },
  { year: 2025, achievement: "AI agents for work. 90% time saved on docs." },
  { year: 2026, achievement: "Freelance PM. Building AI tools. New industries." },
];

const INTERVAL_MS = 5000;
const TOTAL = milestones.length - 1;
const VISIBLE_YEARS = 7;

// Avatar travels from 5% to 88% of road width
const avatarLeftPct = (i: number) => 5 + (i / TOTAL) * 83;
// Bubble follows avatar, clamped so it doesn't clip the edge
const bubbleLeftPct = (i: number) => Math.max(13, Math.min(84, avatarLeftPct(i)));

export default function JourneyRoad() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % milestones.length);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = milestones[index];
  const aLeft = avatarLeftPct(index);
  const bLeft = bubbleLeftPct(index);

  // Mobile: sliding 7-year window centred on current
  const visibleIndices = (() => {
    const half = Math.floor(VISIBLE_YEARS / 2);
    let start = Math.max(0, index - half);
    const end = Math.min(milestones.length - 1, start + VISIBLE_YEARS - 1);
    start = Math.max(0, end - VISIBLE_YEARS + 1);
    return Array.from({ length: end - start + 1 }, (_, k) => start + k);
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.6 }}
      className="relative pb-6"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Bubble + Road wrapper ── */}
        <div className="relative">

          {/* Bubble area — fixed height so road doesn't shift */}
          <div className="relative mb-2" style={{ height: 72 }}>
            {/* Container slides to follow avatar */}
            <motion.div
              className="absolute bottom-1"
              style={{ transform: "translateX(-50%)" }}
              animate={{ left: `${bLeft}%` }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              {/* Bubble card */}
              <div
                className="rounded-2xl px-4 py-2.5 shadow-lg text-center"
                style={{
                  background: "rgba(250,247,244,0.95)",
                  border: "1px solid rgba(194,85,58,0.2)",
                  maxWidth: 260,
                }}
              >
                {/* Text fades in on each year change */}
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  aria-live="polite"
                >
                  <span
                    className="font-heading text-sm font-bold"
                    style={{ color: "#C2553A" }}
                  >
                    {current.year}
                  </span>
                  <span
                    className="ml-1.5 text-sm leading-snug"
                    style={{ color: "#1C1410" }}
                  >
                    {current.achievement}
                  </span>
                </motion.div>
              </div>

              {/* Triangle pointing down toward avatar */}
              <div className="flex justify-center">
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderTop: "8px solid rgba(250,247,244,0.95)",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Road + avatar layer */}
          <div className="relative" style={{ height: 68 }}>

            {/* Road surface — overflow hidden clips the scrolling dashes */}
            <div
              className="absolute inset-0 overflow-hidden rounded-xl"
              style={{
                background: "rgba(28,20,16,0.84)",
                border: "1px solid rgba(250,247,244,0.08)",
              }}
            >
              {/* Road edge shading */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(45,31,23,0) 0%, rgba(28,20,16,0.45) 100%)",
                }}
              />

              {/* Moving lane dashes — 200% wide for seamless loop */}
              <div
                className="animate-road-dash absolute top-1/2 -translate-y-1/2"
                style={{ width: "200%", left: 0 }}
              >
                {Array.from({ length: 34 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block"
                    style={{
                      width: 40,
                      height: 4,
                      marginRight: 30,
                      borderRadius: 2,
                      background: "rgba(250,247,244,0.42)",
                      verticalAlign: "middle",
                    }}
                  />
                ))}
              </div>

              {/* Progress bar growing from left */}
              <motion.div
                className="pointer-events-none absolute bottom-0 left-0 h-0.5"
                animate={{ width: `${((index + 1) / milestones.length) * 100}%` }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                style={{ background: "linear-gradient(90deg, #C2553A, #C9974A)" }}
              />
            </div>

            {/* Avatar — outside the overflow-hidden div, slides along the road */}
            <motion.div
              className="absolute z-10"
              style={{ bottom: 4, transform: "translateX(-50%)" }}
              animate={{ left: `${aLeft}%` }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              <div
                className="animate-walk-bob overflow-hidden rounded-full"
                style={{
                  width: 56,
                  height: 56,
                  border: "2px solid rgba(201,151,74,0.75)",
                  boxShadow: "0 0 14px rgba(201,151,74,0.4)",
                  background: "#C2553A",
                }}
              >
                <Image
                  src="/avatar-cartoon.png"
                  alt="Nicky Pillai avatar"
                  width={56}
                  height={56}
                  className="object-cover object-top scale-110"
                  priority={false}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Year labels ── */}
        <div className="mt-2.5">

          {/* Desktop — all 16 years */}
          <div className="hidden items-center justify-between sm:flex">
            {milestones.map((m, i) => (
              <button
                key={m.year}
                onClick={() => { setIndex(i); startTimer(); }}
                className="flex flex-col items-center gap-1"
                aria-label={`Jump to ${m.year}`}
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 8 : 5,
                    height: i === index ? 8 : 5,
                    background:
                      i === index
                        ? "#C9974A"
                        : i < index
                        ? "rgba(250,247,244,0.5)"
                        : "rgba(250,247,244,0.18)",
                  }}
                />
                <span
                  className="font-heading font-semibold transition-all duration-300"
                  style={{
                    fontSize: i === index ? 13 : 11,
                    color:
                      i === index
                        ? "#FAF7F4"
                        : i < index
                        ? "rgba(250,247,244,0.5)"
                        : "rgba(250,247,244,0.22)",
                  }}
                >
                  {m.year}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile — sliding 7-year window */}
          <div className="flex items-center justify-center gap-3 sm:hidden">
            {visibleIndices[0] > 0 && (
              <span className="text-xs" style={{ color: "rgba(250,247,244,0.25)" }}>…</span>
            )}
            {visibleIndices.map((i) => (
              <button
                key={milestones[i].year}
                onClick={() => { setIndex(i); startTimer(); }}
                className="flex flex-col items-center gap-1"
                aria-label={`Jump to ${milestones[i].year}`}
              >
                <div
                  className="rounded-full"
                  style={{
                    width: i === index ? 7 : 4,
                    height: i === index ? 7 : 4,
                    background:
                      i === index
                        ? "#C9974A"
                        : i < index
                        ? "rgba(250,247,244,0.45)"
                        : "rgba(250,247,244,0.18)",
                  }}
                />
                <span
                  className="font-heading font-semibold"
                  style={{
                    fontSize: i === index ? 12 : 10,
                    color:
                      i === index
                        ? "#FAF7F4"
                        : i < index
                        ? "rgba(250,247,244,0.45)"
                        : "rgba(250,247,244,0.2)",
                  }}
                >
                  {milestones[i].year}
                </span>
              </button>
            ))}
            {visibleIndices[visibleIndices.length - 1] < milestones.length - 1 && (
              <span className="text-xs" style={{ color: "rgba(250,247,244,0.25)" }}>…</span>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
