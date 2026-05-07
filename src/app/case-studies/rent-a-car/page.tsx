import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, CreditCard, MapPin, Shield } from "lucide-react";

const features = [
  {
    icon: <FileText size={22} />,
    title: "Rental Agreement Management",
    points: [
      "Digital rental agreements based on real-time vehicle availability",
      "Customer profile with document verification (licence, passport, visa)",
      "Configurable rental terms: daily, weekly, monthly, long-term",
      "Agreement extensions and early returns with automatic adjustment",
    ],
  },
  {
    icon: <CreditCard size={22} />,
    title: "Dynamic Invoicing & Payment",
    points: [
      "Automatic monthly invoice generation for long-term rentals",
      "Pro-rata invoicing for partial periods and extensions",
      "Salik (UAE toll) and traffic fine integration — charges auto-pulled and applied",
      "Multiple payment methods: cash, card, corporate billing",
      "Credit and debit notes for adjustments and disputes",
    ],
  },
  {
    icon: <MapPin size={22} />,
    title: "Live GPS Tracking & History",
    points: [
      "Advanced GPS devices fitted in every vehicle with live location feed",
      "Full trip history with timestamps, route, and distance",
      "Geofence alerts for vehicles leaving designated areas",
      "Incident timeline reconstruction for insurance claims and disputes",
    ],
  },
  {
    icon: <Shield size={22} />,
    title: "Accident & Insurance Support",
    points: [
      "GPS history provides exact location and route at time of accident",
      "Speed and movement data available for insurance documentation",
      "Photographic evidence capture workflow integrated into the portal",
      "Automated incident report generation with all relevant data",
    ],
  },
];

const impacts = [
  { number: "~30%", label: "Faster agreement processing", sub: "Digital forms and availability checks replace manual paperwork" },
  { number: "100%", label: "Automated Salik & fines reconciliation", sub: "Eliminates manual lookups — charges applied directly to customer invoices" },
  { number: "~25%", label: "Reduction in billing disputes", sub: "Dynamic invoicing with full transparency reduces disagreements" },
  { number: "100%", label: "GPS-backed incident documentation", sub: "Every claim supported by verifiable location and route history" },
];

export default function RentACarCase() {
  return (
    <main style={{ background: "#FAF7F4" }} className="min-h-screen">

      {/* Hero */}
      <section style={{ background: "linear-gradient(145deg, #C2553A 0%, #8B3320 100%)" }}
        className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "rgba(250,247,244,0.75)" }}>
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            {["Transport", "FinTech", "GPS Tracking", "IoT"].map((tag) => (
              <span key={tag} className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(250,247,244,0.15)", color: "#FAF7F4" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-3xl font-bold leading-tight md:text-5xl" style={{ color: "#FAF7F4" }}>
            Rent-a-Car Management System
          </h1>
          <p className="mt-4 text-lg" style={{ color: "rgba(250,247,244,0.75)" }}>
            A full-cycle rental management platform with dynamic invoicing, automated Salik and fines integration, live GPS tracking, and insurance-grade incident documentation.
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: "#C9974A" }}>
            Client: Emirates Transport — Rent-a-Car Division
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
            Manual rental operations created billing errors, blind spots, and disputes
          </h3>
          <p className="text-base leading-relaxed" style={{ color: "#4A3728" }}>
            Emirates Transport&apos;s rent-a-car division was managing agreements, payments, and fleet visibility through a fragmented mix of spreadsheets, paper forms, and phone coordination. Monthly invoicing required manual cross-referencing with the Salik toll system and the RTA fines database — a slow, error-prone process that generated frequent billing disputes with corporate clients. When accidents occurred, reconstructing what happened relied entirely on driver accounts, making insurance claims time-consuming and sometimes impossible to verify. Fleet managers had no real-time view of where vehicles were or how they were being used.
          </p>
        </section>

        {/* My Role */}
        <section className="rounded-2xl p-8" style={{ background: "#F0E8DF" }}>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            My Role
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            Product Owner & Business Analyst
          </h3>
          <ul className="space-y-3">
            {[
              "Mapped the full rental lifecycle — from booking and agreement to return, invoicing, and dispute resolution",
              "Designed the Salik and fines auto-integration: defining data fetch frequency, mapping charges to agreements, and handling exceptions",
              "Specified the dynamic invoicing engine: pro-rata logic, extension handling, and credit/debit note workflows",
              "Worked with GPS hardware vendors to define the telemetry data schema and storage/retrieval requirements",
              "Defined the incident documentation workflow and its integration with the insurance claim process",
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
            Fully integrated rental platform with GPS backbone
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

        {/* Impact */}
        <section className="rounded-2xl p-8" style={{ background: "#1C1410" }}>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C9974A" }}>
            Impact & Results
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-8" style={{ color: "#FAF7F4" }}>
            Accurate billing, visible fleet, confident insurance claims
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
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
            * Impact estimates based on industry benchmarks for fleet management and rental operations platforms.
          </p>
        </section>

        {/* Key Learnings */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#C2553A" }}>
            Key Learnings
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "External integrations need graceful degradation", body: "Salik and fines APIs weren&apos;t always available. The system needed to queue, retry, and flag rather than fail silently — trust in invoicing depended on it." },
              { title: "GPS data is only valuable if it&apos;s interpretable", body: "Raw telemetry means nothing to a fleet manager. The product's job was to transform coordinates into actionable fleet intelligence and legal evidence." },
              { title: "Corporate clients need audit trails, not summaries", body: "Corporate billing disputes required detailed breakdowns — not just totals. Transparency at the line-item level was what eliminated most disputes." },
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
