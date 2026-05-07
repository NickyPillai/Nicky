import Link from "next/link";
import { ArrowLeft, CheckCircle2, Users, MapPin, Shield, Smartphone, Monitor, Cpu } from "lucide-react";

const features = [
  {
    icon: <Smartphone size={22} />,
    title: "Parent Mobile App",
    points: [
      "Real-time GPS tracking of bus location, stops, trip start and end",
      "Driver and attendant profile visible daily — who's attending your child",
      "In-app payment for term fees with full ledger history",
      "Push notifications for trip start, stop arrivals, and alerts",
    ],
  },
  {
    icon: <Users size={22} />,
    title: "Driver Mobile App",
    points: [
      "Geofence-automated trip start/end — no manual action required at depot or school",
      "Manual trip override for edge cases and operational flexibility",
      "Student attendance marking in the absence of an attendant",
      "Real-time sync with the enterprise admin portal",
    ],
  },
  {
    icon: <Shield size={22} />,
    title: "Attendant Mobile App",
    points: [
      "Daily trip list with bus, driver, and student details",
      "One-tap digital attendance marking per student per trip",
      "Automatic duty assignment from admin portal",
      "Offline-capable with background sync",
    ],
  },
  {
    icon: <Cpu size={22} />,
    title: "IoT Safety Devices",
    points: [
      '"All Clear" button at the rear — driver must walk to the back before locking the bus',
      "Stop sign camera captures plate numbers of overtaking vehicles for penalty processing",
      "Motion sensors detect any student left in the bus post-trip and alert operations",
      "Stop sign open/close data logged to verify driver compliance",
    ],
  },
  {
    icon: <Monitor size={22} />,
    title: "Enterprise Admin Portal",
    points: [
      "Multi-school onboarding with isolated operations and a consolidated dashboard",
      "Route planning with automated bus, driver, attendant, and student allocation",
      "Advanced payment module: advance payments, multi-student adjustment, cash/card, credit/debit notes",
      "Term fee structure with detailed per-student ledgers",
    ],
  },
];

const impacts = [
  { number: "~30%", label: "Reduction in parent complaint calls", sub: "Digital real-time tracking eliminates information anxiety" },
  { number: "~25%", label: "Improvement in on-time performance", sub: "Automated geofence triggering removes manual delays" },
  { number: "100%", label: "Digital attendance tracking", sub: "Eliminates paper roll calls — every trip fully logged" },
  { number: "0", label: "Undetected left-behind incidents", sub: "Motion sensors + All Clear button create a safety net" },
];

export default function SchoolBusCase() {
  return (
    <main style={{ background: "#FAF7F4" }} className="min-h-screen">

      {/* Hero */}
      <section
        style={{ background: "linear-gradient(145deg, #C2553A 0%, #8B3320 100%)" }}
        className="px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "rgba(250,247,244,0.75)" }}
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {["IoT", "Fleet & Transport", "Mobile Apps", "Enterprise SaaS"].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(250,247,244,0.15)", color: "#FAF7F4" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-3xl font-bold leading-tight md:text-5xl" style={{ color: "#FAF7F4" }}>
            School Bus Transportation System
          </h1>
          <p className="mt-4 text-lg" style={{ color: "rgba(250,247,244,0.75)" }}>
            End-to-end smart transportation platform for school buses — parent app, driver app, attendant app, IoT safety devices, and enterprise admin portal.
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: "#C9974A" }}>
            Client: Dubai Taxi Corporation · Emirates Transport
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">

        {/* Challenge */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            The Challenge
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            School bus operations were running on trust and paper
          </h3>
          <p className="text-base leading-relaxed" style={{ color: "#4A3728" }}>
            Parents had no visibility into where their child&apos;s bus was at any given moment. Attendance was marked manually by attendants using paper sheets, making reconciliation error-prone. There was no systematic way to ensure a student left behind in the bus would be detected — driver inspections happened informally. Route planning and allocation of buses, drivers, and attendants to schools was done through spreadsheets and phone calls, creating operational bottlenecks. Fee collection and tracking across multiple schools was entirely manual.
          </p>
        </section>

        {/* My Role */}
        <section
          className="rounded-2xl p-8"
          style={{ background: "#F0E8DF" }}
        >
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            My Role
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            Product Owner & Business Analyst
          </h3>
          <ul className="space-y-3">
            {[
              "Defined end-to-end product requirements across 5 distinct user personas: parent, driver, attendant, school admin, and operations",
              "Designed the geofence automation logic for trip auto-start/end and the All Clear + motion sensor safety workflow",
              "Architected the IoT device integration spec — connecting hardware telemetry (stop sign, motion sensor, camera) to the backend",
              "Led requirement discovery workshops with Dubai Taxi Corporation stakeholders",
              "Designed the payment module covering advance payments, pro-rata adjustments, cash/card reconciliation, and credit/debit notes",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#4A3728" }}>
                <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#C2553A" }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            The Solution
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-8" style={{ color: "#1C1410" }}>
            A connected ecosystem of apps and IoT devices
          </h3>
          <div className="space-y-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6"
                style={{ background: "#FFFFFF", border: "2px solid #F0E8DF" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-lg p-2" style={{ background: "#C2553A", color: "#FAF7F4" }}>
                    {f.icon}
                  </span>
                  <h4 className="font-heading font-bold text-lg" style={{ color: "#1C1410" }}>{f.title}</h4>
                </div>
                <ul className="space-y-2">
                  {f.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#4A3728" }}>
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "#C2553A" }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section
          className="rounded-2xl p-8"
          style={{ background: "#1C1410" }}
        >
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C9974A" }}>
            Impact & Results
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-8" style={{ color: "#FAF7F4" }}>
            Safer journeys, happier parents, streamlined operations
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {impacts.map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(194,85,58,0.2)" }}
              >
                <div className="font-heading text-3xl font-bold mb-1" style={{ color: "#E8956D" }}>
                  {item.number}
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: "#FAF7F4" }}>{item.label}</p>
                <p className="text-xs" style={{ color: "rgba(250,247,244,0.55)" }}>{item.sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs" style={{ color: "rgba(250,247,244,0.35)" }}>
            * Impact estimates based on industry benchmarks for smart school bus management deployments.
          </p>
        </section>

        {/* Key Learnings */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#C2553A" }}>
            Key Learnings
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Safety is non-negotiable UX", body: "The All Clear button and motion sensor weren't features — they were trust builders. Parents don't compare apps; they compare peace of mind." },
              { title: "Multi-persona products need role-specific simplicity", body: "The driver app needed to be operable with one thumb, in daylight, under time pressure. Simplicity for one persona can't compromise another's power." },
              { title: "Offline-first is table stakes for mobility", body: "School buses pass through dead zones. Every mobile app had to function offline and reconcile seamlessly — this changed our entire sync architecture." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-5" style={{ background: "#F0E8DF" }}>
                <h4 className="font-heading font-bold text-sm mb-2" style={{ color: "#C2553A" }}>{item.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#4A3728" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back */}
        <div className="pt-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: "#C2553A", color: "#FAF7F4" }}
          >
            <ArrowLeft size={14} />
            Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
