import Link from "next/link";
import { ArrowLeft, CheckCircle2, Smartphone, Truck, Monitor, Zap } from "lucide-react";

const features = [
  {
    icon: <Smartphone size={22} />,
    title: "Public Mobile App",
    points: [
      "Location-based service request — pin drop or GPS auto-detect",
      "Service catalogue: tyre change, car tow, jump start, ambulance, and more",
      "Transparent estimated cost shown before confirmation",
      "Real-time tracking of the dispatched recovery vehicle",
      "Digital payment on service completion — card or wallet",
    ],
  },
  {
    icon: <Truck size={22} />,
    title: "Dispatch Driver App",
    points: [
      "Instant job notification with customer location, service type, and route",
      "Step-by-step status updates: en route → arrived → in progress → completed",
      "Photo capture for job verification and insurance documentation",
      "Integrated navigation to customer location",
    ],
  },
  {
    icon: <Monitor size={22} />,
    title: "Operations & Admin Portal",
    points: [
      "Auto-dispatch algorithm selects the nearest available and most suitable vehicle-driver pair",
      "Manual override when algorithm cannot find an optimal match (human fallback)",
      "Live fleet map showing all vehicles, availability status, and active jobs",
      "Full job history, pending queue, and SLA monitoring dashboard",
      "Vehicle and driver management with assignment rules",
    ],
  },
  {
    icon: <Zap size={22} />,
    title: "Smart Dispatch Logic",
    points: [
      "Considers vehicle type capability, driver certification, current location, and job priority",
      "Estimated time of arrival calculated dynamically using real-time traffic data",
      "Graceful fallback to human dispatcher when confidence is below threshold",
      "All dispatch decisions logged for SLA audit and performance review",
    ],
  },
];

const impacts = [
  { number: "~40%", label: "Reduction in average response time", sub: "Smart auto-dispatch vs. manual phone-based coordination" },
  { number: "100%", label: "Digital job logging and audit trail", sub: "Every request, dispatch, and completion captured in real time" },
  { number: "~20%", label: "Improvement in fleet utilization", sub: "Nearest-vehicle dispatch reduces dead miles and idle time" },
  { number: "0", label: "Manual dispatch errors on auto-routed jobs", sub: "Algorithm-driven selection eliminates coordination mistakes" },
];

export default function RoadsideRecoveryCase() {
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
            {["Transport", "SaaS", "Mobile", "Auto-Dispatch"].map((tag) => (
              <span key={tag} className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(250,247,244,0.15)", color: "#FAF7F4" }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-3xl font-bold leading-tight md:text-5xl" style={{ color: "#FAF7F4" }}>
            Roadside Recovery Assistance System
          </h1>
          <p className="mt-4 text-lg" style={{ color: "rgba(250,247,244,0.75)" }}>
            An Uber-style on-demand platform for roadside assistance — real-time dispatch, smart ETA, and seamless payment for stranded motorists across the UAE.
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: "#C9974A" }}>
            Client: Emirates Transport
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
            Stranded drivers had no reliable, fast way to get help
          </h3>
          <p className="text-base leading-relaxed" style={{ color: "#4A3728" }}>
            Before this system, a driver stranded on the road had to call a hotline, describe their location verbally, wait on hold, and hope the dispatcher sent the right vehicle. There was no visibility into ETA, no digital confirmation, and no systematic way to identify the nearest available recovery unit. Dispatchers worked from spreadsheets and phone calls — a high-friction, error-prone process that resulted in long response times and low customer satisfaction. Emirates Transport needed a solution that matched the immediacy and transparency of consumer apps like Uber and Careem, applied to emergency roadside services.
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
              "Defined full product scope across public app, dispatch app, and admin portal — mapping workflows for each persona",
              "Designed the auto-dispatch algorithm logic: vehicle type matching, proximity ranking, driver availability, and fallback rules",
              "Led requirement sessions with Emirates Transport operations team to understand existing dispatch workflows and pain points",
              "Specified the payment flow: service catalogue, dynamic pricing display, and post-completion payment capture",
              "Worked with engineering to define real-time tracking architecture and driver status sync protocol",
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
            Three connected layers: request, dispatch, and command
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
            Faster response, smarter fleet utilization
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
              { title: "Algorithm confidence needs a human floor", body: "The auto-dispatch fallback to a human operator was the most critical design decision — it prevented bad matches from being forced through when data was ambiguous." },
              { title: "Transparency reduces anxiety more than speed", body: "Showing the driver's live location and ETA had a bigger impact on perceived service quality than actual response time improvement." },
              { title: "Fleet management and public UX are one product", body: "Optimizing the dispatch side without considering the public app experience creates mismatches in expectation vs. delivery." },
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
