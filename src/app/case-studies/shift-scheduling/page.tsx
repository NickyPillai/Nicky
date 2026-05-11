import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, CalendarClock, ShieldCheck, Clock, Users, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Shift & Scheduling Module | Nicky Pillai",
  description:
    "How a net-new Shift & Scheduling module expanded Yomly's TAM by 27%, unlocking Logistics and Retail verticals through a phased MVP with smart conflict validation.",
};

const impacts = [
  { number: "27%", label: "TAM Expansion", sub: "Instantly unlocked Logistics and F&B verticals that were previously unserviceable due to shift-based workforce requirements." },
  { number: "~70%", label: "Scheduling Time Reduced", sub: "Automated conflict validation and smart defaults compress manual shift planning from hours to minutes." },
  { number: "~60%", label: "Scheduling Conflicts Prevented", sub: "Built-in rules checking leave, working hour caps, permitted locations, and existing schedules catch errors before they happen." },
  { number: "~50%", label: "Reduction in Payroll Discrepancies", sub: "Shift data feeding directly into Time & Attendance eliminated manual interpretation errors at payroll processing." },
  { number: "Multi-TZ", label: "Timezone & Overnight Support", sub: "Handles complex scheduling across multiple time zones and overnight shift boundaries — critical for GCC operations." },
  { number: "A/B", label: "Layout Testing", sub: "Two layout variants tested with planners to identify which reduced cognitive load and planning errors most effectively." },
];

const features = [
  {
    icon: <CalendarClock size={22} />,
    title: "Shift Planning Module",
    points: [
      "Drag-and-drop shift builder with day/week/month view across multiple employees",
      "A/B tested two planning layouts — shift based vs. employee based to identify the lower-friction workflow",
      "Multi-timezone support: plan across different country operations in a single view",
      "Overnight shift handling with correct day-boundary logic for hours and pay calculation",
    ],
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Intelligent Conflict Validation",
    points: [
      "Real-time check against approved leave — prevents scheduling employees on confirmed leave days",
      "Working hours cap enforcement: flags assignments that would breach weekly or daily hour limits",
      "Location permission rules: validates that employees are authorised for the shift's workplace location",
      "Overlap detection: prevents double-booking across existing schedules",
      "Conflict summary shown to planner with action options — not silent blocking",
    ],
  },
  {
    icon: <Clock size={22} />,
    title: "Time & Attendance Integration",
    points: [
      "Shift schedule feeds directly into Time & Attendance for automatic clockin/clockout matching",
      "Attendance variance reports: actual vs. planned hours per employee and per shift",
      "Overtime logged automatically when actual hours exceed planned shift",
      "Absence marking for no-shows against scheduled shifts",
      "Data flows cleanly into payroll calculation — no manual reconciliation required",
    ],
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Manager & HR Dashboard",
    points: [
      "Coverage view: see how many employees are scheduled vs. required per shift slot",
      "Employee availability overview: who is on leave, who is scheduled, who is free",
      "Shift summary exports for department heads and compliance reporting",
    ],
  },
];

