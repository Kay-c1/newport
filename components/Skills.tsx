"use client"

import CountUp from "./CountUp"

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 92 },
      { name: "TypeScript / JavaScript", level: 90 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js / NestJS", level: 92 },
      { name: "FastAPI / Django", level: 88 },
      { name: "REST APIs / TypeORM", level: 90 },
      { name: "Docker / CI/CD", level: 80 },
    ],
  },
  {
    category: "Frontend & AI",
    skills: [
      { name: "Next.js / React", level: 85 },
      { name: "TensorFlow / CV", level: 82 },
      { name: "Firebase", level: 85 },
      { name: "GSAP Animations", level: 78 },
    ],
  },
]

const certifications = [
  "AI Fundamentals with IBM SkillsBuild",
  "Introduction to Data Science",
  "Introduction to IoT and Digital Transformation",
  "Introduction to Modern AI",
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "96px 0", backgroundColor: "#09090b" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div
          style={{
            marginBottom: "64px",
            paddingBottom: "32px",
            borderBottom: "1px solid #27272a",
          }}
        >
          <span
            style={{
              color: "#52525b",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            What I Use
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
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "48px",
          }}
        >
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3
                style={{
                  color: "#52525b",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "32px",
                }}
              >
                {group.category}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {group.skills.map((skill, i) => (
                  <div key={skill.name}>
                    {/* Skill Name + CountUp % */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "8px",
                      }}
                    >
                      <span style={{ color: "white", fontSize: "14px" }}>
                        {skill.name}
                      </span>

                      {/* CountUp Number */}
                      <span
                        style={{
                          color: "#52525b",
                          fontSize: "12px",
                          fontFamily: "monospace",
                          display: "flex",
                          alignItems: "center",
                          gap: "1px",
                        }}
                      >
                        <CountUp
                          from={0}
                          to={skill.level}
                          duration={1.5}
                          delay={i * 0.1}
                          direction="up"
                          style={{
                            color: "#52525b",
                            fontSize: "12px",
                            fontFamily: "monospace",
                          }}
                        />
                        <span>%</span>
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "#27272a",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "100%",
                          width: `${skill.level}%`,
                          backgroundColor: "white",
                          transition: "width 1.5s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div
          style={{
            marginTop: "80px",
            paddingTop: "48px",
            borderTop: "1px solid #27272a",
          }}
        >
          <p
            style={{
              color: "#52525b",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "24px",
            }}
          >
            Full Tech Stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              "Python", "TypeScript", "JavaScript", "SQL",
              "Node.js", "NestJS", "FastAPI", "Django",
              "Next.js", "React", "Firebase", "MySQL",
              "Docker", "Git", "GitHub Actions", "Postman",
              "TensorFlow", "Pandas", "Computer Vision", "GSAP",
              "TypeORM", "REST APIs", "ESLint", "Prettier",
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  color: "#71717a",
                  fontSize: "13px",
                  border: "1px solid #27272a",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  cursor: "default",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#52525b"
                  e.currentTarget.style.color = "white"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#27272a"
                  e.currentTarget.style.color = "#71717a"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div
          style={{
            marginTop: "64px",
            paddingTop: "48px",
            borderTop: "1px solid #27272a",
          }}
        >
          <p
            style={{
              color: "#52525b",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "24px",
            }}
          >
            Certifications
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {certifications.map((cert) => (
              <div
                key={cert}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#71717a",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#3f3f46",
                    flexShrink: 0,
                  }}
                />
                {cert}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}