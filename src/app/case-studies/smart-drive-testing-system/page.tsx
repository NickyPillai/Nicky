import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Users, BarChart3, Shield, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Drive Testing System | Nicky Pillai",
  description:
    "AI-powered driver evaluation system for Dubai RTA using computer vision and sensor-fusion to automate road test assessments.",
};

const impacts = [
  { number: "33%", label: "Judgement Logic Automated", sub: "Mistake-detection logic removed from manual examiner judgement, standardizing evaluations." },
  { number: "100%", label: "Regulatory Compliance", sub: "AI-driven SOPs and monitoring center eliminated mishandling and bribery risks." },
  { number: "Surge", label: "Customer Satisfaction", sub: "Candidates reviewing AI-flagged test videos drove a significant improvement in satisfaction scores." },
  { number: "Data-Driven", label: "Governance", sub: "Moved from anecdotal oversight to precise process monitoring and examiner performance evaluation." },
];

export default function SmartDriveTestingSystem() {
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
            {["AI/ML", "Computer Vision", "IoT", "Government", "Sensor Fusion"].map((tag) => (
              <span key={tag} className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(250,247,244,0.15)", color: "#FAF7F4" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-3xl font-bold leading-tight md:text-5xl" style={{ color: "#FAF7F4" }}>
            Smart Drive Testing System
          </h1>
          <p className="mt-4 text-lg" style={{ color: "rgba(250,247,244,0.75)" }}>
            AI-powered intelligent driver evaluation system — an &ldquo;AI co-pilot&rdquo; for Dubai RTA road test examiners using computer vision and sensor fusion to automate 33% of judgement logic.
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: "#C9974A" }}>
            Client: Road Transport Authority (RTA) · Government of Dubai
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">

        {/* Problem */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            The Challenge
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            Subjectivity and human bias in high-stakes road testing
          </h3>
          <p className="text-base leading-relaxed" style={{ color: "#4A3728" }}>
            The Dubai RTA Driver Licensing process relied entirely on manual evaluation by human examiners. This created systemic risks: examiner fatigue, mood variation, and situational oversights led to inconsistent test results across candidates. The lack of objective data made grievance resolution difficult, and the department faced compliance risks from an anecdotal evaluation culture. There was no way to audit an examiner&apos;s decisions or demonstrate consistency to candidates who disputed their results.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#4A3728" }}>
            The vision was to replace subjective judgment with an evidence-based, AI-augmented workflow that prioritized integrity, transparency, and public trust — while keeping human examiners in the decision loop.
          </p>
        </section>

        {/* My Role */}
        <section className="rounded-2xl p-8" style={{ background: "#F0E8DF" }}>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            My Role
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            Product Manager — full lifecycle ownership
          </h3>
          <ul className="space-y-3">
            {[
              "Defined the AI co-pilot product concept — framing it as augmenting examiners, not replacing them, to gain stakeholder buy-in",
              "Orchestrated 9 cross-functional teams across Engineering, R&D, IoT, Sales, and Marketing",
              "Translated legal and regulatory compliance requirements into product requirements and AI decision boundaries",
              "Designed the video watermarking workflow and evidence chain for dispute resolution",
              "Generated $5M in deal value by leading RFP solutioning and presenting to C-level RTA stakeholders",
              "Transformed a project delivery scope into an investment-ready SaaS model with Lean Canvas and 5-year roadmap",
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
            An AI co-pilot that turns driving tests into verifiable data
          </h3>

          <div className="space-y-6">
            {[
              {
                icon: <Cpu size={22} />,
                title: "Computer Vision & Sensor Fusion",
                points: [
                  "Real-time detection of critical driving errors via multiple camera feeds",
                  "Sensor fusion combines vehicle telemetry, GPS, and vision data into a unified feed",
                  "Automated mistake-tagging with timestamp and error classification",
                  "Synchronized video watermarking — errors are permanently marked on the test recording",
                ],
              },
              {
                icon: <Shield size={22} />,
                title: "Compliance & Governance Layer",
                points: [
                  "AI-driven Standard Operating Procedures enforce consistent evaluation criteria",
                  "Monitoring center receives real-time alerts on all error detections",
                  "Full audit trail: every AI flag, examiner override, and test outcome recorded",
                  "Candidate-facing transparency — test recordings with AI annotations available for review",
                ],
              },
              {
                icon: <Users size={22} />,
                title: "Examiner Experience",
                points: [
                  "AI acts as a co-pilot — flags errors, but examiner retains final authority",
                  "Real-time dashboard shows AI confidence score per error flag",
                  "Reduced cognitive load: examiner focuses on driving quality, AI handles error cataloguing",
                  "Post-test summary with full AI-flagged event log for review",
                ],
              },
            ].map((f) => (
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
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Internal — RTA Examiners & Monitoring",
                body: "Examiners receive real-time AI alerts and automated mistake-tagging. Monitoring centers gain live dashboards with compliance oversight across all active tests.",
              },
              {
                title: "External — Dubai Public (Test Candidates)",
                body: "Candidates can review AI-flagged test recordings, providing full transparency into their evaluation and a verifiable basis for any dispute or appeal.",
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
            From subjective evaluations to evidence-based governance
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
            Key Learnings
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Frame AI as augmentation, not replacement", body: "Positioning the system as an examiner co-pilot — not an autonomous judge — was the key to stakeholder acceptance from RTA leadership and examiners." },
              { title: "Government products live and die on trust", body: "The video audit trail wasn't a feature — it was the entire value proposition for both the RTA and the public. Evidence is currency in government." },
              { title: "9 teams need one shared north star", body: "Orchestrating Engineering, R&D, IoT, Sales, and Marketing required a single product vision document that every team could anchor decisions to." },
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
