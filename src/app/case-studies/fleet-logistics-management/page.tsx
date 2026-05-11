import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Route, Truck, Users, BarChart3, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Fleet & Logistics Management | Nicky Pillai",
  description:
    "Auto-scheduling and route planning platform that reduced daily fleet planning from 2 hours to 15 minutes for Enhance Group and Etisalat.",
};

const impacts = [
  { number: "87%", label: "Reduction in Daily Planning Time", sub: "From 2 hours with 4 people to under 15 minutes with automated scheduling." },
  { number: "75%", label: "Planning Team Effort Reduced", sub: "4-person planning team (3 junior + 1 senior) replaced by one supervisor reviewing AI-generated plans." },
  { number: "~20%", label: "Improvement in Vehicle Utilisation", sub: "Optimised route sequencing and vehicle-type matching reduced idle time and dead miles." },
  { number: "Zero", label: "Key-Person Dependency Risk", sub: "Operational knowledge now encoded in system logic — no single planner holding institutional memory." },
  { number: "100%", label: "Audit-Ready Plans", sub: "Every route, driver, vehicle, and stop assignment is logged, traceable, and reviewable." },
  { number: "<5 min", label: "Full Plan Generation Time", sub: "The entire day's fleet plan — routes, stops, drivers, vehicles — generated in under 5 minutes." },
];

const features = [
  {
    icon: <BarChart3 size={22} />,
    title: "Business Input Configuration",
    points: [
      "Upload or connect order/item lists from supermarket and retail partners",
      "Configure vehicle types, capacities, and special handling rules (e.g. frozen, fragile)",
      "Set driver availability, certifications, and entry permit restrictions per zone",
      "Define customer delivery windows and fixed-time commitments",
      "Input current fleet availability and vehicle conditions for the day",
    ],
  },
  {
    icon: <Route size={22} />,
    title: "Automated Route Planning Engine",
    points: [
      "Auto-assigns stops per vehicle based on capacity, order volume, and delivery sequence",
      "Optimises route order to minimise total travel time and distance",
      "Respects time-window constraints and fixed delivery commitments per customer",
      "Special item handling logic: routes frozen goods to temperature-controlled vehicles only",
      "Generates full route plan with stop sequence, ETA per stop, and load manifest",
    ],
  },
  {
    icon: <Truck size={22} />,
    title: "Driver & Vehicle Allocation",
    points: [
      "Matches driver to vehicle based on vehicle type certification and permit requirements",
      "Checks driver availability against scheduled leave and working hour caps",
      "Flags unresolvable conflicts for planner review before finalising",
      "Generates driver dispatch sheets and vehicle load lists in one click",
    ],
  },
  {
    icon: <Users size={22} />,
    title: "Real-Time Operations Dashboard",
    points: [
      "Live GPS tracking of all active vehicles against their planned route",
      "Deviation alerts when vehicles go off-route or miss a delivery window",
      "Dispatcher view with job status per stop: pending, en route, delivered, failed",
      "End-of-day report: completed deliveries, delays, exceptions, and driver performance",
    ],
  },
];

