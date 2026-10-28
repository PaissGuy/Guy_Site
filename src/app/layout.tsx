import type { Metadata } from "next"
import { Inter, Megrim } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const megrim = Megrim({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-megrim"
})

export const metadata: Metadata = {
  title: "Guy Paiss - AI Developer & Research Engineer",
  description: "AI Developer and Research Engineer with 5+ years of experience in computer vision, machine learning, signal processing, and full-stack development.",
  keywords: ["AI developer", "research engineer", "computer vision", "machine learning", "signal processing", "Python", "C++", "CUDA", "React", "TypeScript", "embedded ML"],
  authors: [{ name: "Guy Paiss" }],
  creator: "Guy Paiss",
  openGraph: {
    title: "Guy Paiss - AI Developer & Research Engineer",
    description: "AI Developer and Research Engineer with 5+ years of experience in computer vision, machine learning, signal processing, and full-stack development.",
    url: "https://guypaiss.com",
    siteName: "Guy Paiss - AI Developer & Research Engineer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guy Paiss - AI Developer & Research Engineer",
    description: "AI Developer and Research Engineer with 5+ years of experience in computer vision, machine learning, signal processing, and full-stack development.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${megrim.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}