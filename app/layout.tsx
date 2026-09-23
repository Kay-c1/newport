import type { Metadata } from "next"
import "lucide-react"
import "./globals.css"
import BlobCursor from "@/components/BlobCursor"
import SmoothScroll from "@/components/SmoothScroll"
import AmbientBackdrop from "@/components/AmbientBackdrop"

export const metadata: Metadata = {
  title: "Kristian Delos Santos — Developer",
  description: "Backend Developer · Full Stack · AI & ML",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScroll />
        <AmbientBackdrop />
        <BlobCursor
          blobType="circle"
          fillColor="var(--maroon)"
          trailCount={3}
          sizes={[50, 100, 60]}
          innerSizes={[15, 30, 20]}
          innerColor="rgba(255,255,255,0.3)"
          opacities={[0.42, 0.22, 0.3]}
          shadowColor="rgba(112,36,52,0.15)"
          shadowBlur={8}
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
