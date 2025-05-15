"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface FloatingElementsProps {
  count?: number
  color?: string
  size?: number
  speed?: number
  className?: string
}

interface ElementConfig {
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function FloatingElements({
  count = 10,
  color = "primary",
  size = 10,
  speed = 1,
  className = "",
}: FloatingElementsProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [elements, setElements] = useState<ElementConfig[]>([])

  useEffect(() => {
    const newElements = Array.from({ length: count }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * size + size / 2,
      duration: (Math.random() * 10 + 10) / speed,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1
    }))
    setElements(newElements)
  }, [count, size, speed])

  if (elements.length === 0) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((config, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${className}`}
          style={{
            left: `${config.x}%`,
            top: `${config.y}%`,
            width: `${config.size}px`,
            height: `${config.size}px`,
            backgroundColor: `hsl(var(--${color}) / ${config.opacity})`,
            filter: `blur(${config.size / 3}px)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 15 : -15, 0],
          }}
          transition={{
            duration: config.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: config.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
