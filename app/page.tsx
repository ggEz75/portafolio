"use client"

import Link from "next/link"
import { ArrowRight, Code, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ExperienceCard } from "@/components/experience-card"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { NavBar } from "@/components/nav-bar"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NavBar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            variants={staggerItem}
          >
            Hola, Soy Guille y este es mi portfolio

          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            variants={staggerItem}
          >
            Desarrollo aplicaciones web escalables combinando frontend, backend, cloud e integración con inteligencia artificial. Enfocado en crear soluciones reales orientadas a rendimiento, automatización y buenas prácticas de arquitectura.
          </motion.p>
          <motion.div className="flex gap-4" variants={staggerItem}>
            <Button className="group">
              Ver proyectos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-gray-700 hover:bg-gray-900 bg-transparent">
              Contacto
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-20" id="experiencia">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Experiencia Profesional
        </motion.h2>
        <motion.div
          className="grid gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
          <ExperienceCard
              title="Analista de Datos Internos"
              company="Subsecretaría de Modernización, Innovación y Tecnología"
              period="2022 - Presente"
              description="Desarrollo de soluciones automatizadas para análisis y visualización de datos administrativos, optimizando procesos internos y mejorando el acceso a la información institucional."
              technologies={["Python", "Pandas", "Automatización", "Procesamiento de datos"]}
            />

          </motion.div>
          <motion.div variants={staggerItem}>
          <ExperienceCard
              title="Desarrollador Full Stack(Autónomo)"
              company="Proyectos Personales"
              period="2021 - Presente"
              description="Desarrollo de aplicaciones web full stack con autenticación, bases de datos relacionales, integración con inteligencia artificial y despliegue en la nube."
              technologies={["Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "NextAuth", "Render"]}
            />

          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20" id="proyectos">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Proyectos Destacados
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <ProjectCard
              title="E-commerce Platform"
              description="Plataforma de comercio electrónico completa con pasarela de pagos, gestión de inventario y panel de administración."
              image="/placeholder.svg?height=300&width=500"
              technologies={["Next.js", "Prisma", "PostgreSQL", "Stripe"]}
              demoUrl="#"
              repoUrl="#"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ProjectCard
              title="Dashboard Analytics"
              description="Dashboard interactivo para visualización de datos y análisis de métricas empresariales en tiempo real."
              image="/placeholder.svg?height=300&width=500"
              technologies={["React", "D3.js", "Firebase", "Material UI"]}
              demoUrl="#"
              repoUrl="#"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ProjectCard
              title="Social Media App"
              description="Aplicación de redes sociales con funcionalidades de chat, publicaciones y perfiles de usuario."
              image="/placeholder.svg?height=300&width=500"
              technologies={["React Native", "GraphQL", "MongoDB", "Socket.io"]}
              demoUrl="#"
              repoUrl="#"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ProjectCard
              title="Portfolio Personal"
              description="Portfolio profesional con diseño minimalista y efectos visuales avanzados."
              image="/placeholder.svg?height=300&width=500"
              technologies={["Next.js", "Tailwind CSS", "Framer Motion"]}
              demoUrl="#"
              repoUrl="#"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20" id="habilidades">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Habilidades Técnicas
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div className="mb-10" variants={staggerItem}>
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="React" icon={<Code className="h-4 w-4" />} />
              <SkillBadge name="Next.js" icon={<Code className="h-4 w-4" />} />
              <SkillBadge name="TypeScript" icon={<Code className="h-4 w-4" />} />
              <SkillBadge name="Tailwind" icon={<Code className="h-4 w-4" />} />
              <SkillBadge name="Framer Motion" icon={<Code className="h-4 w-4" />} />
            </div>
          </motion.div>

          <motion.div className="mb-10" variants={staggerItem}>
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Node.js" icon={<Code className="h-4 w-4" />} />
              <SkillBadge name="APIs REST" icon={<Code className="h-4 w-4" />} />
              <SkillBadge name="NextAuth" icon={<Code className="h-4 w-4" />} />
            </div>
          </motion.div>

          <motion.div className="mb-10" variants={staggerItem}>
            <h3 className="text-xl font-semibold mb-4">Base de datos</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="PostgreSQL" icon={<Code className="h-4 w-4" />} />
              <SkillBadge name="Prisma ORM" icon={<Code className="h-4 w-4" />} />
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="text-xl font-semibold mb-4">Extra / IA</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="OpenAI API" icon={<Code className="h-4 w-4" />} />
              <SkillBadge name="Python" icon={<Code className="h-4 w-4" />} />
              <SkillBadge name="Pandas" icon={<Code className="h-4 w-4" />} />
              <SkillBadge name="Automatización" icon={<Code className="h-4 w-4" />} />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20" id="contacto">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>
          <div className="glass-card p-8 rounded-2xl">
            <p className="text-lg text-gray-300 mb-8 text-center">
              ¿Interesado en trabajar juntos? Contáctame a través de cualquiera de estos canales.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="mailto:guillegomez575@gmail.com" className="contact-link">
                <Mail className="h-6 w-6 mr-2" />
                guillegomez575@gmail.com
              </Link>
              <Link href="https://github.com/ggEz75" target="_blank" className="contact-link">
                <Github className="h-6 w-6 mr-2" />
                GitHub
              </Link>
              <Link href="https://linkedin.com/in/guillermo-gomez1209" target="_blank" className="contact-link">
                <Linkedin className="h-6 w-6 mr-2" />
                LinkedIn
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-8 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} . Todos los derechos reservados.</p>
        </div>
      </motion.footer>
    </div>
  )
}
