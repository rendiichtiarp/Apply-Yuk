import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "ApplyYuk | CV Builder ATS-Friendly",
  description: "Buat CV Profesional Dalam Hitungan Menit",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'