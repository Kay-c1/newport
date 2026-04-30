"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"counting" | "name" | "exit">("counting")
  const [count, setCount] = useState(0)
  const [showName, setShowName] = useState(false)

  useEffect(() => {
    // Count from 0 to 100
    const duration = 2000
    const interval = 20
    const steps = duration / interval
    const increment = 100 / steps
    let current = 0

    const counter = setInterval(() => {
      current += increment
      if (current >= 100) {
        current = 100
        setCount(100)
        clearInterval(counter)

        // Show name after count finishes
        setTimeout(() => {
          setPhase("name")
          setShowName(true)
        }, 300)

        // Exit after name shows
        setTimeout(() => {
          setPhase("exit")
        }, 2000)

        // Tell parent we're done
        setTimeout(() => {
          onComplete()
        }, 2800)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)

    return () => clearInterval(counter)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#000000",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Counter */}
          <AnimatePresence mode="wait">
            {phase === "counting" && (
              <motion.div
                key="counter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  y: -20,
                  transition: { duration: 0.3 },
                }}
                style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "32px",
                }}
              >
                {/* Big Number */}
                <div
                  style={{
                    fontSize: "clamp(80px, 20vw, 200px)",
                    fontWeight: 900,
                    color: "white",
                    letterSpacing: "-8px",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                    minWidth: "3ch",
                    textAlign: "center",
                  }}
                >
                  {count}
                </div>

                {/* Progress Bar */}
                <div
                  style={{
                    width: "200px",
                    height: "1px",
                    backgroundColor: "#27272a",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      backgroundColor: "white",
                    }}
                    animate={{ width: `${count}%` }}
                    transition={{ duration: 0.02 }}
                  />
                </div>

                {/* Loading Label */}
                <span
                  style={{
                    color: "#3f3f46",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Loading
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Name Reveal */}
          <AnimatePresence>
            {showName && phase === "name" && (
              <motion.div
                key="name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0px",
                  textAlign: "center",
                  padding: "0 24px",
                }}
              >
                {/* First Name */}
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0,
                  }}
                  style={{
                    fontSize: "clamp(48px, 12vw, 140px)",
                    fontWeight: 900,
                    color: "white",
                    letterSpacing: "-4px",
                    lineHeight: 0.9,
                    textTransform: "uppercase",
                  }}
                >
                  Kristian
                </motion.div>

                {/* Last Name — outline */}
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15,
                  }}
                  style={{
                    fontSize: "clamp(48px, 12vw, 140px)",
                    fontWeight: 900,
                    color: "transparent",
                    WebkitTextStroke: "1px #52525b",
                    letterSpacing: "-4px",
                    lineHeight: 0.9,
                    textTransform: "uppercase",
                  }}
                >
                  Delos Santos
                </motion.div>

                {/* Role */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{
                    marginTop: "24px",
                    color: "#52525b",
                    fontSize: "clamp(11px, 2vw, 14px)",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}
                >
                  Backend Developer · Full Stack · AI & ML
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Corner Labels */}
          <div
            style={{
              position: "absolute",
              bottom: "32px",
              left: "32px",
              color: "#27272a",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Portfolio 2026
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "32px",
              right: "32px",
              color: "#27272a",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Mabalacat City, PH
          </div>
          <div
            style={{
              position: "absolute",
              top: "32px",
              left: "32px",
              color: "#27272a",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            KDS.
          </div>
          <div
            style={{
              position: "absolute",
              top: "32px",
              right: "32px",
              color: "#27272a",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Est. 2021
          </div>

          {/* Horizontal Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: "60px",
              left: "32px",
              right: "32px",
              height: "1px",
              backgroundColor: "#18181b",
              transformOrigin: "left",
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}