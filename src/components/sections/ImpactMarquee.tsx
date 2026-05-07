import { IMPACT_MARQUEE_ITEMS } from "@/lib/constants";

export default function ImpactMarquee() {
  const doubled = [...IMPACT_MARQUEE_ITEMS, ...IMPACT_MARQUEE_ITEMS];

  return (
    <section style={{ background: "#1C1410" }} className="overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3">
            <span
              className="font-heading text-sm font-semibold tracking-wide"
              style={{ color: "#FAF7F4" }}
            >
              {item}
            </span>
            <span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ background: "#C2553A" }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