export default function FleetLogisticsManagement() {
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9974A" }}>
            Case Study
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {["Fleet Management", "Logistics", "Route Optimisation", "Enterprise", "SaaS"].map((tag) => (
              <span key={tag} className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(250,247,244,0.15)", color: "#FAF7F4" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-3xl font-bold leading-tight md:text-5xl" style={{ color: "#FAF7F4" }}>
            Fleet & Logistics Management
          </h1>
          <p className="mt-4 text-lg" style={{ color: "rgba(250,247,244,0.75)" }}>
            Auto-scheduling and route planning system that compressed 2 hours of manual fleet planning into 15 minutes — eliminating key-person dependency and scaling across enterprise logistics operations.
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: "#C9974A" }}>
            Clients: Enhance Group · Etisalat (e&) · Telecom
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">

        {/* The Story */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            The Challenge
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            Four people, two hours, every single morning
          </h3>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4A3728" }}>
            Enhance Group operated a last-mile delivery business serving multiple supermarkets across the UAE. Each morning, they received item lists from their retail partners — and the day could not begin until a team of planners had manually figured out which vehicles to send, which drivers to assign, which routes to run, and which orders fit in each truck.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4A3728" }}>
            This planning process involved a senior planner and three junior planners working together for a minimum of two hours. The decisions they made required deep operational knowledge: customer location, delivery volume, vehicle capacity, vehicle type (refrigerated for frozen goods), driver permit restrictions per zone, fixed delivery windows, and current vehicle availability — all balanced simultaneously in someone&apos;s head.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#4A3728" }}>
            The consequences were severe. If the senior planner was absent, operations stalled or ran suboptimally. There was no backup, no documentation of the logic being applied, and no way to audit decisions after the fact. The company was entirely dependent on the institutional knowledge of one person. This posed both an operational risk and a personal burden — key planners couldn&apos;t take leave without putting the business at risk.
          </p>
        </section>

        {/* My Role */}
        <section className="rounded-2xl p-8" style={{ background: "#F0E8DF" }}>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            My Role
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            Product Manager — concept to enterprise rollout
          </h3>
          <ul className="space-y-3">
            {[
              "Led discovery with planners to extract and systematise the implicit decision logic into configurable business rules",
              "Defined the product architecture: business input layer, planning engine, driver/vehicle allocation, and live tracking dashboard",
              "Worked with engineering to design the route optimisation algorithm, including capacity constraints, time-window logic, and special handling rules",
              "Specified the conflict resolution rules — what the system flags vs. auto-resolves when ideal conditions aren't met",
              "Managed rollout to Enhance Group and subsequently adapted the product for Etisalat's daily delivery operations at enterprise scale",
              "Designed the audit trail and plan review interface so planners retain oversight and control without doing the cognitive heavy lifting",
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
            An auto-scheduling engine that plans the day so planners don&apos;t have to
          </h3>
          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl p-6" style={{ background: "#FFFFFF", border: "2px solid #F0E8DF" }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-lg p-2" style={{ background: "#C2553A", color: "#FAF7F4" }}>{f.icon}</span>
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

        {/* End Users */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#C2553A" }}>
            End Users
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Fleet Planning Team",
                body: "Senior and junior planners shift from doing the plan to reviewing it. The cognitive load of balancing 20+ variables is handled by the system — they manage exceptions and approvals.",
              },
              {
                title: "Drivers & Field Teams",
                body: "Receive clear dispatch sheets with route, stops, load manifest, and delivery windows. No ambiguity. No last-minute verbal instructions.",
              },
              {
                title: "Operations Management",
                body: "Full live visibility into fleet status, delivery progress, and end-of-day performance. Audit trail for every decision the system made.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6" style={{ background: "#FFFFFF", border: "2px solid #F0E8DF" }}>
                <h4 className="font-heading font-bold mb-2 text-base" style={{ color: "#1C1410" }}>{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#4A3728" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="rounded-2xl p-8" style={{ background: "#1C1410" }}>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C9974A" }}>
            Impact & Results
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-8" style={{ color: "#FAF7F4" }}>
            From 2 hours of manual coordination to 15 minutes of oversight
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impacts.map((item) => (
              <div key={item.label} className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(194,85,58,0.2)" }}>
                <div className="font-heading text-3xl font-bold mb-1" style={{ color: "#E8956D" }}>{item.number}</div>
                <p className="font-semibold text-sm mb-1" style={{ color: "#FAF7F4" }}>{item.label}</p>
                <p className="text-xs" style={{ color: "rgba(250,247,244,0.55)" }}>{item.sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs" style={{ color: "rgba(250,247,244,0.35)" }}>
            * Time reduction and utilisation improvements based on observed operational outcomes; team effort reduction reflects headcount reallocation from active planning to supervisory review.
          </p>
        </section>

        {/* Etisalat Expansion */}
        <section className="rounded-2xl p-8" style={{ background: "#F0E8DF" }}>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            Enterprise Scale
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            Extended to Etisalat (e&) for daily delivery operations
          </h3>
          <p className="text-base leading-relaxed" style={{ color: "#4A3728" }}>
            Following the successful deployment with Enhance Group, the platform was adapted and rolled out to Etisalat (e&) for their internal daily delivery operations. Etisalat&apos;s requirements introduced additional complexity: larger fleet scale, more zones, more rigid delivery commitments, and stricter compliance requirements. The modular architecture of the product — separating business rules from the planning engine — allowed us to configure the system for Etisalat&apos;s context without rebuilding core logic. This extensibility validated the original product architecture and positioned the platform as a multi-tenant fleet operations solution.
          </p>
        </section>

        {/* Key Learnings */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#C2553A" }}>
            Key Learnings
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "The plan is in people's heads, not documents", body: "Extracting operational logic from experienced planners required careful interview work — they didn't know they knew so much until you asked the right questions." },
              { title: "Automation only works if people trust it", body: "The planner review interface was as important as the algorithm. Giving planners full visibility and override control was what enabled adoption — not just accuracy." },
              { title: "Conflict resolution rules are the hard part", body: "Writing the algorithm is straightforward. Deciding what to do when a driver has a permit gap, the right vehicle is unavailable, and the delivery window is tight — that's where real product judgment lives." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-5" style={{ background: "#F0E8DF" }}>
                <h4 className="font-heading font-bold text-sm mb-2" style={{ color: "#C2553A" }}>{item.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#4A3728" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-4">
          <Link href="/#projects" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: "#C2553A", color: "#FAF7F4" }}>
            <ArrowLeft size={14} />
            Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
