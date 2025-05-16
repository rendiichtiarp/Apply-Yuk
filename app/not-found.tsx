"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { TextReveal } from "@/components/animations/text-reveal"
import { GradientText } from "@/components/animations/gradient-text"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1 pt-32 pb-16 md:pt-40 relative overflow-hidden">
        {/* Background Effects */}
        <motion.div 
          className="absolute inset-0 bg-[#F8F9FC]/80 dark:bg-gray-950/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] dark:bg-[radial-gradient(#ffffff08_1.5px,transparent_1.5px)]"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#e5e7eb20,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_-100px,#ffffff08,transparent)]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <TextReveal>
              <Badge variant="outline" className="mb-4 py-1.5 px-4 rounded-full">
                404 - Waduh! 😅
              </Badge>
            </TextReveal>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="font-bb-casual text-6xl md:text-8xl mb-4">
                <GradientText from="from-primary" to="to-purple-500">
                  Nyasar Nih?
                </GradientText>
              </h1>
            </motion.div>

            <TextReveal delay={0.4}>
              <p className="text-lg text-muted-foreground mb-8">
                Kayaknya kamu nyasar ke halaman yang nggak ada deh! 
                Tenang aja, kita bantuin balik ke jalan yang bener. 🗺️
              </p>
            </TextReveal>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 group">
                <Link href="/" className="flex items-center">
                  <Home className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Balik ke Beranda! 🏠
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <div className="text-6xl md:text-8xl font-bold text-muted/10 dark:text-white/5">
                404
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 