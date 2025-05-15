"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxScrollProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxScroll({ children, className = "", speed = 0.5, direction = "up" }: ParallaxScrollProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const transformUp = useTransform(scrollYProgress, [0, 1], ["0%", `${-100 * speed}%`])
  const transformDown = useTransform(scrollYProgress, [0, 1], ["0%", `${100 * speed}%`])
  const transformLeft = useTransform(scrollYProgress, [0, 1], ["0%", `${-100 * speed}%`])
  const transformRight = useTransform(scrollYProgress, [0, 1], ["0%", `${100 * speed}%`])

  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return transformUp
      case "down":
        return transformDown
      case "left":
        return transformLeft
      case "right":
        return transformRight
    }
  }

  const transformValue = getTransformValue()
  const isVertical = direction === "up" || direction === "down"

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          [isVertical ? "y" : "x"]: transformValue,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
