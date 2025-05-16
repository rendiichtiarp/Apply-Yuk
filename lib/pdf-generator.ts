"use client"

import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { toast } from "@/components/ui/use-toast"

// Fungsi untuk mengecek apakah perangkat menggunakan iOS
function isIOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
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

    // Penanganan khusus untuk iOS
    if (isIOS()) {
      // Buat blob dan buka di tab baru
      const pdfBlob = pdf.output('blob')
      const blobUrl = URL.createObjectURL(pdfBlob)
      window.open(blobUrl, '_blank')
      
      // Bersihkan URL setelah beberapa detik
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl)
      }, 1000)
    } else {
      // Untuk browser desktop, gunakan save seperti biasa
      pdf.save(filename)
    }

    // Show success toast
    toast({
      title: "PDF Generated Successfully",
      description: isIOS() 
        ? "Your CV has been opened in a new tab. You can save it from there."
        : "Your CV has been downloaded as a PDF file.",
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
