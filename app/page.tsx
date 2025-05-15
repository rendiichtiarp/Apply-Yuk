"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, FileText, Zap, Globe, Brain, ChevronRight, Phone, Mail, Star, Award, Users, ArrowUpRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FloatingElements } from "@/components/animations/floating-elements"
import { TextReveal } from "@/components/animations/text-reveal"
import { ParallaxScroll } from "@/components/animations/parallax-scroll"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { GradientText } from "@/components/animations/gradient-text"
import { Card3D } from "@/components/animations/3d-card"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { HeroText } from "@/components/animations/hero-text"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      {/* Background Patterns */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] dark:bg-[linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/80 dark:to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#e5e7eb20,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_-100px,#ffffff08,transparent)]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <TextReveal delay={0.1}>
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Badge variant="outline" className="py-1.5 px-4 rounded-full border-primary/20 bg-primary/5 text-primary">
                      ⚡ ATS-Friendly
                    </Badge>
                  </motion.div>
                </div>
              </TextReveal>
              <div className="relative">
                <h1 className="font-bb-casual text-4xl md:text-5xl lg:text-6xl leading-tight">
                  <HeroText delay={0.1}>
                    <span className="inline-block">
                      Bikin{" "}
                      <span className="relative">
                        <span className="relative z-10">CV</span>
                        <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/30 rounded-md -z-0"></span>
                      </span>
                    </span>
                  </HeroText>
                  <br />
                  <HeroText delay={0.3}>
                    <span className="text-primary font-bold">
                      Profesional
                    </span>
                  </HeroText>
                  <br />
                  <HeroText delay={0.5}>
                    <span className="inline-block">
                      Dengan Format
                    </span>
                  </HeroText>
                  <br />
                  <HeroText delay={0.7}>
                    <span className="inline-block">Yang Tepat</span>
                  </HeroText>
                </h1>
              </div> 
              <TextReveal delay={0.3}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bikin CV kamu jadi lebih keren dengan format yang cocok buat sistem rekrutmen (ATS).
                  <span className="font-semibold text-primary"> Gampang, cepet, dan gratis selamanya!</span>
                </p>
              </TextReveal>
              <TextReveal delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-primary hover:bg-primary/90 group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                    >
                      <Link href="/buat-cv" className="flex items-center">
                        Buat CV Sekarang
                        <ArrowUpRight className="h-4 w-4 ml-2 transition-transform group-hover:rotate-45" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full group border-2 hover:bg-primary/5"
                  >
                    <Link href="/preview-cv" className="flex items-center">
                      Lihat Contoh CV
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </TextReveal>
              <TextReveal delay={0.7}>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="bg-green-500/10 p-1 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Gratis 100%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <span>Gak Ada Watermark</span>
                  </div>
                </div>
              </TextReveal>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl relative z-10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Live Preview Badge */}
                <motion.div 
                  className="absolute -top-3 -right-3 z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.7 }}
                >
                  <Badge className="bg-emerald-500 text-white border-0 shadow-lg px-3 py-1 rounded-full text-sm font-medium">
                    Live Preview
                  </Badge>
                </motion.div>
                <div className="space-y-6">
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      Rendi Ichtiar Prasetyo
                    </h1>
                    <p className="text-primary font-medium text-lg">Frontend Developer</p>
                    
                    <div className="flex flex-wrap gap-4">
                      <motion.div 
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.9 }}
                      >
                        <div className="bg-blue-500/10 p-1.5 rounded-full">
                          <Phone className="h-4 w-4 text-blue-500" />
                        </div>
                        <a href="tel:+6281284900651" className="hover:text-primary transition-colors">
                          +62 812 8490 0651
                        </a>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1 }}
                      >
                        <div className="bg-blue-500/10 p-1.5 rounded-full">
                          <Mail className="h-4 w-4 text-blue-500" />
                        </div>
                        <a href="mailto:rendiichtiarprasetyo@gmail.com" className="hover:text-primary transition-colors">
                          rendiichtiarprasetyo@gmail.com
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>

                  <div className="h-px w-full bg-gray-200 dark:bg-gray-800"></div>

                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1.5 rounded-lg">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Ringkasan Profesional
                      </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Profesional IT berpengalaman 3+ tahun dengan keahlian dalam pengembangan web dan networking...
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* ATS Badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-xl py-2 px-4 shadow-lg border border-gray-200 dark:border-gray-800 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-500 rounded-full p-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-sm">100% ATS Compatible</span>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              ></motion.div>
              <motion.div 
                className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              ></motion.div>

              {/* Card Stack Effect */}
              <motion.div 
                className="absolute -bottom-2 -right-2 -left-2 h-full bg-white/50 dark:bg-gray-900/50 rounded-2xl -z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 -left-4 h-full bg-white/30 dark:bg-gray-900/30 rounded-2xl -z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 relative border-y border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#80808012_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(45deg,#ffffff08_1px,transparent_1px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#80808012_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(-45deg,#ffffff08_1px,transparent_1px)]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3+", label: "Template ATS", icon: <FileText className="h-6 w-6 text-primary" /> },
              { number: "100%", label: "ATS-Friendly", icon: <Award className="h-6 w-6 text-primary" /> },
              { number: "Free", label: "Tanpa Biaya", icon: <Star className="h-6 w-6 text-primary" /> },
              { number: "Beta", label: "Versi Awal", icon: <Users className="h-6 w-6 text-primary" /> },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div 
                  className="text-center group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:bg-primary/5 transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[#F8F9FC]/80 dark:bg-gray-950/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] dark:bg-[radial-gradient(#ffffff08_1.5px,transparent_1.5px)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_200px,#e5e7eb20,transparent)] dark:bg-[radial-gradient(circle_600px_at_50%_200px,#ffffff08,transparent)]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <TextReveal>
              <Badge variant="outline" className="mb-4 py-1.5 px-4 rounded-full">
                ✨ Fitur Keren
              </Badge>
              <h2 className="font-bb-casual text-3xl md:text-4xl mb-4">
                Kenapa CV dari Kita Lebih Oke?
              </h2>
            </TextReveal>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fitur-fitur keren yang bikin CV kamu stand out dan gampang lolos ATS
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-white" />,
                title: "Format ATS-Friendly",
                description: "Template CV yang udah didesain khusus biar gampang dibaca sama ATS.",
                color: "bg-primary",
              },
              {
                icon: <FileText className="h-10 w-10 text-white" />,
                title: "Desain Minimalis",
                description: "Tampilan bersih dan profesional yang fokus ke konten penting.",
                color: "bg-primary",
              },
              {
                icon: <Zap className="h-10 w-10 text-white" />,
                title: "Gampang Dipake",
                description: "Interface yang simpel dan gak ribet buat bikin CV dengan cepet.",
                color: "bg-primary",
              },
              {
                icon: <Globe className="h-10 w-10 text-white" />,
                title: "Bahasa Indonesia",
                description: "Full pake Bahasa Indonesia biar lebih gampang dipake.",
                color: "bg-primary",
              },
              {
                icon: <FileText className="h-10 w-10 text-white" />,
                title: "3+ Template",
                description: "Pilihan template keren yang udah dioptimasi buat ATS.",
                color: "bg-primary",
              },
              {
                icon: <Star className="h-10 w-10 text-white" />,
                title: "Gratis",
                description: "Bikin CV profesional tanpa bayar sepeser pun.",
                color: "bg-primary",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div 
                  className="bg-white dark:bg-gray-900 p-8 h-full group hover:shadow-lg transition-all duration-300 rounded-xl border border-gray-200 dark:border-gray-800 cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className={`mb-6 ${feature.color} p-3 rounded-lg w-fit transform group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 relative border-y border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px] dark:bg-[linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,#e5e7eb20,transparent)] dark:bg-[radial-gradient(circle_400px_at_50%_50%,#ffffff08,transparent)]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <TextReveal>
              <Badge variant="outline" className="mb-4 py-1.5 px-4 rounded-full">
                🎯 Cara Gampang
              </Badge>
              <h2 className="font-bb-casual text-3xl md:text-4xl mb-4">
                3 Langkah Gampang Bikin CV ATS-Friendly
              </h2>
            </TextReveal>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cara simpel dan cepet buat bikin CV profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Isi Data CV",
                description: "Masukin data diri, pengalaman kerja, pendidikan, sama skill kamu.",
                image: "/images/cv-step-1.jpg",
              },
              {
                step: "2",
                title: "Pilih Template",
                description: "Pilih dari 3+ template keren yang udah dioptimasi buat ATS.",
                image: "/images/cv-step-2.jpg",
              },
              {
                step: "3",
                title: "Download PDF",
                description: "Cek hasilnya dan download CV dalam format PDF siap pake.",
                image: "/images/cv-step-1.jpg",
              },
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div 
                  className="flex flex-col items-center text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white text-3xl font-bold mb-8 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    {step.step}
                  </div>
                  <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                    <Image 
                      src={step.image || "/placeholder.svg"} 
                      alt={step.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-white/90 text-gray-900">
                        Lihat Detail
                      </Badge>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[#F8F9FC]/80 dark:bg-gray-950/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:32px_32px] dark:bg-[radial-gradient(#ffffff08_2px,transparent_2px)]"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F8F9FC] to-transparent dark:from-gray-950 dark:to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F9FC] to-transparent dark:from-gray-950 dark:to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <TextReveal>
              <Badge variant="outline" className="mb-4 py-1.5 px-4 rounded-full">
                💬 Kata Mereka
              </Badge>
              <h2 className="font-bb-casual text-3xl md:text-4xl mb-4">
                Apa Kata Mereka yang Udah Pake?
              </h2>
            </TextReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Lolos 3 interview setelah pake CV ini!",
                name: "Rudi",
                position: "Data Analyst",
                avatar: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 5,
              },
              {
                quote: "Simple banget, langsung ke inti dan ATS-friendly!",
                name: "Ana",
                position: "Fresh Graduate",
                avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 5,
              },
              {
                quote: "Fitur AI-nya ngebantu banget, bikin summary jadi gampang!",
                name: "Kevin",
                position: "UI/UX Designer",
                avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div 
                  className="bg-white dark:bg-gray-900 p-8 h-full group hover:shadow-lg transition-all duration-300 rounded-xl border border-gray-200 dark:border-gray-800"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative border-t border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_400px,#e5e7eb40,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_400px,#ffffff08,transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <motion.div 
              className="bg-[#F8F9FC] dark:bg-gray-950 p-12 md:p-16 text-center max-w-4xl mx-auto rounded-xl border border-gray-200 dark:border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Badge variant="outline" className="mb-6 py-1.5 px-4 rounded-full">
                🚀 Gas Langsung
              </Badge>
              <h2 className="font-bb-casual text-3xl md:text-4xl mb-6">
                Siap Bikin CV yang Lolos Screening?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Yuk bikin CV ATS-friendly gratis dan tingkatin peluang karier kamu sekarang!
              </p>
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90 group shadow-md transition-all duration-300"
                >
                  <Link href="/buat-cv" className="flex items-center text-lg">
                    Yuk Bikin CV Gratis
                    <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:rotate-45" />
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
