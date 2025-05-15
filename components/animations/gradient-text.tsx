"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  to?: string
  animate?: boolean
  duration?: number
}

export function GradientText({
  children,
  className = "",
  from = "from-primary",
  to = "to-purple-500",
  animate = true,
  duration = 3,
}: GradientTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      })
    }
  }, [isInView, controls])

  return (
    <motion.span
      ref={ref}
      className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent bg-300% ${className}`}
      animate={animate ? controls : undefined}
      transition={{ duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      {children}
    </motion.span>
  )
}
