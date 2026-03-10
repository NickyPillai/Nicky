import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Users, BarChart3, Shield } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Smart Drive Testing System Case Study",
  description:
    "AI-powered driver evaluation system for Dubai RTA using computer vision and sensor-fusion to automate road test assessments.",
};

export default function SmartDriveTestingSystem() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#work"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <p className="mb-2 text-sm font-semibold tracking-wider uppercase text-primary-200">
            Case Study
          </p>
          <h1 className="font-heading text-4xl font-bold lg:text-5xl">
            Smart Drive Testing System
          </h1>
          <p className="mt-4 text-lg text-white/90">
            AI-powered intelligent driver evaluation system for Dubai RTA
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["AI/ML", "Computer Vision", "IoT", "Government", "Sensor Fusion"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Problem */}
        <section className="mb-16">
          <h2 className="font-heading mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <div className="rounded-lg bg-primary-50 p-2">
              <BarChart3 className="text-primary-600" size={24} />
            </div>
            The Strategic Vision & Problem Statement
          </h2>
          <p className="leading-relaxed text-gray-700">
            As the lead Product Manager, I spearheaded the digital transformation of the
            Dubai RTA Driver Licensing process. The core challenge was the inherent subjectivity
            and human bias in high-stakes road testing. Manual evaluations were susceptible to
            examiner fatigue, mood, and situational oversights, leading to inconsistent results.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Furthermore, the lack of objective data made grievance resolution difficult and left
            the department vulnerable to compliance risks and a &quot;hush money&quot; culture. My vision
            was to replace subjective judgment with an evidence-based, AI-augmented workflow that
            prioritized integrity and public trust.
          </p>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <h2 className="font-heading mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <div className="rounded-lg bg-primary-50 p-2">
              <Shield className="text-primary-600" size={24} />
            </div>
            The Solution
          </h2>
          <p className="leading-relaxed text-gray-700">
            We shipped a Computer Vision and Sensor-Fusion analysis system designed as an
            &quot;AI co-pilot&quot; that automatically detected critical driving errors and watermarked
            them onto a synchronized video feed. This eliminated &quot;he-said, she-said&quot; disputes
            by providing a single source of truth.
          </p>

          <div className="mt-8 rounded-xl bg-gray-50 p-6">
            <h3 className="font-heading mb-4 text-lg font-bold text-gray-900">
              Key Technical Components
            </h3>
            <ul className="space-y-3">
              {[
                "Computer Vision system for real-time driving error detection",
                "Sensor-fusion integration (multiple IoT data sources)",
                "Automated mistake-tagging with video watermarking",
                "Real-time alert system for examiners and monitoring centers",
                "Strict AI-driven SOPs and compliance framework",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="mt-0.5 flex-shrink-0 text-primary-500" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Users */}
        <section className="mb-16">
          <h2 className="font-heading mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <div className="rounded-lg bg-primary-50 p-2">
              <Users className="text-primary-600" size={24} />
            </div>
            End-Users
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-heading mb-2 font-bold text-gray-900">
                Internal Stakeholders
              </h3>
              <p className="text-gray-600">
                RTA Examiners and Monitoring Centers received real-time alerts
                and automated mistake-tagging to support their evaluations.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-heading mb-2 font-bold text-gray-900">
                External Customers
              </h3>
              <p className="text-gray-600">
                The Dubai public gained transparency in their licensing journey,
                with the ability to review AI-flagged test videos.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <h2 className="font-heading mb-6 text-2xl font-bold text-gray-900">
            Impact & Results
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                metric: "33%",
                label: "Judgement Logic Automated",
                description:
                  "Successfully automated mistake-judgement logic, reducing cognitive load on examiners.",
              },
              {
                metric: "100%",
                label: "Regulatory Compliance",
                description:
                  "AI-driven SOPs and monitoring center eliminated mishandling and bribery risks.",
              },
              {
                metric: "Surge",
                label: "Customer Happiness",
                description:
                  "Candidates reviewing AI-flagged test videos drove massive improvement in satisfaction scores.",
              },
              {
                metric: "Data-Driven",
                label: "Governance",
                description:
                  "Authorities moved from anecdotal oversight to precise process monitoring and examiner evaluation.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border-l-4 border-primary-600 bg-white p-6 shadow-md"
              >
                <div className="font-heading text-2xl font-bold text-primary-600">
                  {item.metric}
                </div>
                <div className="mt-1 font-semibold text-gray-900">
                  {item.label}
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-primary-50 p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-gray-900">
            Interested in similar product transformation?
          </h2>
          <p className="mt-2 text-gray-600">
            Let&apos;s discuss how I can help drive your product strategy and AI initiatives.
          </p>
          <div className="mt-6">
            <Button href="/services" size="lg">
              Connect for Services
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
