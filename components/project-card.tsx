"use client"

import React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  repoUrl: string
}

export function ProjectCard({ title, description, image, technologies, demoUrl, repoUrl }: ProjectCardProps) {
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
      className="glass-card rounded-xl overflow-hidden group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Subtle diffused glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-20 blur-3xl"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.035), transparent 40%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Inner soft glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-20 blur-2xl"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.025), transparent 50%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <div className="relative h-full w-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
        </div>

        <div className="p-6 relative z-10">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-gray-800/70 text-gray-300 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <Link href={demoUrl} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
              <ExternalLink className="h-4 w-4 mr-1" />
              Demo
            </Link>
            <Link href={repoUrl} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
              <Github className="h-4 w-4 mr-1" />
              Código
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
