import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TextReveal } from "@/components/animations/text-reveal"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { GradientText } from "@/components/animations/gradient-text"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
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
                💡 FAQ
              </Badge>
            </TextReveal>
            <h1 className="font-bb-casual text-4xl md:text-5xl mb-6">
              <TextReveal delay={0.2}>
                <span>Pertanyaan yang </span>
                <GradientText from="from-primary" to="to-purple-500">Sering</GradientText>
                <span> Ditanyakan</span>
              </TextReveal>
            </h1>
            <TextReveal delay={0.4}>
              <p className="text-lg text-muted-foreground">
                Temukan jawaban untuk pertanyaan umum tentang platform pembuat CV kami.
              </p>
            </TextReveal>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Card Container Background */}
            <div className="absolute inset-0 -m-4 bg-gradient-to-b from-muted/50 to-background/50 backdrop-blur-xl rounded-2xl" />
            
            <div className="relative">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <ScrollReveal delay={0.1}>
                  <AccordionItem value="item-1" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Apakah semua template di sini ATS-friendly?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Ya! Semua template telah dirancang khusus agar sesuai dengan sistem pelacak pelamar (ATS). Kami
                      menghindari elemen yang dapat mengganggu pemindaian otomatis seperti tabel kompleks, kolom ganda, dan
                      grafik. Template kami menggunakan struktur linear yang mudah dibaca oleh ATS.
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <AccordionItem value="item-2" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Apakah saya harus login?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Tidak. Anda dapat menggunakan fitur dasar seperti pembuatan, preview, dan download CV tanpa perlu
                      login. Namun, jika Anda ingin menyimpan CV Anda sebagai draft untuk diedit di lain waktu, Anda perlu
                      membuat akun dan login.
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <AccordionItem value="item-3" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Apakah bisa digunakan secara gratis?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Ya! Semua fitur inti seperti pembuatan, preview, dan download CV bisa digunakan tanpa biaya. Kami
                      menawarkan beberapa fitur premium untuk pengguna yang membutuhkan lebih banyak template atau fitur
                      lanjutan.
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <AccordionItem value="item-4" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Apakah bisa mengedit ulang CV?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Bisa. Jika Anda login dan menyimpan draft, Anda bisa kembali dan edit CV Anda kapan saja. Semua
                      perubahan akan disimpan secara otomatis, sehingga Anda tidak perlu khawatir kehilangan pekerjaan Anda.
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <AccordionItem value="item-5" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Apa itu ATS dan mengapa penting?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      ATS (Applicant Tracking System) adalah perangkat lunak yang digunakan oleh perusahaan untuk memfilter
                      dan mengelola lamaran kerja. Sistem ini memindai CV untuk kata kunci dan format tertentu. CV yang
                      tidak ATS-friendly mungkin tidak akan lolos tahap awal seleksi, bahkan jika Anda memiliki kualifikasi
                      yang tepat. Itulah mengapa penting untuk memiliki CV yang dioptimalkan untuk ATS.
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>
                  <AccordionItem value="item-6" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Bagaimana cara kerja fitur AI untuk ringkasan profesional?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Fitur AI kami menganalisis informasi yang Anda masukkan di bagian pengalaman kerja, pendidikan, dan
                      keterampilan untuk menghasilkan ringkasan profesional yang dipersonalisasi. Semakin lengkap informasi
                      yang Anda berikan, semakin baik hasil ringkasan yang dihasilkan. Anda selalu dapat mengedit hasil yang
                      dihasilkan untuk menyesuaikannya dengan preferensi Anda.
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.7}>
                  <AccordionItem value="item-7" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Apakah data saya aman?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Ya, keamanan data Anda adalah prioritas kami. Kami tidak menjual atau membagikan data pribadi Anda
                      kepada pihak ketiga. Data Anda disimpan dengan aman dan hanya digunakan untuk menyediakan layanan
                      kami. Untuk informasi lebih lanjut, silakan baca Kebijakan Privasi kami.
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.8}>
                  <AccordionItem value="item-8" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Dalam format apa saya bisa mengunduh CV saya?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Anda dapat mengunduh CV Anda dalam format PDF, yang merupakan format yang paling umum digunakan dan
                      diterima oleh sebagian besar sistem perekrutan. Format PDF memastikan bahwa CV Anda akan terlihat sama
                      persis seperti yang Anda desain, terlepas dari perangkat atau perangkat lunak yang digunakan untuk
                      membukanya.
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
