"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/fitur", label: "Fitur" },
    { href: "/faq", label: "FAQ" },
    { href: "/tentang", label: "Tentang" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm" 
          : "bg-transparent",
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/0 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Logo size="md" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navVariants}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group hover:scale-105",
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      transition={{ 
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                      }}
                    />
                  )}
                  <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center"
            >
              <ModeToggle />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="sm"
                className="rounded-full bg-primary hover:bg-primary/90 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <Link href="/buat-cv" className="flex items-center gap-1">
                  Buat CV
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <ModeToggle />
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-primary/5 transition-colors"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden bg-background/95 backdrop-blur-md border-b"
          >
            <motion.div 
              className="container mx-auto px-4 py-4"
              variants={itemVariants}
            >
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    variants={itemVariants}
                    custom={i}
                    className="overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between group",
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted",
                      )}
                      onClick={closeMenu}
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 opacity-50 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col space-y-2 pt-4 border-t mt-2"
                >
                  <Button
                    asChild
                    className="w-full justify-between bg-primary hover:bg-primary/90 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <Link href="/buat-cv" className="flex items-center">
                      Buat CV
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
