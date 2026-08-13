import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Skills from "@/src/components/sections/Skills";
import Projects from "@/src/components/sections/Projects";
import Experience from "@/src/components/sections/Experience";
import Contact from "@/src/components/sections/Contact";

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
    >
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}