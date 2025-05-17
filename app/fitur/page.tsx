"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TextReveal } from "@/components/animations/text-reveal"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FloatingElements } from "@/components/animations/floating-elements"
import { GradientText } from "@/components/animations/gradient-text"
import { Badge } from "@/components/ui/badge"
import { Globe, Cloud, Lock, Check } from "lucide-react"
import Image from "next/image"

export default function FiturPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[#F8F9FC]/80 dark:bg-gray-950/80 backdrop-blur-sm" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] dark:bg-[radial-gradient(#ffffff08_1.5px,transparent_1.5px)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#e5e7eb20,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_-100px,#ffffff08,transparent)]" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <TextReveal>
              <Badge variant="outline" className="mb-4 py-1.5 px-4 rounded-full">
                ✨ Kenapa Harus Apply Yuk?
              </Badge>
            </TextReveal>
            <h1 className="font-bb-casual text-4xl md:text-5xl mb-6">
              <TextReveal delay={0.2}>
                <span>Fitur </span>
                <GradientText from="from-primary" to="to-purple-500">Keren</GradientText>
                <span> Buat Kamu</span>
              </TextReveal>
            </h1>
            <TextReveal delay={0.4}>
              <p className="text-lg text-muted-foreground">
                Bikin CV jadi gampang dan keren dengan berbagai fitur canggih yang bakal bikin CV kamu stand out! 🚀
              </p>
            </TextReveal>
          </div>

          <div className="relative">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <div>
                  <div className="rounded-2xl p-1 bg-background/60 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] shadow-sm">
                    <Image
                      src="/images/cv-step-1.jpg"
                      alt="Template ATS-Friendly"
                      width={500}
                      height={400}
                      className="rounded-xl w-full h-auto"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <Badge variant="outline" className="py-1.5 px-4 rounded-full border-primary/20 bg-primary/5 text-primary">
                    Template Anti Reject! 💪
                  </Badge>
                  <h2 className="text-3xl font-bold">CV yang Pasti Lolos ATS</h2>
                  <p className="text-muted-foreground">
                    Template kita udah didesain khusus biar gampang dibaca sama robot ATS. Jadi CV kamu bakal lolos tahap screening dan sampai ke tangan HRD! 🎯
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Dijamin lolos ATS</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Rapi dan gampang dibaca</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Desain kekinian</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <div className="order-2 md:order-1 space-y-6">
                  <Badge variant="outline" className="py-1.5 px-4 rounded-full border-primary/20 bg-primary/5 text-primary">
                    Form Interaktif! 🎯
                  </Badge>
                  <h2 className="text-3xl font-bold">Form yang Mudah Digunakan</h2>
                  <p className="text-muted-foreground">
                    Form yang interaktif dan mudah digunakan, dengan validasi data yang lengkap. Kamu bisa simpan draft kapan saja! ⚡
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Validasi data lengkap</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Simpan draft otomatis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Super nyaman</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <div className="rounded-2xl p-1 bg-background/60 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] shadow-sm">
                    <Image
                      src="/images/cv-step-2.jpg"
                      alt="Editor Real-Time"
                      width={500}
                      height={400}
                      className="rounded-xl w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <div>
                  <div className="rounded-2xl p-1 bg-background/60 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] shadow-sm">
                    <Image
                      src="/images/cv-step-1.jpg"
                      alt="AI Summary Generator"
                      width={500}
                      height={400}
                      className="rounded-xl w-full h-auto"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <Badge variant="outline" className="py-1.5 px-4 rounded-full border-primary/20 bg-primary/5 text-primary">
                    AI Jadi Asisten Kamu! 🤖
                  </Badge>
                  <h2 className="text-3xl font-bold">Bikin Ringkasan Pakai AI</h2>
                  <p className="text-muted-foreground">
                    Bingung nulis ringkasan yang keren? Tenang, AI kita siap bantu bikin ringkasan yang ciamik berdasarkan pengalaman dan skill kamu! ✨
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Sesuai sama profil kamu</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Hemat waktu, tinggal klik!</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Hasilnya keren abis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="group rounded-xl p-8 bg-background/60 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] shadow-sm min-h-[250px] flex flex-col">
                  <div className="mb-4 bg-primary/10 w-fit p-3 rounded-lg">
                    <Globe className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3">Dua Bahasa! 🌏</h3>
                    <p className="text-muted-foreground">
                      Mau ngelamar kerja di Indo atau luar negeri? Gampang! Tinggal ganti bahasa sesuai kebutuhan kamu.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="group rounded-xl p-8 bg-background/60 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] shadow-sm min-h-[250px] flex flex-col">
                  <div className="mb-4 bg-primary/10 w-fit p-3 rounded-lg">
                    <Cloud className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3">Aman di Cloud ☁️</h3>
                    <p className="text-muted-foreground">
                      CV kamu tersimpan aman di cloud. Bisa diedit kapan aja, di mana aja. Praktis kan?
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="group rounded-xl p-8 bg-background/60 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] shadow-sm min-h-[250px] flex flex-col">
                  <div className="mb-4 bg-primary/10 w-fit p-3 rounded-lg">
                    <Lock className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3">Data Aman! 🔒</h3>
                    <p className="text-muted-foreground">
                      Tenang aja, data kamu aman banget sama kita. Privasi kamu adalah prioritas utama kita!
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
