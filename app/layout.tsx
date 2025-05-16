import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://applyyuk.vercel.app"),
  title: "ApplyYuk | CV Builder ATS-Friendly",
  description: "Buat CV Profesional Dalam Hitungan Menit",
  authors: [{ name: "Rendi Ichtiar Prasetyo", url: "https://github.com/rendiichtiarp" }],
  keywords: ["cv builder", "resume generator", "ats friendly", "job application", "ai powered cv"],
  creator: "Rendi Ichtiar Prasetyo",
  publisher: "ApplyYuk",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#4361ee" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://applyyuk.vercel.app",
    title: "ApplyYuk | CV Builder ATS-Friendly",
    description: "Buat CV Profesional Dalam Hitungan Menit dengan Bantuan AI",
    siteName: "ApplyYuk",
    images: [{
      url: "/og-image.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ApplyYuk | CV Builder ATS-Friendly",
    description: "Buat CV Profesional Dalam Hitungan Menit dengan Bantuan AI",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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