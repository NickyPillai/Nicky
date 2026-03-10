import { Linkedin, Github, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg font-bold text-gray-900">
              Nicky Pillai
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Senior Product Manager based in Dubai, UAE. Turning complex
              problems into scalable products.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-gray-900 uppercase">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              {["About", "Work", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-600 transition-colors hover:text-primary-600"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-gray-900 uppercase">
              Connect
            </h4>
            <div className="mt-3 flex gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-primary-600"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-primary-600"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-gray-500 transition-colors hover:text-primary-600"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-600">{SOCIAL_LINKS.email}</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nicky Pillai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
