"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface TextRevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
  duration?: number
  once?: boolean
  direction?: "up" | "down" | "left" | "right"
}

export function TextReveal({
  children,
  className = "",
  threshold = 0.3,
  delay = 0,
  duration = 0.5,
  once = true,
  direction = "up",
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "down":
        return {
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: 20, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: -20, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getDirectionVariants()}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
