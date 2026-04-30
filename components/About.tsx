"use client"

import ScrollReveal from "./ScrollReveal"
import RevealLine from "./RevealLine"

export default function About() {
  return (
    <section id="about" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div style={{ marginBottom: "32px" }}>
            <span
              style={{
                color: "#52525b",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              About Me
            </span>
            <h2
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 900,
                color: "white",
                marginTop: "8px",
                letterSpacing: "-2px",
                lineHeight: 1,
              }}
            >
              Who I Am
            </h2>
          </div>
        </ScrollReveal>

        <RevealLine delay={0.2} direction="left" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "start",
            marginTop: "64px",
          }}
        >
          {/* Left */}
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  color: "#71717a",
                  fontSize: "15px",
                  lineHeight: 1.8,
                }}
              >
                <p>
                  I&apos;m a Backend Developer based in Mabalacat City,
                  Philippines, with hands-on experience building scalable APIs
                  and production-grade systems using Node.js, NestJS, Python,
                  and SQL.
                </p>
                <p>
                  During my internship at System Sense Corp., I led backend
                  development delivering 8+ APIs and improving system
                  performance by reducing API response times by 20ms.
                </p>
                <p>
                  I&apos;m also skilled in AI and machine learning, having
                  developed full-stack applications with FastAPI, Next.js, and
                  Firebase — including systems achieving up to 97% model
                  accuracy.
                </p>
              </div>

              <div
                style={{
                  marginTop: "40px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <a
                  href="mailto:delossantoskristian5@gmail.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "white",
                    color: "black",
                    padding: "12px 24px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e4e4e7")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  Get in Touch →
                </a>
                <a
                  href="https://kristian-chi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#71717a",
                    border: "1px solid #3f3f46",
                    padding: "12px 24px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "white"
                    e.currentTarget.style.color = "white"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#3f3f46"
                    e.currentTarget.style.color = "#71717a"
                  }}
                >
                  Old Portfolio ↗
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal direction="right" delay={0.2}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {/* Experience */}
              <div
                style={{
                  border: "1px solid #27272a",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    color: "#52525b",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "24px",
                  }}
                >
                  Experience
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {[
                    {
                      role: "Backend Lead · Intern",
                      company: "System Sense Corp. — SelfOrder",
                      period: "Nov 2025 – Feb 2026",
                    },
                    {
                      role: "Full Stack Developer · Freelance",
                      company: "Sleep Well — AI Sleep Apnea Detector",
                      period: "Jan 2026 – Mar 2026",
                    },
                    {
                      role: "Frontend Developer · Freelance",
                      company: "Fate Architect Portfolio",
                      period: "Feb 2026 – Apr 2026",
                    },
                    {
                      role: "Backend Developer · Freelance",
                      company: "Soda ERP",
                      period: "Oct 2022 – Dec 2022",
                    },
                  ].map((exp, i) => (
                    <div key={exp.role}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: "16px",
                          flexWrap: "wrap",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              color: "white",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            {exp.role}
                          </div>
                          <div
                            style={{
                              color: "#52525b",
                              fontSize: "12px",
                              marginTop: "2px",
                            }}
                          >
                            {exp.company}
                          </div>
                        </div>
                        <span
                          style={{
                            color: "#3f3f46",
                            fontSize: "11px",
                            fontFamily: "monospace",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      {i < 3 && (
                        <div
                          style={{
                            marginTop: "16px",
                            height: "1px",
                            backgroundColor: "#18181b",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div
                style={{
                  border: "1px solid #27272a",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    color: "#52525b",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "24px",
                  }}
                >
                  Education
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      BS Computer Engineering
                    </div>
                    <div
                      style={{
                        color: "#52525b",
                        fontSize: "12px",
                        marginTop: "2px",
                      }}
                    >
                      Holy Angel University
                    </div>
                    <div
                      style={{
                        color: "#3f3f46",
                        fontSize: "11px",
                        marginTop: "6px",
                        lineHeight: 1.6,
                      }}
                    >
                      Specialization in Advanced Web and AI Architecture
                      <br />
                      Thesis: &quot;Minimalist AI Monitoring with Automated Plant Care&quot;
                    </div>
                  </div>
                  <span
                    style={{
                      color: "#3f3f46",
                      fontSize: "11px",
                      fontFamily: "monospace",
                      whiteSpace: "nowrap",
                    }}
                  >
                    2021 – 2026
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div
                style={{
                  border: "1px solid #27272a",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    color: "#52525b",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "24px",
                  }}
                >
                  Contact Info
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    {
                      label: "Email",
                      value: "delossantoskristian5@gmail.com",
                      href: "mailto:delossantoskristian5@gmail.com",
                    },
                    {
                      label: "Phone",
                      value: "0976 375 45856",
                      href: "tel:+639763754856",
                    },
                    {
                      label: "Location",
                      value: "Mabalacat City, Philippines",
                      href: "#",
                    },
                    {
                      label: "Portfolio",
                      value: "kristian-chi.vercel.app",
                      href: "https://kristian-chi.vercel.app",
                    },
                  ].map((info) => (
                    <div
                      key={info.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "16px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ color: "#52525b", fontSize: "12px" }}>
                        {info.label}
                      </span>
                      <a
                        href={info.href}
                        style={{
                          color: "#a1a1aa",
                          fontSize: "13px",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "white")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#a1a1aa")
                        }
                      >
                        {info.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}