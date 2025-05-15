"use client"

import { useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"

// Inisialisasi Gemini AI dengan model terbaru
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "")

interface GenerateSummaryParams {
  name: string
  position: string
  experience: {
    company: string
    position: string
    description: string
    period: string
  }[]
  education: {
    institution: string
    degree: string
    year: string
  }[]
  skills: {
    hard: string
    soft: string
  }
}

export function useAiService() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generateSummary = async (data: GenerateSummaryParams): Promise<string> => {
    setLoading(true)
    setError(null)

    try {
      // Gunakan model Gemini 2.0 Flash untuk performa terbaik
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

      const prompt = `
        Buat satu paragraf ringkasan profesional dari data berikut:

        PROFIL:
        • Posisi: ${data.position}
        • Hard Skills: ${data.skills.hard.split(",").slice(0, 3).join(", ")}
        • Soft Skills: ${data.skills.soft.split(",").slice(0, 2).join(", ")}
        • Pengalaman: ${data.experience[0]?.position} di ${data.experience[0]?.company || "perusahaan terkemuka"} (${data.experience[0]?.period || ""})
        • Total Pengalaman: ${data.experience.length} tahun
        • Pendidikan: ${data.education[0]?.degree} dari ${data.education[0]?.institution}
        • Pencapaian: ${data.experience[0]?.description?.split(".")[0] || ""}

        ATURAN:
        - Buat SATU paragraf dengan 2-3 kalimat saja
        - Gunakan format: [Posisi] + [Pengalaman & Skills] + [Tujuan]
        - Hindari kata: profesional, berdedikasi, berkomitmen
        - Fokus pada fakta, bukan cerita
        - Jangan buat pilihan/variasi
        - Jangan tambahkan komentar atau penjelasan

        CONTOH:
        "Data Analyst dengan keahlian Python dan SQL, berpengalaman 2 tahun di Tokopedia dalam mengembangkan dashboard analytics. Menggabungkan kemampuan analitis dan komunikasi untuk memberikan insight yang actionable bagi pertumbuhan bisnis."
      `

      const result = await model.generateContent(prompt)
      const response = await result.response
      const summary = response.text()

      setLoading(false)
      return summary.trim()

    } catch (err) {
      setLoading(false)
      const errorMessage = err instanceof Error ? err.message : "Gagal generate ringkasan"
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }

  return {
    generateSummary,
    loading,
    error,
  }
}
