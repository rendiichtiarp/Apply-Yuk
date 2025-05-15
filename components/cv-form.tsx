"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { PlusCircle, Trash2, Brain, Eye, Download, Save, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useAiService } from "@/lib/ai-service"
import { useRouter } from "next/navigation"
import { generatePDF } from "@/lib/pdf-generator"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FloatingElements } from "@/components/animations/floating-elements"

interface Experience {
  id: number
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string
}

interface Education {
  id: number
  institution: string
  degree: string
  major: string
  year: string
  achievements: string
}

interface FormData {
  personal: {
    name: string
    email: string
    phone: string
    address: string
    linkedin: string
    website: string
  }
  summary: string
  experiences: Experience[]
  education: Education[]
  skills: {
    hard: string
    soft: string
  }
  languages: string
  certificates: string
  projects: string
}

export function CVForm() {
  const router = useRouter()
  const { toast } = useToast()
  const { generateSummary, loading: aiLoading } = useAiService()

  const [activeTab, setActiveTab] = useState("personal")
  const [useAI, setUseAI] = useState(false)
  const [saving, setSaving] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [hasDraft, setHasDraft] = useState(false)
  const [isClearing, setIsClearing] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    personal: {
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      website: "",
    },
    summary: "",
    experiences: [
      {
        id: 1,
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        id: 1,
        institution: "",
        degree: "",
        major: "",
        year: "",
        achievements: "",
      },
    ],
    skills: {
      hard: "",
      soft: "",
    },
    languages: "",
    certificates: "",
    projects: "",
  })
  const [currentStep, setCurrentStep] = useState(0)

  const formSections = [
    { id: "personal", label: "Data Pribadi", icon: "👤" },
    { id: "summary", label: "Ringkasan", icon: "📝" },
    { id: "experience", label: "Pengalaman", icon: "💼" },
    { id: "education", label: "Pendidikan", icon: "🎓" },
    { id: "skills", label: "Keterampilan", icon: "⚡" },
    { id: "languages", label: "Bahasa", icon: "🗣️" },
    { id: "certificates", label: "Sertifikat", icon: "🏆" },
    { id: "projects", label: "Proyek", icon: "🚀" },
  ]

  const handleInputChange = (
    section: keyof FormData,
    field: string,
    value: string
  ) => {
    setFormData((prev: FormData) => {
      if (section === "summary" || section === "languages" || section === "certificates" || section === "projects") {
        return {
          ...prev,
          [section]: value,
        }
      }
      
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        } as FormData[typeof section]
      }
    })
  }

  const handleExperienceChange = (id: number, field: keyof Experience, value: string) => {
    setFormData((prev: FormData) => ({
      ...prev,
      experiences: prev.experiences.map((exp) => 
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }))
  }

  const handleEducationChange = (id: number, field: keyof Education, value: string) => {
    setFormData((prev: FormData) => ({
      ...prev,
      education: prev.education.map((edu) => 
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }))
  }

  const addExperience = () => {
    const newId = formData.experiences.length > 0 ? Math.max(...formData.experiences.map((e) => e.id)) + 1 : 1

    setFormData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          id: newId,
          company: "",
          position: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }))
  }

  const removeExperience = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((e) => e.id !== id),
    }))
  }

  const addEducation = () => {
    const newId = formData.education.length > 0 ? Math.max(...formData.education.map((e) => e.id)) + 1 : 1

    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: newId,
          institution: "",
          degree: "",
          major: "",
          year: "",
          achievements: "",
        },
      ],
    }))
  }

  const removeEducation = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }))
  }

  const handleGenerateSummary = async () => {
    try {
      const summary = await generateSummary({
        name: formData.personal.name,
        position: formData.experiences[0]?.position || "",
        experience: formData.experiences.map((exp) => ({
          company: exp.company,
          position: exp.position,
          description: exp.description,
          period: `${exp.startDate} - ${exp.endDate}`,
        })),
        education: formData.education.map((edu) => ({
          institution: edu.institution,
          degree: edu.degree,
          year: edu.year,
        })),
        skills: formData.skills,
      })

      setFormData((prev) => ({
        ...prev,
        summary,
      }))

      toast({
        title: "Ringkasan berhasil dibuat",
        description: "Ringkasan profesional telah dibuat dengan AI",
      })
    } catch (error) {
      toast({
        title: "Gagal membuat ringkasan",
        description: "Terjadi kesalahan saat membuat ringkasan. Silakan coba lagi.",
        variant: "destructive",
      })
    }
  }

  const handleSaveDraft = () => {
    setSaving(true)

    // Simulate saving to server
    setTimeout(() => {
      // Save to localStorage for demo purposes
      localStorage.setItem("cv-draft", JSON.stringify(formData))

      setSaving(false)
      toast({
        title: "Draft tersimpan",
        description: "CV Anda telah berhasil disimpan sebagai draft",
      })
    }, 1500)
  }

  const handlePreview = () => {
    // Save current form data to localStorage before navigating
    localStorage.setItem("cv-preview-data", JSON.stringify(formData))
    router.push("/preview-cv")
  }

  const handleDownloadPDF = async () => {
    setDownloading(true)

    // Save current form data to localStorage
    localStorage.setItem("cv-preview-data", JSON.stringify(formData))

    // Create a temporary element to render the CV
    const tempDiv = document.createElement("div")
    tempDiv.id = "temp-cv-content"
    tempDiv.style.position = "absolute"
    tempDiv.style.left = "-9999px"
    tempDiv.style.top = "-9999px"
    document.body.appendChild(tempDiv)

    // Render a simplified version of the CV for PDF generation
    tempDiv.innerHTML = `
      <div style="font-family: Arial, sans-serif; padding: 20mm; width: 210mm;">
        <div style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 20px;">
          <h1 style="font-size: 24px; margin-bottom: 8px;">${formData.personal.name || "Your Name"}</h1>
          <p style="color: #666; margin-bottom: 16px;">${formData.experiences[0]?.position || "Your Position"}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 14px;">
            <div>${formData.personal.phone || "Phone Number"}</div>
            <div>${formData.personal.email || "Email Address"}</div>
            <div>${formData.personal.address || "Location"}</div>
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 18px; margin-bottom: 8px; color: #4361ee;">Ringkasan Profesional</h2>
          <p>${formData.summary || "Your professional summary will appear here."}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 18px; margin-bottom: 12px; color: #4361ee;">Pengalaman Kerja</h2>
          ${formData.experiences
            .map(
              (exp) => `
            <div style="margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between;">
                <div>
                  <h3 style="font-size: 16px; margin: 0;">${exp.position || "Position"}</h3>
                  <div style="font-size: 14px; color: #666;">${exp.company || "Company"}, ${exp.location || "Location"}</div>
                </div>
                <div style="font-size: 14px; color: #666;">${exp.startDate || "Start"} - ${exp.endDate || "End"}</div>
              </div>
              <p style="font-size: 14px; white-space: pre-line; margin-top: 8px;">${exp.description || "Description"}</p>
            </div>
          `,
            )
            .join("")}
        </div>
        
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 18px; margin-bottom: 12px; color: #4361ee;">Pendidikan</h2>
          ${formData.education
            .map(
              (edu) => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <div>
                <h3 style="font-size: 16px; margin: 0;">${edu.degree || "Degree"}</h3>
                <p style="font-size: 14px; color: #666; margin: 0;">${edu.institution || "Institution"}</p>
              </div>
              <div style="font-size: 14px; color: #666;">${edu.year || "Year"}</div>
            </div>
          `,
            )
            .join("")}
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 18px; margin-bottom: 8px; color: #4361ee;">Hard Skills</h2>
            <p>${formData.skills.hard || "Your hard skills"}</p>
          </div>
          <div>
            <h2 style="font-size: 18px; margin-bottom: 8px; color: #4361ee;">Soft Skills</h2>
            <p>${formData.skills.soft || "Your soft skills"}</p>
          </div>
        </div>
      </div>
    `

    try {
      await generatePDF("temp-cv-content", `cv-${formData.personal.name || "user"}.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      // Clean up
      document.body.removeChild(tempDiv)
      setDownloading(false)
    }
  }

  const handleClearForm = () => {
    setIsClearing(true)

    // Simulate clearing process
    setTimeout(() => {
      // Reset form data to initial state
      setFormData({
        personal: {
          name: "",
          email: "",
          phone: "",
          address: "",
          linkedin: "",
          website: "",
        },
        summary: "",
        experiences: [
          {
            id: 1,
            company: "",
            position: "",
            location: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
        education: [
          {
            id: 1,
            institution: "",
            degree: "",
            major: "",
            year: "",
            achievements: "",
          },
        ],
        skills: {
          hard: "",
          soft: "",
        },
        languages: "",
        certificates: "",
        projects: "",
      })

      // Clear localStorage
      localStorage.removeItem("cv-draft")
      setHasDraft(false)
      setIsClearing(false)

      toast({
        title: "Form dikosongkan",
        description: "Semua data form telah dihapus",
      })
    }, 1000)
  }

  // Load draft data if available
  useEffect(() => {
    const savedDraft = localStorage.getItem("cv-draft")
    if (savedDraft) {
      try {
        const parsedData = JSON.parse(savedDraft)
        setFormData(parsedData)
        setHasDraft(true)
      } catch (e) {
        console.error("Error parsing saved draft:", e)
      }
    }
  }, [])

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  }

  const inputVariants = {
    focus: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    blur: { 
      scale: 1,
      transition: { duration: 0.2 }
    }
  }

  const tabVariants = {
    hidden: { 
      opacity: 0, 
      x: 20,
      filter: "blur(10px)",
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      filter: "blur(10px)",
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  }

  const tabContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    if (page + newDirection >= 0 && page + newDirection < formSections.length) {
      setPage([page + newDirection, newDirection])
      setCurrentStep(page + newDirection)
      setActiveTab(formSections[page + newDirection].id)
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={formVariants}
      className="relative overflow-hidden"
    >
      <Tabs value={formSections[currentStep].id} onValueChange={setActiveTab}>
        {/* Progress Bar with enhanced animation */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <motion.h2 
              className="text-xl font-semibold flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-2xl"
                initial={{ scale: 0.5, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                {formSections[currentStep].icon}
              </motion.span>
              <motion.span
                key={formSections[currentStep].label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {formSections[currentStep].label}
              </motion.span>
            </motion.h2>
            <div className="flex items-center gap-4">
              {hasDraft && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => {
                      if (window.confirm("Apakah Anda yakin ingin mengosongkan semua data form?")) {
                        handleClearForm()
                      }
                    }}
                    disabled={isClearing}
                  >
                    {isClearing ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Mengosongkan...
                      </>
                    ) : (
                      <>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Kosongkan Form
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
              <motion.p 
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Langkah {currentStep + 1} dari {formSections.length}
              </motion.p>
            </div>
          </div>
          <div className="w-full bg-muted/50 h-2 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ 
                width: `${((currentStep + 1) / formSections.length) * 100}%`,
              }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            />
          </div>
        </div>

        <div className="bg-background/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-border/50 shadow-sm">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="max-w-4xl mx-auto"
            >
              <TabsContent value="personal" className="space-y-6 mt-0">
                <motion.div
                  variants={tabContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Personal fields with motion variants */}
                    {Object.entries(formData.personal).map(([field, value], index) => (
                      <motion.div
                        key={field}
                        variants={itemVariants}
                        className="space-y-3"
                      >
                        <Label htmlFor={field} className="text-sm font-medium">
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </Label>
                        <Input
                          id={field}
                          value={value}
                          onChange={(e) => handleInputChange("personal", field, e.target.value)}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          placeholder={
                            field === "name" ? "John Doe" :
                            field === "email" ? "johndoe@example.com" :
                            field === "phone" ? "+62 812-3456-7890" :
                            field === "address" ? "Jakarta, Indonesia" :
                            field === "linkedin" ? "linkedin.com/in/johndoe" :
                            field === "website" ? "johndoe.com atau github.com/johndoe" :
                            `Masukkan ${field}`
                          }
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="summary" className="space-y-6 mt-0">
                <motion.div
                  variants={tabContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <Label htmlFor="summary" className="text-sm font-medium">Ringkasan Profesional</Label>
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="ai-summary" 
                          checked={useAI} 
                          onCheckedChange={setUseAI}
                          className="data-[state=checked]:bg-primary"
                        />
                        <Label htmlFor="ai-summary" className="flex items-center cursor-pointer text-sm">
                          <Brain className="h-4 w-4 mr-1.5 text-primary" />
                          Gunakan AI
                        </Label>
                      </div>
                    </div>
                    <Textarea
                      id="summary"
                      placeholder="Tuliskan ringkasan profesional Anda dalam 3-5 kalimat yang menggambarkan pengalaman, keahlian, dan tujuan karier Anda."
                      rows={6}
                      value={formData.summary}
                      onChange={(e) => setFormData((prev) => ({ ...prev, summary: e.target.value }))}
                      className="resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                    {useAI && (
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground mb-3">
                            AI akan membantu membuat ringkasan profesional berdasarkan data yang Anda masukkan di bagian lain.
                            Lengkapi data pengalaman dan pendidikan untuk hasil yang lebih baik.
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full hover:bg-primary/10 transition-colors duration-300"
                            onClick={handleGenerateSummary}
                            disabled={aiLoading}
                          >
                            {aiLoading ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Generating...
                              </>
                            ) : (
                              <>
                                <Brain className="h-4 w-4 mr-2" />
                                Generate dengan AI
                              </>
                            )}
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </motion.div>
                </motion.div>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6 mt-0">
                {formData.experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="p-6 border border-border/50 rounded-xl bg-background/60 backdrop-blur-sm relative hover:bg-background/80 transition-all duration-300"
                  >
                    <div className="absolute top-4 right-4">
                      {formData.experiences.length > 1 && (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => removeExperience(exp.id)}
                          className="hover:bg-destructive/10 hover:text-destructive transition-colors duration-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <h3 className="font-medium mb-6 text-primary">Pengalaman Kerja {index + 1}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor={`company-${exp.id}`}>Nama Perusahaan</Label>
                        <Input
                          id={`company-${exp.id}`}
                          placeholder="PT Example Indonesia"
                          value={exp.company}
                          onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor={`position-${exp.id}`}>Posisi</Label>
                        <Input
                          id={`position-${exp.id}`}
                          placeholder="Software Engineer"
                          value={exp.position}
                          onChange={(e) => handleExperienceChange(exp.id, "position", e.target.value)}
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor={`location-${exp.id}`}>Lokasi</Label>
                        <Input
                          id={`location-${exp.id}`}
                          placeholder="Jakarta, Indonesia"
                          value={exp.location}
                          onChange={(e) => handleExperienceChange(exp.id, "location", e.target.value)}
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor={`period-${exp.id}`}>Periode</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            id={`start-${exp.id}`}
                            placeholder="Jan 2020"
                            value={exp.startDate}
                            onChange={(e) => handleExperienceChange(exp.id, "startDate", e.target.value)}
                          />
                          <Input
                            id={`end-${exp.id}`}
                            placeholder="Present"
                            value={exp.endDate}
                            onChange={(e) => handleExperienceChange(exp.id, "endDate", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-3 md:col-span-2">
                        <Label htmlFor={`description-${exp.id}`}>Deskripsi Tugas</Label>
                        <Textarea
                          id={`description-${exp.id}`}
                          placeholder="Jelaskan tanggung jawab dan pencapaian Anda di posisi ini. Gunakan kata kerja aktif dan sertakan hasil yang terukur."
                          rows={4}
                          value={exp.description}
                          onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}

                <Button 
                  variant="outline" 
                  onClick={addExperience} 
                  className="w-full group hover:bg-primary/5 transition-all duration-300"
                >
                  <PlusCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Tambah Pengalaman Kerja
                </Button>
              </TabsContent>

              <TabsContent value="education" className="space-y-6 mt-0">
                {formData.education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className="p-6 border border-border/50 rounded-xl bg-background/60 backdrop-blur-sm relative hover:bg-background/80 transition-all duration-300"
                  >
                    <div className="absolute top-4 right-4">
                      {formData.education.length > 1 && (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => removeEducation(edu.id)}
                          className="hover:bg-destructive/10 hover:text-destructive transition-colors duration-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <h3 className="font-medium mb-6 text-primary">Pendidikan {index + 1}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor={`institution-${edu.id}`}>Nama Institusi</Label>
                        <Input
                          id={`institution-${edu.id}`}
                          placeholder="Universitas Indonesia"
                          value={edu.institution}
                          onChange={(e) => handleEducationChange(edu.id, "institution", e.target.value)}
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor={`degree-${edu.id}`}>Jenjang</Label>
                        <Input
                          id={`degree-${edu.id}`}
                          placeholder="S1 / Bachelor's Degree"
                          value={edu.degree}
                          onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor={`major-${edu.id}`}>Jurusan</Label>
                        <Input
                          id={`major-${edu.id}`}
                          placeholder="Teknik Informatika"
                          value={edu.major}
                          onChange={(e) => handleEducationChange(edu.id, "major", e.target.value)}
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor={`graduation-${edu.id}`}>Tahun Lulus</Label>
                        <Input
                          id={`graduation-${edu.id}`}
                          placeholder="2022"
                          value={edu.year}
                          onChange={(e) => handleEducationChange(edu.id, "year", e.target.value)}
                        />
                      </div>
                      <div className="space-y-3 md:col-span-2">
                        <Label htmlFor={`achievements-${edu.id}`}>Pencapaian (Opsional)</Label>
                        <Textarea
                          id={`achievements-${edu.id}`}
                          placeholder="Prestasi akademik, kegiatan organisasi, atau proyek penelitian yang relevan."
                          rows={3}
                          value={edu.achievements}
                          onChange={(e) => handleEducationChange(edu.id, "achievements", e.target.value)}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}

                <Button 
                  variant="outline" 
                  onClick={addEducation} 
                  className="w-full group hover:bg-primary/5 transition-all duration-300"
                >
                  <PlusCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Tambah Pendidikan
                </Button>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6 mt-0">
                <motion.div
                  variants={tabContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="space-y-3">
                    <Label htmlFor="hard-skills">Hard Skills</Label>
                    <Textarea
                      id="hard-skills"
                      placeholder="Masukkan keterampilan teknis Anda, dipisahkan dengan koma. Contoh: Java, Python, SQL, Adobe Photoshop, Microsoft Excel"
                      rows={3}
                      value={formData.skills.hard}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          skills: { ...prev.skills, hard: e.target.value },
                        }))
                      }
                    />
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: {
                        delay: 0.1,
                        when: "beforeChildren",
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="space-y-3">
                    <Label htmlFor="soft-skills">Soft Skills</Label>
                    <Textarea
                      id="soft-skills"
                      placeholder="Masukkan keterampilan non-teknis Anda, dipisahkan dengan koma. Contoh: Komunikasi, Kepemimpinan, Manajemen Waktu, Pemecahan Masalah"
                      rows={3}
                      value={formData.skills.soft}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          skills: { ...prev.skills, soft: e.target.value },
                        }))
                      }
                    />
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="languages" className="space-y-6 mt-0">
                <motion.div
                  variants={tabContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="space-y-3">
                    <Label htmlFor="languages">Bahasa</Label>
                    <Textarea
                      id="languages"
                      placeholder="Masukkan bahasa yang Anda kuasai beserta tingkat kemampuannya. Contoh: Bahasa Indonesia (Native), English (Professional), 日本語 (Basic)"
                      rows={3}
                      value={formData.languages}
                      onChange={(e) => setFormData((prev) => ({ ...prev, languages: e.target.value }))}
                    />
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="certificates" className="space-y-6 mt-0">
                <motion.div
                  variants={tabContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="space-y-3">
                    <Label htmlFor="certificates">Sertifikat / Pelatihan</Label>
                    <Textarea
                      id="certificates"
                      placeholder="Masukkan sertifikat atau pelatihan yang Anda miliki. Format: Nama Sertifikat - Penyelenggara (Tahun). Contoh: AWS Certified Solutions Architect - Amazon Web Services (2022)"
                      rows={5}
                      value={formData.certificates}
                      onChange={(e) => setFormData((prev) => ({ ...prev, certificates: e.target.value }))}
                    />
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6 mt-0">
                <motion.div
                  variants={tabContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="space-y-3">
                    <Label htmlFor="projects">Proyek / Portofolio</Label>
                    <Textarea
                      id="projects"
                      placeholder="Masukkan proyek atau portofolio yang relevan. Format: Nama Proyek - Deskripsi Singkat - Link (opsional). Contoh: E-commerce Website - Mengembangkan website e-commerce menggunakan React dan Node.js - github.com/username/project"
                      rows={5}
                      value={formData.projects}
                      onChange={(e) => setFormData((prev) => ({ ...prev, projects: e.target.value }))}
                    />
                  </div>
                </motion.div>
              </TabsContent>

              {/* Navigation Buttons with enhanced animations */}
              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto order-2 sm:order-2">
                  {currentStep === formSections.length - 1 && (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90"
                          onClick={handlePreview}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Pratinjau CV
                        </Button>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handleDownloadPDF}
                          disabled={downloading}
                        >
                          {downloading ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Downloading...
                            </>
                          ) : (
                            <>
                              <Download className="h-4 w-4 mr-2" />
                              Download PDF
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto order-1 sm:order-1">
                  <motion.div
                    className="w-full sm:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Button 
                      variant="secondary" 
                      className="w-full transition-all duration-200 hover:bg-secondary/80" 
                      onClick={handleSaveDraft} 
                      disabled={saving}
                    >
                      {saving ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Menyimpan...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Simpan Draft
                        </>
                      )}
                    </Button>
                  </motion.div>
                  
                  {currentStep > 0 && (
                    <motion.div
                      whileHover={{ scale: 1.02, x: -5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        variant="outline" 
                        className="w-full group"
                        onClick={() => paginate(-1)}
                      >
                        <motion.span
                          className="mr-2"
                          initial={{ x: 0 }}
                          whileHover={{ x: -4 }}
                          transition={{ duration: 0.2 }}
                        >
                          ←
                        </motion.span>
                        Sebelumnya
                      </Button>
                    </motion.div>
                  )}
                  {currentStep < formSections.length - 1 && (
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 group"
                        onClick={() => paginate(1)}
                      >
                        Selanjutnya
                        <motion.span
                          className="ml-2"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </motion.div>
  )
}
