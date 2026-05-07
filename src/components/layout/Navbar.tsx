"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarDays } from "lucide-react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Impact", href: "/#impact" },
  { label: "Projects", href: "/#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (isHome) {
      e.preventDefault();
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(250, 247, 244, 0.95)" } : {}}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full font-heading text-sm font-bold transition-transform group-hover:scale-105"
            style={{ background: "#C2553A", color: "#FAF7F4" }}
          >
            NP
          </span>
          <span
            className="font-heading text-base font-semibold transition-colors"
            style={{ color: scrolled ? "#1C1410" : "#FAF7F4" }}
          >
            Nicky Pillai
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium transition-colors relative group"
              style={{ color: scrolled ? "#4A3728" : "rgba(250,247,244,0.85)" }}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full transition-all group-hover:w-full"
                style={{ background: "#C2553A" }}
              />
            </Link>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5"
            style={{ background: "#C2553A", color: "#FAF7F4" }}
          >
            <CalendarDays size={15} />
            Book a Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-1.5 transition-colors lg:hidden"
          style={{ color: scrolled ? "#1C1410" : "#FAF7F4" }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="border-t lg:hidden"
          style={{ background: "#FAF7F4", borderColor: "#F0E8DF" }}
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                style={{ color: "#4A3728" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#F0E8DF"; e.currentTarget.style.color = "#C2553A"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#4A3728"; }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold"
              style={{ background: "#C2553A", color: "#FAF7F4" }}
            >
              <CalendarDays size={15} />
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
