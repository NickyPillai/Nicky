import HeroSection from "@/components/sections/HeroSection";
import ImpactMarquee from "@/components/sections/ImpactMarquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Impact from "@/components/sections/Impact";
import Projects from "@/components/sections/Projects";
import AIShowcase from "@/components/sections/AIShowcase";
import Certifications from "@/components/sections/Certifications";
import BookingSection from "@/components/sections/BookingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactMarquee />
      <About />
      <Impact />
      <Skills />
      <Experience />
      <Projects />
      <AIShowcase />
      <Certifications />
      <BookingSection />
    </>
  );
}
