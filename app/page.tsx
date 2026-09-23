import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import About from "@/components/About"
import Footer from "@/components/Footer"
import IntroWrapper from "@/components/IntroWrapper"
import ScrollProgress from "@/components/ScrollProgress"
import HeroScrollFX from "@/components/HeroScrollFX"

export default function Home() {
  return (
    <IntroWrapper>
      <main className="site-main relative min-h-screen overflow-x-hidden">
        <ScrollProgress />
        <HeroScrollFX />
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
