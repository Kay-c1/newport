"use client"
const items = [
  "React", "Next.js", "TypeScript", "Node.js",
  "PostgreSQL", "Tailwind CSS", "MongoDB", "Docker",
  "AWS", "GraphQL", "Redis", "Prisma",
]

export default function Marquee() {
  return (
    <div
      style={{
        borderTop: "1px solid #27272a",
        borderBottom: "1px solid #27272a",
        padding: "20px 0",
        overflow: "hidden",
        backgroundColor: "#09090b",
        margin: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 25s linear infinite",
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              margin: "0 24px",
              color: "#52525b",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            {item}
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#3f3f46",
                display: "inline-block",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}