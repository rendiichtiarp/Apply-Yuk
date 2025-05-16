"use client"

import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import { toast } from "@/components/ui/use-toast"

// Fungsi untuk mendeteksi perangkat mobile
function isMobileDevice() {
  return (
    typeof window !== "undefined" &&
    (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i))
  )
}

// Fungsi untuk mendeteksi iOS
function isIOS() {
  return (
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) && 
    !(window as any).MSStream
  )
}

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
    
    // Set exact A4 dimensions in mm
    const a4WidthMm = 210
    const a4HeightMm = 297
    const pagePaddingMm = 15 // Standard document margin
    
    // Convert mm to pixels (assuming 96 DPI)
    const mmToPixels = 96 / 25.4
    const a4WidthPx = a4WidthMm * mmToPixels
    const a4HeightPx = a4HeightMm * mmToPixels
    
    // Reset any scaling and set exact A4 dimensions
    clone.style.transform = "scale(1)"
    clone.style.width = `${a4WidthMm}mm`
    clone.style.height = `${a4HeightMm}mm`
    clone.style.margin = "0"
    clone.style.padding = `${pagePaddingMm}mm`
    clone.style.boxSizing = "border-box"
    clone.style.backgroundColor = "white"
    clone.style.position = "absolute"
    clone.style.top = "-9999px"
    clone.style.left = "-9999px"
    
    // Remove any print-specific classes
    clone.classList.remove('print:scale-100', 'print:shadow-none', 'print:p-10')
    
    // Append clone to body temporarily
    document.body.appendChild(clone)

    // Convert to canvas with better quality
    const canvas = await html2canvas(clone, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      allowTaint: true,
      logging: false,
      width: a4WidthPx,
      height: a4HeightPx,
      windowWidth: a4WidthPx,
      windowHeight: a4HeightPx
    })

    // Remove the clone
    document.body.removeChild(clone)

    // Create PDF with exact A4 dimensions
    const pdf = new jsPDF({
      format: 'a4',
      unit: 'mm',
      orientation: 'portrait'
    })

    // Add image to PDF with exact A4 dimensions
    pdf.addImage(
      canvas.toDataURL('image/png', 1.0),
      'PNG',
      0,
      0,
      a4WidthMm,
      a4HeightMm
    )

    if (isMobileDevice()) {
      // Untuk perangkat mobile, gunakan data URL
      const pdfOutput = pdf.output('datauristring')
      
      // Buka di tab baru
      const newTab = window.open()
      if (newTab) {
        newTab.document.write(
          `<html><head><title>${filename}</title></head><body style="margin:0;padding:0;"><embed width="100%" height="100%" src="${pdfOutput}" type="application/pdf"></body></html>`
        )
      } else {
        // Jika popup diblokir, berikan instruksi alternatif
        toast({
          title: "Info",
          description: "Mohon izinkan popup untuk melihat PDF atau gunakan browser desktop untuk mengunduh.",
        })
      }
    } else {
      // Untuk desktop, gunakan save seperti biasa
      pdf.save(filename)
    }

    // Show success toast
    toast({
      title: "PDF Generated Successfully",
      description: isMobileDevice()
        ? "PDF telah dibuka di tab baru. Anda dapat mengunduhnya dari sana."
        : "CV Anda telah berhasil diunduh.",
    })
  } catch (error) {
    console.error("Error generating PDF:", error)

    // Show error toast
    toast({
      title: "Error Generating PDF",
      description: "Terjadi masalah saat membuat PDF. Silakan coba lagi.",
      variant: "destructive",
    })
  }
}
