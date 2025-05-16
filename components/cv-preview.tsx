"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Mail, MapPin, Linkedin, Globe, Calendar, Building, Download, ArrowLeft, Share2, Copy, Facebook, Twitter, MessageCircle, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { generatePDF } from "@/lib/pdf-generator"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

// Fallback data untuk CV kosong
function getFallbackData() {
  return {
    personal: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+62 812 3456 7890",
      address: "Jakarta, Indonesia",
      linkedin: "linkedin.com/in/johndoe",
      website: "johndoe.com",
    },
    summary:
      "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif untuk meningkatkan efisiensi bisnis dan pengalaman pengguna.",
    experiences: [
      {
        id: 1,
        company: "PT Tech Solutions",
        position: "Senior Software Engineer",
        location: "Jakarta",
        startDate: "Jan 2020",
        endDate: "Present",
        description:
          "• Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB\n• Memimpin tim 5 developer dalam proyek e-commerce\n• Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database",
      }
    ],
    education: [
      {
        id: 1,
        institution: "Universitas Indonesia",
        degree: "S1 Teknik Informatika",
        year: "2018",
        achievements: "GPA 3.8/4.0",
      }
    ],
    skills: {
      hard: "JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS",
      soft: "Kepemimpinan, Komunikasi, Manajemen Waktu, Problem Solving",
    },
    languages: "Bahasa Indonesia (Native), English (Professional)"
  }
}

const previewVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const controlsVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
}

const templateVariants = {
  initial: { opacity: 0, scale: 0.95 },
  enter: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1]
    }
  }
}

const shareToFacebook = (url: string) => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
}

const shareToTwitter = (url: string, text: string) => {
  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank')
}

const shareToWhatsApp = (url: string, text: string) => {
  window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank')
}

const generateShareableLink = () => {
  const uniqueId = Math.random().toString(36).substring(2, 10)
  return {
    url: `https://cvats.id/share/${uniqueId}`,
    id: uniqueId
  }
}

interface CVPreviewProps {
  initialData?: any
  isSharedView?: boolean
}

