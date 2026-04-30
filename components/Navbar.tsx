"use client"
import { useState, useEffect } from "react"

const links = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid #27272a" : "none",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              color: "white",
              fontWeight: 800,
              fontSize: "20px",
              textDecoration: "none",
              letterSpacing: "-0.5px",
            }}
          >
            KDS<span style={{ color: "#52525b" }}>.</span>
          </a>

          {/* Desktop Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
            className="hidden-mobile"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "#a1a1aa",
                  textDecoration: "none",
                  fontSize: "14px",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "white")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#a1a1aa")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hire Me Button */}
          <a
            href="delossantoskristian5@gmail.com"
            style={{
              color: "white",
              border: "1px solid #3f3f46",
              padding: "8px 20px",
              borderRadius: "999px",
              fontSize: "13px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white"
              e.currentTarget.style.color = "black"
              e.currentTarget.style.borderColor = "white"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "white"
              e.currentTarget.style.borderColor = "#3f3f46"
            }}
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: "white",
                fontSize: "40px",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:your@email.com"
            onClick={() => setOpen(false)}
            style={{
              color: "white",
              border: "1px solid #3f3f46",
              padding: "12px 32px",
              borderRadius: "999px",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Hire Me
          </a>
        </div>
      )}

      {/* Hamburger — always visible on mobile */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          top: "20px",
          right: "24px",
          zIndex: 60,
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "8px",
        }}
        aria-label="Toggle menu"
      >
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            backgroundColor: "white",
            transition: "all 0.3s",
            transform: open ? "rotate(45deg) translateY(7px)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            backgroundColor: "white",
            transition: "all 0.3s",
            opacity: open ? 0 : 1,
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            backgroundColor: "white",
            transition: "all 0.3s",
            transform: open ? "rotate(-45deg) translateY(-7px)" : "none",
          }}
        />
      </button>
    </>
  )
}