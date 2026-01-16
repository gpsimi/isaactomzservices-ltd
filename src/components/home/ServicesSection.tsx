"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ruler, Building2, ClipboardList, Box, Palette, ArrowRight } from "lucide-react";

const services = [
  { icon: Ruler, title: "Architectural Design", description: "Bespoke architectural drawings and designs that blend aesthetics with functionality." },
  { icon: Building2, title: "Building Construction", description: "Premium construction services delivering structural excellence with meticulous attention to detail." },
  { icon: ClipboardList, title: "Project Management", description: "End-to-end project supervision ensuring timely delivery within budget." },
  { icon: Box, title: "3D Visualization", description: "Photorealistic 3D renders bringing your architectural vision to life before construction." },
  { icon: Palette, title: "Interior Design", description: "Sophisticated interior spaces that reflect your personality and lifestyle." },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-section bg-light-concrete overflow-hidden">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="w-12 h-[2px] bg-construction-red" />
            <span className="text-warm-concrete text-sm tracking-[0.2em] uppercase font-medium">Our Expertise</span>
            <span className="w-12 h-[2px] bg-construction-red" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Design & Construction Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we deliver end-to-end solutions for all your architectural and construction needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}
              className="group bg-background p-8 lg:p-10 border border-border hover:border-construction-red/30 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-[2px] h-8 bg-steel-line group-hover:bg-construction-red transition-colors duration-500" />
                <div className="absolute top-0 right-0 h-[2px] w-8 bg-steel-line group-hover:bg-construction-red transition-colors duration-500" />
              </div>
              <service.icon size={40} className="text-construction-red mb-6" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-charcoal p-8 lg:p-10 flex flex-col justify-center items-start"
          >
            <h3 className="font-heading text-2xl font-semibold text-pure-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-warm-concrete mb-6 leading-relaxed">Explore our full range of services and discover how we can bring your vision to life.</p>
            <Button variant="hero-dark" size="lg" asChild>
              <Link href="/services" className="group">
                View All Services
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}