export default function ShiftScheduling() {
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
            {["HRMS", "SaaS", "B2B", "Workforce Management", "Shift Planning"].map((tag) => (
              <span key={tag} className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(250,247,244,0.15)", color: "#FAF7F4" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-3xl font-bold leading-tight md:text-5xl" style={{ color: "#FAF7F4" }}>
            Shift & Scheduling Module
          </h1>
          <p className="mt-4 text-lg" style={{ color: "rgba(250,247,244,0.75)" }}>
            A net-new module that unlocked 27% TAM expansion for Yomly by enabling shift-based workforce planning — opening Logistics and Retail verticals that were previously out of reach.
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: "#C9974A" }}>
            Product: Yomly · B2B HRMS SaaS · Dubai, UAE
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
            A great HRMS that enterprise couldn&apos;t use
          </h3>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4A3728" }}>
            Yomly had a strong HRMS core — Leave, Payroll, Benefits, Employee Data, Expense. The product served SMB and mid-market clients well. But when the sales team started pursuing enterprise accounts — particularly in Logistics, Retail, and Hospitality — they kept hitting the same wall: these businesses operated on rotational, shift-based workforces. Without a scheduling module, Yomly simply couldn&apos;t serve them.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4A3728" }}>
            Enterprise prospects with 24/7 operations, multi-location teams, and rotating shift patterns had their scheduling managed in spreadsheets or legacy tools entirely separate from their HRMS. This created reconciliation pain at every payroll cycle — manually matching attendance to planned shifts, chasing discrepancies, and re-entering data between systems. Yomly&apos;s inability to own this workflow was a disqualifier in enterprise RFPs.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#4A3728" }}>
            The solution wasn&apos;t to partner or integrate with a third-party scheduling tool — it was to build the capability natively, tightly integrated with Yomly&apos;s Time & Attendance and Payroll modules so the data flow was seamless and the value was compounded.
          </p>
        </section>

        {/* My Role */}
        <section className="rounded-2xl p-8" style={{ background: "#F0E8DF" }}>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            My Role
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            Product Manager — end-to-end ownership of a greenfield module
          </h3>
          <ul className="space-y-3">
            {[
              "Defined the TAM opportunity: scoped Logistics and Retail verticals and quantified the addressable client base that shift scheduling would unlock",
              "Led discovery with shift-based enterprise prospects to understand planning workflows, pain points, and must-have vs. nice-to-have requirements",
              "Designed and executed A/B tests on two scheduling layout approaches to determine the lower-friction planning UX before committing to a direction",
              "Defined the conflict validation ruleset: leave integration, hours cap, location permissions, overlap detection — and the UX for surfacing conflicts without blocking planners",
              "Scoped the phased MVP: delivered core scheduling and conflict validation first; T&A integration and payroll linkage in subsequent releases",
              "Managed cross-functional delivery across Engineering, UX, and QA, ensuring the module integrated cleanly with Yomly's existing data model",
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
            A smart, integrated scheduling module built for operational complexity
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

        {/* A/B Testing Callout */}
        <section className="rounded-2xl p-8" style={{ background: "#F0E8DF" }}>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C2553A" }}>
            Design Approach
          </h2>
          <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1C1410" }}>
            Two mental models, one right answer — decided by users
          </h3>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4A3728" }}>
            Before committing to a direction, we tested two fundamentally different planning paradigms with real users to understand how operational planners naturally think about scheduling:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "Approach A — Shift-Based View ✓ Chosen",
                body: "Shifts are defined first within each location, then employees are assigned to those slots. Planners think in terms of coverage: 'I need 3 people on the morning shift at Location X.' Each location's shifts are planned as a unit before moving to the next.",
              },
              {
                label: "Approach B — Employee-Based View",
                body: "All employees are listed as the primary axis, and shifts are assigned to each individual. Better suited for planners who think person-first: 'What is each employee working this week?' More useful for tracking individual workloads and availability.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-5" style={{ background: "#FAF7F4" }}>
                <h4 className="font-heading font-semibold text-sm mb-2" style={{ color: "#1C1410" }}>{item.label}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#4A3728" }}>{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed" style={{ color: "#4A3728" }}>
            User testing clearly favoured the shift-based view — planners found it more intuitive to build coverage slots first and assign people into them, rather than scheduling each person individually. The shift-based view was built as the default. The employee-based view was designed into the system architecture from the start so it can be offered as a one-click toggle in a subsequent release phase, for planners whose workflow naturally leans that way.
          </p>
        </section>

        {/* End Users */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#C2553A" }}>
            End Users
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "HR Managers & Planners",
                body: "Build and manage shift rosters across departments, locations, and time zones. Conflict validation reduces back-and-forth with employees and ops teams.",
              },
              {
                title: "Employees",
                body: "Visibility into their upcoming shifts, shift changes, and swap requests. Reduces scheduling surprises and improves trust in the employer.",
              },
              {
                title: "Payroll Teams",
                body: "Shift data flows into payroll automatically. No more end-of-month reconciliation between scheduling spreadsheets and HRMS records.",
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
            One module. 27% more addressable market.
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
            * TAM expansion reflects verified market analysis. Scheduling time reduction and conflict prevention figures are based on observed outcomes.
          </p>
        </section>

        {/* Key Learnings */}
        <section>
          <h2 className="font-heading text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#C2553A" }}>
            Key Learnings
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Validate UX before you build the backend", body: "Testing shift-based vs. employee-based layouts before engineering kicked off meant we committed to the right direction with confidence. User input, not assumption, made the call." },
              { title: "Integration is the product", body: "The scheduling module alone is table stakes. The value that locked in enterprise clients was the tight integration with T&A and Payroll — making Yomly a single source of truth for the employee lifecycle." },
              { title: "Conflict detection is not a feature, it's trust", body: "Planners don't just want to build schedules — they want to feel confident the schedule is right. Surfacing conflicts clearly, without blocking workflow, became the module's most appreciated capability." },
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
