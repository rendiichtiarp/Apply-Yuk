"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface Card3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  border?: boolean
  shine?: boolean
}

export function Card3D({ children, className = "", intensity = 10, border = true, shine = true }: Card3DProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const { left, top, width, height } = card.getBoundingClientRect()

    const mouseX = e.clientX - left
    const mouseY = e.clientY - top

    const rotateXValue = intensity * ((mouseY - height / 2) / (height / 2))
    const rotateYValue = -intensity * ((mouseX - width / 2) / (width / 2))

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${border ? "border border-white/10" : ""} rounded-xl overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
    >
      {shine && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 60%)",
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 50%",
          }}
          animate={{
            backgroundPosition: rotateX || rotateY ? "0% 50%" : "100% 50%",
          }}
          transition={{ duration: 0.5 }}
        />
      )}
      {children}
    </motion.div>
  )
}
