import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Contact, Experience, Footer, Projects, Services, Technologies } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Experience />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
