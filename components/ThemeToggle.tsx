"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

type Theme = "light" | "dark"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme") as Theme | null
    const initial = saved === "dark" || saved === "light" ? saved : "light"
    setTheme(initial)
    document.documentElement.dataset.theme = initial
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light"
    setTheme(next)
    document.documentElement.dataset.theme = next
    window.localStorage.setItem("portfolio-theme", next)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={theme === "light" ? "Dark mode" : "Light mode"}
      className="theme-toggle"
    >
      <Sun size={14} className="theme-sun" />
      <span className="theme-toggle-divider" />
      <Moon size={14} className="theme-moon" />
    </button>
  )
}
