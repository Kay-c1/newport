"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: "01",
    title: "SelfOrder System",
    category: "Backend Lead · Internship",
    period: "2025–2026",
    company: "System Sense Corp.",
    description:
      "Led backend development for an ordering platform, delivering 8+ APIs, transaction processing, device management, multilingual menus, sales analytics, and batch aggregation.",
    tags: ["Node.js", "NestJS", "TypeORM", "MySQL", "Docker"],
  },
  {
    number: "02",
    title: "Minimalist AI Plant Monitoring",
    category: "Thesis · AI / Computer Vision",
    period: "2025–2026",
    company: "Holy Angel University",
    description:
      "Built an end-to-end plant monitoring system combining computer vision, AI-assisted disease detection, growth monitoring, FastAPI services, Firebase data, and a Next.js interface.",
    tags: ["Python", "FastAPI", "TensorFlow", "Computer Vision", "Firebase"],
  },
  {
    number: "03",
    title: "AI Sleep Apnea Detector",
    category: "Full Stack · Freelance",
    period: "2026",
    company: "Sleep Well",
    description:
      "Designed and implemented a full-stack application for AI-assisted sleep analysis, connecting a Next.js interface to FastAPI services and real-time Firebase data.",
    tags: ["Next.js", "FastAPI", "Python", "Firebase", "ML"],
  },
  {
    number: "04",
    title: "Fate Architect",
    category: "Frontend · Freelance",
    period: "2026",
    company: "Self",
    description:
      "A custom responsive experience built from scratch with Next.js and GSAP, focused on art direction, motion, and a polished interactive presentation.",
    tags: ["Next.js", "GSAP", "TypeScript", "Tailwind"],
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card")
      if (cards.length < 2) return

      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 48)

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + getDistance() * 1.35,
          pin: true,
          scrub: 1.05,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: index === 0 ? 1 : 0.35, scale: index === 0 ? 1 : 0.94 },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: undefined,
              start: "left 80%",
              end: "left 35%",
              scrub: true,
            },
          },
        )
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 story-grid opacity-60" />

      <div className="relative z-10 flex h-screen flex-col justify-between px-6 py-20 md:px-10 lg:px-16">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-zinc-600">
              02 / Selected work
            </p>
            <h2 className="text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]">
              Built.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs leading-6 text-zinc-600 md:block">
            Scroll through the work. Each project is a chapter in how I build
            systems.
          </p>
        </div>

        <div ref={trackRef} className="flex w-max items-center gap-6 py-10 md:gap-10">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className="project-card group relative flex h-[54vh] w-[82vw] max-w-[1000px] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-6 md:p-10 lg:p-12"
            >
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/[0.035] blur-3xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative flex items-start justify-between">
                <span className="font-mono text-xs text-zinc-600">
                  {project.number}
                </span>
                <span className="text-right text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  {project.period}
                  <br />
                  {project.company}
                </span>
              </div>

              <div className="relative max-w-4xl">
                <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  {project.category}
                </p>
                <h3 className="max-w-4xl text-[clamp(2.3rem,6vw,6.5rem)] font-black uppercase leading-[0.84] tracking-[-0.055em]">
                  {project.title}
                </h3>
                <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <span>Scroll →</span>
          <span>04 projects</span>
        </div>
      </div>
    </section>
  )
}
