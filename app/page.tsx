import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Achievements from "@/components/Achievements";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import StatusBar from "@/components/StatusBar";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <OpenSource />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
      <StatusBar />
    </main>
  );
}
