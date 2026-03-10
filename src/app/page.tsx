import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Impact from "@/components/sections/Impact";
import Projects from "@/components/sections/Projects";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <About />
      <Stats />
      <Skills />
      <Experience />
      <Impact />
      <Projects />
      <ServicesOverview />
      <Certifications />
      <Contact />
    </>
  );
}
