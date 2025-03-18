import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Nail Tech Portfolio",
  description: "Professional nail technician services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

