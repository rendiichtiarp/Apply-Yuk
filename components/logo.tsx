import Link from "next/link"
import { FileText } from "lucide-react"

interface LogoProps {
  variant?: "default" | "white"
  size?: "sm" | "md" | "lg"
}

export function Logo({ variant = "default", size = "md" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-foreground"
  const iconColor = variant === "white" ? "text-white" : "text-primary"

  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 26,
  }

  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative">
        <div 
          className={`bg-primary/5 dark:bg-primary/10 p-2 rounded-xl transition-all duration-300 
            hover:scale-105 active:scale-95 group-hover:bg-primary/10 dark:group-hover:bg-primary/15`}
        >
          <FileText 
            size={iconSizes[size]} 
            className="text-primary transition-transform duration-300 group-hover:scale-110" 
          />
        </div>
      </div>
      <span 
        className={`font-bold tracking-tight ${sizeClasses[size]} ${textColor} 
          transition-all duration-300 transform translate-x-0 opacity-100`}
      >
        Apply<span className="text-primary font-black">Yuk</span>
      </span>
    </Link>
  )
}
