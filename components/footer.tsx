"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Logo } from "@/components/logo"
import { motion } from "framer-motion"

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-gradient-to-b from-muted/50 to-muted/30">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <motion.div 
        className="container mx-auto px-4 py-12 relative"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <div className="w-32 mb-4">
              <Logo size="lg" />
            </div>
            <p className="text-muted-foreground mb-6">
              Tempat asyik buat bikin CV keren yang pasti lolos ATS! Bikin CV jadi gampang dan menyenangkan. ✨
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <Link href="https://facebook.com/rendiichtiar" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 transition-colors" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <Link href="https://instagram.com/rendiichtiar" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 transition-colors" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <Link href="https://linkedin.com/in/rendiichtiar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 transition-colors" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Menu Kita 📍</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">
                  🏠 Beranda
                </Link>
              </li>
              <li>
                <Link href="/fitur" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">
                  ⭐ Fitur Keren
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">
                  💭 FAQ
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block">
                  👋 Kenalan Yuk
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Hubungi Kita! 📱</h3>
            <ul className="space-y-3">
              <li className="flex group">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Villa Kencana Cikarang, Bekasi 📍
                </span>
              </li>
              <li className="flex group">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  +62 812-8490-0651 📞
                </span>
              </li>
              <li className="flex group">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  rendiichtiarprasetyo@gmail.com ✉️
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="border-t mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ApplyYuk. Dibuat dengan ❤️ buat kamu yang lagi cari kerja! ✨
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privasi Kamu 🔒
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Syarat & Ketentuan 📜
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
