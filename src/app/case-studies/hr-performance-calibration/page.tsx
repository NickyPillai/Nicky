import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, BarChart3, Users, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: <BarChart3 size={22} />,
    title: "Organisation-wide Performance View",
    points: [
      "Eagle-eye dashboard showing performance rating distribution across the entire organisation",
      "Drill-down by department, team, and manager to identify concentration of ratings",
      "Comparative view across calibration rounds and historical periods",
      "Visual heat maps highlighting rating outliers and patterns",
    ],
  },
  {
    icon: <Users size={22} />,
    title: "Calibration Workflow",
    points: [
      "Side-by-side employee comparison within and across teams",
      "Manager justification fields for rating deviations",
      "Calibration session tracking with approval workflows",
      "Automatic flagging of employees rated significantly above or below peer group norms",
    ],
  },
  {
    icon: <Sparkles size={22} />,
    title: "AI-Assisted Insights",
    points: [
      "LLM-powered analysis surfaces potential rating bias patterns",
      "Suggested calibration adjustments based on historical data and policy rules",
      "Natural language summaries of team performance distributions for HR presentations",
      "AI drafts calibration committee briefing notes automatically",
    ],
  },
  {
    icon: <Shield size={22} />,
    title: "Governance & Compliance",
    points: [
      "Full audit trail of all rating changes with timestamp and user attribution",
      "Role-based access control — managers see only their teams",
      "Calibration lock after finalization to prevent post-hoc changes",
      "Export-ready reports for HR leadership and board review",
    ],
  },
];

const impacts = [
  { number: "~60%", label: "Reduction in calibration session duration", sub: "Pre-built views replace manual spreadsheet preparation" },
  { number: "100%", label: "Audit trail on all rating changes", sub: "Every adjustment tracked with user and timestamp" },
  { number: "~40%", label: "Faster identification of rating outliers", sub: "Visual distribution highlights anomalies instantly" },
  { number: "AI", label: "Powered insight generation", sub: "LLM surfaces bias patterns humans would miss in large datasets" },
];

export default function HRCalibrationCase() {
  return (
    <main style={{ background: "#FAF7F4" }} className="min-h-screen">

      {/* Hero */}
      <section style={{ background: "linear-gradient(145deg, #C2553A 0%, #8B3320 100%)" }}
        className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/#ai" className="mb-8 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "rgba(250,247,244,0.75)" }}>
            <ArrowLeft size={16} /> Back to AI Projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {["AI / LLM", "SaaS", "HRMS", "Personal Project", "Live"].map((tag) => (
              <span key={tag} className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(250,247,244,0.15)", color: "#FAF7F4" }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-3xl font-bold leading-tight md:text-5xl" style={{ color: "#FAF7F4" }}>
            HR Performance Calibration Tool
          </h1>
          <p className="mt-4 text-lg" style={{ color: "rgba(250,247,244,0.75)" }}>
            A personal AI project built to demonstrate hands-on product thinking — a SaaS prototype that gives HR leaders an eagle-eye view of performance ratings to identify bias and course-correct before appraisals finalise.
          </p>

          <a
            href="https://hr-performance-calibration-tool.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: "#FAF7F4", color: "#C2553A" }}
          >
            <ExternalLink size={14} />
            Try the Live App
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">

        {/* Why Built */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            Why I Built This
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            From PM who writes specs to PM who ships products
          </h3>
          <p className="text-base leading-relaxed" style={{ color: "#4A3728" }}>
            After 9 years of defining requirements and working with engineering teams, I wanted to close the gap between strategy and execution — personally. This project was built using AI-assisted development tools (vibe coding with Claude) to go from idea to deployed product. It draws directly from my experience at Yomly, where performance calibration was a real operational pain point for HR managers conducting annual appraisals across large, distributed organisations.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#4A3728" }}>
            The calibration process in most companies still happens in long, exhausting committee meetings where managers compare ratings from memory and gut feel. This tool replaces that with a data-driven view — so the conversation can focus on exceptions and decisions, not data gathering.
          </p>
        </section>

        {/* My Role */}
        <section className="rounded-2xl p-8" style={{ background: "#F0E8DF" }}>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            How I Built It
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            Solo PM → Designer → Developer → Deployer
          </h3>
          <ul className="space-y-3">
            {[
              "Defined the product requirements from scratch — personas, user flows, and feature scope",
              "Designed UI wireframes and information architecture before writing a line of code",
              "Built using Claude Code and AI-assisted development (vibe coding) — Next.js + Vercel",
              "Implemented the LLM-powered insight layer using Claude API for rating pattern analysis",
              "Deployed to Vercel with full authentication and live demo access",
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
            What It Does
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-8" style={{ color: "#1C1410" }}>
            Data-driven calibration, powered by AI
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
            Projected Impact
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-8" style={{ color: "#FAF7F4" }}>
            Faster, fairer, more defensible appraisals
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
        </section>

        {/* Key Learnings */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#C2553A" }}>
            What I Learned
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Building is the best way to learn product gaps", body: "Going from spec to deployed app in days revealed edge cases and UX friction I would never have found in a document." },
              { title: "AI accelerates but doesn't replace product thinking", body: "The LLM wrote the code faster than I could. But the product decisions — what to build, for whom, and why — were entirely mine." },
              { title: "Domain knowledge is a superpower in AI-assisted dev", body: "Understanding how real HR calibration works let me prompt precisely, design accurately, and validate outputs the AI couldn't verify itself." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-5" style={{ background: "#F0E8DF" }}>
                <h4 className="font-heading font-bold text-sm mb-2" style={{ color: "#C2553A" }}>{item.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#4A3728" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3 pt-4">
          <a href="https://hr-performance-calibration-tool.vercel.app/login" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: "#C2553A", color: "#FAF7F4" }}>
            <ExternalLink size={14} />
            Try the Live App
          </a>
          <Link href="/#ai" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold border transition-all hover:-translate-y-0.5"
            style={{ border: "2px solid #C2553A", color: "#C2553A" }}>
            <ArrowLeft size={14} />
            Back to AI Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
