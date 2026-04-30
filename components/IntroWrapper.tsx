"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import dynamic from "next/dynamic"

const Intro = dynamic(() => import("./Intro"), { ssr: false })

export default function IntroWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {/* Intro Screen */}
      {!introComplete && (
        <Intro onComplete={() => setIntroComplete(true)} />
      )}

      {/* Main Content — fades in after intro */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}