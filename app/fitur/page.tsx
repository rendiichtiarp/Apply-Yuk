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
                ✨ Fitur Unggulan
              </Badge>
            </TextReveal>
            <h1 className="font-bb-casual text-4xl md:text-5xl mb-6">
              <TextReveal delay={0.2}>
                <span>Fitur </span>
                <GradientText from="from-primary" to="to-purple-500">Unggulan</GradientText>
                <span> Kami</span>
              </TextReveal>
            </h1>
            <TextReveal delay={0.4}>
              <p className="text-lg text-muted-foreground">
                Kami menyediakan berbagai fitur untuk membantu Anda membuat CV yang profesional dan ATS-friendly dengan
                mudah.
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
                    Template ATS-Friendly
                  </Badge>
                  <h2 className="text-3xl font-bold">Desain yang Dioptimasi untuk ATS</h2>
                  <p className="text-muted-foreground">
                    Semua template kami dirancang khusus agar sesuai dengan struktur linear yang dikenali oleh Applicant
                    Tracking System (ATS). Kami menghindari elemen yang dapat mengganggu pemindaian otomatis.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Format yang mudah dibaca oleh ATS</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Struktur yang jelas dan terorganisir</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Desain profesional dan modern</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <div className="order-2 md:order-1 space-y-6">
                  <Badge variant="outline" className="py-1.5 px-4 rounded-full border-primary/20 bg-primary/5 text-primary">
                    Editor Real-Time
                  </Badge>
                  <h2 className="text-3xl font-bold">Lihat Perubahan Secara Langsung</h2>
                  <p className="text-muted-foreground">
                    Dengan editor real-time kami, Anda dapat melihat perubahan pada CV Anda secara langsung saat Anda
                    mengetik. Tidak perlu menunggu atau mengklik tombol preview berulang kali.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Preview CV secara real-time</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Antarmuka yang intuitif dan mudah digunakan</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Pengalaman pengguna yang mulus</span>
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
                    Ringkasan Profesional AI
                  </Badge>
                  <h2 className="text-3xl font-bold">Biarkan AI Membantu Anda</h2>
                  <p className="text-muted-foreground">
                    Kesulitan menulis ringkasan profesional yang menarik? Gunakan teknologi AI kami untuk membantu Anda
                    membuat ringkasan yang profesional berdasarkan pengalaman dan keahlian Anda.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Ringkasan yang dipersonalisasi</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Hemat waktu dan usaha</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>Hasil yang profesional dan menarik</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="group rounded-xl p-8 bg-background/60 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] shadow-sm">
                  <div className="mb-4 bg-primary/10 w-fit p-3 rounded-lg">
                    <Globe className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Multi-bahasa</h3>
                  <p className="text-muted-foreground">
                    Ganti antara Bahasa Indonesia dan Inggris dengan mudah. Cocok untuk lamaran kerja lokal maupun
                    internasional.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="group rounded-xl p-8 bg-background/60 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] shadow-sm">
                  <div className="mb-4 bg-primary/10 w-fit p-3 rounded-lg">
                    <Cloud className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Penyimpanan Cloud</h3>
                  <p className="text-muted-foreground">
                    Simpan draft CV Anda untuk diedit di lain waktu. Akses CV Anda dari mana saja dan kapan saja.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="group rounded-xl p-8 bg-background/60 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] shadow-sm">
                  <div className="mb-4 bg-primary/10 w-fit p-3 rounded-lg">
                    <Lock className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Privasi Terjamin</h3>
                  <p className="text-muted-foreground">
                    Data Anda aman dan tidak kami bagikan ke pihak manapun. Kami memprioritaskan keamanan dan privasi Anda.
                  </p>
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
