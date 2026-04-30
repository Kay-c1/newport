"use client"

import ShinyText from "./ShinyText"
import ScrollReveal from "./ScrollReveal"
import RevealLine from "./RevealLine"

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ padding: "96px 0 40px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Top Reveal Line */}
        <RevealLine delay={0} direction="left" />

        {/* Big CTA */}
        <ScrollReveal direction="up" delay={0.2}>
          <div style={{ margin: "80px 0" }}>
            <span
              style={{
                color: "#52525b",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Get In Touch
            </span>

            <h2
              style={{
                marginTop: "8px",
                marginBottom: "32px",
              }}
            >
              <ShinyText
                text="Let's Build"
                speed={3}
                delay={0}
                color="#3f3f46"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={true}
                style={{
                  fontSize: "clamp(48px, 10vw, 120px)",
                  fontWeight: 900,
                  letterSpacing: "-3px",
                  lineHeight: 0.9,
                  display: "block",
                }}
              />
              <ShinyText
                text="Together."
                speed={3}
                delay={0.5}
                color="#27272a"
                shineColor="#71717a"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={true}
                style={{
                  fontSize: "clamp(48px, 10vw, 120px)",
                  fontWeight: 900,
                  letterSpacing: "-3px",
                  lineHeight: 0.9,
                  display: "block",
                }}
              />
            </h2>

            <a
              href="mailto:delossantoskristian5@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "clamp(14px, 2.5vw, 24px)",
                textDecoration: "none",
                marginTop: "16px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.opacity = "0.7")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.opacity = "1")
              }
            >
              <ShinyText
                text="delossantoskristian5@gmail.com →"
                speed={4}
                delay={0}
                color="#52525b"
                shineColor="#ffffff"
                spread={90}
                direction="left"
                pauseOnHover={true}
                style={{ fontSize: "clamp(14px, 2.5vw, 24px)" }}
              />
            </a>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <RevealLine delay={0.1} direction="right" />

        <ScrollReveal direction="up" delay={0.2}>
          <div
            style={{
              paddingTop: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <ShinyText
              text="KDS."
              speed={2}
              delay={0}
              color="#3f3f46"
              shineColor="#ffffff"
              spread={90}
              direction="left"
              yoyo={true}
              style={{
                fontSize: "20px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
              }}
            />

            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
              {[
                { label: "GitHub", href: "https://github.com/Kay-c1" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/kristian-delossantos-7b989127a/" },
                { label: "Old Portfolio", href: "https://kristian-chi.vercel.app" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", fontSize: "13px" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.opacity = "0.6")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = "1")
                  }
                >
                  <ShinyText
                    text={`${social.label} ↗`}
                    speed={3}
                    delay={0}
                    color="#52525b"
                    shineColor="#ffffff"
                    spread={90}
                    direction="left"
                    pauseOnHover={true}
                    style={{ fontSize: "13px" }}
                  />
                </a>
              ))}
            </div>

            <ShinyText
              text={`© ${new Date().getFullYear()} Kristian Delos Santos`}
              speed={5}
              delay={1}
              color="#3f3f46"
              shineColor="#52525b"
              spread={90}
              direction="left"
              style={{ fontSize: "12px" }}
            />
          </div>
        </ScrollReveal>

      </div>
    </footer>
  )
}