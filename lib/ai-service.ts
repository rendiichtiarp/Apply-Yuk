"use client"

import { useState } from "react"

// Google AI API key
const API_KEY = "AIzaSyBgs3eJqV3rQOpEvPVbKKvOYOX0uUPYCC4"

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
      // Create a prompt for the AI based on the user's CV data
      const prompt = `
        Generate a professional summary for a CV with the following information:
        
        Name: ${data.name}
        Current/Target Position: ${data.position}
        
        Work Experience:
        ${data.experience
          .map(
            (exp) => `
          - ${exp.position} at ${exp.company} (${exp.period})
            ${exp.description}
        `,
          )
          .join("\n")}
        
        Education:
        ${data.education
          .map(
            (edu) => `
          - ${edu.degree} from ${edu.institution} (${edu.year})
        `,
          )
          .join("\n")}
        
        Skills:
        - Hard Skills: ${data.skills.hard}
        - Soft Skills: ${data.skills.soft}
        
        Please write a concise, professional summary (3-5 sentences) that highlights the person's experience, skills, and career goals. The summary should be ATS-friendly and impactful. Write in first person.
      `

      // For demonstration purposes, we'll simulate an API call
      // In a real implementation, you would make an actual API call to Google's AI services

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Sample response based on typical professional summaries
      const sampleResponses = [
        `Profesional ${data.position} berpengalaman dengan keahlian dalam ${data.skills.hard.split(",").slice(0, 3).join(", ")}. Memiliki track record yang kuat dalam ${data.experience[0]?.position || "posisi senior"} di ${data.experience[0]?.company || "perusahaan terkemuka"}, dengan fokus pada peningkatan efisiensi dan inovasi. Menggabungkan kemampuan teknis dengan ${data.skills.soft.split(",").slice(0, 2).join(" dan ")}, saya siap berkontribusi untuk mencapai tujuan organisasi dan mendorong pertumbuhan bisnis.`,
        `${data.position} yang berdedikasi dengan lebih dari ${data.experience.length} tahun pengalaman di industri. Memiliki latar belakang pendidikan ${data.education[0]?.degree || "yang kuat"} dari ${data.education[0]?.institution || "institusi terkemuka"} dan keahlian dalam ${data.skills.hard.split(",").slice(0, 3).join(", ")}. Terbukti sukses dalam ${data.experience[0]?.description?.split(".")[0] || "meningkatkan performa tim"} dan memiliki kemampuan ${data.skills.soft.split(",").slice(0, 2).join(" dan ")}. Mencari kesempatan untuk mengaplikasikan keahlian saya dalam lingkungan yang dinamis dan inovatif.`,
        `Profesional ${data.position} yang berpengalaman dengan fokus pada ${data.skills.hard.split(",")[0] || "teknologi terkini"}. Lulusan ${data.education[0]?.institution || "universitas terkemuka"} dengan pengalaman di ${data.experience[0]?.company || "perusahaan terkemuka"} selama ${data.experience[0]?.period?.split("-")[1] ? "beberapa tahun" : "periode yang signifikan"}. Memiliki keahlian dalam ${data.skills.hard.split(",").slice(0, 3).join(", ")} dan dikenal karena ${data.skills.soft.split(",").slice(0, 2).join(" dan ")}. Berkomitmen untuk terus belajar dan berkembang dalam karir profesional.`,
      ]

      // Select a random response
      const randomIndex = Math.floor(Math.random() * sampleResponses.length)
      const summary = sampleResponses[randomIndex]

      setLoading(false)
      return summary
    } catch (err) {
      setLoading(false)
      const errorMessage = err instanceof Error ? err.message : "Failed to generate summary"
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
