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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      {/* Main Nav Bar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled || open
            ? "rgba(0,0,0,0.98)"
            : "transparent",
          borderBottom: scrolled && !open
            ? "1px solid #27272a"
            : "none",
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
            height: "64px",
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
              zIndex: 60,
              flexShrink: 0,
            }}
          >
            KDS<span style={{ color: "#52525b" }}>.</span>
          </a>

          {/* Desktop Links — hidden on mobile */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
            className="desktop-nav"
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

          {/* Desktop Hire Me — hidden on mobile */}
          <a
            href="mailto:delossantoskristian5@gmail.com"
            className="desktop-nav"
            style={{
              color: "white",
              border: "1px solid #3f3f46",
              padding: "8px 20px",
              borderRadius: "999px",
              fontSize: "13px",
              textDecoration: "none",
              transition: "all 0.2s",
              flexShrink: 0,
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

          {/* Hamburger — only on mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-nav"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              zIndex: 60,
              flexShrink: 0,
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "white",
                transition: "all 0.3s ease",
                transform: open
                  ? "rotate(45deg) translateY(7px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "white",
                transition: "all 0.3s ease",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "white",
                transition: "all 0.3s ease",
                transform: open
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
          backgroundColor: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          transition: "all 0.4s ease",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        {/* Mobile Nav Links */}
        {links.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{
              color: "white",
              fontSize: "clamp(32px, 10vw, 56px)",
              fontWeight: 800,
              textDecoration: "none",
              letterSpacing: "-1px",
              padding: "8px 24px",
              transition: "all 0.2s",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transitionDelay: open ? `${i * 0.05}s` : "0s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#71717a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "white")
            }
          >
            {link.label}
          </a>
        ))}

        {/* Divider */}
        <div
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "#27272a",
            margin: "16px 0",
          }}
        />

        {/* Mobile Hire Me Button */}
        <a
          href="mailto:delossantoskristian5@gmail.com"
          onClick={() => setOpen(false)}
          style={{
            color: "white",
            border: "1px solid #3f3f46",
            padding: "14px 40px",
            borderRadius: "999px",
            fontSize: "14px",
            textDecoration: "none",
            transition: "all 0.2s",
            opacity: open ? 1 : 0,
            transitionDelay: open ? "0.25s" : "0s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "white"
            e.currentTarget.style.color = "black"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
            e.currentTarget.style.color = "white"
          }}
        >
          Hire Me
        </a>

        {/* Bottom Info */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "0",
            right: "0",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 32px",
          }}
        >
          <span
            style={{
              color: "#27272a",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Portfolio 2026
          </span>
          <span
            style={{
              color: "#27272a",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Mabalacat City, PH
          </span>
        </div>
      </div>

      {/* CSS for show/hide desktop vs mobile */}
      <style>{`
        .desktop-nav {
          display: flex !important;
        }
        .mobile-nav {
          display: none !important;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}