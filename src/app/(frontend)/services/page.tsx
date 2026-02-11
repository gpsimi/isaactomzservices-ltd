"use client";

import { Header } from "@/components/frontend/layout/Header";
import { Footer } from "@/components/frontend/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Ruler,
  Building2,
  ClipboardList,
  Box,
  Palette,
  Zap,
  Calculator,
  Wallet,
  ArrowRight,
} from "lucide-react";

const allServices = [
  {
    icon: Ruler,
    title: "Architectural Drawings & Designs",
    description:
      "Comprehensive architectural plans tailored to your vision. From initial concept sketches to detailed construction drawings, we create designs that balance aesthetics, functionality, and regulatory compliance.",
  },
  {
    icon: Box,
    title: "3D Visualizations",
    description:
      "Experience your project before it's built with our photorealistic 3D renders. Our visualizations help you make informed design decisions and communicate your vision to stakeholders.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Transform your spaces with our bespoke interior design services. We create sophisticated environments that reflect your personality while maximizing comfort and functionality.",
  },
  {
    icon: Building2,
    title: "Building Construction",
    description:
      "Full-service construction from foundation to finish. Our experienced team ensures every structure is built to the highest standards using premium materials and proven techniques.",
  },
  {
    icon: Zap,
    title: "Mechanical Drawings",
    description:
      "Detailed mechanical, electrical, and plumbing (MEP) designs ensuring your building systems work seamlessly together for optimal performance and efficiency.",
  },
  {
    icon: Zap,
    title: "Electrical Drawings",
    description:
      "Comprehensive electrical system designs compliant with Nigerian standards. From power distribution to lighting layouts, we ensure safe and efficient electrical installations.",
  },
  {
    icon: Calculator,
    title: "Cost Estimation",
    description:
      "Accurate project costing based on current market rates. Our detailed estimates help you plan your budget effectively and avoid unexpected expenses.",
  },
  {
    icon: Wallet,
    title: "Cost Management",
    description:
      "Ongoing financial oversight throughout your project. We track expenditures, manage variations, and ensure your project stays within budget without compromising quality.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "End-to-end project supervision from inception to handover. Our project managers coordinate all stakeholders, manage timelines, and ensure seamless execution.",
  },
];

export default function Services() {
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
                <span className="w-12 h-[2px] bg-construction-red" />
                <span className="text-warm-concrete text-sm tracking-[0.2em] uppercase font-medium">
                  Our Services
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white leading-tight mb-6">
                Our Expertise
              </h1>
              <p className="text-warm-concrete text-lg md:text-xl max-w-2xl leading-relaxed">
                Comprehensive architectural and construction services delivered 
                with premium quality and professional excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-section bg-background">
          <div className="container-luxury">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group p-8 lg:p-10 bg-light-concrete border border-transparent hover:border-construction-red/30 transition-all duration-500 relative"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 left-0 w-[2px] h-8 bg-construction-red" />
                    <div className="absolute top-0 left-0 h-[2px] w-8 bg-construction-red" />
                  </div>

                  <service.icon
                    size={48}
                    className="text-construction-red mb-6"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section bg-charcoal">
          <div className="container-luxury text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-pure-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-warm-concrete text-lg mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your requirements and receive a tailored proposal.
              </p>
              <Button variant="hero-dark" size="xl" asChild>
                <Link href="/contact" className="group">
                  Request a Consultation
                  <ArrowRight
                    size={20}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
