import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import About from "@/components/About"
import Footer from "@/components/Footer"
import IntroWrapper from "@/components/IntroWrapper"

export default function Home() {
  return (
    <IntroWrapper>
      <main className="min-h-screen bg-black overflow-x-hidden">
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <Skills />
        <About />
        <Footer />
      </main>
    </IntroWrapper>
  )
}