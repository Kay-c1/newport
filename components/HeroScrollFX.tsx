"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HeroScrollFX() {
  const scopeRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    const ctx = gsap.context(() => {
      gsap.to(".hero-orb", {
        yPercent: -35,
        rotation: 70,
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      })

      gsap.to(".hero-title", {
        yPercent: -16,
        letterSpacing: "-0.085em",
        opacity: 0.18,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "80% top",
          scrub: 1,
        },
      })

      gsap.to(".hero-meta", {
        y: -80,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#hero",
          start: "25% top",
          end: "70% top",
          scrub: true,
        },
      })
    }, scope)

    return () => ctx.revert()
  }, [])

  return <div ref={scopeRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />
}
