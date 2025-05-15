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
                👋 Tentang Kami
              </Badge>
            </TextReveal>
            <h1 className="font-bb-casual text-4xl md:text-5xl mb-6">
              <TextReveal delay={0.2}>
                <span>Tentang </span>
                <GradientText from="from-primary" to="to-purple-500">Platform</GradientText>
                <span> Ini</span>
              </TextReveal>
            </h1>
            <TextReveal delay={0.4}>
              <p className="text-lg text-muted-foreground">
                Pelajari lebih lanjut tentang platform pembuat CV yang membantu Anda meraih pekerjaan impian.
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
                    Visi Kami
                  </Badge>
                  <h2 className="text-3xl font-bold">Memudahkan Pencari Kerja</h2>
                  <p className="text-muted-foreground">
                    Kami percaya bahwa setiap orang berhak mendapatkan kesempatan kerja yang lebih baik. Platform ini
                    dibangun untuk membantu Anda membuat CV profesional yang menonjolkan potensi diri dengan mudah dan
                    cepat.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-xl bg-background/60 hover:bg-background/80 transition-all duration-300 shadow-sm">
                      <h3 className="font-semibold mb-2">Mudah Digunakan</h3>
                      <p className="text-muted-foreground text-sm">
                        Interface yang intuitif dan panduan langkah demi langkah memastikan Anda dapat membuat CV dengan
                        mudah.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-background/60 hover:bg-background/80 transition-all duration-300 shadow-sm">
                      <h3 className="font-semibold mb-2">Hasil Profesional</h3>
                      <p className="text-muted-foreground text-sm">
                        Template yang modern dan ATS-friendly membantu CV Anda tampil profesional dan mudah dibaca.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-background/60 hover:bg-background/80 transition-all duration-300 shadow-sm">
                      <h3 className="font-semibold mb-2">Dukungan AI</h3>
                      <p className="text-muted-foreground text-sm">
                        Teknologi AI membantu Anda menulis konten yang menarik dan relevan untuk CV Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <Badge variant="outline" className="py-1.5 px-4 rounded-full border-primary/20 bg-primary/5 text-primary mb-6">
                  Bergabunglah Sekarang
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Mulai Buat CV Profesional Anda</h2>
                <p className="text-muted-foreground mb-8">
                  Tidak perlu menunggu lagi. Buat CV profesional Anda sekarang dan tingkatkan peluang karir Anda.
                </p>
                <a
                  href="/buat-cv"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                >
                  Buat CV Sekarang
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
