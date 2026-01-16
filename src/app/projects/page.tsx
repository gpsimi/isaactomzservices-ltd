"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

// Import project images
import projectVilla from "@/assets/images/project-villa.jpg";
import projectOffice from "@/assets/images/project-office.jpg";
import projectDuplex from "@/assets/images/project-duplex.jpg";
import projectRetail from "@/assets/images/project-retail.jpg";
import projectTownhouse from "@/assets/images/project-townhouse.jpg";
import projectHQ from "@/assets/images/project-hq.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Residential Villa",
    category: "Residential",
    location: "Lagos, Nigeria",
    image: projectVilla,
    description: "A stunning contemporary villa featuring open-plan living spaces, infinity pool, and tropical landscaping.",
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial",
    location: "Abuja, Nigeria",
    image: projectOffice,
    description: "State-of-the-art office building with sustainable design, glass curtain walls, and modern amenities.",
  },
  {
    id: 3,
    title: "Luxury Duplex Development",
    category: "Residential",
    location: "Port Harcourt, Nigeria",
    image: projectDuplex,
    description: "Premium duplex homes with contemporary African architecture and sophisticated evening lighting.",
  },
  {
    id: 4,
    title: "Retail Shopping Center",
    category: "Commercial",
    location: "Lagos, Nigeria",
    image: projectRetail,
    description: "Modern retail complex featuring large glass storefronts and vibrant commercial spaces.",
  },
  {
    id: 5,
    title: "Executive Townhouses",
    category: "Residential",
    location: "Enugu, Nigeria",
    image: projectTownhouse,
    description: "Elegant townhouse development in a gated community with premium finishes and landscaping.",
  },
  {
    id: 6,
    title: "Corporate Headquarters",
    category: "Commercial",
    location: "Lagos, Nigeria",
    image: projectHQ,
    description: "Impressive corporate headquarters with sleek modern design and commanding street presence.",
  },
];

const categories = ["All", "Residential", "Commercial"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-charcoal">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-[2px] bg-construction-red"
                />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-warm-concrete text-sm tracking-[0.2em] uppercase font-medium"
                >
                  Our Portfolio
                </motion.span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white leading-tight mb-6"
              >
                Featured Projects
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-warm-concrete text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                Explore our portfolio of completed projects across Nigeria —
                each one a testament to our commitment to excellence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filter & Projects Grid */}
        <section className="py-section bg-background">
          <div className="container-luxury">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12 justify-center"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 font-heading text-sm uppercase tracking-wider transition-all duration-300 btn-angular ${
                    activeCategory === category
                      ? "bg-construction-red text-pure-white"
                      : "bg-light-concrete text-foreground hover:bg-charcoal hover:text-pure-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <motion.img
                    src={project.image.src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Default Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-deep-black/20 to-transparent" />

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
                      {project.category}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-pure-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-warm-concrete text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <p className="text-pure-white/60 text-xs">{project.location}</p>
                  </motion.div>

                  {/* Default Content */}
                  <motion.div
                    animate={{
                      opacity: hoveredProject === project.id ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <span className="text-construction-red text-xs font-medium uppercase tracking-wider mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-pure-white">
                      {project.title}
                    </h3>
                  </motion.div>

                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8"
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-construction-red" />
                    <div className="absolute top-0 right-0 h-[2px] w-full bg-construction-red" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-6">
                Interested in seeing more of our work or discussing your project?
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
