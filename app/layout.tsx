import type { Metadata } from "next"
import "./globals.css"
import BlobCursor from "@/components/BlobCursor"
import SmoothScroll from "@/components/SmoothScroll"

export const metadata: Metadata = {
  title: "Kristian Delos Santos — Developer",
  description: "Backend Developer · Full Stack · AI & ML",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        style={{
          backgroundColor: "#000000",
          color: "#ffffff",
          cursor: "none",
        }}
      >
        <SmoothScroll />
        <BlobCursor
          blobType="circle"
          fillColor="#ffffff"
          trailCount={3}
          sizes={[50, 100, 60]}
          innerSizes={[15, 30, 20]}
          innerColor="rgba(0,0,0,0.5)"
          opacities={[0.6, 0.4, 0.5]}
          shadowColor="rgba(255,255,255,0.1)"
          shadowBlur={5}
          shadowOffsetX={0}
          shadowOffsetY={0}
          filterStdDeviation={25}
          useFilter={true}
          fastDuration={0.1}
          slowDuration={0.5}
          zIndex={9999}
        />
        {children}
      </body>
    </html>
  )
}