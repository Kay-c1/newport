"use client"

import { useEffect, useRef, ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  style?: React.CSSProperties
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.7,
  style = {},
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Initial hidden state
    const getInitialTransform = () => {
      switch (direction) {
        case "up": return `translateY(${distance}px)`
        case "down": return `translateY(-${distance}px)`
        case "left": return `translateX(${distance}px)`
        case "right": return `translateX(-${distance}px)`
        case "none": return "none"
        default: return `translateY(${distance}px)`
      }
    }

    el.style.opacity = "0"
    el.style.transform = getInitialTransform()
    el.style.transition = `opacity ${duration}s ease ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "none"
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction, distance, duration])

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}