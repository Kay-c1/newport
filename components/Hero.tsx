"use client"

import BlurText from "./BlurText"
import ShinyText from "./ShinyText"
import CountUp from "./CountUp"

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "72px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 40px",
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Status Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "48px",
          }}
        >
          <div style={{ position: "relative", width: "8px", height: "8px" }}>
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                backgroundColor: "#4ade80",
                opacity: 0.75,
                animation: "ping 1s cubic-bezier(0,0,0.2,1) infinite",
              }}
            />
            <span
              style={{
                position: "relative",
                display: "block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
          </div>
          <ShinyText
            text="Available for work"
            speed={3}
            delay={0}
            color="#52525b"
            shineColor="#a1a1aa"
            spread={90}
            direction="left"
            style={{
              fontSize: "12px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          />
        </div>

        {/* First Name — BlurText animation */}
        <div style={{ marginBottom: "8px" }}>
          <BlurText
            text="Kristian"
            delay={80}
            animateBy="letters"
            direction="top"
            stepDuration={0.4}
            style={{
              fontSize: "clamp(48px, 10vw, 130px)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-3px",
              color: "white",
              textTransform: "uppercase",
              fontFamily: "inherit",
            }}
          />
        </div>

        {/* Last Name — BlurText + ShinyText outline */}
        <div style={{ marginBottom: "48px" }}>
          <BlurText
            text="Delos Santos"
            delay={60}
            animateBy="letters"
            direction="bottom"
            stepDuration={0.35}
            style={{
              fontSize: "clamp(48px, 10vw, 130px)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-3px",
              color: "transparent",
              WebkitTextStroke: "1px #52525b",
              textTransform: "uppercase",
              fontFamily: "inherit",
            }}
          />
        </div>

        {/* Role Tags — ShinyText */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          {[
            { text: "Backend Developer", speed: 3, delay: 0 },
            { text: "Full Stack", speed: 4, delay: 0.2 },
            { text: "AI & ML", speed: 3.5, delay: 0.4 },
            { text: "Node.js", speed: 4, delay: 0.6 },
            { text: "NestJS", speed: 3, delay: 0.8 },
            { text: "FastAPI", speed: 4, delay: 1.0 },
          ].map((tag, i) => (
            <span
              key={tag.text}
              style={{
                border: "1px solid #27272a",
                padding: "6px 14px",
                borderRadius: "999px",
                animation: "fadeIn 0.5s ease forwards",
                animationDelay: `${0.8 + i * 0.1}s`,
                opacity: 0,
              }}
            >
              <ShinyText
                text={tag.text}
                speed={tag.speed}
                delay={tag.delay}
                color="#52525b"
                shineColor="#ffffff"
                spread={90}
                direction="left"
                pauseOnHover={true}
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              />
            </span>
          ))}
        </div>

        {/* Description — BlurText */}
        <div style={{ marginBottom: "40px" }}>
          <BlurText
            text="Backend Developer specializing in scalable APIs and production-grade systems. Built 8+ APIs, reduced response times by 20ms, and developed AI systems with up to 97% model accuracy."
            delay={40}
            animateBy="words"
            direction="bottom"
            stepDuration={0.3}
            style={{
              color: "#71717a",
              fontSize: "15px",
              maxWidth: "480px",
              lineHeight: 1.8,
              fontFamily: "inherit",
            }}
          />
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
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
            View Work →
          </a>

          {/* Contact — ShinyText */}
          <a
            href="mailto:delossantoskristian5@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <ShinyText
              text="Contact →"
              speed={3}
              delay={0}
              color="#52525b"
              shineColor="#ffffff"
              spread={90}
              direction="left"
              pauseOnHover={true}
              style={{ fontSize: "14px" }}
            />
          </a>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px",
          width: "100%",
          borderTop: "1px solid #27272a",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {[
            { number: 8, suffix: "+", label: "APIs Built" },
            { number: 20, suffix: "ms", label: "Response Time Reduced" },
            { number: 97, suffix: "%", label: "AI Model Accuracy" },
            { number: 4, suffix: "+", label: "Years Studying" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                animation: "fadeIn 0.5s ease forwards",
                animationDelay: `${1.2 + i * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* CountUp Number */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "2px",
                }}
              >
                <CountUp
                  from={0}
                  to={stat.number}
                  duration={2}
                  delay={1.2 + i * 0.1}
                  direction="up"
                  style={{
                    fontSize: "clamp(20px, 4vw, 32px)",
                    fontWeight: 800,
                    color: "white",
                    letterSpacing: "-1px",
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(20px, 4vw, 32px)",
                    fontWeight: 800,
                    color: "white",
                    letterSpacing: "-1px",
                  }}
                >
                  {stat.suffix}
                </span>
              </div>

              {/* ShinyText Label */}
              <ShinyText
                text={stat.label}
                speed={4}
                delay={i * 0.3}
                color="#3f3f46"
                shineColor="#71717a"
                spread={90}
                direction="left"
                style={{
                  fontSize: "12px",
                  marginTop: "4px",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}