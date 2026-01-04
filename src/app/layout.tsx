import type { Metadata } from "next"
import { Inter, Megrim } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const megrim = Megrim({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-megrim"
})

export const metadata: Metadata = {
  title: "Guy Paiss - Software Developer & Computer Vision Engineer",
  description: "Software Engineer with 4+ years experience specializing in computer vision, AI/ML, and full-stack development.",
  keywords: ["software development", "computer vision", "machine learning", "Python", "C++", "CUDA", "React", "TypeScript", "AI"],
  authors: [{ name: "Guy Paiss" }],
  creator: "Guy Paiss",
  openGraph: {
    title: "Guy Paiss - Software Developer & Computer Vision Engineer",
    description: "Software Engineer with 4+ years experience specializing in computer vision, AI/ML, and full-stack development.",
    url: "https://guypaiss.com",
    siteName: "Guy Paiss - Software Developer & Computer Vision Engineer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guy Paiss - Software Developer & Computer Vision Engineer",
    description: "Software Engineer with 4+ years experience specializing in computer vision, AI/ML, and full-stack development.",
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WZW1R6DLLH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WZW1R6DLLH');
          `}
        </Script>
      </body>
    </html>
  )
}