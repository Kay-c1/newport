"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function AmbientBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const blobs = gsap.utils.toArray<HTMLElement>(".ambient-blob")

      blobs.forEach((blob, index) => {
        gsap.to(blob, {
          x: index % 2 === 0 ? 80 : -60,
          y: index % 2 === 0 ? -40 : 70,
          scale: index % 2 === 0 ? 1.12 : 0.9,
          rotation: index === 1 ? 20 : -15,
          duration: 9 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.8,
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="ambient-backdrop" aria-hidden="true">
      <div className="ambient-blob ambient-blob-a" />
      <div className="ambient-blob ambient-blob-b" />
      <div className="ambient-blob ambient-blob-c" />
    </div>
  )
}
