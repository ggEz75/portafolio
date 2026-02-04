"use client"

import React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SkillBadgeProps {
  name: string
  icon: ReactNode
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!badgeRef.current) return
    const rect = badgeRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={badgeRef}
      className="glass-card px-4 py-2 rounded-full flex items-center relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 blur-xl"
        style={{
          background: `radial-gradient(120px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 50%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <span className="mr-2 relative z-10">{icon}</span>
      <span className="relative z-10">{name}</span>
    </motion.div>
  )
}
