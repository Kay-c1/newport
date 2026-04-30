"use client"

import { useEffect, useRef } from "react"

interface RevealLineProps {
  delay?: number
  direction?: "left" | "right" | "center"
  color?: string
  height?: number
  style?: React.CSSProperties
}

export default function RevealLine({
  delay = 0,
  direction = "left",
  color = "#27272a",
  height = 1,
  style = {},
}: RevealLineProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Initial state
    el.style.transform =
      direction === "right"
        ? "scaleX(0)"
        : direction === "center"
        ? "scaleX(0)"
        : "scaleX(0)"

    el.style.transformOrigin =
      direction === "right"
        ? "right"
        : direction === "center"
        ? "center"
        : "left"

    el.style.transition = `transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = "scaleX(1)"
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction])

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: `${height}px`,
        backgroundColor: color,
        ...style,
      }}
    />
  )
}