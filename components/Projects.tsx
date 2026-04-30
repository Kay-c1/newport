"use client"

const projects = [
  {
    id: "01",
    title: "SelfOrder System",
    category: "Backend Lead · Internship",
    year: "2025–2026",
    company: "System Sense Corp.",
    description:
      "Led backend development delivering 8+ APIs including Order Creation, User Management, Device Management, Multilingual Menu, and Sales Analytics. Built transaction processing logic and daily/monthly sales aggregation batch processes. Reduced API response times by 20ms.",
    tags: ["Node.js", "NestJS", "TypeORM", "MySQL", "REST APIs", "Docker"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "02",
    title: "Minimalist AI Plant Monitoring",
    category: "Thesis · Leaf Tech",
    year: "2025–2026",
    company: "Holy Angel University",
    description:
      "End-to-end AI-powered plant monitoring system for strawberry farming in tropical environments. Integrated AI models for plant health monitoring and disease detection with ~97% accuracy. Built with computer vision for early disease detection and growth monitoring.",
    tags: ["Next.js", "FastAPI", "Python", "TensorFlow", "Computer Vision", "Firebase"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "03",
    title: "A.I Sleep Apnea Detector",
    category: "Full Stack · Freelance",
    year: "2026",
    company: "Sleep Well",
    description:
      "Full-stack web application for sleep apnea detection. Handled the project from UI/UX design to full implementation. Built frontend with Next.js and AI-powered backend using FastAPI, integrating machine learning models for sleep analysis with real-time Firebase data handling.",
    tags: ["Next.js", "FastAPI", "Python", "Firebase", "Machine Learning"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: "04",
    title: "Fate Architect Portfolio",
    category: "Frontend · Freelance",
    year: "2026",
    company: "Self",
    description:
      "Custom fully responsive landing page built with Next.js. Implemented advanced animations using GSAP for smooth, interactive user experiences. Built from scratch without templates, ensuring unique design and optimized frontend architecture.",
    tags: ["Next.js", "GSAP", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "https://kristian-chi.vercel.app",
    featured: false,
  },
  {
    id: "05",
    title: "Soda ERP System",
    category: "Backend · Freelance",
    year: "2022",
    company: "Self",
    description:
      "Full ERP backend system using Django with role-based architecture supporting three user types: Admin, Accountant, and Customer. Designed and implemented complete business logic and database architecture.",
    tags: ["Django", "Python", "SQL", "REST APIs", "Role-Based Auth"],
    github: "#",
    live: "#",
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "64px",
            paddingBottom: "32px",
            borderBottom: "1px solid #27272a",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <span
              style={{
                color: "#52525b",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Selected Work
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
              Projects
            </h2>
          </div>
          <span style={{ color: "#52525b", fontSize: "13px" }}>
            {projects.length} projects
          </span>
        </div>

        {/* Project List */}
        <div>
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                padding: "40px 0",
                borderBottom:
                  index < projects.length - 1
                    ? "1px solid #18181b"
                    : "none",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                {/* Number */}
                <span
                  style={{
                    color: "#3f3f46",
                    fontSize: "12px",
                    fontFamily: "monospace",
                    paddingTop: "6px",
                    minWidth: "28px",
                  }}
                >
                  {project.id}
                </span>

                {/* Content */}
                <div style={{ flex: 1, minWidth: "280px" }}>
                  {/* Title */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "6px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      style={{
                        color: "white",
                        fontSize: "clamp(18px, 3vw, 24px)",
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          fontSize: "10px",
                          fontWeight: 600,
                          padding: "2px 10px",
                          borderRadius: "999px",
                        }}
                      >
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      color: "#52525b",
                      fontSize: "12px",
                      marginBottom: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>{project.category}</span>
                    <span>·</span>
                    <span>{project.company}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: "#71717a",
                      fontSize: "14px",
                      lineHeight: 1.8,
                      marginBottom: "20px",
                      maxWidth: "640px",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags + Links */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "16px",
                    }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            color: "#71717a",
                            fontSize: "11px",
                            border: "1px solid #27272a",
                            padding: "4px 12px",
                            borderRadius: "999px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                      <a
                        href={project.github}
                        style={{
                          color: "#52525b",
                          fontSize: "12px",
                          textDecoration: "none",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "white")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#52525b")
                        }
                      >
                        GitHub ↗
                      </a>
                      <a
                        href={project.live}
                        style={{
                          color: "#52525b",
                          fontSize: "12px",
                          textDecoration: "none",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "white")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#52525b")
                        }
                      >
                        Live ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}