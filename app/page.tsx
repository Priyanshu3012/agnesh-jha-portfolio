import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Skills />
        <Awards />
        <Testimonials />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
