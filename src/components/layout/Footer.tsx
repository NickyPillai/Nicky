"use client";

import { Linkedin, Github, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ background: "#1C1410", borderColor: "#2D1B0E" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full font-heading text-sm font-bold"
              style={{ background: "#C2553A", color: "#FAF7F4" }}
            >
              NP
            </span>
            <div>
              <p className="font-heading text-sm font-semibold" style={{ color: "#FAF7F4" }}>
                Nicky Pillai
              </p>
              <p className="text-xs" style={{ color: "#C9974A" }}>
                Product Manager · Dubai, UAE
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-5 text-sm" style={{ color: "rgba(250,247,244,0.6)" }}>
            {["About", "Skills", "Experience", "Impact", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-terra"
                style={{ color: "rgba(250,247,244,0.55)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C2553A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,247,244,0.55)")}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors"
              style={{ color: "rgba(250,247,244,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C2553A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,247,244,0.55)")}
            >
              <Linkedin size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors"
              style={{ color: "rgba(250,247,244,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C2553A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,247,244,0.55)")}
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              aria-label="Email"
              className="transition-colors"
              style={{ color: "rgba(250,247,244,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C2553A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,247,244,0.55)")}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 border-t pt-6 text-center text-xs"
          style={{ borderColor: "#2D1B0E", color: "rgba(250,247,244,0.35)" }}
        >
          © {new Date().getFullYear()} Nicky Pillai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
