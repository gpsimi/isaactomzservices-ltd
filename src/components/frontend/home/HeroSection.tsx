"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/images/hero-architecture.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full"
        >
          <Image
            src={heroImage}
            alt="Modern architectural building"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 gradient-dark-overlay" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-pure-white/20 hidden lg:block" />
      <div className="absolute bottom-1/4 right-8 w-px h-32 bg-pure-white/20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container-luxury text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Tag Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
          >
            <span className="w-12 h-[2px] bg-construction-red" />
            <span className="text-pure-white/80 text-sm tracking-[0.2em] uppercase font-medium">
              Premium Architecture & Construction
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pure-white leading-[1.1] mb-6"
          >
            Where Vision Meets{" "}
            <span className="relative inline-block">
              Architectural
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-construction-red origin-left"
              />
            </span>{" "}
            Excellence
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-pure-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0"
          >
            Premium architectural design, construction, and project management —
            delivered with precision and integrity across Nigeria.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button variant="hero-dark" size="xl" asChild>
              <Link href="/contact" className="group">
                Request a Consultation
                <ArrowRight
                  size={20}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Button>
            <Button variant="hero-dark-outline" size="xl" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-pure-white/50 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-linear-to-b from-pure-white/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
