"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TextReveal } from "@/components/animations/text-reveal"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { GradientText } from "@/components/animations/gradient-text"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function TentangPage() {
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
                💫 Kenalan Yuk!
              </Badge>
            </TextReveal>
            <h1 className="font-bb-casual text-4xl md:text-5xl mb-6">
              <TextReveal delay={0.2}>
                <span>Cerita di Balik </span>
                <GradientText from="from-primary" to="to-purple-500">Apply</GradientText>
                <span>Yuk</span>
              </TextReveal>
            </h1>
            <TextReveal delay={0.4}>
              <p className="text-lg text-muted-foreground">
                Penasaran sama platform yang bakal bantuin kamu dapetin kerja impian? Yuk, kenalan lebih dekat! ✨
              </p>
            </TextReveal>
          </div>

          <div className="relative">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <div>
                  <div className="rounded-2xl p-1 bg-background/60 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] shadow-sm">
                    <Image
                      src="/images/cv-hero.jpg"
                      alt="Tim Kami"
                      width={500}
                      height={400}
                      className="rounded-xl w-full h-auto"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <Badge variant="outline" className="py-1.5 px-4 rounded-full border-primary/20 bg-primary/5 text-primary">
                    Mimpi Kita! 🌟
                  </Badge>
                  <h2 className="text-3xl font-bold">Bikin Ngelamar Kerja Jadi Gampang</h2>
                  <p className="text-muted-foreground">
                    Kita percaya kalau semua orang pantes dapet kerjaan yang oke! Makanya kita bikin platform ini 
                    buat bantuin kamu bikin CV keren yang bisa nunjukin potensi kamu. Gampang dan cepet! 🚀
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-xl bg-background/60 hover:bg-background/80 transition-all duration-300 shadow-sm">
                      <h3 className="font-semibold mb-2">Gampang Banget! 👌</h3>
                      <p className="text-muted-foreground text-sm">
                        Interface-nya super friendly dan ada panduan step by step, jadi kamu nggak bakal bingung!
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-background/60 hover:bg-background/80 transition-all duration-300 shadow-sm">
                      <h3 className="font-semibold mb-2">Hasilnya Keren! ✨</h3>
                      <p className="text-muted-foreground text-sm">
                        Template modern yang ATS-friendly, bikin CV kamu keliatan profesional dan pasti kebaca!
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-background/60 hover:bg-background/80 transition-all duration-300 shadow-sm">
                      <h3 className="font-semibold mb-2">Ada AI-nya! 🤖</h3>
                      <p className="text-muted-foreground text-sm">
                        AI kita siap bantuin kamu bikin konten yang eye-catching buat CV kamu!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <Badge variant="outline" className="py-1.5 px-4 rounded-full border-primary/20 bg-primary/5 text-primary mb-6">
                  Gas Langsung! 🚀
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Yuk, Bikin CV Keren Kamu!</h2>
                <p className="text-muted-foreground mb-8">
                  Ngapain nunggu? Langsung aja bikin CV keren dan tingkatin peluang kamu dapet kerja impian! ✨
                </p>
                <a
                  href="/buat-cv"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                >
                  Mulai Bikin CV! 🎯
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
