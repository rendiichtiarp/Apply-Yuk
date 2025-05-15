"use client"

import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { toast } from "@/components/ui/use-toast"

export async function generatePDF(elementId: string, filename = "cv.pdf"): Promise<void> {
  try {
    // Show loading toast
    toast({
      title: "Generating PDF",
      description: "Please wait while we prepare your CV...",
    })

    // Get the element to convert to PDF
    const element = document.getElementById(elementId)
    if (!element) {
      throw new Error("Element not found")
    }

    // Create a clone of the element to avoid modifying the original
    const clone = element.cloneNode(true) as HTMLElement
    clone.style.transform = "scale(1)"
    clone.style.width = "210mm"
    clone.style.height = "auto"
    clone.style.position = "absolute"
    clone.style.top = "-9999px"
    clone.style.left = "-9999px"
    document.body.appendChild(clone)

    // Convert to canvas
    const canvas = await html2canvas(clone, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      allowTaint: true,
      logging: false,
    })

    // Remove the clone
    document.body.removeChild(clone)

    // Calculate dimensions
    const imgWidth = 210 // A4 width in mm
    const pageHeight = 297 // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    const heightLeft = imgHeight

    // Create PDF
    const pdf = new jsPDF("p", "mm", "a4")
    const imgData = canvas.toDataURL("image/png")

    // Add image to PDF
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)

    // Save PDF
    pdf.save(filename)

    // Show success toast
    toast({
      title: "PDF Generated Successfully",
      description: "Your CV has been downloaded as a PDF file.",
    })
  } catch (error) {
    console.error("Error generating PDF:", error)

    // Show error toast
    toast({
      title: "Error Generating PDF",
      description: "There was a problem creating your PDF. Please try again.",
      variant: "destructive",
    })
  }
}
