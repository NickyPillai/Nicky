import type { Metadata } from "next";
import {
  Target,
  Map,
  Zap,
  Rocket,
  GitBranch,
  FileText,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Product management consulting services including strategy development, roadmap planning, agile transformation, and digital transformation.",
};

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target size={32} />,
  Map: <Map size={32} />,
  Zap: <Zap size={32} />,
  Rocket: <Rocket size={32} />,
  GitBranch: <GitBranch size={32} />,
  FileText: <FileText size={32} />,
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold lg:text-5xl">
            Consulting Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            I help businesses build better products through strategic consulting
            and hands-on execution. Let&apos;s turn your product vision into reality.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-600">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-heading mb-3 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-8 text-center text-3xl font-bold text-gray-900">
            How We Can Work Together
          </h2>
          <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-primary-600" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Advisory",
                description:
                  "Hourly or per-session strategic guidance on product decisions, roadmap reviews, and team coaching.",
              },
              {
                title: "Project-Based",
                description:
                  "End-to-end engagement for specific initiatives like MVP development, process mapping, or agile rollouts.",
              },
              {
                title: "Fractional PM",
                description:
                  "Part-time or interim product leadership for companies needing experienced PM capacity.",
              },
            ].map((model) => (
              <div
                key={model.title}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center"
              >
                <h3 className="font-heading mb-2 text-lg font-bold text-primary-600">
                  {model.title}
                </h3>
                <p className="text-sm text-gray-600">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-2 text-center text-3xl font-bold text-gray-900">
            Connect With Me
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-primary-600" />
          <p className="mb-8 text-center text-gray-600">
            Share your project details and I&apos;ll get back to you within 24-48 hours
            to discuss how we can work together.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
