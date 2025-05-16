"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CVPreview } from "@/components/cv-preview"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { TextReveal } from "@/components/animations/text-reveal"
import { Badge } from "@/components/ui/badge"

export default function PreviewCVPage() {
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
          <motion.div 
            className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <TextReveal>
                <Badge variant="outline" className="mb-4 py-1.5 px-4 rounded-full">
                  ✨ Hampir Selesai!
                </Badge>
              </TextReveal>
              <motion.h1 
                className="font-bb-casual text-4xl md:text-5xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TextReveal>
                  <span>Cek </span>
                  <span className="text-primary">CV Keren</span>
                  <span> Kamu! 🎉</span>
                </TextReveal>
              </motion.h1>
              <TextReveal delay={0.4}>
                <p className="text-lg text-muted-foreground">
                  Wah, CV-nya udah jadi nih! Coba cek lagi ya, pastiin semuanya udah oke. Kalo udah mantep, langsung download aja! 🚀
                </p>
              </TextReveal>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/buat-cv">
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                  Mau Edit Lagi! ✏️
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 group">
                <Link href="#">
                  <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform duration-300" />
                  Download CV! 📥
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm border border-border/50"
            >
              <CVPreview />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
