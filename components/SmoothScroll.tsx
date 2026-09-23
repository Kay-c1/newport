"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(2, -10 * t),
      orientation: "vertical",
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.25,
    })

    const updateScrollTrigger = () => {
      ScrollTrigger.update()
    }

    lenis.on("scroll", updateScrollTrigger)

    const ticker = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const anchor = target.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      const element = document.querySelector(href)
      if (!element) return

      event.preventDefault()

      lenis.scrollTo(element as HTMLElement, {
        offset: -64,
        duration: 1.35,
        easing: (t) => 1 - Math.pow(2, -10 * t),
      })
    }

    document.addEventListener("click", handleAnchorClick)
    ScrollTrigger.refresh()

    return () => {
      document.removeEventListener("click", handleAnchorClick)
      lenis.off("scroll", updateScrollTrigger)
      gsap.ticker.remove(ticker)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      lenis.destroy()
    }
  }, [])

  return null
}
