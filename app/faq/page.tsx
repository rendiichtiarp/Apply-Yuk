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
                💭 FAQ
              </Badge>
            </TextReveal>
            <h1 className="font-bb-casual text-4xl md:text-5xl mb-6">
              <TextReveal delay={0.2}>
                <span>Yang Sering </span>
                <GradientText from="from-primary" to="to-purple-500">Ditanyain</GradientText>
                <span> Nih!</span>
              </TextReveal>
            </h1>
            <TextReveal delay={0.4}>
              <p className="text-lg text-muted-foreground">
                Punya pertanyaan? Tenang, kita udah siapin jawabannya di sini! 🤗
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
                      Template di sini ATS-friendly nggak? 🤔
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Pastinya dong! 💯 Semua template kita udah didesain khusus biar gampang dibaca sama robot ATS. 
                      Kita nggak pake elemen yang ribet kayak tabel kompleks atau grafik yang bisa bikin robot ATS bingung. 
                      Jadi CV kamu pasti kebaca dengan jelas! 👌
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <AccordionItem value="item-2" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Harus login dulu ya? 🔐
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Nggak kok! Kamu bisa langsung bikin, preview, dan download CV tanpa login. 
                      Tapi kalau mau nyimpen CV buat diedit nanti, perlu bikin akun dulu ya! 😉
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <AccordionItem value="item-3" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Bisa dipake gratis kan? 💸
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Bisa banget! Semua fitur dasar bisa kamu pake gratis, mulai dari bikin CV sampai download-nya. 
                      Kita juga punya fitur premium yang lebih keren buat kamu yang butuh lebih banyak template atau fitur spesial! ✨
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <AccordionItem value="item-4" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Bisa edit CV lagi nggak? ✏️
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Bisa dong! Kalau kamu udah login dan nyimpen CV-nya, bisa diedit kapan aja. 
                      Tenang aja, semua perubahan bakal kesimpen otomatis, jadi nggak bakal ilang! 💪
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <AccordionItem value="item-5" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      ATS itu apaan sih? Penting nggak? 🧐
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      ATS itu kayak robot yang dipake perusahaan buat sortir CV. Kalau CV kamu nggak ATS-friendly, 
                      bisa-bisa CV kamu nggak lolos screening awal, padahal kamu qualified banget! 
                      Makanya penting banget punya CV yang ATS-friendly. Tenang, kita bantuin kok! 🤖✨
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>
                  <AccordionItem value="item-6" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Gimana sih cara kerja AI-nya? 🤖
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      AI kita bakal analisis semua info yang kamu masukin (pengalaman kerja, pendidikan, skill) 
                      buat bikin ringkasan yang keren dan personal. Makin lengkap info yang kamu kasih, 
                      makin bagus juga hasilnya! Dan tenang, kamu tetep bisa edit hasilnya kok! 🎯
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.7}>
                  <AccordionItem value="item-7" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      Data aku aman nggak nih? 🔒
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Aman banget! Data kamu tuh privasi yang kita jaga banget. Kita nggak akan jual atau 
                      bagi-bagi data kamu ke siapa pun. Mau tau lebih detail? Cek Kebijakan Privasi kita ya! 🛡️
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>

                <ScrollReveal delay={0.8}>
                  <AccordionItem value="item-8" className="border-none bg-background/60 hover:bg-background/80 transition-colors duration-300 rounded-xl overflow-hidden shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors duration-300">
                      CV-nya bisa didownload format apa aja? 📄
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      Kita sediain format PDF yang paling umum dipake dan diterima sama semua perusahaan. 
                      CV kamu bakal keliatan sama persis kayak yang kamu design, di device mana pun! 👌
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
