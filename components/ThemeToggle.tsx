"use client"

import { useEffect, useState } from "react"

type Theme = "light" | "dark"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme") as Theme | null
    const initial = saved === "dark" || saved === "light" ? saved : "light"
    setTheme(initial)
    document.documentElement.dataset.theme = initial
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light"
    setTheme(next)
    document.documentElement.dataset.theme = next
    window.localStorage.setItem("portfolio-theme", next)
  }

  const label = !mounted ? "LIGHT" : theme.toUpperCase()
  const nextLabel = theme === "light" ? "DARK MODE" : "LIGHT MODE"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={nextLabel}
      title={nextLabel}
      className="theme-toggle"
    >
      <span className="theme-toggle-dot" />
      <span>{label}</span>
      <span className="theme-toggle-arrow">↔</span>
    </button>
  )
}
