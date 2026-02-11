'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Calendar } from 'lucide-react'
import type { Project, Media } from '@/payload-types'

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
}

export const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  // If you have categories in your CMS, you can generate this dynamically.
  // For now, I'll stick to a simple list or derived from data if possible.
  // Since the schema doesn't explicitly have a 'category' select field yet (based on my read),
  // I will just use "All" or try to infer it, or just remove the filter if not needed.
  // The mock had: Residential, Commercial.
  // The schema has: client, location, year.
  // Let's hide the filter for now until we add a Category field to the schema,
  // OR we can just show all.

  const [hoveredProject, setHoveredProject] = useState<number | string | null>(null)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project) => {
        const heroImage = project.heroImage as Media | undefined
        // Default category for design consistency
        const category = 'Premium Build'

        return (
          <motion.div
            key={project.id}
            variants={itemVariants}
            layout
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group relative aspect-4/3 overflow-hidden cursor-pointer bg-charcoal"
          >
            <Link href={`/projects/${project.slug}`} className="block h-full w-full">
              {/* Image */}
              {heroImage?.url && (
                <motion.img
                  src={heroImage.url}
                  alt={heroImage.alt || project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
              )}

              {/* Default Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-charcoal/90 flex flex-col justify-center items-center p-6 text-center"
              >
                <span className="text-construction-red text-sm font-medium uppercase tracking-wider mb-2">
                  {category}
                </span>
                <h3 className="font-heading text-xl font-semibold text-pure-white mb-2">
                  {project.title}
                </h3>
                <p className="text-warm-concrete text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-pure-white/60 text-xs">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {project.year}
                  </span>
                </div>
              </motion.div>

              {/* Default Content (Bottom) */}
              <motion.div
                animate={{
                  opacity: hoveredProject === project.id ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6"
              >
                <span className="text-construction-red text-xs font-medium uppercase tracking-wider mb-1 block">
                  {category}
                </span>
                <h3 className="font-heading text-lg font-semibold text-pure-white">
                  {project.title}
                </h3>
              </motion.div>

              {/* Corner accent */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 pointer-events-none"
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-[2px] h-full bg-construction-red" />
                <div className="absolute top-0 right-0 h-[2px] w-full bg-construction-red" />
              </motion.div>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
