"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Mail, MapPin, Linkedin, Globe, Calendar, Building, Download, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { generatePDF } from "@/lib/pdf-generator"
import { motion, AnimatePresence } from "framer-motion"

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

export function CVPreview() {
  const { toast } = useToast()
  const [template, setTemplate] = useState("modern")
  const [language, setLanguage] = useState("id")
  const [cvData, setCvData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load CV data from localStorage
    const savedData = localStorage.getItem("cv-preview-data")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setCvData(parsedData)
      } catch (e) {
        console.error("Error parsing CV data:", e)
        // Use fallback data if parsing fails
        setCvData(getFallbackData())
      }
    } else {
      // Use fallback data if no saved data exists
      setCvData(getFallbackData())
    }
    setLoading(false)
  }, [])

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

  const handleShare = () => {
    // Create a shareable link (in a real app, this would generate a unique URL)
    const dummyShareableLink = `https://cvats.id/share/${Math.random().toString(36).substring(2, 10)}`

    // Copy to clipboard
    navigator.clipboard
      .writeText(dummyShareableLink)
      .then(() => {
        toast({
          title: "Link Copied",
          description: "A shareable link to your CV has been copied to clipboard.",
        })
      })
      .catch(() => {
        toast({
          title: "Failed to Copy",
          description: "Could not copy the link to clipboard.",
          variant: "destructive",
        })
      })
  }

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
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <Button size="sm" className="rounded-full relative" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
              Download PDF
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
            <div className="cv-paper min-w-[595px] max-w-[850px] mx-auto bg-white dark:bg-gray-900 p-6 sm:p-8 md:p-10 shadow-lg scale-[0.85] sm:scale-90 md:scale-100" id="cv-content">
              {template === "modern" && (
                <div className="flex flex-col space-y-4 sm:space-y-6">
                  {/* Header */}
                  <div className="border-b pb-6">
                    <h1 className="text-3xl font-bold mb-2">{cvData.personal.name || "John Doe"}</h1>
                    <p className="text-gray-600 mb-4">
                      {cvData.experiences[0]?.position || "Senior Software Engineer"}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm justify-center md:justify-start">
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
                      <div className="flex items-center">
                        <Linkedin className="h-4 w-4 mr-2 text-primary" />
                        <span>{cvData.personal.linkedin || "linkedin.com/in/johndoe"}</span>
                      </div>
                      {cvData.personal.website && (
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-primary" />
                          <span>{cvData.personal.website}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h2 className="text-lg font-bold mb-2 text-primary">
                      {language === "id" ? "Ringkasan Profesional" : "Professional Summary"}
                    </h2>
                    <p>
                      {cvData.summary ||
                        "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif untuk meningkatkan efisiensi bisnis dan pengalaman pengguna."}
                    </p>
                  </div>

                  {/* Experience */}
                  <div>
                    <h2 className="text-lg font-bold mb-3 text-primary">
                      {language === "id" ? "Pengalaman Kerja" : "Work Experience"}
                    </h2>

                    <div className="space-y-4">
                      {(cvData.experiences || []).map((exp: any, index: number) => (
                        <div key={index}>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold">{exp.position || "Software Engineer"}</h3>
                              <div className="flex items-center text-sm text-gray-600">
                                <Building className="h-3 w-3 mr-1" />
                                <span>
                                  {exp.company || "PT Tech Solutions"}, {exp.location || "Jakarta"}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{`${exp.startDate || "Jan 2020"} - ${exp.endDate || "Present"}`}</span>
                            </div>
                          </div>
                          <p className="mt-2 whitespace-pre-line text-sm">
                            {exp.description ||
                              "• Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB\n• Memimpin tim 5 developer dalam proyek e-commerce\n• Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h2 className="text-lg font-bold mb-3 text-primary">
                      {language === "id" ? "Pendidikan" : "Education"}
                    </h2>

                    <div className="space-y-2">
                      {(cvData.education || []).map((edu: any, index: number) => (
                        <div key={index} className="flex justify-between">
                          <div>
                            <h3 className="font-bold">{edu.degree || "S1 Teknik Informatika"}</h3>
                            <p className="text-sm text-gray-600">{edu.institution || "Universitas Indonesia"}</p>
                            {edu.achievements && <p className="text-sm text-gray-600 mt-1">{edu.achievements}</p>}
                          </div>
                          <div className="text-sm text-gray-600">{edu.year || "2018"}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <h2 className="text-lg font-bold mb-2 text-primary">
                        {language === "id" ? "Hard Skills" : "Hard Skills"}
                      </h2>
                      <p>{cvData.skills?.hard || "JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS"}</p>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold mb-2 text-primary">
                        {language === "id" ? "Soft Skills" : "Soft Skills"}
                      </h2>
                      <p>{cvData.skills?.soft || "Kepemimpinan, Komunikasi, Manajemen Waktu, Problem Solving"}</p>
                    </div>
                  </div>

                  {/* Languages */}
                  {(cvData.languages || "").length > 0 && (
                    <div>
                      <h2 className="text-lg font-bold mb-2 text-primary">
                        {language === "id" ? "Bahasa" : "Languages"}
                      </h2>
                      <p>{cvData.languages || "Bahasa Indonesia (Native), English (Professional)"}</p>
                    </div>
                  )}

                  {/* Certificates */}
                  {(cvData.certificates || "").length > 0 && (
                    <div>
                      <h2 className="text-lg font-bold mb-2 text-primary">
                        {language === "id" ? "Sertifikat" : "Certificates"}
                      </h2>
                      <p>
                        {cvData.certificates ||
                          "AWS Certified Solutions Architect (2022), Google Professional Cloud Developer (2021)"}
                      </p>
                    </div>
                  )}

                  {/* Projects */}
                  {(cvData.projects || "").length > 0 && (
                    <div>
                      <h2 className="text-lg font-bold mb-2 text-primary">
                        {language === "id" ? "Proyek" : "Projects"}
                      </h2>
                      <p>
                        {cvData.projects ||
                          "E-commerce Platform - Mengembangkan platform e-commerce full-stack dengan fitur pembayaran dan analitik"}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {template === "classic" && (
                <div className="flex flex-col space-y-6">
                  {/* Header - Classic Style */}
                  <div className="text-center border-b pb-6">
                    <h1 className="text-3xl font-bold uppercase mb-2">{cvData.personal.name || "John Doe"}</h1>
                    <p className="text-gray-600 mb-4">
                      {cvData.experiences[0]?.position || "Senior Software Engineer"}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-600" />
                        <span>{cvData.personal.phone || "+62 812 3456 7890"}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-gray-600" />
                        <span>{cvData.personal.email || "john.doe@example.com"}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-600" />
                        <span>{cvData.personal.address || "Jakarta, Indonesia"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rest of the sections with classic styling */}
                  <div>
                    <h2 className="text-lg font-bold uppercase mb-2 border-b">
                      {language === "id" ? "Ringkasan Profesional" : "Professional Summary"}
                    </h2>
                    <p>
                      {cvData.summary ||
                        "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif untuk meningkatkan efisiensi bisnis dan pengalaman pengguna."}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold uppercase mb-3 border-b">
                      {language === "id" ? "Pengalaman Kerja" : "Work Experience"}
                    </h2>

                    <div className="space-y-4">
                      {(cvData.experiences || []).map((exp: any, index: number) => (
                        <div key={index}>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold">{exp.position || "Software Engineer"}</h3>
                              <div className="flex items-center text-sm text-gray-600">
                                <span>
                                  {exp.company || "PT Tech Solutions"}, {exp.location || "Jakarta"}
                                </span>
                              </div>
                            </div>
                            <div className="text-sm text-gray-600">
                              <span>{`${exp.startDate || "Jan 2020"} - ${exp.endDate || "Present"}`}</span>
                            </div>
                          </div>
                          <p className="mt-2 whitespace-pre-line text-sm">
                            {exp.description ||
                              "• Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB\n• Memimpin tim 5 developer dalam proyek e-commerce\n• Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Other sections follow the same pattern */}
                  <div>
                    <h2 className="text-lg font-bold uppercase mb-3 border-b">
                      {language === "id" ? "Pendidikan" : "Education"}
                    </h2>
                    <div className="space-y-2">
                      {(cvData.education || []).map((edu: any, index: number) => (
                        <div key={index} className="flex justify-between">
                          <div>
                            <h3 className="font-bold">{edu.degree || "S1 Teknik Informatika"}</h3>
                            <p className="text-sm text-gray-600">{edu.institution || "Universitas Indonesia"}</p>
                          </div>
                          <div className="text-sm text-gray-600">{edu.year || "2018"}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {template === "minimal" && (
                <div className="flex flex-col space-y-6">
                  {/* Minimal template content */}
                  <div>
                    <h1 className="text-2xl font-bold mb-1">{cvData.personal.name || "John Doe"}</h1>
                    <p className="text-gray-600 text-sm mb-4">
                      {cvData.experiences[0]?.position || "Senior Software Engineer"}
                    </p>

                    <div className="flex flex-wrap gap-3 text-xs">
                      <span>{cvData.personal.email || "john.doe@example.com"}</span>
                      <span>•</span>
                      <span>{cvData.personal.phone || "+62 812 3456 7890"}</span>
                      <span>•</span>
                      <span>{cvData.personal.address || "Jakarta, Indonesia"}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm">
                      {cvData.summary ||
                        "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif untuk meningkatkan efisiensi bisnis dan pengalaman pengguna."}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
                      {language === "id" ? "Pengalaman" : "Experience"}
                    </h2>
                    <div className="space-y-3">
                      {(cvData.experiences || []).map((exp: any, index: number) => (
                        <div key={index}>
                          <div className="flex justify-between items-baseline">
                            <h3 className="font-medium">{exp.position || "Software Engineer"}</h3>
                            <span className="text-xs text-gray-500">{`${exp.startDate || "Jan 2020"} - ${exp.endDate || "Present"}`}</span>
                          </div>
                          <p className="text-xs text-gray-600">{exp.company || "PT Tech Solutions"}</p>
                          <p className="mt-1 text-xs whitespace-pre-line">
                            {exp.description ||
                              "• Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB\n• Memimpin tim 5 developer dalam proyek e-commerce\n• Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
                      {language === "id" ? "Pendidikan" : "Education"}
                    </h2>
                    <div className="space-y-2">
                      {(cvData.education || []).map((edu: any, index: number) => (
                        <div key={index} className="flex justify-between">
                          <div>
                            <h3 className="font-medium">{edu.degree || "S1 Teknik Informatika"}</h3>
                            <p className="text-xs text-gray-600">{edu.institution || "Universitas Indonesia"}</p>
                          </div>
                          <div className="text-xs text-gray-500">{edu.year || "2018"}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Skills</h2>
                      <p className="text-xs">
                        {cvData.skills?.hard || "JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS"}
                      </p>
                    </div>
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Languages</h2>
                      <p className="text-xs">
                        {cvData.languages || "Bahasa Indonesia (Native), English (Professional)"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

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
          <Button variant="outline" className="rounded-full relative w-full sm:w-auto" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
            Share CV
          </Button>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="relative group w-full sm:w-auto"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
          <Button className="rounded-full relative w-full sm:w-auto" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
            Download PDF
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

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
          "• Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB\n• Memimpin tim 5 developer dalam proyek e-commerce dengan nilai $500K\n• Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database",
      },
      {
        id: 2,
        company: "PT Digital Indonesia",
        position: "Software Engineer",
        location: "Bandung",
        startDate: "Jun 2018",
        endDate: "Dec 2019",
        description:
          "• Mengembangkan fitur-fitur baru untuk aplikasi mobile menggunakan React Native\n• Berkolaborasi dengan tim desain untuk implementasi UI/UX\n• Mengurangi bug sebesar 30% melalui implementasi unit testing",
      },
    ],
    education: [
      {
        id: 1,
        institution: "Universitas Indonesia",
        degree: "S1 Teknik Informatika",
        major: "Computer Science",
        year: "2018",
        achievements: "GPA 3.8/4.0, Ketua Himpunan Mahasiswa",
      },
    ],
    skills: {
      hard: "JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS",
      soft: "Kepemimpinan, Komunikasi, Manajemen Waktu, Problem Solving",
    },
    languages: "Bahasa Indonesia (Native), English (Professional)",
    certificates: "AWS Certified Solutions Architect (2022), Google Professional Cloud Developer (2021)",
    projects: "E-commerce Platform - Mengembangkan platform e-commerce full-stack dengan fitur pembayaran dan analitik",
  }
}