export function CVPreview({ initialData, isSharedView = false }: CVPreviewProps) {
  const { toast } = useToast()
  const [template, setTemplate] = useState("modern")
  const [language, setLanguage] = useState("id")
  const [cvData, setCvData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [shareableLink, setShareableLink] = useState("")
  const [isSharing, setIsSharing] = useState(false)

  useEffect(() => {
    if (initialData) {
      setCvData(initialData)
    } else {
      const savedData = localStorage.getItem("cv-preview-data")
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData)
          setCvData(parsedData)
        } catch (e) {
          console.error("Error parsing CV data:", e)
          setCvData(getFallbackData())
        }
      } else {
        setCvData(getFallbackData())
      }
    }
    setLoading(false)
  }, [initialData])

  const handleShare = async () => {
    try {
      setIsSharing(true)
      
      const response = await fetch('/api/share', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cvData }),
      })

      if (!response.ok) {
        throw new Error('Failed to share CV')
      }

      const { shareUrl } = await response.json()
      setShareableLink(shareUrl)

      toast({
        title: "Link Siap Dibagikan",
        description: "Link untuk CV Anda telah dibuat dan siap untuk dibagikan.",
      })
    } catch (error) {
      console.error("Error creating share link:", error)
      toast({
        title: "Error",
        description: "Gagal membuat link share. Silakan coba lagi.",
        variant: "destructive",
      })
    } finally {
      setIsSharing(false)
    }
  }

  const handleDownload = async () => {
    try {
      await generatePDF("cv-content", `cv-${cvData.personal.name || "user"}.pdf`)
    } catch (error) {
      console.error("Error downloading PDF:", error)
      toast({
        title: "Error",
        description: "Failed to download PDF. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleCopyLink = async () => {
    if (!shareableLink) {
      await handleShare()
    }
    
    try {
      await navigator.clipboard.writeText(shareableLink)
      toast({
        title: "Link Tersalin",
        description: "Link CV telah disalin ke clipboard.",
      })
    } catch (err) {
      toast({
        title: "Gagal Menyalin",
        description: "Tidak dapat menyalin link ke clipboard.",
        variant: "destructive",
      })
    }
  }

  const ShareMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full relative w-full sm:w-auto">
          <Share2 className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
          Bagikan CV
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={handleCopyLink} className="cursor-pointer">
          <Copy className="mr-2 h-4 w-4" />
          <span>Salin Link</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`Lihat CV saya di: ${shareableLink || ''}`)}`, '_blank')}
          className="cursor-pointer"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          <span>WhatsApp</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableLink || '')}`, '_blank')}
          className="cursor-pointer"
        >
          <Facebook className="mr-2 h-4 w-4" />
          <span>Facebook</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareableLink || '')}&text=${encodeURIComponent('Lihat CV saya di:')}`, '_blank')}
          className="cursor-pointer"
        >
          <Twitter className="mr-2 h-4 w-4" />
          <span>Twitter</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <motion.div
          animate={{
            rotate: 360,
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <motion.div 
      className="space-y-6"
      variants={previewVariants}
      initial="hidden"
      animate="visible"
    >
      {!isSharedView && (
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4 w-full px-4 md:px-0"
          variants={controlsVariants}
        >
          <div className="flex gap-3 w-full md:w-auto flex-wrap justify-center md:justify-start">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <Button asChild variant="outline" size="sm" className="rounded-full relative">
                <Link href="/buat-cv">
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Kembali Edit
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Tabs defaultValue="id" className="w-full sm:w-auto">
              <TabsList className="grid grid-cols-2 w-full bg-muted/50 p-1 rounded-lg min-w-[200px]">
                <TabsTrigger 
                  value="id" 
                  onClick={() => setLanguage("id")}
                  className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                >
                  Indonesia
                </TabsTrigger>
                <TabsTrigger 
                  value="en" 
                  onClick={() => setLanguage("en")}
                  className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                >
                  English
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="modern" className="w-full sm:w-auto">
              <TabsList className="grid grid-cols-3 w-full bg-muted/50 p-1 rounded-lg min-w-[250px]">
                <TabsTrigger 
                  value="modern" 
                  onClick={() => setTemplate("modern")}
                  className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300 text-sm"
                >
                  Modern
                </TabsTrigger>
                <TabsTrigger 
                  value="classic" 
                  onClick={() => setTemplate("classic")}
                  className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300 text-sm"
                >
                  Classic
                </TabsTrigger>
                <TabsTrigger 
                  value="minimal" 
                  onClick={() => setTemplate("minimal")}
                  className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300 text-sm"
                >
                  Minimal
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={template}
          variants={templateVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="modern-glass rounded-xl p-2 sm:p-4 soft-shadow overflow-hidden relative group mx-4 md:mx-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/0 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.015] dark:opacity-[0.03]" />
          
          <div className="cv-paper-preview relative overflow-x-auto">
            <div 
              className="cv-paper mx-auto bg-white dark:bg-gray-900 shadow-lg scale-[0.85] sm:scale-90 md:scale-100 print:scale-100 print:shadow-none overflow-hidden" 
              id="cv-content" 
              style={{ 
                width: '210mm',
                height: '297mm',
                margin: '0 auto',
                padding: '15mm',
                boxSizing: 'border-box',
                backgroundColor: 'white'
              }}
            >
              {cvData && (
                <div className="flex flex-col space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h1 className="text-3xl font-bold mb-3">{cvData.personal.name || "John Doe"}</h1>
                    <p className="text-lg text-primary mb-4">
                      {cvData.experiences[0]?.position || "Senior Software Engineer"}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <span>{cvData.personal.phone || "+62 812 3456 7890"}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        <span>{cvData.personal.email || "john.doe@example.com"}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{cvData.personal.address || "Jakarta, Indonesia"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[2fr,1fr] gap-8">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-lg font-bold mb-4 text-primary border-b border-gray-200 pb-2">
                          {language === "id" ? "Pengalaman Kerja" : "Work Experience"}
                        </h2>
                        <div className="space-y-5">
                          {(cvData.experiences || []).map((exp: any, index: number) => (
                            <div key={index}>
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="font-bold text-base">{exp.position || "Software Engineer"}</h3>
                                  <div className="flex items-center text-sm text-gray-600 mt-1">
                                    <Building className="h-3.5 w-3.5 mr-1.5" />
                                    <span>
                                      {exp.company || "PT Tech Solutions"}, {exp.location || "Jakarta"}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                                  <span>{`${exp.startDate || "Jan 2020"} - ${exp.endDate || "Present"}`}</span>
                                </div>
                              </div>
                              <p className="mt-2 text-sm leading-relaxed whitespace-pre-line">
                                {exp.description ||
                                  "• Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB\n• Memimpin tim 5 developer dalam proyek e-commerce\n• Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database"}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
                          {language === "id" ? "Ringkasan" : "Summary"}
                        </h2>
                        <p className="text-sm leading-relaxed">
                          {cvData.summary ||
                            "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif."}
                        </p>
                      </div>

                      <div>
                        <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
                          {language === "id" ? "Pendidikan" : "Education"}
                        </h2>
                        <div className="space-y-3">
                          {(cvData.education || []).map((edu: any, index: number) => (
                            <div key={index}>
                              <h3 className="font-bold text-base">{edu.degree || "S1 Teknik Informatika"}</h3>
                              <p className="text-sm text-gray-600">{edu.institution || "Universitas Indonesia"}</p>
                              <p className="text-sm text-gray-600">{edu.year || "2018"}</p>
                              {edu.achievements && (
                                <p className="text-sm text-gray-600 mt-1">{edu.achievements}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
                          {language === "id" ? "Keahlian" : "Skills"}
                        </h2>
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-bold text-sm mb-2">Hard Skills</h3>
                            <p className="text-sm leading-relaxed">
                              {cvData.skills?.hard || "JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS"}
                            </p>
                          </div>
                          <div>
                            <h3 className="font-bold text-sm mb-2">Soft Skills</h3>
                            <p className="text-sm leading-relaxed">
                              {cvData.skills?.soft || "Kepemimpinan, Komunikasi, Manajemen Waktu, Problem Solving"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {(cvData.languages || "").length > 0 && (
                        <div>
                          <h2 className="text-lg font-bold mb-3 text-primary border-b border-gray-200 pb-2">
                            {language === "id" ? "Bahasa" : "Languages"}
                          </h2>
                          <p className="text-sm leading-relaxed">
                            {cvData.languages || "Bahasa Indonesia (Native), English (Professional)"}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {!isSharedView && (
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 px-4 md:px-0"
          variants={controlsVariants}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="relative group w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <ShareMenu />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="relative group w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <Button 
              className="rounded-full relative w-full sm:w-auto" 
              onClick={handleDownload}
              disabled={isSharing}
            >
              <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
              {isSharing ? 'Memproses...' : 'Download PDF'}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}
