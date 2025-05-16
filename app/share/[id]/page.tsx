"use client"

import { useEffect, useState } from 'react'
import { CVPreview } from '@/components/cv-preview'
import { useToast } from '@/components/ui/use-toast'
import { Suspense } from 'react'
import { use } from 'react'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { TextReveal } from "@/components/animations/text-reveal"
import { GradientText } from "@/components/animations/gradient-text"
import { Button } from "@/components/ui/button"
import { Download, FileEdit, Share2, Sparkles, Rocket, CheckCircle2 } from "lucide-react"
import { generatePDF } from "@/lib/pdf-generator"
import Link from "next/link"

interface CVData {
  personal: {
    name: string;
    email: string;
    phone: string;
    address: string;
    linkedin?: string;
    website?: string;
  };
  summary: string;
  experiences: Array<{
    id: number;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: number;
    institution: string;
    degree: string;
    year: string;
    achievements?: string;
  }>;
  skills: {
    hard: string;
    soft: string;
  };
  languages?: string;
}

interface SharedCVPageProps {
  params: Promise<{
    id: string
  }>
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  )
}

function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="font-bb-casual text-6xl md:text-8xl mb-4">
          <GradientText from="from-primary" to="to-purple-500">
            CV Tidak Ditemukan
          </GradientText>
        </h1>
      </motion.div>

      <TextReveal delay={0.4}>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          CV yang Anda cari mungkin telah kadaluarsa atau tidak tersedia. <br />
          Silakan periksa kembali link yang Anda gunakan.
        </p>
      </TextReveal>
    </div>
  )
}

function FeatureHighlight() {
  const features = [
    {
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      title: "ATS-Friendly",
      description: "CV kamu bakal gampang dideteksi sistem ATS perusahaan"
    },
    {
      icon: <Rocket className="h-5 w-5 text-primary" />,
      title: "Cepat & Mudah",
      description: "Bikin CV profesional cuma butuh beberapa menit aja"
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
      title: "Template Keren",
      description: "Pilih template yang cocok sama kepribadian kamu"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-colors"
        >
          <div className="flex items-center gap-3 mb-3">
            {feature.icon}
            <h3 className="font-semibold">{feature.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  )
}



function CVContent({ id }: { id: string }) {
  const { toast } = useToast()
  const [cvData, setCvData] = useState<CVData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCV = async () => {
      try {
        const response = await fetch(`/api/share/${id}`)
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'CV not found or has expired')
        }
        
        const data = await response.json()
        
        if (!data.cv_data) {
          throw new Error('CV data is empty')
        }

        const parsedData = typeof data.cv_data === 'string' 
          ? JSON.parse(data.cv_data) 
          : data.cv_data
          
        setCvData(parsedData)
      } catch (error) {
        console.error('Error fetching CV:', error)
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "CV tidak ditemukan atau telah kadaluarsa",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchCV()
  }, [id, toast])

  const handleDownload = async () => {
    try {
      await generatePDF("cv-content", `cv-${cvData?.personal?.name || "user"}.pdf`)
    } catch (error) {
      console.error("Error downloading PDF:", error)
      toast({
        title: "Error",
        description: "Gagal mengunduh PDF. Silakan coba lagi.",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (!cvData) {
    return <ErrorState />
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 mb-8">
        <TextReveal>
          <p className="text-sm text-muted-foreground">
            CV keren ini dibuat pakai
          </p>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h1 className="text-2xl font-bold">
            <GradientText from="from-primary" to="to-purple-500">
              ApplyYuk CV Builder ✨
            </GradientText>
          </h1>
        </TextReveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="modern-glass rounded-xl p-2 sm:p-4 soft-shadow overflow-hidden relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/0 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.015] dark:opacity-[0.03]" />
        
        <div className="relative">
          <CVPreview initialData={cvData} isSharedView />
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col sm:flex-row justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
          <Button 
            className="rounded-full relative w-full sm:w-auto" 
            onClick={handleDownload}
          >
            <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
            Download PDF
          </Button>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
          <Button asChild variant="outline" className="rounded-full relative w-full sm:w-auto">
            <Link href="/buat-cv">
              <FileEdit className="h-4 w-4 mr-2" />
              Bikin CV Kayak Gini!
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function SharedCVPage({ params }: SharedCVPageProps) {
  const resolvedParams = use(params)
  
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1 pt-32 pb-16 md:pt-40 relative overflow-hidden">
        {/* Background Effects */}
        <motion.div 
          className="absolute inset-0 bg-[#F8F9FC]/80 dark:bg-gray-950/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] dark:bg-[radial-gradient(#ffffff08_1.5px,transparent_1.5px)]"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#e5e7eb20,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_-100px,#ffffff08,transparent)]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <TextReveal>
              <Badge variant="outline" className="mb-4 py-1.5 px-4 rounded-full">
                CV Keren! 🔥
              </Badge>
            </TextReveal>

            <Suspense fallback={<LoadingSpinner />}>
              <CVContent id={resolvedParams.id} />
            </Suspense>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 