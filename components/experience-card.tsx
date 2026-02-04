"use client"

import React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Building } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export function ExperienceCard({ title, company, period, description, technologies }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      className="glass-card p-6 rounded-xl relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm z-0" />

      {/* Subtle diffused glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-[1] blur-3xl"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.035), transparent 40%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Inner soft glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-[1] blur-2xl"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.025), transparent 50%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-4 gap-y-2 sm:gap-x-4">
          <div className="flex items-center">
            <Building className="h-4 w-4 mr-2" />
            <span>{company}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{period}</span>
          </div>
        </div>

        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-800/70 text-gray-300 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
